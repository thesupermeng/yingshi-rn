import React, {memo, useState, useRef, useEffect, useCallback} from 'react';
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
  Animated,
  Modal,
  Platform,
} from 'react-native';
// import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/showMoreVodButton';
import {
  VodTopicType,
  VodPlayListType,
  VodCarousellType,
  BannerAdType,
} from '@type/ajaxTypes';
// import FastImage from "react-native-fast-image";
import FastImage from '../common/customFastImage';
import {VodReducerState} from '@redux/reducers/vodReducer';
import {useAppDispatch, useAppSelector, useSelector} from '@hooks/hooks';
import {RootState} from '@redux/store';
import VodHistoryList from '../vod/vodHistoryList';
import VodLiveStationList from '../vod/vodLiveStationList';
import {API_DOMAIN, API_DOMAIN_TEST} from '@utility/constants';
import VodListVertical from '../vod/vodListVertical';
import {playVod, viewPlaylistDetails} from '@redux/actions/vodActions';
import {useQuery, useInfiniteQuery} from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

import CarouselPagination from './CarouselPagination';
import LoadingIcon from '@static/images/MutedVolume.svg';
import {Image} from 'react-native';
import {PlaylistApi} from '../../api/playlist';
import {CApi} from '@utility/apiService';
import {CEndpoint} from '@constants';
import {YSConfig} from '../../../ysConfig';
import {BannerContainer} from './bannerContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UmengAnalytics from '../../../Umeng/UmengAnalytics';
import {AdsApi} from '../../api/ads';
import DeviceInfo from 'react-native-device-info';
import {VipPromotionOverlay} from '../modal/vipPromotionOverlay';
import {UserStateType} from '@redux/reducers/userReducer';
import {User} from '@models/user';
import VipGuideModal2 from '../modal/vipGuide2';
import VipGuideModal from '../modal/vipGuide';
import {screenModel} from '@type/screenType';
import {
  setAutoSelectSport,
  setIsHomeGuideShown,
  setIsSportGuideShown,
  setShowPromotionDialog,
} from '@redux/actions/screenAction';
import {Url} from '../../Sports/middleware/url';
import Api from '../../Sports/middleware/api';
import {MatchDetailsType} from '../../Sports/types/matchTypes';
import VodSportsList from '../vod/vodSportsList';
// import messaging from '@react-native-firebase/messaging';
// import firebase from '@react-native-firebase/app';
// import {FirebaseNotification} from '@utility/firebaseNotification';

