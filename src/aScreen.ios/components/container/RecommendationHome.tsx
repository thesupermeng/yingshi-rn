import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  Dimensions,
  FlatList,
  Linking,
} from 'react-native';
// import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';
import ShowMoreVodButton from '../button/showMoreVodButton';
import FastImage from '../common/customFastImage';
import { VodReducerState } from '@redux/reducers/vodReducer';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/hooks';
import { RootState } from '@redux/store';
import VodListVertical from '../vod/vodListVertical';
import { playVod, viewPlaylistDetails } from '@redux/actions/vodActions';
import { useQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './CarouselPagination';
import { Image } from 'react-native';
import { YingPingContainer } from '../container/yingPingContainer';
import { AppsApi, PlaylistApi } from '@api';
import { UserStateType } from '@redux/reducers/userReducer';
import { HomePageType, PlayList, User } from '@models';
import { CLangKey } from '@constants';
import VodHistoryList from '../../components/vod/vodHistoryList';

interface NavType {
  id: number;
  name: string;
}
interface Props {
  vodCarouselRes: HomePageType;
  navOptions?: NavType[] | undefined;
  onNavChange?: any;
  navId?: number;
  tabName?: string;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  onLoad?: any;
  isTabFocus?: boolean;
}

const RecommendationHome = ({
  vodCarouselRes: data,
  setScrollEnabled,
  navId,
  tabName,
  onRefresh,
  refreshProp = false,
  onLoad = () => { },
  isTabFocus = false,
}: Props) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: VodReducerState = useAppSelector(
    ({ vodReducer }: RootState) => vodReducer,
  );
  const history = vodReducer.history.filter((e) => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<PlayList[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  // const {width, height} = Dimensions.get('window');
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [imgRatio, setImgRatio] = useState(1.5);

  const userState = useSelector<UserStateType>('userReducer');
  const isVip = User.isVip(userState.user);

  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);
  // Function to handle the pull-to-refresh action
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh(0, true);

    setTimeout(() => {
      setActiveIndex(0);
      if (carouselRef) {
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 0);
  };

  // const fetchPlaylist = (page: number) =>
  // // PlaylistApi.getTopic(page)
  // PlaylistApi.getTopicIosTmp()
  //   .then((data) => {
  //     // setTotalPage(Number(json.data.TotalPageCount));
  //     // return Object.values(json.data.List);
  //     setTotalPage(1);
  //     return Object.values(data.List);
  //   });
  // const {
  //   data: playlists,
  //   isSuccess,
  //   hasNextPage,
  //   fetchNextPage,
  //   isFetchingNextPage,
  //   isFetching,
  //   refetch,
  // } = useInfiniteQuery(
  //   ["vodPlaylist"],
  //   ({ pageParam = 1 }) => fetchPlaylist(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       if (lastPage === null) {
  //         return undefined;
  //       }
  //       const nextPage: any = allPages.length + 1;
  //       //if reach end
  //       if (nextPage > totalPage && totalPage != 0) {
  //         return undefined;
  //       }
  //       return nextPage;
  //     },
  //     onSuccess: (data) => {
  //       if (data && data?.pages) {
  //         setResults([...results, ...data.pages[data.pages.length - 1].flat()]);
  //       }
  //     },
  //   }
  // );

  const fetchYingPing = () =>
    AppsApi.getHomePages(1000, isVip).then(data => {
      setResults(data.topic_list);
      return data;
    });

  const { data: yingPingList, isFetching: isFetchingYingPing } = useQuery({
    queryKey: ['yingPingList'],
    queryFn: () => fetchYingPing(),
  });

  useEffect(() => {
    onLoad();
  }, []);

  const renderCarousel = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const key = item.is_ads
        ? item.carousel_id + item.carousel_pic_mobile
        : item.carousel_id;
      return (
        <TouchableOpacity
          key={`slider-${key}`}
          onPress={() => {
            dispatch(playVod(item.vod));
            navigation.navigate('播放IOS', {
              vod_id: item.vod?.vod_id ?? 0,
            });
          }}>
          <FastImage
            key={`slider-${key}`}
            style={styles.image}
            source={{
              uri: item.carousel_pic_mobile,
              priority: 'normal',
            }}
            resizeMode={'contain'}
            useFastImage={true}
          />
          <LinearGradient
            colors={['transparent', 'black']}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0.8, y: 0.9 }}
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
      );
    },
    [],
  );

  // const renderContent = useCallback(
  //   ({ item, index }: { item: PlayList; index: number }) => (
  //     <View
  //       style={{
  //         paddingLeft: spacing.sideOffset,
  //         paddingRight: spacing.sideOffset,
  //       }}>
  //       {/* previous style={{ gap: spacing.m }} */}
  //       <View key={`${item.topic_name}-${index}`} style={{ paddingTop: 10 }}>
  //         <View style={{ paddingBottom: 5 }}>
  //           <ShowMoreVodButton
  //             text={item.topic_name}
  //             onPress={() => {
  //               dispatch(viewPlaylistDetails(item));
  //               navigation.navigate('PlaylistDetail', {
  //                 topic_id: item.topic_id,
  //               });
  //             }}
  //           />
  //         </View>
  //         <VodListVertical vods={item.vod_list} />
  //       </View>
  //     </View>
  //   ),
  //   [],
  // );

  const categoriesMap = ({ item, index }: {
    item: any, index: any
  }) => (
    <View
      key={`category-${index}`}
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        paddingTop: 5,
      }}
    >
      <View
        style={{
          paddingBottom: 5,
        }}
      >
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            navigation.navigate("片库", {
              type_id: item.type_id,
              class: item.type_name,
            });
          }}
        />
      </View>
      <VodListVertical vods={item.vod_list} playerMode={'normal'} />
    </View>
  );

  const vodMap = ({ item, index, adultMode = false }: {
    item: any, index: any, adultMode?: boolean,
  }) => (
    <View
      key={`category-${index}`}
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        paddingTop: 5,
      }}
    >
      <View
        style={{
          paddingBottom: 5,
        }}
      >
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            if (adultMode) {
              navigation.navigate("XVodCatalog", {
                type_id: -1//item.type_id,
              });
            } else {
              navigation.navigate("片库", {
                type_id: item.type_id,
                class: item.type_name,
              });
            }
          }}
        />
      </View>
      <VodListVertical vods={item.vod_list} playerMode={adultMode ? 'adult' : 'normal'} />
    </View>
  );

  return (
    <View style={{ width: width }}>
      {data && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          removeClippedSubviews={true}
          ListHeaderComponent={
            <>
              {data?.carousel[0] && !refreshProp && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 17,
                    zIndex: 9999,
                  }}
                >
                  <Carousel
                    ref={carouselRef}
                    loop
                    width={width - spacing.sideOffset - spacing.sideOffset}
                    height={
                      (width - spacing.sideOffset - spacing.sideOffset) /
                      imgRatio
                    }
                    autoPlay={true}
                    data={data.carousel}
                    scrollAnimationDuration={120}
                    autoPlayInterval={2300}
                    onSnapToItem={(index) => {
                      setActiveIndex(index);
                    }}
                    onScrollEnd={(index) => {
                      setActiveIndex(index);
                    }}
                    renderItem={renderCarousel}
                  />
                  <CarouselPagination
                    data={data.carousel}
                    activeIndex={activeIndex}
                  />
                </View>
              )}
              <View>
                {data?.carousel[0] && history.length > 0 && (
                  <View>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        paddingBottom: 5,
                      }}
                    >
                      <ShowMoreVodButton
                        text={CLangKey.continueWatch.tr()}
                        onPress={() => {
                          navigation.navigate("播放历史");
                        }}
                      />
                    </View>
                    <View style={{ paddingLeft: spacing.sideOffset }}>
                      <VodHistoryList
                        vodStyle={styles.vod_hotlist}
                        vodList={history.slice(0, 10)}
                        showInfo="watch_progress"
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  </View>
                )}

                {/* {bannerAd && distanceToBottom != 0 && (
                  <Modal visible={vipGuideModal} transparent={true}>
                    <View
                      style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          bottom: refPosition.x,
                          top: refPosition.y,
                          // width: refPosition.width,
                          height: refPosition.height,
                        }}
                      >
                        <View
                          style={{
                            paddingLeft: spacing.sideOffset,
                            paddingRight: spacing.sideOffset,
                          }}
                        >
                          {renderBanner(bannerAdList)}
                        </View>
                        {distanceToBottom <= 255 ? (
                          <>
                            <View
                              style={{
                                position: "relative",
                                bottom: Platform.OS === "ios" ? 0 : 20,
                              }}
                            >
                              <VipGuideModal2
                                onClose={(value: boolean) => {
                                  dispatch(setIsHomeGuideShown(true));
                                  setVipGuideModal(value);
                                  dispatch(setShowPromotionDialog(true));
                                }}
                              />
                            </View>
                          </>
                        ) : (
                          <VipGuideModal
                            onClose={(value: boolean) => {
                              dispatch(setIsHomeGuideShown(true));
                              setVipGuideModal(value);
                              dispatch(setShowPromotionDialog(true));
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </Modal>
                )}

                {bannerAd && (
                  <View
                    onLayout={() => getPosition()}
                    ref={componentRef}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      paddingBottom: 5,
                    }}
                  >
                    {renderBanner(bannerAdList)}
                  </View>
                )}
                {YSConfig.instance.tabConfig != null && YSConfig.instance.len == 5 &&
                  <View style={{ gap: spacing.m }}>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                      }}
                    >
                      {sportList && sportList.length > 0 && (
                        <ShowMoreVodButton
                          text="体育推荐"
                          onPress={() => {
                            dispatch(setAutoSelectSport(true));
                            navigation.navigate("Home", { screen: "会员中心" });
                          }}
                        />
                      )}
                    </View>

                    {sportList && sportList.length > 0 && (
                      <View
                        style={{
                          paddingLeft: spacing.sideOffset,
                          paddingBottom: 5,
                        }}
                      >
                        <VodSportsList
                          sportList={sportList}
                          isRefreshing={isRefreshing}
                        />
                      </View>
                    )}
                  </View>
                }
                {UMENG_CHANNEL != "SKY001 " && APP_NAME_CONST != '爱美剧' && (
                  <View style={{ gap: spacing.m }}>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                      }}
                    >
                      {data?.live_station_list &&
                        data?.live_station_list.length > 0 ? (
                        <ShowMoreVodButton
                          text="电视台推荐"
                          onPress={() => {
                            navigation.navigate("电视台列表", {
                              liveStationItemList: data?.live_station_list,
                            });
                          }}
                        />
                      ) : (
                        <View style={styles.banner}>
                          <Text style={textVariants.header}>电视台推荐</Text>
                        </View>
                      )}
                    </View>
                    {data?.live_station_list &&
                      data?.live_station_list.length > 0 ? (
                      <View style={{ paddingLeft: spacing.sideOffset }}>
                        <VodLiveStationList
                          vodStyle={styles.vod_live_station}
                          liveStationList={data?.live_station_list}
                          onlyShow={10}
                          isRefreshing={isRefreshing}
                        />
                      </View>
                    ) : (
                      <View
                        style={{ paddingLeft: spacing.sideOffset, height: 134 }}
                      />
                    )}
                  </View>
                )}

                {data?.yunying &&
                  data.yunying.length > 0 &&
                  data.yunying.map(yunyingMap)} */}

                {/* {data?.categories &&
                  data.categories.filter((category) => !category.type_name.toLowerCase().includes('trending')).length > 0 &&
                  data.categories.filter((category) => !category.type_name.toLowerCase().includes('trending')).map(categoriesMap)} */}

                {data?.latest_movies &&
                  data.latest_movies.length > 0 &&
                  data.latest_movies.map((item, index) => vodMap({ item, index }))}

                {data?.latest_tv_shows &&
                  data.latest_tv_shows.length > 0 &&
                  data.latest_tv_shows.map((item, index) => vodMap({ item, index }))}

                {/* {data?.svod &&
                  data.svod.length > 0 &&
                  data.svod.map((item, index) => vodMap({ item, index, adultMode: true }))} */}
              </View>
            </>
          }
          data={data?.categories ?? []}
          // data={results}
          onEndReached={() => {
            // if (hasNextPage && !isFetchingNextPage && !isFetching) {
            //   fetchNextPage();
            // }
          }}
          initialNumToRender={0}
          onEndReachedThreshold={0.5}
          // renderItem={renderContent}
          renderItem={categoriesMap}
          disableVirtualization={true}
          ListFooterComponent={
            <View style={{ ...styles.loading, marginBottom: 60 }}>
              {/* {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("@static/images/loading-spinner.gif")}
                  resizeMode={"contain"}
                />
              )} */}
              {true && (//!(isFetchingNextPage || isFetching) && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}
                >
                  {CLangKey.noAnyMore.tr()}
                </Text>
              )}
            </View>
          }
        />
      )}
    </View>
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
    borderRadius: 17,
    // backgroundColor: 'orange'
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
  icon: {
    color: 'white',
    // width: '15%',
    maxWidth: '15%',
    objectFix: 'contain',
  },
});
