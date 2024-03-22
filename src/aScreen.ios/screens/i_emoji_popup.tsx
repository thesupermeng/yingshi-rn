import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    Text,
    AppState,
} from 'react-native';
import ScreenContainer from '../components/container/ypy_fast';
import { useInfiniteQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { DSplash } from '@type/wpk_long';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/n_subs_interstitial';
import MiniVideoList from '../components/videoPlayer/z_video';
import { useFocusEffect, useIsFocused, useTheme } from '@react-navigation/native';
import NoConnection from './../components/common/nyr_animation_langkey';
import NetInfo from '@react-native-community/netinfo';
import { GBYMiniCanvas } from '@redux/reducers/t_types';
import { useAppSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import umb_center_carousel from '../../../Umeng/umb_center_carousel';
import { GHongkong, useMinivodQuery } from '@api';

type CZBCompleteService = {
    data: {
        List: Array<DSplash>;
    };
};

type MConstantsClock = {
    setPause: (pause: boolean) => void;
};

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const { colors, textVariants } = useTheme();

    const isFocused = useIsFocused();
    
    const [isInBackground, setIsInBackground] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const miniVodRef = useRef() as React.MutableRefObject<MConstantsClock>;
    const miniVodListRef = useRef<any>();
    const [isPressTabScroll, setPressTabScroll] = useState(false);

    const settingsReducer: GBYMiniCanvas = useAppSelector(
        ({ settingsReducer }: PSmall) => settingsReducer
    );

    
    useFocusEffect(useCallback(() => {
        umb_center_carousel.watchAnytimeViewsAnalytics();
    }, []));
    

    
    useEffect(() => {
        const handleTabPress = () => {
       let homem = 2;
    let projectC = 0;
    let sportsr = true;
    let circleQ: Map<any, any> = new Map([[String.fromCharCode(98,95,52,57,95,99,115,104,97,114,112,0),String.fromCharCode(118,97,100,107,104,122,95,102,95,56,53,0)], [String.fromCharCode(116,114,97,99,105,110,103,95,110,95,51,49,0),String.fromCharCode(97,115,121,110,99,95,101,95,52,56,0)]]);
    let gestureh = String.fromCharCode(115,101,97,114,99,104,95,51,95,49,52,0);
    let overlayt = String.fromCharCode(98,95,51,57,95,101,120,104,97,117,115,116,105,118,101,0);
    let halfg = 2.0;
    let componentO = String.fromCharCode(100,105,102,102,97,98,108,101,95,102,95,55,52,0);
    let anytimeZ: Array<any> = [335, 59, 350];
    let navigationM = 5;
    let inactiveD = String.fromCharCode(105,110,115,112,101,99,116,95,118,95,51,56,0);
      componentO += `${parseInt(`${halfg}`)}`;
      gestureh += `${(gestureh == String.fromCharCode(81,0) ? gestureh.length : anytimeZ.length)}`;
      componentO += `${((sportsr ? 4 : 3) / (Math.max(2, 9)))}`;

            if (isFocused && !isRefreshing) {

       let clockl = String.fromCharCode(99,115,99,104,101,109,101,95,105,95,57,52,0);
       let memberA = String.fromCharCode(116,105,114,101,100,95,48,95,55,0);
       let show0: Array<any> = [String.fromCharCode(105,110,111,117,116,115,95,101,95,54,53,0), String.fromCharCode(107,95,56,56,95,102,116,118,109,108,97,115,116,110,111,100,101,0)];
         clockl += `${(String.fromCharCode(53,0) == clockl ? show0.length : clockl.length)}`;
         show0.push((String.fromCharCode(69,0) == clockl ? clockl.length : show0.length));
          let taiwanh = false;
          let membership1 = String.fromCharCode(118,95,49,52,95,97,117,116,111,114,101,118,101,114,115,101,115,0);
         memberA = `${1 / (Math.max(3, memberA.length))}`;
         taiwanh = membership1.length >= membership1.length;
      for (let v = 0; v < 2; v++) {
          let teamh = 1;
          let whatsappv = String.fromCharCode(106,95,49,52,95,98,114,101,97,107,0);
          let chatq = String.fromCharCode(106,95,53,50,95,112,103,110,111,0);
          let service_ = String.fromCharCode(106,95,51,57,95,116,101,120,116,108,101,0);
         show0.push((String.fromCharCode(50,0) == service_ ? chatq.length : service_.length));
         teamh %= Math.max(2, teamh & whatsappv.length);
         whatsappv += `${(whatsappv == String.fromCharCode(52,0) ? teamh : whatsappv.length)}`;
         chatq += `${whatsappv.length}`;
      }
      let middlef = show0.length >= 6412356;
      do {
          let downh = String.fromCharCode(110,111,110,101,109,112,116,121,95,121,95,54,57,0);
          let condensed1 = String.fromCharCode(101,108,108,105,103,105,98,108,101,95,118,95,54,55,0);
         show0.push(2 + clockl.length);
         downh = `${condensed1.length * downh.length}`;
         condensed1 = `${downh.length * 2}`;
         if (middlef) {
            break;
         }
      } while ((show0.length >= memberA.length) && middlef);
         show0 = [clockl.length];
         clockl = "2";
         show0 = [memberA.length | 1];
      let unselectedn = 7056285 <= memberA.length;
      do {
         memberA = `${show0.length << (Math.min(Math.abs(3), 3))}`;
         if (unselectedn) {
            break;
         }
      } while ((!memberA.endsWith(`${show0.length}`)) && unselectedn);
      overlayt = `${gestureh.length | 2}`;
      projectC /= Math.max(3, parseInt(`${halfg}`));
   for (let q = 0; q < 2; q++) {
      gestureh += "3";
   }
                handleRefresh();

   while (5 > (homem & 4) || homem > 4) {
      homem *= 1;
      break;
   }
   let short_fe = 6167722 <= circleQ.size;
   do {
      circleQ.set(`${halfg}`, parseInt(`${halfg}`));
      if (short_fe) {
         break;
      }
   } while ((!Array.from(circleQ.values()).includes(homem)) && short_fe);
       let bodan0 = String.fromCharCode(116,101,115,116,105,109,103,97,114,105,95,118,95,51,55,0);
       let bufferS = false;
       let analyticA = String.fromCharCode(112,108,97,116,101,97,117,95,103,95,49,53,0);
         analyticA += `${2 << (Math.min(1, analyticA.length))}`;
      while (2 == analyticA.length && !bufferS) {
         bufferS = bodan0.length <= 35;
         break;
      }
         analyticA += `${((bufferS ? 3 : 5))}`;
      if (analyticA.length > 3) {
         bufferS = analyticA.startsWith(`${bufferS}`);
      }
         bufferS = bodan0.length >= 100;
         bufferS = (analyticA.length - bodan0.length) < 29;
       let castingo = 5.0;
       let cluby = 5.0;
       let containero = String.fromCharCode(115,112,97,99,101,114,95,109,95,52,52,0);
         analyticA += `${parseInt(`${castingo}`) & 3}`;
      projectC %= Math.max(4, overlayt.length / 1);

                setPressTabScroll(true);

      homem >>= Math.min(3, Math.abs(((sportsr ? 2 : 4))));
   for (let k = 0; k < 2; k++) {
       let grayX = String.fromCharCode(105,110,116,95,53,95,57,54,0);
       let shrinkZ: Array<any> = [String.fromCharCode(103,95,52,56,95,99,104,101,118,114,111,110,0), String.fromCharCode(115,111,108,105,100,105,116,121,95,99,95,51,0), String.fromCharCode(118,105,115,117,97,108,95,54,95,50,50,0)];
       let condensedi = true;
       let moonj = false;
       let crossf = 0;
      if (grayX.length > crossf) {
         grayX = `${crossf}`;
      }
         shrinkZ = [3];
       let feedbackP = true;
         shrinkZ.push(grayX.length);
      while (crossf >= grayX.length) {
         crossf |= grayX.length;
         break;
      }
          let navigationI = 5;
         condensedi = 31 < grayX.length && 31 < navigationI;
         condensedi = (moonj ? !condensedi : moonj);
         crossf |= 1;
       let plusS = 1.0;
       let taiwans = 0.0;
      for (let t = 0; t < 2; t++) {
         crossf >>= Math.min(Math.abs(parseInt(`${plusS}`) & crossf), 1);
      }
          let short_jey = String.fromCharCode(113,95,56,52,95,114,101,101,110,99,114,121,112,116,0);
          let pointm = String.fromCharCode(118,95,53,49,95,111,117,116,112,117,116,0);
          let const_hO = true;
         taiwans *= pointm.length / 3;
         short_jey = `${short_jey.length}`;
         pointm = `${((const_hO ? 2 : 2) | short_jey.length)}`;
      for (let k = 0; k < 2; k++) {
         feedbackP = crossf == parseInt(`${plusS}`);
      }
      let combinedG = grayX.length >= 5740987;
      do {
         grayX += `${((feedbackP ? 2 : 1) + shrinkZ.length)}`;
         if (combinedG) {
            break;
         }
      } while (((grayX.length * 4) < 5 || (crossf * 4) < 2) && combinedG);
      while (parseInt(`${plusS}`) >= shrinkZ.length) {
         shrinkZ.push(((condensedi ? 4 : 1)));
         break;
      }
         shrinkZ.push(1 - parseInt(`${plusS}`));
      navigationM *= (gestureh == String.fromCharCode(118,0) ? projectC : gestureh.length);
   }
       let selectiona = String.fromCharCode(100,101,99,114,101,102,95,49,95,49,48,0);
       let thumbnailE = false;
       let overlayg = 3;
       let oranger = 0;
         overlayg ^= 3;
          let areaI = 3.0;
          let tickD = String.fromCharCode(102,95,52,49,95,115,116,114,111,107,101,115,0);
         overlayg -= parseInt(`${areaI}`);
         areaI += tickD.length + tickD.length;
      let lineq = String.fromCharCode(95,110,107,103,100,115,53,120,0) == selectiona;
      do {
         selectiona = `${(overlayg << (Math.min(4, Math.abs((thumbnailE ? 3 : 1)))))}`;
         if (lineq) {
            break;
         }
      } while (lineq && (selectiona.length == 5 || thumbnailE));
      for (let f = 0; f < 3; f++) {
         overlayg /= Math.max(3, 1);
      }
      for (let n = 0; n < 1; n++) {
         thumbnailE = selectiona.length > 7 || thumbnailE;
      }
      halfg /= Math.max((parseFloat(`${(sportsr ? 1 : 1)}`)), 4);

                miniVodListRef.current?.scrollToIndex({
                    index: 0,
                    animated: true,
                });

      homem -= 2;
   let frame_7al = homem >= 7016071;
   do {
      homem &= ((sportsr ? 2 : 2) - projectC);
      if (frame_7al) {
         break;
      }
   } while ((!componentO.includes(`${homem}`)) && frame_7al);
      gestureh += `${navigationM & projectC}`;

                

      anytimeZ.push(homem);
   let fill5 = overlayt.length <= 5730155;
   do {
      overlayt += `${((sportsr ? 5 : 4) % (Math.max(5, componentO.length)))}`;
      if (fill5) {
         break;
      }
   } while (fill5 && ((1 << (Math.min(1, overlayt.length))) >= 5 || 1 >= (overlayt.length << (Math.min(Math.abs(1), 2)))));
      overlayt += `${3 ^ navigationM}`;
                setTimeout(() => {

      circleQ.set(`${sportsr}`, 1 | parseInt(`${halfg}`));
   while (2 <= componentO.length && sportsr) {
      sportsr = navigationM == circleQ.size;
      break;
   }
   for (let b = 0; b < 1; b++) {
      gestureh = `${1 >> (Math.min(4, overlayt.length))}`;
   }
                    setPressTabScroll(false);
                }, 500)
            }
        };
        const unsubscribe = navigation.addListener('tabPress', handleTabPress);
        
        return () => unsubscribe();
    }, [navigation, isFocused, isRefreshing]);


    const handleRefresh = useCallback(async () => {
       let nterstitialU = String.fromCharCode(101,120,99,101,101,100,101,100,95,109,95,52,56,0);
    let homen = String.fromCharCode(119,95,54,56,95,99,111,110,118,101,114,116,105,98,108,101,0);
    let sortO = 0.0;
    let umengH = 2;
    let score7 = String.fromCharCode(102,95,49,54,95,116,97,103,115,116,114,0);
    let clockP = String.fromCharCode(114,101,102,101,114,95,117,95,57,56,0);
    let megaphoneU = String.fromCharCode(106,95,51,95,101,120,105,102,0);
    let carouselv: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,120,116,117,97,108,95,119,95,50,52,0),String.fromCharCode(117,95,53,55,95,97,117,100,105,111,99,111,110,118,101,114,116,0)], [String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,105,95,55,51,0),String.fromCharCode(122,95,57,55,95,112,114,111,116,101,99,116,105,111,110,0)]]);
      umengH *= 2 + parseInt(`${sortO}`);
   for (let p = 0; p < 1; p++) {
       let popup6 = String.fromCharCode(120,95,51,55,95,97,108,108,111,119,115,0);
       let rewindw = 3.0;
       let megaphoneN: Map<any, any> = new Map([[String.fromCharCode(115,95,49,50,95,100,101,97,100,0),String.fromCharCode(105,110,116,101,114,110,95,115,95,50,48,0)], [String.fromCharCode(103,95,56,49,95,97,100,106,117,115,116,0),String.fromCharCode(100,105,97,103,111,110,97,108,95,102,95,57,50,0)], [String.fromCharCode(98,95,51,0),String.fromCharCode(107,95,57,51,95,99,111,112,121,120,110,0)]]);
       let usernameQ = String.fromCharCode(111,95,53,55,95,114,101,102,114,101,115,104,0);
          let crossr = 3.0;
          let roomB = String.fromCharCode(113,95,49,48,95,98,105,116,101,120,97,99,116,0);
          let photoc = String.fromCharCode(99,95,56,54,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
         popup6 = `${3 + usernameQ.length}`;
         crossr /= Math.max(roomB.length, 4);
         roomB = `${roomB.length + 2}`;
         photoc += `${2 << (Math.min(4, roomB.length))}`;
       let userA: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,115,116,97,116,101,95,121,95,57,55,0),false ], [String.fromCharCode(108,95,55,49,95,104,101,108,112,101,114,0),false ]]);
      for (let m = 0; m < 1; m++) {
         usernameQ += `${1 * megaphoneN.size}`;
      }
      if ((rewindw + 3.36) <= 5.70 && 4.94 <= (rewindw + 3.36)) {
          let iconj: Array<any> = [492, 711];
         megaphoneN.set(`${iconj.length}`, 1);
      }
         usernameQ += `${popup6.length}`;
          let matchesL = String.fromCharCode(103,95,53,49,95,103,101,116,105,110,116,0);
          let whiteQ = String.fromCharCode(115,116,111,112,95,100,95,52,50,0);
          let emojif = 0.0;
         usernameQ = "2";
         matchesL = `${parseInt(`${emojif}`)}`;
         whiteQ += `${parseInt(`${emojif}`) >> (Math.min(whiteQ.length, 3))}`;
      if ((popup6.length & 4) < 5 || (rewindw + 2.92) < 1.63) {
          let overlayE = String.fromCharCode(112,111,108,121,95,99,95,53,51,0);
          let miniF = 4.0;
         popup6 += `${parseInt(`${rewindw}`) ^ 1}`;
         overlayE = `${parseInt(`${miniF}`) * 1}`;
         miniF += parseFloat(`${parseInt(`${miniF}`) % (Math.max(8, overlayE.length))}`);
      }
      if (usernameQ.endsWith(`${userA.size}`)) {
          let selectedq = 3;
         userA = new Map([[`${megaphoneN.size}`, (usernameQ == String.fromCharCode(88,0) ? usernameQ.length : megaphoneN.size)]]);
         selectedq %= Math.max(1, 2);
      }
          let basketballr = String.fromCharCode(99,97,99,104,101,115,95,51,95,51,51,0);
         rewindw -= (usernameQ == String.fromCharCode(114,0) ? userA.size : usernameQ.length);
         basketballr += "3";
      if ((rewindw * popup6.length) >= 4.29) {
         popup6 += `${(popup6 == String.fromCharCode(115,0) ? popup6.length : megaphoneN.size)}`;
      }
         popup6 = `${megaphoneN.size ^ popup6.length}`;
      let gmailK = 8590391 >= userA.size;
      do {
         userA.set(`${megaphoneN.size}`, 3 + userA.size);
         if (gmailK) {
            break;
         }
      } while ((!Array.from(userA.values()).includes(rewindw)) && gmailK);
      umengH &= usernameQ.length;
   }
      sortO /= Math.max(2, 2);
   while ((4 | clockP.length) == 2) {
      clockP += "3";
      break;
   }
       let promotionO = 4.0;
       let whatsapp3 = 5;
         whatsapp3 >>= Math.min(3, Math.abs(parseInt(`${promotionO}`) << (Math.min(5, Math.abs(whatsapp3)))));
          let membern = 3.0;
         promotionO *= parseFloat(`${parseInt(`${promotionO}`) | 1}`);
         membern -= parseFloat(`${parseInt(`${membern}`)}`);
      let greyk = promotionO <= 6525218.0;
      do {
         promotionO -= parseFloat(`${whatsapp3}`);
         if (greyk) {
            break;
         }
      } while ((4.85 < (promotionO * 3.23)) && greyk);
         promotionO /= Math.max(parseFloat(`${whatsapp3 + parseInt(`${promotionO}`)}`), 3);
      if ((whatsapp3 * promotionO) <= 1.85) {
          let customh: Array<any> = [590, 336, 997];
          let favoriteq: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,99,108,105,112,116,101,115,116,0),41], [String.fromCharCode(108,95,50,48,95,117,110,109,97,112,102,105,108,101,0),578], [String.fromCharCode(117,115,97,103,101,95,117,95,51,50,0),559]]);
          let mappingA: Array<any> = [984, 700, 1000];
          let z_viewJ: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,52,95,49,50,0),String.fromCharCode(100,95,52,51,95,99,97,110,100,105,100,97,116,101,115,0)], [String.fromCharCode(100,101,115,116,114,117,99,116,95,54,95,52,57,0),String.fromCharCode(99,108,117,115,116,95,101,95,52,50,0)], [String.fromCharCode(98,95,54,48,95,118,111,99,97,98,0),String.fromCharCode(114,111,117,112,95,103,95,49,54,0)]]);
         promotionO -= parseFloat(`${mappingA.length - 3}`);
         customh.push(z_viewJ.size);
         favoriteq.set(`${favoriteq.size}`, 3);
         mappingA.push(3);
         z_viewJ.set(`${favoriteq.size}`, z_viewJ.size);
      }
          let signinup1 = 0;
          let anythinkj = String.fromCharCode(110,95,51,54,95,112,105,110,110,101,114,0);
         whatsapp3 /= Math.max(1, 1 << (Math.min(1, anythinkj.length)));
         signinup1 *= signinup1 + 3;
         anythinkj = `${signinup1}`;
      sortO += homen.length | 2;
       let nterstitialI = String.fromCharCode(117,95,52,95,108,97,110,100,115,99,97,112,101,0);
       let clubE = 0.0;
       let default_neV: Map<any, any> = new Map([[String.fromCharCode(105,115,97,108,110,117,109,95,51,95,56,56,0),562], [String.fromCharCode(120,95,54,49,95,116,114,101,108,108,105,115,0),407], [String.fromCharCode(114,101,116,117,114,110,105,110,103,95,53,95,56,50,0),407]]);
      while (3 >= default_neV.size) {
         nterstitialI += "2";
         break;
      }
      let hoverA = clubE >= 6494722.0;
      do {
          let heartq = 1;
          let matchesx = 4.0;
          let combined_: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,116,101,95,103,95,54,49,0),353], [String.fromCharCode(97,95,50,52,95,108,111,103,103,101,100,0),14], [String.fromCharCode(99,95,54,55,95,102,105,114,101,119,97,108,108,0),772]]);
         clubE -= parseFloat(`${parseInt(`${matchesx}`) * combined_.size}`);
         heartq |= 3 & heartq;
         matchesx += heartq | 1;
         if (hoverA) {
            break;
         }
      } while (((4 | nterstitialI.length) < 1) && hoverA);
       let sliderI: Array<any> = [526, 189, 910];
       let hoverl: Array<any> = [477, 838, 87];
          let shootA = String.fromCharCode(118,95,54,49,95,101,120,116,114,101,109,101,0);
          let ball0: Map<any, any> = new Map([[String.fromCharCode(115,99,104,117,110,99,107,95,114,95,54,54,0),47], [String.fromCharCode(101,110,100,97,95,55,95,55,55,0),545]]);
         sliderI = [parseInt(`${clubE}`) + sliderI.length];
         shootA = `${ball0.size | shootA.length}`;
         ball0.set(shootA, shootA.length);
      if ((4 / (Math.max(2, sliderI.length))) == 1 || (default_neV.size / (Math.max(4, 3))) == 5) {
          let downm = 5;
         sliderI = [default_neV.size];
         downm %= Math.max(3, 3 >> (Math.min(4, Math.abs(downm))));
      }
       let tailU = 1;
       let forwardO = 0;
          let user6: Array<any> = [String.fromCharCode(100,111,99,107,101,114,95,109,95,51,56,0), String.fromCharCode(114,101,102,105,100,95,119,95,49,55,0), String.fromCharCode(101,110,102,111,114,99,101,95,98,95,49,49,0)];
         clubE += parseFloat(`${1}`);
         user6.push(user6.length);
      let configr = 5703617 <= hoverl.length;
      do {
         hoverl = [default_neV.size % 3];
         if (configr) {
            break;
         }
      } while (configr && ((tailU & 5) >= 3 || (hoverl.length & tailU) >= 5));
      let navigationc = 7045001 >= tailU;
      do {
         tailU *= 3;
         if (navigationc) {
            break;
         }
      } while ((3 >= (forwardO + 4)) && navigationc);
      clockP += `${megaphoneU.length}`;

        setIsRefreshing(true);

      score7 = `${megaphoneU.length}`;
      sortO += score7.length;
   for (let z = 0; z < 1; z++) {
      homen = "2";
   }
   if (nterstitialU.startsWith(`${clockP.length}`)) {
       let starh = String.fromCharCode(100,101,108,101,116,105,111,110,95,48,95,49,55,0);
       let skipZ = 0.0;
       let basketballd = 3.0;
       let emojir = 5.0;
       let knews2 = 3.0;
      for (let a = 0; a < 2; a++) {
         knews2 += parseFloat(`${1 - parseInt(`${emojir}`)}`);
      }
         emojir -= parseFloat(`${1}`);
      while (2.41 < knews2) {
         basketballd += parseFloat(`${starh.length / 2}`);
         break;
      }
      while ((knews2 / (Math.max(basketballd, 3))) >= 3.36 || (basketballd / (Math.max(5, knews2))) >= 3.36) {
          let datak = String.fromCharCode(113,95,55,95,117,110,114,111,108,108,101,100,0);
          let suggestionI: Array<any> = [14, 608, 983];
          let indicatorE = String.fromCharCode(115,95,55,95,115,99,104,101,100,117,108,101,0);
          let close0 = String.fromCharCode(115,97,98,101,114,95,111,95,51,54,0);
         basketballd /= Math.max(parseFloat(`${starh.length % (Math.max(1, 9))}`), 4);
         datak += `${datak.length}`;
         suggestionI.push(suggestionI.length);
         indicatorE = `${suggestionI.length + datak.length}`;
         close0 += `${datak.length + suggestionI.length}`;
         break;
      }
       let private_55 = true;
       let profileW = true;
      let j_count4 = private_55 ? !private_55 : private_55;
      do {
          let detailsw = 2;
          let lessg = 1.0;
          let unread0 = String.fromCharCode(111,95,49,95,105,110,116,101,114,108,101,97,118,105,110,103,0);
         private_55 = parseFloat(`${unread0.length}`) >= basketballd;
         detailsw >>= Math.min(Math.abs(3), 1);
         lessg += parseFloat(`${3}`);
         unread0 += `${detailsw}`;
         if (j_count4) {
            break;
         }
      } while (j_count4 && (5.68 < knews2));
      if (profileW) {
          let viewerC = 4;
          let background0 = String.fromCharCode(116,101,97,114,100,111,119,110,95,110,95,49,48,48,0);
          let anythinkA = String.fromCharCode(114,101,99,116,105,102,121,95,107,95,53,57,0);
          let closeM = 4;
          let lessP = true;
         skipZ /= Math.max(anythinkA.length - parseInt(`${skipZ}`), 5);
         viewerC <<= Math.min(4, Math.abs(2 >> (Math.min(Math.abs(viewerC), 2))));
         background0 += `${(background0.length & (lessP ? 5 : 2))}`;
         anythinkA += `${(background0 == String.fromCharCode(74,0) ? viewerC : background0.length)}`;
         closeM -= background0.length;
         lessP = viewerC < 71 && lessP;
      }
      if (knews2 <= 2.66 || (knews2 + 2.66) <= 5.44) {
         knews2 -= parseFloat(`${starh.length}`);
      }
         emojir += (parseFloat(`${parseInt(`${basketballd}`) << (Math.min(5, Math.abs((private_55 ? 1 : 1))))}`));
      if (5.86 < (5 * basketballd)) {
         skipZ *= (parseInt(`${emojir}`) >> (Math.min(1, Math.abs((private_55 ? 3 : 5)))));
      }
      while (!profileW) {
         profileW = 92.94 == basketballd && private_55;
         break;
      }
      if ((starh.length * 4) > 3 || 3 > (starh.length << (Math.min(Math.abs(4), 3)))) {
         emojir *= parseFloat(`${1}`);
      }
         emojir -= parseFloat(`${parseInt(`${emojir}`)}`);
      let dragh = emojir <= 6339642.0;
      do {
          let containerY = 3.0;
          let stationI = String.fromCharCode(115,104,105,109,109,101,114,95,109,95,54,49,0);
         emojir /= Math.max(4, parseFloat(`${parseInt(`${emojir}`) << (Math.min(2, Math.abs(2)))}`));
         containerY -= parseInt(`${containerY}`) / (Math.max(stationI.length, 5));
         stationI = `${(String.fromCharCode(72,0) == stationI ? stationI.length : parseInt(`${containerY}`))}`;
         if (dragh) {
            break;
         }
      } while ((starh.startsWith(`${emojir}`)) && dragh);
      for (let b = 0; b < 3; b++) {
         profileW = basketballd >= 79.71;
      }
      clockP += `${score7.length}`;
   }
   if ((5.58 - sortO) < 4.30) {
       let minimizeI = String.fromCharCode(119,95,53,50,95,114,97,112,105,100,106,115,111,110,0);
      while (minimizeI == String.fromCharCode(110,0) && minimizeI != String.fromCharCode(114,0)) {
          let selectionv = 2.0;
          let link3: Array<any> = [324, 288, 705];
          let actionM = String.fromCharCode(111,95,50,52,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
          let sortG = true;
         minimizeI = `${(minimizeI == String.fromCharCode(100,0) ? (sortG ? 1 : 4) : minimizeI.length)}`;
         selectionv -= parseFloat(`${parseInt(`${selectionv}`) >> (Math.min(3, Math.abs(1)))}`);
         link3 = [parseInt(`${selectionv}`)];
         actionM = `${link3.length + actionM.length}`;
         sortG = (selectionv - parseFloat(`${link3.length}`)) < 46.58;
         break;
      }
         minimizeI = `${minimizeI.length - minimizeI.length}`;
      while (minimizeI == String.fromCharCode(109,0)) {
          let configR = String.fromCharCode(100,105,115,99,114,101,116,101,95,50,95,55,49,0);
          let specn = true;
          let closeu = false;
          let sendD = 1.0;
         minimizeI = `${((closeu ? 4 : 3))}`;
         configR = "3";
         specn = 36 <= configR.length && sendD <= 70.57;
         closeu = !configR.includes(`${sendD}`);
         break;
      }
      sortO *= umengH;
   }
   for (let m = 0; m < 1; m++) {
      megaphoneU += `${(String.fromCharCode(118,0) == megaphoneU ? megaphoneU.length : parseInt(`${sortO}`))}`;
   }
        

   while (clockP.length == megaphoneU.length) {
      megaphoneU += `${score7.length & 1}`;
      break;
   }
   let selectC = umengH >= 9207121;
   do {
       let modeC: Map<any, any> = new Map([[String.fromCharCode(117,95,51,52,95,99,99,105,112,0),196], [String.fromCharCode(115,112,114,105,110,103,95,107,95,57,53,0),1]]);
       let leagues: Map<any, any> = new Map([[String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,107,95,55,55,0),String.fromCharCode(116,111,111,108,115,95,121,95,56,50,0)], [String.fromCharCode(99,108,105,99,107,115,95,112,95,53,56,0),String.fromCharCode(97,110,109,114,95,121,95,56,48,0)]]);
       let dialogh = String.fromCharCode(111,111,108,98,97,114,95,120,95,53,53,0);
       let main_tz = 5;
          let condensedp: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,116,105,111,110,115,95,106,95,52,56,0),false ], [String.fromCharCode(105,95,57,55,95,100,105,114,101,99,116,105,111,110,115,0),false ]]);
         modeC.set(`${condensedp.size}`, 1);
         leagues.set(`${main_tz}`, main_tz);
       let delegate_ltE = String.fromCharCode(117,108,108,115,99,114,101,101,110,95,98,95,51,57,0);
      if (dialogh != delegate_ltE) {
          let spec4 = 1.0;
          let private_ej: Array<any> = [523, 760];
          let quest4 = String.fromCharCode(116,95,57,49,95,108,105,98,115,0);
          let scheduleF = String.fromCharCode(97,118,101,114,97,103,101,115,95,56,95,54,56,0);
          let combinedO = 1.0;
         delegate_ltE += `${1 << (Math.min(5, Math.abs(modeC.size)))}`;
         spec4 *= parseInt(`${combinedO}`) & 2;
         private_ej.push(3);
         quest4 += `${3 << (Math.min(3, private_ej.length))}`;
         scheduleF += `${private_ej.length}`;
         combinedO *= parseFloat(`${1}`);
      }
          let membershipj = 3.0;
         dialogh += `${parseInt(`${membershipj}`)}`;
          let searchbarx = 0.0;
          let unreadA: Array<any> = [322, 416];
         main_tz %= Math.max(2, 5);
         searchbarx += unreadA.length;
         unreadA = [unreadA.length];
      let transferk = dialogh == String.fromCharCode(57,121,51,110,0);
      do {
         dialogh = `${modeC.size - 1}`;
         if (transferk) {
            break;
         }
      } while (transferk && (delegate_ltE.length >= dialogh.length));
      if (delegate_ltE.endsWith(`${main_tz}`)) {
         delegate_ltE = `${leagues.size}`;
      }
         modeC = new Map([[`${modeC.size}`, (String.fromCharCode(90,0) == dialogh ? modeC.size : dialogh.length)]]);
      if (2 > dialogh.length) {
          let update_6ap = String.fromCharCode(111,112,97,99,105,116,121,95,116,95,57,48,0);
         dialogh = `${(delegate_ltE == String.fromCharCode(112,0) ? delegate_ltE.length : leagues.size)}`;
         update_6ap = `${update_6ap.length | update_6ap.length}`;
      }
         modeC = new Map([[delegate_ltE, delegate_ltE.length - dialogh.length]]);
         delegate_ltE = `${delegate_ltE.length}`;
      umengH ^= score7.length | umengH;
      if (selectC) {
         break;
      }
   } while (selectC && (3 < (umengH / (Math.max(parseInt(`${sortO}`), 3))) || 1 < (3 & umengH)));
   if (homen != megaphoneU) {
      megaphoneU += "1";
   }
      umengH /= Math.max(megaphoneU.length % (Math.max(score7.length, 3)), 4);
   let fastforwardD = nterstitialU == String.fromCharCode(114,49,117,95,120,108,102,106,50,0);
   do {
      nterstitialU += `${umengH}`;
      if (fastforwardD) {
         break;
      }
   } while ((nterstitialU != String.fromCharCode(117,0) || 3 >= score7.length) && fastforwardD);
      clockP = `${(String.fromCharCode(90,0) == megaphoneU ? megaphoneU.length : parseInt(`${sortO}`))}`;
        await refetch();

      clockP = `${umengH / 3}`;
   for (let j = 0; j < 3; j++) {
       let football2 = 3.0;
       let leftb = String.fromCharCode(112,111,112,117,112,115,95,99,95,53,49,0);
       let router1 = String.fromCharCode(119,95,53,95,115,117,109,97,114,121,0);
       let bodan9 = String.fromCharCode(100,101,97,99,116,95,56,95,53,50,0);
         router1 += `${router1.length - bodan9.length}`;
      while (5 == router1.length) {
         router1 += `${bodan9.length % (Math.max(router1.length, 8))}`;
         break;
      }
         bodan9 += `${router1.length}`;
      if (leftb.length >= 2) {
         leftb += `${router1.length / (Math.max(leftb.length, 7))}`;
      }
      if (4 <= (5 - parseInt(`${football2}`)) || 5 <= (router1.length - parseInt(`${football2}`))) {
         football2 += parseFloat(`${leftb.length}`);
      }
          let listv = 2.0;
          let alertX = false;
          let network_ = String.fromCharCode(115,108,117,114,112,95,50,95,49,54,0);
         router1 += `${bodan9.length}`;
         listv += (parseFloat(`${parseInt(`${listv}`) >> (Math.min(2, Math.abs((alertX ? 2 : 4))))}`));
         alertX = listv > 73.8 || !alertX;
         network_ = `${parseInt(`${listv}`) & 2}`;
         football2 -= parseFloat(`${parseInt(`${football2}`)}`);
         leftb += `${(bodan9 == String.fromCharCode(48,0) ? bodan9.length : router1.length)}`;
      let servicek = 5233709 >= bodan9.length;
      do {
          let temp9 = 5.0;
         bodan9 = "2";
         temp9 /= Math.max(5, parseFloat(`${parseInt(`${temp9}`)}`));
         if (servicek) {
            break;
         }
      } while ((bodan9.length <= 5) && servicek);
      for (let g = 0; g < 2; g++) {
         football2 *= parseFloat(`${router1.length}`);
      }
      while ((bodan9.length + parseInt(`${football2}`)) < 3 && 4 < (3 >> (Math.min(4, bodan9.length)))) {
          let langp = true;
         bodan9 += `${(bodan9 == String.fromCharCode(117,0) ? bodan9.length : (langp ? 1 : 2))}`;
         break;
      }
      let anythink4 = football2 <= 7550238.0;
      do {
         football2 *= (parseFloat(`${String.fromCharCode(80,0) == router1 ? parseInt(`${football2}`) : router1.length}`));
         if (anythink4) {
            break;
         }
      } while (anythink4 && (3 <= (1 & router1.length) || (1.68 - football2) <= 2.18));
      umengH += megaphoneU.length | parseInt(`${sortO}`);
   }
      score7 = `${megaphoneU.length - 2}`;
       let modelsk: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,105,110,103,95,121,95,49,48,48,0),false ], [String.fromCharCode(119,97,114,110,105,110,103,115,95,51,95,49,55,0),false ], [String.fromCharCode(112,95,53,54,95,99,108,101,97,114,0),false ]]);
       let play3 = String.fromCharCode(110,95,51,56,95,110,101,97,114,98,121,0);
       let resendB = String.fromCharCode(100,101,108,101,116,101,95,48,95,51,52,0);
       let appsJ: Array<any> = [341, 318];
       let selection5: Array<any> = [927, 180, 577];
      if (1 == (4 ^ appsJ.length) && (appsJ.length ^ 4) == 2) {
         resendB = "3";
      }
      for (let p = 0; p < 1; p++) {
          let short__5b = 2.0;
          let umengu = String.fromCharCode(115,108,105,99,101,95,108,95,50,48,0);
         modelsk.set(play3, (play3 == String.fromCharCode(50,0) ? play3.length : appsJ.length));
         short__5b /= Math.max(3, (umengu == String.fromCharCode(82,0) ? parseInt(`${short__5b}`) : umengu.length));
      }
      let aboutD = appsJ.length <= 9674264;
      do {
         appsJ.push(modelsk.size >> (Math.min(appsJ.length, 3)));
         if (aboutD) {
            break;
         }
      } while (aboutD && (5 > appsJ.length));
      while (!resendB.endsWith(play3)) {
          let sharedo = String.fromCharCode(109,117,108,116,105,112,108,101,95,110,95,49,48,48,0);
          let helperg = 5.0;
          let slider1 = String.fromCharCode(117,95,54,56,95,115,117,112,101,114,119,105,110,100,111,119,0);
          let logo9 = 1;
          let calendarE = String.fromCharCode(106,111,98,115,95,110,95,51,56,0);
         play3 += `${play3.length}`;
         sharedo = `${parseInt(`${helperg}`)}`;
         helperg += parseFloat(`${logo9 << (Math.min(Math.abs(3), 4))}`);
         slider1 += `${sharedo.length}`;
         logo9 |= parseInt(`${helperg}`) << (Math.min(Math.abs(2), 2));
         calendarE = `${calendarE.length ^ logo9}`;
         break;
      }
         resendB += `${(resendB == String.fromCharCode(120,0) ? selection5.length : resendB.length)}`;
       let chinar: Map<any, any> = new Map([[String.fromCharCode(97,95,55,54,95,101,109,112,105,114,105,99,97,108,108,121,0),true ], [String.fromCharCode(115,99,97,116,116,101,114,95,102,95,53,51,0),false ], [String.fromCharCode(99,116,97,98,108,101,115,95,55,95,49,57,0),false ]]);
      while (resendB != String.fromCharCode(89,0)) {
         play3 = `${chinar.size}`;
         break;
      }
       let checkboxW = 1.0;
      clockP = "3";
   while (nterstitialU.length >= umengH) {
       let grayK = 4.0;
       let floatingX = String.fromCharCode(106,95,56,51,95,115,107,101,121,108,105,115,116,0);
       let resultA = 1.0;
       let carousel0: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,52,95,57,56,0),String.fromCharCode(116,100,115,102,95,97,95,52,57,0)], [String.fromCharCode(115,116,114,111,107,101,114,95,103,95,50,49,0),String.fromCharCode(115,116,114,102,117,110,99,95,116,95,54,50,0)], [String.fromCharCode(120,95,57,95,99,111,108,111,117,114,0),String.fromCharCode(117,105,110,116,95,121,95,55,49,0)]]);
       let ajaxX: Array<any> = [771, 11];
      if (1.16 > grayK) {
         grayK -= parseInt(`${grayK}`) & 1;
      }
       let whiteO = false;
      while (carousel0.size > ajaxX.length) {
         carousel0 = new Map([[`${ajaxX.length}`, parseInt(`${resultA}`) >> (Math.min(ajaxX.length, 2))]]);
         break;
      }
      let profilez = whiteO ? !whiteO : whiteO;
      do {
          let assistN = true;
         whiteO = whiteO && 95.64 >= grayK;
         assistN = !assistN;
         if (profilez) {
            break;
         }
      } while ((grayK <= 3.97 || 3.64 <= (3.97 / (Math.max(2, grayK)))) && profilez);
         ajaxX.push(1);
       let langkeyw: Map<any, any> = new Map([[String.fromCharCode(104,95,53,95,102,114,101,101,112,97,100,100,114,115,0),673], [String.fromCharCode(120,95,57,50,95,104,121,115,116,101,114,101,115,105,115,0),923], [String.fromCharCode(114,95,56,52,95,117,110,98,111,110,100,101,100,0),508]]);
          let feedbackN = true;
          let become7: Map<any, any> = new Map([[String.fromCharCode(101,95,51,51,95,101,116,104,114,101,97,100,105,110,103,0),String.fromCharCode(112,95,57,53,95,102,105,97,116,0)], [String.fromCharCode(100,101,99,111,100,101,100,95,105,95,49,54,0),String.fromCharCode(111,95,57,55,95,108,105,109,105,116,115,0)]]);
          let ticky = String.fromCharCode(99,111,110,99,101,97,108,101,100,95,99,95,55,51,0);
         ajaxX = [parseInt(`${grayK}`) | 3];
         feedbackN = become7.size <= ticky.length;
         become7.set(`${ticky}`, (String.fromCharCode(89,0) == ticky ? become7.size : ticky.length));
       let downloadingB: Array<any> = [8, 184];
         ajaxX.push(langkeyw.size);
      if (1 >= downloadingB.length) {
          let readG = 5.0;
          let common3 = true;
         downloadingB.push(carousel0.size % (Math.max(2, 2)));
         readG -= 2 << (Math.min(Math.abs(parseInt(`${readG}`)), 1));
         common3 = 39.38 > readG;
      }
         resultA += parseFloat(`${carousel0.size}`);
      for (let t = 0; t < 3; t++) {
         whiteO = downloadingB.length >= 62;
      }
         grayK /= Math.max(1, ((whiteO ? 3 : 2) % (Math.max(2, 7))));
          let adultN = String.fromCharCode(98,102,115,116,109,95,105,95,50,49,0);
          let alertI = 1.0;
          let heartD = 2.0;
         floatingX = `${3 * downloadingB.length}`;
         adultN = `${adultN.length >> (Math.min(Math.abs(1), 3))}`;
         alertI /= Math.max(1, (adultN == String.fromCharCode(65,0) ? parseInt(`${heartD}`) : adultN.length));
         heartD /= Math.max(parseFloat(`${3 * parseInt(`${alertI}`)}`), 2);
      if (4 == (5 / (Math.max(9, downloadingB.length)))) {
         downloadingB = [2];
      }
      nterstitialU = "1";
      break;
   }
   while (nterstitialU.length > 5 && score7.length > 5) {
      score7 = "2";
      break;
   }
        setIsRefreshing(false);

   for (let k = 0; k < 3; k++) {
       let apple8 = false;
       let recommendationN: Array<any> = [String.fromCharCode(97,95,50,56,95,115,99,104,117,110,99,107,0), String.fromCharCode(99,95,53,55,95,112,97,115,115,0), String.fromCharCode(119,95,49,51,95,112,97,115,115,105,118,101,0)];
       let window_j_ = 0.0;
       let saveA = String.fromCharCode(109,95,53,51,95,118,100,97,115,104,101,114,0);
       let editd: Array<any> = [611, 259];
      for (let o = 0; o < 3; o++) {
          let savee = 1;
          let controlsP = false;
          let n_position4 = false;
          let homer: Array<any> = [275, 374, 265];
         saveA = `${((n_position4 ? 3 : 3) - 3)}`;
         savee -= savee;
         controlsP = homer.includes(controlsP);
         n_position4 = !controlsP;
         homer.push(1 - homer.length);
      }
      let largej = 5576217.0 >= window_j_;
      do {
         window_j_ += parseFloat(`${editd.length}`);
         if (largej) {
            break;
         }
      } while ((2.52 == (window_j_ / 2.34)) && largej);
      for (let v = 0; v < 2; v++) {
          let checkboxj: Map<any, any> = new Map([[String.fromCharCode(104,119,117,112,108,111,97,100,95,99,95,53,50,0),17], [String.fromCharCode(114,95,55,49,95,112,114,111,99,101,115,115,0),879]]);
          let becomeS = String.fromCharCode(111,95,53,57,95,115,121,110,116,104,101,115,105,122,101,100,0);
          let checkboxC = 4.0;
          let loging = 5.0;
         apple8 = checkboxC <= 56.15;
         checkboxj.set(becomeS, (becomeS == String.fromCharCode(111,0) ? parseInt(`${loging}`) : becomeS.length));
         checkboxC /= Math.max(checkboxj.size % 1, 4);
         loging /= Math.max(becomeS.length, 5);
      }
      let playlista = saveA.length >= 6610261;
      do {
          let logo3 = true;
          let leaguec = String.fromCharCode(112,114,101,118,101,110,116,101,100,95,110,95,55,0);
         saveA = `${parseInt(`${window_j_}`) / (Math.max(2, recommendationN.length))}`;
         logo3 = leaguec.length < 90 || logo3;
         leaguec += `${((logo3 ? 3 : 3))}`;
         if (playlista) {
            break;
         }
      } while ((saveA.length <= 4) && playlista);
      if (apple8) {
         apple8 = !apple8;
      }
      while (2.58 <= (window_j_ + 2.64) || 2.64 <= (window_j_ + parseFloat(`${saveA.length}`))) {
         saveA += `${saveA.length}`;
         break;
      }
         recommendationN.push(2);
      if (parseFloat(`${editd.length}`) >= window_j_) {
         window_j_ -= parseFloat(`${2 << (Math.min(4, recommendationN.length))}`);
      }
         apple8 = editd.length < 68 || 84.70 < window_j_;
      if (1 == (4 * recommendationN.length) || 3 == (4 * recommendationN.length)) {
         recommendationN = [parseInt(`${window_j_}`) << (Math.min(recommendationN.length, 4))];
      }
      while (!apple8) {
         editd.push(editd.length);
         break;
      }
      for (let j = 0; j < 2; j++) {
          let bottom2: Array<any> = [614, 481];
         saveA += `${recommendationN.length / (Math.max(9, saveA.length))}`;
         bottom2.push(bottom2.length);
      }
      let listl = editd.length >= 6097822;
      do {
          let downloadn = String.fromCharCode(117,110,97,114,99,104,105,118,101,100,95,50,95,55,51,0);
          let penaltyU: Map<any, any> = new Map([[String.fromCharCode(103,105,103,97,98,121,116,101,115,95,51,95,50,50,0),150], [String.fromCharCode(113,95,53,52,95,116,114,101,101,114,101,97,100,101,114,0),783], [String.fromCharCode(121,95,56,48,95,109,111,100,101,99,111,110,116,0),398]]);
         editd.push(penaltyU.size);
         downloadn += "2";
         penaltyU = new Map([[downloadn, downloadn.length]]);
         if (listl) {
            break;
         }
      } while (listl && (3 < (recommendationN.length + 4)));
      if (!recommendationN.includes(window_j_)) {
         recommendationN.push(3);
      }
       let robotov = false;
      clockP = `${nterstitialU.length & 2}`;
   }
      homen += "1";
       let xvodI = 3.0;
       let otherU: Array<any> = [994, 298, 626];
       let resendD = false;
      let eighteen1 = resendD ? !resendD : resendD;
      do {
          let emoji9 = false;
          let dataP = String.fromCharCode(117,95,54,56,95,114,101,99,101,105,118,101,0);
          let fullq = String.fromCharCode(99,111,110,115,116,116,105,109,101,95,121,95,53,56,0);
          let teamb = 1.0;
          let rewindf: Map<any, any> = new Map([[String.fromCharCode(98,95,53,51,95,108,111,111,107,97,115,105,100,101,0),241], [String.fromCharCode(115,116,101,112,95,107,95,55,54,0),635]]);
         resendD = !resendD && !emoji9;
         emoji9 = dataP == String.fromCharCode(103,0);
         dataP = `${fullq.length}`;
         fullq = `${fullq.length ^ 1}`;
         teamb /= Math.max(5, parseInt(`${teamb}`) - 2);
         rewindf = new Map([[`${rewindf.size}`, rewindf.size - 1]]);
         if (eighteen1) {
            break;
         }
      } while (eighteen1 && (!resendD));
      while (!resendD) {
          let championo = 0.0;
          let langK = 1;
          let fieldV = String.fromCharCode(111,95,51,48,95,112,97,110,110,105,110,103,0);
          let upgrade0 = 5.0;
         resendD = otherU.includes(xvodI);
         championo -= 1 % (Math.max(parseInt(`${championo}`), 2));
         langK >>= Math.min(Math.abs(parseInt(`${upgrade0}`) & 3), 1);
         fieldV = "2";
         upgrade0 *= langK - 2;
         break;
      }
      if (resendD) {
         resendD = otherU.length > 35 && !resendD;
      }
         xvodI += parseFloat(`${otherU.length}`);
          let largeC = String.fromCharCode(105,95,53,50,95,99,117,109,101,0);
          let basketbally: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,101,110,101,100,95,122,95,52,55,0),715], [String.fromCharCode(117,95,52,55,95,114,116,112,114,101,99,101,105,118,101,114,0),296], [String.fromCharCode(101,95,56,51,95,118,97,108,115,0),900]]);
         otherU = [parseInt(`${xvodI}`)];
         largeC = "2";
         basketbally = new Map([[`${basketbally.size}`, 3]]);
      let clockl = 9464400 >= otherU.length;
      do {
         otherU = [2];
         if (clockl) {
            break;
         }
      } while (clockl && (4 > (otherU.length << (Math.min(Math.abs(4), 2))) && !resendD));
      if (2.91 == (xvodI - 1.10) || xvodI == 1.10) {
         xvodI /= Math.max(1, parseFloat(`${otherU.length % (Math.max(1, 2))}`));
      }
         resendD = 83 <= otherU.length;
       let projectb: Array<any> = [422, 749];
      carouselv.set(score7, 3);
      carouselv = new Map([[clockP, (clockP == String.fromCharCode(56,0) ? clockP.length : parseInt(`${sortO}`))]]);
   for (let y = 0; y < 2; y++) {
      clockP += `${carouselv.size}`;
   }
      nterstitialU += `${3 & nterstitialU.length}`;
        return;
    }, []);

    const [flattenedVideos, setFlattenedVideos] = useState(Array<DSplash>);
    const LIMIT = 300;
    const fetchVods = (page: number) => GHongkong.getListByPage({
        page,
        limit: LIMIT,
    });

    const {
        data: videos,
        isSuccess,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        isFetching,
        refetch,
    } = useMinivodQuery('normal', true, { isAscreen: true });

    useEffect(() => {
        if (videos != undefined) {
            setFlattenedVideos(videos?.pages.flat().filter(x => x));
        }
    }, [videos])

    const checkConnection = useCallback(async () => {
       let sourceF = String.fromCharCode(97,110,105,109,97,116,97,98,108,101,95,49,95,49,48,0);
    let logo7 = 5;
    let zhuboi = String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,102,95,51,0);
    let statsm = String.fromCharCode(105,110,115,101,114,116,105,111,110,95,56,95,57,0);
    let completeh = false;
    let splashU: Map<any, any> = new Map([[String.fromCharCode(115,95,50,57,95,101,120,112,101,99,116,101,100,0),String.fromCharCode(118,95,54,48,95,105,110,116,101,114,112,111,108,97,116,101,102,0)], [String.fromCharCode(113,95,49,56,95,99,116,116,115,0),String.fromCharCode(116,114,105,109,109,101,100,95,97,95,55,55,0)], [String.fromCharCode(101,105,110,116,114,95,114,95,53,51,0),String.fromCharCode(97,99,99,101,115,115,105,110,103,95,114,95,56,50,0)]]);
    let group0: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,102,116,118,109,111,0),101], [String.fromCharCode(116,111,108,101,114,97,110,99,101,95,52,95,54,53,0),439], [String.fromCharCode(110,111,111,112,95,118,95,52,53,0),354]]);
    let championr = String.fromCharCode(120,95,55,50,95,119,100,108,116,0);
    let becomeb: Map<any, any> = new Map([[String.fromCharCode(117,95,55,49,95,112,114,111,99,101,115,115,111,114,115,0),179], [String.fromCharCode(104,95,53,54,95,99,97,108,101,110,100,97,114,0),711]]);
    let expandZ = 5.0;
    let productp: Array<any> = [916, 206];
    let constantskI = String.fromCharCode(115,116,114,108,99,112,121,95,56,95,51,57,0);
   let hooksC = 6023252 <= splashU.size;
   do {
      splashU.set(`${completeh}`, 3);
      if (hooksC) {
         break;
      }
   } while (hooksC && ((1 - splashU.size) >= 2 || 1 >= splashU.size));
   while (productp.includes(expandZ)) {
       let delegate__5t = String.fromCharCode(112,114,111,109,105,115,101,115,95,103,95,53,54,0);
       let long_51P = true;
      for (let m = 0; m < 1; m++) {
         delegate__5t += `${((long_51P ? 1 : 5))}`;
      }
          let container_ = 1.0;
          let leagueV = String.fromCharCode(115,105,103,110,105,110,103,95,51,95,49,48,0);
         long_51P = leagueV.includes(`${container_}`);
      let layoutn = delegate__5t == String.fromCharCode(109,121,50,116,114,113,0);
      do {
         delegate__5t += `${((long_51P ? 3 : 3))}`;
         if (layoutn) {
            break;
         }
      } while (layoutn && (1 >= delegate__5t.length || !long_51P));
         delegate__5t += `${3 << (Math.min(1, delegate__5t.length))}`;
      while (3 <= delegate__5t.length && !long_51P) {
         delegate__5t = `${delegate__5t.length & 3}`;
         break;
      }
          let fieldf = String.fromCharCode(98,95,52,51,95,98,117,108,108,101,116,115,0);
         delegate__5t += "1";
         fieldf = `${fieldf.length}`;
      expandZ /= Math.max(parseFloat(`${parseInt(`${expandZ}`) ^ 1}`), 2);
      break;
   }
       let backl = 2;
      let chatF = backl <= 5104793;
      do {
         backl -= 1 | backl;
         if (chatF) {
            break;
         }
      } while (chatF && (backl == 5));
          let listh = 1.0;
         backl -= parseInt(`${listh}`) / 2;
      for (let l = 0; l < 2; l++) {
         backl *= backl;
      }
      logo7 /= Math.max(5, 3 ^ parseInt(`${expandZ}`));
      splashU.set(sourceF, 1 & championr.length);
   let arrowE = String.fromCharCode(105,95,53,111,48,95,110,55,113,57,0) == statsm;
   do {
       let success7: Map<any, any> = new Map([[String.fromCharCode(105,110,105,95,119,95,57,57,0),String.fromCharCode(109,110,99,95,110,95,56,54,0)], [String.fromCharCode(109,95,50,54,95,97,116,117,114,97,116,105,111,110,0),String.fromCharCode(118,101,110,99,95,56,95,52,52,0)]]);
       let notificationQ = 4.0;
       let stringo = 2.0;
       let pauseG = 3.0;
       let sina_ = String.fromCharCode(118,97,114,108,101,110,103,116,104,95,48,95,51,53,0);
       let fullF = String.fromCharCode(117,95,52,55,95,108,111,119,101,114,0);
       let carouselE = String.fromCharCode(109,97,115,107,95,117,95,51,53,0);
      for (let u = 0; u < 2; u++) {
         pauseG += 1;
      }
      while (sina_.includes(`${pauseG}`)) {
         sina_ = `${parseInt(`${stringo}`)}`;
         break;
      }
      if (carouselE.startsWith(`${stringo}`)) {
          let slidert = String.fromCharCode(109,95,56,95,111,110,101,116,105,109,101,97,117,116,104,0);
          let frame_s8 = 5.0;
          let emojiH = false;
          let modelsd = 4.0;
          let history4 = 5.0;
         stringo *= parseInt(`${notificationQ}`) >> (Math.min(slidert.length, 4));
         slidert += `${parseInt(`${history4}`) % 3}`;
         frame_s8 -= parseFloat(`${parseInt(`${frame_s8}`) - 3}`);
         emojiH = history4 >= 97.95;
         modelsd /= Math.max(parseFloat(`${parseInt(`${history4}`) * 3}`), 3);
      }
      for (let z = 0; z < 3; z++) {
         carouselE = `${sina_.length | carouselE.length}`;
      }
      while ((stringo / 2.82) <= 1.89) {
          let rulesr = String.fromCharCode(120,95,50,51,95,112,97,117,115,101,100,0);
          let mappingT = 1.0;
         stringo -= 1 ^ parseInt(`${pauseG}`);
         rulesr = `${3 | rulesr.length}`;
         mappingT /= Math.max(4, 3);
         break;
      }
      if (5.72 > (pauseG + 3.92)) {
          let referrerD = 5.0;
         pauseG += fullF.length;
         referrerD += parseInt(`${referrerD}`) - 2;
      }
          let floatingv = String.fromCharCode(103,95,56,55,95,101,114,114,0);
         pauseG -= sina_.length >> (Math.min(1, Math.abs(parseInt(`${pauseG}`))));
         floatingv = `${floatingv.length}`;
      while (carouselE.startsWith(`${success7.size}`)) {
         success7.set(`${pauseG}`, 3 >> (Math.min(5, Math.abs(parseInt(`${pauseG}`)))));
         break;
      }
          let settingsI = String.fromCharCode(104,95,56,56,95,99,111,112,121,102,100,0);
         pauseG /= Math.max(settingsI.length % (Math.max(1, 9)), 3);
          let sentrys = true;
          let p_player8 = 4;
          let typese = String.fromCharCode(122,95,52,52,95,99,109,112,97,100,100,114,0);
         notificationQ -= (parseFloat(`${typese == String.fromCharCode(108,0) ? carouselE.length : typese.length}`));
         sentrys = p_player8 >= 29 || !sentrys;
         p_player8 >>= Math.min(Math.abs(3), 3);
      statsm += `${group0.size}`;
      if (arrowE) {
         break;
      }
   } while (arrowE && (statsm.includes(`${zhuboi.length}`)));
      expandZ /= Math.max(4, parseFloat(`${group0.size << (Math.min(Math.abs(3), 4))}`));
      group0.set(`${completeh}`, 3 % (Math.max(6, parseInt(`${expandZ}`))));
   for (let s = 0; s < 1; s++) {
      zhuboi = `${parseInt(`${expandZ}`)}`;
   }

        const state = await NetInfo.fetch();

       let signinup_ = String.fromCharCode(114,95,57,54,95,119,101,105,103,104,116,115,0);
       let sheeto = 3.0;
       let sentryS = 0.0;
      if (signinup_.endsWith(`${sentryS}`)) {
         signinup_ = "2";
      }
      let internetT = sheeto >= 8458454.0;
      do {
          let confirmation_ = String.fromCharCode(114,103,98,97,98,101,95,105,95,55,53,0);
          let scheduleU = 2.0;
         sheeto *= parseFloat(`${parseInt(`${sentryS}`)}`);
         confirmation_ = `${confirmation_.length}`;
         scheduleU -= parseInt(`${scheduleU}`) & confirmation_.length;
         if (internetT) {
            break;
         }
      } while (internetT && (sentryS > 1.16));
          let notificationI: Map<any, any> = new Map([[String.fromCharCode(110,99,111,109,105,110,103,95,99,95,52,55,0),String.fromCharCode(97,95,52,54,95,114,101,102,101,114,0)], [String.fromCharCode(112,95,54,57,95,118,111,116,101,114,0),String.fromCharCode(104,95,51,53,95,112,111,115,101,115,0)], [String.fromCharCode(108,95,56,52,95,112,114,101,118,0),String.fromCharCode(111,100,109,108,95,105,95,53,48,0)]]);
          let accepted_ = String.fromCharCode(100,111,120,121,103,101,110,95,109,95,52,53,0);
          let renewd = 3.0;
         sheeto -= parseFloat(`${notificationI.size}`);
         notificationI.set(`${renewd}`, 3 * accepted_.length);
         accepted_ += "3";
         renewd += parseFloat(`${parseInt(`${renewd}`)}`);
         sentryS += parseFloat(`${3}`);
       let championN = 0.0;
       let firebaseK = 5.0;
          let dragT = 0.0;
          let kickY: Array<any> = [String.fromCharCode(109,112,101,103,116,115,95,106,95,55,0), String.fromCharCode(115,101,99,117,114,101,95,108,95,54,0)];
         signinup_ += `${parseInt(`${firebaseK}`) >> (Math.min(2, Math.abs(1)))}`;
         dragT += parseFloat(`${parseInt(`${dragT}`) - kickY.length}`);
         kickY = [parseInt(`${dragT}`) << (Math.min(kickY.length, 4))];
         sentryS /= Math.max(parseFloat(`${signinup_.length}`), 3);
         sentryS /= Math.max(1, parseFloat(`${signinup_.length ^ parseInt(`${sentryS}`)}`));
         sentryS += parseFloat(`${parseInt(`${championN}`)}`);
      productp.push(productp.length);
       let zhengpiany = String.fromCharCode(116,111,112,105,99,115,95,103,95,50,49,0);
       let downloadv: Array<any> = [410, 564];
       let hoverF: Array<any> = [890, 606];
         zhengpiany = "3";
      for (let f = 0; f < 3; f++) {
         downloadv.push(1 - downloadv.length);
      }
      if ((downloadv.length ^ 3) < 4 || (downloadv.length ^ 3) < 1) {
         downloadv = [3];
      }
      while (hoverF.length < downloadv.length) {
         hoverF = [1 + hoverF.length];
         break;
      }
         downloadv = [downloadv.length];
      if (zhengpiany.length == hoverF.length) {
         hoverF.push(downloadv.length / (Math.max(hoverF.length, 7)));
      }
       let showY = String.fromCharCode(108,97,117,110,99,104,95,51,95,51,49,0);
       let carouselR = String.fromCharCode(102,114,101,101,100,95,53,95,55,50,0);
          let room8 = 2.0;
          let shareJ: Array<any> = [218, 948];
         showY = `${2 + parseInt(`${room8}`)}`;
         room8 -= parseFloat(`${1 % (Math.max(3, shareJ.length))}`);
         shareJ = [shareJ.length + shareJ.length];
      let sportH = 7715935 <= downloadv.length;
      do {
         downloadv = [downloadv.length / 3];
         if (sportH) {
            break;
         }
      } while ((1 < downloadv.length) && sportH);
      group0 = new Map([[`${downloadv.length}`, 1 * downloadv.length]]);
       let heartD = 0;
       let predictionE = 2.0;
       let promotionK = 3.0;
      if ((predictionE / 3) < 2.86) {
         promotionK *= heartD ^ parseInt(`${promotionK}`);
      }
      if (promotionK < heartD) {
         heartD ^= 1;
      }
      for (let p = 0; p < 3; p++) {
          let search7 = String.fromCharCode(100,95,57,48,95,116,114,97,105,110,0);
          let dialog9 = String.fromCharCode(115,101,97,95,55,95,57,56,0);
         promotionK /= Math.max(1, heartD);
         search7 += `${dialog9.length & 2}`;
         dialog9 += `${1 % (Math.max(4, search7.length))}`;
      }
      for (let v = 0; v < 1; v++) {
          let statisticsJ: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,117,110,116,114,117,115,116,101,100,0),String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,104,95,50,49,0)], [String.fromCharCode(112,95,49,49,95,114,101,115,101,101,107,0),String.fromCharCode(102,95,51,51,95,112,114,101,115,99,97,108,105,110,103,0)]]);
          let telegram9 = 4.0;
          let shirtw: Array<any> = [913, 338, 457];
         heartD %= Math.max(heartD, 1);
         statisticsJ.set(`${shirtw.length}`, statisticsJ.size >> (Math.min(Math.abs(3), 1)));
         telegram9 /= Math.max(2, parseFloat(`${3}`));
         shirtw = [shirtw.length + statisticsJ.size];
      }
         predictionE -= 2;
      if (4.23 < (3.27 + predictionE)) {
          let suggestionM = 3.0;
         heartD &= 2;
         suggestionM += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${suggestionM}`)), 3))}`);
      }
      for (let i = 0; i < 1; i++) {
          let basketballf = 2.0;
          let historyO: Array<any> = [923, 767, 835];
          let tickedu = String.fromCharCode(97,95,51,53,95,99,111,100,101,99,99,116,108,0);
         predictionE *= 3;
         basketballf += parseInt(`${basketballf}`) ^ historyO.length;
         historyO = [historyO.length];
         tickedu = `${historyO.length | tickedu.length}`;
      }
         promotionK -= parseInt(`${predictionE}`);
      let successX = 5787469.0 >= predictionE;
      do {
         predictionE /= Math.max(heartD ^ parseInt(`${promotionK}`), 5);
         if (successX) {
            break;
         }
      } while (successX && ((predictionE / 2.18) == 1.4 && 2.18 == (promotionK * predictionE)));
      championr = `${logo7}`;
   for (let c = 0; c < 1; c++) {
       let gesturesU: Map<any, any> = new Map([[String.fromCharCode(112,95,56,54,95,104,101,97,100,115,101,116,0),105], [String.fromCharCode(122,111,111,109,97,98,108,101,95,52,95,50,55,0),52]]);
       let matchesG = 1;
       let gpayD = String.fromCharCode(115,112,97,109,95,51,95,51,55,0);
      let philippinesw = String.fromCharCode(57,120,114,0) == gpayD;
      do {
         gpayD += `${gesturesU.size - matchesG}`;
         if (philippinesw) {
            break;
         }
      } while ((gpayD.includes(`${matchesG}`)) && philippinesw);
      for (let b = 0; b < 2; b++) {
         gesturesU = new Map([[`${matchesG}`, 3]]);
      }
       let v_playerR: Map<any, any> = new Map([[String.fromCharCode(101,95,57,51,95,99,104,115,99,97,108,101,0),true ], [String.fromCharCode(98,108,111,99,107,100,115,112,95,107,95,49,51,0),false ]]);
         matchesG -= 3;
      if (3 >= (gesturesU.size << (Math.min(gpayD.length, 3))) && (gpayD.length << (Math.min(Math.abs(3), 3))) >= 5) {
         gesturesU = new Map([[`${gesturesU.size}`, matchesG ^ gesturesU.size]]);
      }
      let button1 = String.fromCharCode(120,112,95,106,0) == gpayD;
      do {
         gpayD += `${gpayD.length - 3}`;
         if (button1) {
            break;
         }
      } while (button1 && (1 == matchesG));
          let hejiU = 4;
          let thumbnail9 = 4.0;
         v_playerR = new Map([[`${thumbnail9}`, parseInt(`${thumbnail9}`) - 2]]);
         hejiU >>= Math.min(Math.abs(hejiU << (Math.min(Math.abs(3), 1))), 2);
       let muted4 = 5;
      for (let b = 0; b < 1; b++) {
         gesturesU = new Map([[`${v_playerR.size}`, 3]]);
      }
      group0 = new Map([[`${matchesG}`, 1]]);
   }
   for (let f = 0; f < 2; f++) {
      expandZ -= parseFloat(`${3}`);
   }
   while (1 < productp.length) {
       let liveo = 5.0;
       let appsz = String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,101,95,53,57,0);
       let checkboxj = String.fromCharCode(114,101,97,116,116,97,99,104,95,104,95,57,52,0);
       let sharedx = String.fromCharCode(121,95,57,48,95,109,99,111,109,112,97,110,100,0);
       let anytimeV = String.fromCharCode(98,105,119,103,116,95,119,95,56,55,0);
          let configureN = true;
         sharedx += `${((configureN ? 1 : 1) | 3)}`;
         liveo -= anytimeV.length;
      if (anytimeV.length == sharedx.length) {
          let fieldx = String.fromCharCode(98,117,102,108,101,110,95,118,95,50,54,0);
          let progressy: Array<any> = [String.fromCharCode(116,111,103,103,108,101,95,116,95,55,57,0), String.fromCharCode(116,95,51,95,108,104,97,115,104,0), String.fromCharCode(101,95,53,57,95,97,114,97,98,105,99,0)];
         sharedx += `${progressy.length}`;
         fieldx = "3";
         progressy = [fieldx.length];
      }
      let footballN = sharedx.length <= 9635591;
      do {
          let calendar9: Array<any> = [270, 871];
         sharedx = `${(String.fromCharCode(75,0) == sharedx ? sharedx.length : appsz.length)}`;
         calendar9 = [calendar9.length];
         if (footballN) {
            break;
         }
      } while (footballN && (sharedx.length > anytimeV.length));
      while (appsz.length > sharedx.length) {
          let minimizeM = true;
          let anner7 = 5.0;
          let sort3: Map<any, any> = new Map([[String.fromCharCode(103,95,55,49,95,97,107,105,100,0),String.fromCharCode(115,101,114,105,97,108,105,122,101,95,104,95,54,52,0)], [String.fromCharCode(99,97,108,108,105,110,103,95,121,95,49,49,0),String.fromCharCode(104,95,52,48,0)]]);
          let predictionr: Array<any> = [String.fromCharCode(114,101,115,101,114,118,101,95,110,95,49,53,0), String.fromCharCode(102,97,99,101,98,111,111,107,95,105,95,52,53,0)];
         appsz = "2";
         minimizeM = (predictionr.length * parseInt(`${anner7}`)) > 37;
         anner7 *= parseFloat(`${parseInt(`${anner7}`)}`);
         sort3 = new Map([[`${anner7}`, ((minimizeM ? 5 : 3) ^ parseInt(`${anner7}`))]]);
         predictionr = [parseInt(`${anner7}`) & 2];
         break;
      }
      while (appsz.length >= 3) {
          let searchbar4 = 0;
          let dataF = String.fromCharCode(118,95,52,49,95,101,120,112,108,105,99,105,116,0);
          let catagoryw: Array<any> = [828, 24, 897];
          let linkG = String.fromCharCode(108,95,56,56,95,98,121,112,97,115,115,105,110,103,0);
         checkboxj += "2";
         searchbar4 ^= catagoryw.length;
         dataF = `${(dataF == String.fromCharCode(74,0) ? dataF.length : catagoryw.length)}`;
         linkG = `${linkG.length / (Math.max(1, 1))}`;
         break;
      }
      if (4.70 <= (liveo - 5.77)) {
         anytimeV = `${anytimeV.length}`;
      }
         sharedx = `${1 - appsz.length}`;
         anytimeV += `${appsz.length}`;
         sharedx += `${appsz.length}`;
         checkboxj = `${sharedx.length}`;
      for (let r = 0; r < 1; r++) {
          let macauj = 0.0;
         anytimeV = `${parseInt(`${liveo}`)}`;
         macauj *= parseInt(`${macauj}`);
      }
      for (let i = 0; i < 1; i++) {
          let rankT = String.fromCharCode(104,95,53,54,95,98,108,111,99,107,100,99,0);
         liveo /= Math.max(4, (String.fromCharCode(56,0) == rankT ? anytimeV.length : rankT.length));
      }
      while (checkboxj.length < 3) {
         appsz = `${sharedx.length / 2}`;
         break;
      }
         liveo *= parseInt(`${liveo}`) * 1;
      sourceF = "1";
      break;
   }
   for (let k = 0; k < 3; k++) {
      productp.push((String.fromCharCode(88,0) == championr ? zhuboi.length : championr.length));
   }
   for (let x = 0; x < 2; x++) {
      expandZ += parseFloat(`${zhuboi.length}`);
   }
        const offline = !(state.isConnected && state.isInternetReachable);

   for (let d = 0; d < 2; d++) {
       let favoritez = String.fromCharCode(113,122,98,105,110,95,122,95,55,55,0);
       let plashZ = 5.0;
       let membershipY = 2.0;
       let vietnamK: Array<any> = [522, 368];
      if (plashZ >= 2.85) {
         plashZ /= Math.max(2, parseFloat(`${parseInt(`${membershipY}`)}`));
      }
      while (1.28 <= (plashZ - parseFloat(`${vietnamK.length}`))) {
         plashZ -= parseFloat(`${favoritez.length}`);
         break;
      }
          let eighteenu = 2.0;
          let paginationH = String.fromCharCode(109,111,118,101,109,101,110,116,95,49,95,51,54,0);
         plashZ -= parseFloat(`${parseInt(`${eighteenu}`) / (Math.max(vietnamK.length, 8))}`);
         eighteenu += paginationH.length;
         paginationH = `${paginationH.length / (Math.max(3, paginationH.length))}`;
         membershipY /= Math.max(4, parseFloat(`${3}`));
      if (plashZ == 3.46) {
         plashZ += (parseFloat(`${String.fromCharCode(55,0) == favoritez ? parseInt(`${plashZ}`) : favoritez.length}`));
      }
       let pauser = 0.0;
       let type_uO = 1.0;
      for (let b = 0; b < 1; b++) {
          let contextX = 3.0;
         pauser -= parseFloat(`${favoritez.length * 1}`);
         contextX *= 1;
      }
       let gesturef = String.fromCharCode(105,95,55,52,95,99,117,108,115,104,105,102,116,0);
          let windf = 1.0;
         type_uO *= (parseFloat(`${String.fromCharCode(71,0) == favoritez ? favoritez.length : parseInt(`${plashZ}`)}`));
         windf /= Math.max(2, parseInt(`${windf}`));
      let unreadz = vietnamK.length >= 5373246;
      do {
         vietnamK = [parseInt(`${pauser}`)];
         if (unreadz) {
            break;
         }
      } while (((plashZ * 5.96) <= 4.67) && unreadz);
      let tailR = 9669086.0 >= type_uO;
      do {
         type_uO *= parseFloat(`${parseInt(`${plashZ}`) << (Math.min(3, Math.abs(3)))}`);
         if (tailR) {
            break;
         }
      } while (tailR && (2 > (gesturef.length * 5)));
       let phonec = 0.0;
       let nterstitialr = 5.0;
      splashU = new Map([[favoritez, (favoritez == String.fromCharCode(89,0) ? parseInt(`${expandZ}`) : favoritez.length)]]);
   }
   let gestureQ = championr == String.fromCharCode(119,115,98,0);
   do {
      championr += `${logo7}`;
      if (gestureQ) {
         break;
      }
   } while ((championr.length > 3) && gestureQ);
       let sinaX = 2.0;
       let settingV = 4.0;
      for (let i = 0; i < 2; i++) {
          let adultU = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,56,95,54,54,0);
          let temperatureY = 3.0;
          let filedk: Map<any, any> = new Map([[String.fromCharCode(115,117,110,114,105,115,101,95,55,95,57,51,0),739], [String.fromCharCode(114,101,112,111,114,116,101,114,95,119,95,51,48,0),240]]);
         sinaX /= Math.max(2, (parseFloat(`${String.fromCharCode(122,0) == adultU ? adultU.length : parseInt(`${sinaX}`)}`)));
         temperatureY /= Math.max(filedk.size, 4);
         filedk = new Map([[`${filedk.size}`, parseInt(`${temperatureY}`) >> (Math.min(Math.abs(2), 1))]]);
      }
      if (4.88 > sinaX) {
          let twitterL = String.fromCharCode(109,95,52,53,95,109,111,118,101,0);
          let connectionV = false;
          let modityt = 0.0;
         settingV -= twitterL.length | 2;
         twitterL += `${parseInt(`${modityt}`) ^ parseInt(`${modityt}`)}`;
         connectionV = modityt <= 24.18;
      }
      let description_an = 8622134.0 >= settingV;
      do {
         settingV += 1 ^ parseInt(`${sinaX}`);
         if (description_an) {
            break;
         }
      } while ((3.2 <= (sinaX * 1.82) || (1.82 * sinaX) <= 4.92) && description_an);
         settingV *= parseInt(`${sinaX}`);
          let description_tfO = 0.0;
          let icopy_boT = String.fromCharCode(109,95,57,51,95,117,110,105,110,105,116,105,97,108,105,122,101,100,0);
          let l_countC: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,99,117,114,114,101,110,116,0),String.fromCharCode(97,97,99,99,111,100,101,114,95,97,95,51,54,0)], [String.fromCharCode(121,95,49,95,107,101,121,118,97,108,0),String.fromCharCode(114,101,97,108,109,95,55,95,50,55,0)]]);
         settingV += 3;
         description_tfO += parseFloat(`${l_countC.size ^ 3}`);
         icopy_boT = `${icopy_boT.length ^ parseInt(`${description_tfO}`)}`;
         l_countC = new Map([[`${description_tfO}`, icopy_boT.length % (Math.max(3, 6))]]);
          let launcht = 1;
         settingV += launcht;
      sourceF = `${productp.length}`;
       let entryy = String.fromCharCode(102,100,99,116,100,115,112,95,120,95,51,0);
       let floaterx = true;
       let friendsS = false;
          let readi = String.fromCharCode(118,95,57,48,95,115,116,97,114,116,0);
          let over8: Array<any> = [String.fromCharCode(115,99,104,101,100,117,108,101,95,122,95,50,0), String.fromCharCode(115,116,115,122,95,111,95,51,49,0), String.fromCharCode(108,95,56,50,95,115,114,112,0)];
         floaterx = entryy.startsWith(`${floaterx}`);
         readi += "3";
         over8 = [3 + readi.length];
      while (floaterx) {
         floaterx = (floaterx ? !friendsS : !floaterx);
         break;
      }
         entryy = `${((floaterx ? 1 : 1) * (friendsS ? 4 : 5))}`;
      if (!floaterx) {
         floaterx = entryy.startsWith(`${floaterx}`);
      }
      while (entryy.length >= 4) {
         floaterx = entryy.length < 26;
         break;
      }
      if (friendsS || floaterx) {
         floaterx = (!friendsS ? floaterx : friendsS);
      }
          let verticalU: Array<any> = [907, 723];
          let stare = 0;
          let live1 = String.fromCharCode(112,95,55,54,95,105,110,116,101,114,118,97,108,0);
         friendsS = 77 < verticalU.length;
         verticalU = [stare];
         stare += live1.length;
         live1 = `${3 ^ stare}`;
       let networkl = false;
      let verticalo = friendsS ? !friendsS : friendsS;
      do {
          let sellD = String.fromCharCode(116,101,120,116,98,101,95,121,95,56,52,0);
          let change3 = false;
          let bottomD: Array<any> = [786, 85];
          let downloadF = String.fromCharCode(102,95,56,48,95,102,100,99,116,100,115,112,0);
         friendsS = entryy.length < bottomD.length;
         sellD += `${(downloadF == String.fromCharCode(118,0) ? sellD.length : downloadF.length)}`;
         change3 = downloadF == sellD;
         bottomD = [1 + downloadF.length];
         if (verticalo) {
            break;
         }
      } while (verticalo && (!networkl));
      sourceF += "1";
       let backward3: Array<any> = [791, 179];
       let window_fq = 5;
       let rightE = String.fromCharCode(112,105,99,116,95,57,95,57,56,0);
         window_fq -= window_fq / (Math.max(rightE.length, 9));
      for (let s = 0; s < 1; s++) {
         backward3 = [backward3.length & rightE.length];
      }
         backward3 = [1];
      for (let r = 0; r < 1; r++) {
          let minivoda = String.fromCharCode(111,95,53,49,95,98,101,102,111,114,101,0);
          let gmailV: Map<any, any> = new Map([[String.fromCharCode(101,95,57,48,95,114,111,116,97,116,101,0),String.fromCharCode(107,95,52,52,95,97,100,109,105,110,101,100,0)], [String.fromCharCode(109,111,110,111,116,111,110,105,99,95,116,95,52,51,0),String.fromCharCode(112,111,108,121,108,105,110,101,95,115,95,49,49,0)], [String.fromCharCode(100,101,115,99,95,101,95,57,56,0),String.fromCharCode(102,95,54,49,95,99,117,101,115,0)]]);
          let mappingp = String.fromCharCode(97,95,49,48,95,100,101,109,117,120,101,114,115,0);
         window_fq *= backward3.length;
         minivoda = `${minivoda.length}`;
         gmailV.set(`${minivoda}`, 2);
         mappingp = "1";
      }
      for (let z = 0; z < 1; z++) {
         rightE = `${window_fq}`;
      }
       let zhengpianA = 0.0;
       let xvoda = 4.0;
      while (!backward3.includes(window_fq)) {
         window_fq += backward3.length + 2;
         break;
      }
       let cornerH = false;
       let watchV = false;
         xvoda /= Math.max(5, (parseFloat(`${(cornerH ? 2 : 3) ^ backward3.length}`)));
      statsm = `${2 >> (Math.min(3, zhuboi.length))}`;
   if ((5 >> (Math.min(2, Math.abs(group0.size)))) >= 1 && 2 >= (group0.size >> (Math.min(Math.abs(5), 2)))) {
       let heartz = String.fromCharCode(105,95,52,48,95,100,111,109,97,105,110,115,0);
       let const_yku: Map<any, any> = new Map([[String.fromCharCode(109,95,54,48,95,107,105,108,111,98,121,116,101,0),String.fromCharCode(97,101,115,116,97,98,95,116,95,56,53,0)], [String.fromCharCode(110,101,103,95,106,95,50,0),String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,56,95,49,50,0)], [String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,109,95,56,54,0),String.fromCharCode(102,95,54,51,95,105,105,110,116,0)]]);
       let currentY: Map<any, any> = new Map([[String.fromCharCode(110,95,50,48,95,114,99,111,110,0),656], [String.fromCharCode(115,121,109,109,101,116,114,105,99,95,106,95,55,53,0),622], [String.fromCharCode(116,95,50,55,95,101,110,99,104,0),395]]);
       let trashf = String.fromCharCode(98,95,57,51,95,105,111,101,114,114,0);
       let styleq = 4;
      for (let q = 0; q < 3; q++) {
         currentY.set(`${trashf}`, trashf.length);
      }
      let kicka = 9833159 >= const_yku.size;
      do {
         const_yku.set(`${const_yku.size}`, 1);
         if (kicka) {
            break;
         }
      } while ((2 == (const_yku.size >> (Math.min(Math.abs(3), 4))) || 3 == (currentY.size >> (Math.min(Math.abs(3), 4)))) && kicka);
      for (let q = 0; q < 2; q++) {
         styleq >>= Math.min(4, Math.abs(2));
      }
      let reportO = 6763756 >= trashf.length;
      do {
         trashf += "3";
         if (reportO) {
            break;
         }
      } while (reportO && (trashf.length < styleq));
      for (let b = 0; b < 2; b++) {
         heartz += "1";
      }
      let favicon7 = const_yku.size <= 6369805;
      do {
         const_yku.set(`${const_yku.size}`, currentY.size);
         if (favicon7) {
            break;
         }
      } while ((1 <= (const_yku.size | 4) || (const_yku.size | 4) <= 3) && favicon7);
          let singaporem = String.fromCharCode(110,95,55,95,97,118,99,105,110,116,114,97,0);
         currentY = new Map([[`${currentY.size}`, 1]]);
         singaporem += `${2 ^ singaporem.length}`;
      let castN = trashf.length <= 7411848;
      do {
          let live4 = true;
          let chinah = 3.0;
          let anytimeT: Array<any> = [696, 617];
          let with_09v = 0.0;
         trashf += `${currentY.size & const_yku.size}`;
         live4 = parseFloat(`${anytimeT.length}`) <= with_09v;
         chinah /= Math.max(1, parseFloat(`${parseInt(`${chinah}`) / (Math.max(8, parseInt(`${with_09v}`)))}`));
         anytimeT = [parseInt(`${chinah}`)];
         if (castN) {
            break;
         }
      } while (castN && (!trashf.endsWith(`${styleq}`)));
      while (trashf.endsWith(`${const_yku.size}`)) {
         const_yku.set(`${currentY.size}`, const_yku.size);
         break;
      }
         styleq &= const_yku.size | currentY.size;
      let casth = styleq <= 7949758;
      do {
         styleq ^= heartz.length + 1;
         if (casth) {
            break;
         }
      } while (casth && (Array.from(currentY.values()).includes(styleq)));
      for (let e = 0; e < 1; e++) {
         heartz = `${const_yku.size}`;
      }
      if (heartz.length < trashf.length) {
         heartz = "1";
      }
         trashf = `${trashf.length}`;
       let minimizeK: Array<any> = [433, 984, 480];
      group0 = new Map([[`${becomeb.size}`, 1]]);
   }
       let backgroundn = 0.0;
       let schedule_: Map<any, any> = new Map([[String.fromCharCode(121,95,57,95,112,114,111,98,97,98,105,108,105,116,105,101,115,0),865], [String.fromCharCode(97,116,116,97,99,104,109,101,110,116,115,95,112,95,50,52,0),132], [String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,95,55,95,52,50,0),944]]);
       let sende = false;
      let leagueL = backgroundn >= 6925101.0;
      do {
          let customF: Array<any> = [916, 706, 533];
         backgroundn -= 2;
         customF = [customF.length * 2];
         if (leagueL) {
            break;
         }
      } while ((schedule_.size < 2) && leagueL);
      let gpayA = backgroundn <= 7896539.0;
      do {
         backgroundn *= parseInt(`${backgroundn}`) << (Math.min(5, Math.abs(1)));
         if (gpayA) {
            break;
         }
      } while ((sende) && gpayA);
         schedule_ = new Map([[`${schedule_.size}`, 3]]);
          let activel = 2;
          let faviconZ: Array<any> = [490, 470];
         schedule_ = new Map([[`${faviconZ.length}`, 1]]);
         activel &= activel % 3;
         faviconZ = [activel];
      for (let p = 0; p < 3; p++) {
          let groupr = String.fromCharCode(108,97,117,110,99,104,101,114,95,50,95,55,55,0);
          let constantsk = String.fromCharCode(109,111,118,105,101,95,49,95,49,0);
          let modalP = 1.0;
          let indexg = String.fromCharCode(110,95,51,56,95,112,97,100,100,105,110,103,0);
          let inactivea = String.fromCharCode(108,95,51,48,95,97,103,101,110,116,0);
         schedule_.set(groupr, ((sende ? 4 : 4) % 3));
         groupr = `${inactivea.length / (Math.max(indexg.length, 4))}`;
         constantsk += `${(String.fromCharCode(122,0) == indexg ? indexg.length : inactivea.length)}`;
         modalP += 1;
      }
      while ((3 << (Math.min(4, Math.abs(schedule_.size)))) <= 3) {
         schedule_.set(`${backgroundn}`, schedule_.size << (Math.min(3, Math.abs(parseInt(`${backgroundn}`)))));
         break;
      }
          let commonS: Array<any> = [140, 512];
          let profileq = String.fromCharCode(109,112,111,115,95,97,95,53,51,0);
          let logoG: Map<any, any> = new Map([[String.fromCharCode(120,95,50,50,95,112,97,115,116,101,108,0),734], [String.fromCharCode(109,95,54,51,95,105,112,99,0),949], [String.fromCharCode(99,108,117,116,95,49,95,54,53,0),765]]);
         sende = !sende;
         commonS = [profileq.length >> (Math.min(5, commonS.length))];
         profileq = `${(String.fromCharCode(105,0) == profileq ? profileq.length : commonS.length)}`;
         logoG.set(profileq, commonS.length % (Math.max(profileq.length, 6)));
      let interstitial7 = schedule_.size <= 5899953;
      do {
         schedule_.set(`${backgroundn}`, 2 >> (Math.min(1, Math.abs(parseInt(`${backgroundn}`)))));
         if (interstitial7) {
            break;
         }
      } while (interstitial7 && (2.51 == backgroundn));
         sende = (62 <= (schedule_.size | (sende ? 62 : schedule_.size)));
      splashU = new Map([[`${group0.size}`, 1 & group0.size]]);
      becomeb.set(statsm, (statsm == String.fromCharCode(52,0) ? statsm.length : splashU.size));
        setIsOffline(offline);

   let containerQ = expandZ >= 4974962.0;
   do {
      expandZ -= parseFloat(`${becomeb.size / (Math.max(sourceF.length, 2))}`);
      if (containerQ) {
         break;
      }
   } while (containerQ && ((expandZ + parseFloat(`${statsm.length}`)) > 1.38 && (parseFloat(`${statsm.length}`) + expandZ) > 1.38));
      sourceF += `${championr.length}`;
       let checkbox6 = 1.0;
       let loadingY = 2;
       let floatingC: Map<any, any> = new Map([[String.fromCharCode(97,95,53,52,0),String.fromCharCode(103,95,49,48,95,114,101,97,108,108,111,99,112,0)], [String.fromCharCode(115,99,114,97,116,99,104,95,98,95,52,50,0),String.fromCharCode(108,97,110,99,122,111,115,95,119,95,49,56,0)]]);
          let completeK = true;
         floatingC.set(`${loadingY}`, 1 + floatingC.size);
         completeK = (!completeK ? !completeK : !completeK);
      if (5 > loadingY) {
         loadingY *= 2 >> (Math.min(5, Math.abs(loadingY)));
      }
         checkbox6 += loadingY | parseInt(`${checkbox6}`);
         loadingY += 1 - parseInt(`${checkbox6}`);
          let borderlessE = String.fromCharCode(120,95,54,51,95,102,108,111,97,116,115,0);
         loadingY /= Math.max(loadingY, 1);
         borderlessE += `${2 + borderlessE.length}`;
       let shirtW = false;
      for (let d = 0; d < 3; d++) {
          let renew4 = 5.0;
          let interstitialB = 4.0;
         floatingC = new Map([[`${floatingC.size}`, floatingC.size | 1]]);
         renew4 /= Math.max(3 - parseInt(`${interstitialB}`), 4);
         interstitialB *= parseFloat(`${parseInt(`${renew4}`)}`);
      }
      for (let u = 0; u < 2; u++) {
          let gpayY = String.fromCharCode(99,95,56,51,95,97,100,100,114,0);
         loadingY -= 3 << (Math.min(Math.abs(parseInt(`${checkbox6}`)), 1));
         gpayY = `${1 | gpayY.length}`;
      }
         floatingC = new Map([[`${floatingC.size}`, loadingY]]);
      championr = `${3 * sourceF.length}`;
   if (becomeb.size > 1) {
       let temperatureP = String.fromCharCode(98,97,115,101,103,112,104,95,107,95,50,48,0);
       let rightc = true;
      if (temperatureP.startsWith(`${rightc}`)) {
         rightc = !temperatureP.startsWith(`${rightc}`);
      }
          let expand1: Map<any, any> = new Map([[String.fromCharCode(112,95,54,56,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0),900], [String.fromCharCode(118,97,114,121,105,110,103,95,107,95,53,57,0),242]]);
          let floatingW = 5;
          let smallp = false;
         temperatureP = "2";
         expand1 = new Map([[`${expand1.size}`, expand1.size]]);
         floatingW &= expand1.size * floatingW;
         smallp = !smallp && floatingW > 52;
         rightc = !rightc;
      if (1 >= temperatureP.length || rightc) {
          let smallD = true;
          let privacyp = true;
          let videoH = String.fromCharCode(101,95,55,53,95,120,108,97,98,101,108,104,101,105,103,104,116,0);
         rightc = (!smallD ? privacyp : !smallD);
         privacyp = videoH.length > 18 || String.fromCharCode(103,0) == videoH;
      }
         temperatureP = "1";
      for (let u = 0; u < 1; u++) {
         temperatureP = `${((rightc ? 1 : 3))}`;
      }
      becomeb = new Map([[`${group0.size}`, 1 & zhuboi.length]]);
   }
   while (sourceF.length > 5) {
       let downloaderM: Array<any> = [561, 447];
         downloaderM = [downloaderM.length % (Math.max(7, downloaderM.length))];
      while (!downloaderM.includes(downloaderM.length)) {
         downloaderM.push(2 << (Math.min(4, downloaderM.length)));
         break;
      }
         downloaderM = [3];
      statsm += `${splashU.size}`;
      break;
   }
      zhuboi += `${parseInt(`${expandZ}`)}`;
      group0.set(`${productp.length}`, 1 | productp.length);
   while (sourceF != String.fromCharCode(99,0)) {
      championr += `${group0.size}`;
      break;
   }
        if (!offline) {

   let dragN = 6986575 >= group0.size;
   do {
      group0.set(zhuboi, zhuboi.length);
      if (dragN) {
         break;
      }
   } while (((group0.size >> (Math.min(championr.length, 3))) <= 3) && dragN);
   for (let x = 0; x < 3; x++) {
       let redirectd: Map<any, any> = new Map([[String.fromCharCode(114,101,100,101,109,112,116,105,111,110,95,48,95,54,48,0),true ], [String.fromCharCode(101,95,50,50,95,98,111,116,115,0),true ], [String.fromCharCode(116,95,57,95,101,108,105,115,105,111,110,0),true ]]);
       let gmaili = String.fromCharCode(107,95,55,48,95,99,119,110,100,0);
      if (gmaili.endsWith(`${redirectd.size}`)) {
          let singaporeD = String.fromCharCode(116,97,98,108,101,105,110,105,116,95,54,95,53,0);
          let shirt0: Map<any, any> = new Map([[String.fromCharCode(118,105,115,97,95,105,95,55,0),false ], [String.fromCharCode(110,95,52,57,95,115,114,112,0),false ]]);
         redirectd = new Map([[`${redirectd.size}`, redirectd.size & singaporeD.length]]);
         singaporeD = "1";
         shirt0 = new Map([[`${shirt0.size}`, shirt0.size * shirt0.size]]);
      }
          let turnv = String.fromCharCode(99,95,57,49,95,114,101,115,116,97,107,101,0);
          let sharedb = String.fromCharCode(111,95,52,53,95,115,98,114,101,115,101,114,118,101,0);
          let sellC: Map<any, any> = new Map([[String.fromCharCode(100,95,56,51,95,115,99,97,108,101,114,0),775], [String.fromCharCode(102,111,108,100,95,48,95,51,49,0),876], [String.fromCharCode(115,104,97,108,108,95,114,95,56,56,0),675]]);
         redirectd.set(`${sellC.size}`, redirectd.size & sellC.size);
         turnv = `${sharedb.length ^ turnv.length}`;
         sharedb += `${turnv.length & 2}`;
         redirectd.set(`${gmaili}`, redirectd.size);
         gmaili += `${redirectd.size}`;
      for (let p = 0; p < 3; p++) {
         gmaili = `${(String.fromCharCode(113,0) == gmaili ? redirectd.size : gmaili.length)}`;
      }
         redirectd = new Map([[`${redirectd.size}`, 3 << (Math.min(1, Math.abs(redirectd.size)))]]);
      zhuboi += `${1 * productp.length}`;
   }
   if (4 >= championr.length) {
      championr = `${3 + becomeb.size}`;
   }
   if (5 >= (2 - zhuboi.length)) {
       let targetz = 5.0;
       let appsy: Map<any, any> = new Map([[String.fromCharCode(119,101,105,103,104,116,95,113,95,57,48,0),String.fromCharCode(97,95,53,57,95,109,97,105,110,98,117,110,100,108,101,0)], [String.fromCharCode(119,95,56,53,95,100,101,113,117,111,116,101,0),String.fromCharCode(110,105,108,115,95,117,95,51,48,0)]]);
       let eighteenk: Map<any, any> = new Map([[String.fromCharCode(120,95,51,57,95,99,101,110,116,114,111,105,100,115,0),126], [String.fromCharCode(111,95,50,53,95,97,108,103,111,114,105,116,104,109,0),924]]);
      for (let c = 0; c < 1; c++) {
         targetz -= parseInt(`${targetz}`);
      }
      if ((targetz + eighteenk.size) >= 5.68) {
         targetz -= parseInt(`${targetz}`) ^ 1;
      }
      let yellowJ = eighteenk.size >= 7942206;
      do {
          let popup6 = String.fromCharCode(102,108,97,115,104,95,54,95,56,57,0);
          let pageB: Map<any, any> = new Map([[String.fromCharCode(119,97,116,99,104,105,110,103,95,101,95,53,55,0),626], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,51,95,52,0),539], [String.fromCharCode(121,101,97,114,95,50,95,57,50,0),750]]);
          let sports6 = String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,115,95,51,55,0);
          let detailsq = String.fromCharCode(112,97,105,114,119,105,115,101,95,108,95,53,51,0);
          let becomeY = 0;
         eighteenk = new Map([[`${appsy.size}`, appsy.size]]);
         popup6 += "1";
         pageB = new Map([[popup6, detailsq.length >> (Math.min(1, popup6.length))]]);
         sports6 += "3";
         detailsq += "1";
         becomeY += 3;
         if (yellowJ) {
            break;
         }
      } while (yellowJ && (appsy.size <= eighteenk.size));
          let down7 = String.fromCharCode(109,95,49,53,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
          let baidub = String.fromCharCode(108,111,99,97,108,116,105,109,101,95,109,95,51,48,0);
          let adultn = String.fromCharCode(98,95,49,95,109,101,97,115,117,114,101,109,101,110,116,115,0);
         appsy.set(baidub, down7.length);
         down7 += `${adultn.length}`;
         baidub = `${adultn.length & 1}`;
      while (!Array.from(appsy.keys()).includes(`${targetz}`)) {
         appsy = new Map([[`${eighteenk.size}`, eighteenk.size]]);
         break;
      }
      if (parseInt(`${targetz}`) <= eighteenk.size) {
          let assist8: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,97,95,49,49,0),700], [String.fromCharCode(117,112,108,111,97,100,101,100,95,113,95,55,49,0),599], [String.fromCharCode(97,95,51,52,95,99,114,99,116,97,98,108,101,0),950]]);
          let zhengpianx = 2;
          let handleri: Map<any, any> = new Map([[String.fromCharCode(111,95,51,48,95,99,111,110,99,117,114,114,101,110,116,0),String.fromCharCode(115,95,56,48,95,110,111,105,115,101,115,0)], [String.fromCharCode(111,110,116,101,120,116,95,50,95,55,54,0),String.fromCharCode(104,95,54,49,95,109,105,110,105,109,97,108,108,121,0)], [String.fromCharCode(100,95,49,95,111,116,111,102,0),String.fromCharCode(97,100,100,111,112,95,113,95,55,55,0)]]);
          let dark_ = String.fromCharCode(103,108,111,115,115,95,110,95,53,48,0);
          let mathl = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,122,95,55,56,0);
         eighteenk.set(`${targetz}`, parseInt(`${targetz}`));
         assist8.set(dark_, mathl.length);
         zhengpianx -= handleri.size + dark_.length;
         handleri.set(dark_, dark_.length * mathl.length);
      }
      for (let l = 0; l < 1; l++) {
         appsy = new Map([[`${appsy.size}`, 1]]);
      }
      if (eighteenk.size < 4) {
         eighteenk.set(`${appsy.size}`, appsy.size >> (Math.min(Math.abs(eighteenk.size), 2)));
      }
      for (let z = 0; z < 3; z++) {
          let stylea: Array<any> = [828, 681];
          let delegate_uD = String.fromCharCode(122,95,49,49,0);
         appsy = new Map([[`${eighteenk.size}`, 1 ^ appsy.size]]);
         stylea.push(1 * delegate_uD.length);
         delegate_uD += `${stylea.length}`;
      }
      zhuboi += `${productp.length}`;
   }
   while (!completeh || 3 >= (becomeb.size / 3)) {
      completeh = statsm == String.fromCharCode(99,0);
      break;
   }
       let p_lock5 = String.fromCharCode(103,95,53,54,95,99,107,112,116,0);
      for (let k = 0; k < 2; k++) {
          let models4 = 4;
          let ecopy_06a = 2.0;
          let foundL = 0.0;
          let minivodh = String.fromCharCode(108,103,111,114,97,110,100,95,113,95,49,51,0);
         p_lock5 += `${p_lock5.length & parseInt(`${foundL}`)}`;
         models4 %= Math.max(4, 2);
         ecopy_06a -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${ecopy_06a}`)), 1))}`);
         foundL += 2;
         minivodh = `${models4 * parseInt(`${ecopy_06a}`)}`;
      }
       let modalX = 5.0;
       let awayv = 3.0;
      let page_ = p_lock5.length <= 7656805;
      do {
         p_lock5 = `${p_lock5.length - parseInt(`${modalX}`)}`;
         if (page_) {
            break;
         }
      } while (page_ && (awayv >= 4.10));
      zhuboi = `${statsm.length % (Math.max(9, productp.length))}`;
   while (2 < (group0.size << (Math.min(statsm.length, 3)))) {
      group0.set(zhuboi, 3);
      break;
   }
       let eighteenQ: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,117,114,101,95,120,95,57,51,0),String.fromCharCode(114,101,110,100,101,114,95,98,95,52,57,0)], [String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,109,95,52,48,0),String.fromCharCode(109,97,100,101,95,48,95,57,55,0)], [String.fromCharCode(120,95,53,55,95,115,111,117,110,100,115,0),String.fromCharCode(105,97,100,115,116,120,95,107,95,51,51,0)]]);
       let loadingd = 4.0;
         eighteenQ.set(`${loadingd}`, parseInt(`${loadingd}`));
         eighteenQ.set(`${loadingd}`, 1 ^ parseInt(`${loadingd}`));
         eighteenQ.set(`${loadingd}`, parseInt(`${loadingd}`) - 2);
      while (loadingd > parseFloat(`${eighteenQ.size}`)) {
         eighteenQ = new Map([[`${eighteenQ.size}`, parseInt(`${loadingd}`) - eighteenQ.size]]);
         break;
      }
      while (!Array.from(eighteenQ.values()).includes(loadingd)) {
          let configurej = String.fromCharCode(118,95,55,52,95,105,100,101,110,116,105,116,105,101,115,0);
          let appsZ = String.fromCharCode(105,95,52,54,95,112,111,115,105,116,105,111,110,115,0);
          let reminderJ = true;
          let inactivey = String.fromCharCode(115,95,50,55,95,98,117,110,100,108,101,0);
         loadingd -= (parseFloat(`${(reminderJ ? 4 : 3)}`));
         configurej = `${inactivey.length}`;
         appsZ += `${(inactivey == String.fromCharCode(86,0) ? appsZ.length : inactivey.length)}`;
         reminderJ = inactivey == appsZ;
         break;
      }
      for (let l = 0; l < 1; l++) {
         loadingd /= Math.max(3, parseFloat(`${eighteenQ.size ^ parseInt(`${loadingd}`)}`));
      }
      logo7 *= 3 << (Math.min(5, statsm.length));
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
                <Text style={{ ...textVariants.bigHeader, color: colors.text, fontSize: 20 }}>解说</Text>
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
