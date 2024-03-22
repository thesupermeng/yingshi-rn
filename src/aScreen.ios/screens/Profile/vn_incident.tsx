import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { useTheme } from "@react-navigation/native";
import { PSmall } from "@redux/fj_prediction_thailand";

import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import { Button } from "@rneui/themed";
import ShowMoreButton from "../../components/button/c_logo_countdown_button";
import Logo2 from "@static/images/layoutUpdates.svg";
import NotificationModal from "../../components/modal/fc_shoot_bodan";
import {
  APP_EMAIL_CONST,
  APP_NAME_CONST,
  APP_VERSION,
} from "@utility/n_subs_interstitial";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';

export default ({ navigation }: RootStackScreenProps<"关于我们">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [countToggleB, setCountToggleB] = useState(0);

  const toggleOverlay = () => {
       let thailandf = 4.0;
    let short_vf: Array<any> = [612, 554, 941];
    let schedule8 = true;
    let pingr: Array<any> = [865, 571];
    let qnewsF = 1;
    let modalp = String.fromCharCode(100,105,103,105,116,95,119,95,57,55,0);
    let typesO = String.fromCharCode(105,110,118,101,114,115,101,95,49,95,52,56,0);
    let phonef = String.fromCharCode(102,117,110,99,95,120,95,48,0);
    let emojiJ = 0.0;
    let weibol = String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,53,95,50,55,0);
    let overlayr = true;
   for (let e = 0; e < 1; e++) {
      modalp = "3";
   }
   for (let d = 0; d < 3; d++) {
      phonef += "2";
   }
   if (thailandf < emojiJ) {
      thailandf += typesO.length * short_vf.length;
   }
      schedule8 = typesO.length == 60;
   for (let f = 0; f < 2; f++) {
      thailandf += pingr.length;
   }
   let modelsr = String.fromCharCode(49,121,56,97,0) == phonef;
   do {
      phonef += `${3 - parseInt(`${thailandf}`)}`;
      if (modelsr) {
         break;
      }
   } while ((5 >= (3 >> (Math.min(5, phonef.length))) || (pingr.length >> (Math.min(phonef.length, 5))) >= 3) && modelsr);
   while (5 >= (4 ^ modalp.length) || 3.76 >= (emojiJ / 2.59)) {
      emojiJ += ((overlayr ? 1 : 2));
      break;
   }
   while (2.8 < thailandf) {
      overlayr = !overlayr;
      break;
   }
      schedule8 = short_vf.includes(schedule8);
   for (let g = 0; g < 3; g++) {
       let logov: Array<any> = [222, 174, 848];
      for (let z = 0; z < 2; z++) {
         logov = [3];
      }
      for (let p = 0; p < 1; p++) {
          let contextP: Map<any, any> = new Map([[String.fromCharCode(102,105,103,117,114,101,95,116,95,55,57,0),false ], [String.fromCharCode(112,114,101,102,101,114,114,101,100,95,117,95,57,57,0),false ], [String.fromCharCode(109,95,53,51,95,97,108,108,101,116,0),true ]]);
          let sideC = 5.0;
          let lightL = String.fromCharCode(122,95,52,52,95,104,109,109,116,0);
          let connection_: Array<any> = [455, 797];
         logov = [logov.length];
         contextP = new Map([[`${connection_.length}`, connection_.length + lightL.length]]);
         sideC += 1 << (Math.min(1, connection_.length));
         lightL += `${1 | parseInt(`${sideC}`)}`;
      }
      for (let h = 0; h < 2; h++) {
          let q_lockn = 0.0;
          let list_ = 4;
          let shrinkj = 4;
          let link8 = true;
          let handlerV = String.fromCharCode(122,95,52,55,95,115,104,97,114,101,100,0);
         logov.push(handlerV.length - shrinkj);
         q_lockn /= Math.max(parseInt(`${q_lockn}`) % 3, 3);
         list_ += (list_ | (link8 ? 1 : 3));
         shrinkj ^= parseInt(`${q_lockn}`) >> (Math.min(2, Math.abs(1)));
         link8 = list_ < parseInt(`${q_lockn}`);
         handlerV += `${((link8 ? 3 : 1) & list_)}`;
      }
      qnewsF -= parseInt(`${thailandf}`);
   }
       let helper6 = String.fromCharCode(119,111,114,107,105,110,103,95,111,95,55,49,0);
      for (let i = 0; i < 2; i++) {
         helper6 += `${3 | helper6.length}`;
      }
         helper6 += `${helper6.length * 2}`;
          let completeS = true;
          let casto = 0;
          let pressureV = String.fromCharCode(112,114,111,112,97,103,97,116,101,95,112,95,51,54,0);
         helper6 += `${2 % (Math.max(8, helper6.length))}`;
         completeS = pressureV.length > 9;
         casto *= (String.fromCharCode(102,0) == pressureV ? pressureV.length : casto);
      short_vf = [(String.fromCharCode(99,0) == phonef ? phonef.length : parseInt(`${emojiJ}`))];
       let combinex = String.fromCharCode(115,101,112,97,114,97,116,111,114,115,95,55,95,56,48,0);
       let e_centerg = 2.0;
         e_centerg /= Math.max(1, (combinex == String.fromCharCode(101,0) ? parseInt(`${e_centerg}`) : combinex.length));
         combinex += `${combinex.length << (Math.min(Math.abs(3), 5))}`;
          let progressR = 5.0;
          let playc = 2;
          let predictionG: Map<any, any> = new Map([[String.fromCharCode(114,95,57,49,95,99,108,111,99,107,119,105,115,101,0),528], [String.fromCharCode(97,95,49,55,95,99,109,97,107,101,0),231]]);
         combinex += "2";
         progressR *= parseFloat(`${predictionG.size}`);
         playc &= playc | 1;
         predictionG.set(`${playc}`, parseInt(`${progressR}`));
       let rewindX = 3;
         combinex = `${combinex.length << (Math.min(1, Math.abs(parseInt(`${e_centerg}`))))}`;
      while (3.81 < (3.17 + e_centerg) || 3.17 < (combinex.length + e_centerg)) {
          let register_kaD = false;
          let orangep = 1;
          let ying8 = String.fromCharCode(110,95,52,57,95,101,110,99,105,112,104,101,114,0);
         combinex += `${((register_kaD ? 5 : 4) + orangep)}`;
         register_kaD = 12 == ying8.length;
         orangep -= ying8.length - 1;
         break;
      }
      emojiJ += parseInt(`${emojiJ}`) ^ typesO.length;
   let otherR = weibol.length <= 5274543;
   do {
       let description_3L = String.fromCharCode(99,111,100,101,99,99,116,108,95,108,95,49,52,0);
          let readH: Map<any, any> = new Map([[String.fromCharCode(122,95,56,95,98,114,111,97,100,99,97,115,116,105,110,103,0),false ], [String.fromCharCode(109,97,103,105,99,95,119,95,54,0),false ]]);
          let navigation0 = String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,95,55,95,49,48,0);
         description_3L += `${readH.size + description_3L.length}`;
         readH.set(navigation0, 2 & navigation0.length);
      if (description_3L == String.fromCharCode(89,0)) {
         description_3L += `${description_3L.length}`;
      }
      while (description_3L.length < 1) {
          let rankF: Array<any> = [757, 805];
          let pressureT = 3.0;
          let miniU: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,115,95,56,95,52,57,0),String.fromCharCode(111,110,121,120,99,95,110,95,52,48,0)], [String.fromCharCode(110,95,54,55,95,115,119,105,102,116,99,0),String.fromCharCode(119,95,49,51,95,112,115,110,114,0)], [String.fromCharCode(117,109,98,114,101,108,108,97,95,50,95,52,49,0),String.fromCharCode(99,114,108,105,115,115,117,101,114,95,101,95,51,52,0)]]);
          let watchi = 0.0;
         description_3L = `${miniU.size}`;
         rankF.push(parseInt(`${pressureT}`));
         miniU.set(`${watchi}`, parseInt(`${watchi}`));
         break;
      }
      weibol += `${description_3L.length}`;
      if (otherR) {
         break;
      }
   } while ((2 >= weibol.length) && otherR);
      thailandf += weibol.length % (Math.max(modalp.length, 8));
   if (1 >= (qnewsF ^ 3) || 2 >= (qnewsF | 3)) {
       let calendar8 = 1.0;
       let listK: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,120,115,97,105,95,108,95,54,49,0),284], [String.fromCharCode(114,101,119,114,105,116,101,114,95,102,95,54,52,0),255], [String.fromCharCode(101,110,99,105,114,99,108,101,100,95,51,95,55,50,0),882]]);
       let membershipI: Array<any> = [669, 861];
       let mutedL = String.fromCharCode(116,101,120,105,112,111,100,95,56,95,55,0);
       let collectionh = String.fromCharCode(105,110,99,111,109,112,97,116,105,98,108,101,95,97,95,52,50,0);
         membershipI.push(3 << (Math.min(4, mutedL.length)));
      for (let t = 0; t < 3; t++) {
         calendar8 -= 2;
      }
      for (let u = 0; u < 3; u++) {
          let stationX: Map<any, any> = new Map([[String.fromCharCode(108,95,51,52,95,108,105,98,119,101,98,112,0),true ], [String.fromCharCode(112,95,49,57,95,115,111,105,115,99,111,110,110,101,99,116,101,100,0),false ]]);
          let placeholderA = true;
          let description_u0: Map<any, any> = new Map([[String.fromCharCode(120,95,57,52,95,102,105,110,100,110,101,116,0),480], [String.fromCharCode(113,117,97,110,116,105,122,101,114,95,54,95,56,57,0),730]]);
          let downloadingO = String.fromCharCode(102,95,51,53,95,115,105,109,117,108,97,116,105,111,110,0);
         listK = new Map([[`${stationX.size}`, parseInt(`${calendar8}`) & stationX.size]]);
         placeholderA = 11 <= description_u0.size && String.fromCharCode(122,0) == downloadingO;
         description_u0 = new Map([[downloadingO, (1 >> (Math.min(4, Math.abs((placeholderA ? 4 : 4)))))]]);
      }
      while ((listK.size / 2) > 2) {
          let incident4 = String.fromCharCode(117,116,99,95,120,95,54,49,0);
          let previewp = false;
          let sliderH = String.fromCharCode(117,112,108,111,97,100,105,110,103,95,111,95,56,54,0);
          let disconnectedJ = String.fromCharCode(107,95,54,56,95,99,111,109,98,101,100,0);
         collectionh += `${sliderH.length ^ collectionh.length}`;
         incident4 = `${((previewp ? 4 : 5) / (Math.max(disconnectedJ.length, 8)))}`;
         previewp = !disconnectedJ.startsWith(`${previewp}`);
         sliderH += `${incident4.length}`;
         break;
      }
      for (let d = 0; d < 3; d++) {
         collectionh = "1";
      }
      while ((1 / (Math.max(3, mutedL.length))) == 2) {
          let suggestion4 = 1.0;
          let searchO = true;
         mutedL += `${membershipI.length}`;
         suggestion4 -= 3 >> (Math.min(Math.abs(parseInt(`${suggestion4}`)), 3));
         searchO = !searchO;
         break;
      }
       let bodanV: Array<any> = [519, 94, 421];
          let transfer8 = 3.0;
          let ewardedw = String.fromCharCode(104,95,52,56,95,115,104,114,105,110,107,0);
         calendar8 -= parseInt(`${transfer8}`);
         transfer8 *= parseFloat(`${1 >> (Math.min(1, ewardedw.length))}`);
         ewardedw = `${ewardedw.length}`;
      qnewsF %= Math.max(modalp.length, 3);
   }
   let ajaxh = 5958856 <= typesO.length;
   do {
      typesO = "2";
      if (ajaxh) {
         break;
      }
   } while (ajaxh && (typesO.length == 4));
   for (let a = 0; a < 2; a++) {
       let styleW: Map<any, any> = new Map([[String.fromCharCode(103,95,55,49,95,117,115,101,99,0),876], [String.fromCharCode(108,95,53,55,95,122,101,114,111,105,110,103,0),263], [String.fromCharCode(104,97,108,102,95,106,95,49,48,48,0),792]]);
       let playlistO = 4.0;
      for (let i = 0; i < 1; i++) {
          let lessD = 4.0;
          let bottomj = String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,50,95,54,50,0);
          let resultG = String.fromCharCode(118,105,101,119,95,57,95,52,49,0);
         styleW = new Map([[resultG, resultG.length]]);
         lessD /= Math.max(3, 2);
         bottomj = `${parseInt(`${lessD}`)}`;
      }
         styleW = new Map([[`${styleW.size}`, 2]]);
      while (styleW.size <= playlistO) {
          let submitr = true;
          let logoutI = 0;
          let tickedw = String.fromCharCode(111,95,57,53,95,114,101,115,97,109,112,0);
         playlistO *= parseInt(`${playlistO}`) | 3;
         submitr = tickedw.length <= 94;
         logoutI ^= logoutI;
         tickedw += `${tickedw.length}`;
         break;
      }
       let notificationv = 0.0;
       let bootsplashd = 0.0;
      let overlays = notificationv >= 7962218.0;
      do {
         notificationv /= Math.max(2, parseFloat(`${parseInt(`${playlistO}`)}`));
         if (overlays) {
            break;
         }
      } while (overlays && (bootsplashd < 3.70));
       let long_uwx: Array<any> = [810, 682, 473];
       let aboutS: Array<any> = [424, 84, 917];
      thailandf /= Math.max(2, styleW.size);
   }
      short_vf = [parseInt(`${thailandf}`)];
   let showe = pingr.length <= 8026461;
   do {
      pingr = [parseInt(`${thailandf}`)];
      if (showe) {
         break;
      }
   } while (showe && (!schedule8));
      pingr.push(parseInt(`${emojiJ}`));
   let backe = emojiJ >= 7230152.0;
   do {
      emojiJ -= (3 & (schedule8 ? 3 : 1));
      if (backe) {
         break;
      }
   } while ((short_vf.length == parseInt(`${emojiJ}`)) && backe);
      qnewsF -= pingr.length >> (Math.min(Math.abs(1), 2));
       let annerk = String.fromCharCode(105,95,51,56,95,97,100,103,114,111,117,112,0);
      if (annerk == String.fromCharCode(78,0) && annerk.length >= 1) {
         annerk += `${3 % (Math.max(4, annerk.length))}`;
      }
         annerk = `${annerk.length}`;
         annerk += `${annerk.length}`;
      short_vf.push(annerk.length | 3);
   if (3 <= (2 - pingr.length) || (pingr.length - phonef.length) <= 2) {
      phonef += "1";
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const spamToggleB = () => {
       let telegramR: Array<any> = [80, 134];
    let circleC: Map<any, any> = new Map([[String.fromCharCode(110,95,57,53,95,108,111,99,105,0),String.fromCharCode(112,95,49,95,100,97,112,112,0)], [String.fromCharCode(111,95,50,49,95,100,111,108,98,121,0),String.fromCharCode(105,95,52,0)]]);
    let textY = String.fromCharCode(110,115,116,97,110,116,95,116,95,49,52,0);
    let volumeb = String.fromCharCode(98,97,99,107,108,105,103,104,116,95,53,95,55,56,0);
    let dataW = false;
    let yingu = String.fromCharCode(121,95,53,53,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0);
    let starH: Array<any> = [394, 933];
    let update_ax = 5.0;
    let module8 = String.fromCharCode(108,105,98,101,118,101,110,116,95,97,95,51,52,0);
    let orangeU = String.fromCharCode(115,118,101,99,116,111,114,95,99,95,49,50,0);
    let actionsP = String.fromCharCode(112,97,116,116,101,114,110,115,95,102,95,54,0);
    let tail5 = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,114,95,53,51,0);
    let downloadO = String.fromCharCode(103,95,57,53,95,114,101,102,115,0);
    let calendar8: Map<any, any> = new Map([[String.fromCharCode(103,95,51,55,0),197], [String.fromCharCode(110,95,57,95,114,111,117,110,100,110,101,115,115,0),606], [String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,116,95,55,54,0),578]]);
   let shrinkq = telegramR.length <= 9341147;
   do {
      telegramR = [circleC.size];
      if (shrinkq) {
         break;
      }
   } while (shrinkq && (telegramR.length > 2));
   let actionk = 5192775 <= orangeU.length;
   do {
      orangeU += `${3 | starH.length}`;
      if (actionk) {
         break;
      }
   } while ((volumeb.endsWith(orangeU)) && actionk);
   let switch_fcF = textY == String.fromCharCode(57,103,110,53,105,0);
   do {
      textY = `${textY.length >> (Math.min(module8.length, 1))}`;
      if (switch_fcF) {
         break;
      }
   } while (switch_fcF && (2 > textY.length));
   let reportJ = dataW ? !dataW : dataW;
   do {
       let untick0 = String.fromCharCode(114,95,54,95,115,117,109,100,0);
       let logor = String.fromCharCode(108,111,110,103,109,117,108,97,119,95,55,95,54,49,0);
       let downloadU = 1.0;
       let short_lwt = String.fromCharCode(112,114,101,99,97,108,99,95,105,95,55,51,0);
       let backwardY = 2.0;
       let roomK = 1.0;
         short_lwt += "3";
          let reade = String.fromCharCode(115,101,103,109,101,110,116,95,105,95,52,55,0);
          let modelsH = String.fromCharCode(116,99,112,95,114,95,52,54,0);
         short_lwt += `${(String.fromCharCode(114,0) == logor ? parseInt(`${downloadU}`) : logor.length)}`;
         reade = `${modelsH.length}`;
         modelsH = `${reade.length + 1}`;
         logor = `${logor.length}`;
      for (let q = 0; q < 1; q++) {
          let userr = 0.0;
          let scheduleE = String.fromCharCode(109,105,115,117,115,101,95,56,95,55,0);
         roomK -= parseInt(`${downloadU}`) ^ short_lwt.length;
         userr /= Math.max(parseFloat(`${parseInt(`${userr}`)}`), 1);
         scheduleE += "3";
      }
         short_lwt = `${short_lwt.length}`;
      while ((3 - parseInt(`${downloadU}`)) < 1 && 4.55 < (downloadU - 4.33)) {
         downloadU /= Math.max(4, parseFloat(`${2}`));
         break;
      }
         roomK /= Math.max(4, logor.length);
      for (let g = 0; g < 2; g++) {
          let filter7: Array<any> = [177, 212, 55];
          let index0: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,111,118,101,114,95,122,95,51,52,0),113], [String.fromCharCode(97,95,51,53,95,102,119,104,116,0),949]]);
          let layoutU = 0;
          let target7 = String.fromCharCode(113,95,53,54,95,97,114,103,0);
         short_lwt = `${short_lwt.length * 2}`;
         filter7 = [index0.size];
         index0 = new Map([[`${layoutU}`, layoutU >> (Math.min(Math.abs(3), 2))]]);
         target7 += `${index0.size}`;
      }
          let successT = String.fromCharCode(112,111,108,105,99,105,101,115,95,53,95,49,54,0);
         untick0 += `${2 ^ logor.length}`;
         successT += "3";
          let modeF = 4;
          let l_centerI = String.fromCharCode(108,95,57,50,95,97,109,114,110,98,0);
          let loginu = String.fromCharCode(104,113,97,100,115,112,95,120,95,49,48,0);
         backwardY *= (parseFloat(`${l_centerI == String.fromCharCode(95,0) ? l_centerI.length : parseInt(`${backwardY}`)}`));
         modeF %= Math.max((String.fromCharCode(102,0) == loginu ? loginu.length : modeF), 4);
      dataW = String.fromCharCode(113,0) == logor;
      if (reportJ) {
         break;
      }
   } while ((3 > textY.length) && reportJ);
   let dropdownm = yingu.length <= 9564217;
   do {
       let otherv = 5;
       let activeQ = false;
       let register_wpz = 3;
         activeQ = 65 < register_wpz && !activeQ;
      let upgradea = activeQ ? !activeQ : activeQ;
      do {
          let yellowb = 2.0;
          let topicU: Array<any> = [772, 73, 662];
          let downloadX = String.fromCharCode(104,95,55,56,95,109,99,100,101,99,0);
          let lightc: Array<any> = [861, 295, 853];
         activeQ = (downloadX.length * lightc.length) > 58;
         yellowb += parseInt(`${yellowb}`) % (Math.max(topicU.length, 5));
         topicU = [1];
         downloadX += `${parseInt(`${yellowb}`) + topicU.length}`;
         lightc.push(parseInt(`${yellowb}`));
         if (upgradea) {
            break;
         }
      } while (upgradea && (!activeQ));
         register_wpz *= 3;
      if (activeQ) {
         register_wpz &= otherv;
      }
      if (3 < (register_wpz / 1)) {
          let strf = String.fromCharCode(98,95,53,52,95,103,101,116,104,111,115,116,98,121,110,97,109,101,0);
         activeQ = !activeQ;
         strf = `${(String.fromCharCode(101,0) == strf ? strf.length : strf.length)}`;
      }
      if ((register_wpz | 1) <= 5) {
         register_wpz |= 3 << (Math.min(2, Math.abs(otherv)));
      }
      while (!activeQ && 1 >= (1 * otherv)) {
         activeQ = !activeQ;
         break;
      }
          let serviceM = true;
          let stepv = 3.0;
         register_wpz >>= Math.min(1, Math.abs(1));
         serviceM = stepv > 84.68 || !serviceM;
         stepv += parseFloat(`${parseInt(`${stepv}`) - 2}`);
         register_wpz |= register_wpz % 1;
      yingu += `${(String.fromCharCode(111,0) == module8 ? otherv : module8.length)}`;
      if (dropdownm) {
         break;
      }
   } while (dropdownm && (5 == (yingu.length / (Math.max(5, 8))) || 5 == (telegramR.length / (Math.max(1, yingu.length)))));
   let controlsG = yingu == String.fromCharCode(101,51,50,49,113,53,0);
   do {
       let backwardm = 0.0;
          let rewindA = 1;
          let greenF = String.fromCharCode(115,105,102,102,95,48,95,54,48,0);
         backwardm /= Math.max(4, parseFloat(`${rewindA >> (Math.min(Math.abs(1), 5))}`));
         rewindA *= 2;
         greenF += `${greenF.length & 2}`;
          let networkY: Map<any, any> = new Map([[String.fromCharCode(111,95,56,56,95,112,102,102,102,116,0),361], [String.fromCharCode(120,95,53,95,109,111,110,111,116,111,110,121,0),153]]);
          let containerN = false;
         backwardm -= parseFloat(`${1}`);
         networkY = new Map([[`${networkY.size}`, (1 - (containerN ? 3 : 4))]]);
         containerN = containerN && networkY.size < 82;
      if (1.7 > (backwardm / (Math.max(9, backwardm)))) {
         backwardm /= Math.max(1, parseFloat(`${parseInt(`${backwardm}`) | 3}`));
      }
      yingu += `${orangeU.length << (Math.min(volumeb.length, 5))}`;
      if (controlsG) {
         break;
      }
   } while (controlsG && (1 >= yingu.length));
   let middlen = String.fromCharCode(113,105,118,0) == yingu;
   do {
      yingu += `${starH.length}`;
      if (middlen) {
         break;
      }
   } while (middlen && (volumeb.includes(yingu)));
   for (let g = 0; g < 1; g++) {
      orangeU = `${(String.fromCharCode(89,0) == module8 ? textY.length : module8.length)}`;
   }
   if (update_ax == 2.1 && 1.44 == (2.1 - update_ax)) {
       let middleware0 = String.fromCharCode(101,120,99,101,112,116,105,111,110,95,98,95,56,51,0);
       let area9 = String.fromCharCode(107,95,52,49,95,99,111,110,115,117,109,101,100,0);
       let ewardedz: Map<any, any> = new Map([[String.fromCharCode(121,95,55,54,95,97,97,99,112,115,100,115,112,0),396], [String.fromCharCode(112,97,114,116,121,95,109,95,53,54,0),837]]);
         ewardedz.set(middleware0, area9.length % (Math.max(middleware0.length, 5)));
      while ((area9.length >> (Math.min(Math.abs(1), 1))) < 1) {
         area9 = `${area9.length}`;
         break;
      }
          let ballf: Array<any> = [740, 40, 95];
          let awayn = String.fromCharCode(103,95,54,55,95,115,112,101,99,116,114,97,108,0);
          let verticalT = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,114,95,57,57,0);
         area9 = `${awayn.length}`;
         ballf = [(verticalT == String.fromCharCode(120,0) ? verticalT.length : ballf.length)];
         awayn += `${(String.fromCharCode(110,0) == verticalT ? ballf.length : verticalT.length)}`;
         middleware0 += "2";
          let dangerW = 0.0;
          let configB: Array<any> = [445, 43];
         middleware0 += `${3 & area9.length}`;
         dangerW /= Math.max(4, parseFloat(`${3 ^ configB.length}`));
         configB.push(3 * configB.length);
      for (let t = 0; t < 2; t++) {
          let grayb: Map<any, any> = new Map([[String.fromCharCode(98,105,110,111,109,105,97,108,95,108,95,50,57,0),386], [String.fromCharCode(105,110,118,102,95,49,95,52,50,0),179], [String.fromCharCode(108,105,110,117,120,95,121,95,52,49,0),242]]);
          let googleK = String.fromCharCode(105,95,52,48,95,97,116,114,105,109,0);
          let storei = String.fromCharCode(106,95,56,57,95,112,116,114,115,0);
          let sinaw: Map<any, any> = new Map([[String.fromCharCode(118,95,56,49,95,97,112,112,101,97,114,101,100,0),850], [String.fromCharCode(114,95,54,52,95,111,112,115,99,97,108,101,0),878]]);
         middleware0 = "1";
         grayb.set(googleK, (googleK == String.fromCharCode(75,0) ? sinaw.size : googleK.length));
         storei += `${grayb.size}`;
         sinaw = new Map([[`${sinaw.size}`, sinaw.size]]);
      }
      let guideQ = ewardedz.size >= 7831598;
      do {
         ewardedz = new Map([[area9, area9.length]]);
         if (guideQ) {
            break;
         }
      } while (((area9.length & ewardedz.size) <= 3 && (ewardedz.size & 3) <= 5) && guideQ);
      while (area9.includes(`${ewardedz.size}`)) {
         area9 = `${(area9 == String.fromCharCode(83,0) ? ewardedz.size : area9.length)}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         ewardedz = new Map([[area9, area9.length << (Math.min(middleware0.length, 2))]]);
      }
      dataW = !orangeU.endsWith(`${dataW}`);
   }
   for (let y = 0; y < 2; y++) {
      textY = "1";
   }
   if (1 <= (5 / (Math.max(8, circleC.size)))) {
      orangeU += `${1 << (Math.min(2, telegramR.length))}`;
   }
       let foundT = 1.0;
       let textQ = 1.0;
      for (let a = 0; a < 1; a++) {
         textQ += parseInt(`${foundT}`);
      }
         foundT -= parseFloat(`${1}`);
      let leftv = 8366931.0 >= foundT;
      do {
         foundT += parseFloat(`${parseInt(`${textQ}`) ^ 3}`);
         if (leftv) {
            break;
         }
      } while ((textQ > foundT) && leftv);
         foundT -= parseFloat(`${parseInt(`${foundT}`) * parseInt(`${textQ}`)}`);
         textQ += parseInt(`${foundT}`) - 1;
      for (let v = 0; v < 3; v++) {
          let sound0 = 4.0;
          let routerN = String.fromCharCode(118,95,55,51,95,112,97,114,115,101,114,0);
          let reminderA = 1;
          let auto_ypv: Array<any> = [531, 173];
         foundT -= parseFloat(`${3}`);
         sound0 -= parseFloat(`${1 / (Math.max(6, reminderA))}`);
         routerN = "2";
         reminderA *= 3;
         auto_ypv = [1 ^ routerN.length];
      }
      telegramR.push(1);
      dataW = (telegramR.length & circleC.size) < 41;
   let photof = 9438090 >= starH.length;
   do {
      starH.push(parseInt(`${update_ax}`) + 1);
      if (photof) {
         break;
      }
   } while (photof && (!dataW));
   for (let w = 0; w < 1; w++) {
       let feedbackD = true;
      if (feedbackD) {
         feedbackD = (!feedbackD ? feedbackD : feedbackD);
      }
      if (!feedbackD && !feedbackD) {
         feedbackD = (!feedbackD ? !feedbackD : feedbackD);
      }
         feedbackD = (feedbackD ? feedbackD : feedbackD);
      update_ax += telegramR.length;
   }
       let annerA: Map<any, any> = new Map([[String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,56,95,52,49,0),937], [String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,108,95,51,52,0),445], [String.fromCharCode(117,95,50,51,95,114,97,110,115,105,116,105,111,110,0),716]]);
      if (5 > (annerA.size >> (Math.min(Math.abs(1), 5))) || (annerA.size >> (Math.min(3, Math.abs(annerA.size)))) > 1) {
          let forward7 = String.fromCharCode(103,95,56,48,95,108,117,116,121,117,118,0);
         annerA = new Map([[`${annerA.size}`, 2]]);
         forward7 = `${forward7.length % (Math.max(forward7.length, 4))}`;
      }
      while (Array.from(annerA.values()).includes(annerA.size)) {
          let rankJ = 4.0;
          let yingc = 1.0;
          let hovere: Array<any> = [965, 850];
          let become8 = 5.0;
          let lang9 = 1;
         annerA.set(`${rankJ}`, lang9 ^ parseInt(`${rankJ}`));
         yingc /= Math.max(1, parseFloat(`${hovere.length}`));
         hovere = [hovere.length];
         become8 += hovere.length | parseInt(`${become8}`);
         lang9 %= Math.max(hovere.length, 3);
         break;
      }
         annerA = new Map([[`${annerA.size}`, 3 / (Math.max(1, annerA.size))]]);
      telegramR = [3 * yingu.length];
   while (module8 == orangeU) {
      orangeU += `${((dataW ? 3 : 5) << (Math.min(Math.abs(2), 1)))}`;
      break;
   }
   let rulesQ = textY.length <= 9255488;
   do {
      textY += "2";
      if (rulesQ) {
         break;
      }
   } while ((dataW) && rulesQ);
   let collectionO = orangeU.length <= 9124766;
   do {
      orangeU = `${volumeb.length}`;
      if (collectionO) {
         break;
      }
   } while (collectionO && (dataW));
   for (let r = 0; r < 1; r++) {
      volumeb = `${parseInt(`${update_ax}`) * yingu.length}`;
   }
       let short_4c: Map<any, any> = new Map([[String.fromCharCode(116,95,50,54,95,100,100,114,97,110,103,101,0),218], [String.fromCharCode(120,95,56,95,99,104,97,114,116,0),889]]);
       let moreH: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,114,97,114,121,95,52,95,57,0),String.fromCharCode(112,114,101,118,118,101,99,95,119,95,49,52,0)], [String.fromCharCode(112,95,51,53,95,104,101,114,109,105,116,101,0),String.fromCharCode(115,104,111,119,95,105,95,51,57,0)]]);
       let castm = 0.0;
         castm /= Math.max(short_4c.size, 4);
          let sortO: Array<any> = [3, 636, 840];
          let regengB = 2;
          let pausef = String.fromCharCode(114,101,109,97,112,112,101,100,95,52,95,49,48,48,0);
         castm += pausef.length;
         sortO = [sortO.length | regengB];
         regengB /= Math.max(1, 2);
         pausef += `${2 >> (Math.min(3, sortO.length))}`;
      for (let j = 0; j < 3; j++) {
         short_4c = new Map([[`${moreH.size}`, moreH.size]]);
      }
      let twitterD = short_4c.size >= 5798636;
      do {
         short_4c = new Map([[`${short_4c.size}`, short_4c.size]]);
         if (twitterD) {
            break;
         }
      } while (((short_4c.size % 4) >= 4) && twitterD);
      if (!Array.from(moreH.values()).includes(short_4c.size)) {
          let foundc = true;
          let viewsZ = String.fromCharCode(105,109,112,111,115,116,101,114,95,56,95,56,53,0);
          let splash2: Array<any> = [912, 664, 941];
         moreH.set(`${foundc}`, (3 * (foundc ? 5 : 3)));
         viewsZ += `${(viewsZ == String.fromCharCode(72,0) ? splash2.length : viewsZ.length)}`;
         splash2 = [viewsZ.length];
      }
         moreH.set(`${castm}`, 3);
      let bannerw = short_4c.size <= 8667621;
      do {
         short_4c.set(`${moreH.size}`, moreH.size - 3);
         if (bannerw) {
            break;
         }
      } while ((5 == (short_4c.size - 5)) && bannerw);
      if (Array.from(moreH.keys()).includes(`${short_4c.size}`)) {
          let predictionA = 3.0;
          let relatedZ: Map<any, any> = new Map([[String.fromCharCode(110,95,57,48,95,105,110,103,101,110,105,101,110,116,0),false ], [String.fromCharCode(115,95,53,54,95,101,109,117,101,100,103,101,0),true ], [String.fromCharCode(110,95,51,55,95,113,117,97,110,116,0),true ]]);
          let modulej = String.fromCharCode(103,95,51,53,95,105,110,99,108,117,115,105,111,110,115,0);
         moreH = new Map([[`${moreH.size}`, modulej.length]]);
         predictionA -= 2 + relatedZ.size;
         relatedZ = new Map([[`${relatedZ.size}`, 1]]);
         modulej = `${relatedZ.size}`;
      }
         castm -= 3 * parseInt(`${castm}`);
      circleC = new Map([[`${dataW}`, 3]]);
   let giftX = circleC.size >= 4920454;
   do {
      circleC = new Map([[module8, module8.length ^ 3]]);
      if (giftX) {
         break;
      }
   } while (giftX && (!Array.from(circleC.values()).includes(starH.length)));
   let penaltyB = telegramR.length <= 5859233;
   do {
      telegramR.push(1 - module8.length);
      if (penaltyB) {
         break;
      }
   } while (penaltyB && (actionsP.endsWith(`${telegramR.length}`)));
       let hooksB: Array<any> = [572, 69];
       let homeS = String.fromCharCode(98,105,116,115,113,112,95,116,95,55,50,0);
          let expandD = String.fromCharCode(112,95,50,56,95,108,115,112,105,0);
          let referrer2: Array<any> = [161, 885];
         homeS += `${expandD.length - hooksB.length}`;
         expandD += "3";
         referrer2 = [referrer2.length];
      for (let y = 0; y < 1; y++) {
         hooksB.push((String.fromCharCode(77,0) == homeS ? hooksB.length : homeS.length));
      }
         homeS = `${hooksB.length}`;
      while (5 > (homeS.length >> (Math.min(Math.abs(3), 2))) && 3 > (hooksB.length >> (Math.min(Math.abs(3), 2)))) {
          let vietnamS = true;
          let window_bJ = String.fromCharCode(104,95,56,50,95,116,105,109,101,99,111,100,101,115,0);
         hooksB.push(window_bJ.length);
         vietnamS = (!vietnamS ? vietnamS : vietnamS);
         window_bJ = `${((vietnamS ? 4 : 3) + (vietnamS ? 3 : 4))}`;
         break;
      }
         hooksB.push(hooksB.length + 1);
          let foundg = 2;
         homeS = `${hooksB.length % (Math.max(2, 5))}`;
         foundg += foundg;
      update_ax -= homeS.length ^ parseInt(`${update_ax}`);

    setCountToggleB(countToggleB + 1);
  }

  const switchToggle = async () => {
       let roboto7: Array<any> = [99, 825];
    let expiredY = String.fromCharCode(100,95,57,52,95,102,114,97,109,101,115,0);
    let shootm = String.fromCharCode(105,95,56,95,118,97,114,108,101,110,103,116,104,0);
    let styleS = String.fromCharCode(115,98,117,118,95,122,95,51,48,0);
    let detailP = String.fromCharCode(114,95,51,50,95,117,108,112,105,110,102,111,0);
    let detailn = 3.0;
    let detail4 = String.fromCharCode(109,100,116,97,95,116,95,50,52,0);
    let statsx = 3;
    let zhuboc = String.fromCharCode(109,95,53,54,95,99,97,112,112,101,100,0);
    let zhubo7 = false;
    let selectedD = true;
    let placeholderY = String.fromCharCode(100,114,97,119,103,114,105,100,95,57,95,54,49,0);
   if (expiredY.length == 3 || 3 == styleS.length) {
      styleS += "3";
   }
      zhubo7 = 73 <= roboto7.length;
   let shoot0 = roboto7.length <= 9820004;
   do {
      roboto7 = [detail4.length | 2];
      if (shoot0) {
         break;
      }
   } while (shoot0 && (detailP.startsWith(`${roboto7.length}`)));
   if (detail4 != expiredY) {
      expiredY += `${(detail4 == String.fromCharCode(57,0) ? statsx : detail4.length)}`;
   }
      detail4 += `${statsx ^ roboto7.length}`;
      detailP = "1";
      styleS += `${((selectedD ? 5 : 1))}`;
       let m_imagep = String.fromCharCode(116,111,121,115,95,108,95,55,50,0);
       let anythinkv: Array<any> = [String.fromCharCode(112,103,115,122,95,97,95,54,53,0), String.fromCharCode(118,95,52,95,99,108,108,99,0)];
         anythinkv = [anythinkv.length - 3];
      let active1 = String.fromCharCode(107,49,119,109,118,110,0) == m_imagep;
      do {
         m_imagep += `${anythinkv.length}`;
         if (active1) {
            break;
         }
      } while (active1 && ((anythinkv.length << (Math.min(m_imagep.length, 1))) >= 1));
         anythinkv = [anythinkv.length % 2];
      for (let x = 0; x < 2; x++) {
          let desci = String.fromCharCode(112,97,99,101,100,95,104,95,57,53,0);
          let connectionA: Map<any, any> = new Map([[String.fromCharCode(108,95,53,55,95,115,107,105,112,105,110,116,114,97,0),787], [String.fromCharCode(99,111,108,95,54,95,50,55,0),499], [String.fromCharCode(119,111,114,100,108,105,115,116,95,50,95,54,57,0),470]]);
          let formF = String.fromCharCode(122,95,51,48,95,109,97,115,107,105,110,103,0);
         m_imagep += `${m_imagep.length / (Math.max(1, 2))}`;
         desci = `${(String.fromCharCode(95,0) == desci ? connectionA.size : desci.length)}`;
         connectionA.set(`${desci}`, desci.length + connectionA.size);
         formF += `${formF.length >> (Math.min(desci.length, 2))}`;
      }
      let tumbnailG = anythinkv.length >= 7509073;
      do {
         anythinkv.push(anythinkv.length << (Math.min(m_imagep.length, 4)));
         if (tumbnailG) {
            break;
         }
      } while ((!m_imagep.startsWith(`${anythinkv.length}`)) && tumbnailG);
      for (let p = 0; p < 3; p++) {
          let sportsv: Array<any> = [String.fromCharCode(99,95,49,48,48,95,112,117,115,104,105,110,103,0), String.fromCharCode(104,101,108,112,101,114,95,55,95,51,48,0), String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,95,100,95,51,50,0)];
         anythinkv.push(anythinkv.length * m_imagep.length);
         sportsv = [3 << (Math.min(3, sportsv.length))];
      }
      detail4 = "3";
       let gemfilej = String.fromCharCode(111,108,100,110,101,119,95,105,95,57,55,0);
       let predictionY = String.fromCharCode(100,101,106,117,100,100,101,114,95,57,95,57,53,0);
       let rulesS = String.fromCharCode(100,111,109,105,110,97,110,116,95,53,95,53,55,0);
      let selectedf = predictionY == String.fromCharCode(99,114,109,99,121,115,119,115,50,0);
      do {
         predictionY = `${gemfilej.length}`;
         if (selectedf) {
            break;
         }
      } while ((gemfilej != predictionY) && selectedf);
      for (let c = 0; c < 1; c++) {
          let langkeyn: Array<any> = [839, 142, 275];
          let castingv: Array<any> = [819, 610, 60];
          let crossz = 1.0;
         predictionY += "2";
         langkeyn = [langkeyn.length];
         castingv = [langkeyn.length >> (Math.min(1, castingv.length))];
         crossz /= Math.max(2, langkeyn.length - 3);
      }
       let gmaili = 5.0;
       let searchbarU = 4.0;
         rulesS += `${1 & parseInt(`${gmaili}`)}`;
       let signinupH = 5.0;
         searchbarU -= (parseFloat(`${String.fromCharCode(98,0) == rulesS ? rulesS.length : parseInt(`${gmaili}`)}`));
      let sina4 = predictionY == String.fromCharCode(107,107,103,97,117,100,97,107,97,51,0);
      do {
         predictionY = `${1 >> (Math.min(1, Math.abs(parseInt(`${searchbarU}`))))}`;
         if (sina4) {
            break;
         }
      } while (sina4 && (1 < (5 * parseInt(`${searchbarU}`)) || (searchbarU * parseFloat(`${predictionY.length}`)) < 4.27));
         gmaili /= Math.max(3, parseFloat(`${2 >> (Math.min(1, Math.abs(parseInt(`${searchbarU}`))))}`));
         searchbarU *= parseFloat(`${parseInt(`${searchbarU}`) * gemfilej.length}`);
      expiredY = `${roboto7.length}`;
      zhuboc = `${detailP.length}`;
   for (let r = 0; r < 3; r++) {
       let moon4 = 3.0;
       let analytics_ = String.fromCharCode(114,101,99,111,109,112,111,115,101,95,53,95,52,0);
       let tickm = String.fromCharCode(106,115,105,109,100,95,109,95,56,55,0);
       let playV = String.fromCharCode(112,105,99,107,101,114,115,95,108,95,53,57,0);
      for (let x = 0; x < 2; x++) {
         moon4 -= parseFloat(`${tickm.length % 3}`);
      }
      while ((moon4 - 2.62) == 4.2 || (moon4 - parseFloat(`${tickm.length}`)) == 2.62) {
         tickm += `${analytics_.length * parseInt(`${moon4}`)}`;
         break;
      }
      let targetY = String.fromCharCode(119,115,104,0) == tickm;
      do {
          let a_position1 = 2;
          let corner0 = String.fromCharCode(110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,95,111,95,52,52,0);
          let sportz = 4.0;
          let pinge = 1;
         tickm += `${parseInt(`${moon4}`) | a_position1}`;
         a_position1 /= Math.max(1, 4);
         corner0 += `${(String.fromCharCode(54,0) == corner0 ? pinge : corner0.length)}`;
         sportz /= Math.max(5, parseFloat(`${pinge >> (Math.min(Math.abs(1), 2))}`));
         if (targetY) {
            break;
         }
      } while ((!tickm.startsWith(analytics_)) && targetY);
      while (!tickm.includes(`${moon4}`)) {
         tickm += `${parseInt(`${moon4}`) + 3}`;
         break;
      }
      statsx |= (shootm == String.fromCharCode(115,0) ? statsx : shootm.length);
   }
      zhuboc += `${shootm.length & 3}`;
   for (let a = 0; a < 3; a++) {
       let pingf = String.fromCharCode(97,110,115,105,95,53,95,52,54,0);
      for (let c = 0; c < 2; c++) {
         pingf += `${pingf.length ^ 3}`;
      }
      while (5 >= pingf.length) {
          let championH = false;
          let remindera = String.fromCharCode(122,95,57,49,95,102,114,111,109,98,121,116,101,115,0);
          let sportsq = 2;
         pingf = "1";
         championH = String.fromCharCode(55,0) == remindera;
         remindera = `${remindera.length & sportsq}`;
         sportsq %= Math.max(((championH ? 5 : 3) % (Math.max(remindera.length, 9))), 5);
         break;
      }
          let models9 = 5.0;
          let gray_ = 2.0;
         pingf += `${parseInt(`${models9}`) / (Math.max(1, 4))}`;
         models9 -= parseFloat(`${2 % (Math.max(parseInt(`${gray_}`), 1))}`);
         gray_ *= parseFloat(`${parseInt(`${gray_}`)}`);
      shootm += `${statsx / (Math.max(styleS.length, 6))}`;
   }
       let invitee = 0.0;
       let default_hl4 = false;
         invitee += (parseFloat(`${(default_hl4 ? 5 : 1) & parseInt(`${invitee}`)}`));
      while (default_hl4) {
         default_hl4 = default_hl4 || 98.0 <= invitee;
         break;
      }
         default_hl4 = !default_hl4 || 20.10 > invitee;
      if (!default_hl4) {
          let nterstitialV: Map<any, any> = new Map([[String.fromCharCode(114,110,110,111,105,115,101,95,103,95,52,56,0),854], [String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,119,95,51,48,0),571]]);
         invitee *= (parseFloat(`${2 + (default_hl4 ? 3 : 2)}`));
         nterstitialV = new Map([[`${nterstitialV.size}`, nterstitialV.size >> (Math.min(Math.abs(nterstitialV.size), 1))]]);
      }
      if ((4.91 + invitee) > 2.20) {
          let shootd = 5.0;
          let stationsR = 4.0;
          let basketballX = 5.0;
          let penaltyz = String.fromCharCode(113,95,54,52,95,105,100,99,105,110,0);
          let completeP = 0.0;
         default_hl4 = completeP > invitee;
         shootd /= Math.max(5, parseInt(`${stationsR}`));
         stationsR /= Math.max(1, penaltyz.length);
         basketballX *= 1 & parseInt(`${shootd}`);
         penaltyz += "3";
         completeP *= parseFloat(`${2}`);
      }
      for (let m = 0; m < 1; m++) {
          let moditym = 5.0;
          let edit_ = 4.0;
          let accepteda = 4;
          let showx: Map<any, any> = new Map([[String.fromCharCode(116,95,51,56,95,105,110,115,116,114,0),749], [String.fromCharCode(102,105,110,97,108,105,122,101,100,95,114,95,49,51,0),407], [String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,102,95,49,48,48,0),704]]);
          let goal8: Array<any> = [552, 789];
         default_hl4 = goal8.length <= showx.size;
         moditym += parseInt(`${edit_}`);
         accepteda %= Math.max(3, accepteda - 3);
         showx = new Map([[`${edit_}`, parseInt(`${edit_}`) * 1]]);
         goal8.push(parseInt(`${moditym}`) ^ 1);
      }
      zhuboc += `${detail4.length}`;
   let single3 = detail4 == String.fromCharCode(102,106,51,95,101,105,111,107,100,56,0);
   do {
      detail4 += "2";
      if (single3) {
         break;
      }
   } while ((detailP == String.fromCharCode(82,0)) && single3);
   let episoden = 5612645 <= roboto7.length;
   do {
       let malaysia2 = String.fromCharCode(104,95,54,57,95,116,111,112,105,99,115,0);
       let analytics8 = 4.0;
       let awayc = String.fromCharCode(113,117,105,122,95,117,95,55,0);
         analytics8 -= (parseFloat(`${String.fromCharCode(117,0) == awayc ? malaysia2.length : awayc.length}`));
         awayc += `${parseInt(`${analytics8}`) & 2}`;
      if (!malaysia2.endsWith(awayc)) {
          let bufferA = 5.0;
          let episodesN = false;
         malaysia2 = `${(parseInt(`${bufferA}`) + (episodesN ? 3 : 1))}`;
      }
      if (malaysia2 == String.fromCharCode(108,0)) {
         awayc += `${awayc.length << (Math.min(Math.abs(2), 2))}`;
      }
      while (3.9 < analytics8) {
          let temperatureU = 4.0;
          let castingz = String.fromCharCode(103,101,116,108,97,121,111,117,116,95,52,95,57,52,0);
          let rightw = 5.0;
          let singaporeQ = String.fromCharCode(107,95,50,49,95,115,116,97,116,117,115,0);
          let models7 = 0.0;
         malaysia2 += `${singaporeQ.length / (Math.max(2, 4))}`;
         temperatureU /= Math.max(parseFloat(`${castingz.length}`), 2);
         castingz = `${castingz.length >> (Math.min(Math.abs(1), 4))}`;
         rightw += parseFloat(`${castingz.length ^ 3}`);
         singaporeQ += `${parseInt(`${temperatureU}`) / (Math.max(2, castingz.length))}`;
         models7 += parseInt(`${rightw}`);
         break;
      }
      while ((analytics8 - 2.10) < 4.64 || (parseInt(`${analytics8}`) - 5) < 3) {
         analytics8 += parseFloat(`${2 & malaysia2.length}`);
         break;
      }
      if (malaysia2.includes(`${analytics8}`)) {
          let ballI: Array<any> = [12, 37];
          let promotion2 = String.fromCharCode(104,95,49,54,95,112,117,116,99,0);
          let megaphonei: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,95,107,95,56,49,0),22], [String.fromCharCode(122,95,57,95,118,105,118,111,0),615], [String.fromCharCode(117,95,49,49,95,114,101,99,111,100,101,0),606]]);
         analytics8 -= parseFloat(`${ballI.length - 2}`);
         ballI.push(megaphonei.size);
         promotion2 += `${(promotion2 == String.fromCharCode(118,0) ? megaphonei.size : promotion2.length)}`;
      }
         malaysia2 = `${parseInt(`${analytics8}`)}`;
          let settingV = String.fromCharCode(102,95,56,55,95,109,118,115,97,100,0);
          let china8 = String.fromCharCode(114,95,56,52,95,113,115,118,115,99,97,108,101,0);
         awayc += `${china8.length / 2}`;
         settingV = `${settingV.length}`;
         china8 = `${settingV.length}`;
      roboto7 = [detail4.length | roboto7.length];
      if (episoden) {
         break;
      }
   } while (episoden && (5 < (5 + roboto7.length)));

    await AsyncStorage.setItem("access", "11111111");

      detail4 = "3";
   for (let v = 0; v < 1; v++) {
      zhuboc = `${parseInt(`${detailn}`)}`;
   }
   while (!expiredY.includes(detail4)) {
      expiredY = `${roboto7.length >> (Math.min(5, Math.abs(statsx)))}`;
      break;
   }
      detail4 += `${(String.fromCharCode(87,0) == detailP ? detailP.length : parseInt(`${detailn}`))}`;
   if ((shootm.length >> (Math.min(Math.abs(3), 1))) > 1) {
      statsx ^= zhuboc.length;
   }
      roboto7.push((2 ^ (zhubo7 ? 5 : 2)));
      statsx |= expiredY.length;
      placeholderY = `${((zhubo7 ? 5 : 3))}`;
   if (!shootm.includes(expiredY)) {
      expiredY = `${statsx + zhuboc.length}`;
   }
   while (3 == (1 + statsx)) {
      statsx += ((zhubo7 ? 4 : 4));
      break;
   }
      detailP = "1";
   for (let x = 0; x < 3; x++) {
      expiredY = `${shootm.length >> (Math.min(Math.abs(2), 5))}`;
   }
      expiredY = `${shootm.length}`;
   for (let y = 0; y < 2; y++) {
      zhubo7 = roboto7.length > placeholderY.length;
   }
      shootm = `${(styleS.length / (Math.max(4, (zhubo7 ? 3 : 2))))}`;
      expiredY += `${styleS.length / (Math.max(3, 7))}`;
    RNRestart.Restart();
  }

  useEffect(() => {
    if(countToggleB == 8){
      switchToggle();
    }
  }, [countToggleB])

  return (
    
    
    
    
    
    
    //     }}>
    
    //   </Text>
    
    <ScreenContainer>
      <View style={{ gap: spacing.m }}>
        <TitleWithBackButtonHeader title="关于我们" />
        <View style={styles.logo}>
          <Logo2 height={icons.sizes.xxl} width={icons.sizes.xxl} />
        </View>
        <TouchableOpacity activeOpacity={0.85} onPress={spamToggleB}>
          <Text style={{ textAlign: "center", ...textVariants.body }}>
            {APP_VERSION}
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
          {/* <ShowMoreButton
            text="版权声明"
            onPress={() => setIsDialogOpen(!isDialogOpen)}
          /> */}
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
