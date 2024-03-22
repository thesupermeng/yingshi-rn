import { ViewStyle } from "react-native";
import CountdownIndicator from "../button/et_icon";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { screenModel } from "@type/nb_shared_target";
import { ADULT_MODE_PREVIEW_DURATION } from "@utility/n_subs_interstitial";
import { incrementAdultVideoWatchTime, showAdultModeVip } from "@redux/actions/a_switch";
import { memo, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

interface XFillButton {
  containerStyle: ViewStyle;
}

const AdultModeCountdownIndicator = ({ containerStyle }: XFillButton) => {
  const userState = useSelector<HDTGesturesList>('userReducer');
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const dispatch = useAppDispatch()

  const { adultVideoWatchTime, adultMode } = screenState
  const isVip = KWConstants.isVip(userState.user);

  useFocusEffect(
    useCallback(() => {
      let interval: any;
      if (adultMode && !isVip) {
        interval = setInterval(() => {
       let resendy = String.fromCharCode(109,111,118,101,95,100,95,55,53,0);
    let private_wu = 2.0;
    let project7 = 1.0;
    let filterN: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,115,95,119,95,57,51,0),String.fromCharCode(98,95,56,95,108,111,97,115,0)], [String.fromCharCode(97,101,115,111,112,116,95,106,95,57,53,0),String.fromCharCode(120,95,52,50,95,98,121,116,101,111,117,116,0)], [String.fromCharCode(108,95,57,55,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0),String.fromCharCode(111,95,57,51,95,97,117,116,111,98,97,110,104,0)]]);
    let leftw = 1.0;
    let baiduY = 5.0;
    let actioni = String.fromCharCode(114,101,115,116,114,97,105,110,95,121,95,50,55,0);
    let viewso = false;
    let championn: Array<any> = [String.fromCharCode(111,95,56,52,95,108,111,116,116,105,101,118,105,101,119,0), String.fromCharCode(101,95,56,49,95,101,110,100,115,0)];
    let checkboxl = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,108,121,95,52,95,55,56,0);
    let incidentV = 5;
    let cnewsy = false;
       let dialogi: Map<any, any> = new Map([[String.fromCharCode(114,101,102,100,117,112,101,95,119,95,52,50,0),155], [String.fromCharCode(117,110,112,97,100,100,101,100,95,105,95,53,51,0),104], [String.fromCharCode(121,95,52,49,95,100,101,108,105,109,105,116,101,100,0),39]]);
       let fieldh = String.fromCharCode(102,95,55,52,95,115,104,101,108,108,0);
      let drag8 = fieldh.length >= 5827298;
      do {
         fieldh = "3";
         if (drag8) {
            break;
         }
      } while (drag8 && (3 > (1 & fieldh.length) || (1 & fieldh.length) > 2));
      let const_oP = dialogi.size >= 7748968;
      do {
         dialogi = new Map([[`${dialogi.size}`, 1 - dialogi.size]]);
         if (const_oP) {
            break;
         }
      } while ((1 > fieldh.length) && const_oP);
         dialogi.set(`${fieldh}`, fieldh.length % (Math.max(2, dialogi.size)));
       let episodeE = String.fromCharCode(100,95,56,52,95,109,97,105,110,0);
      let serviceh = 6535137 >= fieldh.length;
      do {
          let vietnamG = 2;
          let dataX = String.fromCharCode(103,95,49,53,95,99,111,99,111,97,0);
          let mathu = String.fromCharCode(115,101,99,112,107,95,55,95,53,51,0);
          let commonA = 4.0;
         fieldh += `${episodeE.length | 2}`;
         vietnamG *= parseInt(`${commonA}`);
         dataX = `${vietnamG}`;
         mathu += `${(dataX == String.fromCharCode(109,0) ? dataX.length : vietnamG)}`;
         commonA *= (String.fromCharCode(95,0) == dataX ? dataX.length : mathu.length);
         if (serviceh) {
            break;
         }
      } while ((dialogi.size == 5) && serviceh);
      let modal0 = fieldh == String.fromCharCode(118,98,114,119,0);
      do {
         fieldh += `${episodeE.length}`;
         if (modal0) {
            break;
         }
      } while ((fieldh.includes(`${episodeE.length}`)) && modal0);
      viewso = baiduY > fieldh.length;
      actioni = `${parseInt(`${private_wu}`) + 2}`;
   if ((filterN.size & 4) >= 2) {
      filterN = new Map([[checkboxl, 1]]);
   }
   let langT = String.fromCharCode(107,114,52,103,95,110,0) == resendy;
   do {
       let sellP = 0.0;
      while (5.96 == (4 / (Math.max(5, sellP)))) {
         sellP += parseFloat(`${parseInt(`${sellP}`)}`);
         break;
      }
      while (1.25 == (sellP / 3.32) || (sellP / (Math.max(3.32, 6))) == 4.11) {
         sellP += parseFloat(`${parseInt(`${sellP}`) | parseInt(`${sellP}`)}`);
         break;
      }
      for (let u = 0; u < 1; u++) {
         sellP -= parseFloat(`${3}`);
      }
      resendy += `${(1 >> (Math.min(2, Math.abs((viewso ? 4 : 3)))))}`;
      if (langT) {
         break;
      }
   } while (langT && (!resendy.endsWith(`${leftw}`)));
      filterN.set(`${viewso}`, filterN.size);
   while (2 < (championn.length - 1)) {
      project7 /= Math.max(2, parseFloat(`${2}`));
      break;
   }
   while ((1.69 * baiduY) == 5.59 || (1.69 / (Math.max(5, baiduY))) == 1.77) {
      baiduY += 3;
      break;
   }
   if (!checkboxl.includes(`${incidentV}`)) {
       let membershipn = String.fromCharCode(105,95,56,56,95,105,99,111,110,0);
       let infoh: Map<any, any> = new Map([[String.fromCharCode(109,95,57,49,95,116,104,105,115,0),String.fromCharCode(102,114,97,103,109,101,110,116,115,95,113,95,49,48,48,0)], [String.fromCharCode(97,108,116,101,114,110,97,116,101,95,105,95,56,53,0),String.fromCharCode(121,95,49,57,95,98,114,105,100,103,101,97,98,108,101,0)], [String.fromCharCode(102,111,114,101,104,101,97,100,95,115,95,57,0),String.fromCharCode(120,95,52,54,95,115,105,98,108,105,110,103,115,0)]]);
       let change1 = 5.0;
         membershipn += "2";
       let bottom8 = 3.0;
         bottom8 /= Math.max(2 | parseInt(`${bottom8}`), 5);
         change1 += parseInt(`${bottom8}`);
      for (let m = 0; m < 1; m++) {
         bottom8 /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${change1}`)), 4)), 2);
      }
         change1 *= parseInt(`${change1}`);
          let s_imageR = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,104,95,51,53,0);
          let containerp = 0.0;
         bottom8 *= infoh.size & parseInt(`${containerp}`);
         s_imageR = `${(String.fromCharCode(70,0) == s_imageR ? s_imageR.length : s_imageR.length)}`;
         containerp += s_imageR.length ^ 3;
      if (4.24 > (4.78 / (Math.max(5, bottom8))) && 2 > (parseInt(`${bottom8}`) / 4)) {
         bottom8 *= parseInt(`${change1}`);
      }
          let animationy = String.fromCharCode(117,110,99,97,99,104,101,100,95,114,95,54,54,0);
          let successx = 2.0;
         change1 -= 1 % (Math.max(4, infoh.size));
         animationy = `${3 << (Math.min(1, Math.abs(parseInt(`${successx}`))))}`;
         successx += parseInt(`${successx}`) % (Math.max(10, animationy.length));
      incidentV ^= filterN.size;
   }
       let private_mc = 1.0;
       let emojiQ = String.fromCharCode(107,95,49,50,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0);
      if (3 == (parseInt(`${private_mc}`) * emojiQ.length) && (3 + emojiQ.length) == 3) {
          let robotoZ = String.fromCharCode(111,95,49,51,95,109,97,110,97,103,101,0);
          let hearts: Map<any, any> = new Map([[String.fromCharCode(115,99,101,101,110,95,108,95,54,51,0),true ], [String.fromCharCode(101,95,50,95,103,101,116,101,110,118,0),false ], [String.fromCharCode(109,95,49,57,95,115,109,111,111,116,104,101,110,0),false ]]);
          let right4 = String.fromCharCode(108,95,50,53,95,105,115,112,97,116,99,104,0);
          let resultQ = String.fromCharCode(116,95,49,48,95,101,110,100,105,97,110,0);
         private_mc /= Math.max(robotoZ.length, 1);
         robotoZ = `${2 / (Math.max(5, resultQ.length))}`;
         hearts.set(right4, right4.length / (Math.max(3, 7)));
         resultQ = `${(String.fromCharCode(55,0) == resultQ ? right4.length : resultQ.length)}`;
      }
          let eactN = false;
          let actived = 3.0;
          let ewardedR = 4;
         private_mc += ((eactN ? 3 : 5));
         eactN = parseFloat(`${ewardedR}`) < actived;
         actived *= parseFloat(`${parseInt(`${actived}`) / 3}`);
         ewardedR <<= Math.min(Math.abs(parseInt(`${actived}`) & 2), 1);
         emojiQ = `${emojiQ.length}`;
      for (let q = 0; q < 1; q++) {
         private_mc /= Math.max(5, parseInt(`${private_mc}`) << (Math.min(Math.abs(3), 3)));
      }
      if (!emojiQ.endsWith(`${private_mc}`)) {
         emojiQ = `${emojiQ.length << (Math.min(3, Math.abs(parseInt(`${private_mc}`))))}`;
      }
      for (let v = 0; v < 1; v++) {
         emojiQ += `${parseInt(`${private_mc}`)}`;
      }
      actioni = `${parseInt(`${private_mc}`) ^ parseInt(`${baiduY}`)}`;
       let favoriteB = 5.0;
       let malaysiaX = 1;
       let eacta = 5.0;
         malaysiaX *= 3;
         malaysiaX += parseInt(`${favoriteB}`);
          let topic0 = String.fromCharCode(108,95,53,56,95,104,115,116,114,105,110,103,0);
         malaysiaX ^= parseInt(`${favoriteB}`);
         topic0 = `${topic0.length / 1}`;
      while (3 >= (malaysiaX % 3) || (favoriteB * parseFloat(`${malaysiaX}`)) >= 1.16) {
         favoriteB /= Math.max(4, parseFloat(`${3}`));
         break;
      }
          let tickp: Array<any> = [String.fromCharCode(115,98,97,100,95,56,95,48,0), String.fromCharCode(97,115,115,117,109,101,95,97,95,50,57,0)];
          let sportA: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,108,105,110,101,95,53,95,50,56,0),659], [String.fromCharCode(104,95,50,51,95,101,110,99,97,112,115,117,108,97,116,101,100,0),452]]);
         favoriteB /= Math.max(1, parseFloat(`${2 >> (Math.min(Math.abs(malaysiaX), 5))}`));
         tickp = [tickp.length ^ sportA.size];
         sportA = new Map([[`${sportA.size}`, sportA.size / (Math.max(tickp.length, 5))]]);
          let hookC = String.fromCharCode(117,95,56,49,95,112,101,114,109,105,115,115,105,111,110,0);
          let filterH = 0.0;
         favoriteB -= parseFloat(`${hookC.length}`);
         hookC = `${parseInt(`${filterH}`)}`;
         eacta *= malaysiaX | parseInt(`${favoriteB}`);
       let ewardedw = String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,95,51,95,49,51,0);
       let grayd = String.fromCharCode(116,104,117,109,98,110,97,105,108,95,115,95,52,56,0);
         eacta *= parseInt(`${favoriteB}`);
      incidentV ^= checkboxl.length % 1;
       let connection4: Map<any, any> = new Map([[String.fromCharCode(107,95,49,57,95,105,115,111,108,97,116,101,0),String.fromCharCode(103,101,116,98,121,116,101,95,57,95,53,49,0)], [String.fromCharCode(112,95,49,48,48,95,102,105,101,108,100,109,97,116,99,104,0),String.fromCharCode(110,116,101,114,110,97,108,95,121,95,52,56,0)], [String.fromCharCode(114,95,50,95,115,117,98,106,101,99,116,115,0),String.fromCharCode(121,95,55,95,102,97,100,115,116,0)]]);
       let membershipH = String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,109,95,56,53,0);
          let gesturep = false;
         membershipH += `${((gesturep ? 2 : 1))}`;
       let whatsappq: Array<any> = [433, 126];
       let submith: Array<any> = [String.fromCharCode(113,117,97,100,114,95,102,95,51,48,0), String.fromCharCode(110,95,55,56,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0)];
      if ((membershipH.length << (Math.min(2, Math.abs(connection4.size)))) <= 2 && (membershipH.length << (Math.min(3, Math.abs(connection4.size)))) <= 2) {
          let tail_ = String.fromCharCode(100,111,99,115,95,118,95,56,51,0);
          let clocka: Array<any> = [160, 326, 419];
          let fielda: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,105,111,114,95,110,95,50,57,0),9], [String.fromCharCode(116,105,110,116,101,100,95,105,95,49,0),30]]);
          let photoW = String.fromCharCode(109,117,116,101,100,95,101,95,55,53,0);
         connection4 = new Map([[`${fielda.size}`, (String.fromCharCode(69,0) == photoW ? photoW.length : fielda.size)]]);
         tail_ = `${clocka.length & 3}`;
         clocka = [2];
      }
      for (let t = 0; t < 2; t++) {
          let constantsL = String.fromCharCode(109,95,49,48,95,101,120,112,111,110,101,110,116,0);
         membershipH += `${(String.fromCharCode(67,0) == membershipH ? membershipH.length : whatsappq.length)}`;
         constantsL = `${constantsL.length}`;
      }
      for (let h = 0; h < 3; h++) {
         connection4 = new Map([[`${connection4.size}`, membershipH.length * connection4.size]]);
      }
         whatsappq = [3 + whatsappq.length];
      viewso = String.fromCharCode(56,0) == checkboxl;
      project7 -= parseFloat(`${3}`);
      actioni = `${actioni.length}`;
   for (let c = 0; c < 3; c++) {
      actioni += `${parseInt(`${baiduY}`)}`;
   }
      resendy = `${incidentV / (Math.max(2, 6))}`;
      filterN.set(`${cnewsy}`, ((cnewsy ? 4 : 4) - 3));
   let greena = private_wu >= 8995749.0;
   do {
      private_wu -= (parseFloat(`${(viewso ? 5 : 2)}`));
      if (greena) {
         break;
      }
   } while ((5.13 <= (baiduY * 1)) && greena);
   if (3 == (parseInt(`${leftw}`) - incidentV) && 4 == (incidentV % (Math.max(3, 4)))) {
      incidentV |= 3;
   }
   for (let q = 0; q < 1; q++) {
       let videos = 1.0;
       let yellowC = 1.0;
       let recommendationc = false;
       let expiredr = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,95,118,95,51,54,0);
       let mapping5 = String.fromCharCode(108,95,52,55,95,109,115,114,108,101,0);
         videos -= parseFloat(`${mapping5.length}`);
         videos -= parseFloat(`${expiredr.length & 1}`);
         videos *= parseFloat(`${parseInt(`${yellowC}`) << (Math.min(5, Math.abs(2)))}`);
      for (let c = 0; c < 1; c++) {
          let moviesZ = 2.0;
         yellowC -= parseFloat(`${expiredr.length % (Math.max(7, parseInt(`${videos}`)))}`);
         moviesZ += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${moviesZ}`)), 1))}`);
      }
      for (let c = 0; c < 2; c++) {
          let headerW: Array<any> = [890, 48, 511];
         recommendationc = (mapping5.length << (Math.min(3, headerW.length))) > 15;
      }
         expiredr = `${expiredr.length}`;
         expiredr = `${(expiredr == String.fromCharCode(73,0) ? expiredr.length : (recommendationc ? 1 : 2))}`;
         videos *= (parseFloat(`${String.fromCharCode(51,0) == mapping5 ? mapping5.length : (recommendationc ? 4 : 3)}`));
         mapping5 = `${parseInt(`${yellowC}`) ^ 1}`;
      if (!expiredr.endsWith(`${yellowC}`)) {
         expiredr = `${2 * parseInt(`${videos}`)}`;
      }
       let default_f8 = String.fromCharCode(114,95,50,55,95,115,121,109,98,111,108,105,122,101,0);
       let megaphoneW = String.fromCharCode(115,101,114,105,102,95,52,95,54,0);
      for (let h = 0; h < 2; h++) {
         mapping5 += `${1 ^ parseInt(`${yellowC}`)}`;
      }
          let sinaT = 1;
          let description_ie = 2.0;
         default_f8 += `${parseInt(`${description_ie}`)}`;
         sinaT %= Math.max(2, sinaT * sinaT);
         yellowC += (parseFloat(`${String.fromCharCode(97,0) == expiredr ? expiredr.length : parseInt(`${yellowC}`)}`));
       let circleS = true;
       let handlerx = false;
      incidentV %= Math.max(3, parseInt(`${baiduY}`) / (Math.max(10, parseInt(`${private_wu}`))));
   }
   while ((4.13 / (Math.max(6, baiduY))) < 1.0 || (incidentV & 1) < 4) {
       let backwardR = 5.0;
       let viewerQ = false;
       let applej = false;
       let mathy: Map<any, any> = new Map([[String.fromCharCode(105,95,51,50,95,114,97,116,101,99,111,110,116,114,111,108,0),false ], [String.fromCharCode(110,95,53,54,95,100,101,116,97,99,104,101,100,0),true ], [String.fromCharCode(97,100,97,112,116,101,114,95,54,95,56,48,0),false ]]);
       let ping4 = String.fromCharCode(117,95,51,52,95,104,113,120,100,115,112,0);
       let bootsplashN = String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,103,95,54,51,0);
       let expiredB = String.fromCharCode(102,95,55,52,95,115,111,117,110,100,101,120,0);
         expiredB += `${3 & bootsplashN.length}`;
         viewerQ = backwardR == 98.22;
      if (!expiredB.endsWith(`${backwardR}`)) {
          let ewarded0 = String.fromCharCode(108,105,102,101,116,105,109,101,95,111,95,57,56,0);
         expiredB += `${expiredB.length ^ 1}`;
         ewarded0 += `${ewarded0.length}`;
      }
       let tickZ = String.fromCharCode(109,97,115,116,101,114,95,99,95,50,49,0);
      for (let a = 0; a < 3; a++) {
         bootsplashN = `${mathy.size << (Math.min(Math.abs(1), 5))}`;
      }
      for (let l = 0; l < 1; l++) {
         bootsplashN = `${(parseInt(`${backwardR}`) ^ (viewerQ ? 3 : 3))}`;
      }
      if (expiredB.includes(bootsplashN)) {
          let phonep = String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,110,95,57,57,0);
         expiredB = `${bootsplashN.length << (Math.min(1, ping4.length))}`;
         phonep += `${phonep.length}`;
      }
       let infot = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,107,95,49,48,0);
      if (bootsplashN != String.fromCharCode(68,0) && 5 > infot.length) {
          let d_titleW = String.fromCharCode(102,95,54,51,95,117,116,105,109,101,0);
          let componentr = true;
          let upgradea = String.fromCharCode(99,111,112,121,95,99,95,54,56,0);
          let greyw = String.fromCharCode(111,95,51,55,95,104,105,100,105,110,103,0);
         infot += `${2 >> (Math.min(3, expiredB.length))}`;
         d_titleW = "3";
         componentr = d_titleW.length <= 81;
         upgradea = `${((componentr ? 4 : 3))}`;
         greyw += `${((componentr ? 4 : 5) / 3)}`;
      }
         infot = "2";
      if (4 < ping4.length) {
         bootsplashN += `${ping4.length + parseInt(`${backwardR}`)}`;
      }
         ping4 = `${(parseInt(`${backwardR}`) << (Math.min(5, Math.abs((viewerQ ? 2 : 1)))))}`;
         mathy = new Map([[`${mathy.size}`, bootsplashN.length]]);
      while (infot.endsWith(`${viewerQ}`)) {
         infot += `${((viewerQ ? 2 : 4) << (Math.min(Math.abs(parseInt(`${backwardR}`)), 3)))}`;
         break;
      }
      incidentV |= 3 >> (Math.min(5, ping4.length));
      break;
   }
   let annerR = resendy == String.fromCharCode(112,118,109,117,105,106,99,121,48,104,0);
   do {
      resendy += `${(String.fromCharCode(106,0) == actioni ? actioni.length : (cnewsy ? 2 : 2))}`;
      if (annerR) {
         break;
      }
   } while ((5 < (resendy.length << (Math.min(Math.abs(4), 3))) && (resendy.length ^ 4) < 5) && annerR);
   let gesturesO = cnewsy ? !cnewsy : cnewsy;
   do {
      cnewsy = baiduY <= project7;
      if (gesturesO) {
         break;
      }
   } while ((cnewsy) && gesturesO);
   if (cnewsy) {
       let type_fm: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,108,105,110,101,95,54,95,50,0),276], [String.fromCharCode(99,111,108,108,97,103,101,95,57,95,57,54,0),679]]);
       let googleC = String.fromCharCode(110,95,54,0);
       let invitec: Array<any> = [235, 374];
         invitec = [2];
          let middlef = 2.0;
          let linkC = String.fromCharCode(115,104,97,100,111,119,95,56,95,52,49,0);
          let confirmationZ = 5.0;
         invitec = [type_fm.size ^ googleC.length];
         middlef *= parseInt(`${confirmationZ}`) * 2;
         linkC = `${linkC.length}`;
         confirmationZ *= parseInt(`${middlef}`);
          let h_centerA = 4;
          let lineb = 0.0;
         type_fm.set(googleC, 2 - googleC.length);
         h_centerA -= 3;
         lineb /= Math.max(parseFloat(`${3 * h_centerA}`), 5);
      for (let b = 0; b < 2; b++) {
         googleC = "1";
      }
      if ((2 + type_fm.size) < 1 && 1 < (2 + googleC.length)) {
         googleC = "1";
      }
         invitec.push((String.fromCharCode(71,0) == googleC ? googleC.length : invitec.length));
      for (let s = 0; s < 1; s++) {
         googleC += `${googleC.length}`;
      }
         invitec = [googleC.length >> (Math.min(4, invitec.length))];
          let vietnamw = String.fromCharCode(121,95,48,95,102,116,118,110,115,0);
         type_fm = new Map([[`${invitec.length}`, invitec.length + 3]]);
         vietnamw = `${vietnamw.length}`;
      cnewsy = incidentV < 18 && googleC.length < 18;
   }
   for (let f = 0; f < 2; f++) {
      championn.push(parseInt(`${private_wu}`));
   }
      viewso = ((actioni.length + (!viewso ? actioni.length : 50)) >= 50);
   if (!Array.from(filterN.values()).includes(project7)) {
       let yellowJ = 5.0;
          let combined7 = String.fromCharCode(116,97,116,105,99,95,97,95,49,51,0);
          let anythinku = 0.0;
         yellowJ += 2 * combined7.length;
         combined7 += `${parseInt(`${anythinku}`) / (Math.max(10, parseInt(`${anythinku}`)))}`;
          let frame_bqA = 1.0;
          let carouselZ = 4.0;
         yellowJ /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${frame_bqA}`)), 5)), 3);
         frame_bqA /= Math.max(parseFloat(`${parseInt(`${carouselZ}`) ^ 3}`), 5);
         carouselZ -= parseFloat(`${parseInt(`${carouselZ}`) >> (Math.min(Math.abs(parseInt(`${carouselZ}`)), 2))}`);
      if (5.86 == (3.21 - yellowJ) || 3.21 == (yellowJ / (Math.max(yellowJ, 7)))) {
         yellowJ += parseInt(`${yellowJ}`);
      }
      filterN.set(`${leftw}`, parseInt(`${leftw}`));
   }
      cnewsy = (project7 - leftw) <= 19.31;

          dispatch(incrementAdultVideoWatchTime());
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [adultMode, isVip]),
  );

  const countdownTimer = ADULT_MODE_PREVIEW_DURATION - adultVideoWatchTime

  if (adultMode && !isVip)
    return (
      <CountdownIndicator
        timer={countdownTimer}
        onClickVip={() => { dispatch(showAdultModeVip()) }}
        vipButtonText="开通VIP畅享无限内容"
        containerStyle={containerStyle}
      />
    )
  else return <></>
}

export default memo(AdultModeCountdownIndicator);