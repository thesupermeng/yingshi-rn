import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ttWeibo, ttWhistle } from '@type/tt_line_borderless';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/bootTemperatureRoboto.svg';
import SortDescIcon from '@static/images/countryChatSpinner.svg';
interface ttSmall {
    onConfirm: any,
    onCancel: any,
    episodes?: ttWeibo
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: ttSmall) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = rangeSize;
    const [sortBy, setSortBy] = useState('asc');
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const displayEpisodes = useMemo(() => {
       let chinasameT: Array<any> = [453, 132];
    let weibon: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,115,95,99,95,50,57,0),354], [String.fromCharCode(104,97,100,97,109,97,114,100,120,95,115,95,53,52,0),472]]);
    let clockn = 1.0;
    let buttonD = 3.0;
    let popupW = String.fromCharCode(116,111,110,101,109,97,112,95,52,95,50,55,0);
    let gesture9 = 0.0;
    let dialogS: Map<any, any> = new Map([[String.fromCharCode(112,95,52,48,95,97,117,116,111,114,101,102,114,101,115,104,0),false ], [String.fromCharCode(99,114,111,115,115,98,97,114,95,49,95,51,0),false ]]);
    let navigationx = 3.0;
    let spinner5 = false;
    let loadingh = 0.0;
    let combineA = String.fromCharCode(106,95,55,57,95,104,97,110,100,108,105,110,103,0);
    let video6 = 1;
   while ((3.64 - gesture9) == 4.85 || (dialogS.size ^ 2) == 3) {
       let dropdownX: Array<any> = [String.fromCharCode(108,95,54,57,95,100,101,114,105,118,97,116,105,118,101,0), String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,57,95,50,56,0)];
       let model8 = false;
       let sortw = 5;
       let injuryA = String.fromCharCode(111,95,52,52,95,112,101,114,99,101,110,116,97,103,101,0);
      if ((injuryA.length ^ dropdownX.length) >= 2 && 5 >= (2 ^ injuryA.length)) {
         injuryA += "3";
      }
       let transferl: Array<any> = [573, 526, 604];
       let mimo4 = String.fromCharCode(118,95,50,55,95,104,111,108,100,101,114,0);
       let customF = String.fromCharCode(113,117,97,100,115,95,52,95,53,51,0);
      for (let b = 0; b < 1; b++) {
         mimo4 = `${3 % (Math.max(6, customF.length))}`;
      }
         dropdownX = [sortw / 2];
         dropdownX.push(3);
      for (let k = 0; k < 3; k++) {
         injuryA = `${customF.length}`;
      }
         mimo4 = `${(injuryA == String.fromCharCode(122,0) ? customF.length : injuryA.length)}`;
      for (let d = 0; d < 2; d++) {
         mimo4 += `${sortw << (Math.min(4, Math.abs(1)))}`;
      }
          let bodanH = String.fromCharCode(114,95,50,48,95,119,101,105,103,104,116,105,110,103,0);
         mimo4 = `${mimo4.length}`;
         bodanH = `${bodanH.length}`;
      for (let f = 0; f < 1; f++) {
         transferl.push(injuryA.length);
      }
          let feedbackf = true;
         mimo4 = `${customF.length - mimo4.length}`;
         feedbackf = (!feedbackf ? feedbackf : !feedbackf);
      dialogS.set(`${chinasameT.length}`, chinasameT.length | 2);
      break;
   }
      chinasameT.push(dialogS.size & 1);
      chinasameT = [dialogS.size];
   for (let s = 0; s < 2; s++) {
      popupW = `${2 / (Math.max(parseInt(`${gesture9}`), 1))}`;
   }
       let default_ubP = String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,98,95,54,55,0);
       let reducery = 3.0;
      for (let a = 0; a < 1; a++) {
         default_ubP = `${default_ubP.length}`;
      }
      for (let c = 0; c < 2; c++) {
          let mutedk = 5.0;
          let mutedB = 5.0;
         default_ubP = `${2 ^ parseInt(`${mutedB}`)}`;
         mutedk -= parseInt(`${mutedk}`) * 1;
         mutedB *= 3 << (Math.min(Math.abs(parseInt(`${mutedk}`)), 5));
      }
      if ((3 + default_ubP.length) >= 1) {
         default_ubP = `${1 % (Math.max(8, parseInt(`${reducery}`)))}`;
      }
      while (1 >= (1 & default_ubP.length) && 3.90 >= (reducery / 5.99)) {
         default_ubP += `${default_ubP.length >> (Math.min(5, Math.abs(parseInt(`${reducery}`))))}`;
         break;
      }
          let reminderl = 3;
          let downloaded6 = String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,95,54,95,52,54,0);
         default_ubP = `${downloaded6.length * default_ubP.length}`;
         reminderl /= Math.max(3, 1 * reminderl);
         downloaded6 = "1";
      for (let o = 0; o < 2; o++) {
          let long_sJ = String.fromCharCode(108,111,119,101,115,116,95,100,95,55,53,0);
          let progressh = String.fromCharCode(111,109,101,103,97,95,56,95,53,55,0);
         reducery += parseFloat(`${default_ubP.length + parseInt(`${reducery}`)}`);
         long_sJ += `${progressh.length}`;
         progressh += `${progressh.length >> (Math.min(Math.abs(2), 3))}`;
      }
      loadingh /= Math.max(parseFloat(`${parseInt(`${clockn}`) / (Math.max(2, 4))}`), 1);
   if (2.52 == buttonD) {
       let filledT = 2.0;
       let productq = 5;
      if ((productq + filledT) < 3.82) {
         productq <<= Math.min(Math.abs(parseInt(`${filledT}`)), 4);
      }
      while (productq == filledT) {
         productq *= 1;
         break;
      }
         filledT /= Math.max(parseFloat(`${productq & 1}`), 4);
      let profileB = 5955694.0 >= filledT;
      do {
         filledT /= Math.max(5, parseFloat(`${parseInt(`${filledT}`)}`));
         if (profileB) {
            break;
         }
      } while (profileB && ((productq - filledT) >= 3.36));
         productq ^= 3 - parseInt(`${filledT}`);
      while (2.28 > (parseFloat(`${productq}`) * filledT) || (filledT * parseFloat(`${productq}`)) > 2.28) {
         productq *= 2;
         break;
      }
      buttonD -= parseFloat(`${parseInt(`${gesture9}`) << (Math.min(Math.abs(parseInt(`${navigationx}`)), 1))}`);
   }
       let handlerc = false;
       let playercommony = 0;
       let macau9 = 2;
         handlerc = playercommony < 49;
      for (let v = 0; v < 3; v++) {
         playercommony ^= macau9;
      }
      let crowno = handlerc ? !handlerc : handlerc;
      do {
         handlerc = !handlerc;
         if (crowno) {
            break;
         }
      } while ((!handlerc) && crowno);
      let sidez = handlerc ? !handlerc : handlerc;
      do {
          let chatR = String.fromCharCode(119,95,50,95,109,105,110,113,0);
          let basketballl = 3.0;
          let collectionh = String.fromCharCode(97,99,99,114,117,101,95,51,95,51,51,0);
          let loadingd = String.fromCharCode(115,95,50,95,98,111,117,110,100,105,110,103,0);
         handlerc = !handlerc;
         chatR += "2";
         basketballl -= parseFloat(`${collectionh.length % 3}`);
         collectionh = `${collectionh.length << (Math.min(Math.abs(3), 1))}`;
         loadingd += `${collectionh.length}`;
         if (sidez) {
            break;
         }
      } while ((!handlerc) && sidez);
         playercommony /= Math.max(macau9, 4);
      gesture9 -= chinasameT.length | 1;
      weibon.set(`${spinner5}`, (parseInt(`${loadingh}`) % (Math.max(8, (spinner5 ? 1 : 2)))));

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

       let private__Y = String.fromCharCode(119,95,53,49,95,109,101,116,97,115,111,117,110,100,0);
      while (5 <= private__Y.length || private__Y.length <= 5) {
         private__Y = `${private__Y.length}`;
         break;
      }
      while (private__Y.length <= 1) {
          let sheeto = String.fromCharCode(102,95,50,52,95,116,97,99,107,0);
          let eact8 = String.fromCharCode(103,114,97,116,105,99,117,108,101,95,122,95,54,54,0);
          let success9: Array<any> = [359, 395, 127];
         private__Y += `${1 + private__Y.length}`;
         sheeto = `${success9.length << (Math.min(sheeto.length, 3))}`;
         eact8 = "3";
         success9 = [eact8.length];
         break;
      }
      while (private__Y != String.fromCharCode(66,0)) {
         private__Y += `${private__Y.length + private__Y.length}`;
         break;
      }
      loadingh *= parseFloat(`${parseInt(`${gesture9}`)}`);
   if (!Array.from(dialogS.keys()).includes(`${gesture9}`)) {
       let routerH = String.fromCharCode(101,95,55,49,95,118,97,108,117,108,101,0);
       let sentryN = String.fromCharCode(114,116,99,112,95,119,95,57,48,0);
       let targetX = String.fromCharCode(100,95,49,54,95,115,105,103,101,120,112,0);
       let groupd = 0.0;
      let relatedB = groupd >= 9782566.0;
      do {
         groupd += (sentryN == String.fromCharCode(103,0) ? sentryN.length : parseInt(`${groupd}`));
         if (relatedB) {
            break;
         }
      } while ((!targetX.endsWith(`${groupd}`)) && relatedB);
       let sigmobM: Array<any> = [String.fromCharCode(109,95,56,50,95,99,114,101,97,116,101,101,120,0), String.fromCharCode(112,95,56,53,0), String.fromCharCode(118,95,49,51,95,120,100,97,105,0)];
          let forwardP = 2;
          let activeA = String.fromCharCode(105,110,115,101,110,115,105,116,105,118,101,95,97,95,56,50,0);
         groupd /= Math.max((String.fromCharCode(89,0) == sentryN ? sigmobM.length : sentryN.length), 3);
         forwardP += activeA.length % 2;
         activeA += "2";
      while ((1.57 * groupd) >= 1.83 || (parseInt(`${groupd}`) * sigmobM.length) >= 2) {
         sigmobM.push(sigmobM.length << (Math.min(2, Math.abs(parseInt(`${groupd}`)))));
         break;
      }
      dialogS.set(`${buttonD}`, parseInt(`${buttonD}`) % 1);
      routerH += "1";
   }
       let sentryQ = String.fromCharCode(112,97,115,115,101,100,95,51,95,50,54,0);
         sentryQ = `${sentryQ.length * 2}`;
         sentryQ = `${sentryQ.length}`;
         sentryQ += `${sentryQ.length}`;
      weibon.set(`${gesture9}`, weibon.size / 2);
   while (3.33 <= gesture9) {
       let backwardm = String.fromCharCode(97,95,53,95,100,105,118,105,100,101,110,100,0);
       let indexh = String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,95,48,95,54,57,0);
      while (backwardm == indexh) {
         indexh += `${3 | indexh.length}`;
         break;
      }
      if (2 > backwardm.length) {
         backwardm += "2";
      }
         indexh += `${3 + indexh.length}`;
       let canvas8: Array<any> = [494, 386, 22];
      if (3 <= (canvas8.length / 1)) {
          let applicationE = 1.0;
         indexh += `${parseInt(`${applicationE}`)}`;
      }
       let materialT = 3;
      chinasameT = [1 + popupW.length];
      break;
   }
   while (1.23 >= (loadingh / 5.63) || 5 >= (chinasameT.length - 5)) {
      chinasameT.push((parseInt(`${navigationx}`) >> (Math.min(5, Math.abs((spinner5 ? 2 : 3))))));
      break;
   }
   let mbridge4 = spinner5 ? !spinner5 : spinner5;
   do {
      spinner5 = !spinner5;
      if (mbridge4) {
         break;
      }
   } while (mbridge4 && (spinner5));
   while (loadingh > 5.19) {
      spinner5 = parseInt(`${navigationx}`) > chinasameT.length;
      break;
   }
      buttonD /= Math.max(5, parseFloat(`${parseInt(`${loadingh}`) * 3}`));
        if (sortBy === 'desc') {

      spinner5 = dialogS.get(`${buttonD}`) != null;
   let settingy = gesture9 <= 9502208.0;
   do {
       let temperature7: Array<any> = [481, 776, 552];
       let c_centerc = 2.0;
       let shoott = String.fromCharCode(99,95,50,53,95,97,115,99,111,110,102,0);
       let styler = 0;
      while (temperature7.length > parseInt(`${c_centerc}`)) {
         c_centerc += parseFloat(`${styler % (Math.max(shoott.length, 1))}`);
         break;
      }
       let settingsN = String.fromCharCode(99,95,51,48,95,98,108,97,99,107,108,105,115,116,0);
       let filter9 = String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,99,95,55,49,0);
          let popupr = String.fromCharCode(104,95,56,95,102,108,97,116,116,101,110,0);
         temperature7 = [2];
         popupr += `${popupr.length % (Math.max(1, popupr.length))}`;
      for (let y = 0; y < 2; y++) {
          let inactiveH = 2;
          let textp = 3.0;
         c_centerc *= parseFloat(`${parseInt(`${textp}`) * 3}`);
         inactiveH ^= inactiveH;
         textp += inactiveH;
      }
      let anner2 = 9691462 <= styler;
      do {
         styler ^= parseInt(`${c_centerc}`);
         if (anner2) {
            break;
         }
      } while ((2.79 == (styler / (Math.max(c_centerc, 9)))) && anner2);
      let rankq = shoott == String.fromCharCode(119,53,113,115,116,0);
      do {
         shoott = `${shoott.length}`;
         if (rankq) {
            break;
         }
      } while (((3 | shoott.length) <= 3 && (shoott.length | styler) <= 3) && rankq);
      for (let y = 0; y < 1; y++) {
         styler <<= Math.min(1, shoott.length);
      }
      if (5.64 < (styler / (Math.max(c_centerc, 7)))) {
         styler /= Math.max(1, (settingsN == String.fromCharCode(88,0) ? settingsN.length : styler));
      }
       let hnewinterstitialr: Array<any> = [158, 3, 21];
       let constantsZ: Array<any> = [String.fromCharCode(104,95,56,53,95,114,101,109,111,118,97,98,108,101,0), String.fromCharCode(122,95,53,52,95,109,97,110,105,112,117,108,97,116,101,0), String.fromCharCode(116,116,97,103,95,48,95,56,49,0)];
          let nterstitialn = String.fromCharCode(122,95,49,57,95,103,114,111,101,115,116,108,0);
         shoott += `${(String.fromCharCode(115,0) == shoott ? temperature7.length : shoott.length)}`;
         nterstitialn = `${3 ^ nterstitialn.length}`;
         styler %= Math.max(3, hnewinterstitialr.length);
         constantsZ.push(filter9.length << (Math.min(Math.abs(2), 5)));
      gesture9 += popupW.length;
      if (settingy) {
         break;
      }
   } while (settingy && (3.97 >= (gesture9 - loadingh) && 3.97 >= (loadingh - gesture9)));
   while (navigationx < buttonD) {
      buttonD *= parseFloat(`${dialogS.size - parseInt(`${loadingh}`)}`);
      break;
   }
      dialogS.set(`${clockn}`, (popupW == String.fromCharCode(98,0) ? popupW.length : parseInt(`${clockn}`)));
   while (!popupW.includes(`${chinasameT.length}`)) {
       let sheetV: Array<any> = [830, 613];
          let paginationK = 5;
          let awayi = String.fromCharCode(120,95,57,57,95,99,111,108,117,109,110,0);
          let thumbnailu = String.fromCharCode(117,95,50,54,95,109,111,110,107,101,121,115,97,117,100,105,111,0);
         sheetV = [(String.fromCharCode(57,0) == thumbnailu ? thumbnailu.length : sheetV.length)];
         paginationK &= awayi.length | paginationK;
         awayi += `${awayi.length}`;
      while (3 <= sheetV.length) {
          let kcopy_8aP = String.fromCharCode(115,104,97,114,101,95,107,95,53,51,0);
          let downloadedt = false;
          let upgradec = 1;
          let yellowX = false;
          let r_playerQ = String.fromCharCode(105,95,51,55,95,114,101,99,111,109,112,111,115,101,0);
         sheetV.push((r_playerQ == String.fromCharCode(81,0) ? r_playerQ.length : (yellowX ? 4 : 1)));
         kcopy_8aP += `${upgradec ^ kcopy_8aP.length}`;
         downloadedt = downloadedt || kcopy_8aP.length <= 13;
         upgradec %= Math.max(3, (kcopy_8aP == String.fromCharCode(82,0) ? (downloadedt ? 2 : 3) : kcopy_8aP.length));
         yellowX = !downloadedt;
         break;
      }
         sheetV = [sheetV.length];
      chinasameT.push(1 ^ parseInt(`${navigationx}`));
      break;
   }
       let pangleY: Array<any> = [942, 614];
       let icon6 = 3;
       let bootsplashC = true;
       let streamingQ = 5.0;
      while ((5 << (Math.min(4, pangleY.length))) < 4 || 4 < (5 << (Math.min(2, Math.abs(icon6))))) {
         icon6 <<= Math.min(4, parseInt(`${Math.abs((pangleY.length << (Math.min(4, Math.abs((bootsplashC ? 3 : 4))))))}`));
         break;
      }
         icon6 /= Math.max(parseInt(`${streamingQ}`) >> (Math.min(2, Math.abs(3))), 1);
         bootsplashC = pangleY.includes(icon6);
      for (let b = 0; b < 1; b++) {
          let sourcel = 5.0;
          let googlef = String.fromCharCode(98,95,53,57,95,114,101,102,114,101,115,104,0);
          let mbbannerK = String.fromCharCode(116,114,117,110,99,97,116,101,100,95,121,95,50,50,0);
         icon6 *= (icon6 * (bootsplashC ? 1 : 2));
         sourcel -= googlef.length;
         googlef = `${parseInt(`${sourcel}`)}`;
         mbbannerK += "3";
      }
          let toponx = String.fromCharCode(106,95,54,52,95,114,101,99,111,114,100,110,105,110,103,0);
          let tempe = false;
         icon6 |= icon6;
         toponx = `${2 - toponx.length}`;
         tempe = toponx.length >= 40 && tempe;
          let yingb = true;
          let rankW: Array<any> = [String.fromCharCode(112,99,109,98,95,114,95,56,57,0), String.fromCharCode(114,101,115,101,116,95,116,95,51,54,0), String.fromCharCode(114,95,50,56,95,113,99,111,109,0)];
         icon6 *= 2;
         yingb = rankW.length > rankW.length;
      for (let y = 0; y < 3; y++) {
         icon6 ^= icon6 >> (Math.min(4, Math.abs(1)));
      }
      if (3.72 < (2.15 + streamingQ)) {
          let photoa = true;
          let loading4 = String.fromCharCode(108,111,111,107,117,112,95,100,95,56,0);
         bootsplashC = (icon6 * streamingQ) == 77;
         photoa = !loading4.endsWith(`${photoa}`);
         loading4 += `${((photoa ? 5 : 3) * loading4.length)}`;
      }
      popupW += `${3 ^ popupW.length}`;
   for (let w = 0; w < 2; w++) {
       let promotionM = String.fromCharCode(114,95,51,52,95,109,97,106,0);
      for (let e = 0; e < 2; e++) {
          let sideO: Map<any, any> = new Map([[String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,52,95,54,50,0),792], [String.fromCharCode(99,111,109,112,111,115,101,114,95,104,95,53,54,0),21], [String.fromCharCode(119,109,97,118,111,105,99,101,95,108,95,49,52,0),192]]);
         promotionM += `${promotionM.length * sideO.size}`;
      }
      let emptyZ = String.fromCharCode(107,104,120,0) == promotionM;
      do {
         promotionM += "3";
         if (emptyZ) {
            break;
         }
      } while ((!promotionM.startsWith(promotionM)) && emptyZ);
          let main_t8: Map<any, any> = new Map([[String.fromCharCode(109,101,116,104,111,100,95,122,95,49,53,0),String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,95,49,95,54,52,0)], [String.fromCharCode(112,105,120,99,116,120,95,98,95,53,57,0),String.fromCharCode(117,95,52,56,95,116,101,120,116,0)], [String.fromCharCode(107,95,52,49,95,97,100,118,97,110,99,101,100,0),String.fromCharCode(119,104,105,108,101,95,101,95,52,54,0)]]);
          let megaphoneh = false;
         promotionM = `${((megaphoneh ? 2 : 2))}`;
         main_t8.set(`${main_t8.size}`, main_t8.size * 1);
         megaphoneh = main_t8.size < 52 && main_t8.size < 52;
      loadingh /= Math.max(1, parseFloat(`${2 | dialogS.size}`));
   }
   for (let j = 0; j < 3; j++) {
       let changez = String.fromCharCode(103,95,51,55,95,111,110,116,111,0);
       let privacyG = 3;
       let auto_mi = String.fromCharCode(118,105,111,108,101,110,99,101,95,117,95,51,56,0);
       let hookX = String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,95,108,95,50,56,0);
         hookX = `${hookX.length}`;
      for (let b = 0; b < 3; b++) {
         changez += `${privacyG / (Math.max(auto_mi.length, 9))}`;
      }
      let type_oa = changez.length <= 5283968;
      do {
          let controlsb = 4.0;
          let index0 = String.fromCharCode(109,95,56,95,116,111,120,121,122,0);
         changez = `${auto_mi.length % 1}`;
         controlsb += parseFloat(`${1 << (Math.min(5, index0.length))}`);
         index0 = "2";
         if (type_oa) {
            break;
         }
      } while ((changez.startsWith(`${privacyG}`)) && type_oa);
      if (!changez.includes(`${auto_mi.length}`)) {
         auto_mi = "2";
      }
         auto_mi += "1";
      spinner5 = popupW == String.fromCharCode(105,0);
   }
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let eventS: Map<any, any> = new Map([[String.fromCharCode(115,116,100,108,105,98,95,52,95,53,50,0),905], [String.fromCharCode(98,101,110,99,104,109,97,114,107,95,103,95,57,53,0),683], [String.fromCharCode(110,95,51,48,95,100,105,115,116,114,105,99,116,0),814]]);
    let suggestionU = String.fromCharCode(115,101,101,100,95,122,95,53,48,0);
    let commone: Map<any, any> = new Map([[String.fromCharCode(97,109,111,117,110,116,115,95,121,95,49,53,0),883], [String.fromCharCode(110,95,54,95,109,111,110,111,98,108,97,99,107,0),851], [String.fromCharCode(106,112,101,103,108,105,98,95,116,95,50,0),555]]);
    let spinnerb = 4.0;
    let minil = 4;
    let regengr = 3;
    let nterstitialB = true;
    let pagef: Array<any> = [530, 231];
    let turnS = String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,104,95,57,55,0);
    let private_p1M = String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,108,95,55,50,0);
    let condensedT = 5;
    let pageg = String.fromCharCode(101,95,57,48,95,102,102,109,97,116,104,0);
       let ajaxL = String.fromCharCode(118,95,54,48,95,109,108,112,100,115,112,0);
       let rewindm = 5.0;
      if ((5.64 / (Math.max(8, rewindm))) <= 4.85) {
          let questi = String.fromCharCode(115,95,51,54,95,105,110,116,101,114,110,0);
          let buttoni = String.fromCharCode(122,95,54,56,95,105,116,101,114,97,116,105,111,110,115,0);
          let megaphoneH = String.fromCharCode(119,104,101,110,95,97,95,56,57,0);
         ajaxL = `${buttoni.length}`;
         questi += `${questi.length << (Math.min(megaphoneH.length, 5))}`;
         buttoni += `${megaphoneH.length / (Math.max(8, questi.length))}`;
      }
      for (let v = 0; v < 1; v++) {
          let rewindT = true;
          let borderlessd: Array<any> = [926, 126, 137];
          let gradlewD = String.fromCharCode(104,95,49,52,95,99,111,109,112,105,116,97,98,108,101,0);
          let chinasameu = 4.0;
          let minimize8 = 2.0;
         ajaxL = `${(String.fromCharCode(71,0) == ajaxL ? (rewindT ? 3 : 2) : ajaxL.length)}`;
         rewindT = chinasameu < 26.78;
         borderlessd.push(parseInt(`${chinasameu}`));
         gradlewD = `${gradlewD.length | 3}`;
         minimize8 -= 2 ^ borderlessd.length;
      }
      let sigmobQ = rewindm >= 6606901.0;
      do {
         rewindm -= parseFloat(`${parseInt(`${rewindm}`)}`);
         if (sigmobQ) {
            break;
         }
      } while (((parseInt(`${rewindm}`) / 4) < 2 && (4 & ajaxL.length) < 1) && sigmobQ);
       let shared4 = String.fromCharCode(119,95,53,48,95,104,111,117,114,115,0);
      for (let u = 0; u < 1; u++) {
         shared4 = `${(String.fromCharCode(100,0) == ajaxL ? parseInt(`${rewindm}`) : ajaxL.length)}`;
      }
       let adult4 = String.fromCharCode(110,95,57,52,95,115,101,109,105,0);
      minil -= pagef.length;
   while ((pagef.length - regengr) <= 1 && (pagef.length - 1) <= 2) {
      pagef = [1 ^ pagef.length];
      break;
   }
   if (!nterstitialB) {
      nterstitialB = commone.get(`${spinnerb}`) != null;
   }
      turnS += `${2 - commone.size}`;
       let anythinkO = 4;
       let paginationa = 4.0;
       let navigationa = 4.0;
      if (5.59 == (3.93 - paginationa) || (anythinkO - parseInt(`${paginationa}`)) == 4) {
         paginationa /= Math.max(parseFloat(`${parseInt(`${navigationa}`) * parseInt(`${paginationa}`)}`), 1);
      }
      for (let b = 0; b < 3; b++) {
          let mappingS = String.fromCharCode(110,95,54,56,95,106,112,101,103,99,111,109,112,0);
          let reactK = false;
          let becomev = String.fromCharCode(113,117,97,114,116,101,114,95,108,95,54,53,0);
          let arrowE: Array<any> = [40, 49, 79];
          let stylea = String.fromCharCode(103,95,54,50,95,116,105,116,108,101,98,97,114,0);
         anythinkO /= Math.max(3, 3);
         mappingS += `${1 * stylea.length}`;
         reactK = (mappingS.length * arrowE.length) <= 72;
         becomev += `${stylea.length}`;
         arrowE.push(((reactK ? 2 : 5)));
      }
      while ((parseInt(`${paginationa}`) / (Math.max(7, anythinkO))) < 1 || 4.70 < (4.65 / (Math.max(10, paginationa)))) {
         paginationa += parseFloat(`${parseInt(`${paginationa}`)}`);
         break;
      }
      let sellg = 8476609.0 <= navigationa;
      do {
         navigationa += parseFloat(`${anythinkO * parseInt(`${navigationa}`)}`);
         if (sellg) {
            break;
         }
      } while ((navigationa < 5.55) && sellg);
      let register_m3e = 7668689.0 <= paginationa;
      do {
         paginationa *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${paginationa}`)), 2))}`);
         if (register_m3e) {
            break;
         }
      } while (((paginationa - anythinkO) == 4.8) && register_m3e);
          let sellt = 0;
          let malaysiaN = false;
          let lineN = 3.0;
         navigationa *= parseFloat(`${parseInt(`${lineN}`)}`);
         sellt *= 3 | sellt;
         malaysiaN = sellt < 43 || !malaysiaN;
         lineN -= 2;
      if (2.95 >= navigationa) {
          let libcrashsdk4 = 3;
         paginationa -= parseFloat(`${parseInt(`${paginationa}`)}`);
         libcrashsdk4 &= 3;
      }
         paginationa -= parseFloat(`${anythinkO}`);
         navigationa -= parseFloat(`${anythinkO / 2}`);
      minil /= Math.max((String.fromCharCode(97,0) == turnS ? anythinkO : turnS.length), 1);
      pagef.push(eventS.size);
      suggestionU = `${minil / 1}`;

        if (sortBy === 'asc') {

   for (let e = 0; e < 1; e++) {
      suggestionU = `${eventS.size ^ turnS.length}`;
   }
      suggestionU += `${parseInt(`${spinnerb}`)}`;
   if (suggestionU.length >= regengr) {
      regengr += private_p1M.length | minil;
   }
   while (5 <= (3 * private_p1M.length) && (private_p1M.length * commone.size) <= 3) {
      commone.set(turnS, (String.fromCharCode(88,0) == turnS ? turnS.length : commone.size));
      break;
   }
   if ((3.80 - spinnerb) >= 4.0 && (suggestionU.length - parseInt(`${spinnerb}`)) >= 2) {
      suggestionU = `${3 >> (Math.min(1, Math.abs(parseInt(`${spinnerb}`))))}`;
   }
       let w_viewG: Array<any> = [379, 609];
       let search4 = true;
       let friendsY = String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,120,95,53,55,0);
      if ((3 - friendsY.length) >= 3 || (friendsY.length - 3) >= 1) {
         w_viewG.push(3);
      }
         w_viewG = [w_viewG.length];
      while (search4) {
         w_viewG = [friendsY.length];
         break;
      }
      let rewindW = search4 ? !search4 : search4;
      do {
         search4 = friendsY.length >= w_viewG.length;
         if (rewindW) {
            break;
         }
      } while (rewindW && ((2 >> (Math.min(3, w_viewG.length))) == 1 || w_viewG.length == 2));
          let switch_l5x = 3.0;
          let gesturer = 5.0;
         search4 = (86 <= (friendsY.length | (!search4 ? friendsY.length : 86)));
         switch_l5x /= Math.max(1, parseInt(`${gesturer}`));
       let backgroundk = String.fromCharCode(117,110,112,114,111,116,101,99,116,95,48,95,50,53,0);
         backgroundk += `${((search4 ? 4 : 1))}`;
      for (let b = 0; b < 3; b++) {
         friendsY = "1";
      }
      for (let g = 0; g < 2; g++) {
         friendsY = `${(String.fromCharCode(57,0) == friendsY ? friendsY.length : (search4 ? 1 : 1))}`;
      }
      turnS += "3";
   for (let g = 0; g < 3; g++) {
      pagef.push(private_p1M.length ^ turnS.length);
   }
            setSortBy('desc');
        } else {

       let activity8 = String.fromCharCode(115,99,97,108,101,115,95,106,95,54,48,0);
       let editV = true;
         editV = editV || activity8.length <= 11;
      for (let j = 0; j < 2; j++) {
         activity8 = `${(activity8.length << (Math.min(5, Math.abs((editV ? 5 : 1)))))}`;
      }
      turnS += `${3 | eventS.size}`;
      spinnerb *= (String.fromCharCode(83,0) == private_p1M ? private_p1M.length : suggestionU.length);
   while (pagef.length < 1) {
       let controlsE = 0;
       let mbsplasha = String.fromCharCode(109,95,56,56,95,102,105,110,100,97,115,111,99,0);
       let holderS = false;
          let bannerx = String.fromCharCode(113,95,55,56,95,101,120,116,114,97,100,97,116,97,0);
         controlsE <<= Math.min(5, Math.abs(2));
         bannerx = `${bannerx.length}`;
      for (let n = 0; n < 3; n++) {
         controlsE &= (String.fromCharCode(116,0) == mbsplasha ? (holderS ? 2 : 2) : mbsplasha.length);
      }
          let watchw = 0;
          let mimo3 = 3.0;
          let rightg = 2;
         holderS = parseFloat(`${rightg}`) == mimo3;
         watchw *= watchw;
         mimo3 += parseFloat(`${watchw}`);
         mbsplasha += `${mbsplasha.length >> (Math.min(Math.abs(2), 2))}`;
      for (let n = 0; n < 1; n++) {
          let suggestiont: Array<any> = [382, 555];
         holderS = !holderS || controlsE > 19;
         suggestiont = [suggestiont.length | suggestiont.length];
      }
      for (let x = 0; x < 2; x++) {
         mbsplasha += `${(controlsE - (holderS ? 3 : 1))}`;
      }
      while (holderS) {
         mbsplasha += `${controlsE * 2}`;
         break;
      }
      while ((3 | mbsplasha.length) > 5 || 3 > (controlsE | 3)) {
         controlsE &= 2 >> (Math.min(Math.abs(controlsE), 1));
         break;
      }
      for (let p = 0; p < 3; p++) {
         holderS = !holderS;
      }
      pagef.push(controlsE);
      break;
   }
   for (let h = 0; h < 1; h++) {
      spinnerb /= Math.max(2, 1);
   }
      regengr <<= Math.min(2, Math.abs(regengr));
   while (5 > regengr) {
       let flyer4 = 3.0;
       let canvas0 = false;
          let giftH: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,112,95,54,95,51,49,0),String.fromCharCode(109,95,49,50,95,97,112,112,108,101,0)], [String.fromCharCode(104,97,114,100,99,111,100,101,100,95,48,95,54,49,0),String.fromCharCode(115,95,50,56,95,102,117,122,122,101,114,115,0)], [String.fromCharCode(115,112,105,110,108,111,99,107,95,114,95,51,51,0),String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,110,95,57,0)]]);
          let flipperR = 5.0;
          let rankJ = 2.0;
         flyer4 -= parseInt(`${flyer4}`) / 3;
         giftH = new Map([[`${rankJ}`, parseInt(`${rankJ}`) - 2]]);
         flipperR -= parseFloat(`${parseInt(`${rankJ}`)}`);
       let goal9 = String.fromCharCode(118,95,56,48,95,110,111,110,101,0);
       let overw = String.fromCharCode(104,100,110,111,100,101,95,117,95,54,48,0);
         overw = "2";
         canvas0 = !canvas0;
          let singaporei = 3.0;
         flyer4 /= Math.max(2, ((canvas0 ? 4 : 3) << (Math.min(Math.abs(1), 4))));
         singaporei *= parseFloat(`${parseInt(`${singaporei}`)}`);
      for (let u = 0; u < 2; u++) {
         canvas0 = 37 <= goal9.length;
      }
      regengr -= eventS.size;
      break;
   }
       let privacy6 = String.fromCharCode(112,116,111,110,95,122,95,54,0);
       let episodesC: Array<any> = [651, 20];
       let eactk = String.fromCharCode(117,95,53,50,95,105,110,100,101,112,101,110,100,101,100,0);
      while (eactk.length == 3) {
         episodesC.push(2 * eactk.length);
         break;
      }
      for (let l = 0; l < 2; l++) {
         episodesC.push(episodesC.length * 2);
      }
         privacy6 += `${1 >> (Math.min(5, privacy6.length))}`;
         episodesC = [3 % (Math.max(4, episodesC.length))];
         eactk = `${episodesC.length % 2}`;
      let auto_a8f = episodesC.length <= 6513825;
      do {
          let privilegeh: Map<any, any> = new Map([[String.fromCharCode(100,95,49,55,95,110,101,116,119,111,114,107,0),String.fromCharCode(101,120,97,109,105,110,101,95,100,95,49,56,0)], [String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,48,95,51,54,0),String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,95,52,95,52,56,0)]]);
          let type_y2: Array<any> = [String.fromCharCode(114,101,109,111,118,101,114,95,119,95,54,57,0), String.fromCharCode(105,95,49,48,95,97,115,104,105,110,103,0)];
         episodesC.push(episodesC.length % 3);
         privilegeh = new Map([[`${privilegeh.size}`, type_y2.length]]);
         type_y2 = [1];
         if (auto_a8f) {
            break;
         }
      } while (auto_a8f && ((eactk.length & 2) == 3 && 1 == (2 & eactk.length)));
         eactk += `${privacy6.length + episodesC.length}`;
         episodesC.push(privacy6.length & 2);
         privacy6 = `${privacy6.length | 3}`;
      minil <<= Math.min(4, Math.abs(eactk.length ^ episodesC.length));
            setSortBy('asc');
        }
    }

    return (
        <View
            style={{
                ...styles.container,
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset,
                gap: spacing.m
            }}
        >
            <View style={styles.episodeList}>
                <FlatList
                    horizontal
                    data={ranges}
                    renderItem={({ item, index }: { item: string, index: number }) => {
                        return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
                            <Text
                                style={{
                                    textAlign: 'center', ...textVariants.header,
                                    color: index === currentIndex ? colors.text : colors.muted,
                                    fontSize: index === currentIndex ? 18 : 15
                                }}>
                                {`${item}集`}
                            </Text>
                        </TouchableOpacity>
                    }}
                />
                {/* <TouchableOpacity style={styles.sortBtn} onPress={sort}>
                    <View style={{ paddingTop: 4 }}>
                        {
                            sortBy === 'asc'
                                ? <SortAscIcon />
                                : <SortDescIcon />
                        }
                    </View>
                    <Text
                        style={{
                            textAlign: 'center', ...textVariants.header,
                            color: colors.muted,
                            fontSize: 15
                        }}>
                        顺序
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView contentContainerStyle={styles.episodeList}>
                {
                    displayEpisodes?.map((ep, idx) =>
                        <TouchableOpacity key={`expand-${idx}`} onPress={() => {
                            onConfirm(ep.nid);
                            onCancel();
                        }} style={{ paddingRight: spacing.s }}>
                            <View style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                minWidth: 70,
                                marginRight: 'auto',
                                marginBottom: spacing.s,
                                borderRadius: 8
                            }} >
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: 13,
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        color: ep.nid === activeEpisode ? colors.selected : colors.muted,
                                    }}>
                                    {`${ep.name}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    );
};

export default memo(VodEpisodeSelection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});