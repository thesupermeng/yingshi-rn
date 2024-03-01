import React, { useEffect, ReactNode, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import FastImage from "../common/yys_vertical_collection";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "@hooks/yys_frame";
import { yys_Chinasame } from "@redux/reducers/yys_animation_animations";
import { VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_PURCHASE_MAX } from "@utility/yys_ajax_switch";

interface yys_ConfigureUimanager {
  coverImage: any;
  coverBackground: any;
  onClose: any;
  onPurchase: any;
  showCondition: boolean;
}

export default function VipPromotionModal({
  coverImage,
  coverBackground,
  onClose,
  onPurchase,
  showCondition,
}: yys_ConfigureUimanager) {
  const backgroundState = useSelector<yys_Chinasame>('backgroundReducer');
  const [countdownSecond, setCountdownSecond] = useState(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);

  const hours = Math.floor(countdownSecond / 60 / 60);
  const minute = Math.floor(countdownSecond / 60 % 60);
  const second = Math.floor(countdownSecond % 60);

  const remainingTimeAry = [
    String(hours).padStart(2, '0')[0],
    String(hours).padStart(2, '0')[1],
    String(minute).padStart(2, '0')[0],
    String(minute).padStart(2, '0')[1],
    String(second).padStart(2, '0')[0],
    String(second).padStart(2, '0')[1],
  ];

  const isFullscreen = Dimensions.get('window').height < Dimensions.get('window').width;

  
  const fontSizeAnim = useRef(new Animated.Value(14)).current;

  useEffect(() => {
    if (backgroundState.vipPromotionPurchaseNum !== undefined) {
      
      Animated.sequence([
        Animated.timing(fontSizeAnim, {
          toValue: 16, 
          duration: 280, 
          useNativeDriver: false,
        }),
        Animated.timing(fontSizeAnim, {
          toValue: 14, 
          duration: 200, 
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [backgroundState.vipPromotionPurchaseNum]);

  
  useEffect(() => {
    const countdownInterval = setInterval(() => {
       let windu = String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,111,95,56,0);
    let settingsQ: Array<any> = [528, 286, 107];
    let m_playerJ: Map<any, any> = new Map([[String.fromCharCode(112,111,108,105,99,121,95,111,95,49,54,0),287], [String.fromCharCode(114,108,105,110,101,95,119,95,56,57,0),226], [String.fromCharCode(114,95,57,52,95,101,122,105,101,114,0),485]]);
    let libyogah = 4.0;
    let feedbackl = 2.0;
    let inactivel = 5;
    let libflipperg = 4;
    let build_ = String.fromCharCode(104,95,51,56,95,101,110,104,97,110,99,101,100,0);
    let textlayoutmanager4 = 2;
    let componentregistryh: Array<any> = [984, 77, 859];
    let questl = true;
    let dragl: Array<any> = [814, 54, 798];
    let tickh = String.fromCharCode(102,95,50,56,95,98,97,110,100,115,0);
    let tickX = String.fromCharCode(120,95,57,51,95,99,104,114,111,109,97,109,99,0);
    let shootC: Map<any, any> = new Map([[String.fromCharCode(114,111,98,117,115,116,95,105,95,57,55,0),String.fromCharCode(99,105,114,99,95,122,95,54,54,0)], [String.fromCharCode(120,95,52,49,95,104,101,120,99,104,97,114,105,110,116,0),String.fromCharCode(112,95,55,54,95,118,116,97,98,0)], [String.fromCharCode(97,114,109,118,95,115,95,56,48,0),String.fromCharCode(98,105,116,115,116,114,101,97,109,95,115,95,56,56,0)]]);
    let teame = String.fromCharCode(107,95,50,48,95,111,102,102,105,99,105,97,108,0);
      settingsQ.push(componentregistryh.length + 3);
      m_playerJ = new Map([[`${settingsQ.length}`, 3 & parseInt(`${feedbackl}`)]]);
       let splashd: Array<any> = [String.fromCharCode(111,116,111,115,95,111,95,52,54,0), String.fromCharCode(100,97,116,97,108,105,115,116,95,117,95,50,51,0), String.fromCharCode(102,119,97,108,115,104,95,110,95,57,53,0)];
         splashd.push(1 + splashd.length);
      if (splashd.length == splashd.length) {
         splashd.push(splashd.length + 1);
      }
         splashd = [splashd.length];
      componentregistryh = [1];
      build_ += `${settingsQ.length}`;
       let libyogaa = String.fromCharCode(105,95,50,48,95,109,101,109,111,114,121,98,97,114,114,105,101,114,0);
       let catalogV = 4;
          let types2: Array<any> = [348, 677, 586];
          let yellowm = String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,109,95,52,49,0);
         catalogV -= (String.fromCharCode(83,0) == libyogaa ? types2.length : libyogaa.length);
         types2 = [(yellowm == String.fromCharCode(121,0) ? yellowm.length : yellowm.length)];
      let leaguev = libyogaa.length <= 6565089;
      do {
          let read8 = String.fromCharCode(118,100,115,111,95,106,95,57,53,0);
          let streamingb: Array<any> = [965, 247, 537];
          let holdero: Map<any, any> = new Map([[String.fromCharCode(102,111,110,116,115,105,122,101,95,116,95,50,50,0),String.fromCharCode(107,95,52,51,95,109,117,110,109,97,112,0)], [String.fromCharCode(108,101,97,102,95,122,95,49,49,0),String.fromCharCode(103,95,53,95,103,105,102,0)]]);
          let sharedg = String.fromCharCode(117,110,112,97,100,100,101,100,95,51,95,49,53,0);
         libyogaa = `${libyogaa.length}`;
         read8 += "2";
         streamingb = [3];
         holdero.set(sharedg, 2);
         sharedg += `${(String.fromCharCode(83,0) == sharedg ? holdero.size : sharedg.length)}`;
         if (leaguev) {
            break;
         }
      } while (leaguev && ((catalogV << (Math.min(libyogaa.length, 5))) < 2 && (libyogaa.length << (Math.min(1, Math.abs(catalogV)))) < 2));
      let filledV = libyogaa.length >= 8942345;
      do {
         libyogaa += `${2 >> (Math.min(5, Math.abs(catalogV)))}`;
         if (filledV) {
            break;
         }
      } while (filledV && (5 > (1 & libyogaa.length)));
      for (let p = 0; p < 3; p++) {
          let activeE = String.fromCharCode(97,109,111,117,110,116,95,103,95,52,55,0);
          let pagination_ = String.fromCharCode(99,108,97,115,115,101,115,95,51,95,57,49,0);
          let analyticsX = 1.0;
         catalogV &= 1 | libyogaa.length;
         activeE = `${parseInt(`${analyticsX}`)}`;
         pagination_ += `${activeE.length / (Math.max(6, parseInt(`${analyticsX}`)))}`;
      }
      let nativeexb = catalogV >= 6973305;
      do {
         catalogV += catalogV;
         if (nativeexb) {
            break;
         }
      } while (nativeexb && ((4 & catalogV) < 2 || (4 & catalogV) < 4));
          let splash3: Map<any, any> = new Map([[String.fromCharCode(117,110,97,114,99,104,105,118,101,95,56,95,55,53,0),607], [String.fromCharCode(104,95,55,56,95,101,110,116,105,116,105,101,115,0),954], [String.fromCharCode(121,95,52,52,95,98,105,116,120,0),983]]);
         libyogaa = `${3 >> (Math.min(3, Math.abs(splash3.size)))}`;
      m_playerJ = new Map([[`${m_playerJ.size}`, 3 % (Math.max(9, m_playerJ.size))]]);
   let androidm = questl ? !questl : questl;
   do {
      questl = textlayoutmanager4 == componentregistryh.length;
      if (androidm) {
         break;
      }
   } while ((questl) && androidm);
       let libavutils = String.fromCharCode(104,95,56,57,95,110,109,104,100,0);
       let starH = String.fromCharCode(121,95,50,56,95,104,108,105,116,0);
          let configureA = String.fromCharCode(120,95,51,52,95,111,102,102,115,101,116,0);
         libavutils += `${starH.length % 1}`;
         configureA = "3";
         starH += `${3 + libavutils.length}`;
      let contextR = String.fromCharCode(122,121,55,116,121,97,0) == starH;
      do {
         starH += `${libavutils.length % 3}`;
         if (contextR) {
            break;
         }
      } while ((libavutils != starH) && contextR);
         libavutils = `${(String.fromCharCode(85,0) == libavutils ? starH.length : libavutils.length)}`;
         starH = `${starH.length}`;
      let specC = 9360936 >= libavutils.length;
      do {
         libavutils = `${2 | starH.length}`;
         if (specC) {
            break;
         }
      } while (specC && (starH.includes(libavutils)));
      componentregistryh = [((questl ? 4 : 2) % (Math.max(1, settingsQ.length)))];
       let sentryA = String.fromCharCode(109,95,53,52,95,98,101,97,116,105,110,103,0);
       let matcha = String.fromCharCode(109,95,52,51,95,116,101,120,116,109,111,118,115,117,98,0);
         matcha = `${sentryA.length ^ 2}`;
         sentryA += "3";
         matcha = "2";
      let libjsijniprofilerU = matcha.length >= 8100648;
      do {
          let entryO = String.fromCharCode(99,107,112,116,95,48,95,52,55,0);
          let utilsi = 3.0;
         matcha = "2";
         entryO = `${(entryO == String.fromCharCode(78,0) ? parseInt(`${utilsi}`) : entryO.length)}`;
         utilsi -= parseFloat(`${entryO.length}`);
         if (libjsijniprofilerU) {
            break;
         }
      } while (libjsijniprofilerU && (sentryA != String.fromCharCode(73,0)));
         sentryA = `${sentryA.length % (Math.max(matcha.length, 7))}`;
      if (sentryA != matcha) {
         matcha += `${sentryA.length >> (Math.min(Math.abs(2), 5))}`;
      }
      inactivel <<= Math.min(matcha.length, 5);
   for (let s = 0; s < 2; s++) {
      build_ = `${2 + windu.length}`;
   }
   if (componentregistryh.includes(dragl.length)) {
       let placeholderv: Array<any> = [570, 264, 937];
       let xadsdkA = false;
       let grayG: Array<any> = [6, 597];
         xadsdkA = !xadsdkA;
          let areaM = 3;
         xadsdkA = grayG.length > 71 || !xadsdkA;
         areaM -= 1;
       let volumeu = String.fromCharCode(103,114,97,121,95,111,95,54,52,0);
       let darkg = String.fromCharCode(109,115,101,99,115,95,100,95,55,54,0);
      while (2 >= grayG.length) {
         grayG.push(3);
         break;
      }
          let popupV: Map<any, any> = new Map([[String.fromCharCode(103,95,49,53,95,97,99,116,105,111,110,115,0),true ], [String.fromCharCode(121,95,56,50,95,99,107,112,116,0),true ], [String.fromCharCode(104,95,49,50,95,116,105,109,115,116,97,109,112,0),true ]]);
          let serviceb = String.fromCharCode(102,95,52,52,95,115,116,101,110,99,105,108,0);
          let dialogo = 2.0;
         darkg += `${darkg.length - 3}`;
         popupV = new Map([[`${popupV.size}`, parseInt(`${dialogo}`) << (Math.min(Math.abs(popupV.size), 3))]]);
         serviceb += `${3 << (Math.min(3, Math.abs(parseInt(`${dialogo}`))))}`;
          let humidityb = String.fromCharCode(117,95,49,53,95,105,100,97,116,0);
          let questt = 3.0;
         darkg += `${darkg.length}`;
         humidityb = `${humidityb.length}`;
         questt -= parseFloat(`${3 % (Math.max(10, humidityb.length))}`);
      while (darkg.includes(`${grayG.length}`)) {
         darkg += `${((xadsdkA ? 3 : 1) >> (Math.min(Math.abs(1), 2)))}`;
         break;
      }
      let sportsx = 5444916 >= grayG.length;
      do {
         grayG.push(darkg.length);
         if (sportsx) {
            break;
         }
      } while (sportsx && (volumeu.endsWith(`${grayG.length}`)));
         xadsdkA = !volumeu.includes(`${xadsdkA}`);
      dragl = [dragl.length + 1];
      placeholderv.push(placeholderv.length & 2);
   }
   while (windu.includes(build_)) {
      build_ += `${3 >> (Math.min(Math.abs(inactivel), 4))}`;
      break;
   }
      dragl = [2 | libflipperg];
   while (1 < textlayoutmanager4) {
       let disconnectedz = true;
       let mbridgen = 3.0;
      while (mbridgen > 2.19 || (2.19 / (Math.max(9, mbridgen))) > 5.46) {
         disconnectedz = !disconnectedz;
         break;
      }
         disconnectedz = 4.25 > mbridgen;
      if (!disconnectedz) {
         mbridgen /= Math.max(3, 1 - parseInt(`${mbridgen}`));
      }
      while ((mbridgen * 1.7) < 5.33 || mbridgen < 1.7) {
          let buffer5 = String.fromCharCode(115,95,49,51,95,99,117,114,118,101,0);
          let libavutilf = String.fromCharCode(109,95,52,54,95,112,114,111,98,108,101,109,0);
         mbridgen -= parseInt(`${mbridgen}`);
         buffer5 += `${buffer5.length << (Math.min(libavutilf.length, 3))}`;
         libavutilf = `${buffer5.length + libavutilf.length}`;
         break;
      }
         mbridgen += ((disconnectedz ? 3 : 5) - parseInt(`${mbridgen}`));
         disconnectedz = 89.39 >= mbridgen;
      libyogah *= parseFloat(`${windu.length & parseInt(`${libyogah}`)}`);
      break;
   }
   while (parseFloat(`${settingsQ.length}`) == feedbackl) {
      feedbackl -= (parseFloat(`${(questl ? 4 : 1) % (Math.max(parseInt(`${libyogah}`), 7))}`));
      break;
   }
   for (let y = 0; y < 3; y++) {
      textlayoutmanager4 /= Math.max(settingsQ.length, 5);
   }
      feedbackl -= parseFloat(`${dragl.length & 3}`);
   for (let j = 0; j < 2; j++) {
      questl = 59 == dragl.length;
   }
   for (let x = 0; x < 1; x++) {
      dragl = [parseInt(`${libyogah}`)];
   }
   let executors = 6837468 >= windu.length;
   do {
       let gpays = String.fromCharCode(106,95,54,50,95,101,116,101,114,110,105,116,121,0);
      for (let m = 0; m < 1; m++) {
          let foundE = String.fromCharCode(103,95,55,54,95,99,97,116,97,112,117,108,116,0);
          let long_vm = 3.0;
          let castingZ = 4.0;
          let spinnerZ = String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,54,95,54,49,0);
          let cnewarchdefaultsa: Map<any, any> = new Map([[String.fromCharCode(100,95,49,49,95,114,117,110,115,0),501], [String.fromCharCode(97,117,100,105,111,100,115,112,95,116,95,52,55,0),193], [String.fromCharCode(101,120,112,97,110,115,105,111,110,95,111,95,49,56,0),97]]);
         gpays = `${cnewarchdefaultsa.size}`;
         foundE = `${(String.fromCharCode(76,0) == spinnerZ ? parseInt(`${long_vm}`) : spinnerZ.length)}`;
         long_vm /= Math.max(5, parseFloat(`${parseInt(`${long_vm}`) & 1}`));
         castingZ *= parseFloat(`${foundE.length % 1}`);
         cnewarchdefaultsa.set(spinnerZ, 3 << (Math.min(5, spinnerZ.length)));
      }
         gpays = `${gpays.length}`;
         gpays = `${gpays.length}`;
      windu += `${m_playerJ.size}`;
      if (executors) {
         break;
      }
   } while (((dragl.length * windu.length) == 1 && (1 * windu.length) == 5) && executors);
   let headerT = String.fromCharCode(55,114,104,50,0) == windu;
   do {
      windu = `${(windu == String.fromCharCode(50,0) ? windu.length : m_playerJ.size)}`;
      if (headerT) {
         break;
      }
   } while (headerT && ((1.14 * feedbackl) >= 5.93 || (windu.length & 3) >= 3));
       let loginj = 1.0;
         loginj -= parseFloat(`${2 | parseInt(`${loginj}`)}`);
          let sansE = 2.0;
         loginj += parseFloat(`${parseInt(`${loginj}`) ^ 2}`);
         sansE *= parseInt(`${sansE}`);
      if ((4.5 * loginj) == 4.90 || (loginj * loginj) == 4.5) {
         loginj /= Math.max(4, parseFloat(`${parseInt(`${loginj}`)}`));
      }
      inactivel >>= Math.min(5, Math.abs(libflipperg));
   if (5.41 < (libyogah - parseFloat(`${m_playerJ.size}`)) && (m_playerJ.size - parseInt(`${libyogah}`)) < 1) {
      m_playerJ = new Map([[`${m_playerJ.size}`, settingsQ.length >> (Math.min(Math.abs(1), 2))]]);
   }
   if (2 > textlayoutmanager4) {
       let encryptj = String.fromCharCode(111,95,50,53,95,122,101,116,97,0);
       let privacyG = String.fromCharCode(119,97,118,101,115,95,49,95,55,52,0);
       let fastforwardW = String.fromCharCode(105,95,56,95,98,101,110,105,103,110,0);
       let refreshP: Array<any> = [String.fromCharCode(113,95,51,50,95,114,101,112,97,114,101,100,0), String.fromCharCode(111,95,49,52,95,104,101,120,98,115,0)];
      if ((fastforwardW.length + 3) < 4 || (fastforwardW.length + refreshP.length) < 3) {
         fastforwardW = `${1 + refreshP.length}`;
      }
          let trophyi = 2.0;
         fastforwardW += `${fastforwardW.length & 3}`;
         trophyi *= parseInt(`${trophyi}`) + 1;
      for (let u = 0; u < 2; u++) {
         refreshP.push(3 + privacyG.length);
      }
          let statisticsH = false;
          let countdownQ = 1;
          let mintegral0 = 3.0;
         fastforwardW = `${refreshP.length}`;
         statisticsH = mintegral0 < 54.81;
         countdownQ += parseInt(`${mintegral0}`) * countdownQ;
       let usernameR = 2.0;
       let yellowS = 2.0;
          let runtimescheduler8 = 2.0;
          let floaterV = String.fromCharCode(103,95,50,52,95,108,109,108,109,0);
         fastforwardW = `${encryptj.length | 1}`;
         runtimescheduler8 += floaterV.length;
         floaterV += `${parseInt(`${runtimescheduler8}`) >> (Math.min(Math.abs(3), 3))}`;
      let typesm = String.fromCharCode(101,99,122,0) == encryptj;
      do {
          let progress_ = String.fromCharCode(119,114,105,116,101,95,114,95,53,51,0);
          let telemetryp: Array<any> = [359, 912, 278];
          let carouselo: Map<any, any> = new Map([[String.fromCharCode(98,117,103,115,95,104,95,51,0),String.fromCharCode(117,115,97,103,101,95,55,95,52,0)], [String.fromCharCode(102,95,57,53,95,100,112,116,114,115,0),String.fromCharCode(103,95,57,95,119,109,118,100,115,112,0)], [String.fromCharCode(122,95,53,54,95,97,112,112,101,110,100,0),String.fromCharCode(100,101,115,99,101,110,100,101,114,95,99,95,54,50,0)]]);
         encryptj = `${parseInt(`${yellowS}`) / 3}`;
         progress_ = "1";
         telemetryp = [progress_.length & 1];
         carouselo = new Map([[`${telemetryp.length}`, progress_.length & telemetryp.length]]);
         if (typesm) {
            break;
         }
      } while (typesm && (2.30 > yellowS));
          let point5 = false;
          let winit_9_ = String.fromCharCode(112,111,119,116,97,98,108,101,95,113,95,54,57,0);
         refreshP.push(parseInt(`${usernameR}`));
         point5 = point5 && winit_9_.length > 61;
         winit_9_ += `${(2 * (point5 ? 1 : 1))}`;
      componentregistryh = [textlayoutmanager4 & componentregistryh.length];
   }
   let recommendationY = libyogah <= 6681466.0;
   do {
       let stationM: Map<any, any> = new Map([[String.fromCharCode(106,95,57,55,95,101,120,112,97,110,100,0),false ], [String.fromCharCode(115,95,51,51,95,105,110,116,101,114,99,101,112,116,0),true ], [String.fromCharCode(115,117,98,116,114,101,101,115,95,112,95,49,53,0),true ]]);
       let libsgcoreU = String.fromCharCode(97,116,97,99,101,110,116,101,114,95,57,95,51,52,0);
       let leftU = 4.0;
         leftU -= 1;
       let storet = true;
          let downO = String.fromCharCode(98,95,52,55,95,117,105,110,116,108,101,0);
          let point2 = 2.0;
          let videocommonL = true;
         libsgcoreU += "1";
         downO += `${(parseInt(`${point2}`) >> (Math.min(4, Math.abs((videocommonL ? 4 : 5)))))}`;
         point2 *= ((videocommonL ? 3 : 4));
         libsgcoreU += `${parseInt(`${leftU}`) ^ 3}`;
          let smallN: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,115,115,101,95,54,95,51,49,0),false ], [String.fromCharCode(110,111,110,98,108,111,99,107,95,117,95,57,56,0),false ]]);
          let libjsinspectorE: Map<any, any> = new Map([[String.fromCharCode(99,95,57,50,95,101,115,115,105,111,110,0),true ], [String.fromCharCode(106,95,52,53,95,106,112,101,103,108,115,100,101,99,0),true ]]);
          let userf = 2.0;
         stationM = new Map([[`${smallN.size}`, 3]]);
         smallN = new Map([[`${libjsinspectorE.size}`, parseInt(`${userf}`)]]);
         libjsinspectorE.set(`${userf}`, libjsinspectorE.size);
         storet = (stationM.size << (Math.min(libsgcoreU.length, 5))) < 72;
         leftU /= Math.max(1, 1 % (Math.max(5, parseInt(`${leftU}`))));
      if (stationM.size == 2 && (stationM.size / 2) == 4) {
         stationM = new Map([[`${stationM.size}`, libsgcoreU.length ^ 1]]);
      }
         storet = (62 == ((!storet ? 62 : stationM.size) ^ stationM.size));
      libyogah /= Math.max(parseFloat(`${parseInt(`${libyogah}`) << (Math.min(windu.length, 1))}`), 1);
      if (recommendationY) {
         break;
      }
   } while (recommendationY && (2.26 < (libyogah / 5.0) && 3.49 < (libyogah / (Math.max(5.0, 1)))));
   if (feedbackl < 5.14) {
      m_playerJ.set(windu, settingsQ.length / (Math.max(windu.length, 8)));
   }
       let mbjscommonF = String.fromCharCode(98,97,100,95,122,95,52,55,0);
       let switch_z4 = String.fromCharCode(100,115,116,114,101,97,109,95,53,95,54,48,0);
         switch_z4 = `${switch_z4.length / (Math.max(3, 4))}`;
       let singapore9: Array<any> = [19, 220, 669];
      let temperatureB = switch_z4 == String.fromCharCode(113,48,106,56,118,109,111,118,112,0);
      do {
          let agreementR = 4;
          let selectiont = 4.0;
          let libffmpegkitm = 2.0;
         switch_z4 += `${parseInt(`${libffmpegkitm}`) ^ singapore9.length}`;
         agreementR %= Math.max(4, parseInt(`${selectiont}`));
         selectiont /= Math.max(2, agreementR >> (Math.min(3, Math.abs(2))));
         libffmpegkitm += agreementR;
         if (temperatureB) {
            break;
         }
      } while (temperatureB && ((switch_z4.length & singapore9.length) <= 3 && 3 <= (singapore9.length & switch_z4.length)));
      let feedback7 = String.fromCharCode(101,112,108,55,116,113,101,121,53,0) == switch_z4;
      do {
         switch_z4 += `${switch_z4.length | singapore9.length}`;
         if (feedback7) {
            break;
         }
      } while ((singapore9.length <= 2) && feedback7);
         singapore9.push(3);
      if (1 <= (5 & singapore9.length)) {
         singapore9.push((String.fromCharCode(69,0) == switch_z4 ? singapore9.length : switch_z4.length));
      }
      libyogah /= Math.max(1, parseFloat(`${dragl.length + 2}`));
      mbjscommonF += `${mbjscommonF.length}`;
   for (let b = 0; b < 2; b++) {
      libflipperg <<= Math.min(4, Math.abs(2));
   }

      setCountdownSecond(((VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000) - (Date.now() - backgroundState.vipPromotionCountdownStart)) / 1000);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  if (showCondition)
    return (
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: isFullscreen ? [{ scale: 0.75 }] : []
        }}
      >
        <View
          style={{
            flex: 1,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
          }}
        >
          <LinearGradient
            colors={['#4A3E2A', '#231D14', '#1A1712', '#191612']}
            locations={[0, 0.29, 0.63, 1]}
            style={{
              width: 322,
              height: 340,
              borderRadius: 14,
              paddingHorizontal: 16,
              paddingTop: 26,
              paddingBottom: 12,
            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View
              style={{
                flex: 1,
                gap: 16,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  gap: 10,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    ...styles.titleText
                  }}>
                  限时订阅优惠
                </Text>
                <View style={styles.countdownContainer}>
                  {remainingTimeAry.map((val, i) => {
                    return (
                      <View
                        key={i}
                        style={{
                          flexDirection: 'row',
                          gap: 5,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#FA3E3E',
                            borderRadius: 6,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 24,
                            height: 24,
                            paddingTop: 5,
                            paddingBottom: 3,
                          }}
                        >
                          <Text style={styles.countdownText}>
                            {val}
                          </Text>

                        </View>
                        {i % 2 === 1 && i < remainingTimeAry.length - 1 && (
                          <Text style={{ ...styles.countdownText, padding: 1, color: '#FA3E3E' }}>
                            :
                          </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>




              <Text style={styles.contentText1}>
                限时优惠，立即升级会员可享受最低4折优惠，先到先得！已有99.5%用户抢先购买，解锁了更多影视权益。您确定要错过这个升级体验的最好机会吗？
              </Text>
              {/* <Text style={styles.contentText2}>
                限时优惠
                <Text style={{ ...styles.contentText2, color: '#FAC33D' }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
                <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim  , position:'relative', paddingHorizontal:10}}>
                  {backgroundState.vipPromotionPurchaseNum}人
                </Animated.Text>
                购买
              </Text> */}

<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center',  }}>
  <Text style={styles.contentText2}>
    限时优惠
    <Text style={{ ...styles.contentText2, color: '#FAC33D', marginLeft: 5, marginRight: 5 }}>{VIP_PROMOTION_PURCHASE_MAX / 10000}万</Text>名额，已有
  </Text>
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:72 }}>
    <Animated.Text style={{ ...styles.contentText2, color: '#FA3E3E', fontSize: fontSizeAnim }}>
      {backgroundState.vipPromotionPurchaseNum}人
    </Animated.Text>
  </View>
  <Text style={styles.contentText2}>购买</Text>
</View>

              


            </View>

            <View
              style={{
                paddingHorizontal: 24,
                gap: 6,
              }}>
              <TouchableOpacity
                onPress={onPurchase}
              >
                <LinearGradient
                  colors={['#D1AC7D', '#B1885F']}
                  locations={[0.0, 0.99]}
                  style={styles.purchaseButton}
                >
                  <Text style={styles.purchaseButtonText}>
                    继续抢购
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>
                  放弃机会
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View >
      </View >
    );

  return <></>;
}

const styles = StyleSheet.create({
  purchaseButton: {
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
  },
  purchaseButtonText: {
    color: "#1D2023",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 25,
    fontFamily: "PingFang SC",
  },
  cancelButton: {
    backgroundColor: "#121314",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: "PingFang SC",
  },
  titleText: {
    textAlign: 'center',
    color: '#F4DBBA',
    fontSize: 17,
    fontFamily: 'PingFang SC',
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: 1,
  },
  countdownText: {
    textAlign: "center",
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Archivo-Regular',
    fontWeight: '800',
    lineHeight: 15,
  },
  contentText1: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: 'white',
  },
  contentText2: {
    fontFamily: 'PingFang SC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    color: '#FFEFDA',
  },
  image1: {
    position: "absolute",
    bottom: -30,
    width: 148,
    height: 156,
  },
  image2: {
    position: "absolute",
    top: 0,
    width: '100%',
    aspectRatio: 1208 / 496,
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
