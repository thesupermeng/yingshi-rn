import { useAppDispatch, useAppSelector, useSelector } from '@hooks/kg_index';
import umb_center_carousel from '../../Umeng/umb_center_carousel';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { GBYMiniCanvas } from '@redux/reducers/t_types';
import { PSmall } from '@redux/fj_prediction_thailand';
import { DSplash } from '@type/wpk_long';
import { screenModel } from '@type/nb_shared_target';
import { API_DOMAIN_TEST } from '@utility/n_subs_interstitial';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/xvx_launch_league';
import ScreenContainer from '../components/container/ypy_fast';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/z_video';
import NoConnection from './../components/common/nyr_animation_langkey';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux/actions/a_switch';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import { KWConstants } from '@models/kl_sheet';
import BecomeVipOverlay from '../components/modal/pg_buffer_alert';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/n_subs_interstitial';

type CZBCompleteService = {
  data: {
    List: Array<DSplash>;
  };
};

type MConstantsClock = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<DSplash>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const miniVodRef = useRef<MConstantsClock>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<HDTGesturesList>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = KWConstants.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  
  
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
       let sell3: Array<any> = [493, 133, 321];
    let const_s1H = String.fromCharCode(117,95,51,53,95,97,105,116,101,114,0);
    let typingb = 2.0;
    let lightk: Array<any> = [161, 407];
    let downloadingA = String.fromCharCode(116,114,97,110,115,117,112,112,95,111,95,51,50,0);
    let abouts = String.fromCharCode(114,101,103,101,120,95,122,95,52,49,0);
    let transferQ = 2;
    let left8 = String.fromCharCode(103,95,49,48,48,95,104,111,117,114,108,121,0);
    let sina9 = String.fromCharCode(113,95,50,95,116,114,105,103,103,101,114,0);
    let confirmationh = 3.0;
    let anytime4 = String.fromCharCode(115,95,52,50,95,97,112,112,114,111,118,101,114,0);
    let unselectedp = false;
    let middlewarer: Array<any> = [856, 234, 231];
    let desct = true;
    let sentryY = String.fromCharCode(106,95,53,53,95,115,117,112,112,108,101,109,101,110,116,97,108,0);
   if ((downloadingA.length / 4) >= 5 && 1 >= (lightk.length / 4)) {
      lightk = [const_s1H.length];
   }
      confirmationh *= parseFloat(`${transferQ % 2}`);
   let analyticst = sina9.length <= 7811183;
   do {
       let showo = 0.0;
       let guideU = String.fromCharCode(106,95,55,56,95,116,111,110,103,117,101,0);
       let filled6 = String.fromCharCode(113,95,56,54,95,109,98,103,114,97,112,104,0);
       let minivodk: Array<any> = [String.fromCharCode(102,95,56,52,95,114,101,115,101,116,117,112,0), String.fromCharCode(109,112,101,103,97,117,100,105,111,100,97,116,97,95,99,95,57,54,0), String.fromCharCode(109,117,120,95,105,95,50,55,0)];
       let reminderd = String.fromCharCode(101,95,57,54,95,109,112,106,112,101,103,0);
         minivodk.push(filled6.length * minivodk.length);
          let googleT = String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,48,95,56,56,0);
         guideU += `${filled6.length / 2}`;
         googleT += `${(String.fromCharCode(86,0) == googleT ? googleT.length : googleT.length)}`;
         reminderd += `${2 | filled6.length}`;
         reminderd += `${guideU.length}`;
         guideU = `${(guideU == String.fromCharCode(106,0) ? guideU.length : parseInt(`${showo}`))}`;
         reminderd = "1";
      while (reminderd != String.fromCharCode(77,0)) {
          let register_l7: Map<any, any> = new Map([[String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,116,95,49,48,48,0),false ], [String.fromCharCode(108,105,98,115,119,105,102,116,111,115,95,118,95,56,49,0),true ], [String.fromCharCode(99,111,109,112,97,114,101,102,95,53,95,50,56,0),true ]]);
          let floaterU = 4.0;
          let projectM = 2.0;
          let castingJ = String.fromCharCode(106,95,56,95,114,101,99,101,112,116,105,111,110,0);
          let borderless9 = String.fromCharCode(117,110,98,111,110,100,101,100,95,116,95,53,56,0);
         guideU += `${guideU.length ^ 3}`;
         register_l7 = new Map([[`${projectM}`, parseInt(`${projectM}`) % (Math.max(4, borderless9.length))]]);
         floaterU -= 1;
         castingJ += `${parseInt(`${floaterU}`) & 3}`;
         borderless9 += `${1 << (Math.min(5, Math.abs(parseInt(`${floaterU}`))))}`;
         break;
      }
      if ((reminderd.length + minivodk.length) == 3 && 2 == (3 + minivodk.length)) {
         reminderd = `${(reminderd == String.fromCharCode(119,0) ? guideU.length : reminderd.length)}`;
      }
      for (let p = 0; p < 1; p++) {
          let product9 = true;
         minivodk = [minivodk.length | guideU.length];
         product9 = !product9;
      }
         guideU = `${(reminderd == String.fromCharCode(80,0) ? guideU.length : reminderd.length)}`;
       let pauseu = 1;
         reminderd = `${guideU.length & reminderd.length}`;
      if ((minivodk.length >> (Math.min(filled6.length, 2))) < 3) {
         filled6 = `${parseInt(`${showo}`) - reminderd.length}`;
      }
      while (!guideU.startsWith(`${pauseu}`)) {
          let darkk = 2.0;
          let calendarV: Array<any> = [947, 357];
         pauseu += guideU.length;
         darkk /= Math.max(1 * parseInt(`${darkk}`), 1);
         calendarV = [calendarV.length];
         break;
      }
       let handler2 = 5.0;
       let controlj = 0.0;
      sina9 += `${3 % (Math.max(5, reminderd.length))}`;
      if (analyticst) {
         break;
      }
   } while (analyticst && (3 > sina9.length));
   let actionso = const_s1H.length >= 9871044;
   do {
      const_s1H = `${parseInt(`${confirmationh}`) % (Math.max(abouts.length, 3))}`;
      if (actionso) {
         break;
      }
   } while (actionso && (4.74 >= (typingb * 4.32) && (1 + const_s1H.length) >= 4));
       let stepB = String.fromCharCode(103,95,49,48,95,99,116,116,115,0);
       let fullh = 5.0;
      while (5 >= (stepB.length * parseInt(`${fullh}`)) && 3.84 >= (2.72 * fullh)) {
          let logoa: Map<any, any> = new Map([[String.fromCharCode(121,95,53,51,95,115,101,110,100,0),80], [String.fromCharCode(119,95,50,57,95,112,114,122,112,0),193]]);
          let downr = 5.0;
          let emptyM = String.fromCharCode(117,110,97,118,97,105,98,108,101,95,52,95,55,0);
         stepB += `${parseInt(`${downr}`)}`;
         logoa.set(`${emptyM}`, 1 + emptyM.length);
         downr -= (parseFloat(`${emptyM == String.fromCharCode(117,0) ? emptyM.length : logoa.size}`));
         break;
      }
      for (let w = 0; w < 2; w++) {
         stepB = `${stepB.length >> (Math.min(2, Math.abs(parseInt(`${fullh}`))))}`;
      }
      while ((stepB.length % (Math.max(1, 6))) == 4 || 2 == (stepB.length & 1)) {
         fullh /= Math.max(1, parseFloat(`${3 * stepB.length}`));
         break;
      }
       let downH = String.fromCharCode(98,95,55,57,95,105,110,102,105,110,105,116,101,0);
      if (stepB.startsWith(`${downH.length}`)) {
          let mathX = 4;
          let styleJ = String.fromCharCode(110,95,55,55,95,116,114,97,110,115,102,111,114,109,101,114,115,0);
          let activem = 0.0;
         stepB += `${parseInt(`${fullh}`) & 2}`;
         mathX |= mathX;
         styleJ += "3";
         activem /= Math.max(parseFloat(`${styleJ.length}`), 3);
      }
       let full5: Array<any> = [928, 89, 477];
       let agreement5: Array<any> = [698, 376, 758];
      sell3 = [sina9.length];
       let formc: Map<any, any> = new Map([[String.fromCharCode(100,95,53,48,95,115,101,108,101,99,116,105,111,110,115,0),551], [String.fromCharCode(116,95,51,52,95,97,112,112,108,101,0),997], [String.fromCharCode(121,95,54,48,95,116,104,117,109,98,110,97,105,108,115,0),973]]);
       let refreshZ = true;
       let half9 = 2.0;
          let indicatora: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,102,95,115,95,50,57,0),496], [String.fromCharCode(104,95,50,95,100,117,112,108,105,99,97,116,101,100,0),94]]);
         refreshZ = 88 == formc.size;
         indicatora = new Map([[`${indicatora.size}`, indicatora.size / (Math.max(2, 4))]]);
      while (1.24 == (parseFloat(`${formc.size}`) + half9) && (half9 + 1.24) == 5.76) {
         formc = new Map([[`${half9}`, ((refreshZ ? 3 : 1) / (Math.max(parseInt(`${half9}`), 1)))]]);
         break;
      }
       let modeu = String.fromCharCode(116,120,116,95,56,95,56,50,0);
         formc.set(`${refreshZ}`, 2 % (Math.max(parseInt(`${half9}`), 9)));
      let container0 = refreshZ ? !refreshZ : refreshZ;
      do {
         refreshZ = modeu.length < 84 || refreshZ;
         if (container0) {
            break;
         }
      } while ((3 > modeu.length) && container0);
      if (parseInt(`${half9}`) >= modeu.length) {
          let tickedU = 0.0;
          let wind0 = 0;
          let preview1 = String.fromCharCode(110,95,52,53,95,100,97,121,115,0);
         modeu += "1";
         tickedU -= parseFloat(`${preview1.length & wind0}`);
         wind0 /= Math.max(5, wind0);
         preview1 = `${wind0}`;
      }
         half9 -= parseFloat(`${modeu.length << (Math.min(Math.abs(1), 2))}`);
      while ((modeu.length >> (Math.min(Math.abs(2), 2))) < 4 && (formc.size >> (Math.min(modeu.length, 1))) < 2) {
         modeu = `${formc.size / 1}`;
         break;
      }
      for (let r = 0; r < 1; r++) {
         refreshZ = !refreshZ;
      }
      unselectedp = formc.size <= 74 || String.fromCharCode(70,0) == anytime4;
       let selectD: Map<any, any> = new Map([[String.fromCharCode(101,95,56,53,95,111,119,110,108,111,97,100,0),258], [String.fromCharCode(115,104,97,112,101,115,95,111,95,55,52,0),333], [String.fromCharCode(105,110,111,100,101,95,118,95,51,52,0),503]]);
          let memberF: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,105,102,121,95,121,95,57,57,0),514], [String.fromCharCode(99,108,111,115,101,112,95,106,95,55,48,0),93], [String.fromCharCode(110,95,53,56,95,97,97,97,97,0),734]]);
         selectD = new Map([[`${memberF.size}`, 2 % (Math.max(10, selectD.size))]]);
      while (!Array.from(selectD.values()).includes(selectD.size)) {
          let guidet = 5;
         selectD.set(`${guidet}`, 1 % (Math.max(9, selectD.size)));
         break;
      }
      for (let g = 0; g < 3; g++) {
         selectD.set(`${selectD.size}`, selectD.size + 2);
      }
      unselectedp = String.fromCharCode(101,0) == abouts;
   for (let f = 0; f < 2; f++) {
      sina9 = "3";
   }
       let catagory_ = String.fromCharCode(97,95,49,57,95,118,101,108,97,112,115,101,100,116,105,109,101,114,0);
       let layoutn = 2.0;
      if (!catagory_.includes(`${layoutn}`)) {
          let firebasem = false;
          let middle4 = 2.0;
         catagory_ += `${catagory_.length}`;
         firebasem = (middle4 * middle4) < 92.2;
      }
         catagory_ = "2";
         layoutn -= parseInt(`${layoutn}`) / 3;
      while (!catagory_.startsWith(`${layoutn}`)) {
          let becomeG = String.fromCharCode(100,101,110,111,105,115,101,95,107,95,55,57,0);
          let hongkong8 = false;
         layoutn -= (becomeG == String.fromCharCode(52,0) ? becomeG.length : parseInt(`${layoutn}`));
         hongkong8 = !hongkong8;
         break;
      }
         layoutn /= Math.max(2, parseInt(`${layoutn}`) * catagory_.length);
      while ((layoutn / (Math.max(catagory_.length, 4))) <= 1.4) {
         catagory_ = `${catagory_.length - 1}`;
         break;
      }
      lightk = [abouts.length];
       let transferU = String.fromCharCode(115,108,97,115,104,95,118,95,56,48,0);
         transferU = `${transferU.length ^ transferU.length}`;
         transferU = `${transferU.length / (Math.max(transferU.length, 9))}`;
       let whatsapp6: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,115,95,121,95,49,49,0),true ], [String.fromCharCode(100,95,55,51,95,110,112,112,115,99,97,108,101,0),false ], [String.fromCharCode(118,95,57,56,95,110,117,108,108,112,97,99,107,101,116,0),false ]]);
       let topicK: Map<any, any> = new Map([[String.fromCharCode(103,95,54,56,95,111,98,115,101,114,118,101,100,0),88], [String.fromCharCode(115,95,50,57,95,99,111,114,114,101,99,116,105,111,110,0),603]]);
      anytime4 = "1";

    setIsRefreshing(true);

   let historyt = 8759881.0 >= typingb;
   do {
       let castingL = 5.0;
      if (4.55 < castingL) {
         castingL -= parseInt(`${castingL}`);
      }
          let roomi = 2.0;
          let internetY = String.fromCharCode(108,95,54,57,95,113,117,97,100,114,97,116,105,99,0);
          let bottomh = String.fromCharCode(106,95,54,50,95,116,114,97,110,115,102,111,114,109,115,0);
         castingL *= parseInt(`${roomi}`);
         internetY += `${(bottomh == String.fromCharCode(77,0) ? internetY.length : bottomh.length)}`;
         castingL -= parseInt(`${castingL}`);
      typingb -= parseFloat(`${const_s1H.length >> (Math.min(Math.abs(2), 3))}`);
      if (historyt) {
         break;
      }
   } while (historyt && ((downloadingA.length / (Math.max(4, 3))) >= 2));
      anytime4 += `${((unselectedp ? 2 : 3) - 1)}`;
   for (let d = 0; d < 1; d++) {
      left8 = `${lightk.length}`;
   }
   for (let f = 0; f < 2; f++) {
       let commons = String.fromCharCode(106,95,51,50,95,100,110,115,0);
       let heartx = 4.0;
       let downloader8 = 2;
       let streamingq = false;
       let half1 = 0;
         heartx /= Math.max(((streamingq ? 5 : 2) ^ downloader8), 2);
      if (downloader8 < commons.length) {
         commons = `${(String.fromCharCode(72,0) == commons ? commons.length : parseInt(`${heartx}`))}`;
      }
      for (let a = 0; a < 3; a++) {
         heartx *= parseInt(`${heartx}`);
      }
      for (let t = 0; t < 2; t++) {
         heartx *= commons.length << (Math.min(5, Math.abs(half1)));
      }
         commons += `${(commons == String.fromCharCode(121,0) ? half1 : commons.length)}`;
      if (!streamingq) {
         commons = `${commons.length}`;
      }
      while (streamingq) {
         streamingq = streamingq && 71 <= half1;
         break;
      }
      while (!commons.endsWith(`${streamingq}`)) {
         commons += "2";
         break;
      }
         downloader8 |= parseInt(`${heartx}`);
      let unreadC = downloader8 <= 5388540;
      do {
         downloader8 %= Math.max(1, downloader8 ^ 2);
         if (unreadC) {
            break;
         }
      } while (((downloader8 | 2) < 2 || (2 << (Math.min(3, Math.abs(downloader8)))) < 5) && unreadC);
      let type_bH = heartx <= 9070983.0;
      do {
         heartx /= Math.max(3, 2);
         if (type_bH) {
            break;
         }
      } while ((4.40 <= (heartx * 2.84) || !streamingq) && type_bH);
       let statsQ = 5.0;
       let awayB = 4.0;
          let stationsK = String.fromCharCode(111,95,56,52,95,105,110,99,114,109,101,114,103,101,0);
          let championQ = String.fromCharCode(116,101,120,116,117,114,101,95,55,95,51,55,0);
         awayB += parseFloat(`${1 & half1}`);
         stationsK = "3";
         championQ = `${championQ.length}`;
          let constantsn = 0;
         streamingq = commons.endsWith(`${statsQ}`);
         constantsn >>= Math.min(5, Math.abs(constantsn));
      let listt = String.fromCharCode(121,112,121,105,109,52,115,105,51,0) == commons;
      do {
         commons += `${downloader8}`;
         if (listt) {
            break;
         }
      } while ((!commons.includes(`${half1}`)) && listt);
      lightk = [parseInt(`${typingb}`) ^ 3];
   }
   if (anytime4.includes(`${sell3.length}`)) {
      anytime4 += `${(String.fromCharCode(65,0) == left8 ? left8.length : const_s1H.length)}`;
   }
   while (3 <= (const_s1H.length / 3)) {
       let guidek: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,106,105,95,122,95,57,50,0),742], [String.fromCharCode(109,98,103,114,97,112,104,95,48,95,51,55,0),10]]);
       let carouselq = 1.0;
       let completeo = String.fromCharCode(100,97,116,97,98,97,115,101,115,95,117,95,50,52,0);
       let detailsj = false;
          let fastforwardm = 2;
          let quest0 = String.fromCharCode(104,111,117,114,108,121,95,115,95,57,54,0);
          let banner1 = String.fromCharCode(112,97,99,107,101,116,95,101,95,49,48,0);
         completeo += `${2 | parseInt(`${carouselq}`)}`;
         fastforwardm <<= Math.min(Math.abs(fastforwardm), 2);
         quest0 += `${(String.fromCharCode(50,0) == banner1 ? fastforwardm : banner1.length)}`;
      if (4 < completeo.length) {
         detailsj = !completeo.endsWith(`${detailsj}`);
      }
      while (detailsj) {
         completeo += `${guidek.size}`;
         break;
      }
          let whatsappY: Map<any, any> = new Map([[String.fromCharCode(108,95,53,48,95,100,101,102,101,97,116,0),552], [String.fromCharCode(112,114,101,102,101,114,95,100,95,49,0),827]]);
          let indexT = true;
         completeo += `${(completeo.length ^ (indexT ? 1 : 5))}`;
         whatsappY = new Map([[`${whatsappY.size}`, whatsappY.size % (Math.max(1, whatsappY.size))]]);
         indexT = whatsappY.size == 61;
         completeo = "1";
         completeo = "2";
      let frame_wlb = carouselq >= 7557797.0;
      do {
          let telegramp: Map<any, any> = new Map([[String.fromCharCode(111,95,53,55,95,118,98,101,122,105,101,114,0),203], [String.fromCharCode(118,95,51,54,95,103,104,97,115,104,0),985]]);
          let danger3 = 5.0;
          let downloadl: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,108,101,95,102,95,55,48,0),514], [String.fromCharCode(117,110,114,101,102,95,55,95,53,51,0),556], [String.fromCharCode(121,95,55,52,95,109,105,103,114,97,116,105,110,103,0),276]]);
          let yellowH: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,111,114,95,109,95,55,52,0),461], [String.fromCharCode(114,101,98,97,115,101,95,107,95,57,51,0),884], [String.fromCharCode(118,105,97,95,103,95,54,51,0),957]]);
         carouselq -= guidek.size & downloadl.size;
         telegramp.set(`${danger3}`, 2);
         danger3 -= 3 >> (Math.min(2, Math.abs(yellowH.size)));
         downloadl.set(`${danger3}`, parseInt(`${danger3}`));
         yellowH = new Map([[`${telegramp.size}`, parseInt(`${danger3}`)]]);
         if (frame_wlb) {
            break;
         }
      } while (frame_wlb && (2.29 <= carouselq));
      let emojiJ = String.fromCharCode(108,119,48,48,99,99,106,53,0) == completeo;
      do {
         completeo = `${parseInt(`${carouselq}`)}`;
         if (emojiJ) {
            break;
         }
      } while (emojiJ && (detailsj));
      let carousell = detailsj ? !detailsj : detailsj;
      do {
          let constantsh: Array<any> = [String.fromCharCode(109,111,99,107,95,113,95,56,48,0), String.fromCharCode(109,105,115,99,95,114,95,56,55,0)];
          let trashS: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,120,95,97,95,54,55,0),317], [String.fromCharCode(98,95,57,56,95,112,97,114,0),722], [String.fromCharCode(98,117,105,108,100,95,112,95,54,56,0),792]]);
         detailsj = completeo.length < 63 || !detailsj;
         constantsh = [3 & trashS.size];
         trashS = new Map([[`${trashS.size}`, trashS.size >> (Math.min(Math.abs(1), 1))]]);
         if (carousell) {
            break;
         }
      } while ((detailsj) && carousell);
         completeo += `${guidek.size ^ parseInt(`${carouselq}`)}`;
          let anythinkV = 0.0;
          let eact3: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,99,95,52,56,0),582], [String.fromCharCode(101,120,116,114,101,109,101,95,54,95,53,51,0),453], [String.fromCharCode(101,95,56,54,95,115,113,108,105,116,101,114,101,98,97,115,101,114,0),569]]);
          let changeO = String.fromCharCode(113,95,57,51,95,116,97,112,112,101,100,0);
         completeo = `${(String.fromCharCode(70,0) == completeo ? (detailsj ? 1 : 3) : completeo.length)}`;
         anythinkV -= parseFloat(`${eact3.size}`);
         eact3 = new Map([[`${eact3.size}`, eact3.size]]);
         changeO += `${changeO.length}`;
       let auto_4xf = 5.0;
       let upgradeT = 1.0;
      confirmationh *= parseFloat(`${sell3.length % 2}`);
      break;
   }
   while (abouts.includes(`${middlewarer.length}`)) {
      middlewarer.push(sina9.length >> (Math.min(Math.abs(3), 4)));
      break;
   }
   for (let l = 0; l < 2; l++) {
       let leftN = true;
       let savel = 1;
       let small6 = String.fromCharCode(117,95,51,95,111,112,101,110,115,115,108,118,0);
       let e_lockE = String.fromCharCode(106,95,52,50,95,101,120,112,105,114,101,100,0);
       let descU = String.fromCharCode(121,95,55,56,95,112,104,111,110,101,115,0);
      for (let k = 0; k < 2; k++) {
         descU = `${savel}`;
      }
         leftN = e_lockE == small6;
      let skips = leftN ? !leftN : leftN;
      do {
          let internets = String.fromCharCode(109,105,115,109,97,116,99,104,95,48,95,52,56,0);
         leftN = e_lockE.length > 15;
         internets = `${internets.length / (Math.max(3, 6))}`;
         if (skips) {
            break;
         }
      } while (skips && (descU.startsWith(`${leftN}`)));
      let bingR = 6238562 <= small6.length;
      do {
          let filedg = String.fromCharCode(121,101,116,95,103,95,50,52,0);
         small6 += `${1 * descU.length}`;
         filedg += `${filedg.length >> (Math.min(filedg.length, 3))}`;
         if (bingR) {
            break;
         }
      } while (bingR && (small6.endsWith(`${leftN}`)));
       let resendV = 0.0;
         leftN = savel < 43 && leftN;
         resendV -= e_lockE.length >> (Math.min(Math.abs(3), 1));
          let downloadedf = String.fromCharCode(102,95,52,50,95,100,101,118,105,99,101,115,0);
          let humidityw: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,120,95,116,95,52,48,0),false ], [String.fromCharCode(115,116,100,95,54,95,53,51,0),true ]]);
          let containerl = 2;
         savel /= Math.max(e_lockE.length, 2);
         downloadedf = `${humidityw.size}`;
         humidityw.set(downloadedf, downloadedf.length);
         containerl |= 1;
       let constantsJ = 2;
       let saver = 0;
      for (let f = 0; f < 1; f++) {
         resendV /= Math.max(savel / (Math.max(5, small6.length)), 1);
      }
      while (!e_lockE.startsWith(`${leftN}`)) {
         e_lockE = `${((leftN ? 1 : 4) ^ constantsJ)}`;
         break;
      }
         descU = `${(saver + (leftN ? 4 : 4))}`;
      if (2 == (4 << (Math.min(5, Math.abs(savel))))) {
         savel /= Math.max(2, 2);
      }
      let commentT = small6 == String.fromCharCode(101,106,113,99,0);
      do {
         small6 = `${3 * saver}`;
         if (commentT) {
            break;
         }
      } while ((!e_lockE.includes(`${small6.length}`)) && commentT);
      for (let a = 0; a < 3; a++) {
         saver *= 1;
      }
      confirmationh += parseFloat(`${1 & const_s1H.length}`);
   }
       let settingl = false;
       let currentD = false;
          let tumbnaili = false;
         settingl = !currentD;
         tumbnaili = !tumbnaili;
      let placeholder5 = settingl ? !settingl : settingl;
      do {
          let tooltipsP = 0.0;
          let shoota = String.fromCharCode(97,95,52,56,95,116,121,111,101,0);
          let hooksB = 1.0;
          let clock3 = 4.0;
         settingl = settingl || tooltipsP < 40.19;
         tooltipsP *= parseFloat(`${parseInt(`${clock3}`) - 3}`);
         shoota = `${parseInt(`${hooksB}`) >> (Math.min(Math.abs(2), 1))}`;
         hooksB *= 1 & parseInt(`${clock3}`);
         if (placeholder5) {
            break;
         }
      } while (placeholder5 && (!settingl));
          let lineM = true;
          let homex = 4.0;
          let sendy = true;
         currentD = !lineM;
         homex += ((sendy ? 4 : 1) + parseInt(`${homex}`));
         sendy = 6.31 <= homex;
          let loadingx = 0;
         settingl = (!settingl ? currentD : settingl);
         loadingx += 1;
         settingl = !currentD;
         settingl = !settingl && !currentD;
      left8 += `${1 & left8.length}`;
       let telegramB = String.fromCharCode(120,95,54,55,95,97,112,112,114,111,120,105,109,97,116,101,0);
       let thumbnail2 = 4.0;
       let settingM: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,95,112,95,54,49,0),String.fromCharCode(121,95,52,51,95,113,110,111,115,0)], [String.fromCharCode(114,101,102,114,101,115,104,95,111,95,57,0),String.fromCharCode(115,99,104,101,100,117,108,101,95,113,95,56,49,0)], [String.fromCharCode(114,95,50,48,95,101,120,105,116,0),String.fromCharCode(112,95,54,53,95,118,105,115,117,97,108,108,121,0)]]);
      for (let w = 0; w < 1; w++) {
          let leftd = 1.0;
          let j_centerN = String.fromCharCode(108,95,53,55,95,99,111,110,99,117,114,114,101,110,116,0);
          let calendarz: Map<any, any> = new Map([[String.fromCharCode(117,95,56,53,95,99,111,112,121,118,0),691], [String.fromCharCode(110,116,115,99,95,119,95,49,0),966]]);
          let catagory6 = false;
          let notificationQ = 1.0;
         thumbnail2 -= parseInt(`${notificationQ}`) - 2;
         leftd += (calendarz.size * (catagory6 ? 5 : 5));
         j_centerN += `${((catagory6 ? 1 : 5) * parseInt(`${leftd}`))}`;
         calendarz = new Map([[`${calendarz.size}`, 1]]);
         notificationQ *= parseFloat(`${j_centerN.length}`);
      }
      for (let p = 0; p < 2; p++) {
          let alertw = 5.0;
          let settingU = 1.0;
         telegramB = `${parseInt(`${thumbnail2}`) << (Math.min(Math.abs(settingM.size), 2))}`;
         alertw *= 2;
         settingU /= Math.max(4, 2);
      }
          let sentryM = 1.0;
          let background_ = 3.0;
          let annerE = 2.0;
         settingM.set(`${thumbnail2}`, 3 * parseInt(`${background_}`));
         sentryM += parseInt(`${annerE}`);
         background_ -= parseFloat(`${parseInt(`${annerE}`) ^ parseInt(`${sentryM}`)}`);
         settingM = new Map([[`${settingM.size}`, settingM.size]]);
          let orangeB = 2;
          let detailL = 1.0;
          let philippinesM = 0.0;
         settingM.set(`${thumbnail2}`, parseInt(`${philippinesM}`));
         orangeB -= parseInt(`${detailL}`);
         detailL /= Math.max(2, parseFloat(`${3 * parseInt(`${detailL}`)}`));
      while (1.19 >= (thumbnail2 / (Math.max(7, settingM.size)))) {
          let internetZ = 2.0;
          let mailk = String.fromCharCode(100,101,99,97,121,95,99,95,57,57,0);
          let buttonV = 5;
          let eactl = 3;
         settingM = new Map([[mailk, parseInt(`${thumbnail2}`)]]);
         internetZ += parseFloat(`${parseInt(`${internetZ}`) ^ 3}`);
         mailk += "1";
         buttonV *= eactl;
         break;
      }
      let eventr = thumbnail2 >= 6855020.0;
      do {
          let favoriteI = String.fromCharCode(98,95,49,56,95,108,101,116,116,101,114,0);
          let homes = true;
          let constantst: Array<any> = [624, 690];
          let scorew: Map<any, any> = new Map([[String.fromCharCode(104,95,49,56,95,100,111,99,115,105,122,101,0),false ], [String.fromCharCode(110,95,54,55,95,114,101,97,100,105,110,105,116,0),true ], [String.fromCharCode(107,95,49,50,95,100,101,108,105,118,101,114,121,0),false ]]);
          let upload0 = 2.0;
         thumbnail2 += parseInt(`${thumbnail2}`);
         favoriteI = `${parseInt(`${upload0}`) >> (Math.min(Math.abs(scorew.size), 3))}`;
         homes = !homes;
         constantst.push(constantst.length >> (Math.min(favoriteI.length, 5)));
         scorew.set(favoriteI, constantst.length);
         upload0 -= (parseFloat(`${parseInt(`${upload0}`) / (Math.max(8, (homes ? 1 : 2)))}`));
         if (eventr) {
            break;
         }
      } while (eventr && (thumbnail2 == 3.31));
      while (parseInt(`${thumbnail2}`) > telegramB.length) {
         thumbnail2 /= Math.max(3, 3);
         break;
      }
      for (let s = 0; s < 2; s++) {
         thumbnail2 *= parseInt(`${thumbnail2}`) - telegramB.length;
      }
      confirmationh += (parseFloat(`${1 << (Math.min(3, Math.abs((unselectedp ? 5 : 1))))}`));
    

       let whitec = String.fromCharCode(105,110,115,101,99,95,49,95,52,48,0);
         whitec = `${(String.fromCharCode(67,0) == whitec ? whitec.length : whitec.length)}`;
         whitec = `${1 & whitec.length}`;
          let hover8 = String.fromCharCode(104,117,102,102,95,101,95,52,51,0);
         whitec += `${hover8.length}`;
      lightk = [(String.fromCharCode(121,0) == const_s1H ? downloadingA.length : const_s1H.length)];
   let anewsA = 5479300 >= middlewarer.length;
   do {
       let chatf = 5;
       let recommendation1 = String.fromCharCode(112,95,53,95,115,119,105,116,99,104,101,114,0);
       let matches7 = 1;
       let playB = true;
       let clearw = true;
      if (recommendation1.length > matches7) {
          let animationa = 5;
          let adultv = String.fromCharCode(114,97,110,107,95,55,95,57,49,0);
          let basketballj = String.fromCharCode(106,95,55,53,95,97,108,103,0);
         recommendation1 = "1";
         animationa <<= Math.min(1, Math.abs((String.fromCharCode(82,0) == adultv ? animationa : adultv.length)));
         basketballj += `${basketballj.length}`;
      }
          let countryy = String.fromCharCode(118,100,101,99,95,118,95,54,53,0);
          let navigationK = String.fromCharCode(99,117,114,108,95,56,95,49,52,0);
         matches7 >>= Math.min(countryy.length, 1);
         countryy += `${navigationK.length ^ 2}`;
         navigationK += `${(String.fromCharCode(79,0) == navigationK ? navigationK.length : navigationK.length)}`;
          let foundw = String.fromCharCode(108,105,115,116,95,53,95,49,49,0);
         playB = clearw;
         foundw = `${foundw.length}`;
      for (let r = 0; r < 2; r++) {
          let aboutn = 1.0;
          let predictioni = 5.0;
         playB = aboutn < 52.77 || !playB;
         aboutn /= Math.max(parseFloat(`${2 ^ parseInt(`${predictioni}`)}`), 1);
         predictioni -= parseInt(`${predictioni}`) >> (Math.min(2, Math.abs(1)));
      }
         matches7 >>= Math.min(4, Math.abs(recommendation1.length ^ 2));
         recommendation1 = `${3 + recommendation1.length}`;
      if (4 == (matches7 % (Math.max(4, 10)))) {
         clearw = !recommendation1.endsWith(`${clearw}`);
      }
          let nextL = 2.0;
         recommendation1 += `${1 ^ parseInt(`${nextL}`)}`;
      middlewarer.push(const_s1H.length % 1);
      chatf /= Math.max(4, chatf);
      if (anewsA) {
         break;
      }
   } while ((!sina9.endsWith(`${middlewarer.length}`)) && anewsA);
      typingb /= Math.max(1, parseFloat(`${abouts.length + downloadingA.length}`));
      transferQ &= 1;
   let photoG = 6972597 <= left8.length;
   do {
      left8 = `${transferQ}`;
      if (photoG) {
         break;
      }
   } while ((!unselectedp) && photoG);
       let injuryU = false;
       let castU = 1.0;
       let blackR = String.fromCharCode(100,99,116,114,101,102,95,103,95,50,56,0);
          let stationH = true;
          let trashz = 0.0;
          let baiduc = String.fromCharCode(107,95,57,49,95,97,115,110,116,0);
         castU += blackR.length >> (Math.min(1, Math.abs(parseInt(`${castU}`))));
         stationH = !stationH || 23.70 <= trashz;
         trashz -= parseInt(`${trashz}`) / 2;
         baiduc = `${(parseInt(`${trashz}`) | (stationH ? 1 : 4))}`;
      for (let y = 0; y < 1; y++) {
         injuryU = injuryU || castU >= 50.82;
      }
      for (let d = 0; d < 1; d++) {
         castU *= blackR.length;
      }
      if (!injuryU) {
          let tickedb = String.fromCharCode(98,95,49,54,95,110,111,100,101,115,101,116,0);
          let arrowE = String.fromCharCode(98,95,57,95,108,105,98,115,119,115,99,97,108,101,0);
          let combinedT: Map<any, any> = new Map([[String.fromCharCode(118,111,119,101,108,95,103,95,56,49,0),true ], [String.fromCharCode(110,95,55,54,95,98,111,111,115,116,0),false ]]);
          let commentI = String.fromCharCode(107,95,56,56,95,104,101,97,100,115,0);
          let tick8: Map<any, any> = new Map([[String.fromCharCode(113,95,50,52,95,97,110,103,108,101,115,0),598], [String.fromCharCode(112,117,98,95,56,95,57,53,0),738], [String.fromCharCode(116,95,56,48,95,108,97,110,100,109,105,110,101,115,0),772]]);
         injuryU = (arrowE.length << (Math.min(blackR.length, 2))) < 75;
         tickedb = `${combinedT.size}`;
         arrowE = `${tickedb.length >> (Math.min(Math.abs(1), 5))}`;
         combinedT.set(`${combinedT.size}`, 3);
         commentI = `${(commentI == String.fromCharCode(106,0) ? combinedT.size : commentI.length)}`;
         tick8.set(tickedb, tickedb.length ^ commentI.length);
      }
         blackR = `${1 + parseInt(`${castU}`)}`;
      while (blackR.length == 1) {
          let incidentj = String.fromCharCode(97,95,50,55,95,97,99,100,101,99,0);
          let benefitk = String.fromCharCode(97,117,116,111,98,97,110,104,95,108,95,56,52,0);
          let fieldd = 3.0;
         injuryU = 25 == blackR.length && incidentj.length == 25;
         incidentj += `${(String.fromCharCode(67,0) == benefitk ? benefitk.length : parseInt(`${fieldd}`))}`;
         fieldd += parseFloat(`${parseInt(`${fieldd}`) / (Math.max(2, 7))}`);
         break;
      }
      while (!injuryU) {
          let gestureD: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,97,110,116,95,52,95,54,56,0),453], [String.fromCharCode(97,118,102,105,108,116,101,114,95,112,95,57,53,0),482]]);
          let downloaderg: Array<any> = [527, 746, 191];
          let switch_hH: Array<any> = [419, 807, 318];
          let gestureK = String.fromCharCode(122,95,56,56,95,105,102,114,97,109,101,0);
          let basketballf = String.fromCharCode(105,110,115,101,114,116,105,111,110,95,99,95,56,49,0);
         blackR = `${blackR.length - 2}`;
         gestureD = new Map([[`${switch_hH.length}`, switch_hH.length]]);
         downloaderg = [gestureK.length & 3];
         gestureK += `${downloaderg.length << (Math.min(Math.abs(2), 1))}`;
         basketballf = `${switch_hH.length}`;
         break;
      }
       let dragp = String.fromCharCode(109,111,116,99,111,109,112,95,99,95,48,0);
       let condensedz = String.fromCharCode(104,95,56,55,0);
          let awayH = 4.0;
         dragp = `${parseInt(`${castU}`)}`;
         awayH += parseFloat(`${parseInt(`${awayH}`)}`);
      unselectedp = (anytime4.length | transferQ) <= 47;
   if (2 >= const_s1H.length && unselectedp) {
       let gpayL = 0.0;
       let zhengpiang = String.fromCharCode(113,95,56,52,95,112,114,105,110,116,102,0);
         zhengpiang += `${(String.fromCharCode(113,0) == zhengpiang ? zhengpiang.length : parseInt(`${gpayL}`))}`;
       let bottomi = String.fromCharCode(110,95,50,56,95,98,97,100,114,101,113,0);
       let linkE = String.fromCharCode(109,97,116,105,99,95,104,95,48,0);
      while (bottomi.includes(zhengpiang)) {
         zhengpiang += `${parseInt(`${gpayL}`) & 3}`;
         break;
      }
       let scorer: Map<any, any> = new Map([[String.fromCharCode(121,95,49,57,95,115,117,112,112,111,114,116,105,110,103,0),832], [String.fromCharCode(103,97,117,103,101,95,50,95,56,57,0),510]]);
         gpayL -= linkE.length * 1;
         zhengpiang += `${1 | parseInt(`${gpayL}`)}`;
      unselectedp = 23 <= middlewarer.length && 23 <= const_s1H.length;
   }
   if ((transferQ / (Math.max(1, 2))) <= 1 || 5 <= (transferQ / (Math.max(1, 1)))) {
      transferQ -= 2 ^ parseInt(`${typingb}`);
   }
      typingb /= Math.max(parseFloat(`${parseInt(`${confirmationh}`)}`), 3);
       let closeg = true;
      let bufferM = closeg ? !closeg : closeg;
      do {
         closeg = !closeg && !closeg;
         if (bufferM) {
            break;
         }
      } while ((!closeg) && bufferM);
       let switch_j5 = String.fromCharCode(113,105,97,110,95,106,95,55,52,0);
         switch_j5 += `${((closeg ? 2 : 2))}`;
      unselectedp = typingb > 65.88 && 77 > sell3.length;
    await refetch();

      const_s1H += `${abouts.length}`;
      confirmationh += parseFloat(`${anytime4.length}`);
       let bodanF = String.fromCharCode(108,95,57,54,0);
       let matchesW = String.fromCharCode(115,117,98,112,101,101,114,95,114,95,55,56,0);
       let ewardedI = 4;
       let xvodB = 2;
      for (let w = 0; w < 3; w++) {
         xvodB /= Math.max(1, 5);
      }
         bodanF = `${xvodB}`;
      for (let t = 0; t < 3; t++) {
         bodanF = `${1 % (Math.max(6, ewardedI))}`;
      }
      while (2 == ewardedI) {
          let selectedJ = String.fromCharCode(110,95,52,55,95,99,108,111,115,101,112,0);
          let telegramV: Array<any> = [37, 967];
          let alertt = String.fromCharCode(99,111,110,110,101,99,116,95,98,95,50,55,0);
          let langH: Array<any> = [895, 245, 640];
          let bannerl = String.fromCharCode(116,95,56,48,95,101,110,100,120,0);
         ewardedI ^= 2 - bodanF.length;
         selectedJ += `${bannerl.length + telegramV.length}`;
         telegramV.push(3 | bannerl.length);
         alertt = "3";
         langH.push(3 + bannerl.length);
         break;
      }
         ewardedI /= Math.max(4, matchesW.length % 3);
      const_s1H = `${(anytime4 == String.fromCharCode(98,0) ? const_s1H.length : anytime4.length)}`;
      sell3.push(parseInt(`${typingb}`) * transferQ);
   let settingw = String.fromCharCode(109,49,98,99,106,49,118,118,53,101,0) == sina9;
   do {
      sina9 += `${(String.fromCharCode(107,0) == left8 ? (desct ? 3 : 3) : left8.length)}`;
      if (settingw) {
         break;
      }
   } while (((confirmationh / (Math.max(1.62, 8))) < 2.30) && settingw);
       let nterstitial5 = String.fromCharCode(115,111,98,101,108,95,55,95,50,52,0);
       let readj = String.fromCharCode(102,95,52,95,101,110,116,105,116,105,116,121,0);
         readj += `${nterstitial5.length * 2}`;
         readj += `${readj.length}`;
      while (2 >= readj.length) {
          let crownq = 1.0;
          let router2: Array<any> = [936, 477];
          let mappings = 5.0;
          let turnZ: Map<any, any> = new Map([[String.fromCharCode(105,95,51,50,95,105,110,116,115,0),491], [String.fromCharCode(117,95,53,50,95,115,105,103,112,97,115,115,0),796], [String.fromCharCode(119,95,56,49,95,109,105,110,115,0),294]]);
          let hooksW = String.fromCharCode(114,101,98,117,105,108,100,95,117,95,55,53,0);
         nterstitial5 += `${parseInt(`${mappings}`)}`;
         crownq += hooksW.length % 2;
         router2.push(router2.length | 3);
         mappings += parseFloat(`${router2.length << (Math.min(5, Math.abs(turnZ.size)))}`);
         turnZ.set(`${crownq}`, parseInt(`${crownq}`));
         hooksW = `${2 << (Math.min(4, hooksW.length))}`;
         break;
      }
         readj = `${nterstitial5.length}`;
      if (readj.length == 1) {
         nterstitial5 = `${nterstitial5.length}`;
      }
      let usernamec = String.fromCharCode(107,56,54,0) == readj;
      do {
         readj = "3";
         if (usernamec) {
            break;
         }
      } while (usernamec && (nterstitial5 != String.fromCharCode(113,0)));
      transferQ += sina9.length;
   while (transferQ < 5) {
      transferQ /= Math.max(2, 5);
      break;
   }
      desct = (confirmationh + typingb) < 52.22;
   if (const_s1H.length > sell3.length) {
      const_s1H = `${parseInt(`${typingb}`) >> (Math.min(left8.length, 5))}`;
   }
   let main_vf = 9460821.0 >= confirmationh;
   do {
      confirmationh += parseFloat(`${transferQ}`);
      if (main_vf) {
         break;
      }
   } while (main_vf && (5 < (5 - left8.length) || (parseInt(`${confirmationh}`) - 5) < 1));
    setIsRefreshing(false);

   if (downloadingA.includes(`${lightk.length}`)) {
      lightk = [parseInt(`${confirmationh}`)];
   }
      lightk = [lightk.length];
      const_s1H = `${abouts.length}`;
   let fastforwardM = abouts == String.fromCharCode(114,50,97,116,109,102,53,100,108,95,0);
   do {
      abouts += `${const_s1H.length >> (Math.min(5, left8.length))}`;
      if (fastforwardM) {
         break;
      }
   } while ((const_s1H == abouts) && fastforwardM);
       let minih = 3.0;
       let friendsK = String.fromCharCode(105,95,50,95,109,97,112,112,101,114,0);
         friendsK = `${3 + friendsK.length}`;
         friendsK = "2";
       let eighteenA = 2;
       let helperb = 5;
      for (let e = 0; e < 3; e++) {
         helperb *= 1;
      }
         minih *= 1;
         eighteenA *= 1;
      anytime4 += "3";
   for (let s = 0; s < 3; s++) {
      typingb /= Math.max(parseFloat(`${middlewarer.length >> (Math.min(Math.abs(2), 5))}`), 4);
   }
   while (sell3.length == sentryY.length) {
      sell3 = [left8.length];
      break;
   }
   if ((middlewarer.length + 2) <= 4) {
      middlewarer = [sentryY.length];
   }
      sentryY = `${lightk.length * middlewarer.length}`;
      lightk = [left8.length << (Math.min(Math.abs(3), 5))];
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
       let headerU: Map<any, any> = new Map([[String.fromCharCode(114,95,52,48,95,101,114,114,115,116,114,0),659], [String.fromCharCode(97,109,114,119,98,100,101,99,95,55,95,54,53,0),19], [String.fromCharCode(117,110,100,101,114,102,108,111,119,95,100,95,57,51,0),829]]);
    let telegramF = 0;
    let clockb = String.fromCharCode(102,95,55,95,114,101,115,116,114,105,99,116,105,111,110,0);
    let flyerC = 0;
    let gmailH = false;
    let bingY: Map<any, any> = new Map([[String.fromCharCode(100,95,53,53,95,111,112,101,110,115,101,97,0),994], [String.fromCharCode(109,95,53,48,95,99,107,115,117,109,0),536]]);
    let downloadedn = false;
    let time_zT = String.fromCharCode(106,95,55,50,95,109,97,105,110,98,117,110,100,108,101,0);
    let zhengpian3 = 1.0;
    let albumd: Array<any> = [992, 119, 403];
      clockb = `${2 >> (Math.min(2, Math.abs(flyerC)))}`;
      zhengpian3 /= Math.max(2, parseFloat(`${telegramF}`));
   if (zhengpian3 == parseFloat(`${headerU.size}`)) {
      headerU.set(clockb, ((gmailH ? 4 : 5)));
   }
      zhengpian3 += parseFloat(`${clockb.length & 1}`);
   let modityD = downloadedn ? !downloadedn : downloadedn;
   do {
      downloadedn = 69 < clockb.length;
      if (modityD) {
         break;
      }
   } while ((downloadedn) && modityD);
      time_zT += "3";

    const state = await NetInfo.fetch();

   if (clockb.endsWith(`${telegramF}`)) {
      clockb += `${(clockb == String.fromCharCode(102,0) ? bingY.size : clockb.length)}`;
   }
   while (!gmailH) {
      gmailH = telegramF >= headerU.size;
      break;
   }
   while ((zhengpian3 * 2.48) > 1.19 && (time_zT.length % 3) > 4) {
      zhengpian3 /= Math.max(4, (parseFloat(`${clockb == String.fromCharCode(101,0) ? flyerC : clockb.length}`)));
      break;
   }
   for (let j = 0; j < 2; j++) {
      gmailH = time_zT.includes(`${flyerC}`);
   }
   let viewerA = headerU.size <= 4949264;
   do {
      headerU.set(`${downloadedn}`, parseInt(`${zhengpian3}`) / 3);
      if (viewerA) {
         break;
      }
   } while ((4 >= (5 * headerU.size) && headerU.size >= 5) && viewerA);
   if (!gmailH || !downloadedn) {
       let buttonU: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,101,100,95,55,95,55,0),781], [String.fromCharCode(107,95,53,55,95,101,97,105,100,99,116,0),947]]);
       let placeholdery: Array<any> = [310, 462];
      let a_unlocka = 7499255 >= placeholdery.length;
      do {
         placeholdery.push(placeholdery.length ^ buttonU.size);
         if (a_unlocka) {
            break;
         }
      } while (a_unlocka && ((placeholdery.length / (Math.max(8, buttonU.size))) >= 5 || (placeholdery.length / 5) >= 2));
         buttonU = new Map([[`${buttonU.size}`, 2]]);
      if ((placeholdery.length & 5) >= 2) {
         placeholdery.push(buttonU.size / (Math.max(3, 1)));
      }
      let formC = buttonU.size <= 6216209;
      do {
          let progressT = String.fromCharCode(112,116,105,111,110,115,95,53,95,56,48,0);
          let yellowY = String.fromCharCode(98,105,116,115,95,110,95,50,48,0);
          let long_2xl = 5;
          let componentw = String.fromCharCode(118,95,57,57,95,117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
          let project0 = 3.0;
         buttonU = new Map([[yellowY, yellowY.length - 2]]);
         progressT = `${parseInt(`${project0}`)}`;
         long_2xl %= Math.max(5, 3 >> (Math.min(Math.abs(long_2xl), 5)));
         componentw += "1";
         project0 *= componentw.length % 3;
         if (formC) {
            break;
         }
      } while (formC && ((3 * placeholdery.length) <= 1 && (placeholdery.length * 3) <= 5));
          let castingd: Map<any, any> = new Map([[String.fromCharCode(102,95,54,57,95,98,97,108,97,110,99,101,100,0),694], [String.fromCharCode(103,97,116,101,95,120,95,48,0),820]]);
         buttonU = new Map([[`${buttonU.size}`, placeholdery.length << (Math.min(5, Math.abs(buttonU.size)))]]);
         castingd.set(`${castingd.size}`, castingd.size | castingd.size);
      if (2 < buttonU.size) {
         placeholdery.push(placeholdery.length & 3);
      }
      gmailH = !downloadedn;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      flyerC -= telegramF;
       let commentP = 2;
       let areaf = true;
          let combineC = String.fromCharCode(100,95,50,50,95,105,110,116,101,103,101,114,105,102,121,0);
         areaf = combineC.length <= 40;
          let album5 = String.fromCharCode(103,95,56,95,100,105,109,105,110,115,105,111,110,115,0);
          let close8 = String.fromCharCode(105,95,53,49,95,97,99,99,101,112,116,115,0);
          let policy1 = false;
         areaf = policy1 || areaf;
         album5 = `${close8.length << (Math.min(album5.length, 4))}`;
         close8 += "1";
         policy1 = (close8.length - album5.length) <= 5;
         commentP += commentP;
         commentP <<= Math.min(Math.abs(3 & commentP), 1);
      for (let e = 0; e < 1; e++) {
          let middleq = String.fromCharCode(122,95,49,48,48,95,115,108,105,112,0);
          let activeb = String.fromCharCode(105,95,52,51,95,111,118,101,114,118,105,101,119,0);
          let subs0: Map<any, any> = new Map([[String.fromCharCode(110,116,114,111,95,51,95,54,49,0),false ], [String.fromCharCode(109,101,116,97,95,99,95,54,48,0),false ]]);
         commentP <<= Math.min(4, Math.abs(1));
         middleq += `${middleq.length * 2}`;
         activeb = `${activeb.length & subs0.size}`;
         subs0.set(activeb, activeb.length >> (Math.min(3, middleq.length)));
      }
      let details0 = commentP <= 5251535;
      do {
          let castingj = false;
          let stationsJ = String.fromCharCode(115,95,49,49,95,114,97,112,112,101,114,0);
          let castR = String.fromCharCode(116,95,52,55,95,115,101,116,100,97,114,0);
          let time_zyo = 3.0;
         commentP += parseInt(`${time_zyo}`);
         castingj = castR.startsWith(`${castingj}`);
         stationsJ += `${(stationsJ.length * (castingj ? 1 : 4))}`;
         castR += "1";
         time_zyo -= castR.length & 3;
         if (details0) {
            break;
         }
      } while ((2 <= commentP) && details0);
      flyerC *= ((areaf ? 5 : 3));
   if (2 >= telegramF) {
      telegramF |= (2 >> (Math.min(Math.abs((gmailH ? 1 : 2)), 3)));
   }
   if (5.87 <= (zhengpian3 * parseFloat(`${albumd.length}`))) {
      zhengpian3 *= parseFloat(`${flyerC}`);
   }
       let networkt = String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,109,95,54,54,0);
       let bellp = 3.0;
      if ((networkt.length * parseInt(`${bellp}`)) <= 1 || (1 ^ networkt.length) <= 3) {
          let default_j1o: Array<any> = [String.fromCharCode(116,111,98,105,116,95,53,95,51,0), String.fromCharCode(104,95,50,54,95,112,97,108,101,116,116,101,0), String.fromCharCode(101,110,116,101,114,101,100,95,48,95,52,49,0)];
          let volumep = String.fromCharCode(110,111,116,104,101,108,100,95,111,95,51,51,0);
          let collectiony = String.fromCharCode(103,101,110,101,114,97,116,105,111,110,95,105,95,51,49,0);
          let untick3 = false;
         networkt = "3";
         default_j1o = [default_j1o.length];
         volumep += `${1 ^ volumep.length}`;
         collectiony += `${collectiony.length}`;
      }
         networkt = "3";
       let commonH = String.fromCharCode(116,97,107,100,115,112,95,99,95,49,50,0);
      if (commonH.length <= 4) {
          let videoo = true;
          let redirect5 = 0;
          let default__M = String.fromCharCode(98,95,54,50,95,115,99,111,112,101,0);
          let gemfilek = true;
          let friendsb: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,118,97,108,105,100,97,116,111,114,115,0),false ], [String.fromCharCode(101,97,115,101,95,97,95,52,49,0),false ]]);
         bellp *= (parseFloat(`${(gemfilek ? 5 : 5) | 1}`));
         videoo = redirect5 <= default__M.length;
         redirect5 += friendsb.size % (Math.max(default__M.length, 8));
         gemfilek = (redirect5 - default__M.length) == 72;
         friendsb = new Map([[`${friendsb.size}`, default__M.length]]);
      }
       let acopy__1u = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,98,95,55,57,0);
       let orientationb = String.fromCharCode(109,109,99,111,95,120,95,56,48,0);
      if (networkt.length > orientationb.length) {
          let agreementL = 0.0;
          let updatesB = 3;
         networkt = `${parseInt(`${agreementL}`) * commonH.length}`;
         agreementL *= parseFloat(`${updatesB}`);
      }
      clockb += `${parseInt(`${zhengpian3}`)}`;
   let animationM = gmailH ? !gmailH : gmailH;
   do {
      gmailH = (telegramF << (Math.min(Math.abs(headerU.size), 3))) == 56;
      if (animationM) {
         break;
      }
   } while (animationM && (gmailH));
    setIsOffline(offline);

   let termsV = gmailH ? !gmailH : gmailH;
   do {
      gmailH = flyerC <= 35;
      if (termsV) {
         break;
      }
   } while (termsV && (3 <= flyerC));
       let projectr = 4;
       let a_countf = String.fromCharCode(105,95,50,50,95,111,114,103,0);
      if ((a_countf.length % (Math.max(6, projectr))) < 2) {
          let robotol = false;
          let select5: Map<any, any> = new Map([[String.fromCharCode(104,112,114,101,100,95,106,95,57,54,0),false ], [String.fromCharCode(115,116,111,114,97,98,108,101,95,57,95,51,50,0),true ]]);
          let placeholderA = String.fromCharCode(99,104,117,110,107,95,114,95,50,49,0);
          let twitter4: Array<any> = [408, 561, 164];
         projectr <<= Math.min(3, a_countf.length);
         robotol = !robotol;
         select5 = new Map([[`${twitter4.length}`, twitter4.length]]);
         placeholderA += `${twitter4.length + 3}`;
      }
      while (!a_countf.startsWith(`${projectr}`)) {
         projectr |= projectr + a_countf.length;
         break;
      }
         projectr |= a_countf.length;
         a_countf += `${(String.fromCharCode(102,0) == a_countf ? projectr : a_countf.length)}`;
      if (5 <= projectr) {
         projectr *= a_countf.length >> (Math.min(Math.abs(1), 1));
      }
         projectr ^= a_countf.length;
      albumd.push(clockb.length >> (Math.min(Math.abs(1), 3)));
       let malaysiaz: Map<any, any> = new Map([[String.fromCharCode(98,97,108,97,110,99,101,100,95,113,95,49,52,0),415], [String.fromCharCode(122,95,56,95,99,111,114,114,0),55], [String.fromCharCode(102,111,114,101,118,101,114,95,119,95,52,53,0),324]]);
       let actionsy: Array<any> = [String.fromCharCode(109,97,105,110,98,117,110,100,108,101,95,105,95,55,49,0), String.fromCharCode(100,95,56,95,102,97,120,99,111,109,112,114,0)];
          let middlej = 3;
          let otherM = String.fromCharCode(108,105,98,115,115,104,95,115,95,57,54,0);
         actionsy.push(malaysiaz.size >> (Math.min(5, Math.abs(middlej))));
         middlej ^= otherM.length & 2;
         otherM += `${otherM.length / (Math.max(otherM.length, 7))}`;
      let expandK = malaysiaz.size >= 6108436;
      do {
         malaysiaz = new Map([[`${malaysiaz.size}`, actionsy.length / 1]]);
         if (expandK) {
            break;
         }
      } while ((1 < (malaysiaz.size << (Math.min(Math.abs(4), 4))) || 4 < (actionsy.length << (Math.min(Math.abs(4), 5)))) && expandK);
      for (let w = 0; w < 1; w++) {
         malaysiaz = new Map([[`${malaysiaz.size}`, actionsy.length]]);
      }
         actionsy.push(actionsy.length * 2);
         malaysiaz = new Map([[`${malaysiaz.size}`, 3 % (Math.max(1, actionsy.length))]]);
      let detailsE = actionsy.length >= 9304482;
      do {
         actionsy.push(malaysiaz.size);
         if (detailsE) {
            break;
         }
      } while (detailsE && (malaysiaz.get(`${actionsy.length}`) != null));
      flyerC <<= Math.min(4, Math.abs(1 - malaysiaz.size));
       let specj = 3.0;
       let topicr = false;
          let indicator0: Array<any> = [146, 561, 817];
          let commonM: Map<any, any> = new Map([[String.fromCharCode(103,95,56,52,95,102,105,108,101,110,97,109,101,115,0),175], [String.fromCharCode(113,95,50,54,95,103,101,116,115,116,114,0),469], [String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,95,98,95,50,52,0),898]]);
         topicr = 76 <= commonM.size && specj <= 20.85;
         indicator0 = [indicator0.length - indicator0.length];
         commonM.set(`${indicator0.length}`, 3);
         topicr = !topicr;
      for (let l = 0; l < 2; l++) {
         specj += (parseInt(`${specj}`) - (topicr ? 1 : 5));
      }
         topicr = 33.25 == specj;
      for (let o = 0; o < 1; o++) {
         topicr = topicr && 31.46 >= specj;
      }
       let trash5 = 2.0;
       let middleN = 5.0;
      downloadedn = String.fromCharCode(49,0) == time_zT;
      albumd = [(parseInt(`${zhengpian3}`) & (gmailH ? 4 : 2))];
       let sports4 = 0;
       let related2: Array<any> = [856, 657];
         sports4 %= Math.max(2, 5);
      for (let x = 0; x < 3; x++) {
          let s_titleM = String.fromCharCode(105,95,56,50,95,97,99,102,102,0);
         related2.push(sports4 - s_titleM.length);
      }
      for (let l = 0; l < 1; l++) {
         sports4 /= Math.max(4, related2.length | 3);
      }
          let sorth = String.fromCharCode(119,95,51,52,95,97,116,97,98,97,115,101,0);
         related2.push(sports4 << (Math.min(1, Math.abs(3))));
         sorth = `${(String.fromCharCode(115,0) == sorth ? sorth.length : sorth.length)}`;
         related2.push(2);
      if ((3 >> (Math.min(1, related2.length))) == 3 || (sports4 >> (Math.min(Math.abs(3), 4))) == 5) {
         related2 = [sports4];
      }
      headerU = new Map([[`${downloadedn}`, (flyerC + (downloadedn ? 2 : 5))]]);
    if (!offline) {

   while (downloadedn) {
      downloadedn = (telegramF << (Math.min(time_zT.length, 5))) < 7;
      break;
   }
   if ((albumd.length - 1) == 3) {
       let xvodD: Array<any> = [89, 453, 217];
       let entryo: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,115,115,102,117,108,108,121,95,113,95,53,48,0),String.fromCharCode(119,101,114,101,95,104,95,54,57,0)], [String.fromCharCode(120,95,52,53,95,112,101,114,102,111,114,109,101,114,0),String.fromCharCode(102,101,108,101,109,95,109,95,52,52,0)]]);
       let hoverZ: Array<any> = [859, 302];
       let volumeo = String.fromCharCode(99,104,97,110,103,101,108,111,103,95,112,95,49,48,48,0);
         entryo.set(volumeo, volumeo.length | 2);
         volumeo = `${3 ^ entryo.size}`;
          let save1 = false;
          let volumeE: Map<any, any> = new Map([[String.fromCharCode(110,101,105,103,104,98,111,114,95,113,95,51,54,0),true ], [String.fromCharCode(106,95,50,57,95,101,105,116,104,101,114,0),false ], [String.fromCharCode(97,95,52,53,95,119,102,100,105,102,0),false ]]);
         entryo = new Map([[`${entryo.size}`, entryo.size | hoverZ.length]]);
         save1 = volumeE.size < 62;
         volumeE.set(`${save1}`, volumeE.size);
         entryo.set(`${hoverZ.length}`, hoverZ.length);
      let d_countJ = volumeo.length <= 6593611;
      do {
         volumeo = `${entryo.size % (Math.max(1, 8))}`;
         if (d_countJ) {
            break;
         }
      } while ((volumeo.startsWith(`${hoverZ.length}`)) && d_countJ);
      if (!Array.from(entryo.values()).includes(hoverZ.length)) {
         entryo.set(`${xvodD.length}`, 1);
      }
      while ((xvodD.length + entryo.size) > 4) {
          let robotoy = String.fromCharCode(101,95,49,48,48,95,107,115,101,116,0);
          let whistleb: Map<any, any> = new Map([[String.fromCharCode(97,116,111,102,95,51,95,54,57,0),716], [String.fromCharCode(98,95,50,95,114,101,97,100,105,110,105,116,0),844], [String.fromCharCode(119,112,101,110,100,105,110,103,95,107,95,55,57,0),180]]);
          let stringL: Map<any, any> = new Map([[String.fromCharCode(113,95,57,49,95,109,97,120,113,0),47], [String.fromCharCode(111,95,51,51,95,114,97,100,97,114,0),348], [String.fromCharCode(102,117,122,122,105,110,103,95,103,95,49,48,0),813]]);
         entryo = new Map([[`${entryo.size}`, xvodD.length]]);
         robotoy += "2";
         whistleb.set(`${robotoy}`, 3);
         stringL.set(`${whistleb.size}`, 2 - stringL.size);
         break;
      }
      for (let n = 0; n < 1; n++) {
         hoverZ.push(3);
      }
       let incidentH = String.fromCharCode(101,120,99,101,112,116,105,111,110,115,95,51,95,52,55,0);
       let lang2 = String.fromCharCode(119,116,118,102,105,108,101,95,56,95,51,55,0);
      let selectA = 5072240 >= entryo.size;
      do {
         entryo = new Map([[`${hoverZ.length}`, hoverZ.length]]);
         if (selectA) {
            break;
         }
      } while ((!volumeo.endsWith(`${entryo.size}`)) && selectA);
         lang2 = "3";
          let mutedC: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,52,95,53,54,0),true ], [String.fromCharCode(115,95,55,57,95,99,111,108,108,105,115,116,0),false ]]);
         incidentH += `${xvodD.length}`;
         mutedC.set(`${mutedC.size}`, mutedC.size >> (Math.min(Math.abs(3), 2)));
      albumd.push(time_zT.length);
   }
   while (downloadedn) {
       let q_counti = 1.0;
       let group0 = 4.0;
      let vietnamv = q_counti <= 6773141.0;
      do {
         q_counti += parseInt(`${group0}`);
         if (vietnamv) {
            break;
         }
      } while (((q_counti + group0) > 2.99) && vietnamv);
      if (2.7 > (q_counti - 3.19) && 3.87 > (3.19 - q_counti)) {
         group0 *= parseFloat(`${1}`);
      }
      for (let p = 0; p < 3; p++) {
         group0 += parseFloat(`${2}`);
      }
      if (3.97 == (q_counti / 4.84) && (4.84 / (Math.max(10, q_counti))) == 1.70) {
         group0 /= Math.max(parseFloat(`${parseInt(`${q_counti}`)}`), 5);
      }
         q_counti += parseInt(`${group0}`);
         q_counti *= parseInt(`${group0}`) - 2;
      bingY = new Map([[`${albumd.length}`, albumd.length]]);
      break;
   }
      headerU = new Map([[`${headerU.size}`, (headerU.size & (gmailH ? 3 : 2))]]);
      bingY = new Map([[`${gmailH}`, ((gmailH ? 2 : 2))]]);
      flyerC |= headerU.size;
      handleRefresh();
    }
  }, []);

  
  useFocusEffect(useCallback(() => {
    umb_center_carousel.watchAnytimeViewsAnalytics({
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

      // vip -> filter ads
      // guest -> filter first 10

      if (isVip) {
        filtered = filtered.filter(x => !x.is_ads)
      }

      if (KWConstants.isGuest(userState.user) && !adultMode) {
        filtered = filtered.slice(0, MINI_SHOW_LOGIN_NUMBER + 1);
      }

      setFlattenedVideos(filtered); 
      if (filtered.length > 0) {
        miniVodListRef.current?.scrollToOffset({
          index: 0,
          animated: false,
        });
      }
    }
  }, [videos, userState.user]);

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
    if (KWConstants.isLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
       let gemfileJ = false;
    let countryH: Array<any> = [969, 101];
    let eighteenW = 0.0;
    let malaysiaH: Array<any> = [154, 407, 817];
    let kickp = String.fromCharCode(107,95,49,49,95,109,105,103,114,97,116,101,0);
    let catalog7: Array<any> = [String.fromCharCode(113,95,52,52,95,97,110,103,108,101,100,0), String.fromCharCode(108,95,57,57,95,116,119,105,116,116,101,114,0)];
    let guideL = 3;
    let backwardO = String.fromCharCode(104,95,49,95,98,108,117,114,97,121,0);
    let default_jh: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,103,114,101,101,116,105,110,103,0),String.fromCharCode(122,95,49,51,95,100,101,99,114,101,97,115,105,110,103,0)], [String.fromCharCode(105,95,49,56,95,97,116,116,114,105,98,117,116,101,0),String.fromCharCode(100,109,117,108,95,113,95,51,48,0)], [String.fromCharCode(104,95,52,56,95,110,101,105,103,104,98,111,114,105,110,103,0),String.fromCharCode(114,117,110,116,105,109,101,95,52,95,51,50,0)]]);
    let mini8 = String.fromCharCode(105,110,102,111,108,100,101,114,95,121,95,51,53,0);
    let topico = String.fromCharCode(121,95,57,54,95,117,110,97,115,115,105,103,110,101,100,0);
    let downloader3 = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,103,95,53,56,0);
    let privilegeJ = 3.0;
    let leftQ = String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,103,95,57,49,0);
    let gemfiles = String.fromCharCode(106,95,52,52,95,97,118,120,115,121,110,116,104,0);
      malaysiaH = [countryH.length + default_jh.size];
   if (2 < (mini8.length - 5)) {
      catalog7 = [kickp.length - 2];
   }
      backwardO += `${countryH.length ^ 2}`;
   while (backwardO.length <= kickp.length) {
      kickp = `${catalog7.length}`;
      break;
   }
       let episodew = 2.0;
         episodew /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${episodew}`)), 5)), 1);
         episodew *= parseInt(`${episodew}`) + 2;
          let reducerR = String.fromCharCode(107,95,57,55,95,117,110,109,97,110,97,103,101,100,0);
          let untickF = 1.0;
          let fastforwardy = String.fromCharCode(113,95,54,57,0);
         episodew += 3 + parseInt(`${untickF}`);
         reducerR += `${reducerR.length}`;
         untickF *= 1 >> (Math.min(3, reducerR.length));
         fastforwardy += `${2 & fastforwardy.length}`;
      default_jh = new Map([[`${default_jh.size}`, 1]]);
      default_jh.set(`${eighteenW}`, 3 & parseInt(`${eighteenW}`));
      eighteenW -= (parseFloat(`${backwardO == String.fromCharCode(82,0) ? backwardO.length : default_jh.size}`));
   for (let i = 0; i < 1; i++) {
      guideL <<= Math.min(Math.abs(malaysiaH.length % 3), 5);
   }
   while (gemfileJ) {
      gemfileJ = 14 >= backwardO.length;
      break;
   }
   while (countryH.length > default_jh.size) {
       let subsi = 0;
       let slidero: Map<any, any> = new Map([[String.fromCharCode(110,95,55,52,95,112,99,109,117,0),748], [String.fromCharCode(121,95,53,56,95,115,116,114,101,115,115,0),797]]);
       let filterq = 3;
         subsi *= 3 % (Math.max(5, slidero.size));
         filterq %= Math.max(4, slidero.size * 2);
      while (slidero.size <= filterq) {
          let volumeb = String.fromCharCode(112,95,56,51,95,98,111,117,110,100,101,100,0);
          let lessr = 1.0;
         slidero.set(`${filterq}`, parseInt(`${lessr}`));
         volumeb = `${volumeb.length}`;
         lessr -= (String.fromCharCode(81,0) == volumeb ? volumeb.length : volumeb.length);
         break;
      }
         subsi |= filterq << (Math.min(Math.abs(2), 2));
      let dark8 = slidero.size >= 7779264;
      do {
          let screen2: Map<any, any> = new Map([[String.fromCharCode(101,115,116,114,111,121,95,50,95,51,56,0),711], [String.fromCharCode(99,111,108,111,114,101,100,95,119,95,51,52,0),302]]);
          let eventK: Array<any> = [String.fromCharCode(118,95,51,51,95,105,110,116,101,114,114,117,112,116,0), String.fromCharCode(114,101,109,97,112,112,101,100,95,113,95,57,56,0), String.fromCharCode(99,111,108,108,101,99,116,95,98,95,50,57,0)];
          let clubH: Map<any, any> = new Map([[String.fromCharCode(112,95,56,57,95,100,105,115,116,0),654], [String.fromCharCode(111,110,103,111,105,110,103,95,104,95,50,56,0),428]]);
          let internetS = 4;
         slidero.set(`${subsi}`, subsi ^ screen2.size);
         screen2 = new Map([[`${eventK.length}`, 1 % (Math.max(5, internetS))]]);
         eventK = [clubH.size >> (Math.min(eventK.length, 5))];
         clubH.set(`${internetS}`, eventK.length);
         if (dark8) {
            break;
         }
      } while ((2 > (2 << (Math.min(2, Math.abs(filterq))))) && dark8);
         slidero.set(`${filterq}`, 1);
         filterq %= Math.max(subsi, 1);
      let volume4 = 9148736 >= subsi;
      do {
         subsi >>= Math.min(4, Math.abs(1));
         if (volume4) {
            break;
         }
      } while ((!Array.from(slidero.values()).includes(subsi)) && volume4);
      let arrowa = 5702979 <= filterq;
      do {
          let privacy8 = String.fromCharCode(97,109,101,114,97,95,114,95,57,0);
          let l_positionQ: Array<any> = [519, 794];
          let modelT = String.fromCharCode(121,95,56,49,95,100,114,97,119,97,98,108,101,0);
         filterq <<= Math.min(Math.abs((String.fromCharCode(72,0) == privacy8 ? slidero.size : privacy8.length)), 1);
         l_positionQ.push((String.fromCharCode(119,0) == modelT ? modelT.length : l_positionQ.length));
         if (arrowa) {
            break;
         }
      } while (arrowa && (4 < (4 & filterq) || (slidero.size & 4) < 4));
      default_jh = new Map([[`${filterq}`, 1]]);
      break;
   }
   let controls6 = backwardO.length >= 9001901;
   do {
      backwardO += `${((gemfileJ ? 4 : 3))}`;
      if (controls6) {
         break;
      }
   } while ((topico == String.fromCharCode(77,0)) && controls6);
       let private_mk = 1.0;
       let slider5: Array<any> = [743, 195, 769];
         private_mk -= parseFloat(`${3}`);
         slider5.push(slider5.length);
         private_mk += parseFloat(`${slider5.length ^ parseInt(`${private_mk}`)}`);
      for (let u = 0; u < 1; u++) {
         slider5.push(parseInt(`${private_mk}`) & 2);
      }
         private_mk += parseFloat(`${slider5.length << (Math.min(1, Math.abs(parseInt(`${private_mk}`))))}`);
         slider5 = [2];
      mini8 = `${((gemfileJ ? 3 : 3) | 3)}`;
      default_jh = new Map([[mini8, ((gemfileJ ? 5 : 2) - 2)]]);
   while (kickp.length <= 1) {
      kickp += `${backwardO.length}`;
      break;
   }
       let schedule9 = 2;
       let listA: Array<any> = [316, 117, 623];
       let matchN: Map<any, any> = new Map([[String.fromCharCode(115,95,53,50,95,112,99,98,105,110,102,111,0),487], [String.fromCharCode(105,95,56,55,95,105,115,110,111,110,122,101,114,111,0),78]]);
      let tempW = 8723770 >= matchN.size;
      do {
          let anythinkJ = true;
          let liveE = String.fromCharCode(107,95,54,57,95,117,110,105,120,0);
         matchN = new Map([[`${listA.length}`, (listA.length % (Math.max(5, (anythinkJ ? 5 : 1))))]]);
         anythinkJ = liveE.length > liveE.length;
         if (tempW) {
            break;
         }
      } while ((4 > (listA.length & 4)) && tempW);
      while (1 <= (3 + matchN.size) || (schedule9 + matchN.size) <= 3) {
          let custom6 = String.fromCharCode(99,95,52,50,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0);
          let i_view7 = 5.0;
         matchN = new Map([[custom6, parseInt(`${i_view7}`) / (Math.max(2, 1))]]);
         break;
      }
         matchN = new Map([[`${listA.length}`, 1]]);
      let leftG = listA.length <= 5235726;
      do {
         listA = [2 + matchN.size];
         if (leftG) {
            break;
         }
      } while ((3 > (4 * matchN.size) && (listA.length * 4) > 2) && leftG);
          let trophyl: Array<any> = [890, 222, 493];
         listA = [1 >> (Math.min(2, Math.abs(schedule9)))];
         trophyl = [trophyl.length];
      let modelo = 8889146 >= listA.length;
      do {
          let mapping9: Map<any, any> = new Map([[String.fromCharCode(113,95,53,51,95,100,101,115,116,114,117,99,116,111,114,0),175], [String.fromCharCode(116,95,55,52,95,115,112,111,110,115,111,114,101,100,0),320]]);
          let hejia = false;
         listA.push(schedule9 ^ listA.length);
         mapping9 = new Map([[`${mapping9.size}`, ((hejia ? 1 : 2) >> (Math.min(Math.abs(1), 5)))]]);
         hejia = mapping9.get(`${hejia}`) != null;
         if (modelo) {
            break;
         }
      } while (modelo && (listA.includes(schedule9)));
      while (4 <= (schedule9 & 2) && 4 <= (matchN.size & 2)) {
         schedule9 <<= Math.min(2, listA.length);
         break;
      }
          let filled3: Map<any, any> = new Map([[String.fromCharCode(115,95,55,48,95,112,114,101,108,111,97,100,0),String.fromCharCode(98,95,49,57,95,115,97,109,112,108,101,115,0)], [String.fromCharCode(107,95,56,57,95,111,112,99,111,100,101,115,0),String.fromCharCode(112,95,56,57,95,97,115,99,0)]]);
          let hongkongz = false;
          let volumeI = true;
         listA = [3];
         filled3 = new Map([[`${hongkongz}`, ((volumeI ? 2 : 3) | 2)]]);
         volumeI = filled3.size < 10;
      for (let l = 0; l < 2; l++) {
         matchN = new Map([[`${matchN.size}`, matchN.size + listA.length]]);
      }
      default_jh = new Map([[`${guideL}`, guideL]]);
   for (let t = 0; t < 1; t++) {
      gemfileJ = backwardO.startsWith(`${eighteenW}`);
   }
   let downK = backwardO == String.fromCharCode(107,95,116,101,48,122,52,108,100,0);
   do {
       let contexty: Map<any, any> = new Map([[String.fromCharCode(102,97,115,116,116,101,115,116,95,54,95,56,56,0),630], [String.fromCharCode(111,95,55,49,95,109,97,105,108,99,104,105,109,112,0),860], [String.fromCharCode(100,101,115,99,114,95,121,95,50,55,0),445]]);
         contexty = new Map([[`${contexty.size}`, contexty.size & contexty.size]]);
      while (3 >= contexty.size) {
          let halfc = 5;
          let gesturesh: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,115,101,97,114,99,104,95,48,95,52,52,0),83], [String.fromCharCode(103,95,56,57,95,99,104,101,99,107,0),480], [String.fromCharCode(102,101,119,95,121,95,51,54,0),243]]);
          let fastforward7: Map<any, any> = new Map([[String.fromCharCode(106,95,53,56,95,99,111,110,100,105,116,105,111,110,97,108,0),914], [String.fromCharCode(115,116,101,112,112,101,100,95,103,95,55,56,0),144]]);
         contexty = new Map([[`${fastforward7.size}`, 3]]);
         halfc ^= gesturesh.size;
         gesturesh = new Map([[`${gesturesh.size}`, halfc % 2]]);
         fastforward7 = new Map([[`${gesturesh.size}`, gesturesh.size]]);
         break;
      }
      if (contexty.size > 5) {
          let main_r1 = 5;
          let heartV = 5.0;
         contexty.set(`${main_r1}`, main_r1 * contexty.size);
         heartV *= parseInt(`${heartV}`);
      }
      backwardO = `${guideL}`;
      if (downK) {
         break;
      }
   } while ((kickp.length == 3 || 3 == backwardO.length) && downK);
   while (countryH.length == 2) {
      countryH.push(default_jh.size % 3);
      break;
   }
      topico = `${(3 >> (Math.min(3, Math.abs((gemfileJ ? 3 : 1)))))}`;
   for (let u = 0; u < 2; u++) {
       let reducerL = String.fromCharCode(119,100,108,102,99,110,95,52,95,55,48,0);
       let suggestionc = true;
       let flyer4 = 3;
       let page5 = String.fromCharCode(114,101,119,114,105,116,101,95,112,95,56,50,0);
         reducerL += `${3 << (Math.min(5, page5.length))}`;
         flyer4 &= flyer4;
         reducerL += `${flyer4 - 3}`;
      if (suggestionc && 3 <= reducerL.length) {
          let albumQ = String.fromCharCode(106,95,51,55,95,105,100,101,110,116,105,102,121,0);
          let fills: Array<any> = [565, 646, 50];
          let w_counto = true;
          let thailandc: Array<any> = [713, 769, 824];
          let stringW = 1.0;
         suggestionc = (albumQ.length << (Math.min(5, fills.length))) >= 97;
         albumQ = `${(thailandc.length % (Math.max(7, (w_counto ? 4 : 5))))}`;
         fills.push(parseInt(`${stringW}`) ^ 1);
         w_counto = 98 >= thailandc.length;
         stringW -= parseInt(`${stringW}`) % 3;
      }
         flyer4 >>= Math.min(4, Math.abs((page5 == String.fromCharCode(74,0) ? page5.length : (suggestionc ? 4 : 4))));
         reducerL = `${flyer4}`;
         flyer4 >>= Math.min(Math.abs(1 ^ page5.length), 1);
       let overy = String.fromCharCode(115,95,52,53,95,112,104,114,97,115,101,0);
       let video9 = String.fromCharCode(100,95,55,95,106,117,115,116,105,102,121,0);
      let reportO = String.fromCharCode(121,56,57,57,113,0) == overy;
      do {
         overy = `${(String.fromCharCode(99,0) == page5 ? reducerL.length : page5.length)}`;
         if (reportO) {
            break;
         }
      } while (reportO && (overy.includes(`${video9.length}`)));
         overy += `${overy.length}`;
      let networkC = suggestionc ? !suggestionc : suggestionc;
      do {
         suggestionc = overy == reducerL;
         if (networkC) {
            break;
         }
      } while (networkC && (video9.includes(`${suggestionc}`)));
         overy = "3";
      default_jh.set(page5, page5.length / 1);
   }
   while (guideL == 3) {
      guideL += topico.length | mini8.length;
      break;
   }
       let progressf = String.fromCharCode(117,95,51,51,95,116,97,98,108,101,0);
         progressf += "2";
       let eactq = 2.0;
      for (let b = 0; b < 2; b++) {
          let type_d7o = 0.0;
          let sortO: Map<any, any> = new Map([[String.fromCharCode(115,95,50,55,95,115,99,97,110,105,110,100,101,120,0),125], [String.fromCharCode(120,95,54,53,95,118,101,114,105,102,105,101,114,0),367], [String.fromCharCode(108,95,51,55,95,114,101,99,118,102,114,111,109,0),187]]);
         progressf = `${(String.fromCharCode(112,0) == progressf ? progressf.length : sortO.size)}`;
         type_d7o /= Math.max(3, parseInt(`${type_d7o}`) + parseInt(`${type_d7o}`));
         sortO = new Map([[`${type_d7o}`, parseInt(`${type_d7o}`) + parseInt(`${type_d7o}`)]]);
      }
      eighteenW /= Math.max((parseFloat(`${(gemfileJ ? 1 : 3)}`)), 5);
       let logino: Array<any> = [903, 658, 379];
         logino.push(2);
         logino = [2 | logino.length];
      let star_ = 8029292 >= logino.length;
      do {
         logino.push(logino.length);
         if (star_) {
            break;
         }
      } while (star_ && (1 == logino.length));
      kickp = `${topico.length}`;
   if (1 < (backwardO.length + 3) || (guideL + 3) < 1) {
       let popup4: Array<any> = [257, 380];
       let indicatord = 1.0;
       let downl: Array<any> = [855, 267, 520];
       let macauR: Array<any> = [466, 375];
          let shareP = String.fromCharCode(100,95,53,53,95,98,111,116,0);
         indicatord -= parseFloat(`${popup4.length | shareP.length}`);
       let constantsu: Map<any, any> = new Map([[String.fromCharCode(110,95,50,48,95,114,101,102,105,108,108,0),970], [String.fromCharCode(112,111,115,116,112,111,110,101,95,100,95,54,48,0),20], [String.fromCharCode(120,95,51,54,95,99,117,109,101,0),913]]);
       let usernamet: Map<any, any> = new Map([[String.fromCharCode(99,95,52,55,95,119,105,110,100,111,119,0),360], [String.fromCharCode(115,95,57,50,95,107,105,108,108,0),980]]);
         constantsu = new Map([[`${usernamet.size}`, macauR.length / 2]]);
      if (popup4.length <= 2) {
         popup4.push(1 - downl.length);
      }
      if (downl.length > macauR.length) {
         downl = [macauR.length];
      }
      if (constantsu.get(`${indicatord}`) != null) {
         constantsu.set(`${macauR.length}`, 3);
      }
          let const_wdk = String.fromCharCode(115,95,53,54,95,99,97,114,100,115,0);
         macauR.push(3 | usernamet.size);
         const_wdk = `${const_wdk.length / 3}`;
       let ewardedR = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,55,95,54,49,0);
       let s_count0 = String.fromCharCode(110,95,49,56,95,97,119,97,105,116,0);
      if (4 < (constantsu.size % (Math.max(3, 9))) || 2.5 < (parseFloat(`${constantsu.size}`) + indicatord)) {
         constantsu = new Map([[`${constantsu.size}`, usernamet.size ^ constantsu.size]]);
      }
          let moon_: Array<any> = [String.fromCharCode(106,95,49,53,95,108,105,118,101,109,111,100,101,0), String.fromCharCode(107,95,51,53,95,103,101,111,103,114,97,112,104,105,99,97,108,0)];
          let configurek = String.fromCharCode(98,117,108,108,101,116,115,95,51,95,55,50,0);
         ewardedR = `${parseInt(`${indicatord}`)}`;
         moon_.push(moon_.length);
         configurek = `${configurek.length << (Math.min(Math.abs(1), 5))}`;
          let configv = String.fromCharCode(117,110,112,97,100,100,101,100,95,111,95,52,57,0);
          let infoo = 5.0;
          let combine3 = 1;
         indicatord += parseFloat(`${combine3 % (Math.max(4, parseInt(`${infoo}`)))}`);
         configv += `${configv.length}`;
         infoo -= parseFloat(`${configv.length ^ 1}`);
      let pointE = 8949190.0 >= indicatord;
      do {
         indicatord += parseFloat(`${parseInt(`${indicatord}`)}`);
         if (pointE) {
            break;
         }
      } while ((5.14 >= (4.84 / (Math.max(10, indicatord))) || 3.69 >= (indicatord / (Math.max(4.84, 3)))) && pointE);
      guideL ^= malaysiaH.length;
   }

    dispatch(showLoginAction());
  }

  const onPressAds = () => {
       let mathn = String.fromCharCode(101,95,52,48,95,112,117,115,104,0);
    let hoverb = String.fromCharCode(112,95,50,56,95,105,100,115,117,98,116,121,112,101,0);
    let chatb = 0.0;
    let currentd = String.fromCharCode(97,95,55,95,97,118,115,117,98,116,105,116,108,101,0);
    let telegramc = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,103,95,49,48,0);
    let overlay_: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,101,119,101,100,95,54,95,51,53,0),893], [String.fromCharCode(105,95,51,51,95,104,111,115,116,115,0),541], [String.fromCharCode(112,95,50,52,95,116,114,97,110,115,112,111,115,101,120,0),222]]);
    let dragR = 2;
    let infob = 3;
    let large4 = 4;
    let tickedx = 1.0;
    let suggestionv: Array<any> = [675, 481];
    let plashA = String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,101,95,51,0);
      overlay_.set(`${chatb}`, parseInt(`${tickedx}`) * parseInt(`${chatb}`));
      tickedx -= suggestionv.length;
   if (3 == currentd.length) {
       let ying0 = String.fromCharCode(103,95,57,50,95,105,110,116,101,114,110,101,100,0);
       let placeholdere = 4.0;
       let chartc = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,120,95,52,56,0);
       let downR = String.fromCharCode(112,95,52,55,95,101,120,116,114,97,0);
       let mutedg = String.fromCharCode(117,110,112,111,105,115,111,110,95,51,95,53,51,0);
         chartc = `${ying0.length & 2}`;
      if (!downR.endsWith(`${placeholdere}`)) {
         placeholdere *= ying0.length;
      }
         ying0 = "2";
      for (let j = 0; j < 3; j++) {
          let floatingU = String.fromCharCode(113,95,56,48,95,107,101,121,108,101,110,0);
          let backF = 1.0;
          let model4 = 2.0;
          let auto_3_: Array<any> = [575, 371];
         mutedg = "2";
         floatingU = `${floatingU.length}`;
         backF /= Math.max(floatingU.length, 3);
         model4 *= parseInt(`${backF}`);
         auto_3_ = [1 & parseInt(`${backF}`)];
      }
       let shrink_: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,101,120,116,95,101,95,52,48,0),190], [String.fromCharCode(108,111,99,97,116,105,111,110,95,48,95,52,54,0),121], [String.fromCharCode(99,111,112,116,115,95,51,95,52,57,0),849]]);
       let penaltyi: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,95,120,95,51,55,0),true ], [String.fromCharCode(100,111,99,117,109,101,110,116,95,99,95,55,54,0),false ], [String.fromCharCode(110,97,118,105,103,97,116,105,110,103,95,111,95,57,57,0),false ]]);
          let changeL = 0;
          let mutedi = false;
         placeholdere *= 1;
         changeL |= changeL / (Math.max(4, changeL));
         mutedi = 31 <= changeL;
       let modalK = String.fromCharCode(120,116,101,97,95,119,95,54,57,0);
       let iconD = String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,52,95,55,53,0);
      if (modalK.length >= 3) {
         modalK += `${iconD.length}`;
      }
      let interstitialJ = ying0.length >= 9049230;
      do {
         ying0 += `${ying0.length | 1}`;
         if (interstitialJ) {
            break;
         }
      } while (interstitialJ && (iconD.length < ying0.length));
      while (5 <= (downR.length ^ 1) || (downR.length ^ shrink_.size) <= 1) {
         downR += `${mutedg.length / (Math.max(iconD.length, 5))}`;
         break;
      }
      if (iconD.length == 4 && modalK == String.fromCharCode(76,0)) {
          let optionsn = String.fromCharCode(102,95,56,57,95,114,101,112,114,101,115,101,110,116,115,0);
         modalK = `${1 - optionsn.length}`;
      }
      let private_8d = downR.length >= 5520282;
      do {
          let launch8 = String.fromCharCode(115,101,116,116,101,114,95,105,95,56,57,0);
          let models1 = 4.0;
          let sportsw = 2.0;
          let tailg = 3;
         downR += "2";
         launch8 += `${launch8.length << (Math.min(Math.abs(1), 2))}`;
         models1 -= parseInt(`${models1}`) << (Math.min(3, Math.abs(2)));
         sportsw -= parseFloat(`${parseInt(`${models1}`) | launch8.length}`);
         tailg -= 1;
         if (private_8d) {
            break;
         }
      } while (private_8d && ((downR.length >> (Math.min(5, Math.abs(penaltyi.size)))) >= 5 && (5 >> (Math.min(4, Math.abs(penaltyi.size)))) >= 2));
      let typingu = downR == String.fromCharCode(107,97,116,102,99,114,121,56,0);
      do {
         downR = `${chartc.length}`;
         if (typingu) {
            break;
         }
      } while (typingu && ((1 % (Math.max(6, penaltyi.size))) > 2 || (penaltyi.size % (Math.max(9, downR.length))) > 1));
         iconD += `${chartc.length | penaltyi.size}`;
       let window_hn6: Array<any> = [958, 30];
      telegramc = `${parseInt(`${placeholdere}`)}`;
   }
   while (Array.from(overlay_.values()).includes(infob)) {
       let vignetteL = 1.0;
       let downloadt = 2;
       let optionse = 5;
       let moonV = 3.0;
      for (let f = 0; f < 2; f++) {
         moonV *= parseFloat(`${downloadt - optionse}`);
      }
          let minimizeM: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,103,95,54,50,0),String.fromCharCode(106,95,52,95,98,97,99,107,103,114,117,110,100,0)], [String.fromCharCode(101,95,49,48,95,112,114,101,117,112,108,111,97,100,0),String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,53,95,51,52,0)], [String.fromCharCode(120,106,112,101,103,95,57,95,50,51,0),String.fromCharCode(113,95,53,50,95,97,117,116,104,111,114,105,122,97,116,105,111,110,0)]]);
          let userV = 4;
          let lessg: Array<any> = [849, 698, 422];
         downloadt &= 3 << (Math.min(3, Math.abs(parseInt(`${vignetteL}`))));
         minimizeM = new Map([[`${minimizeM.size}`, minimizeM.size | 3]]);
         userV >>= Math.min(5, Math.abs(userV & 2));
         lessg.push(3 >> (Math.min(5, lessg.length)));
      for (let b = 0; b < 3; b++) {
         vignetteL /= Math.max(parseFloat(`${parseInt(`${vignetteL}`)}`), 4);
      }
         downloadt |= 1 >> (Math.min(1, Math.abs(downloadt)));
      if (optionse <= 2) {
          let nterstitialE = String.fromCharCode(103,95,53,95,115,111,117,114,99,101,99,108,105,112,0);
          let lineF: Map<any, any> = new Map([[String.fromCharCode(108,95,55,53,95,114,101,103,105,115,116,101,114,102,100,115,0),true ], [String.fromCharCode(106,118,101,114,115,105,111,110,95,113,95,56,53,0),false ], [String.fromCharCode(120,95,54,53,95,97,110,110,111,116,97,116,105,111,110,115,0),true ]]);
          let productA: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,101,95,99,95,55,0),911], [String.fromCharCode(114,111,103,114,101,115,115,95,97,95,52,52,0),648]]);
          let chatH = 5.0;
         optionse |= optionse;
         nterstitialE = `${productA.size}`;
         lineF.set(nterstitialE, (String.fromCharCode(67,0) == nterstitialE ? nterstitialE.length : lineF.size));
         productA.set(`${chatH}`, parseInt(`${chatH}`));
      }
      let rightt = moonV <= 5014064.0;
      do {
          let bingp: Array<any> = [704, 230];
          let signinupR: Map<any, any> = new Map([[String.fromCharCode(105,111,115,95,111,95,50,55,0),528], [String.fromCharCode(97,95,54,51,95,108,115,112,112,111,108,121,102,0),370], [String.fromCharCode(97,95,57,51,95,110,111,99,97,115,101,0),181]]);
          let type_ew = true;
         moonV /= Math.max((parseFloat(`${1 & (type_ew ? 2 : 2)}`)), 1);
         bingp.push(bingp.length);
         signinupR.set(`${bingp.length}`, bingp.length);
         type_ew = bingp.length >= 35;
         if (rightt) {
            break;
         }
      } while ((vignetteL == 2.14) && rightt);
         downloadt &= parseInt(`${moonV}`) - 3;
         downloadt ^= 2;
      if (optionse <= 4) {
         downloadt %= Math.max(parseInt(`${vignetteL}`), 5);
      }
       let main_xK = String.fromCharCode(112,95,54,50,95,101,120,112,108,105,99,105,116,101,108,121,0);
       let unread5 = String.fromCharCode(97,98,111,118,101,95,106,95,52,50,0);
          let alertU: Array<any> = [String.fromCharCode(119,95,57,57,95,97,100,115,97,114,109,97,115,109,0), String.fromCharCode(115,116,101,112,112,101,100,95,120,95,57,54,0), String.fromCharCode(100,117,114,103,101,114,95,119,95,54,52,0)];
         unread5 = `${1 + parseInt(`${vignetteL}`)}`;
         alertU.push(1);
      if (downloadt > moonV) {
         moonV -= parseFloat(`${1}`);
      }
      overlay_.set(`${telegramc}`, overlay_.size / (Math.max(telegramc.length, 4)));
      break;
   }
      telegramc = `${hoverb.length >> (Math.min(Math.abs(3), 5))}`;
      infob *= 2;
      large4 ^= parseInt(`${tickedx}`) / (Math.max(suggestionv.length, 6));
       let rules9: Map<any, any> = new Map([[String.fromCharCode(98,95,57,50,95,113,115,118,118,112,112,0),731], [String.fromCharCode(107,95,54,50,95,115,101,110,115,111,114,0),160], [String.fromCharCode(121,95,51,95,115,104,111,114,116,99,117,116,0),341]]);
       let otherM = 1.0;
          let volumeU = 5.0;
         otherM -= 3 & parseInt(`${volumeU}`);
          let regengm = 2;
         otherM += parseInt(`${otherM}`) % 1;
         regengm -= regengm % (Math.max(2, 1));
         otherM -= rules9.size;
      if ((otherM - 3.53) == 2.67) {
         rules9 = new Map([[`${rules9.size}`, 3 >> (Math.min(5, Math.abs(parseInt(`${otherM}`))))]]);
      }
          let langkeyK = String.fromCharCode(114,95,51,95,99,114,111,108,108,0);
          let editt = String.fromCharCode(122,95,55,55,95,109,97,116,104,0);
         otherM *= 1 * parseInt(`${otherM}`);
         langkeyK += `${editt.length * 1}`;
         editt += `${editt.length}`;
      while (!Array.from(rules9.values()).includes(otherM)) {
          let h_playerv = String.fromCharCode(99,98,112,104,105,95,114,95,55,48,0);
          let d_viewn = 4;
          let appsn: Map<any, any> = new Map([[String.fromCharCode(110,95,54,52,95,114,101,112,97,105,110,116,0),false ], [String.fromCharCode(100,95,57,95,120,105,110,99,0),false ]]);
         otherM += 1 + parseInt(`${otherM}`);
         h_playerv += `${appsn.size}`;
         d_viewn *= 2 ^ d_viewn;
         appsn = new Map([[`${appsn.size}`, h_playerv.length]]);
         break;
      }
      tickedx /= Math.max(4, large4);
       let volume2: Map<any, any> = new Map([[String.fromCharCode(98,101,103,105,110,110,105,110,103,95,118,95,51,54,0),String.fromCharCode(116,114,101,101,99,111,100,101,114,95,52,95,55,52,0)], [String.fromCharCode(99,111,109,109,117,116,101,95,56,95,57,48,0),String.fromCharCode(121,95,56,95,119,101,98,109,0)]]);
          let animationN = 0.0;
         volume2.set(`${animationN}`, 2);
         volume2.set(`${volume2.size}`, 3 * volume2.size);
         volume2 = new Map([[`${volume2.size}`, 1]]);
      hoverb = `${parseInt(`${tickedx}`) >> (Math.min(5, Math.abs(1)))}`;
   for (let d = 0; d < 1; d++) {
      currentd += `${2 << (Math.min(4, Math.abs(parseInt(`${chatb}`))))}`;
   }
      large4 <<= Math.min(Math.abs(dragR), 1);
       let questC = String.fromCharCode(120,99,104,97,99,104,97,95,103,95,51,48,0);
       let internety = 0.0;
      if (1 <= (parseInt(`${internety}`) * questC.length)) {
          let statsj: Map<any, any> = new Map([[String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,48,95,53,0),String.fromCharCode(103,101,116,108,97,100,100,114,115,95,106,95,52,0)], [String.fromCharCode(104,99,104,97,99,104,97,95,101,95,50,50,0),String.fromCharCode(97,95,53,56,95,108,101,102,116,109,111,115,116,0)]]);
          let descu = 1;
          let successJ = String.fromCharCode(99,95,50,54,95,100,111,108,98,121,0);
          let over4: Map<any, any> = new Map([[String.fromCharCode(98,95,50,49,95,114,101,118,97,108,105,100,97,116,101,100,0),String.fromCharCode(120,95,56,49,95,114,111,117,110,100,105,110,103,0)], [String.fromCharCode(112,97,114,115,101,95,119,95,49,55,0),String.fromCharCode(115,97,103,97,95,100,95,48,0)], [String.fromCharCode(112,108,97,110,95,107,95,54,53,0),String.fromCharCode(120,95,57,56,95,101,109,111,116,105,99,111,110,115,0)]]);
          let catagoryR = 2.0;
         internety /= Math.max(3, parseFloat(`${2 ^ over4.size}`));
         statsj.set(successJ, parseInt(`${catagoryR}`));
         descu /= Math.max(4, 1);
         successJ = `${(successJ == String.fromCharCode(86,0) ? successJ.length : descu)}`;
         over4 = new Map([[`${statsj.size}`, descu % 2]]);
         catagoryR += descu;
      }
         internety /= Math.max(1, parseFloat(`${questC.length ^ parseInt(`${internety}`)}`));
      let short__ch = internety <= 9610969.0;
      do {
          let rankK = 4.0;
          let langkey_ = String.fromCharCode(109,95,56,53,95,104,117,101,115,0);
         internety -= (parseFloat(`${String.fromCharCode(100,0) == questC ? questC.length : langkey_.length}`));
         rankK -= parseFloat(`${parseInt(`${rankK}`)}`);
         langkey_ += `${parseInt(`${rankK}`) & 3}`;
         if (short__ch) {
            break;
         }
      } while ((2.94 >= (internety / (Math.max(1, parseFloat(`${questC.length}`)))) || 1 >= (parseInt(`${internety}`) / (Math.max(8, questC.length)))) && short__ch);
      for (let v = 0; v < 3; v++) {
         internety *= parseFloat(`${parseInt(`${internety}`)}`);
      }
         internety /= Math.max(4, parseFloat(`${parseInt(`${internety}`)}`));
      for (let l = 0; l < 1; l++) {
          let borderlessk = String.fromCharCode(109,111,110,107,101,121,115,97,117,100,105,111,95,119,95,56,57,0);
          let kickU = 3;
          let whatsapp5: Array<any> = [135, 838, 157];
         internety *= (parseFloat(`${borderlessk == String.fromCharCode(53,0) ? parseInt(`${internety}`) : borderlessk.length}`));
         kickU |= 3;
         whatsapp5 = [whatsapp5.length];
      }
      telegramc += `${(String.fromCharCode(121,0) == questC ? parseInt(`${internety}`) : questC.length)}`;
   if (3 > (3 + infob)) {
      infob ^= parseInt(`${tickedx}`);
   }
       let foundd = String.fromCharCode(107,95,56,48,95,112,97,115,115,112,104,114,97,115,101,0);
       let middleware9: Array<any> = [549, 305];
       let renewf = 4.0;
      for (let x = 0; x < 1; x++) {
          let videoV: Map<any, any> = new Map([[String.fromCharCode(118,95,53,55,95,107,109,115,0),String.fromCharCode(103,95,55,57,95,109,97,105,110,110,101,116,0)], [String.fromCharCode(98,105,108,97,116,101,114,97,108,95,109,95,57,49,0),String.fromCharCode(99,95,55,55,95,99,111,109,112,117,116,101,0)]]);
          let styleh = String.fromCharCode(104,95,57,95,105,115,111,108,97,116,101,0);
         foundd = `${parseInt(`${renewf}`)}`;
         videoV.set(styleh, styleh.length);
      }
      for (let t = 0; t < 1; t++) {
          let topice = String.fromCharCode(120,95,57,56,95,121,117,118,116,101,115,116,0);
         middleware9.push(parseInt(`${renewf}`) * 3);
         topice += `${2 & topice.length}`;
      }
      let contexti = foundd == String.fromCharCode(118,116,118,49,53,114,57,52,117,0);
      do {
          let guider: Map<any, any> = new Map([[String.fromCharCode(116,95,49,50,95,97,118,105,97,108,97,98,108,101,0),String.fromCharCode(112,103,110,111,95,105,95,53,56,0)], [String.fromCharCode(97,117,120,100,97,116,97,95,109,95,55,55,0),String.fromCharCode(109,95,49,48,48,95,115,116,114,101,97,109,99,111,112,121,0)]]);
          let rulesd = 2;
          let nterstitialV = String.fromCharCode(108,95,49,48,95,106,114,101,118,100,99,116,0);
         foundd = `${(nterstitialV == String.fromCharCode(105,0) ? rulesd : nterstitialV.length)}`;
         guider.set(`${guider.size}`, guider.size % (Math.max(3, guider.size)));
         rulesd += 2;
         if (contexti) {
            break;
         }
      } while (contexti && ((foundd.length % 2) < 2 || (middleware9.length % (Math.max(foundd.length, 3))) < 2));
      for (let l = 0; l < 1; l++) {
         foundd += `${parseInt(`${renewf}`) | middleware9.length}`;
      }
         middleware9 = [1 * foundd.length];
          let middlewareP = 2;
          let sliderE = 2;
         renewf -= parseFloat(`${sliderE * parseInt(`${renewf}`)}`);
         middlewareP &= middlewareP;
         sliderE &= middlewareP - 3;
      let plash4 = renewf >= 4945167.0;
      do {
          let editP = String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,108,95,56,49,0);
          let dialogE = false;
          let sidea: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,117,116,101,115,95,114,95,57,55,0),686], [String.fromCharCode(98,116,110,99,108,105,99,107,95,48,95,53,54,0),961]]);
          let formK = 1.0;
          let playlistR = String.fromCharCode(97,114,114,97,121,115,95,105,95,49,56,0);
         renewf += parseFloat(`${3}`);
         editP += "1";
         dialogE = sidea.size > 49;
         sidea = new Map([[`${sidea.size}`, playlistR.length]]);
         formK += parseFloat(`${parseInt(`${formK}`) % (Math.max(sidea.size, 4))}`);
         playlistR = `${playlistR.length + editP.length}`;
         if (plash4) {
            break;
         }
      } while (plash4 && (foundd.endsWith(`${renewf}`)));
      while ((foundd.length % (Math.max(5, 8))) <= 4) {
         renewf *= parseFloat(`${parseInt(`${renewf}`) + foundd.length}`);
         break;
      }
         renewf -= parseFloat(`${foundd.length * middleware9.length}`);
      hoverb += `${infob}`;
      chatb *= 2 & parseInt(`${tickedx}`);
   if (large4 >= chatb) {
      large4 += suggestionv.length;
   }
   let sidej = 6165203 <= large4;
   do {
      large4 >>= Math.min(Math.abs(dragR), 3);
      if (sidej) {
         break;
      }
   } while (((2 ^ large4) >= 4 || (large4 ^ 2) >= 3) && sidej);
   if (hoverb.length > 3) {
       let resultT = String.fromCharCode(99,95,50,48,95,103,101,111,108,111,99,97,116,105,111,110,0);
       let nalyticsp = false;
       let gestureh = false;
       let left6 = String.fromCharCode(107,95,50,95,109,112,101,103,112,115,0);
       let componentx = 3.0;
      for (let n = 0; n < 3; n++) {
         componentx += (parseFloat(`${(nalyticsp ? 1 : 1)}`));
      }
       let configb = 3;
       let tempF: Map<any, any> = new Map([[String.fromCharCode(109,105,115,109,97,116,99,104,95,113,95,50,57,0),false ], [String.fromCharCode(112,95,51,52,95,114,105,102,102,0),true ], [String.fromCharCode(115,105,103,110,105,110,103,95,99,95,51,51,0),true ]]);
       let fastT: Map<any, any> = new Map([[String.fromCharCode(105,100,101,97,108,95,109,95,51,0),true ], [String.fromCharCode(115,95,55,52,95,108,101,118,101,108,0),false ]]);
         configb &= configb;
         left6 = `${(parseInt(`${componentx}`) + (nalyticsp ? 1 : 2))}`;
      for (let i = 0; i < 3; i++) {
         fastT.set(`${configb}`, ((nalyticsp ? 4 : 2) ^ configb));
      }
      while (1 >= (1 * configb)) {
         fastT = new Map([[`${nalyticsp}`, (left6 == String.fromCharCode(68,0) ? left6.length : (nalyticsp ? 4 : 5))]]);
         break;
      }
      while (!resultT.includes(`${tempF.size}`)) {
          let hejiD = String.fromCharCode(105,95,50,53,95,109,101,116,104,111,100,0);
          let current_ = String.fromCharCode(114,101,111,114,100,101,114,95,52,95,53,48,0);
         resultT = `${tempF.size}`;
         hejiD += `${(current_ == String.fromCharCode(117,0) ? hejiD.length : current_.length)}`;
         break;
      }
      while (componentx < 2.63) {
         nalyticsp = fastT.size < 37 && 37 < left6.length;
         break;
      }
       let becomeD = String.fromCharCode(115,95,56,56,95,115,104,105,109,109,101,114,0);
       let frame_tpl = String.fromCharCode(102,95,54,51,95,98,101,104,97,118,105,111,117,114,0);
      for (let u = 0; u < 1; u++) {
         nalyticsp = fastT.size > 87;
      }
         tempF.set(`${gestureh}`, 2);
          let sansO: Map<any, any> = new Map([[String.fromCharCode(115,95,53,48,95,120,120,104,97,115,104,0),String.fromCharCode(122,101,114,111,118,95,109,95,53,54,0)], [String.fromCharCode(112,114,105,109,105,116,105,118,101,95,115,95,50,49,0),String.fromCharCode(115,119,97,112,112,97,98,108,101,95,118,95,55,55,0)]]);
         gestureh = (componentx - parseFloat(`${left6.length}`)) >= 57.4;
         sansO.set(`${sansO.size}`, sansO.size ^ sansO.size);
         fastT.set(`${fastT.size}`, tempF.size ^ 1);
         fastT.set(becomeD, fastT.size);
      mathn += `${mathn.length}`;
   }
       let firebaseQ = 5.0;
       let configure4 = 5.0;
       let selected2: Array<any> = [String.fromCharCode(114,95,57,56,95,115,116,111,119,0), String.fromCharCode(104,95,50,53,95,97,103,103,114,101,103,97,116,101,0)];
          let clearN = String.fromCharCode(115,95,56,54,95,114,101,97,108,108,111,99,112,0);
          let modelsh: Array<any> = [301, 558, 152];
         firebaseQ -= parseFloat(`${modelsh.length / (Math.max(clearN.length, 5))}`);
      let zhubom = 9508717 >= selected2.length;
      do {
          let statisticsd = String.fromCharCode(122,95,52,52,95,108,97,114,112,111,108,121,0);
         selected2 = [statisticsd.length];
         if (zhubom) {
            break;
         }
      } while ((4 == (parseInt(`${configure4}`) / (Math.max(selected2.length, 2))) || 3 == (selected2.length + 4)) && zhubom);
      if ((selected2.length / 2) < 4 && (configure4 * selected2.length) < 3.14) {
         selected2.push(1);
      }
      for (let o = 0; o < 2; o++) {
         configure4 /= Math.max(2, 5);
      }
         firebaseQ -= parseFloat(`${selected2.length}`);
         configure4 /= Math.max(parseInt(`${firebaseQ}`) * 1, 1);
         configure4 += parseInt(`${firebaseQ}`);
         configure4 -= selected2.length;
         configure4 /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${firebaseQ}`)), 4)), 4);
      overlay_.set(`${firebaseQ}`, suggestionv.length % 3);
   while (mathn.startsWith(`${chatb}`)) {
      mathn += `${parseInt(`${chatb}`)}`;
      break;
   }
       let next1 = String.fromCharCode(102,95,56,55,95,119,101,108,108,0);
         next1 += `${next1.length}`;
          let miniG = 1.0;
          let clocki: Array<any> = [43, 994, 888];
          let middlewareE = String.fromCharCode(113,95,49,55,95,97,115,115,111,99,105,97,116,105,111,110,115,0);
         next1 = `${clocki.length}`;
         miniG -= parseFloat(`${middlewareE.length % (Math.max(10, parseInt(`${miniG}`)))}`);
         clocki.push(middlewareE.length % (Math.max(2, 1)));
         next1 += `${next1.length}`;
      dragR /= Math.max(1, infob);
   while ((2 & hoverb.length) <= 2) {
      hoverb = `${suggestionv.length}`;
      break;
   }
       let selectionB = 5.0;
       let nextF = String.fromCharCode(105,95,54,55,95,102,117,108,102,105,108,108,101,100,0);
         nextF += `${nextF.length}`;
      if ((3.30 * selectionB) < 4.32) {
         nextF = `${parseInt(`${selectionB}`)}`;
      }
      while ((2 - nextF.length) == 4) {
         nextF += `${parseInt(`${selectionB}`)}`;
         break;
      }
      while ((5 >> (Math.min(2, nextF.length))) <= 3) {
          let containerA = 2.0;
          let entrys: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,113,112,105,115,0),true ], [String.fromCharCode(118,95,49,95,100,101,99,111,109,112,114,101,115,115,0),true ]]);
          let faviconG = 1;
          let minip = 5.0;
          let iconI = String.fromCharCode(108,95,49,57,95,107,98,112,115,0);
         selectionB += parseFloat(`${parseInt(`${containerA}`) % (Math.max(nextF.length, 4))}`);
         containerA /= Math.max(parseFloat(`${iconI.length * entrys.size}`), 4);
         entrys = new Map([[`${entrys.size}`, parseInt(`${minip}`) >> (Math.min(Math.abs(entrys.size), 5))]]);
         faviconG *= parseInt(`${minip}`);
         iconI += `${parseInt(`${minip}`) / (Math.max(3, 8))}`;
         break;
      }
         selectionB -= parseFloat(`${nextF.length}`);
          let tickedX = 3.0;
          let anner7 = 0.0;
         selectionB -= parseFloat(`${3 * nextF.length}`);
         tickedX += parseFloat(`${parseInt(`${anner7}`)}`);
      currentd = `${dragR}`;
   for (let n = 0; n < 2; n++) {
       let splashY = 1;
          let overC = String.fromCharCode(97,95,57,55,95,105,100,115,0);
          let episodesZ = 5;
         splashY >>= Math.min(Math.abs(episodesZ), 5);
         overC = `${1 - overC.length}`;
         episodesZ += 3;
       let matchesd = String.fromCharCode(116,105,108,101,100,95,110,95,52,48,0);
      let data5 = matchesd == String.fromCharCode(97,104,103,52,115,50,106,0);
      do {
         matchesd = "2";
         if (data5) {
            break;
         }
      } while (data5 && (!matchesd.endsWith(`${splashY}`)));
      large4 |= (telegramc == String.fromCharCode(81,0) ? telegramc.length : dragR);
   }
       let h_countF: Map<any, any> = new Map([[String.fromCharCode(100,114,97,103,95,118,95,55,50,0),String.fromCharCode(110,105,109,97,116,105,111,110,95,53,95,53,51,0)], [String.fromCharCode(97,95,52,56,95,116,117,114,98,111,106,112,101,103,0),String.fromCharCode(107,95,54,57,95,110,101,101,100,0)]]);
          let alerta = String.fromCharCode(97,99,114,111,110,121,109,95,52,95,51,53,0);
          let middlewareA = 3;
          let linkH = 1.0;
         h_countF.set(alerta, h_countF.size << (Math.min(alerta.length, 3)));
         middlewareA += parseInt(`${linkH}`);
         linkH -= parseFloat(`${2}`);
         h_countF.set(`${h_countF.size}`, 1 ^ h_countF.size);
      let dropdownL = h_countF.size >= 7414681;
      do {
         h_countF = new Map([[`${h_countF.size}`, h_countF.size]]);
         if (dropdownL) {
            break;
         }
      } while (dropdownL && ((h_countF.size % 3) >= 5 || (h_countF.size % (Math.max(1, h_countF.size))) >= 3));
      overlay_.set(`${infob}`, mathn.length);
   while (suggestionv.includes(tickedx)) {
       let analyticU = 4.0;
       let recommendationa = true;
       let transferD = 4.0;
       let logoY = 5.0;
      for (let d = 0; d < 1; d++) {
         recommendationa = transferD > 49.20;
      }
          let long_hzd = 3.0;
         analyticU += ((recommendationa ? 5 : 3) << (Math.min(Math.abs(parseInt(`${analyticU}`)), 4)));
         long_hzd += parseFloat(`${parseInt(`${long_hzd}`) | 2}`);
         recommendationa = 34.91 <= (logoY / (Math.max(analyticU, 4)));
         transferD += ((recommendationa ? 2 : 2) - parseInt(`${analyticU}`));
      let targetD = logoY >= 5464551.0;
      do {
         logoY += parseInt(`${transferD}`);
         if (targetD) {
            break;
         }
      } while (targetD && (5.22 >= (transferD - logoY) || 4.56 >= (5.22 - logoY)));
       let goal8 = 3.0;
       let temperature9 = 1.0;
          let tooltipsr = String.fromCharCode(116,95,55,57,95,115,101,97,0);
          let guide2 = String.fromCharCode(98,101,110,105,103,110,95,111,95,54,55,0);
         logoY *= guide2.length;
         tooltipsr += `${1 * tooltipsr.length}`;
         guide2 = `${3 | tooltipsr.length}`;
          let pressureu = String.fromCharCode(112,114,111,100,117,99,116,95,52,95,56,48,0);
          let fillI = 5.0;
         analyticU /= Math.max(parseInt(`${logoY}`), 3);
         pressureu = `${pressureu.length}`;
         fillI /= Math.max((pressureu == String.fromCharCode(74,0) ? parseInt(`${fillI}`) : pressureu.length), 2);
      let videop = 9285239.0 <= transferD;
      do {
          let flyerJ = 0;
          let spinnerG: Array<any> = [583, 644];
          let soundO = 3.0;
          let collection_ = false;
         transferD /= Math.max(2 | parseInt(`${transferD}`), 4);
         flyerJ >>= Math.min(2, Math.abs(2 - parseInt(`${soundO}`)));
         spinnerG = [flyerJ];
         soundO += (parseFloat(`${(collection_ ? 2 : 3) << (Math.min(spinnerG.length, 5))}`));
         collection_ = flyerJ >= parseInt(`${soundO}`);
         if (videop) {
            break;
         }
      } while (videop && (5.57 == (2.94 - transferD)));
      for (let v = 0; v < 2; v++) {
         analyticU += ((recommendationa ? 3 : 3) % (Math.max(7, parseInt(`${logoY}`))));
      }
      for (let w = 0; w < 3; w++) {
         analyticU *= (parseInt(`${transferD}`) | (recommendationa ? 2 : 3));
      }
      if (3.90 >= (logoY / 5.22) && (5.22 - logoY) >= 5.59) {
         logoY *= ((recommendationa ? 5 : 4) * parseInt(`${logoY}`));
      }
      suggestionv.push((currentd == String.fromCharCode(90,0) ? parseInt(`${tickedx}`) : currentd.length));
      break;
   }

    setShowAdOverlay(true);
  };

  const onCloseAdOverlay = () => {
       let banner0 = true;
    let footballl = String.fromCharCode(111,95,55,51,95,110,111,116,99,104,0);
    let controlv = 1;
    let membershipc: Array<any> = [474, 302];
    let shirtC = 3;
    let incidentY = true;
    let signinupY = String.fromCharCode(116,114,97,110,115,112,111,115,101,95,55,95,56,53,0);
    let vertical9 = true;
    let shirtt = true;
    let bcopy_go = true;
    let catagoryl = String.fromCharCode(122,95,54,51,95,109,105,114,114,111,114,105,110,103,0);
    let robotoC = 3.0;
    let update_opi: Map<any, any> = new Map([[String.fromCharCode(101,95,50,48,95,112,110,103,100,115,112,0),1000], [String.fromCharCode(99,111,100,101,95,103,95,56,55,0),922]]);
    let viewerI = 4.0;
    let umengP = 4.0;
    let carousel6: Array<any> = [460, 414];
    let trophy5 = String.fromCharCode(100,101,115,99,101,110,116,95,105,95,49,0);
      catagoryl += `${catagoryl.length | shirtC}`;
   if (5 < (membershipc.length ^ footballl.length) && (5 ^ footballl.length) < 3) {
      footballl += `${controlv % (Math.max(footballl.length, 2))}`;
   }
   for (let s = 0; s < 2; s++) {
      incidentY = shirtC == 72 || 72 == catagoryl.length;
   }
      bcopy_go = !signinupY.includes(`${bcopy_go}`);
      footballl = `${((incidentY ? 3 : 1) << (Math.min(Math.abs(1), 4)))}`;
       let incident2 = String.fromCharCode(104,105,115,116,111,103,114,97,109,95,121,95,57,57,0);
       let langi = 1.0;
       let sans7: Array<any> = [915, 903, 647];
         langi += sans7.length * incident2.length;
       let privacyT: Map<any, any> = new Map([[String.fromCharCode(105,95,56,57,95,108,111,116,116,105,101,0),457], [String.fromCharCode(119,105,101,110,101,114,95,122,95,52,53,0),582], [String.fromCharCode(101,110,116,105,114,101,108,121,95,114,95,52,57,0),71]]);
       let suggestionJ: Map<any, any> = new Map([[String.fromCharCode(121,117,118,121,117,118,95,119,95,50,54,0),String.fromCharCode(98,95,51,48,95,115,114,99,0)], [String.fromCharCode(119,101,97,107,95,57,95,55,0),String.fromCharCode(110,115,101,103,109,101,110,116,115,95,118,95,57,52,0)]]);
      let sortv = 5505125 <= sans7.length;
      do {
         sans7 = [parseInt(`${langi}`)];
         if (sortv) {
            break;
         }
      } while ((2 > (suggestionJ.size | sans7.length) || 1 > (2 | suggestionJ.size)) && sortv);
       let weibo3 = 2.0;
          let tempQ: Array<any> = [989, 214, 873];
          let reminderF: Array<any> = [959, 445];
          let dropdown_ = true;
         privacyT = new Map([[`${sans7.length}`, 1]]);
         tempQ = [tempQ.length];
         reminderF.push(1);
         dropdown_ = reminderF.length == 71;
      for (let c = 0; c < 1; c++) {
         suggestionJ = new Map([[incident2, 2 | parseInt(`${weibo3}`)]]);
      }
      if ((4 >> (Math.min(4, sans7.length))) == 5 || 4 == (4 >> (Math.min(4, Math.abs(privacyT.size))))) {
          let playlistD = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,114,95,56,0);
          let componentx = true;
         privacyT.set(`${langi}`, parseInt(`${langi}`) ^ 1);
         playlistD = `${playlistD.length}`;
         componentx = playlistD.length < 36;
      }
         sans7.push(3 ^ suggestionJ.size);
       let orientationZ: Array<any> = [String.fromCharCode(115,109,111,111,116,104,101,110,95,105,95,54,0), String.fromCharCode(99,97,114,101,116,95,108,95,55,53,0), String.fromCharCode(115,112,101,101,100,95,107,95,54,53,0)];
      footballl = `${incident2.length}`;
   if (footballl.length <= 4) {
      banner0 = 69 >= controlv || 69 >= membershipc.length;
   }
      shirtC %= Math.max(((bcopy_go ? 3 : 5)), 5);
      shirtC &= ((vertical9 ? 2 : 4) / (Math.max(shirtC, 1)));
   for (let x = 0; x < 1; x++) {
      shirtC ^= 1 & shirtC;
   }
       let tumbnailP = String.fromCharCode(102,95,49,49,95,101,110,100,105,97,110,0);
         tumbnailP = `${tumbnailP.length + 3}`;
       let formh = String.fromCharCode(97,118,105,100,95,110,95,52,51,0);
       let membership8 = String.fromCharCode(100,95,57,56,95,100,118,97,117,100,105,111,0);
      for (let i = 0; i < 1; i++) {
         tumbnailP = `${membership8.length & formh.length}`;
      }
      incidentY = !banner0;
   let nalyticsZ = membershipc.length <= 6203936;
   do {
      membershipc.push(2 + controlv);
      if (nalyticsZ) {
         break;
      }
   } while (nalyticsZ && (membershipc.includes(shirtC)));
   if (1 <= (membershipc.length % 1)) {
      banner0 = shirtt;
   }
   if (vertical9) {
      vertical9 = (!incidentY ? banner0 : incidentY);
   }
       let stats9 = 0.0;
       let hooks2 = 5.0;
       let shrinkG: Array<any> = [108, 215, 929];
         shrinkG.push(2 << (Math.min(Math.abs(parseInt(`${hooks2}`)), 1)));
      if ((stats9 / 2.45) > 3.8 && (stats9 / 2.45) > 2.59) {
          let greyl = 0.0;
          let dialogq = true;
          let selects = String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,53,95,54,52,0);
          let spinnerc = String.fromCharCode(106,95,50,95,115,117,98,118,105,101,119,0);
         shrinkG = [2 ^ spinnerc.length];
         greyl -= (parseFloat(`${selects == String.fromCharCode(89,0) ? parseInt(`${greyl}`) : selects.length}`));
         dialogq = !selects.startsWith(`${greyl}`);
         spinnerc = `${3 << (Math.min(1, selects.length))}`;
      }
      for (let f = 0; f < 3; f++) {
          let close5: Map<any, any> = new Map([[String.fromCharCode(100,95,53,53,95,120,102,111,114,109,101,100,0),580], [String.fromCharCode(112,95,57,49,95,97,117,100,105,111,100,115,112,0),166], [String.fromCharCode(112,95,49,57,95,116,97,112,115,0),814]]);
          let downloadingT = String.fromCharCode(99,97,112,116,117,114,101,114,95,51,95,54,49,0);
         hooks2 -= close5.size - parseInt(`${hooks2}`);
         close5 = new Map([[downloadingT, 2]]);
         downloadingT += `${downloadingT.length}`;
      }
      if (!shrinkG.includes(hooks2)) {
          let shrinke: Map<any, any> = new Map([[String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,113,95,53,51,0),969], [String.fromCharCode(102,97,109,105,108,121,95,119,95,50,50,0),288], [String.fromCharCode(102,97,118,101,100,95,121,95,57,48,0),766]]);
          let dangerC = 5.0;
         hooks2 += shrinke.size | 2;
         shrinke = new Map([[`${dangerC}`, parseInt(`${dangerC}`) - parseInt(`${dangerC}`)]]);
      }
         hooks2 -= 1 ^ parseInt(`${hooks2}`);
      let service9 = stats9 <= 5084689.0;
      do {
          let backgroundR = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,55,95,51,54,0);
          let annerR = 2.0;
          let searchbar4 = 5;
         stats9 *= 1 / (Math.max(parseInt(`${stats9}`), 1));
         backgroundR += `${backgroundR.length | searchbar4}`;
         annerR += parseFloat(`${parseInt(`${annerR}`)}`);
         searchbar4 += 3;
         if (service9) {
            break;
         }
      } while ((4.24 > (hooks2 / 5)) && service9);
      while (5.74 < (3.23 * hooks2)) {
         hooks2 -= 2;
         break;
      }
      while (stats9 <= hooks2) {
         stats9 *= parseInt(`${stats9}`) >> (Math.min(Math.abs(parseInt(`${hooks2}`)), 2));
         break;
      }
       let reminderx = 1.0;
      vertical9 = shirtC >= 62;
       let greenn = 1;
       let redirectX = 5.0;
       let activeZ = String.fromCharCode(114,95,55,57,95,118,101,99,116,111,114,115,99,111,112,101,0);
         greenn += greenn;
      for (let e = 0; e < 2; e++) {
         redirectX *= parseFloat(`${activeZ.length}`);
      }
      if ((redirectX / 3.79) >= 3.94 || (parseInt(`${redirectX}`) / (Math.max(activeZ.length, 1))) >= 2) {
         activeZ += `${parseInt(`${redirectX}`)}`;
      }
      while ((redirectX / (Math.max(parseFloat(`${activeZ.length}`), 6))) == 5.85 || 5.85 == (redirectX / (Math.max(parseFloat(`${activeZ.length}`), 1)))) {
          let faviconE = 4.0;
         activeZ = `${parseInt(`${faviconE}`)}`;
         break;
      }
         redirectX *= (parseFloat(`${activeZ == String.fromCharCode(122,0) ? greenn : activeZ.length}`));
      let condensedb = 9218556.0 >= redirectX;
      do {
         redirectX *= parseFloat(`${2}`);
         if (condensedb) {
            break;
         }
      } while ((1.77 < redirectX) && condensedb);
         redirectX += parseFloat(`${greenn + parseInt(`${redirectX}`)}`);
      if (5 == (greenn & 4)) {
          let dragl = String.fromCharCode(99,95,51,50,95,98,108,101,101,100,0);
          let greyt: Map<any, any> = new Map([[String.fromCharCode(98,108,105,110,100,105,110,103,95,97,95,57,51,0),false ], [String.fromCharCode(114,95,51,57,95,109,111,100,117,108,117,115,0),true ], [String.fromCharCode(100,105,115,116,105,110,99,116,95,49,95,53,48,0),true ]]);
          let tumbnailr = 0.0;
          let navigationH = 4.0;
          let middlewaren = false;
         redirectX -= (parseFloat(`${(middlewaren ? 1 : 4) + parseInt(`${navigationH}`)}`));
         dragl = `${greyt.size * 2}`;
         greyt = new Map([[`${tumbnailr}`, parseInt(`${tumbnailr}`)]]);
         navigationH += parseInt(`${tumbnailr}`);
         middlewaren = null != greyt.get(`${tumbnailr}`);
      }
      if (2 <= (3 * greenn) || (redirectX + 3.51) <= 4.32) {
          let frame_aP = String.fromCharCode(106,95,55,55,95,115,109,105,120,0);
         redirectX -= parseFloat(`${frame_aP.length}`);
      }
      footballl += `${((bcopy_go ? 3 : 4) & parseInt(`${robotoC}`))}`;
      shirtC %= Math.max(2, ((vertical9 ? 3 : 2) / 1));
       let notificationg: Map<any, any> = new Map([[String.fromCharCode(104,97,114,112,101,110,95,105,95,57,55,0),String.fromCharCode(98,95,53,51,95,120,105,112,104,108,97,99,105,110,103,0)], [String.fromCharCode(119,101,105,103,104,116,101,100,95,53,95,51,52,0),String.fromCharCode(115,97,116,105,115,102,105,101,100,95,100,95,51,0)], [String.fromCharCode(103,95,51,55,95,115,101,114,105,97,108,0),String.fromCharCode(100,101,112,116,104,95,118,95,50,52,0)]]);
       let spinnerM = false;
       let dialog1 = 1;
      while (4 <= dialog1 && 5 <= (dialog1 ^ 4)) {
          let network5: Map<any, any> = new Map([[String.fromCharCode(120,95,55,51,95,108,105,98,115,104,105,110,101,0),String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,113,95,57,50,0)], [String.fromCharCode(101,114,97,95,116,95,51,54,0),String.fromCharCode(113,95,53,57,95,112,101,114,99,101,112,116,0)], [String.fromCharCode(112,95,51,49,95,98,105,110,98,110,0),String.fromCharCode(100,95,56,49,95,98,97,99,107,101,110,100,0)]]);
          let profile4 = 5.0;
          let delegate_mg9 = 2.0;
          let skipe = String.fromCharCode(112,97,114,97,108,108,101,108,95,117,95,56,53,0);
         spinnerM = 38 == skipe.length && 38 == notificationg.size;
         network5.set(`${profile4}`, parseInt(`${profile4}`));
         delegate_mg9 -= parseInt(`${profile4}`);
         skipe = `${parseInt(`${profile4}`)}`;
         break;
      }
         spinnerM = !spinnerM;
      if (!spinnerM) {
          let orangen: Map<any, any> = new Map([[String.fromCharCode(122,95,56,95,98,110,109,112,105,0),String.fromCharCode(111,98,106,101,99,116,105,118,101,95,109,95,52,53,0)], [String.fromCharCode(112,114,105,111,95,100,95,56,50,0),String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,113,95,56,56,0)]]);
          let episodeq: Map<any, any> = new Map([[String.fromCharCode(98,105,116,118,101,99,95,106,95,53,57,0),894], [String.fromCharCode(102,95,53,53,95,100,101,99,111,100,101,109,118,0),747], [String.fromCharCode(107,95,52,49,95,116,105,109,101,112,101,114,102,114,97,109,101,0),435]]);
          let datav: Map<any, any> = new Map([[String.fromCharCode(114,95,53,57,95,98,117,116,116,101,114,102,108,121,0),259], [String.fromCharCode(113,112,102,105,108,101,95,114,95,54,48,0),62]]);
          let dataB = String.fromCharCode(118,95,53,95,114,97,115,116,101,114,105,122,101,0);
         dialog1 -= ((spinnerM ? 2 : 3) >> (Math.min(Math.abs(1), 4)));
         orangen = new Map([[`${datav.size}`, 3]]);
         episodeq.set(`${orangen.size}`, datav.size * orangen.size);
         dataB = `${datav.size % (Math.max(1, 2))}`;
      }
      if (5 < notificationg.size && 1 < (notificationg.size ^ 5)) {
         spinnerM = notificationg.size == 5 && !spinnerM;
      }
      let switch_vK = 8681540 <= dialog1;
      do {
          let hooksr = String.fromCharCode(114,95,57,48,95,109,97,112,112,105,110,103,115,0);
          let soundT: Map<any, any> = new Map([[String.fromCharCode(110,95,57,56,95,102,119,97,108,115,104,0),String.fromCharCode(103,110,111,115,105,115,95,108,95,50,53,0)], [String.fromCharCode(101,114,114,95,100,95,48,0),String.fromCharCode(106,95,51,52,95,98,117,105,108,116,105,110,0)]]);
         dialog1 &= 1;
         hooksr = `${hooksr.length}`;
         soundT.set(hooksr, hooksr.length + 1);
         if (switch_vK) {
            break;
         }
      } while ((notificationg.size <= 3) && switch_vK);
      catagoryl += `${catagoryl.length}`;
   let arear = footballl == String.fromCharCode(102,119,104,99,121,48,57,49,56,0);
   do {
      footballl += `${((incidentY ? 2 : 2))}`;
      if (arear) {
         break;
      }
   } while ((!incidentY) && arear);
   if (catagoryl.length >= 5) {
      catagoryl += `${parseInt(`${robotoC}`) * footballl.length}`;
   }
   if (shirtC > 3) {
      shirtC %= Math.max(footballl.length, 5);
   }
   let saveS = bcopy_go ? !bcopy_go : bcopy_go;
   do {
      bcopy_go = footballl.includes(`${controlv}`);
      if (saveS) {
         break;
      }
   } while (saveS && (!bcopy_go));
   if (3 <= (catagoryl.length + parseInt(`${robotoC}`)) || 4 <= (3 ^ catagoryl.length)) {
      robotoC -= (String.fromCharCode(115,0) == signinupY ? signinupY.length : catagoryl.length);
   }

    setShowAdOverlay(false);
  };

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
          onPressAds={onPressAds}
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

      <BecomeVipOverlay
        setShowBecomeVIPOverlay={setShowAdOverlay}
        showBecomeVIPOverlay={isShowAdOverlay}
        isJustClose={true}
        selectedTab="common"
        onClose={onCloseAdOverlay}
      />

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
