import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, Text, RefreshControl, FlatList} from 'react-native';
import {useQueryClient} from '@tanstack/react-query';
import ScreenContainer from '../../components/container/screenContainer';
import MainHeader from '../../components/header/homeHeader';
import {useTheme} from '@react-navigation/native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {VodPlaylistResponseType, VodTopicType} from '../../types/ajaxTypes';
import VodPlaylist from '../../components/playlist/vodPlaylist';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {API_DOMAIN} from '../../utility/constants';
import FastImage from 'react-native-fast-image';
import {useIsFocused} from '@react-navigation/native';
// import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
type FlatListType = {
  item: VodTopicType;
  index: number;
};

export default ({navigation}: BottomTabScreenProps<any>) => {
  // const BTN_COLORS = ['#FFCC12', '#F1377A', '#ED7445', '#7E9CEE', '#30AA55',];
  const {textVariants, colors, spacing} = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<VodTopicType>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();

  // Function to handle the refresh action
  const handleTabPress = () => {
    if (isFocused) {
      handleRefresh();
    }
  };

  // Add an event listener to the navigation object for the tab press event
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    // Clean up the event listener when the component unmounts
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = (page: number) =>
    fetch(`${API_DOMAIN}topic/v1/topic?page=${page}`)
      .then(response => response.json())
      .then((json: VodPlaylistResponseType) => {
        setTotalPage(Number(json.data.TotalPageCount));
        return Object.values(json.data.List);
      });

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({pageParam = 1}) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        //if reach end
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      // onSuccess: (data) => {
      //     if (data && data?.pages) {
      //         setResults([...results, ...data.pages[data.pages.length - 1].flat()])
      //     }
      // }
    },
  );

  const renderItem = ({item}: FlatListType) => (
    <VodPlaylist playlist={item} titleStyle={{color: colors.text}} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();
  // Function to reset variables and refresh data

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);

    // Reset your variables here (e.g., setTotalPage(0))
    // You may also need to reset other states related to data fetching.

    // Reset the playlists by clearing the cache and refetching data
    await queryClient.resetQueries(['vodPlaylist']); // Pass the query key as an array of strings

    return setIsRefreshing(false);
  }, []);

  return (
    <>
      <ScreenContainer containerStyle={{paddingLeft: 0, paddingRight: 0}}>
        <MainHeader
          headerStyle={{
            marginBottom: spacing.m,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              播单
            </Text>
          }
          navigator={navigation}
        />
        {isRefreshing && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <FastImage
                style={{height: 80, width: 80}}
                source={require('../../../static/images/loading-spinner.gif')}
                resizeMode={FastImage.resizeMode.contain}
              />
            }
          </View>
        )}
        {!isRefreshing && (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages.flat()}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              ListFooterComponent={
                <View style={{...styles.loading, marginBottom: spacing.xl}}>
                  {hasNextPage && (
                    <FastImage
                      style={{height: 80, width: 80}}
                      source={require('../../../static/images/loading-spinner.gif')}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{...textVariants.body, color: colors.muted}}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={handleRefresh}
                  tintColor="#FAC33D" // Customize the color of the loading spinner
                />
              }
            />
          </>
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
