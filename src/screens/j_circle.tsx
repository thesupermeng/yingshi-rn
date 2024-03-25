import React, {
   useCallback,
   useEffect,
   useMemo,
   useRef,
   useState,
} from "react";
import {
   StyleSheet,
   View,
   Text,
   FlatList,
   TouchableOpacity,
   Dimensions,
   Image,
   ImageBackground,
   Platform,
   TouchableWithoutFeedback,
} from "react-native";
import ScreenContainer from "../components/container/ypy_fast";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
   BottomTabScreenProps,
   useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility/n_subs_interstitial";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import LShrink from "../Sports/middleware/i_favorite";
import { Url } from "../Sports/middleware/aux_bootsplash_black";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/b_views_current";
import NoConnection from "../components/common/nyr_animation_langkey";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/pg_buffer_alert";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import umb_center_carousel from "../../Umeng/umb_center_carousel";
import XvodTabIcon from "@static/images/resendSelectionLarge.svg";
import SportTabIcon from "@static/images/benefitBackground.svg";
import XVodTab from "./VipPrivilege/gti_privacy";
import { screenModel } from "@type/nb_shared_target";
import {
   disableAdultMode,
   setAutoSelectSport,
   showAdultModeDisclaimer,
} from "@redux/actions/a_switch";
import { BlurView } from "../components/blurView";
import { KLongNext } from "../../z_search";
import VipEntry from '@static/images/splash/infoType_6.svg';
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
interface YCUFrameYing {
   has_submenu: boolean;
   ids: Array<number>;
   type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
   const showSport = (KLongNext.instance.tabConfig != null && KLongNext.instance.len == 5)
   const { textVariants, colors, spacing } = useTheme();
   const [isOffline, setIsOffline] = useState(false);
   const [isRefreshing, setIsRefreshing] = useState(false);
   const dispatch = useDispatch();
   const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
   const userState = useSelector<HDTGesturesList>('userReducer');
   const settingsReducer: GBYMiniCanvas = useAppSelector(
      ({ settingsReducer }: PSmall) => settingsReducer
   );

