import React, { memo, useState, useRef, useCallback, useEffect } from 'react';
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
import { FlatList as FlatListSecondary } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/showMoreVodButton';
import {
  VodData,
  VodCarousellType,
  bannerAdType,
} from '@type/ajaxTypes';
// import FastImage from 'react-native-fast-image';
import FastImage from "../common/customFastImage";
import { VodReducerState } from '@redux/reducers/vodReducer';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { RootState } from '@redux/store';
import VodHistoryList from '../vod/vodHistoryList';
import VodLiveStationList from '../vod/vodLiveStationList';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/constants';
import VodListVertical from '../vod/vodListVertical';
import { playVod, viewPlaylistDetails } from '@redux/actions/vodActions';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux/actions/screenAction';
import EighteenPlusOverlay from '../modal/overEighteenOverlay';
import { screenModel } from '@type/screenType';
import { CApi } from '@utility/apiService';
import { CEndpoint } from '@constants';
import { YSConfig } from '../../../ysConfig';
import { BannerContainer } from './bannerContainer';
import { userModel } from '@type/userType';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {FlatList, PanGestureHandler} from 'react-native-gesture-handler';

interface NavType {
  id: number;
  name: string;
}
interface Props {
  vodCarouselRes: VodCarousellType;
  navOptions?: NavType[] | undefined;
  onNavChange?: any;
  navId?: number;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  handleRejectEighteenPlus: () => void,
}
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({
  vodCarouselRes: data,
  navId = 0,
  setScrollEnabled,
  onRefresh,
  refreshProp,
  handleRejectEighteenPlus,
}: Props) => {
  const userState: userModel = useAppSelector(
    ({ userReducer }) => userReducer
  );
  const isVip = !(Number(userState.userMemberExpired) <=
                  Number(userState.userCurrentTimestamp) ||
                  userState.userToken === "");
  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerAd, setBannerAd] = useState<bannerAdType>();
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  //const width = Dimensions.get('window').width;
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  // Function to handle the pull-to-refresh action
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh(navId, true);

    setTimeout(() => {
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });
      setActiveIndex(0);
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const fetchBannerAd = async () => {
    const response = await CApi.get(CEndpoint.bannerAd, {
      query: {
        slot_id: navId >= 3 ? 101 + navId : 100 + navId,
        ip: YSConfig.instance.ip,
      },
    });
    const banner = await response.data;

    if (banner) {
      setBannerAd(banner);
    }
  }

  const listItem = useCallback(
    ({ item, index }: { item: VodData; index: number }) => (
      <View
        key={`${item.type_name}-${index}`}
        style={{
          gap: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}>
        <ShowMoreVodButton
          text={item.type_name.trim()}
          onPress={() => {
            console.debug('navid', navId)
            if (navId != 99) {
              navigation.navigate('片库', {
                type_id: item.vod_list[0].type_id,
                class: item.type_name
              });
            } else {
              navigation.navigate('午夜场剧情', {
                class: item.vod_list[0].vod_class
              });
            }
          }}
        />
        {navId == 99
          ? // is 午夜场剧情
          item?.vod_list && <VodListVertical numOfRows={2} vods={item?.vod_list} minNumPerRow={2} heightToWidthRatio={1 / 1.814} playerMode='adult' />
          :
          item?.vod_list && <VodListVertical vods={item?.vod_list} />
        }

        {(data.yunying ?
            data.yunying.length + index + 1 : index + 1) % 3 === 0 && bannerAd && (
          <BannerContainer
            bannerImg={bannerAd.ads_pic}
            bannerUrl={bannerAd.ads_url}
          />
        )}
      </View>
    ),
    [bannerAd],
  );

  const renderCarousel = useCallback(({ item, index }: { item: any, index: number }) => {
    return (
      <TouchableOpacity
        key={`slider-${index}`}
        onPress={() => {
          if(item.is_ads == true){
            const url = item.ads_url.includes('http://') ? item.ads_url : 'http://' + item.ads_url;
            Linking.openURL(url);
          }else{
            console.debug('pllaying mode', navId)
            dispatch(playVod(item.vod));
            navigation.navigate('播放', {
              vod_id: item.carousel_content_id,
              player_mode: navId == 99 ? 'adult' : 'normal'
            });
            if (navId == 99) { dispatch(enableAdultMode()) }
          }
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: item.carousel_pic_mobile,
            priority: "normal",
          }}
          resizeMode={"contain"}
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
    )
  }, []);

  const renderContent = useCallback(({
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
  }, []);

  // useEffect(() => {
  //   setActiveIndex(0);
  // }, [refreshProp]);

  const shouldShowAds = async () => {
    const shouldShow = await AsyncStorage.getItem('showAds');
    
    if ((shouldShow && shouldShow === 'true') || !shouldShow) {
      fetchBannerAd();
    } else {
      setBannerAd(undefined);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
      
      if (navId == 99) {
        dispatch(showAdultModeDisclaimer())
      }
    }, [navId])
  )

  return (
    <>
      <View style={{ width: width }}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          ListHeaderComponent={
            <>
              {navId != 99 && data?.carousel[0] && !refreshProp && (
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
                    height={width / 2}
                    autoPlay={true}
                    data={data.carousel}
                    scrollAnimationDuration={120}
                    autoPlayInterval={2300}
                    onScrollBegin={() => { }}
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
                {navId != 99 && data && data.class_list && data.class_list.length > 0 && (
                  <FlatListSecondary
                    ref={categoryListRef}
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
                    renderItem={renderContent}
                  />
                )}

                {bannerAd && (
                  <View style ={{
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                    paddingVertical: 5,
                  }}>
                    <BannerContainer
                      bannerImg={bannerAd.ads_pic}
                      bannerUrl={bannerAd.ads_url}
                    />
                  </View>
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
                            console.debug('navid', navId)
                            if (navId != 99) {
                              navigation.navigate('片库', {
                                type_id: item.vod_list[0].type_id,
                              });
                            } else {
                              navigation.navigate('午夜场剧情', {
                                class: item.vod_list[0].vod_class
                              });
                            }
                          }}
                        />
                      </View>
                      {navId == 99
                        ? // is 午夜场剧情
                        item?.vod_list && <VodListVertical numOfRows={2} vods={item?.vod_list} minNumPerRow={2} heightToWidthRatio={1 / 1.814} playerMode='adult' />
                        :
                        item?.vod_list && <VodListVertical vods={item?.vod_list} />
                      }

                      {(index + 1) % 3 === 0 && bannerAd && (
                        <BannerContainer
                          bannerImg={bannerAd.ads_pic}
                          bannerUrl={bannerAd.ads_url}
                        />
                      )}
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
          contentContainerStyle={{ paddingBottom: 60 }}
          removeClippedSubviews={true}
          ListFooterComponent={
            <View style={{ ...styles.loading }}>
              <Text
                style={{
                  ...textVariants.subBody,
                  color: colors.muted,
                  paddingTop: 12,
                }}>
                已经到底了
              </Text>
            </View>
          }
          onEndReachedThreshold={0.5}
        />
      </View>
      {navId == 99 &&
        <EighteenPlusOverlay
          handleAccept={() => {
            dispatch(acceptOverEighteen())
          }}
          handleReject={handleRejectEighteenPlus}
        />

      }
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
    borderRadius: 17,
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
});
