import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Modal,
} from "react-native";
import ScreenContainer from "../../components/container/mayi_save";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/mayi_predictiondefault_header";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/mayi_push_bodan_button";
import NotificationModal from "../../components/modal/mayi_muted_edit";
import MoreArrow from "@static/images/scorepopsoundDefaultprofilepicDycreator.svg";
import ConfirmationModal from "../../components/modal/mayi_small_catalog";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { clearStorageMemory } from "@redux/actions/mayi_modal";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux/actions/mayi_librrc";
import { changeScreenAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";

import { APP_VERSION, IS_OTHER_SKIN } from "@utility/mayi_middleware_apps";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { mayi_ReactBang } from "@utility/mayi_zhubo";
import { clearMinivodApiCache } from "../../utils/mayi_context_statsnomoredata";
import { mayi_Injury } from "../../api/mayi_libjsinspector";
import { addUserAuthState } from "@redux/actions/mayi_librrc";
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import { mayi_Gift } from "@models/mayi_libjsinspector";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
  const { colors, textVariants, icons, spacing, dark } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); 

  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let connectionG = true;
    let iconwechath = String.fromCharCode(118,97,108,115,95,111,95,52,54,0);
    let gifgoalbgq = 0.0;
    let whiteanimationlivec = String.fromCharCode(102,95,53,50,95,115,116,100,108,105,98,0);
    let buffer4 = 5;
    let singaporeq = String.fromCharCode(105,95,53,48,95,120,117,118,109,118,115,0);
    let telemetryJ = String.fromCharCode(104,95,55,49,95,108,105,98,115,115,104,0);
    let grayd: Map<any, any> = new Map([[String.fromCharCode(112,95,50,51,95,99,114,101,97,116,111,114,0),String.fromCharCode(97,95,55,56,95,98,117,98,98,108,101,0)], [String.fromCharCode(111,112,101,114,97,110,100,95,100,95,53,54,0),String.fromCharCode(103,95,57,50,95,108,111,116,115,0)], [String.fromCharCode(117,108,112,105,110,102,111,95,103,95,49,53,0),String.fromCharCode(113,95,49,49,95,99,111,110,115,116,116,105,109,101,0)]]);
    let scrollviewo = String.fromCharCode(99,95,57,52,95,114,101,111,115,0);
    let scheduleS = 5.0;
   let hoverv = connectionG ? !connectionG : connectionG;
   do {
      connectionG = scrollviewo == String.fromCharCode(101,0);
      if (hoverv) {
         break;
      }
   } while (hoverv && (!iconwechath.endsWith(`${connectionG}`)));
   for (let e = 0; e < 1; e++) {
      connectionG = !iconwechath.includes(`${connectionG}`);
   }
   for (let z = 0; z < 1; z++) {
      grayd = new Map([[`${grayd.size}`, (singaporeq == String.fromCharCode(99,0) ? singaporeq.length : grayd.size)]]);
   }
       let navigationN: Array<any> = [927, 142, 775];
      for (let j = 0; j < 2; j++) {
         navigationN.push(navigationN.length << (Math.min(navigationN.length, 2)));
      }
       let pagez: Array<any> = [347, 34];
       let anytimeI: Array<any> = [String.fromCharCode(116,95,52,57,95,101,120,112,105,114,101,115,0), String.fromCharCode(99,117,116,95,116,95,53,53,0)];
      for (let v = 0; v < 3; v++) {
         anytimeI = [anytimeI.length % 2];
      }
      iconwechath += `${1 >> (Math.min(4, singaporeq.length))}`;
   let dycreatorX = 9323200 <= buffer4;
   do {
       let mimo5 = 2.0;
         mimo5 += parseFloat(`${parseInt(`${mimo5}`) ^ 3}`);
      let topon8 = 8429187.0 >= mimo5;
      do {
         mimo5 -= parseFloat(`${parseInt(`${mimo5}`) & parseInt(`${mimo5}`)}`);
         if (topon8) {
            break;
         }
      } while (topon8 && (mimo5 < 1.13));
         mimo5 *= parseFloat(`${parseInt(`${mimo5}`)}`);
      buffer4 ^= (scrollviewo == String.fromCharCode(71,0) ? grayd.size : scrollviewo.length);
      if (dycreatorX) {
         break;
      }
   } while ((connectionG) && dycreatorX);
      gifgoalbgq *= (parseFloat(`${(connectionG ? 4 : 1) / (Math.max(telemetryJ.length, 10))}`));
   let libswresampleR = singaporeq.length <= 8113192;
   do {
      singaporeq = `${buffer4 / (Math.max(2, 4))}`;
      if (libswresampleR) {
         break;
      }
   } while ((singaporeq.length >= 1 || !connectionG) && libswresampleR);
   for (let p = 0; p < 3; p++) {
      singaporeq += `${3 * iconwechath.length}`;
   }
   let defaultprofilepicE = 6815442 <= whiteanimationlivec.length;
   do {
       let analytico = String.fromCharCode(104,95,49,53,95,100,111,110,97,116,105,111,110,0);
       let libnmsJ = 1.0;
       let flipperG: Map<any, any> = new Map([[String.fromCharCode(107,101,121,103,101,110,95,111,95,51,51,0),702], [String.fromCharCode(117,95,54,50,95,105,110,100,105,99,105,101,115,0),460]]);
       let executorp = 3.0;
       let iconarrowleftH = 0;
         executorp += parseFloat(`${flipperG.size}`);
      let downloadedQ = iconarrowleftH >= 5512482;
      do {
         iconarrowleftH *= parseInt(`${executorp}`);
         if (downloadedQ) {
            break;
         }
      } while (downloadedQ && ((4 & flipperG.size) > 4 || 5 > (flipperG.size & 4)));
         analytico += `${3 % (Math.max(iconarrowleftH, 6))}`;
      if (1 < (iconarrowleftH * 5)) {
         executorp /= Math.max(parseFloat(`${analytico.length}`), 3);
      }
      if (5 == (flipperG.size / (Math.max(1, parseInt(`${executorp}`)))) || 4 == (flipperG.size * 5)) {
          let libjsiV = String.fromCharCode(100,117,109,112,105,110,103,95,57,95,54,49,0);
          let crownH = String.fromCharCode(108,95,56,48,95,114,101,115,116,114,105,99,116,105,111,110,0);
          let buffere = String.fromCharCode(116,101,109,112,108,97,116,101,115,95,117,95,55,48,0);
          let termsM = true;
          let halffieldimagep: Map<any, any> = new Map([[String.fromCharCode(100,95,52,48,95,114,97,119,0),981], [String.fromCharCode(122,95,55,51,95,105,116,108,101,0),465]]);
         executorp *= (parseFloat(`${parseInt(`${libnmsJ}`) | (termsM ? 4 : 5)}`));
         libjsiV = `${buffere.length}`;
         crownH = `${(String.fromCharCode(79,0) == crownH ? crownH.length : libjsiV.length)}`;
         buffere += `${buffere.length & crownH.length}`;
         termsM = buffere == crownH;
         halffieldimagep.set(crownH, 3);
      }
      while ((libnmsJ + executorp) >= 4.58) {
         executorp *= parseFloat(`${parseInt(`${executorp}`)}`);
         break;
      }
      for (let x = 0; x < 1; x++) {
         analytico += `${flipperG.size / 2}`;
      }
         analytico += `${analytico.length & 3}`;
       let filterh = 1.0;
      for (let w = 0; w < 3; w++) {
          let videocommonr: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,95,97,95,57,0),191], [String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,116,95,52,48,0),646]]);
          let launcher3 = String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,97,95,50,50,0);
          let whistleorangeF = String.fromCharCode(117,98,108,105,99,95,101,95,50,52,0);
          let panglef: Map<any, any> = new Map([[String.fromCharCode(110,95,51,53,95,116,114,97,110,115,112,111,114,116,115,0),262], [String.fromCharCode(114,95,55,55,95,111,108,107,97,100,111,116,0),13]]);
          let largek: Array<any> = [975, 555];
         executorp -= parseFloat(`${flipperG.size}`);
         videocommonr = new Map([[`${videocommonr.size}`, launcher3.length ^ 1]]);
         launcher3 += `${panglef.size}`;
         whistleorangeF = "2";
         panglef.set(whistleorangeF, launcher3.length % 1);
         largek = [launcher3.length];
      }
      if ((executorp / (Math.max(6, iconarrowleftH))) <= 3.73) {
         executorp += parseFloat(`${parseInt(`${filterh}`)}`);
      }
      while ((flipperG.size / (Math.max(8, filterh))) >= 3.24) {
          let countdownt = String.fromCharCode(114,95,48,95,101,99,107,101,121,0);
          let iconclosewhitewithbgD = String.fromCharCode(122,95,50,53,95,108,111,111,107,97,115,105,100,101,0);
         filterh /= Math.max(3 / (Math.max(10, parseInt(`${libnmsJ}`))), 3);
         countdownt += `${iconclosewhitewithbgD.length}`;
         iconclosewhitewithbgD += `${(iconclosewhitewithbgD == String.fromCharCode(88,0) ? iconclosewhitewithbgD.length : countdownt.length)}`;
         break;
      }
      while (1.57 >= (5.4 * executorp)) {
         executorp /= Math.max(5, parseFloat(`${analytico.length / 1}`));
         break;
      }
       let topicU = String.fromCharCode(109,101,115,115,97,103,105,110,103,95,98,95,50,51,0);
         analytico = `${3 % (Math.max(8, analytico.length))}`;
      whiteanimationlivec = "3";
      if (defaultprofilepicE) {
         break;
      }
   } while (defaultprofilepicE && (5 > (2 * whiteanimationlivec.length)));
   for (let d = 0; d < 2; d++) {
      gifgoalbgq *= parseFloat(`${1 - grayd.size}`);
   }
   for (let o = 0; o < 3; o++) {
      gifgoalbgq *= parseFloat(`${scrollviewo.length + telemetryJ.length}`);
   }
      singaporeq += `${((connectionG ? 1 : 1))}`;
      whiteanimationlivec = `${(singaporeq == String.fromCharCode(120,0) ? buffer4 : singaporeq.length)}`;
   let link8 = whiteanimationlivec.length >= 7945803;
   do {
       let dependencyr: Array<any> = [164, 71];
      while ((dependencyr.length ^ dependencyr.length) <= 4) {
         dependencyr.push(1 ^ dependencyr.length);
         break;
      }
      for (let g = 0; g < 3; g++) {
          let homeinactiveT = String.fromCharCode(112,95,49,55,95,107,101,121,118,97,108,0);
          let countryi = 2.0;
          let nterstitialr = String.fromCharCode(112,100,115,95,112,95,54,50,0);
          let bottomZ = 0.0;
          let d_unlockY = String.fromCharCode(100,120,116,121,95,103,95,52,57,0);
         dependencyr.push(parseInt(`${countryi}`) - 1);
         homeinactiveT = `${1 - nterstitialr.length}`;
         countryi *= parseFloat(`${homeinactiveT.length | 3}`);
         nterstitialr += `${parseInt(`${bottomZ}`) >> (Math.min(homeinactiveT.length, 3))}`;
         bottomZ *= parseFloat(`${nterstitialr.length ^ homeinactiveT.length}`);
         d_unlockY += `${homeinactiveT.length}`;
      }
         dependencyr.push(3);
      whiteanimationlivec = `${iconwechath.length << (Math.min(Math.abs(1), 4))}`;
      if (link8) {
         break;
      }
   } while ((iconwechath == whiteanimationlivec) && link8);
       let statsnomoredatae = 2;
       let redirectB = String.fromCharCode(120,99,98,103,114,97,98,95,107,95,54,54,0);
      for (let e = 0; e < 2; e++) {
         redirectB = `${(redirectB == String.fromCharCode(117,0) ? redirectB.length : statsnomoredatae)}`;
      }
       let userv = true;
      let spinnerV = 8499554 >= statsnomoredatae;
      do {
         statsnomoredatae ^= (redirectB.length >> (Math.min(2, Math.abs((userv ? 1 : 1)))));
         if (spinnerV) {
            break;
         }
      } while (spinnerV && (5 >= statsnomoredatae));
         userv = String.fromCharCode(79,0) == redirectB && statsnomoredatae <= 76;
         statsnomoredatae /= Math.max(5, redirectB.length);
      let downC = userv ? !userv : userv;
      do {
         userv = (redirectB.length << (Math.min(5, Math.abs(statsnomoredatae)))) >= 66;
         if (downC) {
            break;
         }
      } while (((1 * statsnomoredatae) >= 1 || userv) && downC);
      buffer4 ^= scrollviewo.length;
   for (let t = 0; t < 2; t++) {
      iconwechath = `${1 * grayd.size}`;
   }
   if (!connectionG) {
      connectionG = null != grayd.get(`${buffer4}`);
   }
       let iconadslinkY = String.fromCharCode(111,95,49,55,95,115,116,109,116,0);
       let iconqqv = false;
         iconqqv = iconadslinkY.startsWith(`${iconqqv}`);
      let brightnesse = iconqqv ? !iconqqv : iconqqv;
      do {
         iconqqv = !iconqqv;
         if (brightnesse) {
            break;
         }
      } while (brightnesse && (iconqqv));
      while (iconqqv && 4 < iconadslinkY.length) {
          let thumbnailk: Array<any> = [288, 429];
          let constantsV = 2.0;
         iconadslinkY = `${2 ^ parseInt(`${constantsV}`)}`;
         thumbnailk = [thumbnailk.length];
         constantsV /= Math.max(2, 2);
         break;
      }
         iconqqv = !iconadslinkY.includes(`${iconqqv}`);
      while (iconqqv || 2 > iconadslinkY.length) {
          let moduleD = 1;
          let componentB = 1;
          let large7 = String.fromCharCode(107,101,121,119,111,114,100,95,111,95,55,52,0);
         iconqqv = !iconqqv;
         moduleD += componentB + 2;
         componentB += (large7 == String.fromCharCode(76,0) ? componentB : large7.length);
         break;
      }
         iconqqv = (31 <= (iconadslinkY.length + (iconqqv ? iconadslinkY.length : 31)));
      gifgoalbgq /= Math.max(2, parseFloat(`${3}`));
      connectionG = whiteanimationlivec == String.fromCharCode(111,0);
   let blacklistP = 7574411 <= whiteanimationlivec.length;
   do {
       let mimoB = 0;
       let stationsv = 0;
         stationsv %= Math.max(1, 3);
         mimoB /= Math.max(4, 2 % (Math.max(4, mimoB)));
      let textinputD = 8266667 <= mimoB;
      do {
         mimoB += mimoB >> (Math.min(Math.abs(2), 3));
         if (textinputD) {
            break;
         }
      } while ((stationsv > mimoB) && textinputD);
         stationsv *= mimoB & stationsv;
         stationsv >>= Math.min(5, Math.abs(stationsv / 3));
      if (1 <= stationsv) {
         mimoB %= Math.max(stationsv, 2);
      }
      whiteanimationlivec += `${buffer4 | 3}`;
      if (blacklistP) {
         break;
      }
   } while (blacklistP && (3 >= (buffer4 ^ 4) || (whiteanimationlivec.length ^ 4) >= 2));
      connectionG = singaporeq.length >= 100;
   let abidetectm = gifgoalbgq >= 5221155.0;
   do {
       let active0 = false;
       let livesharea = 1;
          let analyticsU = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,103,95,56,52,0);
          let iconclosewhitewithbgY = 4;
         livesharea /= Math.max(5, 3);
         analyticsU += "3";
         iconclosewhitewithbgY >>= Math.min(2, Math.abs(1 * iconclosewhitewithbgY));
      while (3 <= (livesharea * 1) && livesharea <= 1) {
         livesharea %= Math.max(4, livesharea);
         break;
      }
          let splashO = String.fromCharCode(120,95,54,49,95,99,111,109,112,97,114,101,114,115,0);
          let loginB = false;
         active0 = String.fromCharCode(122,0) == splashO && 92 >= livesharea;
         splashO += `${((loginB ? 4 : 2))}`;
      if (active0 || 2 <= (livesharea * 5)) {
         active0 = livesharea <= 57;
      }
       let greenA = String.fromCharCode(109,95,53,56,95,112,114,105,110,116,118,97,108,0);
         livesharea /= Math.max(2, 1);
      gifgoalbgq += parseFloat(`${whiteanimationlivec.length << (Math.min(Math.abs(2), 4))}`);
      if (abidetectm) {
         break;
      }
   } while ((1.34 > (parseFloat(`${iconwechath.length}`) * gifgoalbgq)) && abidetectm);

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let privilegeG = String.fromCharCode(108,95,49,95,115,116,114,101,97,109,105,110,102,111,0);
    let greenD = 0;
    let manifesto = String.fromCharCode(99,104,101,99,107,105,110,103,95,120,95,51,51,0);
    let matches4 = 4.0;
    let hooksz = String.fromCharCode(114,101,99,111,109,112,111,115,101,95,98,95,55,50,0);
    let detailsQ = 2.0;
    let predictionarrowG = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,120,95,52,56,0);
    let libjsiJ = 0.0;
    let informationN = String.fromCharCode(110,105,109,97,116,101,100,95,101,95,51,49,0);
    let predictionactiveb = String.fromCharCode(107,95,50,54,95,109,117,108,115,117,98,0);
    let predictionbuttonF: Map<any, any> = new Map([[String.fromCharCode(109,97,99,104,105,110,101,95,118,95,53,49,0),230], [String.fromCharCode(108,117,97,95,111,95,56,48,0),444]]);
    let submitF: Array<any> = [895, 811];
    let greytickK = 2.0;
    let homeactiveQ = String.fromCharCode(101,110,99,111,100,101,114,115,95,53,95,55,49,0);
    let delegate_4ao = 0.0;
   for (let k = 0; k < 3; k++) {
       let moonF = 1;
         moonF >>= Math.min(3, Math.abs(moonF));
      if ((2 << (Math.min(2, Math.abs(moonF)))) >= 3) {
         moonF >>= Math.min(3, Math.abs(moonF - moonF));
      }
         moonF &= 2;
      hooksz += `${predictionactiveb.length}`;
   }
       let black0 = 3;
       let predictionbannershared6 = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,101,95,55,51,0);
       let c_titlew: Map<any, any> = new Map([[String.fromCharCode(103,115,117,98,95,103,95,55,0),false ], [String.fromCharCode(109,95,53,54,95,116,114,105,101,0),false ]]);
         black0 += predictionbannershared6.length;
      for (let o = 0; o < 3; o++) {
         predictionbannershared6 += "2";
      }
       let abouts = String.fromCharCode(117,95,57,49,95,99,97,110,100,105,100,97,116,101,115,0);
         predictionbannershared6 = "2 * black0";
         c_titlew = new Map([[`${black0}`, (String.fromCharCode(79,0) == predictionbannershared6 ? predictionbannershared6.length : black0)]]);
         predictionbannershared6 += `${(String.fromCharCode(83,0) == predictionbannershared6 ? c_titlew.size : predictionbannershared6.length)}`;
         predictionbannershared6 += `${predictionbannershared6.length}`;
      if (predictionbannershared6.length == c_titlew.size) {
         c_titlew = new Map([[`${c_titlew.size}`, c_titlew.size ^ black0]]);
      }
      while ((c_titlew.size | abouts.length) < 5) {
         abouts = "3";
         break;
      }
      matches4 += parseFloat(`${2}`);
   if (privilegeG != predictionarrowG) {
       let comments = 3;
       let rewardE = 1;
       let nativem: Array<any> = [760, 429];
       let commenth = 5.0;
       let s_player1 = String.fromCharCode(102,95,52,51,95,98,117,105,108,100,105,110,103,0);
          let canvasU = 5;
          let imagenomoredata5 = String.fromCharCode(105,95,55,51,95,102,105,100,99,116,0);
          let layoutz = 2.0;
         commenth += parseFloat(`${rewardE}`);
         canvasU *= 1 << (Math.min(Math.abs(parseInt(`${layoutz}`)), 3));
         imagenomoredata5 = `${canvasU | 1}`;
         layoutz += canvasU >> (Math.min(Math.abs(parseInt(`${layoutz}`)), 3));
       let stringA = 0;
         s_player1 = `${s_player1.length - nativem.length}`;
          let countryX = 4.0;
          let textinput3 = 1;
          let disconnectedA = 0.0;
         rewardE -= 2;
         countryX *= parseInt(`${disconnectedA}`);
         textinput3 += 1 - parseInt(`${countryX}`);
         disconnectedA -= textinput3;
      if (stringA > 3) {
          let detailf = String.fromCharCode(106,95,49,49,95,102,99,112,117,98,108,105,115,104,0);
          let footballX: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,117,112,112,101,114,99,97,115,101,0),470], [String.fromCharCode(117,95,52,55,95,116,101,108,101,103,114,97,0),170], [String.fromCharCode(112,114,97,112,97,114,101,95,52,95,48,0),539]]);
          let skipy: Map<any, any> = new Map([[String.fromCharCode(97,95,55,57,95,98,105,116,101,120,97,99,116,110,101,115,115,0),284], [String.fromCharCode(114,101,102,101,114,95,53,95,53,49,0),140], [String.fromCharCode(112,101,114,109,95,116,95,52,50,0),863]]);
          let application1: Array<any> = [520, 346];
          let textlayoutmanagerj = 4.0;
         stringA %= Math.max(3, skipy.size);
         detailf += "2";
         footballX.set(`${textlayoutmanagerj}`, 1);
         skipy.set(`${application1.length}`, 1);
         application1 = [3 * parseInt(`${textlayoutmanagerj}`)];
      }
      for (let n = 0; n < 2; n++) {
         s_player1 += `${parseInt(`${commenth}`)}`;
      }
      let iconarrowrightS = s_player1.length >= 7454581;
      do {
         s_player1 += `${2 & rewardE}`;
         if (iconarrowrightS) {
            break;
         }
      } while (iconarrowrightS && ((s_player1.length + 1) > 2 || (commenth + 2.34) > 2.12));
      let fieldF = String.fromCharCode(50,112,50,107,105,115,0) == s_player1;
      do {
          let iconwatch3 = 5.0;
         s_player1 = `${3 >> (Math.min(3, nativem.length))}`;
         iconwatch3 /= Math.max(parseInt(`${iconwatch3}`) | parseInt(`${iconwatch3}`), 1);
         if (fieldF) {
            break;
         }
      } while (fieldF && (!s_player1.startsWith(`${comments}`)));
         rewardE |= rewardE / (Math.max(7, parseInt(`${commenth}`)));
      while (3 > (parseInt(`${commenth}`) + nativem.length)) {
         commenth += parseFloat(`${s_player1.length}`);
         break;
      }
          let basketballawayteamG = 4.0;
         stringA += comments;
         basketballawayteamG += parseFloat(`${parseInt(`${basketballawayteamG}`) & 3}`);
      for (let r = 0; r < 1; r++) {
         rewardE -= stringA;
      }
      if ((stringA / (Math.max(6, rewardE))) == 5 || 5 == (stringA / (Math.max(rewardE, 7)))) {
         rewardE *= stringA;
      }
       let toponA = 4.0;
         stringA -= 2;
      predictionarrowG += "3";
   }
       let matchm: Array<any> = [String.fromCharCode(117,110,99,111,109,112,97,99,116,95,99,95,49,51,0), String.fromCharCode(97,108,112,104,97,98,101,116,115,95,105,95,56,0)];
       let activet = String.fromCharCode(100,111,99,108,105,115,116,95,116,95,56,54,0);
      while (2 >= (matchm.length + 3) || 2 >= (3 + activet.length)) {
         activet += "2";
         break;
      }
       let giftz: Map<any, any> = new Map([[String.fromCharCode(116,95,57,55,95,104,105,103,104,108,105,103,104,116,0),String.fromCharCode(106,95,54,53,95,119,97,116,99,104,0)], [String.fromCharCode(103,95,57,51,95,98,117,105,108,100,0),String.fromCharCode(113,95,53,48,95,97,118,97,116,97,114,115,0)]]);
      for (let m = 0; m < 3; m++) {
          let pushC = String.fromCharCode(97,99,99,101,115,115,105,98,108,101,95,55,95,50,55,0);
          let refreshm: Map<any, any> = new Map([[String.fromCharCode(120,95,50,55,95,117,110,108,111,99,107,101,100,0),1], [String.fromCharCode(102,105,110,97,108,108,121,95,114,95,54,48,0),809]]);
          let iconadslinki: Map<any, any> = new Map([[String.fromCharCode(120,95,55,54,0),132], [String.fromCharCode(98,101,104,97,118,105,111,114,115,95,118,95,49,54,0),87], [String.fromCharCode(100,95,51,52,95,101,110,100,112,111,105,110,116,115,0),602]]);
          let promotionH = 4;
          let time_ceC: Array<any> = [167, 568];
         activet += "3";
         pushC += `${promotionH / 3}`;
         refreshm = new Map([[`${iconadslinki.size}`, time_ceC.length - iconadslinki.size]]);
         promotionH /= Math.max(1 / (Math.max(4, time_ceC.length)), 5);
      }
      let profilev = 7136078 >= giftz.size;
      do {
         giftz = new Map([[`${giftz.size}`, activet.length | giftz.size]]);
         if (profilev) {
            break;
         }
      } while ((1 <= (1 >> (Math.min(3, Math.abs(giftz.size)))) || 1 <= (giftz.size >> (Math.min(activet.length, 4)))) && profilev);
      for (let d = 0; d < 2; d++) {
         activet += `${(String.fromCharCode(101,0) == activet ? matchm.length : activet.length)}`;
      }
         matchm.push(activet.length);
      libjsiJ *= parseFloat(`${parseInt(`${libjsiJ}`)}`);
      detailsQ += greenD;
      predictionactiveb += `${(String.fromCharCode(118,0) == informationN ? informationN.length : parseInt(`${libjsiJ}`))}`;
   while (2 == (informationN.length - parseInt(`${matches4}`))) {
      matches4 *= parseFloat(`${predictionbuttonF.size >> (Math.min(5, Math.abs(parseInt(`${libjsiJ}`))))}`);
      break;
   }
      predictionarrowG += `${parseInt(`${detailsQ}`)}`;
      detailsQ /= Math.max(1, 1);
      privilegeG += `${hooksz.length}`;
      predictionactiveb = `${(manifesto == String.fromCharCode(115,0) ? parseInt(`${detailsQ}`) : manifesto.length)}`;
       let thailandA = String.fromCharCode(98,95,49,49,95,112,114,111,99,101,115,115,0);
      if (3 > thailandA.length) {
         thailandA = `${(String.fromCharCode(114,0) == thailandA ? thailandA.length : thailandA.length)}`;
      }
      let upgradem = 6448487 >= thailandA.length;
      do {
          let combinet = String.fromCharCode(112,95,56,49,95,103,101,116,109,97,120,114,115,115,0);
          let embedR: Array<any> = [790, 927];
          let humidityD = String.fromCharCode(106,95,49,55,95,117,112,115,104,105,102,116,0);
          let short__E = String.fromCharCode(119,95,56,55,0);
         thailandA += `${3 & thailandA.length}`;
         combinet += `${(String.fromCharCode(106,0) == humidityD ? humidityD.length : embedR.length)}`;
         embedR = [short__E.length | 1];
         short__E = `${(String.fromCharCode(74,0) == humidityD ? embedR.length : humidityD.length)}`;
         if (upgradem) {
            break;
         }
      } while ((thailandA == String.fromCharCode(99,0)) && upgradem);
         thailandA = `${thailandA.length + thailandA.length}`;
      detailsQ += 2 + submitF.length;
      greenD <<= Math.min(4, submitF.length);
       let embedn = 4.0;
          let playe = true;
          let lessZ: Array<any> = [943, 35];
         embedn -= (parseInt(`${embedn}`) ^ (playe ? 4 : 2));
         playe = 2 > lessZ.length;
         lessZ.push(1 + lessZ.length);
      if (embedn > embedn) {
          let private__J = String.fromCharCode(118,109,104,100,95,55,95,53,55,0);
          let debugU = 1;
         embedn -= private__J.length - debugU;
      }
      if ((embedn + embedn) == 4.8 && (embedn + embedn) == 4.8) {
         embedn -= 3;
      }
      submitF.push(greenD | manifesto.length);
      privilegeG += `${parseInt(`${detailsQ}`)}`;
   while (predictionbuttonF.size > manifesto.length) {
       let gift5: Map<any, any> = new Map([[String.fromCharCode(107,95,55,53,95,110,105,100,111,98,106,0),781], [String.fromCharCode(108,95,56,49,95,114,101,102,101,114,101,110,101,0),72]]);
      let expandZ = gift5.size <= 7339462;
      do {
         gift5 = new Map([[`${gift5.size}`, gift5.size]]);
         if (expandZ) {
            break;
         }
      } while (((gift5.size & 2) < 1) && expandZ);
         gift5 = new Map([[`${gift5.size}`, gift5.size << (Math.min(Math.abs(gift5.size), 5))]]);
      while (2 == (gift5.size >> (Math.min(Math.abs(4), 3)))) {
         gift5.set(`${gift5.size}`, gift5.size);
         break;
      }
      manifesto = `${informationN.length}`;
      break;
   }
   let vipsport3 = 6653352 >= predictionactiveb.length;
   do {
       let schedulerJ = 4.0;
         schedulerJ -= parseFloat(`${2}`);
      if (2.2 > schedulerJ) {
         schedulerJ /= Math.max(parseFloat(`${parseInt(`${schedulerJ}`) << (Math.min(2, Math.abs(parseInt(`${schedulerJ}`))))}`), 3);
      }
          let model9 = 4.0;
         schedulerJ -= parseFloat(`${parseInt(`${schedulerJ}`) & parseInt(`${model9}`)}`);
      predictionactiveb = `${parseInt(`${detailsQ}`)}`;
      if (vipsport3) {
         break;
      }
   } while (vipsport3 && ((2 & predictionbuttonF.size) == 3 || (2 & predictionbuttonF.size) == 1));
      submitF.push(predictionactiveb.length);
       let typesX: Array<any> = [String.fromCharCode(114,115,104,105,102,116,95,119,95,56,52,0), String.fromCharCode(97,95,57,53,95,115,105,103,110,117,109,0)];
       let arrowupe: Array<any> = [814, 374, 456];
       let injuryS = false;
      let nativeexr = arrowupe.length >= 6902396;
      do {
          let controlu: Array<any> = [983, 501];
          let splashp = 5.0;
          let darkH = 1.0;
          let cedbadcebfbfbfbcfecbcc: Map<any, any> = new Map([[String.fromCharCode(116,104,105,99,107,110,101,115,115,95,110,95,51,53,0),311], [String.fromCharCode(121,111,117,95,121,95,51,57,0),659], [String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,99,95,51,52,0),129]]);
          let aboutV = String.fromCharCode(103,95,52,51,95,116,97,98,108,101,115,0);
         arrowupe.push(aboutV.length + cedbadcebfbfbfbcfecbcc.size);
         controlu = [1];
         splashp *= controlu.length >> (Math.min(Math.abs(1), 2));
         darkH /= Math.max(parseInt(`${splashp}`), 3);
         cedbadcebfbfbfbcfecbcc.set(`${splashp}`, parseInt(`${darkH}`) << (Math.min(2, Math.abs(3))));
         aboutV += `${3 >> (Math.min(Math.abs(parseInt(`${splashp}`)), 5))}`;
         if (nativeexr) {
            break;
         }
      } while (nativeexr && (injuryS));
          let fnewinterstitiala = String.fromCharCode(109,95,51,51,95,99,111,109,112,97,110,121,0);
          let forwardS = String.fromCharCode(122,95,56,55,95,110,101,97,114,0);
          let tempP: Map<any, any> = new Map([[String.fromCharCode(108,95,48,95,121,117,118,112,97,99,107,101,100,0),484], [String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,99,95,53,55,0),760], [String.fromCharCode(114,95,56,51,95,116,101,115,116,105,110,103,0),531]]);
         typesX = [typesX.length >> (Math.min(Math.abs(2), 2))];
         fnewinterstitiala = `${(String.fromCharCode(56,0) == forwardS ? forwardS.length : tempP.size)}`;
         tempP.set(forwardS, forwardS.length);
         typesX.push(((injuryS ? 4 : 2) % (Math.max(arrowupe.length, 9))));
         arrowupe = [typesX.length];
         arrowupe = [typesX.length ^ arrowupe.length];
         typesX = [2];
         injuryS = arrowupe.includes(injuryS);
      let iconfeedback0 = arrowupe.length <= 6517722;
      do {
         arrowupe.push(2);
         if (iconfeedback0) {
            break;
         }
      } while (iconfeedback0 && (1 <= (typesX.length % (Math.max(3, 7))) || (arrowupe.length % 3) <= 3));
      while ((typesX.length | 5) < 3) {
         typesX = [(typesX.length | (injuryS ? 5 : 4))];
         break;
      }
      informationN = `${hooksz.length}`;
   let buttonI = 8856654.0 >= matches4;
   do {
      matches4 -= parseFloat(`${predictionactiveb.length - 3}`);
      if (buttonI) {
         break;
      }
   } while ((2 >= informationN.length) && buttonI);
   if (5 > (parseInt(`${detailsQ}`) / (Math.max(predictionbuttonF.size, 3))) && 5 > (predictionbuttonF.size - 5)) {
       let pingp = false;
       let promotionK = String.fromCharCode(115,99,104,101,109,97,115,95,51,95,50,57,0);
         pingp = !pingp;
          let infof: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,110,117,109,98,105,116,115,0),String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,100,95,49,54,0)], [String.fromCharCode(106,95,56,54,95,118,112,105,116,120,102,109,0),String.fromCharCode(122,95,49,57,95,115,117,98,116,114,97,99,116,101,100,0)], [String.fromCharCode(107,95,56,95,97,105,110,116,0),String.fromCharCode(104,97,115,104,101,114,95,122,95,53,54,0)]]);
          let layoutx: Map<any, any> = new Map([[String.fromCharCode(119,95,55,55,95,120,105,110,103,0),true ], [String.fromCharCode(115,95,51,48,95,114,101,102,101,114,101,110,99,101,100,0),false ]]);
          let with_x79: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,112,101,103,95,118,95,52,52,0),597], [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,107,95,53,49,0),480], [String.fromCharCode(101,95,56,51,95,99,111,110,99,101,97,108,101,100,0),15]]);
         pingp = !promotionK.includes(`${pingp}`);
         infof.set(`${layoutx.size}`, layoutx.size);
         with_x79.set(`${with_x79.size}`, 2 * with_x79.size);
       let subtextn = String.fromCharCode(115,116,97,108,108,95,98,95,51,49,0);
         promotionK += `${((pingp ? 4 : 1) - promotionK.length)}`;
      while (5 < subtextn.length || pingp) {
         subtextn += `${((pingp ? 1 : 5) - 1)}`;
         break;
      }
      if (promotionK.length <= subtextn.length) {
         promotionK += `${(String.fromCharCode(122,0) == subtextn ? promotionK.length : subtextn.length)}`;
      }
      detailsQ -= parseInt(`${detailsQ}`);
   }
   while (libjsiJ == parseFloat(`${predictionbuttonF.size}`)) {
       let foregroundL = 0;
      if ((foregroundL * foregroundL) < 1 && 4 < (1 * foregroundL)) {
         foregroundL += foregroundL >> (Math.min(Math.abs(foregroundL), 2));
      }
         foregroundL %= Math.max(3, foregroundL >> (Math.min(Math.abs(3), 1)));
      while (foregroundL >= foregroundL) {
          let minimizeu: Array<any> = [328, 466, 234];
          let screenW = String.fromCharCode(102,111,114,109,97,110,116,95,108,95,50,48,0);
          let sellV: Array<any> = [550, 294, 144];
          let countdowns = String.fromCharCode(116,95,49,53,95,99,104,117,110,107,101,100,0);
          let rulesD = String.fromCharCode(99,102,116,121,112,101,114,101,102,95,116,95,51,56,0);
         foregroundL &= countdowns.length / (Math.max(3, 5));
         minimizeu = [sellV.length];
         screenW = "3";
         sellV.push(3 ^ screenW.length);
         countdowns = `${3 & screenW.length}`;
         rulesD += "2";
         break;
      }
      libjsiJ *= parseFloat(`${predictionactiveb.length >> (Math.min(Math.abs(3), 2))}`);
      break;
   }
   if (!Array.from(predictionbuttonF.keys()).includes(`${submitF.length}`)) {
       let roundW: Array<any> = [String.fromCharCode(97,118,97,105,108,97,98,108,101,95,120,95,49,48,0), String.fromCharCode(103,95,50,55,95,114,97,100,97,114,0), String.fromCharCode(116,111,112,95,55,95,56,54,0)];
       let feedbackm = String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,53,95,56,50,0);
       let user9 = 1.0;
       let aboutz: Array<any> = [String.fromCharCode(102,95,51,48,95,115,108,111,112,101,0), String.fromCharCode(108,95,57,50,95,116,114,117,115,116,0), String.fromCharCode(115,95,57,56,95,107,108,97,115,115,0)];
       let homee: Array<any> = [563, 459];
      for (let w = 0; w < 1; w++) {
         aboutz = [1];
      }
          let transferL = 4;
          let libswresample2 = String.fromCharCode(108,95,51,56,95,100,105,97,99,114,105,116,105,99,0);
         feedbackm = "3";
         transferL |= libswresample2.length;
         libswresample2 += `${libswresample2.length}`;
      if (2 == (3 ^ homee.length) && 2 == (3 ^ aboutz.length)) {
          let sinaK: Array<any> = [276, 849, 272];
          let bufferp = true;
          let twitterY = String.fromCharCode(116,97,103,95,102,95,52,0);
         aboutz = [3 / (Math.max(parseInt(`${user9}`), 1))];
         sinaK.push(((bufferp ? 2 : 4) % 2));
         bufferp = !bufferp;
         twitterY += `${sinaK.length}`;
      }
      for (let e = 0; e < 2; e++) {
         homee = [homee.length / (Math.max(feedbackm.length, 6))];
      }
      if (homee.length <= 1) {
          let colorsK: Array<any> = [537, 664];
         homee.push(homee.length);
         colorsK.push(colorsK.length & 1);
      }
      for (let j = 0; j < 3; j++) {
          let libreactnativeblob8: Array<any> = [903, 304];
          let assistk = String.fromCharCode(113,95,49,52,95,104,101,97,100,108,105,110,101,0);
          let left0 = 2.0;
          let mbbannery = 0.0;
          let fillx: Map<any, any> = new Map([[String.fromCharCode(114,95,52,53,95,115,117,112,112,114,101,115,115,105,110,103,0),true ], [String.fromCharCode(104,97,112,116,105,99,95,52,95,55,50,0),false ]]);
         roundW = [libreactnativeblob8.length / 2];
         libreactnativeblob8 = [assistk.length];
         assistk = `${(assistk == String.fromCharCode(97,0) ? parseInt(`${left0}`) : assistk.length)}`;
         left0 *= fillx.size;
         mbbannery *= parseFloat(`${parseInt(`${left0}`)}`);
         fillx.set(assistk, fillx.size);
      }
      if (feedbackm.endsWith(`${aboutz.length}`)) {
         aboutz = [3 | aboutz.length];
      }
      while (feedbackm.startsWith(`${aboutz.length}`)) {
         aboutz.push(homee.length / 1);
         break;
      }
         aboutz = [parseInt(`${user9}`) ^ feedbackm.length];
      let corner0 = feedbackm == String.fromCharCode(116,100,100,121,105,52,117,49,50,0);
      do {
          let predictionactiveR = String.fromCharCode(113,95,54,49,95,98,108,105,116,0);
          let arrowupR = false;
         feedbackm += `${roundW.length}`;
         predictionactiveR = `${predictionactiveR.length}`;
         arrowupR = 30 == predictionactiveR.length && 30 == predictionactiveR.length;
         if (corner0) {
            break;
         }
      } while ((!feedbackm.endsWith(`${homee.length}`)) && corner0);
      for (let a = 0; a < 1; a++) {
         homee = [homee.length / 3];
      }
      if (!aboutz.includes(user9)) {
          let auto_mco = String.fromCharCode(115,95,52,56,95,116,111,117,112,112,101,114,0);
          let sansC = 1.0;
          let refreshA = true;
          let resendb = String.fromCharCode(116,114,101,120,95,114,95,55,54,0);
         user9 /= Math.max(parseInt(`${sansC}`) + 2, 1);
         auto_mco += "2";
         sansC -= (parseFloat(`${2 - (refreshA ? 2 : 3)}`));
         resendb = "3";
      }
      while (!feedbackm.includes(`${roundW.length}`)) {
          let downloadO = String.fromCharCode(117,110,99,104,97,110,103,101,100,95,51,95,57,49,0);
          let downarrowC = 3.0;
          let typesO = 0.0;
          let related3 = String.fromCharCode(112,117,98,107,101,121,104,97,115,104,95,120,95,57,52,0);
         feedbackm += `${roundW.length - 2}`;
         downloadO = `${(downloadO == String.fromCharCode(97,0) ? downloadO.length : parseInt(`${downarrowC}`))}`;
         downarrowC -= 2;
         typesO += related3.length;
         related3 += `${parseInt(`${downarrowC}`) ^ 3}`;
         break;
      }
          let dycreatorC = false;
         homee = [feedbackm.length & aboutz.length];
         dycreatorC = !dycreatorC;
      if ((homee.length - aboutz.length) >= 2 && (2 - homee.length) >= 4) {
         aboutz = [homee.length * aboutz.length];
      }
      predictionbuttonF = new Map([[`${submitF.length}`, 2]]);
   }
       let reactnativeultimatelistviewd = String.fromCharCode(103,95,51,48,0);
       let description_03L: Array<any> = [335, 536];
      for (let j = 0; j < 2; j++) {
         description_03L.push(3 % (Math.max(1, reactnativeultimatelistviewd.length)));
      }
         reactnativeultimatelistviewd = `${reactnativeultimatelistviewd.length}`;
      if (4 > (description_03L.length % 2)) {
          let data5: Array<any> = [String.fromCharCode(104,101,97,100,101,114,95,55,95,55,53,0), String.fromCharCode(116,117,112,108,101,95,52,95,51,50,0), String.fromCharCode(112,95,50,56,95,108,105,107,101,0)];
          let selectionU: Array<any> = [963, 231, 64];
          let malaysiap = String.fromCharCode(109,95,54,50,95,97,117,100,105,111,0);
          let iconpointscorey = 3.0;
         reactnativeultimatelistviewd = "2";
         data5 = [3];
         selectionU.push(parseInt(`${iconpointscorey}`) * 1);
         malaysiap = `${(String.fromCharCode(122,0) == malaysiap ? malaysiap.length : selectionU.length)}`;
         iconpointscorey *= malaysiap.length;
      }
         description_03L.push((reactnativeultimatelistviewd == String.fromCharCode(104,0) ? description_03L.length : reactnativeultimatelistviewd.length));
         reactnativeultimatelistviewd += `${description_03L.length + reactnativeultimatelistviewd.length}`;
          let datai = String.fromCharCode(100,99,98,122,95,51,95,54,57,0);
         description_03L.push(datai.length);
      manifesto = `${privilegeG.length}`;
   while ((3 + greenD) < 1) {
       let twitterC: Map<any, any> = new Map([[String.fromCharCode(121,95,55,50,95,105,110,112,117,116,121,0),24], [String.fromCharCode(119,97,118,101,115,121,110,116,104,95,122,95,57,50,0),907], [String.fromCharCode(105,115,108,111,119,95,107,95,55,55,0),271]]);
       let matchV: Array<any> = [642, 545];
       let soundu = String.fromCharCode(117,95,56,54,95,109,115,101,112,115,110,114,0);
       let orangeuparrowm = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,104,95,56,49,0);
      if (orangeuparrowm != soundu) {
         soundu = `${orangeuparrowm.length << (Math.min(2, matchV.length))}`;
      }
       let awayiconh = String.fromCharCode(98,97,122,101,108,95,104,95,50,48,0);
      for (let v = 0; v < 3; v++) {
         matchV.push(soundu.length % 3);
      }
         matchV.push(twitterC.size % (Math.max(7, matchV.length)));
          let footballr = 0.0;
          let mailK = true;
         orangeuparrowm = `${matchV.length}`;
         footballr /= Math.max(2, (parseFloat(`${parseInt(`${footballr}`) - (mailK ? 2 : 3)}`)));
         mailK = footballr >= 27.37;
         awayiconh = `${(String.fromCharCode(110,0) == awayiconh ? awayiconh.length : matchV.length)}`;
         awayiconh += `${(orangeuparrowm == String.fromCharCode(77,0) ? orangeuparrowm.length : twitterC.size)}`;
          let ninit_2U = 4.0;
          let playo: Array<any> = [538, 607];
         orangeuparrowm += `${3 | matchV.length}`;
         ninit_2U /= Math.max(playo.length, 1);
         playo.push(playo.length % 3);
      let dice_ = 8636498 >= soundu.length;
      do {
          let chinasamel: Map<any, any> = new Map([[String.fromCharCode(110,95,57,57,95,101,116,104,101,114,115,99,97,110,0),118], [String.fromCharCode(97,114,101,115,95,102,95,56,53,0),293]]);
         soundu = `${awayiconh.length * 1}`;
         chinasamel.set(`${chinasamel.size}`, chinasamel.size | 1);
         if (dice_) {
            break;
         }
      } while (dice_ && (4 <= (5 & twitterC.size)));
       let iconorientationI = String.fromCharCode(110,95,56,95,115,98,115,112,108,105,116,0);
      while (soundu.length <= orangeuparrowm.length) {
         soundu += `${(String.fromCharCode(68,0) == awayiconh ? awayiconh.length : iconorientationI.length)}`;
         break;
      }
      while (orangeuparrowm == iconorientationI) {
          let gradlev = String.fromCharCode(105,95,57,51,95,112,117,98,108,105,115,104,0);
          let backR: Array<any> = [491, 141, 724];
          let mbridgeU: Array<any> = [String.fromCharCode(116,95,48,95,116,101,115,116,115,0), String.fromCharCode(111,112,101,114,97,116,105,110,103,95,99,95,57,0), String.fromCharCode(105,95,50,54,95,101,110,111,117,103,104,0)];
         iconorientationI = `${(gradlev == String.fromCharCode(103,0) ? gradlev.length : awayiconh.length)}`;
         backR.push(mbridgeU.length << (Math.min(1, backR.length)));
         mbridgeU = [mbridgeU.length << (Math.min(5, backR.length))];
         break;
      }
      greenD |= predictionbuttonF.size;
      break;
   }
      privilegeG += `${1 % (Math.max(5, manifesto.length))}`;

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let awayiconP = 0.0;
    let episodee = String.fromCharCode(116,97,103,103,105,110,103,95,50,95,56,48,0);
    let rocket7 = String.fromCharCode(112,114,111,100,117,99,116,115,95,110,95,51,49,0);
    let sheetH = String.fromCharCode(98,116,114,101,101,95,116,95,50,53,0);
    let saveu = 1;
    let whiteQ = String.fromCharCode(101,115,101,110,100,95,105,95,52,54,0);
    let internetK = String.fromCharCode(118,95,57,51,95,102,101,101,100,0);
    let upgrade4 = 3;
    let libavfilterQ = String.fromCharCode(116,120,116,110,105,100,95,98,95,57,55,0);
    let leakchecker7 = 2;
    let moviesd = String.fromCharCode(117,95,54,57,95,97,117,116,111,99,111,109,109,105,116,0);
    let overs = String.fromCharCode(103,95,51,50,95,99,111,109,109,111,110,0);
    let downloaderA = String.fromCharCode(111,95,53,95,105,110,105,116,105,97,108,0);
    let phoneX = String.fromCharCode(108,105,115,116,115,95,100,95,52,57,0);
    let gradlev = String.fromCharCode(97,118,99,105,110,116,114,97,95,101,95,53,55,0);
      rocket7 += `${internetK.length}`;
   if (!libavfilterQ.endsWith(rocket7)) {
       let currentd = 1.0;
       let reactnavigationF = 0.0;
       let tooltipsj = String.fromCharCode(118,95,50,53,95,115,116,111,114,97,103,101,115,0);
       let libsentry_ = true;
       let phoneF: Array<any> = [8, 429];
      let chartx = tooltipsj == String.fromCharCode(97,122,121,107,119,118,48,107,121,53,0);
      do {
         tooltipsj = "1";
         if (chartx) {
            break;
         }
      } while (chartx && (tooltipsj.startsWith(`${currentd}`)));
         libsentry_ = !libsentry_;
      let statisticss = reactnavigationF >= 5706863.0;
      do {
         reactnavigationF /= Math.max(4, parseFloat(`${1 >> (Math.min(3, tooltipsj.length))}`));
         if (statisticss) {
            break;
         }
      } while (statisticss && ((reactnavigationF * currentd) <= 4.20));
          let whiteanimationlive8 = true;
          let airbnbstarB = String.fromCharCode(108,97,117,110,99,104,101,115,95,116,95,49,53,0);
         reactnavigationF /= Math.max(4, (parseFloat(`${parseInt(`${currentd}`) - (libsentry_ ? 2 : 4)}`)));
         whiteanimationlive8 = !whiteanimationlive8;
         airbnbstarB += `${((whiteanimationlive8 ? 5 : 3) * airbnbstarB.length)}`;
       let textT = String.fromCharCode(99,108,111,117,100,102,108,97,114,101,95,50,95,55,53,0);
          let nodeX: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,112,114,101,99,111,109,112,117,116,101,0),String.fromCharCode(108,111,103,103,105,110,103,95,118,95,51,52,0)], [String.fromCharCode(115,95,49,55,95,114,117,101,0),String.fromCharCode(113,95,56,56,95,113,105,110,100,101,120,0)], [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,54,95,54,54,0),String.fromCharCode(113,95,55,48,95,115,117,112,112,114,101,115,115,0)]]);
         reactnavigationF += parseFloat(`${phoneF.length}`);
         nodeX.set(`${nodeX.size}`, nodeX.size | 2);
      while (textT == tooltipsj) {
         tooltipsj = `${parseInt(`${currentd}`) << (Math.min(3, Math.abs(2)))}`;
         break;
      }
      while (3 == textT.length) {
         libsentry_ = tooltipsj.length < 76 && !libsentry_;
         break;
      }
         tooltipsj += `${tooltipsj.length}`;
      let tempnodatagifG = 5778999.0 >= currentd;
      do {
         currentd -= phoneF.length * 2;
         if (tempnodatagifG) {
            break;
         }
      } while (((currentd + 4.44) >= 2.84 || (2 | textT.length) >= 5) && tempnodatagifG);
      if (2 > (parseInt(`${reactnavigationF}`) - tooltipsj.length)) {
         reactnavigationF -= (parseFloat(`${textT == String.fromCharCode(88,0) ? phoneF.length : textT.length}`));
      }
         phoneF.push(((libsentry_ ? 1 : 5) - phoneF.length));
      for (let h = 0; h < 3; h++) {
          let iconlogout_ = 3.0;
         currentd /= Math.max(3, 2);
         iconlogout_ += parseInt(`${iconlogout_}`) | parseInt(`${iconlogout_}`);
      }
       let temperatureq = String.fromCharCode(116,104,111,117,115,97,110,100,115,95,108,95,55,52,0);
      while (!textT.includes(`${phoneF.length}`)) {
         phoneF.push(((libsentry_ ? 1 : 1) >> (Math.min(Math.abs(1), 5))));
         break;
      }
      rocket7 += `${episodee.length << (Math.min(Math.abs(1), 1))}`;
   }
   let tempnodataV = 6397882.0 >= awayiconP;
   do {
      awayiconP /= Math.max(5, parseFloat(`${parseInt(`${awayiconP}`)}`));
      if (tempnodataV) {
         break;
      }
   } while (tempnodataV && (internetK.length > parseInt(`${awayiconP}`)));
   while (5 <= (saveu >> (Math.min(moviesd.length, 2))) && (5 >> (Math.min(2, Math.abs(saveu)))) <= 4) {
       let nativeexI = String.fromCharCode(100,101,99,111,100,105,110,103,95,49,95,54,48,0);
       let nativemoduled = String.fromCharCode(112,114,111,98,115,95,53,95,50,0);
       let penaltyW = String.fromCharCode(119,104,105,108,101,95,112,95,52,52,0);
      for (let y = 0; y < 2; y++) {
          let filedK = String.fromCharCode(118,95,55,54,95,111,116,111,115,0);
          let libswscaleH = String.fromCharCode(99,100,97,116,101,95,114,95,55,52,0);
          let componentregistryc: Array<any> = [885, 205];
         nativemoduled += "2";
         filedK += `${libswscaleH.length}`;
         libswscaleH = `${componentregistryc.length / (Math.max(5, filedK.length))}`;
         componentregistryc.push(2 & libswscaleH.length);
      }
      while (nativemoduled == penaltyW) {
          let config6 = 5.0;
          let hooksy = 1.0;
          let libavformat8 = String.fromCharCode(99,97,108,99,119,95,99,95,53,53,0);
         penaltyW = `${parseInt(`${hooksy}`) / (Math.max(parseInt(`${config6}`), 5))}`;
         config6 += 2 | libavformat8.length;
         hooksy += libavformat8.length;
         break;
      }
         nativemoduled += `${penaltyW.length << (Math.min(nativemoduled.length, 4))}`;
          let forwardt = 1;
          let u_manager4 = String.fromCharCode(117,95,55,95,105,115,101,120,112,108,97,105,110,0);
         nativemoduled = "1";
         forwardt ^= 3 * u_manager4.length;
         u_manager4 += `${3 ^ u_manager4.length}`;
      for (let f = 0; f < 2; f++) {
          let libfile_ = 2.0;
         nativemoduled += `${nativeexI.length}`;
         libfile_ /= Math.max(parseFloat(`${parseInt(`${libfile_}`)}`), 1);
      }
         nativemoduled += `${penaltyW.length}`;
         penaltyW += `${nativeexI.length}`;
         nativemoduled = "1";
      while (nativemoduled == String.fromCharCode(100,0)) {
         penaltyW += `${nativemoduled.length}`;
         break;
      }
      saveu >>= Math.min(Math.abs(2 | parseInt(`${awayiconP}`)), 5);
      break;
   }
       let iconstar8 = true;
       let reminder0 = String.fromCharCode(109,111,109,101,110,116,95,114,95,52,54,0);
      while (reminder0.length > 5 && iconstar8) {
          let trashv = false;
         iconstar8 = ((reminder0.length * (trashv ? reminder0.length : 73)) == 73);
         break;
      }
      if (reminder0.endsWith(`${iconstar8}`)) {
         reminder0 = `${(reminder0.length << (Math.min(1, Math.abs((iconstar8 ? 4 : 3)))))}`;
      }
          let connectionE = String.fromCharCode(105,110,116,101,114,111,112,95,53,95,52,55,0);
          let matchesG = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,95,109,95,51,0);
         iconstar8 = !iconstar8 && reminder0.length > 45;
         connectionE += `${matchesG.length - connectionE.length}`;
         matchesG += `${connectionE.length}`;
         reminder0 += `${(reminder0.length & (iconstar8 ? 2 : 1))}`;
       let libavutilX: Map<any, any> = new Map([[String.fromCharCode(101,97,116,105,110,103,95,109,95,52,0),714], [String.fromCharCode(119,95,52,56,95,115,99,101,110,101,0),549], [String.fromCharCode(105,110,116,114,97,120,109,98,121,95,100,95,56,0),187]]);
       let libjsinspectorI: Map<any, any> = new Map([[String.fromCharCode(101,95,55,55,95,114,101,103,100,101,102,0),String.fromCharCode(116,109,109,98,114,95,112,95,54,56,0)], [String.fromCharCode(99,111,110,115,116,113,112,95,105,95,54,55,0),String.fromCharCode(97,99,117,116,111,102,102,95,57,95,55,57,0)], [String.fromCharCode(105,95,51,56,95,116,114,97,110,115,102,101,114,0),String.fromCharCode(121,95,55,56,95,121,101,115,110,111,0)]]);
      for (let u = 0; u < 1; u++) {
         libjsinspectorI.set(`${iconstar8}`, libjsinspectorI.size);
      }
      libavfilterQ = `${overs.length}`;
   let libfbI = whiteQ.length >= 6589714;
   do {
      whiteQ += "3";
      if (libfbI) {
         break;
      }
   } while (libfbI && (internetK.length < 2));
   if (upgrade4 > leakchecker7) {
       let phoneshareJ: Array<any> = [252, 955, 234];
       let anner5 = 0.0;
       let libavfilteri = String.fromCharCode(100,95,49,54,95,105,110,116,101,114,108,101,97,118,105,110,103,0);
       let subbasketballplayer2 = String.fromCharCode(113,95,57,52,95,120,99,116,101,115,116,0);
         subbasketballplayer2 += `${parseInt(`${anner5}`)}`;
      for (let c = 0; c < 1; c++) {
          let usernamen = false;
          let eventk: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,101,120,116,95,50,95,50,55,0),String.fromCharCode(105,95,49,56,0)], [String.fromCharCode(119,101,98,118,116,116,95,103,95,52,51,0),String.fromCharCode(115,95,52,50,95,115,109,105,108,101,0)]]);
          let long_ley = 3.0;
          let usernamez = 0.0;
         phoneshareJ.push(3);
         usernamen = (parseFloat(`${eventk.size}`) / (Math.max(8, long_ley))) >= 53.49;
         eventk = new Map([[`${long_ley}`, ((usernamen ? 1 : 2) * parseInt(`${long_ley}`))]]);
         usernamez *= ((usernamen ? 1 : 3) * 1);
      }
          let helperk = false;
          let backwardP = String.fromCharCode(122,95,50,95,109,105,120,101,114,0);
         subbasketballplayer2 = `${((helperk ? 2 : 1) / 1)}`;
         helperk = (backwardP.length | backwardP.length) > 30;
         phoneshareJ.push(2);
         anner5 *= libavfilteri.length;
         anner5 /= Math.max(phoneshareJ.length, 4);
         libavfilteri += `${subbasketballplayer2.length << (Math.min(4, Math.abs(parseInt(`${anner5}`))))}`;
         phoneshareJ.push(1);
      if (3.41 < (libavfilteri.length + anner5) || 4.8 < (anner5 + 3.41)) {
         libavfilteri += `${1 >> (Math.min(3, libavfilteri.length))}`;
      }
         anner5 -= 3 ^ parseInt(`${anner5}`);
      while (2 <= subbasketballplayer2.length) {
         subbasketballplayer2 = `${parseInt(`${anner5}`)}`;
         break;
      }
         phoneshareJ.push(libavfilteri.length);
      upgrade4 /= Math.max(parseInt(`${awayiconP}`), 4);
   }
   if (1.69 >= (awayiconP / 2.46)) {
      awayiconP += parseFloat(`${parseInt(`${awayiconP}`) + overs.length}`);
   }
      awayiconP *= parseFloat(`${2 << (Math.min(5, Math.abs(upgrade4)))}`);
   let combinedq = sheetH.length >= 6196794;
   do {
      sheetH = "3 ^ leakchecker7";
      if (combinedq) {
         break;
      }
   } while (combinedq && (libavfilterQ != String.fromCharCode(118,0)));
   for (let k = 0; k < 1; k++) {
      leakchecker7 *= 3;
   }
   if (libavfilterQ != sheetH) {
      sheetH += `${(whiteQ == String.fromCharCode(105,0) ? whiteQ.length : sheetH.length)}`;
   }
      moviesd += "1";
   if (sheetH != String.fromCharCode(89,0) && rocket7 != String.fromCharCode(65,0)) {
       let tooltipsD = 1;
       let aboutX = false;
          let dropdownB = 3.0;
          let favoritev = String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,50,95,49,0);
         tooltipsD -= 3 + parseInt(`${dropdownB}`);
         dropdownB *= parseFloat(`${favoritev.length}`);
         favoritev = `${favoritev.length}`;
      let downloaderl = tooltipsD >= 7500269;
      do {
         tooltipsD -= tooltipsD * 1;
         if (downloaderl) {
            break;
         }
      } while ((aboutX) && downloaderl);
      if (3 >= (tooltipsD / 4)) {
         tooltipsD <<= Math.min(Math.abs((tooltipsD * (aboutX ? 3 : 5))), 5);
      }
         tooltipsD >>= Math.min(3, parseInt(`${Math.abs((tooltipsD % (Math.max(2, (aboutX ? 2 : 3)))))}`));
      let episodeF = tooltipsD <= 9304087;
      do {
          let reddownarrowW = true;
          let mathG = 4.0;
          let room1: Array<any> = [938, 642, 449];
          let firebasem = 4.0;
          let uimanagerB = 5.0;
         tooltipsD %= Math.max(3, 3);
         reddownarrowW = uimanagerB > 16.81 && 16.81 > firebasem;
         mathG /= Math.max(4, parseInt(`${firebasem}`));
         room1.push(3 << (Math.min(Math.abs(parseInt(`${mathG}`)), 3)));
         uimanagerB /= Math.max(room1.length + 2, 3);
         if (episodeF) {
            break;
         }
      } while (episodeF && (5 >= (tooltipsD ^ 1) || !aboutX));
       let coreG: Map<any, any> = new Map([[String.fromCharCode(107,95,57,53,95,114,101,100,117,99,116,105,111,110,0),296], [String.fromCharCode(98,108,111,99,107,105,101,95,108,95,54,49,0),651], [String.fromCharCode(104,95,56,54,95,112,97,114,105,116,121,0),32]]);
      sheetH = `${saveu}`;
   }
      sheetH += `${upgrade4}`;
   for (let j = 0; j < 3; j++) {
      awayiconP += parseFloat(`${1 << (Math.min(4, overs.length))}`);
   }
       let kickr = 1;
      if ((kickr & 3) > 3) {
         kickr &= kickr * 2;
      }
      let suggestion2 = kickr <= 7099875;
      do {
         kickr ^= kickr % (Math.max(3, 6));
         if (suggestion2) {
            break;
         }
      } while (((kickr & 1) < 1 || (kickr & kickr) < 1) && suggestion2);
      let penaltyshootu = 6002097 <= kickr;
      do {
         kickr >>= Math.min(1, Math.abs(kickr << (Math.min(1, Math.abs(kickr)))));
         if (penaltyshootu) {
            break;
         }
      } while (penaltyshootu && (5 < (kickr >> (Math.min(Math.abs(3), 1)))));
      rocket7 = `${episodee.length}`;
       let project8: Array<any> = [900, 933];
      if (3 == (2 >> (Math.min(3, project8.length)))) {
         project8.push(2);
      }
         project8.push(3 << (Math.min(4, project8.length)));
      if (3 == project8.length) {
         project8 = [1];
      }
      internetK = `${project8.length}`;
      sheetH = `${(whiteQ == String.fromCharCode(98,0) ? whiteQ.length : upgrade4)}`;
      rocket7 = `${2 ^ libavfilterQ.length}`;
      overs = `${3 - libavfilterQ.length}`;
       let blacklistQ = String.fromCharCode(99,111,118,101,114,95,98,95,54,51,0);
       let spinners = true;
       let elementsA: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,104,95,55,56,0),583], [String.fromCharCode(111,95,54,51,95,108,101,114,112,105,110,103,0),974], [String.fromCharCode(98,95,51,53,95,109,97,103,101,110,116,97,0),794]]);
      for (let e = 0; e < 2; e++) {
         blacklistQ += `${(2 ^ (spinners ? 3 : 5))}`;
      }
         elementsA = new Map([[`${elementsA.size}`, 2]]);
          let topicu: Map<any, any> = new Map([[String.fromCharCode(109,95,49,95,115,101,108,101,99,116,105,111,110,0),325], [String.fromCharCode(102,95,50,51,95,100,101,115,99,114,105,112,116,105,111,110,0),453], [String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,121,95,49,50,0),866]]);
          let emojiheartN = String.fromCharCode(114,95,50,51,95,112,97,114,116,105,99,108,101,0);
          let renderc = String.fromCharCode(121,95,50,56,95,115,117,105,116,101,0);
         spinners = 48 < renderc.length;
         topicu = new Map([[`${topicu.size}`, emojiheartN.length + topicu.size]]);
         emojiheartN += `${3 ^ topicu.size}`;
         renderc += `${emojiheartN.length}`;
         spinners = (((!spinners ? elementsA.size : 5) * elementsA.size) <= 61);
       let cornershootI = String.fromCharCode(108,95,51,50,95,109,105,112,115,102,112,117,0);
       let modeY = String.fromCharCode(120,95,53,56,95,112,111,114,116,0);
         spinners = 48 == elementsA.size;
         spinners = 84 >= cornershootI.length;
          let miniK = 3.0;
         spinners = !spinners;
         miniK += parseFloat(`${parseInt(`${miniK}`) ^ 1}`);
          let graphicsL: Map<any, any> = new Map([[String.fromCharCode(102,95,54,49,95,114,101,103,101,110,101,114,97,116,101,0),String.fromCharCode(103,114,97,99,101,95,100,95,57,52,0)], [String.fromCharCode(100,105,115,112,108,97,121,101,100,95,120,95,57,50,0),String.fromCharCode(115,116,101,112,95,122,95,55,0)], [String.fromCharCode(107,95,56,55,95,97,100,100,98,108,107,0),String.fromCharCode(105,104,100,114,95,99,95,57,52,0)]]);
         cornershootI = `${blacklistQ.length >> (Math.min(1, cornershootI.length))}`;
         graphicsL.set(`${graphicsL.size}`, graphicsL.size);
      whiteQ += `${((spinners ? 1 : 4))}`;
   while (overs.length > rocket7.length) {
       let sheetV = String.fromCharCode(101,109,111,116,105,99,111,110,95,99,95,53,56,0);
       let encryptM = true;
          let logout3 = true;
          let cricketz = 1.0;
         encryptM = 21.49 > cricketz;
         logout3 = !logout3 && !logout3;
         cricketz += ((logout3 ? 4 : 2));
       let streamingq = 1.0;
       let rewardvideo7 = 4.0;
          let options4 = 1;
         streamingq *= sheetV.length % (Math.max(1, 2));
         options4 |= 1 / (Math.max(1, options4));
      while (!encryptM) {
         rewardvideo7 *= 3 << (Math.min(5, Math.abs(parseInt(`${streamingq}`))));
         break;
      }
      for (let u = 0; u < 2; u++) {
         rewardvideo7 += (sheetV.length ^ (encryptM ? 2 : 5));
      }
          let iconeditR = 4;
          let homeactiveG = String.fromCharCode(111,112,116,105,109,97,108,95,107,95,51,52,0);
          let fastu = 3;
         rewardvideo7 *= 3;
         iconeditR <<= Math.min(Math.abs(fastu - homeactiveG.length), 3);
         homeactiveG += `${homeactiveG.length >> (Math.min(Math.abs(1), 3))}`;
         fastu >>= Math.min(1, Math.abs(homeactiveG.length << (Math.min(Math.abs(3), 4))));
      overs = `${((encryptM ? 3 : 3))}`;
      break;
   }
   for (let o = 0; o < 1; o++) {
      upgrade4 *= 1;
   }
      whiteQ = "2";
      awayiconP += parseFloat(`${3 % (Math.max(6, saveu))}`);
       let backwhiteM = false;
      while (backwhiteM) {
         backwhiteM = !backwhiteM;
         break;
      }
      while (backwhiteM) {
         backwhiteM = (backwhiteM ? !backwhiteM : backwhiteM);
         break;
      }
       let libglog4 = String.fromCharCode(122,95,53,48,95,115,121,115,116,101,109,0);
       let trashi = String.fromCharCode(97,108,108,111,99,122,95,54,95,49,54,0);
      upgrade4 >>= Math.min(4, Math.abs((String.fromCharCode(113,0) == sheetH ? saveu : sheetH.length)));
      episodee += `${(String.fromCharCode(57,0) == downloaderA ? downloaderA.length : leakchecker7)}`;

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const navigator = useNavigation();
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (!settingsReducer.isOffline) {
        setIsOffline(settingsReducer.isOffline);
      } else {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const guestLoginInit = async () => {
       let eabafadfadddbafeddddeeefeaafD = 2.0;
    let iconclosewhitet = 1.0;
    let securityJ = String.fromCharCode(107,95,53,55,95,100,111,119,110,108,111,97,100,0);
    let homeplayerC = String.fromCharCode(112,95,52,48,95,101,120,97,110,100,101,100,0);
    let sorts = 0.0;
    let bgvipsport0 = 4;
    let robotoz = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,95,114,95,54,56,0);
    let sharedS = true;
    let gifgoalk = String.fromCharCode(102,95,56,48,95,114,101,102,99,111,117,110,116,0);
    let policyq = 5.0;
    let icontransferclubD = String.fromCharCode(113,95,51,55,95,114,101,108,97,121,0);
    let phonex = 5.0;
    let defaultteam2 = String.fromCharCode(100,108,116,97,95,103,95,54,52,0);
    let transfer0 = 4.0;
      sharedS = eabafadfadddbafeddddeeefeaafD >= iconclosewhitet;
       let reward6 = true;
       let progress4: Array<any> = [78, 69, 769];
      for (let n = 0; n < 1; n++) {
          let detailb = String.fromCharCode(120,95,53,53,95,102,97,118,111,114,105,116,101,0);
          let libfbX: Array<any> = [477, 977, 664];
         progress4.push(detailb.length);
         detailb += `${libfbX.length / (Math.max(6, libfbX.length))}`;
      }
         reward6 = progress4.length < 65 || reward6;
          let mountingl = 1.0;
          let ranko = String.fromCharCode(118,95,49,57,95,102,105,116,122,0);
          let exampleimage9 = 5;
         reward6 = !reward6 && 93 >= exampleimage9;
         mountingl -= ranko.length;
         ranko = `${ranko.length}`;
         exampleimage9 >>= Math.min(Math.abs(ranko.length * 3), 2);
         progress4 = [3];
      if (progress4.length > 3) {
          let pressureJ = 0;
          let malaysiaX = false;
          let soundF = 3.0;
          let icondefaultthumbnails = String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,119,95,57,56,0);
         reward6 = progress4.length < 77;
         pressureJ >>= Math.min(Math.abs(2 | pressureJ), 3);
         malaysiaX = soundF <= 14.92 || 63 <= icondefaultthumbnails.length;
         soundF -= icondefaultthumbnails.length - 2;
      }
       let update_uC = 3;
      eabafadfadddbafeddddeeefeaafD /= Math.max(2, parseFloat(`${parseInt(`${policyq}`) + robotoz.length}`));
      securityJ += `${3 >> (Math.min(5, homeplayerC.length))}`;
      robotoz += `${parseInt(`${phonex}`) - robotoz.length}`;
   for (let d = 0; d < 1; d++) {
      sharedS = gifgoalk.startsWith(`${bgvipsport0}`);
   }
      robotoz = `${2 - parseInt(`${iconclosewhitet}`)}`;
       let libavdevicel = true;
       let relatedK = false;
      let tempnodatagifX = libavdevicel ? !libavdevicel : libavdevicel;
      do {
         libavdevicel = relatedK || libavdevicel;
         if (tempnodatagifX) {
            break;
         }
      } while (tempnodatagifX && (!libavdevicel || relatedK));
         relatedK = !libavdevicel;
      for (let u = 0; u < 1; u++) {
         relatedK = !relatedK && !libavdevicel;
      }
      if (relatedK || libavdevicel) {
         libavdevicel = !relatedK || libavdevicel;
      }
       let handler_ = 2.0;
       let teamdetailsbga = 5.0;
         relatedK = 6.72 <= handler_;
      homeplayerC = `${securityJ.length * 3}`;
   if ((parseFloat(`${bgvipsport0}`) * phonex) < 4.90 && (4.90 * phonex) < 3.60) {
      bgvipsport0 >>= Math.min(3, Math.abs((String.fromCharCode(111,0) == securityJ ? parseInt(`${iconclosewhitet}`) : securityJ.length)));
   }
   let iconwatchnowM = gifgoalk.length <= 9100380;
   do {
       let libjsiL = 5.0;
       let encryptJ = 4.0;
       let stepo: Map<any, any> = new Map([[String.fromCharCode(112,105,110,99,104,95,50,95,56,50,0),914], [String.fromCharCode(97,112,112,101,110,100,95,55,95,55,49,0),16], [String.fromCharCode(115,95,50,54,95,100,101,99,108,105,110,101,100,0),847]]);
       let chinaf: Map<any, any> = new Map([[String.fromCharCode(116,95,54,48,95,101,110,100,112,111,105,110,116,0),879], [String.fromCharCode(113,117,111,116,97,95,56,95,53,51,0),145]]);
         encryptJ *= parseInt(`${libjsiL}`) % 3;
          let classesI = 3.0;
          let acceptedY: Array<any> = [765, 705, 369];
          let shootL = 5;
         chinaf.set(`${classesI}`, stepo.size);
         classesI += shootL;
         acceptedY = [shootL ^ 2];
      while (5.12 < (encryptJ / (Math.max(stepo.size, 1))) && (stepo.size % (Math.max(4, 6))) < 5) {
         stepo.set(`${encryptJ}`, 1 ^ parseInt(`${libjsiL}`));
         break;
      }
          let enewarchdefaultsJ = 3.0;
         libjsiL -= parseFloat(`${parseInt(`${encryptJ}`)}`);
         enewarchdefaultsJ += parseFloat(`${parseInt(`${enewarchdefaultsJ}`)}`);
         libjsiL /= Math.max(parseFloat(`${2}`), 2);
          let close3: Map<any, any> = new Map([[String.fromCharCode(110,111,99,104,101,99,107,95,115,95,52,54,0),361], [String.fromCharCode(98,95,53,55,95,100,105,116,97,98,108,101,0),776], [String.fromCharCode(111,95,52,51,95,109,109,105,117,116,105,108,115,0),335]]);
         stepo = new Map([[`${close3.size}`, chinaf.size & 3]]);
       let const_m8 = String.fromCharCode(113,95,56,95,110,111,115,105,109,100,0);
       let mbridgeW = String.fromCharCode(108,95,56,56,0);
       let with_fmn = 3.0;
       let iconnotificationnewx = 5.0;
      while (const_m8.length == stepo.size) {
         const_m8 = `${parseInt(`${encryptJ}`)}`;
         break;
      }
      if ((encryptJ + 2.19) <= 2.35) {
         encryptJ /= Math.max(5, 1 ^ parseInt(`${libjsiL}`));
      }
         const_m8 = `${(const_m8 == String.fromCharCode(85,0) ? stepo.size : const_m8.length)}`;
         iconnotificationnewx /= Math.max(parseFloat(`${mbridgeW.length << (Math.min(Math.abs(3), 1))}`), 1);
      gifgoalk = "1";
      if (iconwatchnowM) {
         break;
      }
   } while (iconwatchnowM && (1 < bgvipsport0));
       let mergerN = String.fromCharCode(104,95,52,57,95,112,114,101,118,105,101,119,115,0);
         mergerN += `${mergerN.length << (Math.min(1, mergerN.length))}`;
       let chartO = false;
       let mailr = true;
      while (!chartO) {
         chartO = !mergerN.startsWith(`${mailr}`);
         break;
      }
      defaultteam2 += `${parseInt(`${iconclosewhitet}`) % 3}`;
      policyq += parseInt(`${phonex}`);
   let encryptc = policyq <= 9655271.0;
   do {
       let redirectr: Array<any> = [String.fromCharCode(109,97,99,104,105,110,101,95,101,95,56,56,0), String.fromCharCode(97,110,103,108,101,100,95,49,95,55,54,0), String.fromCharCode(112,105,99,107,105,110,103,95,56,95,56,57,0)];
       let videojsU = String.fromCharCode(103,95,55,49,95,104,113,100,115,112,0);
       let turno = 1;
       let bing1: Array<any> = [179, 655, 753];
          let yingD: Map<any, any> = new Map([[String.fromCharCode(97,116,99,104,95,57,95,55,55,0),193], [String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,56,95,55,57,0),846]]);
          let historyR = String.fromCharCode(113,95,50,56,95,115,121,110,99,109,97,114,107,101,114,0);
          let ajaxG: Array<any> = [228, 98, 453];
         redirectr.push(yingD.size ^ redirectr.length);
         yingD = new Map([[`${ajaxG.length}`, 2]]);
         historyR += `${historyR.length % 3}`;
         ajaxG.push(ajaxG.length | historyR.length);
      let with_ybp = 7543851 <= bing1.length;
      do {
          let iconshareQ = 5;
          let owngoal6 = 4;
          let loadingE: Map<any, any> = new Map([[String.fromCharCode(98,95,52,49,95,118,105,101,119,0),String.fromCharCode(117,95,51,49,95,115,105,103,110,108,101,0)], [String.fromCharCode(104,114,97,109,95,53,95,56,54,0),String.fromCharCode(116,95,54,55,95,116,114,97,110,115,102,111,114,109,115,0)]]);
          let whitevideolive3 = 3.0;
          let logoo: Array<any> = [String.fromCharCode(112,95,53,49,95,104,105,103,104,101,114,0), String.fromCharCode(115,117,98,113,117,101,114,121,95,114,95,55,49,0), String.fromCharCode(100,99,97,100,101,99,95,53,95,56,56,0)];
         bing1.push(1 & bing1.length);
         iconshareQ &= owngoal6 / (Math.max(1, iconshareQ));
         owngoal6 -= parseInt(`${whitevideolive3}`);
         loadingE.set(`${iconshareQ}`, iconshareQ | owngoal6);
         whitevideolive3 += parseFloat(`${logoo.length ^ 1}`);
         logoo.push(parseInt(`${whitevideolive3}`) - 1);
         if (with_ybp) {
            break;
         }
      } while (with_ybp && ((bing1.length * redirectr.length) <= 2));
      if (1 <= (2 % (Math.max(3, videojsU.length))) && (bing1.length % 2) <= 1) {
          let becomeW: Array<any> = [871, 754];
          let attributedstringI = 5.0;
          let spinnert = String.fromCharCode(115,111,99,107,101,116,118,97,114,95,53,95,50,52,0);
          let condensedo = 3;
         bing1 = [becomeW.length % 3];
         becomeW = [spinnert.length - 1];
         attributedstringI /= Math.max(3, 2);
         spinnert = `${condensedo | parseInt(`${attributedstringI}`)}`;
         condensedo += condensedo % (Math.max(spinnert.length, 10));
      }
          let runtimeschedulerC = 1.0;
          let statisticss = String.fromCharCode(112,95,55,55,95,101,120,101,99,0);
          let template_0J = String.fromCharCode(112,97,115,116,101,100,95,48,95,51,55,0);
         bing1 = [template_0J.length - parseInt(`${runtimeschedulerC}`)];
         runtimeschedulerC += parseFloat(`${statisticss.length}`);
         statisticss += "2";
      for (let e = 0; e < 3; e++) {
          let homeE = String.fromCharCode(105,109,112,111,114,116,95,122,95,51,49,0);
          let langkeyb = 3.0;
          let fieldE = false;
          let footballfiledlayoutw = String.fromCharCode(102,95,49,50,95,116,105,109,105,110,103,115,0);
         videojsU += `${redirectr.length * 3}`;
         homeE = `${homeE.length}`;
         langkeyb /= Math.max((footballfiledlayoutw == String.fromCharCode(72,0) ? footballfiledlayoutw.length : homeE.length), 4);
         fieldE = 72 < footballfiledlayoutw.length && 15.97 < langkeyb;
      }
         turno %= Math.max(1, redirectr.length);
      if ((turno << (Math.min(redirectr.length, 1))) < 5) {
         turno <<= Math.min(Math.abs(2 | turno), 2);
      }
      if (videojsU.includes(`${turno}`)) {
          let logoutW = 1.0;
          let mutedH = 4;
          let footballtrophy6: Map<any, any> = new Map([[String.fromCharCode(108,95,50,53,95,98,106,101,99,116,0),String.fromCharCode(100,114,105,118,101,95,113,95,53,56,0)], [String.fromCharCode(98,95,56,53,95,114,116,99,100,0),String.fromCharCode(101,114,114,111,114,115,95,48,95,51,56,0)], [String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,109,95,51,57,0),String.fromCharCode(116,104,105,99,107,110,101,115,115,95,117,95,49,54,0)]]);
          let commentP = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,107,95,53,53,0);
         turno <<= Math.min(Math.abs(parseInt(`${logoutW}`) ^ 2), 2);
         logoutW *= (String.fromCharCode(112,0) == commentP ? commentP.length : mutedH);
         mutedH <<= Math.min(4, Math.abs(3 & commentP.length));
         footballtrophy6.set(`${commentP}`, 2 + commentP.length);
      }
         redirectr = [1];
      for (let x = 0; x < 3; x++) {
          let unselectedb = 0.0;
          let airbnbstarD = 5.0;
          let homeactiveX = String.fromCharCode(114,102,99,116,95,113,95,50,55,0);
          let formn = false;
          let logouserL = String.fromCharCode(109,95,57,52,95,100,97,115,104,98,111,97,114,100,0);
         videojsU += `${videojsU.length}`;
         unselectedb -= parseFloat(`${1}`);
         airbnbstarD /= Math.max(3, 3);
         homeactiveX += `${logouserL.length - parseInt(`${unselectedb}`)}`;
         formn = unselectedb == 86.24 && String.fromCharCode(82,0) == homeactiveX;
         logouserL = `${((formn ? 5 : 1))}`;
      }
         videojsU += `${bing1.length * 3}`;
      let libapminsightaa = 7429261 >= videojsU.length;
      do {
         videojsU = `${turno ^ 2}`;
         if (libapminsightaa) {
            break;
         }
      } while (libapminsightaa && (3 >= (5 | videojsU.length) || 5 >= (videojsU.length | redirectr.length)));
      policyq /= Math.max(robotoz.length, 5);
      if (encryptc) {
         break;
      }
   } while (encryptc && (defaultteam2.endsWith(`${policyq}`)));
      bgvipsport0 /= Math.max(4, gifgoalk.length ^ parseInt(`${iconclosewhitet}`));
   for (let o = 0; o < 1; o++) {
      robotoz = `${((sharedS ? 2 : 2) >> (Math.min(Math.abs(3), 1)))}`;
   }
      policyq /= Math.max(1, robotoz.length);

    const user = await mayi_Injury.guestLogin();

   let pointS = 6698235.0 <= eabafadfadddbafeddddeeefeaafD;
   do {
       let libtobj = 5;
       let iconsaveimagel: Map<any, any> = new Map([[String.fromCharCode(117,95,55,95,112,114,101,115,115,101,115,0),121], [String.fromCharCode(114,105,103,104,116,115,95,112,95,52,51,0),860]]);
       let injuryB = 3.0;
       let unselectedI: Array<any> = [511, 658, 332];
          let customA = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,115,95,121,95,57,57,0);
          let textg = String.fromCharCode(99,117,116,111,102,102,95,98,95,51,56,0);
         libtobj ^= iconsaveimagel.size;
         customA = `${textg.length + customA.length}`;
         textg += "1";
      let expandC = iconsaveimagel.size >= 6951892;
      do {
         iconsaveimagel = new Map([[`${iconsaveimagel.size}`, libtobj % 1]]);
         if (expandC) {
            break;
         }
      } while ((4.43 >= (iconsaveimagel.size + injuryB)) && expandC);
      if (!Array.from(iconsaveimagel.values()).includes(injuryB)) {
         iconsaveimagel = new Map([[`${iconsaveimagel.size}`, iconsaveimagel.size | 1]]);
      }
       let xvodR: Array<any> = [911, 953];
      let yellowtored5 = 7937760.0 <= injuryB;
      do {
         injuryB -= parseInt(`${injuryB}`);
         if (yellowtored5) {
            break;
         }
      } while ((5 <= (2 ^ libtobj) && 4 <= (2 / (Math.max(5, libtobj)))) && yellowtored5);
         xvodR = [unselectedI.length];
         unselectedI.push(iconsaveimagel.size / 1);
         injuryB -= 3 >> (Math.min(1, xvodR.length));
         injuryB *= iconsaveimagel.size | 2;
         iconsaveimagel.set(`${libtobj}`, libtobj);
          let chinaH: Array<any> = [974, 615, 613];
          let detailx = String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,54,95,56,0);
          let googleG = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,115,95,52,50,0);
         iconsaveimagel.set(`${injuryB}`, 3);
         chinaH = [detailx.length];
         detailx = "3";
         googleG += `${(detailx == String.fromCharCode(79,0) ? chinaH.length : detailx.length)}`;
      let logouserO = libtobj <= 7726549;
      do {
         libtobj %= Math.max(3, 2);
         if (logouserO) {
            break;
         }
      } while ((4.28 <= (libtobj / (Math.max(10, injuryB)))) && logouserO);
      eabafadfadddbafeddddeeefeaafD += parseFloat(`${parseInt(`${phonex}`)}`);
      if (pointS) {
         break;
      }
   } while (pointS && ((3.35 + eabafadfadddbafeddddeeefeaafD) <= 1.96 || (securityJ.length + 1) <= 4));
   let colorsJ = String.fromCharCode(122,50,117,100,57,0) == homeplayerC;
   do {
       let statsnomoredatat = true;
       let libfbw = 5.0;
       let footballfieldX = String.fromCharCode(102,95,52,95,102,97,116,97,108,0);
         footballfieldX = `${parseInt(`${libfbw}`) | footballfieldX.length}`;
      let libnmsf = statsnomoredatat ? !statsnomoredatat : statsnomoredatat;
      do {
         statsnomoredatat = footballfieldX.includes(`${libfbw}`);
         if (libnmsf) {
            break;
         }
      } while (((4.32 + libfbw) < 1.95) && libnmsf);
      while ((parseInt(`${libfbw}`) / (Math.max(footballfieldX.length, 9))) > 5) {
          let philippinesF: Array<any> = [927, 235];
          let reactL = 2.0;
          let fastforward4: Map<any, any> = new Map([[String.fromCharCode(120,109,117,108,116,105,112,108,101,95,122,95,57,55,0),78], [String.fromCharCode(98,108,97,99,107,111,117,116,95,119,95,52,56,0),674]]);
          let descF = 2.0;
          let questA = 5.0;
         libfbw *= (parseFloat(`${String.fromCharCode(78,0) == footballfieldX ? footballfieldX.length : (statsnomoredatat ? 2 : 1)}`));
         philippinesF = [1];
         reactL += 2;
         fastforward4 = new Map([[`${descF}`, parseInt(`${reactL}`) << (Math.min(4, Math.abs(parseInt(`${descF}`))))]]);
         questA += 1 * parseInt(`${reactL}`);
         break;
      }
      let navigationu = statsnomoredatat ? !statsnomoredatat : statsnomoredatat;
      do {
         statsnomoredatat = libfbw < 87.91;
         if (navigationu) {
            break;
         }
      } while (((libfbw - 1.61) < 2.48 || libfbw < 1.61) && navigationu);
          let watchs = false;
          let minimizee = 2.0;
         statsnomoredatat = !statsnomoredatat;
         watchs = !watchs && 24.76 <= minimizee;
         minimizee += (parseInt(`${minimizee}`) << (Math.min(1, Math.abs((watchs ? 1 : 5)))));
      while ((parseInt(`${libfbw}`) * footballfieldX.length) <= 2) {
         libfbw /= Math.max(4, parseFloat(`${footballfieldX.length}`));
         break;
      }
      let expired6 = 8561006.0 >= libfbw;
      do {
          let gifgoalL = String.fromCharCode(110,95,57,53,95,117,110,102,111,99,117,115,101,100,0);
          let favicon5: Array<any> = [String.fromCharCode(102,95,50,52,95,115,104,117,116,100,111,119,110,0), String.fromCharCode(104,95,50,54,95,100,101,108,105,118,101,114,0), String.fromCharCode(97,118,97,116,97,114,115,95,120,95,52,53,0)];
          let defaultroombgH = true;
         libfbw += parseFloat(`${favicon5.length}`);
         gifgoalL = "3";
         favicon5 = [2];
         if (expired6) {
            break;
         }
      } while (expired6 && (1.23 == (libfbw - 5.41) && statsnomoredatat));
          let goalP: Map<any, any> = new Map([[String.fromCharCode(111,95,57,48,95,107,101,121,101,100,0),179], [String.fromCharCode(99,109,97,107,101,95,100,95,56,0),784]]);
          let profilepicW = 2;
         libfbw *= (parseFloat(`${(statsnomoredatat ? 2 : 2) + profilepicW}`));
         goalP = new Map([[`${goalP.size}`, goalP.size >> (Math.min(2, Math.abs(goalP.size)))]]);
         profilepicW &= 3;
          let register_hdj = String.fromCharCode(101,95,54,51,95,117,110,97,115,115,105,103,110,101,100,0);
         footballfieldX += `${(register_hdj == String.fromCharCode(110,0) ? parseInt(`${libfbw}`) : register_hdj.length)}`;
      homeplayerC += `${parseInt(`${phonex}`)}`;
      if (colorsJ) {
         break;
      }
   } while ((!homeplayerC.startsWith(`${icontransferclubD.length}`)) && colorsJ);
   for (let f = 0; f < 3; f++) {
       let switch__u: Map<any, any> = new Map([[String.fromCharCode(102,95,52,51,95,97,116,116,114,97,99,116,105,111,110,0),418], [String.fromCharCode(110,101,101,100,95,109,95,51,52,0),788], [String.fromCharCode(105,95,56,54,95,108,111,103,105,115,116,105,99,0),884]]);
       let upgradec = String.fromCharCode(113,95,57,55,95,99,114,101,97,116,111,114,115,0);
       let codegenA = String.fromCharCode(114,101,97,108,105,102,121,95,110,95,52,51,0);
       let mathU = 0;
          let settingJ = true;
          let sort4 = String.fromCharCode(107,101,121,99,104,97,105,110,95,115,95,51,57,0);
          let video3 = 3.0;
         codegenA = `${switch__u.size}`;
         settingJ = !settingJ;
         sort4 += `${parseInt(`${video3}`)}`;
         video3 /= Math.max(2, sort4.length >> (Math.min(Math.abs(2), 4)));
         switch__u.set(`${mathU}`, 2);
         switch__u = new Map([[codegenA, upgradec.length]]);
      let libfilec = switch__u.size >= 6562535;
      do {
         switch__u = new Map([[`${switch__u.size}`, 1 | upgradec.length]]);
         if (libfilec) {
            break;
         }
      } while (libfilec && ((switch__u.size ^ upgradec.length) <= 2));
       let analyticR: Array<any> = [318, 90];
       let inviter: Array<any> = [445, 248];
      let profileq = String.fromCharCode(51,115,97,51,111,49,0) == codegenA;
      do {
         codegenA = `${analyticR.length % 1}`;
         if (profileq) {
            break;
         }
      } while (profileq && ((codegenA.length & analyticR.length) <= 1));
         codegenA += `${analyticR.length}`;
         analyticR.push(upgradec.length ^ 3);
      for (let t = 0; t < 1; t++) {
         mathU &= 3;
      }
      if (4 > codegenA.length) {
         upgradec += "3";
      }
      while (3 >= (2 >> (Math.min(5, Math.abs(mathU)))) && 3 >= (2 >> (Math.min(4, Math.abs(mathU))))) {
          let vipsportZ = 4.0;
         mathU >>= Math.min(4, codegenA.length);
         vipsportZ += 1 << (Math.min(Math.abs(parseInt(`${vipsportZ}`)), 5));
         break;
      }
      for (let w = 0; w < 1; w++) {
          let edity = false;
          let brightnessz = 2.0;
          let club0 = String.fromCharCode(108,105,98,95,106,95,50,57,0);
          let awayteamfield0 = String.fromCharCode(97,99,99,101,115,115,111,114,115,95,111,95,54,52,0);
         switch__u = new Map([[`${analyticR.length}`, club0.length * analyticR.length]]);
         edity = 42.58 >= brightnessz;
         brightnessz -= parseFloat(`${parseInt(`${brightnessz}`) - 2}`);
         club0 += `${2 & parseInt(`${brightnessz}`)}`;
         awayteamfield0 = `${awayteamfield0.length}`;
      }
      securityJ += "3";
   }
   while (!defaultteam2.includes(`${phonex}`)) {
      phonex *= (parseFloat(`${String.fromCharCode(56,0) == robotoz ? securityJ.length : robotoz.length}`));
      break;
   }
   let private_ls7 = gifgoalk == String.fromCharCode(118,53,98,115,122,102,112,101,0);
   do {
      gifgoalk += "3";
      if (private_ls7) {
         break;
      }
   } while ((gifgoalk.endsWith(`${bgvipsport0}`)) && private_ls7);
       let animationY: Map<any, any> = new Map([[String.fromCharCode(103,95,50,54,95,100,105,103,101,115,116,0),820], [String.fromCharCode(114,95,55,52,95,101,120,99,101,101,100,115,0),914]]);
         animationY.set(`${animationY.size}`, animationY.size | 3);
      for (let a = 0; a < 3; a++) {
         animationY = new Map([[`${animationY.size}`, animationY.size]]);
      }
         animationY = new Map([[`${animationY.size}`, animationY.size]]);
      securityJ += `${animationY.size}`;
   if (2 > robotoz.length) {
       let dataF: Map<any, any> = new Map([[String.fromCharCode(97,95,52,57,0),false ], [String.fromCharCode(115,95,55,54,95,105,110,116,101,114,118,97,108,0),false ], [String.fromCharCode(107,95,51,56,95,102,97,110,111,117,116,0),true ]]);
       let componentregistryK = 4.0;
      if (!Array.from(dataF.values()).includes(componentregistryK)) {
         componentregistryK -= parseFloat(`${2}`);
      }
      if (3.36 > (componentregistryK + 1.20) || (1.20 + componentregistryK) > 2.36) {
         componentregistryK += parseFloat(`${parseInt(`${componentregistryK}`)}`);
      }
      if ((componentregistryK * 5.38) < 2.85) {
         componentregistryK += parseFloat(`${2}`);
      }
      while (1 < (dataF.size - 1) || 1 < (dataF.size + parseInt(`${componentregistryK}`))) {
          let downarrowD = String.fromCharCode(118,95,54,54,95,99,108,97,115,115,110,97,109,101,0);
          let q_lockh: Array<any> = [240, 630];
          let basketballiconx: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,116,121,95,108,95,55,0),778], [String.fromCharCode(116,111,115,115,95,48,95,56,48,0),284]]);
          let stringq = String.fromCharCode(98,95,56,56,95,115,116,101,112,112,101,100,0);
          let static_j4: Array<any> = [487, 608, 30];
         dataF.set(`${basketballiconx.size}`, basketballiconx.size);
         downarrowD += `${downarrowD.length >> (Math.min(Math.abs(3), 1))}`;
         q_lockh.push(downarrowD.length);
         stringq = `${downarrowD.length}`;
         static_j4 = [static_j4.length];
         break;
      }
      while (dataF.size <= 1) {
          let strY = false;
         componentregistryK += parseFloat(`${parseInt(`${componentregistryK}`) & 3}`);
         strY = (!strY ? strY : strY);
         break;
      }
      let awayteamfieldj = 8070600.0 >= componentregistryK;
      do {
         componentregistryK *= parseFloat(`${parseInt(`${componentregistryK}`) % 3}`);
         if (awayteamfieldj) {
            break;
         }
      } while ((3.32 == (componentregistryK / 2.66) && (componentregistryK / 2.66) == 5.79) && awayteamfieldj);
      defaultteam2 = `${parseInt(`${policyq}`)}`;
   }
      robotoz += `${3 * icontransferclubD.length}`;
       let icon8 = 5.0;
       let closeT = 4.0;
       let shootyesgoalU = String.fromCharCode(115,101,116,116,101,114,95,109,95,54,52,0);
      let backiconZ = 8387136.0 <= icon8;
      do {
         icon8 += 2;
         if (backiconZ) {
            break;
         }
      } while ((shootyesgoalU.length < icon8) && backiconZ);
         closeT += (parseFloat(`${String.fromCharCode(110,0) == shootyesgoalU ? shootyesgoalU.length : parseInt(`${closeT}`)}`));
          let prediction1 = 2.0;
         shootyesgoalU = `${shootyesgoalU.length}`;
         prediction1 -= parseInt(`${prediction1}`);
       let reactnativeratingsO: Map<any, any> = new Map([[String.fromCharCode(115,95,51,51,95,112,114,111,118,105,100,101,100,0),true ], [String.fromCharCode(115,105,103,104,95,57,95,54,56,0),false ], [String.fromCharCode(105,95,54,51,95,115,119,105,116,99,104,97,98,108,101,0),false ]]);
       let klevin4: Map<any, any> = new Map([[String.fromCharCode(118,95,53,54,0),103], [String.fromCharCode(115,118,97,114,105,110,116,95,49,95,54,57,0),651]]);
      let yingf = shootyesgoalU == String.fromCharCode(51,121,50,54,118,50,119,117,121,97,0);
      do {
          let readp = String.fromCharCode(114,95,53,52,95,99,108,97,105,109,101,100,0);
          let taiwana = true;
          let gpayh = 4.0;
          let i_countq = 5.0;
          let hoverd = String.fromCharCode(120,95,52,53,95,110,101,117,116,114,97,108,0);
         shootyesgoalU += `${parseInt(`${i_countq}`) >> (Math.min(Math.abs(1), 2))}`;
         readp = `${readp.length}`;
         taiwana = hoverd.length >= gpayh;
         gpayh -= parseInt(`${gpayh}`) ^ 3;
         i_countq /= Math.max(5, parseFloat(`${3 - parseInt(`${gpayh}`)}`));
         hoverd += `${((taiwana ? 5 : 3) / (Math.max(parseInt(`${gpayh}`), 5)))}`;
         if (yingf) {
            break;
         }
      } while ((4 < (shootyesgoalU.length - klevin4.size)) && yingf);
       let blacklistx = false;
       let main_mN = true;
      let package_z30 = 6505753 <= shootyesgoalU.length;
      do {
         shootyesgoalU += `${shootyesgoalU.length}`;
         if (package_z30) {
            break;
         }
      } while ((shootyesgoalU.length == reactnativeratingsO.size) && package_z30);
       let mimow = 3;
      while (3 >= reactnativeratingsO.size || (3 - reactnativeratingsO.size) >= 2) {
         reactnativeratingsO.set(`${icon8}`, reactnativeratingsO.size ^ 1);
         break;
      }
      bgvipsport0 &= parseInt(`${policyq}`) % (Math.max(robotoz.length, 7));
   if ((1.43 - sorts) == 5.67) {
      sorts -= (String.fromCharCode(55,0) == securityJ ? securityJ.length : icontransferclubD.length);
   }
   let malaysiaX3 = 7551231.0 >= policyq;
   do {
       let umengH = true;
      if (umengH) {
         umengH = umengH && umengH;
      }
         umengH = !umengH;
         umengH = !umengH;
      policyq /= Math.max(parseInt(`${policyq}`) & icontransferclubD.length, 3);
      if (malaysiaX3) {
         break;
      }
   } while (malaysiaX3 && (2.98 <= policyq));
   let shareI = sorts <= 5125226.0;
   do {
      sorts -= 1 + gifgoalk.length;
      if (shareI) {
         break;
      }
   } while (shareI && (3 < (parseInt(`${sorts}`) / 3) && 2 < (homeplayerC.length & 3)));
       let emptyV: Array<any> = [645, 314];
       let routerc = String.fromCharCode(119,95,56,55,95,110,111,99,104,97,110,103,101,0);
      let defaultlogo4 = routerc == String.fromCharCode(100,55,110,112,110,106,112,95,119,111,0);
      do {
         routerc = `${(routerc == String.fromCharCode(122,0) ? routerc.length : emptyV.length)}`;
         if (defaultlogo4) {
            break;
         }
      } while (defaultlogo4 && ((emptyV.length / 5) <= 5 || (routerc.length / 5) <= 3));
          let c_lockp = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,48,95,53,55,0);
         routerc += `${(c_lockp == String.fromCharCode(99,0) ? c_lockp.length : emptyV.length)}`;
      icontransferclubD += `${icontransferclubD.length}`;
      policyq /= Math.max(2, 1 >> (Math.min(1, Math.abs(bgvipsport0))));
   for (let x = 0; x < 2; x++) {
      robotoz += `${((sharedS ? 4 : 5))}`;
   }

    await dispatch(addUserAuthState(user));
  };

  
  
  
  const userState = useSelector<mayi_Baseline>('userReducer');
  return (
    <ScreenContainer>
      <View
        style={{ gap: spacing.m, justifyContent: "space-between", flex: 1 }}
      >
        <View>
          <TitleWithBackButtonHeader title="设置" />

          <NotificationModal
            onConfirm={toggleVersionDialog}
            isVisible={isVersionDialogOpen && !isOffline}
            title="检查更新"
            subtitle1={subtitle1}
            confirmationText="我知道了"
          />

          <NotificationModal
            isVisible={isVersionDialogOpen && isOffline}
            onConfirm={toggleVersionDialog}
            title="无法检测网络，请稍后再试"
          />

          <ConfirmationModal
            onConfirm={() => {
              dispatch(clearStorageMemory());
              toggleClearDialog();
            }}
            onCancel={toggleClearDialog}
            isVisible={isClearDialogOpen}
            title="空间清理"
            subtitle="清除所有的缓存"
            confirmationText="清除"
            confirmationColor={IS_OTHER_SKIN ? colors.error : undefined}
          />

          <ConfirmationModal
            onConfirm={async () => {
              

              setIsBackdropVisible(true); 
              toggleLogoutDialog();
              await AsyncStorage.removeItem("showAds");
              await dispatch(removeUserAuthState());
              clearMinivodApiCache();

              await guestLoginInit();
              setIsBackdropVisible(false); 
              navigator.navigate("Home", {
                screen: "Profile",
              });

              GoogleSignin.signOut();
            }}
            onCancel={toggleLogoutDialog}
            isVisible={isLogoutDialogOpen}
            title="退出登录"
            subtitle="您是否确定要退出登录？"
            confirmationText="确定"
          />

          { }
          <View>
            <View>
              <ShowMoreButton text="空间清理" onPress={toggleClearDialog} />
              <ShowMoreButton
                text="检查更新"
                onPress={toggleVersionDialog}
                rightIcon={
                  <View style={styles.icon}>
                    <Text
                      style={{
                        ...textVariants.small,
                        paddingBottom: 3,
                        color: colors.muted,
                      }}
                    >
                      当前版本{APP_VERSION}
                    </Text>
                    <MoreArrow
                      width={icons.sizes.l}
                      height={icons.sizes.l}
                      color={colors.muted}
                    />
                  </View>
                }
              />
            </View>
          </View>
        </View>
        {mayi_Gift.isLogin(userState.user) && (
          <TouchableOpacity onPress={toggleLogoutDialog}>
            <View
              style={{
                backgroundColor: dark ? "#1d2023" : '#D9D9D9',
                width: "100%",
                height: 50,
                borderRadius: 8,
                borderWidth: 0,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Text style={{ color: "#FF3C3C" }}>退出登录</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      { }
      <Modal
        transparent
        animationType="slide"
        visible={isBackdropVisible}
        onRequestClose={() => setIsBackdropVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#FAC33D" />
        </View>
      </Modal>
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
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
