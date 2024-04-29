import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './tt_with_success';
import { VideoLiveType } from '../../global/tt_libcrashsdk_spinner';
import { ttAway, ttCompleteChampion } from '../../types/tt_zhubo';
import VodPlayer, { ttGreyBorderless } from '../../../components/videoPlayer/tt_strings';
import { lockAppOrientation } from '@redux/actions/tt_checkbox';
import { ttOrange } from '@redux/tt_updates_bottom';
import { ttBaiduNewinterstitial } from '@redux/reducers/tt_center';
import { useAppDispatch, useAppSelector } from '@hooks/tt_spec_download';
import WebView from 'react-native-webview';
import BackIcon from '@static/images/downloadOverlayHuawei.svg';
import { useIsFocused, useTheme } from '@react-navigation/native';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import CountdownIndicator from '../../../components/button/tt_next_away';

interface ttSmall {
  videoRef?: React.MutableRefObject<ttGreyBorderless | null>;
  matchID?: number;
  streamID?: number;
  liveDataState?: ttAway;
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
}: ttSmall) => {
  const { colors } = useTheme();

  const homeName = liveDataState?.home?.name;
  const awayName = liveDataState?.away?.name;
  const combinedName = `${homeName} vs ${awayName}`;

  const dispatch = useAppDispatch();

  const [isReadyPlay, setReadyPlay] = useState(false);
  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer,
  );

  
  
  
  
  
  // } = useSelector(s => s.videoPlayerControl);

  
  const [streamData, setStreamData] = useState<ttCompleteChampion | undefined>();
  const streamsData = liveDataState?.streams;
  const streamRoomID = streamData?.id;
  

  const onHandleBack = () => {
       let tailr: Map<any, any> = new Map([[String.fromCharCode(117,110,116,114,117,115,116,101,100,95,104,95,57,55,0),882], [String.fromCharCode(113,95,54,50,95,102,102,97,116,0),214], [String.fromCharCode(98,105,116,115,113,112,95,117,95,54,57,0),515]]);
    let typesL = true;
    let bingi = String.fromCharCode(106,95,49,48,48,95,102,117,122,122,105,110,103,0);
    let networkJ = String.fromCharCode(100,95,57,55,95,101,103,119,105,116,0);
    let send6 = 3.0;
    let b_titleN: Map<any, any> = new Map([[String.fromCharCode(99,105,116,121,95,108,95,49,56,0),true ], [String.fromCharCode(97,112,101,116,97,103,95,105,95,49,48,0),false ]]);
    let termsj = String.fromCharCode(100,117,97,108,105,110,112,117,116,95,105,95,57,57,0);
    let gradlewo = 1.0;
    let main_vo = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,104,95,54,57,0);
   let l_playerc = typesL ? !typesL : typesL;
   do {
      typesL = send6 > networkJ.length;
      if (l_playerc) {
         break;
      }
   } while (l_playerc && (!typesL && 2 <= bingi.length));
      send6 -= (String.fromCharCode(121,0) == termsj ? termsj.length : tailr.size);
      typesL = (termsj.length + tailr.size) >= 75;
   for (let n = 0; n < 3; n++) {
      bingi += "3";
   }
   for (let x = 0; x < 1; x++) {
      b_titleN = new Map([[`${gradlewo}`, 3 ^ parseInt(`${gradlewo}`)]]);
   }
   for (let v = 0; v < 2; v++) {
      typesL = termsj.startsWith(`${gradlewo}`);
   }

    if (
      settingsReducer.appOrientation === 'PORTRAIT' ||
      settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN'
    ) {

      networkJ = `${(parseInt(`${gradlewo}`) & (typesL ? 4 : 3))}`;
   while (1 <= (termsj.length >> (Math.min(Math.abs(4), 4))) && 4 <= (4 * parseInt(`${gradlewo}`))) {
       let otherS = String.fromCharCode(104,95,55,54,95,104,101,97,114,116,115,0);
       let matchesG: Array<any> = [691, 337];
      for (let z = 0; z < 1; z++) {
         matchesG = [matchesG.length * otherS.length];
      }
         otherS = `${otherS.length}`;
      while (otherS.endsWith(`${matchesG.length}`)) {
         matchesG = [matchesG.length | 3];
         break;
      }
         matchesG.push(3 % (Math.max(6, matchesG.length)));
       let singaporeV = false;
       let goal5 = true;
       let downloader_: Map<any, any> = new Map([[String.fromCharCode(111,95,50,54,95,109,109,99,111,115,0),true ], [String.fromCharCode(97,99,116,105,118,97,116,101,95,101,95,49,52,0),false ]]);
       let gradlewO: Map<any, any> = new Map([[String.fromCharCode(102,95,54,95,119,101,108,115,101,110,99,100,101,109,111,0),793], [String.fromCharCode(117,95,55,50,95,116,100,115,99,0),608]]);
      termsj += `${3 - otherS.length}`;
      break;
   }
   if ((2 * bingi.length) < 1 || 2 < (tailr.size * bingi.length)) {
      bingi = "2";
   }
       let banner2 = true;
       let with_8Z: Array<any> = [258, 707, 747];
       let macauc = String.fromCharCode(115,116,114,111,107,101,114,95,122,95,52,54,0);
      if (!banner2) {
          let frame_23C = 4.0;
          let applicationH = String.fromCharCode(99,111,114,110,101,114,115,95,112,95,51,0);
         banner2 = (54 < (with_8Z.length >> (Math.min(4, Math.abs((banner2 ? with_8Z.length : 54))))));
         frame_23C /= Math.max(3, parseFloat(`${2}`));
         applicationH += `${parseInt(`${frame_23C}`) ^ 2}`;
      }
       let selected7 = 5.0;
       let smallT = 1.0;
          let phone3: Array<any> = [String.fromCharCode(116,117,110,110,101,108,95,106,95,50,51,0), String.fromCharCode(119,95,52,56,95,115,104,111,114,116,101,115,116,0)];
          let modeK = false;
         macauc += `${parseInt(`${selected7}`) * 1}`;
         phone3.push(3);
         modeK = phone3.includes(modeK);
         macauc = `${parseInt(`${selected7}`) ^ 1}`;
         selected7 += (parseFloat(`${1 + (banner2 ? 4 : 5)}`));
      while (selected7 <= 1.24) {
          let mbjscommonB = String.fromCharCode(116,95,49,48,95,102,101,111,102,0);
          let notificationd = String.fromCharCode(107,105,99,107,101,100,95,101,95,54,49,0);
          let guide7 = String.fromCharCode(111,95,50,57,95,117,112,99,97,115,101,0);
          let mintegrali = 0.0;
          let policyQ = String.fromCharCode(97,95,56,53,95,105,110,105,116,105,97,108,0);
         selected7 -= parseFloat(`${2 & parseInt(`${smallT}`)}`);
         mbjscommonB = `${parseInt(`${mintegrali}`)}`;
         notificationd += "3";
         guide7 = `${(String.fromCharCode(69,0) == guide7 ? guide7.length : mbjscommonB.length)}`;
         mintegrali *= (notificationd == String.fromCharCode(82,0) ? notificationd.length : mbjscommonB.length);
         policyQ = "3";
         break;
      }
       let updates1 = 4.0;
         selected7 *= (parseFloat(`${parseInt(`${updates1}`) & (banner2 ? 2 : 4)}`));
          let policyv = 2.0;
          let termsv = 4.0;
         smallT /= Math.max(3, parseFloat(`${parseInt(`${policyv}`) | macauc.length}`));
         policyv -= parseFloat(`${parseInt(`${termsv}`)}`);
      b_titleN.set(networkJ, 2 | networkJ.length);
   while (3 <= b_titleN.size) {
      b_titleN = new Map([[networkJ, parseInt(`${send6}`) << (Math.min(networkJ.length, 3))]]);
      break;
   }
   while (!bingi.startsWith(`${termsj.length}`)) {
      bingi = "2";
      break;
   }
      setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''), 100);
    } else {

   if (Array.from(b_titleN.keys()).includes(`${gradlewo}`)) {
      b_titleN.set(`${typesL}`, ((typesL ? 4 : 5) << (Math.min(Math.abs(tailr.size), 1))));
   }
       let stats6 = 3.0;
      if ((stats6 - stats6) > 5.73 || 2.39 > (5.73 - stats6)) {
          let submitj = String.fromCharCode(103,95,50,57,95,115,104,105,102,116,0);
          let sliderb = 5.0;
         stats6 -= parseFloat(`${parseInt(`${stats6}`) | 2}`);
         submitj = `${parseInt(`${sliderb}`) | 1}`;
         sliderb += submitj.length;
      }
      let filledH = stats6 >= 9669229.0;
      do {
          let scorey = 5.0;
          let nativeexl = String.fromCharCode(110,95,50,56,95,109,101,97,115,117,114,101,109,101,110,116,0);
         stats6 += parseFloat(`${3}`);
         scorey -= parseFloat(`${3}`);
         nativeexl += `${(String.fromCharCode(100,0) == nativeexl ? nativeexl.length : parseInt(`${scorey}`))}`;
         if (filledH) {
            break;
         }
      } while (filledH && (3.56 > (stats6 / (Math.max(stats6, 2)))));
       let b_centerD = String.fromCharCode(115,119,102,104,97,115,104,95,57,95,52,50,0);
      main_vo = `${3 << (Math.min(4, Math.abs(parseInt(`${send6}`))))}`;
       let coreK = 3;
       let minivodJ: Array<any> = [String.fromCharCode(111,95,50,53,95,110,111,110,110,117,108,108,115,99,104,101,109,101,115,0), String.fromCharCode(110,95,55,48,95,118,97,114,105,110,116,0)];
       let benefitA = String.fromCharCode(100,101,118,101,108,111,112,101,114,95,115,95,51,55,0);
          let vietnamU = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,53,95,57,50,0);
          let heartp = 3.0;
         coreK -= 3;
         vietnamU += `${parseInt(`${heartp}`)}`;
         heartp += parseInt(`${heartp}`);
      if (minivodJ.length >= benefitA.length) {
         minivodJ = [3 & benefitA.length];
      }
          let countdownJ: Map<any, any> = new Map([[String.fromCharCode(112,95,57,53,95,111,116,111,102,0),String.fromCharCode(110,111,105,115,101,95,103,95,57,55,0)], [String.fromCharCode(119,95,49,55,0),String.fromCharCode(118,95,57,51,95,110,97,118,105,103,97,116,105,111,110,0)]]);
         minivodJ.push(2 % (Math.max(4, benefitA.length)));
         countdownJ.set(`${countdownJ.size}`, countdownJ.size);
       let gpayu: Array<any> = [String.fromCharCode(97,110,116,105,95,110,95,56,50,0), String.fromCharCode(97,95,52,55,95,100,101,99,105,112,104,101,114,0), String.fromCharCode(101,120,101,99,117,116,101,95,116,95,57,48,0)];
       let customM: Array<any> = [String.fromCharCode(119,95,51,56,95,99,117,114,114,101,110,100,0), String.fromCharCode(100,95,52,95,113,117,97,110,116,105,122,101,0)];
         minivodJ.push(coreK);
      if (!customM.includes(minivodJ.length)) {
          let flyerv = String.fromCharCode(108,111,97,100,115,95,111,95,49,57,0);
         minivodJ = [minivodJ.length];
         flyerv += `${flyerv.length}`;
      }
         benefitA += `${minivodJ.length}`;
      for (let q = 0; q < 3; q++) {
          let pangle6 = true;
         customM.push(3);
         pangle6 = !pangle6;
      }
         minivodJ = [minivodJ.length >> (Math.min(Math.abs(3), 1))];
      send6 /= Math.max(minivodJ.length, 3);
   let settingsp = typesL ? !typesL : typesL;
   do {
      typesL = networkJ == String.fromCharCode(85,0);
      if (settingsp) {
         break;
      }
   } while ((networkJ.length == 4 || !typesL) && settingsp);
       let zoomF: Array<any> = [71, 988, 100];
       let googlec = String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,57,95,49,54,0);
       let statsQ: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,54,95,53,55,0),246], [String.fromCharCode(98,97,107,101,95,120,95,55,51,0),352]]);
      while (!googlec.includes(`${statsQ.size}`)) {
         googlec += `${zoomF.length % (Math.max(googlec.length, 2))}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
          let benefitn = String.fromCharCode(108,95,52,57,95,99,111,110,118,111,108,117,116,105,111,110,0);
         statsQ.set(`${zoomF.length}`, statsQ.size >> (Math.min(Math.abs(1), 5)));
         benefitn += `${benefitn.length | benefitn.length}`;
      }
         googlec += `${googlec.length * statsQ.size}`;
         googlec += `${(googlec == String.fromCharCode(76,0) ? googlec.length : statsQ.size)}`;
          let searchbaro = 2.0;
          let ying3 = String.fromCharCode(102,108,97,103,95,115,95,52,57,0);
          let commentD = 3;
         googlec += `${(String.fromCharCode(53,0) == googlec ? commentD : googlec.length)}`;
         searchbaro *= (parseFloat(`${String.fromCharCode(51,0) == ying3 ? parseInt(`${searchbaro}`) : ying3.length}`));
         commentD /= Math.max(3, 2);
         zoomF = [googlec.length | statsQ.size];
         googlec = `${statsQ.size / (Math.max(1, 8))}`;
         statsQ.set(`${zoomF.length}`, zoomF.length);
      for (let w = 0; w < 1; w++) {
          let vignetteF = false;
          let historyv = 5.0;
          let hongkongt = 5.0;
          let emojin = 1.0;
         statsQ.set(`${hongkongt}`, ((vignetteF ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${hongkongt}`)), 4))));
         vignetteF = 90.58 >= historyv;
         historyv *= parseFloat(`${parseInt(`${emojin}`)}`);
         emojin += 2;
      }
      gradlewo += parseInt(`${gradlewo}`) * zoomF.length;
      termsj = "1";
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
       let anythinkg = String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,110,95,56,51,0);
    let confirmationE = 0.0;
    let emojiN = String.fromCharCode(99,95,57,48,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0);
    let rewardvideom = String.fromCharCode(98,105,116,115,116,114,101,97,109,95,121,95,55,56,0);
    let downloadingy = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,95,121,95,56,51,0);
    let rewindP = false;
    let commonz = String.fromCharCode(97,99,101,108,112,95,51,95,57,54,0);
    let ewardedO = false;
    let unreadT = 0.0;
    let twitteru = 1.0;
    let const_osP = false;
      confirmationE *= emojiN.length;
   while (confirmationE > 5.13) {
      downloadingy += `${parseInt(`${confirmationE}`) & 2}`;
      break;
   }
      anythinkg += `${downloadingy.length}`;
   while (twitteru < confirmationE) {
      confirmationE -= 2;
      break;
   }
       let sendt: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,95,113,95,56,56,0),true ], [String.fromCharCode(115,116,114,111,107,101,95,106,95,50,0),true ]]);
       let goal9 = 3;
       let watchN = String.fromCharCode(116,95,53,52,95,112,108,97,121,0);
         sendt = new Map([[`${sendt.size}`, goal9]]);
         sendt.set(`${goal9}`, goal9 >> (Math.min(Math.abs(3), 4)));
      let canvasa = 5864192 >= goal9;
      do {
         goal9 &= watchN.length & goal9;
         if (canvasa) {
            break;
         }
      } while (((watchN.length >> (Math.min(Math.abs(2), 3))) < 4) && canvasa);
       let baiduB: Array<any> = [String.fromCharCode(118,95,55,49,95,105,110,100,97,116,97,0), String.fromCharCode(114,95,51,54,95,115,116,100,0)];
       let with_x_: Array<any> = [String.fromCharCode(109,101,103,101,100,95,109,95,52,51,0), String.fromCharCode(113,95,53,56,95,109,98,99,109,112,0)];
          let modeQ = 2.0;
          let reducerU: Array<any> = [String.fromCharCode(113,95,52,57,95,120,111,102,102,115,101,116,0), String.fromCharCode(107,95,54,48,95,97,103,103,105,110,102,111,0), String.fromCharCode(119,95,51,50,95,101,120,101,99,117,116,111,114,0)];
         sendt = new Map([[`${with_x_.length}`, parseInt(`${modeQ}`) & 3]]);
         modeQ += 2;
         reducerU = [1 / (Math.max(10, reducerU.length))];
         baiduB.push(1);
      for (let u = 0; u < 2; u++) {
         sendt = new Map([[`${baiduB.length}`, (watchN == String.fromCharCode(101,0) ? baiduB.length : watchN.length)]]);
      }
         watchN += `${(String.fromCharCode(85,0) == watchN ? watchN.length : baiduB.length)}`;
         watchN += `${watchN.length}`;
      twitteru /= Math.max(1, parseInt(`${twitteru}`));
   if (2.94 < (confirmationE * anythinkg.length) && 3 < (anythinkg.length * parseInt(`${confirmationE}`))) {
      confirmationE -= (parseInt(`${twitteru}`) >> (Math.min(1, Math.abs((const_osP ? 3 : 1)))));
   }
       let info0 = String.fromCharCode(114,101,97,100,105,110,105,116,95,53,95,51,57,0);
      let memberE = info0.length <= 8823418;
      do {
          let backgroundx: Array<any> = [852, 413];
         info0 = `${(info0 == String.fromCharCode(54,0) ? backgroundx.length : info0.length)}`;
         if (memberE) {
            break;
         }
      } while (memberE && (info0 != String.fromCharCode(67,0)));
      let filedW = info0 == String.fromCharCode(117,110,49,109,112,48,108,115,119,98,0);
      do {
          let chinasame7 = true;
          let auto_ljN = 2.0;
          let redirectu = false;
          let acceptedI = 1.0;
          let miniz = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,110,95,55,57,0);
         info0 = `${(miniz.length << (Math.min(1, Math.abs((chinasame7 ? 2 : 5)))))}`;
         chinasame7 = acceptedI <= auto_ljN;
         auto_ljN -= parseFloat(`${1 ^ parseInt(`${acceptedI}`)}`);
         redirectu = !redirectu || acceptedI == 36.65;
         miniz = `${(parseInt(`${auto_ljN}`) >> (Math.min(1, Math.abs((redirectu ? 5 : 1)))))}`;
         if (filedW) {
            break;
         }
      } while ((5 == info0.length) && filedW);
       let sports_ = 2.0;
       let largem = 1.0;
      emojiN = `${2 * parseInt(`${confirmationE}`)}`;
       let becomei = false;
         becomei = (!becomei ? !becomei : !becomei);
         becomei = !becomei;
          let dplusg = 1.0;
         becomei = !becomei;
         dplusg /= Math.max(1, parseFloat(`${parseInt(`${dplusg}`)}`));
      ewardedO = String.fromCharCode(65,0) == commonz && rewardvideom.length <= 10;

    if (!isReadyPlay && videoSource !== undefined) {

      downloadingy = `${(2 << (Math.min(4, Math.abs((const_osP ? 2 : 1)))))}`;
   let frame_cfN = anythinkg == String.fromCharCode(116,97,122,114,54,0);
   do {
      anythinkg = "2";
      if (frame_cfN) {
         break;
      }
   } while (frame_cfN && ((parseInt(`${confirmationE}`) - anythinkg.length) == 4 && 3.11 == (confirmationE - anythinkg.length)));
      emojiN = `${anythinkg.length | parseInt(`${confirmationE}`)}`;
       let minivodA = String.fromCharCode(97,99,116,117,97,108,105,122,101,100,95,97,95,50,51,0);
       let debug_ = 5;
      while (!minivodA.endsWith(`${debug_}`)) {
         minivodA = `${(minivodA == String.fromCharCode(82,0) ? minivodA.length : debug_)}`;
         break;
      }
      let umengE = minivodA == String.fromCharCode(112,105,109,97,0);
      do {
          let overlayR = String.fromCharCode(102,95,54,49,95,112,105,120,101,108,98,117,102,102,101,114,0);
          let nativeexK: Array<any> = [String.fromCharCode(98,101,114,114,105,101,115,95,99,95,50,53,0), String.fromCharCode(112,97,105,114,105,110,103,115,95,116,95,54,50,0), String.fromCharCode(119,95,50,55,95,112,114,111,109,105,115,101,115,0)];
          let mbbannerK = false;
          let pointH = String.fromCharCode(115,95,51,51,95,99,97,99,104,101,0);
         minivodA = `${2 & nativeexK.length}`;
         overlayR = `${(overlayR == String.fromCharCode(68,0) ? (mbbannerK ? 4 : 3) : overlayR.length)}`;
         nativeexK.push(2 | overlayR.length);
         pointH = `${(2 << (Math.min(5, Math.abs((mbbannerK ? 2 : 5)))))}`;
         if (umengE) {
            break;
         }
      } while ((1 <= (minivodA.length & 1)) && umengE);
      let agreementq = minivodA.length <= 5446768;
      do {
         minivodA = `${3 + minivodA.length}`;
         if (agreementq) {
            break;
         }
      } while ((minivodA.endsWith(`${debug_}`)) && agreementq);
      if (3 < (1 & debug_)) {
         debug_ ^= minivodA.length << (Math.min(2, Math.abs(debug_)));
      }
      while (2 >= (minivodA.length >> (Math.min(Math.abs(5), 2))) && (5 >> (Math.min(3, Math.abs(debug_)))) >= 5) {
         minivodA += `${debug_ >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
      while (1 == (3 % (Math.max(3, debug_)))) {
         debug_ >>= Math.min(Math.abs(3 * debug_), 3);
         break;
      }
      commonz = `${3 - parseInt(`${twitteru}`)}`;
      rewardvideom = `${parseInt(`${twitteru}`) * 1}`;
      confirmationE += parseInt(`${confirmationE}`) >> (Math.min(Math.abs(2), 3));
   for (let a = 0; a < 1; a++) {
      ewardedO = commonz.length >= 95 && !ewardedO;
   }
       let assistB = true;
       let mintegralN = String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,56,95,50,51,0);
      if (!assistB) {
         mintegralN = `${((assistB ? 4 : 3))}`;
      }
      while (mintegralN.length == 3) {
         assistB = !mintegralN.endsWith(`${assistB}`);
         break;
      }
      if (assistB) {
         mintegralN = `${((assistB ? 5 : 3))}`;
      }
         mintegralN += `${((assistB ? 1 : 1))}`;
         assistB = (((!assistB ? mintegralN.length : 53) + mintegralN.length) > 53);
         mintegralN += `${(mintegralN == String.fromCharCode(120,0) ? mintegralN.length : (assistB ? 4 : 2))}`;
      unreadT += (parseFloat(`${1 * (assistB ? 3 : 1)}`));
      setReadyPlay(true);

      rewindP = 52 >= rewardvideom.length;
   if (5 < commonz.length) {
      commonz += `${(commonz == String.fromCharCode(65,0) ? commonz.length : (ewardedO ? 4 : 2))}`;
   }
       let actionj = String.fromCharCode(113,95,52,56,95,107,101,121,115,116,114,101,97,109,0);
       let rewindO = String.fromCharCode(104,97,110,100,108,101,115,95,52,95,52,51,0);
         rewindO = `${rewindO.length * actionj.length}`;
      let roomA = String.fromCharCode(103,52,105,0) == rewindO;
      do {
         rewindO += `${(actionj == String.fromCharCode(83,0) ? rewindO.length : actionj.length)}`;
         if (roomA) {
            break;
         }
      } while ((actionj.length > rewindO.length) && roomA);
       let mbjscommony = 3.0;
         actionj = `${1 + rewindO.length}`;
      let register_gjx = 8614189 <= rewindO.length;
      do {
         rewindO = "2";
         if (register_gjx) {
            break;
         }
      } while ((actionj != String.fromCharCode(115,0)) && register_gjx);
         rewindO += `${(String.fromCharCode(109,0) == actionj ? actionj.length : parseInt(`${mbjscommony}`))}`;
      unreadT -= parseFloat(`${rewindO.length | 2}`);
   for (let p = 0; p < 1; p++) {
       let servicea = String.fromCharCode(115,95,57,49,95,112,114,101,118,118,101,99,0);
       let nexta = true;
      while (!nexta) {
          let userZ: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,100,101,112,111,115,105,116,0),String.fromCharCode(97,108,116,95,113,95,53,51,0)], [String.fromCharCode(106,95,52,56,95,99,97,116,97,112,117,108,116,0),String.fromCharCode(120,95,52,52,0)]]);
          let saveY = String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,107,95,56,53,0);
          let expiredA = 5.0;
          let carousel9 = 5.0;
         nexta = servicea.length >= 56;
         userZ.set(`${carousel9}`, parseInt(`${carousel9}`));
         saveY += `${3 | saveY.length}`;
         expiredA /= Math.max(2, parseFloat(`${parseInt(`${carousel9}`)}`));
         break;
      }
       let flyerx: Map<any, any> = new Map([[String.fromCharCode(97,114,102,113,95,48,95,56,57,0),true ], [String.fromCharCode(104,119,114,97,110,100,95,104,95,53,50,0),false ]]);
      while (nexta) {
         nexta = flyerx.size >= 61;
         break;
      }
      for (let j = 0; j < 3; j++) {
         nexta = (46 == (flyerx.size ^ (nexta ? flyerx.size : 58)));
      }
         servicea += `${((nexta ? 3 : 4))}`;
      while (nexta) {
         nexta = flyerx.size >= 29;
         break;
      }
      downloadingy = `${commonz.length}`;
   }
      ewardedO = emojiN == String.fromCharCode(112,0);
   let debugw = rewardvideom == String.fromCharCode(51,54,56,51,99,119,121,106,117,0);
   do {
       let blacko = String.fromCharCode(113,95,55,48,95,104,101,97,118,121,0);
       let mathM = 3;
       let playercommonx = 0.0;
       let savee = String.fromCharCode(115,95,57,95,98,110,108,101,0);
      for (let x = 0; x < 3; x++) {
         savee += `${savee.length}`;
      }
      let pressurem = mathM >= 9199809;
      do {
         mathM *= (String.fromCharCode(114,0) == savee ? savee.length : blacko.length);
         if (pressurem) {
            break;
         }
      } while (((mathM ^ blacko.length) > 2 || (mathM ^ blacko.length) > 2) && pressurem);
         mathM *= 2;
      while ((5.84 * playercommonx) < 1.31 && 5.84 < (blacko.length * playercommonx)) {
         blacko += `${mathM + 1}`;
         break;
      }
      while (3 < savee.length) {
         savee = `${blacko.length}`;
         break;
      }
          let ajaxH: Map<any, any> = new Map([[String.fromCharCode(105,95,56,56,95,115,116,97,114,116,99,111,100,101,0),871], [String.fromCharCode(122,95,57,57,95,97,110,116,105,97,108,105,97,115,105,110,103,0),690], [String.fromCharCode(109,95,55,52,95,115,117,112,101,114,98,108,111,99,107,115,0),363]]);
         savee += `${blacko.length}`;
         ajaxH.set(`${ajaxH.size}`, ajaxH.size + 3);
      for (let b = 0; b < 2; b++) {
         playercommonx *= 1;
      }
         savee += `${savee.length}`;
      for (let n = 0; n < 3; n++) {
         blacko = "2";
      }
         playercommonx /= Math.max(2, blacko.length);
      if (2 >= mathM) {
         mathM %= Math.max(1, 3);
      }
      while (savee.length >= 1) {
          let mbsplashN = String.fromCharCode(100,95,55,50,95,102,114,97,103,109,101,110,116,0);
          let rewindY = String.fromCharCode(110,97,110,111,112,98,95,117,95,49,56,0);
          let floatingA = 1;
         mathM %= Math.max(2, 1 * parseInt(`${playercommonx}`));
         mbsplashN += `${mbsplashN.length}`;
         rewindY = `${3 + rewindY.length}`;
         floatingA <<= Math.min(4, rewindY.length);
         break;
      }
      rewardvideom += `${rewardvideom.length}`;
      if (debugw) {
         break;
      }
   } while (debugw && (rewardvideom.length < 1));
   let pointf = 5783388 <= downloadingy.length;
   do {
      downloadingy += `${(2 | (rewindP ? 5 : 5))}`;
      if (pointf) {
         break;
      }
   } while ((rewardvideom.length >= 1) && pointf);
      ewardedO = !downloadingy.startsWith(`${ewardedO}`);
      tt_humidity_guide.sportDetailsPlaysTimesAnalytics(
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
                      videoType="sportsGreen"
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
