import { useAppDispatch, useAppSelector, useSelector } from '@hooks';
import yys_giftbutton_footballtrophy from '../../Umeng/yys_giftbutton_footballtrophy';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { yysDownloadingCombined } from '@redux';
import { yysIconclosewhiteBaiduads } from '@redux';
import { yysGradle } from '@type';
import { screenModel } from '@type';
import { API_DOMAIN_TEST } from '@utility';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/yys_episodes_largesound';
import ScreenContainer from '../components/container/yys_matches';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/yys_iconviewer_page';
import NoConnection from './../components/common/yys_librrc_zhengpian';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux';
import { yysIconplaySuggestion } from '@redux';
import { yysIconstar } from '@models';

type yysRight = {
  data: {
    List: Array<yysGradle>;
  };
};

type yysIcondownimgFlipper = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<yysGradle>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const miniVodRef = useRef<yysIcondownimgFlipper>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = yysIconstar.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  
  
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
       let toponE = 5;
    let historyU = 3.0;
    let w_positiona = 0.0;
    let temperaturez = String.fromCharCode(117,110,105,113,117,101,108,121,95,53,95,52,57,0);
    let liveh: Array<any> = [979, 292];
    let libapminsighta4 = 1.0;
    let o_managerk = String.fromCharCode(116,95,57,56,95,118,100,112,97,117,0);
    let hongkongr: Map<any, any> = new Map([[String.fromCharCode(99,95,57,53,95,115,113,108,0),209], [String.fromCharCode(102,109,105,120,95,48,95,52,50,0),843]]);
       let mbridgen = String.fromCharCode(116,95,55,56,95,105,110,118,111,107,101,0);
       let iconnointernetT = String.fromCharCode(97,95,56,95,103,101,116,99,114,101,100,0);
      if (!iconnointernetT.endsWith(mbridgen)) {
         mbridgen += `${1 ^ mbridgen.length}`;
      }
      for (let m = 0; m < 3; m++) {
          let scrollviewg: Array<any> = [497, 986, 480];
          let playershirtf = false;
          let distb = 3.0;
         iconnointernetT += `${1 >> (Math.min(2, scrollviewg.length))}`;
         scrollviewg.push(parseInt(`${distb}`) / 1);
         playershirtf = !playershirtf;
         distb /= Math.max(1, parseFloat(`${2 * parseInt(`${distb}`)}`));
      }
          let rewardvideoS = 1;
         mbridgen = `${(String.fromCharCode(69,0) == iconnointernetT ? iconnointernetT.length : rewardvideoS)}`;
      for (let l = 0; l < 3; l++) {
          let sliderV = String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,50,95,57,50,0);
          let reduceri = 3;
          let sharer = false;
          let bannerI = String.fromCharCode(112,114,111,99,95,105,95,56,55,0);
         mbridgen += `${reduceri}`;
         sliderV += `${sliderV.length ^ 2}`;
         reduceri >>= Math.min(5, Math.abs((bannerI == String.fromCharCode(103,0) ? bannerI.length : (sharer ? 4 : 2))));
      }
      if (1 == mbridgen.length) {
         iconnointernetT += `${iconnointernetT.length ^ mbridgen.length}`;
      }
      for (let v = 0; v < 3; v++) {
         iconnointernetT = `${(String.fromCharCode(88,0) == iconnointernetT ? mbridgen.length : iconnointernetT.length)}`;
      }
      historyU /= Math.max((parseFloat(`${String.fromCharCode(69,0) == mbridgen ? mbridgen.length : parseInt(`${libapminsighta4}`)}`)), 4);
      historyU -= parseFloat(`${1 | temperaturez.length}`);
   for (let r = 0; r < 2; r++) {
       let typingloadingv = 4.0;
       let sharemodale: Map<any, any> = new Map([[String.fromCharCode(115,119,105,122,122,108,101,100,95,104,95,52,0),795], [String.fromCharCode(116,95,56,57,95,114,97,110,107,105,110,103,0),954]]);
      while (!Array.from(sharemodale.keys()).includes(`${typingloadingv}`)) {
         sharemodale = new Map([[`${sharemodale.size}`, sharemodale.size]]);
         break;
      }
      while (Array.from(sharemodale.keys()).includes(`${typingloadingv}`)) {
         typingloadingv -= parseFloat(`${sharemodale.size}`);
         break;
      }
      while (5 == (sharemodale.size * 2)) {
          let singlel = String.fromCharCode(116,105,99,107,101,114,115,95,56,95,55,56,0);
          let loadingspinnerc = 5.0;
          let gestureS: Array<any> = [139, 817];
          let giflivestreamingv = String.fromCharCode(117,95,55,57,95,100,101,99,111,109,112,114,101,115,115,101,100,0);
          let code7 = 1.0;
         typingloadingv *= parseFloat(`${2}`);
         singlel += "3";
         loadingspinnerc -= 1;
         gestureS.push((String.fromCharCode(103,0) == singlel ? parseInt(`${loadingspinnerc}`) : singlel.length));
         giflivestreamingv += `${parseInt(`${loadingspinnerc}`)}`;
         code7 *= giflivestreamingv.length;
         break;
      }
      for (let d = 0; d < 1; d++) {
          let volumey = 0.0;
          let orangeticko = 3.0;
         typingloadingv *= parseFloat(`${sharemodale.size}`);
         volumey *= parseInt(`${orangeticko}`);
         orangeticko /= Math.max(parseFloat(`${parseInt(`${orangeticko}`) / (Math.max(parseInt(`${volumey}`), 5))}`), 3);
      }
      let yellowredcardS = sharemodale.size <= 5933282;
      do {
         sharemodale.set(`${typingloadingv}`, 1 - sharemodale.size);
         if (yellowredcardS) {
            break;
         }
      } while (yellowredcardS && (5.53 == (typingloadingv * parseFloat(`${sharemodale.size}`)) && (5.53 * typingloadingv) == 3.68));
       let tempnodataq = String.fromCharCode(117,95,56,54,95,99,97,114,114,121,0);
       let downy = String.fromCharCode(121,95,51,52,95,99,111,114,114,101,99,116,101,100,0);
      toponE %= Math.max(liveh.length - 2, 2);
   }
      liveh = [temperaturez.length];
      historyU /= Math.max(2, parseFloat(`${parseInt(`${libapminsighta4}`)}`));
   if ((1 % (Math.max(6, liveh.length))) < 4 && (w_positiona - 2.45) < 5.8) {
      liveh = [parseInt(`${historyU}`) / 2];
   }

    setIsRefreshing(true);

   let runtimeschedulerk = w_positiona <= 7927617.0;
   do {
       let r_titleF: Array<any> = [246, 682, 216];
       let projecto = String.fromCharCode(102,95,57,54,95,116,114,105,97,110,103,117,108,97,114,0);
       let iconsaveimagex: Array<any> = [785, 952, 168];
       let mbnativea: Array<any> = [String.fromCharCode(97,95,54,55,95,112,105,120,101,108,115,0), String.fromCharCode(114,109,115,116,114,101,97,109,95,54,95,49,54,0)];
      let calendarU = String.fromCharCode(113,108,114,0) == projecto;
      do {
         projecto += `${r_titleF.length >> (Math.min(3, mbnativea.length))}`;
         if (calendarU) {
            break;
         }
      } while (calendarU && ((r_titleF.length % (Math.max(2, projecto.length))) == 1 && (projecto.length % (Math.max(5, r_titleF.length))) == 1));
         iconsaveimagex = [mbnativea.length];
         r_titleF.push(projecto.length);
      let showlessM = 9033783 <= iconsaveimagex.length;
      do {
         iconsaveimagex = [r_titleF.length ^ 2];
         if (showlessM) {
            break;
         }
      } while (((mbnativea.length >> (Math.min(5, iconsaveimagex.length))) <= 4) && showlessM);
         r_titleF.push(mbnativea.length | 1);
      w_positiona /= Math.max(2, parseFloat(`${liveh.length | o_managerk.length}`));
      if (runtimeschedulerk) {
         break;
      }
   } while (runtimeschedulerk && (w_positiona == historyU));
       let privacyq = 2.0;
       let middlesoundx = 3.0;
       let active1 = true;
      for (let s = 0; s < 1; s++) {
         active1 = 63.24 <= privacyq;
      }
          let iconarrowrightorangeh = true;
         middlesoundx += ((iconarrowrightorangeh ? 3 : 3));
      while (1.25 < (middlesoundx + privacyq) || (privacyq + middlesoundx) < 1.25) {
          let minimizea: Map<any, any> = new Map([[String.fromCharCode(97,95,50,56,95,100,105,115,112,97,116,99,104,101,100,0),String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,55,95,54,55,0)], [String.fromCharCode(105,95,56,48,95,115,99,97,108,97,114,109,117,108,116,0),String.fromCharCode(105,110,116,112,95,57,95,55,51,0)]]);
         middlesoundx -= ((active1 ? 3 : 2) | parseInt(`${privacyq}`));
         minimizea = new Map([[`${minimizea.size}`, 1]]);
         break;
      }
          let sideu = 0.0;
         active1 = privacyq > middlesoundx;
         sideu -= parseFloat(`${parseInt(`${sideu}`)}`);
      if ((1 + middlesoundx) < 3.98) {
          let profilec = 0.0;
          let modeC = String.fromCharCode(116,95,56,55,95,106,99,109,97,115,116,101,114,0);
          let statisticsinactiveN = false;
          let searchy = 1.0;
         privacyq += parseFloat(`${1 | parseInt(`${middlesoundx}`)}`);
         profilec *= parseInt(`${profilec}`);
         modeC += "3";
         statisticsinactiveN = String.fromCharCode(84,0) == modeC;
         searchy /= Math.max(4, ((statisticsinactiveN ? 4 : 3)));
      }
       let flipper6: Map<any, any> = new Map([[String.fromCharCode(98,102,108,121,95,112,95,57,57,0),274], [String.fromCharCode(109,115,114,108,101,95,48,95,49,54,0),719]]);
      while (3 == (5 ^ flipper6.size)) {
         active1 = privacyq == 16.74;
         break;
      }
         privacyq *= (parseFloat(`${1 - (active1 ? 4 : 4)}`));
      let bufferu = active1 ? !active1 : active1;
      do {
         active1 = flipper6.size < 85 || active1;
         if (bufferu) {
            break;
         }
      } while ((!active1) && bufferu);
      temperaturez += `${2 / (Math.max(parseInt(`${w_positiona}`), 10))}`;
       let episodesu = String.fromCharCode(108,95,57,48,95,115,97,109,112,108,101,99,112,121,0);
      let mimob = String.fromCharCode(106,57,56,106,97,118,0) == episodesu;
      do {
         episodesu += `${1 >> (Math.min(5, episodesu.length))}`;
         if (mimob) {
            break;
         }
      } while (mimob && (episodesu.length >= 3));
      let fullscreenmins = episodesu.length <= 9747135;
      do {
         episodesu += `${episodesu.length}`;
         if (fullscreenmins) {
            break;
         }
      } while (fullscreenmins && (episodesu != String.fromCharCode(110,0)));
      while (episodesu == String.fromCharCode(105,0)) {
         episodesu = `${episodesu.length}`;
         break;
      }
      temperaturez = `${liveh.length}`;
   while (liveh.includes(libapminsighta4)) {
       let buildw: Array<any> = [String.fromCharCode(108,95,51,57,95,112,111,115,116,112,114,111,99,0), String.fromCharCode(108,95,53,57,0)];
      for (let c = 0; c < 1; c++) {
         buildw.push(buildw.length ^ 3);
      }
      for (let q = 0; q < 1; q++) {
          let iconcurrentmatch5: Array<any> = [190, 936];
          let ballS = 3;
          let shootyesgoalT: Array<any> = [467, 992, 45];
         buildw = [iconcurrentmatch5.length << (Math.min(1, Math.abs(ballS)))];
         iconcurrentmatch5 = [3 | shootyesgoalT.length];
         ballS /= Math.max(4, shootyesgoalT.length * shootyesgoalT.length);
      }
         buildw = [buildw.length];
      libapminsighta4 += buildw.length + o_managerk.length;
      break;
   }
      hongkongr.set(`${libapminsighta4}`, parseInt(`${libapminsighta4}`));
       let scrollviewf: Array<any> = [680, 875];
       let live6 = 5.0;
       let smallorangemanu = 0;
         live6 *= 1;
         live6 -= scrollviewf.length + parseInt(`${live6}`);
          let iconcurrentmatchk = 4.0;
         live6 *= 3;
         iconcurrentmatchk *= parseFloat(`${1}`);
      while (1 < (2 & smallorangemanu)) {
         smallorangemanu |= 2 | smallorangemanu;
         break;
      }
         live6 -= smallorangemanu / (Math.max(scrollviewf.length, 1));
          let light8: Array<any> = [801, 1000];
          let malaysiaf = String.fromCharCode(114,95,57,57,95,100,118,100,115,117,98,0);
         live6 /= Math.max(2, malaysiaf.length);
         light8.push(light8.length | 3);
         malaysiaf = `${light8.length}`;
       let winit_d1b = 2.0;
      for (let v = 0; v < 2; v++) {
         live6 /= Math.max(4, parseInt(`${winit_d1b}`));
      }
         smallorangemanu += 2 & smallorangemanu;
      libapminsighta4 -= 1;
    

      o_managerk += `${parseInt(`${historyU}`) >> (Math.min(4, Math.abs(parseInt(`${w_positiona}`))))}`;
   let abidetectY = 7785441 >= temperaturez.length;
   do {
       let emojiheartR = String.fromCharCode(103,95,57,52,95,115,105,112,114,100,97,116,97,0);
       let libturbomodulejsijniU = String.fromCharCode(116,95,51,55,95,97,118,115,115,0);
       let sigmob2 = 2.0;
       let bgvipxvody = 3.0;
       let refreshborderlessq = 4.0;
      for (let k = 0; k < 1; k++) {
          let iconcurrentmatchn = String.fromCharCode(106,95,54,56,95,115,121,115,114,97,110,100,0);
          let entryX = 4;
          let navigationq = 1.0;
          let shielddoner = false;
         refreshborderlessq *= parseFloat(`${parseInt(`${sigmob2}`) / (Math.max(5, iconcurrentmatchn.length))}`);
         iconcurrentmatchn = `${entryX / (Math.max(parseInt(`${navigationq}`), 8))}`;
         entryX <<= Math.min(Math.abs(((shielddoner ? 5 : 4) & parseInt(`${navigationq}`))), 5);
         shielddoner = shielddoner && navigationq <= 31.61;
      }
         libturbomodulejsijniU = "1";
      let volume5 = 8090286.0 <= bgvipxvody;
      do {
          let reactD: Map<any, any> = new Map([[String.fromCharCode(112,104,112,95,106,95,54,50,0),697], [String.fromCharCode(106,95,52,57,95,102,105,110,116,0),611]]);
          let baidud = true;
          let sellmathbackground2: Map<any, any> = new Map([[String.fromCharCode(98,115,116,114,97,99,116,95,103,95,54,49,0),344], [String.fromCharCode(101,118,98,117,102,102,101,114,95,56,95,51,0),425]]);
         bgvipxvody /= Math.max(5, sellmathbackground2.size);
         reactD = new Map([[`${reactD.size}`, reactD.size % (Math.max(2, 7))]]);
         baidud = !baidud;
         sellmathbackground2.set(`${baidud}`, reactD.size << (Math.min(Math.abs(1), 4)));
         if (volume5) {
            break;
         }
      } while ((1.97 > (bgvipxvody * 4.55) || (libturbomodulejsijniU.length % (Math.max(2, 1))) > 4) && volume5);
         bgvipxvody *= 3;
         refreshborderlessq *= parseFloat(`${parseInt(`${bgvipxvody}`)}`);
         libturbomodulejsijniU = `${libturbomodulejsijniU.length}`;
         bgvipxvody += 2;
         sigmob2 /= Math.max(3 ^ parseInt(`${refreshborderlessq}`), 1);
       let casting_: Array<any> = [688, 966];
       let policyj: Array<any> = [String.fromCharCode(109,95,53,49,95,97,115,102,114,116,112,0), String.fromCharCode(120,95,57,55,95,105,111,101,114,114,0), String.fromCharCode(102,95,51,55,95,107,109,101,97,110,115,0)];
         refreshborderlessq *= parseFloat(`${parseInt(`${bgvipxvody}`) * 3}`);
      for (let x = 0; x < 3; x++) {
         refreshborderlessq -= parseFloat(`${policyj.length | 2}`);
      }
         libturbomodulejsijniU = `${libturbomodulejsijniU.length}`;
      while (casting_.length <= 5) {
         casting_ = [parseInt(`${refreshborderlessq}`) ^ policyj.length];
         break;
      }
      let sellQ = libturbomodulejsijniU == String.fromCharCode(104,118,105,109,0);
      do {
          let libjsijniprofilerI = String.fromCharCode(100,105,114,110,97,109,101,95,106,95,52,55,0);
          let defaultfootballbgS = false;
          let iconshareP: Array<any> = [313, 606, 196];
          let annerZ = true;
          let umengb: Array<any> = [490, 23, 8];
         libturbomodulejsijniU += `${(String.fromCharCode(54,0) == emojiheartR ? (annerZ ? 4 : 4) : emojiheartR.length)}`;
         libjsijniprofilerI = `${libjsijniprofilerI.length}`;
         defaultfootballbgS = umengb.length == libjsijniprofilerI.length;
         iconshareP.push(iconshareP.length | 1);
         annerZ = (umengb.length & libjsijniprofilerI.length) >= 58;
         if (sellQ) {
            break;
         }
      } while (sellQ && (3.50 >= (refreshborderlessq / (Math.max(1.98, 5))) && (libturbomodulejsijniU.length ^ 5) >= 5));
          let utilsc: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,95,117,95,49,51,0),String.fromCharCode(112,95,57,54,95,100,105,116,104,101,114,0)], [String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,117,95,52,48,0),String.fromCharCode(99,97,114,111,117,115,101,108,95,55,95,54,52,0)], [String.fromCharCode(97,95,49,48,48,95,109,98,101,100,0),String.fromCharCode(106,95,50,48,95,111,117,116,108,105,101,114,0)]]);
          let lessY: Map<any, any> = new Map([[String.fromCharCode(98,111,111,115,116,95,53,95,56,0),468], [String.fromCharCode(97,121,98,114,105,95,54,95,50,51,0),203]]);
          let reactnativejso = String.fromCharCode(107,95,54,52,95,115,111,114,101,99,118,109,115,103,0);
         sigmob2 /= Math.max(1, 1);
         utilsc = new Map([[`${lessY.size}`, (reactnativejso == String.fromCharCode(67,0) ? lessY.size : reactnativejso.length)]]);
      temperaturez = `${(String.fromCharCode(70,0) == o_managerk ? parseInt(`${libapminsighta4}`) : o_managerk.length)}`;
      if (abidetectY) {
         break;
      }
   } while (abidetectY && (2 > (5 << (Math.min(3, temperaturez.length))) || (5 << (Math.min(2, liveh.length))) > 1));
   for (let m = 0; m < 3; m++) {
      w_positiona -= (parseFloat(`${o_managerk == String.fromCharCode(53,0) ? o_managerk.length : parseInt(`${libapminsighta4}`)}`));
   }
      w_positiona += parseFloat(`${o_managerk.length ^ temperaturez.length}`);
      w_positiona -= parseFloat(`${3 % (Math.max(2, liveh.length))}`);
       let flagd = 3;
       let predictionbannerD = 2;
       let calendar6 = 1;
          let cricketV = String.fromCharCode(110,111,110,100,99,95,111,95,49,57,0);
          let rightR = String.fromCharCode(111,95,50,49,95,118,101,114,116,101,120,0);
          let bangW = 5.0;
         flagd &= (String.fromCharCode(106,0) == rightR ? rightR.length : parseInt(`${bangW}`));
         cricketV = `${cricketV.length * cricketV.length}`;
      for (let h = 0; h < 1; h++) {
         calendar6 -= predictionbannerD;
      }
       let canvasz = String.fromCharCode(98,105,97,115,101,100,95,119,95,53,52,0);
       let sharemodaly = String.fromCharCode(110,95,57,50,95,110,98,105,111,0);
      while (!sharemodaly.endsWith(`${predictionbannerD}`)) {
          let livek: Array<any> = [307, 245];
          let whistleL = 0;
          let area0 = String.fromCharCode(119,95,54,53,95,110,118,111,105,99,101,0);
         predictionbannerD <<= Math.min(3, Math.abs(predictionbannerD >> (Math.min(Math.abs(calendar6), 5))));
         livek = [livek.length * 1];
         whistleL &= 1 / (Math.max(4, whistleL));
         area0 = `${3 >> (Math.min(1, livek.length))}`;
         break;
      }
       let iconnointernetc: Array<any> = [312, 601];
      if (2 >= (canvasz.length - 5) || 1 >= (5 - canvasz.length)) {
         calendar6 *= sharemodaly.length * canvasz.length;
      }
          let iconclosewhitel = String.fromCharCode(110,95,57,51,95,115,119,114,101,115,97,109,112,108,101,0);
          let statisticsactiver = 0.0;
         predictionbannerD <<= Math.min(4, Math.abs(calendar6 ^ 1));
         iconclosewhitel = `${parseInt(`${statisticsactiver}`) | iconclosewhitel.length}`;
         statisticsactiver += parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${statisticsactiver}`))))}`);
         flagd |= canvasz.length + 1;
      while (iconnointernetc.length >= predictionbannerD) {
         iconnointernetc = [calendar6 << (Math.min(Math.abs(1), 5))];
         break;
      }
      toponE |= hongkongr.size;
    await refetch();

   let iconnointerneti = liveh.length <= 9621205;
   do {
       let chinasameQ = 2.0;
       let sigmobB = 3.0;
       let neonI = 4.0;
       let basketball7 = String.fromCharCode(117,110,119,114,105,116,97,98,108,101,95,104,95,50,50,0);
         sigmobB /= Math.max(parseFloat(`${parseInt(`${chinasameQ}`)}`), 3);
      while (parseFloat(`${basketball7.length}`) <= neonI) {
          let combinej: Array<any> = [737, 359, 234];
          let trophyb = String.fromCharCode(105,108,108,101,103,97,108,95,115,95,52,57,0);
         neonI *= parseFloat(`${parseInt(`${neonI}`) + parseInt(`${chinasameQ}`)}`);
         combinej = [combinej.length / (Math.max(1, 1))];
         trophyb = "1";
         break;
      }
      for (let b = 0; b < 2; b++) {
          let libfollyu = 3;
          let targetn: Map<any, any> = new Map([[String.fromCharCode(114,101,108,111,97,100,101,114,95,98,95,52,52,0),351], [String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,105,95,54,49,0),331]]);
          let iconpipshrinkJ: Array<any> = [561, 491, 93];
          let iconnewssharec = String.fromCharCode(105,95,49,95,100,105,114,101,99,116,105,111,110,115,0);
          let sheetZ = 5;
         neonI -= parseFloat(`${basketball7.length}`);
         libfollyu -= sheetZ;
         targetn.set(`${sheetZ}`, sheetZ | targetn.size);
         iconpipshrinkJ = [iconpipshrinkJ.length + sheetZ];
         iconnewssharec += `${iconpipshrinkJ.length >> (Math.min(3, Math.abs(targetn.size)))}`;
      }
      let modules_ = 7437121.0 >= neonI;
      do {
          let iconcalendarN = String.fromCharCode(100,95,55,51,95,109,97,99,104,105,110,101,0);
         neonI *= (parseFloat(`${String.fromCharCode(109,0) == iconcalendarN ? iconcalendarN.length : parseInt(`${neonI}`)}`));
         if (modules_) {
            break;
         }
      } while (((parseInt(`${neonI}`) + basketball7.length) <= 4 && (parseInt(`${neonI}`) + 4) <= 4) && modules_);
         sigmobB -= (parseFloat(`${basketball7 == String.fromCharCode(74,0) ? parseInt(`${chinasameQ}`) : basketball7.length}`));
      let promotionO = chinasameQ <= 7687678.0;
      do {
          let borderlessZ = String.fromCharCode(100,109,117,108,95,48,95,54,57,0);
          let turndownV: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,101,103,117,108,97,114,0),817], [String.fromCharCode(111,118,101,114,108,97,121,95,112,95,57,54,0),756], [String.fromCharCode(101,97,116,105,110,103,95,49,95,55,52,0),317]]);
         chinasameQ += borderlessZ.length - basketball7.length;
         borderlessZ += `${2 & turndownV.size}`;
         turndownV = new Map([[`${turndownV.size}`, turndownV.size | 1]]);
         if (promotionO) {
            break;
         }
      } while (promotionO && (chinasameQ >= 5.98));
      while ((chinasameQ + 3.74) >= 1.68) {
          let starV = String.fromCharCode(104,95,54,48,95,115,97,110,101,0);
         chinasameQ /= Math.max(basketball7.length ^ 1, 5);
         starV = `${starV.length}`;
         break;
      }
         sigmobB /= Math.max(parseFloat(`${parseInt(`${chinasameQ}`) & parseInt(`${neonI}`)}`), 1);
       let types0 = 1.0;
       let type_4z = 5.0;
         chinasameQ += parseInt(`${sigmobB}`) ^ basketball7.length;
      for (let c = 0; c < 3; c++) {
         types0 -= parseFloat(`${parseInt(`${sigmobB}`) / (Math.max(basketball7.length, 10))}`);
      }
         types0 -= parseFloat(`${parseInt(`${chinasameQ}`)}`);
      liveh.push(temperaturez.length);
      if (iconnointerneti) {
         break;
      }
   } while (((liveh.length % (Math.max(hongkongr.size, 9))) <= 5 && (liveh.length % (Math.max(7, hongkongr.size))) <= 5) && iconnointerneti);
   while (hongkongr.get(`${toponE}`) != null) {
      hongkongr = new Map([[`${hongkongr.size}`, toponE]]);
      break;
   }
      hongkongr = new Map([[`${hongkongr.size}`, hongkongr.size ^ 3]]);
       let huawei1: Map<any, any> = new Map([[String.fromCharCode(109,115,103,115,109,95,120,95,51,49,0),256], [String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,95,112,95,49,56,0),309], [String.fromCharCode(102,114,101,101,102,111,114,109,95,120,95,57,48,0),311]]);
       let reddownarrown: Map<any, any> = new Map([[String.fromCharCode(108,101,114,112,95,113,95,52,49,0),814], [String.fromCharCode(107,95,52,51,95,102,105,110,100,101,112,0),187]]);
         huawei1 = new Map([[`${reddownarrown.size}`, reddownarrown.size]]);
         huawei1 = new Map([[`${huawei1.size}`, 3 >> (Math.min(5, Math.abs(huawei1.size)))]]);
         huawei1 = new Map([[`${huawei1.size}`, 2]]);
      let searchbark = 5151844 <= reddownarrown.size;
      do {
          let mbnativeadvancedA = String.fromCharCode(109,106,112,101,103,106,112,101,103,95,108,95,49,52,0);
          let iconclosewhiteL = String.fromCharCode(109,112,101,103,95,109,95,57,0);
          let othermatchdetailbgi = 3.0;
         reddownarrown.set(iconclosewhiteL, iconclosewhiteL.length);
         mbnativeadvancedA += `${(mbnativeadvancedA == String.fromCharCode(112,0) ? parseInt(`${othermatchdetailbgi}`) : mbnativeadvancedA.length)}`;
         othermatchdetailbgi *= parseInt(`${othermatchdetailbgi}`) + mbnativeadvancedA.length;
         if (searchbark) {
            break;
         }
      } while (searchbark && (1 >= (1 << (Math.min(3, Math.abs(reddownarrown.size))))));
          let pageG = false;
          let iconpointscoreg: Map<any, any> = new Map([[String.fromCharCode(109,95,56,51,95,112,97,116,99,104,0),909], [String.fromCharCode(99,95,51,95,99,111,110,99,97,116,100,101,99,0),312]]);
         reddownarrown = new Map([[`${iconpointscoreg.size}`, (iconpointscoreg.size / (Math.max(2, (pageG ? 2 : 5))))]]);
          let footballtrophyy: Array<any> = [String.fromCharCode(97,95,49,95,116,111,114,101,100,0), String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,106,95,57,48,0)];
         huawei1.set(`${footballtrophyy.length}`, reddownarrown.size / (Math.max(footballtrophyy.length, 5)));
      toponE -= parseInt(`${historyU}`) << (Math.min(o_managerk.length, 3));
   for (let c = 0; c < 2; c++) {
       let whistleD = true;
       let greyarrowupn = 4.0;
       let predictionbannershared_: Array<any> = [37, 459, 893];
         predictionbannershared_ = [3 * predictionbannershared_.length];
          let iconstarT = true;
         predictionbannershared_.push(parseInt(`${greyarrowupn}`) | 1);
         iconstarT = !iconstarT;
          let push1 = String.fromCharCode(122,95,57,49,95,112,114,101,100,105,99,116,105,118,101,0);
          let showv = false;
         greyarrowupn /= Math.max(1, 2);
         push1 = `${push1.length - push1.length}`;
         showv = push1 == String.fromCharCode(51,0);
          let terms1 = 4;
          let lessi = 4.0;
         greyarrowupn -= parseInt(`${lessi}`) / 1;
         terms1 >>= Math.min(Math.abs(3 ^ terms1), 4);
         lessi -= terms1;
      while (2 < predictionbannershared_.length) {
         predictionbannershared_ = [((whistleD ? 5 : 1) - parseInt(`${greyarrowupn}`))];
         break;
      }
         predictionbannershared_.push(predictionbannershared_.length);
         whistleD = (parseInt(`${greyarrowupn}`) / (Math.max(7, predictionbannershared_.length))) == 23;
         greyarrowupn += predictionbannershared_.length / 1;
      for (let e = 0; e < 3; e++) {
          let renderg = String.fromCharCode(103,114,105,100,95,48,95,56,55,0);
          let detail3 = String.fromCharCode(107,95,52,54,95,98,97,108,97,110,99,101,115,0);
          let bufferE = String.fromCharCode(110,95,53,50,95,112,105,110,107,0);
         predictionbannershared_.push((bufferE == String.fromCharCode(89,0) ? predictionbannershared_.length : bufferE.length));
         renderg = `${renderg.length}`;
         detail3 += `${detail3.length}`;
      }
      toponE ^= hongkongr.size | 3;
   }
      historyU -= parseFloat(`${toponE - parseInt(`${libapminsighta4}`)}`);
    setIsRefreshing(false);

      libapminsighta4 -= 1;
   let step_ = 6740228.0 <= libapminsighta4;
   do {
       let relatedh = String.fromCharCode(120,95,49,57,95,99,111,110,116,114,111,108,108,101,100,0);
       let baselineV = String.fromCharCode(114,101,98,97,115,101,95,50,95,55,54,0);
       let pageA = String.fromCharCode(106,95,49,50,95,109,97,103,101,110,116,97,0);
       let register_6G = 1.0;
       let detailsP: Array<any> = [425, 370, 20];
      for (let x = 0; x < 2; x++) {
         baselineV += `${relatedh.length ^ 2}`;
      }
          let comment5 = false;
          let configureo = String.fromCharCode(122,95,57,53,95,99,97,99,104,105,110,103,0);
         pageA += `${(String.fromCharCode(52,0) == relatedh ? detailsP.length : relatedh.length)}`;
         comment5 = ((configureo.length ^ (!comment5 ? configureo.length : 96)) == 96);
         pageA += "2";
      if ((register_6G - 5.21) < 4.82) {
         register_6G += relatedh.length;
      }
      for (let w = 0; w < 2; w++) {
         baselineV += `${pageA.length + 2}`;
      }
         register_6G /= Math.max(2, parseInt(`${register_6G}`));
      while (detailsP.length == pageA.length) {
         detailsP.push(detailsP.length);
         break;
      }
         relatedh = `${detailsP.length}`;
          let iconnointernetF = 4.0;
          let libmapbufferjnig = true;
         pageA += `${relatedh.length}`;
         iconnointernetF /= Math.max(2 % (Math.max(parseInt(`${iconnointernetF}`), 10)), 4);
         libmapbufferjnig = iconnointernetF > 50.70;
       let bggradienti = String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,104,95,52,55,0);
      for (let m = 0; m < 3; m++) {
         pageA += `${baselineV.length << (Math.min(Math.abs(2), 3))}`;
      }
         pageA = `${detailsP.length}`;
         baselineV = `${2 * baselineV.length}`;
         detailsP.push(parseInt(`${register_6G}`) / (Math.max(pageA.length, 2)));
         detailsP.push((String.fromCharCode(107,0) == relatedh ? detailsP.length : relatedh.length));
      libapminsighta4 += detailsP.length;
      if (step_) {
         break;
      }
   } while (step_ && ((toponE >> (Math.min(Math.abs(2), 4))) <= 1));
   while (4.10 < (5 * w_positiona)) {
      libapminsighta4 += 1;
      break;
   }
   let benefitL = 9801402.0 <= w_positiona;
   do {
      w_positiona *= parseFloat(`${hongkongr.size - parseInt(`${historyU}`)}`);
      if (benefitL) {
         break;
      }
   } while ((liveh.includes(w_positiona)) && benefitL);
      w_positiona -= parseFloat(`${parseInt(`${historyU}`)}`);
      liveh.push(toponE);
    return;
  }, []);

  const {
    data: videos,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
    remove,
  } = useMinivodQuery(fetchMode, isVip)

  const checkConnection = useCallback(async () => {
       let detailss = 4.0;
    let greytickx = 0.0;
    let selecteda: Array<any> = [483, 160, 137];
    let libturbomodulejsijnie = String.fromCharCode(110,97,109,101,95,49,95,51,57,0);
    let middleT = false;
    let hometeamfield_ = String.fromCharCode(115,95,51,54,95,113,122,98,105,110,0);
    let selectedS: Map<any, any> = new Map([[String.fromCharCode(97,114,116,119,111,114,107,95,112,95,54,53,0),747], [String.fromCharCode(98,97,100,103,101,95,118,95,50,51,0),519]]);
    let file2 = true;
    let popupy = 5;
    let catalogm: Array<any> = [163, 653, 181];
    let iconsubssuccessR: Array<any> = [174, 78, 926];
    let clearE = 1;
    let imagenomoredatav = true;
    let static_yvX: Array<any> = [547, 57];
      hometeamfield_ = `${(popupy + (middleT ? 4 : 1))}`;
   let selectr = 8845122.0 >= detailss;
   do {
      detailss *= 2 << (Math.min(1, Math.abs(selectedS.size)));
      if (selectr) {
         break;
      }
   } while (selectr && (1.37 > detailss));
   while (hometeamfield_.includes(`${file2}`)) {
      hometeamfield_ += `${parseInt(`${detailss}`) / 3}`;
      break;
   }
   while ((4 ^ popupy) > 1) {
      popupy &= parseInt(`${greytickx}`);
      break;
   }
   let libavformatq = 6436899 <= libturbomodulejsijnie.length;
   do {
      libturbomodulejsijnie += "3";
      if (libavformatq) {
         break;
      }
   } while ((!hometeamfield_.endsWith(libturbomodulejsijnie)) && libavformatq);
   while ((iconsubssuccessR.length & 3) < 3) {
      middleT = 7.81 == greytickx || libturbomodulejsijnie == String.fromCharCode(77,0);
      break;
   }
   while ((greytickx - parseFloat(`${libturbomodulejsijnie.length}`)) > 3.49) {
      libturbomodulejsijnie += "3";
      break;
   }

    const state = await NetInfo.fetch();

   while (libturbomodulejsijnie.length < 1 && !middleT) {
      libturbomodulejsijnie += `${parseInt(`${detailss}`) << (Math.min(Math.abs(1), 4))}`;
      break;
   }
   if (detailss <= 2.79) {
      detailss += 1;
   }
       let penaltyshootnogoalm = String.fromCharCode(104,95,49,56,95,108,105,98,121,117,118,0);
       let matchesQ = 4.0;
       let abidetectv = 4.0;
      let rewardL = penaltyshootnogoalm.length <= 6306124;
      do {
          let background_ = String.fromCharCode(99,97,109,101,114,97,95,119,95,53,57,0);
          let middlesound7: Map<any, any> = new Map([[String.fromCharCode(115,95,56,48,95,103,101,116,112,105,120,0),String.fromCharCode(105,95,51,53,95,101,108,97,112,115,101,100,0)], [String.fromCharCode(101,95,49,52,95,109,111,100,101,108,0),String.fromCharCode(98,95,50,95,105,110,115,116,97,108,108,115,0)]]);
         penaltyshootnogoalm += `${(String.fromCharCode(57,0) == background_ ? middlesound7.size : background_.length)}`;
         if (rewardL) {
            break;
         }
      } while (rewardL && ((matchesQ + 1.26) == 4.33 || 1.78 == (1.26 + matchesQ)));
       let abidetect2 = String.fromCharCode(113,95,51,57,95,116,114,105,97,110,103,108,101,0);
       let smallorangemanP = String.fromCharCode(109,95,56,55,95,117,121,118,121,116,111,121,117,118,0);
         penaltyshootnogoalm += `${(String.fromCharCode(78,0) == smallorangemanP ? smallorangemanP.length : parseInt(`${matchesQ}`))}`;
          let arrowupk = false;
          let scorepopsoundN = 1.0;
         abidetect2 += `${penaltyshootnogoalm.length}`;
         arrowupk = !arrowupk;
         scorepopsoundN *= parseFloat(`${2 % (Math.max(parseInt(`${scorepopsoundN}`), 8))}`);
         abidetectv -= 1 % (Math.max(9, parseInt(`${abidetectv}`)));
         abidetectv /= Math.max(2, 3 * parseInt(`${abidetectv}`));
      let predictiondefaultE = abidetect2.length >= 6974024;
      do {
         abidetect2 = `${parseInt(`${abidetectv}`) * 3}`;
         if (predictiondefaultE) {
            break;
         }
      } while ((abidetect2.length > 3) && predictiondefaultE);
         matchesQ *= penaltyshootnogoalm.length - 3;
      while (!abidetect2.endsWith(`${matchesQ}`)) {
          let hovero = 2.0;
          let iconmoref = String.fromCharCode(114,101,97,100,109,101,95,116,95,56,0);
          let playlistc = 3.0;
         matchesQ += smallorangemanP.length ^ penaltyshootnogoalm.length;
         hovero -= parseFloat(`${1}`);
         iconmoref = `${parseInt(`${hovero}`)}`;
         playlistc += parseInt(`${hovero}`);
         break;
      }
      detailss /= Math.max(penaltyshootnogoalm.length % (Math.max(1, 2)), 2);
      middleT = libturbomodulejsijnie == String.fromCharCode(120,0);
       let animationsC = 0.0;
       let homeiconV = 2;
      for (let s = 0; s < 1; s++) {
          let mounting6 = String.fromCharCode(107,95,50,50,95,115,116,114,105,110,103,117,116,105,108,115,0);
          let klevinC = false;
          let latn3 = 5;
          let historyO: Map<any, any> = new Map([[String.fromCharCode(119,95,54,56,95,105,100,99,116,108,108,109,0),false ], [String.fromCharCode(119,95,54,48,95,115,116,111,114,109,98,105,114,100,0),false ]]);
          let renderd = false;
         animationsC += parseFloat(`${2 + historyO.size}`);
         mounting6 = `${1 ^ mounting6.length}`;
         klevinC = mounting6.endsWith(`${renderd}`);
         latn3 <<= Math.min(parseInt(`${Math.abs(((renderd ? 2 : 2) % (Math.max(mounting6.length, 6))))}`), 5);
         historyO.set(mounting6, latn3);
      }
       let sourceG = String.fromCharCode(114,95,55,52,95,99,111,118,114,0);
       let libapminsightbk = String.fromCharCode(117,116,120,111,115,95,102,95,57,52,0);
      file2 = file2 && iconsubssuccessR.length < 16;
   if ((greytickx / 2.23) < 5.84) {
       let smallsoundu = 3.0;
       let buildl: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,101,110,99,95,56,95,51,51,0),230], [String.fromCharCode(101,95,53,48,95,114,101,112,117,98,108,105,115,104,0),673]]);
       let crossM = 1.0;
      while ((1.2 - smallsoundu) >= 4.78) {
          let bggradients = String.fromCharCode(103,101,111,112,111,108,121,95,52,95,50,0);
          let stylem = 1.0;
          let yingB = 3;
          let viewerV = 5.0;
          let promotion1 = String.fromCharCode(102,111,111,116,98,97,108,108,95,112,95,55,49,0);
         smallsoundu += parseFloat(`${3}`);
         bggradients += `${promotion1.length | parseInt(`${viewerV}`)}`;
         stylem += parseFloat(`${yingB}`);
         yingB >>= Math.min(Math.abs(parseInt(`${viewerV}`)), 4);
         promotion1 = `${promotion1.length & yingB}`;
         break;
      }
      while (5.20 == smallsoundu) {
         smallsoundu /= Math.max(parseFloat(`${parseInt(`${smallsoundu}`) ^ buildl.size}`), 4);
         break;
      }
         crossM /= Math.max(4, parseFloat(`${parseInt(`${smallsoundu}`) & buildl.size}`));
      while ((smallsoundu / (Math.max(crossM, 10))) >= 4.85) {
         crossM -= parseFloat(`${parseInt(`${crossM}`) % (Math.max(buildl.size, 8))}`);
         break;
      }
      while (Array.from(buildl.keys()).includes(`${smallsoundu}`)) {
         smallsoundu *= parseFloat(`${3}`);
         break;
      }
          let brightnessE = 4.0;
          let libhermesV = String.fromCharCode(115,116,97,99,107,101,100,95,110,95,57,54,0);
         crossM /= Math.max(parseFloat(`${2 + parseInt(`${brightnessE}`)}`), 5);
         brightnessE -= 1 / (Math.max(1, libhermesV.length));
         libhermesV = `${2 / (Math.max(2, libhermesV.length))}`;
       let chinaW = 1;
       let aboutV = 0;
      for (let f = 0; f < 3; f++) {
         aboutV *= chinaW;
      }
      let dropdownG = chinaW <= 5893096;
      do {
         chinaW |= chinaW - parseInt(`${smallsoundu}`);
         if (dropdownG) {
            break;
         }
      } while ((1 == chinaW) && dropdownG);
      hometeamfield_ += `${parseInt(`${crossM}`) + 3}`;
   }
   let shrunky = String.fromCharCode(116,109,56,0) == libturbomodulejsijnie;
   do {
      libturbomodulejsijnie += `${hometeamfield_.length}`;
      if (shrunky) {
         break;
      }
   } while (shrunky && (libturbomodulejsijnie.length >= 5 || !middleT));
    const offline = !(state.isConnected && state.isInternetReachable);

   while (4.23 < (hometeamfield_.length - detailss)) {
      hometeamfield_ += `${selectedS.size}`;
      break;
   }
      detailss += hometeamfield_.length - 2;
   while (4 > (popupy / 2) && file2) {
       let emojiheartG = 5.0;
       let imagewatchlivea = String.fromCharCode(121,95,48,95,100,99,97,100,101,99,0);
       let iconpipexpandr = String.fromCharCode(109,118,115,101,116,95,105,95,54,54,0);
       let shareblack2 = String.fromCharCode(106,95,51,53,95,102,105,114,101,0);
       let detail_ = 0.0;
         imagewatchlivea = `${(String.fromCharCode(104,0) == shareblack2 ? imagewatchlivea.length : shareblack2.length)}`;
      while (imagewatchlivea.endsWith(shareblack2)) {
         imagewatchlivea = `${iconpipexpandr.length}`;
         break;
      }
         shareblack2 += "2";
         imagewatchlivea = `${(String.fromCharCode(86,0) == shareblack2 ? shareblack2.length : parseInt(`${detail_}`))}`;
         iconpipexpandr += `${shareblack2.length + 3}`;
      while (1.54 >= detail_) {
          let agreement2 = 0;
          let starN: Map<any, any> = new Map([[String.fromCharCode(105,95,53,48,95,104,97,100,100,0),true ], [String.fromCharCode(115,95,57,56,95,114,111,119,107,101,121,0),false ], [String.fromCharCode(104,95,49,95,109,97,105,110,100,98,0),false ]]);
         emojiheartG *= parseFloat(`${iconpipexpandr.length / (Math.max(6, starN.size))}`);
         agreement2 >>= Math.min(Math.abs(agreement2 / (Math.max(agreement2, 2))), 3);
         starN = new Map([[`${agreement2}`, agreement2]]);
         break;
      }
         detail_ -= 3 - parseInt(`${detail_}`);
         iconpipexpandr = `${parseInt(`${emojiheartG}`)}`;
         imagewatchlivea = `${shareblack2.length ^ iconpipexpandr.length}`;
       let kuaishouC = String.fromCharCode(109,95,55,50,95,120,111,114,101,100,0);
      let tickedd = 5978501.0 >= emojiheartG;
      do {
         emojiheartG += parseFloat(`${3}`);
         if (tickedd) {
            break;
         }
      } while (tickedd && ((imagewatchlivea.length + parseInt(`${emojiheartG}`)) < 1));
          let scorej = String.fromCharCode(101,118,97,108,117,97,116,101,95,56,95,52,48,0);
          let filedO = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,48,95,57,49,0);
          let playk = 3.0;
         shareblack2 = `${filedO.length}`;
         scorej = `${scorej.length ^ 3}`;
         filedO += `${scorej.length >> (Math.min(Math.abs(2), 4))}`;
         playk /= Math.max(parseInt(`${playk}`), 2);
         kuaishouC = `${imagewatchlivea.length}`;
          let logouserE = String.fromCharCode(101,115,99,97,112,101,95,101,95,49,0);
          let yellowredcard3 = 3.0;
          let builda = String.fromCharCode(117,110,109,97,114,115,104,97,108,95,111,95,50,51,0);
         imagewatchlivea += `${iconpipexpandr.length + 3}`;
         logouserE = `${(String.fromCharCode(57,0) == logouserE ? logouserE.length : parseInt(`${yellowredcard3}`))}`;
         yellowredcard3 *= parseInt(`${yellowredcard3}`) << (Math.min(logouserE.length, 4));
         builda += "1";
         emojiheartG *= (parseFloat(`${String.fromCharCode(105,0) == kuaishouC ? kuaishouC.length : imagewatchlivea.length}`));
      popupy ^= shareblack2.length % 1;
      break;
   }
   if (3 <= selecteda.length) {
       let agreementx: Map<any, any> = new Map([[String.fromCharCode(116,97,107,100,115,112,95,51,95,54,54,0),true ], [String.fromCharCode(104,95,51,49,95,97,118,112,105,99,116,117,114,101,0),false ]]);
       let qaagi = 4;
       let internet2: Array<any> = [234, 590, 414];
       let iconwechatW = String.fromCharCode(117,95,55,52,95,99,97,112,105,116,97,108,105,122,105,110,103,0);
      if (Array.from(agreementx.keys()).includes(`${qaagi}`)) {
         qaagi += 2;
      }
      let balln = qaagi >= 6951583;
      do {
         qaagi >>= Math.min(Math.abs(iconwechatW.length | internet2.length), 2);
         if (balln) {
            break;
         }
      } while ((agreementx.get(`${qaagi}`) == null) && balln);
         internet2.push(agreementx.size ^ qaagi);
       let iconmoreZ = 5;
       let signinupv = 5;
      let arrowz = iconmoreZ >= 9860102;
      do {
         iconmoreZ %= Math.max(iconwechatW.length ^ 1, 2);
         if (arrowz) {
            break;
         }
      } while (arrowz && (iconmoreZ < 4));
      if (agreementx.get(`${signinupv}`) != null) {
         signinupv >>= Math.min(1, Math.abs(signinupv % (Math.max(10, iconmoreZ))));
      }
          let flipperI = 3.0;
         iconwechatW += `${iconwechatW.length}`;
         flipperI *= parseFloat(`${parseInt(`${flipperI}`) & 2}`);
      if (!iconwechatW.startsWith(`${internet2.length}`)) {
         iconwechatW = `${3 | signinupv}`;
      }
         qaagi /= Math.max(5, internet2.length | 3);
      let subbasketballplayerQ = internet2.length >= 7689561;
      do {
          let targetK = true;
          let armvaM = true;
         internet2 = [2 / (Math.max(qaagi, 7))];
         targetK = !targetK && !armvaM;
         armvaM = (targetK ? armvaM : targetK);
         if (subbasketballplayerQ) {
            break;
         }
      } while (subbasketballplayerQ && (1 == (agreementx.size >> (Math.min(4, internet2.length)))));
      let zoomf = iconwechatW == String.fromCharCode(53,52,110,54,50,0);
      do {
         iconwechatW = `${iconwechatW.length % (Math.max(2, 9))}`;
         if (zoomf) {
            break;
         }
      } while (((iconmoreZ % 1) == 2) && zoomf);
      while (signinupv == iconmoreZ) {
         signinupv *= iconwechatW.length / 3;
         break;
      }
      file2 = iconwechatW.length >= qaagi;
   }
      detailss += (2 % (Math.max(2, (file2 ? 1 : 2))));
   if (parseFloat(`${selectedS.size}`) < greytickx) {
      selectedS.set(hometeamfield_, selectedS.size | hometeamfield_.length);
   }
       let libsentryO = 4.0;
      while (2.32 <= libsentryO) {
         libsentryO *= parseFloat(`${parseInt(`${libsentryO}`) % 1}`);
         break;
      }
         libsentryO *= parseFloat(`${3 - parseInt(`${libsentryO}`)}`);
       let tempnodatagifF = String.fromCharCode(119,95,51,95,116,109,109,98,0);
       let baseB = String.fromCharCode(112,95,50,48,95,114,111,119,107,101,121,0);
      greytickx -= parseFloat(`${parseInt(`${libsentryO}`)}`);
    setIsOffline(offline);

   while (!selecteda.includes(greytickx)) {
       let volumer = String.fromCharCode(117,95,51,95,100,101,109,111,100,117,108,97,116,101,0);
       let iconeditk = String.fromCharCode(98,97,110,100,95,114,95,51,0);
       let footballtrophyR = 0.0;
       let libfabricjniB = true;
       let middlesoundx = String.fromCharCode(113,95,57,54,95,102,111,108,100,0);
      let libreanimatedv = 6756743 >= iconeditk.length;
      do {
         iconeditk = `${((libfabricjniB ? 1 : 1))}`;
         if (libreanimatedv) {
            break;
         }
      } while (libreanimatedv && (!libfabricjniB));
         libfabricjniB = middlesoundx.length > 59 && iconeditk == String.fromCharCode(66,0);
         libfabricjniB = (1 > (middlesoundx.length / (Math.max(8, (libfabricjniB ? middlesoundx.length : 1)))));
         middlesoundx += `${volumer.length}`;
      for (let c = 0; c < 2; c++) {
         iconeditk = `${iconeditk.length}`;
      }
          let referrerO = 0.0;
          let analytics3 = String.fromCharCode(100,95,50,53,95,116,104,114,101,97,100,115,97,102,101,0);
         volumer = `${parseInt(`${referrerO}`)}`;
         referrerO -= parseFloat(`${analytics3.length}`);
         analytics3 += `${analytics3.length % (Math.max(5, analytics3.length))}`;
      for (let k = 0; k < 1; k++) {
          let yinga = String.fromCharCode(104,95,50,56,95,115,116,114,101,101,116,0);
          let topon5 = 0.0;
          let whistleorangeT = 0.0;
         middlesoundx = `${(volumer == String.fromCharCode(83,0) ? iconeditk.length : volumer.length)}`;
         yinga = `${parseInt(`${topon5}`) & parseInt(`${whistleorangeT}`)}`;
         topon5 /= Math.max((parseFloat(`${yinga == String.fromCharCode(89,0) ? yinga.length : parseInt(`${topon5}`)}`)), 4);
         whistleorangeT += yinga.length;
      }
         libfabricjniB = !libfabricjniB;
         libfabricjniB = iconeditk == String.fromCharCode(77,0) || 58.63 <= footballtrophyR;
       let commentn = 3;
       let y_hashy = 0;
      for (let e = 0; e < 2; e++) {
         y_hashy %= Math.max(3, 1);
      }
         iconeditk = `${parseInt(`${footballtrophyR}`) - 1}`;
       let backiconmaskR: Map<any, any> = new Map([[String.fromCharCode(117,95,49,57,95,111,116,111,102,0),373], [String.fromCharCode(119,95,49,54,95,119,97,110,116,0),181], [String.fromCharCode(97,108,108,112,97,115,115,95,50,95,52,57,0),948]]);
       let distY = 0.0;
       let yellows = 3.0;
          let arrowselectdownX = 1.0;
          let forwardt = true;
         libfabricjniB = 24.75 < footballtrophyR && y_hashy < 56;
         arrowselectdownX *= (parseFloat(`${(forwardt ? 4 : 2) | parseInt(`${arrowselectdownX}`)}`));
         forwardt = arrowselectdownX < 35.85 || !forwardt;
      selecteda = [((middleT ? 5 : 3))];
      break;
   }
       let whiteanimationlivez: Array<any> = [919, 728];
       let leakcheckerT: Array<any> = [633, 648];
      for (let c = 0; c < 3; c++) {
         whiteanimationlivez.push(leakcheckerT.length & whiteanimationlivez.length);
      }
         whiteanimationlivez.push(leakcheckerT.length);
      while ((leakcheckerT.length ^ whiteanimationlivez.length) == 2) {
          let pathP = String.fromCharCode(105,115,110,97,110,95,108,95,53,51,0);
         leakcheckerT = [leakcheckerT.length % (Math.max(1, 6))];
         pathP = `${(pathP == String.fromCharCode(111,0) ? pathP.length : pathP.length)}`;
         break;
      }
      let combine2 = 7803704 >= whiteanimationlivez.length;
      do {
         whiteanimationlivez.push(3 & leakcheckerT.length);
         if (combine2) {
            break;
         }
      } while ((3 >= (leakcheckerT.length << (Math.min(1, whiteanimationlivez.length)))) && combine2);
       let ewardedK = false;
      let iconclosewhitebgs = 5243258 <= whiteanimationlivez.length;
      do {
          let iconmoreY = String.fromCharCode(104,101,118,99,95,103,95,50,0);
          let armva2: Array<any> = [693, 823];
          let gpayJ = String.fromCharCode(115,112,101,99,105,102,105,101,100,95,97,95,53,54,0);
          let penaltyshootI = String.fromCharCode(102,95,52,51,95,112,114,111,109,111,116,101,0);
         whiteanimationlivez.push(((ewardedK ? 2 : 1) - 1));
         iconmoreY += `${penaltyshootI.length % 3}`;
         armva2 = [gpayJ.length];
         gpayJ = `${(gpayJ == String.fromCharCode(68,0) ? gpayJ.length : armva2.length)}`;
         penaltyshootI = `${iconmoreY.length + armva2.length}`;
         if (iconclosewhitebgs) {
            break;
         }
      } while (((leakcheckerT.length / 1) >= 5 || 1 >= (whiteanimationlivez.length / (Math.max(3, leakcheckerT.length)))) && iconclosewhitebgs);
      catalogm.push(3);
      popupy |= 2;
   if ((5 + popupy) > 3) {
       let live5 = String.fromCharCode(116,95,51,56,95,114,101,103,101,120,0);
         live5 = `${live5.length}`;
      for (let o = 0; o < 2; o++) {
         live5 = `${(String.fromCharCode(85,0) == live5 ? live5.length : live5.length)}`;
      }
      if (live5 == String.fromCharCode(116,0) || live5 != String.fromCharCode(78,0)) {
          let arrowright6 = String.fromCharCode(102,95,49,49,95,111,118,101,114,114,105,100,100,101,110,0);
          let halfL = 0.0;
          let watchX = String.fromCharCode(98,97,108,97,110,99,101,115,95,55,95,50,48,0);
         live5 = `${live5.length | 2}`;
         arrowright6 += `${arrowright6.length}`;
         halfL += 2 % (Math.max(9, arrowright6.length));
         watchX = `${parseInt(`${halfL}`) % 3}`;
      }
      popupy ^= (live5 == String.fromCharCode(71,0) ? live5.length : iconsubssuccessR.length);
   }
   let profileactiveR = 9495361 <= selectedS.size;
   do {
      selectedS = new Map([[`${catalogm.length}`, parseInt(`${greytickx}`) % 2]]);
      if (profileactiveR) {
         break;
      }
   } while ((4 < (selectedS.size / 1)) && profileactiveR);
   if (3 < (iconsubssuccessR.length << (Math.min(4, selecteda.length)))) {
      selecteda = [selectedS.size];
   }
      greytickx /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(popupy), 5))}`), 4);
    if (!offline) {

      middleT = catalogm.length >= 52;
      libturbomodulejsijnie += `${((middleT ? 2 : 2) + selectedS.size)}`;
       let downloaderg = String.fromCharCode(102,97,107,101,95,102,95,53,57,0);
       let awayicon5 = 5.0;
         downloaderg += `${3 ^ downloaderg.length}`;
         awayicon5 *= (String.fromCharCode(122,0) == downloaderg ? parseInt(`${awayicon5}`) : downloaderg.length);
      let langkey8 = 5092276.0 >= awayicon5;
      do {
          let qaagN = 4;
          let orientation_ = String.fromCharCode(122,95,50,53,95,102,105,110,116,0);
         awayicon5 -= 1 & qaagN;
         qaagN &= orientation_.length;
         orientation_ += "3";
         if (langkey8) {
            break;
         }
      } while (langkey8 && ((downloaderg.length - 3) <= 4 && (3 >> (Math.min(5, downloaderg.length))) <= 1));
         downloaderg += `${downloaderg.length << (Math.min(5, Math.abs(parseInt(`${awayicon5}`))))}`;
       let filterV = true;
       let iconfeedbackI = false;
         filterV = iconfeedbackI || !filterV;
      selectedS = new Map([[libturbomodulejsijnie, 3]]);
   for (let r = 0; r < 2; r++) {
       let yellowscoreballl = 3;
       let mbbidk = String.fromCharCode(103,95,56,52,95,110,101,116,119,111,114,107,115,0);
       let info8 = 3.0;
       let matches3 = String.fromCharCode(109,101,109,115,101,116,95,106,95,49,55,0);
       let long_lln = 3;
          let ballV = 2.0;
          let commentM = 3.0;
         matches3 = `${(matches3 == String.fromCharCode(89,0) ? parseInt(`${ballV}`) : matches3.length)}`;
         ballV *= parseInt(`${commentM}`) - 3;
         commentM /= Math.max(1, 3);
      let dragclose1 = 6637468 >= mbbidk.length;
      do {
         mbbidk = "3";
         if (dragclose1) {
            break;
         }
      } while ((1 == (mbbidk.length << (Math.min(4, Math.abs(yellowscoreballl))))) && dragclose1);
      while (parseInt(`${info8}`) == matches3.length) {
         info8 /= Math.max((mbbidk == String.fromCharCode(80,0) ? mbbidk.length : yellowscoreballl), 1);
         break;
      }
      if (2 == yellowscoreballl) {
         mbbidk = `${1 ^ long_lln}`;
      }
      let libturbomodulejsijni2 = long_lln <= 8112773;
      do {
          let containert = String.fromCharCode(112,95,56,51,95,99,108,111,99,107,119,105,115,101,0);
          let iconclosewhitebg_ = String.fromCharCode(111,95,53,53,95,115,117,98,112,105,120,101,108,0);
          let textW = 5;
          let libavcodecr: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,48,95,51,50,0),652], [String.fromCharCode(97,115,110,116,95,116,95,49,0),972], [String.fromCharCode(108,105,98,120,118,105,100,95,54,95,49,0),386]]);
         long_lln %= Math.max(1, 2);
         containert += `${1 ^ iconclosewhitebg_.length}`;
         iconclosewhitebg_ += `${(containert == String.fromCharCode(67,0) ? containert.length : iconclosewhitebg_.length)}`;
         textW *= 2 & libavcodecr.size;
         libavcodecr.set(`${textW}`, 1);
         if (libturbomodulejsijni2) {
            break;
         }
      } while ((3 > (long_lln & yellowscoreballl)) && libturbomodulejsijni2);
      for (let j = 0; j < 3; j++) {
          let controlse: Map<any, any> = new Map([[String.fromCharCode(114,100,99,111,115,116,95,55,95,57,48,0),816], [String.fromCharCode(97,118,112,114,105,118,95,104,95,54,50,0),662]]);
          let termsv = 0.0;
          let awayteamfieldb: Map<any, any> = new Map([[String.fromCharCode(97,95,54,57,95,112,105,99,107,101,114,115,0),447], [String.fromCharCode(101,120,116,101,114,110,95,119,95,56,56,0),184]]);
         mbbidk = `${2 << (Math.min(3, Math.abs(yellowscoreballl)))}`;
         controlse.set(`${termsv}`, 1);
         termsv /= Math.max(1, parseInt(`${termsv}`));
         awayteamfieldb = new Map([[`${controlse.size}`, awayteamfieldb.size / (Math.max(1, 7))]]);
      }
         matches3 += "3";
      for (let l = 0; l < 1; l++) {
         matches3 = `${long_lln}`;
      }
       let catagoryD: Array<any> = [956, 832, 187];
         long_lln |= long_lln;
      let connectionB = yellowscoreballl <= 9269305;
      do {
         yellowscoreballl <<= Math.min(Math.abs(parseInt(`${info8}`)), 1);
         if (connectionB) {
            break;
         }
      } while (((2.99 * info8) >= 1.62) && connectionB);
      let statsnomoredata6 = String.fromCharCode(121,48,113,103,55,110,110,111,0) == matches3;
      do {
         matches3 += `${matches3.length}`;
         if (statsnomoredata6) {
            break;
         }
      } while (statsnomoredata6 && (long_lln >= matches3.length));
      if ((info8 / (Math.max(3, matches3.length))) < 3.34 && 5.58 < (info8 / 3.34)) {
          let core0 = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,121,95,49,51,0);
          let code9 = String.fromCharCode(122,95,50,51,95,114,97,112,105,100,106,115,111,110,0);
          let largesoundV: Array<any> = [315, 112, 149];
         info8 += matches3.length;
         core0 = `${code9.length ^ core0.length}`;
         code9 = `${(core0 == String.fromCharCode(57,0) ? largesoundV.length : core0.length)}`;
         largesoundV = [3 % (Math.max(4, core0.length))];
      }
      while ((long_lln >> (Math.min(Math.abs(1), 5))) >= 5 || (1 >> (Math.min(5, Math.abs(long_lln)))) >= 1) {
         matches3 = `${parseInt(`${info8}`) << (Math.min(1, Math.abs(1)))}`;
         break;
      }
      while (mbbidk.length < parseInt(`${info8}`)) {
         info8 *= yellowscoreballl;
         break;
      }
      detailss += selecteda.length;
   }
      greytickx *= (parseFloat(`${catalogm.length << (Math.min(5, Math.abs((imagenomoredatav ? 1 : 2))))}`));
   if ((clearE + parseInt(`${detailss}`)) == 1 || 3.5 == (2.53 + detailss)) {
      clearE *= hometeamfield_.length * 3;
   }
      selectedS = new Map([[`${file2}`, hometeamfield_.length]]);
      handleRefresh();
    }
  }, []);

  
  useFocusEffect(useCallback(() => {
    yys_giftbutton_footballtrophy.watchAnytimeViewsAnalytics({
      isXmode: adultMode,
    });
  }, [adultMode]));
  

  
  
  
  
  

  
  
  
  

  
  
  
  
  
  
  
  
  
  //   return () => unsubscribe();
  

  useEffect(() => {
    setPressTabScroll(true);

    
    
    
    

    
    setTimeout(() => {
      setPressTabScroll(false);
      
    }, 500);
  }, [adultMode]);

  useEffect(() => {
    if (videos != undefined) {
      let filtered = videos?.pages.flat().filter(x => x)
      if (isVip) {
        filtered = filtered.filter(x => !x.is_ads)
      }
      setFlattenedVideos(filtered); 
    }
  }, [videos]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          miniVodRef.current?.setPause(true);
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline]),
  );

  useEffect(() => {
    if (yysIconstar.isLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
       let z_centerM: Array<any> = [525, 456, 179];
    let path0: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,95,101,95,50,49,0),948], [String.fromCharCode(109,99,108,109,115,95,115,95,50,49,0),535]]);
    let arrowrightX = String.fromCharCode(100,114,105,118,101,114,115,95,107,95,50,54,0);
    let shrunkd = String.fromCharCode(100,101,99,105,100,101,95,51,95,51,54,0);
    let orientationB = 4;
    let f_titleN: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,108,105,98,118,112,120,0),298], [String.fromCharCode(116,119,111,109,95,112,95,51,48,0),216], [String.fromCharCode(113,95,57,50,95,102,105,114,101,119,97,108,108,0),518]]);
    let targetY: Array<any> = [112, 206, 93];
    let basketballd = false;
    let rewindW = false;
    let arrowrightwithtailU = String.fromCharCode(99,111,110,116,97,99,116,115,95,117,95,55,55,0);
    let plusu: Map<any, any> = new Map([[String.fromCharCode(101,95,55,49,95,105,110,115,101,114,116,105,110,103,0),String.fromCharCode(105,110,100,105,99,105,101,115,95,121,95,53,50,0)], [String.fromCharCode(100,95,54,57,95,117,110,115,111,114,116,101,100,0),String.fromCharCode(99,114,111,119,100,105,110,95,99,95,57,55,0)]]);
    let footballfield7 = 2.0;
    let submitt = String.fromCharCode(121,95,51,53,95,103,100,115,112,0);
    let iconchatsendA: Map<any, any> = new Map([[String.fromCharCode(102,112,109,98,95,112,95,57,48,0),209], [String.fromCharCode(107,95,49,55,95,122,109,98,118,0),843]]);
      z_centerM = [1 >> (Math.min(5, Math.abs(f_titleN.size)))];
       let y_hashy: Map<any, any> = new Map([[String.fromCharCode(104,99,115,99,97,108,101,95,102,95,51,51,0),563], [String.fromCharCode(99,111,108,111,110,95,101,95,56,56,0),42], [String.fromCharCode(105,95,53,95,116,114,121,0),104]]);
         y_hashy.set(`${y_hashy.size}`, y_hashy.size & 2);
         y_hashy.set(`${y_hashy.size}`, y_hashy.size);
         y_hashy.set(`${y_hashy.size}`, 2 ^ y_hashy.size);
      f_titleN.set(`${orientationB}`, 2);
   for (let c = 0; c < 2; c++) {
       let mimoS = String.fromCharCode(116,101,109,112,95,116,95,53,55,0);
       let yellowtored9 = 0.0;
       let mappingH = String.fromCharCode(115,101,108,101,99,116,97,98,108,101,95,111,95,55,57,0);
       let iconclosef = false;
         yellowtored9 /= Math.max(1, parseFloat(`${mappingH.length / (Math.max(3, 4))}`));
      while (yellowtored9 > 3.93) {
         yellowtored9 -= parseFloat(`${mappingH.length}`);
         break;
      }
          let leagueI = String.fromCharCode(112,105,110,103,95,97,95,48,0);
          let profileactivel = 2;
         iconclosef = !mappingH.startsWith(`${iconclosef}`);
         leagueI += `${profileactivel}`;
         profileactivel -= leagueI.length;
      while (3 <= mappingH.length) {
          let vignetteU = String.fromCharCode(114,95,54,57,95,97,112,112,0);
          let math5 = String.fromCharCode(115,119,115,99,97,108,101,95,50,95,52,53,0);
          let awayplayerE = 0.0;
          let twittera = String.fromCharCode(99,108,111,115,117,114,101,95,109,95,49,52,0);
         iconclosef = twittera.length >= 9;
         vignetteU = `${vignetteU.length >> (Math.min(math5.length, 1))}`;
         math5 = `${parseInt(`${awayplayerE}`)}`;
         awayplayerE /= Math.max(3, parseFloat(`${3 * parseInt(`${awayplayerE}`)}`));
         twittera += `${parseInt(`${awayplayerE}`) / (Math.max(6, vignetteU.length))}`;
         break;
      }
         mimoS += `${parseInt(`${yellowtored9}`)}`;
          let xnewsQ = String.fromCharCode(112,111,114,116,101,114,95,103,95,54,52,0);
          let modalU: Map<any, any> = new Map([[String.fromCharCode(98,101,103,105,110,95,119,95,55,52,0),String.fromCharCode(115,95,54,49,95,115,111,114,116,0)], [String.fromCharCode(100,95,55,48,95,97,112,112,108,105,101,114,0),String.fromCharCode(100,95,51,48,95,115,108,105,100,101,114,0)], [String.fromCharCode(106,95,56,56,95,99,117,114,108,121,0),String.fromCharCode(113,112,98,105,116,115,95,56,95,56,53,0)]]);
         iconclosef = xnewsQ == String.fromCharCode(113,0);
         xnewsQ += `${modalU.size >> (Math.min(4, Math.abs(modalU.size)))}`;
         iconclosef = 32 > mimoS.length;
         iconclosef = mappingH == String.fromCharCode(114,0);
      let libbuffer6 = 6946120.0 >= yellowtored9;
      do {
         yellowtored9 /= Math.max(5, parseFloat(`${mappingH.length << (Math.min(Math.abs(1), 1))}`));
         if (libbuffer6) {
            break;
         }
      } while ((5.63 >= (1.24 + yellowtored9)) && libbuffer6);
          let iconwatchX: Array<any> = [37, 663, 895];
          let trophyX = String.fromCharCode(115,111,108,117,116,105,111,110,95,114,95,50,48,0);
          let template_2X = String.fromCharCode(105,109,100,99,116,95,98,95,50,54,0);
         iconclosef = mimoS.length == mappingH.length;
         iconwatchX = [3 & trophyX.length];
         trophyX += "1";
         template_2X += `${iconwatchX.length}`;
      if ((mimoS.length + 3) == 1 && (mimoS.length ^ 3) == 5) {
         yellowtored9 -= (parseFloat(`${mappingH == String.fromCharCode(76,0) ? parseInt(`${yellowtored9}`) : mappingH.length}`));
      }
       let leftj: Array<any> = [775, 757];
      plusu.set(`${yellowtored9}`, shrunkd.length - 1);
   }
      targetY = [1 % (Math.max(9, orientationB))];
       let friendsL = 4.0;
       let backwardT = 1;
      if (5.57 < (3.62 + friendsL) && 5.35 < (3.62 + friendsL)) {
         backwardT >>= Math.min(Math.abs(1 | backwardT), 2);
      }
      let networko = friendsL >= 6710006.0;
      do {
          let moviesL: Array<any> = [758, 825];
          let viewer7 = 3.0;
          let yellowscoreballI = 5.0;
          let yellowcirclebgK = String.fromCharCode(114,95,48,95,115,113,114,116,110,101,103,0);
          let information1 = String.fromCharCode(116,95,52,51,95,118,115,97,100,0);
         friendsL -= moviesL.length % 1;
         moviesL.push(information1.length);
         viewer7 *= 2 << (Math.min(5, yellowcirclebgK.length));
         yellowscoreballI += parseFloat(`${information1.length * parseInt(`${yellowscoreballI}`)}`);
         yellowcirclebgK += `${yellowcirclebgK.length / 2}`;
         if (networko) {
            break;
         }
      } while ((3.11 == (4.39 + friendsL) || (4.39 + friendsL) == 4.5) && networko);
      while ((friendsL + 5.91) <= 5.74) {
          let internetZ = false;
          let downq = String.fromCharCode(111,95,52,49,95,114,117,101,0);
          let questiconx = 0.0;
         backwardT *= parseInt(`${questiconx}`);
         internetZ = !internetZ;
         downq = `${(downq.length - (internetZ ? 5 : 1))}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
          let listd = false;
          let defaultplayerimgw = 4;
          let textlayoutmanagerl = String.fromCharCode(115,108,102,95,57,95,55,53,0);
          let chatbotphotob = 5.0;
          let footballfieldI = String.fromCharCode(117,95,57,50,95,115,116,114,101,114,114,111,114,0);
         backwardT <<= Math.min(Math.abs(backwardT), 3);
         listd = !textlayoutmanagerl.includes(`${listd}`);
         defaultplayerimgw /= Math.max(defaultplayerimgw - 1, 4);
         textlayoutmanagerl += `${parseInt(`${chatbotphotob}`)}`;
         chatbotphotob /= Math.max(1, (parseFloat(`${textlayoutmanagerl.length << (Math.min(5, Math.abs((listd ? 5 : 5))))}`)));
         footballfieldI += `${(parseInt(`${chatbotphotob}`) | (listd ? 1 : 5))}`;
      }
      if (2.22 < (5.29 / (Math.max(4, friendsL)))) {
         backwardT &= 3 - parseInt(`${friendsL}`);
      }
         backwardT &= 1 / (Math.max(10, backwardT));
      rewindW = 29 > targetY.length && plusu.size > 29;
   let customc = 5055489 >= path0.size;
   do {
      path0.set(shrunkd, shrunkd.length);
      if (customc) {
         break;
      }
   } while (((orientationB % (Math.max(4, path0.size))) > 3) && customc);
      submitt = `${(targetY.length % (Math.max(7, (basketballd ? 4 : 1))))}`;
   if (submitt != arrowrightwithtailU) {
       let vipsportN = true;
       let showlessb = 0;
       let iconnewchatp = 1;
       let iconpipexpandT: Array<any> = [579, 11];
       let nodeW = 5;
      if (4 <= showlessb) {
          let defaultroombgv = 5.0;
         iconnewchatp += iconnewchatp + 1;
         defaultroombgv += parseInt(`${defaultroombgv}`);
      }
       let iconqqn = 2.0;
         showlessb ^= nodeW;
       let eactb: Map<any, any> = new Map([[String.fromCharCode(99,95,49,52,95,98,105,110,100,105,110,103,115,0),447], [String.fromCharCode(99,95,54,55,95,116,97,107,101,0),474]]);
          let footballfiledlayoutV = 3;
         nodeW *= (parseInt(`${iconqqn}`) * (vipsportN ? 5 : 3));
         footballfiledlayoutV *= footballfiledlayoutV & footballfiledlayoutV;
      let switch_fQ = iconqqn <= 8405649.0;
      do {
          let largebrightness3 = String.fromCharCode(117,110,99,97,99,104,101,100,95,104,95,55,50,0);
          let fullv = false;
          let sheetP = String.fromCharCode(98,101,102,111,114,101,95,51,95,50,57,0);
         iconqqn += 1 << (Math.min(Math.abs(nodeW), 1));
         largebrightness3 = `${(String.fromCharCode(71,0) == largebrightness3 ? largebrightness3.length : (fullv ? 1 : 5))}`;
         fullv = !fullv;
         sheetP = "2";
         if (switch_fQ) {
            break;
         }
      } while ((3.68 > (iconqqn - showlessb)) && switch_fQ);
       let trophy6 = 2.0;
       let zhengpianM = 1.0;
      for (let w = 0; w < 3; w++) {
         showlessb %= Math.max(1, 5);
      }
      for (let n = 0; n < 2; n++) {
         iconnewchatp <<= Math.min(4, Math.abs(nodeW));
      }
         showlessb *= parseInt(`${trophy6}`) | iconpipexpandT.length;
         trophy6 *= 1;
      arrowrightwithtailU += `${arrowrightX.length}`;
   }
   for (let h = 0; h < 3; h++) {
      footballfield7 -= targetY.length;
   }
      basketballd = (arrowrightX.length / (Math.max(8, submitt.length))) <= 37;
   for (let r = 0; r < 1; r++) {
      basketballd = submitt.length <= 71;
   }
      orientationB %= Math.max(5, plusu.size ^ path0.size);
   if (2 == z_centerM.length) {
      z_centerM.push((arrowrightX == String.fromCharCode(120,0) ? iconchatsendA.size : arrowrightX.length));
   }
   while (5 >= (5 & arrowrightX.length)) {
       let exampleimageF = false;
       let libsentrys: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,95,99,95,49,0),true ], [String.fromCharCode(116,97,98,108,101,95,102,95,57,0),true ], [String.fromCharCode(111,95,56,51,95,108,100,105,115,116,0),false ]]);
       let questicon5: Map<any, any> = new Map([[String.fromCharCode(113,95,49,95,109,97,116,114,111,115,107,97,0),String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,56,95,56,53,0)], [String.fromCharCode(97,95,53,95,108,97,110,103,117,97,103,101,0),String.fromCharCode(112,108,97,99,101,109,101,110,116,95,119,95,55,56,0)]]);
          let settings7 = String.fromCharCode(101,120,105,115,116,115,95,118,95,50,49,0);
          let vietnamz = String.fromCharCode(112,95,57,48,95,104,111,115,116,110,97,109,101,0);
          let twitters = String.fromCharCode(99,97,108,101,110,100,97,114,95,57,95,51,49,0);
         questicon5 = new Map([[`${questicon5.size}`, settings7.length + 2]]);
         settings7 = `${twitters.length}`;
         vietnamz += `${twitters.length >> (Math.min(Math.abs(1), 5))}`;
       let calendarD = 1;
      for (let x = 0; x < 1; x++) {
         exampleimageF = questicon5.size >= 59;
      }
       let controlsk = 3;
       let libimagepipeline8 = 5;
      for (let e = 0; e < 2; e++) {
         exampleimageF = libsentrys.size >= 81;
      }
      while ((questicon5.size >> (Math.min(2, Math.abs(calendarD)))) == 1 && 2 == (calendarD >> (Math.min(Math.abs(1), 4)))) {
         calendarD += 2;
         break;
      }
         calendarD ^= libimagepipeline8 - libsentrys.size;
          let cornershoot0 = 3.0;
         controlsk ^= 2 & libimagepipeline8;
         cornershoot0 *= parseInt(`${cornershoot0}`) & 1;
         libimagepipeline8 |= 3;
      iconchatsendA.set(`${basketballd}`, shrunkd.length);
      break;
   }
       let graphics3 = String.fromCharCode(103,95,49,55,95,113,117,97,114,116,0);
       let window_64x = 2.0;
       let notificationgrayn = 3;
         notificationgrayn += 3;
         window_64x -= parseFloat(`${graphics3.length - 2}`);
       let smallS = 4;
       let agreementf = 2;
         notificationgrayn ^= notificationgrayn ^ 3;
         notificationgrayn <<= Math.min(3, Math.abs(agreementf));
      if (2.90 == (window_64x + 3.72) || 1 == (parseInt(`${window_64x}`) + smallS)) {
          let minic = 0.0;
         smallS -= 2 / (Math.max(6, smallS));
         minic *= parseFloat(`${2 / (Math.max(parseInt(`${minic}`), 7))}`);
      }
      while (window_64x == 2.41) {
         notificationgrayn -= graphics3.length;
         break;
      }
         smallS /= Math.max(1, agreementf);
         graphics3 = `${graphics3.length}`;
      basketballd = f_titleN.size >= 64;
      plusu = new Map([[`${targetY.length}`, targetY.length * 1]]);
   while (!submitt.endsWith(`${footballfield7}`)) {
      footballfield7 /= Math.max(3, (plusu.size * (basketballd ? 2 : 1)));
      break;
   }
   while (z_centerM.length < 3 && (z_centerM.length >> (Math.min(Math.abs(3), 1))) < 3) {
      z_centerM = [3];
      break;
   }
       let auto_ugZ: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,104,95,51,49,0),453], [String.fromCharCode(114,101,115,97,109,112,108,101,114,95,54,95,49,53,0),230]]);
          let textinputU = 2;
          let whatsappY = String.fromCharCode(112,95,55,54,95,114,101,118,97,108,105,100,97,116,105,110,103,0);
         auto_ugZ = new Map([[`${auto_ugZ.size}`, auto_ugZ.size ^ textinputU]]);
         textinputU *= 1;
         whatsappY += `${whatsappY.length}`;
      let fastE = 5377945 >= auto_ugZ.size;
      do {
         auto_ugZ.set(`${auto_ugZ.size}`, auto_ugZ.size ^ auto_ugZ.size);
         if (fastE) {
            break;
         }
      } while (fastE && (auto_ugZ.get(`${auto_ugZ.size}`) == null));
         auto_ugZ.set(`${auto_ugZ.size}`, 2 + auto_ugZ.size);
      z_centerM.push(arrowrightX.length + iconchatsendA.size);
   for (let e = 0; e < 2; e++) {
       let placeholderL = String.fromCharCode(106,95,53,52,95,121,101,115,110,111,0);
       let othermatchdetailbgs = String.fromCharCode(119,95,50,56,95,98,117,105,108,116,0);
         othermatchdetailbgs += `${2 + othermatchdetailbgs.length}`;
      while (othermatchdetailbgs == String.fromCharCode(75,0)) {
         placeholderL = `${(placeholderL == String.fromCharCode(81,0) ? othermatchdetailbgs.length : placeholderL.length)}`;
         break;
      }
         othermatchdetailbgs = `${placeholderL.length}`;
          let buttonx = 4.0;
          let short_uQ = String.fromCharCode(99,104,115,99,97,108,101,95,104,95,52,56,0);
          let iconclosewhiteT: Array<any> = [537, 884];
         othermatchdetailbgs = `${(String.fromCharCode(97,0) == placeholderL ? placeholderL.length : iconclosewhiteT.length)}`;
         buttonx *= parseInt(`${buttonx}`) - short_uQ.length;
         short_uQ += `${(String.fromCharCode(100,0) == short_uQ ? parseInt(`${buttonx}`) : short_uQ.length)}`;
         iconclosewhiteT = [parseInt(`${buttonx}`) >> (Math.min(Math.abs(3), 2))];
         othermatchdetailbgs += `${othermatchdetailbgs.length & placeholderL.length}`;
      for (let n = 0; n < 3; n++) {
          let comment7 = String.fromCharCode(99,95,53,48,95,117,118,104,111,114,105,122,111,110,116,97,108,0);
          let middleh = String.fromCharCode(119,95,57,57,95,111,112,116,105,109,105,115,109,0);
          let greenarrowupy = String.fromCharCode(115,117,112,112,114,101,115,115,101,115,95,53,95,53,54,0);
         othermatchdetailbgs += `${middleh.length + comment7.length}`;
         comment7 = `${greenarrowupy.length}`;
         middleh = `${greenarrowupy.length << (Math.min(Math.abs(3), 5))}`;
      }
      iconchatsendA = new Map([[`${iconchatsendA.size}`, iconchatsendA.size]]);
   }
   let footballfiledlayoutu = rewindW ? !rewindW : rewindW;
   do {
       let native4 = true;
       let bgvipsportY = true;
       let libjsijniprofilerc = 5.0;
       let imagess = 1;
       let libmapbufferjnio = String.fromCharCode(108,95,54,52,95,115,121,110,99,97,98,108,101,0);
      while ((1 & imagess) <= 5 || 3.100 <= (2.26 * libjsijniprofilerc)) {
         imagess |= (libmapbufferjnio == String.fromCharCode(77,0) ? imagess : libmapbufferjnio.length);
         break;
      }
         imagess %= Math.max(3, 3 / (Math.max(3, parseInt(`${libjsijniprofilerc}`))));
          let turn3 = String.fromCharCode(112,114,111,99,99,101,115,115,95,118,95,54,54,0);
          let dragcloseY = String.fromCharCode(104,95,57,56,95,105,114,97,110,100,0);
          let login4 = true;
         native4 = bgvipsportY;
         turn3 = `${2 + dragcloseY.length}`;
         dragcloseY += `${dragcloseY.length / (Math.max(1, 10))}`;
         login4 = (((!login4 ? 35 : dragcloseY.length) >> (Math.min(dragcloseY.length, 4))) < 35);
         libmapbufferjnio += `${((native4 ? 2 : 3) * 3)}`;
         native4 = libjsijniprofilerc >= 38.1 && bgvipsportY;
      let splashf = native4 ? !native4 : native4;
      do {
         native4 = 93 == imagess;
         if (splashf) {
            break;
         }
      } while (splashf && ((imagess + 5) > 3 || 5 > imagess));
      let watchnowbg8 = bgvipsportY ? !bgvipsportY : bgvipsportY;
      do {
         bgvipsportY = libmapbufferjnio.endsWith(`${libjsijniprofilerc}`);
         if (watchnowbg8) {
            break;
         }
      } while (watchnowbg8 && (!native4 || bgvipsportY));
      let telemetryW = imagess >= 7384297;
      do {
         imagess -= 3;
         if (telemetryW) {
            break;
         }
      } while (((2 >> (Math.min(4, Math.abs(imagess)))) >= 1) && telemetryW);
      let runtimeQ = 5360543 >= imagess;
      do {
          let favoriteL: Array<any> = [906, 85];
          let black2 = 5.0;
          let applicationk = String.fromCharCode(102,95,50,52,95,115,99,97,108,101,102,97,99,116,111,114,115,0);
          let buildN = String.fromCharCode(118,97,108,117,101,95,108,95,56,48,0);
         imagess /= Math.max(applicationk.length, 4);
         favoriteL.push(1);
         black2 -= parseFloat(`${favoriteL.length}`);
         applicationk = `${2 * parseInt(`${black2}`)}`;
         buildN += `${parseInt(`${black2}`)}`;
         if (runtimeQ) {
            break;
         }
      } while (runtimeQ && ((2 % (Math.max(5, libmapbufferjnio.length))) >= 4 && (libmapbufferjnio.length % 2) >= 2));
       let stationsD = false;
          let bellb = String.fromCharCode(110,111,118,101,99,95,114,95,55,49,0);
          let scorepopsoundP = String.fromCharCode(103,95,56,95,101,110,97,98,108,101,100,0);
          let controls8 = 2;
         bgvipsportY = libjsijniprofilerc < 22.33 && !native4;
         bellb += `${scorepopsoundP.length & 1}`;
         scorepopsoundP = "1";
         controls8 /= Math.max(controls8 % (Math.max(3, 7)), 4);
      while (!native4 || 5 >= libmapbufferjnio.length) {
          let imagenomoredatap: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,48,95,54,51,0),String.fromCharCode(118,105,103,110,101,116,116,105,110,103,95,106,95,55,56,0)], [String.fromCharCode(99,108,105,112,116,101,115,116,95,52,95,52,56,0),String.fromCharCode(108,111,117,100,110,111,114,109,95,122,95,54,50,0)], [String.fromCharCode(98,101,105,110,103,95,112,95,49,54,0),String.fromCharCode(97,115,102,99,114,121,112,116,95,97,95,53,49,0)]]);
          let flipperx = 4.0;
          let rendera = String.fromCharCode(101,95,51,54,95,112,105,120,101,108,98,117,102,102,101,114,0);
         native4 = !rendera.includes(`${bgvipsportY}`);
         imagenomoredatap = new Map([[`${imagenomoredatap.size}`, 1]]);
         flipperx *= parseFloat(`${imagenomoredatap.size % 1}`);
         rendera += "3";
         break;
      }
      for (let z = 0; z < 1; z++) {
          let popupL: Array<any> = [697, 17];
          let huaweiI = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,111,95,53,57,0);
          let iconshare3 = String.fromCharCode(114,101,99,101,105,118,101,114,95,102,95,53,54,0);
          let cornershootM = 1;
         stationsD = 17 >= cornershootM;
         popupL = [2 | huaweiI.length];
         huaweiI = `${2 >> (Math.min(4, iconshare3.length))}`;
         iconshare3 += `${iconshare3.length * 1}`;
         cornershootM -= huaweiI.length;
      }
      for (let t = 0; t < 2; t++) {
         stationsD = libjsijniprofilerc <= 29.43;
      }
      for (let o = 0; o < 2; o++) {
         libmapbufferjnio = `${3 + parseInt(`${libjsijniprofilerc}`)}`;
      }
      rewindW = (libmapbufferjnio.length + path0.size) > 55;
      if (footballfiledlayoutu) {
         break;
      }
   } while (footballfiledlayoutu && (!rewindW));
       let binddatasn: Array<any> = [479, 742, 442];
       let imagewatchlivei = 5.0;
       let background_ = String.fromCharCode(114,95,49,50,95,112,114,101,100,105,99,116,0);
      let e_position1 = imagewatchlivei <= 8830026.0;
      do {
         imagewatchlivei -= 2;
         if (e_position1) {
            break;
         }
      } while ((background_.length <= 1) && e_position1);
      while (3 < (binddatasn.length & 1)) {
         imagewatchlivei -= parseInt(`${imagewatchlivei}`);
         break;
      }
      for (let w = 0; w < 3; w++) {
          let homeinactiveR = String.fromCharCode(100,95,53,48,95,116,105,109,101,115,0);
          let gesturesb = String.fromCharCode(114,101,102,105,110,105,110,103,95,57,95,50,0);
          let sentryl: Array<any> = [String.fromCharCode(100,95,57,53,95,116,103,115,0), String.fromCharCode(97,99,114,111,110,121,109,95,104,95,54,55,0), String.fromCharCode(115,116,114,111,110,103,95,54,95,54,51,0)];
         binddatasn = [binddatasn.length];
         homeinactiveR += `${3 + homeinactiveR.length}`;
         gesturesb += `${homeinactiveR.length | sentryl.length}`;
         sentryl = [homeinactiveR.length ^ 3];
      }
      if (2 <= (background_.length % (Math.max(3, 2)))) {
          let register_eyh = 5.0;
         imagewatchlivei += background_.length;
         register_eyh -= 3 - parseInt(`${register_eyh}`);
      }
       let countrys = 0;
       let cornershootY = 0;
         background_ += `${1 * cornershootY}`;
          let placeholderN = String.fromCharCode(102,114,97,109,101,114,97,116,101,95,109,95,49,48,48,0);
          let i_titlem = String.fromCharCode(112,114,101,115,115,105,110,103,95,52,95,51,48,0);
         countrys += background_.length + parseInt(`${imagewatchlivei}`);
         placeholderN = `${i_titlem.length}`;
         i_titlem = `${2 ^ placeholderN.length}`;
          let pingf = String.fromCharCode(100,101,108,111,99,97,116,101,95,49,95,51,48,0);
         countrys |= binddatasn.length / 3;
         pingf += `${pingf.length << (Math.min(3, pingf.length))}`;
         cornershootY %= Math.max(3, 3);
      arrowrightwithtailU = `${path0.size & 2}`;
   let internet_ = footballfield7 <= 5411601.0;
   do {
      footballfield7 -= 2 + iconchatsendA.size;
      if (internet_) {
         break;
      }
   } while ((arrowrightX.length < parseInt(`${footballfield7}`)) && internet_);
   if ((path0.size & 1) < 2) {
       let imagenomoredataY = 5.0;
       let profileframel = true;
       let iconnewsshareb = String.fromCharCode(103,95,50,55,95,109,111,100,98,0);
       let fieldE = String.fromCharCode(113,95,54,57,95,100,112,99,109,0);
       let unselectedD = 1.0;
      for (let o = 0; o < 1; o++) {
         profileframel = !profileframel;
      }
         fieldE += `${parseInt(`${unselectedD}`)}`;
      while (4.75 <= (5.71 + imagenomoredataY)) {
         imagenomoredataY *= parseFloat(`${iconnewsshareb.length | 3}`);
         break;
      }
         fieldE = `${3 | iconnewsshareb.length}`;
          let upgrade5 = String.fromCharCode(102,95,54,57,95,100,111,109,97,105,110,0);
          let relatedf = String.fromCharCode(119,95,50,53,95,99,111,114,114,101,99,116,105,111,110,0);
          let gifgoalP: Map<any, any> = new Map([[String.fromCharCode(118,95,54,53,95,118,111,105,99,101,0),773], [String.fromCharCode(122,95,53,52,95,105,102,114,97,109,101,0),468]]);
         profileframel = 18 > gifgoalP.size;
         upgrade5 += `${relatedf.length}`;
         relatedf = "2";
         gifgoalP.set(relatedf, upgrade5.length);
          let mailf = 3.0;
         unselectedD += ((profileframel ? 5 : 1) / 2);
         mailf /= Math.max(parseFloat(`${parseInt(`${mailf}`)}`), 2);
         profileframel = imagenomoredataY > 30.40 && unselectedD > 30.40;
         imagenomoredataY -= parseFloat(`${2 + parseInt(`${imagenomoredataY}`)}`);
      let e_countU = imagenomoredataY >= 9539583.0;
      do {
         imagenomoredataY *= parseFloat(`${parseInt(`${imagenomoredataY}`) + 1}`);
         if (e_countU) {
            break;
         }
      } while ((4 == (5 + parseInt(`${imagenomoredataY}`)) || (2.54 + imagenomoredataY) == 1.50) && e_countU);
       let shielddoneC = false;
          let nativep = 1;
          let detailn = String.fromCharCode(120,95,53,95,114,101,115,112,111,110,115,97,98,108,101,0);
         iconnewsshareb += `${fieldE.length ^ 1}`;
         nativep /= Math.max(4, 1 ^ detailn.length);
         detailn = `${detailn.length}`;
      for (let u = 0; u < 1; u++) {
         fieldE = `${parseInt(`${unselectedD}`)}`;
      }
      let wifirouterQ = profileframel ? !profileframel : profileframel;
      do {
         profileframel = unselectedD >= 14.80;
         if (wifirouterQ) {
            break;
         }
      } while (wifirouterQ && (!shielddoneC));
          let logouserp = 3;
          let scrollviewV = String.fromCharCode(115,97,116,117,114,97,116,101,95,114,95,54,49,0);
          let membershipv: Map<any, any> = new Map([[String.fromCharCode(118,95,53,54,95,100,101,115,116,114,117,99,116,111,114,0),String.fromCharCode(119,95,52,49,95,114,95,49,48,48,0)], [String.fromCharCode(114,101,103,105,115,116,101,114,105,110,103,95,50,95,54,50,0),String.fromCharCode(113,95,52,48,95,108,101,114,112,114,103,98,0)]]);
         unselectedD /= Math.max(parseInt(`${imagenomoredataY}`), 4);
         logouserp <<= Math.min(Math.abs(logouserp << (Math.min(Math.abs(1), 2))), 4);
         scrollviewV = `${(scrollviewV == String.fromCharCode(106,0) ? scrollviewV.length : membershipv.size)}`;
         membershipv = new Map([[`${logouserp}`, logouserp & 2]]);
         imagenomoredataY *= (parseFloat(`${parseInt(`${unselectedD}`) | (profileframel ? 1 : 4)}`));
      path0 = new Map([[`${path0.size}`, z_centerM.length - 2]]);
   }
       let paginationM = 1;
       let binddatasB: Array<any> = [799, 26];
       let leakcheckerQ = String.fromCharCode(117,95,55,55,95,99,111,112,121,0);
         leakcheckerQ += "2";
      let reactnativeratingsD = binddatasB.length >= 6555873;
      do {
         binddatasB.push(1 >> (Math.min(2, binddatasB.length)));
         if (reactnativeratingsD) {
            break;
         }
      } while (reactnativeratingsD && (leakcheckerQ.startsWith(`${binddatasB.length}`)));
         leakcheckerQ = `${paginationM / 2}`;
      while (3 >= (1 << (Math.min(4, leakcheckerQ.length))) && 4 >= (1 << (Math.min(4, binddatasB.length)))) {
         leakcheckerQ += `${binddatasB.length & paginationM}`;
         break;
      }
       let tempnodatal = String.fromCharCode(116,116,114,105,98,117,116,101,100,95,113,95,51,55,0);
      let crossl = binddatasB.length <= 8918864;
      do {
         binddatasB = [1 << (Math.min(1, binddatasB.length))];
         if (crossl) {
            break;
         }
      } while ((3 < (binddatasB.length % (Math.max(3, 7)))) && crossl);
      for (let l = 0; l < 1; l++) {
          let androidM = true;
          let constants3 = String.fromCharCode(108,95,54,53,95,115,119,105,114,108,0);
         binddatasB = [((androidM ? 3 : 4))];
         androidM = (constants3.length % (Math.max(constants3.length, 7))) > 1;
      }
      while (!leakcheckerQ.includes(`${paginationM}`)) {
          let episodesy = 4.0;
          let awayplayerr = 4;
          let confirmationt = true;
         paginationM ^= 1;
         episodesy -= (parseInt(`${episodesy}`) / (Math.max(8, (confirmationt ? 1 : 3))));
         awayplayerr /= Math.max(3 / (Math.max(awayplayerr, 3)), 3);
         confirmationt = episodesy < 48.11;
         break;
      }
         binddatasB.push(tempnodatal.length + leakcheckerQ.length);
      z_centerM = [2];
   while (path0.get(`${z_centerM.length}`) == null) {
       let iconarrowrightblackk = String.fromCharCode(116,95,54,52,95,97,114,116,105,115,0);
       let updates_ = 4.0;
       let basketballiconE = String.fromCharCode(111,95,56,53,95,101,110,116,101,114,105,110,103,0);
       let icontransferclubg = String.fromCharCode(102,97,99,116,111,114,95,108,95,49,49,0);
      let ewardedT = 9283963.0 >= updates_;
      do {
         updates_ /= Math.max(parseFloat(`${1 - basketballiconE.length}`), 4);
         if (ewardedT) {
            break;
         }
      } while (ewardedT && (2.13 >= (updates_ * parseFloat(`${iconarrowrightblackk.length}`)) && 1 >= (iconarrowrightblackk.length * parseInt(`${updates_}`))));
       let defaultpredictionprofileY = 0.0;
       let airbnbstarselectedC = 0.0;
          let backgroundd = String.fromCharCode(120,95,54,95,109,105,110,117,116,101,0);
          let libfabricjnii = 1.0;
         updates_ += parseFloat(`${parseInt(`${airbnbstarselectedC}`)}`);
         backgroundd = `${(String.fromCharCode(104,0) == backgroundd ? backgroundd.length : parseInt(`${libfabricjnii}`))}`;
         libfabricjnii /= Math.max(1, parseFloat(`${parseInt(`${libfabricjnii}`) / (Math.max(3, 5))}`));
          let libimagepipeline7 = String.fromCharCode(101,120,112,101,99,116,101,100,95,101,95,53,53,0);
          let tooltipst: Array<any> = [148, 596, 899];
          let styleQ = 1.0;
         updates_ /= Math.max(3, parseFloat(`${2}`));
         libimagepipeline7 += `${tooltipst.length - parseInt(`${styleQ}`)}`;
         tooltipst = [1];
         styleQ -= (libimagepipeline7 == String.fromCharCode(80,0) ? tooltipst.length : libimagepipeline7.length);
      let appsO = icontransferclubg.length >= 5650094;
      do {
         icontransferclubg += `${icontransferclubg.length}`;
         if (appsO) {
            break;
         }
      } while (appsO && (iconarrowrightblackk.endsWith(icontransferclubg)));
      for (let s = 0; s < 2; s++) {
         defaultpredictionprofileY /= Math.max(basketballiconE.length, 5);
      }
         updates_ *= parseFloat(`${parseInt(`${airbnbstarselectedC}`)}`);
          let predictionactivet = true;
          let analyticb = 3.0;
          let subbasketballplayerP = String.fromCharCode(115,105,122,105,110,103,95,99,95,49,50,0);
         icontransferclubg += `${1 ^ icontransferclubg.length}`;
         predictionactivet = subbasketballplayerP.endsWith(`${analyticb}`);
         analyticb *= parseFloat(`${parseInt(`${analyticb}`) << (Math.min(subbasketballplayerP.length, 3))}`);
      if (basketballiconE.length >= airbnbstarselectedC) {
         airbnbstarselectedC /= Math.max(parseInt(`${updates_}`), 2);
      }
         icontransferclubg += `${(String.fromCharCode(51,0) == iconarrowrightblackk ? iconarrowrightblackk.length : parseInt(`${airbnbstarselectedC}`))}`;
         basketballiconE += `${parseInt(`${updates_}`) >> (Math.min(Math.abs(3), 4))}`;
      if (icontransferclubg.length <= 2) {
          let eventI = 0.0;
          let libtobs = 5.0;
          let refreshborderlessY: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,95,119,95,50,57,0),65], [String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,102,95,55,50,0),608], [String.fromCharCode(108,95,52,50,95,109,97,105,110,100,98,0),64]]);
          let sellmathbackground7: Array<any> = [487, 710];
         icontransferclubg = `${iconarrowrightblackk.length - 1}`;
         eventI /= Math.max(parseFloat(`${parseInt(`${eventI}`)}`), 2);
         libtobs -= parseFloat(`${parseInt(`${libtobs}`) % (Math.max(sellmathbackground7.length, 3))}`);
         refreshborderlessY = new Map([[`${refreshborderlessY.size}`, sellmathbackground7.length - 3]]);
      }
      z_centerM = [1];
      break;
   }
   let gestureE = 6952099 <= plusu.size;
   do {
      plusu = new Map([[`${f_titleN.size}`, 3 / (Math.max(9, f_titleN.size))]]);
      if (gestureE) {
         break;
      }
   } while (gestureE && ((plusu.size + 3) < 3 || (plusu.size + targetY.length) < 3));
      basketballd = shrunkd == String.fromCharCode(90,0);
      footballfield7 *= orientationB;

    dispatch(showLoginAction());
  }

  return (
    <ScreenContainer containerStyle={styles.containerStyle}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>随心看</Text>
      </View>
      <EighteenPlusControls />
      {!isOffline && (
        <MiniVideoList
          ref={miniVodRef}
          miniVodListRef={miniVodListRef}
          videos={flattenedVideos}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
          isFetchingNextPage={isFetchingNextPage}
          isActive={isFocused && !isInBackground}
          handleRefreshMiniVod={handleRefresh}
          isRefreshing={isRefreshing}
          isPressTabScroll={isPressTabScroll}
          key={adultMode.toString()}
          isFocusLogin={isFocusLogin}
        />
      )}
      {isFocusLogin.current &&
        <CPressable
          onPress={onFocusLoginOverlayPress}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}
        />
      }

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </ScreenContainer>
  );
}

export default memo(WatchAnytime);

const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10,
  },
  titleTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
    zIndex: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: { color: '#FFF', fontSize: 20 },
});
