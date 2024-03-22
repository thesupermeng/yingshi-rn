import { useAppDispatch, useAppSelector, useSelector } from '@hooks/mayi_redirect';
import mayi_push from '../../Umeng/mayi_push';
import NetInfo from '@react-native-community/netinfo';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { mayi_InjuryNewinterstitial } from '@redux/reducers/mayi_libavcodec_nativeex';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import { mayi_Small } from '@type/mayi_green';
import { screenModel } from '@type/mayi_libfolly_inouttargetred';
import { API_DOMAIN_TEST } from '@utility/mayi_middleware_apps';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useMinivodQuery } from '@api';
import EighteenPlusControls from '../components/adultVideo/mayi_backicon_play';
import ScreenContainer from '../components/container/mayi_save';
import MiniVideoList from '../components/videoPlayer/WatchAnytime/mayi_material_screen';
import NoConnection from './../components/common/mayi_backicon_penalty';
import { CPressable } from '../components/atoms';
import { showLoginAction } from '@redux/actions/mayi_iconorientation_chatroombackground';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import { mayi_Gift } from '@models/mayi_libjsinspector';
import BecomeVipOverlay from '../components/modal/mayi_apps';
import { ADULT_MODE_PREVIEW_DURATION, MINI_SHOW_LOGIN_NUMBER } from '@utility/mayi_middleware_apps';

type mayi_Math = {
  data: {
    List: Array<mayi_Small>;
  };
};

type mayi_CountQuest = {
  setPause: (pause: boolean) => void;
};

const LIMIT = 300;

