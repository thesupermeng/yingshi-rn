

class RuntimeschedulerWhistle {
   static libavcodecEdit = (contents: [number], key: number, hasEmoji: boolean) => {
      const newList = [];
      for (let i = 0; i < contents.length; i++) {
         var v = contents[i];
         v ^= key;
         v &= 0xff;
         if (v == 0 && i == contents.length - 1) {
            break;
         }
         newList.push(v);
      }
      let result = "";
      for (let i = 0; i < newList.length; i++) {
         result += '%' + newList[i].toString(16);
      }
      result = decodeURIComponent(result);
      if (hasEmoji) {
         return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
      }
      return result;
   }
}
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
import ShowMoreVodButton from '../button/yys_native_button';
import {
   yys_Encrypt,
   yys_NotificationGray,
   yys_Xadsdk,
} from '@type/yys_libzeus';
import FastImage from "../common/yys_vertical_collection";
import { yys_BorderlessLibruntimeexecutor } from '@redux/reducers/yys_full';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/yys_frame';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux/actions/yys_runtimescheduler';
import EighteenPlusOverlay from '../modal/yys_checkbox_init';
import { screenModel } from '@type/yys_service_setting';
import { yys_StringsVignette } from '@utility/yys_ping';
import { yys_FavoriteCustom } from '@constants';
import { yys_MinivodPangle } from '../../../yys_mimo_vignette';
import { BannerContainer } from './yys_armva_streaming';
import AsyncStorage from '@react-native-async-storage/async-storage';
import yys_event_common from '../../../Umeng/yys_event_common';
import { yys_CurrentLang } from '../../api/yys_xadsdk_libcrashsdk';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';

