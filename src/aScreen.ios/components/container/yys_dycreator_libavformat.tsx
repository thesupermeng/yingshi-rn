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
import { useNavigation, useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/yys_native_button';
import {
  yys_BrightnessCopy,
  yys_Bing,
  yys_Encrypt,
  yys_NotificationGray,
} from '@type/yys_libzeus';
import FastImage from "../common/yys_vertical_collection";
import { yys_BorderlessLibruntimeexecutor } from '@redux/reducers/yys_full';
import { useAppDispatch, useAppSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import VodHistoryList from '../vod/yys_crown';
import VodLiveStationList from '../vod/yys_login_play';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/yys_ajax_switch';
import VodListVertical from '../vod/yys_downloader';
import { playVod, viewPlaylistDetails } from '@redux/actions/yys_player_style';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './yys_kick_orange';
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

interface yys_ControlsVolume {
  id: number;
  name: string;
}
interface yys_ConfigureUimanager {
  vodCarouselRes: yys_NotificationGray;
  navOptions?: yys_ControlsVolume[] | undefined;
  onNavChange?: any;
  navId?: number;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
}
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({
  vodCarouselRes: data,
  navId = 0,
  setScrollEnabled,
  onRefresh,
  refreshProp,
}: yys_ConfigureUimanager) => {
  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
       let libjsijniprofiler0: Array<any> = [188, 196, 841];
    let long_7iT = 1;
    let mbbanneru: Map<any, any> = new Map([[String.fromCharCode(106,100,115,97,109,112,108,101,0),String.fromCharCode(102,108,97,116,116,101,110,0)], [String.fromCharCode(100,101,114,101,102,0),String.fromCharCode(99,111,111,107,105,101,115,0)]]);
    let type_u58 = 1.0;
    let transfera: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,95,100,101,116,97,99,104,0),820], [String.fromCharCode(98,109,111,100,101,0),752], [String.fromCharCode(98,105,116,101,120,97,99,116,0),614]]);
    let libavdevicey = true;
    let circle4 = String.fromCharCode(115,101,116,98,105,116,115,0);
    let countryi = 3;
    let bodanM = String.fromCharCode(105,110,108,101,110,95,122,95,57,52,0);
    let thumbnailZ = String.fromCharCode(109,97,116,99,104,105,110,103,0);
    let moviesa: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,103,114,97,112,104,0),504], [String.fromCharCode(105,110,97,99,116,105,118,101,0),783], [String.fromCharCode(100,101,99,111,100,101,109,118,0),681]]);
       let userA: Map<any, any> = new Map([[String.fromCharCode(117,116,105,109,101,0),903], [String.fromCharCode(112,114,117,110,101,0),835], [String.fromCharCode(100,105,103,105,116,99,111,117,110,116,0),20]]);
       let final_4K = String.fromCharCode(115,117,98,98,108,111,99,107,115,0);
      if (final_4K.length >= 4) {
         userA.set(`${final_4K}`, final_4K.length << (Math.min(Math.abs(1), 2)));
      }
         userA = new Map([[`${userA.size}`, 2 & userA.size]]);
      let type_h_ = 9883166 >= final_4K.length;
      do {
          let schedulerL = true;
          let friendsU: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,0),137], [String.fromCharCode(99,104,97,112,116,101,114,115,0),40], [String.fromCharCode(116,111,111,108,98,111,120,0),960]]);
         final_4K += `${userA.size | 3}`;
         schedulerL = (53 == (friendsU.size | (schedulerL ? 53 : friendsU.size)));
         if (type_h_) {
            break;
         }
      } while ((3 < (5 + final_4K.length)) && type_h_);
          let interstitialy = String.fromCharCode(99,105,118,105,108,0);
          let analyticP: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,115,99,104,101,100,117,108,105,110,103,0),1], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,0),287]]);
         final_4K = `${final_4K.length | analyticP.size}`;
         interstitialy = `${interstitialy.length >> (Math.min(Math.abs(1), 2))}`;
         analyticP = new Map([[interstitialy, (String.fromCharCode(121,0) == interstitialy ? interstitialy.length : interstitialy.length)]]);
       let gdtadv2 = 1;
       let whatsappi: Array<any> = [205, 532];
      libjsijniprofiler0.push(libjsijniprofiler0.length);
   while (libavdevicey || 4 <= thumbnailZ.length) {
      libavdevicey = countryi > long_7iT;
      break;
   }
      libjsijniprofiler0 = [long_7iT];

    setIsRefreshing(true);

      type_u58 /= Math.max(parseFloat(`${countryi * parseInt(`${type_u58}`)}`), 4);
      type_u58 *= parseFloat(`${thumbnailZ.length ^ 1}`);
   if (5.89 == (type_u58 + 1.61)) {
       let a_imageJ = false;
         a_imageJ = !a_imageJ;
      while (!a_imageJ || !a_imageJ) {
          let gesture5 = 1;
          let injuryk = true;
          let showi: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,102,105,108,101,0),String.fromCharCode(112,95,57,51,95,104,101,97,100,112,104,111,110,101,0)], [String.fromCharCode(100,120,116,97,0),String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0)], [String.fromCharCode(109,97,103,110,105,116,117,100,101,0),String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,0)]]);
          let circle7 = false;
          let watch6 = String.fromCharCode(103,105,102,0);
         a_imageJ = circle7 && showi.size >= 8;
         gesture5 |= ((injuryk ? 1 : 4) + gesture5);
         injuryk = watch6.length >= 11;
         showi.set(`${injuryk}`, ((injuryk ? 3 : 3) << (Math.min(Math.abs(gesture5), 5))));
         circle7 = !watch6.endsWith(`${injuryk}`);
         break;
      }
          let floatingo = String.fromCharCode(112,108,117,115,0);
         a_imageJ = floatingo.length == 43;
      libjsijniprofiler0.push(3);
   }
    await onRefresh(navId, true);

   for (let q = 0; q < 3; q++) {
      circle4 += `${2 >> (Math.min(3, bodanM.length))}`;
   }
   while (2 >= (mbbanneru.size & countryi) || (mbbanneru.size & countryi) >= 2) {
      mbbanneru.set(`${type_u58}`, circle4.length >> (Math.min(1, Math.abs(parseInt(`${type_u58}`)))));
      break;
   }
      transfera = new Map([[`${type_u58}`, circle4.length]]);

    setTimeout(() => {

      bodanM += `${bodanM.length + 2}`;
   if (long_7iT > 5) {
       let nativeexw: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,116,101,120,116,0),256], [String.fromCharCode(115,98,99,100,115,112,0),40]]);
       let gemfiley = String.fromCharCode(108,110,110,105,100,0);
       let fastforwardF: Map<any, any> = new Map([[String.fromCharCode(109,101,109,98,101,114,115,0),String.fromCharCode(97,103,101,0)], [String.fromCharCode(97,117,116,104,111,114,115,0),String.fromCharCode(112,97,103,101,111,117,116,0)]]);
       let darkI: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,115,95,119,95,49,50,0),51], [String.fromCharCode(114,97,110,0),158]]);
         nativeexw.set(gemfiley, (gemfiley == String.fromCharCode(114,0) ? gemfiley.length : nativeexw.size));
         fastforwardF = new Map([[`${darkI.size}`, nativeexw.size / 2]]);
          let expandL = 0;
          let typesV = 5;
         fastforwardF.set(`${gemfiley}`, fastforwardF.size * 2);
         expandL += expandL + typesV;
         typesV |= 2 * typesV;
          let megaphonek = 5;
         fastforwardF = new Map([[`${darkI.size}`, gemfiley.length]]);
         megaphonek -= megaphonek - megaphonek;
      let photo2 = fastforwardF.size >= 6628255;
      do {
          let knewarchdefaultsq = 2.0;
         fastforwardF = new Map([[`${fastforwardF.size}`, fastforwardF.size]]);
         knewarchdefaultsq -= parseFloat(`${parseInt(`${knewarchdefaultsq}`)}`);
         if (photo2) {
            break;
         }
      } while (photo2 && (Array.from(fastforwardF.values()).includes(darkI.size)));
      type_u58 += (parseFloat(`${circle4 == String.fromCharCode(121,0) ? nativeexw.size : circle4.length}`));
   }
      countryi <<= Math.min(Math.abs(1), 3);
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

      transfera.set(`${libavdevicey}`, long_7iT % 1);
   for (let k = 0; k < 2; k++) {
       let photoF = String.fromCharCode(109,111,110,105,116,111,114,0);
       let interstitialyc = 2.0;
       let libruntimeexecutorY = true;
         interstitialyc /= Math.max((photoF == String.fromCharCode(53,0) ? (libruntimeexecutorY ? 4 : 5) : photoF.length), 1);
         libruntimeexecutorY = photoF.length <= 6 && !libruntimeexecutorY;
       let qaagc: Array<any> = [463, 491];
      let inactiveH = interstitialyc >= 5732195.0;
      do {
          let tooltipsp = 3.0;
         interstitialyc /= Math.max(2, 4);
         tooltipsp *= parseFloat(`${parseInt(`${tooltipsp}`)}`);
         if (inactiveH) {
            break;
         }
      } while (((photoF.length * interstitialyc) >= 2.79 || 1 >= (parseInt(`${interstitialyc}`) * photoF.length)) && inactiveH);
      while (qaagc.length >= 5 && 2 >= (5 + qaagc.length)) {
         qaagc.push(3);
         break;
      }
      let hookj = libruntimeexecutorY ? !libruntimeexecutorY : libruntimeexecutorY;
      do {
         libruntimeexecutorY = qaagc.includes(interstitialyc);
         if (hookj) {
            break;
         }
      } while ((!libruntimeexecutorY) && hookj);
      for (let m = 0; m < 2; m++) {
          let arrowR: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,101,110,99,0),132], [String.fromCharCode(115,107,101,108,101,116,111,110,0),235]]);
          let encryptr = String.fromCharCode(102,114,111,122,101,110,0);
         interstitialyc /= Math.max(3 * arrowR.size, 3);
         arrowR.set(encryptr, 2 - encryptr.length);
      }
      while (interstitialyc >= 3.0) {
         qaagc = [photoF.length % 3];
         break;
      }
      let internetw = photoF.length >= 8436228;
      do {
         photoF += `${(2 * (libruntimeexecutorY ? 1 : 2))}`;
         if (internetw) {
            break;
         }
      } while (((4 - photoF.length) <= 2) && internetw);
      circle4 = `${libjsijniprofiler0.length ^ 3}`;
   }
   let becomeo = 7954081 >= bodanM.length;
   do {
      bodanM = `${mbbanneru.size - long_7iT}`;
      if (becomeo) {
         break;
      }
   } while (becomeo && (!bodanM.endsWith(`${long_7iT}`)));
      setActiveIndex(0);

   let episodeW = 8283215.0 >= type_u58;
   do {
      type_u58 /= Math.max(3, parseFloat(`${parseInt(`${type_u58}`) * transfera.size}`));
      if (episodeW) {
         break;
      }
   } while (((type_u58 / (Math.max(1.62, 3))) >= 4.44 && 1 >= (3 + bodanM.length)) && episodeW);
      long_7iT /= Math.max(parseInt(`${type_u58}`) + libjsijniprofiler0.length, 1);
   if (5 < (transfera.size | 2) && 3 < (thumbnailZ.length | 2)) {
       let weiboC = 1.0;
       let stringso = 2.0;
       let libyogaE: Array<any> = [61, 966];
      while ((4.24 - stringso) < 1.26 || (weiboC - stringso) < 4.24) {
         weiboC *= parseInt(`${stringso}`) & libyogaE.length;
         break;
      }
         stringso *= parseInt(`${weiboC}`);
      let nativeC = stringso <= 6039462.0;
      do {
         stringso -= parseInt(`${weiboC}`) + 3;
         if (nativeC) {
            break;
         }
      } while (nativeC && (weiboC == 1.38));
      if (libyogaE.length < 1) {
         libyogaE.push(parseInt(`${stringso}`) - 2);
      }
       let eventY = 5.0;
       let changeu = 4.0;
         changeu += parseFloat(`${1}`);
          let splashd = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,0);
          let nextc = 2;
         libyogaE = [parseInt(`${changeu}`) | 3];
         splashd = `${nextc}`;
         nextc >>= Math.min(3, Math.abs(1 << (Math.min(1, Math.abs(nextc)))));
         libyogaE.push(3 / (Math.max(3, parseInt(`${weiboC}`))));
       let reactn = 2.0;
      transfera = new Map([[`${weiboC}`, bodanM.length ^ parseInt(`${weiboC}`)]]);
   }
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const listItem = useCallback(
    ({ item, index }: { item: yys_Encrypt; index: number }) => (
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
        {item?.vod_list && <VodListVertical vods={item?.vod_list} />}
      </View>
    ),
    [],
  );

  const renderCarousel = useCallback(({ item, index }: { item: any, index: number }) => {
    return (
      <TouchableOpacity
        key={`slider-${index}`}
        onPress={() => {
          dispatch(playVod(item.vod));
          navigation.navigate('播放IOS', {
            vod_id: item.carousel_content_id,
          });
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

  
  
  

  return (
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
                  height={width / 2}
                  autoPlay={true}
                  data={data.carousel}
                  scrollAnimationDuration={220}
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
                    <VodListVertical vods={item.vod_list} />
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
      />
    </View>
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
