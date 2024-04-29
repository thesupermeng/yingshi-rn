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
       let verticalR = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,101,95,50,53,0);
    let orientationu: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,116,0),712], [String.fromCharCode(115,116,97,109,112,0),353]]);
    let filter4 = String.fromCharCode(114,101,116,97,105,110,0);
    let bootsplashP = 3.0;
    let utilsf = String.fromCharCode(115,116,114,102,116,105,109,101,95,55,95,55,50,0);
    let searchbarM = String.fromCharCode(100,114,105,118,105,110,103,0);
    let linkj = String.fromCharCode(105,100,120,0);
    let refreshy = 5;
    let appsz = String.fromCharCode(99,108,109,117,108,0);
    let settingsB = 4.0;
    let gray8 = String.fromCharCode(107,95,54,54,95,100,101,99,111,109,112,114,101,115,115,111,114,0);
    let targetr: Array<any> = [String.fromCharCode(112,95,52,52,95,98,114,107,116,105,109,101,103,109,0), String.fromCharCode(97,95,55,56,95,104,109,97,99,108,105,115,116,0), String.fromCharCode(108,111,99,107,95,51,95,56,54,0)];
    let z_imageF = false;
      utilsf = `${gray8.length}`;
      filter4 += `${(String.fromCharCode(80,0) == verticalR ? appsz.length : verticalR.length)}`;
       let singaporeo = 0.0;
       let transfero = String.fromCharCode(99,111,110,116,114,105,98,95,106,95,50,56,0);
      if (parseFloat(`${transfero.length}`) <= singaporeo) {
         singaporeo *= parseFloat(`${transfero.length}`);
      }
          let playercommona = 2;
         singaporeo -= parseFloat(`${2}`);
         playercommona |= playercommona;
          let loadingL = String.fromCharCode(114,101,115,111,117,114,99,101,115,0);
         transfero += `${transfero.length}`;
         loadingL += `${(loadingL == String.fromCharCode(122,0) ? loadingL.length : loadingL.length)}`;
         singaporeo /= Math.max(2, parseFloat(`${parseInt(`${singaporeo}`)}`));
          let launcher9 = String.fromCharCode(109,112,101,103,118,108,99,0);
         singaporeo -= parseFloat(`${3 & transfero.length}`);
         launcher9 = "1";
          let buttonY = 1.0;
          let iconm = 0.0;
          let trash9 = true;
         transfero += `${(String.fromCharCode(80,0) == transfero ? transfero.length : parseInt(`${iconm}`))}`;
         buttonY *= (parseFloat(`${(trash9 ? 1 : 1) ^ parseInt(`${buttonY}`)}`));
         iconm += (parseFloat(`${parseInt(`${buttonY}`) + (trash9 ? 3 : 1)}`));
      bootsplashP += parseFloat(`${utilsf.length}`);
      targetr = [refreshy * searchbarM.length];
      orientationu = new Map([[utilsf, 3]]);
      orientationu = new Map([[`${bootsplashP}`, (String.fromCharCode(69,0) == filter4 ? parseInt(`${bootsplashP}`) : filter4.length)]]);
      searchbarM = `${verticalR.length * 3}`;
   for (let g = 0; g < 1; g++) {
       let statsE: Array<any> = [336, 100];
       let analyticsL: Array<any> = [String.fromCharCode(121,95,54,54,95,111,102,102,115,101,116,115,105,122,101,0), String.fromCharCode(109,101,97,110,0), String.fromCharCode(115,95,51,51,95,104,101,120,100,117,109,112,0)];
      for (let q = 0; q < 1; q++) {
         analyticsL = [analyticsL.length];
      }
      for (let m = 0; m < 2; m++) {
         analyticsL.push(3);
      }
         analyticsL = [statsE.length];
      if (!analyticsL.includes(statsE.length)) {
          let stationC = String.fromCharCode(114,95,53,95,117,110,115,105,103,110,101,100,0);
          let sigmobR = String.fromCharCode(100,97,116,97,108,105,115,116,95,50,95,51,50,0);
          let application2 = String.fromCharCode(102,95,52,52,95,103,114,97,100,0);
         statsE.push(analyticsL.length);
         stationC = `${application2.length >> (Math.min(Math.abs(1), 5))}`;
         sigmobR = `${(String.fromCharCode(51,0) == application2 ? application2.length : sigmobR.length)}`;
      }
         statsE.push(1);
      for (let e = 0; e < 1; e++) {
         statsE.push(3);
      }
      searchbarM = `${statsE.length - 1}`;
   }
   if (1 == (2 ^ appsz.length)) {
      appsz += `${refreshy}`;
   }
   while (5 <= refreshy) {
      utilsf += `${(String.fromCharCode(113,0) == utilsf ? parseInt(`${bootsplashP}`) : utilsf.length)}`;
      break;
   }

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

   let redirectT = refreshy >= 6036930;
   do {
      refreshy ^= parseInt(`${settingsB}`) * 2;
      if (redirectT) {
         break;
      }
   } while (((3 + verticalR.length) < 4 || (verticalR.length + 3) < 5) && redirectT);
   for (let v = 0; v < 1; v++) {
       let untickE = String.fromCharCode(116,95,55,55,95,116,114,97,107,0);
       let foundW = 1.0;
       let kuaishouw: Array<any> = [String.fromCharCode(109,95,57,52,95,110,111,114,109,0), String.fromCharCode(117,95,51,52,95,120,104,116,109,108,0)];
         untickE = `${parseInt(`${foundW}`) / 2}`;
      while ((kuaishouw.length ^ untickE.length) > 3 && (3 ^ kuaishouw.length) > 2) {
         untickE += `${kuaishouw.length}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
         foundW -= parseInt(`${foundW}`) << (Math.min(untickE.length, 4));
      }
         foundW += 2 << (Math.min(4, kuaishouw.length));
      while (kuaishouw.length >= parseInt(`${foundW}`)) {
         kuaishouw.push(2 % (Math.max(2, kuaishouw.length)));
         break;
      }
         foundW += kuaishouw.length << (Math.min(untickE.length, 5));
          let currentp = false;
          let membero = true;
         foundW *= untickE.length;
         currentp = (!membero ? membero : membero);
      for (let y = 0; y < 3; y++) {
          let icon6 = String.fromCharCode(97,112,111,115,95,117,95,55,54,0);
          let footballU = 1.0;
          let selection8 = String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,0);
         kuaishouw.push(parseInt(`${footballU}`));
         icon6 += "1";
         footballU -= 3;
         selection8 = `${(selection8 == String.fromCharCode(69,0) ? icon6.length : selection8.length)}`;
      }
          let applicationE = 2.0;
          let queste = String.fromCharCode(97,99,99,0);
         untickE += `${untickE.length - parseInt(`${applicationE}`)}`;
         applicationE /= Math.max(5, 1 * queste.length);
         queste += `${queste.length}`;
      verticalR += `${gray8.length}`;
   }
       let networkM: Array<any> = [641, 266];
       let thailand4 = 5.0;
       let iconO = String.fromCharCode(105,110,116,101,108,95,56,95,52,48,0);
      while (iconO.length > 1) {
         thailand4 /= Math.max(parseFloat(`${1}`), 3);
         break;
      }
         thailand4 /= Math.max(5, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${thailand4}`)), 4))}`));
      while (5.29 > (thailand4 * 3.76)) {
          let sina6 = String.fromCharCode(106,95,49,50,95,116,109,112,108,0);
          let selectiono: Array<any> = [59, 94, 371];
          let whatsappv = 5.0;
          let materialK = 5;
          let anythinkt: Map<any, any> = new Map([[String.fromCharCode(99,95,50,0),380], [String.fromCharCode(98,108,111,99,107,105,110,103,95,114,95,57,49,0),223], [String.fromCharCode(116,95,54,54,95,108,111,103,111,115,0),640]]);
         thailand4 -= parseFloat(`${2}`);
         sina6 += `${selectiono.length - parseInt(`${whatsappv}`)}`;
         selectiono.push(sina6.length);
         whatsappv /= Math.max(5, parseFloat(`${anythinkt.size / (Math.max(1, 3))}`));
         materialK ^= sina6.length / 3;
         anythinkt = new Map([[`${whatsappv}`, 2]]);
         break;
      }
      while ((thailand4 / (Math.max(4, parseFloat(`${networkM.length}`)))) > 5.70) {
         thailand4 += parseFloat(`${1}`);
         break;
      }
          let mbbidV = 5;
         thailand4 /= Math.max(parseFloat(`${networkM.length + 3}`), 1);
         mbbidV *= 3;
      filter4 += `${1 & utilsf.length}`;
      bootsplashP -= parseFloat(`${utilsf.length - 3}`);
   let selectionV = filter4.length <= 8278065;
   do {
      filter4 += `${verticalR.length}`;
      if (selectionV) {
         break;
      }
   } while ((verticalR.startsWith(`${filter4.length}`)) && selectionV);
       let aboutV = String.fromCharCode(117,95,53,50,95,114,101,99,117,114,115,101,0);
       let shrinkg = 3.0;
         aboutV = `${(aboutV == String.fromCharCode(112,0) ? parseInt(`${shrinkg}`) : aboutV.length)}`;
          let benefitO = String.fromCharCode(119,114,105,116,105,110,103,0);
         aboutV += `${(String.fromCharCode(56,0) == benefitO ? benefitO.length : aboutV.length)}`;
          let themeu = String.fromCharCode(97,118,103,120,0);
          let crown8 = 5.0;
          let streamingk: Array<any> = [412, 152];
         shrinkg -= parseFloat(`${themeu.length}`);
         themeu = `${2 ^ streamingk.length}`;
         crown8 += parseFloat(`${streamingk.length}`);
      while ((parseInt(`${shrinkg}`) * aboutV.length) == 3 && 1.79 == (shrinkg * 1.84)) {
         shrinkg -= parseFloat(`${aboutV.length / (Math.max(7, parseInt(`${shrinkg}`)))}`);
         break;
      }
      for (let u = 0; u < 1; u++) {
          let roundF = String.fromCharCode(108,97,99,101,115,0);
          let editj = String.fromCharCode(102,95,56,49,95,109,97,114,107,105,110,103,0);
          let redirectm = 5.0;
          let const_q_ = 0.0;
          let matcha = String.fromCharCode(100,101,105,110,105,116,0);
         shrinkg *= parseFloat(`${aboutV.length % 2}`);
         roundF += `${roundF.length}`;
         editj = `${parseInt(`${redirectm}`) - 3}`;
         redirectm /= Math.max(1, 1);
         const_q_ *= parseFloat(`${parseInt(`${redirectm}`)}`);
         matcha += `${editj.length}`;
      }
         aboutV = `${aboutV.length}`;
      searchbarM = `${linkj.length}`;
      appsz = "3";
       let stylef = 4.0;
          let moreX: Array<any> = [172, 656, 567];
         stylef *= 2 - parseInt(`${stylef}`);
         moreX.push(moreX.length);
      while (stylef >= 2.93) {
         stylef /= Math.max(4, parseInt(`${stylef}`) * 2);
         break;
      }
      if (2.5 < (5 - stylef)) {
         stylef *= parseInt(`${stylef}`);
      }
      linkj = `${gray8.length - utilsf.length}`;
   let schedules = utilsf == String.fromCharCode(56,95,107,109,105,105,49,54,101,101,0);
   do {
       let checkboxg = String.fromCharCode(97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0);
       let greenw = String.fromCharCode(117,95,56,49,95,115,119,105,122,122,108,101,0);
       let dialog2: Array<any> = [35, 746, 65];
       let aboute: Array<any> = [638, 465, 42];
         dialog2 = [2];
         greenw = `${checkboxg.length << (Math.min(Math.abs(2), 1))}`;
      if (3 > (dialog2.length & checkboxg.length) || (checkboxg.length & dialog2.length) > 3) {
         dialog2 = [2 * checkboxg.length];
      }
          let whatsappn = 4;
          let volumeW = String.fromCharCode(109,101,109,106,114,110,108,0);
         aboute = [(checkboxg == String.fromCharCode(107,0) ? dialog2.length : checkboxg.length)];
         whatsappn ^= 2;
         volumeW += `${2 / (Math.max(1, whatsappn))}`;
         dialog2 = [2 | aboute.length];
         aboute.push(dialog2.length | 1);
      for (let v = 0; v < 2; v++) {
         aboute = [aboute.length];
      }
      let icono = dialog2.length <= 5100303;
      do {
         dialog2.push(2);
         if (icono) {
            break;
         }
      } while (icono && (aboute.length >= dialog2.length));
         greenw = `${1 + dialog2.length}`;
      while ((3 & aboute.length) == 2 && 1 == (3 & aboute.length)) {
         aboute = [(String.fromCharCode(50,0) == greenw ? checkboxg.length : greenw.length)];
         break;
      }
       let zhuboS = false;
      for (let c = 0; c < 3; c++) {
         checkboxg += `${1 | checkboxg.length}`;
      }
      utilsf = `${parseInt(`${bootsplashP}`)}`;
      if (schedules) {
         break;
      }
   } while ((searchbarM != String.fromCharCode(84,0)) && schedules);
      gray8 = "1";
        if (sortBy === 'desc') {

       let completev = 5;
       let libcrashsdku = String.fromCharCode(106,95,57,55,95,117,112,99,97,108,108,0);
      for (let y = 0; y < 3; y++) {
         libcrashsdku = `${libcrashsdku.length ^ 3}`;
      }
         completev %= Math.max((libcrashsdku == String.fromCharCode(82,0) ? completev : libcrashsdku.length), 5);
      let episodeG = libcrashsdku.length >= 6401431;
      do {
          let backF = String.fromCharCode(114,95,54,52,95,99,111,115,105,103,110,97,116,111,114,121,0);
          let catalogt = 0.0;
          let private_yv = String.fromCharCode(97,112,112,101,114,97,110,99,101,0);
          let basketball4 = 0;
         libcrashsdku += "3";
         backF += `${parseInt(`${catalogt}`)}`;
         catalogt += (String.fromCharCode(57,0) == private_yv ? backF.length : private_yv.length);
         basketball4 *= basketball4;
         if (episodeG) {
            break;
         }
      } while ((libcrashsdku.length < 4) && episodeG);
      let streamingB = 8420601 <= completev;
      do {
         completev /= Math.max(3, 5);
         if (streamingB) {
            break;
         }
      } while (streamingB && (libcrashsdku.length > completev));
      if (1 == (4 >> (Math.min(5, Math.abs(completev)))) || 5 == (completev >> (Math.min(Math.abs(4), 2)))) {
          let philippinesG = String.fromCharCode(105,110,116,114,97,112,114,101,100,0);
          let navigationk: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,98,0),767], [String.fromCharCode(115,111,99,105,97,108,95,102,95,53,49,0),766], [String.fromCharCode(101,113,117,97,116,97,98,108,101,95,115,95,53,57,0),331]]);
         libcrashsdku = `${navigationk.size}`;
         philippinesG = "3";
         navigationk = new Map([[philippinesG, 2 * philippinesG.length]]);
      }
       let inviteD = 1.0;
      appsz += `${refreshy}`;
   for (let x = 0; x < 2; x++) {
      bootsplashP /= Math.max(parseFloat(`${gray8.length}`), 3);
   }
   for (let p = 0; p < 2; p++) {
      appsz = `${utilsf.length}`;
   }
       let modeT = 0.0;
       let spinnerd = String.fromCharCode(104,95,49,55,95,101,100,105,97,0);
       let loadingA = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,0);
      for (let e = 0; e < 1; e++) {
         spinnerd = `${1 + spinnerd.length}`;
      }
      if (loadingA.startsWith(`${modeT}`)) {
         modeT *= spinnerd.length;
      }
      let private_6om = String.fromCharCode(50,57,98,53,120,115,106,0) == spinnerd;
      do {
         spinnerd = `${parseInt(`${modeT}`)}`;
         if (private_6om) {
            break;
         }
      } while (((parseInt(`${modeT}`) * 3) <= 4 && 5.38 <= (modeT * spinnerd.length)) && private_6om);
         spinnerd += `${(String.fromCharCode(67,0) == spinnerd ? parseInt(`${modeT}`) : spinnerd.length)}`;
         modeT -= parseInt(`${modeT}`);
         spinnerd += `${spinnerd.length}`;
      while (loadingA.endsWith(spinnerd)) {
          let launcherV = 0.0;
         spinnerd += `${(String.fromCharCode(83,0) == loadingA ? loadingA.length : parseInt(`${modeT}`))}`;
         launcherV -= parseFloat(`${3 - parseInt(`${launcherV}`)}`);
         break;
      }
      for (let b = 0; b < 1; b++) {
          let register_q1t = String.fromCharCode(108,95,50,54,95,104,112,105,99,0);
          let scoreD = 0.0;
          let setting8 = String.fromCharCode(103,95,52,50,95,112,114,101,118,105,101,119,112,112,0);
         modeT += register_q1t.length & 3;
         register_q1t = `${parseInt(`${scoreD}`)}`;
         scoreD *= parseFloat(`${setting8.length}`);
         setting8 = "3";
      }
      if (loadingA != String.fromCharCode(70,0) || spinnerd != String.fromCharCode(108,0)) {
          let calendar_: Array<any> = [15, 654, 205];
          let philippinesh = String.fromCharCode(114,97,115,116,101,114,105,122,101,115,0);
          let profile4 = 5.0;
         spinnerd += "3";
         calendar_ = [3 + calendar_.length];
         philippinesh += "3";
         profile4 -= parseInt(`${profile4}`);
      }
      targetr = [parseInt(`${bootsplashP}`)];
       let nterstitialZ = 1.0;
       let dnewinterstitialT = String.fromCharCode(100,106,112,101,103,95,121,95,51,48,0);
       let profileb = 5.0;
         profileb *= (dnewinterstitialT == String.fromCharCode(84,0) ? dnewinterstitialT.length : parseInt(`${nterstitialZ}`));
      let checkboxL = nterstitialZ >= 9874680.0;
      do {
         nterstitialZ += parseInt(`${profileb}`) * 2;
         if (checkboxL) {
            break;
         }
      } while (checkboxL && ((2.93 * nterstitialZ) == 1.45 && (2.93 * nterstitialZ) == 5.73));
      while (2 < (4 / (Math.max(6, dnewinterstitialT.length)))) {
         dnewinterstitialT += `${(String.fromCharCode(121,0) == dnewinterstitialT ? dnewinterstitialT.length : parseInt(`${profileb}`))}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
         nterstitialZ -= parseInt(`${profileb}`) >> (Math.min(Math.abs(1), 3));
      }
          let hejiq = false;
         nterstitialZ /= Math.max(2, 3);
         hejiq = !hejiq;
      while ((profileb * 2.100) >= 3.100) {
         profileb *= parseInt(`${profileb}`);
         break;
      }
         nterstitialZ /= Math.max(2, parseInt(`${nterstitialZ}`) - 2);
      while (!dnewinterstitialT.startsWith(`${nterstitialZ}`)) {
         nterstitialZ *= 3;
         break;
      }
       let c_managerY = 1.0;
      orientationu.set(verticalR, 3 | verticalR.length);
   while (filter4 != String.fromCharCode(67,0) || linkj.length >= 1) {
      filter4 = `${parseInt(`${bootsplashP}`) >> (Math.min(targetr.length, 1))}`;
      break;
   }
   if (4 > (linkj.length + 2)) {
      linkj = `${verticalR.length}`;
   }
   while (3 <= orientationu.size) {
      gray8 += `${parseInt(`${bootsplashP}`) % (Math.max(linkj.length, 4))}`;
      break;
   }
      gray8 = `${1 >> (Math.min(3, Math.abs(parseInt(`${settingsB}`))))}`;
       let trophyY = String.fromCharCode(103,101,109,102,105,108,101,95,122,95,53,51,0);
       let constantsx: Map<any, any> = new Map([[String.fromCharCode(114,101,112,101,97,116,101,100,95,51,95,55,57,0),971], [String.fromCharCode(105,102,114,97,109,101,95,117,95,55,52,0),845], [String.fromCharCode(114,101,113,117,101,115,116,101,114,95,100,95,56,56,0),172]]);
       let zhengpianA = true;
          let showV = false;
          let blacke = false;
         zhengpianA = constantsx.get(`${showV}`) != null;
         showV = blacke || blacke;
      while (!trophyY.endsWith(`${constantsx.size}`)) {
          let eactg = String.fromCharCode(107,95,57,53,95,101,113,117,97,108,105,122,101,114,0);
          let friendsA = String.fromCharCode(115,111,117,110,100,95,100,95,49,54,0);
          let hooksx = false;
          let uploadm = 0.0;
          let submitb = String.fromCharCode(101,120,104,97,117,115,116,101,100,0);
         constantsx = new Map([[friendsA, 2]]);
         eactg = `${parseInt(`${uploadm}`)}`;
         friendsA += `${eactg.length ^ parseInt(`${uploadm}`)}`;
         hooksx = uploadm <= 10.18;
         submitb = `${parseInt(`${uploadm}`)}`;
         break;
      }
      while (trophyY.length > 4 || zhengpianA) {
         trophyY = "1";
         break;
      }
      for (let a = 0; a < 2; a++) {
         trophyY += "1";
      }
         trophyY += "2";
      for (let h = 0; h < 3; h++) {
          let sansG = String.fromCharCode(111,112,116,105,109,105,115,109,0);
          let blacklist7 = String.fromCharCode(100,95,54,51,95,101,120,112,101,114,105,109,101,110,116,0);
          let indexC: Array<any> = [103, 521, 640];
          let confirmationK = 2;
         constantsx = new Map([[`${indexC.length}`, sansG.length << (Math.min(2, indexC.length))]]);
         sansG = `${2 << (Math.min(1, blacklist7.length))}`;
         blacklist7 = `${(String.fromCharCode(115,0) == blacklist7 ? blacklist7.length : confirmationK)}`;
         confirmationK *= blacklist7.length;
      }
         trophyY += `${constantsx.size & trophyY.length}`;
         constantsx.set(`${zhengpianA}`, (constantsx.size - (zhengpianA ? 5 : 4)));
      while (trophyY.length >= 2) {
         trophyY = `${((zhengpianA ? 2 : 3) ^ 1)}`;
         break;
      }
      filter4 = "3";
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let privacyD = String.fromCharCode(112,104,114,97,115,101,115,0);
    let goalJ = 3.0;
    let trophy4 = String.fromCharCode(116,105,99,107,105,110,103,95,106,95,51,52,0);
    let texte = String.fromCharCode(112,114,111,99,95,101,95,53,50,0);
    let regengM: Map<any, any> = new Map([[String.fromCharCode(120,118,105,100,105,100,99,116,95,103,95,54,51,0),116], [String.fromCharCode(108,115,98,102,117,108,108,95,49,95,54,53,0),159], [String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,0),184]]);
    let dialogJ = 3.0;
    let halfe = 1.0;
    let stepQ = 5.0;
    let episodesC = String.fromCharCode(115,116,97,114,116,101,100,0);
    let crown2 = String.fromCharCode(97,100,100,105,116,105,118,101,95,114,95,50,49,0);
   let skipg = 7082171.0 >= halfe;
   do {
      halfe /= Math.max(parseInt(`${halfe}`) & regengM.size, 4);
      if (skipg) {
         break;
      }
   } while (((halfe - privacyD.length) >= 2.87) && skipg);
   while ((1 * privacyD.length) == 1 || (parseInt(`${goalJ}`) - privacyD.length) == 1) {
      privacyD += `${1 ^ parseInt(`${dialogJ}`)}`;
      break;
   }
   if (dialogJ <= parseFloat(`${texte.length}`)) {
      texte += `${parseInt(`${dialogJ}`) | regengM.size}`;
   }
      trophy4 = `${(String.fromCharCode(67,0) == texte ? trophy4.length : texte.length)}`;
      regengM.set(`${dialogJ}`, parseInt(`${halfe}`));
   let renew5 = 8764668.0 <= goalJ;
   do {
      goalJ *= 2 / (Math.max(parseInt(`${dialogJ}`), 4));
      if (renew5) {
         break;
      }
   } while (renew5 && (2.4 == (5.7 + goalJ) && 3 == (regengM.size + 1)));

        if (sortBy === 'asc') {

      privacyD += "1";
   if ((dialogJ / 4.18) >= 5.69) {
       let trasho = 4;
      for (let m = 0; m < 2; m++) {
         trasho *= 2;
      }
      if (4 >= (trasho | 3)) {
          let darkX: Array<any> = [8, 286, 85];
         trasho |= darkX.length * trasho;
      }
          let baiduu = false;
          let privacyM = 2.0;
          let twitterX = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,0);
         trasho += parseInt(`${privacyM}`) << (Math.min(twitterX.length, 4));
         baiduu = !baiduu;
         privacyM *= ((baiduu ? 1 : 2));
      dialogJ += parseFloat(`${parseInt(`${stepQ}`)}`);
   }
       let rankk = String.fromCharCode(109,98,112,111,115,116,0);
       let aboutb = String.fromCharCode(115,101,110,100,101,114,95,106,95,54,49,0);
       let a_position3: Map<any, any> = new Map([[String.fromCharCode(110,101,101,100,101,100,0),737], [String.fromCharCode(112,95,55,0),726]]);
      let windZ = a_position3.size <= 9888431;
      do {
          let mappingi = 4;
          let headerC = String.fromCharCode(115,116,114,108,101,110,0);
          let hongkongI = String.fromCharCode(110,101,108,108,121,0);
          let commentD = String.fromCharCode(119,95,55,55,95,98,97,99,107,115,108,97,115,104,0);
          let regengb = false;
         a_position3 = new Map([[headerC, (String.fromCharCode(122,0) == headerC ? headerC.length : mappingi)]]);
         mappingi &= 1 - commentD.length;
         hongkongI = `${hongkongI.length}`;
         commentD = `${((regengb ? 1 : 4) & commentD.length)}`;
         if (windZ) {
            break;
         }
      } while (windZ && ((a_position3.size | 2) > 5));
       let typesa = String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,0);
       let incident_ = false;
      while (typesa != String.fromCharCode(66,0)) {
          let singaporeN = String.fromCharCode(104,95,50,55,95,99,114,101,97,116,101,100,0);
          let androidG: Array<any> = [959, 210];
          let modityX = String.fromCharCode(115,95,51,51,95,108,97,110,103,115,0);
         rankk += `${aboutb.length}`;
         singaporeN = `${2 & androidG.length}`;
         androidG = [androidG.length];
         modityX = `${singaporeN.length >> (Math.min(5, androidG.length))}`;
         break;
      }
         incident_ = aboutb.length == 34;
      if (rankk.startsWith(aboutb)) {
         aboutb = "3";
      }
          let twitterk = 2.0;
         typesa += "2";
         twitterk *= 2 / (Math.max(6, parseInt(`${twitterk}`)));
      let mbsplashE = 8602119 >= aboutb.length;
      do {
         aboutb = `${((incident_ ? 5 : 4) << (Math.min(Math.abs(1), 1)))}`;
         if (mbsplashE) {
            break;
         }
      } while ((a_position3.size >= aboutb.length) && mbsplashE);
      while (1 < (typesa.length / (Math.max(5, 4)))) {
         typesa += `${aboutb.length % 3}`;
         break;
      }
      privacyD = `${texte.length}`;
   for (let l = 0; l < 2; l++) {
      regengM = new Map([[`${stepQ}`, parseInt(`${stepQ}`)]]);
   }
   for (let t = 0; t < 1; t++) {
       let philippinesm = String.fromCharCode(105,95,49,55,95,101,100,103,101,0);
       let modityM = 4.0;
       let blackD = String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,51,95,55,50,0);
       let huaweiH: Map<any, any> = new Map([[String.fromCharCode(121,117,108,101,0),540], [String.fromCharCode(99,111,110,110,101,99,116,101,100,95,104,95,49,53,0),486], [String.fromCharCode(101,115,99,97,112,101,115,0),693]]);
       let playercommonU = false;
          let tumbnailA = String.fromCharCode(100,101,99,114,101,97,115,105,110,103,0);
          let gradlewr: Map<any, any> = new Map([[String.fromCharCode(116,97,112,112,105,110,103,0),434], [String.fromCharCode(97,116,116,114,105,98,115,95,115,95,50,48,0),10], [String.fromCharCode(109,112,111,110,95,110,95,51,57,0),228]]);
          let gpayW = false;
         philippinesm = `${2 & tumbnailA.length}`;
         tumbnailA = `${gradlewr.size}`;
         gradlewr = new Map([[`${gradlewr.size}`, 1]]);
         playercommonU = huaweiH.get(`${playercommonU}`) == null;
      while (blackD == String.fromCharCode(105,0)) {
          let gifte: Array<any> = [String.fromCharCode(114,101,102,111,99,117,115,0), String.fromCharCode(99,108,97,105,109,0)];
          let hookq = 1.0;
          let scorei: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,116,109,112,0),159], [String.fromCharCode(108,95,49,57,95,116,111,107,101,110,110,102,116,116,120,0),298]]);
          let styleq = 3.0;
          let borderlessL = 5.0;
         philippinesm = `${huaweiH.size | 3}`;
         gifte.push(scorei.size);
         hookq *= parseFloat(`${parseInt(`${hookq}`) ^ parseInt(`${styleq}`)}`);
         scorei.set(`${hookq}`, parseInt(`${styleq}`));
         borderlessL *= 3;
         break;
      }
      let downloaderO = playercommonU ? !playercommonU : playercommonU;
      do {
         playercommonU = philippinesm.length <= 14 && blackD.length <= 14;
         if (downloaderO) {
            break;
         }
      } while (downloaderO && (blackD.length > 2 || !playercommonU));
         philippinesm += `${philippinesm.length}`;
      if (blackD == philippinesm) {
          let long_z_ = String.fromCharCode(97,95,53,95,98,97,107,101,100,0);
         philippinesm += `${2 & huaweiH.size}`;
         long_z_ = `${long_z_.length & 1}`;
      }
      while (!playercommonU) {
          let sound3 = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,103,95,50,54,0);
          let suggestionK = String.fromCharCode(97,110,99,104,111,114,115,0);
          let relatedv = String.fromCharCode(97,116,116,97,99,104,95,122,95,49,55,0);
         huaweiH.set(sound3, 2);
         sound3 = `${(suggestionK == String.fromCharCode(50,0) ? suggestionK.length : relatedv.length)}`;
         relatedv = `${suggestionK.length << (Math.min(4, relatedv.length))}`;
         break;
      }
      for (let k = 0; k < 3; k++) {
         blackD = `${(philippinesm == String.fromCharCode(95,0) ? philippinesm.length : (playercommonU ? 2 : 2))}`;
      }
         philippinesm += `${(parseInt(`${modityM}`) & (playercommonU ? 2 : 3))}`;
      let googleg = modityM <= 4951580.0;
      do {
         modityM += philippinesm.length << (Math.min(Math.abs(2), 1));
         if (googleg) {
            break;
         }
      } while (googleg && (modityM <= 2.73));
         modityM /= Math.max(4, parseInt(`${modityM}`) | 1);
      for (let z = 0; z < 2; z++) {
         playercommonU = !philippinesm.startsWith(`${playercommonU}`);
      }
      for (let t = 0; t < 1; t++) {
          let nativeexN: Array<any> = [777, 869];
          let tickedI = 4.0;
          let descn: Array<any> = [102, 372, 0];
          let grayR = 0.0;
          let mimoB = String.fromCharCode(110,95,56,51,95,104,97,110,110,105,110,103,0);
         huaweiH.set(blackD, blackD.length / 2);
         nativeexN.push(parseInt(`${tickedI}`) >> (Math.min(3, Math.abs(1))));
         tickedI /= Math.max(parseFloat(`${descn.length / (Math.max(2, 8))}`), 5);
         descn.push(parseInt(`${grayR}`) & descn.length);
         grayR += parseFloat(`${3}`);
         mimoB = `${descn.length}`;
      }
         philippinesm += `${parseInt(`${modityM}`)}`;
      for (let n = 0; n < 1; n++) {
         philippinesm += `${(parseInt(`${modityM}`) >> (Math.min(5, Math.abs((playercommonU ? 2 : 1)))))}`;
      }
      trophy4 = "2";
   }
   for (let v = 0; v < 3; v++) {
      halfe /= Math.max(4, parseInt(`${goalJ}`) >> (Math.min(Math.abs(parseInt(`${halfe}`)), 4)));
   }
            setSortBy('desc');
        } else {

      stepQ /= Math.max(3 ^ regengM.size, 3);
       let foregroundc: Array<any> = [884, 953];
       let condensedo = 5;
      let friendsX = condensedo <= 9327959;
      do {
          let typingz = 5.0;
         condensedo %= Math.max(4, condensedo % 3);
         typingz -= parseFloat(`${1 / (Math.max(2, parseInt(`${typingz}`)))}`);
         if (friendsX) {
            break;
         }
      } while (friendsX && (foregroundc.length == condensedo));
      for (let y = 0; y < 2; y++) {
          let detailsB = 4;
          let sliderJ = 0.0;
          let floater1: Map<any, any> = new Map([[String.fromCharCode(118,95,53,50,95,99,105,118,105,108,0),String.fromCharCode(115,116,117,98,95,109,95,55,0)], [String.fromCharCode(120,95,53,55,95,104,105,103,104,108,105,103,116,101,100,0),String.fromCharCode(99,111,101,102,102,0)]]);
          let malaysiaj = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,48,95,57,56,0);
          let bellv: Array<any> = [511, 929, 722];
         condensedo |= bellv.length;
         detailsB += malaysiaj.length;
         sliderJ /= Math.max(malaysiaj.length, 5);
         floater1 = new Map([[`${floater1.size}`, floater1.size]]);
         bellv.push((malaysiaj == String.fromCharCode(107,0) ? detailsB : malaysiaj.length));
      }
      while ((4 ^ foregroundc.length) >= 1) {
          let buildz = 0;
          let privilege0 = String.fromCharCode(102,95,50,95,102,97,117,108,116,121,0);
         condensedo >>= Math.min(Math.abs(2 % (Math.max(7, buildz))), 3);
         buildz += (String.fromCharCode(68,0) == privilege0 ? privilege0.length : privilege0.length);
         break;
      }
      while (foregroundc.includes(condensedo)) {
          let anytime4 = String.fromCharCode(108,95,53,55,95,118,112,99,99,0);
          let selectj = true;
         foregroundc = [2];
         anytime4 = `${anytime4.length & 1}`;
         selectj = anytime4.length > anytime4.length;
         break;
      }
      if (!foregroundc.includes(condensedo)) {
          let fielda = 5;
          let grayK = 0;
          let moviesa = String.fromCharCode(112,103,115,122,0);
          let pangleI = String.fromCharCode(112,97,114,97,115,101,116,0);
         foregroundc = [foregroundc.length];
         fielda ^= moviesa.length;
         grayK &= (String.fromCharCode(104,0) == pangleI ? grayK : pangleI.length);
         moviesa += `${pangleI.length | 2}`;
      }
       let line6: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,120,0),true ], [String.fromCharCode(118,95,52,95,116,108,117,116,0),true ]]);
      halfe += 1 >> (Math.min(Math.abs(parseInt(`${stepQ}`)), 2));
      regengM.set(`${dialogJ}`, parseInt(`${dialogJ}`));
      trophy4 += "2";
      stepQ /= Math.max((String.fromCharCode(112,0) == texte ? trophy4.length : texte.length), 5);
      privacyD += `${trophy4.length}`;
            setSortBy('asc');
        }
    }

    const renderItem = useCallback(({ item, index }: { item: string, index: number }) => {
        return <TouchableOpacity activeOpacity={0.85} style={styles.btn} onPress={() => setCurrentIndex(index)}>
            <Text
                style={{
                    textAlign: 'center', ...textVariants.header,
                    color: index === currentIndex ? colors.text : colors.muted,
                    fontSize: index === currentIndex ? 18 : 15
                }}>
                {`${item}集`}
            </Text>
        </TouchableOpacity>
    }, []);

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
                    renderItem={renderItem}
                />
                {/* <TouchableOpacity activeOpacity={0.85} style={styles.sortBtn} onPress={sort}>
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
                        <TouchableOpacity activeOpacity={0.85} key={`expand-${idx}`} onPress={() => {
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