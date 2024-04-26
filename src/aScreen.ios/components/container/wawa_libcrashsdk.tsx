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
import ShowMoreVodButton from '../button/wawa_notificationfillempty_button';
import {
  wawaWithCrown,
  wawaSellProfileinactive,
  wawaRedirectNative,
  wawaNterstitial,
} from '@type/wawa_gradlew';
import FastImage from "../common/wawa_iconarrowrightblack";
import { wawaAgreementFlag } from '@redux/reducers/wawa_quest_ping';
import { useAppDispatch, useAppSelector } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import VodHistoryList from '../vod/wawa_smallbrightness';
import VodLiveStationList from '../vod/wawa_neon_phoneshare';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/wawa_iconpointscore';
import VodListVertical from '../vod/wawa_icon_action';
import { playVod, viewPlaylistDetails } from '@redux/actions/wawa_indicator';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './wawa_index_info';
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

interface wawaFullscreenminIconarrowleft {
  id: number;
  name: string;
}
interface wawaAwayShow {
  vodCarouselRes: wawaNterstitial;
  navOptions?: wawaFullscreenminIconarrowleft[] | undefined;
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
}: wawaAwayShow) => {
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
       let release_fb9 = 2;
    let shootnogoal_ = 1.0;
    let fastp = 0.0;
    let sigmobC = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,101,95,49,0);
    let iconclosewhitee: Map<any, any> = new Map([[String.fromCharCode(101,95,51,49,95,115,105,109,112,108,101,115,105,103,110,97,108,0),434], [String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,49,95,51,48,0),221]]);
    let emoji2 = true;
    let encryptr: Array<any> = [966, 443];
    let filledN = 5;
    let placement7 = 1.0;
    let form3 = String.fromCharCode(110,95,53,51,95,115,109,105,108,105,110,103,0);
    let unfillG = true;
    let shareS = 0.0;
      release_fb9 += filledN >> (Math.min(5, Math.abs(1)));
       let actionsQ = 5;
       let agreementt = String.fromCharCode(104,95,49,49,95,99,104,97,110,103,101,108,111,103,0);
         agreementt = "1";
      let cornerkickH = actionsQ >= 7549200;
      do {
         actionsQ >>= Math.min(3, agreementt.length);
         if (cornerkickH) {
            break;
         }
      } while (cornerkickH && ((actionsQ * agreementt.length) < 5 || (agreementt.length * 5) < 5));
       let roundD: Array<any> = [214, 23, 607];
      for (let o = 0; o < 1; o++) {
         actionsQ *= 1;
      }
      for (let x = 0; x < 1; x++) {
         agreementt += "2";
      }
      let themeJ = actionsQ <= 9328760;
      do {
         actionsQ %= Math.max(3, roundD.length);
         if (themeJ) {
            break;
         }
      } while (themeJ && (actionsQ < roundD.length));
      fastp -= parseFloat(`${3 >> (Math.min(1, agreementt.length))}`);
   let sigmobH = 6845985.0 >= fastp;
   do {
      fastp *= parseFloat(`${release_fb9 % (Math.max(filledN, 1))}`);
      if (sigmobH) {
         break;
      }
   } while (sigmobH && (3 >= (form3.length / (Math.max(6, parseInt(`${fastp}`)))) && (form3.length & 3) >= 5));

    setIsRefreshing(true);

       let iconviewergifs = true;
      if (iconviewergifs) {
          let nodeb = String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,110,95,54,52,0);
          let defaultbasketballbgl = 5.0;
          let libreactperfloggerjniW = String.fromCharCode(107,105,110,100,115,95,121,95,51,52,0);
         iconviewergifs = nodeb.length > 26;
         nodeb = `${1 - libreactperfloggerjniW.length}`;
         defaultbasketballbgl /= Math.max(libreactperfloggerjniW.length & 2, 4);
      }
         iconviewergifs = !iconviewergifs;
          let znewarchdefaultsI = 4.0;
          let update_w3 = false;
          let playershirtJ = String.fromCharCode(103,95,49,54,95,105,110,115,105,100,101,0);
         iconviewergifs = 64 > playershirtJ.length;
         znewarchdefaultsI += ((update_w3 ? 3 : 1) << (Math.min(Math.abs(parseInt(`${znewarchdefaultsI}`)), 5)));
         update_w3 = !update_w3;
         playershirtJ = `${3 ^ parseInt(`${znewarchdefaultsI}`)}`;
      sigmobC = `${form3.length / (Math.max(3, sigmobC.length))}`;
   let matchesM = 9128102 <= filledN;
   do {
       let vipsportm = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,95,57,95,57,56,0);
       let resendV = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,107,95,50,49,0);
       let greyarrowupy = String.fromCharCode(120,95,57,55,95,115,116,111,112,112,101,100,0);
          let refreshborderlessE = 4.0;
          let renderM = false;
         greyarrowupy = `${vipsportm.length}`;
         refreshborderlessE /= Math.max(3, 3);
         renderM = 59.59 == refreshborderlessE;
      if (greyarrowupy == String.fromCharCode(84,0)) {
          let bridgeS = 0.0;
          let shirtl = 5.0;
          let fullscreenmaxh = 4.0;
         resendV += `${3 / (Math.max(9, parseInt(`${bridgeS}`)))}`;
         bridgeS += parseFloat(`${parseInt(`${fullscreenmaxh}`) << (Math.min(1, Math.abs(1)))}`);
         shirtl /= Math.max(parseInt(`${shirtl}`) % 2, 3);
         fullscreenmaxh += parseInt(`${shirtl}`) + parseInt(`${fullscreenmaxh}`);
      }
      while (resendV.startsWith(`${vipsportm.length}`)) {
         vipsportm += `${3 / (Math.max(5, vipsportm.length))}`;
         break;
      }
      while (resendV == String.fromCharCode(76,0)) {
          let left0 = 4.0;
         vipsportm += `${vipsportm.length * resendV.length}`;
         left0 *= parseInt(`${left0}`) + parseInt(`${left0}`);
         break;
      }
      let delegate_mt0 = String.fromCharCode(49,101,118,100,98,99,55,121,0) == vipsportm;
      do {
         vipsportm += `${resendV.length | vipsportm.length}`;
         if (delegate_mt0) {
            break;
         }
      } while (delegate_mt0 && (vipsportm == String.fromCharCode(113,0) || 1 < resendV.length));
      if (4 > vipsportm.length && resendV.length > 4) {
         resendV += `${resendV.length >> (Math.min(3, vipsportm.length))}`;
      }
      let othermatchdetailbgc = resendV == String.fromCharCode(97,122,108,100,0);
      do {
         resendV += `${(resendV == String.fromCharCode(100,0) ? resendV.length : vipsportm.length)}`;
         if (othermatchdetailbgc) {
            break;
         }
      } while (othermatchdetailbgc && (resendV.length >= vipsportm.length));
      if (vipsportm.length <= 3) {
         greyarrowupy += `${resendV.length}`;
      }
      while (resendV != String.fromCharCode(116,0)) {
         vipsportm = `${1 * resendV.length}`;
         break;
      }
      filledN += release_fb9;
      if (matchesM) {
         break;
      }
   } while (((3 >> (Math.min(1, Math.abs(filledN)))) >= 5) && matchesM);
      emoji2 = shootnogoal_ <= 92.11;
    await onRefresh(navId, true);

   let matchactiveE = sigmobC.length >= 9213554;
   do {
      sigmobC = `${encryptr.length & 3}`;
      if (matchactiveE) {
         break;
      }
   } while (((parseFloat(`${sigmobC.length}`) - shootnogoal_) > 2.89 || 1 > (2 - parseInt(`${shootnogoal_}`))) && matchactiveE);
      shootnogoal_ /= Math.max(4, parseFloat(`${iconclosewhitee.size >> (Math.min(3, Math.abs(filledN)))}`));
   if (filledN >= 5) {
      emoji2 = sigmobC == String.fromCharCode(114,0);
   }

    setTimeout(() => {

   while (emoji2) {
      emoji2 = 30 <= sigmobC.length;
      break;
   }
       let sellmathbackgroundf = String.fromCharCode(114,101,118,101,114,115,101,100,95,102,95,50,51,0);
       let filledC = 5.0;
      if ((parseFloat(`${sellmathbackgroundf.length}`) * filledC) > 2.24 && 4 > (sellmathbackgroundf.length << (Math.min(Math.abs(1), 2)))) {
         filledC /= Math.max(4, parseFloat(`${sellmathbackgroundf.length}`));
      }
      let huaweiB = 9007709.0 <= filledC;
      do {
         filledC /= Math.max((parseFloat(`${String.fromCharCode(80,0) == sellmathbackgroundf ? sellmathbackgroundf.length : parseInt(`${filledC}`)}`)), 4);
         if (huaweiB) {
            break;
         }
      } while (huaweiB && (3 > (4 / (Math.max(4, sellmathbackgroundf.length))) && 2.56 > (filledC - parseFloat(`${sellmathbackgroundf.length}`))));
      for (let w = 0; w < 1; w++) {
          let matchi: Array<any> = [540, 619];
          let tumbnailI = 0.0;
          let eighteenb = 1.0;
         filledC += parseFloat(`${parseInt(`${tumbnailI}`)}`);
         matchi.push(3);
         tumbnailI -= parseFloat(`${1}`);
         eighteenb *= parseInt(`${eighteenb}`);
      }
      if (5 == (4 & sellmathbackgroundf.length)) {
         filledC *= parseFloat(`${2 * parseInt(`${filledC}`)}`);
      }
      let line_ = filledC <= 6565547.0;
      do {
          let popup5 = true;
          let panglet: Array<any> = [206, 927, 237];
         filledC /= Math.max((parseFloat(`${(popup5 ? 1 : 1)}`)), 3);
         popup5 = panglet.includes(panglet[0]);
         if (line_) {
            break;
         }
      } while ((sellmathbackgroundf.endsWith(`${filledC}`)) && line_);
         sellmathbackgroundf = `${1 << (Math.min(2, Math.abs(parseInt(`${filledC}`))))}`;
      release_fb9 ^= parseInt(`${shootnogoal_}`);
   let greenarrowupV = placement7 <= 6562613.0;
   do {
      placement7 /= Math.max(3, parseFloat(`${1}`));
      if (greenarrowupV) {
         break;
      }
   } while (greenarrowupV && ((4 * form3.length) >= 1));
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

      filledN %= Math.max(4, release_fb9);
      sigmobC += `${(parseInt(`${fastp}`) | (emoji2 ? 5 : 2))}`;
       let types6 = String.fromCharCode(108,95,51,51,95,101,110,100,120,0);
      let arrowrightwithtailG = 9882820 >= types6.length;
      do {
         types6 = `${types6.length}`;
         if (arrowrightwithtailG) {
            break;
         }
      } while (arrowrightwithtailG && (types6.endsWith(`${types6.length}`)));
      if (types6 != String.fromCharCode(111,0)) {
         types6 += `${types6.length}`;
      }
      if (types6.length < 5) {
          let libreactnativeblobh: Map<any, any> = new Map([[String.fromCharCode(104,95,52,52,95,109,115,110,119,99,0),false ], [String.fromCharCode(111,115,116,97,114,95,53,95,56,55,0),false ], [String.fromCharCode(106,95,56,57,95,105,115,101,120,112,108,97,105,110,0),false ]]);
          let rulesO = String.fromCharCode(120,95,51,51,95,115,116,114,105,110,103,0);
          let greyarrowupD = 1;
          let middlek = String.fromCharCode(99,114,108,100,95,103,95,51,0);
          let dplusT = String.fromCharCode(122,95,51,52,95,105,108,108,101,103,97,108,0);
         types6 = `${middlek.length | types6.length}`;
         libreactnativeblobh.set(rulesO, dplusT.length ^ rulesO.length);
         greyarrowupD >>= Math.min(4, Math.abs((rulesO == String.fromCharCode(68,0) ? libreactnativeblobh.size : rulesO.length)));
         middlek += `${libreactnativeblobh.size >> (Math.min(Math.abs(2), 2))}`;
         dplusT += `${(String.fromCharCode(85,0) == dplusT ? greyarrowupD : dplusT.length)}`;
      }
      emoji2 = placement7 <= 61.29;
      setActiveIndex(0);

      placement7 *= parseFloat(`${filledN}`);
      unfillG = form3.length > 72;
      release_fb9 <<= Math.min(4, Math.abs(parseInt(`${placement7}`)));
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const listItem = useCallback(
    ({ item, index }: { item: wawaRedirectNative; index: number }) => (
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
