import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './yys_gpay_roboto';
import {VideoLiveType} from '../../global/yys_dice_kuaishou';
import {yys_List, yys_MimoMode} from '../../types/yys_league_mounting';
import VodPlayer, {yys_CountdownInactive} from '../../../components/videoPlayer/yys_heji';
import {lockAppOrientation} from '@redux/actions/yys_comment';
import {yys_MintegralLibavdevice} from '@redux/yys_sport_shrink';
import {yys_Videocommon} from '@redux/reducers/yys_libavdevice';
import {useAppDispatch, useAppSelector} from '@hooks/yys_frame';
import WebView from 'react-native-webview';
import BackIcon from '@static/images/sendUimanager.svg';
import {useIsFocused, useTheme} from '@react-navigation/native';
import yys_event_common from '../../../../Umeng/yys_event_common';
import CountdownIndicator from '../../../components/button/yys_benefit';

interface yys_ConfigureUimanager {
  videoRef?: React.MutableRefObject<yys_CountdownInactive | null>;
  matchID?: number;
  streamID?: number;
  liveDataState?: yys_List;
  onLiveEnd?: any;
  onLoad?: any;
  videoSource?: {
    type: number;
    url: any;
  };
  setVideoSource?: any;
  onGoBack: () => void;
  showCountdown: boolean;
  countdownTime?: number;
  onVipCountdownClick: () => void;
}