interface NavType {
  id: number;
  name: string;
}
interface Props {
  vodCarouselRes: VodCarousellType;
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
  onLoad = () => {},
  isTabFocus = false,
}: Props) => {
  const {colors, textVariants, spacing} = useTheme();
  const vodReducer: VodReducerState = useAppSelector(
    ({vodReducer}: RootState) => vodReducer,
  );
  const history = vodReducer.history.filter(e => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<VodTopicType>>([]);
  const [bannerAd, setBannerAd] = useState<BannerAdType>();
  const [bannerAdList, setBannerAdList] = useState<Array<BannerAdType>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  // const {width, height} = Dimensions.get('window');
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [imgRatio, setImgRatio] = useState(1.883);
  const userState = useSelector<UserStateType>('userReducer');
  const isVip = User.isVip(userState.user);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); // Create a ref for the component
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); // State to hold the distance to bottom
  const [sportList, setSportList] = useState<Array<MatchDetailsType>>([]);

  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
  );

  useEffect(() => {
    if (screenState.isHomeGuideShown != true && !isVip) {
      //     setTimeout(() => {
      setVipGuideModal(true);
      // }, 0);
    }
    //  setVipGuideModal(true);
  }, []);

  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);

  useEffect(() => {
    handleTabletFold();
    fetchMatchData();
   // initFirebase();
  }, []);

  // const initFirebase = async () => {
  //   try {
  //     await FirebaseNotification.checkPermissionAndGetoken();
  //     FirebaseNotification.subscibeToTopic('insidertest');
  //   } catch (err) {
  //     console.log('Firebase init failed', err);
  //   }
  // };

  const [deviceName, setDeviceName] = useState('');

  DeviceInfo.getDeviceName().then(d => {
    setDeviceName(d.toLowerCase());
  });
  const handleTabletFold = async () => {
    Dimensions.addEventListener('change', e => {
      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(
        keyword => deviceName.includes(keyword),
      );
      if (DeviceInfo.isTablet() || includesKeywords) {
        setWidth(Number(Dimensions.get('window').width));
        if (data.carousel.length > 0) {
          Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
            setImgRatio(w / h);
          });
        }
        handleRefresh();
      }
    });
  };

  // Function to handle the pull-to-refresh action
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh(0, true);

    setTimeout(() => {
      setActiveIndex(0);
      if (carouselRef) {
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({index: 0, animated: false});
      }
    }, 0);
  };

  const getUrl = () => {
    return `${Url.matches11}?&is_live=true`;
  };

  const fetchMatchData = useCallback(async () => {
    const data = (await Api.call(getUrl(), {}, 'GET')).data;
    if (data !== undefined) {
      const newArray: MatchDetailsType[] = Object.values(data)
        .flat()
        .slice(0, 20) as MatchDetailsType[];

      setSportList(newArray);
    }
  }, []);

  const fetchPlaylist = (page: number) =>
    PlaylistApi.getTopic(page).then((results: VodPlayListType) => {
      setTotalPage(Number(results.TotalPageCount));
      return Object.values(results.List);
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

  const fetchBannerAd = async () => {
    const bannerRes = await AdsApi.getBannerAd(100);
    const banner = bannerRes.ads;
    const bannerList = bannerRes.ads_list;

    if (banner) {
      setBannerAd(banner);
      setBannerAdList(bannerList);
    } else {
      setBannerAd(undefined);
      setBannerAdList([]);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const shouldShowAds = async () => {
    if (!isVip) {
      fetchBannerAd();
    } else {
      setBannerAd(undefined);
      setBannerAdList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip]),
  );

  useFocusEffect(
    useCallback(() => {
      const currentCarousel =
        data.carousel[carouselRef.current.getCurrentIndex()];

      if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
        UmengAnalytics.homeTabCarouselViewAnalytics({
          tab_id: navId?.toString() ?? '0',
          tab_name: tabName ?? '',
          ads_slot_id: currentCarousel.ads_slot_id,
          ads_id: currentCarousel.ads_id,
          ads_title: currentCarousel.ads_event_title,
          ads_name: currentCarousel.ads_name,
        });
      }
    }, [data, isTabFocus, carouselRef.current?.getCurrentIndex()]),
  );

  const renderBanner = useCallback(
    (allBannerAds: BannerAdType[]) => {
      if (allBannerAds.length < 1) {
        return <></>;
      }

      const ads = allBannerAds[Math.floor(Math.random() * allBannerAds.length)];

      return (
        <BannerContainer
          bannerAd={ads}
          onMount={({id, name, slot_id, title}) => {
            UmengAnalytics.homeTabBannerViewAnalytics({
              tab_id: navId?.toString() ?? '0',
              tab_name: tabName ?? '',
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
          onPress={({id, name, slot_id, title}) => {
            UmengAnalytics.homeTabBannerClickAnalytics({
              tab_id: navId?.toString() ?? '0',
              tab_name: tabName ?? '',
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
        />
      );
    },
    [navId, tabName],
  );

  const renderCarousel = useCallback(
    ({item, index}: {item: any; index: number}) => {
      const key = item.is_ads
        ? item.carousel_id + item.carousel_pic_mobile
        : item.carousel_id;
      return (
        <TouchableOpacity
          key={`slider-${key}`}
          onPress={() => {
            if (item.is_ads == true) {
              const url =
                item.ads_url.includes('https://') ||
                item.ads_url.includes('http://')
                  ? item.ads_url
                  : 'https://' + item.ads_url;
              Linking.openURL(url);

              UmengAnalytics.homeTabCarouselClickAnalytics({
                tab_id: navId?.toString() ?? '0',
                tab_name: tabName ?? '',
                ads_slot_id: item.ads_slot_id,
                ads_id: item.ads_id,
                ads_title: item.ads_event_title,
                ads_name: item.ads_name,
              });
            } else {
              dispatch(playVod(item.vod));
              navigation.navigate('播放', {
                vod_id: item.carousel_content_id,
              });
            }
          }}>
          <FastImage
            key={`slider2-${key}`}
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
      );
    },
    [],
  );

  const renderContent = useCallback(
    ({item, index}: {item: VodTopicType; index: number}) => (
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
          <VodListVertical vods={item.vod_list} />
          {(data.yunying.length + data.categories.length + index + 1) % 3 ===
            0 &&
            bannerAd &&
            renderBanner(bannerAdList)}
        </View>
      </View>
    ),
    [data, bannerAd, bannerAdList],
  );

  const yunyingMap = (item: any, index: any) => (
    <View
      key={item.type_name}
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.xxs,
      }}>
      <View>
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            navigation.navigate('片库', {
              type_id: 1,
            });
          }}
        />
      </View>
      <VodListVertical vods={item.vod_list} />

      {(index + 1) % 3 === 0 && bannerAd && renderBanner(bannerAdList)}
    </View>
  );

  const categoriesMap = (category: any, index: any) => (
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
      <VodListVertical vods={category.vod_list} />

      {(data.yunying.length + index + 1) % 3 === 0 &&
        bannerAd &&
        renderBanner(bannerAdList)}
    </View>
  );

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    if (componentRef.current != null) {
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        // console.log('Position:', {x, y, width, height, pageX, pageY});
        setRefPosition({x: pageX, y: pageY, width: width, height: height});

        const screenHeight = Dimensions.get('window').height;
        const distance = screenHeight - pageY - height;
        setDistanceToBottom(distance);
      });
    }
  };

  // const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(true);
  // const renderOverlay = () => {
  //   return <VipPromotionOverlay
  //     showCondition={showBecomeVIPOverlay}
  //     onClose={() => {
  //       setShowBecomeVIPOverlay(false);
  //     }}
  //   />
  // };

  return (
    <View style={{width: width}}>
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 17,
                    zIndex: 9999,
                  }}>
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
                    onSnapToItem={index => {
                      setActiveIndex(index);
                    }}
                    onScrollEnd={index => {
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
                {/* previous style={{ gap: spacing.m }} */}
                {data?.carousel[0] && history.length > 0 && (
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
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  </View>
                )}

                {bannerAd && distanceToBottom != 0 && (
                  <Modal visible={vipGuideModal} transparent={true}>
                    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)'}}>
                      <View
                        style={{
                          position: 'absolute',
                          bottom: refPosition.x,
                          top: refPosition.y,
                          // width: refPosition.width,
                          height: refPosition.height,
                        }}>
                        <View
                          style={{
                            paddingLeft: spacing.sideOffset,
                            paddingRight: spacing.sideOffset,
                          }}>
                          {renderBanner(bannerAdList)}
                        </View>
                        {distanceToBottom <= 255 ? (
                          <>
                            <View
                              style={{
                                position: 'relative',
                                bottom: Platform.OS === 'ios' ? 0 : 20,
                              }}>
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
                    }}>
                    {renderBanner(bannerAdList)}
                  </View>
                )}

                <View style={{gap: spacing.m}}>
                  <View
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                    }}>
                    {sportList && sportList.length > 0 && (
                      <ShowMoreVodButton
                        text="体育推荐"
                        onPress={() => {
                          dispatch(setAutoSelectSport(true));
                          navigation.navigate('Home', {screen: '会员中心'});
                        }}
                      />
                    )}
                  </View>

                  {sportList && sportList.length > 0 && (
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingBottom: 5,
                      }}>
                      <VodSportsList
                        sportList={sportList}
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  )}
                </View>

                <View style={{gap: spacing.m}}>
                  <View
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                    }}>
                    {data?.live_station_list &&
                    data?.live_station_list.length > 0 ? (
                      <ShowMoreVodButton
                        text="电视台推荐"
                        onPress={() => {
                          navigation.navigate('电视台列表', {
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
                    <View style={{paddingLeft: spacing.sideOffset}}>
                      <VodLiveStationList
                        vodStyle={styles.vod_live_station}
                        liveStationList={data?.live_station_list}
                        onlyShow={10}
                        isRefreshing={isRefreshing}
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
                  data.yunying.map(yunyingMap)}

                {data?.categories &&
                  data.categories.length > 0 &&
                  data.categories.map(categoriesMap)}
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
          renderItem={renderContent}
          disableVirtualization={true}
          ListFooterComponent={
            <View style={{...styles.loading, marginBottom: 60}}>
              {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('@static/images/loading-spinner.gif')}
                  resizeMode={'contain'}
                />
              )}
              {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}>
                  已经到底了
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
  spotlight: {
    flex: 1,
    zIndex: 99,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black
  },
  spotlightHole: {
    backgroundColor: 'transparent', // Transparent background
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#FFF', // White border
    transform: [{scale: 5}], // Adjust scale as needed
  },
});
