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
import ShowMoreVodButton from '../button/yys_unlock_gpay_button';
import {
  yysArrowup,
  yysPenaltyshoot,
  yysHongkongList,
  yysMemberDefaultlogo,
} from '@type';
import FastImage from "../common/yys_alert_backwhite";
import { yysIconpointscoreCountdown } from '@redux';
import { useAppDispatch, useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import VodHistoryList from '../vod/yys_football_tramini';
import VodLiveStationList from '../vod/yys_libtob_predictionwin';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility';
import VodListVertical from '../vod/yys_giftbutton';
import { playVod, viewPlaylistDetails } from '@redux';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './yys_predictiondefault_yellowscoreball';
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

interface yysBgvipsportUimanager {
  id: number;
  name: string;
}
interface yysIconarrowrightorangeStation {
  vodCarouselRes: yysMemberDefaultlogo;
  navOptions?: yysBgvipsportUimanager[] | undefined;
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
}: yysIconarrowrightorangeStation) => {
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
       let catagoryu = String.fromCharCode(121,95,57,52,95,115,98,112,114,111,0);
    let themeo = String.fromCharCode(105,118,97,114,115,95,101,95,52,52,0);
    let iconlogoutj = 3.0;
    let iconwechatw = String.fromCharCode(112,114,101,99,97,108,99,95,110,95,57,0);
    let megaphonex = 4.0;
    let componentsc = 4.0;
    let watchN = String.fromCharCode(107,95,57,56,95,114,112,99,103,101,110,0);
    let icondefaultthumbnaill = String.fromCharCode(105,97,100,115,116,120,95,117,95,53,0);
    let matches7 = true;
    let bgvipxvodV: Array<any> = [String.fromCharCode(115,95,54,51,95,101,121,99,104,97,105,110,0), String.fromCharCode(105,110,99,108,117,100,101,100,95,98,95,56,51,0)];
    let flagY = 1;
      themeo = `${catagoryu.length}`;
   for (let u = 0; u < 2; u++) {
      componentsc /= Math.max(parseFloat(`${1 << (Math.min(3, Math.abs(parseInt(`${megaphonex}`))))}`), 3);
   }
      watchN += `${parseInt(`${megaphonex}`)}`;

    setIsRefreshing(true);

   let materialE = matches7 ? !matches7 : matches7;
   do {
      matches7 = componentsc == 36.15 && 11 == themeo.length;
      if (materialE) {
         break;
      }
   } while ((matches7) && materialE);
      themeo = `${(String.fromCharCode(48,0) == iconwechatw ? parseInt(`${componentsc}`) : iconwechatw.length)}`;
   for (let l = 0; l < 3; l++) {
       let mbjscommonX: Map<any, any> = new Map([[String.fromCharCode(104,95,53,55,95,115,104,111,114,116,101,115,116,0),1], [String.fromCharCode(111,95,52,51,95,116,104,105,99,107,110,101,115,115,0),961]]);
       let xnewarchdefaultsF = String.fromCharCode(97,95,51,48,95,112,97,103,101,0);
       let arrowU: Array<any> = [410, 555];
       let hongkongB: Map<any, any> = new Map([[String.fromCharCode(111,95,51,55,95,104,105,103,104,112,97,115,115,0),636], [String.fromCharCode(111,117,116,108,105,110,101,95,110,95,49,48,0),118]]);
      if ((1 - mbjscommonX.size) > 1 || 3 > (hongkongB.size - 1)) {
         hongkongB = new Map([[`${mbjscommonX.size}`, xnewarchdefaultsF.length]]);
      }
         hongkongB.set(xnewarchdefaultsF, hongkongB.size + xnewarchdefaultsF.length);
      for (let w = 0; w < 1; w++) {
         hongkongB = new Map([[`${mbjscommonX.size}`, (xnewarchdefaultsF == String.fromCharCode(104,0) ? mbjscommonX.size : xnewarchdefaultsF.length)]]);
      }
      if (!Array.from(mbjscommonX.values()).includes(arrowU.length)) {
         mbjscommonX = new Map([[`${hongkongB.size}`, 2]]);
      }
         hongkongB = new Map([[`${hongkongB.size}`, 1 | hongkongB.size]]);
         arrowU = [hongkongB.size];
         arrowU = [hongkongB.size % (Math.max(xnewarchdefaultsF.length, 7))];
      for (let u = 0; u < 1; u++) {
         xnewarchdefaultsF += `${(xnewarchdefaultsF == String.fromCharCode(72,0) ? xnewarchdefaultsF.length : mbjscommonX.size)}`;
      }
          let yellowo = String.fromCharCode(118,95,51,48,95,98,114,105,100,103,105,110,103,0);
          let homeJ = false;
         hongkongB = new Map([[`${hongkongB.size}`, 3]]);
         yellowo += `${((homeJ ? 1 : 1) - yellowo.length)}`;
         homeJ = !yellowo.endsWith(`${homeJ}`);
          let scorepopsoundV = String.fromCharCode(112,95,51,49,95,109,101,97,115,117,114,101,100,0);
          let oranged = String.fromCharCode(116,106,117,116,105,108,95,98,95,56,49,0);
          let iconclosewhitebgN = 2.0;
         xnewarchdefaultsF = `${parseInt(`${iconclosewhitebgN}`)}`;
         scorepopsoundV += `${scorepopsoundV.length ^ oranged.length}`;
         oranged += `${scorepopsoundV.length}`;
         iconclosewhitebgN /= Math.max(5, (oranged == String.fromCharCode(88,0) ? oranged.length : scorepopsoundV.length));
          let privacyG: Map<any, any> = new Map([[String.fromCharCode(114,101,97,110,97,108,121,122,101,95,50,95,48,0),173], [String.fromCharCode(102,95,49,56,95,110,97,117,116,105,99,97,108,0),327]]);
          let disconnectedU = 4;
         mbjscommonX = new Map([[`${privacyG.size}`, privacyG.size]]);
         disconnectedU -= disconnectedU;
       let dplusc = String.fromCharCode(106,95,55,48,95,97,117,116,111,97,114,99,104,105,118,101,0);
      megaphonex /= Math.max((parseFloat(`${(matches7 ? 1 : 2)}`)), 3);
   }
    await onRefresh(navId, true);

      iconlogoutj *= parseFloat(`${parseInt(`${componentsc}`) % (Math.max(catagoryu.length, 6))}`);
      watchN += `${icondefaultthumbnaill.length * parseInt(`${megaphonex}`)}`;
      iconlogoutj *= parseFloat(`${parseInt(`${iconlogoutj}`)}`);

    setTimeout(() => {

   for (let s = 0; s < 1; s++) {
      iconwechatw = `${1 >> (Math.min(1, icondefaultthumbnaill.length))}`;
   }
      icondefaultthumbnaill = "3";
   let eyeopeni = 9369583 <= catagoryu.length;
   do {
      catagoryu += `${((matches7 ? 5 : 5) & 3)}`;
      if (eyeopeni) {
         break;
      }
   } while (eyeopeni && (icondefaultthumbnaill.length < catagoryu.length));
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

   for (let z = 0; z < 1; z++) {
       let phoneshareB = false;
       let unread7: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,120,105,110,103,0),252], [String.fromCharCode(97,114,116,105,102,97,99,116,95,103,95,50,57,0),617]]);
       let telegramL = 1.0;
       let sort2: Array<any> = [940, 972];
       let malaysiau = String.fromCharCode(113,95,52,54,95,104,101,97,100,0);
      for (let n = 0; n < 3; n++) {
         phoneshareB = telegramL <= 7.34 || 90 <= unread7.size;
      }
      for (let n = 0; n < 2; n++) {
         malaysiau += `${unread7.size >> (Math.min(Math.abs(2), 1))}`;
      }
         telegramL /= Math.max(2, parseFloat(`${1}`));
      let targeta = telegramL >= 9115619.0;
      do {
          let catagoryP = true;
          let whitetickT = 1;
          let rewarde = 3.0;
          let castP = String.fromCharCode(112,97,103,105,110,103,95,97,95,57,0);
         telegramL -= parseFloat(`${castP.length}`);
         catagoryP = 75 >= whitetickT;
         whitetickT %= Math.max((whitetickT % (Math.max(9, (catagoryP ? 5 : 3)))), 4);
         rewarde -= 3;
         castP = `${((catagoryP ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${rewarde}`)), 5)))}`;
         if (targeta) {
            break;
         }
      } while (targeta && ((2.24 + telegramL) >= 5.37 || 2 >= (unread7.size >> (Math.min(Math.abs(3), 5)))));
          let largej = String.fromCharCode(104,95,54,51,95,105,110,100,101,118,115,0);
         malaysiau = `${malaysiau.length ^ 2}`;
         largej = `${3 & largej.length}`;
         sort2 = [((phoneshareB ? 4 : 2))];
      for (let d = 0; d < 3; d++) {
         telegramL -= parseFloat(`${malaysiau.length}`);
      }
         unread7.set(`${phoneshareB}`, ((phoneshareB ? 3 : 1) | 2));
          let debugV: Array<any> = [236, 329, 135];
         telegramL -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${telegramL}`)), 4))}`);
         debugV = [debugV.length - debugV.length];
      let iconclose1 = malaysiau == String.fromCharCode(50,50,115,57,52,108,56,48,112,0);
      do {
         malaysiau = `${(unread7.size - (phoneshareB ? 2 : 1))}`;
         if (iconclose1) {
            break;
         }
      } while ((!malaysiau.startsWith(`${sort2.length}`)) && iconclose1);
       let nodeD = String.fromCharCode(112,114,111,112,111,115,101,95,119,95,54,51,0);
      let smallbrightnesso = sort2.length <= 6469629;
      do {
         sort2 = [((phoneshareB ? 5 : 2) | 3)];
         if (smallbrightnesso) {
            break;
         }
      } while (smallbrightnesso && (sort2.length == 1));
      if ((malaysiau.length + 3) > 2 && (malaysiau.length + 3) > 4) {
         sort2 = [3];
      }
         unread7.set(`${sort2.length}`, 1 - sort2.length);
      if (1 <= (1 ^ unread7.size) && phoneshareB) {
          let topicR = String.fromCharCode(98,111,100,105,101,115,95,113,95,49,54,0);
          let libglogW = 0.0;
          let libruntimeexecutore = 4.0;
         unread7 = new Map([[`${telegramL}`, 1]]);
         topicR = `${parseInt(`${libruntimeexecutore}`)}`;
         libglogW *= 2 ^ parseInt(`${libruntimeexecutore}`);
      }
      icondefaultthumbnaill = `${((phoneshareB ? 5 : 1) & sort2.length)}`;
   }
   if (2 <= catagoryu.length || themeo == String.fromCharCode(82,0)) {
      themeo = "1";
   }
   if ((2.96 * iconlogoutj) >= 5.11 || 4.46 >= (componentsc - 2.96)) {
       let sellZ = 5.0;
       let homeactive_: Array<any> = [String.fromCharCode(121,95,55,50,95,116,114,110,115,0), String.fromCharCode(107,95,51,57,95,108,97,117,110,99,104,0)];
       let videovarX = 2;
         sellZ += homeactive_.length % (Math.max(9, parseInt(`${sellZ}`)));
       let graphicsv: Array<any> = [397, 390, 409];
       let distl: Array<any> = [858, 520, 567];
      let macauh = graphicsv.length <= 6061486;
      do {
         graphicsv = [2];
         if (macauh) {
            break;
         }
      } while ((graphicsv.length <= homeactive_.length) && macauh);
         sellZ /= Math.max(homeactive_.length, 5);
         videovarX ^= homeactive_.length - 1;
      for (let p = 0; p < 2; p++) {
         sellZ /= Math.max(4, 2);
      }
         homeactive_ = [1 / (Math.max(parseInt(`${sellZ}`), 7))];
         graphicsv.push(distl.length);
          let modeO = 3.0;
          let greytickx: Array<any> = [871, 687, 492];
         sellZ += parseInt(`${modeO}`);
         modeO *= parseFloat(`${greytickx.length}`);
         greytickx.push(greytickx.length | greytickx.length);
      componentsc -= (parseFloat(`${watchN == String.fromCharCode(103,0) ? homeactive_.length : watchN.length}`));
   }
      setActiveIndex(0);

       let skipk = String.fromCharCode(100,111,99,105,100,95,57,95,49,51,0);
       let redgoalA = 2;
       let weatherX: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,57,95,53,57,0),994], [String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,95,97,95,50,53,0),153], [String.fromCharCode(112,101,114,102,111,114,109,105,110,103,95,48,95,55,55,0),808]]);
         skipk = `${redgoalA}`;
      let redirecta = weatherX.size >= 8515276;
      do {
          let reactp: Array<any> = [429, 982, 7];
          let videocommonW = String.fromCharCode(107,105,110,100,95,98,95,56,55,0);
          let shrunkU = 3;
          let ecopy_3V = String.fromCharCode(105,95,55,53,95,98,97,103,101,0);
          let playlistM = false;
         weatherX.set(`${playlistM}`, ((playlistM ? 2 : 3) % (Math.max(5, reactp.length))));
         reactp.push(2);
         videocommonW += `${ecopy_3V.length}`;
         shrunkU ^= (ecopy_3V == String.fromCharCode(115,0) ? ecopy_3V.length : shrunkU);
         if (redirecta) {
            break;
         }
      } while (redirecta && (!skipk.endsWith(`${weatherX.size}`)));
          let full5 = 5.0;
          let statisticsm: Array<any> = [668, 791];
         redgoalA /= Math.max(weatherX.size % 3, 5);
         full5 /= Math.max(parseFloat(`${2 | statisticsm.length}`), 3);
         statisticsm = [3];
      let iconorientationd = redgoalA >= 9049325;
      do {
         redgoalA /= Math.max(1, 1);
         if (iconorientationd) {
            break;
         }
      } while (((4 % (Math.max(3, redgoalA))) >= 3 || (skipk.length % 4) >= 2) && iconorientationd);
      while ((skipk.length >> (Math.min(3, Math.abs(redgoalA)))) <= 4 && 3 <= (4 >> (Math.min(4, Math.abs(redgoalA))))) {
          let a_countF = 0.0;
          let abidetecty = false;
          let appleM: Array<any> = [55, 74];
          let leakcheckert = 5;
         redgoalA <<= Math.min(Math.abs(weatherX.size), 5);
         a_countF -= parseFloat(`${leakcheckert}`);
         abidetecty = 84.87 >= a_countF;
         appleM.push(leakcheckert);
         break;
      }
      for (let g = 0; g < 2; g++) {
          let alertW = 5.0;
          let informationm = String.fromCharCode(103,95,49,57,95,115,112,97,99,101,0);
         redgoalA &= (skipk == String.fromCharCode(72,0) ? skipk.length : redgoalA);
         alertW *= (parseFloat(`${String.fromCharCode(85,0) == informationm ? informationm.length : parseInt(`${alertW}`)}`));
      }
       let videocommonh = 4.0;
       let source9 = 2.0;
          let huaweig: Map<any, any> = new Map([[String.fromCharCode(116,104,105,99,107,110,101,115,115,95,56,95,57,52,0),775], [String.fromCharCode(99,95,53,49,95,105,110,99,108,117,100,101,100,0),914], [String.fromCharCode(114,101,108,97,116,101,100,95,119,95,53,49,0),21]]);
         weatherX = new Map([[`${huaweig.size}`, huaweig.size]]);
          let lightk = true;
          let renew4 = true;
         weatherX.set(`${renew4}`, (3 - (renew4 ? 1 : 4)));
         lightk = !lightk;
      themeo = `${parseInt(`${iconlogoutj}`)}`;
   for (let d = 0; d < 3; d++) {
      icondefaultthumbnaill += "3";
   }
   while (5.90 <= megaphonex) {
      megaphonex /= Math.max(1, parseFloat(`${parseInt(`${iconlogoutj}`) | parseInt(`${componentsc}`)}`));
      break;
   }
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const listItem = useCallback(
    ({ item, index }: { item: yysHongkongList; index: number }) => (
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
