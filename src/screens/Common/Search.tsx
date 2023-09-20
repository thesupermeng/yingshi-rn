import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {SearchBar} from '@rneui/base';
import {useTheme} from '@react-navigation/native';
import OrderedSearchResultsList from '../../components/search/RecommendationList';
import SearchResultList from '../../components/search/SearchResultList';
import ScreenContainer from '../../components/container/screenContainer';
import BackButton from '../../components/button/backButton';
import SearchIcon from '../../../static/images/search.svg';
import ClearIcon from '../../../static/images/cross.svg';
import {useQuery} from '@tanstack/react-query';

import {SuggestResponseType, SuggestedVodType} from '../../types/ajaxTypes';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {API_DOMAIN} from '../../utility/constants';
import VodWithDescriptionList from '../../components/vod/vodWithDescriptionList';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import FastImage from 'react-native-fast-image';
import {
  addSearchHistory,
  clearSearchHistory,
} from '../../redux/actions/searchActions';
import Animated, {
  FadeInUp,
  FadeOutUp,
  useAnimatedStyle,
} from 'react-native-reanimated';
import ClearHistoryIcon from '../../../static/images/clear.svg';
import EmptyList from '../../components/common/emptyList';
import appsFlyer from 'react-native-appsflyer';
import ConfirmationModal from '../../components/modal/confirmationModal';

