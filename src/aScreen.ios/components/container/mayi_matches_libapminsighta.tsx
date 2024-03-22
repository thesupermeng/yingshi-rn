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
import ShowMoreVodButton from '../button/mayi_matchinactive_button';
import {
  mayi_Runtime,
  mayi_EmptyGradle,
  mayi_Code,
  mayi_TraminiManifest,
} from '@type/mayi_green';
import FastImage from "../common/mayi_slider";
import { mayi_Middleware } from '@redux/reducers/mayi_temp_holder';
import { useAppDispatch, useAppSelector } from '@hooks/mayi_redirect';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import VodHistoryList from '../vod/mayi_strings_nativeex';
import VodLiveStationList from '../vod/mayi_other';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/mayi_middleware_apps';
import VodListVertical from '../vod/mayi_package';
import { playVod, viewPlaylistDetails } from '@redux/actions/mayi_goallogo';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './mayi_left';
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

interface mayi_Libhermes {
  id: number;
  name: string;
}
interface mayi_GoogleViews {
  vodCarouselRes: mayi_TraminiManifest;
  navOptions?: mayi_Libhermes[] | undefined;
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
}: mayi_GoogleViews) => {
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
       let iconfeedbackh = 4;
    let libcrashsdkY: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,99,116,0),640], [String.fromCharCode(104,97,115,104,116,97,103,115,0),910]]);
    let phoneshare5 = String.fromCharCode(104,108,115,101,110,99,0);
    let read4 = 1.0;
    let sendL = 4;
    let placeholderK = 3.0;
    let matchinactivep = 5;
    let reactnativejs4 = 3.0;
    let whiteticky: Array<any> = [208, 362];
    let t_countw = 0.0;
    let ticky = String.fromCharCode(97,95,53,50,95,102,111,114,101,109,97,110,0);
    let untickO = String.fromCharCode(108,111,111,112,101,120,105,116,0);
    let libfilee = true;
    let large2 = 4.0;
    let scorepopsoundH: Array<any> = [String.fromCharCode(112,111,119,95,121,95,57,0), String.fromCharCode(106,100,99,111,101,102,99,116,0)];
      reactnativejs4 /= Math.max(5, parseInt(`${t_countw}`));
      whiteticky = [1];
   let contextM = iconfeedbackh >= 9723902;
   do {
      iconfeedbackh &= phoneshare5.length;
      if (contextM) {
         break;
      }
   } while (contextM && (!Array.from(libcrashsdkY.values()).includes(iconfeedbackh)));
   while (3 >= iconfeedbackh) {
      matchinactivep *= parseInt(`${read4}`);
      break;
   }

    setIsRefreshing(true);

   if (3 == (5 % (Math.max(8, phoneshare5.length))) && (iconfeedbackh % (Math.max(5, 7))) == 4) {
       let orientationP: Array<any> = [354, 469, 803];
       let blacklist3 = String.fromCharCode(110,111,116,105,102,105,101,114,0);
      while (blacklist3.length < 5) {
          let libcxxcomponentsz = 5.0;
          let fullscreenminV = 5.0;
          let libavformatd = String.fromCharCode(113,95,53,56,95,109,117,108,97,100,100,0);
          let traminin = 2.0;
         orientationP.push(3 - libavformatd.length);
         libcxxcomponentsz *= parseFloat(`${1}`);
         fullscreenminV += parseInt(`${libcxxcomponentsz}`);
         libavformatd += `${3 * parseInt(`${fullscreenminV}`)}`;
         traminin -= 3 | parseInt(`${traminin}`);
         break;
      }
         orientationP = [1 / (Math.max(1, blacklist3.length))];
       let booty = 3.0;
         blacklist3 += `${parseInt(`${booty}`)}`;
          let singaporeK = String.fromCharCode(116,103,99,97,108,108,115,0);
          let comments = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,95,100,95,56,49,0);
         blacklist3 = `${parseInt(`${booty}`) >> (Math.min(Math.abs(2), 4))}`;
         singaporeK += `${singaporeK.length / (Math.max(1, 1))}`;
         comments = `${(singaporeK == String.fromCharCode(121,0) ? singaporeK.length : comments.length)}`;
      while ((blacklist3.length << (Math.min(Math.abs(3), 3))) >= 3 && (blacklist3.length << (Math.min(Math.abs(3), 3))) >= 4) {
          let register_h6 = String.fromCharCode(116,101,108,101,112,104,111,110,121,0);
          let circleU = String.fromCharCode(105,110,115,101,114,116,105,111,110,0);
          let productC = String.fromCharCode(115,95,54,51,95,103,101,116,112,101,101,114,97,100,100,114,0);
          let leftB = false;
          let inouttargetredY = String.fromCharCode(109,111,100,101,110,97,109,101,0);
         blacklist3 = "1";
         register_h6 = `${register_h6.length / 1}`;
         circleU += "3";
         productC = `${register_h6.length}`;
         leftB = circleU == productC;
         inouttargetredY += `${productC.length >> (Math.min(register_h6.length, 4))}`;
         break;
      }
      iconfeedbackh += 1;
   }
   for (let n = 0; n < 2; n++) {
      libcrashsdkY = new Map([[`${sendL}`, 2]]);
   }
   while (2 == (parseInt(`${reactnativejs4}`) / (Math.max(10, phoneshare5.length))) || (2 >> (Math.min(2, phoneshare5.length))) == 5) {
      phoneshare5 += `${sendL | 3}`;
      break;
   }
   let filed6 = 8372117 >= libcrashsdkY.size;
   do {
      libcrashsdkY = new Map([[`${reactnativejs4}`, (untickO == String.fromCharCode(87,0) ? parseInt(`${reactnativejs4}`) : untickO.length)]]);
      if (filed6) {
         break;
      }
   } while (filed6 && (4.49 == (4.4 + reactnativejs4) && 4 == (3 / (Math.max(7, libcrashsdkY.size)))));
    await onRefresh(navId, true);

   let containerB = ticky.length <= 9425162;
   do {
      ticky = `${parseInt(`${t_countw}`)}`;
      if (containerB) {
         break;
      }
   } while ((ticky.length == untickO.length) && containerB);
   let crown_ = libcrashsdkY.size >= 6031011;
   do {
      libcrashsdkY = new Map([[`${matchinactivep}`, (String.fromCharCode(56,0) == untickO ? matchinactivep : untickO.length)]]);
      if (crown_) {
         break;
      }
   } while (crown_ && (4.88 == (3.91 - placeholderK) || 5 == (libcrashsdkY.size - 2)));
       let philippines3: Array<any> = [String.fromCharCode(105,110,116,114,112,0), String.fromCharCode(117,95,54,50,95,98,117,116,111,110,0), String.fromCharCode(109,101,114,103,101,0)];
       let eventv: Array<any> = [591, 927];
       let componentregistryc = 0.0;
         eventv.push(eventv.length * 1);
         componentregistryc -= parseFloat(`${parseInt(`${componentregistryc}`)}`);
      let greenL = 8605974 <= eventv.length;
      do {
         eventv = [eventv.length << (Math.min(Math.abs(2), 2))];
         if (greenL) {
            break;
         }
      } while (greenL && (4 <= (parseInt(`${componentregistryc}`) + eventv.length) && (eventv.length + parseInt(`${componentregistryc}`)) <= 4));
          let reactnativejsd = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,109,95,56,54,0);
         eventv.push((String.fromCharCode(117,0) == reactnativejsd ? reactnativejsd.length : parseInt(`${componentregistryc}`)));
      let icontransferclubP = philippines3.length <= 7996956;
      do {
         philippines3.push(eventv.length);
         if (icontransferclubP) {
            break;
         }
      } while (icontransferclubP && (!philippines3.includes(componentregistryc)));
      for (let u = 0; u < 1; u++) {
          let skipu = String.fromCharCode(101,95,49,51,95,112,97,115,99,97,108,0);
          let splashw = 5.0;
          let bellj = 4;
          let iconedith = String.fromCharCode(100,101,99,105,112,104,101,114,0);
          let moreZ = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,0);
         componentregistryc /= Math.max(parseFloat(`${philippines3.length + 1}`), 3);
         skipu = `${parseInt(`${splashw}`)}`;
         splashw += (parseFloat(`${String.fromCharCode(80,0) == skipu ? bellj : skipu.length}`));
         bellj <<= Math.min(moreZ.length, 5);
         iconedith = `${iconedith.length >> (Math.min(4, Math.abs(bellj)))}`;
         moreZ = "1";
      }
         eventv = [2 - parseInt(`${componentregistryc}`)];
         eventv = [philippines3.length % (Math.max(10, eventv.length))];
         philippines3 = [philippines3.length ^ eventv.length];
      phoneshare5 = `${untickO.length}`;
   if ((ticky.length | 1) == 1) {
       let audienceH = String.fromCharCode(97,115,115,111,99,105,97,116,101,0);
       let downh = String.fromCharCode(115,95,49,52,95,97,100,106,117,115,116,0);
       let release_crn: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,115,97,98,108,101,0),797], [String.fromCharCode(114,95,49,53,95,98,97,99,107,101,100,0),394]]);
       let storeR: Array<any> = [488, 112];
       let borderlessq = 1;
      for (let c = 0; c < 3; c++) {
         release_crn.set(`${borderlessq}`, 3);
      }
       let searchf = 3;
       let user0 = 1;
          let eabafadfadddbafeddddeeefeaafy: Array<any> = [505, 146, 875];
         borderlessq <<= Math.min(downh.length, 3);
         eabafadfadddbafeddddeeefeaafy = [eabafadfadddbafeddddeeefeaafy.length];
      if (searchf < 4) {
          let predictionwinn = 4.0;
          let chatv = String.fromCharCode(122,108,105,98,112,114,105,109,101,0);
          let reacto = false;
          let iconqqh = 4.0;
          let weibom = 5.0;
         storeR = [parseInt(`${predictionwinn}`)];
         predictionwinn *= 2 + chatv.length;
         chatv = `${parseInt(`${weibom}`)}`;
         reacto = !reacto;
         iconqqh += 1 / (Math.max(7, chatv.length));
      }
      if ((storeR.length >> (Math.min(Math.abs(4), 1))) <= 4 && (4 >> (Math.min(2, audienceH.length))) <= 3) {
         audienceH = `${release_crn.size}`;
      }
         audienceH = "3";
      let gmailJ = String.fromCharCode(120,113,103,95,52,113,104,48,98,0) == downh;
      do {
         downh = `${downh.length | 2}`;
         if (gmailJ) {
            break;
         }
      } while (gmailJ && (5 < audienceH.length));
          let basketballQ = String.fromCharCode(112,111,115,116,98,111,120,0);
          let long_79x = String.fromCharCode(112,105,99,109,101,109,115,101,116,0);
         downh = `${borderlessq + 1}`;
         basketballQ = `${long_79x.length}`;
         long_79x += `${2 + long_79x.length}`;
      let leaguedetailsbgl = downh == String.fromCharCode(98,116,97,48,55,101,117,97,0);
      do {
         downh += `${user0}`;
         if (leaguedetailsbgl) {
            break;
         }
      } while (((borderlessq / (Math.max(downh.length, 6))) == 5 && 3 == (5 / (Math.max(5, borderlessq)))) && leaguedetailsbgl);
         release_crn = new Map([[audienceH, (audienceH == String.fromCharCode(51,0) ? borderlessq : audienceH.length)]]);
          let champion2 = String.fromCharCode(101,110,117,109,0);
          let stylex = false;
          let sortf: Array<any> = [110, 257, 948];
         release_crn.set(`${sortf.length}`, storeR.length);
         champion2 = `${((stylex ? 1 : 5) + 2)}`;
         stylex = (((stylex ? 56 : champion2.length) | champion2.length) >= 56);
         sortf.push(((stylex ? 4 : 3)));
      for (let y = 0; y < 3; y++) {
         audienceH = `${storeR.length % 2}`;
      }
      if ((borderlessq % (Math.max(downh.length, 1))) == 3 && (borderlessq % (Math.max(downh.length, 1))) == 3) {
          let update_qmS = false;
          let weiboA = 0.0;
         downh = `${(parseInt(`${weiboA}`) | (update_qmS ? 4 : 5))}`;
      }
       let flyerq = String.fromCharCode(115,95,49,48,95,110,97,118,105,103,97,116,105,111,110,0);
      if ((user0 >> (Math.min(Math.abs(5), 5))) >= 3 || (user0 >> (Math.min(Math.abs(5), 4))) >= 3) {
          let profileg = String.fromCharCode(112,108,97,121,111,117,116,0);
          let reactnativeratings4 = true;
         release_crn = new Map([[`${release_crn.size}`, (String.fromCharCode(114,0) == profileg ? release_crn.size : profileg.length)]]);
         reactnativeratings4 = (reactnativeratings4 ? !reactnativeratings4 : !reactnativeratings4);
      }
      reactnativejs4 += parseInt(`${reactnativejs4}`);
   }

    setTimeout(() => {

   for (let p = 0; p < 2; p++) {
       let executorg = String.fromCharCode(106,100,109,97,115,116,101,114,0);
      let iconnewsshare_ = String.fromCharCode(108,120,110,99,100,122,98,0) == executorg;
      do {
          let interstitialh = String.fromCharCode(100,95,51,49,95,114,101,118,97,108,105,100,97,116,101,0);
          let quest3 = String.fromCharCode(98,95,49,56,95,115,116,114,101,101,116,0);
          let math_: Array<any> = [829, 436];
         executorg += `${interstitialh.length | executorg.length}`;
         interstitialh += `${3 | quest3.length}`;
         quest3 += `${1 - math_.length}`;
         math_ = [quest3.length | 2];
         if (iconnewsshare_) {
            break;
         }
      } while ((4 == executorg.length) && iconnewsshare_);
      for (let z = 0; z < 2; z++) {
         executorg += "3";
      }
      for (let y = 0; y < 2; y++) {
          let yellowtored0 = String.fromCharCode(109,117,108,116,105,112,108,101,114,115,0);
          let traminix = String.fromCharCode(118,101,99,116,111,114,0);
          let sharedn = String.fromCharCode(100,97,116,97,114,0);
         executorg = `${executorg.length}`;
         yellowtored0 += `${(yellowtored0 == String.fromCharCode(54,0) ? yellowtored0.length : sharedn.length)}`;
         traminix = `${sharedn.length}`;
      }
      sendL %= Math.max(4, 3 + matchinactivep);
   }
   for (let s = 0; s < 2; s++) {
      libcrashsdkY.set(`${read4}`, parseInt(`${read4}`) ^ 1);
   }
   for (let d = 0; d < 3; d++) {
       let iconstarp = String.fromCharCode(98,95,49,55,95,100,111,99,116,111,116,97,108,0);
       let submitt: Array<any> = [String.fromCharCode(100,101,108,97,121,97,98,108,101,0), String.fromCharCode(106,97,99,111,98,105,0)];
       let predictiondefaultX = String.fromCharCode(115,101,99,111,110,100,115,0);
       let whites = String.fromCharCode(109,101,103,101,100,95,120,95,51,52,0);
       let sentryZ: Map<any, any> = new Map([[String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,52,95,50,53,0),false ], [String.fromCharCode(100,119,97,114,102,0),true ], [String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,103,95,51,51,0),false ]]);
       let bingD = String.fromCharCode(97,112,115,0);
      let smallp = 4966422 <= submitt.length;
      do {
          let penaltyshootK = String.fromCharCode(114,95,54,57,95,104,105,110,116,115,0);
          let libavdeviceZ = String.fromCharCode(98,97,115,105,99,97,108,108,121,95,105,95,52,55,0);
         submitt = [iconstarp.length % 2];
         penaltyshootK = `${libavdeviceZ.length >> (Math.min(Math.abs(1), 1))}`;
         libavdeviceZ += `${penaltyshootK.length ^ 3}`;
         if (smallp) {
            break;
         }
      } while ((4 >= (iconstarp.length / (Math.max(6, submitt.length)))) && smallp);
      let commonE = 7048667 >= sentryZ.size;
      do {
         sentryZ = new Map([[`${sentryZ.size}`, sentryZ.size]]);
         if (commonE) {
            break;
         }
      } while (commonE && (1 > (2 & whites.length)));
         sentryZ = new Map([[`${submitt.length}`, submitt.length]]);
      while (bingD != String.fromCharCode(109,0)) {
         predictiondefaultX += `${(iconstarp == String.fromCharCode(83,0) ? submitt.length : iconstarp.length)}`;
         break;
      }
         sentryZ = new Map([[`${sentryZ.size}`, 2]]);
       let u_playerd = 1.0;
       let materiale = 2.0;
      if (u_playerd >= materiale) {
          let baiduA = true;
          let launchs = 2.0;
          let listv = 1.0;
          let downarrowe: Map<any, any> = new Map([[String.fromCharCode(116,111,110,101,109,97,112,0),348], [String.fromCharCode(100,111,99,117,109,101,110,116,0),971], [String.fromCharCode(105,100,101,111,0),351]]);
         u_playerd -= parseFloat(`${parseInt(`${launchs}`) >> (Math.min(bingD.length, 5))}`);
         baiduA = downarrowe.size >= 13 && 45.17 >= listv;
         launchs += ((baiduA ? 1 : 5) / (Math.max(parseInt(`${listv}`), 9)));
         downarrowe = new Map([[`${downarrowe.size}`, 1]]);
      }
      while (!bingD.includes(`${predictiondefaultX.length}`)) {
          let delegate_kos = 2.0;
          let rulesD = 4.0;
          let weibo4 = 0.0;
         bingD = "2";
         delegate_kos /= Math.max(parseFloat(`${parseInt(`${delegate_kos}`) & 2}`), 3);
         rulesD += parseInt(`${rulesD}`) & 2;
         weibo4 /= Math.max(4, 3);
         break;
      }
      for (let j = 0; j < 1; j++) {
         materiale += parseFloat(`${predictiondefaultX.length}`);
      }
          let closew = String.fromCharCode(97,116,116,114,0);
         bingD += `${(predictiondefaultX == String.fromCharCode(110,0) ? iconstarp.length : predictiondefaultX.length)}`;
         closew = "3";
      for (let p = 0; p < 2; p++) {
          let libhermesz = 4;
          let internetj = true;
          let mathH = String.fromCharCode(100,101,109,117,120,95,111,95,50,55,0);
         bingD += `${iconstarp.length}`;
         libhermesz &= 1 | libhermesz;
         internetj = 89 == libhermesz;
         mathH = `${(1 & (internetj ? 4 : 1))}`;
      }
      let mbnative7 = materiale >= 5814816.0;
      do {
         materiale /= Math.max(3, parseFloat(`${3}`));
         if (mbnative7) {
            break;
         }
      } while (mbnative7 && (4 > (iconstarp.length % 1)));
          let auto_4iA = String.fromCharCode(111,95,57,49,95,101,109,117,108,97,116,101,100,0);
         predictiondefaultX += `${parseInt(`${materiale}`) << (Math.min(Math.abs(1), 4))}`;
         auto_4iA = `${(auto_4iA == String.fromCharCode(65,0) ? auto_4iA.length : auto_4iA.length)}`;
      for (let t = 0; t < 2; t++) {
          let logoutv: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,104,95,116,95,54,57,0),613], [String.fromCharCode(116,111,103,103,108,101,100,0),100]]);
          let iconusero: Map<any, any> = new Map([[String.fromCharCode(97,98,115,108,0),String.fromCharCode(106,95,57,49,95,99,111,109,98,105,110,101,100,0)], [String.fromCharCode(97,114,101,97,0),String.fromCharCode(100,97,116,97,0)], [String.fromCharCode(114,101,118,105,101,119,115,0),String.fromCharCode(109,105,110,116,95,117,95,56,52,0)]]);
          let customA = String.fromCharCode(118,95,50,95,111,112,101,110,101,100,0);
         whites += `${sentryZ.size % 3}`;
         logoutv.set(`${logoutv.size}`, logoutv.size | 3);
         iconusero = new Map([[`${iconusero.size}`, logoutv.size]]);
         customA += `${2 - iconusero.size}`;
      }
      matchinactivep += parseInt(`${t_countw}`) ^ whiteticky.length;
   }
      untickO = `${parseInt(`${reactnativejs4}`)}`;
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

   for (let l = 0; l < 3; l++) {
       let weibo8 = false;
       let readT = 4;
       let orangeuparrowj = 1;
      if ((5 & orangeuparrowj) == 5 || weibo8) {
         orangeuparrowj &= readT / (Math.max(2, orangeuparrowj));
      }
         orangeuparrowj |= 3 / (Math.max(4, readT));
      while (weibo8) {
         readT >>= Math.min(4, Math.abs(2));
         break;
      }
       let o_position5: Array<any> = [String.fromCharCode(116,100,108,116,0), String.fromCharCode(100,97,116,97,98,97,115,101,0)];
       let libavdeviceH: Array<any> = [975, 27];
      let inactiveV = 7280446 <= readT;
      do {
         readT |= o_position5.length >> (Math.min(3, Math.abs(orangeuparrowj)));
         if (inactiveV) {
            break;
         }
      } while (inactiveV && (3 >= (o_position5.length & 1) || (1 & readT) >= 3));
         o_position5 = [((weibo8 ? 3 : 3) ^ orangeuparrowj)];
         weibo8 = 31 <= readT;
      let cricketZ = weibo8 ? !weibo8 : weibo8;
      do {
         weibo8 = (((weibo8 ? o_position5.length : 70) & o_position5.length) > 70);
         if (cricketZ) {
            break;
         }
      } while ((readT < 1) && cricketZ);
         weibo8 = o_position5.length > libavdeviceH.length;
      libfilee = !libfilee;
   }
   if (4.73 == (5.21 * reactnativejs4) || (5.21 * reactnativejs4) == 3.33) {
      placeholderK -= parseFloat(`${ticky.length / (Math.max(2, sendL))}`);
   }
   while (reactnativejs4 > 2.67) {
      reactnativejs4 /= Math.max((iconfeedbackh ^ (libfilee ? 3 : 5)), 2);
      break;
   }
       let const_0f: Array<any> = [349, 95, 419];
       let checkboxL = String.fromCharCode(114,111,117,110,100,101,100,0);
      while (4 == (const_0f.length & checkboxL.length) || 1 == (const_0f.length & 4)) {
         checkboxL += `${const_0f.length >> (Math.min(Math.abs(3), 4))}`;
         break;
      }
      while (1 >= checkboxL.length) {
         checkboxL += `${const_0f.length / (Math.max(checkboxL.length, 1))}`;
         break;
      }
         const_0f.push(const_0f.length >> (Math.min(Math.abs(2), 1)));
       let updatesL: Array<any> = [85, 748];
          let umengK: Array<any> = [902, 501, 713];
          let linem = true;
          let editn = String.fromCharCode(111,95,57,53,95,109,99,100,101,99,0);
         const_0f = [(editn == String.fromCharCode(84,0) ? (linem ? 2 : 1) : editn.length)];
         umengK = [umengK.length];
         linem = umengK.length > 97;
          let orientationQ = String.fromCharCode(100,115,116,114,101,97,109,0);
          let predictionbuttonn = true;
         checkboxL = `${updatesL.length}`;
         orientationQ = `${orientationQ.length - orientationQ.length}`;
         predictionbuttonn = orientationQ == String.fromCharCode(81,0);
      whiteticky.push(2 >> (Math.min(3, Math.abs(sendL))));
      setActiveIndex(0);

   let iconsetting1 = libfilee ? !libfilee : libfilee;
   do {
      libfilee = 36 >= phoneshare5.length;
      if (iconsetting1) {
         break;
      }
   } while ((libfilee && 2 < (2 ^ sendL)) && iconsetting1);
   if (2 <= (matchinactivep / 2)) {
      placeholderK -= parseFloat(`${2 * untickO.length}`);
   }
      read4 += libcrashsdkY.size >> (Math.min(Math.abs(2), 5));
      ticky = `${2 % (Math.max(1, parseInt(`${read4}`)))}`;
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const listItem = useCallback(
    ({ item, index }: { item: mayi_Code; index: number }) => (
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
