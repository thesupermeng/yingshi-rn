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
import ScreenContainer from "../components/container/ww_collection";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN, SHOW_ZF_CONST } from "@utility/ww_icon";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import wwShirtPhilippines from "../Sports/middleware/ww_klevin";
import { Url } from "../Sports/middleware/ww_phone_langkey";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/ww_bgvipxvod_apple";
import NoConnection from "../components/common/ww_downarrow";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/ww_animation";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import ww_runtime from "../../Umeng/ww_runtime";
import XvodTabIcon from "@static/images/checkboxBannerGoal.svg";
import SportTabIcon from "@static/images/cornerWhite.svg";
import XVodTab from "./VipPrivilege/ww_greyarrowup_shoot";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import {
  disableAdultMode,
  setAutoSelectSport,
  showAdultModeDisclaimer,
} from "@redux/actions/ww_hash";
import { BlurView } from "../components/blurView";
import { wwAbidetect } from "../../ww_leakchecker";
import VipEntry from '@static/images/splash/weiboPredictionwin.svg';
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
interface wwPlayDetail {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const showSport = (wwAbidetect.instance.tabConfig != null && wwAbidetect.instance.len == 5)
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<wwVertical>('userReducer');
  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

  const handleRejectEighteenPlus = () => {
       let hookss = 3.0;
    let configurei = 5.0;
    let dropdownv = String.fromCharCode(118,95,54,50,95,104,101,120,98,105,110,0);
    let panglek = String.fromCharCode(99,95,57,54,95,115,121,110,99,104,114,111,110,105,122,101,0);
    let cornerkicky: Array<any> = [537, 401, 93];
    let saveq = 1.0;
    let libsgcoreH = 0.0;
    let linkI = 0;
    let typingV = 5;
    let neonR = 2.0;
    let window_az6 = String.fromCharCode(115,112,101,101,100,104,113,95,112,95,48,0);
    let livenodatabgimgT: Array<any> = [String.fromCharCode(103,114,97,100,105,101,110,116,115,95,56,95,50,49,0), String.fromCharCode(104,101,116,97,95,116,95,57,52,0), String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,114,95,50,50,0)];
    let libfbn = 4.0;
    let vinit_ew = 2.0;
   let zhubos = 6159424 <= linkI;
   do {
      linkI >>= Math.min(4, Math.abs(parseInt(`${hookss}`) % 3));
      if (zhubos) {
         break;
      }
   } while ((livenodatabgimgT.length >= linkI) && zhubos);
   for (let h = 0; h < 3; h++) {
       let long_oI = false;
       let hiadK = 1.0;
       let gradlew5 = 1.0;
       let disconnectedR: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,114,115,95,104,95,53,49,0),false ], [String.fromCharCode(106,95,54,56,95,121,117,108,101,0),true ], [String.fromCharCode(108,95,55,48,95,105,110,118,111,107,101,114,0),false ]]);
      let moviesr = long_oI ? !long_oI : long_oI;
      do {
         long_oI = null == disconnectedR.get(`${long_oI}`);
         if (moviesr) {
            break;
         }
      } while (moviesr && (long_oI));
          let libhermesk = 0.0;
          let librrch = 2;
          let privacyW = false;
         hiadK += 1 - parseInt(`${hiadK}`);
         libhermesk /= Math.max(1, parseFloat(`${1}`));
         librrch ^= (parseInt(`${libhermesk}`) << (Math.min(3, Math.abs((privacyW ? 5 : 2)))));
         privacyW = !privacyW;
         disconnectedR = new Map([[`${disconnectedR.size}`, parseInt(`${hiadK}`)]]);
      for (let l = 0; l < 1; l++) {
         hiadK -= (parseInt(`${hiadK}`) * (long_oI ? 4 : 3));
      }
         hiadK += 1 + parseInt(`${hiadK}`);
      for (let t = 0; t < 3; t++) {
         gradlew5 /= Math.max(3, ((long_oI ? 4 : 3) - parseInt(`${hiadK}`)));
      }
      let time_cL = 7653498 <= disconnectedR.size;
      do {
          let nbatrophy7 = String.fromCharCode(120,95,49,49,95,115,121,115,105,110,102,111,0);
         disconnectedR = new Map([[`${gradlew5}`, parseInt(`${gradlew5}`) + nbatrophy7.length]]);
         if (time_cL) {
            break;
         }
      } while (time_cL && ((disconnectedR.size - 3) < 5 || (3.63 + hiadK) < 3.44));
         hiadK *= parseInt(`${gradlew5}`);
      for (let r = 0; r < 1; r++) {
         gradlew5 += parseInt(`${gradlew5}`) % (Math.max(1, 7));
      }
          let iconbellactive0: Array<any> = [String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,104,95,49,50,0), String.fromCharCode(104,95,57,50,95,97,114,99,0)];
          let traminis = String.fromCharCode(112,95,51,55,95,100,105,114,101,99,116,120,0);
          let megaphoneE = 1.0;
         gradlew5 /= Math.max((String.fromCharCode(53,0) == traminis ? parseInt(`${hiadK}`) : traminis.length), 1);
         iconbellactive0 = [2];
         megaphoneE *= 2;
         hiadK *= ((long_oI ? 2 : 4) / (Math.max(parseInt(`${hiadK}`), 6)));
         long_oI = gradlew5 == 9.95;
      libsgcoreH += ((long_oI ? 4 : 1) ^ parseInt(`${neonR}`));
   }
   while ((typingV / (Math.max(5, neonR))) == 5.93 || (typingV / (Math.max(neonR, 7))) == 5.93) {
      typingV >>= Math.min(1, Math.abs((dropdownv == String.fromCharCode(106,0) ? panglek.length : dropdownv.length)));
      break;
   }
   for (let r = 0; r < 1; r++) {
      cornerkicky.push(dropdownv.length - parseInt(`${libsgcoreH}`));
   }
   if ((saveq - 2.68) <= 1.75) {
      saveq /= Math.max(parseFloat(`${3}`), 4);
   }
   if (2 < (5 / (Math.max(7, window_az6.length)))) {
       let leftc = 4.0;
       let annerd: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,95,53,95,54,53,0),true ], [String.fromCharCode(120,95,49,50,95,111,112,101,110,105,110,103,0),true ]]);
       let libswresamplep = String.fromCharCode(115,108,111,112,101,95,48,95,51,55,0);
       let photo6: Map<any, any> = new Map([[String.fromCharCode(110,105,100,115,110,95,102,95,55,51,0),640], [String.fromCharCode(121,95,50,56,95,108,97,112,108,97,99,101,0),272], [String.fromCharCode(113,119,111,114,100,95,54,95,56,51,0),619]]);
      if (2 >= (annerd.size * 2)) {
          let executorF = 0.0;
          let giftbuttonI = String.fromCharCode(114,101,102,105,110,101,100,95,103,95,50,55,0);
         leftc *= libswresamplep.length;
         executorF *= parseFloat(`${1 >> (Math.min(4, giftbuttonI.length))}`);
         giftbuttonI = `${parseInt(`${executorF}`) / (Math.max(1, giftbuttonI.length))}`;
      }
          let gifgoalbgC = 1.0;
          let pressureh = String.fromCharCode(122,95,52,48,95,100,105,115,97,108,108,111,119,0);
         annerd.set(pressureh, 1);
         gifgoalbgC *= parseFloat(`${parseInt(`${gifgoalbgC}`)}`);
         pressureh += `${parseInt(`${gifgoalbgC}`) / 2}`;
         annerd.set(libswresamplep, 2);
      if (1 >= photo6.size) {
         libswresamplep = `${2 ^ parseInt(`${leftc}`)}`;
      }
      for (let j = 0; j < 2; j++) {
          let modelsX: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,95,97,100,100,114,105,110,102,111,0),String.fromCharCode(116,95,53,49,95,100,101,115,99,114,105,98,101,0)], [String.fromCharCode(115,95,53,0),String.fromCharCode(104,97,110,110,101,108,95,51,95,48,0)], [String.fromCharCode(117,95,53,57,95,112,115,102,105,108,101,0),String.fromCharCode(112,105,100,95,57,95,55,49,0)]]);
          let package_zL = 1;
         libswresamplep = `${(libswresamplep == String.fromCharCode(116,0) ? libswresamplep.length : photo6.size)}`;
         modelsX.set(`${package_zL}`, package_zL);
      }
         photo6.set(libswresamplep, (String.fromCharCode(119,0) == libswresamplep ? annerd.size : libswresamplep.length));
          let libjsin = 0.0;
          let predictionactivex = String.fromCharCode(104,111,117,114,108,121,95,106,95,54,54,0);
         leftc *= parseInt(`${libjsin}`);
         libjsin -= (String.fromCharCode(112,0) == predictionactivex ? predictionactivex.length : predictionactivex.length);
      for (let e = 0; e < 1; e++) {
         photo6.set(`${libswresamplep}`, 2);
      }
         photo6 = new Map([[`${photo6.size}`, parseInt(`${leftc}`)]]);
      for (let v = 0; v < 2; v++) {
          let rewindh = String.fromCharCode(97,95,55,54,95,99,111,117,110,116,113,117,97,110,116,0);
          let phoneshareN = false;
          let webviewb = String.fromCharCode(99,108,101,97,114,97,108,108,95,105,95,56,49,0);
         libswresamplep += `${photo6.size >> (Math.min(Math.abs(3), 2))}`;
         rewindh += `${((phoneshareN ? 5 : 5))}`;
         phoneshareN = (57 >= ((!phoneshareN ? 57 : webviewb.length) / (Math.max(webviewb.length, 3))));
      }
         libswresamplep = `${annerd.size >> (Math.min(Math.abs(2), 1))}`;
      if (annerd.size > libswresamplep.length) {
          let searchA = false;
          let nativeb = 0.0;
          let changeK = 1.0;
         libswresamplep += `${3 + parseInt(`${leftc}`)}`;
         searchA = 58.52 >= changeK || !searchA;
         nativeb *= parseFloat(`${parseInt(`${changeK}`) + parseInt(`${nativeb}`)}`);
      }
      cornerkicky.push(cornerkicky.length ^ parseInt(`${hookss}`));
   }
       let gradlewP = 1.0;
       let albuma = String.fromCharCode(97,112,112,115,95,97,95,50,56,0);
         gradlewP *= parseInt(`${gradlewP}`) / 1;
      while (albuma.length == 2) {
         albuma = `${parseInt(`${gradlewP}`)}`;
         break;
      }
      if ((albuma.length + parseInt(`${gradlewP}`)) > 2) {
          let libturbomodulejsijniK = 5.0;
          let privatechatbgt = 3.0;
          let v_managerY: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,116,101,115,116,111,114,105,103,0),656], [String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,107,95,56,56,0),841], [String.fromCharCode(115,95,54,52,0),271]]);
          let indicatorw = String.fromCharCode(109,105,109,101,95,99,95,52,52,0);
          let invite5 = 2.0;
         albuma += `${parseInt(`${libturbomodulejsijniK}`)}`;
         privatechatbgt -= v_managerY.size;
         v_managerY = new Map([[indicatorw, parseInt(`${privatechatbgt}`) << (Math.min(indicatorw.length, 3))]]);
         invite5 += (indicatorw == String.fromCharCode(118,0) ? v_managerY.size : indicatorw.length);
      }
          let modityT: Array<any> = [String.fromCharCode(112,97,115,115,112,111,114,116,95,122,95,56,56,0), String.fromCharCode(104,95,57,57,95,114,101,99,104,117,110,107,0)];
         gradlewP += 2;
         modityT.push(modityT.length % (Math.max(1, 9)));
      for (let u = 0; u < 1; u++) {
         gradlewP -= 3 / (Math.max(4, albuma.length));
      }
      for (let x = 0; x < 3; x++) {
          let navigationn = 2.0;
          let fileG: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,101,114,95,115,95,57,48,0),382], [String.fromCharCode(99,114,111,119,100,105,110,95,119,95,54,56,0),134]]);
          let photoI = String.fromCharCode(106,95,50,56,95,100,111,116,115,0);
          let appsu = 2;
          let libreactnativejnin = String.fromCharCode(108,111,110,103,110,111,105,115,101,95,103,95,48,0);
         albuma += "3";
         navigationn *= (parseFloat(`${libreactnativejnin == String.fromCharCode(109,0) ? libreactnativejnin.length : photoI.length}`));
         fileG = new Map([[photoI, parseInt(`${navigationn}`) >> (Math.min(Math.abs(2), 4))]]);
         appsu += libreactnativejnin.length | fileG.size;
      }
      hookss *= linkI;
       let update_mU = 0;
       let libjsijniprofilerL = String.fromCharCode(113,95,56,51,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0);
       let listQ = String.fromCharCode(117,112,103,114,97,100,101,100,95,117,95,49,56,0);
      if (libjsijniprofilerL == String.fromCharCode(51,0) || listQ != String.fromCharCode(65,0)) {
          let dependenciesF = true;
          let giftbuttonb = String.fromCharCode(112,95,57,53,95,104,121,112,104,101,110,97,116,101,100,0);
          let modelt = true;
          let detailf = String.fromCharCode(112,111,108,105,99,105,101,115,95,104,95,51,0);
         listQ = `${(update_mU >> (Math.min(2, Math.abs((dependenciesF ? 2 : 1)))))}`;
         dependenciesF = modelt && detailf.length == 32;
         giftbuttonb += `${((modelt ? 4 : 4) & 2)}`;
         detailf = `${((modelt ? 3 : 1) ^ 1)}`;
      }
         libjsijniprofilerL += "1";
      panglek += `${parseInt(`${neonR}`)}`;
   let filtere = window_az6.length <= 6819782;
   do {
      window_az6 += `${cornerkicky.length / (Math.max(9, parseInt(`${libsgcoreH}`)))}`;
      if (filtere) {
         break;
      }
   } while (filtere && (4.18 == (neonR / 3.33) || (parseInt(`${neonR}`) / 5) == 1));
   for (let a = 0; a < 2; a++) {
      typingV |= cornerkicky.length / 1;
   }
   let libfb0 = 6116780 >= linkI;
   do {
      linkI ^= panglek.length - parseInt(`${saveq}`);
      if (libfb0) {
         break;
      }
   } while (libfb0 && (linkI < 1));
       let pathq = 0.0;
          let usernamee = true;
          let hookS = 5.0;
          let security9: Map<any, any> = new Map([[String.fromCharCode(121,121,121,121,95,105,95,54,52,0),942], [String.fromCharCode(106,95,50,49,95,117,110,105,116,0),422], [String.fromCharCode(119,104,101,114,101,95,114,95,55,57,0),783]]);
         pathq += ((usernamee ? 3 : 2) << (Math.min(Math.abs(parseInt(`${hookS}`)), 4)));
         usernamee = (security9.size & security9.size) == 50;
         hookS -= security9.size;
         pathq -= parseInt(`${pathq}`);
         pathq += parseInt(`${pathq}`);
      neonR /= Math.max(2, 1 + window_az6.length);
   for (let p = 0; p < 3; p++) {
       let libane_: Array<any> = [String.fromCharCode(108,105,98,99,101,108,116,95,56,95,49,57,0), String.fromCharCode(118,95,53,52,95,119,97,108,0)];
      for (let s = 0; s < 2; s++) {
         libane_ = [libane_.length - 1];
      }
      if ((5 ^ libane_.length) < 2 || (5 ^ libane_.length) < 4) {
          let update_fx: Map<any, any> = new Map([[String.fromCharCode(101,110,100,115,95,118,95,57,54,0),String.fromCharCode(102,111,114,99,101,95,97,95,50,56,0)], [String.fromCharCode(105,95,55,49,95,97,110,103,108,101,0),String.fromCharCode(122,95,53,53,95,119,97,118,101,115,0)]]);
          let videojs3 = 4;
          let mbsplash4 = 2.0;
          let libfabricjniX = 3.0;
         libane_.push(parseInt(`${mbsplash4}`) << (Math.min(Math.abs(2), 3)));
         update_fx = new Map([[`${update_fx.size}`, 2]]);
         videojs3 *= update_fx.size * 2;
         mbsplash4 -= videojs3 << (Math.min(Math.abs(1), 1));
         libfabricjniX *= parseFloat(`${3}`);
      }
      while ((libane_.length >> (Math.min(libane_.length, 2))) <= 5 && (libane_.length >> (Math.min(Math.abs(5), 3))) <= 3) {
         libane_.push(libane_.length);
         break;
      }
      cornerkicky = [window_az6.length];
   }
      linkI >>= Math.min(Math.abs((String.fromCharCode(76,0) == panglek ? typingV : panglek.length)), 4);
       let pangleq = String.fromCharCode(118,95,54,57,95,114,101,97,99,116,0);
       let coreX = 2;
          let update_8U = 2.0;
          let nterstitialR = String.fromCharCode(114,116,109,112,99,114,121,112,116,95,108,95,50,0);
          let libruntimeexecutorg = String.fromCharCode(112,114,111,109,105,110,101,110,116,95,112,95,54,52,0);
         coreX *= nterstitialR.length + 2;
         update_8U /= Math.max(3, parseInt(`${update_8U}`) / (Math.max(4, libruntimeexecutorg.length)));
         nterstitialR = `${libruntimeexecutorg.length >> (Math.min(2, Math.abs(parseInt(`${update_8U}`))))}`;
      if (2 < (coreX << (Math.min(pangleq.length, 3)))) {
         pangleq += `${coreX / 2}`;
      }
      while (1 <= (coreX ^ pangleq.length)) {
          let diceT = 5.0;
          let gemfilea = String.fromCharCode(115,117,98,108,97,121,111,117,116,95,115,95,55,48,0);
         coreX |= 3 << (Math.min(3, Math.abs(coreX)));
         diceT += (parseFloat(`${gemfilea == String.fromCharCode(100,0) ? gemfilea.length : parseInt(`${diceT}`)}`));
         break;
      }
       let main_kA = 1;
       let rank8 = 5;
      if ((main_kA - 2) < 4 || (rank8 - 2) < 3) {
         main_kA *= main_kA & pangleq.length;
      }
      while ((coreX << (Math.min(3, Math.abs(rank8)))) > 1 && 1 > (1 << (Math.min(5, Math.abs(coreX))))) {
         coreX /= Math.max(2, main_kA);
         break;
      }
      linkI += livenodatabgimgT.length;
      cornerkicky = [2];
      typingV -= 1;
   if (4 <= (1 + panglek.length) || 5 <= (livenodatabgimgT.length + 1)) {
      livenodatabgimgT = [3 & livenodatabgimgT.length];
   }
      livenodatabgimgT = [parseInt(`${libsgcoreH}`) - panglek.length];
   let splash4 = 6233279.0 <= neonR;
   do {
      neonR -= livenodatabgimgT.length & panglek.length;
      if (splash4) {
         break;
      }
   } while ((neonR > window_az6.length) && splash4);
      libsgcoreH += parseInt(`${configurei}`) - 1;
   for (let u = 0; u < 3; u++) {
      saveq -= parseFloat(`${livenodatabgimgT.length % (Math.max(4, typingV))}`);
   }
      linkI |= cornerkicky.length;
   for (let h = 0; h < 2; h++) {
       let frame_3Y = false;
       let gradlev: Array<any> = [323, 726];
      for (let e = 0; e < 2; e++) {
         gradlev = [1 & gradlev.length];
      }
      while (3 > (gradlev.length & 5)) {
          let sortB = String.fromCharCode(101,120,99,108,95,120,95,51,52,0);
         frame_3Y = 17 <= gradlev.length;
         sortB = "2";
         break;
      }
       let heartT: Map<any, any> = new Map([[String.fromCharCode(105,95,49,56,95,119,100,108,102,99,110,0),String.fromCharCode(105,95,50,50,95,98,105,110,0)], [String.fromCharCode(109,101,114,103,105,110,103,95,112,95,55,52,0),String.fromCharCode(97,95,57,55,95,99,111,109,109,117,110,105,99,97,116,111,114,0)], [String.fromCharCode(112,95,49,50,95,109,111,118,101,109,101,110,116,0),String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,95,111,95,49,0)]]);
      for (let e = 0; e < 1; e++) {
         frame_3Y = !frame_3Y || gradlev.length == 10;
      }
      for (let o = 0; o < 2; o++) {
         heartT.set(`${gradlev.length}`, 2);
      }
         gradlev = [gradlev.length];
      hookss -= 3;
   }
   while ((5 + dropdownv.length) < 1 || 1.94 < (parseFloat(`${dropdownv.length}`) + configurei)) {
      configurei += parseFloat(`${3 / (Math.max(1, parseInt(`${hookss}`)))}`);
      break;
   }
      configurei *= parseFloat(`${1 ^ dropdownv.length}`);
   let interstitialT = configurei <= 8393114.0;
   do {
      configurei *= parseFloat(`${parseInt(`${saveq}`)}`);
      if (interstitialT) {
         break;
      }
   } while ((2 > (typingV - parseInt(`${configurei}`)) || (typingV % 2) > 5) && interstitialT);
      cornerkicky.push(1);
   if (livenodatabgimgT.length > 3) {
      neonR *= parseInt(`${saveq}`) / 3;
   }

    setSelectedTab("macauFile");
  };

  useEffect(() => {
    if (screenState.autoSelectSport == true) {
      dispatch(setAutoSelectSport(false));
      setSelectedTab("macauFile");
    }
  }, [screenState.autoSelectSport])

  
  useFocusEffect(useCallback(() => {
    ww_runtime.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      wwShirtPhilippines.call(Url.sportTypes, {}, "GET").then((res): wwPlayDetail[] => {
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
       let textinputS = String.fromCharCode(105,112,112,108,101,95,56,95,52,54,0);
    let dragclose6: Map<any, any> = new Map([[String.fromCharCode(109,95,52,49,95,112,108,97,121,0),false ], [String.fromCharCode(110,97,109,101,95,116,95,56,53,0),false ], [String.fromCharCode(101,95,55,49,95,112,114,111,109,111,116,105,110,103,0),true ]]);
    let orangeclockq = String.fromCharCode(98,101,110,99,95,106,95,54,55,0);
    let libavfilterL = 1.0;
    let huaweim = false;
    let tumbnailr = String.fromCharCode(109,105,120,101,114,95,49,95,52,49,0);
    let roomf = 1.0;
    let textA = String.fromCharCode(106,95,49,48,95,100,101,115,101,108,101,99,116,0);
    let placeholderQ = 0;
    let awayN = 3.0;
    let progressI = String.fromCharCode(105,115,101,109,112,116,121,95,120,95,55,53,0);
    let dacccfaabfbcbadeebddcabacdffdbr = 4.0;
      dragclose6.set(`${awayN}`, placeholderQ);
       let libjsiy = String.fromCharCode(97,100,105,100,95,49,95,51,51,0);
       let usernameF = String.fromCharCode(107,95,55,52,95,102,105,120,117,112,0);
       let stylef = String.fromCharCode(99,95,50,51,95,109,101,103,97,103,114,111,117,112,0);
      let networkp = stylef == String.fromCharCode(55,98,118,118,52,120,112,53,109,99,0);
      do {
          let typesN = 5.0;
          let watchi: Map<any, any> = new Map([[String.fromCharCode(97,115,99,98,110,95,101,95,55,0),true ], [String.fromCharCode(106,95,54,55,95,109,101,115,115,97,103,101,115,0),false ], [String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,113,95,49,57,0),false ]]);
         stylef += `${usernameF.length}`;
         typesN *= parseInt(`${typesN}`);
         watchi.set(`${typesN}`, watchi.size);
         if (networkp) {
            break;
         }
      } while ((libjsiy.length == 4) && networkp);
         usernameF = `${usernameF.length}`;
      let path4 = stylef.length <= 9810881;
      do {
         stylef = `${libjsiy.length}`;
         if (path4) {
            break;
         }
      } while ((usernameF.length <= 3) && path4);
      let shirtf = libjsiy == String.fromCharCode(55,50,121,120,98,103,122,122,0);
      do {
          let nbatrophyf = 1.0;
         libjsiy = `${parseInt(`${nbatrophyf}`) | 1}`;
         if (shirtf) {
            break;
         }
      } while (shirtf && (libjsiy.length > usernameF.length));
         usernameF = `${(String.fromCharCode(52,0) == libjsiy ? usernameF.length : libjsiy.length)}`;
      for (let c = 0; c < 1; c++) {
         usernameF += `${3 + libjsiy.length}`;
      }
      if (stylef == String.fromCharCode(80,0)) {
         usernameF = "3";
      }
      while (usernameF.includes(libjsiy)) {
         usernameF = `${stylef.length / 2}`;
         break;
      }
         stylef = `${(usernameF == String.fromCharCode(82,0) ? usernameF.length : libjsiy.length)}`;
      awayN += (orangeclockq == String.fromCharCode(85,0) ? parseInt(`${roomf}`) : orangeclockq.length);
   if (parseInt(`${awayN}`) >= orangeclockq.length) {
      awayN *= tumbnailr.length;
   }
      libavfilterL *= parseFloat(`${dragclose6.size}`);
      awayN *= parseInt(`${libavfilterL}`) * 1;
   while (textA.endsWith(`${placeholderQ}`)) {
      textA += `${((huaweim ? 2 : 4) % (Math.max(tumbnailr.length, 8)))}`;
      break;
   }
   while (!huaweim) {
      huaweim = textA.includes(`${placeholderQ}`);
      break;
   }

    const state = await NetInfo.fetch();

   while (placeholderQ <= 5) {
       let livenodatabgimgo: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,111,114,95,51,95,51,49,0),792], [String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,95,99,95,55,53,0),10]]);
       let shootyesgoal2 = 1.0;
       let suggestion_: Array<any> = [887, 341];
       let readF = 1.0;
       let leagueb = true;
      while ((2 + livenodatabgimgo.size) >= 2 || livenodatabgimgo.size >= 2) {
          let gesturesw = String.fromCharCode(97,98,115,95,105,95,56,54,0);
          let reacts = String.fromCharCode(98,97,110,110,101,100,95,122,95,51,48,0);
          let iconmorel: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,110,101,115,115,95,119,95,53,48,0),354], [String.fromCharCode(112,95,55,50,95,116,101,115,116,98,114,105,100,103,101,0),557]]);
          let arrowupM = 0.0;
         livenodatabgimgo = new Map([[`${shootyesgoal2}`, 3 - parseInt(`${readF}`)]]);
         gesturesw += "1";
         reacts += `${reacts.length | parseInt(`${arrowupM}`)}`;
         iconmorel = new Map([[gesturesw, gesturesw.length >> (Math.min(Math.abs(1), 3))]]);
         arrowupM -= parseFloat(`${2 & reacts.length}`);
         break;
      }
         livenodatabgimgo.set(`${shootyesgoal2}`, parseInt(`${shootyesgoal2}`) & 3);
      for (let w = 0; w < 2; w++) {
          let reducerI = String.fromCharCode(103,95,57,49,95,116,101,109,112,111,0);
          let product_ = String.fromCharCode(117,95,56,53,95,114,101,100,118,0);
         readF += product_.length;
         reducerI += `${(String.fromCharCode(100,0) == reducerI ? reducerI.length : reducerI.length)}`;
         product_ += "1";
      }
      if (4.64 > shootyesgoal2) {
         shootyesgoal2 += 1 + parseInt(`${readF}`);
      }
          let defaultpredictionprofileB = String.fromCharCode(109,111,118,101,95,49,95,51,56,0);
          let graph_: Array<any> = [578, 849];
          let libyogaG: Map<any, any> = new Map([[String.fromCharCode(101,95,56,48,0),true ], [String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,52,95,54,50,0),true ], [String.fromCharCode(102,95,57,56,95,118,97,100,100,113,0),false ]]);
         suggestion_.push(1);
         defaultpredictionprofileB += `${(String.fromCharCode(89,0) == defaultpredictionprofileB ? graph_.length : defaultpredictionprofileB.length)}`;
         graph_.push((defaultpredictionprofileB == String.fromCharCode(88,0) ? graph_.length : defaultpredictionprofileB.length));
         libyogaG = new Map([[`${libyogaG.size}`, (defaultpredictionprofileB == String.fromCharCode(113,0) ? defaultpredictionprofileB.length : libyogaG.size)]]);
         leagueb = readF > shootyesgoal2;
          let mbridgeM: Map<any, any> = new Map([[String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,105,95,51,50,0),81], [String.fromCharCode(112,97,99,105,110,103,95,121,95,55,53,0),828]]);
          let libpangleflippedS = String.fromCharCode(98,95,49,50,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0);
          let currento = true;
         shootyesgoal2 *= 2;
         mbridgeM = new Map([[`${mbridgeM.size}`, 3]]);
         libpangleflippedS = "1";
         currento = (64 <= ((currento ? 64 : mbridgeM.size) % (Math.max(mbridgeM.size, 5))));
          let backicon8 = 0;
          let tailu = String.fromCharCode(104,114,101,97,100,95,113,95,49,48,48,0);
          let viewsG = 2;
         shootyesgoal2 /= Math.max(3 & parseInt(`${readF}`), 1);
         backicon8 ^= viewsG + tailu.length;
         tailu += `${(String.fromCharCode(74,0) == tailu ? tailu.length : viewsG)}`;
      let select9 = leagueb ? !leagueb : leagueb;
      do {
         leagueb = readF == suggestion_.length;
         if (select9) {
            break;
         }
      } while (((2 | suggestion_.length) >= 3) && select9);
      let giflivestreamingR = shootyesgoal2 <= 7437115.0;
      do {
         shootyesgoal2 *= parseInt(`${shootyesgoal2}`);
         if (giflivestreamingR) {
            break;
         }
      } while ((!leagueb && (shootyesgoal2 * 3.45) < 5.26) && giflivestreamingR);
          let downloaderJ = String.fromCharCode(107,95,52,48,95,98,105,110,107,100,97,116,97,0);
         readF *= parseInt(`${readF}`) >> (Math.min(Math.abs(livenodatabgimgo.size), 1));
         downloaderJ += `${downloaderJ.length}`;
          let profileactiveF: Array<any> = [135, 46];
         suggestion_ = [3];
         profileactiveF = [3 * profileactiveF.length];
         leagueb = 83 <= suggestion_.length;
      for (let c = 0; c < 2; c++) {
         leagueb = livenodatabgimgo.size > 25 && 93.78 > shootyesgoal2;
      }
          let static_eM = 2.0;
          let unimplementedviewx = 2;
          let iconshareD = String.fromCharCode(111,95,50,56,95,98,105,110,100,0);
         readF += ((leagueb ? 1 : 5) + parseInt(`${static_eM}`));
         static_eM -= unimplementedviewx;
         unimplementedviewx -= iconshareD.length;
         iconshareD += `${unimplementedviewx}`;
      placeholderQ += 2;
      break;
   }
       let temp4 = 4.0;
       let malaysia1: Map<any, any> = new Map([[String.fromCharCode(122,95,51,49,95,108,117,114,97,108,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(116,95,53,53,95,105,110,105,116,105,97,108,105,122,105,110,103,0),true ], [String.fromCharCode(116,95,55,54,95,101,120,112,114,0),false ]]);
       let libreactnativejniw = false;
         malaysia1 = new Map([[`${malaysia1.size}`, malaysia1.size]]);
          let textlayoutmanager0: Array<any> = [483, 398];
         malaysia1.set(`${temp4}`, malaysia1.size - 1);
         textlayoutmanager0.push(textlayoutmanager0.length ^ 3);
      if (temp4 <= 1.69) {
          let fastj = String.fromCharCode(107,95,53,53,95,118,111,108,117,109,101,0);
          let forwardB = String.fromCharCode(115,95,57,50,95,112,114,101,115,101,114,118,101,115,0);
          let gradleG = String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,95,53,95,53,50,0);
          let minivodx = 4.0;
         temp4 *= (parseFloat(`${String.fromCharCode(102,0) == forwardB ? forwardB.length : parseInt(`${minivodx}`)}`));
         fastj += `${gradleG.length}`;
         gradleG += `${3 % (Math.max(3, fastj.length))}`;
         minivodx *= 3 / (Math.max(8, fastj.length));
      }
          let connectionb = 5;
          let becomeJ: Map<any, any> = new Map([[String.fromCharCode(109,95,52,51,95,101,118,97,108,117,97,116,101,0),String.fromCharCode(120,95,51,51,95,118,105,100,101,111,0)], [String.fromCharCode(120,95,48,95,100,101,101,112,0),String.fromCharCode(98,117,102,102,101,114,101,100,95,101,95,55,48,0)], [String.fromCharCode(100,105,118,105,115,111,114,95,57,95,51,0),String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,95,113,95,57,56,0)]]);
         malaysia1 = new Map([[`${malaysia1.size}`, 2]]);
         connectionb &= 3;
         becomeJ = new Map([[`${becomeJ.size}`, connectionb % 1]]);
      let fastt = malaysia1.size <= 8113231;
      do {
         malaysia1 = new Map([[`${malaysia1.size}`, 2 << (Math.min(3, Math.abs(malaysia1.size)))]]);
         if (fastt) {
            break;
         }
      } while ((malaysia1.size == 1) && fastt);
         malaysia1.set(`${libreactnativejniw}`, 2 & parseInt(`${temp4}`));
      while (4.64 == temp4 && 4.99 == (temp4 / 4.64)) {
         temp4 += parseFloat(`${parseInt(`${temp4}`) % (Math.max(malaysia1.size, 6))}`);
         break;
      }
      let dropdowng = 8194545.0 <= temp4;
      do {
         temp4 -= parseFloat(`${parseInt(`${temp4}`)}`);
         if (dropdowng) {
            break;
         }
      } while ((!libreactnativejniw) && dropdowng);
      for (let e = 0; e < 2; e++) {
         libreactnativejniw = malaysia1.size < 71;
      }
      textA = `${dragclose6.size % (Math.max(9, textinputS.length))}`;
      textA = `${(orangeclockq == String.fromCharCode(69,0) ? orangeclockq.length : parseInt(`${awayN}`))}`;
   while (libavfilterL < 2.96) {
      libavfilterL *= parseFloat(`${orangeclockq.length * 2}`);
      break;
   }
   for (let v = 0; v < 2; v++) {
       let corner7 = String.fromCharCode(119,97,116,99,104,101,100,95,105,95,52,56,0);
       let reactnativejsM = true;
       let tooltipsb = 2.0;
       let yellowO = 2.0;
       let whitetickl: Array<any> = [435, 974, 124];
          let weatherc = String.fromCharCode(114,95,56,50,95,102,111,114,105,0);
          let verticala = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,48,95,54,54,0);
          let mbbanner2 = 3.0;
         whitetickl = [1];
         weatherc = `${parseInt(`${mbbanner2}`)}`;
         verticala = `${weatherc.length << (Math.min(Math.abs(3), 5))}`;
         mbbanner2 /= Math.max(1, (parseFloat(`${String.fromCharCode(122,0) == verticala ? parseInt(`${mbbanner2}`) : verticala.length}`)));
      for (let q = 0; q < 1; q++) {
         reactnativejsM = corner7.endsWith(`${tooltipsb}`);
      }
      for (let q = 0; q < 3; q++) {
         corner7 = `${(2 | (reactnativejsM ? 3 : 3))}`;
      }
         whitetickl.push(parseInt(`${tooltipsb}`) & parseInt(`${yellowO}`));
      for (let r = 0; r < 1; r++) {
          let runtimeX = String.fromCharCode(113,95,52,51,95,103,114,97,110,117,108,101,0);
          let graphicsW: Array<any> = [696, 45, 306];
          let mutedo = String.fromCharCode(118,95,55,51,95,105,110,118,101,114,115,105,111,110,0);
          let mbbannerH = String.fromCharCode(118,95,51,50,95,98,115,102,115,0);
          let downloadingK = 1.0;
         reactnativejsM = mutedo.length >= graphicsW.length;
         runtimeX = "1";
         graphicsW.push(parseInt(`${downloadingK}`));
         mutedo = `${runtimeX.length | mbbannerH.length}`;
         mbbannerH += `${2 | parseInt(`${downloadingK}`)}`;
      }
          let streamingh = String.fromCharCode(118,95,57,53,95,98,111,117,110,99,101,0);
          let f_manageru = false;
          let balli = String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,51,95,57,57,0);
         yellowO += (parseFloat(`${streamingh.length * (f_manageru ? 1 : 1)}`));
         streamingh += "2";
         f_manageru = balli.length <= balli.length;
      while (tooltipsb <= 1.12) {
         tooltipsb += parseInt(`${yellowO}`);
         break;
      }
      for (let l = 0; l < 3; l++) {
          let floating3 = 1.0;
          let rewind2: Map<any, any> = new Map([[String.fromCharCode(97,115,115,105,103,110,95,112,95,55,48,0),true ], [String.fromCharCode(118,95,52,49,95,117,110,112,114,111,116,101,99,116,0),true ]]);
          let final_ksC = String.fromCharCode(114,103,116,99,115,95,117,95,57,53,0);
         yellowO /= Math.max(parseFloat(`${whitetickl.length}`), 5);
         floating3 /= Math.max(parseInt(`${floating3}`), 5);
         rewind2.set(`${final_ksC}`, final_ksC.length >> (Math.min(Math.abs(2), 1)));
      }
          let binddatasZ: Array<any> = [String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,101,95,50,0), String.fromCharCode(112,105,110,110,105,110,103,95,99,95,55,52,0), String.fromCharCode(116,111,112,105,99,95,122,95,53,52,0)];
          let hookR = true;
          let libhermesi = String.fromCharCode(120,95,50,55,95,103,108,121,112,104,115,0);
         tooltipsb *= binddatasZ.length << (Math.min(Math.abs(3), 1));
         binddatasZ.push(((hookR ? 2 : 5) ^ libhermesi.length));
         hookR = libhermesi.length >= 99;
      for (let e = 0; e < 2; e++) {
          let weiboD: Array<any> = [993, 838, 94];
         tooltipsb *= 3 & whitetickl.length;
         weiboD = [weiboD.length * 3];
      }
      let unreadM = reactnativejsM ? !reactnativejsM : reactnativejsM;
      do {
         reactnativejsM = 90.66 > tooltipsb && whitetickl.length > 15;
         if (unreadM) {
            break;
         }
      } while (unreadM && (yellowO < 1.54));
         whitetickl = [parseInt(`${tooltipsb}`) + 3];
          let mbridgeJ = 0.0;
         reactnativejsM = (corner7.length - tooltipsb) == 83.10;
         mbridgeJ /= Math.max(2, parseInt(`${mbridgeJ}`) - 3);
      while (!reactnativejsM && corner7.length <= 1) {
         corner7 += `${1 << (Math.min(Math.abs(parseInt(`${tooltipsb}`)), 4))}`;
         break;
      }
          let contexte = 5.0;
          let ticki = false;
          let greytickT = String.fromCharCode(102,97,105,108,105,110,103,95,101,95,50,56,0);
         yellowO += parseFloat(`${2 ^ greytickT.length}`);
         contexte -= (parseInt(`${contexte}`) + (ticki ? 4 : 2));
         ticki = !ticki;
         greytickT = `${(parseInt(`${contexte}`) >> (Math.min(4, Math.abs((ticki ? 2 : 4)))))}`;
      placeholderQ %= Math.max(((huaweim ? 4 : 2)), 3);
   }
   if (!tumbnailr.endsWith(`${orangeclockq.length}`)) {
       let chatX = String.fromCharCode(117,95,52,57,95,109,105,115,109,97,116,99,104,101,115,0);
       let fillH = String.fromCharCode(104,95,57,49,95,121,98,114,105,0);
       let e_countn = 2.0;
         e_countn *= 1;
      for (let o = 0; o < 2; o++) {
          let darkq = String.fromCharCode(102,95,49,52,95,116,100,115,102,0);
          let screen9 = String.fromCharCode(103,101,111,99,111,100,101,115,95,50,95,57,57,0);
          let bodanZ = 3.0;
          let nbatrophy3: Array<any> = [894, 743];
          let agreement5 = String.fromCharCode(112,95,52,48,95,99,105,112,104,101,114,115,0);
         e_countn -= agreement5.length;
         darkq = `${screen9.length}`;
         screen9 += "1";
         bodanZ /= Math.max(parseFloat(`${nbatrophy3.length - screen9.length}`), 5);
         nbatrophy3.push(parseInt(`${bodanZ}`) % 3);
         agreement5 = "3";
      }
      while (!chatX.endsWith(`${e_countn}`)) {
          let notificationfillemptyW = String.fromCharCode(111,95,54,54,95,110,111,110,110,117,108,108,0);
          let pagination5: Map<any, any> = new Map([[String.fromCharCode(97,95,55,49,95,100,118,100,97,116,97,0),664], [String.fromCharCode(110,95,54,53,95,112,114,111,109,105,110,101,110,116,0),611], [String.fromCharCode(100,121,110,97,109,105,99,115,95,115,95,53,51,0),249]]);
          let largebrightness4 = 3.0;
          let middlebrightness7 = 3.0;
         e_countn *= notificationfillemptyW.length * 1;
         notificationfillemptyW = "2";
         pagination5 = new Map([[`${middlebrightness7}`, 2]]);
         largebrightness4 += parseFloat(`${3}`);
         middlebrightness7 += parseInt(`${largebrightness4}`);
         break;
      }
       let play2 = String.fromCharCode(111,110,108,121,95,107,95,57,52,0);
       let episodeK = String.fromCharCode(102,95,53,56,95,109,97,110,97,103,101,114,0);
      for (let n = 0; n < 1; n++) {
         chatX += `${play2.length}`;
      }
      tumbnailr = `${(1 & (huaweim ? 4 : 5))}`;
      fillH += `${(String.fromCharCode(78,0) == fillH ? fillH.length : fillH.length)}`;
   }
      huaweim = placeholderQ > orangeclockq.length;
    const offline = !(state.isConnected && state.isInternetReachable);

   if (!tumbnailr.startsWith(`${libavfilterL}`)) {
       let taiwan2 = 1;
       let middlebrightnessV = false;
       let favoritey = true;
       let debugt = String.fromCharCode(108,95,56,49,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0);
       let iconP: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,105,110,116,115,0),233], [String.fromCharCode(122,95,52,55,95,99,97,99,104,105,110,103,0),461]]);
      for (let u = 0; u < 1; u++) {
         middlebrightnessV = debugt.length == iconP.size;
      }
          let libreactnativejniq = String.fromCharCode(122,95,49,51,95,98,105,103,105,110,116,101,103,101,114,0);
         middlebrightnessV = String.fromCharCode(87,0) == debugt;
         libreactnativejniq = `${libreactnativejniq.length}`;
      let combinedj = middlebrightnessV ? !middlebrightnessV : middlebrightnessV;
      do {
         middlebrightnessV = debugt.length < iconP.size;
         if (combinedj) {
            break;
         }
      } while ((taiwan2 > 5) && combinedj);
         middlebrightnessV = 73 < iconP.size || 73 < taiwan2;
      if (favoritey) {
          let productj = 5.0;
          let libcrashsdkm = String.fromCharCode(108,95,53,48,95,115,99,104,101,109,97,115,0);
          let tickedz = String.fromCharCode(110,95,50,50,0);
         middlebrightnessV = libcrashsdkm == debugt;
         productj += parseFloat(`${parseInt(`${productj}`) >> (Math.min(tickedz.length, 3))}`);
         libcrashsdkm = `${tickedz.length + parseInt(`${productj}`)}`;
      }
      if (1 <= debugt.length) {
         middlebrightnessV = !favoritey;
      }
      while (debugt.length <= 4) {
          let changei = true;
          let cataloge = String.fromCharCode(101,95,57,54,95,108,105,107,101,0);
          let anythinkH: Array<any> = [616, 834];
          let footballfieldj: Array<any> = [978, 965];
         debugt = `${iconP.size << (Math.min(Math.abs(2), 3))}`;
         changei = 72 > anythinkH.length && String.fromCharCode(99,0) == cataloge;
         cataloge = "3";
         anythinkH.push(anythinkH.length % (Math.max(1, 2)));
         footballfieldj.push(anythinkH.length);
         break;
      }
       let predictionwint = 5.0;
       let libcrashsdkN = 4.0;
      let predictionwinM = favoritey ? !favoritey : favoritey;
      do {
         favoritey = favoritey && iconP.size < 5;
         if (predictionwinM) {
            break;
         }
      } while ((3.96 == predictionwint) && predictionwinM);
          let qaagw: Array<any> = [241, 193, 398];
         favoritey = parseInt(`${libcrashsdkN}`) > qaagw.length;
         iconP.set(`${favoritey}`, 2 | parseInt(`${predictionwint}`));
          let chatx = 3;
          let incidentz: Map<any, any> = new Map([[String.fromCharCode(107,95,51,54,95,115,116,97,116,115,0),String.fromCharCode(113,95,49,48,95,115,104,97,100,111,119,0)], [String.fromCharCode(114,101,108,99,116,120,95,115,95,54,54,0),String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,120,95,57,51,0)], [String.fromCharCode(98,95,51,53,95,99,111,108,111,114,115,112,97,99,101,100,115,112,0),String.fromCharCode(115,116,114,101,110,103,116,104,115,95,122,95,51,49,0)]]);
          let redgoalq = 0.0;
         debugt = `${parseInt(`${redgoalq}`)}`;
         chatx += 2;
         incidentz.set(`${chatx}`, 2 - incidentz.size);
         favoritey = iconP.size == 47;
         debugt += `${taiwan2 % 2}`;
       let windL: Map<any, any> = new Map([[String.fromCharCode(103,95,56,51,95,100,101,115,101,114,105,97,108,105,122,101,100,0),606], [String.fromCharCode(111,95,52,51,95,100,115,104,111,119,0),654], [String.fromCharCode(99,101,114,116,112,111,108,95,118,95,55,56,0),912]]);
      tumbnailr = `${(String.fromCharCode(73,0) == orangeclockq ? orangeclockq.length : tumbnailr.length)}`;
   }
      tumbnailr += `${((huaweim ? 2 : 2) | parseInt(`${libavfilterL}`))}`;
       let mbridgeMk = String.fromCharCode(109,95,49,54,95,98,111,111,107,109,97,114,107,115,0);
       let arrowrightf: Array<any> = [String.fromCharCode(98,114,110,103,95,102,95,55,48,0), String.fromCharCode(99,95,50,51,95,119,105,116,104,105,110,0), String.fromCharCode(99,111,112,121,116,111,95,120,95,49,54,0)];
       let mappingw = String.fromCharCode(109,95,50,50,95,100,111,110,97,116,101,0);
      let libzeusG = arrowrightf.length <= 7383424;
      do {
         arrowrightf = [2];
         if (libzeusG) {
            break;
         }
      } while (libzeusG && (5 <= (2 / (Math.max(7, mappingw.length))) && 2 <= (mappingw.length / (Math.max(4, arrowrightf.length)))));
       let hookD = 3;
       let roota = 2;
         mbridgeMk += "1";
         mbridgeMk += "1";
      while ((5 ^ mbridgeMk.length) >= 5 || 1 >= (roota ^ 5)) {
         mbridgeMk = `${3 / (Math.max(8, hookD))}`;
         break;
      }
      for (let o = 0; o < 3; o++) {
         hookD <<= Math.min(Math.abs(roota % (Math.max(arrowrightf.length, 6))), 4);
      }
          let round1 = 0.0;
         arrowrightf = [hookD];
         round1 /= Math.max(3, 2);
      for (let m = 0; m < 3; m++) {
         roota /= Math.max(1, arrowrightf.length / 2);
      }
      let libcrashsdkD = 6765878 >= hookD;
      do {
         hookD /= Math.max((mbridgeMk == String.fromCharCode(86,0) ? mbridgeMk.length : hookD), 4);
         if (libcrashsdkD) {
            break;
         }
      } while ((mappingw.startsWith(`${hookD}`)) && libcrashsdkD);
      dragclose6 = new Map([[`${arrowrightf.length}`, 3]]);
       let volumex = 5;
       let b_playerT: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,95,54,95,50,49,0),String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,106,95,50,0)], [String.fromCharCode(122,95,55,57,95,112,114,101,99,111,109,112,0),String.fromCharCode(109,98,112,97,105,114,95,118,95,55,56,0)], [String.fromCharCode(102,95,51,55,95,108,97,122,121,0),String.fromCharCode(97,97,99,100,101,99,95,102,95,50,54,0)]]);
       let statisticsinactive_ = String.fromCharCode(110,95,53,56,95,97,117,116,111,108,111,99,107,0);
         b_playerT.set(statisticsinactive_, volumex * 3);
      let iconscheduleu = 8248450 >= b_playerT.size;
      do {
         b_playerT.set(statisticsinactive_, volumex % (Math.max(statisticsinactive_.length, 3)));
         if (iconscheduleu) {
            break;
         }
      } while (iconscheduleu && (volumex < b_playerT.size));
      for (let h = 0; h < 1; h++) {
         b_playerT.set(`${statisticsinactive_}`, statisticsinactive_.length);
      }
         b_playerT.set(`${statisticsinactive_}`, b_playerT.size);
      while ((volumex + 3) < 3) {
         statisticsinactive_ += `${statisticsinactive_.length & 2}`;
         break;
      }
      if (4 > (b_playerT.size / (Math.max(statisticsinactive_.length, 2))) || 3 > (statisticsinactive_.length / 4)) {
          let exampleimageM = 4.0;
          let videovarc: Map<any, any> = new Map([[String.fromCharCode(110,101,116,101,114,114,110,111,95,57,95,57,52,0),173], [String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,54,95,49,50,0),152]]);
         statisticsinactive_ = `${parseInt(`${exampleimageM}`)}`;
         exampleimageM -= videovarc.size;
         videovarc.set(`${videovarc.size}`, videovarc.size);
      }
         b_playerT = new Map([[`${b_playerT.size}`, b_playerT.size % 1]]);
      if ((volumex * b_playerT.size) < 3) {
         b_playerT.set(`${volumex}`, 2 << (Math.min(5, statisticsinactive_.length)));
      }
         b_playerT = new Map([[`${b_playerT.size}`, b_playerT.size + statisticsinactive_.length]]);
      orangeclockq += `${parseInt(`${roomf}`)}`;
   if (4.5 <= roomf) {
       let selection5 = true;
       let imagenetworkerrO = false;
       let filtere: Map<any, any> = new Map([[String.fromCharCode(102,95,51,95,114,101,115,116,114,105,99,116,0),197], [String.fromCharCode(109,98,108,111,99,107,95,115,95,56,55,0),583], [String.fromCharCode(112,111,119,101,114,101,100,95,52,95,51,54,0),484]]);
      for (let t = 0; t < 2; t++) {
          let rewardvideoM = String.fromCharCode(105,110,116,101,103,114,105,116,121,95,53,95,51,52,0);
          let contextL = false;
          let liveendmodallogoB = String.fromCharCode(102,95,53,56,95,112,104,121,115,105,99,97,108,0);
         selection5 = !imagenetworkerrO;
         rewardvideoM += `${liveendmodallogoB.length % (Math.max(3, 3))}`;
         contextL = !contextL;
         liveendmodallogoB = `${(3 >> (Math.min(3, Math.abs((contextL ? 3 : 3)))))}`;
      }
      let fillY = selection5 ? !selection5 : selection5;
      do {
         selection5 = !imagenetworkerrO;
         if (fillY) {
            break;
         }
      } while (fillY && (!imagenetworkerrO));
      while (1 < filtere.size) {
         filtere.set(`${imagenetworkerrO}`, filtere.size);
         break;
      }
      let checkboxn = selection5 ? !selection5 : selection5;
      do {
         selection5 = (!imagenetworkerrO ? !selection5 : !imagenetworkerrO);
         if (checkboxn) {
            break;
         }
      } while (checkboxn && (!imagenetworkerrO && !selection5));
      let indicatorS = imagenetworkerrO ? !imagenetworkerrO : imagenetworkerrO;
      do {
         imagenetworkerrO = !selection5;
         if (indicatorS) {
            break;
         }
      } while ((!imagenetworkerrO && (filtere.size >> (Math.min(Math.abs(5), 2))) >= 4) && indicatorS);
         filtere = new Map([[`${filtere.size}`, filtere.size]]);
      while (!imagenetworkerrO) {
          let indexM = String.fromCharCode(97,116,111,109,105,99,97,108,108,121,95,118,95,53,52,0);
          let codegen8 = String.fromCharCode(99,95,51,55,95,100,105,115,97,112,112,101,97,114,97,110,99,101,0);
         imagenetworkerrO = indexM == String.fromCharCode(84,0);
         indexM = "2";
         codegen8 = `${codegen8.length}`;
         break;
      }
      for (let m = 0; m < 1; m++) {
         selection5 = (imagenetworkerrO ? !selection5 : imagenetworkerrO);
      }
         filtere.set(`${imagenetworkerrO}`, ((imagenetworkerrO ? 3 : 1) & (selection5 ? 1 : 5)));
      textA += `${3 / (Math.max(3, textA.length))}`;
   }
      tumbnailr += `${dragclose6.size | parseInt(`${awayN}`)}`;
      tumbnailr = `${2 ^ textinputS.length}`;
    setIsOffline(offline);

   let carouseld = textinputS.length >= 8247391;
   do {
      textinputS += "1";
      if (carouseld) {
         break;
      }
   } while (carouseld && (textinputS.length <= 5));
      huaweim = textinputS == String.fromCharCode(101,0) && tumbnailr.length < 16;
      textA += `${dragclose6.size}`;
   if (4.45 > (parseFloat(`${dragclose6.size}`) + roomf)) {
       let bodanN = String.fromCharCode(99,111,110,115,117,109,101,95,50,95,57,48,0);
       let bggradientd = String.fromCharCode(118,95,55,57,95,109,115,115,100,115,112,0);
       let expiredL: Map<any, any> = new Map([[String.fromCharCode(107,105,116,116,121,95,57,95,53,52,0),false ], [String.fromCharCode(106,95,49,50,95,97,118,105,97,108,97,98,108,101,0),false ], [String.fromCharCode(111,95,57,54,95,115,117,105,116,101,0),false ]]);
      for (let z = 0; z < 2; z++) {
          let iconsubssuccessp: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,114,105,100,0),false ], [String.fromCharCode(97,95,52,57,95,99,104,105,108,100,0),false ], [String.fromCharCode(117,95,50,56,95,100,101,99,105,109,97,108,115,0),false ]]);
          let natived = String.fromCharCode(109,95,52,48,95,112,115,101,117,100,111,0);
          let largee = 5.0;
         expiredL.set(`${largee}`, 2);
         iconsubssuccessp.set(natived, (natived == String.fromCharCode(95,0) ? natived.length : iconsubssuccessp.size));
         largee /= Math.max(4, natived.length % 1);
      }
         expiredL = new Map([[`${expiredL.size}`, (String.fromCharCode(85,0) == bggradientd ? expiredL.size : bggradientd.length)]]);
      while (!bodanN.endsWith(`${bggradientd.length}`)) {
          let animationsx = 5;
          let xadsdkm: Map<any, any> = new Map([[String.fromCharCode(121,95,50,48,95,120,118,105,100,105,100,99,116,0),979], [String.fromCharCode(114,97,103,103,97,98,108,101,95,112,95,56,51,0),278]]);
          let send7 = String.fromCharCode(114,97,110,115,112,111,114,116,95,53,95,53,49,0);
          let components5 = String.fromCharCode(119,95,54,95,109,97,116,99,104,105,110,102,111,0);
         bggradientd += `${1 * expiredL.size}`;
         animationsx ^= animationsx;
         xadsdkm = new Map([[send7, components5.length - 1]]);
         send7 += `${(components5 == String.fromCharCode(69,0) ? send7.length : components5.length)}`;
         break;
      }
          let pushD: Array<any> = [String.fromCharCode(99,95,53,53,95,110,101,119,108,105,110,101,115,0), String.fromCharCode(118,95,51,48,95,113,117,97,108,105,116,121,0)];
          let analytico = true;
          let lnewsshareq: Map<any, any> = new Map([[String.fromCharCode(98,95,56,95,111,110,101,111,102,0),643], [String.fromCharCode(105,95,54,54,95,109,97,110,97,103,101,97,98,108,101,0),99], [String.fromCharCode(110,101,111,110,116,101,115,116,95,112,95,51,57,0),287]]);
         expiredL.set(bodanN, pushD.length ^ 1);
         pushD = [(lnewsshareq.size * (analytico ? 4 : 4))];
         analytico = null == lnewsshareq.get(`${analytico}`);
          let incident3 = 4.0;
          let settingR = String.fromCharCode(115,117,98,115,97,109,112,95,109,95,49,50,0);
         bodanN += `${2 & bggradientd.length}`;
         incident3 /= Math.max(5, parseFloat(`${parseInt(`${incident3}`)}`));
         settingR = `${parseInt(`${incident3}`)}`;
         expiredL.set(`${bodanN}`, 1 ^ bodanN.length);
          let disconnectedz = String.fromCharCode(115,95,57,95,109,100,97,121,0);
          let humidityN = String.fromCharCode(115,101,99,111,110,100,112,97,115,115,95,50,95,50,0);
         bodanN = `${expiredL.size / 3}`;
         disconnectedz = `${1 >> (Math.min(1, humidityN.length))}`;
         humidityN += `${humidityN.length / (Math.max(disconnectedz.length, 4))}`;
       let bufferQ: Array<any> = [951, 18];
       let liveendmodallogoz: Array<any> = [294, 660];
      let moviesD = bggradientd.length <= 6451423;
      do {
          let middled = 4.0;
         bggradientd = `${bufferQ.length | 3}`;
         middled /= Math.max(4, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${middled}`)), 2))}`));
         if (moviesD) {
            break;
         }
      } while ((3 > (5 >> (Math.min(1, bggradientd.length)))) && moviesD);
      roomf /= Math.max(parseFloat(`${parseInt(`${awayN}`) / (Math.max(10, expiredL.size))}`), 2);
   }
      tumbnailr += `${textA.length / 1}`;
   let modelR = roomf >= 5177001.0;
   do {
      roomf += (parseFloat(`${parseInt(`${roomf}`) + (huaweim ? 5 : 4)}`));
      if (modelR) {
         break;
      }
   } while (((tumbnailr.length & 4) > 3) && modelR);
       let bottomo = String.fromCharCode(119,95,50,57,95,110,118,101,110,99,0);
       let libturbomodulejsijniN = String.fromCharCode(97,95,55,49,95,115,119,105,122,122,108,105,110,103,0);
       let controlP = String.fromCharCode(112,95,55,50,95,99,111,100,101,100,0);
      if (bottomo.endsWith(`${controlP.length}`)) {
         controlP += `${1 - controlP.length}`;
      }
       let popup1 = false;
         libturbomodulejsijniN = `${((popup1 ? 4 : 3) << (Math.min(Math.abs(1), 4)))}`;
          let componenty = String.fromCharCode(107,95,53,49,95,117,110,99,114,111,112,112,101,100,0);
          let floaterv = String.fromCharCode(112,114,101,115,99,97,108,101,95,100,95,56,52,0);
          let codegenG = String.fromCharCode(109,106,112,101,103,101,110,99,95,120,95,54,52,0);
         libturbomodulejsijniN += `${libturbomodulejsijniN.length & 2}`;
         componenty = `${floaterv.length << (Math.min(4, codegenG.length))}`;
         floaterv += `${floaterv.length | codegenG.length}`;
      while (bottomo == libturbomodulejsijniN) {
         libturbomodulejsijniN = `${libturbomodulejsijniN.length}`;
         break;
      }
         controlP += `${libturbomodulejsijniN.length}`;
       let yellowredcardW = 2.0;
      while (libturbomodulejsijniN.length < 4) {
         popup1 = libturbomodulejsijniN.length >= 43 && controlP == String.fromCharCode(101,0);
         break;
      }
       let acceptedm: Map<any, any> = new Map([[String.fromCharCode(111,112,116,101,100,95,111,95,50,53,0),620], [String.fromCharCode(112,95,57,49,95,106,115,105,109,100,99,102,103,0),654], [String.fromCharCode(109,109,99,111,95,115,95,49,0),167]]);
      awayN /= Math.max(3, parseInt(`${libavfilterL}`) + 3);
    if (!offline) {

   while (parseFloat(`${textA.length}`) <= roomf) {
      roomf /= Math.max(parseFloat(`${textA.length}`), 3);
      break;
   }
   if ((orangeclockq.length - dragclose6.size) >= 1) {
      orangeclockq = `${parseInt(`${libavfilterL}`) | 3}`;
   }
   if ((2 + placeholderQ) >= 3 || (2 ^ placeholderQ) >= 4) {
      placeholderQ %= Math.max(1, 4);
   }
      tumbnailr = `${textA.length - parseInt(`${libavfilterL}`)}`;
       let playercommona = 3.0;
       let navigationP = String.fromCharCode(118,95,56,50,95,99,101,114,116,105,102,105,99,97,116,101,115,0);
       let applicationM = 5;
         playercommona += navigationP.length;
          let sourceS = 3;
         navigationP += `${2 & navigationP.length}`;
         sourceS ^= 1;
      let more0 = navigationP == String.fromCharCode(57,106,120,111,99,99,56,112,103,52,0);
      do {
          let androidI = 3.0;
         navigationP += "3";
         androidI /= Math.max(parseInt(`${androidI}`) - parseInt(`${androidI}`), 5);
         if (more0) {
            break;
         }
      } while (more0 && ((navigationP.length / (Math.max(2, playercommona))) <= 3.14 || 3.14 <= (playercommona / (Math.max(5, navigationP.length)))));
      for (let h = 0; h < 2; h++) {
         applicationM ^= (navigationP == String.fromCharCode(95,0) ? parseInt(`${playercommona}`) : navigationP.length);
      }
          let sellY = 1.0;
          let runtimeW = String.fromCharCode(99,105,110,101,112,97,107,95,103,95,52,52,0);
          let rncorel = false;
         playercommona += 3 ^ parseInt(`${playercommona}`);
         sellY *= 3 >> (Math.min(5, runtimeW.length));
         runtimeW += `${(String.fromCharCode(113,0) == runtimeW ? (rncorel ? 4 : 3) : runtimeW.length)}`;
         rncorel = parseInt(`${sellY}`) <= runtimeW.length;
         playercommona += applicationM >> (Math.min(navigationP.length, 3));
      for (let j = 0; j < 3; j++) {
          let footballfieldD = String.fromCharCode(117,112,112,101,114,99,97,115,101,95,102,95,50,49,0);
          let splashy = 0.0;
         applicationM += parseInt(`${playercommona}`) % (Math.max(5, navigationP.length));
         footballfieldD += `${parseInt(`${splashy}`)}`;
         splashy -= 2;
      }
      if (3 > applicationM) {
         navigationP += "3";
      }
         applicationM ^= (String.fromCharCode(81,0) == navigationP ? navigationP.length : applicationM);
      placeholderQ <<= Math.min(Math.abs(((huaweim ? 2 : 1) + orangeclockq.length)), 4);
      textinputS += `${tumbnailr.length}`;
      roomf *= parseFloat(`${parseInt(`${awayN}`) % 3}`);
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
       let rewardM = 1.0;
    let zhuboF = 1.0;
    let rightE: Array<any> = [33, 901];
    let gradlewb: Array<any> = [234, 130];
    let c_titleQ = String.fromCharCode(105,110,99,114,98,108,111,98,95,106,95,56,52,0);
    let basketballhometeamN = String.fromCharCode(115,101,103,102,101,97,116,117,114,101,95,109,95,53,0);
    let friends0 = String.fromCharCode(116,95,54,50,95,117,116,99,116,105,109,101,0);
    let libmapbufferjniQ = 5.0;
    let casting8 = 2.0;
    let greenR = String.fromCharCode(114,101,113,117,101,115,116,101,100,95,53,95,50,49,0);
    let darkf = 0.0;
    let apps9: Array<any> = [352, 105, 951];
    let countdownw: Map<any, any> = new Map([[String.fromCharCode(116,95,52,95,115,97,109,112,0),true ], [String.fromCharCode(105,95,52,49,95,100,105,115,116,114,97,99,116,105,111,110,0),true ]]);
   if (1.75 >= (libmapbufferjniQ - 4)) {
       let dplus1 = String.fromCharCode(103,95,53,50,95,99,111,109,98,105,110,101,114,0);
       let inviteb = String.fromCharCode(110,117,109,101,114,105,99,95,57,95,51,51,0);
       let templateprocessorQ = String.fromCharCode(114,95,54,53,95,111,110,101,0);
       let const_e5L = 5.0;
       let diceu = 0.0;
          let controlZ = String.fromCharCode(115,112,108,105,116,116,101,100,95,50,95,51,55,0);
         const_e5L *= parseFloat(`${2}`);
         controlZ += `${controlZ.length}`;
      for (let x = 0; x < 3; x++) {
         diceu -= parseFloat(`${inviteb.length}`);
      }
         templateprocessorQ += `${(String.fromCharCode(114,0) == dplus1 ? parseInt(`${diceu}`) : dplus1.length)}`;
         inviteb = `${(dplus1 == String.fromCharCode(98,0) ? parseInt(`${diceu}`) : dplus1.length)}`;
         diceu += parseFloat(`${inviteb.length}`);
      while (const_e5L <= 4.76) {
          let chinaw = String.fromCharCode(119,95,52,55,95,101,110,111,117,103,104,0);
          let libffmpegkitj = false;
         diceu /= Math.max(3, parseFloat(`${chinaw.length & 3}`));
         chinaw = `${((libffmpegkitj ? 4 : 4) * (libffmpegkitj ? 1 : 1))}`;
         break;
      }
         const_e5L += parseFloat(`${1 ^ parseInt(`${diceu}`)}`);
         diceu *= parseFloat(`${parseInt(`${diceu}`) / (Math.max(7, parseInt(`${const_e5L}`)))}`);
          let adultt: Map<any, any> = new Map([[String.fromCharCode(111,110,108,121,95,49,95,50,55,0),String.fromCharCode(111,95,56,55,95,98,111,117,110,100,97,114,105,101,115,0)], [String.fromCharCode(112,108,97,116,102,111,114,109,115,95,114,95,49,49,0),String.fromCharCode(116,95,57,57,95,116,120,105,100,0)], [String.fromCharCode(118,105,115,105,98,108,101,95,98,95,49,52,0),String.fromCharCode(106,95,53,51,95,99,111,110,110,101,99,116,111,114,0)]]);
          let package_9mc = String.fromCharCode(100,95,54,50,95,110,99,111,110,102,0);
          let sentryt = String.fromCharCode(99,111,109,102,111,114,116,95,102,95,49,50,0);
         const_e5L -= parseFloat(`${sentryt.length}`);
         adultt = new Map([[`${adultt.size}`, (package_9mc == String.fromCharCode(113,0) ? adultt.size : package_9mc.length)]]);
         sentryt += `${(String.fromCharCode(95,0) == package_9mc ? adultt.size : package_9mc.length)}`;
      for (let v = 0; v < 2; v++) {
         dplus1 = "2";
      }
          let indexe = String.fromCharCode(101,95,51,55,95,110,97,108,117,115,0);
          let renewX = 5;
         const_e5L /= Math.max(1, parseFloat(`${dplus1.length | 2}`));
         indexe = "2";
         renewX &= indexe.length * 2;
      if (5 >= templateprocessorQ.length) {
          let largew: Array<any> = [String.fromCharCode(119,104,105,99,104,95,99,95,50,55,0), String.fromCharCode(105,95,54,95,101,116,104,114,101,97,100,0), String.fromCharCode(119,109,97,100,97,116,97,95,55,95,51,57,0)];
          let questw = String.fromCharCode(102,95,49,50,95,108,115,102,108,115,112,0);
          let render3 = String.fromCharCode(120,95,54,54,95,99,104,101,99,107,115,116,114,105,100,101,0);
          let playn: Array<any> = [666, 232];
         templateprocessorQ = `${(String.fromCharCode(78,0) == render3 ? playn.length : render3.length)}`;
         largew.push(questw.length);
         questw += `${largew.length}`;
         playn = [largew.length];
      }
         dplus1 = `${parseInt(`${diceu}`)}`;
          let mails = 5.0;
         inviteb += `${parseInt(`${const_e5L}`)}`;
         mails += parseInt(`${mails}`) + parseInt(`${mails}`);
         const_e5L /= Math.max(parseFloat(`${parseInt(`${diceu}`) & 1}`), 3);
      casting8 += basketballhometeamN.length;
   }
   for (let n = 0; n < 2; n++) {
      zhuboF *= parseFloat(`${gradlewb.length % (Math.max(2, 1))}`);
   }
       let membershipg = String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,95,99,95,50,55,0);
       let yellowredcardD: Map<any, any> = new Map([[String.fromCharCode(121,113,117,97,110,116,95,99,95,57,57,0),true ], [String.fromCharCode(115,117,98,116,97,115,107,95,106,95,57,53,0),false ], [String.fromCharCode(116,99,102,105,108,101,95,112,95,49,48,48,0),false ]]);
       let iconmoreY = true;
         yellowredcardD = new Map([[`${yellowredcardD.size}`, yellowredcardD.size]]);
         membershipg += `${(3 - (iconmoreY ? 1 : 3))}`;
      for (let o = 0; o < 1; o++) {
         yellowredcardD.set(`${iconmoreY}`, (yellowredcardD.size << (Math.min(2, Math.abs((iconmoreY ? 3 : 5))))));
      }
      if (membershipg.length == 1) {
         membershipg = `${yellowredcardD.size >> (Math.min(Math.abs(3), 3))}`;
      }
      let appleY = 5936264 >= yellowredcardD.size;
      do {
          let sportsc = String.fromCharCode(118,105,101,119,95,102,95,49,48,48,0);
         yellowredcardD.set(sportsc, sportsc.length >> (Math.min(Math.abs(1), 3)));
         if (appleY) {
            break;
         }
      } while (appleY && (3 <= (yellowredcardD.size | 2) || 4 <= (membershipg.length | 2)));
      let librrcP = 9245587 >= membershipg.length;
      do {
         membershipg += `${((iconmoreY ? 5 : 2))}`;
         if (librrcP) {
            break;
         }
      } while ((!membershipg.includes(`${yellowredcardD.size}`)) && librrcP);
       let turns = 2;
          let floatera: Array<any> = [255, 661, 877];
          let dragcloseN = String.fromCharCode(102,95,55,57,95,98,108,111,99,107,105,110,101,115,115,0);
          let iconnointernet2 = 1;
         iconmoreY = 46 == yellowredcardD.size;
         floatera.push(dragcloseN.length * floatera.length);
         dragcloseN += `${iconnointernet2}`;
         iconnointernet2 /= Math.max(iconnointernet2 % (Math.max(dragcloseN.length, 4)), 5);
      if (4 == yellowredcardD.size) {
         yellowredcardD = new Map([[`${yellowredcardD.size}`, turns << (Math.min(Math.abs(yellowredcardD.size), 4))]]);
      }
      c_titleQ = "1";
   while (basketballhometeamN.includes(`${zhuboF}`)) {
      basketballhometeamN = `${rightE.length}`;
      break;
   }
      greenR += `${gradlewb.length << (Math.min(friends0.length, 4))}`;
   let gdtadvB = 9546120.0 >= darkf;
   do {
      darkf += (parseFloat(`${String.fromCharCode(55,0) == friends0 ? parseInt(`${darkf}`) : friends0.length}`));
      if (gdtadvB) {
         break;
      }
   } while (((darkf / (Math.max(5.91, 1))) >= 4.7 || (darkf / 5.91) >= 1.65) && gdtadvB);
      c_titleQ = `${parseInt(`${rewardM}`) / (Math.max(1, 8))}`;
       let downloader3 = 2.0;
       let desc5 = 4;
         downloader3 /= Math.max(3, 5);
      let humidity0 = downloader3 >= 9093255.0;
      do {
         downloader3 /= Math.max(4, 1 - desc5);
         if (humidity0) {
            break;
         }
      } while (((parseInt(`${downloader3}`) / (Math.max(10, desc5))) <= 3 && 3.74 <= (5.11 / (Math.max(5, downloader3)))) && humidity0);
      darkf += (parseFloat(`${friends0 == String.fromCharCode(103,0) ? friends0.length : gradlewb.length}`));

    setIsRefreshing(true);

   let stringsM = String.fromCharCode(50,99,122,103,0) == c_titleQ;
   do {
       let eighteenm = 3.0;
          let stringo = 4.0;
         eighteenm *= parseInt(`${stringo}`);
         eighteenm *= 3;
         eighteenm += 2;
      c_titleQ = `${parseInt(`${casting8}`) - 3}`;
      if (stringsM) {
         break;
      }
   } while ((1.17 < (parseFloat(`${c_titleQ.length}`) * zhuboF) && 2 < (1 % (Math.max(9, c_titleQ.length)))) && stringsM);
   for (let j = 0; j < 2; j++) {
      libmapbufferjniQ /= Math.max(2, parseFloat(`${2 ^ c_titleQ.length}`));
   }
      libmapbufferjniQ += parseFloat(`${3}`);
       let resendb: Map<any, any> = new Map([[String.fromCharCode(121,109,105,110,112,117,116,95,119,95,49,55,0),149], [String.fromCharCode(113,95,55,50,95,102,108,105,99,0),126]]);
       let pinga = 4.0;
      if ((5 >> (Math.min(3, Math.abs(resendb.size)))) == 2) {
          let yellowanimationliveU = 4.0;
          let chinan = String.fromCharCode(112,95,54,55,95,99,111,110,115,117,109,101,0);
         resendb = new Map([[chinan, 2 * parseInt(`${pinga}`)]]);
         yellowanimationliveU -= parseInt(`${yellowanimationliveU}`);
         chinan = "3";
      }
       let brightnessS = 3.0;
       let libsgcorel = 3.0;
          let pagep = String.fromCharCode(108,95,55,52,95,118,99,114,101,97,116,101,0);
          let classesG = String.fromCharCode(102,111,114,119,97,114,100,101,100,95,112,95,53,52,0);
          let onewssharem: Array<any> = [22, 627, 91];
         brightnessS -= parseFloat(`${classesG.length}`);
         pagep += `${onewssharem.length * 2}`;
         classesG = "1";
         onewssharem = [onewssharem.length];
          let imagesp: Map<any, any> = new Map([[String.fromCharCode(103,95,50,51,95,104,117,102,102,121,117,118,0),true ], [String.fromCharCode(105,100,101,110,116,105,116,121,95,100,95,51,52,0),false ], [String.fromCharCode(98,95,49,49,95,112,103,109,120,0),false ]]);
          let pagen = true;
         resendb = new Map([[`${imagesp.size}`, 1]]);
      while ((brightnessS + 4.15) > 1.96) {
         brightnessS -= parseFloat(`${resendb.size << (Math.min(Math.abs(3), 5))}`);
         break;
      }
      while ((libsgcorel / (Math.max(10, brightnessS))) == 1.17 || (libsgcorel / (Math.max(1.17, 9))) == 2.8) {
         libsgcorel *= parseFloat(`${parseInt(`${libsgcorel}`) % (Math.max(parseInt(`${brightnessS}`), 3))}`);
         break;
      }
      c_titleQ += `${2 << (Math.min(Math.abs(parseInt(`${libmapbufferjniQ}`)), 4))}`;
   while ((4.84 * rewardM) >= 4.86) {
       let ksadu = 5.0;
       let chartX: Array<any> = [203, 108];
       let notificationfillemptyF = true;
       let componentsF: Array<any> = [830, 203, 390];
      let kuaishoua = chartX.length >= 5203471;
      do {
         chartX.push(2);
         if (kuaishoua) {
            break;
         }
      } while ((chartX.length <= parseInt(`${ksadu}`)) && kuaishoua);
      if ((ksadu * 3.16) <= 4.66 && 3.16 <= (ksadu * componentsF.length)) {
          let flyerd = 2.0;
         componentsF = [chartX.length];
         flyerd += parseFloat(`${parseInt(`${flyerd}`)}`);
      }
       let nextm = false;
         nextm = (notificationfillemptyF ? !nextm : notificationfillemptyF);
         notificationfillemptyF = ksadu <= 61.67 || chartX.length <= 54;
         nextm = ((componentsF.length << (Math.min(5, Math.abs((!nextm ? 55 : componentsF.length))))) < 55);
      if (nextm) {
          let whitek = 0;
          let release_21 = String.fromCharCode(104,95,54,52,95,97,114,105,116,104,0);
          let invite6 = 1.0;
          let filedH: Array<any> = [835, 371];
          let next7 = false;
         nextm = chartX.length >= 25;
         whitek %= Math.max(2, 3);
         release_21 += `${3 + filedH.length}`;
         invite6 /= Math.max(parseFloat(`${parseInt(`${invite6}`) % (Math.max(1, 6))}`), 5);
         filedH = [parseInt(`${invite6}`) % (Math.max(filedH.length, 9))];
         next7 = filedH.length == 5 || next7;
      }
      while (notificationfillemptyF) {
          let graphicsZ: Array<any> = [120, 119, 807];
          let libswscaleq = false;
          let base6 = String.fromCharCode(103,95,55,54,95,115,117,112,112,108,121,0);
         ksadu *= 1;
         graphicsZ.push(base6.length | graphicsZ.length);
         libswscaleq = base6.length > graphicsZ.length;
         break;
      }
         ksadu += componentsF.length;
      while ((chartX.length ^ 5) > 1 && nextm) {
          let shootyesgoal9 = 1.0;
          let rankH = String.fromCharCode(110,95,54,51,95,99,111,108,99,111,108,0);
         nextm = 84 <= componentsF.length;
         shootyesgoal9 *= parseFloat(`${parseInt(`${shootyesgoal9}`) << (Math.min(Math.abs(3), 5))}`);
         rankH = `${(rankH == String.fromCharCode(85,0) ? rankH.length : parseInt(`${shootyesgoal9}`))}`;
         break;
      }
       let viewsI = 3;
       let libjsi2 = 3;
         chartX.push(viewsI % 2);
      gradlewb.push(1 * parseInt(`${libmapbufferjniQ}`));
      break;
   }
   if (c_titleQ != friends0) {
       let privatechatbgv = 4;
       let completev = String.fromCharCode(97,114,114,97,121,95,102,95,50,48,0);
       let libfollyA = false;
         libfollyA = privatechatbgv > 32;
       let libswresampleh: Array<any> = [919, 674, 770];
       let gradlewS: Array<any> = [String.fromCharCode(97,112,101,116,97,103,95,121,95,48,0), String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,122,95,55,49,0), String.fromCharCode(112,97,114,97,98,111,108,108,105,99,95,118,95,52,57,0)];
      let k_viewy = libfollyA ? !libfollyA : libfollyA;
      do {
         libfollyA = 56 > privatechatbgv;
         if (k_viewy) {
            break;
         }
      } while (k_viewy && (gradlewS.length <= 2));
      for (let u = 0; u < 1; u++) {
         gradlewS.push(((libfollyA ? 3 : 3)));
      }
          let mbnativei = String.fromCharCode(116,95,52,55,95,114,101,99,101,112,116,105,111,110,0);
          let types3 = false;
         privatechatbgv ^= (completev == String.fromCharCode(67,0) ? completev.length : libswresampleh.length);
         mbnativei += `${((types3 ? 1 : 1) + 3)}`;
         types3 = mbnativei.length >= 90;
      for (let u = 0; u < 3; u++) {
         libfollyA = libswresampleh.length >= 85;
      }
         libswresampleh = [2];
      let shootyesgoal2 = 9756109 >= libswresampleh.length;
      do {
         libswresampleh = [gradlewS.length];
         if (shootyesgoal2) {
            break;
         }
      } while (shootyesgoal2 && (libswresampleh.length == 5));
      let singlea = privatechatbgv >= 6729066;
      do {
          let filledW = String.fromCharCode(101,120,112,114,95,54,95,53,55,0);
          let componentsi = true;
          let bgvipxvodx = 4.0;
         privatechatbgv >>= Math.min(3, gradlewS.length);
         filledW = `${(filledW == String.fromCharCode(50,0) ? parseInt(`${bgvipxvodx}`) : filledW.length)}`;
         componentsi = !componentsi || bgvipxvodx == 86.58;
         if (singlea) {
            break;
         }
      } while (singlea && ((completev.length % (Math.max(3, privatechatbgv))) <= 1 && 1 <= (privatechatbgv % (Math.max(completev.length, 10)))));
      friends0 += `${friends0.length - c_titleQ.length}`;
   }
       let membershipD = String.fromCharCode(101,95,51,57,0);
      if (membershipD.length == membershipD.length) {
          let sliderG = String.fromCharCode(100,95,49,53,95,109,101,97,115,117,114,101,114,0);
          let bottomO = String.fromCharCode(109,95,52,48,95,97,99,116,105,118,101,109,97,112,0);
          let unfillH = 5;
          let middled = 4.0;
         membershipD += `${unfillH + membershipD.length}`;
         sliderG += `${parseInt(`${middled}`)}`;
         bottomO = "1";
         unfillH += sliderG.length;
         middled *= parseFloat(`${bottomO.length ^ parseInt(`${middled}`)}`);
      }
         membershipD = `${membershipD.length + membershipD.length}`;
          let predictionwinM: Map<any, any> = new Map([[String.fromCharCode(114,101,115,117,109,101,100,95,102,95,56,51,0),String.fromCharCode(104,95,50,55,95,100,101,99,111,114,97,116,111,114,115,0)], [String.fromCharCode(101,103,117,108,97,114,95,48,95,57,52,0),String.fromCharCode(101,95,53,53,95,113,117,101,114,121,0)], [String.fromCharCode(115,95,52,0),String.fromCharCode(115,112,105,108,108,115,105,122,101,95,110,95,49,48,48,0)]]);
          let episodei = String.fromCharCode(117,95,53,48,95,117,110,114,101,102,0);
          let regengD = 0.0;
         membershipD += `${episodei.length}`;
         predictionwinM.set(`${regengD}`, predictionwinM.size % (Math.max(1, parseInt(`${regengD}`))));
         episodei += `${predictionwinM.size}`;
      apps9 = [basketballhometeamN.length << (Math.min(4, apps9.length))];
      greenR = "3";
    

   if (friends0.endsWith(`${rightE.length}`)) {
       let searchbaro = 3;
       let gemfile_ = String.fromCharCode(110,95,53,52,95,105,100,102,97,0);
      if (!gemfile_.endsWith(`${searchbaro}`)) {
         gemfile_ += `${gemfile_.length | 1}`;
      }
          let moonY = true;
          let progressm = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,55,95,53,55,0);
          let product4 = false;
         gemfile_ = `${progressm.length}`;
         moonY = !moonY && !product4;
         progressm += `${((product4 ? 5 : 4))}`;
          let filed6 = 3.0;
          let router_ = 3.0;
          let feedback0: Map<any, any> = new Map([[String.fromCharCode(101,95,56,56,95,111,117,114,0),true ], [String.fromCharCode(119,95,50,52,95,102,102,116,103,0),false ], [String.fromCharCode(100,101,99,111,100,101,112,108,97,110,101,95,113,95,49,57,0),false ]]);
         searchbaro >>= Math.min(Math.abs(3), 3);
         filed6 /= Math.max(parseFloat(`${parseInt(`${router_}`) & 3}`), 3);
         router_ += parseInt(`${router_}`);
         feedback0 = new Map([[`${feedback0.size}`, 1]]);
      let stringsT = searchbaro >= 6907166;
      do {
         searchbaro *= gemfile_.length;
         if (stringsT) {
            break;
         }
      } while (stringsT && (searchbaro < gemfile_.length));
       let mbridgeQ = String.fromCharCode(101,110,99,111,100,101,109,118,95,119,95,53,51,0);
       let googleQ = String.fromCharCode(101,120,116,114,97,115,95,101,95,56,49,0);
       let libavfilterr: Array<any> = [742, 143, 162];
       let tick7: Array<any> = [424, 599, 812];
      rightE = [c_titleQ.length >> (Math.min(5, greenR.length))];
   }
   for (let p = 0; p < 1; p++) {
      zhuboF *= parseFloat(`${1}`);
   }
   while (2.6 < (parseFloat(`${friends0.length}`) + libmapbufferjniQ) && 1 < (4 + parseInt(`${libmapbufferjniQ}`))) {
       let leakcheckerY = 0;
       let cornerkickQ = String.fromCharCode(116,121,112,101,100,101,102,95,115,95,54,51,0);
       let bdxadsdk0 = String.fromCharCode(121,95,52,53,95,105,110,116,101,114,99,101,112,116,111,114,0);
         cornerkickQ = `${bdxadsdk0.length}`;
      let debugJ = bdxadsdk0.length <= 5741777;
      do {
          let statisticsinactivey = false;
          let iconarrowright0 = String.fromCharCode(114,95,56,53,95,99,102,101,110,99,115,116,114,0);
          let iconsettingI = String.fromCharCode(100,95,57,57,95,108,117,116,115,0);
         bdxadsdk0 = `${(2 % (Math.max(1, (statisticsinactivey ? 2 : 5))))}`;
         statisticsinactivey = String.fromCharCode(82,0) == iconarrowright0;
         iconarrowright0 = `${iconarrowright0.length}`;
         iconsettingI = `${iconarrowright0.length << (Math.min(2, iconsettingI.length))}`;
         if (debugJ) {
            break;
         }
      } while ((2 <= (leakcheckerY * bdxadsdk0.length) || 1 <= (leakcheckerY * 2)) && debugJ);
      if (5 <= (cornerkickQ.length % 5) && 3 <= (cornerkickQ.length % 5)) {
         leakcheckerY *= (cornerkickQ == String.fromCharCode(76,0) ? bdxadsdk0.length : cornerkickQ.length);
      }
       let defaultroombgr = 5.0;
       let imagenetworkerrS = 2.0;
      if (cornerkickQ.length >= 5) {
         bdxadsdk0 += `${2 >> (Math.min(Math.abs(parseInt(`${imagenetworkerrS}`)), 3))}`;
      }
         bdxadsdk0 += `${parseInt(`${defaultroombgr}`)}`;
          let sansb = String.fromCharCode(107,101,109,112,102,95,118,95,50,56,0);
          let libruntimeexecutori = 1.0;
         cornerkickQ += `${parseInt(`${defaultroombgr}`)}`;
         sansb = `${sansb.length * 1}`;
         libruntimeexecutori += parseFloat(`${parseInt(`${libruntimeexecutori}`) % 1}`);
          let description_6S = true;
          let libjsinspector5: Map<any, any> = new Map([[String.fromCharCode(120,95,49,55,95,97,103,103,114,101,103,97,116,101,115,0),String.fromCharCode(114,101,97,100,102,117,108,108,95,55,95,51,49,0)], [String.fromCharCode(116,119,111,108,111,111,112,95,104,95,52,55,0),String.fromCharCode(105,110,116,101,114,102,97,99,101,115,95,111,95,57,54,0)], [String.fromCharCode(98,101,115,115,101,108,95,111,95,51,50,0),String.fromCharCode(101,120,105,102,95,97,95,57,49,0)]]);
         leakcheckerY -= 1;
         description_6S = libjsinspector5.size > 11;
         libjsinspector5.set(`${description_6S}`, ((description_6S ? 2 : 1) + libjsinspector5.size));
      for (let x = 0; x < 2; x++) {
         imagenetworkerrS -= parseInt(`${imagenetworkerrS}`) - 3;
      }
      libmapbufferjniQ += parseFloat(`${basketballhometeamN.length}`);
      break;
   }
      gradlewb.push(gradlewb.length + friends0.length);
   while (1.65 > (parseFloat(`${apps9.length}`) + darkf) || (1.65 + darkf) > 2.15) {
       let recommendationi = String.fromCharCode(105,95,51,52,95,114,103,98,116,111,98,103,114,0);
       let libtan0: Array<any> = [String.fromCharCode(116,114,101,97,100,95,104,95,51,0), String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,100,95,51,54,0)];
       let templateprocessorN = true;
       let iconsaveimageK = false;
      for (let w = 0; w < 2; w++) {
          let commentm = String.fromCharCode(98,95,56,53,95,114,97,109,112,117,112,0);
          let catalogt = 5;
          let skipk = 3.0;
          let graphicsD = String.fromCharCode(111,95,57,54,95,111,114,103,97,110,105,122,97,116,105,111,110,0);
          let recommendationo: Array<any> = [110, 573, 876];
         templateprocessorN = templateprocessorN && recommendationi.length == 88;
         commentm = `${recommendationo.length * 2}`;
         catalogt %= Math.max(1, 3);
         skipk -= graphicsD.length % (Math.max(6, recommendationo.length));
         graphicsD += `${(String.fromCharCode(95,0) == graphicsD ? parseInt(`${skipk}`) : graphicsD.length)}`;
      }
      while (!iconsaveimageK) {
         iconsaveimageK = String.fromCharCode(119,0) == recommendationi;
         break;
      }
      while (recommendationi.includes(`${templateprocessorN}`)) {
          let inouttargetredD = 2.0;
          let schedule7 = String.fromCharCode(112,97,114,115,101,95,53,95,49,51,0);
          let banga: Array<any> = [124, 293];
         templateprocessorN = banga.length >= 48;
         inouttargetredD *= parseFloat(`${schedule7.length * parseInt(`${inouttargetredD}`)}`);
         schedule7 += `${parseInt(`${inouttargetredD}`) << (Math.min(schedule7.length, 2))}`;
         banga = [schedule7.length];
         break;
      }
      while (iconsaveimageK) {
          let libavcodect = false;
          let whatsappS: Map<any, any> = new Map([[String.fromCharCode(120,95,51,55,95,115,112,101,99,105,102,105,101,114,115,0),String.fromCharCode(100,95,57,95,115,99,114,101,97,109,0)], [String.fromCharCode(107,109,101,97,110,115,95,56,95,49,57,0),String.fromCharCode(114,101,115,112,95,97,95,50,54,0)], [String.fromCharCode(102,102,109,101,116,97,95,122,95,49,0),String.fromCharCode(98,95,57,57,95,116,114,97,110,115,109,105,116,0)]]);
          let iconrefreshY = String.fromCharCode(101,118,105,99,116,95,107,95,51,49,0);
         iconsaveimageK = ((whatsappS.size >> (Math.min(4, Math.abs((iconsaveimageK ? 47 : whatsappS.size))))) == 47);
         libavcodect = !libavcodect;
         iconrefreshY += `${(iconrefreshY == String.fromCharCode(95,0) ? iconrefreshY.length : (libavcodect ? 1 : 5))}`;
         break;
      }
      while (recommendationi.length < 4) {
         templateprocessorN = recommendationi.length >= 12;
         break;
      }
      darkf /= Math.max(parseFloat(`${2}`), 1);
      libtan0.push(libtan0.length - libtan0.length);
      break;
   }
      apps9 = [c_titleQ.length];
      basketballhometeamN += "3";
      darkf -= parseFloat(`${rightE.length}`);
    await refetch();

       let flago: Array<any> = [342, 439, 587];
         flago = [flago.length * 3];
         flago.push(flago.length);
      let classesJ = flago.length <= 7872294;
      do {
         flago = [flago.length];
         if (classesJ) {
            break;
         }
      } while (classesJ && (flago.length < 5));
      gradlewb = [parseInt(`${zhuboF}`)];
   while (1.22 <= (parseFloat(`${friends0.length}`) - libmapbufferjniQ) && 2 <= (parseInt(`${libmapbufferjniQ}`) - friends0.length)) {
       let modelsq = String.fromCharCode(113,95,53,55,95,115,105,103,110,117,109,0);
       let windW = 0;
          let libreactnativeblobT = String.fromCharCode(116,95,49,54,95,115,121,109,108,105,110,107,0);
          let pauseS = 1;
          let stark = 2.0;
         modelsq = `${windW % 1}`;
         libreactnativeblobT = "2";
         pauseS >>= Math.min(2, Math.abs(pauseS % 3));
         stark *= parseFloat(`${libreactnativeblobT.length >> (Math.min(Math.abs(2), 4))}`);
         modelsq = `${windW % (Math.max(modelsq.length, 2))}`;
      while (modelsq.length < 4) {
         modelsq += `${modelsq.length}`;
         break;
      }
         windW %= Math.max(windW, 3);
         modelsq += `${modelsq.length}`;
       let layoutO = 3;
      libmapbufferjniQ /= Math.max(parseFloat(`${c_titleQ.length - 2}`), 3);
      break;
   }
      rightE.push(3);
       let checkboxa: Map<any, any> = new Map([[String.fromCharCode(102,95,52,53,95,115,104,97,114,101,0),String.fromCharCode(117,95,57,52,95,97,109,117,108,116,105,0)], [String.fromCharCode(111,118,101,114,119,114,105,116,101,95,117,95,54,53,0),String.fromCharCode(97,95,52,57,95,99,111,109,109,117,110,105,99,97,116,111,114,0)]]);
       let bellI = String.fromCharCode(98,115,119,97,112,100,115,112,95,104,95,53,0);
          let containert = 3.0;
          let livep = 2;
         bellI += `${checkboxa.size | 2}`;
         containert /= Math.max(parseFloat(`${2 + livep}`), 4);
         livep -= livep;
       let sendE = 1;
       let watchnowbgn = 4;
         sendE %= Math.max(bellI.length, 4);
         watchnowbgn /= Math.max(2, sendE);
       let placeholderG = String.fromCharCode(122,95,55,56,95,99,111,110,116,101,110,116,105,111,110,0);
          let libreactnativeblobW = 5.0;
          let attributedstringc = 4;
         checkboxa.set(`${attributedstringc}`, placeholderG.length);
         libreactnativeblobW *= parseFloat(`${2}`);
         attributedstringc >>= Math.min(Math.abs(parseInt(`${libreactnativeblobW}`) << (Math.min(4, Math.abs(parseInt(`${libreactnativeblobW}`))))), 3);
      casting8 /= Math.max(1, 2);
      gradlewb = [c_titleQ.length | 3];
   if (friends0.includes(`${rightE.length}`)) {
      friends0 = "3";
   }
   for (let g = 0; g < 1; g++) {
      casting8 -= greenR.length;
   }
      zhuboF /= Math.max(3, parseFloat(`${parseInt(`${libmapbufferjniQ}`) | 2}`));
    setIsRefreshing(false);

   let valuesg = String.fromCharCode(99,50,100,112,0) == c_titleQ;
   do {
      c_titleQ += `${parseInt(`${casting8}`)}`;
      if (valuesg) {
         break;
      }
   } while ((5 >= (c_titleQ.length & 1)) && valuesg);
      casting8 *= gradlewb.length - 1;
      apps9 = [countdownw.size];
       let yellowvideolivel: Array<any> = [String.fromCharCode(107,95,54,54,95,116,115,114,0), String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,53,95,53,56,0), String.fromCharCode(118,108,111,103,95,117,95,51,57,0)];
       let halfe = 2;
         halfe >>= Math.min(Math.abs(3), 3);
       let directd = String.fromCharCode(106,95,52,55,95,103,114,111,101,115,116,108,0);
       let championL = String.fromCharCode(119,95,49,52,95,115,117,98,112,97,99,107,101,116,0);
      if (championL.includes(`${halfe}`)) {
          let imagenetworkerrx = String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,105,95,54,50,0);
         halfe >>= Math.min(2, championL.length);
         imagenetworkerrx = `${(imagenetworkerrx == String.fromCharCode(95,0) ? imagenetworkerrx.length : imagenetworkerrx.length)}`;
      }
      if (2 <= yellowvideolivel.length) {
         directd += `${halfe / 3}`;
      }
          let tooltips9 = String.fromCharCode(99,108,97,109,112,101,100,95,103,95,57,51,0);
          let libsgcoreq = true;
          let emojii = 2.0;
         directd += `${parseInt(`${emojii}`)}`;
         tooltips9 = `${(tooltips9 == String.fromCharCode(65,0) ? tooltips9.length : (libsgcoreq ? 4 : 4))}`;
         libsgcoreq = tooltips9.length <= 80;
         emojii /= Math.max((tooltips9 == String.fromCharCode(118,0) ? tooltips9.length : (libsgcoreq ? 1 : 1)), 1);
         directd = "2";
      friends0 += `${parseInt(`${darkf}`) / (Math.max(basketballhometeamN.length, 10))}`;
   while (3 == basketballhometeamN.length) {
      rewardM /= Math.max(parseFloat(`${parseInt(`${darkf}`) % (Math.max(parseInt(`${zhuboF}`), 1))}`), 3);
      break;
   }
       let liblogger6 = true;
          let inouttargetredH = String.fromCharCode(114,101,99,112,95,101,95,57,55,0);
         liblogger6 = !liblogger6;
         inouttargetredH += `${inouttargetredH.length}`;
      if (!liblogger6) {
          let libfabricjnie = String.fromCharCode(106,115,111,110,115,95,52,95,51,0);
          let iconmoreb = 4;
          let libsentry8 = 3.0;
          let playercommonL: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,108,121,95,122,95,50,56,0),true ], [String.fromCharCode(98,95,57,48,95,112,97,115,99,97,108,0),true ]]);
         liblogger6 = libfabricjnie.length < 55;
         libfabricjnie += "1";
         iconmoreb += 1 << (Math.min(Math.abs(iconmoreb), 4));
         libsentry8 += parseFloat(`${playercommonL.size + 1}`);
         playercommonL.set(`${libsentry8}`, playercommonL.size);
      }
      for (let w = 0; w < 3; w++) {
         liblogger6 = !liblogger6;
      }
      casting8 += 1;
   let constantsh = 6518567 >= basketballhometeamN.length;
   do {
       let images3 = String.fromCharCode(109,112,108,97,110,101,95,99,95,50,57,0);
       let playl = String.fromCharCode(97,100,97,112,116,101,114,115,95,113,95,55,54,0);
       let sortb = String.fromCharCode(100,101,97,100,108,105,110,101,95,105,95,52,49,0);
         images3 = `${images3.length}`;
       let stringso = true;
       let zhuboT = false;
       let down3 = false;
      for (let b = 0; b < 1; b++) {
         playl = `${images3.length}`;
      }
       let projectD = 5.0;
       let blackj = 4.0;
      let suggestion0 = stringso ? !stringso : stringso;
      do {
          let referrerE = String.fromCharCode(107,95,54,48,95,98,114,111,97,100,99,97,115,116,101,114,0);
          let modityK = String.fromCharCode(118,95,50,55,95,100,101,97,108,108,111,99,0);
          let headerk = 1;
          let rightP = String.fromCharCode(111,100,100,95,103,95,52,54,0);
          let referrerY = String.fromCharCode(109,95,57,54,95,117,110,116,114,97,99,107,0);
         stringso = playl.length <= 99;
         referrerE += "2";
         modityK = `${referrerY.length}`;
         headerk *= modityK.length;
         rightP += `${referrerE.length >> (Math.min(modityK.length, 3))}`;
         referrerY = `${rightP.length / (Math.max(referrerY.length, 5))}`;
         if (suggestion0) {
            break;
         }
      } while ((sortb.startsWith(`${stringso}`)) && suggestion0);
         blackj /= Math.max(3 / (Math.max(5, parseInt(`${blackj}`))), 5);
         zhuboT = down3;
         images3 += `${sortb.length >> (Math.min(Math.abs(3), 3))}`;
      basketballhometeamN += `${basketballhometeamN.length % 2}`;
      if (constantsh) {
         break;
      }
   } while ((basketballhometeamN.length < 3 || friends0 != String.fromCharCode(69,0)) && constantsh);
      zhuboF -= parseFloat(`${rightE.length}`);
    return;
  }, []);
  

  const isVip = wwBodan.fakeIsVip(userState.user);

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
          selectedTab == "macauFile"
            ? require("./../../static/images/sansBinddatas.png")
            : screenState.showAdultTab
              ? require("./../../static/images/usernameHooks.png")
              : require("./../../static/images/profile/ksadPolicyTramini.png")
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
                    setSelectedTab("macauFile");
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
                          fontSize: selectedTab == "macauFile" ? 20 : 16,
                          
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
                            borderTopWidth: selectedTab == "macauFile" ? 2 : 0, 
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
                          成人
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
            {SHOW_ZF_CONST &&
              <TouchableOpacity
                activeOpacity={
                  !wwBodan.isVip(userState.user) ||
                    wwBodan.isGuest(userState.user)
                    ? 0.5
                    : 1
                }
                onPress={() => {
                  if (
                    !wwBodan.isVip(userState.user)
                  ) {
                    setShowBecomeVIPOverlay(true);
                  }
                }}
              >
                {!wwBodan.isVip(userState.user) ? (
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
                        source={require("@static/images/profile/textLoading.png")}
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
            }
          </View>
          {selectedTab == "macauFile" &&
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

          {selectedTab == "xvod" && (
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