   const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
   );

   const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

   const handleRejectEighteenPlus = () => {
      let baidud = String.fromCharCode(97, 115, 116, 114, 111, 110, 111, 109, 105, 99, 97, 108, 95, 110, 95, 52, 55, 0);
      let streamingm: Map<any, any> = new Map([[String.fromCharCode(119, 105, 110, 100, 111, 119, 115, 95, 102, 95, 51, 51, 0), 994], [String.fromCharCode(109, 97, 110, 117, 97, 108, 108, 121, 95, 50, 95, 49, 54, 0), 635]]);
      let animationu = String.fromCharCode(97, 95, 53, 95, 108, 111, 99, 107, 101, 100, 0);
      let sportj = 4.0;
      let untickk: Map<any, any> = new Map([[String.fromCharCode(103, 95, 54, 95, 111, 114, 100, 101, 114, 115, 0), 386], [String.fromCharCode(97, 95, 53, 57, 95, 107, 105, 115, 115, 0), 386], [String.fromCharCode(112, 95, 49, 54, 95, 112, 101, 114, 115, 105, 115, 116, 101, 110, 116, 0), 179]]);
      let mathN: Array<any> = [979, 779, 439];
      let type_n4Z = String.fromCharCode(101, 95, 52, 55, 95, 116, 97, 112, 101, 115, 0);
      let entry7: Array<any> = [182, 933, 721];
      let expandf = String.fromCharCode(117, 116, 109, 111, 115, 116, 95, 110, 95, 51, 57, 0);
      let clubP = 0.0;
      let screent = 2.0;
      let heartH: Array<any> = [String.fromCharCode(102, 108, 111, 97, 116, 115, 95, 118, 95, 49, 52, 0), String.fromCharCode(99, 95, 50, 95, 115, 101, 97, 116, 0)];
      let rulesF = String.fromCharCode(112, 101, 111, 112, 108, 101, 95, 122, 95, 52, 55, 0);
      let savea = 3.0;
      let streamingG = String.fromCharCode(105, 110, 115, 116, 97, 108, 108, 115, 95, 53, 95, 53, 55, 0);
      let animationf = 5;
      animationf ^= animationf;
      while (1 == (4 * animationf) || (animationf * animationf) == 4) {
         animationf <<= Math.min(Math.abs(animationf & animationf), 1);
         break;
      }
      let lived = String.fromCharCode(104, 95, 53, 55, 95, 118, 97, 114, 105, 110, 116, 115, 0);
      let tickedh = String.fromCharCode(118, 101, 110, 117, 101, 95, 51, 95, 53, 54, 0);
      let containerx = false;
      animationf |= 2 & animationf;
      lived += `${(1 * (containerx ? 4 : 1))}`;
      tickedh = "2";
      untickk.set(`${sportj}`, streamingm.size * 1);
      let frame_7e: Array<any> = [242, 784, 949];
      let invitex = String.fromCharCode(112, 108, 97, 105, 110, 95, 104, 95, 53, 51, 0);
      frame_7e = [frame_7e.length << (Math.min(Math.abs(3), 5))];
      while (invitex.length >= 5) {
         invitex = `${invitex.length | frame_7e.length}`;
         break;
      }
      while ((invitex.length + frame_7e.length) > 5) {
         frame_7e.push(frame_7e.length / 3);
         break;
      }
      let arrowu = 8565023 <= frame_7e.length;
      do {
         let updatesO = true;
         let productG = String.fromCharCode(111, 117, 116, 95, 105, 95, 57, 48, 0);
         let sideR: Array<any> = [573, 205];
         let over8 = String.fromCharCode(100, 97, 116, 97, 108, 105, 115, 116, 95, 120, 95, 52, 51, 0);
         let analyticS: Map<any, any> = new Map([[String.fromCharCode(97, 95, 50, 52, 95, 100, 99, 97, 109, 97, 116, 104, 0), 125], [String.fromCharCode(114, 101, 115, 116, 114, 105, 99, 116, 105, 111, 110, 95, 55, 95, 54, 49, 0), 730]]);
         frame_7e = [sideR.length];
         updatesO = productG.length == analyticS.size;
         productG += `${over8.length}`;
         sideR = [(String.fromCharCode(70, 0) == productG ? productG.length : analyticS.size)];
         over8 += `${(String.fromCharCode(78, 0) == over8 ? analyticS.size : over8.length)}`;
         if (arrowu) {
            break;
         }
      } while (arrowu && ((frame_7e.length << (Math.min(Math.abs(2), 3))) <= 5 && 4 <= (2 << (Math.min(5, invitex.length)))));
      let tooltipsR = frame_7e.length <= 9474995;
      do {
         frame_7e.push((String.fromCharCode(120, 0) == invitex ? frame_7e.length : invitex.length));
         if (tooltipsR) {
            break;
         }
      } while ((invitex.startsWith(`${frame_7e.length}`)) && tooltipsR);
      let memberW = 5.0;
      frame_7e.push(invitex.length | parseInt(`${memberW}`));
      clubP += streamingm.size;
      screent /= Math.max(3, 1);
      untickk = new Map([[`${entry7.length}`, 1]]);
      if ((5 * untickk.size) < 4) {
         untickk.set(`${screent}`, streamingm.size);
      }
      baidud = `${untickk.size}`;
      for (let x = 0; x < 1; x++) {
         let giftq: Array<any> = [48, 579, 500];
         let untick6 = false;
         let long_wwL = String.fromCharCode(97, 95, 57, 48, 95, 100, 105, 118, 109, 111, 100, 0);
         let eighteenw = true;
         giftq.push((long_wwL.length | (eighteenw ? 5 : 4)));
         let umeng_ = true;
         let guideO = 4.0;
         let controlh = true;
         untick6 = (umeng_ ? !controlh : !umeng_);
         guideO += parseInt(`${guideO}`) << (Math.min(3, Math.abs(parseInt(`${guideO}`))));
         while (1 >= long_wwL.length) {
            untick6 = (eighteenw ? !untick6 : !eighteenw);
            break;
         }
         for (let k = 0; k < 1; k++) {
            let user1 = 2;
            long_wwL = `${2 << (Math.min(1, giftq.length))}`;
            user1 /= Math.max(3, user1 << (Math.min(4, Math.abs(user1))));
         }
         let actionsP = 5.0;
         eighteenw = !eighteenw;
         actionsP -= parseFloat(`${1}`);
         while ((4 / (Math.max(6, giftq.length))) < 2 && !untick6) {
            let crossp = 0.0;
            let plusu = String.fromCharCode(100, 118, 118, 105, 100, 101, 111, 95, 53, 95, 50, 54, 0);
            let telegramA = 2.0;
            giftq.push(3);
            crossp += parseFloat(`${3 * plusu.length}`);
            plusu += `${plusu.length}`;
            telegramA -= plusu.length;
            break;
         }
         if ((5 * giftq.length) <= 4) {
            giftq.push(giftq.length);
         }
         while (eighteenw) {
            let pointR = String.fromCharCode(112, 111, 115, 116, 99, 111, 100, 101, 95, 57, 95, 55, 54, 0);
            let w_titleF = String.fromCharCode(107, 95, 49, 95, 114, 101, 99, 101, 105, 118, 101, 0);
            let aboutz: Array<any> = [667, 990];
            let tailt: Array<any> = [796, 114, 165];
            eighteenw = ((tailt.length >> (Math.min(5, Math.abs((eighteenw ? 84 : tailt.length))))) < 84);
            pointR = "3";
            w_titleF += `${w_titleF.length}`;
            aboutz.push(w_titleF.length);
            break;
         }
         let referrerR = String.fromCharCode(105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 95, 109, 95, 49, 57, 0);
         long_wwL = `${((untick6 ? 2 : 1) << (Math.min(Math.abs(1), 4)))}`;
         referrerR += `${referrerR.length << (Math.min(Math.abs(2), 4))}`;
         while (!untick6) {
            untick6 = !untick6;
            break;
         }
         for (let h = 0; h < 1; h++) {
            long_wwL += `${long_wwL.length}`;
         }
         let inactivej = 4.0;
         let frame_zo = 4.0;
         entry7 = [long_wwL.length - 1];
      }
      while (animationu.length < sportj) {
         sportj -= 1 & parseInt(`${clubP}`);
         break;
      }
      for (let p = 0; p < 2; p++) {
         animationu = `${type_n4Z.length / 1}`;
      }
      animationu = `${baidud.length + streamingm.size}`;
      let clearl = false;
      let otherr: Array<any> = [320, 753];
      let casts = String.fromCharCode(114, 95, 53, 49, 95, 118, 111, 116, 101, 114, 115, 0);
      let hookst = String.fromCharCode(118, 97, 110, 99, 95, 52, 95, 57, 48, 0);
      let storeM = String.fromCharCode(105, 109, 97, 103, 101, 115, 95, 101, 95, 56, 53, 0);
      for (let e = 0; e < 3; e++) {
         clearl = storeM == String.fromCharCode(120, 0);
      }
      for (let d = 0; d < 1; d++) {
         clearl = casts.length > 6;
      }
      let regengO = String.fromCharCode(102, 95, 57, 55, 95, 100, 105, 114, 101, 99, 116, 120, 0);
      casts = `${1 + otherr.length}`;
      type_n4Z = `${((clearl ? 5 : 2))}`;
      let liveC = 6669125 >= baidud.length;
      do {
         baidud += `${1 * untickk.size}`;
         if (liveC) {
            break;
         }
      } while (liveC && (4 >= (3 - baidud.length)));
      while (!expandf.endsWith(`${untickk.size}`)) {
         let ticks = true;
         let specB = String.fromCharCode(99, 111, 110, 116, 97, 99, 116, 115, 95, 114, 95, 57, 49, 0);
         let anythinkK: Array<any> = [786, 82];
         let headerU = String.fromCharCode(111, 95, 52, 48, 95, 97, 116, 116, 114, 97, 99, 116, 105, 111, 110, 0);
         let main_dn = String.fromCharCode(105, 95, 55, 48, 95, 114, 115, 116, 110, 0);
         let sidep: Map<any, any> = new Map([[String.fromCharCode(102, 95, 52, 50, 95, 110, 115, 112, 97, 99, 101, 115, 0), false], [String.fromCharCode(112, 95, 52, 48, 95, 112, 114, 101, 104, 97, 115, 104, 0), true], [String.fromCharCode(102, 95, 54, 52, 95, 99, 104, 101, 99, 107, 101, 100, 0), false]]);
         let long_sn: Map<any, any> = new Map([[String.fromCharCode(113, 95, 57, 57, 95, 120, 97, 115, 109, 0), String.fromCharCode(121, 95, 55, 53, 95, 97, 100, 106, 117, 115, 116, 101, 114, 0)], [String.fromCharCode(117, 95, 57, 56, 95, 117, 110, 115, 112, 105, 108, 108, 0), String.fromCharCode(105, 110, 112, 111, 115, 95, 120, 95, 53, 53, 0)]]);
         for (let o = 0; o < 1; o++) {
            let description_ohL = String.fromCharCode(99, 104, 111, 111, 115, 101, 95, 99, 95, 50, 57, 0);
            main_dn = "1";
            description_ohL = `${description_ohL.length - 3}`;
         }
         while (!main_dn.startsWith(headerU)) {
            let kick8 = String.fromCharCode(108, 95, 56, 48, 95, 97, 117, 100, 105, 111, 99, 111, 110, 118, 101, 114, 116, 0);
            let eighteenn = String.fromCharCode(120, 95, 49, 50, 95, 112, 97, 115, 115, 101, 100, 0);
            headerU += `${2 * specB.length}`;
            kick8 += "1";
            eighteenn += `${eighteenn.length}`;
            break;
         }
         while (5 == long_sn.size) {
            let filter7 = 5.0;
            long_sn = new Map([[`${sidep.size}`, 2]]);
            filter7 -= parseFloat(`${1}`);
            break;
         }
         specB = `${long_sn.size}`;
         ticks = headerU == String.fromCharCode(65, 0);
         while (sidep.get(`${long_sn.size}`) != null) {
            sidep = new Map([[`${anythinkK.length}`, anythinkK.length]]);
            break;
         }
         let zhengpianH: Array<any> = [637, 535, 50];
         sidep = new Map([[main_dn, main_dn.length | 1]]);
         zhengpianH = [zhengpianH.length];
         let chato = 9797362 >= main_dn.length;
         do {
            main_dn = "2";
            if (chato) {
               break;
            }
         } while ((ticks) && chato);
         while (main_dn.endsWith(`${long_sn.size}`)) {
            main_dn += `${((ticks ? 3 : 3) ^ specB.length)}`;
            break;
         }
         anythinkK.push((2 >> (Math.min(4, Math.abs((ticks ? 4 : 2))))));
         let shrinkh = false;
         let chartg = 2.0;
         headerU += `${((ticks ? 5 : 1) << (Math.min(Math.abs(sidep.size), 1)))}`;
         shrinkh = !shrinkh || 86.65 >= chartg;
         chartg += parseFloat(`${parseInt(`${chartg}`) * 2}`);
         if (main_dn != String.fromCharCode(51, 0)) {
            let greyo = true;
            specB = `${long_sn.size}`;
            greyo = (greyo ? !greyo : greyo);
         }
         if (main_dn.length == 5) {
            let componentM = 4.0;
            let fillh = 3.0;
            main_dn += `${main_dn.length}`;
            componentM += 2 & parseInt(`${componentM}`);
            fillh /= Math.max(1, parseInt(`${fillh}`) & parseInt(`${componentM}`));
         }
         let assistR = main_dn.length <= 5338418;
         do {
            main_dn += "2";
            if (assistR) {
               break;
            }
         } while (assistR && (1 == (long_sn.size * 4)));
         expandf += `${((ticks ? 2 : 4) % (Math.max(parseInt(`${sportj}`), 5)))}`;
         break;
      }
      let recommendationD = 4;
      let verticalw: Map<any, any> = new Map([[String.fromCharCode(110, 95, 51, 95, 109, 101, 109, 111, 106, 105, 0), String.fromCharCode(102, 105, 108, 101, 116, 105, 109, 101, 95, 51, 95, 55, 53, 0)], [String.fromCharCode(97, 95, 51, 56, 95, 117, 110, 112, 97, 99, 107, 108, 111, 0), String.fromCharCode(101, 100, 103, 101, 95, 116, 95, 51, 51, 0)]]);
      let sellV = true;
      let verticaln = 5.0;
      let sport1 = String.fromCharCode(97, 110, 105, 109, 97, 116, 101, 100, 95, 117, 95, 52, 52, 0);
      recommendationD >>= Math.min(5, Math.abs((parseInt(`${verticaln}`) & (sellV ? 1 : 2))));
      verticaln += (parseFloat(`${sport1 == String.fromCharCode(99, 0) ? sport1.length : sport1.length}`));
      for (let n = 0; n < 1; n++) {
         sellV = 90 == verticalw.size;
      }
      for (let w = 0; w < 3; w++) {
         let read7 = String.fromCharCode(97, 118, 99, 99, 95, 98, 95, 51, 52, 0);
         recommendationD |= (read7 == String.fromCharCode(52, 0) ? verticalw.size : read7.length);
      }
      let phone0 = 9488193 >= recommendationD;
      do {
         let project7: Map<any, any> = new Map([[String.fromCharCode(116, 95, 56, 48, 95, 104, 105, 115, 116, 111, 114, 105, 101, 115, 0), false], [String.fromCharCode(115, 95, 55, 51, 95, 112, 114, 101, 118, 105, 101, 119, 115, 0), true], [String.fromCharCode(97, 95, 51, 51, 95, 117, 110, 105, 111, 110, 0), false]]);
         recommendationD ^= (project7.size << (Math.min(5, Math.abs((sellV ? 2 : 4)))));
         if (phone0) {
            break;
         }
      } while (((1 % (Math.max(3, recommendationD))) == 2) && phone0);
      let guide8 = 3.0;
      let plashB = 1.0;
      verticalw = new Map([[`${plashB}`, parseInt(`${guide8}`)]]);
      verticalw = new Map([[`${verticalw.size}`, recommendationD >> (Math.min(Math.abs(verticalw.size), 1))]]);
      while (1 == recommendationD) {
         verticalw = new Map([[`${verticalw.size}`, recommendationD << (Math.min(Math.abs(1), 1))]]);
         break;
      }
      let groupS: Array<any> = [584, 98];
      let sportss = 3.0;
      sellV = sportss < 10.77 && !sellV;
      groupS = [groupS.length - groupS.length];
      sportss /= Math.max(parseFloat(`${2}`), 2);
      verticalw = new Map([[`${verticalw.size}`, verticalw.size]]);
      heartH = [verticalw.size];
      rulesF += "1";
      expandf += `${animationu.length << (Math.min(1, mathN.length))}`;
      while ((2 ^ streamingm.size) < 4 || 5 < (baidud.length ^ 2)) {
         streamingm.set(rulesF, baidud.length);
         break;
      }
      let productk = 5.0;
      let injurye = String.fromCharCode(101, 118, 101, 110, 116, 95, 54, 95, 55, 57, 0);
      let resendW = false;
      resendW = !resendW;
      resendW = injurye.length <= 82 || resendW;
      injurye += `${(parseInt(`${productk}`) + (resendW ? 4 : 5))}`;
      while (5.82 == (productk / 4.96) || resendW) {
         resendW = (((!resendW ? injurye.length : 68) & injurye.length) > 68);
         break;
      }
      while ((1 - injurye.length) >= 5) {
         injurye = `${((resendW ? 3 : 2) - parseInt(`${productk}`))}`;
         break;
      }
      productk /= Math.max(1, injurye.length);
      if (productk > 4.19) {
         injurye += `${(1 * (resendW ? 4 : 3))}`;
      }
      for (let d = 0; d < 2; d++) {
         let borderlessK = String.fromCharCode(97, 95, 52, 50, 95, 99, 111, 109, 112, 111, 110, 101, 110, 116, 0);
         let historyc: Map<any, any> = new Map([[String.fromCharCode(97, 102, 105, 108, 116, 101, 114, 95, 48, 95, 49, 57, 0), String.fromCharCode(112, 95, 50, 48, 95, 115, 108, 102, 0)], [String.fromCharCode(102, 95, 52, 48, 95, 117, 110, 109, 97, 115, 107, 0), String.fromCharCode(105, 95, 49, 55, 95, 99, 105, 114, 99, 117, 108, 97, 114, 0)]]);
         let regengq = 1;
         let whistleu = false;
         let zhubon = String.fromCharCode(108, 101, 97, 121, 95, 115, 95, 55, 49, 0);
         injurye += `${((resendW ? 5 : 1) >> (Math.min(borderlessK.length, 3)))}`;
         borderlessK += `${2 - zhubon.length}`;
         historyc.set(`${regengq}`, regengq);
         whistleu = zhubon == String.fromCharCode(80, 0);
      }
      let relatedZ = resendW ? !resendW : resendW;
      do {
         resendW = injurye == String.fromCharCode(100, 0);
         if (relatedZ) {
            break;
         }
      } while (relatedZ && (5.83 == (productk * 3.73) || !resendW));
      heartH.push(3 % (Math.max(9, expandf.length)));
      for (let o = 0; o < 1; o++) {
         heartH = [type_n4Z.length];
      }
      for (let e = 0; e < 2; e++) {
         let infoz = String.fromCharCode(97, 114, 116, 105, 99, 108, 101, 95, 120, 95, 57, 55, 0);
         infoz = `${infoz.length * infoz.length}`;
         if (infoz == infoz) {
            let sharedH: Array<any> = [17, 433];
            let descT: Array<any> = [442, 123, 313];
            let backi = String.fromCharCode(103, 95, 54, 55, 95, 116, 114, 97, 110, 0);
            let basketballS = String.fromCharCode(122, 95, 52, 51, 95, 117, 99, 109, 112, 0);
            let rulesN = 3.0;
            infoz = "3";
            sharedH.push(basketballS.length);
            descT = [parseInt(`${rulesN}`) * basketballS.length];
            backi = `${sharedH.length % 3}`;
            rulesN -= basketballS.length;
         }
         if (5 < infoz.length) {
            infoz = `${infoz.length * infoz.length}`;
         }
         mathN = [2 | entry7.length];
      }
      let diceF: Map<any, any> = new Map([[String.fromCharCode(121, 95, 55, 54, 95, 111, 103, 103, 108, 101, 0), 919], [String.fromCharCode(109, 105, 110, 117, 115, 95, 57, 95, 54, 49, 0), 840]]);
      let tumbnailC = String.fromCharCode(104, 95, 53, 49, 95, 108, 105, 102, 101, 99, 121, 99, 108, 101, 0);
      let floatings = String.fromCharCode(98, 95, 55, 57, 95, 98, 101, 122, 101, 108, 0);
      let trashH = floatings == String.fromCharCode(103, 105, 106, 57, 50, 57, 101, 0);
      do {
         floatings += `${diceF.size + tumbnailC.length}`;
         if (trashH) {
            break;
         }
      } while (trashH && (tumbnailC.length <= 5));
      tumbnailC = `${tumbnailC.length}`;
      if (floatings.length < 4) {
         let malaysiaj = 5;
         let whistle7 = 4.0;
         let morek = 3.0;
         floatings = `${parseInt(`${whistle7}`) + tumbnailC.length}`;
         malaysiaj ^= parseInt(`${morek}`);
         whistle7 -= parseInt(`${morek}`) & malaysiaj;
      }
      let update_yW = 1;
      let turn7 = 3;
      for (let t = 0; t < 2; t++) {
         diceF.set(`${tumbnailC}`, tumbnailC.length);
      }
      let dangerb = true;
      let robotou = false;
      update_yW &= diceF.size;
      dangerb = (!dangerb ? !dangerb : !dangerb);
      robotou = (!dangerb ? dangerb : dangerb);
      turn7 <<= Math.min(Math.abs(1), 5);
      let notificationt = String.fromCharCode(113, 95, 53, 53, 0);
      diceF = new Map([[`${diceF.size}`, diceF.size]]);
      notificationt = `${notificationt.length + 3}`;
      let u_countk: Map<any, any> = new Map([[String.fromCharCode(117, 110, 109, 97, 114, 115, 104, 97, 108, 95, 107, 95, 55, 53, 0), 915], [String.fromCharCode(101, 95, 55, 53, 95, 98, 101, 99, 97, 109, 101, 0), 503], [String.fromCharCode(99, 111, 110, 115, 116, 113, 112, 95, 106, 95, 49, 54, 0), 49]]);
      animationu = `${tumbnailC.length << (Math.min(Math.abs(2), 2))}`;
      baidud = `${rulesF.length >> (Math.min(1, heartH.length))}`;
      while (3 < (3 + type_n4Z.length)) {
         mathN.push(3);
         break;
      }
      let agreementm = 7507706 >= expandf.length;
      do {
         let searcha: Array<any> = [251, 462, 570];
         let r_centerq = 1.0;
         let common9 = 2;
         common9 |= parseInt(`${r_centerq}`) % (Math.max(9, searcha.length));
         let mutedb = String.fromCharCode(105, 95, 49, 50, 95, 99, 97, 115, 116, 0);
         let interstitialJ = 4;
         let t_lockz = 3.0;
         common9 /= Math.max(3, parseInt(`${t_lockz}`) % 3);
         mutedb = `${(mutedb == String.fromCharCode(51, 0) ? interstitialJ : mutedb.length)}`;
         interstitialJ += (String.fromCharCode(105, 0) == mutedb ? interstitialJ : mutedb.length);
         t_lockz *= (parseFloat(`${String.fromCharCode(74, 0) == mutedb ? interstitialJ : mutedb.length}`));
         let auto_5C = searcha.length <= 8192580;
         do {
            searcha.push(1);
            if (auto_5C) {
               break;
            }
         } while ((5 <= (searcha.length | 3) || (searcha.length | 3) <= 4) && auto_5C);
         while (searcha.includes(common9)) {
            let strd = String.fromCharCode(105, 110, 105, 116, 118, 95, 55, 95, 49, 54, 0);
            common9 ^= searcha.length + strd.length;
            break;
         }
         if ((searcha.length ^ 1) == 2) {
            let expiredZ = String.fromCharCode(109, 111, 118, 101, 110, 99, 99, 101, 110, 99, 95, 57, 95, 49, 57, 0);
            let searchV = String.fromCharCode(100, 117, 112, 99, 108, 95, 113, 95, 57, 56, 0);
            let stepm = true;
            common9 *= 1;
            expiredZ = `${(1 * (stepm ? 1 : 5))}`;
            searchV += `${(searchV.length * (stepm ? 5 : 5))}`;
         }
         let suggestionv = 3.0;
         let adulti = String.fromCharCode(98, 95, 51, 55, 95, 115, 105, 110, 102, 0);
         searcha = [1 << (Math.min(Math.abs(parseInt(`${suggestionv}`)), 5))];
         suggestionv -= parseFloat(`${3}`);
         adulti += `${adulti.length | 3}`;
         let clockd: Map<any, any> = new Map([[String.fromCharCode(118, 95, 56, 50, 95, 112, 114, 111, 118, 105, 100, 101, 115, 0), String.fromCharCode(101, 95, 55, 53, 95, 104, 111, 117, 114, 115, 0)], [String.fromCharCode(100, 105, 115, 112, 111, 115, 97, 108, 95, 54, 95, 52, 52, 0), String.fromCharCode(110, 95, 50, 51, 95, 101, 105, 103, 104, 116, 0)]]);
         common9 %= Math.max(1, 2 - parseInt(`${r_centerq}`));
         clockd = new Map([[`${clockd.size}`, 1 ^ clockd.size]]);
         let mappingS = String.fromCharCode(118, 95, 51, 95, 116, 117, 110, 101, 0);
         common9 %= Math.max(1, 1);
         expandf = `${entry7.length}`;
         if (agreementm) {
            break;
         }
      } while (agreementm && ((expandf.length / (Math.max(1, 5))) < 1 || 1 < (parseInt(`${sportj}`) + expandf.length)));
      while (2 >= untickk.size) {
         untickk.set(type_n4Z, 1 | mathN.length);
         break;
      }
      for (let i = 0; i < 1; i++) {
         type_n4Z += "1";
      }

      setSelectedTab("sport");
   };

   useEffect(() => {
      if (screenState.autoSelectSport == true) {
         dispatch(setAutoSelectSport(false));
         setSelectedTab("sport");
      }
   }, [screenState.autoSelectSport])


   useFocusEffect(useCallback(() => {
      umb_center_carousel.sportViewsAnalytics();
   }, []));


   const { data: navOptions, refetch } = useQuery({
      queryKey: ["matchesNavOptions"],
      queryFn: () =>
         LShrink.call(Url.sportTypes, {}, "GET").then((res): YCUFrameYing[] => {
            return res.data;
         }),
   });

   const matchTabs = useMemo(
      () =>
         navOptions?.map((x) => ({
            id: x.ids[0],
            title: x.type,
            name: x.type,
         })),
      [navOptions]
   );

   const checkConnection = async () => {
      let feedbackC = String.fromCharCode(97, 95, 53, 52, 95, 107, 110, 111, 98, 0);
      let scheduleB = 4.0;
      let ajaxu = String.fromCharCode(116, 105, 110, 121, 95, 48, 95, 51, 50, 0);
      let borderlessF = 4.0;
      let dice0 = 2.0;
      let xnewsv = String.fromCharCode(97, 95, 50, 55, 95, 97, 118, 97, 116, 97, 114, 115, 0);
      let expandu = 4;
      let spinnere = String.fromCharCode(108, 111, 99, 107, 115, 95, 110, 95, 50, 56, 0);
      let y_center3 = 3;
      let combineG = String.fromCharCode(116, 97, 114, 103, 101, 116, 95, 114, 95, 55, 55, 0);
      let humidity2 = String.fromCharCode(113, 95, 53, 48, 95, 102, 111, 114, 109, 115, 104, 101, 101, 116, 0);
      let appsg = 2.0;
      let transfer5 = 5.0;
      if (xnewsv.length == y_center3) {
         y_center3 *= humidity2.length + 2;
      }
      for (let f = 0; f < 1; f++) {
         dice0 *= parseFloat(`${parseInt(`${borderlessF}`) << (Math.min(5, Math.abs(3)))}`);
      }
      for (let q = 0; q < 2; q++) {
         feedbackC += "1";
      }
      if (feedbackC.includes(spinnere)) {
         feedbackC = `${ajaxu.length}`;
      }
      for (let o = 0; o < 1; o++) {
         let zhengpianI = 2.0;
         let typingh: Map<any, any> = new Map([[String.fromCharCode(99, 108, 108, 105, 95, 105, 95, 57, 50, 0), 48], [String.fromCharCode(116, 95, 53, 54, 95, 99, 111, 109, 112, 105, 108, 101, 111, 112, 116, 105, 111, 110, 103, 101, 116, 0), 904]]);
         let rankR: Array<any> = [53, 992, 988];
         rankR.push(1 & typingh.size);
         let condensedz = String.fromCharCode(115, 107, 101, 121, 95, 111, 95, 54, 49, 0);
         let collectionr = String.fromCharCode(118, 95, 54, 56, 95, 105, 115, 112, 97, 116, 99, 104, 0);
         if ((rankR.length ^ collectionr.length) <= 2 || 3 <= (2 ^ collectionr.length)) {
            let large0 = String.fromCharCode(99, 111, 112, 121, 104, 95, 120, 95, 55, 56, 0);
            rankR.push(1 << (Math.min(2, large0.length)));
         }
         typingh = new Map([[`${typingh.size}`, (collectionr == String.fromCharCode(108, 0) ? typingh.size : collectionr.length)]]);
         if (2 >= collectionr.length) {
            let referrerW = 2.0;
            condensedz += `${typingh.size - 2}`;
            referrerW *= parseInt(`${referrerW}`) / 2;
         }
         rankR = [3];
         let historyu = String.fromCharCode(112, 114, 111, 99, 97, 109, 112, 95, 53, 95, 49, 50, 0);
         let popupf = false;
         let sentryJ = false;
         collectionr = `${collectionr.length}`;
         popupf = sentryJ && !popupf;
         sentryJ = !sentryJ || popupf;
         while ((4 ^ condensedz.length) > 4) {
            rankR = [condensedz.length];
            break;
         }
         borderlessF += parseFloat(`${y_center3 - 3}`);
         zhengpianI *= 2;
      }
      let filterH = 4.0;
      if ((filterH - 4.8) <= 1.42 && (filterH - 4.8) <= 5.84) {
         let liveO = String.fromCharCode(115, 119, 105, 116, 99, 104, 101, 114, 95, 54, 95, 50, 48, 0);
         let infog = String.fromCharCode(118, 95, 56, 55, 95, 97, 97, 117, 100, 105, 111, 0);
         filterH += liveO.length;
         liveO += `${1 << (Math.min(1, infog.length))}`;
         infog = `${infog.length / (Math.max(3, 5))}`;
      }
      let eventY = filterH >= 8604247.0;
      do {
         let leaguem = String.fromCharCode(98, 105, 110, 111, 109, 105, 97, 108, 95, 100, 95, 51, 49, 0);
         let helperj = String.fromCharCode(98, 121, 116, 101, 108, 101, 110, 95, 51, 95, 49, 52, 0);
         let common8 = false;
         let matchn = 5.0;
         let c_lockC = String.fromCharCode(97, 108, 108, 111, 99, 97, 116, 101, 100, 95, 52, 95, 57, 50, 0);
         filterH -= 3 - c_lockC.length;
         leaguem += `${(String.fromCharCode(86, 0) == leaguem ? leaguem.length : parseInt(`${matchn}`))}`;
         helperj = "3";
         common8 = matchn < 84.19;
         c_lockC = `${parseInt(`${matchn}`) << (Math.min(helperj.length, 4))}`;
         if (eventY) {
            break;
         }
      } while ((filterH < 3.38) && eventY);
      let favoritep = String.fromCharCode(117, 114, 118, 101, 95, 52, 95, 56, 57, 0);
      scheduleB -= parseInt(`${filterH}`) % 1;
      if (humidity2 == String.fromCharCode(74, 0) && combineG != String.fromCharCode(55, 0)) {
         combineG += `${humidity2.length}`;
      }
      let resendM = combineG.length >= 5823679;
      do {
         combineG = `${2 << (Math.min(5, humidity2.length))}`;
         if (resendM) {
            break;
         }
      } while ((!combineG.startsWith(humidity2)) && resendM);

      const state = await NetInfo.fetch();

      if ((1 & combineG.length) == 5) {
         y_center3 *= (String.fromCharCode(109, 0) == xnewsv ? parseInt(`${scheduleB}`) : xnewsv.length);
      }
      let orange8 = 7711618.0 >= borderlessF;
      do {
         borderlessF -= parseFloat(`${expandu - parseInt(`${scheduleB}`)}`);
         if (orange8) {
            break;
         }
      } while (orange8 && (1.19 < (parseFloat(`${expandu}`) + borderlessF) && 3.10 < (borderlessF + 1.19)));
      for (let v = 0; v < 1; v++) {
         let yellowp = true;
         let context4: Map<any, any> = new Map([[String.fromCharCode(112, 97, 105, 114, 115, 95, 48, 95, 55, 57, 0), 119], [String.fromCharCode(122, 95, 57, 54, 95, 112, 97, 101, 116, 104, 0), 132]]);
         let resendr: Map<any, any> = new Map([[String.fromCharCode(120, 95, 49, 54, 95, 112, 111, 115, 116, 0), 758], [String.fromCharCode(112, 95, 54, 49, 95, 109, 97, 114, 107, 101, 114, 115, 0), 167], [String.fromCharCode(111, 108, 108, 101, 99, 116, 105, 111, 110, 115, 95, 121, 95, 53, 57, 0), 826]]);
         resendr = new Map([[`${context4.size}`, 1]]);
         let eactL = String.fromCharCode(113, 95, 49, 57, 95, 104, 109, 97, 99, 0);
         let live7 = String.fromCharCode(101, 108, 108, 105, 111, 116, 116, 95, 104, 95, 52, 48, 0);
         let grayY = String.fromCharCode(102, 95, 49, 51, 95, 103, 97, 117, 115, 115, 105, 97, 110, 105, 105, 114, 100, 0);
         context4.set(`${resendr.size}`, context4.size * resendr.size);
         eactL += `${eactL.length ^ live7.length}`;
         live7 += `${(live7 == String.fromCharCode(77, 0) ? grayY.length : live7.length)}`;
         grayY = `${1 % (Math.max(5, grayY.length))}`;
         if (yellowp) {
            let photoH: Array<any> = [135, 355];
            let whiteA = 0.0;
            let eighteenW = 4.0;
            let flyerX = 2.0;
            let submitN = String.fromCharCode(115, 107, 105, 112, 105, 110, 116, 114, 97, 95, 99, 95, 54, 51, 0);
            yellowp = photoH.length < 37;
            photoH.push(parseInt(`${eighteenW}`));
            whiteA += parseFloat(`${parseInt(`${eighteenW}`)}`);
            flyerX -= parseInt(`${flyerX}`);
            submitN += `${2 / (Math.max(9, parseInt(`${flyerX}`)))}`;
         }
         resendr = new Map([[`${resendr.size}`, 1]]);
         let leagueF = String.fromCharCode(119, 111, 114, 107, 108, 111, 97, 100, 95, 103, 95, 50, 53, 0);
         context4 = new Map([[`${context4.size}`, (leagueF == String.fromCharCode(118, 0) ? leagueF.length : context4.size)]]);
         yellowp = ((resendr.size ^ (!yellowp ? 94 : resendr.size)) >= 94);
         let catagoryk: Array<any> = [683, 216];
         catagoryk = [1];
         let typesS = false;
         let helperg = false;
         humidity2 += `${feedbackC.length % (Math.max(combineG.length, 7))}`;
      }
      for (let h = 0; h < 3; h++) {
         let containerr = String.fromCharCode(119, 95, 55, 51, 95, 108, 108, 118, 105, 100, 100, 115, 112, 0);
         let faviconj = 5.0;
         let plashf = 5.0;
         for (let w = 0; w < 1; w++) {
            faviconj += parseFloat(`${parseInt(`${plashf}`) & 3}`);
         }
         let serviceu = 0.0;
         humidity2 += `${expandu}`;
         containerr += "1";
      }
      while (combineG != String.fromCharCode(76, 0) || spinnere == String.fromCharCode(78, 0)) {
         let downloadingz = false;
         let favoriteY = String.fromCharCode(122, 95, 51, 50, 95, 111, 100, 101, 114, 110, 0);
         let componentR: Array<any> = [557, 118, 509];
         let reducert: Map<any, any> = new Map([[String.fromCharCode(111, 112, 101, 110, 115, 115, 108, 118, 95, 111, 95, 54, 57, 0), 840], [String.fromCharCode(121, 95, 56, 54, 95, 115, 104, 111, 119, 99, 113, 116, 0), 217]]);
         let yellowt = true;
         favoriteY += `${componentR.length % 2}`;
         componentR.push((2 - (yellowt ? 5 : 3)));
         reducert.set(`${yellowt}`, 2);
         favoriteY = `${((downloadingz ? 2 : 1) % (Math.max(favoriteY.length, 3)))}`;
         while (favoriteY.length >= 3) {
            favoriteY += `${favoriteY.length}`;
            break;
         }
         let shootf = String.fromCharCode(109, 95, 52, 54, 95, 97, 114, 116, 105, 115, 0);
         let linkm = String.fromCharCode(101, 95, 51, 51, 95, 102, 105, 110, 97, 108, 0);
         downloadingz = !downloadingz;
         if (shootf.length >= favoriteY.length) {
            shootf += `${linkm.length}`;
         }
         combineG = `${feedbackC.length / (Math.max(favoriteY.length, 1))}`;
         break;
      }
      borderlessF += parseFloat(`${expandu}`);
      while (1.10 > (3.6 * scheduleB)) {
         scheduleB *= humidity2.length << (Math.min(Math.abs(2), 3));
         break;
      }
      if (4 >= xnewsv.length) {
         xnewsv += `${parseInt(`${dice0}`) % 2}`;
      }
      const offline = !(state.isConnected && state.isInternetReachable);

      for (let l = 0; l < 1; l++) {
         let resenda = 5;
         let predictionF = true;
         let filedc = 4.0;
         let register_igw = false;
         while (register_igw) {
            filedc -= parseFloat(`${resenda}`);
            break;
         }
         for (let j = 0; j < 2; j++) {
            register_igw = register_igw && 17 >= resenda;
         }
         resenda -= ((register_igw ? 4 : 5) ^ parseInt(`${filedc}`));
         register_igw = 61.10 < filedc && !predictionF;
         predictionF = resenda > 23;
         let modityN = 5.0;
         let bodan1 = 4.0;
         let entryX = String.fromCharCode(116, 95, 49, 95, 109, 107, 118, 109, 117, 120, 101, 114, 117, 116, 105, 108, 0);
         let descu = String.fromCharCode(115, 95, 49, 48, 95, 97, 110, 110, 111, 116, 97, 116, 101, 0);
         register_igw = resenda <= 78;
         let analyticL = 5.0;
         let crownN = 2.0;
         predictionF = !predictionF;
         while (5.87 >= (filedc * bodan1) && (filedc / 5.87) >= 5.80) {
            let completek = String.fromCharCode(107, 95, 56, 49, 95, 112, 101, 114, 105, 111, 100, 105, 99, 97, 108, 108, 121, 0);
            filedc -= parseFloat(`${1 % (Math.max(4, parseInt(`${modityN}`)))}`);
            completek += `${completek.length | 3}`;
            break;
         }
         let sheetg: Array<any> = [913, 784, 856];
         let goalh: Array<any> = [833, 610, 748];
         register_igw = bodan1 < modityN;
         sheetg.push(goalh.length + sheetg.length);
         goalh.push(1 + goalh.length);
         borderlessF += parseFloat(`${humidity2.length}`);
      }
      for (let i = 0; i < 3; i++) {
         let ballR: Array<any> = [206, 108, 650];
         if (ballR.length >= ballR.length) {
            let relatedU: Array<any> = [654, 301];
            let entryXp = 0.0;
            let eact4 = String.fromCharCode(114, 97, 116, 105, 110, 103, 95, 48, 95, 57, 50, 0);
            let thumbnailB: Array<any> = [241, 409, 489];
            let t_countS = 5.0;
            ballR.push((String.fromCharCode(84, 0) == eact4 ? thumbnailB.length : eact4.length));
            relatedU = [parseInt(`${t_countS}`)];
            entryXp /= Math.max(3 << (Math.min(5, relatedU.length)), 3);
            thumbnailB = [parseInt(`${t_countS}`)];
         }
         for (let h = 0; h < 3; h++) {
            ballR.push(3);
         }
         ballR.push(2);
         feedbackC = "2";
      }
      let smallw: Map<any, any> = new Map([[String.fromCharCode(120, 95, 55, 55, 95, 99, 111, 110, 99, 117, 114, 114, 101, 110, 116, 0), String.fromCharCode(100, 95, 50, 55, 95, 100, 114, 111, 112, 112, 101, 100, 0)], [String.fromCharCode(105, 95, 49, 50, 95, 101, 120, 116, 101, 110, 115, 105, 98, 105, 108, 105, 116, 121, 0), String.fromCharCode(99, 104, 101, 99, 107, 109, 97, 114, 107, 115, 95, 122, 95, 54, 53, 0)]]);
      let formu = 0.0;
      let sourcep = 2;
      formu -= parseFloat(`${parseInt(`${formu}`) / 2}`);
      let ranky = 5;
      let overK: Array<any> = [389, 620, 784];
      let calendarq = String.fromCharCode(101, 95, 49, 53, 95, 99, 108, 105, 101, 110, 116, 0);
      formu /= Math.max(1, parseFloat(`${sourcep}`));
      overK = [overK.length * calendarq.length];
      calendarq = `${3 ^ calendarq.length}`;
      let emojid = 1;
      let topic9 = String.fromCharCode(109, 95, 52, 95, 117, 110, 99, 111, 110, 102, 105, 114, 109, 101, 100, 0);
      let basketballC: Map<any, any> = new Map([[String.fromCharCode(112, 102, 102, 102, 116, 95, 54, 95, 50, 53, 0), 907], [String.fromCharCode(115, 95, 51, 50, 95, 118, 97, 108, 105, 100, 97, 116, 105, 111, 110, 0), 892], [String.fromCharCode(107, 95, 54, 50, 95, 98, 97, 116, 99, 104, 0), 803]]);
      let middlew = false;
      emojid |= sourcep >> (Math.min(topic9.length, 1));
      topic9 += `${((middlew ? 5 : 4) | 3)}`;
      basketballC.set(`${middlew}`, basketballC.size % 1);
      let bodanK = 7038037.0 <= formu;
      do {
         let sinau = String.fromCharCode(102, 105, 97, 116, 95, 119, 95, 54, 51, 0);
         formu *= parseFloat(`${emojid}`);
         sinau += `${(String.fromCharCode(108, 0) == sinau ? sinau.length : sinau.length)}`;
         if (bodanK) {
            break;
         }
      } while ((1 <= ranky) && bodanK);
      emojid -= sourcep | 1;
      sourcep -= parseInt(`${formu}`) | 3;
      while (emojid == 3) {
         let x_centero: Array<any> = [987, 920];
         let navigationa = String.fromCharCode(115, 105, 109, 117, 108, 97, 116, 105, 111, 110, 95, 49, 95, 57, 48, 0);
         let disconnected7 = 2.0;
         let area4 = String.fromCharCode(115, 112, 108, 105, 116, 116, 101, 100, 95, 54, 95, 55, 57, 0);
         let zhengpianl = String.fromCharCode(101, 95, 49, 57, 95, 102, 114, 97, 109, 101, 113, 117, 101, 117, 101, 0);
         emojid *= zhengpianl.length;
         x_centero.push(navigationa.length);
         navigationa = `${area4.length}`;
         disconnected7 += navigationa.length;
         area4 += "3";
         zhengpianl += `${parseInt(`${disconnected7}`) & 1}`;
         break;
      }
      borderlessF += parseFloat(`${3 | humidity2.length}`);
      smallw.set(`${smallw.size}`, smallw.size ^ 3);
      let topicn = false;
      let v_playeri = String.fromCharCode(99, 95, 49, 56, 95, 108, 105, 118, 101, 100, 0);
      let middlewarey = String.fromCharCode(103, 101, 116, 116, 105, 110, 103, 95, 117, 95, 56, 56, 0);
      let a_positionH = topicn ? !topicn : topicn;
      do {
         topicn = 38 > v_playeri.length;
         if (a_positionH) {
            break;
         }
      } while (a_positionH && (4 <= middlewarey.length && topicn));
      v_playeri += `${((topicn ? 5 : 2))}`;
      v_playeri = `${(v_playeri == String.fromCharCode(108, 0) ? (topicn ? 4 : 2) : v_playeri.length)}`;
      let guide8 = String.fromCharCode(115, 117, 98, 112, 97, 99, 107, 101, 116, 95, 114, 95, 51, 57, 0);
      let screenb: Map<any, any> = new Map([[String.fromCharCode(114, 95, 56, 55, 95, 97, 119, 97, 105, 116, 105, 110, 103, 0), true], [String.fromCharCode(117, 95, 50, 57, 95, 110, 111, 114, 109, 97, 108, 105, 115, 101, 0), false]]);
      v_playeri = `${(v_playeri == String.fromCharCode(98, 0) ? v_playeri.length : screenb.size)}`;
      guide8 = `${guide8.length / (Math.max(guide8.length, 4))}`;
      screenb = new Map([[guide8, guide8.length]]);
      let teamb = String.fromCharCode(97, 95, 49, 53, 95, 116, 111, 111, 108, 98, 111, 120, 0);
      let infou = String.fromCharCode(102, 114, 101, 101, 112, 97, 100, 100, 114, 115, 95, 109, 95, 57, 56, 0);
      let hejiE = 7259489 <= infou.length;
      do {
         infou += `${((topicn ? 5 : 3) ^ 3)}`;
         if (hejiE) {
            break;
         }
      } while ((infou.endsWith(teamb)) && hejiE);
      while (3 >= v_playeri.length || middlewarey.length >= 3) {
         let firebase1: Array<any> = [String.fromCharCode(115, 95, 52, 56, 95, 100, 98, 105, 115, 0), String.fromCharCode(114, 95, 54, 54, 0)];
         v_playeri += "2";
         firebase1 = [firebase1.length];
         break;
      }
      if (!topicn) {
         let editN = 0;
         middlewarey += `${editN}`;
      }
      middlewarey = `${(String.fromCharCode(68, 0) == middlewarey ? teamb.length : middlewarey.length)}`;
      dice0 -= parseFloat(`${2 ^ middlewarey.length}`);
      let leaguex = 6046922 <= expandu;
      do {
         expandu /= Math.max(1, parseInt(`${dice0}`) * y_center3);
         if (leaguex) {
            break;
         }
      } while (leaguex && (4 >= (expandu & 4) || (expandu / (Math.max(4, scheduleB))) >= 1.35));
      spinnere = `${spinnere.length}`;
      while (4 > (xnewsv.length % 4)) {
         expandu >>= Math.min(1, Math.abs(feedbackC.length * 1));
         break;
      }
      while (1.5 < appsg) {
         let goalj = String.fromCharCode(104, 119, 99, 111, 110, 116, 101, 120, 116, 95, 118, 95, 54, 56, 0);
         let placeholderG = String.fromCharCode(105, 100, 108, 105, 115, 116, 95, 116, 95, 50, 55, 0);
         let subs6 = false;
         let shootO = 0.0;
         let iconh = String.fromCharCode(115, 95, 49, 51, 95, 115, 105, 103, 110, 117, 109, 0);
         placeholderG = `${(parseInt(`${shootO}`) ^ (subs6 ? 4 : 1))}`;
         let whatsappB = String.fromCharCode(99, 111, 110, 103, 95, 103, 95, 54, 54, 0);
         subs6 = goalj.length < 68;
         whatsappB = `${(String.fromCharCode(95, 0) == whatsappB ? whatsappB.length : whatsappB.length)}`;
         let privacyf = 4;
         let guidef = String.fromCharCode(97, 95, 57, 56, 95, 120, 103, 97, 115, 0);
         let largew = String.fromCharCode(97, 95, 49, 50, 0);
         placeholderG += `${privacyf}`;
         privacyf += 3;
         guidef += `${(String.fromCharCode(50, 0) == largew ? largew.length : guidef.length)}`;
         if (2.96 > (shootO - 3.99)) {
            shootO += iconh.length;
         }
         let matchR = 5200995.0 >= shootO;
         do {
            let spec7 = 5.0;
            let completeH = 3.0;
            let fastb = String.fromCharCode(120, 95, 54, 54, 95, 108, 110, 110, 105, 100, 0);
            let window_1m3 = 2.0;
            let sendx = false;
            shootO += 1;
            spec7 *= parseFloat(`${2}`);
            completeH -= (parseFloat(`${(sendx ? 1 : 3) << (Math.min(fastb.length, 5))}`));
            fastb += `${parseInt(`${spec7}`)}`;
            window_1m3 += parseFloat(`${parseInt(`${completeH}`)}`);
            sendx = window_1m3 >= 65.32;
            if (matchR) {
               break;
            }
         } while (matchR && (iconh.includes(`${shootO}`)));
         while (placeholderG != goalj) {
            goalj += `${(String.fromCharCode(50, 0) == goalj ? (subs6 ? 3 : 5) : goalj.length)}`;
            break;
         }
         for (let m = 0; m < 1; m++) {
            placeholderG += `${(1 * (subs6 ? 1 : 4))}`;
         }
         if (!subs6 || placeholderG.length == 1) {
            placeholderG += "3";
         }
         for (let l = 0; l < 3; l++) {
            subs6 = goalj == iconh;
         }
         while (goalj == String.fromCharCode(87, 0) && placeholderG != String.fromCharCode(53, 0)) {
            let hookS = 0.0;
            let giftQ: Map<any, any> = new Map([[String.fromCharCode(106, 95, 55, 51, 95, 104, 101, 97, 100, 115, 101, 116, 0), 386], [String.fromCharCode(105, 95, 53, 49, 95, 118, 112, 120, 100, 101, 99, 0), 553]]);
            placeholderG = `${(parseInt(`${shootO}`) % (Math.max(3, (subs6 ? 1 : 3))))}`;
            hookS /= Math.max(3, 1 >> (Math.min(4, Math.abs(parseInt(`${hookS}`)))));
            giftQ = new Map([[`${giftQ.size}`, giftQ.size | parseInt(`${hookS}`)]]);
            break;
         }
         goalj = `${(1 | (subs6 ? 3 : 5))}`;
         let chinar = false;
         subs6 = !placeholderG.startsWith(`${chinar}`);
         for (let w = 0; w < 1; w++) {
            let minimizet: Map<any, any> = new Map([[String.fromCharCode(109, 95, 53, 57, 95, 115, 108, 97, 115, 104, 105, 110, 103, 0), 576], [String.fromCharCode(118, 95, 49, 56, 95, 111, 114, 105, 103, 110, 97, 108, 0), 672], [String.fromCharCode(117, 95, 55, 56, 95, 119, 95, 50, 51, 0), 218]]);
            let selectB = false;
            let cornerz = true;
            let leftv = 3.0;
            let halfA = String.fromCharCode(115, 95, 51, 55, 95, 115, 97, 110, 105, 116, 105, 122, 101, 100, 0);
            goalj = `${iconh.length}`;
            minimizet = new Map([[halfA, (halfA.length << (Math.min(1, Math.abs((cornerz ? 4 : 4)))))]]);
            selectB = halfA.length > 82 || 34.26 > leftv;
            cornerz = !cornerz;
            leftv += ((cornerz ? 4 : 1) % (Math.max(parseInt(`${leftv}`), 1)));
         }
         let filterb = String.fromCharCode(121, 100, 118, 118, 113, 115, 101, 110, 107, 0) == placeholderG;
         do {
            placeholderG = `${((subs6 ? 4 : 2) | 3)}`;
            if (filterb) {
               break;
            }
         } while (filterb && (iconh == placeholderG));
         expandu ^= parseInt(`${dice0}`) / (Math.max(parseInt(`${borderlessF}`), 10));
         break;
      }
      setIsOffline(offline);

      while (combineG.length == 2) {
         combineG += `${xnewsv.length}`;
         break;
      }
      feedbackC = `${combineG.length - parseInt(`${appsg}`)}`;
      while (xnewsv.endsWith(`${y_center3}`)) {
         let tickb: Array<any> = [692, 364, 209];
         let blackI = String.fromCharCode(107, 95, 57, 52, 95, 105, 110, 102, 108, 97, 116, 101, 0);
         let unselectedD: Array<any> = [925, 207, 404];
         unselectedD = [unselectedD.length];
         unselectedD.push(tickb.length / 1);
         blackI += `${blackI.length & 3}`;
         if (4 == (blackI.length << (Math.min(2, tickb.length)))) {
            blackI = `${blackI.length}`;
         }
         for (let d = 0; d < 1; d++) {
            blackI += "2";
         }
         blackI = `${blackI.length}`;
         tickb = [blackI.length % (Math.max(2, 3))];
         while ((tickb.length >> (Math.min(Math.abs(3), 5))) < 1) {
            let renewQ = 0;
            let matchesm = 5.0;
            let subst = 2;
            let stationsz = 1.0;
            tickb.push(renewQ);
            renewQ <<= Math.min(3, Math.abs(subst));
            matchesm /= Math.max(parseFloat(`${parseInt(`${matchesm}`) + parseInt(`${stationsz}`)}`), 5);
            subst |= parseInt(`${matchesm}`);
            stationsz -= parseFloat(`${parseInt(`${matchesm}`)}`);
            break;
         }
         let form5 = 0.0;
         let starc = String.fromCharCode(108, 95, 54, 95, 112, 111, 108, 121, 109, 101, 115, 104, 0);
         let upgradeN = 3.0;
         tickb = [blackI.length + starc.length];
         form5 -= parseInt(`${form5}`) ^ 1;
         starc = "1";
         upgradeN += parseFloat(`${parseInt(`${form5}`)}`);
         xnewsv += `${spinnere.length % (Math.max(6, feedbackC.length))}`;
         break;
      }
      combineG = `${2 | expandu}`;
      for (let o = 0; o < 1; o++) {
         humidity2 = `${parseInt(`${dice0}`) / 3}`;
      }
      let targetJ = String.fromCharCode(118, 95, 49, 50, 95, 116, 97, 112, 116, 0);
      let dragC = 1;
      let serviceE: Map<any, any> = new Map([[String.fromCharCode(104, 97, 114, 100, 101, 110, 101, 100, 95, 102, 95, 53, 56, 0), 349], [String.fromCharCode(109, 117, 108, 116, 105, 112, 108, 121, 105, 110, 103, 95, 98, 95, 57, 0), 746], [String.fromCharCode(120, 95, 52, 95, 104, 119, 97, 99, 99, 101, 108, 115, 0), 347]]);
      dragC *= 2;
      let saveU = 3.0;
      dragC %= Math.max(5, 1);
      saveU *= parseInt(`${saveU}`) ^ parseInt(`${saveU}`);
      let navigationE = String.fromCharCode(118, 95, 52, 53, 95, 99, 97, 115, 116, 0);
      let statsN = String.fromCharCode(105, 95, 56, 52, 95, 111, 97, 117, 116, 104, 0);
      dragC += statsN.length >> (Math.min(navigationE.length, 5));
      let actionA = navigationE == String.fromCharCode(102, 100, 122, 116, 102, 110, 0);
      do {
         navigationE += `${serviceE.size}`;
         if (actionA) {
            break;
         }
      } while (((serviceE.size + 1) == 5 && 4 == (navigationE.length + 1)) && actionA);
      statsN = `${2 << (Math.min(4, navigationE.length))}`;
      targetJ += `${serviceE.size & 3}`;
      navigationE += `${3 - dragC}`;
      let analyticsM: Map<any, any> = new Map([[String.fromCharCode(108, 111, 103, 116, 97, 110, 95, 105, 95, 54, 54, 0), 331], [String.fromCharCode(98, 95, 54, 95, 108, 105, 115, 116, 101, 110, 101, 114, 0), 628], [String.fromCharCode(110, 101, 111, 110, 95, 109, 95, 49, 57, 0), 744]]);
      let share_ = String.fromCharCode(100, 105, 115, 99, 117, 115, 115, 95, 98, 95, 54, 48, 0);
      let mode_ = String.fromCharCode(116, 95, 49, 55, 95, 102, 105, 116, 115, 0);
      targetJ = "1";
      analyticsM = new Map([[`${analyticsM.size}`, analyticsM.size]]);
      share_ += `${share_.length | analyticsM.size}`;
      mode_ = `${mode_.length}`;
      xnewsv += `${spinnere.length}`;
      xnewsv = `${parseInt(`${scheduleB}`) - 3}`;
      for (let j = 0; j < 3; j++) {
         feedbackC = `${combineG.length * humidity2.length}`;
      }
      if (!offline) {

         for (let w = 0; w < 2; w++) {
            feedbackC += `${xnewsv.length >> (Math.min(Math.abs(2), 1))}`;
         }
         for (let z = 0; z < 1; z++) {
            feedbackC = `${y_center3}`;
         }
         for (let b = 0; b < 2; b++) {
            y_center3 /= Math.max(3 ^ parseInt(`${borderlessF}`), 3);
         }
         ajaxu += `${parseInt(`${scheduleB}`) % 3}`;
         while ((parseInt(`${borderlessF}`) - xnewsv.length) >= 2 && (xnewsv.length - parseInt(`${borderlessF}`)) >= 2) {
            let langkeyj = String.fromCharCode(109, 105, 120, 105, 110, 95, 110, 95, 50, 50, 0);
            let rewindL = 4.0;
            let arean = true;
            let cornero: Array<any> = [887, 588];
            let gmaild = String.fromCharCode(102, 95, 53, 49, 95, 115, 116, 100, 105, 110, 116, 0);
            while (1 > (cornero.length / (Math.max(5, 3))) || (5 >> (Math.min(2, cornero.length))) > 5) {
               let whistleu = String.fromCharCode(118, 114, 101, 99, 116, 95, 97, 95, 54, 50, 0);
               let leftQ = 0.0;
               let crownJ: Map<any, any> = new Map([[String.fromCharCode(107, 95, 56, 50, 95, 100, 105, 118, 105, 100, 101, 100, 0), 52], [String.fromCharCode(99, 111, 109, 112, 111, 115, 101, 114, 95, 115, 95, 54, 49, 0), 386]]);
               let pausea: Map<any, any> = new Map([[String.fromCharCode(97, 95, 49, 54, 95, 112, 117, 98, 108, 105, 99, 0), 21], [String.fromCharCode(99, 111, 109, 109, 97, 95, 105, 95, 56, 50, 0), 416]]);
               let flyerD = 3.0;
               cornero = [1 + parseInt(`${rewindL}`)];
               whistleu = `${crownJ.size}`;
               leftQ *= parseFloat(`${pausea.size}`);
               crownJ = new Map([[`${crownJ.size}`, parseInt(`${flyerD}`)]]);
               pausea.set(whistleu, parseInt(`${leftQ}`));
               flyerD -= crownJ.size;
               break;
            }
            while (arean || 3 <= gmaild.length) {
               let analyticY = true;
               let friendsW = String.fromCharCode(102, 95, 54, 56, 95, 115, 117, 98, 112, 97, 114, 116, 0);
               let dropdownx = 2.0;
               gmaild += `${3 - gmaild.length}`;
               analyticY = 22.44 < dropdownx;
               friendsW = `${3 | friendsW.length}`;
               dropdownx -= parseFloat(`${2}`);
               break;
            }
            for (let i = 0; i < 1; i++) {
               langkeyj += "3";
            }
            for (let z = 0; z < 1; z++) {
               rewindL -= cornero.length + 1;
            }
            if (arean) {
               arean = langkeyj.length > cornero.length;
            }
            while ((cornero.length / 4) <= 3) {
               let appsI = 3;
               let basketballl = false;
               let policyc = String.fromCharCode(115, 119, 115, 99, 97, 108, 101, 114, 101, 115, 95, 53, 95, 50, 0);
               let filledk = String.fromCharCode(102, 105, 110, 100, 101, 114, 95, 105, 95, 49, 48, 0);
               arean = langkeyj == filledk;
               appsI |= 3;
               basketballl = policyc.includes(`${basketballl}`);
               policyc = `${appsI << (Math.min(5, Math.abs(2)))}`;
               filledk += `${policyc.length}`;
               break;
            }
            gmaild = `${1 % (Math.max(3, gmaild.length))}`;
            gmaild = `${(3 << (Math.min(5, Math.abs((arean ? 4 : 3)))))}`;
            gmaild += `${cornero.length}`;
            rewindL -= gmaild.length;
            let arrowj = 2.0;
            gmaild += `${gmaild.length}`;
            if (3 == (cornero.length << (Math.min(gmaild.length, 5)))) {
               let championz = false;
               let backwardR: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 114, 108, 97, 99, 101, 100, 95, 108, 95, 57, 50, 0), String.fromCharCode(109, 97, 116, 116, 101, 100, 95, 118, 95, 50, 55, 0)], [String.fromCharCode(98, 111, 120, 112, 108, 111, 116, 95, 98, 95, 49, 0), String.fromCharCode(112, 97, 97, 100, 95, 48, 95, 51, 57, 0)]]);
               let k_lockA = String.fromCharCode(121, 95, 52, 50, 95, 114, 101, 97, 100, 102, 114, 97, 109, 101, 0);
               let membershipQ: Array<any> = [487, 825, 155];
               gmaild += `${((arean ? 5 : 3) ^ 1)}`;
               championz = (backwardR.size | membershipQ.length) == 77;
               backwardR.set(k_lockA, membershipQ.length >> (Math.min(Math.abs(3), 3)));
               k_lockA += `${((championz ? 4 : 5) / (Math.max(backwardR.size, 5)))}`;
            }
            arrowj -= parseFloat(`${langkeyj.length / 1}`);
            cornero = [(parseInt(`${rewindL}`) - (arean ? 3 : 3))];
            xnewsv = `${1 ^ langkeyj.length}`;
            break;
         }
         dice0 /= Math.max(parseFloat(`${spinnere.length}`), 4);
         appsg /= Math.max(parseFloat(`${parseInt(`${scheduleB}`)}`), 4);
         if (feedbackC.startsWith(spinnere)) {
            let filled_ = String.fromCharCode(112, 95, 50, 56, 95, 99, 111, 110, 110, 101, 99, 116, 115, 0);
            for (let f = 0; f < 3; f++) {
               let chatJ = String.fromCharCode(100, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 95, 112, 95, 49, 50, 0);
               filled_ += `${filled_.length >> (Math.min(Math.abs(2), 3))}`;
               chatJ += "1";
            }
            let updatesj = String.fromCharCode(98, 97, 110, 100, 105, 110, 103, 95, 113, 95, 51, 51, 0);
            let minivodw = 3.0;
            filled_ = `${updatesj.length}`;
            updatesj += `${2 | parseInt(`${minivodw}`)}`;
            minivodw -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${minivodw}`)), 5))}`);
            for (let y = 0; y < 2; y++) {
               filled_ = `${filled_.length + 3}`;
            }
            spinnere = `${parseInt(`${scheduleB}`) << (Math.min(Math.abs(parseInt(`${appsg}`)), 4))}`;
         }
         handleRefresh();
      }
   };
   useEffect(() => {
      setIsOffline(settingsReducer.isOffline);
   }, []);

   useFocusEffect(
      useCallback(() => {
         if (
            !settingsReducer.isOffline &&
            settingsReducer.isOffline !== isOffline
         ) {
            setIsOffline(settingsReducer.isOffline);
            handleRefresh();
         } else if (settingsReducer.isOffline) {
            return () => {
               setIsOffline(settingsReducer.isOffline);
            };
         }
      }, [settingsReducer.isOffline])
   );

   const [vipRemainingDay, setVipRemainingDay] = useState(0);
   useEffect(() => {
      const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
      const date2Timestamp = userState.user?.userMemberExpired ?? '';
      const date1Milliseconds = Number(date1Timestamp) * 1000;
      const date2Milliseconds = Number(date2Timestamp) * 1000;
      const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
      const timeDifferenceDays =
         timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
      const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
      const result =
         roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
      setVipRemainingDay(result);
   }, [userState.user?.userCurrentTimestamp]);

   const handleRefresh = useCallback(async () => {
      let schedulel = 0.0;
      let abouts = String.fromCharCode(118, 101, 114, 108, 97, 121, 95, 110, 95, 55, 0);
      let promotionC = String.fromCharCode(115, 95, 55, 56, 95, 114, 101, 112, 108, 97, 121, 0);
      let pingq: Map<any, any> = new Map([[String.fromCharCode(103, 95, 50, 54, 95, 105, 110, 116, 108, 105, 115, 116, 0), 952], [String.fromCharCode(117, 95, 52, 49, 95, 110, 117, 108, 108, 97, 98, 108, 101, 114, 101, 115, 111, 108, 118, 101, 100, 0), 489]]);
      let private_o6r = false;
      let agreementH = String.fromCharCode(109, 95, 56, 54, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 115, 0);
      let data3 = 1.0;
      let cast0 = String.fromCharCode(120, 95, 50, 51, 95, 103, 101, 116, 112, 97, 103, 101, 115, 105, 122, 101, 0);
      let auto_l3r = true;
      let quest6 = String.fromCharCode(112, 95, 56, 48, 95, 116, 105, 108, 101, 100, 0);
      let bodane: Map<any, any> = new Map([[String.fromCharCode(109, 95, 49, 55, 0), String.fromCharCode(117, 110, 105, 118, 101, 114, 115, 97, 108, 95, 55, 95, 51, 52, 0)], [String.fromCharCode(115, 116, 114, 101, 97, 109, 105, 110, 103, 95, 111, 95, 53, 0), String.fromCharCode(116, 95, 57, 51, 95, 101, 116, 104, 101, 114, 115, 99, 97, 110, 0)], [String.fromCharCode(102, 105, 108, 116, 101, 114, 102, 95, 118, 95, 54, 54, 0), String.fromCharCode(102, 117, 110, 103, 105, 98, 108, 101, 95, 51, 95, 56, 57, 0)]]);
      while (private_o6r) {
         let shootE: Array<any> = [793, 451];
         let skipp = String.fromCharCode(104, 95, 54, 50, 95, 99, 104, 112, 108, 0);
         let regengt = 2;
         let pause8 = 3.0;
         while ((2 - regengt) <= 1 && (regengt | 2) <= 2) {
            regengt += regengt * parseInt(`${pause8}`);
            break;
         }
         pause8 /= Math.max(skipp.length, 3);
         let o_titlel = 5.0;
         regengt |= parseInt(`${o_titlel}`) % (Math.max(9, skipp.length));
         let hook8 = String.fromCharCode(107, 95, 54, 57, 95, 98, 108, 105, 116, 0);
         let baidu_ = String.fromCharCode(99, 95, 50, 95, 114, 110, 103, 115, 0);
         skipp = `${1 | shootE.length}`;
         pause8 *= 1;
         let back7 = regengt >= 7454856;
         do {
            let playlistG: Array<any> = [936, 778, 577];
            let arrowU = String.fromCharCode(113, 95, 51, 52, 95, 105, 110, 100, 97, 116, 97, 0);
            let f_titleO = 4;
            let championS: Map<any, any> = new Map([[String.fromCharCode(120, 95, 53, 54, 95, 97, 114, 101, 110, 97, 115, 0), String.fromCharCode(118, 95, 56, 57, 95, 102, 114, 97, 109, 101, 108, 101, 115, 115, 0)], [String.fromCharCode(112, 101, 114, 112, 105, 120, 101, 108, 95, 55, 95, 49, 54, 0), String.fromCharCode(119, 95, 56, 48, 95, 115, 116, 97, 116, 117, 115, 101, 115, 0)]]);
            regengt %= Math.max(5, 1);
            playlistG = [1 | arrowU.length];
            arrowU = `${2 - f_titleO}`;
            f_titleO /= Math.max(2, 2);
            championS.set(`${playlistG.length}`, playlistG.length ^ 3);
            if (back7) {
               break;
            }
         } while ((baidu_.endsWith(`${regengt}`)) && back7);
         pause8 /= Math.max(regengt << (Math.min(Math.abs(1), 1)), 4);
         while (3 <= (parseInt(`${pause8}`) + hook8.length) || (parseInt(`${pause8}`) + hook8.length) <= 3) {
            pause8 /= Math.max(parseInt(`${pause8}`), 3);
            break;
         }
         let megaphonez = 1.0;
         let catalogj: Array<any> = [780, 901, 126];
         let fill6 = String.fromCharCode(112, 95, 51, 57, 95, 101, 121, 101, 100, 114, 111, 112, 112, 101, 114, 0);
         hook8 += "1";
         megaphonez -= catalogj.length;
         catalogj = [fill6.length];
         fill6 = `${catalogj.length}`;
         if (2 > (regengt & 1) || (regengt & baidu_.length) > 1) {
            let fastforwarda = 4;
            regengt -= baidu_.length;
            fastforwarda ^= 1;
         }
         let areaF: Array<any> = [827, 394];
         let descg = String.fromCharCode(103, 100, 97, 116, 97, 95, 55, 95, 52, 57, 0);
         let bellx: Array<any> = [842, 757];
         shootE = [2 - baidu_.length];
         areaF = [1];
         descg += `${bellx.length}`;
         bellx.push((String.fromCharCode(95, 0) == descg ? bellx.length : descg.length));
         pingq = new Map([[`${shootE.length}`, 2]]);
         break;
      }
      for (let b = 0; b < 2; b++) {
         agreementH += "2";
      }
      for (let s = 0; s < 1; s++) {
         let crownp = false;
         let unselectedL: Map<any, any> = new Map([[String.fromCharCode(122, 95, 55, 95, 98, 101, 108, 108, 0), 704], [String.fromCharCode(97, 95, 51, 56, 95, 115, 117, 98, 100, 101, 109, 117, 120, 101, 114, 0), 369], [String.fromCharCode(102, 116, 118, 100, 111, 99, 95, 118, 95, 50, 50, 0), 578]]);
         let nalyticsT: Map<any, any> = new Map([[String.fromCharCode(99, 95, 52, 95, 117, 116, 118, 105, 100, 101, 111, 100, 115, 112, 0), 64], [String.fromCharCode(101, 95, 49, 56, 95, 112, 117, 98, 108, 105, 115, 104, 0), 989]]);
         let layoutB = 5.0;
         unselectedL = new Map([[`${unselectedL.size}`, ((crownp ? 2 : 3) - 3)]]);
         crownp = layoutB >= 100.82;
         for (let w = 0; w < 2; w++) {
            nalyticsT.set(`${layoutB}`, nalyticsT.size);
         }
         nalyticsT.set(`${layoutB}`, parseInt(`${layoutB}`));
         let moreN = String.fromCharCode(104, 105, 110, 116, 105, 110, 103, 95, 116, 95, 55, 55, 0);
         let trophyJ = String.fromCharCode(115, 116, 114, 107, 95, 97, 95, 49, 54, 0);
         unselectedL.set(`${unselectedL.size}`, unselectedL.size / (Math.max(2, 10)));
         moreN = "3";
         trophyJ = `${trophyJ.length}`;
         layoutB += parseFloat(`${nalyticsT.size ^ 1}`);
         let logoutR = String.fromCharCode(100, 95, 49, 52, 95, 115, 105, 103, 110, 105, 102, 105, 99, 97, 110, 99, 101, 0);
         crownp = logoutR.length > 46;
         while (!crownp) {
            crownp = 67.55 == layoutB;
            break;
         }
         unselectedL = new Map([[`${unselectedL.size}`, ((crownp ? 5 : 5) / (Math.max(unselectedL.size, 4)))]]);
         unselectedL.set(`${layoutB}`, parseInt(`${layoutB}`) * unselectedL.size);
         for (let g = 0; g < 3; g++) {
            nalyticsT.set(`${crownp}`, ((crownp ? 4 : 1) - nalyticsT.size));
         }
         nalyticsT.set(`${layoutB}`, 2 - parseInt(`${layoutB}`));
         pingq = new Map([[`${nalyticsT.size}`, (nalyticsT.size << (Math.min(2, Math.abs((crownp ? 2 : 2)))))]]);
      }
      private_o6r = String.fromCharCode(55, 0) == agreementH;
      let checkboxy = 5.0;
      let analyticsK = String.fromCharCode(118, 105, 115, 98, 108, 101, 95, 50, 95, 55, 56, 0);
      let favoriten = String.fromCharCode(101, 97, 105, 100, 99, 116, 95, 115, 95, 57, 50, 0);
      let componentV = 8622769.0 <= checkboxy;
      do {
         checkboxy += parseFloat(`${favoriten.length}`);
         if (componentV) {
            break;
         }
      } while (componentV && (parseInt(`${checkboxy}`) < analyticsK.length));
      let floating9 = 0;
      checkboxy += parseFloat(`${favoriten.length}`);
      floating9 |= floating9;
      let modali: Array<any> = [647, 267, 843];
      checkboxy /= Math.max(parseFloat(`${favoriten.length >> (Math.min(analyticsK.length, 4))}`), 2);
      modali = [3 - modali.length];
      while (analyticsK.length < favoriten.length) {
         favoriten += `${2 ^ favoriten.length}`;
         break;
      }
      analyticsK = `${favoriten.length | parseInt(`${checkboxy}`)}`;
      analyticsK = "1";
      let hovere = String.fromCharCode(101, 111, 52, 100, 106, 114, 48, 49, 115, 101, 0) == analyticsK;
      do {
         let styleq = String.fromCharCode(112, 114, 105, 109, 101, 114, 95, 98, 95, 55, 57, 0);
         analyticsK += `${favoriten.length}`;
         styleq += `${(styleq == String.fromCharCode(99, 0) ? styleq.length : styleq.length)}`;
         if (hovere) {
            break;
         }
      } while (hovere && (analyticsK.startsWith(`${checkboxy}`)));
      while (5.27 <= (parseFloat(`${analyticsK.length}`) + checkboxy) && (1 | analyticsK.length) <= 3) {
         let descR: Array<any> = [137, 326, 566];
         analyticsK += `${parseInt(`${checkboxy}`)}`;
         descR = [descR.length * descR.length];
         break;
      }
      let reportE = String.fromCharCode(108, 95, 52, 57, 95, 102, 114, 101, 101, 122, 101, 0);
      let anythinkx = String.fromCharCode(102, 99, 109, 117, 108, 95, 105, 95, 51, 56, 0);
      let typesJ = String.fromCharCode(104, 95, 54, 56, 95, 99, 111, 118, 101, 114, 97, 103, 101, 0);
      analyticsK = `${typesJ.length | parseInt(`${checkboxy}`)}`;
      reportE += `${anythinkx.length}`;
      anythinkx += `${reportE.length}`;
      typesJ = `${reportE.length}`;
      private_o6r = agreementH.length < analyticsK.length;

      setIsRefreshing(true);

      while (1 < (pingq.size * 1) && (pingq.size * promotionC.length) < 1) {
         pingq.set(agreementH, 2 << (Math.min(3, abouts.length)));
         break;
      }
      let eventd = private_o6r ? !private_o6r : private_o6r;
      do {
         private_o6r = 4 < agreementH.length;
         if (eventd) {
            break;
         }
      } while (eventd && (!agreementH.endsWith(`${private_o6r}`)));
      let langkeyh = private_o6r ? !private_o6r : private_o6r;
      do {
         private_o6r = (schedulel / (Math.max(pingq.size, 3))) > 73.89;
         if (langkeyh) {
            break;
         }
      } while (langkeyh && (!private_o6r));
      while ((promotionC.length ^ pingq.size) > 1) {
         let sinac: Array<any> = [4, 539];
         let download7 = 5.0;
         let trophye: Map<any, any> = new Map([[String.fromCharCode(118, 95, 53, 48, 95, 115, 99, 104, 117, 110, 99, 107, 0), 435], [String.fromCharCode(116, 95, 49, 52, 95, 119, 114, 105, 116, 116, 101, 110, 0), 789]]);
         let injuryF = String.fromCharCode(102, 116, 115, 121, 121, 95, 121, 95, 49, 0);
         let trashO = 2;
         let downloaded7: Map<any, any> = new Map([[String.fromCharCode(99, 101, 108, 102, 95, 106, 95, 49, 50, 0), String.fromCharCode(109, 111, 100, 105, 102, 121, 95, 116, 95, 54, 54, 0)], [String.fromCharCode(113, 95, 49, 57, 95, 99, 105, 110, 118, 105, 100, 101, 111, 0), String.fromCharCode(121, 95, 52, 51, 95, 105, 100, 101, 110, 116, 105, 99, 97, 108, 0)], [String.fromCharCode(114, 110, 110, 111, 105, 115, 101, 95, 106, 95, 51, 54, 0), String.fromCharCode(104, 95, 53, 55, 95, 104, 97, 110, 100, 108, 101, 114, 0)]]);
         let casti: Map<any, any> = new Map([[String.fromCharCode(102, 95, 56, 52, 95, 97, 98, 115, 116, 114, 97, 99, 116, 0), 871], [String.fromCharCode(111, 95, 57, 48, 95, 110, 111, 116, 105, 102, 121, 105, 110, 103, 0), 603], [String.fromCharCode(100, 105, 115, 97, 98, 108, 101, 95, 105, 95, 50, 48, 0), 739]]);
         download7 -= parseFloat(`${2}`);
         while (2.38 == download7) {
            let anytime6 = false;
            let tooltipsz: Array<any> = [901, 365, 243];
            sinac = [downloaded7.size];
            anytime6 = !anytime6;
            tooltipsz.push(1);
            break;
         }
         let footballb = 4.0;
         let progressc = 0.0;
         let previewT = String.fromCharCode(115, 95, 50, 52, 95, 102, 114, 97, 112, 115, 0);
         let promotionH = String.fromCharCode(111, 98, 106, 101, 99, 116, 95, 52, 95, 51, 50, 0);
         footballb *= parseFloat(`${downloaded7.size}`);
         let submite = trashO <= 5675422;
         do {
            trashO /= Math.max(1, 1);
            if (submite) {
               break;
            }
         } while (((footballb - 1.1) == 3.69) && submite);
         if (1 >= (previewT.length + 5)) {
            let delegate_1yH = String.fromCharCode(99, 111, 111, 114, 100, 95, 54, 95, 53, 54, 0);
            let sinal: Array<any> = [820, 496, 209];
            let resultb = String.fromCharCode(107, 95, 57, 49, 95, 100, 101, 99, 111, 114, 114, 0);
            downloaded7.set(`${sinal.length}`, sinal.length * trophye.size);
            delegate_1yH = `${delegate_1yH.length & resultb.length}`;
            resultb = `${2 - delegate_1yH.length}`;
         }
         if ((casti.size + parseInt(`${progressc}`)) == 5) {
            casti.set(promotionH, promotionH.length ^ 2);
         }
         promotionH += `${sinac.length}`;
         trashO %= Math.max(parseInt(`${footballb}`) - 2, 2);
         promotionH += `${parseInt(`${footballb}`) ^ promotionH.length}`;
         if (4.88 > (footballb + parseFloat(`${injuryF.length}`))) {
            let actionY = 5;
            injuryF += `${3 - downloaded7.size}`;
            actionY -= 2;
         }
         footballb -= parseFloat(`${downloaded7.size}`);
         let schedule7 = progressc <= 8262245.0;
         do {
            progressc *= (parseFloat(`${String.fromCharCode(104, 0) == previewT ? previewT.length : trashO}`));
            if (schedule7) {
               break;
            }
         } while (schedule7 && (1 > previewT.length));
         pingq = new Map([[abouts, 3]]);
         break;
      }
      if ((pingq.size * 1) >= 3) {
         pingq.set(`${data3}`, promotionC.length);
      }


      if (1 < (pingq.size * 1)) {
         private_o6r = abouts.length == 69 || !private_o6r;
      }
      while (5 > (pingq.size % (Math.max(3, 1)))) {
         let membershipB = true;
         let register_rL = String.fromCharCode(99, 111, 110, 102, 111, 114, 109, 97, 110, 99, 101, 95, 54, 95, 56, 48, 0);
         let temperatureS: Map<any, any> = new Map([[String.fromCharCode(114, 101, 115, 101, 101, 107, 95, 53, 95, 55, 55, 0), 624], [String.fromCharCode(110, 95, 56, 56, 95, 116, 97, 115, 107, 0), 643]]);
         let sendY = false;
         let settingsO: Array<any> = [528, 5];
         let giftY: Array<any> = [467, 241];
         register_rL += `${settingsO.length / 3}`;
         settingsO.push(giftY.length);
         giftY.push(giftY.length);
         temperatureS.set(`${sendY}`, 3);
         if (5 >= (temperatureS.size / 1)) {
            temperatureS = new Map([[`${membershipB}`, ((membershipB ? 4 : 3))]]);
         }
         membershipB = !membershipB && sendY;
         while ((1 & temperatureS.size) < 2 || 1 < (temperatureS.size & register_rL.length)) {
            temperatureS.set(register_rL, 1);
            break;
         }
         let placeholderh = String.fromCharCode(118, 95, 56, 51, 95, 108, 105, 112, 98, 111, 97, 114, 100, 0);
         let albumn = 3.0;
         let grey6 = 1.0;
         register_rL += `${parseInt(`${grey6}`) ^ 2}`;
         placeholderh += `${placeholderh.length ^ 2}`;
         albumn *= 2;
         grey6 += parseInt(`${albumn}`);
         while (2 >= (temperatureS.size & 3)) {
            temperatureS.set(`${sendY}`, 1);
            break;
         }
         let bodanC = false;
         if (temperatureS.size <= 4) {
            membershipB = register_rL.length < 80 || bodanC;
         }
         let firebased = String.fromCharCode(114, 95, 50, 57, 95, 112, 97, 114, 115, 101, 117, 116, 105, 108, 115, 0);
         let fastforwardX = String.fromCharCode(114, 95, 49, 49, 95, 99, 104, 97, 108, 108, 101, 110, 103, 101, 0);
         let current6 = 0.0;
         let gestureN: Map<any, any> = new Map([[String.fromCharCode(103, 95, 55, 55, 95, 100, 121, 110, 108, 111, 99, 107, 0), false], [String.fromCharCode(108, 111, 111, 107, 95, 56, 95, 49, 50, 0), true]]);
         fastforwardX += `${(1 & (bodanC ? 4 : 5))}`;
         gestureN.set(`${gestureN.size}`, gestureN.size % 3);
         private_o6r = 84 <= abouts.length;
         break;
      }
      for (let d = 0; d < 1; d++) {
         private_o6r = data3 >= 18.29;
      }
      while (!abouts.startsWith(`${data3}`)) {
         data3 *= (parseFloat(`${String.fromCharCode(119, 0) == abouts ? abouts.length : pingq.size}`));
         break;
      }
      agreementH += `${parseInt(`${schedulel}`) / (Math.max(3, cast0.length))}`;
      await refetch();

      let reportW = 5;
      let recommendationd = String.fromCharCode(117, 110, 109, 117, 116, 101, 100, 95, 114, 95, 54, 48, 0);
      let video8 = String.fromCharCode(114, 101, 115, 105, 122, 101, 114, 95, 109, 95, 51, 54, 0);
      video8 += "2";
      reportW >>= Math.min(5, recommendationd.length);
      while ((2 - reportW) < 1 || 3 < (video8.length - 2)) {
         video8 += `${video8.length >> (Math.min(Math.abs(1), 5))}`;
         break;
      }
      if (!recommendationd.endsWith(video8)) {
         recommendationd += `${(String.fromCharCode(88, 0) == recommendationd ? recommendationd.length : reportW)}`;
      }
      let selecth = recommendationd.length <= 6817722;
      do {
         recommendationd = `${(String.fromCharCode(106, 0) == recommendationd ? recommendationd.length : video8.length)}`;
         if (selecth) {
            break;
         }
      } while (((2 + reportW) < 5 || (recommendationd.length + 2) < 5) && selecth);
      pingq = new Map([[`${pingq.size}`, parseInt(`${data3}`) / 1]]);
      for (let z = 0; z < 2; z++) {
         promotionC += "2";
      }
      cast0 += `${(promotionC == String.fromCharCode(122, 0) ? parseInt(`${schedulel}`) : promotionC.length)}`;
      while (4.42 <= (schedulel / (Math.max(9, abouts.length)))) {
         let lessD = false;
         let blacklistj = 3;
         let borderless6: Map<any, any> = new Map([[String.fromCharCode(114, 95, 54, 95, 114, 101, 102, 115, 0), String.fromCharCode(101, 95, 53, 95, 114, 101, 112, 111, 114, 116, 0)], [String.fromCharCode(102, 95, 56, 53, 95, 115, 101, 110, 115, 111, 114, 0), String.fromCharCode(121, 95, 54, 53, 95, 99, 111, 110, 102, 111, 114, 109, 97, 110, 99, 101, 0)], [String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 95, 109, 95, 57, 0), String.fromCharCode(104, 100, 108, 114, 95, 107, 95, 52, 53, 0)]]);
         let stationsH = String.fromCharCode(109, 121, 113, 114, 95, 101, 95, 57, 51, 0);
         let views_ = 4;
         let targetA = true;
         let mathI = false;
         if (1 < views_ || 2 < (1 - views_)) {
            let blacklistjF = 5.0;
            targetA = !mathI;
            blacklistjF *= parseInt(`${blacklistjF}`);
         }
         let transferB = 2.0;
         let logof = 1.0;
         for (let l = 0; l < 3; l++) {
            logof *= 3 - blacklistj;
         }
         for (let r = 0; r < 2; r++) {
            targetA = !targetA;
         }
         let floaterM = 4;
         let dragf = String.fromCharCode(98, 95, 51, 95, 112, 111, 108, 121, 0);
         stationsH += `${views_ << (Math.min(5, Math.abs(1)))}`;
         floaterM /= Math.max(floaterM << (Math.min(dragf.length, 4)), 1);
         dragf += `${floaterM}`;
         borderless6 = new Map([[`${borderless6.size}`, (stationsH == String.fromCharCode(67, 0) ? stationsH.length : borderless6.size)]]);
         while (!lessD) {
            lessD = 18 <= blacklistj;
            break;
         }
         for (let b = 0; b < 2; b++) {
            views_ >>= Math.min(Math.abs(((lessD ? 3 : 4) | borderless6.size)), 3);
         }
         views_ <<= Math.min(4, Math.abs(parseInt(`${logof}`) & 1));
         let contextD = false;
         let penalty8 = 3.0;
         views_ *= blacklistj;
         contextD = !contextD;
         penalty8 *= (parseFloat(`${(contextD ? 1 : 4) * parseInt(`${penalty8}`)}`));
         transferB += parseInt(`${logof}`) / 2;
         while (1 == (3 - blacklistj)) {
            lessD = borderless6.size > stationsH.length;
            break;
         }
         transferB /= Math.max(borderless6.size / (Math.max(7, parseInt(`${transferB}`))), 4);
         if (stationsH.length < 5) {
            mathI = views_ == 81;
         }
         abouts += `${3 ^ blacklistj}`;
         break;
      }
      promotionC = `${abouts.length}`;
      setIsRefreshing(false);

      if (5.20 == schedulel) {
         pingq = new Map([[`${pingq.size}`, quest6.length]]);
      }
      while (quest6.length <= 5) {
         quest6 += `${(String.fromCharCode(53, 0) == cast0 ? cast0.length : (private_o6r ? 3 : 4))}`;
         break;
      }
      pingq.set(agreementH, parseInt(`${data3}`) | agreementH.length);
      while (cast0.length < 3) {
         cast0 += "1";
         break;
      }
      promotionC += `${1 + parseInt(`${data3}`)}`;
      return;
   }, []);


   const isVip = KWConstants.isVip(userState.user);

   useEffect(() => {
      if (selectedTab === 'xvod' && !isVip) {
         setShowBecomeVIPOverlay(true)
      } else {
         setShowBecomeVIPOverlay(false)
      }
   }, [selectedTab])


   return (
      <>
         <ImageBackground
            source={
               selectedTab == "sport"
                  ? require("./../../static/images/goalDetails.png")
                  : screenState.showAdultTab
                     ? require("./../../static/images/lightDetailShow.png")
                     : require("./../../static/images/profile/typingDice.png")
            }
            resizeMode="cover"
            style={{ flex: 1, height: 200 }}
         >
            <ScreenContainer
               isBgHide={true}
               containerStyle={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: Platform.OS === "ios" ? 8 : 15,
               }}
            >
               <View
                  style={{
                     paddingLeft: spacing.sideOffset,
                     paddingRight: spacing.sideOffset,
                     flexDirection: "row",
                     justifyContent: "space-between",
                     alignItems: "center",
                     paddingTop: 8,
                  }}
               >
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     {showSport &&
                        <TouchableOpacity
                           onPress={() => {
                              setSelectedTab("sport");
                              dispatch(disableAdultMode());
                           }}
                        >
                           <View
                              style={{
                                 flexDirection: "row",
                                 justifyContent: "center",
                                 alignItems: "center",
                              }}
                           >
                              <View
                                 style={{
                                    paddingRight: 7,
                                    position: "relative",
                                    bottom: 10,
                                 }}
                              >
                                 <SportTabIcon width={32} height={32} />
                              </View>

                              <View
                                 style={{
                                    flexDirection: "column",
                                 }}
                              >
                                 <Text
                                    style={{
                                       ...textVariants.bigHeader,
                                       color: colors.text,
                                       fontSize: selectedTab == "sport" ? 20 : 16,

                                       paddingBottom: 3,
                                       marginBottom: 0,
                                    }}
                                 >
                                    体育
                                 </Text>

                                 <View
                                    style={{
                                       justifyContent: "center",
                                       paddingHorizontal: 12,
                                    }}
                                 >
                                    <View
                                       style={{
                                          borderTopWidth: selectedTab == "sport" ? 2 : 0,
                                          borderTopColor: "#ffffff",
                                          maxWidth: 20,
                                       }}
                                    ></View>

                                    <Text></Text>
                                 </View>
                              </View>
                           </View>
                        </TouchableOpacity>
                     }

                     {screenState.showAdultTab && (
                        <>
                           <TouchableOpacity
                              onPress={() => {
                                 setSelectedTab("xvod");
                              }}
                           >
                              <View
                                 style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: 15,
                                 }}
                              >
                                 <View
                                    style={{
                                       paddingRight: 7,
                                       position: "relative",
                                       bottom: 12,
                                    }}
                                 >
                                    <XvodTabIcon width={32} height={32} />
                                 </View>

                                 <View
                                    style={{
                                       flexDirection: "column",
                                    }}
                                 >
                                    <Text
                                       style={{
                                          ...textVariants.bigHeader,
                                          color: colors.text,
                                          fontSize: selectedTab == "xvod" ? 20 : 16,

                                          paddingBottom: 3,
                                          marginBottom: 0,
                                       }}
                                    >
                                       夜来香
                                    </Text>

                                    <View
                                       style={{
                                          justifyContent: "center",
                                          paddingHorizontal: 15,
                                       }}
                                    >
                                       <View
                                          style={{
                                             borderTopWidth: selectedTab == "xvod" ? 2 : 0,
                                             borderTopColor: "#ffffff",
                                             maxWidth: 22,
                                          }}
                                       ></View>

                                       <Text></Text>
                                    </View>
                                 </View>
                              </View>
                           </TouchableOpacity>
                        </>
                     )}
                  </View>
                  <TouchableOpacity
                     activeOpacity={
                        !KWConstants.isVip(userState.user) ||
                           KWConstants.isGuest(userState.user)
                           ? 0.5
                           : 1
                     }
                     onPress={() => {
                        if (
                           !KWConstants.isVip(userState.user)
                        ) {
                           setShowBecomeVIPOverlay(true);
                        }
                     }}
                  >


                     {!KWConstants.isVip(userState.user) ? (
                        <>
                           <View style={styles.headerContainerRight2}>
                              <VipEntry height={30} />
                           </View>
                        </>
                     ) : (
                        <>
                           <View style={styles.headerContainerRight}>
                              <Image
                                 style={styles.iconStyle}
                                 source={require("@static/images/profile/saveAnalyticsGpay.png")}
                              />
                              <Text
                                 style={{
                                    color: colors.text,
                                    fontSize: 14,
                                 }}
                              >
                                 VIP {vipRemainingDay}天
                              </Text>
                           </View>
                        </>
                     )}

                  </TouchableOpacity>
               </View>
               {selectedTab == "sport" &&
                  matchTabs &&
                  matchTabs.length > 0 &&
                  !isOffline && (
                     <View
                        style={{
                           flex: 1,
                           marginHorizontal: 10,
                           backgroundColor: "transparent",


                        }}
                     >
                        <MatchScheduleNavVip
                           setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                           tabList={matchTabs}
                        />
                        {!isVip &&
                           <BecomeVipOverlay
                              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                              showBecomeVIPOverlay={showBecomeVIPOverlay}
                              selectedTab={selectedTab}
                           />
                        }
                     </View>
                     // <Text>sport</Text>
                  )}

               {selectedTab == "xvod" && !isOffline && (
                  <View
                     style={{
                        flex: 1,
                        marginHorizontal: 10,
                        backgroundColor: "transparent",
                        marginTop: 5


                     }}
                  >
                     <XVodTab handleRejectEighteenPlus={handleRejectEighteenPlus} />
                     {!isVip &&
                        <>
                           <TouchableWithoutFeedback
                              style={styles.xvodBlur}
                              onPress={() => setShowBecomeVIPOverlay(true)}
                           >
                              <BlurView
                                 blurType="dark"
                                 blurAmount={2}
                                 style={styles.xvodBlur}
                                 overlayColor=""
                              />
                           </TouchableWithoutFeedback>
                           <BecomeVipOverlay
                              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                              showBecomeVIPOverlay={showBecomeVIPOverlay}
                              selectedTab={selectedTab}
                           />
                        </>

                     }
                  </View>
               )}
               {isOffline && <NoConnection onClickRetry={checkConnection} />}
            </ScreenContainer>
         </ImageBackground>
      </>
   );
};

const styles = StyleSheet.create({
   header: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
   },
   loading: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 1,
   },
   nav: {
      flexGrow: 1,
      justifyContent: "center",
      marginBottom: 10,
   },
   iconStyle: {
      height: 18,
      width: 18,
      marginRight: 5,
   },
   headerContainerRight: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(34, 35, 39 , 0.7)",
      paddingHorizontal: 10,
      borderRadius: 30,
      paddingVertical: 5,
      position: "relative",
      bottom: 8,
   },
   headerContainerRight2: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(34, 35, 39 , 0.7)",
      paddingHorizontal: 7,
      borderRadius: 30,
      paddingVertical: 1,
      position: "relative",
      bottom: 8,
   },
   xvodBlur: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      marginTop: 10,
      borderRadius: 15,

   }
});
