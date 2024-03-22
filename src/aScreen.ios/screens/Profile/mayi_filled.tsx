import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/mayi_save";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { useTheme } from "@react-navigation/native";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";

import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import axios from "axios";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from "@utility/mayi_middleware_apps";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import InviteStep from "./../../components/invite/mayi_iconpointscore_whitevideolive";
import InviteCard from "./../../components/invite/mayi_grey_math";

import InviteHeader from "./../../components/invite/mayi_embed_header";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "@redux/actions/mayi_librrc";
import mayi_push from "../../../../Umeng/mayi_push";
import { mayi_Injury } from "@api";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";


export default ({ navigation }: RootStackScreenProps<"邀请">) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<mayi_Baseline>('userReducer');

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    mayi_push.userCenterVipInviteViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let areaX: Map<any, any> = new Map([[String.fromCharCode(110,95,55,57,95,105,110,116,101,114,120,0),241], [String.fromCharCode(104,101,118,99,100,101,99,95,121,95,55,0),870], [String.fromCharCode(103,101,110,97,110,110,95,102,95,55,48,0),333]]);
    let circleD = 2.0;
    let long_d7y = String.fromCharCode(113,95,56,57,95,102,97,100,101,0);
    let application4 = String.fromCharCode(119,109,97,112,114,111,95,50,95,50,0);
    let alertb = 4.0;
    let tumbnail9: Map<any, any> = new Map([[String.fromCharCode(104,95,55,55,95,99,104,97,99,104,97,112,111,108,121,0),733], [String.fromCharCode(114,95,50,51,95,118,105,100,101,111,100,115,112,0),714], [String.fromCharCode(103,95,49,52,95,114,101,99,111,103,110,105,122,101,0),393]]);
    let libreanimateda = String.fromCharCode(105,100,101,110,116,105,116,105,101,115,95,110,95,52,49,0);
    let greyarrowupv = String.fromCharCode(115,117,109,109,101,100,95,54,95,52,52,0);
    let acceptedH = 1.0;
    let shared9 = String.fromCharCode(99,95,51,56,95,103,116,101,115,116,0);
    let penaltyshootnogoalT: Map<any, any> = new Map([[String.fromCharCode(111,95,57,49,95,118,97,108,105,100,97,116,101,0),411], [String.fromCharCode(116,101,115,118,101,114,116,95,55,95,51,48,0),248]]);
    let tempx = 3.0;
    let greyarrowup9: Array<any> = [String.fromCharCode(109,95,50,55,95,102,101,101,100,98,97,99,107,0), String.fromCharCode(114,116,106,112,101,103,95,56,95,52,54,0)];
    let crownS = String.fromCharCode(98,95,57,55,95,117,112,100,97,116,101,0);
   let showlesso = 6375337.0 <= tempx;
   do {
      tempx *= parseInt(`${alertb}`) / (Math.max(shared9.length, 8));
      if (showlesso) {
         break;
      }
   } while (showlesso && ((long_d7y.length * tempx) >= 5.35 || 2 >= (parseInt(`${tempx}`) * long_d7y.length)));
      application4 += `${parseInt(`${tempx}`)}`;
   while (acceptedH <= 1.35) {
      acceptedH /= Math.max(parseFloat(`${3 ^ greyarrowupv.length}`), 4);
      break;
   }
   let showM = 8408593 <= tumbnail9.size;
   do {
       let models0 = String.fromCharCode(99,111,100,101,99,112,114,105,118,95,113,95,54,57,0);
      let playercommonx = 9694912 >= models0.length;
      do {
         models0 += `${models0.length * 1}`;
         if (playercommonx) {
            break;
         }
      } while (playercommonx && (models0.length < 4 && models0.length < 4));
      if (models0 != String.fromCharCode(114,0)) {
          let cornerkickE = String.fromCharCode(111,95,56,48,95,102,111,117,114,116,104,0);
          let unread6 = String.fromCharCode(110,95,52,56,95,100,105,115,97,98,108,101,114,0);
          let signinup7 = 2.0;
          let animationw: Map<any, any> = new Map([[String.fromCharCode(98,95,57,52,95,101,120,116,101,114,110,0),741], [String.fromCharCode(99,97,108,108,108,95,105,95,53,54,0),678]]);
          let fullscreenmaxb = 4.0;
         models0 += `${animationw.size * 3}`;
         cornerkickE = `${parseInt(`${fullscreenmaxb}`) ^ 2}`;
         unread6 = `${parseInt(`${fullscreenmaxb}`)}`;
         signinup7 *= (parseFloat(`${unread6 == String.fromCharCode(87,0) ? unread6.length : cornerkickE.length}`));
         animationw = new Map([[`${signinup7}`, parseInt(`${signinup7}`)]]);
      }
         models0 = `${1 >> (Math.min(3, models0.length))}`;
      tumbnail9 = new Map([[`${tempx}`, libreanimateda.length]]);
      if (showM) {
         break;
      }
   } while ((2 <= (areaX.size | tumbnail9.size) && (tumbnail9.size | 2) <= 5) && showM);
      greyarrowupv = `${greyarrowupv.length + 1}`;
   if (penaltyshootnogoalT.get(`${areaX.size}`) == null) {
      penaltyshootnogoalT = new Map([[long_d7y, (String.fromCharCode(67,0) == greyarrowupv ? long_d7y.length : greyarrowupv.length)]]);
   }
      application4 = `${parseInt(`${acceptedH}`) / (Math.max(libreanimateda.length, 10))}`;
   if (4.71 < acceptedH) {
      acceptedH /= Math.max(4, parseFloat(`${parseInt(`${tempx}`) % (Math.max(shared9.length, 3))}`));
   }
      penaltyshootnogoalT.set(`${circleD}`, 3 & parseInt(`${circleD}`));
      circleD -= 1;
       let libswresampleP = 4.0;
       let photoa = false;
      while (libswresampleP == 2.89) {
         libswresampleP -= 1 | parseInt(`${libswresampleP}`);
         break;
      }
      let nativemodulec = photoa ? !photoa : photoa;
      do {
         photoa = !photoa && 17.33 > libswresampleP;
         if (nativemodulec) {
            break;
         }
      } while ((!photoa) && nativemodulec);
      libreanimateda = `${libreanimateda.length}`;
   if (!libreanimateda.includes(`${tempx}`)) {
      tempx += parseInt(`${circleD}`);
   }
      circleD -= application4.length + libreanimateda.length;
      shared9 = `${parseInt(`${tempx}`)}`;

    setRefreshing(true);

   for (let c = 0; c < 1; c++) {
      acceptedH -= parseFloat(`${parseInt(`${alertb}`) & 1}`);
   }
      tempx -= areaX.size * shared9.length;
   while (3.22 <= (4.78 - alertb)) {
       let orangeuparrowN = String.fromCharCode(118,95,51,53,95,100,101,108,116,97,0);
       let classesv = 2.0;
         classesv /= Math.max(parseFloat(`${orangeuparrowN.length * parseInt(`${classesv}`)}`), 3);
      if (orangeuparrowN.startsWith(`${classesv}`)) {
         orangeuparrowN = `${parseInt(`${classesv}`) * orangeuparrowN.length}`;
      }
         orangeuparrowN = `${(String.fromCharCode(76,0) == orangeuparrowN ? orangeuparrowN.length : parseInt(`${classesv}`))}`;
      while (4 == (3 + orangeuparrowN.length)) {
         classesv -= (parseFloat(`${orangeuparrowN == String.fromCharCode(76,0) ? parseInt(`${classesv}`) : orangeuparrowN.length}`));
         break;
      }
      while (classesv == parseFloat(`${orangeuparrowN.length}`)) {
         orangeuparrowN += `${orangeuparrowN.length}`;
         break;
      }
      while (orangeuparrowN.startsWith(`${classesv}`)) {
         classesv += parseFloat(`${2 + parseInt(`${classesv}`)}`);
         break;
      }
      libreanimateda = `${2 + parseInt(`${classesv}`)}`;
      break;
   }
       let whatsappE: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,102,95,56,56,0),412], [String.fromCharCode(106,95,55,48,95,117,110,116,114,97,99,107,0),522]]);
       let traminiM = String.fromCharCode(107,95,50,51,95,99,114,111,115,115,102,97,100,101,0);
       let binddatasO = 0.0;
      if ((whatsappE.size / (Math.max(10, traminiM.length))) <= 2 && 5 <= (traminiM.length / 2)) {
          let tempz = String.fromCharCode(115,98,117,118,95,56,95,53,52,0);
         traminiM += `${whatsappE.size}`;
         tempz += "3";
      }
         traminiM += `${whatsappE.size % (Math.max(1, parseInt(`${binddatasO}`)))}`;
         binddatasO /= Math.max(parseFloat(`${whatsappE.size}`), 4);
      let mintegrald = traminiM == String.fromCharCode(55,54,95,114,108,102,49,113,102,0);
      do {
         traminiM += `${2 + parseInt(`${binddatasO}`)}`;
         if (mintegrald) {
            break;
         }
      } while ((5 > (1 ^ traminiM.length)) && mintegrald);
      let themev = 9179459 <= whatsappE.size;
      do {
         whatsappE.set(`${binddatasO}`, traminiM.length / (Math.max(9, parseInt(`${binddatasO}`))));
         if (themev) {
            break;
         }
      } while ((!Array.from(whatsappE.keys()).includes(`${binddatasO}`)) && themev);
      let eventm = whatsappE.size >= 7585791;
      do {
          let largev = 5.0;
          let window_69n: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,95,105,110,100,105,114,101,99,116,0),true ], [String.fromCharCode(112,95,52,49,95,111,103,103,108,101,0),false ]]);
          let iconwechatE = String.fromCharCode(98,121,116,101,115,116,114,105,110,103,95,105,95,50,54,0);
          let tickc = 3;
         whatsappE.set(`${largev}`, 1 - whatsappE.size);
         largev -= iconwechatE.length;
         window_69n = new Map([[`${window_69n.size}`, window_69n.size]]);
         iconwechatE = `${tickc}`;
         tickc <<= Math.min(Math.abs(window_69n.size), 1);
         if (eventm) {
            break;
         }
      } while ((1 < (traminiM.length & whatsappE.size) && 1 < (traminiM.length & 1)) && eventm);
         whatsappE = new Map([[`${whatsappE.size}`, traminiM.length / 1]]);
      if (traminiM.includes(`${binddatasO}`)) {
          let iconviewergifZ: Array<any> = [767, 273, 10];
          let reducerA = false;
          let fileS = 2;
          let reddownarrowm: Map<any, any> = new Map([[String.fromCharCode(99,97,98,97,99,95,50,95,54,49,0),685], [String.fromCharCode(108,111,99,107,115,99,114,101,101,110,95,52,95,53,0),516], [String.fromCharCode(99,104,101,99,107,108,105,110,101,95,105,95,48,0),287]]);
          let actionh = String.fromCharCode(119,95,57,57,95,100,105,115,112,97,116,99,104,101,100,0);
         binddatasO += parseFloat(`${2}`);
         iconviewergifZ = [(actionh == String.fromCharCode(107,0) ? actionh.length : reddownarrowm.size)];
         reducerA = String.fromCharCode(117,0) == actionh;
         fileS *= fileS + iconviewergifZ.length;
         reddownarrowm = new Map([[actionh, actionh.length]]);
      }
         whatsappE = new Map([[`${whatsappE.size}`, whatsappE.size]]);
      areaX.set(`${alertb}`, parseInt(`${alertb}`));
      application4 = `${long_d7y.length}`;
   if (5.62 < (circleD * libreanimateda.length)) {
      circleD /= Math.max(parseInt(`${acceptedH}`), 4);
   }
   while (2 <= (penaltyshootnogoalT.size - 5) && 4.20 <= (1.37 + tempx)) {
      penaltyshootnogoalT = new Map([[`${tempx}`, 2 / (Math.max(5, parseInt(`${circleD}`)))]]);
      break;
   }
   for (let o = 0; o < 3; o++) {
      circleD *= parseInt(`${circleD}`) | parseInt(`${tempx}`);
   }
      shared9 += `${application4.length - libreanimateda.length}`;
   for (let u = 0; u < 1; u++) {
      acceptedH /= Math.max(5, parseFloat(`${libreanimateda.length}`));
   }
   while ((tumbnail9.size ^ 3) > 3 && (3 ^ shared9.length) > 3) {
       let colorsm = String.fromCharCode(97,114,114,97,121,95,55,95,50,50,0);
       let libffmpegkitU = 0;
       let libreactR = 5.0;
       let singaporeI = String.fromCharCode(111,95,57,50,95,97,110,110,101,120,98,0);
      if (colorsm.length > libffmpegkitU) {
         colorsm += `${(String.fromCharCode(114,0) == singaporeI ? libffmpegkitU : singaporeI.length)}`;
      }
      for (let d = 0; d < 2; d++) {
         colorsm = `${(singaporeI == String.fromCharCode(56,0) ? singaporeI.length : colorsm.length)}`;
      }
      if (libreactR <= 1.0) {
         singaporeI += `${colorsm.length}`;
      }
         libreactR += parseInt(`${libreactR}`);
      for (let w = 0; w < 1; w++) {
          let r_unlockT = false;
          let photoc = 4.0;
          let share6: Array<any> = [855, 796, 176];
          let disconnectedn: Array<any> = [String.fromCharCode(105,95,56,52,95,110,105,115,116,0), String.fromCharCode(113,117,111,116,101,115,95,103,95,50,48,0)];
          let updatesE = String.fromCharCode(114,95,51,53,95,101,110,103,105,110,101,115,0);
         colorsm = `${disconnectedn.length}`;
         r_unlockT = (((r_unlockT ? updatesE.length : 20) / (Math.max(updatesE.length, 9))) == 20);
         photoc /= Math.max(parseFloat(`${share6.length}`), 3);
         share6 = [parseInt(`${photoc}`) - 1];
         disconnectedn.push((parseInt(`${photoc}`) & (r_unlockT ? 3 : 4)));
      }
      for (let n = 0; n < 2; n++) {
         libreactR *= libffmpegkitU;
      }
      while (singaporeI.length >= parseInt(`${libreactR}`)) {
         libreactR -= colorsm.length >> (Math.min(5, Math.abs(parseInt(`${libreactR}`))));
         break;
      }
      let termsH = String.fromCharCode(111,52,51,118,57,103,0) == colorsm;
      do {
         colorsm = `${2 * colorsm.length}`;
         if (termsH) {
            break;
         }
      } while ((singaporeI == String.fromCharCode(80,0)) && termsH);
       let backwardF = String.fromCharCode(114,101,99,104,117,110,107,95,50,95,51,0);
       let yellowtoredA = String.fromCharCode(97,115,99,101,110,100,101,114,95,103,95,57,48,0);
         libreactR /= Math.max(2, 3 >> (Math.min(2, backwardF.length)));
          let defaultroombgS = String.fromCharCode(116,97,98,95,108,95,54,53,0);
          let selectedd = true;
         yellowtoredA += `${3 + parseInt(`${libreactR}`)}`;
         defaultroombgS += "2";
         selectedd = defaultroombgS.length > 35;
      let floaterL = colorsm.length <= 5942947;
      do {
         colorsm += `${singaporeI.length}`;
         if (floaterL) {
            break;
         }
      } while (floaterL && (2 < colorsm.length || singaporeI == String.fromCharCode(56,0)));
      tumbnail9 = new Map([[`${tempx}`, 2 ^ parseInt(`${tempx}`)]]);
      break;
   }
   while (1 < tumbnail9.size) {
      libreanimateda += `${greyarrowupv.length + long_d7y.length}`;
      break;
   }
      penaltyshootnogoalT.set(`${tempx}`, parseInt(`${tempx}`));
       let iconarrowrightB = String.fromCharCode(114,101,105,110,100,101,120,95,116,95,54,56,0);
       let untickq = String.fromCharCode(111,95,57,95,114,101,112,108,97,121,0);
      if (iconarrowrightB != untickq) {
         untickq = `${untickq.length - 3}`;
      }
       let defaultteamo = String.fromCharCode(104,97,108,100,99,108,117,116,95,115,95,52,53,0);
       let unreadv = String.fromCharCode(110,105,110,101,95,117,95,56,56,0);
         unreadv += `${untickq.length ^ 2}`;
      if (defaultteamo == String.fromCharCode(51,0) && 5 > unreadv.length) {
         defaultteamo += `${unreadv.length & defaultteamo.length}`;
      }
      while (iconarrowrightB != untickq) {
         untickq = "1";
         break;
      }
         unreadv += "3";
      tempx -= application4.length ^ 1;
    await refreshUserState();

   if ((tumbnail9.size - parseInt(`${alertb}`)) == 1 || 4 == (1 >> (Math.min(1, Math.abs(tumbnail9.size))))) {
       let headerG = String.fromCharCode(116,95,52,95,104,119,116,105,109,101,0);
       let videojst = 2.0;
          let albums: Array<any> = [String.fromCharCode(115,117,114,102,97,99,101,115,95,105,95,51,51,0), String.fromCharCode(107,95,52,95,109,101,100,105,97,115,0)];
          let subsO = 2.0;
          let libfbjnij = String.fromCharCode(116,114,117,101,95,104,95,57,55,0);
         videojst += parseInt(`${subsO}`);
         albums.push(libfbjnij.length >> (Math.min(1, albums.length)));
         subsO -= parseFloat(`${albums.length}`);
         libfbjnij = `${albums.length % 3}`;
       let l_centerT = 1.0;
       let long_uB = 0.0;
         videojst *= 3;
      if (3.21 < long_uB) {
         headerG += `${parseInt(`${l_centerT}`) + parseInt(`${long_uB}`)}`;
      }
       let sportsE = 2.0;
         headerG += `${parseInt(`${sportsE}`)}`;
      alertb *= parseFloat(`${parseInt(`${tempx}`) - 3}`);
   }
   while (!shared9.includes(`${libreanimateda.length}`)) {
      shared9 = `${penaltyshootnogoalT.size * long_d7y.length}`;
      break;
   }
   let klevini = 7692409.0 <= acceptedH;
   do {
      acceptedH /= Math.max((parseFloat(`${String.fromCharCode(87,0) == long_d7y ? areaX.size : long_d7y.length}`)), 1);
      if (klevini) {
         break;
      }
   } while ((4 >= (parseInt(`${acceptedH}`) + libreanimateda.length)) && klevini);
   if (libreanimateda.length <= shared9.length) {
      shared9 = `${(String.fromCharCode(78,0) == shared9 ? shared9.length : parseInt(`${circleD}`))}`;
   }
   for (let n = 0; n < 2; n++) {
       let shootQ = false;
       let libsentryZ: Map<any, any> = new Map([[String.fromCharCode(112,111,105,110,116,111,99,116,95,48,95,49,48,48,0),392], [String.fromCharCode(100,95,52,53,95,108,105,98,118,101,114,115,105,111,110,0),724], [String.fromCharCode(111,95,55,52,95,114,101,99,118,102,114,111,109,0),102]]);
       let themeV = String.fromCharCode(119,95,50,50,0);
       let libreactnativejniC = 1.0;
      let rulesV = 6668848 <= libsentryZ.size;
      do {
          let componentregistry2: Array<any> = [522, 282];
          let notificationd: Array<any> = [726, 333, 746];
          let basketballawayteamF = String.fromCharCode(120,95,52,53,95,115,104,97,100,111,119,0);
         libsentryZ.set(themeV, 3);
         componentregistry2 = [notificationd.length % 1];
         notificationd = [notificationd.length];
         basketballawayteamF += `${(basketballawayteamF == String.fromCharCode(90,0) ? componentregistry2.length : basketballawayteamF.length)}`;
         if (rulesV) {
            break;
         }
      } while ((3 >= libsentryZ.size && (3 - libsentryZ.size) >= 4) && rulesV);
      for (let k = 0; k < 2; k++) {
         themeV += "1";
      }
         themeV = `${3 | parseInt(`${libreactnativejniC}`)}`;
      while (1 > libsentryZ.size) {
          let points = String.fromCharCode(122,95,50,52,95,116,111,97,115,116,0);
         shootQ = themeV.length <= 41 || !shootQ;
         points += `${points.length >> (Math.min(Math.abs(3), 3))}`;
         break;
      }
         shootQ = libsentryZ.size > 55;
      while (Array.from(libsentryZ.values()).includes(libreactnativejniC)) {
         libreactnativejniC += ((shootQ ? 5 : 5) << (Math.min(Math.abs(parseInt(`${libreactnativejniC}`)), 2)));
         break;
      }
      if (libsentryZ.size <= 1) {
         shootQ = themeV.length < libreactnativejniC;
      }
          let imagenetworkerr0 = String.fromCharCode(115,101,113,118,105,100,101,111,95,104,95,56,54,0);
         libreactnativejniC *= libsentryZ.size >> (Math.min(2, Math.abs(parseInt(`${libreactnativejniC}`))));
         imagenetworkerr0 = `${imagenetworkerr0.length}`;
          let u_centerZ = String.fromCharCode(105,95,53,55,95,111,99,107,105,110,103,0);
          let redirectl = String.fromCharCode(115,112,114,105,110,103,95,121,95,54,54,0);
          let d_locky = String.fromCharCode(100,105,97,108,111,103,115,95,114,95,50,0);
         libsentryZ.set(`${redirectl}`, redirectl.length);
         u_centerZ += `${d_locky.length}`;
         d_locky += "3";
      if ((2.92 + libreactnativejniC) < 2.31 && (libreactnativejniC + 2.92) < 3.82) {
         libsentryZ = new Map([[`${libsentryZ.size}`, parseInt(`${libreactnativejniC}`) >> (Math.min(Math.abs(libsentryZ.size), 5))]]);
      }
      if (4.98 < (libreactnativejniC + 1.89)) {
         libreactnativejniC *= libsentryZ.size;
      }
          let downarrowS: Map<any, any> = new Map([[String.fromCharCode(104,119,99,111,110,116,101,120,116,95,112,95,50,55,0),122], [String.fromCharCode(116,95,54,95,112,99,109,117,0),489]]);
          let buttony = 2;
          let minimize_: Array<any> = [714, 438, 496];
         themeV += "2";
         downarrowS.set(`${buttony}`, buttony);
         minimize_.push(buttony % (Math.max(minimize_.length, 1)));
      long_d7y += `${greyarrowupv.length * 1}`;
   }
      alertb -= parseFloat(`${areaX.size}`);
   if ((parseInt(`${tempx}`) * shared9.length) > 1 || 1 > (shared9.length * parseInt(`${tempx}`))) {
       let remindert: Map<any, any> = new Map([[String.fromCharCode(117,95,50,48,95,99,97,112,0),815], [String.fromCharCode(102,119,100,95,105,95,53,52,0),554]]);
       let hejiq = true;
       let bannerx = 0.0;
       let bello = String.fromCharCode(116,114,121,95,114,95,55,52,0);
         remindert.set(bello, (bello == String.fromCharCode(53,0) ? bello.length : parseInt(`${bannerx}`)));
      for (let k = 0; k < 3; k++) {
          let launchU = String.fromCharCode(97,100,106,117,115,116,101,114,95,50,95,55,0);
          let templateprocessorj: Array<any> = [947, 42];
          let signinup1 = 4.0;
         bannerx += ((hejiq ? 4 : 3) / (Math.max(parseInt(`${bannerx}`), 8)));
         launchU = `${launchU.length + 1}`;
         templateprocessorj = [1 - launchU.length];
         signinup1 -= templateprocessorj.length;
      }
         bannerx += remindert.size;
          let product7 = String.fromCharCode(110,95,49,48,48,95,108,111,99,97,108,105,122,101,100,0);
         hejiq = remindert.size <= 6 && hejiq;
         product7 += `${product7.length * 3}`;
         bannerx += bello.length;
         remindert = new Map([[`${remindert.size}`, bello.length]]);
          let attributedstringb: Array<any> = [String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,118,95,49,48,48,0), String.fromCharCode(103,95,57,57,95,99,111,111,107,105,101,115,0)];
          let vipsport_ = true;
         bannerx /= Math.max(attributedstringb.length, 3);
         attributedstringb = [((vipsport_ ? 3 : 2) & (vipsport_ ? 5 : 1))];
         bannerx -= ((hejiq ? 5 : 5) - 3);
         hejiq = !hejiq;
      if (bello.length >= 3) {
          let airbnbstarO = String.fromCharCode(116,95,51,52,95,110,101,115,116,101,100,0);
          let hejio = String.fromCharCode(115,95,57,51,95,97,114,116,119,111,114,107,0);
          let sort2 = String.fromCharCode(115,105,102,102,95,120,95,53,48,0);
          let encryptG = 3.0;
          let footballtrophym = String.fromCharCode(118,97,108,115,95,115,95,57,52,0);
         bannerx -= hejio.length;
         airbnbstarO = `${2 << (Math.min(5, Math.abs(parseInt(`${encryptG}`))))}`;
         hejio += `${2 << (Math.min(3, sort2.length))}`;
         sort2 = `${airbnbstarO.length}`;
         encryptG *= parseFloat(`${1}`);
         footballtrophym = "1";
      }
      let neonz = remindert.size <= 5114863;
      do {
          let predictionactiveZ = String.fromCharCode(100,101,108,97,121,97,98,108,101,95,54,95,49,50,0);
          let quest4 = 4;
          let leaguedetailsbgi: Array<any> = [223, 534];
          let libavcodece: Map<any, any> = new Map([[String.fromCharCode(101,95,49,57,95,114,101,100,0),461], [String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,104,95,53,55,0),160]]);
          let whistlep: Array<any> = [10, 279];
         remindert = new Map([[`${whistlep.length}`, whistlep.length]]);
         predictionactiveZ += `${libavcodece.size >> (Math.min(2, Math.abs(quest4)))}`;
         quest4 /= Math.max(3, 1);
         leaguedetailsbgi.push(leaguedetailsbgi.length);
         libavcodece = new Map([[`${libavcodece.size}`, libavcodece.size << (Math.min(Math.abs(3), 4))]]);
         if (neonz) {
            break;
         }
      } while (neonz && ((remindert.size / 1) == 4 && 1 == (1 / (Math.max(2, remindert.size)))));
      for (let s = 0; s < 3; s++) {
          let changej = false;
          let logouserB = String.fromCharCode(99,95,52,48,95,115,117,98,109,111,100,101,108,115,0);
         hejiq = hejiq && 79.72 <= bannerx;
         changej = (((!changej ? logouserB.length : 36) - logouserB.length) < 36);
      }
      tempx *= parseInt(`${bannerx}`);
   }
      long_d7y += "2";
   let detailsd = 9808280 >= tumbnail9.size;
   do {
      tumbnail9.set(`${alertb}`, parseInt(`${alertb}`) & 1);
      if (detailsd) {
         break;
      }
   } while (detailsd && (Array.from(tumbnail9.values()).includes(greyarrowup9.length)));
   for (let b = 0; b < 1; b++) {
      circleD -= 2;
   }
   for (let c = 0; c < 2; c++) {
      acceptedH *= parseFloat(`${parseInt(`${alertb}`)}`);
   }
      circleD -= libreanimateda.length << (Math.min(Math.abs(1), 5));
   if (!libreanimateda.startsWith(`${circleD}`)) {
      circleD *= tumbnail9.size;
   }
   if (long_d7y.length > circleD) {
      circleD /= Math.max(1, (String.fromCharCode(108,0) == shared9 ? shared9.length : greyarrowup9.length));
   }
    setRefreshing(false);
  };

  const refreshUserState = async () => {
       let iconbackwhite3 = 0.0;
    let leakcheckerM = String.fromCharCode(97,117,116,111,108,111,99,107,95,102,95,55,51,0);
    let dycreator7 = 4.0;
    let cedbadcebfbfbfbcfecbcs = true;
    let appleZ = 2;
    let matho = 4.0;
    let icondefaultthumbnailq = String.fromCharCode(99,108,101,97,114,95,112,95,57,53,0);
    let predictiondefault0 = false;
    let accepted0: Array<any> = [666, 411, 786];
    let reactnativeratingsI = String.fromCharCode(118,105,100,101,111,114,101,110,100,101,114,101,114,95,54,95,49,56,0);
    let jinit_8d7 = true;
    let orientationK = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,97,95,51,48,0);
    let profileactiveB = false;
   for (let u = 0; u < 1; u++) {
      appleZ /= Math.max(4, 2 | parseInt(`${matho}`));
   }
   for (let y = 0; y < 1; y++) {
      accepted0 = [2];
   }
      iconbackwhite3 /= Math.max(4, 3);
      icondefaultthumbnailq += `${reactnativeratingsI.length - 3}`;
      leakcheckerM += "1";
      appleZ %= Math.max(2, parseInt(`${dycreator7}`) | 2);

    const result = await mayi_Injury.getUserDetails();

      iconbackwhite3 -= parseInt(`${dycreator7}`) + leakcheckerM.length;
      cedbadcebfbfbfbcfecbcs = !predictiondefault0;
   while ((reactnativeratingsI.length << (Math.min(3, accepted0.length))) > 3 && 5 > (3 << (Math.min(5, accepted0.length)))) {
      accepted0 = [1];
      break;
   }
       let transferU = String.fromCharCode(100,117,97,108,105,110,112,117,116,95,98,95,57,49,0);
       let dangerr: Array<any> = [String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,107,95,56,53,0), String.fromCharCode(115,117,105,116,101,98,95,97,95,56,50,0)];
      for (let p = 0; p < 1; p++) {
          let leftp = String.fromCharCode(119,105,110,100,111,119,115,95,99,95,56,53,0);
          let abidetectR = 4.0;
          let arrowi = 1;
         dangerr = [3 ^ arrowi];
         leftp += `${3 / (Math.max(8, leftp.length))}`;
         abidetectR /= Math.max(3, parseFloat(`${leftp.length * 1}`));
         arrowi *= 2 * leftp.length;
      }
         dangerr = [1 | dangerr.length];
      for (let q = 0; q < 1; q++) {
         transferU += `${dangerr.length}`;
      }
      if (transferU.startsWith(`${dangerr.length}`)) {
          let launchh = String.fromCharCode(101,110,116,105,116,121,95,107,95,51,57,0);
          let chinasamex = 1;
         dangerr = [dangerr.length / 2];
         launchh = `${chinasamex % 2}`;
         chinasamex *= (String.fromCharCode(98,0) == launchh ? chinasamex : launchh.length);
      }
         dangerr.push((transferU == String.fromCharCode(86,0) ? dangerr.length : transferU.length));
      let penaltyshootC = dangerr.length >= 5281068;
      do {
         dangerr.push((String.fromCharCode(49,0) == transferU ? transferU.length : dangerr.length));
         if (penaltyshootC) {
            break;
         }
      } while ((transferU.endsWith(`${dangerr.length}`)) && penaltyshootC);
      dycreator7 *= (leakcheckerM == String.fromCharCode(104,0) ? transferU.length : leakcheckerM.length);
      appleZ >>= Math.min(Math.abs((2 & (cedbadcebfbfbfbcfecbcs ? 3 : 1))), 2);
      appleZ >>= Math.min(leakcheckerM.length, 3);
    if (result == null) {

       let iconsaveimageQ = String.fromCharCode(122,95,55,49,95,99,111,112,105,101,100,0);
       let backwardH = 0.0;
      if ((iconsaveimageQ.length * parseInt(`${backwardH}`)) < 3 && 2.70 < (parseFloat(`${iconsaveimageQ.length}`) * backwardH)) {
         iconsaveimageQ = `${3 | parseInt(`${backwardH}`)}`;
      }
          let imagenomoredata8 = 1.0;
          let giftbuttonL: Array<any> = [String.fromCharCode(98,105,114,116,104,100,97,116,101,95,99,95,56,57,0), String.fromCharCode(97,108,97,98,97,115,116,101,114,95,121,95,49,54,0), String.fromCharCode(100,95,57,95,99,97,114,111,117,115,101,108,0)];
          let gestureZ = 3;
         iconsaveimageQ += `${1 - iconsaveimageQ.length}`;
         imagenomoredata8 += giftbuttonL.length;
         giftbuttonL = [3];
         gestureZ ^= gestureZ * giftbuttonL.length;
         iconsaveimageQ = `${iconsaveimageQ.length * 2}`;
          let stringp = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,95,105,95,55,53,0);
          let predictiondefaultJ = 4.0;
         iconsaveimageQ += `${stringp.length}`;
         stringp = `${parseInt(`${predictiondefaultJ}`) | 2}`;
         predictiondefaultJ -= 1;
          let splashC = false;
          let confirmationN: Array<any> = [String.fromCharCode(103,97,109,117,116,95,108,95,50,48,0), String.fromCharCode(99,95,57,50,95,105,115,101,120,112,108,97,105,110,0), String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,95,112,95,51,50,0)];
          let calendarh: Map<any, any> = new Map([[String.fromCharCode(109,101,116,114,105,99,95,49,95,54,51,0),52], [String.fromCharCode(115,105,122,101,109,109,95,118,95,49,57,0),267], [String.fromCharCode(105,95,55,53,0),406]]);
         backwardH += (parseFloat(`${confirmationN.length & (splashC ? 1 : 3)}`));
         splashC = (calendarh.size | calendarh.size) >= 86;
         confirmationN.push(calendarh.size ^ calendarh.size);
         iconsaveimageQ = `${iconsaveimageQ.length}`;
      leakcheckerM = "3";
       let iconclosewhiteY: Array<any> = [49, 182, 454];
       let white7 = String.fromCharCode(110,95,51,55,95,116,101,114,109,0);
       let backiconT = String.fromCharCode(102,116,118,112,110,111,100,101,95,115,95,54,57,0);
       let time_ys = String.fromCharCode(104,114,115,115,95,118,95,48,0);
      for (let k = 0; k < 2; k++) {
         backiconT = `${backiconT.length}`;
      }
         iconclosewhiteY.push(3);
          let mbridgeY = true;
          let layoutf = String.fromCharCode(120,95,52,53,95,98,108,111,99,107,105,110,103,0);
         backiconT = `${(backiconT == String.fromCharCode(66,0) ? time_ys.length : backiconT.length)}`;
         mbridgeY = layoutf.length >= 39;
         layoutf += "3";
      if (5 == (iconclosewhiteY.length % (Math.max(time_ys.length, 4)))) {
         time_ys += `${backiconT.length}`;
      }
       let downloading4 = false;
         downloading4 = !downloading4 || backiconT.length >= 87;
       let humidityu = 1.0;
          let modityf = 5.0;
         humidityu -= (String.fromCharCode(75,0) == white7 ? white7.length : backiconT.length);
         modityf *= parseFloat(`${parseInt(`${modityf}`) ^ 1}`);
      appleZ &= 1;
   for (let u = 0; u < 1; u++) {
       let homeloading9 = 2.0;
       let closeq = String.fromCharCode(115,116,97,116,117,115,101,115,95,112,95,54,55,0);
       let predictionarrowt = 2;
       let codegen4 = 4.0;
       let chinasamen = String.fromCharCode(122,95,53,48,95,114,101,115,105,100,117,97,108,0);
         homeloading9 /= Math.max(3 & chinasamen.length, 3);
         predictionarrowt ^= 1 - chinasamen.length;
      for (let t = 0; t < 1; t++) {
         chinasamen = `${parseInt(`${codegen4}`) + 2}`;
      }
      while (4 > chinasamen.length) {
         codegen4 += predictionarrowt % (Math.max(parseInt(`${codegen4}`), 8));
         break;
      }
      while (1.20 >= (codegen4 - 3.0)) {
          let homeloadingt = String.fromCharCode(100,95,51,48,95,100,105,115,112,108,97,121,101,100,0);
         codegen4 += 1;
         homeloadingt += `${homeloadingt.length}`;
         break;
      }
          let informationE = 2;
         homeloading9 /= Math.max(parseInt(`${homeloading9}`), 1);
         informationE <<= Math.min(3, Math.abs(1));
         predictionarrowt >>= Math.min(Math.abs(closeq.length * chinasamen.length), 2);
      while ((2 / (Math.max(6, predictionarrowt))) == 5) {
         predictionarrowt %= Math.max(3, closeq.length);
         break;
      }
      let encryptorg = chinasamen.length <= 7519041;
      do {
          let networkT = String.fromCharCode(101,110,100,120,95,97,95,57,0);
          let feedbackc = String.fromCharCode(102,95,54,49,95,103,101,110,101,114,97,108,105,115,101,100,0);
          let imagemanagerf = String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,122,95,55,55,0);
          let customk = 3;
          let expandI = String.fromCharCode(116,114,97,99,107,105,110,103,95,102,95,57,49,0);
         chinasamen = "1";
         networkT = "1";
         feedbackc += `${imagemanagerf.length + customk}`;
         imagemanagerf = `${3 + customk}`;
         expandI += `${feedbackc.length}`;
         if (encryptorg) {
            break;
         }
      } while (((predictionarrowt ^ 2) > 5 || 2 > (chinasamen.length ^ 2)) && encryptorg);
      if (homeloading9 == 4.64) {
         chinasamen += `${chinasamen.length}`;
      }
      if (1.23 == (homeloading9 / 2.34) && (parseInt(`${homeloading9}`) / (Math.max(closeq.length, 8))) == 5) {
          let description_ww = String.fromCharCode(106,95,52,50,95,99,111,109,109,101,110,116,0);
          let with_xxo = 2;
          let p_image_ = String.fromCharCode(98,105,116,100,101,112,116,104,95,51,95,51,55,0);
         closeq += `${2 << (Math.min(1, chinasamen.length))}`;
         description_ww = `${p_image_.length}`;
         with_xxo >>= Math.min(Math.abs(p_image_.length + 2), 1);
      }
      while ((chinasamen.length ^ 3) >= 3) {
         chinasamen += `${predictionarrowt % (Math.max(parseInt(`${codegen4}`), 10))}`;
         break;
      }
         homeloading9 -= 1;
         codegen4 -= parseInt(`${codegen4}`);
         codegen4 -= (String.fromCharCode(112,0) == closeq ? closeq.length : parseInt(`${codegen4}`));
      predictiondefault0 = predictionarrowt <= 4;
   }
      cedbadcebfbfbfbcfecbcs = icondefaultthumbnailq.length <= 53 || !cedbadcebfbfbfbcfecbcs;
      cedbadcebfbfbfbcfecbcs = 73 > leakcheckerM.length || appleZ > 73;
   for (let v = 0; v < 1; v++) {
      accepted0.push(3 & parseInt(`${matho}`));
   }
      return;
    }

    await dispatch(updateUserAuth(result));

       let zoomX = true;
          let greytick9 = String.fromCharCode(97,112,115,95,48,95,49,49,0);
         zoomX = greytick9.length >= 88 || !zoomX;
         zoomX = !zoomX && !zoomX;
         zoomX = !zoomX;
      jinit_8d7 = matho <= 76.66;
   let libreactnativeblobV = jinit_8d7 ? !jinit_8d7 : jinit_8d7;
   do {
       let tempnodatagifh = 0.0;
       let profileactiveN: Array<any> = [57, 692];
          let areaS = String.fromCharCode(111,110,121,120,99,95,105,95,50,53,0);
          let transferC = String.fromCharCode(108,95,49,95,114,101,118,105,115,105,111,110,0);
         profileactiveN = [transferC.length | parseInt(`${tempnodatagifh}`)];
         areaS += `${areaS.length ^ 1}`;
         transferC += `${areaS.length | 2}`;
          let graphicsB = 5;
         tempnodatagifh -= profileactiveN.length;
         graphicsB ^= graphicsB & 2;
      for (let y = 0; y < 2; y++) {
         tempnodatagifh += parseInt(`${tempnodatagifh}`) >> (Math.min(2, Math.abs(3)));
      }
         tempnodatagifh /= Math.max(profileactiveN.length ^ parseInt(`${tempnodatagifh}`), 4);
         profileactiveN.push(parseInt(`${tempnodatagifh}`) << (Math.min(profileactiveN.length, 5)));
      while (3 >= (parseInt(`${tempnodatagifh}`) - profileactiveN.length) || (3.59 - tempnodatagifh) >= 4.27) {
         profileactiveN.push(profileactiveN.length - 3);
         break;
      }
      jinit_8d7 = 60.86 <= tempnodatagifh;
      if (libreactnativeblobV) {
         break;
      }
   } while (libreactnativeblobV && (icondefaultthumbnailq.startsWith(`${jinit_8d7}`)));
   while (icondefaultthumbnailq.length <= 1) {
      jinit_8d7 = leakcheckerM.length >= 3;
      break;
   }
       let close_: Map<any, any> = new Map([[String.fromCharCode(114,101,102,101,114,101,110,101,95,119,95,56,52,0),String.fromCharCode(108,95,49,95,119,105,114,101,108,101,115,115,0)], [String.fromCharCode(104,95,57,49,95,100,101,115,101,108,101,99,116,105,111,110,0),String.fromCharCode(121,95,50,53,95,114,111,98,111,108,101,99,116,114,105,99,0)]]);
          let reducerM = String.fromCharCode(103,95,55,49,95,97,116,116,114,0);
          let unreadH = 3.0;
         close_.set(reducerM, reducerM.length);
         unreadH -= parseFloat(`${parseInt(`${unreadH}`)}`);
      while (close_.size <= 1) {
         close_.set(`${close_.size}`, close_.size - 3);
         break;
      }
      for (let t = 0; t < 3; t++) {
         close_.set(`${close_.size}`, close_.size << (Math.min(Math.abs(1), 3)));
      }
      leakcheckerM += `${((predictiondefault0 ? 1 : 2))}`;
      leakcheckerM += `${((cedbadcebfbfbfbcfecbcs ? 3 : 5))}`;
      accepted0.push(leakcheckerM.length);
    return;
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="邀请好友奖励" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
        }
      >
        {/* <TitleWithBackButtonHeader title="邀请好友奖励" /> */}
        <View style={{ paddingHorizontal: 0 }}>
          { }
          <InviteHeader />
          { }
          <InviteCard userState={userState.user!} />
          { }

          <TouchableOpacity activeOpacity={0.85}
            onPress={() => {
              navigation.navigate("活动规则");
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "underline",
                  color: "#ffffff",
                }}
              >
                活动规则
              </Text>
            </View>
          </TouchableOpacity>
          { }
        </View>
        <InviteStep />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
