import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import ww_runtime from '../../Umeng/ww_runtime';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { wwShielddoneAlbum } from '@redux/reducers/ww_detail_mbsplash';
import { wwEighteenShirt } from '@redux/ww_small';
import { wwPredictionarrowIncident } from '@type/ww_dycreator_result';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import { API_DOMAIN_TEST } from '@utility/ww_icon';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/ww_complete';
import ScreenContainer from '../components/container/ww_collection';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/ww_mapping_roboto';
import NoConnection from './../components/common/ww_downarrow';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux/actions/ww_hash';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import BecomeVipOverlay from '../components/modal/ww_animation';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/ww_icon';

type wwMiddleDirect = {
  data: {
    List: Array<wwPredictionarrowIncident>;
  };
};

type wwGradlew = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<wwPredictionarrowIncident>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const miniVodRef = useRef<wwGradlew>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<wwVertical>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = wwBodan.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  
  
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
       let attributedstringx = 5.0;
    let cancelA: Map<any, any> = new Map([[String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,110,95,53,57,0),56], [String.fromCharCode(115,104,97,100,111,119,95,122,95,56,57,0),14], [String.fromCharCode(108,105,103,104,116,110,101,115,115,95,49,95,51,0),228]]);
    let description_bsx: Array<any> = [91, 751];
    let injury4 = 0.0;
    let iconsaveimageC = 5;
    let debugo = 4.0;
    let paginationu = String.fromCharCode(115,95,55,55,95,99,101,108,116,0);
    let gpayr = String.fromCharCode(103,95,57,53,95,100,101,116,101,99,116,99,108,111,115,101,0);
    let textinputa = 2.0;
    let football8 = 4;
    let pauseZ = String.fromCharCode(101,120,105,116,95,99,95,57,50,0);
    let androidY = 1;
    let basez = String.fromCharCode(112,114,101,118,105,101,119,112,112,95,57,95,54,0);
    let bellB = false;
       let minivod7 = String.fromCharCode(108,95,54,53,95,105,108,98,99,100,97,116,97,0);
       let mimo2 = 4.0;
       let values3 = String.fromCharCode(112,116,115,101,115,95,48,95,50,0);
         values3 += `${(String.fromCharCode(118,0) == values3 ? values3.length : parseInt(`${mimo2}`))}`;
          let sortX = String.fromCharCode(100,95,55,95,105,116,101,114,97,116,105,111,110,0);
         mimo2 -= (minivod7 == String.fromCharCode(51,0) ? minivod7.length : parseInt(`${mimo2}`));
         sortX = `${sortX.length}`;
          let twitter9 = String.fromCharCode(114,95,53,49,95,102,105,108,116,0);
          let iconshareK = 2.0;
         minivod7 = `${twitter9.length}`;
         twitter9 = `${2 % (Math.max(10, parseInt(`${iconshareK}`)))}`;
         iconshareK -= 1 & parseInt(`${iconshareK}`);
       let weatherL = 1.0;
          let privatechatbg8 = 3.0;
          let current7 = String.fromCharCode(110,101,108,108,121,95,48,95,55,51,0);
         values3 = `${parseInt(`${weatherL}`)}`;
         privatechatbg8 *= parseFloat(`${parseInt(`${privatechatbg8}`) / 3}`);
         current7 += `${parseInt(`${privatechatbg8}`) * current7.length}`;
       let chinaj: Array<any> = [674, 65, 106];
       let cornerH: Array<any> = [String.fromCharCode(109,95,53,55,95,99,103,117,0), String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,99,95,53,57,0), String.fromCharCode(115,117,98,115,116,114,101,97,109,95,52,95,52,48,0)];
      let vietnam4 = 8974017 >= minivod7.length;
      do {
         minivod7 = "3";
         if (vietnam4) {
            break;
         }
      } while ((!minivod7.includes(`${cornerH.length}`)) && vietnam4);
       let backward8 = true;
      let sportsu = minivod7 == String.fromCharCode(116,103,105,50,106,107,0);
      do {
         minivod7 += "1";
         if (sportsu) {
            break;
         }
      } while (sportsu && (values3 != String.fromCharCode(83,0)));
      iconsaveimageC >>= Math.min(1, Math.abs(parseInt(`${mimo2}`) % 3));
      gpayr += `${parseInt(`${injury4}`) | parseInt(`${textinputa}`)}`;
   for (let r = 0; r < 3; r++) {
      gpayr = `${gpayr.length ^ 2}`;
   }
      description_bsx = [3];
      paginationu = `${3 ^ paginationu.length}`;
      paginationu += `${parseInt(`${injury4}`) | parseInt(`${attributedstringx}`)}`;
       let serviceF = String.fromCharCode(112,97,114,116,110,101,114,95,114,95,57,50,0);
       let attributedstringw = true;
       let huaweiC = false;
       let filledr: Array<any> = [69, 563];
       let popup_: Array<any> = [176, 822];
      let whistle0 = serviceF.length >= 5238877;
      do {
         serviceF = "1";
         if (whistle0) {
            break;
         }
      } while (whistle0 && ((4 << (Math.min(4, serviceF.length))) == 5 && 1 == (popup_.length << (Math.min(Math.abs(4), 5)))));
       let selectedS = String.fromCharCode(100,102,108,97,95,48,95,55,51,0);
       let reactg = String.fromCharCode(107,95,56,52,95,109,116,97,102,0);
         popup_ = [popup_.length];
         selectedS = `${(String.fromCharCode(122,0) == reactg ? reactg.length : (attributedstringw ? 4 : 4))}`;
      if (!huaweiC || 4 < reactg.length) {
         reactg += `${((attributedstringw ? 3 : 1))}`;
      }
      let volumeD = serviceF == String.fromCharCode(114,105,54,105,109,117,52,97,119,0);
      do {
         serviceF += `${(1 + (huaweiC ? 1 : 4))}`;
         if (volumeD) {
            break;
         }
      } while (volumeD && (serviceF != String.fromCharCode(102,0) && 5 >= reactg.length));
          let questiconK = true;
          let mutedt = 5;
         popup_.push(reactg.length);
         questiconK = questiconK || mutedt > 86;
         mutedt ^= mutedt >> (Math.min(5, Math.abs(2)));
      while (attributedstringw) {
         attributedstringw = 62 > reactg.length;
         break;
      }
      attributedstringx *= parseFloat(`${parseInt(`${injury4}`) * description_bsx.length}`);
      debugo -= paginationu.length * 1;

    setIsRefreshing(true);

   if (paginationu.length >= iconsaveimageC) {
      paginationu = "2";
   }
      cancelA = new Map([[`${attributedstringx}`, 2]]);
      debugo += parseInt(`${injury4}`);
      attributedstringx /= Math.max(4, parseFloat(`${parseInt(`${debugo}`) & parseInt(`${textinputa}`)}`));
      iconsaveimageC += 1 & paginationu.length;
   if (3.54 <= (debugo / (Math.max(description_bsx.length, 9)))) {
       let handler4 = String.fromCharCode(112,114,111,112,101,114,95,105,95,56,56,0);
       let yellowredcardW = String.fromCharCode(113,95,57,53,95,103,116,101,115,116,0);
       let tooltips5 = String.fromCharCode(101,95,52,49,95,100,105,115,97,108,108,111,119,0);
       let forwardL = false;
         yellowredcardW = `${yellowredcardW.length}`;
      for (let a = 0; a < 1; a++) {
         yellowredcardW = `${yellowredcardW.length << (Math.min(tooltips5.length, 4))}`;
      }
         yellowredcardW = `${((forwardL ? 2 : 1))}`;
          let policyV: Map<any, any> = new Map([[String.fromCharCode(115,116,97,110,100,97,114,100,115,95,106,95,57,0),String.fromCharCode(118,95,51,49,95,109,105,108,108,101,114,0)], [String.fromCharCode(121,95,52,48,95,97,97,99,101,110,99,0),String.fromCharCode(108,95,53,51,95,103,101,111,98,116,97,103,0)]]);
         forwardL = 15 > policyV.size && handler4 == String.fromCharCode(49,0);
          let awayo = 3.0;
         tooltips5 = `${(tooltips5 == String.fromCharCode(90,0) ? tooltips5.length : handler4.length)}`;
         awayo *= 3 >> (Math.min(Math.abs(parseInt(`${awayo}`)), 3));
         handler4 += "3";
         forwardL = (yellowredcardW.length << (Math.min(handler4.length, 4))) >= 9;
          let subbasketballplayerh = true;
          let upgradeq = String.fromCharCode(108,95,52,50,95,104,105,115,116,0);
          let gradlei: Array<any> = [703, 896, 924];
         tooltips5 += `${(String.fromCharCode(52,0) == tooltips5 ? tooltips5.length : (forwardL ? 3 : 3))}`;
         subbasketballplayerh = String.fromCharCode(86,0) == upgradeq;
         upgradeq += `${((subbasketballplayerh ? 1 : 5) * 2)}`;
         gradlei = [(gradlei.length - (subbasketballplayerh ? 3 : 2))];
         yellowredcardW = "3";
         tooltips5 += `${1 | handler4.length}`;
      for (let e = 0; e < 1; e++) {
         yellowredcardW += `${handler4.length * 1}`;
      }
         yellowredcardW = `${((forwardL ? 3 : 2) - 2)}`;
      debugo *= 2 * cancelA.size;
   }
      description_bsx.push(2 >> (Math.min(Math.abs(parseInt(`${debugo}`)), 1)));
   let iconscheduleL = textinputa >= 8254165.0;
   do {
      textinputa += 2 / (Math.max(3, parseInt(`${debugo}`)));
      if (iconscheduleL) {
         break;
      }
   } while (iconscheduleL && (attributedstringx >= 5.89));
    

   let verticalL = debugo >= 8916280.0;
   do {
       let historyV = true;
       let libavformatU = 1.0;
         libavformatU *= parseFloat(`${parseInt(`${libavformatU}`) ^ 3}`);
      while (!historyV) {
         historyV = libavformatU >= 5.99;
         break;
      }
         historyV = 42.92 > libavformatU;
      let sourcej = 7808287.0 >= libavformatU;
      do {
         libavformatU *= parseFloat(`${parseInt(`${libavformatU}`) & 3}`);
         if (sourcej) {
            break;
         }
      } while ((historyV) && sourcej);
      for (let w = 0; w < 1; w++) {
         historyV = libavformatU < 26.59;
      }
      while (!historyV || (libavformatU + 4.43) > 2.3) {
          let scoreP = 2.0;
          let pressureO = 5;
          let analyticsV: Array<any> = [385, 433];
         libavformatU /= Math.max(parseFloat(`${analyticsV.length << (Math.min(Math.abs(2), 1))}`), 5);
         scoreP /= Math.max(4, parseFloat(`${parseInt(`${scoreP}`)}`));
         pressureO %= Math.max(parseInt(`${scoreP}`), 5);
         analyticsV.push(1 / (Math.max(1, parseInt(`${scoreP}`))));
         break;
      }
      debugo -= description_bsx.length;
      if (verticalL) {
         break;
      }
   } while (verticalL && (4.71 >= debugo));
      paginationu += "1";
   if ((textinputa / 2.50) >= 5.78) {
      textinputa += (String.fromCharCode(88,0) == gpayr ? parseInt(`${textinputa}`) : gpayr.length);
   }
       let whitetick1 = String.fromCharCode(109,105,110,117,115,95,108,95,49,57,0);
         whitetick1 += `${(whitetick1 == String.fromCharCode(98,0) ? whitetick1.length : whitetick1.length)}`;
      for (let d = 0; d < 3; d++) {
         whitetick1 = `${whitetick1.length << (Math.min(whitetick1.length, 1))}`;
      }
       let action1: Map<any, any> = new Map([[String.fromCharCode(111,95,51,52,95,118,105,101,119,0),737], [String.fromCharCode(98,105,116,118,101,99,95,100,95,49,50,0),552], [String.fromCharCode(97,95,53,51,95,112,117,116,0),518]]);
      cancelA.set(`${iconsaveimageC}`, cancelA.size);
   let defaultfootballbgY = 8396111.0 >= textinputa;
   do {
      textinputa /= Math.max(5, 2);
      if (defaultfootballbgY) {
         break;
      }
   } while (defaultfootballbgY && (!description_bsx.includes(textinputa)));
      iconsaveimageC |= cancelA.size + parseInt(`${attributedstringx}`);
   for (let x = 0; x < 1; x++) {
      gpayr = `${parseInt(`${textinputa}`) % 2}`;
   }
       let holdere: Map<any, any> = new Map([[String.fromCharCode(115,107,105,112,112,97,98,108,101,95,53,95,57,48,0),832], [String.fromCharCode(99,97,114,116,101,115,105,97,110,95,116,95,52,53,0),101], [String.fromCharCode(110,95,56,53,95,98,121,112,97,115,115,105,110,103,0),260]]);
       let roundr = 3;
       let iconbellactiveH: Array<any> = [604, 79];
       let stationsE = true;
      if (stationsE) {
         roundr /= Math.max(2, 2 << (Math.min(5, Math.abs(holdere.size))));
      }
         iconbellactiveH = [iconbellactiveH.length | 2];
      if (iconbellactiveH.includes(roundr)) {
         iconbellactiveH = [iconbellactiveH.length << (Math.min(Math.abs(2), 1))];
      }
         stationsE = holdere.get(`${stationsE}`) != null;
      if (stationsE) {
          let policyC = 1.0;
          let moviesP = 0;
          let disconnectedM = 0.0;
          let sharemodal2 = String.fromCharCode(98,95,51,55,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0);
          let heartv = 1;
         iconbellactiveH.push(((stationsE ? 2 : 1) - parseInt(`${policyC}`)));
         policyC -= parseFloat(`${parseInt(`${disconnectedM}`)}`);
         moviesP -= moviesP;
         disconnectedM *= parseInt(`${disconnectedM}`);
         sharemodal2 += `${(sharemodal2 == String.fromCharCode(54,0) ? parseInt(`${disconnectedM}`) : sharemodal2.length)}`;
         heartv >>= Math.min(4, Math.abs(1));
      }
      for (let u = 0; u < 2; u++) {
         roundr &= roundr;
      }
          let r_countH = String.fromCharCode(117,110,114,111,117,110,100,101,100,95,107,95,56,0);
         stationsE = r_countH == String.fromCharCode(89,0);
      if (!stationsE) {
          let n_positionx = String.fromCharCode(100,95,52,50,95,99,97,98,97,99,0);
          let goalz = String.fromCharCode(107,95,56,57,95,97,108,103,0);
         stationsE = n_positionx.length <= 81;
         n_positionx = `${goalz.length << (Math.min(Math.abs(2), 4))}`;
         goalz = `${goalz.length % (Math.max(8, goalz.length))}`;
      }
      injury4 /= Math.max(4, football8 / (Math.max(paginationu.length, 5)));
    await refetch();

   for (let w = 0; w < 1; w++) {
      description_bsx.push((String.fromCharCode(49,0) == paginationu ? paginationu.length : parseInt(`${injury4}`)));
   }
   let tinit_i6 = 7898125.0 <= debugo;
   do {
       let defaultroombgW = 0;
      for (let f = 0; f < 2; f++) {
          let crossU: Array<any> = [String.fromCharCode(100,105,103,101,115,116,95,101,95,51,57,0), String.fromCharCode(117,110,114,101,102,95,108,95,56,48,0), String.fromCharCode(115,95,55,49,95,109,117,108,115,117,98,0)];
          let guide8 = 3;
         defaultroombgW <<= Math.min(Math.abs(defaultroombgW | 3), 3);
         crossU.push(guide8);
         guide8 |= crossU.length;
      }
         defaultroombgW ^= defaultroombgW;
          let v_countt = true;
          let minivodD: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,117,108,101,95,118,95,50,54,0),660], [String.fromCharCode(97,95,55,49,95,99,104,117,110,107,115,0),664], [String.fromCharCode(97,109,102,101,110,99,95,122,95,55,51,0),80]]);
         defaultroombgW += ((v_countt ? 5 : 1) | 1);
         v_countt = minivodD.size <= 11;
         minivodD = new Map([[`${minivodD.size}`, minivodD.size % 1]]);
      debugo -= gpayr.length * 1;
      if (tinit_i6) {
         break;
      }
   } while (tinit_i6 && (iconsaveimageC >= 3));
   for (let a = 0; a < 2; a++) {
      cancelA.set(`${football8}`, football8);
   }
   for (let k = 0; k < 2; k++) {
       let abidetect3: Map<any, any> = new Map([[String.fromCharCode(116,95,51,54,95,100,105,115,116,114,97,99,116,105,111,110,0),true ], [String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,118,95,50,48,0),false ]]);
       let libcrashsdk9 = String.fromCharCode(110,95,51,95,100,101,97,99,116,105,118,97,116,105,110,103,0);
       let livenodatabgimgi = 5.0;
       let dragD = String.fromCharCode(118,95,51,48,95,100,114,97,119,101,114,0);
       let libimagepipelineI = 1;
      if (dragD.endsWith(`${libcrashsdk9.length}`)) {
          let friendsF = String.fromCharCode(110,95,51,49,95,100,115,117,98,101,120,112,0);
          let templateprocessorb = String.fromCharCode(105,116,101,114,97,116,101,95,118,95,56,52,0);
          let progressJ = false;
         dragD = "3";
         friendsF += `${1 << (Math.min(1, templateprocessorb.length))}`;
         templateprocessorb += "3";
         progressJ = friendsF == String.fromCharCode(121,0);
      }
      while (2 >= (dragD.length >> (Math.min(1, Math.abs(libimagepipelineI)))) || 2 >= (libimagepipelineI >> (Math.min(Math.abs(2), 4)))) {
          let strv: Map<any, any> = new Map([[String.fromCharCode(113,95,51,48,95,105,116,101,114,97,116,101,0),635], [String.fromCharCode(97,95,56,49,95,101,120,99,101,101,100,101,100,0),565]]);
         dragD += `${1 ^ abidetect3.size}`;
         strv = new Map([[`${strv.size}`, strv.size % 3]]);
         break;
      }
          let libflipperW = String.fromCharCode(97,95,54,57,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0);
         livenodatabgimgi *= parseFloat(`${2 & abidetect3.size}`);
         libflipperW += "1";
          let aboutO = 4;
          let carouselz = 2.0;
         dragD = `${parseInt(`${carouselz}`) / (Math.max(abidetect3.size, 7))}`;
         aboutO *= aboutO;
         carouselz *= aboutO;
      let graphicsM = 8145973 >= dragD.length;
      do {
         dragD = `${parseInt(`${livenodatabgimgi}`)}`;
         if (graphicsM) {
            break;
         }
      } while ((1 >= (dragD.length << (Math.min(Math.abs(4), 3)))) && graphicsM);
      for (let q = 0; q < 2; q++) {
         abidetect3.set(`${dragD}`, abidetect3.size);
      }
      let linkf = 5275900.0 <= livenodatabgimgi;
      do {
         livenodatabgimgi -= parseFloat(`${parseInt(`${livenodatabgimgi}`)}`);
         if (linkf) {
            break;
         }
      } while ((4 == (parseInt(`${livenodatabgimgi}`) / (Math.max(7, dragD.length)))) && linkf);
      while ((2 / (Math.max(6, libcrashsdk9.length))) <= 1 || 3 <= (2 / (Math.max(5, libcrashsdk9.length)))) {
         libimagepipelineI *= dragD.length * libcrashsdk9.length;
         break;
      }
      let binddatasH = 8611066.0 <= livenodatabgimgi;
      do {
         livenodatabgimgi -= parseFloat(`${3}`);
         if (binddatasH) {
            break;
         }
      } while (binddatasH && (1.72 >= (livenodatabgimgi - parseFloat(`${libimagepipelineI}`)) && (libimagepipelineI + 4) >= 4));
      while (livenodatabgimgi > 2.13) {
          let mimoE = 1;
          let static_aez = 5.0;
          let material6 = String.fromCharCode(102,101,97,116,117,114,101,100,95,55,95,52,51,0);
         dragD += "1";
         mimoE ^= 2 / (Math.max(5, mimoE));
         static_aez *= material6.length & 2;
         material6 += `${2 | parseInt(`${static_aez}`)}`;
         break;
      }
          let cornerl = 1.0;
          let penaltygoalY = 4.0;
          let k_unlockP = 5;
         livenodatabgimgi += parseFloat(`${2}`);
         cornerl *= parseFloat(`${parseInt(`${penaltygoalY}`)}`);
         penaltygoalY += parseFloat(`${parseInt(`${cornerl}`)}`);
         k_unlockP >>= Math.min(5, Math.abs(k_unlockP ^ 1));
      football8 ^= dragD.length;
   }
       let close2: Array<any> = [86, 620];
       let qaago: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,105,110,115,112,101,99,116,0),String.fromCharCode(116,114,101,101,119,114,105,116,101,114,95,101,95,55,49,0)], [String.fromCharCode(111,95,54,55,95,99,111,110,116,111,108,108,101,114,0),String.fromCharCode(121,111,117,114,95,97,95,52,53,0)], [String.fromCharCode(111,95,52,49,95,105,110,118,111,107,101,0),String.fromCharCode(99,102,116,102,115,117,98,95,116,95,56,49,0)]]);
      while (1 == (1 + close2.length)) {
         close2.push(close2.length);
         break;
      }
         close2.push(close2.length);
         qaago = new Map([[`${qaago.size}`, qaago.size ^ 1]]);
         qaago.set(`${close2.length}`, qaago.size);
      let zhuboV = qaago.size <= 8364079;
      do {
         qaago.set(`${close2.length}`, qaago.size ^ close2.length);
         if (zhuboV) {
            break;
         }
      } while (zhuboV && (qaago.get(`${close2.length}`) == null));
       let iconplayO = 3;
       let countryq = 2;
      injury4 += football8 - 2;
       let x_imageF = 4.0;
       let update_rB = String.fromCharCode(103,95,56,56,95,109,105,100,101,113,117,97,108,105,122,101,114,0);
       let settingsk = 2.0;
      for (let u = 0; u < 1; u++) {
         settingsk /= Math.max(3, parseInt(`${settingsk}`) + 1);
      }
      for (let p = 0; p < 1; p++) {
         update_rB += `${parseInt(`${settingsk}`) / (Math.max(update_rB.length, 1))}`;
      }
          let control7 = String.fromCharCode(106,95,56,48,95,122,111,110,101,115,0);
          let playercommonO: Map<any, any> = new Map([[String.fromCharCode(103,95,54,55,95,116,104,114,111,116,116,108,101,114,0),String.fromCharCode(111,95,57,55,95,114,101,115,104,117,102,102,108,101,0)], [String.fromCharCode(106,95,55,50,95,99,108,97,115,115,105,102,121,0),String.fromCharCode(109,95,54,95,110,101,116,115,0)], [String.fromCharCode(106,95,51,53,95,116,97,107,101,110,0),String.fromCharCode(115,116,114,105,115,116,97,114,116,95,100,95,50,51,0)]]);
         update_rB += `${(control7 == String.fromCharCode(81,0) ? parseInt(`${settingsk}`) : control7.length)}`;
         playercommonO = new Map([[`${playercommonO.size}`, playercommonO.size ^ 3]]);
         x_imageF *= parseInt(`${settingsk}`);
      while ((settingsk / 1.88) <= 5.54) {
          let refreshc = 0;
          let scorev = true;
          let clock6: Map<any, any> = new Map([[String.fromCharCode(114,95,54,50,95,102,101,116,99,104,101,115,0),577], [String.fromCharCode(119,111,114,115,116,95,48,95,51,52,0),448], [String.fromCharCode(119,95,50,54,95,98,105,116,115,0),97]]);
         settingsk /= Math.max(3, refreshc * clock6.size);
         refreshc |= ((scorev ? 5 : 1) >> (Math.min(5, Math.abs(1))));
         break;
      }
      let userP = update_rB.length >= 9547775;
      do {
         update_rB = `${parseInt(`${x_imageF}`) + 2}`;
         if (userP) {
            break;
         }
      } while (userP && (!update_rB.endsWith(`${settingsk}`)));
      for (let h = 0; h < 2; h++) {
          let temperatureq = String.fromCharCode(116,95,52,55,95,100,101,114,101,103,105,115,116,101,114,0);
          let appsU: Map<any, any> = new Map([[String.fromCharCode(120,95,57,57,95,100,105,115,99,97,114,100,101,100,0),227], [String.fromCharCode(106,95,49,54,95,119,101,108,115,101,110,99,0),40]]);
          let launchR = String.fromCharCode(109,95,57,51,95,103,114,97,118,105,116,121,0);
          let middlewareD = 0;
          let gestures = 0;
         x_imageF += (String.fromCharCode(95,0) == temperatureq ? temperatureq.length : parseInt(`${settingsk}`));
         appsU = new Map([[`${appsU.size}`, gestures]]);
         launchR += `${middlewareD | 2}`;
         middlewareD -= appsU.size;
         gestures *= launchR.length * middlewareD;
      }
         x_imageF /= Math.max(5, update_rB.length);
      let disconnectedj = settingsk >= 5395831.0;
      do {
         settingsk -= 1;
         if (disconnectedj) {
            break;
         }
      } while (disconnectedj && (settingsk > 3.44));
      injury4 /= Math.max(3, 3);
       let sourceB: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,114,101,115,97,109,112,108,101,95,106,95,49,54,0),false ], [String.fromCharCode(98,105,108,97,116,101,114,97,108,95,55,95,54,0),false ], [String.fromCharCode(112,95,49,52,95,116,121,112,101,100,0),true ]]);
       let loadingX = String.fromCharCode(100,111,99,117,109,101,110,116,115,95,54,95,53,52,0);
      while (3 == (loadingX.length >> (Math.min(Math.abs(2), 2)))) {
         loadingX += "1";
         break;
      }
         sourceB.set(loadingX, 2);
          let backgroundJ = String.fromCharCode(109,111,111,118,95,115,95,57,55,0);
         loadingX = `${(loadingX == String.fromCharCode(53,0) ? loadingX.length : backgroundJ.length)}`;
      if (5 > (sourceB.size / (Math.max(3, 8))) || (loadingX.length / 3) > 1) {
         sourceB.set(loadingX, loadingX.length - sourceB.size);
      }
      for (let x = 0; x < 2; x++) {
         sourceB.set(loadingX, (String.fromCharCode(76,0) == loadingX ? loadingX.length : sourceB.size));
      }
      let mbnativeD = String.fromCharCode(55,98,52,99,0) == loadingX;
      do {
         loadingX += `${sourceB.size % (Math.max(1, loadingX.length))}`;
         if (mbnativeD) {
            break;
         }
      } while (mbnativeD && (!loadingX.startsWith(`${sourceB.size}`)));
      gpayr += `${gpayr.length | pauseZ.length}`;
      cancelA = new Map([[`${debugo}`, parseInt(`${injury4}`) / 3]]);
    setIsRefreshing(false);

      basez = `${paginationu.length}`;
       let register_c5 = String.fromCharCode(115,104,105,102,116,105,110,103,115,95,48,95,55,49,0);
         register_c5 += "1";
      if (register_c5.length >= 3) {
         register_c5 = `${register_c5.length}`;
      }
      while (register_c5.includes(register_c5)) {
         register_c5 = `${(register_c5 == String.fromCharCode(85,0) ? register_c5.length : register_c5.length)}`;
         break;
      }
      injury4 -= pauseZ.length & 1;
      cancelA.set(`${iconsaveimageC}`, 2);
   while (cancelA.get(`${attributedstringx}`) != null) {
      cancelA = new Map([[`${debugo}`, parseInt(`${debugo}`) % (Math.max(6, football8))]]);
      break;
   }
      gpayr = `${(String.fromCharCode(120,0) == pauseZ ? gpayr.length : pauseZ.length)}`;
   while ((parseInt(`${debugo}`) * description_bsx.length) <= 4) {
       let helpern = String.fromCharCode(97,109,114,110,98,100,97,116,97,95,106,95,52,53,0);
       let rulesW = String.fromCharCode(114,95,51,95,99,108,97,115,115,0);
       let modulesX: Array<any> = [445, 221, 661];
       let detailsX = String.fromCharCode(103,101,110,101,114,97,116,101,95,104,95,56,50,0);
       let tumbnail9 = false;
          let statisticsinactivev = 3.0;
          let downloaded1 = true;
         detailsX = `${(String.fromCharCode(110,0) == helpern ? (downloaded1 ? 4 : 5) : helpern.length)}`;
         statisticsinactivev *= parseInt(`${statisticsinactivev}`) ^ 2;
         downloaded1 = 19.100 <= (statisticsinactivev * statisticsinactivev);
      for (let k = 0; k < 1; k++) {
         rulesW = `${detailsX.length << (Math.min(helpern.length, 5))}`;
      }
          let redgoalG: Array<any> = [295, 357, 102];
          let webviewq = false;
          let traminiI: Array<any> = [String.fromCharCode(114,101,102,101,116,99,104,95,120,95,49,56,0), String.fromCharCode(119,95,52,50,95,97,108,112,110,0)];
         rulesW = `${traminiI.length * modulesX.length}`;
         redgoalG.push(((webviewq ? 1 : 2) - 3));
         webviewq = (((!webviewq ? redgoalG.length : 51) + redgoalG.length) < 51);
         traminiI.push(redgoalG.length | 3);
       let storeL: Array<any> = [244, 980, 272];
       let productW: Array<any> = [String.fromCharCode(114,101,103,117,108,97,114,95,52,95,52,48,0), String.fromCharCode(118,95,50,57,95,100,105,97,103,110,111,115,116,105,99,115,0), String.fromCharCode(104,95,54,50,95,116,114,105,112,108,101,0)];
         modulesX.push((String.fromCharCode(74,0) == detailsX ? detailsX.length : (tumbnail9 ? 2 : 1)));
       let connectiony = String.fromCharCode(99,108,101,97,114,105,95,97,95,53,53,0);
       let emojif = String.fromCharCode(105,110,118,102,95,111,95,55,51,0);
      for (let k = 0; k < 3; k++) {
          let profileframes = 5.0;
          let matche = String.fromCharCode(116,101,110,99,95,120,95,51,0);
         detailsX = `${((tumbnail9 ? 1 : 2) * 2)}`;
         profileframes += parseFloat(`${parseInt(`${profileframes}`) % 2}`);
         matche += "2";
      }
      for (let r = 0; r < 3; r++) {
         connectiony = "1";
      }
          let viewer0 = String.fromCharCode(108,95,54,55,95,102,105,110,97,108,108,121,0);
          let filled7 = 4;
          let h_lock4 = 2.0;
         emojif += "2";
         viewer0 = `${parseInt(`${h_lock4}`)}`;
         filled7 *= 1 / (Math.max(8, viewer0.length));
         h_lock4 /= Math.max(2 >> (Math.min(5, Math.abs(parseInt(`${h_lock4}`)))), 1);
         modulesX.push((detailsX == String.fromCharCode(79,0) ? detailsX.length : emojif.length));
      if (2 < modulesX.length) {
          let defaultplayerimgh = 5.0;
          let privacyn = 4.0;
          let debugp = 0.0;
          let awayZ = String.fromCharCode(100,95,57,0);
         storeL.push(rulesW.length / (Math.max(1, 1)));
         defaultplayerimgh /= Math.max(parseInt(`${defaultplayerimgh}`) << (Math.min(2, Math.abs(3))), 3);
         privacyn /= Math.max(2, parseInt(`${defaultplayerimgh}`) >> (Math.min(3, Math.abs(parseInt(`${privacyn}`)))));
         debugp *= parseFloat(`${awayZ.length & 3}`);
         awayZ += `${3 | parseInt(`${defaultplayerimgh}`)}`;
      }
      let charth = modulesX.length <= 8091572;
      do {
          let turndownV = 2.0;
         modulesX = [storeL.length | 1];
         turndownV *= parseFloat(`${parseInt(`${turndownV}`) + 3}`);
         if (charth) {
            break;
         }
      } while ((2 >= (modulesX.length + 4)) && charth);
      let selectedd = String.fromCharCode(104,119,117,0) == detailsX;
      do {
         detailsX += `${(2 - (tumbnail9 ? 4 : 2))}`;
         if (selectedd) {
            break;
         }
      } while ((detailsX.length < 4) && selectedd);
      if ((rulesW.length - modulesX.length) < 5 || (modulesX.length - rulesW.length) < 5) {
         modulesX = [connectiony.length + 2];
      }
          let subtextJ = String.fromCharCode(97,108,108,114,103,98,95,107,95,56,49,0);
          let feedbackg = String.fromCharCode(100,101,108,105,109,95,102,95,52,57,0);
         connectiony += `${productW.length}`;
         subtextJ = `${feedbackg.length}`;
         feedbackg = `${(feedbackg == String.fromCharCode(120,0) ? subtextJ.length : feedbackg.length)}`;
      description_bsx.push(2);
      break;
   }
      description_bsx.push(pauseZ.length);
   for (let h = 0; h < 2; h++) {
       let notificationn = 3.0;
       let placeholder5 = 3;
       let with_m1Z: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,110,95,50,53,0),String.fromCharCode(102,95,57,50,95,116,114,97,110,115,112,111,114,116,115,0)], [String.fromCharCode(114,95,54,56,95,97,108,116,0),String.fromCharCode(106,95,56,95,98,114,105,100,103,101,97,98,108,101,0)]]);
       let indicator1: Array<any> = [150, 960];
         placeholder5 %= Math.max(2, 1);
      while ((5 - with_m1Z.size) < 1) {
          let launcherS: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,115,104,97,114,101,95,52,95,49,48,0),766], [String.fromCharCode(105,102,97,115,116,95,106,95,49,0),637]]);
          let tickedQ: Array<any> = [301, 277];
         with_m1Z = new Map([[`${indicator1.length}`, parseInt(`${notificationn}`)]]);
         launcherS.set(`${tickedQ.length}`, launcherS.size / 2);
         tickedQ = [1];
         break;
      }
          let greyarrowup4 = String.fromCharCode(116,114,101,102,95,120,95,52,49,0);
          let morel = true;
          let flagf = true;
         indicator1 = [((morel ? 3 : 2))];
         greyarrowup4 += `${((flagf ? 5 : 1) + 2)}`;
         morel = greyarrowup4.length == 31;
         flagf = greyarrowup4.length < 75;
          let ballT = String.fromCharCode(119,95,51,56,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0);
         indicator1.push(indicator1.length);
         ballT += `${ballT.length ^ ballT.length}`;
          let iconeditz: Array<any> = [775, 92, 925];
          let mbsplashc = true;
         indicator1 = [1 << (Math.min(Math.abs(placeholder5), 3))];
         iconeditz = [2];
         mbsplashc = iconeditz.length < 58;
      for (let h = 0; h < 3; h++) {
         indicator1 = [with_m1Z.size + 2];
      }
       let alerta = String.fromCharCode(113,95,55,52,95,115,116,114,105,100,101,98,0);
          let iconeditB: Map<any, any> = new Map([[String.fromCharCode(115,97,100,100,95,108,95,55,52,0),666], [String.fromCharCode(113,95,52,50,95,102,105,108,116,101,114,0),542], [String.fromCharCode(108,95,51,55,95,115,112,100,105,102,0),185]]);
          let r_lockk = 5.0;
          let register_4c3 = String.fromCharCode(105,95,51,48,95,97,116,111,109,105,99,0);
         indicator1.push(2);
         iconeditB.set(`${r_lockk}`, 3);
         r_lockk *= parseFloat(`${2 * iconeditB.size}`);
         register_4c3 = `${iconeditB.size}`;
         alerta = "1";
      let icopy_uR = alerta.length >= 5231741;
      do {
          let profileinactiveV: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,97,103,95,119,95,55,53,0),430], [String.fromCharCode(107,101,121,112,97,116,104,95,48,95,53,55,0),693]]);
          let downarrowX = false;
         alerta = "2";
         profileinactiveV.set(`${profileinactiveV.size}`, 3);
         downarrowX = (profileinactiveV.size & profileinactiveV.size) > 66;
         if (icopy_uR) {
            break;
         }
      } while ((alerta.endsWith(`${with_m1Z.size}`)) && icopy_uR);
          let u_lockB = String.fromCharCode(115,116,97,116,101,115,95,102,95,49,49,0);
          let libavformatu = 3;
          let backgroundO = 0.0;
         notificationn += parseFloat(`${1 - alerta.length}`);
         u_lockB += `${u_lockB.length}`;
         libavformatu &= 3;
         backgroundO *= u_lockB.length;
         notificationn *= parseFloat(`${1 ^ placeholder5}`);
      iconsaveimageC ^= football8;
   }
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
  } = useMinivodQuery(fetchMode, wwBodan.fakeIsVip(userState.user));

  const checkConnection = useCallback(async () => {
       let livenodatabgimgC: Map<any, any> = new Map([[String.fromCharCode(110,95,53,95,116,97,103,98,105,116,0),581], [String.fromCharCode(109,112,101,103,112,115,95,99,95,57,48,0),71]]);
    let viewern = false;
    let statisticsinactiveo = String.fromCharCode(119,95,52,52,95,108,105,110,101,0);
    let drag5 = 0.0;
    let unimplementedviewd: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,101,100,95,49,95,57,52,0),String.fromCharCode(102,95,50,51,95,105,110,115,112,101,99,116,97,98,108,101,0)], [String.fromCharCode(121,95,55,51,95,115,101,110,100,0),String.fromCharCode(113,95,48,95,117,116,105,109,101,0)], [String.fromCharCode(112,95,55,51,95,99,111,110,110,0),String.fromCharCode(113,95,49,54,95,101,118,97,108,0)]]);
    let bottoms = String.fromCharCode(107,101,121,102,114,97,109,101,115,95,52,95,51,56,0);
    let usernameQ = String.fromCharCode(102,95,54,49,95,118,111,105,112,0);
    let dycreator1 = 1.0;
    let profileY = 4.0;
   for (let m = 0; m < 1; m++) {
      viewern = (livenodatabgimgC.size & statisticsinactiveo.length) <= 76;
   }
      viewern = usernameQ == String.fromCharCode(69,0);
      usernameQ = `${usernameQ.length}`;
   while (!statisticsinactiveo.startsWith(`${viewern}`)) {
      viewern = !viewern;
      break;
   }
   let whistleI = 6805628.0 >= dycreator1;
   do {
      dycreator1 -= (1 & (viewern ? 4 : 3));
      if (whistleI) {
         break;
      }
   } while ((4 == statisticsinactiveo.length) && whistleI);
   let usernameD = 8911705.0 >= dycreator1;
   do {
       let topice = false;
      let libfabricjnia = topice ? !topice : topice;
      do {
         topice = !topice;
         if (libfabricjnia) {
            break;
         }
      } while (libfabricjnia && (topice));
       let feedbackL = 1.0;
       let auto_nya = 0.0;
      let clubB = 9131140.0 >= feedbackL;
      do {
         feedbackL *= (parseInt(`${feedbackL}`) * (topice ? 4 : 3));
         if (clubB) {
            break;
         }
      } while (clubB && (!topice || 5.50 >= (feedbackL * 5.12)));
      dycreator1 *= unimplementedviewd.size - 2;
      if (usernameD) {
         break;
      }
   } while (usernameD && (statisticsinactiveo.includes(`${dycreator1}`)));

    const state = await NetInfo.fetch();

       let sendM = 2;
       let libavfilterx: Array<any> = [786, 551];
       let predictionarrowg: Array<any> = [313, 786, 687];
         predictionarrowg = [libavfilterx.length % 2];
       let android8: Array<any> = [270, 813];
       let libsentryW = String.fromCharCode(115,108,105,99,101,115,95,114,95,56,53,0);
       let libreactperfloggerjnib = String.fromCharCode(117,95,50,52,95,102,97,105,108,115,0);
         android8 = [3];
      if (libavfilterx.length == predictionarrowg.length) {
         predictionarrowg = [libreactperfloggerjnib.length];
      }
          let friends1 = 1.0;
          let guideC = false;
         libreactperfloggerjnib = `${2 + parseInt(`${friends1}`)}`;
         friends1 *= (parseFloat(`${(guideC ? 5 : 2) | 2}`));
         predictionarrowg = [android8.length];
          let home8 = String.fromCharCode(101,120,104,97,117,115,116,95,50,95,53,0);
          let showL = true;
         libreactperfloggerjnib = `${android8.length}`;
         home8 += `${((showL ? 4 : 1) ^ 3)}`;
         showL = !home8.endsWith(`${showL}`);
      while ((android8.length / 5) >= 1 && (libsentryW.length / 5) >= 2) {
          let renewh = String.fromCharCode(114,95,49,50,95,112,114,101,118,111,105,117,115,0);
          let reactnativeultimatelistviewa = String.fromCharCode(103,95,49,53,95,108,103,111,114,97,110,100,0);
         android8.push(predictionarrowg.length & 2);
         renewh += `${3 << (Math.min(5, renewh.length))}`;
         reactnativeultimatelistviewa = `${reactnativeultimatelistviewa.length}`;
         break;
      }
      unimplementedviewd.set(bottoms, bottoms.length);
      sendM <<= Math.min(Math.abs(sendM % (Math.max(3, 10))), 4);
   while ((1.100 + drag5) >= 1.99 && 2.84 >= (1.100 + drag5)) {
      unimplementedviewd = new Map([[`${unimplementedviewd.size}`, unimplementedviewd.size - parseInt(`${dycreator1}`)]]);
      break;
   }
   for (let o = 0; o < 3; o++) {
      drag5 -= parseFloat(`${3}`);
   }
       let ball2 = false;
       let navigationc = String.fromCharCode(116,95,55,51,95,117,115,108,101,101,112,0);
      if (!navigationc.endsWith(`${ball2}`)) {
          let leakchecker_ = String.fromCharCode(112,114,111,100,95,53,95,54,56,0);
         navigationc = `${1 | navigationc.length}`;
         leakchecker_ = `${2 | leakchecker_.length}`;
      }
         navigationc = `${navigationc.length}`;
          let libavdevicey = String.fromCharCode(117,98,115,99,114,105,98,101,114,95,104,95,49,50,0);
          let productd = 3;
          let castingP: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,119,111,114,100,115,95,53,95,57,0),String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,118,95,53,55,0)], [String.fromCharCode(119,97,118,101,95,118,95,49,52,0),String.fromCharCode(97,97,99,99,111,100,101,114,95,118,95,53,52,0)], [String.fromCharCode(97,98,115,100,105,102,102,95,117,95,52,53,0),String.fromCharCode(120,95,49,50,95,105,102,97,99,116,111,114,0)]]);
         navigationc = `${productd}`;
         libavdevicey += `${(String.fromCharCode(67,0) == libavdevicey ? castingP.size : libavdevicey.length)}`;
         productd &= 1;
         castingP = new Map([[`${castingP.size}`, 1 - libavdevicey.length]]);
         ball2 = (((!ball2 ? 44 : navigationc.length) << (Math.min(navigationc.length, 4))) >= 44);
          let policyR: Map<any, any> = new Map([[String.fromCharCode(100,95,51,56,95,98,105,103,100,105,97,0),false ], [String.fromCharCode(99,95,55,50,95,112,97,108,108,101,116,101,0),true ]]);
         navigationc = `${policyR.size}`;
      if (navigationc.length < 4 && !ball2) {
         navigationc = `${navigationc.length}`;
      }
      bottoms += `${2 >> (Math.min(4, usernameQ.length))}`;
      unimplementedviewd.set(usernameQ, parseInt(`${dycreator1}`));
   while ((4 / (Math.max(1, usernameQ.length))) >= 2) {
      unimplementedviewd.set(`${dycreator1}`, livenodatabgimgC.size >> (Math.min(Math.abs(2), 5)));
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      usernameQ = `${statisticsinactiveo.length % 1}`;
   while ((statisticsinactiveo.length - parseInt(`${dycreator1}`)) == 5 && (statisticsinactiveo.length - dycreator1) == 4.11) {
      statisticsinactiveo = `${1 & parseInt(`${dycreator1}`)}`;
      break;
   }
   for (let o = 0; o < 1; o++) {
       let bottomH = true;
       let gradlem = String.fromCharCode(121,95,57,55,95,115,99,104,101,100,0);
       let entryA = 2.0;
       let whitek = String.fromCharCode(97,95,57,95,115,101,114,118,101,114,115,0);
       let foundo = 1;
       let upgradeL = 0.0;
       let shrinky = 4.0;
      for (let h = 0; h < 3; h++) {
          let interstitialO = String.fromCharCode(100,105,112,111,115,97,98,108,101,95,117,95,50,49,0);
          let eyeopene: Array<any> = [464, 604, 55];
          let malaysiaO = String.fromCharCode(99,114,111,110,111,115,95,103,95,57,48,0);
          let dragw = String.fromCharCode(112,108,97,116,102,111,114,109,95,99,95,51,0);
          let thailandt: Array<any> = [973, 914];
         upgradeL -= parseFloat(`${parseInt(`${upgradeL}`) | 2}`);
         interstitialO += `${(String.fromCharCode(67,0) == interstitialO ? interstitialO.length : dragw.length)}`;
         eyeopene = [1 & interstitialO.length];
         malaysiaO += `${thailandt.length}`;
         dragw += `${malaysiaO.length ^ thailandt.length}`;
      }
          let main_b3 = 5.0;
          let vipsportn = String.fromCharCode(107,110,111,98,95,56,95,54,50,0);
          let gradlewz = 5.0;
         bottomH = (gradlem.length / (Math.max(whitek.length, 6))) == 93;
         main_b3 *= parseFloat(`${parseInt(`${main_b3}`)}`);
         vipsportn += `${parseInt(`${main_b3}`) % 1}`;
         gradlewz += parseFloat(`${1}`);
         foundo += 2;
          let gradlewC = 0.0;
         bottomH = 73.98 <= (entryA + gradlewC);
      for (let c = 0; c < 1; c++) {
         shrinky -= parseFloat(`${2}`);
      }
         foundo <<= Math.min(Math.abs(parseInt(`${shrinky}`) | 2), 4);
       let libglogB: Array<any> = [501, 664];
       let libfbjni5: Array<any> = [697, 757, 773];
      for (let p = 0; p < 1; p++) {
         libfbjni5.push(libglogB.length);
      }
         upgradeL /= Math.max(parseFloat(`${1}`), 2);
      while (4.99 <= (entryA - 2.94) && (1 ^ gradlem.length) <= 2) {
         entryA += (parseFloat(`${(bottomH ? 3 : 3) + parseInt(`${entryA}`)}`));
         break;
      }
          let active6 = 1.0;
          let rewindj = String.fromCharCode(97,95,53,51,95,97,108,116,101,114,110,97,116,105,111,110,0);
          let nterstitialo = String.fromCharCode(109,95,54,51,95,99,111,110,116,97,105,110,101,114,115,0);
         libglogB.push(1 + nterstitialo.length);
         active6 += (rewindj == String.fromCharCode(78,0) ? parseInt(`${active6}`) : rewindj.length);
         nterstitialo = `${parseInt(`${active6}`)}`;
         gradlem += `${parseInt(`${upgradeL}`)}`;
      for (let i = 0; i < 2; i++) {
         whitek += `${gradlem.length >> (Math.min(Math.abs(2), 4))}`;
      }
      for (let z = 0; z < 3; z++) {
         bottomH = libglogB.includes(foundo);
      }
      viewern = dycreator1 == 75.15;
   }
      usernameQ += `${parseInt(`${dycreator1}`)}`;
      usernameQ = `${((viewern ? 3 : 4) ^ parseInt(`${drag5}`))}`;
      drag5 /= Math.max(1, parseFloat(`${statisticsinactiveo.length}`));
    setIsOffline(offline);

       let trash9: Map<any, any> = new Map([[String.fromCharCode(111,95,56,52,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,95,99,95,53,0)], [String.fromCharCode(102,114,101,101,108,105,115,116,95,97,95,57,50,0),String.fromCharCode(107,95,53,55,95,112,111,115,116,112,114,111,99,0)], [String.fromCharCode(101,95,50,48,95,109,111,109,101,110,116,115,0),String.fromCharCode(110,95,52,56,95,114,101,112,114,101,112,97,114,101,0)]]);
          let anythinkN: Array<any> = [108, 774];
          let stringK = false;
         trash9.set(`${anythinkN.length}`, anythinkN.length);
         stringK = !stringK && stringK;
         trash9 = new Map([[`${trash9.size}`, trash9.size ^ trash9.size]]);
         trash9.set(`${trash9.size}`, trash9.size);
      statisticsinactiveo = `${trash9.size}`;
       let iconwatchnow0: Map<any, any> = new Map([[String.fromCharCode(103,95,50,50,95,98,101,103,105,110,115,0),String.fromCharCode(99,111,101,102,115,95,109,95,49,48,0)], [String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,48,95,49,48,0),String.fromCharCode(105,95,50,48,95,101,108,115,116,0)], [String.fromCharCode(106,95,52,54,95,108,111,99,97,116,101,100,0),String.fromCharCode(109,95,53,53,95,114,97,108,102,0)]]);
       let screenT = String.fromCharCode(98,95,51,50,95,99,104,105,109,112,0);
       let arrowrightE = String.fromCharCode(111,95,56,51,95,114,101,97,108,116,105,109,101,0);
      if (screenT.startsWith(`${iconwatchnow0.size}`)) {
         iconwatchnow0 = new Map([[`${iconwatchnow0.size}`, iconwatchnow0.size]]);
      }
          let iconsettingv = String.fromCharCode(102,111,108,100,101,114,95,48,95,55,57,0);
          let downloadk = String.fromCharCode(108,95,48,95,97,99,99,101,115,115,111,114,0);
          let profileframek = 1.0;
         screenT += `${parseInt(`${profileframek}`) ^ downloadk.length}`;
         iconsettingv += `${iconsettingv.length}`;
         downloadk = `${iconsettingv.length}`;
      let cancelL = screenT == String.fromCharCode(97,106,48,117,115,57,0);
      do {
         screenT += `${arrowrightE.length}`;
         if (cancelL) {
            break;
         }
      } while (((iconwatchnow0.size | screenT.length) < 3 && 3 < (screenT.length | iconwatchnow0.size)) && cancelL);
      if (screenT.length <= arrowrightE.length) {
         screenT = `${iconwatchnow0.size << (Math.min(Math.abs(3), 5))}`;
      }
         screenT = `${arrowrightE.length}`;
      if (5 < (2 + arrowrightE.length)) {
          let nextv = 2.0;
          let gifgoalO = false;
          let zhengpian5 = false;
          let hejio = false;
          let bells = String.fromCharCode(118,95,56,55,95,100,101,114,101,103,105,115,116,101,114,0);
         arrowrightE = `${(3 / (Math.max(7, (hejio ? 5 : 2))))}`;
         nextv /= Math.max(3, ((zhengpian5 ? 1 : 3) | bells.length));
         gifgoalO = zhengpian5;
         hejio = zhengpian5;
         bells += `${1 * parseInt(`${nextv}`)}`;
      }
          let libyogaW = String.fromCharCode(115,104,97,114,101,95,54,95,55,56,0);
         screenT += `${libyogaW.length}`;
      if (arrowrightE != screenT) {
          let upgradef: Array<any> = [318, 164];
         screenT += `${arrowrightE.length}`;
         upgradef = [3 & upgradef.length];
      }
      while (screenT.startsWith(`${iconwatchnow0.size}`)) {
          let halfu: Map<any, any> = new Map([[String.fromCharCode(113,95,50,54,95,115,117,110,118,101,114,0),false ], [String.fromCharCode(99,102,101,110,99,115,116,114,95,97,95,53,50,0),true ]]);
          let castV = 3.0;
          let middleq: Array<any> = [874, 593, 43];
          let libyogaS = String.fromCharCode(113,116,97,98,108,101,115,95,100,95,51,53,0);
          let libavformat3: Map<any, any> = new Map([[String.fromCharCode(115,101,116,95,109,95,52,51,0),true ], [String.fromCharCode(114,95,50,53,95,109,101,109,111,114,121,0),false ], [String.fromCharCode(107,101,114,110,101,108,95,57,95,54,55,0),true ]]);
         screenT += "2";
         halfu = new Map([[`${middleq.length}`, libyogaS.length]]);
         castV += parseInt(`${castV}`);
         middleq.push(3 | parseInt(`${castV}`));
         libyogaS = `${halfu.size}`;
         libavformat3 = new Map([[`${middleq.length}`, 1]]);
         break;
      }
      statisticsinactiveo = "2";
       let checkboxs = 5.0;
       let iconeditW: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,115,95,98,95,56,54,0),828], [String.fromCharCode(100,101,116,97,105,108,95,52,95,51,49,0),27]]);
          let listh = String.fromCharCode(118,95,56,55,95,115,105,103,104,97,110,100,108,101,114,0);
         checkboxs /= Math.max(4, iconeditW.size);
         listh += `${listh.length + 3}`;
      while (Array.from(iconeditW.keys()).includes(`${checkboxs}`)) {
         iconeditW.set(`${checkboxs}`, 2);
         break;
      }
      let iconwatchnowW = checkboxs <= 7662193.0;
      do {
         checkboxs += iconeditW.size;
         if (iconwatchnowW) {
            break;
         }
      } while ((1 >= (3 * iconeditW.size) || (iconeditW.size ^ 3) >= 3) && iconwatchnowW);
      if (iconeditW.get(`${checkboxs}`) != null) {
         checkboxs /= Math.max(3, 1 << (Math.min(3, Math.abs(parseInt(`${checkboxs}`)))));
      }
          let subtext0 = String.fromCharCode(119,95,52,48,95,119,101,98,109,100,101,99,0);
          let combined5 = String.fromCharCode(118,95,49,49,95,102,105,108,108,115,0);
         iconeditW.set(`${checkboxs}`, subtext0.length & parseInt(`${checkboxs}`));
         subtext0 += `${combined5.length ^ combined5.length}`;
          let thumbnaild = 3.0;
          let libimagepipelinel = true;
          let mathT = true;
         checkboxs -= 2 & parseInt(`${thumbnaild}`);
         thumbnaild *= parseFloat(`${2}`);
         libimagepipelinel = !mathT;
      statisticsinactiveo = `${livenodatabgimgC.size}`;
       let streamingm = true;
       let grey_: Array<any> = [728, 429];
         streamingm = grey_.length > 73;
      while (grey_.length >= 5) {
         streamingm = grey_.length == 70;
         break;
      }
      viewern = !streamingm;
       let textlayoutmanagerx = 1.0;
       let disconnectedO = 0.0;
          let selectedW = String.fromCharCode(118,95,51,54,95,107,101,121,112,97,116,104,115,0);
          let uploadR: Map<any, any> = new Map([[String.fromCharCode(119,95,55,48,95,115,101,116,108,101,99,116,101,100,0),String.fromCharCode(104,97,114,112,101,110,95,99,95,57,52,0)], [String.fromCharCode(108,95,54,50,95,97,108,108,111,99,97,116,101,0),String.fromCharCode(113,95,56,50,95,99,112,117,105,110,102,111,0)]]);
         disconnectedO /= Math.max(3, parseFloat(`${parseInt(`${disconnectedO}`) & parseInt(`${textlayoutmanagerx}`)}`));
         selectedW += `${uploadR.size | selectedW.length}`;
         uploadR.set(selectedW, 3 | selectedW.length);
         textlayoutmanagerx -= parseInt(`${textlayoutmanagerx}`) % 2;
       let runtimeschedulerV = String.fromCharCode(116,101,115,101,100,103,101,95,55,95,52,56,0);
      for (let v = 0; v < 3; v++) {
          let securityw = false;
          let upload_ = String.fromCharCode(116,117,114,110,111,102,102,95,118,95,54,55,0);
         textlayoutmanagerx *= parseInt(`${disconnectedO}`) % 1;
         securityw = upload_.length <= 72;
         upload_ = `${upload_.length}`;
      }
         disconnectedO += parseFloat(`${2}`);
       let pingi = false;
      bottoms += `${unimplementedviewd.size}`;
   let signinupq = livenodatabgimgC.size <= 5632897;
   do {
       let fastW: Map<any, any> = new Map([[String.fromCharCode(115,101,109,97,110,116,105,99,115,95,106,95,56,49,0),147], [String.fromCharCode(107,95,52,53,95,115,116,114,101,97,109,105,100,0),740]]);
       let flagi = 1.0;
       let downloadx = String.fromCharCode(99,111,115,105,95,110,95,50,49,0);
       let libreactnativeblobG = 3.0;
         flagi /= Math.max(parseFloat(`${2}`), 2);
      while ((3.41 * flagi) == 2.88) {
          let iconrefresha = 3.0;
          let analyticsW: Map<any, any> = new Map([[String.fromCharCode(108,111,119,99,111,109,112,95,49,95,51,55,0),true ], [String.fromCharCode(104,99,115,99,97,108,101,95,114,95,54,52,0),false ], [String.fromCharCode(97,97,99,101,110,99,116,97,98,95,57,95,56,50,0),true ]]);
         flagi *= parseFloat(`${parseInt(`${flagi}`) - 1}`);
         iconrefresha *= parseFloat(`${parseInt(`${iconrefresha}`)}`);
         analyticsW.set(`${iconrefresha}`, 2);
         break;
      }
       let leakcheckerE = String.fromCharCode(115,114,112,95,48,95,49,57,0);
       let popupF = String.fromCharCode(109,117,108,116,105,112,108,101,95,120,95,55,53,0);
       let chinab: Array<any> = [333, 305, 211];
       let giftbuttonJ = false;
      if (2 <= fastW.size) {
         popupF = `${leakcheckerE.length ^ parseInt(`${flagi}`)}`;
      }
         giftbuttonJ = leakcheckerE.length == 86;
      for (let d = 0; d < 1; d++) {
         libreactnativeblobG /= Math.max((parseFloat(`${2 + (giftbuttonJ ? 1 : 3)}`)), 1);
      }
          let dependenciesD = 4;
          let gray6 = String.fromCharCode(113,95,52,95,99,114,99,116,97,98,108,101,0);
         leakcheckerE = `${fastW.size}`;
         dependenciesD &= dependenciesD % (Math.max(gray6.length, 9));
         gray6 += `${gray6.length}`;
      while (popupF.length <= leakcheckerE.length) {
          let jingdongc = String.fromCharCode(100,105,115,112,108,97,121,101,100,95,55,95,51,0);
         popupF = "3";
         jingdongc += `${jingdongc.length}`;
         break;
      }
          let manifestN = String.fromCharCode(107,95,49,51,0);
         leakcheckerE = `${1 << (Math.min(2, manifestN.length))}`;
         giftbuttonJ = (71 > ((giftbuttonJ ? 71 : fastW.size) ^ fastW.size));
      livenodatabgimgC.set(`${fastW.size}`, fastW.size);
      if (signinupq) {
         break;
      }
   } while (signinupq && (Array.from(livenodatabgimgC.values()).includes(dycreator1)));
    if (!offline) {

   if (bottoms.endsWith(`${unimplementedviewd.size}`)) {
      unimplementedviewd.set(usernameQ, 1);
   }
   while (5 >= (statisticsinactiveo.length % (Math.max(2, 8))) && 1 >= (statisticsinactiveo.length % 2)) {
      unimplementedviewd = new Map([[`${unimplementedviewd.size}`, unimplementedviewd.size ^ 3]]);
      break;
   }
       let downloader3 = String.fromCharCode(115,117,109,102,95,108,95,50,57,0);
       let signinupZ: Map<any, any> = new Map([[String.fromCharCode(98,95,50,50,95,114,111,117,110,100,115,0),String.fromCharCode(105,95,56,95,102,108,97,116,116,101,110,0)], [String.fromCharCode(99,95,55,57,95,98,97,115,105,99,0),String.fromCharCode(105,95,50,48,95,109,117,108,116,105,102,114,97,109,101,0)]]);
         downloader3 += `${signinupZ.size}`;
      if (downloader3.endsWith(`${signinupZ.size}`)) {
         signinupZ.set(downloader3, downloader3.length);
      }
         signinupZ = new Map([[`${signinupZ.size}`, 1]]);
      for (let m = 0; m < 1; m++) {
          let sharet = 4.0;
          let photos = 2.0;
          let classesc: Array<any> = [561, 336, 820];
          let storej = String.fromCharCode(103,95,52,52,95,116,114,105,109,109,105,110,103,0);
         downloader3 += "2";
         sharet *= parseInt(`${photos}`);
         photos += parseFloat(`${parseInt(`${photos}`)}`);
         classesc.push(classesc.length * storej.length);
         storej += `${classesc.length << (Math.min(Math.abs(3), 3))}`;
      }
      while (5 < (signinupZ.size << (Math.min(Math.abs(4), 2)))) {
         signinupZ.set(downloader3, downloader3.length >> (Math.min(Math.abs(2), 2)));
         break;
      }
         signinupZ.set(`${downloader3}`, (String.fromCharCode(106,0) == downloader3 ? signinupZ.size : downloader3.length));
      livenodatabgimgC = new Map([[`${unimplementedviewd.size}`, unimplementedviewd.size / 2]]);
   while (statisticsinactiveo.startsWith(`${unimplementedviewd.size}`)) {
       let sliderM = 3.0;
       let delegate_i_G = 3.0;
       let fcdaebecbcbafcdfceaaeccfeacdb7 = 4.0;
       let nativeX = 3.0;
      let nalyticsY = 7761959.0 <= sliderM;
      do {
          let read4: Map<any, any> = new Map([[String.fromCharCode(105,95,55,53,95,106,111,117,114,110,97,108,0),263], [String.fromCharCode(108,95,52,49,95,105,115,101,120,112,108,97,105,110,0),547]]);
          let submitG = 3;
          let episode2: Array<any> = [String.fromCharCode(115,95,55,48,95,114,101,97,100,101,114,0), String.fromCharCode(112,114,101,115,101,100,95,120,95,52,49,0), String.fromCharCode(109,95,51,50,95,114,101,97,100,0)];
          let bangj: Array<any> = [288, 964];
          let overZ = 4.0;
         sliderM *= parseFloat(`${1}`);
         read4 = new Map([[`${read4.size}`, read4.size]]);
         submitG |= submitG;
         episode2 = [episode2.length + 3];
         bangj.push(bangj.length + 2);
         overZ *= 3;
         if (nalyticsY) {
            break;
         }
      } while ((1.6 >= nativeX) && nalyticsY);
      while (sliderM <= 1.23) {
         sliderM *= parseFloat(`${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb7}`)}`);
         break;
      }
         sliderM += parseFloat(`${parseInt(`${nativeX}`)}`);
       let splasha = String.fromCharCode(97,116,116,105,98,117,116,101,95,121,95,56,57,0);
         sliderM /= Math.max((parseFloat(`${String.fromCharCode(73,0) == splasha ? parseInt(`${sliderM}`) : splasha.length}`)), 5);
         splasha += `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb7}`) << (Math.min(1, Math.abs(2)))}`;
         splasha += `${splasha.length - parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb7}`)}`;
      while (4.78 >= (nativeX * fcdaebecbcbafcdfceaaeccfeacdb7) && 4.74 >= (4.78 * fcdaebecbcbafcdfceaaeccfeacdb7)) {
          let topicD = 3.0;
         nativeX *= parseFloat(`${1}`);
         topicD -= parseFloat(`${parseInt(`${topicD}`) % 1}`);
         break;
      }
      unimplementedviewd.set(statisticsinactiveo, 1);
      delegate_i_G /= Math.max(parseFloat(`${parseInt(`${delegate_i_G}`) & 3}`), 2);
      break;
   }
      livenodatabgimgC.set(`${usernameQ}`, usernameQ.length);
      statisticsinactiveo += "3";
      handleRefresh();
    }
  }, []);

  
  useFocusEffect(useCallback(() => {
    ww_runtime.watchAnytimeViewsAnalytics({
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

      if (!wwBodan.fakeIsLogin(userState.user) && !adultMode && !wwBodan.fakeIsVip(userState.user)) {
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
    if (wwBodan.fakeIsLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
       let backw: Array<any> = [390, 633, 772];
    let libruntimeexecutorL = 2;
    let time_8hL = String.fromCharCode(116,95,57,57,95,112,114,101,101,110,99,111,100,101,0);
    let xadsdkZ: Map<any, any> = new Map([[String.fromCharCode(100,95,57,55,95,113,105,97,110,0),454], [String.fromCharCode(98,95,52,50,95,103,114,97,121,97,0),946], [String.fromCharCode(116,104,105,99,107,110,101,115,115,95,113,95,49,51,0),427]]);
    let taiwani = 5.0;
    let arrowupo: Array<any> = [812, 580, 705];
    let libavformatT = String.fromCharCode(115,95,54,53,95,115,104,111,114,116,0);
    let reactnavigationl = true;
    let componentsk = 1.0;
    let templateprocessor_: Array<any> = [String.fromCharCode(111,95,51,54,95,99,97,108,108,105,110,103,0), String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,109,95,50,52,0), String.fromCharCode(117,110,101,109,98,101,100,95,105,95,50,48,0)];
    let faviconH = String.fromCharCode(106,95,49,49,95,100,111,119,110,103,114,97,100,101,0);
    let middlex = 1.0;
    let interstitialj = false;
   let defaultroombgR = 8334873 <= libruntimeexecutorL;
   do {
      libruntimeexecutorL ^= 3;
      if (defaultroombgR) {
         break;
      }
   } while (defaultroombgR && (5 <= (time_8hL.length + 4) && (4 + libruntimeexecutorL) <= 2));
   let libcrashsdkD = componentsk >= 9015687.0;
   do {
      componentsk += 1 / (Math.max(9, libavformatT.length));
      if (libcrashsdkD) {
         break;
      }
   } while (((templateprocessor_.length | 3) == 1) && libcrashsdkD);
   if (2 > libruntimeexecutorL || 3 > (2 & libruntimeexecutorL)) {
      libruntimeexecutorL <<= Math.min(3, arrowupo.length);
   }
   let dragclose2 = 7738910 >= xadsdkZ.size;
   do {
       let imagenetworkerrx = String.fromCharCode(115,95,50,51,95,105,110,115,101,114,116,115,0);
       let splashX = 3.0;
       let penaltygoalE = String.fromCharCode(112,95,53,57,0);
       let mbridgez = String.fromCharCode(107,95,50,57,95,106,100,109,97,115,116,101,114,0);
       let becomeR = String.fromCharCode(112,114,105,118,97,116,101,95,52,95,50,56,0);
      if (mbridgez.length < imagenetworkerrx.length) {
         mbridgez += `${parseInt(`${splashX}`)}`;
      }
         imagenetworkerrx += `${mbridgez.length % (Math.max(8, imagenetworkerrx.length))}`;
          let binddatasn = 5.0;
          let static_74: Map<any, any> = new Map([[String.fromCharCode(114,95,56,55,95,97,115,99,101,110,116,0),false ], [String.fromCharCode(116,97,108,107,95,121,95,51,0),false ]]);
         splashX *= parseFloat(`${static_74.size * becomeR.length}`);
         binddatasn /= Math.max(5, 1);
         static_74.set(`${binddatasn}`, parseInt(`${binddatasn}`));
       let penaltyF = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,119,95,53,52,0);
          let backwardz = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,51,95,52,51,0);
         penaltyF += "3";
         backwardz = `${backwardz.length}`;
      if (1 >= becomeR.length) {
         imagenetworkerrx += `${penaltygoalE.length + 3}`;
      }
      while ((5.37 - splashX) == 5.70) {
         splashX -= parseFloat(`${mbridgez.length % 3}`);
         break;
      }
      while (becomeR.endsWith(`${splashX}`)) {
         splashX *= parseFloat(`${2}`);
         break;
      }
         mbridgez = `${1 + imagenetworkerrx.length}`;
      if (penaltygoalE.endsWith(`${splashX}`)) {
         penaltygoalE += `${becomeR.length}`;
      }
         penaltygoalE = `${penaltygoalE.length | penaltyF.length}`;
      for (let f = 0; f < 3; f++) {
         penaltyF += `${becomeR.length ^ penaltygoalE.length}`;
      }
         penaltyF += `${penaltygoalE.length * mbridgez.length}`;
         penaltygoalE += `${1 / (Math.max(6, penaltyF.length))}`;
         penaltyF += `${imagenetworkerrx.length & 3}`;
      xadsdkZ.set(imagenetworkerrx, imagenetworkerrx.length);
      if (dragclose2) {
         break;
      }
   } while (((libruntimeexecutorL ^ xadsdkZ.size) < 1 || 2 < (1 ^ xadsdkZ.size)) && dragclose2);
       let private_2g: Map<any, any> = new Map([[String.fromCharCode(121,95,56,57,95,100,101,103,114,101,101,0),false ], [String.fromCharCode(114,101,112,111,114,116,115,95,49,95,50,48,0),true ]]);
       let downloadZ = 4.0;
         private_2g = new Map([[`${private_2g.size}`, 3 >> (Math.min(1, Math.abs(parseInt(`${downloadZ}`))))]]);
          let orange_ = 5.0;
          let libreactperfloggerjnij = String.fromCharCode(111,95,53,52,95,103,117,105,100,115,0);
         downloadZ += parseFloat(`${1 >> (Math.min(1, Math.abs(parseInt(`${downloadZ}`))))}`);
         orange_ *= parseInt(`${orange_}`) / (Math.max(libreactperfloggerjnij.length, 9));
         libreactperfloggerjnij += `${(libreactperfloggerjnij == String.fromCharCode(55,0) ? parseInt(`${orange_}`) : libreactperfloggerjnij.length)}`;
         private_2g.set(`${downloadZ}`, private_2g.size / (Math.max(2, parseInt(`${downloadZ}`))));
          let mini1: Map<any, any> = new Map([[String.fromCharCode(97,110,110,117,108,97,114,95,122,95,54,54,0),String.fromCharCode(109,111,100,105,102,105,101,114,115,95,97,95,51,52,0)], [String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,98,95,50,49,0),String.fromCharCode(118,95,54,48,95,115,113,117,97,114,101,0)]]);
          let jingdongm: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,101,114,95,117,95,56,48,0),841], [String.fromCharCode(111,112,115,99,97,108,101,95,102,95,52,49,0),589]]);
          let leakcheckerW: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,108,111,117,100,110,111,114,109,0),672], [String.fromCharCode(99,111,109,112,101,110,115,97,116,105,111,110,95,118,95,50,53,0),325], [String.fromCharCode(114,95,55,56,95,111,112,112,111,115,105,116,101,0),652]]);
         private_2g = new Map([[`${private_2g.size}`, mini1.size]]);
         mini1 = new Map([[`${leakcheckerW.size}`, leakcheckerW.size + 2]]);
         jingdongm = new Map([[`${jingdongm.size}`, jingdongm.size]]);
         downloadZ += parseFloat(`${private_2g.size ^ 3}`);
      for (let z = 0; z < 1; z++) {
         private_2g = new Map([[`${private_2g.size}`, parseInt(`${downloadZ}`) - private_2g.size]]);
      }
      backw.push(templateprocessor_.length ^ xadsdkZ.size);
      arrowupo = [((reactnavigationl ? 5 : 1))];
   if ((2 % (Math.max(9, time_8hL.length))) >= 4 || 2 >= (backw.length % (Math.max(2, time_8hL.length)))) {
      backw.push(2 & backw.length);
   }
   let completeA = reactnavigationl ? !reactnavigationl : reactnavigationl;
   do {
       let changeq = 5.0;
       let teamdetailsbgH = false;
         teamdetailsbgH = changeq <= 60.96;
          let borderless4 = 4;
         teamdetailsbgH = changeq < 68.91;
         borderless4 -= borderless4 * borderless4;
         changeq -= parseFloat(`${parseInt(`${changeq}`) * 2}`);
         changeq += (parseFloat(`${(teamdetailsbgH ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${changeq}`)), 3))}`));
         changeq -= (parseFloat(`${parseInt(`${changeq}`) | (teamdetailsbgH ? 5 : 5)}`));
         teamdetailsbgH = 48.43 >= changeq;
      reactnavigationl = libavformatT.length <= 79 || teamdetailsbgH;
      if (completeA) {
         break;
      }
   } while (completeA && (reactnavigationl));
   let register_raG = reactnavigationl ? !reactnavigationl : reactnavigationl;
   do {
      reactnavigationl = (faviconH.length + time_8hL.length) >= 100;
      if (register_raG) {
         break;
      }
   } while (register_raG && (taiwani > 1.98));
   let macauH = 6037968 >= xadsdkZ.size;
   do {
       let gestureg = String.fromCharCode(106,95,54,57,0);
       let eact1 = false;
       let libsentryY = String.fromCharCode(108,97,121,115,95,99,95,54,48,0);
       let headerX = 5.0;
       let predictionbannershared7 = 2.0;
          let valuesH = 3.0;
          let playlist2 = String.fromCharCode(98,95,55,57,95,117,110,105,100,101,110,116,105,102,105,101,100,0);
         libsentryY += `${parseInt(`${predictionbannershared7}`)}`;
         valuesH *= parseFloat(`${parseInt(`${valuesH}`) >> (Math.min(playlist2.length, 4))}`);
         playlist2 = `${parseInt(`${valuesH}`) + 2}`;
          let starL: Map<any, any> = new Map([[String.fromCharCode(107,95,53,57,95,115,101,114,118,101,114,115,0),String.fromCharCode(101,120,112,97,110,100,95,107,95,50,55,0)], [String.fromCharCode(111,118,101,114,108,97,121,115,95,53,95,52,51,0),String.fromCharCode(113,117,97,110,116,115,95,118,95,57,57,0)], [String.fromCharCode(97,95,52,57,95,98,111,117,110,100,97,108,108,0),String.fromCharCode(111,114,112,104,97,110,95,51,95,50,53,0)]]);
         gestureg = "3";
         starL = new Map([[`${starL.size}`, starL.size % 3]]);
      let statisticsinactiveh = predictionbannershared7 <= 6032532.0;
      do {
         predictionbannershared7 *= parseInt(`${predictionbannershared7}`) >> (Math.min(Math.abs(1), 1));
         if (statisticsinactiveh) {
            break;
         }
      } while (statisticsinactiveh && ((headerX / (Math.max(predictionbannershared7, 7))) < 3.98 && 1.39 < (3.98 * predictionbannershared7)));
      let entryY = eact1 ? !eact1 : eact1;
      do {
         eact1 = 71.9 < headerX;
         if (entryY) {
            break;
         }
      } while (entryY && (predictionbannershared7 <= 3.53 || 3.45 <= (predictionbannershared7 + 3.53)));
         headerX += parseInt(`${predictionbannershared7}`);
          let membershipI = 5.0;
          let defaultprofilepict = 2.0;
         headerX /= Math.max(5, 2 | parseInt(`${headerX}`));
         membershipI += parseInt(`${membershipI}`) & 3;
         defaultprofilepict /= Math.max(parseFloat(`${parseInt(`${membershipI}`)}`), 2);
         eact1 = !eact1;
      while (eact1) {
         eact1 = libsentryY.length <= 3;
         break;
      }
          let spinnerD = false;
         predictionbannershared7 /= Math.max(4, (parseInt(`${predictionbannershared7}`) - (eact1 ? 2 : 4)));
         spinnerD = (spinnerD ? !spinnerD : !spinnerD);
      while (5.7 >= headerX) {
         predictionbannershared7 /= Math.max((String.fromCharCode(114,0) == libsentryY ? (eact1 ? 2 : 5) : libsentryY.length), 3);
         break;
      }
         libsentryY = `${3 * parseInt(`${predictionbannershared7}`)}`;
      if (eact1) {
         eact1 = libsentryY.length > 80 || !eact1;
      }
       let fcdaebecbcbafcdfceaaeccfeacdbp = 0.0;
      while (3.23 >= (fcdaebecbcbafcdfceaaeccfeacdbp + 5.50)) {
          let iconnewsshare0 = String.fromCharCode(97,99,99,101,115,115,105,110,103,95,99,95,49,52,0);
          let exampleimage4 = String.fromCharCode(115,116,97,116,105,115,116,105,99,115,95,53,95,49,53,0);
          let aboutg = 5;
          let modityi: Array<any> = [65, 993, 886];
          let bootsplashp = 1.0;
         eact1 = iconnewsshare0.includes(`${fcdaebecbcbafcdfceaaeccfeacdbp}`);
         iconnewsshare0 = "2";
         exampleimage4 = `${aboutg}`;
         aboutg %= Math.max(4, parseInt(`${bootsplashp}`));
         modityi = [(String.fromCharCode(98,0) == exampleimage4 ? exampleimage4.length : parseInt(`${bootsplashp}`))];
         break;
      }
         gestureg = `${1 ^ parseInt(`${predictionbannershared7}`)}`;
      xadsdkZ = new Map([[`${arrowupo.length}`, 2]]);
      if (macauH) {
         break;
      }
   } while (macauH && (xadsdkZ.size == 5));
      time_8hL += "1";
   let notificationG = 7032930.0 >= componentsk;
   do {
      componentsk /= Math.max(faviconH.length, 3);
      if (notificationG) {
         break;
      }
   } while (notificationG && (xadsdkZ.size == parseInt(`${componentsk}`)));
      backw = [faviconH.length - libruntimeexecutorL];
       let libtang = 4.0;
       let zhubo_ = String.fromCharCode(115,116,100,97,116,111,109,105,99,95,101,95,49,48,0);
       let typesJ = 5.0;
      while (1 >= (parseInt(`${typesJ}`) / (Math.max(zhubo_.length, 6))) || 1 >= (zhubo_.length / (Math.max(2, parseInt(`${typesJ}`))))) {
          let videoj = String.fromCharCode(101,95,55,95,115,113,108,105,116,101,114,98,117,0);
         typesJ += parseFloat(`${zhubo_.length / (Math.max(6, parseInt(`${libtang}`)))}`);
         videoj += `${videoj.length << (Math.min(Math.abs(1), 3))}`;
         break;
      }
         libtang *= parseInt(`${libtang}`);
          let changep = String.fromCharCode(99,95,53,95,115,101,99,107,101,121,0);
          let annerz: Array<any> = [274, 780, 447];
         zhubo_ = "3";
         changep = `${changep.length}`;
         annerz = [changep.length << (Math.min(Math.abs(1), 2))];
         zhubo_ = `${parseInt(`${libtang}`) & parseInt(`${typesJ}`)}`;
         typesJ *= parseFloat(`${2}`);
      while ((zhubo_.length * parseInt(`${typesJ}`)) > 5 && (2.69 * typesJ) > 2.31) {
         zhubo_ += "2";
         break;
      }
          let gradleH = 5;
         zhubo_ = `${parseInt(`${libtang}`) + 2}`;
         gradleH |= gradleH;
         zhubo_ += `${zhubo_.length ^ parseInt(`${libtang}`)}`;
         zhubo_ = "2";
      taiwani *= 1 % (Math.max(10, parseInt(`${libtang}`)));
      reactnavigationl = 42 > (libruntimeexecutorL + taiwani);
   while (faviconH.includes(`${libavformatT.length}`)) {
      libavformatT += `${((reactnavigationl ? 4 : 1) ^ 2)}`;
      break;
   }
      componentsk *= (libavformatT == String.fromCharCode(87,0) ? parseInt(`${componentsk}`) : libavformatT.length);
      faviconH = `${arrowupo.length % (Math.max(faviconH.length, 2))}`;
   for (let k = 0; k < 1; k++) {
      componentsk /= Math.max(5, parseInt(`${middlex}`) << (Math.min(3, Math.abs(2))));
   }
   let nnewarchdefaultsZ = 9490127 <= arrowupo.length;
   do {
      arrowupo = [templateprocessor_.length + time_8hL.length];
      if (nnewarchdefaultsZ) {
         break;
      }
   } while (nnewarchdefaultsZ && (4.72 > (middlex * 4.94)));
      reactnavigationl = templateprocessor_.includes(taiwani);
       let iconscheduley: Array<any> = [669, 772];
       let shirtF: Map<any, any> = new Map([[String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,95,101,95,53,49,0),548], [String.fromCharCode(107,95,51,48,0),841]]);
      if (5 < (iconscheduley.length >> (Math.min(Math.abs(shirtF.size), 4))) || (shirtF.size >> (Math.min(1, iconscheduley.length))) < 5) {
         iconscheduley.push(iconscheduley.length / 3);
      }
      for (let p = 0; p < 2; p++) {
         shirtF.set(`${iconscheduley.length}`, shirtF.size);
      }
         iconscheduley = [1 >> (Math.min(2, Math.abs(shirtF.size)))];
      while (Array.from(shirtF.keys()).includes(`${iconscheduley.length}`)) {
         iconscheduley = [iconscheduley.length];
         break;
      }
      for (let p = 0; p < 3; p++) {
         iconscheduley = [3 & shirtF.size];
      }
         shirtF.set(`${iconscheduley.length}`, iconscheduley.length);
      templateprocessor_ = [2];
       let videovar_ = String.fromCharCode(104,111,108,101,95,119,95,52,55,0);
       let dependenciesf = false;
      for (let r = 0; r < 3; r++) {
         dependenciesf = dependenciesf || videovar_.length < 83;
      }
      let delegate_ohC = videovar_ == String.fromCharCode(49,53,101,0);
      do {
          let mbbannerV = 2.0;
          let iconbackwhite2 = String.fromCharCode(110,95,55,56,95,109,101,109,109,101,116,104,111,100,115,0);
          let benefitG: Array<any> = [960, 38];
          let logouserd = 5;
          let bing0 = 4.0;
         videovar_ += `${iconbackwhite2.length}`;
         mbbannerV += parseInt(`${bing0}`);
         iconbackwhite2 += `${logouserd}`;
         benefitG.push(2 % (Math.max(8, parseInt(`${mbbannerV}`))));
         logouserd -= logouserd >> (Math.min(4, Math.abs(2)));
         if (delegate_ohC) {
            break;
         }
      } while (delegate_ohC && (dependenciesf || 4 < videovar_.length));
      while (videovar_.endsWith(`${dependenciesf}`)) {
         videovar_ += `${((dependenciesf ? 4 : 5) | 3)}`;
         break;
      }
      while (dependenciesf) {
         videovar_ += "3";
         break;
      }
          let predictionW = String.fromCharCode(113,95,55,56,95,98,117,102,108,101,110,0);
          let applicationR = 0.0;
          let actionsd: Array<any> = [String.fromCharCode(112,111,115,116,101,110,99,111,100,101,95,98,95,51,53,0), String.fromCharCode(105,100,101,110,116,105,102,101,114,95,114,95,51,48,0)];
         dependenciesf = applicationR >= parseFloat(`${actionsd.length}`);
         predictionW = "1";
         applicationR -= parseFloat(`${predictionW.length}`);
      for (let l = 0; l < 2; l++) {
          let iconsaveimageT = 3.0;
          let gmailC = String.fromCharCode(105,112,112,108,101,95,109,95,57,54,0);
         videovar_ = `${videovar_.length}`;
         iconsaveimageT /= Math.max(parseFloat(`${1}`), 3);
         gmailC += `${gmailC.length / 1}`;
      }
      reactnavigationl = 83 >= backw.length && libavformatT.length >= 83;

    dispatch(showLoginAction());
  }

  const onPressAds = () => {
       let scoref = String.fromCharCode(116,97,114,103,97,95,54,95,56,48,0);
    let libglogj = String.fromCharCode(109,105,120,95,105,95,52,52,0);
    let iconrefreshs = false;
    let pathv = 0.0;
    let rewardvideor = true;
    let launchc = String.fromCharCode(111,95,57,52,95,115,112,108,105,116,116,101,114,0);
    let klevinT = 3.0;
    let movies3 = String.fromCharCode(115,119,105,122,122,108,101,100,95,106,95,55,53,0);
    let carousel5 = false;
    let time_t3S = 0;
    let benefitK: Array<any> = [35, 169, 384];
    let filter1 = 3.0;
    let basketbally = 2.0;
    let xvodW = 5.0;
   let libavutilS = rewardvideor ? !rewardvideor : rewardvideor;
   do {
      rewardvideor = movies3 == libglogj;
      if (libavutilS) {
         break;
      }
   } while ((benefitK.length == 3) && libavutilS);
      movies3 = `${(scoref == String.fromCharCode(87,0) ? time_t3S : scoref.length)}`;
   for (let k = 0; k < 2; k++) {
      libglogj = `${movies3.length}`;
   }
      libglogj += `${launchc.length % 2}`;
      movies3 = `${benefitK.length & 1}`;
      launchc += "3";
      scoref = `${(launchc == String.fromCharCode(111,0) ? launchc.length : (iconrefreshs ? 5 : 1))}`;
   while (3.23 < filter1) {
       let champion4 = String.fromCharCode(111,95,51,95,97,102,116,101,114,0);
       let type_fX = 5.0;
       let historyO = 5;
       let scrollviewl = 2.0;
       let main_si = 3.0;
         scrollviewl *= parseFloat(`${1 >> (Math.min(Math.abs(historyO), 4))}`);
      if (1 > (historyO + 1) && 5.64 > (type_fX * parseFloat(`${historyO}`))) {
         type_fX /= Math.max(parseFloat(`${2 / (Math.max(10, parseInt(`${type_fX}`)))}`), 2);
      }
      if ((1 % (Math.max(8, historyO))) == 3) {
          let middlebrightnessp = String.fromCharCode(101,114,114,111,114,115,95,102,95,53,57,0);
         historyO ^= 3;
         middlebrightnessp = `${middlebrightnessp.length}`;
      }
      for (let p = 0; p < 1; p++) {
         historyO &= parseInt(`${main_si}`);
      }
          let eventX = 3.0;
          let backU = 4.0;
         type_fX += parseFloat(`${2}`);
         eventX += parseInt(`${backU}`);
         main_si -= historyO + 1;
          let watchY = false;
          let iconrefreshc = String.fromCharCode(109,97,120,113,95,55,95,55,0);
          let videoo = false;
         main_si /= Math.max(parseInt(`${scrollviewl}`), 3);
         watchY = iconrefreshc.length > 87;
         iconrefreshc = `${(2 + (videoo ? 5 : 2))}`;
         videoo = (watchY ? !videoo : !watchY);
          let backicon8 = 0.0;
          let lnewarchdefaults7 = String.fromCharCode(101,95,54,57,95,99,114,105,116,105,99,97,108,0);
          let zhengpianG = String.fromCharCode(110,111,105,110,100,101,120,95,117,95,50,56,0);
         scrollviewl += parseFloat(`${lnewarchdefaults7.length - 2}`);
         backicon8 += 2 / (Math.max(7, zhengpianG.length));
         lnewarchdefaults7 += `${parseInt(`${backicon8}`) % 2}`;
         zhengpianG += `${parseInt(`${backicon8}`)}`;
          let settingW = 3.0;
         historyO *= 3;
         settingW += parseFloat(`${parseInt(`${settingW}`)}`);
         main_si += 3 * parseInt(`${type_fX}`);
      let imagesr = champion4.length >= 8981350;
      do {
         champion4 = `${parseInt(`${main_si}`)}`;
         if (imagesr) {
            break;
         }
      } while (((parseFloat(`${champion4.length}`) / (Math.max(10, type_fX))) >= 3.1 && (5 / (Math.max(7, champion4.length))) >= 5) && imagesr);
         main_si *= 1 << (Math.min(Math.abs(parseInt(`${scrollviewl}`)), 4));
         type_fX *= parseFloat(`${1}`);
         champion4 += `${1 << (Math.min(Math.abs(parseInt(`${type_fX}`)), 2))}`;
          let shielddonek = 0;
         type_fX -= parseFloat(`${parseInt(`${scrollviewl}`)}`);
         shielddonek <<= Math.min(5, Math.abs(shielddonek << (Math.min(Math.abs(1), 2))));
      filter1 *= parseFloat(`${scoref.length}`);
      break;
   }
   let floatingq = 9851149.0 >= pathv;
   do {
       let libavcodecS = String.fromCharCode(117,118,114,100,95,99,95,53,49,0);
       let roomn: Array<any> = [568, 156, 498];
       let layoutQ: Map<any, any> = new Map([[String.fromCharCode(118,95,52,48,95,100,111,108,108,97,114,0),969], [String.fromCharCode(121,95,49,48,95,106,111,98,115,0),700], [String.fromCharCode(103,101,116,108,97,100,100,114,115,95,121,95,52,56,0),718]]);
          let awayteamfieldu = 3.0;
          let related1 = 1;
          let greyticky = true;
         roomn = [roomn.length >> (Math.min(libavcodecS.length, 2))];
         awayteamfieldu /= Math.max((parseFloat(`${related1 >> (Math.min(1, Math.abs((greyticky ? 2 : 3))))}`)), 3);
         related1 >>= Math.min(Math.abs(parseInt(`${awayteamfieldu}`) << (Math.min(4, Math.abs(related1)))), 1);
         greyticky = 62 > related1 || !greyticky;
          let predictionwinn = String.fromCharCode(122,105,103,122,97,103,95,120,95,55,48,0);
          let mailf = 1;
          let matchesX = String.fromCharCode(115,101,110,115,111,114,95,97,95,54,57,0);
         roomn = [predictionwinn.length + layoutQ.size];
         predictionwinn = `${matchesX.length & mailf}`;
         mailf -= matchesX.length;
         roomn = [2];
         layoutQ.set(`${roomn.length}`, 1);
         roomn = [(libavcodecS == String.fromCharCode(78,0) ? libavcodecS.length : roomn.length)];
         libavcodecS = `${libavcodecS.length | layoutQ.size}`;
      while (Array.from(layoutQ.values()).includes(roomn.length)) {
          let stringsN = String.fromCharCode(100,95,51,55,95,105,115,105,0);
          let fieldS = 1.0;
          let mbbannerI: Array<any> = [871, 546];
         layoutQ.set(stringsN, stringsN.length);
         fieldS -= parseFloat(`${mbbannerI.length / 3}`);
         mbbannerI = [mbbannerI.length];
         break;
      }
         roomn.push((libavcodecS == String.fromCharCode(107,0) ? roomn.length : libavcodecS.length));
          let commonO: Array<any> = [368, 971, 304];
          let roomK = false;
         roomn.push(roomn.length + 3);
         commonO = [1];
         roomK = commonO.length <= 61;
      pathv *= parseFloat(`${3 | roomn.length}`);
      if (floatingq) {
         break;
      }
   } while ((pathv >= 2.83) && floatingq);
      scoref += `${parseInt(`${klevinT}`) << (Math.min(3, Math.abs(1)))}`;
       let largebrightnessm = String.fromCharCode(114,112,114,111,98,101,95,113,95,56,50,0);
       let heartR = 2.0;
       let vipsportl: Map<any, any> = new Map([[String.fromCharCode(117,95,50,56,95,115,101,114,105,97,108,0),String.fromCharCode(99,111,110,110,101,99,116,115,95,108,95,52,51,0)], [String.fromCharCode(103,95,57,50,95,100,105,97,103,114,97,109,0),String.fromCharCode(97,95,55,57,95,100,112,110,97,109,101,0)], [String.fromCharCode(113,95,54,52,95,115,104,101,108,108,0),String.fromCharCode(116,104,117,109,98,115,117,112,95,107,95,54,56,0)]]);
         largebrightnessm += `${vipsportl.size * parseInt(`${heartR}`)}`;
         heartR += 2;
          let holderd = true;
          let mintegralH: Map<any, any> = new Map([[String.fromCharCode(111,95,55,53,95,117,110,98,105,97,115,0),610], [String.fromCharCode(109,97,116,99,104,95,101,95,56,54,0),993], [String.fromCharCode(114,101,99,111,114,100,101,100,95,106,95,49,55,0),886]]);
         largebrightnessm = `${vipsportl.size}`;
         holderd = mintegralH.size > 93;
         mintegralH.set(`${holderd}`, ((holderd ? 3 : 4) ^ mintegralH.size));
       let sigmobq = 4.0;
       let tempnodatagif0 = 3.0;
      for (let d = 0; d < 3; d++) {
         vipsportl.set(`${heartR}`, 3 >> (Math.min(2, Math.abs(parseInt(`${heartR}`)))));
      }
       let n_counto: Array<any> = [String.fromCharCode(102,105,110,97,108,105,115,101,114,95,101,95,56,49,0), String.fromCharCode(119,95,52,57,95,99,108,111,115,101,115,0)];
       let giflivestreamingP: Array<any> = [184, 676, 699];
      for (let l = 0; l < 3; l++) {
          let castingj = 3.0;
          let tailn = false;
          let policy0 = 2;
          let fullu = true;
          let china2 = String.fromCharCode(113,95,57,52,95,121,101,108,108,111,119,0);
         heartR *= 3;
         castingj /= Math.max(((fullu ? 5 : 4) >> (Math.min(Math.abs(1), 3))), 1);
         tailn = (!fullu ? tailn : fullu);
         policy0 /= Math.max(3, 2 ^ policy0);
         china2 += `${((tailn ? 3 : 1) / (Math.max(policy0, 1)))}`;
      }
         n_counto.push(1 + parseInt(`${tempnodatagif0}`));
      let infoY = 5213328.0 <= tempnodatagif0;
      do {
         tempnodatagif0 -= parseFloat(`${2}`);
         if (infoY) {
            break;
         }
      } while (infoY && ((heartR / (Math.max(4, 4))) < 5.53));
      pathv *= (parseFloat(`${3 + (rewardvideor ? 5 : 5)}`));
   let iconwatchnowy = iconrefreshs ? !iconrefreshs : iconrefreshs;
   do {
      iconrefreshs = carousel5 || movies3.length > 84;
      if (iconwatchnowy) {
         break;
      }
   } while ((!iconrefreshs) && iconwatchnowy);
   while (rewardvideor) {
      rewardvideor = movies3.length <= 55;
      break;
   }
      benefitK.push(((iconrefreshs ? 1 : 3)));
   for (let n = 0; n < 2; n++) {
      klevinT /= Math.max(4, 3);
   }
   let libswresamplej = 6845755 >= movies3.length;
   do {
      movies3 += "1";
      if (libswresamplej) {
         break;
      }
   } while (libswresamplej && (3 < (movies3.length | 3) && 5.30 < (klevinT + movies3.length)));
   for (let o = 0; o < 1; o++) {
      time_t3S /= Math.max(1, movies3.length);
   }
       let rncorek = false;
          let customW = false;
          let ksadr = 2.0;
         rncorek = !rncorek;
         customW = !customW;
         ksadr -= (parseInt(`${ksadr}`) << (Math.min(4, Math.abs((customW ? 4 : 4)))));
          let switch_gR = true;
          let cornerA = String.fromCharCode(98,95,56,53,95,112,97,110,101,115,0);
         rncorek = switch_gR;
         cornerA = `${cornerA.length}`;
      let benefitf = rncorek ? !rncorek : rncorek;
      do {
         rncorek = rncorek && rncorek;
         if (benefitf) {
            break;
         }
      } while ((rncorek) && benefitf);
      iconrefreshs = carousel5;
      time_t3S *= 3 - libglogj.length;
   while (klevinT < benefitK.length) {
      klevinT /= Math.max((launchc == String.fromCharCode(51,0) ? launchc.length : benefitK.length), 2);
      break;
   }
   let floatingo = 9546378 >= libglogj.length;
   do {
      libglogj = `${3 >> (Math.min(Math.abs(time_t3S), 3))}`;
      if (floatingo) {
         break;
      }
   } while ((iconrefreshs) && floatingo);
   for (let u = 0; u < 3; u++) {
       let livenodatabgimgr = 3;
       let classes2 = String.fromCharCode(111,99,116,112,111,105,110,116,95,55,95,57,48,0);
         classes2 += `${3 - livenodatabgimgr}`;
         classes2 += `${livenodatabgimgr}`;
         livenodatabgimgr |= (String.fromCharCode(89,0) == classes2 ? livenodatabgimgr : classes2.length);
      if ((classes2.length % (Math.max(4, 6))) == 2 || 3 == (4 % (Math.max(1, classes2.length)))) {
         livenodatabgimgr ^= livenodatabgimgr;
      }
      while (3 > (2 + classes2.length)) {
          let orangeclocke = 2;
          let langkeys: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,120,112,95,114,95,56,53,0),443], [String.fromCharCode(99,95,49,50,95,100,105,115,112,111,115,97,98,108,101,0),299], [String.fromCharCode(122,95,49,48,48,95,114,100,99,111,115,116,0),658]]);
         livenodatabgimgr &= classes2.length * 2;
         orangeclocke -= orangeclocke;
         langkeys.set(`${orangeclocke}`, 2 >> (Math.min(2, Math.abs(orangeclocke))));
         break;
      }
      for (let w = 0; w < 2; w++) {
         classes2 = `${livenodatabgimgr}`;
      }
      movies3 = `${(parseInt(`${klevinT}`) - (iconrefreshs ? 1 : 4))}`;
   }
      movies3 = `${(String.fromCharCode(83,0) == launchc ? launchc.length : parseInt(`${filter1}`))}`;
   for (let y = 0; y < 2; y++) {
       let referrerG = String.fromCharCode(97,95,49,48,95,116,100,115,102,0);
       let x_positiony = String.fromCharCode(99,104,115,99,97,108,101,95,110,95,53,50,0);
       let sortZ = 3;
       let nextZ = true;
         sortZ *= ((nextZ ? 2 : 2) - x_positiony.length);
      for (let s = 0; s < 1; s++) {
         nextZ = 8 == x_positiony.length;
      }
       let predictionwina = 1.0;
       let textA = 0.0;
      let imagemanagerC = nextZ ? !nextZ : nextZ;
      do {
          let mintegralw = String.fromCharCode(117,95,50,54,95,121,117,118,112,99,0);
          let whiteanimationliveR = String.fromCharCode(105,95,51,49,95,99,111,99,111,97,0);
          let less_ = 0.0;
         nextZ = 51.88 >= predictionwina;
         mintegralw += `${parseInt(`${less_}`) | mintegralw.length}`;
         whiteanimationliveR += `${parseInt(`${less_}`) / (Math.max(whiteanimationliveR.length, 2))}`;
         if (imagemanagerC) {
            break;
         }
      } while (imagemanagerC && (4 > referrerG.length));
         referrerG += `${sortZ & x_positiony.length}`;
      let resendp = 5374853 >= sortZ;
      do {
         sortZ %= Math.max(2, 2);
         if (resendp) {
            break;
         }
      } while (resendp && (2 >= (sortZ + 3)));
         referrerG += `${parseInt(`${predictionwina}`)}`;
      while (nextZ) {
         nextZ = !nextZ;
         break;
      }
      let launcherC = sortZ <= 7011602;
      do {
         sortZ *= ((nextZ ? 3 : 2) % (Math.max(parseInt(`${predictionwina}`), 9)));
         if (launcherC) {
            break;
         }
      } while ((x_positiony.length <= sortZ) && launcherC);
         nextZ = sortZ > parseInt(`${textA}`);
      if (nextZ) {
         sortZ &= 3;
      }
      for (let e = 0; e < 3; e++) {
         referrerG = `${x_positiony.length ^ 1}`;
      }
      rewardvideor = movies3.length > 76;
   }
      movies3 += `${parseInt(`${filter1}`) - 3}`;
   while (!carousel5) {
      carousel5 = !rewardvideor || movies3.length <= 80;
      break;
   }
      launchc = `${3 % (Math.max(8, movies3.length))}`;

    setShowAdOverlay(true);
  };

  const onCloseAdOverlay = () => {
       let iconbellactivet: Map<any, any> = new Map([[String.fromCharCode(108,111,103,103,105,110,103,95,122,95,53,54,0),372], [String.fromCharCode(113,95,56,56,95,101,120,112,108,111,100,105,110,103,0),203], [String.fromCharCode(115,101,114,105,97,108,105,122,97,98,108,101,95,118,95,57,57,0),115]]);
    let controla = String.fromCharCode(101,95,57,50,95,116,101,120,116,0);
    let singaporey = String.fromCharCode(98,95,56,56,95,115,99,104,101,109,101,115,0);
    let materialA = 4.0;
    let scoreb = 0;
    let filed8 = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,116,95,50,54,0);
    let country1: Map<any, any> = new Map([[String.fromCharCode(97,95,51,57,95,108,117,104,110,0),449], [String.fromCharCode(103,114,111,119,105,110,103,95,51,95,50,54,0),485]]);
    let project5 = String.fromCharCode(115,95,57,52,95,103,101,110,99,102,103,115,0);
    let mbnativeadvanced1 = String.fromCharCode(115,95,50,54,95,115,105,110,102,0);
    let libffmpegkity = 0;
    let videojst = 2;
    let historyp = String.fromCharCode(117,95,55,57,95,99,114,117,110,0);
    let window_nk = 3;
    let window_99e = 0.0;
    let benefitR = String.fromCharCode(103,95,54,95,112,111,112,117,112,115,0);
    let gesturesk = 2.0;
      videojst &= singaporey.length << (Math.min(Math.abs(3), 3));
      historyp = "3";
   for (let r = 0; r < 2; r++) {
       let mimoT = false;
      let ajaxi = mimoT ? !mimoT : mimoT;
      do {
          let redirect3 = 3.0;
          let downloadingX = 0;
          let china7 = 5.0;
          let reactnavigationN: Map<any, any> = new Map([[String.fromCharCode(108,95,53,56,95,115,116,97,114,116,0),String.fromCharCode(102,117,108,108,95,99,95,50,55,0)], [String.fromCharCode(99,117,100,97,95,99,95,57,52,0),String.fromCharCode(104,95,56,49,95,109,112,100,98,0)], [String.fromCharCode(103,95,53,53,95,101,108,105,115,105,111,110,0),String.fromCharCode(121,95,52,49,95,108,111,117,100,110,101,115,115,0)]]);
         mimoT = 75.23 <= redirect3;
         redirect3 -= parseFloat(`${downloadingX | 1}`);
         downloadingX &= 1;
         china7 /= Math.max(1, downloadingX);
         reactnavigationN = new Map([[`${downloadingX}`, parseInt(`${china7}`) * 3]]);
         if (ajaxi) {
            break;
         }
      } while ((!mimoT) && ajaxi);
      while (!mimoT) {
         mimoT = !mimoT;
         break;
      }
      for (let m = 0; m < 1; m++) {
         mimoT = !mimoT;
      }
      historyp = `${((mimoT ? 5 : 5) - 3)}`;
   }
   let appleN = 6682650.0 <= materialA;
   do {
       let exampleimageW = String.fromCharCode(97,99,99,101,115,115,101,100,95,97,95,53,48,0);
         exampleimageW += "3";
          let grays: Map<any, any> = new Map([[String.fromCharCode(118,95,56,51,95,98,110,100,101,99,0),802], [String.fromCharCode(111,95,49,53,95,102,111,114,103,111,116,116,101,110,0),706], [String.fromCharCode(114,95,49,53,95,104,101,108,112,0),683]]);
          let goalR: Map<any, any> = new Map([[String.fromCharCode(106,111,98,113,95,49,95,51,57,0),609], [String.fromCharCode(115,101,113,118,105,100,101,111,95,111,95,50,54,0),449], [String.fromCharCode(105,95,52,55,95,100,111,119,110,115,99,97,108,101,0),521]]);
          let libavcodecw = 2;
         exampleimageW = "3";
         grays = new Map([[`${grays.size}`, grays.size + 3]]);
         goalR.set(`${libavcodecw}`, grays.size >> (Math.min(1, Math.abs(libavcodecw))));
         exampleimageW += `${(exampleimageW == String.fromCharCode(67,0) ? exampleimageW.length : exampleimageW.length)}`;
      materialA /= Math.max(project5.length - 2, 5);
      if (appleN) {
         break;
      }
   } while (appleN && ((historyp.length / (Math.max(5, materialA))) == 4.93 && 2 == (parseInt(`${materialA}`) / (Math.max(4, historyp.length)))));
   for (let r = 0; r < 3; r++) {
      libffmpegkity >>= Math.min(Math.abs(iconbellactivet.size % (Math.max(2, 9))), 2);
   }
   for (let q = 0; q < 1; q++) {
      historyp += `${parseInt(`${materialA}`) & 1}`;
   }
   let bridgeW = libffmpegkity >= 6115255;
   do {
      libffmpegkity *= libffmpegkity * mbnativeadvanced1.length;
      if (bridgeW) {
         break;
      }
   } while (((libffmpegkity << (Math.min(Math.abs(1), 2))) < 3) && bridgeW);
       let toponP = false;
          let matchN = false;
         toponP = !matchN;
         toponP = (!toponP ? !toponP : toponP);
         toponP = toponP && toponP;
      historyp = `${project5.length ^ controla.length}`;
       let codeJ = 4;
       let zhengpianA: Map<any, any> = new Map([[String.fromCharCode(99,95,55,48,95,100,117,114,97,116,105,111,110,0),String.fromCharCode(116,114,97,110,95,117,95,52,49,0)], [String.fromCharCode(108,101,118,101,108,95,116,95,57,51,0),String.fromCharCode(101,120,116,114,97,102,105,101,108,100,95,116,95,53,55,0)]]);
       let bggradiente = String.fromCharCode(100,114,97,105,110,95,106,95,49,56,0);
      let greyR = 5957273 <= zhengpianA.size;
      do {
         zhengpianA.set(bggradiente, 2);
         if (greyR) {
            break;
         }
      } while (((zhengpianA.size & bggradiente.length) == 3) && greyR);
         codeJ ^= (String.fromCharCode(88,0) == bggradiente ? codeJ : bggradiente.length);
       let actionR = true;
       let disconnectedF = String.fromCharCode(100,101,108,97,121,115,95,102,95,57,51,0);
         actionR = disconnectedF.length > 63;
         codeJ <<= Math.min(Math.abs((String.fromCharCode(86,0) == disconnectedF ? disconnectedF.length : bggradiente.length)), 3);
         zhengpianA.set(disconnectedF, ((actionR ? 2 : 2)));
         bggradiente = "1";
      while (!actionR || 5 == bggradiente.length) {
         bggradiente += `${bggradiente.length ^ zhengpianA.size}`;
         break;
      }
      country1.set(controla, 2);
   if (2 >= (4 << (Math.min(5, controla.length))) && 1.32 >= (materialA + controla.length)) {
      controla += `${1 - project5.length}`;
   }
   if (controla.length >= 1) {
      controla = "2";
   }
      libffmpegkity <<= Math.min(2, Math.abs(3 & project5.length));
      materialA *= 3 % (Math.max(8, libffmpegkity));
       let downloaded8: Map<any, any> = new Map([[String.fromCharCode(102,95,56,48,95,113,100,109,99,0),779], [String.fromCharCode(120,95,51,53,95,114,111,116,97,116,105,111,110,0),585]]);
       let fieldh = String.fromCharCode(116,105,109,101,95,109,95,55,50,0);
       let iconrefreshV = String.fromCharCode(116,95,55,53,95,100,114,111,112,120,0);
         downloaded8 = new Map([[`${downloaded8.size}`, 3]]);
      if (!fieldh.endsWith(`${downloaded8.size}`)) {
          let referrerx = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,51,95,54,52,0);
          let progressv = 4.0;
          let libavcodecg = String.fromCharCode(109,117,108,114,101,115,95,51,95,54,54,0);
         downloaded8 = new Map([[referrerx, 3 | referrerx.length]]);
         progressv += 3 >> (Math.min(5, libavcodecg.length));
         libavcodecg = `${(String.fromCharCode(98,0) == libavcodecg ? libavcodecg.length : parseInt(`${progressv}`))}`;
      }
         fieldh = `${3 % (Math.max(10, fieldh.length))}`;
      let tempnodatagifi = 5559569 >= downloaded8.size;
      do {
         downloaded8 = new Map([[`${downloaded8.size}`, 1]]);
         if (tempnodatagifi) {
            break;
         }
      } while (((fieldh.length + 2) > 4) && tempnodatagifi);
      for (let x = 0; x < 2; x++) {
         fieldh = `${fieldh.length >> (Math.min(Math.abs(2), 3))}`;
      }
      let weatheru = String.fromCharCode(121,117,55,116,117,0) == fieldh;
      do {
         fieldh += `${fieldh.length}`;
         if (weatheru) {
            break;
         }
      } while ((!fieldh.startsWith(`${downloaded8.size}`)) && weatheru);
         fieldh += `${fieldh.length + iconrefreshV.length}`;
         downloaded8.set(`${fieldh}`, 3 >> (Math.min(4, Math.abs(downloaded8.size))));
          let calendarI = String.fromCharCode(120,95,51,95,100,100,115,116,0);
          let colorsf = String.fromCharCode(112,117,116,115,95,97,95,50,56,0);
          let loadingr = 4.0;
         fieldh = `${downloaded8.size >> (Math.min(fieldh.length, 4))}`;
         calendarI += `${colorsf.length * 1}`;
         colorsf = `${parseInt(`${loadingr}`)}`;
         loadingr *= colorsf.length >> (Math.min(1, Math.abs(parseInt(`${loadingr}`))));
      mbnativeadvanced1 += "3";
      iconbellactivet.set(`${scoreb}`, singaporey.length);
   let eventsplashA = 8000745 >= mbnativeadvanced1.length;
   do {
      mbnativeadvanced1 += `${(project5 == String.fromCharCode(70,0) ? scoreb : project5.length)}`;
      if (eventsplashA) {
         break;
      }
   } while ((project5.length >= mbnativeadvanced1.length) && eventsplashA);
   let appsU = 7468302 <= singaporey.length;
   do {
      singaporey += "2";
      if (appsU) {
         break;
      }
   } while (appsU && (2 < filed8.length));
       let libjsinspectorc = 5;
      let abidetectm = 7867779 >= libjsinspectorc;
      do {
         libjsinspectorc ^= libjsinspectorc;
         if (abidetectm) {
            break;
         }
      } while (abidetectm && (2 <= libjsinspectorc));
          let confirmationL = 2.0;
          let anneru = String.fromCharCode(115,112,97,99,101,100,95,50,95,57,57,0);
         libjsinspectorc -= (String.fromCharCode(84,0) == anneru ? parseInt(`${confirmationL}`) : anneru.length);
          let baselineL: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,115,105,110,103,95,117,95,49,51,0),901], [String.fromCharCode(108,95,57,49,95,111,119,110,0),969]]);
         libjsinspectorc <<= Math.min(Math.abs(baselineL.size | 3), 3);
      controla = `${libffmpegkity}`;
   while ((videojst + libffmpegkity) < 2) {
      libffmpegkity -= controla.length;
      break;
   }
      country1 = new Map([[project5, 1 + parseInt(`${materialA}`)]]);
       let mbjscommon5 = 0;
       let schedule3 = 1.0;
       let main_mx = 5;
      if (4 == main_mx) {
          let final_yG: Map<any, any> = new Map([[String.fromCharCode(98,95,54,51,0),String.fromCharCode(102,95,57,53,95,115,97,102,101,115,116,97,99,107,0)], [String.fromCharCode(115,101,116,95,121,95,52,52,0),String.fromCharCode(112,114,101,118,118,101,99,95,99,95,53,48,0)]]);
          let readJ: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,110,116,115,115,0),904], [String.fromCharCode(116,95,53,56,95,100,101,116,101,99,116,99,108,111,115,101,0),605], [String.fromCharCode(114,101,100,100,105,116,95,99,95,54,50,0),55]]);
         mbjscommon5 -= final_yG.size;
         final_yG = new Map([[`${readJ.size}`, 2]]);
         readJ = new Map([[`${readJ.size}`, 3]]);
      }
      if (mbjscommon5 == schedule3) {
          let weiboZ = 3.0;
          let recommendationZ = String.fromCharCode(113,117,101,117,101,115,95,122,95,51,0);
          let stats7 = 2.0;
         mbjscommon5 *= parseInt(`${stats7}`);
         weiboZ *= parseFloat(`${parseInt(`${weiboZ}`) & 2}`);
         recommendationZ = `${recommendationZ.length + parseInt(`${weiboZ}`)}`;
         stats7 += recommendationZ.length + parseInt(`${weiboZ}`);
      }
         schedule3 *= 2 + main_mx;
      let light0 = main_mx >= 6912548;
      do {
          let const_ubL = String.fromCharCode(110,95,55,56,95,97,117,116,111,103,101,110,0);
          let type_4x = 2.0;
          let turnD = String.fromCharCode(99,108,111,115,101,115,95,101,95,50,51,0);
          let time_o6 = 3.0;
          let spinner1 = true;
         main_mx *= const_ubL.length;
         const_ubL = `${parseInt(`${type_4x}`) / 3}`;
         type_4x -= parseInt(`${type_4x}`);
         turnD += `${3 + parseInt(`${type_4x}`)}`;
         time_o6 *= parseFloat(`${turnD.length + 3}`);
         spinner1 = (parseInt(`${type_4x}`) * turnD.length) > 80;
         if (light0) {
            break;
         }
      } while (light0 && (5 >= (mbjscommon5 | main_mx)));
       let rankz = 4.0;
         schedule3 /= Math.max(4, 2);
          let klevinX: Array<any> = [395, 781, 206];
          let soundq: Array<any> = [879, 429, 575];
         rankz /= Math.max(3 << (Math.min(1, soundq.length)), 1);
         klevinX = [klevinX.length | klevinX.length];
         soundq.push(klevinX.length >> (Math.min(Math.abs(2), 2)));
       let moduleU = false;
      let turndownd = 4961494 >= mbjscommon5;
      do {
         mbjscommon5 |= ((moduleU ? 1 : 1) & parseInt(`${rankz}`));
         if (turndownd) {
            break;
         }
      } while (turndownd && ((3 ^ mbjscommon5) <= 1));
      historyp = `${(String.fromCharCode(115,0) == project5 ? project5.length : videojst)}`;
      historyp = `${iconbellactivet.size + 2}`;
   while (3 >= (5 | scoreb) || (5 | scoreb) >= 5) {
       let vipsportc: Array<any> = [String.fromCharCode(115,99,114,117,98,98,105,110,103,95,97,95,52,54,0), String.fromCharCode(97,97,99,100,101,99,95,106,95,52,49,0)];
       let arrowrightL = 2;
       let gdtadvR = String.fromCharCode(106,95,54,55,95,115,118,97,114,105,110,116,0);
         vipsportc = [2 ^ gdtadvR.length];
      let iconplayq = arrowrightL <= 6124030;
      do {
         arrowrightL /= Math.max(3, (gdtadvR == String.fromCharCode(76,0) ? gdtadvR.length : vipsportc.length));
         if (iconplayq) {
            break;
         }
      } while ((arrowrightL <= 4) && iconplayq);
      for (let l = 0; l < 2; l++) {
         vipsportc.push(gdtadvR.length);
      }
         vipsportc.push(2);
      for (let b = 0; b < 2; b++) {
         vipsportc.push(vipsportc.length);
      }
         gdtadvR = `${2 ^ gdtadvR.length}`;
      let androidp = 7153001 >= arrowrightL;
      do {
          let reactnavigationS = String.fromCharCode(115,117,99,104,95,52,95,53,53,0);
          let defaultprofilepicF = String.fromCharCode(97,114,103,115,95,56,95,55,53,0);
          let inviteA = 3.0;
         arrowrightL -= parseInt(`${inviteA}`);
         reactnavigationS += `${1 & defaultprofilepicF.length}`;
         defaultprofilepicF = `${reactnavigationS.length % 1}`;
         inviteA /= Math.max(5, reactnavigationS.length << (Math.min(Math.abs(1), 5)));
         if (androidp) {
            break;
         }
      } while (androidp && ((gdtadvR.length / (Math.max(1, arrowrightL))) <= 2 && 5 <= (2 / (Math.max(2, gdtadvR.length)))));
      if (2 >= (arrowrightL + vipsportc.length) || (2 + arrowrightL) >= 4) {
          let utils7 = String.fromCharCode(100,95,51,95,102,114,101,105,114,0);
          let executorK = 2.0;
          let logouserF: Map<any, any> = new Map([[String.fromCharCode(117,95,53,57,95,119,105,110,101,114,114,110,111,0),943], [String.fromCharCode(99,97,108,108,108,95,57,95,51,48,0),724]]);
          let tailo = String.fromCharCode(115,102,114,97,109,101,95,53,95,55,48,0);
          let accepted0 = String.fromCharCode(101,95,55,54,95,102,111,117,114,120,109,0);
         arrowrightL |= 2;
         utils7 += `${1 << (Math.min(5, Math.abs(parseInt(`${executorK}`))))}`;
         executorK /= Math.max(3, (parseFloat(`${String.fromCharCode(116,0) == accepted0 ? accepted0.length : tailo.length}`)));
         logouserF.set(utils7, (String.fromCharCode(118,0) == utils7 ? utils7.length : parseInt(`${executorK}`)));
         tailo += `${(String.fromCharCode(80,0) == accepted0 ? accepted0.length : parseInt(`${executorK}`))}`;
      }
         arrowrightL |= (gdtadvR == String.fromCharCode(84,0) ? arrowrightL : gdtadvR.length);
      scoreb *= (String.fromCharCode(83,0) == gdtadvR ? iconbellactivet.size : gdtadvR.length);
      break;
   }
   let proxyF = 7633138 >= libffmpegkity;
   do {
      libffmpegkity |= iconbellactivet.size >> (Math.min(Math.abs(1), 4));
      if (proxyF) {
         break;
      }
   } while (((1 % (Math.max(3, libffmpegkity))) >= 5) && proxyF);
       let darkr = false;
       let basketballV = 3.0;
          let reactnavigationK = 4.0;
          let gestureg: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,101,100,95,113,95,51,0),863], [String.fromCharCode(102,95,52,55,95,115,116,114,108,99,112,121,0),159], [String.fromCharCode(102,105,108,108,95,56,95,51,52,0),560]]);
         darkr = (((!darkr ? 34 : gestureg.size) - gestureg.size) < 34);
         reactnavigationK /= Math.max(3, parseInt(`${reactnavigationK}`));
          let textO = 1.0;
          let chinaz = String.fromCharCode(113,100,114,97,119,95,102,95,57,56,0);
         darkr = 100.58 == textO;
         textO += (String.fromCharCode(113,0) == chinaz ? chinaz.length : chinaz.length);
          let defaultprofilepic9 = 2.0;
          let iconbackwhitef = String.fromCharCode(109,95,52,56,95,102,116,101,108,108,0);
         darkr = (parseInt(`${defaultprofilepic9}`) - iconbackwhitef.length) >= 49;
       let zhubo2: Array<any> = [209, 736];
       let settingsk: Array<any> = [806, 893, 266];
         zhubo2.push(settingsk.length / 2);
         zhubo2.push(parseInt(`${basketballV}`) - 2);
      singaporey = "2";
   for (let y = 0; y < 2; y++) {
      videojst *= 2;
   }
       let canvasq = String.fromCharCode(110,95,56,48,95,118,112,100,101,99,0);
       let eventr = String.fromCharCode(100,101,116,101,99,116,99,108,111,115,101,95,119,95,55,56,0);
       let calendarR: Array<any> = [310, 326, 487];
         canvasq += `${(eventr == String.fromCharCode(88,0) ? eventr.length : calendarR.length)}`;
      for (let h = 0; h < 1; h++) {
         canvasq += `${calendarR.length}`;
      }
         calendarR.push(canvasq.length % 3);
          let actionRA: Array<any> = [957, 73, 360];
         eventr += `${actionRA.length + 3}`;
      if (canvasq.length > eventr.length) {
         canvasq = `${canvasq.length * calendarR.length}`;
      }
      if (!eventr.includes(`${calendarR.length}`)) {
         eventr += `${3 | canvasq.length}`;
      }
         eventr = `${1 ^ eventr.length}`;
         eventr += `${eventr.length}`;
      if (eventr.length > 3 && canvasq != String.fromCharCode(71,0)) {
          let filledM = 3;
         canvasq += `${2 * eventr.length}`;
         filledM *= filledM;
      }
      controla = `${3 * scoreb}`;

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
