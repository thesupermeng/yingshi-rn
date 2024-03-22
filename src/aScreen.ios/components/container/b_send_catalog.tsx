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
import ShowMoreVodButton from '../button/x_sheet_theme_button';
import {
  RBEmojiEwarded,
  XVSScoreDark,
  AXSheetPrivate,
  JClubEdit,
} from '@type/wpk_long';
import FastImage from "../common/gwi_with";
import { QQCenterChart } from '@redux/reducers/pxk_lang_quest';
import { useAppDispatch, useAppSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import VodHistoryList from '../vod/jrx_sell_signinup';
import VodLiveStationList from '../vod/s_policy_calendar';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/n_subs_interstitial';
import VodListVertical from '../vod/z_langkey';
import { playVod, viewPlaylistDetails } from '@redux/actions/xif_layout';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './qp_middleware';
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

interface YCUFrameYing {
  id: number;
  name: string;
}
interface XFillButton {
  vodCarouselRes: JClubEdit;
  navOptions?: YCUFrameYing[] | undefined;
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
}: XFillButton) => {
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
       let agreementj = 2.0;
    let lineY: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,110,97,109,101,95,53,95,54,51,0),604], [String.fromCharCode(103,97,105,110,99,95,103,95,52,53,0),286], [String.fromCharCode(112,117,112,105,108,95,56,95,49,55,0),772]]);
    let type_gw = 2.0;
    let volumeG: Map<any, any> = new Map([[String.fromCharCode(101,95,50,52,95,112,105,100,0),true ], [String.fromCharCode(109,100,116,97,95,50,95,52,50,0),true ]]);
    let hongkongi = 0.0;
    let backwardw = String.fromCharCode(116,101,108,108,97,114,95,101,95,52,49,0);
    let side2 = String.fromCharCode(106,95,56,51,95,114,105,99,101,0);
    let greyz: Array<any> = [809, 148];
    let service8 = true;
    let otherX = true;
    let modityi: Map<any, any> = new Map([[String.fromCharCode(114,117,115,115,105,97,110,95,51,95,51,48,0),String.fromCharCode(107,95,55,52,95,108,111,99,97,116,105,111,110,115,0)], [String.fromCharCode(106,112,101,103,116,114,97,110,95,55,95,49,55,0),String.fromCharCode(99,111,110,116,101,110,116,95,49,95,55,54,0)]]);
       let v_countQ = String.fromCharCode(105,115,109,101,109,115,101,116,95,117,95,54,51,0);
       let downu = 0;
          let vietnaml: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,115,104,97,100,101,115,0),843], [String.fromCharCode(98,116,111,98,105,110,95,109,95,50,53,0),158]]);
          let networkV = String.fromCharCode(115,95,49,56,95,110,105,98,0);
          let resultj: Map<any, any> = new Map([[String.fromCharCode(104,111,108,100,115,95,57,95,49,54,0),420], [String.fromCharCode(105,114,97,110,100,95,115,95,50,48,0),219]]);
         v_countQ = `${(String.fromCharCode(57,0) == networkV ? vietnaml.size : networkV.length)}`;
         vietnaml = new Map([[`${resultj.size}`, 3 + resultj.size]]);
         downu %= Math.max(4, 3 >> (Math.min(4, v_countQ.length)));
      while (4 == (v_countQ.length | 1) || (downu | v_countQ.length) == 1) {
         downu ^= 2 - downu;
         break;
      }
          let gpays = String.fromCharCode(113,95,51,95,110,111,110,100,99,0);
          let ball4 = 3;
          let combinedj = String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,111,95,53,51,0);
         downu |= 2;
         gpays += `${2 << (Math.min(5, gpays.length))}`;
         ball4 >>= Math.min(2, combinedj.length);
         combinedj += `${ball4 - gpays.length}`;
      let emptyN = v_countQ.length >= 9545471;
      do {
         v_countQ += `${v_countQ.length + downu}`;
         if (emptyN) {
            break;
         }
      } while ((v_countQ.endsWith(`${downu}`)) && emptyN);
         downu *= v_countQ.length << (Math.min(Math.abs(2), 1));
      hongkongi *= (v_countQ == String.fromCharCode(54,0) ? parseInt(`${hongkongi}`) : v_countQ.length);
   if (!side2.includes(`${type_gw}`)) {
      type_gw *= parseFloat(`${1 / (Math.max(8, lineY.size))}`);
   }
      greyz = [3];

    setIsRefreshing(true);

   while ((parseInt(`${type_gw}`) / (Math.max(side2.length, 4))) <= 4) {
      side2 = `${lineY.size}`;
      break;
   }
       let penaltyr = 3.0;
       let switch__S: Array<any> = [184, 106];
       let minivodm: Map<any, any> = new Map([[String.fromCharCode(103,95,51,57,95,108,111,119,112,97,115,115,0),false ], [String.fromCharCode(115,116,100,95,104,95,54,53,0),true ], [String.fromCharCode(119,95,54,48,95,112,114,101,115,101,116,0),true ]]);
       let footballC: Map<any, any> = new Map([[String.fromCharCode(117,98,108,105,99,95,98,95,53,54,0),String.fromCharCode(115,109,111,111,116,104,110,101,115,115,95,105,95,54,0)], [String.fromCharCode(113,95,49,52,0),String.fromCharCode(116,95,53,95,105,100,99,105,110,0)]]);
         penaltyr -= 1;
         minivodm.set(`${penaltyr}`, switch__S.length);
      while (switch__S.includes(penaltyr)) {
         switch__S.push(minivodm.size + 1);
         break;
      }
         penaltyr *= parseInt(`${penaltyr}`);
      for (let r = 0; r < 3; r++) {
          let hejiF = 4.0;
          let projectH: Array<any> = [573, 52, 185];
          let switch_y6 = String.fromCharCode(119,114,105,116,101,99,108,101,97,114,95,112,95,57,55,0);
          let feedback5 = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,95,114,95,52,57,0);
         penaltyr += 1 >> (Math.min(1, Math.abs(parseInt(`${penaltyr}`))));
         hejiF *= (switch_y6 == String.fromCharCode(115,0) ? projectH.length : switch_y6.length);
         projectH.push((String.fromCharCode(106,0) == switch_y6 ? parseInt(`${hejiF}`) : switch_y6.length));
         feedback5 += `${feedback5.length ^ 2}`;
      }
      agreementj += (3 * (service8 ? 2 : 5));
      hongkongi /= Math.max(1 % (Math.max(7, parseInt(`${hongkongi}`))), 2);
    await onRefresh(navId, true);

      lineY.set(side2, parseInt(`${type_gw}`));
   let sideX = service8 ? !service8 : service8;
   do {
      service8 = volumeG.size == 99 && otherX;
      if (sideX) {
         break;
      }
   } while (sideX && (otherX));
       let pausev = true;
       let whatsappe = 5.0;
      if (whatsappe <= 3.81) {
         pausev = !pausev && whatsappe >= 21.8;
      }
      if (pausev) {
          let championw = String.fromCharCode(101,95,55,51,95,115,116,97,116,101,112,0);
          let guideV: Map<any, any> = new Map([[String.fromCharCode(118,97,116,97,114,95,97,95,56,50,0),true ], [String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,119,95,51,49,0),false ]]);
         pausev = !pausev;
         championw += `${championw.length}`;
         guideV = new Map([[`${guideV.size}`, 1]]);
      }
      let update_hO = pausev ? !pausev : pausev;
      do {
         pausev = pausev && 31.60 == whatsappe;
         if (update_hO) {
            break;
         }
      } while (update_hO && (pausev));
      for (let l = 0; l < 2; l++) {
         whatsappe *= parseInt(`${whatsappe}`) << (Math.min(1, Math.abs(3)));
      }
         whatsappe /= Math.max(4, parseInt(`${whatsappe}`) & 1);
      let bannerk = whatsappe <= 7471882.0;
      do {
          let thailandk = 3.0;
          let auto_o_6 = 1.0;
          let components: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,114,95,120,95,52,55,0),705], [String.fromCharCode(112,111,107,101,114,95,55,95,51,52,0),479]]);
          let saveK = 2.0;
          let dragV = 0;
         whatsappe *= components.size << (Math.min(1, Math.abs(parseInt(`${thailandk}`))));
         thailandk -= parseInt(`${auto_o_6}`) & dragV;
         auto_o_6 -= 3 - parseInt(`${saveK}`);
         components = new Map([[`${saveK}`, parseInt(`${saveK}`)]]);
         dragV *= 1 - parseInt(`${auto_o_6}`);
         if (bannerk) {
            break;
         }
      } while (bannerk && (pausev));
      service8 = !service8;

    setTimeout(() => {

   if ((4.97 - hongkongi) > 3.48 || 4.97 > hongkongi) {
      otherX = 50.56 > hongkongi || 21 > modityi.size;
   }
      hongkongi *= 3 * parseInt(`${type_gw}`);
      modityi = new Map([[`${modityi.size}`, 2 | modityi.size]]);
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

       let anytimeo = String.fromCharCode(122,95,50,50,95,105,110,108,105,103,104,116,0);
       let analyticsq: Array<any> = [String.fromCharCode(114,111,117,110,100,95,52,95,49,0), String.fromCharCode(114,95,57,55,95,110,105,100,115,110,0), String.fromCharCode(99,95,57,56,95,100,101,102,101,114,114,101,114,0)];
         anytimeo += `${(String.fromCharCode(122,0) == anytimeo ? analyticsq.length : anytimeo.length)}`;
      for (let i = 0; i < 2; i++) {
          let actionsJ = String.fromCharCode(102,97,105,108,97,98,108,101,95,103,95,51,49,0);
         analyticsq.push(analyticsq.length);
         actionsJ += `${3 >> (Math.min(1, actionsJ.length))}`;
      }
      let weiboz = anytimeo == String.fromCharCode(55,99,100,56,57,0);
      do {
          let sellI = String.fromCharCode(110,95,52,95,112,114,101,99,105,115,105,111,110,0);
         anytimeo = `${(String.fromCharCode(108,0) == sellI ? sellI.length : analyticsq.length)}`;
         if (weiboz) {
            break;
         }
      } while ((anytimeo.length < analyticsq.length) && weiboz);
      for (let x = 0; x < 2; x++) {
          let hejiG = 2.0;
          let textb = 5;
         anytimeo = `${anytimeo.length & parseInt(`${hejiG}`)}`;
         hejiG *= parseFloat(`${3}`);
         textb ^= 2 + textb;
      }
          let profileF = false;
         anytimeo += `${3 << (Math.min(3, analyticsq.length))}`;
         anytimeo = `${anytimeo.length % (Math.max(9, analyticsq.length))}`;
      otherX = service8;
   while (1 > (side2.length / 2) && 2 > (side2.length * parseInt(`${hongkongi}`))) {
       let vnewsp: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,99,97,116,97,108,111,103,0),841], [String.fromCharCode(116,105,108,108,95,107,95,56,54,0),238]]);
          let splashH = String.fromCharCode(117,110,107,110,111,119,110,115,95,98,95,49,53,0);
          let minis = String.fromCharCode(114,95,49,54,95,115,104,97,100,101,115,0);
         vnewsp = new Map([[splashH, minis.length * splashH.length]]);
      let injuryl = vnewsp.size >= 8378909;
      do {
          let buttonH = 1.0;
          let delegate_llK = String.fromCharCode(111,118,101,114,114,105,100,101,95,105,95,51,55,0);
          let watchP: Array<any> = [772, 127];
         vnewsp.set(`${buttonH}`, parseInt(`${buttonH}`) % 3);
         delegate_llK = `${delegate_llK.length + 1}`;
         watchP = [watchP.length];
         if (injuryl) {
            break;
         }
      } while (((vnewsp.size ^ 3) >= 4) && injuryl);
         vnewsp.set(`${vnewsp.size}`, vnewsp.size);
      hongkongi -= (parseInt(`${hongkongi}`) + (service8 ? 4 : 5));
      break;
   }
      volumeG.set(`${side2}`, volumeG.size);
      setActiveIndex(0);

      agreementj -= volumeG.size;
   while (Array.from(modityi.keys()).includes(`${greyz.length}`)) {
       let gestures_ = true;
       let service4 = 3;
      while ((3 >> (Math.min(4, Math.abs(service4)))) < 3 && service4 < 3) {
         service4 /= Math.max(4, 2);
         break;
      }
       let minimized = String.fromCharCode(110,97,118,105,103,97,116,101,95,108,95,49,48,0);
      greyz = [parseInt(`${hongkongi}`)];
      gestures_ = (!gestures_ ? !gestures_ : gestures_);
      break;
   }
   let window_ym = service8 ? !service8 : service8;
   do {
      service8 = String.fromCharCode(88,0) == side2;
      if (window_ym) {
         break;
      }
   } while ((agreementj == 4.51) && window_ym);
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const listItem = useCallback(
    ({ item, index }: { item: AXSheetPrivate; index: number }) => (
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
      <TouchableOpacity activeOpacity={0.85}
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
      <TouchableOpacity activeOpacity={0.85}
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
