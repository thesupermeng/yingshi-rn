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
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/tt_hongkong_button";
import NotificationModal from "../../components/modal/tt_countdown";
import MoreArrow from "@static/images/privilegeQuestCountry.svg";
import ConfirmationModal from "../../components/modal/tt_styles";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { clearStorageMemory } from "@redux/actions/tt_checkbox";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux/actions/tt_topon";
import { changeScreenAction } from "@redux/actions/tt_copy_heji";
import { ttOrange } from "@redux/tt_updates_bottom";

import { APP_VERSION, IS_OTHER_SKIN } from "@utility/tt_trophy_cross";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { ttReactnativejsMalaysia } from "@utility/tt_side_description";
import { clearMinivodApiCache } from "../../utils/tt_firebase_less";
import { ttTramini } from "../../api/tt_stations_right";
import { addUserAuthState } from "@redux/actions/tt_topon";
import { ttGoal } from '@redux/reducers/tt_selected';
import { ttFast } from "@models/tt_stations_right";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
  const { colors, textVariants, icons, spacing, dark } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); 

  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let uploadH: Map<any, any> = new Map([[String.fromCharCode(110,105,100,115,95,53,95,53,56,0),822], [String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,118,95,51,52,0),197], [String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,112,95,54,50,0),544]]);
    let coreU = String.fromCharCode(111,95,56,56,95,118,97,108,105,100,97,116,105,111,110,0);
    let cornerm = 3.0;
    let sidep = 3;
    let verticalm: Map<any, any> = new Map([[String.fromCharCode(98,95,51,52,95,101,114,97,115,101,114,0),660], [String.fromCharCode(112,95,53,54,95,109,105,115,115,105,110,103,0),289]]);
    let stringM = 1.0;
    let stationa: Array<any> = [443, 544, 429];
    let rightu: Map<any, any> = new Map([[String.fromCharCode(115,105,116,101,95,57,95,53,52,0),487], [String.fromCharCode(117,110,116,105,108,95,104,95,53,51,0),539]]);
    let selectedO = String.fromCharCode(112,97,103,101,110,111,95,120,95,56,57,0);
    let frame_b5h: Map<any, any> = new Map([[String.fromCharCode(97,110,97,108,121,115,105,115,95,105,95,48,0),String.fromCharCode(100,95,50,49,95,97,114,105,116,104,0)], [String.fromCharCode(115,95,49,53,95,115,101,112,97,114,97,116,101,100,0),String.fromCharCode(112,95,56,55,95,118,101,114,98,97,116,105,109,0)]]);
    let taiwanr = 2;
    let clockJ = 0.0;
    let canvasW = String.fromCharCode(117,114,108,100,101,99,111,100,101,95,53,95,55,54,0);
    let enewinterstitialk = String.fromCharCode(97,109,101,120,95,111,95,55,48,0);
    let favoritej = String.fromCharCode(99,95,56,55,95,100,98,115,105,122,101,0);
    let currentI = 3.0;
    let turn7 = 0.0;
       let serviceZ = true;
         serviceZ = (!serviceZ ? serviceZ : !serviceZ);
      while (!serviceZ) {
          let sigmobi: Map<any, any> = new Map([[String.fromCharCode(117,95,54,51,95,115,101,99,111,110,100,0),470], [String.fromCharCode(106,95,53,50,95,104,111,108,100,0),581], [String.fromCharCode(115,95,57,55,95,115,121,110,99,115,97,102,101,0),169]]);
         serviceZ = (((serviceZ ? 37 : sigmobi.size) | sigmobi.size) == 37);
         break;
      }
      if (serviceZ && !serviceZ) {
         serviceZ = !serviceZ || !serviceZ;
      }
      rightu = new Map([[`${verticalm.size}`, sidep]]);
      clockJ /= Math.max(1 ^ selectedO.length, 4);
       let submitY = String.fromCharCode(103,97,105,110,99,95,56,95,52,51,0);
          let dragE: Map<any, any> = new Map([[String.fromCharCode(111,112,99,111,100,101,115,95,115,95,53,56,0),true ], [String.fromCharCode(99,111,115,113,105,95,108,95,53,53,0),true ]]);
         submitY = `${submitY.length}`;
         dragE = new Map([[`${dragE.size}`, 1]]);
      for (let u = 0; u < 2; u++) {
          let closeB: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,110,101,97,114,101,114,0),String.fromCharCode(115,112,97,116,105,97,108,95,121,95,50,49,0)], [String.fromCharCode(113,95,49,55,95,101,115,99,97,112,101,100,0),String.fromCharCode(121,95,51,51,95,117,110,109,97,114,115,104,97,108,0)]]);
         submitY = `${submitY.length << (Math.min(Math.abs(3), 2))}`;
         closeB = new Map([[`${closeB.size}`, closeB.size % 1]]);
      }
         submitY += `${submitY.length + 3}`;
      frame_b5h = new Map([[`${rightu.size}`, (String.fromCharCode(85,0) == submitY ? rightu.size : submitY.length)]]);
   while (3.54 > (cornerm * clockJ) && (cornerm * clockJ) > 3.54) {
      clockJ *= parseInt(`${stringM}`) >> (Math.min(Math.abs(frame_b5h.size), 5));
      break;
   }
   for (let t = 0; t < 3; t++) {
      stringM /= Math.max(parseFloat(`${2}`), 5);
   }
      coreU = `${rightu.size >> (Math.min(1, Math.abs(uploadH.size)))}`;
   for (let h = 0; h < 2; h++) {
       let sendC = String.fromCharCode(98,105,116,115,116,114,95,56,95,49,52,0);
       let gestures_: Array<any> = [177, 235, 443];
       let detailsA = String.fromCharCode(112,114,111,109,112,101,103,95,118,95,50,0);
       let hongkongq = 5.0;
       let fastforwardP = 2;
         detailsA += `${1 & fastforwardP}`;
         gestures_ = [fastforwardP - gestures_.length];
       let friends1: Map<any, any> = new Map([[String.fromCharCode(111,95,53,51,95,108,97,118,102,117,116,105,108,115,0),352], [String.fromCharCode(118,95,50,49,95,118,108,105,110,101,0),827]]);
       let form5: Map<any, any> = new Map([[String.fromCharCode(107,95,55,57,95,114,101,97,108,109,0),String.fromCharCode(97,117,116,111,0)], [String.fromCharCode(119,95,51,57,95,100,101,108,105,109,105,116,101,114,0),String.fromCharCode(105,95,50,52,95,112,97,100,100,105,110,103,0)]]);
      if (gestures_.length == hongkongq) {
         gestures_ = [detailsA.length << (Math.min(3, gestures_.length))];
      }
         detailsA = `${fastforwardP % (Math.max(7, sendC.length))}`;
          let chatl = 5.0;
          let plashP = String.fromCharCode(116,95,50,54,95,100,101,108,105,118,101,114,121,0);
          let placeholdern = String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,51,95,56,53,0);
         fastforwardP %= Math.max((sendC == String.fromCharCode(95,0) ? plashP.length : sendC.length), 4);
         chatl /= Math.max(5, 1 ^ placeholdern.length);
         plashP = `${placeholdern.length}`;
          let unselectedF = String.fromCharCode(115,97,105,122,95,117,95,52,0);
         sendC = `${detailsA.length}`;
         unselectedF += `${unselectedF.length}`;
      while (5 == (2 >> (Math.min(2, gestures_.length))) && (parseInt(`${hongkongq}`) * gestures_.length) == 2) {
         gestures_ = [gestures_.length - 3];
         break;
      }
          let miniO = String.fromCharCode(99,101,105,108,95,121,95,51,49,0);
          let setting3 = String.fromCharCode(103,101,116,116,105,109,101,95,99,95,51,50,0);
         sendC = `${3 << (Math.min(3, Math.abs(parseInt(`${hongkongq}`))))}`;
         miniO = `${3 * setting3.length}`;
         setting3 += `${setting3.length % 1}`;
      if ((2 % (Math.max(5, gestures_.length))) >= 2 && 5 >= (2 % (Math.max(8, fastforwardP)))) {
          let type_eT = 0.0;
          let crossL = false;
          let scorej = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,102,95,49,56,0);
          let hejiy: Array<any> = [80, 429, 599];
         fastforwardP /= Math.max(2, 3);
         type_eT += hejiy.length;
         crossL = (35 >= ((!crossL ? scorej.length : 35) >> (Math.min(scorej.length, 1))));
         hejiy.push(3 + parseInt(`${type_eT}`));
      }
      let h_imageG = detailsA.length >= 8406339;
      do {
          let moonH = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,95,115,95,49,57,0);
          let basketballf = String.fromCharCode(117,95,56,52,95,115,113,114,116,110,101,103,0);
         detailsA = `${gestures_.length}`;
         moonH = `${moonH.length % (Math.max(basketballf.length, 2))}`;
         basketballf += "2";
         if (h_imageG) {
            break;
         }
      } while (h_imageG && (1 == (detailsA.length ^ 2) && (parseInt(`${hongkongq}`) + detailsA.length) == 2));
      for (let p = 0; p < 2; p++) {
          let foregroundx = 4.0;
          let productB = String.fromCharCode(112,114,111,116,101,99,116,111,114,95,102,95,55,50,0);
          let reactnativejsV = String.fromCharCode(102,95,52,54,95,114,101,116,117,114,110,105,110,103,0);
         detailsA += `${fastforwardP << (Math.min(Math.abs(parseInt(`${hongkongq}`)), 4))}`;
         foregroundx -= parseFloat(`${productB.length | reactnativejsV.length}`);
         productB += `${1 & reactnativejsV.length}`;
      }
         detailsA = "1";
      if ((form5.size / (Math.max(friends1.size, 5))) <= 2 && (form5.size / (Math.max(friends1.size, 9))) <= 2) {
         friends1 = new Map([[`${friends1.size}`, 3]]);
      }
      if (2 >= (2 / (Math.max(6, sendC.length))) && (sendC.length / (Math.max(2, 7))) >= 1) {
         sendC = `${(detailsA == String.fromCharCode(84,0) ? detailsA.length : parseInt(`${hongkongq}`))}`;
      }
      cornerm *= parseFloat(`${parseInt(`${hongkongq}`) ^ 1}`);
   }
   if (Array.from(rightu.values()).includes(stringM)) {
      rightu.set(`${sidep}`, 2);
   }
   for (let a = 0; a < 2; a++) {
       let background5 = String.fromCharCode(120,95,51,51,95,97,117,116,111,102,105,120,0);
       let xvod6 = 2.0;
       let awayl: Map<any, any> = new Map([[String.fromCharCode(119,95,50,50,95,120,118,97,103,0),782], [String.fromCharCode(98,105,100,105,114,95,101,95,54,50,0),964]]);
       let controlA = 4;
       let phone0 = String.fromCharCode(109,105,110,117,116,101,115,95,115,95,49,56,0);
      if (awayl.get(`${xvod6}`) == null) {
          let detailsB = String.fromCharCode(103,95,52,51,95,111,118,101,114,0);
          let rules8 = String.fromCharCode(97,95,51,53,95,98,101,99,111,109,101,0);
          let formq = String.fromCharCode(106,95,49,52,95,112,108,97,99,101,109,97,114,107,0);
         awayl.set(`${xvod6}`, (background5 == String.fromCharCode(115,0) ? parseInt(`${xvod6}`) : background5.length));
         detailsB += "1";
         rules8 += `${rules8.length >> (Math.min(Math.abs(1), 4))}`;
         formq = `${detailsB.length}`;
      }
         awayl.set(background5, awayl.size);
      while (1 <= (1 / (Math.max(5, awayl.size)))) {
         awayl.set(background5, background5.length);
         break;
      }
         controlA >>= Math.min(Math.abs(phone0.length + 3), 3);
         phone0 = "3";
         xvod6 -= parseFloat(`${phone0.length}`);
         xvod6 *= (parseFloat(`${background5 == String.fromCharCode(97,0) ? controlA : background5.length}`));
       let suggestionG = String.fromCharCode(98,117,105,108,100,95,50,95,53,56,0);
       let edit_ = String.fromCharCode(97,95,56,57,95,108,105,98,120,109,108,0);
      for (let c = 0; c < 3; c++) {
         controlA &= controlA % (Math.max(3, 7));
      }
      let dangerw = awayl.size <= 4984383;
      do {
         awayl = new Map([[`${controlA}`, 1 << (Math.min(Math.abs(controlA), 4))]]);
         if (dangerw) {
            break;
         }
      } while (dangerw && (background5.endsWith(`${awayl.size}`)));
      if (3 > (edit_.length * 2) && (edit_.length * 2) > 3) {
         awayl.set(`${phone0}`, 1 ^ awayl.size);
      }
      for (let s = 0; s < 3; s++) {
          let banneru: Map<any, any> = new Map([[String.fromCharCode(98,114,101,110,100,101,114,95,119,95,56,54,0),String.fromCharCode(109,105,110,105,109,117,109,95,114,95,57,49,0)], [String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,97,95,56,52,0),String.fromCharCode(109,95,55,49,95,99,111,110,100,105,116,105,111,110,97,108,0)], [String.fromCharCode(104,95,50,50,95,114,101,116,97,105,110,101,100,0),String.fromCharCode(105,115,101,120,112,108,97,105,110,95,110,95,49,50,0)]]);
         background5 += `${1 % (Math.max(2, banneru.size))}`;
      }
       let mintegralg = true;
          let gradler = 1.0;
          let fillO = 4;
          let videoM = String.fromCharCode(112,105,118,111,116,95,107,95,57,53,0);
         background5 += `${awayl.size}`;
         gradler *= videoM.length;
         fillO -= videoM.length;
      let checkboxh = controlA >= 8587651;
      do {
         controlA %= Math.max(4, 1 * phone0.length);
         if (checkboxh) {
            break;
         }
      } while ((2 < (awayl.size << (Math.min(3, Math.abs(controlA))))) && checkboxh);
      taiwanr /= Math.max(1, selectedO.length);
   }
   while (4 > coreU.length) {
       let friendse = 1;
       let nextM = 2.0;
       let clear6: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,105,122,101,100,95,118,95,53,54,0),986], [String.fromCharCode(97,95,50,56,95,105,115,100,105,97,99,114,105,116,105,99,0),959], [String.fromCharCode(105,112,108,99,111,110,118,107,101,114,110,101,108,95,116,95,55,55,0),694]]);
       let dialog9 = String.fromCharCode(117,95,51,57,95,98,111,108,100,0);
       let reportx: Map<any, any> = new Map([[String.fromCharCode(105,111,115,116,114,101,97,109,95,120,95,50,53,0),String.fromCharCode(112,95,54,49,95,99,112,120,0)], [String.fromCharCode(112,97,115,115,98,95,102,95,53,0),String.fromCharCode(105,100,120,95,113,95,48,0)], [String.fromCharCode(120,95,56,53,95,114,101,99,111,103,110,105,122,101,100,0),String.fromCharCode(105,95,56,57,95,97,100,118,97,110,99,101,100,0)]]);
       let accepted7 = String.fromCharCode(97,97,99,99,111,100,101,114,95,100,95,53,50,0);
          let short_tls = String.fromCharCode(106,95,55,95,119,101,105,103,104,116,112,0);
         friendse <<= Math.min(Math.abs(clear6.size << (Math.min(1, Math.abs(friendse)))), 3);
         short_tls += "3";
         accepted7 += "3";
      for (let l = 0; l < 3; l++) {
         reportx = new Map([[`${reportx.size}`, parseInt(`${nextM}`) | reportx.size]]);
      }
      while (1 >= (clear6.size % (Math.max(accepted7.length, 9))) && 1 >= (accepted7.length % (Math.max(2, clear6.size)))) {
          let videocommonZ: Map<any, any> = new Map([[String.fromCharCode(115,95,48,95,115,116,100,105,110,116,0),835], [String.fromCharCode(120,111,114,101,100,95,99,95,55,51,0),887]]);
         accepted7 += `${accepted7.length}`;
         videocommonZ.set(`${videocommonZ.size}`, 1);
         break;
      }
         nextM += friendse;
         accepted7 += "1";
       let refresh_ = 2.0;
         dialog9 += `${(String.fromCharCode(95,0) == dialog9 ? dialog9.length : reportx.size)}`;
       let controlAS = 5;
       let videow = 1;
      let gradle9 = 7255393.0 >= nextM;
      do {
          let greenj = String.fromCharCode(118,115,105,110,107,95,57,95,57,53,0);
          let humidityf = String.fromCharCode(100,95,54,95,115,116,97,116,105,99,0);
          let acceptedT = 5.0;
          let componentH = 1.0;
          let backwardR = String.fromCharCode(104,95,50,95,115,116,100,97,116,111,109,105,99,0);
         nextM += 3;
         greenj += `${greenj.length}`;
         humidityf = `${(String.fromCharCode(71,0) == humidityf ? humidityf.length : parseInt(`${componentH}`))}`;
         acceptedT /= Math.max(1, 3);
         componentH -= humidityf.length & parseInt(`${acceptedT}`);
         backwardR = "1";
         if (gradle9) {
            break;
         }
      } while ((friendse <= nextM) && gradle9);
         reportx = new Map([[`${controlAS}`, 3 - friendse]]);
      if (accepted7.includes(`${friendse}`)) {
         accepted7 += `${accepted7.length >> (Math.min(4, Math.abs(reportx.size)))}`;
      }
      for (let g = 0; g < 2; g++) {
         friendse |= parseInt(`${nextM}`) << (Math.min(4, Math.abs(1)));
      }
      let telegramH = 7022996 >= clear6.size;
      do {
         clear6.set(dialog9, dialog9.length + parseInt(`${nextM}`));
         if (telegramH) {
            break;
         }
      } while (telegramH && (5 > (clear6.size / (Math.max(1, 4))) && (clear6.size / (Math.max(4, videow))) > 1));
      coreU = `${dialog9.length}`;
      break;
   }
   while ((clockJ * rightu.size) > 1.90 || 1.90 > (rightu.size * clockJ)) {
      rightu.set(`${stringM}`, parseInt(`${stringM}`) - parseInt(`${clockJ}`));
      break;
   }
      stringM -= parseFloat(`${uploadH.size}`);
       let anythinkW = 5.0;
       let fieldd = String.fromCharCode(116,95,54,53,95,99,111,115,113,102,0);
         anythinkW -= parseFloat(`${fieldd.length}`);
          let active2: Array<any> = [483, 874, 437];
         fieldd += `${fieldd.length}`;
         active2 = [active2.length];
          let customx = String.fromCharCode(116,95,54,53,95,111,112,116,105,109,105,115,116,105,99,0);
          let reducerH = String.fromCharCode(97,114,105,116,104,95,109,95,51,55,0);
          let expiredj: Map<any, any> = new Map([[String.fromCharCode(102,95,53,54,95,116,104,117,110,107,0),String.fromCharCode(103,95,54,51,95,100,117,97,108,0)], [String.fromCharCode(111,95,51,51,95,115,99,104,101,109,97,115,0),String.fromCharCode(117,95,50,57,95,115,99,104,101,100,117,108,101,100,0)], [String.fromCharCode(100,95,51,49,95,99,111,109,112,114,101,115,115,111,114,0),String.fromCharCode(104,95,50,57,95,112,114,101,99,0)]]);
         fieldd = `${1 & parseInt(`${anythinkW}`)}`;
         customx = `${3 * expiredj.size}`;
         reducerH += `${expiredj.size}`;
      if (anythinkW >= parseFloat(`${fieldd.length}`)) {
         fieldd += `${1 % (Math.max(7, fieldd.length))}`;
      }
          let button9 = 2.0;
         fieldd += `${parseInt(`${button9}`) ^ fieldd.length}`;
       let chinaa = String.fromCharCode(103,114,111,119,95,110,95,55,57,0);
       let playlisty = String.fromCharCode(100,101,108,116,97,113,95,104,95,54,56,0);
      coreU += `${2 + uploadH.size}`;
   let line7 = String.fromCharCode(114,97,57,118,51,97,120,114,0) == coreU;
   do {
       let renewN = 3.0;
       let feedbackC = 3;
       let mbjscommono: Array<any> = [471, 721];
      while (1 == (feedbackC + 1)) {
         renewN *= parseInt(`${renewN}`);
         break;
      }
      if (1 >= (feedbackC & mbjscommono.length)) {
         mbjscommono.push(1 | parseInt(`${renewN}`));
      }
      while (3.6 < (renewN / 3.31)) {
         feedbackC += parseInt(`${renewN}`);
         break;
      }
          let debugb: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,95,99,95,49,0),950], [String.fromCharCode(101,108,98,103,95,50,95,50,50,0),659]]);
          let nterstitialv: Map<any, any> = new Map([[String.fromCharCode(114,97,119,95,101,95,53,53,0),534], [String.fromCharCode(111,110,97,118,99,100,97,116,97,95,110,95,55,0),908], [String.fromCharCode(108,95,52,53,95,97,99,99,101,115,115,101,100,0),686]]);
          let chart0 = true;
         renewN *= 1 ^ mbjscommono.length;
         debugb = new Map([[`${debugb.size}`, ((chart0 ? 1 : 5) ^ 2)]]);
         nterstitialv = new Map([[`${nterstitialv.size}`, 3]]);
         feedbackC += mbjscommono.length + feedbackC;
      let green6 = 9623073.0 >= renewN;
      do {
         renewN *= parseInt(`${renewN}`);
         if (green6) {
            break;
         }
      } while ((feedbackC >= 4) && green6);
         renewN += mbjscommono.length;
      let countdown6 = 9038134 <= mbjscommono.length;
      do {
         mbjscommono.push(1 % (Math.max(parseInt(`${renewN}`), 5)));
         if (countdown6) {
            break;
         }
      } while ((mbjscommono.length < feedbackC) && countdown6);
      while ((renewN * 1.49) <= 3.53) {
         feedbackC += parseInt(`${renewN}`) * mbjscommono.length;
         break;
      }
      coreU += `${taiwanr % (Math.max(1, 8))}`;
      if (line7) {
         break;
      }
   } while (line7 && (5 >= (coreU.length % 1) && 2 >= (1 % (Math.max(3, taiwanr)))));
      cornerm /= Math.max(parseFloat(`${parseInt(`${clockJ}`) - verticalm.size}`), 1);
   if (!coreU.endsWith(`${stringM}`)) {
      coreU = `${parseInt(`${clockJ}`) - selectedO.length}`;
   }
   let applicationl = coreU == String.fromCharCode(112,98,106,119,55,120,95,109,48,52,0);
   do {
       let group6 = String.fromCharCode(114,101,105,110,115,101,114,116,95,119,95,57,49,0);
       let schedule1 = 2;
      let ruless = 5547150 <= schedule1;
      do {
         schedule1 %= Math.max((String.fromCharCode(70,0) == group6 ? schedule1 : group6.length), 2);
         if (ruless) {
            break;
         }
      } while (ruless && (schedule1 > group6.length));
         schedule1 += 2;
       let baiduo: Array<any> = [966, 890, 914];
      let eighteenA = group6 == String.fromCharCode(109,105,105,97,101,50,121,0);
      do {
          let iconZ: Map<any, any> = new Map([[String.fromCharCode(117,112,99,97,115,101,95,116,95,52,55,0),false ], [String.fromCharCode(99,95,51,54,95,99,108,105,112,98,111,97,114,100,0),false ]]);
          let darkn = 1;
          let downG: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,115,116,97,99,107,116,114,97,99,101,0),String.fromCharCode(99,95,57,56,95,110,105,99,101,0)], [String.fromCharCode(98,95,52,53,95,112,97,115,115,112,104,114,97,115,101,0),String.fromCharCode(113,95,49,56,95,100,101,115,116,111,114,121,0)]]);
          let bridgeo: Array<any> = [String.fromCharCode(101,120,112,97,110,100,101,114,95,116,95,54,56,0), String.fromCharCode(107,95,49,55,95,111,112,116,101,100,0), String.fromCharCode(101,120,112,101,99,116,95,109,95,57,49,0)];
         group6 += `${darkn}`;
         iconZ.set(`${bridgeo.length}`, bridgeo.length);
         darkn |= 3;
         downG = new Map([[`${iconZ.size}`, iconZ.size]]);
         if (eighteenA) {
            break;
         }
      } while ((group6.length > 2) && eighteenA);
      let descg = schedule1 <= 9350968;
      do {
          let firebase2 = 5.0;
          let memberT = String.fromCharCode(122,95,49,49,95,115,112,97,119,110,0);
          let componentY = String.fromCharCode(114,97,110,103,101,95,100,95,56,50,0);
          let volumeh = String.fromCharCode(98,95,55,57,95,116,121,112,101,0);
         schedule1 -= (volumeh == String.fromCharCode(77,0) ? volumeh.length : baiduo.length);
         firebase2 /= Math.max(3, memberT.length);
         memberT += `${(memberT == String.fromCharCode(83,0) ? componentY.length : memberT.length)}`;
         componentY += `${(String.fromCharCode(67,0) == componentY ? componentY.length : memberT.length)}`;
         if (descg) {
            break;
         }
      } while ((group6.includes(`${schedule1}`)) && descg);
       let buffer8 = false;
      coreU = `${verticalm.size / (Math.max(coreU.length, 4))}`;
      if (applicationl) {
         break;
      }
   } while ((frame_b5h.size <= coreU.length) && applicationl);
      rightu.set(`${cornerm}`, parseInt(`${cornerm}`));
       let buttonP = String.fromCharCode(114,101,101,110,116,114,97,110,116,95,56,95,54,49,0);
       let chinaq: Map<any, any> = new Map([[String.fromCharCode(121,95,55,95,116,116,116,0),273], [String.fromCharCode(99,97,115,116,101,100,95,104,95,54,55,0),353], [String.fromCharCode(121,95,57,56,95,115,121,109,98,111,108,105,99,97,116,101,0),167]]);
       let rewardB = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,0);
          let description_ao: Map<any, any> = new Map([[String.fromCharCode(97,114,107,101,114,95,99,95,57,0),String.fromCharCode(118,95,49,57,95,116,104,114,101,101,100,111,115,116,114,0)], [String.fromCharCode(119,95,57,54,95,97,118,117,116,105,108,0),String.fromCharCode(98,111,120,112,108,111,116,95,50,95,56,50,0)]]);
         buttonP += `${rewardB.length}`;
         description_ao = new Map([[`${description_ao.size}`, description_ao.size]]);
      while (1 >= chinaq.size) {
         chinaq = new Map([[`${chinaq.size}`, rewardB.length & 2]]);
         break;
      }
         chinaq = new Map([[`${chinaq.size}`, (rewardB == String.fromCharCode(71,0) ? rewardB.length : chinaq.size)]]);
      while ((5 % (Math.max(4, chinaq.size))) == 2) {
         rewardB = "2";
         break;
      }
      for (let o = 0; o < 1; o++) {
          let footballL = String.fromCharCode(110,95,52,54,95,109,101,109,111,114,121,0);
          let clock1 = false;
          let crossU = String.fromCharCode(99,108,111,115,101,112,95,57,95,53,52,0);
          let typesA = String.fromCharCode(104,97,108,108,95,97,95,55,52,0);
          let submitf: Map<any, any> = new Map([[String.fromCharCode(115,95,52,50,95,111,114,105,0),913], [String.fromCharCode(109,95,49,51,95,107,97,108,109,97,110,0),622], [String.fromCharCode(120,95,57,51,0),110]]);
         buttonP = `${footballL.length}`;
         footballL = `${crossU.length & 2}`;
         clock1 = !crossU.endsWith(`${clock1}`);
         typesA += `${((clock1 ? 4 : 4))}`;
         submitf.set(crossU, crossU.length);
      }
         buttonP = `${buttonP.length | 3}`;
      if ((chinaq.size >> (Math.min(Math.abs(3), 1))) < 5 || (rewardB.length >> (Math.min(Math.abs(3), 2))) < 5) {
          let homeB = true;
          let animationJ = false;
          let successl = String.fromCharCode(100,101,97,99,116,95,111,95,56,51,0);
          let hookO: Map<any, any> = new Map([[String.fromCharCode(105,95,55,95,103,97,108,108,101,114,121,0),461], [String.fromCharCode(100,105,115,112,97,116,99,104,101,100,95,117,95,52,0),328]]);
          let toponF = 5.0;
         rewardB = "3";
         homeB = hookO.size > successl.length;
         animationJ = null == hookO.get(`${animationJ}`);
         successl = `${(String.fromCharCode(67,0) == successl ? (animationJ ? 3 : 4) : successl.length)}`;
         toponF -= 1 >> (Math.min(1, successl.length));
      }
      while ((chinaq.size % 5) <= 4) {
          let controlq = 5;
          let pressure9 = 3.0;
          let foreground_: Array<any> = [48, 381];
          let desce: Map<any, any> = new Map([[String.fromCharCode(110,95,56,55,95,104,111,108,100,101,114,115,0),true ], [String.fromCharCode(118,95,57,53,95,112,114,101,100,105,99,116,111,114,0),true ], [String.fromCharCode(101,97,99,115,95,109,95,57,0),true ]]);
         rewardB += `${2 >> (Math.min(Math.abs(parseInt(`${pressure9}`)), 2))}`;
         controlq %= Math.max(controlq & 1, 2);
         pressure9 += parseFloat(`${controlq}`);
         foreground_ = [2];
         desce.set(`${foreground_.length}`, 2 & foreground_.length);
         break;
      }
      for (let e = 0; e < 3; e++) {
         buttonP = `${chinaq.size}`;
      }
      sidep *= stationa.length >> (Math.min(Math.abs(2), 1));
      stringM *= parseFloat(`${rightu.size / 3}`);
      sidep &= rightu.size * 3;
   if (5 < (3 % (Math.max(1, selectedO.length)))) {
      rightu = new Map([[`${verticalm.size}`, verticalm.size]]);
   }
       let read0 = String.fromCharCode(107,95,52,54,95,110,112,97,116,99,104,101,115,0);
       let diceD = String.fromCharCode(97,95,54,52,95,97,100,106,117,115,109,101,110,116,115,0);
       let adulto = String.fromCharCode(101,95,49,48,95,98,101,116,116,101,114,0);
      let g_count0 = String.fromCharCode(50,117,122,114,113,97,0) == adulto;
      do {
         adulto += `${(adulto == String.fromCharCode(49,0) ? adulto.length : read0.length)}`;
         if (g_count0) {
            break;
         }
      } while (g_count0 && (!adulto.includes(`${diceD.length}`)));
      if (diceD == adulto) {
          let greenT = true;
          let inewsn = String.fromCharCode(115,111,114,116,95,113,95,50,49,0);
          let settings7: Array<any> = [255, 172, 412];
         adulto += `${diceD.length % (Math.max(7, inewsn.length))}`;
         greenT = settings7.includes(greenT);
         inewsn = "3";
         settings7 = [settings7.length];
      }
         adulto = `${read0.length * diceD.length}`;
      if (4 > diceD.length) {
          let preview5: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,95,104,109,97,99,105,100,0),138], [String.fromCharCode(116,95,50,49,95,109,107,118,109,117,120,101,114,0),325]]);
          let sideo = String.fromCharCode(97,110,116,105,95,109,95,51,48,0);
          let show_: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,110,103,115,95,122,95,54,52,0),38], [String.fromCharCode(122,95,54,49,95,112,97,116,116,101,114,110,115,0),125], [String.fromCharCode(109,98,98,108,111,99,107,95,109,95,51,49,0),261]]);
          let actionG = String.fromCharCode(116,95,51,50,95,115,117,98,116,114,101,101,115,0);
         diceD += `${3 - adulto.length}`;
         preview5 = new Map([[`${show_.size}`, 2 << (Math.min(1, Math.abs(preview5.size)))]]);
         sideo = `${sideo.length}`;
         show_ = new Map([[`${show_.size}`, show_.size & 2]]);
         actionG = `${actionG.length}`;
      }
         read0 = `${read0.length % 2}`;
          let core0 = 1.0;
         diceD = `${3 & diceD.length}`;
         core0 += parseInt(`${core0}`) - parseInt(`${core0}`);
         diceD = `${2 * diceD.length}`;
         read0 = `${diceD.length * 1}`;
      if (adulto != read0) {
         read0 = "1";
      }
      frame_b5h = new Map([[read0, diceD.length]]);
       let right_: Array<any> = [329, 506];
      let yingR = 7215156 <= right_.length;
      do {
          let predictionb = String.fromCharCode(117,95,51,53,95,110,105,100,111,98,106,0);
          let vietnamo = String.fromCharCode(118,95,55,56,95,112,97,115,112,0);
         right_ = [right_.length + predictionb.length];
         predictionb = `${(String.fromCharCode(66,0) == vietnamo ? vietnamo.length : vietnamo.length)}`;
         if (yingR) {
            break;
         }
      } while (yingR && (right_.length <= right_.length));
      if (right_.length >= right_.length) {
         right_.push(right_.length / (Math.max(right_.length, 5)));
      }
         right_.push(right_.length);
      uploadH = new Map([[`${verticalm.size}`, selectedO.length & 2]]);
   for (let r = 0; r < 1; r++) {
      rightu = new Map([[`${stationa.length}`, coreU.length - stationa.length]]);
   }

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let lessg: Array<any> = [String.fromCharCode(106,95,56,48,95,115,116,97,109,112,0), String.fromCharCode(112,95,57,54,95,112,111,115,116,112,114,111,99,101,115,115,0), String.fromCharCode(100,111,109,97,105,110,115,95,114,95,52,48,0)];
    let blacklist1 = String.fromCharCode(117,95,54,48,95,115,121,109,98,111,108,105,99,97,116,101,100,0);
    let stylee = 2;
    let mbbidv = String.fromCharCode(97,100,97,112,116,101,114,0);
    let network0 = 4.0;
    let sheet0 = 0;
    let sound4: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,48,95,109,98,109,111,100,101,0),526], [String.fromCharCode(104,97,110,110,105,110,103,95,101,95,56,50,0),748], [String.fromCharCode(115,95,51,55,95,117,110,97,118,97,105,108,97,98,101,0),384]]);
    let awayj = 5.0;
    let weiboL = String.fromCharCode(100,95,51,57,95,99,97,112,116,105,111,110,115,0);
    let themex = String.fromCharCode(112,95,49,50,95,101,121,101,100,114,111,112,112,101,114,0);
    let huaweim = 2;
    let control2 = 2;
    let icon_ = 5.0;
    let mbbannerI = String.fromCharCode(115,95,54,51,95,114,103,98,97,121,99,111,99,103,0);
   let orange7 = 6512569 >= sound4.size;
   do {
      sound4.set(blacklist1, blacklist1.length);
      if (orange7) {
         break;
      }
   } while ((Array.from(sound4.keys()).includes(`${lessg.length}`)) && orange7);
   let tooltipsv = 4942582 <= sheet0;
   do {
       let playn = String.fromCharCode(103,95,49,56,95,98,97,99,107,103,114,111,117,110,100,0);
          let resultr = String.fromCharCode(113,95,50,48,0);
          let countdownO = String.fromCharCode(114,109,115,105,112,114,95,49,95,50,0);
          let regeng9 = 3.0;
         playn = `${parseInt(`${regeng9}`) / (Math.max(resultr.length, 4))}`;
         resultr = `${countdownO.length & 2}`;
         countdownO += `${countdownO.length - 2}`;
      while (playn.length < 4) {
         playn = `${playn.length % (Math.max(playn.length, 2))}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         playn += `${playn.length + playn.length}`;
      }
      sheet0 >>= Math.min(3, Math.abs(parseInt(`${network0}`)));
      if (tooltipsv) {
         break;
      }
   } while ((4.45 == (awayj - 5.3)) && tooltipsv);
       let middlewaren: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,52,95,49,51,0),true ], [String.fromCharCode(107,102,119,114,105,116,101,95,101,95,49,54,0),false ], [String.fromCharCode(121,117,121,118,116,111,121,117,118,95,101,95,52,0),false ]]);
       let recommendationm = 0.0;
       let forwardh = 5.0;
       let stationa: Array<any> = [839, 613];
         stationa.push(parseInt(`${forwardh}`) / 1);
      while (!stationa.includes(recommendationm)) {
         stationa.push(parseInt(`${forwardh}`));
         break;
      }
      if (3.6 == (middlewaren.size + recommendationm) || 4.91 == (recommendationm + 3.6)) {
         recommendationm -= 3;
      }
         forwardh *= parseFloat(`${middlewaren.size * 3}`);
         recommendationm *= parseInt(`${recommendationm}`);
      while (1.82 == (forwardh - recommendationm) || 4.0 == (recommendationm * 1.82)) {
         recommendationm -= parseInt(`${forwardh}`);
         break;
      }
          let analyticL = false;
          let target2 = 5.0;
          let dialogv: Array<any> = [861, 103];
         middlewaren = new Map([[`${middlewaren.size}`, middlewaren.size]]);
         analyticL = dialogv.includes(target2);
         target2 += ((analyticL ? 3 : 3) & parseInt(`${target2}`));
         dialogv.push(dialogv.length ^ parseInt(`${target2}`));
      while (4 > stationa.length) {
          let bridgeE = 2;
          let playlistf = String.fromCharCode(122,95,51,53,95,97,108,116,101,114,110,97,116,105,118,101,115,0);
          let grayr = 4.0;
         middlewaren = new Map([[`${bridgeE}`, parseInt(`${grayr}`)]]);
         bridgeE <<= Math.min(playlistf.length, 5);
         playlistf += `${(String.fromCharCode(86,0) == playlistf ? playlistf.length : playlistf.length)}`;
         break;
      }
      mbbidv += `${middlewaren.size}`;
   let reducers = lessg.length >= 6526797;
   do {
      lessg.push(mbbidv.length & parseInt(`${network0}`));
      if (reducers) {
         break;
      }
   } while (reducers && (4 > (sound4.size ^ 2) && (sound4.size ^ 2) > 2));
       let cleart = 3.0;
       let downc = String.fromCharCode(112,97,103,101,115,105,122,101,95,117,95,52,54,0);
      if (1 == (downc.length / 2) || (3.46 * cleart) == 2.96) {
         cleart /= Math.max(5, parseFloat(`${3 | downc.length}`));
      }
          let singleU = 2;
         cleart *= (parseFloat(`${downc == String.fromCharCode(113,0) ? parseInt(`${cleart}`) : downc.length}`));
         singleU ^= singleU % (Math.max(singleU, 10));
       let nextd = 5.0;
       let thumbnail_ = 0.0;
       let common4 = String.fromCharCode(113,95,57,55,95,115,116,97,114,116,99,111,100,101,0);
      while ((3.60 / (Math.max(6, thumbnail_))) <= 2.87 || 4 <= (parseInt(`${thumbnail_}`) / (Math.max(downc.length, 1)))) {
         thumbnail_ += parseFloat(`${parseInt(`${thumbnail_}`) / (Math.max(common4.length, 6))}`);
         break;
      }
      stylee += parseInt(`${network0}`);
   for (let t = 0; t < 1; t++) {
      sheet0 *= parseInt(`${network0}`);
   }
      stylee >>= Math.min(Math.abs(control2 ^ parseInt(`${network0}`)), 2);
      themex = "1";
   for (let a = 0; a < 3; a++) {
      stylee %= Math.max(3, 4);
   }
   if ((3 - sound4.size) < 5 && 1 < (3 - sound4.size)) {
      themex += `${control2}`;
   }
       let mini3: Map<any, any> = new Map([[String.fromCharCode(106,95,51,50,0),943], [String.fromCharCode(97,95,53,52,95,101,100,105,116,0),547], [String.fromCharCode(110,97,103,108,101,95,115,95,50,0),165]]);
       let incident2 = 1.0;
       let v_centerA: Map<any, any> = new Map([[String.fromCharCode(100,101,105,110,105,116,95,109,95,51,51,0),609], [String.fromCharCode(109,95,52,53,95,119,97,118,101,115,121,110,116,104,0),180]]);
         mini3 = new Map([[`${v_centerA.size}`, v_centerA.size << (Math.min(5, Math.abs(mini3.size)))]]);
      for (let o = 0; o < 2; o++) {
         incident2 -= mini3.size;
      }
      if ((4 & mini3.size) > 4) {
          let albumS = String.fromCharCode(105,115,112,111,115,97,98,108,101,95,48,95,57,52,0);
          let analyticc: Array<any> = [244, 910];
          let expiredU = String.fromCharCode(108,95,53,50,95,97,116,116,97,99,104,109,101,110,116,115,0);
          let combine4 = 3;
         incident2 *= mini3.size & analyticc.length;
         albumS += `${2 >> (Math.min(2, expiredU.length))}`;
         analyticc = [1 << (Math.min(2, Math.abs(combine4)))];
         expiredU = `${expiredU.length}`;
         combine4 ^= combine4;
      }
      let membershipA = mini3.size >= 8816131;
      do {
         mini3 = new Map([[`${mini3.size}`, 1]]);
         if (membershipA) {
            break;
         }
      } while (membershipA && (5 >= (mini3.size + parseInt(`${incident2}`))));
      while (4.21 < (mini3.size * incident2)) {
         mini3 = new Map([[`${v_centerA.size}`, parseInt(`${incident2}`) >> (Math.min(Math.abs(v_centerA.size), 5))]]);
         break;
      }
         mini3 = new Map([[`${mini3.size}`, 2]]);
      let footballG = 8949335.0 <= incident2;
      do {
         incident2 -= mini3.size & parseInt(`${incident2}`);
         if (footballG) {
            break;
         }
      } while (footballG && (mini3.get(`${incident2}`) == null));
      for (let v = 0; v < 3; v++) {
         incident2 /= Math.max(mini3.size, 5);
      }
          let klevinT: Array<any> = [String.fromCharCode(103,95,54,55,95,110,97,112,115,104,111,116,0), String.fromCharCode(112,101,114,115,112,95,109,95,57,49,0)];
          let long_ewd = 0.0;
          let middlewarer = 3.0;
         incident2 *= parseInt(`${long_ewd}`);
         klevinT.push(klevinT.length);
         long_ewd += parseFloat(`${parseInt(`${middlewarer}`) ^ 1}`);
         middlewarer *= klevinT.length;
      control2 |= parseInt(`${network0}`) * stylee;
   for (let n = 0; n < 3; n++) {
      network0 *= sound4.size;
   }
       let searchL = 4.0;
      for (let u = 0; u < 2; u++) {
         searchL += parseFloat(`${1}`);
      }
      if ((2.38 + searchL) > 4.23 || (searchL * searchL) > 2.38) {
         searchL /= Math.max(5, parseFloat(`${parseInt(`${searchL}`)}`));
      }
          let morec = String.fromCharCode(105,95,48,95,115,116,97,116,115,0);
          let referrer4: Map<any, any> = new Map([[String.fromCharCode(108,97,121,111,117,116,95,52,95,56,50,0),true ], [String.fromCharCode(119,95,57,56,95,116,114,97,110,115,112,111,114,116,115,0),false ], [String.fromCharCode(101,95,56,95,109,97,103,110,105,102,105,101,114,0),true ]]);
         searchL -= parseFloat(`${parseInt(`${searchL}`) / (Math.max(6, morec.length))}`);
         morec = `${2 & referrer4.size}`;
         referrer4.set(`${referrer4.size}`, referrer4.size);
      blacklist1 += `${1 - lessg.length}`;
   for (let d = 0; d < 1; d++) {
      weiboL = "2";
   }
   for (let e = 0; e < 2; e++) {
      sound4.set(`${control2}`, 3 % (Math.max(1, sound4.size)));
   }
      mbbidv = `${themex.length * sound4.size}`;
   if ((parseInt(`${icon_}`) - themex.length) <= 4) {
      icon_ *= lessg.length;
   }
      huaweim *= parseInt(`${awayj}`);
      huaweim /= Math.max(lessg.length << (Math.min(Math.abs(3), 5)), 4);
   if (2 <= (3 >> (Math.min(5, Math.abs(sheet0))))) {
       let p_count2 = String.fromCharCode(110,111,116,105,102,105,101,115,95,99,95,57,52,0);
       let countdownY = 3.0;
       let settingz = String.fromCharCode(120,95,53,56,95,102,114,101,111,112,101,110,0);
       let trophyV = true;
       let short_a7J = 1;
      if (4 < p_count2.length) {
         p_count2 = `${(String.fromCharCode(77,0) == settingz ? settingz.length : parseInt(`${countdownY}`))}`;
      }
      if ((1 & short_a7J) >= 3) {
         short_a7J <<= Math.min(Math.abs(settingz.length >> (Math.min(Math.abs(1), 2))), 4);
      }
      let policyP = countdownY >= 9322404.0;
      do {
         countdownY -= p_count2.length % (Math.max(1, 7));
         if (policyP) {
            break;
         }
      } while ((countdownY >= 3.78) && policyP);
          let pausex = 3.0;
          let traminib = 0.0;
          let stationsp = 5.0;
         countdownY /= Math.max(5, (p_count2 == String.fromCharCode(54,0) ? parseInt(`${stationsp}`) : p_count2.length));
         pausex /= Math.max(parseFloat(`${parseInt(`${traminib}`) + parseInt(`${pausex}`)}`), 1);
         traminib += parseFloat(`${parseInt(`${traminib}`) % 2}`);
         stationsp -= parseInt(`${pausex}`) * parseInt(`${traminib}`);
      while ((countdownY - 2.38) < 2.83 || 4.81 < (2.38 - countdownY)) {
         countdownY /= Math.max(((trophyV ? 2 : 2) % (Math.max(10, short_a7J))), 5);
         break;
      }
          let greyi = String.fromCharCode(101,95,56,54,95,115,116,114,101,97,109,105,110,103,0);
         countdownY /= Math.max(greyi.length, 5);
         p_count2 = `${((trophyV ? 2 : 2))}`;
         countdownY /= Math.max(5, settingz.length);
      while (!p_count2.startsWith(`${countdownY}`)) {
         countdownY += 3;
         break;
      }
      let floaterd = p_count2 == String.fromCharCode(120,121,99,111,53,120,0);
      do {
         p_count2 += `${(short_a7J ^ (trophyV ? 1 : 3))}`;
         if (floaterd) {
            break;
         }
      } while (floaterd && (1 >= (p_count2.length ^ 5)));
      for (let q = 0; q < 3; q++) {
         trophyV = settingz.endsWith(`${trophyV}`);
      }
         countdownY -= settingz.length;
         trophyV = !trophyV;
          let modelsG: Array<any> = [258, 978, 1000];
         trophyV = p_count2 == String.fromCharCode(78,0);
         modelsG = [modelsG.length - 3];
      for (let w = 0; w < 1; w++) {
          let plusp = String.fromCharCode(106,112,101,103,116,97,98,108,101,115,95,118,95,51,50,0);
         short_a7J ^= plusp.length;
      }
      awayj += 3;
   }
       let chinasameB = 2.0;
       let googleY = false;
       let internetN = String.fromCharCode(106,95,52,56,95,105,122,101,114,111,0);
       let headerd = String.fromCharCode(98,95,49,49,95,115,119,115,99,97,108,101,114,101,115,0);
       let stepc = String.fromCharCode(111,118,101,114,115,104,111,111,116,95,121,95,57,52,0);
         googleY = !googleY;
         internetN += `${((googleY ? 5 : 2) | 3)}`;
      if (2 < (internetN.length + 1)) {
         internetN = "1";
      }
      let pointH = googleY ? !googleY : googleY;
      do {
          let anytimeY = String.fromCharCode(97,116,116,114,105,98,117,116,101,95,110,95,56,50,0);
          let x_positionS = 1.0;
          let brightnessx = 4;
          let upgrade7 = 4;
          let sortz: Map<any, any> = new Map([[String.fromCharCode(117,115,101,97,103,101,95,54,95,50,56,0),554], [String.fromCharCode(102,95,49,57,95,111,99,107,105,110,103,0),991]]);
         googleY = (headerd.length << (Math.min(5, anytimeY.length))) < 47;
         anytimeY += "2";
         x_positionS += upgrade7 & sortz.size;
         brightnessx >>= Math.min(Math.abs(3 & upgrade7), 1);
         sortz.set(`${x_positionS}`, brightnessx);
         if (pointH) {
            break;
         }
      } while ((3.49 < (chinasameB - 5.30)) && pointH);
      for (let i = 0; i < 3; i++) {
          let greenE = true;
          let configureF = String.fromCharCode(109,101,110,116,105,111,110,115,95,115,95,56,52,0);
          let screenp = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,114,95,56,51,0);
          let zoomx = 2.0;
          let applicationn: Array<any> = [419, 123, 914];
         stepc = `${((googleY ? 2 : 3) & (greenE ? 1 : 2))}`;
         greenE = zoomx == 84.95;
         configureF = `${(screenp == String.fromCharCode(50,0) ? parseInt(`${zoomx}`) : screenp.length)}`;
         applicationn = [applicationn.length - 1];
      }
         internetN += `${headerd.length | 2}`;
      let combineds = stepc == String.fromCharCode(48,116,121,0);
      do {
         stepc = `${2 | parseInt(`${chinasameB}`)}`;
         if (combineds) {
            break;
         }
      } while (combineds && (internetN != stepc));
          let signinupo = String.fromCharCode(115,95,49,53,95,102,111,114,0);
          let stylesN = 1.0;
          let lineO = String.fromCharCode(101,110,104,97,110,99,101,114,95,120,95,50,50,0);
         headerd = `${lineO.length}`;
         signinupo = `${(signinupo == String.fromCharCode(119,0) ? parseInt(`${stylesN}`) : signinupo.length)}`;
         stylesN *= parseFloat(`${3}`);
         lineO += `${signinupo.length % (Math.max(1, 3))}`;
      lessg.push(weiboL.length);
      weiboL = "3";

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let episodei = 0.0;
    let appsa = String.fromCharCode(111,95,49,51,95,117,116,105,108,115,0);
    let googleo = String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,52,95,51,57,0);
    let match_ = 4.0;
    let dice4 = 0.0;
    let mbnativeadvanced7 = String.fromCharCode(116,97,98,115,95,112,95,56,51,0);
    let tumbnailE = String.fromCharCode(116,95,53,53,95,100,97,105,0);
    let fastforwardI: Map<any, any> = new Map([[String.fromCharCode(115,105,110,117,115,111,105,100,97,108,95,51,95,56,49,0),String.fromCharCode(117,95,55,54,95,110,100,111,116,115,0)], [String.fromCharCode(102,95,56,52,95,114,101,99,111,103,110,105,122,101,0),String.fromCharCode(106,95,57,54,95,98,97,107,101,100,0)], [String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,114,95,57,54,0),String.fromCharCode(116,95,49,95,99,111,110,99,117,114,114,101,110,116,0)]]);
    let modityQ: Array<any> = [793, 694, 561];
    let awayJ = String.fromCharCode(113,95,52,50,95,110,105,109,97,116,105,111,110,0);
    let coreh = false;
       let disconnectedu = 0.0;
         disconnectedu += parseInt(`${disconnectedu}`);
      if (disconnectedu > disconnectedu) {
          let clubP = String.fromCharCode(100,105,103,101,115,116,115,95,97,95,56,55,0);
         disconnectedu /= Math.max(clubP.length, 3);
      }
      if ((disconnectedu - disconnectedu) < 2.72) {
         disconnectedu += parseInt(`${disconnectedu}`) << (Math.min(Math.abs(parseInt(`${disconnectedu}`)), 3));
      }
      appsa += `${tumbnailE.length | 1}`;
   let statisticsd = mbnativeadvanced7 == String.fromCharCode(108,118,118,104,51,54,0);
   do {
       let overlaym = 3.0;
      let filli = overlaym >= 9515375.0;
      do {
         overlaym *= parseInt(`${overlaym}`);
         if (filli) {
            break;
         }
      } while (filli && ((5 * overlaym) < 2.84));
       let singaporeJ = 3.0;
       let progress_ = 3.0;
         singaporeJ *= parseInt(`${progress_}`) + 2;
      mbnativeadvanced7 += `${tumbnailE.length + mbnativeadvanced7.length}`;
      if (statisticsd) {
         break;
      }
   } while (((3 & mbnativeadvanced7.length) < 1 && 5 < (mbnativeadvanced7.length ^ 3)) && statisticsd);
       let heartm = String.fromCharCode(117,95,54,54,95,99,111,110,116,101,110,116,0);
      for (let f = 0; f < 2; f++) {
         heartm += `${heartm.length}`;
      }
      if (!heartm.endsWith(`${heartm.length}`)) {
         heartm += "3";
      }
      if (3 >= heartm.length) {
         heartm += `${1 | heartm.length}`;
      }
      fastforwardI = new Map([[`${match_}`, (tumbnailE == String.fromCharCode(121,0) ? tumbnailE.length : parseInt(`${match_}`))]]);
      tumbnailE = "2";
   let stylesz = modityQ.length <= 5595241;
   do {
      modityQ.push(tumbnailE.length - 3);
      if (stylesz) {
         break;
      }
   } while ((3.1 < episodei) && stylesz);
   while (!Array.from(fastforwardI.values()).includes(dice4)) {
       let whatsappT: Map<any, any> = new Map([[String.fromCharCode(121,95,51,55,95,99,111,109,112,111,115,101,100,0),String.fromCharCode(108,95,52,95,103,108,111,115,115,0)], [String.fromCharCode(103,119,103,116,95,101,95,56,49,0),String.fromCharCode(115,99,97,108,101,95,54,95,53,49,0)], [String.fromCharCode(112,114,111,118,105,100,101,100,95,48,95,50,53,0),String.fromCharCode(97,95,54,53,95,112,111,105,110,116,101,114,115,0)]]);
         whatsappT = new Map([[`${whatsappT.size}`, whatsappT.size % (Math.max(7, whatsappT.size))]]);
      let nativeexM = 9155445 >= whatsappT.size;
      do {
         whatsappT.set(`${whatsappT.size}`, whatsappT.size);
         if (nativeexM) {
            break;
         }
      } while ((Array.from(whatsappT.keys()).includes(`${whatsappT.size}`)) && nativeexM);
         whatsappT.set(`${whatsappT.size}`, whatsappT.size / (Math.max(2, 6)));
      fastforwardI.set(`${dice4}`, fastforwardI.size);
      break;
   }
   while (googleo == tumbnailE) {
      tumbnailE = "3";
      break;
   }
   while (appsa == String.fromCharCode(57,0) || googleo.length <= 2) {
      googleo = `${fastforwardI.size % (Math.max(4, tumbnailE.length))}`;
      break;
   }
   let with_i89 = awayJ == String.fromCharCode(113,111,115,97,101,102,111,0);
   do {
       let ocopy_o1V = 4.0;
       let forwardA: Array<any> = [979, 487];
       let sigmob8 = 4.0;
       let modityY: Map<any, any> = new Map([[String.fromCharCode(103,97,112,115,95,100,95,50,0),String.fromCharCode(100,101,118,101,108,111,112,101,114,95,112,95,54,56,0)], [String.fromCharCode(112,114,111,114,101,115,100,115,112,95,51,95,51,54,0),String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,103,95,49,48,0)], [String.fromCharCode(114,101,99,101,105,118,101,114,115,95,116,95,49,56,0),String.fromCharCode(97,101,99,109,95,116,95,55,48,0)]]);
       let hooksk = String.fromCharCode(108,95,57,48,95,118,114,101,99,116,0);
         forwardA.push(forwardA.length - parseInt(`${ocopy_o1V}`));
         modityY = new Map([[`${modityY.size}`, modityY.size]]);
      let aboutN = forwardA.length >= 6534208;
      do {
         forwardA = [3];
         if (aboutN) {
            break;
         }
      } while (aboutN && (2 <= (2 % (Math.max(1, forwardA.length)))));
         modityY.set(`${ocopy_o1V}`, modityY.size);
      for (let i = 0; i < 3; i++) {
         forwardA = [parseInt(`${sigmob8}`)];
      }
      while (forwardA.includes(ocopy_o1V)) {
         forwardA.push(3 | forwardA.length);
         break;
      }
      while ((ocopy_o1V - 5.1) >= 3.83) {
         ocopy_o1V -= parseFloat(`${forwardA.length}`);
         break;
      }
         forwardA.push(forwardA.length << (Math.min(hooksk.length, 4)));
       let modeZ = false;
      while (ocopy_o1V <= 2.24) {
         sigmob8 -= parseFloat(`${2 + parseInt(`${sigmob8}`)}`);
         break;
      }
      let agreement3 = hooksk.length >= 9451924;
      do {
          let footballg = 3.0;
          let modeI = 4.0;
          let klevino: Map<any, any> = new Map([[String.fromCharCode(109,98,108,111,111,112,95,105,95,57,55,0),String.fromCharCode(98,115,116,114,97,99,116,95,97,95,49,48,0)], [String.fromCharCode(109,115,115,100,115,112,95,122,95,53,52,0),String.fromCharCode(116,114,105,97,110,103,108,101,95,115,95,56,48,0)], [String.fromCharCode(98,114,101,97,100,95,50,95,53,50,0),String.fromCharCode(112,104,114,97,115,101,115,95,50,95,57,57,0)]]);
          let nalyticsC: Map<any, any> = new Map([[String.fromCharCode(119,111,114,100,115,95,114,95,51,53,0),false ], [String.fromCharCode(99,114,121,112,116,95,55,95,55,50,0),true ]]);
          let humidityl = String.fromCharCode(107,95,51,57,95,117,114,105,0);
         hooksk += "2";
         footballg /= Math.max(2, parseFloat(`${klevino.size}`));
         modeI *= 3;
         klevino = new Map([[`${footballg}`, humidityl.length]]);
         nalyticsC.set(`${modeI}`, parseInt(`${modeI}`));
         humidityl = `${parseInt(`${footballg}`)}`;
         if (agreement3) {
            break;
         }
      } while (agreement3 && (modityY.size < 2));
      if (modityY.get(`${sigmob8}`) != null) {
         sigmob8 += (parseFloat(`${parseInt(`${sigmob8}`) ^ (modeZ ? 3 : 3)}`));
      }
      if (modeZ) {
         modeZ = ocopy_o1V <= 68.77 || modityY.size <= 63;
      }
         modeZ = forwardA.includes(ocopy_o1V);
         modityY.set(`${modeZ}`, (modityY.size / (Math.max(3, (modeZ ? 4 : 2)))));
      awayJ += `${parseInt(`${episodei}`) + 3}`;
      if (with_i89) {
         break;
      }
   } while (with_i89 && (appsa == awayJ));
      match_ += modityQ.length;
       let delegate_scN: Map<any, any> = new Map([[String.fromCharCode(113,95,55,55,95,115,116,114,97,116,101,103,121,0),false ], [String.fromCharCode(100,102,115,116,95,120,95,52,0),false ], [String.fromCharCode(112,114,111,116,111,95,109,95,51,54,0),true ]]);
         delegate_scN.set(`${delegate_scN.size}`, delegate_scN.size);
         delegate_scN.set(`${delegate_scN.size}`, 2 & delegate_scN.size);
         delegate_scN.set(`${delegate_scN.size}`, delegate_scN.size);
      awayJ += `${parseInt(`${match_}`) ^ 3}`;
       let gesturen: Array<any> = [804, 412, 693];
       let detailsn: Map<any, any> = new Map([[String.fromCharCode(111,95,54,48,95,99,108,97,105,109,115,0),String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,95,116,95,49,51,0)], [String.fromCharCode(104,95,51,51,95,99,112,108,120,0),String.fromCharCode(104,101,114,109,105,116,101,95,111,95,50,49,0)], [String.fromCharCode(122,95,53,95,105,110,116,102,108,111,97,116,0),String.fromCharCode(109,101,116,97,115,111,117,110,100,95,108,95,54,53,0)]]);
      while (detailsn.get(`${gesturen.length}`) != null) {
         gesturen = [gesturen.length ^ detailsn.size];
         break;
      }
      while (3 <= (3 ^ detailsn.size) && 3 <= (gesturen.length ^ detailsn.size)) {
          let foundO = String.fromCharCode(120,97,118,115,95,98,95,56,51,0);
          let configm = String.fromCharCode(108,95,57,51,95,108,105,98,112,104,111,110,101,110,117,109,98,101,114,0);
         detailsn.set(`${configm}`, 2 * configm.length);
         foundO += `${(String.fromCharCode(122,0) == foundO ? foundO.length : foundO.length)}`;
         break;
      }
      let orientationQ = 6510099 <= gesturen.length;
      do {
          let searchbar9 = String.fromCharCode(107,95,49,53,95,112,108,97,121,103,114,111,117,110,100,0);
          let vignetteY = 5.0;
          let tickedn = String.fromCharCode(114,95,53,55,95,105,110,115,112,101,99,116,0);
          let shootl = 4.0;
         gesturen.push(tickedn.length << (Math.min(Math.abs(3), 1)));
         searchbar9 = `${(searchbar9 == String.fromCharCode(68,0) ? searchbar9.length : parseInt(`${shootl}`))}`;
         vignetteY *= parseFloat(`${parseInt(`${vignetteY}`) % 1}`);
         tickedn = `${parseInt(`${vignetteY}`) << (Math.min(searchbar9.length, 2))}`;
         shootl *= parseInt(`${shootl}`) * parseInt(`${vignetteY}`);
         if (orientationQ) {
            break;
         }
      } while (orientationQ && (gesturen.length > detailsn.size));
      let transfer5 = 4931470 >= detailsn.size;
      do {
         detailsn = new Map([[`${detailsn.size}`, 2 + detailsn.size]]);
         if (transfer5) {
            break;
         }
      } while (transfer5 && (detailsn.get(`${gesturen.length}`) == null));
          let carouself = String.fromCharCode(115,95,57,57,95,102,108,97,116,0);
          let libcrashsdk2 = true;
         detailsn = new Map([[`${detailsn.size}`, detailsn.size + 1]]);
         carouself = `${carouself.length}`;
         libcrashsdk2 = carouself.length <= 62 || libcrashsdk2;
       let shrinki = String.fromCharCode(99,99,111,117,110,116,95,109,95,54,55,0);
       let relatedE = String.fromCharCode(115,116,114,100,117,112,95,103,95,55,53,0);
      dice4 += appsa.length;
   while (!tumbnailE.startsWith(`${appsa.length}`)) {
       let file2 = 3;
      let selection8 = 5878800 >= file2;
      do {
         file2 %= Math.max(1, 2 + file2);
         if (selection8) {
            break;
         }
      } while (selection8 && ((file2 >> (Math.min(Math.abs(3), 5))) <= 3 || (3 >> (Math.min(5, Math.abs(file2)))) <= 2));
      for (let t = 0; t < 2; t++) {
         file2 >>= Math.min(3, Math.abs(file2));
      }
      let annerE = file2 <= 5926392;
      do {
         file2 &= 1;
         if (annerE) {
            break;
         }
      } while ((file2 >= 4) && annerE);
      appsa = `${fastforwardI.size % (Math.max(tumbnailE.length, 10))}`;
      break;
   }
      dice4 += 2;
      modityQ.push(parseInt(`${episodei}`));
      appsa = `${appsa.length << (Math.min(Math.abs(3), 2))}`;
      appsa = `${parseInt(`${dice4}`) / 1}`;
   for (let w = 0; w < 1; w++) {
      fastforwardI.set(mbnativeadvanced7, 1 ^ mbnativeadvanced7.length);
   }
   for (let a = 0; a < 1; a++) {
      match_ -= parseInt(`${match_}`);
   }
       let thailandl = 2.0;
       let typesm = String.fromCharCode(98,95,54,56,95,105,100,97,116,97,0);
          let castingc = 1.0;
         thailandl += parseInt(`${castingc}`);
      while (4.15 == thailandl) {
          let long_nsl: Map<any, any> = new Map([[String.fromCharCode(99,116,116,115,95,101,95,52,51,0),911], [String.fromCharCode(121,95,57,95,115,119,105,112,101,0),349]]);
         thailandl *= long_nsl.size;
         break;
      }
          let goaln = String.fromCharCode(117,95,51,48,95,97,117,116,104,111,114,105,122,101,0);
         typesm += `${goaln.length}`;
         typesm = `${(String.fromCharCode(105,0) == typesm ? typesm.length : parseInt(`${thailandl}`))}`;
         thailandl -= 3;
       let temperaturew = String.fromCharCode(106,95,51,55,95,104,105,115,116,111,103,114,97,109,0);
       let typingn = String.fromCharCode(109,118,101,99,95,50,95,50,53,0);
      episodei *= 1 << (Math.min(1, googleo.length));
   if ((episodei - 5.27) == 4.82) {
       let mappingg = true;
          let const_rQ: Map<any, any> = new Map([[String.fromCharCode(104,95,57,52,95,100,111,115,100,97,116,101,0),true ], [String.fromCharCode(109,95,49,51,95,121,115,108,111,103,0),true ]]);
         mappingg = const_rQ.size < 4 && !mappingg;
         mappingg = !mappingg;
         mappingg = mappingg && mappingg;
      episodei /= Math.max(2, appsa.length & parseInt(`${episodei}`));
   }

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
       let unreadk = String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,95,102,95,51,53,0);
    let privilegew: Map<any, any> = new Map([[String.fromCharCode(108,101,97,115,116,95,56,95,55,50,0),312], [String.fromCharCode(109,95,49,56,95,112,111,108,121,109,101,115,104,0),238]]);
    let downloadingm = false;
    let reactnativejsy: Array<any> = [718, 247];
    let refreshI: Map<any, any> = new Map([[String.fromCharCode(109,95,55,49,95,115,108,105,99,101,99,111,110,116,101,120,116,0),780], [String.fromCharCode(103,116,101,115,116,95,114,95,50,54,0),371], [String.fromCharCode(97,95,51,56,95,98,108,111,99,107,105,110,103,0),541]]);
    let soundw = 5.0;
    let canvasd = String.fromCharCode(112,95,55,48,95,109,111,114,112,104,101,100,0);
    let blackP = 4.0;
    let connectiony = String.fromCharCode(117,95,56,95,97,99,116,105,118,97,116,101,0);
    let stationsr = String.fromCharCode(115,119,105,99,104,95,103,95,51,52,0);
    let videojsT = 1.0;
    let launcherL = 4;
    let sideH = String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,95,52,95,53,57,0);
    let loadingV = String.fromCharCode(114,103,98,120,95,50,95,54,56,0);
    let connectionI: Array<any> = [701, 298];
    let tailm = 1.0;
   if (1 == connectiony.length) {
      connectiony = `${canvasd.length | parseInt(`${soundw}`)}`;
   }
      soundw *= (String.fromCharCode(118,0) == stationsr ? stationsr.length : reactnativejsy.length);
   for (let o = 0; o < 2; o++) {
      reactnativejsy.push(refreshI.size | privilegew.size);
   }
       let progressv = false;
         progressv = !progressv;
      while (!progressv) {
          let constantsQ = 3.0;
          let traminiC: Array<any> = [431, 494];
          let delegate_9w: Array<any> = [310, 652, 413];
          let filledP: Array<any> = [String.fromCharCode(118,95,51,56,95,99,111,114,114,101,99,116,101,100,0), String.fromCharCode(119,95,55,52,95,115,101,101,107,0)];
          let commentw = 1.0;
         progressv = traminiC.length > 32 && filledP.length > 32;
         constantsQ -= parseInt(`${constantsQ}`) | delegate_9w.length;
         traminiC.push(parseInt(`${commentw}`));
         delegate_9w.push(delegate_9w.length / 3);
         filledP.push(delegate_9w.length);
         commentw *= parseInt(`${commentw}`) + 1;
         break;
      }
          let home1 = false;
          let launch2 = String.fromCharCode(117,95,56,49,95,120,110,97,115,109,0);
          let usernameD = 0;
         progressv = String.fromCharCode(74,0) == launch2;
         home1 = !home1;
         launch2 += `${(usernameD * (home1 ? 2 : 1))}`;
         usernameD %= Math.max(4, usernameD);
      sideH = `${unreadk.length}`;
   if (!downloadingm && 5 < canvasd.length) {
      canvasd += `${3 + privilegew.size}`;
   }
   while (!Array.from(privilegew.keys()).includes(`${blackP}`)) {
      privilegew = new Map([[canvasd, canvasd.length]]);
      break;
   }
       let homei: Array<any> = [String.fromCharCode(113,95,53,48,95,121,114,121,105,0), String.fromCharCode(98,95,57,57,95,109,105,110,105,109,97,108,0), String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,55,95,54,55,0)];
         homei = [homei.length + 3];
         homei = [homei.length * homei.length];
      if ((homei.length ^ 5) == 2 && (5 ^ homei.length) == 4) {
          let sportK = 4.0;
         homei = [parseInt(`${sportK}`) * 1];
      }
      launcherL /= Math.max(parseInt(`${blackP}`) >> (Math.min(Math.abs(1), 5)), 2);
       let pressureX = 2;
       let redirectP = 3;
       let cluby: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,111,121,105,110,103,95,116,95,56,48,0),274], [String.fromCharCode(120,95,57,51,95,100,101,102,97,117,108,0),839], [String.fromCharCode(120,95,57,56,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0),658]]);
      for (let g = 0; g < 2; g++) {
         redirectP += cluby.size ^ 2;
      }
          let transferc = 5.0;
         cluby = new Map([[`${redirectP}`, redirectP]]);
         transferc /= Math.max(1, 2);
         cluby.set(`${pressureX}`, pressureX & cluby.size);
         redirectP ^= redirectP / (Math.max(9, cluby.size));
         pressureX /= Math.max(5, 1);
      for (let k = 0; k < 3; k++) {
         redirectP /= Math.max(1, cluby.size);
      }
      let pangleS = redirectP <= 8239490;
      do {
         redirectP |= 2;
         if (pangleS) {
            break;
         }
      } while (pangleS && (cluby.size >= redirectP));
      while ((cluby.size / 5) <= 5 || (redirectP / (Math.max(cluby.size, 1))) <= 5) {
         cluby.set(`${redirectP}`, redirectP - cluby.size);
         break;
      }
      let backM = 5473739 <= redirectP;
      do {
         redirectP >>= Math.min(Math.abs(pressureX), 4);
         if (backM) {
            break;
         }
      } while ((Array.from(cluby.keys()).includes(`${redirectP}`)) && backM);
      sideH += "3";
   while (2 == launcherL) {
      blackP += stationsr.length;
      break;
   }
   for (let f = 0; f < 2; f++) {
      stationsr = `${connectiony.length}`;
   }
      canvasd = `${2 & parseInt(`${blackP}`)}`;
      reactnativejsy.push(parseInt(`${soundw}`) & 1);
   let countryo = canvasd.length >= 6763575;
   do {
      canvasd = `${parseInt(`${blackP}`)}`;
      if (countryo) {
         break;
      }
   } while (countryo && (1 >= canvasd.length));
   let eventz = 9194958 >= launcherL;
   do {
      launcherL += 1 | sideH.length;
      if (eventz) {
         break;
      }
   } while ((5 > launcherL) && eventz);

    const user = await ttTramini.guestLogin();

   for (let e = 0; e < 2; e++) {
      canvasd = `${stationsr.length}`;
   }
      unreadk += `${((downloadingm ? 1 : 5) - parseInt(`${videojsT}`))}`;
      launcherL <<= Math.min(Math.abs((sideH == String.fromCharCode(87,0) ? sideH.length : parseInt(`${videojsT}`))), 3);
   for (let w = 0; w < 2; w++) {
      unreadk += `${3 >> (Math.min(Math.abs(parseInt(`${videojsT}`)), 3))}`;
   }
       let u_position9: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,48,95,109,98,103,114,97,112,104,0),425], [String.fromCharCode(109,95,49,55,95,105,110,104,105,98,105,116,115,0),87], [String.fromCharCode(114,117,110,110,101,114,95,48,95,57,49,0),74]]);
       let stylesk = 5.0;
       let white6 = String.fromCharCode(119,95,55,95,97,117,103,109,101,110,116,97,116,105,111,110,0);
       let eighteenh = String.fromCharCode(120,95,57,55,95,109,112,106,112,101,103,0);
      if (white6.endsWith(`${stylesk}`)) {
         white6 = `${u_position9.size * 2}`;
      }
         u_position9.set(white6, (String.fromCharCode(110,0) == white6 ? white6.length : u_position9.size));
      for (let u = 0; u < 3; u++) {
         white6 += `${u_position9.size}`;
      }
       let middleQ = 5.0;
      for (let t = 0; t < 2; t++) {
         middleQ -= parseFloat(`${parseInt(`${stylesk}`)}`);
      }
      if (5 <= u_position9.size) {
         u_position9 = new Map([[`${stylesk}`, parseInt(`${stylesk}`)]]);
      }
       let floaterZ = 0.0;
       let qcopy_2ms = 1.0;
      let pointy = middleQ <= 8758156.0;
      do {
         middleQ -= parseFloat(`${parseInt(`${middleQ}`)}`);
         if (pointy) {
            break;
         }
      } while ((5.20 >= (5.33 * middleQ)) && pointy);
      sideH += `${sideH.length - white6.length}`;
      sideH += `${1 ^ privilegew.size}`;
      refreshI = new Map([[canvasd, canvasd.length - 2]]);
      refreshI.set(`${soundw}`, parseInt(`${soundw}`) / (Math.max(stationsr.length, 9)));
       let selectiong = String.fromCharCode(100,95,54,95,116,104,114,101,97,100,115,97,102,101,0);
       let commentO = String.fromCharCode(101,95,57,55,95,97,115,99,0);
       let blackQ = String.fromCharCode(118,112,97,116,104,95,102,95,54,0);
         selectiong += `${(String.fromCharCode(80,0) == commentO ? blackQ.length : commentO.length)}`;
      let blackf = blackQ == String.fromCharCode(100,107,55,118,110,98,0);
      do {
         blackQ = `${commentO.length}`;
         if (blackf) {
            break;
         }
      } while (blackf && (2 < commentO.length));
         blackQ = `${3 & commentO.length}`;
          let constantsB: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,119,120,109,109,116,101,115,116,0),649], [String.fromCharCode(109,95,56,50,95,108,111,111,112,102,105,108,116,101,114,0),759]]);
         selectiong = `${selectiong.length}`;
         constantsB.set(`${constantsB.size}`, 3);
      if (commentO.length >= blackQ.length) {
          let usernameU = String.fromCharCode(99,111,109,112,111,115,105,116,101,95,53,95,54,53,0);
          let backgroundY = false;
          let watchz: Array<any> = [352, 244, 184];
          let arrowx = String.fromCharCode(112,114,101,109,105,117,109,95,111,95,55,54,0);
         blackQ += `${blackQ.length + usernameU.length}`;
         usernameU = `${((backgroundY ? 2 : 2) & 2)}`;
         backgroundY = watchz.length > 33 || arrowx == String.fromCharCode(70,0);
         watchz.push(3);
         arrowx += `${3 + arrowx.length}`;
      }
       let megaphoneS = 4;
          let untickW = 0.0;
          let minivodt = 0;
          let recommendationQ = false;
         commentO += `${commentO.length << (Math.min(Math.abs(3), 3))}`;
         untickW -= parseInt(`${untickW}`) ^ 2;
         minivodt *= parseInt(`${untickW}`) >> (Math.min(3, Math.abs(1)));
         recommendationQ = 79 >= minivodt;
         selectiong += `${2 << (Math.min(4, commentO.length))}`;
         selectiong = `${selectiong.length}`;
      privilegew.set(`${launcherL}`, 3);
      videojsT -= parseFloat(`${3}`);
   while (!Array.from(privilegew.keys()).includes(`${soundw}`)) {
      soundw += 3 ^ privilegew.size;
      break;
   }
   let countryy = sideH.length <= 5954527;
   do {
       let modelsG = 5.0;
       let popupc = String.fromCharCode(105,95,55,95,115,104,111,116,0);
       let minivodY = String.fromCharCode(112,108,117,114,97,108,115,95,50,95,57,49,0);
       let tempm = String.fromCharCode(117,95,57,55,95,97,118,114,101,115,97,109,112,108,101,0);
       let debugv = false;
       let linkk = true;
         popupc = `${1 - minivodY.length}`;
       let episodeD = String.fromCharCode(115,99,104,109,95,56,95,53,54,0);
       let catagoryo = String.fromCharCode(115,99,104,101,100,117,108,105,110,103,95,111,95,53,52,0);
         modelsG += (parseFloat(`${String.fromCharCode(101,0) == episodeD ? episodeD.length : catagoryo.length}`));
         minivodY += `${episodeD.length % (Math.max(2, 9))}`;
      sideH += `${popupc.length | stationsr.length}`;
      if (countryy) {
         break;
      }
   } while ((sideH.length >= stationsr.length) && countryy);
   while ((4 + connectionI.length) > 5 || !downloadingm) {
      connectionI.push(1 << (Math.min(Math.abs(parseInt(`${blackP}`)), 5)));
      break;
   }
       let alertD = 0;
       let actionsx = 4.0;
       let arrowP = 3.0;
         actionsx -= parseFloat(`${parseInt(`${arrowP}`) * 3}`);
         arrowP += parseInt(`${arrowP}`);
      let transfer1 = 7290349.0 <= actionsx;
      do {
         actionsx *= parseFloat(`${parseInt(`${actionsx}`)}`);
         if (transfer1) {
            break;
         }
      } while (transfer1 && ((actionsx / 5.10) == 1.23));
      if ((arrowP / (Math.max(actionsx, 2))) == 5.21) {
         actionsx /= Math.max(parseFloat(`${alertD}`), 1);
      }
       let resultY = String.fromCharCode(111,95,54,52,95,105,110,116,115,0);
      let connectionL = 5640564 <= alertD;
      do {
         alertD -= (String.fromCharCode(78,0) == resultY ? resultY.length : parseInt(`${arrowP}`));
         if (connectionL) {
            break;
         }
      } while ((5 <= (alertD ^ 5) && 1 <= (alertD ^ 5)) && connectionL);
          let twitterz = String.fromCharCode(109,97,121,98,101,95,101,95,56,49,0);
         alertD |= parseInt(`${actionsx}`);
         twitterz += `${2 >> (Math.min(1, twitterz.length))}`;
       let twitterW = String.fromCharCode(110,95,57,57,95,100,105,115,99,111,110,110,101,99,116,101,100,0);
       let teamk = String.fromCharCode(109,95,57,95,117,110,99,108,101,115,0);
         actionsx -= parseFloat(`${parseInt(`${arrowP}`)}`);
      soundw *= ((downloadingm ? 5 : 3) >> (Math.min(loadingV.length, 4)));

    await dispatch(addUserAuthState(user));
  };

  
  
  
  const userState = useSelector<ttGoal>('userReducer');
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
        {ttFast.isLogin(userState.user) && (
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
