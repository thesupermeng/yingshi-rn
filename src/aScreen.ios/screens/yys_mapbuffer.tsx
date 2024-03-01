import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    Text,
    AppState,
} from 'react-native';
import ScreenContainer from '../components/container/yys_executor_expand';
import { useInfiniteQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { yys_ScrollviewPangle } from '@type/yys_libzeus';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/yys_ajax_switch';
import MiniVideoList from '../components/videoPlayer/yys_fastforward_tail';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import NoConnection from './../components/common/yys_armva_classes';
import NetInfo from '@react-native-community/netinfo';
import { yys_Videocommon } from '@redux/reducers/yys_libavdevice';
import { useAppSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import yys_event_common from '../../../Umeng/yys_event_common';
import { yys_Inactive } from '@api';

type yys_ReminderShoot = {
    data: {
        List: Array<yys_ScrollviewPangle>;
    };
};

type yys_CatalogGuide = {
    setPause: (pause: boolean) => void;
};

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const isFocused = useIsFocused();
    
    const [isInBackground, setIsInBackground] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const miniVodRef = useRef() as React.MutableRefObject<yys_CatalogGuide>;
    const miniVodListRef = useRef<any>();
    const [isPressTabScroll, setPressTabScroll] = useState(false);

    const settingsReducer: yys_Videocommon = useAppSelector(
        ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
    );

    
    useFocusEffect(useCallback(() => {
        yys_event_common.watchAnytimeViewsAnalytics();
    }, []));
    

    
    useEffect(() => {
        const handleTabPress = () => {
       let reactN = String.fromCharCode(104,95,51,54,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0);
    let librrcD = 1.0;
    let overr = String.fromCharCode(114,101,100,97,99,116,101,100,95,114,95,49,57,0);
    let mbsplashZ = true;
    let settingv = 2.0;
    let relatedS = String.fromCharCode(120,95,52,54,95,109,105,110,113,0);
    let sourceJ = 2.0;
    let nalyticsE = 2.0;
    let matchesC = String.fromCharCode(109,117,108,116,105,112,108,101,120,95,121,95,50,51,0);
    let navigationl = 5.0;
   while (overr.includes(`${mbsplashZ}`)) {
       let become2 = 5.0;
       let libavformat6 = String.fromCharCode(104,95,49,48,48,95,99,111,110,116,0);
       let colorsP = 1;
       let diceh = 2.0;
      for (let k = 0; k < 3; k++) {
         become2 += colorsP;
      }
      for (let q = 0; q < 2; q++) {
         colorsP += 2;
      }
      while (parseInt(`${diceh}`) <= libavformat6.length) {
         diceh *= 1;
         break;
      }
      if (diceh <= 2.99) {
         colorsP /= Math.max(1, 1);
      }
      while ((1.46 + become2) > 1.18) {
         become2 /= Math.max(5, colorsP);
         break;
      }
         libavformat6 = `${parseInt(`${become2}`) % 2}`;
         become2 *= parseInt(`${diceh}`) - libavformat6.length;
         become2 += colorsP;
       let b_playerc = String.fromCharCode(103,117,116,115,95,55,95,49,49,0);
       let casts = String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,95,104,95,49,49,0);
      while ((3 - libavformat6.length) >= 5 && (become2 - 3.34) >= 1.59) {
         libavformat6 += `${casts.length - parseInt(`${become2}`)}`;
         break;
      }
         libavformat6 = `${parseInt(`${become2}`)}`;
         casts += `${casts.length * 1}`;
      overr = `${(String.fromCharCode(87,0) == relatedS ? overr.length : relatedS.length)}`;
      break;
   }
      reactN += `${relatedS.length}`;
   let chinasameq = String.fromCharCode(101,50,118,57,97,116,111,108,0) == reactN;
   do {
       let runtimep = 4.0;
       let libtan2 = String.fromCharCode(102,105,101,108,100,95,56,95,51,54,0);
       let alert4 = String.fromCharCode(99,104,101,99,107,98,111,120,95,52,95,57,49,0);
      if (!libtan2.includes(`${runtimep}`)) {
         runtimep *= (parseFloat(`${alert4 == String.fromCharCode(110,0) ? alert4.length : libtan2.length}`));
      }
         runtimep /= Math.max((parseFloat(`${alert4 == String.fromCharCode(121,0) ? parseInt(`${runtimep}`) : alert4.length}`)), 3);
      if (libtan2 != String.fromCharCode(119,0) || alert4 != String.fromCharCode(76,0)) {
         alert4 += `${2 >> (Math.min(3, libtan2.length))}`;
      }
       let emojiS = false;
       let filed5 = false;
         libtan2 = `${(alert4 == String.fromCharCode(51,0) ? (emojiS ? 4 : 1) : alert4.length)}`;
       let forwardk: Map<any, any> = new Map([[String.fromCharCode(113,95,52,57,95,112,108,97,116,102,111,114,109,0),true ], [String.fromCharCode(115,95,51,53,95,108,97,117,110,99,104,101,100,0),false ]]);
      for (let f = 0; f < 1; f++) {
          let stringa: Map<any, any> = new Map([[String.fromCharCode(100,114,97,103,103,105,110,103,95,102,95,57,56,0),false ], [String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,112,95,54,49,0),true ], [String.fromCharCode(99,108,105,99,107,95,100,95,53,54,0),false ]]);
          let langkey6: Array<any> = [153, 715];
          let shareF = String.fromCharCode(108,95,51,53,95,109,97,107,101,114,112,109,0);
          let scrollviewT = 1.0;
         emojiS = !filed5;
         stringa = new Map([[`${stringa.size}`, shareF.length]]);
         langkey6.push(2);
         shareF += "2";
         scrollviewT += parseFloat(`${langkey6.length % 3}`);
      }
      while (!Array.from(forwardk.values()).includes(runtimep)) {
          let megaphonek = 2.0;
          let taiwano: Array<any> = [60, 790];
          let leftO = 1.0;
         runtimep /= Math.max(parseFloat(`${3}`), 5);
         megaphonek *= taiwano.length - 1;
         taiwano = [1 - parseInt(`${leftO}`)];
         leftO += taiwano.length / 2;
         break;
      }
      while ((runtimep - 1.65) < 2.66 || emojiS) {
         runtimep *= parseFloat(`${1 << (Math.min(2, libtan2.length))}`);
         break;
      }
      reactN = `${(reactN == String.fromCharCode(85,0) ? reactN.length : parseInt(`${settingv}`))}`;
      if (chinasameq) {
         break;
      }
   } while (chinasameq && (reactN.length >= 3));

            if (isFocused && !isRefreshing) {

   let matchesW = nalyticsE >= 7360177.0;
   do {
      nalyticsE -= 1 ^ parseInt(`${settingv}`);
      if (matchesW) {
         break;
      }
   } while (matchesW && ((nalyticsE / 4.48) > 5.83));
   let mimoC = 9376744.0 >= librrcD;
   do {
      librrcD *= parseFloat(`${1 << (Math.min(3, relatedS.length))}`);
      if (mimoC) {
         break;
      }
   } while (mimoC && (4 > (overr.length * parseInt(`${librrcD}`)) && (4 + overr.length) > 5));
   if (!mbsplashZ) {
       let collectionq = 0.0;
       let catalogR = String.fromCharCode(109,97,115,107,115,95,107,95,50,56,0);
       let nalyticsx = String.fromCharCode(116,105,109,101,111,117,116,95,100,95,56,49,0);
       let filledP = 4.0;
       let resendk = String.fromCharCode(100,95,49,53,95,100,105,109,105,110,115,105,111,110,115,0);
      while (resendk.length == 5) {
         catalogR = `${parseInt(`${collectionq}`)}`;
         break;
      }
          let stats4 = true;
         filledP *= parseFloat(`${2 ^ parseInt(`${collectionq}`)}`);
         stats4 = !stats4;
      for (let v = 0; v < 2; v++) {
         collectionq -= parseFloat(`${parseInt(`${collectionq}`)}`);
      }
      if (3.12 > (5.21 - collectionq)) {
          let footballm: Map<any, any> = new Map([[String.fromCharCode(116,114,101,110,100,105,110,103,95,122,95,50,49,0),113], [String.fromCharCode(97,110,97,108,121,122,101,114,95,116,95,56,50,0),997], [String.fromCharCode(112,111,112,112,101,100,95,113,95,55,57,0),592]]);
          let interstitiald = String.fromCharCode(114,97,105,116,95,105,95,56,49,0);
         resendk += "2";
         footballm = new Map([[`${footballm.size}`, footballm.size + 3]]);
         interstitiald = `${interstitiald.length & footballm.size}`;
      }
          let heartt = false;
          let texto: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,115,117,98,113,117,101,114,121,0),180], [String.fromCharCode(114,101,115,97,109,112,108,101,95,97,95,56,57,0),327], [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,95,55,95,50,50,0),999]]);
          let bridgeo: Array<any> = [338, 713];
         nalyticsx = `${3 << (Math.min(4, bridgeo.length))}`;
         heartt = texto.get(`${heartt}`) == null;
         texto = new Map([[`${texto.size}`, texto.size]]);
         bridgeo = [texto.size ^ 3];
      while (5.3 == filledP) {
          let libjsinspectorJ = 2.0;
          let eactB = 4.0;
          let dycreatorZ: Array<any> = [917, 763, 423];
         filledP /= Math.max(parseFloat(`${parseInt(`${collectionq}`) + dycreatorZ.length}`), 5);
         libjsinspectorJ += parseInt(`${libjsinspectorJ}`) << (Math.min(2, Math.abs(3)));
         eactB += parseFloat(`${3}`);
         dycreatorZ.push(parseInt(`${libjsinspectorJ}`));
         break;
      }
      for (let g = 0; g < 3; g++) {
         collectionq -= parseFloat(`${parseInt(`${collectionq}`)}`);
      }
         resendk = `${catalogR.length}`;
         resendk += "1";
          let backwardy = 3;
         catalogR += `${2 | parseInt(`${collectionq}`)}`;
         backwardy >>= Math.min(1, Math.abs(backwardy));
      if (4 <= (parseInt(`${collectionq}`) / (Math.max(catalogR.length, 9))) && 4 <= (parseInt(`${collectionq}`) / (Math.max(catalogR.length, 1)))) {
          let emojiC: Map<any, any> = new Map([[String.fromCharCode(120,95,57,55,95,105,116,101,109,0),String.fromCharCode(98,117,102,108,101,110,95,53,95,56,51,0)], [String.fromCharCode(119,109,97,112,114,111,95,109,95,54,52,0),String.fromCharCode(105,110,118,97,108,105,100,97,116,101,100,95,108,95,57,53,0)], [String.fromCharCode(106,95,57,49,95,99,111,114,114,101,108,97,116,105,111,110,0),String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,55,95,57,49,0)]]);
         collectionq /= Math.max(4, parseFloat(`${parseInt(`${filledP}`) - 1}`));
         emojiC = new Map([[`${emojiC.size}`, emojiC.size]]);
      }
      mbsplashZ = String.fromCharCode(113,0) == relatedS;
   }
                handleRefresh();

      overr = `${parseInt(`${nalyticsE}`) - reactN.length}`;
      relatedS = `${overr.length | 1}`;
   while (3 <= overr.length) {
       let borderlesss = String.fromCharCode(105,110,99,111,114,114,101,99,116,95,121,95,57,56,0);
      let libfollyk = String.fromCharCode(116,114,95,102,55,106,97,114,52,104,0) == borderlesss;
      do {
         borderlesss += `${borderlesss.length}`;
         if (libfollyk) {
            break;
         }
      } while (libfollyk && (borderlesss == String.fromCharCode(73,0)));
         borderlesss = `${borderlesss.length}`;
          let emptya = 0.0;
          let libjsijniprofilerO = String.fromCharCode(112,114,105,118,107,101,121,95,121,95,54,55,0);
         borderlesss = `${3 | parseInt(`${emptya}`)}`;
         emptya -= parseFloat(`${2}`);
         libjsijniprofilerO = `${libjsijniprofilerO.length}`;
      librrcD *= (parseFloat(`${parseInt(`${settingv}`) >> (Math.min(5, Math.abs((mbsplashZ ? 1 : 2))))}`));
      break;
   }

                setPressTabScroll(true);

   while (1.73 <= (nalyticsE - sourceJ)) {
       let recommendationT: Map<any, any> = new Map([[String.fromCharCode(113,117,105,122,95,116,95,50,55,0),String.fromCharCode(106,95,50,48,95,100,111,117,98,108,101,115,0)], [String.fromCharCode(120,95,50,53,95,115,107,105,112,112,101,100,0),String.fromCharCode(113,95,54,50,95,117,110,104,97,110,100,108,101,100,0)], [String.fromCharCode(115,95,48,95,99,117,114,118,101,115,0),String.fromCharCode(113,112,101,108,100,115,112,95,50,95,49,0)]]);
       let volume3 = 2.0;
       let searchb: Map<any, any> = new Map([[String.fromCharCode(108,95,52,51,95,114,101,112,108,97,99,101,100,0),708], [String.fromCharCode(99,105,116,121,95,98,95,55,52,0),990], [String.fromCharCode(110,95,55,55,95,99,111,110,116,97,105,110,101,114,115,0),340]]);
       let floaterD: Map<any, any> = new Map([[String.fromCharCode(108,101,114,112,95,105,95,50,52,0),String.fromCharCode(116,104,97,116,95,97,95,49,57,0)], [String.fromCharCode(119,95,49,55,95,97,99,107,101,100,0),String.fromCharCode(106,95,55,54,95,114,101,112,111,0)]]);
       let moonK = String.fromCharCode(116,95,55,49,95,99,108,116,111,115,116,114,0);
         floaterD = new Map([[`${searchb.size}`, parseInt(`${volume3}`) % (Math.max(searchb.size, 2))]]);
         searchb.set(`${volume3}`, 3 % (Math.max(8, moonK.length)));
      let default_jo7 = recommendationT.size >= 5993585;
      do {
         recommendationT = new Map([[`${recommendationT.size}`, recommendationT.size]]);
         if (default_jo7) {
            break;
         }
      } while ((Array.from(recommendationT.keys()).includes(`${floaterD.size}`)) && default_jo7);
      if ((recommendationT.size | 1) < 5 || (moonK.length | recommendationT.size) < 1) {
         moonK += `${parseInt(`${volume3}`)}`;
      }
      for (let m = 0; m < 1; m++) {
         floaterD = new Map([[`${floaterD.size}`, moonK.length]]);
      }
         volume3 -= parseFloat(`${searchb.size / 1}`);
         moonK += `${2 | recommendationT.size}`;
      for (let z = 0; z < 2; z++) {
          let lesss = 5;
         moonK += `${moonK.length}`;
         lesss -= 2 & lesss;
      }
       let spinner0 = 4;
       let footballC = 4;
      for (let k = 0; k < 1; k++) {
         moonK += `${recommendationT.size}`;
      }
      while ((recommendationT.size ^ 2) <= 1) {
          let servicer: Array<any> = [197, 631, 791];
          let logoB = 4;
          let subsA: Map<any, any> = new Map([[String.fromCharCode(115,95,56,49,95,97,118,102,111,117,110,100,97,116,105,111,110,0),977], [String.fromCharCode(112,95,52,48,95,116,101,97,109,115,0),525]]);
         moonK = `${3 / (Math.max(7, recommendationT.size))}`;
         servicer.push(servicer.length & 2);
         logoB /= Math.max(logoB, 2);
         subsA.set(`${logoB}`, logoB * subsA.size);
         break;
      }
      for (let c = 0; c < 2; c++) {
         volume3 += parseFloat(`${3 >> (Math.min(1, Math.abs(searchb.size)))}`);
      }
      let mbbid3 = floaterD.size <= 6587473;
      do {
         floaterD = new Map([[`${footballC}`, footballC]]);
         if (mbbid3) {
            break;
         }
      } while ((1 > (2 ^ floaterD.size)) && mbbid3);
         moonK += `${moonK.length << (Math.min(Math.abs(3), 3))}`;
      for (let w = 0; w < 3; w++) {
         floaterD = new Map([[`${recommendationT.size}`, recommendationT.size / (Math.max(3, 10))]]);
      }
      sourceJ /= Math.max(1, floaterD.size << (Math.min(Math.abs(2), 4)));
      break;
   }
      settingv += parseFloat(`${parseInt(`${sourceJ}`)}`);
      settingv += (parseFloat(`${matchesC == String.fromCharCode(77,0) ? matchesC.length : parseInt(`${settingv}`)}`));

                miniVodListRef.current?.scrollToIndex({
                    index: 0,
                    animated: true,
                });

       let mutedk: Array<any> = [341, 193];
          let thumbnailT = true;
          let final_6h = 1.0;
          let brightnessN = String.fromCharCode(118,95,55,52,95,105,115,97,108,110,117,109,0);
         mutedk.push(mutedk.length);
         thumbnailT = brightnessN.length <= 25;
         final_6h *= parseFloat(`${brightnessN.length << (Math.min(Math.abs(2), 4))}`);
         mutedk.push(1 ^ mutedk.length);
      for (let b = 0; b < 3; b++) {
          let readI = 1.0;
          let eighteenF = 0;
          let yellowb: Array<any> = [393, 406, 199];
         mutedk = [3 * yellowb.length];
         readI /= Math.max(3, parseFloat(`${eighteenF}`));
         eighteenF %= Math.max(4, eighteenF);
         yellowb = [eighteenF];
      }
      sourceJ /= Math.max(parseInt(`${sourceJ}`) & relatedS.length, 4);
   if (!overr.endsWith(`${mbsplashZ}`)) {
      overr = `${parseInt(`${librrcD}`) / (Math.max(overr.length, 1))}`;
   }
      reactN = `${1 + parseInt(`${settingv}`)}`;

                

   let qaagT = reactN == String.fromCharCode(55,122,103,0);
   do {
       let goaly = String.fromCharCode(104,95,54,48,95,105,110,105,116,105,97,108,105,122,101,0);
      while (goaly.length == goaly.length) {
          let latnI = 5.0;
          let zhuboj = 3.0;
          let vignette0 = 1.0;
         goaly += `${parseInt(`${vignette0}`) >> (Math.min(5, Math.abs(parseInt(`${zhuboj}`))))}`;
         latnI += parseInt(`${latnI}`) >> (Math.min(Math.abs(parseInt(`${latnI}`)), 5));
         zhuboj += parseInt(`${latnI}`) << (Math.min(Math.abs(parseInt(`${latnI}`)), 3));
         break;
      }
      let mbbid6 = goaly.length >= 6529364;
      do {
         goaly += "3";
         if (mbbid6) {
            break;
         }
      } while (mbbid6 && (goaly != String.fromCharCode(115,0)));
         goaly += "3";
      reactN += `${matchesC.length ^ parseInt(`${sourceJ}`)}`;
      if (qaagT) {
         break;
      }
   } while (qaagT && ((settingv / 5.19) < 1.11));
       let animationp = String.fromCharCode(97,95,56,54,95,99,111,118,101,114,115,0);
       let libffmpegkitk = 0;
       let commentr = String.fromCharCode(111,95,54,52,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0);
         animationp = `${(commentr == String.fromCharCode(122,0) ? libffmpegkitk : commentr.length)}`;
         animationp = `${libffmpegkitk}`;
      let libfb9 = 5427847 >= libffmpegkitk;
      do {
         libffmpegkitk <<= Math.min(Math.abs(commentr.length >> (Math.min(2, Math.abs(libffmpegkitk)))), 1);
         if (libfb9) {
            break;
         }
      } while (libfb9 && (!commentr.includes(`${libffmpegkitk}`)));
          let logoutX = String.fromCharCode(102,105,116,116,101,100,95,121,95,57,48,0);
          let spinnerN = 4;
          let zhuboW = String.fromCharCode(98,117,116,116,111,110,95,117,95,53,50,0);
         animationp += "2";
         logoutX += `${3 + logoutX.length}`;
         spinnerN >>= Math.min(Math.abs(logoutX.length >> (Math.min(5, zhuboW.length))), 1);
         zhuboW += `${logoutX.length % 2}`;
          let themeB = 5;
         libffmpegkitk *= commentr.length;
         themeB ^= themeB;
          let gradlewe: Map<any, any> = new Map([[String.fromCharCode(98,97,111,98,97,98,95,110,95,51,55,0),586], [String.fromCharCode(97,100,108,101,114,95,55,95,53,0),969], [String.fromCharCode(101,110,100,101,100,95,116,95,51,49,0),768]]);
         animationp += `${libffmpegkitk}`;
         gradlewe = new Map([[`${gradlewe.size}`, gradlewe.size]]);
       let usernameH = 0;
          let scheduleG = 4;
          let clearJ = String.fromCharCode(114,105,103,104,116,115,95,118,95,57,0);
         libffmpegkitk &= usernameH;
         scheduleG >>= Math.min(Math.abs(scheduleG), 2);
         clearJ += `${clearJ.length & 2}`;
       let eventO = String.fromCharCode(105,110,105,116,105,97,116,101,95,53,95,51,54,0);
      librrcD += (parseFloat(`${(mbsplashZ ? 5 : 1) - libffmpegkitk}`));
      nalyticsE -= 1;
                setTimeout(() => {

   for (let l = 0; l < 2; l++) {
       let scheduleA = 3.0;
       let themeh = String.fromCharCode(105,95,52,55,95,99,111,110,118,101,114,116,105,98,108,101,0);
      let smallF = 6418826 <= themeh.length;
      do {
         themeh = `${themeh.length | parseInt(`${scheduleA}`)}`;
         if (smallF) {
            break;
         }
      } while (((scheduleA - parseFloat(`${themeh.length}`)) < 1.53 || (3 | themeh.length) < 2) && smallF);
      if ((parseInt(`${scheduleA}`) / (Math.max(8, themeh.length))) > 4) {
         themeh = `${themeh.length * parseInt(`${scheduleA}`)}`;
      }
      for (let w = 0; w < 2; w++) {
         scheduleA -= parseFloat(`${parseInt(`${scheduleA}`) << (Math.min(Math.abs(1), 2))}`);
      }
       let bottomr = 3;
       let heartW = 1;
       let mini1 = 1;
       let line6 = 1;
      while ((heartW ^ bottomr) >= 5 || 5 >= (bottomr ^ 5)) {
         heartW %= Math.max(1, themeh.length % 2);
         break;
      }
      mbsplashZ = nalyticsE == sourceJ;
   }
   if (matchesC.length < parseInt(`${sourceJ}`)) {
      matchesC = `${parseInt(`${settingv}`)}`;
   }
      matchesC = `${(String.fromCharCode(110,0) == matchesC ? parseInt(`${nalyticsE}`) : matchesC.length)}`;
                    setPressTabScroll(false);
                }, 500)
            }
        };
        const unsubscribe = navigation.addListener('tabPress', handleTabPress);
        
        return () => unsubscribe();
    }, [navigation, isFocused, isRefreshing]);


    const handleRefresh = useCallback(async () => {
       let save5 = 2;
    let modity0 = String.fromCharCode(98,111,117,110,100,105,110,103,95,117,95,53,55,0);
    let fillF: Map<any, any> = new Map([[String.fromCharCode(109,95,52,50,95,100,121,110,97,109,105,99,0),491], [String.fromCharCode(119,95,52,51,95,120,118,105,100,0),121], [String.fromCharCode(116,95,54,50,95,116,104,114,101,97,100,105,110,103,0),558]]);
    let quest2 = String.fromCharCode(111,95,54,54,95,102,114,97,103,0);
    let transferc = String.fromCharCode(107,95,57,52,95,109,109,115,104,0);
    let foregroundg = 2.0;
    let icon4: Array<any> = [String.fromCharCode(109,95,52,52,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0), String.fromCharCode(108,95,55,57,95,102,99,102,115,0)];
    let termse = 4.0;
    let debugt = String.fromCharCode(101,108,115,100,101,99,95,121,95,48,0);
    let kuaishout = false;
    let loginV: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,101,110,116,95,117,95,56,55,0),String.fromCharCode(105,110,105,116,105,97,108,95,105,95,52,0)], [String.fromCharCode(117,95,55,50,95,105,110,116,101,114,99,101,112,116,111,114,115,0),String.fromCharCode(115,116,114,110,105,99,109,112,95,98,95,53,57,0)]]);
    let screenK = 3;
    let libffmpegkito = String.fromCharCode(99,108,97,117,115,101,95,107,95,57,55,0);
    let libtan4 = String.fromCharCode(101,95,51,53,95,100,110,115,0);
    let eact8 = 1.0;
      kuaishout = debugt.endsWith(`${kuaishout}`);
   let viewsD = fillF.size >= 9747719;
   do {
      fillF = new Map([[`${icon4.length}`, icon4.length - 3]]);
      if (viewsD) {
         break;
      }
   } while (viewsD && ((2 ^ fillF.size) == 2));
   let formJ = save5 >= 6979583;
   do {
       let abidetect7: Array<any> = [579, 996];
       let change_ = true;
       let teamZ = String.fromCharCode(115,95,50,95,117,110,100,101,114,102,108,111,119,0);
          let zoomf = String.fromCharCode(111,95,53,95,111,112,101,110,115,108,101,115,0);
         abidetect7.push(abidetect7.length - 3);
         zoomf = `${zoomf.length + 2}`;
      if (3 == (teamZ.length % (Math.max(5, 4)))) {
         teamZ = `${2 - teamZ.length}`;
      }
       let long_90d = String.fromCharCode(101,118,97,108,117,97,116,101,100,95,115,95,54,56,0);
       let favoriteV = String.fromCharCode(100,101,112,101,110,100,95,105,95,56,57,0);
      let moonR = long_90d == String.fromCharCode(101,113,52,103,99,95,53,120,114,113,0);
      do {
          let private_n4c = true;
         long_90d = `${(2 >> (Math.min(1, Math.abs((change_ ? 5 : 3)))))}`;
         private_n4c = (private_n4c ? !private_n4c : !private_n4c);
         if (moonR) {
            break;
         }
      } while ((long_90d.length <= 3) && moonR);
      if (4 >= long_90d.length) {
         teamZ += `${favoriteV.length + 3}`;
      }
         long_90d += `${long_90d.length}`;
          let recommendationt = String.fromCharCode(99,111,110,110,101,99,116,95,56,95,50,57,0);
          let areaU = 0.0;
          let spinnert = 1.0;
         abidetect7 = [((change_ ? 4 : 5) % 1)];
         recommendationt += `${parseInt(`${spinnert}`)}`;
         areaU += parseFloat(`${recommendationt.length - parseInt(`${areaU}`)}`);
         spinnert *= (recommendationt == String.fromCharCode(57,0) ? parseInt(`${spinnert}`) : recommendationt.length);
      for (let x = 0; x < 3; x++) {
          let linkq = 0;
          let whiteK = 1.0;
          let libcrashsdkm = String.fromCharCode(101,95,55,51,95,104,119,99,111,110,116,101,120,116,0);
         favoriteV = `${1 % (Math.max(2, parseInt(`${whiteK}`)))}`;
         linkq >>= Math.min(Math.abs(linkq << (Math.min(Math.abs(2), 2))), 3);
         whiteK *= linkq << (Math.min(libcrashsdkm.length, 2));
         libcrashsdkm = `${libcrashsdkm.length}`;
      }
      while (long_90d.length <= 5) {
         change_ = teamZ.length >= 67;
         break;
      }
      save5 += save5;
      if (formJ) {
         break;
      }
   } while ((5.6 <= (save5 / (Math.max(foregroundg, 10)))) && formJ);
       let unready = String.fromCharCode(99,95,52,48,95,99,111,108,117,109,110,0);
       let customG = String.fromCharCode(117,110,112,97,99,107,101,100,95,101,95,49,55,0);
       let progresss = String.fromCharCode(115,116,101,110,99,105,108,95,113,95,52,55,0);
       let shirtE = String.fromCharCode(121,95,54,52,95,98,97,115,105,99,97,108,108,121,0);
       let downh = String.fromCharCode(104,95,53,54,95,120,108,97,98,101,108,104,101,105,103,104,116,0);
         unready += `${unready.length | 1}`;
      let libcxxcomponentsq = String.fromCharCode(111,110,100,120,57,100,48,0) == unready;
      do {
         unready += "2";
         if (libcxxcomponentsq) {
            break;
         }
      } while (libcxxcomponentsq && (progresss.length > 1));
      for (let i = 0; i < 3; i++) {
         customG = `${shirtE.length}`;
      }
         downh = "2";
          let bing6 = String.fromCharCode(115,95,54,57,95,97,103,103,114,101,103,97,116,101,115,0);
          let sigmobV = String.fromCharCode(110,95,54,57,95,112,97,114,99,111,114,0);
         progresss = "2";
         bing6 = `${sigmobV.length}`;
         sigmobV = `${(bing6 == String.fromCharCode(103,0) ? sigmobV.length : bing6.length)}`;
      for (let i = 0; i < 3; i++) {
          let reducerU = false;
          let userw: Array<any> = [String.fromCharCode(115,117,98,102,114,97,109,101,115,95,51,95,51,53,0), String.fromCharCode(99,109,100,117,116,105,108,115,95,57,95,55,54,0)];
          let reducerE: Array<any> = [977, 33, 322];
         shirtE = `${shirtE.length ^ progresss.length}`;
         reducerU = !reducerU;
         userw.push(3);
         reducerE = [reducerE.length % (Math.max(1, 5))];
      }
         customG = `${unready.length % (Math.max(1, downh.length))}`;
          let assistq = String.fromCharCode(122,95,51,54,95,104,97,108,100,99,108,117,116,0);
          let actionsP: Array<any> = [String.fromCharCode(100,101,98,117,103,103,105,110,103,95,100,95,49,56,0), String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,97,95,56,56,0)];
         customG = `${customG.length}`;
         assistq += `${2 << (Math.min(4, actionsP.length))}`;
         actionsP.push(1 & assistq.length);
      loginV.set(customG, 1 % (Math.max(10, customG.length)));
      loginV = new Map([[`${icon4.length}`, 2 | parseInt(`${foregroundg}`)]]);
      modity0 = `${parseInt(`${termse}`) + loginV.size}`;
   for (let u = 0; u < 3; u++) {
      save5 &= icon4.length - 1;
   }
      modity0 = `${transferc.length << (Math.min(3, icon4.length))}`;
      fillF.set(modity0, modity0.length - 2);

        setIsRefreshing(true);

       let actions_: Array<any> = [643, 7];
       let suggestionW = 0.0;
         suggestionW -= 1;
      for (let d = 0; d < 3; d++) {
         suggestionW += 1 / (Math.max(parseInt(`${suggestionW}`), 7));
      }
         actions_.push(actions_.length);
      while (actions_.length > suggestionW) {
          let klevinn = 5;
          let baseE = 3.0;
         suggestionW += klevinn << (Math.min(1, Math.abs(3)));
         klevinn ^= 3;
         baseE += parseFloat(`${parseInt(`${baseE}`) % (Math.max(4, parseInt(`${baseE}`)))}`);
         break;
      }
         actions_.push(actions_.length ^ parseInt(`${suggestionW}`));
         actions_ = [3];
      foregroundg /= Math.max(2, debugt.length);
      quest2 += `${debugt.length}`;
   for (let j = 0; j < 2; j++) {
      icon4.push(icon4.length >> (Math.min(debugt.length, 3)));
   }
      termse /= Math.max(parseFloat(`${screenK << (Math.min(debugt.length, 3))}`), 4);
      fillF.set(debugt, save5 % 2);
   if ((screenK >> (Math.min(Math.abs(1), 1))) < 1 && 1 < (screenK >> (Math.min(Math.abs(save5), 2)))) {
      save5 <<= Math.min(Math.abs((modity0 == String.fromCharCode(53,0) ? parseInt(`${foregroundg}`) : modity0.length)), 4);
   }
       let carousel3: Map<any, any> = new Map([[String.fromCharCode(115,117,114,102,97,99,101,95,114,95,55,52,0),200], [String.fromCharCode(98,101,115,115,101,108,95,52,95,54,50,0),390], [String.fromCharCode(105,116,108,101,95,110,95,50,48,0),772]]);
       let fieldM: Array<any> = [243, 631];
       let episodeP = String.fromCharCode(97,100,100,115,95,99,95,54,55,0);
         fieldM.push((String.fromCharCode(75,0) == episodeP ? episodeP.length : carousel3.size));
         fieldM = [fieldM.length | 3];
      while ((episodeP.length & 2) == 4) {
          let moduleu = 4.0;
          let backward1 = 2.0;
          let backgrounds: Map<any, any> = new Map([[String.fromCharCode(102,95,57,57,95,102,111,110,116,0),true ], [String.fromCharCode(106,95,53,95,99,104,111,115,101,0),true ], [String.fromCharCode(99,95,56,49,95,112,117,116,0),false ]]);
          let clearz: Map<any, any> = new Map([[String.fromCharCode(116,114,117,110,95,55,95,50,52,0),113], [String.fromCharCode(122,95,52,51,95,102,111,117,114,120,0),406]]);
         episodeP = `${3 ^ clearz.size}`;
         moduleu -= parseFloat(`${backgrounds.size * 3}`);
         backward1 *= parseFloat(`${3}`);
         backgrounds.set(`${backward1}`, 1 ^ parseInt(`${backward1}`));
         clearz.set(`${backward1}`, parseInt(`${backward1}`) ^ backgrounds.size);
         break;
      }
       let fills: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,95,108,95,55,53,0),true ], [String.fromCharCode(111,98,106,101,99,116,95,118,95,50,48,0),true ], [String.fromCharCode(115,101,101,107,105,110,103,95,48,95,57,53,0),false ]]);
      while (!episodeP.startsWith(`${fills.size}`)) {
         fills = new Map([[`${fieldM.length}`, 1]]);
         break;
      }
      while (4 > fieldM.length) {
         episodeP = `${episodeP.length >> (Math.min(Math.abs(1), 5))}`;
         break;
      }
      for (let z = 0; z < 1; z++) {
          let heart3 = String.fromCharCode(97,95,51,51,95,99,111,110,118,101,114,116,101,114,0);
         fieldM.push(3 | fills.size);
         heart3 = `${heart3.length >> (Math.min(4, heart3.length))}`;
      }
          let mbbannerQ = String.fromCharCode(117,112,108,111,97,100,101,114,95,50,95,50,53,0);
         carousel3.set(`${fieldM.length}`, fieldM.length << (Math.min(Math.abs(1), 4)));
         mbbannerQ = "1";
      if (2 == fills.size) {
          let untickN = false;
         episodeP = `${episodeP.length}`;
         untickN = (!untickN ? !untickN : untickN);
      }
      transferc += `${save5 % 3}`;
   for (let n = 0; n < 1; n++) {
       let clearw = String.fromCharCode(109,105,103,114,97,116,105,111,110,95,100,95,48,0);
       let libreactnativeblobm = 3.0;
      while (4.59 < (2.84 - libreactnativeblobm) && 5.9 < (libreactnativeblobm - 2.84)) {
         clearw = `${(String.fromCharCode(119,0) == clearw ? parseInt(`${libreactnativeblobm}`) : clearw.length)}`;
         break;
      }
      let calendarZ = 8854183.0 <= libreactnativeblobm;
      do {
          let values8 = String.fromCharCode(117,95,57,95,114,102,99,116,0);
          let libavutilY = String.fromCharCode(106,95,55,53,95,99,104,97,105,110,105,100,0);
         libreactnativeblobm += values8.length - libavutilY.length;
         if (calendarZ) {
            break;
         }
      } while (((clearw.length + parseInt(`${libreactnativeblobm}`)) > 3 || (5.55 + libreactnativeblobm) > 3.19) && calendarZ);
         clearw += "2";
          let thumbnaild = true;
          let movies4 = 5.0;
          let sinaH = false;
         clearw += `${(String.fromCharCode(57,0) == clearw ? clearw.length : parseInt(`${movies4}`))}`;
         thumbnaild = thumbnaild && sinaH;
         movies4 /= Math.max(3, 4);
      let stats4 = 5189189.0 >= libreactnativeblobm;
      do {
         libreactnativeblobm -= clearw.length;
         if (stats4) {
            break;
         }
      } while ((3 < (clearw.length - 1)) && stats4);
          let searchJ = String.fromCharCode(114,101,97,108,108,111,99,112,95,113,95,52,49,0);
          let traminis = String.fromCharCode(114,101,108,97,121,115,95,114,95,50,0);
          let optionsd = 1.0;
         clearw += `${traminis.length << (Math.min(5, Math.abs(parseInt(`${optionsd}`))))}`;
         searchJ += `${(searchJ == String.fromCharCode(73,0) ? searchJ.length : searchJ.length)}`;
         traminis = `${searchJ.length}`;
      debugt = `${clearw.length}`;
   }
      modity0 = "1";
        

       let twitterP = 3;
         twitterP *= 1 << (Math.min(4, Math.abs(twitterP)));
         twitterP <<= Math.min(Math.abs(2 << (Math.min(2, Math.abs(twitterP)))), 1);
          let bodan_: Map<any, any> = new Map([[String.fromCharCode(100,110,120,104,100,100,97,116,97,95,113,95,56,48,0),String.fromCharCode(112,105,99,107,105,110,103,95,52,95,51,50,0)], [String.fromCharCode(104,95,57,48,95,113,101,120,112,0),String.fromCharCode(121,95,54,49,95,99,111,100,101,99,112,97,114,0)]]);
          let confirmationV = 5.0;
         twitterP |= 3 * bodan_.size;
         bodan_.set(`${confirmationV}`, parseInt(`${confirmationV}`) ^ 2);
      fillF = new Map([[libffmpegkito, libffmpegkito.length]]);
      fillF.set(`${kuaishout}`, screenK);
   while ((5 * debugt.length) == 5 && (5 * debugt.length) == 2) {
      debugt = `${modity0.length << (Math.min(Math.abs(2), 5))}`;
      break;
   }
      icon4.push(screenK);
      icon4.push(3);
      screenK >>= Math.min(2, Math.abs(parseInt(`${foregroundg}`) / (Math.max(2, 1))));
      fillF.set(libffmpegkito, libffmpegkito.length);
      transferc = `${transferc.length + 3}`;
   let turnk = 6979396 >= screenK;
   do {
      screenK ^= (debugt.length << (Math.min(3, Math.abs((kuaishout ? 1 : 2)))));
      if (turnk) {
         break;
      }
   } while (((3 + screenK) < 5 || 5 < (screenK << (Math.min(Math.abs(3), 5)))) && turnk);
        await refetch();

   if (5 < icon4.length) {
      icon4 = [1 & save5];
   }
      libffmpegkito += `${quest2.length - transferc.length}`;
      fillF = new Map([[`${loginV.size}`, transferc.length]]);
   let default_nK = fillF.size <= 6270893;
   do {
      fillF = new Map([[modity0, modity0.length * 2]]);
      if (default_nK) {
         break;
      }
   } while (((5 * transferc.length) == 1) && default_nK);
      transferc += `${parseInt(`${termse}`)}`;
   let tickS = termse <= 7765810.0;
   do {
      termse += (parseFloat(`${debugt == String.fromCharCode(56,0) ? icon4.length : debugt.length}`));
      if (tickS) {
         break;
      }
   } while (tickS && (!icon4.includes(termse)));
   let private_7w = libffmpegkito.length <= 8199932;
   do {
      libffmpegkito += `${fillF.size ^ 1}`;
      if (private_7w) {
         break;
      }
   } while (private_7w && (libffmpegkito.length == 5));
   while (debugt.length == 5) {
       let str3 = 3;
       let renewu = 3.0;
         str3 *= str3;
      if ((renewu - 3.96) > 3.38 || 4 > (5 & str3)) {
         str3 %= Math.max(2, parseInt(`${renewu}`));
      }
      for (let g = 0; g < 2; g++) {
          let debug5 = 5.0;
          let ewardedL = 3.0;
         str3 %= Math.max(parseInt(`${renewu}`) | 3, 4);
         debug5 /= Math.max(parseInt(`${ewardedL}`) >> (Math.min(4, Math.abs(1))), 4);
         ewardedL -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${ewardedL}`)), 4))}`);
      }
      while (5 >= (4 % (Math.max(9, str3)))) {
          let libavcodecK = String.fromCharCode(122,95,49,57,95,100,99,116,101,108,101,109,0);
         str3 >>= Math.min(Math.abs(str3), 2);
         libavcodecK += `${libavcodecK.length ^ 2}`;
         break;
      }
      while (5.77 > (renewu * parseFloat(`${str3}`)) || 5.77 > (renewu * parseFloat(`${str3}`))) {
          let shirtF = false;
          let background4 = 4;
          let anytimeT = 4;
          let connectionr = true;
          let applicationt: Map<any, any> = new Map([[String.fromCharCode(108,97,110,99,122,111,115,95,55,95,52,0),String.fromCharCode(113,95,54,53,95,115,97,118,101,105,0)], [String.fromCharCode(105,110,116,101,114,105,111,114,95,105,95,55,53,0),String.fromCharCode(116,116,108,95,109,95,53,54,0)], [String.fromCharCode(97,108,108,121,117,118,95,103,95,51,48,0),String.fromCharCode(104,95,53,55,95,99,111,100,101,100,0)]]);
         renewu += (parseFloat(`${background4 % (Math.max(3, (shirtF ? 4 : 3)))}`));
         shirtF = !connectionr;
         background4 ^= applicationt.size % (Math.max(4, anytimeT));
         anytimeT /= Math.max(5, 2 * anytimeT);
         applicationt = new Map([[`${applicationt.size}`, (applicationt.size | (connectionr ? 1 : 3))]]);
         break;
      }
         str3 += str3 / (Math.max(9, parseInt(`${renewu}`)));
      libffmpegkito = `${screenK}`;
      break;
   }
      foregroundg *= parseInt(`${termse}`);
        setIsRefreshing(false);

   for (let f = 0; f < 2; f++) {
       let darka = 5.0;
       let libsentryS: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,112,111,115,95,106,95,57,49,0),574], [String.fromCharCode(115,95,50,54,95,109,115,98,115,0),639]]);
         darka *= libsentryS.size;
          let mbjscommonN = String.fromCharCode(121,95,56,53,95,97,118,102,111,114,109,97,116,0);
          let stringsP = 0.0;
         darka /= Math.max(libsentryS.size % 3, 3);
         mbjscommonN = "2";
         stringsP /= Math.max(2, mbjscommonN.length);
      if (!Array.from(libsentryS.values()).includes(darka)) {
         darka += parseInt(`${darka}`) % (Math.max(6, libsentryS.size));
      }
      while ((2.80 - darka) > 3.15) {
          let projectX = String.fromCharCode(111,95,49,56,95,112,100,102,0);
          let mbbannerr = String.fromCharCode(119,95,56,49,95,109,112,101,103,117,116,105,108,115,0);
          let frame_ftC: Array<any> = [String.fromCharCode(118,109,100,118,105,100,101,111,95,116,95,52,55,0), String.fromCharCode(110,111,108,111,99,107,95,103,95,50,51,0)];
          let watchg = false;
          let fullC = true;
         libsentryS.set(`${darka}`, (parseInt(`${darka}`) - (fullC ? 1 : 2)));
         projectX = `${(String.fromCharCode(72,0) == projectX ? projectX.length : mbbannerr.length)}`;
         mbbannerr = `${1 + mbbannerr.length}`;
         frame_ftC.push(1);
         watchg = !watchg;
         fullC = watchg;
         break;
      }
      while ((darka / (Math.max(3, libsentryS.size))) < 1.54 || 1.54 < (darka / (Math.max(9, libsentryS.size)))) {
         darka /= Math.max(3, parseInt(`${darka}`));
         break;
      }
       let resultl: Map<any, any> = new Map([[String.fromCharCode(109,105,109,105,99,95,122,95,49,48,48,0),864], [String.fromCharCode(101,118,105,99,116,105,111,110,95,99,95,57,54,0),275]]);
      debugt += `${icon4.length}`;
   }
       let footballU = 5;
       let libfb0 = String.fromCharCode(105,95,55,48,95,103,114,111,119,105,110,103,0);
      while (4 > (libfb0.length >> (Math.min(2, Math.abs(footballU))))) {
         footballU ^= 1;
         break;
      }
          let appleU = 0;
         libfb0 += "3";
         appleU ^= appleU | appleU;
      modity0 = `${icon4.length / 3}`;
   while (kuaishout && debugt.length == 3) {
      kuaishout = 50 < fillF.size;
      break;
   }
   let plusB = 8041960 >= save5;
   do {
       let borderless0 = 1;
       let hongkong5 = String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,56,95,49,48,0);
       let applex = String.fromCharCode(109,95,52,56,95,105,108,98,99,102,105,120,0);
       let manifestx = 0.0;
       let chinax = String.fromCharCode(120,95,49,57,95,104,100,108,114,0);
       let sigmob5 = String.fromCharCode(111,95,49,48,48,95,118,115,121,110,99,0);
         chinax = `${(hongkong5 == String.fromCharCode(95,0) ? hongkong5.length : parseInt(`${manifestx}`))}`;
       let zhubo6 = 3;
         applex = `${applex.length}`;
      for (let e = 0; e < 3; e++) {
          let redirectX = true;
          let chinasamew = 4;
          let file2 = true;
          let becomeE: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,101,114,95,119,95,50,54,0),528], [String.fromCharCode(103,114,101,97,116,101,114,95,50,95,56,54,0),40], [String.fromCharCode(112,114,101,115,101,114,118,101,95,98,95,54,49,0),246]]);
          let connectionx = String.fromCharCode(118,95,50,53,95,109,112,99,100,97,116,97,0);
         hongkong5 = `${borderless0 % (Math.max(1, 4))}`;
         redirectX = (chinasamew ^ connectionx.length) >= 73;
         chinasamew >>= Math.min(connectionx.length, 1);
         file2 = connectionx.length > 76;
         becomeE = new Map([[`${file2}`, 1]]);
      }
       let libavutilj = 3.0;
       let tickV = 1.0;
          let clockh = 4.0;
          let build9 = 4.0;
          let logoy = true;
         borderless0 ^= borderless0;
         clockh /= Math.max((parseInt(`${clockh}`) + (logoy ? 2 : 3)), 1);
         build9 /= Math.max((parseFloat(`${(logoy ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${clockh}`)), 4))}`)), 2);
      if (zhubo6 <= applex.length) {
         zhubo6 /= Math.max(4, borderless0 ^ 1);
      }
      for (let b = 0; b < 2; b++) {
         manifestx /= Math.max(4, parseFloat(`${parseInt(`${libavutilj}`)}`));
      }
         manifestx -= parseFloat(`${3 ^ parseInt(`${manifestx}`)}`);
       let activitye = String.fromCharCode(99,111,109,112,108,101,116,105,111,110,95,115,95,51,57,0);
      let sentryA = tickV <= 8998134.0;
      do {
         tickV /= Math.max(2, parseFloat(`${hongkong5.length & borderless0}`));
         if (sentryA) {
            break;
         }
      } while (sentryA && ((3.40 * tickV) == 1.89 && (sigmob5.length ^ 4) == 5));
      save5 |= debugt.length & 3;
      if (plusB) {
         break;
      }
   } while ((3 <= (libtan4.length ^ 1) || (1 ^ libtan4.length) <= 3) && plusB);
      transferc = `${parseInt(`${eact8}`)}`;
   for (let o = 0; o < 3; o++) {
      transferc = `${transferc.length}`;
   }
      libtan4 = `${libtan4.length * 2}`;
      quest2 = `${parseInt(`${termse}`) / 3}`;
   for (let o = 0; o < 1; o++) {
       let foundD = false;
       let foregroundB: Array<any> = [232, 953];
       let statistics8 = String.fromCharCode(99,108,111,99,107,119,105,115,101,95,119,95,50,52,0);
      let huaweik = 8341747 >= foregroundB.length;
      do {
         foregroundB = [foregroundB.length / 3];
         if (huaweik) {
            break;
         }
      } while (((statistics8.length >> (Math.min(5, foregroundB.length))) == 2) && huaweik);
       let moonX = String.fromCharCode(114,101,99,111,110,105,110,116,114,97,95,102,95,54,53,0);
       let hongkongh = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,115,95,51,51,0);
      if (hongkongh == moonX) {
         moonX += `${(statistics8 == String.fromCharCode(121,0) ? (foundD ? 3 : 2) : statistics8.length)}`;
      }
          let configureJ = true;
          let shareg = String.fromCharCode(109,97,116,104,101,115,95,51,95,55,57,0);
          let binddatasr: Map<any, any> = new Map([[String.fromCharCode(105,95,55,50,95,112,114,105,109,97,114,121,0),678], [String.fromCharCode(107,109,115,103,114,97,98,95,103,95,52,56,0),717], [String.fromCharCode(110,115,112,97,99,101,115,95,48,95,57,54,0),573]]);
         hongkongh += `${shareg.length | foregroundB.length}`;
         configureJ = binddatasr.size > 47;
         shareg = "3";
         binddatasr.set(`${configureJ}`, ((configureJ ? 5 : 5) & binddatasr.size));
      if (4 < (foregroundB.length << (Math.min(moonX.length, 4))) && (4 << (Math.min(5, foregroundB.length))) < 2) {
         foregroundB = [statistics8.length];
      }
      if (foundD) {
         foregroundB.push((foregroundB.length / (Math.max(7, (foundD ? 3 : 4)))));
      }
         foundD = statistics8.length > 90 || !foundD;
      if (!statistics8.includes(`${hongkongh.length}`)) {
          let yellow6: Array<any> = [829, 553, 959];
         statistics8 = `${foregroundB.length}`;
         yellow6 = [yellow6.length];
      }
      let baiduD = foundD ? !foundD : foundD;
      do {
          let crownf: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,116,114,101,97,109,95,104,95,49,48,0),String.fromCharCode(118,95,57,52,95,99,111,112,105,101,115,0)], [String.fromCharCode(116,95,55,51,95,114,101,103,105,115,116,101,114,101,114,0),String.fromCharCode(118,95,57,52,95,112,111,108,105,99,101,0)]]);
         foundD = foregroundB.length < moonX.length;
         crownf.set(`${crownf.size}`, crownf.size * crownf.size);
         if (baiduD) {
            break;
         }
      } while (baiduD && (statistics8.startsWith(`${foundD}`)));
      debugt += `${modity0.length}`;
   }
        return;
    }, []);

    const [flattenedVideos, setFlattenedVideos] = useState(Array<yys_ScrollviewPangle>);
    const LIMIT = 300;
    const fetchVods = (page: number) => yys_Inactive.getListByPage({
        page,
        limit: LIMIT,
    });

    const { data: videos, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching, refetch } =
        useInfiniteQuery(['watchAnytime'], ({ pageParam = 1 }) => fetchVods(pageParam), {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage === null) {
                    return undefined;
                }
                const nextPage =
                    lastPage.length === LIMIT ? allPages.length + 1 : undefined;
                return nextPage;
            },
            onSuccess: (data) => {
            }
        });

    useEffect(() => {
        if (videos != undefined) {
            setFlattenedVideos(videos?.pages.flat().filter(x => x));
        }
    }, [videos])

    const checkConnection = useCallback(async () => {
       let catalogP: Array<any> = [826, 240, 253];
    let stationsp = true;
    let skip7 = 1;
    let info_ = 2;
    let k_positionY = 2.0;
    let taiwanY = 4.0;
    let white0 = String.fromCharCode(97,95,50,48,95,98,114,105,100,103,105,110,103,0);
    let resultm = String.fromCharCode(107,95,48,95,112,97,99,107,101,100,0);
    let plusn = 1.0;
    let tooltipsk = String.fromCharCode(105,103,110,111,114,101,115,95,119,95,49,54,0);
    let libffmpegkitK = String.fromCharCode(102,111,117,114,95,116,95,57,50,0);
   if ((2 - skip7) < 5) {
      resultm = `${info_ + 2}`;
   }
      stationsp = catalogP.length == taiwanY;
   for (let m = 0; m < 1; m++) {
      skip7 &= skip7 - 1;
   }
   let libavfilter_ = k_positionY <= 9374814.0;
   do {
       let resultj = 5.0;
       let orientationB = String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,52,95,55,55,0);
          let combineY: Map<any, any> = new Map([[String.fromCharCode(102,95,53,57,95,100,111,117,98,108,105,110,103,0),false ], [String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,111,95,52,49,0),true ], [String.fromCharCode(97,110,115,119,101,114,115,95,105,95,55,49,0),false ]]);
         resultj += orientationB.length % 3;
         combineY.set(`${combineY.size}`, combineY.size);
       let gmailK: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,105,110,116,101,114,115,101,99,116,115,0),true ], [String.fromCharCode(110,95,52,57,95,115,111,119,97,107,101,117,112,0),true ]]);
       let anythinkt: Map<any, any> = new Map([[String.fromCharCode(117,95,51,53,95,109,115,103,115,109,0),String.fromCharCode(97,95,55,48,95,108,111,110,103,101,114,0)], [String.fromCharCode(119,95,57,50,95,115,101,103,119,105,116,0),String.fromCharCode(105,114,114,101,108,118,97,110,116,95,110,95,57,53,0)]]);
       let emoji2: Map<any, any> = new Map([[String.fromCharCode(108,95,49,54,95,99,105,100,0),110], [String.fromCharCode(121,95,52,49,95,97,115,107,0),832]]);
      let animationW = 7025064 <= gmailK.size;
      do {
          let vignetted = 2.0;
          let leftk = 5.0;
          let thumbnail3 = 0.0;
          let kuaishouv = String.fromCharCode(115,122,97,98,111,115,95,110,95,50,49,0);
         gmailK.set(`${gmailK.size}`, emoji2.size << (Math.min(5, Math.abs(gmailK.size))));
         vignetted -= 3 & parseInt(`${leftk}`);
         leftk *= parseFloat(`${kuaishouv.length}`);
         thumbnail3 -= parseFloat(`${kuaishouv.length ^ parseInt(`${leftk}`)}`);
         if (animationW) {
            break;
         }
      } while (animationW && (4 > (gmailK.size + 3)));
      if (!orientationB.endsWith(`${emoji2.size}`)) {
         emoji2 = new Map([[`${emoji2.size}`, 2 - emoji2.size]]);
      }
      if (2 == (2 / (Math.max(1, orientationB.length))) || (orientationB.length << (Math.min(Math.abs(2), 5))) == 3) {
         orientationB += `${emoji2.size}`;
      }
      k_positionY *= parseFloat(`${resultm.length * info_}`);
      if (libavfilter_) {
         break;
      }
   } while (libavfilter_ && (k_positionY >= 3.65 && (k_positionY * 3.65) >= 1.67));
      stationsp = skip7 >= 65 || info_ >= 65;

        const state = await NetInfo.fetch();

   for (let l = 0; l < 1; l++) {
      catalogP.push(((stationsp ? 3 : 3) << (Math.min(Math.abs(info_), 4))));
   }
      taiwanY *= 2 | parseInt(`${k_positionY}`);
       let formg: Map<any, any> = new Map([[String.fromCharCode(111,95,51,55,95,109,99,100,101,99,0),269], [String.fromCharCode(114,101,115,105,100,117,97,108,115,95,104,95,55,0),993], [String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,117,95,49,52,0),286]]);
       let d_unlockJ = 4.0;
       let collectionm: Array<any> = [String.fromCharCode(121,95,54,52,95,115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,0), String.fromCharCode(120,95,56,52,95,115,105,103,118,101,114,0)];
         d_unlockJ /= Math.max(parseFloat(`${formg.size << (Math.min(collectionm.length, 2))}`), 1);
       let mergern = 2.0;
      for (let q = 0; q < 2; q++) {
         mergern /= Math.max(3, parseFloat(`${2 - parseInt(`${mergern}`)}`));
      }
         d_unlockJ *= parseFloat(`${3}`);
      while ((mergern / (Math.max(2.92, 1))) > 2.2 && (2 << (Math.min(3, collectionm.length))) > 4) {
         collectionm.push(parseInt(`${d_unlockJ}`) - formg.size);
         break;
      }
         d_unlockJ -= parseFloat(`${1}`);
         mergern *= parseFloat(`${parseInt(`${d_unlockJ}`)}`);
         collectionm.push(parseInt(`${mergern}`) ^ 3);
      while (1 == (3 + formg.size) && 3.97 == (3.80 - d_unlockJ)) {
          let weiboS = String.fromCharCode(112,95,50,51,95,115,103,105,114,108,101,0);
          let textw = true;
          let acceptedU: Array<any> = [104, 299];
         formg = new Map([[`${collectionm.length}`, parseInt(`${d_unlockJ}`) >> (Math.min(3, Math.abs(3)))]]);
         weiboS = `${acceptedU.length & 1}`;
         textw = acceptedU.includes(textw);
         break;
      }
      k_positionY += parseFloat(`${2 / (Math.max(10, parseInt(`${plusn}`)))}`);
   let mbsplash3 = 9304898.0 >= plusn;
   do {
       let abidetectH = String.fromCharCode(115,101,110,115,111,114,95,56,95,55,55,0);
      let libcrashsdkx = abidetectH.length <= 8518419;
      do {
         abidetectH = `${abidetectH.length}`;
         if (libcrashsdkx) {
            break;
         }
      } while (libcrashsdkx && (abidetectH.length < 4 || abidetectH == String.fromCharCode(109,0)));
         abidetectH = `${(abidetectH == String.fromCharCode(66,0) ? abidetectH.length : abidetectH.length)}`;
      while (4 <= abidetectH.length) {
         abidetectH += "3";
         break;
      }
      plusn *= parseInt(`${k_positionY}`);
      if (mbsplash3) {
         break;
      }
   } while ((k_positionY <= 3.11) && mbsplash3);
      taiwanY -= tooltipsk.length - 1;
        const offline = !(state.isConnected && state.isInternetReachable);

       let leagueJ: Array<any> = [297, 945, 756];
       let clearV = true;
      let libcxxcomponentsG = leagueJ.length <= 7927384;
      do {
          let editj = 3;
          let ksadx = 2.0;
         leagueJ.push(leagueJ.length << (Math.min(Math.abs(1), 1)));
         editj ^= editj;
         ksadx *= parseInt(`${ksadx}`);
         if (libcxxcomponentsG) {
            break;
         }
      } while ((!clearV) && libcxxcomponentsG);
         leagueJ.push((2 ^ (clearV ? 4 : 5)));
      let combineYN = clearV ? !clearV : clearV;
      do {
          let libjsiO = String.fromCharCode(106,95,53,49,95,115,104,111,114,116,99,117,116,115,0);
         clearV = leagueJ.length == 55;
         libjsiO += `${(String.fromCharCode(119,0) == libjsiO ? libjsiO.length : libjsiO.length)}`;
         if (combineYN) {
            break;
         }
      } while (((leagueJ.length << (Math.min(Math.abs(3), 4))) >= 5 && !clearV) && combineYN);
         leagueJ = [leagueJ.length];
      if (2 == leagueJ.length && 3 == (leagueJ.length / 2)) {
          let serviceE: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,105,111,110,95,54,95,54,57,0),true ], [String.fromCharCode(101,120,99,101,101,100,115,95,108,95,54,50,0),false ]]);
          let libsentryU: Map<any, any> = new Map([[String.fromCharCode(113,95,50,53,95,100,105,118,105,100,101,114,115,0),587], [String.fromCharCode(98,105,116,114,97,116,101,115,95,121,95,49,56,0),183], [String.fromCharCode(97,108,97,114,109,95,56,95,53,52,0),984]]);
         clearV = !clearV;
         serviceE.set(`${serviceE.size}`, 1 & libsentryU.size);
         libsentryU = new Map([[`${serviceE.size}`, libsentryU.size]]);
      }
          let macauk: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,116,105,118,101,95,48,95,55,56,0),444], [String.fromCharCode(110,111,110,110,117,108,108,95,111,95,55,51,0),895]]);
         leagueJ = [3 & leagueJ.length];
         macauk = new Map([[`${macauk.size}`, 3 / (Math.max(10, macauk.size))]]);
      catalogP = [2];
   if (!tooltipsk.includes(`${stationsp}`)) {
       let finit_hW = String.fromCharCode(115,116,114,95,102,95,51,55,0);
         finit_hW = `${finit_hW.length % (Math.max(finit_hW.length, 8))}`;
      let selectionm = finit_hW.length >= 8518715;
      do {
         finit_hW = `${finit_hW.length % 3}`;
         if (selectionm) {
            break;
         }
      } while (selectionm && (finit_hW.length < 4));
         finit_hW += `${finit_hW.length}`;
      tooltipsk = `${1 & resultm.length}`;
   }
   for (let k = 0; k < 2; k++) {
      resultm = `${3 << (Math.min(1, Math.abs(parseInt(`${plusn}`))))}`;
   }
      k_positionY += parseFloat(`${2}`);
      catalogP = [parseInt(`${plusn}`) << (Math.min(1, Math.abs(3)))];
        setIsOffline(offline);

      skip7 <<= Math.min(5, tooltipsk.length);
       let sigmobg = String.fromCharCode(101,95,50,50,95,117,105,100,0);
       let inactivew = String.fromCharCode(111,97,117,116,104,95,48,95,52,0);
       let mimo4 = String.fromCharCode(99,104,117,110,107,115,95,111,95,53,52,0);
       let aboutn = 2.0;
       let modelw = 0.0;
       let liveE = false;
       let libhermesh = false;
         sigmobg = `${sigmobg.length}`;
         aboutn /= Math.max(1, 2 + parseInt(`${modelw}`));
       let country3 = String.fromCharCode(116,114,120,116,95,97,95,56,52,0);
      while (5 >= mimo4.length && 5 >= country3.length) {
          let switch_t0R: Map<any, any> = new Map([[String.fromCharCode(100,98,112,97,103,101,95,106,95,50,48,0),910], [String.fromCharCode(101,95,51,54,95,97,114,99,104,101,116,121,112,101,0),349], [String.fromCharCode(99,111,101,102,95,54,95,57,57,0),951]]);
          let context0 = true;
          let libreactperfloggerjnis: Map<any, any> = new Map([[String.fromCharCode(97,95,50,95,105,110,105,116,101,110,99,0),26], [String.fromCharCode(103,95,55,48,95,109,97,112,108,105,109,105,116,0),111]]);
         mimo4 = `${mimo4.length / 1}`;
         switch_t0R.set(`${context0}`, 1);
         libreactperfloggerjnis = new Map([[`${switch_t0R.size}`, libreactperfloggerjnis.size & 2]]);
         break;
      }
         inactivew = `${parseInt(`${aboutn}`)}`;
         country3 += `${(parseInt(`${modelw}`) + (liveE ? 2 : 3))}`;
      while (1.46 > (modelw / (Math.max(aboutn, 8))) && (aboutn / 1.46) > 3.1) {
         aboutn -= 1 | parseInt(`${modelw}`);
         break;
      }
      resultm += `${(String.fromCharCode(101,0) == white0 ? white0.length : catalogP.length)}`;
       let layoutG = String.fromCharCode(115,95,54,56,95,114,101,110,100,101,114,105,110,103,0);
       let gesturesy = String.fromCharCode(106,111,105,110,105,110,103,95,113,95,51,52,0);
      for (let u = 0; u < 2; u++) {
         layoutG += `${layoutG.length}`;
      }
       let mappingy: Map<any, any> = new Map([[String.fromCharCode(97,101,115,95,49,95,50,54,0),815], [String.fromCharCode(97,100,112,99,109,95,54,95,57,50,0),22], [String.fromCharCode(118,95,55,53,95,102,111,117,114,99,99,0),38]]);
       let loadingX: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,117,114,101,100,95,102,95,53,48,0),355], [String.fromCharCode(106,111,105,110,105,110,103,95,97,95,55,51,0),345]]);
         mappingy = new Map([[`${mappingy.size}`, 1 % (Math.max(5, mappingy.size))]]);
      let unselected3 = gesturesy.length <= 7612397;
      do {
          let desc4 = 5;
         gesturesy = `${mappingy.size}`;
         desc4 += 2;
         if (unselected3) {
            break;
         }
      } while ((2 > layoutG.length) && unselected3);
          let untickG = String.fromCharCode(110,97,109,101,115,112,97,99,101,115,95,51,95,51,53,0);
         mappingy = new Map([[layoutG, layoutG.length]]);
         untickG += `${untickG.length}`;
       let helperq = 0.0;
      white0 = "2";
   let tailW = catalogP.length <= 5445596;
   do {
      catalogP.push(3);
      if (tailW) {
         break;
      }
   } while ((!stationsp) && tailW);
      white0 = `${2 / (Math.max(parseInt(`${taiwanY}`), 7))}`;
        if (!offline) {

   let overl = tooltipsk.length >= 9260715;
   do {
      tooltipsk += `${skip7 >> (Math.min(5, Math.abs(info_)))}`;
      if (overl) {
         break;
      }
   } while (overl && (tooltipsk.length < 2));
      tooltipsk = `${parseInt(`${plusn}`) ^ white0.length}`;
   if ((catalogP.length | 4) >= 1) {
      catalogP = [parseInt(`${plusn}`)];
   }
       let pingA: Array<any> = [898, 680];
      while ((4 ^ pingA.length) <= 1 && (pingA.length ^ 4) <= 1) {
         pingA.push(pingA.length);
         break;
      }
      if ((pingA.length | pingA.length) <= 2 && (pingA.length | pingA.length) <= 2) {
         pingA.push(pingA.length | pingA.length);
      }
          let refreshm = String.fromCharCode(112,114,111,116,111,98,117,102,95,113,95,54,50,0);
          let baiduJ = false;
         pingA = [(refreshm == String.fromCharCode(102,0) ? refreshm.length : pingA.length)];
         baiduJ = !baiduJ;
      taiwanY /= Math.max(5, (parseInt(`${taiwanY}`) + (stationsp ? 1 : 1)));
   let ksadL = catalogP.length <= 8415290;
   do {
       let turn4 = String.fromCharCode(100,111,119,110,108,111,97,100,115,95,103,95,55,56,0);
       let libfollyo = String.fromCharCode(99,97,110,99,101,108,95,49,95,57,54,0);
       let dialog9 = 4.0;
       let tailU = 4.0;
       let descl = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,105,95,55,50,0);
         turn4 = `${parseInt(`${dialog9}`) / 3}`;
          let libjsiI: Array<any> = [899, 130];
          let shareu = String.fromCharCode(107,95,53,50,95,109,117,116,101,120,101,115,0);
          let darkw = false;
         dialog9 *= 2 - parseInt(`${dialog9}`);
         libjsiI = [3];
         shareu = `${((darkw ? 2 : 3) * shareu.length)}`;
      if ((parseInt(`${tailU}`) * libfollyo.length) == 2 || (2 * parseInt(`${tailU}`)) == 2) {
          let indicator1: Array<any> = [String.fromCharCode(107,95,51,52,95,102,114,105,99,116,105,111,110,0), String.fromCharCode(109,95,52,57,95,105,110,102,105,110,105,116,121,0), String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,119,95,57,56,0)];
         libfollyo = `${(turn4 == String.fromCharCode(48,0) ? turn4.length : libfollyo.length)}`;
         indicator1.push(indicator1.length);
      }
         libfollyo += `${parseInt(`${dialog9}`) >> (Math.min(Math.abs(3), 5))}`;
         turn4 += `${1 & parseInt(`${tailU}`)}`;
         tailU *= parseFloat(`${descl.length / 3}`);
       let package_crY = String.fromCharCode(108,95,53,55,95,99,117,114,0);
       let comment6 = String.fromCharCode(111,95,56,49,95,104,97,110,100,108,101,114,115,0);
         package_crY += `${parseInt(`${dialog9}`) * 2}`;
         package_crY += `${descl.length}`;
         libfollyo += "1";
      for (let k = 0; k < 1; k++) {
         comment6 = `${(String.fromCharCode(86,0) == turn4 ? turn4.length : parseInt(`${tailU}`))}`;
      }
          let lightW = 5.0;
          let grayp: Array<any> = [651, 395, 790];
          let modityU = 2.0;
         comment6 = `${(String.fromCharCode(77,0) == libfollyo ? libfollyo.length : parseInt(`${tailU}`))}`;
         lightW -= parseInt(`${modityU}`);
         grayp = [grayp.length % (Math.max(2, parseInt(`${modityU}`)))];
         libfollyo = "1";
      for (let t = 0; t < 1; t++) {
          let productG: Array<any> = [String.fromCharCode(115,117,98,116,114,97,99,116,101,100,95,54,95,53,53,0), String.fromCharCode(103,95,50,95,118,97,114,105,97,110,99,101,115,0), String.fromCharCode(101,114,114,108,111,103,95,117,95,49,54,0)];
          let backgroundm = 2.0;
          let androidR = String.fromCharCode(120,95,55,49,95,114,101,97,100,99,98,0);
         descl += `${package_crY.length % 2}`;
         productG = [androidR.length];
         backgroundm /= Math.max(5, parseInt(`${backgroundm}`));
         androidR = `${productG.length}`;
      }
       let styles1 = 0.0;
      catalogP.push((libfollyo == String.fromCharCode(70,0) ? libfollyo.length : catalogP.length));
      if (ksadL) {
         break;
      }
   } while (((plusn + 2.65) < 5.83 || 1 < (2 & catalogP.length)) && ksadL);
            handleRefresh();
        }
    }, []);

    useFocusEffect(useCallback(() => {
        if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
            setIsOffline(settingsReducer.isOffline);
            handleRefresh();
        } else if (settingsReducer.isOffline) {
            return () => {
                miniVodRef.current?.setPause(true);
                setIsOffline(settingsReducer.isOffline);
            }
        }
    }, [settingsReducer.isOffline]));

    useEffect(() => {
        const subscription = AppState.addEventListener(
            "change",
            handleAppStateChange
        );

        return () => {
            subscription.remove();
        };
    }, [])

    
    const handleAppStateChange = (nextAppState: any) => {
        setIsInBackground(nextAppState !== "active");
    };

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 10 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 50, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>随心看</Text>
            </View>
            {!isOffline &&
                <MiniVideoList
                    ref={miniVodRef}
                    miniVodListRef={miniVodListRef}
                    videos={flattenedVideos}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    isFetching={isFetching}
                    isFetchingNextPage={isFetchingNextPage}
                    isActive={isFocused && !isInBackground}
                    setCollectionEpisode={(index: number) => { }}
                    handleRefreshMiniVod={handleRefresh}
                    isRefreshing={isRefreshing}
                    isPressTabScroll={isPressTabScroll}
                />
            }
            {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

})