export default ({navigation, route}: RootStackScreenProps<'搜索'>) => {
  const [search, setSearch] = useState('');
  const [placeholderSearch, setPlaceHolderSearch] = useState(
    route.params.initial,
  );

  const [searchTimer, setSearchTimer] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [searchResults, setSearchResults] = useState<Array<SuggestedVodType>>(
    [],
  );
  const [showResults, setShowResults] = useState(false);

  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    ({searchHistoryReducer}: RootState) => searchHistoryReducer,
  );
  const [isFetching, setisFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {colors, textVariants, spacing, icons} = useTheme();
  const {data: recommendations} = useQuery({
    queryKey: ['recommendationList'],
    queryFn: () =>
      fetch(`${API_DOMAIN}vod/v1/vod?by=hits_day`)
        .then(response => response.json())
        .then((json: SuggestResponseType) => {
          return json.data.List;
        }),
  });

  async function fetchData(text: string) {
    setisFetching(true);
    fetch(`${API_DOMAIN}vod/v1/vod?wd=${text}`)
      .then(response => response.json())
      .then((json: SuggestResponseType) => {
        setSearchTimer(0);

        if (json.data.List === null) {
          setSearchResults([]);
        } else {
          setSearchResults(json.data.List);
        }
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setisFetching(false);
      });
  }

  useEffect(() => {
    if (route.params.initial !== '') {
      fetchData(route.params.initial);
    }
  }, []);

  const updateSearch = (input: string) => {
    setSearch(input);
    setSearchResults([]);
    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    setSearchTimer(
      setTimeout(() => {
        fetchData(input);
      }, 100),
    );
  };

  const onSubmit = () => {
    let searchKeyword = placeholderSearch;

    if (search != '') {
      searchKeyword = search;
    }

    const eventName = 'search_keyword';
    const eventValues = {
      keyword: searchKeyword,
    };

    // appsFlyer.logEvent(
    //   eventName,
    //   eventValues,
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.error(err);
    //   },
    // );

    fetchData(searchKeyword);
    dispatch(addSearchHistory(searchKeyword));
    setShowResults(!showResults);
  };

  const clearHistory = useCallback(() => {
    dispatch(clearSearchHistory());
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.nav}>
        <BackButton onPress={() => navigation.goBack()} />
        <SearchBar
          platform="default"
          containerStyle={styles.containerStyle}
          inputContainerStyle={{
            backgroundColor: colors.search,
            ...styles.inputContainerStyle,
          }}
          leftIconContainerStyle={{}}
          rightIconContainerStyle={{}}
          inputStyle={textVariants.small}
          loadingProps={{}}
          onChangeText={(newVal: string) => {
            setShowResults(false);
            updateSearch(newVal);
          }}
          // placeholder="输入搜索关键词"
          placeholder={placeholderSearch}
          placeholderTextColor={colors.muted}
          round
          onSubmitEditing={onSubmit}
          searchIcon={
            <SearchIcon color={colors.muted} height={23} width={23} />
          }
          value={search}
          clearIcon={
            search ? (
              <TouchableOpacity
                onPress={() => {
                  setSearchResults([]);
                  setSearch('');
                  setShowResults(false);
                }}>
                <ClearIcon height={12} width={12} />
              </TouchableOpacity>
            ) : (
              <></>
            )
          }
        />
      </View>

      {showResults ? (
        <View style={styles.searchResult}>
          <VodWithDescriptionList vodList={searchResults} />
        </View>
      ) : (
        <ScrollView
          style={styles.searchResult}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false} // Hide the vertical scroll bar
        >
          <View style={{marginLeft: 10}}>
            {search !== undefined &&
            search !== null &&
            search.length === 0 &&
            recommendations ? (
              <View style={{gap: spacing.m}}>
                {searchHistory.history.length > 0 && (
                  <Animated.View style={{gap: spacing.m}} entering={FadeInUp}>
                    <View style={styles.rowApart}>
                      <Text style={{...textVariants.header}}>历史搜索</Text>
                      <TouchableOpacity
                        style={styles.rowApart}
                        onPress={() => {
                          setIsDialogOpen(true);
                        }}>
                        <Text
                          style={{
                            ...textVariants.small,
                            marginRight: 5,
                            color: colors.muted,
                          }}>
                          清除
                        </Text>
                        <ClearHistoryIcon
                          height={textVariants.small.fontSize}
                          width={textVariants.small.fontSize}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.searchContainer}>
                      {searchHistory.history.map((hst, idx) => {
                        if (hst === null || hst.trim().length === 0) {
                          return null; // Skip rendering for empty strings
                        }
                        return (
                          <TouchableOpacity
                            key={`search-${idx}`}
                            style={{
                              backgroundColor: colors.search,
                              ...styles.hst,
                            }}
                            onPress={() => {
                              dispatch(addSearchHistory(hst));
                              setisFetching(true);
                              updateSearch(hst);
                              setShowResults(true);
                            }}>
                            <Text
                              style={{
                                ...textVariants.body,
                                color: colors.muted,
                              }}>
                              {hst}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </Animated.View>
                )}
                <OrderedSearchResultsList
                  recommendationList={recommendations}
                  style={{flex: 1, maxHeight: '100%'}} // Adjust the styles here to make it scrollable
                />
              </View>
            ) : (
              <SearchResultList
                searchResultList={searchResults}
                keyword={search}
                onItemSelect={(vod: string) => {
                  setisFetching(true);
                  updateSearch(vod);
                  setShowResults(true);
                }}
              />
            )}
          </View>
        </ScrollView>
      )}
      {showResults && searchResults.length === 0 && !isFetching && (
        <EmptyList description={`抱歉没有找到“${search}”的相关视频`} />
      )}

      {showResults && searchResults.length === 0 && isFetching && (
        <View style={styles.buffering}>
          <FastImage
            source={require('../../../static/images/videoBufferLoading.gif')}
            style={{width: 100, height: 100}}
            resizeMode="contain"
          />
        </View>
      )}

      <ConfirmationModal
        onConfirm={() => {
          clearHistory();
          setIsDialogOpen(false);
        }}
        onCancel={() => {
          setIsDialogOpen(false);
        }}
        isVisible={isDialogOpen}
        title="清除提示"
        subtitle="您是否确定清除搜索记录吗？"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },
  containerStyle: {
    paddingLeft: 10,
    backgroundColor: 'transparent',
    textAlign: 'left',
    flexGrow: 1,
    borderRadius: 100,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    borderRadius: 100,
    height: 35,
  },
  searchResult: {
    marginTop: 10,
    flex: 1,
    marginBottom: 20,
  },
  rowApart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    color: 'yellow',
    position: 'absolute',
    top: '40%',
    left: '36%',
    zIndex: 100,
  },
  hst: {
    paddingTop: 7,
    paddingBottom: 9,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    marginBottom: 4,
    marginRight: 10,
  },
});
