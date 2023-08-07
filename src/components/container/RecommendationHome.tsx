import React, {memo, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  Dimensions,
} from 'react-native';
import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';
import {useNavigation, useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/showMoreVodButton';
import {
  VodCarousellResponseType,
  VodPlaylistResponseType,
  VodTopicType,
  VodType,
  LiveTVStationsResponseType,
} from '../../types/ajaxTypes';
import FastImage from 'react-native-fast-image';
import {VodReducerState} from '../../redux/reducers/vodReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import VodHistoryList from '../vod/vodHistoryList';
import VodLiveStationList from '../vod/vodLiveStationList';
import {API_DOMAIN, API_DOMAIN_TEST} from '../../utility/constants';
import VodListVertical from '../vod/vodListVertical';
import {playVod, viewPlaylistDetails} from '../../redux/actions/vodActions';
import {useQuery, useInfiniteQuery} from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
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
import CarouselPagination from './CarouselPagination';

interface NavType {
  id: number;
  name: string;
}
interface Props {
  vodCarouselRes: VodCarousellResponseType;
  navOptions?: NavType[] | undefined;
  onNavChange?: any;
  navId?: number;
  setScrollEnabled?: any;
  onRefresh?: any;
}

const REFRESH_AREA_HEIGHT = 80;
const RecommendationHome = ({
  vodCarouselRes,
  setScrollEnabled,
  onRefresh,
}: Props) => {
  const {colors, textVariants, spacing} = useTheme();
  const vodReducer: VodReducerState = useAppSelector(
    ({vodReducer}: RootState) => vodReducer,
  );
  const history = vodReducer.history;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const data = vodCarouselRes.data;
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<VodTopicType>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {width, height} = Dimensions.get('window');
  // Function to handle the pull-to-refresh action
  const handleRefresh = () => {
    onRefresh(0);
  };

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
    refetch,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({pageParam = 1}) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage: any = allPages.length + 1;
        //if reach end
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSuccess: data => {
        if (data && data?.pages) {
          setResults([...results, ...data.pages[data.pages.length - 1].flat()]);
        }
      },
    },
  );
  const {data: liveStations} = useQuery({
    queryKey: ['LiveTVStations'],
    queryFn: () =>
      fetch(`${API_DOMAIN}live/v1/livestations`, {})
        .then(response => response.json())
        .then((json: LiveTVStationsResponseType) => {
          return json.data;
        }),
  });

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

    setTimeout(() => {
      translationY.value = withTiming(0, {duration: 200}, finished => {
        pullUpTranslate.value = 0;

        runOnJS(setToggleLottie)(false);
      });
    }, 1500);
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

  const onTouchStart = (event: any) => {
    console.log('onTouchStart');
    setToggleGesture(true);
  };

  const onTouchEnd = (event: any) => {
    console.log('ontouchEnd');
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
        showsVerticalScrollIndicator={false}
        // refreshControl={<RefreshControl refreshing={true} onRefresh={() => { }} />}
        ListHeaderComponent={
          <>
            {data?.carousel[0] && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Carousel
                  loop
                  style={{
                    borderRadius: 10,
                    flex: 1,
                    width: width - spacing.sideOffset - spacing.sideOffset,
                  }}
                  width={width}
                  height={(width + spacing.sideOffset + spacing.sideOffset) / 2}
                  autoPlay={true}
                  data={data.carousel}
                  scrollAnimationDuration={500}
                  autoPlayInterval={2300}
                  onSnapToItem={index => {
                    setActiveIndex(index);
                  }}
                  onScrollEnd={index => {
                    setActiveIndex(index);
                  }}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      key={`slider-${index}`}
                      onPress={() => {
                        dispatch(playVod(item.vod));
                        navigation.navigate('播放', {
                          vod_id: item.carousel_content_id,
                        });
                      }}>
                      <FastImage
                        style={styles.image}
                        source={{
                          uri: item.carousel_pic_mobile,
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                      <LinearGradient
                        colors={['transparent', 'black']}
                        start={{x: 0.8, y: 0}}
                        end={{x: 0.8, y: 0.9}}
                        style={styles.bottomBlur}
                      />
                      <Text
                        style={{
                          ...textVariants.bodyBold,
                          ...styles.carouselTag,
                          color: 'white',
                        }}
                        numberOfLines={1}>
                        {item.carousel_name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
                <CarouselPagination
                  data={data.carousel}
                  activeIndex={activeIndex}
                />
              </View>
            )}
            <View>
              {/* previous style={{ gap: spacing.m }} */}
              {history.length > 0 && (
                <View>
                  <View
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      paddingBottom: 5,
                    }}>
                    <ShowMoreVodButton
                      text="继续看"
                      onPress={() => {
                        navigation.navigate('播放历史');
                      }}
                    />
                  </View>
                  <View style={{paddingLeft: spacing.sideOffset}}>
                    <VodHistoryList
                      vodStyle={styles.vod_hotlist}
                      vodList={history.slice(0, 10)}
                      showInfo="watch_progress"
                    />
                  </View>
                </View>
              )}

              <View style={{gap: spacing.m}}>
                <View
                  style={{
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                  }}>
                  {liveStations && liveStations?.length > 0 ? (
                    <ShowMoreVodButton
                      text="电视台直播"
                      onPress={() => {
                        navigation.navigate('电视台列表', {
                          liveStationItemList: liveStations,
                        });
                      }}
                    />
                  ) : (
                    <View style={styles.banner}>
                      <Text style={textVariants.header}>电视台直播</Text>
                    </View>
                  )}
                </View>
                {liveStations && liveStations?.length > 0 ? (
                  <View style={{paddingLeft: spacing.sideOffset}}>
                    <VodLiveStationList
                      vodStyle={styles.vod_live_station}
                      liveStationList={liveStations.slice(0, 10)}
                    />
                  </View>
                ) : (
                  <View
                    style={{paddingLeft: spacing.sideOffset, height: 134}}
                  />
                )}
              </View>
              {data?.yunying &&
                data.yunying.length > 0 &&
                data.yunying.map((item, index) => (
                  <View
                    key={item.type_name}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      gap: spacing.m,
                    }}>
                    <View>
                      <ShowMoreVodButton
                        text={item.type_name}
                        onPress={() => {
                          navigation.navigate('片库', {
                            type_id: item.vod_list[0].type_id,
                          });
                        }}
                      />
                    </View>
                    <VodListVertical vods={item.vod_list?.slice(0, 6)} />
                  </View>
                ))}

              {data?.categories &&
                data.categories.length > 0 &&
                data.categories.map((category, index) => (
                  <View
                    key={`category-${index}`}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      paddingTop: 5,
                    }}>
                    <View
                      style={{
                        paddingBottom: 5,
                      }}>
                      <ShowMoreVodButton
                        text={category.type_name}
                        onPress={() => {
                          navigation.navigate('片库', {
                            type_id: category.type_id,
                          });
                        }}
                      />
                    </View>
                    <VodListVertical vods={category.vod_list.slice(0, 6)} />
                  </View>
                ))}
            </View>
          </>
        }
        data={results}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage && !isFetching) {
            fetchNextPage();
          }
        }}
        initialNumToRender={0}
        onEndReachedThreshold={0.5}
        renderItem={({item, index}: {item: VodTopicType; index: number}) => (
          <View
            style={{
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
            }}>
            {/* previous style={{ gap: spacing.m }} */}
            <View key={`${item.topic_name}-${index}`} style={{paddingTop: 10}}>
              <View style={{paddingBottom: 5}}>
                <ShowMoreVodButton
                  text={item.topic_name}
                  onPress={() => {
                    dispatch(viewPlaylistDetails(item));
                    navigation.navigate('PlaylistDetail', {
                      topic_id: item.topic_id,
                    });
                  }}
                />
              </View>
              <VodListVertical vods={item.vod_list.slice(0, 6)} />
            </View>
          </View>
        )}
        ListFooterComponent={
          <View style={{...styles.loading, marginBottom: spacing.xl}}>
            {hasNextPage && (
              <FastImage
                style={{height: 80, width: 80, marginBottom: 80}}
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
      />

      {toggleGesture && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={styles.gesture} />
        </PanGestureHandler>
      )}
    </>
  );
};

export default memo(RecommendationHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
    zIndex: 99,
  },
  image: {
    width: '100%',
    height: '100%',
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
  vod_live_station: {
    height: 90,
    width: 150,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
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
    height: 75,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  banner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 5,
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
    //backgroundColor: 'green',
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
