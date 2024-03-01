import React, { memo, useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { playVod } from '@redux/actions/yys_player_style';
import { useAppDispatch } from '@hooks/yys_frame';
import VodCard from '../../components/vod/yys_singapore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { yys_Bing } from '@type/yys_libzeus';
import { disableAdultMode, enableAdultMode } from '@redux/actions/yys_runtimescheduler';
import DeviceInfo from 'react-native-device-info';


interface yys_ConfigureUimanager {
    vods: Array<yys_Bing>,
    numOfRows?: number,
    outerRowPadding?: number,
    minNumPerRow?: number,
    heightToWidthRatio?: number,
    onPress?: ({ vodId }: { vodId: any }) => any,
    playerMode?: 'normal' | 'adult'
}

function VodListVertical({ vods, numOfRows = 2, outerRowPadding = 0, minNumPerRow = 3, heightToWidthRatio = 1.414, onPress, playerMode = 'normal' }: yys_ConfigureUimanager) {
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
       let libavcodecj: Array<any> = [530, 218, 518];
    let indicatorv: Map<any, any> = new Map([[String.fromCharCode(112,111,115,101,115,0),743], [String.fromCharCode(115,116,97,116,105,115,116,105,99,0),940], [String.fromCharCode(115,101,108,101,99,116,105,111,110,115,0),653]]);
    let submitn: Array<any> = [425, 661];
    let matchesR = 3.0;
    let short_yqR = 5.0;
    let club0 = String.fromCharCode(109,95,53,50,95,99,121,99,108,101,99,108,111,99,107,0);
    let chinal = String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0);
    let executory: Array<any> = [605, 802];
    let guideY = String.fromCharCode(116,104,114,101,115,104,111,108,100,115,0);
    let weiboY = 2;
    let renderp = false;
    let flyerA = false;
    let s_titleU = 0;
    let hejiQ = 5.0;
   if (1 >= (4 & libavcodecj.length)) {
      libavcodecj.push(1);
   }
      indicatorv = new Map([[chinal, chinal.length]]);
       let trophyD = String.fromCharCode(101,98,109,108,110,117,109,0);
       let club9 = 5.0;
       let sidef = String.fromCharCode(114,97,99,101,0);
         trophyD += `${sidef.length & trophyD.length}`;
         club9 += parseFloat(`${3 << (Math.min(3, sidef.length))}`);
      let thailandg = sidef.length >= 8229086;
      do {
         sidef += `${trophyD.length}`;
         if (thailandg) {
            break;
         }
      } while (((club9 * 2.54) == 5.66) && thailandg);
         trophyD += `${parseInt(`${club9}`)}`;
      if (trophyD.length < 2 || sidef == String.fromCharCode(116,0)) {
         sidef += `${parseInt(`${club9}`)}`;
      }
      for (let f = 0; f < 1; f++) {
         trophyD += `${parseInt(`${club9}`) & sidef.length}`;
      }
         trophyD = `${2 * sidef.length}`;
      if (!trophyD.includes(sidef)) {
          let serviceZ = 4;
          let dragH: Array<any> = [String.fromCharCode(101,118,105,99,116,0), String.fromCharCode(112,114,111,108,111,110,103,0), String.fromCharCode(115,101,110,100,101,114,115,0)];
          let dropdownj: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,97,110,99,101,0),262], [String.fromCharCode(99,95,51,55,95,97,116,111,98,111,111,108,0),530]]);
          let pressureV = true;
         sidef += "1";
         serviceZ |= 2 & dragH.length;
         dragH = [dropdownj.size - serviceZ];
         dropdownj = new Map([[`${dragH.length}`, serviceZ << (Math.min(dragH.length, 4))]]);
         pressureV = dropdownj.get(`${serviceZ}`) != null;
      }
      for (let a = 0; a < 3; a++) {
          let current6 = String.fromCharCode(99,112,111,115,0);
          let penaltyi = String.fromCharCode(114,101,118,105,101,119,0);
          let selectionP = 4;
          let animation3 = String.fromCharCode(109,118,115,101,116,0);
         sidef += `${current6.length - 2}`;
         current6 += `${animation3.length - 1}`;
         penaltyi = `${selectionP & penaltyi.length}`;
         selectionP += animation3.length;
      }
      indicatorv = new Map([[`${matchesR}`, trophyD.length]]);

        const PADDING = 8;

      club0 = `${1 >> (Math.min(5, executory.length))}`;
      indicatorv.set(`${chinal}`, chinal.length);
       let libfbu = 2.0;
       let hoverE: Map<any, any> = new Map([[String.fromCharCode(99,104,105,108,100,114,101,110,0),String.fromCharCode(110,95,55,54,95,116,114,97,106,101,99,116,111,114,121,0)], [String.fromCharCode(98,117,102,102,0),String.fromCharCode(99,114,108,100,112,0)], [String.fromCharCode(114,98,115,112,0),String.fromCharCode(97,116,97,98,108,101,115,95,100,95,48,0)]]);
       let textinputv = 5;
      let reminders = libfbu <= 5995971.0;
      do {
          let favoriteR = 5;
          let chinasameQ: Array<any> = [100, 415, 159];
          let blackZ = String.fromCharCode(99,111,109,112,114,101,115,115,0);
          let activeV = String.fromCharCode(102,108,97,115,104,115,118,0);
          let episodesC = 1.0;
         libfbu /= Math.max(4, 2 + chinasameQ.length);
         favoriteR += parseInt(`${episodesC}`) / (Math.max(4, favoriteR));
         chinasameQ.push(activeV.length);
         blackZ += `${parseInt(`${episodesC}`) ^ 1}`;
         activeV += `${2 / (Math.max(1, blackZ.length))}`;
         if (reminders) {
            break;
         }
      } while (reminders && ((5 | textinputv) > 4));
       let desch = String.fromCharCode(112,101,110,97,108,116,121,0);
       let libflipperc = String.fromCharCode(111,99,115,112,0);
      while (libflipperc != String.fromCharCode(99,0)) {
         desch = `${2 << (Math.min(4, libflipperc.length))}`;
         break;
      }
       let sigmoby = 5;
       let grayl = 3;
      if (2 < (libflipperc.length >> (Math.min(5, Math.abs(hoverE.size))))) {
         libflipperc += `${(desch == String.fromCharCode(65,0) ? libflipperc.length : desch.length)}`;
      }
         libfbu -= (libflipperc == String.fromCharCode(106,0) ? libflipperc.length : hoverE.size);
       let gmailx = 3.0;
       let networkC = 0.0;
      while (2 < (desch.length & textinputv) && (textinputv & desch.length) < 2) {
         desch = "1";
         break;
      }
          let security3 = 1.0;
          let libmapbufferjniz: Array<any> = [String.fromCharCode(105,109,112,108,105,101,115,0), String.fromCharCode(100,105,97,108,105,110,103,95,50,95,52,54,0)];
          let redirectW = 4.0;
         sigmoby >>= Math.min(Math.abs(sigmoby * 1), 1);
         security3 *= parseInt(`${security3}`);
         libmapbufferjniz.push(libmapbufferjniz.length);
         redirectW *= parseInt(`${redirectW}`) - libmapbufferjniz.length;
      chinal = "2";
        const windowDim = width - insets.left - insets.right - outerRowPadding - (2.1 * spacing.sideOffset); 

   let cornerT = renderp ? !renderp : renderp;
   do {
      renderp = short_yqR == 33.52 || executory.length == 74;
      if (cornerT) {
         break;
      }
   } while (cornerT && ((submitn.length >> (Math.min(Math.abs(1), 2))) >= 2 && submitn.length >= 1));
      weiboY |= parseInt(`${short_yqR}`);
   while (2 == (executory.length % 2) || (executory.length % 2) == 3) {
      chinal += `${3 << (Math.min(4, chinal.length))}`;
      break;
   }
        const maxWidth = (windowDim / minNumPerRow) - PADDING;

      executory.push((guideY == String.fromCharCode(122,0) ? (renderp ? 2 : 5) : guideY.length));
       let side8: Map<any, any> = new Map([[String.fromCharCode(109,118,99,111,117,110,116,95,100,95,55,0),116], [String.fromCharCode(115,99,97,110,120,95,57,95,49,52,0),997]]);
       let securityZ = 2;
      while ((securityZ + side8.size) <= 1 || (side8.size + securityZ) <= 1) {
         securityZ &= securityZ;
         break;
      }
         side8.set(`${securityZ}`, 2 & side8.size);
       let manifestW = 3;
       let adulti = 3;
      let manifestJ = 9716081 <= adulti;
      do {
         adulti |= adulti / (Math.max(securityZ, 10));
         if (manifestJ) {
            break;
         }
      } while ((4 > (manifestW % (Math.max(6, adulti)))) && manifestJ);
      let cast3 = adulti <= 5333138;
      do {
          let floatingJ = String.fromCharCode(111,99,117,109,101,110,116,0);
          let saveh = 2;
          let clockD = false;
          let leagueu: Array<any> = [486, 779];
         adulti *= 1;
         floatingJ = "3";
         saveh %= Math.max(3, 3);
         clockD = 56 >= saveh && !clockD;
         leagueu = [2];
         if (cast3) {
            break;
         }
      } while (((4 | adulti) == 3) && cast3);
      for (let w = 0; w < 2; w++) {
         securityZ *= securityZ % 3;
      }
      submitn = [club0.length];
   for (let b = 0; b < 2; b++) {
      indicatorv.set(`${matchesR}`, parseInt(`${matchesR}`) % 1);
   }
        let cardWidth = Math.min(160, Math.floor(maxWidth));

       let lefti: Array<any> = [String.fromCharCode(97,114,116,0), String.fromCharCode(109,117,116,117,97,108,0)];
       let rulesW: Array<any> = [88, 411, 795];
       let closeA: Array<any> = [435, 798, 2];
         lefti.push(rulesW.length >> (Math.min(Math.abs(2), 2)));
       let detailsG: Map<any, any> = new Map([[String.fromCharCode(115,116,114,102,117,110,99,95,56,95,49,50,0),String.fromCharCode(98,97,115,105,99,0)], [String.fromCharCode(121,95,56,52,95,108,111,99,107,0),String.fromCharCode(99,104,97,110,103,101,95,115,95,54,0)]]);
       let animationU: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,0),String.fromCharCode(100,121,110,97,109,105,99,95,122,95,56,52,0)], [String.fromCharCode(109,111,118,101,109,101,110,116,0),String.fromCharCode(99,95,49,48,48,95,97,97,99,100,101,99,116,97,98,0)], [String.fromCharCode(119,95,53,56,95,108,105,109,105,116,115,0),String.fromCharCode(99,111,112,121,98,97,99,107,0)]]);
      executory = [1];
   let championT = 5366982 <= libavcodecj.length;
   do {
       let anythink5 = String.fromCharCode(97,102,105,114,0);
       let typingR: Array<any> = [266, 829, 909];
       let bridgeG = String.fromCharCode(110,111,116,104,105,110,103,0);
       let renew6 = String.fromCharCode(99,105,110,101,109,97,0);
      let foundU = renew6 == String.fromCharCode(118,101,55,52,101,112,51,108,101,0);
      do {
         renew6 = `${typingR.length % 1}`;
         if (foundU) {
            break;
         }
      } while ((renew6.startsWith(`${typingR.length}`)) && foundU);
      while (anythink5.length < 1) {
          let logor = 2.0;
          let selectionR = 4;
          let invitet = 5;
          let network7 = 1.0;
         anythink5 += `${parseInt(`${network7}`) / 1}`;
         logor -= parseFloat(`${invitet}`);
         selectionR <<= Math.min(4, Math.abs(invitet));
         network7 -= invitet;
         break;
      }
      for (let c = 0; c < 2; c++) {
         bridgeG += `${typingR.length | bridgeG.length}`;
      }
       let notificationF = 2.0;
       let viewer9 = 5.0;
         notificationF /= Math.max(1, parseInt(`${notificationF}`));
      let nativeexE = notificationF <= 4988719.0;
      do {
          let reminderS = String.fromCharCode(105,109,109,117,116,97,98,108,101,0);
          let upgradeY = String.fromCharCode(116,95,54,55,95,104,111,110,101,0);
          let libruntimeexecutorW = String.fromCharCode(116,111,117,112,112,101,114,95,98,95,51,53,0);
          let hookS = true;
         notificationF *= anythink5.length;
         reminderS = `${(libruntimeexecutorW == String.fromCharCode(52,0) ? libruntimeexecutorW.length : (hookS ? 1 : 5))}`;
         upgradeY += `${libruntimeexecutorW.length}`;
         hookS = (68 < ((!hookS ? upgradeY.length : 68) & upgradeY.length));
         if (nativeexE) {
            break;
         }
      } while (nativeexE && ((notificationF + viewer9) < 1.36 && 4.43 < (notificationF + 1.36)));
      let scheduleh = 9071640 >= typingR.length;
      do {
         typingR = [bridgeG.length];
         if (scheduleh) {
            break;
         }
      } while ((4 == (anythink5.length * 3) && 1 == (3 * anythink5.length)) && scheduleh);
         typingR.push(parseInt(`${notificationF}`) + 2);
      while (3 == anythink5.length) {
         renew6 += `${1 << (Math.min(4, Math.abs(parseInt(`${notificationF}`))))}`;
         break;
      }
      let floater6 = 6633760.0 <= viewer9;
      do {
         viewer9 += parseFloat(`${1 >> (Math.min(3, renew6.length))}`);
         if (floater6) {
            break;
         }
      } while (floater6 && (anythink5.startsWith(`${viewer9}`)));
      for (let g = 0; g < 1; g++) {
         renew6 = `${3 / (Math.max(6, parseInt(`${viewer9}`)))}`;
      }
      libavcodecj.push(typingR.length * 2);
      if (championT) {
         break;
      }
   } while (championT && (5 == (indicatorv.size | 1) && 1 == (libavcodecj.length | 1)));
      weiboY <<= Math.min(4, Math.abs(((flyerA ? 3 : 5))));
        const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

       let updatesW = String.fromCharCode(115,98,97,100,0);
       let clockz = 2.0;
         updatesW = `${parseInt(`${clockz}`)}`;
      if (4.46 >= (clockz + parseFloat(`${updatesW.length}`)) && (updatesW.length & 4) >= 2) {
         updatesW += `${3 >> (Math.min(3, Math.abs(parseInt(`${clockz}`))))}`;
      }
         updatesW += `${updatesW.length | 3}`;
         updatesW = "2";
      while (4 == updatesW.length) {
         clockz -= parseFloat(`${updatesW.length}`);
         break;
      }
      while ((parseInt(`${clockz}`) / (Math.max(updatesW.length, 4))) >= 4 && 4 >= (4 << (Math.min(1, updatesW.length)))) {
         updatesW += `${parseInt(`${clockz}`) % (Math.max(updatesW.length, 8))}`;
         break;
      }
      renderp = 54 >= weiboY;
      indicatorv.set(guideY, guideY.length);
   for (let d = 0; d < 3; d++) {
       let filter8 = 4.0;
       let tickH = String.fromCharCode(108,97,114,103,101,114,0);
         tickH = `${(tickH == String.fromCharCode(84,0) ? tickH.length : parseInt(`${filter8}`))}`;
       let langkeyP: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,120,97,98,108,101,0),String.fromCharCode(118,95,51,54,95,111,110,99,101,0)], [String.fromCharCode(97,95,53,49,95,117,110,115,97,102,101,0),String.fromCharCode(102,111,114,109,97,116,116,101,100,0)], [String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,95,109,95,49,49,0),String.fromCharCode(100,105,103,101,115,116,98,121,111,98,106,0)]]);
       let listL: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,111,110,97,118,99,0),false ], [String.fromCharCode(112,108,111,116,116,101,114,0),false ], [String.fromCharCode(99,111,114,112,117,115,0),true ]]);
          let libfbV = 0.0;
          let infoD = String.fromCharCode(109,100,99,116,0);
         langkeyP = new Map([[`${langkeyP.size}`, 3]]);
         libfbV *= parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${libfbV}`))))}`);
         infoD = `${parseInt(`${libfbV}`) << (Math.min(Math.abs(1), 4))}`;
         tickH += `${listL.size << (Math.min(Math.abs(1), 3))}`;
         langkeyP.set(tickH, tickH.length);
          let largeE = String.fromCharCode(98,101,116,119,101,101,110,0);
          let settingsi = 4;
         listL.set(`${largeE}`, (largeE == String.fromCharCode(114,0) ? langkeyP.size : largeE.length));
         settingsi %= Math.max(settingsi, 1);
      indicatorv.set(`${flyerA}`, 3);
   }
        if(DeviceInfo.isTablet() || includesKeywords)
        {
            cardWidth = Math.min(145, Math.floor(maxWidth));

   while (1 <= (submitn.length / (Math.max(libavcodecj.length, 7))) || (libavcodecj.length / (Math.max(1, 2))) <= 3) {
      submitn.push(parseInt(`${short_yqR}`));
      break;
   }
   for (let l = 0; l < 1; l++) {
      short_yqR += ((renderp ? 2 : 2) / (Math.max(parseInt(`${matchesR}`), 2)));
   }
   for (let g = 0; g < 3; g++) {
       let transferg = String.fromCharCode(97,110,115,105,95,112,95,51,0);
       let analyticsc = 1;
       let launcherN = String.fromCharCode(117,95,51,95,99,104,101,99,107,112,111,105,110,116,115,0);
       let debugH: Array<any> = [String.fromCharCode(99,114,111,112,0), String.fromCharCode(102,97,117,108,116,0), String.fromCharCode(100,95,55,57,95,109,106,112,101,103,97,0)];
          let x_playerl = 3.0;
          let libsgcoreR = true;
         launcherN = `${(String.fromCharCode(68,0) == launcherN ? launcherN.length : parseInt(`${x_playerl}`))}`;
         x_playerl *= 2;
         transferg += "1";
      let vietnamb = debugH.length >= 9601462;
      do {
          let privacyQ = String.fromCharCode(105,110,115,101,114,116,105,110,103,95,56,95,55,56,0);
          let untickl = 5.0;
          let subsr = String.fromCharCode(109,98,101,100,116,108,115,95,54,95,55,50,0);
          let mbnativeadvancedP = 3.0;
          let reminderf = false;
         debugH = [transferg.length >> (Math.min(Math.abs(3), 2))];
         privacyQ += `${1 >> (Math.min(2, privacyQ.length))}`;
         untickl *= parseFloat(`${parseInt(`${mbnativeadvancedP}`) ^ 3}`);
         subsr = `${2 << (Math.min(Math.abs(parseInt(`${mbnativeadvancedP}`)), 5))}`;
         reminderf = privacyQ.length == 13;
         if (vietnamb) {
            break;
         }
      } while ((2 < (launcherN.length >> (Math.min(Math.abs(2), 2))) && 3 < (launcherN.length >> (Math.min(Math.abs(2), 2)))) && vietnamb);
          let rootm: Array<any> = [435, 329];
          let changeY = 0.0;
          let invite8: Map<any, any> = new Map([[String.fromCharCode(108,111,103,105,99,97,108,0),959], [String.fromCharCode(111,98,106,101,99,116,105,118,101,0),283], [String.fromCharCode(103,95,50,49,95,115,121,110,116,97,120,0),25]]);
         analyticsc /= Math.max(analyticsc, 3);
         rootm = [parseInt(`${changeY}`) & invite8.size];
         changeY *= parseFloat(`${2 << (Math.min(2, rootm.length))}`);
         invite8 = new Map([[`${rootm.length}`, parseInt(`${changeY}`)]]);
         debugH.push((launcherN == String.fromCharCode(71,0) ? launcherN.length : debugH.length));
      if (5 > transferg.length) {
         launcherN += `${analyticsc}`;
      }
      let temperatureP = transferg.length <= 7691829;
      do {
         transferg = `${(transferg == String.fromCharCode(97,0) ? analyticsc : transferg.length)}`;
         if (temperatureP) {
            break;
         }
      } while ((2 > (transferg.length % 4) && (transferg.length % 4) > 5) && temperatureP);
      for (let a = 0; a < 2; a++) {
         debugH = [launcherN.length + debugH.length];
      }
         debugH = [3];
          let chartX = String.fromCharCode(115,116,111,112,112,105,110,103,0);
          let latni = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,0);
         launcherN = `${analyticsc << (Math.min(transferg.length, 4))}`;
         chartX += `${chartX.length}`;
         latni += `${chartX.length}`;
      for (let w = 0; w < 2; w++) {
         launcherN = `${transferg.length % (Math.max(9, analyticsc))}`;
      }
      if ((analyticsc << (Math.min(transferg.length, 4))) > 3) {
         analyticsc >>= Math.min(1, Math.abs(analyticsc));
      }
      executory.push(executory.length);
   }
        }

        const cardHeight = heightToWidthRatio * cardWidth;

   while (flyerA || chinal.length < 5) {
      chinal += `${submitn.length % (Math.max(guideY.length, 7))}`;
      break;
   }
   if ((s_titleU + indicatorv.size) >= 3) {
      indicatorv = new Map([[`${submitn.length}`, submitn.length]]);
   }
      matchesR /= Math.max(2 + s_titleU, 5);
        const CARDS_PER_ROW = Math.floor(windowDim / cardWidth);

   for (let g = 0; g < 1; g++) {
      executory.push(3 + libavcodecj.length);
   }
   if ((short_yqR / (Math.max(guideY.length, 9))) <= 1.75 || 2 <= (5 - guideY.length)) {
      guideY = `${indicatorv.size}`;
   }
      guideY = `${submitn.length ^ parseInt(`${short_yqR}`)}`;
        let BTN_MARGIN_RIGHT = (windowDim - (CARDS_PER_ROW * cardWidth)) / (CARDS_PER_ROW - 1);

   let linke = weiboY >= 5557285;
   do {
      weiboY /= Math.max(parseInt(`${matchesR}`) ^ indicatorv.size, 3);
      if (linke) {
         break;
      }
   } while (linke && (weiboY >= chinal.length));
   while (chinal.endsWith(`${matchesR}`)) {
      matchesR += guideY.length;
      break;
   }
       let regeng_ = true;
       let recommendationq: Map<any, any> = new Map([[String.fromCharCode(99,108,103,101,116,95,109,95,56,57,0),916], [String.fromCharCode(99,108,97,115,115,105,102,115,0),616], [String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,0),663]]);
       let libavdevice8 = 3;
      for (let u = 0; u < 2; u++) {
          let largel = false;
         regeng_ = libavdevice8 <= 16 && !regeng_;
         largel = (largel ? largel : largel);
      }
       let stationsp = false;
       let foregroundZ = true;
      while (!regeng_) {
          let rulesq = false;
          let heart1 = 3.0;
          let regengS = String.fromCharCode(103,97,116,105,110,103,0);
         stationsp = heart1 > 68.53;
         rulesq = regengS.includes(`${rulesq}`);
         heart1 /= Math.max(1, (parseFloat(`${(rulesq ? 4 : 3)}`)));
         regengS = `${regengS.length | 1}`;
         break;
      }
      while (recommendationq.get(`${libavdevice8}`) == null) {
         recommendationq.set(`${stationsp}`, (recommendationq.size ^ (stationsp ? 4 : 1)));
         break;
      }
         foregroundZ = stationsp;
          let lightf: Array<any> = [315, 641];
          let membero = true;
          let o_playerG = 4.0;
         libavdevice8 /= Math.max(3, ((membero ? 1 : 1) * 3));
         lightf = [parseInt(`${o_playerG}`)];
         membero = 84.89 < o_playerG;
      let ballO = recommendationq.size >= 5035292;
      do {
          let ksadf = false;
          let profileO = 0;
          let redirectf = String.fromCharCode(116,116,108,0);
          let codegenO: Array<any> = [115, 454, 933];
         recommendationq.set(`${libavdevice8}`, ((foregroundZ ? 5 : 1) & libavdevice8));
         ksadf = profileO >= 91;
         profileO |= profileO;
         redirectf = `${redirectf.length}`;
         codegenO.push(profileO);
         if (ballO) {
            break;
         }
      } while (ballO && (stationsp));
          let vietnamc = String.fromCharCode(102,105,114,115,116,112,97,115,115,0);
          let kickq = String.fromCharCode(115,99,97,108,101,100,95,99,95,49,55,0);
         stationsp = !regeng_;
         vietnamc += `${kickq.length >> (Math.min(vietnamc.length, 5))}`;
         kickq = `${kickq.length + 3}`;
         recommendationq.set(`${foregroundZ}`, recommendationq.size % 3);
      chinal = "3";
        if (BTN_MARGIN_RIGHT > 16) {

      guideY = `${2 ^ indicatorv.size}`;
   for (let a = 0; a < 3; a++) {
      indicatorv.set(`${renderp}`, libavcodecj.length);
   }
   for (let q = 0; q < 3; q++) {
       let station0 = 5.0;
       let helperw = 3.0;
       let appsd = String.fromCharCode(99,104,101,99,107,115,117,109,115,95,55,95,56,49,0);
       let stats1: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,0),108], [String.fromCharCode(102,97,120,99,111,109,112,114,0),588]]);
       let mbsplashO = 3.0;
       let overlayU: Array<any> = [254, 457];
      if ((parseFloat(`${overlayU.length}`) + mbsplashO) > 4.61 || 3 > (overlayU.length / 1)) {
         overlayU.push(stats1.size);
      }
         stats1 = new Map([[`${station0}`, 3 / (Math.max(6, appsd.length))]]);
          let libglogB = String.fromCharCode(98,105,116,118,101,99,116,111,114,95,122,95,54,49,0);
          let bellL = 1.0;
         station0 /= Math.max(parseFloat(`${parseInt(`${mbsplashO}`) | appsd.length}`), 1);
         libglogB = `${libglogB.length}`;
         bellL *= parseFloat(`${2 - parseInt(`${bellL}`)}`);
      let gemfile9 = 6119316 <= overlayU.length;
      do {
          let gradlewK = 4;
          let libfollyo = String.fromCharCode(100,95,50,49,95,112,114,101,115,101,110,99,101,0);
         overlayU.push(parseInt(`${station0}`) >> (Math.min(5, Math.abs(gradlewK))));
         gradlewK -= libfollyo.length ^ 2;
         libfollyo += `${libfollyo.length}`;
         if (gemfile9) {
            break;
         }
      } while ((overlayU.includes(mbsplashO)) && gemfile9);
       let membershipU = false;
       let libhermesF = false;
          let ycopy_f1M = false;
          let libreactL = String.fromCharCode(118,97,108,115,95,113,95,51,0);
          let graphT = 1.0;
         station0 *= (parseFloat(`${parseInt(`${station0}`) / (Math.max(9, (ycopy_f1M ? 2 : 4)))}`));
         ycopy_f1M = graphT <= 9.22 || 39 <= libreactL.length;
         libreactL += "3";
         graphT += (parseFloat(`${libreactL == String.fromCharCode(88,0) ? parseInt(`${graphT}`) : libreactL.length}`));
         station0 += parseFloat(`${3 - overlayU.length}`);
      while (2 >= (3 ^ overlayU.length)) {
          let libhermesw: Array<any> = [689, 713];
          let blackI = String.fromCharCode(114,101,109,97,112,0);
          let delegate_47n = 0;
          let typesN = String.fromCharCode(97,108,103,115,0);
         overlayU = [parseInt(`${station0}`)];
         libhermesw.push(libhermesw.length);
         blackI += `${blackI.length}`;
         delegate_47n |= blackI.length * 2;
         typesN = `${blackI.length}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
         stats1 = new Map([[appsd, (appsd == String.fromCharCode(78,0) ? parseInt(`${mbsplashO}`) : appsd.length)]]);
      }
         appsd += `${(1 & (membershipU ? 3 : 4))}`;
      while (4 < (appsd.length ^ stats1.size)) {
          let scheduler5 = String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,0);
          let ajaxW: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,0),false ], [String.fromCharCode(112,97,103,101,110,117,109,98,101,114,0),false ]]);
          let background1 = String.fromCharCode(106,95,55,95,99,118,105,100,0);
          let regeng1: Array<any> = [612, 341];
         stats1 = new Map([[`${ajaxW.size}`, ajaxW.size]]);
         scheduler5 = `${scheduler5.length}`;
         background1 = `${regeng1.length}`;
         regeng1 = [background1.length];
         break;
      }
      while (!libhermesF) {
         libhermesF = appsd.startsWith(`${libhermesF}`);
         break;
      }
      while (libhermesF) {
          let logoutG = true;
          let spinnerm = String.fromCharCode(109,97,120,106,95,119,95,49,51,0);
          let t_countI = false;
          let chatN: Map<any, any> = new Map([[String.fromCharCode(111,102,102,105,99,105,97,108,0),216], [String.fromCharCode(115,117,98,0),679]]);
         membershipU = 31.30 == mbsplashO;
         logoutG = !logoutG;
         spinnerm = `${((t_countI ? 5 : 5))}`;
         t_countI = String.fromCharCode(78,0) == spinnerm;
         chatN = new Map([[spinnerm, (spinnerm.length * (t_countI ? 2 : 2))]]);
         break;
      }
         membershipU = !membershipU;
      hejiQ -= parseFloat(`${stats1.size}`);
      helperw *= parseFloat(`${parseInt(`${helperw}`)}`);
   }
            const excess = (BTN_MARGIN_RIGHT - 16) * (CARDS_PER_ROW - 1);

   for (let c = 0; c < 3; c++) {
       let downZ = 1;
       let flipperH: Array<any> = [String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,0), String.fromCharCode(97,114,114,97,110,103,101,100,95,115,95,54,54,0)];
       let playlistB: Array<any> = [526, 284];
       let mbbannero: Array<any> = [721, 487, 810];
         playlistB = [2];
      while (1 == flipperH.length) {
         playlistB.push(3 - flipperH.length);
         break;
      }
      for (let n = 0; n < 2; n++) {
         playlistB.push(playlistB.length);
      }
      for (let f = 0; f < 2; f++) {
         downZ >>= Math.min(3, mbbannero.length);
      }
       let unimplementedviews = String.fromCharCode(116,119,111,112,97,115,115,95,105,95,55,0);
       let toponD = String.fromCharCode(99,111,109,112,114,101,115,115,105,111,110,0);
      guideY = `${((flyerA ? 5 : 4))}`;
   }
      club0 += `${indicatorv.size | 3}`;
   while (5 >= chinal.length) {
      renderp = 36 == executory.length && weiboY == 36;
      break;
   }
            BTN_MARGIN_RIGHT = 16;

   let cricket9 = 5833145.0 <= hejiQ;
   do {
       let buildZ = String.fromCharCode(115,116,97,110,100,97,114,100,95,103,95,51,52,0);
       let gestured = String.fromCharCode(104,95,51,55,95,97,115,99,101,110,100,101,114,0);
      let largeV = String.fromCharCode(117,100,106,53,56,0) == buildZ;
      do {
         buildZ += `${buildZ.length}`;
         if (largeV) {
            break;
         }
      } while ((buildZ == String.fromCharCode(98,0) && gestured.length > 4) && largeV);
         gestured = `${gestured.length}`;
         gestured += `${gestured.length ^ 1}`;
         gestured = `${gestured.length << (Math.min(buildZ.length, 2))}`;
       let templateprocessorZ = String.fromCharCode(110,114,101,102,0);
          let temperatureb = String.fromCharCode(97,118,97,116,97,114,115,0);
          let google6 = 2;
         buildZ = "1";
         temperatureb = `${(String.fromCharCode(116,0) == temperatureb ? google6 : temperatureb.length)}`;
         google6 >>= Math.min(Math.abs(google6 & 3), 5);
      hejiQ /= Math.max((parseFloat(`${libavcodecj.length / (Math.max(5, (flyerA ? 1 : 5)))}`)), 5);
      if (cricket9) {
         break;
      }
   } while (cricket9 && (4.95 == (hejiQ * 5.12)));
   if ((submitn.length / (Math.max(4, 2))) == 3 || (matchesR * 5.28) == 4.94) {
       let floating7 = String.fromCharCode(99,111,114,101,105,109,97,103,101,0);
         floating7 += `${floating7.length << (Math.min(Math.abs(2), 5))}`;
          let xvodE = 2.0;
          let starz = 4.0;
          let ajaxl = String.fromCharCode(102,97,109,105,108,121,95,118,95,50,54,0);
         floating7 = `${(floating7 == String.fromCharCode(50,0) ? floating7.length : parseInt(`${xvodE}`))}`;
         xvodE -= parseFloat(`${ajaxl.length}`);
         starz -= (parseFloat(`${String.fromCharCode(72,0) == ajaxl ? parseInt(`${starz}`) : ajaxl.length}`));
          let update_fH = 4.0;
         floating7 = `${floating7.length & 3}`;
         update_fH += parseFloat(`${1}`);
      submitn = [s_titleU + 1];
   }
      club0 += "3";
            cardWidth += Math.floor(excess / CARDS_PER_ROW)
        }

        setCardsPerRow(CARDS_PER_ROW);

       let debugo: Array<any> = [855, 966];
       let helper7: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,105,110,116,101,114,110,101,116,0),769], [String.fromCharCode(99,117,98,105,99,0),645], [String.fromCharCode(112,114,101,115,101,108,101,99,116,0),555]]);
      if ((debugo.length + helper7.size) >= 5 || 5 >= (debugo.length + helper7.size)) {
         debugo.push(3 >> (Math.min(5, Math.abs(helper7.size))));
      }
         helper7 = new Map([[`${helper7.size}`, debugo.length]]);
      if (4 == (debugo.length / 3)) {
         helper7 = new Map([[`${helper7.size}`, 1 - debugo.length]]);
      }
      while ((debugo.length % (Math.max(helper7.size, 2))) <= 1 || (helper7.size % 1) <= 1) {
         helper7 = new Map([[`${helper7.size}`, debugo.length + helper7.size]]);
         break;
      }
         debugo = [helper7.size];
      let signinup0 = 5499430 >= helper7.size;
      do {
          let toponY: Map<any, any> = new Map([[String.fromCharCode(99,95,49,51,95,99,97,110,111,110,0),186], [String.fromCharCode(117,95,55,49,95,108,97,110,103,117,97,103,101,0),194], [String.fromCharCode(108,95,55,48,95,101,109,105,116,116,101,100,0),961]]);
          let apple7 = true;
         helper7 = new Map([[`${toponY.size}`, 3]]);
         if (signinup0) {
            break;
         }
      } while ((4 == (debugo.length % (Math.max(helper7.size, 8))) || (debugo.length % (Math.max(4, 1))) == 1) && signinup0);
      short_yqR -= submitn.length;
   if (executory.length <= indicatorv.size) {
      executory = [indicatorv.size & libavcodecj.length];
   }
   for (let z = 0; z < 1; z++) {
      chinal += `${((renderp ? 2 : 2) << (Math.min(executory.length, 1)))}`;
   }
        setMarginRight(BTN_MARGIN_RIGHT);

      guideY += `${parseInt(`${hejiQ}`) ^ guideY.length}`;
       let fullH = String.fromCharCode(104,95,51,57,95,106,100,109,97,115,116,101,114,0);
      for (let h = 0; h < 2; h++) {
         fullH = `${fullH.length}`;
      }
          let expandu = 2.0;
          let attributedstring8 = 1.0;
         fullH += `${parseInt(`${attributedstring8}`) * parseInt(`${expandu}`)}`;
          let m_positionl: Map<any, any> = new Map([[String.fromCharCode(118,99,111,109,98,105,110,101,0),450], [String.fromCharCode(118,116,114,107,95,117,95,49,52,0),193]]);
          let mounting7: Array<any> = [533, 852, 820];
         fullH += `${fullH.length - m_positionl.size}`;
         m_positionl = new Map([[`${mounting7.length}`, 3]]);
         mounting7.push(mounting7.length);
      guideY = `${(guideY.length & (flyerA ? 1 : 2))}`;
   let shrinkk = chinal == String.fromCharCode(112,119,99,116,0);
   do {
       let adultQ = 0.0;
       let resendV = 0.0;
       let countryi = String.fromCharCode(108,105,98,114,115,118,103,0);
      if (5 <= countryi.length) {
          let matchP: Array<any> = [879, 782, 291];
          let final_wr: Array<any> = [265, 871];
          let mode2 = String.fromCharCode(109,95,56,52,95,109,105,115,109,97,116,99,104,0);
          let string3: Map<any, any> = new Map([[String.fromCharCode(97,116,114,97,99,97,108,0),String.fromCharCode(98,108,111,99,107,100,99,0)], [String.fromCharCode(102,97,116,101,0),String.fromCharCode(99,104,97,110,103,101,95,110,95,49,0)]]);
         countryi = `${matchP.length % 1}`;
         matchP = [string3.size + 3];
         final_wr = [(String.fromCharCode(90,0) == mode2 ? mode2.length : string3.size)];
      }
          let leagueU = 1;
         adultQ /= Math.max(4, leagueU << (Math.min(Math.abs(1), 5)));
         adultQ *= parseInt(`${resendV}`);
         countryi = `${parseInt(`${adultQ}`)}`;
      while (4 <= (3 - countryi.length) && (resendV / (Math.max(4.22, 10))) <= 1.23) {
          let delegate_5L = 5.0;
         countryi = `${parseInt(`${delegate_5L}`)}`;
         break;
      }
       let stylesd = true;
       let expiredD = false;
      let mapbufferN = 9163617.0 <= adultQ;
      do {
         adultQ += ((stylesd ? 3 : 5));
         if (mapbufferN) {
            break;
         }
      } while ((2.51 == (resendV + 5.11) && (adultQ - 5.11) == 2.2) && mapbufferN);
          let referrerj = String.fromCharCode(102,109,97,99,95,50,95,56,48,0);
         expiredD = !expiredD;
         referrerj = "1";
      for (let z = 0; z < 2; z++) {
          let routerq = false;
          let mailp = 3;
          let baseq = 4.0;
          let mbsplash1 = 2;
         countryi += "2";
         routerq = 86.42 >= baseq;
         mailp >>= Math.min(Math.abs(3 / (Math.max(1, mailp))), 5);
         baseq /= Math.max(parseInt(`${baseq}`) >> (Math.min(2, Math.abs(3))), 3);
         mbsplash1 -= 3;
      }
      chinal += `${parseInt(`${resendV}`)}`;
      if (shrinkk) {
         break;
      }
   } while (shrinkk && ((2 * chinal.length) <= 1));
        setCardWidth(cardWidth);

   while ((s_titleU | 3) == 4 || (3 % (Math.max(4, s_titleU))) == 3) {
      s_titleU |= (String.fromCharCode(77,0) == guideY ? guideY.length : parseInt(`${hejiQ}`));
      break;
   }
   while (indicatorv.size <= guideY.length) {
      guideY = `${(String.fromCharCode(56,0) == chinal ? (renderp ? 1 : 3) : chinal.length)}`;
      break;
   }
      short_yqR /= Math.max(2, (String.fromCharCode(69,0) == chinal ? club0.length : chinal.length));
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