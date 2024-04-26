import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './wawa_hiad_iconnewchat';
import { VideoLiveType } from '../../global/wawa_plash_home';
import { wawaPhone, wawaText } from '../../types/wawa_klevin_iconwechat';
import VodPlayer, { wawaImage } from '../../../components/videoPlayer/wawa_orangetick_giftbutton';
import { lockAppOrientation } from '@redux/actions/wawa_apple_settings';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { wawaBackground } from '@redux/reducers/wawa_comment';
import { useAppDispatch, useAppSelector } from '@hooks/wawa_root';
import WebView from 'react-native-webview';
import BackIcon from '@static/images/loadingWhistleorange.svg';
import { useIsFocused, useTheme } from '@react-navigation/native';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import CountdownIndicator from '../../../components/button/wawa_middle_langkey';

interface wawaAwayShow {
  videoRef?: React.MutableRefObject<wawaImage | null>;
  matchID?: number;
  streamID?: number;
  liveDataState?: wawaPhone;
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
}: wawaAwayShow) => {
  const { colors } = useTheme();

  const homeName = liveDataState?.home?.name;
  const awayName = liveDataState?.away?.name;
  const combinedName = `${homeName} vs ${awayName}`;

  const dispatch = useAppDispatch();

  const [isReadyPlay, setReadyPlay] = useState(false);
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer,
  );

  
  
  
  
  
  // } = useSelector(s => s.videoPlayerControl);

  
  const [streamData, setStreamData] = useState<wawaText | undefined>();
  const streamsData = liveDataState?.streams;
  const streamRoomID = streamData?.id;
  

  const onHandleBack = () => {
       let webview0 = String.fromCharCode(114,115,116,114,105,112,95,53,95,51,56,0);
    let libyogaa = true;
    let album7: Array<any> = [941, 4, 529];
    let scheduleW = false;
    let subbasketballplayerX = String.fromCharCode(103,101,110,115,95,117,95,55,56,0);
    let streaming_ = 4.0;
    let collectionG = String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,97,95,55,49,0);
    let reviewV: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,110,101,115,115,95,98,95,56,48,0),662], [String.fromCharCode(115,117,98,115,116,97,116,101,95,53,95,52,50,0),570], [String.fromCharCode(119,104,97,116,115,95,114,95,50,53,0),121]]);
    let basketballmatchdetailbgi = String.fromCharCode(115,116,114,117,99,116,115,95,121,95,57,48,0);
    let iconcurrentmatchH: Array<any> = [String.fromCharCode(114,97,119,118,105,100,101,111,95,50,95,52,48,0), String.fromCharCode(99,111,114,100,95,114,95,57,52,0)];
    let disconnectedlogo9 = 2.0;
    let abidetectN: Array<any> = [121, 29, 462];
    let sportL = 4;
    let bangv = 1.0;
    let dycreatorw = 5.0;
    let unewarchdefaultsm = true;
    let libcxxcomponentsj = 4;
    let libreanimatedM = 1.0;
   while (!scheduleW) {
      scheduleW = basketballmatchdetailbgi.length < 44;
      break;
   }
   let libpangleflippedK = basketballmatchdetailbgi == String.fromCharCode(101,55,106,0);
   do {
       let largeu = 3.0;
       let modityo = 0;
          let renderi = 0.0;
          let bgvipsport7 = 4.0;
         largeu += 1 << (Math.min(Math.abs(modityo), 1));
         renderi *= parseFloat(`${parseInt(`${bgvipsport7}`)}`);
         bgvipsport7 -= parseFloat(`${parseInt(`${renderi}`)}`);
         largeu *= 1 ^ parseInt(`${largeu}`);
      for (let p = 0; p < 2; p++) {
          let viewerB = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,55,95,53,51,0);
          let moduleQ = String.fromCharCode(97,95,56,95,108,115,102,108,115,112,100,0);
          let iconrefreshh = String.fromCharCode(106,95,52,53,95,100,105,97,103,111,110,97,108,0);
          let rewardJ: Map<any, any> = new Map([[String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,119,95,56,55,0),127], [String.fromCharCode(115,116,97,116,95,48,95,49,0),198], [String.fromCharCode(115,99,97,108,97,114,95,108,95,52,49,0),115]]);
          let abidetectl = String.fromCharCode(99,97,114,114,105,101,114,95,48,95,53,48,0);
         modityo <<= Math.min(Math.abs(3 >> (Math.min(2, Math.abs(parseInt(`${largeu}`))))), 5);
         viewerB += `${moduleQ.length}`;
         moduleQ = `${2 ^ rewardJ.size}`;
         iconrefreshh += `${rewardJ.size ^ iconrefreshh.length}`;
         abidetectl = `${viewerB.length ^ 1}`;
      }
      if ((4 >> (Math.min(1, Math.abs(modityo)))) == 2) {
         largeu /= Math.max(2, modityo);
      }
      for (let m = 0; m < 2; m++) {
         modityo ^= 2 | modityo;
      }
         modityo -= 2 / (Math.max(3, parseInt(`${largeu}`)));
      basketballmatchdetailbgi = `${album7.length}`;
      if (libpangleflippedK) {
         break;
      }
   } while (libpangleflippedK && (basketballmatchdetailbgi.endsWith(`${album7.length}`)));
   while (!abidetectN.includes(disconnectedlogo9)) {
      abidetectN = [collectionG.length - 3];
      break;
   }
   for (let f = 0; f < 2; f++) {
       let kuaishouz = false;
       let libsgcore1 = String.fromCharCode(105,115,112,111,115,97,98,108,101,95,104,95,51,51,0);
       let libturbomodulejsijniC = String.fromCharCode(110,95,50,56,95,102,114,111,109,0);
       let analyticz = 4.0;
       let renderT = String.fromCharCode(102,116,118,112,110,111,100,101,95,111,95,52,53,0);
       let libmapbufferjnij = 3.0;
       let analyticsJ = 0;
      let ping3 = libmapbufferjnij >= 9187857.0;
      do {
         libmapbufferjnij -= parseFloat(`${2}`);
         if (ping3) {
            break;
         }
      } while ((libmapbufferjnij > analyticsJ) && ping3);
      let homeloadingd = 5614125 >= libturbomodulejsijniC.length;
      do {
          let attributedstringY: Array<any> = [636, 360, 816];
         libturbomodulejsijniC += `${parseInt(`${analyticz}`) << (Math.min(1, Math.abs(3)))}`;
         attributedstringY.push(attributedstringY.length);
         if (homeloadingd) {
            break;
         }
      } while ((1 <= libturbomodulejsijniC.length) && homeloadingd);
         libsgcore1 = "1";
      while (2 <= (libturbomodulejsijniC.length ^ 4) && (parseInt(`${libmapbufferjnij}`) / (Math.max(4, 3))) <= 2) {
         libmapbufferjnij += parseFloat(`${parseInt(`${libmapbufferjnij}`)}`);
         break;
      }
      let nterstitialm = kuaishouz ? !kuaishouz : kuaishouz;
      do {
          let temperatureo = 2.0;
          let emptyX: Array<any> = [734, 149, 234];
          let iconh = 2.0;
          let long_kt7 = 0.0;
         kuaishouz = !libsgcore1.endsWith(`${long_kt7}`);
         temperatureo *= parseFloat(`${2 * parseInt(`${iconh}`)}`);
         emptyX.push(3 << (Math.min(Math.abs(parseInt(`${iconh}`)), 5)));
         long_kt7 -= parseFloat(`${parseInt(`${iconh}`) | parseInt(`${temperatureo}`)}`);
         if (nterstitialm) {
            break;
         }
      } while (nterstitialm && (!renderT.endsWith(`${kuaishouz}`)));
      sportL *= (iconcurrentmatchH.length * (scheduleW ? 4 : 4));
   }
      subbasketballplayerX += `${1 | abidetectN.length}`;
      album7 = [collectionG.length];
       let firebaseH = 3;
       let iconclosewhitewithbgr = 5.0;
         firebaseH <<= Math.min(3, Math.abs(1 % (Math.max(parseInt(`${iconclosewhitewithbgr}`), 4))));
         iconclosewhitewithbgr -= 2 % (Math.max(5, parseInt(`${iconclosewhitewithbgr}`)));
      let libavcodec8 = 7332138 <= firebaseH;
      do {
         firebaseH <<= Math.min(Math.abs(firebaseH), 1);
         if (libavcodec8) {
            break;
         }
      } while ((iconclosewhitewithbgr <= firebaseH) && libavcodec8);
      if (iconclosewhitewithbgr <= firebaseH) {
          let backiconY = false;
          let contextH = 3;
          let smallsoundq = true;
         firebaseH %= Math.max(contextH, 5);
         backiconY = !smallsoundq;
         contextH %= Math.max(3, ((smallsoundq ? 5 : 4)));
      }
         iconclosewhitewithbgr += parseInt(`${iconclosewhitewithbgr}`) | firebaseH;
      while (1.55 <= (iconclosewhitewithbgr + 2.21) || 3.5 <= (iconclosewhitewithbgr + 2.21)) {
          let overlayX = String.fromCharCode(100,95,51,54,95,115,116,98,108,0);
          let chatroombackgroundQ = String.fromCharCode(109,95,52,95,119,111,114,107,101,114,115,0);
          let popup3 = 0.0;
          let penaltymatchiconN = String.fromCharCode(116,101,120,116,115,95,56,95,54,54,0);
         firebaseH |= parseInt(`${iconclosewhitewithbgr}`);
         overlayX = `${2 | penaltymatchiconN.length}`;
         chatroombackgroundQ = `${chatroombackgroundQ.length * 3}`;
         popup3 += parseFloat(`${1 - overlayX.length}`);
         penaltymatchiconN = `${overlayX.length * penaltymatchiconN.length}`;
         break;
      }
      iconcurrentmatchH = [collectionG.length];
   let livenodatabgimgH = 5898498.0 <= disconnectedlogo9;
   do {
      disconnectedlogo9 *= reviewV.size;
      if (livenodatabgimgH) {
         break;
      }
   } while (livenodatabgimgH && ((webview0.length % 2) == 4 || (disconnectedlogo9 * 4.58) == 4.19));
   while (libyogaa) {
       let securityz = 3.0;
       let loadingspinnero = String.fromCharCode(100,120,116,97,95,101,95,55,49,0);
       let pointz = 3.0;
      while (5 < (loadingspinnero.length + parseInt(`${securityz}`))) {
         securityz *= (parseFloat(`${loadingspinnero == String.fromCharCode(111,0) ? loadingspinnero.length : parseInt(`${securityz}`)}`));
         break;
      }
         securityz *= parseFloat(`${loadingspinnero.length}`);
      while ((1 * parseInt(`${pointz}`)) <= 5 && 4.91 <= (parseFloat(`${loadingspinnero.length}`) * pointz)) {
         pointz -= parseFloat(`${parseInt(`${pointz}`) << (Math.min(Math.abs(3), 3))}`);
         break;
      }
         loadingspinnero = `${parseInt(`${pointz}`) >> (Math.min(2, Math.abs(parseInt(`${securityz}`))))}`;
      for (let e = 0; e < 2; e++) {
         loadingspinnero += `${parseInt(`${securityz}`) - loadingspinnero.length}`;
      }
      if (pointz >= securityz) {
         securityz *= (parseFloat(`${loadingspinnero == String.fromCharCode(98,0) ? loadingspinnero.length : parseInt(`${pointz}`)}`));
      }
         loadingspinnero += `${loadingspinnero.length >> (Math.min(3, Math.abs(parseInt(`${securityz}`))))}`;
         securityz *= parseFloat(`${2}`);
       let taiwant = 3.0;
      abidetectN = [subbasketballplayerX.length];
      break;
   }

    if (
      settingsReducer.appOrientation === 'PORTRAIT' ||
      settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN'
    ) {

   let tickedN = String.fromCharCode(116,120,105,113,119,54,105,119,104,0) == subbasketballplayerX;
   do {
      subbasketballplayerX = `${parseInt(`${disconnectedlogo9}`) / (Math.max(iconcurrentmatchH.length, 9))}`;
      if (tickedN) {
         break;
      }
   } while (((subbasketballplayerX.length - disconnectedlogo9) == 4.77 || (subbasketballplayerX.length - disconnectedlogo9) == 4.77) && tickedN);
      abidetectN = [2];
   if (5 > (abidetectN.length + 4) && (1.79 - disconnectedlogo9) > 4.69) {
      disconnectedlogo9 -= 2;
   }
      libyogaa = iconcurrentmatchH.length < 91;
      abidetectN.push(sportL << (Math.min(2, Math.abs(3))));
   for (let e = 0; e < 2; e++) {
      subbasketballplayerX += `${parseInt(`${disconnectedlogo9}`) & parseInt(`${bangv}`)}`;
   }
   let analyticsz = album7.length >= 6994771;
   do {
      album7.push(3);
      if (analyticsz) {
         break;
      }
   } while (analyticsz && (3 == (webview0.length / 4) && (4 / (Math.max(9, album7.length))) == 3));
   let sharewhiteV = webview0 == String.fromCharCode(119,114,119,103,0);
   do {
      webview0 += "3";
      if (sharewhiteV) {
         break;
      }
   } while ((5 < (iconcurrentmatchH.length / (Math.max(1, 9))) || (iconcurrentmatchH.length / (Math.max(7, webview0.length))) < 1) && sharewhiteV);
   let main_aI = dycreatorw >= 8643055.0;
   do {
      dycreatorw += sportL + reviewV.size;
      if (main_aI) {
         break;
      }
   } while ((dycreatorw == 1.95) && main_aI);
      setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''), 100);
    } else {

   let short_47 = abidetectN.length <= 8155986;
   do {
       let settings = 5.0;
       let dice3: Array<any> = [438, 163];
      let selects = settings >= 6004343.0;
      do {
          let components5 = String.fromCharCode(117,112,109,105,120,95,121,95,53,56,0);
          let trophyP = String.fromCharCode(114,95,57,56,95,101,109,111,106,105,0);
          let libcrashsdkF: Map<any, any> = new Map([[String.fromCharCode(101,120,112,114,101,115,115,95,122,95,52,57,0),true ], [String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,106,95,56,50,0),true ]]);
         settings /= Math.max(2, 1 ^ libcrashsdkF.size);
         components5 = `${2 + trophyP.length}`;
         trophyP = `${(String.fromCharCode(73,0) == components5 ? components5.length : trophyP.length)}`;
         libcrashsdkF.set(components5, 3);
         if (selects) {
            break;
         }
      } while (selects && (1.53 >= (dice3.length * settings) && (parseInt(`${settings}`) * dice3.length) >= 3));
         dice3 = [1 | parseInt(`${settings}`)];
         settings *= 2;
      let privacyj = 7256084 <= dice3.length;
      do {
         dice3 = [2 * dice3.length];
         if (privacyj) {
            break;
         }
      } while (privacyj && ((settings - dice3.length) == 1.78));
          let libsgcoreA = 1.0;
         settings *= dice3.length;
         libsgcoreA *= 1;
          let strV: Map<any, any> = new Map([[String.fromCharCode(97,101,115,116,97,98,95,115,95,52,55,0),368], [String.fromCharCode(115,116,101,112,112,101,100,95,103,95,53,51,0),531], [String.fromCharCode(116,97,98,108,101,108,105,109,95,49,95,54,49,0),247]]);
          let submitO = false;
         settings += dice3.length ^ 3;
         strV.set(`${strV.size}`, strV.size % 1);
         submitO = strV.size < strV.size;
      abidetectN.push(2 & parseInt(`${disconnectedlogo9}`));
      if (short_47) {
         break;
      }
   } while (short_47 && (5 <= (album7.length << (Math.min(Math.abs(5), 4))) || (5 << (Math.min(1, album7.length))) <= 4));
       let mathr = String.fromCharCode(112,97,114,116,105,97,108,95,104,95,55,50,0);
       let yellowanimationliveh = 5.0;
       let handlern = 3;
       let inviteY = 4;
         handlern %= Math.max(3, parseInt(`${yellowanimationliveh}`) / 3);
          let settingsf = String.fromCharCode(115,116,97,114,116,95,51,95,51,52,0);
          let showmoreg: Map<any, any> = new Map([[String.fromCharCode(114,95,52,49,95,101,110,103,105,110,101,115,0),String.fromCharCode(112,95,50,52,95,102,115,101,101,107,0)], [String.fromCharCode(102,95,49,56,0),String.fromCharCode(98,105,111,109,101,116,114,121,95,116,95,57,52,0)], [String.fromCharCode(104,95,55,52,95,108,97,98,101,108,115,0),String.fromCharCode(105,95,54,52,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0)]]);
         mathr += `${inviteY}`;
         settingsf += `${1 & settingsf.length}`;
         showmoreg = new Map([[`${showmoreg.size}`, 1]]);
      for (let v = 0; v < 3; v++) {
         handlern <<= Math.min(1, Math.abs(3));
      }
         yellowanimationliveh /= Math.max(5, parseFloat(`${3 - parseInt(`${yellowanimationliveh}`)}`));
      for (let v = 0; v < 1; v++) {
         handlern -= 2;
      }
      collectionG = `${(parseInt(`${yellowanimationliveh}`) ^ (scheduleW ? 1 : 1))}`;
   let hooksw = collectionG == String.fromCharCode(50,113,97,97,0);
   do {
      collectionG += `${(1 % (Math.max(4, (scheduleW ? 2 : 5))))}`;
      if (hooksw) {
         break;
      }
   } while ((2 == (parseInt(`${streaming_}`) + 3) || 3 == (3 | collectionG.length)) && hooksw);
   while (scheduleW) {
       let hongkongS = String.fromCharCode(108,111,97,100,95,97,95,56,49,0);
       let fills = 3.0;
       let orangeuparrowH = 4;
         hongkongS += `${(String.fromCharCode(95,0) == hongkongS ? parseInt(`${fills}`) : hongkongS.length)}`;
      if (1 >= (5 >> (Math.min(3, Math.abs(orangeuparrowH)))) || 5 >= (orangeuparrowH + parseInt(`${fills}`))) {
         fills *= parseFloat(`${hongkongS.length >> (Math.min(Math.abs(1), 4))}`);
      }
       let full4 = 5.0;
       let sigmobY = 4.0;
      while (fills <= orangeuparrowH) {
         fills -= parseFloat(`${3}`);
         break;
      }
          let renewr = true;
          let bottoma: Map<any, any> = new Map([[String.fromCharCode(106,95,50,50,95,98,97,114,114,101,116,116,0),String.fromCharCode(117,95,55,55,95,112,114,101,108,105,109,105,110,97,114,121,0)], [String.fromCharCode(115,101,103,109,97,112,95,120,95,51,51,0),String.fromCharCode(114,95,52,55,95,100,101,99,111,100,101,0)], [String.fromCharCode(110,95,51,53,95,108,97,112,112,101,100,0),String.fromCharCode(114,101,109,97,112,112,101,100,95,117,95,52,0)]]);
         sigmobY /= Math.max(parseFloat(`${3 * parseInt(`${full4}`)}`), 4);
         renewr = bottoma.size >= 24;
         bottoma = new Map([[`${bottoma.size}`, 3]]);
      for (let s = 0; s < 2; s++) {
         full4 += parseFloat(`${2 * parseInt(`${fills}`)}`);
      }
         orangeuparrowH <<= Math.min(4, Math.abs(orangeuparrowH & 3));
      while (orangeuparrowH == 1) {
         orangeuparrowH <<= Math.min(Math.abs(1), 4);
         break;
      }
      while ((parseInt(`${fills}`) + 5) == 4 || 5 == (5 - hongkongS.length)) {
         fills -= parseFloat(`${3 ^ parseInt(`${sigmobY}`)}`);
         break;
      }
      scheduleW = 71.32 == dycreatorw;
      break;
   }
       let pressuref = 4.0;
       let reactnavigationM = 3.0;
       let i_lockO = String.fromCharCode(114,101,115,105,122,101,114,95,51,95,52,52,0);
          let activityx = 3.0;
          let langE = 3.0;
         pressuref += parseFloat(`${1}`);
         activityx -= parseInt(`${langE}`) & 3;
         langE += parseFloat(`${parseInt(`${activityx}`)}`);
          let applee = String.fromCharCode(104,95,54,95,115,101,110,100,0);
         i_lockO = `${i_lockO.length / 3}`;
         applee += `${applee.length}`;
      let iconlogout_ = 9731927.0 <= reactnavigationM;
      do {
         reactnavigationM += parseFloat(`${parseInt(`${reactnavigationM}`) & 3}`);
         if (iconlogout_) {
            break;
         }
      } while (iconlogout_ && (reactnavigationM >= pressuref));
         pressuref += parseFloat(`${i_lockO.length}`);
         reactnavigationM -= parseFloat(`${parseInt(`${pressuref}`)}`);
         reactnavigationM += parseFloat(`${parseInt(`${pressuref}`)}`);
      for (let i = 0; i < 1; i++) {
         reactnavigationM *= parseFloat(`${parseInt(`${pressuref}`)}`);
      }
          let backgroundA = 0.0;
          let search5 = String.fromCharCode(112,95,53,51,95,118,112,120,101,110,99,0);
          let fastforwardV = true;
         i_lockO = `${((fastforwardV ? 4 : 5) * parseInt(`${reactnavigationM}`))}`;
         backgroundA /= Math.max(search5.length + 3, 1);
         search5 = `${1 << (Math.min(2, search5.length))}`;
         fastforwardV = search5.length == parseInt(`${backgroundA}`);
      while (i_lockO.includes(`${reactnavigationM}`)) {
         i_lockO += "3";
         break;
      }
      album7.push(1 + parseInt(`${disconnectedlogo9}`));
       let launchC = String.fromCharCode(111,95,51,48,95,113,100,109,99,0);
          let gradleb = 4.0;
         launchC += `${3 - launchC.length}`;
         gradleb -= 2;
         launchC = `${launchC.length}`;
         launchC += `${launchC.length % (Math.max(2, launchC.length))}`;
      streaming_ /= Math.max(parseFloat(`${launchC.length}`), 5);
       let historyQ: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,104,97,115,104,95,98,95,54,55,0),String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,115,95,55,95,54,0)], [String.fromCharCode(112,95,57,54,95,99,97,116,101,103,111,114,105,101,115,0),String.fromCharCode(115,95,50,56,95,98,105,110,107,98,0)], [String.fromCharCode(117,95,52,52,95,97,118,100,99,116,0),String.fromCharCode(120,95,50,50,95,104,119,97,99,99,101,108,115,0)]]);
      while (4 <= (historyQ.size * 2)) {
         historyQ.set(`${historyQ.size}`, 3 * historyQ.size);
         break;
      }
          let minimizen = true;
         historyQ = new Map([[`${historyQ.size}`, historyQ.size + 1]]);
          let textlayoutmanagerN = true;
         historyQ = new Map([[`${historyQ.size}`, (historyQ.size + (textlayoutmanagerN ? 4 : 1))]]);
      subbasketballplayerX = `${abidetectN.length - parseInt(`${disconnectedlogo9}`)}`;
   let smallsoundA = 5169134 <= abidetectN.length;
   do {
      abidetectN.push(1);
      if (smallsoundA) {
         break;
      }
   } while ((4 >= (abidetectN.length - 5) || (collectionG.length - 5) >= 4) && smallsoundA);
       let minivod1 = String.fromCharCode(104,95,54,95,109,101,103,97,98,121,116,101,0);
      if (minivod1.includes(minivod1)) {
         minivod1 += `${minivod1.length}`;
      }
         minivod1 = `${(String.fromCharCode(74,0) == minivod1 ? minivod1.length : minivod1.length)}`;
          let libruntimeexecutorZ = 3;
         minivod1 = `${libruntimeexecutorZ * minivod1.length}`;
      collectionG = `${sportL * 2}`;
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
       let icondefaultthumbnailE = true;
    let overI = 3;
    let placeholder_ = String.fromCharCode(122,95,50,52,95,115,117,98,115,97,109,112,108,101,0);
    let auto_xmU = false;
    let umengL: Map<any, any> = new Map([[String.fromCharCode(103,117,105,100,101,115,95,55,95,53,51,0),532], [String.fromCharCode(109,100,99,116,95,122,95,50,55,0),192]]);
    let bootsplashX = String.fromCharCode(118,95,52,56,95,99,97,108,108,101,114,0);
    let iconlogoutT = 4.0;
    let iconnotificationnewn = 3.0;
    let predictionm = 2;
    let rewardX = 4;
    let interstitialI: Array<any> = [997, 354];
    let target9 = 1.0;
    let borderlessq = 5;
    let p_lockP: Array<any> = [String.fromCharCode(115,116,97,99,107,115,95,54,95,50,49,0), String.fromCharCode(103,101,110,101,114,97,116,111,114,115,95,114,95,50,53,0), String.fromCharCode(101,95,51,53,95,115,119,105,116,99,104,98,97,115,101,0)];
    let whiteanimationliveN = String.fromCharCode(97,112,101,114,95,52,95,52,0);
    let libpangleflippedL: Map<any, any> = new Map([[String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,108,95,54,55,0),24], [String.fromCharCode(118,95,51,54,95,114,101,115,111,108,117,116,105,111,110,0),458], [String.fromCharCode(115,95,51,48,95,121,113,117,97,110,116,0),549]]);
      target9 -= interstitialI.length | overI;
   if (1.51 <= (target9 + umengL.size)) {
      umengL.set(`${predictionm}`, 2);
   }
   while (iconnotificationnewn <= parseFloat(`${interstitialI.length}`)) {
       let sportsJ = String.fromCharCode(117,95,57,53,95,97,105,109,100,0);
       let downloadingA = String.fromCharCode(122,95,56,52,95,115,116,97,114,115,0);
       let orangetickB: Array<any> = [String.fromCharCode(102,95,57,55,95,109,118,100,97,116,97,0), String.fromCharCode(114,107,109,112,112,95,111,95,53,54,0)];
       let klevin1 = String.fromCharCode(113,95,49,53,95,115,97,102,101,116,121,0);
       let championP = 0;
       let chatbotphotoA: Map<any, any> = new Map([[String.fromCharCode(106,99,115,97,109,112,108,101,95,52,95,54,52,0),396], [String.fromCharCode(104,95,49,57,95,97,108,108,0),932], [String.fromCharCode(97,115,115,101,114,116,115,95,51,95,52,53,0),297]]);
       let eighteenh = String.fromCharCode(118,95,49,50,0);
       let albumO = String.fromCharCode(112,97,115,115,101,115,95,102,95,52,53,0);
      let dependenciesy = String.fromCharCode(57,95,102,56,108,117,48,122,121,99,0) == downloadingA;
      do {
         downloadingA += `${(String.fromCharCode(55,0) == albumO ? downloadingA.length : albumO.length)}`;
         if (dependenciesy) {
            break;
         }
      } while (dependenciesy && (klevin1.length > 3));
         albumO += `${klevin1.length - championP}`;
      for (let h = 0; h < 2; h++) {
          let smallk = 5;
          let componenti = 1.0;
         klevin1 += `${parseInt(`${componenti}`) ^ 3}`;
         smallk /= Math.max(3, 1 - smallk);
         componenti -= smallk;
      }
      let playlist5 = klevin1.length <= 8518954;
      do {
         klevin1 = `${downloadingA.length / (Math.max(7, eighteenh.length))}`;
         if (playlist5) {
            break;
         }
      } while ((downloadingA != klevin1) && playlist5);
         downloadingA = "1";
      while (downloadingA == String.fromCharCode(115,0)) {
         albumO = `${1 | klevin1.length}`;
         break;
      }
      let awayteamfieldp = String.fromCharCode(118,50,116,0) == downloadingA;
      do {
          let listn = String.fromCharCode(109,105,100,116,111,110,101,115,95,57,95,56,52,0);
          let push1 = 5;
          let pnews0: Map<any, any> = new Map([[String.fromCharCode(103,95,52,56,95,116,99,109,105,0),104], [String.fromCharCode(105,95,54,49,0),737], [String.fromCharCode(115,108,105,99,101,115,95,103,95,57,52,0),211]]);
         downloadingA += `${sportsJ.length * 1}`;
         listn += `${listn.length}`;
         push1 >>= Math.min(Math.abs((String.fromCharCode(106,0) == listn ? listn.length : pnews0.size)), 2);
         pnews0.set(`${push1}`, push1 % 2);
         if (awayteamfieldp) {
            break;
         }
      } while (awayteamfieldp && (3 > (5 << (Math.min(5, orangetickB.length))) || 5 > (downloadingA.length << (Math.min(1, orangetickB.length)))));
       let annerH: Array<any> = [932, 774, 139];
       let libsgcoreF: Array<any> = [String.fromCharCode(104,101,97,100,105,110,103,95,51,95,50,0), String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,108,95,50,53,0), String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,48,95,56,51,0)];
      if (2 < (3 * libsgcoreF.length)) {
          let injuryW = String.fromCharCode(108,95,57,95,104,99,108,114,0);
          let inactiveu = 3;
          let redgoaln = 3.0;
          let disconnectedlogod = String.fromCharCode(119,95,49,49,95,119,112,101,110,100,105,110,103,0);
         eighteenh = "2";
         injuryW += `${(injuryW == String.fromCharCode(108,0) ? inactiveu : injuryW.length)}`;
         inactiveu &= (String.fromCharCode(95,0) == injuryW ? disconnectedlogod.length : injuryW.length);
         redgoaln += parseFloat(`${parseInt(`${redgoaln}`)}`);
         disconnectedlogod += `${parseInt(`${redgoaln}`) + disconnectedlogod.length}`;
      }
          let favorite4 = String.fromCharCode(102,105,108,101,112,97,116,104,95,51,95,52,50,0);
          let albumC = false;
         sportsJ = "1";
         favorite4 += `${((albumC ? 5 : 3))}`;
         albumC = !albumC;
          let fastforwardf = String.fromCharCode(100,105,99,116,95,122,95,52,0);
          let tick7 = String.fromCharCode(101,95,57,53,95,119,97,108,108,112,97,112,101,114,0);
         annerH = [eighteenh.length];
         fastforwardf += `${1 % (Math.max(8, fastforwardf.length))}`;
         tick7 += `${3 >> (Math.min(3, fastforwardf.length))}`;
      for (let d = 0; d < 1; d++) {
          let bootsplashk = String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,113,95,53,56,0);
         eighteenh = `${libsgcoreF.length}`;
         bootsplashk += "2";
      }
      while (annerH.length < 3) {
         annerH = [2 & sportsJ.length];
         break;
      }
      interstitialI.push(parseInt(`${iconlogoutT}`));
      break;
   }
      overI += overI;
      iconnotificationnewn /= Math.max(5, parseFloat(`${parseInt(`${iconnotificationnewn}`) * predictionm}`));
   while (bootsplashX == String.fromCharCode(100,0) || placeholder_.length == 2) {
       let giftbuttonv = String.fromCharCode(116,95,56,57,95,111,110,121,120,0);
       let reactnativeratingsi: Map<any, any> = new Map([[String.fromCharCode(110,104,97,110,99,101,95,54,95,56,53,0),396], [String.fromCharCode(102,95,56,53,0),392], [String.fromCharCode(119,95,56,57,95,108,111,99,97,116,105,111,110,0),325]]);
       let paginationH = String.fromCharCode(114,101,115,105,122,101,95,113,95,56,53,0);
      for (let a = 0; a < 2; a++) {
         paginationH += `${reactnativeratingsi.size / (Math.max(paginationH.length, 4))}`;
      }
      for (let o = 0; o < 3; o++) {
          let subin7 = 0.0;
          let yellowanimationlivez = 4.0;
         paginationH = `${giftbuttonv.length}`;
         subin7 /= Math.max(parseInt(`${yellowanimationlivez}`) / 3, 5);
         yellowanimationlivez += parseInt(`${subin7}`);
      }
         giftbuttonv = `${3 << (Math.min(2, Math.abs(reactnativeratingsi.size)))}`;
          let basketballawayteamv = String.fromCharCode(99,95,55,53,95,115,104,97,114,101,100,0);
         paginationH += `${reactnativeratingsi.size}`;
         basketballawayteamv += `${(basketballawayteamv == String.fromCharCode(66,0) ? basketballawayteamv.length : basketballawayteamv.length)}`;
      while (paginationH.length < giftbuttonv.length) {
         paginationH += `${(String.fromCharCode(78,0) == giftbuttonv ? reactnativeratingsi.size : giftbuttonv.length)}`;
         break;
      }
      while (2 <= reactnativeratingsi.size) {
         reactnativeratingsi.set(`${giftbuttonv}`, 2);
         break;
      }
         giftbuttonv += `${reactnativeratingsi.size | giftbuttonv.length}`;
      let delegate_vbP = 6375707 <= paginationH.length;
      do {
         paginationH += `${3 / (Math.max(5, paginationH.length))}`;
         if (delegate_vbP) {
            break;
         }
      } while ((giftbuttonv != String.fromCharCode(90,0)) && delegate_vbP);
      while (3 > (reactnativeratingsi.size * giftbuttonv.length)) {
         giftbuttonv = "2";
         break;
      }
      bootsplashX = `${borderlessq}`;
      break;
   }
   for (let k = 0; k < 1; k++) {
      target9 -= 2 >> (Math.min(5, Math.abs(parseInt(`${iconnotificationnewn}`))));
   }
      iconnotificationnewn -= parseFloat(`${1}`);

    if (!isReadyPlay && videoSource !== undefined) {

      predictionm <<= Math.min(Math.abs(3), 4);
      auto_xmU = rewardX >= 12 || interstitialI.length >= 12;
      interstitialI = [(bootsplashX == String.fromCharCode(113,0) ? borderlessq : bootsplashX.length)];
      bootsplashX += `${(interstitialI.length | (auto_xmU ? 1 : 2))}`;
       let predictionbannersharedz = true;
       let typingV = String.fromCharCode(118,97,114,105,97,110,116,95,50,95,51,54,0);
       let fileQ = 5.0;
      while (!predictionbannersharedz && 1 < typingV.length) {
         predictionbannersharedz = (typingV.length / (Math.max(2, parseInt(`${fileQ}`)))) == 36;
         break;
      }
         typingV += `${parseInt(`${fileQ}`) % 3}`;
      let sellB = String.fromCharCode(116,98,122,112,105,110,0) == typingV;
      do {
          let nodeg: Map<any, any> = new Map([[String.fromCharCode(122,95,54,48,95,112,104,111,110,101,98,111,111,107,0),true ], [String.fromCharCode(115,97,100,120,95,107,95,53,0),false ], [String.fromCharCode(121,95,52,56,95,99,111,109,112,97,114,101,102,0),false ]]);
          let incidentc = false;
          let libturbomodulejsijni2 = 2;
          let taiwan1 = String.fromCharCode(120,95,57,95,118,109,110,99,0);
          let iconlogoutL = String.fromCharCode(121,95,50,50,95,101,113,117,105,108,105,98,114,105,117,109,0);
         typingV = `${2 * nodeg.size}`;
         nodeg.set(taiwan1, 1);
         incidentc = (libturbomodulejsijni2 >> (Math.min(taiwan1.length, 5))) >= 36;
         libturbomodulejsijni2 &= ((incidentc ? 1 : 2) ^ taiwan1.length);
         iconlogoutL += `${((incidentc ? 3 : 1) >> (Math.min(Math.abs(3), 5)))}`;
         if (sellB) {
            break;
         }
      } while (sellB && (typingV.length == 4));
      while (!typingV.endsWith(`${fileQ}`)) {
          let roomz: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,110,101,116,115,95,105,95,49,55,0),190], [String.fromCharCode(107,95,54,57,95,98,105,116,114,101,118,0),631]]);
          let layoutv: Array<any> = [429, 652];
          let whistleorangeZ = 2.0;
          let modalw = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,106,95,50,53,0);
          let favicona = 1.0;
         fileQ -= ((predictionbannersharedz ? 2 : 1));
         roomz.set(modalw, parseInt(`${favicona}`));
         layoutv.push(3 * layoutv.length);
         whistleorangeZ *= layoutv.length + parseInt(`${whistleorangeZ}`);
         modalw = "3";
         favicona -= parseFloat(`${2 * roomz.size}`);
         break;
      }
      for (let i = 0; i < 1; i++) {
          let showp = 1;
         fileQ /= Math.max(parseInt(`${fileQ}`) * 2, 3);
         showp *= 1 | showp;
      }
      let defaultprofilepicG = predictionbannersharedz ? !predictionbannersharedz : predictionbannersharedz;
      do {
         predictionbannersharedz = 3.87 >= fileQ;
         if (defaultprofilepicG) {
            break;
         }
      } while (defaultprofilepicG && (!typingV.startsWith(`${predictionbannersharedz}`)));
         typingV = `${typingV.length}`;
       let kick1 = String.fromCharCode(97,95,56,50,95,116,117,108,115,105,0);
       let librrcJ = String.fromCharCode(102,95,57,52,95,105,112,113,102,0);
      while (!librrcJ.endsWith(`${fileQ}`)) {
          let goallogoT = 2.0;
          let iconrefreshk: Array<any> = [528, 224];
         librrcJ += `${kick1.length}`;
         goallogoT -= parseFloat(`${iconrefreshk.length}`);
         iconrefreshk = [parseInt(`${goallogoT}`)];
         break;
      }
      overI &= placeholder_.length ^ 3;
   for (let b = 0; b < 1; b++) {
      overI &= 2 * parseInt(`${target9}`);
   }
       let graph0 = String.fromCharCode(101,95,54,54,95,100,105,115,112,108,97,121,0);
       let basketballhometeam0: Array<any> = [517, 862];
       let showlessx: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,115,116,114,107,0),117], [String.fromCharCode(97,98,111,114,116,95,114,95,52,56,0),486]]);
      for (let g = 0; g < 1; g++) {
         showlessx.set(`${basketballhometeam0.length}`, 2 % (Math.max(4, basketballhometeam0.length)));
      }
      while (Array.from(showlessx.keys()).includes(`${basketballhometeam0.length}`)) {
          let dnewarchdefaultsn = true;
          let launcherV = false;
          let orangedownarrowc = 2.0;
          let scrollviewD = String.fromCharCode(115,95,50,56,95,110,105,108,115,0);
          let pointO = String.fromCharCode(97,112,112,101,110,100,99,104,97,114,95,100,95,49,55,0);
         basketballhometeam0.push((parseInt(`${orangedownarrowc}`) & (launcherV ? 4 : 1)));
         dnewarchdefaultsn = !scrollviewD.includes(`${dnewarchdefaultsn}`);
         launcherV = 15 == scrollviewD.length;
         orangedownarrowc /= Math.max(parseFloat(`${3 >> (Math.min(4, pointO.length))}`), 5);
         pointO += `${pointO.length & 3}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
         basketballhometeam0 = [3];
      }
      if (basketballhometeam0.length < graph0.length) {
         graph0 += `${basketballhometeam0.length | showlessx.size}`;
      }
      let greyF = 7753582 >= basketballhometeam0.length;
      do {
         basketballhometeam0.push((String.fromCharCode(80,0) == graph0 ? graph0.length : basketballhometeam0.length));
         if (greyF) {
            break;
         }
      } while (greyF && ((2 >> (Math.min(1, Math.abs(showlessx.size)))) == 4 || (2 >> (Math.min(2, Math.abs(showlessx.size)))) == 5));
      while (graph0.endsWith(`${basketballhometeam0.length}`)) {
          let inactiveJ = String.fromCharCode(100,95,49,50,95,103,101,116,111,112,116,0);
          let pushu = false;
          let orangeticks = 3.0;
         graph0 = `${inactiveJ.length}`;
         inactiveJ = "3";
         pushu = 49.96 == orangeticks;
         break;
      }
         basketballhometeam0 = [basketballhometeam0.length];
          let chinasamep: Array<any> = [1000, 109, 374];
         basketballhometeam0.push(showlessx.size % 1);
         chinasamep.push(chinasamep.length);
      while (Array.from(showlessx.values()).includes(basketballhometeam0.length)) {
          let downloadedl = String.fromCharCode(121,95,54,57,0);
          let schedule3 = 1.0;
          let service7 = 4;
          let ksadW: Array<any> = [530, 701, 362];
         basketballhometeam0.push(downloadedl.length * 2);
         downloadedl = `${ksadW.length}`;
         schedule3 *= 2;
         service7 ^= 3;
         ksadW = [parseInt(`${schedule3}`)];
         break;
      }
      overI /= Math.max(borderlessq, 4);
   while (!placeholder_.startsWith(`${interstitialI.length}`)) {
       let imageactionliveS: Array<any> = [465, 583];
       let viewerS: Map<any, any> = new Map([[String.fromCharCode(112,97,100,95,114,95,51,0),184], [String.fromCharCode(108,95,55,56,95,102,114,111,109,0),222]]);
       let entryl = String.fromCharCode(107,95,50,53,95,99,108,111,99,107,100,114,105,102,116,0);
       let subbasketballplayer1: Map<any, any> = new Map([[String.fromCharCode(97,95,53,57,95,97,117,116,104,111,114,105,122,101,100,0),585], [String.fromCharCode(112,114,101,102,101,114,101,110,99,101,95,122,95,51,55,0),663], [String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,95,107,95,52,50,0),887]]);
       let showmore5: Array<any> = [5, 762, 554];
      if ((imageactionliveS.length & showmore5.length) == 5 || 4 == (5 & showmore5.length)) {
          let bootsplashn = String.fromCharCode(104,105,115,116,111,114,121,95,54,95,49,51,0);
          let iconpipshrinkB = String.fromCharCode(102,95,50,52,95,116,111,107,101,110,105,122,101,114,0);
          let libavcodecW = String.fromCharCode(117,114,112,111,115,101,95,105,95,57,57,0);
          let tumbnailb = 5.0;
         showmore5.push(libavcodecW.length + bootsplashn.length);
         bootsplashn += `${(String.fromCharCode(84,0) == iconpipshrinkB ? parseInt(`${tumbnailb}`) : iconpipshrinkB.length)}`;
         libavcodecW = `${(iconpipshrinkB == String.fromCharCode(104,0) ? parseInt(`${tumbnailb}`) : iconpipshrinkB.length)}`;
      }
      while ((imageactionliveS.length % (Math.max(5, 1))) <= 5 && (imageactionliveS.length % (Math.max(5, 7))) <= 1) {
         imageactionliveS.push(subbasketballplayer1.size);
         break;
      }
         imageactionliveS = [viewerS.size];
      while (1 <= (1 % (Math.max(6, imageactionliveS.length))) && (imageactionliveS.length % 1) <= 5) {
         imageactionliveS = [2 ^ entryl.length];
         break;
      }
          let predictionactiveX = 0;
          let routert = 2.0;
         viewerS.set(`${entryl}`, viewerS.size % 3);
         predictionactiveX &= predictionactiveX << (Math.min(2, Math.abs(1)));
         routert *= 2 >> (Math.min(Math.abs(parseInt(`${routert}`)), 1));
         viewerS.set(entryl, subbasketballplayer1.size);
         showmore5 = [viewerS.size ^ showmore5.length];
      while (!Array.from(subbasketballplayer1.keys()).includes(`${showmore5.length}`)) {
          let yellowvideolivew = 1;
          let twitterG: Map<any, any> = new Map([[String.fromCharCode(122,95,49,53,95,117,115,101,114,115,112,97,99,101,0),61], [String.fromCharCode(115,121,109,111,100,100,95,111,95,51,51,0),729], [String.fromCharCode(113,95,52,95,97,105,102,102,0),718]]);
          let renew2: Map<any, any> = new Map([[String.fromCharCode(107,95,50,48,95,115,112,108,105,116,115,0),119], [String.fromCharCode(97,99,116,117,97,108,95,111,95,53,54,0),198]]);
          let shareblacke = 5;
          let iconeyek: Array<any> = [726, 975];
         showmore5.push(2 >> (Math.min(3, Math.abs(shareblacke))));
         yellowvideolivew -= 1;
         twitterG.set(`${yellowvideolivew}`, twitterG.size);
         renew2.set(`${yellowvideolivew}`, yellowvideolivew);
         shareblacke %= Math.max(yellowvideolivew, 5);
         iconeyek.push(renew2.size | yellowvideolivew);
         break;
      }
      while (3 >= (subbasketballplayer1.size + entryl.length) || 4 >= (subbasketballplayer1.size + 3)) {
          let viewsl = true;
          let statsc: Map<any, any> = new Map([[String.fromCharCode(120,97,118,115,95,56,95,51,54,0),349], [String.fromCharCode(118,97,114,121,95,49,95,56,49,0),81]]);
         subbasketballplayer1.set(`${imageactionliveS.length}`, showmore5.length ^ imageactionliveS.length);
         viewsl = null == statsc.get(`${viewsl}`);
         statsc.set(`${viewsl}`, 1);
         break;
      }
         imageactionliveS.push(subbasketballplayer1.size);
       let zhengpianO = false;
       let libjsijniprofilerT = true;
         viewerS = new Map([[`${subbasketballplayer1.size}`, imageactionliveS.length - 3]]);
          let orangedownarrowN = 2.0;
          let liblogger0 = 5.0;
          let libreactnativeblobU = 5;
         libjsijniprofilerT = imageactionliveS.length <= 22;
         orangedownarrowN /= Math.max(3, 4);
         liblogger0 -= 2 & parseInt(`${orangedownarrowN}`);
         libreactnativeblobU |= 1;
          let footballfieldB = String.fromCharCode(113,95,54,55,95,108,111,99,107,0);
          let gestureo = false;
         showmore5 = [viewerS.size + entryl.length];
         footballfieldB = `${((gestureo ? 5 : 4))}`;
         gestureo = (((gestureo ? 9 : footballfieldB.length) * footballfieldB.length) == 9);
      for (let d = 0; d < 1; d++) {
         zhengpianO = 3 >= showmore5.length;
      }
      placeholder_ += `${overI}`;
      break;
   }
      setReadyPlay(true);

      placeholder_ += `${3 + bootsplashX.length}`;
      target9 *= borderlessq * 2;
      placeholder_ = `${parseInt(`${iconlogoutT}`) | borderlessq}`;
   while (4.32 < (1.81 * target9)) {
       let reminderp = String.fromCharCode(105,110,116,101,114,102,97,99,101,95,55,95,50,51,0);
      let iconstarB = String.fromCharCode(53,50,113,115,121,104,55,120,0) == reminderp;
      do {
         reminderp += "3";
         if (iconstarB) {
            break;
         }
      } while ((reminderp != reminderp) && iconstarB);
          let dycreator7: Map<any, any> = new Map([[String.fromCharCode(121,95,57,50,95,115,116,114,105,107,101,116,104,114,111,117,103,104,0),true ], [String.fromCharCode(113,117,101,115,116,105,111,110,115,95,53,95,55,52,0),false ], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,95,107,95,53,56,0),true ]]);
         reminderp += `${dycreator7.size * reminderp.length}`;
          let awayiconw: Array<any> = [501, 31];
          let traminil: Map<any, any> = new Map([[String.fromCharCode(109,97,112,102,105,108,101,95,118,95,52,56,0),String.fromCharCode(109,97,110,117,97,108,108,121,95,112,95,55,49,0)], [String.fromCharCode(99,95,51,53,95,116,105,109,101,105,110,102,111,0),String.fromCharCode(109,95,53,56,95,104,105,115,116,111,114,105,101,115,0)], [String.fromCharCode(99,102,101,110,99,95,107,95,57,57,0),String.fromCharCode(117,95,49,54,95,98,101,110,99,104,0)]]);
          let animations0: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,101,95,99,95,48,0),468], [String.fromCharCode(99,97,108,108,111,99,95,117,95,49,53,0),482]]);
         reminderp = `${awayiconw.length - 1}`;
         awayiconw.push(animations0.size);
         traminil = new Map([[`${traminil.size}`, animations0.size + 1]]);
      placeholder_ += `${rewardX}`;
      break;
   }
      interstitialI = [1 << (Math.min(3, interstitialI.length))];
       let androidH = String.fromCharCode(107,95,53,53,95,99,111,110,116,114,105,98,0);
      while (!androidH.endsWith(`${androidH.length}`)) {
          let collection5 = 0;
         androidH += `${androidH.length}`;
         collection5 += collection5;
         break;
      }
      while (androidH != String.fromCharCode(102,0)) {
         androidH += `${androidH.length % 3}`;
         break;
      }
      let livenodatabgimgU = androidH == String.fromCharCode(104,98,51,52,56,0);
      do {
         androidH = "2";
         if (livenodatabgimgU) {
            break;
         }
      } while ((androidH != String.fromCharCode(53,0)) && livenodatabgimgU);
      borderlessq >>= Math.min(Math.abs(parseInt(`${iconlogoutT}`) / (Math.max(7, rewardX))), 1);
   for (let a = 0; a < 1; a++) {
      icondefaultthumbnailE = (bootsplashX.length * parseInt(`${iconnotificationnewn}`)) < 56;
   }
   let mbbidr = placeholder_ == String.fromCharCode(98,99,115,105,110,109,100,97,0);
   do {
      placeholder_ = `${umengL.size}`;
      if (mbbidr) {
         break;
      }
   } while (((borderlessq | placeholder_.length) >= 5 || (placeholder_.length | borderlessq) >= 5) && mbbidr);
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportDetailsPlaysTimesAnalytics(
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
                {isFocus
                  ? (
                    <VodPlayer
                      ref={videoRef}
                      onBack={onHandleBack}
                      vod_source={videoSource.url}
                      videoType="owngoalIconeye"
                      vodTitle={combinedName}
                      appOrientation={settingsReducer.appOrientation}
                      devicesOrientation={settingsReducer.devicesOrientation}
                      lockOrientation={lockOrientation}
                      onReadyForDisplay={onReadyForDisplay}
                    />
                  )
                  : <View style={{
                    backgroundColor: 'black',
                    width: '100%',
                    aspectRatio: 16 / 9
                  }}
                  />
                }
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
                <WebView resizeMode="contain" source={{ uri: videoSource.url }} />
                <TouchableOpacity
                  onPress={onHandleBack}
                  style={{ position: 'absolute', padding: 20 }}>
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
