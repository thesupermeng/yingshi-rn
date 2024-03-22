import { Divider } from "@rneui/base";
import { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch";
import WatchAnytimeVipModal from "../modal/xkp_arrow";
import EighteenPlusOverlay from "../modal/f_matches_nterstitial";
import CountdownIndicator from "../button/et_icon";
import AdultModeCountdownIndicator from "./em_title_roboto";
import AdultModeSwitch from "./eiy_quest";
import { screenModel } from "@type/nb_shared_target";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import {
  acceptOverEighteen,
  disableAdultMode,
  enableAdultMode,
  enableWatchAnytimeAdultMode,
  hideAdultModeDisclaimer,
  hideAdultModeVip,
  hideAdultVipPrivilegeMiniVideoAction,
  incrementAdultVideoWatchTime,
  showAdultVipPrivilegeMiniVideoAction,
} from "@redux/actions/a_switch";
import { UMENG_CHANNEL } from "@utility/n_subs_interstitial";
import { AdultVipPrivilegeOverlay } from "../modal/tu_group_change";
import { VipPrivilegeFloatingIndicator } from "./htj_fast";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";
interface XFillButton { }

const eighteenPlusControls = ({ }: XFillButton) => {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState = useSelector<HDTGesturesList>('userReducer');
  const {
    adultModeVipShow,
    adultModeDisclaimerShow,
    adultMode,
    watchAnytimeAdultMode,
    isOverEighteenAccepted,
    showAdultVipPrivilegeMiniVideo
  } = screenState;
  const dispatch = useAppDispatch();
  const isVip = KWConstants.isVip(userState.user);

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  
  console.log(Platform.OS)

  const handleAccept = useCallback(() => {
       let interstitialT = 0.0;
    let long_iP: Array<any> = [String.fromCharCode(108,95,53,49,95,105,110,115,116,114,117,99,116,105,111,110,115,0), String.fromCharCode(104,95,56,50,95,100,114,111,112,115,0), String.fromCharCode(111,95,50,55,0)];
    let hookk: Array<any> = [398, 310];
    let langC = 0.0;
    let modalQ = String.fromCharCode(97,100,100,105,110,103,95,100,95,55,0);
    let rankl = String.fromCharCode(121,95,51,50,95,109,97,121,98,101,0);
    let livei = String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,111,95,55,48,0);
    let updatesK: Array<any> = [209, 327];
    let mailV = true;
    let feedbacky = 5;
    let hookw = String.fromCharCode(100,95,56,49,95,100,114,97,119,108,105,110,101,0);
    let photoC = String.fromCharCode(106,95,49,57,95,100,101,108,101,103,97,116,101,115,0);
    let mailA = 3.0;
    let lessX = 3;
    let chinaQ: Map<any, any> = new Map([[String.fromCharCode(111,95,57,56,95,115,117,98,99,99,0),963], [String.fromCharCode(99,108,99,112,95,50,95,53,51,0),301]]);
    let serviceF = false;
    let str0 = String.fromCharCode(98,105,116,115,116,114,101,97,109,95,110,95,56,55,0);
   let fastforwardm = 8766211 >= feedbacky;
   do {
      feedbacky *= parseInt(`${langC}`);
      if (fastforwardm) {
         break;
      }
   } while ((3 > (5 * feedbacky) || (feedbacky * rankl.length) > 5) && fastforwardm);
       let thailandM = String.fromCharCode(104,95,53,57,95,108,111,103,100,98,0);
       let default_rZ = String.fromCharCode(112,108,97,121,98,97,99,107,95,106,95,54,57,0);
      while (4 == thailandM.length) {
         default_rZ = `${(String.fromCharCode(95,0) == default_rZ ? thailandM.length : default_rZ.length)}`;
         break;
      }
         default_rZ += `${(String.fromCharCode(88,0) == thailandM ? default_rZ.length : thailandM.length)}`;
      updatesK.push(rankl.length);
   while (!livei.endsWith(`${updatesK.length}`)) {
       let singleI = 1.0;
       let homeP: Map<any, any> = new Map([[String.fromCharCode(107,95,53,55,95,112,114,111,109,112,116,101,100,0),414], [String.fromCharCode(108,105,98,97,118,102,105,108,116,101,114,95,110,95,52,57,0),486], [String.fromCharCode(110,95,53,49,95,100,121,110,97,109,105,99,115,0),727]]);
       let teamo: Array<any> = [753, 462, 569];
          let downloadx = String.fromCharCode(121,97,100,105,102,95,110,95,52,51,0);
          let iconh = String.fromCharCode(113,115,118,118,112,112,95,106,95,55,50,0);
          let hongkong1 = false;
         homeP.set(`${downloadx}`, downloadx.length << (Math.min(2, Math.abs(homeP.size))));
         iconh += `${(iconh.length | (hongkong1 ? 3 : 4))}`;
         hongkong1 = iconh.length > 99 && !hongkong1;
      let settingE = teamo.length <= 9409329;
      do {
         teamo.push(teamo.length - 3);
         if (settingE) {
            break;
         }
      } while ((5 < teamo.length) && settingE);
         homeP.set(`${singleI}`, parseInt(`${singleI}`));
         homeP.set(`${teamo.length}`, 2 >> (Math.min(5, Math.abs(homeP.size))));
      while (Array.from(homeP.keys()).includes(`${singleI}`)) {
         singleI *= homeP.size >> (Math.min(Math.abs(1), 5));
         break;
      }
      if (!Array.from(homeP.values()).includes(teamo.length)) {
         homeP = new Map([[`${homeP.size}`, homeP.size]]);
      }
         homeP.set(`${singleI}`, homeP.size);
      while (homeP.get(`${teamo.length}`) == null) {
         homeP.set(`${singleI}`, teamo.length);
         break;
      }
      while (3 == (teamo.length / 5) || (teamo.length >> (Math.min(Math.abs(5), 1))) == 4) {
         teamo = [teamo.length << (Math.min(Math.abs(3), 3))];
         break;
      }
      livei = `${2 & teamo.length}`;
      break;
   }
      hookw += `${rankl.length << (Math.min(Math.abs(2), 2))}`;
   for (let y = 0; y < 3; y++) {
      mailV = updatesK.includes(langC);
   }
   while (!mailV) {
       let r_positionA = String.fromCharCode(99,97,108,99,119,95,118,95,54,55,0);
       let kickM = true;
       let diceC = 1;
       let carouselr = String.fromCharCode(115,95,54,54,95,119,105,110,100,105,110,103,0);
      let cornerW = 8560420 >= diceC;
      do {
         diceC ^= ((kickM ? 5 : 2) + carouselr.length);
         if (cornerW) {
            break;
         }
      } while (((3 & r_positionA.length) < 4 || 3 < (diceC & r_positionA.length)) && cornerW);
      if (!kickM && 3 <= r_positionA.length) {
         kickM = r_positionA.length == 15;
      }
         diceC += 2;
         diceC &= r_positionA.length;
      if (r_positionA.length == 1) {
         r_positionA += "1";
      }
      if (5 <= (2 >> (Math.min(5, r_positionA.length))) && 5 <= (2 >> (Math.min(3, Math.abs(diceC))))) {
         r_positionA = `${r_positionA.length}`;
      }
         diceC += (String.fromCharCode(118,0) == r_positionA ? r_positionA.length : (kickM ? 5 : 1));
         kickM = 33 <= r_positionA.length;
          let transferE = String.fromCharCode(105,99,111,110,95,101,95,50,0);
          let regengT = String.fromCharCode(113,95,53,53,95,109,97,105,110,98,117,110,100,108,101,0);
         carouselr += `${(regengT == String.fromCharCode(118,0) ? carouselr.length : regengT.length)}`;
         transferE += `${transferE.length}`;
      while (3 < (4 / (Math.max(7, diceC))) || 3 < (diceC / (Math.max(4, 6)))) {
         r_positionA += `${r_positionA.length % 2}`;
         break;
      }
         kickM = carouselr.length == 24;
         carouselr += "3";
      mailV = updatesK.length >= 55 && 55 >= modalQ.length;
      break;
   }
   if ((long_iP.length | 4) < 5 || 3 < (4 | long_iP.length)) {
      long_iP.push(3);
   }

    console.debug("accepted 18+");

   if ((hookw.length / 3) > 4 && (feedbacky / (Math.max(3, 3))) > 4) {
      feedbacky ^= long_iP.length;
   }
      livei = "1";
      photoC += `${modalQ.length}`;
   for (let v = 0; v < 1; v++) {
      long_iP = [parseInt(`${langC}`) ^ 3];
   }
      mailV = long_iP.length > modalQ.length;
       let annerr = String.fromCharCode(115,95,53,49,95,115,105,100,120,0);
       let moonF = 0;
       let homen = 4.0;
         annerr += `${moonF}`;
       let hejir = String.fromCharCode(120,95,54,54,95,108,101,110,0);
      while ((hejir.length << (Math.min(3, Math.abs(moonF)))) >= 2) {
         moonF >>= Math.min(Math.abs(1 * hejir.length), 5);
         break;
      }
          let logoutm = String.fromCharCode(122,95,50,51,95,111,102,102,105,99,105,97,108,0);
          let windn = true;
         homen /= Math.max(2, moonF >> (Math.min(Math.abs(parseInt(`${homen}`)), 3)));
         logoutm += `${(1 * (windn ? 4 : 3))}`;
         windn = logoutm.length == 70;
      if (homen <= 4.43) {
         hejir += `${parseInt(`${homen}`)}`;
      }
         moonF -= hejir.length & parseInt(`${homen}`);
         hejir += `${parseInt(`${homen}`) % 3}`;
       let textJ = 5.0;
         annerr += "2";
      langC -= feedbacky;
      rankl = `${hookk.length << (Math.min(3, Math.abs(feedbacky)))}`;
    dispatch(enableAdultMode());

   if (hookk.length > 3) {
      hookk.push(photoC.length);
   }
       let lightN = String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,49,95,53,0);
       let filledU = String.fromCharCode(97,98,115,101,105,108,95,117,95,56,51,0);
          let profileX = 4.0;
          let constants9 = String.fromCharCode(108,95,49,55,95,112,111,115,116,105,111,110,0);
         filledU = `${filledU.length / 1}`;
         profileX *= parseFloat(`${1 | parseInt(`${profileX}`)}`);
         constants9 += `${parseInt(`${profileX}`)}`;
      if (lightN.length >= filledU.length) {
          let promotionX = String.fromCharCode(114,95,53,57,95,102,108,101,120,105,98,108,101,0);
          let injuryQ = String.fromCharCode(97,99,99,101,115,115,111,114,95,98,95,51,50,0);
         filledU = `${3 & filledU.length}`;
         promotionX = `${injuryQ.length << (Math.min(2, promotionX.length))}`;
         injuryQ += "3";
      }
      photoC += `${modalQ.length / (Math.max(9, hookk.length))}`;
   for (let f = 0; f < 3; f++) {
      long_iP.push(hookk.length >> (Math.min(Math.abs(1), 3)));
   }
       let banneri = true;
      let predictionF = banneri ? !banneri : banneri;
      do {
         banneri = (banneri ? !banneri : !banneri);
         if (predictionF) {
            break;
         }
      } while (predictionF && (!banneri && !banneri));
      let save5 = banneri ? !banneri : banneri;
      do {
          let weiboP = String.fromCharCode(117,95,52,52,95,99,111,111,114,100,105,110,97,116,101,0);
         banneri = weiboP.length >= 49;
         if (save5) {
            break;
         }
      } while (save5 && (banneri || banneri));
      for (let h = 0; h < 2; h++) {
          let plashC = String.fromCharCode(113,95,55,51,95,115,108,111,112,0);
          let whitef = 0.0;
         banneri = !banneri;
         plashC += `${plashC.length}`;
         whitef *= (String.fromCharCode(53,0) == plashC ? parseInt(`${whitef}`) : plashC.length);
      }
      hookk = [2];
   if ((livei.length << (Math.min(Math.abs(4), 3))) >= 4 && (parseFloat(`${livei.length}`) - mailA) >= 4.78) {
      livei = `${((mailV ? 1 : 3) << (Math.min(updatesK.length, 3)))}`;
   }
   let iconN = photoC.length <= 5072387;
   do {
       let constantsm = String.fromCharCode(115,117,112,101,114,110,111,100,101,115,95,116,95,54,0);
       let black8 = String.fromCharCode(114,101,100,101,101,109,95,120,95,51,49,0);
       let modea = 3.0;
         black8 += `${parseInt(`${modea}`) | constantsm.length}`;
      if (4 < (2 - black8.length) || (modea / (Math.max(black8.length, 2))) < 3.31) {
         black8 = "1";
      }
          let termsz = String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,109,95,54,48,0);
          let collectionV: Map<any, any> = new Map([[String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,95,56,95,52,53,0),284], [String.fromCharCode(104,105,103,104,112,97,115,115,95,56,95,53,53,0),130]]);
         modea += 1;
         termsz += `${termsz.length}`;
         collectionV.set(`${termsz}`, termsz.length % 2);
      let sansL = String.fromCharCode(104,97,57,0) == constantsm;
      do {
         constantsm = `${(black8 == String.fromCharCode(110,0) ? black8.length : constantsm.length)}`;
         if (sansL) {
            break;
         }
      } while (sansL && (black8.length >= constantsm.length));
         constantsm += `${black8.length & 2}`;
      for (let w = 0; w < 1; w++) {
         black8 = `${(String.fromCharCode(98,0) == black8 ? parseInt(`${modea}`) : black8.length)}`;
      }
          let update_qW = String.fromCharCode(113,117,97,100,115,95,107,95,50,0);
          let vietnamQ = String.fromCharCode(117,95,49,49,95,99,101,114,116,115,0);
         black8 = "2";
         update_qW += "2";
         vietnamQ += `${(update_qW == String.fromCharCode(104,0) ? update_qW.length : vietnamQ.length)}`;
          let sinav = 5.0;
          let anythinkA = 0;
         modea -= (constantsm == String.fromCharCode(121,0) ? constantsm.length : parseInt(`${sinav}`));
         sinav *= parseFloat(`${anythinkA % 2}`);
         anythinkA ^= anythinkA * 3;
         constantsm = `${parseInt(`${modea}`)}`;
      photoC += `${2 << (Math.min(4, livei.length))}`;
      if (iconN) {
         break;
      }
   } while ((1 == photoC.length) && iconN);
   while ((hookk.length - 3) >= 5 || hookk.length >= 3) {
       let filterp = 4.0;
       let greenc: Map<any, any> = new Map([[String.fromCharCode(109,98,108,111,99,107,95,119,95,49,48,0),430], [String.fromCharCode(106,95,53,52,95,112,114,111,112,97,103,97,116,105,111,110,0),597]]);
       let topicu: Array<any> = [909, 441, 483];
       let quest5 = String.fromCharCode(116,114,97,110,102,115,101,114,95,104,95,51,57,0);
         quest5 = `${quest5.length}`;
       let projectS = String.fromCharCode(118,95,48,95,102,111,108,100,101,114,115,0);
       let streamingz = String.fromCharCode(121,95,52,57,95,114,97,100,105,117,115,0);
         projectS = `${quest5.length}`;
         streamingz = "3";
         greenc.set(streamingz, streamingz.length >> (Math.min(Math.abs(2), 3)));
       let collection6 = String.fromCharCode(106,95,54,95,109,101,109,98,101,114,0);
       let turnb = String.fromCharCode(115,116,116,115,95,116,95,55,48,0);
         filterp -= topicu.length;
      for (let v = 0; v < 3; v++) {
         projectS = `${parseInt(`${filterp}`) >> (Math.min(3, Math.abs(3)))}`;
      }
          let shareL: Map<any, any> = new Map([[String.fromCharCode(102,95,51,48,95,106,105,110,99,108,117,100,101,0),23], [String.fromCharCode(97,112,97,99,107,101,116,95,56,95,55,49,0),507]]);
          let about7: Map<any, any> = new Map([[String.fromCharCode(100,95,51,54,95,102,114,97,110,100,0),false ], [String.fromCharCode(112,95,54,95,115,108,105,112,0),true ]]);
         projectS = `${quest5.length}`;
         shareL.set(`${about7.size}`, 3 << (Math.min(2, Math.abs(about7.size))));
      for (let m = 0; m < 2; m++) {
          let typesJ = 1;
          let trash1 = String.fromCharCode(108,95,52,49,95,119,105,110,100,105,110,103,0);
          let sportx = 0.0;
          let zhengpianD = 1.0;
         streamingz = `${projectS.length}`;
         typesJ ^= parseInt(`${sportx}`);
         trash1 += "3";
         zhengpianD -= parseFloat(`${parseInt(`${zhengpianD}`) >> (Math.min(5, Math.abs(3)))}`);
      }
          let launchM = 3.0;
          let langkeyj: Array<any> = [String.fromCharCode(102,111,114,109,97,110,116,95,113,95,53,52,0), String.fromCharCode(103,101,116,111,112,116,95,51,95,50,54,0)];
         turnb = "2";
         launchM /= Math.max(parseFloat(`${1 ^ parseInt(`${launchM}`)}`), 5);
         langkeyj = [2];
       let anythinke: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,101,100,95,98,95,52,57,0),239], [String.fromCharCode(115,95,49,48,48,95,104,101,120,99,104,97,114,105,110,116,0),402], [String.fromCharCode(100,101,110,111,114,109,97,108,105,122,101,95,105,95,53,55,0),13]]);
       let typingp: Map<any, any> = new Map([[String.fromCharCode(104,119,97,101,115,95,114,95,49,52,0),278], [String.fromCharCode(108,97,116,116,105,99,101,95,97,95,53,53,0),299], [String.fromCharCode(103,97,112,108,101,115,115,95,122,95,48,0),280]]);
      mailV = (hookk.length - parseInt(`${langC}`)) < 81;
      break;
   }
    dispatch(acceptOverEighteen());

      rankl += `${updatesK.length << (Math.min(modalQ.length, 3))}`;
      modalQ = `${long_iP.length / 1}`;
   if (!photoC.includes(`${interstitialT}`)) {
      photoC += `${rankl.length | parseInt(`${langC}`)}`;
   }
      interstitialT /= Math.max(5, parseInt(`${interstitialT}`));
      rankl += `${rankl.length | 2}`;
   while (!updatesK.includes(interstitialT)) {
       let become8: Array<any> = [String.fromCharCode(102,105,120,95,117,95,51,51,0), String.fromCharCode(107,95,57,50,95,108,97,121,111,117,116,115,0)];
       let lightY = 3;
          let headerD = 5.0;
         lightY += 2 >> (Math.min(Math.abs(parseInt(`${headerD}`)), 3));
         become8.push(3);
         lightY *= 1;
         become8 = [become8.length * lightY];
          let orangeS = false;
          let hoverU: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,115,95,53,54,0),false ], [String.fromCharCode(117,110,115,105,103,110,101,100,95,101,95,53,50,0),true ], [String.fromCharCode(114,101,97,100,97,98,108,101,95,118,95,57,55,0),true ]]);
         lightY >>= Math.min(1, Math.abs(1 ^ lightY));
         orangeS = (76 > (hoverU.size - (!orangeS ? 76 : hoverU.size)));
      let refreshK = 5734661 <= become8.length;
      do {
         become8.push(1);
         if (refreshK) {
            break;
         }
      } while (refreshK && (5 >= lightY));
      updatesK.push(rankl.length);
      break;
   }
   while (4.60 == (updatesK.length - interstitialT) && 3.87 == (interstitialT - 4.60)) {
       let stepg = 0.0;
         stepg -= parseFloat(`${parseInt(`${stepg}`)}`);
         stepg /= Math.max(parseFloat(`${3}`), 1);
      if (stepg > 4.92) {
         stepg += parseFloat(`${parseInt(`${stepg}`)}`);
      }
      updatesK = [modalQ.length];
      break;
   }
    dispatch(hideAdultModeDisclaimer());

      rankl = `${1 >> (Math.min(Math.abs(parseInt(`${interstitialT}`)), 2))}`;
       let mailL: Map<any, any> = new Map([[String.fromCharCode(97,95,56,50,95,103,97,115,0),209], [String.fromCharCode(103,108,111,98,97,108,116,101,109,95,105,95,56,53,0),448]]);
      if (4 < (mailL.size >> (Math.min(5, Math.abs(mailL.size))))) {
         mailL = new Map([[`${mailL.size}`, 2]]);
      }
      let page4 = mailL.size >= 9002853;
      do {
         mailL.set(`${mailL.size}`, 2 - mailL.size);
         if (page4) {
            break;
         }
      } while ((!Array.from(mailL.values()).includes(mailL.size)) && page4);
      if (Array.from(mailL.values()).includes(mailL.size)) {
         mailL.set(`${mailL.size}`, mailL.size << (Math.min(Math.abs(mailL.size), 1)));
      }
      feedbacky ^= 3;
       let championk: Array<any> = [971, 215, 490];
      if (championk.length > 5) {
          let const_4s = String.fromCharCode(113,95,53,52,95,99,108,101,97,114,98,105,116,0);
          let scorey = String.fromCharCode(109,95,56,56,95,108,111,99,107,115,0);
          let whatsappF = String.fromCharCode(119,97,105,116,105,110,103,95,49,95,53,56,0);
          let floatingV: Map<any, any> = new Map([[String.fromCharCode(120,95,49,56,95,105,110,102,111,0),162], [String.fromCharCode(106,95,52,50,95,97,103,97,116,101,0),901]]);
         championk = [(String.fromCharCode(98,0) == scorey ? scorey.length : whatsappF.length)];
         const_4s = `${(const_4s == String.fromCharCode(114,0) ? floatingV.size : const_4s.length)}`;
         whatsappF += "1";
         floatingV.set(`${const_4s}`, floatingV.size << (Math.min(Math.abs(2), 1)));
      }
      while ((championk.length | 1) >= 2) {
         championk = [championk.length];
         break;
      }
       let filter9: Map<any, any> = new Map([[String.fromCharCode(117,95,50,51,95,111,109,112,111,115,101,0),true ], [String.fromCharCode(102,95,54,52,95,98,114,105,100,103,101,97,98,108,101,0),true ]]);
       let eactU: Map<any, any> = new Map([[String.fromCharCode(111,117,116,115,105,100,101,95,50,95,57,49,0),92], [String.fromCharCode(101,95,51,57,95,102,114,97,109,101,102,111,114,109,97,116,0),577]]);
      hookw += `${2 << (Math.min(4, photoC.length))}`;
      rankl += "1";
   while (rankl.includes(photoC)) {
      rankl += "3";
      break;
   }
      long_iP = [photoC.length];
   while (!photoC.includes(`${chinaQ.size}`)) {
       let ajax8 = true;
       let inactived = 0;
       let canvas0 = 3.0;
      for (let t = 0; t < 2; t++) {
         canvas0 /= Math.max(4, 1);
      }
          let placeholderD = 2;
         ajax8 = !ajax8;
         placeholderD >>= Math.min(4, Math.abs(2 << (Math.min(4, Math.abs(placeholderD)))));
          let taiwanc: Array<any> = [522, 124];
         canvas0 += 2 % (Math.max(8, taiwanc.length));
      while (ajax8) {
         inactived -= inactived - 3;
         break;
      }
          let zhuboZ = true;
          let productI = String.fromCharCode(119,95,49,55,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0);
         canvas0 /= Math.max(2, productI.length ^ 2);
         zhuboZ = !zhuboZ;
         productI = `${((zhuboZ ? 4 : 2))}`;
      photoC += `${long_iP.length & 1}`;
      break;
   }
    

   let resendJ = mailV ? !mailV : mailV;
   do {
       let plays = String.fromCharCode(114,111,117,116,101,95,52,95,56,51,0);
       let styleQ = 3.0;
       let splashA = 5.0;
         styleQ += parseInt(`${splashA}`) & parseInt(`${styleQ}`);
      let selectedl = plays == String.fromCharCode(97,113,54,113,120,49,52,112,103,102,0);
      do {
         plays = `${plays.length}`;
         if (selectedl) {
            break;
         }
      } while (((4 & plays.length) == 3) && selectedl);
       let greyn = 3.0;
       let termsl = String.fromCharCode(109,95,50,52,95,104,113,100,110,100,0);
       let orientationw = String.fromCharCode(104,95,57,56,95,105,115,109,108,0);
         greyn *= parseFloat(`${orientationw.length}`);
      mailV = lessX <= styleQ;
      if (resendJ) {
         break;
      }
   } while (resendJ && (3 == chinaQ.size && 3 == (chinaQ.size & 3)));
       let googlem = true;
       let muted5 = 4.0;
       let slidere = true;
          let backgroundz: Map<any, any> = new Map([[String.fromCharCode(102,95,57,51,95,100,101,102,105,110,105,116,105,111,110,0),589], [String.fromCharCode(104,105,115,116,111,103,114,97,109,95,106,95,55,0),88]]);
         muted5 /= Math.max(5, ((googlem ? 2 : 5) % (Math.max(parseInt(`${muted5}`), 10))));
         backgroundz = new Map([[`${backgroundz.size}`, backgroundz.size]]);
      while (slidere || !googlem) {
         googlem = 98.42 > muted5 || !slidere;
         break;
      }
      if (!googlem) {
          let soundg = String.fromCharCode(114,101,109,111,118,101,100,95,49,95,57,51,0);
          let borderless_ = 2.0;
          let sportQ: Map<any, any> = new Map([[String.fromCharCode(104,95,56,52,95,110,117,108,108,0),String.fromCharCode(113,95,57,50,95,101,110,116,114,121,112,111,105,110,116,0)], [String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,118,95,53,56,0),String.fromCharCode(114,111,103,114,97,109,95,100,95,50,54,0)], [String.fromCharCode(99,95,55,53,95,101,110,116,114,121,112,111,105,110,116,0),String.fromCharCode(103,108,111,98,97,108,95,109,95,56,0)]]);
          let policym: Array<any> = [986, 364];
          let apple9 = 5;
         muted5 -= soundg.length + parseInt(`${muted5}`);
         soundg += `${policym.length << (Math.min(Math.abs(1), 1))}`;
         borderless_ += policym.length;
         sportQ = new Map([[`${sportQ.size}`, sportQ.size]]);
         apple9 &= 2;
      }
         muted5 *= (parseInt(`${muted5}`) << (Math.min(1, Math.abs((slidere ? 3 : 5)))));
         muted5 /= Math.max(((googlem ? 4 : 2) ^ parseInt(`${muted5}`)), 4);
      let hongkongC = 8753268.0 <= muted5;
      do {
          let filledi = 3.0;
          let tempq = 2.0;
         muted5 -= parseInt(`${tempq}`) ^ 1;
         filledi *= parseFloat(`${1}`);
         tempq *= parseInt(`${filledi}`) & 1;
         if (hongkongC) {
            break;
         }
      } while ((5.79 >= (2.80 * muted5) || slidere) && hongkongC);
      for (let k = 0; k < 1; k++) {
          let const_5H: Map<any, any> = new Map([[String.fromCharCode(114,95,52,95,102,97,97,110,100,99,116,0),String.fromCharCode(115,116,114,105,115,116,114,95,51,95,52,0)], [String.fromCharCode(105,115,110,111,110,122,101,114,111,95,114,95,56,56,0),String.fromCharCode(121,95,57,52,95,105,110,118,101,114,115,105,111,110,0)], [String.fromCharCode(106,95,49,51,95,118,109,97,112,115,105,110,0),String.fromCharCode(117,115,101,114,110,97,109,101,95,103,95,53,55,0)]]);
         muted5 *= parseInt(`${muted5}`) + 1;
         const_5H = new Map([[`${const_5H.size}`, const_5H.size]]);
      }
      for (let c = 0; c < 2; c++) {
         slidere = googlem || !slidere;
      }
      if (slidere) {
         slidere = googlem;
      }
      hookw += "2";
      hookw += `${hookw.length}`;
   for (let z = 0; z < 2; z++) {
      livei += `${feedbacky}`;
   }
      updatesK = [modalQ.length >> (Math.min(5, Math.abs(chinaQ.size)))];
   let ewardedA = String.fromCharCode(105,117,98,97,109,112,0) == livei;
   do {
      livei += `${1 * rankl.length}`;
      if (ewardedA) {
         break;
      }
   } while (((livei.length >> (Math.min(Math.abs(5), 2))) >= 4 && 4 >= (livei.length << (Math.min(Math.abs(5), 2)))) && ewardedA);
   if (3 >= modalQ.length) {
       let bodanq: Array<any> = [743, 114, 183];
      if (bodanq.length == bodanq.length) {
         bodanq.push(bodanq.length);
      }
      for (let j = 0; j < 1; j++) {
          let listo = String.fromCharCode(120,109,112,101,103,95,48,95,52,48,0);
          let analytic1: Array<any> = [407, 956, 215];
          let penalty6: Array<any> = [565, 325];
         bodanq.push(penalty6.length);
         listo += `${(listo == String.fromCharCode(110,0) ? listo.length : analytic1.length)}`;
         analytic1 = [1];
         penalty6.push(listo.length ^ 1);
      }
          let inactiveo: Array<any> = [764, 5, 311];
          let favicon9: Array<any> = [String.fromCharCode(115,105,112,114,100,97,116,97,95,106,95,52,54,0), String.fromCharCode(105,110,118,105,116,101,95,98,95,53,53,0)];
         bodanq = [bodanq.length];
         inactiveo = [favicon9.length << (Math.min(inactiveo.length, 3))];
         favicon9 = [inactiveo.length];
      mailV = String.fromCharCode(48,0) == modalQ;
   }
    dispatch(enableWatchAnytimeAdultMode());
  }, [])

  const handleReject = useCallback(() => {
       let shrinkj = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,98,95,49,50,0);
    let phonex = 0;
    let sheet5 = 2.0;
    let hookse: Array<any> = [355, 988, 203];
    let footballe = 2.0;
    let foundU = String.fromCharCode(121,95,50,52,95,116,101,120,116,102,105,108,101,0);
    let taiwane = String.fromCharCode(97,118,102,102,116,95,101,95,51,49,0);
    let math5: Array<any> = [444, 911, 850];
    let stationv = 2.0;
    let selectedZ = String.fromCharCode(104,95,52,95,102,117,108,102,105,108,108,0);
      sheet5 += parseFloat(`${shrinkj.length >> (Math.min(Math.abs(3), 2))}`);
   while ((math5.length / (Math.max(1, 9))) == 4) {
      phonex -= foundU.length;
      break;
   }
   let layout5 = 6523048 <= phonex;
   do {
      phonex /= Math.max(math5.length >> (Math.min(Math.abs(1), 2)), 5);
      if (layout5) {
         break;
      }
   } while (((phonex / 5) < 3) && layout5);
      footballe *= 2;
       let modelsU = 2.0;
      let delegate_fZ = modelsU >= 5437283.0;
      do {
         modelsU -= parseFloat(`${2}`);
         if (delegate_fZ) {
            break;
         }
      } while (delegate_fZ && (modelsU < modelsU));
         modelsU *= parseFloat(`${1}`);
      for (let y = 0; y < 3; y++) {
         modelsU *= parseFloat(`${parseInt(`${modelsU}`)}`);
      }
      math5 = [2 & parseInt(`${sheet5}`)];
   for (let v = 0; v < 2; v++) {
      foundU += `${phonex}`;
   }
   while (2 < (3 << (Math.min(1, hookse.length)))) {
      sheet5 /= Math.max(4, parseFloat(`${shrinkj.length}`));
      break;
   }
   for (let q = 0; q < 3; q++) {
      phonex *= math5.length;
   }
      hookse.push(3);
      taiwane += `${phonex}`;

    console.debug("rejected 18+");

      taiwane = `${parseInt(`${sheet5}`)}`;
      sheet5 -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${footballe}`)), 5))}`);
      stationv /= Math.max(1, parseInt(`${sheet5}`));
      foundU = `${(String.fromCharCode(105,0) == foundU ? foundU.length : parseInt(`${stationv}`))}`;
   while (shrinkj.length > 3) {
       let blacklistX = false;
      while (blacklistX) {
          let contexty = String.fromCharCode(105,110,116,101,114,101,115,116,95,121,95,57,57,0);
          let roomf: Map<any, any> = new Map([[String.fromCharCode(105,95,54,53,95,114,101,112,101,97,116,101,100,108,121,0),922], [String.fromCharCode(121,95,50,54,95,100,105,116,104,101,114,105,110,103,0),358], [String.fromCharCode(113,95,56,54,95,100,105,103,101,115,116,0),344]]);
          let modelsF: Map<any, any> = new Map([[String.fromCharCode(109,95,50,48,95,105,110,115,116,97,110,116,0),434], [String.fromCharCode(105,109,103,117,116,105,108,115,95,51,95,51,48,0),898]]);
         blacklistX = !blacklistX;
         contexty = `${modelsF.size}`;
         roomf = new Map([[`${modelsF.size}`, (contexty == String.fromCharCode(88,0) ? contexty.length : modelsF.size)]]);
         break;
      }
      while (!blacklistX || !blacklistX) {
         blacklistX = !blacklistX;
         break;
      }
       let selected_ = String.fromCharCode(111,95,51,56,95,114,102,102,116,105,0);
      shrinkj = "2";
      break;
   }
   let chinax = 9599956 <= math5.length;
   do {
       let g_titleC = 5;
         g_titleC <<= Math.min(Math.abs(g_titleC / 1), 2);
      let sides = g_titleC >= 6139935;
      do {
         g_titleC += 1 - g_titleC;
         if (sides) {
            break;
         }
      } while ((1 < (g_titleC / (Math.max(g_titleC, 6))) || (g_titleC / (Math.max(g_titleC, 6))) < 1) && sides);
         g_titleC <<= Math.min(1, Math.abs(g_titleC % 2));
      math5 = [1 ^ foundU.length];
      if (chinax) {
         break;
      }
   } while (chinax && (5 <= (shrinkj.length * 2)));
   let episodef = taiwane == String.fromCharCode(116,49,49,111,52,105,53,108,57,54,0);
   do {
      taiwane += `${parseInt(`${footballe}`) * parseInt(`${stationv}`)}`;
      if (episodef) {
         break;
      }
   } while ((math5.length > 2) && episodef);
       let turn9 = String.fromCharCode(100,95,52,49,95,110,105,115,116,0);
       let pointJ = 3.0;
       let reminder8 = true;
         reminder8 = !reminder8;
         reminder8 = parseFloat(`${turn9.length}`) > pointJ;
      while (4.34 < (pointJ * 2.97)) {
         pointJ += parseFloat(`${3 ^ parseInt(`${pointJ}`)}`);
         break;
      }
       let fieldg = String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,116,95,51,55,0);
      while (turn9.includes(`${reminder8}`)) {
         turn9 = `${parseInt(`${pointJ}`) | 2}`;
         break;
      }
         pointJ += (parseFloat(`${3 >> (Math.min(5, Math.abs((reminder8 ? 1 : 5))))}`));
       let arroww: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,102,117,110,99,95,109,95,49,50,0),433], [String.fromCharCode(116,105,99,107,95,99,95,57,51,0),683]]);
       let kickB: Map<any, any> = new Map([[String.fromCharCode(100,95,57,57,95,100,101,99,114,121,112,116,101,100,0),816], [String.fromCharCode(103,95,50,54,95,109,109,99,111,0),497], [String.fromCharCode(118,95,53,55,95,115,111,119,97,107,101,117,112,0),239]]);
      for (let z = 0; z < 3; z++) {
         arroww.set(`${reminder8}`, arroww.size);
      }
       let launchv = true;
       let shrinkt = false;
      stationv -= turn9.length - 1;
   for (let d = 0; d < 3; d++) {
      stationv /= Math.max(1, shrinkj.length);
   }
      shrinkj = `${1 * parseInt(`${stationv}`)}`;
    dispatch(disableAdultMode());

      phonex *= (foundU == String.fromCharCode(88,0) ? foundU.length : parseInt(`${footballe}`));
   while ((foundU.length - parseInt(`${footballe}`)) < 1 || (1 - parseInt(`${footballe}`)) < 3) {
      foundU = `${(foundU == String.fromCharCode(65,0) ? math5.length : foundU.length)}`;
      break;
   }
   for (let t = 0; t < 3; t++) {
      shrinkj += `${shrinkj.length & parseInt(`${stationv}`)}`;
   }
   while (taiwane.length >= 4) {
      sheet5 += (parseFloat(`${taiwane == String.fromCharCode(99,0) ? parseInt(`${footballe}`) : taiwane.length}`));
      break;
   }
   let expired7 = sheet5 >= 9493799.0;
   do {
      sheet5 -= parseFloat(`${2 ^ parseInt(`${sheet5}`)}`);
      if (expired7) {
         break;
      }
   } while (expired7 && (4 > taiwane.length));
   if ((sheet5 + parseFloat(`${hookse.length}`)) <= 3.6) {
      sheet5 *= parseFloat(`${parseInt(`${footballe}`) * 2}`);
   }
   if (5.71 >= (sheet5 - 5.46) || 5.46 >= (sheet5 - parseFloat(`${foundU.length}`))) {
      foundU += "2";
   }
       let less3 = 0.0;
      if ((less3 / (Math.max(3, 2))) == 4.38) {
          let updatesb = 5;
          let smallh = String.fromCharCode(100,95,50,52,0);
          let x_imagex: Array<any> = [565, 569, 337];
         less3 /= Math.max((smallh == String.fromCharCode(115,0) ? smallh.length : x_imagex.length), 4);
         updatesb >>= Math.min(5, Math.abs(updatesb ^ 1));
      }
       let adultD = String.fromCharCode(102,95,53,52,0);
      for (let e = 0; e < 2; e++) {
         adultD += `${(String.fromCharCode(102,0) == adultD ? adultD.length : parseInt(`${less3}`))}`;
      }
      stationv *= taiwane.length & math5.length;
   if (3 <= (math5.length - 3) || (stationv / (Math.max(math5.length, 3))) <= 2.18) {
       let sportL: Map<any, any> = new Map([[String.fromCharCode(121,95,51,51,95,97,99,116,97,98,0),669], [String.fromCharCode(115,99,114,101,97,109,95,48,95,56,54,0),532], [String.fromCharCode(112,114,105,110,116,118,97,108,95,102,95,49,51,0),736]]);
       let watch3: Array<any> = [String.fromCharCode(100,117,97,108,95,107,95,56,49,0), String.fromCharCode(114,95,54,49,95,112,115,110,114,120,0), String.fromCharCode(114,107,109,112,112,95,53,95,56,50,0)];
       let servicem: Map<any, any> = new Map([[String.fromCharCode(114,95,51,48,95,100,105,97,108,111,103,115,0),false ], [String.fromCharCode(105,95,49,51,95,103,100,111,99,0),false ], [String.fromCharCode(107,95,52,52,95,115,101,108,102,105,101,0),true ]]);
         sportL.set(`${watch3.length}`, sportL.size * watch3.length);
       let becomeE = 0.0;
         watch3 = [sportL.size & 1];
          let prediction3 = String.fromCharCode(99,104,97,99,104,97,95,104,95,56,55,0);
         sportL.set(`${becomeE}`, servicem.size % (Math.max(3, parseInt(`${becomeE}`))));
         prediction3 = `${prediction3.length}`;
      let grayu = sportL.size <= 5991158;
      do {
          let floatingZ = String.fromCharCode(116,101,109,112,102,105,108,101,95,111,95,54,57,0);
          let minimizeL = 5.0;
          let episodes5: Array<any> = [602, 120];
          let iconU = 0;
          let point_: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,55,95,49,56,0),465], [String.fromCharCode(114,95,51,57,95,108,101,102,116,109,111,115,116,0),237]]);
         sportL = new Map([[`${servicem.size}`, 2]]);
         floatingZ += `${iconU}`;
         minimizeL /= Math.max(iconU % (Math.max(episodes5.length, 5)), 2);
         episodes5 = [(String.fromCharCode(66,0) == floatingZ ? point_.size : floatingZ.length)];
         point_ = new Map([[`${minimizeL}`, floatingZ.length << (Math.min(Math.abs(2), 4))]]);
         if (grayu) {
            break;
         }
      } while (grayu && (!Array.from(sportL.values()).includes(becomeE)));
          let downloading9 = String.fromCharCode(99,110,111,110,99,101,95,109,95,48,0);
          let slideru = 0.0;
          let disconnectedi: Map<any, any> = new Map([[String.fromCharCode(100,95,54,50,95,115,111,110,111,0),608], [String.fromCharCode(99,95,55,49,95,115,116,97,116,105,111,110,97,114,121,0),98]]);
         servicem.set(downloading9, (downloading9 == String.fromCharCode(51,0) ? parseInt(`${slideru}`) : downloading9.length));
         slideru -= disconnectedi.size / (Math.max(disconnectedi.size, 5));
         servicem = new Map([[`${sportL.size}`, 3 << (Math.min(5, Math.abs(sportL.size)))]]);
         servicem.set(`${servicem.size}`, servicem.size);
      let rules0 = 9794144 >= servicem.size;
      do {
          let setting8 = String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,95,108,95,53,49,0);
         servicem.set(`${watch3.length}`, servicem.size);
         setting8 = `${setting8.length % (Math.max(1, 1))}`;
         if (rules0) {
            break;
         }
      } while ((servicem.get(`${watch3.length}`) == null) && rules0);
      math5.push((String.fromCharCode(116,0) == taiwane ? phonex : taiwane.length));
   }
   if (3.32 < (taiwane.length + stationv) && 5.62 < (3.32 + stationv)) {
       let iconk: Map<any, any> = new Map([[String.fromCharCode(97,95,53,49,95,115,111,110,101,119,99,111,110,110,0),116], [String.fromCharCode(98,95,56,49,95,114,101,118,97,108,105,100,97,116,101,0),991]]);
       let appleP: Array<any> = [String.fromCharCode(119,111,114,100,108,105,115,116,95,109,95,52,50,0), String.fromCharCode(121,95,51,49,95,100,105,109,105,115,115,0)];
      for (let r = 0; r < 2; r++) {
          let mailY = String.fromCharCode(106,95,49,49,95,99,104,101,99,107,0);
          let larger = 4.0;
          let short_b8j = 2.0;
          let brightnesst = 2.0;
          let statisticsV: Map<any, any> = new Map([[String.fromCharCode(107,95,54,95,109,108,111,99,107,0),729], [String.fromCharCode(115,97,109,112,108,101,99,112,121,95,110,95,57,48,0),163]]);
         appleP.push(parseInt(`${short_b8j}`));
         mailY += `${2 - statisticsV.size}`;
         larger /= Math.max(2, (parseFloat(`${String.fromCharCode(78,0) == mailY ? mailY.length : parseInt(`${brightnesst}`)}`)));
         brightnesst += parseFloat(`${parseInt(`${larger}`)}`);
         statisticsV = new Map([[`${brightnesst}`, 3]]);
      }
         appleP = [appleP.length];
       let predictionH: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,116,121,95,111,95,49,48,0),455], [String.fromCharCode(116,95,48,95,102,108,118,101,110,99,0),30], [String.fromCharCode(118,108,105,110,101,95,121,95,55,51,0),810]]);
       let constants9: Map<any, any> = new Map([[String.fromCharCode(103,95,49,54,95,104,97,100,97,109,97,114,100,0),132], [String.fromCharCode(120,95,56,56,0),632]]);
       let phone0 = String.fromCharCode(97,95,55,54,95,104,112,97,114,97,109,115,0);
       let spinner0 = String.fromCharCode(99,95,53,50,95,112,97,105,114,105,110,103,0);
      if (!spinner0.endsWith(`${phone0.length}`)) {
         spinner0 = `${spinner0.length}`;
      }
         appleP.push(2 >> (Math.min(2, Math.abs(predictionH.size))));
      stationv -= foundU.length | 2;
      iconk = new Map([[`${iconk.size}`, iconk.size & iconk.size]]);
   }
    dispatch(hideAdultModeDisclaimer());
  }, [])

  const handlePressIndicator = useCallback(() => {
       let benefitm = 5.0;
    let previews = String.fromCharCode(100,95,56,50,95,105,111,115,117,114,102,97,99,101,0);
    let rewindK: Array<any> = [954, 484, 309];
    let shootm = String.fromCharCode(110,111,116,105,102,105,101,115,95,112,95,56,52,0);
    let ballo = String.fromCharCode(102,95,56,50,95,97,117,116,111,102,105,120,0);
    let time_35: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,104,111,108,108,111,119,0),116], [String.fromCharCode(112,114,105,110,116,101,100,95,55,95,56,55,0),491], [String.fromCharCode(111,95,54,54,95,109,101,109,99,112,121,0),586]]);
    let modeg: Array<any> = [615, 310, 650];
    let handlert: Array<any> = [908, 864, 399];
    let starE = String.fromCharCode(99,111,109,112,97,115,115,95,50,95,56,51,0);
    let shootF: Array<any> = [14, 226];
   for (let d = 0; d < 1; d++) {
      benefitm *= ballo.length / 1;
   }
   if ((1 + modeg.length) > 3 && 1 > (rewindK.length + 1)) {
      modeg.push((shootm == String.fromCharCode(89,0) ? shootm.length : parseInt(`${benefitm}`)));
   }
   if (previews.length == 4) {
       let plusR: Map<any, any> = new Map([[String.fromCharCode(101,110,118,105,114,111,110,109,101,110,116,95,117,95,57,48,0),515], [String.fromCharCode(115,121,110,116,104,95,98,95,57,52,0),566], [String.fromCharCode(115,117,109,109,97,114,121,95,49,95,57,0),27]]);
       let dangerQ: Array<any> = [182, 53, 31];
       let sentryn = String.fromCharCode(114,101,110,97,109,101,95,51,95,51,52,0);
       let configureo = false;
          let xvod1 = false;
          let pausei = 1.0;
         sentryn += `${(sentryn.length + (configureo ? 4 : 4))}`;
         xvod1 = pausei >= 33.58;
         pausei -= ((xvod1 ? 5 : 3) - parseInt(`${pausei}`));
          let backD = 4.0;
         dangerQ.push(dangerQ.length);
         backD *= 3 << (Math.min(Math.abs(parseInt(`${backD}`)), 1));
          let away5 = String.fromCharCode(116,114,101,120,95,119,95,53,53,0);
          let phonex = false;
         sentryn = `${(String.fromCharCode(54,0) == sentryn ? sentryn.length : away5.length)}`;
         away5 += "2";
          let connectiong: Array<any> = [111, 130, 719];
         dangerQ = [(plusR.size + (configureo ? 4 : 1))];
         connectiong.push(connectiong.length + 2);
         plusR.set(sentryn, dangerQ.length);
       let found6 = String.fromCharCode(115,95,50,54,95,98,105,116,101,120,97,99,116,0);
       let anythinku = String.fromCharCode(105,109,112,108,105,101,115,95,121,95,53,57,0);
         found6 = `${plusR.size}`;
      if (3 >= (anythinku.length * dangerQ.length) || (anythinku.length * 3) >= 3) {
         anythinku = `${(dangerQ.length ^ (configureo ? 3 : 5))}`;
      }
          let spinnerA = String.fromCharCode(109,95,53,50,95,99,111,109,112,101,110,115,97,116,101,0);
          let nativew = 1.0;
          let champion3 = 2.0;
         dangerQ.push(parseInt(`${nativew}`));
         spinnerA += `${parseInt(`${champion3}`)}`;
         nativew *= parseInt(`${champion3}`) % (Math.max(3, 9));
         dangerQ = [(String.fromCharCode(86,0) == anythinku ? found6.length : anythinku.length)];
         plusR = new Map([[sentryn, 2]]);
         dangerQ.push(found6.length / 2);
      time_35.set(`${handlert.length}`, handlert.length / (Math.max(2, 1)));
   }
   while (!shootm.includes(`${rewindK.length}`)) {
      shootm = `${previews.length >> (Math.min(3, Math.abs(parseInt(`${benefitm}`))))}`;
      break;
   }
      previews = `${handlert.length}`;
   let indicatorT = shootm.length >= 7880484;
   do {
      shootm = `${1 >> (Math.min(1, rewindK.length))}`;
      if (indicatorT) {
         break;
      }
   } while (indicatorT && (shootm.startsWith(`${modeg.length}`)));
      benefitm += parseInt(`${benefitm}`);
   let detailsy = String.fromCharCode(112,98,57,49,121,112,0) == shootm;
   do {
       let whiteY: Array<any> = [962, 533, 109];
       let typingt = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,116,95,55,55,0);
       let moviesF: Array<any> = [614, 441];
      while (whiteY.length < 3) {
          let resendi: Map<any, any> = new Map([[String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,49,95,54,52,0),true ], [String.fromCharCode(110,95,51,95,108,111,116,116,105,101,112,97,114,115,101,114,0),true ], [String.fromCharCode(103,95,49,52,95,109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0),true ]]);
         whiteY = [moviesF.length + 2];
         resendi = new Map([[`${resendi.size}`, 3]]);
         break;
      }
      for (let v = 0; v < 1; v++) {
         whiteY = [(String.fromCharCode(100,0) == typingt ? typingt.length : whiteY.length)];
      }
         moviesF = [whiteY.length];
      if (1 <= (3 - moviesF.length) && (3 - moviesF.length) <= 3) {
         whiteY = [typingt.length];
      }
          let bottomu = 1.0;
         whiteY = [typingt.length];
         bottomu /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${bottomu}`)), 4)), 4);
      while (2 < (4 + whiteY.length)) {
         whiteY.push((String.fromCharCode(56,0) == typingt ? whiteY.length : typingt.length));
         break;
      }
      for (let f = 0; f < 1; f++) {
         typingt += `${moviesF.length << (Math.min(whiteY.length, 1))}`;
      }
      let championr = 6250341 >= moviesF.length;
      do {
         moviesF.push(typingt.length - moviesF.length);
         if (championr) {
            break;
         }
      } while (championr && ((2 - moviesF.length) <= 3 && (whiteY.length - 2) <= 5));
         typingt += `${2 ^ moviesF.length}`;
      shootm = `${(previews == String.fromCharCode(104,0) ? whiteY.length : previews.length)}`;
      if (detailsy) {
         break;
      }
   } while ((rewindK.length < shootm.length) && detailsy);
       let megaphone6 = String.fromCharCode(100,95,56,53,95,110,105,100,99,98,98,0);
       let frame_ml: Array<any> = [760, 268, 612];
       let episodex: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,120,105,112,104,108,97,99,105,110,103,0),true ], [String.fromCharCode(113,95,50,52,95,109,115,103,0),false ], [String.fromCharCode(104,95,53,53,0),true ]]);
         megaphone6 += "1";
         episodex = new Map([[`${frame_ml.length}`, frame_ml.length]]);
      let leagueO = 6138247 <= megaphone6.length;
      do {
          let moviesw: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,48,95,54,49,0),183], [String.fromCharCode(112,95,56,54,95,114,116,112,0),948]]);
          let redirecty = String.fromCharCode(104,95,53,48,95,102,105,114,115,116,108,105,110,101,0);
          let f_lock5 = String.fromCharCode(120,95,50,49,95,99,117,114,114,101,110,116,0);
         megaphone6 += `${episodex.size}`;
         moviesw = new Map([[`${moviesw.size}`, moviesw.size]]);
         redirecty = `${moviesw.size % (Math.max(3, 4))}`;
         f_lock5 += `${f_lock5.length | redirecty.length}`;
         if (leagueO) {
            break;
         }
      } while (((megaphone6.length >> (Math.min(2, frame_ml.length))) <= 1) && leagueO);
         megaphone6 = `${episodex.size >> (Math.min(Math.abs(2), 1))}`;
         episodex = new Map([[`${frame_ml.length}`, megaphone6.length ^ 1]]);
          let const_wD = 0.0;
          let dropdownm: Array<any> = [String.fromCharCode(102,102,109,112,101,103,95,52,95,53,53,0), String.fromCharCode(97,110,116,105,95,120,95,51,56,0), String.fromCharCode(108,111,97,100,101,114,95,121,95,57,50,0)];
          let k_unlocku = 2.0;
         frame_ml.push(frame_ml.length ^ parseInt(`${k_unlocku}`));
         const_wD += parseFloat(`${3}`);
         dropdownm.push(dropdownm.length);
         k_unlocku += dropdownm.length | parseInt(`${const_wD}`);
         frame_ml = [1];
          let statisticse = String.fromCharCode(97,95,50,52,95,99,108,105,112,112,105,110,103,110,111,100,101,0);
         episodex = new Map([[`${frame_ml.length}`, megaphone6.length]]);
         statisticse = `${statisticse.length ^ statisticse.length}`;
      let dangerH = frame_ml.length >= 9692222;
      do {
         frame_ml = [frame_ml.length << (Math.min(2, Math.abs(episodex.size)))];
         if (dangerH) {
            break;
         }
      } while ((!Array.from(episodex.values()).includes(frame_ml.length)) && dangerH);
      rewindK.push(3);
      benefitm += 1 % (Math.max(9, modeg.length));
       let constantsN = false;
      while (constantsN) {
         constantsN = !constantsN;
         break;
      }
         constantsN = !constantsN;
         constantsN = (constantsN ? !constantsN : constantsN);
      shootm += `${rewindK.length | previews.length}`;
   let unreadr = 8106129 <= ballo.length;
   do {
      ballo += "2";
      if (unreadr) {
         break;
      }
   } while (unreadr && (5 >= (1 & handlert.length) || (ballo.length & handlert.length) >= 1));
      benefitm -= previews.length | modeg.length;
   while (2 > (handlert.length - 3) || 1 > (handlert.length - 3)) {
      modeg = [(String.fromCharCode(108,0) == shootm ? ballo.length : shootm.length)];
      break;
   }
      ballo = `${ballo.length | 2}`;
       let notificationz: Map<any, any> = new Map([[String.fromCharCode(117,114,97,110,100,111,109,95,108,95,55,50,0),77], [String.fromCharCode(117,95,52,51,95,99,97,118,101,97,116,0),604]]);
         notificationz = new Map([[`${notificationz.size}`, notificationz.size]]);
       let goalu = String.fromCharCode(111,95,57,49,95,114,97,100,97,114,0);
       let mailT = String.fromCharCode(101,104,105,103,104,95,115,95,53,57,0);
          let modelsT = String.fromCharCode(105,95,55,55,95,110,111,99,111,108,115,101,116,0);
         mailT += `${goalu.length}`;
         modelsT += `${modelsT.length | 2}`;
      rewindK.push(starE.length);
   for (let k = 0; k < 2; k++) {
      handlert = [time_35.size / 1];
   }
   for (let s = 0; s < 3; s++) {
      previews += `${(String.fromCharCode(87,0) == previews ? previews.length : rewindK.length)}`;
   }
   if (previews != String.fromCharCode(88,0)) {
      starE += `${2 & parseInt(`${benefitm}`)}`;
   }

    dispatch(showAdultVipPrivilegeMiniVideoAction())
  }, [])

  const handleOnClose = useCallback(() => {
       let sortv = false;
    let stepN = 0.0;
    let checkbox6 = 3.0;
    let screenU: Array<any> = [207, 417, 739];
    let blackU = String.fromCharCode(119,95,49,48,95,111,99,115,112,0);
    let blackg = String.fromCharCode(105,95,53,57,95,111,109,112,111,115,101,0);
    let register_mcO = String.fromCharCode(98,114,111,97,100,99,97,115,116,95,57,95,49,56,0);
    let const_4wx = 3;
    let animation4 = 1;
    let signinupr = String.fromCharCode(98,95,52,95,97,115,115,112,111,114,116,0);
    let frame_woe = false;
    let eactf = String.fromCharCode(106,95,55,52,95,102,104,116,120,0);
    let collectionj = String.fromCharCode(100,101,109,117,120,95,114,95,57,52,0);
    let membership5 = 4.0;
    let castingS = 1.0;
   for (let j = 0; j < 1; j++) {
      frame_woe = 58.58 == stepN && const_4wx == 44;
   }
      register_mcO = `${eactf.length}`;
       let modey: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,120,95,57,55,0),806], [String.fromCharCode(110,95,50,95,117,112,115,104,105,102,116,0),629]]);
       let checkboxO = 4.0;
      if (parseInt(`${checkboxO}`) < modey.size) {
         modey = new Map([[`${modey.size}`, parseInt(`${checkboxO}`)]]);
      }
      let castd = 9254863 <= modey.size;
      do {
         modey = new Map([[`${modey.size}`, modey.size]]);
         if (castd) {
            break;
         }
      } while ((modey.size >= parseInt(`${checkboxO}`)) && castd);
      while (1 <= (modey.size % 5)) {
         checkboxO -= parseInt(`${checkboxO}`);
         break;
      }
       let room9: Array<any> = [558, 632, 775];
       let sharedm: Array<any> = [776, 462, 510];
          let detailsj = false;
         room9.push(2);
      let fastd = sharedm.length >= 9463753;
      do {
         sharedm = [sharedm.length ^ 3];
         if (fastd) {
            break;
         }
      } while (fastd && (!Array.from(modey.values()).includes(sharedm.length)));
      register_mcO += `${blackg.length}`;
      checkbox6 -= 1 ^ signinupr.length;
   let chartA = frame_woe ? !frame_woe : frame_woe;
   do {
      frame_woe = (animation4 & screenU.length) <= 61;
      if (chartA) {
         break;
      }
   } while (chartA && (sortv));
      frame_woe = blackU.length > 49;
       let disconnectedd = String.fromCharCode(121,95,54,53,95,102,108,101,120,0);
       let club4: Map<any, any> = new Map([[String.fromCharCode(114,103,101,110,95,100,95,49,53,0),312], [String.fromCharCode(122,95,56,55,0),681], [String.fromCharCode(122,111,109,98,105,101,95,57,95,52,49,0),189]]);
       let upgrade6 = String.fromCharCode(99,111,114,114,101,99,116,101,100,95,53,95,56,50,0);
       let stations7 = String.fromCharCode(98,95,56,51,95,110,110,109,111,100,0);
      if (disconnectedd.length <= stations7.length) {
         stations7 += "2";
      }
      for (let d = 0; d < 3; d++) {
          let acceptedj = String.fromCharCode(109,95,53,53,95,100,101,99,111,100,101,112,108,97,110,101,0);
          let halft = true;
         stations7 = `${acceptedj.length / (Math.max(2, 1))}`;
      }
      let splashP = String.fromCharCode(122,105,114,49,112,55,0) == upgrade6;
      do {
         upgrade6 += "3";
         if (splashP) {
            break;
         }
      } while ((disconnectedd.length < 2) && splashP);
         stations7 += `${2 + club4.size}`;
      let short_nA = 7268850 >= disconnectedd.length;
      do {
         disconnectedd = `${upgrade6.length}`;
         if (short_nA) {
            break;
         }
      } while ((disconnectedd != String.fromCharCode(85,0) || 5 > upgrade6.length) && short_nA);
      animation4 |= 3;
      stepN *= blackg.length;
      sortv = signinupr.length >= 88;
   let showP = 7005569.0 <= stepN;
   do {
       let const_eo = 4.0;
       let clube = 0;
      while ((const_eo * clube) < 4.1) {
         const_eo += 1;
         break;
      }
      for (let o = 0; o < 3; o++) {
         const_eo /= Math.max(1 & clube, 3);
      }
         clube |= parseInt(`${const_eo}`) * clube;
       let settingsO = false;
          let sharef = String.fromCharCode(105,116,111,97,95,108,95,56,53,0);
          let greyA = 1.0;
         settingsO = (sharef.length - clube) <= 31;
         sharef = `${parseInt(`${greyA}`) ^ 2}`;
         greyA /= Math.max(1, parseFloat(`${parseInt(`${greyA}`) << (Math.min(5, Math.abs(parseInt(`${greyA}`))))}`));
      if (const_eo >= clube) {
         clube |= clube - 3;
      }
      stepN -= parseInt(`${const_eo}`);
      if (showP) {
         break;
      }
   } while ((5.87 <= (stepN * 4.83) && 4.83 <= (blackU.length * stepN)) && showP);
      register_mcO = `${register_mcO.length - const_4wx}`;
       let indicatorx: Array<any> = [399, 593];
      while (4 == (indicatorx.length % 1)) {
          let full3 = String.fromCharCode(113,95,50,54,95,99,112,117,102,108,97,103,115,0);
         indicatorx = [2 & full3.length];
         break;
      }
      let nterstitial7 = indicatorx.length >= 9100332;
      do {
          let balln = String.fromCharCode(111,99,97,108,105,122,97,116,105,111,110,95,56,95,49,50,0);
         indicatorx = [balln.length];
         if (nterstitial7) {
            break;
         }
      } while (((indicatorx.length + 5) >= 2) && nterstitial7);
          let mathJ = 3.0;
          let rank1 = false;
         indicatorx.push(indicatorx.length << (Math.min(Math.abs(2), 3)));
         mathJ /= Math.max(parseFloat(`${2 + parseInt(`${mathJ}`)}`), 4);
         rank1 = !rank1;
      checkbox6 *= ((frame_woe ? 1 : 5));
   let default_yN = String.fromCharCode(99,54,117,0) == signinupr;
   do {
       let chat3 = 2;
       let long_td2: Array<any> = [334, 970];
       let emoji0 = String.fromCharCode(110,95,57,56,95,114,101,97,115,115,111,99,105,97,116,101,0);
       let backw = 4.0;
      if ((backw / (Math.max(8, parseFloat(`${chat3}`)))) >= 1.43 || 1.43 >= (backw / (Math.max(8, parseFloat(`${chat3}`))))) {
          let teamD = 4.0;
          let chatz = 0.0;
          let dialogl: Array<any> = [String.fromCharCode(105,110,111,117,116,115,95,50,95,56,48,0), String.fromCharCode(117,95,52,53,95,112,97,110,101,108,0)];
          let mapping0 = 1.0;
         chat3 ^= 3 / (Math.max(1, parseInt(`${chatz}`)));
         teamD *= parseFloat(`${dialogl.length - 3}`);
         chatz *= 3 % (Math.max(parseInt(`${teamD}`), 3));
         dialogl = [dialogl.length];
         mapping0 -= parseFloat(`${parseInt(`${teamD}`) << (Math.min(4, Math.abs(parseInt(`${mapping0}`))))}`);
      }
          let logoutH: Array<any> = [694, 407, 85];
         backw *= parseFloat(`${1}`);
         logoutH = [1 ^ logoutH.length];
      while (2 < emoji0.length) {
          let vignette8 = String.fromCharCode(116,95,52,49,95,98,119,103,116,0);
          let chinav = 5.0;
         emoji0 += `${(String.fromCharCode(107,0) == vignette8 ? long_td2.length : vignette8.length)}`;
         chinav *= parseInt(`${chinav}`);
         break;
      }
      for (let k = 0; k < 2; k++) {
         chat3 *= emoji0.length >> (Math.min(1, Math.abs(chat3)));
      }
          let register_4cF: Map<any, any> = new Map([[String.fromCharCode(118,95,53,49,95,116,119,111,109,0),String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,51,95,49,57,0)], [String.fromCharCode(121,95,49,51,95,120,110,97,115,109,0),String.fromCharCode(107,95,50,95,116,104,114,111,119,0)]]);
          let desc9 = false;
         chat3 &= 2 ^ long_td2.length;
         register_4cF = new Map([[`${register_4cF.size}`, register_4cF.size % 2]]);
         desc9 = (26 < (register_4cF.size >> (Math.min(5, Math.abs((desc9 ? register_4cF.size : 65))))));
      if (!emoji0.endsWith(`${backw}`)) {
          let searchbarl = String.fromCharCode(99,95,49,48,48,95,105,110,103,114,101,115,115,0);
          let hoverl = 3.0;
         emoji0 += `${(emoji0 == String.fromCharCode(74,0) ? parseInt(`${backw}`) : emoji0.length)}`;
         searchbarl = `${(searchbarl == String.fromCharCode(65,0) ? parseInt(`${hoverl}`) : searchbarl.length)}`;
         hoverl /= Math.max(parseFloat(`${parseInt(`${hoverl}`) % (Math.max(1, 1))}`), 4);
      }
       let confirmation1 = true;
         chat3 ^= 2 ^ long_td2.length;
      if (!confirmation1) {
         confirmation1 = !emoji0.endsWith(`${backw}`);
      }
          let historyv = String.fromCharCode(111,117,116,108,105,110,101,95,116,95,54,52,0);
          let sentryG = String.fromCharCode(103,95,49,52,95,100,117,112,99,108,0);
         long_td2 = [sentryG.length];
         historyv += "1";
         sentryG = `${historyv.length << (Math.min(Math.abs(3), 4))}`;
      while (!long_td2.includes(backw)) {
         backw /= Math.max(1, parseFloat(`${1 - emoji0.length}`));
         break;
      }
          let auto_01 = String.fromCharCode(115,117,98,102,114,97,109,101,115,95,56,95,53,54,0);
         chat3 %= Math.max(emoji0.length % (Math.max(8, parseInt(`${backw}`))), 5);
         auto_01 += `${3 - auto_01.length}`;
      signinupr = `${register_mcO.length % (Math.max(6, blackU.length))}`;
      if (default_yN) {
         break;
      }
   } while (default_yN && ((2 + parseInt(`${checkbox6}`)) < 5 && (signinupr.length + 2) < 4));
   while (5 <= signinupr.length || sortv) {
       let privacyo = String.fromCharCode(120,95,49,53,95,102,105,110,116,0);
       let plashH = 5;
       let robotoJ = String.fromCharCode(119,97,115,95,112,95,53,57,0);
       let chatI: Map<any, any> = new Map([[String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,57,95,49,56,0),false ], [String.fromCharCode(100,95,55,49,95,104,111,114,105,103,0),true ]]);
       let downloader7 = String.fromCharCode(109,97,121,98,101,95,101,95,51,56,0);
         plashH &= chatI.size;
         chatI.set(downloader7, plashH / (Math.max(downloader7.length, 5)));
         plashH ^= plashH;
         robotoJ = `${privacyo.length & 3}`;
         plashH -= chatI.size;
      if (2 > (5 % (Math.max(7, plashH)))) {
         downloader7 = `${privacyo.length & chatI.size}`;
      }
         privacyo = "2";
          let lightG = false;
          let apple2: Map<any, any> = new Map([[String.fromCharCode(107,95,52,50,95,98,119,114,105,116,101,0),129], [String.fromCharCode(98,97,99,107,95,52,95,50,54,0),428], [String.fromCharCode(97,95,53,48,95,111,112,101,110,105,110,103,0),105]]);
         chatI = new Map([[`${apple2.size}`, chatI.size ^ 3]]);
         lightG = !lightG;
         apple2 = new Map([[`${lightG}`, ((lightG ? 5 : 1) + (lightG ? 1 : 2))]]);
         plashH &= (privacyo == String.fromCharCode(95,0) ? plashH : privacyo.length);
      while ((chatI.size % (Math.max(2, 8))) > 2 || 2 > (plashH % (Math.max(2, 5)))) {
          let searchS: Map<any, any> = new Map([[String.fromCharCode(104,95,54,52,95,101,108,97,115,116,105,99,0),String.fromCharCode(102,95,57,48,95,115,105,103,105,100,0)], [String.fromCharCode(111,95,50,48,95,115,104,111,114,116,116,101,114,109,0),String.fromCharCode(115,95,51,55,95,112,114,105,110,116,0)]]);
          let stationl: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,99,95,109,95,55,55,0),4], [String.fromCharCode(111,95,56,50,95,112,114,105,109,101,0),354]]);
         plashH *= 1 | plashH;
         searchS = new Map([[`${stationl.size}`, 3 << (Math.min(2, Math.abs(searchS.size)))]]);
         stationl.set(`${searchS.size}`, searchS.size);
         break;
      }
      let alertC = downloader7.length >= 8312851;
      do {
          let bingi = 4;
          let type_hjI: Array<any> = [815, 668, 657];
          let window_pjo: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,110,95,50,52,0),130], [String.fromCharCode(112,95,55,57,0),55]]);
          let networkj = 5.0;
          let borderlessf: Map<any, any> = new Map([[String.fromCharCode(116,95,51,51,95,109,97,110,116,105,115,115,97,0),665], [String.fromCharCode(101,95,52,48,95,120,97,115,109,0),331], [String.fromCharCode(105,110,115,101,114,116,101,114,95,108,95,51,0),840]]);
         downloader7 = `${plashH - bingi}`;
         bingi |= 2;
         type_hjI.push(parseInt(`${networkj}`));
         window_pjo = new Map([[`${window_pjo.size}`, window_pjo.size]]);
         networkj *= borderlessf.size;
         borderlessf = new Map([[`${window_pjo.size}`, 1]]);
         if (alertC) {
            break;
         }
      } while ((privacyo.length < downloader7.length) && alertC);
          let hoverC = 1.0;
          let clearx = String.fromCharCode(115,109,111,111,116,104,95,121,95,51,51,0);
         downloader7 = "2";
         hoverC -= parseInt(`${hoverC}`) & clearx.length;
         clearx += `${(String.fromCharCode(90,0) == clearx ? clearx.length : parseInt(`${hoverC}`))}`;
         chatI.set(downloader7, 3 * privacyo.length);
         robotoJ = "2";
         plashH &= (robotoJ == String.fromCharCode(104,0) ? chatI.size : robotoJ.length);
      signinupr += `${parseInt(`${checkbox6}`) ^ 3}`;
      break;
   }
   for (let n = 0; n < 3; n++) {
      eactf = `${const_4wx}`;
   }
   if (5 >= (parseInt(`${checkbox6}`) * const_4wx) || 4.71 >= (4.44 * checkbox6)) {
      const_4wx >>= Math.min(Math.abs((2 ^ (sortv ? 1 : 4))), 2);
   }
       let upgrade1: Array<any> = [838, 56];
       let temperatureZ = 3.0;
      while (2 > (parseInt(`${temperatureZ}`) / (Math.max(6, upgrade1.length)))) {
         upgrade1.push(parseInt(`${temperatureZ}`) | upgrade1.length);
         break;
      }
      if (5.32 <= (parseFloat(`${upgrade1.length}`) + temperatureZ)) {
          let logoutV: Array<any> = [813, 590];
          let textU: Array<any> = [803, 72, 374];
         temperatureZ *= parseFloat(`${2 * textU.length}`);
         logoutV = [logoutV.length + 1];
         textU.push(2);
      }
      if (parseFloat(`${upgrade1.length}`) == temperatureZ) {
          let blacklistz = 2.0;
          let fillN: Array<any> = [569, 413, 711];
         upgrade1 = [1];
         blacklistz *= parseFloat(`${fillN.length}`);
         fillN.push(3);
      }
      let texta = 6312252 >= upgrade1.length;
      do {
         upgrade1.push(1);
         if (texta) {
            break;
         }
      } while ((3.11 <= (temperatureZ - parseFloat(`${upgrade1.length}`)) || (5 - upgrade1.length) <= 3) && texta);
         upgrade1.push(upgrade1.length);
       let sharedl: Array<any> = [805, 767];
      blackU += `${parseInt(`${temperatureZ}`)}`;
   let emoji8 = sortv ? !sortv : sortv;
   do {
      sortv = 48 <= blackU.length;
      if (emoji8) {
         break;
      }
   } while ((!eactf.startsWith(`${sortv}`)) && emoji8);
   while ((checkbox6 * signinupr.length) == 2.67) {
      signinupr += `${(parseInt(`${checkbox6}`) * (frame_woe ? 1 : 4))}`;
      break;
   }

    dispatch(hideAdultVipPrivilegeMiniVideoAction())

       let checkboxh = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,104,95,56,56,0);
      let notificationa = checkboxh == String.fromCharCode(52,118,110,100,0);
      do {
         checkboxh = "1";
         if (notificationa) {
            break;
         }
      } while ((checkboxh.includes(checkboxh)) && notificationa);
         checkboxh = `${2 * checkboxh.length}`;
         checkboxh += `${checkboxh.length - checkboxh.length}`;
      checkbox6 -= parseInt(`${checkbox6}`);
      frame_woe = eactf == String.fromCharCode(116,0) && screenU.length < 26;
       let corner6 = String.fromCharCode(108,95,54,52,95,115,105,98,108,105,110,103,0);
       let turnt = 3;
       let configw = 2.0;
         turnt |= turnt;
      for (let v = 0; v < 2; v++) {
         corner6 = `${turnt / (Math.max(3, parseInt(`${configw}`)))}`;
      }
      while (3 == (turnt - corner6.length)) {
         turnt += corner6.length;
         break;
      }
          let feedback7 = String.fromCharCode(102,95,49,49,95,114,101,99,111,103,110,105,122,101,100,0);
          let nextS = 0.0;
          let logoG: Map<any, any> = new Map([[String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,98,95,54,57,0),239], [String.fromCharCode(97,95,54,52,95,105,110,116,114,97,102,114,97,109,101,0),997]]);
         configw -= 2;
         feedback7 += `${1 * parseInt(`${nextS}`)}`;
         nextS += parseInt(`${nextS}`);
         logoG = new Map([[`${logoG.size}`, parseInt(`${nextS}`) ^ logoG.size]]);
         turnt -= 2 - turnt;
      if ((2.4 - configw) > 2.21 && (turnt >> (Math.min(Math.abs(1), 4))) > 1) {
         turnt |= corner6.length / (Math.max(8, turnt));
      }
      if ((configw - 5.17) >= 2.8 || (parseInt(`${configw}`) - turnt) >= 3) {
         turnt += corner6.length | turnt;
      }
         corner6 += "1";
      let zhengpianx = 4923237 <= turnt;
      do {
          let disconnectedZ = String.fromCharCode(97,95,54,48,95,100,105,115,99,111,118,101,114,0);
          let alertj = String.fromCharCode(111,112,117,115,101,110,99,95,108,95,49,48,0);
         turnt |= turnt;
         disconnectedZ = `${alertj.length + disconnectedZ.length}`;
         alertj += `${alertj.length - disconnectedZ.length}`;
         if (zhengpianx) {
            break;
         }
      } while ((5 > (turnt | corner6.length)) && zhengpianx);
      register_mcO = `${((frame_woe ? 1 : 1))}`;
   while (register_mcO.startsWith(`${checkbox6}`)) {
       let policyr = String.fromCharCode(102,95,57,57,95,102,97,115,116,116,101,115,116,0);
       let terms0 = 1;
       let mutedo = String.fromCharCode(98,95,49,48,95,105,110,118,105,116,101,100,0);
       let rankF = 1.0;
       let catalogi: Array<any> = [String.fromCharCode(121,95,51,52,95,99,111,108,0), String.fromCharCode(115,95,50,55,95,112,114,101,118,111,117,115,0), String.fromCharCode(106,95,50,54,95,97,99,116,105,118,101,109,97,112,0)];
      for (let y = 0; y < 3; y++) {
         mutedo += `${mutedo.length}`;
      }
         policyr = `${(mutedo == String.fromCharCode(52,0) ? mutedo.length : parseInt(`${rankF}`))}`;
      let models8 = terms0 >= 7542871;
      do {
          let topic4 = 2.0;
          let textt = true;
          let hongkongI = String.fromCharCode(114,95,53,51,95,111,118,101,114,117,115,101,0);
         terms0 /= Math.max(((textt ? 2 : 1) * parseInt(`${rankF}`)), 2);
         topic4 /= Math.max(2, parseFloat(`${2}`));
         textt = 94 < hongkongI.length;
         hongkongI = "3";
         if (models8) {
            break;
         }
      } while (models8 && (3 > (policyr.length / (Math.max(4, 8))) && (terms0 / 4) > 4));
      if ((rankF / (Math.max(2.69, 3))) > 1.93 && (2.69 / (Math.max(3, rankF))) > 4.75) {
          let aboutw = 2;
          let expand5 = 2.0;
          let appsn: Map<any, any> = new Map([[String.fromCharCode(97,95,52,48,95,98,97,99,107,115,112,97,99,101,0),true ], [String.fromCharCode(114,101,115,97,109,112,108,101,95,57,95,51,51,0),false ], [String.fromCharCode(109,95,54,51,95,102,101,101,0),false ]]);
          let appleW = String.fromCharCode(112,114,111,98,101,114,95,107,95,52,55,0);
         catalogi = [appsn.size >> (Math.min(Math.abs(3), 5))];
         aboutw &= 2;
         expand5 *= 2;
         appsn.set(appleW, appleW.length * parseInt(`${expand5}`));
      }
      if (4 >= (catalogi.length ^ terms0) && 4 >= (terms0 ^ catalogi.length)) {
         terms0 >>= Math.min(mutedo.length, 3);
      }
      if (policyr.length == mutedo.length) {
          let projectv = true;
          let backc = 4.0;
          let editl = String.fromCharCode(115,95,50,48,95,112,114,101,118,105,101,119,112,112,0);
         mutedo += "3";
         projectv = editl == String.fromCharCode(49,0);
         backc += parseFloat(`${3 ^ parseInt(`${backc}`)}`);
         editl += `${(parseInt(`${backc}`) / (Math.max(1, (projectv ? 3 : 4))))}`;
      }
         rankF /= Math.max(2, parseFloat(`${1 + terms0}`));
          let xvodT = String.fromCharCode(115,111,97,99,99,101,112,116,95,113,95,52,0);
          let overlayw = String.fromCharCode(99,111,108,95,116,95,57,54,0);
          let basketball8 = String.fromCharCode(106,95,55,57,95,102,101,97,116,117,114,101,115,0);
         rankF += parseFloat(`${3 ^ policyr.length}`);
         xvodT += `${1 | xvodT.length}`;
         overlayw += `${1 ^ xvodT.length}`;
         basketball8 = "2";
         policyr += `${(mutedo == String.fromCharCode(98,0) ? terms0 : mutedo.length)}`;
         terms0 <<= Math.min(3, Math.abs(2 << (Math.min(3, policyr.length))));
      for (let z = 0; z < 3; z++) {
         terms0 >>= Math.min(2, Math.abs(2 | catalogi.length));
      }
      while ((catalogi.length | 1) > 1 || 1 > (1 | catalogi.length)) {
          let signinupd = 5.0;
          let countdownJ: Array<any> = [781, 712, 583];
          let phonet = String.fromCharCode(108,105,98,115,104,105,110,101,95,117,95,54,52,0);
         catalogi.push(1 % (Math.max(4, terms0)));
         signinupd *= parseFloat(`${phonet.length / 2}`);
         countdownJ = [3];
         phonet = `${phonet.length >> (Math.min(2, countdownJ.length))}`;
         break;
      }
          let bottomS: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,95,122,95,57,51,0),6], [String.fromCharCode(112,114,101,118,101,110,116,95,49,95,50,54,0),693]]);
          let feedbackQ = String.fromCharCode(107,95,55,56,95,112,117,116,98,121,116,101,0);
         rankF -= parseFloat(`${2 >> (Math.min(2, mutedo.length))}`);
         bottomS = new Map([[`${bottomS.size}`, feedbackQ.length]]);
         feedbackQ = `${1 * bottomS.size}`;
         rankF *= parseFloat(`${terms0 | 1}`);
          let hovert = String.fromCharCode(103,95,49,95,114,105,110,102,0);
          let streaming1 = String.fromCharCode(120,103,101,116,98,118,95,105,95,53,52,0);
          let placementN = 3.0;
         catalogi.push(terms0 << (Math.min(catalogi.length, 2)));
         hovert += "3";
         streaming1 = `${hovert.length}`;
         placementN *= parseFloat(`${1}`);
      checkbox6 += policyr.length;
      break;
   }
   while (2 == (blackU.length | 4) && 1 == (blackU.length ^ 4)) {
      blackU = `${(String.fromCharCode(55,0) == collectionj ? collectionj.length : (sortv ? 4 : 2))}`;
      break;
   }
   for (let b = 0; b < 2; b++) {
      animation4 &= (String.fromCharCode(65,0) == collectionj ? collectionj.length : animation4);
   }
      screenU.push(eactf.length);
       let left0 = String.fromCharCode(115,101,97,108,101,100,95,56,95,51,56,0);
       let canvasR: Array<any> = [698, 595];
       let tempW = 3.0;
       let interneto = String.fromCharCode(106,95,49,57,95,114,105,102,102,0);
       let tickw = String.fromCharCode(99,95,52,53,0);
      if ((tickw.length * 1) >= 1 || 5.100 >= (parseFloat(`${tickw.length}`) - tempW)) {
         tickw += `${parseInt(`${tempW}`)}`;
      }
          let prediction8 = String.fromCharCode(110,95,54,55,95,115,101,103,109,101,110,116,97,116,105,111,110,0);
          let otherZ: Array<any> = [673, 612];
         interneto += `${left0.length}`;
         prediction8 = `${otherZ.length - 3}`;
         otherZ.push(otherZ.length);
      for (let e = 0; e < 3; e++) {
         tempW += (parseFloat(`${interneto == String.fromCharCode(90,0) ? canvasR.length : interneto.length}`));
      }
      let telegram1 = canvasR.length <= 9258250;
      do {
          let dropdownD: Array<any> = [String.fromCharCode(110,101,116,101,113,95,110,95,55,52,0), String.fromCharCode(106,95,56,49,95,115,109,101,97,114,0)];
          let usernamem = String.fromCharCode(109,95,53,55,95,102,105,108,101,112,97,116,104,0);
         canvasR = [dropdownD.length + 2];
         dropdownD = [usernamem.length];
         usernamem = `${usernamem.length + usernamem.length}`;
         if (telegram1) {
            break;
         }
      } while (telegram1 && (!left0.endsWith(`${canvasR.length}`)));
      while (left0.length >= tickw.length) {
         left0 += `${tickw.length % 2}`;
         break;
      }
      let math7 = 5803453 <= left0.length;
      do {
          let heartr = 1.0;
          let suggestionb = String.fromCharCode(103,95,51,52,95,97,99,104,105,101,118,101,100,0);
          let matchesA = String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,54,95,56,56,0);
          let untickC: Array<any> = [703, 213];
          let progressU = 5;
         left0 += "2";
         heartr *= parseFloat(`${matchesA.length | 3}`);
         suggestionb = `${untickC.length * suggestionb.length}`;
         matchesA = `${(String.fromCharCode(90,0) == suggestionb ? progressU : suggestionb.length)}`;
         untickC.push(2);
         progressU <<= Math.min(2, Math.abs(3 + parseInt(`${heartr}`)));
         if (math7) {
            break;
         }
      } while ((left0.length > interneto.length) && math7);
      while ((canvasR.length << (Math.min(Math.abs(4), 2))) < 4 && 1 < (4 << (Math.min(4, canvasR.length)))) {
         canvasR = [3];
         break;
      }
      if (left0.length == canvasR.length) {
          let upgradeV: Map<any, any> = new Map([[String.fromCharCode(98,95,56,50,95,112,101,101,107,0),795], [String.fromCharCode(106,95,53,95,115,101,99,115,0),654]]);
          let crown2 = 3.0;
         canvasR = [(tickw == String.fromCharCode(90,0) ? canvasR.length : tickw.length)];
         upgradeV = new Map([[`${upgradeV.size}`, 3]]);
         crown2 += upgradeV.size;
      }
      animation4 /= Math.max(blackg.length, 2);
   while (eactf.length >= blackU.length) {
      blackU = `${1 << (Math.min(4, collectionj.length))}`;
      break;
   }
   for (let g = 0; g < 3; g++) {
      screenU = [const_4wx << (Math.min(register_mcO.length, 2))];
   }
   for (let v = 0; v < 3; v++) {
       let editH = 0.0;
       let dataO = true;
       let styleF: Map<any, any> = new Map([[String.fromCharCode(99,95,55,51,95,111,109,109,111,110,0),896], [String.fromCharCode(99,97,114,101,102,117,108,108,121,95,48,95,49,56,0),795]]);
         dataO = styleF.get(`${dataO}`) == null;
         dataO = styleF.size < 86;
      if (!dataO) {
         editH += parseFloat(`${1}`);
      }
      while (dataO) {
          let moreP = String.fromCharCode(108,95,56,52,95,114,101,99,111,110,102,105,103,0);
         dataO = editH >= 85.2;
         moreP += "2";
         break;
      }
      for (let q = 0; q < 3; q++) {
          let field2 = true;
          let combine0 = String.fromCharCode(108,111,99,107,97,98,108,101,95,99,95,57,55,0);
          let sportP = String.fromCharCode(119,95,57,48,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0);
         editH -= (parseFloat(`${(dataO ? 3 : 5) % (Math.max(parseInt(`${editH}`), 7))}`));
         field2 = (17 >= (combine0.length | (!field2 ? combine0.length : 17)));
         sportP = "2";
      }
         editH -= (parseFloat(`${(dataO ? 3 : 3) % (Math.max(5, parseInt(`${editH}`)))}`));
         dataO = styleF.size > 30 || dataO;
      while (dataO) {
         dataO = 4.70 == editH;
         break;
      }
         styleF.set(`${editH}`, ((dataO ? 4 : 2) % (Math.max(10, parseInt(`${editH}`)))));
      sortv = eactf.length >= signinupr.length;
   }
   while ((3 << (Math.min(4, Math.abs(const_4wx)))) <= 4 || 3 <= (const_4wx << (Math.min(4, Math.abs(animation4))))) {
       let otherB = String.fromCharCode(107,97,108,109,97,110,95,52,95,52,48,0);
         otherB += `${(otherB == String.fromCharCode(110,0) ? otherB.length : otherB.length)}`;
          let mutedv = String.fromCharCode(110,98,105,116,115,95,108,95,57,54,0);
         otherB += `${(otherB == String.fromCharCode(111,0) ? mutedv.length : otherB.length)}`;
       let styleP = 0.0;
       let light9 = 1.0;
      const_4wx += blackg.length & 1;
      break;
   }
   if ((4.19 - checkbox6) == 2.67) {
       let inactive4 = String.fromCharCode(118,95,55,51,95,115,104,111,119,119,97,118,101,115,112,105,99,0);
       let dropdownH = 4.0;
      for (let t = 0; t < 3; t++) {
          let sheetQ = String.fromCharCode(118,95,50,57,95,115,117,109,120,0);
          let cornerU = 5.0;
          let screenM = 0.0;
          let trashP = String.fromCharCode(112,95,50,48,95,103,101,110,104,0);
          let contextV = 1;
         dropdownH /= Math.max(2, (inactive4 == String.fromCharCode(53,0) ? inactive4.length : contextV));
         sheetQ += "2";
         cornerU /= Math.max(2 & trashP.length, 2);
         screenM *= parseInt(`${screenM}`) & 1;
         trashP += `${sheetQ.length % 1}`;
         contextV <<= Math.min(2, sheetQ.length);
      }
      for (let x = 0; x < 3; x++) {
          let handlerV = String.fromCharCode(110,95,52,52,95,115,118,101,99,116,111,114,0);
          let hovera: Map<any, any> = new Map([[String.fromCharCode(97,97,99,116,97,98,95,57,95,54,48,0),0], [String.fromCharCode(107,95,52,50,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0),770], [String.fromCharCode(106,95,56,50,95,101,120,101,99,117,116,111,114,0),230]]);
          let brightnessD = String.fromCharCode(99,95,51,95,100,101,112,101,110,100,101,110,99,105,101,115,0);
          let catagoryT = 3.0;
         dropdownH += parseInt(`${catagoryT}`);
         handlerV = `${hovera.size + brightnessD.length}`;
         hovera = new Map([[brightnessD, handlerV.length]]);
         catagoryT /= Math.max(5, (String.fromCharCode(107,0) == brightnessD ? brightnessD.length : hovera.size));
      }
      let nalyticsi = 5758653.0 >= dropdownH;
      do {
         dropdownH *= inactive4.length % (Math.max(2, parseInt(`${dropdownH}`)));
         if (nalyticsi) {
            break;
         }
      } while ((4 > (inactive4.length + parseInt(`${dropdownH}`))) && nalyticsi);
      while (inactive4.endsWith(`${dropdownH}`)) {
          let policyL: Array<any> = [342, 570];
          let progress8 = 5.0;
         dropdownH *= parseInt(`${dropdownH}`) / 1;
         policyL = [2];
         progress8 /= Math.max(1, policyL.length);
         break;
      }
       let y_position_ = 2.0;
       let moduler = 4.0;
       let trashO = 3.0;
      checkbox6 -= eactf.length;
   }
   if (signinupr.endsWith(`${stepN}`)) {
      stepN += 3;
   }
   for (let t = 0; t < 3; t++) {
      blackU = `${signinupr.length & 2}`;
   }
   for (let s = 0; s < 2; s++) {
       let bannerF = false;
       let currentl = String.fromCharCode(106,95,49,57,95,114,97,100,97,114,0);
       let clocky = String.fromCharCode(99,95,53,54,95,111,117,116,112,117,116,115,0);
         currentl += `${1 * currentl.length}`;
      while (currentl == clocky) {
          let mutedC = String.fromCharCode(107,95,51,50,95,111,117,116,100,97,116,101,100,0);
          let descH = 5;
          let dicep = 2.0;
          let morePO = true;
          let championb: Array<any> = [String.fromCharCode(97,95,57,54,0), String.fromCharCode(106,95,54,56,0)];
         clocky = `${((morePO ? 2 : 3) & 1)}`;
         mutedC += `${parseInt(`${dicep}`)}`;
         descH /= Math.max(1, 3);
         dicep *= parseInt(`${dicep}`);
         morePO = mutedC.length > dicep;
         championb.push((mutedC == String.fromCharCode(72,0) ? descH : mutedC.length));
         break;
      }
      if (clocky != String.fromCharCode(74,0) || currentl == String.fromCharCode(57,0)) {
         currentl = `${currentl.length}`;
      }
      if (4 <= clocky.length && !bannerF) {
         clocky += `${(clocky == String.fromCharCode(70,0) ? currentl.length : clocky.length)}`;
      }
          let resultP: Array<any> = [702, 450, 0];
          let lineG: Array<any> = [313, 454];
          let hookI = String.fromCharCode(97,95,55,54,95,97,99,116,111,114,115,0);
         clocky = `${lineG.length - hookI.length}`;
         resultP.push(resultP.length * 2);
         lineG = [resultP.length];
      let rooml = currentl.length <= 9036240;
      do {
         currentl += `${(1 / (Math.max(5, (bannerF ? 2 : 4))))}`;
         if (rooml) {
            break;
         }
      } while (rooml && (2 > currentl.length));
          let gestures2 = false;
          let sharedp = 4.0;
         currentl += `${currentl.length >> (Math.min(Math.abs(2), 3))}`;
         gestures2 = sharedp < 74.67;
         sharedp += parseInt(`${sharedp}`) | 3;
      for (let e = 0; e < 3; e++) {
         bannerF = bannerF && clocky.length >= 36;
      }
       let redirectI = true;
       let episode0 = true;
      blackg += `${signinupr.length << (Math.min(4, blackU.length))}`;
   }
      checkbox6 *= parseInt(`${checkbox6}`) << (Math.min(collectionj.length, 1));
   for (let h = 0; h < 2; h++) {
      stepN -= ((sortv ? 3 : 3) | animation4);
   }
   while ((stepN * animation4) >= 5.16) {
      stepN *= ((frame_woe ? 1 : 4));
      break;
   }
    console.debug('close!!!')
  }, [])

  return (
    <View
      style={{
        ...styles.container,
        
        height: showAdultVipPrivilegeMiniVideo ? '100%' : 'auto'
      }}
    >
      {/* {watchAnytimeAdultMode && <WatchAnytimeVipModal />} */}
      {(screenState.showAdultTab) && (
        <AdultModeSwitch switchStyle={styles.switch} />
      )}
      {watchAnytimeAdultMode && !isVip && !showAdultVipPrivilegeMiniVideo &&
        <VipPrivilegeFloatingIndicator
          text1="升级VIP"
          text2="享更多福利视频 》"
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 0,
            flex: 1,
          }}
          onPress={handlePressIndicator}
        />

      }
      {/* {watchAnytimeAdultMode && (UMENG_CHANNEL != "GOOGLE_PLAY" || Platform.OS === "ios" )&& (
        <AdultModeCountdownIndicator
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 20,
            flex: 1,
          }}
        />
      )} */}
      {/* <EighteenPlusOverlay
        handleAccept={handleAccept}
        handleReject={handleReject}
      /> */}
      <AdultVipPrivilegeOverlay
        showCondition={showAdultVipPrivilegeMiniVideo}
        onClose={handleOnClose}
        showBlur={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    width: "100%",
    position: "absolute",
  },
  switch: {
    position: "absolute",
    top: 25,
    right: 20,
  },
});

export default eighteenPlusControls;
