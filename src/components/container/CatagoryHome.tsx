import React, {memo, useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  Dimensions,
} from 'react-native';
import {FlatList as FlatListSecondary} from 'react-native-gesture-handler';
import {useNavigation, useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/showMoreVodButton';
import {
  VodCarousellResponseType,
  VodPlaylistResponseType,
  VodTopicType,
  VodType,
  LiveTVStationsResponseType,
  VodData,
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
import CarouselPagination from './CarouselPagination';
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
import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';

const REFRESH_AREA_HEIGHT = 80;
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
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({
  vodCarouselRes,
  navId = 0,
  setScrollEnabled,
  onRefresh,
}: Props) => {
  const {colors, textVariants, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const data = vodCarouselRes.data;
  const [refreshing, setRefreshing] = useState(false);
  const width = Dimensions.get('window').width;
  const handleRefresh = useCallback(() => {
    onRefresh(navId);
  }, []);

  const listItem = useCallback(
    ({item, index}: {item: VodData; index: number}) => (
      <View
        key={`${item.type_name}-${index}`}
        style={{
          gap: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}>
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            navigation.navigate('片库', {
              type_id: item.type_id,
              class: item.type_name,
            });
          }}
        />
        {item?.vod_list && item?.vod_list?.length >= 6 && (
          <VodListVertical vods={item?.vod_list?.slice(0, 6)} />
        )}
      </View>
    ),
    [],
  );
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
    };
  });
  const pullUpTranslateStyle = useAnimatedStyle(() => {
    // const opacity = interpolate(
    //   translationY.value,
    //   [58, REFRESH_AREA_HEIGHT],
    //   [0, 1],
    // );
    const opacity = 1;
    return {
      opacity,
      // transform: [
      //   {
      //     translateY: pullUpTranslate.value,
      //   },
      // ],
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
        showsVerticalScrollIndicator={false}
        onScroll={handleOnScroll}
        ListHeaderComponent={
          <>
            {data?.carousel[0] && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                }}>
                <Carousel
                  loop
                  style={{
                    borderRadius: 15,
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
                  // onSnapToItem={index => console.log('current index:', index)}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      activeOpacity={1}
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
              {data && data.class_list && data.class_list.length > 0 && (
                <FlatListSecondary
                  data={['全部剧集', ...data.class_list]}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  initialNumToRender={5}
                  contentContainerStyle={{
                    ...styles.catalogNav,
                    marginBottom: spacing.m,
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                  }}
                  renderItem={({
                    item,
                    index,
                  }: {
                    item: string;
                    index: number;
                  }) => {
                    return (
                      <TouchableOpacity
                        style={{
                          marginRight: spacing.m,
                          justifyContent: 'center',
                          display: 'flex',
                          backgroundColor:
                            BTN_COLORS[index % BTN_COLORS.length],
                          paddingLeft: spacing.s,
                          paddingRight: spacing.s,
                          paddingTop: spacing.s - 4,
                          paddingBottom: spacing.s - 1,
                          borderRadius: spacing.xs,
                          opacity: 0.9,
                        }}
                        onPress={() =>
                          navigation.navigate('片库', {
                            type_id: navId,
                            class: item,
                          })
                        }>
                        <Text
                          style={{
                            textAlign: 'center',
                            ...textVariants.body,
                            fontWeight: '700',
                            opacity: 0.9,
                          }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              )}
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
            </View>
          </>
        }
        data={data?.categories ? data?.categories : []}
        initialNumToRender={1}
        windowSize={3}
        maxToRenderPerBatch={3}
        renderItem={listItem}
      />
      <View style={{paddingBottom: 100}} />
      {toggleGesture && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={styles.gesture} />
        </PanGestureHandler>
      )}
    </>
  );
};

export default memo(CatagoryHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
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
    height: 500,
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
