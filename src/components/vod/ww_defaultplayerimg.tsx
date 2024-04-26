import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/ww_floater';
import { useAppDispatch } from '@hooks/ww_catagory_neon';
import VodCard from '../../components/vod/ww_accepted_current';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wwControl } from '@type/ww_dycreator_result';
import { disableAdultMode, enableAdultMode } from '@redux/actions/ww_hash';
import DeviceInfo from 'react-native-device-info';


interface wwIndexDice {
    vods: Array<wwControl>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: ({ vodId }: { vodId: any }) => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: wwIndexDice) {
    const { textVariants, colors, spacing, icons } = useTheme();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [marginRight, setMarginRight] = useState(5);
    const [cardWidth, setCardWidth] = useState(3);
    const [cardHeight, setCardHeight] = useState(5);

    const width = Math.min(Dimensions.get('window').width, Dimensions.get('window').height);


    const [deviceName, setDeviceName] = useState("");

    DeviceInfo.getDeviceName().then((d) => {
        setDeviceName(d.toLowerCase());
    });
    
    useEffect(() => {
        calculateDimensions;
        
        
        
        
        
        
    }, []);
    const calculateDimensions = useMemo(() => {
       let matchesQ = String.fromCharCode(120,95,53,54,0);
    let stationZ = 0;
    let hooksW = 0.0;
    let switch_ewj: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,102,114,97,110,100,111,109,0),String.fromCharCode(103,95,57,95,114,101,118,101,97,108,0)], [String.fromCharCode(108,95,52,57,95,109,101,116,97,98,111,100,121,0),String.fromCharCode(114,97,100,105,97,108,95,108,95,56,51,0)]]);
    let classes9: Array<any> = [411, 279, 901];
    let plusD = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,111,95,57,51,0);
    let reactnativejsk = String.fromCharCode(116,109,99,100,95,99,95,50,55,0);
    let short_l_P = true;
    let yellowanimationliveD = String.fromCharCode(97,116,114,97,99,112,95,97,95,52,53,0);
    let friendsw = false;
    let fieldH = 0.0;
    let topicy = 5.0;
    let tempnodatagif7 = 4;
    let typingR = true;
   while (2 <= (2 >> (Math.min(4, classes9.length)))) {
      plusD += `${1 - stationZ}`;
      break;
   }
   while (yellowanimationliveD == plusD) {
       let orientationx = 0.0;
       let diceY = true;
       let cornerK: Map<any, any> = new Map([[String.fromCharCode(106,95,53,49,95,111,99,115,112,0),116], [String.fromCharCode(115,97,118,101,100,95,114,95,57,0),818]]);
       let loginsuccess1 = 5.0;
         loginsuccess1 /= Math.max(3, parseInt(`${orientationx}`));
      for (let t = 0; t < 2; t++) {
          let m_imageO = String.fromCharCode(122,95,57,50,95,108,101,103,101,110,100,0);
          let p_countp = false;
         cornerK.set(`${p_countp}`, (2 + (p_countp ? 5 : 3)));
         m_imageO += `${m_imageO.length}`;
      }
      while (cornerK.get(`${loginsuccess1}`) != null) {
          let overlay3 = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,56,95,49,57,0);
         loginsuccess1 /= Math.max(4, parseInt(`${loginsuccess1}`));
         overlay3 = `${overlay3.length * 1}`;
         break;
      }
         orientationx -= parseFloat(`${parseInt(`${loginsuccess1}`)}`);
      let description_wG = orientationx <= 6051813.0;
      do {
          let container1 = 0;
          let halfV = 4.0;
          let greytickW = 0.0;
          let agreementZ = String.fromCharCode(106,95,54,49,95,116,103,115,0);
          let hiadO = String.fromCharCode(116,114,105,97,110,103,108,101,115,95,54,95,50,50,0);
         orientationx += parseFloat(`${1 & agreementZ.length}`);
         container1 |= 3;
         halfV += parseFloat(`${1 + parseInt(`${greytickW}`)}`);
         greytickW -= (parseFloat(`${String.fromCharCode(122,0) == hiadO ? hiadO.length : container1}`));
         agreementZ += `${hiadO.length + parseInt(`${greytickW}`)}`;
         if (description_wG) {
            break;
         }
      } while ((5.66 >= orientationx) && description_wG);
          let g_hashq = true;
          let favoriteb = String.fromCharCode(112,114,101,115,101,116,115,95,113,95,49,0);
         cornerK = new Map([[`${loginsuccess1}`, parseInt(`${loginsuccess1}`) * favoriteb.length]]);
         g_hashq = !g_hashq || g_hashq;
         favoriteb += `${(1 << (Math.min(Math.abs((g_hashq ? 3 : 2)), 1)))}`;
      for (let b = 0; b < 2; b++) {
          let castm = false;
          let runtime2 = 4.0;
          let libpangleflippedX = 4;
          let configH = String.fromCharCode(105,95,49,48,95,108,111,111,112,0);
          let chinasameq = String.fromCharCode(102,95,54,50,95,115,116,100,97,116,111,109,105,99,0);
         cornerK.set(`${castm}`, (chinasameq.length - (castm ? 1 : 4)));
         runtime2 -= parseInt(`${runtime2}`);
         libpangleflippedX *= libpangleflippedX / (Math.max(2, parseInt(`${runtime2}`)));
         configH = "3";
         chinasameq = `${parseInt(`${runtime2}`) - 1}`;
      }
         cornerK.set(`${orientationx}`, (parseInt(`${orientationx}`) ^ (diceY ? 2 : 1)));
         orientationx /= Math.max(4, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${orientationx}`)), 2))}`));
      let roomi = 8381448.0 <= orientationx;
      do {
         orientationx += (parseFloat(`${cornerK.size | (diceY ? 4 : 2)}`));
         if (roomi) {
            break;
         }
      } while (((cornerK.size ^ 5) <= 1 && (5 & cornerK.size) <= 5) && roomi);
          let trashG = String.fromCharCode(99,97,110,100,108,101,95,111,95,56,0);
          let viewsf: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,95,111,95,55,56,0),514], [String.fromCharCode(102,95,53,56,95,117,117,105,100,0),312]]);
          let rewindo = 1.0;
         diceY = viewsf.size < 9;
         trashG = `${parseInt(`${rewindo}`) ^ trashG.length}`;
         viewsf.set(`${rewindo}`, 1 - trashG.length);
          let predictionwinw: Map<any, any> = new Map([[String.fromCharCode(116,95,49,52,95,119,101,101,107,100,97,121,0),411], [String.fromCharCode(120,95,55,57,95,116,105,110,116,0),454], [String.fromCharCode(97,95,51,53,95,100,117,112,101,100,0),510]]);
          let empty6 = 4;
          let nalyticsK = String.fromCharCode(99,117,114,108,95,53,95,53,55,0);
         loginsuccess1 -= 3 >> (Math.min(Math.abs(parseInt(`${orientationx}`)), 4));
         predictionwinw = new Map([[`${predictionwinw.size}`, predictionwinw.size]]);
         empty6 *= 2 >> (Math.min(4, nalyticsK.length));
         nalyticsK = `${nalyticsK.length ^ 2}`;
      plusD = `${parseInt(`${loginsuccess1}`)}`;
      break;
   }

        const PADDING = 8;

   if (1 >= (classes9.length - matchesQ.length)) {
      matchesQ += `${stationZ - 2}`;
   }
   let predictionactiveU = hooksW >= 8607813.0;
   do {
       let upgradea = 2.0;
       let videocommonv = true;
       let notificationfillemptyX: Map<any, any> = new Map([[String.fromCharCode(110,95,50,53,0),565], [String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,48,95,49,53,0),971], [String.fromCharCode(101,112,115,105,108,111,110,95,115,95,50,51,0),420]]);
       let greyT = 2.0;
         videocommonv = videocommonv || greyT == 44.8;
       let encrypt_ = String.fromCharCode(115,121,110,99,97,98,108,101,95,52,95,50,0);
       let executorb = String.fromCharCode(121,95,56,53,95,98,117,110,100,108,101,115,0);
      while (!videocommonv) {
          let control1 = true;
          let tailo = String.fromCharCode(117,95,52,55,95,112,117,115,104,0);
          let m_viewO = 0.0;
          let overlayk = 3.0;
          let telemetryc = 2;
         videocommonv = !control1 || executorb.length == 88;
         control1 = 50.69 > m_viewO;
         tailo = `${telemetryc}`;
         m_viewO += (parseFloat(`${tailo == String.fromCharCode(106,0) ? parseInt(`${m_viewO}`) : tailo.length}`));
         overlayk += parseFloat(`${telemetryc | parseInt(`${overlayk}`)}`);
         break;
      }
       let showe = 4;
       let greye = 0;
          let homeA = true;
         upgradea -= showe | parseInt(`${greyT}`);
         homeA = !homeA;
      while (5 == (executorb.length & 1) && 5 == (greye & 1)) {
         greye &= parseInt(`${greyT}`);
         break;
      }
      let minimize5 = encrypt_.length >= 9185918;
      do {
         encrypt_ += `${((videocommonv ? 1 : 3))}`;
         if (minimize5) {
            break;
         }
      } while (minimize5 && ((1.78 * greyT) < 2.9 && 3 < (parseInt(`${greyT}`) * encrypt_.length)));
         greye /= Math.max(executorb.length, 1);
         encrypt_ = `${((videocommonv ? 5 : 4))}`;
      for (let d = 0; d < 2; d++) {
          let acceptedj: Map<any, any> = new Map([[String.fromCharCode(101,118,101,114,121,95,55,95,49,49,0),String.fromCharCode(103,95,54,50,95,110,115,116,97,110,116,0)], [String.fromCharCode(112,95,55,95,99,97,112,105,116,97,108,105,122,105,110,103,0),String.fromCharCode(103,95,53,53,95,119,101,98,118,105,101,119,0)], [String.fromCharCode(100,105,115,115,111,108,118,101,95,118,95,50,53,0),String.fromCharCode(107,95,49,95,121,97,109,97,104,97,0)]]);
          let reminderP: Array<any> = [284, 792];
         videocommonv = 27 > acceptedj.size;
         acceptedj.set(`${reminderP.length}`, reminderP.length % (Math.max(1, 3)));
      }
      while (!encrypt_.endsWith(`${videocommonv}`)) {
          let downc = String.fromCharCode(100,101,115,104,97,107,101,95,112,95,50,50,0);
          let balli = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,112,95,54,49,0);
         encrypt_ += `${executorb.length ^ notificationfillemptyX.size}`;
         downc = `${3 | downc.length}`;
         balli += "1";
         break;
      }
         greye |= ((videocommonv ? 5 : 4) * parseInt(`${greyT}`));
      hooksW -= parseFloat(`${parseInt(`${upgradea}`)}`);
      if (predictionactiveU) {
         break;
      }
   } while (predictionactiveU && (5.95 == hooksW));
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

      hooksW /= Math.max(parseFloat(`${1}`), 3);
   for (let d = 0; d < 2; d++) {
       let loginsuccess2: Array<any> = [String.fromCharCode(113,95,53,51,95,109,97,114,103,105,110,0), String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,121,95,54,48,0)];
       let runtimescheduler1 = String.fromCharCode(118,95,51,54,95,99,111,118,97,114,105,97,110,99,101,0);
       let indexE: Array<any> = [275, 172];
      if (loginsuccess2.length <= 3) {
         loginsuccess2 = [3 >> (Math.min(1, indexE.length))];
      }
      for (let a = 0; a < 1; a++) {
         runtimescheduler1 += `${loginsuccess2.length}`;
      }
      while (5 >= (2 << (Math.min(2, runtimescheduler1.length))) || 5 >= (loginsuccess2.length << (Math.min(Math.abs(2), 2)))) {
         runtimescheduler1 = `${runtimescheduler1.length}`;
         break;
      }
       let modala = 1.0;
       let matches_ = 1.0;
      let phoneshareq = loginsuccess2.length <= 9025866;
      do {
         loginsuccess2 = [3 & parseInt(`${matches_}`)];
         if (phoneshareq) {
            break;
         }
      } while ((1 < (4 - runtimescheduler1.length)) && phoneshareq);
      if (5 <= (indexE.length << (Math.min(Math.abs(4), 4)))) {
         indexE = [3];
      }
       let halffieldimagey = 0.0;
       let injury1 = 4.0;
          let selectede = 2;
          let strw = String.fromCharCode(103,95,52,55,95,109,115,101,112,115,110,114,0);
         runtimescheduler1 = `${parseInt(`${halffieldimagey}`) % (Math.max(indexE.length, 5))}`;
         selectede |= 2;
         strw = `${(String.fromCharCode(78,0) == strw ? strw.length : selectede)}`;
         loginsuccess2.push(1);
      switch_ewj.set(plusD, plusD.length >> (Math.min(5, matchesQ.length)));
   }
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

   for (let r = 0; r < 3; r++) {
      matchesQ = `${matchesQ.length}`;
   }
   let starg = String.fromCharCode(100,95,103,97,106,112,107,103,117,0) == matchesQ;
   do {
       let profileinactiveo = String.fromCharCode(100,101,115,116,114,111,121,95,113,95,56,51,0);
         profileinactiveo = `${profileinactiveo.length}`;
         profileinactiveo += `${profileinactiveo.length ^ 1}`;
         profileinactiveo += `${2 + profileinactiveo.length}`;
      matchesQ = `${reactnativejsk.length}`;
      if (starg) {
         break;
      }
   } while (starg && (2 < matchesQ.length || short_l_P));
        let cardWidth = Math.min(160, Math.floor(maxWidth));

      plusD += `${yellowanimationliveD.length}`;
   while (1 >= stationZ) {
       let logoutZ = String.fromCharCode(115,117,103,103,101,115,116,95,121,95,55,52,0);
       let vignetteO = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,57,95,49,50,0);
       let mbnativeR = String.fromCharCode(105,99,111,110,105,99,95,52,95,49,51,0);
       let defaultroombg7 = String.fromCharCode(119,95,52,48,95,105,100,101,110,116,105,116,105,101,115,0);
      for (let b = 0; b < 2; b++) {
         mbnativeR = "2";
      }
      let libfollyv = String.fromCharCode(49,107,113,100,50,106,101,106,57,0) == vignetteO;
      do {
          let flipper4 = String.fromCharCode(112,114,111,114,101,115,95,50,95,56,48,0);
          let volumeh = 5.0;
          let tickedh = String.fromCharCode(97,100,115,95,101,95,52,52,0);
          let default_088: Array<any> = [785, 838, 715];
          let login4: Map<any, any> = new Map([[String.fromCharCode(111,99,99,117,112,105,101,100,95,50,95,49,51,0),false ], [String.fromCharCode(100,117,114,97,116,105,111,110,115,95,122,95,50,56,0),true ], [String.fromCharCode(106,95,50,95,103,101,110,101,114,97,116,101,0),true ]]);
         vignetteO = `${1 >> (Math.min(5, Math.abs(login4.size)))}`;
         flipper4 += `${flipper4.length}`;
         volumeh += parseInt(`${volumeh}`) << (Math.min(2, Math.abs(2)));
         tickedh = `${tickedh.length}`;
         default_088 = [flipper4.length | 2];
         login4.set(flipper4, tickedh.length / (Math.max(flipper4.length, 8)));
         if (libfollyv) {
            break;
         }
      } while ((logoutZ.length < 4) && libfollyv);
      while (mbnativeR.length >= 3) {
         mbnativeR += `${defaultroombg7.length}`;
         break;
      }
      while (5 == mbnativeR.length) {
          let liveendmodallogoX = String.fromCharCode(114,103,98,114,103,98,95,103,95,50,50,0);
          let bggradienth = 3.0;
          let carousel_ = String.fromCharCode(98,101,97,114,105,110,103,95,99,95,49,49,0);
          let telegramk = 1.0;
         mbnativeR = `${mbnativeR.length}`;
         liveendmodallogoX += `${parseInt(`${telegramk}`)}`;
         bggradienth += carousel_.length;
         carousel_ = `${1 - parseInt(`${telegramk}`)}`;
         break;
      }
         defaultroombg7 += `${vignetteO.length / (Math.max(9, mbnativeR.length))}`;
      if (mbnativeR.startsWith(vignetteO)) {
          let redirectM = true;
          let window_c3 = 5;
          let headerV = true;
          let long_y5H: Array<any> = [962, 395];
          let libcxxcomponentsc = 4.0;
         mbnativeR = `${parseInt(`${libcxxcomponentsc}`) * 3}`;
         redirectM = window_c3 <= 44;
         window_c3 ^= 3 ^ long_y5H.length;
         headerV = 38 >= window_c3 || !headerV;
         long_y5H.push(window_c3 & 1);
         libcxxcomponentsc *= 2;
      }
      for (let o = 0; o < 1; o++) {
         mbnativeR += `${mbnativeR.length + logoutZ.length}`;
      }
         vignetteO = "3";
      while (mbnativeR.length <= 1) {
          let knewarchdefaultsz = String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,52,95,53,49,0);
          let userY = 4;
          let scheduler_ = String.fromCharCode(119,95,52,95,112,99,109,117,0);
          let projectq = 4.0;
          let emptyw = 4;
         defaultroombg7 = `${logoutZ.length / (Math.max(scheduler_.length, 8))}`;
         knewarchdefaultsz = `${parseInt(`${projectq}`) - userY}`;
         userY &= emptyw >> (Math.min(2, Math.abs(1)));
         scheduler_ = "2";
         projectq *= parseFloat(`${2}`);
         emptyw &= userY;
         break;
      }
          let analyticq = String.fromCharCode(97,98,105,95,52,95,56,53,0);
          let tickedq: Array<any> = [3, 47];
          let nnewarchdefaultse = 0.0;
         defaultroombg7 += `${parseInt(`${nnewarchdefaultse}`)}`;
         analyticq = `${tickedq.length >> (Math.min(analyticq.length, 4))}`;
         tickedq = [analyticq.length >> (Math.min(3, tickedq.length))];
         nnewarchdefaultse -= parseFloat(`${analyticq.length % 3}`);
         vignetteO += `${2 | logoutZ.length}`;
      if (defaultroombg7.length > mbnativeR.length) {
          let settingsV: Map<any, any> = new Map([[String.fromCharCode(113,95,49,48,95,102,115,105,122,101,0),String.fromCharCode(115,95,53,50,95,112,111,105,110,116,101,114,115,0)], [String.fromCharCode(114,101,119,114,105,116,101,114,95,56,95,52,52,0),String.fromCharCode(110,95,55,50,95,109,101,116,104,111,100,0)]]);
          let commonH = 0.0;
         defaultroombg7 += "2";
         settingsV = new Map([[`${settingsV.size}`, 3 * parseInt(`${commonH}`)]]);
         commonH += settingsV.size;
      }
      stationZ >>= Math.min(5, mbnativeR.length);
      break;
   }
        const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

       let delegate_kU = String.fromCharCode(99,95,57,49,95,115,112,97,99,101,115,0);
      while (delegate_kU == delegate_kU) {
          let placeholderw = String.fromCharCode(98,111,117,110,100,115,95,121,95,55,57,0);
          let libsgcorev: Array<any> = [678, 403, 204];
          let libmapbufferjnis = String.fromCharCode(118,95,52,55,95,118,114,108,101,0);
         delegate_kU += `${1 + libmapbufferjnis.length}`;
         placeholderw += `${placeholderw.length - libsgcorev.length}`;
         libsgcorev = [libsgcorev.length];
         libmapbufferjnis += `${libsgcorev.length}`;
         break;
      }
      while (delegate_kU == delegate_kU) {
         delegate_kU += `${delegate_kU.length >> (Math.min(4, delegate_kU.length))}`;
         break;
      }
          let templateprocessorI = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,114,95,55,48,0);
         delegate_kU += `${2 * templateprocessorI.length}`;
      yellowanimationliveD = `${classes9.length ^ 3}`;
   if (4 <= matchesQ.length) {
       let dependencyj: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,101,95,49,57,0),50], [String.fromCharCode(105,95,54,95,110,97,108,115,0),926], [String.fromCharCode(122,95,54,55,95,114,97,110,103,101,115,0),657]]);
       let connectioni = String.fromCharCode(106,95,55,50,95,117,115,114,99,0);
       let sheeta: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,95,111,95,57,56,0),945], [String.fromCharCode(110,111,118,101,99,95,108,95,57,52,0),694], [String.fromCharCode(114,101,115,111,108,118,101,114,115,95,98,95,57,52,0),521]]);
       let listV = 0.0;
       let modal9: Map<any, any> = new Map([[String.fromCharCode(102,95,55,52,95,103,101,116,112,97,103,101,115,105,122,101,0),String.fromCharCode(119,97,108,108,112,97,112,101,114,115,95,54,95,49,50,0)], [String.fromCharCode(110,95,54,53,95,109,98,109,111,100,101,0),String.fromCharCode(116,116,97,100,97,116,97,95,116,95,49,48,48,0)]]);
         connectioni = `${(String.fromCharCode(68,0) == connectioni ? sheeta.size : connectioni.length)}`;
          let footballfiledlayoutH = String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,115,95,57,51,0);
          let iconfeedbackm = String.fromCharCode(119,95,51,56,95,116,104,105,114,116,121,0);
         modal9.set(`${connectioni}`, dependencyj.size);
         footballfiledlayoutH = `${iconfeedbackm.length % 2}`;
         iconfeedbackm += `${iconfeedbackm.length}`;
      let huaweiF = 6839511 <= connectioni.length;
      do {
          let videocommonF: Map<any, any> = new Map([[String.fromCharCode(113,95,57,56,95,112,111,115,116,114,101,113,117,101,115,116,0),false ], [String.fromCharCode(101,95,52,53,95,111,118,97,108,0),true ], [String.fromCharCode(115,108,117,103,95,110,95,57,53,0),false ]]);
          let aboutO = 4.0;
          let phoneT = 5;
          let sendr = String.fromCharCode(115,95,49,51,95,103,114,97,99,101,0);
         connectioni = `${parseInt(`${listV}`)}`;
         videocommonF = new Map([[sendr, phoneT]]);
         aboutO *= parseInt(`${aboutO}`) | videocommonF.size;
         phoneT /= Math.max(4, 2 * sendr.length);
         if (huaweiF) {
            break;
         }
      } while (huaweiF && (connectioni.includes(`${dependencyj.size}`)));
         modal9.set(`${listV}`, 3);
      for (let i = 0; i < 1; i++) {
         modal9 = new Map([[`${modal9.size}`, modal9.size]]);
      }
      let debugN = modal9.size <= 5743997;
      do {
          let s_countx = true;
          let auto_g_i = String.fromCharCode(114,97,112,104,105,99,115,95,102,95,52,52,0);
         modal9 = new Map([[`${dependencyj.size}`, (connectioni == String.fromCharCode(103,0) ? connectioni.length : dependencyj.size)]]);
         s_countx = auto_g_i.length > 75 && s_countx;
         auto_g_i += "2";
         if (debugN) {
            break;
         }
      } while (((5 * connectioni.length) <= 4) && debugN);
         modal9 = new Map([[`${dependencyj.size}`, dependencyj.size << (Math.min(connectioni.length, 5))]]);
      if ((listV * 2.22) > 5.21) {
         connectioni = `${dependencyj.size}`;
      }
      while (1 < (connectioni.length - 4) || 5 < (4 - sheeta.size)) {
         connectioni += "2";
         break;
      }
      if (sheeta.get(`${listV}`) != null) {
         sheeta.set(`${dependencyj.size}`, dependencyj.size * sheeta.size);
      }
      for (let q = 0; q < 3; q++) {
         sheeta.set(`${listV}`, sheeta.size * 1);
      }
      for (let p = 0; p < 3; p++) {
          let fastX = 0.0;
          let filedZ = 0;
          let commonl = 1;
          let final_lm7: Map<any, any> = new Map([[String.fromCharCode(99,97,112,115,95,121,95,55,55,0),false ], [String.fromCharCode(120,95,50,53,95,112,114,101,102,97,99,101,0),false ], [String.fromCharCode(111,118,101,114,104,101,97,100,95,114,95,49,48,0),false ]]);
         connectioni = `${dependencyj.size & 3}`;
         fastX += parseFloat(`${3 << (Math.min(4, Math.abs(final_lm7.size)))}`);
         filedZ <<= Math.min(Math.abs(commonl * final_lm7.size), 1);
         commonl &= final_lm7.size;
      }
      if (2 == (sheeta.size + parseInt(`${listV}`)) && (sheeta.size >> (Math.min(Math.abs(2), 2))) == 1) {
          let ticko: Array<any> = [String.fromCharCode(116,102,114,102,95,106,95,57,52,0), String.fromCharCode(110,95,56,55,95,112,111,112,111,118,101,114,0)];
          let mutedi = true;
          let libjsijniprofilerL = 1.0;
          let profileframe6 = String.fromCharCode(113,95,55,55,95,121,111,110,108,121,120,0);
         listV *= parseFloat(`${ticko.length}`);
         ticko.push((1 ^ (mutedi ? 1 : 5)));
         mutedi = libjsijniprofilerL > 26.100;
         libjsijniprofilerL /= Math.max(3, profileframe6.length);
         profileframe6 += `${3 - parseInt(`${libjsijniprofilerL}`)}`;
      }
      let largebrightnessE = 5672199 <= sheeta.size;
      do {
         sheeta = new Map([[`${modal9.size}`, connectioni.length]]);
         if (largebrightnessE) {
            break;
         }
      } while ((listV == 4.25) && largebrightnessE);
          let sharemodal8: Array<any> = [326, 869];
          let bdxadsdkb = 4.0;
          let injuryF: Map<any, any> = new Map([[String.fromCharCode(101,120,108,117,100,101,100,95,119,95,53,52,0),329], [String.fromCharCode(118,95,56,55,0),923]]);
         dependencyj.set(connectioni, parseInt(`${bdxadsdkb}`) + connectioni.length);
         sharemodal8.push(sharemodal8.length);
         bdxadsdkb += sharemodal8.length;
         injuryF.set(`${sharemodal8.length}`, injuryF.size | 2);
      matchesQ += `${((friendsw ? 1 : 2) | 1)}`;
   }
        if(DeviceInfo.isTablet() || includesKeywords)
        {
            cardWidth = Math.min(145, Math.floor(maxWidth));

       let tickR: Array<any> = [807, 642, 341];
       let manifestp = String.fromCharCode(101,95,49,57,95,100,111,99,117,109,101,110,116,97,116,105,111,110,0);
         tickR = [2];
       let verticale: Array<any> = [496, 937];
      let line8 = manifestp == String.fromCharCode(99,106,113,111,100,109,0);
      do {
          let iconeditZ = String.fromCharCode(99,97,108,108,98,97,99,107,115,95,51,95,57,55,0);
          let floaterR = String.fromCharCode(100,105,109,101,110,115,95,56,95,49,0);
          let dragclosem = 1.0;
          let submitL = 0.0;
         manifestp = `${tickR.length}`;
         iconeditZ = `${floaterR.length / 3}`;
         floaterR += `${floaterR.length + 3}`;
         dragclosem -= iconeditZ.length;
         submitL -= iconeditZ.length;
         if (line8) {
            break;
         }
      } while (line8 && (3 == (tickR.length - manifestp.length)));
         manifestp = `${(String.fromCharCode(112,0) == manifestp ? tickR.length : manifestp.length)}`;
      if (3 < (tickR.length | 1)) {
         tickR = [verticale.length % (Math.max(3, 10))];
      }
          let unimplementedviewG = String.fromCharCode(112,95,52,48,95,115,116,101,114,101,111,100,0);
          let unreadF = String.fromCharCode(103,100,115,112,95,54,95,54,56,0);
          let manifestL = String.fromCharCode(99,95,55,51,95,111,99,107,105,110,103,0);
         verticale = [3 ^ manifestp.length];
         unimplementedviewG = `${(unimplementedviewG == String.fromCharCode(108,0) ? unreadF.length : unimplementedviewG.length)}`;
         unreadF += `${unreadF.length + 3}`;
         manifestL += `${unimplementedviewG.length / (Math.max(4, manifestL.length))}`;
      reactnativejsk += `${matchesQ.length}`;
   for (let d = 0; d < 3; d++) {
       let giflivestreamingZ = String.fromCharCode(117,110,98,111,110,100,95,117,95,49,56,0);
       let renderP = String.fromCharCode(115,116,101,109,109,101,114,95,103,95,49,48,48,0);
       let iconediti = 1.0;
       let malaysiaL = String.fromCharCode(103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,95,100,95,51,48,0);
       let sharemodaln = 2.0;
       let predictionbannersharedv = String.fromCharCode(106,95,52,55,95,116,105,110,116,0);
       let thumbnailY = String.fromCharCode(114,97,110,103,101,115,95,55,95,50,48,0);
      while (thumbnailY.length < renderP.length) {
          let mapbuffere: Array<any> = [22, 654];
          let collectionh = 4.0;
          let termsQ = 2;
          let selection6 = String.fromCharCode(119,95,52,48,95,119,97,116,101,114,109,97,114,107,115,0);
          let x_centerc = 4.0;
         thumbnailY += `${parseInt(`${x_centerc}`) / (Math.max(3, 9))}`;
         mapbuffere = [2];
         collectionh -= (parseFloat(`${selection6 == String.fromCharCode(52,0) ? parseInt(`${collectionh}`) : selection6.length}`));
         termsQ /= Math.max(selection6.length, 2);
         x_centerc += parseFloat(`${termsQ + 2}`);
         break;
      }
          let codef = 5;
         predictionbannersharedv = "2";
         codef &= codef >> (Math.min(Math.abs(codef), 4));
      let bangu = iconediti >= 5612835.0;
      do {
          let pluss = String.fromCharCode(119,111,114,107,105,110,103,95,116,95,53,52,0);
          let imagese = String.fromCharCode(113,95,55,95,110,111,114,111,117,110,100,0);
         iconediti += parseFloat(`${parseInt(`${sharemodaln}`)}`);
         pluss = `${pluss.length & imagese.length}`;
         imagese += `${imagese.length}`;
         if (bangu) {
            break;
         }
      } while (((sharemodaln * 5) > 5.7) && bangu);
          let eactr = String.fromCharCode(112,111,108,108,101,114,95,51,95,57,0);
          let fastforwardn: Array<any> = [String.fromCharCode(116,101,109,112,111,114,97,114,121,95,110,95,53,52,0), String.fromCharCode(115,95,49,49,95,114,97,110,100,101,110,0), String.fromCharCode(112,95,56,56,95,103,104,97,115,104,0)];
         predictionbannersharedv += `${2 >> (Math.min(5, eactr.length))}`;
         eactr = `${1 + fastforwardn.length}`;
         fastforwardn = [3];
         iconediti *= parseFloat(`${1 + parseInt(`${iconediti}`)}`);
         iconediti /= Math.max(1, parseFloat(`${parseInt(`${sharemodaln}`) >> (Math.min(predictionbannersharedv.length, 5))}`));
      let huaweie = 6867881 <= giflivestreamingZ.length;
      do {
          let iconnointernetD: Array<any> = [String.fromCharCode(118,95,49,54,95,97,118,102,111,114,109,97,116,0), String.fromCharCode(97,100,114,109,95,99,95,57,56,0), String.fromCharCode(115,95,53,53,95,105,110,98,111,120,0)];
          let ticked4 = String.fromCharCode(106,95,53,55,95,109,97,100,101,98,121,0);
          let defaultprofilepicO = 3;
          let sinaF = String.fromCharCode(114,95,50,57,95,99,111,112,121,100,97,116,97,0);
          let modeK = true;
         giflivestreamingZ += `${predictionbannersharedv.length}`;
         iconnointernetD = [defaultprofilepicO];
         ticked4 = `${(String.fromCharCode(57,0) == ticked4 ? ticked4.length : (modeK ? 2 : 5))}`;
         defaultprofilepicO &= defaultprofilepicO >> (Math.min(ticked4.length, 3));
         sinaF = `${iconnointernetD.length / (Math.max(3, ticked4.length))}`;
         modeK = (44 >= (ticked4.length >> (Math.min(3, Math.abs((!modeK ? 44 : ticked4.length))))));
         if (huaweie) {
            break;
         }
      } while (huaweie && (renderP != String.fromCharCode(86,0)));
         sharemodaln += parseInt(`${sharemodaln}`);
      for (let t = 0; t < 2; t++) {
          let codeJ = 0;
          let submite = String.fromCharCode(113,117,97,114,116,95,105,95,50,54,0);
          let lineq = String.fromCharCode(109,117,108,116,105,112,108,121,95,105,95,52,52,0);
         sharemodaln -= giflivestreamingZ.length * 3;
         codeJ <<= Math.min(Math.abs(1), 5);
         submite += `${lineq.length}`;
         lineq += `${2 >> (Math.min(3, Math.abs(codeJ)))}`;
      }
          let hovert = 2.0;
          let watchnowbgo = String.fromCharCode(104,97,97,114,95,57,95,57,53,0);
          let megaphoneI = 1.0;
         sharemodaln *= watchnowbgo.length + giflivestreamingZ.length;
         hovert += parseFloat(`${parseInt(`${megaphoneI}`) % (Math.max(8, parseInt(`${hovert}`)))}`);
         watchnowbgo = "1";
         megaphoneI /= Math.max(parseFloat(`${parseInt(`${hovert}`)}`), 2);
         giflivestreamingZ = `${(String.fromCharCode(80,0) == predictionbannersharedv ? predictionbannersharedv.length : parseInt(`${iconediti}`))}`;
      let private_1u = renderP.length <= 9592782;
      do {
          let inactiver: Array<any> = [62, 895];
          let playercommonX = String.fromCharCode(101,95,52,52,95,108,105,98,99,101,108,116,0);
          let disconnectedlogoa = String.fromCharCode(112,97,121,101,101,95,108,95,55,57,0);
          let whiteanimationlive1 = String.fromCharCode(99,95,53,53,95,97,112,112,0);
         renderP += `${(String.fromCharCode(50,0) == renderP ? parseInt(`${sharemodaln}`) : renderP.length)}`;
         inactiver.push((disconnectedlogoa == String.fromCharCode(113,0) ? inactiver.length : disconnectedlogoa.length));
         playercommonX = `${(whiteanimationlive1 == String.fromCharCode(53,0) ? whiteanimationlive1.length : inactiver.length)}`;
         if (private_1u) {
            break;
         }
      } while (private_1u && (thumbnailY == renderP));
         thumbnailY = `${thumbnailY.length % 2}`;
      for (let g = 0; g < 1; g++) {
         predictionbannersharedv += "1";
      }
      hooksW -= parseFloat(`${3}`);
   }
        }

        const cardHeight = heightToWidthRatio * cardWidth;

   let predictionx = 9488042 >= switch_ewj.size;
   do {
       let cleark = String.fromCharCode(99,104,117,110,107,115,95,120,95,50,57,0);
       let gemfileA = 2.0;
       let whiteE = String.fromCharCode(110,110,109,111,100,95,98,95,55,55,0);
         whiteE = "1";
         gemfileA *= parseFloat(`${3 + parseInt(`${gemfileA}`)}`);
          let playercommont = 2.0;
          let modalW = 3;
          let proxyE = 4;
         whiteE = `${1 ^ cleark.length}`;
         playercommont *= parseFloat(`${modalW << (Math.min(Math.abs(proxyE), 3))}`);
         modalW |= proxyE & modalW;
         gemfileA *= parseFloat(`${parseInt(`${gemfileA}`) << (Math.min(whiteE.length, 2))}`);
         cleark = "3";
         cleark = "3";
         cleark = `${cleark.length + 3}`;
      let const_pU = 5158639.0 <= gemfileA;
      do {
         gemfileA *= parseFloat(`${3}`);
         if (const_pU) {
            break;
         }
      } while (const_pU && (!whiteE.endsWith(`${gemfileA}`)));
         whiteE += `${cleark.length}`;
      switch_ewj = new Map([[`${classes9.length}`, yellowanimationliveD.length]]);
      if (predictionx) {
         break;
      }
   } while ((!yellowanimationliveD.includes(`${switch_ewj.size}`)) && predictionx);
       let giflivestreamingx = 1.0;
       let gradlewC = String.fromCharCode(102,95,49,52,95,100,101,115,101,108,101,99,116,0);
      if ((2.91 - giflivestreamingx) == 2.73 && 4.83 == (giflivestreamingx - 2.91)) {
         giflivestreamingx *= parseFloat(`${3 << (Math.min(1, Math.abs(parseInt(`${giflivestreamingx}`))))}`);
      }
         gradlewC += "2";
      for (let s = 0; s < 2; s++) {
         giflivestreamingx *= parseFloat(`${2}`);
      }
      for (let b = 0; b < 1; b++) {
          let castingD = String.fromCharCode(115,109,117,115,104,95,104,95,49,52,0);
         giflivestreamingx -= parseFloat(`${gradlewC.length * parseInt(`${giflivestreamingx}`)}`);
         castingD += `${(String.fromCharCode(53,0) == castingD ? castingD.length : castingD.length)}`;
      }
         gradlewC = `${gradlewC.length * parseInt(`${giflivestreamingx}`)}`;
       let shirt2 = String.fromCharCode(115,95,50,57,95,116,119,105,110,118,113,0);
      stationZ %= Math.max(3 * switch_ewj.size, 4);
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

       let iconscheduleJ: Map<any, any> = new Map([[String.fromCharCode(115,105,122,101,114,95,48,95,48,0),851], [String.fromCharCode(118,99,104,113,95,101,95,49,52,0),11]]);
       let libflipperH = 1;
       let l_managerV = String.fromCharCode(103,101,115,116,117,114,101,95,104,95,56,51,0);
       let graphics9 = String.fromCharCode(115,108,97,115,104,95,115,95,50,52,0);
          let window_86n = String.fromCharCode(99,108,97,115,115,110,97,109,101,95,56,95,49,54,0);
          let cornerkick5: Array<any> = [String.fromCharCode(102,95,51,56,95,100,105,114,101,99,116,105,111,110,97,108,0), String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,115,95,102,95,52,54,0)];
         libflipperH /= Math.max(graphics9.length + window_86n.length, 2);
         window_86n += `${cornerkick5.length}`;
         cornerkick5.push(cornerkick5.length);
         libflipperH /= Math.max(l_managerV.length, 1);
         l_managerV += `${(l_managerV == String.fromCharCode(72,0) ? libflipperH : l_managerV.length)}`;
      while ((l_managerV.length & 1) > 3) {
          let backm = 2.0;
          let pageO = 5.0;
         l_managerV = `${l_managerV.length & parseInt(`${pageO}`)}`;
         backm += parseInt(`${backm}`) / (Math.max(6, parseInt(`${backm}`)));
         pageO /= Math.max(5, parseInt(`${backm}`) ^ parseInt(`${backm}`));
         break;
      }
         l_managerV += `${(String.fromCharCode(54,0) == graphics9 ? graphics9.length : libflipperH)}`;
      yellowanimationliveD = `${matchesQ.length * stationZ}`;
      iconscheduleJ.set(`${iconscheduleJ.size}`, 2);
   for (let n = 0; n < 2; n++) {
       let feedbackX = String.fromCharCode(100,114,97,103,103,105,110,103,95,108,95,56,57,0);
      for (let h = 0; h < 2; h++) {
         feedbackX += `${(feedbackX == String.fromCharCode(86,0) ? feedbackX.length : feedbackX.length)}`;
      }
      if (4 > feedbackX.length) {
         feedbackX += `${feedbackX.length}`;
      }
      let becomew = feedbackX.length >= 5939261;
      do {
         feedbackX = `${feedbackX.length}`;
         if (becomew) {
            break;
         }
      } while (becomew && (2 == feedbackX.length));
      plusD += `${1 << (Math.min(5, Math.abs(stationZ)))}`;
   }
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

      stationZ <<= Math.min(2, Math.abs(2));
   while (plusD.length > 5) {
       let loginsuccessq = false;
       let rncoreS = 1;
       let castingz: Array<any> = [804, 18, 709];
      let edit4 = loginsuccessq ? !loginsuccessq : loginsuccessq;
      do {
         loginsuccessq = rncoreS <= 83;
         if (edit4) {
            break;
         }
      } while (edit4 && (castingz.length == 4 && (4 & castingz.length) == 5));
      while (4 < rncoreS) {
          let penaltygoalq = String.fromCharCode(99,117,100,97,95,114,95,49,55,0);
         rncoreS *= (String.fromCharCode(88,0) == penaltygoalq ? castingz.length : penaltygoalq.length);
         break;
      }
      for (let i = 0; i < 3; i++) {
         rncoreS <<= Math.min(5, castingz.length);
      }
          let moonv = 1.0;
         castingz = [rncoreS];
         moonv += parseInt(`${moonv}`) | parseInt(`${moonv}`);
       let cnewinterstitiala = String.fromCharCode(108,95,52,52,95,117,110,97,118,97,105,108,97,98,108,101,0);
       let securityB = String.fromCharCode(122,95,50,52,95,109,97,112,108,105,109,105,116,0);
          let pointT = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,51,95,54,53,0);
          let ewardedX = 1.0;
          let filedK = 4;
         castingz = [rncoreS ^ securityB.length];
         pointT += `${2 - parseInt(`${ewardedX}`)}`;
         ewardedX *= parseFloat(`${pointT.length * 2}`);
         filedK *= 1;
         loginsuccessq = (((!loginsuccessq ? cnewinterstitiala.length : 8) % (Math.max(cnewinterstitiala.length, 5))) >= 8);
         castingz = [3];
      let zhengpianj = 5112150 >= rncoreS;
      do {
         rncoreS >>= Math.min(3, Math.abs(securityB.length << (Math.min(Math.abs(3), 2))));
         if (zhengpianj) {
            break;
         }
      } while (zhengpianj && (loginsuccessq && (rncoreS / (Math.max(1, 10))) < 4));
      plusD = "2";
      break;
   }
        if (BTN_MARGIN_RIGHT > 16) {

      friendsw = 20 > plusD.length;
   if (short_l_P && yellowanimationliveD.length >= 1) {
       let gesturew = String.fromCharCode(105,95,53,95,97,100,116,115,116,111,97,115,99,0);
       let calendarh = String.fromCharCode(111,98,106,101,99,116,95,108,95,57,55,0);
       let settingo = 0.0;
       let middlewareb = 0.0;
         calendarh = `${parseInt(`${settingo}`)}`;
      for (let v = 0; v < 1; v++) {
          let subbasketballplayerL = 4.0;
          let libsgcoreh = 4.0;
          let libavfilterK = 0;
         middlewareb -= parseInt(`${libsgcoreh}`);
         subbasketballplayerL *= 2;
         libsgcoreh += parseFloat(`${3 >> (Math.min(Math.abs(libavfilterK), 3))}`);
         libavfilterK %= Math.max(1, parseInt(`${subbasketballplayerL}`));
      }
         middlewareb -= (calendarh == String.fromCharCode(76,0) ? parseInt(`${settingo}`) : calendarh.length);
      while (2.16 >= (4 + settingo)) {
         middlewareb *= (String.fromCharCode(110,0) == gesturew ? parseInt(`${middlewareb}`) : gesturew.length);
         break;
      }
      for (let v = 0; v < 3; v++) {
         gesturew += `${parseInt(`${settingo}`)}`;
      }
          let predictionbannersharedW: Array<any> = [350, 444];
          let defaultpredictionprofileT = String.fromCharCode(100,101,118,112,111,108,108,95,53,95,51,57,0);
         settingo -= (parseFloat(`${gesturew == String.fromCharCode(114,0) ? gesturew.length : calendarh.length}`));
         predictionbannersharedW.push(defaultpredictionprofileT.length - 3);
         defaultpredictionprofileT = `${defaultpredictionprofileT.length}`;
          let flyerA = 5.0;
          let telemetryj = 5.0;
          let bottom3 = 3;
         settingo /= Math.max(parseFloat(`${parseInt(`${settingo}`)}`), 5);
         flyerA /= Math.max(5, parseFloat(`${bottom3 + parseInt(`${flyerA}`)}`));
         telemetryj *= parseFloat(`${2}`);
         bottom3 %= Math.max(parseInt(`${telemetryj}`), 4);
          let schedulez = String.fromCharCode(115,108,105,100,97,98,108,101,95,57,95,56,56,0);
          let libjsiT: Array<any> = [738, 913];
         calendarh += `${1 - parseInt(`${settingo}`)}`;
         schedulez += `${1 / (Math.max(1, libjsiT.length))}`;
         libjsiT.push(schedulez.length);
         gesturew += "2";
         settingo -= parseFloat(`${2 * calendarh.length}`);
         gesturew += `${1 << (Math.min(4, Math.abs(parseInt(`${middlewareb}`))))}`;
       let otherM = 5;
      yellowanimationliveD += `${parseInt(`${topicy}`) * 2}`;
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   for (let m = 0; m < 2; m++) {
      reactnativejsk = "3";
   }
      fieldH += stationZ << (Math.min(5, Math.abs(2)));
            BTN_MARGIN_RIGHT = 16;

   for (let c = 0; c < 3; c++) {
      classes9 = [2 % (Math.max(7, switch_ewj.size))];
   }
      hooksW /= Math.max(2, parseFloat(`${3 ^ reactnativejsk.length}`));
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

       let soundM = 5.0;
      for (let k = 0; k < 1; k++) {
         soundM /= Math.max(1, parseFloat(`${2}`));
      }
      if ((soundM + 5.86) >= 1.86 && 5.86 >= (soundM + soundM)) {
         soundM /= Math.max(1, parseFloat(`${parseInt(`${soundM}`) | parseInt(`${soundM}`)}`));
      }
      for (let x = 0; x < 1; x++) {
          let policyJ = true;
          let shrinkj: Array<any> = [788, 343, 813];
          let analyticl = false;
          let carousely = String.fromCharCode(106,95,56,55,95,110,101,101,100,108,101,0);
         soundM *= parseFloat(`${parseInt(`${soundM}`) % (Math.max(8, shrinkj.length))}`);
         policyJ = carousely.length <= 86 || !analyticl;
         shrinkj = [((analyticl ? 4 : 3) + carousely.length)];
      }
      topicy += parseFloat(`${plusD.length}`);
   if (1.3 >= (topicy - parseFloat(`${classes9.length}`)) || (parseInt(`${topicy}`) - classes9.length) >= 5) {
      classes9.push((2 - (short_l_P ? 5 : 3)));
   }
        setMarginRight(BTN_MARGIN_RIGHT);

       let tempo = String.fromCharCode(101,95,54,50,95,105,110,118,116,114,97,110,115,0);
       let overl: Map<any, any> = new Map([[String.fromCharCode(115,119,105,102,116,99,95,112,95,51,56,0),false ], [String.fromCharCode(118,100,98,101,95,122,95,57,57,0),true ]]);
         tempo += `${tempo.length}`;
          let s_viewH = String.fromCharCode(117,95,56,50,95,112,97,114,115,101,114,115,0);
          let gradlewQ = String.fromCharCode(108,101,116,116,101,114,115,95,112,95,51,53,0);
         overl.set(tempo, tempo.length >> (Math.min(Math.abs(1), 1)));
         s_viewH = `${s_viewH.length}`;
         gradlewQ = `${1 >> (Math.min(1, gradlewQ.length))}`;
      while (4 > (2 << (Math.min(4, Math.abs(overl.size)))) || 5 > (overl.size << (Math.min(Math.abs(2), 2)))) {
          let forwardB = String.fromCharCode(109,111,111,102,95,104,95,51,50,0);
          let abidetectR: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,111,99,116,101,116,115,0),String.fromCharCode(102,101,97,116,117,114,101,100,95,114,95,56,52,0)], [String.fromCharCode(102,105,101,108,100,109,97,116,99,104,95,49,95,55,55,0),String.fromCharCode(101,100,105,116,105,110,103,95,106,95,56,53,0)], [String.fromCharCode(111,95,53,57,95,117,108,116,105,0),String.fromCharCode(101,95,49,51,95,99,108,111,115,105,110,103,0)]]);
          let googlep = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,121,95,51,50,0);
          let rewindm: Array<any> = [582, 930];
         overl = new Map([[`${rewindm.length}`, rewindm.length % (Math.max(tempo.length, 8))]]);
         forwardB = `${forwardB.length * googlep.length}`;
         abidetectR.set(googlep, abidetectR.size);
         break;
      }
      if (overl.size <= 5) {
         overl = new Map([[`${overl.size}`, tempo.length - overl.size]]);
      }
         overl = new Map([[`${overl.size}`, tempo.length]]);
       let activityg = String.fromCharCode(100,98,115,116,97,116,95,116,95,53,51,0);
       let scrollview7 = String.fromCharCode(116,95,51,48,95,117,116,112,117,116,0);
      short_l_P = ((matchesQ.length | (friendsw ? 33 : matchesQ.length)) < 33);
   for (let b = 0; b < 2; b++) {
       let belle = 5.0;
       let mapping2 = String.fromCharCode(114,101,108,97,121,111,117,116,95,49,95,56,0);
       let libcrashsdkI = String.fromCharCode(98,111,116,95,102,95,52,54,0);
       let profileactiveD = String.fromCharCode(109,95,51,52,95,117,110,107,110,111,119,110,0);
       let halfVj: Array<any> = [245, 854];
          let linkL: Array<any> = [String.fromCharCode(116,95,51,54,95,108,119,115,115,112,110,0), String.fromCharCode(109,95,49,52,95,109,105,108,108,105,115,0)];
         profileactiveD = `${linkL.length}`;
       let libreactnativejniK: Array<any> = [1, 122, 3];
      while ((libreactnativejniK.length - libcrashsdkI.length) < 5 && 5 < (libcrashsdkI.length - libreactnativejniK.length)) {
         libcrashsdkI += `${mapping2.length | 3}`;
         break;
      }
         profileactiveD += `${libcrashsdkI.length << (Math.min(5, halfVj.length))}`;
      for (let x = 0; x < 2; x++) {
         profileactiveD += `${3 & profileactiveD.length}`;
      }
       let graphn: Array<any> = [121, 677, 386];
          let club5 = String.fromCharCode(99,111,109,109,105,116,116,101,114,95,108,95,57,55,0);
         libreactnativejniK.push(1);
         club5 += `${club5.length}`;
          let sportsQ = String.fromCharCode(115,116,121,108,95,121,95,50,50,0);
         libreactnativejniK = [halfVj.length];
         sportsQ += `${sportsQ.length}`;
       let eacts = String.fromCharCode(104,95,54,57,95,104,97,115,104,0);
         graphn.push(parseInt(`${belle}`) ^ libreactnativejniK.length);
          let circleZ = true;
         profileactiveD += `${libreactnativejniK.length}`;
         circleZ = !circleZ;
         libreactnativejniK.push(mapping2.length | 3);
         belle /= Math.max(2, halfVj.length / (Math.max(2, 9)));
      while (2 >= libcrashsdkI.length) {
         profileactiveD += `${graphn.length}`;
         break;
      }
      while (1 < (halfVj.length / (Math.max(mapping2.length, 8)))) {
          let fillc: Map<any, any> = new Map([[String.fromCharCode(101,95,49,57,95,112,114,101,117,112,108,111,97,100,0),162], [String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,119,95,54,50,0),568]]);
         halfVj = [libcrashsdkI.length % 1];
         fillc.set(`${fillc.size}`, 2);
         break;
      }
      topicy -= parseFloat(`${yellowanimationliveD.length >> (Math.min(1, Math.abs(parseInt(`${fieldH}`))))}`);
   }
        setCardWidth(cardWidth);

       let castingV = String.fromCharCode(115,117,103,103,101,115,116,95,104,95,56,49,0);
         castingV += `${(String.fromCharCode(71,0) == castingV ? castingV.length : castingV.length)}`;
         castingV = "1";
          let yellowC = 5;
          let spinner5 = 4.0;
          let combinede = String.fromCharCode(98,95,50,54,95,99,111,110,116,105,110,101,110,116,0);
         castingV += `${combinede.length}`;
         yellowC <<= Math.min(Math.abs(parseInt(`${spinner5}`) >> (Math.min(3, Math.abs(yellowC)))), 2);
         spinner5 += 3;
         combinede = `${parseInt(`${spinner5}`)}`;
      yellowanimationliveD += `${switch_ewj.size - 3}`;
      classes9.push((String.fromCharCode(53,0) == matchesQ ? matchesQ.length : (friendsw ? 2 : 2)));
        setCardHeight(cardHeight);
    }, []);

    const vodMapItem = (vod: any, idx: any) => (
        <VodCard
            key={`${vod.vod_id}`}
            vod_name={vod?.vod_name}
            vod_pic={vod?.vod_pic}
            showInfo={vod?.vod_remarks}
            vodImageStyle={{
                width: cardWidth,
                height: cardHeight,
                marginRight: (idx % cardsPerRow) === cardsPerRow - 1 ? 0 : marginRight,
            }}
            vodCardContainerStyle={{
                marginBottom: Math.min(marginRight, 14)
            }}
            onPress={() => {
                if (onPress) {
                    onPress({ vodId: vod?.vod_id });
                }
                dispatch(playVod(vod));
                navigation.navigate('播放', {
                    vod_id: vod?.vod_id,
                    player_mode: playerMode
                });
                
                
            }}
            index={idx}
            vod_pic_list={vod.vod_pic_list}
        />
    )

    return (
        <View style={styles.vodList}>
            {
                vods &&
                vods.slice(0, numOfRows * cardsPerRow).map(vodMapItem)
            }
        </View>
    )
}

export default memo(VodListVertical);

const styles = StyleSheet.create({
    vodList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})