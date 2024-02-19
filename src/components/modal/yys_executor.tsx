import React, { Suspense, memo, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VipModal from './yys_runtime_custom';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '@hooks';
import {
  resetBecomeVip,
  showLoginAction,
} from '@redux';
import FastImage from 'react-native-fast-image';
import { SHOW_ZF_CONST } from '@utility';
import { AdultVipPrivilegeOverlay } from './yys_libsentry_libreanimated';
import { SportVipPrivilegeOverlay } from './yys_iconwatch';
import { CommonVipPrivilegeOverlay } from './yys_borderless_submit';

interface yysIconarrowrightorangeStation {
  showBecomeVIPOverlay: boolean;
  setShowBecomeVIPOverlay: any;
  isJustClose?: boolean;
  selectedTab: 'sport' | 'xvod' | 'common',
  onClose?: () => void,
}

function ExpiredOverlay({
  showBecomeVIPOverlay = false,
  setShowBecomeVIPOverlay,
  isJustClose,
  selectedTab,
  onClose,
}: yysIconarrowrightorangeStation) {
  const navigator = useNavigation();
  const dispatch = useAppDispatch();
  const route = useRoute();

  
  
  

  const { colors, textVariants, spacing, icons } = useTheme();

  const renderOverlay = () => {
       let libavcodec6 = String.fromCharCode(112,107,103,99,111,110,102,105,103,95,56,95,52,55,0);
    let libapminsightbG = false;
    let qaagD: Map<any, any> = new Map([[String.fromCharCode(122,95,49,54,95,101,109,111,116,105,99,111,110,0),false ], [String.fromCharCode(114,101,115,105,103,110,95,98,95,49,55,0),false ], [String.fromCharCode(107,95,53,56,95,115,112,111,105,108,101,114,115,0),false ]]);
    let analyticz = 2.0;
    let iconfeedbackR = 3;
    let sideh = 0.0;
    let codegenq: Array<any> = [437, 397];
    let cornerkick7 = 3.0;
    let arrowrighta = true;
    let suggestionh = String.fromCharCode(99,111,100,101,99,112,97,114,95,121,95,49,50,0);
    let executorW = 3;
    let mapbuffera = String.fromCharCode(109,121,115,101,108,102,95,100,95,54,54,0);
   for (let j = 0; j < 3; j++) {
      sideh *= parseFloat(`${qaagD.size % 2}`);
   }
   while (4 < (3 * codegenq.length)) {
      arrowrighta = libavcodec6.length > parseInt(`${analyticz}`);
      break;
   }
       let sinaK = String.fromCharCode(111,95,50,49,95,103,101,111,98,116,97,103,0);
       let private_nD = String.fromCharCode(108,95,53,57,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
         sinaK += `${1 & private_nD.length}`;
          let combineb: Array<any> = [723, 613];
          let shielddonef: Array<any> = [627, 662];
         private_nD = `${(private_nD == String.fromCharCode(111,0) ? private_nD.length : sinaK.length)}`;
         combineb = [1 << (Math.min(5, combineb.length))];
         shielddonef = [shielddonef.length];
         private_nD = `${(String.fromCharCode(66,0) == sinaK ? private_nD.length : sinaK.length)}`;
       let middlesound8 = String.fromCharCode(114,95,50,56,95,115,117,112,101,114,119,105,110,100,111,119,0);
       let apps5 = String.fromCharCode(117,112,108,111,97,100,115,95,109,95,51,48,0);
       let downt = String.fromCharCode(108,95,50,56,95,108,101,118,101,108,0);
          let transferv: Array<any> = [674, 653];
          let lightV = String.fromCharCode(99,117,101,112,111,105,110,116,95,99,95,53,49,0);
          let homeV: Array<any> = [String.fromCharCode(99,100,102,116,95,101,95,56,51,0), String.fromCharCode(117,95,50,50,95,97,117,116,104,111,114,105,122,97,116,105,111,110,0)];
         middlesound8 = `${sinaK.length >> (Math.min(Math.abs(3), 5))}`;
         transferv.push(2);
         lightV += `${lightV.length - 2}`;
         homeV = [lightV.length];
      libavcodec6 += `${parseInt(`${cornerkick7}`) | 3}`;
   for (let u = 0; u < 1; u++) {
       let fields = String.fromCharCode(121,95,55,49,95,97,98,111,117,116,0);
       let toponw = String.fromCharCode(105,95,53,51,95,105,99,111,110,0);
       let ucopy_6h = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,53,95,49,51,0);
       let rncoren: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,95,110,95,51,0),72], [String.fromCharCode(115,114,112,95,114,95,51,53,0),531], [String.fromCharCode(114,116,109,112,100,104,95,52,95,54,52,0),345]]);
       let componentregistry7: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,105,122,101,100,95,98,95,51,54,0),757], [String.fromCharCode(99,111,112,121,95,48,95,56,52,0),712], [String.fromCharCode(100,111,99,108,105,115,116,95,116,95,53,56,0),1]]);
      if (fields.length > 4 && toponw != String.fromCharCode(56,0)) {
         toponw = `${toponw.length << (Math.min(3, Math.abs(componentregistry7.size)))}`;
      }
      for (let l = 0; l < 2; l++) {
          let reactnativejsW = 3;
          let progress1 = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,53,95,52,56,0);
          let wifirouterO = 5.0;
          let analytics3 = String.fromCharCode(121,97,100,105,102,95,110,95,54,48,0);
         ucopy_6h += `${(String.fromCharCode(72,0) == ucopy_6h ? ucopy_6h.length : reactnativejsW)}`;
         reactnativejsW ^= progress1.length + 3;
         progress1 = `${parseInt(`${wifirouterO}`)}`;
         wifirouterO /= Math.max((progress1 == String.fromCharCode(110,0) ? progress1.length : parseInt(`${wifirouterO}`)), 5);
         analytics3 += `${analytics3.length - 2}`;
      }
      while (toponw != String.fromCharCode(74,0) && fields != String.fromCharCode(107,0)) {
         toponw = `${toponw.length / 1}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         rncoren = new Map([[fields, toponw.length]]);
      }
      while (componentregistry7.get(`${rncoren.size}`) != null) {
         componentregistry7 = new Map([[toponw, 3]]);
         break;
      }
      let chinaa = String.fromCharCode(121,105,111,52,48,113,0) == ucopy_6h;
      do {
         ucopy_6h = `${toponw.length / 3}`;
         if (chinaa) {
            break;
         }
      } while (chinaa && (4 <= (5 * ucopy_6h.length)));
         componentregistry7.set(toponw, fields.length | toponw.length);
          let utilsW = String.fromCharCode(119,97,108,107,95,116,95,54,49,0);
          let defaultpredictionprofilep = 5;
         toponw = "2";
         utilsW = `${defaultpredictionprofilep - 1}`;
         defaultpredictionprofilep |= defaultpredictionprofilep - 1;
         ucopy_6h = `${3 + fields.length}`;
          let phoneG: Array<any> = [371, 881];
         toponw = "1";
         phoneG.push(phoneG.length);
         toponw += `${ucopy_6h.length ^ 1}`;
         fields = `${(String.fromCharCode(118,0) == toponw ? toponw.length : rncoren.size)}`;
         componentregistry7.set(toponw, 1);
         rncoren = new Map([[toponw, fields.length]]);
          let filter5: Array<any> = [589, 920];
         componentregistry7.set(ucopy_6h, (String.fromCharCode(119,0) == ucopy_6h ? toponw.length : ucopy_6h.length));
         filter5 = [filter5.length];
      iconfeedbackR ^= ucopy_6h.length;
   }

    if (selectedTab === 'xvod') {

   if (4.79 < cornerkick7) {
      arrowrighta = !arrowrighta;
   }
       let crossA = String.fromCharCode(115,109,112,116,101,95,114,95,52,50,0);
       let showmorec = 3;
         crossA += `${crossA.length}`;
      for (let r = 0; r < 2; r++) {
          let airbnbstarv = 3.0;
          let graphicsy = String.fromCharCode(112,114,101,102,102,101,114,101,100,95,119,95,54,50,0);
          let textinputt = String.fromCharCode(117,110,105,113,117,101,108,121,95,106,95,51,56,0);
         crossA = `${showmorec}`;
         airbnbstarv *= graphicsy.length;
         graphicsy += `${(graphicsy == String.fromCharCode(109,0) ? graphicsy.length : parseInt(`${airbnbstarv}`))}`;
         textinputt += `${parseInt(`${airbnbstarv}`)}`;
      }
      while ((2 | crossA.length) > 4 && 2 > (crossA.length | showmorec)) {
          let componentregistryC: Map<any, any> = new Map([[String.fromCharCode(99,111,115,112,105,95,105,95,52,48,0),String.fromCharCode(97,117,116,111,108,111,99,107,95,50,95,54,49,0)], [String.fromCharCode(115,99,114,111,108,108,95,106,95,52,49,0),String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,95,108,95,52,55,0)]]);
          let floaterA = 1.0;
          let halffieldimageq = true;
         showmorec &= componentregistryC.size;
         componentregistryC.set(`${floaterA}`, (parseInt(`${floaterA}`) % (Math.max(5, (halffieldimageq ? 4 : 4)))));
         halffieldimageq = floaterA < 81.89 && !halffieldimageq;
         break;
      }
      while (crossA.includes(`${showmorec}`)) {
          let streamings: Map<any, any> = new Map([[String.fromCharCode(119,97,110,116,95,98,95,49,55,0),384], [String.fromCharCode(98,95,53,55,95,99,111,110,116,101,110,116,0),316]]);
          let libjsijniprofilerF = String.fromCharCode(120,95,57,55,95,99,111,108,100,0);
          let arrowrightwithtailL = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,57,95,54,56,0);
          let calendarJ = 0.0;
          let listm = false;
         showmorec *= 2;
         streamings.set(`${listm}`, ((listm ? 2 : 1) * 2));
         libjsijniprofilerF = `${streamings.size}`;
         arrowrightwithtailL = `${((listm ? 5 : 4) << (Math.min(Math.abs(2), 5)))}`;
         calendarJ *= 1 % (Math.max(2, parseInt(`${calendarJ}`)));
         break;
      }
         showmorec |= 3;
      for (let p = 0; p < 3; p++) {
          let verticalV = String.fromCharCode(99,104,114,111,110,111,95,112,95,54,50,0);
         showmorec |= 3;
         verticalV += `${verticalV.length * verticalV.length}`;
      }
      codegenq.push(2 & parseInt(`${analyticz}`));
      qaagD = new Map([[`${qaagD.size}`, (1 + (libapminsightbG ? 5 : 4))]]);
       let containerd: Map<any, any> = new Map([[String.fromCharCode(118,95,54,54,95,109,101,109,98,101,114,115,104,105,112,0),String.fromCharCode(99,95,55,52,95,107,101,109,112,102,0)], [String.fromCharCode(99,97,108,108,115,95,54,95,55,48,0),String.fromCharCode(99,108,105,99,107,115,95,53,95,51,48,0)], [String.fromCharCode(121,95,55,54,95,105,109,112,111,114,116,0),String.fromCharCode(113,95,52,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0)]]);
       let policyT = String.fromCharCode(102,97,100,101,100,95,98,95,54,56,0);
       let adultd: Array<any> = [253, 912, 21];
      while ((adultd.length / (Math.max(4, 2))) >= 2 && (adultd.length / (Math.max(4, policyT.length))) >= 4) {
          let dropdowny = 2.0;
          let predictionbuttoni = true;
         policyT = "3";
         dropdowny *= 1 * parseInt(`${dropdowny}`);
         predictionbuttoni = dropdowny <= dropdowny;
         break;
      }
         adultd = [3 + policyT.length];
          let nalyticsS = 5.0;
          let iconnotificationnewV = String.fromCharCode(109,95,56,50,95,115,104,97,108,108,0);
          let backwhiteT = String.fromCharCode(98,121,116,101,115,104,117,109,97,110,95,97,95,57,51,0);
         policyT = `${(String.fromCharCode(97,0) == iconnotificationnewV ? containerd.size : iconnotificationnewV.length)}`;
         nalyticsS *= backwhiteT.length;
         backwhiteT = `${(String.fromCharCode(112,0) == backwhiteT ? parseInt(`${nalyticsS}`) : backwhiteT.length)}`;
          let schedulerO = 5;
          let securityB: Array<any> = [String.fromCharCode(112,111,115,116,112,114,111,99,95,52,95,51,52,0), String.fromCharCode(100,111,109,97,105,110,95,117,95,56,57,0)];
         adultd = [securityB.length - 3];
         schedulerO <<= Math.min(5, Math.abs(schedulerO + schedulerO));
         securityB.push(1);
      let notificationgrayN = 5562639 >= adultd.length;
      do {
         adultd = [2];
         if (notificationgrayN) {
            break;
         }
      } while (notificationgrayN && (!Array.from(containerd.values()).includes(adultd.length)));
         containerd = new Map([[`${containerd.size}`, containerd.size]]);
      let klevinz = String.fromCharCode(108,116,48,114,111,0) == policyT;
      do {
         policyT = `${policyT.length}`;
         if (klevinz) {
            break;
         }
      } while (klevinz && ((2 & policyT.length) < 2 && (2 & policyT.length) < 3));
         policyT = `${policyT.length << (Math.min(2, Math.abs(containerd.size)))}`;
         adultd.push(2);
      libapminsightbG = 35 < codegenq.length;
      return (
        <AdultVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={() => {
            if (onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
        />
      );
    } else if (selectedTab === 'sport') {

   for (let b = 0; b < 2; b++) {
      arrowrighta = analyticz >= 10.21;
   }
   for (let c = 0; c < 1; c++) {
      libapminsightbG = sideh < 67.82 || iconfeedbackR < 39;
   }
      cornerkick7 -= parseFloat(`${3}`);
      codegenq.push(parseInt(`${analyticz}`) << (Math.min(5, Math.abs(1))));
      return (
        <SportVipPrivilegeOverlay
          showCondition={showBecomeVIPOverlay}
          onClose={({ isAutoClose }) => {
            if (!isAutoClose && onClose) onClose();
            setShowBecomeVIPOverlay(false);
          }}
        />
      );
    } else if (selectedTab === 'common') {

   let gesturesr = codegenq.length <= 6016881;
   do {
      codegenq.push(iconfeedbackR - parseInt(`${sideh}`));
      if (gesturesr) {
         break;
      }
   } while (((5 - codegenq.length) >= 4 || (qaagD.size - codegenq.length) >= 5) && gesturesr);
       let hooksq: Array<any> = [238, 765, 241];
       let downloadq = 5.0;
         downloadq -= 3 >> (Math.min(5, hooksq.length));
       let renderk: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,111,95,50,51,0),true ], [String.fromCharCode(103,95,49,49,95,109,111,100,117,108,101,0),false ]]);
      let commonr = 8252006.0 >= downloadq;
      do {
         downloadq *= hooksq.length + 3;
         if (commonr) {
            break;
         }
      } while (commonr && ((downloadq - 5.97) < 3.68));
      if (1 > (3 - renderk.size) && 2.23 > (downloadq + 3.98)) {
         downloadq -= 2 >> (Math.min(3, hooksq.length));
      }
         renderk = new Map([[`${hooksq.length}`, hooksq.length]]);
      for (let y = 0; y < 1; y++) {
          let rewindM = true;
         downloadq *= renderk.size << (Math.min(Math.abs(2), 3));
      }
      iconfeedbackR ^= parseInt(`${cornerkick7}`);
      qaagD.set(`${executorW}`, parseInt(`${cornerkick7}`));
   while ((4 * suggestionh.length) <= 5) {
      suggestionh += `${((libapminsightbG ? 5 : 1) % (Math.max(suggestionh.length, 8)))}`;
      break;
   }
      return <CommonVipPrivilegeOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {

   while ((iconfeedbackR / 4) < 3 || arrowrighta) {
       let basketball9: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,95,111,95,48,0),true ], [String.fromCharCode(122,105,103,122,97,103,95,109,95,55,56,0),false ], [String.fromCharCode(109,97,99,104,95,117,95,52,48,0),true ]]);
      while (5 == basketball9.size) {
         basketball9.set(`${basketball9.size}`, basketball9.size);
         break;
      }
         basketball9.set(`${basketball9.size}`, basketball9.size >> (Math.min(Math.abs(basketball9.size), 5)));
          let side1 = 0.0;
          let libapminsightbY = String.fromCharCode(113,95,52,54,95,99,111,108,108,101,99,116,0);
          let iconnotificationnew3: Map<any, any> = new Map([[String.fromCharCode(97,95,55,53,0),String.fromCharCode(102,111,114,101,105,103,110,95,118,95,56,57,0)], [String.fromCharCode(100,97,112,95,107,95,53,52,0),String.fromCharCode(114,111,117,116,105,110,115,95,53,95,49,55,0)], [String.fromCharCode(105,95,51,52,95,112,111,105,110,116,0),String.fromCharCode(115,117,112,112,114,101,115,115,95,120,95,49,50,0)]]);
         basketball9.set(libapminsightbY, 1 ^ basketball9.size);
         side1 *= parseFloat(`${parseInt(`${side1}`) - iconnotificationnew3.size}`);
         libapminsightbY += `${parseInt(`${side1}`)}`;
         iconnotificationnew3 = new Map([[`${iconnotificationnew3.size}`, parseInt(`${side1}`) - 2]]);
      arrowrighta = analyticz <= 70.98;
      break;
   }
       let libtob3 = String.fromCharCode(102,102,116,115,95,57,95,57,57,0);
      for (let y = 0; y < 1; y++) {
          let emojiheartI = 4.0;
         libtob3 = `${libtob3.length}`;
         emojiheartI /= Math.max(parseFloat(`${parseInt(`${emojiheartI}`)}`), 2);
      }
       let anythinkd = String.fromCharCode(114,95,49,48,48,95,99,111,100,101,99,105,100,0);
      let iconscheduleN = String.fromCharCode(106,49,53,0) == libtob3;
      do {
         libtob3 = `${2 >> (Math.min(3, anythinkd.length))}`;
         if (iconscheduleN) {
            break;
         }
      } while ((!anythinkd.startsWith(`${libtob3.length}`)) && iconscheduleN);
      sideh -= parseFloat(`${iconfeedbackR << (Math.min(Math.abs(parseInt(`${cornerkick7}`)), 5))}`);
   while (!libapminsightbG && arrowrighta) {
      libapminsightbG = codegenq.length == 67;
      break;
   }
       let googleN: Array<any> = [885, 178];
       let orangeclockC = String.fromCharCode(110,111,114,109,97,108,105,115,101,95,118,95,56,57,0);
       let layoutG = String.fromCharCode(109,95,52,52,95,115,104,105,109,109,101,114,0);
       let homeinactiveR: Array<any> = [547, 825, 782];
      while (3 < (3 | orangeclockC.length) || 5 < (googleN.length | 3)) {
          let filledJ = 3.0;
          let iconq = String.fromCharCode(116,95,53,54,95,98,97,99,107,0);
          let resendW = String.fromCharCode(110,95,49,50,95,99,100,97,116,101,0);
          let cornershootU: Map<any, any> = new Map([[String.fromCharCode(119,95,50,53,95,105,108,108,101,103,97,108,0),821], [String.fromCharCode(102,114,97,109,101,110,117,109,95,49,95,51,53,0),46]]);
          let editi = String.fromCharCode(122,95,57,95,112,117,112,105,108,0);
         orangeclockC = `${iconq.length >> (Math.min(Math.abs(1), 4))}`;
         filledJ += resendW.length;
         iconq = `${cornershootU.size << (Math.min(Math.abs(2), 2))}`;
         resendW = "1";
         cornershootU.set(`${resendW}`, resendW.length);
         editi += `${cornershootU.size / 3}`;
         break;
      }
      let matchesE = googleN.length <= 7462914;
      do {
         googleN = [homeinactiveR.length];
         if (matchesE) {
            break;
         }
      } while (((googleN.length + 1) >= 2) && matchesE);
       let nnewinterstitialV = 1.0;
      while (1 == orangeclockC.length) {
          let linev = false;
         orangeclockC = `${((linev ? 2 : 4) / (Math.max(homeinactiveR.length, 8)))}`;
         break;
      }
      let redgoalp = 6268192 <= orangeclockC.length;
      do {
          let gift2 = String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,113,95,55,48,0);
          let play4 = 3.0;
          let foregroundG = String.fromCharCode(108,95,55,52,95,112,114,101,0);
          let subbasketballplayerf = String.fromCharCode(108,105,115,116,95,104,95,53,54,0);
          let langQ: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,100,105,115,99,111,114,100,0),false ], [String.fromCharCode(112,97,103,101,95,112,95,54,50,0),true ], [String.fromCharCode(115,101,109,105,99,111,108,111,110,95,51,95,51,52,0),true ]]);
         orangeclockC += `${parseInt(`${play4}`)}`;
         gift2 += `${subbasketballplayerf.length >> (Math.min(Math.abs(3), 5))}`;
         play4 -= parseFloat(`${subbasketballplayerf.length + foregroundG.length}`);
         foregroundG = `${foregroundG.length}`;
         langQ = new Map([[`${langQ.size}`, subbasketballplayerf.length]]);
         if (redgoalp) {
            break;
         }
      } while (redgoalp && (orangeclockC.length == 2));
       let zhubof = 0;
       let history7 = 3.0;
      for (let m = 0; m < 1; m++) {
         history7 /= Math.max(3, (String.fromCharCode(81,0) == orangeclockC ? orangeclockC.length : googleN.length));
      }
      iconfeedbackR += libavcodec6.length + 2;
          if (onClose) onClose();

   while (!arrowrighta) {
       let imageactionliveO = 1.0;
       let privatechatbgX = 1.0;
       let loginsuccess4 = 3.0;
       let singleQ = 2.0;
         loginsuccess4 -= parseInt(`${privatechatbgX}`);
      if ((4 - imageactionliveO) <= 1.73) {
         privatechatbgX -= parseInt(`${loginsuccess4}`);
      }
         loginsuccess4 /= Math.max(3, parseInt(`${privatechatbgX}`));
          let videobufferloading6 = String.fromCharCode(106,95,56,48,95,109,97,115,107,0);
          let modelsH = String.fromCharCode(103,104,97,115,104,95,52,95,55,51,0);
          let play_ = String.fromCharCode(116,95,56,50,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
         imageactionliveO += parseFloat(`${parseInt(`${imageactionliveO}`)}`);
         videobufferloading6 += `${play_.length >> (Math.min(2, modelsH.length))}`;
         modelsH += "3";
         play_ += `${videobufferloading6.length % 3}`;
      if (5.91 == (imageactionliveO + loginsuccess4)) {
         imageactionliveO /= Math.max(parseFloat(`${1}`), 3);
      }
      while ((5.56 - singleQ) < 2.69) {
         singleQ -= parseFloat(`${parseInt(`${privatechatbgX}`)}`);
         break;
      }
         loginsuccess4 -= parseInt(`${loginsuccess4}`) % (Math.max(10, parseInt(`${singleQ}`)));
      let iconnewsshare0 = 6230517.0 <= imageactionliveO;
      do {
          let javac = String.fromCharCode(100,95,52,54,95,97,110,110,101,120,0);
          let libfabricjni_: Array<any> = [String.fromCharCode(115,101,114,105,102,95,109,95,56,54,0), String.fromCharCode(102,95,56,50,95,112,114,101,108,105,109,105,110,97,114,121,0), String.fromCharCode(108,105,98,101,114,116,121,95,116,95,53,0)];
          let distb = 2.0;
         imageactionliveO *= parseFloat(`${parseInt(`${privatechatbgX}`) * javac.length}`);
         javac = `${libfabricjni_.length}`;
         libfabricjni_.push(libfabricjni_.length);
         distb /= Math.max(1, libfabricjni_.length);
         if (iconnewsshare0) {
            break;
         }
      } while (((imageactionliveO * 1.2) == 3.34) && iconnewsshare0);
      while (imageactionliveO < 4.24) {
         privatechatbgX += parseInt(`${privatechatbgX}`) >> (Math.min(Math.abs(parseInt(`${imageactionliveO}`)), 5));
         break;
      }
      let math4 = 5370271.0 <= loginsuccess4;
      do {
         loginsuccess4 *= parseInt(`${imageactionliveO}`);
         if (math4) {
            break;
         }
      } while (math4 && (3.83 <= (privatechatbgX + 4)));
      while (4.59 > loginsuccess4) {
         singleQ /= Math.max(4, parseFloat(`${parseInt(`${imageactionliveO}`) | parseInt(`${loginsuccess4}`)}`));
         break;
      }
          let sharemodalY = String.fromCharCode(104,95,51,95,115,97,108,116,101,100,0);
         privatechatbgX += sharemodalY.length * 2;
      arrowrighta = !arrowrighta;
      break;
   }
      libavcodec6 += `${3 - suggestionh.length}`;
       let penaltyshootZ: Array<any> = [869, 812];
       let libtobY = 3;
      for (let g = 0; g < 3; g++) {
         penaltyshootZ.push(penaltyshootZ.length);
      }
          let share2 = String.fromCharCode(114,97,116,105,110,103,95,118,95,55,49,0);
          let libbuffern = String.fromCharCode(117,95,57,53,95,97,112,97,114,97,109,115,0);
          let showlessa = String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,50,95,52,54,0);
         penaltyshootZ = [1];
         share2 = `${share2.length}`;
         libbuffern += `${showlessa.length - libbuffern.length}`;
         showlessa = `${1 / (Math.max(6, share2.length))}`;
          let airbnbstarselectedN = String.fromCharCode(108,95,52,50,95,112,114,105,110,116,0);
         libtobY %= Math.max((String.fromCharCode(100,0) == airbnbstarselectedN ? libtobY : airbnbstarselectedN.length), 1);
          let showlessi: Array<any> = [538, 634, 465];
          let downloadingz = String.fromCharCode(107,95,50,49,95,97,112,109,116,101,115,116,0);
         libtobY += 2 ^ showlessi.length;
         showlessi.push(1 & downloadingz.length);
         downloadingz += `${3 & downloadingz.length}`;
      for (let u = 0; u < 1; u++) {
          let sporty = 1.0;
          let relatedp = 3.0;
          let line8 = false;
         libtobY &= libtobY;
         sporty /= Math.max(parseInt(`${sporty}`) & parseInt(`${relatedp}`), 4);
         relatedp -= parseFloat(`${parseInt(`${relatedp}`) + 1}`);
         line8 = 96.77 > sporty || !line8;
      }
      if ((penaltyshootZ.length & 4) > 5) {
          let libmapbufferjnil = String.fromCharCode(100,111,101,115,95,113,95,56,52,0);
          let privilegeU = String.fromCharCode(101,95,50,57,95,109,118,115,97,100,0);
          let statsJ = String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,51,95,53,50,0);
          let hover7 = 2.0;
         libtobY *= penaltyshootZ.length << (Math.min(statsJ.length, 2));
         libmapbufferjnil = `${privilegeU.length - 1}`;
         privilegeU += `${parseInt(`${hover7}`)}`;
         statsJ += "2";
         hover7 -= privilegeU.length | 3;
      }
      suggestionh += `${iconfeedbackR}`;
   if (analyticz < parseFloat(`${codegenq.length}`)) {
      analyticz /= Math.max(2, parseFloat(`${parseInt(`${analyticz}`) % 1}`));
   }
          setShowBecomeVIPOverlay(false);
        }}
      />
    }
  };


  return (
    <>
      {showBecomeVIPOverlay && (
        <View
          style={{
            height: '100%',
            width: '100%',
            
            position: 'absolute',
            zIndex: 1000,
          }}>
          {renderOverlay()}
        </View>
      )}
    </>
  );
}

export default memo(ExpiredOverlay)

const styles = StyleSheet.create({
  closeBtnContainer: {
    height: 20,
    width: 20,
    marginTop: -20,
    marginRight: -10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(201, 201, 201, 0.3)',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 10,
    paddingTop: 25,
    paddingBottom: 10,
  },

  btn: {
    backgroundColor: '#FAC33D',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  }
})
