import React, {Suspense, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import VipModal from './wawa_scorepopsound';
import {useNavigation, useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '@hooks/wawa_root';
import {showLoginAction} from '@redux/actions/wawa_related';

interface wawaAwayShow {
  remainingDay: number;
  showVIPOverlay: boolean;
  setShowVIPOverlay: any;
}

export default function ExpiredOverlay({
  remainingDay = 0,
  showVIPOverlay = false,
  setShowVIPOverlay = () => {
       let iconclosewhitewithbgm = 3;
    let textlayoutmanagerG = String.fromCharCode(111,95,50,95,105,115,116,114,101,97,109,0);
    let teamdetailsbgi = 0.0;
    let basketballplayerplaceholder5 = 3.0;
    let arrowrightm = true;
    let manifestW = String.fromCharCode(121,95,49,54,95,116,101,116,114,97,104,101,100,114,97,108,0);
    let eventf = 0.0;
    let iconlogoute = String.fromCharCode(100,101,115,104,97,107,101,95,119,95,57,56,0);
    let notificationgray_: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,112,114,101,118,105,101,119,101,100,0),String.fromCharCode(99,111,112,121,102,100,95,53,95,50,53,0)], [String.fromCharCode(113,95,55,51,95,114,101,103,101,120,0),String.fromCharCode(103,95,53,48,95,105,110,118,111,107,101,0)], [String.fromCharCode(105,95,54,52,95,104,105,103,104,108,105,103,104,116,101,114,0),String.fromCharCode(109,117,116,97,116,105,111,110,95,102,95,50,54,0)]]);
    let sigmobj = 2;
    let backe = 3;
      arrowrightm = 52 < textlayoutmanagerG.length;
       let crossm = 3.0;
       let thailandE = true;
       let foregroundJ = String.fromCharCode(100,117,114,98,95,53,95,54,50,0);
         crossm -= foregroundJ.length / (Math.max(3, 5));
          let jingdongv = 4;
         foregroundJ += `${(3 * (thailandE ? 1 : 3))}`;
         jingdongv <<= Math.min(Math.abs(jingdongv), 1);
      for (let g = 0; g < 2; g++) {
         thailandE = foregroundJ.length > 86;
      }
      while (foregroundJ.length > 3) {
         thailandE = 24.5 < crossm;
         break;
      }
      let defaultteamh = 6544171.0 <= crossm;
      do {
         crossm *= 1 >> (Math.min(Math.abs(parseInt(`${crossm}`)), 1));
         if (defaultteamh) {
            break;
         }
      } while (defaultteamh && (2.30 <= crossm));
      let wifirouter8 = thailandE ? !thailandE : thailandE;
      do {
          let downb = String.fromCharCode(110,95,54,53,95,98,105,100,105,114,0);
          let dist8 = String.fromCharCode(101,120,112,108,97,105,110,95,98,95,50,54,0);
          let reminder9 = 1;
          let uimanagerN = String.fromCharCode(101,95,56,52,95,97,99,99,101,108,101,114,97,116,101,100,0);
          let register_hlI = 2.0;
         thailandE = (reminder9 * crossm) <= 36;
         downb = `${uimanagerN.length | dist8.length}`;
         dist8 += `${downb.length}`;
         reminder9 *= dist8.length;
         uimanagerN = `${dist8.length}`;
         register_hlI -= parseInt(`${register_hlI}`) >> (Math.min(uimanagerN.length, 3));
         if (wifirouter8) {
            break;
         }
      } while ((!thailandE) && wifirouter8);
       let catalogw = String.fromCharCode(103,95,51,48,95,116,111,117,116,0);
       let statistics7 = String.fromCharCode(103,114,101,121,115,95,98,95,54,54,0);
         thailandE = !thailandE;
      for (let e = 0; e < 2; e++) {
         statistics7 += `${(String.fromCharCode(110,0) == foregroundJ ? (thailandE ? 1 : 3) : foregroundJ.length)}`;
      }
      iconclosewhitewithbgm |= 1;
      arrowrightm = notificationgray_.get(`${eventf}`) != null;
       let linex = 5.0;
       let libhermesK = 1;
      let buildt = 5156113 <= libhermesK;
      do {
          let plusg = String.fromCharCode(101,120,101,99,117,116,101,95,48,95,49,57,0);
          let chinasamex: Map<any, any> = new Map([[String.fromCharCode(122,95,55,54,95,102,114,97,109,101,119,111,114,107,0),672], [String.fromCharCode(99,111,109,109,105,116,95,49,95,53,51,0),883], [String.fromCharCode(103,95,50,52,95,115,110,97,107,101,0),25]]);
          let dependency8 = 1;
          let footballfielda = 0.0;
         libhermesK *= parseInt(`${footballfielda}`);
         plusg = `${chinasamex.size}`;
         chinasamex = new Map([[`${dependency8}`, (String.fromCharCode(54,0) == plusg ? dependency8 : plusg.length)]]);
         footballfielda /= Math.max(parseFloat(`${chinasamex.size * dependency8}`), 3);
         if (buildt) {
            break;
         }
      } while ((linex <= libhermesK) && buildt);
      let changey = libhermesK >= 5359600;
      do {
         libhermesK %= Math.max(4, parseInt(`${linex}`));
         if (changey) {
            break;
         }
      } while (changey && (1.15 <= (linex / (Math.max(7, libhermesK)))));
          let graphicsx = String.fromCharCode(115,97,110,100,98,111,120,95,48,95,55,52,0);
          let materialB: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,98,105,116,109,97,112,0),String.fromCharCode(99,95,57,55,95,114,101,118,97,108,105,100,97,116,101,0)], [String.fromCharCode(101,108,115,101,95,107,95,51,56,0),String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,57,95,52,56,0)], [String.fromCharCode(97,108,101,114,116,95,106,95,55,53,0),String.fromCharCode(99,111,109,112,111,110,101,110,116,95,115,95,51,51,0)]]);
         libhermesK <<= Math.min(Math.abs(3), 5);
         graphicsx = "2";
         materialB.set(`${graphicsx}`, graphicsx.length << (Math.min(1, Math.abs(materialB.size))));
      let rocketp = linex <= 7333046.0;
      do {
         linex /= Math.max(libhermesK, 4);
         if (rocketp) {
            break;
         }
      } while (rocketp && ((2.26 - linex) == 3.13 || (linex - 2.26) == 2.20));
       let lcopy__hu: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,115,95,99,95,50,50,0),602], [String.fromCharCode(114,101,109,97,112,112,101,100,95,103,95,54,56,0),466], [String.fromCharCode(118,101,114,116,105,99,101,115,95,56,95,56,55,0),25]]);
       let iconbellactivek: Map<any, any> = new Map([[String.fromCharCode(112,117,115,104,95,120,95,52,57,0),343], [String.fromCharCode(105,110,99,108,117,100,101,95,108,95,56,57,0),846]]);
      let iconnointernetx = lcopy__hu.size <= 5219780;
      do {
          let iconnotificationnewh = 0.0;
          let icondownimgW: Array<any> = [134, 740, 327];
         lcopy__hu = new Map([[`${linex}`, 2 % (Math.max(1, parseInt(`${linex}`)))]]);
         iconnotificationnewh += icondownimgW.length;
         icondownimgW = [3 - icondownimgW.length];
         if (iconnointernetx) {
            break;
         }
      } while (iconnointernetx && (5 <= (3 & lcopy__hu.size) || (lcopy__hu.size & 3) <= 4));
      teamdetailsbgi += sigmobj;
       let vertical1: Array<any> = [519, 500];
       let homeloadinge: Map<any, any> = new Map([[String.fromCharCode(111,95,53,56,95,100,114,97,119,108,105,110,101,0),String.fromCharCode(121,95,49,95,99,105,110,118,105,100,101,111,0)], [String.fromCharCode(100,95,55,57,95,114,101,99,105,112,105,101,110,116,0),String.fromCharCode(99,95,51,55,95,109,111,118,105,110,103,0)]]);
       let wnewsshareP = String.fromCharCode(117,95,54,48,95,111,117,116,112,117,116,113,0);
       let neone = 4;
         homeloadinge.set(`${neone}`, (wnewsshareP == String.fromCharCode(55,0) ? wnewsshareP.length : neone));
         homeloadinge.set(`${neone}`, 2 << (Math.min(3, Math.abs(homeloadinge.size))));
      let info3 = homeloadinge.size >= 9268023;
      do {
         homeloadinge = new Map([[`${homeloadinge.size}`, 2]]);
         if (info3) {
            break;
         }
      } while (info3 && ((wnewsshareP.length << (Math.min(Math.abs(5), 2))) >= 2));
      let nterstitial4 = 5412286 <= vertical1.length;
      do {
         vertical1 = [vertical1.length];
         if (nterstitial4) {
            break;
         }
      } while ((homeloadinge.get(`${vertical1.length}`) != null) && nterstitial4);
      let executorD = 5543027 <= wnewsshareP.length;
      do {
         wnewsshareP = `${homeloadinge.size % (Math.max(2, 7))}`;
         if (executorD) {
            break;
         }
      } while ((wnewsshareP.endsWith(`${vertical1.length}`)) && executorD);
         homeloadinge.set(`${neone}`, neone << (Math.min(wnewsshareP.length, 4)));
         homeloadinge.set(wnewsshareP, 1);
      while (wnewsshareP.includes(`${neone}`)) {
         neone ^= 1;
         break;
      }
      arrowrightm = 10 > homeloadinge.size;
   while (3 > (5 - sigmobj) && arrowrightm) {
      sigmobj ^= 2;
      break;
   }
   for (let s = 0; s < 1; s++) {
       let hiadF = String.fromCharCode(114,101,119,105,110,100,95,116,95,57,51,0);
      for (let v = 0; v < 1; v++) {
         hiadF += `${(String.fromCharCode(118,0) == hiadF ? hiadF.length : hiadF.length)}`;
      }
      if (hiadF.length == 5) {
         hiadF += `${hiadF.length}`;
      }
         hiadF = `${hiadF.length ^ 2}`;
      backe *= 2;
   }
      textlayoutmanagerG += `${((arrowrightm ? 4 : 5))}`;
      textlayoutmanagerG = `${parseInt(`${teamdetailsbgi}`)}`;
      iconlogoute = `${notificationgray_.size - 1}`;
   while ((textlayoutmanagerG.length | backe) < 5) {
      textlayoutmanagerG = `${parseInt(`${basketballplayerplaceholder5}`)}`;
      break;
   }
       let statsR = String.fromCharCode(101,103,119,105,116,95,100,95,54,56,0);
      if (3 > statsR.length || statsR == String.fromCharCode(114,0)) {
          let statisticsactiveQ = 4.0;
          let guideF: Map<any, any> = new Map([[String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,101,95,51,51,0),792], [String.fromCharCode(97,108,116,101,114,101,100,95,104,95,49,53,0),342]]);
         statsR += `${guideF.size}`;
         statisticsactiveQ /= Math.max(parseFloat(`${parseInt(`${statisticsactiveQ}`) % (Math.max(6, parseInt(`${statisticsactiveQ}`)))}`), 5);
         guideF = new Map([[`${statisticsactiveQ}`, parseInt(`${statisticsactiveQ}`) >> (Math.min(4, Math.abs(parseInt(`${statisticsactiveQ}`))))]]);
      }
       let vietnamH: Array<any> = [822, 971, 717];
      if (statsR.includes(`${vietnamH.length}`)) {
          let rncoreE: Map<any, any> = new Map([[String.fromCharCode(99,95,56,56,95,101,109,117,108,97,116,105,111,110,0),501], [String.fromCharCode(110,95,55,56,95,116,104,114,111,116,116,108,105,110,103,0),822]]);
          let privilegei = String.fromCharCode(115,104,114,117,110,107,95,54,95,52,48,0);
         statsR = `${statsR.length / (Math.max(2, 10))}`;
         rncoreE = new Map([[`${rncoreE.size}`, 2 - privilegei.length]]);
         privilegei = "3";
      }
      textlayoutmanagerG = `${2 - statsR.length}`;
       let homeu = String.fromCharCode(104,95,54,54,95,112,101,114,99,101,110,116,105,108,101,0);
         homeu += "1";
         homeu += `${(homeu == String.fromCharCode(69,0) ? homeu.length : homeu.length)}`;
         homeu = `${homeu.length ^ 1}`;
      basketballplayerplaceholder5 += (parseFloat(`${parseInt(`${teamdetailsbgi}`) | (arrowrightm ? 2 : 1)}`));
   while (4.72 >= (eventf / 3.99) && 5.7 >= (eventf / 3.99)) {
       let mailq = String.fromCharCode(99,117,108,115,104,105,102,116,95,114,95,53,48,0);
       let iconmorez = String.fromCharCode(103,101,111,98,116,97,103,95,56,95,57,51,0);
       let floatingI = 5.0;
       let textd = 1.0;
      if (5.46 > (textd / (Math.max(8, floatingI))) || 5.46 > (floatingI / (Math.max(1, textd)))) {
         textd += parseFloat(`${2}`);
      }
      if ((1.53 * floatingI) == 1.43) {
         floatingI /= Math.max(2, 1);
      }
          let libavutilH = 2;
          let arrowselectdown2: Array<any> = [611, 590];
          let footballtrophyw = String.fromCharCode(101,115,99,97,112,101,95,105,95,57,48,0);
         floatingI /= Math.max(4, iconmorez.length);
         libavutilH |= libavutilH - arrowselectdown2.length;
         arrowselectdown2.push(footballtrophyw.length / 1);
         footballtrophyw += "1";
      while (3 >= iconmorez.length) {
         mailq += `${iconmorez.length}`;
         break;
      }
      let feedbackr = String.fromCharCode(55,117,104,105,115,50,55,0) == iconmorez;
      do {
         iconmorez += `${iconmorez.length & mailq.length}`;
         if (feedbackr) {
            break;
         }
      } while ((2 > (iconmorez.length * 1)) && feedbackr);
       let auto_j6 = 0.0;
          let viewsD = true;
         auto_j6 += parseInt(`${textd}`);
         viewsD = !viewsD;
         textd += parseFloat(`${parseInt(`${textd}`) << (Math.min(Math.abs(parseInt(`${auto_j6}`)), 1))}`);
         mailq = `${(iconmorez == String.fromCharCode(81,0) ? parseInt(`${floatingI}`) : iconmorez.length)}`;
      if (2.27 < auto_j6) {
         auto_j6 *= iconmorez.length << (Math.min(Math.abs(2), 1));
      }
      if (4.27 < (textd + 2.22) || (textd + 2.22) < 1.64) {
         auto_j6 *= parseInt(`${floatingI}`);
      }
         floatingI += iconmorez.length;
      sigmobj *= 3 - iconclosewhitewithbgm;
      break;
   }
      basketballplayerplaceholder5 += (parseFloat(`${(arrowrightm ? 5 : 3)}`));
       let defaultbasketballbgz = String.fromCharCode(118,95,54,55,95,99,98,112,104,105,0);
       let calendard = 0.0;
      let collectionW = defaultbasketballbgz == String.fromCharCode(109,108,109,102,103,97,56,0);
      do {
          let nalyticsL = String.fromCharCode(108,111,111,112,101,120,105,116,95,115,95,56,49,0);
          let libsentryU: Array<any> = [764, 302];
          let windf = 5;
          let orangex = String.fromCharCode(118,105,111,108,101,116,95,112,95,57,56,0);
          let teamdetailsbgB = false;
         defaultbasketballbgz += "1";
         nalyticsL += `${libsentryU.length}`;
         libsentryU = [1];
         windf *= 3;
         orangex += `${orangex.length}`;
         teamdetailsbgB = libsentryU.length == nalyticsL.length;
         if (collectionW) {
            break;
         }
      } while (collectionW && (defaultbasketballbgz.includes(`${calendard}`)));
         defaultbasketballbgz = `${defaultbasketballbgz.length << (Math.min(1, Math.abs(parseInt(`${calendard}`))))}`;
      while (5 >= (3 << (Math.min(5, defaultbasketballbgz.length)))) {
         calendard += parseFloat(`${3 & parseInt(`${calendard}`)}`);
         break;
      }
      if ((2 & defaultbasketballbgz.length) > 4 || 3 > (defaultbasketballbgz.length | 2)) {
         defaultbasketballbgz += `${(String.fromCharCode(72,0) == defaultbasketballbgz ? defaultbasketballbgz.length : parseInt(`${calendard}`))}`;
      }
      while (defaultbasketballbgz.endsWith(`${calendard}`)) {
          let area5: Array<any> = [80, 981];
         calendard /= Math.max(2, parseFloat(`${area5.length % 2}`));
         break;
      }
          let minimizeQ = 2.0;
          let sharedK = 1.0;
          let combinedD: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,115,95,56,95,56,54,0),String.fromCharCode(101,95,54,55,95,107,97,110,110,97,0)], [String.fromCharCode(105,110,116,101,114,108,101,97,118,105,110,103,95,55,95,52,55,0),String.fromCharCode(97,112,112,114,111,118,101,114,95,115,95,51,0)]]);
         calendard /= Math.max(3, parseFloat(`${2 | parseInt(`${minimizeQ}`)}`));
         minimizeQ += parseFloat(`${1}`);
         sharedK += combinedD.size & parseInt(`${sharedK}`);
         combinedD.set(`${sharedK}`, parseInt(`${sharedK}`) * combinedD.size);
      manifestW += `${parseInt(`${basketballplayerplaceholder5}`) + 3}`;
   let static_sol = textlayoutmanagerG == String.fromCharCode(116,52,116,0);
   do {
      textlayoutmanagerG += `${2 >> (Math.min(2, textlayoutmanagerG.length))}`;
      if (static_sol) {
         break;
      }
   } while ((arrowrightm || 2 == textlayoutmanagerG.length) && static_sol);
   if (5 > (manifestW.length * parseInt(`${basketballplayerplaceholder5}`))) {
       let defaultprofilepicS: Array<any> = [String.fromCharCode(100,101,116,97,105,108,95,107,95,51,53,0), String.fromCharCode(115,95,50,55,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0)];
      while ((defaultprofilepicS.length % 4) == 4) {
         defaultprofilepicS.push(3);
         break;
      }
         defaultprofilepicS.push(defaultprofilepicS.length / (Math.max(2, 10)));
      while ((4 - defaultprofilepicS.length) >= 5 && (defaultprofilepicS.length - defaultprofilepicS.length) >= 4) {
         defaultprofilepicS.push(3);
         break;
      }
      manifestW = `${manifestW.length}`;
   }
      basketballplayerplaceholder5 /= Math.max(parseFloat(`${textlayoutmanagerG.length + parseInt(`${basketballplayerplaceholder5}`)}`), 2);
   for (let r = 0; r < 1; r++) {
       let pusha = false;
       let bufferh = String.fromCharCode(120,95,49,53,95,99,111,110,116,97,105,110,115,0);
       let modityM: Array<any> = [872, 640];
      let iconnewchatu = 9792494 <= modityM.length;
      do {
         modityM.push((bufferh == String.fromCharCode(51,0) ? bufferh.length : modityM.length));
         if (iconnewchatu) {
            break;
         }
      } while ((5 > (bufferh.length % (Math.max(9, modityM.length))) && 1 > (5 % (Math.max(4, bufferh.length)))) && iconnewchatu);
         pusha = !pusha;
         bufferh += `${2 | bufferh.length}`;
         pusha = modityM.length >= 23;
      let calendarG = 7342480 >= modityM.length;
      do {
          let untickw = 2.0;
          let filterr = 0.0;
         modityM.push(bufferh.length | modityM.length);
         untickw *= parseInt(`${untickw}`) / (Math.max(parseInt(`${filterr}`), 2));
         filterr -= 2;
         if (calendarG) {
            break;
         }
      } while ((!pusha) && calendarG);
         bufferh += `${modityM.length ^ 2}`;
          let othermatchdetailbg6 = 1.0;
          let loginsuccessQ = String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,54,95,51,48,0);
         bufferh += `${parseInt(`${othermatchdetailbg6}`)}`;
         othermatchdetailbg6 *= parseFloat(`${loginsuccessQ.length / (Math.max(6, loginsuccessQ.length))}`);
          let routerH = String.fromCharCode(99,95,49,57,95,97,117,116,111,100,111,119,110,108,111,97,100,0);
          let countryr = 1.0;
          let leagueD = String.fromCharCode(115,97,103,97,95,57,95,51,53,0);
         pusha = routerH.length <= 77;
         routerH += `${(String.fromCharCode(72,0) == leagueD ? leagueD.length : parseInt(`${countryr}`))}`;
         countryr += parseFloat(`${2}`);
      let downarrowe = modityM.length <= 8405348;
      do {
         modityM = [bufferh.length];
         if (downarrowe) {
            break;
         }
      } while ((3 == (bufferh.length % 3)) && downarrowe);
      basketballplayerplaceholder5 -= parseFloat(`${sigmobj >> (Math.min(Math.abs(1), 4))}`);
   }
      teamdetailsbgi *= (iconlogoute == String.fromCharCode(77,0) ? iconlogoute.length : backe);
   while (iconlogoute.length <= 3) {
      arrowrightm = textlayoutmanagerG.length <= notificationgray_.size;
      break;
   }
   for (let g = 0; g < 2; g++) {
       let collectionU = String.fromCharCode(120,109,112,101,103,95,49,95,52,48,0);
       let analyticG = 1;
       let imagemanagerS = String.fromCharCode(112,97,99,107,95,110,95,54,51,0);
       let blackz = String.fromCharCode(110,95,52,57,95,103,101,111,107,101,121,0);
         analyticG += blackz.length;
         imagemanagerS += `${blackz.length + 2}`;
      for (let j = 0; j < 2; j++) {
         analyticG ^= (String.fromCharCode(84,0) == imagemanagerS ? imagemanagerS.length : analyticG);
      }
         imagemanagerS += `${blackz.length + imagemanagerS.length}`;
         imagemanagerS = `${imagemanagerS.length - 1}`;
      for (let e = 0; e < 3; e++) {
          let awayB = 5.0;
          let iconcalendar9: Array<any> = [251, 457];
         imagemanagerS = `${(blackz == String.fromCharCode(73,0) ? blackz.length : parseInt(`${awayB}`))}`;
         awayB -= parseFloat(`${iconcalendar9.length}`);
         iconcalendar9 = [iconcalendar9.length];
      }
         imagemanagerS += `${collectionU.length & analyticG}`;
          let showmore5 = 0.0;
         imagemanagerS += `${imagemanagerS.length}`;
         showmore5 += parseFloat(`${parseInt(`${showmore5}`)}`);
       let libcrashsdkr = false;
      while (4 >= (analyticG << (Math.min(Math.abs(3), 1))) || (3 << (Math.min(3, imagemanagerS.length))) >= 1) {
         imagemanagerS = `${3 ^ analyticG}`;
         break;
      }
         blackz += `${imagemanagerS.length}`;
          let incidentJ = 4.0;
         libcrashsdkr = analyticG == 87 && String.fromCharCode(113,0) == imagemanagerS;
         incidentJ *= parseFloat(`${2}`);
      sigmobj |= sigmobj + textlayoutmanagerG.length;
   }
       let scrollviewP = String.fromCharCode(102,95,57,56,95,99,111,108,108,97,112,115,105,110,103,0);
       let predictionlossc: Map<any, any> = new Map([[String.fromCharCode(111,95,54,51,95,110,111,116,97,116,105,111,110,0),320], [String.fromCharCode(100,95,57,95,110,97,109,101,115,101,114,118,101,114,115,0),976]]);
       let detailsL = 0.0;
          let n_hashj: Map<any, any> = new Map([[String.fromCharCode(105,95,54,48,95,110,111,109,105,110,97,116,101,0),false ], [String.fromCharCode(102,95,51,57,95,97,108,97,114,109,0),false ]]);
          let tempnodataO = String.fromCharCode(122,95,56,53,95,98,105,110,107,98,0);
         scrollviewP = `${(tempnodataO == String.fromCharCode(100,0) ? parseInt(`${detailsL}`) : tempnodataO.length)}`;
         n_hashj = new Map([[`${n_hashj.size}`, n_hashj.size]]);
      if ((scrollviewP.length * parseInt(`${detailsL}`)) > 1) {
          let viewsP: Map<any, any> = new Map([[String.fromCharCode(115,95,52,50,95,108,101,116,116,101,114,115,0),String.fromCharCode(103,97,112,115,95,49,95,51,54,0)], [String.fromCharCode(100,101,108,101,116,105,110,103,95,52,95,52,56,0),String.fromCharCode(122,95,55,95,108,97,121,101,114,115,0)], [String.fromCharCode(109,95,52,52,95,100,105,115,116,97,110,99,101,0),String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,95,121,95,55,57,0)]]);
          let icontransferclubK = 2.0;
          let static_wI = String.fromCharCode(106,95,56,51,95,101,120,97,109,112,108,101,115,0);
          let sendx: Array<any> = [361, 143];
         detailsL *= 1;
         viewsP.set(static_wI, 3 << (Math.min(4, sendx.length)));
         icontransferclubK /= Math.max(sendx.length | static_wI.length, 1);
      }
      let dacccfaabfbcbadeebddcabacdffdb4 = detailsL <= 9796245.0;
      do {
         detailsL -= predictionlossc.size | 2;
         if (dacccfaabfbcbadeebddcabacdffdb4) {
            break;
         }
      } while ((predictionlossc.get(`${detailsL}`) != null) && dacccfaabfbcbadeebddcabacdffdb4);
         detailsL -= predictionlossc.size % (Math.max(scrollviewP.length, 5));
      let expandR = scrollviewP == String.fromCharCode(112,101,114,0);
      do {
          let iconarrowright4 = String.fromCharCode(97,108,116,105,118,101,99,95,50,95,55,54,0);
          let uimanager7 = String.fromCharCode(99,95,54,95,109,97,103,101,0);
          let networkr = 0;
          let buildY = String.fromCharCode(118,95,50,52,95,116,111,108,108,0);
         scrollviewP += `${predictionlossc.size}`;
         iconarrowright4 = `${buildY.length}`;
         uimanager7 += `${2 | buildY.length}`;
         networkr /= Math.max(networkr, 5);
         if (expandR) {
            break;
         }
      } while ((2 >= (scrollviewP.length ^ 1) && (scrollviewP.length ^ predictionlossc.size) >= 1) && expandR);
      if (predictionlossc.size == scrollviewP.length) {
         predictionlossc.set(`${detailsL}`, predictionlossc.size >> (Math.min(Math.abs(1), 3)));
      }
         scrollviewP = `${3 * scrollviewP.length}`;
      while (predictionlossc.get(`${detailsL}`) == null) {
         predictionlossc = new Map([[`${predictionlossc.size}`, 2]]);
         break;
      }
         detailsL -= scrollviewP.length + 1;
      arrowrightm = 72.75 > (basketballplayerplaceholder5 - eventf);
       let libjsinspectoro = 5;
       let ballI = 4;
       let components6 = 3.0;
      if (2 < (libjsinspectoro >> (Math.min(5, Math.abs(ballI))))) {
         libjsinspectoro /= Math.max(parseInt(`${components6}`) / 2, 2);
      }
      for (let p = 0; p < 3; p++) {
          let libfbg = 5;
          let profileframeZ = String.fromCharCode(113,95,56,54,95,116,101,114,109,105,110,97,116,105,110,103,0);
          let filel = 5.0;
          let verticaln = 5.0;
         libjsinspectoro -= ballI;
         libfbg -= parseInt(`${verticaln}`);
         profileframeZ = `${libfbg}`;
         filel -= parseFloat(`${libfbg}`);
         verticaln += parseInt(`${filel}`) & 3;
      }
         ballI &= parseInt(`${components6}`);
      if (1 <= (5 >> (Math.min(1, Math.abs(ballI)))) && 1.45 <= (components6 / 3.11)) {
         ballI &= libjsinspectoro;
      }
      for (let x = 0; x < 2; x++) {
         components6 -= ballI;
      }
         libjsinspectoro &= ballI >> (Math.min(3, Math.abs(3)));
      let modeG = 7440146 <= ballI;
      do {
          let basketballtrophyD: Map<any, any> = new Map([[String.fromCharCode(105,95,52,56,95,117,110,105,118,101,114,115,97,108,0),false ], [String.fromCharCode(112,108,105,115,116,95,110,95,51,48,0),true ]]);
          let emojij: Array<any> = [880, 206];
          let libsgcorey = true;
         ballI %= Math.max(basketballtrophyD.size << (Math.min(Math.abs(2), 4)), 5);
         basketballtrophyD.set(`${libsgcorey}`, (emojij.length % (Math.max(2, (libsgcorey ? 5 : 2)))));
         emojij.push(emojij.length);
         if (modeG) {
            break;
         }
      } while (modeG && (1 >= (parseInt(`${components6}`) - ballI) || (components6 - 1.30) >= 4.67));
       let stats_ = false;
       let appsW = true;
      for (let d = 0; d < 2; d++) {
         ballI %= Math.max(libjsinspectoro, 3);
      }
      teamdetailsbgi -= libjsinspectoro * 3;
   if (manifestW == String.fromCharCode(103,0)) {
       let profilepicu = 5.0;
       let flyerC = String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,105,95,53,54,0);
      for (let r = 0; r < 3; r++) {
         profilepicu -= parseFloat(`${flyerC.length ^ parseInt(`${profilepicu}`)}`);
      }
          let webviewU = 1.0;
          let singapore4 = false;
         flyerC += `${((singapore4 ? 5 : 1))}`;
         webviewU /= Math.max(4, parseFloat(`${parseInt(`${webviewU}`)}`));
         singapore4 = 28.99 > (webviewU - webviewU);
      while (parseInt(`${profilepicu}`) >= flyerC.length) {
          let iconcurrentmatch4 = String.fromCharCode(99,97,108,108,105,110,103,95,52,95,53,54,0);
          let previewN = 1;
         profilepicu -= parseFloat(`${flyerC.length}`);
         iconcurrentmatch4 = "2";
         previewN /= Math.max(2, previewN);
         break;
      }
         profilepicu -= parseFloat(`${flyerC.length - 1}`);
         profilepicu += parseFloat(`${parseInt(`${profilepicu}`) * 3}`);
       let skipT: Array<any> = [116, 40, 113];
       let list1: Array<any> = [String.fromCharCode(119,95,53,56,95,97,108,108,111,99,122,0), String.fromCharCode(103,95,54,95,115,105,110,101,0)];
      iconlogoute = `${textlayoutmanagerG.length & 3}`;
   }
   let awayteamfieldT = arrowrightm ? !arrowrightm : arrowrightm;
   do {
      arrowrightm = (parseInt(`${teamdetailsbgi}`) - textlayoutmanagerG.length) >= 66;
      if (awayteamfieldT) {
         break;
      }
   } while ((!iconlogoute.includes(`${arrowrightm}`)) && awayteamfieldT);
      notificationgray_ = new Map([[`${notificationgray_.size}`, 3 * sigmobj]]);
   while (2 > (5 + iconclosewhitewithbgm)) {
       let rncoreV: Array<any> = [992, 402];
       let sortY = true;
       let downloadedx: Array<any> = [71, 285, 605];
       let historyN = true;
       let overlayF = 5.0;
      let binddatasP = historyN ? !historyN : historyN;
      do {
          let shootr = 5;
          let gift8 = String.fromCharCode(99,109,111,118,95,111,95,49,48,0);
         historyN = gift8.startsWith(`${overlayF}`);
         shootr %= Math.max(5, shootr >> (Math.min(5, Math.abs(shootr))));
         gift8 = `${3 & shootr}`;
         if (binddatasP) {
            break;
         }
      } while ((historyN) && binddatasP);
         rncoreV.push(1);
       let libzeusG = 1;
      while (!sortY) {
         rncoreV.push(1);
         break;
      }
      for (let n = 0; n < 1; n++) {
         libzeusG += ((sortY ? 5 : 5) * rncoreV.length);
      }
       let basketballtrophyy = 3.0;
      if ((rncoreV.length & 2) == 1) {
          let nativemodulec: Map<any, any> = new Map([[String.fromCharCode(116,95,51,54,95,109,97,105,108,99,104,105,109,112,0),true ], [String.fromCharCode(113,95,50,95,100,97,97,108,97,0),false ]]);
         sortY = (((!historyN ? 39 : downloadedx.length) << (Math.min(downloadedx.length, 2))) < 39);
         nativemodulec = new Map([[`${nativemodulec.size}`, nativemodulec.size]]);
      }
          let checkboxe = String.fromCharCode(115,116,121,108,101,95,57,95,52,0);
          let areaN = String.fromCharCode(116,116,97,100,115,112,95,106,95,49,53,0);
          let whitetickA = String.fromCharCode(100,95,49,57,95,101,120,112,111,110,101,110,116,115,0);
         downloadedx = [3 / (Math.max(7, checkboxe.length))];
         checkboxe += `${areaN.length / 2}`;
         areaN = `${whitetickA.length}`;
         whitetickA = `${areaN.length}`;
      let switch_x6c = downloadedx.length <= 9209812;
      do {
         downloadedx = [parseInt(`${basketballtrophyy}`)];
         if (switch_x6c) {
            break;
         }
      } while (switch_x6c && (5 > (downloadedx.length * 4) && (downloadedx.length % 4) > 2));
         libzeusG ^= ((historyN ? 3 : 5));
      while (!sortY) {
          let libsgcoreX: Array<any> = [String.fromCharCode(98,117,114,115,116,121,95,114,95,57,49,0), String.fromCharCode(98,105,116,115,104,105,102,116,95,113,95,56,48,0)];
          let final_0C = true;
          let friendsa = String.fromCharCode(116,104,105,114,100,95,57,95,53,51,0);
         sortY = libsgcoreX.length < 72 || 72 < downloadedx.length;
         libsgcoreX = [friendsa.length & 2];
         final_0C = friendsa.includes(`${final_0C}`);
         break;
      }
      for (let u = 0; u < 3; u++) {
         sortY = rncoreV.length == 1;
      }
      while (!historyN) {
         rncoreV = [3 >> (Math.min(Math.abs(parseInt(`${basketballtrophyy}`)), 5))];
         break;
      }
      if (overlayF >= 3.50) {
         overlayF *= parseFloat(`${3 + rncoreV.length}`);
      }
      if ((overlayF + 1.86) > 2.53 && (rncoreV.length * 1) > 1) {
         overlayF -= parseFloat(`${parseInt(`${overlayF}`) >> (Math.min(5, Math.abs(2)))}`);
      }
      iconclosewhitewithbgm >>= Math.min(4, Math.abs((manifestW == String.fromCharCode(114,0) ? manifestW.length : (arrowrightm ? 5 : 1))));
      break;
   }
       let iconclosewhite_ = false;
       let showmoree = 3;
         showmoree >>= Math.min(1, Math.abs(1));
      let basketballmatchdetailbgW = showmoree <= 7756005;
      do {
         showmoree ^= showmoree;
         if (basketballmatchdetailbgW) {
            break;
         }
      } while ((4 <= showmoree) && basketballmatchdetailbgW);
          let promotionR = 4.0;
          let homex: Array<any> = [196, 389];
         iconclosewhite_ = showmoree < homex.length;
         promotionR *= parseFloat(`${3 - parseInt(`${promotionR}`)}`);
         homex = [1];
      for (let c = 0; c < 1; c++) {
         showmoree >>= Math.min(Math.abs(3 % (Math.max(1, showmoree))), 4);
      }
         iconclosewhite_ = showmoree >= 100;
      while (iconclosewhite_ && (showmoree ^ 3) <= 2) {
         iconclosewhite_ = showmoree < 48;
         break;
      }
      manifestW = `${((arrowrightm ? 1 : 5) | iconclosewhitewithbgm)}`;
      basketballplayerplaceholder5 /= Math.max((parseFloat(`${iconlogoute == String.fromCharCode(48,0) ? iconlogoute.length : parseInt(`${basketballplayerplaceholder5}`)}`)), 1);
      iconclosewhitewithbgm /= Math.max(2, 2 | parseInt(`${teamdetailsbgi}`));
      manifestW = `${1 * iconclosewhitewithbgm}`;
   while (manifestW.includes(`${basketballplayerplaceholder5}`)) {
       let countdowny = 3;
       let reddownarrowY = false;
       let core0 = 1.0;
       let sourceP = String.fromCharCode(115,111,108,118,101,100,95,50,95,55,51,0);
       let bgvipsportW = String.fromCharCode(109,105,110,114,95,117,95,57,51,0);
         sourceP += `${parseInt(`${core0}`)}`;
         bgvipsportW = "2";
          let with_11i = String.fromCharCode(100,95,53,53,95,108,101,114,112,0);
         countdowny -= parseInt(`${core0}`) * 1;
         with_11i = `${(with_11i == String.fromCharCode(54,0) ? with_11i.length : with_11i.length)}`;
      while (sourceP.length <= 1) {
         sourceP += `${((reddownarrowY ? 2 : 5) << (Math.min(Math.abs(parseInt(`${core0}`)), 5)))}`;
         break;
      }
         core0 /= Math.max(5, parseFloat(`${bgvipsportW.length + countdowny}`));
          let shielddone9: Array<any> = [607, 359, 31];
          let bridgek = 3.0;
         bgvipsportW = `${sourceP.length}`;
         shielddone9 = [parseInt(`${bridgek}`) - 3];
         bridgek -= parseInt(`${bridgek}`) & shielddone9.length;
      let greyD = sourceP.length <= 5380127;
      do {
          let gifgoalbg3 = String.fromCharCode(107,95,49,56,95,115,99,97,108,97,98,108,101,0);
          let orangetick0 = 0.0;
          let yellowredcardm = String.fromCharCode(112,97,99,101,114,95,115,95,55,0);
         sourceP = `${gifgoalbg3.length}`;
         gifgoalbg3 = `${yellowredcardm.length << (Math.min(4, Math.abs(parseInt(`${orangetick0}`))))}`;
         orangetick0 += parseFloat(`${parseInt(`${orangetick0}`) / 1}`);
         yellowredcardm = `${parseInt(`${orangetick0}`)}`;
         if (greyD) {
            break;
         }
      } while (greyD && (1 == sourceP.length));
         sourceP += `${sourceP.length}`;
      let webview5 = 7873542 >= bgvipsportW.length;
      do {
          let tempnodatar = true;
          let rewindV: Array<any> = [298, 469, 333];
          let notificationfilledU = 0;
         bgvipsportW += `${((reddownarrowY ? 2 : 1) | rewindV.length)}`;
         tempnodatar = tempnodatar || 74 < notificationfilledU;
         rewindV = [1];
         notificationfilledU += ((tempnodatar ? 1 : 4) % (Math.max(notificationfilledU, 2)));
         if (webview5) {
            break;
         }
      } while (webview5 && ((bgvipsportW.length * countdowny) <= 3));
          let changeZ = String.fromCharCode(102,111,114,119,97,114,100,105,110,103,95,105,95,52,48,0);
          let huaweiE = true;
          let iconeyeZ = String.fromCharCode(100,111,109,105,110,97,110,116,95,111,95,49,55,0);
         sourceP += `${((huaweiE ? 1 : 4) * 3)}`;
         changeZ += `${1 - iconeyeZ.length}`;
         huaweiE = 36 <= changeZ.length;
         iconeyeZ += `${changeZ.length}`;
         sourceP += `${((reddownarrowY ? 4 : 2) * parseInt(`${core0}`))}`;
       let gifgoalH = true;
       let emoji3 = true;
       let eventA: Array<any> = [347, 252, 9];
         sourceP = `${eventA.length << (Math.min(Math.abs(2), 1))}`;
         sourceP = `${bgvipsportW.length}`;
      basketballplayerplaceholder5 *= parseFloat(`${textlayoutmanagerG.length}`);
      break;
   }
      teamdetailsbgi *= (String.fromCharCode(104,0) == textlayoutmanagerG ? notificationgray_.size : textlayoutmanagerG.length);
   for (let s = 0; s < 3; s++) {
      iconclosewhitewithbgm *= textlayoutmanagerG.length;
   }
      arrowrightm = (sigmobj >> (Math.min(Math.abs(backe), 5))) < 13;
   let blackL = 7496359.0 <= basketballplayerplaceholder5;
   do {
       let sourceq = String.fromCharCode(108,95,57,50,95,109,105,112,115,100,115,112,0);
       let countryf: Array<any> = [321, 552];
       let modelI = false;
       let security9 = 4.0;
       let clubX = String.fromCharCode(105,111,101,114,114,110,111,109,101,109,95,48,95,56,55,0);
          let rocketE = 5;
          let hometeamfieldC = 1;
          let invitez = String.fromCharCode(121,95,52,51,95,119,101,97,107,0);
         clubX = `${3 + rocketE}`;
         rocketE ^= hometeamfieldC | 2;
         hometeamfieldC -= invitez.length - 1;
         invitez += "2";
       let langk: Map<any, any> = new Map([[String.fromCharCode(103,95,55,49,95,112,105,99,116,117,114,101,0),830], [String.fromCharCode(99,95,57,50,95,115,101,116,116,108,101,0),439]]);
         sourceq = `${(sourceq.length >> (Math.min(5, Math.abs((modelI ? 1 : 1)))))}`;
         sourceq = `${langk.size}`;
         langk.set(`${security9}`, langk.size);
         sourceq = `${2 ^ langk.size}`;
         clubX = `${countryf.length}`;
         modelI = sourceq.length < 62;
      for (let o = 0; o < 3; o++) {
         langk.set(`${security9}`, (String.fromCharCode(75,0) == clubX ? parseInt(`${security9}`) : clubX.length));
      }
      while (2 >= clubX.length || 2 >= sourceq.length) {
         sourceq += `${sourceq.length | 2}`;
         break;
      }
         modelI = 79 >= langk.size || security9 >= 46.5;
      while (sourceq.length <= countryf.length) {
         countryf = [1 % (Math.max(7, sourceq.length))];
         break;
      }
       let selecteda = true;
       let backiconmaskk = false;
      if (!backiconmaskk) {
         langk = new Map([[`${modelI}`, 3 % (Math.max(parseInt(`${security9}`), 2))]]);
      }
      let cancelg = countryf.length >= 7005175;
      do {
         countryf = [2 | countryf.length];
         if (cancelg) {
            break;
         }
      } while (cancelg && ((4 + clubX.length) >= 2 && 4 >= (countryf.length + clubX.length)));
      basketballplayerplaceholder5 -= parseFloat(`${parseInt(`${security9}`)}`);
      if (blackL) {
         break;
      }
   } while (blackL && ((basketballplayerplaceholder5 / 2.96) >= 3.53 && (basketballplayerplaceholder5 / 2.96) >= 3.45));
       let filedE = String.fromCharCode(122,95,50,56,95,101,118,97,108,117,97,116,101,0);
       let borderlessY = String.fromCharCode(109,111,115,97,105,99,95,53,95,54,53,0);
       let orangetickO = String.fromCharCode(97,95,51,49,95,102,114,97,109,101,114,97,116,101,0);
      if (5 > borderlessY.length) {
         filedE = `${borderlessY.length % (Math.max(orangetickO.length, 4))}`;
      }
       let smallsoundT = String.fromCharCode(119,95,52,55,95,105,110,118,111,99,97,116,105,111,110,115,0);
         orangetickO = `${smallsoundT.length + 3}`;
      for (let k = 0; k < 3; k++) {
         borderlessY = `${smallsoundT.length % 3}`;
      }
         borderlessY = `${filedE.length & 2}`;
      if (borderlessY.startsWith(orangetickO)) {
         orangetickO += `${3 / (Math.max(9, filedE.length))}`;
      }
       let downloadedS = String.fromCharCode(104,95,50,55,95,100,97,116,97,99,101,110,116,101,114,115,0);
       let bannerz = String.fromCharCode(106,95,49,48,95,103,114,105,100,0);
          let flagx = 5.0;
          let libmapbufferjnif = 4;
         filedE = `${parseInt(`${flagx}`)}`;
         flagx *= parseFloat(`${libmapbufferjnif | libmapbufferjnif}`);
      for (let v = 0; v < 3; v++) {
         downloadedS += `${bannerz.length}`;
      }
      eventf -= parseFloat(`${notificationgray_.size}`);
   if ((3.36 * eventf) == 2.48 && eventf == 3.36) {
       let weatherF: Array<any> = [26, 295];
       let libjsig = String.fromCharCode(100,95,52,56,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
      while ((weatherF.length * libjsig.length) == 2 || 5 == (2 * libjsig.length)) {
         weatherF = [weatherF.length];
         break;
      }
         weatherF = [weatherF.length];
          let loginF = String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,119,95,56,56,0);
          let settingV = 5;
          let sliderO = String.fromCharCode(114,101,108,111,99,107,95,52,95,50,48,0);
         libjsig = `${weatherF.length | loginF.length}`;
         loginF += `${sliderO.length * settingV}`;
         settingV <<= Math.min(5, Math.abs(sliderO.length + settingV));
         libjsig += `${libjsig.length}`;
         weatherF = [libjsig.length << (Math.min(1, weatherF.length))];
       let playershirtR: Map<any, any> = new Map([[String.fromCharCode(102,105,116,95,54,95,49,51,0),893], [String.fromCharCode(101,112,105,99,95,53,95,51,48,0),271], [String.fromCharCode(99,95,56,49,95,99,104,97,110,103,101,100,0),330]]);
      arrowrightm = weatherF.length < 21;
   }
      manifestW = `${(String.fromCharCode(97,0) == manifestW ? parseInt(`${teamdetailsbgi}`) : manifestW.length)}`;
      notificationgray_.set(`${arrowrightm}`, (notificationgray_.size >> (Math.min(2, Math.abs((arrowrightm ? 3 : 3))))));
   if (sigmobj <= 1 || (sigmobj & 1) <= 3) {
      arrowrightm = 23 == iconlogoute.length;
   }
   if ((manifestW.length * sigmobj) > 4) {
       let basel = 3;
      for (let o = 0; o < 3; o++) {
          let iconsaveimage2 = String.fromCharCode(109,95,49,48,95,113,99,101,108,112,0);
          let videovarM = true;
          let background6 = 3.0;
          let submite = String.fromCharCode(99,111,109,98,105,95,114,95,54,54,0);
          let flipperc: Array<any> = [555, 27, 255];
         basel += basel;
         iconsaveimage2 += `${iconsaveimage2.length}`;
         videovarM = submite == iconsaveimage2;
         background6 -= parseFloat(`${parseInt(`${background6}`) >> (Math.min(Math.abs(3), 4))}`);
         submite += `${parseInt(`${background6}`)}`;
         flipperc = [parseInt(`${background6}`) ^ iconsaveimage2.length];
      }
      while (2 > basel) {
          let iconrightorangeB = String.fromCharCode(121,95,52,52,95,118,100,112,97,117,99,111,110,116,101,120,116,0);
          let libloggerE = String.fromCharCode(108,95,51,53,95,108,111,111,107,0);
          let nativec = String.fromCharCode(114,101,102,105,110,101,100,95,110,95,50,49,0);
          let build2 = true;
         basel >>= Math.min(3, Math.abs(basel << (Math.min(2, Math.abs(2)))));
         iconrightorangeB += `${(String.fromCharCode(78,0) == iconrightorangeB ? libloggerE.length : iconrightorangeB.length)}`;
         libloggerE = `${(String.fromCharCode(56,0) == iconrightorangeB ? (build2 ? 2 : 1) : iconrightorangeB.length)}`;
         nativec = `${nativec.length}`;
         break;
      }
         basel %= Math.max(basel, 4);
      manifestW += `${basel / 2}`;
   }
},
}: wawaAwayShow) {
  const navigator = useNavigation();
  const hideVipPrompt = useCallback(async () => {
       let homeq = 2;
    let gemfilek = 0.0;
    let thailand2 = true;
    let macauO = 4.0;
    let profileL: Map<any, any> = new Map([[String.fromCharCode(110,95,56,53,95,99,111,117,110,116,101,100,0),String.fromCharCode(112,114,105,110,116,97,98,108,101,95,120,95,56,55,0)], [String.fromCharCode(103,111,108,100,101,110,95,116,95,49,53,0),String.fromCharCode(99,95,51,56,95,97,105,110,116,0)]]);
    let logoe = 1.0;
    let scheduleh = 5.0;
    let placeholderv: Map<any, any> = new Map([[String.fromCharCode(108,101,102,116,109,111,115,116,95,48,95,57,55,0),578], [String.fromCharCode(98,95,55,54,95,109,101,100,105,97,110,0),177], [String.fromCharCode(109,101,109,98,101,114,95,98,95,50,0),663]]);
   let leaguedetailsbgm = 5061956.0 >= macauO;
   do {
      macauO += parseFloat(`${3}`);
      if (leaguedetailsbgm) {
         break;
      }
   } while ((macauO == 5.83) && leaguedetailsbgm);
      placeholderv = new Map([[`${profileL.size}`, parseInt(`${gemfilek}`)]]);
   if ((placeholderv.size * homeq) >= 1 && (1 * placeholderv.size) >= 5) {
       let invitee = 1.0;
       let activev = 2.0;
       let showA: Array<any> = [573, 506];
       let membershipi = 5.0;
       let results: Array<any> = [466, 357];
         membershipi *= parseFloat(`${1 + results.length}`);
      let typingloadingx = activev >= 8065679.0;
      do {
          let g_title9: Array<any> = [81, 746, 853];
          let privilegeF = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,104,95,51,52,0);
          let loginsuccess0 = String.fromCharCode(114,101,116,95,57,95,56,54,0);
          let livem = String.fromCharCode(102,95,50,55,95,114,101,116,97,105,110,0);
          let u_viewd = 0.0;
         activev /= Math.max(3 - parseInt(`${membershipi}`), 4);
         g_title9 = [parseInt(`${u_viewd}`) % (Math.max(8, g_title9.length))];
         privilegeF = `${parseInt(`${u_viewd}`) % 2}`;
         loginsuccess0 += `${privilegeF.length ^ livem.length}`;
         livem += `${livem.length >> (Math.min(2, g_title9.length))}`;
         if (typingloadingx) {
            break;
         }
      } while (((1.79 * invitee) >= 2.21 && 2.80 >= (activev / 1.79)) && typingloadingx);
       let profileactive4 = String.fromCharCode(122,95,57,49,95,107,108,97,115,115,0);
      if ((invitee - 4.80) < 1.18 || (activev - 4.80) < 4.13) {
         activev /= Math.max(1, 1);
      }
         invitee *= parseFloat(`${3 | parseInt(`${invitee}`)}`);
         activev *= 3 - profileactive4.length;
      let moduleH = results.length >= 5810042;
      do {
          let storeJ = 0.0;
          let awayp: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,97,114,95,108,95,56,54,0),737], [String.fromCharCode(100,95,51,50,95,115,116,97,98,105,108,105,122,97,116,105,111,110,0),525], [String.fromCharCode(112,97,115,116,101,95,102,95,49,48,48,0),331]]);
         results = [3 | parseInt(`${storeJ}`)];
         storeJ += parseFloat(`${awayp.size >> (Math.min(5, Math.abs(awayp.size)))}`);
         if (moduleH) {
            break;
         }
      } while ((showA.includes(results.length)) && moduleH);
          let libjsijniprofilerW = String.fromCharCode(99,114,97,122,121,116,105,109,101,95,53,95,54,57,0);
         activev /= Math.max(3, 1);
         libjsijniprofilerW = "2";
         results.push(1 / (Math.max(8, parseInt(`${invitee}`))));
         membershipi += parseFloat(`${parseInt(`${invitee}`) % (Math.max(3, 6))}`);
          let liveendmodallogoB = 5.0;
          let home6 = true;
         membershipi /= Math.max(parseFloat(`${results.length / 1}`), 3);
         liveendmodallogoB -= parseFloat(`${parseInt(`${liveendmodallogoB}`) % 2}`);
         home6 = 22.96 <= liveendmodallogoB;
       let unfillR = 3.0;
         profileactive4 += `${parseInt(`${invitee}`) & parseInt(`${activev}`)}`;
      while ((profileactive4.length >> (Math.min(Math.abs(4), 3))) > 4 && 2 > (4 >> (Math.min(1, showA.length)))) {
         profileactive4 = `${showA.length - 3}`;
         break;
      }
      if ((unfillR * 4.18) > 3.35) {
         unfillR *= 3 * parseInt(`${invitee}`);
      }
      placeholderv = new Map([[`${results.length}`, results.length]]);
   }
      gemfilek -= parseFloat(`${parseInt(`${macauO}`)}`);
      gemfilek /= Math.max(parseFloat(`${parseInt(`${gemfilek}`)}`), 1);
      homeq *= (2 << (Math.min(4, Math.abs((thailand2 ? 2 : 5)))));
      logoe -= parseFloat(`${parseInt(`${scheduleh}`)}`);
   if (3.43 <= gemfilek || (3.43 / (Math.max(2, gemfilek))) <= 3.100) {
       let eighteeny: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,116,109,118,115,95,122,95,50,57,0),450], [String.fromCharCode(105,95,53,52,95,116,114,97,105,108,0),281]]);
      while (Array.from(eighteeny.values()).includes(eighteeny.size)) {
         eighteeny.set(`${eighteeny.size}`, eighteeny.size * eighteeny.size);
         break;
      }
         eighteeny.set(`${eighteeny.size}`, eighteeny.size);
      for (let t = 0; t < 1; t++) {
         eighteeny.set(`${eighteeny.size}`, eighteeny.size);
      }
      gemfilek *= parseFloat(`${homeq}`);
   }
   for (let m = 0; m < 3; m++) {
      homeq *= parseInt(`${scheduleh}`);
   }
      logoe *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${macauO}`)), 4))}`);
      placeholderv = new Map([[`${placeholderv.size}`, 3]]);
      placeholderv = new Map([[`${profileL.size}`, 2]]);
      gemfilek /= Math.max(5, parseFloat(`${parseInt(`${gemfilek}`) % (Math.max(parseInt(`${logoe}`), 3))}`));
       let redgoalI = String.fromCharCode(114,116,112,95,48,95,56,53,0);
      for (let e = 0; e < 1; e++) {
         redgoalI += `${redgoalI.length % 2}`;
      }
      while (redgoalI.length < redgoalI.length) {
          let uimanagerg = true;
          let abidetectJ = 4.0;
          let p_hashC = String.fromCharCode(114,103,101,110,95,102,95,49,48,48,0);
         redgoalI += `${parseInt(`${abidetectJ}`) / 1}`;
         uimanagerg = p_hashC.length < 44 && !uimanagerg;
         abidetectJ -= (parseFloat(`${String.fromCharCode(107,0) == p_hashC ? (uimanagerg ? 3 : 1) : p_hashC.length}`));
         break;
      }
          let options5 = String.fromCharCode(99,95,51,50,95,100,111,119,110,114,105,103,104,116,0);
          let textlayoutmanagerO = 2.0;
         redgoalI += `${1 / (Math.max(7, parseInt(`${textlayoutmanagerO}`)))}`;
         options5 += `${options5.length | 3}`;
         textlayoutmanagerO *= options5.length;
      thailand2 = 78.67 >= macauO;
   for (let h = 0; h < 2; h++) {
      placeholderv.set(`${logoe}`, 2 - parseInt(`${logoe}`));
   }
   while (scheduleh >= 2.58 && 3.22 >= (2.58 - scheduleh)) {
      thailand2 = 61 >= (homeq / (Math.max(macauO, 1)));
      break;
   }
   while ((homeq | 2) <= 1 || 2 <= (homeq - parseInt(`${macauO}`))) {
      macauO -= parseFloat(`${profileL.size}`);
      break;
   }
      profileL.set(`${macauO}`, parseInt(`${macauO}`) + placeholderv.size);
   while ((profileL.size - 2) < 3 && (placeholderv.size - 2) < 4) {
       let file5 = true;
       let videoT: Map<any, any> = new Map([[String.fromCharCode(117,95,51,48,95,99,114,101,100,101,110,116,105,97,108,115,0),960], [String.fromCharCode(116,95,55,53,95,114,101,102,99,111,117,110,116,101,100,0),66]]);
          let rightt = String.fromCharCode(104,95,55,57,95,119,97,116,99,104,101,114,115,0);
         videoT = new Map([[`${videoT.size}`, rightt.length]]);
         videoT = new Map([[`${videoT.size}`, videoT.size]]);
         videoT = new Map([[`${videoT.size}`, (3 * (file5 ? 1 : 5))]]);
      while (videoT.size <= 5 || (videoT.size - 5) <= 2) {
          let noder = 3.0;
          let libhermes2 = String.fromCharCode(110,95,49,48,48,95,115,116,97,116,101,112,0);
         videoT.set(`${noder}`, 3 * parseInt(`${noder}`));
         libhermes2 = `${(String.fromCharCode(103,0) == libhermes2 ? libhermes2.length : libhermes2.length)}`;
         break;
      }
          let orangetickz = String.fromCharCode(104,99,115,99,97,108,101,95,57,95,50,52,0);
          let topond = String.fromCharCode(112,97,103,101,111,117,116,95,107,95,49,52,0);
         videoT = new Map([[topond, orangetickz.length << (Math.min(Math.abs(3), 5))]]);
      let matchv = 7307357 >= videoT.size;
      do {
         videoT.set(`${file5}`, videoT.size);
         if (matchv) {
            break;
         }
      } while ((!file5) && matchv);
      profileL = new Map([[`${profileL.size}`, parseInt(`${gemfilek}`)]]);
      break;
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