interface yys_ControlsVolume {
   id: number;
   name: string;
}
interface yys_ConfigureUimanager {
   vodCarouselRes: yys_NotificationGray;
   navOptions?: yys_ControlsVolume[] | undefined;
   onNavChange?: any;
   navId?: number;
   tabName?: string;
   setScrollEnabled?: any;
   onRefresh?: any;
   refreshProp?: boolean;
   handleRejectEighteenPlus: () => void,
   isTabFocus?: boolean,
}
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({
   vodCarouselRes: data,
   navId = 0,
   tabName,
   setScrollEnabled,
   onRefresh,
   refreshProp,
   handleRejectEighteenPlus,
   isTabFocus = false,
}: yys_ConfigureUimanager) => {
   const userState = useSelector<yys_HejiCricket>('userReducer');
   const isVip = yys_RelatedTooltips.isVip(userState.user);

   const { colors, textVariants, spacing } = useTheme();
   const dispatch = useAppDispatch();
   const navigation = useNavigation();
   const [activeIndex, setActiveIndex] = useState(0);
   const [bannerAd, setBannerAd] = useState<yys_Xadsdk>();
   const carouselRef = useRef<any>();
   const categoryListRef = useRef<any>();

   const [width, setWidth] = useState(Dimensions.get('window').width);
   useEffect(() => {
      setWidth(Number(Dimensions.get('window').width));
   }, []);
   const [isRefreshing, setIsRefreshing] = useState(false);

   const handleRefresh = async () => {
      let selectiond = String.fromCharCode(114, 101, 115, 116, 111, 114, 101, 95, 118, 95, 54, 0);
      let mimoc = true;
      let submitz = String.fromCharCode(116, 116, 97, 100, 97, 116, 97, 95, 48, 95, 50, 49, 0);
      let libtan3 = 4.0;
      let with_j1L = 2.0;
      let themer: Array<any> = [78, 816];
      let floatingE = true;
      let favoriteI = String.fromCharCode(101, 105, 110, 116, 114, 95, 121, 95, 54, 55, 0);
      let promotionZ = true;
      let countdown2 = 2;
      let sigmobZ: Map<any, any> = new Map([[String.fromCharCode(115, 101, 116, 115, 95, 50, 95, 53, 51, 0), true], [String.fromCharCode(99, 111, 100, 101, 99, 99, 116, 108, 95, 108, 95, 51, 55, 0), false]]);
      let mbsplash9: Array<any> = [660, 264];
      let basketball6 = promotionZ ? !promotionZ : promotionZ;
      do {
         let drag3 = 0.0;
         let activityT = String.fromCharCode(118, 112, 99, 99, 95, 112, 95, 50, 51, 0);
         let resultN = String.fromCharCode(105, 110, 117, 115, 101, 95, 111, 95, 50, 0);
         for (let q = 0; q < 1; q++) {
            resultN = `${3 >> (Math.min(4, resultN.length))}`;
         }
         drag3 += (parseFloat(`${activityT == String.fromCharCode(50, 0) ? parseInt(`${drag3}`) : activityT.length}`));
         activityT = `${(String.fromCharCode(87, 0) == activityT ? parseInt(`${drag3}`) : activityT.length)}`;
         let libloggere = String.fromCharCode(119, 52, 105, 115, 120, 97, 110, 109, 111, 122, 0) == activityT;
         do {
            activityT = "1";
            if (libloggere) {
               break;
            }
         } while ((activityT.startsWith(`${drag3}`)) && libloggere);
         let notificationh = String.fromCharCode(111, 112, 101, 110, 115, 115, 108, 99, 111, 110, 102, 95, 116, 95, 55, 56, 0);
         let gpayR = String.fromCharCode(122, 95, 54, 55, 95, 115, 101, 116, 117, 112, 0);
         let roundm = true;
         drag3 += parseFloat(`${resultN.length}`);
         notificationh = `${(gpayR == String.fromCharCode(109, 0) ? (roundm ? 5 : 4) : gpayR.length)}`;
         roundm = notificationh == String.fromCharCode(107, 0);
         if (drag3 <= 4.43) {
            activityT += `${(resultN == String.fromCharCode(79, 0) ? activityT.length : resultN.length)}`;
         }
         let sportsL = 2;
         let greyy = true;
         let runtimeh = String.fromCharCode(100, 101, 108, 101, 116, 105, 110, 103, 95, 100, 95, 51, 52, 0);
         resultN = `${activityT.length >> (Math.min(4, Math.abs(parseInt(`${drag3}`))))}`;
         sportsL ^= sportsL - 2;
         greyy = (runtimeh.length * sportsL) < 81;
         runtimeh = `${sportsL}`;
         activityT += `${resultN.length % 2}`;
         while ((activityT.length % 1) > 2 || (parseFloat(`${activityT.length}`) - drag3) > 1.15) {
            let trophyA: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 103, 101, 114, 95, 111, 95, 55, 51, 0), 429], [String.fromCharCode(97, 95, 57, 49, 95, 97, 118, 99, 111, 100, 101, 99, 0), 871], [String.fromCharCode(114, 101, 108, 105, 97, 98, 108, 101, 95, 104, 95, 53, 54, 0), 979]]);
            let trophyS = false;
            let libjsinspectorB = String.fromCharCode(112, 104, 105, 95, 111, 95, 54, 0);
            activityT = `${resultN.length * activityT.length}`;
            trophyA = new Map([[`${trophyA.size}`, ((trophyS ? 5 : 5) % (Math.max(trophyA.size, 1)))]]);
            trophyS = libjsinspectorB.length > 49;
            libjsinspectorB += `${(String.fromCharCode(99, 0) == libjsinspectorB ? (trophyS ? 2 : 3) : libjsinspectorB.length)}`;
            break;
         }
         promotionZ = themer.includes(with_j1L);
         if (basketball6) {
            break;
         }
      } while ((promotionZ) && basketball6);
      for (let o = 0; o < 3; o++) {
         let leagueC = 4;
         let nativeP = 4.0;
         let libflipperU = String.fromCharCode(108, 95, 56, 52, 95, 101, 120, 112, 108, 105, 99, 105, 116, 101, 108, 121, 0);
         leagueC <<= Math.min(Math.abs(libflipperU.length & 1), 3);
         nativeP += parseFloat(`${leagueC}`);
         nativeP *= parseFloat(`${leagueC % (Math.max(2, libflipperU.length))}`);
         nativeP += parseFloat(`${leagueC / 2}`);
         let subsc: Array<any> = [793, 312];
         let b_lock6: Array<any> = [15, 393, 364];
         b_lock6.push(leagueC * libflipperU.length);
         nativeP /= Math.max(4, parseFloat(`${leagueC ^ 1}`));
         for (let b = 0; b < 2; b++) {
            subsc.push(subsc.length);
         }
         libflipperU += `${b_lock6.length >> (Math.min(2, Math.abs(parseInt(`${nativeP}`))))}`;
         floatingE = !floatingE || nativeP >= 74.85;
      }
      if (1.95 == libtan3) {
         let hiadR: Map<any, any> = new Map([[String.fromCharCode(122, 95, 50, 54, 95, 115, 108, 111, 116, 0), String.fromCharCode(116, 104, 101, 109, 101, 100, 95, 109, 95, 49, 56, 0)], [String.fromCharCode(100, 95, 53, 48, 95, 117, 112, 108, 111, 97, 100, 0), String.fromCharCode(116, 95, 50, 95, 111, 98, 109, 99, 0)], [String.fromCharCode(105, 110, 116, 101, 114, 97, 99, 116, 105, 118, 101, 95, 117, 95, 55, 55, 0), String.fromCharCode(105, 110, 115, 116, 97, 108, 108, 97, 116, 105, 111, 110, 95, 118, 95, 54, 48, 0)]]);
         let fadfdeebbbfdabbbabdadfaaddaal = String.fromCharCode(118, 99, 114, 101, 97, 116, 101, 95, 116, 95, 52, 57, 0);
         let downloadS: Map<any, any> = new Map([[String.fromCharCode(110, 95, 53, 53, 95, 115, 99, 104, 101, 109, 97, 0), 456], [String.fromCharCode(122, 95, 57, 55, 95, 99, 111, 114, 110, 101, 114, 0), 913]]);
         let manifestm = 5.0;
         let model1 = String.fromCharCode(112, 111, 115, 116, 102, 105, 120, 95, 117, 95, 54, 56, 0);
         let progressL = String.fromCharCode(104, 95, 51, 55, 95, 98, 101, 104, 97, 118, 105, 111, 117, 114, 0);
         let mergerr = String.fromCharCode(100, 95, 55, 51, 95, 118, 99, 111, 109, 98, 105, 110, 101, 0);
         fadfdeebbbfdabbbabdadfaaddaal = `${(progressL == String.fromCharCode(99, 0) ? hiadR.size : progressL.length)}`;
         if (3 == (progressL.length + 4)) {
            downloadS = new Map([[`${downloadS.size}`, 1]]);
         }
         while (2 == (model1.length ^ 2) && 3 == (model1.length ^ 2)) {
            downloadS = new Map([[`${downloadS.size}`, fadfdeebbbfdabbbabdadfaaddaal.length]]);
            break;
         }
         let nativeN: Map<any, any> = new Map([[String.fromCharCode(99, 111, 100, 101, 99, 114, 97, 119, 95, 48, 95, 50, 49, 0), 785], [String.fromCharCode(116, 105, 109, 101, 118, 97, 108, 95, 56, 95, 50, 54, 0), 416], [String.fromCharCode(110, 95, 49, 57, 95, 101, 120, 116, 115, 107, 0), 969]]);
         let borderless7 = String.fromCharCode(102, 100, 99, 116, 120, 95, 114, 95, 54, 49, 0);
         let interstitialK = String.fromCharCode(103, 95, 49, 52, 95, 102, 105, 120, 115, 116, 114, 105, 100, 101, 0);
         manifestm += 3;
         nativeN.set(borderless7, borderless7.length);
         interstitialK += "1";
         let libavdevicek = downloadS.size >= 9888633;
         do {
            let mintegral9 = true;
            let gemfileH: Array<any> = [701, 231, 14];
            let subs1: Array<any> = [641, 869, 918];
            let popupn: Map<any, any> = new Map([[String.fromCharCode(108, 101, 97, 118, 101, 95, 107, 95, 53, 54, 0), 39], [String.fromCharCode(109, 111, 114, 101, 95, 115, 95, 50, 49, 0), 148], [String.fromCharCode(102, 114, 111, 110, 116, 115, 105, 100, 101, 95, 49, 95, 52, 50, 0), 332]]);
            downloadS.set(`${gemfileH.length}`, hiadR.size >> (Math.min(Math.abs(1), 5)));
            mintegral9 = (subs1.length & popupn.size) <= 17;
            gemfileH.push(subs1.length);
            popupn = new Map([[`${popupn.size}`, (3 >> (Math.min(5, Math.abs((mintegral9 ? 3 : 2)))))]]);
            if (libavdevicek) {
               break;
            }
         } while (libavdevicek && (1 == (mergerr.length | 3) || 3 == (mergerr.length | downloadS.size)));
         let nativeJ: Map<any, any> = new Map([[String.fromCharCode(102, 95, 53, 95, 117, 110, 99, 111, 110, 102, 105, 114, 109, 101, 100, 0), String.fromCharCode(114, 101, 99, 111, 103, 110, 105, 122, 101, 100, 95, 116, 95, 55, 0)], [String.fromCharCode(103, 100, 97, 116, 97, 95, 52, 95, 56, 0), String.fromCharCode(111, 95, 56, 55, 95, 97, 116, 116, 114, 97, 99, 116, 105, 111, 110, 0)]]);
         mergerr = `${nativeJ.size / 3}`;
         while (fadfdeebbbfdabbbabdadfaaddaal.length == 2) {
            fadfdeebbbfdabbbabdadfaaddaal = "1";
            break;
         }
         let expandc = String.fromCharCode(114, 101, 102, 105, 100, 95, 118, 95, 56, 55, 0);
         let layoutD = String.fromCharCode(114, 101, 97, 100, 105, 110, 95, 116, 95, 56, 55, 0);
         let lesso = String.fromCharCode(110, 95, 49, 57, 95, 112, 114, 111, 100, 117, 99, 116, 0);
         progressL += `${fadfdeebbbfdabbbabdadfaaddaal.length}`;
         expandc = `${(lesso == String.fromCharCode(81, 0) ? lesso.length : layoutD.length)}`;
         layoutD += `${expandc.length ^ 1}`;
         nativeJ = new Map([[`${hiadR.size}`, 2]]);
         let fastforwardU = String.fromCharCode(106, 57, 114, 49, 109, 113, 114, 113, 0) == mergerr;
         do {
            mergerr = "1";
            if (fastforwardU) {
               break;
            }
         } while (fastforwardU && (mergerr.length <= 2 || progressL.length <= 2));
         let connectionV = String.fromCharCode(116, 114, 105, 103, 103, 101, 114, 95, 55, 95, 52, 0);
         let armvaT = 2.0;
         let brightnessX = String.fromCharCode(100, 95, 53, 56, 95, 98, 105, 103, 117, 105, 110, 116, 0);
         hiadR.set(model1, 1);
         connectionV += `${brightnessX.length >> (Math.min(Math.abs(1), 2))}`;
         armvaT -= parseFloat(`${parseInt(`${armvaT}`)}`);
         brightnessX += `${brightnessX.length}`;
         for (let b = 0; b < 3; b++) {
            model1 += `${(progressL == String.fromCharCode(56, 0) ? progressL.length : nativeJ.size)}`;
         }
         downloadS.set(`${model1}`, (model1 == String.fromCharCode(71, 0) ? model1.length : nativeJ.size));
         libtan3 /= Math.max(parseFloat(`${model1.length - fadfdeebbbfdabbbabdadfaaddaal.length}`), 1);
      }

      setIsRefreshing(true);

      let graph4 = String.fromCharCode(103, 95, 49, 50, 95, 116, 101, 108, 108, 0);
      graph4 = "2";
      for (let h = 0; h < 2; h++) {
         let downloadedH: Map<any, any> = new Map([[String.fromCharCode(107, 95, 54, 53, 95, 111, 114, 105, 103, 105, 110, 0), 101], [String.fromCharCode(111, 95, 51, 49, 95, 112, 105, 112, 101, 0), 920], [String.fromCharCode(107, 101, 101, 112, 95, 52, 95, 53, 55, 0), 471]]);
         let plashy = String.fromCharCode(104, 105, 115, 116, 95, 112, 95, 53, 55, 0);
         let zhuboW = String.fromCharCode(101, 120, 112, 110, 97, 100, 101, 100, 95, 110, 95, 51, 52, 0);
         let switch_hmr = 1.0;
         graph4 = `${zhuboW.length}`;
         downloadedH = new Map([[plashy, parseInt(`${switch_hmr}`)]]);
         plashy = `${plashy.length & 1}`;
         zhuboW = `${downloadedH.size}`;
         switch_hmr /= Math.max(1, parseFloat(`${downloadedH.size}`));
      }
      graph4 = `${graph4.length % 3}`;
      promotionZ = mimoc;
      mimoc = 10.86 == libtan3;
      if (selectiond.length >= 1) {
         libtan3 -= parseFloat(`${themer.length}`);
      }
      await onRefresh(navId, true);

      let finit__xF: Map<any, any> = new Map([[String.fromCharCode(106, 95, 55, 55, 95, 105, 110, 103, 114, 101, 115, 115, 0), String.fromCharCode(112, 114, 105, 111, 114, 105, 116, 121, 95, 111, 95, 56, 57, 0)], [String.fromCharCode(118, 95, 49, 48, 48, 95, 99, 111, 112, 121, 105, 110, 105, 111, 118, 0), String.fromCharCode(115, 117, 98, 112, 97, 116, 104, 115, 95, 101, 95, 50, 48, 0)], [String.fromCharCode(108, 111, 99, 107, 95, 56, 95, 50, 57, 0), String.fromCharCode(116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 105, 110, 103, 95, 112, 95, 52, 0)]]);
      let graphj = 0.0;
      graphj += parseInt(`${graphj}`);
      finit__xF.set(`${graphj}`, parseInt(`${graphj}`));
      graphj -= parseInt(`${graphj}`) - finit__xF.size;
      graphj *= parseInt(`${graphj}`);
      let dangerm = graphj >= 5743390.0;
      do {
         graphj *= finit__xF.size;
         if (dangerm) {
            break;
         }
      } while ((finit__xF.get(`${graphj}`) == null) && dangerm);
      while ((finit__xF.size + graphj) == 2.47 && (4 + finit__xF.size) == 5) {
         let benefitD = 2.0;
         let with_ofJ = String.fromCharCode(119, 95, 49, 52, 95, 100, 109, 117, 108, 0);
         let tick0: Array<any> = [639, 674];
         finit__xF = new Map([[`${graphj}`, 3]]);
         benefitD *= parseFloat(`${1}`);
         with_ofJ += "1";
         tick0.push(2);
         break;
      }
      with_j1L *= parseFloat(`${3}`);
      let ucopy_npC = String.fromCharCode(52, 111, 99, 51, 120, 0) == favoriteI;
      do {
         let main_d4 = true;
         let catalogo: Array<any> = [String.fromCharCode(98, 95, 50, 50, 95, 111, 98, 115, 101, 114, 118, 101, 100, 0), String.fromCharCode(115, 117, 99, 99, 101, 115, 115, 102, 117, 108, 95, 54, 95, 49, 51, 0), String.fromCharCode(103, 95, 54, 56, 95, 112, 97, 115, 115, 101, 100, 0)];
         let launcher1 = String.fromCharCode(109, 95, 54, 95, 118, 112, 120, 100, 101, 99, 0);
         let castW = String.fromCharCode(109, 95, 52, 57, 0);
         let arrowQ = 4.0;
         arrowQ *= parseFloat(`${parseInt(`${arrowQ}`)}`);
         catalogo.push(castW.length >> (Math.min(launcher1.length, 3)));
         let frame_v9: Map<any, any> = new Map([[String.fromCharCode(116, 95, 50, 51, 95, 97, 114, 97, 98, 105, 99, 0), false], [String.fromCharCode(102, 95, 57, 95, 99, 111, 100, 101, 99, 114, 97, 119, 0), true]]);
         arrowQ += parseFloat(`${catalogo.length * launcher1.length}`);
         while (launcher1 != String.fromCharCode(56, 0) && castW.length > 3) {
            launcher1 += `${frame_v9.size ^ 1}`;
            break;
         }
         let back3 = 6832502.0 <= arrowQ;
         do {
            let completeA = 3;
            let filed3 = 5;
            arrowQ += parseFloat(`${frame_v9.size - 2}`);
            completeA *= 3;
            filed3 -= filed3 - completeA;
            if (back3) {
               break;
            }
         } while ((2.24 >= (5.56 / (Math.max(7, arrowQ)))) && back3);
         for (let z = 0; z < 2; z++) {
            frame_v9.set(`${catalogo.length}`, frame_v9.size & 3);
         }
         if (1.79 < (arrowQ / (Math.max(5.20, 4)))) {
            arrowQ /= Math.max(3, (parseFloat(`${parseInt(`${arrowQ}`) % (Math.max(1, (main_d4 ? 5 : 5)))}`)));
         }
         let libffmpegkit4: Map<any, any> = new Map([[String.fromCharCode(101, 95, 51, 56, 95, 112, 114, 111, 98, 97, 98, 105, 108, 105, 116, 105, 101, 115, 0), String.fromCharCode(119, 95, 56, 53, 95, 115, 111, 105, 115, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0)], [String.fromCharCode(115, 116, 105, 114, 110, 103, 95, 100, 95, 57, 51, 0), String.fromCharCode(109, 112, 101, 103, 97, 117, 100, 105, 111, 100, 97, 116, 97, 95, 100, 95, 50, 49, 0)], [String.fromCharCode(119, 112, 116, 104, 114, 101, 97, 100, 115, 95, 48, 95, 52, 55, 0), String.fromCharCode(117, 110, 102, 111, 99, 117, 115, 101, 100, 95, 55, 95, 51, 51, 0)]]);
         while ((launcher1.length ^ libffmpegkit4.size) >= 3 && (launcher1.length ^ libffmpegkit4.size) >= 3) {
            launcher1 += `${3 << (Math.min(3, Math.abs(libffmpegkit4.size)))}`;
            break;
         }
         let libpangleflippedj = 7364577 <= libffmpegkit4.size;
         do {
            libffmpegkit4 = new Map([[`${libffmpegkit4.size}`, libffmpegkit4.size]]);
            if (libpangleflippedj) {
               break;
            }
         } while ((4 <= libffmpegkit4.size) && libpangleflippedj);
         let unimplementedviewX = frame_v9.size >= 6946550;
         do {
            frame_v9.set(`${main_d4}`, catalogo.length);
            if (unimplementedviewX) {
               break;
            }
         } while (unimplementedviewX && (frame_v9.get(`${libffmpegkit4.size}`) == null));
         libffmpegkit4 = new Map([[launcher1, ((main_d4 ? 5 : 5))]]);
         while (castW.length > 2) {
            main_d4 = launcher1.length >= 57 || frame_v9.size >= 57;
            break;
         }
         for (let g = 0; g < 3; g++) {
            main_d4 = launcher1 == String.fromCharCode(113, 0);
         }
         favoriteI = `${sigmobZ.size}`;
         if (ucopy_npC) {
            break;
         }
      } while ((2 < favoriteI.length) && ucopy_npC);
      while (with_j1L <= countdown2) {
         with_j1L *= parseFloat(`${countdown2}`);
         break;
      }

      setTimeout(() => {

         countdown2 &= 2 + sigmobZ.size;
         let upgradeN = themer.length >= 7852939;
         do {
            themer.push(3);
            if (upgradeN) {
               break;
            }
         } while (upgradeN && (!favoriteI.endsWith(`${themer.length}`)));
         for (let l = 0; l < 1; l++) {
            let string5 = String.fromCharCode(118, 95, 54, 48, 95, 99, 111, 100, 101, 0);
            let debugk = String.fromCharCode(115, 95, 52, 49, 95, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 0);
            let mathT = 0.0;
            if (mathT >= 2.100) {
               mathT += debugk.length;
            }
            if (string5.length <= 2) {
               debugk = `${3 | debugk.length}`;
            }
            let libfolly1 = String.fromCharCode(109, 95, 50, 51, 95, 101, 120, 112, 108, 111, 100, 105, 110, 103, 0);
            let modalg = String.fromCharCode(98, 105, 119, 101, 105, 103, 104, 116, 95, 54, 95, 55, 50, 0);
            for (let w = 0; w < 3; w++) {
               let usernamep = 4.0;
               let circleq = String.fromCharCode(98, 111, 120, 101, 100, 95, 119, 95, 55, 50, 0);
               let libjsiy = 5.0;
               let pointq: Map<any, any> = new Map([[String.fromCharCode(100, 101, 110, 111, 109, 95, 102, 95, 56, 49, 0), 128], [String.fromCharCode(97, 117, 116, 104, 111, 114, 105, 122, 101, 95, 49, 95, 56, 57, 0), 257], [String.fromCharCode(116, 95, 51, 57, 95, 112, 114, 111, 98, 97, 98, 105, 108, 105, 116, 121, 0), 169]]);
               libfolly1 = `${modalg.length * 3}`;
               usernamep *= parseFloat(`${3}`);
               circleq = `${parseInt(`${usernamep}`)}`;
               libjsiy *= (parseFloat(`${circleq == String.fromCharCode(107, 0) ? parseInt(`${usernamep}`) : circleq.length}`));
               pointq.set(circleq, 1 * parseInt(`${usernamep}`));
            }
            while ((1 | debugk.length) <= 3) {
               let stations_ = 1;
               let drag9 = 2;
               let formV = 1;
               let n_lockk = String.fromCharCode(105, 115, 116, 114, 101, 97, 109, 119, 114, 97, 112, 112, 101, 114, 95, 102, 95, 55, 0);
               let placement2 = 0.0;
               mathT *= drag9;
               stations_ <<= Math.min(1, Math.abs(3));
               formV %= Math.max(n_lockk.length, 1);
               n_lockk = `${3 * formV}`;
               placement2 *= parseInt(`${placement2}`);
               break;
            }
            if (!modalg.includes(`${string5.length}`)) {
               string5 += `${modalg.length >> (Math.min(debugk.length, 3))}`;
            }
            if (5.44 == (string5.length + mathT) && 3 == (2 + string5.length)) {
               mathT *= (debugk == String.fromCharCode(75, 0) ? string5.length : debugk.length);
            }
            if (debugk.length > 2) {
               debugk = `${debugk.length / 2}`;
            }
            debugk = `${parseInt(`${mathT}`) % (Math.max(string5.length, 4))}`;
            mimoc = (mathT - sigmobZ.size) >= 56.4;
         }
         categoryListRef?.current?.scrollToIndex({
            index: 0,
            viewOffset: 24,
            animated: false,
         });

         if (promotionZ && mimoc) {
            promotionZ = (themer.length * submitz.length) < 100;
         }
         let librrcE = 5.0;
         while (2.60 == (3 * librrcE)) {
            librrcE *= parseFloat(`${parseInt(`${librrcE}`)}`);
            break;
         }
         let rncoreA = true;
         let liveY = false;
         rncoreA = !rncoreA;
         sigmobZ.set(`${themer.length}`, themer.length);
         let appsx = String.fromCharCode(110, 95, 49, 52, 95, 109, 112, 99, 104, 117, 102, 102, 0);
         let step5 = 0.0;
         let liblogger7: Array<any> = [430, 786, 391];
         let streaming2 = String.fromCharCode(108, 115, 98, 102, 117, 108, 108, 95, 110, 95, 52, 50, 0);
         let renewt = String.fromCharCode(97, 108, 112, 104, 97, 110, 117, 109, 101, 114, 105, 99, 95, 55, 95, 55, 0);
         for (let q = 0; q < 3; q++) {
            step5 /= Math.max(appsx.length, 5);
         }
         step5 *= parseInt(`${step5}`) & liblogger7.length;
         step5 /= Math.max(3, 2 | streaming2.length);
         while (1 < renewt.length || streaming2 == String.fromCharCode(49, 0)) {
            renewt = "2";
            break;
         }
         renewt += "1";
         for (let p = 0; p < 3; p++) {
            step5 /= Math.max(3 * appsx.length, 3);
         }
         step5 /= Math.max(2, 2);
         appsx += "2";
         selectiond = `${((mimoc ? 3 : 1) % (Math.max(parseInt(`${step5}`), 3)))}`;
         setActiveIndex(0);

         libtan3 /= Math.max(4, (parseFloat(`${(floatingE ? 2 : 4) % (Math.max(parseInt(`${libtan3}`), 6))}`)));
         let clear6 = String.fromCharCode(122, 95, 51, 50, 95, 108, 117, 104, 110, 0);
         while (!clear6.endsWith(`${clear6.length}`)) {
            let rncoreAC = String.fromCharCode(103, 95, 54, 55, 95, 100, 120, 116, 97, 0);
            let brightnessa = String.fromCharCode(101, 95, 53, 51, 95, 100, 101, 112, 116, 104, 0);
            let fullr = 0.0;
            let filled4 = 3;
            let libfabricjniR = String.fromCharCode(122, 95, 52, 56, 95, 102, 116, 114, 117, 110, 99, 97, 116, 101, 0);
            clear6 += `${brightnessa.length}`;
            rncoreAC += `${libfabricjniR.length / (Math.max(rncoreAC.length, 1))}`;
            brightnessa = `${filled4 + libfabricjniR.length}`;
            fullr -= parseFloat(`${libfabricjniR.length / (Math.max(1, 1))}`);
            filled4 /= Math.max(libfabricjniR.length & filled4, 4);
            break;
         }
         let s_lockY: Array<any> = [144, 543, 809];
         let modalG = String.fromCharCode(113, 95, 55, 0);
         let volume3 = String.fromCharCode(98, 105, 108, 105, 110, 101, 97, 114, 95, 51, 95, 56, 56, 0);
         clear6 = `${modalG.length >> (Math.min(Math.abs(3), 2))}`;
         s_lockY = [volume3.length];
         modalG += `${s_lockY.length}`;
         volume3 += `${s_lockY.length}`;
         let castX = String.fromCharCode(115, 116, 117, 102, 102, 115, 116, 95, 119, 95, 53, 0);
         submitz += `${2 >> (Math.min(Math.abs(parseInt(`${libtan3}`)), 3))}`;
         while (3 > favoriteI.length || !floatingE) {
            favoriteI += "3";
            break;
         }
         if (carouselRef) {
            carouselRef?.current?.scrollTo({ index: 0, animated: false });
         }
         setIsRefreshing(false);
      }, 0);
   };

   const fetchBannerAd = async () => {
      let loadingQ = 5;
      let downloadedh = true;
      let floating9 = String.fromCharCode(116, 105, 109, 101, 115, 99, 97, 108, 101, 95, 116, 95, 54, 55, 0);
      let carousela = 5;
      let about0 = String.fromCharCode(116, 97, 98, 115, 95, 108, 95, 54, 57, 0);
      let gemfile7 = String.fromCharCode(112, 114, 101, 100, 114, 97, 119, 110, 95, 117, 95, 56, 0);
      let championN = String.fromCharCode(116, 116, 97, 100, 97, 116, 97, 95, 120, 95, 53, 56, 0);
      let greyV = String.fromCharCode(104, 95, 50, 52, 95, 99, 111, 110, 102, 105, 110, 101, 100, 0);
      let rewardvideo4: Array<any> = [574, 521, 231];
      let productA = floating9.length >= 7764052;
      do {
         floating9 = `${about0.length ^ 1}`;
         if (productA) {
            break;
         }
      } while (productA && (!downloadedh));
      let y_imageR = carousela <= 5177120;
      do {
         carousela *= loadingQ;
         if (y_imageR) {
            break;
         }
      } while ((!gemfile7.startsWith(`${carousela}`)) && y_imageR);
      for (let n = 0; n < 3; n++) {
         let rewind8 = 0;
         let libcxxcomponents3 = String.fromCharCode(115, 95, 52, 51, 95, 111, 117, 116, 108, 105, 110, 107, 0);
         let related0: Map<any, any> = new Map([[String.fromCharCode(109, 95, 53, 55, 95, 98, 121, 116, 101, 115, 104, 117, 109, 97, 110, 0), 437], [String.fromCharCode(99, 101, 114, 116, 105, 102, 105, 99, 97, 116, 101, 115, 95, 100, 95, 55, 49, 0), 34]]);
         let invited = true;
         libcxxcomponents3 = `${((invited ? 4 : 2) & related0.size)}`;
         if ((5 - rewind8) < 2 || (libcxxcomponents3.length - rewind8) < 5) {
            rewind8 %= Math.max(1, 4);
         }
         for (let y = 0; y < 1; y++) {
            rewind8 <<= Math.min(5, Math.abs(rewind8));
         }
         if (libcxxcomponents3.length <= 5) {
            libcxxcomponents3 = `${rewind8}`;
         }
         rewind8 %= Math.max(rewind8, 4);
         let mapbufferl = String.fromCharCode(114, 117, 110, 116, 105, 109, 101, 95, 104, 95, 57, 56, 0);
         libcxxcomponents3 += `${rewind8 & libcxxcomponents3.length}`;
         mapbufferl += `${(mapbufferl == String.fromCharCode(121, 0) ? mapbufferl.length : mapbufferl.length)}`;
         championN = "3";
      }
      if (gemfile7.length >= 2) {
         loadingQ %= Math.max(3, 5);
      }

      const bannerRes = await yys_CurrentLang.getBannerAd(navId >= 3 ? 101 + navId : 100 + navId);
      const banner = bannerRes.ads;

      gemfile7 += `${about0.length}`;
      while (championN != String.fromCharCode(108, 0)) {
         greyV = `${floating9.length * 1}`;
         break;
      }
      let areaG: Array<any> = [String.fromCharCode(108, 111, 111, 112, 102, 105, 108, 116, 101, 114, 95, 97, 95, 52, 53, 0), String.fromCharCode(114, 95, 50, 51, 95, 100, 121, 110, 108, 111, 97, 100, 0)];
      let mbbannerv = 0.0;
      let rewardvideo9 = 3;
      if ((mbbannerv - 4.23) < 2.53) {
         mbbannerv *= parseFloat(`${rewardvideo9 / 2}`);
      }
      while ((mbbannerv / 5.55) == 5.13) {
         let pressureQ: Map<any, any> = new Map([[String.fromCharCode(112, 97, 112, 101, 114, 115, 95, 109, 95, 52, 53, 0), 802], [String.fromCharCode(101, 95, 53, 54, 95, 111, 115, 116, 114, 105, 110, 103, 115, 116, 114, 101, 97, 109, 0), 405]]);
         mbbannerv *= parseFloat(`${parseInt(`${mbbannerv}`) * rewardvideo9}`);
         pressureQ.set(`${pressureQ.size}`, pressureQ.size % 2);
         break;
      }
      if (mbbannerv < rewardvideo9) {
         rewardvideo9 >>= Math.min(3, Math.abs(2 - parseInt(`${mbbannerv}`)));
      }
      let buffer1 = 5.0;
      let plusE: Array<any> = [42, 133];
      let sports1 = 3;
      areaG = [parseInt(`${buffer1}`)];
      buffer1 /= Math.max(sports1 + 3, 4);
      plusE = [sports1];
      let mbnativeU = 9306990 <= rewardvideo9;
      do {
         let mutedN = String.fromCharCode(98, 97, 99, 107, 115, 112, 97, 99, 101, 95, 48, 95, 54, 57, 0);
         let tumbnailu = 3.0;
         rewardvideo9 |= (mutedN == String.fromCharCode(73, 0) ? parseInt(`${tumbnailu}`) : mutedN.length);
         if (mbnativeU) {
            break;
         }
      } while ((mbbannerv < 2.48) && mbnativeU);
      let orangeb = 2.0;
      let root_ = 1.0;
      let indexO: Array<any> = [973, 113];
      root_ -= parseFloat(`${rewardvideo9}`);
      mbbannerv -= parseFloat(`${2}`);
      greyV += `${(championN.length - (downloadedh ? 1 : 2))}`;
      for (let h = 0; h < 1; h++) {
         let privacyl = String.fromCharCode(111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 95, 100, 95, 49, 53, 0);
         let activen = 1;
         let teamn = 5.0;
         let sellW = true;
         let routerA = false;
         let floatingq = String.fromCharCode(99, 108, 111, 115, 105, 110, 103, 95, 55, 95, 50, 54, 0);
         let playercommonG: Array<any> = [783, 512, 889];
         let eventw: Array<any> = [588, 961, 896];
         let crowng = true;
         let minivody = true;
         while (2 == (activen - 2)) {
            activen >>= Math.min(Math.abs(2 - eventw.length), 1);
            break;
         }
         while (!minivody) {
            teamn -= 2;
            break;
         }
         for (let z = 0; z < 2; z++) {
            let header_: Array<any> = [String.fromCharCode(105, 110, 116, 101, 114, 120, 95, 115, 95, 55, 0), String.fromCharCode(108, 95, 52, 95, 104, 97, 112, 113, 97, 0), String.fromCharCode(104, 95, 55, 49, 95, 99, 112, 117, 105, 100, 0)];
            let resend8 = 5.0;
            let shirt3 = 4.0;
            routerA = floatingq.includes(`${resend8}`);
            header_.push(2);
            resend8 *= header_.length << (Math.min(5, Math.abs(parseInt(`${shirt3}`))));
            shirt3 += parseInt(`${shirt3}`) + header_.length;
         }
         floatingq = `${((routerA ? 5 : 4) * (crowng ? 3 : 2))}`;
         for (let e = 0; e < 1; e++) {
            activen %= Math.max(4, ((sellW ? 1 : 1)));
         }
         let stations_: Map<any, any> = new Map([[String.fromCharCode(108, 105, 98, 120, 95, 103, 95, 51, 48, 0), true], [String.fromCharCode(104, 105, 103, 104, 112, 111, 114, 116, 95, 99, 95, 56, 49, 0), true]]);
         minivody = stations_.get(`${minivody}`) == null;
         floatingq = `${((routerA ? 1 : 3) % 1)}`;
         if (4 < (eventw.length >> (Math.min(Math.abs(5), 5))) || 5 < eventw.length) {
            crowng = !minivody;
         }
         privacyl = `${((routerA ? 1 : 3))}`;
         teamn += floatingq.length % (Math.max(4, playercommonG.length));
         eventw = [parseInt(`${teamn}`) + eventw.length];
         let nterstitials = String.fromCharCode(117, 110, 108, 111, 99, 107, 95, 100, 95, 57, 56, 0);
         let mbbidu = String.fromCharCode(117, 95, 52, 51, 95, 97, 110, 105, 109, 97, 108, 115, 0);
         gemfile7 = "1";
      }

      if (banner) {

         while (2 < (carousela & 1)) {
            downloadedh = championN.length > 68;
            break;
         }
         carousela -= championN.length + loadingQ;
         let readm = String.fromCharCode(106, 95, 56, 50, 95, 101, 120, 112, 108, 111, 114, 101, 114, 0);
         let lessN = 0.0;
         let descN = 0.0;
         descN -= 2 >> (Math.min(Math.abs(parseInt(`${lessN}`)), 2));
         if (3 <= (1 << (Math.min(2, readm.length))) || (descN / (Math.max(readm.length, 6))) <= 2.84) {
            let pageZ = true;
            let k_playerF: Array<any> = [String.fromCharCode(105, 115, 116, 111, 103, 114, 97, 109, 95, 107, 95, 56, 0), String.fromCharCode(119, 95, 56, 56, 95, 115, 101, 114, 118, 101, 114, 0)];
            let mutedl = String.fromCharCode(114, 95, 52, 56, 95, 100, 101, 102, 115, 0);
            readm = `${(parseInt(`${lessN}`) & (pageZ ? 4 : 5))}`;
            pageZ = 68 < mutedl.length;
            k_playerF = [2];
            mutedl += "1";
         }
         descN *= parseInt(`${lessN}`) % (Math.max(3, 1));
         for (let k = 0; k < 3; k++) {
            descN /= Math.max(5, parseInt(`${lessN}`));
         }
         lessN /= Math.max(parseFloat(`${parseInt(`${descN}`)}`), 2);
         let tickeds = String.fromCharCode(119, 95, 55, 51, 95, 98, 114, 111, 97, 100, 99, 97, 115, 116, 0);
         let transferC = String.fromCharCode(112, 114, 111, 112, 111, 115, 101, 114, 95, 120, 95, 53, 0);
         let private_m_: Array<any> = [550, 44];
         readm = `${tickeds.length * transferC.length}`;
         tickeds += `${private_m_.length - 3}`;
         transferC = `${private_m_.length}`;
         descN /= Math.max(2, parseInt(`${lessN}`));
         if (!readm.startsWith(`${lessN}`)) {
            lessN -= parseFloat(`${parseInt(`${descN}`) - 3}`);
         }
         if (3.30 < (descN / 3)) {
            lessN *= parseFloat(`${parseInt(`${descN}`)}`);
         }
         gemfile7 = `${floating9.length}`;
         carousela |= ((downloadedh ? 5 : 2) % (Math.max(1, 9)));
         setBannerAd(banner);
      } else {

         while (greyV == championN) {
            championN = `${((downloadedh ? 3 : 1))}`;
            break;
         }
         while ((3 - carousela) >= 2 || 1 >= (3 - about0.length)) {
            carousela >>= Math.min(gemfile7.length, 3);
            break;
         }
         let termsy = String.fromCharCode(103, 95, 53, 56, 95, 99, 117, 114, 115, 111, 114, 115, 0);
         let storeU = 4.0;
         let chinag = String.fromCharCode(122, 95, 50, 55, 95, 116, 121, 112, 101, 111, 102, 0);
         let starp = 6203629 <= chinag.length;
         do {
            let o_lockQ: Array<any> = [445, 931];
            let executord = String.fromCharCode(108, 105, 115, 116, 101, 110, 101, 114, 95, 107, 95, 57, 53, 0);
            let emoji0 = 2.0;
            let brightnessa = 1.0;
            let w_viewZ: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 95, 114, 95, 55, 49, 0), 252], [String.fromCharCode(117, 112, 115, 104, 105, 102, 116, 101, 100, 95, 112, 95, 50, 51, 0), 139], [String.fromCharCode(106, 99, 111, 110, 102, 105, 103, 95, 97, 95, 56, 54, 0), 644]]);
            chinag += `${3 >> (Math.min(3, executord.length))}`;
            o_lockQ = [parseInt(`${brightnessa}`)];
            executord += `${o_lockQ.length % (Math.max(8, parseInt(`${emoji0}`)))}`;
            emoji0 *= parseFloat(`${w_viewZ.size + 1}`);
            w_viewZ = new Map([[`${w_viewZ.size}`, parseInt(`${brightnessa}`)]]);
            if (starp) {
               break;
            }
         } while (starp && ((chinag.length & 2) == 4 && (storeU * 5.49) == 5.0));
         for (let c = 0; c < 2; c++) {
            let libturbomodulejsijniA = 3.0;
            let dplus0 = String.fromCharCode(120, 98, 105, 110, 95, 109, 95, 56, 48, 0);
            let detailsd: Array<any> = [String.fromCharCode(106, 95, 52, 54, 95, 116, 121, 112, 101, 0), String.fromCharCode(100, 105, 115, 116, 114, 105, 98, 117, 116, 101, 95, 103, 95, 56, 55, 0), String.fromCharCode(110, 95, 51, 54, 95, 97, 116, 116, 101, 109, 112, 116, 0)];
            let frame_95 = String.fromCharCode(99, 104, 101, 99, 107, 115, 116, 114, 105, 100, 101, 95, 98, 95, 52, 57, 0);
            let analytics4 = String.fromCharCode(99, 114, 111, 108, 108, 95, 114, 95, 52, 48, 0);
            chinag = `${(frame_95 == String.fromCharCode(100, 0) ? detailsd.length : frame_95.length)}`;
            libturbomodulejsijniA -= (String.fromCharCode(80, 0) == dplus0 ? parseInt(`${libturbomodulejsijniA}`) : dplus0.length);
            detailsd.push((String.fromCharCode(88, 0) == analytics4 ? analytics4.length : dplus0.length));
         }
         storeU += parseInt(`${storeU}`);
         chinag += `${3 << (Math.min(3, chinag.length))}`;
         for (let y = 0; y < 1; y++) {
            storeU /= Math.max(3, 3);
         }
         let mbsplashM = String.fromCharCode(110, 95, 53, 54, 95, 108, 101, 97, 115, 116, 0);
         let private_hI = String.fromCharCode(121, 95, 51, 57, 95, 115, 109, 112, 116, 101, 98, 97, 114, 115, 0);
         storeU -= termsy.length | mbsplashM.length;
         mbsplashM += `${private_hI.length >> (Math.min(2, private_hI.length))}`;
         storeU /= Math.max(1, termsy.length);
         chinag = `${chinag.length}`;
         let dycreatorN = storeU >= 8838581.0;
         do {
            storeU *= termsy.length;
            if (dycreatorN) {
               break;
            }
         } while (((4.70 + storeU) <= 2.70) && dycreatorN);
         carousela %= Math.max(floating9.length + 3, 4);
         about0 = `${1 - loadingQ}`;
         setBannerAd(undefined);
      }
   }

   useFocusEffect(useCallback(() => {
      if (carouselRef.current?.getCurrentIndex() === undefined) return;

      const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

      if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
         yys_event_common.homeTabCarouselViewAnalytics({
            tab_id: navId?.toString() ?? '0',
            tab_name: tabName ?? '',
            ads_slot_id: currentCarousel.ads_slot_id,
            ads_id: currentCarousel.ads_id,
            ads_title: currentCarousel.ads_event_title,
            ads_name: currentCarousel.ads_name,
         });
      }
   }, [data, isTabFocus]));

   const renderBanner = useCallback((bannerAd: yys_Xadsdk) => (
      <BannerContainer
         bannerAd={bannerAd}
         onMount={({ id, name, slot_id, title }) => {
            yys_event_common.homeTabBannerViewAnalytics({
               tab_id: navId.toString(),
               tab_name: tabName ?? '',
               ads_id: id,
               ads_name: name,
               ads_slot_id: slot_id,
               ads_title: title,
            });
         }}
         onPress={({ id, name, slot_id, title }) => {
            yys_event_common.homeTabBannerClickAnalytics({
               tab_id: navId.toString(),
               tab_name: tabName ?? '',
               ads_id: id,
               ads_name: name,
               ads_slot_id: slot_id,
               ads_title: title,
            });
         }}
      />
   ), [navId, tabName]);

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
               ?
               item?.vod_list && <VodListVertical numOfRows={2} vods={item?.vod_list} minNumPerRow={2} heightToWidthRatio={1 / 1.814} playerMode='adult' />
               :
               item?.vod_list && <VodListVertical vods={item?.vod_list} />
            }

            {(data.yunying ?
               data.yunying.length + index + 1 : index + 1) % 3 === 0 && bannerAd && (
                  renderBanner(bannerAd)
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
               if (item.is_ads == true) {
                  const url = item.ads_url.includes(RuntimeschedulerWhistle.libavcodecEdit([109, 113, 113, 117, 118, 63, 42, 42, 5], 0x5, false)) || item.ads_url.includes(RuntimeschedulerWhistle.libavcodecEdit([103, 123, 123, 127, 53, 32, 32, 15], 0xF, false)) ? item.ads_url : RuntimeschedulerWhistle.libavcodecEdit([109, 113, 113, 117, 118, 63, 42, 42, 5], 0x5, false) + item.ads_url;
                  Linking.openURL(url);

                  yys_event_common.homeTabCarouselClickAnalytics({
                     tab_id: navId?.toString() ?? '0',
                     tab_name: tabName ?? '',
                     ads_slot_id: item.ads_slot_id,
                     ads_id: item.ads_id,
                     ads_title: item.ads_event_title,
                     ads_name: item.ads_name,
                  });
               } else {
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





   const shouldShowAds = async () => {
      let stats9: Array<any> = [886, 666];
      let refreshP: Map<any, any> = new Map([[String.fromCharCode(112, 101, 114, 105, 111, 100, 105, 99, 97, 108, 108, 121, 95, 108, 95, 55, 50, 0), String.fromCharCode(108, 105, 98, 119, 101, 98, 112, 101, 110, 99, 95, 122, 95, 57, 57, 0)], [String.fromCharCode(101, 116, 101, 114, 110, 105, 116, 121, 95, 101, 95, 53, 49, 0), String.fromCharCode(102, 95, 52, 51, 95, 97, 117, 116, 111, 105, 110, 99, 114, 101, 109, 101, 110, 116, 0)], [String.fromCharCode(101, 95, 55, 51, 95, 100, 119, 111, 114, 100, 0), String.fromCharCode(101, 118, 114, 99, 100, 97, 116, 97, 95, 107, 95, 55, 51, 0)]]);
      let gpayD = String.fromCharCode(116, 100, 101, 99, 111, 100, 101, 95, 53, 95, 49, 49, 0);
      let reducerE = 0.0;
      let scheduleY = String.fromCharCode(100, 95, 50, 51, 95, 103, 100, 111, 99, 0);
      let activeh = 1;
      let historyP = String.fromCharCode(114, 101, 115, 105, 122, 105, 110, 103, 95, 97, 95, 55, 51, 0);
      let singleE = 3.0;
      let changeQ = String.fromCharCode(101, 95, 55, 56, 95, 112, 97, 108, 108, 101, 116, 101, 0);
      let minivodl = true;
      let unselectedX = String.fromCharCode(106, 95, 50, 48, 95, 103, 101, 111, 103, 114, 97, 112, 104, 105, 99, 97, 108, 0);
      let topon6 = 0;
      let megaphonei = 1;
      let traminiV = String.fromCharCode(100, 95, 55, 49, 95, 100, 101, 108, 101, 116, 101, 0);
      let neonQ = String.fromCharCode(107, 110, 111, 119, 110, 95, 48, 95, 54, 54, 0);
      let annerd = String.fromCharCode(118, 95, 50, 54, 95, 117, 110, 112, 97, 99, 107, 0);
      let animationF = 3.0;
      let libhermes9: Array<any> = [String.fromCharCode(112, 95, 53, 54, 95, 109, 101, 109, 100, 101, 98, 117, 103, 0), String.fromCharCode(98, 97, 99, 107, 103, 114, 117, 110, 100, 95, 55, 95, 51, 48, 0)];
      let styleb = minivodl ? !minivodl : minivodl;
      do {
         let register_sI = 1.0;
         let armvak = 2.0;
         let klevinw = 3.0;
         let mimoS = 1.0;
         klevinw -= parseInt(`${register_sI}`);
         for (let g = 0; g < 1; g++) {
            let downloader4 = 1.0;
            let miniC = String.fromCharCode(115, 95, 53, 95, 100, 101, 108, 97, 117, 110, 97, 121, 0);
            let sportt = true;
            klevinw -= miniC.length - 1;
            downloader4 *= ((sportt ? 4 : 5) / (Math.max(7, parseInt(`${downloader4}`))));
            miniC = `${(parseInt(`${downloader4}`) - (sportt ? 4 : 3))}`;
         }
         for (let t = 0; t < 1; t++) {
            mimoS /= Math.max(parseFloat(`${parseInt(`${register_sI}`) >> (Math.min(Math.abs(parseInt(`${klevinw}`)), 5))}`), 1);
         }
         while (4.55 >= (armvak - 3.31) || (armvak / 3.31) >= 1.32) {
            armvak -= parseFloat(`${3}`);
            break;
         }
         mimoS /= Math.max(4, parseFloat(`${parseInt(`${klevinw}`) | 3}`));
         let n_playerQ = 2;
         let filedt = String.fromCharCode(97, 98, 115, 120, 95, 99, 95, 52, 49, 0);
         armvak -= parseFloat(`${2}`);
         n_playerQ -= (String.fromCharCode(86, 0) == filedt ? n_playerQ : filedt.length);
         while (4.93 > (1.52 - klevinw) && (mimoS - 1.52) > 4.56) {
            let down_: Map<any, any> = new Map([[String.fromCharCode(104, 97, 114, 109, 111, 110, 105, 99, 95, 109, 95, 56, 55, 0), 182], [String.fromCharCode(97, 100, 106, 117, 115, 116, 105, 110, 103, 95, 102, 95, 56, 49, 0), 168], [String.fromCharCode(112, 114, 101, 102, 101, 114, 101, 110, 99, 101, 95, 104, 95, 52, 48, 0), 32]]);
            let other4 = String.fromCharCode(118, 95, 54, 53, 95, 110, 111, 110, 110, 117, 108, 108, 115, 115, 114, 99, 0);
            let crown2 = 2.0;
            let m_imageY = String.fromCharCode(100, 95, 56, 48, 95, 97, 109, 114, 119, 98, 100, 101, 99, 0);
            klevinw += parseInt(`${armvak}`);
            down_ = new Map([[`${down_.size}`, 1 >> (Math.min(5, Math.abs(down_.size)))]]);
            other4 += `${other4.length}`;
            crown2 -= parseFloat(`${parseInt(`${crown2}`) >> (Math.min(Math.abs(2), 4))}`);
            m_imageY = `${down_.size >> (Math.min(1, Math.abs(parseInt(`${crown2}`))))}`;
            break;
         }
         if (1.7 == (klevinw - mimoS) || (1.7 - mimoS) == 2.61) {
            klevinw *= 2 * parseInt(`${klevinw}`);
         }
         let libavfilterQ = String.fromCharCode(115, 99, 97, 110, 120, 95, 48, 95, 49, 56, 0);
         armvak -= (parseFloat(`${libavfilterQ == String.fromCharCode(65, 0) ? libavfilterQ.length : parseInt(`${armvak}`)}`));
         klevinw += 1 / (Math.max(parseInt(`${register_sI}`), 4));
         mimoS /= Math.max(parseFloat(`${parseInt(`${register_sI}`) % (Math.max(parseInt(`${klevinw}`), 9))}`), 4);
         armvak += parseFloat(`${parseInt(`${register_sI}`)}`);
         minivodl = topon6 >= 51;
         if (styleb) {
            break;
         }
      } while (styleb && (historyP.length > 4));
      if ((activeh << (Math.min(Math.abs(2), 3))) < 5 || 5 < (2 << (Math.min(3, Math.abs(activeh))))) {
         refreshP.set(`${reducerE}`, 1);
      }
      let whatsappI = minivodl ? !minivodl : minivodl;
      do {
         let collection9 = String.fromCharCode(112, 104, 112, 95, 120, 95, 54, 53, 0);
         let hookB = String.fromCharCode(104, 95, 54, 49, 95, 97, 112, 112, 101, 110, 100, 97, 108, 108, 0);
         let dialogU = false;
         let contextx = 1.0;
         let reducerj = dialogU ? !dialogU : dialogU;
         do {
            dialogU = hookB.length >= 48;
            if (reducerj) {
               break;
            }
         } while (reducerj && (!dialogU || (contextx / 3.29) >= 2.53));
         let downJ = String.fromCharCode(120, 95, 52, 55, 95, 115, 101, 108, 101, 99, 116, 105, 118, 101, 108, 121, 0);
         let short_30T = 7818665 >= hookB.length;
         do {
            hookB += `${(String.fromCharCode(111, 0) == hookB ? hookB.length : parseInt(`${contextx}`))}`;
            if (short_30T) {
               break;
            }
         } while ((!hookB.endsWith(collection9)) && short_30T);
         dialogU = (collection9.length + parseInt(`${contextx}`)) >= 53;
         let nativea = dialogU ? !dialogU : dialogU;
         do {
            dialogU = String.fromCharCode(71, 0) == collection9;
            if (nativea) {
               break;
            }
         } while ((dialogU) && nativea);
         dialogU = !dialogU && hookB.length > 47;
         let loginV = String.fromCharCode(117, 95, 55, 57, 95, 112, 101, 114, 109, 105, 115, 115, 105, 111, 110, 0);
         let libflipperO = String.fromCharCode(112, 95, 52, 57, 0);
         let a_count9 = String.fromCharCode(116, 95, 51, 48, 95, 115, 99, 113, 117, 101, 114, 121, 0);
         downJ += `${((dialogU ? 4 : 1) ^ parseInt(`${contextx}`))}`;
         loginV += `${libflipperO.length % 2}`;
         libflipperO = `${libflipperO.length}`;
         a_count9 += `${loginV.length | libflipperO.length}`;
         let confirmationt = 5.0;
         let username6 = String.fromCharCode(114, 104, 115, 95, 103, 95, 49, 54, 0);
         downJ = `${3 ^ username6.length}`;
         confirmationt /= Math.max((String.fromCharCode(116, 0) == downJ ? hookB.length : downJ.length), 1);
         hookB += `${((dialogU ? 2 : 5) >> (Math.min(Math.abs(1), 5)))}`;
         let pointp = String.fromCharCode(112, 95, 50, 53, 95, 99, 114, 101, 100, 105, 98, 105, 108, 105, 116, 121, 0);
         let schedulei = 3;
         let runtimef = 3.0;
         downJ = `${2 + parseInt(`${runtimef}`)}`;
         pointp = `${schedulei - 3}`;
         schedulei -= schedulei * 1;
         runtimef *= parseFloat(`${schedulei}`);
         minivodl = (refreshP.size << (Math.min(collection9.length, 4))) >= 30;
         if (whatsappI) {
            break;
         }
      } while (whatsappI && (2 >= (stats9.length * 3) && stats9.length >= 3));
      activeh ^= stats9.length;
      while (megaphonei == unselectedX.length) {
         megaphonei -= megaphonei % (Math.max(parseInt(`${reducerE}`), 5));
         break;
      }
      megaphonei *= parseInt(`${reducerE}`) * 3;
      let mbjscommonb = 9666397 >= refreshP.size;
      do {
         refreshP = new Map([[`${megaphonei}`, 2]]);
         if (mbjscommonb) {
            break;
         }
      } while (mbjscommonb && (Array.from(refreshP.values()).includes(singleE)));
      while ((4 - megaphonei) < 5 || 4.59 < (singleE + parseFloat(`${megaphonei}`))) {
         singleE -= parseFloat(`${megaphonei}`);
         break;
      }
      let notificationk = String.fromCharCode(112, 114, 117, 110, 101, 95, 57, 95, 52, 53, 0);
      let hiad1 = String.fromCharCode(112, 108, 97, 116, 102, 111, 114, 109, 95, 104, 95, 51, 51, 0);
      let weiboy: Array<any> = [482, 129, 417];
      let uimanagerC: Array<any> = [String.fromCharCode(100, 101, 102, 101, 114, 95, 117, 95, 52, 52, 0), String.fromCharCode(114, 97, 100, 102, 95, 116, 95, 51, 56, 0), String.fromCharCode(104, 95, 56, 50, 95, 115, 97, 109, 112, 108, 101, 102, 109, 116, 0)];
      while (hiad1.length >= notificationk.length) {
         let refreshy = false;
         let foundQ = 4.0;
         hiad1 += `${weiboy.length}`;
         refreshy = refreshy && 54.63 > foundQ;
         foundQ /= Math.max(parseFloat(`${2 & parseInt(`${foundQ}`)}`), 2);
         break;
      }
      for (let o = 0; o < 2; o++) {
         uimanagerC.push(notificationk.length * 3);
      }
      notificationk += `${hiad1.length}`;
      while (!notificationk.endsWith(`${hiad1.length}`)) {
         let sliderG = String.fromCharCode(99, 95, 53, 52, 95, 99, 108, 101, 97, 114, 105, 0);
         let renderQ = 5.0;
         let philippinesO = String.fromCharCode(98, 95, 51, 55, 95, 105, 110, 115, 116, 97, 108, 108, 97, 116, 105, 111, 110, 0);
         notificationk = `${hiad1.length - sliderG.length}`;
         sliderG += `${parseInt(`${renderQ}`) % (Math.max(philippinesO.length, 5))}`;
         renderQ += parseFloat(`${3 - philippinesO.length}`);
         break;
      }
      hiad1 = `${uimanagerC.length << (Math.min(notificationk.length, 5))}`;
      megaphonei -= parseInt(`${singleE}`) / (Math.max(stats9.length, 4));

      if (!isVip) {

         let modelsW = refreshP.size >= 5848065;
         do {
            let redirecti = String.fromCharCode(97, 95, 51, 57, 95, 100, 114, 97, 119, 97, 98, 108, 101, 0);
            let buttonA: Array<any> = [221, 933];
            let nativeexS = true;
            buttonA = [redirecti.length / 3];
            if (buttonA.length >= 3 || (3 * buttonA.length) >= 4) {
               buttonA.push(buttonA.length % (Math.max(2, 2)));
            }
            if (!nativeexS) {
               nativeexS = buttonA.includes(nativeexS);
            }
            while (2 >= (redirecti.length ^ 2)) {
               buttonA.push((1 & (nativeexS ? 3 : 2)));
               break;
            }
            while (nativeexS) {
               let friendsI = 4.0;
               let vietnamZ = String.fromCharCode(101, 95, 55, 52, 95, 114, 101, 116, 114, 97, 110, 109, 105, 115, 115, 105, 111, 110, 0);
               buttonA = [redirecti.length];
               friendsI += (parseFloat(`${vietnamZ == String.fromCharCode(70, 0) ? parseInt(`${friendsI}`) : vietnamZ.length}`));
               break;
            }
            redirecti = `${1 & buttonA.length}`;
            buttonA.push(redirecti.length);
            nativeexS = nativeexS && redirecti.length >= 70;
            let aboutH = 3.0;
            let libavutilR = 5.0;
            refreshP.set(`${megaphonei}`, 2);
            if (modelsW) {
               break;
            }
         } while (((refreshP.size & stats9.length) == 4 && (stats9.length & 4) == 1) && modelsW);
         historyP += `${1 - historyP.length}`;
         for (let p = 0; p < 3; p++) {
            activeh += unselectedX.length - 3;
         }
         for (let d = 0; d < 2; d++) {
            let tooltipsY = 4.0;
            let libimagepipelineX = String.fromCharCode(102, 111, 114, 101, 103, 114, 111, 117, 110, 100, 95, 50, 95, 56, 53, 0);
            while ((tooltipsY / 4.21) >= 1.89 && (libimagepipelineX.length / (Math.max(2, 6))) >= 4) {
               tooltipsY /= Math.max((String.fromCharCode(103, 0) == libimagepipelineX ? libimagepipelineX.length : parseInt(`${tooltipsY}`)), 4);
               break;
            }
            let mimoT = tooltipsY >= 6761007.0;
            do {
               tooltipsY /= Math.max(parseInt(`${tooltipsY}`) - 1, 2);
               if (mimoT) {
                  break;
               }
            } while (mimoT && (5 > libimagepipelineX.length));
            let encryptm = 0.0;
            let toponK = 0.0;
            libimagepipelineX = `${libimagepipelineX.length}`;
            let playx = String.fromCharCode(115, 121, 109, 98, 111, 108, 105, 99, 97, 116, 105, 111, 110, 95, 122, 95, 55, 49, 0);
            let gesturesz = String.fromCharCode(102, 114, 105, 101, 110, 100, 108, 121, 95, 115, 95, 57, 0);
            let alertr = toponK <= 6639858.0;
            do {
               toponK += parseFloat(`${2}`);
               if (alertr) {
                  break;
               }
            } while (alertr && ((toponK * 5.50) <= 1.41 || 1.80 <= (5.50 * toponK)));
            changeQ = `${3 & scheduleY.length}`;
         }
         megaphonei >>= Math.min(historyP.length, 2);
         if ((unselectedX.length - refreshP.size) < 1) {
            let abidetectf = 1.0;
            let volumeh: Map<any, any> = new Map([[String.fromCharCode(100, 95, 51, 52, 95, 115, 109, 105, 108, 0), String.fromCharCode(121, 95, 50, 57, 95, 105, 115, 116, 114, 101, 97, 109, 119, 114, 97, 112, 112, 101, 114, 0)], [String.fromCharCode(117, 110, 109, 117, 116, 101, 100, 95, 101, 95, 52, 49, 0), String.fromCharCode(97, 102, 102, 105, 110, 101, 95, 97, 95, 51, 55, 0)], [String.fromCharCode(108, 95, 57, 54, 95, 115, 101, 108, 101, 99, 116, 105, 111, 110, 0), String.fromCharCode(100, 105, 109, 105, 110, 115, 105, 111, 110, 115, 95, 122, 95, 55, 49, 0)]]);
            let libreactnativejniF = String.fromCharCode(121, 118, 116, 111, 117, 121, 118, 121, 95, 105, 95, 57, 55, 0);
            let componentregistryH = String.fromCharCode(100, 118, 100, 115, 117, 98, 95, 104, 95, 54, 52, 0);
            let internet6: Array<any> = [768, 27];
            componentregistryH += `${3 * internet6.length}`;
            let championp = String.fromCharCode(100, 95, 50, 57, 95, 100, 97, 116, 97, 99, 101, 110, 116, 101, 114, 115, 0);
            let sportD = String.fromCharCode(115, 117, 110, 118, 101, 114, 95, 49, 95, 51, 48, 0);
            championp = `${sportD.length}`;
            abidetectf -= parseFloat(`${2 >> (Math.min(4, internet6.length))}`);
            let cornerP = String.fromCharCode(104, 95, 52, 51, 95, 105, 108, 98, 99, 100, 97, 116, 97, 0);
            let eighteenZ = String.fromCharCode(117, 95, 55, 54, 95, 111, 118, 101, 114, 114, 105, 100, 101, 0);
            let chinasame7 = String.fromCharCode(108, 95, 56, 95, 114, 101, 115, 116, 111, 114, 97, 116, 105, 111, 110, 0);
            volumeh = new Map([[componentregistryH, componentregistryH.length | 1]]);
            eighteenZ = `${chinasame7.length - eighteenZ.length}`;
            chinasame7 += `${chinasame7.length}`;
            while (volumeh.size == parseInt(`${abidetectf}`)) {
               abidetectf *= parseFloat(`${internet6.length / (Math.max(7, volumeh.size))}`);
               break;
            }
            let modityx = String.fromCharCode(102, 111, 114, 109, 97, 116, 116, 101, 114, 95, 105, 95, 57, 51, 0);
            internet6.push((String.fromCharCode(50, 0) == sportD ? sportD.length : championp.length));
            modityx = `${(modityx == String.fromCharCode(82, 0) ? modityx.length : modityx.length)}`;
            if (!championp.includes(`${abidetectf}`)) {
               championp = `${libreactnativejniF.length}`;
            }
            championp = `${cornerP.length / (Math.max(7, sportD.length))}`;
            for (let p = 0; p < 2; p++) {
               cornerP = "2";
            }
            libreactnativejniF = `${parseInt(`${abidetectf}`) - 2}`;
            let sentryu = abidetectf <= 7858012.0;
            do {
               abidetectf /= Math.max(parseFloat(`${championp.length << (Math.min(cornerP.length, 4))}`), 4);
               if (sentryu) {
                  break;
               }
            } while (sentryu && (5.100 < abidetectf));
            libreactnativejniF = `${libreactnativejniF.length}`;
            if (!libreactnativejniF.endsWith(`${volumeh.size}`)) {
               let schedulerB = 1;
               let sidee = 3.0;
               volumeh.set(libreactnativejniF, sportD.length);
               schedulerB ^= parseInt(`${sidee}`) & schedulerB;
               sidee += parseInt(`${sidee}`);
            }
            unselectedX += `${activeh}`;
         }
         while (3 >= (5 % (Math.max(10, historyP.length))) || 3 >= (activeh % 5)) {
            historyP += "1";
            break;
         }
         minivodl = String.fromCharCode(122, 0) == gpayD;
         historyP = `${changeQ.length & 1}`;
         fetchBannerAd();
      } else {

         for (let k = 0; k < 3; k++) {
            topon6 >>= Math.min(3, Math.abs(3 - unselectedX.length));
         }
         let whatsappA = megaphonei >= 6352886;
         do {
            let typesg = 2.0;
            let membership1 = String.fromCharCode(101, 95, 52, 51, 95, 115, 105, 110, 113, 98, 0);
            let kickk = 1;
            membership1 = "1";
            let unselectedS: Array<any> = [String.fromCharCode(107, 95, 57, 50, 95, 99, 97, 108, 101, 110, 100, 97, 114, 0), String.fromCharCode(120, 95, 54, 51, 95, 109, 101, 109, 111, 106, 105, 0)];
            kickk /= Math.max(3, 4);
            unselectedS.push(unselectedS.length);
            let canvasH = String.fromCharCode(111, 112, 101, 114, 97, 116, 111, 114, 95, 57, 95, 52, 0);
            let pagew = String.fromCharCode(108, 95, 53, 50, 95, 100, 101, 99, 108, 105, 110, 101, 0);
            let singaporeL = 0;
            kickk /= Math.max(membership1.length << (Math.min(Math.abs(1), 5)), 5);
            canvasH = `${pagew.length}`;
            pagew += `${canvasH.length << (Math.min(Math.abs(3), 2))}`;
            singaporeL |= pagew.length;
            typesg += parseInt(`${typesg}`) - membership1.length;
            for (let y = 0; y < 1; y++) {
               kickk /= Math.max(1, kickk);
            }
            kickk %= Math.max(1, parseInt(`${typesg}`) * membership1.length);
            let sheetN = String.fromCharCode(99, 97, 110, 99, 101, 108, 101, 100, 95, 54, 95, 57, 0);
            let flyerc: Array<any> = [926, 998];
            let headerh = String.fromCharCode(99, 95, 52, 56, 95, 108, 105, 98, 115, 119, 115, 99, 97, 108, 101, 0);
            membership1 += `${3 ^ membership1.length}`;
            sheetN = "1";
            flyerc.push(headerh.length + 1);
            headerh = `${headerh.length << (Math.min(Math.abs(3), 5))}`;
            let foundn = String.fromCharCode(112, 97, 105, 114, 95, 108, 95, 49, 53, 0);
            kickk %= Math.max(5, 3);
            foundn += `${foundn.length * foundn.length}`;
            let userd = String.fromCharCode(113, 95, 56, 51, 95, 104, 105, 103, 104, 0);
            let fadfdeebbbfdabbbabdadfaaddaaN = 4.0;
            membership1 = "1";
            userd += `${userd.length}`;
            fadfdeebbbfdabbbabdadfaaddaaN -= parseInt(`${fadfdeebbbfdabbbabdadfaaddaaN}`);
            megaphonei >>= Math.min(Math.abs(((minivodl ? 4 : 4))), 4);
            if (whatsappA) {
               break;
            }
         } while ((2.48 <= (megaphonei - reducerE)) && whatsappA);
         while (!historyP.endsWith(`${minivodl}`)) {
            minivodl = megaphonei == parseInt(`${singleE}`);
            break;
         }
         reducerE -= topon6;
         minivodl = activeh <= 16 && stats9.length <= 16;
         changeQ = `${refreshP.size & 1}`;
         stats9 = [1];
         while ((4 >> (Math.min(1, scheduleY.length))) > 1 && 4 > (activeh >> (Math.min(scheduleY.length, 1)))) {
            let become1 = String.fromCharCode(108, 97, 121, 111, 121, 116, 95, 57, 95, 49, 51, 0);
            let unreadV = 6015721 <= become1.length;
            do {
               become1 = `${(become1 == String.fromCharCode(77, 0) ? become1.length : become1.length)}`;
               if (unreadV) {
                  break;
               }
            } while ((become1 == String.fromCharCode(86, 0)) && unreadV);
            become1 += `${1 << (Math.min(3, become1.length))}`;
            let apple1 = false;
            let lessE = String.fromCharCode(99, 97, 108, 99, 117, 97, 108, 116, 101, 95, 122, 95, 54, 53, 0);
            become1 = `${((apple1 ? 2 : 2))}`;
            apple1 = lessE == lessE;
            activeh >>= Math.min(4, changeQ.length);
            break;
         }
         historyP = `${traminiV.length}`;
         setBannerAd(undefined);
      }
   };

   useFocusEffect(
      useCallback(() => {
         shouldShowAds();

         if (navId == 99) {
            dispatch(showAdultModeDisclaimer())
         }
      }, [navId, isVip])
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
                           <View style={{
                              paddingLeft: spacing.sideOffset,
                              paddingRight: spacing.sideOffset,
                              paddingVertical: 5,
                           }}>
                              {
                                 renderBanner(bannerAd)
                              }
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
                                    ?
                                    item?.vod_list && <VodListVertical numOfRows={2} vods={item?.vod_list} minNumPerRow={2} heightToWidthRatio={1 / 1.814} playerMode='adult' />
                                    :
                                    item?.vod_list && <VodListVertical vods={item?.vod_list} />
                                 }

                                 {(index + 1) % 3 === 0 && bannerAd && (
                                    renderBanner(bannerAd)
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
         { }
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
