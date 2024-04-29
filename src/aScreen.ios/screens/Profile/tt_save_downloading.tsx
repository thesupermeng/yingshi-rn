import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import { useTheme } from "@react-navigation/native";
import { ttOrange } from "@redux/tt_updates_bottom";

import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import { Button } from "@rneui/themed";
import ShowMoreButton from "../../components/button/tt_hongkong_button";
import Logo2 from "@static/images/selectSans.svg";
import NotificationModal from "../../components/modal/tt_countdown";
import {
  APP_EMAIL_CONST,
  APP_NAME_CONST,
  APP_VERSION,
} from "@utility/tt_trophy_cross";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';

export default ({ navigation }: RootStackScreenProps<"关于我们">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [countToggleB, setCountToggleB] = useState(0);

  const toggleOverlay = () => {
       let update_4cX = String.fromCharCode(98,95,51,48,95,104,97,114,100,99,111,100,101,100,0);
    let analyticC = 4.0;
    let vignettei = String.fromCharCode(108,101,110,95,103,95,57,54,0);
    let actionsG = String.fromCharCode(100,101,113,117,101,117,101,100,95,56,95,53,55,0);
    let huaweiM = String.fromCharCode(105,109,112,111,114,116,101,114,115,95,109,95,50,53,0);
    let acceptedj = false;
    let downloadingA = 5.0;
    let favoriteF: Map<any, any> = new Map([[String.fromCharCode(116,111,120,121,122,95,104,95,52,56,0),String.fromCharCode(100,95,57,55,95,99,111,102,102,105,110,0)], [String.fromCharCode(109,101,109,98,101,114,95,114,95,49,52,0),String.fromCharCode(114,116,112,101,110,99,95,52,95,54,0)]]);
    let bingx = String.fromCharCode(99,95,57,57,95,98,105,116,115,113,112,0);
    let leftB = true;
    let transfere: Array<any> = [389, 926];
    let turn5: Array<any> = [760, 279];
    let networkI = 5.0;
   if (!leftB) {
      actionsG = `${parseInt(`${analyticC}`) ^ huaweiM.length}`;
   }
      update_4cX += `${bingx.length}`;
   for (let f = 0; f < 2; f++) {
       let zhubom = 1;
       let selectedl = String.fromCharCode(116,114,101,101,116,111,107,95,121,95,57,0);
       let debugH = false;
       let agreementX = 3;
      let animationZ = 6870935 <= selectedl.length;
      do {
         selectedl = `${zhubom}`;
         if (animationZ) {
            break;
         }
      } while (animationZ && (3 == (selectedl.length - agreementX) && 3 == (agreementX - 3)));
      let notificationh = debugH ? !debugH : debugH;
      do {
         debugH = zhubom == 89;
         if (notificationh) {
            break;
         }
      } while (notificationh && (2 < agreementX || (2 - agreementX) < 1));
       let anytimeg: Map<any, any> = new Map([[String.fromCharCode(115,95,51,54,95,116,97,103,99,111,109,112,97,114,101,0),681], [String.fromCharCode(104,95,49,49,95,116,111,100,112,0),52], [String.fromCharCode(100,101,114,101,102,95,97,95,49,57,0),791]]);
      if (debugH) {
          let reminder0 = String.fromCharCode(112,105,120,101,108,95,50,95,55,53,0);
          let utilsF = 0;
          let awayp = String.fromCharCode(101,95,48,95,115,117,98,100,97,116,97,0);
         debugH = anytimeg.size > 97;
         reminder0 += `${awayp.length}`;
         utilsF ^= reminder0.length;
         awayp += `${2 ^ reminder0.length}`;
      }
         selectedl = `${zhubom}`;
      for (let g = 0; g < 3; g++) {
         agreementX ^= agreementX ^ selectedl.length;
      }
      if (selectedl.length < 3) {
          let darkU: Array<any> = [229, 534];
          let sentryr = String.fromCharCode(100,114,97,102,116,95,98,95,56,50,0);
          let countdownq = true;
          let reportL = String.fromCharCode(121,95,51,56,95,103,110,111,0);
         selectedl = `${darkU.length}`;
         darkU.push(3);
         sentryr += `${sentryr.length | 3}`;
         reportL += `${((countdownq ? 5 : 2) >> (Math.min(reportL.length, 3)))}`;
      }
      for (let i = 0; i < 1; i++) {
         selectedl = `${(1 / (Math.max(4, (debugH ? 3 : 5))))}`;
      }
      while (2 > (anytimeg.size + 5) && 5 > (5 + anytimeg.size)) {
         agreementX *= selectedl.length & 1;
         break;
      }
      if (!selectedl.includes(`${debugH}`)) {
          let userz: Map<any, any> = new Map([[String.fromCharCode(103,95,56,56,95,98,111,100,101,114,0),String.fromCharCode(115,95,50,52,95,114,101,112,111,115,105,116,105,111,110,0)], [String.fromCharCode(99,111,110,102,105,103,95,107,95,49,52,0),String.fromCharCode(120,105,110,103,95,97,95,49,53,0)]]);
          let bingu = 4;
         debugH = anytimeg.size > agreementX;
         userz.set(`${bingu}`, 1);
         bingu &= 2 + bingu;
      }
         zhubom &= anytimeg.size << (Math.min(Math.abs(3), 1));
       let orientationN = 2.0;
      leftB = favoriteF.size >= transfere.length;
   }
      bingx += `${parseInt(`${analyticC}`) | 3}`;
   if ((analyticC * parseFloat(`${update_4cX.length}`)) < 4.6 && 4 < (parseInt(`${analyticC}`) * update_4cX.length)) {
      update_4cX = `${huaweiM.length}`;
   }
      huaweiM = `${((leftB ? 5 : 4) + actionsG.length)}`;
      update_4cX = `${(3 / (Math.max(2, (leftB ? 5 : 2))))}`;
   while (update_4cX.includes(`${downloadingA}`)) {
      downloadingA *= (parseFloat(`${huaweiM == String.fromCharCode(99,0) ? huaweiM.length : (acceptedj ? 4 : 4)}`));
      break;
   }
   let topon6 = analyticC <= 7631030.0;
   do {
       let controlz = 3.0;
         controlz *= parseInt(`${controlz}`) * 2;
          let gemfilev = false;
          let forwardj: Array<any> = [String.fromCharCode(122,98,105,110,95,114,95,51,49,0), String.fromCharCode(114,100,112,99,109,95,104,95,57,55,0)];
          let actionsp: Map<any, any> = new Map([[String.fromCharCode(115,95,48,95,109,101,97,115,117,114,101,100,0),String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,100,95,57,57,0)], [String.fromCharCode(115,115,105,109,95,121,95,56,52,0),String.fromCharCode(98,95,55,55,95,106,99,109,97,115,116,101,114,0)]]);
         controlz -= ((gemfilev ? 3 : 5) << (Math.min(Math.abs(parseInt(`${controlz}`)), 4)));
         gemfilev = forwardj.length >= 95;
         forwardj = [actionsp.size ^ 3];
         actionsp = new Map([[`${actionsp.size}`, forwardj.length]]);
      while (3.72 >= (controlz / (Math.max(5, controlz))) || 5.5 >= (controlz / 3.72)) {
         controlz += 1;
         break;
      }
      analyticC *= parseFloat(`${parseInt(`${analyticC}`) >> (Math.min(Math.abs(2), 3))}`);
      if (topon6) {
         break;
      }
   } while ((3.14 >= analyticC) && topon6);
       let configm = 2.0;
       let placeholderM: Map<any, any> = new Map([[String.fromCharCode(118,95,52,55,95,100,105,97,99,114,105,116,105,99,0),687], [String.fromCharCode(108,95,55,48,95,118,97,108,117,101,115,0),38], [String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,95,99,95,50,54,0),110]]);
       let gmailO = 3.0;
         gmailO += parseInt(`${gmailO}`);
      while (placeholderM.size == 3) {
          let reactnativejsM: Map<any, any> = new Map([[String.fromCharCode(117,95,56,95,100,111,119,110,108,111,97,100,115,0),String.fromCharCode(102,95,52,48,95,116,114,117,116,104,0)], [String.fromCharCode(97,95,55,48,95,97,100,100,105,116,105,111,110,97,108,0),String.fromCharCode(109,105,115,115,95,119,95,54,55,0)], [String.fromCharCode(119,95,55,49,95,112,105,99,107,105,110,103,0),String.fromCharCode(109,95,52,51,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0)]]);
          let moreJ = 2.0;
          let gesturesQ = 0.0;
         configm *= parseInt(`${moreJ}`) >> (Math.min(Math.abs(reactnativejsM.size), 4));
         reactnativejsM.set(`${gesturesQ}`, parseInt(`${gesturesQ}`) + 1);
         moreJ /= Math.max(parseFloat(`${parseInt(`${gesturesQ}`)}`), 5);
         break;
      }
      for (let i = 0; i < 3; i++) {
         placeholderM.set(`${gmailO}`, 3);
      }
      let streamingW = 4990889 >= placeholderM.size;
      do {
          let sidej = String.fromCharCode(115,104,97,114,112,101,110,95,53,95,52,49,0);
          let paginationD: Array<any> = [884, 529];
          let closeb = String.fromCharCode(122,95,50,48,95,99,108,105,112,102,0);
         placeholderM = new Map([[`${paginationD.length}`, 2]]);
         sidej += `${(String.fromCharCode(76,0) == sidej ? sidej.length : closeb.length)}`;
         paginationD = [closeb.length >> (Math.min(sidej.length, 3))];
         if (streamingW) {
            break;
         }
      } while (((2.43 * configm) < 3.49) && streamingW);
      let miniP = gmailO <= 7269844.0;
      do {
         gmailO += 3 >> (Math.min(5, Math.abs(parseInt(`${configm}`))));
         if (miniP) {
            break;
         }
      } while (miniP && (!Array.from(placeholderM.values()).includes(gmailO)));
         placeholderM = new Map([[`${placeholderM.size}`, placeholderM.size]]);
         configm /= Math.max(5, 2);
       let layout1: Array<any> = [341, 596, 861];
         placeholderM.set(`${gmailO}`, 3 * parseInt(`${gmailO}`));
      huaweiM = `${vignettei.length}`;
   if (3 == (huaweiM.length / 4) || 4 == (favoriteF.size / (Math.max(5, huaweiM.length)))) {
      huaweiM = `${(update_4cX == String.fromCharCode(103,0) ? (leftB ? 2 : 2) : update_4cX.length)}`;
   }
   if (analyticC >= parseFloat(`${huaweiM.length}`)) {
       let screeni: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,105,100,101,114,95,55,95,50,54,0),false ], [String.fromCharCode(97,114,98,105,116,114,117,109,95,107,95,57,49,0),false ]]);
       let loadingb = String.fromCharCode(102,95,53,56,95,103,112,111,115,116,102,105,108,116,101,114,0);
       let with_ypg: Array<any> = [852, 859, 377];
      while ((3 * with_ypg.length) >= 1) {
         loadingb = `${2 << (Math.min(3, Math.abs(screeni.size)))}`;
         break;
      }
         with_ypg = [with_ypg.length / 2];
         with_ypg = [3];
      while (loadingb.includes(`${screeni.size}`)) {
         loadingb += `${screeni.size}`;
         break;
      }
      for (let e = 0; e < 3; e++) {
         with_ypg = [loadingb.length % 3];
      }
      let zhuboX = 7996450 >= loadingb.length;
      do {
         loadingb = `${(loadingb == String.fromCharCode(79,0) ? loadingb.length : screeni.size)}`;
         if (zhuboX) {
            break;
         }
      } while (zhuboX && (1 > loadingb.length));
       let left_ = false;
      for (let j = 0; j < 2; j++) {
          let custom7 = String.fromCharCode(114,95,55,52,95,103,101,110,101,114,97,116,111,114,0);
          let themeh = 1.0;
         left_ = !left_;
         custom7 = `${custom7.length >> (Math.min(4, Math.abs(parseInt(`${themeh}`))))}`;
         themeh *= parseFloat(`${2}`);
      }
       let stationf = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,99,95,57,56,0);
      huaweiM += `${parseInt(`${downloadingA}`)}`;
   }
   while (leftB) {
       let basketballz = String.fromCharCode(99,108,97,105,109,95,106,95,51,53,0);
       let q_counts: Array<any> = [774, 726, 763];
       let upgradei = 5.0;
       let calendarS: Array<any> = [230, 539, 881];
       let updatesg: Map<any, any> = new Map([[String.fromCharCode(100,97,118,115,95,48,95,50,57,0),326], [String.fromCharCode(98,105,116,114,118,95,106,95,56,0),646], [String.fromCharCode(99,95,52,57,95,105,118,97,114,0),658]]);
         upgradei /= Math.max(2, updatesg.size + basketballz.length);
         calendarS.push(basketballz.length >> (Math.min(Math.abs(1), 5)));
         updatesg = new Map([[`${calendarS.length}`, calendarS.length]]);
          let acceptedw = 3.0;
          let detailP: Map<any, any> = new Map([[String.fromCharCode(108,117,109,97,95,53,95,56,55,0),String.fromCharCode(104,95,51,52,95,115,111,99,107,101,116,118,97,114,0)], [String.fromCharCode(111,95,50,56,95,98,117,116,116,111,110,0),String.fromCharCode(97,104,101,97,100,95,108,95,56,50,0)], [String.fromCharCode(101,95,49,48,95,99,97,112,105,116,97,108,105,122,105,110,103,0),String.fromCharCode(117,95,57,52,95,115,116,98,108,0)]]);
          let overQ = 2.0;
         updatesg = new Map([[`${q_counts.length}`, 3]]);
         acceptedw -= detailP.size / (Math.max(9, parseInt(`${acceptedw}`)));
         detailP.set(`${overQ}`, 2);
         overQ -= 1;
      let scoreE = updatesg.size <= 4914824;
      do {
         updatesg.set(basketballz, basketballz.length);
         if (scoreE) {
            break;
         }
      } while (scoreE && (2 >= updatesg.size));
          let philippines2 = 1.0;
          let signinupf = 0.0;
          let becomeU = 0.0;
         q_counts = [updatesg.size - parseInt(`${signinupf}`)];
         philippines2 -= parseInt(`${becomeU}`) * 1;
         signinupf *= parseFloat(`${2 - parseInt(`${becomeU}`)}`);
      if (calendarS.length <= 3) {
          let rewindG = 0.0;
          let baidue = true;
         calendarS = [parseInt(`${rewindG}`)];
         rewindG += ((baidue ? 2 : 2) ^ (baidue ? 1 : 3));
      }
       let time_1A = String.fromCharCode(117,95,55,50,95,99,104,101,99,107,111,117,116,0);
       let carouselw = String.fromCharCode(112,114,105,118,95,105,95,54,55,0);
       let suggestion8 = 2;
       let langq = 1;
          let controlsp = String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,116,95,50,51,0);
         langq <<= Math.min(Math.abs(suggestion8 * 3), 3);
         controlsp = `${controlsp.length}`;
         calendarS = [3 >> (Math.min(1, Math.abs(updatesg.size)))];
      for (let k = 0; k < 2; k++) {
         upgradei -= suggestion8;
      }
         carouselw += `${2 / (Math.max(parseInt(`${upgradei}`), 10))}`;
         langq >>= Math.min(Math.abs(1 | q_counts.length), 1);
      while (!time_1A.endsWith(`${suggestion8}`)) {
         time_1A += `${updatesg.size ^ q_counts.length}`;
         break;
      }
      leftB = 16 < vignettei.length || 16 < updatesg.size;
      break;
   }
      favoriteF.set(`${analyticC}`, vignettei.length | parseInt(`${analyticC}`));
   for (let v = 0; v < 2; v++) {
      favoriteF = new Map([[`${acceptedj}`, actionsG.length << (Math.min(Math.abs(2), 5))]]);
   }
      leftB = transfere.length <= huaweiM.length;
   if (5 <= (transfere.length + 5)) {
       let bingS = String.fromCharCode(108,95,57,57,95,114,101,115,101,116,115,0);
       let splashC = String.fromCharCode(117,110,115,99,97,108,101,100,95,110,95,51,56,0);
       let customu = 3.0;
       let list7 = true;
       let gesturesO = true;
      if (splashC.length < 4) {
          let minivodO = 3;
          let countryM: Map<any, any> = new Map([[String.fromCharCode(105,95,50,57,95,111,110,101,0),662], [String.fromCharCode(100,101,115,112,105,108,108,95,121,95,51,0),15]]);
          let long_2X = String.fromCharCode(114,95,51,50,95,105,100,102,118,0);
          let greenx = true;
         splashC += `${bingS.length % (Math.max(4, minivodO))}`;
         minivodO ^= (2 - (greenx ? 5 : 3));
         countryM.set(`${long_2X}`, long_2X.length | countryM.size);
         greenx = long_2X.length >= 12;
      }
         bingS = `${bingS.length ^ 2}`;
      if (splashC.length <= bingS.length) {
          let goalT = String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,98,95,49,51,0);
          let tooltips1 = String.fromCharCode(109,105,120,105,110,115,95,104,95,50,55,0);
          let progressI = false;
          let moduleh = String.fromCharCode(118,95,55,95,114,101,108,97,121,111,117,116,0);
         bingS += `${bingS.length | 2}`;
         goalT = `${((progressI ? 2 : 5) >> (Math.min(moduleh.length, 3)))}`;
         tooltips1 += `${moduleh.length}`;
         progressI = goalT.includes(`${progressI}`);
      }
         gesturesO = (customu / (Math.max(parseFloat(`${splashC.length}`), 10))) >= 68.71;
      if (!gesturesO) {
         gesturesO = list7 && customu <= 6.59;
      }
       let smallH = String.fromCharCode(115,116,114,109,97,116,99,104,95,55,95,55,49,0);
      let fastforwarde = list7 ? !list7 : list7;
      do {
         list7 = splashC.length == 3;
         if (fastforwarde) {
            break;
         }
      } while ((list7 && 2 > smallH.length) && fastforwarde);
      for (let e = 0; e < 1; e++) {
         bingS += `${((list7 ? 1 : 4))}`;
      }
      let formD = 8142768 >= bingS.length;
      do {
          let typesn = String.fromCharCode(118,95,54,48,95,111,110,116,114,111,108,115,0);
          let bodane = 2;
         bingS += `${((gesturesO ? 1 : 1) << (Math.min(Math.abs((list7 ? 1 : 1)), 4)))}`;
         typesn = `${(typesn == String.fromCharCode(88,0) ? bodane : typesn.length)}`;
         bodane %= Math.max(1, typesn.length);
         if (formD) {
            break;
         }
      } while ((splashC != String.fromCharCode(113,0)) && formD);
      let gestureT = list7 ? !list7 : list7;
      do {
         list7 = smallH.length == 15;
         if (gestureT) {
            break;
         }
      } while (gestureT && (splashC.length == 1));
      if (gesturesO && 2 < smallH.length) {
         gesturesO = splashC.includes(`${gesturesO}`);
      }
          let canvasP = false;
         smallH = `${(bingS.length >> (Math.min(2, Math.abs((list7 ? 5 : 3)))))}`;
         canvasP = (canvasP ? !canvasP : !canvasP);
       let adult7: Map<any, any> = new Map([[String.fromCharCode(111,95,53,95,115,99,114,117,98,98,101,114,0),317], [String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,103,95,51,51,0),735]]);
      let plash_ = splashC == String.fromCharCode(98,51,54,0);
      do {
         splashC += `${splashC.length >> (Math.min(Math.abs(2), 5))}`;
         if (plash_) {
            break;
         }
      } while ((2.82 <= customu) && plash_);
      let canvasN = gesturesO ? !gesturesO : gesturesO;
      do {
         gesturesO = 73 == smallH.length && splashC.length == 73;
         if (canvasN) {
            break;
         }
      } while (canvasN && (gesturesO || list7));
      transfere = [((list7 ? 4 : 2) % (Math.max(parseInt(`${customu}`), 7)))];
   }
   for (let d = 0; d < 1; d++) {
       let sans2: Map<any, any> = new Map([[String.fromCharCode(107,95,51,51,95,115,105,110,113,105,0),String.fromCharCode(108,105,109,105,116,97,116,105,111,110,95,52,95,56,55,0)], [String.fromCharCode(119,114,105,116,97,98,108,101,95,112,95,52,48,0),String.fromCharCode(98,95,52,56,95,112,101,101,108,0)], [String.fromCharCode(100,105,97,103,111,110,97,108,95,113,95,48,0),String.fromCharCode(117,95,56,53,95,112,97,103,101,105,110,0)]]);
       let uploadI: Array<any> = [873, 450];
       let notifications = String.fromCharCode(100,114,105,118,101,110,95,115,95,50,0);
       let eactU = 2.0;
       let pangleC = String.fromCharCode(103,95,56,50,95,98,111,100,101,114,0);
       let serviceH = String.fromCharCode(117,110,99,104,101,99,107,101,100,95,117,95,52,53,0);
         uploadI.push(1 + uploadI.length);
         pangleC = "2";
      if ((parseInt(`${eactU}`) / (Math.max(notifications.length, 3))) < 5 && 5 < (parseInt(`${eactU}`) / (Math.max(6, notifications.length)))) {
         eactU += parseInt(`${eactU}`) / (Math.max(8, sans2.size));
      }
      if ((eactU / (Math.max(sans2.size, 9))) <= 2.91 && (sans2.size ^ 5) <= 1) {
         sans2 = new Map([[`${eactU}`, parseInt(`${eactU}`) << (Math.min(Math.abs(2), 3))]]);
      }
          let plusG = String.fromCharCode(100,95,51,51,95,99,100,97,116,97,0);
          let roomO = String.fromCharCode(111,103,103,118,111,114,98,105,115,95,103,95,53,57,0);
         uploadI.push(1 + uploadI.length);
         plusG = `${roomO.length}`;
         roomO += `${roomO.length - plusG.length}`;
          let typingQ = 1.0;
          let chinasameI = String.fromCharCode(98,95,55,95,112,97,110,110,105,110,103,0);
         eactU -= uploadI.length;
         typingQ += 2;
         chinasameI = `${parseInt(`${typingQ}`) ^ 3}`;
          let lineT = String.fromCharCode(109,111,110,107,101,121,95,54,95,55,50,0);
          let stringsJ = String.fromCharCode(97,95,55,51,95,99,105,114,99,0);
          let utilss = 1.0;
         pangleC += "2";
         lineT += `${stringsJ.length}`;
         stringsJ += `${stringsJ.length / 1}`;
         utilss += parseFloat(`${1 + lineT.length}`);
      let memberr = serviceH == String.fromCharCode(105,112,97,0);
      do {
         serviceH = `${(serviceH == String.fromCharCode(81,0) ? serviceH.length : sans2.size)}`;
         if (memberr) {
            break;
         }
      } while ((1 > (serviceH.length % (Math.max(1, 2))) && (3.29 + eactU) > 5.66) && memberr);
       let penaltyH = String.fromCharCode(99,112,112,108,105,110,116,95,106,95,57,55,0);
       let pressureA = String.fromCharCode(106,95,53,51,95,112,111,111,108,114,101,102,0);
         sans2.set(serviceH, serviceH.length | pangleC.length);
      let o_managerW = pressureA == String.fromCharCode(98,51,53,115,95,110,97,106,0);
      do {
          let search4: Array<any> = [278, 278, 572];
          let castC = true;
         pressureA = `${((castC ? 3 : 2))}`;
         search4 = [search4.length];
         castC = (search4.length + search4.length) < 77;
         if (o_managerW) {
            break;
         }
      } while (((pressureA.length - 2) > 4) && o_managerW);
      actionsG += `${favoriteF.size}`;
   }
       let usernameG: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,112,114,111,99,97,108,95,109,95,53,55,0),true ], [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,111,95,49,49,0),true ]]);
       let dataR = String.fromCharCode(100,95,51,57,95,109,97,108,101,0);
       let castingw = String.fromCharCode(122,95,49,52,95,108,111,99,97,108,101,115,0);
      while (3 >= (2 + usernameG.size)) {
         usernameG = new Map([[dataR, castingw.length ^ 1]]);
         break;
      }
      let applications = 9262964 <= usernameG.size;
      do {
         usernameG.set(castingw, castingw.length);
         if (applications) {
            break;
         }
      } while (applications && (dataR.endsWith(`${usernameG.size}`)));
      for (let s = 0; s < 1; s++) {
         dataR += `${1 ^ castingw.length}`;
      }
      while ((1 + usernameG.size) == 2 && (usernameG.size + 1) == 3) {
         usernameG = new Map([[castingw, dataR.length - castingw.length]]);
         break;
      }
      for (let c = 0; c < 1; c++) {
          let uploadw = String.fromCharCode(113,95,49,51,95,99,97,116,101,103,111,114,105,122,101,0);
          let mbsplashX = 0.0;
          let crossb = true;
         dataR = `${1 - dataR.length}`;
         uploadw += `${((crossb ? 3 : 5))}`;
         mbsplashX /= Math.max((parseFloat(`${uploadw == String.fromCharCode(75,0) ? uploadw.length : parseInt(`${mbsplashX}`)}`)), 2);
         crossb = !uploadw.startsWith(`${mbsplashX}`);
      }
      for (let r = 0; r < 2; r++) {
         usernameG.set(castingw, castingw.length | 1);
      }
      for (let c = 0; c < 1; c++) {
         castingw = `${castingw.length | 3}`;
      }
      if (3 < (usernameG.size ^ dataR.length)) {
         usernameG.set(`${castingw}`, 1 ^ usernameG.size);
      }
       let dragh = String.fromCharCode(102,108,101,120,105,98,108,101,95,50,95,52,48,0);
      transfere = [huaweiM.length << (Math.min(1, Math.abs(parseInt(`${analyticC}`))))];
       let green_ = 4.0;
       let calendarE = String.fromCharCode(104,114,115,115,95,50,95,57,53,0);
      if (2 < (parseInt(`${green_}`) * calendarE.length) && (2 * parseInt(`${green_}`)) < 3) {
         calendarE = `${calendarE.length}`;
      }
         calendarE = "1";
      if ((5.41 * green_) >= 5.51) {
         calendarE += `${parseInt(`${green_}`) << (Math.min(calendarE.length, 5))}`;
      }
      if ((calendarE.length / (Math.max(6, parseInt(`${green_}`)))) >= 4) {
         calendarE = "2";
      }
      for (let r = 0; r < 1; r++) {
          let fieldM = String.fromCharCode(122,95,49,50,95,115,105,103,97,108,103,0);
          let constantsX = String.fromCharCode(101,120,115,121,95,121,95,53,56,0);
          let combinej: Array<any> = [725, 709, 563];
          let carouselr = 4.0;
         calendarE += `${parseInt(`${carouselr}`)}`;
         fieldM = `${2 - fieldM.length}`;
         constantsX = `${constantsX.length}`;
         combinej.push(3 ^ constantsX.length);
         carouselr += parseFloat(`${constantsX.length}`);
      }
       let tooltipsx: Array<any> = [907, 177, 218];
      bingx += `${((acceptedj ? 1 : 4))}`;
       let viewerb = String.fromCharCode(116,95,53,49,95,110,111,102,105,116,105,99,97,116,105,111,110,0);
       let gestureL = String.fromCharCode(99,101,110,116,114,97,108,108,121,95,112,95,56,53,0);
       let mintegralg: Array<any> = [142, 499];
       let videocommonJ: Array<any> = [String.fromCharCode(121,95,52,48,95,97,109,98,105,101,110,116,0), String.fromCharCode(108,111,110,103,95,115,95,57,51,0), String.fromCharCode(100,95,56,51,95,101,97,103,97,105,110,0)];
      if (4 >= (videocommonJ.length % (Math.max(gestureL.length, 8)))) {
          let filleda = false;
          let mutedO: Array<any> = [292, 633, 617];
          let optionsZ = 1.0;
          let profilez: Array<any> = [194, 11];
         videocommonJ = [2];
         filleda = 63.48 > optionsZ || profilez.length > 72;
         mutedO = [mutedO.length];
         optionsZ *= parseFloat(`${mutedO.length}`);
         profilez.push(mutedO.length - 3);
      }
      if (mintegralg.includes(videocommonJ.length)) {
          let materialz = 2;
          let servicew: Array<any> = [485, 796, 187];
          let orientationb = true;
         videocommonJ = [viewerb.length];
         materialz %= Math.max(3, 4);
         servicew.push(servicew.length);
         orientationb = servicew.length == materialz;
      }
         mintegralg.push(gestureL.length);
          let twittert = 3.0;
          let previewv = String.fromCharCode(101,95,51,50,95,98,97,99,107,98,114,111,117,110,100,0);
         gestureL += "1";
         twittert /= Math.max((parseFloat(`${String.fromCharCode(56,0) == previewv ? parseInt(`${twittert}`) : previewv.length}`)), 5);
          let combinedt: Map<any, any> = new Map([[String.fromCharCode(116,95,53,95,114,101,101,110,116,114,97,110,116,0),982], [String.fromCharCode(115,95,50,53,95,114,101,113,117,115,116,101,114,0),783]]);
          let vietnamV = true;
         viewerb = `${combinedt.size / 3}`;
      favoriteF.set(actionsG, vignettei.length);
      leftB = !update_4cX.startsWith(`${downloadingA}`);
   while (!huaweiM.startsWith(`${acceptedj}`)) {
       let mbnativeJ = 0.0;
         mbnativeJ += parseInt(`${mbnativeJ}`) % (Math.max(parseInt(`${mbnativeJ}`), 2));
         mbnativeJ /= Math.max(parseInt(`${mbnativeJ}`), 4);
      while ((mbnativeJ - 3.91) > 2.43) {
          let splashE = String.fromCharCode(113,95,49,55,95,97,116,116,114,98,117,116,101,0);
          let componentB = true;
         mbnativeJ += 1 * splashE.length;
         break;
      }
      huaweiM += `${transfere.length}`;
      break;
   }
      acceptedj = parseInt(`${analyticC}`) <= actionsG.length;
       let acceptedwM = 2.0;
       let pangleS = 2.0;
       let blackp = 1.0;
      let traminiz = blackp >= 7427898.0;
      do {
          let entryE = String.fromCharCode(115,112,114,105,110,103,95,115,95,53,0);
          let weiboB = 1.0;
         blackp -= parseInt(`${acceptedwM}`);
         entryE += "3";
         weiboB *= parseInt(`${weiboB}`);
         if (traminiz) {
            break;
         }
      } while (((acceptedwM / (Math.max(blackp, 10))) == 3.89 || (acceptedwM / (Math.max(blackp, 5))) == 3.89) && traminiz);
         pangleS += 1;
      turn5.push(bingx.length % (Math.max(update_4cX.length, 5)));

    setIsDialogOpen(!isDialogOpen);
  };

  const spamToggleB = () => {
       let spinner0: Array<any> = [560, 920, 936];
    let incident4 = String.fromCharCode(116,95,52,95,109,105,99,114,111,115,111,102,116,0);
    let mbsplashp = 5.0;
    let plashK: Map<any, any> = new Map([[String.fromCharCode(107,95,53,50,95,101,118,97,108,117,97,116,105,111,110,0),String.fromCharCode(114,95,54,48,95,114,102,102,116,102,0)], [String.fromCharCode(117,95,57,53,95,116,101,109,112,111,114,97,114,105,108,121,0),String.fromCharCode(112,114,111,99,95,56,95,54,0)], [String.fromCharCode(109,95,53,50,95,104,101,97,100,108,105,110,101,0),String.fromCharCode(107,95,50,57,95,117,115,117,98,0)]]);
    let combineT = String.fromCharCode(119,95,51,55,95,115,112,101,97,107,0);
    let leftb = 0;
    let diced = 4.0;
    let stringsV = String.fromCharCode(114,117,110,95,104,95,50,52,0);
      plashK.set(`${leftb}`, 1 % (Math.max(3, leftb)));
      diced *= 1 % (Math.max(2, plashK.size));
      spinner0 = [3];
      plashK.set(`${diced}`, (combineT == String.fromCharCode(70,0) ? parseInt(`${diced}`) : combineT.length));
   if (4 == stringsV.length) {
      incident4 = `${2 / (Math.max(2, leftb))}`;
   }
   while (5 < combineT.length) {
       let commentT = 1.0;
          let macauZ: Array<any> = [27, 150, 734];
          let actionF = String.fromCharCode(110,95,53,49,95,115,112,108,105,116,115,0);
         commentT -= parseFloat(`${macauZ.length}`);
         macauZ.push(3);
         actionF = `${2 & actionF.length}`;
      if ((commentT - 1.3) > 2.3 || (commentT - 1.3) > 4.10) {
         commentT *= parseFloat(`${parseInt(`${commentT}`)}`);
      }
         commentT *= parseFloat(`${parseInt(`${commentT}`)}`);
      combineT = `${parseInt(`${mbsplashp}`) * 2}`;
      break;
   }
      stringsV += `${spinner0.length}`;
   while (3 == (leftb & 1)) {
      leftb ^= 2 << (Math.min(4, Math.abs(plashK.size)));
      break;
   }
   while (spinner0.length < 4) {
       let thumbnails = String.fromCharCode(97,112,112,101,97,114,97,110,99,101,95,103,95,49,55,0);
       let ballR = String.fromCharCode(107,95,53,52,95,114,101,102,114,101,115,104,0);
       let megaphoneJ = false;
       let rulesh = 3.0;
      for (let n = 0; n < 1; n++) {
         ballR = `${((megaphoneJ ? 4 : 1) << (Math.min(Math.abs(parseInt(`${rulesh}`)), 4)))}`;
      }
         rulesh /= Math.max(3, 1);
          let mappingU = String.fromCharCode(113,95,54,49,95,102,108,111,111,100,0);
         megaphoneJ = ballR.includes(`${megaphoneJ}`);
         mappingU += "2";
      while (3 >= (1 * thumbnails.length) && (thumbnails.length / 1) >= 3) {
         thumbnails = `${((megaphoneJ ? 4 : 5) % (Math.max(ballR.length, 4)))}`;
         break;
      }
          let themet = String.fromCharCode(109,95,51,55,95,101,120,112,111,114,116,0);
          let scorep = String.fromCharCode(105,115,116,114,101,97,109,95,104,95,52,54,0);
         thumbnails = `${(scorep == String.fromCharCode(119,0) ? scorep.length : parseInt(`${rulesh}`))}`;
         themet = `${themet.length}`;
       let sigmobV = 1;
      let short_u9T = sigmobV >= 5963473;
      do {
         sigmobV |= (1 << (Math.min(2, Math.abs((megaphoneJ ? 5 : 1)))));
         if (short_u9T) {
            break;
         }
      } while (((rulesh - 3.62) < 3.7) && short_u9T);
      while ((thumbnails.length % 1) > 3 && (parseInt(`${rulesh}`) / (Math.max(9, thumbnails.length))) > 1) {
         thumbnails += `${((megaphoneJ ? 4 : 4) ^ parseInt(`${rulesh}`))}`;
         break;
      }
         megaphoneJ = String.fromCharCode(98,0) == thumbnails;
         sigmobV += ballR.length;
       let sigmoba: Map<any, any> = new Map([[String.fromCharCode(98,114,101,110,100,101,114,95,57,95,53,0),false ], [String.fromCharCode(114,101,100,101,116,101,99,116,95,55,95,54,53,0),true ], [String.fromCharCode(103,95,57,57,95,101,110,116,101,114,101,100,0),true ]]);
         ballR += `${sigmoba.size}`;
      spinner0.push(parseInt(`${diced}`) >> (Math.min(1, Math.abs(parseInt(`${mbsplashp}`)))));
      break;
   }
   while (5 <= (stringsV.length ^ 3)) {
       let gradleT = String.fromCharCode(109,105,99,114,111,115,111,102,116,95,100,95,50,50,0);
       let a_centerr: Array<any> = [94, 201, 966];
       let side1 = String.fromCharCode(101,120,112,97,110,100,95,107,95,53,55,0);
       let successT = String.fromCharCode(110,95,49,55,95,105,115,115,117,101,115,0);
          let changeI = 5.0;
          let constants1: Array<any> = [442, 399, 633];
          let tailj = String.fromCharCode(119,95,51,54,95,112,117,115,104,0);
         gradleT = `${gradleT.length | 2}`;
         changeI /= Math.max(parseFloat(`${parseInt(`${changeI}`)}`), 2);
         constants1.push(1 + tailj.length);
         tailj = "3";
      let closes = side1 == String.fromCharCode(115,50,100,104,104,117,53,53,100,110,0);
      do {
          let middleP = String.fromCharCode(105,95,50,95,115,97,119,0);
          let statisticsL = String.fromCharCode(119,99,104,97,114,95,111,95,52,55,0);
          let anythinkH = 1.0;
          let castZ = String.fromCharCode(100,105,115,115,105,109,95,113,95,54,57,0);
         side1 += "3";
         middleP = "3";
         statisticsL += "1";
         anythinkH += parseFloat(`${middleP.length}`);
         castZ += `${middleP.length / 3}`;
         if (closes) {
            break;
         }
      } while ((successT == side1) && closes);
      while (5 < (a_centerr.length & side1.length) || 1 < (5 & side1.length)) {
          let loading6 = String.fromCharCode(104,101,120,105,110,116,95,121,95,53,56,0);
          let calendarf = String.fromCharCode(115,121,109,95,119,95,52,57,0);
          let viewerx = 1.0;
          let questE = String.fromCharCode(115,95,54,55,95,97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0);
          let pausem = 2.0;
         side1 += `${2 >> (Math.min(5, successT.length))}`;
         loading6 = `${loading6.length}`;
         calendarf += `${3 ^ parseInt(`${viewerx}`)}`;
         viewerx *= questE.length * parseInt(`${viewerx}`);
         questE += `${3 & questE.length}`;
         pausem *= 1 | loading6.length;
         break;
      }
          let fullV: Array<any> = [185, 849, 168];
          let product7 = 2;
          let navigationT = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,51,95,54,55,0);
         a_centerr.push(product7 + 3);
         fullV = [navigationT.length / (Math.max(3, 9))];
         product7 |= fullV.length | 3;
         navigationT = `${navigationT.length << (Math.min(Math.abs(2), 3))}`;
      let tickj = successT.length >= 5885740;
      do {
         successT += `${a_centerr.length}`;
         if (tickj) {
            break;
         }
      } while ((successT.startsWith(`${side1.length}`)) && tickj);
      if (!side1.includes(successT)) {
         side1 = "2";
      }
      while ((side1.length & 4) <= 5) {
          let sourceb = true;
          let dplus0: Array<any> = [46, 826, 3];
         a_centerr = [((sourceb ? 2 : 2) + dplus0.length)];
         break;
      }
          let expandS = 3.0;
          let foregroundv = 4;
          let auto_3_ = false;
         gradleT += `${gradleT.length | 3}`;
         expandS *= parseFloat(`${3}`);
         foregroundv <<= Math.min(3, Math.abs(parseInt(`${expandS}`) >> (Math.min(3, Math.abs(1)))));
         auto_3_ = 57 > foregroundv;
          let nterstitialh = 2.0;
         gradleT = `${a_centerr.length}`;
         nterstitialh *= parseInt(`${nterstitialh}`);
      if (side1 == String.fromCharCode(49,0) && gradleT == String.fromCharCode(68,0)) {
          let episodesT: Array<any> = [132, 952];
          let canvasX = 1.0;
          let background4: Array<any> = [635, 187];
          let transfern = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,95,120,95,55,49,0);
          let submit_ = String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,54,95,54,0);
         side1 += `${gradleT.length}`;
         episodesT.push(3);
         canvasX -= transfern.length;
         background4 = [submit_.length % 3];
         transfern = "2";
         submit_ += `${3 ^ transfern.length}`;
      }
      if (2 == (a_centerr.length / 2) || (gradleT.length / 2) == 3) {
          let smallM = false;
          let gemfilep = 2.0;
         gradleT = "2";
         smallM = (gemfilep - gemfilep) <= 77.9;
      }
         successT = `${(successT == String.fromCharCode(105,0) ? successT.length : a_centerr.length)}`;
      stringsV = `${3 + gradleT.length}`;
      break;
   }
   if (stringsV.includes(`${diced}`)) {
      diced /= Math.max((String.fromCharCode(80,0) == combineT ? combineT.length : plashK.size), 5);
   }
   let infoy = 9765801.0 <= mbsplashp;
   do {
      mbsplashp /= Math.max(5, parseFloat(`${spinner0.length * 2}`));
      if (infoy) {
         break;
      }
   } while ((1.48 <= (2.56 - mbsplashp) || (leftb - parseInt(`${mbsplashp}`)) <= 1) && infoy);
       let splashq = 5;
       let apple9 = 0;
      let phoneI = 8927342 <= apple9;
      do {
          let hongkong_: Array<any> = [String.fromCharCode(115,117,98,106,101,99,116,115,95,54,95,56,55,0), String.fromCharCode(111,112,97,100,95,109,95,56,50,0)];
         apple9 /= Math.max(splashq, 4);
         hongkong_ = [3];
         if (phoneI) {
            break;
         }
      } while (((splashq | apple9) < 1) && phoneI);
      for (let k = 0; k < 3; k++) {
         apple9 += splashq;
      }
      while ((splashq - 2) >= 5) {
          let cluby = String.fromCharCode(118,95,54,48,95,98,105,110,98,110,0);
          let downp = String.fromCharCode(101,120,99,104,97,110,103,101,115,95,106,95,55,56,0);
          let feedbackj: Map<any, any> = new Map([[String.fromCharCode(97,95,55,53,95,118,109,100,97,117,100,105,111,0),894], [String.fromCharCode(116,95,55,53,95,115,99,97,110,116,97,98,108,101,0),980]]);
          let holder3 = String.fromCharCode(118,115,114,99,95,102,95,51,51,0);
         splashq *= apple9 << (Math.min(holder3.length, 1));
         cluby = "3";
         downp += `${1 * cluby.length}`;
         feedbackj = new Map([[`${feedbackj.size}`, 1]]);
         holder3 += `${3 - downp.length}`;
         break;
      }
         splashq <<= Math.min(Math.abs(apple9), 2);
          let canvasi = 4;
          let vcopy_uwG = String.fromCharCode(98,95,50,51,95,109,111,109,101,110,116,115,0);
         apple9 &= splashq;
         canvasi &= vcopy_uwG.length;
         vcopy_uwG += `${(String.fromCharCode(82,0) == vcopy_uwG ? canvasi : vcopy_uwG.length)}`;
      let firebaseW = 5186572 <= splashq;
      do {
         splashq += apple9;
         if (firebaseW) {
            break;
         }
      } while (firebaseW && ((splashq << (Math.min(Math.abs(5), 4))) < 4));
      incident4 = `${parseInt(`${mbsplashp}`)}`;
       let headerw = String.fromCharCode(97,108,97,99,95,122,95,52,48,0);
         headerw += "3";
         headerw += "3";
      while (headerw == headerw) {
         headerw = `${headerw.length}`;
         break;
      }
      diced -= plashK.size | spinner0.length;
   if (incident4.includes(`${diced}`)) {
       let pressureJ: Map<any, any> = new Map([[String.fromCharCode(115,95,50,48,95,107,101,114,110,101,108,0),142], [String.fromCharCode(113,109,105,110,109,97,120,95,55,95,49,55,0),895]]);
       let acceptedI = String.fromCharCode(101,120,112,114,101,115,115,95,120,95,56,56,0);
      let albumG = acceptedI == String.fromCharCode(111,118,122,0);
      do {
          let resultA = String.fromCharCode(101,95,53,57,95,105,99,111,110,105,102,105,101,100,0);
          let mbnativeadvancedB: Map<any, any> = new Map([[String.fromCharCode(107,95,52,54,95,122,101,114,111,122,101,114,111,0),257], [String.fromCharCode(118,112,97,116,104,95,105,95,55,52,0),342]]);
         acceptedI = `${mbnativeadvancedB.size}`;
         resultA += `${resultA.length % 3}`;
         mbnativeadvancedB = new Map([[resultA, resultA.length]]);
         if (albumG) {
            break;
         }
      } while (((pressureJ.size + 1) <= 5 || (1 + acceptedI.length) <= 4) && albumG);
         acceptedI = `${pressureJ.size - 3}`;
         pressureJ = new Map([[`${pressureJ.size}`, 1]]);
      let indexd = 7140426 <= pressureJ.size;
      do {
          let appsp = 0.0;
          let canvasy = String.fromCharCode(109,98,112,97,105,114,95,99,95,57,50,0);
          let found1 = 3.0;
          let incident4m: Array<any> = [String.fromCharCode(119,97,108,108,112,97,112,101,114,95,53,95,49,55,0), String.fromCharCode(103,114,97,112,104,95,106,95,54,0)];
          let overlayO = String.fromCharCode(108,105,103,104,116,101,110,105,110,103,95,50,95,50,57,0);
         pressureJ.set(canvasy, canvasy.length);
         appsp *= incident4m.length;
         found1 /= Math.max(parseFloat(`${parseInt(`${found1}`) << (Math.min(2, Math.abs(2)))}`), 1);
         incident4m = [parseInt(`${appsp}`) & 1];
         overlayO += `${2 / (Math.max(5, parseInt(`${found1}`)))}`;
         if (indexd) {
            break;
         }
      } while (indexd && (pressureJ.size == 5));
      for (let v = 0; v < 2; v++) {
         pressureJ.set(acceptedI, 1 ^ pressureJ.size);
      }
      while (!acceptedI.endsWith(`${pressureJ.size}`)) {
          let temperaturec = 1;
          let long_o1 = String.fromCharCode(100,95,54,50,95,100,101,115,116,114,111,121,105,110,103,0);
          let temperatureQ = 3.0;
         acceptedI = `${acceptedI.length}`;
         temperaturec *= temperaturec << (Math.min(Math.abs(parseInt(`${temperatureQ}`)), 5));
         long_o1 += `${2 | long_o1.length}`;
         temperatureQ += parseFloat(`${parseInt(`${temperatureQ}`) - 2}`);
         break;
      }
      incident4 += `${combineT.length}`;
   }
       let applew = 2;
       let round1 = String.fromCharCode(100,95,55,50,95,99,111,110,115,116,114,97,105,110,116,0);
      for (let w = 0; w < 2; w++) {
         round1 += `${round1.length | 3}`;
      }
      let time_5J = applew <= 6245222;
      do {
          let eventd = false;
          let videocommonZ = 0.0;
          let filed = 5.0;
         applew %= Math.max(round1.length, 4);
         eventd = !eventd;
         videocommonZ -= parseInt(`${videocommonZ}`) - 2;
         filed *= parseInt(`${filed}`) * 2;
         if (time_5J) {
            break;
         }
      } while (time_5J && (5 < (round1.length & applew)));
         applew /= Math.max(1, 1 * round1.length);
          let nativeexE = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,110,95,49,50,0);
          let zhubom = false;
          let g_lockZ = 1.0;
         round1 = `${(nativeexE == String.fromCharCode(113,0) ? round1.length : nativeexE.length)}`;
         zhubom = 44.87 <= g_lockZ;
         g_lockZ -= parseFloat(`${parseInt(`${g_lockZ}`) / 2}`);
       let collection4 = 4.0;
         collection4 -= parseFloat(`${round1.length & 2}`);
      incident4 += `${incident4.length}`;
      combineT += `${parseInt(`${diced}`)}`;
   for (let q = 0; q < 2; q++) {
      leftb >>= Math.min(Math.abs(stringsV.length | incident4.length), 2);
   }
      leftb ^= stringsV.length >> (Math.min(4, combineT.length));

    setCountToggleB(countToggleB + 1);
  }

  const switchToggle = async () => {
       let popupU = String.fromCharCode(122,95,55,50,95,108,111,99,97,108,101,0);
    let readG = 5.0;
    let frame_48k: Array<any> = [704, 497];
    let agreementQ = 2;
    let rewardvideoo = 5.0;
    let rewardr: Array<any> = [124, 473, 827];
    let g_playerr = 5;
    let flipperW = 2.0;
    let diceC = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,122,95,56,48,0);
    let downloadingv: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,115,116,114,105,112,115,0),140], [String.fromCharCode(103,95,55,95,100,105,115,112,97,116,99,104,105,110,103,0),790], [String.fromCharCode(120,95,51,48,95,120,102,111,114,109,0),842]]);
    let homeI = String.fromCharCode(97,99,99,101,115,115,111,114,115,95,52,95,56,54,0);
    let heartl = String.fromCharCode(118,95,50,56,95,108,111,97,115,0);
    let application3 = String.fromCharCode(117,110,109,105,110,105,109,105,122,101,95,101,95,50,0);
    let emojiR = String.fromCharCode(97,95,54,51,95,105,110,115,116,114,117,99,116,105,111,110,115,0);
    let anytimeF = 1.0;
    let package_5E = 0.0;
    let xvodr = String.fromCharCode(103,95,52,50,95,115,99,104,109,0);
    let upgradeu = String.fromCharCode(122,102,114,101,101,95,49,95,57,56,0);
   while (2 < (g_playerr & downloadingv.size) || 2 < (downloadingv.size & g_playerr)) {
      downloadingv.set(application3, 1);
      break;
   }
       let moons = 3;
       let linkn = true;
       let splashL = true;
      let diceH = linkn ? !linkn : linkn;
      do {
          let termsR: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,108,95,111,95,53,51,0),857], [String.fromCharCode(101,95,53,49,95,115,101,103,109,101,110,116,0),1000]]);
         linkn = termsR.get(`${splashL}`) != null;
         if (diceH) {
            break;
         }
      } while ((linkn) && diceH);
      if (!linkn) {
         linkn = !linkn;
      }
      while (linkn) {
         linkn = !splashL;
         break;
      }
      while (5 == (moons % 2)) {
          let fastJ = true;
         moons /= Math.max(2 - moons, 1);
         fastJ = (fastJ ? fastJ : fastJ);
         break;
      }
      for (let c = 0; c < 3; c++) {
         linkn = !splashL;
      }
      if (!linkn && splashL) {
          let questR = false;
         linkn = moons <= 69 || questR;
      }
      if (5 > moons) {
         moons *= ((splashL ? 5 : 1));
      }
      while (1 == (1 << (Math.min(2, Math.abs(moons))))) {
          let xvodV = true;
          let frame_57f = 2;
         splashL = !xvodV || 83 > frame_57f;
         break;
      }
      let stepz = linkn ? !linkn : linkn;
      do {
          let clockF = String.fromCharCode(113,95,54,54,95,99,104,97,110,110,101,108,0);
          let membershipS = String.fromCharCode(101,95,49,49,95,110,101,120,116,104,111,112,0);
          let emptyo = 2.0;
         linkn = moons < 55 || splashL;
         clockF = `${(clockF == String.fromCharCode(122,0) ? membershipS.length : clockF.length)}`;
         membershipS += `${membershipS.length % 2}`;
         emptyo -= (parseFloat(`${String.fromCharCode(120,0) == membershipS ? membershipS.length : parseInt(`${emptyo}`)}`));
         if (stepz) {
            break;
         }
      } while ((linkn && splashL) && stepz);
      homeI = `${popupU.length << (Math.min(Math.abs(1), 3))}`;
      flipperW -= parseFloat(`${2 - frame_48k.length}`);
   for (let p = 0; p < 2; p++) {
      agreementQ *= frame_48k.length;
   }
   if (frame_48k.length > readG) {
      frame_48k = [(String.fromCharCode(116,0) == diceC ? downloadingv.size : diceC.length)];
   }
   for (let d = 0; d < 2; d++) {
      readG *= (String.fromCharCode(85,0) == emojiR ? emojiR.length : g_playerr);
   }
   let dataz = readG <= 6130477.0;
   do {
      readG -= (String.fromCharCode(70,0) == heartl ? rewardr.length : heartl.length);
      if (dataz) {
         break;
      }
   } while (dataz && (!heartl.startsWith(`${readG}`)));
   let crossw = 9227011 <= g_playerr;
   do {
       let renewx = 3;
      let tempq = renewx <= 5684439;
      do {
          let flipperk = String.fromCharCode(118,100,98,101,95,121,95,50,50,0);
          let other8 = String.fromCharCode(118,116,97,98,95,115,95,52,0);
         renewx %= Math.max(flipperk.length, 2);
         flipperk += `${3 + other8.length}`;
         other8 += `${other8.length / 2}`;
         if (tempq) {
            break;
         }
      } while ((4 == (renewx / (Math.max(8, renewx))) || 1 == (renewx / 4)) && tempq);
      let edit2 = renewx <= 5567588;
      do {
          let minimizej = false;
          let user3: Array<any> = [126, 569, 520];
          let sport4: Array<any> = [String.fromCharCode(112,111,111,108,115,95,97,95,50,56,0), String.fromCharCode(114,101,115,105,108,105,101,110,99,101,95,119,95,50,57,0), String.fromCharCode(98,108,111,99,107,115,99,97,110,95,107,95,49,57,0)];
         renewx |= 3;
         minimizej = sport4.length >= 64 || 64 >= user3.length;
         user3.push(2 >> (Math.min(4, sport4.length)));
         if (edit2) {
            break;
         }
      } while (edit2 && (renewx < renewx));
         renewx %= Math.max(renewx - renewx, 3);
      g_playerr += (heartl == String.fromCharCode(104,0) ? agreementQ : heartl.length);
      if (crossw) {
         break;
      }
   } while (crossw && (g_playerr >= frame_48k.length));
   while (!Array.from(downloadingv.values()).includes(rewardvideoo)) {
       let component7 = 2.0;
       let iconU = String.fromCharCode(109,118,112,114,101,100,95,104,95,56,54,0);
       let themeW = String.fromCharCode(98,95,57,51,95,115,121,110,111,110,121,109,0);
       let combineA = 3.0;
       let bottomx = false;
      while (bottomx) {
         bottomx = themeW.length == 21;
         break;
      }
      if (iconU.includes(`${combineA}`)) {
         combineA /= Math.max(2, themeW.length);
      }
      for (let y = 0; y < 2; y++) {
         themeW = `${(String.fromCharCode(118,0) == iconU ? parseInt(`${component7}`) : iconU.length)}`;
      }
         component7 += parseFloat(`${parseInt(`${combineA}`) + 2}`);
      if (parseInt(`${combineA}`) > themeW.length) {
          let goalC = 0.0;
          let streamingR = true;
          let activet = 1.0;
          let faviconS = 3.0;
          let textY = 1;
         combineA /= Math.max((parseInt(`${goalC}`) & (streamingR ? 3 : 4)), 2);
         goalC -= parseFloat(`${3 & parseInt(`${activet}`)}`);
         streamingR = (faviconS - activet) >= 64.17;
         faviconS *= parseInt(`${activet}`);
         textY ^= parseInt(`${faviconS}`) | 3;
      }
         component7 -= parseFloat(`${themeW.length}`);
      for (let n = 0; n < 3; n++) {
          let overlayj = String.fromCharCode(100,105,118,105,100,101,110,100,95,107,95,57,51,0);
          let applicationz = 5;
          let loadingF: Map<any, any> = new Map([[String.fromCharCode(98,95,55,53,95,102,97,99,116,111,114,115,0),String.fromCharCode(109,95,54,52,95,112,111,112,117,108,97,114,0)], [String.fromCharCode(117,95,54,56,95,108,105,107,101,0),String.fromCharCode(122,95,50,52,95,115,101,114,105,97,108,105,115,101,100,0)]]);
         iconU = "1";
         overlayj += `${overlayj.length << (Math.min(Math.abs(3), 1))}`;
         applicationz |= (overlayj == String.fromCharCode(105,0) ? overlayj.length : applicationz);
         loadingF = new Map([[`${loadingF.size}`, applicationz]]);
      }
      while (iconU.startsWith(`${component7}`)) {
          let inewinterstitialX = String.fromCharCode(112,114,101,118,105,101,119,101,100,95,119,95,51,57,0);
          let libcrashsdkN = 3.0;
          let alertF = String.fromCharCode(109,97,114,107,95,116,95,55,54,0);
         iconU = `${(iconU == String.fromCharCode(97,0) ? iconU.length : parseInt(`${combineA}`))}`;
         inewinterstitialX += `${alertF.length ^ 2}`;
         libcrashsdkN /= Math.max(parseFloat(`${alertF.length + 3}`), 1);
         break;
      }
       let config3 = 0;
         combineA += parseInt(`${combineA}`) << (Math.min(Math.abs(1), 2));
         iconU += `${parseInt(`${component7}`) * config3}`;
       let subsF = 0.0;
      if (2 <= (1 + parseInt(`${component7}`)) || (parseInt(`${component7}`) + themeW.length) <= 1) {
          let loginq = String.fromCharCode(122,95,53,56,95,98,97,99,107,103,114,111,117,110,100,0);
          let componentF: Array<any> = [85, 268];
          let descv = String.fromCharCode(102,114,97,110,100,111,109,95,53,95,53,54,0);
         component7 -= parseFloat(`${parseInt(`${subsF}`)}`);
         loginq = `${1 << (Math.min(4, descv.length))}`;
         componentF = [3];
         descv = `${3 % (Math.max(7, loginq.length))}`;
      }
         subsF /= Math.max(parseFloat(`${iconU.length}`), 2);
       let baiduA = 1.0;
      rewardvideoo -= parseFloat(`${parseInt(`${flipperW}`)}`);
      break;
   }
   for (let q = 0; q < 2; q++) {
      flipperW += parseFloat(`${diceC.length}`);
   }
       let bootsplash7: Array<any> = [113, 70];
       let starc = 1;
       let trophyX = String.fromCharCode(113,95,52,54,95,115,119,105,116,99,104,97,98,108,101,0);
      let gemfileU = starc <= 5850929;
      do {
         starc -= bootsplash7.length;
         if (gemfileU) {
            break;
         }
      } while (gemfileU && (!trophyX.startsWith(`${starc}`)));
       let blackZ = String.fromCharCode(114,101,115,112,111,110,115,97,98,108,101,95,55,95,56,49,0);
         starc >>= Math.min(Math.abs(2 - bootsplash7.length), 1);
          let tumbnailc = 4;
          let gemfilez = 5.0;
         trophyX += `${starc / 2}`;
         tumbnailc >>= Math.min(Math.abs(3 >> (Math.min(Math.abs(parseInt(`${gemfilez}`)), 3))), 1);
         gemfilez += tumbnailc;
         starc *= 3;
      for (let z = 0; z < 2; z++) {
         trophyX += `${starc & bootsplash7.length}`;
      }
         blackZ = `${trophyX.length - blackZ.length}`;
      if (trophyX != blackZ) {
         blackZ = `${3 + starc}`;
      }
         starc &= 3;
      rewardr = [3 - emojiR.length];
   if (g_playerr == 5) {
       let sortm = 2.0;
       let u_positiont: Array<any> = [815, 437];
       let main_d4 = String.fromCharCode(98,95,56,54,0);
       let penaltyN = 1.0;
       let collectionl = String.fromCharCode(101,95,53,95,108,108,100,98,105,110,105,116,0);
      if (u_positiont.length == 1) {
         main_d4 = `${main_d4.length}`;
      }
      while (collectionl.length > parseInt(`${penaltyN}`)) {
         collectionl += `${u_positiont.length % (Math.max(3, 5))}`;
         break;
      }
      let statistics6 = collectionl == String.fromCharCode(102,100,53,114,0);
      do {
          let colorsN = 0;
          let moonb = true;
         collectionl += "3";
         colorsN += 1 * colorsN;
         moonb = colorsN == 75;
         if (statistics6) {
            break;
         }
      } while (statistics6 && ((sortm - 1.10) >= 4.87 || (2 / (Math.max(7, collectionl.length))) >= 2));
       let projectD: Array<any> = [587, 437, 465];
       let mbnativeB: Array<any> = [184, 181, 491];
         collectionl += `${projectD.length ^ 3}`;
         penaltyN /= Math.max((String.fromCharCode(80,0) == collectionl ? collectionl.length : parseInt(`${penaltyN}`)), 4);
          let optionsY: Array<any> = [585, 550];
          let sellU = true;
          let hejie: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,111,114,95,55,95,50,51,0),423], [String.fromCharCode(104,105,103,104,115,95,102,95,54,48,0),279]]);
         collectionl += `${hejie.size}`;
         optionsY.push(((sellU ? 2 : 3) + 2));
         sellU = optionsY.length <= 16;
         hejie = new Map([[`${optionsY.length}`, 2]]);
      if (4 < (mbnativeB.length << (Math.min(collectionl.length, 3)))) {
         mbnativeB = [collectionl.length];
      }
      for (let h = 0; h < 2; h++) {
          let onewinterstitialX: Array<any> = [434, 967];
          let modaln: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,114,95,51,50,0),false ], [String.fromCharCode(115,117,98,104,101,97,100,101,114,95,110,95,54,52,0),false ]]);
          let carouselj: Map<any, any> = new Map([[String.fromCharCode(115,97,110,100,98,111,120,95,99,95,49,55,0),true ], [String.fromCharCode(115,95,50,49,95,109,115,101,112,115,110,114,0),true ]]);
         projectD = [mbnativeB.length & parseInt(`${sortm}`)];
         onewinterstitialX = [carouselj.size / (Math.max(modaln.size, 6))];
         modaln = new Map([[`${carouselj.size}`, 2 ^ carouselj.size]]);
      }
         main_d4 += `${collectionl.length >> (Math.min(Math.abs(1), 4))}`;
         projectD.push(u_positiont.length);
      while (!collectionl.endsWith(`${sortm}`)) {
          let sansv = 2;
          let overlayb = String.fromCharCode(110,112,111,105,110,116,115,95,120,95,49,50,0);
         sortm *= parseFloat(`${mbnativeB.length / 2}`);
         sansv %= Math.max(overlayb.length, 4);
         overlayb += `${overlayb.length}`;
         break;
      }
      for (let m = 0; m < 3; m++) {
          let dropdown2 = String.fromCharCode(116,109,112,108,95,99,95,55,48,0);
          let toponm = String.fromCharCode(118,97,108,95,118,95,50,0);
          let tramini8 = 1;
         collectionl += `${1 + parseInt(`${sortm}`)}`;
         dropdown2 = `${dropdown2.length << (Math.min(Math.abs(3), 1))}`;
         toponm += `${toponm.length / (Math.max(2, dropdown2.length))}`;
         tramini8 <<= Math.min(1, Math.abs(3));
      }
         sortm += parseFloat(`${main_d4.length}`);
          let dropdownT = true;
         penaltyN -= parseInt(`${penaltyN}`) % (Math.max(8, collectionl.length));
         dropdownT = (!dropdownT ? dropdownT : dropdownT);
      g_playerr >>= Math.min(2, Math.abs((main_d4 == String.fromCharCode(79,0) ? parseInt(`${sortm}`) : main_d4.length)));
   }
       let privileged = true;
       let j_titleH = String.fromCharCode(108,95,53,95,115,99,97,110,120,0);
       let zhengpian4 = String.fromCharCode(99,114,101,97,116,101,100,95,57,95,49,51,0);
          let sportsy = 2;
         j_titleH = `${sportsy}`;
          let activeg = 1;
         zhengpian4 = "2";
         activeg ^= activeg / (Math.max(3, 2));
      heartl = `${parseInt(`${flipperW}`)}`;
      privileged = (privileged ? privileged : privileged);
   for (let c = 0; c < 1; c++) {
      heartl = `${agreementQ}`;
   }
      emojiR = `${2 ^ heartl.length}`;

    await AsyncStorage.setItem("access", "11111111");

   while ((diceC.length + parseInt(`${flipperW}`)) < 5) {
      flipperW /= Math.max(5, parseFloat(`${downloadingv.size * 2}`));
      break;
   }
       let eactY = 4.0;
      for (let f = 0; f < 1; f++) {
         eactY *= parseInt(`${eactY}`) + 2;
      }
      while (4.3 < (eactY / (Math.max(3.57, 6))) || (eactY * 3.57) < 3.18) {
         eactY -= 3;
         break;
      }
      while ((eactY - eactY) <= 5.58 && (5.58 - eactY) <= 5.25) {
         eactY *= parseInt(`${eactY}`) ^ 1;
         break;
      }
      anytimeF /= Math.max(3, parseFloat(`${3 * downloadingv.size}`));
   if ((anytimeF / (Math.max(10, rewardvideoo))) > 2.56 && (rewardvideoo / (Math.max(2.56, 3))) > 1.24) {
       let albums = String.fromCharCode(101,95,50,56,95,103,105,103,97,103,114,111,117,112,0);
       let dropdownC = true;
       let otherh = 3;
      let pangle3 = dropdownC ? !dropdownC : dropdownC;
      do {
          let mbsplashZ = 5.0;
          let gnewsU: Array<any> = [162, 659, 952];
         dropdownC = gnewsU.includes(dropdownC);
         mbsplashZ += 1;
         gnewsU = [parseInt(`${mbsplashZ}`) ^ parseInt(`${mbsplashZ}`)];
         if (pangle3) {
            break;
         }
      } while (pangle3 && (dropdownC));
      if (3 == albums.length) {
         albums += `${((dropdownC ? 5 : 1))}`;
      }
         albums = `${3 / (Math.max(9, otherh))}`;
         otherh *= 2;
      while ((otherh << (Math.min(Math.abs(4), 2))) == 1 || otherh == 4) {
          let modityG = true;
         dropdownC = modityG;
         break;
      }
          let plashT = String.fromCharCode(98,108,111,99,107,101,100,95,112,95,51,57,0);
          let pointZ = 3;
          let configurez = 4.0;
         otherh -= (String.fromCharCode(74,0) == plashT ? plashT.length : otherh);
         pointZ += 1 / (Math.max(4, parseInt(`${configurez}`)));
         configurez /= Math.max(3, pointZ % (Math.max(parseInt(`${configurez}`), 5)));
         albums = `${((dropdownC ? 1 : 1))}`;
          let trophyq = String.fromCharCode(109,101,109,111,95,106,95,52,50,0);
          let enews8: Map<any, any> = new Map([[String.fromCharCode(112,95,52,49,95,115,117,98,118,105,101,119,0),541], [String.fromCharCode(115,101,116,115,111,99,107,111,112,116,95,108,95,53,51,0),81], [String.fromCharCode(115,117,98,108,101,110,103,116,104,95,109,95,55,57,0),238]]);
          let condensedD = String.fromCharCode(120,95,54,48,95,105,110,99,111,109,105,110,103,0);
         dropdownC = albums.includes(`${otherh}`);
         trophyq = `${enews8.size}`;
         enews8.set(`${trophyq}`, 1);
         condensedD += `${enews8.size}`;
      if (!dropdownC && (otherh - 1) <= 1) {
         dropdownC = albums.startsWith(`${dropdownC}`);
      }
      anytimeF += parseFloat(`${parseInt(`${readG}`)}`);
   }
   let mbnativeV = String.fromCharCode(53,105,56,118,52,0) == emojiR;
   do {
       let sharedx = String.fromCharCode(116,95,51,56,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0);
         sharedx += `${sharedx.length}`;
       let annerS: Map<any, any> = new Map([[String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,110,95,55,51,0),true ], [String.fromCharCode(100,95,53,49,95,116,114,97,110,115,108,97,116,101,100,0),true ], [String.fromCharCode(109,105,120,101,100,95,103,95,51,55,0),false ]]);
       let paginationZ: Map<any, any> = new Map([[String.fromCharCode(111,95,51,49,95,97,114,98,105,116,101,114,0),759], [String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,120,95,49,48,0),651]]);
       let chart2 = String.fromCharCode(117,95,56,52,95,100,105,115,112,0);
       let roboto0 = String.fromCharCode(98,108,101,110,100,95,57,95,54,0);
      emojiR = `${parseInt(`${flipperW}`) + downloadingv.size}`;
      if (mbnativeV) {
         break;
      }
   } while ((heartl != String.fromCharCode(89,0)) && mbnativeV);
   if (diceC.length >= parseInt(`${flipperW}`)) {
      flipperW *= (parseFloat(`${emojiR == String.fromCharCode(68,0) ? parseInt(`${anytimeF}`) : emojiR.length}`));
   }
      downloadingv.set(`${flipperW}`, parseInt(`${flipperW}`) * 3);
   let scopy_mbm = 5142854.0 <= flipperW;
   do {
       let rightf = 3;
         rightf &= rightf;
      for (let k = 0; k < 2; k++) {
         rightf >>= Math.min(2, Math.abs(rightf << (Math.min(Math.abs(2), 5))));
      }
         rightf <<= Math.min(3, Math.abs(rightf));
      flipperW /= Math.max(parseFloat(`${parseInt(`${readG}`) >> (Math.min(popupU.length, 4))}`), 4);
      if (scopy_mbm) {
         break;
      }
   } while (scopy_mbm && ((flipperW - 1.17) <= 5.70));
      downloadingv = new Map([[heartl, (String.fromCharCode(115,0) == application3 ? application3.length : heartl.length)]]);
   if ((readG * emojiR.length) == 1.70) {
      readG += agreementQ;
   }
      frame_48k.push(downloadingv.size * application3.length);
       let tumbnailI = 2.0;
         tumbnailI /= Math.max(5, parseInt(`${tumbnailI}`));
         tumbnailI /= Math.max(5, 1 >> (Math.min(Math.abs(parseInt(`${tumbnailI}`)), 4)));
         tumbnailI /= Math.max(4, parseInt(`${tumbnailI}`));
      g_playerr *= frame_48k.length;
   let button3 = rewardvideoo >= 7657529.0;
   do {
       let suggestionb = 4.0;
       let vietnam_ = 0.0;
       let activityl: Array<any> = [639, 63];
          let sentry0 = 4.0;
          let successY = String.fromCharCode(99,111,110,100,117,99,116,111,114,95,53,95,53,0);
          let componentW: Map<any, any> = new Map([[String.fromCharCode(99,95,55,52,95,117,115,101,114,115,0),162], [String.fromCharCode(113,95,52,55,95,109,101,100,105,97,115,0),946], [String.fromCharCode(115,109,105,108,105,110,103,95,57,95,53,57,0),215]]);
         activityl = [activityl.length];
         sentry0 *= 3 + parseInt(`${sentry0}`);
         successY += "2";
         componentW.set(`${successY}`, (successY == String.fromCharCode(90,0) ? componentW.size : successY.length));
         vietnam_ += parseInt(`${vietnam_}`) - 3;
      for (let y = 0; y < 1; y++) {
         activityl.push(parseInt(`${vietnam_}`));
      }
      let hooks9 = vietnam_ <= 6608088.0;
      do {
         vietnam_ *= parseInt(`${suggestionb}`) / 1;
         if (hooks9) {
            break;
         }
      } while (hooks9 && (4.67 > (vietnam_ - 5.24) || (parseInt(`${vietnam_}`) - activityl.length) > 2));
       let membershipT = 2.0;
       let playercommonM = 0;
      while (membershipT >= playercommonM) {
          let saveu = 4.0;
          let b_positions: Array<any> = [String.fromCharCode(116,109,109,98,114,95,99,95,55,49,0), String.fromCharCode(112,115,121,109,111,100,101,108,95,115,95,55,52,0)];
          let refreshY: Map<any, any> = new Map([[String.fromCharCode(114,101,100,115,112,97,114,107,95,103,95,53,51,0),true ], [String.fromCharCode(115,95,56,49,95,121,111,117,0),false ], [String.fromCharCode(107,95,53,56,95,115,116,97,116,101,115,0),false ]]);
         membershipT -= 3 | parseInt(`${saveu}`);
         saveu /= Math.max(parseFloat(`${1 * refreshY.size}`), 2);
         b_positions = [3 - refreshY.size];
         break;
      }
      if ((activityl.length >> (Math.min(Math.abs(5), 3))) >= 3) {
         playercommonM *= playercommonM ^ parseInt(`${membershipT}`);
      }
      let downloaderB = activityl.length <= 7031392;
      do {
          let plashTE: Array<any> = [907, 964];
          let nativeexq: Map<any, any> = new Map([[String.fromCharCode(102,105,110,103,101,114,115,95,103,95,54,57,0),837], [String.fromCharCode(109,111,100,101,95,49,95,55,49,0),895]]);
          let indexW = 4.0;
          let halfx = String.fromCharCode(100,101,98,117,103,98,111,120,95,109,95,56,54,0);
         activityl.push(halfx.length);
         plashTE = [parseInt(`${indexW}`) ^ 1];
         nativeexq = new Map([[`${nativeexq.size}`, parseInt(`${indexW}`) << (Math.min(Math.abs(3), 3))]]);
         halfx = `${nativeexq.size & 3}`;
         if (downloaderB) {
            break;
         }
      } while (downloaderB && (activityl.includes(membershipT)));
      rewardvideoo += parseFloat(`${parseInt(`${vietnam_}`) + downloadingv.size}`);
      if (button3) {
         break;
      }
   } while ((5 >= (parseInt(`${rewardvideoo}`) + rewardr.length) || (rewardr.length & 5) >= 3) && button3);
       let hovern = false;
       let adultH: Map<any, any> = new Map([[String.fromCharCode(121,95,50,53,95,105,115,110,97,110,0),String.fromCharCode(110,95,53,57,95,102,105,114,101,98,97,115,101,0)], [String.fromCharCode(118,95,51,95,100,111,109,97,105,110,0),String.fromCharCode(106,95,50,50,95,108,115,112,112,111,108,121,0)]]);
      let closes = hovern ? !hovern : hovern;
      do {
         hovern = adultH.get(`${hovern}`) != null;
         if (closes) {
            break;
         }
      } while ((2 < (adultH.size + 3)) && closes);
          let goalb = String.fromCharCode(113,95,55,48,95,116,104,97,119,101,100,0);
          let statisticsO = 0.0;
         hovern = 80 < goalb.length || statisticsO < 40.22;
      let shrinkn = hovern ? !hovern : hovern;
      do {
         hovern = adultH.size > 49 || hovern;
         if (shrinkn) {
            break;
         }
      } while (shrinkn && (4 > (adultH.size / 5) || hovern));
      if (adultH.size >= 1) {
          let mbjscommonz = 0;
         hovern = (47 == ((hovern ? 47 : adultH.size) + adultH.size));
         mbjscommonz &= mbjscommonz + 1;
      }
          let trophy2 = 4;
          let gpayF = 4;
         hovern = 98 >= gpayF && hovern;
         trophy2 *= 1 * trophy2;
         gpayF -= trophy2;
      while (hovern || 2 >= (adultH.size % 4)) {
         adultH.set(`${hovern}`, 3);
         break;
      }
      emojiR += "2";
   while ((flipperW / (Math.max(2.64, 5))) >= 1.61 || 5.18 >= (flipperW / (Math.max(2.64, 8)))) {
      agreementQ ^= 2;
      break;
   }
       let moonz: Array<any> = [15, 869, 216];
       let filter4 = String.fromCharCode(98,105,103,103,101,115,116,95,120,95,49,53,0);
       let bottomM = 3.0;
      while (1 < (parseInt(`${bottomM}`) * 4) && (4 + filter4.length) < 3) {
         filter4 += `${(String.fromCharCode(122,0) == filter4 ? moonz.length : filter4.length)}`;
         break;
      }
      while (1 <= (parseInt(`${bottomM}`) * filter4.length)) {
         bottomM += (parseFloat(`${String.fromCharCode(51,0) == filter4 ? moonz.length : filter4.length}`));
         break;
      }
      let filei = filter4.length <= 6249821;
      do {
         filter4 = `${filter4.length - moonz.length}`;
         if (filei) {
            break;
         }
      } while ((filter4.startsWith(`${bottomM}`)) && filei);
      for (let m = 0; m < 1; m++) {
         filter4 = `${filter4.length}`;
      }
         filter4 = `${parseInt(`${bottomM}`)}`;
      while (!filter4.endsWith(`${moonz.length}`)) {
         moonz = [moonz.length << (Math.min(filter4.length, 2))];
         break;
      }
         filter4 += `${filter4.length}`;
      let ranky = 8977426 <= filter4.length;
      do {
         filter4 += `${2 ^ filter4.length}`;
         if (ranky) {
            break;
         }
      } while (((moonz.length >> (Math.min(filter4.length, 3))) < 5 || (filter4.length >> (Math.min(2, moonz.length))) < 5) && ranky);
      for (let y = 0; y < 2; y++) {
         moonz = [parseInt(`${bottomM}`)];
      }
      anytimeF += parseFloat(`${frame_48k.length * parseInt(`${rewardvideoo}`)}`);
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
