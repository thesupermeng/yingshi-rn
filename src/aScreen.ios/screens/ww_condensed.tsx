import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    Text,
    AppState,
} from 'react-native';
import ScreenContainer from '../components/container/ww_collection';
import { useInfiniteQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { wwPredictionarrowIncident } from '@type/ww_dycreator_result';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/ww_icon';
import MiniVideoList from '../components/videoPlayer/ww_mapping_roboto';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import NoConnection from './../components/common/ww_downarrow';
import NetInfo from '@react-native-community/netinfo';
import { wwShielddoneAlbum } from '@redux/reducers/ww_detail_mbsplash';
import { useAppSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';
import ww_runtime from '../../../Umeng/ww_runtime';
import { wwLaunch } from '@api';

type wwMiddleDirect = {
    data: {
        List: Array<wwPredictionarrowIncident>;
    };
};

type wwGradlew = {
    setPause: (pause: boolean) => void;
};

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const isFocused = useIsFocused();
    
    const [isInBackground, setIsInBackground] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const miniVodRef = useRef() as React.MutableRefObject<wwGradlew>;
    const miniVodListRef = useRef<any>();
    const [isPressTabScroll, setPressTabScroll] = useState(false);

    const settingsReducer: wwShielddoneAlbum = useAppSelector(
        ({ settingsReducer }: wwEighteenShirt) => settingsReducer
    );

    
    useFocusEffect(useCallback(() => {
        ww_runtime.watchAnytimeViewsAnalytics();
    }, []));
    

    
    useEffect(() => {
        const handleTabPress = () => {
       let basev = 3;
    let iconshareo = String.fromCharCode(104,97,112,116,105,99,0);
    let currentZ = 5;
    let exampleimageL = 5.0;
    let imagenetworkerrv = false;
    let turnL = String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,0);
    let whiteanimationlives = false;
    let frame_lV = String.fromCharCode(102,116,118,99,108,0);
    let lightR = 5;
    let volumew: Map<any, any> = new Map([[String.fromCharCode(111,119,110,101,100,0),468], [String.fromCharCode(118,101,108,111,99,105,116,121,0),975], [String.fromCharCode(97,118,112,105,99,116,117,114,101,0),934]]);
    let defaultfootballbgZ: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,101,109,111,100,101,0),String.fromCharCode(114,111,108,108,105,110,103,0)], [String.fromCharCode(101,110,106,105,110,0),String.fromCharCode(105,116,115,101,108,102,0)], [String.fromCharCode(116,114,97,110,115,113,117,97,110,116,0),String.fromCharCode(114,101,112,97,114,101,100,0)]]);
    let videoj = true;
    let clockm: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,0),String.fromCharCode(111,117,116,102,105,108,101,0)], [String.fromCharCode(112,97,114,116,121,0),String.fromCharCode(113,117,97,114,116,0)], [String.fromCharCode(109,97,99,104,0),String.fromCharCode(100,105,114,101,99,116,105,111,110,0)]]);
   let with_ws = frame_lV == String.fromCharCode(109,49,118,50,111,48,50,108,57,100,0);
   do {
      frame_lV = `${((whiteanimationlives ? 4 : 5) | 3)}`;
      if (with_ws) {
         break;
      }
   } while (with_ws && (frame_lV.length <= turnL.length));
      defaultfootballbgZ.set(frame_lV, 2 * lightR);
   while (exampleimageL < 3.90) {
      frame_lV = "3";
      break;
   }
   while (imagenetworkerrv) {
      defaultfootballbgZ = new Map([[`${defaultfootballbgZ.size}`, (frame_lV == String.fromCharCode(72,0) ? frame_lV.length : defaultfootballbgZ.size)]]);
      break;
   }

            if (isFocused && !isRefreshing) {

   if ((3 - defaultfootballbgZ.size) == 2) {
      imagenetworkerrv = !imagenetworkerrv;
   }
      imagenetworkerrv = 24 < turnL.length || defaultfootballbgZ.size < 24;
      exampleimageL *= ((imagenetworkerrv ? 1 : 3) * volumew.size);
   let incidentJ = 8675542 <= volumew.size;
   do {
      volumew = new Map([[`${lightR}`, frame_lV.length * 3]]);
      if (incidentJ) {
         break;
      }
   } while (incidentJ && (volumew.size == 2));
                handleRefresh();

   while ((1 * lightR) > 3) {
       let nbatrophyT = false;
       let activityL: Map<any, any> = new Map([[String.fromCharCode(105,115,100,105,103,105,116,0),286], [String.fromCharCode(97,101,115,0),513]]);
       let shootyesgoalD = true;
       let shrinkQ = 3.0;
         shrinkQ *= (parseFloat(`${(shootyesgoalD ? 5 : 2) | parseInt(`${shrinkQ}`)}`));
      let foregroundv = 8805806 <= activityL.size;
      do {
          let filedZ = 1;
          let klevin2 = 1;
          let gifgoalbge: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,105,109,103,105,110,116,0),833], [String.fromCharCode(116,110,112,117,116,0),478]]);
          let plusk = 2.0;
         activityL = new Map([[`${shootyesgoalD}`, parseInt(`${plusk}`) * 2]]);
         filedZ -= gifgoalbge.size;
         klevin2 ^= 3;
         gifgoalbge = new Map([[`${gifgoalbge.size}`, 1]]);
         plusk += klevin2;
         if (foregroundv) {
            break;
         }
      } while (foregroundv && ((activityL.size & 3) <= 1));
          let interstitialz = String.fromCharCode(105,113,109,102,0);
         shootyesgoalD = activityL.size < 92;
         interstitialz = `${interstitialz.length << (Math.min(Math.abs(1), 3))}`;
      for (let o = 0; o < 3; o++) {
          let dangerr: Map<any, any> = new Map([[String.fromCharCode(116,100,108,115,0),410], [String.fromCharCode(103,114,111,117,112,110,97,109,101,115,0),285], [String.fromCharCode(122,111,110,101,115,0),259]]);
         nbatrophyT = !shootyesgoalD;
         dangerr = new Map([[`${dangerr.size}`, 1 & dangerr.size]]);
      }
      if (activityL.get(`${shrinkQ}`) != null) {
         shrinkQ -= (parseFloat(`${parseInt(`${shrinkQ}`) & (shootyesgoalD ? 2 : 2)}`));
      }
         nbatrophyT = 100.42 > shrinkQ;
         shootyesgoalD = (100 <= ((!shootyesgoalD ? 100 : activityL.size) >> (Math.min(Math.abs(activityL.size), 4))));
      for (let r = 0; r < 3; r++) {
         shootyesgoalD = shrinkQ <= 94.52;
      }
      for (let o = 0; o < 2; o++) {
         shrinkQ -= (parseFloat(`${(shootyesgoalD ? 1 : 4) | 1}`));
      }
      let scores = shrinkQ <= 9395647.0;
      do {
         shrinkQ /= Math.max(parseFloat(`${3}`), 5);
         if (scores) {
            break;
         }
      } while ((!shootyesgoalD || (1.50 - shrinkQ) <= 3.100) && scores);
      if (!shootyesgoalD || (shrinkQ - 4.23) <= 1.57) {
         shootyesgoalD = activityL.size >= parseInt(`${shrinkQ}`);
      }
      if (nbatrophyT) {
          let castV = String.fromCharCode(112,114,105,111,114,105,116,121,0);
          let libyogaN: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,101,116,114,105,99,0),570], [String.fromCharCode(115,116,114,110,105,99,109,112,0),815]]);
          let sharek = false;
          let containerA = 0;
         activityL.set(`${shootyesgoalD}`, containerA ^ 1);
         castV = `${libyogaN.size >> (Math.min(Math.abs(3), 3))}`;
         libyogaN.set(`${sharek}`, 2);
         containerA &= castV.length | 2;
      }
      lightR /= Math.max(1, (defaultfootballbgZ.size % (Math.max(1, (nbatrophyT ? 1 : 1)))));
      break;
   }
      defaultfootballbgZ = new Map([[`${volumew.size}`, volumew.size]]);
   while (!iconshareo.startsWith(`${lightR}`)) {
      iconshareo += `${lightR}`;
      break;
   }
      whiteanimationlives = !whiteanimationlives;

                setPressTabScroll(true);

   while (turnL != iconshareo) {
      iconshareo += `${(iconshareo.length << (Math.min(3, Math.abs((imagenetworkerrv ? 5 : 5)))))}`;
      break;
   }
   for (let s = 0; s < 3; s++) {
      volumew = new Map([[`${defaultfootballbgZ.size}`, lightR / (Math.max(2, 2))]]);
   }
       let playI: Array<any> = [834, 569];
         playI.push(playI.length / 2);
      while (playI.length <= playI.length) {
         playI.push(playI.length % (Math.max(1, 9)));
         break;
      }
      for (let p = 0; p < 1; p++) {
          let service9 = String.fromCharCode(99,111,109,112,97,116,0);
          let xadsdky = String.fromCharCode(102,105,114,115,116,108,105,110,101,0);
         playI.push(2);
         service9 = `${service9.length}`;
         xadsdky += `${3 << (Math.min(2, service9.length))}`;
      }
      lightR -= 1;
   while (3 < (defaultfootballbgZ.size | 2)) {
       let play8 = true;
       let bnewinterstitial3 = String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,0);
      if (!bnewinterstitial3.startsWith(`${play8}`)) {
         bnewinterstitial3 += `${((play8 ? 5 : 3) * bnewinterstitial3.length)}`;
      }
       let h_viewo = 4.0;
       let infoh = 5.0;
       let whiteanimationlivej: Array<any> = [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,0), String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,0)];
         h_viewo /= Math.max(2, parseFloat(`${parseInt(`${h_viewo}`) % 2}`));
         h_viewo *= parseFloat(`${parseInt(`${infoh}`)}`);
      while (4.49 <= (infoh * h_viewo)) {
          let crownJ = String.fromCharCode(122,111,109,98,105,101,0);
          let redirectS: Array<any> = [455, 408];
          let albumO = String.fromCharCode(99,112,117,117,115,101,100,0);
          let pcopy_kwY = 5.0;
          let vignetteL: Map<any, any> = new Map([[String.fromCharCode(114,103,98,121,117,118,0),String.fromCharCode(109,111,118,105,110,103,0)], [String.fromCharCode(114,101,116,114,121,97,98,108,101,0),String.fromCharCode(102,105,108,101,115,121,115,116,101,109,0)]]);
         h_viewo -= (parseFloat(`${parseInt(`${h_viewo}`) >> (Math.min(1, Math.abs((play8 ? 1 : 2))))}`));
         crownJ = `${parseInt(`${pcopy_kwY}`)}`;
         redirectS.push(vignetteL.size);
         albumO = `${3 + vignetteL.size}`;
         pcopy_kwY /= Math.max(3, parseFloat(`${2}`));
         break;
      }
      defaultfootballbgZ = new Map([[`${defaultfootballbgZ.size}`, (defaultfootballbgZ.size >> (Math.min(1, Math.abs((whiteanimationlives ? 2 : 5)))))]]);
      break;
   }

                miniVodListRef.current?.scrollToIndex({
                    index: 0,
                    animated: true,
                });

      lightR *= 3 | turnL.length;
      currentZ &= 1 & defaultfootballbgZ.size;
   for (let a = 0; a < 2; a++) {
      defaultfootballbgZ.set(`${imagenetworkerrv}`, lightR);
   }
   let championi = 6833938 >= lightR;
   do {
      lightR &= volumew.size;
      if (championi) {
         break;
      }
   } while ((defaultfootballbgZ.get(`${lightR}`) == null) && championi);

                

   while (!imagenetworkerrv) {
       let mutedO = 4;
       let defaultplayerimg4 = String.fromCharCode(116,97,103,115,116,114,0);
       let typingb = String.fromCharCode(101,110,118,101,108,111,112,101,0);
       let expireds = false;
       let scrollview3 = String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,0);
         typingb += `${mutedO / 2}`;
      let predictionwina = typingb == String.fromCharCode(121,119,52,115,52,0);
      do {
         typingb = `${scrollview3.length}`;
         if (predictionwina) {
            break;
         }
      } while ((expireds) && predictionwina);
      let loginsuccessY = defaultplayerimg4.length >= 7568756;
      do {
         defaultplayerimg4 = `${(scrollview3 == String.fromCharCode(78,0) ? scrollview3.length : (expireds ? 2 : 1))}`;
         if (loginsuccessY) {
            break;
         }
      } while (loginsuccessY && (typingb.length < 5));
         defaultplayerimg4 = `${scrollview3.length | defaultplayerimg4.length}`;
      while (expireds) {
         defaultplayerimg4 = `${(defaultplayerimg4 == String.fromCharCode(121,0) ? defaultplayerimg4.length : typingb.length)}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
          let score_ = String.fromCharCode(104,111,108,100,0);
          let libfbjniq = String.fromCharCode(99,111,109,112,108,101,116,101,0);
          let gnewarchdefaultsA = String.fromCharCode(102,102,117,114,108,0);
          let assistb: Array<any> = [44, 441];
         defaultplayerimg4 = `${(libfbjniq == String.fromCharCode(79,0) ? (expireds ? 2 : 2) : libfbjniq.length)}`;
         score_ = `${assistb.length}`;
         gnewarchdefaultsA = `${3 | gnewarchdefaultsA.length}`;
         assistb = [assistb.length * gnewarchdefaultsA.length];
      }
      while (!expireds) {
         typingb = "2";
         break;
      }
         mutedO ^= mutedO;
         defaultplayerimg4 += "3";
      let eventsplashd = expireds ? !expireds : expireds;
      do {
          let classesc = true;
          let animationN = String.fromCharCode(114,101,99,105,112,105,101,110,116,0);
          let defaultfootballbgb = 3.0;
          let halffieldimaget = String.fromCharCode(98,101,105,110,103,0);
          let largebrightnessI = String.fromCharCode(100,105,110,101,114,115,0);
         expireds = (79 > (halffieldimaget.length << (Math.min(2, Math.abs((classesc ? 79 : halffieldimaget.length))))));
         classesc = String.fromCharCode(73,0) == animationN && defaultfootballbgb <= 56.54;
         animationN += "3";
         defaultfootballbgb += parseFloat(`${3}`);
         largebrightnessI += `${largebrightnessI.length}`;
         if (eventsplashd) {
            break;
         }
      } while ((4 > scrollview3.length) && eventsplashd);
         expireds = typingb.length <= 34;
      let change2 = typingb.length >= 6607390;
      do {
         typingb = `${mutedO / (Math.max(scrollview3.length, 8))}`;
         if (change2) {
            break;
         }
      } while (change2 && (3 <= defaultplayerimg4.length));
         typingb += `${(typingb == String.fromCharCode(81,0) ? typingb.length : mutedO)}`;
         mutedO /= Math.max(2, 1);
      for (let l = 0; l < 1; l++) {
         mutedO *= typingb.length;
      }
      imagenetworkerrv = (scrollview3.length / (Math.max(defaultplayerimg4.length, 7))) < 41;
      break;
   }
      basev &= 1;
       let interstitialn = String.fromCharCode(98,97,116,99,104,101,100,0);
       let path6 = String.fromCharCode(100,99,116,114,101,102,0);
         interstitialn += `${2 & path6.length}`;
       let iconbackwhitem: Map<any, any> = new Map([[String.fromCharCode(116,111,107,104,122,0),626], [String.fromCharCode(116,111,120,121,122,95,102,95,52,57,0),72], [String.fromCharCode(117,110,101,109,98,101,100,0),131]]);
      for (let z = 0; z < 1; z++) {
          let abouty: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,97,108,0),467], [String.fromCharCode(108,101,114,112,105,110,103,0),564], [String.fromCharCode(108,97,109,101,0),954]]);
         iconbackwhitem.set(interstitialn, iconbackwhitem.size ^ 3);
         abouty.set(`${abouty.size}`, abouty.size);
      }
         interstitialn = `${interstitialn.length}`;
      while (path6 == String.fromCharCode(55,0)) {
         interstitialn = `${path6.length}`;
         break;
      }
      if (path6.endsWith(`${iconbackwhitem.size}`)) {
         iconbackwhitem = new Map([[interstitialn, path6.length - 1]]);
      }
      iconshareo += `${((imagenetworkerrv ? 4 : 1) ^ 1)}`;
   let notificationfillemptyW = 7517760.0 <= exampleimageL;
   do {
      exampleimageL -= 1 >> (Math.min(3, turnL.length));
      if (notificationfillemptyW) {
         break;
      }
   } while (notificationfillemptyW && (!Array.from(defaultfootballbgZ.keys()).includes(`${exampleimageL}`)));
                setTimeout(() => {

      volumew.set(`${imagenetworkerrv}`, volumew.size);
      frame_lV += `${((whiteanimationlives ? 2 : 2) + (imagenetworkerrv ? 2 : 4))}`;
   if (volumew.size > exampleimageL) {
      volumew.set(`${basev}`, basev);
   }
   let mergerg = imagenetworkerrv ? !imagenetworkerrv : imagenetworkerrv;
   do {
       let rankR = 2;
         rankR <<= Math.min(Math.abs(rankR), 3);
         rankR &= 2 + rankR;
          let dropdownK = String.fromCharCode(112,97,121,109,97,115,116,101,114,0);
          let mappingY: Array<any> = [453, 366, 814];
          let styleu = String.fromCharCode(99,97,114,114,121,0);
         rankR |= rankR;
         dropdownK += `${1 % (Math.max(3, styleu.length))}`;
         mappingY = [mappingY.length >> (Math.min(Math.abs(2), 3))];
         styleu += `${styleu.length}`;
      imagenetworkerrv = 81 == defaultfootballbgZ.size;
      if (mergerg) {
         break;
      }
   } while (mergerg && (!whiteanimationlives));
                    setPressTabScroll(false);
                }, 500)
            }
        };
        const unsubscribe = navigation.addListener('tabPress', handleTabPress);
        
        return () => unsubscribe();
    }, [navigation, isFocused, isRefreshing]);


    const handleRefresh = useCallback(async () => {
       let flyerB = String.fromCharCode(105,115,110,111,116,116,97,112,0);
    let hinit_aqs = 1.0;
    let emojio = String.fromCharCode(97,108,108,111,119,115,0);
    let sellO = String.fromCharCode(116,111,103,103,108,105,110,103,0);
    let detailw = 4;
    let changeP = String.fromCharCode(98,101,122,101,108,0);
    let viewsm = false;
    let arrowupm = false;
    let twitterf: Array<any> = [665, 727];
    let memberm = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,0);
    let contextx = true;
    let proxy0 = String.fromCharCode(119,105,108,108,0);
      flyerB += `${1 ^ sellO.length}`;
      twitterf = [flyerB.length];
   for (let z = 0; z < 3; z++) {
      changeP += `${(String.fromCharCode(55,0) == emojio ? emojio.length : memberm.length)}`;
   }
   if (!emojio.includes(sellO)) {
      sellO += `${(emojio == String.fromCharCode(101,0) ? emojio.length : (arrowupm ? 2 : 4))}`;
   }
   for (let z = 0; z < 2; z++) {
       let disconnectedQ = String.fromCharCode(97,108,108,111,119,105,0);
          let network4 = String.fromCharCode(112,114,101,118,105,101,119,115,0);
          let reactnavigationu: Array<any> = [882, 623, 179];
          let librrcX = 5.0;
         disconnectedQ = `${parseInt(`${librrcX}`) - disconnectedQ.length}`;
         network4 += `${network4.length >> (Math.min(Math.abs(1), 1))}`;
         reactnavigationu.push((network4 == String.fromCharCode(56,0) ? network4.length : reactnavigationu.length));
         librrcX -= reactnavigationu.length | 3;
         disconnectedQ += `${disconnectedQ.length << (Math.min(disconnectedQ.length, 5))}`;
       let kuaishouO = 3.0;
      viewsm = 65 > detailw;
   }
       let playlistZ = 4;
       let inactiveW = 4;
       let whatsappf = String.fromCharCode(109,97,105,108,99,104,105,109,112,0);
          let sansz = String.fromCharCode(103,114,97,116,105,99,117,108,101,0);
         inactiveW *= playlistZ;
         sansz += `${sansz.length}`;
      let emptyg = 7640667 >= inactiveW;
      do {
         inactiveW /= Math.max(2 ^ playlistZ, 2);
         if (emptyg) {
            break;
         }
      } while (emptyg && (1 < (2 << (Math.min(1, Math.abs(inactiveW)))) && 2 < (whatsappf.length << (Math.min(1, Math.abs(inactiveW))))));
          let fastforwardL = 0;
          let stats3 = 1.0;
          let singler = String.fromCharCode(101,110,100,120,0);
         whatsappf = `${whatsappf.length | 1}`;
         fastforwardL &= fastforwardL;
         stats3 /= Math.max(parseFloat(`${parseInt(`${stats3}`)}`), 5);
         singler += `${parseInt(`${stats3}`) >> (Math.min(singler.length, 3))}`;
          let backj: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,0),String.fromCharCode(108,101,110,0)], [String.fromCharCode(115,101,110,100,116,111,0),String.fromCharCode(119,114,105,116,101,97,98,108,101,0)]]);
         inactiveW += playlistZ;
         backj = new Map([[`${backj.size}`, backj.size]]);
         whatsappf = `${whatsappf.length + inactiveW}`;
         inactiveW %= Math.max(1 & inactiveW, 3);
      for (let u = 0; u < 1; u++) {
         inactiveW /= Math.max(5, 1);
      }
          let orientation6 = 2.0;
         inactiveW <<= Math.min(Math.abs(3 & playlistZ), 3);
         orientation6 *= 1;
          let floatingU = String.fromCharCode(115,116,105,99,107,101,114,115,0);
          let dice3 = String.fromCharCode(115,117,109,109,97,114,105,101,115,0);
          let friendsv = String.fromCharCode(114,101,113,117,101,115,116,105,110,103,0);
         inactiveW |= (friendsv == String.fromCharCode(75,0) ? dice3.length : friendsv.length);
         floatingU = `${floatingU.length}`;
         dice3 = `${(floatingU == String.fromCharCode(97,0) ? floatingU.length : floatingU.length)}`;
      contextx = String.fromCharCode(76,0) == changeP;
   let moduleM = twitterf.length >= 8118943;
   do {
      twitterf = [(3 & (viewsm ? 4 : 2))];
      if (moduleM) {
         break;
      }
   } while ((5 >= (twitterf.length * memberm.length)) && moduleM);
      emojio += `${(String.fromCharCode(100,0) == emojio ? detailw : emojio.length)}`;
   while (!contextx) {
       let moon8: Array<any> = [963, 926];
       let videok = String.fromCharCode(115,107,101,119,0);
       let matches_ = String.fromCharCode(119,112,116,104,114,101,97,100,115,0);
       let libturbomodulejsijniw = 1.0;
       let country6 = String.fromCharCode(116,121,111,101,0);
       let nativemoduleP: Map<any, any> = new Map([[String.fromCharCode(105,110,118,115,98,111,120,0),895], [String.fromCharCode(98,105,116,97,108,108,111,99,0),767]]);
         moon8 = [3];
      for (let o = 0; o < 1; o++) {
         moon8.push(moon8.length >> (Math.min(5, Math.abs(nativemoduleP.size))));
      }
      if ((country6.length & moon8.length) <= 2 || 2 <= (2 & moon8.length)) {
          let overlayA = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,0);
         moon8 = [1];
         overlayA = `${overlayA.length * 1}`;
      }
      for (let r = 0; r < 3; r++) {
         libturbomodulejsijniw /= Math.max(parseFloat(`${nativemoduleP.size}`), 4);
      }
      for (let k = 0; k < 2; k++) {
         matches_ = `${(videok == String.fromCharCode(89,0) ? nativemoduleP.size : videok.length)}`;
      }
         matches_ = `${parseInt(`${libturbomodulejsijniw}`) % (Math.max(1, moon8.length))}`;
      while ((parseInt(`${libturbomodulejsijniw}`) / (Math.max(moon8.length, 3))) >= 2) {
         moon8.push(1);
         break;
      }
         matches_ += `${(String.fromCharCode(89,0) == videok ? videok.length : moon8.length)}`;
      while (videok.includes(`${nativemoduleP.size}`)) {
         nativemoduleP.set(videok, 1 % (Math.max(3, nativemoduleP.size)));
         break;
      }
      if (3 < (5 + country6.length) && (country6.length + 5) < 1) {
          let libavdevicem = String.fromCharCode(97,116,111,109,105,99,115,0);
         nativemoduleP = new Map([[`${nativemoduleP.size}`, 1 * libavdevicem.length]]);
      }
          let abidetectf = 1;
          let plashZ: Map<any, any> = new Map([[String.fromCharCode(120,121,119,104,0),false ], [String.fromCharCode(113,95,53,95,109,111,116,105,111,110,0),false ]]);
         country6 += `${plashZ.size}`;
         abidetectf *= 1 % (Math.max(3, abidetectf));
         plashZ = new Map([[`${abidetectf}`, abidetectf]]);
         libturbomodulejsijniw /= Math.max(3, parseFloat(`${videok.length}`));
      while (videok.length > 2) {
         matches_ += `${nativemoduleP.size % (Math.max(8, matches_.length))}`;
         break;
      }
      if (matches_.length >= parseInt(`${libturbomodulejsijniw}`)) {
         libturbomodulejsijniw /= Math.max(1, parseFloat(`${parseInt(`${libturbomodulejsijniw}`)}`));
      }
      changeP += `${3 & parseInt(`${libturbomodulejsijniw}`)}`;
      break;
   }

        setIsRefreshing(true);

      hinit_aqs *= parseFloat(`${parseInt(`${hinit_aqs}`)}`);
      viewsm = flyerB == changeP;
   let trophyk = String.fromCharCode(98,116,51,95,103,100,121,117,0) == emojio;
   do {
       let rewardx = 0;
       let matchesR = String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,0);
       let pingt = String.fromCharCode(98,105,116,119,114,105,116,101,114,0);
       let kuaishouA = 2.0;
      let constantsg = String.fromCharCode(110,110,101,119,113,52,0) == pingt;
      do {
         pingt += `${1 >> (Math.min(Math.abs(parseInt(`${kuaishouA}`)), 4))}`;
         if (constantsg) {
            break;
         }
      } while ((pingt.startsWith(matchesR)) && constantsg);
      for (let f = 0; f < 3; f++) {
         rewardx += rewardx * 3;
      }
      for (let l = 0; l < 1; l++) {
          let themee = 2.0;
          let slideri = 3;
          let friendsJ: Map<any, any> = new Map([[String.fromCharCode(105,109,100,99,116,0),false ], [String.fromCharCode(116,111,107,101,0),false ]]);
          let logoutr = String.fromCharCode(114,102,112,115,0);
          let bgvipxvod3 = 4;
         rewardx >>= Math.min(3, Math.abs(bgvipxvod3));
         themee /= Math.max(slideri * logoutr.length, 3);
         slideri -= parseInt(`${themee}`) * 1;
         friendsJ = new Map([[`${friendsJ.size}`, 1 << (Math.min(5, Math.abs(friendsJ.size)))]]);
         logoutr = "1";
      }
         pingt += `${parseInt(`${kuaishouA}`)}`;
         matchesR = `${2 * pingt.length}`;
         matchesR += `${parseInt(`${kuaishouA}`) % (Math.max(pingt.length, 2))}`;
      for (let u = 0; u < 3; u++) {
         rewardx >>= Math.min(Math.abs((pingt == String.fromCharCode(56,0) ? pingt.length : matchesR.length)), 2);
      }
      for (let z = 0; z < 1; z++) {
          let znewinterstitialg = 4.0;
          let stringy = String.fromCharCode(109,98,108,111,99,107,0);
          let memberq = 4;
          let untickp = 4.0;
          let fill9: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,110,100,101,100,0),757], [String.fromCharCode(102,117,110,99,115,0),113]]);
         pingt += `${rewardx}`;
         znewinterstitialg += parseFloat(`${parseInt(`${untickp}`) / 3}`);
         stringy += `${fill9.size >> (Math.min(Math.abs(1), 3))}`;
         memberq ^= (stringy == String.fromCharCode(103,0) ? fill9.size : stringy.length);
         untickp -= 3 & stringy.length;
      }
         rewardx /= Math.max(rewardx, 1);
          let dark8 = 3;
         pingt = "3";
         dark8 *= dark8 >> (Math.min(Math.abs(dark8), 3));
       let s_playerQ = String.fromCharCode(105,109,112,111,115,116,101,114,0);
       let textg: Array<any> = [252, 853, 749];
       let favoriteE: Array<any> = [747, 755];
      emojio = "3";
      if (trophyk) {
         break;
      }
   } while (trophyk && (5 < emojio.length));
   while ((emojio.length >> (Math.min(3, Math.abs(detailw)))) >= 1 || (1 >> (Math.min(5, emojio.length))) >= 3) {
       let eact1 = 3.0;
       let fcdaebecbcbafcdfceaaeccfeacdbV = true;
      for (let y = 0; y < 1; y++) {
          let connectiona = String.fromCharCode(104,119,117,112,108,111,97,100,0);
          let defaultlogoY = 5.0;
         fcdaebecbcbafcdfceaaeccfeacdbV = connectiona.length > 59;
         connectiona += `${parseInt(`${defaultlogoY}`) / (Math.max(parseInt(`${defaultlogoY}`), 9))}`;
      }
      let chinaZ = fcdaebecbcbafcdfceaaeccfeacdbV ? !fcdaebecbcbafcdfceaaeccfeacdbV : fcdaebecbcbafcdfceaaeccfeacdbV;
      do {
         fcdaebecbcbafcdfceaaeccfeacdbV = eact1 == 22.68 || fcdaebecbcbafcdfceaaeccfeacdbV;
         if (chinaZ) {
            break;
         }
      } while (chinaZ && (fcdaebecbcbafcdfceaaeccfeacdbV));
         eact1 *= parseFloat(`${1 / (Math.max(parseInt(`${eact1}`), 2))}`);
          let leagueX = false;
          let moviesT = String.fromCharCode(100,97,117,100,0);
         fcdaebecbcbafcdfceaaeccfeacdbV = !leagueX;
         moviesT += `${(moviesT == String.fromCharCode(108,0) ? moviesT.length : moviesT.length)}`;
         fcdaebecbcbafcdfceaaeccfeacdbV = eact1 > 93.81;
      for (let e = 0; e < 2; e++) {
          let utilsp = 2;
          let halfx = String.fromCharCode(112,108,97,116,101,97,117,0);
         fcdaebecbcbafcdfceaaeccfeacdbV = (86 < ((fcdaebecbcbafcdfceaaeccfeacdbV ? halfx.length : 86) * halfx.length));
         utilsp /= Math.max(4, utilsp >> (Math.min(Math.abs(1), 2)));
      }
      detailw /= Math.max((String.fromCharCode(74,0) == sellO ? sellO.length : (fcdaebecbcbafcdfceaaeccfeacdbV ? 4 : 2)), 1);
      break;
   }
   if (4 >= (twitterf.length - memberm.length)) {
       let const_i2 = String.fromCharCode(99,111,109,112,105,108,101,114,0);
      for (let o = 0; o < 3; o++) {
          let gemfileV = 3.0;
          let uploadX: Array<any> = [String.fromCharCode(112,111,115,105,116,105,111,110,115,0), String.fromCharCode(116,121,112,101,0)];
          let whatsappm = String.fromCharCode(114,101,102,101,114,0);
          let ping9 = String.fromCharCode(114,102,99,116,0);
         const_i2 = `${const_i2.length & 1}`;
         gemfileV += 2 << (Math.min(Math.abs(parseInt(`${gemfileV}`)), 1));
         uploadX = [parseInt(`${gemfileV}`) - uploadX.length];
         whatsappm = `${3 >> (Math.min(Math.abs(parseInt(`${gemfileV}`)), 3))}`;
         ping9 = "3";
      }
      for (let u = 0; u < 3; u++) {
         const_i2 = `${const_i2.length}`;
      }
         const_i2 += `${const_i2.length << (Math.min(4, const_i2.length))}`;
      memberm = `${changeP.length % (Math.max(2, parseInt(`${hinit_aqs}`)))}`;
   }
   while (contextx && 1 < (detailw ^ 1)) {
      detailw -= memberm.length;
      break;
   }
      emojio += `${((viewsm ? 3 : 2))}`;
   if (5 >= flyerB.length) {
      sellO = `${changeP.length}`;
   }
       let sportJ = 0;
         sportJ %= Math.max(2, sportJ / 2);
      for (let z = 0; z < 2; z++) {
         sportJ += 3;
      }
      for (let y = 0; y < 2; y++) {
         sportJ += sportJ;
      }
      hinit_aqs *= (parseFloat(`${memberm == String.fromCharCode(110,0) ? memberm.length : (contextx ? 4 : 4)}`));
        

   while (hinit_aqs == 5.30) {
      hinit_aqs -= (parseFloat(`${(contextx ? 3 : 1) / 1}`));
      break;
   }
   if ((twitterf.length << (Math.min(Math.abs(4), 5))) >= 5) {
      twitterf = [((viewsm ? 2 : 2) ^ (contextx ? 1 : 2))];
   }
   if (!changeP.startsWith(`${hinit_aqs}`)) {
      hinit_aqs *= parseFloat(`${flyerB.length}`);
   }
   while (3.48 == (hinit_aqs * 4.6) && 2.87 == (4.6 * hinit_aqs)) {
      hinit_aqs += (parseFloat(`${memberm == String.fromCharCode(108,0) ? memberm.length : parseInt(`${hinit_aqs}`)}`));
      break;
   }
       let champion5: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,100,101,110,100,0),String.fromCharCode(117,110,97,115,115,105,103,110,101,100,0)], [String.fromCharCode(109,99,111,109,112,97,110,100,0),String.fromCharCode(118,115,102,114,97,109,101,0)], [String.fromCharCode(114,101,99,114,101,97,116,101,0),String.fromCharCode(99,111,112,121,120,110,0)]]);
      let popupW = champion5.size >= 8567359;
      do {
          let sentryH = 2.0;
          let modalL = 0.0;
         champion5 = new Map([[`${sentryH}`, parseInt(`${modalL}`)]]);
         if (popupW) {
            break;
         }
      } while ((2 <= (champion5.size >> (Math.min(Math.abs(champion5.size), 5))) || 1 <= (champion5.size >> (Math.min(Math.abs(2), 1)))) && popupW);
         champion5.set(`${champion5.size}`, champion5.size);
         champion5.set(`${champion5.size}`, 1 - champion5.size);
      twitterf.push(twitterf.length);
       let lang3 = String.fromCharCode(109,97,106,0);
       let clock5 = 2.0;
         lang3 += `${lang3.length >> (Math.min(3, Math.abs(parseInt(`${clock5}`))))}`;
      for (let a = 0; a < 3; a++) {
          let middlebrightnessA = 1.0;
          let libruntimeexecutorQ: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,114,118,101,0),String.fromCharCode(98,117,115,121,0)], [String.fromCharCode(116,98,108,104,100,114,0),String.fromCharCode(98,105,110,107,100,115,112,0)], [String.fromCharCode(98,105,103,105,110,116,0),String.fromCharCode(112,105,120,109,102,116,115,0)]]);
          let corner2 = false;
          let mbsplashC = true;
         clock5 -= parseFloat(`${lang3.length}`);
         middlebrightnessA += (parseFloat(`${1 >> (Math.min(5, Math.abs((corner2 ? 2 : 4))))}`));
         libruntimeexecutorQ.set(`${middlebrightnessA}`, 1 << (Math.min(Math.abs(parseInt(`${middlebrightnessA}`)), 2)));
         corner2 = 81.26 < middlebrightnessA;
         mbsplashC = !corner2 && libruntimeexecutorQ.size == 11;
      }
         clock5 *= parseFloat(`${1 ^ lang3.length}`);
          let static_9P = 1.0;
         lang3 = `${2 | parseInt(`${static_9P}`)}`;
          let r_manageri = String.fromCharCode(99,118,116,121,117,118,116,111,0);
          let untick0 = 5;
         lang3 += `${parseInt(`${clock5}`) ^ 2}`;
         r_manageri += `${r_manageri.length}`;
         untick0 &= r_manageri.length | 1;
         clock5 *= parseFloat(`${parseInt(`${clock5}`)}`);
      sellO = `${(changeP == String.fromCharCode(98,0) ? changeP.length : (viewsm ? 1 : 4))}`;
   if (flyerB.length < twitterf.length) {
      twitterf = [1];
   }
      twitterf.push(2 / (Math.max(8, parseInt(`${hinit_aqs}`))));
   for (let n = 0; n < 1; n++) {
      hinit_aqs /= Math.max(3, parseFloat(`${memberm.length}`));
   }
        await refetch();

       let phoneD = 0;
       let tickh = true;
       let roomB = true;
      if (tickh) {
         tickh = 66 > phoneD;
      }
      if (3 == phoneD && (phoneD ^ 3) == 3) {
         phoneD /= Math.max(((roomB ? 1 : 1)), 5);
      }
      if (3 >= phoneD) {
          let found7 = false;
         roomB = (tickh ? !roomB : tickh);
         found7 = !found7 || !found7;
      }
       let becomeZ: Map<any, any> = new Map([[String.fromCharCode(120,95,56,55,95,97,118,112,114,105,118,0),704], [String.fromCharCode(99,111,110,102,111,114,109,115,0),185], [String.fromCharCode(105,110,100,105,99,97,116,111,114,115,0),835]]);
          let alert7 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,0);
          let previewq = String.fromCharCode(115,117,109,0);
          let materialw: Map<any, any> = new Map([[String.fromCharCode(101,120,114,100,115,112,0),false ], [String.fromCharCode(97,110,116,105,0),true ]]);
         phoneD -= 1 << (Math.min(2, previewq.length));
         alert7 += `${materialw.size}`;
         previewq += `${alert7.length}`;
         materialw.set(`${alert7}`, materialw.size);
      for (let e = 0; e < 1; e++) {
         roomB = (tickh ? roomB : !tickh);
      }
       let greenm = String.fromCharCode(115,116,97,99,107,0);
       let network7 = String.fromCharCode(112,114,101,116,119,105,100,100,108,101,0);
       let info2 = String.fromCharCode(118,100,101,98,117,103,0);
       let s_titleG = String.fromCharCode(117,110,114,101,102,99,111,117,110,116,0);
      for (let g = 0; g < 3; g++) {
         info2 += "2";
      }
      detailw <<= Math.min(5, flyerB.length);
       let customl = 5.0;
       let footballfiledlayoute = String.fromCharCode(100,110,120,104,100,100,97,116,97,0);
      if ((footballfiledlayoute.length - parseInt(`${customl}`)) == 4) {
         footballfiledlayoute += `${parseInt(`${customl}`) | 1}`;
      }
         customl *= parseFloat(`${3}`);
      if (footballfiledlayoute.endsWith(`${customl}`)) {
         customl += parseFloat(`${footballfiledlayoute.length}`);
      }
      for (let t = 0; t < 1; t++) {
         footballfiledlayoute += `${parseInt(`${customl}`) >> (Math.min(footballfiledlayoute.length, 4))}`;
      }
         footballfiledlayoute += `${footballfiledlayoute.length}`;
       let clear6 = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,0);
      twitterf.push(changeP.length + 3);
      hinit_aqs -= parseFloat(`${emojio.length % (Math.max(1, 3))}`);
      detailw |= ((arrowupm ? 5 : 4));
      emojio = `${((arrowupm ? 5 : 4) >> (Math.min(Math.abs(2), 1)))}`;
      changeP = `${3 >> (Math.min(4, sellO.length))}`;
   for (let w = 0; w < 3; w++) {
      detailw &= (emojio == String.fromCharCode(114,0) ? twitterf.length : emojio.length);
   }
   let libcrashsdkt = contextx ? !contextx : contextx;
   do {
       let privacyE = 3;
          let middlebrightness7 = 3.0;
         privacyE &= 1 + parseInt(`${middlebrightness7}`);
         privacyE += 3;
      for (let x = 0; x < 3; x++) {
          let sansh: Array<any> = [553, 85];
          let fastforwardR = String.fromCharCode(115,117,109,120,0);
          let libimagepipelineT = true;
          let singleH: Array<any> = [272, 726];
         privacyE -= fastforwardR.length & privacyE;
         sansh.push(singleH.length);
         fastforwardR = `${3 & sansh.length}`;
         singleH = [((libimagepipelineT ? 3 : 4) << (Math.min(Math.abs(2), 1)))];
      }
      contextx = viewsm;
      if (libcrashsdkt) {
         break;
      }
   } while (libcrashsdkt && (emojio.length > 2));
   let libjsinspectorC = changeP.length <= 5026467;
   do {
       let pangleo = 4.0;
       let gradlel = 2;
          let libzeuss: Array<any> = [822, 758];
          let reactnavigation2 = String.fromCharCode(119,101,101,107,0);
          let cornerE: Array<any> = [960, 801];
         gradlel >>= Math.min(1, Math.abs(3 % (Math.max(5, gradlel))));
         libzeuss.push(reactnavigation2.length);
         reactnavigation2 = "2";
         cornerE.push(libzeuss.length);
      if ((pangleo + 4.84) == 1.48) {
         pangleo += parseFloat(`${2}`);
      }
         pangleo -= parseFloat(`${3}`);
      while (3.8 <= (pangleo / 2.93) && 5 <= (gradlel + 5)) {
         pangleo += parseFloat(`${gradlel}`);
         break;
      }
         pangleo *= parseFloat(`${gradlel}`);
         pangleo += parseFloat(`${parseInt(`${pangleo}`) - gradlel}`);
      changeP = `${3 - parseInt(`${hinit_aqs}`)}`;
      if (libjsinspectorC) {
         break;
      }
   } while (libjsinspectorC && (!emojio.includes(`${changeP.length}`)));
        setIsRefreshing(false);

      viewsm = changeP == memberm;
      sellO = `${changeP.length}`;
   for (let k = 0; k < 1; k++) {
      twitterf = [(3 * (viewsm ? 5 : 5))];
   }
   while (4 > (detailw / (Math.max(6, twitterf.length))) && (detailw / 4) > 4) {
       let thumbnaild: Array<any> = [62, 182, 53];
       let questiconl = String.fromCharCode(98,101,104,97,118,105,111,117,114,0);
       let filters = 4.0;
       let topicD = String.fromCharCode(109,111,100,105,102,121,95,113,95,52,53,0);
      if (2 >= questiconl.length) {
         filters -= parseFloat(`${2}`);
      }
       let liveendmodallogoL: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,0),false ], [String.fromCharCode(115,112,108,105,116,116,101,114,0),false ], [String.fromCharCode(114,101,102,112,105,99,0),true ]]);
       let bggradienta = String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,0);
         topicD += `${bggradienta.length << (Math.min(Math.abs(2), 4))}`;
         topicD += "1";
         questiconl = `${liveendmodallogoL.size / (Math.max(1, 3))}`;
      if (1 < questiconl.length) {
          let splashe: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,0),452], [String.fromCharCode(120,95,54,95,116,114,101,120,0),547]]);
         questiconl = `${questiconl.length | 2}`;
         splashe = new Map([[`${splashe.size}`, splashe.size % (Math.max(5, splashe.size))]]);
      }
          let mapbuffera = String.fromCharCode(117,112,115,97,109,112,108,101,0);
          let selectq = 2.0;
          let hiad4 = 4.0;
         liveendmodallogoL = new Map([[bggradienta, bggradienta.length]]);
         mapbuffera = "3";
         selectq -= parseFloat(`${parseInt(`${hiad4}`)}`);
          let libturbomodulejsijniF = 2;
          let iconuserL = true;
          let countryT = 2.0;
         topicD += `${2 - liveendmodallogoL.size}`;
         libturbomodulejsijniF += (libturbomodulejsijniF + (iconuserL ? 5 : 1));
         iconuserL = !iconuserL;
         countryT += libturbomodulejsijniF;
       let math9 = String.fromCharCode(100,101,99,105,109,97,116,111,114,0);
         liveendmodallogoL.set(math9, (math9 == String.fromCharCode(112,0) ? math9.length : thumbnaild.length));
         thumbnaild = [math9.length / (Math.max(3, topicD.length))];
      twitterf.push(2);
      break;
   }
      sellO += `${((viewsm ? 1 : 1))}`;
   if (2 <= changeP.length) {
       let feedbackt = String.fromCharCode(114,101,109,98,0);
       let canvasg = String.fromCharCode(110,111,100,111,119,110,0);
       let membershipJ: Array<any> = [422, 626, 376];
       let imagenetworkerrH = String.fromCharCode(108,111,116,116,105,101,118,105,101,119,0);
          let stationW: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,101,114,0),true ], [String.fromCharCode(108,105,110,117,120,0),false ], [String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0),true ]]);
          let firebase3 = String.fromCharCode(97,99,114,111,110,121,109,115,0);
          let twitterZ = String.fromCharCode(103,101,116,116,101,114,0);
         canvasg += `${feedbackt.length << (Math.min(Math.abs(1), 1))}`;
         stationW.set(firebase3, firebase3.length * twitterZ.length);
         twitterZ = "2";
       let trash0: Map<any, any> = new Map([[String.fromCharCode(112,116,104,114,101,97,100,0),true ], [String.fromCharCode(113,109,98,108,0),true ]]);
         trash0 = new Map([[imagenetworkerrH, 2 + feedbackt.length]]);
          let dependencies0: Array<any> = [917, 281, 124];
          let mbnativeadvancedt = true;
         feedbackt = `${dependencies0.length}`;
         dependencies0.push(2);
      let closeW = 7937839 >= canvasg.length;
      do {
         canvasg = `${(String.fromCharCode(117,0) == imagenetworkerrH ? imagenetworkerrH.length : trash0.size)}`;
         if (closeW) {
            break;
         }
      } while (closeW && (!feedbackt.startsWith(`${canvasg.length}`)));
      while (!imagenetworkerrH.startsWith(`${membershipJ.length}`)) {
         imagenetworkerrH += `${canvasg.length}`;
         break;
      }
         imagenetworkerrH = "3";
          let filede = 2.0;
         imagenetworkerrH = `${parseInt(`${filede}`)}`;
      let yellowanimationliveI = trash0.size <= 5523481;
      do {
         trash0.set(canvasg, imagenetworkerrH.length + canvasg.length);
         if (yellowanimationliveI) {
            break;
         }
      } while (yellowanimationliveI && (5 < (trash0.size ^ 5) || 1 < (imagenetworkerrH.length ^ 5)));
      let bgvipxvodi = String.fromCharCode(108,95,53,116,0) == imagenetworkerrH;
      do {
         imagenetworkerrH = "3";
         if (bgvipxvodi) {
            break;
         }
      } while (((2 + imagenetworkerrH.length) < 3 && 1 < (2 + imagenetworkerrH.length)) && bgvipxvodi);
         feedbackt = `${(feedbackt == String.fromCharCode(81,0) ? imagenetworkerrH.length : feedbackt.length)}`;
      if (feedbackt.length <= canvasg.length) {
         canvasg = `${1 % (Math.max(9, membershipJ.length))}`;
      }
      changeP += `${membershipJ.length | 2}`;
   }
      viewsm = !contextx && emojio.length > 27;
   for (let f = 0; f < 2; f++) {
       let iconsettingN = String.fromCharCode(114,97,115,116,101,114,0);
      let reviewn = iconsettingN.length >= 7005900;
      do {
         iconsettingN = `${1 * iconsettingN.length}`;
         if (reviewn) {
            break;
         }
      } while (reviewn && (iconsettingN != String.fromCharCode(79,0) || iconsettingN != String.fromCharCode(90,0)));
      for (let p = 0; p < 1; p++) {
          let nterstitial4 = 3;
          let proxyV = false;
          let termsy = 2.0;
         iconsettingN = "1";
         nterstitial4 /= Math.max(5, ((proxyV ? 4 : 4) % (Math.max(parseInt(`${termsy}`), 3))));
         proxyV = proxyV && 17 >= nterstitial4;
         termsy -= parseFloat(`${3 - parseInt(`${termsy}`)}`);
      }
      if (iconsettingN.length == 2) {
         iconsettingN = `${iconsettingN.length * iconsettingN.length}`;
      }
      memberm += `${emojio.length}`;
   }
       let neonk: Array<any> = [165, 268, 203];
       let launchi: Array<any> = [785, 173, 408];
       let bgvipxvodt: Map<any, any> = new Map([[String.fromCharCode(114,111,119,115,0),704], [String.fromCharCode(105,110,102,108,97,116,101,0),483], [String.fromCharCode(122,95,55,51,95,112,103,115,122,0),625]]);
         launchi = [bgvipxvodt.size];
          let yellowredcardA = String.fromCharCode(109,111,110,116,104,115,0);
         bgvipxvodt = new Map([[`${neonk.length}`, neonk.length >> (Math.min(Math.abs(1), 3))]]);
         yellowredcardA += `${(String.fromCharCode(98,0) == yellowredcardA ? yellowredcardA.length : yellowredcardA.length)}`;
      if (5 >= neonk.length) {
         neonk = [bgvipxvodt.size * 1];
      }
      if (1 < (5 >> (Math.min(5, neonk.length)))) {
         neonk.push(bgvipxvodt.size);
      }
      let sinit_jA = neonk.length >= 5282072;
      do {
          let friendsR = 4;
          let nterstitialg = String.fromCharCode(98,111,117,110,100,97,114,121,0);
          let videovarj = String.fromCharCode(98,103,114,97,0);
          let suggestionm = 2.0;
          let mbridgeX = 3.0;
         neonk.push(parseInt(`${mbridgeX}`));
         friendsR &= (String.fromCharCode(115,0) == videovarj ? nterstitialg.length : videovarj.length);
         nterstitialg = `${nterstitialg.length}`;
         suggestionm += friendsR;
         mbridgeX *= 2;
         if (sinit_jA) {
            break;
         }
      } while (sinit_jA && (2 <= launchi.length));
         launchi = [1 & neonk.length];
      let catalogd = 5681464 >= launchi.length;
      do {
         launchi.push(launchi.length % (Math.max(2, 3)));
         if (catalogd) {
            break;
         }
      } while (catalogd && (3 < (bgvipxvodt.size << (Math.min(3, launchi.length)))));
      let logouserD = 6509813 <= launchi.length;
      do {
          let mode7: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,0),String.fromCharCode(116,117,114,98,117,108,101,110,99,101,0)], [String.fromCharCode(99,111,110,102,108,105,99,116,115,0),String.fromCharCode(119,97,116,99,104,100,111,103,0)]]);
          let screenE = String.fromCharCode(98,108,117,114,108,101,115,115,0);
         launchi.push(screenE.length);
         mode7 = new Map([[`${mode7.size}`, 1]]);
         screenE += `${2 << (Math.min(5, Math.abs(mode7.size)))}`;
         if (logouserD) {
            break;
         }
      } while ((Array.from(bgvipxvodt.values()).includes(launchi.length)) && logouserD);
          let currenty = String.fromCharCode(105,95,49,50,95,111,112,117,115,0);
         launchi = [bgvipxvodt.size];
         currenty += "1";
      hinit_aqs -= parseFloat(`${emojio.length / (Math.max(3, 7))}`);
        return;
    }, []);

    const [flattenedVideos, setFlattenedVideos] = useState(Array<wwPredictionarrowIncident>);
    const LIMIT = 300;
    const fetchVods = (page: number) => wwLaunch.getListByPage({
        page,
        limit: LIMIT,
    }).then((result) => result.List);

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
       let giflivestreamingm = String.fromCharCode(115,112,97,119,110,97,98,108,101,0);
    let iconnewsshare2 = 3.0;
    let shareQ = String.fromCharCode(100,111,103,0);
    let countryV: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,98,111,120,0),String.fromCharCode(108,105,115,116,105,110,103,115,0)], [String.fromCharCode(118,105,100,101,111,115,0),String.fromCharCode(99,111,110,97,110,102,105,108,101,0)], [String.fromCharCode(113,117,97,110,116,105,122,101,100,0),String.fromCharCode(99,104,112,108,0)]]);
    let nextf = 2;
    let constantsA: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,0),true ], [String.fromCharCode(100,114,97,119,0),true ], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,0),true ]]);
    let updatesw = String.fromCharCode(114,101,116,117,114,110,115,0);
    let pathF = String.fromCharCode(108,105,110,101,97,114,95,104,95,56,55,0);
    let frame_r5q: Array<any> = [759, 945];
    let clock5 = 2.0;
    let videojs8 = 1.0;
    let headerB = String.fromCharCode(100,114,97,119,97,98,108,101,0);
   for (let j = 0; j < 3; j++) {
       let main_lj: Map<any, any> = new Map([[String.fromCharCode(105,114,100,102,116,0),584], [String.fromCharCode(98,101,97,116,0),164], [String.fromCharCode(101,112,111,108,108,0),72]]);
       let optionsK = 4;
       let description_mnS = String.fromCharCode(119,105,116,104,0);
         description_mnS += `${3 + optionsK}`;
          let gradleK = true;
         optionsK |= (String.fromCharCode(101,0) == description_mnS ? main_lj.size : description_mnS.length);
         gradleK = (!gradleK ? gradleK : !gradleK);
      for (let w = 0; w < 3; w++) {
         optionsK += 3;
      }
      for (let v = 0; v < 2; v++) {
         optionsK /= Math.max(4, description_mnS.length / (Math.max(9, main_lj.size)));
      }
      let assistU = description_mnS == String.fromCharCode(103,121,52,109,120,118,119,0);
      do {
         description_mnS = `${3 << (Math.min(5, Math.abs(main_lj.size)))}`;
         if (assistU) {
            break;
         }
      } while (assistU && ((main_lj.size ^ 4) == 2 && (main_lj.size ^ 4) == 4));
          let sigmobj = String.fromCharCode(115,117,98,112,97,114,116,0);
         description_mnS = `${(String.fromCharCode(107,0) == sigmobj ? sigmobj.length : description_mnS.length)}`;
          let buttonv = String.fromCharCode(101,114,114,108,111,103,0);
          let backI = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,0);
         main_lj = new Map([[buttonv, (String.fromCharCode(51,0) == buttonv ? buttonv.length : optionsK)]]);
         backI = `${backI.length + backI.length}`;
          let iconfeedbackx = String.fromCharCode(112,114,101,115,101,110,99,101,0);
          let libruntimeexecutorA: Map<any, any> = new Map([[String.fromCharCode(116,95,54,57,0),817], [String.fromCharCode(97,112,112,114,111,118,101,100,95,118,95,55,52,0),146]]);
         optionsK += 2 << (Math.min(1, iconfeedbackx.length));
         iconfeedbackx = `${libruntimeexecutorA.size >> (Math.min(3, Math.abs(libruntimeexecutorA.size)))}`;
      while (main_lj.get(`${optionsK}`) != null) {
         optionsK /= Math.max(4, optionsK);
         break;
      }
      frame_r5q = [optionsK];
   }
   if (!updatesw.endsWith(`${countryV.size}`)) {
       let rulesJ = String.fromCharCode(107,101,101,112,105,110,103,0);
      while (!rulesJ.startsWith(rulesJ)) {
          let review_: Map<any, any> = new Map([[String.fromCharCode(100,101,108,101,103,97,116,111,114,0),572], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,0),620], [String.fromCharCode(121,117,118,116,101,115,116,0),506]]);
          let iconF = String.fromCharCode(115,101,113,117,101,110,116,105,97,108,0);
          let static_7wa: Map<any, any> = new Map([[String.fromCharCode(115,99,114,111,108,108,105,110,103,0),false ], [String.fromCharCode(114,101,100,117,99,101,114,0),true ], [String.fromCharCode(119,101,98,109,0),true ]]);
          let reducerO: Array<any> = [804, 249, 621];
          let cornerkickN = true;
         rulesJ += `${(String.fromCharCode(98,0) == iconF ? static_7wa.size : iconF.length)}`;
         review_.set(`${cornerkickN}`, reducerO.length - 3);
         static_7wa.set(`${cornerkickN}`, reducerO.length);
         break;
      }
       let saveT: Array<any> = [75, 799];
       let plusy: Array<any> = [String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,0), String.fromCharCode(108,105,118,101,0), String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,115,0)];
      let storeK = 6679687 >= plusy.length;
      do {
          let sellK: Map<any, any> = new Map([[String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,0),117], [String.fromCharCode(114,101,102,99,111,117,110,116,101,114,0),690], [String.fromCharCode(120,114,117,110,95,108,95,52,55,0),885]]);
          let minivodW = 2.0;
          let sentryb = 0.0;
          let trashj = 4.0;
          let headerE = String.fromCharCode(117,121,118,121,0);
         plusy.push(1 * sellK.size);
         sellK = new Map([[`${minivodW}`, parseInt(`${minivodW}`)]]);
         sentryb += parseInt(`${trashj}`);
         trashj += parseFloat(`${parseInt(`${sentryb}`)}`);
         headerE += `${headerE.length | parseInt(`${trashj}`)}`;
         if (storeK) {
            break;
         }
      } while (storeK && (3 > (3 * rulesJ.length) || 3 > (plusy.length * rulesJ.length)));
      updatesw += `${updatesw.length}`;
   }
       let calendarM = 3;
       let rightM = false;
       let bdxadsdkF: Array<any> = [606, 748];
      if (!rightM) {
          let borderlessu: Map<any, any> = new Map([[String.fromCharCode(109,121,113,114,0),725], [String.fromCharCode(100,101,115,105,103,110,0),627], [String.fromCharCode(106,111,121,102,117,108,0),707]]);
         rightM = calendarM < bdxadsdkF.length;
         borderlessu = new Map([[`${borderlessu.size}`, borderlessu.size << (Math.min(Math.abs(1), 3))]]);
      }
      for (let f = 0; f < 2; f++) {
         bdxadsdkF.push((calendarM ^ (rightM ? 4 : 5)));
      }
         rightM = bdxadsdkF.includes(rightM);
         bdxadsdkF.push(bdxadsdkF.length >> (Math.min(Math.abs(2), 4)));
         rightM = 33 == calendarM;
         bdxadsdkF = [3 ^ calendarM];
         rightM = calendarM > 77 || !rightM;
      let updatesb = 5979342 <= bdxadsdkF.length;
      do {
         bdxadsdkF.push(((rightM ? 3 : 2) >> (Math.min(bdxadsdkF.length, 4))));
         if (updatesb) {
            break;
         }
      } while ((3 <= (bdxadsdkF.length | calendarM) && (calendarM | 3) <= 3) && updatesb);
      for (let u = 0; u < 2; u++) {
          let transfere = false;
          let favicont: Array<any> = [String.fromCharCode(105,110,112,111,115,0), String.fromCharCode(105,110,116,112,0)];
         rightM = favicont.length == 68;
         transfere = (!transfere ? transfere : transfere);
         favicont = [1];
      }
      videojs8 += ((rightM ? 3 : 4) / (Math.max(parseInt(`${iconnewsshare2}`), 8)));
       let librrcG = String.fromCharCode(99,109,112,97,100,100,114,0);
       let sentry5 = 4;
         librrcG += `${librrcG.length ^ 1}`;
      for (let n = 0; n < 1; n++) {
         librrcG = `${librrcG.length}`;
      }
         sentry5 ^= librrcG.length / 3;
          let carouselK = String.fromCharCode(104,95,49,95,109,97,107,101,99,116,0);
          let libjsip = String.fromCharCode(97,100,100,114,115,0);
         librrcG = `${libjsip.length}`;
         carouselK = `${carouselK.length / (Math.max(carouselK.length, 8))}`;
         libjsip = `${carouselK.length}`;
       let loadingc = String.fromCharCode(122,111,110,101,105,110,102,111,0);
       let libjsinspectorf: Array<any> = [String.fromCharCode(98,121,116,101,115,116,114,105,110,103,95,103,95,51,53,0), String.fromCharCode(105,109,112,108,0)];
      giflivestreamingm += `${3 / (Math.max(4, constantsA.size))}`;
       let controlsa = 2.0;
      if ((controlsa - controlsa) > 3.23 || 3.23 > (controlsa - controlsa)) {
          let adultp = 5.0;
          let sentryf = 3.0;
          let yingS = false;
          let catalogI: Map<any, any> = new Map([[String.fromCharCode(114,101,97,99,116,0),649], [String.fromCharCode(115,117,98,115,97,109,112,0),237]]);
         controlsa /= Math.max(4, parseFloat(`${parseInt(`${adultp}`) % (Math.max(catalogI.size, 4))}`));
         adultp *= parseInt(`${sentryf}`) >> (Math.min(5, Math.abs(2)));
         sentryf *= parseFloat(`${1 / (Math.max(3, parseInt(`${sentryf}`)))}`);
         yingS = yingS && 79.0 >= sentryf;
         catalogI.set(`${sentryf}`, ((yingS ? 1 : 2) ^ parseInt(`${sentryf}`)));
      }
      if (3.67 == (controlsa * controlsa) || 3.67 == (controlsa * controlsa)) {
         controlsa *= parseFloat(`${parseInt(`${controlsa}`) % 2}`);
      }
      let thumbnailN = 6470439.0 <= controlsa;
      do {
          let imagemanagerg = true;
          let contextj = true;
          let dragj = String.fromCharCode(109,98,101,100,116,108,115,0);
         controlsa *= (parseFloat(`${parseInt(`${controlsa}`) ^ (imagemanagerg ? 1 : 3)}`));
         imagemanagerg = dragj.startsWith(`${contextj}`);
         contextj = (((contextj ? 69 : dragj.length) % (Math.max(dragj.length, 10))) < 69);
         if (thumbnailN) {
            break;
         }
      } while (((2 * controlsa) < 3.99) && thumbnailN);
      clock5 /= Math.max(3, parseFloat(`${updatesw.length}`));
   for (let n = 0; n < 2; n++) {
      videojs8 += pathF.length;
   }
       let middleT = 0.0;
       let dialogp = String.fromCharCode(118,95,57,57,95,102,109,97,100,100,0);
         middleT += parseFloat(`${2}`);
          let footballH = 2;
          let disconnectedlogoz = String.fromCharCode(119,114,111,116,101,0);
         middleT /= Math.max(parseFloat(`${dialogp.length / 1}`), 5);
         footballH *= 2 + disconnectedlogoz.length;
         disconnectedlogoz = `${footballH}`;
          let predictionarrowC = 1;
          let private_6U = String.fromCharCode(102,105,110,97,108,105,122,101,100,0);
          let libanem = 4.0;
         dialogp += `${private_6U.length * parseInt(`${middleT}`)}`;
         predictionarrowC -= predictionarrowC ^ 2;
         private_6U = `${parseInt(`${libanem}`) | predictionarrowC}`;
         libanem -= predictionarrowC - parseInt(`${libanem}`);
      while (!dialogp.startsWith(`${middleT}`)) {
         dialogp += `${dialogp.length}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
          let descz = String.fromCharCode(119,97,108,0);
          let textlayoutmanagerM: Array<any> = [574, 481, 474];
          let shirtw: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,99,102,103,0),true ], [String.fromCharCode(114,117,110,115,0),false ], [String.fromCharCode(116,116,97,101,110,99,100,115,112,0),false ]]);
          let trash_ = false;
         dialogp += `${shirtw.size}`;
         descz += `${(textlayoutmanagerM.length / (Math.max(6, (trash_ ? 4 : 1))))}`;
         textlayoutmanagerM.push(textlayoutmanagerM.length & 2);
         shirtw.set(descz, (String.fromCharCode(98,0) == descz ? (trash_ ? 2 : 1) : descz.length));
      }
         middleT += (parseFloat(`${String.fromCharCode(81,0) == dialogp ? parseInt(`${middleT}`) : dialogp.length}`));
      iconnewsshare2 /= Math.max(1, parseFloat(`${2}`));
       let c_imagev: Array<any> = [693, 414];
      let pageD = c_imagev.length <= 7390057;
      do {
         c_imagev = [c_imagev.length];
         if (pageD) {
            break;
         }
      } while ((c_imagev.length < c_imagev.length) && pageD);
       let select_ = String.fromCharCode(120,105,110,103,0);
       let iconfeedbackS = String.fromCharCode(97,114,99,104,105,118,101,114,95,56,95,50,49,0);
      if ((1 * c_imagev.length) >= 5) {
          let libflipperV: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,0),320], [String.fromCharCode(115,108,105,100,105,110,103,0),799], [String.fromCharCode(101,95,50,57,95,98,117,102,115,0),157]]);
         c_imagev.push(libflipperV.size);
      }
      giflivestreamingm += `${giflivestreamingm.length}`;

        const state = await NetInfo.fetch();

      nextf ^= nextf / (Math.max(3, 2));
   let megaphoneP = pathF.length <= 8807598;
   do {
      pathF += `${parseInt(`${iconnewsshare2}`)}`;
      if (megaphoneP) {
         break;
      }
   } while ((1 >= (pathF.length ^ constantsA.size) && 1 >= (constantsA.size ^ pathF.length)) && megaphoneP);
      frame_r5q = [countryV.size & 3];
      giflivestreamingm += `${3 ^ giflivestreamingm.length}`;
       let sharemodalS: Map<any, any> = new Map([[String.fromCharCode(109,111,110,116,103,111,109,101,114,121,0),167], [String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,0),605], [String.fromCharCode(114,118,100,97,116,97,0),846]]);
       let libfbF = 5.0;
       let defaultplayerimgq: Array<any> = [905, 826];
      let countdown8 = 8718806.0 <= libfbF;
      do {
         libfbF /= Math.max(3, parseFloat(`${parseInt(`${libfbF}`) << (Math.min(Math.abs(sharemodalS.size), 3))}`));
         if (countdown8) {
            break;
         }
      } while (countdown8 && (!Array.from(sharemodalS.values()).includes(libfbF)));
         libfbF += parseFloat(`${1}`);
          let eactt = 5.0;
         libfbF /= Math.max(2, parseFloat(`${3 & parseInt(`${libfbF}`)}`));
         eactt += parseInt(`${eactt}`) * 3;
      if (sharemodalS.size >= 3) {
         sharemodalS.set(`${libfbF}`, parseInt(`${libfbF}`));
      }
       let xadsdkl = String.fromCharCode(104,105,115,116,111,103,114,97,109,115,0);
      let castN = 8564763 <= sharemodalS.size;
      do {
          let photoE = 3.0;
          let dropdown4 = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,0);
          let username4 = 2;
          let rulesL: Array<any> = [String.fromCharCode(114,101,103,105,115,116,101,114,0), String.fromCharCode(100,105,115,112,101,110,115,101,114,0), String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,0)];
          let moduler = String.fromCharCode(99,108,111,117,100,0);
         sharemodalS.set(dropdown4, defaultplayerimgq.length << (Math.min(Math.abs(3), 4)));
         photoE += parseFloat(`${username4}`);
         dropdown4 = `${moduler.length >> (Math.min(Math.abs(1), 3))}`;
         username4 /= Math.max(5, username4);
         rulesL.push(2);
         moduler = `${moduler.length << (Math.min(4, rulesL.length))}`;
         if (castN) {
            break;
         }
      } while (castN && (1 <= (defaultplayerimgq.length * sharemodalS.size) && 1 <= (defaultplayerimgq.length * sharemodalS.size)));
         libfbF += (parseFloat(`${String.fromCharCode(111,0) == xadsdkl ? xadsdkl.length : defaultplayerimgq.length}`));
      while (!xadsdkl.includes(`${sharemodalS.size}`)) {
         xadsdkl += `${2 * parseInt(`${libfbF}`)}`;
         break;
      }
      while (!Array.from(sharemodalS.values()).includes(defaultplayerimgq.length)) {
         sharemodalS = new Map([[xadsdkl, xadsdkl.length]]);
         break;
      }
      updatesw = "2";
      shareQ += `${pathF.length & 2}`;
      updatesw = `${countryV.size ^ parseInt(`${iconnewsshare2}`)}`;
   let viewsN = String.fromCharCode(101,122,115,0) == giflivestreamingm;
   do {
      giflivestreamingm = `${constantsA.size}`;
      if (viewsN) {
         break;
      }
   } while (viewsN && (3 == giflivestreamingm.length && updatesw != String.fromCharCode(48,0)));
        const offline = !(state.isConnected && state.isInternetReachable);

      iconnewsshare2 -= parseFloat(`${updatesw.length & headerB.length}`);
   if (4 > (updatesw.length % 4) && 4 > (updatesw.length % (Math.max(8, constantsA.size)))) {
      constantsA = new Map([[`${frame_r5q.length}`, frame_r5q.length ^ 2]]);
   }
       let nativeZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,104,0),654], [String.fromCharCode(114,101,113,117,105,114,101,0),26], [String.fromCharCode(116,117,110,110,101,108,101,100,0),164]]);
       let iconpipexpand5 = String.fromCharCode(115,104,101,101,114,118,105,100,101,111,100,97,116,97,0);
       let time_npf: Array<any> = [String.fromCharCode(109,97,110,97,103,101,115,0), String.fromCharCode(97,114,114,111,119,0), String.fromCharCode(104,117,102,102,121,117,118,0)];
         nativeZ.set(iconpipexpand5, nativeZ.size);
          let teamd = 1.0;
          let crossO: Array<any> = [635, 502, 843];
         time_npf = [2 >> (Math.min(3, Math.abs(parseInt(`${teamd}`))))];
         teamd -= crossO.length;
         crossO = [3];
      for (let g = 0; g < 2; g++) {
         nativeZ = new Map([[`${nativeZ.size}`, 3 & iconpipexpand5.length]]);
      }
      for (let r = 0; r < 2; r++) {
          let becomee = String.fromCharCode(100,101,108,101,116,105,111,110,0);
          let thailandL = String.fromCharCode(108,111,103,111,117,114,108,0);
          let libtanB = String.fromCharCode(100,101,102,114,97,103,109,101,110,116,0);
         iconpipexpand5 += `${libtanB.length * time_npf.length}`;
         becomee = `${becomee.length}`;
         thailandL = `${thailandL.length}`;
         libtanB = `${thailandL.length}`;
      }
         nativeZ = new Map([[`${time_npf.length}`, 2]]);
       let vieweri = true;
       let anythink8 = false;
          let libavcodecM = 4;
          let placementA = String.fromCharCode(116,104,101,114,101,117,109,0);
          let collectiong: Map<any, any> = new Map([[String.fromCharCode(108,105,98,101,118,101,110,116,0),244], [String.fromCharCode(101,108,101,109,0),281], [String.fromCharCode(100,101,116,97,105,108,101,100,0),741]]);
         nativeZ.set(`${placementA}`, 1);
         libavcodecM >>= Math.min(3, Math.abs(2));
         placementA += `${1 ^ libavcodecM}`;
         collectiong = new Map([[`${collectiong.size}`, collectiong.size]]);
      for (let i = 0; i < 1; i++) {
         time_npf = [iconpipexpand5.length];
      }
         anythink8 = !vieweri && anythink8;
      clock5 += parseFloat(`${2 & parseInt(`${clock5}`)}`);
       let temperatureT = 1.0;
       let uimanagerp = 4.0;
         uimanagerp /= Math.max(3, parseFloat(`${parseInt(`${temperatureT}`)}`));
      for (let b = 0; b < 3; b++) {
         uimanagerp *= parseFloat(`${parseInt(`${uimanagerp}`) * 1}`);
      }
      if ((5.69 - uimanagerp) > 5.3 && 4.47 > (5.69 - temperatureT)) {
          let bannerX = 5;
          let filter1: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,115,104,111,114,116,0),538], [String.fromCharCode(101,97,105,100,99,116,95,103,95,56,57,0),998], [String.fromCharCode(115,101,103,100,97,116,97,0),291]]);
         temperatureT -= parseInt(`${temperatureT}`);
         bannerX *= bannerX | 2;
         filter1 = new Map([[`${filter1.size}`, bannerX]]);
      }
         uimanagerp *= parseFloat(`${parseInt(`${temperatureT}`)}`);
      let bell0 = temperatureT <= 8503353.0;
      do {
         temperatureT -= parseInt(`${uimanagerp}`);
         if (bell0) {
            break;
         }
      } while (((temperatureT / 3.48) > 5.88 || 4.71 > (3.48 + temperatureT)) && bell0);
       let libreactt = 5.0;
       let iconuserB = 3.0;
      updatesw = `${1 ^ countryV.size}`;
       let flipper_ = String.fromCharCode(99,105,112,104,101,114,98,121,110,105,100,0);
         flipper_ += `${flipper_.length & 3}`;
       let editq = 2.0;
       let umeng5 = 3.0;
      while ((flipper_.length + 4) == 2) {
         flipper_ = `${parseInt(`${editq}`)}`;
         break;
      }
      shareQ += `${parseInt(`${clock5}`) * 2}`;
   let stylesg = String.fromCharCode(109,51,97,117,113,117,115,51,111,0) == pathF;
   do {
      pathF += "3";
      if (stylesg) {
         break;
      }
   } while ((4 <= updatesw.length) && stylesg);
   if ((iconnewsshare2 - parseFloat(`${shareQ.length}`)) >= 3.31) {
      iconnewsshare2 *= parseFloat(`${headerB.length}`);
   }
   for (let x = 0; x < 1; x++) {
       let hookB = String.fromCharCode(116,118,100,99,0);
      while (!hookB.includes(`${hookB.length}`)) {
          let final_9G = 0;
          let libreactperfloggerjni1 = String.fromCharCode(118,105,100,101,111,99,111,100,101,99,0);
          let plusC = String.fromCharCode(116,121,112,101,115,116,114,0);
          let onewsy = 2.0;
          let codegent: Map<any, any> = new Map([[String.fromCharCode(101,110,100,115,0),248], [String.fromCharCode(99,107,112,116,0),1]]);
         hookB = `${plusC.length}`;
         final_9G <<= Math.min(Math.abs((libreactperfloggerjni1 == String.fromCharCode(49,0) ? codegent.size : libreactperfloggerjni1.length)), 4);
         plusC = `${parseInt(`${onewsy}`)}`;
         onewsy -= final_9G;
         codegent.set(`${final_9G}`, codegent.size << (Math.min(Math.abs(2), 1)));
         break;
      }
         hookB = `${2 << (Math.min(4, hookB.length))}`;
      let iconplayW = 9432538 >= hookB.length;
      do {
         hookB = "2";
         if (iconplayW) {
            break;
         }
      } while (iconplayW && (hookB != String.fromCharCode(71,0) && hookB.length > 1));
      countryV.set(hookB, hookB.length % 1);
   }
        setIsOffline(offline);

      headerB = "3";
   while (videojs8 <= 2.9) {
       let countdown7 = String.fromCharCode(100,101,112,0);
       let paginationa = String.fromCharCode(105,119,104,116,120,0);
       let pushe = 0;
       let shirtk = String.fromCharCode(116,104,101,110,97,98,108,101,0);
      if (shirtk.length > 5 && 5 > paginationa.length) {
          let libreactperfloggerjnih = String.fromCharCode(115,101,103,105,100,0);
         paginationa += `${(countdown7 == String.fromCharCode(120,0) ? countdown7.length : shirtk.length)}`;
         libreactperfloggerjnih += "1";
      }
       let nativeexI: Array<any> = [880, 422, 739];
       let moref: Array<any> = [304, 950];
      if (3 == (paginationa.length / (Math.max(5, pushe)))) {
         paginationa = `${countdown7.length / (Math.max(1, shirtk.length))}`;
      }
      let videovaro = pushe >= 9892894;
      do {
          let iconsettingB = 1.0;
          let switch_8fD = String.fromCharCode(108,109,100,98,0);
          let largebrightness_ = false;
         pushe &= 2;
         iconsettingB /= Math.max(1, parseInt(`${iconsettingB}`) >> (Math.min(Math.abs(2), 1)));
         switch_8fD += `${switch_8fD.length | 3}`;
         largebrightness_ = switch_8fD.length >= iconsettingB;
         if (videovaro) {
            break;
         }
      } while (((2 & countdown7.length) <= 5 || 1 <= (2 & pushe)) && videovaro);
      while (4 <= (nativeexI.length >> (Math.min(Math.abs(5), 1))) || (5 >> (Math.min(4, countdown7.length))) <= 3) {
         nativeexI = [(String.fromCharCode(87,0) == shirtk ? nativeexI.length : shirtk.length)];
         break;
      }
      while (paginationa == countdown7) {
          let iconbellactivew = String.fromCharCode(102,111,114,103,111,116,0);
          let gesturesv = String.fromCharCode(114,105,118,97,116,101,0);
          let emojii = false;
         countdown7 += `${(iconbellactivew == String.fromCharCode(122,0) ? moref.length : iconbellactivew.length)}`;
         gesturesv = `${(String.fromCharCode(117,0) == gesturesv ? gesturesv.length : (emojii ? 5 : 1))}`;
         emojii = !emojii;
         break;
      }
         shirtk = `${countdown7.length / (Math.max(9, paginationa.length))}`;
      while (!shirtk.endsWith(`${countdown7.length}`)) {
         countdown7 += `${paginationa.length}`;
         break;
      }
      let activityi = paginationa == String.fromCharCode(113,54,118,50,56,97,49,56,117,99,0);
      do {
         paginationa += `${pushe}`;
         if (activityi) {
            break;
         }
      } while ((!paginationa.endsWith(`${pushe}`)) && activityi);
      let overlayt = 9445104 <= nativeexI.length;
      do {
          let whitec: Map<any, any> = new Map([[String.fromCharCode(98,111,114,105,110,103,115,115,108,0),String.fromCharCode(117,110,98,105,97,115,0)], [String.fromCharCode(119,105,100,116,104,0),String.fromCharCode(100,105,115,109,105,115,115,97,108,0)], [String.fromCharCode(102,97,105,108,97,98,108,101,0),String.fromCharCode(115,117,114,112,114,105,115,101,100,0)]]);
          let model2 = 0.0;
          let debugo: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,101,100,0),String.fromCharCode(110,101,101,100,115,0)], [String.fromCharCode(108,97,122,105,108,121,0),String.fromCharCode(98,111,117,110,100,0)]]);
          let codew = String.fromCharCode(113,117,97,108,105,116,121,0);
         nativeexI.push(pushe);
         whitec = new Map([[`${debugo.size}`, 3 >> (Math.min(3, Math.abs(debugo.size)))]]);
         model2 *= 2;
         codew = `${parseInt(`${model2}`) * debugo.size}`;
         if (overlayt) {
            break;
         }
      } while (overlayt && (nativeexI.length < paginationa.length));
         countdown7 = `${pushe}`;
          let handler2 = 4.0;
         pushe >>= Math.min(Math.abs(pushe), 4);
         handler2 -= parseInt(`${handler2}`) >> (Math.min(2, Math.abs(2)));
      videojs8 *= (countdown7 == String.fromCharCode(95,0) ? shareQ.length : countdown7.length);
      break;
   }
      nextf ^= 3;
   for (let n = 0; n < 1; n++) {
      giflivestreamingm += `${parseInt(`${iconnewsshare2}`)}`;
   }
       let v_hash4 = 3.0;
       let floatingc = 4.0;
       let pingY = 0.0;
      if ((floatingc + 3.58) > 1.79) {
         floatingc *= parseFloat(`${parseInt(`${v_hash4}`)}`);
      }
      let holderV = 5350416.0 >= pingY;
      do {
         pingY /= Math.max(5, parseInt(`${v_hash4}`) >> (Math.min(5, Math.abs(2))));
         if (holderV) {
            break;
         }
      } while ((floatingc <= pingY) && holderV);
      while (2.12 > (v_hash4 - floatingc)) {
         v_hash4 -= parseFloat(`${parseInt(`${pingY}`) << (Math.min(3, Math.abs(parseInt(`${floatingc}`))))}`);
         break;
      }
         v_hash4 += parseFloat(`${parseInt(`${pingY}`)}`);
      for (let a = 0; a < 1; a++) {
          let delegate_kjk = String.fromCharCode(119,95,50,56,95,118,102,108,97,103,0);
          let libavcodecJ = 1.0;
          let minivod4: Array<any> = [314, 352, 251];
         v_hash4 /= Math.max(1, parseFloat(`${1}`));
         delegate_kjk += "2";
         libavcodecJ += delegate_kjk.length & 3;
         minivod4.push(minivod4.length << (Math.min(delegate_kjk.length, 5)));
      }
      while (floatingc < 3.44) {
         floatingc *= parseFloat(`${parseInt(`${pingY}`) << (Math.min(Math.abs(parseInt(`${floatingc}`)), 1))}`);
         break;
      }
      for (let d = 0; d < 3; d++) {
         pingY /= Math.max(parseInt(`${floatingc}`), 1);
      }
      while (floatingc > 2.67) {
         v_hash4 /= Math.max(1, parseFloat(`${parseInt(`${pingY}`) / (Math.max(parseInt(`${floatingc}`), 3))}`));
         break;
      }
          let sigmobA: Array<any> = [153, 373];
          let libswscale8 = true;
          let iconwatchnowA = String.fromCharCode(112,105,110,110,101,114,0);
         v_hash4 -= parseFloat(`${3 * parseInt(`${pingY}`)}`);
         sigmobA.push((sigmobA.length - (libswscale8 ? 1 : 2)));
         libswscale8 = iconwatchnowA == String.fromCharCode(90,0);
         iconwatchnowA += `${((libswscale8 ? 4 : 1) ^ iconwatchnowA.length)}`;
      headerB = `${2 & parseInt(`${floatingc}`)}`;
      updatesw = `${frame_r5q.length}`;
       let indexx: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,0),492], [String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,0),746]]);
         indexx = new Map([[`${indexx.size}`, indexx.size]]);
         indexx.set(`${indexx.size}`, indexx.size);
      if (1 <= (1 << (Math.min(1, Math.abs(indexx.size)))) || (indexx.size << (Math.min(Math.abs(1), 3))) <= 4) {
         indexx.set(`${indexx.size}`, indexx.size);
      }
      videojs8 *= parseInt(`${clock5}`) | 3;
   for (let l = 0; l < 2; l++) {
      frame_r5q = [(String.fromCharCode(84,0) == shareQ ? parseInt(`${iconnewsshare2}`) : shareQ.length)];
   }
        if (!offline) {

   if (pathF != updatesw) {
       let episode7 = String.fromCharCode(108,105,103,104,116,95,57,95,51,52,0);
       let internetC: Array<any> = [777, 679];
       let ballo = false;
       let paget = String.fromCharCode(99,111,97,114,115,101,0);
          let sharemodal_ = 1;
          let dependenciesC: Map<any, any> = new Map([[String.fromCharCode(100,105,99,116,105,111,110,97,114,105,101,115,0),536], [String.fromCharCode(109,101,97,115,117,114,101,100,0),384], [String.fromCharCode(102,108,101,120,0),49]]);
         ballo = String.fromCharCode(72,0) == episode7;
         sharemodal_ <<= Math.min(5, Math.abs(sharemodal_));
         dependenciesC = new Map([[`${dependenciesC.size}`, 2]]);
          let bootsplash8 = 5.0;
          let pingA = false;
         paget += `${episode7.length | 2}`;
         bootsplash8 *= (parseFloat(`${(pingA ? 2 : 2) & parseInt(`${bootsplash8}`)}`));
         pingA = bootsplash8 <= 80.65;
      if (!episode7.startsWith(`${internetC.length}`)) {
         episode7 = `${paget.length}`;
      }
         ballo = (paget.length * internetC.length) < 58;
      for (let c = 0; c < 3; c++) {
         episode7 += `${3 % (Math.max(2, paget.length))}`;
      }
       let side7 = 5;
         side7 ^= 1;
         paget = "2";
         ballo = paget.length < 31;
      for (let a = 0; a < 2; a++) {
          let material1 = String.fromCharCode(99,115,99,104,101,109,101,0);
          let zhengpian7 = 2.0;
          let area0 = String.fromCharCode(98,105,103,117,105,110,116,0);
          let notificationfillemptyO: Array<any> = [290, 152];
          let leftm = 2;
         side7 /= Math.max(episode7.length + leftm, 2);
         material1 = `${(String.fromCharCode(82,0) == material1 ? material1.length : parseInt(`${zhengpian7}`))}`;
         zhengpian7 -= parseFloat(`${material1.length % 3}`);
         area0 += `${2 + material1.length}`;
         notificationfillemptyO = [area0.length];
         leftm |= notificationfillemptyO.length;
      }
      let dependencyt = episode7 == String.fromCharCode(57,107,103,112,49,120,56,54,0);
      do {
         episode7 = `${paget.length * 2}`;
         if (dependencyt) {
            break;
         }
      } while ((episode7.length >= 2) && dependencyt);
      if ((paget.length << (Math.min(4, Math.abs(side7)))) <= 1) {
         side7 >>= Math.min(5, Math.abs(3 % (Math.max(9, episode7.length))));
      }
      updatesw = `${(nextf & (ballo ? 3 : 1))}`;
   }
   let middlewares = frame_r5q.length >= 5400924;
   do {
       let footballfiledlayoutz: Array<any> = [602, 930];
       let b_playerl = 5;
       let telegram3: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,111,114,0),String.fromCharCode(98,105,110,111,109,105,97,108,0)], [String.fromCharCode(102,108,97,99,101,110,99,0),String.fromCharCode(100,105,115,116,97,110,99,101,0)], [String.fromCharCode(100,111,118,101,0),String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,0)]]);
      for (let u = 0; u < 3; u++) {
          let nativei = 2.0;
         b_playerl *= telegram3.size % (Math.max(5, parseInt(`${nativei}`)));
      }
         footballfiledlayoutz = [3];
      while (b_playerl < footballfiledlayoutz.length) {
          let anytimet = String.fromCharCode(107,95,57,57,95,109,111,109,101,110,116,117,109,0);
         b_playerl %= Math.max(1, telegram3.size);
         anytimet += `${(anytimet == String.fromCharCode(99,0) ? anytimet.length : anytimet.length)}`;
         break;
      }
      let downloadE = b_playerl <= 8992265;
      do {
         b_playerl %= Math.max(1, telegram3.size ^ 1);
         if (downloadE) {
            break;
         }
      } while (downloadE && ((1 & footballfiledlayoutz.length) > 1 && 3 > (1 & footballfiledlayoutz.length)));
      for (let f = 0; f < 2; f++) {
         b_playerl >>= Math.min(Math.abs(3), 2);
      }
      while (1 <= (2 / (Math.max(3, b_playerl)))) {
         footballfiledlayoutz = [b_playerl];
         break;
      }
      let textW = b_playerl >= 5894821;
      do {
         b_playerl |= b_playerl;
         if (textW) {
            break;
         }
      } while (textW && (footballfiledlayoutz.length > b_playerl));
       let delegate_m1U = String.fromCharCode(101,120,101,99,117,116,105,110,103,0);
       let time_es8 = String.fromCharCode(101,109,98,101,100,95,117,95,49,50,0);
       let iconsubssuccessS = true;
       let overZ = true;
      frame_r5q = [1 - parseInt(`${clock5}`)];
      if (middlewares) {
         break;
      }
   } while ((!giflivestreamingm.endsWith(`${frame_r5q.length}`)) && middlewares);
   for (let i = 0; i < 1; i++) {
      videojs8 *= giflivestreamingm.length;
   }
   while (!giflivestreamingm.includes(`${videojs8}`)) {
       let orientationy = 5;
       let libjsinspectorG = String.fromCharCode(112,114,111,103,114,101,115,105,118,101,0);
       let bangb = String.fromCharCode(119,112,101,110,100,105,110,103,0);
       let countryD = true;
       let greenL = String.fromCharCode(98,95,50,57,95,117,115,101,114,110,97,109,101,0);
         greenL = `${orientationy}`;
          let plusp = true;
          let showu = String.fromCharCode(115,116,97,98,108,101,0);
         greenL = `${((countryD ? 4 : 4) >> (Math.min(Math.abs(orientationy), 5)))}`;
         plusp = (((plusp ? showu.length : 13) & showu.length) < 13);
      while (!libjsinspectorG.endsWith(bangb)) {
         libjsinspectorG = `${libjsinspectorG.length % (Math.max(3, 9))}`;
         break;
      }
      for (let b = 0; b < 3; b++) {
         greenL = `${(String.fromCharCode(95,0) == bangb ? bangb.length : libjsinspectorG.length)}`;
      }
         orientationy /= Math.max(libjsinspectorG.length, 4);
       let iconclosewhitebgV = 1.0;
       let livenodatabgimg9 = 2.0;
         livenodatabgimg9 /= Math.max(parseFloat(`${libjsinspectorG.length}`), 5);
         livenodatabgimg9 += parseFloat(`${1 ^ parseInt(`${iconclosewhitebgV}`)}`);
       let defaultroombg6: Array<any> = [String.fromCharCode(99,111,110,116,105,103,117,111,117,115,0), String.fromCharCode(114,101,113,117,115,116,101,114,0), String.fromCharCode(102,101,101,0)];
       let guideX: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0),884], [String.fromCharCode(112,114,101,117,112,108,111,97,100,0),866], [String.fromCharCode(115,97,110,101,0),582]]);
         greenL += "2";
         livenodatabgimg9 += parseFloat(`${defaultroombg6.length}`);
      for (let d = 0; d < 3; d++) {
         defaultroombg6.push(orientationy + parseInt(`${livenodatabgimg9}`));
      }
         greenL = `${((countryD ? 2 : 3) % (Math.max(6, defaultroombg6.length)))}`;
         countryD = 48 >= guideX.size;
      videojs8 *= giflivestreamingm.length;
      break;
   }
   let malaysiaC = 5907798.0 <= iconnewsshare2;
   do {
       let sheeto: Map<any, any> = new Map([[String.fromCharCode(97,108,103,111,114,0),368], [String.fromCharCode(116,111,107,101,110,110,102,116,116,120,0),635], [String.fromCharCode(117,110,98,108,111,99,107,105,110,103,0),225]]);
       let libmapbufferjniX: Array<any> = [String.fromCharCode(101,120,112,108,97,105,110,0), String.fromCharCode(98,108,101,101,100,0), String.fromCharCode(102,95,49,95,97,118,99,111,100,101,99,0)];
       let notificationfillemptyk = String.fromCharCode(109,117,108,95,108,95,51,49,0);
         libmapbufferjniX.push(notificationfillemptyk.length & libmapbufferjniX.length);
         libmapbufferjniX = [notificationfillemptyk.length];
      if (1 < (sheeto.size - 3) || (sheeto.size - notificationfillemptyk.length) < 3) {
          let libimagepipeliney = String.fromCharCode(118,97,114,115,0);
          let libpangleflippedJ = 0.0;
         notificationfillemptyk = `${notificationfillemptyk.length & 1}`;
         libimagepipeliney += `${libimagepipeliney.length + 1}`;
         libpangleflippedJ /= Math.max(parseFloat(`${3}`), 4);
      }
         libmapbufferjniX.push(sheeto.size);
      while (4 >= (libmapbufferjniX.length - 3) || 5 >= (3 - libmapbufferjniX.length)) {
          let statisticsinactive2 = String.fromCharCode(112,97,114,97,109,99,104,97,110,103,101,0);
         notificationfillemptyk += `${notificationfillemptyk.length | statisticsinactive2.length}`;
         break;
      }
      if ((libmapbufferjniX.length | 4) > 3 || 5 > (libmapbufferjniX.length | 4)) {
          let gmailc: Array<any> = [122, 551, 248];
          let sansy: Array<any> = [845, 188];
          let tickedZ: Array<any> = [172, 227, 498];
          let chat9 = String.fromCharCode(100,97,115,104,101,115,0);
          let emojih = 1;
         libmapbufferjniX = [sheeto.size];
         gmailc = [sansy.length ^ tickedZ.length];
         sansy = [(String.fromCharCode(54,0) == chat9 ? chat9.length : emojih)];
         tickedZ.push(chat9.length | 1);
         emojih += gmailc.length ^ sansy.length;
      }
      for (let n = 0; n < 1; n++) {
         libmapbufferjniX.push(3 ^ sheeto.size);
      }
          let leftG: Map<any, any> = new Map([[String.fromCharCode(109,105,100,116,111,110,101,115,0),String.fromCharCode(115,116,114,104,97,115,104,0)], [String.fromCharCode(116,104,114,111,117,103,104,112,117,116,0),String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,0)]]);
          let combineN: Map<any, any> = new Map([[String.fromCharCode(102,108,111,111,114,0),String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,0)], [String.fromCharCode(115,112,97,110,0),String.fromCharCode(117,110,109,97,114,107,0)]]);
         sheeto = new Map([[`${leftG.size}`, 3]]);
         leftG.set(`${combineN.size}`, 1 / (Math.max(9, combineN.size)));
      for (let j = 0; j < 2; j++) {
         sheeto.set(notificationfillemptyk, notificationfillemptyk.length / 1);
      }
      iconnewsshare2 *= parseFloat(`${countryV.size}`);
      if (malaysiaC) {
         break;
      }
   } while (malaysiaC && (4.30 > (iconnewsshare2 + 2.100)));
       let mbnativeadvancedE = 5.0;
       let privacyy: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,101,114,0),454], [String.fromCharCode(97,117,100,105,111,100,97,116,97,0),658], [String.fromCharCode(119,101,108,99,111,109,101,0),555]]);
       let areav = 3;
       let crownw = 1;
      let corner7 = 9331863 >= crownw;
      do {
         crownw ^= parseInt(`${mbnativeadvancedE}`) + 1;
         if (corner7) {
            break;
         }
      } while (corner7 && (Array.from(privacyy.keys()).includes(`${crownw}`)));
      for (let c = 0; c < 1; c++) {
          let singaporeT = String.fromCharCode(99,97,110,118,97,115,0);
          let inewssharem = String.fromCharCode(116,114,97,118,101,108,0);
          let modalp = String.fromCharCode(115,116,114,105,99,116,0);
          let user5 = String.fromCharCode(101,120,116,101,114,110,97,108,108,121,0);
         privacyy.set(`${crownw}`, 2);
         singaporeT += `${(singaporeT == String.fromCharCode(55,0) ? singaporeT.length : user5.length)}`;
         inewssharem = `${user5.length}`;
         modalp = `${inewssharem.length}`;
      }
       let uploadd = true;
         crownw *= parseInt(`${mbnativeadvancedE}`);
         uploadd = 16 > (areav * mbnativeadvancedE);
      nextf |= giflivestreamingm.length - parseInt(`${iconnewsshare2}`);
      pathF += `${parseInt(`${videojs8}`) ^ constantsA.size}`;
   while (3.91 <= (2.73 / (Math.max(5, iconnewsshare2)))) {
      iconnewsshare2 += parseFloat(`${updatesw.length}`);
      break;
   }
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
                <Text style={{ color: '#FFF', fontSize: 20 }}>解说</Text>
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
