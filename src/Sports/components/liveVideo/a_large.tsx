import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './fgl_less_position';
import { VideoLiveType } from '../../global/wd_group_recommendation';
import { EALSource, XCXMember } from '../../types/x_home';
import VodPlayer, { OBasketballPlaylist } from '../../../components/videoPlayer/zgq_ping_animation';
import { lockAppOrientation } from '@redux/actions/h_nalytics_typing';
import { PSmall } from '@redux/fj_prediction_thailand';
import { GBYMiniCanvas } from '@redux/reducers/t_types';
import { useAppDispatch, useAppSelector } from '@hooks/kg_index';
import WebView from 'react-native-webview';
import BackIcon from '@static/images/adultNotificationPenalty.svg';
import { useIsFocused, useTheme } from '@react-navigation/native';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import CountdownIndicator from '../../../components/button/et_icon';

interface XFillButton {
  videoRef?: React.MutableRefObject<OBasketballPlaylist | null>;
  matchID?: number;
  streamID?: number;
  liveDataState?: EALSource;
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
}: XFillButton) => {
  const { colors } = useTheme();

  const homeName = liveDataState?.home?.name;
  const awayName = liveDataState?.away?.name;
  const combinedName = `${homeName} vs ${awayName}`;

  const dispatch = useAppDispatch();

  const [isReadyPlay, setReadyPlay] = useState(false);
  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer,
  );

  
  
  
  
  
  // } = useSelector(s => s.videoPlayerControl);

  
  const [streamData, setStreamData] = useState<XCXMember | undefined>();
  const streamsData = liveDataState?.streams;
  const streamRoomID = streamData?.id;
  

  const onHandleBack = () => {
       let placeholderh = 0;
    let groupx = 4.0;
    let style8 = false;
    let unselectedh = String.fromCharCode(103,97,117,115,115,0);
    let inactiveb = 1.0;
    let blacklistP = 4.0;
    let s_countO = 2.0;
    let phoneg: Map<any, any> = new Map([[String.fromCharCode(108,112,99,109,0),String.fromCharCode(109,105,120,101,114,0)], [String.fromCharCode(112,97,114,97,109,101,116,114,105,99,0),String.fromCharCode(99,97,110,99,101,108,101,100,0)], [String.fromCharCode(105,109,97,103,101,115,0),String.fromCharCode(106,111,98,0)]]);
    let active2 = true;
    let sellm: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,111,115,101,105,0),981], [String.fromCharCode(112,114,101,100,0),884]]);
    let animationt = String.fromCharCode(108,111,117,112,101,0);
    let settingy = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,0);
    let moduleg = 3.0;
    let bannerT = 1.0;
       let rewindY: Map<any, any> = new Map([[String.fromCharCode(113,117,101,117,101,115,0),String.fromCharCode(100,105,102,102,105,99,117,108,116,121,0)], [String.fromCharCode(115,116,121,108,101,115,0),String.fromCharCode(103,111,108,100,101,110,0)]]);
      for (let r = 0; r < 2; r++) {
         rewindY = new Map([[`${rewindY.size}`, rewindY.size << (Math.min(3, Math.abs(rewindY.size)))]]);
      }
         rewindY.set(`${rewindY.size}`, rewindY.size);
      let scoreK = 6388605 >= rewindY.size;
      do {
          let jcopy_yyF: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,110,116,105,97,116,101,0),483], [String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,0),655], [String.fromCharCode(105,95,51,49,0),606]]);
          let sharede = false;
          let agreementX = String.fromCharCode(115,112,111,116,0);
          let switch_pyt: Array<any> = [String.fromCharCode(108,97,110,100,109,105,110,101,115,0), String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0), String.fromCharCode(97,108,98,117,109,115,0)];
         rewindY.set(`${sharede}`, 1);
         jcopy_yyF.set(agreementX, switch_pyt.length);
         agreementX = `${(agreementX == String.fromCharCode(80,0) ? agreementX.length : switch_pyt.length)}`;
         if (scoreK) {
            break;
         }
      } while (scoreK && (!Array.from(rewindY.keys()).includes(`${rewindY.size}`)));
      inactiveb += sellm.size << (Math.min(4, Math.abs(parseInt(`${s_countO}`))));
   if (!style8) {
      phoneg.set(`${groupx}`, parseInt(`${groupx}`) + 1);
   }
   for (let n = 0; n < 1; n++) {
       let descU = 0.0;
       let placeholder5 = 3;
       let textK = String.fromCharCode(105,110,116,114,110,108,0);
       let historyK = true;
      while (historyK) {
          let sharec: Map<any, any> = new Map([[String.fromCharCode(109,98,102,105,108,116,101,114,0),517], [String.fromCharCode(115,110,112,114,105,110,116,102,0),698], [String.fromCharCode(101,116,97,100,97,116,97,0),111]]);
          let middleV: Array<any> = [573, 825, 940];
          let aways = 3;
          let b_playerh: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,97,114,105,101,115,0),false ], [String.fromCharCode(101,120,112,108,111,100,105,110,103,0),true ], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,0),true ]]);
         textK = "1 & placeholder5";
         sharec.set(`${aways}`, aways);
         middleV.push(1 - b_playerh.size);
         b_playerh = new Map([[`${b_playerh.size}`, 3 & aways]]);
         break;
      }
      for (let x = 0; x < 3; x++) {
         historyK = textK.startsWith(`${historyK}`);
      }
         placeholder5 ^= ((historyK ? 4 : 2) % (Math.max(8, placeholder5)));
       let bufferh: Array<any> = [String.fromCharCode(97,110,105,109,97,108,115,0), String.fromCharCode(108,97,118,117,0), String.fromCharCode(101,115,116,105,109,97,116,101,115,0)];
       let lessv: Array<any> = [331, 795];
         textK = `${bufferh.length | 2}`;
         historyK = !historyK;
      while (3 >= (lessv.length / (Math.max(5, bufferh.length))) || (3 / (Math.max(6, lessv.length))) >= 4) {
          let expiredq = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,0);
          let target_ = String.fromCharCode(103,114,111,117,112,99,97,108,108,0);
          let matchm: Array<any> = [679, 885, 128];
         lessv.push(bufferh.length);
         expiredq += `${target_.length}`;
         target_ += `${1 | matchm.length}`;
         matchm.push(matchm.length);
         break;
      }
      while (textK.length == bufferh.length) {
          let e_playerK: Map<any, any> = new Map([[String.fromCharCode(104,119,99,111,110,102,105,103,0),String.fromCharCode(105,115,116,114,101,97,109,0)], [String.fromCharCode(108,105,107,101,0),String.fromCharCode(109,115,103,115,109,0)], [String.fromCharCode(109,105,110,105,109,105,122,101,100,0),String.fromCharCode(97,108,116,101,114,95,55,95,52,54,0)]]);
         bufferh.push(bufferh.length ^ parseInt(`${descU}`));
         e_playerK = new Map([[`${e_playerK.size}`, e_playerK.size ^ 1]]);
         break;
      }
          let collectionx = 5.0;
         historyK = bufferh.length < lessv.length;
         collectionx += parseInt(`${collectionx}`);
         descU += (parseFloat(`${2 * (historyK ? 4 : 4)}`));
      while (2 > (bufferh.length >> (Math.min(Math.abs(2), 1)))) {
         historyK = placeholder5 <= 38 || 9.88 <= descU;
         break;
      }
       let page0: Map<any, any> = new Map([[String.fromCharCode(120,109,97,115,109,0),153], [String.fromCharCode(101,110,116,105,116,105,101,115,0),628], [String.fromCharCode(99,108,97,117,115,101,115,0),314]]);
       let lightd: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,109,101,110,116,0),693], [String.fromCharCode(105,115,112,111,114,116,0),882], [String.fromCharCode(97,119,97,105,116,0),581]]);
      phoneg.set(`${blacklistP}`, parseInt(`${inactiveb}`));
   }
   while (2 >= (sellm.size ^ 2) || (sellm.size ^ unselectedh.length) >= 2) {
       let configk = 2.0;
       let detailV = false;
          let volumei = 2.0;
         detailV = detailV && 98.48 <= configk;
         volumei -= parseInt(`${volumei}`);
         configk *= parseInt(`${configk}`) | 3;
       let scoreR = String.fromCharCode(105,110,112,117,116,120,0);
       let saveB = String.fromCharCode(115,101,99,111,110,100,112,97,115,115,0);
      while (scoreR != String.fromCharCode(85,0)) {
         saveB += `${((detailV ? 5 : 5))}`;
         break;
      }
       let indexm = String.fromCharCode(99,111,100,101,99,105,100,0);
       let clearw = String.fromCharCode(115,97,116,0);
         configk += ((detailV ? 3 : 4) << (Math.min(Math.abs(parseInt(`${configk}`)), 2)));
      unselectedh += `${sellm.size * 3}`;
      break;
   }
   while (3.92 <= (groupx + 3.85)) {
      style8 = (((style8 ? settingy.length : 25) ^ settingy.length) <= 25);
      break;
   }
   if (3.78 < (groupx - 5.39) && 3 < (unselectedh.length - parseInt(`${groupx}`))) {
       let step0 = true;
         step0 = (step0 ? !step0 : step0);
      if (step0 && !step0) {
         step0 = (step0 ? step0 : !step0);
      }
      if (step0 && !step0) {
         step0 = (step0 ? step0 : !step0);
      }
      groupx -= settingy.length;
   }
       let greyo = 5.0;
         greyo /= Math.max(3, 2);
         greyo += parseInt(`${greyo}`) + parseInt(`${greyo}`);
          let lessJ = false;
          let launchf = 0;
          let logod = false;
         greyo /= Math.max(4, (launchf << (Math.min(5, Math.abs((logod ? 1 : 2))))));
         lessJ = !lessJ;
         launchf >>= Math.min(5, Math.abs(((lessJ ? 5 : 3) | 3)));
      active2 = 83 == phoneg.size;
      style8 = animationt == String.fromCharCode(48,0);
      s_countO -= parseInt(`${inactiveb}`);
   if (4 > (placeholderh / (Math.max(parseInt(`${s_countO}`), 10))) || 1 > (placeholderh % 4)) {
      s_countO /= Math.max(2, 4);
   }

    if (
      settingsReducer.appOrientation === 'PORTRAIT' ||
      settingsReducer.appOrientation === 'PORTRAIT-UPSIDEDOWN'
    ) {

   let episodeR = 7495312 <= unselectedh.length;
   do {
      unselectedh += `${animationt.length}`;
      if (episodeR) {
         break;
      }
   } while (episodeR && (4 > (3 | sellm.size)));
   let closeH = unselectedh == String.fromCharCode(52,111,119,112,122,102,119,50,54,97,0);
   do {
      unselectedh = `${((style8 ? 2 : 3))}`;
      if (closeH) {
         break;
      }
   } while (closeH && ((unselectedh.length << (Math.min(1, Math.abs(placeholderh)))) > 5));
       let right1 = String.fromCharCode(115,97,116,100,120,0);
       let anythinkE: Map<any, any> = new Map([[String.fromCharCode(113,109,105,110,109,97,120,0),true ], [String.fromCharCode(103,122,105,112,112,101,100,0),false ]]);
       let screenD = 3;
         anythinkE.set(`${screenD}`, 2);
      while (2 == (1 * screenD)) {
         screenD &= right1.length | 1;
         break;
      }
      let text8 = 7033098 <= screenD;
      do {
          let tickD = 4.0;
          let steps = 4;
         screenD %= Math.max(1, 3 * right1.length);
         tickD /= Math.max(parseFloat(`${3 * steps}`), 3);
         steps &= 1 / (Math.max(10, parseInt(`${tickD}`)));
         if (text8) {
            break;
         }
      } while (text8 && (3 <= (screenD | 4) && (4 | screenD) <= 2));
      if (!right1.includes(`${anythinkE.size}`)) {
         right1 += `${anythinkE.size}`;
      }
      let nextU = 5586313 >= screenD;
      do {
         screenD |= screenD;
         if (nextU) {
            break;
         }
      } while ((right1.startsWith(`${screenD}`)) && nextU);
          let handlers: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,115,0),675], [String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,0),384]]);
         screenD |= anythinkE.size * 2;
         handlers.set(`${handlers.size}`, handlers.size ^ handlers.size);
         right1 = `${(String.fromCharCode(55,0) == right1 ? screenD : right1.length)}`;
          let interstitialx = String.fromCharCode(114,101,115,112,111,110,115,101,115,0);
         screenD *= right1.length * screenD;
         interstitialx += "1";
      if (1 <= (anythinkE.size ^ screenD) && 1 <= (anythinkE.size ^ screenD)) {
         anythinkE.set(`${screenD}`, 2 ^ anythinkE.size);
      }
      blacklistP *= (parseFloat(`${2 >> (Math.min(3, Math.abs((active2 ? 3 : 1))))}`));
      unselectedh = "1";
   for (let b = 0; b < 1; b++) {
      phoneg.set(settingy, settingy.length * 1);
   }
       let confirmation8 = 4;
       let spinnerv: Array<any> = [718, 63, 4];
       let overlayq = String.fromCharCode(114,97,105,115,101,100,0);
      let largen = confirmation8 <= 9539347;
      do {
         confirmation8 <<= Math.min(3, Math.abs(spinnerv.length - 3));
         if (largen) {
            break;
         }
      } while (((confirmation8 % (Math.max(overlayq.length, 7))) <= 2 || (confirmation8 % (Math.max(overlayq.length, 9))) <= 2) && largen);
          let emojiv = 4;
          let time_8V = String.fromCharCode(110,105,110,101,0);
         overlayq += `${2 / (Math.max(4, overlayq.length))}`;
         emojiv >>= Math.min(Math.abs(time_8V.length / (Math.max(1, 5))), 3);
         time_8V += "1";
         spinnerv = [2];
       let assistO = String.fromCharCode(97,110,99,104,111,114,0);
       let invitez = String.fromCharCode(99,109,115,103,0);
      for (let w = 0; w < 2; w++) {
         confirmation8 >>= Math.min(4, spinnerv.length);
      }
      while (1 >= (overlayq.length | spinnerv.length)) {
         overlayq = "1";
         break;
      }
      for (let t = 0; t < 3; t++) {
         spinnerv = [3 ^ assistO.length];
      }
         overlayq += "3";
      sellm = new Map([[`${phoneg.size}`, phoneg.size - overlayq.length]]);
      phoneg = new Map([[unselectedh, ((active2 ? 3 : 4))]]);
   if (style8 && 4 <= (1 * phoneg.size)) {
      phoneg.set(`${style8}`, ((style8 ? 3 : 3) | 1));
   }
   if (unselectedh.length == settingy.length) {
       let nextA = 4.0;
       let episoden = String.fromCharCode(101,97,115,101,0);
       let dicem = String.fromCharCode(103,114,97,121,97,0);
      if (episoden.length < 4) {
         episoden = "3";
      }
      for (let v = 0; v < 1; v++) {
         episoden = `${(dicem == String.fromCharCode(112,0) ? dicem.length : episoden.length)}`;
      }
      unselectedh += "3";
      nextA /= Math.max(parseInt(`${nextA}`) / (Math.max(6, parseInt(`${nextA}`))), 5);
   }
      sellm = new Map([[settingy, (String.fromCharCode(116,0) == unselectedh ? unselectedh.length : settingy.length)]]);
      setTimeout(() => setVideoSource(VideoLiveType.DETAIL, ''), 100);
    } else {

      placeholderh *= settingy.length - 1;
       let phoner = String.fromCharCode(107,101,121,112,97,116,104,0);
       let main_uE = 0.0;
      for (let m = 0; m < 1; m++) {
          let favoritet = String.fromCharCode(112,108,97,121,97,98,108,101,0);
          let sinak = 1.0;
          let mappingK = 2.0;
          let result6: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,101,100,0),260], [String.fromCharCode(102,108,105,112,0),709]]);
          let descUw = false;
         main_uE /= Math.max((parseFloat(`${phoner == String.fromCharCode(57,0) ? parseInt(`${main_uE}`) : phoner.length}`)), 4);
         favoritet += "3";
         sinak *= 1;
         mappingK *= parseFloat(`${parseInt(`${mappingK}`) | 3}`);
         result6 = new Map([[favoritet, 2]]);
         descUw = sinak >= favoritet.length;
      }
         main_uE += parseFloat(`${parseInt(`${main_uE}`)}`);
      let target9 = 9875593 >= phoner.length;
      do {
         phoner += `${parseInt(`${main_uE}`) % (Math.max(1, 5))}`;
         if (target9) {
            break;
         }
      } while ((5.94 < (main_uE + 5.36) || (phoner.length + parseInt(`${main_uE}`)) < 5) && target9);
      let bella = main_uE >= 5775332.0;
      do {
         main_uE /= Math.max(parseFloat(`${2}`), 5);
         if (bella) {
            break;
         }
      } while (bella && ((parseInt(`${main_uE}`) + phoner.length) <= 2 || (phoner.length - 2) <= 3));
          let largel = true;
          let scheduleJ = false;
         main_uE *= (parseFloat(`${(scheduleJ ? 5 : 4) / (Math.max(10, (largel ? 1 : 1)))}`));
       let becomeR = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,0);
       let gesturesy = String.fromCharCode(97,112,112,101,110,100,105,110,103,0);
      inactiveb *= parseInt(`${groupx}`) >> (Math.min(unselectedh.length, 5));
   while ((unselectedh.length * parseInt(`${s_countO}`)) == 3 && (3 / (Math.max(4, unselectedh.length))) == 4) {
      s_countO += ((style8 ? 2 : 5) << (Math.min(Math.abs(1), 2)));
      break;
   }
   for (let m = 0; m < 3; m++) {
      style8 = 23.83 == groupx && 23.83 == moduleg;
   }
   if ((animationt.length << (Math.min(Math.abs(3), 3))) < 5 || (placeholderh << (Math.min(animationt.length, 1))) < 3) {
      placeholderh &= unselectedh.length | 1;
   }
       let buffert = String.fromCharCode(100,117,114,103,101,114,107,105,110,103,0);
       let animationv = false;
         buffert = `${(String.fromCharCode(86,0) == buffert ? (animationv ? 4 : 3) : buffert.length)}`;
         buffert += `${(buffert.length * (animationv ? 1 : 4))}`;
      for (let l = 0; l < 3; l++) {
         animationv = (44 <= (buffert.length * (animationv ? buffert.length : 44)));
      }
          let downI = String.fromCharCode(100,111,119,110,109,105,120,0);
         buffert += `${((animationv ? 1 : 1) | 2)}`;
         downI += `${(String.fromCharCode(87,0) == downI ? downI.length : downI.length)}`;
      if (2 < buffert.length || animationv) {
         buffert = `${(String.fromCharCode(90,0) == buffert ? (animationv ? 1 : 5) : buffert.length)}`;
      }
      for (let z = 0; z < 3; z++) {
         animationv = buffert.length <= 78;
      }
      moduleg += parseInt(`${inactiveb}`) << (Math.min(3, Math.abs(3)));
      sellm.set(`${groupx}`, 1 << (Math.min(Math.abs(parseInt(`${groupx}`)), 3)));
      settingy += `${((active2 ? 1 : 5) & parseInt(`${inactiveb}`))}`;
   while (4 >= (parseInt(`${moduleg}`) / (Math.max(settingy.length, 6))) && 5.82 >= (moduleg / (Math.max(4.75, 6)))) {
      settingy += `${1 ^ parseInt(`${groupx}`)}`;
      break;
   }
       let ewardedN: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,97,108,108,121,0),624], [String.fromCharCode(119,97,115,0),762], [String.fromCharCode(111,98,106,116,120,116,0),189]]);
       let configure6 = 3;
          let gemfileP = String.fromCharCode(112,95,53,53,95,117,110,105,102,111,114,109,115,0);
          let becomed = true;
          let overx: Array<any> = [String.fromCharCode(105,115,111,0), String.fromCharCode(109,98,97,102,102,0), String.fromCharCode(99,104,101,98,121,115,104,101,118,0)];
         ewardedN = new Map([[`${becomed}`, ((becomed ? 2 : 5) + 3)]]);
         gemfileP = `${(gemfileP == String.fromCharCode(48,0) ? overx.length : gemfileP.length)}`;
         overx = [2 >> (Math.min(1, overx.length))];
          let carouselq: Array<any> = [695, 973, 148];
          let reducer6 = String.fromCharCode(103,101,116,100,105,103,105,116,0);
          let circleq = true;
         ewardedN.set(`${reducer6}`, reducer6.length | 3);
         carouselq = [carouselq.length];
         circleq = carouselq.length < 38;
      settingy += "2";
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
       let sports_ = String.fromCharCode(117,99,104,97,114,0);
    let readT = 5.0;
    let xvod3 = 4;
    let launch7: Array<any> = [String.fromCharCode(112,105,120,101,108,117,116,105,108,115,0), String.fromCharCode(108,112,99,101,110,118,0)];
    let sharedj = String.fromCharCode(97,114,109,118,116,101,0);
    let read3 = false;
    let selectedA = String.fromCharCode(102,97,117,108,116,0);
    let bing9 = true;
    let downb: Array<any> = [343, 834];
    let become7 = 0;
    let malaysiaZ = String.fromCharCode(102,116,118,99,108,0);
    let arrowl = 3.0;
    let incidentb = String.fromCharCode(118,101,110,117,101,0);
    let arrowH = 3.0;
   if (become7 >= 5) {
      become7 <<= Math.min(malaysiaZ.length, 4);
   }
   if (5.84 <= (downb.length + readT)) {
      downb = [3 ^ sports_.length];
   }
       let share4 = 4;
       let update_h3 = String.fromCharCode(97,110,105,109,97,116,101,0);
       let selectedr = String.fromCharCode(115,108,105,99,101,115,0);
          let eacth = String.fromCharCode(118,97,114,105,97,100,105,99,0);
          let playlistI = String.fromCharCode(104,105,103,104,105,103,104,116,0);
          let fullU = String.fromCharCode(99,111,111,108,100,111,119,110,0);
         update_h3 = `${share4 >> (Math.min(playlistI.length, 5))}`;
         eacth = `${eacth.length}`;
         playlistI += `${fullU.length << (Math.min(Math.abs(2), 1))}`;
         fullU += `${3 * fullU.length}`;
          let typingJ = 0.0;
          let foundd = String.fromCharCode(101,120,99,101,112,116,105,111,110,115,0);
          let countdownH: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,108,101,110,0),559], [String.fromCharCode(115,120,110,101,116,0),37]]);
         update_h3 = `${3 * parseInt(`${typingJ}`)}`;
         typingJ *= foundd.length;
         foundd = `${foundd.length}`;
         countdownH = new Map([[`${countdownH.size}`, foundd.length]]);
          let time_cj5 = String.fromCharCode(114,111,116,111,0);
          let reportC = 0;
          let crossu = String.fromCharCode(117,110,105,116,115,0);
         share4 ^= reportC;
         time_cj5 += `${time_cj5.length % (Math.max(2, 7))}`;
         reportC |= (String.fromCharCode(77,0) == time_cj5 ? time_cj5.length : crossu.length);
         crossu = `${time_cj5.length << (Math.min(crossu.length, 3))}`;
      if (5 < update_h3.length) {
         update_h3 += "3 + share4";
      }
         share4 += (String.fromCharCode(88,0) == update_h3 ? share4 : update_h3.length);
         share4 |= 2;
         update_h3 = `${update_h3.length}`;
          let sansy = 1.0;
          let zhengpianl: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,97,110,116,115,0),942], [String.fromCharCode(114,101,99,121,99,108,101,0),642], [String.fromCharCode(117,117,105,100,112,114,111,102,0),399]]);
          let dropdownQ = 2.0;
         share4 >>= Math.min(Math.abs(3 >> (Math.min(Math.abs(parseInt(`${sansy}`)), 3))), 2);
         sansy += parseInt(`${dropdownQ}`);
         zhengpianl = new Map([[`${zhengpianl.size}`, zhengpianl.size >> (Math.min(2, Math.abs(parseInt(`${dropdownQ}`))))]]);
         selectedr += `${update_h3.length}`;
      become7 &= 3;
   while (2.83 <= (xvod3 / (Math.max(arrowl, 4)))) {
       let usernameR = String.fromCharCode(102,101,101,0);
       let tick3 = 0.0;
       let vietnam4 = false;
       let private_o_k = 3.0;
      let tickedD = tick3 <= 9723066.0;
      do {
         tick3 *= parseInt(`${private_o_k}`) + parseInt(`${tick3}`);
         if (tickedD) {
            break;
         }
      } while (tickedD && ((usernameR.length * tick3) > 5.61));
      for (let i = 0; i < 3; i++) {
         usernameR += `${parseInt(`${tick3}`) / (Math.max(4, usernameR.length))}`;
      }
         tick3 *= usernameR.length >> (Math.min(Math.abs(3), 1));
         usernameR += `${parseInt(`${tick3}`) << (Math.min(Math.abs(3), 4))}`;
      if (1 > (1 + usernameR.length)) {
         private_o_k += parseFloat(`${parseInt(`${tick3}`) << (Math.min(1, Math.abs(1)))}`);
      }
         private_o_k += parseFloat(`${usernameR.length}`);
      if ((2.71 - tick3) == 4.63) {
         tick3 *= 1 | parseInt(`${private_o_k}`);
      }
       let clear9 = 2.0;
       let catagory8 = 2.0;
         private_o_k *= parseFloat(`${1}`);
         vietnam4 = (tick3 / (Math.max(9, private_o_k))) >= 88.65;
      for (let q = 0; q < 2; q++) {
         private_o_k += (parseFloat(`${usernameR == String.fromCharCode(106,0) ? (vietnam4 ? 5 : 3) : usernameR.length}`));
      }
      if (private_o_k >= 5.21) {
          let nativeX = String.fromCharCode(119,105,116,104,0);
          let combineb = 5.0;
          let guidee = 3.0;
          let blackX = true;
         private_o_k *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${combineb}`)), 4))}`);
         nativeX += `${((blackX ? 1 : 4) << (Math.min(Math.abs(parseInt(`${guidee}`)), 3)))}`;
         combineb -= parseFloat(`${nativeX.length & 1}`);
         guidee *= ((blackX ? 4 : 4) ^ parseInt(`${guidee}`));
      }
      arrowl -= parseFloat(`${2 >> (Math.min(1, launch7.length))}`);
      break;
   }
   while (3 < (become7 & 1) && (1 & launch7.length) < 1) {
      launch7 = [parseInt(`${readT}`) & 3];
      break;
   }
      bing9 = 98 >= launch7.length;
   for (let f = 0; f < 2; f++) {
       let notificationw = String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,0);
       let chartZ = String.fromCharCode(116,114,97,99,105,110,103,0);
       let moduleF = false;
       let questi: Map<any, any> = new Map([[String.fromCharCode(114,101,100,117,99,116,105,111,110,115,0),821], [String.fromCharCode(105,110,116,101,114,111,112,0),545]]);
         moduleF = notificationw == chartZ;
      for (let u = 0; u < 1; u++) {
         notificationw = `${(notificationw.length - (moduleF ? 4 : 2))}`;
      }
      let bingE = moduleF ? !moduleF : moduleF;
      do {
          let helperv = String.fromCharCode(111,116,104,101,114,119,105,115,101,0);
          let brightnessJ: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,98,97,99,107,0),29], [String.fromCharCode(99,111,101,102,102,115,0),53]]);
         moduleF = 88 == questi.size;
         helperv += `${helperv.length + brightnessJ.size}`;
         brightnessJ.set(`${helperv}`, 1);
         if (bingE) {
            break;
         }
      } while (bingE && (1 <= (questi.size | 2) || !moduleF));
      if (chartZ == String.fromCharCode(119,0)) {
         notificationw += `${(notificationw == String.fromCharCode(50,0) ? questi.size : notificationw.length)}`;
      }
         questi.set(chartZ, (String.fromCharCode(108,0) == chartZ ? chartZ.length : notificationw.length));
      while ((chartZ.length | questi.size) >= 1 && 4 >= (1 | chartZ.length)) {
         chartZ += "2";
         break;
      }
      while (notificationw.includes(`${questi.size}`)) {
         notificationw = `${questi.size}`;
         break;
      }
       let datas = String.fromCharCode(105,110,115,101,99,0);
         questi.set(chartZ, chartZ.length % 3);
          let stepY = 2.0;
         datas += `${1 << (Math.min(3, Math.abs(questi.size)))}`;
         stepY += parseFloat(`${parseInt(`${stepY}`)}`);
      while (3 > chartZ.length) {
         datas = `${1 | questi.size}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
          let ying3: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,0),true ], [String.fromCharCode(114,101,115,105,122,101,0),true ]]);
         questi = new Map([[`${ying3.size}`, datas.length << (Math.min(Math.abs(1), 3))]]);
      }
      sharedj += `${2 * selectedA.length}`;
   }
   let bufferh = downb.length >= 9366930;
   do {
      downb.push(((read3 ? 5 : 4)));
      if (bufferh) {
         break;
      }
   } while (bufferh && (4 <= (downb.length << (Math.min(Math.abs(1), 3))) || 1 <= (become7 << (Math.min(downb.length, 4)))));

    if (!isReadyPlay && videoSource !== undefined) {

   let bootsplashL = 8402334 <= selectedA.length;
   do {
      selectedA += `${downb.length}`;
      if (bootsplashL) {
         break;
      }
   } while (bootsplashL && ((downb.length - 5) > 1 || (5 - downb.length) > 2));
   let score7 = sports_.length >= 5922518;
   do {
      sports_ += `${sports_.length & selectedA.length}`;
      if (score7) {
         break;
      }
   } while ((sports_.length < xvod3) && score7);
   while (arrowl <= 5.18) {
      launch7.push(3);
      break;
   }
   let sheetB = 8295676.0 <= readT;
   do {
      readT -= become7 + 1;
      if (sheetB) {
         break;
      }
   } while ((5 > xvod3) && sheetB);
      readT -= downb.length;
   let page_ = arrowl >= 7531483.0;
   do {
      arrowl += parseFloat(`${xvod3}`);
      if (page_) {
         break;
      }
   } while (page_ && ((launch7.length - 2) == 4));
   if (malaysiaZ.endsWith(`${become7}`)) {
       let renewa: Array<any> = [String.fromCharCode(116,97,98,108,101,105,110,105,116,0), String.fromCharCode(114,114,116,114,0), String.fromCharCode(115,112,101,97,107,105,110,103,0)];
       let less4: Array<any> = [287, 846];
       let commentz: Array<any> = [249, 285, 226];
       let assistR = false;
         less4.push((2 * (assistR ? 2 : 5)));
       let stationsv = 4.0;
         commentz.push(less4.length);
      for (let o = 0; o < 1; o++) {
         assistR = (renewa.length - stationsv) >= 100.92;
      }
         less4 = [renewa.length];
      while (!renewa.includes(stationsv)) {
         stationsv *= 3;
         break;
      }
         less4 = [((assistR ? 2 : 3) << (Math.min(Math.abs(parseInt(`${stationsv}`)), 3)))];
      for (let p = 0; p < 2; p++) {
         stationsv += commentz.length - 3;
      }
      while ((less4.length * renewa.length) > 1) {
         less4 = [parseInt(`${stationsv}`) | 2];
         break;
      }
      let usernamem = commentz.length <= 9429744;
      do {
         commentz = [((assistR ? 1 : 4) << (Math.min(commentz.length, 2)))];
         if (usernamem) {
            break;
         }
      } while ((1 <= less4.length) && usernamem);
      while (!commentz.includes(stationsv)) {
         commentz = [commentz.length];
         break;
      }
         assistR = stationsv < 60.100;
      malaysiaZ += `${((assistR ? 1 : 1) << (Math.min(Math.abs(3), 4)))}`;
   }
      malaysiaZ += `${1 ^ parseInt(`${readT}`)}`;
      setReadyPlay(true);

      readT *= parseInt(`${arrowl}`);
      sharedj = `${become7 | 2}`;
      sports_ += `${malaysiaZ.length}`;
       let short_b2B = 0.0;
       let castQ = 1.0;
       let trashB = String.fromCharCode(99,111,109,109,101,110,116,0);
       let expiredx = String.fromCharCode(114,102,102,116,98,0);
          let progressP: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,0),129], [String.fromCharCode(112,114,111,114,101,115,100,97,116,97,0),884]]);
          let heartL: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,108,101,115,0),true ], [String.fromCharCode(97,112,112,114,111,118,101,0),true ]]);
         expiredx = `${3 - expiredx.length}`;
         progressP.set(`${progressP.size}`, heartL.size % (Math.max(3, progressP.size)));
         heartL.set(`${heartL.size}`, heartL.size + progressP.size);
         trashB += `${parseInt(`${short_b2B}`)}`;
          let footballB: Array<any> = [35, 214];
          let shrinkw = String.fromCharCode(98,121,116,101,119,111,114,100,0);
         short_b2B /= Math.max(parseInt(`${castQ}`), 3);
         footballB = [1];
         shrinkw += `${footballB.length}`;
      for (let i = 0; i < 3; i++) {
          let condensedZ: Map<any, any> = new Map([[String.fromCharCode(99,114,108,102,0),616], [String.fromCharCode(118,105,115,105,98,108,101,0),458]]);
         castQ -= 1;
         condensedZ.set(`${condensedZ.size}`, condensedZ.size);
      }
      launch7.push(2);
      bing9 = !malaysiaZ.includes(`${read3}`);
   while (readT < 2.25) {
      readT -= xvod3;
      break;
   }
      malaysiaZ += `${(become7 ^ (bing9 ? 1 : 5))}`;
      selectedA += `${sports_.length}`;
      umb_center_carousel.sportDetailsPlaysTimesAnalytics(
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
                      videoType="saveClose"
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
