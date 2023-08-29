import React, {useMemo, useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import ScreenContainer from '../components/container/screenContainer';
import {useTheme} from '@react-navigation/native';
import {useQuery, useQueries, UseQueryResult} from '@tanstack/react-query';
import {useQueryClient} from '@tanstack/react-query';
import {
  NavOptionsResponseType,
  VodCarousellResponseType,
  VodPlaylistResponseType,
  VodTopicType,
  VodType,
  LiveTVStationsResponseType,
} from '../types/ajaxTypes';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {API_DOMAIN} from '../utility/constants';
import CatagoryHome from '../components/container/CatagoryHome';
import RecommendationHome from '../components/container/RecommendationHome';
import HomeHeader from '../components/header/homeHeader';
import FastImage from 'react-native-fast-image';
// import { FlatList } from 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import NoConnection from './../components/common/noConnection';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
interface NavType {
  id: number;
  name: string;
}

export default ({navigation}: BottomTabScreenProps<any>) => {
  const isFocused = useIsFocused();
  const {colors, textVariants, spacing} = useTheme();
  const [navId, setNavId] = useState(0);
  const width = Dimensions.get('window').width;
  const ref = useRef<any>();
  const onEndReachedCalledDuringMomentum = useRef(true);
  const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const navRef = useRef<any>();
  const queryClient = useQueryClient();
  const [isOffline, setIsOffline] = useState(false);
  const [showHomeLoading, setShowHomeLoading] = useState(true);

  const {data: navOptions} = useQuery({
    queryKey: ['HomePageNavOptions'],
    queryFn: () =>
      fetch(`${API_DOMAIN}nav/v1/navItems`, {})
        .then(response => response.json())
        .then((json: NavOptionsResponseType) => {
          return json.data;
        }),
  });

  const fetchData = useCallback((id: number) => {
    return fetch(`${API_DOMAIN}page/v1/typepage?id=${id}`)
      .then(response => response.json())
      .then((json: VodCarousellResponseType) => {
        return json;
      });
  }, []);

  const data = useQueries({
    queries: navOptions
      ? navOptions?.map((x: any) => ({
          queryKey: ['HomePage', x.id],
          queryFn: () => fetchData(x.id),
        }))
      : [],
  });

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh(navId);
    }
  };
  const handleShowLoading = async () => {
    setShowHomeLoading(false);
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
      },
    );
    return () => removeNetInfoSubscription();
  }, []);

  //refresh
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  // Function to handle the pull-to-refresh action
  const handleRefresh = async (id: number, showloading: boolean = false) => {
    if (showloading) {
      setIsRefreshing(true);

      setHideContent(true);
    }
    try {
      await queryClient.invalidateQueries(['HomePage', id]);

      setIsRefreshing(false);
      setNavId(id);
      setHideContent(false);
      setShowHomeLoading(false);

      return;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const handleTabPress = async () => {
      if (isFocused) {
        setIsRefreshing(prevIsRefreshing => {
          if (prevIsRefreshing) {
            return prevIsRefreshing; // No need to update, it's already true
          } else {
            return true; // Update to true
          }
        });
        await handleRefresh(navId, true);
        setIsRefreshing(false);
      }
    };
    // Add an event listener to the navigation object for the tab press event
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);
    // Clean up the event listener when the component unmounts or when navId changes
    return () => unsubscribe();
  }, [navigation, isFocused, navId, handleRefresh]);

  const getContent = useCallback(
    ({
      item,
      index,
    }: {
      item: UseQueryResult<VodCarousellResponseType>;
      index: number;
    }) => {
      return (
        <>
          {item?.data !== undefined &&
            (index === 0 ? (
              <RecommendationHome
                vodCarouselRes={item.data}
                setScrollEnabled={setScrollEnabled}
                onRefresh={handleRefresh}
                onLoad={handleShowLoading}
                refreshProp={isRefreshing}
              />
            ) : (
              <CatagoryHome
                vodCarouselRes={item.data}
                navId={index}
                setScrollEnabled={setScrollEnabled}
                onRefresh={handleRefresh}
                refreshProp={isRefreshing}
              />
            ))}
        </>
      );
    },
    [],
  );

  const onScrollEnd = useCallback(
    (e: any) => {
      if (!onEndReachedCalledDuringMomentum.current) {
        const pageNumber = Math.min(
          Math.max(Math.floor(e.nativeEvent.contentOffset.x / width + 0.5), 0),
          data.length,
        );
        if (pageNumber !== navId) {
          setNavId(pageNumber);
          navRef?.current?.scrollToIndex({
            index: pageNumber,
            viewOffset: 24,
          });
        }
        onEndReachedCalledDuringMomentum.current = true;
      }
    },
    [data, width, onEndReachedCalledDuringMomentum, navRef, navId],
  );

  return (
    <>
      <ScreenContainer isHome={true} containerStyle={{paddingLeft: 0, paddingRight: 0}}>
        <View
          style={{
            backgroundColor: colors.background,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}>
          <HomeHeader navigator={navigation} />
          <FlatList
            data={navOptions ? navOptions : []}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={navRef}
            contentContainerStyle={styles.nav}
            renderItem={({item, index}: {item: NavType; index: number}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: spacing.m,
                    justifyContent: 'center',
                    display: 'flex',
                  }}
                  onPress={() => {
                    if (data.length > 0) {
                      setNavId(index);
                      ref?.current?.scrollToIndex({
                        index: index,
                      });
                    }
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize:
                        navId === index
                          ? textVariants.selected.fontSize
                          : textVariants.unselected.fontSize,
                      fontWeight:
                        navId === index
                          ? textVariants.selected.fontWeight
                          : textVariants.unselected.fontWeight,
                      color: navId === index ? colors.primary : colors.muted,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {(!data || isRefreshing || hideContent) && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: '50%',
              marginLeft: -40, // Half of the element's width
            }}>
            {
              <FastImage
                style={{height: 80, width: 80}}
                source={require('../../static/images/loading-spinner.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            }
          </View>
        )}
        {showHomeLoading && !isOffline && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(20,22,25)',
            }}>
            <FastImage
              source={require('../../static/images/home-loading.gif')}
              style={{
                width: 150,
                height: 150,
                position: 'relative',
                bottom: 50,
                zIndex: -1,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}
        {data && !isOffline && (
          <View
            style={{
              opacity: hideContent ? 0 : 1,
              position: showHomeLoading ? 'absolute' : 'relative',
            }}>
            <FlatList
              ref={ref}
              data={data}
              pagingEnabled={true}
              scrollEnabled={
                scrollEnabled && onEndReachedCalledDuringMomentum.current
              }
              horizontal={true}
              windowSize={3}
              maxToRenderPerBatch={2}
              initialNumToRender={1}
              nestedScrollEnabled={true}
              getItemLayout={(data, index) => ({
                length: width,
                offset: width * index,
                index,
              })}
              onMomentumScrollBegin={() => {
                onEndReachedCalledDuringMomentum.current = false;
              }}
              onMomentumScrollEnd={onScrollEnd}
              renderItem={getContent}
            />
          </View>
        )}
      </ScreenContainer>

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 45,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
});
