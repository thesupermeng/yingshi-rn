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
import ShowMoreVodButton from '../button/ww_delegate_matchactive_button';
import {
  wwFirebase,
  wwControl,
  wwRulesPhoto,
  wwLibreactperfloggerjni,
} from '@type/ww_dycreator_result';
import FastImage from "../common/ww_result";
import { wwMbjscommon } from '@redux/reducers/ww_shared';
import { useAppDispatch, useAppSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';
import VodHistoryList from '../vod/ww_mapping_libswscale';
import VodLiveStationList from '../vod/ww_sort';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/ww_icon';
import VodListVertical from '../vod/ww_defaultplayerimg';
import { playVod, viewPlaylistDetails } from '@redux/actions/ww_floater';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './ww_sharemodal_heji';
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

interface wwPlayDetail {
  id: number;
  name: string;
}
interface wwIndexDice {
  vodCarouselRes: wwLibreactperfloggerjni;
  navOptions?: wwPlayDetail[] | undefined;
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
}: wwIndexDice) => {
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
       let builds = false;
    let iconuserB = false;
    let l_lockO: Array<any> = [878, 336];
    let pushV = String.fromCharCode(99,97,109,101,108,0);
    let analyticv: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,97,108,0),false ], [String.fromCharCode(102,105,108,116,101,114,101,100,0),false ], [String.fromCharCode(111,102,102,115,101,116,115,0),true ]]);
    let yellowe = false;
    let libreactperfloggerjnir: Array<any> = [String.fromCharCode(99,117,114,115,111,114,0), String.fromCharCode(100,101,113,117,101,117,101,100,0)];
    let tempH = false;
    let bodanm = 2;
    let unselectedF = String.fromCharCode(112,114,101,100,105,99,97,116,101,0);
    let eighteen7 = String.fromCharCode(110,110,109,111,100,0);
    let target5 = String.fromCharCode(116,101,108,101,103,114,97,0);
    let containerS: Array<any> = [977, 598, 122];
    let eactI: Array<any> = [525, 517];
    let unfilli = 1;
      builds = pushV.length < unselectedF.length;
       let fastforward5 = 5.0;
       let proxyD = String.fromCharCode(116,101,109,112,115,0);
       let middleJ = String.fromCharCode(110,111,109,101,109,0);
         middleJ = `${parseInt(`${fastforward5}`)}`;
      let exampleimagei = String.fromCharCode(107,107,107,99,106,107,120,114,0) == proxyD;
      do {
          let dacccfaabfbcbadeebddcabacdffdbv = 4.0;
          let adult3 = true;
          let uploadr = String.fromCharCode(99,109,111,118,101,0);
         proxyD += `${parseInt(`${dacccfaabfbcbadeebddcabacdffdbv}`) - parseInt(`${fastforward5}`)}`;
         dacccfaabfbcbadeebddcabacdffdbv /= Math.max(4, (parseFloat(`${(adult3 ? 1 : 1) << (Math.min(uploadr.length, 1))}`)));
         adult3 = !adult3 || uploadr.length <= 89;
         if (exampleimagei) {
            break;
         }
      } while (exampleimagei && (proxyD == String.fromCharCode(65,0) && middleJ.length == 1));
         fastforward5 -= (parseFloat(`${middleJ == String.fromCharCode(88,0) ? middleJ.length : proxyD.length}`));
          let signinup1 = true;
         middleJ = `${((signinup1 ? 1 : 3))}`;
      if ((parseInt(`${fastforward5}`) / (Math.max(2, 4))) < 2 || 5.100 < (fastforward5 / (Math.max(2.96, 2)))) {
         fastforward5 *= parseFloat(`${parseInt(`${fastforward5}`) >> (Math.min(proxyD.length, 4))}`);
      }
      let lessW = proxyD == String.fromCharCode(104,113,110,50,116,107,53,113,120,108,0);
      do {
         proxyD = `${middleJ.length | proxyD.length}`;
         if (lessW) {
            break;
         }
      } while ((middleJ.length >= 1) && lessW);
         middleJ = `${middleJ.length ^ 1}`;
         proxyD += `${1 + middleJ.length}`;
          let yelloww: Map<any, any> = new Map([[String.fromCharCode(101,120,116,110,0),true ], [String.fromCharCode(110,100,101,120,0),false ]]);
          let animation_ = String.fromCharCode(122,98,117,102,0);
         proxyD += `${1 % (Math.max(8, proxyD.length))}`;
         yelloww = new Map([[`${yelloww.size}`, animation_.length]]);
         animation_ = `${yelloww.size}`;
      builds = String.fromCharCode(50,0) == unselectedF;
      builds = !iconuserB;

    setIsRefreshing(true);

   while (iconuserB) {
      tempH = !yellowe;
      break;
   }
   if (yellowe && iconuserB) {
      iconuserB = !builds;
   }
   if ((pushV.length & 3) <= 1) {
      pushV += `${libreactperfloggerjnir.length ^ analyticv.size}`;
   }
    await onRefresh(navId, true);

       let subtextA = 5;
       let scheduleS = 5.0;
      if ((scheduleS + subtextA) > 5.14) {
         scheduleS /= Math.max(subtextA, 2);
      }
         scheduleS -= subtextA % (Math.max(parseInt(`${scheduleS}`), 10));
          let auto_5I: Array<any> = [String.fromCharCode(114,101,115,116,111,114,101,0), String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,0), String.fromCharCode(100,105,97,99,114,105,116,105,99,0)];
          let filedQ = 0;
          let volume9 = 0.0;
         subtextA &= parseInt(`${volume9}`) >> (Math.min(auto_5I.length, 5));
         auto_5I.push(filedQ);
          let sansS = String.fromCharCode(109,97,116,99,104,101,0);
          let cancelr = String.fromCharCode(111,99,115,112,105,100,0);
          let themeH = String.fromCharCode(97,117,110,105,110,105,116,0);
         scheduleS -= subtextA + parseInt(`${scheduleS}`);
         sansS = `${cancelr.length | 1}`;
         cancelr = `${cancelr.length}`;
         themeH = `${(String.fromCharCode(76,0) == sansS ? themeH.length : sansS.length)}`;
      while (3 > subtextA) {
          let filedn: Array<any> = [517, 340, 94];
          let applicationX = 4.0;
          let videocommonK = String.fromCharCode(97,97,99,101,110,99,116,97,98,0);
          let minivodM = 3.0;
         subtextA *= 3 << (Math.min(4, filedn.length));
         filedn.push(videocommonK.length);
         applicationX *= parseFloat(`${3}`);
         videocommonK = `${parseInt(`${minivodM}`) & 3}`;
         minivodM *= parseFloat(`${1}`);
         break;
      }
      if (scheduleS >= 3.19) {
         scheduleS -= subtextA | parseInt(`${scheduleS}`);
      }
      analyticv.set(`${bodanm}`, bodanm);
      pushV += `${pushV.length}`;
       let largebrightnessx: Map<any, any> = new Map([[String.fromCharCode(116,104,105,114,100,0),String.fromCharCode(116,116,108,0)], [String.fromCharCode(114,111,120,121,0),String.fromCharCode(115,104,111,114,116,102,108,111,97,116,0)]]);
       let predictionwinC = String.fromCharCode(99,111,117,110,116,100,111,119,110,0);
      while (1 <= largebrightnessx.size) {
          let mappingB = String.fromCharCode(111,110,121,120,0);
         largebrightnessx = new Map([[`${largebrightnessx.size}`, largebrightnessx.size]]);
         mappingB = `${mappingB.length}`;
         break;
      }
         predictionwinC += `${largebrightnessx.size << (Math.min(predictionwinC.length, 3))}`;
          let resendB = true;
         predictionwinC = "2";
      while ((predictionwinC.length | largebrightnessx.size) == 1) {
         predictionwinC += "1";
         break;
      }
         largebrightnessx.set(predictionwinC, 3 ^ largebrightnessx.size);
      while (predictionwinC.length == largebrightnessx.size) {
         predictionwinC += `${(String.fromCharCode(106,0) == predictionwinC ? largebrightnessx.size : predictionwinC.length)}`;
         break;
      }
      pushV = `${libreactperfloggerjnir.length >> (Math.min(Math.abs(3), 1))}`;

    setTimeout(() => {

   if (!unselectedF.endsWith(`${analyticv.size}`)) {
       let libtanD = false;
       let topicb = String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,0);
       let usernamew = 1;
       let znews1: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,101,114,0),false ], [String.fromCharCode(107,108,97,115,115,0),true ]]);
      while (!libtanD) {
         usernamew += znews1.size + 3;
         break;
      }
         usernamew <<= Math.min(Math.abs(3), 1);
         topicb = `${usernamew / (Math.max(topicb.length, 2))}`;
         libtanD = !libtanD;
      if (2 > (topicb.length / 3) || (topicb.length / 3) > 3) {
         usernamew &= 1;
      }
      for (let p = 0; p < 3; p++) {
         znews1 = new Map([[`${usernamew}`, 3 * topicb.length]]);
      }
         libtanD = znews1.size < usernamew;
      for (let b = 0; b < 1; b++) {
         topicb = `${(String.fromCharCode(113,0) == topicb ? topicb.length : (libtanD ? 5 : 5))}`;
      }
      for (let o = 0; o < 1; o++) {
          let goalo = String.fromCharCode(111,112,115,99,97,108,101,0);
          let privacyN: Map<any, any> = new Map([[String.fromCharCode(105,115,110,97,110,0),532], [String.fromCharCode(102,111,108,100,0),674], [String.fromCharCode(115,101,99,115,0),712]]);
          let placeholderd = 1;
         libtanD = 80 >= topicb.length;
         goalo = `${goalo.length}`;
         privacyN.set(`${placeholderd}`, 3 ^ privacyN.size);
         placeholderd |= 1;
      }
         libtanD = String.fromCharCode(80,0) == topicb;
      let steph = 6634522 >= usernamew;
      do {
          let analyticsl: Array<any> = [61, 527];
          let injury8 = 1;
          let small7 = String.fromCharCode(112,97,99,107,97,103,101,115,0);
          let bootF = 5.0;
          let liveO = String.fromCharCode(108,105,102,101,116,105,109,101,0);
         usernamew ^= 1 - liveO.length;
         analyticsl = [(small7 == String.fromCharCode(98,0) ? small7.length : parseInt(`${bootF}`))];
         injury8 -= analyticsl.length;
         bootF += parseFloat(`${2 >> (Math.min(3, analyticsl.length))}`);
         liveO += `${1 - analyticsl.length}`;
         if (steph) {
            break;
         }
      } while ((5 <= usernamew || 2 <= (usernamew % (Math.max(5, 7)))) && steph);
      while (!libtanD) {
         libtanD = znews1.size == 39 || topicb == String.fromCharCode(87,0);
         break;
      }
      analyticv = new Map([[`${libtanD}`, 1 + usernamew]]);
   }
       let alertn = String.fromCharCode(112,114,101,112,101,110,100,0);
       let shielddonef = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,0);
      let lessX = String.fromCharCode(115,98,52,100,118,111,108,104,106,120,0) == alertn;
      do {
         alertn = `${alertn.length}`;
         if (lessX) {
            break;
         }
      } while (lessX && (3 == alertn.length));
          let dacccfaabfbcbadeebddcabacdffdbu = false;
         alertn += `${shielddonef.length}`;
         dacccfaabfbcbadeebddcabacdffdbu = !dacccfaabfbcbadeebddcabacdffdbu;
       let morea = true;
       let googleJ = true;
      for (let m = 0; m < 1; m++) {
         shielddonef = `${(1 & (googleJ ? 1 : 3))}`;
      }
         morea = shielddonef.length == 41;
       let whitetickm = 0.0;
       let googlem = 4.0;
      tempH = (eighteen7.length % (Math.max(shielddonef.length, 8))) <= 39;
   let libmapbufferjnio = String.fromCharCode(51,98,109,116,0) == eighteen7;
   do {
       let libflippera = String.fromCharCode(115,110,111,119,100,97,116,97,0);
       let update_7c0: Array<any> = [891, 613, 841];
       let iconpipexpandl = 3;
      while ((libflippera.length << (Math.min(1, update_7c0.length))) <= 3) {
         libflippera += `${iconpipexpandl}`;
         break;
      }
      let bannerl = 7532820 <= update_7c0.length;
      do {
         update_7c0 = [3 << (Math.min(Math.abs(iconpipexpandl), 5))];
         if (bannerl) {
            break;
         }
      } while (bannerl && (update_7c0.length < 4));
       let application9 = String.fromCharCode(115,112,105,110,108,111,99,107,0);
      if (!application9.includes(`${update_7c0.length}`)) {
         update_7c0.push(libflippera.length);
      }
         iconpipexpandl &= 3;
      if (3 <= (iconpipexpandl % (Math.max(application9.length, 1))) && 2 <= (iconpipexpandl % (Math.max(3, 2)))) {
         application9 += "1";
      }
          let librrcV = 2.0;
         iconpipexpandl += update_7c0.length - 3;
         librrcV /= Math.max(parseFloat(`${parseInt(`${librrcV}`) / 1}`), 3);
       let heartc = 5.0;
      let completeX = 6884953 >= libflippera.length;
      do {
          let middlebrightness8 = 0.0;
          let updatesB = String.fromCharCode(115,117,98,120,0);
          let xvodc = String.fromCharCode(100,114,105,118,101,110,0);
          let videovarO: Array<any> = [364, 992, 989];
          let hejiR = true;
         libflippera = `${xvodc.length}`;
         middlebrightness8 += parseInt(`${middlebrightness8}`) | 3;
         updatesB = "2";
         xvodc = `${3 / (Math.max(1, parseInt(`${middlebrightness8}`)))}`;
         videovarO.push(parseInt(`${middlebrightness8}`) & 2);
         hejiR = 82 > updatesB.length;
         if (completeX) {
            break;
         }
      } while (((5 ^ libflippera.length) > 5) && completeX);
      eighteen7 = `${1 % (Math.max(7, l_lockO.length))}`;
      if (libmapbufferjnio) {
         break;
      }
   } while (libmapbufferjnio && (tempH));
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

      builds = analyticv.size < 72;
   if (!iconuserB || (5 / (Math.max(1, l_lockO.length))) > 4) {
       let teamQ = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,0);
      let crossh = teamQ.length >= 5593680;
      do {
         teamQ = `${(teamQ == String.fromCharCode(82,0) ? teamQ.length : teamQ.length)}`;
         if (crossh) {
            break;
         }
      } while (crossh && (teamQ.length >= 3));
         teamQ = `${teamQ.length}`;
      for (let q = 0; q < 3; q++) {
         teamQ += `${teamQ.length}`;
      }
      l_lockO = [pushV.length];
   }
       let resultw = 2.0;
       let philippinesn = true;
       let sliderX: Array<any> = [164, 743];
          let zhengpian6 = String.fromCharCode(120,107,101,101,112,0);
          let scorej = 1.0;
         resultw -= 1 ^ parseInt(`${resultw}`);
         zhengpian6 = "2";
         scorej += parseFloat(`${zhengpian6.length >> (Math.min(1, Math.abs(parseInt(`${scorej}`))))}`);
         philippinesn = philippinesn && resultw == 71.6;
      let bingu = philippinesn ? !philippinesn : philippinesn;
      do {
         philippinesn = sliderX.includes(philippinesn);
         if (bingu) {
            break;
         }
      } while (bingu && (!philippinesn));
         philippinesn = (95 < ((!philippinesn ? sliderX.length : 95) % (Math.max(4, sliderX.length))));
      if ((3 & sliderX.length) == 1 && 3 == sliderX.length) {
          let modeI = 0.0;
          let temperaturep: Array<any> = [424, 341, 638];
          let libsgcorer: Array<any> = [339, 116];
          let leaguev: Array<any> = [327, 205];
          let appsq = String.fromCharCode(102,97,114,101,110,100,0);
         sliderX = [parseInt(`${resultw}`) & parseInt(`${modeI}`)];
         modeI += appsq.length << (Math.min(4, leaguev.length));
         temperaturep = [temperaturep.length % 3];
         libsgcorer = [temperaturep.length / 3];
         leaguev.push(leaguev.length);
         appsq = `${leaguev.length << (Math.min(appsq.length, 5))}`;
      }
      let blackI = philippinesn ? !philippinesn : philippinesn;
      do {
         philippinesn = sliderX.length >= 13;
         if (blackI) {
            break;
         }
      } while ((!philippinesn) && blackI);
         resultw /= Math.max(1, 1);
      let tumbnaily = 7893785.0 <= resultw;
      do {
          let libavformatd = false;
          let area0 = String.fromCharCode(103,97,109,117,116,0);
          let watchx = String.fromCharCode(114,97,100,105,111,0);
         resultw *= parseInt(`${resultw}`) % (Math.max(3, 8));
         libavformatd = area0.length < watchx.length;
         area0 += `${((libavformatd ? 3 : 1))}`;
         watchx = "1";
         if (tumbnaily) {
            break;
         }
      } while (tumbnaily && (4.30 < resultw && (4.30 + resultw) < 5.57));
          let reminderj = String.fromCharCode(97,98,98,114,0);
          let connectionK = 1.0;
         philippinesn = 67 > reminderj.length;
         reminderj += `${parseInt(`${connectionK}`) | 3}`;
         connectionK -= parseInt(`${connectionK}`);
      l_lockO = [1];
      setActiveIndex(0);

      pushV += "1";
   for (let u = 0; u < 1; u++) {
       let time_dW = String.fromCharCode(112,97,99,107,101,116,105,122,101,114,0);
       let typingL: Array<any> = [211, 768];
       let nexte = false;
       let modeT: Map<any, any> = new Map([[String.fromCharCode(101,99,107,101,121,0),false ], [String.fromCharCode(108,108,100,98,105,110,105,116,0),true ], [String.fromCharCode(115,112,101,99,116,114,117,109,0),true ]]);
       let benefito = String.fromCharCode(115,95,50,57,0);
       let libfollyv = 1.0;
       let moduleT = String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,0);
      while (!Array.from(modeT.keys()).includes(`${libfollyv}`)) {
          let phoneA: Array<any> = [165, 736, 355];
         libfollyv -= typingL.length;
         phoneA.push(phoneA.length);
         break;
      }
          let targetV = 4;
         libfollyv /= Math.max(targetV % 3, 5);
      let pauseY = modeT.size >= 8694245;
      do {
         modeT = new Map([[`${modeT.size}`, modeT.size]]);
         if (pauseY) {
            break;
         }
      } while (pauseY && (5.83 < (libfollyv * modeT.size) && 1 < (modeT.size * parseInt(`${libfollyv}`))));
          let notificationk = String.fromCharCode(102,114,105,101,110,100,115,0);
          let mbsplashk = String.fromCharCode(103,114,105,100,0);
         time_dW += `${benefito.length}`;
         notificationk += "3";
         mbsplashk += "1";
      if (2.66 > libfollyv) {
         benefito += `${time_dW.length % 2}`;
      }
         benefito = `${parseInt(`${libfollyv}`)}`;
         moduleT += `${typingL.length % (Math.max(3, 2))}`;
      if ((time_dW.length % 5) <= 1) {
          let resendv = String.fromCharCode(108,112,99,109,0);
          let orangeU = 3;
         libfollyv /= Math.max(1, 1);
         resendv = `${(resendv == String.fromCharCode(56,0) ? resendv.length : orangeU)}`;
         orangeU /= Math.max(resendv.length, 2);
      }
          let d_centerR = 0.0;
          let type_1L: Map<any, any> = new Map([[String.fromCharCode(100,120,118,97,0),false ], [String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,0),true ], [String.fromCharCode(99,102,116,102,115,117,98,0),true ]]);
         libfollyv /= Math.max(type_1L.size, 4);
         d_centerR /= Math.max(parseInt(`${d_centerR}`), 3);
         type_1L = new Map([[`${d_centerR}`, parseInt(`${d_centerR}`) * parseInt(`${d_centerR}`)]]);
      if ((1 << (Math.min(5, benefito.length))) < 3) {
          let combineY = String.fromCharCode(116,114,101,110,100,105,110,103,0);
          let modulesH = 4.0;
          let unselectedO = 1.0;
         benefito += `${2 << (Math.min(5, time_dW.length))}`;
         combineY += `${1 << (Math.min(1, Math.abs(parseInt(`${modulesH}`))))}`;
         modulesH += combineY.length / 3;
         unselectedO -= parseInt(`${modulesH}`);
      }
         moduleT = `${((nexte ? 1 : 3) >> (Math.min(Math.abs(3), 1)))}`;
          let selected6 = true;
         nexte = (parseInt(`${libfollyv}`) / (Math.max(time_dW.length, 7))) >= 12;
         selected6 = selected6 || !selected6;
      let colors8 = nexte ? !nexte : nexte;
      do {
          let coreW = 1;
          let a_lockz = 1.0;
          let final_t2R = 4.0;
          let v_hashQ = String.fromCharCode(102,117,122,122,101,114,0);
          let photoS: Array<any> = [1000, 553];
         nexte = moduleT.length == 69;
         coreW -= (v_hashQ == String.fromCharCode(57,0) ? parseInt(`${final_t2R}`) : v_hashQ.length);
         a_lockz += 1 - parseInt(`${a_lockz}`);
         final_t2R *= (String.fromCharCode(90,0) == v_hashQ ? v_hashQ.length : parseInt(`${final_t2R}`));
         photoS = [photoS.length];
         if (colors8) {
            break;
         }
      } while ((time_dW.includes(`${nexte}`)) && colors8);
      unselectedF = "1";
   }
   let projecti = unselectedF.length <= 6052524;
   do {
      unselectedF += `${pushV.length}`;
      if (projecti) {
         break;
      }
   } while (projecti && (unselectedF.includes(`${bodanm}`)));
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const listItem = useCallback(
    ({ item, index }: { item: wwRulesPhoto; index: number }) => (
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
