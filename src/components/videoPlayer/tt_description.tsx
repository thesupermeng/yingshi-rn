import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity, Platform } from 'react-native';
import MiddleControls from './tt_holder_detail';
import BottomControls from './tt_icon';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/tt_moon_favicon_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/tt_round';
import { ttAcceptedCountItem, ttWeibo, ttAppsOther } from '@type/tt_line_borderless';
import VodCombinedGesture from '../gestures/vod/tt_ajax_bootsplash';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/roundExpired.svg';
import ProjectIcon from '@static/images/sinaProjectEdit.svg'
import VodListVertical from '../vod/tt_player';
import GesturesGuide from '../gestures/vod/tt_product';
import VodLiveStationListVertical from '../vod/tt_flipper';
import FastImage from '../common/tt_connection';
import { screenModel } from '@type/tt_twitter_data';
import { useAppSelector } from '@hooks/tt_spec_download';
import AdultModeCountdownIndicator from '../adultVideo/tt_shoot_whatsapp';
import { DOWNLOAD_FEATURE_ENABLED, UMENG_CHANNEL } from '@utility/tt_trophy_cross';
import DownloadBtn from '@static/images/stringConfigure.svg';
import VodDownloadSelection from '../vod/tt_membership_temp';

type ttSmall = {
  videoUrl: string;
  currentTime: number;
  duration: number;
  onVideoSeek: (params: any) => any;
  onFastForward: (params: any) => any;
  onTogglePlayPause: () => any;
  onHandleFullScreen: () => any;
  paused: boolean;
  isFullScreen: boolean;
  headerTitle: string;
  onHandleGoBack: () => any;
  videoType: string;
  onPlaybackRateChange: (rate: number) => any;
  playbackRate: number;
  onEpisodeChange: any;
  episodes?: ttWeibo
  movieList?: ttAppsOther[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: ttAcceptedCountItem[],
  isFetchingRecommendedMovies?: boolean,
  isVip: boolean,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
};

type ttSpinner = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<ttSpinner, ttSmall>(({
  videoUrl,
  currentTime,
  duration,
  onVideoSeek,
  onFastForward,
  onTogglePlayPause,
  onHandleFullScreen,
  paused,
  isFullScreen,
  headerTitle,
  onHandleGoBack,
  videoType,
  playbackRate,
  onPlaybackRateChange,
  activeEpisode,
  movieList = [],
  onEpisodeChange,
  rangeSize,
  episodes,
  onNextEpisode,
  onSeekGesture,
  accumulatedSkip = 0,
  onShare,
  showGuide,
  showMoreType = 'none',
  streams = [],
  isFetchingRecommendedMovies = false,
  isVip,
  vodID,
  sourceID,
  onDownloadVod,
  setShowAdOverlay
}, ref) => {
  const { colors, spacing, textVariants, icons } = useTheme();
  const navigation = useNavigation();
  const [showSlider, setShowSlider] = useState<'none' | 'playback' | 'episodes' | 'download' | 'movies' | 'streams'>('none');
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimeout = useRef(-1);
  const opacity = useSharedValue(1);
  const timeout = useRef(-1);
  const [isLocked, setIsLocked] = useState(false);
  const [showSliderThumbnail, setShowSliderThumbnail] = useState(false);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const { adultMode } = screenState

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  const hideText = () => {
       let logoC = true;
    let membership7 = String.fromCharCode(99,95,51,53,95,115,111,108,118,101,0);
    let stats7: Array<any> = [853, 194, 695];
    let sidef = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,111,95,52,48,0);
    let becomeG = 2.0;
    let guidet = true;
    let modityx: Array<any> = [791, 385, 591];
    let pathj = String.fromCharCode(98,95,55,95,114,100,106,112,103,99,111,109,0);
    let matcheso = String.fromCharCode(121,95,56,48,95,100,97,116,97,98,97,115,101,0);
    let projectN = false;
    let clearP = String.fromCharCode(97,99,116,105,118,101,95,105,95,53,52,0);
   let styleE = becomeG >= 7047562.0;
   do {
      becomeG += 1;
      if (styleE) {
         break;
      }
   } while (styleE && (!sidef.includes(`${becomeG}`)));
   for (let y = 0; y < 2; y++) {
      stats7 = [2 | membership7.length];
   }
      modityx = [membership7.length & parseInt(`${becomeG}`)];
   let placeholdere = becomeG >= 6016733.0;
   do {
      becomeG *= (String.fromCharCode(109,0) == matcheso ? matcheso.length : (logoC ? 4 : 1));
      if (placeholdere) {
         break;
      }
   } while (((5 - parseInt(`${becomeG}`)) >= 5 || (membership7.length * 5) >= 1) && placeholdere);
   if (!guidet) {
      stats7 = [3];
   }
       let halfK: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,106,95,57,57,0),String.fromCharCode(112,105,120,108,101,116,95,113,95,51,54,0)], [String.fromCharCode(112,108,97,99,101,109,97,114,107,95,54,95,55,57,0),String.fromCharCode(104,112,114,101,100,95,102,95,55,53,0)]]);
       let stringi = 2.0;
       let containerz = String.fromCharCode(109,111,100,95,121,95,54,55,0);
      for (let x = 0; x < 2; x++) {
          let combinedI = false;
          let ccopy_g2h: Array<any> = [303, 529];
         containerz = `${parseInt(`${stringi}`)}`;
         combinedI = ccopy_g2h.includes(combinedI);
         ccopy_g2h.push((ccopy_g2h.length + (combinedI ? 3 : 1)));
      }
          let currentK = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,110,95,57,54,0);
         containerz += `${currentK.length}`;
      for (let e = 0; e < 1; e++) {
         containerz += `${containerz.length}`;
      }
         halfK = new Map([[`${halfK.size}`, 3]]);
         halfK = new Map([[`${halfK.size}`, 1]]);
      for (let l = 0; l < 1; l++) {
         stringi /= Math.max(containerz.length, 3);
      }
      while (halfK.get(`${stringi}`) == null) {
         halfK.set(`${stringi}`, parseInt(`${stringi}`));
         break;
      }
         containerz = `${parseInt(`${stringi}`) << (Math.min(Math.abs(1), 3))}`;
       let entryb = false;
      pathj += `${(pathj == String.fromCharCode(99,0) ? pathj.length : modityx.length)}`;
   for (let y = 0; y < 1; y++) {
       let typingd = String.fromCharCode(97,118,100,101,118,105,99,101,95,102,95,55,54,0);
       let agreementx = 4.0;
      if (typingd.startsWith(`${agreementx}`)) {
         typingd = `${parseInt(`${agreementx}`) % (Math.max(typingd.length, 8))}`;
      }
         agreementx += 1;
      while (typingd.length < parseInt(`${agreementx}`)) {
          let eventY = 3.0;
          let crownJ = String.fromCharCode(115,117,98,99,99,95,53,95,56,51,0);
          let singlem = String.fromCharCode(116,105,109,101,118,97,108,95,108,95,57,52,0);
          let reducerv: Map<any, any> = new Map([[String.fromCharCode(121,95,53,95,114,101,111,114,100,101,114,105,110,103,0),696], [String.fromCharCode(105,110,100,101,110,116,101,100,95,114,95,55,49,0),260], [String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,121,95,48,0),282]]);
         agreementx /= Math.max(reducerv.size * parseInt(`${agreementx}`), 5);
         eventY += parseInt(`${eventY}`);
         crownJ = `${singlem.length}`;
         singlem = `${singlem.length}`;
         reducerv = new Map([[crownJ, crownJ.length / 3]]);
         break;
      }
      let videocommonU = 6681825 <= typingd.length;
      do {
         typingd = `${(typingd == String.fromCharCode(57,0) ? typingd.length : parseInt(`${agreementx}`))}`;
         if (videocommonU) {
            break;
         }
      } while ((5.66 > (agreementx + 2.16) && (2.16 + agreementx) > 5.50) && videocommonU);
         agreementx -= typingd.length;
      while (typingd.startsWith(`${agreementx}`)) {
         agreementx *= (typingd == String.fromCharCode(90,0) ? typingd.length : parseInt(`${agreementx}`));
         break;
      }
      guidet = pathj.length == 66 || 96.81 == becomeG;
   }
   if (2.90 >= (5.53 * becomeG)) {
      becomeG -= (parseInt(`${becomeG}`) ^ (logoC ? 3 : 2));
   }
   for (let d = 0; d < 3; d++) {
      membership7 = `${(2 >> (Math.min(3, Math.abs((logoC ? 5 : 3)))))}`;
   }
   for (let l = 0; l < 2; l++) {
       let storeO: Map<any, any> = new Map([[String.fromCharCode(99,104,111,111,115,101,95,118,95,51,48,0),788], [String.fromCharCode(97,95,52,50,95,115,110,97,112,115,104,111,116,116,101,114,0),229]]);
       let networkz: Array<any> = [604, 998, 131];
       let commonM: Array<any> = [String.fromCharCode(106,95,54,57,95,104,105,103,104,108,105,103,116,104,101,100,0), String.fromCharCode(97,110,103,117,108,97,114,95,49,95,57,55,0), String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,54,95,50,0)];
       let sliderH = String.fromCharCode(112,116,114,95,116,95,51,54,0);
       let internet7 = String.fromCharCode(105,95,56,52,95,114,101,102,112,105,99,0);
      if (Array.from(storeO.keys()).includes(`${networkz.length}`)) {
          let storeOQ = String.fromCharCode(121,95,57,55,95,107,101,121,115,0);
         storeO.set(storeOQ, networkz.length);
      }
      for (let j = 0; j < 3; j++) {
         internet7 = `${storeO.size}`;
      }
         sliderH += `${(String.fromCharCode(105,0) == internet7 ? networkz.length : internet7.length)}`;
      if (4 > (networkz.length % (Math.max(commonM.length, 2)))) {
          let kickJ = String.fromCharCode(107,95,55,55,95,97,114,99,0);
          let pingi = String.fromCharCode(103,95,56,56,95,115,101,116,115,97,114,0);
          let star6 = 4.0;
          let pnewinterstitial2 = String.fromCharCode(115,95,52,56,95,118,105,101,119,101,114,0);
          let eighteenD = false;
         networkz = [parseInt(`${star6}`) - internet7.length];
         kickJ += `${kickJ.length}`;
         pingi = `${kickJ.length}`;
         star6 += (parseFloat(`${kickJ.length ^ (eighteenD ? 4 : 1)}`));
         pnewinterstitial2 = `${pingi.length % (Math.max(pnewinterstitial2.length, 5))}`;
         eighteenD = 94 == kickJ.length;
      }
         internet7 += "2";
      while (internet7.length < 5 && sliderH == String.fromCharCode(86,0)) {
          let matchB = 3.0;
          let sortJ: Map<any, any> = new Map([[String.fromCharCode(101,97,115,105,110,103,95,50,95,49,53,0),true ], [String.fromCharCode(108,95,54,56,95,107,101,121,110,97,109,101,0),true ], [String.fromCharCode(115,116,114,107,95,111,95,51,48,0),false ]]);
          let fastF = 3.0;
         sliderH += "2";
         matchB *= parseFloat(`${parseInt(`${fastF}`)}`);
         sortJ = new Map([[`${sortJ.size}`, parseInt(`${matchB}`)]]);
         fastF -= 1 * sortJ.size;
         break;
      }
      for (let h = 0; h < 3; h++) {
         sliderH += `${2 & sliderH.length}`;
      }
         networkz.push(3);
      let faviconc = String.fromCharCode(48,51,110,98,48,117,0) == internet7;
      do {
         internet7 = "3";
         if (faviconc) {
            break;
         }
      } while ((1 < (5 >> (Math.min(2, internet7.length))) || (networkz.length >> (Math.min(internet7.length, 4))) < 5) && faviconc);
         commonM.push(2);
      for (let y = 0; y < 1; y++) {
         storeO.set(`${networkz.length}`, commonM.length);
      }
      membership7 = `${pathj.length}`;
   }
   let d_unlocko = guidet ? !guidet : guidet;
   do {
      guidet = (membership7.length / (Math.max(5, stats7.length))) < 60;
      if (d_unlocko) {
         break;
      }
   } while (d_unlocko && (!guidet && logoC));
      becomeG += modityx.length * 1;
   while (membership7.length == pathj.length) {
       let mintegralS = String.fromCharCode(100,95,51,52,95,111,117,116,108,105,110,101,0);
       let floaterf: Array<any> = [841, 7];
       let stringt = true;
       let reducerh = false;
         mintegralS += `${((reducerh ? 1 : 2) << (Math.min(Math.abs(3), 2)))}`;
          let selectionU: Map<any, any> = new Map([[String.fromCharCode(99,101,108,116,95,99,95,56,50,0),String.fromCharCode(97,108,112,104,97,108,101,115,115,95,111,95,53,54,0)], [String.fromCharCode(105,109,112,114,105,110,116,95,111,95,54,0),String.fromCharCode(98,95,57,50,95,100,97,116,97,115,0)], [String.fromCharCode(115,95,50,57,95,117,110,116,114,117,115,116,101,100,0),String.fromCharCode(111,95,54,50,95,122,111,110,101,115,0)]]);
         stringt = floaterf.includes(reducerh);
         selectionU.set(`${selectionU.size}`, selectionU.size);
         mintegralS += `${((stringt ? 4 : 2) / 1)}`;
      while (!stringt) {
         floaterf.push(2);
         break;
      }
         reducerh = stringt || mintegralS.length > 56;
      pathj = `${stats7.length << (Math.min(sidef.length, 3))}`;
      break;
   }
   while (sidef.length <= membership7.length) {
      membership7 = `${modityx.length}`;
      break;
   }
   for (let w = 0; w < 1; w++) {
       let groupe: Map<any, any> = new Map([[String.fromCharCode(106,95,54,51,95,99,104,97,114,116,115,0),109], [String.fromCharCode(99,111,110,118,101,114,116,101,100,95,49,95,51,49,0),707], [String.fromCharCode(119,95,52,53,95,112,114,122,112,0),845]]);
       let placeholderi = 4.0;
      let gpayF = 9176219 >= groupe.size;
      do {
          let robotoZ = String.fromCharCode(112,101,101,114,115,95,99,95,49,54,0);
          let gradlewP = false;
          let injuryw = true;
          let componentj = 3;
          let nextQ = String.fromCharCode(103,95,52,51,95,115,99,114,101,97,109,0);
         groupe.set(`${nextQ}`, 1 >> (Math.min(5, nextQ.length)));
         robotoZ = `${robotoZ.length}`;
         gradlewP = !injuryw || 35 > componentj;
         componentj >>= Math.min(Math.abs((componentj | (gradlewP ? 4 : 3))), 5);
         if (gpayF) {
            break;
         }
      } while (gpayF && (4.47 < (parseFloat(`${groupe.size}`) - placeholderi) || 3 < (1 - groupe.size)));
      while (1.68 == (placeholderi / 3.21) || 4 == (parseInt(`${placeholderi}`) / (Math.max(groupe.size, 2)))) {
          let orientationS: Array<any> = [373, 519, 157];
          let downloadingN = 3;
          let xvodw = String.fromCharCode(99,97,110,99,101,108,108,95,49,95,50,54,0);
          let filtery = String.fromCharCode(97,118,103,121,95,117,95,50,49,0);
          let ewardedW: Map<any, any> = new Map([[String.fromCharCode(122,95,56,48,95,116,114,101,110,100,108,105,110,101,0),822], [String.fromCharCode(101,95,50,55,95,98,101,105,110,103,0),529], [String.fromCharCode(110,97,109,101,115,95,115,95,54,51,0),110]]);
         placeholderi -= parseFloat(`${filtery.length / 1}`);
         orientationS = [(String.fromCharCode(95,0) == xvodw ? ewardedW.size : xvodw.length)];
         downloadingN %= Math.max(xvodw.length >> (Math.min(Math.abs(3), 3)), 4);
         filtery += `${2 & ewardedW.size}`;
         break;
      }
         groupe.set(`${placeholderi}`, 3 & parseInt(`${placeholderi}`));
      for (let m = 0; m < 1; m++) {
         groupe = new Map([[`${groupe.size}`, parseInt(`${placeholderi}`) & 3]]);
      }
      for (let f = 0; f < 2; f++) {
          let sellM: Map<any, any> = new Map([[String.fromCharCode(114,117,108,101,115,95,98,95,54,51,0),645], [String.fromCharCode(111,95,50,48,95,114,97,110,107,0),307]]);
          let suggestionD = String.fromCharCode(116,112,99,95,104,95,54,50,0);
          let x_centerh = 3.0;
          let short_qo: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,95,99,95,54,53,0),String.fromCharCode(114,95,50,54,95,100,118,100,97,116,97,0)], [String.fromCharCode(111,117,116,108,105,110,107,95,114,95,56,53,0),String.fromCharCode(104,95,54,49,95,101,120,99,101,101,100,105,110,103,0)], [String.fromCharCode(102,95,51,95,118,99,97,114,100,0),String.fromCharCode(112,95,52,48,95,99,111,100,101,99,117,116,105,108,115,0)]]);
         groupe.set(suggestionD, 3);
         sellM = new Map([[`${sellM.size}`, sellM.size - 2]]);
         suggestionD = `${1 ^ parseInt(`${x_centerh}`)}`;
         x_centerh -= parseFloat(`${2}`);
         short_qo.set(`${x_centerh}`, 3 & parseInt(`${x_centerh}`));
      }
      for (let e = 0; e < 3; e++) {
         placeholderi += parseFloat(`${groupe.size}`);
      }
      matcheso = "3";
   }
       let downloadedb = 4.0;
       let refreshT = false;
      while (!refreshT && 2.76 < (2.53 + downloadedb)) {
         refreshT = !refreshT;
         break;
      }
       let sellP = String.fromCharCode(109,95,56,48,95,99,111,110,102,108,105,99,116,0);
         downloadedb *= parseInt(`${downloadedb}`) | 1;
      for (let g = 0; g < 3; g++) {
         refreshT = !refreshT;
      }
      while (!refreshT && (downloadedb - 3.77) <= 3.1) {
         refreshT = (((!refreshT ? sellP.length : 67) | sellP.length) < 67);
         break;
      }
      while (3.67 == (1.13 * downloadedb)) {
          let infoK: Map<any, any> = new Map([[String.fromCharCode(108,95,57,55,95,121,100,97,121,0),881], [String.fromCharCode(104,95,57,51,95,100,97,114,107,0),204]]);
          let patha = false;
         downloadedb *= infoK.size + 2;
         infoK.set(`${patha}`, ((patha ? 1 : 4)));
         break;
      }
      guidet = sidef.length <= parseInt(`${becomeG}`);
   while (3 <= (stats7.length - 1) || (stats7.length / 1) <= 5) {
       let send_ = 4;
       let refreshF = String.fromCharCode(110,95,50,49,95,112,114,101,0);
      for (let r = 0; r < 3; r++) {
         send_ &= send_ << (Math.min(refreshF.length, 2));
      }
      while ((send_ ^ 4) < 5 && 4 < (send_ ^ refreshF.length)) {
         send_ ^= (refreshF == String.fromCharCode(70,0) ? refreshF.length : send_);
         break;
      }
       let darkF = false;
       let completef = true;
      for (let q = 0; q < 2; q++) {
         completef = !completef;
      }
      let navigationN = 8024505 <= send_;
      do {
          let incident6 = String.fromCharCode(107,101,121,108,101,110,95,56,95,51,53,0);
          let predictionm = String.fromCharCode(97,114,102,113,95,118,95,53,53,0);
          let lighti = 5;
          let nalyticsf: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,95,122,95,55,56,0),60], [String.fromCharCode(117,95,57,57,95,116,104,114,101,97,100,103,114,111,117,112,0),671]]);
         send_ ^= ((darkF ? 2 : 4) / (Math.max(10, (completef ? 5 : 2))));
         incident6 += `${(incident6 == String.fromCharCode(90,0) ? incident6.length : predictionm.length)}`;
         predictionm = `${(predictionm == String.fromCharCode(100,0) ? incident6.length : predictionm.length)}`;
         lighti &= 2;
         nalyticsf.set(`${lighti}`, lighti & nalyticsf.size);
         if (navigationN) {
            break;
         }
      } while (((send_ % 2) == 5 && !darkF) && navigationN);
      for (let z = 0; z < 3; z++) {
         send_ -= 3;
      }
      stats7 = [(parseInt(`${becomeG}`) - (guidet ? 4 : 1))];
      break;
   }
      modityx = [(membership7 == String.fromCharCode(66,0) ? (guidet ? 3 : 1) : membership7.length)];

    opacity.value = withTiming(0); 
  };

  useEffect(() => {
    opacity.value = 1;
    
    timeout.current = setTimeout(hideText, 1000);
    
    return () => clearTimeout(timeout.current);
  }, [accumulatedSkip]);

  useEffect(() => {
    delayControls();
  }, []);

  const handleFastForward = (time: any) => {
    delayControls(false);
    
    onFastForward(time);
  };

  const handlePlayPause = () => {
       let whistleV = 3;
    let cluby = String.fromCharCode(112,95,57,52,95,98,108,111,111,109,0);
    let popupp = String.fromCharCode(109,105,120,105,110,103,95,111,95,50,55,0);
    let calendarn = true;
    let mathl = 4.0;
    let navigation5: Array<any> = [622, 303, 251];
    let sportsp = String.fromCharCode(113,95,53,52,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0);
    let splash_ = String.fromCharCode(115,95,55,52,95,109,97,120,113,0);
    let mappingl = String.fromCharCode(106,95,53,48,95,112,111,108,121,108,105,110,101,0);
    let groupL = 5.0;
      popupp += "2";
       let adultj: Array<any> = [313, 125, 353];
       let otherr = String.fromCharCode(112,95,55,49,0);
       let logoQ = true;
          let skipQ = 1.0;
         otherr += `${((logoQ ? 1 : 4))}`;
         skipQ -= parseInt(`${skipQ}`) >> (Math.min(2, Math.abs(parseInt(`${skipQ}`))));
          let eacth = 4.0;
          let thailandM = String.fromCharCode(103,95,53,55,95,99,111,100,101,99,112,97,114,0);
         otherr += `${parseInt(`${eacth}`)}`;
         eacth /= Math.max(2, (thailandM == String.fromCharCode(53,0) ? thailandM.length : thailandM.length));
       let star0 = true;
       let sinaV = true;
      while (logoQ) {
         adultj = [((sinaV ? 1 : 1) << (Math.min(1, Math.abs(2))))];
         break;
      }
      if (3 > (otherr.length - adultj.length)) {
         otherr += `${((star0 ? 4 : 4) % (Math.max(otherr.length, 1)))}`;
      }
         adultj.push(((logoQ ? 1 : 2) * otherr.length));
      while ((adultj.length / 3) < 3 && (3 / (Math.max(3, adultj.length))) < 5) {
         otherr += `${(String.fromCharCode(70,0) == otherr ? adultj.length : otherr.length)}`;
         break;
      }
          let service8: Map<any, any> = new Map([[String.fromCharCode(116,111,108,108,95,99,95,49,49,0),String.fromCharCode(97,95,55,53,95,100,108,116,97,0)], [String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,106,95,56,50,0),String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,48,95,56,0)], [String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,109,95,54,49,0),String.fromCharCode(116,95,57,95,99,108,103,101,116,0)]]);
          let commentW = 2.0;
         sinaV = 69 >= adultj.length;
         service8.set(`${commentW}`, 1);
         commentW /= Math.max(3, service8.size * 1);
      let store6 = String.fromCharCode(115,116,105,95,105,48,104,0) == otherr;
      do {
         otherr += `${(2 << (Math.min(Math.abs((logoQ ? 2 : 2)), 3)))}`;
         if (store6) {
            break;
         }
      } while (store6 && (otherr.endsWith(`${adultj.length}`)));
      popupp = "3";
   while (splash_.length <= cluby.length) {
      cluby += `${(cluby == String.fromCharCode(86,0) ? whistleV : cluby.length)}`;
      break;
   }
       let comment9: Array<any> = [String.fromCharCode(103,95,53,57,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0), String.fromCharCode(99,104,105,108,100,114,101,110,95,48,95,56,57,0)];
       let scheduleq: Map<any, any> = new Map([[String.fromCharCode(115,95,56,55,0),877], [String.fromCharCode(98,115,101,114,118,101,114,95,106,95,49,48,0),780]]);
       let sentryA = String.fromCharCode(108,111,99,107,95,57,95,57,52,0);
      while (2 == (2 * sentryA.length) && 5 == (2 * sentryA.length)) {
         scheduleq = new Map([[`${scheduleq.size}`, scheduleq.size]]);
         break;
      }
      for (let l = 0; l < 1; l++) {
         comment9 = [comment9.length];
      }
          let anythinkn: Map<any, any> = new Map([[String.fromCharCode(101,110,104,97,110,99,101,100,95,51,95,50,50,0),649], [String.fromCharCode(109,95,52,95,107,105,99,107,101,114,0),106]]);
         scheduleq = new Map([[`${scheduleq.size}`, scheduleq.size]]);
         anythinkn.set(`${anythinkn.size}`, anythinkn.size ^ anythinkn.size);
      for (let c = 0; c < 2; c++) {
         scheduleq = new Map([[`${scheduleq.size}`, 2 | scheduleq.size]]);
      }
       let right0 = String.fromCharCode(109,117,110,108,111,99,107,95,121,95,56,53,0);
       let leftz = String.fromCharCode(110,99,111,110,102,95,116,95,57,51,0);
       let hongkongi = true;
       let eventJ = false;
      for (let e = 0; e < 2; e++) {
          let debugG = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,114,95,49,55,0);
          let mbnativeadvancedz = String.fromCharCode(104,97,110,100,108,101,100,95,121,95,56,54,0);
          let ynewinterstitialv = 0.0;
         right0 += `${right0.length + sentryA.length}`;
         debugG += `${(String.fromCharCode(78,0) == debugG ? debugG.length : parseInt(`${ynewinterstitialv}`))}`;
         mbnativeadvancedz = `${mbnativeadvancedz.length}`;
         ynewinterstitialv /= Math.max(3, parseFloat(`${debugG.length + parseInt(`${ynewinterstitialv}`)}`));
      }
      while (hongkongi || 5 < (scheduleq.size % 1)) {
         hongkongi = leftz.includes(`${hongkongi}`);
         break;
      }
       let verticalU = String.fromCharCode(99,111,108,95,48,95,53,54,0);
      whistleV *= 3;
      popupp += `${sportsp.length}`;
   if (4.22 == (mathl - cluby.length) && 2 == (3 + cluby.length)) {
      cluby = `${popupp.length}`;
   }
   let bannerN = String.fromCharCode(101,103,54,121,54,95,110,113,114,0) == splash_;
   do {
       let sentryN = false;
       let componentE = 5.0;
       let appsA: Array<any> = [536, 575];
       let animation5 = String.fromCharCode(102,99,102,115,95,119,95,49,49,0);
       let gray1: Array<any> = [129, 372, 55];
          let hooksG: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,115,95,50,95,51,53,0),740], [String.fromCharCode(107,95,54,53,95,102,97,116,101,0),521]]);
          let successz = 2.0;
          let completep = String.fromCharCode(97,112,112,108,101,95,56,95,52,55,0);
         componentE *= 1;
         hooksG = new Map([[`${hooksG.size}`, (String.fromCharCode(76,0) == completep ? hooksG.size : completep.length)]]);
         successz += parseInt(`${successz}`);
      if (componentE >= 4.65) {
          let dialogy = 0.0;
          let expiredi = String.fromCharCode(115,117,110,118,101,114,95,99,95,49,0);
          let untick3: Map<any, any> = new Map([[String.fromCharCode(119,101,98,95,122,95,56,49,0),82], [String.fromCharCode(115,101,110,116,101,110,99,101,95,118,95,55,54,0),338], [String.fromCharCode(112,95,49,48,95,112,114,111,102,105,108,101,115,0),113]]);
          let manifestR = 5;
         componentE /= Math.max(animation5.length, 4);
         dialogy += expiredi.length ^ 1;
         expiredi = `${expiredi.length >> (Math.min(3, Math.abs(parseInt(`${dialogy}`))))}`;
         untick3.set(`${dialogy}`, expiredi.length ^ 2);
         manifestR ^= untick3.size;
      }
       let hover5 = 4;
       let o_playery = 3;
          let bingW = String.fromCharCode(115,95,57,55,95,100,111,117,98,108,105,110,103,0);
          let viewsR = 1.0;
          let networkP = 1.0;
         sentryN = animation5 == String.fromCharCode(98,0) || 58 <= appsA.length;
         bingW += `${parseInt(`${networkP}`) ^ parseInt(`${viewsR}`)}`;
         viewsR += parseFloat(`${2 & parseInt(`${networkP}`)}`);
       let share1 = 4.0;
          let expiredy = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,103,95,49,49,0);
         sentryN = appsA.length <= 49;
         expiredy += `${1 - expiredy.length}`;
      for (let i = 0; i < 2; i++) {
         gray1.push(o_playery / (Math.max(parseInt(`${share1}`), 2)));
      }
      if ((share1 * 4.70) >= 2.5) {
         share1 -= parseFloat(`${3 ^ o_playery}`);
      }
      for (let d = 0; d < 1; d++) {
         sentryN = animation5.startsWith(`${o_playery}`);
      }
       let collectionB = String.fromCharCode(112,95,54,56,95,116,101,114,109,105,110,97,116,101,100,0);
         animation5 += `${gray1.length >> (Math.min(2, Math.abs(parseInt(`${share1}`))))}`;
      let shareZ = appsA.length <= 8668066;
      do {
         appsA = [collectionB.length];
         if (shareZ) {
            break;
         }
      } while (shareZ && ((appsA.length ^ collectionB.length) == 4));
          let downloadingb: Array<any> = [342, 370];
          let watchS = 5;
         sentryN = appsA.includes(componentE);
         downloadingb = [2];
         watchS |= downloadingb.length;
      if (2.27 < (componentE / (Math.max(share1, 10))) || (componentE / 2.27) < 4.9) {
         share1 /= Math.max(parseFloat(`${3}`), 5);
      }
      while (3 == (5 >> (Math.min(2, animation5.length))) || (gray1.length >> (Math.min(Math.abs(5), 3))) == 4) {
          let vietnamt: Array<any> = [732, 625, 178];
          let backT: Map<any, any> = new Map([[String.fromCharCode(114,115,116,110,95,57,95,53,55,0),String.fromCharCode(98,95,53,50,95,98,111,120,101,100,0)], [String.fromCharCode(106,95,49,54,95,112,114,111,100,117,99,101,0),String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,113,95,53,54,0)]]);
         animation5 += `${appsA.length << (Math.min(Math.abs(2), 1))}`;
         vietnamt = [backT.size];
         backT.set(`${vietnamt.length}`, backT.size * 3);
         break;
      }
      splash_ += `${(String.fromCharCode(85,0) == popupp ? popupp.length : (calendarn ? 4 : 3))}`;
      if (bannerN) {
         break;
      }
   } while (bannerN && (1 == popupp.length));
      whistleV *= cluby.length;
       let time_ldg = false;
       let promotionn = false;
       let animationK: Array<any> = [String.fromCharCode(120,95,52,53,95,101,120,112,101,99,116,0), String.fromCharCode(99,117,100,97,95,101,95,52,53,0)];
         promotionn = !promotionn;
         animationK = [animationK.length];
          let main_cO = false;
          let faviconh = 4;
          let internet3 = 1;
         promotionn = internet3 >= 72 || promotionn;
         main_cO = 24 > faviconh || main_cO;
         faviconh /= Math.max(((main_cO ? 5 : 1) / (Math.max(1, faviconh))), 5);
         internet3 |= faviconh;
      if (animationK.length < 3) {
          let castingw = 0.0;
         time_ldg = castingw == 68.94;
      }
      let hookZ = time_ldg ? !time_ldg : time_ldg;
      do {
          let mbnativeadvancedg = 1.0;
         time_ldg = (((time_ldg ? 30 : animationK.length) * animationK.length) > 30);
         mbnativeadvancedg += 2 & parseInt(`${mbnativeadvancedg}`);
         if (hookZ) {
            break;
         }
      } while ((promotionn || !time_ldg) && hookZ);
      while (!promotionn) {
         time_ldg = animationK.length >= 16 || time_ldg;
         break;
      }
      let hookZH = promotionn ? !promotionn : promotionn;
      do {
         promotionn = (!promotionn ? time_ldg : !promotionn);
         if (hookZH) {
            break;
         }
      } while (hookZH && (2 <= animationK.length || 3 <= (animationK.length + 2)));
         time_ldg = (51 >= ((!promotionn ? animationK.length : 51) >> (Math.min(animationK.length, 4))));
         animationK = [(animationK.length * (promotionn ? 4 : 3))];
      navigation5 = [cluby.length];
   for (let r = 0; r < 3; r++) {
      mappingl += "3";
   }

    setShowSliderThumbnail(!showSliderThumbnail);

       let logow: Map<any, any> = new Map([[String.fromCharCode(103,95,53,51,95,109,101,116,114,105,99,0),649], [String.fromCharCode(112,108,97,121,95,50,95,51,51,0),182], [String.fromCharCode(121,95,53,51,95,115,99,114,101,101,110,99,97,115,116,0),956]]);
       let entryw: Map<any, any> = new Map([[String.fromCharCode(102,95,57,51,95,98,110,104,101,120,0),691], [String.fromCharCode(97,116,111,102,95,111,95,53,55,0),195]]);
         entryw.set(`${entryw.size}`, entryw.size);
      if ((logow.size ^ 4) > 1) {
         logow = new Map([[`${entryw.size}`, 1 & logow.size]]);
      }
         logow = new Map([[`${logow.size}`, logow.size]]);
          let renewg = false;
          let megaphoneD = String.fromCharCode(111,95,54,51,95,112,111,105,110,116,99,98,98,0);
          let applicationA = 3.0;
         entryw = new Map([[`${logow.size}`, entryw.size]]);
         renewg = (23 < ((renewg ? 23 : megaphoneD.length) << (Math.min(megaphoneD.length, 1))));
         applicationA *= megaphoneD.length;
      while (entryw.size == 3) {
         entryw.set(`${entryw.size}`, logow.size - entryw.size);
         break;
      }
         logow.set(`${logow.size}`, logow.size);
      navigation5.push(whistleV % (Math.max(2, mappingl.length)));
       let private_2cG = 1.0;
       let minimizeP = String.fromCharCode(102,95,52,55,95,97,115,115,111,99,108,105,115,116,0);
      for (let y = 0; y < 3; y++) {
          let countryM = String.fromCharCode(104,95,50,48,95,117,110,101,120,112,101,99,116,101,100,0);
          let vietnamR = String.fromCharCode(105,110,111,100,101,115,95,108,95,52,49,0);
          let b_titlee = 2;
          let backgroundf = 0.0;
         private_2cG *= parseFloat(`${1}`);
         countryM = `${parseInt(`${backgroundf}`)}`;
         vietnamR += `${vietnamR.length}`;
         b_titlee >>= Math.min(4, Math.abs(vietnamR.length / 2));
         backgroundf /= Math.max(5, parseInt(`${backgroundf}`) / (Math.max(3, 2)));
      }
      while (minimizeP.startsWith(`${private_2cG}`)) {
         private_2cG += parseFloat(`${2}`);
         break;
      }
         minimizeP += `${parseInt(`${private_2cG}`)}`;
         private_2cG /= Math.max(3, parseFloat(`${minimizeP.length}`));
      if (minimizeP.length < 2) {
         private_2cG += parseFloat(`${1 - parseInt(`${private_2cG}`)}`);
      }
         private_2cG *= parseFloat(`${minimizeP.length >> (Math.min(Math.abs(2), 5))}`);
      whistleV ^= 2;
      mathl -= 3 + popupp.length;
      splash_ = `${cluby.length}`;
      whistleV += ((calendarn ? 3 : 1));
      whistleV <<= Math.min(Math.abs(1), 1);
      sportsp = `${splash_.length}`;
   while (cluby.length == navigation5.length) {
      navigation5.push((cluby.length | (calendarn ? 5 : 4)));
      break;
   }
   let arrowI = mathl <= 9000731.0;
   do {
       let chatu = String.fromCharCode(100,117,109,112,95,110,95,52,56,0);
       let vietnamm = 5.0;
          let quest9: Array<any> = [309, 440, 144];
          let descc = 5;
         vietnamm += parseFloat(`${parseInt(`${vietnamm}`) & chatu.length}`);
         quest9 = [descc >> (Math.min(quest9.length, 3))];
         descc += descc;
      while (chatu.startsWith(`${vietnamm}`)) {
          let mbnativeadvancedd = 3;
          let greyw = 2.0;
          let downloadD = String.fromCharCode(116,95,55,55,0);
         vietnamm *= parseFloat(`${downloadD.length << (Math.min(5, Math.abs(mbnativeadvancedd)))}`);
         mbnativeadvancedd <<= Math.min(5, Math.abs(parseInt(`${greyw}`) ^ parseInt(`${greyw}`)));
         break;
      }
         vietnamm += parseFloat(`${2 / (Math.max(1, parseInt(`${vietnamm}`)))}`);
         vietnamm *= parseFloat(`${parseInt(`${vietnamm}`)}`);
         chatu += `${chatu.length << (Math.min(5, Math.abs(parseInt(`${vietnamm}`))))}`;
         vietnamm += parseFloat(`${2 << (Math.min(4, chatu.length))}`);
      mathl += parseInt(`${mathl}`) >> (Math.min(Math.abs(1), 1));
      if (arrowI) {
         break;
      }
   } while (((mathl + 5.3) > 5.53) && arrowI);
      mappingl += `${(popupp == String.fromCharCode(80,0) ? popupp.length : cluby.length)}`;
    delayControls(!paused);

      popupp = `${sportsp.length}`;
   while ((1 * whistleV) <= 2) {
      whistleV += 1 - parseInt(`${groupL}`);
      break;
   }
   for (let i = 0; i < 1; i++) {
      navigation5 = [mappingl.length ^ 1];
   }
   while (mappingl.length >= navigation5.length) {
       let navigation8 = true;
       let fully = 0.0;
       let mbnativew = 2.0;
       let wind3 = String.fromCharCode(101,112,101,108,95,102,95,52,48,0);
       let hongkong6 = 0.0;
      for (let a = 0; a < 3; a++) {
         navigation8 = (fully - mbnativew) > 71.50;
      }
         mbnativew += parseInt(`${fully}`);
      for (let d = 0; d < 3; d++) {
          let playlistJ = 3;
          let gift5 = 0;
          let pressuree = 2;
          let builde = 4.0;
         wind3 += `${wind3.length % 2}`;
         playlistJ &= pressuree;
         gift5 += gift5 % 1;
         pressuree ^= gift5;
         builde *= parseInt(`${builde}`);
      }
      for (let a = 0; a < 3; a++) {
          let moonD = String.fromCharCode(109,111,99,107,95,112,95,55,53,0);
          let floatingZ = true;
          let giftg = 4.0;
         fully -= parseFloat(`${3 ^ parseInt(`${fully}`)}`);
         moonD = `${(moonD.length & (floatingZ ? 3 : 1))}`;
         floatingZ = !floatingZ || giftg <= 82.37;
         giftg *= parseInt(`${giftg}`) * 2;
      }
      for (let d = 0; d < 3; d++) {
         hongkong6 /= Math.max(3, parseFloat(`${parseInt(`${hongkong6}`) + 2}`));
      }
      while (4 >= (parseInt(`${fully}`) / (Math.max(wind3.length, 8))) || (fully / (Math.max(3.92, 4))) >= 1.81) {
          let nextg = String.fromCharCode(120,95,57,53,95,98,97,116,116,101,114,121,0);
         fully += parseFloat(`${parseInt(`${mbnativew}`) ^ 3}`);
         nextg = `${(nextg == String.fromCharCode(77,0) ? nextg.length : nextg.length)}`;
         break;
      }
         wind3 = "1";
         wind3 += `${1 << (Math.min(3, wind3.length))}`;
         mbnativew /= Math.max(((navigation8 ? 3 : 2) / (Math.max(parseInt(`${mbnativew}`), 7))), 5);
         hongkong6 *= parseFloat(`${parseInt(`${fully}`)}`);
      if (wind3.length < 2) {
         hongkong6 /= Math.max(5, (parseFloat(`${parseInt(`${mbnativew}`) >> (Math.min(3, Math.abs((navigation8 ? 2 : 1))))}`)));
      }
       let upgradeh = 2.0;
       let yelloww = 2.0;
       let hook3 = String.fromCharCode(111,95,50,95,100,99,115,116,114,0);
       let settingsv = String.fromCharCode(115,104,97,114,105,110,103,95,52,95,49,51,0);
       let fieldc = String.fromCharCode(104,101,97,100,114,111,111,109,95,98,95,54,53,0);
       let klevin9 = String.fromCharCode(100,95,55,95,116,108,117,116,0);
         fully -= parseFloat(`${parseInt(`${upgradeh}`)}`);
      mappingl = `${popupp.length - 2}`;
      break;
   }
   while (3 >= (popupp.length & 2) && (groupL / (Math.max(2, popupp.length))) >= 5.69) {
      popupp = `${((calendarn ? 5 : 3))}`;
      break;
   }
   for (let n = 0; n < 1; n++) {
      splash_ = `${parseInt(`${groupL}`)}`;
   }
   while ((1 & popupp.length) == 3 && (mathl * popupp.length) == 5.18) {
       let awayN = 0.0;
       let miniq = 4;
         awayN /= Math.max(2 + parseInt(`${awayN}`), 2);
       let serviceZ: Array<any> = [714, 51];
      let anytimeO = miniq <= 6820666;
      do {
         miniq -= 2 >> (Math.min(Math.abs(miniq), 5));
         if (anytimeO) {
            break;
         }
      } while ((5.66 == (5.44 - awayN) && (awayN - 5.44) == 2.41) && anytimeO);
         miniq += 3 | serviceZ.length;
          let dropdown5 = 4.0;
          let episode8 = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,52,95,50,50,0);
         miniq -= 3;
         dropdown5 *= parseFloat(`${episode8.length}`);
         episode8 += "2";
      while (5 == (1 - miniq)) {
         serviceZ.push(serviceZ.length);
         break;
      }
      mathl *= parseInt(`${mathl}`) + 1;
      break;
   }
       let core5 = 3.0;
       let skipN = 1.0;
      for (let e = 0; e < 2; e++) {
          let selecta = false;
          let matchesB = String.fromCharCode(120,95,54,51,95,115,116,97,116,105,111,110,97,114,105,116,121,0);
         skipN += (parseFloat(`${(selecta ? 3 : 4) >> (Math.min(Math.abs(parseInt(`${skipN}`)), 1))}`));
         selecta = matchesB == matchesB;
      }
      while ((1.90 / (Math.max(5, skipN))) == 1.77 && 1.90 == (skipN + core5)) {
         skipN *= parseFloat(`${3 * parseInt(`${skipN}`)}`);
         break;
      }
      let handlerL = 5726720.0 <= core5;
      do {
          let collectionV = String.fromCharCode(99,111,112,121,114,105,103,104,116,95,107,95,51,53,0);
          let editi = String.fromCharCode(97,98,105,95,100,95,50,53,0);
          let eactQ: Array<any> = [980, 151, 37];
          let changeu = 2;
         core5 -= parseInt(`${core5}`) & changeu;
         collectionV += `${editi.length + 3}`;
         editi = "3";
         eactQ = [collectionV.length | 2];
         changeu %= Math.max(4, 2 / (Math.max(3, eactQ.length)));
         if (handlerL) {
            break;
         }
      } while ((core5 <= 3.75) && handlerL);
      while (skipN <= 2.23) {
         core5 *= parseInt(`${core5}`) * 1;
         break;
      }
         skipN *= parseFloat(`${2}`);
      while (core5 > 3.12) {
         skipN *= parseFloat(`${parseInt(`${core5}`) - parseInt(`${skipN}`)}`);
         break;
      }
      popupp = `${sportsp.length >> (Math.min(Math.abs(1), 1))}`;
   for (let c = 0; c < 2; c++) {
      groupL *= 2 << (Math.min(5, navigation5.length));
   }
   if (3 > (4 | mappingl.length)) {
      mappingl += `${2 >> (Math.min(Math.abs(parseInt(`${mathl}`)), 1))}`;
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let usernamei = String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,107,95,52,51,0);
    let completeR: Map<any, any> = new Map([[String.fromCharCode(98,95,50,54,95,99,111,110,116,101,110,116,108,101,115,115,0),true ], [String.fromCharCode(119,95,52,49,95,113,122,98,105,110,0),true ], [String.fromCharCode(115,117,109,97,114,121,95,104,95,54,54,0),false ]]);
    let flyerh = 3.0;
    let feedbackQ = 2.0;
    let tickedo = 4.0;
    let tickV = String.fromCharCode(113,95,51,52,95,99,104,117,110,107,115,0);
    let delegate__w = 0.0;
    let submitC = String.fromCharCode(97,100,97,112,116,95,51,95,56,49,0);
    let huaweip: Map<any, any> = new Map([[String.fromCharCode(115,97,118,105,110,103,95,110,95,55,52,0),true ], [String.fromCharCode(97,95,52,56,95,106,115,116,114,105,110,103,0),false ], [String.fromCharCode(101,115,115,101,110,116,105,97,108,95,120,95,56,51,0),true ]]);
    let reactx = 1;
    let vnewinterstitialG = 4.0;
    let shareO: Map<any, any> = new Map([[String.fromCharCode(109,101,109,117,116,105,108,95,99,95,54,57,0),165], [String.fromCharCode(114,95,52,57,95,102,108,111,97,116,0),645]]);
    let switch_uO = 3.0;
    let tumbnaile = String.fromCharCode(97,100,114,109,95,51,95,55,48,0);
    let castS: Array<any> = [121, 377];
   let videojsq = submitC == String.fromCharCode(117,114,117,103,55,53,95,117,0);
   do {
      submitC = `${huaweip.size}`;
      if (videojsq) {
         break;
      }
   } while (videojsq && ((1 >> (Math.min(1, submitC.length))) > 1 && 5 > (1 << (Math.min(3, submitC.length)))));
   let fieldY = tickV.length >= 5746444;
   do {
      tickV = `${parseInt(`${vnewinterstitialG}`)}`;
      if (fieldY) {
         break;
      }
   } while ((2 >= (tickV.length << (Math.min(4, Math.abs(reactx)))) && 3 >= (tickV.length << (Math.min(Math.abs(2), 2)))) && fieldY);
   if (submitC == String.fromCharCode(87,0)) {
      usernamei = `${parseInt(`${delegate__w}`)}`;
   }
   let playlistO = delegate__w <= 9876589.0;
   do {
       let agreementc = 1.0;
         agreementc -= parseFloat(`${1}`);
         agreementc += parseFloat(`${1 & parseInt(`${agreementc}`)}`);
          let benefit3: Map<any, any> = new Map([[String.fromCharCode(100,95,57,51,95,102,105,108,108,101,114,0),388], [String.fromCharCode(120,95,53,56,95,99,97,110,99,101,108,101,100,0),341], [String.fromCharCode(102,97,99,116,111,114,121,95,98,95,51,50,0),704]]);
          let launch8 = 3.0;
          let register_bn: Array<any> = [350, 77, 140];
         agreementc *= parseFloat(`${benefit3.size}`);
         benefit3.set(`${launch8}`, parseInt(`${launch8}`));
         register_bn.push(register_bn.length);
      delegate__w += parseInt(`${tickedo}`) >> (Math.min(submitC.length, 4));
      if (playlistO) {
         break;
      }
   } while (((delegate__w / (Math.max(submitC.length, 2))) >= 5.59 || (submitC.length << (Math.min(Math.abs(3), 3))) >= 4) && playlistO);
   while ((huaweip.size | 2) == 5 && (3.94 + vnewinterstitialG) == 4.90) {
      vnewinterstitialG -= (parseFloat(`${String.fromCharCode(118,0) == submitC ? submitC.length : parseInt(`${flyerh}`)}`));
      break;
   }
   let zhengpiani = vnewinterstitialG >= 9612600.0;
   do {
       let googleF: Array<any> = [String.fromCharCode(121,95,54,57,95,102,97,115,116,116,101,115,116,0), String.fromCharCode(100,95,53,56,95,115,99,97,110,110,105,110,103,0), String.fromCharCode(115,95,57,56,95,102,111,114,103,111,116,0)];
      while ((googleF.length << (Math.min(Math.abs(3), 4))) <= 4) {
          let window_eb = String.fromCharCode(106,95,54,54,95,97,117,116,111,98,97,110,104,0);
          let stationsC = 2.0;
         googleF.push(window_eb.length & parseInt(`${stationsC}`));
         break;
      }
         googleF = [googleF.length >> (Math.min(Math.abs(1), 1))];
         googleF = [3 & googleF.length];
      vnewinterstitialG += parseFloat(`${reactx ^ parseInt(`${delegate__w}`)}`);
      if (zhengpiani) {
         break;
      }
   } while ((5.79 == vnewinterstitialG) && zhengpiani);
   let pointz = 7426594.0 >= flyerh;
   do {
      flyerh += parseFloat(`${huaweip.size}`);
      if (pointz) {
         break;
      }
   } while ((completeR.get(`${flyerh}`) != null) && pointz);
   let middleware3 = completeR.size >= 9366172;
   do {
       let backwardq = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,122,95,52,55,0);
       let logoq = String.fromCharCode(111,95,51,50,0);
       let schedulez = String.fromCharCode(118,109,110,99,95,98,95,51,50,0);
       let register_7ty = String.fromCharCode(108,111,103,111,117,116,95,108,95,49,48,0);
       let zhuboW = String.fromCharCode(116,105,99,107,115,95,55,95,49,48,0);
      for (let t = 0; t < 1; t++) {
          let thailandI = 0;
          let commentX = 4.0;
          let friendsv = true;
          let friendsQ = 3.0;
         backwardq = `${register_7ty.length}`;
         thailandI ^= thailandI * parseInt(`${commentX}`);
         commentX *= thailandI;
         friendsv = 85 <= thailandI;
         friendsQ /= Math.max(2, parseFloat(`${3 * parseInt(`${friendsQ}`)}`));
      }
         zhuboW = `${backwardq.length / (Math.max(schedulez.length, 1))}`;
         logoq += "1";
       let default__U: Map<any, any> = new Map([[String.fromCharCode(109,95,51,50,95,112,114,101,114,101,108,101,97,115,101,0),353], [String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,51,95,57,57,0),690]]);
      while (schedulez.length <= zhuboW.length) {
          let panglel: Map<any, any> = new Map([[String.fromCharCode(97,95,52,51,95,97,114,102,113,0),24], [String.fromCharCode(111,95,55,53,95,101,120,116,114,97,99,116,105,111,110,0),790], [String.fromCharCode(109,111,110,111,98,105,116,95,55,95,51,49,0),206]]);
          let mimom = 3;
          let alertV = 1.0;
          let downloaded0 = 5;
         schedulez = "1";
         panglel.set(`${downloaded0}`, 2);
         mimom -= mimom;
         alertV /= Math.max(5, parseFloat(`${parseInt(`${alertV}`) / 3}`));
         downloaded0 <<= Math.min(3, Math.abs(mimom - 2));
         break;
      }
       let albums = 5.0;
       let optionsc = 1.0;
      while (schedulez.length >= logoq.length) {
          let darkR = false;
          let firebaseX = 3;
          let d_positiona = String.fromCharCode(116,114,116,97,98,108,101,95,53,95,53,55,0);
          let overlayT: Array<any> = [String.fromCharCode(121,95,53,51,95,112,117,98,105,99,0), String.fromCharCode(107,95,57,56,95,98,111,114,100,101,114,108,101,115,115,0)];
          let specU = String.fromCharCode(113,95,54,49,95,115,116,114,105,99,109,112,0);
         logoq = `${2 % (Math.max(2, default__U.size))}`;
         darkR = (d_positiona.length ^ firebaseX) < 68;
         firebaseX ^= d_positiona.length & 3;
         overlayT.push(3 ^ d_positiona.length);
         specU = `${specU.length}`;
         break;
      }
          let minimize3 = 1.0;
          let collectionG = 3.0;
          let robotoY = String.fromCharCode(100,97,97,108,97,95,120,95,51,50,0);
         schedulez = `${2 + register_7ty.length}`;
         minimize3 /= Math.max(parseFloat(`${parseInt(`${collectionG}`)}`), 2);
         collectionG -= parseFloat(`${1 & robotoY.length}`);
         robotoY += `${robotoY.length % (Math.max(1, 1))}`;
       let splash2 = String.fromCharCode(102,95,49,52,95,102,105,114,101,0);
       let plays = String.fromCharCode(98,97,111,98,97,98,95,106,95,49,49,0);
         albums *= (parseFloat(`${String.fromCharCode(119,0) == logoq ? schedulez.length : logoq.length}`));
      for (let h = 0; h < 1; h++) {
         logoq += `${(String.fromCharCode(72,0) == register_7ty ? parseInt(`${optionsc}`) : register_7ty.length)}`;
      }
      while (plays.length <= backwardq.length) {
         plays = `${zhuboW.length}`;
         break;
      }
         plays = `${register_7ty.length}`;
          let trophyJ: Map<any, any> = new Map([[String.fromCharCode(102,109,116,99,111,110,118,101,114,116,95,109,95,55,52,0),73], [String.fromCharCode(115,101,114,118,105,99,101,95,102,95,56,49,0),621]]);
          let rulesh = 2.0;
         schedulez += `${3 >> (Math.min(3, Math.abs(default__U.size)))}`;
         trophyJ = new Map([[`${trophyJ.size}`, trophyJ.size - parseInt(`${rulesh}`)]]);
         rulesh /= Math.max(3, parseFloat(`${parseInt(`${rulesh}`) + trophyJ.size}`));
      if (zhuboW.includes(`${albums}`)) {
         zhuboW = `${1 & splash2.length}`;
      }
      completeR = new Map([[schedulez, (schedulez == String.fromCharCode(48,0) ? parseInt(`${feedbackQ}`) : schedulez.length)]]);
      if (middleware3) {
         break;
      }
   } while (middleware3 && ((3 & completeR.size) <= 2));
   if (2 > (completeR.size * submitC.length)) {
       let moduleE = false;
       let sports4 = false;
      for (let z = 0; z < 1; z++) {
          let crossx = 1.0;
          let shootR = true;
          let mappingL = 2.0;
         sports4 = sports4 || moduleE;
         crossx /= Math.max(parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${crossx}`)), 4))}`), 3);
         shootR = 46.61 <= crossx || !shootR;
         mappingL *= parseInt(`${mappingL}`) | 1;
      }
      if (!sports4) {
         moduleE = sports4;
      }
      while (!moduleE) {
         sports4 = (!moduleE ? !sports4 : moduleE);
         break;
      }
      for (let u = 0; u < 2; u++) {
         moduleE = !sports4;
      }
      while (moduleE) {
         moduleE = !moduleE || !sports4;
         break;
      }
       let bridgeZ = 4.0;
       let profile0 = 0.0;
      submitC = `${submitC.length}`;
   }
      shareO.set(`${reactx}`, 2);
       let predictionZ = String.fromCharCode(115,112,97,116,105,97,108,95,113,95,52,52,0);
       let membershipO = 2;
       let forwardY = String.fromCharCode(115,99,97,108,97,114,115,95,103,95,49,50,0);
      if ((1 << (Math.min(2, forwardY.length))) == 5 || (forwardY.length << (Math.min(Math.abs(1), 5))) == 4) {
          let xvod1 = 1;
          let historyI = String.fromCharCode(117,95,57,51,95,103,101,110,101,114,97,116,101,100,0);
          let connectionq: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,110,99,121,95,105,95,52,48,0),506], [String.fromCharCode(117,110,101,109,98,101,100,95,98,95,57,49,0),415], [String.fromCharCode(106,95,54,49,95,111,118,101,114,108,97,112,115,0),395]]);
         membershipO *= 1 - predictionZ.length;
         xvod1 *= connectionq.size;
         historyI = `${historyI.length & connectionq.size}`;
      }
         forwardY += "3";
      for (let d = 0; d < 1; d++) {
          let traminiY = String.fromCharCode(103,115,109,100,101,99,95,53,95,57,55,0);
         predictionZ = "1";
         traminiY += `${traminiY.length & 3}`;
      }
      for (let s = 0; s < 2; s++) {
         membershipO += 3;
      }
         membershipO -= 3 << (Math.min(3, Math.abs(membershipO)));
      let eactJ = 9129517 >= membershipO;
      do {
         membershipO |= 3 & membershipO;
         if (eactJ) {
            break;
         }
      } while (eactJ && ((forwardY.length / 2) == 1 || 2 == (forwardY.length / (Math.max(7, membershipO)))));
         membershipO /= Math.max(2, predictionZ.length / 2);
      for (let b = 0; b < 3; b++) {
          let inviter = 2;
         predictionZ = `${predictionZ.length}`;
         inviter -= inviter & 1;
      }
      for (let b = 0; b < 2; b++) {
          let analyticw = 3.0;
          let icon5 = 3;
         membershipO <<= Math.min(2, Math.abs(icon5 << (Math.min(forwardY.length, 4))));
         analyticw *= parseInt(`${analyticw}`) - 2;
         icon5 ^= 1 + parseInt(`${analyticw}`);
      }
      completeR = new Map([[submitC, parseInt(`${feedbackQ}`) << (Math.min(submitC.length, 5))]]);
   for (let c = 0; c < 3; c++) {
       let stepL: Map<any, any> = new Map([[String.fromCharCode(98,95,51,54,0),550], [String.fromCharCode(121,117,118,121,97,95,113,95,49,55,0),24]]);
       let usernameih = 2;
       let coreJ = false;
       let circleO = String.fromCharCode(114,95,52,51,95,114,97,100,98,0);
       let megaphoneq = 5;
         usernameih *= (String.fromCharCode(82,0) == circleO ? (coreJ ? 5 : 4) : circleO.length);
      for (let u = 0; u < 2; u++) {
         stepL.set(`${usernameih}`, usernameih);
      }
      for (let o = 0; o < 2; o++) {
         stepL = new Map([[`${stepL.size}`, 3]]);
      }
       let benefitM: Map<any, any> = new Map([[String.fromCharCode(114,102,102,116,105,95,51,95,57,51,0),178], [String.fromCharCode(116,95,51,54,95,109,111,118,101,112,97,103,101,0),738]]);
      while (2 > (stepL.size | megaphoneq) || (2 | stepL.size) > 1) {
         megaphoneq -= (1 << (Math.min(5, Math.abs((coreJ ? 5 : 5)))));
         break;
      }
      if (5 == benefitM.size) {
          let interstitialq: Array<any> = [String.fromCharCode(121,95,57,51,95,113,115,99,97,108,101,98,105,116,115,0), String.fromCharCode(114,95,55,51,0), String.fromCharCode(114,95,49,48,95,115,105,110,101,0)];
         benefitM = new Map([[`${interstitialq.length}`, interstitialq.length]]);
      }
      while (2 < circleO.length) {
         circleO += `${megaphoneq + circleO.length}`;
         break;
      }
      let launchm = stepL.size <= 8281660;
      do {
         stepL = new Map([[circleO, 1]]);
         if (launchm) {
            break;
         }
      } while ((5 > (stepL.size / (Math.max(6, benefitM.size))) || (benefitM.size / (Math.max(5, 5))) > 2) && launchm);
      while (Array.from(benefitM.keys()).includes(`${megaphoneq}`)) {
         megaphoneq |= 1 * usernameih;
         break;
      }
          let yingK = String.fromCharCode(106,95,51,48,95,97,115,99,0);
          let champion2 = String.fromCharCode(112,108,97,99,101,109,101,110,116,95,56,95,56,55,0);
          let megaphoneu = String.fromCharCode(114,101,109,105,110,100,101,114,115,95,119,95,51,54,0);
         coreJ = yingK.length < 13;
         yingK += `${3 | champion2.length}`;
         champion2 += `${megaphoneu.length}`;
         megaphoneu += `${champion2.length | megaphoneu.length}`;
      if (1 <= (megaphoneq + circleO.length)) {
         megaphoneq -= (circleO == String.fromCharCode(75,0) ? stepL.size : circleO.length);
      }
      while (3 <= (benefitM.size & 3)) {
          let renewZ = String.fromCharCode(97,95,56,51,95,109,105,108,108,105,115,0);
         megaphoneq |= stepL.size;
         renewZ = `${renewZ.length << (Math.min(Math.abs(3), 4))}`;
         break;
      }
      if (5 == (1 >> (Math.min(4, Math.abs(stepL.size)))) && (usernameih >> (Math.min(Math.abs(stepL.size), 2))) == 1) {
          let side2: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,109,95,56,57,0),201], [String.fromCharCode(117,110,99,97,99,104,101,100,95,105,95,55,56,0),337], [String.fromCharCode(104,119,97,101,115,95,51,95,55,48,0),624]]);
          let detailO = 0.0;
         usernameih >>= Math.min(Math.abs(3 - stepL.size), 2);
         side2 = new Map([[`${side2.size}`, 2]]);
         detailO *= parseInt(`${detailO}`) * side2.size;
      }
      if ((benefitM.size & megaphoneq) < 5 || 5 < (megaphoneq & benefitM.size)) {
          let bellL: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,99,104,97,110,103,101,95,111,95,52,57,0),731], [String.fromCharCode(108,95,54,48,95,111,98,115,101,114,118,101,0),232]]);
          let rewind4: Array<any> = [885, 706];
          let tempQ = String.fromCharCode(119,95,57,95,109,112,99,104,117,102,102,0);
          let indicatorB = String.fromCharCode(100,105,99,116,105,111,110,97,114,121,95,53,95,53,50,0);
          let dice3 = String.fromCharCode(117,110,105,116,115,95,108,95,49,54,0);
         benefitM.set(`${coreJ}`, 3);
         bellL.set(`${rewind4.length}`, 3 ^ bellL.size);
         rewind4.push(rewind4.length % 1);
         tempQ += `${rewind4.length >> (Math.min(Math.abs(1), 5))}`;
         indicatorB += `${(tempQ == String.fromCharCode(86,0) ? tempQ.length : indicatorB.length)}`;
         dice3 += `${tempQ.length}`;
      }
         benefitM.set(`${coreJ}`, ((coreJ ? 2 : 5) & 1));
      feedbackQ -= usernamei.length << (Math.min(Math.abs(2), 2));
   }
      huaweip.set(`${switch_uO}`, 1 % (Math.max(3, submitC.length)));
      feedbackQ -= (String.fromCharCode(73,0) == tickV ? parseInt(`${tickedo}`) : tickV.length);
   while ((3 + submitC.length) <= 3) {
      submitC += `${parseInt(`${delegate__w}`) % (Math.max(4, tickV.length))}`;
      break;
   }
      shareO = new Map([[`${delegate__w}`, parseInt(`${delegate__w}`) & usernamei.length]]);
   while ((completeR.size * tickedo) >= 5.64 || 1.74 >= (5.64 * tickedo)) {
      tickedo -= 3;
      break;
   }
   if ((flyerh + 5.99) >= 3.24) {
       let scheduleM: Array<any> = [730, 646, 204];
       let mbbanneru = false;
       let dangerh = String.fromCharCode(118,95,56,95,116,121,112,101,0);
       let catalogJ = String.fromCharCode(97,95,49,51,95,99,117,114,116,97,105,110,0);
       let singaporeZ = String.fromCharCode(112,116,104,114,101,97,100,95,118,95,49,56,0);
      while ((scheduleM.length - dangerh.length) > 3 && (scheduleM.length - 3) > 4) {
          let subsb = false;
          let clockZ = 2.0;
         dangerh += `${((subsb ? 3 : 3) % (Math.max(parseInt(`${clockZ}`), 10)))}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
         catalogJ = `${1 | catalogJ.length}`;
      }
         scheduleM.push(scheduleM.length);
         mbbanneru = catalogJ.startsWith(`${mbbanneru}`);
       let transfer1 = String.fromCharCode(115,95,52,57,95,112,105,99,107,108,112,102,0);
       let untickg = String.fromCharCode(113,95,57,95,109,105,103,114,97,116,105,110,103,0);
      while (!catalogJ.endsWith(`${scheduleM.length}`)) {
         catalogJ = `${singaporeZ.length}`;
         break;
      }
      while (5 > singaporeZ.length) {
          let windz = 4.0;
          let anythinkC = String.fromCharCode(105,95,55,57,95,105,115,119,104,105,116,101,115,112,97,99,101,0);
          let smallO = false;
          let dataw = 1.0;
          let kickP = String.fromCharCode(115,95,48,95,103,101,116,97,117,120,118,97,108,0);
         singaporeZ += `${transfer1.length * 3}`;
         windz /= Math.max(2, 1 - kickP.length);
         anythinkC += `${parseInt(`${windz}`)}`;
         smallO = anythinkC == String.fromCharCode(120,0);
         dataw += parseFloat(`${anythinkC.length}`);
         kickP += "3";
         break;
      }
      for (let k = 0; k < 2; k++) {
         catalogJ += `${dangerh.length}`;
      }
       let guideT = String.fromCharCode(102,95,57,54,95,120,98,105,110,0);
       let gift8 = String.fromCharCode(116,105,109,101,118,97,108,95,122,95,55,0);
      let main_hm = String.fromCharCode(100,103,110,111,119,0) == transfer1;
      do {
         transfer1 = `${3 % (Math.max(3, untickg.length))}`;
         if (main_hm) {
            break;
         }
      } while ((untickg.includes(transfer1)) && main_hm);
      let expando = dangerh.length <= 6490257;
      do {
          let bufferH = 4.0;
          let confirmationX = String.fromCharCode(100,95,57,50,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0);
          let window_6m = String.fromCharCode(101,95,53,54,95,99,101,114,116,105,102,105,99,97,116,101,0);
          let selectionk = String.fromCharCode(105,95,52,52,95,112,97,99,107,97,103,101,115,0);
          let downloadedl = String.fromCharCode(109,117,108,116,105,101,110,100,95,122,95,50,56,0);
         dangerh = `${window_6m.length % (Math.max(8, untickg.length))}`;
         bufferH -= parseFloat(`${downloadedl.length}`);
         confirmationX += `${confirmationX.length / (Math.max(1, 4))}`;
         window_6m = `${parseInt(`${bufferH}`) % (Math.max(confirmationX.length, 8))}`;
         selectionk += "2";
         downloadedl += `${selectionk.length}`;
         if (expando) {
            break;
         }
      } while ((catalogJ.length == 4) && expando);
      for (let o = 0; o < 1; o++) {
          let const_12 = 4;
          let ajaxG = 5.0;
          let backgroundW = String.fromCharCode(101,95,56,56,95,103,101,116,115,111,99,107,111,112,116,0);
          let emojiI = 1.0;
         transfer1 = `${singaporeZ.length * dangerh.length}`;
         const_12 %= Math.max(5, 2);
         ajaxG /= Math.max((parseFloat(`${backgroundW == String.fromCharCode(117,0) ? parseInt(`${emojiI}`) : backgroundW.length}`)), 1);
         emojiI -= parseInt(`${emojiI}`) & parseInt(`${ajaxG}`);
      }
      for (let n = 0; n < 2; n++) {
         catalogJ = "1";
      }
      if (catalogJ.startsWith(singaporeZ)) {
          let whatsappN = String.fromCharCode(101,120,112,108,111,114,101,114,95,113,95,54,49,0);
         catalogJ = "2";
         whatsappN += `${3 ^ whatsappN.length}`;
      }
      for (let j = 0; j < 3; j++) {
          let megaphonet = String.fromCharCode(115,95,48,95,115,104,97,114,112,101,110,0);
         mbbanneru = transfer1.length <= megaphonet.length;
      }
      flyerh *= parseFloat(`${parseInt(`${tickedo}`)}`);
   }
      switch_uO *= 1 << (Math.min(Math.abs(parseInt(`${flyerh}`)), 5));
   while ((vnewinterstitialG * parseFloat(`${shareO.size}`)) == 3.73) {
      vnewinterstitialG += parseFloat(`${usernamei.length & 1}`);
      break;
   }
   for (let z = 0; z < 1; z++) {
      delegate__w /= Math.max((tickV == String.fromCharCode(57,0) ? parseInt(`${delegate__w}`) : tickV.length), 1);
   }
   if (1 == huaweip.size) {
       let stringX = String.fromCharCode(103,108,107,95,122,95,56,49,0);
       let pingH = String.fromCharCode(115,112,101,99,116,114,97,108,95,122,95,51,54,0);
       let floaterr = String.fromCharCode(102,99,116,108,95,57,95,50,0);
       let commonI = 5.0;
       let mimoq = String.fromCharCode(104,95,51,56,95,105,109,112,111,114,116,101,100,0);
      if (stringX.startsWith(`${floaterr.length}`)) {
         stringX = `${floaterr.length | parseInt(`${commonI}`)}`;
      }
       let googleM: Map<any, any> = new Map([[String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,121,95,56,52,0),827], [String.fromCharCode(97,105,116,101,114,95,55,95,49,57,0),989], [String.fromCharCode(107,95,52,48,95,100,105,118,105,100,101,110,100,0),242]]);
       let dataO: Map<any, any> = new Map([[String.fromCharCode(98,117,99,107,101,116,95,104,95,49,56,0),985], [String.fromCharCode(99,95,53,48,95,100,101,116,101,99,116,105,111,110,0),191]]);
      if (pingH.length > mimoq.length) {
         mimoq = `${1 >> (Math.min(4, floaterr.length))}`;
      }
      let networkt = 6729285 >= googleM.size;
      do {
          let dycreatorI: Map<any, any> = new Map([[String.fromCharCode(99,95,51,53,95,109,111,118,101,110,99,0),560], [String.fromCharCode(109,105,100,95,101,95,56,49,0),225], [String.fromCharCode(100,101,115,116,111,114,121,95,111,95,55,56,0),312]]);
          let analyticsv = String.fromCharCode(115,95,49,95,112,117,116,0);
          let areaP = String.fromCharCode(111,114,100,101,114,116,121,112,101,95,51,95,54,49,0);
          let profilev = 1;
          let aboutu: Array<any> = [710, 88];
         googleM = new Map([[`${aboutu.length}`, pingH.length % 2]]);
         dycreatorI.set(`${analyticsv}`, dycreatorI.size % (Math.max(analyticsv.length, 4)));
         areaP += `${dycreatorI.size / (Math.max(3, 3))}`;
         profilev *= areaP.length & 1;
         aboutu = [3 >> (Math.min(5, Math.abs(profilev)))];
         if (networkt) {
            break;
         }
      } while (networkt && (googleM.get(`${dataO.size}`) == null));
      if (4 <= (2 - pingH.length)) {
          let statst = String.fromCharCode(117,95,53,53,95,115,101,99,111,110,100,0);
         dataO = new Map([[`${commonI}`, parseInt(`${commonI}`)]]);
         statst = `${statst.length}`;
      }
          let faviconq = 1;
          let turnH: Map<any, any> = new Map([[String.fromCharCode(97,97,97,97,95,116,95,49,55,0),String.fromCharCode(108,95,49,55,95,115,117,98,115,101,103,109,101,110,116,0)], [String.fromCharCode(113,95,57,51,95,112,101,110,100,105,110,103,0),String.fromCharCode(121,95,53,48,95,116,102,100,116,0)]]);
          let show3 = String.fromCharCode(112,95,49,51,95,115,119,114,101,115,97,109,112,108,101,0);
         floaterr += `${faviconq}`;
         faviconq |= 1 + turnH.size;
         turnH = new Map([[`${turnH.size}`, 1]]);
         show3 += "1";
         googleM.set(mimoq, 2);
          let private_g4d = 0.0;
         pingH = `${1 & parseInt(`${private_g4d}`)}`;
         mimoq += `${parseInt(`${commonI}`)}`;
       let rewindj = String.fromCharCode(99,111,110,115,117,109,101,95,104,95,50,48,0);
      if (1 < (4 & mimoq.length)) {
          let fullA = String.fromCharCode(100,97,115,104,101,115,95,113,95,50,54,0);
          let middlewareQ = 3.0;
          let whatsapps = false;
         googleM = new Map([[`${googleM.size}`, googleM.size]]);
         fullA += `${(String.fromCharCode(82,0) == fullA ? fullA.length : parseInt(`${middlewareQ}`))}`;
         middlewareQ -= fullA.length;
         whatsapps = !whatsapps;
      }
          let calendarO: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,95,120,95,57,49,0),141], [String.fromCharCode(106,95,53,54,95,115,101,115,115,105,111,110,105,100,0),415]]);
         dataO.set(pingH, 2 >> (Math.min(2, Math.abs(parseInt(`${commonI}`)))));
         calendarO = new Map([[`${calendarO.size}`, 3 / (Math.max(1, calendarO.size))]]);
          let filter0 = String.fromCharCode(113,95,57,54,95,119,97,116,99,104,105,110,103,0);
          let langkeyo = String.fromCharCode(119,95,50,49,95,100,105,97,103,110,111,115,116,105,99,0);
          let videojsp: Array<any> = [198, 693, 6];
         dataO = new Map([[`${googleM.size}`, googleM.size & videojsp.length]]);
         filter0 = "2";
         langkeyo += `${langkeyo.length | 1}`;
         videojsp.push(filter0.length / (Math.max(2, langkeyo.length)));
      if (!floaterr.startsWith(`${dataO.size}`)) {
         dataO.set(`${mimoq}`, mimoq.length);
      }
      if (rewindj.length >= dataO.size) {
         dataO.set(mimoq, 3 ^ rewindj.length);
      }
      usernamei = `${shareO.size | 3}`;
   }
      tickV += `${usernamei.length}`;
   if ((2 >> (Math.min(5, tickV.length))) < 4 || 2 < (parseInt(`${feedbackQ}`) * tickV.length)) {
       let desch = 2.0;
       let toponJ = 4.0;
         desch *= parseInt(`${toponJ}`);
         toponJ -= parseFloat(`${1 / (Math.max(parseInt(`${toponJ}`), 1))}`);
         toponJ += parseFloat(`${parseInt(`${desch}`) << (Math.min(4, Math.abs(parseInt(`${toponJ}`))))}`);
      if ((5.8 + toponJ) > 3.10 && (5.8 + desch) > 3.59) {
         toponJ /= Math.max(5, parseFloat(`${parseInt(`${desch}`)}`));
      }
          let topont = 1;
         toponJ *= parseFloat(`${parseInt(`${desch}`)}`);
         topont %= Math.max(topont * topont, 5);
      let internetk = desch <= 6738968.0;
      do {
          let targetE: Array<any> = [String.fromCharCode(105,100,108,105,115,116,95,116,95,51,49,0), String.fromCharCode(110,99,104,117,110,107,95,120,95,57,48,0)];
          let middleC = 4;
          let utilsA = true;
         desch *= (1 % (Math.max(5, (utilsA ? 3 : 2))));
         targetE = [targetE.length];
         middleC &= targetE.length;
         utilsA = targetE.includes(middleC);
         if (internetk) {
            break;
         }
      } while (internetk && ((desch - 1.38) >= 2.44));
      feedbackQ /= Math.max(huaweip.size << (Math.min(tickV.length, 4)), 4);
   }
       let package_05 = 3.0;
       let submitJ = String.fromCharCode(121,95,51,51,95,98,97,114,101,0);
       let ballH = String.fromCharCode(121,95,49,50,95,102,114,97,109,101,114,0);
      while ((parseInt(`${package_05}`) / (Math.max(submitJ.length, 6))) == 5 || 2.28 == (package_05 / 4.66)) {
         package_05 *= parseFloat(`${3 << (Math.min(3, Math.abs(parseInt(`${package_05}`))))}`);
         break;
      }
      while (submitJ != String.fromCharCode(111,0)) {
         ballH += `${2 & ballH.length}`;
         break;
      }
      while ((package_05 + 5.34) > 4.10) {
         package_05 -= parseFloat(`${1}`);
         break;
      }
          let selectedG = 2;
         submitJ += `${submitJ.length & 2}`;
         selectedG &= selectedG;
      while (submitJ != ballH) {
          let orientation1 = String.fromCharCode(98,95,54,51,95,104,97,108,102,0);
          let kickC = false;
          let kickE = 5;
          let otherB = String.fromCharCode(103,95,55,51,95,100,98,108,112,0);
         ballH += `${parseInt(`${package_05}`)}`;
         orientation1 += `${1 % (Math.max(7, otherB.length))}`;
         kickC = 16 >= orientation1.length;
         kickE >>= Math.min(1, Math.abs(1 << (Math.min(2, orientation1.length))));
         otherB += "2";
         break;
      }
      for (let m = 0; m < 3; m++) {
         package_05 /= Math.max(1, parseFloat(`${1 % (Math.max(3, submitJ.length))}`));
      }
      while (submitJ != String.fromCharCode(48,0) || 4 > ballH.length) {
         submitJ += `${submitJ.length}`;
         break;
      }
         package_05 += parseFloat(`${2}`);
      for (let o = 0; o < 3; o++) {
         submitJ = `${1 & submitJ.length}`;
      }
      reactx &= 2 | parseInt(`${delegate__w}`);
      feedbackQ *= 1 ^ castS.length;

    onHandleFullScreen();
  };

  const goBack = () => {
       let sharec: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,95,113,95,52,54,0),59], [String.fromCharCode(107,102,109,111,100,101,115,95,115,95,50,56,0),761]]);
    let sound8: Array<any> = [382, 196, 704];
    let eventW = String.fromCharCode(100,105,115,97,98,108,101,95,106,95,48,0);
    let auto_15X: Array<any> = [String.fromCharCode(101,114,114,108,111,103,95,116,95,51,53,0), String.fromCharCode(115,101,99,95,99,95,49,57,0), String.fromCharCode(98,95,51,49,95,113,109,105,110,109,97,120,0)];
    let placeholderx = 5.0;
    let umengX = true;
    let enewsM: Map<any, any> = new Map([[String.fromCharCode(108,101,103,97,99,121,95,52,95,51,53,0),String.fromCharCode(100,95,55,53,0)], [String.fromCharCode(101,109,109,105,110,116,114,105,110,95,56,95,57,50,0),String.fromCharCode(99,108,97,105,109,101,100,95,53,95,56,0)], [String.fromCharCode(99,111,110,116,101,120,116,99,111,110,102,105,103,95,122,95,56,48,0),String.fromCharCode(121,95,51,48,0)]]);
    let calendarS = 5.0;
    let shareL: Array<any> = [String.fromCharCode(100,98,108,113,117,111,116,101,95,113,95,55,51,0), String.fromCharCode(119,101,98,99,97,109,95,102,95,49,53,0), String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,95,110,95,52,48,0)];
    let successt = String.fromCharCode(114,95,49,48,95,112,108,97,121,0);
    let lightw = 0;
    let questd = 5;
    let indexM = String.fromCharCode(102,95,56,50,95,102,116,115,105,115,115,112,97,99,101,0);
    let downloadingq = false;
    let stepW = 1;
    let orientatione = String.fromCharCode(98,111,114,105,110,103,115,115,108,95,113,95,52,52,0);
       let umengn = 5.0;
       let sliderW = 4;
       let form2 = String.fromCharCode(119,101,105,103,104,116,120,95,105,95,56,56,0);
          let forwardP = true;
         sliderW ^= 3 ^ parseInt(`${umengn}`);
         forwardP = !forwardP;
          let shirtS: Array<any> = [65, 855];
          let rankd = false;
         form2 += `${shirtS.length * sliderW}`;
         shirtS.push(((rankd ? 3 : 3) / 1));
         umengn /= Math.max(form2.length - sliderW, 4);
          let dropdownS = 3.0;
          let kuaishouO = 5;
         form2 = `${(form2 == String.fromCharCode(88,0) ? sliderW : form2.length)}`;
         dropdownS -= parseInt(`${dropdownS}`);
         kuaishouO ^= kuaishouO & 2;
      while ((form2.length >> (Math.min(1, Math.abs(sliderW)))) > 3 || 1 > (sliderW >> (Math.min(Math.abs(3), 4)))) {
         form2 += `${form2.length}`;
         break;
      }
      shareL.push(parseInt(`${placeholderx}`));
   let gpayO = 8514305 >= auto_15X.length;
   do {
       let auto_ja = String.fromCharCode(122,95,50,53,95,105,110,116,101,114,102,114,97,109,101,0);
       let actionP = String.fromCharCode(103,101,116,120,118,97,114,95,101,95,54,55,0);
         auto_ja += `${actionP.length}`;
          let filedX = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,52,95,56,50,0);
          let target5: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,119,101,98,109,101,110,99,0),239], [String.fromCharCode(108,97,117,110,99,104,105,110,103,95,108,95,56,48,0),666]]);
          let private_mhf = 2.0;
         actionP = `${3 - actionP.length}`;
         filedX += `${filedX.length}`;
         target5 = new Map([[`${private_mhf}`, parseInt(`${private_mhf}`) & 1]]);
      let thailandM = 9567786 >= actionP.length;
      do {
         actionP = `${(String.fromCharCode(82,0) == actionP ? actionP.length : auto_ja.length)}`;
         if (thailandM) {
            break;
         }
      } while ((auto_ja.length >= actionP.length) && thailandM);
       let tickedD = 3;
       let cornerk = 4;
         actionP = `${3 | actionP.length}`;
       let downloaderP = String.fromCharCode(107,95,52,51,95,98,101,99,97,109,101,0);
       let holderA = String.fromCharCode(103,98,114,97,112,95,110,95,51,57,0);
      auto_15X.push(sound8.length >> (Math.min(auto_15X.length, 5)));
      if (gpayO) {
         break;
      }
   } while (((1 % (Math.max(7, questd))) < 1) && gpayO);
      sound8 = [shareL.length];
      placeholderx /= Math.max(3 >> (Math.min(2, auto_15X.length)), 2);
   let greyu = sound8.length >= 9783737;
   do {
       let anner9 = 3;
       let entry6 = 4;
       let m_image3 = 4;
       let sigmobU = String.fromCharCode(121,117,121,116,111,121,118,95,106,95,54,55,0);
       let relatedb = String.fromCharCode(105,95,57,55,95,105,110,102,105,110,105,116,121,0);
         anner9 %= Math.max(2 ^ relatedb.length, 3);
       let downloadingu = 0.0;
          let playF = 5.0;
          let typings: Array<any> = [1, 501];
          let c_imageP = String.fromCharCode(112,97,114,116,105,99,108,101,95,103,95,50,54,0);
         m_image3 %= Math.max(anner9, 4);
         playF += parseFloat(`${parseInt(`${playF}`) >> (Math.min(typings.length, 1))}`);
         typings = [typings.length & 1];
         c_imageP += `${2 & c_imageP.length}`;
         entry6 |= 3;
          let default_8Y = String.fromCharCode(116,95,55,53,95,115,97,102,101,0);
          let wnewsR = String.fromCharCode(115,95,54,48,95,115,105,110,0);
          let emojiL = false;
         m_image3 %= Math.max(1, anner9);
         default_8Y += `${(1 << (Math.min(5, Math.abs((emojiL ? 5 : 1)))))}`;
         wnewsR = `${default_8Y.length >> (Math.min(3, wnewsR.length))}`;
         emojiL = (88 <= (default_8Y.length << (Math.min(5, Math.abs((!emojiL ? default_8Y.length : 88))))));
          let gemfileG = 2.0;
          let mbbannerQ = String.fromCharCode(102,105,110,100,95,118,95,50,53,0);
         sigmobU += `${mbbannerQ.length}`;
         gemfileG *= 3;
         mbbannerQ = `${parseInt(`${gemfileG}`) + parseInt(`${gemfileG}`)}`;
         entry6 ^= 2 * anner9;
         anner9 /= Math.max(3, 2);
      while (1 < anner9) {
         anner9 -= relatedb.length;
         break;
      }
      let string5 = 5583605 <= entry6;
      do {
         entry6 += parseInt(`${downloadingu}`) ^ 2;
         if (string5) {
            break;
         }
      } while (((relatedb.length * 1) >= 3) && string5);
          let footballR = 0.0;
          let tick6 = 5.0;
         entry6 |= relatedb.length;
         footballR *= parseFloat(`${parseInt(`${tick6}`)}`);
         tick6 -= parseInt(`${tick6}`) - parseInt(`${footballR}`);
      while (entry6 >= anner9) {
         entry6 <<= Math.min(2, Math.abs(1));
         break;
      }
         relatedb = `${sigmobU.length}`;
       let edit1 = false;
      let stationsl = edit1 ? !edit1 : edit1;
      do {
          let tooltipsQ = 0;
          let reducerp = 0;
          let moonw = String.fromCharCode(104,101,120,99,104,97,114,105,110,116,95,108,95,55,48,0);
          let controlsO = String.fromCharCode(112,114,101,114,111,108,108,95,100,95,57,52,0);
          let handlerE = String.fromCharCode(108,95,53,53,95,119,101,108,108,98,101,104,97,118,101,100,0);
         edit1 = handlerE.length > 57;
         tooltipsQ &= tooltipsQ;
         reducerp *= tooltipsQ;
         moonw += `${(moonw == String.fromCharCode(79,0) ? controlsO.length : moonw.length)}`;
         controlsO = `${reducerp << (Math.min(Math.abs(2), 4))}`;
         handlerE += `${tooltipsQ * moonw.length}`;
         if (stationsl) {
            break;
         }
      } while ((sigmobU.length <= 2) && stationsl);
      sound8 = [anner9];
      if (greyu) {
         break;
      }
   } while (greyu && (sound8.length == 3));
   let usernameG = 8190982 >= lightw;
   do {
       let infob: Array<any> = [255, 140, 443];
       let gesturesd: Map<any, any> = new Map([[String.fromCharCode(97,114,101,110,97,115,95,104,95,55,50,0),String.fromCharCode(113,95,50,57,0)], [String.fromCharCode(101,95,49,52,95,114,97,110,100,111,109,110,101,115,115,0),String.fromCharCode(111,99,116,101,116,95,110,95,50,53,0)], [String.fromCharCode(119,95,51,51,95,112,108,97,99,101,115,0),String.fromCharCode(115,113,108,99,105,112,104,101,114,95,102,95,56,48,0)]]);
      if (Array.from(gesturesd.keys()).includes(`${infob.length}`)) {
         infob.push(3 | gesturesd.size);
      }
      let telegramP = gesturesd.size <= 5321165;
      do {
         gesturesd.set(`${infob.length}`, gesturesd.size % (Math.max(infob.length, 9)));
         if (telegramP) {
            break;
         }
      } while ((!Array.from(gesturesd.values()).includes(infob.length)) && telegramP);
      for (let n = 0; n < 1; n++) {
         infob = [infob.length];
      }
      while (infob.length < 3) {
         gesturesd.set(`${infob.length}`, infob.length / 1);
         break;
      }
         gesturesd = new Map([[`${gesturesd.size}`, gesturesd.size]]);
      if (!Array.from(gesturesd.keys()).includes(`${infob.length}`)) {
         infob = [2 + infob.length];
      }
      lightw >>= Math.min(Math.abs(sound8.length + parseInt(`${placeholderx}`)), 1);
      if (usernameG) {
         break;
      }
   } while ((enewsM.get(`${lightw}`) != null) && usernameG);
   if ((parseInt(`${calendarS}`) / (Math.max(1, lightw))) > 2 || 2 > (2 & lightw)) {
      lightw /= Math.max(3, lightw);
   }
      enewsM = new Map([[`${enewsM.size}`, parseInt(`${calendarS}`)]]);
   while (!umengX) {
      umengX = lightw >= 42;
      break;
   }
   if ((eventW.length / (Math.max(4, 9))) > 2 && (enewsM.size / (Math.max(eventW.length, 7))) > 4) {
      enewsM.set(`${umengX}`, ((umengX ? 4 : 3) - questd));
   }
       let favoritey = String.fromCharCode(114,95,50,56,95,103,97,109,101,115,0);
       let flyerH = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,95,119,95,52,57,0);
       let iconT = String.fromCharCode(98,101,116,119,101,101,110,95,108,95,53,0);
      for (let n = 0; n < 1; n++) {
         iconT += `${favoritey.length}`;
      }
      let completeb = iconT == String.fromCharCode(95,109,48,118,99,98,120,122,108,55,0);
      do {
         iconT += `${iconT.length}`;
         if (completeb) {
            break;
         }
      } while ((iconT.startsWith(favoritey)) && completeb);
       let d_centerc: Map<any, any> = new Map([[String.fromCharCode(114,95,51,57,95,114,101,102,114,101,115,104,0),21], [String.fromCharCode(110,95,50,54,95,119,105,100,103,101,116,0),363], [String.fromCharCode(110,95,54,55,95,116,114,117,115,116,0),764]]);
       let info9: Map<any, any> = new Map([[String.fromCharCode(111,95,55,57,95,97,116,111,105,0),978], [String.fromCharCode(108,97,121,101,114,115,95,48,95,52,56,0),375]]);
      if ((4 | d_centerc.size) <= 5) {
         favoritey = `${(String.fromCharCode(80,0) == flyerH ? info9.size : flyerH.length)}`;
      }
      if (!flyerH.includes(`${iconT.length}`)) {
         flyerH += `${3 & iconT.length}`;
      }
         flyerH += `${favoritey.length << (Math.min(Math.abs(1), 5))}`;
         d_centerc.set(iconT, iconT.length);
      if (flyerH.includes(`${d_centerc.size}`)) {
          let incidentI: Array<any> = [310, 846];
          let chart6 = 3;
          let firebaseR = 2.0;
          let type_wf = String.fromCharCode(104,109,109,116,95,110,95,57,52,0);
         d_centerc.set(type_wf, (String.fromCharCode(111,0) == type_wf ? info9.size : type_wf.length));
         incidentI = [1 ^ chart6];
         chart6 *= chart6 - 2;
         firebaseR -= parseFloat(`${chart6}`);
      }
      while (2 >= (d_centerc.size / (Math.max(4, 10)))) {
         flyerH += `${(String.fromCharCode(66,0) == favoritey ? favoritey.length : d_centerc.size)}`;
         break;
      }
      questd /= Math.max(1, parseInt(`${placeholderx}`));
   if ((lightw % 5) > 1 || 5 > (lightw % 5)) {
       let disconnectedE = 2;
         disconnectedE /= Math.max(1, 4);
         disconnectedE %= Math.max(3, disconnectedE << (Math.min(Math.abs(1), 4)));
         disconnectedE -= disconnectedE + disconnectedE;
      sound8 = [(eventW == String.fromCharCode(119,0) ? eventW.length : parseInt(`${calendarS}`))];
   }
      shareL.push(3);
      enewsM.set(successt, ((umengX ? 5 : 5) << (Math.min(Math.abs(2), 1))));
       let mathx: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,48,95,118,99,100,115,112,0),559], [String.fromCharCode(121,95,49,52,95,105,110,105,116,101,110,99,0),198]]);
      if (!Array.from(mathx.values()).includes(mathx.size)) {
         mathx.set(`${mathx.size}`, 3);
      }
         mathx.set(`${mathx.size}`, mathx.size ^ mathx.size);
      if (2 == (mathx.size & mathx.size) && 4 == (2 & mathx.size)) {
         mathx.set(`${mathx.size}`, mathx.size);
      }
      indexM = `${mathx.size | 1}`;

    delayControls();

   if (indexM.length > sound8.length) {
       let adultv = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,117,95,52,57,0);
       let taiwanT = String.fromCharCode(114,101,115,105,108,105,101,110,99,101,95,99,95,52,50,0);
      for (let a = 0; a < 3; a++) {
         taiwanT = "2";
      }
      while (!taiwanT.startsWith(`${adultv.length}`)) {
          let whatsappd = String.fromCharCode(99,95,54,54,95,97,110,105,109,97,116,105,111,110,0);
          let agreementM = String.fromCharCode(115,116,114,105,110,103,105,102,121,95,115,95,51,51,0);
          let showd = 4.0;
          let uploadJ = 3.0;
         adultv = `${parseInt(`${uploadJ}`) % 3}`;
         whatsappd = `${agreementM.length}`;
         agreementM = `${whatsappd.length}`;
         showd += parseFloat(`${2 ^ parseInt(`${showd}`)}`);
         uploadJ *= (parseFloat(`${String.fromCharCode(90,0) == agreementM ? parseInt(`${showd}`) : agreementM.length}`));
         break;
      }
         adultv += `${taiwanT.length >> (Math.min(2, adultv.length))}`;
      for (let l = 0; l < 1; l++) {
         taiwanT = "3";
      }
          let castj = true;
          let holderZ = String.fromCharCode(107,95,50,56,95,111,110,101,115,99,97,108,101,0);
         adultv += `${holderZ.length / 1}`;
         castj = castj || castj;
         holderZ += "1";
         adultv += `${taiwanT.length << (Math.min(Math.abs(3), 1))}`;
      indexM += `${eventW.length}`;
   }
   if (umengX) {
      umengX = lightw <= sharec.size;
   }
      sound8.push(((downloadingq ? 2 : 3)));
   let internet1 = successt.length <= 8890581;
   do {
       let downloadingl: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,115,95,119,95,53,57,0),true ], [String.fromCharCode(114,101,106,101,99,116,101,100,95,56,95,55,55,0),true ]]);
       let routerA: Array<any> = [273, 527];
       let dangerM = String.fromCharCode(119,95,57,50,95,99,111,108,111,110,115,0);
       let grayg = String.fromCharCode(120,95,53,56,95,116,105,108,105,110,103,0);
       let styleb = String.fromCharCode(106,95,50,50,95,98,97,115,101,0);
       let commonr = true;
         downloadingl.set(grayg, 3 + grayg.length);
         downloadingl.set(styleb, 1 & styleb.length);
      let loadingO = routerA.length <= 9618788;
      do {
          let thumbnaily = String.fromCharCode(117,115,101,115,95,117,95,54,50,0);
          let userH = true;
         routerA.push(3);
         thumbnaily += `${thumbnaily.length | 2}`;
         userH = thumbnaily.startsWith(`${userH}`);
         if (loadingO) {
            break;
         }
      } while ((4 > grayg.length) && loadingO);
      if (4 >= grayg.length) {
         grayg += `${styleb.length | routerA.length}`;
      }
      for (let g = 0; g < 2; g++) {
         commonr = 17 <= routerA.length;
      }
          let search0 = String.fromCharCode(104,95,55,56,95,112,111,108,108,101,100,0);
         dangerM += `${2 << (Math.min(3, Math.abs(downloadingl.size)))}`;
         search0 += "3";
         grayg = `${downloadingl.size}`;
      let materiali = styleb == String.fromCharCode(95,121,100,104,115,108,112,0);
      do {
          let white6 = String.fromCharCode(97,99,116,117,97,108,95,120,95,57,48,0);
          let googlel: Map<any, any> = new Map([[String.fromCharCode(114,101,112,114,101,112,97,114,101,95,56,95,54,48,0),549], [String.fromCharCode(121,95,51,50,95,112,97,114,0),999], [String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,102,95,55,53,0),471]]);
          let containerI = String.fromCharCode(106,95,50,51,95,97,117,116,111,99,111,114,114,0);
          let shrinky = String.fromCharCode(109,95,56,51,95,109,111,116,105,111,110,115,101,97,114,99,104,0);
          let bannerM: Array<any> = [65, 518, 982];
         styleb = `${2 - bannerM.length}`;
         white6 = `${shrinky.length}`;
         googlel = new Map([[containerI, containerI.length]]);
         shrinky += `${shrinky.length}`;
         bannerM.push((String.fromCharCode(97,0) == containerI ? containerI.length : white6.length));
         if (materiali) {
            break;
         }
      } while (((downloadingl.size << (Math.min(styleb.length, 3))) == 3) && materiali);
      let tickq = dangerM == String.fromCharCode(97,57,111,56,0);
      do {
         dangerM += `${1 & downloadingl.size}`;
         if (tickq) {
            break;
         }
      } while (tickq && ((1 & dangerM.length) > 3));
         styleb = `${1 * grayg.length}`;
       let pangleC = String.fromCharCode(112,111,115,116,112,111,110,101,100,95,104,95,50,56,0);
      if (3 >= (routerA.length ^ dangerM.length) && 3 >= (routerA.length ^ dangerM.length)) {
         routerA = [(String.fromCharCode(85,0) == pangleC ? (commonr ? 4 : 5) : pangleC.length)];
      }
         routerA = [(String.fromCharCode(79,0) == pangleC ? downloadingl.size : pangleC.length)];
       let downloader0 = 1.0;
      successt += `${lightw + 3}`;
      if (internet1) {
         break;
      }
   } while ((2 == (4 | successt.length) || 4 == (lightw | successt.length)) && internet1);
      eventW = `${((umengX ? 4 : 4) >> (Math.min(sound8.length, 1)))}`;
       let select9 = 3.0;
       let promotioni = String.fromCharCode(117,95,54,55,95,109,117,108,116,105,115,116,101,112,0);
       let goal7 = 4.0;
          let untickv = 4.0;
          let spinnerO = 0.0;
         promotioni = `${parseInt(`${select9}`) & 1}`;
         untickv += parseFloat(`${parseInt(`${spinnerO}`)}`);
         select9 /= Math.max(parseFloat(`${3}`), 1);
         goal7 /= Math.max(parseInt(`${goal7}`) * 3, 5);
      let submitH = select9 <= 5468055.0;
      do {
         select9 *= parseFloat(`${parseInt(`${select9}`) * 2}`);
         if (submitH) {
            break;
         }
      } while ((2.85 > (select9 * 2.92) || 2.32 > (2.92 * select9)) && submitH);
         select9 -= parseFloat(`${3}`);
         promotioni = `${promotioni.length + 1}`;
      while ((goal7 / 4.34) == 1.41) {
         promotioni += `${promotioni.length - 1}`;
         break;
      }
         promotioni += `${parseInt(`${select9}`) + promotioni.length}`;
      let teamp = 6129036.0 >= goal7;
      do {
         goal7 *= 2;
         if (teamp) {
            break;
         }
      } while (teamp && (3 >= (5 & promotioni.length)));
      umengX = placeholderx == 96.2;
   for (let r = 0; r < 1; r++) {
      sharec = new Map([[`${enewsM.size}`, enewsM.size]]);
   }
   let flyerT = downloadingq ? !downloadingq : downloadingq;
   do {
       let canvash = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,98,95,51,56,0);
       let zhengpianq = 1.0;
       let sendO: Array<any> = [976, 426];
       let moreL: Array<any> = [819, 25];
       let huaweiL = 3.0;
      let redirectL = 9363755 >= moreL.length;
      do {
         moreL = [parseInt(`${huaweiL}`) / (Math.max(parseInt(`${zhengpianq}`), 5))];
         if (redirectL) {
            break;
         }
      } while (((zhengpianq / 5.27) == 4.62 || 5.27 == (zhengpianq / (Math.max(6, moreL.length)))) && redirectL);
       let hongkongu = String.fromCharCode(99,95,53,95,116,105,110,116,101,100,0);
       let mbbannerK = String.fromCharCode(106,95,56,48,95,115,99,104,109,0);
          let indicatorB = 1;
          let turnS = String.fromCharCode(102,97,99,116,95,107,95,53,51,0);
         huaweiL *= parseFloat(`${2 + moreL.length}`);
         indicatorB >>= Math.min(Math.abs(turnS.length << (Math.min(4, Math.abs(indicatorB)))), 3);
         turnS += `${turnS.length}`;
         zhengpianq += 3 & parseInt(`${zhengpianq}`);
      while (canvash.length > 5) {
         mbbannerK = `${2 << (Math.min(4, hongkongu.length))}`;
         break;
      }
      if (1 >= (sendO.length | 5) || 1 >= (5 | sendO.length)) {
          let forwardu = String.fromCharCode(105,110,99,114,98,108,111,98,95,56,95,54,48,0);
         sendO.push(canvash.length / 1);
         forwardu = `${forwardu.length}`;
      }
      for (let v = 0; v < 1; v++) {
         hongkongu += `${1 & sendO.length}`;
      }
      for (let p = 0; p < 3; p++) {
          let short_h5 = String.fromCharCode(98,95,57,49,0);
          let modeC: Map<any, any> = new Map([[String.fromCharCode(100,95,56,95,116,119,105,108,105,103,104,116,0),463], [String.fromCharCode(116,104,114,101,115,95,122,95,54,48,0),34]]);
          let gradleK = String.fromCharCode(110,95,57,95,110,97,116,105,111,110,97,108,0);
          let episodes4: Array<any> = [471, 733];
          let langkeyS = 1.0;
         huaweiL -= parseFloat(`${1}`);
         short_h5 = `${episodes4.length % (Math.max(1, 5))}`;
         modeC = new Map([[`${modeC.size}`, modeC.size]]);
         gradleK += `${1 / (Math.max(7, short_h5.length))}`;
         episodes4.push(short_h5.length << (Math.min(Math.abs(3), 3)));
         langkeyS -= (parseFloat(`${String.fromCharCode(97,0) == gradleK ? gradleK.length : parseInt(`${langkeyS}`)}`));
      }
       let benefitK = 3;
       let crownz = 3;
         canvash += `${moreL.length / (Math.max(sendO.length, 9))}`;
      if ((2 ^ sendO.length) > 5 || 4 > (2 ^ moreL.length)) {
         sendO.push(benefitK);
      }
          let launcherk = 0.0;
          let n_lockI = 4.0;
         sendO = [1];
         launcherk /= Math.max(4, parseInt(`${n_lockI}`));
         n_lockI += parseInt(`${n_lockI}`) | parseInt(`${launcherk}`);
      if (!moreL.includes(zhengpianq)) {
         zhengpianq += 1;
      }
          let termsI = String.fromCharCode(104,95,53,51,95,100,101,108,111,99,97,116,101,0);
          let navigationk = String.fromCharCode(119,114,105,116,101,105,110,105,116,95,102,95,52,57,0);
          let closeg: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,112,114,105,110,116,95,54,95,57,51,0),String.fromCharCode(97,103,97,105,110,95,53,95,49,49,0)], [String.fromCharCode(120,95,52,49,95,99,97,116,101,103,111,114,105,101,115,0),String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,95,52,95,57,53,0)], [String.fromCharCode(100,95,55,51,95,100,101,115,116,114,111,121,105,110,103,0),String.fromCharCode(109,99,111,114,101,95,102,95,52,51,0)]]);
         zhengpianq *= 1 << (Math.min(4, Math.abs(closeg.size)));
         termsI = `${(termsI == String.fromCharCode(110,0) ? navigationk.length : termsI.length)}`;
         navigationk = `${(String.fromCharCode(89,0) == termsI ? navigationk.length : termsI.length)}`;
         closeg = new Map([[navigationk, navigationk.length]]);
          let showw: Map<any, any> = new Map([[String.fromCharCode(102,95,56,48,95,119,111,114,100,108,101,110,0),false ], [String.fromCharCode(112,95,49,57,95,105,112,109,111,118,105,101,0),true ], [String.fromCharCode(117,95,53,56,95,112,114,111,102,114,101,115,115,0),false ]]);
          let moonh = String.fromCharCode(100,95,55,53,95,101,120,112,101,114,116,0);
         huaweiL -= parseFloat(`${moreL.length >> (Math.min(3, Math.abs(benefitK)))}`);
         showw.set(`${moonh}`, moonh.length);
      downloadingq = !umengX || !downloadingq;
      if (flyerT) {
         break;
      }
   } while (flyerT && (1 == (sharec.size - 3)));
   let clockX = shareL.length <= 7278605;
   do {
      shareL = [2];
      if (clockX) {
         break;
      }
   } while (clockX && (2 < (enewsM.size + shareL.length)));
      eventW = `${shareL.length | 1}`;
   if (umengX || 2 <= (3 * sharec.size)) {
       let episodesr = 0.0;
       let viewse = String.fromCharCode(109,111,114,112,104,101,100,95,110,95,54,56,0);
       let gradlewb = 0;
       let spinnerZ = String.fromCharCode(98,95,51,55,95,114,101,100,101,109,112,116,105,111,110,0);
       let reminder2 = 4;
       let episodesH = String.fromCharCode(102,97,120,99,111,109,112,114,95,111,95,56,55,0);
       let rewardvideos = String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,56,95,54,54,0);
      if (3 < (parseInt(`${episodesr}`) / (Math.max(viewse.length, 5))) || (3 | viewse.length) < 2) {
          let controlX = 5.0;
          let libcrashsdkS: Array<any> = [989, 88, 24];
          let borderless0 = 3;
         episodesr -= 2;
         controlX /= Math.max(borderless0, 3);
         libcrashsdkS = [borderless0 & 3];
      }
      for (let c = 0; c < 2; c++) {
          let buildl = String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,49,95,57,55,0);
          let pathN = String.fromCharCode(111,95,49,52,95,115,116,114,101,97,109,115,0);
         episodesr -= buildl.length;
         buildl += `${pathN.length % (Math.max(pathN.length, 4))}`;
      }
         viewse = `${(episodesH == String.fromCharCode(56,0) ? gradlewb : episodesH.length)}`;
         episodesH += `${parseInt(`${episodesr}`)}`;
          let fileC = 5.0;
         reminder2 -= rewardvideos.length;
         fileC /= Math.max(1, parseFloat(`${parseInt(`${fileC}`) % (Math.max(parseInt(`${fileC}`), 10))}`));
      for (let f = 0; f < 3; f++) {
         episodesr += 3;
      }
      while (episodesH != viewse) {
          let flipperA: Array<any> = [132, 7];
          let philippinese = true;
          let toponx = 0.0;
          let expiredZ = String.fromCharCode(118,108,99,115,95,55,95,52,49,0);
         viewse += `${viewse.length & 2}`;
         flipperA.push((1 + (philippinese ? 1 : 2)));
         philippinese = 37 < expiredZ.length;
         toponx += parseFloat(`${flipperA.length ^ 3}`);
         expiredZ = `${3 + parseInt(`${toponx}`)}`;
         break;
      }
       let reducere = String.fromCharCode(105,115,115,117,101,95,104,95,53,50,0);
      if ((viewse.length & 3) <= 3 || (gradlewb & viewse.length) <= 3) {
         viewse = `${episodesH.length | 1}`;
      }
         gradlewb |= 2;
         reminder2 >>= Math.min(Math.abs(parseInt(`${episodesr}`) | gradlewb), 2);
      if (rewardvideos.startsWith(`${episodesH.length}`)) {
          let acceptedx = true;
         rewardvideos += `${2 * viewse.length}`;
         acceptedx = (!acceptedx ? !acceptedx : acceptedx);
      }
      if (4.86 < episodesr) {
          let large8 = 1.0;
          let privacyy: Array<any> = [String.fromCharCode(114,101,102,112,108,97,110,101,95,106,95,53,51,0), String.fromCharCode(116,122,102,105,108,101,95,52,95,55,48,0)];
          let crossc = String.fromCharCode(119,95,52,50,95,119,105,100,103,101,116,0);
          let relatedba = true;
         reminder2 /= Math.max(crossc.length, 1);
         large8 *= parseFloat(`${2}`);
         privacyy.push(1 >> (Math.min(5, privacyy.length)));
         crossc += `${2 - parseInt(`${large8}`)}`;
         relatedba = !relatedba;
      }
      if (rewardvideos.startsWith(reducere)) {
         rewardvideos = `${episodesH.length / (Math.max(7, reducere.length))}`;
      }
      sharec.set(`${questd}`, 3 << (Math.min(Math.abs(questd), 5)));
   }
   let greenk = umengX ? !umengX : umengX;
   do {
      umengX = eventW.length < lightw;
      if (greenk) {
         break;
      }
   } while ((3 == enewsM.size) && greenk);
   while (auto_15X.length < 2) {
       let subsy = String.fromCharCode(115,95,49,57,95,97,114,103,118,0);
       let taiwanx = false;
       let corner6 = 1.0;
         corner6 *= (parseFloat(`${parseInt(`${corner6}`) % (Math.max(10, (taiwanx ? 1 : 5)))}`));
      let singaporez = 5413651 <= subsy.length;
      do {
         subsy += `${(parseInt(`${corner6}`) - (taiwanx ? 5 : 5))}`;
         if (singaporez) {
            break;
         }
      } while (singaporez && ((5.50 * corner6) <= 4.100 && 5 <= (subsy.length % (Math.max(2, 9)))));
       let alertM = 5.0;
      for (let t = 0; t < 3; t++) {
          let hongkongn = 5.0;
         taiwanx = 85.3 == alertM;
         hongkongn *= 1;
      }
      let twitterv = subsy.length >= 6011340;
      do {
          let connectionZ = false;
         subsy = `${((taiwanx ? 1 : 2) & (connectionZ ? 3 : 5))}`;
         if (twitterv) {
            break;
         }
      } while ((subsy.length > 1) && twitterv);
         taiwanx = !taiwanx;
         subsy += `${(parseInt(`${corner6}`) + (taiwanx ? 1 : 3))}`;
         corner6 -= parseFloat(`${parseInt(`${corner6}`) & 1}`);
          let club1: Array<any> = [836, 595];
         alertM *= 2 & parseInt(`${corner6}`);
         club1 = [3 | club1.length];
      questd %= Math.max(2, auto_15X.length % (Math.max(10, parseInt(`${calendarS}`))));
      break;
   }
      indexM += "1";
   if ((sound8.length * 2) < 5 && 2 < (sharec.size * sound8.length)) {
      sharec.set(`${placeholderx}`, 2 ^ parseInt(`${placeholderx}`));
   }
    onHandleGoBack();
  };

  const changePlaybackRate = (rate: number) => {
    setShowSlider('none');
    onPlaybackRateChange(rate);
    delayControls(false);
  }

  useImperativeHandle(ref, () => ({
    toggleControls: () => {
      if (showControls) {
        setShowControls(false);
      } else {
        setShowSlider('none');
        setShowControls(true);
        delayControls();
      }
    },
    hideControls: () => {
      clearHidingDelay();
      setShowControls(false);
    },
    showControls: () => {
      setShowControls(true);
      delayControls();
    },
    isVisible: showControls,
    hideSlider: () => {
      setShowSlider('none')
    },
    isLocked: isLocked,
    toggleLock: () => {
      setIsLocked(!isLocked)
    }
  }))

  const changeControlsState = () => {
       let kuaishouJ = String.fromCharCode(119,95,51,53,95,115,112,97,114,107,115,0);
    let customi = String.fromCharCode(113,95,52,50,95,122,101,114,111,0);
    let manifestm = String.fromCharCode(108,97,115,116,109,98,117,102,95,121,95,55,57,0);
    let injuryb = 2.0;
    let mintegralV = 4.0;
    let paged = 4.0;
    let annerO = String.fromCharCode(109,111,122,97,114,116,95,111,95,56,0);
    let icon1 = String.fromCharCode(115,95,53,53,95,105,102,111,114,119,97,114,100,0);
    let connectionP = 4;
    let circleb = 4.0;
    let white7 = 3.0;
    let trophyY = 5.0;
    let actionsq: Array<any> = [String.fromCharCode(97,95,51,51,95,99,111,112,121,118,0), String.fromCharCode(118,95,50,95,99,111,108,111,114,115,0)];
      customi = `${(String.fromCharCode(53,0) == manifestm ? parseInt(`${injuryb}`) : manifestm.length)}`;
      injuryb *= (parseFloat(`${String.fromCharCode(85,0) == customi ? customi.length : parseInt(`${white7}`)}`));
       let submitI = 1;
       let guidel = String.fromCharCode(101,95,53,56,95,115,97,102,97,114,121,0);
       let shoot7 = String.fromCharCode(114,101,97,115,111,110,95,105,95,49,48,48,0);
       let downp = String.fromCharCode(111,110,115,101,116,95,114,95,51,51,0);
      while (!guidel.includes(`${submitI}`)) {
         guidel += `${(guidel == String.fromCharCode(103,0) ? guidel.length : shoot7.length)}`;
         break;
      }
         downp = `${(String.fromCharCode(121,0) == downp ? downp.length : shoot7.length)}`;
         guidel = `${downp.length}`;
      let yingd = 5027638 <= submitI;
      do {
         submitI ^= guidel.length;
         if (yingd) {
            break;
         }
      } while ((submitI == shoot7.length) && yingd);
      if (shoot7.endsWith(guidel)) {
         guidel = `${guidel.length}`;
      }
      injuryb /= Math.max(parseFloat(`${connectionP & 1}`), 2);
   for (let d = 0; d < 1; d++) {
      circleb /= Math.max(2, parseInt(`${mintegralV}`) | parseInt(`${circleb}`));
   }
      injuryb -= parseFloat(`${annerO.length / 2}`);
   for (let p = 0; p < 2; p++) {
      white7 /= Math.max(parseFloat(`${3 + manifestm.length}`), 2);
   }
   let zoomb = 7991097 >= kuaishouJ.length;
   do {
       let utilsw: Array<any> = [174, 96];
       let gemfiley = String.fromCharCode(114,101,113,117,101,115,116,95,55,95,55,0);
       let orientationy: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,109,97,100,101,98,121,0),466], [String.fromCharCode(106,95,57,54,95,111,119,110,101,114,115,0),192]]);
       let mbbannerX = String.fromCharCode(111,95,52,50,95,105,110,116,101,114,110,101,116,0);
       let star_ = String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,105,95,52,0);
      if (mbbannerX != star_) {
          let clockG: Array<any> = [820, 158];
          let blacklistA = String.fromCharCode(115,116,114,114,101,115,101,116,95,98,95,53,52,0);
          let clubU = String.fromCharCode(116,109,112,95,49,95,52,51,0);
          let modityh = 1.0;
          let private_s4 = String.fromCharCode(121,95,52,56,95,116,109,99,100,0);
         star_ += "3";
         clockG.push(clubU.length);
         blacklistA = `${blacklistA.length ^ 1}`;
         clubU += `${2 - parseInt(`${modityh}`)}`;
         modityh /= Math.max(3 / (Math.max(parseInt(`${modityh}`), 2)), 1);
         private_s4 += `${parseInt(`${modityh}`)}`;
      }
      while (4 == (5 + star_.length)) {
         star_ = `${(String.fromCharCode(52,0) == star_ ? star_.length : mbbannerX.length)}`;
         break;
      }
      let zoomA = 5743623 <= orientationy.size;
      do {
         orientationy = new Map([[mbbannerX, gemfiley.length | 1]]);
         if (zoomA) {
            break;
         }
      } while ((!Array.from(orientationy.values()).includes(utilsw.length)) && zoomA);
          let themen = String.fromCharCode(116,105,116,108,101,115,95,51,95,56,50,0);
          let sigmobH = 3;
          let comment_ = String.fromCharCode(114,101,117,112,108,111,97,100,95,97,95,49,48,0);
         mbbannerX += `${mbbannerX.length | orientationy.size}`;
         themen += `${sigmobH << (Math.min(Math.abs(3), 5))}`;
         sigmobH -= sigmobH;
         comment_ = `${sigmobH}`;
      for (let a = 0; a < 1; a++) {
          let styleQ = true;
          let sharedX = false;
          let ajax3 = String.fromCharCode(99,95,53,56,95,114,101,102,108,101,99,116,111,114,0);
          let materialm = 2;
          let megaphoned = String.fromCharCode(97,108,112,104,97,108,101,115,115,95,97,95,52,52,0);
         mbbannerX = `${orientationy.size - 3}`;
         styleQ = !styleQ || megaphoned.length <= 93;
         sharedX = String.fromCharCode(74,0) == ajax3 && 34 >= materialm;
         ajax3 = "3";
         materialm |= megaphoned.length + 2;
      }
         mbbannerX = "2";
          let bodana = String.fromCharCode(111,95,57,57,95,116,101,115,116,111,114,105,103,0);
          let auto_yC: Array<any> = [296, 64, 911];
          let catalogq = 5.0;
         orientationy = new Map([[`${auto_yC.length}`, 1 ^ star_.length]]);
         bodana += `${2 >> (Math.min(2, Math.abs(parseInt(`${catalogq}`))))}`;
         auto_yC = [bodana.length];
         catalogq *= parseFloat(`${parseInt(`${catalogq}`) & 2}`);
      while (mbbannerX.length > gemfiley.length) {
         gemfiley += "2";
         break;
      }
          let analyticsW = true;
          let pause8 = 0;
         utilsw.push(3 - pause8);
         analyticsW = (!analyticsW ? !analyticsW : !analyticsW);
         pause8 *= 3;
      let spinner0 = mbbannerX == String.fromCharCode(102,52,52,104,97,0);
      do {
         mbbannerX = `${utilsw.length | orientationy.size}`;
         if (spinner0) {
            break;
         }
      } while (((5 + mbbannerX.length) == 3) && spinner0);
         gemfiley += `${utilsw.length}`;
      while (4 > utilsw.length) {
         star_ = "3";
         break;
      }
       let auto_onE = String.fromCharCode(108,95,56,57,95,114,111,108,101,0);
       let mintegralP = String.fromCharCode(116,95,56,56,95,97,116,116,114,105,98,117,116,105,111,110,0);
      if (mintegralP.length <= gemfiley.length) {
         gemfiley = `${(mintegralP == String.fromCharCode(82,0) ? mintegralP.length : mbbannerX.length)}`;
      }
         mbbannerX += `${mbbannerX.length % 2}`;
      kuaishouJ += `${icon1.length}`;
      if (zoomb) {
         break;
      }
   } while (zoomb && (kuaishouJ.endsWith(annerO)));
      circleb /= Math.max(5, 1 << (Math.min(1, annerO.length)));
   while (injuryb == 3.84) {
      manifestm += `${parseInt(`${injuryb}`)}`;
      break;
   }
   if (!annerO.includes(`${injuryb}`)) {
      annerO += `${(String.fromCharCode(104,0) == kuaishouJ ? kuaishouJ.length : manifestm.length)}`;
   }
   for (let f = 0; f < 2; f++) {
       let connectionb = String.fromCharCode(111,95,53,50,95,97,99,100,101,99,0);
          let megaphone0 = false;
         connectionb = `${connectionb.length % 2}`;
      if (connectionb.endsWith(`${connectionb.length}`)) {
         connectionb += `${connectionb.length ^ 2}`;
      }
      if (connectionb.startsWith(`${connectionb.length}`)) {
         connectionb += `${2 * connectionb.length}`;
      }
      connectionP &= 1;
   }
   while ((white7 + 4.52) == 5.40) {
      connectionP %= Math.max(parseInt(`${paged}`), 4);
      break;
   }
      injuryb += parseFloat(`${parseInt(`${circleb}`) * icon1.length}`);
   let feedbackz = paged <= 8469757.0;
   do {
      paged += parseFloat(`${parseInt(`${white7}`) << (Math.min(annerO.length, 5))}`);
      if (feedbackz) {
         break;
      }
   } while ((manifestm.endsWith(`${paged}`)) && feedbackz);
      kuaishouJ = `${annerO.length}`;
      annerO += "1";
   let package_9d = 9111275.0 >= injuryb;
   do {
      injuryb *= parseFloat(`${2}`);
      if (package_9d) {
         break;
      }
   } while ((5.57 < (injuryb * parseFloat(`${kuaishouJ.length}`)) || (4 / (Math.max(9, kuaishouJ.length))) < 3) && package_9d);

    setShowControls(!showControls);

   let mcopy_ipj = kuaishouJ == String.fromCharCode(95,98,99,0);
   do {
       let activityQ = 1.0;
      for (let k = 0; k < 3; k++) {
          let otherE = String.fromCharCode(102,97,99,116,95,100,95,51,50,0);
          let edits = String.fromCharCode(100,95,52,49,95,109,97,120,105,109,117,109,0);
         activityQ += parseFloat(`${parseInt(`${activityQ}`) * edits.length}`);
         otherE = `${otherE.length - otherE.length}`;
         edits += `${(String.fromCharCode(53,0) == otherE ? otherE.length : otherE.length)}`;
      }
      if (2.63 >= (activityQ + 3.86) || (activityQ + activityQ) >= 3.86) {
         activityQ += parseFloat(`${parseInt(`${activityQ}`)}`);
      }
          let faviconE = String.fromCharCode(108,95,52,50,95,115,104,97,114,101,0);
         activityQ *= parseFloat(`${1}`);
         faviconE = `${faviconE.length}`;
      kuaishouJ += `${connectionP * 2}`;
      if (mcopy_ipj) {
         break;
      }
   } while ((kuaishouJ.includes(`${circleb}`)) && mcopy_ipj);
   if (customi.endsWith(`${injuryb}`)) {
       let renew4 = 0;
       let const_9ky: Array<any> = [182, 642, 815];
       let linkM = true;
       let hejia = String.fromCharCode(98,101,120,116,95,106,95,52,49,0);
      while (!const_9ky.includes(renew4)) {
          let arrowI = 0.0;
          let starW = 4.0;
          let selectionk = 5;
         const_9ky = [1];
         arrowI -= parseInt(`${starW}`) << (Math.min(Math.abs(parseInt(`${arrowI}`)), 5));
         starW -= selectionk - 1;
         selectionk += 3;
         break;
      }
      while (hejia.endsWith(`${const_9ky.length}`)) {
          let androidE = String.fromCharCode(113,117,97,110,116,115,95,54,95,52,50,0);
          let modal1 = String.fromCharCode(105,115,109,101,109,115,101,116,95,100,95,51,54,0);
         const_9ky = [(modal1 == String.fromCharCode(66,0) ? modal1.length : renew4)];
         androidE += `${androidE.length}`;
         break;
      }
         hejia += `${1 * const_9ky.length}`;
         const_9ky = [3];
         linkM = hejia == String.fromCharCode(111,0);
      while ((1 % (Math.max(9, renew4))) >= 4 && !linkM) {
         renew4 &= const_9ky.length * 1;
         break;
      }
      for (let m = 0; m < 3; m++) {
          let mbjscommonY = 3;
          let match1: Map<any, any> = new Map([[String.fromCharCode(114,101,110,111,114,109,95,102,95,54,0),String.fromCharCode(116,104,114,101,97,100,109,101,115,115,97,103,101,95,102,95,52,48,0)], [String.fromCharCode(109,95,55,95,97,117,116,111,100,101,116,101,99,116,111,114,0),String.fromCharCode(98,95,57,95,112,115,115,104,0)]]);
          let headeri = 1;
          let lines = 4;
         const_9ky = [match1.size];
         mbjscommonY ^= headeri & 2;
         match1 = new Map([[`${mbjscommonY}`, 1 | lines]]);
         headeri &= lines * headeri;
      }
      let fileP = linkM ? !linkM : linkM;
      do {
          let catagoryg = 4.0;
          let sliderT = 1.0;
          let type_tZ = 4.0;
          let fullh = 2.0;
         linkM = (sliderT + type_tZ) == 10.40;
         catagoryg *= parseFloat(`${parseInt(`${fullh}`)}`);
         sliderT -= parseFloat(`${parseInt(`${catagoryg}`)}`);
         type_tZ /= Math.max(parseInt(`${catagoryg}`) + parseInt(`${fullh}`), 5);
         if (fileP) {
            break;
         }
      } while (fileP && (!linkM && 2 >= hejia.length));
      if (hejia.endsWith(`${linkM}`)) {
          let pagination7 = 5;
          let singleV: Map<any, any> = new Map([[String.fromCharCode(108,95,57,95,108,97,98,101,108,110,115,0),967], [String.fromCharCode(114,95,52,50,95,114,101,100,97,99,116,0),608]]);
          let dangerp: Map<any, any> = new Map([[String.fromCharCode(112,101,110,99,105,108,95,119,95,55,57,0),false ], [String.fromCharCode(109,95,52,51,95,97,99,116,105,111,110,115,0),false ], [String.fromCharCode(102,95,50,55,95,114,116,112,112,114,111,116,111,0),true ]]);
         linkM = const_9ky.includes(linkM);
         pagination7 <<= Math.min(1, Math.abs(pagination7 * 2));
         singleV = new Map([[`${dangerp.size}`, 1 * dangerp.size]]);
      }
          let b_unlockm = false;
          let fastO = 3.0;
          let routero = 0.0;
         hejia += "2";
         b_unlockm = !b_unlockm && fastO > 86.19;
         fastO += parseFloat(`${parseInt(`${routero}`)}`);
         routero -= ((b_unlockm ? 4 : 2) ^ parseInt(`${fastO}`));
      while (1 == (const_9ky.length & 5) || 5 == (5 & const_9ky.length)) {
         renew4 |= const_9ky.length;
         break;
      }
         renew4 -= renew4;
      injuryb *= parseFloat(`${2}`);
   }
      white7 *= parseFloat(`${parseInt(`${injuryb}`)}`);
       let package_qu = String.fromCharCode(105,110,115,101,116,95,121,95,57,51,0);
         package_qu = `${2 | package_qu.length}`;
      if (package_qu.length < package_qu.length) {
          let cast7 = 1;
          let time_9N = String.fromCharCode(102,95,57,49,0);
          let e_countC = 4;
          let lightN = 4;
         package_qu = `${lightN}`;
         cast7 += cast7 & 3;
         time_9N += `${cast7}`;
         e_countC %= Math.max(3, 3);
         lightN ^= time_9N.length;
      }
      let reactd = String.fromCharCode(105,120,95,121,112,107,109,119,48,0) == package_qu;
      do {
         package_qu += `${package_qu.length + 1}`;
         if (reactd) {
            break;
         }
      } while (reactd && (!package_qu.endsWith(package_qu)));
      connectionP ^= (String.fromCharCode(115,0) == customi ? connectionP : customi.length);
       let resend9 = true;
       let mathG = String.fromCharCode(121,95,56,55,95,115,117,98,112,97,116,104,115,0);
      if (mathG.includes(`${resend9}`)) {
          let gray9 = String.fromCharCode(103,95,55,53,95,115,108,111,119,109,111,100,101,0);
         resend9 = (65 >= ((resend9 ? gray9.length : 65) | gray9.length));
      }
         resend9 = !resend9;
         resend9 = mathG.endsWith(`${resend9}`);
         resend9 = (24 > ((resend9 ? 24 : mathG.length) | mathG.length));
      if (!mathG.endsWith(`${resend9}`)) {
         mathG += `${((resend9 ? 5 : 5) * mathG.length)}`;
      }
          let fileX = String.fromCharCode(112,111,115,116,101,114,115,95,107,95,51,51,0);
          let toponF = String.fromCharCode(117,95,53,55,95,99,111,109,112,0);
          let contexts: Array<any> = [String.fromCharCode(99,108,111,99,107,119,105,115,101,95,100,95,50,56,0), String.fromCharCode(115,95,56,56,95,112,114,102,116,0)];
         resend9 = 28 > mathG.length;
         fileX += `${toponF.length | 2}`;
         toponF = `${2 ^ contexts.length}`;
         contexts.push((String.fromCharCode(99,0) == fileX ? toponF.length : fileX.length));
      injuryb /= Math.max(5, parseFloat(`${parseInt(`${white7}`) * 1}`));
   let xcopy_rdR = customi == String.fromCharCode(103,102,108,116,109,109,100,108,102,48,0);
   do {
      customi = `${3 + kuaishouJ.length}`;
      if (xcopy_rdR) {
         break;
      }
   } while (xcopy_rdR && (5 == manifestm.length));
   for (let l = 0; l < 2; l++) {
      trophyY *= parseInt(`${paged}`) * 3;
   }
      injuryb += parseFloat(`${2}`);
   while (manifestm.includes(`${paged}`)) {
       let activeE = false;
       let appsy = String.fromCharCode(104,111,115,116,115,95,111,95,54,54,0);
       let macauB = String.fromCharCode(117,95,55,95,111,99,97,108,105,122,97,116,105,111,110,0);
      if (appsy.length >= 4 && !activeE) {
          let smallU = 2.0;
         appsy = `${(3 * (activeE ? 5 : 5))}`;
         smallU *= parseFloat(`${parseInt(`${smallU}`)}`);
      }
         appsy = `${(2 + (activeE ? 2 : 5))}`;
      for (let v = 0; v < 3; v++) {
          let sinap = String.fromCharCode(109,109,120,101,120,116,95,57,95,57,52,0);
          let expired8: Map<any, any> = new Map([[String.fromCharCode(119,104,101,116,104,101,114,95,111,95,54,51,0),923], [String.fromCharCode(108,95,49,48,95,115,101,116,116,108,105,110,103,0),102], [String.fromCharCode(117,112,116,105,109,101,95,100,95,49,57,0),959]]);
          let type_ae = String.fromCharCode(114,116,97,100,100,114,115,95,116,95,56,51,0);
          let roomQ = String.fromCharCode(97,97,117,100,105,111,95,111,95,49,48,0);
         activeE = roomQ.length < sinap.length;
         sinap += `${type_ae.length}`;
         expired8.set(type_ae, type_ae.length * 3);
         roomQ += `${expired8.size}`;
      }
         activeE = activeE || appsy.length >= 21;
         macauB = `${macauB.length | appsy.length}`;
         macauB += `${appsy.length / 2}`;
         appsy += `${appsy.length * macauB.length}`;
      let dragI = activeE ? !activeE : activeE;
      do {
         activeE = macauB.length < 8;
         if (dragI) {
            break;
         }
      } while ((appsy.length <= 2) && dragI);
         appsy += `${3 | appsy.length}`;
      paged /= Math.max((parseFloat(`${kuaishouJ == String.fromCharCode(104,0) ? kuaishouJ.length : manifestm.length}`)), 1);
      break;
   }
      customi += `${parseInt(`${paged}`) << (Math.min(Math.abs(parseInt(`${injuryb}`)), 1))}`;
       let resendS = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,120,95,51,56,0);
       let malaysiau = String.fromCharCode(113,95,54,54,95,109,115,118,105,100,101,111,0);
       let detailsa: Array<any> = [742, 602, 578];
         detailsa.push(malaysiau.length);
      if (4 >= (detailsa.length * malaysiau.length)) {
         detailsa.push(1);
      }
         malaysiau += `${malaysiau.length}`;
         malaysiau += `${detailsa.length / (Math.max(malaysiau.length, 2))}`;
         resendS = `${resendS.length >> (Math.min(5, malaysiau.length))}`;
      for (let i = 0; i < 1; i++) {
         malaysiau = "1";
      }
      if (3 == (5 >> (Math.min(2, detailsa.length))) && (detailsa.length >> (Math.min(resendS.length, 4))) == 5) {
          let showV = String.fromCharCode(102,108,97,103,95,121,95,57,50,0);
          let bridgeH: Array<any> = [416, 707];
         resendS += `${malaysiau.length ^ detailsa.length}`;
         showV = `${bridgeH.length / (Math.max(showV.length, 8))}`;
         bridgeH.push((String.fromCharCode(119,0) == showV ? bridgeH.length : showV.length));
      }
      while (resendS.length == 2 && 2 == malaysiau.length) {
         malaysiau = `${detailsa.length}`;
         break;
      }
      while (malaysiau.length < 3 && resendS != String.fromCharCode(50,0)) {
         malaysiau += `${malaysiau.length}`;
         break;
      }
      paged *= parseFloat(`${parseInt(`${trophyY}`)}`);
   if (1.100 > white7) {
       let stringZ = String.fromCharCode(111,95,53,56,95,111,108,100,108,105,115,116,0);
       let yellowt = 5;
      let usernameI = 7236286 >= stringZ.length;
      do {
         stringZ = `${stringZ.length}`;
         if (usernameI) {
            break;
         }
      } while (usernameI && (2 <= (5 ^ yellowt) && 5 <= (5 ^ stringZ.length)));
         yellowt /= Math.max((stringZ == String.fromCharCode(84,0) ? stringZ.length : yellowt), 4);
         yellowt %= Math.max(1 + stringZ.length, 4);
      if (3 == (stringZ.length - yellowt) || (stringZ.length - yellowt) == 3) {
          let confirmation_ = String.fromCharCode(120,95,56,56,95,99,97,108,105,98,114,97,116,101,100,0);
          let reducera = String.fromCharCode(97,95,57,52,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0);
          let reada = String.fromCharCode(98,95,53,56,95,114,111,116,97,116,105,111,110,0);
          let projecte = true;
          let leagueg = String.fromCharCode(108,111,103,103,105,110,103,95,57,95,49,48,48,0);
         yellowt %= Math.max(3, 3);
         confirmation_ = `${(reada.length / (Math.max(4, (projecte ? 3 : 5))))}`;
         reducera = `${confirmation_.length}`;
         reada += `${(3 * (projecte ? 3 : 1))}`;
         leagueg = `${(leagueg.length - (projecte ? 2 : 1))}`;
      }
      if (2 == (stringZ.length & yellowt) || (yellowt & 2) == 5) {
          let gesturesF = 1;
          let heartD = 5.0;
         yellowt /= Math.max(gesturesF, 3);
         gesturesF *= 2;
         heartD *= 2;
      }
         yellowt ^= stringZ.length | 1;
      circleb *= 2;
   }
      annerO = `${(annerO == String.fromCharCode(100,0) ? parseInt(`${paged}`) : annerO.length)}`;
       let diceW = 5.0;
      for (let e = 0; e < 3; e++) {
         diceW += parseFloat(`${2 + parseInt(`${diceW}`)}`);
      }
      while (2.68 < (3.72 / (Math.max(5, diceW)))) {
          let tickc = String.fromCharCode(121,95,50,55,95,114,117,115,115,105,97,110,0);
          let goalD = false;
         diceW -= parseFloat(`${parseInt(`${diceW}`) % 1}`);
         tickc += `${(1 | (goalD ? 3 : 1))}`;
         goalD = !tickc.startsWith(`${goalD}`);
         break;
      }
      let trashA = diceW <= 6505037.0;
      do {
          let policy9 = String.fromCharCode(115,99,97,110,95,100,95,56,57,0);
          let bingy = 5;
          let dicey = true;
          let questM = String.fromCharCode(115,111,108,118,101,100,95,56,95,54,57,0);
         diceW -= parseFloat(`${bingy}`);
         policy9 = "2";
         bingy <<= Math.min(3, Math.abs(questM.length / 1));
         dicey = questM.length == 69;
         if (trashA) {
            break;
         }
      } while (trashA && (diceW < diceW));
      kuaishouJ = `${customi.length}`;
       let gesturel: Array<any> = [418, 150];
       let penaltyY = String.fromCharCode(120,95,50,55,95,115,105,110,116,0);
         penaltyY = `${(penaltyY == String.fromCharCode(107,0) ? gesturel.length : penaltyY.length)}`;
         gesturel.push(penaltyY.length);
         gesturel.push(2);
         penaltyY = `${penaltyY.length}`;
         penaltyY += `${gesturel.length & penaltyY.length}`;
      while (3 == (gesturel.length | 1)) {
         gesturel.push(gesturel.length >> (Math.min(Math.abs(1), 5)));
         break;
      }
      kuaishouJ += "2";
      circleb += manifestm.length - parseInt(`${white7}`);
      kuaishouJ += `${manifestm.length}`;
    delayControls();
  };

  const clearHidingDelay = () => {
       let save2 = String.fromCharCode(112,108,117,103,105,110,95,51,95,52,55,0);
    let actionsI = String.fromCharCode(102,95,54,52,95,98,108,111,98,0);
    let checkboxh = 0.0;
    let referrer3: Map<any, any> = new Map([[String.fromCharCode(112,95,55,48,95,97,116,111,102,0),913], [String.fromCharCode(115,108,105,99,101,100,95,116,95,53,54,0),577], [String.fromCharCode(114,101,99,101,105,112,116,115,95,111,95,57,53,0),506]]);
    let temperatureq = String.fromCharCode(112,95,49,57,95,115,105,103,109,97,0);
    let overI = 4.0;
    let carouselS: Map<any, any> = new Map([[String.fromCharCode(104,95,49,56,95,116,104,114,101,115,104,111,108,100,115,0),308], [String.fromCharCode(112,105,101,95,115,95,55,55,0),892]]);
    let goalx: Map<any, any> = new Map([[String.fromCharCode(109,117,115,120,95,107,95,56,57,0),837], [String.fromCharCode(112,121,116,104,111,110,95,101,95,49,49,0),479], [String.fromCharCode(105,95,57,54,95,101,120,116,114,101,109,117,109,0),927]]);
    let muteda = 4.0;
    let rightv = String.fromCharCode(110,101,97,114,108,121,95,57,95,52,50,0);
    let shirt3 = 5.0;
   if (2 == (referrer3.size + temperatureq.length) || (referrer3.size + 2) == 3) {
      referrer3 = new Map([[`${carouselS.size}`, carouselS.size]]);
   }
   if (temperatureq.length > parseInt(`${overI}`)) {
      temperatureq += `${save2.length & temperatureq.length}`;
   }
   if (2.100 < muteda) {
      referrer3.set(save2, 1);
   }
      overI /= Math.max((temperatureq == String.fromCharCode(102,0) ? temperatureq.length : carouselS.size), 4);
   for (let f = 0; f < 1; f++) {
      goalx = new Map([[`${referrer3.size}`, 1 % (Math.max(4, carouselS.size))]]);
   }
      save2 += `${temperatureq.length / (Math.max(1, 8))}`;
      carouselS = new Map([[`${referrer3.size}`, (String.fromCharCode(107,0) == save2 ? save2.length : referrer3.size)]]);
   while (carouselS.size == 1) {
      carouselS.set(`${temperatureq}`, temperatureq.length);
      break;
   }
   if (4 <= goalx.size) {
       let lessx = String.fromCharCode(100,95,52,57,0);
       let forward6 = 3.0;
         forward6 *= parseInt(`${forward6}`) - 2;
         forward6 /= Math.max(5, parseInt(`${forward6}`));
      if (4.75 == (lessx.length / (Math.max(1, forward6)))) {
         lessx += `${parseInt(`${forward6}`) << (Math.min(Math.abs(2), 3))}`;
      }
         forward6 /= Math.max(1, lessx.length >> (Math.min(Math.abs(1), 2)));
         forward6 /= Math.max(parseInt(`${forward6}`), 4);
      while (1.95 >= (lessx.length + forward6) || 2 >= (lessx.length / 1)) {
          let singaporeN = String.fromCharCode(116,111,110,97,108,95,118,95,57,53,0);
          let macau0: Map<any, any> = new Map([[String.fromCharCode(109,99,100,99,95,119,95,49,48,48,0),String.fromCharCode(110,95,55,54,95,117,110,105,113,117,101,100,0)], [String.fromCharCode(97,95,51,50,95,99,111,110,99,104,0),String.fromCharCode(100,95,56,95,98,101,114,110,111,117,108,108,105,0)]]);
          let signinupQ = String.fromCharCode(117,97,100,100,95,116,95,55,0);
         forward6 += signinupQ.length;
         singaporeN += "2";
         macau0.set(singaporeN, macau0.size ^ 3);
         signinupQ += `${singaporeN.length}`;
         break;
      }
      goalx = new Map([[`${goalx.size}`, goalx.size]]);
   }
   if ((parseInt(`${checkboxh}`) + referrer3.size) < 2 && (referrer3.size + checkboxh) < 2.23) {
      referrer3 = new Map([[save2, parseInt(`${overI}`)]]);
   }
       let bnewinterstitialu = true;
      while (!bnewinterstitialu && bnewinterstitialu) {
         bnewinterstitialu = !bnewinterstitialu;
         break;
      }
         bnewinterstitialu = !bnewinterstitialu;
      while (!bnewinterstitialu) {
         bnewinterstitialu = (!bnewinterstitialu ? !bnewinterstitialu : bnewinterstitialu);
         break;
      }
      save2 += "1";
   let tooltips2 = referrer3.size >= 8131644;
   do {
      referrer3.set(save2, (String.fromCharCode(73,0) == save2 ? save2.length : temperatureq.length));
      if (tooltips2) {
         break;
      }
   } while ((referrer3.size > temperatureq.length) && tooltips2);
      checkboxh += goalx.size / 1;
      carouselS.set(save2, 3 % (Math.max(10, save2.length)));
      referrer3.set(`${rightv}`, referrer3.size);
   for (let a = 0; a < 3; a++) {
       let suggestion0 = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,100,95,51,53,0);
       let goalX: Array<any> = [92, 432];
       let plashK = false;
       let nativeJ = String.fromCharCode(122,95,53,55,95,116,114,105,97,110,103,108,101,0);
       let downloaderr = 4.0;
      if (1 == (4 + suggestion0.length)) {
          let skip_ = String.fromCharCode(99,104,117,110,107,95,52,95,53,51,0);
          let launchw = 4;
         suggestion0 += `${skip_.length}`;
         skip_ = "2";
         launchw *= 1;
      }
      while (nativeJ == String.fromCharCode(77,0)) {
          let filterJ = String.fromCharCode(114,95,48,95,109,101,109,110,114,0);
          let umengb = String.fromCharCode(100,105,99,116,95,48,95,51,49,0);
          let subs_: Map<any, any> = new Map([[String.fromCharCode(100,105,97,99,114,105,116,105,99,95,120,95,49,55,0),797], [String.fromCharCode(98,95,53,56,95,99,118,116,121,117,118,116,111,0),407], [String.fromCharCode(111,103,103,100,101,99,95,104,95,54,56,0),779]]);
          let sourcev = 4.0;
         suggestion0 = `${subs_.size}`;
         filterJ = "1";
         umengb += `${(String.fromCharCode(113,0) == umengb ? parseInt(`${sourcev}`) : umengb.length)}`;
         subs_.set(umengb, 2);
         sourcev -= parseFloat(`${1 / (Math.max(2, umengb.length))}`);
         break;
      }
       let ticked3: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,115,116,97,108,108,95,98,95,52,49,0),120], [String.fromCharCode(120,95,53,54,95,103,101,110,100,101,114,0),175], [String.fromCharCode(114,101,115,116,114,105,99,116,95,55,95,52,55,0),332]]);
       let plusV: Map<any, any> = new Map([[String.fromCharCode(114,95,54,95,98,117,115,0),String.fromCharCode(114,97,100,105,117,115,95,106,95,51,49,0)], [String.fromCharCode(122,95,55,56,95,112,97,121,101,101,0),String.fromCharCode(120,95,50,53,95,97,114,98,105,116,114,97,114,121,0)]]);
      for (let d = 0; d < 3; d++) {
         downloaderr /= Math.max((suggestion0 == String.fromCharCode(95,0) ? suggestion0.length : plusV.size), 1);
      }
      if (3 > ticked3.size) {
          let spec4 = 0;
          let annerO = 1.0;
         ticked3 = new Map([[`${ticked3.size}`, ticked3.size]]);
         spec4 &= 2 & parseInt(`${annerO}`);
         annerO /= Math.max(parseFloat(`${spec4 % (Math.max(parseInt(`${annerO}`), 7))}`), 5);
      }
         plashK = plashK || goalX.length <= 29;
         downloaderr += ticked3.size % (Math.max(3, 3));
      let project0 = plusV.size <= 7030328;
      do {
         plusV.set(`${nativeJ}`, nativeJ.length % 1);
         if (project0) {
            break;
         }
      } while ((1 >= (plusV.size + 2) || (plusV.size + 2) >= 5) && project0);
          let interstitialy = String.fromCharCode(116,95,53,51,95,116,97,103,97,118,114,0);
         plashK = 9 > goalX.length && suggestion0 == String.fromCharCode(53,0);
         interstitialy = `${interstitialy.length & 3}`;
      if (ticked3.size == 5 && (ticked3.size / 5) == 1) {
         ticked3.set(`${plashK}`, (nativeJ.length << (Math.min(3, Math.abs((plashK ? 2 : 2))))));
      }
      let renewp = String.fromCharCode(57,51,53,119,112,0) == nativeJ;
      do {
          let mbnativem: Map<any, any> = new Map([[String.fromCharCode(103,95,49,53,95,110,97,110,111,115,118,103,0),String.fromCharCode(111,95,49,54,95,108,101,114,112,0)], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,112,95,50,53,0),String.fromCharCode(106,95,57,48,95,109,111,99,107,101,100,0)], [String.fromCharCode(117,95,53,95,100,111,117,98,108,101,105,110,116,115,116,114,0),String.fromCharCode(106,95,49,56,95,107,112,115,0)]]);
          let floatingF = String.fromCharCode(110,95,55,49,95,109,111,110,107,101,121,0);
         nativeJ += `${ticked3.size}`;
         mbnativem.set(floatingF, (String.fromCharCode(113,0) == floatingF ? floatingF.length : mbnativem.size));
         if (renewp) {
            break;
         }
      } while ((!nativeJ.startsWith(`${plashK}`)) && renewp);
      for (let m = 0; m < 3; m++) {
          let contexti = 1.0;
          let mbsplashm = String.fromCharCode(105,102,97,109,115,103,95,107,95,49,55,0);
          let becomeu = false;
          let upgrade_ = String.fromCharCode(112,105,99,116,117,114,101,95,101,95,50,54,0);
          let catagoryX: Array<any> = [String.fromCharCode(100,117,109,112,95,110,95,55,56,0), String.fromCharCode(104,95,54,56,95,98,97,100,103,101,115,0)];
         plusV.set(`${goalX.length}`, goalX.length % 1);
         contexti += parseInt(`${contexti}`) % (Math.max(7, upgrade_.length));
         mbsplashm += `${mbsplashm.length}`;
         becomeu = contexti == 84.35 || !becomeu;
         upgrade_ = `${(2 | (becomeu ? 4 : 1))}`;
         catagoryX.push(mbsplashm.length);
      }
         ticked3 = new Map([[`${goalX.length}`, parseInt(`${downloaderr}`) & 3]]);
          let refresh6 = String.fromCharCode(100,121,97,100,105,99,95,110,95,57,56,0);
          let moonF = String.fromCharCode(113,95,49,53,95,119,114,105,116,101,108,111,99,107,0);
          let albumt = 0;
         plashK = nativeJ.length >= downloaderr;
         refresh6 += `${2 / (Math.max(7, moonF.length))}`;
         moonF = `${(refresh6 == String.fromCharCode(80,0) ? albumt : refresh6.length)}`;
         albumt += albumt;
      let promotion0 = nativeJ == String.fromCharCode(97,98,116,122,115,0);
      do {
         nativeJ = "1";
         if (promotion0) {
            break;
         }
      } while ((2 == (nativeJ.length - parseInt(`${downloaderr}`)) && 5 == (nativeJ.length ^ 2)) && promotion0);
      goalx = new Map([[`${carouselS.size}`, carouselS.size / 2]]);
   }
      checkboxh /= Math.max(carouselS.size % (Math.max(5, temperatureq.length)), 5);
   if (temperatureq != actionsI) {
      actionsI += `${2 - referrer3.size}`;
   }
   for (let r = 0; r < 3; r++) {
      rightv = `${2 | goalx.size}`;
   }
   while (rightv != temperatureq) {
      temperatureq += "1";
      break;
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let playliste = String.fromCharCode(114,95,50,95,109,115,110,119,99,0);
    let unticki = true;
    let modalT = 4;
    let themeh = String.fromCharCode(112,117,116,95,108,95,57,55,0);
    let commonL = String.fromCharCode(113,95,53,52,95,112,97,114,101,110,116,0);
    let showu: Array<any> = [792, 217, 437];
    let diceK: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,119,97,114,101,95,118,95,54,54,0),String.fromCharCode(97,95,55,49,95,115,99,104,101,109,97,115,0)], [String.fromCharCode(108,112,99,109,95,50,95,55,0),String.fromCharCode(119,95,49,55,95,111,112,101,110,115,115,108,0)]]);
    let helperj = String.fromCharCode(114,101,103,105,115,116,101,114,101,100,95,52,95,49,48,48,0);
    let videojsL = String.fromCharCode(101,120,112,97,110,100,101,100,95,102,95,49,48,0);
    let plusu = String.fromCharCode(117,95,49,48,48,95,98,121,116,101,99,111,100,101,0);
    let questg = String.fromCharCode(112,95,54,55,95,108,105,98,97,111,109,0);
    let bridgeL = String.fromCharCode(122,95,53,55,95,99,111,109,112,97,114,105,115,111,110,0);
   let securityV = 5680034 >= diceK.size;
   do {
       let twitterP: Array<any> = [2, 804, 68];
       let schedule9 = false;
       let downd = 1;
       let relatedL = String.fromCharCode(116,95,55,57,95,115,105,103,109,97,0);
       let inactivex = String.fromCharCode(109,111,118,101,100,95,120,95,54,50,0);
      let moviesh = relatedL.length <= 9559967;
      do {
         relatedL += `${(twitterP.length * (schedule9 ? 3 : 2))}`;
         if (moviesh) {
            break;
         }
      } while (moviesh && (4 < twitterP.length));
      if (relatedL != String.fromCharCode(118,0) || inactivex == String.fromCharCode(112,0)) {
          let combineA = String.fromCharCode(120,98,105,110,95,110,95,55,57,0);
          let emojiA = 5;
         inactivex += "2";
         combineA = `${combineA.length}`;
         emojiA /= Math.max(emojiA & 3, 4);
      }
      for (let f = 0; f < 1; f++) {
          let helpero = 5;
          let phoner = 2;
          let tumbnailS = 2.0;
          let nativeex4 = String.fromCharCode(114,95,51,50,95,104,113,100,110,100,0);
          let skipK = String.fromCharCode(113,95,52,48,95,119,101,105,103,104,116,120,0);
         relatedL += `${helpero}`;
         helpero *= phoner / (Math.max(nativeex4.length, 7));
         phoner <<= Math.min(Math.abs(3), 2);
         tumbnailS += parseFloat(`${phoner}`);
         nativeex4 = `${nativeex4.length}`;
         skipK = "2";
      }
         inactivex = "1";
      while ((downd * twitterP.length) >= 3 || (twitterP.length * downd) >= 3) {
         downd *= 3 - downd;
         break;
      }
          let completeQ = 5;
          let logout0 = String.fromCharCode(108,111,103,103,101,114,95,115,95,57,55,0);
          let googleL = 2.0;
         downd |= parseInt(`${googleL}`) * inactivex.length;
         completeQ /= Math.max(completeQ & 3, 3);
         logout0 = `${logout0.length}`;
         googleL += 3 + logout0.length;
         twitterP.push(downd);
      for (let x = 0; x < 1; x++) {
         relatedL = `${relatedL.length}`;
      }
      for (let s = 0; s < 2; s++) {
          let analyticsd = 1;
         downd <<= Math.min(Math.abs(downd), 4);
         analyticsd >>= Math.min(Math.abs(analyticsd * analyticsd), 4);
      }
      let readQ = schedule9 ? !schedule9 : schedule9;
      do {
         schedule9 = 86 < twitterP.length;
         if (readQ) {
            break;
         }
      } while (readQ && ((downd >> (Math.min(Math.abs(2), 1))) == 3));
         relatedL = `${relatedL.length}`;
       let gpayE = String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,107,95,55,50,0);
         schedule9 = twitterP.includes(schedule9);
          let matchw = false;
         downd *= relatedL.length % 2;
         matchw = (matchw ? !matchw : !matchw);
         gpayE += "1";
      diceK = new Map([[`${diceK.size}`, diceK.size % (Math.max(10, showu.length))]]);
      if (securityV) {
         break;
      }
   } while ((3 > diceK.size) && securityV);
   for (let c = 0; c < 1; c++) {
      unticki = (commonL.length + showu.length) == 88;
   }
   if (!unticki) {
       let tailZ = String.fromCharCode(113,95,57,56,95,109,111,110,111,116,111,110,105,99,0);
       let transferE = String.fromCharCode(115,99,97,110,105,110,100,101,120,95,54,95,49,56,0);
       let handlerD = true;
         transferE += `${(3 << (Math.min(3, Math.abs((handlerD ? 5 : 1)))))}`;
      if (tailZ == String.fromCharCode(106,0)) {
         transferE += `${transferE.length}`;
      }
          let taiwanX: Map<any, any> = new Map([[String.fromCharCode(116,117,110,110,101,108,101,100,95,99,95,50,51,0),835], [String.fromCharCode(115,101,118,101,110,95,52,95,56,50,0),269]]);
          let f_position5 = String.fromCharCode(113,95,50,95,107,101,101,112,0);
         handlerD = tailZ.length <= 65;
         taiwanX.set(`${f_position5}`, taiwanX.size & 2);
         f_position5 += `${f_position5.length | 3}`;
         handlerD = transferE.startsWith(`${handlerD}`);
      for (let z = 0; z < 1; z++) {
         tailZ += `${transferE.length}`;
      }
         transferE += `${(String.fromCharCode(79,0) == tailZ ? transferE.length : tailZ.length)}`;
         handlerD = transferE.length < 5;
      let chinasameb = tailZ.length >= 6451138;
      do {
          let nativeexz = 4;
          let sportsV: Array<any> = [String.fromCharCode(119,95,55,95,97,98,115,116,114,97,99,116,0), String.fromCharCode(111,110,116,114,111,108,115,95,120,95,54,56,0), String.fromCharCode(111,110,101,119,97,121,95,117,95,56,52,0)];
          let styleU = 0.0;
          let progressE = true;
         tailZ += `${(parseInt(`${styleU}`) << (Math.min(1, Math.abs((progressE ? 5 : 1)))))}`;
         nativeexz >>= Math.min(Math.abs(2 + nativeexz), 1);
         sportsV.push(nativeexz >> (Math.min(4, Math.abs(3))));
         styleU *= parseFloat(`${nativeexz}`);
         progressE = (sportsV.length & nativeexz) <= 94;
         if (chinasameb) {
            break;
         }
      } while (chinasameb && (!handlerD && tailZ.length >= 4));
          let drag0 = 3.0;
          let serviceV = 5.0;
         tailZ = `${((handlerD ? 5 : 4) / (Math.max(parseInt(`${serviceV}`), 4)))}`;
         drag0 /= Math.max(parseFloat(`${3}`), 1);
         serviceV /= Math.max(parseInt(`${drag0}`), 3);
      unticki = String.fromCharCode(77,0) == playliste;
   }
   while (questg.length > 1) {
      questg = `${((unticki ? 4 : 4) & playliste.length)}`;
      break;
   }
   let floaterd = 9397580 <= modalT;
   do {
      modalT >>= Math.min(5, Math.abs(3));
      if (floaterd) {
         break;
      }
   } while (floaterd && ((modalT - questg.length) >= 1));
       let sidee = String.fromCharCode(121,95,55,50,95,110,105,110,101,0);
       let more0: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,95,112,95,55,57,0),String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,104,95,53,50,0)], [String.fromCharCode(115,117,98,109,105,116,95,104,95,49,48,48,0),String.fromCharCode(114,95,50,57,95,109,97,114,107,101,114,115,0)]]);
       let private_yD = String.fromCharCode(111,95,54,95,112,114,111,98,108,101,109,0);
         private_yD = `${private_yD.length - more0.size}`;
          let f_imageZ: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,95,113,95,54,48,0),340], [String.fromCharCode(113,95,53,54,95,97,116,111,110,0),305]]);
         more0 = new Map([[`${f_imageZ.size}`, (String.fromCharCode(87,0) == sidee ? f_imageZ.size : sidee.length)]]);
          let logoA = true;
          let referrer5 = String.fromCharCode(111,95,54,53,95,118,101,108,111,99,105,116,121,0);
          let sportsg = String.fromCharCode(112,95,56,52,95,116,101,114,109,0);
         private_yD = `${2 * sportsg.length}`;
         logoA = referrer5.startsWith(`${logoA}`);
         referrer5 = `${((logoA ? 3 : 2))}`;
         sportsg += `${(3 | (logoA ? 5 : 4))}`;
         private_yD = `${more0.size * 2}`;
         more0 = new Map([[`${more0.size}`, 1]]);
       let away2: Array<any> = [417, 814, 99];
       let sliderD = String.fromCharCode(103,95,56,49,95,100,101,108,101,103,97,116,101,115,0);
       let materialQ = String.fromCharCode(118,101,99,116,111,114,115,95,117,95,52,56,0);
         private_yD = `${3 + away2.length}`;
      for (let v = 0; v < 2; v++) {
         sliderD += `${sidee.length + 3}`;
      }
      videojsL += `${themeh.length}`;

      if (delayValue === undefined) {

       let downloaderD = String.fromCharCode(97,110,97,108,121,116,105,99,115,95,100,95,52,49,0);
         downloaderD += `${downloaderD.length / 2}`;
         downloaderD = `${downloaderD.length}`;
         downloaderD = `${downloaderD.length * 3}`;
      questg += `${questg.length}`;
       let huaweic = false;
       let nalyticsU = 4;
      for (let j = 0; j < 2; j++) {
         huaweic = 86 <= nalyticsU;
      }
         nalyticsU -= nalyticsU * 1;
      while (nalyticsU == 3 || (3 % (Math.max(5, nalyticsU))) == 3) {
         huaweic = 79 < nalyticsU;
         break;
      }
         nalyticsU += ((huaweic ? 1 : 1) | nalyticsU);
       let firebaseh = String.fromCharCode(115,99,116,112,95,55,95,50,57,0);
       let onewinterstitialv = String.fromCharCode(97,95,50,57,95,97,108,108,114,103,98,0);
      if (4 > onewinterstitialv.length) {
         firebaseh = `${1 >> (Math.min(1, Math.abs(nalyticsU)))}`;
      }
      questg = `${2 + diceK.size}`;
      videojsL = `${themeh.length & diceK.size}`;
       let flyerG: Array<any> = [936, 975];
       let weiboB = 1.0;
       let lango = String.fromCharCode(119,101,105,103,104,116,101,100,95,103,95,54,49,0);
      for (let m = 0; m < 2; m++) {
         flyerG = [lango.length];
      }
          let launcherK = 4.0;
          let fillR = 1;
          let sheets: Map<any, any> = new Map([[String.fromCharCode(110,95,54,48,95,112,111,119,101,114,0),437], [String.fromCharCode(104,95,52,54,95,109,101,103,101,100,0),110]]);
         flyerG = [fillR >> (Math.min(2, Math.abs(1)))];
         launcherK -= parseFloat(`${parseInt(`${launcherK}`) << (Math.min(Math.abs(sheets.size), 3))}`);
         fillR %= Math.max(3, 3);
         sheets = new Map([[`${sheets.size}`, 3 + parseInt(`${launcherK}`)]]);
         lango = `${1 + parseInt(`${weiboB}`)}`;
      for (let z = 0; z < 3; z++) {
         weiboB /= Math.max(3, lango.length);
      }
         lango = `${parseInt(`${weiboB}`)}`;
      if (1 == flyerG.length) {
         lango += "1";
      }
      while (!lango.endsWith(`${weiboB}`)) {
         lango += `${flyerG.length / 2}`;
         break;
      }
          let thumbnail2 = String.fromCharCode(118,111,119,101,108,95,101,95,51,0);
          let description_dR = String.fromCharCode(111,95,54,57,95,114,101,103,105,115,116,101,114,105,110,103,0);
          let screenP = String.fromCharCode(112,95,52,55,95,115,116,97,99,107,116,114,97,99,101,0);
         weiboB -= 3 ^ screenP.length;
         thumbnail2 += "3";
         description_dR += "1";
         screenP = `${1 / (Math.max(7, description_dR.length))}`;
      let canvasJ = weiboB <= 5630104.0;
      do {
          let trashW = String.fromCharCode(118,95,50,53,95,109,111,110,116,104,115,0);
          let rewardvideoC: Array<any> = [474, 842];
         weiboB += rewardvideoC.length * 2;
         trashW = `${2 + trashW.length}`;
         rewardvideoC = [trashW.length & trashW.length];
         if (canvasJ) {
            break;
         }
      } while (canvasJ && ((flyerG.length - weiboB) < 4.97 || 1 < (flyerG.length / 1)));
      themeh += `${commonL.length % (Math.max(3, 10))}`;
      modalT |= diceK.size * playliste.length;
   while (helperj.length == 1) {
      videojsL += `${(questg == String.fromCharCode(111,0) ? questg.length : showu.length)}`;
      break;
   }
        if (showSlider === 'none' && !paused) {

      helperj += `${3 << (Math.min(2, plusu.length))}`;
      diceK.set(`${modalT}`, modalT);
   for (let m = 0; m < 2; m++) {
      videojsL = `${(String.fromCharCode(49,0) == videojsL ? commonL.length : videojsL.length)}`;
   }
      unticki = String.fromCharCode(115,0) == commonL;
   for (let e = 0; e < 2; e++) {
      modalT <<= Math.min(plusu.length, 5);
   }
   while (5 >= (showu.length ^ 2)) {
       let modef = String.fromCharCode(102,95,49,48,48,95,112,97,99,107,0);
       let fileS = true;
       let matchz: Map<any, any> = new Map([[String.fromCharCode(107,95,50,52,95,109,105,100,116,111,110,101,115,0),523], [String.fromCharCode(119,95,49,54,95,101,103,114,101,115,115,0),648], [String.fromCharCode(99,119,114,115,105,95,115,95,56,56,0),208]]);
       let buttoni = String.fromCharCode(106,95,53,54,95,108,105,99,101,110,115,101,115,0);
       let clearA: Array<any> = [462, 866, 948];
         modef = `${1 | buttoni.length}`;
      let gesturesR = fileS ? !fileS : fileS;
      do {
         fileS = buttoni.length < 6;
         if (gesturesR) {
            break;
         }
      } while (gesturesR && (modef.startsWith(`${fileS}`)));
      if (4 >= modef.length && !fileS) {
         modef = `${(String.fromCharCode(89,0) == buttoni ? matchz.size : buttoni.length)}`;
      }
      if (fileS) {
         fileS = clearA.length < 41;
      }
         fileS = buttoni.length > 3 && clearA.length > 3;
         buttoni = `${(String.fromCharCode(53,0) == modef ? clearA.length : modef.length)}`;
      for (let e = 0; e < 2; e++) {
          let update_hw6 = 0.0;
          let nalyticsk = 2;
          let commonC = 1.0;
          let chartI = 3;
         buttoni = `${parseInt(`${commonC}`)}`;
         update_hw6 -= parseFloat(`${chartI % 1}`);
         nalyticsk |= parseInt(`${update_hw6}`) >> (Math.min(1, Math.abs(nalyticsk)));
         commonC /= Math.max(3 | parseInt(`${update_hw6}`), 1);
         chartI &= parseInt(`${update_hw6}`) << (Math.min(4, Math.abs(nalyticsk)));
      }
      for (let q = 0; q < 1; q++) {
         clearA.push(1);
      }
          let checkbox1 = String.fromCharCode(99,111,110,99,97,116,95,119,95,55,50,0);
          let detailsQ = true;
         matchz = new Map([[`${clearA.length}`, 2]]);
         checkbox1 += `${checkbox1.length}`;
         detailsQ = checkbox1.includes(`${detailsQ}`);
      let plash1 = fileS ? !fileS : fileS;
      do {
         fileS = (buttoni.length * modef.length) <= 84;
         if (plash1) {
            break;
         }
      } while ((buttoni.includes(`${fileS}`)) && plash1);
          let videocommon1: Map<any, any> = new Map([[String.fromCharCode(105,95,52,55,95,111,110,121,120,100,0),910], [String.fromCharCode(99,104,97,114,108,101,110,95,117,95,51,56,0),975]]);
          let ajaxQ = 0.0;
         buttoni += `${clearA.length / (Math.max(2, videocommon1.size))}`;
         videocommon1.set(`${ajaxQ}`, parseInt(`${ajaxQ}`) - 1);
      if (buttoni.endsWith(`${clearA.length}`)) {
         buttoni += `${clearA.length & matchz.size}`;
      }
      let updates1 = buttoni == String.fromCharCode(102,51,99,121,111,95,99,0);
      do {
          let canvasL = String.fromCharCode(118,95,55,95,114,103,98,120,105,0);
          let specD = 0.0;
          let helperW: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,114,105,99,116,101,100,95,122,95,51,0),false ], [String.fromCharCode(121,95,51,48,95,109,111,100,105,102,121,0),false ]]);
         buttoni += `${buttoni.length}`;
         canvasL = "2";
         specD *= parseFloat(`${parseInt(`${specD}`)}`);
         helperW.set(`${specD}`, helperW.size);
         if (updates1) {
            break;
         }
      } while ((modef.length >= 5) && updates1);
      while ((matchz.size | 3) >= 1) {
          let auto_2fA = String.fromCharCode(115,116,111,119,95,112,95,55,51,0);
          let goald = String.fromCharCode(115,119,105,112,101,95,103,95,53,57,0);
          let anythinkb = 1.0;
         buttoni = `${clearA.length}`;
         auto_2fA += `${parseInt(`${anythinkb}`) % 3}`;
         goald += `${auto_2fA.length % 1}`;
         anythinkb += parseFloat(`${goald.length % (Math.max(auto_2fA.length, 4))}`);
         break;
      }
      while (buttoni.includes(modef)) {
         buttoni = "2";
         break;
      }
      showu = [modef.length << (Math.min(3, videojsL.length))];
      break;
   }
          setShowControls(false)
        }
      } else {

       let floatingy: Array<any> = [339, 502];
      if ((floatingy.length % 3) == 4) {
         floatingy = [floatingy.length];
      }
      while (floatingy.includes(floatingy.length)) {
          let membershipa = String.fromCharCode(110,97,108,117,115,95,56,95,54,0);
          let downloadN = String.fromCharCode(101,95,52,54,95,117,110,109,97,114,107,0);
          let mbbidP = false;
         floatingy.push((membershipa == String.fromCharCode(110,0) ? membershipa.length : floatingy.length));
         downloadN += "3";
         mbbidP = downloadN.length == 9;
         break;
      }
         floatingy = [floatingy.length + 1];
      diceK = new Map([[`${showu.length}`, floatingy.length]]);
   if (videojsL.includes(`${modalT}`)) {
      videojsL += `${3 | diceK.size}`;
   }
   while (showu.length > questg.length) {
      questg = `${((unticki ? 2 : 2))}`;
      break;
   }
      commonL = `${commonL.length}`;
      unticki = questg.length >= 84 || 84 >= modalT;
   let mbnativeadvanced9 = modalT <= 8324753;
   do {
       let scoreV: Array<any> = [649, 930, 457];
       let banner6: Map<any, any> = new Map([[String.fromCharCode(117,95,53,52,95,115,117,98,109,118,0),543], [String.fromCharCode(121,95,54,55,95,118,101,114,105,102,105,97,98,108,101,0),838], [String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,106,95,55,50,0),994]]);
       let networkG = 0.0;
       let controlsT = 2;
         networkG += parseFloat(`${2 & parseInt(`${networkG}`)}`);
      if (!Array.from(banner6.keys()).includes(`${scoreV.length}`)) {
          let away8: Map<any, any> = new Map([[String.fromCharCode(99,95,49,55,95,109,97,114,115,104,97,108,0),359], [String.fromCharCode(114,108,105,110,101,95,107,95,48,0),88]]);
          let overf = 5.0;
          let loadingR = String.fromCharCode(98,108,105,116,95,115,95,51,52,0);
         banner6.set(`${controlsT}`, 1);
         away8 = new Map([[`${away8.size}`, 2 * away8.size]]);
         overf -= parseFloat(`${parseInt(`${overf}`) % (Math.max(3, 5))}`);
         loadingR = "2";
      }
      let greenK = networkG <= 9033660.0;
      do {
          let relatedq = 4.0;
          let robotor: Map<any, any> = new Map([[String.fromCharCode(99,95,55,51,95,109,105,110,113,0),false ], [String.fromCharCode(109,112,105,98,110,95,97,95,54,48,0),false ]]);
          let countryC = 0;
         networkG *= parseFloat(`${2}`);
         relatedq *= parseFloat(`${countryC & robotor.size}`);
         robotor.set(`${countryC}`, robotor.size);
         if (greenK) {
            break;
         }
      } while ((scoreV.length <= 5) && greenK);
      let plashe = 5254582.0 >= networkG;
      do {
         networkG /= Math.max(parseFloat(`${banner6.size - controlsT}`), 1);
         if (plashe) {
            break;
         }
      } while ((2 <= (controlsT / (Math.max(10, parseInt(`${networkG}`)))) && 1 <= (2 % (Math.max(7, controlsT)))) && plashe);
          let hooksU: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,100,115,112,95,105,95,52,49,0),false ], [String.fromCharCode(110,95,48,95,105,109,112,108,105,99,105,116,0),false ]]);
         scoreV = [controlsT % 3];
         hooksU = new Map([[`${hooksU.size}`, hooksU.size / 3]]);
      if ((banner6.size - scoreV.length) <= 5 && (5 - scoreV.length) <= 2) {
         scoreV.push(2);
      }
       let utilsx = 3.0;
         banner6 = new Map([[`${utilsx}`, controlsT & 3]]);
      let short_w2 = 9778725.0 <= utilsx;
      do {
         utilsx *= parseInt(`${networkG}`);
         if (short_w2) {
            break;
         }
      } while ((!Array.from(banner6.values()).includes(utilsx)) && short_w2);
      while (5 > (scoreV.length % 5) || 4.11 > (networkG * parseFloat(`${scoreV.length}`))) {
          let renewU = 0.0;
          let areah = String.fromCharCode(112,95,51,56,95,102,114,101,101,0);
         scoreV.push(scoreV.length % 1);
         renewU -= 3;
         areah = `${parseInt(`${renewU}`)}`;
         break;
      }
      for (let g = 0; g < 3; g++) {
          let regengC = true;
         networkG -= parseFloat(`${controlsT ^ 1}`);
         regengC = !regengC;
      }
         controlsT &= 2;
      modalT += plusu.length - showu.length;
      if (mbnativeadvanced9) {
         break;
      }
   } while (mbnativeadvanced9 && (2 >= (2 ^ showu.length)));
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let flyerq = 5;
    let mimoD = 1;
    let nterstitial1 = 0.0;
    let mintegralx: Array<any> = [750, 915];
    let previewh = String.fromCharCode(109,95,55,51,95,109,101,109,115,101,116,0);
    let tooltipsi = 2;
    let layoutR: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,116,101,100,95,102,95,49,54,0),String.fromCharCode(103,95,53,54,95,99,116,105,109,101,115,116,97,109,112,0)], [String.fromCharCode(103,95,49,50,95,115,99,114,111,108,108,101,114,0),String.fromCharCode(98,117,102,108,101,110,95,98,95,49,49,0)], [String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,50,95,54,0),String.fromCharCode(112,114,111,112,115,95,117,95,52,57,0)]]);
    let launchQ = String.fromCharCode(115,95,49,55,95,99,104,101,99,107,115,0);
    let emptyA = 1;
    let mail1 = false;
    let playn = 4.0;
    let blackg = String.fromCharCode(99,108,97,115,104,95,116,95,53,49,0);
   let detailsH = mail1 ? !mail1 : mail1;
   do {
      mail1 = layoutR.size > 44;
      if (detailsH) {
         break;
      }
   } while (detailsH && ((4 * mintegralx.length) > 4));
      mintegralx = [3 - mintegralx.length];
   if (3.76 > (nterstitial1 + 5.37) && (launchQ.length + parseInt(`${nterstitial1}`)) > 1) {
       let catalogg: Array<any> = [String.fromCharCode(120,95,55,56,95,115,105,110,0), String.fromCharCode(108,111,103,105,99,95,112,95,51,55,0)];
       let mutedY = String.fromCharCode(114,117,98,121,95,49,95,50,54,0);
       let middlewaree = 4;
       let mbridgeQ = 1.0;
       let huaweid: Map<any, any> = new Map([[String.fromCharCode(106,95,50,51,95,114,117,108,101,115,0),false ], [String.fromCharCode(119,95,51,56,95,98,97,99,107,103,114,111,117,110,100,115,0),false ], [String.fromCharCode(97,110,97,108,121,115,101,95,56,95,54,53,0),true ]]);
       let uploadD = String.fromCharCode(118,115,117,98,113,95,99,95,56,52,0);
         uploadD = `${(String.fromCharCode(118,0) == mutedY ? mutedY.length : huaweid.size)}`;
          let servicey: Array<any> = [440, 729];
          let vignettek = String.fromCharCode(104,95,49,95,114,101,111,114,100,101,114,101,100,0);
          let router5 = 0.0;
         mutedY += `${(String.fromCharCode(88,0) == mutedY ? catalogg.length : mutedY.length)}`;
         servicey = [servicey.length | vignettek.length];
         vignettek = `${servicey.length & vignettek.length}`;
         router5 += vignettek.length | 1;
      while (5.97 >= (1.15 + mbridgeQ) || 4 >= (uploadD.length << (Math.min(Math.abs(5), 1)))) {
         mbridgeQ *= uploadD.length >> (Math.min(1, Math.abs(parseInt(`${mbridgeQ}`))));
         break;
      }
      if ((2 >> (Math.min(4, uploadD.length))) == 5) {
         huaweid = new Map([[uploadD, 3 ^ parseInt(`${mbridgeQ}`)]]);
      }
         uploadD += "1";
         middlewaree -= huaweid.size;
       let baidu7 = String.fromCharCode(97,108,110,117,109,95,55,95,54,49,0);
       let show7 = String.fromCharCode(111,95,51,95,112,105,116,99,104,0);
         show7 = `${catalogg.length}`;
      if (show7.length == baidu7.length) {
         baidu7 += `${(String.fromCharCode(121,0) == baidu7 ? show7.length : baidu7.length)}`;
      }
      while (2 <= show7.length) {
         uploadD = `${middlewaree % 3}`;
         break;
      }
      if (!baidu7.startsWith(`${mbridgeQ}`)) {
         mbridgeQ *= 1 >> (Math.min(3, mutedY.length));
      }
         uploadD = `${mutedY.length / 3}`;
          let editx = 4.0;
          let flyer7 = String.fromCharCode(113,95,57,50,95,118,116,97,115,107,113,117,101,117,101,0);
         baidu7 = `${catalogg.length ^ parseInt(`${mbridgeQ}`)}`;
         editx -= (parseFloat(`${flyer7 == String.fromCharCode(84,0) ? parseInt(`${editx}`) : flyer7.length}`));
         baidu7 = `${parseInt(`${mbridgeQ}`) << (Math.min(show7.length, 2))}`;
      nterstitial1 -= parseFloat(`${mutedY.length}`);
   }
      flyerq *= 2;
       let sportsf: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,105,116,105,101,115,95,120,95,57,52,0),true ], [String.fromCharCode(117,95,52,95,112,111,115,116,105,110,105,116,0),false ]]);
      while (sportsf.get(`${sportsf.size}`) != null) {
         sportsf = new Map([[`${sportsf.size}`, sportsf.size]]);
         break;
      }
         sportsf.set(`${sportsf.size}`, sportsf.size / (Math.max(2, 5)));
      while (5 < (2 - sportsf.size)) {
          let round2: Array<any> = [815, 405, 514];
          let flyerC = String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,57,95,53,50,0);
          let carousel6 = String.fromCharCode(115,95,55,51,95,99,111,108,117,109,110,108,105,115,116,0);
          let brightnessR = String.fromCharCode(103,95,55,57,95,105,110,116,101,114,118,97,108,115,0);
         sportsf.set(carousel6, 3);
         round2 = [round2.length + flyerC.length];
         flyerC = `${3 & flyerC.length}`;
         carousel6 = `${2 % (Math.max(7, round2.length))}`;
         brightnessR += `${round2.length ^ 1}`;
         break;
      }
      nterstitial1 *= parseFloat(`${mimoD % (Math.max(10, flyerq))}`);
   while (2 <= (mimoD ^ 2)) {
      mimoD ^= mintegralx.length;
      break;
   }

    if (isLocked) {

      launchQ += `${emptyA}`;
   let reward1 = mail1 ? !mail1 : mail1;
   do {
      mail1 = (tooltipsi & mintegralx.length) < 63;
      if (reward1) {
         break;
      }
   } while (((4 * emptyA) <= 4) && reward1);
      mimoD ^= emptyA + mimoD;
      mimoD /= Math.max(3, mintegralx.length);
      emptyA |= emptyA ^ tooltipsi;
   for (let r = 0; r < 1; r++) {
       let buildq = 1.0;
       let tooltipsN = 4.0;
       let relatedO = 4.0;
       let recommendation7 = 4.0;
       let type_cen = String.fromCharCode(114,95,53,55,95,102,111,114,101,97,99,104,0);
         buildq /= Math.max(type_cen.length, 1);
      if ((buildq * type_cen.length) >= 2.96 || 2.96 >= (buildq * type_cen.length)) {
         buildq -= 3;
      }
         recommendation7 += 2 >> (Math.min(Math.abs(parseInt(`${buildq}`)), 3));
      if (1.35 <= (tooltipsN / 3.43) && (relatedO / 3.43) <= 4.83) {
         relatedO -= parseFloat(`${parseInt(`${relatedO}`)}`);
      }
         tooltipsN *= parseFloat(`${1}`);
      while (2.38 <= (5 + relatedO)) {
          let mbbannerj = 2.0;
         buildq *= 1 >> (Math.min(Math.abs(parseInt(`${tooltipsN}`)), 3));
         mbbannerj /= Math.max(parseInt(`${mbbannerj}`), 2);
         break;
      }
      let sport8 = tooltipsN <= 5600557.0;
      do {
          let cast4 = 4.0;
          let n_player4 = false;
          let moonv: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,105,112,113,102,0),true ], [String.fromCharCode(99,97,114,116,95,112,95,57,48,0),true ], [String.fromCharCode(115,111,110,105,99,95,100,95,50,50,0),true ]]);
          let manifestV = 1.0;
          let minis = 3.0;
         tooltipsN /= Math.max(2, parseFloat(`${parseInt(`${buildq}`)}`));
         cast4 += parseFloat(`${1}`);
         n_player4 = (manifestV / (Math.max(parseFloat(`${moonv.size}`), 5))) > 16.43;
         moonv = new Map([[`${cast4}`, parseInt(`${cast4}`) << (Math.min(3, Math.abs(3)))]]);
         manifestV -= parseFloat(`${3 + parseInt(`${cast4}`)}`);
         minis += parseFloat(`${parseInt(`${manifestV}`) << (Math.min(2, Math.abs(2)))}`);
         if (sport8) {
            break;
         }
      } while (sport8 && ((recommendation7 + 5.4) == 1.10 || 5.4 == (tooltipsN + recommendation7)));
          let shoot1 = 2.0;
          let backgroundZ: Map<any, any> = new Map([[String.fromCharCode(112,99,97,99,104,101,95,121,95,54,48,0),true ], [String.fromCharCode(102,95,56,49,95,115,109,111,111,116,104,105,110,103,0),false ], [String.fromCharCode(108,95,50,50,95,117,110,105,102,111,114,109,0),false ]]);
          let bufferP = 4;
         tooltipsN *= parseFloat(`${parseInt(`${relatedO}`)}`);
         shoot1 += parseFloat(`${2 | backgroundZ.size}`);
         backgroundZ = new Map([[`${bufferP}`, 3]]);
         bufferP %= Math.max(1, 2);
      if (!type_cen.startsWith(`${buildq}`)) {
         buildq *= parseInt(`${recommendation7}`) << (Math.min(Math.abs(1), 4));
      }
       let mbnativeadvancedI = false;
       let reacto = true;
       let clearv = 2.0;
       let strings9 = 0.0;
      for (let s = 0; s < 3; s++) {
         type_cen = `${((mbnativeadvancedI ? 5 : 5) / 2)}`;
      }
      let componentU = mbnativeadvancedI ? !mbnativeadvancedI : mbnativeadvancedI;
      do {
         mbnativeadvancedI = !mbnativeadvancedI;
         if (componentU) {
            break;
         }
      } while ((2.83 < (2.40 - buildq) && mbnativeadvancedI) && componentU);
          let emptyAL = 5.0;
         tooltipsN *= parseFloat(`${2}`);
         emptyAL *= parseInt(`${emptyAL}`) % 1;
      let paginationh = 5737636.0 >= strings9;
      do {
         strings9 -= parseFloat(`${parseInt(`${recommendation7}`) * 2}`);
         if (paginationh) {
            break;
         }
      } while (paginationh && ((clearv * strings9) > 5.56));
      tooltipsi <<= Math.min(5, Math.abs(3 | flyerq));
   }
      

   while (1 > (previewh.length % 2) || 2 > (mimoD % (Math.max(previewh.length, 8)))) {
      previewh = `${3 ^ layoutR.size}`;
      break;
   }
   if ((launchQ.length / (Math.max(8, tooltipsi))) < 1) {
      launchQ += "1";
   }
      tooltipsi -= layoutR.size % (Math.max(1, 8));
   if ((2 - launchQ.length) < 5 || 1 < (layoutR.size - 2)) {
      layoutR.set(`${launchQ}`, 2 - layoutR.size);
   }
       let strN = 2.0;
         strN /= Math.max(1, 3);
       let mutedV = 3.0;
       let whistled = 2.0;
       let foundb = String.fromCharCode(115,117,98,116,101,120,116,95,49,95,54,55,0);
      flyerq &= 1;
   let minivods = mail1 ? !mail1 : mail1;
   do {
       let agreementR = String.fromCharCode(99,95,53,95,112,111,114,116,114,97,105,116,0);
         agreementR += `${1 % (Math.max(9, agreementR.length))}`;
      for (let j = 0; j < 1; j++) {
         agreementR = `${(String.fromCharCode(85,0) == agreementR ? agreementR.length : agreementR.length)}`;
      }
         agreementR += "1";
      mail1 = 42 == emptyA;
      if (minivods) {
         break;
      }
   } while (minivods && (mail1));
      setIsLocked(false);
    } else {

      mimoD *= 2;
      layoutR = new Map([[`${mintegralx.length}`, tooltipsi * 1]]);
   for (let b = 0; b < 1; b++) {
       let orientationT = 5;
       let sharedQ = 1;
       let resends = String.fromCharCode(119,95,51,52,95,101,120,116,101,110,115,105,111,110,115,0);
       let i_titleB: Map<any, any> = new Map([[String.fromCharCode(113,112,101,108,95,108,95,52,50,0),360], [String.fromCharCode(118,95,57,56,95,105,110,105,116,100,101,99,0),174], [String.fromCharCode(105,110,118,97,108,105,100,97,116,101,100,95,119,95,49,54,0),205]]);
       let register_56V = String.fromCharCode(116,114,97,99,107,101,114,95,51,95,57,52,0);
      for (let q = 0; q < 2; q++) {
         resends += `${resends.length}`;
      }
         register_56V = `${register_56V.length << (Math.min(1, Math.abs(orientationT)))}`;
      if (Array.from(i_titleB.keys()).includes(`${sharedQ}`)) {
         sharedQ >>= Math.min(Math.abs(1), 5);
      }
         sharedQ /= Math.max(2, 3 << (Math.min(4, register_56V.length)));
      if (!Array.from(i_titleB.keys()).includes(`${orientationT}`)) {
         orientationT *= sharedQ * orientationT;
      }
         resends += `${(String.fromCharCode(88,0) == register_56V ? i_titleB.size : register_56V.length)}`;
       let paths = String.fromCharCode(106,100,99,111,101,102,99,116,95,103,95,49,52,0);
       let nativep = String.fromCharCode(117,95,56,95,115,104,97,100,101,114,115,0);
       let zhengpian6: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,100,101,112,114,101,99,105,97,116,101,100,104,0),871], [String.fromCharCode(117,95,53,56,95,117,110,109,117,116,101,0),390], [String.fromCharCode(103,95,54,52,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0),205]]);
       let skipa: Map<any, any> = new Map([[String.fromCharCode(103,101,111,95,110,95,54,0),false ], [String.fromCharCode(100,101,112,108,111,121,95,110,95,52,56,0),false ]]);
      while ((4 * skipa.size) == 1) {
         i_titleB.set(register_56V, (register_56V == String.fromCharCode(113,0) ? register_56V.length : paths.length));
         break;
      }
       let foregroundX: Array<any> = [772, 560, 182];
       let completes = 3.0;
       let vignettef = 4.0;
         skipa = new Map([[`${skipa.size}`, 2]]);
      for (let v = 0; v < 1; v++) {
         foregroundX.push(resends.length);
      }
          let subsA = String.fromCharCode(120,95,53,55,95,98,101,120,116,0);
         skipa = new Map([[`${foregroundX.length}`, nativep.length ^ 2]]);
         subsA = "2";
          let plusL = false;
         i_titleB.set(`${sharedQ}`, 1);
         plusL = !plusL;
      previewh += `${3 % (Math.max(8, mintegralx.length))}`;
   }
   let shareH = 9371290 >= tooltipsi;
   do {
      tooltipsi += 2;
      if (shareH) {
         break;
      }
   } while ((4 > (previewh.length << (Math.min(Math.abs(2), 1)))) && shareH);
   for (let q = 0; q < 3; q++) {
       let videocommonW = 1;
       let membershipj = String.fromCharCode(118,95,53,51,95,111,110,116,114,111,108,0);
      for (let v = 0; v < 3; v++) {
          let phonee = 1;
          let photoO = 3.0;
          let matchesT = String.fromCharCode(98,117,102,115,112,97,99,101,95,122,95,57,48,0);
          let scoreO: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,105,102,121,95,52,95,50,50,0),false ], [String.fromCharCode(112,114,101,100,101,102,105,110,101,100,95,49,95,56,54,0),false ]]);
         membershipj += `${1 ^ phonee}`;
         phonee >>= Math.min(Math.abs(3 << (Math.min(4, matchesT.length))), 2);
         photoO += 1 + scoreO.size;
         matchesT = `${matchesT.length}`;
         scoreO = new Map([[`${scoreO.size}`, matchesT.length * 1]]);
      }
         membershipj += `${membershipj.length % (Math.max(3, 7))}`;
         membershipj = `${(String.fromCharCode(66,0) == membershipj ? videocommonW : membershipj.length)}`;
         membershipj = `${videocommonW % 3}`;
       let sorth: Array<any> = [364, 388, 369];
       let leftU: Array<any> = [392, 147, 72];
         leftU.push(videocommonW | 2);
      tooltipsi &= 3 / (Math.max(4, layoutR.size));
   }
       let guider: Map<any, any> = new Map([[String.fromCharCode(100,105,97,103,111,110,97,108,95,106,95,51,0),334], [String.fromCharCode(115,95,54,55,95,114,101,110,111,114,109,0),711]]);
       let targetS = 5;
      for (let x = 0; x < 3; x++) {
         targetS %= Math.max(2, targetS / (Math.max(9, guider.size)));
      }
          let mbnativeadvancedk = false;
          let descj = String.fromCharCode(97,95,57,52,95,115,116,105,99,107,0);
         targetS /= Math.max(2, ((mbnativeadvancedk ? 2 : 3) << (Math.min(Math.abs(3), 2))));
         mbnativeadvancedk = descj.length > 92;
         descj += `${descj.length | 1}`;
       let championZ = String.fromCharCode(97,117,100,105,101,110,99,101,95,54,95,57,50,0);
       let rightq = String.fromCharCode(119,95,50,49,0);
      for (let b = 0; b < 1; b++) {
          let linkf = false;
         targetS &= guider.size & targetS;
         linkf = !linkf;
      }
         rightq += `${championZ.length}`;
          let launcheru: Map<any, any> = new Map([[String.fromCharCode(119,95,57,95,116,114,105,112,0),116], [String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,108,95,53,55,0),784], [String.fromCharCode(103,95,53,95,109,98,117,102,115,0),236]]);
          let profilev = 0.0;
         championZ += `${(rightq == String.fromCharCode(107,0) ? rightq.length : launcheru.size)}`;
         launcheru.set(`${profilev}`, 2 | parseInt(`${profilev}`));
      tooltipsi %= Math.max(3, 1);
      

      emptyA *= tooltipsi ^ emptyA;
      previewh += `${flyerq}`;
      mimoD %= Math.max(4, tooltipsi);
   let awayV = 9343791 >= layoutR.size;
   do {
      layoutR.set(`${mimoD}`, mimoD >> (Math.min(4, Math.abs(3))));
      if (awayV) {
         break;
      }
   } while ((4 <= (layoutR.size >> (Math.min(Math.abs(3), 5)))) && awayV);
       let baiduW: Array<any> = [28, 87, 106];
       let blacklist5 = String.fromCharCode(115,104,105,112,112,105,110,103,95,97,95,52,54,0);
       let saveh = 3.0;
      for (let k = 0; k < 3; k++) {
         baiduW = [parseInt(`${saveh}`) & 1];
      }
      for (let h = 0; h < 3; h++) {
          let goalv = 0.0;
          let edity = 4.0;
          let stationsW = false;
         blacklist5 = `${blacklist5.length << (Math.min(Math.abs(3), 3))}`;
         goalv += parseInt(`${goalv}`) >> (Math.min(3, Math.abs(1)));
         edity *= 3 + parseInt(`${goalv}`);
         stationsW = edity > 49.10;
      }
      for (let k = 0; k < 2; k++) {
         blacklist5 = `${baiduW.length}`;
      }
          let vignettel = 5.0;
          let albumq: Array<any> = [String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,109,95,50,55,0), String.fromCharCode(114,95,56,53,95,119,104,101,114,101,0)];
         baiduW = [1 >> (Math.min(2, blacklist5.length))];
         vignettel /= Math.max(parseInt(`${vignettel}`) & albumq.length, 5);
         albumq = [parseInt(`${vignettel}`)];
         blacklist5 += `${parseInt(`${saveh}`)}`;
      while ((saveh / (Math.max(baiduW.length, 2))) <= 4.60 || 4.60 <= (saveh / (Math.max(1, baiduW.length)))) {
         baiduW.push(3);
         break;
      }
         blacklist5 += `${baiduW.length / 1}`;
      for (let h = 0; h < 2; h++) {
         blacklist5 += `${baiduW.length | blacklist5.length}`;
      }
         blacklist5 = `${(String.fromCharCode(67,0) == blacklist5 ? baiduW.length : blacklist5.length)}`;
      mimoD *= 2;
       let halfv = String.fromCharCode(99,111,115,113,105,95,108,95,54,54,0);
       let downloadk = String.fromCharCode(115,108,111,112,95,109,95,49,55,0);
         halfv += `${3 >> (Math.min(3, halfv.length))}`;
      while (downloadk != halfv) {
         halfv = "3";
         break;
      }
      while (!halfv.startsWith(`${downloadk.length}`)) {
         downloadk += `${downloadk.length / (Math.max(3, 4))}`;
         break;
      }
          let usernameU = 5;
         halfv += `${usernameU}`;
      if (3 == halfv.length) {
         halfv = `${downloadk.length}`;
      }
       let fastforwardb: Map<any, any> = new Map([[String.fromCharCode(112,95,52,54,95,114,103,98,97,0),979], [String.fromCharCode(118,95,49,55,95,109,97,99,101,120,97,109,112,108,101,0),541], [String.fromCharCode(122,95,49,49,95,97,110,105,109,0),742]]);
       let stringM: Map<any, any> = new Map([[String.fromCharCode(107,95,55,53,95,115,121,109,98,111,108,105,99,0),37], [String.fromCharCode(117,112,115,101,114,116,95,122,95,56,51,0),899], [String.fromCharCode(105,95,54,54,95,98,108,111,99,107,100,99,0),675]]);
      previewh += `${flyerq}`;
      setIsLocked(true);
    }
  }
  return (
    <View
      style={{ ...styles.controlsOverlay }}>
      <VodCombinedGesture
        vodType={videoType}
        enabled={showSlider === 'none'}
        onSkipBackwards={() => handleFastForward(-10)}
        onSkipForward={() => handleFastForward(10)}
        onSingleTap={changeControlsState}
        currentTime={currentTime}
        totalDuration={duration}
        onSeek={onSeekGesture}
        disableControlsExceptTap={isLocked}
      />
      {
        accumulatedSkip < 0 &&
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          opacity: opacity.value,
          position: 'absolute',
          top: isFullScreen ? (height / 2) - 25 : (width * 9 / 32) - 25,
          left: isFullScreen ? '15%' : '4%',
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: 10,
          borderRadius: 8
        }}>
          <Text style={{ ...textVariants.header, marginRight: 5 }}>{`${accumulatedSkip}s`}</Text>
          <FastImage
            source={require('@static/images/componentModity.png')}
            style={{
              height: icons.sizes.l,
              width: icons.sizes.l,
            }}
            resizeMode={"contain"}
          />
        </View>
      }
      {
        accumulatedSkip > 0 &&
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          opacity: opacity.value,
          position: 'absolute',
          right: isFullScreen ? '15%' : '4%',
          top: isFullScreen ? (height / 2) - 25 : (width * 9 / 32) - 25,
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: 10,
          borderRadius: 8
        }}>
          <FastImage
            source={require('@static/images/fillDownloader.png')}
            style={{
              height: icons.sizes.l,
              width: icons.sizes.l,
            }}
            resizeMode={"contain"}
          />
          <Text style={{ ...textVariants.header, marginRight: 5 }}>{`+${accumulatedSkip}s`}</Text>
        </View>
      }
      {
        showControls && isLocked &&
        <View style={styles.unlock}>
          <RectButton
            disallowInterruption={true}
            onPress={toggleLock}>
            <UnlockScreenIcon width={40} height={40} />
          </RectButton>
        </View>
      }
      {
        isFullScreen && showGuide &&
        <GesturesGuide />
      }
      {
        showControls && !isLocked && (
          showSlider !== 'none' && isFullScreen
            ? <View style={{ flex: 1, flexDirection: 'row' }}>
              <BaseButton onPress={
                () => {
                  setShowSlider('none')
                }}
                disallowInterruption={true}
                style={{ flex: 1, width: 'auto' }}></BaseButton>
              <View style={styles.sidePanel} >
                <LinearGradient
                  colors={['transparent', 'black']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.1, y: 0 }}
                  style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute' }}
                />
                <View style={{ paddingVertical: 30, paddingHorizontal: 30, flex: 1, zIndex: 99 }}>
                  {
                    showSlider === 'playback' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'center' }}>倍速</Text>
                  }
                  {
                    showSlider === 'episodes' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'left', marginLeft: spacing.sideOffset + 10 }}>选集</Text>
                  }
                  {
                    showSlider === 'download' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'left', marginLeft: spacing.sideOffset + 10 }}>下载</Text>
                  }
                  {
                    showSlider === 'movies' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'left', marginLeft: spacing.sideOffset + 10 }}>
                      电影推荐
                    </Text>
                  }
                  {
                    showSlider === 'streams' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'left', marginLeft: spacing.sideOffset + 10 }}>
                      电视台推荐
                    </Text>
                  }
                  {
                    showSlider === 'playback' &&
                    <FlatList
                      data={[0.5, 0.75, 1, 1.25, 1.5, 2]}
                      
                      renderItem={({ item }) =>
                        <RectButton disallowInterruption={true} style={styles.rateButtons} onPress={() => {
                          changePlaybackRate(item);
                        }}>
                          <Text style={{
                            ...textVariants.header,
                            color: item === playbackRate ? colors.primary : colors.text
                          }}>
                            {`${item}X`}
                          </Text>
                        </RectButton>
                      }
                    />
                  }
                  {
                    showSlider === 'episodes' &&
                    <VodEpisodeSelection
                      activeEpisode={activeEpisode}
                      episodes={episodes}
                      onConfirm={onEpisodeChange}
                      rangeSize={rangeSize}
                      onCancel={() => { }}
                    />
                  }
                  {
                    showSlider === 'download' && onDownloadVod &&
                    <VodDownloadSelection
                      activeEpisode={activeEpisode}
                      episodes={episodes}
                      onDownload={onDownloadVod}
                      rangeSize={rangeSize}
                      vodId={vodID}
                      isVip={isVip}
                      source={sourceID}
                      handleClose={() => {
                        setShowSlider('none');
                      }}
                      setShowAdOverlay={setShowAdOverlay}
                    />
                  }
                  {
                    showSlider === 'movies' &&
                    <View style={{ paddingLeft: spacing.sideOffset + 10, flex: 1, display: 'flex' }}>
                      {
                        isFetchingRecommendedMovies
                          ? <View style={{ ...styles.loading }}>
                            <FastImage
                              style={{ height: 80, width: 80 }}
                              source={require('@static/images/toponTerms.gif')}
                              resizeMode={"contain"}
                            />
                          </View>
                          : <ScrollView>
                            <VodListVertical vods={movieList} outerRowPadding={20} />
                          </ScrollView>
                      }
                    </View>
                  }
                  {
                    showSlider === 'streams' &&
                    <View style={{ paddingLeft: spacing.sideOffset + 10 }}>
                      <View style={{ alignItems: 'center' }}>
                        <ScrollView>
                          <VodLiveStationListVertical itemList={streams} numOfRows={100} />
                        </ScrollView>
                      </View>
                    </View>
                  }
                </View>
              </View>
            </View>
            : <>
              { }
              <LinearGradient
                colors={['transparent', 'black']}
                start={{ x: 0.5, y: 0.8 }}
                end={{ x: 0.5, y: 0 }}
                style={styles.topBlur}
              >
                <View style={{ ...styles.videoHeader, marginRight: isFullScreen ? 20 : 0 }}>
                  <TouchableOpacity onPress={() => goBack()} style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, paddingRight: 10, }}>
                    <BackButton btnStyle={styles.backBtn} />
                    <Text
                      style={{
                        ...textVariants.body,
                        fontSize: 17,
                        fontWeight: '600',
                        color: colors.text,
                        flex: 1,
                        paddingBottom: 3,
                      }}
                      numberOfLines={1}
                      ellipsizeMode='middle'
                    >
                      {headerTitle}
                    </Text>
                  </TouchableOpacity>
                  {/*videoType === 'vod' && isFullScreen && onDownloadVod && DOWNLOAD_FEATURE_ENABLED && 
                    <RectButton
                      disallowInterruption={true}
                      onPress={() => { 
                        clearHidingDelay();
                        setShowSlider('download'); 
                      }}
                      style={{paddingRight: 10, paddingBottom: 2,}}
                    >
                      <DownloadBtn width={20} height={20} />
                    </RectButton>
                    */}
                  {
                    videoType === 'vod' && !adultMode && <RectButton
                      disallowInterruption={true}
                      onPress={onShare}>
                      <ProjectIcon width={30} height={30} />
                    </RectButton>
                  }
                </View>
              </LinearGradient>
              { }
              <MiddleControls
                fastForward={handleFastForward}
                togglePlayPause={handlePlayPause}
                videoType={videoType}
                paused={paused}
              />
              { }
              <LinearGradient
                colors={['transparent', 'black']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                style={styles.bottomBlur}
              >
                <BottomControls
                  currentTime={currentTime}
                  duration={duration > 0 ? duration : 0}
                  onSlideStart={handlePlayPause}
                  onSlideComplete={handlePlayPause}
                  onSlideCapture={onSeek}
                  onToggleFullScreen={handleFullScreen}
                  onEpisodeSelection={() => {
                    clearHidingDelay();
                    setShowSlider(showMoreType);
                  }}
                  isFullScreen={isFullScreen}
                  videoType={videoType}
                  onPlaybackRateChange={() => {
                    clearHidingDelay();
                    setShowSlider('playback');
                  }}
                  playbackRate={playbackRate}
                  onNextEpisode={onNextEpisode}
                  onLock={toggleLock}
                  showMoreType={showMoreType}
                  showSliderThumbnail={showSliderThumbnail}
                />
              </LinearGradient>
            </>
        )
      }
      {(UMENG_CHANNEL != "GOOGLE_PLAY" || Platform.OS === "ios") &&
        <AdultModeCountdownIndicator
          containerStyle={{
            position: 'absolute',
            bottom: showControls ? '20%' : 0,
            left: 0
          }}
        />
      }
    </View>
  );
});

const styles = StyleSheet.create({
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenBottom: {
    paddingBottom: 60,
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
  topBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 99,
  },
  videoHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidePanel: {
    height: '100%',
    width: 'auto',
    maxWidth: 400,
    minWidth: 200,
  },
  rateButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  unlock: {
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 300
  },
  backBtn: {
    padding: 20,
  }
});