const LiveVideo = ({
  videoRef,
  matchID,
  liveDataState,
  onLiveEnd,
  onLoad,
  streamID,
  videoSource,
  setVideoSource,
  onGoBack,
  showCountdown = false,
  countdownTime = 0,
  onVipCountdownClick,
}: yys_ConfigureUimanager) => {
  const {colors} = useTheme();

  const homeName = liveDataState?.home?.name;
  const awayName = liveDataState?.away?.name;
  const combinedName = `${homeName} vs ${awayName}`;

  const dispatch = useAppDispatch();

  const [isReadyPlay, setReadyPlay] = useState(false);
  const settingsReducer: yys_Videocommon = useAppSelector(
    ({settingsReducer}: yys_MintegralLibavdevice) => settingsReducer,
  );

  
  
  
  
  
  // } = useSelector(s => s.videoPlayerControl);

  
  const [streamData, setStreamData] = useState<yys_MimoMode | undefined>();
  const streamsData = liveDataState?.streams;
  const streamRoomID = streamData?.id;
  

  const onHandleBack = () => {
       let castingy = 3.0;
    let bootsplashN = String.fromCharCode(103,105,103,97,98,121,116,101,95,116,95,57,48,0);
    let material9 = String.fromCharCode(98,105,116,114,118,95,110,95,51,57,0);
    let manifests = String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,95,100,95,57,51,0);
    let benefita = 1.0;
    let xadsdk0: Map<any, any> = new Map([[String.fromCharCode(117,115,117,98,95,112,95,49,50,0),727], [String.fromCharCode(118,95,56,52,95,101,120,116,114,97,99,116,105,111,110,0),29]]);
    let register_uxG = String.fromCharCode(97,105,116,101,114,95,56,95,52,57,0);
    let hookN = String.fromCharCode(102,116,118,108,105,110,107,95,106,95,53,51,0);
    let iconb = true;
    let sliderC = String.fromCharCode(102,95,50,55,95,115,101,101,107,97,98,108,101,0);
   while (hookN.length <= manifests.length) {
      hookN += `${((iconb ? 4 : 5) - register_uxG.length)}`;
      break;
   }
   while ((hookN.length * parseInt(`${benefita}`)) <= 5 || (4.77 * benefita) <= 5.86) {
      benefita -= parseFloat(`${register_uxG.length}`);
      break;
   }
   while (3 >= xadsdk0.size) {
      manifests = `${2 ^ xadsdk0.size}`;
      break;
   }
      bootsplashN = "2";
   if (benefita == 4.14 || 5.98 == (benefita * 4.14)) {
      benefita /= Math.max(2, parseFloat(`${parseInt(`${castingy}`)}`));
   }
   if ((castingy / (Math.max(1.10, 6))) == 3.85 || (parseInt(`${castingy}`) / (Math.max(3, 3))) == 1) {
       let canvasx = 0;
       let private_iqY = 1;
       let g_manager4 = String.fromCharCode(118,95,50,48,95,106,97,99,111,115,117,98,0);
      let alertx = private_iqY >= 7285744;
      do {
          let unreadB = String.fromCharCode(115,95,57,50,95,112,111,121,116,109,0);
          let models_: Map<any, any> = new Map([[String.fromCharCode(112,95,53,57,95,109,111,116,105,111,110,112,105,120,101,108,115,0),228], [String.fromCharCode(113,95,51,55,95,109,97,103,121,0),620]]);
          let views3 = String.fromCharCode(105,95,57,52,95,115,111,117,110,100,115,0);
          let reminderV = 3;
         private_iqY -= private_iqY << (Math.min(Math.abs(1), 3));
         unreadB += `${unreadB.length}`;
         models_.set(views3, (String.fromCharCode(100,0) == views3 ? views3.length : unreadB.length));
         reminderV %= Math.max(2, views3.length - models_.size);
         if (alertx) {
            break;
         }
      } while ((g_manager4.startsWith(`${private_iqY}`)) && alertx);
         g_manager4 += "2";
         private_iqY |= g_manager4.length | 2;
      if ((private_iqY >> (Math.min(Math.abs(4), 3))) >= 4 || (private_iqY >> (Math.min(Math.abs(4), 4))) >= 4) {
         private_iqY *= 2 & g_manager4.length;
      }
      for (let o = 0; o < 1; o++) {
          let back7 = true;
          let toponQ = 5.0;
         canvasx /= Math.max(3, 1);
         back7 = toponQ >= 53.66 && !back7;
         toponQ *= (parseFloat(`${parseInt(`${toponQ}`) & (back7 ? 5 : 5)}`));
      }
          let libcrashsdkW = String.fromCharCode(106,95,49,56,95,115,112,101,99,0);
          let temperaturew = String.fromCharCode(99,114,111,112,95,107,95,57,0);
          let whistleO = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,57,95,49,54,0);
         canvasx &= 2;
         libcrashsdkW += `${whistleO.length ^ 2}`;
         temperaturew += `${temperaturew.length + 2}`;
         whistleO = `${(libcrashsdkW == String.fromCharCode(89,0) ? temperaturew.length : libcrashsdkW.length)}`;
         private_iqY /= Math.max(2, 4);
      if (canvasx == private_iqY) {
         private_iqY *= 3;
      }
      while (2 == (private_iqY << (Math.min(g_manager4.length, 4))) && (g_manager4.length << (Math.min(Math.abs(2), 3))) == 5) {
          let libreactE: Array<any> = [String.fromCharCode(113,95,49,56,95,114,97,99,105,110,103,0), String.fromCharCode(107,95,51,52,95,100,101,108,105,109,105,116,101,114,0), String.fromCharCode(98,110,98,105,110,95,104,95,54,50,0)];
          let libavformat3 = 1.0;
          let animationsA: Array<any> = [844, 72];
          let libhermesu = String.fromCharCode(98,95,54,53,95,115,108,105,112,0);
          let catagoryV = true;
         private_iqY ^= private_iqY;
         libreactE = [libreactE.length + 2];
         libavformat3 += (parseFloat(`${(catagoryV ? 3 : 4) - parseInt(`${libavformat3}`)}`));
         animationsA.push(parseInt(`${libavformat3}`) - 2);
         libhermesu += `${(libhermesu == String.fromCharCode(67,0) ? animationsA.length : libhermesu.length)}`;
         catagoryV = (35 == (libreactE.length >> (Math.min(2, Math.abs((!catagoryV ? libreactE.length : 35))))));
         break;
      }
      castingy /= Math.max(4, parseFloat(`${private_iqY >> (Math.min(g_manager4.length, 2))}`));
   }
       let anytimeF = String.fromCharCode(105,109,103,117,116,105,108,115,95,118,95,57,52,0);
       let pointN = String.fromCharCode(101,95,49,48,48,95,115,117,98,109,111,100,101,108,115,0);
       let helpert: Array<any> = [30, 170];
         pointN += `${pointN.length}`;
      let nterstitialp = 7862118 <= pointN.length;
      do {
         pointN = `${pointN.length / 3}`;
         if (nterstitialp) {
            break;
         }
      } while (nterstitialp && (2 >= (helpert.length * pointN.length) || (2 * pointN.length) >= 2));
         pointN = `${(String.fromCharCode(111,0) == pointN ? pointN.length : helpert.length)}`;
          let footballg = false;
          let trasht = 3.0;
          let unimplementedviewM = 5;
         anytimeF += `${helpert.length}`;
         footballg = 77 >= unimplementedviewM || 66.33 >= trasht;
         trasht *= 1;
         unimplementedviewM *= 2 << (Math.min(Math.abs(unimplementedviewM), 5));
      let videojsd = 9026995 >= pointN.length;
      do {
         pointN = `${anytimeF.length & 1}`;
         if (videojsd) {
            break;
         }
      } while ((!anytimeF.startsWith(`${pointN.length}`)) && videojsd);
          let libavcodeca = String.fromCharCode(111,115,116,104,114,101,97,100,115,95,52,95,51,48,0);
         helpert.push((anytimeF == String.fromCharCode(71,0) ? anytimeF.length : pointN.length));
         libavcodeca = `${libavcodeca.length ^ libavcodeca.length}`;
      let libavformat_ = anytimeF.length >= 6736016;
      do {
         anytimeF += `${(String.fromCharCode(49,0) == anytimeF ? helpert.length : anytimeF.length)}`;
         if (libavformat_) {
            break;
         }
      } while ((anytimeF.length >= 1) && libavformat_);
          let leagueK = String.fromCharCode(110,105,115,116,110,105,100,95,117,95,49,54,0);
          let helperh: Map<any, any> = new Map([[String.fromCharCode(97,102,102,101,99,116,101,100,95,119,95,55,54,0),false ], [String.fromCharCode(119,95,52,50,95,115,105,108,101,110,116,108,121,0),false ]]);
         helpert.push((String.fromCharCode(90,0) == pointN ? anytimeF.length : pointN.length));
         leagueK = `${(leagueK == String.fromCharCode(105,0) ? leagueK.length : helperh.size)}`;
         helperh = new Map([[`${helperh.size}`, leagueK.length]]);
      if (1 >= (anytimeF.length >> (Math.min(Math.abs(2), 3))) && 4 >= (helpert.length >> (Math.min(Math.abs(2), 3)))) {
          let libswscaleV = true;
          let pause3 = 2.0;
          let prediction9: Array<any> = [694, 657];
          let libcrashsdkr = String.fromCharCode(116,111,117,112,112,101,114,95,120,95,51,0);
          let singaporeL = 4.0;
         anytimeF = `${prediction9.length}`;
         libswscaleV = 44 <= libcrashsdkr.length;
         pause3 += parseFloat(`${parseInt(`${singaporeL}`)}`);
         prediction9 = [((libswscaleV ? 1 : 5) / (Math.max(7, parseInt(`${pause3}`))))];
         libcrashsdkr += "2";
         singaporeL *= parseFloat(`${parseInt(`${pause3}`) + 1}`);
      }
      hookN = `${(hookN == String.fromCharCode(78,0) ? hookN.length : anytimeF.length)}`;

    if (
      settingsReducer.appOrientation === 'PORTRAIT' ||
      settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN'
    ) {

      benefita += parseFloat(`${1}`);
      castingy *= (parseFloat(`${hookN == String.fromCharCode(67,0) ? parseInt(`${castingy}`) : hookN.length}`));
       let iconY = String.fromCharCode(97,100,100,109,111,100,95,50,95,57,57,0);
       let eventF = String.fromCharCode(115,111,99,107,101,116,115,95,110,95,49,52,0);
       let invitev = String.fromCharCode(98,95,52,95,101,110,99,111,100,105,110,103,98,0);
       let countdown8: Map<any, any> = new Map([[String.fromCharCode(100,95,56,53,95,117,112,108,111,97,100,97,98,108,101,0),209], [String.fromCharCode(105,110,99,111,109,105,110,103,95,121,95,55,52,0),270]]);
          let internetr = 4;
          let sigmobF = String.fromCharCode(98,95,54,52,95,102,115,105,122,101,0);
         countdown8.set(eventF, 1 ^ eventF.length);
         internetr &= (sigmobF == String.fromCharCode(70,0) ? internetr : sigmobF.length);
          let matchesk: Array<any> = [412, 363];
          let pingq: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,97,108,105,103,110,101,114,0),true ], [String.fromCharCode(100,95,52,54,95,115,108,117,103,0),false ]]);
         eventF += `${invitev.length}`;
         matchesk.push(pingq.size >> (Math.min(matchesk.length, 5)));
         pingq = new Map([[`${pingq.size}`, pingq.size]]);
         eventF += `${eventF.length | 3}`;
       let sheetV = String.fromCharCode(101,95,57,48,95,108,97,112,112,101,100,0);
          let macau6 = String.fromCharCode(117,95,56,95,114,101,116,114,105,101,118,105,110,103,0);
          let nextR: Map<any, any> = new Map([[String.fromCharCode(121,101,108,108,111,119,95,110,95,50,51,0),311], [String.fromCharCode(119,95,49,51,95,102,105,108,116,101,114,98,97,110,107,0),116]]);
          let crossX = 1.0;
         eventF += `${(String.fromCharCode(71,0) == invitev ? invitev.length : sheetV.length)}`;
         macau6 = `${3 - macau6.length}`;
         nextR.set(macau6, nextR.size - macau6.length);
         crossX -= parseFloat(`${1 + nextR.size}`);
         invitev += `${3 / (Math.max(5, iconY.length))}`;
         countdown8.set(invitev, invitev.length * countdown8.size);
      let episoder = 5696082 >= countdown8.size;
      do {
         countdown8 = new Map([[iconY, iconY.length]]);
         if (episoder) {
            break;
         }
      } while ((!invitev.startsWith(`${countdown8.size}`)) && episoder);
      benefita += parseFloat(`${iconY.length << (Math.min(eventF.length, 2))}`);
   let direct2 = xadsdk0.size >= 8353183;
   do {
       let libjsiZ = 0;
       let penaltyw = 0.0;
       let serviced = 2;
       let direct9 = false;
         penaltyw *= (parseFloat(`${serviced & (direct9 ? 2 : 1)}`));
          let tooltips4 = 3.0;
          let footballb = true;
         serviced >>= Math.min(5, parseInt(`${Math.abs(((footballb ? 1 : 4) << (Math.min(Math.abs(parseInt(`${tooltips4}`)), 4))))}`));
      while (direct9) {
          let specC: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,103,114,105,100,95,107,95,53,50,0),true ], [String.fromCharCode(112,114,111,109,105,115,101,115,95,111,95,53,51,0),true ], [String.fromCharCode(111,102,102,115,101,116,115,95,107,95,53,53,0),false ]]);
          let activityZ = String.fromCharCode(119,95,57,48,95,99,108,111,117,100,0);
         serviced <<= Math.min(parseInt(`${Math.abs((parseInt(`${penaltyw}`) >> (Math.min(3, Math.abs((direct9 ? 5 : 3))))))}`), 1);
         specC.set(`${activityZ}`, specC.size << (Math.min(Math.abs(1), 2)));
         activityZ = `${(String.fromCharCode(118,0) == activityZ ? specC.size : activityZ.length)}`;
         break;
      }
      let goal4 = libjsiZ <= 8212483;
      do {
         libjsiZ -= 2;
         if (goal4) {
            break;
         }
      } while ((penaltyw >= libjsiZ) && goal4);
      if (libjsiZ == 5) {
         penaltyw /= Math.max(parseFloat(`${2 | parseInt(`${penaltyw}`)}`), 4);
      }
          let infoS = false;
         serviced += 3;
         infoS = !infoS;
         penaltyw *= parseFloat(`${parseInt(`${penaltyw}`) ^ 1}`);
         serviced ^= serviced;
      if (1 >= serviced) {
          let rightO: Array<any> = [471, 292, 325];
         libjsiZ %= Math.max(5, libjsiZ);
         rightO = [rightO.length];
      }
         serviced |= (serviced / (Math.max(10, (direct9 ? 2 : 1))));
      if ((1 * libjsiZ) > 2 && (4.50 - penaltyw) > 2.74) {
         penaltyw /= Math.max(3, parseFloat(`${1}`));
      }
         penaltyw /= Math.max(4, parseFloat(`${parseInt(`${penaltyw}`)}`));
      xadsdk0.set(`${direct9}`, (bootsplashN.length << (Math.min(1, Math.abs((direct9 ? 2 : 1))))));
      if (direct2) {
         break;
      }
   } while ((material9.length <= 5) && direct2);
   for (let t = 0; t < 2; t++) {
      castingy /= Math.max(parseFloat(`${bootsplashN.length / (Math.max(2, 6))}`), 1);
   }
      castingy += parseFloat(`${xadsdk0.size}`);
   while ((material9.length % 1) > 2) {
      benefita /= Math.max(parseFloat(`${hookN.length >> (Math.min(Math.abs(2), 1))}`), 2);
      break;
   }
      setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''), 100);
    } else {

      bootsplashN = `${(String.fromCharCode(111,0) == hookN ? (iconb ? 4 : 5) : hookN.length)}`;
   for (let y = 0; y < 3; y++) {
      hookN = `${parseInt(`${castingy}`)}`;
   }
       let dragY = String.fromCharCode(115,95,49,48,48,95,105,103,104,108,105,103,104,116,115,0);
       let sporty = String.fromCharCode(112,114,111,100,117,99,116,102,95,107,95,54,50,0);
          let favoriteC = 2;
          let zhengpianh = 4;
          let singleN: Array<any> = [885, 877];
         dragY += "3";
         favoriteC %= Math.max(2, zhengpianh / (Math.max(singleN.length, 5)));
         zhengpianh |= 3 << (Math.min(Math.abs(favoriteC), 2));
         singleN = [zhengpianh / 2];
      for (let x = 0; x < 1; x++) {
          let libyogaL = 3;
          let description_5X = 5;
          let classes8 = String.fromCharCode(97,95,56,50,95,115,107,101,119,0);
          let photoF = 2;
         sporty += `${1 / (Math.max(10, sporty.length))}`;
         libyogaL ^= photoF & classes8.length;
         description_5X >>= Math.min(Math.abs(3), 1);
         classes8 += "1";
         photoF ^= (String.fromCharCode(109,0) == classes8 ? classes8.length : description_5X);
      }
      let abidetectv = 9786375 <= dragY.length;
      do {
         dragY = `${(sporty == String.fromCharCode(54,0) ? sporty.length : dragY.length)}`;
         if (abidetectv) {
            break;
         }
      } while (abidetectv && (sporty.length == 2 && 2 == dragY.length));
         dragY += `${sporty.length & dragY.length}`;
          let readQ: Map<any, any> = new Map([[String.fromCharCode(110,95,49,54,95,97,112,112,101,110,100,97,98,108,101,0),957], [String.fromCharCode(97,95,52,55,95,99,104,97,114,116,115,0),706], [String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,111,95,51,57,0),0]]);
          let nativemoduleJ: Array<any> = [634, 150, 126];
          let mimon = String.fromCharCode(97,100,114,109,95,111,95,57,48,0);
         dragY += `${readQ.size}`;
         readQ = new Map([[`${nativemoduleJ.length}`, nativemoduleJ.length << (Math.min(Math.abs(1), 4))]]);
         mimon += "3";
         dragY += `${(String.fromCharCode(107,0) == sporty ? sporty.length : dragY.length)}`;
      manifests = `${manifests.length + dragY.length}`;
       let rootj = 0.0;
       let stringi: Array<any> = [103, 645, 391];
         rootj /= Math.max(1, stringi.length);
         rootj /= Math.max(stringi.length & 2, 1);
      let tumbnailS = stringi.length <= 6902189;
      do {
          let viewerd = String.fromCharCode(109,101,109,95,116,95,55,50,0);
          let resendI: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,108,111,119,101,114,99,97,115,101,100,0),794], [String.fromCharCode(100,105,115,116,97,110,99,101,115,95,50,95,55,50,0),847]]);
          let downloadedP = 4.0;
          let libswresampleg = 3.0;
          let materialp: Array<any> = [String.fromCharCode(106,95,53,53,95,112,97,114,101,110,0), String.fromCharCode(105,95,54,50,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0), String.fromCharCode(107,101,121,108,101,110,95,54,95,49,54,0)];
         stringi.push(viewerd.length / 1);
         viewerd = `${2 / (Math.max(parseInt(`${libswresampleg}`), 10))}`;
         resendI = new Map([[`${resendI.size}`, parseInt(`${libswresampleg}`)]]);
         downloadedP /= Math.max(3, 1);
         materialp.push(1);
         if (tumbnailS) {
            break;
         }
      } while (tumbnailS && ((1.43 * rootj) == 1.84));
      if (2.93 == (2.90 + rootj) || 4 == (stringi.length | 1)) {
         stringi = [1];
      }
      while (1 == (1 | stringi.length) && (1 + stringi.length) == 5) {
          let rewardt: Array<any> = [399, 182, 315];
          let p_unlockC: Array<any> = [882, 647, 28];
          let schedulery = String.fromCharCode(116,104,101,109,101,100,95,118,95,49,51,0);
          let telegramf = String.fromCharCode(109,95,52,95,108,117,116,121,117,118,0);
         rootj /= Math.max(3 << (Math.min(3, stringi.length)), 4);
         rewardt = [schedulery.length << (Math.min(telegramf.length, 2))];
         p_unlockC = [schedulery.length / (Math.max(telegramf.length, 9))];
         break;
      }
      let lessg = stringi.length >= 8836586;
      do {
         stringi.push(parseInt(`${rootj}`));
         if (lessg) {
            break;
         }
      } while (lessg && (stringi.includes(rootj)));
      manifests = `${(String.fromCharCode(85,0) == register_uxG ? register_uxG.length : parseInt(`${benefita}`))}`;
   for (let z = 0; z < 1; z++) {
      iconb = (register_uxG.length / (Math.max(bootsplashN.length, 2))) == 19;
   }
      xadsdk0.set(`${hookN}`, (hookN == String.fromCharCode(48,0) ? xadsdk0.size : hookN.length));
   if (!manifests.startsWith(`${xadsdk0.size}`)) {
       let rnewinterstitialR = true;
       let pluso = String.fromCharCode(102,95,57,48,95,115,116,114,100,117,112,0);
       let libturbomodulejsijnix = String.fromCharCode(115,95,54,51,95,100,101,99,105,115,105,111,110,0);
       let telemetryI: Array<any> = [800, 795, 567];
      for (let t = 0; t < 1; t++) {
         telemetryI = [3 >> (Math.min(3, libturbomodulejsijnix.length))];
      }
       let infoa = 5.0;
         libturbomodulejsijnix += `${pluso.length - libturbomodulejsijnix.length}`;
         rnewinterstitialR = libturbomodulejsijnix.length == 68;
         rnewinterstitialR = (((rnewinterstitialR ? 63 : telemetryI.length) & telemetryI.length) >= 63);
          let internetJ = String.fromCharCode(100,101,99,111,117,112,108,101,95,48,95,57,56,0);
          let vignetter = 4.0;
         telemetryI.push(2 + pluso.length);
         internetJ = `${parseInt(`${vignetter}`)}`;
         vignetter *= parseInt(`${vignetter}`);
      while (!libturbomodulejsijnix.startsWith(`${telemetryI.length}`)) {
         telemetryI.push((String.fromCharCode(118,0) == pluso ? telemetryI.length : pluso.length));
         break;
      }
         rnewinterstitialR = pluso == String.fromCharCode(56,0);
          let tooltipsA = true;
         rnewinterstitialR = (77 <= (telemetryI.length << (Math.min(3, Math.abs((rnewinterstitialR ? 77 : telemetryI.length))))));
         tooltipsA = !tooltipsA;
      while (libturbomodulejsijnix == String.fromCharCode(111,0) || 3 >= pluso.length) {
         pluso += `${telemetryI.length & parseInt(`${infoa}`)}`;
         break;
      }
         infoa /= Math.max((String.fromCharCode(65,0) == pluso ? pluso.length : telemetryI.length), 1);
         pluso += `${(libturbomodulejsijnix == String.fromCharCode(105,0) ? (rnewinterstitialR ? 2 : 4) : libturbomodulejsijnix.length)}`;
      xadsdk0 = new Map([[`${telemetryI.length}`, libturbomodulejsijnix.length - telemetryI.length]]);
   }
      onGoBack();
    }
  };

  useEffect(() => {
    if (streamsData) {
      const streamsDataArrayData = streamsData?.map(index => {
        
        if (index?.streamer_id == streamID) {
          setStreamData(index);
        }

        return () => {
          streamsDataArrayData;
        };
      });
    }
  }, [streamsData]);

  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  

  const lockOrientation = (orientation: string) => {
    dispatch(lockAppOrientation(orientation));
  };

  
  const onReadyForDisplay = useCallback(() => {
       let libjsijniprofilerh = 4.0;
    let roome = 3.0;
    let lightZ: Map<any, any> = new Map([[String.fromCharCode(112,97,110,111,114,97,109,97,95,55,95,49,51,0),295], [String.fromCharCode(115,111,109,101,95,121,95,55,51,0),26]]);
    let huaweiB = 3.0;
    let privacyN = String.fromCharCode(108,95,49,52,95,115,97,110,100,98,111,120,0);
    let navigationF = 1.0;
    let stationsa = 3;
    let customQ = 1;
    let sideQ = 0;
   let libfollyr = 6983726.0 <= navigationF;
   do {
       let basketballx = String.fromCharCode(108,95,50,54,95,102,105,108,116,101,114,0);
       let untick_: Array<any> = [210, 298];
       let plash5 = false;
       let hiad1 = true;
       let logout6 = String.fromCharCode(109,111,100,105,102,105,101,114,95,48,95,55,56,0);
      while (logout6.length < 5 && !hiad1) {
         hiad1 = untick_.length <= 76 && hiad1;
         break;
      }
         basketballx += `${3 | untick_.length}`;
         plash5 = (((plash5 ? untick_.length : 85) / (Math.max(untick_.length, 8))) < 85);
         plash5 = 18 < untick_.length;
      let libzeusl = String.fromCharCode(101,50,109,111,107,105,97,113,57,110,0) == logout6;
      do {
         logout6 = `${((hiad1 ? 3 : 5) % (Math.max(3, 4)))}`;
         if (libzeusl) {
            break;
         }
      } while ((logout6.length <= 1) && libzeusl);
      for (let m = 0; m < 3; m++) {
         hiad1 = !logout6.includes(`${hiad1}`);
      }
      let darky = 8501730 <= untick_.length;
      do {
         untick_.push(2);
         if (darky) {
            break;
         }
      } while (darky && (!basketballx.startsWith(`${untick_.length}`)));
      for (let n = 0; n < 2; n++) {
         hiad1 = plash5 && logout6.length <= 4;
      }
      while (5 < untick_.length || 3 < (untick_.length ^ 5)) {
          let sentryj = 3.0;
          let mode5 = true;
          let plashL: Array<any> = [756, 575, 570];
          let ewardedD = String.fromCharCode(100,97,116,97,116,121,112,101,115,95,52,95,56,55,0);
          let tooltips4 = String.fromCharCode(117,95,55,53,95,116,104,114,101,97,100,115,0);
         untick_.push(parseInt(`${sentryj}`));
         sentryj -= 2 << (Math.min(2, plashL.length));
         mode5 = ewardedD == String.fromCharCode(52,0);
         plashL = [(1 & (mode5 ? 4 : 5))];
         ewardedD = `${(ewardedD == String.fromCharCode(48,0) ? (mode5 ? 5 : 1) : ewardedD.length)}`;
         tooltips4 = `${tooltips4.length & ewardedD.length}`;
         break;
      }
       let diceo = 1.0;
         basketballx = `${((hiad1 ? 5 : 5) & 1)}`;
      while (diceo >= 1.42) {
         hiad1 = !logout6.startsWith(`${hiad1}`);
         break;
      }
      if (!hiad1) {
          let libfbh = String.fromCharCode(113,95,56,95,108,111,103,115,0);
          let eactM = 4.0;
         basketballx += `${untick_.length % (Math.max(1, 7))}`;
         libfbh = `${libfbh.length * parseInt(`${eactM}`)}`;
         eactM /= Math.max(libfbh.length, 2);
      }
         basketballx += `${logout6.length}`;
         plash5 = 96.100 >= diceo;
      navigationF += (parseFloat(`${logout6 == String.fromCharCode(98,0) ? parseInt(`${navigationF}`) : logout6.length}`));
      if (libfollyr) {
         break;
      }
   } while (libfollyr && ((navigationF * parseFloat(`${stationsa}`)) <= 2.37 && 4.92 <= (navigationF * 2.37)));
   while (stationsa <= navigationF) {
       let orientationw = String.fromCharCode(112,105,120,109,97,112,95,116,95,54,49,0);
          let feedbackb = false;
          let libreactperfloggerjniA: Array<any> = [133, 805, 1000];
          let historyv = false;
         orientationw += "1";
         feedbackb = libreactperfloggerjniA.includes(feedbackb);
         libreactperfloggerjniA = [libreactperfloggerjniA.length];
         historyv = (74 > ((feedbackb ? 74 : libreactperfloggerjniA.length) & libreactperfloggerjniA.length));
          let thumbnailX = String.fromCharCode(100,95,56,95,100,111,99,0);
         orientationw += `${thumbnailX.length}`;
      if (orientationw.includes(orientationw)) {
         orientationw += `${orientationw.length % (Math.max(orientationw.length, 8))}`;
      }
      navigationF += parseFloat(`${stationsa}`);
      break;
   }
       let adultP = String.fromCharCode(119,95,55,50,95,109,101,114,103,101,0);
       let canvas1 = 0;
      if (4 == canvas1) {
         adultP = `${canvas1 << (Math.min(Math.abs(3), 2))}`;
      }
         adultP = `${adultP.length}`;
      while (3 == (canvas1 & adultP.length)) {
         canvas1 /= Math.max(2, adultP.length + 2);
         break;
      }
       let short_wC = String.fromCharCode(115,95,48,95,108,105,110,101,98,114,101,97,107,0);
      if (short_wC.includes(`${canvas1}`)) {
         canvas1 |= short_wC.length;
      }
         canvas1 <<= Math.min(Math.abs(canvas1 - short_wC.length), 4);
      stationsa ^= 3;
   while (2.66 == navigationF) {
      navigationF += parseFloat(`${parseInt(`${roome}`)}`);
      break;
   }
      huaweiB += parseInt(`${libjsijniprofilerh}`);
      navigationF /= Math.max(2, parseFloat(`${parseInt(`${roome}`) & parseInt(`${libjsijniprofilerh}`)}`));

    if (!isReadyPlay && videoSource !== undefined) {

      libjsijniprofilerh += parseFloat(`${3}`);
      navigationF += parseFloat(`${stationsa}`);
       let wcopy_9v = 1;
       let libflipperL = String.fromCharCode(122,109,98,118,95,121,95,57,54,0);
       let sharey = String.fromCharCode(97,95,56,54,95,116,104,101,114,101,117,109,0);
      let animatione = 8186190 >= wcopy_9v;
      do {
         wcopy_9v &= sharey.length * libflipperL.length;
         if (animatione) {
            break;
         }
      } while ((4 == (sharey.length / (Math.max(4, 2)))) && animatione);
      for (let a = 0; a < 2; a++) {
         libflipperL += `${wcopy_9v >> (Math.min(Math.abs(1), 1))}`;
      }
      while (3 == wcopy_9v) {
         libflipperL += `${(String.fromCharCode(110,0) == libflipperL ? wcopy_9v : libflipperL.length)}`;
         break;
      }
       let referrerk = 0.0;
         sharey = "1";
      let libjsinspectorB = referrerk >= 8851908.0;
      do {
          let saveW: Map<any, any> = new Map([[String.fromCharCode(122,95,53,54,95,99,104,105,114,112,0),221], [String.fromCharCode(112,95,52,52,95,102,100,101,99,0),494]]);
          let carouselB = 0.0;
          let kickj = 3.0;
         referrerk += parseInt(`${kickj}`) & parseInt(`${carouselB}`);
         saveW.set(`${saveW.size}`, saveW.size);
         carouselB += parseFloat(`${saveW.size % 3}`);
         if (libjsinspectorB) {
            break;
         }
      } while (libjsinspectorB && (parseInt(`${referrerk}`) == sharey.length));
         sharey += `${libflipperL.length ^ sharey.length}`;
      if (sharey.length < libflipperL.length) {
         libflipperL = "1";
      }
         libflipperL += `${sharey.length / 1}`;
      lightZ = new Map([[`${customQ}`, 3]]);
   for (let y = 0; y < 2; y++) {
      lightZ.set(`${stationsa}`, lightZ.size * 3);
   }
   let hooksC = stationsa >= 6849930;
   do {
      stationsa *= 1;
      if (hooksC) {
         break;
      }
   } while ((stationsa > huaweiB) && hooksC);
   let bannert = libjsijniprofilerh <= 7583232.0;
   do {
      libjsijniprofilerh += parseFloat(`${1}`);
      if (bannert) {
         break;
      }
   } while (bannert && (roome < libjsijniprofilerh));
      setReadyPlay(true);

   if (2.94 > huaweiB) {
      libjsijniprofilerh /= Math.max(parseFloat(`${customQ * 2}`), 2);
   }
   if (2 >= privacyN.length) {
      privacyN += `${parseInt(`${navigationF}`) & 3}`;
   }
   let type_cF = 5686034.0 <= roome;
   do {
      roome /= Math.max(5, parseFloat(`${stationsa}`));
      if (type_cF) {
         break;
      }
   } while (type_cF && (5.64 <= (huaweiB * roome)));
       let ewarded7 = String.fromCharCode(112,114,105,118,97,116,101,95,110,95,53,52,0);
       let rightb: Array<any> = [413, 860];
       let championV = String.fromCharCode(101,118,117,116,105,108,95,49,95,51,54,0);
       let policyL: Map<any, any> = new Map([[String.fromCharCode(119,95,49,49,95,114,111,116,97,116,105,111,110,97,110,103,108,101,0),152], [String.fromCharCode(112,95,50,54,95,116,101,109,112,108,97,116,101,100,0),142]]);
         policyL.set(championV, championV.length - 3);
          let mapbuffero = String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,95,49,95,55,52,0);
         championV = `${1 + championV.length}`;
         mapbuffero += `${mapbuffero.length}`;
       let knewinterstitialL = String.fromCharCode(108,95,50,57,95,97,114,101,113,117,101,115,116,0);
       let indicatorz = String.fromCharCode(105,95,51,53,95,105,110,99,108,117,100,101,115,0);
      let materiale = 5414244 <= policyL.size;
      do {
         policyL.set(indicatorz, (indicatorz == String.fromCharCode(105,0) ? rightb.length : indicatorz.length));
         if (materiale) {
            break;
         }
      } while ((2 == (rightb.length >> (Math.min(Math.abs(policyL.size), 2))) && 2 == (rightb.length >> (Math.min(Math.abs(policyL.size), 3)))) && materiale);
         rightb.push(2 | knewinterstitialL.length);
         championV = `${policyL.size << (Math.min(rightb.length, 1))}`;
      for (let y = 0; y < 1; y++) {
          let photo3 = String.fromCharCode(105,95,55,56,95,115,99,114,101,101,110,99,97,115,116,0);
          let context7: Array<any> = [261, 719];
          let auto_7L = 2.0;
         indicatorz = `${rightb.length & 1}`;
         photo3 = `${parseInt(`${auto_7L}`)}`;
         context7 = [context7.length];
         auto_7L /= Math.max(context7.length, 3);
      }
      let searchv = 6883945 >= indicatorz.length;
      do {
          let productE = String.fromCharCode(107,95,54,57,95,115,112,111,110,115,111,114,101,100,0);
         indicatorz = `${productE.length & 3}`;
         if (searchv) {
            break;
         }
      } while ((ewarded7.length >= 1) && searchv);
      customQ /= Math.max(4, lightZ.size);
   let closeo = navigationF >= 9269218.0;
   do {
      navigationF /= Math.max(2, parseFloat(`${lightZ.size & 3}`));
      if (closeo) {
         break;
      }
   } while (closeo && (stationsa <= navigationF));
   while (2.86 >= (parseFloat(`${stationsa}`) * roome) && 1 >= (stationsa * parseInt(`${roome}`))) {
      roome /= Math.max(3, parseFloat(`${stationsa}`));
      break;
   }
      yys_event_common.sportDetailsPlaysTimesAnalytics(
        videoSource.type === VideoLiveType.LIVE ? 'live' : 'animation',
      );
    }
  }, [isReadyPlay, videoSource]);
  

  const isFocus = useIsFocused();

  return (
    <View style={styles.container}>
      {/* <View style={{height: isFullScreen ? '100%' : 'auto'}}> */}
      {/* <View style={styles.videoDiv}> */}
      {(videoSource !== undefined || streamData?.src) && (
        <>
          {videoSource?.url !== undefined &&
            (videoSource.type === VideoLiveType.LIVE ? (
              <>
                {isFocus && (
                  <VodPlayer
                    ref={videoRef}
                    onBack={onHandleBack}
                    vod_source={videoSource.url}
                    videoType="floatingIndex"
                    vodTitle={combinedName}
                    appOrientation={settingsReducer.appOrientation}
                    devicesOrientation={settingsReducer.devicesOrientation}
                    lockOrientation={lockOrientation}
                    onReadyForDisplay={onReadyForDisplay}
                  />
                )}
                {showCountdown && (
                  <CountdownIndicator
                    timer={countdownTime}
                    onClickVip={() => {
                      onVipCountdownClick();
                    }}
                    vipButtonText="开通VIP畅享无限内容"
                    containerStyle={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                    }}
                  />
                )}
              </>
            ) : (
              <View
                style={{
                  width: '100%',
                  aspectRatio: 16 / 9,
                }}>
                <WebView resizeMode="contain" source={{uri: videoSource.url}} />
                <TouchableOpacity
                  onPress={onHandleBack}
                  style={{position: 'absolute', padding: 20}}>
                  <BackIcon
                    style={{
                      color: colors.text,
                    }}></BackIcon>
                </TouchableOpacity>
              </View>
            ))}
        </>
      )}
      {/* </View> */}
    </View>
  );
};

export default memo(LiveVideo);
