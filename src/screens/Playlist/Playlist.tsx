import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, Text, RefreshControl} from 'react-native';
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
import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';
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
const REFRESH_AREA_HEIGHT = 80;
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
  //refresh.js

  const [toggleLottie, setToggleLottie] = useState(false);
  const [toggleGesture, setToggleGesture] = useState(true);
  const [gestureActive, setGestureActive] = useState(false);

  const flatlistRef = useAnimatedRef();

  const translationY = useSharedValue(0);
  const pullUpTranslate = useSharedValue(0);

  const fetchData = async () => {
    // setTimeout(() => {
    //   setRecipes([fDAta, ...recipes]);
    // }, 1000);

    await handleRefresh();

    translationY.value = withTiming(0, {duration: 0}, finished => {
      pullUpTranslate.value = 0;

      runOnJS(setToggleLottie)(false);
    });
  };

  const pullUpAnimation = () => {
    pullUpTranslate.value = withDelay(
      0,
      withTiming(
        pullUpTranslate.value === 0 ? -100 : 0,
        {duration: 200},
        finished => {
          if (finished) {
            runOnJS(setToggleLottie)(true);
            runOnJS(fetchData)();
          }
        },
      ),
    );
  };
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = translationY.value;
      runOnJS(setGestureActive)(true);
    },
    onActive: (event, ctx) => {
      const total = ctx.startY + event.translationY;
      // console.log('translateY', total);

      if (total < REFRESH_AREA_HEIGHT) {
        translationY.value = total;
      } else {
        translationY.value = REFRESH_AREA_HEIGHT;
      }

      if (total < 0) {
        translationY.value = 0;
        scrollTo(flatlistRef, 0, total * -1, false);
      }
    },
    onEnd: () => {
      runOnJS(setGestureActive)(false);
      if (translationY.value <= REFRESH_AREA_HEIGHT - 1) {
        translationY.value = withTiming(0, {duration: 200});
      } else {
        runOnJS(pullUpAnimation)();
      }
      if (!(translationY.value > 0)) {
        runOnJS(setToggleGesture)(false);
      }
    },
  });

  const handleOnScroll = (event: any) => {
    const position = event.nativeEvent.contentOffset.y;
    if (position === 0) {
      setToggleGesture(true);
    } else if (position > 0 && toggleGesture && !gestureActive) {
      setToggleGesture(false);
    }
  };

  const onTouchEnd = (event: any) => {
    setToggleGesture(false);
  };

  const animatedSpace = useAnimatedStyle(() => {
    return {
      height: translationY.value,
    };
  });

  const pullDownIconSection = useAnimatedStyle(() => {
    const rotate = interpolate(
      translationY.value,
      [0, REFRESH_AREA_HEIGHT],
      [0, 180],
    );
    return {
      transform: [{rotate: `${rotate}deg`}],
      //transform: 0,
    };
  });

  const pullUpTranslateStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      [58, REFRESH_AREA_HEIGHT],
      [0, 1],
    );

    return {
      opacity,
      // transform: [
      //   {
      //     translateY: pullUpTranslate.value,
      //   },
      // ],
    };
  });

  const statusBarStyle = useAnimatedStyle(() => {
    const translate = interpolate(
      translationY.value,
      [80, REFRESH_AREA_HEIGHT],
      [0, -40],
      {extrapolateLeft: Extrapolate.CLAMP, extrapolateRight: Extrapolate.CLAMP},
    );

    return {
      transform: [
        {
          translateY: translate,
        },
      ],
    };
  });
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
          <View style={{...styles.loading, marginBottom: 80}}>
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
            {/* Pull to Refresh Section */}
            <Animated.View style={[styles.pullToRefreshArea, animatedSpace]}>
              {/* <FastImage
          style={{height: 80, width: 80}}
          source={require('../../../static/images/loading-spinner.gif')}
          resizeMode={FastImage.resizeMode.contain}
        /> */}
              <Animated.View style={[styles.center, pullUpTranslateStyle]}>
                {/* style={pullDownIconSection} */}
                <Animated.View>
                  <FastImage
                    style={{height: 80, width: 80}}
                    source={require('../../../static/images/loading-spinner.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </Animated.View>
              </Animated.View>
              {toggleLottie && (
                <>
                  <FastImage
                    style={{height: 80, width: 80, marginBottom: 80}}
                    source={require('../../../static/images/loading-spinner.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </>
              )}
            </Animated.View>
            <FlatList
              ref={flatlistRef}
              onScroll={handleOnScroll}
              onTouchStart={onTouchEnd}
              onTouchEnd={onTouchEnd}
              onScrollBeginDrag={onTouchEnd}
              onTouchMove={onTouchEnd}
              onTouchCancel={onTouchEnd}
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
              // refreshControl={
              //   <RefreshControl
              //     refreshing={isRefreshing}
              //     onRefresh={handleRefresh}
              //   />
              // }
            />
            {toggleGesture && (
              <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={styles.gesture} />
              </PanGestureHandler>
            )}
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
  //refresh
  catagory: {
    marginRight: 20,
  },
  active: {
    width: 70,
    height: 2,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  catagoryContainer: {flexDirection: 'row', marginBottom: 5, marginTop: 30},

  gesture: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    // backgroundColor: 'green',
    zIndex: 0,
  },
  lottieView: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
    marginTop: -15,
  },
  pullToRefreshArea: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  customStatusBar: {height: 40, backgroundColor: '#E0144C'},
  contentContainer: {flex: 1, marginHorizontal: 15, marginVertical: 15},
  center: {justifyContent: 'center', alignItems: 'center'},
});
