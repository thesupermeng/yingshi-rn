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
       let placeholder4 = 1;
    let dycreator4 = String.fromCharCode(115,95,57,53,95,102,114,97,99,116,105,111,110,0);
    let greene = 1;
    let privacyk = String.fromCharCode(119,95,51,53,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0);
    let floatinga = false;
    let mbnativeadvancedH: Array<any> = [String.fromCharCode(111,95,53,49,95,116,107,104,100,0), String.fromCharCode(104,111,114,105,103,95,55,95,53,51,0), String.fromCharCode(114,101,101,110,99,114,121,112,116,95,112,95,53,49,0)];
    let specx = String.fromCharCode(104,95,53,50,95,105,110,105,116,104,0);
    let cornera: Array<any> = [261, 950, 129];
    let h_countj: Array<any> = [String.fromCharCode(111,95,56,53,95,98,108,111,98,115,105,122,101,0), String.fromCharCode(100,95,55,51,95,97,110,105,109,97,116,111,114,115,0)];
    let roomx: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,111,114,95,106,95,54,55,0),String.fromCharCode(115,116,114,107,95,97,95,51,54,0)], [String.fromCharCode(99,114,111,110,111,115,95,108,95,52,48,0),String.fromCharCode(110,95,50,54,95,108,97,116,116,105,99,101,0)]]);
    let logox = String.fromCharCode(120,95,56,51,95,99,97,114,114,121,111,117,116,0);
    let miniw: Array<any> = [294, 382, 298];
   for (let y = 0; y < 1; y++) {
      dycreator4 += "1";
   }
      dycreator4 += `${placeholder4}`;
      roomx = new Map([[`${h_countj.length}`, h_countj.length]]);
   while (4 >= (miniw.length % 5)) {
      h_countj.push(1 * roomx.size);
      break;
   }
       let livex = 2.0;
       let episode9 = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,95,114,95,51,53,0);
       let mutedp = String.fromCharCode(120,95,55,55,95,97,103,97,105,110,115,116,0);
       let manifesty = String.fromCharCode(99,111,109,109,97,110,100,95,56,95,51,53,0);
          let calendarx = 3.0;
          let unreadJ = String.fromCharCode(100,115,116,95,120,95,55,57,0);
          let reducerw = 1.0;
         episode9 += `${parseInt(`${livex}`) % 2}`;
         calendarx *= parseFloat(`${parseInt(`${reducerw}`) >> (Math.min(4, Math.abs(3)))}`);
         unreadJ = `${unreadJ.length}`;
         reducerw *= parseInt(`${reducerw}`) & parseInt(`${calendarx}`);
       let auto_lv = 4;
       let modalS = 1;
      if ((4 | modalS) == 2 || (4 | auto_lv) == 2) {
          let buildT = false;
         auto_lv %= Math.max(4, auto_lv);
         buildT = (buildT ? buildT : buildT);
      }
          let injuryd = 3;
         auto_lv %= Math.max(1, 4);
         injuryd >>= Math.min(Math.abs(3), 1);
         auto_lv /= Math.max(4, (manifesty == String.fromCharCode(54,0) ? modalS : manifesty.length));
         episode9 = `${(String.fromCharCode(87,0) == episode9 ? manifesty.length : episode9.length)}`;
         auto_lv *= 3 * parseInt(`${livex}`);
      while ((modalS / 4) < 4 && (modalS / (Math.max(episode9.length, 7))) < 4) {
          let matchr = String.fromCharCode(116,105,109,101,108,105,110,101,95,108,95,54,48,0);
          let canvasg = 2.0;
         modalS <<= Math.min(Math.abs(auto_lv), 3);
         matchr += `${matchr.length | 1}`;
         canvasg *= parseFloat(`${parseInt(`${canvasg}`) * matchr.length}`);
         break;
      }
      greene %= Math.max(5, episode9.length | privacyk.length);
      h_countj.push(miniw.length);
   if (privacyk.startsWith(`${specx.length}`)) {
       let styleZ = String.fromCharCode(113,95,49,48,95,109,98,112,111,115,116,0);
       let crowns = false;
       let sheetW = 1.0;
       let long_8U = String.fromCharCode(99,111,110,118,101,120,95,51,95,55,56,0);
       let step_: Map<any, any> = new Map([[String.fromCharCode(105,95,50,57,95,99,118,99,0),810], [String.fromCharCode(115,104,111,114,116,99,117,116,95,53,95,54,48,0),103]]);
      while ((3 + step_.size) == 2) {
         styleZ += `${(long_8U.length << (Math.min(2, Math.abs((crowns ? 3 : 2)))))}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
         styleZ += "1";
      }
      if (1 >= (4 & styleZ.length)) {
         sheetW -= long_8U.length;
      }
         long_8U = `${parseInt(`${sheetW}`) * long_8U.length}`;
      let backx = crowns ? !crowns : crowns;
      do {
         crowns = step_.get(`${sheetW}`) == null;
         if (backx) {
            break;
         }
      } while (backx && (crowns));
      while (step_.size <= long_8U.length) {
          let bingK = 0.0;
          let reactnativejsV = String.fromCharCode(106,95,50,48,95,115,117,112,101,114,103,114,111,117,112,0);
          let topicN = 4.0;
         long_8U = "3";
         bingK += parseFloat(`${reactnativejsV.length}`);
         reactnativejsV = `${parseInt(`${bingK}`)}`;
         topicN -= parseFloat(`${2 | parseInt(`${topicN}`)}`);
         break;
      }
      while (long_8U.length < parseInt(`${sheetW}`)) {
         long_8U = "3";
         break;
      }
         styleZ += `${long_8U.length}`;
      let humidityV = 6730793 >= step_.size;
      do {
          let cast6 = String.fromCharCode(100,101,100,117,112,101,95,120,95,53,53,0);
          let injuryX = 1.0;
          let grey6 = 1;
         step_.set(`${grey6}`, ((crowns ? 2 : 2) - grey6));
         cast6 = "2";
         injuryX /= Math.max(parseInt(`${injuryX}`), 4);
         if (humidityV) {
            break;
         }
      } while ((styleZ.endsWith(`${step_.size}`)) && humidityV);
          let internetx = 2.0;
          let tempB: Map<any, any> = new Map([[String.fromCharCode(100,99,116,115,117,98,95,108,95,50,52,0),false ], [String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,95,108,95,54,56,0),false ], [String.fromCharCode(101,95,53,56,95,99,111,100,105,110,103,0),false ]]);
          let cnewinterstitialr = String.fromCharCode(97,100,106,117,115,116,115,95,55,95,49,55,0);
         step_ = new Map([[`${internetx}`, long_8U.length * parseInt(`${internetx}`)]]);
         tempB.set(`${cnewinterstitialr}`, cnewinterstitialr.length);
      while (4 < long_8U.length) {
         long_8U += `${((crowns ? 4 : 4) << (Math.min(styleZ.length, 2)))}`;
         break;
      }
         crowns = (parseInt(`${sheetW}`) - styleZ.length) > 21;
      while (4 >= (styleZ.length & step_.size) && 4 >= (4 & step_.size)) {
         step_.set(styleZ, (styleZ.length ^ (crowns ? 5 : 1)));
         break;
      }
       let mbjscommon2 = String.fromCharCode(115,108,111,119,101,115,116,95,115,95,56,56,0);
      if (!mbjscommon2.startsWith(`${crowns}`)) {
          let halfh = 0.0;
          let with_hhe = String.fromCharCode(116,101,115,115,95,105,95,57,52,0);
          let main_vp: Array<any> = [982, 425];
         crowns = styleZ.length > step_.size;
         halfh += parseFloat(`${parseInt(`${halfh}`)}`);
         with_hhe += `${with_hhe.length & parseInt(`${halfh}`)}`;
         main_vp.push(with_hhe.length);
      }
      privacyk += `${((floatinga ? 1 : 2) ^ 1)}`;
   }
       let score9 = String.fromCharCode(118,98,101,122,105,101,114,95,111,95,48,0);
       let trophyA: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,115,117,98,116,114,97,99,116,105,111,110,0),String.fromCharCode(116,101,115,115,101,108,108,97,116,101,95,113,95,53,53,0)], [String.fromCharCode(100,101,99,111,100,101,114,115,95,103,95,54,49,0),String.fromCharCode(99,112,117,105,100,95,114,95,54,56,0)], [String.fromCharCode(121,95,52,57,95,105,110,104,105,98,105,116,115,0),String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,111,95,51,56,0)]]);
       let contextK = 5;
      let playG = 7112260 >= contextK;
      do {
          let recommendationf = String.fromCharCode(122,95,49,56,95,115,101,108,101,99,116,101,100,0);
          let orangeI = 4.0;
          let downloadedB = String.fromCharCode(111,110,121,120,100,95,121,95,51,56,0);
         contextK *= 2 << (Math.min(3, Math.abs(parseInt(`${orangeI}`))));
         recommendationf = `${(recommendationf == String.fromCharCode(112,0) ? downloadedB.length : recommendationf.length)}`;
         orangeI -= parseFloat(`${recommendationf.length}`);
         downloadedB = `${(String.fromCharCode(97,0) == downloadedB ? recommendationf.length : downloadedB.length)}`;
         if (playG) {
            break;
         }
      } while ((contextK <= trophyA.size) && playG);
         contextK >>= Math.min(Math.abs(trophyA.size % (Math.max(1, 3))), 1);
       let eventQ = 4;
         contextK *= 3 >> (Math.min(3, Math.abs(trophyA.size)));
          let navigationk = 3;
         trophyA = new Map([[score9, 3 + score9.length]]);
         navigationk *= 1;
          let modalK = 4.0;
         trophyA = new Map([[`${trophyA.size}`, trophyA.size]]);
         modalK += parseInt(`${modalK}`) % 2;
          let gradleu = String.fromCharCode(114,111,119,115,107,105,112,95,109,95,53,56,0);
          let sportsu = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,116,95,54,0);
         eventQ /= Math.max(2, trophyA.size * contextK);
         gradleu += `${gradleu.length << (Math.min(Math.abs(2), 1))}`;
         sportsu += `${(sportsu == String.fromCharCode(99,0) ? sportsu.length : gradleu.length)}`;
      while ((trophyA.size + 4) > 4 || 4 > (trophyA.size + score9.length)) {
         trophyA.set(`${contextK}`, contextK << (Math.min(Math.abs(trophyA.size), 2)));
         break;
      }
      while (2 >= contextK) {
         contextK &= trophyA.size;
         break;
      }
      h_countj = [2];
   if (4 >= (mbnativeadvancedH.length >> (Math.min(Math.abs(3), 2))) || (roomx.size >> (Math.min(3, mbnativeadvancedH.length))) >= 3) {
      mbnativeadvancedH = [placeholder4];
   }
       let friendse = true;
      for (let z = 0; z < 3; z++) {
          let rewardvideoK = false;
          let gemfiler: Array<any> = [String.fromCharCode(104,112,114,101,100,95,122,95,52,53,0), String.fromCharCode(115,101,99,116,105,111,110,115,95,99,95,53,51,0), String.fromCharCode(116,105,109,115,116,97,109,112,95,52,95,53,55,0)];
          let downloadedy: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,108,101,101,119,97,121,0),false ], [String.fromCharCode(121,95,49,95,104,99,108,114,0),true ], [String.fromCharCode(100,101,99,111,100,101,114,115,95,105,95,54,57,0),true ]]);
         friendse = (gemfiler.length & downloadedy.size) <= 85;
         rewardvideoK = rewardvideoK && !rewardvideoK;
         gemfiler = [1];
      }
      let videojss = friendse ? !friendse : friendse;
      do {
         friendse = (friendse ? friendse : !friendse);
         if (videojss) {
            break;
         }
      } while (videojss && (!friendse));
      while (!friendse) {
         friendse = (!friendse ? friendse : friendse);
         break;
      }
      privacyk += `${2 + greene}`;
   let successR = String.fromCharCode(109,51,115,52,49,104,0) == specx;
   do {
       let x_lockq = String.fromCharCode(100,101,99,111,100,101,100,95,53,95,52,57,0);
       let mbbidh = false;
       let handler2 = true;
       let securityu = String.fromCharCode(104,95,53,49,95,97,118,114,101,115,97,109,112,108,101,114,101,115,0);
         handler2 = securityu.endsWith(`${handler2}`);
          let filters = String.fromCharCode(119,95,54,52,95,105,110,116,101,114,120,121,0);
         mbbidh = 11 > x_lockq.length;
         filters = "3";
         handler2 = securityu.length < 50;
      if (!handler2 || mbbidh) {
          let m_playerj = 0;
          let awayf = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,52,95,48,0);
          let thailandd = String.fromCharCode(122,95,49,95,102,105,116,122,0);
          let launcherW: Map<any, any> = new Map([[String.fromCharCode(98,95,53,48,95,112,114,101,100,0),57], [String.fromCharCode(115,95,49,57,95,99,114,101,97,116,101,101,120,0),867]]);
         handler2 = mbbidh && launcherW.size >= 93;
         m_playerj <<= Math.min(4, Math.abs(thailandd.length >> (Math.min(5, awayf.length))));
         awayf = `${thailandd.length}`;
         launcherW.set(thailandd, (String.fromCharCode(77,0) == thailandd ? awayf.length : thailandd.length));
      }
         x_lockq += `${(1 & (mbbidh ? 5 : 5))}`;
       let indicator6 = String.fromCharCode(116,95,55,50,95,117,110,97,118,97,105,108,97,98,108,101,0);
       let applicationr = String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,120,95,52,57,0);
         handler2 = securityu.length > indicator6.length;
      let analytick = x_lockq == String.fromCharCode(111,54,104,98,0);
      do {
          let turnE = 4;
         x_lockq = `${1 >> (Math.min(2, applicationr.length))}`;
         turnE -= turnE;
         if (analytick) {
            break;
         }
      } while (analytick && (!securityu.endsWith(x_lockq)));
         x_lockq += `${applicationr.length / (Math.max(3, x_lockq.length))}`;
      let filterw = 6961822 >= securityu.length;
      do {
         securityu += `${indicator6.length ^ applicationr.length}`;
         if (filterw) {
            break;
         }
      } while (filterw && (x_lockq == securityu));
      let megaphonef = x_lockq.length >= 8586500;
      do {
         x_lockq += `${(String.fromCharCode(65,0) == indicator6 ? applicationr.length : indicator6.length)}`;
         if (megaphonef) {
            break;
         }
      } while ((x_lockq.includes(`${mbbidh}`)) && megaphonef);
      for (let k = 0; k < 3; k++) {
         mbbidh = x_lockq.startsWith(`${handler2}`);
      }
      specx = "1";
      if (successR) {
         break;
      }
   } while (successR && ((greene % 5) < 1));
   for (let x = 0; x < 1; x++) {
      greene += 3;
   }
      placeholder4 |= miniw.length * 2;
       let ajaxj: Array<any> = [328, 420, 49];
       let bellY: Map<any, any> = new Map([[String.fromCharCode(101,95,56,52,95,99,111,110,116,111,117,114,0),659], [String.fromCharCode(118,101,114,116,105,99,97,108,108,121,95,116,95,52,54,0),359]]);
      if (!Array.from(bellY.keys()).includes(`${ajaxj.length}`)) {
         ajaxj.push(1);
      }
          let linkt = String.fromCharCode(99,109,97,115,107,95,109,95,49,57,0);
          let goalv = 5.0;
         ajaxj.push(bellY.size | ajaxj.length);
         linkt += `${parseInt(`${goalv}`) >> (Math.min(linkt.length, 2))}`;
         goalv *= (linkt == String.fromCharCode(53,0) ? parseInt(`${goalv}`) : linkt.length);
       let yellow1 = false;
       let activeN = false;
      let main_ik = bellY.size >= 7343104;
      do {
          let questL = String.fromCharCode(108,95,52,54,95,99,104,97,110,103,101,103,114,111,117,112,0);
         bellY = new Map([[`${bellY.size}`, (bellY.size - (yellow1 ? 4 : 2))]]);
         questL = `${3 | questL.length}`;
         if (main_ik) {
            break;
         }
      } while ((bellY.size <= ajaxj.length) && main_ik);
      if ((4 % (Math.max(10, bellY.size))) == 5) {
         bellY = new Map([[`${ajaxj.length}`, ajaxj.length]]);
      }
      for (let i = 0; i < 2; i++) {
         activeN = yellow1;
      }
      specx = "2";
   for (let q = 0; q < 2; q++) {
      h_countj.push(mbnativeadvancedH.length);
   }
   for (let l = 0; l < 2; l++) {
      miniw = [cornera.length];
   }
   for (let c = 0; c < 2; c++) {
      mbnativeadvancedH = [privacyk.length - h_countj.length];
   }
   let mintegralO = logox.length >= 6424631;
   do {
      logox += `${dycreator4.length}`;
      if (mintegralO) {
         break;
      }
   } while (mintegralO && (4 < placeholder4));
   let reducerC = String.fromCharCode(110,100,110,107,112,54,113,105,56,53,0) == privacyk;
   do {
       let buffer9 = 5.0;
       let vignettee = String.fromCharCode(113,95,53,57,95,112,97,99,107,97,103,101,100,0);
       let fillW: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,114,116,101,114,95,55,95,50,50,0),211], [String.fromCharCode(113,95,57,49,95,111,98,106,110,105,100,0),610]]);
       let gesturesg = String.fromCharCode(115,117,98,116,114,97,99,116,95,119,95,57,55,0);
      while (3.85 > buffer9) {
         vignettee += "3";
         break;
      }
          let q_viewF = 0;
          let expiredf: Array<any> = [765, 452];
         vignettee += `${vignettee.length}`;
         q_viewF += expiredf.length % (Math.max(1, 5));
         expiredf.push(q_viewF % (Math.max(3, expiredf.length)));
         fillW = new Map([[vignettee, vignettee.length]]);
      for (let e = 0; e < 2; e++) {
         gesturesg = `${(gesturesg == String.fromCharCode(51,0) ? gesturesg.length : fillW.size)}`;
      }
         fillW.set(vignettee, 2 << (Math.min(5, vignettee.length)));
       let androidt = String.fromCharCode(122,95,51,49,95,101,120,116,101,110,100,0);
       let mode9 = String.fromCharCode(105,95,49,48,48,95,97,114,103,98,105,0);
         gesturesg += `${(vignettee == String.fromCharCode(67,0) ? vignettee.length : mode9.length)}`;
         buffer9 -= 3;
      while (gesturesg.includes(`${androidt.length}`)) {
         gesturesg += `${fillW.size * 2}`;
         break;
      }
          let arrow0 = String.fromCharCode(120,95,51,95,118,101,114,105,102,121,105,110,103,0);
          let delegate_hn3 = String.fromCharCode(118,95,57,50,95,97,97,97,97,0);
         gesturesg = "1";
         arrow0 = `${arrow0.length}`;
         delegate_hn3 += `${1 + arrow0.length}`;
      while (3 < (fillW.size % 1)) {
         fillW = new Map([[`${fillW.size}`, fillW.size]]);
         break;
      }
      for (let a = 0; a < 3; a++) {
         vignettee += `${1 - fillW.size}`;
      }
      privacyk += `${fillW.size + 2}`;
      if (reducerC) {
         break;
      }
   } while (reducerC && (privacyk.length > miniw.length));
   while (!Array.from(roomx.values()).includes(miniw.length)) {
      roomx = new Map([[`${roomx.size}`, roomx.size]]);
      break;
   }
      cornera = [placeholder4];
   if ((h_countj.length % 1) <= 5 || 1 <= (placeholder4 % (Math.max(5, h_countj.length)))) {
      placeholder4 -= roomx.size % (Math.max(1, 5));
   }
      privacyk = `${greene % 3}`;
   for (let o = 0; o < 1; o++) {
      logox += "3";
   }
   let entryP = 7794300 >= cornera.length;
   do {
       let unselectedg: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,101,114,95,51,95,49,51,0),181], [String.fromCharCode(115,111,108,118,101,114,95,100,95,53,56,0),319]]);
       let previewb: Array<any> = [906, 688, 181];
       let mbsplashO: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,116,95,103,95,50,55,0),734], [String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,110,95,55,0),395]]);
       let buildR = String.fromCharCode(98,95,55,95,117,115,101,114,115,0);
      let ajaxY = mbsplashO.size <= 7012285;
      do {
         mbsplashO = new Map([[`${mbsplashO.size}`, previewb.length]]);
         if (ajaxY) {
            break;
         }
      } while (((previewb.length % (Math.max(1, 8))) > 2) && ajaxY);
      for (let k = 0; k < 2; k++) {
          let styles_ = 2;
          let kuaishouR = 2;
         mbsplashO = new Map([[`${unselectedg.size}`, kuaishouR >> (Math.min(Math.abs(unselectedg.size), 3))]]);
         styles_ ^= 2 & styles_;
         kuaishouR >>= Math.min(1, Math.abs(styles_ / (Math.max(styles_, 7))));
      }
      if ((unselectedg.size ^ 4) >= 1 && (4 ^ unselectedg.size) >= 1) {
         mbsplashO = new Map([[`${mbsplashO.size}`, previewb.length]]);
      }
         previewb.push(3);
      while (1 == (previewb.length | 3)) {
         unselectedg.set(buildR, mbsplashO.size);
         break;
      }
         mbsplashO = new Map([[`${mbsplashO.size}`, previewb.length ^ 2]]);
      let selectionV = previewb.length <= 9105763;
      do {
         previewb.push(buildR.length);
         if (selectionV) {
            break;
         }
      } while ((previewb.length == unselectedg.size) && selectionV);
         unselectedg.set(buildR, buildR.length >> (Math.min(3, Math.abs(mbsplashO.size))));
         mbsplashO.set(buildR, (String.fromCharCode(83,0) == buildR ? buildR.length : mbsplashO.size));
      while (3 == (mbsplashO.size / (Math.max(unselectedg.size, 5))) && (mbsplashO.size / 3) == 2) {
         unselectedg.set(`${previewb.length}`, 1);
         break;
      }
         mbsplashO.set(buildR, mbsplashO.size & buildR.length);
      while (mbsplashO.size == 4) {
          let questH = String.fromCharCode(97,110,97,108,121,115,101,95,108,95,56,0);
          let playercommon_ = String.fromCharCode(107,95,49,51,95,109,111,110,111,115,112,97,99,101,0);
          let canvasM = String.fromCharCode(111,95,49,50,95,112,97,103,101,99,111,117,110,116,0);
          let macauZ: Array<any> = [48, 400, 324];
          let blackt: Array<any> = [521, 326];
         unselectedg.set(`${questH}`, questH.length);
         playercommon_ = `${canvasM.length}`;
         canvasM = `${3 - macauZ.length}`;
         macauZ.push(playercommon_.length);
         blackt.push(canvasM.length);
         break;
      }
      cornera.push(buildR.length + 3);
      if (entryP) {
         break;
      }
   } while (entryP && (mbnativeadvancedH.length <= 4));
       let fileY = 2;
      while (1 == (1 * fileY)) {
         fileY /= Math.max(3, 3);
         break;
      }
       let zhubom = 5;
          let zoomQ = 2;
          let backwardH: Array<any> = [791, 721];
         fileY <<= Math.min(5, Math.abs(zoomQ * 3));
         zoomQ &= 2;
         backwardH.push(backwardH.length);
      mbnativeadvancedH.push(((floatinga ? 3 : 2) * 1));
   if (3 < (h_countj.length - placeholder4)) {
      placeholder4 -= 1 << (Math.min(1, Math.abs(greene)));
   }
      miniw = [(logox == String.fromCharCode(75,0) ? dycreator4.length : logox.length)];
      placeholder4 += 1 * greene;
      logox += `${1 | dycreator4.length}`;
      logox = `${roomx.size}`;
   for (let f = 0; f < 3; f++) {
      roomx = new Map([[`${mbnativeadvancedH.length}`, ((floatinga ? 3 : 1) / (Math.max(7, mbnativeadvancedH.length)))]]);
   }
       let checkbox4 = String.fromCharCode(101,95,50,54,95,100,101,102,97,117,108,0);
       let liveE = String.fromCharCode(102,95,51,48,95,108,111,103,0);
       let singleV = String.fromCharCode(121,95,50,49,95,113,117,101,114,121,0);
      if (singleV.length > liveE.length) {
          let indicatorm = 5;
          let country1 = String.fromCharCode(106,95,54,56,95,112,105,99,116,121,112,101,0);
          let leagueq = String.fromCharCode(109,95,49,95,108,97,112,112,101,100,0);
          let tickedA = false;
         liveE += `${2 / (Math.max(5, leagueq.length))}`;
         indicatorm -= country1.length % (Math.max(7, indicatorm));
         country1 = `${2 ^ indicatorm}`;
         leagueq = `${country1.length + indicatorm}`;
         tickedA = country1.length == 22;
      }
          let ewardedE = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,95,117,95,50,55,0);
         checkbox4 += `${singleV.length}`;
         ewardedE += `${ewardedE.length}`;
       let hoverZ = String.fromCharCode(119,109,97,118,111,105,99,101,95,108,95,56,51,0);
          let moreB = 1;
         checkbox4 += `${liveE.length * 3}`;
         moreB |= moreB;
      if (checkbox4 == String.fromCharCode(98,0)) {
         liveE += `${1 * hoverZ.length}`;
      }
      let awayn = String.fromCharCode(111,56,112,98,106,53,0) == hoverZ;
      do {
          let control1 = String.fromCharCode(113,95,51,0);
          let b_lockF = false;
          let main_n8 = false;
          let colorsI = 3.0;
         hoverZ = `${(String.fromCharCode(105,0) == control1 ? control1.length : singleV.length)}`;
         b_lockF = !main_n8;
         main_n8 = colorsI <= 16.59;
         colorsI /= Math.max(5, parseFloat(`${2 + parseInt(`${colorsI}`)}`));
         if (awayn) {
            break;
         }
      } while ((5 < singleV.length) && awayn);
      for (let x = 0; x < 3; x++) {
          let downloaderA = false;
          let combine9 = true;
          let largel = 4;
          let sliderv = true;
          let activityZ: Map<any, any> = new Map([[String.fromCharCode(113,95,50,53,95,115,97,119,0),String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,117,95,54,57,0)], [String.fromCharCode(102,111,114,101,97,99,104,95,102,95,52,50,0),String.fromCharCode(103,95,57,53,95,108,97,103,97,114,105,116,104,114,97,99,0)], [String.fromCharCode(98,114,101,97,107,105,110,103,95,48,95,54,54,0),String.fromCharCode(102,97,115,116,109,97,116,104,95,56,95,49,48,48,0)]]);
         singleV += `${largel}`;
         downloaderA = activityZ.get(`${sliderv}`) == null;
         combine9 = (!downloaderA ? combine9 : !downloaderA);
         largel >>= Math.min(Math.abs(2), 3);
         activityZ = new Map([[`${sliderv}`, ((downloaderA ? 1 : 4) << (Math.min(3, Math.abs(2))))]]);
      }
          let modelt = String.fromCharCode(111,95,53,56,95,117,110,108,105,110,107,0);
          let suggestiont: Array<any> = [String.fromCharCode(102,111,111,116,101,114,95,114,95,52,48,0), String.fromCharCode(109,97,107,101,110,97,110,95,99,95,52,57,0), String.fromCharCode(105,110,118,97,114,105,97,110,116,115,95,109,95,56,54,0)];
         checkbox4 = `${checkbox4.length}`;
         modelt = `${modelt.length}`;
         suggestiont.push(modelt.length >> (Math.min(Math.abs(1), 2)));
          let verticala: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,95,52,95,53,0),false ], [String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,117,95,56,51,0),true ], [String.fromCharCode(111,98,115,101,114,118,101,100,95,106,95,52,49,0),false ]]);
          let nativeO = String.fromCharCode(98,117,105,108,116,95,105,95,51,52,0);
         singleV += "2";
         verticala.set(nativeO, verticala.size % 2);
         nativeO = `${(String.fromCharCode(52,0) == nativeO ? nativeO.length : verticala.size)}`;
      miniw = [1];
   for (let g = 0; g < 2; g++) {
      floatinga = 40 <= greene;
   }
      greene *= placeholder4 << (Math.min(Math.abs(roomx.size), 1));
       let middled = String.fromCharCode(108,95,57,50,95,108,105,115,116,101,110,101,114,115,0);
       let cross9: Array<any> = [String.fromCharCode(97,95,51,54,95,104,101,120,98,110,0), String.fromCharCode(104,95,50,53,95,97,108,108,111,99,97,116,111,114,0), String.fromCharCode(97,98,115,116,114,97,99,116,95,100,95,51,51,0)];
       let delegate_xyD = String.fromCharCode(111,118,101,114,108,97,112,115,95,51,95,52,57,0);
       let other5 = 3.0;
       let flyerh = 1.0;
      while (3.85 <= (delegate_xyD.length * other5) || (delegate_xyD.length << (Math.min(Math.abs(2), 4))) <= 4) {
          let pathj: Array<any> = [800, 572, 739];
         delegate_xyD = `${parseInt(`${other5}`) % 3}`;
         pathj = [pathj.length];
         break;
      }
      while ((cross9.length & 2) <= 2) {
         middled += `${delegate_xyD.length}`;
         break;
      }
      let gradlew2 = 8549290.0 <= other5;
      do {
         other5 -= delegate_xyD.length - 1;
         if (gradlew2) {
            break;
         }
      } while (gradlew2 && (other5 <= 5.87));
         cross9.push(middled.length * delegate_xyD.length);
       let ballw = String.fromCharCode(112,95,51,56,95,100,105,115,99,111,118,101,114,121,0);
      for (let h = 0; h < 3; h++) {
          let update_qs = String.fromCharCode(109,95,50,48,95,100,114,111,112,111,102,102,0);
         cross9.push((ballw == String.fromCharCode(52,0) ? ballw.length : parseInt(`${other5}`)));
         update_qs += `${(update_qs == String.fromCharCode(115,0) ? update_qs.length : update_qs.length)}`;
      }
         middled = `${parseInt(`${flyerh}`)}`;
         other5 *= delegate_xyD.length ^ 1;
      roomx.set(`${greene}`, privacyk.length / 3);
   let sound8 = 6667147 <= greene;
   do {
      greene /= Math.max(placeholder4, 4);
      if (sound8) {
         break;
      }
   } while (sound8 && (1 > (greene * 2) && (h_countj.length * 2) > 5));
      miniw = [(logox == String.fromCharCode(57,0) ? specx.length : logox.length)];
      cornera = [placeholder4];
       let searchj = true;
       let selectedM = String.fromCharCode(100,95,52,57,95,99,121,117,118,0);
       let crownC = String.fromCharCode(103,95,51,50,95,99,104,101,99,107,98,111,120,0);
      if (selectedM.length < 1) {
          let spinners = 3.0;
          let singaporew = 5.0;
         selectedM += "1";
         spinners += parseFloat(`${parseInt(`${singaporew}`) >> (Math.min(3, Math.abs(2)))}`);
         singaporew -= 2;
      }
         crownC = `${((searchj ? 3 : 2))}`;
          let securityg = String.fromCharCode(108,122,109,97,95,102,95,52,50,0);
          let turnd = true;
         selectedM = `${securityg.length - 2}`;
      for (let p = 0; p < 3; p++) {
          let policy9: Array<any> = [582, 578, 200];
          let halfV = 0.0;
         crownC = `${((searchj ? 3 : 1) / (Math.max(3, 3)))}`;
         policy9.push(3);
         halfV *= parseFloat(`${1}`);
      }
      let refreshq = 9629740 <= selectedM.length;
      do {
          let sourceM = 4.0;
          let station9 = false;
          let containerS = String.fromCharCode(98,95,55,55,95,101,112,115,105,108,111,110,0);
          let orangeL: Array<any> = [56, 19, 310];
         selectedM = "2";
         sourceM -= parseFloat(`${orangeL.length}`);
         station9 = containerS.length > orangeL.length;
         containerS += `${orangeL.length / (Math.max(containerS.length, 6))}`;
         if (refreshq) {
            break;
         }
      } while (refreshq && (selectedM.length > 5 && !searchj));
       let tnewsm = 1;
       let controlsq: Array<any> = [String.fromCharCode(110,95,49,53,95,118,112,114,105,110,116,102,0), String.fromCharCode(112,95,51,56,95,119,104,101,101,108,0)];
         controlsq.push(crownC.length * 1);
      while (!searchj && selectedM.length <= 1) {
         searchj = 75 <= controlsq.length;
         break;
      }
      mbnativeadvancedH = [((floatinga ? 5 : 1) ^ 2)];
   for (let f = 0; f < 2; f++) {
      dycreator4 = "1";
   }
   let halfM = cornera.length >= 7471368;
   do {
      cornera.push(1);
      if (halfM) {
         break;
      }
   } while ((cornera.length >= specx.length) && halfM);
   for (let r = 0; r < 1; r++) {
      floatinga = 89 > cornera.length;
   }
      roomx = new Map([[specx, specx.length & placeholder4]]);
   for (let g = 0; g < 2; g++) {
      dycreator4 = `${greene}`;
   }
       let inviteS = true;
       let time_yij = String.fromCharCode(116,95,49,48,95,116,101,120,116,0);
       let container8: Map<any, any> = new Map([[String.fromCharCode(114,95,50,54,95,97,110,110,111,116,97,116,105,111,110,115,0),533], [String.fromCharCode(121,95,51,56,95,102,105,108,116,101,114,98,97,110,107,0),589]]);
       let homeW = 3.0;
       let indicatorJ = 2.0;
          let sortw = 5.0;
          let matchQ = String.fromCharCode(116,116,97,99,104,109,101,110,116,95,48,95,54,51,0);
          let annera: Map<any, any> = new Map([[String.fromCharCode(103,95,57,55,95,97,108,98,117,109,115,0),767], [String.fromCharCode(120,95,52,54,95,114,117,110,116,101,114,109,0),787], [String.fromCharCode(112,114,101,100,105,99,116,105,111,110,95,115,95,49,51,0),173]]);
         homeW -= parseFloat(`${parseInt(`${sortw}`) << (Math.min(Math.abs(container8.size), 2))}`);
         sortw /= Math.max(5, parseFloat(`${annera.size * 3}`));
         matchQ += `${annera.size}`;
          let castingv = String.fromCharCode(104,95,50,55,95,112,114,101,100,101,99,111,100,101,0);
         time_yij += `${(container8.size * (inviteS ? 5 : 1))}`;
         castingv = `${castingv.length}`;
          let p_playerk = false;
          let indexo = 5;
         container8 = new Map([[`${p_playerk}`, 3 - parseInt(`${homeW}`)]]);
         p_playerk = (indexo & indexo) <= 33;
         homeW -= parseFloat(`${2 & parseInt(`${homeW}`)}`);
         homeW += parseFloat(`${parseInt(`${homeW}`) << (Math.min(4, Math.abs(1)))}`);
      let minivodx = container8.size >= 8435032;
      do {
          let mappingm = 4.0;
          let mappingX = 3.0;
          let downloadingI = String.fromCharCode(99,95,54,55,95,108,108,110,119,0);
         container8.set(downloadingI, downloadingI.length << (Math.min(Math.abs(2), 5)));
         mappingm *= parseFloat(`${1}`);
         mappingX *= parseInt(`${mappingm}`) | parseInt(`${mappingX}`);
         if (minivodx) {
            break;
         }
      } while (minivodx && (inviteS));
      if (inviteS || time_yij.length == 3) {
         time_yij += `${container8.size ^ time_yij.length}`;
      }
         container8.set(`${homeW}`, parseInt(`${homeW}`) - 3);
      dycreator4 = "2";
   while (floatinga && specx.length >= 5) {
      specx = "3";
      break;
   }
   for (let l = 0; l < 1; l++) {
      roomx.set(`${floatinga}`, 2 * mbnativeadvancedH.length);
   }
   while (5 >= (miniw.length << (Math.min(Math.abs(1), 1)))) {
      dycreator4 += `${miniw.length - 2}`;
      break;
   }
      mbnativeadvancedH = [3 >> (Math.min(2, Math.abs(roomx.size)))];
       let cornerx = 0.0;
       let stations9: Array<any> = [644, 420];
       let mappingC: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,0),179], [String.fromCharCode(105,95,50,51,95,115,112,108,97,115,104,0),586]]);
      if ((5 + mappingC.size) >= 3) {
         stations9.push(stations9.length);
      }
      while (mappingC.get(`${cornerx}`) == null) {
         mappingC = new Map([[`${mappingC.size}`, stations9.length - 1]]);
         break;
      }
      if (1 <= (stations9.length | mappingC.size) || (mappingC.size | stations9.length) <= 1) {
         stations9.push(stations9.length & parseInt(`${cornerx}`));
      }
         stations9 = [stations9.length << (Math.min(3, Math.abs(mappingC.size)))];
         cornerx -= parseFloat(`${stations9.length / 3}`);
       let debugu = String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,101,95,57,55,0);
      while (5 == (mappingC.size ^ stations9.length) || (5 ^ mappingC.size) == 1) {
         mappingC = new Map([[`${stations9.length}`, 1]]);
         break;
      }
      while (mappingC.size == 1) {
         stations9.push(debugu.length % 1);
         break;
      }
      while (mappingC.size < 1) {
          let penaltym = String.fromCharCode(112,111,115,108,105,115,116,115,95,48,95,52,57,0);
          let dangerU = String.fromCharCode(114,101,115,101,116,115,95,52,95,49,55,0);
          let placeholderX = 5.0;
         mappingC.set(penaltym, penaltym.length % 2);
         dangerU = `${dangerU.length & 2}`;
         placeholderX /= Math.max(2, (dangerU == String.fromCharCode(111,0) ? dangerU.length : parseInt(`${placeholderX}`)));
         break;
      }
      specx += `${h_countj.length << (Math.min(specx.length, 1))}`;
      specx += `${roomx.size / (Math.max(3, privacyk.length))}`;
   let rewardi = floatinga ? !floatinga : floatinga;
   do {
      floatinga = miniw.length > specx.length;
      if (rewardi) {
         break;
      }
   } while ((floatinga) && rewardi);
   while (specx == privacyk) {
      privacyk = `${3 % (Math.max(5, cornera.length))}`;
      break;
   }
      cornera = [(String.fromCharCode(108,0) == specx ? dycreator4.length : specx.length)];
   if (4 > specx.length) {
      greene ^= miniw.length;
   }
      h_countj.push(roomx.size);
   while ((privacyk.length & 3) <= 3) {
      privacyk += `${miniw.length}`;
      break;
   }
   if (4 > (2 ^ placeholder4)) {
      specx += `${miniw.length}`;
   }
},
}: ttSmall) {
  const navigator = useNavigation();
  const hideVipPrompt = useCallback(async () => {
       let buttonR = String.fromCharCode(114,95,49,56,95,115,104,97,100,101,0);
    let pressureF = String.fromCharCode(119,95,49,48,48,95,98,121,116,101,115,116,114,105,110,103,0);
    let clockL = 4.0;
    let playlist8 = String.fromCharCode(121,95,57,55,95,115,99,97,108,101,99,117,100,97,0);
    let frame_z1H = true;
    let accepted1 = String.fromCharCode(117,115,105,110,103,95,115,95,50,55,0);
    let adult4 = 1;
    let hooksx = 3.0;
    let saveJ = 4.0;
    let album_: Array<any> = [108, 757, 364];
    let specS = String.fromCharCode(120,95,49,52,95,114,101,118,97,108,105,100,97,116,101,100,0);
    let dropdownp = String.fromCharCode(113,95,54,55,95,115,105,109,117,108,116,97,110,101,111,117,115,0);
    let downloading3 = 3.0;
    let usernameR = String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,113,95,54,51,0);
      accepted1 = "2";
   if (1.31 >= (clockL / 4.80) && (clockL / 4.80) >= 5.5) {
      clockL *= parseFloat(`${1 / (Math.max(parseInt(`${clockL}`), 7))}`);
   }
      frame_z1H = album_.length > 54;
   let downx = pressureF == String.fromCharCode(108,50,122,54,120,97,105,0);
   do {
      pressureF += `${specS.length}`;
      if (downx) {
         break;
      }
   } while (downx && (pressureF.length == album_.length));
      playlist8 += "2";
      saveJ *= parseInt(`${clockL}`);
      album_ = [(String.fromCharCode(68,0) == playlist8 ? parseInt(`${saveJ}`) : playlist8.length)];
      hooksx -= parseFloat(`${parseInt(`${clockL}`)}`);
      pressureF = "2";
   let termsp = 7479742.0 <= clockL;
   do {
       let promotion6: Map<any, any> = new Map([[String.fromCharCode(118,95,49,55,95,114,101,103,105,115,116,114,97,114,0),533], [String.fromCharCode(108,95,57,51,95,113,117,101,117,101,0),488], [String.fromCharCode(106,95,57,50,95,114,97,112,105,100,0),265]]);
       let unselectedT = String.fromCharCode(103,95,57,57,95,111,114,105,101,110,116,97,116,105,111,110,115,0);
       let redirectE = false;
       let orangeh = String.fromCharCode(105,95,53,48,95,97,108,115,97,0);
       let m_positionf = String.fromCharCode(106,95,52,55,95,114,97,110,103,101,0);
          let privilegeM: Array<any> = [370, 54];
         orangeh = `${2 >> (Math.min(3, Math.abs(promotion6.size)))}`;
         privilegeM = [2 % (Math.max(4, privilegeM.length))];
         unselectedT += `${3 << (Math.min(4, Math.abs(promotion6.size)))}`;
         orangeh += `${promotion6.size % (Math.max(m_positionf.length, 7))}`;
         redirectE = !redirectE;
      while (m_positionf.length == 1) {
         m_positionf += `${m_positionf.length | 1}`;
         break;
      }
      for (let t = 0; t < 2; t++) {
         m_positionf = `${1 >> (Math.min(2, unselectedT.length))}`;
      }
         promotion6 = new Map([[`${promotion6.size}`, 3 - m_positionf.length]]);
      if ((3 / (Math.max(8, promotion6.size))) > 2) {
         promotion6 = new Map([[orangeh, orangeh.length & 3]]);
      }
      if (!redirectE) {
         redirectE = orangeh.length == 19;
      }
      if (1 == (promotion6.size | m_positionf.length)) {
          let plusq = 5.0;
          let window_xgD: Array<any> = [321, 720, 226];
          let overl = 5;
          let gmail8: Array<any> = [238, 162, 270];
         m_positionf = `${promotion6.size}`;
         plusq -= parseFloat(`${parseInt(`${plusq}`)}`);
         window_xgD = [overl];
         overl *= parseInt(`${plusq}`);
         gmail8.push(parseInt(`${plusq}`));
      }
      for (let r = 0; r < 3; r++) {
          let playlist5 = 1.0;
          let wnewsp = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,53,95,57,48,0);
         m_positionf += `${parseInt(`${playlist5}`) % (Math.max(1, 9))}`;
         playlist5 /= Math.max(wnewsp.length >> (Math.min(Math.abs(3), 5)), 3);
         wnewsp += `${3 | wnewsp.length}`;
      }
         redirectE = m_positionf.length > 49;
         unselectedT += `${orangeh.length}`;
      if (!orangeh.startsWith(`${unselectedT.length}`)) {
         orangeh += `${orangeh.length}`;
      }
       let short_g6: Array<any> = [540, 266];
       let interstitialY: Array<any> = [292, 653];
      clockL -= parseFloat(`${2}`);
      if (termsp) {
         break;
      }
   } while ((clockL > 3.95) && termsp);
   while (clockL < 1.84) {
      clockL -= parseFloat(`${specS.length}`);
      break;
   }
      frame_z1H = specS.length <= pressureF.length;
       let emojil = false;
       let scoreW = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,52,95,52,52,0);
       let sheetW = 4;
         emojil = !emojil;
          let h_imageJ = false;
          let lessL = 0.0;
          let logout7: Array<any> = [624, 809, 845];
         sheetW |= scoreW.length * 1;
         h_imageJ = 28 <= logout7.length;
         lessL += parseFloat(`${parseInt(`${lessL}`)}`);
         logout7 = [logout7.length];
      if (!emojil) {
         sheetW += ((emojil ? 3 : 3));
      }
      if (scoreW.endsWith(`${emojil}`)) {
          let notificationg = String.fromCharCode(107,95,49,51,95,99,117,114,114,101,110,116,0);
          let plusO = String.fromCharCode(97,99,99,117,114,97,116,101,95,107,95,54,54,0);
          let placement3 = String.fromCharCode(98,101,103,97,110,95,113,95,51,49,0);
         scoreW = `${(plusO == String.fromCharCode(87,0) ? plusO.length : notificationg.length)}`;
         notificationg = "2";
      }
         scoreW += `${3 - scoreW.length}`;
      for (let h = 0; h < 2; h++) {
         scoreW = `${1 & sheetW}`;
      }
      for (let s = 0; s < 1; s++) {
          let strings3 = true;
          let pnewsT = 4.0;
          let penaltyR = 5.0;
          let catagoryN = 3.0;
         scoreW += "3";
         strings3 = (penaltyR / (Math.max(7, pnewsT))) <= 95.91;
         pnewsT -= 1 | parseInt(`${pnewsT}`);
         penaltyR *= parseInt(`${penaltyR}`) ^ 1;
         catagoryN -= ((strings3 ? 1 : 4) ^ parseInt(`${catagoryN}`));
      }
          let trophyv: Map<any, any> = new Map([[String.fromCharCode(102,108,97,115,104,115,118,95,108,95,55,54,0),231], [String.fromCharCode(100,99,113,117,97,110,116,95,48,95,54,55,0),188]]);
          let awayC = 5.0;
         sheetW %= Math.max(4, 3 - trophyv.size);
         trophyv = new Map([[`${awayC}`, parseInt(`${awayC}`)]]);
         emojil = !emojil || scoreW.length > 46;
      playlist8 = "3";
   let constantsG = frame_z1H ? !frame_z1H : frame_z1H;
   do {
       let heart1 = 1.0;
       let mbbannerw = 5;
       let giftG = 1.0;
      for (let h = 0; h < 3; h++) {
         giftG /= Math.max(4, parseFloat(`${parseInt(`${heart1}`)}`));
      }
          let bufferU = String.fromCharCode(111,112,116,97,114,103,95,104,95,49,56,0);
          let upgradeH: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,114,105,99,116,95,55,95,51,53,0),975], [String.fromCharCode(114,95,51,48,95,115,112,97,114,107,115,0),315], [String.fromCharCode(104,105,110,116,115,95,104,95,57,51,0),744]]);
          let sideb = 2;
         mbbannerw /= Math.max(2, upgradeH.size);
         bufferU = `${sideb | bufferU.length}`;
         upgradeH.set(bufferU, bufferU.length / (Math.max(2, 2)));
         sideb += bufferU.length;
      for (let k = 0; k < 2; k++) {
          let expiredD = String.fromCharCode(106,95,55,57,95,112,99,109,117,0);
         mbbannerw |= mbbannerw;
         expiredD += `${expiredD.length << (Math.min(5, expiredD.length))}`;
      }
       let androidk = String.fromCharCode(122,101,114,111,118,95,50,95,50,49,0);
      if ((1 % (Math.max(8, mbbannerw))) >= 3) {
          let condensedb = 3;
          let skipJ = 0;
          let closeX: Map<any, any> = new Map([[String.fromCharCode(99,95,56,57,95,109,112,99,100,97,116,97,0),613], [String.fromCharCode(107,100,102,95,102,95,53,50,0),388], [String.fromCharCode(97,95,56,48,95,99,111,112,121,105,110,105,111,118,0),876]]);
          let dragu = 3.0;
         mbbannerw >>= Math.min(Math.abs(2 & closeX.size), 1);
         condensedb &= skipJ;
         skipJ += 1;
         closeX = new Map([[`${dragu}`, skipJ | parseInt(`${dragu}`)]]);
      }
      while (1.5 >= (2.75 - giftG)) {
         giftG += parseFloat(`${parseInt(`${giftG}`)}`);
         break;
      }
         giftG /= Math.max(parseFloat(`${androidk.length ^ parseInt(`${giftG}`)}`), 5);
      while (5 <= mbbannerw) {
         mbbannerw *= 1;
         break;
      }
      for (let w = 0; w < 2; w++) {
         mbbannerw <<= Math.min(androidk.length, 4);
      }
      frame_z1H = (playlist8.length & album_.length) < 31;
      if (constantsG) {
         break;
      }
   } while ((!playlist8.startsWith(`${frame_z1H}`)) && constantsG);
      frame_z1H = (album_.length + playlist8.length) >= 53;
   if (5 < (2 * adult4)) {
      adult4 /= Math.max(adult4, 3);
   }
   for (let t = 0; t < 2; t++) {
      saveJ += accepted1.length / (Math.max(10, parseInt(`${saveJ}`)));
   }
      saveJ += parseInt(`${clockL}`);
       let eventh = String.fromCharCode(122,95,50,56,95,115,116,114,97,116,101,103,105,101,115,0);
       let backwardC = 0.0;
       let text2: Map<any, any> = new Map([[String.fromCharCode(122,95,51,95,102,100,99,116,120,0),273], [String.fromCharCode(108,95,54,50,95,110,97,110,111,115,0),969]]);
      let toponB = text2.size >= 7068510;
      do {
         text2 = new Map([[`${backwardC}`, parseInt(`${backwardC}`)]]);
         if (toponB) {
            break;
         }
      } while ((5 < (text2.size * parseInt(`${backwardC}`))) && toponB);
       let floatingp = 4;
       let expandf = 0;
          let popupt = 1;
         expandf *= expandf % (Math.max(parseInt(`${backwardC}`), 8));
         popupt <<= Math.min(3, Math.abs(popupt << (Math.min(5, Math.abs(popupt)))));
         expandf -= parseInt(`${backwardC}`) % (Math.max(8, eventh.length));
          let update_jL = String.fromCharCode(114,111,116,111,95,109,95,54,53,0);
          let eighteene = 1.0;
         eventh += `${expandf}`;
         update_jL = `${2 / (Math.max(10, update_jL.length))}`;
         eighteene += 3;
         eventh += `${parseInt(`${backwardC}`) >> (Math.min(4, Math.abs(1)))}`;
          let evento = false;
         floatingp /= Math.max(floatingp, 4);
         evento = (evento ? !evento : evento);
      let taiwanO = 5650288.0 <= backwardC;
      do {
          let lessf: Array<any> = [504, 837, 459];
          let sliderI = 5.0;
          let redirectB = false;
         backwardC *= parseFloat(`${lessf.length}`);
         lessf.push(2 | parseInt(`${sliderI}`));
         sliderI += parseFloat(`${3 + parseInt(`${sliderI}`)}`);
         redirectB = sliderI < 57.9;
         if (taiwanO) {
            break;
         }
      } while (taiwanO && (5.31 < (backwardC / (Math.max(parseFloat(`${eventh.length}`), 2))) && 3 < (parseInt(`${backwardC}`) / (Math.max(eventh.length, 2)))));
      let default_be = 8820723 <= eventh.length;
      do {
          let ewarded1 = 2.0;
          let product5 = String.fromCharCode(100,101,97,100,105,110,101,95,106,95,51,54,0);
          let styles3 = 4.0;
          let mode5 = String.fromCharCode(99,111,117,110,116,115,95,108,95,52,50,0);
         eventh += `${mode5.length + 3}`;
         ewarded1 *= (parseFloat(`${product5 == String.fromCharCode(85,0) ? parseInt(`${styles3}`) : product5.length}`));
         styles3 += parseFloat(`${parseInt(`${ewarded1}`)}`);
         mode5 = `${product5.length}`;
         if (default_be) {
            break;
         }
      } while (default_be && (eventh.length < expandf));
      frame_z1H = pressureF == String.fromCharCode(114,0);
       let playlistk = 1;
       let mbjscommonn = true;
       let privilegey = 1;
      while (3 >= (playlistk ^ 1) && !mbjscommonn) {
         mbjscommonn = playlistk <= 43;
         break;
      }
      let klevine = mbjscommonn ? !mbjscommonn : mbjscommonn;
      do {
         mbjscommonn = !mbjscommonn;
         if (klevine) {
            break;
         }
      } while (((privilegey / 4) > 5 && privilegey > 4) && klevine);
      for (let b = 0; b < 2; b++) {
         mbjscommonn = mbjscommonn || 26 < privilegey;
      }
         playlistk |= 2 | playlistk;
          let detailsY = 4.0;
          let hejiF = 1.0;
          let searchbari = 0.0;
         privilegey *= ((mbjscommonn ? 1 : 2) << (Math.min(Math.abs(privilegey), 4)));
         detailsY -= parseInt(`${searchbari}`) / (Math.max(4, parseInt(`${hejiF}`)));
         hejiF *= parseInt(`${detailsY}`);
         searchbari -= parseFloat(`${parseInt(`${hejiF}`)}`);
      while (!mbjscommonn) {
         playlistk /= Math.max(2, 2 - privilegey);
         break;
      }
          let referrerO = 4.0;
         mbjscommonn = 53 <= privilegey;
         referrerO -= 1 * parseInt(`${referrerO}`);
      let w_titleB = playlistk >= 5808830;
      do {
         playlistk -= ((mbjscommonn ? 2 : 2) * privilegey);
         if (w_titleB) {
            break;
         }
      } while ((!mbjscommonn) && w_titleB);
          let indicator5 = String.fromCharCode(118,97,114,108,101,110,103,116,104,95,122,95,56,52,0);
         mbjscommonn = 50 == indicator5.length;
      playlist8 = `${parseInt(`${hooksx}`)}`;
   let zhubo2 = playlist8 == String.fromCharCode(105,52,115,102,0);
   do {
      playlist8 = `${parseInt(`${hooksx}`) & 3}`;
      if (zhubo2) {
         break;
      }
   } while (zhubo2 && (4 < (2 + playlist8.length) && (2 + playlist8.length) < 3));
       let settingZ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,115,116,97,114,116,95,50,95,54,48,0),String.fromCharCode(102,95,56,48,95,112,97,103,105,110,103,0)], [String.fromCharCode(115,97,102,101,115,116,97,99,107,95,104,95,54,0),String.fromCharCode(104,97,110,100,108,101,114,95,101,95,55,49,0)], [String.fromCharCode(117,95,51,95,100,111,108,108,97,114,0),String.fromCharCode(107,95,57,55,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0)]]);
         settingZ = new Map([[`${settingZ.size}`, 1]]);
      for (let z = 0; z < 1; z++) {
          let rcopy_c6N = true;
          let assistp = false;
          let pauseH = 2.0;
         settingZ.set(`${pauseH}`, parseInt(`${pauseH}`) - 3);
         rcopy_c6N = assistp;
      }
      for (let w = 0; w < 1; w++) {
          let shirtP = String.fromCharCode(108,95,49,52,95,99,111,100,101,98,111,111,107,115,0);
          let grayU = String.fromCharCode(108,105,98,119,101,98,112,95,52,95,57,51,0);
          let bufferG = String.fromCharCode(103,108,111,115,115,95,106,95,54,51,0);
          let searchbarB: Array<any> = [827, 228];
         settingZ.set(bufferG, shirtP.length);
         shirtP = `${searchbarB.length * grayU.length}`;
         grayU = `${(String.fromCharCode(68,0) == grayU ? searchbarB.length : grayU.length)}`;
         bufferG = `${searchbarB.length >> (Math.min(Math.abs(3), 1))}`;
      }
      adult4 *= 3;
   if (1 <= specS.length || frame_z1H) {
       let sharedI = true;
       let type_13v = 4.0;
       let moonL: Array<any> = [String.fromCharCode(121,95,53,49,95,97,114,99,104,105,118,101,0), String.fromCharCode(103,95,51,95,115,112,105,108,108,115,105,122,101,0), String.fromCharCode(111,95,51,53,0)];
       let tickedv = 2;
      while (tickedv == moonL.length) {
         moonL.push(tickedv);
         break;
      }
         sharedI = 31 > moonL.length;
         sharedI = 81 >= tickedv;
      if (moonL.length == tickedv) {
         tickedv += parseInt(`${type_13v}`);
      }
      if (!sharedI && (type_13v * 4.74) >= 2.13) {
         sharedI = 33 == tickedv;
      }
         tickedv += parseInt(`${type_13v}`);
       let type_wt1: Array<any> = [734, 807];
       let typingl: Array<any> = [265, 795];
         typingl = [typingl.length];
      while (moonL.length >= type_13v) {
         type_13v *= moonL.length;
         break;
      }
         type_wt1 = [2 << (Math.min(Math.abs(parseInt(`${type_13v}`)), 4))];
      let m_unlockc = 5993828 >= type_wt1.length;
      do {
         type_wt1.push(tickedv % (Math.max(moonL.length, 7)));
         if (m_unlockc) {
            break;
         }
      } while ((5 >= (tickedv / (Math.max(type_wt1.length, 9)))) && m_unlockc);
         sharedI = moonL.includes(sharedI);
      specS += `${specS.length}`;
   }
   if (buttonR.length > 5) {
      frame_z1H = saveJ >= album_.length;
   }
      accepted1 = `${((frame_z1H ? 2 : 3) << (Math.min(Math.abs(2), 4)))}`;

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
                  <TouchableOpacity activeOpacity={0.85}
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
                  <TouchableOpacity activeOpacity={0.85}
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
