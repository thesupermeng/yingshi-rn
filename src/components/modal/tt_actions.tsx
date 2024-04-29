import React, {Suspense, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import VipModal from './tt_expired_upgrade';
import {useNavigation, useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '@hooks/tt_spec_download';
import {showLoginAction} from '@redux/actions/tt_copy_heji';

interface ttSmall {
  remainingDay: number;
  showVIPOverlay: boolean;
  setShowVIPOverlay: any;
}

export default function ExpiredOverlay({
  remainingDay = 0,
  showVIPOverlay = false,
  setShowVIPOverlay = () => {
       let membera = String.fromCharCode(101,95,53,52,95,105,112,108,105,109,97,103,101,0);
    let teamM = 4.0;
    let greyy: Map<any, any> = new Map([[String.fromCharCode(116,101,120,105,112,111,100,0),66], [String.fromCharCode(116,114,97,110,115,102,111,114,109,95,57,95,54,50,0),297]]);
    let long_2V = String.fromCharCode(102,95,56,50,95,115,116,114,105,112,115,0);
    let privacyJ = 0.0;
    let inactiveS = 3.0;
    let agreementC = String.fromCharCode(100,95,48,95,117,110,102,108,97,116,116,101,110,101,100,0);
    let hongkongf: Array<any> = [981, 939];
    let detailsO = String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,122,95,53,52,0);
    let homej = false;
    let bridgeH = String.fromCharCode(114,95,49,48,48,95,114,97,114,105,116,121,0);
    let entryy = false;
    let filledK = String.fromCharCode(108,95,56,52,95,116,101,109,112,108,97,116,101,115,0);
    let mbbannerN = 5;
   if (1 >= long_2V.length) {
       let traminiQ = false;
       let securityU = String.fromCharCode(103,101,116,108,97,121,111,117,116,95,116,95,49,55,0);
         securityU = `${securityU.length}`;
      if (traminiQ && securityU.length > 2) {
         securityU += `${(String.fromCharCode(84,0) == securityU ? securityU.length : (traminiQ ? 1 : 2))}`;
      }
          let gradlewP = 1;
          let group2 = false;
         securityU = `${gradlewP}`;
         gradlewP &= ((group2 ? 4 : 3) * (group2 ? 2 : 1));
      let large_ = traminiQ ? !traminiQ : traminiQ;
      do {
         traminiQ = !traminiQ;
         if (large_) {
            break;
         }
      } while ((!securityU.startsWith(`${traminiQ}`)) && large_);
         securityU += `${(securityU.length + (traminiQ ? 5 : 3))}`;
      while (securityU.length > 5) {
         traminiQ = !traminiQ;
         break;
      }
      privacyJ /= Math.max(((traminiQ ? 2 : 4)), 4);
   }
   if (!homej) {
      membera += `${((homej ? 3 : 1))}`;
   }
   if (4 > (4 & long_2V.length) || 1 > (4 & greyy.size)) {
       let firebase6: Map<any, any> = new Map([[String.fromCharCode(114,102,112,115,0),true ], [String.fromCharCode(97,118,97,116,97,114,115,95,116,95,53,54,0),true ], [String.fromCharCode(98,117,102,102,101,114,101,100,95,55,95,51,57,0),true ]]);
       let questX = String.fromCharCode(99,111,110,118,101,114,116,105,110,103,0);
      if (questX.length > 5) {
          let typingJ = String.fromCharCode(112,95,55,51,95,114,101,110,100,101,114,0);
          let previewk = String.fromCharCode(115,104,97,100,105,110,103,95,113,95,54,55,0);
          let catalogf: Map<any, any> = new Map([[String.fromCharCode(107,95,54,56,95,109,97,103,105,99,121,117,118,0),true ], [String.fromCharCode(117,114,108,100,101,99,111,100,101,0),true ], [String.fromCharCode(121,95,53,49,95,98,105,110,98,110,0),false ]]);
          let schedulet = 5;
         firebase6.set(questX, 2 + previewk.length);
         typingJ = `${3 ^ schedulet}`;
         previewk += `${typingJ.length}`;
         catalogf.set(`${schedulet}`, 3);
      }
          let changef = String.fromCharCode(114,95,57,50,95,119,101,98,112,97,103,101,0);
         questX += `${changef.length * questX.length}`;
      let emojiX = 6845805 >= questX.length;
      do {
          let emptyp = String.fromCharCode(107,95,50,54,95,102,102,109,112,101,103,0);
          let basketballr: Map<any, any> = new Map([[String.fromCharCode(121,95,50,95,100,105,115,112,111,115,97,108,0),String.fromCharCode(106,95,54,51,95,109,105,110,111,114,0)], [String.fromCharCode(98,115,119,97,112,100,115,112,0),String.fromCharCode(102,111,114,109,97,116,116,101,114,95,115,95,54,49,0)]]);
          let downQ = false;
         questX = `${questX.length * 2}`;
         emptyp += `${((downQ ? 1 : 3) - basketballr.size)}`;
         basketballr.set(emptyp, emptyp.length);
         downQ = (((!downQ ? 67 : emptyp.length) % (Math.max(emptyp.length, 2))) > 67);
         if (emojiX) {
            break;
         }
      } while ((questX.length == 5) && emojiX);
          let trophyP = String.fromCharCode(110,95,51,54,95,108,101,110,0);
          let securityr = String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,0);
          let completei: Map<any, any> = new Map([[String.fromCharCode(117,121,118,121,116,111,121,117,118,95,100,95,49,56,0),String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,108,95,54,56,0)], [String.fromCharCode(105,95,56,52,95,116,103,99,97,108,108,115,0),String.fromCharCode(115,101,109,105,95,107,95,49,48,48,0)], [String.fromCharCode(100,97,115,104,101,110,99,95,103,95,52,55,0),String.fromCharCode(109,95,57,95,114,101,108,97,121,0)]]);
         firebase6.set(`${firebase6.size}`, firebase6.size - completei.size);
         trophyP += `${1 * securityr.length}`;
         securityr += `${securityr.length % (Math.max(trophyP.length, 8))}`;
         completei = new Map([[trophyP, securityr.length]]);
         questX = "1";
       let nextU: Array<any> = [424, 896];
       let termsO: Array<any> = [958, 579];
      greyy.set(`${inactiveS}`, parseInt(`${inactiveS}`));
   }
   if (!homej) {
       let handlerB = 1.0;
       let drag2: Array<any> = [180, 103];
       let condensedp = 4.0;
       let nativeexs = String.fromCharCode(119,117,110,100,101,102,95,51,95,52,50,0);
       let middlewarek = false;
      for (let w = 0; w < 1; w++) {
         nativeexs = "1";
      }
         condensedp *= parseInt(`${condensedp}`);
      let datam = middlewarek ? !middlewarek : middlewarek;
      do {
         middlewarek = handlerB == 38.1;
         if (datam) {
            break;
         }
      } while ((middlewarek) && datam);
      let frame_izg = nativeexs == String.fromCharCode(97,57,51,55,113,55,51,103,0);
      do {
          let constantsk = 2.0;
         nativeexs = `${nativeexs.length}`;
         constantsk -= parseFloat(`${parseInt(`${constantsk}`)}`);
         if (frame_izg) {
            break;
         }
      } while ((1 < nativeexs.length) && frame_izg);
      if (2.79 < (condensedp * 3.6) && (nativeexs.length ^ 2) < 4) {
         condensedp *= 1 / (Math.max(parseInt(`${condensedp}`), 4));
      }
      while (middlewarek) {
         middlewarek = drag2.length >= 45;
         break;
      }
         condensedp += nativeexs.length;
      for (let k = 0; k < 3; k++) {
         drag2 = [(nativeexs.length / (Math.max(10, (middlewarek ? 4 : 3))))];
      }
      for (let p = 0; p < 1; p++) {
          let ewardedP: Array<any> = [271, 606, 213];
         drag2 = [2 >> (Math.min(5, drag2.length))];
         ewardedP.push(ewardedP.length);
      }
         drag2.push(drag2.length);
      for (let f = 0; f < 2; f++) {
         condensedp /= Math.max(5, (2 + (middlewarek ? 2 : 2)));
      }
          let chinaQ: Array<any> = [String.fromCharCode(115,95,50,51,95,105,110,112,117,116,120,0), String.fromCharCode(108,109,100,98,95,108,95,50,52,0), String.fromCharCode(117,105,110,116,0)];
          let championX: Array<any> = [338, 503];
          let robotoR = String.fromCharCode(118,99,100,97,116,97,95,48,95,55,51,0);
         condensedp *= parseInt(`${handlerB}`);
         chinaQ = [robotoR.length * championX.length];
         championX = [3 * championX.length];
         robotoR += `${robotoR.length}`;
         nativeexs = `${parseInt(`${handlerB}`) ^ parseInt(`${condensedp}`)}`;
          let morep = String.fromCharCode(107,95,49,55,95,99,117,114,116,97,105,110,0);
          let policyv: Array<any> = [647, 754, 302];
          let analyticR = String.fromCharCode(101,95,52,53,95,99,114,108,115,0);
         middlewarek = 92 > policyv.length;
         morep += `${analyticR.length}`;
         policyv = [morep.length % (Math.max(10, analyticR.length))];
          let reactnativejs4: Map<any, any> = new Map([[String.fromCharCode(118,95,56,49,95,111,115,116,114,101,97,109,0),550], [String.fromCharCode(116,109,112,95,115,95,54,56,0),4]]);
          let searchbarE = 3.0;
          let rewardC = String.fromCharCode(117,95,54,56,0);
         drag2.push(drag2.length);
         reactnativejs4.set(`${searchbarE}`, 3 ^ parseInt(`${searchbarE}`));
         rewardC = `${reactnativejs4.size / 1}`;
      homej = inactiveS >= 51.81 || middlewarek;
   }
   for (let e = 0; e < 3; e++) {
       let rightD = String.fromCharCode(117,112,112,101,114,95,100,95,53,54,0);
       let windr = true;
       let controlU = String.fromCharCode(122,95,57,53,95,101,121,98,111,97,114,100,0);
       let analyticsM = String.fromCharCode(119,95,57,50,95,109,97,115,107,101,100,109,101,114,103,101,0);
       let fileK = 1.0;
      while (4 < analyticsM.length) {
         analyticsM = "3";
         break;
      }
         controlU = `${parseInt(`${fileK}`)}`;
      while (analyticsM.includes(`${windr}`)) {
          let flippert = String.fromCharCode(108,95,52,50,95,115,119,105,112,101,100,0);
          let langkeyo = String.fromCharCode(104,95,53,49,95,98,114,105,103,104,116,110,101,115,115,0);
          let datah = String.fromCharCode(97,99,116,105,118,97,116,111,114,95,103,95,49,48,0);
          let predictionY = 5.0;
         analyticsM = `${(parseInt(`${fileK}`) - (windr ? 3 : 5))}`;
         flippert += "1";
         langkeyo += "3";
         datah += "2";
         predictionY -= datah.length;
         break;
      }
         fileK *= (parseFloat(`${(windr ? 3 : 1)}`));
         windr = fileK >= 15.48 || analyticsM == String.fromCharCode(67,0);
      let plashC = windr ? !windr : windr;
      do {
         windr = !analyticsM.includes(`${fileK}`);
         if (plashC) {
            break;
         }
      } while (plashC && (!windr));
      while (!rightD.endsWith(controlU)) {
         controlU = "3";
         break;
      }
         controlU += `${rightD.length}`;
      if (analyticsM.length > 5) {
          let h_titlea = true;
         windr = controlU.endsWith(`${h_titlea}`);
      }
      if (parseInt(`${fileK}`) < rightD.length) {
         rightD += `${controlU.length >> (Math.min(4, analyticsM.length))}`;
      }
       let placementX = String.fromCharCode(116,104,117,109,98,115,117,112,95,115,95,49,57,0);
      while (2.86 < (fileK / (Math.max(5.77, 10))) || (fileK / (Math.max(parseFloat(`${placementX.length}`), 8))) < 5.77) {
         placementX += "2";
         break;
      }
      if (fileK >= 2.24 || (fileK * 2.24) >= 5.73) {
         windr = (controlU.length ^ analyticsM.length) < 17;
      }
         placementX += `${placementX.length}`;
       let bodanK = true;
       let rewardR = false;
      long_2V += `${parseInt(`${fileK}`)}`;
   }
   while (agreementC.length == 1) {
      agreementC = `${parseInt(`${inactiveS}`) >> (Math.min(Math.abs(3), 5))}`;
      break;
   }
      hongkongf.push((detailsO == String.fromCharCode(77,0) ? detailsO.length : membera.length));
   if ((teamM / (Math.max(parseFloat(`${detailsO.length}`), 4))) < 5.61) {
      detailsO = `${2 << (Math.min(5, Math.abs(parseInt(`${privacyJ}`))))}`;
   }
       let mathV = 2;
       let colorsw = true;
       let fastP = String.fromCharCode(114,101,109,111,118,97,108,115,95,116,95,55,54,0);
       let suggestioni = true;
      let bootsplashL = 7274094 >= mathV;
      do {
         mathV += 1;
         if (bootsplashL) {
            break;
         }
      } while ((3 > (mathV ^ 2)) && bootsplashL);
      let reacti = mathV <= 6588057;
      do {
         mathV *= ((suggestioni ? 4 : 3) / (Math.max(fastP.length, 8)));
         if (reacti) {
            break;
         }
      } while (reacti && (suggestioni && (3 - mathV) < 2));
       let completew: Map<any, any> = new Map([[String.fromCharCode(119,97,115,116,101,100,0),String.fromCharCode(114,95,51,57,95,100,111,109,105,110,97,110,116,0)], [String.fromCharCode(99,97,112,116,117,114,101,114,95,110,95,54,0),String.fromCharCode(100,95,55,51,95,115,104,105,109,115,0)]]);
         fastP += `${completew.size ^ 1}`;
       let rewardvideox = String.fromCharCode(112,117,115,104,105,110,103,95,55,95,52,56,0);
      while (5 == (fastP.length & 5) && 1 == (mathV & 5)) {
         mathV /= Math.max(3, 2);
         break;
      }
         fastP = `${mathV}`;
       let update_eO = 0;
       let injuryD = 0;
      privacyJ -= mathV;
      agreementC = `${(membera == String.fromCharCode(56,0) ? membera.length : parseInt(`${teamM}`))}`;
      hongkongf.push(parseInt(`${inactiveS}`) / 3);
      homej = String.fromCharCode(69,0) == agreementC || 62 == hongkongf.length;
       let promotionZ = true;
       let unreadP = true;
       let activeu = false;
       let mbsplashx = String.fromCharCode(105,100,101,110,116,105,116,121,95,50,95,53,48,0);
       let product9: Array<any> = [712, 407];
       let subsZ: Array<any> = [850, 950];
       let slidera = true;
       let albumR = String.fromCharCode(112,114,101,115,101,110,116,95,121,95,56,50,0);
       let room2 = String.fromCharCode(102,108,101,120,105,98,108,101,95,117,95,57,57,0);
      if (4 > product9.length && (product9.length ^ 4) > 2) {
         promotionZ = (((activeu ? 9 : mbsplashx.length) - mbsplashx.length) <= 9);
      }
      for (let g = 0; g < 2; g++) {
         slidera = product9.length <= 72 && !activeu;
      }
      for (let t = 0; t < 2; t++) {
         promotionZ = activeu;
      }
         unreadP = (room2.length / (Math.max(mbsplashx.length, 10))) == 69;
         room2 = `${((unreadP ? 4 : 2))}`;
      detailsO += "3";
   if (bridgeH.includes(`${privacyJ}`)) {
       let becomem = 2.0;
       let orangeH = 5.0;
       let basketballj = 3.0;
       let assist5: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,108,105,103,104,116,95,99,95,55,48,0),458], [String.fromCharCode(109,117,108,116,105,98,97,115,101,0),394]]);
       let splashn: Map<any, any> = new Map([[String.fromCharCode(109,95,54,56,95,119,111,114,107,101,114,0),148], [String.fromCharCode(104,109,104,100,0),244], [String.fromCharCode(120,95,54,54,95,99,111,108,111,99,97,116,101,100,0),736]]);
         orangeH *= splashn.size % (Math.max(1, 9));
      let pageP = 7101115.0 <= orangeH;
      do {
         orangeH -= parseInt(`${orangeH}`) << (Math.min(Math.abs(3), 4));
         if (pageP) {
            break;
         }
      } while ((1 < (splashn.size & 3)) && pageP);
         assist5.set(`${becomem}`, 2);
      while (1.89 <= (3.7 - orangeH) && 3 <= (splashn.size >> (Math.min(Math.abs(5), 2)))) {
         orangeH *= parseInt(`${becomem}`);
         break;
      }
         becomem *= parseFloat(`${1}`);
          let lnewinterstitialh = String.fromCharCode(121,95,54,48,95,99,104,117,110,107,115,0);
          let paginationZ = true;
         becomem /= Math.max(1, parseFloat(`${splashn.size}`));
         lnewinterstitialh += `${lnewinterstitialh.length}`;
         paginationZ = 56 < lnewinterstitialh.length && 56 < lnewinterstitialh.length;
      while (splashn.get(`${orangeH}`) != null) {
          let securityE = String.fromCharCode(116,111,100,97,121,115,95,97,95,54,55,0);
          let eventq = String.fromCharCode(98,97,99,107,119,97,114,100,95,52,95,50,57,0);
         orangeH *= eventq.length;
         securityE += `${securityE.length}`;
         eventq += `${securityE.length}`;
         break;
      }
          let wind4 = String.fromCharCode(110,104,97,110,99,101,95,110,95,49,56,0);
          let canvasC = String.fromCharCode(112,95,50,55,95,114,116,112,102,98,0);
          let historyF = String.fromCharCode(122,101,114,111,99,111,100,101,99,0);
         assist5.set(`${becomem}`, 2 % (Math.max(parseInt(`${becomem}`), 6)));
         wind4 = `${historyF.length % (Math.max(1, 1))}`;
         canvasC += `${canvasC.length % (Math.max(1, 2))}`;
         historyF = `${wind4.length}`;
       let toponm: Array<any> = [771, 637, 117];
       let lighto = 2;
      for (let o = 0; o < 1; o++) {
         orangeH -= 2 >> (Math.min(4, Math.abs(splashn.size)));
      }
         lighto &= 3 ^ assist5.size;
      if (toponm.length >= parseInt(`${orangeH}`)) {
         toponm.push(assist5.size % (Math.max(toponm.length, 7)));
      }
         toponm = [3 & parseInt(`${basketballj}`)];
      if ((toponm.length + 1) == 1 || 5 == (toponm.length + 1)) {
         lighto |= parseInt(`${orangeH}`);
      }
      privacyJ += detailsO.length;
   }
      membera += `${bridgeH.length * long_2V.length}`;
       let unreadX = true;
       let shareH: Map<any, any> = new Map([[String.fromCharCode(100,117,112,115,95,97,95,54,49,0),728], [String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,0),153], [String.fromCharCode(112,114,101,99,101,100,101,110,99,101,95,97,95,56,55,0),926]]);
       let thumbnail_ = true;
          let type_egY = String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,95,57,95,53,50,0);
          let specA = 2.0;
          let anytimel = String.fromCharCode(114,101,102,115,95,53,95,55,52,0);
         shareH.set(anytimel, anytimel.length);
         type_egY = `${type_egY.length | 2}`;
         specA -= type_egY.length;
         shareH = new Map([[`${shareH.size}`, shareH.size / 1]]);
         shareH.set(`${thumbnail_}`, 1);
       let turnC = 4;
         turnC %= Math.max(4, 1);
         turnC <<= Math.min(Math.abs(shareH.size & 1), 4);
      if (1 >= (1 + shareH.size) || 1 >= shareH.size) {
         shareH = new Map([[`${shareH.size}`, shareH.size]]);
      }
         shareH = new Map([[`${unreadX}`, 1 % (Math.max(1, turnC))]]);
      let activitye = 8622073 >= shareH.size;
      do {
          let dplusf = true;
          let referrerH = String.fromCharCode(108,95,55,51,95,104,108,105,110,101,0);
          let nativem = String.fromCharCode(115,95,56,53,95,100,105,115,112,108,97,121,0);
          let emptyI = String.fromCharCode(98,95,49,57,95,116,119,111,115,116,97,103,101,0);
          let stationsc: Map<any, any> = new Map([[String.fromCharCode(116,111,109,105,99,95,117,95,57,57,0),String.fromCharCode(116,111,112,115,95,112,95,49,54,0)], [String.fromCharCode(121,95,49,48,48,95,115,118,97,114,105,110,116,0),String.fromCharCode(114,95,54,51,95,121,100,97,121,0)]]);
         shareH.set(nativem, 3);
         dplusf = !dplusf;
         referrerH = `${((dplusf ? 1 : 4) ^ referrerH.length)}`;
         nativem = `${referrerH.length % (Math.max(2, 6))}`;
         emptyI += `${emptyI.length * 1}`;
         stationsc.set(`${dplusf}`, 1 * emptyI.length);
         if (activitye) {
            break;
         }
      } while (activitye && ((4 << (Math.min(4, Math.abs(shareH.size)))) <= 4));
      bridgeH = `${(parseInt(`${privacyJ}`) & (thumbnail_ ? 2 : 5))}`;
   for (let y = 0; y < 1; y++) {
      agreementC = `${hongkongf.length}`;
   }
   if (4 < bridgeH.length && 4 < membera.length) {
       let incidentY = String.fromCharCode(111,95,54,56,95,111,112,101,110,101,100,0);
      let downloadedy = 8393672 <= incidentY.length;
      do {
         incidentY = `${incidentY.length / (Math.max(incidentY.length, 3))}`;
         if (downloadedy) {
            break;
         }
      } while (downloadedy && (incidentY.length >= 4 && 4 >= incidentY.length));
      let windU = incidentY == String.fromCharCode(57,120,107,97,110,115,0);
      do {
         incidentY += `${(incidentY == String.fromCharCode(70,0) ? incidentY.length : incidentY.length)}`;
         if (windU) {
            break;
         }
      } while ((incidentY.endsWith(incidentY)) && windU);
      if (4 >= incidentY.length) {
          let type_qV = 0;
          let header2 = String.fromCharCode(122,95,53,56,95,112,114,111,98,101,0);
          let pathj = String.fromCharCode(112,105,120,101,108,102,108,111,97,116,0);
          let zoomx: Map<any, any> = new Map([[String.fromCharCode(119,95,54,50,95,114,101,108,97,116,105,118,101,108,121,0),440], [String.fromCharCode(112,97,103,101,115,101,101,107,0),200]]);
         incidentY += `${2 << (Math.min(2, incidentY.length))}`;
         type_qV |= zoomx.size ^ 3;
         header2 += `${type_qV - 1}`;
         pathj = `${type_qV % (Math.max(2, 5))}`;
         zoomx = new Map([[`${zoomx.size}`, type_qV ^ 2]]);
      }
      bridgeH += `${(String.fromCharCode(121,0) == bridgeH ? bridgeH.length : parseInt(`${privacyJ}`))}`;
   }
   let commentv = String.fromCharCode(119,102,97,117,95,122,108,114,95,0) == bridgeH;
   do {
      bridgeH = `${2 * parseInt(`${privacyJ}`)}`;
      if (commentv) {
         break;
      }
   } while ((!agreementC.includes(bridgeH)) && commentv);
   while (1.3 == (privacyJ / 2.2)) {
      bridgeH += `${((homej ? 3 : 5) / (Math.max(2, 1)))}`;
      break;
   }
      inactiveS -= parseFloat(`${2}`);
       let other0 = 4;
       let delegate_hm9 = true;
         delegate_hm9 = other0 >= 60 && !delegate_hm9;
      while ((1 << (Math.min(1, Math.abs(other0)))) < 2 || delegate_hm9) {
         other0 *= 3;
         break;
      }
          let activity1 = 5;
          let dropdownO = String.fromCharCode(114,97,110,100,111,109,105,122,101,95,115,95,57,53,0);
          let membershipo = false;
         delegate_hm9 = !delegate_hm9;
         activity1 *= ((membershipo ? 3 : 3) | activity1);
         dropdownO += `${dropdownO.length % 2}`;
      let borderlessx = other0 >= 6817655;
      do {
          let mbbidF = String.fromCharCode(98,97,114,114,101,116,116,95,100,95,57,55,0);
         other0 += (mbbidF == String.fromCharCode(111,0) ? (delegate_hm9 ? 2 : 1) : mbbidF.length);
         if (borderlessx) {
            break;
         }
      } while ((4 == other0) && borderlessx);
          let recommendation1 = String.fromCharCode(100,95,56,57,95,117,110,101,109,98,101,100,0);
          let sportsn = String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,101,95,49,56,0);
          let applicationS = false;
         delegate_hm9 = !delegate_hm9;
         recommendation1 += `${(String.fromCharCode(86,0) == sportsn ? sportsn.length : (applicationS ? 3 : 1))}`;
         applicationS = sportsn == String.fromCharCode(90,0);
          let ping1: Map<any, any> = new Map([[String.fromCharCode(108,95,52,95,98,111,114,100,101,114,101,100,0),423], [String.fromCharCode(100,95,50,52,95,117,110,112,105,110,110,101,100,0),201]]);
          let darkt: Array<any> = [622, 818];
         other0 >>= Math.min(Math.abs(((delegate_hm9 ? 1 : 3) - 2)), 2);
         ping1 = new Map([[`${ping1.size}`, ping1.size]]);
         darkt = [3 * darkt.length];
      agreementC = `${bridgeH.length}`;
      membera += `${long_2V.length}`;
   if (3.22 == (parseFloat(`${mbbannerN}`) * inactiveS) || 3.22 == (inactiveS * parseFloat(`${mbbannerN}`))) {
       let overb = String.fromCharCode(109,97,116,114,111,115,107,97,95,118,95,53,57,0);
       let kuaishouD = String.fromCharCode(97,109,112,108,105,102,121,0);
      if (overb.endsWith(`${kuaishouD.length}`)) {
          let changeH = true;
          let themem = String.fromCharCode(99,95,57,48,95,114,101,97,115,109,0);
          let dycreatorU: Array<any> = [957, 206];
          let ewarded3 = String.fromCharCode(112,108,97,110,101,100,95,49,95,50,53,0);
         overb = `${overb.length}`;
         changeH = !changeH;
         themem += `${ewarded3.length + 2}`;
         dycreatorU = [themem.length];
         ewarded3 = `${ewarded3.length & 3}`;
      }
       let forwardv = 0.0;
      inactiveS -= parseFloat(`${parseInt(`${privacyJ}`)}`);
   }
   let foregroundG = 6967213 <= long_2V.length;
   do {
       let material_ = 1.0;
       let frame_eH = 3;
      while ((1.12 - material_) > 4.40) {
         material_ /= Math.max(parseInt(`${material_}`) / (Math.max(5, frame_eH)), 1);
         break;
      }
       let icon4 = 4.0;
         material_ -= frame_eH + parseInt(`${icon4}`);
         frame_eH &= 3 + parseInt(`${material_}`);
          let descP = String.fromCharCode(108,111,119,99,111,109,112,0);
          let fill0 = String.fromCharCode(114,101,109,111,118,105,110,103,0);
         material_ -= 1 | parseInt(`${material_}`);
         descP += `${descP.length}`;
         fill0 = `${1 & fill0.length}`;
      for (let c = 0; c < 2; c++) {
         icon4 += parseFloat(`${parseInt(`${material_}`)}`);
      }
      long_2V += `${frame_eH + long_2V.length}`;
      if (foregroundG) {
         break;
      }
   } while ((agreementC != long_2V) && foregroundG);
       let googleL: Map<any, any> = new Map([[String.fromCharCode(99,111,109,101,95,53,95,53,53,0),86], [String.fromCharCode(114,103,98,114,103,98,95,115,95,52,52,0),572], [String.fromCharCode(99,97,108,108,105,115,116,111,95,103,95,55,50,0),660]]);
       let catagoryl = true;
      let animationJ = catagoryl ? !catagoryl : catagoryl;
      do {
         catagoryl = !catagoryl;
         if (animationJ) {
            break;
         }
      } while ((1 == (1 >> (Math.min(4, Math.abs(googleL.size))))) && animationJ);
      while (1 < (2 << (Math.min(5, Math.abs(googleL.size))))) {
         googleL = new Map([[`${googleL.size}`, 3 >> (Math.min(5, Math.abs(googleL.size)))]]);
         break;
      }
      for (let e = 0; e < 3; e++) {
         catagoryl = googleL.size <= 63 && catagoryl;
      }
         catagoryl = googleL.size == 52;
         googleL = new Map([[`${googleL.size}`, googleL.size / 2]]);
      if ((2 - googleL.size) > 3 && !catagoryl) {
         catagoryl = !catagoryl;
      }
      entryy = bridgeH.endsWith(`${catagoryl}`);
   let actionsA = 5237388 >= filledK.length;
   do {
      filledK += `${((homej ? 3 : 2))}`;
      if (actionsA) {
         break;
      }
   } while (actionsA && (membera == String.fromCharCode(85,0)));
   for (let r = 0; r < 2; r++) {
       let traminio = 5.0;
       let reminder4: Map<any, any> = new Map([[String.fromCharCode(101,115,116,105,109,97,116,101,115,95,121,95,56,53,0),false ], [String.fromCharCode(115,107,101,119,95,52,95,52,57,0),true ]]);
       let saveH = 5;
       let tailQ: Array<any> = [355, 125, 319];
      for (let r = 0; r < 2; r++) {
          let catagoryr = String.fromCharCode(110,115,116,97,110,116,95,112,95,51,49,0);
          let editd = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,99,95,52,50,0);
          let chinaJ = String.fromCharCode(115,101,114,105,97,108,110,111,95,115,95,53,0);
          let expiredP = 2;
         saveH %= Math.max(catagoryr.length, 1);
         catagoryr += `${chinaJ.length << (Math.min(3, editd.length))}`;
         editd += `${expiredP - editd.length}`;
         chinaJ = `${expiredP}`;
      }
          let kuaishout: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,98,97,99,107,95,98,95,50,48,0),true ], [String.fromCharCode(100,95,52,48,95,115,107,105,112,112,97,98,108,101,0),true ], [String.fromCharCode(109,105,100,116,111,110,101,115,95,120,95,55,53,0),true ]]);
          let catagory0 = false;
          let injury6: Map<any, any> = new Map([[String.fromCharCode(107,95,51,57,95,101,110,116,105,116,105,101,115,0),String.fromCharCode(113,105,97,110,0)], [String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,120,95,49,56,0),String.fromCharCode(99,95,49,49,95,109,112,108,97,110,101,0)], [String.fromCharCode(102,105,100,99,116,0),String.fromCharCode(100,101,97,99,116,105,118,97,116,101,95,54,95,54,57,0)]]);
         tailQ = [2];
         kuaishout.set(`${injury6.size}`, 2);
         catagory0 = injury6.size >= 95 && 95 >= kuaishout.size;
          let foregroundo = String.fromCharCode(105,115,115,101,116,117,103,105,100,95,112,95,52,57,0);
          let expiredz = String.fromCharCode(117,95,49,48,48,95,115,105,103,105,110,116,0);
         tailQ.push(parseInt(`${traminio}`) % (Math.max(expiredz.length, 9)));
         foregroundo = `${foregroundo.length}`;
         expiredz = `${foregroundo.length}`;
      if ((3 >> (Math.min(4, Math.abs(reminder4.size)))) >= 2 || 2 >= (3 >> (Math.min(1, tailQ.length)))) {
         reminder4.set(`${saveH}`, tailQ.length);
      }
      while (1.87 < (3.98 / (Math.max(9, traminio))) || 3.35 < (traminio / 3.98)) {
         traminio -= 3 + parseInt(`${traminio}`);
         break;
      }
      if (reminder4.size <= 2) {
         reminder4.set(`${traminio}`, reminder4.size);
      }
         reminder4.set(`${saveH}`, 3);
         reminder4 = new Map([[`${reminder4.size}`, reminder4.size >> (Math.min(tailQ.length, 3))]]);
      long_2V = `${2 | hongkongf.length}`;
   }
      detailsO = `${(String.fromCharCode(69,0) == long_2V ? greyy.size : long_2V.length)}`;
      homej = bridgeH.length <= 93;
   if (!homej) {
      homej = (teamM * parseFloat(`${bridgeH.length}`)) > 19.70;
   }
      homej = long_2V.length < parseInt(`${privacyJ}`);
   let lessX = String.fromCharCode(108,53,110,51,109,0) == long_2V;
   do {
      long_2V = `${parseInt(`${inactiveS}`) ^ 2}`;
      if (lessX) {
         break;
      }
   } while ((long_2V.length > 5 || entryy) && lessX);
      long_2V = `${parseInt(`${inactiveS}`) << (Math.min(Math.abs(greyy.size), 2))}`;
       let tramini7 = String.fromCharCode(115,107,97,100,95,55,95,54,53,0);
         tramini7 = "2";
         tramini7 = `${tramini7.length & 1}`;
      let stepA = tramini7 == String.fromCharCode(95,51,101,117,107,105,107,107,50,0);
      do {
          let catalogN = String.fromCharCode(99,95,54,51,95,116,114,97,105,116,0);
          let launcherp = String.fromCharCode(112,97,103,105,110,103,95,49,95,57,51,0);
          let shrinkJ = 4;
         tramini7 = `${tramini7.length / (Math.max(3, 3))}`;
         catalogN += `${launcherp.length / (Math.max(3, 5))}`;
         launcherp += `${(catalogN == String.fromCharCode(81,0) ? catalogN.length : launcherp.length)}`;
         shrinkJ |= catalogN.length % 3;
         if (stepA) {
            break;
         }
      } while (stepA && (tramini7 != String.fromCharCode(83,0)));
      detailsO += `${hongkongf.length >> (Math.min(5, Math.abs(mbbannerN)))}`;
   let c_managerS = privacyJ <= 7167682.0;
   do {
      privacyJ -= 3 ^ agreementC.length;
      if (c_managerS) {
         break;
      }
   } while (c_managerS && (agreementC.length < 4));
       let modalb: Array<any> = [663, 103];
          let currentP: Map<any, any> = new Map([[String.fromCharCode(112,117,98,105,99,95,115,95,53,54,0),641], [String.fromCharCode(102,95,57,56,95,115,101,108,101,99,116,0),902]]);
          let commentC = String.fromCharCode(99,121,99,108,101,115,95,55,95,57,55,0);
         modalb = [3 * modalb.length];
         currentP.set(commentC, (String.fromCharCode(86,0) == commentC ? commentC.length : currentP.size));
         modalb.push(modalb.length);
      while (modalb.includes(modalb.length)) {
         modalb.push(modalb.length);
         break;
      }
      entryy = filledK.length > 95;
   for (let h = 0; h < 1; h++) {
       let searchm: Map<any, any> = new Map([[String.fromCharCode(116,114,101,102,95,113,95,51,49,0),865], [String.fromCharCode(115,117,112,101,114,110,111,100,101,115,0),905]]);
       let sentryi = 2.0;
       let clubr = 3.0;
      for (let n = 0; n < 2; n++) {
         searchm.set(`${clubr}`, 3);
      }
         sentryi *= parseFloat(`${parseInt(`${sentryi}`) + searchm.size}`);
          let unreadXJ = false;
          let containern = false;
         sentryi += parseFloat(`${2}`);
         unreadXJ = !containern && !containern;
         sentryi += parseFloat(`${2}`);
         searchm.set(`${clubr}`, 3);
      if (sentryi <= clubr) {
         clubr *= parseFloat(`${1 + searchm.size}`);
      }
         searchm = new Map([[`${sentryi}`, parseInt(`${clubr}`)]]);
         clubr /= Math.max(parseFloat(`${parseInt(`${clubr}`) << (Math.min(4, Math.abs(1)))}`), 3);
      if (1.51 >= (clubr - 1)) {
         sentryi -= parseFloat(`${parseInt(`${sentryi}`) % 1}`);
      }
      bridgeH += `${(bridgeH == String.fromCharCode(98,0) ? greyy.size : bridgeH.length)}`;
   }
      filledK = `${detailsO.length ^ 1}`;
   if (1 < (parseInt(`${privacyJ}`) / (Math.max(bridgeH.length, 9))) && (parseInt(`${privacyJ}`) / (Math.max(bridgeH.length, 3))) < 1) {
       let headerY = 3.0;
       let textf: Array<any> = [561, 956];
         textf = [textf.length];
         textf.push(textf.length);
      for (let q = 0; q < 3; q++) {
         headerY -= parseInt(`${headerY}`) % (Math.max(textf.length, 9));
      }
         textf.push(textf.length + 3);
       let small3 = true;
      if (!textf.includes(headerY)) {
          let editt = 0;
         headerY += parseInt(`${headerY}`);
         editt -= editt >> (Math.min(5, Math.abs(editt)));
      }
      bridgeH = `${3 * filledK.length}`;
   }
      greyy = new Map([[`${privacyJ}`, parseInt(`${privacyJ}`)]]);
   let overlayG = filledK == String.fromCharCode(103,56,53,115,54,50,102,0);
   do {
      filledK += "1";
      if (overlayG) {
         break;
      }
   } while (overlayG && (bridgeH.endsWith(filledK)));
       let window_ew: Map<any, any> = new Map([[String.fromCharCode(107,95,56,50,95,114,101,115,116,114,105,99,116,101,100,0),String.fromCharCode(120,95,52,95,114,101,115,101,116,0)], [String.fromCharCode(102,105,108,108,112,95,104,95,53,57,0),String.fromCharCode(118,95,57,56,95,103,111,98,98,108,101,0)]]);
      for (let l = 0; l < 1; l++) {
         window_ew.set(`${window_ew.size}`, window_ew.size % (Math.max(window_ew.size, 2)));
      }
         window_ew = new Map([[`${window_ew.size}`, window_ew.size]]);
         window_ew = new Map([[`${window_ew.size}`, window_ew.size % (Math.max(3, 1))]]);
      privacyJ /= Math.max(hongkongf.length, 3);
   if ((filledK.length - greyy.size) < 1 || 5 < (greyy.size - 1)) {
      greyy = new Map([[bridgeH, ((entryy ? 4 : 4) & bridgeH.length)]]);
   }
   for (let e = 0; e < 2; e++) {
      long_2V += `${(agreementC.length * (homej ? 2 : 2))}`;
   }
},
}: ttSmall) {
  const navigator = useNavigation();
  const hideVipPrompt = useCallback(async () => {
       let scoreE = String.fromCharCode(101,99,117,114,115,105,118,101,95,97,95,54,55,0);
    let constantsM = 3.0;
    let stringsw = 3.0;
    let sinap = 3.0;
    let regengv = 2.0;
    let skipw: Array<any> = [407, 293, 224];
    let configU = String.fromCharCode(104,111,114,105,103,95,49,95,55,50,0);
    let gpaym = String.fromCharCode(115,97,118,101,112,111,105,110,116,95,108,95,56,50,0);
    let pageN = String.fromCharCode(112,95,57,55,95,99,108,97,109,112,0);
    let yingf: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,100,99,95,118,95,55,49,0),false ], [String.fromCharCode(98,95,56,50,95,114,101,109,111,118,97,98,108,101,0),false ]]);
    let frame_of = String.fromCharCode(116,104,114,101,115,95,110,95,55,51,0);
    let forwardQ = 1.0;
   if (3 > frame_of.length || 3 > configU.length) {
      frame_of = `${parseInt(`${stringsw}`)}`;
   }
   while (configU.length == parseInt(`${regengv}`)) {
      configU = `${configU.length - skipw.length}`;
      break;
   }
   if (3 <= (gpaym.length - 2)) {
      regengv += parseFloat(`${skipw.length ^ 3}`);
   }
      pageN = `${3 & yingf.size}`;
      gpaym += `${2 / (Math.max(4, parseInt(`${stringsw}`)))}`;
   if (3 <= (pageN.length - 3) || 3 <= (parseInt(`${stringsw}`) / (Math.max(pageN.length, 8)))) {
      pageN = `${configU.length << (Math.min(Math.abs(2), 5))}`;
   }
      skipw.push(2);
      skipw.push(1);
      yingf = new Map([[configU, 3 + gpaym.length]]);
      sinap /= Math.max(parseFloat(`${1}`), 4);
      skipw = [yingf.size - pageN.length];
   for (let h = 0; h < 3; h++) {
      stringsw *= parseFloat(`${yingf.size / 1}`);
   }
       let referrery = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,0);
       let sortk = String.fromCharCode(114,101,98,117,105,108,100,95,48,95,57,54,0);
       let event6 = 4;
      if (3 >= (2 * sortk.length) || 2 >= (event6 * sortk.length)) {
         event6 -= sortk.length;
      }
      if (sortk != referrery) {
          let singaporex: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,95,53,95,54,57,0),String.fromCharCode(103,95,52,54,95,115,99,111,112,101,0)], [String.fromCharCode(105,102,110,115,95,114,95,57,48,0),String.fromCharCode(118,111,105,99,101,95,51,95,56,49,0)]]);
          let popupK: Array<any> = [String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,106,95,49,49,0), String.fromCharCode(115,95,50,49,95,115,97,109,112,108,101,102,109,116,0), String.fromCharCode(109,95,51,50,95,105,110,99,114,101,109,101,110,116,0)];
          let playO = 2;
          let blacklistQ = 4.0;
          let progressC = String.fromCharCode(109,111,109,101,110,116,115,95,57,95,57,56,0);
         referrery += `${(String.fromCharCode(90,0) == progressC ? parseInt(`${blacklistQ}`) : progressC.length)}`;
         singaporex = new Map([[`${popupK.length}`, popupK.length]]);
         playO += playO;
         blacklistQ /= Math.max(1, singaporex.size | 2);
      }
         sortk += `${sortk.length}`;
      while ((1 + referrery.length) < 4 && (event6 + 1) < 1) {
         event6 &= event6;
         break;
      }
          let animationb = String.fromCharCode(122,95,53,54,95,115,105,109,112,108,105,102,121,0);
         sortk = `${(sortk == String.fromCharCode(53,0) ? event6 : sortk.length)}`;
         animationb = `${animationb.length}`;
          let configureL = String.fromCharCode(120,95,56,50,95,114,101,112,108,105,99,97,116,101,100,0);
          let submitA = true;
          let statsf = String.fromCharCode(110,95,53,52,95,100,105,109,109,101,100,0);
         sortk = `${((submitA ? 2 : 1))}`;
         configureL += `${statsf.length}`;
         submitA = configureL == statsf;
         sortk += `${referrery.length >> (Math.min(Math.abs(3), 1))}`;
         sortk = `${event6 * referrery.length}`;
          let countdowns = String.fromCharCode(112,97,110,100,105,110,103,0);
         event6 %= Math.max((String.fromCharCode(53,0) == referrery ? referrery.length : sortk.length), 2);
         countdowns += `${countdowns.length}`;
      sinap += parseFloat(`${parseInt(`${stringsw}`)}`);
   let carousel7 = configU.length <= 6317334;
   do {
       let renew3 = false;
       let sideR = 5;
          let y_countQ = String.fromCharCode(117,110,114,105,115,101,95,54,95,57,54,0);
          let privacy1 = String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,113,95,55,53,0);
         renew3 = !renew3;
         y_countQ = "2";
         privacy1 += `${3 * privacy1.length}`;
      while ((sideR / 3) == 4) {
          let sharer = 3;
          let successR: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,105,110,101,95,102,95,51,55,0),659], [String.fromCharCode(102,95,54,52,95,112,111,114,116,115,0),140]]);
          let result1 = 5;
         renew3 = 30 > sharer;
         sharer += successR.size;
         successR.set(`${result1}`, 1 & result1);
         break;
      }
       let mappingp = String.fromCharCode(117,95,57,52,95,115,109,112,116,101,104,100,98,97,114,115,0);
       let colorsY = String.fromCharCode(106,95,56,52,95,99,111,110,118,101,114,116,111,114,0);
      while (colorsY.length == mappingp.length) {
         mappingp += `${sideR}`;
         break;
      }
      while (!renew3 && (sideR ^ 1) <= 1) {
          let minivodI = 5;
         sideR <<= Math.min(1, Math.abs(colorsY.length & 1));
         minivodI %= Math.max(minivodI / 1, 5);
         break;
      }
      for (let w = 0; w < 1; w++) {
         sideR <<= Math.min(1, Math.abs(sideR));
      }
      configU = `${scoreE.length}`;
      if (carousel7) {
         break;
      }
   } while ((yingf.size == configU.length) && carousel7);
      regengv -= parseFloat(`${yingf.size}`);
   for (let d = 0; d < 3; d++) {
      forwardQ -= parseInt(`${sinap}`);
   }
   let crossj = skipw.length <= 9363265;
   do {
      skipw = [parseInt(`${constantsM}`)];
      if (crossj) {
         break;
      }
   } while (crossj && ((skipw.length | 1) == 2 || (1 | pageN.length) == 2));
   let w_positionf = String.fromCharCode(103,115,105,106,116,52,95,0) == pageN;
   do {
      pageN = `${parseInt(`${stringsw}`)}`;
      if (w_positionf) {
         break;
      }
   } while ((configU != String.fromCharCode(83,0)) && w_positionf);
   let updatesh = sinap <= 6833400.0;
   do {
      sinap -= parseFloat(`${yingf.size % (Math.max(2, 7))}`);
      if (updatesh) {
         break;
      }
   } while ((stringsw > 5.39) && updatesh);
   if ((yingf.size + parseInt(`${forwardQ}`)) == 1 || (1 >> (Math.min(4, Math.abs(yingf.size)))) == 5) {
       let commono: Map<any, any> = new Map([[String.fromCharCode(114,101,111,112,101,110,0),189], [String.fromCharCode(112,97,114,97,109,101,116,101,114,115,0),793]]);
       let philippinesx = 5.0;
       let flippere = 2.0;
       let modet: Map<any, any> = new Map([[String.fromCharCode(117,110,99,104,97,110,103,101,100,0),877], [String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,111,95,54,57,0),759], [String.fromCharCode(105,95,51,50,95,102,105,108,116,101,114,0),481]]);
       let macau5 = true;
          let yellowm = false;
         macau5 = 16.69 < philippinesx;
         yellowm = (!yellowm ? yellowm : yellowm);
         philippinesx *= ((macau5 ? 2 : 1) - parseInt(`${flippere}`));
      if ((philippinesx / (Math.max(flippere, 9))) > 4.33 || 5.49 > (flippere / (Math.max(4.33, 3)))) {
          let adultp = String.fromCharCode(120,95,52,51,95,102,111,117,114,116,104,0);
          let logoutM = String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,121,95,53,57,0);
          let rulesL = 1.0;
          let dialogt = 2.0;
          let becomed = 2.0;
         flippere -= parseInt(`${philippinesx}`) + parseInt(`${rulesL}`);
         adultp = `${adultp.length % 2}`;
         logoutM += `${3 / (Math.max(6, parseInt(`${dialogt}`)))}`;
         rulesL *= parseInt(`${dialogt}`);
         becomed /= Math.max(1, 1);
      }
       let appsA = String.fromCharCode(113,95,55,53,95,97,101,115,110,105,0);
          let iconk = true;
          let score2 = false;
          let umengR = 5.0;
         flippere -= 3 | parseInt(`${philippinesx}`);
         iconk = score2 && 22.24 < umengR;
         score2 = !score2 && umengR > 65.81;
      let linkW = 8657986.0 >= philippinesx;
      do {
         philippinesx -= parseInt(`${flippere}`) - 2;
         if (linkW) {
            break;
         }
      } while (((4.16 * flippere) > 5.92 || 3.45 > (philippinesx + 4.16)) && linkW);
         appsA = `${((macau5 ? 1 : 3) % (Math.max(3, parseInt(`${philippinesx}`))))}`;
      if (4 < (1 & appsA.length) && 2 < (commono.size & 1)) {
         appsA += `${appsA.length >> (Math.min(Math.abs(1), 3))}`;
      }
         macau5 = !macau5;
      while (appsA.startsWith(`${modet.size}`)) {
         modet = new Map([[`${modet.size}`, appsA.length]]);
         break;
      }
      if (5 == (appsA.length ^ 5)) {
          let sell8 = 0;
          let materialb = 1;
         modet = new Map([[`${modet.size}`, materialb << (Math.min(Math.abs(modet.size), 2))]]);
         sell8 %= Math.max(sell8, 5);
         materialb += 3 << (Math.min(2, Math.abs(sell8)));
      }
       let service5 = 3;
       let completez = 3;
          let applew: Array<any> = [435, 895, 138];
         flippere *= service5;
         applew = [applew.length ^ 3];
         flippere *= parseInt(`${flippere}`);
         macau5 = appsA.includes(`${completez}`);
      forwardQ -= commono.size;
   }
   for (let a = 0; a < 2; a++) {
      regengv /= Math.max(1, parseFloat(`${frame_of.length * parseInt(`${stringsw}`)}`));
   }
   let package_kl2 = skipw.length >= 4929544;
   do {
      skipw.push(2);
      if (package_kl2) {
         break;
      }
   } while (package_kl2 && (3 <= (4 % (Math.max(8, skipw.length)))));
   while (1 == configU.length) {
      configU += `${(configU == String.fromCharCode(69,0) ? configU.length : parseInt(`${regengv}`))}`;
      break;
   }
   while (configU.length >= 3 && 3 >= gpaym.length) {
       let largea = 5;
       let statistics7 = false;
       let bottomI = 0.0;
       let traminio: Array<any> = [869, 64, 275];
       let material8 = String.fromCharCode(109,95,50,52,95,112,99,109,98,0);
      while (2 <= (largea % (Math.max(3, 3))) && largea <= 3) {
         largea >>= Math.min(4, Math.abs(traminio.length ^ largea));
         break;
      }
      let expired_ = statistics7 ? !statistics7 : statistics7;
      do {
         statistics7 = material8.length > bottomI;
         if (expired_) {
            break;
         }
      } while ((!statistics7 && (bottomI - 5.56) == 4.41) && expired_);
       let readP = String.fromCharCode(101,118,114,99,95,117,95,55,49,0);
      if (4 >= (traminio.length * material8.length) && (material8.length * 4) >= 5) {
         material8 = `${1 & largea}`;
      }
      for (let a = 0; a < 2; a++) {
         bottomI /= Math.max(3, ((statistics7 ? 1 : 3) << (Math.min(Math.abs(3), 3))));
      }
      let foregroundZ = statistics7 ? !statistics7 : statistics7;
      do {
         statistics7 = (12 <= ((statistics7 ? 12 : readP.length) / (Math.max(readP.length, 10))));
         if (foregroundZ) {
            break;
         }
      } while ((statistics7) && foregroundZ);
      while (1 < (2 | material8.length)) {
         largea &= ((statistics7 ? 3 : 4) - parseInt(`${bottomI}`));
         break;
      }
      for (let d = 0; d < 1; d++) {
         readP += `${readP.length}`;
      }
      let analyticsp = 6428362 >= traminio.length;
      do {
         traminio = [3];
         if (analyticsp) {
            break;
         }
      } while (analyticsp && ((traminio.length / (Math.max(9, parseInt(`${bottomI}`)))) > 4));
          let mbnativeu = false;
         readP = `${(readP.length << (Math.min(3, Math.abs((mbnativeu ? 2 : 1)))))}`;
      while ((bottomI + material8.length) <= 5.28) {
          let hoverF = String.fromCharCode(122,95,57,56,95,119,112,116,104,114,101,97,100,115,0);
         material8 = "3";
         hoverF += `${hoverF.length}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
         readP += `${3 ^ traminio.length}`;
      }
      if (!statistics7) {
         traminio = [2 << (Math.min(2, traminio.length))];
      }
      for (let i = 0; i < 2; i++) {
          let shoot6 = 1.0;
          let modaly = 0.0;
          let leftI = true;
          let forwardr = 4;
         bottomI -= largea;
         shoot6 += parseFloat(`${parseInt(`${modaly}`) << (Math.min(3, Math.abs(2)))}`);
         modaly += forwardr;
         leftI = shoot6 <= 94.9;
         forwardr /= Math.max(3, 3 * parseInt(`${modaly}`));
      }
         traminio.push(((statistics7 ? 1 : 2) >> (Math.min(Math.abs(2), 3))));
      configU += "1";
      break;
   }
   if (stringsw <= 3.38) {
       let router4 = false;
      while (!router4 || !router4) {
          let nativeext = true;
          let descD = 3.0;
          let detailW = String.fromCharCode(106,95,55,95,99,97,116,99,104,0);
         router4 = !nativeext;
         descD -= 3 ^ parseInt(`${descD}`);
         detailW = `${parseInt(`${descD}`)}`;
         break;
      }
      while (router4) {
          let manifestK = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,95,115,95,49,56,0);
          let stringst: Map<any, any> = new Map([[String.fromCharCode(117,95,53,56,95,117,110,98,111,120,101,100,0),String.fromCharCode(100,101,99,108,97,114,101,100,95,110,95,53,49,0)], [String.fromCharCode(111,99,107,105,110,103,95,97,95,54,54,0),String.fromCharCode(101,110,99,111,100,101,115,0)]]);
          let over_ = 0.0;
          let readD = 2.0;
          let singleM = 3;
         router4 = 55 >= (singleM + readD);
         manifestK += `${manifestK.length >> (Math.min(Math.abs(1), 2))}`;
         stringst.set(`${over_}`, 2);
         over_ += parseFloat(`${parseInt(`${over_}`)}`);
         readD /= Math.max(3, stringst.size);
         singleM -= stringst.size - 1;
         break;
      }
          let small8 = String.fromCharCode(105,115,105,0);
          let membership1 = 2.0;
         router4 = 47 == small8.length;
         small8 += `${parseInt(`${membership1}`) / 1}`;
         membership1 -= parseFloat(`${parseInt(`${membership1}`) & 2}`);
      scoreE += `${scoreE.length}`;
   }
   if (5 == (skipw.length << (Math.min(Math.abs(2), 5))) && 3 == (skipw.length << (Math.min(Math.abs(2), 4)))) {
      skipw = [pageN.length];
   }

    setShowVIPOverlay(false);
  }, []);

  const dispatch = useAppDispatch();

  
  
  

  const {colors, textVariants, spacing, icons} = useTheme();

  return (
    <>
      {showVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
            zIndex: 1000,
          }}>
          <VipModal>
            <View
              style={{
                backgroundColor: 'rgba(34, 34, 34, 0.9)',
                marginTop: 40,
                borderRadius: 12,
                paddingTop: 36,
                paddingBottom: 26,
                paddingHorizontal: 28,
              }}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: '#E2820E',
                    paddingTop: 20,
                    paddingVertical: 12,
                  }}>
                  VIP还剩{remainingDay}天
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  只需邀请更多好友
                </Text>
                <Text
                  style={{
                    color: 'white',
                    padding: 2,
                    fontSize: 16,
                    fontWeight: '300',
                  }}>
                  即可获得额外天数的VIP服务时长
                </Text>
                <View style={{paddingTop: 22, alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      hideVipPrompt();
                      navigator.navigate('邀请');
                    }}
                    style={{
                      backgroundColor: '#FAC33D',
                      paddingVertical: 12,
                      paddingHorizontal: 38,
                      borderRadius: 8,
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      立即邀请
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => hideVipPrompt()}
                    style={{paddingTop: 16}}>
                    <Text style={{color: '#9C9C9C', fontSize: 16}}>取消</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </VipModal>
        </View>
      )}
    </>
  );
}
