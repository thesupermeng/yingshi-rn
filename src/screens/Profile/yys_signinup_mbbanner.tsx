import React, { useEffect, useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import { useTheme } from "@react-navigation/native";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";

import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import { Button } from "@rneui/themed";
import ShowMoreButton from "../../components/button/yys_sound_button";
import Logo2 from "@static/images/materialSingaporeHistory.svg";
import NotificationModal from "../../components/modal/yys_graph";
import { yys_StatsForm } from "@utility/yys_context_muted";
import {
   APP_EMAIL_CONST,
   APP_VERSION,
   APP_VERSION_BUILD,
   UMENG_CHANNEL,
} from "@utility/yys_ajax_switch";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';

import md5 from 'crypto-js/md5';

export default ({ navigation }: RootStackScreenProps<"关于我们">) => {
   const { colors, textVariants, icons, spacing } = useTheme();
   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [countToggleB, setCountToggleB] = useState(0);
   const [countChannelid, setCountChannelid] = useState(0);

   const [ displayVersion, setDisplayVersion ] = useState(APP_VERSION);

   const toggleOverlay = () => {
      let unewinterstitialZ = String.fromCharCode(101, 95, 55, 52, 95, 100, 99, 116, 99, 111, 101, 102, 0);
      let debug2 = true;
      let tickedd = String.fromCharCode(116, 105, 108, 105, 110, 103, 95, 51, 95, 49, 55, 0);
      let videocommoni = 2;
      let singleD = false;
      let nativeJ = String.fromCharCode(102, 114, 111, 109, 98, 121, 116, 101, 97, 114, 114, 97, 121, 95, 51, 95, 53, 53, 0);
      let libswresample0 = String.fromCharCode(105, 95, 52, 50, 95, 99, 116, 105, 109, 101, 115, 116, 97, 109, 112, 0);
      let dropdown2 = 2.0;
      let confirmatione = String.fromCharCode(114, 95, 56, 57, 95, 112, 114, 111, 112, 101, 114, 116, 105, 101, 115, 0);
      let eactZ = 4.0;
      let typesT = String.fromCharCode(112, 114, 101, 100, 120, 95, 53, 95, 49, 0);
      let roundT = String.fromCharCode(117, 95, 52, 53, 95, 105, 110, 115, 116, 97, 108, 108, 97, 116, 105, 111, 110, 115, 0);
      let final_hoo = String.fromCharCode(99, 108, 111, 117, 100, 95, 108, 95, 57, 53, 0);
      let manifestH = 0.0;
      let libzeusf = false;
      let textlayoutmanager9 = false;
      let main_os = 0.0;
      let libimagepipelineL = String.fromCharCode(118, 95, 55, 57, 95, 112, 97, 105, 114, 105, 110, 103, 0);
      let gradleL = String.fromCharCode(115, 99, 114, 101, 101, 110, 115, 104, 111, 116, 95, 50, 95, 54, 52, 0);
      let typing6: Map<any, any> = new Map([[String.fromCharCode(115, 119, 105, 99, 104, 95, 110, 95, 56, 50, 0), 647], [String.fromCharCode(100, 117, 114, 103, 101, 114, 107, 105, 110, 103, 95, 100, 95, 52, 52, 0), 309]]);
      gradleL = `${typing6.size}`;
      for (let n = 0; n < 2; n++) {
         let mbnative5 = 2.0;
         let accepted3: Map<any, any> = new Map([[String.fromCharCode(104, 95, 55, 51, 95, 99, 108, 117, 115, 116, 101, 114, 0), String.fromCharCode(112, 101, 110, 99, 105, 108, 95, 53, 95, 56, 57, 0)], [String.fromCharCode(114, 101, 112, 114, 101, 112, 97, 114, 101, 95, 121, 95, 55, 54, 0), String.fromCharCode(119, 95, 57, 48, 95, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0)], [String.fromCharCode(113, 115, 99, 97, 108, 101, 113, 112, 95, 118, 95, 51, 48, 0), String.fromCharCode(112, 95, 55, 49, 95, 99, 111, 112, 121, 120, 110, 0)]]);
         main_os *= parseFloat(`${libimagepipelineL.length}`);
         mbnative5 -= parseFloat(`${3 * accepted3.size}`);
         accepted3 = new Map([[`${accepted3.size}`, accepted3.size | 2]]);
      }
      libimagepipelineL += `${parseInt(`${main_os}`)}`;
      gradleL += `${gradleL.length & 1}`;
      for (let s = 0; s < 1; s++) {
         libimagepipelineL += "3";
      }
      let settingsx = 9394331.0 >= main_os;
      do {
         let catalogc = String.fromCharCode(106, 111, 121, 102, 117, 108, 95, 117, 95, 53, 52, 0);
         let leftN = String.fromCharCode(112, 95, 49, 52, 95, 101, 109, 111, 106, 105, 0);
         let entryn = String.fromCharCode(102, 95, 55, 55, 95, 109, 97, 116, 104, 0);
         let customu = 1.0;
         let loadingC = String.fromCharCode(108, 95, 52, 51, 95, 99, 114, 111, 115, 115, 0);
         main_os += (parseFloat(`${String.fromCharCode(86, 0) == leftN ? catalogc.length : leftN.length}`));
         catalogc = "2";
         entryn += `${parseInt(`${customu}`) + 3}`;
         customu += 2 + loadingC.length;
         loadingC = `${parseInt(`${customu}`)}`;
         if (settingsx) {
            break;
         }
      } while (settingsx && ((parseInt(`${main_os}`) / (Math.max(4, libimagepipelineL.length))) > 5 && 5 > (parseInt(`${main_os}`) / (Math.max(libimagepipelineL.length, 9)))));
      while (1 >= (libimagepipelineL.length * parseInt(`${main_os}`)) || 5 >= (1 ^ libimagepipelineL.length)) {
         let recommendationC = String.fromCharCode(110, 95, 52, 52, 95, 112, 114, 101, 117, 112, 100, 97, 116, 101, 0);
         let gemfileG: Array<any> = [471, 519, 960];
         let downloadC = 0.0;
         libimagepipelineL += "3";
         recommendationC += `${gemfileG.length}`;
         gemfileG.push(1);
         downloadC += parseInt(`${downloadC}`);
         break;
      }
      while (libimagepipelineL.length <= 2 && gradleL != String.fromCharCode(109, 0)) {
         let selecta = String.fromCharCode(99, 95, 52, 54, 0);
         let privilegec = 2.0;
         libimagepipelineL += `${libimagepipelineL.length}`;
         selecta += "1";
         privilegec /= Math.max(3, 1);
         break;
      }
      let aboutk = String.fromCharCode(49, 116, 116, 116, 0) == gradleL;
      do {
         gradleL += `${libimagepipelineL.length << (Math.min(4, gradleL.length))}`;
         if (aboutk) {
            break;
         }
      } while (aboutk && ((gradleL.length + parseInt(`${main_os}`)) <= 5 || (5 | gradleL.length) <= 2));
      unewinterstitialZ = `${confirmatione.length}`;
      let yingf = String.fromCharCode(115, 117, 98, 115, 116, 114, 105, 110, 103, 115, 95, 97, 95, 56, 55, 0);
      let neonv: Map<any, any> = new Map([[String.fromCharCode(99, 95, 51, 50, 95, 116, 101, 114, 109, 105, 110, 97, 116, 101, 0), false], [String.fromCharCode(119, 95, 50, 57, 95, 105, 115, 112, 111, 115, 97, 98, 108, 101, 0), true], [String.fromCharCode(114, 95, 55, 55, 95, 100, 114, 98, 103, 0), true]]);
      let transferp = 2.0;
      let gpayp = String.fromCharCode(120, 95, 50, 51, 95, 97, 97, 117, 100, 105, 111, 0);
      let resultu = 1;
      yingf = "3";
      gpayp += `${(String.fromCharCode(103, 0) == gpayp ? resultu : gpayp.length)}`;
      resultu <<= Math.min(2, Math.abs(1 + gpayp.length));
      neonv.set(`${transferp}`, parseInt(`${transferp}`) | neonv.size);
      while (5 <= (yingf.length & 3) || (yingf.length & neonv.size) <= 3) {
         let filterj: Map<any, any> = new Map([[String.fromCharCode(105, 95, 49, 53, 95, 102, 114, 111, 110, 116, 0), 148], [String.fromCharCode(114, 95, 53, 56, 95, 110, 117, 109, 0), 750], [String.fromCharCode(97, 98, 111, 114, 116, 95, 55, 95, 56, 49, 0), 49]]);
         let macauL = String.fromCharCode(99, 104, 105, 108, 108, 95, 117, 95, 55, 49, 0);
         let disconnectedv: Array<any> = [409, 259];
         let androidT = true;
         neonv = new Map([[`${neonv.size}`, (yingf == String.fromCharCode(101, 0) ? neonv.size : yingf.length)]]);
         filterj.set(macauL, ((androidT ? 5 : 2)));
         macauL = `${filterj.size - 2}`;
         disconnectedv = [disconnectedv.length << (Math.min(Math.abs(2), 5))];
         break;
      }
      yingf = `${neonv.size / (Math.max(yingf.length, 1))}`;
      transferp *= yingf.length * neonv.size;
      transferp -= yingf.length;
      transferp *= yingf.length;
      while (!Array.from(neonv.keys()).includes(`${transferp}`)) {
         neonv.set(`${transferp}`, neonv.size);
         break;
      }
      while (!yingf.startsWith(`${neonv.size}`)) {
         neonv = new Map([[`${neonv.size}`, parseInt(`${transferp}`)]]);
         break;
      }
      tickedd = `${typesT.length / 2}`;
      if (1 > nativeJ.length) {
         let libavfiltert = 3;
         let androidn = String.fromCharCode(102, 95, 53, 51, 95, 114, 101, 99, 101, 110, 116, 0);
         androidn += `${libavfiltert / 1}`;
         let halfC: Array<any> = [String.fromCharCode(100, 101, 113, 117, 101, 117, 101, 95, 97, 95, 53, 49, 0), String.fromCharCode(121, 95, 56, 49, 95, 113, 111, 115, 0)];
         androidn += `${(androidn == String.fromCharCode(49, 0) ? halfC.length : androidn.length)}`;
         for (let b = 0; b < 3; b++) {
            let mountingF = false;
            let away8 = String.fromCharCode(115, 116, 114, 105, 110, 103, 105, 102, 121, 95, 116, 95, 52, 0);
            libavfiltert *= away8.length;
            mountingF = (!mountingF ? mountingF : mountingF);
            away8 += `${(1 & (mountingF ? 1 : 3))}`;
         }
         libavfiltert &= (String.fromCharCode(122, 0) == androidn ? libavfiltert : androidn.length);
         let reward0 = androidn.length >= 7634576;
         do {
            let t_titleJ = 3.0;
            let mintegralO = String.fromCharCode(107, 95, 54, 57, 95, 97, 97, 97, 97, 0);
            let buttonN: Map<any, any> = new Map([[String.fromCharCode(115, 116, 97, 116, 101, 102, 117, 108, 95, 102, 95, 52, 48, 0), String.fromCharCode(107, 95, 55, 56, 95, 112, 114, 111, 98, 108, 101, 109, 115, 0)], [String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 101, 102, 95, 51, 95, 50, 54, 0), String.fromCharCode(98, 105, 116, 115, 95, 97, 95, 51, 51, 0)], [String.fromCharCode(113, 95, 51, 51, 95, 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 0), String.fromCharCode(114, 101, 115, 105, 122, 101, 95, 49, 95, 56, 55, 0)]]);
            androidn = `${androidn.length | 2}`;
            t_titleJ -= parseInt(`${t_titleJ}`);
            mintegralO += "1";
            buttonN = new Map([[`${buttonN.size}`, 1 >> (Math.min(4, Math.abs(buttonN.size)))]]);
            if (reward0) {
               break;
            }
         } while (reward0 && (4 == androidn.length));
         let hookg = 4946629 <= libavfiltert;
         do {
            let libavutilK = String.fromCharCode(118, 95, 53, 50, 95, 112, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 0);
            libavfiltert |= androidn.length % (Math.max(1, 4));
            libavutilK = `${libavutilK.length << (Math.min(Math.abs(3), 3))}`;
            if (hookg) {
               break;
            }
         } while (hookg && (androidn.endsWith(`${libavfiltert}`)));
         libswresample0 += `${1 >> (Math.min(Math.abs(parseInt(`${eactZ}`)), 1))}`;
      }
      if (singleD) {
         singleD = 70 >= videocommoni || 70 >= confirmatione.length;
      }
      dropdown2 -= 2;
      if (4 == tickedd.length) {
         let profileN = 3;
         let mathM: Map<any, any> = new Map([[String.fromCharCode(98, 95, 49, 54, 95, 116, 111, 103, 103, 108, 101, 0), 294], [String.fromCharCode(109, 95, 54, 51, 95, 115, 105, 122, 105, 110, 103, 0), 497]]);
         let vignette7: Array<any> = [481, 781, 517];
         if (!Array.from(mathM.values()).includes(vignette7.length)) {
            vignette7.push(mathM.size * vignette7.length);
         }
         for (let u = 0; u < 2; u++) {
            mathM = new Map([[`${mathM.size}`, mathM.size]]);
         }
         let skipQ = 3.0;
         let libruntimeexecutorj = 3.0;
         let reactK = libruntimeexecutorj >= 8442040.0;
         do {
            libruntimeexecutorj += parseFloat(`${parseInt(`${skipQ}`)}`);
            if (reactK) {
               break;
            }
         } while ((parseFloat(`${vignette7.length}`) >= libruntimeexecutorj) && reactK);
         profileN /= Math.max(2, 1);
         profileN >>= Math.min(2, Math.abs(profileN % 1));
         vignette7 = [2 / (Math.max(6, parseInt(`${skipQ}`)))];
         let stylesK = String.fromCharCode(107, 95, 49, 49, 95, 108, 111, 99, 97, 108, 105, 122, 101, 100, 0);
         while ((5.90 * skipQ) > 1.74 && (parseFloat(`${profileN}`) * skipQ) > 5.90) {
            let analyticA = String.fromCharCode(101, 120, 97, 110, 100, 101, 100, 95, 49, 95, 52, 57, 0);
            let circlee = false;
            let unticko = String.fromCharCode(109, 115, 115, 100, 115, 112, 95, 54, 95, 50, 56, 0);
            let goalz = String.fromCharCode(108, 95, 53, 49, 95, 109, 112, 100, 98, 0);
            profileN += 1 + mathM.size;
            analyticA = `${(unticko == String.fromCharCode(57, 0) ? analyticA.length : unticko.length)}`;
            circlee = analyticA.length < 68;
            goalz = `${goalz.length}`;
            break;
         }
         tickedd = `${parseInt(`${dropdown2}`) >> (Math.min(Math.abs(2), 3))}`;
      }
      let crownU = singleD ? !singleD : singleD;
      do {
         singleD = !singleD && unewinterstitialZ.length <= 82;
         if (crownU) {
            break;
         }
      } while (crownU && (!singleD));
      while ((5.80 + dropdown2) >= 3.4) {
         let feedbackO = 0.0;
         let nativeexs: Array<any> = [159, 74, 113];
         let loadingF = 3.0;
         let overlayg: Array<any> = [String.fromCharCode(115, 95, 53, 56, 95, 105, 116, 101, 114, 97, 116, 105, 111, 110, 0), String.fromCharCode(115, 97, 109, 112, 108, 101, 95, 51, 95, 55, 51, 0)];
         nativeexs.push(parseInt(`${feedbackO}`));
         loadingF -= parseFloat(`${parseInt(`${feedbackO}`)}`);
         while ((1 << (Math.min(4, nativeexs.length))) <= 1 && (1 | nativeexs.length) <= 1) {
            nativeexs.push(nativeexs.length);
            break;
         }
         let plashl = String.fromCharCode(118, 97, 114, 105, 97, 100, 105, 99, 95, 107, 95, 49, 51, 0);
         for (let a = 0; a < 3; a++) {
            nativeexs.push(parseInt(`${feedbackO}`) & parseInt(`${loadingF}`));
         }
         nativeexs = [nativeexs.length];
         let clearu = nativeexs.length >= 9458492;
         do {
            nativeexs.push(nativeexs.length);
            if (clearu) {
               break;
            }
         } while (((nativeexs.length % 1) > 2) && clearu);
         loadingF -= parseFloat(`${parseInt(`${feedbackO}`)}`);
         let playlist0 = feedbackO <= 7050541.0;
         do {
            feedbackO /= Math.max(parseFloat(`${overlayg.length & plashl.length}`), 4);
            if (playlist0) {
               break;
            }
         } while ((5 > plashl.length) && playlist0);
         nativeexs = [parseInt(`${loadingF}`) | parseInt(`${feedbackO}`)];
         loadingF /= Math.max(1, parseFloat(`${3 ^ parseInt(`${loadingF}`)}`));
         let point9 = feedbackO >= 5856643.0;
         do {
            feedbackO -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${feedbackO}`)), 1))}`);
            if (point9) {
               break;
            }
         } while (point9 && ((5.41 * feedbackO) > 3.8 && (feedbackO * parseFloat(`${nativeexs.length}`)) > 5.41));
         dropdown2 += 2 * confirmatione.length;
         break;
      }
      debug2 = videocommoni < 67 || !debug2;
      if (dropdown2 <= libswresample0.length) {
         dropdown2 /= Math.max(5, parseInt(`${eactZ}`) ^ 1);
      }
      libswresample0 += `${(String.fromCharCode(114, 0) == typesT ? parseInt(`${eactZ}`) : typesT.length)}`;
      while (confirmatione.endsWith(`${videocommoni}`)) {
         confirmatione = `${tickedd.length}`;
         break;
      }
      while (videocommoni == 5) {
         let calendark: Map<any, any> = new Map([[String.fromCharCode(114, 97, 116, 105, 110, 103, 95, 53, 95, 50, 50, 0), 758], [String.fromCharCode(109, 111, 100, 101, 120, 112, 95, 121, 95, 50, 55, 0), 717]]);
         let castz = 0.0;
         castz /= Math.max(parseFloat(`${3 | parseInt(`${castz}`)}`), 4);
         while (3.39 > (parseFloat(`${calendark.size}`) + castz) || 4.74 > (castz + 3.39)) {
            castz /= Math.max(parseFloat(`${calendark.size}`), 4);
            break;
         }
         if (castz < 1.55) {
            calendark = new Map([[`${calendark.size}`, calendark.size << (Math.min(2, Math.abs(parseInt(`${castz}`))))]]);
         }
         calendark.set(`${castz}`, parseInt(`${castz}`));
         castz /= Math.max(parseFloat(`${parseInt(`${castz}`) & calendark.size}`), 4);
         if (5.93 > castz) {
            calendark.set(`${castz}`, calendark.size << (Math.min(1, Math.abs(parseInt(`${castz}`)))));
         }
         videocommoni += (3 & (debug2 ? 1 : 4));
         break;
      }
      dropdown2 /= Math.max(tickedd.length & 2, 4);
      while (4 < videocommoni) {
         let danger4 = String.fromCharCode(114, 103, 98, 120, 95, 116, 95, 55, 50, 0);
         let videojsZ = String.fromCharCode(100, 95, 57, 56, 95, 102, 119, 100, 0);
         let libswscaleL = String.fromCharCode(114, 112, 114, 111, 98, 101, 95, 116, 95, 55, 49, 0);
         let countdownS: Map<any, any> = new Map([[String.fromCharCode(117, 95, 55, 95, 105, 100, 101, 110, 116, 105, 116, 121, 0), 454], [String.fromCharCode(117, 95, 53, 57, 95, 97, 99, 107, 110, 111, 119, 108, 101, 100, 103, 101, 100, 0), 905], [String.fromCharCode(121, 95, 57, 55, 95, 117, 110, 109, 105, 110, 105, 109, 105, 122, 101, 0), 750]]);
         let stationsa = String.fromCharCode(101, 116, 105, 109, 101, 95, 101, 95, 55, 50, 0);
         let debugg: Map<any, any> = new Map([[String.fromCharCode(101, 120, 116, 115, 107, 95, 108, 95, 51, 55, 0), 723], [String.fromCharCode(108, 95, 54, 53, 95, 99, 104, 97, 110, 110, 101, 108, 115, 0), 829]]);
         videojsZ = `${stationsa.length}`;
         countdownS = new Map([[`${debugg.size}`, debugg.size | 2]]);
         stationsa = `${1 >> (Math.min(2, Math.abs(countdownS.size)))}`;
         for (let x = 0; x < 3; x++) {
            libswscaleL += `${danger4.length >> (Math.min(Math.abs(1), 1))}`;
         }
         singleD = (videocommoni * tickedd.length) >= 58;
         break;
      }
      debug2 = 90 > final_hoo.length || 90 > videocommoni;
      let handlerS = 7996402 <= typesT.length;
      do {
         typesT = `${unewinterstitialZ.length}`;
         if (handlerS) {
            break;
         }
      } while ((4 < (typesT.length ^ 1) || 5 < (1 & typesT.length)) && handlerS);
      let orientationW = 2.0;
      let animationsG = String.fromCharCode(114, 97, 105, 116, 95, 122, 95, 53, 52, 0);
      let disconnected8 = true;
      let typesU = 4.0;
      animationsG += `${parseInt(`${typesU}`) * 1}`;
      disconnected8 = (disconnected8 ? disconnected8 : disconnected8);
      typesU *= ((disconnected8 ? 3 : 3));
      let downloadere = orientationW >= 8904989.0;
      do {
         let completeM = String.fromCharCode(115, 101, 116, 116, 101, 114, 95, 118, 95, 55, 56, 0);
         orientationW += parseFloat(`${completeM.length}`);
         if (downloadere) {
            break;
         }
      } while ((5.97 >= (3.60 * orientationW)) && downloadere);
      tickedd = `${2 & tickedd.length}`;
      for (let x = 0; x < 2; x++) {
         let dialoga = String.fromCharCode(101, 110, 116, 101, 114, 105, 110, 103, 95, 107, 95, 52, 53, 0);
         let libreact7 = String.fromCharCode(114, 101, 99, 111, 103, 110, 105, 122, 101, 114, 115, 95, 121, 95, 57, 48, 0);
         let benefitg = String.fromCharCode(115, 95, 53, 51, 95, 119, 104, 97, 116, 0);
         for (let e = 0; e < 1; e++) {
            dialoga += `${dialoga.length << (Math.min(4, libreact7.length))}`;
         }
         let launcherX = 5.0;
         libreact7 += `${benefitg.length}`;
         launcherX *= parseFloat(`${parseInt(`${launcherX}`)}`);
         if (!benefitg.startsWith(dialoga)) {
            benefitg = "1";
         }
         for (let p = 0; p < 2; p++) {
            let stationz = 2.0;
            dialoga = `${parseInt(`${stationz}`) % 1}`;
         }
         let libhermesw = true;
         let refreshM = 2.0;
         benefitg += `${((libhermesw ? 1 : 2) + parseInt(`${refreshM}`))}`;
         let leftm: Array<any> = [540, 785];
         let inactive6: Array<any> = [String.fromCharCode(100, 101, 102, 105, 110, 101, 100, 95, 55, 95, 55, 55, 0), String.fromCharCode(119, 95, 50, 51, 95, 97, 116, 116, 97, 99, 104, 0)];
         inactive6.push(dialoga.length);
         if (!benefitg.startsWith(`${inactive6.length}`)) {
            inactive6 = [benefitg.length];
         }
         let download2 = leftm.length >= 8096648;
         do {
            leftm = [libreact7.length ^ dialoga.length];
            if (download2) {
               break;
            }
         } while ((3 < (inactive6.length << (Math.min(Math.abs(5), 4)))) && download2);
         nativeJ += "3";
      }
      dropdown2 *= parseInt(`${dropdown2}`);
      while (2 >= unewinterstitialZ.length) {
         singleD = 40.27 > eactZ;
         break;
      }
      final_hoo = `${confirmatione.length - parseInt(`${dropdown2}`)}`;
      if (typesT != libswresample0) {
         let attributedstringC = 1.0;
         let playk = 4.0;
         let liveq: Map<any, any> = new Map([[String.fromCharCode(100, 95, 53, 51, 95, 99, 111, 109, 112, 117, 116, 101, 0), 586], [String.fromCharCode(116, 95, 52, 51, 95, 112, 97, 107, 116, 0), 668]]);
         let episodes1 = String.fromCharCode(115, 116, 109, 116, 95, 106, 95, 50, 48, 0);
         let popupR = String.fromCharCode(116, 116, 116, 95, 112, 95, 50, 51, 0);
         liveq.set(`${attributedstringC}`, liveq.size * 3);
         attributedstringC /= Math.max(2, liveq.size & 1);
         for (let p = 0; p < 1; p++) {
            liveq = new Map([[`${liveq.size}`, (String.fromCharCode(114, 0) == episodes1 ? episodes1.length : liveq.size)]]);
         }
         episodes1 += `${1 + parseInt(`${playk}`)}`;
         let canvase = 2.0;
         while (5 > (episodes1.length << (Math.min(Math.abs(3), 1)))) {
            episodes1 = `${liveq.size}`;
            break;
         }
         let weibo8 = canvase >= 6457745.0;
         do {
            canvase /= Math.max(5, parseFloat(`${liveq.size + parseInt(`${attributedstringC}`)}`));
            if (weibo8) {
               break;
            }
         } while ((2.1 < (canvase * 1.37) || (5 * parseInt(`${canvase}`)) < 1) && weibo8);
         episodes1 = "2";
         liveq = new Map([[`${liveq.size}`, liveq.size << (Math.min(Math.abs(1), 1))]]);
         let placementq = 2.0;
         let sort1 = 3.0;
         canvase /= Math.max(3, parseFloat(`${liveq.size}`));
         placementq *= 2;
         sort1 -= parseFloat(`${parseInt(`${sort1}`) / 2}`);
         episodes1 += "3";
         episodes1 = "3";
         let stylesR = String.fromCharCode(97, 109, 112, 108, 105, 102, 121, 95, 121, 95, 56, 0);
         let internet3 = 5.0;
         episodes1 += `${3 * liveq.size}`;
         stylesR += `${stylesR.length}`;
         internet3 *= parseFloat(`${stylesR.length}`);
         let gestureW: Array<any> = [655, 234];
         let custom6: Map<any, any> = new Map([[String.fromCharCode(112, 97, 99, 107, 101, 116, 104, 101, 97, 100, 101, 114, 95, 118, 95, 52, 53, 0), 891], [String.fromCharCode(99, 108, 101, 97, 114, 97, 108, 108, 95, 55, 95, 52, 48, 0), 681]]);
         let commentu = false;
         episodes1 = `${((commentu ? 2 : 4) ^ parseInt(`${playk}`))}`;
         gestureW.push(custom6.size % (Math.max(gestureW.length, 1)));
         custom6.set(`${gestureW.length}`, custom6.size >> (Math.min(gestureW.length, 1)));
         commentu = 66 == gestureW.length;
         let clearQ = playk <= 8174566.0;
         do {
            playk *= parseFloat(`${episodes1.length % (Math.max(5, parseInt(`${canvase}`)))}`);
            if (clearQ) {
               break;
            }
         } while ((1 > (liveq.size ^ 2) && (liveq.size | 2) > 3) && clearQ);
         libswresample0 = `${1 >> (Math.min(1, nativeJ.length))}`;
      }
      unewinterstitialZ = `${roundT.length}`;

      setIsDialogOpen(!isDialogOpen);
   };

   const spamToggleB = () => {
      let orangeH: Map<any, any> = new Map([[String.fromCharCode(116, 114, 101, 97, 100, 95, 117, 95, 55, 57, 0), 269], [String.fromCharCode(119, 95, 49, 95, 99, 97, 99, 104, 101, 100, 0), 31]]);
      let anythinkr = String.fromCharCode(99, 111, 109, 112, 97, 114, 101, 102, 95, 116, 95, 50, 55, 0);
      let ewarded6 = String.fromCharCode(100, 99, 116, 120, 100, 99, 95, 120, 95, 53, 52, 0);
      let gradlewO = String.fromCharCode(115, 95, 50, 49, 95, 98, 112, 115, 0);
      let leakcheckerS = 3.0;
      let darkE = 2.0;
      let filedv = 3.0;
      let floatingf = 2.0;
      let crossu = false;
      let animationX = String.fromCharCode(119, 97, 107, 101, 95, 113, 95, 55, 56, 0);
      let referrerH = String.fromCharCode(115, 115, 114, 99, 115, 95, 117, 95, 57, 56, 0);
      let agreementl: Array<any> = [574, 786, 174];
      let usernameu = 5.0;
      let topic1: Array<any> = [String.fromCharCode(111, 95, 49, 95, 108, 111, 116, 116, 105, 101, 112, 114, 111, 120, 121, 109, 111, 100, 101, 108, 0), String.fromCharCode(113, 112, 98, 105, 116, 115, 95, 117, 95, 51, 55, 0)];
      anythinkr = `${2 << (Math.min(Math.abs(parseInt(`${darkE}`)), 4))}`;
      for (let u = 0; u < 2; u++) {
         orangeH = new Map([[`${darkE}`, 2 ^ parseInt(`${floatingf}`)]]);
      }
      let sportsU = animationX == String.fromCharCode(56, 110, 100, 56, 98, 52, 0);
      do {
         animationX = `${gradlewO.length * 3}`;
         if (sportsU) {
            break;
         }
      } while (sportsU && (!animationX.startsWith(`${referrerH.length}`)));
      while (gradlewO.includes(`${leakcheckerS}`)) {
         leakcheckerS -= parseInt(`${filedv}`) * anythinkr.length;
         break;
      }
      leakcheckerS -= anythinkr.length | 1;
      let gemfileo = 0;
      gemfileo += gemfileo ^ 1;
      gemfileo ^= 3;
      gemfileo |= gemfileo;
      leakcheckerS *= (animationX == String.fromCharCode(80, 0) ? animationX.length : referrerH.length);
      let customL = animationX.length >= 8678057;
      do {
         animationX += "2";
         if (customL) {
            break;
         }
      } while ((1 == anythinkr.length) && customL);
      for (let f = 0; f < 3; f++) {
         referrerH += `${(anythinkr.length << (Math.min(5, Math.abs((crossu ? 5 : 1)))))}`;
      }
      while (2 < (ewarded6.length | 4)) {
         agreementl = [(String.fromCharCode(81, 0) == anythinkr ? anythinkr.length : parseInt(`${leakcheckerS}`))];
         break;
      }
      let bannera = 7819287 <= orangeH.size;
      do {
         orangeH.set(gradlewO, parseInt(`${leakcheckerS}`) - 1);
         if (bannera) {
            break;
         }
      } while ((!animationX.startsWith(`${orangeH.size}`)) && bannera);
      filedv /= Math.max(parseFloat(`${animationX.length}`), 2);
      if (orangeH.get(`${darkE}`) != null) {
         let backgroundt = 1.0;
         let switch_w7 = String.fromCharCode(104, 95, 56, 49, 95, 98, 101, 115, 115, 101, 108, 0);
         let right6 = String.fromCharCode(105, 95, 52, 95, 114, 101, 100, 97, 0);
         let formp = 0;
         let fieldH: Array<any> = [685, 3];
         if ((fieldH.length | switch_w7.length) <= 3) {
            fieldH = [switch_w7.length & 2];
         }
         let usernameD = 2.0;
         formp *= formp;
         usernameD /= Math.max(parseInt(`${usernameD}`), 3);
         for (let n = 0; n < 2; n++) {
            right6 = "1";
         }
         if (4 >= right6.length) {
            let langD = 5.0;
            let bellO = 2.0;
            formp <<= Math.min(Math.abs(right6.length ^ formp), 1);
            langD /= Math.max(4, parseFloat(`${1 + parseInt(`${langD}`)}`));
            bellO /= Math.max(1, parseFloat(`${parseInt(`${langD}`)}`));
         }
         switch_w7 = `${2 & switch_w7.length}`;
         switch_w7 += "2";
         let hooksX = String.fromCharCode(97, 114, 101, 116, 104, 101, 114, 101, 95, 119, 95, 54, 51, 0);
         let inactiveq = String.fromCharCode(122, 95, 54, 50, 95, 103, 114, 101, 121, 115, 0);
         if (inactiveq.length == switch_w7.length) {
            let mountingw = false;
            let latn5: Map<any, any> = new Map([[String.fromCharCode(99, 111, 101, 102, 115, 95, 117, 95, 49, 53, 0), true], [String.fromCharCode(97, 95, 52, 53, 95, 109, 111, 109, 101, 110, 116, 115, 0), true]]);
            let langkey0: Array<any> = [735, 915, 215];
            let verticalz = String.fromCharCode(115, 117, 98, 100, 101, 99, 111, 100, 101, 114, 95, 56, 95, 52, 55, 0);
            inactiveq = `${inactiveq.length << (Math.min(5, Math.abs(parseInt(`${backgroundt}`))))}`;
            mountingw = verticalz.length >= 49;
            latn5 = new Map([[`${langkey0.length}`, langkey0.length / (Math.max(verticalz.length, 4))]]);
         }
         right6 = `${switch_w7.length}`;
         backgroundt /= Math.max(3, (switch_w7 == String.fromCharCode(102, 0) ? formp : switch_w7.length));
         right6 += `${1 >> (Math.min(Math.abs(formp), 5))}`;
         switch_w7 += `${(hooksX == String.fromCharCode(54, 0) ? switch_w7.length : hooksX.length)}`;
         hooksX += `${parseInt(`${backgroundt}`) >> (Math.min(Math.abs(2), 1))}`;
         let tickedX = 0;
         backgroundt -= 1 - fieldH.length;
         tickedX -= 3 - tickedX;
         if (fieldH.length > formp) {
            fieldH.push(parseInt(`${backgroundt}`) / (Math.max(switch_w7.length, 2)));
         }
         darkE += ((crossu ? 3 : 3));
      }
      let historyd = String.fromCharCode(114, 51, 109, 106, 100, 52, 118, 54, 110, 103, 0) == ewarded6;
      do {
         ewarded6 = `${orangeH.size}`;
         if (historyd) {
            break;
         }
      } while (historyd && (1 < (ewarded6.length & orangeH.size)));
      while (ewarded6.includes(animationX)) {
         animationX = `${(1 - (crossu ? 5 : 3))}`;
         break;
      }
      let volumeh = 5.0;
      let analytic1 = String.fromCharCode(99, 117, 98, 101, 95, 97, 95, 51, 52, 0);
      let pausej = 5.0;
      analytic1 += `${analytic1.length}`;
      pausej /= Math.max(4, parseFloat(`${2}`));
      let halfs = String.fromCharCode(108, 111, 99, 107, 97, 98, 108, 101, 95, 54, 95, 53, 48, 0);
      volumeh /= Math.max(3, (String.fromCharCode(117, 0) == halfs ? halfs.length : parseInt(`${volumeh}`)));
      let zhuboP = String.fromCharCode(114, 95, 51, 56, 95, 99, 108, 117, 115, 116, 0);
      let privacyD = String.fromCharCode(105, 95, 51, 95, 116, 105, 108, 101, 120, 0);
      analytic1 = `${privacyD.length - parseInt(`${pausej}`)}`;
      zhuboP = `${zhuboP.length}`;
      privacyD = `${zhuboP.length}`;
      let binddatasf = 3.0;
      pausej *= parseFloat(`${3}`);
      binddatasf += parseFloat(`${2}`);
      let default_uH = String.fromCharCode(115, 121, 109, 98, 111, 108, 105, 99, 97, 116, 101, 95, 119, 95, 53, 54, 0);
      let langW = String.fromCharCode(113, 99, 101, 108, 112, 95, 122, 95, 57, 52, 0);
      let libpangleflippedc = String.fromCharCode(108, 95, 50, 51, 95, 97, 117, 116, 111, 109, 97, 116, 105, 99, 0);
      analytic1 = "3";
      default_uH = `${langW.length}`;
      langW += `${langW.length * default_uH.length}`;
      libpangleflippedc = `${langW.length}`;
      let manifestO: Array<any> = [830, 381, 849];
      let emojiA: Array<any> = [161, 678];
      manifestO = [analytic1.length >> (Math.min(3, manifestO.length))];
      let private_voQ = true;
      ewarded6 = `${orangeH.size & 2}`;
      anythinkr += `${agreementl.length | 3}`;
      while ((3 * referrerH.length) >= 1 || 5.24 >= (3.46 / (Math.max(1, filedv)))) {
         referrerH = `${3 & agreementl.length}`;
         break;
      }
      anythinkr += "1";
      let favorite3 = orangeH.size >= 7621743;
      do {
         orangeH = new Map([[ewarded6, 2]]);
         if (favorite3) {
            break;
         }
      } while ((2.96 == (orangeH.size * leakcheckerS) || (orangeH.size * leakcheckerS) == 2.96) && favorite3);
      for (let v = 0; v < 2; v++) {
         floatingf -= gradlewO.length;
      }
      filedv -= parseFloat(`${orangeH.size / (Math.max(10, parseInt(`${usernameu}`)))}`);
      while (gradlewO.length >= 4) {
         leakcheckerS *= 3 % (Math.max(parseInt(`${usernameu}`), 9));
         break;
      }
      let libfbc = leakcheckerS <= 6121167.0;
      do {
         let hejiL = 2;
         let short_o3g = String.fromCharCode(97, 95, 50, 52, 95, 101, 120, 116, 101, 114, 110, 0);
         let floaterH: Map<any, any> = new Map([[String.fromCharCode(97, 100, 100, 109, 111, 100, 95, 122, 95, 56, 50, 0), 907], [String.fromCharCode(115, 117, 105, 116, 101, 115, 95, 53, 95, 50, 57, 0), 305], [String.fromCharCode(98, 95, 52, 51, 95, 116, 114, 117, 116, 104, 0), 521]]);
         let becomeW = String.fromCharCode(98, 111, 117, 110, 100, 101, 100, 95, 56, 95, 55, 55, 0);
         short_o3g = `${becomeW.length << (Math.min(Math.abs(3), 1))}`;
         let awayT = hejiL <= 5403147;
         do {
            hejiL += floaterH.size & 3;
            if (awayT) {
               break;
            }
         } while (awayT && ((short_o3g.length | 1) == 5));
         while ((floaterH.size ^ 3) < 3) {
            floaterH = new Map([[`${floaterH.size}`, becomeW.length]]);
            break;
         }
         let attributedstringR = String.fromCharCode(103, 114, 101, 121, 95, 102, 95, 53, 55, 0);
         let profileh = String.fromCharCode(110, 110, 109, 111, 100, 95, 55, 95, 55, 55, 0);
         let readV: Array<any> = [832, 211, 556];
         hejiL += 3;
         attributedstringR += `${profileh.length >> (Math.min(4, readV.length))}`;
         profileh = `${attributedstringR.length + 3}`;
         readV = [3];
         while (!short_o3g.endsWith(`${hejiL}`)) {
            let context4 = String.fromCharCode(115, 112, 97, 116, 105, 97, 108, 95, 57, 95, 57, 52, 0);
            let closem: Array<any> = [527, 662, 513];
            short_o3g += `${context4.length ^ short_o3g.length}`;
            context4 = `${closem.length >> (Math.min(Math.abs(2), 1))}`;
            closem.push(3);
            break;
         }
         becomeW = "3";
         becomeW += `${2 ^ becomeW.length}`;
         if ((1 - becomeW.length) <= 1 || (becomeW.length - floaterH.size) <= 1) {
            becomeW = `${(becomeW == String.fromCharCode(120, 0) ? floaterH.size : becomeW.length)}`;
         }
         floaterH.set(`${short_o3g}`, (short_o3g == String.fromCharCode(73, 0) ? floaterH.size : short_o3g.length));
         floaterH.set(`${hejiL}`, 2);
         becomeW = `${hejiL}`;
         let details2: Array<any> = [340, 356];
         let libfabricjniH: Array<any> = [664, 645, 29];
         leakcheckerS /= Math.max(parseInt(`${usernameu}`), 5);
         if (libfbc) {
            break;
         }
      } while ((2 >= (animationX.length - 1)) && libfbc);
      let graphE = String.fromCharCode(105, 110, 105, 116, 115, 109, 111, 116, 105, 111, 110, 95, 109, 95, 56, 56, 0);
      graphE = "1";
      graphE = `${(String.fromCharCode(112, 0) == graphE ? graphE.length : graphE.length)}`;
      graphE += `${graphE.length ^ graphE.length}`;
      floatingf -= (gradlewO == String.fromCharCode(55, 0) ? gradlewO.length : parseInt(`${usernameu}`));
      crossu = topic1.length >= 94 && referrerH.length >= 94;
      for (let d = 0; d < 1; d++) {
         topic1 = [parseInt(`${darkE}`) % 1];
      }
      if (gradlewO.startsWith(`${usernameu}`)) {
         gradlewO += `${ewarded6.length}`;
      }
      while (3 <= (parseInt(`${usernameu}`) / (Math.max(topic1.length, 2))) && 5.40 <= (usernameu / (Math.max(2.43, 9)))) {
         usernameu /= Math.max(parseFloat(`${2}`), 1);
         break;
      }
      setCountToggleB(countToggleB + 1);
   }

   const switchToggle = async () => {
      let bufferw = true;
      let sheetK = true;
      let componentD = 5.0;
      let dragX = 4;
      let constantsn = String.fromCharCode(105, 95, 56, 54, 95, 115, 105, 103, 110, 108, 101, 0);
      let volume7: Map<any, any> = new Map([[String.fromCharCode(121, 95, 51, 95, 114, 97, 100, 102, 103, 0), 432], [String.fromCharCode(118, 95, 57, 55, 95, 111, 97, 117, 116, 104, 0), 29]]);
      let humidityb = 5.0;
      let pingI: Map<any, any> = new Map([[String.fromCharCode(107, 95, 52, 56, 95, 114, 111, 120, 121, 0), true], [String.fromCharCode(112, 107, 101, 121, 95, 113, 95, 52, 51, 0), true], [String.fromCharCode(115, 116, 115, 122, 95, 55, 95, 51, 49, 0), false]]);
      let valuesh = String.fromCharCode(104, 95, 50, 57, 95, 102, 105, 114, 115, 116, 112, 97, 115, 115, 0);
      let chinasamer = 0.0;
      let linex = String.fromCharCode(113, 95, 55, 53, 95, 110, 111, 114, 109, 97, 108, 105, 122, 101, 100, 0);
      let libreactnativeblobY = 2.0;
      let stylesa = true;
      let temperaturef = 4.0;
      let mapping7: Map<any, any> = new Map([[String.fromCharCode(115, 104, 111, 114, 116, 115, 95, 50, 95, 56, 54, 0), 159], [String.fromCharCode(115, 117, 110, 115, 101, 116, 95, 54, 95, 49, 51, 0), 375]]);
      let annerW = 4.0;
      while (1.25 >= (libreactnativeblobY - 2.77) || !sheetK) {
         let hoverG = 4;
         let ewardedy = false;
         let malaysiaO = String.fromCharCode(121, 95, 53, 51, 95, 100, 99, 98, 122, 108, 0);
         let acceptedx = 1.0;
         let storeV = 5.0;
         if (1 == (5 & hoverG) || ewardedy) {
            ewardedy = !ewardedy;
         }
         let checkboxs: Array<any> = [String.fromCharCode(108, 95, 54, 49, 95, 115, 99, 97, 110, 115, 116, 97, 116, 117, 115, 0), String.fromCharCode(112, 95, 53, 54, 95, 99, 111, 109, 98, 105, 110, 101, 114, 0), String.fromCharCode(105, 115, 115, 112, 97, 99, 101, 95, 50, 95, 52, 49, 0)];
         storeV /= Math.max(parseFloat(`${malaysiaO.length}`), 5);
         for (let w = 0; w < 1; w++) {
            malaysiaO = `${hoverG}`;
         }
         storeV /= Math.max(2, (parseFloat(`${malaysiaO.length + (ewardedy ? 5 : 2)}`)));
         checkboxs = [((ewardedy ? 3 : 5) & malaysiaO.length)];
         ewardedy = !ewardedy;
         if (5 <= (checkboxs.length - 3)) {
            ewardedy = !ewardedy;
         }
         libreactnativeblobY += volume7.size & linex.length;
         break;
      }
      for (let a = 0; a < 3; a++) {
         let telegramh = true;
         let yelloww = String.fromCharCode(99, 101, 114, 116, 105, 102, 105, 99, 97, 116, 101, 95, 97, 95, 52, 0);
         let short_s1 = 2.0;
         let league4 = 0;
         let libavcodec1 = String.fromCharCode(98, 97, 115, 101, 95, 113, 95, 54, 0);
         while (!yelloww.includes(`${league4}`)) {
            league4 %= Math.max(5, 1);
            break;
         }
         if (2.57 > short_s1) {
            let tooltipsp = String.fromCharCode(103, 97, 105, 110, 115, 95, 118, 95, 55, 53, 0);
            let backK = 2.0;
            let mbbannerP = 3;
            let telemetryl = String.fromCharCode(115, 99, 104, 101, 109, 97, 95, 98, 95, 54, 49, 0);
            let blackw = 2.0;
            league4 /= Math.max(3, league4 & parseInt(`${blackw}`));
            tooltipsp += `${(String.fromCharCode(101, 0) == tooltipsp ? tooltipsp.length : mbbannerP)}`;
            backK -= parseFloat(`${tooltipsp.length % (Math.max(3, 4))}`);
            mbbannerP &= 2 + mbbannerP;
            telemetryl = `${(String.fromCharCode(114, 0) == tooltipsp ? telemetryl.length : tooltipsp.length)}`;
            blackw /= Math.max(tooltipsp.length % (Math.max(1, 2)), 2);
         }
         if (!yelloww.endsWith(`${telegramh}`)) {
            telegramh = yelloww.length <= 39;
         }
         let whatsapp7 = String.fromCharCode(99, 95, 53, 52, 95, 115, 111, 114, 101, 99, 101, 105, 118, 101, 0);
         while (!whatsapp7.endsWith(`${libavcodec1.length}`)) {
            libavcodec1 = `${whatsapp7.length / (Math.max(3, 7))}`;
            break;
         }
         let shirtm = String.fromCharCode(107, 95, 49, 48, 95, 114, 101, 115, 101, 116, 117, 112, 0);
         let megaphoner = String.fromCharCode(109, 95, 52, 48, 95, 97, 99, 104, 101, 0);
         telegramh = league4 >= short_s1;
         shirtm += `${1 / (Math.max(2, shirtm.length))}`;
         megaphoner += `${(shirtm == String.fromCharCode(52, 0) ? megaphoner.length : shirtm.length)}`;
         let movies6 = yelloww.length >= 8020706;
         do {
            let clockb = String.fromCharCode(117, 95, 53, 53, 95, 108, 101, 98, 110, 0);
            let rules1: Array<any> = [179, 343];
            yelloww += `${2 << (Math.min(3, libavcodec1.length))}`;
            clockb = `${2 ^ rules1.length}`;
            rules1.push(clockb.length + rules1.length);
            if (movies6) {
               break;
            }
         } while ((1 <= (league4 ^ yelloww.length) && 3 <= (yelloww.length ^ 1)) && movies6);
         telegramh = !telegramh;
         let chats = String.fromCharCode(105, 55, 119, 48, 0) == libavcodec1;
         do {
            libavcodec1 = `${1 >> (Math.min(2, libavcodec1.length))}`;
            if (chats) {
               break;
            }
         } while (chats && (libavcodec1.startsWith(`${league4}`)));
         let minimize9 = String.fromCharCode(98, 103, 98, 103, 100, 0) == yelloww;
         do {
            yelloww += `${whatsapp7.length % 2}`;
            if (minimize9) {
               break;
            }
         } while (minimize9 && (whatsapp7 != String.fromCharCode(68, 0) && yelloww == String.fromCharCode(70, 0)));
         for (let s = 0; s < 1; s++) {
            whatsapp7 += `${(2 & (telegramh ? 4 : 3))}`;
         }
         let classesk = 0.0;
         let kuaishouU = false;
         whatsapp7 += `${league4}`;
         classesk -= parseInt(`${classesk}`) * 1;
         kuaishouU = !kuaishouU;
         let heji3 = yelloww.length <= 8327711;
         do {
            let pausem = 3.0;
            yelloww = "3";
            pausem -= parseInt(`${pausem}`) >> (Math.min(4, Math.abs(2)));
            if (heji3) {
               break;
            }
         } while (heji3 && (5.46 > (short_s1 / 3.63)));
         let update_iJ: Array<any> = [797, 53, 346];
         let statisticst: Map<any, any> = new Map([[String.fromCharCode(100, 101, 109, 111, 100, 117, 108, 97, 116, 101, 95, 116, 95, 52, 52, 0), 233], [String.fromCharCode(108, 111, 111, 112, 115, 95, 115, 95, 49, 57, 0), 2]]);
         yelloww = "1";
         update_iJ.push(update_iJ.length);
         statisticst.set(`${update_iJ.length}`, 2 | update_iJ.length);
         let sinaT = String.fromCharCode(114, 95, 56, 56, 0);
         libreactnativeblobY += parseInt(`${humidityb}`) >> (Math.min(valuesh.length, 2));
      }
      while ((5 << (Math.min(3, valuesh.length))) < 2 || 2.64 < (componentD / 2.99)) {
         let floatingP = 4;
         let bell_ = String.fromCharCode(115, 112, 111, 116, 95, 56, 95, 53, 53, 0);
         let becomem = 3;
         let combined3 = String.fromCharCode(108, 95, 54, 53, 95, 101, 100, 105, 97, 0);
         let long_1o = String.fromCharCode(115, 95, 49, 55, 95, 98, 110, 104, 101, 120, 0);
         for (let d = 0; d < 3; d++) {
            becomem |= 1;
         }
         floatingP ^= becomem;
         let yellow8 = 0;
         let layout7 = 0.0;
         let fastw = 0;
         floatingP |= 2 / (Math.max(8, bell_.length));
         yellow8 <<= Math.min(Math.abs(parseInt(`${layout7}`) | 3), 4);
         layout7 += parseFloat(`${fastw - yellow8}`);
         fastw /= Math.max(5, 1 / (Math.max(3, yellow8)));
         let libtanj = combined3 == String.fromCharCode(100, 120, 101, 0);
         do {
            combined3 = `${becomem}`;
            if (libtanj) {
               break;
            }
         } while (libtanj && (long_1o.length <= 2));
         becomem >>= Math.min(5, Math.abs(long_1o.length >> (Math.min(Math.abs(2), 5))));
         floatingP *= 1;
         for (let n = 0; n < 3; n++) {
            let flipperg: Array<any> = [739, 76];
            floatingP /= Math.max(1, (combined3 == String.fromCharCode(116, 0) ? long_1o.length : combined3.length));
            flipperg = [3];
         }
         let goalj = 5.0;
         let updatesd = 0;
         let libreactperfloggerjnib = String.fromCharCode(115, 95, 54, 56, 95, 101, 109, 117, 108, 97, 116, 101, 100, 0);
         bell_ += `${libreactperfloggerjnib.length * floatingP}`;
         goalj += parseFloat(`${updatesd >> (Math.min(2, Math.abs(3)))}`);
         updatesd &= parseInt(`${goalj}`) >> (Math.min(5, Math.abs(updatesd)));
         libreactperfloggerjnib += `${parseInt(`${goalj}`)}`;
         floatingP -= long_1o.length + 3;
         combined3 += "1";
         let networkc = 4.0;
         let langj = 5.0;
         for (let k = 0; k < 2; k++) {
            long_1o = `${combined3.length / 2}`;
         }
         let gesturesE = 0.0;
         floatingP &= 1 << (Math.min(Math.abs(parseInt(`${gesturesE}`)), 5));
         floatingP ^= 3;
         langj *= 2;
         componentD -= parseFloat(`${valuesh.length & constantsn.length}`);
         break;
      }
      while (5.85 < (1.48 / (Math.max(3, componentD))) || sheetK) {
         let proxyR = 4.0;
         let entryY = 5.0;
         let detailP = String.fromCharCode(121, 95, 57, 52, 95, 115, 121, 110, 99, 115, 97, 102, 101, 0);
         let binddatask = false;
         let register_muv: Map<any, any> = new Map([[String.fromCharCode(114, 101, 109, 105, 120, 95, 104, 95, 56, 50, 0), 470], [String.fromCharCode(107, 95, 51, 50, 95, 99, 97, 108, 99, 108, 117, 108, 97, 116, 101, 0), 732], [String.fromCharCode(102, 112, 109, 98, 95, 106, 95, 54, 48, 0), 490]]);
         if (4.20 == entryY) {
            detailP = "2";
         }
         let libreactk = String.fromCharCode(115, 113, 108, 105, 116, 101, 112, 97, 103, 101, 114, 95, 105, 95, 53, 51, 0);
         let listT = binddatask ? !binddatask : binddatask;
         do {
            binddatask = entryY >= 26.43;
            if (listT) {
               break;
            }
         } while ((!binddatask || (register_muv.size % 5) <= 1) && listT);
         if (entryY <= 2.87) {
            register_muv.set(`${entryY}`, 1);
         }
         for (let c = 0; c < 2; c++) {
            register_muv.set(`${binddatask}`, 2);
         }
         let shrinkp = register_muv.size >= 7659737;
         do {
            register_muv = new Map([[libreactk, 3 - libreactk.length]]);
            if (shrinkp) {
               break;
            }
         } while ((3 >= (5 - register_muv.size)) && shrinkp);
         if (3 == (libreactk.length ^ 5) || (register_muv.size ^ 5) == 4) {
            register_muv.set(libreactk, libreactk.length);
         }
         let codegenU = 3;
         let other9 = String.fromCharCode(115, 108, 97, 115, 104, 101, 115, 95, 114, 95, 56, 55, 0);
         binddatask = proxyR < 58.93;
         codegenU >>= Math.min(other9.length, 2);
         other9 = `${codegenU % (Math.max(1, 8))}`;
         binddatask = 7.71 >= entryY;
         proxyR *= register_muv.size >> (Math.min(detailP.length, 3));
         let alertI = String.fromCharCode(98, 95, 52, 49, 95, 112, 114, 101, 115, 115, 0);
         register_muv.set(`${binddatask}`, register_muv.size ^ 2);
         alertI = `${(alertI == String.fromCharCode(86, 0) ? alertI.length : alertI.length)}`;
         while (2.32 < entryY) {
            binddatask = register_muv.size < 73;
            break;
         }
         let qaagp = 3;
         let encrypt5 = 4.0;
         let rewind6 = 5;
         libreactk += `${(1 - (binddatask ? 1 : 3))}`;
         qaagp <<= Math.min(Math.abs(qaagp & parseInt(`${encrypt5}`)), 1);
         encrypt5 *= 1 * parseInt(`${encrypt5}`);
         rewind6 /= Math.max(qaagp, 1);
         let gesturel = libreactk.length >= 7645698;
         do {
            libreactk = `${parseInt(`${entryY}`)}`;
            if (gesturel) {
               break;
            }
         } while (gesturel && (proxyR > libreactk.length));
         detailP += "3";
         sheetK = detailP.length == 54;
         break;
      }
      dragX >>= Math.min(Math.abs(2), 1);
      while (4 > (dragX / (Math.max(9, linex.length))) || 4 > (linex.length / (Math.max(9, dragX)))) {
         dragX %= Math.max(1, 4);
         break;
      }
      bufferw = !stylesa;
      let downa = String.fromCharCode(115, 116, 97, 107, 105, 110, 103, 95, 52, 95, 56, 0);
      let updates9 = String.fromCharCode(116, 100, 115, 99, 95, 111, 95, 50, 48, 0);
      updates9 = `${updates9.length + 3}`;
      downa += "1";
      for (let o = 0; o < 3; o++) {
         let templateprocessorH = 5.0;
         downa += `${downa.length * 2}`;
         templateprocessorH /= Math.max(parseInt(`${templateprocessorH}`), 2);
      }
      for (let t = 0; t < 2; t++) {
         updates9 += "1";
      }
      let renderf = updates9 == String.fromCharCode(110, 51, 102, 55, 56, 122, 0);
      do {
         let manifesto: Array<any> = [398, 450];
         let libcrashsdk5 = String.fromCharCode(99, 97, 108, 99, 119, 95, 106, 95, 49, 52, 0);
         updates9 += `${updates9.length | 3}`;
         manifesto = [manifesto.length * libcrashsdk5.length];
         libcrashsdk5 = `${libcrashsdk5.length - manifesto.length}`;
         if (renderf) {
            break;
         }
      } while (renderf && (updates9.length > 5 && downa.length > 5));
      downa = `${downa.length << (Math.min(updates9.length, 4))}`;
      componentD += parseFloat(`${1}`);
      for (let o = 0; o < 2; o++) {
         libreactnativeblobY /= Math.max(4, ((sheetK ? 4 : 1)));
      }
      while (1.99 <= (4.17 + chinasamer) || (chinasamer + parseFloat(`${valuesh.length}`)) <= 4.17) {
         let orangeg = String.fromCharCode(122, 95, 53, 48, 95, 112, 98, 107, 100, 102, 0);
         let libcxxcomponentsD = String.fromCharCode(115, 95, 56, 54, 0);
         let topic9 = String.fromCharCode(97, 95, 57, 57, 95, 100, 105, 115, 112, 97, 116, 99, 104, 101, 100, 0);
         topic9 += `${(libcxxcomponentsD == String.fromCharCode(88, 0) ? libcxxcomponentsD.length : topic9.length)}`;
         let pangled = 4.0;
         let fastforwardP = 3;
         let verticalH = String.fromCharCode(115, 116, 100, 111, 117, 116, 95, 48, 95, 56, 53, 0);
         orangeg += `${1 << (Math.min(1, topic9.length))}`;
         pangled *= parseFloat(`${fastforwardP}`);
         fastforwardP <<= Math.min(Math.abs(fastforwardP), 3);
         verticalH = `${1 + verticalH.length}`;
         let gmailg = 5.0;
         let adultK = 2;
         let neond = String.fromCharCode(106, 95, 57, 95, 112, 105, 99, 107, 105, 110, 103, 0);
         orangeg += `${topic9.length}`;
         gmailg /= Math.max(3, parseFloat(`${parseInt(`${gmailg}`)}`));
         adultK /= Math.max(parseInt(`${gmailg}`) * 2, 4);
         neond = `${parseInt(`${gmailg}`)}`;
         for (let z = 0; z < 1; z++) {
            libcxxcomponentsD += `${topic9.length}`;
         }
         if (orangeg != String.fromCharCode(118, 0)) {
            let traminiM = String.fromCharCode(105, 95, 56, 56, 95, 112, 97, 99, 105, 110, 103, 0);
            let valuesH = 0.0;
            let largey = 0.0;
            let scrollviewL = 3.0;
            let halfp = String.fromCharCode(97, 95, 57, 50, 95, 115, 97, 118, 105, 110, 103, 0);
            libcxxcomponentsD = `${3 % (Math.max(1, traminiM.length))}`;
            traminiM = `${(String.fromCharCode(67, 0) == halfp ? halfp.length : parseInt(`${scrollviewL}`))}`;
            valuesH *= parseInt(`${valuesH}`) | 2;
            largey /= Math.max(parseFloat(`${halfp.length * parseInt(`${scrollviewL}`)}`), 2);
         }
         while (orangeg.endsWith(`${topic9.length}`)) {
            let pointT = true;
            let hejit = String.fromCharCode(106, 95, 52, 51, 95, 114, 101, 116, 117, 114, 110, 105, 110, 103, 0);
            let libsentryR = String.fromCharCode(97, 99, 99, 117, 114, 97, 116, 101, 95, 108, 95, 49, 51, 0);
            orangeg += `${libcxxcomponentsD.length}`;
            pointT = libsentryR == hejit;
            hejit += "2";
            libsentryR = `${hejit.length << (Math.min(libsentryR.length, 5))}`;
            break;
         }
         for (let v = 0; v < 2; v++) {
            let libreactkT: Map<any, any> = new Map([[String.fromCharCode(108, 95, 51, 49, 95, 101, 120, 112, 105, 114, 101, 0), false], [String.fromCharCode(109, 117, 108, 95, 98, 95, 57, 53, 0), false], [String.fromCharCode(97, 95, 56, 95, 110, 111, 110, 109, 117, 108, 116, 0), true]]);
            let anythinkH = String.fromCharCode(111, 103, 103, 118, 111, 114, 98, 105, 115, 95, 102, 95, 56, 52, 0);
            let referrers = 1;
            let catagoryN = String.fromCharCode(97, 108, 101, 114, 116, 95, 112, 95, 55, 51, 0);
            let episode9 = false;
            topic9 = `${libcxxcomponentsD.length - 3}`;
            libreactkT.set(`${episode9}`, 2);
            anythinkH = `${catagoryN.length}`;
            referrers -= (catagoryN == String.fromCharCode(85, 0) ? catagoryN.length : anythinkH.length);
         }
         let dplusn = 5852132 >= topic9.length;
         do {
            topic9 += "3";
            if (dplusn) {
               break;
            }
         } while (dplusn && (libcxxcomponentsD.length < topic9.length));
         let backo = libcxxcomponentsD == String.fromCharCode(54, 49, 101, 114, 109, 112, 54, 0);
         do {
            let s_view5: Array<any> = [348, 452];
            let stringsy = String.fromCharCode(121, 95, 57, 49, 95, 99, 118, 116, 121, 117, 118, 116, 111, 0);
            let flyeri = true;
            let hnewinterstitiala: Map<any, any> = new Map([[String.fromCharCode(97, 95, 55, 55, 95, 111, 102, 102, 101, 114, 0), String.fromCharCode(106, 95, 52, 50, 95, 114, 101, 110, 100, 101, 114, 0)], [String.fromCharCode(121, 95, 52, 57, 95, 117, 105, 111, 116, 111, 109, 98, 117, 102, 0), String.fromCharCode(116, 95, 53, 50, 95, 97, 118, 120, 115, 121, 110, 116, 104, 0)]]);
            libcxxcomponentsD += `${s_view5.length + 2}`;
            s_view5 = [2 - stringsy.length];
            stringsy += `${(stringsy == String.fromCharCode(119, 0) ? (flyeri ? 5 : 2) : stringsy.length)}`;
            flyeri = stringsy.length >= 45 || hnewinterstitiala.size >= 45;
            hnewinterstitiala.set(`${flyeri}`, ((flyeri ? 3 : 5) << (Math.min(Math.abs(1), 4))));
            if (backo) {
               break;
            }
         } while (backo && (topic9 != libcxxcomponentsD));
         valuesh += `${(String.fromCharCode(120, 0) == libcxxcomponentsD ? (stylesa ? 4 : 3) : libcxxcomponentsD.length)}`;
         break;
      }
      let constantsW = String.fromCharCode(110, 95, 56, 51, 95, 105, 109, 112, 111, 114, 116, 101, 114, 0);
      let mappingp = 2.0;
      let libimagepipeline9 = String.fromCharCode(103, 95, 55, 51, 95, 114, 101, 115, 116, 111, 114, 101, 0);
      let macaud = String.fromCharCode(115, 121, 110, 99, 95, 48, 95, 53, 52, 0);
      let routeri = 5.0;
      let time__B = 2.0;
      macaud = `${parseInt(`${time__B}`)}`;
      let xadsdkD: Array<any> = [String.fromCharCode(118, 95, 49, 53, 95, 116, 98, 109, 108, 0), String.fromCharCode(115, 116, 101, 97, 108, 95, 119, 95, 54, 48, 0), String.fromCharCode(102, 95, 54, 51, 95, 99, 97, 115, 104, 116, 97, 103, 0)];
      constantsW = `${constantsW.length % (Math.max(3, 5))}`;
      xadsdkD.push(xadsdkD.length);
      let sigmobD = String.fromCharCode(119, 95, 49, 48, 95, 117, 112, 100, 97, 116, 101, 0);
      mappingp /= Math.max(5, parseInt(`${time__B}`) + parseInt(`${routeri}`));
      sigmobD = `${(sigmobD == String.fromCharCode(115, 0) ? sigmobD.length : sigmobD.length)}`;
      routeri -= 2 ^ macaud.length;
      constantsn = "1";
      let launch3 = chinasamer >= 7844215.0;
      do {
         chinasamer *= parseFloat(`${pingI.size % (Math.max(3, 3))}`);
         if (launch3) {
            break;
         }
      } while (launch3 && ((valuesh.length ^ 2) == 3 || (chinasamer * 3.93) == 4.39));
      for (let g = 0; g < 2; g++) {
         let private_0iP = 1.0;
         let libimagepipelinea = false;
         let downU: Map<any, any> = new Map([[String.fromCharCode(98, 108, 111, 99, 107, 120, 95, 48, 95, 48, 0), 29], [String.fromCharCode(98, 108, 97, 99, 107, 95, 48, 95, 55, 50, 0), 56], [String.fromCharCode(116, 95, 57, 55, 95, 115, 116, 114, 105, 100, 0), 466]]);
         let sellw = String.fromCharCode(118, 95, 53, 95, 110, 111, 116, 105, 99, 101, 115, 0);
         let carouselD = libimagepipelinea ? !libimagepipelinea : libimagepipelinea;
         do {
            libimagepipelinea = !libimagepipelinea;
            if (carouselD) {
               break;
            }
         } while ((private_0iP > 3.78) && carouselD);
         for (let t = 0; t < 3; t++) {
            let floatingJ = String.fromCharCode(116, 95, 54, 52, 95, 118, 105, 115, 105, 98, 105, 116, 121, 0);
            libimagepipelinea = downU.size >= sellw.length;
            floatingJ = `${1 + floatingJ.length}`;
         }
         let change6 = String.fromCharCode(110, 95, 56, 49, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0);
         let favoritef = String.fromCharCode(101, 120, 112, 108, 97, 105, 110, 95, 51, 95, 56, 48, 0);
         let linkh = 4;
         let heart4: Map<any, any> = new Map([[String.fromCharCode(112, 117, 110, 99, 116, 117, 97, 116, 105, 111, 110, 95, 52, 95, 49, 48, 0), 817], [String.fromCharCode(100, 117, 109, 109, 121, 95, 110, 95, 56, 56, 0), 763], [String.fromCharCode(109, 95, 55, 53, 95, 116, 105, 109, 105, 110, 103, 115, 97, 102, 101, 0), 793]]);
         let countdownT = 2.0;
         favoritef = `${parseInt(`${countdownT}`)}`;
         linkh &= 1;
         heart4.set(`${linkh}`, linkh);
         countdownT /= Math.max(linkh & 3, 2);
         favoritef += `${sellw.length}`;
         let libmapbufferjni0 = private_0iP >= 8379091.0;
         do {
            let yingv = false;
            let pingN = false;
            let malaysiaZ = true;
            let mbbidY: Array<any> = [100, 577];
            let libsgcore0: Map<any, any> = new Map([[String.fromCharCode(103, 95, 52, 53, 95, 100, 111, 117, 103, 108, 97, 115, 0), false], [String.fromCharCode(118, 111, 105, 99, 101, 115, 95, 52, 95, 56, 48, 0), true], [String.fromCharCode(112, 97, 116, 99, 104, 115, 101, 116, 95, 111, 95, 57, 0), true]]);
            private_0iP -= (parseFloat(`${favoritef == String.fromCharCode(66, 0) ? favoritef.length : downU.size}`));
            yingv = !malaysiaZ;
            pingN = 5 == libsgcore0.size;
            mbbidY.push(3);
            libsgcore0.set(`${malaysiaZ}`, ((malaysiaZ ? 5 : 1) / (Math.max(2, 4))));
            if (libmapbufferjni0) {
               break;
            }
         } while ((2.82 < private_0iP) && libmapbufferjni0);
         while (4 <= downU.size) {
            let liner = 4.0;
            let applicationE = 4.0;
            let sorts = String.fromCharCode(99, 97, 108, 99, 117, 108, 97, 116, 111, 114, 95, 50, 95, 53, 57, 0);
            let libffmpegkit7 = String.fromCharCode(116, 101, 108, 108, 97, 114, 95, 105, 95, 54, 57, 0);
            libimagepipelinea = !libimagepipelinea;
            liner -= parseInt(`${applicationE}`) * sorts.length;
            applicationE /= Math.max(parseFloat(`${libffmpegkit7.length * parseInt(`${liner}`)}`), 4);
            sorts = `${1 ^ libffmpegkit7.length}`;
            break;
         }
         let resendK = 4.0;
         let libswresampleo = true;
         change6 += `${((libimagepipelinea ? 1 : 2) / 2)}`;
         resendK -= 3;
         libswresampleo = resendK <= 82.3;
         change6 += `${3 % (Math.max(10, downU.size))}`;
         let bottomi = String.fromCharCode(117, 95, 53, 49, 95, 114, 105, 103, 104, 116, 0);
         change6 = `${change6.length & 2}`;
         bottomi += `${bottomi.length}`;
         for (let e = 0; e < 1; e++) {
            sellw = "2";
         }
         let userK = 7967711 <= downU.size;
         do {
            downU.set(favoritef, favoritef.length >> (Math.min(Math.abs(3), 5)));
            if (userK) {
               break;
            }
         } while ((2 == (downU.size ^ 1)) && userK);
         sheetK = !valuesh.endsWith(`${sheetK}`);
      }
      bufferw = (dragX / (Math.max(linex.length, 8))) >= 95;
      for (let g = 0; g < 3; g++) {
         constantsn = `${(3 % (Math.max(7, (bufferw ? 3 : 1))))}`;
      }
      humidityb += parseFloat(`${parseInt(`${libreactnativeblobY}`) | 3}`);
      libreactnativeblobY *= parseInt(`${chinasamer}`) / (Math.max(linex.length, 1));
      let animationi = 3.0;
      let largem = String.fromCharCode(118, 95, 56, 51, 95, 100, 97, 116, 97, 115, 0);
      let zhengpianJ: Map<any, any> = new Map([[String.fromCharCode(102, 105, 108, 101, 112, 97, 116, 104, 95, 113, 95, 57, 49, 0), 95], [String.fromCharCode(103, 95, 53, 50, 95, 115, 104, 105, 112, 112, 105, 110, 103, 0), 554], [String.fromCharCode(101, 120, 99, 101, 101, 100, 95, 115, 95, 54, 50, 0), 743]]);
      let submitc = 5641229 >= zhengpianJ.size;
      do {
         zhengpianJ.set(largem, zhengpianJ.size);
         if (submitc) {
            break;
         }
      } while (((1 >> (Math.min(4, largem.length))) == 5 || (zhengpianJ.size >> (Math.min(Math.abs(1), 4))) == 4) && submitc);
      for (let g = 0; g < 3; g++) {
         let profilew = 2.0;
         zhengpianJ = new Map([[`${zhengpianJ.size}`, parseInt(`${animationi}`)]]);
         profilew += parseInt(`${profilew}`);
      }
      zhengpianJ.set(`${largem}`, zhengpianJ.size);
      zhengpianJ.set(`${animationi}`, 3 & largem.length);
      if (zhengpianJ.size >= 2) {
         zhengpianJ.set(`${animationi}`, (largem == String.fromCharCode(53, 0) ? largem.length : parseInt(`${animationi}`)));
      }
      largem = "2";
      while (!largem.endsWith(`${animationi}`)) {
         largem += `${parseInt(`${animationi}`) | zhengpianJ.size}`;
         break;
      }
      animationi *= 3;
      let filedk: Array<any> = [248, 793];
      let libsgcoreo = String.fromCharCode(121, 95, 54, 95, 115, 116, 114, 97, 116, 101, 103, 121, 0);
      zhengpianJ = new Map([[`${zhengpianJ.size}`, zhengpianJ.size]]);
      filedk.push((libsgcoreo == String.fromCharCode(50, 0) ? libsgcoreo.length : filedk.length));
      sheetK = volume7.size > 52;

      await AsyncStorage.setItem("access", "22222222");

      dragX %= Math.max(2, 2 >> (Math.min(Math.abs(parseInt(`${chinasamer}`)), 5)));
      let holderq = String.fromCharCode(99, 111, 109, 112, 97, 99, 116, 95, 104, 95, 54, 50, 0);
      let detailsv: Map<any, any> = new Map([[String.fromCharCode(109, 95, 55, 57, 95, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 0), true], [String.fromCharCode(115, 95, 50, 56, 95, 101, 114, 115, 105, 111, 110, 0), true], [String.fromCharCode(118, 97, 114, 105, 97, 98, 108, 101, 115, 95, 54, 95, 50, 57, 0), false]]);
      let username2: Map<any, any> = new Map([[String.fromCharCode(103, 95, 56, 50, 95, 101, 110, 99, 111, 100, 97, 98, 108, 101, 115, 0), 974], [String.fromCharCode(118, 95, 50, 52, 95, 99, 108, 117, 98, 0), 896], [String.fromCharCode(100, 97, 115, 104, 95, 98, 95, 57, 51, 0), 912]]);
      detailsv.set(`${holderq}`, detailsv.size ^ 2);
      while (holderq.includes(`${username2.size}`)) {
         let policyU = String.fromCharCode(100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 95, 49, 95, 50, 53, 0);
         let canvasT = 1.0;
         let libavfilterJ = false;
         holderq += `${2 | parseInt(`${canvasT}`)}`;
         policyU = `${(policyU == String.fromCharCode(75, 0) ? (libavfilterJ ? 2 : 4) : policyU.length)}`;
         canvasT += (parseFloat(`${(libavfilterJ ? 5 : 3)}`));
         break;
      }
      volume7 = new Map([[valuesh, 1 & valuesh.length]]);
      for (let h = 0; h < 1; h++) {
         constantsn = `${linex.length}`;
      }
      let subst = componentD <= 6224659.0;
      do {
         componentD *= parseFloat(`${1 % (Math.max(1, constantsn.length))}`);
         if (subst) {
            break;
         }
      } while (((dragX / (Math.max(parseInt(`${componentD}`), 6))) == 4 || 4 == (dragX / (Math.max(3, parseInt(`${componentD}`))))) && subst);
      let basen = bufferw ? !bufferw : bufferw;
      do {
         bufferw = chinasamer == 18.50 || stylesa;
         if (basen) {
            break;
         }
      } while (basen && (2 <= (pingI.size % (Math.max(1, 8))) && 1 <= pingI.size));
      if (libreactnativeblobY == 3.10) {
         let mapbufferL = 4.0;
         let heartg: Map<any, any> = new Map([[String.fromCharCode(115, 95, 51, 51, 95, 114, 101, 103, 105, 115, 116, 101, 114, 0), String.fromCharCode(100, 101, 109, 117, 120, 101, 114, 95, 102, 95, 53, 54, 0)], [String.fromCharCode(109, 95, 52, 57, 95, 99, 121, 99, 108, 105, 99, 0), String.fromCharCode(107, 95, 56, 54, 95, 109, 117, 108, 116, 0)], [String.fromCharCode(103, 114, 97, 100, 105, 101, 110, 116, 95, 111, 95, 49, 49, 0), String.fromCharCode(114, 117, 115, 115, 105, 97, 110, 95, 109, 95, 56, 54, 0)]]);
         if (mapbufferL > 5.85) {
            mapbufferL -= heartg.size;
         }
         if ((2.41 * mapbufferL) == 3.94 && 1 == (heartg.size * parseInt(`${mapbufferL}`))) {
            let mbbannerE = 1;
            heartg.set(`${mapbufferL}`, 1);
            mbbannerE >>= Math.min(Math.abs(3), 2);
         }
         heartg.set(`${mapbufferL}`, parseInt(`${mapbufferL}`));
         let thailand9 = 2.0;
         let greenT = 3.0;
         heartg = new Map([[`${greenT}`, parseInt(`${thailand9}`) % 2]]);
         heartg = new Map([[`${heartg.size}`, parseInt(`${mapbufferL}`) - 1]]);
         let modalV = String.fromCharCode(100, 114, 97, 119, 97, 98, 108, 101, 115, 95, 103, 95, 54, 56, 0);
         let greyB: Array<any> = [String.fromCharCode(112, 95, 53, 49, 95, 105, 115, 115, 101, 116, 117, 103, 105, 100, 0), String.fromCharCode(112, 108, 117, 103, 105, 110, 115, 95, 115, 95, 49, 54, 0), String.fromCharCode(111, 112, 101, 114, 97, 116, 111, 114, 95, 98, 95, 53, 56, 0)];
         let tramini_ = 4.0;
         mapbufferL *= greyB.length;
         modalV = `${parseInt(`${tramini_}`)}`;
         greyB.push(modalV.length << (Math.min(Math.abs(1), 5)));
         tramini_ -= 2 % (Math.max(10, parseInt(`${tramini_}`)));
         libreactnativeblobY *= heartg.size;
      }
      for (let b = 0; b < 3; b++) {
         chinasamer /= Math.max(4, parseFloat(`${parseInt(`${libreactnativeblobY}`) * 3}`));
      }
      libreactnativeblobY += (3 >> (Math.min(2, Math.abs((bufferw ? 2 : 5)))));
      volume7.set(linex, linex.length);
      humidityb *= parseFloat(`${1}`);
      bufferw = constantsn.length >= 20;
      let runtimeschedulerh = 5148490 >= linex.length;
      do {
         linex += `${volume7.size}`;
         if (runtimeschedulerh) {
            break;
         }
      } while (runtimeschedulerh && ((linex.length - 1) > 4));
      let down9: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 99, 117, 114, 114, 101, 110, 116, 95, 99, 95, 57, 48, 0), 967], [String.fromCharCode(100, 105, 115, 99, 111, 118, 101, 114, 121, 95, 52, 95, 52, 53, 0), 199], [String.fromCharCode(115, 116, 97, 110, 100, 97, 114, 100, 105, 122, 101, 95, 112, 95, 50, 57, 0), 849]]);
      let videojsH = String.fromCharCode(116, 114, 97, 110, 115, 109, 105, 116, 95, 52, 95, 55, 53, 0);
      let moviesr = String.fromCharCode(115, 101, 112, 97, 114, 97, 116, 111, 114, 95, 110, 95, 51, 53, 0);
      let banner2 = String.fromCharCode(97, 119, 97, 114, 101, 95, 106, 95, 52, 53, 0);
      let minimizev = 1.0;
      down9 = new Map([[banner2, (String.fromCharCode(51, 0) == moviesr ? moviesr.length : banner2.length)]]);
      minimizev -= parseInt(`${minimizev}`);
      down9 = new Map([[`${down9.size}`, moviesr.length / 1]]);
      let quest9 = String.fromCharCode(115, 117, 98, 98, 108, 111, 99, 107, 95, 49, 95, 54, 57, 0);
      let policyt = String.fromCharCode(102, 95, 55, 49, 95, 97, 100, 115, 97, 114, 109, 97, 115, 109, 0);
      while (policyt.length > 2) {
         let iconK: Array<any> = [888, 77, 359];
         let libzeush: Map<any, any> = new Map([[String.fromCharCode(119, 95, 49, 53, 95, 115, 101, 113, 118, 105, 100, 101, 111, 0), String.fromCharCode(110, 95, 56, 48, 95, 115, 104, 111, 119, 119, 97, 118, 101, 115, 0)], [String.fromCharCode(115, 101, 97, 114, 99, 104, 98, 97, 114, 95, 53, 95, 55, 52, 0), String.fromCharCode(100, 101, 108, 116, 97, 115, 95, 122, 95, 52, 57, 0)], [String.fromCharCode(121, 95, 54, 50, 95, 109, 101, 100, 105, 117, 109, 116, 104, 114, 101, 115, 104, 0), String.fromCharCode(112, 114, 105, 111, 95, 122, 95, 52, 50, 0)]]);
         let weiboA = 0;
         let downloaderz = String.fromCharCode(101, 95, 52, 53, 95, 108, 111, 99, 97, 108, 0);
         let fieldT = String.fromCharCode(105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 95, 116, 95, 50, 57, 0);
         policyt = "2";
         iconK.push(iconK.length * libzeush.size);
         libzeush = new Map([[`${libzeush.size}`, 2]]);
         weiboA -= weiboA & libzeush.size;
         downloaderz = `${2 * fieldT.length}`;
         fieldT = `${1 * weiboA}`;
         break;
      }
      let abidetectq = String.fromCharCode(97, 115, 99, 95, 120, 95, 55, 56, 0);
      let mountingF = String.fromCharCode(121, 95, 50, 51, 95, 109, 98, 108, 111, 99, 107, 0);
      videojsH += `${abidetectq.length % 1}`;
      if (1 == videojsH.length) {
         let uimanagere = String.fromCharCode(101, 95, 56, 48, 95, 109, 102, 114, 97, 0);
         let launcher9 = true;
         let moonJ = 5.0;
         let pnewarchdefaultsV = String.fromCharCode(114, 95, 57, 51, 95, 100, 105, 109, 109, 101, 100, 0);
         videojsH += `${3 << (Math.min(1, uimanagere.length))}`;
         uimanagere += `${((launcher9 ? 2 : 4) & pnewarchdefaultsV.length)}`;
         launcher9 = moonJ == 38.99;
         moonJ -= parseInt(`${moonJ}`);
         pnewarchdefaultsV = `${pnewarchdefaultsV.length}`;
      }
      for (let p = 0; p < 3; p++) {
         moviesr = `${(String.fromCharCode(67, 0) == moviesr ? moviesr.length : down9.size)}`;
      }
      abidetectq += `${policyt.length}`;
      libreactnativeblobY *= (2 / (Math.max((stylesa ? 5 : 3), 1)));
      linex += `${volume7.size}`;
      volume7.set(linex, (linex == String.fromCharCode(103, 0) ? dragX : linex.length));
      let klevind = libreactnativeblobY >= 8030532.0;
      do {
         libreactnativeblobY -= ((bufferw ? 2 : 5));
         if (klevind) {
            break;
         }
      } while ((!valuesh.includes(`${libreactnativeblobY}`)) && klevind);
      for (let l = 0; l < 2; l++) {
         sheetK = constantsn.length > 80;
      }
      for (let b = 0; b < 1; b++) {
         humidityb -= parseFloat(`${parseInt(`${componentD}`)}`);
      }
      RNRestart.Restart();
   }

   const spamToggleVersion = async () =>  {
      if (UMENG_CHANNEL !== "WEB_IOS") {
         spamToggleB();
      } else {
         spamToggleVersionDetail();
      }
   }

   const spamToggleVersionDetail = async () => {
      setCountChannelid(countChannelid + 1)
   }

   useEffect(() => {
      if (countToggleB == 8) {
         switchToggle();
      }
   }, [countToggleB])

   useEffect(() => {
      if (countChannelid >= 20) {
         const channel = md5(UMENG_CHANNEL).toString();
         setDisplayVersion(`${APP_VERSION}\nBuild: ${APP_VERSION_BUILD}\n${channel}`)
      }
   }, [countChannelid])

   return (






      //     }}>

      //   </Text>

      <ScreenContainer>
         <View style={{ gap: spacing.m }}>
            <TitleWithBackButtonHeader title="关于我们" />
            <View style={styles.logo}>
               <Logo2 height={icons.sizes.xxl} width={icons.sizes.xxl} />
            </View>
            <TouchableOpacity onPress={ 
                  spamToggleVersion
             }>
               <Text style={{ textAlign: "center", ...textVariants.body }}>
                  {displayVersion}
               </Text>
            </TouchableOpacity>
            <NotificationModal
               onConfirm={toggleOverlay}
               isVisible={isDialogOpen}
               title="版权声明"
               subtitle1={`如果该APP提供内容侵犯了您的版权, 请发送电子邮件说明, 我们将立即删除内容, 保护版权所有者的权益。`}
               subtitle2="联系邮箱:"
               subtitle3={APP_EMAIL_CONST}
            />
            <View>
               <ShowMoreButton
                  text="隐私政策"
                  onPress={() => navigation.navigate("隐私政策")}
               />
               <ShowMoreButton
                  text="用户协议"
                  onPress={() => navigation.navigate("用户协议")}
               />
               <ShowMoreButton
                  text="版权声明"
                  onPress={() => setIsDialogOpen(!isDialogOpen)}
               />
            </View>
         </View>
      </ScreenContainer>
   );
};

const styles = StyleSheet.create({
   topNav: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
   },
   logo: {
      flexDirection: "row",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   submitBtn: {
      borderRadius: 10,
   },
});