function WatchAnytime({ navigation }: BottomTabScreenProps<any>) {
  const isFocused = useIsFocused();
  
  const [isInBackground, setIsInBackground] = useState(false);
  const [flattenedVideos, setFlattenedVideos] = useState(Array<mayi_Small>);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isPressTabScroll, setPressTabScroll] = useState(false);
  const [isShowAdOverlay, setShowAdOverlay] = useState(false);
  const miniVodRef = useRef<mayi_CountQuest>();
  const miniVodListRef = useRef<any>();
  const dispatch = useAppDispatch();

  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer,
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );

  const userState = useSelector<mayi_Baseline>('userReducer');
  const { adultMode: adultModeGlobal, watchAnytimeAdultMode } = screenState;
  const adultMode = watchAnytimeAdultMode;

  const isVip = mayi_Gift.isVip(userState.user);

  const fetchMode = adultMode ? 'adult' : 'normal';
  const isFocusLogin = useRef(false);

  
  
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
  };

  const handleRefresh = useCallback(async () => {
       let sentryK = String.fromCharCode(97,95,50,95,102,108,97,116,116,101,110,101,100,0);
    let minivodf = 5.0;
    let goali: Map<any, any> = new Map([[String.fromCharCode(97,95,54,51,95,115,117,103,103,101,115,116,101,100,0),false ], [String.fromCharCode(106,95,53,48,95,99,111,110,118,101,114,115,105,111,110,0),false ]]);
    let iconscheduleW = false;
    let becomeK = 5.0;
    let clearw = true;
    let libimagepipelineY = String.fromCharCode(119,95,49,53,95,97,108,116,101,114,0);
    let network_ = 2.0;
    let optionsZ = true;
      clearw = sentryK.length <= 79;
   for (let w = 0; w < 2; w++) {
      network_ /= Math.max((parseFloat(`${(iconscheduleW ? 2 : 1) | 3}`)), 4);
   }
   if (1 == (parseInt(`${minivodf}`) / (Math.max(4, libimagepipelineY.length)))) {
       let inviten = 3.0;
       let baseg = String.fromCharCode(97,110,110,117,108,97,114,95,98,95,57,53,0);
       let sportV = false;
         baseg += "3";
       let ajaxK = 3.0;
      if (1.78 > (inviten - 1.1) && inviten > 1.1) {
          let historyb = String.fromCharCode(101,95,52,56,95,98,101,108,111,119,0);
          let faviconn = 4.0;
          let eactx = String.fromCharCode(100,95,55,49,95,121,111,103,97,0);
          let disconnectedI: Array<any> = [970, 145];
          let combinedz: Array<any> = [971, 612, 438];
         inviten /= Math.max(((sportV ? 3 : 2) % 3), 2);
         historyb = `${(String.fromCharCode(66,0) == historyb ? historyb.length : combinedz.length)}`;
         faviconn += historyb.length;
         eactx = `${(String.fromCharCode(52,0) == eactx ? eactx.length : parseInt(`${faviconn}`))}`;
         disconnectedI = [combinedz.length >> (Math.min(eactx.length, 5))];
      }
          let hongkongg = String.fromCharCode(100,95,56,50,95,97,97,99,115,98,114,100,97,116,97,0);
          let fullF = String.fromCharCode(104,97,110,100,108,101,115,95,113,95,50,0);
          let dialog1 = String.fromCharCode(102,95,55,48,0);
         sportV = fullF.length == 2;
         hongkongg = `${dialog1.length - 2}`;
         fullF += "3";
         dialog1 += "3";
          let indexB: Array<any> = [String.fromCharCode(118,95,57,53,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0), String.fromCharCode(100,101,115,99,101,110,116,95,112,95,54,53,0), String.fromCharCode(100,105,97,109,111,110,100,95,103,95,50,57,0)];
          let largesoundb = true;
          let googleO = String.fromCharCode(101,95,57,53,95,114,101,111,112,101,110,0);
         ajaxK -= parseInt(`${ajaxK}`) % 1;
         indexB.push((String.fromCharCode(50,0) == googleO ? googleO.length : (largesoundb ? 3 : 1)));
         largesoundb = indexB.includes(largesoundb);
      minivodf += parseFloat(`${parseInt(`${minivodf}`) / (Math.max(libimagepipelineY.length, 8))}`);
   }
      clearw = (libimagepipelineY.length / (Math.max(7, parseInt(`${network_}`)))) <= 9;
      goali = new Map([[`${becomeK}`, (sentryK == String.fromCharCode(85,0) ? sentryK.length : parseInt(`${becomeK}`))]]);
       let textinputd = 0;
      if (2 > (textinputd ^ 4) || 3 > (textinputd ^ 4)) {
         textinputd ^= 2;
      }
      for (let i = 0; i < 2; i++) {
         textinputd *= textinputd & 2;
      }
         textinputd /= Math.max(5, textinputd);
      network_ *= parseFloat(`${goali.size}`);
       let arrowupT = String.fromCharCode(109,105,100,116,111,110,101,115,95,108,95,49,52,0);
       let componentregistryI = false;
       let statsh: Array<any> = [String.fromCharCode(104,95,48,95,99,111,112,121,0), String.fromCharCode(117,112,99,111,109,105,110,103,95,57,95,51,54,0), String.fromCharCode(101,110,103,108,105,115,104,95,55,95,49,54,0)];
      if ((3 << (Math.min(5, statsh.length))) >= 1) {
         statsh.push(statsh.length);
      }
          let completeY = false;
          let armvaK = String.fromCharCode(122,95,50,49,95,119,97,114,110,105,110,103,0);
          let updatesC = 1.0;
         componentregistryI = 57.71 <= updatesC && !completeY;
         completeY = String.fromCharCode(102,0) == armvaK;
         armvaK = `${armvaK.length}`;
          let referrerW = String.fromCharCode(97,114,112,101,100,95,56,95,57,54,0);
          let scorepopsoundA = 2;
         componentregistryI = 82 < referrerW.length;
         referrerW = `${scorepopsoundA % 1}`;
         scorepopsoundA |= scorepopsoundA;
      if (statsh.length > 2 && 3 > (2 - statsh.length)) {
          let dnewarchdefaultsV = String.fromCharCode(99,117,100,97,95,108,95,54,52,0);
         componentregistryI = (statsh.length >> (Math.min(dnewarchdefaultsV.length, 3))) > 88;
      }
         statsh = [((componentregistryI ? 3 : 1) - 2)];
      if ((arrowupT.length & statsh.length) >= 2) {
         statsh = [(1 - (componentregistryI ? 2 : 2))];
      }
       let fasts: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,120,95,52,54,0),String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,115,95,108,95,54,54,0)], [String.fromCharCode(112,105,110,107,95,114,95,57,56,0),String.fromCharCode(120,95,49,52,95,115,105,122,105,110,103,0)]]);
      while (componentregistryI) {
         fasts = new Map([[`${statsh.length}`, arrowupT.length << (Math.min(Math.abs(1), 1))]]);
         break;
      }
         componentregistryI = !componentregistryI;
      clearw = !iconscheduleW;

    setIsRefreshing(true);

   while (!Array.from(goali.keys()).includes(`${becomeK}`)) {
      becomeK += (parseFloat(`${(iconscheduleW ? 3 : 5) + sentryK.length}`));
      break;
   }
       let statsnomoredatau = String.fromCharCode(105,95,55,57,95,112,114,117,110,101,0);
       let mutedb = true;
      if (statsnomoredatau.length <= 4) {
         statsnomoredatau += `${((mutedb ? 4 : 1))}`;
      }
      let vignettey = mutedb ? !mutedb : mutedb;
      do {
         mutedb = mutedb && statsnomoredatau.length < 9;
         if (vignettey) {
            break;
         }
      } while ((!mutedb) && vignettey);
         mutedb = !mutedb;
      let chatroombackground3 = 8150906 >= statsnomoredatau.length;
      do {
          let countdownf = 0.0;
         statsnomoredatau += "2";
         countdownf /= Math.max(4, parseFloat(`${parseInt(`${countdownf}`) << (Math.min(Math.abs(parseInt(`${countdownf}`)), 1))}`));
         if (chatroombackground3) {
            break;
         }
      } while (chatroombackground3 && (!mutedb));
      while (2 >= statsnomoredatau.length) {
          let pauseP = String.fromCharCode(114,101,99,118,118,95,55,95,52,56,0);
          let nativep = false;
          let arrowrightwithtailY = String.fromCharCode(110,95,53,49,95,99,97,116,0);
          let leagueS = 0.0;
          let privacyH = String.fromCharCode(100,101,99,111,109,112,95,98,95,51,54,0);
         mutedb = ((pauseP.length - (nativep ? 89 : pauseP.length)) < 89);
         nativep = !privacyH.startsWith(`${leagueS}`);
         arrowrightwithtailY = `${arrowrightwithtailY.length % (Math.max(10, parseInt(`${leagueS}`)))}`;
         privacyH += `${1 << (Math.min(3, privacyH.length))}`;
         break;
      }
      while (statsnomoredatau.includes(`${mutedb}`)) {
         mutedb = statsnomoredatau.length >= 92;
         break;
      }
      minivodf /= Math.max(1, (parseFloat(`${libimagepipelineY == String.fromCharCode(90,0) ? libimagepipelineY.length : (clearw ? 4 : 2)}`)));
   if (becomeK == 1.90) {
      becomeK /= Math.max(parseFloat(`${parseInt(`${network_}`)}`), 5);
   }
   if (libimagepipelineY.startsWith(`${minivodf}`)) {
      minivodf += parseFloat(`${parseInt(`${network_}`)}`);
   }
   if (sentryK != String.fromCharCode(57,0)) {
       let runtimeN = 1.0;
       let appsX = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,95,113,95,57,53,0);
       let libavformati = false;
       let iconviewergifw = 0.0;
         appsX += `${((libavformati ? 1 : 4) | parseInt(`${iconviewergifw}`))}`;
       let videobufferloadingS = false;
       let internet_ = true;
      while (appsX.includes(`${videobufferloadingS}`)) {
          let redscoreballL = false;
          let libimagepipelinea = String.fromCharCode(98,102,108,121,95,112,95,56,53,0);
         videobufferloadingS = !appsX.includes(`${videobufferloadingS}`);
         redscoreballL = libimagepipelinea.length >= 18;
         libimagepipelinea += `${(libimagepipelinea == String.fromCharCode(116,0) ? (redscoreballL ? 2 : 3) : libimagepipelinea.length)}`;
         break;
      }
      let const_xv = videobufferloadingS ? !videobufferloadingS : videobufferloadingS;
      do {
         videobufferloadingS = videobufferloadingS && appsX.length > 26;
         if (const_xv) {
            break;
         }
      } while ((!videobufferloadingS) && const_xv);
      while (appsX.length == 5) {
         runtimeN += parseFloat(`${3}`);
         break;
      }
      let notificationd = 6684523 <= appsX.length;
      do {
          let humidity3 = 2;
          let report_ = String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,95,53,95,57,50,0);
         appsX += `${3 << (Math.min(2, Math.abs(parseInt(`${runtimeN}`))))}`;
         humidity3 >>= Math.min(Math.abs(humidity3), 2);
         report_ += `${1 >> (Math.min(5, report_.length))}`;
         if (notificationd) {
            break;
         }
      } while ((1.90 < (4.70 - runtimeN)) && notificationd);
          let umengJ = String.fromCharCode(120,95,51,50,95,110,117,109,0);
          let gemfile1: Array<any> = [199, 767];
          let tempnodataC = 1.0;
         videobufferloadingS = tempnodataC >= 27.50 || iconviewergifw >= 27.50;
         umengJ = `${(umengJ == String.fromCharCode(79,0) ? umengJ.length : gemfile1.length)}`;
         gemfile1.push(umengJ.length ^ 3);
         tempnodataC /= Math.max(parseFloat(`${gemfile1.length / (Math.max(umengJ.length, 9))}`), 1);
         internet_ = !videobufferloadingS && !libavformati;
       let circleQ = String.fromCharCode(112,114,111,103,114,101,115,115,95,106,95,54,56,0);
      while (circleQ.length == 4) {
         circleQ = `${((libavformati ? 4 : 4) - (videobufferloadingS ? 5 : 2))}`;
         break;
      }
       let reactnativejsy = String.fromCharCode(119,114,111,110,103,95,105,95,57,57,0);
       let playlistp = true;
       let mountingC = false;
      libimagepipelineY = `${parseInt(`${runtimeN}`) * sentryK.length}`;
   }
   let submitM = libimagepipelineY.length >= 5907325;
   do {
      libimagepipelineY = "1";
      if (submitM) {
         break;
      }
   } while (submitM && (!libimagepipelineY.endsWith(`${clearw}`)));
       let iconarrowrightwhiteu = String.fromCharCode(100,95,55,55,95,98,105,103,105,110,116,0);
       let predictionbuttonN = String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,105,95,51,54,0);
      while (predictionbuttonN == String.fromCharCode(81,0) || iconarrowrightwhiteu == String.fromCharCode(86,0)) {
          let mbnativeadvanced1: Array<any> = [823, 58];
          let plashq = false;
         iconarrowrightwhiteu = `${iconarrowrightwhiteu.length}`;
         mbnativeadvanced1 = [((plashq ? 4 : 3) % (Math.max(mbnativeadvanced1.length, 2)))];
         plashq = !plashq || mbnativeadvanced1.length <= 59;
         break;
      }
      while (1 > iconarrowrightwhiteu.length) {
         predictionbuttonN = "3";
         break;
      }
      for (let w = 0; w < 3; w++) {
          let libmapbufferjnir: Array<any> = [550, 444];
          let bgvipxvodX: Map<any, any> = new Map([[String.fromCharCode(102,95,57,51,95,100,114,111,112,112,101,114,0),true ], [String.fromCharCode(110,95,49,54,95,102,105,103,117,114,101,0),true ]]);
          let exampleimager = String.fromCharCode(115,99,101,110,97,114,105,111,95,108,95,49,57,0);
         predictionbuttonN = `${iconarrowrightwhiteu.length}`;
         libmapbufferjnir = [(exampleimager == String.fromCharCode(68,0) ? bgvipxvodX.size : exampleimager.length)];
         bgvipxvodX.set(`${exampleimager}`, bgvipxvodX.size >> (Math.min(exampleimager.length, 2)));
      }
         iconarrowrightwhiteu = `${iconarrowrightwhiteu.length >> (Math.min(Math.abs(3), 2))}`;
       let private_c3 = true;
          let minivodz: Array<any> = [198, 649];
         private_c3 = ((minivodz.length * (private_c3 ? minivodz.length : 85)) >= 85);
      network_ *= (parseFloat(`${sentryK == String.fromCharCode(67,0) ? predictionbuttonN.length : sentryK.length}`));
    

      network_ /= Math.max(1, parseFloat(`${libimagepipelineY.length & 3}`));
       let anythinkB = 1;
       let valuesY = 0.0;
       let weatherE: Map<any, any> = new Map([[String.fromCharCode(106,95,50,54,95,100,98,104,97,110,100,108,101,0),true ], [String.fromCharCode(113,95,51,95,115,101,114,118,101,114,0),false ], [String.fromCharCode(112,105,112,101,108,105,110,101,115,95,55,95,52,55,0),false ]]);
         weatherE.set(`${anythinkB}`, 1);
       let traminie = String.fromCharCode(112,97,105,114,119,105,115,101,95,113,95,56,52,0);
         valuesY -= parseFloat(`${2 + parseInt(`${valuesY}`)}`);
         anythinkB %= Math.max(4, weatherE.size);
      while ((anythinkB - 1) > 3 && (anythinkB - 1) > 5) {
         weatherE.set(`${anythinkB}`, anythinkB);
         break;
      }
          let release_8_i: Map<any, any> = new Map([[String.fromCharCode(107,95,57,48,95,97,116,116,101,109,116,115,0),String.fromCharCode(122,95,55,49,95,97,108,108,101,116,0)], [String.fromCharCode(108,95,53,53,95,98,105,113,117,97,100,0),String.fromCharCode(102,105,97,116,95,109,95,51,55,0)]]);
         traminie = "3";
         release_8_i.set(`${release_8_i.size}`, 3);
         traminie += "2";
       let bellU = 1.0;
       let whited = 3.0;
      let condensedQ = valuesY <= 6435529.0;
      do {
          let privilegeQ = 2.0;
         valuesY *= parseFloat(`${parseInt(`${bellU}`)}`);
         privilegeQ -= parseFloat(`${parseInt(`${privilegeQ}`) * 1}`);
         if (condensedQ) {
            break;
         }
      } while ((2 >= (traminie.length * parseInt(`${valuesY}`))) && condensedQ);
      clearw = 99 < anythinkB;
      iconscheduleW = clearw;
      libimagepipelineY = `${((clearw ? 3 : 3) / 2)}`;
   while (!libimagepipelineY.startsWith(`${sentryK.length}`)) {
      libimagepipelineY += `${(parseInt(`${becomeK}`) << (Math.min(1, Math.abs((iconscheduleW ? 2 : 2)))))}`;
      break;
   }
   if (!clearw && sentryK.length < 1) {
      clearw = !clearw;
   }
      clearw = (libimagepipelineY.length ^ goali.size) > 4;
    await refetch();

   for (let i = 0; i < 1; i++) {
      becomeK /= Math.max(3, parseFloat(`${1 | parseInt(`${minivodf}`)}`));
   }
   if (3.77 > (4.26 + becomeK)) {
      clearw = !libimagepipelineY.includes(`${network_}`);
   }
      network_ += (parseFloat(`${(optionsZ ? 5 : 4) ^ (clearw ? 4 : 2)}`));
   let yellow1 = String.fromCharCode(116,112,114,117,101,0) == libimagepipelineY;
   do {
       let playercommonH = 5.0;
       let time_5v = String.fromCharCode(104,95,52,56,95,115,108,97,115,104,0);
       let unselected0 = String.fromCharCode(97,95,55,55,95,105,100,99,116,120,108,108,109,0);
      let dangert = time_5v.length >= 6646146;
      do {
         time_5v = `${1 + unselected0.length}`;
         if (dangert) {
            break;
         }
      } while (dangert && (unselected0.length >= 1));
      while (3 <= (time_5v.length >> (Math.min(Math.abs(1), 4))) && (1 | time_5v.length) <= 4) {
          let promotionN: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,102,111,114,109,97,116,116,101,114,0),846], [String.fromCharCode(117,110,100,111,95,110,95,51,48,0),292], [String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,118,95,49,48,0),800]]);
          let less5 = String.fromCharCode(119,95,55,55,95,100,117,114,98,105,110,0);
          let encryptorc = 1.0;
          let flyerw = String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,110,95,52,56,0);
         time_5v = `${flyerw.length / (Math.max(2, parseInt(`${encryptorc}`)))}`;
         promotionN.set(`${less5}`, promotionN.size);
         less5 = `${3 ^ less5.length}`;
         encryptorc += promotionN.size * less5.length;
         flyerw += `${promotionN.size}`;
         break;
      }
      while (unselected0.length < parseInt(`${playercommonH}`)) {
         playercommonH *= parseFloat(`${unselected0.length}`);
         break;
      }
          let predictiondefaultA = String.fromCharCode(122,95,53,56,95,115,111,109,101,0);
         unselected0 += `${parseInt(`${playercommonH}`) / (Math.max(unselected0.length, 6))}`;
         predictiondefaultA += `${1 | predictiondefaultA.length}`;
          let shielddoneA = true;
          let libavdeviced = 2.0;
         playercommonH *= parseFloat(`${parseInt(`${playercommonH}`)}`);
         shielddoneA = 71.62 == libavdeviced && shielddoneA;
         libavdeviced -= parseFloat(`${parseInt(`${libavdeviced}`) >> (Math.min(4, Math.abs(1)))}`);
         playercommonH -= parseFloat(`${3 % (Math.max(4, parseInt(`${playercommonH}`)))}`);
         unselected0 += `${(unselected0 == String.fromCharCode(83,0) ? unselected0.length : parseInt(`${playercommonH}`))}`;
          let privilegeu = 1.0;
         time_5v = `${parseInt(`${playercommonH}`) + 3}`;
         privilegeu /= Math.max(parseInt(`${privilegeu}`), 5);
          let reactnavigationC = String.fromCharCode(121,95,50,50,0);
          let stationv = String.fromCharCode(114,95,49,53,95,106,119,116,0);
          let calendari = String.fromCharCode(104,95,49,56,95,114,111,98,105,110,0);
         playercommonH += parseFloat(`${calendari.length}`);
         reactnavigationC += `${(reactnavigationC == String.fromCharCode(120,0) ? stationv.length : reactnavigationC.length)}`;
         stationv = `${stationv.length}`;
         calendari += `${stationv.length << (Math.min(reactnavigationC.length, 5))}`;
      libimagepipelineY = "2";
      if (yellow1) {
         break;
      }
   } while ((parseInt(`${becomeK}`) < libimagepipelineY.length) && yellow1);
      becomeK += (parseFloat(`${parseInt(`${becomeK}`) + (optionsZ ? 3 : 5)}`));
   if (iconscheduleW) {
      iconscheduleW = libimagepipelineY == String.fromCharCode(49,0);
   }
   while (2 < sentryK.length) {
       let tail3: Map<any, any> = new Map([[String.fromCharCode(120,95,55,57,95,104,121,98,114,105,100,0),true ], [String.fromCharCode(114,95,51,51,95,121,115,108,111,103,0),true ]]);
       let humidityP = 2.0;
       let issuba = String.fromCharCode(101,98,109,108,110,117,109,95,97,95,52,48,0);
       let homeactivep = String.fromCharCode(115,116,114,105,99,109,112,95,103,95,52,50,0);
      let reddownarrowI = tail3.size >= 5219818;
      do {
          let mailc = String.fromCharCode(119,97,116,99,104,101,100,95,114,95,50,49,0);
         tail3 = new Map([[mailc, homeactivep.length % (Math.max(2, 10))]]);
         if (reddownarrowI) {
            break;
         }
      } while (reddownarrowI && (Array.from(tail3.values()).includes(humidityP)));
          let auto_2w4: Array<any> = [106, 723];
         tail3 = new Map([[issuba, issuba.length]]);
         auto_2w4.push(3);
      for (let s = 0; s < 2; s++) {
         tail3 = new Map([[`${humidityP}`, (String.fromCharCode(65,0) == issuba ? issuba.length : parseInt(`${humidityP}`))]]);
      }
         tail3.set(`${humidityP}`, parseInt(`${humidityP}`));
          let controlV: Array<any> = [String.fromCharCode(112,117,108,108,95,114,95,51,48,0), String.fromCharCode(99,114,108,100,112,95,116,95,55,53,0), String.fromCharCode(105,95,53,95,114,101,113,117,101,115,116,0)];
         homeactivep = `${tail3.size}`;
         controlV.push(controlV.length % (Math.max(3, 7)));
      let grayK = humidityP <= 5232376.0;
      do {
         humidityP -= parseFloat(`${tail3.size + 2}`);
         if (grayK) {
            break;
         }
      } while ((!Array.from(tail3.keys()).includes(`${humidityP}`)) && grayK);
      if (1 > (2 + parseInt(`${humidityP}`)) && (issuba.length | 2) > 5) {
          let gestureJ = true;
          let scorepopsoundN = true;
          let emojiF = false;
          let ajax9 = 3;
         humidityP /= Math.max(5, (parseFloat(`${homeactivep == String.fromCharCode(79,0) ? (scorepopsoundN ? 2 : 5) : homeactivep.length}`)));
         gestureJ = emojiF;
         scorepopsoundN = !emojiF;
         ajax9 ^= (1 % (Math.max(4, (gestureJ ? 2 : 2))));
      }
      while (2.63 == (parseFloat(`${tail3.size}`) * humidityP)) {
          let resultl = String.fromCharCode(98,115,101,114,118,101,114,95,100,95,52,54,0);
          let playY = 4.0;
         humidityP *= parseFloat(`${tail3.size + parseInt(`${playY}`)}`);
         resultl += `${resultl.length ^ resultl.length}`;
         playY /= Math.max(resultl.length >> (Math.min(1, resultl.length)), 3);
         break;
      }
       let tempnodatagif7 = String.fromCharCode(116,95,57,57,95,109,116,105,109,101,0);
      if (1 >= tempnodatagif7.length) {
          let white5 = 5;
         tempnodatagif7 += `${tempnodatagif7.length}`;
         white5 /= Math.max(1, white5 * 1);
      }
      while (issuba != homeactivep) {
         homeactivep += `${tempnodatagif7.length * parseInt(`${humidityP}`)}`;
         break;
      }
         issuba = `${1 - parseInt(`${humidityP}`)}`;
      iconscheduleW = clearw && 56.75 > minivodf;
      break;
   }
    setIsRefreshing(false);

       let playercommonU: Map<any, any> = new Map([[String.fromCharCode(120,95,51,56,95,109,97,107,101,100,112,107,103,0),863], [String.fromCharCode(122,109,98,118,95,109,95,54,0),307]]);
         playercommonU.set(`${playercommonU.size}`, playercommonU.size + playercommonU.size);
         playercommonU.set(`${playercommonU.size}`, playercommonU.size);
       let signinup5 = String.fromCharCode(103,95,57,51,95,116,105,110,116,0);
       let floatingE = String.fromCharCode(99,95,52,95,115,117,103,103,101,115,116,105,111,110,115,0);
      becomeK *= parseFloat(`${parseInt(`${network_}`) / 3}`);
       let with_b4 = String.fromCharCode(113,95,54,55,95,97,114,109,108,105,110,107,0);
      for (let d = 0; d < 3; d++) {
         with_b4 = `${with_b4.length}`;
      }
         with_b4 = `${(with_b4 == String.fromCharCode(101,0) ? with_b4.length : with_b4.length)}`;
      if (with_b4.endsWith(`${with_b4.length}`)) {
          let mbbidd = String.fromCharCode(121,95,57,57,95,116,97,110,0);
          let infov = String.fromCharCode(109,111,117,115,95,109,95,56,57,0);
          let arrowA = String.fromCharCode(110,111,99,97,115,101,95,103,95,56,0);
          let backwardv = String.fromCharCode(105,110,100,101,118,115,95,101,95,53,48,0);
         with_b4 += `${infov.length * mbbidd.length}`;
         mbbidd = `${backwardv.length - arrowA.length}`;
         infov = "1";
         arrowA = `${backwardv.length}`;
      }
      optionsZ = 13.42 <= minivodf;
   while (libimagepipelineY.length >= 5 || !clearw) {
      libimagepipelineY = `${3 - parseInt(`${minivodf}`)}`;
      break;
   }
   let kuaishouu = becomeK <= 4904937.0;
   do {
       let giftq = String.fromCharCode(101,95,57,52,95,119,104,105,116,101,115,112,97,99,101,0);
       let chatp: Array<any> = [254, 709];
       let embedT = String.fromCharCode(112,95,56,53,95,98,100,115,0);
      for (let b = 0; b < 1; b++) {
         embedT = "2";
      }
      let baselinew = chatp.length <= 6399097;
      do {
          let profilepicJ = String.fromCharCode(114,97,119,100,101,99,95,110,95,56,56,0);
          let plashY = false;
          let mergerm: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,101,95,50,95,54,51,0),120], [String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,112,95,52,56,0),908], [String.fromCharCode(115,116,114,101,110,103,116,104,115,95,107,95,57,50,0),892]]);
         chatp = [giftq.length];
         profilepicJ = `${mergerm.size ^ profilepicJ.length}`;
         plashY = profilepicJ.length < 16;
         mergerm = new Map([[`${mergerm.size}`, 2]]);
         if (baselinew) {
            break;
         }
      } while (baselinew && ((chatp.length * giftq.length) < 3));
         giftq += `${(String.fromCharCode(80,0) == giftq ? giftq.length : chatp.length)}`;
      let aboutx = 6868359 >= chatp.length;
      do {
          let shootyesgoalB = String.fromCharCode(118,101,114,108,97,121,95,97,95,52,54,0);
         chatp.push(embedT.length * 1);
         shootyesgoalB += `${2 >> (Math.min(2, shootyesgoalB.length))}`;
         if (aboutx) {
            break;
         }
      } while ((3 < (chatp.length % (Math.max(6, embedT.length)))) && aboutx);
          let refreshborderless6: Array<any> = [String.fromCharCode(100,97,116,97,116,121,112,101,115,95,115,95,57,51,0), String.fromCharCode(120,95,49,50,95,100,105,102,102,115,0)];
          let nalytics2: Array<any> = [793, 494, 710];
          let googlep: Array<any> = [128, 905];
         chatp.push((embedT == String.fromCharCode(70,0) ? embedT.length : chatp.length));
         refreshborderless6 = [2 * googlep.length];
         nalytics2.push(refreshborderless6.length & nalytics2.length);
         googlep = [nalytics2.length + 1];
      if (4 < embedT.length) {
         embedT += `${embedT.length ^ 1}`;
      }
      if (giftq.startsWith(`${chatp.length}`)) {
         chatp.push(1 << (Math.min(2, embedT.length)));
      }
         giftq += `${3 - chatp.length}`;
      if ((embedT.length & chatp.length) > 3) {
          let castb = String.fromCharCode(112,107,101,121,95,109,95,53,57,0);
          let mintegral9: Array<any> = [452, 256];
          let libavformatg: Array<any> = [641, 205];
          let feedbackk = String.fromCharCode(116,117,108,115,105,95,57,95,52,49,0);
         chatp = [1];
         castb = `${castb.length + 3}`;
         mintegral9.push(mintegral9.length);
         libavformatg.push(mintegral9.length / (Math.max(10, libavformatg.length)));
         feedbackk = `${castb.length / (Math.max(2, 9))}`;
      }
      becomeK *= parseFloat(`${parseInt(`${network_}`) * 2}`);
      if (kuaishouu) {
         break;
      }
   } while (((becomeK * network_) < 2.74 && (2.74 * network_) < 4.64) && kuaishouu);
   if (1.71 <= minivodf) {
      optionsZ = !libimagepipelineY.endsWith(`${network_}`);
   }
      libimagepipelineY = `${((optionsZ ? 4 : 4) | (clearw ? 3 : 3))}`;
   while (!iconscheduleW) {
       let half3 = 3.0;
       let moreN: Array<any> = [415, 83];
          let libcrashsdkw: Array<any> = [35, 969, 238];
         moreN = [parseInt(`${half3}`) + moreN.length];
         libcrashsdkw.push(libcrashsdkw.length);
      for (let j = 0; j < 3; j++) {
         moreN = [parseInt(`${half3}`) & moreN.length];
      }
      let build5 = moreN.length <= 6219861;
      do {
          let iconclosewhitebgF = 0.0;
          let yingW = 2.0;
          let libreanimatedh: Array<any> = [685, 283, 90];
          let sans_: Array<any> = [String.fromCharCode(103,95,52,51,95,118,109,100,118,105,100,101,111,0), String.fromCharCode(99,95,53,53,95,100,121,110,97,109,105,99,0)];
          let bellm = String.fromCharCode(100,95,54,51,95,114,115,99,99,0);
         moreN = [sans_.length];
         iconclosewhitebgF *= parseFloat(`${bellm.length ^ parseInt(`${yingW}`)}`);
         yingW += parseFloat(`${libreanimatedh.length}`);
         libreanimatedh.push(parseInt(`${iconclosewhitebgF}`));
         sans_.push(2 | bellm.length);
         if (build5) {
            break;
         }
      } while (((3.33 + half3) >= 1.1 && (1 & moreN.length) >= 5) && build5);
       let iconwechatS = 2;
       let inviteC = 4;
         iconwechatS += 1;
      for (let u = 0; u < 2; u++) {
         half3 *= parseFloat(`${moreN.length * iconwechatS}`);
      }
      iconscheduleW = network_ < 26.41 && optionsZ;
      break;
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
  } = useMinivodQuery(fetchMode, isVip)

  const checkConnection = useCallback(async () => {
       let airbnbstarW: Map<any, any> = new Map([[String.fromCharCode(108,115,112,112,111,108,121,102,95,98,95,51,54,0),String.fromCharCode(101,115,116,114,111,121,95,100,95,56,51,0)], [String.fromCharCode(117,95,55,48,95,100,111,117,98,108,101,0),String.fromCharCode(114,95,52,53,95,97,102,102,105,110,105,116,105,101,115,0)], [String.fromCharCode(114,95,51,56,95,98,101,115,115,101,108,0),String.fromCharCode(102,108,111,97,116,115,95,97,95,51,0)]]);
    let iconcloseD = 2.0;
    let inouttargetredH = String.fromCharCode(101,95,57,56,95,111,100,109,108,0);
    let trophyM = 3.0;
    let singapore1 = String.fromCharCode(116,95,52,55,95,112,105,99,107,109,111,100,101,0);
    let profileactived = 4;
    let screen_: Array<any> = [19, 226, 787];
    let mbnativev = 2.0;
    let bottom4 = String.fromCharCode(102,105,108,101,110,97,109,101,95,106,95,56,51,0);
    let iconqqV: Array<any> = [487, 304];
    let benefit8 = 4;
   if (bottom4.startsWith(`${mbnativev}`)) {
      mbnativev /= Math.max(5, parseInt(`${iconcloseD}`));
   }
      mbnativev *= 1 + parseInt(`${trophyM}`);
      iconcloseD -= parseFloat(`${3 | airbnbstarW.size}`);
      iconqqV.push(bottom4.length);
      mbnativev -= airbnbstarW.size;
   let iconrightorangey = profileactived <= 8858626;
   do {
       let hoverE = 5;
       let basketballawayteamE = 5;
       let tickedb = 3;
       let brightnessN = String.fromCharCode(120,95,51,49,95,121,105,101,108,100,0);
       let descP = String.fromCharCode(112,114,105,110,116,95,56,95,57,50,0);
          let node3 = String.fromCharCode(107,95,56,95,108,105,98,121,117,118,0);
         descP = `${(String.fromCharCode(51,0) == descP ? descP.length : basketballawayteamE)}`;
         node3 += `${node3.length | 2}`;
         hoverE &= (brightnessN == String.fromCharCode(122,0) ? brightnessN.length : hoverE);
      for (let s = 0; s < 2; s++) {
          let roomS = String.fromCharCode(117,110,122,116,101,108,108,95,99,95,53,56,0);
          let modeF = false;
          let questu: Map<any, any> = new Map([[String.fromCharCode(108,105,110,107,101,100,95,111,95,57,53,0),String.fromCharCode(104,95,57,49,95,102,105,116,116,101,100,0)], [String.fromCharCode(109,97,99,95,103,95,56,49,0),String.fromCharCode(114,97,115,116,101,114,105,122,101,95,104,95,53,50,0)], [String.fromCharCode(112,97,114,105,116,121,95,121,95,57,54,0),String.fromCharCode(115,117,98,118,105,101,119,101,114,95,105,95,57,55,0)]]);
          let greyarrowupe = String.fromCharCode(115,95,57,55,95,114,112,99,0);
         tickedb *= hoverE;
         roomS = `${(greyarrowupe == String.fromCharCode(99,0) ? greyarrowupe.length : questu.size)}`;
         modeF = questu.size > 22 && modeF;
      }
      let renderX = hoverE <= 6937987;
      do {
          let gmail6 = 1.0;
          let updates8 = false;
         hoverE += 3;
         gmail6 /= Math.max(((updates8 ? 2 : 2) << (Math.min(Math.abs(parseInt(`${gmail6}`)), 2))), 2);
         updates8 = gmail6 >= 51.100;
         if (renderX) {
            break;
         }
      } while ((3 == (brightnessN.length * hoverE)) && renderX);
      while (descP.includes(`${brightnessN.length}`)) {
          let librrcr = String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,105,95,51,57,0);
          let bufferk = String.fromCharCode(122,95,51,50,0);
         descP += "1";
         librrcr = `${3 & librrcr.length}`;
         bufferk = "2";
         break;
      }
         brightnessN += `${tickedb + 1}`;
          let whiteanimationliveX: Array<any> = [945, 511, 847];
          let placeholderm: Map<any, any> = new Map([[String.fromCharCode(109,101,103,101,100,95,108,95,49,52,0),false ], [String.fromCharCode(102,95,54,52,95,115,116,111,114,97,103,101,0),true ], [String.fromCharCode(99,111,100,101,95,48,95,52,53,0),false ]]);
          let cornerkickJ = 1.0;
         hoverE |= 3 & placeholderm.size;
         whiteanimationliveX.push(1);
         placeholderm = new Map([[`${whiteanimationliveX.length}`, 2]]);
         cornerkickJ /= Math.max(whiteanimationliveX.length, 2);
      for (let m = 0; m < 2; m++) {
         tickedb += 2 - basketballawayteamE;
      }
      let tickedE = basketballawayteamE >= 6858891;
      do {
         basketballawayteamE /= Math.max(1, basketballawayteamE * hoverE);
         if (tickedE) {
            break;
         }
      } while (tickedE && (5 <= (basketballawayteamE | 3)));
          let defaultlogoq = String.fromCharCode(115,112,105,108,108,115,105,122,101,95,106,95,49,53,0);
          let feedbackc: Map<any, any> = new Map([[String.fromCharCode(121,95,55,95,97,110,99,105,108,108,97,114,121,0),false ], [String.fromCharCode(98,101,120,116,95,101,95,55,57,0),false ]]);
          let controlsO = String.fromCharCode(112,97,103,101,115,105,122,101,95,102,95,56,51,0);
         brightnessN = `${controlsO.length + 3}`;
         defaultlogoq += `${1 * feedbackc.size}`;
         feedbackc.set(`${defaultlogoq}`, feedbackc.size * 3);
         controlsO += `${defaultlogoq.length}`;
         brightnessN += `${(descP == String.fromCharCode(106,0) ? brightnessN.length : descP.length)}`;
      if (tickedb == 2) {
         tickedb ^= brightnessN.length / (Math.max(4, tickedb));
      }
         descP = `${basketballawayteamE + brightnessN.length}`;
         basketballawayteamE %= Math.max(hoverE % 1, 3);
      for (let n = 0; n < 1; n++) {
         tickedb %= Math.max(4, brightnessN.length % (Math.max(1, 6)));
      }
      profileactived |= hoverE;
      if (iconrightorangey) {
         break;
      }
   } while (iconrightorangey && (!singapore1.includes(`${profileactived}`)));
   while (singapore1.length > 3) {
      singapore1 = `${screen_.length ^ 2}`;
      break;
   }

    const state = await NetInfo.fetch();

   if ((bottom4.length & benefit8) == 2) {
      bottom4 += `${parseInt(`${mbnativev}`) & 3}`;
   }
   while (benefit8 >= airbnbstarW.size) {
      airbnbstarW = new Map([[`${iconqqV.length}`, iconqqV.length - 2]]);
      break;
   }
      airbnbstarW = new Map([[`${airbnbstarW.size}`, 2]]);
   let modelsU = 5050040 <= benefit8;
   do {
      benefit8 <<= Math.min(Math.abs(benefit8 ^ parseInt(`${mbnativev}`)), 2);
      if (modelsU) {
         break;
      }
   } while (modelsU && (1 >= (5 ^ benefit8) && (iconcloseD * parseFloat(`${benefit8}`)) >= 5.81));
   while (3.20 > (benefit8 + mbnativev) || (mbnativev + benefit8) > 3.20) {
       let matchdetailbgG = 0.0;
       let phoneshareK = false;
       let sliderm: Array<any> = [160, 593, 636];
       let mergerF: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,116,121,95,48,95,53,55,0),403], [String.fromCharCode(115,95,55,48,95,104,101,99,107,0),771]]);
       let videovarb = String.fromCharCode(115,119,105,102,116,121,95,53,95,56,49,0);
      let smallG = videovarb.length >= 5581270;
      do {
          let philippinesU: Array<any> = [String.fromCharCode(111,95,53,49,95,108,97,112,112,101,100,0), String.fromCharCode(118,95,57,50,95,116,101,109,112,115,0), String.fromCharCode(119,104,105,108,101,95,115,95,56,54,0)];
         videovarb += `${parseInt(`${matchdetailbgG}`)}`;
         philippinesU = [philippinesU.length & philippinesU.length];
         if (smallG) {
            break;
         }
      } while ((3 == (videovarb.length & sliderm.length)) && smallG);
      while (!phoneshareK && 5.89 <= (matchdetailbgG * 2.56)) {
         phoneshareK = sliderm.length == videovarb.length;
         break;
      }
      for (let v = 0; v < 3; v++) {
         sliderm = [sliderm.length & videovarb.length];
      }
          let readK = String.fromCharCode(119,95,50,57,95,115,111,99,107,0);
          let telegramw = String.fromCharCode(98,117,116,116,101,114,95,120,95,51,49,0);
         sliderm.push(telegramw.length);
         readK += `${readK.length / (Math.max(readK.length, 7))}`;
         telegramw = `${readK.length}`;
      while (videovarb.length < 2 && !phoneshareK) {
         phoneshareK = 41 > sliderm.length && videovarb.length > 41;
         break;
      }
         sliderm = [sliderm.length];
          let placeholder9 = 1.0;
          let register_lx7: Map<any, any> = new Map([[String.fromCharCode(116,99,102,105,108,101,95,122,95,52,53,0),String.fromCharCode(106,95,55,56,95,100,101,110,115,101,0)], [String.fromCharCode(105,95,56,49,95,122,101,114,111,99,111,100,101,99,0),String.fromCharCode(106,95,52,53,95,97,99,97,108,99,0)]]);
          let livesharex = String.fromCharCode(108,95,50,49,95,108,115,112,115,0);
         phoneshareK = parseInt(`${placeholder9}`) > register_lx7.size;
         placeholder9 /= Math.max(parseFloat(`${livesharex.length / (Math.max(2, livesharex.length))}`), 2);
         register_lx7 = new Map([[livesharex, livesharex.length]]);
      if ((mergerF.size % 5) == 2 || 5 == mergerF.size) {
         mergerF = new Map([[`${sliderm.length}`, 1 | sliderm.length]]);
      }
         videovarb = `${parseInt(`${matchdetailbgG}`) >> (Math.min(Math.abs(1), 3))}`;
         phoneshareK = (((phoneshareK ? mergerF.size : 95) + mergerF.size) > 21);
      if (videovarb.length >= 4) {
          let description__W = 4;
         videovarb += `${((phoneshareK ? 2 : 2) + 3)}`;
         description__W /= Math.max(2 ^ description__W, 3);
      }
         mergerF = new Map([[`${sliderm.length}`, sliderm.length]]);
         phoneshareK = videovarb == String.fromCharCode(51,0);
      while (mergerF.size < 1 || (1 >> (Math.min(2, Math.abs(mergerF.size)))) < 4) {
          let profileE = 1.0;
         phoneshareK = String.fromCharCode(75,0) == videovarb;
         profileE += parseInt(`${profileE}`) % 3;
         break;
      }
      for (let s = 0; s < 1; s++) {
         videovarb = `${videovarb.length}`;
      }
      mbnativev += singapore1.length % 2;
      break;
   }
   for (let m = 0; m < 1; m++) {
      screen_ = [profileactived];
   }
   let footballfiledlayout6 = screen_.length <= 9131276;
   do {
      screen_.push(3);
      if (footballfiledlayout6) {
         break;
      }
   } while (footballfiledlayout6 && ((mbnativev - 4.56) >= 5.100));
    const offline = !(state.isConnected && state.isInternetReachable);

   for (let w = 0; w < 1; w++) {
      inouttargetredH += `${1 + parseInt(`${mbnativev}`)}`;
   }
      singapore1 = `${parseInt(`${iconcloseD}`)}`;
      iconcloseD += parseFloat(`${bottom4.length * 2}`);
   if (!screen_.includes(trophyM)) {
       let textinputK: Map<any, any> = new Map([[String.fromCharCode(102,95,50,49,95,108,111,99,107,115,99,114,101,101,110,0),String.fromCharCode(100,95,50,50,95,97,108,105,103,110,0)], [String.fromCharCode(112,95,50,95,97,116,116,114,105,98,0),String.fromCharCode(115,95,54,53,95,115,112,114,101,97,100,0)], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,54,95,51,54,0),String.fromCharCode(118,105,115,117,97,108,95,104,95,51,48,0)]]);
       let iconorientationl = String.fromCharCode(115,113,108,105,116,101,101,120,116,95,113,95,49,50,0);
         iconorientationl += `${3 << (Math.min(1, Math.abs(textinputK.size)))}`;
      while ((textinputK.size << (Math.min(Math.abs(4), 2))) == 1) {
         textinputK.set(iconorientationl, iconorientationl.length);
         break;
      }
       let sort2: Map<any, any> = new Map([[String.fromCharCode(104,95,56,54,95,99,111,112,121,118,0),false ], [String.fromCharCode(115,95,48,95,116,115,99,99,0),true ], [String.fromCharCode(121,95,53,55,95,105,110,118,101,114,116,101,100,0),false ]]);
       let filterE: Map<any, any> = new Map([[String.fromCharCode(109,95,52,56,95,115,116,114,115,116,97,114,116,0),685], [String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,95,105,95,55,55,0),678]]);
       let largesound_: Array<any> = [630, 168];
          let gesture_ = String.fromCharCode(113,95,54,48,95,112,114,101,115,115,101,100,0);
          let liveH = false;
          let hookK = 1;
         filterE.set(`${iconorientationl}`, textinputK.size - 1);
         gesture_ = `${((liveH ? 5 : 4) / (Math.max(hookK, 10)))}`;
         liveH = !gesture_.includes(`${liveH}`);
         hookK ^= gesture_.length;
          let macauo = 0.0;
          let libjsinspectorW = false;
         iconorientationl = `${parseInt(`${macauo}`)}`;
         macauo += (parseFloat(`${(libjsinspectorW ? 3 : 1) - (libjsinspectorW ? 2 : 4)}`));
      trophyM += benefit8 / (Math.max(iconqqV.length, 7));
   }
   let formh = inouttargetredH == String.fromCharCode(105,122,49,109,100,109,111,0);
   do {
       let long_3eh = String.fromCharCode(99,95,56,53,95,112,97,105,114,119,105,115,101,0);
       let basketballmatchdetailbgN = 4;
       let whitevideoliveS = 4;
      for (let z = 0; z < 2; z++) {
         basketballmatchdetailbgN -= 3;
      }
      let pause0 = 7809079 <= whitevideoliveS;
      do {
         whitevideoliveS |= 3;
         if (pause0) {
            break;
         }
      } while ((1 < basketballmatchdetailbgN) && pause0);
      if ((basketballmatchdetailbgN << (Math.min(5, Math.abs(whitevideoliveS)))) >= 4 || (basketballmatchdetailbgN << (Math.min(4, Math.abs(whitevideoliveS)))) >= 4) {
          let countdownb = 1;
          let xvodb = 2;
         basketballmatchdetailbgN += xvodb;
         countdownb |= countdownb;
         xvodb &= countdownb;
      }
      while (whitevideoliveS < 2) {
         basketballmatchdetailbgN >>= Math.min(Math.abs(long_3eh.length & basketballmatchdetailbgN), 3);
         break;
      }
      if (3 < (3 | long_3eh.length) && (3 | whitevideoliveS) < 3) {
          let arrowupW = false;
          let awayteamfieldv = String.fromCharCode(115,116,117,102,102,105,110,103,95,120,95,49,51,0);
          let shows = true;
          let storey = String.fromCharCode(107,95,52,50,95,120,116,101,97,0);
          let rules9 = 5.0;
         whitevideoliveS *= awayteamfieldv.length >> (Math.min(3, Math.abs(basketballmatchdetailbgN)));
         arrowupW = 70.57 <= rules9 && arrowupW;
         awayteamfieldv += `${((shows ? 5 : 2) % (Math.max(10, (arrowupW ? 4 : 5))))}`;
         shows = storey.length == 7;
         storey = `${storey.length}`;
         rules9 /= Math.max(parseFloat(`${storey.length}`), 4);
      }
      for (let y = 0; y < 2; y++) {
          let suggestion4 = String.fromCharCode(105,110,118,105,116,101,114,95,118,95,53,56,0);
          let buttoni = String.fromCharCode(104,95,50,49,95,100,114,105,118,105,110,103,0);
          let confirmation8 = String.fromCharCode(119,95,50,48,95,103,111,100,101,112,115,0);
         whitevideoliveS |= basketballmatchdetailbgN;
         suggestion4 = "3";
         buttoni += `${(String.fromCharCode(72,0) == buttoni ? confirmation8.length : buttoni.length)}`;
         confirmation8 = `${(String.fromCharCode(119,0) == buttoni ? confirmation8.length : buttoni.length)}`;
      }
      if ((whitevideoliveS % 4) > 2) {
         basketballmatchdetailbgN |= 3;
      }
         basketballmatchdetailbgN ^= (String.fromCharCode(70,0) == long_3eh ? whitevideoliveS : long_3eh.length);
          let shirtE = 4.0;
          let emptyU = String.fromCharCode(100,101,99,114,101,109,101,110,116,95,117,95,51,53,0);
          let defaultplayerimgc = String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,55,95,55,0);
         whitevideoliveS |= parseInt(`${shirtE}`);
         shirtE /= Math.max(1, 2);
         emptyU += `${defaultplayerimgc.length}`;
         defaultplayerimgc += `${emptyU.length % (Math.max(3, defaultplayerimgc.length))}`;
      inouttargetredH = `${whitevideoliveS}`;
      if (formh) {
         break;
      }
   } while ((singapore1.length <= inouttargetredH.length) && formh);
       let floatingT: Array<any> = [954, 285, 922];
         floatingT.push(floatingT.length / (Math.max(10, floatingT.length)));
         floatingT.push(floatingT.length);
         floatingT.push(floatingT.length << (Math.min(floatingT.length, 2)));
      benefit8 += bottom4.length / (Math.max(3, 8));
   if (!singapore1.startsWith(`${iconqqV.length}`)) {
      iconqqV = [parseInt(`${trophyM}`) ^ singapore1.length];
   }
    setIsOffline(offline);

       let streamingz = true;
      let backgroundS = streamingz ? !streamingz : streamingz;
      do {
         streamingz = !streamingz;
         if (backgroundS) {
            break;
         }
      } while ((!streamingz) && backgroundS);
         streamingz = (!streamingz ? !streamingz : !streamingz);
      for (let c = 0; c < 1; c++) {
         streamingz = !streamingz;
      }
      mbnativev *= profileactived << (Math.min(5, Math.abs(3)));
   while (2 < (iconqqV.length / 4)) {
       let libswresampleo = String.fromCharCode(111,95,55,57,95,117,110,115,104,105,102,116,0);
       let roundK: Array<any> = [592, 760, 864];
       let currentM = String.fromCharCode(100,97,116,97,108,95,110,95,52,57,0);
       let temperature_ = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,101,95,55,57,0);
      if (temperature_.startsWith(currentM)) {
         temperature_ += `${3 - libswresampleo.length}`;
      }
      for (let u = 0; u < 1; u++) {
         libswresampleo = `${(currentM == String.fromCharCode(83,0) ? currentM.length : roundK.length)}`;
      }
         temperature_ += `${1 & currentM.length}`;
      while (libswresampleo.includes(temperature_)) {
         temperature_ += `${libswresampleo.length}`;
         break;
      }
      while (libswresampleo.startsWith(`${currentM.length}`)) {
         libswresampleo += `${temperature_.length}`;
         break;
      }
       let static_j0_: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0),String.fromCharCode(107,105,116,95,116,95,54,0)], [String.fromCharCode(99,111,101,102,102,115,112,95,120,95,50,53,0),String.fromCharCode(102,117,108,108,121,95,51,95,51,50,0)]]);
       let rightf: Map<any, any> = new Map([[String.fromCharCode(115,101,113,110,111,95,102,95,53,57,0),993], [String.fromCharCode(97,95,49,53,95,110,101,120,116,104,111,112,0),540], [String.fromCharCode(97,117,116,111,99,108,111,115,101,95,52,95,49,49,0),199]]);
       let dice5 = String.fromCharCode(114,95,56,53,95,114,101,109,111,118,101,114,0);
       let mbbid8 = String.fromCharCode(108,95,51,51,95,114,101,102,105,110,105,110,103,0);
          let handlerE = 3;
          let holderT = String.fromCharCode(103,95,55,53,95,97,117,100,105,111,99,111,110,118,101,114,116,0);
         rightf.set(`${roundK.length}`, 1);
         handlerE >>= Math.min(3, Math.abs(handlerE));
         holderT = `${(String.fromCharCode(71,0) == holderT ? handlerE : holderT.length)}`;
         dice5 = `${static_j0_.size}`;
         mbbid8 += `${currentM.length % 2}`;
      while (roundK.length == 1) {
          let libfile5 = String.fromCharCode(112,114,111,109,112,116,95,119,95,51,53,0);
          let libimagepipelinex = String.fromCharCode(102,95,56,51,95,114,101,112,114,101,115,101,110,116,97,98,108,101,0);
          let component4: Array<any> = [430, 882, 409];
         libswresampleo += "2";
         libfile5 += `${(libimagepipelinex == String.fromCharCode(54,0) ? libimagepipelinex.length : libfile5.length)}`;
         component4 = [libimagepipelinex.length % 3];
         break;
      }
         libswresampleo += `${currentM.length}`;
      airbnbstarW.set(`${benefit8}`, benefit8);
      break;
   }
      screen_ = [parseInt(`${trophyM}`) / 1];
      screen_ = [singapore1.length];
      trophyM *= benefit8;
   while (4 < profileactived) {
       let targetF = 2;
         targetF *= targetF;
       let viewsL = false;
      while (viewsL) {
         viewsL = viewsL && 8 < targetF;
         break;
      }
      iconqqV.push(3);
      break;
   }
       let basketballawayteamO: Array<any> = [559, 648];
         basketballawayteamO.push(1 & basketballawayteamO.length);
      for (let i = 0; i < 3; i++) {
          let borderlessC = String.fromCharCode(105,95,51,56,95,115,101,116,99,116,120,0);
          let homeicond = String.fromCharCode(101,95,52,52,95,105,116,101,114,97,116,105,118,101,0);
          let smallbrightnessv: Map<any, any> = new Map([[String.fromCharCode(104,101,118,99,95,99,95,52,52,0),631], [String.fromCharCode(97,117,100,105,111,95,113,95,54,52,0),275]]);
          let selectedD = String.fromCharCode(101,109,98,101,100,100,105,110,103,95,48,95,57,0);
          let pageR = 5.0;
         basketballawayteamO = [smallbrightnessv.size];
         borderlessC += `${selectedD.length}`;
         homeicond = `${1 >> (Math.min(2, Math.abs(parseInt(`${pageR}`))))}`;
         smallbrightnessv.set(`${pageR}`, parseInt(`${pageR}`));
         selectedD += `${parseInt(`${pageR}`) / (Math.max(homeicond.length, 9))}`;
      }
         basketballawayteamO = [basketballawayteamO.length - basketballawayteamO.length];
      bottom4 += `${parseInt(`${trophyM}`) + 3}`;
    if (!offline) {

       let telegram6 = 5;
       let long_krC = String.fromCharCode(104,116,108,116,95,50,95,51,53,0);
       let downB = 4;
      for (let q = 0; q < 1; q++) {
          let upgradeY = String.fromCharCode(120,95,53,95,98,116,111,98,105,110,0);
          let hejiG = String.fromCharCode(97,109,101,120,95,111,95,50,52,0);
          let libjsijniprofilerE = String.fromCharCode(119,95,49,57,95,118,105,115,117,97,108,108,121,0);
         telegram6 += 2 ^ upgradeY.length;
         upgradeY = `${hejiG.length >> (Math.min(libjsijniprofilerE.length, 4))}`;
         hejiG += `${libjsijniprofilerE.length}`;
      }
      while (downB < 5) {
          let videovarK: Array<any> = [String.fromCharCode(101,97,116,105,110,103,95,51,95,55,49,0), String.fromCharCode(103,101,116,112,95,122,95,53,48,0), String.fromCharCode(122,95,53,48,95,110,101,101,100,115,0)];
          let native9: Array<any> = [String.fromCharCode(110,95,55,52,95,112,114,101,102,105,120,101,100,0), String.fromCharCode(109,109,99,111,95,116,95,55,48,0)];
          let nalyticsM = String.fromCharCode(103,95,52,54,95,108,105,98,119,101,98,112,0);
          let photob = String.fromCharCode(108,95,54,50,95,101,118,97,108,117,108,97,116,101,0);
         long_krC = `${photob.length % 3}`;
         videovarK = [native9.length];
         native9.push(2);
         nalyticsM += `${2 << (Math.min(2, native9.length))}`;
         photob = `${2 ^ native9.length}`;
         break;
      }
         long_krC = `${telegram6}`;
         long_krC += "3";
      for (let a = 0; a < 2; a++) {
         long_krC = "3";
      }
      inouttargetredH += `${parseInt(`${iconcloseD}`) * 1}`;
   for (let i = 0; i < 1; i++) {
      profileactived -= 3;
   }
   let placeholderx = airbnbstarW.size <= 7201471;
   do {
       let reminderA = String.fromCharCode(117,110,105,119,103,116,95,51,95,50,50,0);
      while (reminderA.length < reminderA.length) {
          let nodel: Array<any> = [273, 66, 91];
          let gradleG = String.fromCharCode(100,98,108,105,110,116,95,53,95,57,56,0);
          let rootP = String.fromCharCode(112,95,56,56,95,109,102,113,101,0);
          let arrowrightwithtaili = String.fromCharCode(102,95,55,56,95,114,101,110,116,97,108,0);
         reminderA = "3";
         nodel.push(arrowrightwithtaili.length << (Math.min(Math.abs(2), 1)));
         gradleG = `${rootP.length}`;
         rootP += `${gradleG.length}`;
         arrowrightwithtaili += `${3 ^ arrowrightwithtaili.length}`;
         break;
      }
      let searchs = 5107914 <= reminderA.length;
      do {
         reminderA += `${reminderA.length}`;
         if (searchs) {
            break;
         }
      } while (searchs && (reminderA.length == 5));
          let middlewareh = 4.0;
         reminderA = `${reminderA.length}`;
         middlewareh *= parseFloat(`${parseInt(`${middlewareh}`) + 1}`);
      airbnbstarW = new Map([[`${iconcloseD}`, 3 / (Math.max(10, reminderA.length))]]);
      if (placeholderx) {
         break;
      }
   } while ((3.36 > (iconcloseD + parseFloat(`${airbnbstarW.size}`)) || (parseFloat(`${airbnbstarW.size}`) + iconcloseD) > 3.36) && placeholderx);
   let colors9 = 5342369.0 <= iconcloseD;
   do {
       let select6: Array<any> = [338, 421];
      while (5 >= select6.length) {
          let mbridgeQ = String.fromCharCode(97,95,52,55,95,101,99,117,114,115,105,118,101,0);
         select6.push(3);
         mbridgeQ += "3";
         break;
      }
      for (let j = 0; j < 3; j++) {
          let predictionactivef = true;
          let teamy = 2.0;
          let basketballicon9 = String.fromCharCode(103,117,97,114,100,95,97,95,53,0);
          let cancelf = String.fromCharCode(97,95,54,49,95,119,100,108,116,0);
          let bootW = false;
         select6 = [3];
         predictionactivef = cancelf.length == 87;
         teamy /= Math.max(parseFloat(`${1 ^ cancelf.length}`), 2);
         basketballicon9 += `${3 % (Math.max(9, cancelf.length))}`;
         bootW = cancelf.endsWith(`${teamy}`);
      }
         select6 = [select6.length];
      iconcloseD /= Math.max(5, parseFloat(`${inouttargetredH.length}`));
      if (colors9) {
         break;
      }
   } while ((inouttargetredH.length < parseInt(`${iconcloseD}`)) && colors9);
   for (let o = 0; o < 1; o++) {
       let imagenomoredataH = true;
       let darkO = 3.0;
       let upgradeo = 3;
       let bootO: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,112,95,53,50,0),123], [String.fromCharCode(116,95,53,52,95,101,120,99,101,101,100,0),764], [String.fromCharCode(100,105,102,102,97,98,108,101,95,54,95,51,48,0),987]]);
          let videobufferloadingB = String.fromCharCode(118,95,57,50,95,109,97,107,101,100,112,107,103,0);
         imagenomoredataH = videobufferloadingB.length <= bootO.size;
      let predictionwin2 = darkO <= 5901005.0;
      do {
          let libfbjniZ = String.fromCharCode(99,104,97,114,97,99,116,101,100,95,52,95,57,48,0);
          let modulesz: Array<any> = [741, 520];
          let bodanA: Array<any> = [459, 917];
          let linkg = 0.0;
         darkO -= parseFloat(`${parseInt(`${linkg}`) & 2}`);
         libfbjniZ = `${modulesz.length / 1}`;
         modulesz = [bodanA.length];
         bodanA.push(bodanA.length % (Math.max(10, modulesz.length)));
         linkg += 1;
         if (predictionwin2) {
            break;
         }
      } while (predictionwin2 && ((darkO - 3.31) < 1.80 && (bootO.size / 5) < 2));
         imagenomoredataH = !imagenomoredataH;
         bootO = new Map([[`${bootO.size}`, 2]]);
          let mathQ = String.fromCharCode(110,95,52,57,95,114,101,110,100,105,116,105,111,110,115,0);
         upgradeo %= Math.max(2, bootO.size - 3);
         mathQ += `${mathQ.length}`;
          let tailU = String.fromCharCode(119,97,107,101,95,112,95,56,48,0);
          let iconcloseP = String.fromCharCode(100,101,98,117,103,95,105,95,53,50,0);
         bootO.set(`${darkO}`, 3 >> (Math.min(Math.abs(parseInt(`${darkO}`)), 2)));
         tailU += `${tailU.length + 3}`;
         iconcloseP += `${(tailU == String.fromCharCode(81,0) ? tailU.length : iconcloseP.length)}`;
      if (!imagenomoredataH) {
         darkO /= Math.max((parseFloat(`${(imagenomoredataH ? 5 : 3) - parseInt(`${darkO}`)}`)), 1);
      }
      if (2 < (1 * bootO.size)) {
          let activityu: Array<any> = [715, 190, 38];
          let bottomM = true;
          let issuba: Map<any, any> = new Map([[String.fromCharCode(98,108,101,101,100,95,111,95,51,54,0),231], [String.fromCharCode(108,105,98,103,115,109,95,100,95,55,49,0),662], [String.fromCharCode(120,99,117,114,115,111,114,95,121,95,50,49,0),446]]);
         bootO.set(`${darkO}`, bootO.size);
         activityu.push(issuba.size);
         bottomM = (80 <= ((!bottomM ? activityu.length : 80) * activityu.length));
         issuba = new Map([[`${issuba.size}`, 1]]);
      }
      for (let a = 0; a < 3; a++) {
          let middleware6 = 3.0;
         imagenomoredataH = upgradeo > 62 && 64.6 > middleware6;
      }
      for (let k = 0; k < 1; k++) {
         darkO -= parseFloat(`${parseInt(`${darkO}`) + upgradeo}`);
      }
         imagenomoredataH = !imagenomoredataH;
      for (let u = 0; u < 1; u++) {
         bootO.set(`${imagenomoredataH}`, 3);
      }
      benefit8 |= bootO.size & 2;
   }
   for (let j = 0; j < 2; j++) {
      mbnativev *= 2 + singapore1.length;
   }
   while (inouttargetredH.length > screen_.length) {
       let valuesI = true;
       let goallogor = String.fromCharCode(97,118,101,114,114,111,114,95,113,95,50,54,0);
       let predictionbannersharedT = 2.0;
       let greyticku: Map<any, any> = new Map([[String.fromCharCode(118,95,55,53,95,111,119,110,101,114,115,104,105,112,0),492], [String.fromCharCode(101,95,56,50,95,97,110,105,109,97,116,111,114,115,0),921]]);
         valuesI = greyticku.size > parseInt(`${predictionbannersharedT}`);
         predictionbannersharedT *= parseFloat(`${3}`);
      let subtextn = valuesI ? !valuesI : valuesI;
      do {
         valuesI = predictionbannersharedT == parseFloat(`${greyticku.size}`);
         if (subtextn) {
            break;
         }
      } while ((valuesI) && subtextn);
         valuesI = goallogor.endsWith(`${valuesI}`);
      while (3.55 > predictionbannersharedT && (3.55 + predictionbannersharedT) > 4.48) {
         predictionbannersharedT -= (parseFloat(`${(valuesI ? 3 : 4) << (Math.min(Math.abs(parseInt(`${predictionbannersharedT}`)), 4))}`));
         break;
      }
      if ((parseFloat(`${greyticku.size}`) * predictionbannersharedT) == 3.96 && (1 << (Math.min(3, Math.abs(greyticku.size)))) == 1) {
         predictionbannersharedT += parseFloat(`${parseInt(`${predictionbannersharedT}`)}`);
      }
          let owngoalh: Array<any> = [638, 190];
          let whistle5 = 3.0;
         predictionbannersharedT += parseFloat(`${goallogor.length >> (Math.min(1, owngoalh.length))}`);
         owngoalh = [parseInt(`${whistle5}`) >> (Math.min(4, Math.abs(3)))];
         whistle5 *= parseFloat(`${3}`);
       let ball0 = 3.0;
         goallogor += "2";
      while (ball0 <= 1.34) {
          let verticalA: Array<any> = [996, 479, 132];
         ball0 *= (parseFloat(`${greyticku.size ^ (valuesI ? 3 : 1)}`));
         verticalA.push(verticalA.length * 3);
         break;
      }
      while (ball0 < predictionbannersharedT) {
          let inactive1 = true;
         ball0 /= Math.max(parseFloat(`${parseInt(`${ball0}`)}`), 2);
         inactive1 = !inactive1;
         break;
      }
         valuesI = 66.14 >= ball0 || goallogor == String.fromCharCode(69,0);
      inouttargetredH = `${inouttargetredH.length & parseInt(`${predictionbannersharedT}`)}`;
      break;
   }
      handleRefresh();
    }
  }, []);

  
  useFocusEffect(useCallback(() => {
    mayi_push.watchAnytimeViewsAnalytics({
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

      if (mayi_Gift.isGuest(userState.user) && !adultMode) {
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
    if (mayi_Gift.isLogin(userState.user) && isFocusLogin.current) {
      isFocusLogin.current = false;
    }
  }, [userState.user?.userToken]);

  const onFocusLoginOverlayPress = () => {
       let giftbuttonY = true;
    let whiteanimationliver = 0;
    let filterv = 1.0;
    let detailk = false;
    let constantsr = String.fromCharCode(103,95,51,50,95,109,98,104,115,0);
    let classeso: Map<any, any> = new Map([[String.fromCharCode(105,95,51,95,108,117,116,114,103,98,0),false ], [String.fromCharCode(103,95,50,49,95,97,110,115,119,101,114,0),false ]]);
    let invite2 = 2.0;
    let defaultprofilepic9 = 4.0;
    let iconlogoutQ = 4.0;
    let libapminsighta_ = true;
      giftbuttonY = (classeso.size + parseInt(`${invite2}`)) == 62;
      constantsr += `${whiteanimationliver | parseInt(`${defaultprofilepic9}`)}`;
   let friendsM = giftbuttonY ? !giftbuttonY : giftbuttonY;
   do {
      giftbuttonY = null != classeso.get(`${filterv}`);
      if (friendsM) {
         break;
      }
   } while (friendsM && (5 <= (whiteanimationliver / 5)));
      invite2 *= parseFloat(`${parseInt(`${defaultprofilepic9}`) / 1}`);
   for (let o = 0; o < 2; o++) {
      whiteanimationliver *= whiteanimationliver;
   }
   while ((2.75 - invite2) <= 2.12) {
      whiteanimationliver *= (String.fromCharCode(50,0) == constantsr ? parseInt(`${defaultprofilepic9}`) : constantsr.length);
      break;
   }
       let hooksN = String.fromCharCode(111,95,48,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0);
       let iconsharefriendsX = String.fromCharCode(99,116,120,105,100,120,105,110,99,95,112,95,57,52,0);
      let schedulerY = 6752848 <= hooksN.length;
      do {
          let termsC: Array<any> = [650, 488];
          let basketballiconI = String.fromCharCode(97,99,101,108,112,95,98,95,57,54,0);
          let bodanp = 2.0;
          let sportP: Map<any, any> = new Map([[String.fromCharCode(114,95,56,55,95,108,111,111,112,115,0),String.fromCharCode(103,95,56,95,97,110,103,101,0)], [String.fromCharCode(110,100,111,116,115,95,48,95,53,51,0),String.fromCharCode(97,112,112,114,116,99,95,52,95,57,49,0)]]);
         hooksN = `${sportP.size}`;
         termsC = [termsC.length];
         basketballiconI = `${parseInt(`${bodanp}`) << (Math.min(termsC.length, 5))}`;
         bodanp += parseFloat(`${parseInt(`${bodanp}`) * basketballiconI.length}`);
         sportP.set(basketballiconI, basketballiconI.length & termsC.length);
         if (schedulerY) {
            break;
         }
      } while (schedulerY && (iconsharefriendsX == hooksN));
         iconsharefriendsX += `${2 << (Math.min(1, hooksN.length))}`;
      for (let p = 0; p < 2; p++) {
         hooksN += `${2 * iconsharefriendsX.length}`;
      }
       let downloaderF = String.fromCharCode(117,112,100,97,116,101,100,95,119,95,49,51,0);
       let iconcalendarD = String.fromCharCode(109,105,120,95,110,95,53,0);
          let sigmobX = String.fromCharCode(115,101,97,114,99,104,95,54,95,57,52,0);
         iconsharefriendsX += `${sigmobX.length}`;
      if (!hooksN.includes(`${iconsharefriendsX.length}`)) {
         iconsharefriendsX += `${iconsharefriendsX.length >> (Math.min(2, downloaderF.length))}`;
      }
      invite2 /= Math.max((parseFloat(`${(giftbuttonY ? 1 : 1) - parseInt(`${invite2}`)}`)), 5);
   let resendm = 6479169.0 >= invite2;
   do {
      invite2 /= Math.max(parseFloat(`${parseInt(`${filterv}`) ^ classeso.size}`), 5);
      if (resendm) {
         break;
      }
   } while (resendm && (5.81 < invite2));
      whiteanimationliver %= Math.max(5, parseInt(`${invite2}`));
      detailk = String.fromCharCode(78,0) == constantsr;
   if (5.46 == (defaultprofilepic9 * 2.0)) {
      giftbuttonY = 83.52 <= invite2;
   }
       let subbasketballplayerW = 0.0;
       let leagueH = String.fromCharCode(103,101,110,101,114,97,116,105,111,110,95,50,95,48,0);
      if (leagueH.endsWith(`${subbasketballplayerW}`)) {
         leagueH = `${parseInt(`${subbasketballplayerW}`) + leagueH.length}`;
      }
      for (let h = 0; h < 2; h++) {
         subbasketballplayerW += (leagueH == String.fromCharCode(79,0) ? leagueH.length : parseInt(`${subbasketballplayerW}`));
      }
      let modityj = subbasketballplayerW <= 9088016.0;
      do {
          let statisticsD = 1.0;
          let countryE = String.fromCharCode(99,111,110,99,101,97,108,95,98,95,56,52,0);
          let colorsG = 5;
          let clubB = String.fromCharCode(104,105,103,104,101,115,116,95,53,95,56,52,0);
         subbasketballplayerW -= parseInt(`${statisticsD}`);
         statisticsD *= colorsG ^ clubB.length;
         countryE += `${colorsG}`;
         clubB = `${clubB.length}`;
         if (modityj) {
            break;
         }
      } while ((5 < (leagueH.length * 3)) && modityj);
       let homeinactiveY = 2;
      for (let h = 0; h < 1; h++) {
          let typesf = false;
          let playF = 4.0;
          let becomeJ = 2.0;
          let libavfilterj = String.fromCharCode(102,95,54,51,0);
         homeinactiveY -= parseInt(`${becomeJ}`) / 2;
         typesf = 54.67 >= playF;
         playF *= (parseFloat(`${3 * (typesf ? 2 : 5)}`));
         becomeJ /= Math.max(3 * libavfilterj.length, 2);
         libavfilterj = "3";
      }
       let reactnativejsJ = 3.0;
       let analyticsg = 2.0;
      filterv += parseFloat(`${parseInt(`${subbasketballplayerW}`) % 1}`);
      whiteanimationliver -= 2;
   while (!detailk) {
      whiteanimationliver -= (parseInt(`${invite2}`) | (giftbuttonY ? 4 : 4));
      break;
   }
   if (filterv >= parseFloat(`${constantsr.length}`)) {
      filterv += parseFloat(`${whiteanimationliver}`);
   }

    dispatch(showLoginAction());
  }

  const onPressAds = () => {
       let iconmore8 = String.fromCharCode(105,95,54,57,95,114,117,110,110,101,114,0);
    let combineW = false;
    let videocommonH = String.fromCharCode(106,95,50,55,95,100,105,118,105,115,111,114,0);
    let private_t_ = true;
    let gemfileQ = String.fromCharCode(105,110,116,101,114,120,121,95,109,95,53,51,0);
    let unreadp = String.fromCharCode(111,95,50,56,95,105,110,115,112,101,99,116,0);
    let configk = String.fromCharCode(110,101,115,116,95,100,95,57,55,0);
    let textinputo = String.fromCharCode(115,117,98,102,114,97,109,101,115,95,98,95,57,54,0);
    let settingsn = 1;
    let bgvipxvod8: Map<any, any> = new Map([[String.fromCharCode(98,95,57,57,95,97,97,102,99,0),String.fromCharCode(103,95,52,56,95,115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,0)], [String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,55,95,54,53,0),String.fromCharCode(98,95,50,95,110,116,115,115,0)], [String.fromCharCode(119,97,110,116,95,121,95,52,49,0),String.fromCharCode(119,95,52,55,95,100,121,110,97,109,105,99,97,108,108,121,0)]]);
    let activeR = String.fromCharCode(105,95,50,57,95,116,97,112,101,115,0);
    let taiwanL = String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,116,95,57,0);
    let streamingS = true;
      combineW = private_t_;
   while (!combineW) {
       let unselectedb = 5;
       let qaagk = 5;
          let iconlogout9 = String.fromCharCode(99,117,114,115,111,114,115,95,114,95,49,56,0);
         qaagk %= Math.max(5, 3);
         iconlogout9 = "3";
         unselectedb &= qaagk;
         unselectedb >>= Math.min(2, Math.abs(qaagk >> (Math.min(3, Math.abs(unselectedb)))));
         qaagk -= unselectedb;
         unselectedb /= Math.max(qaagk / (Math.max(3, unselectedb)), 1);
      let sendb = qaagk >= 9808898;
      do {
         qaagk &= qaagk ^ unselectedb;
         if (sendb) {
            break;
         }
      } while (sendb && (unselectedb < qaagk));
      combineW = videocommonH == String.fromCharCode(113,0) || 86 > settingsn;
      break;
   }
      configk += "3";
   while (iconmore8 == String.fromCharCode(51,0)) {
      activeR += `${settingsn}`;
      break;
   }
   while (1 <= (bgvipxvod8.size - 5) || (bgvipxvod8.size - activeR.length) <= 5) {
      activeR = "1";
      break;
   }
   while (activeR.startsWith(`${configk.length}`)) {
      configk += `${bgvipxvod8.size << (Math.min(Math.abs(2), 3))}`;
      break;
   }
       let basketballicon9: Array<any> = [677, 46, 360];
       let libavfilterG = String.fromCharCode(114,108,109,95,100,95,56,54,0);
      while (libavfilterG.startsWith(`${basketballicon9.length}`)) {
         basketballicon9.push(basketballicon9.length << (Math.min(Math.abs(2), 5)));
         break;
      }
      for (let b = 0; b < 3; b++) {
          let templateprocessorx = String.fromCharCode(109,102,104,100,95,55,95,52,50,0);
          let bangH = 3.0;
          let bodan1: Map<any, any> = new Map([[String.fromCharCode(105,95,55,57,95,100,101,99,101,108,101,114,97,116,105,111,110,0),519], [String.fromCharCode(97,95,57,55,95,114,97,112,112,101,114,0),106], [String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,97,95,53,57,0),716]]);
          let libswscale6 = false;
          let libbuffer4: Array<any> = [134, 583];
         libavfilterG += `${parseInt(`${bangH}`)}`;
         templateprocessorx += `${(String.fromCharCode(70,0) == templateprocessorx ? templateprocessorx.length : (libswscale6 ? 2 : 1))}`;
         bangH *= libbuffer4.length + 3;
         bodan1 = new Map([[`${bodan1.size}`, (3 + (libswscale6 ? 4 : 5))]]);
         libbuffer4.push(((libswscale6 ? 3 : 5) | 2));
      }
      if (5 == libavfilterG.length) {
         basketballicon9 = [1 << (Math.min(1, basketballicon9.length))];
      }
      while (libavfilterG.startsWith(`${basketballicon9.length}`)) {
          let base3: Array<any> = [20, 216, 869];
         basketballicon9 = [2];
         base3.push(base3.length >> (Math.min(Math.abs(2), 4)));
         break;
      }
      let redirecta = libavfilterG.length >= 5136648;
      do {
          let faviconf = true;
          let scheduleX = 0;
         libavfilterG = `${scheduleX ^ libavfilterG.length}`;
         faviconf = (faviconf ? faviconf : !faviconf);
         scheduleX /= Math.max(1, 1);
         if (redirecta) {
            break;
         }
      } while ((libavfilterG.length < 1) && redirecta);
      if (1 < (basketballicon9.length / (Math.max(libavfilterG.length, 1))) && (1 / (Math.max(5, libavfilterG.length))) < 2) {
         libavfilterG += `${libavfilterG.length % (Math.max(3, 6))}`;
      }
      settingsn *= (String.fromCharCode(95,0) == videocommonH ? videocommonH.length : (combineW ? 3 : 5));
   if (4 > iconmore8.length) {
      combineW = 70 >= bgvipxvod8.size;
   }
   while (2 == bgvipxvod8.size) {
       let iconpipexpandM = true;
       let libfilep: Map<any, any> = new Map([[String.fromCharCode(122,95,49,53,95,114,101,115,117,109,101,0),true ], [String.fromCharCode(100,111,99,117,109,101,110,116,115,95,120,95,51,49,0),true ], [String.fromCharCode(113,95,54,56,95,117,110,100,101,114,114,117,110,0),true ]]);
      for (let o = 0; o < 2; o++) {
          let refreshborderless_ = 0.0;
          let analytice = String.fromCharCode(115,99,104,117,110,99,107,95,120,95,54,49,0);
          let profileactiveB = true;
          let resultj = String.fromCharCode(98,95,50,95,105,109,112,111,114,116,0);
          let indexD = 3;
         iconpipexpandM = (libfilep.size / (Math.max(10, resultj.length))) < 25;
         refreshborderless_ /= Math.max(indexD, 5);
         analytice = `${parseInt(`${refreshborderless_}`)}`;
         profileactiveB = 85 > (indexD / (Math.max(refreshborderless_, 9)));
         resultj += `${((profileactiveB ? 4 : 4) & parseInt(`${refreshborderless_}`))}`;
      }
       let specT = 5.0;
      let inactiveY = 8205671.0 <= specT;
      do {
          let mergerf = false;
          let favicon5 = 0.0;
         specT -= parseFloat(`${libfilep.size | 1}`);
         mergerf = 87.5 >= favicon5 && !mergerf;
         favicon5 /= Math.max(parseFloat(`${3 + parseInt(`${favicon5}`)}`), 4);
         if (inactiveY) {
            break;
         }
      } while (((parseInt(`${specT}`) - libfilep.size) == 2) && inactiveY);
      let injuryy = 5343171 >= libfilep.size;
      do {
         libfilep = new Map([[`${libfilep.size}`, (3 - (iconpipexpandM ? 4 : 1))]]);
         if (injuryy) {
            break;
         }
      } while ((5 <= libfilep.size) && injuryy);
      for (let i = 0; i < 2; i++) {
          let xvodj = String.fromCharCode(101,95,54,49,95,116,106,101,120,97,109,112,108,101,116,101,115,116,0);
          let condensedt: Array<any> = [24, 282, 498];
          let statisticsinactiveE: Map<any, any> = new Map([[String.fromCharCode(99,95,49,56,95,112,101,114,109,117,116,101,0),135], [String.fromCharCode(112,95,56,57,95,120,121,119,104,0),742]]);
         libfilep.set(xvodj, 1 >> (Math.min(3, xvodj.length)));
         condensedt.push(statisticsinactiveE.size);
         statisticsinactiveE = new Map([[`${statisticsinactiveE.size}`, statisticsinactiveE.size]]);
      }
          let libmapbufferjnil = 3;
          let backC = 5.0;
          let bannerb = false;
         specT /= Math.max(parseFloat(`${3}`), 2);
         libmapbufferjnil -= ((bannerb ? 5 : 4) + libmapbufferjnil);
         backC /= Math.max(parseFloat(`${libmapbufferjnil}`), 2);
         bannerb = !bannerb;
      bgvipxvod8.set(`${private_t_}`, ((private_t_ ? 4 : 1) + 3));
      break;
   }
   for (let l = 0; l < 3; l++) {
      configk = `${(unreadp.length + (private_t_ ? 3 : 2))}`;
   }
      unreadp += "1";
       let iconfeedbackW: Map<any, any> = new Map([[String.fromCharCode(111,102,102,108,111,97,100,95,57,95,54,52,0),String.fromCharCode(122,95,50,50,95,97,99,99,0)], [String.fromCharCode(107,102,109,111,100,101,115,95,112,95,54,52,0),String.fromCharCode(119,95,56,54,95,99,97,112,0)]]);
       let routery = String.fromCharCode(111,95,54,53,95,110,111,98,111,100,121,0);
          let statisticsB = false;
          let reactnativejsn: Map<any, any> = new Map([[String.fromCharCode(98,105,116,120,95,107,95,51,48,0),971], [String.fromCharCode(115,101,116,116,105,103,110,115,95,99,95,49,55,0),582], [String.fromCharCode(99,97,118,115,118,105,100,101,111,95,109,95,54,51,0),747]]);
          let invitew = 2.0;
         routery += `${reactnativejsn.size}`;
         statisticsB = !statisticsB && invitew == 99.77;
         reactnativejsn.set(`${statisticsB}`, (parseInt(`${invitew}`) << (Math.min(1, Math.abs((statisticsB ? 4 : 3))))));
         iconfeedbackW.set(routery, routery.length);
       let libcxxcomponentsl = String.fromCharCode(108,95,49,52,95,104,101,99,107,0);
       let libapminsightbi = String.fromCharCode(109,95,52,56,95,97,100,106,117,115,116,105,110,103,0);
       let release_um9: Array<any> = [489, 551, 608];
      if (!routery.startsWith(`${iconfeedbackW.size}`)) {
         iconfeedbackW.set(`${release_um9.length}`, iconfeedbackW.size << (Math.min(release_um9.length, 5)));
      }
       let heji2 = String.fromCharCode(105,110,116,101,114,95,121,95,49,48,0);
       let homeactiveN = String.fromCharCode(111,115,116,97,114,95,118,95,57,48,0);
      iconmore8 += `${(textinputo.length * (private_t_ ? 4 : 2))}`;
      gemfileQ += `${(String.fromCharCode(57,0) == iconmore8 ? iconmore8.length : gemfileQ.length)}`;
   for (let i = 0; i < 2; i++) {
       let stationsj = String.fromCharCode(100,101,109,97,110,100,95,55,95,49,52,0);
       let encrypte = String.fromCharCode(100,95,57,57,95,115,115,101,116,0);
       let station6 = 4.0;
       let alertZ: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,100,95,119,95,55,53,0),667], [String.fromCharCode(119,112,101,110,100,105,110,103,95,105,95,56,55,0),775], [String.fromCharCode(99,95,55,52,0),428]]);
       let latnh = String.fromCharCode(115,95,57,50,95,104,105,116,115,0);
         station6 /= Math.max((parseFloat(`${String.fromCharCode(113,0) == stationsj ? encrypte.length : stationsj.length}`)), 3);
         latnh += `${encrypte.length % (Math.max(latnh.length, 2))}`;
      for (let s = 0; s < 3; s++) {
         alertZ = new Map([[encrypte, stationsj.length]]);
      }
          let iconmoreS: Map<any, any> = new Map([[String.fromCharCode(105,95,49,95,112,114,111,118,105,100,101,100,0),false ], [String.fromCharCode(111,95,55,95,111,105,100,97,110,121,0),true ]]);
          let tickedE = 0.0;
          let round_ = String.fromCharCode(106,95,50,54,95,114,101,115,105,122,101,0);
         alertZ = new Map([[encrypte, 2]]);
         iconmoreS = new Map([[`${tickedE}`, round_.length ^ parseInt(`${tickedE}`)]]);
         round_ += `${iconmoreS.size}`;
         encrypte = `${encrypte.length}`;
          let regengq = String.fromCharCode(105,95,57,50,95,115,99,97,110,115,0);
          let corneri = 2.0;
          let sansH = String.fromCharCode(111,95,52,53,95,97,115,115,111,99,105,97,116,101,0);
         latnh += `${2 * sansH.length}`;
         regengq = "3";
         corneri /= Math.max(5, (parseFloat(`${regengq == String.fromCharCode(79,0) ? regengq.length : parseInt(`${corneri}`)}`)));
         sansH = "1";
      while (5 > (alertZ.size * encrypte.length) && 3 > (5 * encrypte.length)) {
         alertZ.set(`${station6}`, parseInt(`${station6}`) & alertZ.size);
         break;
      }
          let footballc: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,97,114,110,114,0),694], [String.fromCharCode(107,101,121,115,116,111,114,101,95,114,95,52,50,0),209]]);
          let libavcodecE = false;
         station6 += parseFloat(`${footballc.size / (Math.max(encrypte.length, 8))}`);
         footballc = new Map([[`${libavcodecE}`, ((libavcodecE ? 1 : 4) * 2)]]);
          let register_int = 3;
          let iconpointscoreG = 3.0;
         encrypte += `${parseInt(`${iconpointscoreG}`) << (Math.min(Math.abs(2), 2))}`;
         register_int &= register_int;
         iconpointscoreG -= parseFloat(`${register_int / 1}`);
      while (stationsj.endsWith(encrypte)) {
         encrypte = `${alertZ.size}`;
         break;
      }
      while (encrypte != String.fromCharCode(105,0)) {
          let u_lockj: Array<any> = [841, 835];
          let matches_: Array<any> = [835, 405, 959];
          let mbjscommon3 = String.fromCharCode(121,95,49,56,95,115,111,102,116,102,108,111,97,116,0);
          let gradlewC = String.fromCharCode(112,95,49,57,95,104,111,109,101,0);
          let soundb: Map<any, any> = new Map([[String.fromCharCode(115,95,57,55,0),962], [String.fromCharCode(108,101,114,112,102,95,57,95,57,48,0),306], [String.fromCharCode(118,101,114,115,105,111,110,95,111,95,50,48,0),367]]);
         stationsj += `${(gradlewC == String.fromCharCode(55,0) ? gradlewC.length : parseInt(`${station6}`))}`;
         u_lockj = [soundb.size];
         matches_ = [matches_.length & 1];
         mbjscommon3 = `${matches_.length}`;
         soundb = new Map([[`${matches_.length}`, 2 - matches_.length]]);
         break;
      }
         latnh = `${alertZ.size % (Math.max(latnh.length, 7))}`;
         station6 *= parseFloat(`${alertZ.size | 2}`);
         encrypte += `${(String.fromCharCode(74,0) == encrypte ? encrypte.length : alertZ.size)}`;
      for (let u = 0; u < 3; u++) {
          let register_y3j = String.fromCharCode(100,105,114,115,95,117,95,51,51,0);
          let twitterK = 0.0;
          let commonc = String.fromCharCode(120,109,108,101,115,99,97,112,101,95,119,95,49,54,0);
          let photoi = 5.0;
         stationsj = `${parseInt(`${photoi}`) | stationsj.length}`;
         register_y3j = `${register_y3j.length}`;
         twitterK -= register_y3j.length;
         commonc += `${commonc.length | parseInt(`${twitterK}`)}`;
         photoi += 3 & parseInt(`${twitterK}`);
      }
      gemfileQ = `${unreadp.length}`;
   }
   while (5 > unreadp.length) {
       let iconbackwhitew = 1.0;
       let gradlewm = true;
       let screenX = String.fromCharCode(97,97,115,99,95,98,95,55,48,0);
       let appsd: Array<any> = [189, 824];
      if (iconbackwhitew == 5.10) {
          let yellowscoreballq = 2.0;
          let penaltymatchicont = 5;
          let libavformat7 = 4.0;
          let line3 = 2.0;
          let sortD = String.fromCharCode(112,101,111,112,108,101,95,119,95,56,54,0);
         iconbackwhitew -= 2 >> (Math.min(Math.abs(parseInt(`${yellowscoreballq}`)), 2));
         yellowscoreballq += parseInt(`${line3}`);
         penaltymatchicont |= sortD.length;
         libavformat7 *= parseFloat(`${parseInt(`${line3}`)}`);
         sortD = "2";
      }
          let modity8 = String.fromCharCode(107,95,55,51,95,104,105,116,115,0);
          let basketballplayerplaceholderq = String.fromCharCode(111,95,54,51,95,101,109,117,108,97,116,111,114,0);
          let viewsQ = String.fromCharCode(115,101,114,105,97,108,105,122,101,95,111,95,54,56,0);
         gradlewm = 78 > viewsQ.length;
         modity8 += `${(String.fromCharCode(97,0) == basketballplayerplaceholderq ? modity8.length : basketballplayerplaceholderq.length)}`;
         viewsQ += `${modity8.length}`;
      while (3.43 > iconbackwhitew) {
         gradlewm = iconbackwhitew == 54.1 || !gradlewm;
         break;
      }
      for (let i = 0; i < 2; i++) {
         gradlewm = 5 <= screenX.length;
      }
          let unselectedf = String.fromCharCode(102,114,97,103,95,105,95,56,0);
          let iconscheduleg = 0;
          let iconorientations = String.fromCharCode(104,95,51,53,95,114,101,109,105,110,100,0);
         iconbackwhitew *= ((gradlewm ? 3 : 4) | parseInt(`${iconbackwhitew}`));
         unselectedf += `${(String.fromCharCode(115,0) == iconorientations ? iconorientations.length : iconscheduleg)}`;
         iconscheduleg %= Math.max(1 << (Math.min(5, unselectedf.length)), 3);
         appsd.push(((gradlewm ? 2 : 2) - screenX.length));
       let iconsetting2 = String.fromCharCode(119,95,51,55,95,116,97,103,97,118,114,0);
       let yellowscoreballl = String.fromCharCode(116,111,114,101,100,95,52,95,52,48,0);
         screenX = `${(String.fromCharCode(65,0) == yellowscoreballl ? parseInt(`${iconbackwhitew}`) : yellowscoreballl.length)}`;
      if (appsd.length == 4) {
         iconbackwhitew += screenX.length << (Math.min(Math.abs(3), 3));
      }
       let ajaxj = false;
          let langkeyX = 5.0;
          let commentB = 3.0;
         iconsetting2 = `${1 - yellowscoreballl.length}`;
         langkeyX /= Math.max(parseFloat(`${parseInt(`${commentB}`) % 1}`), 1);
         commentB /= Math.max(4, parseInt(`${langkeyX}`));
       let playV = 1;
       let feedbackQ = 4;
      private_t_ = 68 == settingsn;
      break;
   }
      unreadp = `${iconmore8.length}`;
   if (unreadp.length >= bgvipxvod8.size) {
       let sellmathbackground5 = String.fromCharCode(100,101,116,101,99,116,111,114,95,121,95,49,48,48,0);
       let largesoundH: Array<any> = [645, 164];
      for (let h = 0; h < 2; h++) {
         largesoundH.push(largesoundH.length);
      }
         largesoundH.push(largesoundH.length);
      if ((largesoundH.length - sellmathbackground5.length) < 1) {
         largesoundH = [2];
      }
      let scrollviewt = 5569533 >= largesoundH.length;
      do {
         largesoundH.push(sellmathbackground5.length - largesoundH.length);
         if (scrollviewt) {
            break;
         }
      } while (((largesoundH.length + sellmathbackground5.length) >= 2 && (largesoundH.length + sellmathbackground5.length) >= 2) && scrollviewt);
         sellmathbackground5 += `${largesoundH.length * sellmathbackground5.length}`;
      for (let j = 0; j < 2; j++) {
          let mode3 = 1.0;
          let fullscreenmaxT: Array<any> = [String.fromCharCode(112,95,51,56,95,98,101,103,105,110,0), String.fromCharCode(99,111,100,101,99,99,116,108,95,48,95,49,55,0), String.fromCharCode(100,95,56,53,95,110,97,109,101,115,112,97,99,101,0)];
          let clockA: Map<any, any> = new Map([[String.fromCharCode(98,95,57,55,95,109,112,101,103,97,117,100,105,111,100,115,112,0),453], [String.fromCharCode(120,95,49,55,95,103,97,117,115,115,105,97,110,105,105,114,100,0),318]]);
         sellmathbackground5 += `${sellmathbackground5.length}`;
         mode3 -= parseFloat(`${parseInt(`${mode3}`) / (Math.max(4, fullscreenmaxT.length))}`);
         fullscreenmaxT = [clockA.size * 2];
         clockA.set(`${mode3}`, clockA.size);
      }
      bgvipxvod8 = new Map([[`${settingsn}`, settingsn]]);
   }
      private_t_ = activeR == String.fromCharCode(57,0) || configk.length <= 46;
      bgvipxvod8 = new Map([[`${bgvipxvod8.size}`, 3 + bgvipxvod8.size]]);
       let penaltyp: Map<any, any> = new Map([[String.fromCharCode(119,95,56,95,100,99,116,101,108,101,109,0),String.fromCharCode(113,95,53,51,95,112,97,114,97,108,108,101,108,0)], [String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,99,95,49,48,0),String.fromCharCode(98,95,50,50,95,120,99,101,112,116,105,111,110,0)]]);
         penaltyp.set(`${penaltyp.size}`, penaltyp.size);
         penaltyp = new Map([[`${penaltyp.size}`, penaltyp.size]]);
      if ((penaltyp.size << (Math.min(Math.abs(penaltyp.size), 4))) > 2 || 2 > (penaltyp.size << (Math.min(4, Math.abs(penaltyp.size))))) {
         penaltyp.set(`${penaltyp.size}`, penaltyp.size);
      }
      textinputo += `${configk.length}`;
      taiwanL = `${3 & bgvipxvod8.size}`;
      taiwanL += `${2 | configk.length}`;

    setShowAdOverlay(true);
  };

  const onCloseAdOverlay = () => {
       let cornershoote = 4.0;
    let selectr: Array<any> = [String.fromCharCode(108,95,53,57,95,97,112,112,101,110,100,97,98,108,101,0), String.fromCharCode(116,95,54,52,95,117,110,112,97,100,100,101,100,0)];
    let with_6g = String.fromCharCode(116,95,53,53,95,102,111,114,101,118,101,114,0);
    let viewsE = String.fromCharCode(122,95,54,49,95,99,111,118,101,114,105,110,103,0);
    let userq = String.fromCharCode(119,97,108,108,112,97,112,101,114,115,95,114,95,50,56,0);
    let filtern = 3.0;
    let historys = String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,95,51,95,50,52,0);
    let bannerO = 0.0;
    let episodeD = String.fromCharCode(110,95,52,95,108,115,112,108,112,99,0);
    let rewindJ = String.fromCharCode(117,110,97,108,105,103,110,95,118,95,57,0);
    let textlayoutmanager9 = String.fromCharCode(114,95,57,55,95,101,120,112,111,115,117,114,101,0);
    let episodes9 = true;
    let spinnerl: Map<any, any> = new Map([[String.fromCharCode(111,95,49,55,95,99,117,114,114,114,101,110,116,0),String.fromCharCode(101,95,55,57,95,115,97,116,100,120,0)], [String.fromCharCode(106,107,101,110,99,95,56,95,48,0),String.fromCharCode(108,101,97,107,95,56,95,55,49,0)], [String.fromCharCode(120,95,49,55,95,115,117,110,114,105,115,101,115,101,116,0),String.fromCharCode(115,95,52,52,95,116,101,115,116,105,109,103,105,110,116,0)]]);
    let buffer8 = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,53,95,54,56,0);
    let favoritej = String.fromCharCode(107,95,56,57,95,114,116,99,0);
   while (1 == userq.length) {
       let libfileL: Map<any, any> = new Map([[String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,121,95,54,48,0),691], [String.fromCharCode(114,95,57,54,95,115,105,110,107,0),967]]);
       let apple6 = 4.0;
       let uimanagerY = String.fromCharCode(114,95,49,52,95,98,100,108,116,0);
         uimanagerY += `${libfileL.size | parseInt(`${apple6}`)}`;
         uimanagerY = `${libfileL.size}`;
      let hometeamfieldw = String.fromCharCode(116,121,113,112,111,53,99,0) == uimanagerY;
      do {
          let libavdeviceh = String.fromCharCode(114,101,115,105,103,110,95,102,95,56,0);
          let borderlessE = String.fromCharCode(97,95,50,48,95,109,97,108,108,111,99,122,0);
         uimanagerY = `${uimanagerY.length}`;
         libavdeviceh = `${borderlessE.length}`;
         borderlessE += `${borderlessE.length + 3}`;
         if (hometeamfieldw) {
            break;
         }
      } while ((1 > (2 ^ libfileL.size) || (uimanagerY.length ^ 2) > 4) && hometeamfieldw);
         apple6 += parseFloat(`${1}`);
      let canvasa = 6160440.0 >= apple6;
      do {
          let detaily = false;
          let textlayoutmanagern = String.fromCharCode(112,95,54,54,95,105,111,101,114,114,110,111,109,101,109,0);
          let libjsinspectorI: Array<any> = [933, 161, 322];
          let network5: Map<any, any> = new Map([[String.fromCharCode(109,95,52,53,95,104,111,110,101,0),false ], [String.fromCharCode(101,95,48,95,97,116,97,98,108,101,115,0),true ]]);
          let whistleorangeX = String.fromCharCode(99,114,101,97,116,111,114,95,115,95,54,49,0);
         apple6 /= Math.max(parseFloat(`${libfileL.size}`), 5);
         detaily = textlayoutmanagern.length <= whistleorangeX.length;
         textlayoutmanagern = `${(textlayoutmanagern == String.fromCharCode(52,0) ? (detaily ? 3 : 3) : textlayoutmanagern.length)}`;
         libjsinspectorI = [2 ^ libjsinspectorI.length];
         network5 = new Map([[`${libjsinspectorI.length}`, libjsinspectorI.length & textlayoutmanagern.length]]);
         whistleorangeX += `${(String.fromCharCode(87,0) == textlayoutmanagern ? textlayoutmanagern.length : (detaily ? 2 : 4))}`;
         if (canvasa) {
            break;
         }
      } while ((2.44 == (1.69 - apple6)) && canvasa);
       let window_nc0 = String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,95,112,95,49,52,0);
       let untickr = String.fromCharCode(118,95,55,57,95,108,97,114,112,111,108,121,0);
         window_nc0 = `${libfileL.size}`;
      if (untickr.length >= 2) {
         window_nc0 = "2";
      }
       let analytics9: Array<any> = [464, 16, 562];
       let mergerz: Array<any> = [String.fromCharCode(105,95,53,56,95,98,97,114,101,0), String.fromCharCode(111,110,121,120,99,95,104,95,57,50,0), String.fromCharCode(107,95,49,52,95,108,97,112,108,97,99,101,0)];
      textlayoutmanager9 += `${(String.fromCharCode(95,0) == with_6g ? parseInt(`${filtern}`) : with_6g.length)}`;
      break;
   }
      filtern /= Math.max(3, viewsE.length | episodeD.length);
   if (textlayoutmanager9.startsWith(`${cornershoote}`)) {
       let libfbjniR: Array<any> = [446, 297];
       let libruntimeexecutoro = 4.0;
      for (let v = 0; v < 1; v++) {
         libfbjniR.push(1);
      }
      for (let q = 0; q < 1; q++) {
          let leaguedetailsbgX = true;
          let dependenciesj = String.fromCharCode(105,95,54,55,95,99,103,105,109,97,103,101,0);
         libruntimeexecutoro *= ((leaguedetailsbgX ? 1 : 1) ^ 2);
         leaguedetailsbgX = dependenciesj.length <= dependenciesj.length;
      }
      while ((3.23 + libruntimeexecutoro) > 2.61 && (libfbjniR.length + parseInt(`${libruntimeexecutoro}`)) > 3) {
         libfbjniR.push(parseInt(`${libruntimeexecutoro}`));
         break;
      }
      let yellowcirclebg6 = libruntimeexecutoro >= 9672523.0;
      do {
         libruntimeexecutoro -= parseInt(`${libruntimeexecutoro}`) ^ 3;
         if (yellowcirclebg6) {
            break;
         }
      } while ((parseInt(`${libruntimeexecutoro}`) <= libfbjniR.length) && yellowcirclebg6);
          let plashH = String.fromCharCode(114,95,50,54,95,101,110,116,114,105,101,115,0);
          let greyN = false;
         libfbjniR.push((parseInt(`${libruntimeexecutoro}`) % (Math.max(4, (greyN ? 1 : 4)))));
         plashH += `${(String.fromCharCode(90,0) == plashH ? plashH.length : plashH.length)}`;
         greyN = plashH == plashH;
      let reactnativeultimatelistview6 = 6964892 <= libfbjniR.length;
      do {
          let telemetryQ = 5;
          let productG = String.fromCharCode(100,101,98,108,111,99,107,95,112,95,57,52,0);
         libfbjniR = [libfbjniR.length];
         telemetryQ |= productG.length >> (Math.min(4, Math.abs(telemetryQ)));
         productG += "2";
         if (reactnativeultimatelistview6) {
            break;
         }
      } while (reactnativeultimatelistview6 && (4 == (2 ^ libfbjniR.length)));
      textlayoutmanager9 += `${2 * parseInt(`${libruntimeexecutoro}`)}`;
   }
   while ((filtern * 2.75) == 3.12) {
       let middlewareM: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,104,100,99,100,0),955], [String.fromCharCode(100,101,113,117,101,117,101,100,95,113,95,50,57,0),756]]);
       let stylesa = 4.0;
       let minip = String.fromCharCode(101,116,104,111,100,95,109,95,54,49,0);
      for (let c = 0; c < 2; c++) {
         stylesa /= Math.max(4, parseFloat(`${parseInt(`${stylesa}`) + minip.length}`));
      }
      for (let o = 0; o < 3; o++) {
          let stationE = String.fromCharCode(109,97,114,103,105,110,115,95,116,95,51,53,0);
          let mapbufferF = String.fromCharCode(101,110,97,98,108,101,95,50,95,57,49,0);
          let stylesq = String.fromCharCode(109,95,52,54,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0);
          let largesoundq = String.fromCharCode(99,115,119,97,112,95,100,95,50,56,0);
         middlewareM = new Map([[minip, parseInt(`${stylesa}`)]]);
         stationE += `${stationE.length ^ stylesq.length}`;
         mapbufferF = `${mapbufferF.length + 3}`;
         stylesq += `${stylesq.length}`;
         largesoundq += `${largesoundq.length - 3}`;
      }
         stylesa *= parseFloat(`${minip.length}`);
      if (3 < minip.length) {
         middlewareM = new Map([[minip, 1]]);
      }
      let profileL = minip == String.fromCharCode(119,105,111,107,116,106,0);
      do {
         minip += `${minip.length * parseInt(`${stylesa}`)}`;
         if (profileL) {
            break;
         }
      } while (((parseInt(`${stylesa}`) + minip.length) > 4 && (parseFloat(`${minip.length}`) + stylesa) > 4.65) && profileL);
          let gemfileD = 3.0;
          let loginB = String.fromCharCode(111,95,53,54,95,115,101,114,105,97,108,105,115,101,100,0);
          let awayN = 5.0;
         middlewareM = new Map([[`${middlewareM.size}`, minip.length - middlewareM.size]]);
         gemfileD *= (parseFloat(`${loginB == String.fromCharCode(108,0) ? loginB.length : parseInt(`${awayN}`)}`));
         awayN *= parseInt(`${gemfileD}`);
      for (let l = 0; l < 3; l++) {
          let icontransferclub8 = String.fromCharCode(102,95,50,57,95,99,117,115,116,111,109,105,122,101,114,0);
          let icona = String.fromCharCode(117,95,51,49,95,116,104,114,101,97,100,115,108,105,99,101,0);
         minip = `${icontransferclub8.length}`;
         icontransferclub8 += `${icona.length}`;
         icona += `${icona.length}`;
      }
      let iconwechatr = minip.length >= 6998277;
      do {
         minip += `${parseInt(`${stylesa}`) << (Math.min(Math.abs(2), 5))}`;
         if (iconwechatr) {
            break;
         }
      } while ((parseFloat(`${minip.length}`) > stylesa) && iconwechatr);
       let libfiles = String.fromCharCode(100,95,55,49,95,100,117,97,108,0);
       let eighteen_ = String.fromCharCode(107,95,49,55,95,115,108,111,116,115,0);
      filtern /= Math.max(textlayoutmanager9.length, 3);
      break;
   }
      episodeD = `${parseInt(`${cornershoote}`)}`;
   if ((cornershoote + 3.49) < 1.21) {
      selectr.push(userq.length);
   }
   if ((parseInt(`${bannerO}`) - historys.length) < 3) {
      historys += `${1 + selectr.length}`;
   }
   for (let z = 0; z < 1; z++) {
      textlayoutmanager9 += `${(String.fromCharCode(109,0) == textlayoutmanager9 ? episodeD.length : textlayoutmanager9.length)}`;
   }
      selectr = [viewsE.length];
   if (textlayoutmanager9.length < userq.length) {
      textlayoutmanager9 += "3";
   }
       let libavcodecf: Array<any> = [String.fromCharCode(107,101,121,119,111,114,100,95,55,95,51,51,0), String.fromCharCode(108,95,55,49,95,97,97,114,99,104,0)];
       let iconwatchx = String.fromCharCode(101,95,53,55,95,107,98,105,116,0);
       let goalV = 3.0;
      while ((libavcodecf.length | 2) == 3 && 2 == (libavcodecf.length | iconwatchx.length)) {
         iconwatchx += `${parseInt(`${goalV}`) % (Math.max(iconwatchx.length, 10))}`;
         break;
      }
      if (3 < (iconwatchx.length ^ libavcodecf.length)) {
          let defaultplayerimgv = 4.0;
          let libflipper6: Array<any> = [String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,101,95,55,50,0), String.fromCharCode(109,101,114,103,101,95,118,95,49,57,0)];
          let tail9: Array<any> = [String.fromCharCode(99,95,54,52,95,115,116,114,101,97,109,102,111,117,114,99,99,0), String.fromCharCode(113,95,50,50,95,100,105,115,116,114,105,98,117,116,101,0), String.fromCharCode(101,95,56,51,95,113,117,97,110,116,105,108,101,0)];
          let type_8zN = 0.0;
          let bang9 = String.fromCharCode(98,95,56,95,114,101,97,100,99,98,0);
         iconwatchx = `${1 % (Math.max(5, libflipper6.length))}`;
         defaultplayerimgv *= parseFloat(`${bang9.length | 2}`);
         libflipper6 = [tail9.length];
         tail9.push(1);
         type_8zN += tail9.length & 1;
         bang9 = `${bang9.length - parseInt(`${defaultplayerimgv}`)}`;
      }
      if (goalV < 4.40) {
         goalV -= parseFloat(`${iconwatchx.length}`);
      }
         libavcodecf.push(3 & iconwatchx.length);
         goalV -= parseFloat(`${iconwatchx.length >> (Math.min(4, Math.abs(parseInt(`${goalV}`))))}`);
      viewsE += `${(1 >> (Math.min(3, Math.abs((episodes9 ? 1 : 5)))))}`;
   let emojiheartO = textlayoutmanager9 == String.fromCharCode(97,97,55,118,118,116,120,105,0);
   do {
       let umengn = false;
       let manifestV = String.fromCharCode(105,109,105,116,97,116,101,95,53,95,55,49,0);
       let questI = String.fromCharCode(98,108,111,99,107,115,105,122,101,95,102,95,53,54,0);
         umengn = !umengn;
          let smallorangemanG = String.fromCharCode(101,116,104,101,114,110,101,116,95,105,95,54,56,0);
         questI += `${(smallorangemanG == String.fromCharCode(67,0) ? smallorangemanG.length : questI.length)}`;
      while (questI == manifestV) {
         manifestV += `${(String.fromCharCode(53,0) == manifestV ? (umengn ? 5 : 3) : manifestV.length)}`;
         break;
      }
         manifestV += `${manifestV.length ^ 1}`;
      while (manifestV.length <= 3) {
         umengn = questI == String.fromCharCode(106,0);
         break;
      }
      if (2 == manifestV.length && questI.length == 2) {
         questI += `${(questI == String.fromCharCode(113,0) ? questI.length : (umengn ? 4 : 4))}`;
      }
      while (2 < manifestV.length) {
          let libcxxcomponents9 = String.fromCharCode(116,95,57,48,0);
          let statsnomoredatao = String.fromCharCode(98,95,48,95,101,110,99,105,112,104,101,114,0);
          let nterstitialM = 4.0;
         manifestV = `${manifestV.length << (Math.min(questI.length, 3))}`;
         libcxxcomponents9 += `${libcxxcomponents9.length & statsnomoredatao.length}`;
         statsnomoredatao = `${(String.fromCharCode(75,0) == statsnomoredatao ? parseInt(`${nterstitialM}`) : statsnomoredatao.length)}`;
         nterstitialM *= (parseFloat(`${libcxxcomponents9 == String.fromCharCode(112,0) ? parseInt(`${nterstitialM}`) : libcxxcomponents9.length}`));
         break;
      }
      for (let w = 0; w < 3; w++) {
          let upgradeD = 3.0;
          let defaultplayerimgt: Map<any, any> = new Map([[String.fromCharCode(97,110,116,105,97,108,105,97,115,95,121,95,52,57,0),332], [String.fromCharCode(108,108,110,119,95,113,95,48,0),274]]);
         questI = `${manifestV.length}`;
         upgradeD /= Math.max(2, parseFloat(`${1}`));
         defaultplayerimgt.set(`${upgradeD}`, parseInt(`${upgradeD}`));
      }
      if (4 <= manifestV.length) {
          let string2 = 4;
          let rncoreN = 1;
          let issubz: Array<any> = [445, 293, 725];
         manifestV = `${2 * manifestV.length}`;
         string2 >>= Math.min(4, Math.abs(issubz.length | 1));
         rncoreN |= string2 % (Math.max(9, issubz.length));
      }
      textlayoutmanager9 = `${2 | parseInt(`${filtern}`)}`;
      if (emojiheartO) {
         break;
      }
   } while ((episodes9) && emojiheartO);
   let goallogo4 = with_6g == String.fromCharCode(113,109,102,121,116,107,0);
   do {
      with_6g = `${parseInt(`${cornershoote}`) * episodeD.length}`;
      if (goallogo4) {
         break;
      }
   } while ((historys == String.fromCharCode(86,0)) && goallogo4);
      episodes9 = cornershoote <= bannerO;
      with_6g += `${parseInt(`${filtern}`) - 1}`;
   if (episodes9 && 1 <= historys.length) {
       let scheduleY = false;
       let becomem = String.fromCharCode(112,116,105,111,110,115,95,119,95,55,55,0);
       let bangi = String.fromCharCode(117,110,117,115,101,100,95,97,95,56,57,0);
       let libfilen = String.fromCharCode(117,108,97,119,95,114,95,52,50,0);
       let penaltymatchicon9: Map<any, any> = new Map([[String.fromCharCode(115,101,101,110,95,115,95,57,55,0),String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,95,116,95,56,0)], [String.fromCharCode(110,95,53,49,95,112,114,111,98,108,101,109,115,0),String.fromCharCode(115,95,53,95,117,110,105,118,101,114,115,97,108,0)]]);
      while (!becomem.startsWith(`${scheduleY}`)) {
         scheduleY = String.fromCharCode(57,0) == bangi;
         break;
      }
          let photoh = 2.0;
          let backiconp: Map<any, any> = new Map([[String.fromCharCode(106,95,55,57,95,97,114,105,98,0),true ], [String.fromCharCode(102,95,53,52,95,117,115,108,101,101,112,0),false ], [String.fromCharCode(103,95,50,57,95,109,112,101,103,118,105,100,101,111,0),true ]]);
         penaltymatchicon9.set(becomem, backiconp.size >> (Math.min(becomem.length, 3)));
         photoh += parseInt(`${photoh}`);
         backiconp.set(`${photoh}`, 1 ^ parseInt(`${photoh}`));
       let libfollyl = String.fromCharCode(115,95,51,49,95,108,105,98,99,0);
          let p_positionA: Map<any, any> = new Map([[String.fromCharCode(110,95,56,55,95,98,105,110,107,98,0),149], [String.fromCharCode(116,95,55,53,95,103,114,111,117,112,105,110,103,0),229]]);
         bangi = `${(bangi.length & (scheduleY ? 4 : 5))}`;
         p_positionA.set(`${p_positionA.size}`, 3);
         bangi = `${becomem.length}`;
       let connectionz = 1.0;
       let renderz = 3.0;
      let libtobr = becomem == String.fromCharCode(118,56,111,108,51,0);
      do {
         becomem = `${libfollyl.length / (Math.max(bangi.length, 9))}`;
         if (libtobr) {
            break;
         }
      } while ((1 <= (becomem.length + parseInt(`${renderz}`))) && libtobr);
          let iconarrowrightw = 5.0;
          let tooltips5 = String.fromCharCode(113,95,52,49,95,114,101,101,110,99,114,121,112,116,0);
          let tempnodatau = 3.0;
         connectionz -= 2 & parseInt(`${connectionz}`);
         iconarrowrightw -= parseFloat(`${2 >> (Math.min(3, Math.abs(parseInt(`${iconarrowrightw}`))))}`);
         tooltips5 += `${(tooltips5 == String.fromCharCode(56,0) ? parseInt(`${tempnodatau}`) : tooltips5.length)}`;
         tempnodatau -= (parseFloat(`${tooltips5 == String.fromCharCode(53,0) ? parseInt(`${tempnodatau}`) : tooltips5.length}`));
          let macaut = 3.0;
         libfilen += `${bangi.length / 2}`;
         macaut -= parseInt(`${macaut}`) >> (Math.min(5, Math.abs(parseInt(`${macaut}`))));
      let with_me = bangi == String.fromCharCode(121,112,122,0);
      do {
          let corei: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,95,120,100,99,97,109,0),true ], [String.fromCharCode(114,101,101,110,116,114,97,110,116,95,106,95,53,57,0),true ], [String.fromCharCode(115,95,56,51,95,98,111,116,104,0),true ]]);
          let reactnativejsg = String.fromCharCode(103,95,50,54,95,108,105,107,101,108,121,0);
          let main_j9 = true;
         bangi += `${((scheduleY ? 5 : 3))}`;
         corei.set(`${reactnativejsg}`, 3);
         reactnativejsg = `${(String.fromCharCode(57,0) == reactnativejsg ? reactnativejsg.length : (main_j9 ? 4 : 5))}`;
         main_j9 = !main_j9;
         if (with_me) {
            break;
         }
      } while (with_me && (!bangi.includes(`${libfilen.length}`)));
      while (bangi.includes(`${becomem.length}`)) {
         bangi = `${penaltymatchicon9.size}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
         renderz /= Math.max(libfilen.length, 2);
      }
      while (4 <= (5 * becomem.length) && 1 <= (5 + becomem.length)) {
         becomem += `${((scheduleY ? 2 : 3))}`;
         break;
      }
      let emojib = scheduleY ? !scheduleY : scheduleY;
      do {
         scheduleY = 44.0 == renderz;
         if (emojib) {
            break;
         }
      } while ((scheduleY) && emojib);
      if (5 >= bangi.length) {
          let username9 = String.fromCharCode(99,111,110,102,105,103,117,114,101,114,95,121,95,49,48,0);
          let gpayi = 1.0;
          let large7 = String.fromCharCode(120,95,50,54,95,103,114,111,117,112,105,110,103,0);
          let valuesH = String.fromCharCode(99,108,97,109,112,101,100,95,56,95,52,0);
          let subtext2 = 5.0;
         scheduleY = !scheduleY;
         username9 += `${large7.length}`;
         gpayi -= parseFloat(`${1 * parseInt(`${gpayi}`)}`);
         large7 += "1";
         valuesH = `${valuesH.length}`;
         subtext2 /= Math.max((large7 == String.fromCharCode(72,0) ? parseInt(`${gpayi}`) : large7.length), 2);
      }
      episodes9 = (selectr.length + episodeD.length) < 76;
   }
   let dependenciesn = 6914316 >= episodeD.length;
   do {
      episodeD = `${3 / (Math.max(5, textlayoutmanager9.length))}`;
      if (dependenciesn) {
         break;
      }
   } while (dependenciesn && (episodeD.length <= 2));
      rewindJ += `${with_6g.length}`;
   if (rewindJ.length <= 1) {
       let libturbomodulejsijniK = 4.0;
       let hoverm: Array<any> = [121, 838, 615];
       let iconbackwhitey = 2.0;
       let defaultlogo6: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,100,117,108,105,110,103,95,105,95,54,56,0),String.fromCharCode(107,95,50,50,95,112,114,111,100,117,99,116,0)], [String.fromCharCode(99,95,56,48,95,114,101,115,112,111,110,100,115,0),String.fromCharCode(111,95,51,57,95,108,105,110,107,105,110,103,0)]]);
         iconbackwhitey += 1 & hoverm.length;
      while (3.54 <= (iconbackwhitey - libturbomodulejsijniK)) {
          let routerN = 0;
          let sportsW = 4.0;
          let iconnotificationnewv = String.fromCharCode(98,111,120,112,108,111,116,95,119,95,54,52,0);
          let downloadedb = false;
          let logo_: Array<any> = [633, 363, 975];
         iconbackwhitey /= Math.max(1, 2);
         routerN ^= (iconnotificationnewv == String.fromCharCode(88,0) ? iconnotificationnewv.length : logo_.length);
         sportsW += iconnotificationnewv.length;
         downloadedb = (iconnotificationnewv.length - logo_.length) < 69;
         break;
      }
      for (let a = 0; a < 1; a++) {
         hoverm = [hoverm.length / (Math.max(5, parseInt(`${iconbackwhitey}`)))];
      }
      if (!Array.from(defaultlogo6.keys()).includes(`${iconbackwhitey}`)) {
         iconbackwhitey += parseInt(`${libturbomodulejsijniK}`) * 3;
      }
         libturbomodulejsijniK -= parseInt(`${iconbackwhitey}`) >> (Math.min(Math.abs(defaultlogo6.size), 2));
         defaultlogo6.set(`${hoverm.length}`, hoverm.length & 1);
          let collectiont = String.fromCharCode(100,95,49,50,95,108,111,111,115,101,0);
          let goalM = String.fromCharCode(105,95,55,54,95,109,97,112,0);
          let filed0 = String.fromCharCode(119,111,114,100,95,52,95,49,0);
         hoverm = [filed0.length];
         collectiont += `${2 + collectiont.length}`;
         goalM += `${(goalM == String.fromCharCode(57,0) ? goalM.length : collectiont.length)}`;
         filed0 += `${collectiont.length | goalM.length}`;
         defaultlogo6 = new Map([[`${hoverm.length}`, parseInt(`${libturbomodulejsijniK}`)]]);
      let update_rG = 8026016.0 <= iconbackwhitey;
      do {
          let refreshborderlessD: Map<any, any> = new Map([[String.fromCharCode(116,95,51,50,95,97,110,105,109,97,116,101,100,0),true ], [String.fromCharCode(111,112,117,115,95,109,95,54,51,0),false ]]);
          let videobufferloadingo = 2;
          let customU = 5.0;
          let windU = 5.0;
          let launcherB = 5.0;
         iconbackwhitey -= parseInt(`${launcherB}`);
         refreshborderlessD = new Map([[`${windU}`, 1]]);
         videobufferloadingo >>= Math.min(Math.abs(parseInt(`${customU}`)), 4);
         customU -= parseInt(`${windU}`) / (Math.max(2, 1));
         if (update_rG) {
            break;
         }
      } while ((1.20 < (5.43 + libturbomodulejsijniK) && (5.43 + libturbomodulejsijniK) < 5.55) && update_rG);
      if ((iconbackwhitey - 3.62) <= 2.46 || (3.62 - iconbackwhitey) <= 1.68) {
         iconbackwhitey /= Math.max(5, hoverm.length - defaultlogo6.size);
      }
      let anytimeA = 8179808.0 <= iconbackwhitey;
      do {
         iconbackwhitey *= 3;
         if (anytimeA) {
            break;
         }
      } while ((!hoverm.includes(iconbackwhitey)) && anytimeA);
       let iconclosewhitebgQ: Map<any, any> = new Map([[String.fromCharCode(122,95,51,54,95,112,114,111,100,117,99,116,102,0),99], [String.fromCharCode(122,95,51,55,95,118,105,101,119,101,100,0),757], [String.fromCharCode(117,115,101,97,103,101,95,97,95,55,51,0),951]]);
       let emptyL: Map<any, any> = new Map([[String.fromCharCode(112,108,97,99,101,109,97,114,107,95,105,95,51,52,0),943], [String.fromCharCode(103,95,52,54,95,97,117,120,100,97,116,97,0),661], [String.fromCharCode(97,112,116,120,104,100,95,112,95,54,54,0),904]]);
      rewindJ = `${1 % (Math.max(parseInt(`${cornershoote}`), 3))}`;
   }
   while (5.84 < bannerO) {
      bannerO -= parseFloat(`${parseInt(`${filtern}`)}`);
      break;
   }
   if (5 >= (4 + selectr.length) || (textlayoutmanager9.length + selectr.length) >= 4) {
       let maths = 4;
          let matchinactiveF: Array<any> = [773, 386, 748];
          let yingu = false;
         maths &= matchinactiveF.length;
         matchinactiveF.push(1);
         maths /= Math.max(1, maths - 3);
      for (let p = 0; p < 3; p++) {
         maths |= maths;
      }
      textlayoutmanager9 = `${historys.length}`;
   }
   while (2 > (2 % (Math.max(8, textlayoutmanager9.length))) && 3 > (2 * parseInt(`${cornershoote}`))) {
      textlayoutmanager9 = `${userq.length >> (Math.min(2, with_6g.length))}`;
      break;
   }
   for (let h = 0; h < 3; h++) {
      textlayoutmanager9 = `${selectr.length}`;
   }
   let sharewhitef = rewindJ.length <= 6631375;
   do {
       let album5: Array<any> = [702, 608];
       let greenv = true;
       let neoni: Array<any> = [5, 461, 859];
       let hongkong8 = String.fromCharCode(115,109,117,115,104,95,118,95,56,49,0);
       let icontransferclub5 = String.fromCharCode(112,97,103,101,105,110,95,114,95,52,52,0);
      for (let e = 0; e < 1; e++) {
         greenv = neoni.length > album5.length;
      }
         icontransferclub5 += "3";
         hongkong8 = `${(String.fromCharCode(68,0) == icontransferclub5 ? hongkong8.length : icontransferclub5.length)}`;
         greenv = 56 > album5.length;
       let bannerV = 5.0;
       let bridgem = 2.0;
          let basketballZ = 3;
          let refresh5 = true;
         icontransferclub5 += `${icontransferclub5.length >> (Math.min(1, album5.length))}`;
         basketballZ += (basketballZ & (refresh5 ? 4 : 1));
         refresh5 = refresh5 && 58 >= basketballZ;
         neoni.push(parseInt(`${bannerV}`) >> (Math.min(hongkong8.length, 5)));
      let reactnativeratingsb = String.fromCharCode(49,109,53,120,112,97,0) == hongkong8;
      do {
          let form2 = true;
          let graphics8 = 1;
          let nativeexW = String.fromCharCode(99,97,116,97,112,117,108,116,95,117,95,52,55,0);
         hongkong8 += `${nativeexW.length}`;
         form2 = 9 >= graphics8;
         graphics8 /= Math.max(2 ^ graphics8, 5);
         nativeexW += `${((form2 ? 1 : 1) ^ graphics8)}`;
         if (reactnativeratingsb) {
            break;
         }
      } while (reactnativeratingsb && (hongkong8.length == icontransferclub5.length));
      let holderl = 9174701 >= album5.length;
      do {
         album5 = [2];
         if (holderl) {
            break;
         }
      } while ((4.19 < bannerV) && holderl);
       let aboutT = String.fromCharCode(117,95,56,50,95,108,105,102,101,99,121,99,108,101,0);
       let modelsx = String.fromCharCode(122,95,55,51,95,100,111,119,110,114,105,103,104,116,0);
         hongkong8 += `${parseInt(`${bannerV}`) ^ 2}`;
      while (2 < neoni.length) {
         modelsx += `${modelsx.length}`;
         break;
      }
      let overU = 9409484 <= album5.length;
      do {
         album5 = [2];
         if (overU) {
            break;
         }
      } while (overU && (4.21 > (bannerV / (Math.max(7, album5.length))) && (bannerV / (Math.max(2, album5.length))) > 4.21));
       let progressD = 3.0;
      if (modelsx.length >= 1) {
         modelsx += `${(parseInt(`${bannerV}`) << (Math.min(4, Math.abs((greenv ? 5 : 4)))))}`;
      }
      rewindJ += `${rewindJ.length}`;
      if (sharewhitef) {
         break;
      }
   } while (sharewhitef && (5 == rewindJ.length));
   if (textlayoutmanager9.endsWith(buffer8)) {
      buffer8 = `${parseInt(`${filtern}`)}`;
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
