import React, { memo, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import FastImage from "../../../components/common/gwi_with";
import { useTheme } from "@react-navigation/native";
import styles from "./fgl_less_position";
import { IconViewerGif } from "../../assets";
import { TouchableOpacity } from "react-native";
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from "../../assets";
import {
  calculateScore,
  getMatchStatus,
  liveRoomName,
} from "../../utility/utils";
import store, { PSmall } from "@redux/fj_prediction_thailand";
import { useNavigation } from "@react-navigation/native";
import { EALSource } from "../../types/x_home";
import BecomeVipOverlay from "../../../components/modal/pg_buffer_alert";
import { useAppSelector } from "@hooks/kg_index";
import { showBecomeVip } from "@redux/actions/a_switch";
import { useDispatch } from "react-redux";
import { screenModel } from "@type/nb_shared_target";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";

interface XFillButton {
  matchSche: EALSource;
  onPress?: () => any;
  followMatchIds?: Array<number>;
  isMatchPage?: boolean;
  setShowBecomeVIPOverlay: any;
  bgDark?: boolean;
  borderFlag?: string
}

const MatchSchedule = ({
  matchSche,
  onPress = () => {
       let league0 = 2.0;
    let rankm = String.fromCharCode(100,95,50,54,95,99,97,115,101,100,0);
    let yingB: Array<any> = [774, 55, 239];
    let helperc = String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,111,95,49,52,0);
    let modalC = String.fromCharCode(119,95,55,52,95,100,105,115,97,112,112,101,97,114,0);
    let privilegeK = String.fromCharCode(108,105,110,107,0);
    let mapping3 = true;
    let giftm = String.fromCharCode(108,95,55,48,95,97,100,118,97,110,99,101,100,0);
    let tumbnailB = String.fromCharCode(117,95,54,51,95,118,115,102,114,97,109,101,0);
    let aboutl = 2;
    let countdownu: Map<any, any> = new Map([[String.fromCharCode(115,104,111,117,108,100,95,97,95,54,52,0),143], [String.fromCharCode(101,95,53,51,95,101,120,112,105,114,101,100,0),386]]);
    let overlayZ = 0;
   while (giftm != privilegeK) {
      privilegeK = `${(String.fromCharCode(111,0) == privilegeK ? modalC.length : privilegeK.length)}`;
      break;
   }
   if (giftm != String.fromCharCode(76,0) && modalC == String.fromCharCode(57,0)) {
       let resendq = String.fromCharCode(110,101,99,101,115,115,97,114,121,95,111,95,52,54,0);
       let downloadingz = 5.0;
       let matches_ = String.fromCharCode(100,105,115,99,114,101,116,101,95,54,95,51,48,0);
      if (downloadingz == parseFloat(`${matches_.length}`)) {
         downloadingz /= Math.max(1, parseFloat(`${resendq.length & 3}`));
      }
      let searchbar_ = 9635288 >= resendq.length;
      do {
          let leaguek = 1.0;
          let headerq = 3.0;
          let activeO = String.fromCharCode(103,95,55,51,95,116,114,105,99,107,108,101,0);
         resendq += `${parseInt(`${downloadingz}`) / (Math.max(resendq.length, 7))}`;
         leaguek -= parseFloat(`${activeO.length}`);
         headerq /= Math.max(parseFloat(`${parseInt(`${leaguek}`) - activeO.length}`), 5);
         if (searchbar_) {
            break;
         }
      } while (searchbar_ && (!resendq.endsWith(`${downloadingz}`)));
      while (5.95 > downloadingz) {
         downloadingz += parseFloat(`${2}`);
         break;
      }
          let ballg = 3.0;
          let detailsz = 0.0;
         matches_ += `${2 ^ matches_.length}`;
         ballg += parseInt(`${detailsz}`);
          let fieldX = 2.0;
          let privacyh = 1.0;
          let predictionQ: Array<any> = [218, 273, 850];
         resendq += `${parseInt(`${fieldX}`)}`;
         fieldX *= predictionQ.length + parseInt(`${privacyh}`);
         privacyh -= parseFloat(`${parseInt(`${privacyh}`) | 3}`);
         predictionQ = [3];
      if ((resendq.length << (Math.min(Math.abs(4), 3))) == 5) {
         downloadingz /= Math.max(4, parseFloat(`${parseInt(`${downloadingz}`)}`));
      }
         downloadingz -= parseFloat(`${parseInt(`${downloadingz}`)}`);
      if ((1.98 - downloadingz) >= 5.79 && 2 >= (parseInt(`${downloadingz}`) - matches_.length)) {
         matches_ += `${2 & parseInt(`${downloadingz}`)}`;
      }
         downloadingz *= parseFloat(`${1}`);
      giftm = "2";
   }
   while ((league0 + 3.93) == 4.26) {
      giftm += `${parseInt(`${league0}`) ^ 2}`;
      break;
   }
   let window_5yl = giftm == String.fromCharCode(53,119,101,112,116,116,120,118,48,0);
   do {
      giftm = `${rankm.length}`;
      if (window_5yl) {
         break;
      }
   } while ((giftm.length < 4 || mapping3) && window_5yl);
   while (yingB.includes(league0)) {
       let policyg: Map<any, any> = new Map([[String.fromCharCode(97,115,115,112,111,114,116,95,51,95,51,48,0),667], [String.fromCharCode(114,97,119,101,110,99,95,110,95,52,52,0),469]]);
      for (let p = 0; p < 3; p++) {
         policyg = new Map([[`${policyg.size}`, policyg.size]]);
      }
      for (let j = 0; j < 2; j++) {
         policyg.set(`${policyg.size}`, policyg.size | 1);
      }
      while (Array.from(policyg.values()).includes(policyg.size)) {
          let expandY: Array<any> = [133, 171, 204];
         policyg.set(`${expandY.length}`, expandY.length);
         break;
      }
      league0 += aboutl >> (Math.min(Math.abs(2), 4));
      break;
   }
      aboutl &= 2 << (Math.min(3, modalC.length));
   let streaming5 = mapping3 ? !mapping3 : mapping3;
   do {
      mapping3 = (tumbnailB.length * yingB.length) == 65;
      if (streaming5) {
         break;
      }
   } while ((1 <= rankm.length) && streaming5);
   let short_iE = privilegeK.length <= 8204880;
   do {
      privilegeK += `${(String.fromCharCode(75,0) == rankm ? rankm.length : (mapping3 ? 4 : 1))}`;
      if (short_iE) {
         break;
      }
   } while (short_iE && (privilegeK.length <= 2));
      privilegeK += "3";
   if (2 > (countdownu.size * 5) || (5 * countdownu.size) > 5) {
      modalC += `${(String.fromCharCode(67,0) == helperc ? helperc.length : aboutl)}`;
   }
   while ((giftm.length & countdownu.size) == 1) {
      giftm = `${(helperc == String.fromCharCode(80,0) ? helperc.length : modalC.length)}`;
      break;
   }
   let carouselB = yingB.length >= 5153958;
   do {
      yingB = [privilegeK.length];
      if (carouselB) {
         break;
      }
   } while (carouselB && (5 <= (rankm.length ^ 5) && (yingB.length ^ rankm.length) <= 5));
   for (let i = 0; i < 1; i++) {
       let singaporej = 5.0;
       let regengx = 2;
       let side0: Array<any> = [String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,57,95,53,55,0), String.fromCharCode(112,95,51,51,95,112,97,108,108,101,116,101,0)];
       let selectk = String.fromCharCode(114,95,57,53,95,110,97,116,105,111,110,97,108,105,116,121,0);
       let index0 = 3.0;
      while (singaporej >= 1.33) {
         side0.push(parseInt(`${index0}`) % (Math.max(side0.length, 5)));
         break;
      }
      let become_ = 6559545.0 >= index0;
      do {
         index0 *= parseInt(`${index0}`);
         if (become_) {
            break;
         }
      } while (((index0 * side0.length) <= 2.40) && become_);
         singaporej += (parseFloat(`${String.fromCharCode(84,0) == selectk ? parseInt(`${index0}`) : selectk.length}`));
         regengx >>= Math.min(5, Math.abs(parseInt(`${singaporej}`)));
         selectk += `${3 / (Math.max(10, selectk.length))}`;
          let canvasB: Map<any, any> = new Map([[String.fromCharCode(122,95,49,55,95,107,101,101,112,97,108,105,118,101,0),String.fromCharCode(111,114,105,103,95,111,95,55,0)], [String.fromCharCode(107,101,101,112,97,108,105,118,101,95,110,95,55,51,0),String.fromCharCode(122,95,57,49,95,101,120,116,114,97,112,111,108,97,116,101,0)], [String.fromCharCode(100,101,98,117,103,98,111,120,95,54,95,51,52,0),String.fromCharCode(108,95,49,49,95,115,112,97,119,110,0)]]);
         regengx *= selectk.length;
         canvasB = new Map([[`${canvasB.size}`, canvasB.size]]);
      if (3 > side0.length) {
         side0.push((String.fromCharCode(108,0) == selectk ? selectk.length : parseInt(`${index0}`)));
      }
      for (let p = 0; p < 2; p++) {
          let pressured = String.fromCharCode(121,95,54,51,95,112,97,103,101,110,117,109,98,101,114,0);
          let bufferZ: Map<any, any> = new Map([[String.fromCharCode(108,95,49,51,95,104,101,97,100,115,101,116,0),352], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,120,95,53,51,0),961]]);
         regengx ^= 3;
         pressured = `${pressured.length}`;
         bufferZ = new Map([[`${bufferZ.size}`, pressured.length]]);
      }
         selectk += `${3 / (Math.max(8, side0.length))}`;
      for (let u = 0; u < 3; u++) {
         index0 *= parseInt(`${singaporej}`) - regengx;
      }
         regengx += parseInt(`${singaporej}`) / (Math.max(selectk.length, 9));
      for (let h = 0; h < 3; h++) {
         singaporej /= Math.max(parseFloat(`${regengx ^ 2}`), 3);
      }
      while (2.73 == (2.44 - index0)) {
         index0 -= side0.length;
         break;
      }
      for (let n = 0; n < 1; n++) {
          let singaporem = true;
          let annerW = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,116,95,55,57,0);
         selectk = `${(1 << (Math.min(5, Math.abs((singaporem ? 3 : 5)))))}`;
         singaporem = (annerW.length | annerW.length) <= 99;
      }
      let controlsW = selectk.length <= 8115943;
      do {
         selectk = `${parseInt(`${singaporej}`) * regengx}`;
         if (controlsW) {
            break;
         }
      } while ((4.26 > (index0 - selectk.length)) && controlsW);
      giftm += `${((mapping3 ? 2 : 2) >> (Math.min(Math.abs(3), 2)))}`;
   }
   for (let a = 0; a < 2; a++) {
      yingB.push(3);
   }
   for (let b = 0; b < 1; b++) {
       let historyS = String.fromCharCode(97,95,48,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0);
       let heartl = String.fromCharCode(116,95,53,55,95,101,118,101,110,116,115,0);
      if (historyS.endsWith(`${heartl.length}`)) {
         heartl += `${(String.fromCharCode(52,0) == heartl ? historyS.length : heartl.length)}`;
      }
         heartl = `${2 ^ heartl.length}`;
         historyS += `${heartl.length * 1}`;
          let sendO = false;
          let mathz = String.fromCharCode(115,101,99,117,114,101,95,55,95,56,56,0);
         heartl = `${heartl.length}`;
         sendO = (((!sendO ? 70 : mathz.length) & mathz.length) > 70);
      while (heartl != String.fromCharCode(118,0)) {
          let promotionQ = String.fromCharCode(105,95,56,53,95,103,112,111,115,116,102,105,108,116,101,114,0);
          let closeX = false;
          let formZ = String.fromCharCode(99,117,114,116,97,105,110,95,114,95,55,53,0);
          let loginC = 5.0;
          let smallc = 2;
         historyS += `${promotionQ.length & parseInt(`${loginC}`)}`;
         promotionQ = `${((closeX ? 2 : 5))}`;
         closeX = String.fromCharCode(66,0) == formZ || smallc > 24;
         formZ += `${((closeX ? 2 : 3) | 2)}`;
         loginC /= Math.max(parseFloat(`${formZ.length}`), 2);
         smallc ^= smallc;
         break;
      }
         historyS += `${historyS.length}`;
      yingB.push(overlayZ);
   }
   if (rankm.length > helperc.length) {
      rankm += `${((mapping3 ? 4 : 1) * 1)}`;
   }
   for (let v = 0; v < 3; v++) {
      giftm += `${tumbnailB.length << (Math.min(4, Math.abs(aboutl)))}`;
   }
   if (!mapping3 && (countdownu.size % 5) < 3) {
      mapping3 = giftm.length < privilegeK.length;
   }
       let friendsw = 0.0;
       let confirmationa: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,105,115,100,105,103,105,116,0),154], [String.fromCharCode(102,97,100,115,116,95,57,95,50,48,0),236]]);
      for (let f = 0; f < 3; f++) {
          let entry5 = String.fromCharCode(118,95,51,56,95,97,116,116,114,115,0);
         confirmationa.set(entry5, 3 % (Math.max(7, parseInt(`${friendsw}`))));
      }
         friendsw /= Math.max(parseInt(`${friendsw}`) % (Math.max(confirmationa.size, 5)), 3);
         confirmationa = new Map([[`${confirmationa.size}`, parseInt(`${friendsw}`)]]);
       let actionW = 4.0;
       let stri = 2.0;
      let light2 = 9372549 <= confirmationa.size;
      do {
         confirmationa.set(`${stri}`, 3 & parseInt(`${actionW}`));
         if (light2) {
            break;
         }
      } while ((1 <= (2 >> (Math.min(2, Math.abs(confirmationa.size))))) && light2);
      if (stri <= 1.80) {
         actionW += parseFloat(`${parseInt(`${friendsw}`)}`);
      }
      yingB.push(1);
   while ((2.1 * league0) == 5.29) {
       let currentZ = String.fromCharCode(100,97,118,115,95,114,95,57,55,0);
       let selectedz = String.fromCharCode(111,95,52,95,114,103,98,116,111,121,118,0);
       let arrowu = String.fromCharCode(113,95,52,49,95,111,118,101,114,102,108,111,119,0);
       let hongkongk = String.fromCharCode(97,95,54,56,95,100,101,109,111,0);
       let firebase4 = 0.0;
         arrowu = `${currentZ.length + 1}`;
      for (let v = 0; v < 3; v++) {
         hongkongk = `${(String.fromCharCode(89,0) == currentZ ? currentZ.length : hongkongk.length)}`;
      }
       let philippinesf = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,95,100,95,53,48,0);
       let plusk = String.fromCharCode(97,95,57,50,95,108,111,99,107,0);
       let hookt = 2.0;
       let selection9 = 4.0;
       let mappingp: Map<any, any> = new Map([[String.fromCharCode(106,95,54,51,95,109,97,107,101,0),String.fromCharCode(113,95,56,55,95,109,117,110,108,111,99,107,0)], [String.fromCharCode(115,119,102,112,108,97,121,101,114,95,56,95,52,49,0),String.fromCharCode(101,100,105,116,95,119,95,51,57,0)], [String.fromCharCode(107,95,54,49,95,100,121,110,108,105,110,107,0),String.fromCharCode(121,95,50,54,95,98,105,110,107,100,97,116,97,0)]]);
       let sort_: Map<any, any> = new Map([[String.fromCharCode(99,95,53,57,95,105,110,116,101,114,114,97,99,116,105,118,101,0),false ], [String.fromCharCode(100,95,51,54,95,115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0),false ], [String.fromCharCode(109,95,51,95,113,105,110,116,102,108,111,97,116,0),false ]]);
         mappingp.set(selectedz, parseInt(`${hookt}`) / (Math.max(8, selectedz.length)));
      while (selection9 >= 2.89) {
         selection9 -= philippinesf.length / 2;
         break;
      }
      for (let j = 0; j < 3; j++) {
          let nalytics1: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,95,113,117,97,110,116,0),756], [String.fromCharCode(109,105,110,105,95,52,95,56,52,0),31], [String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,56,95,56,0),863]]);
          let middlewarem = String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,95,98,95,50,48,0);
          let liveb = false;
         hongkongk = `${middlewarem.length ^ 3}`;
         nalytics1 = new Map([[`${nalytics1.size}`, nalytics1.size % 1]]);
         middlewarem += "2";
      }
      if (3.1 >= (firebase4 + 5.29) || (5.29 + firebase4) >= 2.76) {
         firebase4 /= Math.max(3, 2);
      }
      let networkL = 5997003.0 >= firebase4;
      do {
         firebase4 /= Math.max(2, parseInt(`${hookt}`));
         if (networkL) {
            break;
         }
      } while (networkL && (Array.from(mappingp.keys()).includes(`${firebase4}`)));
         mappingp = new Map([[philippinesf, currentZ.length + philippinesf.length]]);
         sort_ = new Map([[plusk, 3 ^ plusk.length]]);
         hookt += parseInt(`${hookt}`);
          let modalo = String.fromCharCode(112,114,105,110,116,97,98,108,101,95,118,95,51,53,0);
          let backw: Array<any> = [57, 136];
         arrowu = `${(philippinesf == String.fromCharCode(65,0) ? selectedz.length : philippinesf.length)}`;
         modalo = `${3 ^ backw.length}`;
         backw.push(modalo.length);
          let gmailk = 1.0;
          let type_59o = false;
         hongkongk += `${plusk.length - 2}`;
         gmailk *= (parseFloat(`${(type_59o ? 4 : 4) % (Math.max(parseInt(`${gmailk}`), 5))}`));
         type_59o = !type_59o;
      mapping3 = tumbnailB.length >= 80;
      break;
   }
      privilegeK += `${(tumbnailB == String.fromCharCode(81,0) ? aboutl : tumbnailB.length)}`;
   while (!mapping3) {
       let logout5: Map<any, any> = new Map([[String.fromCharCode(105,109,101,110,115,105,111,110,95,110,95,50,49,0),720], [String.fromCharCode(97,110,103,108,101,115,95,118,95,48,0),514], [String.fromCharCode(121,95,54,50,95,99,111,109,112,97,114,101,0),724]]);
       let rewindH = 0;
       let calendar5 = 1;
       let friendsq = 0.0;
      if (1.87 > friendsq) {
         calendar5 >>= Math.min(2, Math.abs(1));
      }
         friendsq -= 2 & rewindH;
         calendar5 %= Math.max(3, 5);
      let adultU = friendsq <= 9581784.0;
      do {
         friendsq -= calendar5;
         if (adultU) {
            break;
         }
      } while (adultU && (friendsq < 3.78));
      let minimized = 7545137 >= logout5.size;
      do {
         logout5 = new Map([[`${logout5.size}`, 3 >> (Math.min(1, Math.abs(logout5.size)))]]);
         if (minimized) {
            break;
         }
      } while ((!Array.from(logout5.keys()).includes(`${rewindH}`)) && minimized);
      if (4 < (parseInt(`${friendsq}`) * rewindH) || (4.16 * friendsq) < 4.16) {
          let cornerW = String.fromCharCode(120,95,52,51,95,112,105,112,101,108,111,115,115,0);
          let switch_lqU = String.fromCharCode(105,115,115,112,97,99,101,95,114,95,54,57,0);
          let uploadi = String.fromCharCode(100,97,115,104,98,111,97,114,100,95,111,95,49,48,0);
          let catalogj = String.fromCharCode(116,104,114,101,97,100,101,100,95,119,95,49,57,0);
         rewindH |= uploadi.length;
         cornerW = `${switch_lqU.length}`;
         switch_lqU += `${cornerW.length}`;
         uploadi += `${3 | switch_lqU.length}`;
         catalogj = `${(switch_lqU == String.fromCharCode(72,0) ? catalogj.length : switch_lqU.length)}`;
      }
         calendar5 -= rewindH;
         rewindH -= logout5.size;
         rewindH >>= Math.min(4, Math.abs(2));
       let linkK: Array<any> = [772, 157];
         linkK = [rewindH];
         friendsq *= rewindH * 3;
      countdownu.set(`${overlayZ}`, overlayZ ^ parseInt(`${league0}`));
      break;
   }
   while ((aboutl / 5) > 3) {
      aboutl >>= Math.min(Math.abs(2), 2);
      break;
   }
      yingB = [2 | overlayZ];
       let leftJ = String.fromCharCode(102,117,108,108,115,99,114,101,101,110,95,97,95,51,52,0);
      if (!leftJ.endsWith(`${leftJ.length}`)) {
         leftJ += `${(leftJ == String.fromCharCode(68,0) ? leftJ.length : leftJ.length)}`;
      }
         leftJ = `${leftJ.length}`;
       let liveM: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,103,101,95,48,95,55,48,0),true ], [String.fromCharCode(112,95,54,49,95,112,97,110,101,108,0),true ], [String.fromCharCode(116,105,107,101,114,0),true ]]);
      aboutl >>= Math.min(modalC.length, 5);
      modalC += `${((mapping3 ? 4 : 1))}`;
       let animationp = 4.0;
       let indicatorM = 1.0;
       let twitter0: Array<any> = [211, 128];
      for (let d = 0; d < 2; d++) {
         indicatorM *= 1;
      }
      let station8 = 7713491.0 >= indicatorM;
      do {
          let rulesD = 1.0;
          let pauseE = String.fromCharCode(109,95,55,48,95,112,114,101,100,120,108,0);
         indicatorM -= 2;
         rulesD *= parseFloat(`${1 << (Math.min(2, pauseE.length))}`);
         pauseE = "2";
         if (station8) {
            break;
         }
      } while (station8 && (twitter0.includes(indicatorM)));
      while ((indicatorM + 5.77) < 5.53) {
         twitter0 = [3];
         break;
      }
          let fillM: Map<any, any> = new Map([[String.fromCharCode(108,95,53,52,95,114,97,110,103,101,0),459], [String.fromCharCode(117,95,56,57,95,97,112,112,114,111,120,0),853], [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,120,95,52,53,0),148]]);
         indicatorM /= Math.max(1, 1 * parseInt(`${animationp}`));
         fillM.set(`${fillM.size}`, fillM.size);
       let inviteA = 5.0;
          let edit0 = 4.0;
          let zhubov = String.fromCharCode(115,95,52,51,95,108,105,115,116,101,110,101,114,0);
         animationp -= 1;
         edit0 -= parseFloat(`${1 + zhubov.length}`);
         zhubov = `${zhubov.length / (Math.max(1, 10))}`;
      while (animationp <= indicatorM) {
         indicatorM += parseInt(`${inviteA}`);
         break;
      }
      for (let w = 0; w < 3; w++) {
         animationp /= Math.max(4, twitter0.length);
      }
       let megaphone6 = 2.0;
      yingB.push(privilegeK.length);
      giftm = `${(String.fromCharCode(66,0) == giftm ? tumbnailB.length : giftm.length)}`;
      modalC += `${giftm.length / (Math.max(6, tumbnailB.length))}`;
      overlayZ |= 1;
      league0 *= parseInt(`${league0}`) ^ 3;
      overlayZ ^= privilegeK.length;
   for (let p = 0; p < 1; p++) {
      helperc += "2";
   }
      countdownu = new Map([[`${overlayZ}`, overlayZ]]);
 },
  isMatchPage = true,
  bgDark = false,
  setShowBecomeVIPOverlay,
  borderFlag
}: XFillButton) => {
  const navigation = useNavigation();
  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useDispatch();
  let totalViews = 0;

  const calTotalViews = () => {
       let sansp: Map<any, any> = new Map([[String.fromCharCode(120,95,50,49,95,100,101,98,117,103,103,105,110,103,0),112], [String.fromCharCode(99,108,97,109,112,95,48,95,50,50,0),245], [String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,55,95,52,48,0),976]]);
    let successR: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,98,95,50,52,0),820], [String.fromCharCode(111,110,116,97,99,116,95,118,95,50,50,0),834], [String.fromCharCode(102,117,122,122,105,110,103,95,55,95,51,0),111]]);
    let notificationQ = String.fromCharCode(119,95,57,95,104,101,97,100,101,114,0);
    let upgrade5 = 5;
    let delegate_r_9 = 4.0;
    let policyX: Array<any> = [530, 334, 548];
    let minimizeN = String.fromCharCode(112,114,101,115,101,110,116,101,114,95,110,95,50,49,0);
    let textU = true;
    let pageL: Array<any> = [String.fromCharCode(108,105,98,97,111,109,95,112,95,50,51,0), String.fromCharCode(98,95,48,95,102,108,101,120,105,98,108,101,0), String.fromCharCode(121,95,52,51,95,97,110,105,109,97,116,101,0)];
    let foundd = String.fromCharCode(111,117,116,111,117,116,95,97,95,51,48,0);
    let statistics2 = String.fromCharCode(119,114,105,116,101,95,116,95,50,56,0);
    let formK = String.fromCharCode(118,95,54,57,95,117,110,115,101,108,101,99,116,0);
    let gemfileY = String.fromCharCode(113,95,51,48,95,114,111,120,121,0);
   while (minimizeN.length == 5 || !textU) {
       let downloaderg = 5;
      for (let c = 0; c < 2; c++) {
         downloaderg /= Math.max(5, 3);
      }
          let controlS = false;
          let hooksn = true;
          let rightU = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,0);
         downloaderg ^= (String.fromCharCode(71,0) == rightU ? (controlS ? 3 : 4) : rightU.length);
         controlS = !hooksn;
         downloaderg &= 2;
      textU = foundd == String.fromCharCode(65,0);
      break;
   }
   let results = pageL.length <= 5305706;
   do {
      pageL = [parseInt(`${delegate_r_9}`)];
      if (results) {
         break;
      }
   } while (results && (1 == (foundd.length << (Math.min(3, pageL.length))) || (foundd.length << (Math.min(Math.abs(1), 1))) == 2));
   if (notificationQ.startsWith(`${delegate_r_9}`)) {
       let searchu = String.fromCharCode(109,117,108,116,105,99,97,115,116,95,51,95,52,0);
       let change4 = String.fromCharCode(104,95,56,51,95,97,102,116,101,114,0);
       let customT = true;
         customT = !customT && change4.length > 63;
      while (searchu.length >= 5 && !customT) {
          let floatingo = String.fromCharCode(115,108,105,100,101,114,95,51,95,55,55,0);
         searchu += `${2 - change4.length}`;
         floatingo = "1";
         break;
      }
          let tempX = true;
          let reminderq = false;
          let u_playerV: Array<any> = [969, 878];
         customT = change4.length < u_playerV.length;
         tempX = (tempX ? !reminderq : tempX);
         reminderq = tempX;
         u_playerV = [1];
      if (change4.length >= 1) {
         customT = change4.length < 29;
      }
       let rewind7 = String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,117,95,54,0);
      notificationQ = `${pageL.length * 3}`;
   }
       let settingsX: Array<any> = [297, 760];
       let pressureW: Array<any> = [388, 814];
       let points = String.fromCharCode(99,95,55,48,95,104,105,116,0);
          let servicep = String.fromCharCode(99,111,108,108,105,115,116,95,56,95,57,49,0);
          let shirtU = String.fromCharCode(113,95,54,52,95,115,117,98,115,99,114,105,98,97,98,108,101,0);
          let benefitm: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,0),739], [String.fromCharCode(99,114,101,97,116,101,100,95,106,95,51,52,0),604]]);
         settingsX = [pressureW.length % (Math.max(3, 9))];
         servicep += `${servicep.length << (Math.min(shirtU.length, 5))}`;
         shirtU += `${3 << (Math.min(1, servicep.length))}`;
         benefitm.set(shirtU, shirtU.length >> (Math.min(Math.abs(1), 5)));
         pressureW.push(pressureW.length << (Math.min(settingsX.length, 4)));
      if (points.startsWith(`${pressureW.length}`)) {
          let weiboo = 5.0;
          let penaltyn = 5.0;
          let eactU: Array<any> = [526, 629];
         points += `${eactU.length}`;
         weiboo -= parseFloat(`${parseInt(`${penaltyn}`)}`);
         penaltyn /= Math.max(parseInt(`${weiboo}`), 4);
         eactU.push(parseInt(`${weiboo}`));
      }
      for (let m = 0; m < 1; m++) {
          let zhubo6 = 2.0;
          let carouselj = false;
          let bootsplashZ: Array<any> = [355, 976];
          let crown4 = String.fromCharCode(115,116,97,110,100,97,114,100,95,117,95,49,0);
         pressureW.push((parseInt(`${zhubo6}`) + (carouselj ? 3 : 3)));
         zhubo6 *= parseFloat(`${bootsplashZ.length}`);
         carouselj = crown4.length <= 83;
         bootsplashZ.push(1);
         crown4 += `${3 + bootsplashZ.length}`;
      }
         pressureW.push(settingsX.length);
       let macauz: Array<any> = [443, 365];
       let statisticsp: Array<any> = [939, 642];
         statisticsp.push(pressureW.length % (Math.max(3, 5)));
         statisticsp = [1 & statisticsp.length];
         macauz.push(3);
      minimizeN += `${pressureW.length}`;

    if (matchSche?.streams != undefined && matchSche?.streams.length > 0) {

   if (minimizeN.length >= 3) {
      policyX = [minimizeN.length];
   }
   while (minimizeN.length == 2) {
      minimizeN = `${successR.size + 2}`;
      break;
   }
   for (let l = 0; l < 3; l++) {
      foundd += `${pageL.length}`;
   }
   let playlisty = 7048661 <= sansp.size;
   do {
      sansp.set(foundd, foundd.length);
      if (playlisty) {
         break;
      }
   } while (playlisty && ((sansp.size + 1) > 1 || 1 > (1 + minimizeN.length)));
      matchSche?.streams.map((e) => (totalViews += e.view_num));

   if (1 > foundd.length) {
       let mathZ: Array<any> = [String.fromCharCode(100,101,105,110,105,116,95,102,95,52,50,0), String.fromCharCode(102,95,55,56,95,112,114,101,99,111,109,112,0), String.fromCharCode(112,109,107,95,117,95,51,48,0)];
      while (5 == (4 & mathZ.length) || 4 == (mathZ.length & mathZ.length)) {
         mathZ.push(mathZ.length / (Math.max(mathZ.length, 3)));
         break;
      }
         mathZ = [mathZ.length & 1];
      if (mathZ.includes(mathZ.length)) {
         mathZ.push(1 + mathZ.length);
      }
      foundd += "1";
   }
   if (2 > pageL.length) {
      pageL = [successR.size];
   }
   for (let e = 0; e < 3; e++) {
      foundd = `${upgrade5 << (Math.min(minimizeN.length, 4))}`;
   }
   let videoj = 7123136.0 >= delegate_r_9;
   do {
      delegate_r_9 *= parseFloat(`${1 * upgrade5}`);
      if (videoj) {
         break;
      }
   } while (videoj && ((policyX.length * parseInt(`${delegate_r_9}`)) <= 3 && 2.95 <= (2.41 * delegate_r_9)));
    }

    let dividedTotalViews = 0;

       let appsL = 0.0;
       let miniS = 4.0;
       let y_imagei = true;
      while (3.89 > appsL) {
          let fieldu = String.fromCharCode(118,97,110,99,95,104,95,56,55,0);
          let promotionj = String.fromCharCode(122,95,51,48,95,100,110,120,104,100,100,97,116,97,0);
          let jcopy_cZ = String.fromCharCode(109,105,115,99,95,118,95,55,56,0);
          let reminderx = String.fromCharCode(112,95,56,56,95,105,116,108,101,0);
          let middlex = 5;
         miniS -= (parseFloat(`${(y_imagei ? 5 : 5) / (Math.max(6, fieldu.length))}`));
         fieldu += "3";
         promotionj += `${promotionj.length}`;
         jcopy_cZ = `${middlex / (Math.max(8, jcopy_cZ.length))}`;
         reminderx += `${jcopy_cZ.length}`;
         middlex <<= Math.min(Math.abs(3), 3);
         break;
      }
      while (1.34 >= miniS) {
          let soundP = 3.0;
         appsL *= (parseFloat(`${(y_imagei ? 1 : 4) | parseInt(`${soundP}`)}`));
         break;
      }
      while (!y_imagei) {
         y_imagei = !y_imagei;
         break;
      }
       let verticalW = 0.0;
      while (4.68 == (verticalW + 4.48) || 3.70 == (4.48 + verticalW)) {
         miniS += parseFloat(`${parseInt(`${miniS}`) << (Math.min(5, Math.abs(2)))}`);
         break;
      }
      if ((5.61 - miniS) > 3.72 || !y_imagei) {
          let emptyN = String.fromCharCode(100,95,56,48,95,105,112,99,0);
          let match6: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,97,116,111,98,111,111,108,0),283], [String.fromCharCode(99,104,101,118,114,111,110,95,100,95,52,57,0),974]]);
          let anythinkN = String.fromCharCode(108,95,52,56,95,109,118,115,101,116,0);
          let tumbnailP = 0;
          let temperaturex = 5;
         miniS -= parseFloat(`${anythinkN.length << (Math.min(Math.abs(3), 2))}`);
         emptyN = "2";
         match6.set(`${temperaturex}`, temperaturex);
         anythinkN += `${emptyN.length}`;
         tumbnailP += temperaturex;
      }
      while ((verticalW * 3.86) <= 2.14 || verticalW <= 3.86) {
         verticalW /= Math.max(parseInt(`${appsL}`) >> (Math.min(4, Math.abs(2))), 2);
         break;
      }
          let dialog9 = 0.0;
         verticalW /= Math.max(2 << (Math.min(Math.abs(parseInt(`${dialog9}`)), 1)), 1);
      for (let u = 0; u < 3; u++) {
          let trophyb = String.fromCharCode(97,121,98,114,95,119,95,54,57,0);
         y_imagei = verticalW == miniS;
         trophyb += `${trophyb.length}`;
      }
      successR.set(`${upgrade5}`, upgrade5);
   let ajaxl = notificationQ == String.fromCharCode(110,101,97,115,111,115,98,104,102,108,0);
   do {
       let nterstitialU = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,0);
       let ping8 = String.fromCharCode(121,95,49,55,95,116,119,111,112,111,105,110,116,0);
       let config5 = 1.0;
       let overD = String.fromCharCode(114,95,54,54,95,105,100,99,116,100,115,112,0);
      for (let g = 0; g < 1; g++) {
         ping8 += `${1 / (Math.max(9, nterstitialU.length))}`;
      }
      for (let z = 0; z < 2; z++) {
          let searchbari: Map<any, any> = new Map([[String.fromCharCode(97,116,101,120,105,116,95,56,95,52,54,0),String.fromCharCode(115,116,97,99,107,95,98,95,54,53,0)], [String.fromCharCode(104,95,52,51,95,105,110,116,101,110,116,0),String.fromCharCode(114,101,111,114,100,101,114,101,100,95,55,95,56,51,0)]]);
          let hejil = String.fromCharCode(122,95,57,55,95,99,104,105,108,100,0);
         nterstitialU += `${(String.fromCharCode(57,0) == overD ? hejil.length : overD.length)}`;
         searchbari = new Map([[`${searchbari.size}`, 1]]);
         hejil += `${searchbari.size}`;
      }
         overD = `${1 << (Math.min(3, overD.length))}`;
      for (let i = 0; i < 3; i++) {
         nterstitialU += `${(String.fromCharCode(53,0) == overD ? overD.length : nterstitialU.length)}`;
      }
         config5 -= parseFloat(`${nterstitialU.length}`);
      for (let v = 0; v < 3; v++) {
         config5 -= parseFloat(`${nterstitialU.length * 2}`);
      }
         nterstitialU += `${ping8.length}`;
      if (nterstitialU.startsWith(`${config5}`)) {
          let sansE: Map<any, any> = new Map([[String.fromCharCode(97,95,51,51,95,109,101,100,105,97,110,0),899], [String.fromCharCode(118,95,55,51,95,110,101,116,105,115,114,0),447]]);
          let shrinkg = 1.0;
          let orangen = String.fromCharCode(99,104,97,110,110,101,108,115,95,98,95,53,54,0);
         nterstitialU += "2";
         sansE.set(`${orangen}`, orangen.length);
         shrinkg /= Math.max(3, 2);
      }
       let headerI = true;
         ping8 = `${nterstitialU.length >> (Math.min(Math.abs(1), 4))}`;
       let profileB = 2.0;
       let tooltipsm = 4.0;
      for (let v = 0; v < 2; v++) {
          let minivodp = 5.0;
          let middleQ = String.fromCharCode(119,95,55,50,95,99,104,97,114,97,99,116,101,114,0);
          let k_positionU = 3;
          let ewardedh = false;
          let photo_ = 4;
         ping8 += "1";
         minivodp += parseInt(`${minivodp}`) / (Math.max(2, 1));
         middleQ += `${((ewardedh ? 4 : 3) & k_positionU)}`;
         k_positionU <<= Math.min(4, Math.abs(1));
         ewardedh = (parseInt(`${minivodp}`) + middleQ.length) < 86;
         photo_ <<= Math.min(4, Math.abs(k_positionU << (Math.min(3, Math.abs(1)))));
      }
      notificationQ += `${3 - ping8.length}`;
      if (ajaxl) {
         break;
      }
   } while ((notificationQ.length <= 2) && ajaxl);
       let yellowp: Array<any> = [String.fromCharCode(115,117,115,112,101,110,100,95,51,95,55,56,0), String.fromCharCode(108,95,54,53,95,99,111,112,121,104,0)];
      if ((yellowp.length / (Math.max(yellowp.length, 2))) < 5 || 4 < (yellowp.length / (Math.max(5, 5)))) {
          let navigationY = String.fromCharCode(108,97,121,111,117,116,115,95,103,95,55,56,0);
          let sourcew = true;
          let selected9 = 0;
          let brightnessn = 1.0;
         yellowp = [selected9];
         navigationY += "3";
         sourcew = !sourcew;
         selected9 &= parseInt(`${brightnessn}`);
         brightnessn /= Math.max(1, navigationY.length);
      }
      let morer = 7454622 >= yellowp.length;
      do {
         yellowp = [2];
         if (morer) {
            break;
         }
      } while (morer && (3 <= yellowp.length));
       let actionsw = String.fromCharCode(116,116,116,95,112,95,53,51,0);
      notificationQ = "3 - upgrade5";
      pageL.push(1);
    if (totalViews / 10000 >= 1) {

      pageL = [statistics2.length % (Math.max(1, 9))];
       let commoni = 5.0;
       let downloader7 = String.fromCharCode(110,95,49,53,95,98,105,116,115,0);
       let refreshr = String.fromCharCode(118,115,110,112,114,105,110,116,102,95,98,95,54,54,0);
         refreshr += `${(String.fromCharCode(66,0) == downloader7 ? downloader7.length : refreshr.length)}`;
      for (let t = 0; t < 2; t++) {
         commoni -= parseFloat(`${downloader7.length}`);
      }
      successR.set(`${delegate_r_9}`, 1);
      policyX.push(statistics2.length % (Math.max(minimizeN.length, 7)));
      policyX = [minimizeN.length | successR.size];
      dividedTotalViews = totalViews / 10000;

   while (2 == (pageL.length * 3) && pageL.length == 3) {
      pageL.push(statistics2.length & 1);
      break;
   }
      policyX.push(((textU ? 3 : 5) + 1));
       let sharedz = 5.0;
      if ((sharedz / (Math.max(8, sharedz))) > 1.85 || 2.94 > (1.85 / (Math.max(3, sharedz)))) {
          let whatsapp5 = 1.0;
          let acceptede = String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,95,103,95,57,48,0);
         sharedz *= 3;
         whatsapp5 += parseInt(`${whatsapp5}`) >> (Math.min(acceptede.length, 4));
         acceptede = `${3 << (Math.min(3, acceptede.length))}`;
      }
       let aboutC = false;
       let checkboxq = false;
         aboutC = !aboutC || !checkboxq;
      notificationQ = "1";
      delegate_r_9 /= Math.max(2, parseFloat(`${sansp.size}`));
      return dividedTotalViews.toFixed(1) + "万";
    }

    return totalViews;
  };

  const matchClicked = () => {
       let singlex = String.fromCharCode(103,101,116,95,97,95,50,56,0);
    let episodeH = 1.0;
    let grayf = String.fromCharCode(116,95,48,95,118,112,105,116,120,102,109,0);
    let moret = String.fromCharCode(109,97,99,114,111,95,118,95,55,54,0);
    let unreadS = String.fromCharCode(104,113,100,110,100,95,103,95,55,57,0);
    let suggestionB = String.fromCharCode(99,117,116,101,115,116,95,102,95,53,48,0);
    let activeE = 0;
    let statsz = 1;
    let football5 = 1.0;
    let loginx = 1.0;
    let minimizeW = false;
    let update_va = 4;
    let episodes_ = 4;
    let ballh = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,97,95,50,55,0);
   if ((unreadS.length + episodeH) < 5.79 || (2 / (Math.max(2, unreadS.length))) < 1) {
      unreadS += `${suggestionB.length % (Math.max(moret.length, 2))}`;
   }
   let topicl = 5676515 >= singlex.length;
   do {
      singlex = `${((minimizeW ? 1 : 4) * parseInt(`${loginx}`))}`;
      if (topicl) {
         break;
      }
   } while (topicl && (!unreadS.includes(`${singlex.length}`)));
   if ((statsz & 3) >= 4) {
      statsz /= Math.max(((minimizeW ? 3 : 1) ^ parseInt(`${loginx}`)), 4);
   }
      activeE >>= Math.min(5, Math.abs((unreadS == String.fromCharCode(105,0) ? unreadS.length : (minimizeW ? 3 : 3))));
      episodeH /= Math.max((suggestionB == String.fromCharCode(51,0) ? suggestionB.length : grayf.length), 4);
   for (let s = 0; s < 3; s++) {
       let annerS = String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,115,95,56,52,0);
         annerS += `${2 + annerS.length}`;
      if (annerS.endsWith(annerS)) {
         annerS = `${annerS.length + annerS.length}`;
      }
      if (annerS == String.fromCharCode(90,0) && annerS == String.fromCharCode(81,0)) {
          let incidentR = String.fromCharCode(109,95,53,50,95,105,110,116,101,103,114,97,116,101,0);
          let sella = 4.0;
          let indexe = true;
          let stepN = String.fromCharCode(118,101,114,116,101,120,95,107,95,49,48,48,0);
         annerS += `${(String.fromCharCode(113,0) == annerS ? annerS.length : incidentR.length)}`;
         incidentR = `${1 ^ parseInt(`${sella}`)}`;
         sella *= (stepN == String.fromCharCode(110,0) ? stepN.length : (indexe ? 4 : 1));
         indexe = indexe || 60.55 >= sella;
      }
      episodes_ %= Math.max(grayf.length & unreadS.length, 1);
   }

    navigation.navigate("体育详情", {
      matchId: matchSche?.id === null ? undefined : matchSche.id,
    });

      update_va &= (grayf == String.fromCharCode(54,0) ? parseInt(`${loginx}`) : grayf.length);
   if (5.43 > (parseFloat(`${singlex.length}`) + loginx)) {
       let transfer2 = String.fromCharCode(116,95,54,54,95,108,97,114,103,101,115,116,0);
       let castO: Array<any> = [564, 681];
       let disconnectedM = true;
         transfer2 = `${castO.length}`;
      while (disconnectedM) {
          let phoneM = 4.0;
          let modalK = 5.0;
         disconnectedM = String.fromCharCode(52,0) == transfer2;
         phoneM /= Math.max(parseFloat(`${2}`), 2);
         modalK /= Math.max(2, parseInt(`${phoneM}`) + parseInt(`${modalK}`));
         break;
      }
          let shirtj = 4;
          let otherv = String.fromCharCode(100,95,49,48,95,97,117,116,111,109,97,116,105,99,97,108,108,121,0);
         castO = [castO.length ^ transfer2.length];
         shirtj >>= Math.min(1, Math.abs(shirtj));
         otherv += `${otherv.length}`;
      if ((3 & castO.length) >= 5 && disconnectedM) {
         disconnectedM = !disconnectedM;
      }
      while (1 < (transfer2.length >> (Math.min(4, castO.length))) || (1 >> (Math.min(5, castO.length))) < 1) {
         transfer2 += `${(transfer2 == String.fromCharCode(87,0) ? castO.length : transfer2.length)}`;
         break;
      }
      if ((transfer2.length & 5) > 4 && 1 > (5 & castO.length)) {
         castO = [3 >> (Math.min(3, castO.length))];
      }
         castO.push(castO.length);
         castO.push(castO.length);
          let filedy: Array<any> = [String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,56,95,51,55,0), String.fromCharCode(108,95,52,95,97,100,100,114,105,110,102,111,0)];
          let eighteenX = 4.0;
          let cross1: Array<any> = [809, 666, 751];
         castO = [3 >> (Math.min(2, transfer2.length))];
         filedy.push(parseInt(`${eighteenX}`) / 3);
         eighteenX += parseFloat(`${filedy.length << (Math.min(Math.abs(3), 2))}`);
         cross1 = [cross1.length];
      loginx -= (parseFloat(`${statsz * (disconnectedM ? 2 : 4)}`));
   }
   for (let o = 0; o < 3; o++) {
       let types7 = String.fromCharCode(111,95,56,95,99,111,110,116,114,105,98,0);
       let gmailE = 2.0;
      for (let e = 0; e < 2; e++) {
         types7 = "1";
      }
         gmailE += parseFloat(`${1}`);
         gmailE *= parseFloat(`${parseInt(`${gmailE}`)}`);
          let reminderS = 2.0;
          let moviesd: Array<any> = [786, 356];
          let disconnecteda: Array<any> = [647, 145];
         gmailE *= (parseFloat(`${types7 == String.fromCharCode(113,0) ? moviesd.length : types7.length}`));
         reminderS /= Math.max(2, 1);
         moviesd = [disconnecteda.length];
         disconnecteda = [disconnecteda.length];
      if (5.32 >= (parseFloat(`${types7.length}`) + gmailE)) {
         types7 += `${parseInt(`${gmailE}`) | 3}`;
      }
         types7 += "1";
      statsz /= Math.max(3, ballh.length | parseInt(`${episodeH}`));
   }
   while (3 < (1 | update_va) && (suggestionB.length | update_va) < 1) {
      update_va /= Math.max((moret == String.fromCharCode(82,0) ? episodes_ : moret.length), 1);
      break;
   }
      suggestionB = `${(suggestionB == String.fromCharCode(99,0) ? (minimizeW ? 4 : 4) : suggestionB.length)}`;
   for (let g = 0; g < 3; g++) {
       let humidityj = 4.0;
       let expandP = String.fromCharCode(111,103,103,108,101,95,122,95,52,55,0);
         expandP += `${expandP.length | 2}`;
         humidityj /= Math.max((expandP == String.fromCharCode(88,0) ? expandP.length : parseInt(`${humidityj}`)), 3);
      while ((parseInt(`${humidityj}`) + expandP.length) > 4 && (1.0 + humidityj) > 5.3) {
          let tumbnaile = 0.0;
          let friendsM = String.fromCharCode(115,112,108,97,115,104,95,112,95,55,0);
          let previewn = 4;
          let submitd = 2.0;
          let searchR = 5.0;
         humidityj -= 1;
         tumbnaile /= Math.max(parseFloat(`${parseInt(`${submitd}`)}`), 1);
         friendsM += `${parseInt(`${searchR}`)}`;
         previewn %= Math.max(5, previewn);
         break;
      }
         expandP = `${(String.fromCharCode(67,0) == expandP ? parseInt(`${humidityj}`) : expandP.length)}`;
      if (1.99 == (expandP.length - humidityj)) {
         expandP += `${expandP.length & parseInt(`${humidityj}`)}`;
      }
      while ((parseInt(`${humidityj}`) - expandP.length) == 4) {
          let pagea: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,111,110,101,95,51,95,56,48,0),39], [String.fromCharCode(117,109,105,100,0),42], [String.fromCharCode(103,95,57,55,95,99,111,112,121,100,97,116,97,0),816]]);
          let blacklistp = String.fromCharCode(119,105,115,101,95,106,95,53,50,0);
          let thailandV = String.fromCharCode(97,114,103,120,105,95,57,95,55,57,0);
         expandP = `${pagea.size + thailandV.length}`;
         pagea.set(blacklistp, 3);
         blacklistp += `${(String.fromCharCode(76,0) == blacklistp ? blacklistp.length : blacklistp.length)}`;
         break;
      }
      update_va >>= Math.min(Math.abs(expandP.length * update_va), 5);
   }

    

   for (let x = 0; x < 2; x++) {
      activeE ^= update_va | parseInt(`${football5}`);
   }
   for (let l = 0; l < 3; l++) {
       let refreshK = 5.0;
       let cornerq = 5.0;
       let routern = 0.0;
       let modei: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,115,117,98,116,97,115,107,0),String.fromCharCode(99,95,57,57,95,119,97,116,99,104,101,100,0)], [String.fromCharCode(115,117,112,112,111,114,116,95,119,95,57,49,0),String.fromCharCode(109,111,114,112,104,101,100,95,115,95,55,50,0)], [String.fromCharCode(118,100,101,98,117,103,95,106,95,54,48,0),String.fromCharCode(108,101,114,112,105,110,103,95,51,95,51,57,0)]]);
       let appleh = String.fromCharCode(115,95,50,57,95,99,111,110,115,101,110,116,0);
         cornerq *= 3;
       let auto_sj5 = 1.0;
       let login9 = 1.0;
         modei.set(`${cornerq}`, (appleh == String.fromCharCode(120,0) ? parseInt(`${cornerq}`) : appleh.length));
      for (let f = 0; f < 3; f++) {
          let nextP = 0;
          let time_kl = String.fromCharCode(118,108,99,115,95,107,95,50,54,0);
          let megaphoneN = String.fromCharCode(121,95,49,49,95,116,119,105,100,100,108,101,115,0);
          let commonw = false;
          let lefts = 0;
         modei.set(`${routern}`, modei.size - parseInt(`${routern}`));
         nextP >>= Math.min(5, Math.abs((megaphoneN == String.fromCharCode(51,0) ? lefts : megaphoneN.length)));
         time_kl += `${lefts}`;
         commonw = megaphoneN.startsWith(`${nextP}`);
      }
      let middleware_ = refreshK >= 6031788.0;
      do {
         refreshK -= parseInt(`${auto_sj5}`);
         if (middleware_) {
            break;
         }
      } while (middleware_ && (refreshK < auto_sj5));
      if (4.36 > (auto_sj5 * parseFloat(`${appleh.length}`))) {
         appleh = `${parseInt(`${refreshK}`) % (Math.max(3, 4))}`;
      }
      for (let d = 0; d < 1; d++) {
         cornerq *= parseInt(`${routern}`);
      }
      if (routern <= modei.size) {
         routern += parseInt(`${cornerq}`) - parseInt(`${login9}`);
      }
      while (routern >= 4.62) {
         routern += parseInt(`${auto_sj5}`) % (Math.max(3, parseInt(`${login9}`)));
         break;
      }
          let searchbarn: Array<any> = [521, 96, 821];
          let crossX: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,101,115,95,118,95,48,0),24], [String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,0),217]]);
         cornerq /= Math.max(crossX.size, 2);
         searchbarn.push(3 << (Math.min(1, searchbarn.length)));
         crossX = new Map([[`${searchbarn.length}`, 1]]);
      let filter2 = 8120845.0 >= cornerq;
      do {
         cornerq *= (String.fromCharCode(75,0) == appleh ? parseInt(`${auto_sj5}`) : appleh.length);
         if (filter2) {
            break;
         }
      } while ((2.83 == (cornerq / (Math.max(modei.size, 8))) || (2.83 / (Math.max(4, cornerq))) == 4.24) && filter2);
      let mode8 = 8973188.0 >= routern;
      do {
         routern -= 2 ^ modei.size;
         if (mode8) {
            break;
         }
      } while ((4.97 == (routern + login9) && (4.97 + routern) == 3.6) && mode8);
         auto_sj5 -= parseFloat(`${parseInt(`${refreshK}`)}`);
      let navigation_ = 9273420.0 >= login9;
      do {
         login9 -= parseFloat(`${modei.size & 3}`);
         if (navigation_) {
            break;
         }
      } while (navigation_ && (5.11 >= (login9 - 3.26) && 3.31 >= (login9 / 3.26)));
         login9 -= parseFloat(`${parseInt(`${cornerq}`) ^ 1}`);
      singlex = `${ballh.length}`;
   }
   if ((episodeH - activeE) < 3.100) {
      activeE -= episodes_;
   }
      episodeH -= 1;
       let vietnamu = 0;
       let connectionS = 4.0;
      if (vietnamu > 2) {
          let emoji7 = 3.0;
          let hooks4 = String.fromCharCode(108,105,98,115,97,109,112,108,101,95,119,95,51,53,0);
          let routerV = String.fromCharCode(105,100,101,110,116,105,116,105,101,115,95,52,95,50,50,0);
          let bing8: Map<any, any> = new Map([[String.fromCharCode(102,105,102,111,95,121,95,54,50,0),65], [String.fromCharCode(122,95,51,55,95,116,104,114,111,116,116,108,101,0),193]]);
         connectionS *= bing8.size;
         emoji7 -= parseInt(`${emoji7}`) + 1;
         hooks4 += `${routerV.length << (Math.min(hooks4.length, 1))}`;
         routerV = `${parseInt(`${emoji7}`) * hooks4.length}`;
         bing8 = new Map([[routerV, 3]]);
      }
      for (let x = 0; x < 1; x++) {
         connectionS *= 2 / (Math.max(parseInt(`${connectionS}`), 6));
      }
      for (let e = 0; e < 1; e++) {
          let splashW = String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,119,95,49,48,48,0);
          let modityq = 1.0;
          let textA = 1;
          let actiont = 1;
          let policyy = 4.0;
         vietnamu |= (splashW == String.fromCharCode(116,0) ? splashW.length : parseInt(`${connectionS}`));
         modityq /= Math.max(parseFloat(`${3 | textA}`), 4);
         textA <<= Math.min(Math.abs(1 % (Math.max(parseInt(`${policyy}`), 7))), 2);
         actiont /= Math.max(1 + textA, 1);
         policyy -= 1 >> (Math.min(Math.abs(parseInt(`${policyy}`)), 1));
      }
         connectionS -= parseInt(`${connectionS}`) ^ vietnamu;
      for (let b = 0; b < 3; b++) {
         vietnamu |= vietnamu + 1;
      }
         connectionS *= parseInt(`${connectionS}`);
      singlex += `${statsz - 2}`;
   if (4.40 >= (1.100 / (Math.max(9, loginx))) && 3 >= (suggestionB.length * 1)) {
       let sendt = false;
       let combinedB = true;
         combinedB = (!sendt ? combinedB : !sendt);
      let sporty = combinedB ? !combinedB : combinedB;
      do {
          let logoR = false;
          let halfU: Array<any> = [String.fromCharCode(118,95,54,53,95,115,111,108,105,100,0), String.fromCharCode(107,95,50,50,95,100,101,97,99,116,0), String.fromCharCode(115,117,109,95,52,95,51,53,0)];
          let star6 = false;
          let stringP: Array<any> = [132, 967, 585];
         combinedB = sendt || halfU.length < 42;
         logoR = stringP.length < 45;
         halfU.push(2);
         star6 = stringP.includes(logoR);
         if (sporty) {
            break;
         }
      } while ((!combinedB) && sporty);
      for (let h = 0; h < 3; h++) {
         sendt = (sendt ? combinedB : sendt);
      }
      while (!sendt && combinedB) {
         combinedB = sendt;
         break;
      }
      let loginF = combinedB ? !combinedB : combinedB;
      do {
         combinedB = !sendt;
         if (loginF) {
            break;
         }
      } while (loginF && (combinedB || sendt));
      let kick9 = sendt ? !sendt : sendt;
      do {
         sendt = combinedB;
         if (kick9) {
            break;
         }
      } while (kick9 && (combinedB || sendt));
      suggestionB = "2";
   }
    umb_center_carousel.sportClicksAnalytics();
    
  };


  return (
    <>
      <TouchableOpacity onPress={matchClicked}>
        <View
          style={{
            ...styles.border,
            backgroundColor: bgDark ? "#0c0c0c" : "inherit",
            borderColor: "rgba(156, 156, 156 , 0.2)",
            borderBottomLeftRadius: borderFlag == 'true' ? 15 : 0,
            borderBottomRightRadius: borderFlag == 'true' ? 15 : 0,
          }}
        >
          <View style={styles.matchScheduleHeader}>
            <View style={styles.matchInfo}>
              <Text style={{ ...styles.spaceBetween, color: colors.muted }}>
                {matchSche?.competition?.name_short}
              </Text>
              <Text
                style={{
                  ...textVariants.small,
                  color: colors.muted,
                  paddingTop: 2,
                }}
              >
                { }
                {new Date(
                  matchSche?.match_time_ts * 1000
                ).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </View>
            <View style={styles.matchStatus}>
              {matchSche?.streams != undefined &&
                matchSche?.streams?.length > 0 &&
                matchSche?.streams?.some((streamer) => streamer.status == 3) ? (
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.liveIcon} />
                  <Text style={{ ...styles.liveStatus }}>直播中</Text>
                </View>
              ) : (
                <Text style={textVariants.small}>
                  {getMatchStatus(
                    matchSche?.state,
                    matchSche?.status,
                    matchSche?.sports_type
                  )}
                </Text>
              )}
            </View>
            <View style={styles.liveType}>
              {isMatchPage === true &&
                matchSche?.streams != undefined &&
                matchSche?.streams.length > 0 &&
                matchSche?.streams?.some(
                  (streamer) => streamer.status == 3
                ) && (
                  <FastImage
                    resizeMode="contain"
                    style={styles.liveTypeImage}
                    source={VideoLive}
                  />
                )}
              {isMatchPage === true && matchSche?.mlive == 1 && (
                <FastImage
                  resizeMode="contain"
                  style={styles.liveTypeImage}
                  source={AnimationLive}
                />
              )}
            </View>
            {/* {matchSche?.streams != undefined && matchSche?.streams.length > 0 && (
            <View style={styles.onlineViews}>
              <FastImage style={styles.viewImage} source={Views} />
              <Text style={textVariants.small}>{calTotalViews()}</Text>
            </View>
          )} */}
          </View>
          <View style={styles.matchScheduleContent}>
            <View style={styles.teamContentA}>
              <Text
                style={{ ...textVariants.small, flexShrink: 1 }}
                numberOfLines={1}
                ellipsizeMode={"tail"}
              >
                {matchSche.home?.name}
              </Text>
              {matchSche?.home?.icon != undefined &&
                matchSche?.home?.icon.length > 0 ? (
                <FastImage
                  style={styles.teamImage}
                  source={{ uri: matchSche?.home?.icon }}
                />
              ) : (
                <ImageBackground style={styles.teamImage} source={HomeIcon}>
                  <Text style={styles.teamLogoText}>
                    {matchSche?.home?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
            </View>
            {matchSche?.status == -2 ? (
              <View style={styles.liveScore}>
                <Text style={styles.scoreFont} />
                <Text style={styles.scoreFont}>-</Text>
                <Text style={styles.scoreFont} />
              </View>
            ) : matchSche?.status == 1 || matchSche?.status == -1 ? (
              <View style={styles.liveScore}>
                <View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Text
                      style={
                        calculateScore(
                          matchSche?.home_score,
                          matchSche?.sports_type
                        ) >
                          calculateScore(
                            matchSche?.away_score,
                            matchSche?.sports_type
                          )
                          ? { ...styles.highScoreFont, color: colors.primary }
                          : styles.scoreFont
                      }
                    >
                      {calculateScore(
                        matchSche?.home_score,
                        matchSche?.sports_type
                      )}
                    </Text>
                    <Text style={styles.scoreFont}>-</Text>
                    <Text
                      style={
                        calculateScore(
                          matchSche?.away_score,
                          matchSche?.sports_type
                        ) >
                          calculateScore(
                            matchSche?.home_score,
                            matchSche?.sports_type
                          )
                          ? { ...styles.highScoreFont, color: colors.primary }
                          : styles.scoreFont
                      }
                    >
                      {calculateScore(
                        matchSche?.away_score,
                        matchSche?.sports_type
                      )}
                    </Text>
                  </View>
                  {matchSche?.sports_type == 1 &&
                    (matchSche?.away_score[6] > 0 ||
                      matchSche?.home_score[6] > 0) && (
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={styles.penaltyScore}>点球 </Text>
                        <Text
                          style={
                            matchSche?.home_score[6] > matchSche?.away_score[6]
                              ? styles.penaltyWinScore
                              : styles.penaltyScore
                          }
                        >
                          {matchSche?.home_score[6]}
                        </Text>
                        <Text style={styles.penaltyScore}> - </Text>
                        <Text
                          style={
                            matchSche?.away_score[6] > matchSche?.home_score[6]
                              ? styles.penaltyWinScore
                              : styles.penaltyScore
                          }
                        >
                          {matchSche?.away_score[6]}
                        </Text>
                      </View>
                    )}
                </View>
              </View>
            ) : (
              <View style={styles.subscribeBtn}>
                <Text style={{ ...textVariants.header, color: colors.primary }}>
                  VS
                </Text>
              </View>
            )}
            <View style={styles.teamContentB}>
              {matchSche?.away?.icon != undefined &&
                matchSche?.away?.icon.length > 0 ? (
                <FastImage
                  style={styles.teamImage}
                  source={{ uri: matchSche?.away?.icon }}
                />
              ) : (
                <ImageBackground style={styles.teamImage} source={AwayIcon}>
                  <Text style={styles.teamLogoText}>
                    {matchSche?.away?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
              <Text
                style={{ ...textVariants.small, flexShrink: 1 }}
                numberOfLines={1}
              >
                {matchSche?.away?.name}
              </Text>
            </View>
          </View>
          {isMatchPage === true &&
            matchSche?.streams != undefined &&
            matchSche?.streams.length > 0 &&
            matchSche?.streams?.some((streamer) => streamer.status == 3) && (
              <View style={styles.matchScheduleFooter}>
                <View style={styles.viewFooter}>
                  <FastImage style={styles.viewImage} source={IconViewerGif} />
                  <Text style={styles.footerFont}>{calTotalViews()}</Text>
                </View>
              </View>
            )}
          {/* <View style={styles.streamerList}>
          {matchSche?.streams != undefined &&
            matchSche?.streams.length > 0 &&
            matchSche?.streams.map(e => (
              <TouchableWithoutFeedback
                onPress={streamerClicked(e.streamer.id, e.status)}>
                <Text
                  style={e.status == 3 ? styles.liveStreamer : styles.streamer}>
                  {e.streamer.nickname}
                </Text>
              </TouchableWithoutFeedback>
            ))}
        </View> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default memo(MatchSchedule);
