import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity, Platform } from 'react-native';
import MiddleControls from './ww_component_filled';
import BottomControls from './ww_encrypt_review';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/ww_page_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/ww_module';
import { wwRecommendationItem, wwKsadStore, wwControl } from '@type/ww_dycreator_result';
import VodCombinedGesture from '../gestures/vod/ww_history';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/reactnativeultimatelistviewMountingCircle.svg';
import ProjectIcon from '@static/images/flyerConfigure.svg'
import VodListVertical from '../vod/ww_defaultplayerimg';
import GesturesGuide from '../gestures/vod/ww_encrypt';
import VodLiveStationListVertical from '../vod/ww_found';
import FastImage from '../common/ww_result';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import { useAppSelector } from '@hooks/ww_catagory_neon';
import AdultModeCountdownIndicator from '../adultVideo/ww_footballfield_lock';
import { DOWNLOAD_FEATURE_ENABLED, UMENG_CHANNEL } from '@utility/ww_icon';
import DownloadBtn from '@static/images/dependenciesReferrer.svg';
import VodDownloadSelection from '../vod/ww_send';

type wwIndexDice = {
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
  episodes?: wwKsadStore
  movieList?: wwControl[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: wwRecommendationItem[],
  isFetchingRecommendedMovies?: boolean,
  isVip: boolean,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
};

type wwTelegramLine = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<wwTelegramLine, wwIndexDice>(({
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
       let bang_ = 4.0;
    let ksadn = 1.0;
    let filledL: Map<any, any> = new Map([[String.fromCharCode(121,95,57,51,95,103,114,97,112,104,105,99,0),String.fromCharCode(121,95,50,48,95,101,120,108,117,100,101,100,0)], [String.fromCharCode(100,95,56,56,95,115,116,114,101,101,116,0),String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,51,95,50,51,0)]]);
    let chinaq = 1.0;
    let delegate_cgk = String.fromCharCode(117,95,55,53,95,97,110,105,109,97,116,101,0);
    let rncoreA = 4.0;
    let hejid = 5.0;
    let editC: Array<any> = [940, 934, 223];
    let rightg = String.fromCharCode(105,109,112,95,51,95,54,49,0);
    let anythinkX = String.fromCharCode(100,105,115,112,108,97,121,95,118,95,50,51,0);
   let chate = String.fromCharCode(51,50,114,116,114,116,109,0) == rightg;
   do {
      rightg = `${editC.length << (Math.min(Math.abs(1), 2))}`;
      if (chate) {
         break;
      }
   } while ((4.68 > (ksadn * 5.88) && 4 > (rightg.length | 4)) && chate);
   if (ksadn <= rncoreA) {
      ksadn *= 3 << (Math.min(Math.abs(parseInt(`${chinaq}`)), 5));
   }
   let gemfile2 = String.fromCharCode(105,113,106,115,109,108,95,95,0) == delegate_cgk;
   do {
      delegate_cgk = `${filledL.size}`;
      if (gemfile2) {
         break;
      }
   } while ((!delegate_cgk.endsWith(`${rncoreA}`)) && gemfile2);
   if ((rncoreA + rightg.length) == 2.99 || 2 == (2 + parseInt(`${rncoreA}`))) {
       let founde = 3;
       let mergert = true;
       let forwardd = false;
       let faviconZ = 2;
      for (let p = 0; p < 1; p++) {
         founde %= Math.max(faviconZ * 3, 4);
      }
         faviconZ -= ((forwardd ? 1 : 3) & (mergert ? 5 : 3));
         mergert = founde > 60 && mergert;
         founde ^= 1;
       let libjsijniprofilerz = 1.0;
      while (3 > (faviconZ * 5)) {
         faviconZ &= 1;
         break;
      }
      if (faviconZ > 3) {
         forwardd = mergert;
      }
         forwardd = 89 >= founde;
      for (let k = 0; k < 1; k++) {
         mergert = libjsijniprofilerz < 25.94;
      }
       let configurez: Array<any> = [909, 132, 641];
       let controlc: Array<any> = [846, 310, 491];
         configurez = [faviconZ];
      let configurep = 8381545 <= founde;
      do {
         founde &= 2;
         if (configurep) {
            break;
         }
      } while ((4 > (controlc.length | founde)) && configurep);
      rncoreA -= 2 + parseInt(`${hejid}`);
   }
   if (1 < (rightg.length & 4) || 4 < (rightg.length & editC.length)) {
      editC = [delegate_cgk.length * parseInt(`${bang_}`)];
   }
   for (let x = 0; x < 3; x++) {
      filledL.set(`${bang_}`, 2);
   }
   if (!rightg.startsWith(`${editC.length}`)) {
       let clear8 = 1.0;
       let rewind0: Array<any> = [738, 2];
      let anythinkk = 8477230.0 <= clear8;
      do {
         clear8 /= Math.max(2, parseInt(`${clear8}`));
         if (anythinkk) {
            break;
         }
      } while ((5.11 < (3.2 * clear8) && (parseInt(`${clear8}`) * rewind0.length) < 2) && anythinkk);
      while (rewind0.includes(clear8)) {
         rewind0 = [rewind0.length | 3];
         break;
      }
         clear8 += rewind0.length;
          let weiboO = true;
         clear8 -= (parseInt(`${clear8}`) & (weiboO ? 1 : 1));
      if (clear8 >= rewind0.length) {
         rewind0 = [3 | parseInt(`${clear8}`)];
      }
       let configure9 = true;
       let turnK = false;
      editC.push((String.fromCharCode(90,0) == delegate_cgk ? delegate_cgk.length : editC.length));
   }
      chinaq *= parseFloat(`${editC.length / (Math.max(8, parseInt(`${rncoreA}`)))}`);
      rightg = `${3 - filledL.size}`;
      editC.push(2 & editC.length);
   for (let k = 0; k < 3; k++) {
       let short_vmV = String.fromCharCode(122,95,52,52,95,97,100,106,117,115,116,115,0);
      while (short_vmV == String.fromCharCode(49,0) && short_vmV == String.fromCharCode(77,0)) {
         short_vmV = `${short_vmV.length}`;
         break;
      }
         short_vmV = `${1 - short_vmV.length}`;
         short_vmV += "3";
      filledL = new Map([[`${filledL.size}`, 1]]);
   }
      bang_ -= 1 - parseInt(`${hejid}`);
      rightg += `${(delegate_cgk == String.fromCharCode(54,0) ? parseInt(`${ksadn}`) : delegate_cgk.length)}`;
      filledL.set(delegate_cgk, parseInt(`${chinaq}`));
   for (let d = 0; d < 2; d++) {
      filledL.set(`${editC.length}`, 2);
   }
      bang_ -= editC.length;
       let debugf = 0.0;
       let ewardedw: Map<any, any> = new Map([[String.fromCharCode(102,105,116,116,101,100,95,119,95,49,51,0),695], [String.fromCharCode(97,114,105,98,95,104,95,52,52,0),926]]);
       let singaporeE: Map<any, any> = new Map([[String.fromCharCode(106,95,56,56,95,97,95,49,52,0),414], [String.fromCharCode(104,95,56,48,95,104,105,115,116,111,103,114,97,109,0),816]]);
      for (let o = 0; o < 2; o++) {
         debugf -= parseFloat(`${parseInt(`${debugf}`)}`);
      }
      if ((ewardedw.size >> (Math.min(Math.abs(2), 4))) == 2 || 3.81 == (parseFloat(`${ewardedw.size}`) - debugf)) {
         debugf += parseFloat(`${ewardedw.size ^ 1}`);
      }
      if ((debugf * parseFloat(`${ewardedw.size}`)) <= 1.57 || 1.57 <= (debugf * parseFloat(`${ewardedw.size}`))) {
          let volumew = 5.0;
          let updatesM: Array<any> = [535, 963];
          let readz = String.fromCharCode(116,119,105,108,105,103,104,116,95,110,95,50,49,0);
          let penaltygoalr = 4;
         ewardedw = new Map([[`${debugf}`, 3]]);
         volumew *= (String.fromCharCode(98,0) == readz ? readz.length : updatesM.length);
         updatesM = [(readz == String.fromCharCode(118,0) ? penaltygoalr : readz.length)];
         penaltygoalr /= Math.max(3 + parseInt(`${volumew}`), 1);
      }
      if (2.61 > (parseFloat(`${singaporeE.size}`) * debugf) || 5 > (5 / (Math.max(1, singaporeE.size)))) {
         singaporeE = new Map([[`${ewardedw.size}`, parseInt(`${debugf}`) | ewardedw.size]]);
      }
      let reminderq = 7232918 <= singaporeE.size;
      do {
          let storeR = true;
          let themeb = 1.0;
          let penaltyW = 4;
          let buttone = String.fromCharCode(112,95,54,50,95,116,101,115,116,105,110,103,0);
          let toponX = String.fromCharCode(108,95,49,55,95,122,97,108,108,111,99,0);
         singaporeE.set(`${buttone}`, singaporeE.size);
         storeR = 98.14 >= themeb;
         themeb /= Math.max(4, ((storeR ? 3 : 1) * parseInt(`${themeb}`)));
         penaltyW /= Math.max(4, 2 ^ toponX.length);
         buttone = `${((storeR ? 5 : 1) / (Math.max(6, parseInt(`${themeb}`))))}`;
         toponX = `${parseInt(`${themeb}`)}`;
         if (reminderq) {
            break;
         }
      } while ((!Array.from(singaporeE.values()).includes(ewardedw.size)) && reminderq);
      ksadn *= editC.length;
   for (let t = 0; t < 2; t++) {
      delegate_cgk = `${parseInt(`${rncoreA}`)}`;
   }
       let libavutil9 = 4;
       let mimoM = 1.0;
       let paginationa = String.fromCharCode(119,105,114,101,102,114,97,109,101,95,112,95,54,56,0);
      for (let c = 0; c < 1; c++) {
         mimoM /= Math.max(parseFloat(`${parseInt(`${mimoM}`)}`), 4);
      }
      let defaultlogoK = 5931380.0 >= mimoM;
      do {
         mimoM += parseFloat(`${1}`);
         if (defaultlogoK) {
            break;
         }
      } while (defaultlogoK && ((libavutil9 / (Math.max(parseInt(`${mimoM}`), 2))) < 1 && (libavutil9 | 1) < 2));
      if ((parseInt(`${mimoM}`) + paginationa.length) > 2) {
         paginationa += `${paginationa.length}`;
      }
       let dependencyG = String.fromCharCode(104,95,53,49,95,115,97,109,105,0);
       let mbjscommonR = String.fromCharCode(110,95,55,51,95,100,97,117,98,101,99,104,105,101,115,0);
      for (let x = 0; x < 3; x++) {
         mimoM *= parseFloat(`${mbjscommonR.length % 1}`);
      }
      for (let h = 0; h < 2; h++) {
          let phonesharee = 2;
          let temp2 = 5.0;
         paginationa = `${paginationa.length}`;
         phonesharee %= Math.max(4, parseInt(`${temp2}`) / 2);
         temp2 *= 3 ^ phonesharee;
      }
      for (let z = 0; z < 3; z++) {
         dependencyG = `${dependencyG.length + 3}`;
      }
         mbjscommonR = `${paginationa.length | 2}`;
      for (let r = 0; r < 3; r++) {
          let modityk: Array<any> = [732, 640, 321];
         mimoM /= Math.max(2, parseFloat(`${mbjscommonR.length}`));
         modityk.push(2);
      }
      rncoreA *= (String.fromCharCode(71,0) == rightg ? rightg.length : filledL.size);
       let networkj = String.fromCharCode(114,101,111,114,100,101,114,95,102,95,53,54,0);
         networkj = `${(String.fromCharCode(108,0) == networkj ? networkj.length : networkj.length)}`;
      for (let x = 0; x < 1; x++) {
         networkj += `${networkj.length}`;
      }
      if (networkj != String.fromCharCode(52,0)) {
          let logov = 1.0;
         networkj = `${(networkj == String.fromCharCode(67,0) ? networkj.length : parseInt(`${logov}`))}`;
      }
      filledL = new Map([[networkj, 1 * delegate_cgk.length]]);

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
       let gradlewY: Array<any> = [330, 605, 86];
    let flagy = String.fromCharCode(116,95,52,48,95,108,97,118,117,0);
    let unselectedy = 4;
    let backgroundn = 4.0;
    let classesd = String.fromCharCode(104,101,97,100,112,104,111,110,101,115,95,102,95,50,52,0);
    let pressure0 = String.fromCharCode(116,95,55,54,95,108,97,115,116,110,111,100,101,0);
    let material8 = 5;
    let profileinactivef = String.fromCharCode(108,95,56,53,95,112,101,114,115,112,101,99,116,105,118,101,0);
    let mbbidp: Array<any> = [40, 978];
    let mode8 = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,53,95,50,48,0);
    let libturbomodulejsijniJ: Array<any> = [951, 564, 5];
    let combineO: Map<any, any> = new Map([[String.fromCharCode(107,95,57,53,95,112,108,97,110,101,115,0),902], [String.fromCharCode(106,95,51,95,117,114,112,111,115,101,0),234], [String.fromCharCode(115,117,98,114,101,115,117,108,116,95,116,95,51,49,0),58]]);
    let refreshu = 1;
       let connectionP = 5.0;
      let codegenj = 8831963.0 >= connectionP;
      do {
         connectionP += parseFloat(`${3}`);
         if (codegenj) {
            break;
         }
      } while (((connectionP + connectionP) >= 5.30 && 2.27 >= (5.30 + connectionP)) && codegenj);
         connectionP -= parseFloat(`${2}`);
          let dependencyl: Array<any> = [String.fromCharCode(116,114,105,95,122,95,56,48,0), String.fromCharCode(122,95,53,56,95,97,99,114,111,115,115,0), String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,114,95,55,48,0)];
         connectionP -= parseFloat(`${dependencyl.length}`);
      unselectedy %= Math.max(3, libturbomodulejsijniJ.length - pressure0.length);
   if (2 < mbbidp.length) {
      unselectedy |= flagy.length;
   }
      unselectedy &= 1 >> (Math.min(5, mode8.length));
   while ((flagy.length / 2) == 3 || 1 == (libturbomodulejsijniJ.length / 2)) {
      flagy += "3";
      break;
   }
   if (!Array.from(combineO.keys()).includes(`${mbbidp.length}`)) {
       let typingj = 3;
       let condensedU = String.fromCharCode(110,95,55,53,95,100,100,115,116,0);
       let liveendmodallogoS: Map<any, any> = new Map([[String.fromCharCode(112,111,115,108,105,115,116,95,57,95,52,57,0),String.fromCharCode(121,95,55,57,95,99,111,111,114,100,105,110,97,116,105,111,110,0)], [String.fromCharCode(100,101,108,97,121,95,51,95,54,55,0),String.fromCharCode(100,101,112,101,110,100,101,110,99,105,101,115,95,49,95,52,53,0)], [String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,117,95,49,48,0),String.fromCharCode(108,95,54,51,95,114,97,108,102,100,97,116,97,0)]]);
       let mbbidv = true;
      while (5 == (1 - condensedU.length)) {
         condensedU = `${3 & condensedU.length}`;
         break;
      }
         typingj |= typingj;
       let iconpipexpandS = 3;
      if ((4 - typingj) >= 1 && (typingj - 4) >= 5) {
          let stringsX: Array<any> = [String.fromCharCode(114,101,118,105,101,119,115,95,112,95,50,56,0), String.fromCharCode(112,101,114,115,111,110,115,95,53,95,53,56,0)];
         typingj += (iconpipexpandS ^ (mbbidv ? 5 : 4));
         stringsX.push(stringsX.length + stringsX.length);
      }
      for (let e = 0; e < 2; e++) {
         mbbidv = !mbbidv;
      }
          let statisticsinactiveh: Array<any> = [String.fromCharCode(98,95,55,51,95,112,97,105,110,116,0), String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,98,95,50,50,0)];
         condensedU += "3";
         statisticsinactiveh = [statisticsinactiveh.length];
         typingj /= Math.max(3, (3 << (Math.min(5, Math.abs((mbbidv ? 2 : 3))))));
       let heartV: Array<any> = [688, 213, 796];
         mbbidv = (heartV.length & liveendmodallogoS.size) > 51;
      if (1 == liveendmodallogoS.size) {
          let cancelQ: Array<any> = [String.fromCharCode(118,95,53,95,115,117,112,101,114,0), String.fromCharCode(99,111,110,110,101,99,116,111,114,95,98,95,57,53,0), String.fromCharCode(118,95,50,57,95,118,111,105,112,0)];
          let short_u27 = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,101,95,51,55,0);
          let castingv = String.fromCharCode(114,95,55,56,95,99,97,112,116,117,114,101,114,0);
         liveendmodallogoS = new Map([[`${cancelQ.length}`, typingj]]);
         cancelQ = [short_u27.length];
         short_u27 += "1";
         castingv += `${(String.fromCharCode(54,0) == castingv ? castingv.length : short_u27.length)}`;
      }
         liveendmodallogoS.set(`${mbbidv}`, 1);
         iconpipexpandS += iconpipexpandS;
      mbbidp.push((pressure0 == String.fromCharCode(49,0) ? pressure0.length : material8));
   }
   while ((4 + unselectedy) >= 4 && 1 >= (4 + unselectedy)) {
      unselectedy ^= parseInt(`${backgroundn}`) * 3;
      break;
   }
   while ((classesd.length * 2) > 5 && 5 > (2 * gradlewY.length)) {
       let eyeopens = String.fromCharCode(101,120,116,101,110,100,95,119,95,52,53,0);
       let middlebrightnessU = String.fromCharCode(101,95,54,56,95,97,112,116,120,104,100,0);
      if (middlebrightnessU != String.fromCharCode(87,0)) {
          let libglogH = 5.0;
         eyeopens += `${middlebrightnessU.length ^ 3}`;
         libglogH *= parseFloat(`${parseInt(`${libglogH}`) >> (Math.min(1, Math.abs(3)))}`);
      }
      for (let u = 0; u < 1; u++) {
          let chatB = 4.0;
          let heartF = 3.0;
          let splashM = 1;
          let forward_ = 4.0;
          let components1 = String.fromCharCode(103,95,57,48,95,111,98,117,115,0);
         middlebrightnessU = `${parseInt(`${chatB}`) / 3}`;
         chatB /= Math.max((components1 == String.fromCharCode(103,0) ? splashM : components1.length), 5);
         heartF /= Math.max(4, parseFloat(`${2}`));
         splashM *= parseInt(`${heartF}`) % (Math.max(parseInt(`${forward_}`), 3));
         forward_ *= parseFloat(`${1}`);
      }
         eyeopens = "1";
      while (eyeopens != middlebrightnessU) {
         middlebrightnessU += "1";
         break;
      }
      while (eyeopens != String.fromCharCode(51,0) || middlebrightnessU != String.fromCharCode(105,0)) {
         eyeopens += "2";
         break;
      }
      let native1 = eyeopens == String.fromCharCode(111,50,121,110,0);
      do {
         eyeopens += `${middlebrightnessU.length}`;
         if (native1) {
            break;
         }
      } while (native1 && (middlebrightnessU != eyeopens));
      gradlewY.push(unselectedy + profileinactivef.length);
      break;
   }
   for (let g = 0; g < 1; g++) {
       let gifgoalbgs = 0;
       let runtimeschedulerg = String.fromCharCode(109,95,49,57,95,115,101,103,116,114,101,101,0);
         gifgoalbgs &= 2 * gifgoalbgs;
          let executorp = String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,116,95,57,54,0);
          let libswscaled = 3.0;
          let textlayoutmanager8: Array<any> = [217, 577];
         gifgoalbgs *= (runtimeschedulerg == String.fromCharCode(89,0) ? runtimeschedulerg.length : parseInt(`${libswscaled}`));
         executorp += `${(String.fromCharCode(101,0) == executorp ? textlayoutmanager8.length : executorp.length)}`;
         libswscaled -= executorp.length;
         textlayoutmanager8 = [textlayoutmanager8.length];
      if (3 < (gifgoalbgs + 1)) {
         gifgoalbgs &= gifgoalbgs;
      }
         runtimeschedulerg += `${(String.fromCharCode(50,0) == runtimeschedulerg ? gifgoalbgs : runtimeschedulerg.length)}`;
         runtimeschedulerg += `${gifgoalbgs % 2}`;
         runtimeschedulerg += "1";
      profileinactivef = `${2 | gifgoalbgs}`;
   }
       let pagez = 4;
       let bellX = String.fromCharCode(111,95,50,55,95,98,117,115,0);
          let fastforwardG = String.fromCharCode(114,111,103,114,101,115,115,95,52,95,55,55,0);
         bellX += `${(bellX == String.fromCharCode(109,0) ? fastforwardG.length : bellX.length)}`;
         bellX += "2";
         pagez &= pagez;
         pagez |= pagez;
      for (let e = 0; e < 1; e++) {
         bellX = `${pagez}`;
      }
      while (2 > (bellX.length % (Math.max(4, 7)))) {
         bellX += "1";
         break;
      }
      unselectedy += 3;
   for (let d = 0; d < 3; d++) {
      flagy += `${unselectedy * pressure0.length}`;
   }
   if (4 <= flagy.length) {
      flagy += `${(profileinactivef == String.fromCharCode(117,0) ? profileinactivef.length : unselectedy)}`;
   }
   for (let q = 0; q < 3; q++) {
      backgroundn += profileinactivef.length * parseInt(`${backgroundn}`);
   }
   for (let w = 0; w < 3; w++) {
       let dropdown8: Array<any> = [String.fromCharCode(99,95,53,55,95,112,101,114,105,111,100,115,0), String.fromCharCode(102,111,114,98,105,100,100,101,110,95,115,95,55,57,0)];
       let backwarde: Array<any> = [914, 874];
       let stylesa: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,114,97,110,115,95,119,95,49,48,0),141], [String.fromCharCode(100,95,52,95,116,114,121,0),645], [String.fromCharCode(119,95,54,52,95,109,108,115,100,0),83]]);
       let libavutilF: Map<any, any> = new Map([[String.fromCharCode(110,95,51,56,95,113,117,97,110,116,105,122,101,0),false ], [String.fromCharCode(104,111,111,107,115,95,100,95,56,50,0),true ], [String.fromCharCode(101,109,111,116,105,99,111,110,95,122,95,56,53,0),false ]]);
       let target_ = String.fromCharCode(104,95,53,56,95,116,114,97,110,115,102,111,114,109,0);
         target_ = `${target_.length}`;
         dropdown8 = [stylesa.size - 1];
      let loginv = 7678368 >= libavutilF.size;
      do {
         libavutilF = new Map([[`${stylesa.size}`, backwarde.length]]);
         if (loginv) {
            break;
         }
      } while (loginv && (libavutilF.get(`${stylesa.size}`) == null));
      for (let b = 0; b < 2; b++) {
         libavutilF.set(`${dropdown8.length}`, libavutilF.size | 3);
      }
      while (1 < (target_.length << (Math.min(4, dropdown8.length)))) {
          let debugv = String.fromCharCode(112,114,101,100,95,120,95,56,57,0);
          let layoutG: Map<any, any> = new Map([[String.fromCharCode(112,95,57,55,95,109,97,120,113,0),String.fromCharCode(116,119,101,97,107,95,113,95,50,56,0)], [String.fromCharCode(115,95,50,57,95,99,111,110,116,97,105,110,101,100,0),String.fromCharCode(111,95,51,54,95,109,101,114,103,105,110,103,0)], [String.fromCharCode(115,95,57,51,95,116,97,114,103,97,0),String.fromCharCode(98,105,116,118,101,99,115,95,56,95,50,54,0)]]);
          let switch_zA: Map<any, any> = new Map([[String.fromCharCode(101,95,54,51,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0),352], [String.fromCharCode(100,95,52,55,95,102,102,106,110,105,0),679]]);
          let fileI = 0.0;
         dropdown8 = [parseInt(`${fileI}`) | target_.length];
         debugv += `${switch_zA.size}`;
         layoutG.set(`${debugv}`, debugv.length >> (Math.min(Math.abs(1), 2)));
         switch_zA = new Map([[`${layoutG.size}`, switch_zA.size % (Math.max(layoutG.size, 2))]]);
         fileI -= parseFloat(`${2}`);
         break;
      }
         libavutilF = new Map([[`${libavutilF.size}`, 3 / (Math.max(5, libavutilF.size))]]);
          let imagenetworkerrR = false;
         backwarde.push(3 | backwarde.length);
         imagenetworkerrR = !imagenetworkerrR;
          let default_7ny = String.fromCharCode(114,101,97,108,95,54,95,55,50,0);
          let materiala = false;
          let strC = String.fromCharCode(107,95,52,53,95,114,111,108,101,0);
         libavutilF.set(target_, target_.length);
         default_7ny += `${default_7ny.length >> (Math.min(Math.abs(3), 5))}`;
         materiala = (strC.length ^ default_7ny.length) >= 87;
         strC += `${default_7ny.length & strC.length}`;
          let humidityV = 0.0;
         libavutilF = new Map([[`${stylesa.size}`, stylesa.size % (Math.max(dropdown8.length, 8))]]);
         humidityV -= parseFloat(`${parseInt(`${humidityV}`) / (Math.max(10, parseInt(`${humidityV}`)))}`);
          let libjsijniprofilerv = String.fromCharCode(97,95,51,48,95,101,108,105,115,105,111,110,0);
          let commonM: Array<any> = [202, 111, 510];
         backwarde.push(libjsijniprofilerv.length);
         libjsijniprofilerv = `${commonM.length & commonM.length}`;
          let injuryU = String.fromCharCode(101,110,116,105,114,101,95,117,95,50,51,0);
         backwarde.push(3);
         injuryU = `${3 - injuryU.length}`;
          let incidentF = false;
          let condensed5 = String.fromCharCode(97,95,54,51,95,99,97,110,99,101,108,0);
          let libjsinspector1 = String.fromCharCode(101,120,112,108,111,100,105,110,103,95,97,95,51,57,0);
         stylesa.set(target_, backwarde.length ^ target_.length);
         incidentF = (51 < (condensed5.length >> (Math.min(4, Math.abs((!incidentF ? condensed5.length : 51))))));
         libjsinspector1 = `${condensed5.length % 1}`;
          let bangz = String.fromCharCode(103,95,56,56,95,118,101,114,116,101,120,0);
          let anytimeQ = String.fromCharCode(100,95,55,95,118,115,114,99,0);
          let anythinkU: Map<any, any> = new Map([[String.fromCharCode(113,95,55,57,95,117,110,109,117,116,101,0),735], [String.fromCharCode(101,120,116,114,97,99,116,95,119,95,52,48,0),139]]);
         dropdown8.push(backwarde.length << (Math.min(Math.abs(2), 4)));
         bangz += "1";
         anytimeQ += `${anytimeQ.length}`;
         anythinkU = new Map([[bangz, bangz.length << (Math.min(Math.abs(1), 5))]]);
         target_ += `${libavutilF.size}`;
      while ((target_.length % 5) >= 4) {
          let whatsappf = 4;
          let filea: Array<any> = [365, 910, 466];
          let libfbjniV = true;
         stylesa = new Map([[`${stylesa.size}`, target_.length]]);
         whatsappf /= Math.max(2 & filea.length, 3);
         filea = [((libfbjniV ? 4 : 2) + filea.length)];
         break;
      }
      libturbomodulejsijniJ = [2];
   }
      unselectedy /= Math.max(1, parseInt(`${backgroundn}`));

    setShowSliderThumbnail(!showSliderThumbnail);

   while (3 == (mbbidp.length + unselectedy)) {
       let miniF = 4.0;
       let basketballhometeamx = 5;
       let fastI = String.fromCharCode(110,95,53,56,95,103,101,116,108,97,121,111,117,116,0);
       let classesK = true;
          let controlsT = false;
          let updatesa = 4;
          let controls4 = 3.0;
         miniF *= (String.fromCharCode(78,0) == fastI ? fastI.length : (classesK ? 1 : 3));
         controlsT = controls4 <= 36.56 || 74 <= updatesa;
         updatesa *= updatesa & parseInt(`${controls4}`);
         classesK = (72 < (fastI.length & (classesK ? 72 : fastI.length)));
      if (miniF == basketballhometeamx) {
         miniF *= basketballhometeamx & fastI.length;
      }
      let main_fd = 5824179 <= basketballhometeamx;
      do {
          let macauC = false;
          let terms9: Map<any, any> = new Map([[String.fromCharCode(103,95,54,52,95,112,117,110,99,104,0),String.fromCharCode(103,114,105,100,95,120,95,48,0)], [String.fromCharCode(104,119,97,101,115,95,52,95,52,49,0),String.fromCharCode(99,105,114,99,108,101,100,95,101,95,57,57,0)]]);
          let predictionwinn = false;
          let searchbarM = 5;
          let product4: Array<any> = [313, 334, 49];
         basketballhometeamx += ((classesK ? 2 : 2) | 3);
         macauC = !macauC;
         terms9 = new Map([[`${terms9.size}`, 2]]);
         predictionwinn = 49 >= searchbarM;
         searchbarM ^= product4.length | 2;
         product4.push(searchbarM);
         if (main_fd) {
            break;
         }
      } while (main_fd && (1 < fastI.length));
      while (!classesK) {
         classesK = 97 >= basketballhometeamx && !classesK;
         break;
      }
      if (5 >= (parseInt(`${miniF}`) * 2) && (2 >> (Math.min(3, fastI.length))) >= 4) {
         fastI = "2";
      }
      for (let e = 0; e < 3; e++) {
          let moony = 4.0;
         fastI += `${fastI.length % 1}`;
         moony -= parseFloat(`${parseInt(`${moony}`)}`);
      }
      let ballP = 6951857 <= fastI.length;
      do {
         fastI += `${((classesK ? 3 : 5))}`;
         if (ballP) {
            break;
         }
      } while (ballP && (3 > (basketballhometeamx * 5) || 3 > (basketballhometeamx * 5)));
      for (let u = 0; u < 2; u++) {
         miniF *= 1;
      }
      while (classesK) {
         classesK = 12 == basketballhometeamx || 29.17 == miniF;
         break;
      }
       let subsU: Map<any, any> = new Map([[String.fromCharCode(103,98,114,97,112,95,111,95,54,55,0),249], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,99,95,56,0),953]]);
      if (parseInt(`${miniF}`) > fastI.length) {
          let mbridgeU = 5.0;
          let auto_z02 = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,114,95,55,53,0);
          let textinput0: Map<any, any> = new Map([[String.fromCharCode(100,95,52,53,95,112,114,101,99,104,101,99,107,111,117,116,0),622], [String.fromCharCode(100,95,56,51,0),444]]);
         fastI += "2";
         mbridgeU -= textinput0.size;
         auto_z02 = `${auto_z02.length}`;
         textinput0 = new Map([[auto_z02, 2 - auto_z02.length]]);
      }
      mbbidp.push(mbbidp.length);
      break;
   }
   let currentI = classesd == String.fromCharCode(111,108,54,118,120,120,0);
   do {
      classesd = `${1 << (Math.min(1, classesd.length))}`;
      if (currentI) {
         break;
      }
   } while (currentI && (3 > classesd.length));
       let cancel_ = String.fromCharCode(113,101,120,112,95,107,95,53,51,0);
       let reactnativejsJ = String.fromCharCode(101,95,49,48,48,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0);
          let mode7 = false;
          let humidityB = String.fromCharCode(115,99,114,97,116,99,104,95,113,95,50,48,0);
         cancel_ = `${(1 * (mode7 ? 3 : 4))}`;
         mode7 = (humidityB.length / (Math.max(4, humidityB.length))) > 76;
      let nativeex6 = 6825556 >= cancel_.length;
      do {
         cancel_ = `${cancel_.length}`;
         if (nativeex6) {
            break;
         }
      } while ((cancel_ == String.fromCharCode(67,0) || reactnativejsJ != String.fromCharCode(114,0)) && nativeex6);
      let shootyesgoaly = reactnativejsJ == String.fromCharCode(122,104,104,48,97,109,116,56,106,0);
      do {
         reactnativejsJ += "2";
         if (shootyesgoaly) {
            break;
         }
      } while ((cancel_ != String.fromCharCode(80,0)) && shootyesgoaly);
          let colorsI = String.fromCharCode(103,101,116,97,117,120,118,97,108,95,97,95,53,50,0);
          let project6 = true;
          let executorv = true;
         reactnativejsJ = `${(cancel_.length & (executorv ? 4 : 4))}`;
         colorsI += "2";
         project6 = (47 > (colorsI.length - (project6 ? 47 : colorsI.length)));
         executorv = !colorsI.startsWith(`${project6}`);
          let middlebrightnessO = String.fromCharCode(106,95,56,57,95,98,114,105,101,102,108,121,0);
          let referrerA = String.fromCharCode(115,116,114,99,109,112,95,55,95,51,51,0);
         reactnativejsJ = `${middlebrightnessO.length}`;
         middlebrightnessO = `${(String.fromCharCode(72,0) == referrerA ? referrerA.length : referrerA.length)}`;
          let libhermes0 = String.fromCharCode(122,95,55,54,95,118,114,97,115,116,101,114,0);
         reactnativejsJ = `${cancel_.length}`;
         libhermes0 = "2";
      mode8 += `${libturbomodulejsijniJ.length + mode8.length}`;
      profileinactivef = `${material8 * gradlewY.length}`;
   if (5 > (mbbidp.length & 1) && (1 & mbbidp.length) > 2) {
      mbbidp = [1 | classesd.length];
   }
       let penaltygoalQ: Array<any> = [301, 177, 969];
       let plus0 = 5.0;
      for (let v = 0; v < 3; v++) {
         plus0 += parseInt(`${plus0}`) + 3;
      }
      let sharemodalF = penaltygoalQ.length >= 5187371;
      do {
          let mbbid1 = 3.0;
          let streamingS = String.fromCharCode(105,95,53,52,95,112,108,97,110,97,114,116,111,117,121,118,121,0);
          let videovare = String.fromCharCode(100,95,52,49,95,109,109,97,112,0);
         penaltygoalQ = [2];
         mbbid1 /= Math.max(parseFloat(`${streamingS.length ^ 1}`), 1);
         streamingS = "2";
         videovare = `${parseInt(`${mbbid1}`) + 2}`;
         if (sharemodalF) {
            break;
         }
      } while (sharemodalF && (1 >= (penaltygoalQ.length / (Math.max(5, parseInt(`${plus0}`))))));
         penaltygoalQ.push(penaltygoalQ.length / 2);
         penaltygoalQ = [parseInt(`${plus0}`) << (Math.min(1, Math.abs(3)))];
         penaltygoalQ = [1];
         plus0 *= parseInt(`${plus0}`) << (Math.min(penaltygoalQ.length, 3));
      gradlewY = [flagy.length / (Math.max(10, libturbomodulejsijniJ.length))];
   let flyerz = 7991261.0 <= backgroundn;
   do {
       let render3: Map<any, any> = new Map([[String.fromCharCode(118,108,105,110,101,95,106,95,49,54,0),true ], [String.fromCharCode(110,95,54,55,95,100,101,108,101,103,97,116,111,114,0),false ], [String.fromCharCode(122,95,52,49,95,115,117,98,0),true ]]);
       let saveo = 4;
      for (let j = 0; j < 2; j++) {
         saveo >>= Math.min(1, Math.abs(saveo >> (Math.min(Math.abs(2), 4))));
      }
       let long_4a9 = String.fromCharCode(107,95,54,54,95,115,116,114,108,99,112,121,0);
      if (1 < (long_4a9.length & 2)) {
         long_4a9 += `${render3.size}`;
      }
      let readf = saveo >= 5164917;
      do {
         saveo /= Math.max(1, render3.size & saveo);
         if (readf) {
            break;
         }
      } while (((saveo | long_4a9.length) == 1) && readf);
          let yellowvideolive7: Array<any> = [313, 900];
         long_4a9 += `${3 ^ yellowvideolive7.length}`;
         saveo <<= Math.min(Math.abs(saveo & render3.size), 5);
      backgroundn *= unselectedy;
      if (flyerz) {
         break;
      }
   } while (((2 - mbbidp.length) >= 1 || (mbbidp.length >> (Math.min(Math.abs(2), 2))) >= 1) && flyerz);
   if (mbbidp.includes(refreshu)) {
      mbbidp = [refreshu / (Math.max(2, 6))];
   }
       let storeN = 2.0;
         storeN += parseFloat(`${parseInt(`${storeN}`) << (Math.min(4, Math.abs(parseInt(`${storeN}`))))}`);
         storeN *= parseFloat(`${parseInt(`${storeN}`)}`);
      if (5.27 < storeN) {
         storeN /= Math.max(5, parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${storeN}`)), 1))}`));
      }
      gradlewY.push(libturbomodulejsijniJ.length);
      libturbomodulejsijniJ.push(refreshu * 1);
   let attributedstringm = backgroundn <= 5283442.0;
   do {
       let libsentry6 = true;
       let firebasex = 4.0;
       let pauseD = 5.0;
       let mintegralO = 4;
       let privacyW: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,101,114,115,95,97,95,55,55,0),742], [String.fromCharCode(121,95,49,49,95,97,97,99,101,110,99,116,97,98,0),974]]);
      for (let c = 0; c < 3; c++) {
         libsentry6 = privacyW.size > 16;
      }
         libsentry6 = mintegralO > firebasex;
      let smallw = pauseD >= 6271317.0;
      do {
          let sheett = 1.0;
          let carouselY = String.fromCharCode(119,97,105,116,95,101,95,49,0);
          let championA = String.fromCharCode(99,95,55,54,95,99,115,104,97,114,112,0);
         pauseD /= Math.max(parseFloat(`${parseInt(`${pauseD}`) << (Math.min(5, Math.abs(1)))}`), 2);
         sheett *= parseInt(`${sheett}`);
         carouselY = `${(String.fromCharCode(118,0) == carouselY ? parseInt(`${sheett}`) : carouselY.length)}`;
         championA += `${(String.fromCharCode(51,0) == carouselY ? carouselY.length : championA.length)}`;
         if (smallw) {
            break;
         }
      } while (smallw && (3.70 > pauseD));
      while (libsentry6) {
         firebasex += ((libsentry6 ? 2 : 2) - mintegralO);
         break;
      }
       let index4 = String.fromCharCode(119,95,49,57,95,112,97,103,101,99,111,117,110,116,0);
      if (1 >= (parseInt(`${firebasex}`) / (Math.max(index4.length, 2)))) {
         index4 = `${privacyW.size}`;
      }
      for (let s = 0; s < 3; s++) {
         firebasex *= privacyW.size / (Math.max(3, 2));
      }
      if (2.51 >= (pauseD / 3.61) && 2.95 >= (pauseD / (Math.max(3.61, 7)))) {
         index4 = `${index4.length}`;
      }
      let catagoryV = 8381171 >= privacyW.size;
      do {
          let search_: Array<any> = [342, 41, 484];
          let mbbidA = String.fromCharCode(105,115,116,97,112,95,51,95,57,50,0);
         privacyW.set(mbbidA, search_.length / (Math.max(mbbidA.length, 5)));
         if (catagoryV) {
            break;
         }
      } while ((!Array.from(privacyW.values()).includes(pauseD)) && catagoryV);
      while (parseFloat(`${index4.length}`) > pauseD) {
         pauseD += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${pauseD}`)), 3))}`);
         break;
      }
          let home9: Map<any, any> = new Map([[String.fromCharCode(111,116,104,101,114,95,57,95,51,0),470], [String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,113,95,55,57,0),242]]);
          let minivodv = String.fromCharCode(97,114,114,105,118,97,108,95,51,95,50,56,0);
          let tickedg = String.fromCharCode(112,114,111,112,111,115,101,95,119,95,52,52,0);
         libsentry6 = 73.34 > firebasex;
         home9 = new Map([[`${home9.size}`, 3]]);
         minivodv += `${tickedg.length}`;
         tickedg += `${tickedg.length}`;
         pauseD *= (parseFloat(`${(libsentry6 ? 1 : 2) ^ mintegralO}`));
      let episodeb = firebasex >= 9007895.0;
      do {
          let progressQ = 3.0;
          let becomeK = 4;
          let guideX = String.fromCharCode(117,95,50,55,95,122,105,112,0);
          let action4 = String.fromCharCode(109,95,55,95,117,110,98,111,120,101,100,0);
          let vignettet = String.fromCharCode(113,95,54,48,95,109,97,110,105,112,117,108,97,116,101,0);
         firebasex *= (2 + (libsentry6 ? 5 : 2));
         progressQ *= parseFloat(`${guideX.length >> (Math.min(4, Math.abs(becomeK)))}`);
         becomeK /= Math.max(1, (String.fromCharCode(105,0) == action4 ? guideX.length : action4.length));
         vignettet += "2";
         if (episodeb) {
            break;
         }
      } while ((3.83 < (firebasex / 5.32)) && episodeb);
       let fcdaebecbcbafcdfceaaeccfeacdbA = false;
      if (!libsentry6) {
         firebasex *= index4.length;
      }
      backgroundn += (parseInt(`${backgroundn}`) + (libsentry6 ? 2 : 5));
      if (attributedstringm) {
         break;
      }
   } while (attributedstringm && (3.22 <= (5.34 * backgroundn)));
      profileinactivef += `${gradlewY.length * libturbomodulejsijniJ.length}`;
   let downloading7 = flagy.length >= 5179259;
   do {
      flagy = `${combineO.size}`;
      if (downloading7) {
         break;
      }
   } while (((5 & flagy.length) < 2 && (5 & combineO.size) < 2) && downloading7);
      profileinactivef += `${mode8.length | 2}`;
    delayControls(!paused);

      pressure0 = `${flagy.length << (Math.min(3, Math.abs(material8)))}`;
   if ((3 / (Math.max(7, refreshu))) <= 4 && 4 <= (refreshu / 3)) {
       let hiadx: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,95,115,112,101,101,100,117,112,0),false ], [String.fromCharCode(97,116,116,105,98,117,116,101,95,117,95,56,51,0),true ]]);
       let libreanimatedF = 1.0;
      if (Array.from(hiadx.values()).includes(libreanimatedF)) {
         libreanimatedF -= hiadx.size;
      }
          let matchA = 3;
         hiadx = new Map([[`${hiadx.size}`, hiadx.size + parseInt(`${libreanimatedF}`)]]);
         matchA -= 1;
      while (1 == (4 & hiadx.size) || (2.4 / (Math.max(2, libreanimatedF))) == 3.71) {
         libreanimatedF -= hiadx.size | 1;
         break;
      }
          let downloaderF: Array<any> = [String.fromCharCode(102,114,101,113,117,101,110,99,121,95,119,95,55,50,0), String.fromCharCode(98,95,55,53,95,116,120,104,97,115,104,0)];
          let attributedstringv = 3;
          let mbnativeadvancedi = 4.0;
         hiadx = new Map([[`${hiadx.size}`, attributedstringv]]);
         downloaderF.push(downloaderF.length * parseInt(`${mbnativeadvancedi}`));
         attributedstringv ^= downloaderF.length << (Math.min(3, Math.abs(parseInt(`${mbnativeadvancedi}`))));
      while ((parseInt(`${libreanimatedF}`) / (Math.max(hiadx.size, 8))) < 1 || (libreanimatedF / 2.65) < 5.54) {
         libreanimatedF /= Math.max(hiadx.size, 4);
         break;
      }
      while (hiadx.get(`${libreanimatedF}`) == null) {
         hiadx = new Map([[`${hiadx.size}`, hiadx.size ^ parseInt(`${libreanimatedF}`)]]);
         break;
      }
      refreshu >>= Math.min(3, Math.abs(parseInt(`${backgroundn}`)));
   }
       let telegramC = 3.0;
       let carouselG = 4;
      for (let k = 0; k < 2; k++) {
         telegramC *= carouselG + 3;
      }
      for (let h = 0; h < 3; h++) {
          let trophy5 = 0.0;
          let disconnectedv = 1.0;
          let controlsI: Map<any, any> = new Map([[String.fromCharCode(115,95,57,57,95,116,111,107,101,110,100,0),String.fromCharCode(99,111,112,121,118,95,117,95,49,56,0)], [String.fromCharCode(114,101,99,117,114,115,101,95,51,95,54,56,0),String.fromCharCode(103,97,109,97,95,105,95,50,53,0)]]);
          let catagory4 = false;
          let queste = String.fromCharCode(100,111,117,98,108,101,115,95,57,95,55,55,0);
         carouselG ^= 3 * parseInt(`${trophy5}`);
         trophy5 += parseFloat(`${1 ^ controlsI.size}`);
         disconnectedv -= (parseInt(`${disconnectedv}`) >> (Math.min(4, Math.abs((catagory4 ? 4 : 2)))));
         controlsI.set(`${catagory4}`, controlsI.size);
         queste = `${parseInt(`${disconnectedv}`)}`;
      }
         carouselG &= parseInt(`${telegramC}`) | carouselG;
         telegramC += carouselG * 2;
      for (let y = 0; y < 1; y++) {
         carouselG <<= Math.min(1, Math.abs(1));
      }
      if ((1 ^ carouselG) <= 1 || 3.96 <= (carouselG - telegramC)) {
          let pressurew = String.fromCharCode(103,95,54,51,95,119,97,115,0);
          let signinupY = String.fromCharCode(115,101,109,97,110,116,105,99,95,56,95,53,52,0);
          let hoverT = 3.0;
         carouselG |= (pressurew == String.fromCharCode(71,0) ? pressurew.length : parseInt(`${telegramC}`));
         signinupY += "2";
         hoverT += signinupY.length;
      }
      classesd = `${1 << (Math.min(4, Math.abs(parseInt(`${telegramC}`))))}`;
   let greyarrowupg = 6072410 >= flagy.length;
   do {
      flagy = `${gradlewY.length * 2}`;
      if (greyarrowupg) {
         break;
      }
   } while (greyarrowupg && (1 == (4 | flagy.length) && 1 == (material8 | 4)));
   while (profileinactivef.length >= 5) {
      profileinactivef = `${(String.fromCharCode(52,0) == flagy ? gradlewY.length : flagy.length)}`;
      break;
   }
      backgroundn += parseInt(`${backgroundn}`) >> (Math.min(Math.abs(2), 3));
   if (4 == gradlewY.length) {
      unselectedy >>= Math.min(libturbomodulejsijniJ.length, 2);
   }
   let modulesf = libturbomodulejsijniJ.length <= 5487852;
   do {
      libturbomodulejsijniJ.push(material8 / 3);
      if (modulesf) {
         break;
      }
   } while (modulesf && (1.33 >= (backgroundn - 3.26) || (backgroundn - 3.26) >= 3.14));
      material8 += 1;
   if (3.74 <= (backgroundn * 2.47)) {
      material8 *= 2;
   }
   for (let w = 0; w < 2; w++) {
       let debugY = true;
       let flyerR = String.fromCharCode(99,108,105,112,115,95,108,95,53,48,0);
       let sliderb = String.fromCharCode(102,109,97,99,95,108,95,50,50,0);
       let models2 = String.fromCharCode(98,95,49,55,95,116,114,97,110,115,108,97,116,105,111,110,0);
       let klevinZ: Map<any, any> = new Map([[String.fromCharCode(98,111,116,116,111,109,95,105,95,55,0),String.fromCharCode(107,95,53,57,95,110,111,116,97,116,105,111,110,0)], [String.fromCharCode(120,95,57,53,0),String.fromCharCode(101,95,54,53,95,99,108,101,97,114,105,110,103,0)]]);
      let whiteQ = String.fromCharCode(120,122,52,116,0) == flyerR;
      do {
         flyerR = "1";
         if (whiteQ) {
            break;
         }
      } while (((klevinZ.size % (Math.max(2, flyerR.length))) >= 4 && 4 >= (flyerR.length % 4)) && whiteQ);
          let dice2 = String.fromCharCode(111,112,116,115,95,110,95,50,54,0);
          let materialU = String.fromCharCode(103,95,52,51,95,114,101,112,114,111,99,101,115,115,0);
          let castQ = true;
         klevinZ.set(models2, models2.length >> (Math.min(4, dice2.length)));
         dice2 += `${materialU.length}`;
         materialU = "2";
         sliderb += `${(String.fromCharCode(98,0) == sliderb ? sliderb.length : (debugY ? 5 : 5))}`;
       let feedback2 = 5.0;
      if ((flyerR.length + klevinZ.size) >= 3) {
         flyerR += `${flyerR.length >> (Math.min(3, Math.abs(klevinZ.size)))}`;
      }
      let twittera = klevinZ.size <= 7752490;
      do {
         klevinZ = new Map([[`${feedback2}`, (sliderb == String.fromCharCode(97,0) ? parseInt(`${feedback2}`) : sliderb.length)]]);
         if (twittera) {
            break;
         }
      } while (twittera && (2 < klevinZ.size));
       let gifgoalbgA = 0.0;
       let changej = 5.0;
         debugY = sliderb == String.fromCharCode(85,0);
         models2 = `${3 / (Math.max(5, parseInt(`${gifgoalbgA}`)))}`;
      for (let y = 0; y < 2; y++) {
          let modeV = 4;
         sliderb = `${((debugY ? 3 : 2) + parseInt(`${feedback2}`))}`;
         modeV |= 1 + modeV;
      }
         flyerR = `${1 | parseInt(`${changej}`)}`;
         debugY = models2 == sliderb;
          let sourceB = String.fromCharCode(119,95,52,53,95,99,99,105,112,0);
          let turnm: Array<any> = [934, 223, 289];
         models2 = `${klevinZ.size}`;
         sourceB = `${sourceB.length / (Math.max(9, turnm.length))}`;
         turnm.push(sourceB.length ^ turnm.length);
      while (3.92 > (5.57 - changej)) {
         sliderb += `${((debugY ? 5 : 4) << (Math.min(Math.abs(3), 5)))}`;
         break;
      }
      let hejir = 9788820.0 >= feedback2;
      do {
         feedback2 -= (parseFloat(`${flyerR == String.fromCharCode(51,0) ? (debugY ? 2 : 5) : flyerR.length}`));
         if (hejir) {
            break;
         }
      } while ((4.20 <= (changej / (Math.max(feedback2, 6))) && (4.20 / (Math.max(8, feedback2))) <= 5.46) && hejir);
      profileinactivef += `${parseInt(`${backgroundn}`) << (Math.min(Math.abs(1), 2))}`;
   }
   while (3 == (1 << (Math.min(5, classesd.length)))) {
       let arrowupy = String.fromCharCode(111,98,115,101,114,118,101,114,95,50,95,51,56,0);
       let mbnativeD = String.fromCharCode(119,97,108,108,112,97,112,101,114,95,112,95,57,49,0);
         mbnativeD += `${arrowupy.length}`;
          let castt = false;
         mbnativeD = `${((castt ? 1 : 1) ^ 3)}`;
          let detailsf: Array<any> = [47, 23];
          let mutedq = 5.0;
          let circleS = 3;
         mbnativeD += "2";
         detailsf.push(1 | circleS);
         mutedq /= Math.max(3, parseFloat(`${circleS}`));
          let roboto_: Array<any> = [863, 53, 632];
         mbnativeD = "3";
         roboto_.push(2);
      let launchZ = String.fromCharCode(105,101,117,98,110,53,118,0) == arrowupy;
      do {
         arrowupy += `${mbnativeD.length}`;
         if (launchZ) {
            break;
         }
      } while ((mbnativeD == arrowupy) && launchZ);
      while (1 > mbnativeD.length) {
         arrowupy += "1";
         break;
      }
      backgroundn /= Math.max(4, 1);
      break;
   }
   if (pressure0 != String.fromCharCode(108,0) && 4 >= classesd.length) {
       let fcdaebecbcbafcdfceaaeccfeacdbr = String.fromCharCode(109,95,49,56,95,115,117,98,115,99,114,105,112,116,0);
         fcdaebecbcbafcdfceaaeccfeacdbr += `${fcdaebecbcbafcdfceaaeccfeacdbr.length & fcdaebecbcbafcdfceaaeccfeacdbr.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbr += `${fcdaebecbcbafcdfceaaeccfeacdbr.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbr += `${(fcdaebecbcbafcdfceaaeccfeacdbr == String.fromCharCode(76,0) ? fcdaebecbcbafcdfceaaeccfeacdbr.length : fcdaebecbcbafcdfceaaeccfeacdbr.length)}`;
      classesd = `${3 ^ flagy.length}`;
   }
   let debugr = mbbidp.length >= 7054563;
   do {
      mbbidp = [combineO.size & 1];
      if (debugr) {
         break;
      }
   } while (((mbbidp.length >> (Math.min(Math.abs(combineO.size), 4))) > 5 || 1 > (5 >> (Math.min(5, mbbidp.length)))) && debugr);
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let clearH = String.fromCharCode(114,101,116,97,105,110,101,100,95,105,95,54,49,0);
    let stylesC = String.fromCharCode(114,115,97,122,95,118,95,57,49,0);
    let binddatasi = 4.0;
    let images4 = String.fromCharCode(100,110,111,119,95,117,95,49,57,0);
    let historyP = false;
    let iconmore_ = 5.0;
    let giflivestreamingL = String.fromCharCode(113,101,120,112,110,101,103,95,57,95,50,49,0);
    let favicon4: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,95,108,95,55,53,0),576], [String.fromCharCode(98,95,51,55,95,99,111,108,108,97,116,105,110,103,0),190], [String.fromCharCode(113,95,50,50,95,100,110,111,119,0),792]]);
    let flyerU = 0.0;
   while (clearH != giflivestreamingL) {
       let b_player6: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,105,110,103,95,54,95,50,49,0),String.fromCharCode(119,95,50,49,95,105,100,108,105,115,116,0)], [String.fromCharCode(116,104,114,101,97,100,101,100,95,48,95,52,53,0),String.fromCharCode(121,95,52,56,95,109,111,100,101,108,115,0)]]);
       let libsgcorek = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,52,95,57,56,0);
       let mbridgeT = String.fromCharCode(112,108,97,110,101,95,113,95,55,54,0);
         b_player6.set(mbridgeT, (String.fromCharCode(106,0) == mbridgeT ? mbridgeT.length : libsgcorek.length));
          let delegate_emo = 3.0;
          let redgoalK = 3;
          let dycreatorH = String.fromCharCode(98,95,49,50,95,112,112,102,108,97,103,115,0);
         libsgcorek += `${libsgcorek.length}`;
         delegate_emo *= dycreatorH.length;
         redgoalK &= parseInt(`${delegate_emo}`) * redgoalK;
         dycreatorH = "3";
         mbridgeT += `${(libsgcorek == String.fromCharCode(116,0) ? mbridgeT.length : libsgcorek.length)}`;
      while (3 < mbridgeT.length) {
          let areaB = 5.0;
          let vnewarchdefaultsG = String.fromCharCode(101,120,112,101,99,116,101,100,95,97,95,53,51,0);
          let logoT = true;
          let register_sP: Array<any> = [String.fromCharCode(117,99,109,112,95,106,95,57,53,0), String.fromCharCode(99,95,50,57,95,101,114,97,0)];
          let analytics9 = false;
         mbridgeT += "2";
         areaB += register_sP.length;
         vnewarchdefaultsG = `${((analytics9 ? 1 : 3) / 3)}`;
         logoT = vnewarchdefaultsG.startsWith(`${logoT}`);
         register_sP = [2];
         analytics9 = areaB >= 8.25;
         break;
      }
       let controls9 = true;
       let libruntimeexecutorY = false;
      giflivestreamingL = `${((historyP ? 5 : 4) & b_player6.size)}`;
      break;
   }
   let stationsS = String.fromCharCode(49,102,115,56,108,95,0) == images4;
   do {
      images4 += `${giflivestreamingL.length}`;
      if (stationsS) {
         break;
      }
   } while (stationsS && ((3.60 - binddatasi) < 4.57));
       let favoritew = 0.0;
       let traminiz = 0.0;
       let interstitialG = String.fromCharCode(115,98,112,114,111,95,105,95,49,50,0);
       let countdownY = 4.0;
         favoritew += parseFloat(`${parseInt(`${traminiz}`)}`);
         countdownY -= 1;
         interstitialG = `${parseInt(`${countdownY}`) & parseInt(`${favoritew}`)}`;
      while (interstitialG.length <= 3) {
         traminiz += parseFloat(`${parseInt(`${favoritew}`) / (Math.max(5, parseInt(`${countdownY}`)))}`);
         break;
      }
       let pangley = String.fromCharCode(115,112,97,99,101,114,95,121,95,52,52,0);
       let linkR = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,111,95,54,54,0);
      for (let k = 0; k < 2; k++) {
         favoritew /= Math.max(2, parseFloat(`${3}`));
      }
      for (let n = 0; n < 1; n++) {
         pangley = "1";
      }
      for (let e = 0; e < 2; e++) {
         countdownY += interstitialG.length | parseInt(`${traminiz}`);
      }
      historyP = String.fromCharCode(115,0) == stylesC;
      giflivestreamingL += `${giflivestreamingL.length / 2}`;
      historyP = images4.length >= giflivestreamingL.length;
      stylesC += `${images4.length & favicon4.size}`;
      favicon4 = new Map([[giflivestreamingL, 3]]);
       let tickedm = String.fromCharCode(107,95,53,54,95,116,114,121,0);
         tickedm += `${tickedm.length % (Math.max(2, 8))}`;
          let orangeclock9 = String.fromCharCode(101,120,99,108,117,115,105,111,110,115,95,120,95,57,53,0);
         tickedm = `${(tickedm == String.fromCharCode(99,0) ? tickedm.length : orangeclock9.length)}`;
      for (let p = 0; p < 1; p++) {
         tickedm = `${(tickedm == String.fromCharCode(118,0) ? tickedm.length : tickedm.length)}`;
      }
      historyP = giflivestreamingL == clearH;
       let catagory2 = String.fromCharCode(117,110,99,97,99,104,101,100,95,112,95,57,54,0);
       let hooksr: Map<any, any> = new Map([[String.fromCharCode(116,95,50,53,95,99,108,97,117,115,101,115,0),981], [String.fromCharCode(108,95,56,54,95,99,114,101,97,116,111,114,115,0),0], [String.fromCharCode(116,95,51,50,95,117,110,116,121,112,101,100,0),105]]);
       let helperK = 5.0;
      let calendarq = hooksr.size >= 5689115;
      do {
         hooksr.set(catagory2, catagory2.length);
         if (calendarq) {
            break;
         }
      } while ((5.92 >= helperK) && calendarq);
      if (2 <= (hooksr.size + parseInt(`${helperK}`)) || 2 <= (hooksr.size + parseInt(`${helperK}`))) {
         hooksr = new Map([[`${helperK}`, catagory2.length]]);
      }
       let countryB = String.fromCharCode(106,95,56,50,95,112,97,100,100,105,110,103,0);
       let liveendmodallogoW = String.fromCharCode(97,119,97,105,116,95,51,95,49,57,0);
          let langx: Array<any> = [72, 580];
          let minii = String.fromCharCode(119,95,52,52,95,103,101,116,115,116,114,0);
         countryB += `${hooksr.size + 3}`;
         langx = [langx.length];
         minii = `${(minii == String.fromCharCode(117,0) ? minii.length : langx.length)}`;
         liveendmodallogoW = `${liveendmodallogoW.length & 1}`;
      let playercommonM = 5469165 >= liveendmodallogoW.length;
      do {
          let linkN: Array<any> = [100, 216, 249];
          let skip4: Array<any> = [String.fromCharCode(112,95,49,53,95,100,105,108,97,116,101,0), String.fromCharCode(112,114,101,100,105,99,116,111,114,115,98,95,113,95,54,51,0)];
          let incidentt: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,55,95,57,0),680], [String.fromCharCode(100,111,119,110,115,97,109,112,108,105,110,103,95,111,95,52,50,0),39]]);
          let drag4 = 1;
          let gpayo = 4;
         liveendmodallogoW = "2";
         linkN = [drag4 ^ linkN.length];
         skip4 = [2];
         incidentt.set(`${gpayo}`, gpayo % 1);
         drag4 *= incidentt.size;
         if (playercommonM) {
            break;
         }
      } while (playercommonM && (5 < liveendmodallogoW.length));
          let formR = 4.0;
          let sinaN = 4.0;
         catagory2 += `${parseInt(`${formR}`) << (Math.min(Math.abs(3), 1))}`;
         formR += parseFloat(`${parseInt(`${sinaN}`) % (Math.max(parseInt(`${sinaN}`), 4))}`);
      if (!liveendmodallogoW.startsWith(countryB)) {
         countryB += `${liveendmodallogoW.length >> (Math.min(catagory2.length, 4))}`;
      }
      while (hooksr.size >= 3) {
          let componentG = true;
          let playlistR: Array<any> = [630, 509];
          let tumbnaild = 0;
         hooksr = new Map([[`${playlistR.length}`, playlistR.length]]);
         componentG = !componentG;
         tumbnaild |= 1;
         break;
      }
      stylesC += `${((historyP ? 1 : 2) - images4.length)}`;
   for (let p = 0; p < 1; p++) {
       let container9: Array<any> = [792, 330, 723];
       let animationsv = 5.0;
       let binddatas0 = false;
       let application4 = 1.0;
      let iconnewssharej = 8708167.0 <= application4;
      do {
         application4 += container9.length;
         if (iconnewssharej) {
            break;
         }
      } while (iconnewssharej && (2.1 < application4));
         application4 -= ((binddatas0 ? 5 : 3) - parseInt(`${application4}`));
         container9.push(container9.length ^ 2);
       let libimagepipelineq = String.fromCharCode(108,95,51,51,95,114,101,112,108,105,101,115,0);
      if (container9.length <= parseInt(`${application4}`)) {
         container9 = [container9.length];
      }
      let launchO = application4 <= 9801599.0;
      do {
         application4 -= container9.length % (Math.max(6, libimagepipelineq.length));
         if (launchO) {
            break;
         }
      } while ((1 < (2 - libimagepipelineq.length) || (2 ^ libimagepipelineq.length) < 2) && launchO);
       let nativeexK = String.fromCharCode(100,105,97,108,111,103,95,107,95,54,53,0);
      if (libimagepipelineq.startsWith(`${application4}`)) {
         application4 *= libimagepipelineq.length % (Math.max(9, parseInt(`${application4}`)));
      }
      for (let y = 0; y < 3; y++) {
          let watchnowbgc = 0;
          let iconbellactiveG = String.fromCharCode(103,101,111,95,117,95,49,55,0);
          let bgvipxvodu: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,114,95,54,95,57,56,0),878], [String.fromCharCode(105,95,50,54,95,110,111,100,101,108,97,121,0),804]]);
         libimagepipelineq += `${(parseInt(`${application4}`) ^ (binddatas0 ? 3 : 3))}`;
         watchnowbgc <<= Math.min(4, Math.abs(iconbellactiveG.length - 1));
         iconbellactiveG = `${(iconbellactiveG == String.fromCharCode(106,0) ? iconbellactiveG.length : bgvipxvodu.size)}`;
         bgvipxvodu = new Map([[`${bgvipxvodu.size}`, iconbellactiveG.length / 2]]);
      }
      let flagE = animationsv >= 5664898.0;
      do {
         animationsv /= Math.max((parseFloat(`${libimagepipelineq == String.fromCharCode(86,0) ? parseInt(`${animationsv}`) : libimagepipelineq.length}`)), 4);
         if (flagE) {
            break;
         }
      } while (flagE && ((3.10 * animationsv) > 2.74 || 1 > (3 - container9.length)));
      while (libimagepipelineq.length >= 4) {
         binddatas0 = !binddatas0 || application4 >= 39.16;
         break;
      }
      if (1 > libimagepipelineq.length || nativeexK == String.fromCharCode(87,0)) {
         nativeexK += `${(String.fromCharCode(120,0) == libimagepipelineq ? libimagepipelineq.length : parseInt(`${application4}`))}`;
      }
      clearH += `${2 - favicon4.size}`;
   }
   let eventsplash_ = String.fromCharCode(57,100,121,116,112,105,103,117,108,110,0) == clearH;
   do {
      clearH = `${images4.length & 1}`;
      if (eventsplash_) {
         break;
      }
   } while ((clearH.length < 4 || 4 < images4.length) && eventsplash_);
       let controlst = 1.0;
      let background_ = controlst <= 6101628.0;
      do {
          let reminderS: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,95,56,95,54,55,0),String.fromCharCode(98,108,117,101,116,111,111,116,104,95,112,95,54,0)], [String.fromCharCode(109,95,53,50,95,112,108,97,110,101,115,0),String.fromCharCode(111,117,116,98,111,117,110,100,95,113,95,53,0)]]);
          let searchc: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,105,116,95,117,95,49,54,0),643], [String.fromCharCode(119,105,110,115,111,99,107,95,112,95,54,51,0),215], [String.fromCharCode(120,112,97,108,100,118,95,57,95,49,56,0),148]]);
          let static_t5C = false;
          let flagk = 1.0;
         controlst -= parseFloat(`${parseInt(`${flagk}`) + 3}`);
         reminderS.set(`${static_t5C}`, (reminderS.size - (static_t5C ? 4 : 1)));
         searchc = new Map([[`${reminderS.size}`, reminderS.size << (Math.min(Math.abs(2), 1))]]);
         flagk -= 1;
         if (background_) {
            break;
         }
      } while (background_ && (controlst == controlst));
         controlst -= parseFloat(`${1 | parseInt(`${controlst}`)}`);
      let stylesa = 7265228.0 <= controlst;
      do {
          let umeng4 = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,98,95,50,52,0);
          let webviewk: Array<any> = [582, 314];
          let plusi = 3.0;
          let lang_ = String.fromCharCode(115,116,111,112,101,100,95,114,95,55,53,0);
         controlst /= Math.max(4, parseFloat(`${parseInt(`${plusi}`)}`));
         umeng4 = "3";
         webviewk.push(lang_.length);
         plusi /= Math.max(1, 1 >> (Math.min(5, lang_.length)));
         if (stylesa) {
            break;
         }
      } while ((5.36 <= (controlst * 2.98)) && stylesa);
      favicon4 = new Map([[`${controlst}`, parseInt(`${controlst}`) + giflivestreamingL.length]]);
      iconmore_ /= Math.max(2, parseInt(`${binddatasi}`) & 1);
      flyerU *= ((historyP ? 1 : 1));
      historyP = 34 > images4.length || favicon4.size > 34;
       let chatI = false;
       let giflivestreaminge = 3;
       let defaultprofilepicQ = 5.0;
         giflivestreaminge |= ((chatI ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${defaultprofilepicQ}`)), 2)));
          let sportl = String.fromCharCode(102,95,55,54,95,112,114,101,115,101,110,116,97,116,105,111,110,0);
          let tickedb = 5.0;
         defaultprofilepicQ -= 1;
         sportl += `${(sportl == String.fromCharCode(102,0) ? sportl.length : parseInt(`${tickedb}`))}`;
         tickedb /= Math.max(sportl.length, 3);
      while (1.47 <= (defaultprofilepicQ + 5.5) && 3 <= (parseInt(`${defaultprofilepicQ}`) + giflivestreaminge)) {
          let androidF = String.fromCharCode(109,97,105,110,100,98,95,117,95,51,48,0);
          let xvod7 = String.fromCharCode(110,95,51,56,95,114,101,97,99,104,97,98,105,108,105,116,121,0);
         giflivestreaminge |= (String.fromCharCode(57,0) == xvod7 ? xvod7.length : parseInt(`${defaultprofilepicQ}`));
         androidF += `${androidF.length}`;
         break;
      }
         defaultprofilepicQ /= Math.max(giflivestreaminge - 2, 1);
       let release_uw = String.fromCharCode(119,104,101,114,101,95,120,95,51,56,0);
       let r_title0 = String.fromCharCode(100,112,114,105,110,116,95,118,95,56,49,0);
      while (!chatI && (giflivestreaminge + 5) <= 5) {
          let trashu = 2.0;
         chatI = defaultprofilepicQ > 8.32;
         trashu += parseFloat(`${parseInt(`${trashu}`)}`);
         break;
      }
       let typesx: Array<any> = [618, 768];
      while ((r_title0.length % 2) > 4) {
         r_title0 = "3";
         break;
      }
          let orientationC = String.fromCharCode(122,95,49,49,95,115,116,97,116,101,109,101,110,116,115,0);
         giflivestreaminge -= parseInt(`${defaultprofilepicQ}`);
         orientationC += `${(orientationC == String.fromCharCode(70,0) ? orientationC.length : orientationC.length)}`;
      favicon4 = new Map([[`${defaultprofilepicQ}`, (parseInt(`${defaultprofilepicQ}`) >> (Math.min(1, Math.abs((chatI ? 1 : 3)))))]]);
   if (1 >= stylesC.length) {
      clearH = `${((historyP ? 2 : 5) ^ parseInt(`${flyerU}`))}`;
   }
      favicon4 = new Map([[images4, (images4 == String.fromCharCode(109,0) ? images4.length : parseInt(`${iconmore_}`))]]);
   for (let c = 0; c < 2; c++) {
       let readU = false;
         readU = !readU;
      if (!readU) {
         readU = !readU;
      }
         readU = (!readU ? !readU : readU);
      giflivestreamingL = `${((historyP ? 3 : 2) * parseInt(`${binddatasi}`))}`;
   }

    onHandleFullScreen();
  };

  const goBack = () => {
       let androidI = false;
    let klevinl = 0;
    let showQ = 3.0;
    let renewp = String.fromCharCode(111,95,56,54,95,105,110,116,108,101,0);
    let photo5: Map<any, any> = new Map([[String.fromCharCode(99,118,99,95,98,95,51,54,0),true ], [String.fromCharCode(101,100,116,115,95,103,95,55,55,0),true ], [String.fromCharCode(106,95,54,55,95,99,111,111,107,105,101,115,0),true ]]);
    let clubC: Array<any> = [String.fromCharCode(114,105,99,101,95,54,95,51,53,0), String.fromCharCode(114,95,53,52,95,98,112,117,116,115,0)];
    let pagez = String.fromCharCode(101,120,116,101,110,115,105,98,108,101,95,115,95,55,54,0);
    let libturbomodulejsijniK = String.fromCharCode(101,95,56,51,95,115,108,105,99,101,97,110,103,108,101,0);
    let philippinesW: Map<any, any> = new Map([[String.fromCharCode(101,95,55,49,95,101,118,101,114,121,98,111,100,121,0),true ], [String.fromCharCode(119,95,52,50,95,117,110,100,101,114,108,121,105,110,103,0),true ]]);
    let telegrami = 4.0;
      klevinl += photo5.size;
      androidI = (photo5.size << (Math.min(5, clubC.length))) <= 85;
      pagez += "2";
       let xadsdkH = 0.0;
       let leakchecker9: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,115,112,97,99,101,95,108,95,53,54,0),612], [String.fromCharCode(99,105,114,99,95,110,95,49,53,0),360]]);
         xadsdkH /= Math.max(3, 2);
      if (leakchecker9.size < 2) {
         xadsdkH /= Math.max(3, 5);
      }
      if (leakchecker9.get(`${xadsdkH}`) == null) {
         xadsdkH *= parseInt(`${xadsdkH}`);
      }
      let launchG = 8685437 <= leakchecker9.size;
      do {
          let canvas5: Map<any, any> = new Map([[String.fromCharCode(112,95,49,57,95,101,114,97,115,117,114,101,0),599], [String.fromCharCode(101,118,101,114,121,111,110,101,95,51,95,54,56,0),352]]);
         leakchecker9.set(`${xadsdkH}`, leakchecker9.size);
         canvas5.set(`${canvas5.size}`, canvas5.size);
         if (launchG) {
            break;
         }
      } while (((2.17 + xadsdkH) >= 3.93) && launchG);
         leakchecker9.set(`${xadsdkH}`, parseInt(`${xadsdkH}`) << (Math.min(Math.abs(leakchecker9.size), 2)));
          let mapbufferf = 4.0;
         leakchecker9.set(`${xadsdkH}`, parseInt(`${xadsdkH}`));
         mapbufferf /= Math.max(5, parseFloat(`${parseInt(`${mapbufferf}`) >> (Math.min(3, Math.abs(2)))}`));
      renewp += "1";
       let libavutil9 = 1;
       let gmailW = String.fromCharCode(120,95,53,48,95,98,111,117,110,100,101,100,0);
       let libreactnativeblobD = String.fromCharCode(101,95,52,56,95,120,117,118,109,118,115,0);
      let icon4 = String.fromCharCode(120,54,101,109,111,49,119,54,0) == gmailW;
      do {
         gmailW += `${3 ^ gmailW.length}`;
         if (icon4) {
            break;
         }
      } while ((libreactnativeblobD == String.fromCharCode(77,0)) && icon4);
          let combinedh = 2;
          let code7: Array<any> = [284, 61];
         libavutil9 /= Math.max(2, 5);
         combinedh %= Math.max(3, combinedh);
         code7 = [1];
      if (gmailW.length > libreactnativeblobD.length) {
         gmailW = `${libavutil9 << (Math.min(Math.abs(3), 3))}`;
      }
         libreactnativeblobD += `${gmailW.length - libreactnativeblobD.length}`;
       let termsy: Array<any> = [968, 558];
         gmailW = `${(libreactnativeblobD == String.fromCharCode(54,0) ? libreactnativeblobD.length : termsy.length)}`;
          let privatechatbga = String.fromCharCode(112,97,114,116,110,101,114,95,53,95,51,51,0);
          let acceptedF = String.fromCharCode(111,95,55,56,95,109,101,115,104,101,115,0);
          let chinasameG = String.fromCharCode(115,95,49,95,99,104,114,111,109,105,117,109,0);
         gmailW += `${3 - gmailW.length}`;
         privatechatbga += `${2 / (Math.max(5, privatechatbga.length))}`;
         acceptedF = `${acceptedF.length}`;
         chinasameG = `${acceptedF.length << (Math.min(5, privatechatbga.length))}`;
          let panglef = 4;
          let libswresampleo = false;
          let notification3 = 0.0;
         libreactnativeblobD += `${((libswresampleo ? 1 : 5) | parseInt(`${notification3}`))}`;
         panglef -= panglef / 3;
         libswresampleo = 77 >= (panglef << (Math.min(Math.abs(panglef), 3)));
       let defaultlogog = 2.0;
       let temp7 = 4.0;
      klevinl >>= Math.min(Math.abs(pagez.length << (Math.min(Math.abs(3), 1))), 4);
       let huaweiN = String.fromCharCode(107,95,49,48,48,95,115,104,111,114,116,99,117,116,0);
       let largebrightnessL = String.fromCharCode(104,95,54,50,95,115,111,98,105,110,100,0);
       let eventsplashY: Array<any> = [String.fromCharCode(98,95,49,55,95,100,111,110,97,116,101,0), String.fromCharCode(106,95,51,50,95,101,105,112,0)];
         huaweiN += `${largebrightnessL.length * eventsplashY.length}`;
          let aream = 0.0;
          let clockh = 1.0;
          let fastforward9 = String.fromCharCode(113,95,55,95,114,117,98,121,0);
         huaweiN += `${parseInt(`${aream}`)}`;
         clockh -= parseFloat(`${2}`);
         fastforward9 = `${parseInt(`${clockh}`)}`;
         largebrightnessL += `${eventsplashY.length / (Math.max(3, 5))}`;
      for (let p = 0; p < 2; p++) {
         largebrightnessL += `${1 + huaweiN.length}`;
      }
      while (huaweiN.length < eventsplashY.length) {
         eventsplashY = [eventsplashY.length];
         break;
      }
          let networka: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,114,101,115,112,111,110,100,0),true ], [String.fromCharCode(99,114,101,97,116,111,114,115,95,98,95,54,55,0),true ], [String.fromCharCode(107,95,57,51,95,110,97,108,117,115,0),false ]]);
          let internetc = 3.0;
         largebrightnessL = "2";
         networka.set(`${internetc}`, networka.size + parseInt(`${internetc}`));
         eventsplashY = [2 >> (Math.min(3, huaweiN.length))];
         huaweiN = `${1 * eventsplashY.length}`;
      for (let h = 0; h < 3; h++) {
         eventsplashY.push(largebrightnessL.length);
      }
      photo5.set(`${androidI}`, renewp.length - 3);
   while ((showQ - 3.78) >= 5.90 || 2 >= (klevinl - 5)) {
       let modulesv = 3;
       let bingw = String.fromCharCode(114,95,51,55,95,101,120,99,101,101,100,105,110,103,0);
       let nterstitialy = String.fromCharCode(98,105,116,114,118,95,52,95,55,52,0);
       let sansH = 4.0;
      if (3 < (bingw.length + 2) || 2 < (modulesv + bingw.length)) {
          let aboutU = String.fromCharCode(118,95,56,52,95,103,114,97,112,104,105,99,115,0);
         bingw = `${aboutU.length}`;
      }
      for (let p = 0; p < 3; p++) {
         modulesv &= 3 ^ modulesv;
      }
      let nbatrophyR = sansH <= 8104384.0;
      do {
          let source6 = 0;
          let heartK = true;
          let entryo = 0;
         sansH -= parseFloat(`${source6 / (Math.max(parseInt(`${sansH}`), 10))}`);
         source6 += entryo ^ 1;
         heartK = entryo >= 65;
         if (nbatrophyR) {
            break;
         }
      } while ((4.67 >= (2.19 * sansH) && (3 & modulesv) >= 4) && nbatrophyR);
          let questiconZ = String.fromCharCode(118,95,51,54,95,109,101,97,115,117,114,101,0);
         nterstitialy += `${(String.fromCharCode(81,0) == bingw ? parseInt(`${sansH}`) : bingw.length)}`;
         questiconZ += `${questiconZ.length ^ 2}`;
      let stringO = 5744775 <= modulesv;
      do {
         modulesv <<= Math.min(Math.abs(parseInt(`${sansH}`) | 3), 5);
         if (stringO) {
            break;
         }
      } while ((modulesv > sansH) && stringO);
          let halfR = 2.0;
         modulesv *= (nterstitialy == String.fromCharCode(97,0) ? modulesv : nterstitialy.length);
         halfR += parseFloat(`${1}`);
         bingw = `${bingw.length | modulesv}`;
      for (let y = 0; y < 3; y++) {
         nterstitialy += `${nterstitialy.length ^ 3}`;
      }
         bingw += `${2 - parseInt(`${sansH}`)}`;
      let injuryy = bingw == String.fromCharCode(121,50,114,107,51,116,116,120,0);
      do {
         bingw += `${nterstitialy.length}`;
         if (injuryy) {
            break;
         }
      } while ((!bingw.startsWith(`${sansH}`)) && injuryy);
          let iconarrowrights = String.fromCharCode(120,95,49,57,95,99,97,114,111,117,115,101,108,0);
          let dark2 = String.fromCharCode(99,95,51,95,112,111,111,112,0);
         nterstitialy += `${modulesv}`;
         iconarrowrights = `${(String.fromCharCode(110,0) == iconarrowrights ? dark2.length : iconarrowrights.length)}`;
         dark2 += `${iconarrowrights.length & 2}`;
         nterstitialy = `${modulesv}`;
      klevinl -= (String.fromCharCode(74,0) == pagez ? photo5.size : pagez.length);
      break;
   }
   for (let o = 0; o < 2; o++) {
      pagez += `${clubC.length}`;
   }
   for (let g = 0; g < 2; g++) {
       let light3 = 0.0;
       let q_lockY: Array<any> = [458, 927, 989];
         light3 /= Math.max(3, parseFloat(`${3}`));
         light3 /= Math.max(parseFloat(`${q_lockY.length % (Math.max(2, 8))}`), 3);
      if (2.89 == (light3 - 2.33)) {
         q_lockY.push(parseInt(`${light3}`));
      }
      let profile3 = light3 <= 6787809.0;
      do {
         light3 -= parseFloat(`${q_lockY.length - parseInt(`${light3}`)}`);
         if (profile3) {
            break;
         }
      } while ((q_lockY.includes(light3)) && profile3);
      if ((parseInt(`${light3}`) / (Math.max(8, q_lockY.length))) <= 2 && 3 <= (2 & q_lockY.length)) {
         light3 /= Math.max(3, parseFloat(`${parseInt(`${light3}`) >> (Math.min(q_lockY.length, 5))}`));
      }
         q_lockY = [parseInt(`${light3}`)];
      androidI = renewp == String.fromCharCode(89,0);
   }
   if (4 > (pagez.length | klevinl) && (4 | pagez.length) > 5) {
      pagez = `${photo5.size * 1}`;
   }
   let rankx = clubC.length <= 5452456;
   do {
      clubC.push(clubC.length - 2);
      if (rankx) {
         break;
      }
   } while (rankx && (!pagez.endsWith(`${clubC.length}`)));

    delayControls();

   while (showQ <= 5.19 || (showQ * 5.19) <= 4.72) {
      androidI = ((clubC.length + (!androidI ? clubC.length : 32)) <= 32);
      break;
   }
   let episodeq = androidI ? !androidI : androidI;
   do {
      androidI = clubC.length > 16;
      if (episodeq) {
         break;
      }
   } while (episodeq && ((klevinl | 5) == 1 || 5 == klevinl));
   let libswresampleh = klevinl <= 6428802;
   do {
       let sharedV: Array<any> = [String.fromCharCode(104,95,51,56,95,99,117,108,102,114,101,113,0), String.fromCharCode(104,95,49,57,0), String.fromCharCode(113,95,57,49,95,97,115,115,105,103,110,109,101,110,116,0)];
       let applicationR = String.fromCharCode(106,95,53,95,112,114,101,112,97,114,101,100,0);
       let contextH = String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,102,95,50,57,0);
          let stepf = String.fromCharCode(121,95,55,55,95,99,104,101,99,107,112,111,105,110,116,115,0);
         sharedV.push(stepf.length);
          let libsentry7 = String.fromCharCode(97,95,49,54,95,112,114,101,99,111,109,112,117,116,101,0);
          let thailandD = 5.0;
          let floatera = false;
         contextH += "2";
         libsentry7 += `${(String.fromCharCode(121,0) == libsentry7 ? parseInt(`${thailandD}`) : libsentry7.length)}`;
         thailandD /= Math.max(parseFloat(`${parseInt(`${thailandD}`) | 1}`), 5);
         floatera = thailandD > 83.9;
          let cornerkickY = String.fromCharCode(104,95,54,48,95,117,110,99,104,97,110,103,101,100,0);
         sharedV.push(sharedV.length / 3);
         cornerkickY = `${2 % (Math.max(1, cornerkickY.length))}`;
      let updatesH = applicationR.length <= 9425298;
      do {
         applicationR = `${3 - sharedV.length}`;
         if (updatesH) {
            break;
         }
      } while (updatesH && (contextH == String.fromCharCode(101,0) || applicationR != String.fromCharCode(57,0)));
      while (2 == (sharedV.length & 3) && (3 & sharedV.length) == 3) {
         applicationR += `${1 ^ applicationR.length}`;
         break;
      }
       let iconfeedbackH: Array<any> = [378, 577];
       let rulesH: Array<any> = [924, 882, 414];
         sharedV.push(3);
         applicationR = `${(String.fromCharCode(52,0) == applicationR ? rulesH.length : applicationR.length)}`;
         iconfeedbackH.push(3 - applicationR.length);
      klevinl += 2;
      if (libswresampleh) {
         break;
      }
   } while ((2 <= (klevinl | 1) || 1.3 <= (showQ - 1.80)) && libswresampleh);
       let long_py = String.fromCharCode(116,97,98,108,101,108,105,109,95,102,95,52,0);
       let leftk = 2.0;
      while (parseInt(`${leftk}`) == long_py.length) {
         long_py += "2";
         break;
      }
          let libsentryO = String.fromCharCode(99,102,102,116,98,95,114,95,50,53,0);
          let predictionactive7 = true;
          let tempnodatagify = 1;
         long_py = `${1 & tempnodatagify}`;
         libsentryO = `${libsentryO.length}`;
         predictionactive7 = libsentryO.length <= 71 || predictionactive7;
         tempnodatagify /= Math.max(3, 3);
       let specO = 4.0;
       let interstitialc = 4.0;
       let telegraml = 4;
      let mbbannerV = 6455036 >= long_py.length;
      do {
          let entry0 = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,114,95,51,51,0);
          let libtanM = String.fromCharCode(114,95,50,53,95,115,117,112,112,111,114,116,97,98,108,101,0);
         long_py = `${parseInt(`${interstitialc}`) >> (Math.min(Math.abs(parseInt(`${specO}`)), 1))}`;
         entry0 = `${(String.fromCharCode(100,0) == libtanM ? entry0.length : libtanM.length)}`;
         if (mbbannerV) {
            break;
         }
      } while (mbbannerV && (!long_py.includes(`${leftk}`)));
          let statsY: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,97,116,101,95,57,95,48,0),false ], [String.fromCharCode(114,117,101,95,113,95,50,50,0),true ]]);
          let h_unlockl = String.fromCharCode(108,105,98,111,112,101,110,104,95,114,95,49,48,0);
          let stepF = 5.0;
         interstitialc += parseFloat(`${parseInt(`${interstitialc}`) / (Math.max(8, telegraml))}`);
         statsY.set(`${h_unlockl}`, 1 ^ statsY.size);
         h_unlockl = "3";
         stepF /= Math.max(1, 1);
      klevinl += (klevinl / (Math.max(8, (androidI ? 2 : 4))));
   while (renewp.length == 5) {
       let projecte: Map<any, any> = new Map([[String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,120,95,49,56,0),String.fromCharCode(106,95,56,49,95,105,110,105,116,97,99,107,0)], [String.fromCharCode(109,102,114,97,95,113,95,50,57,0),String.fromCharCode(106,95,50,51,95,115,105,110,103,108,101,116,97,98,108,101,0)]]);
         projecte = new Map([[`${projecte.size}`, 3 << (Math.min(2, Math.abs(projecte.size)))]]);
      while (Array.from(projecte.keys()).includes(`${projecte.size}`)) {
          let flagZ = 1;
          let nterstitialS = String.fromCharCode(109,95,52,52,95,101,121,98,111,97,114,100,0);
          let overlayn: Array<any> = [266, 53];
         projecte.set(`${overlayn.length}`, 3);
         flagZ += flagZ;
         nterstitialS = `${3 & nterstitialS.length}`;
         overlayn = [1 + nterstitialS.length];
         break;
      }
      if (1 <= (projecte.size % (Math.max(10, projecte.size)))) {
         projecte.set(`${projecte.size}`, projecte.size | projecte.size);
      }
      androidI = (((!androidI ? 35 : clubC.length) & clubC.length) <= 35);
      break;
   }
   while (4 < clubC.length) {
      androidI = !androidI;
      break;
   }
   for (let a = 0; a < 2; a++) {
       let clockw = String.fromCharCode(118,95,51,50,95,117,110,114,101,118,101,114,115,101,100,0);
          let filledx = String.fromCharCode(114,101,102,101,114,114,101,114,95,120,95,56,54,0);
          let anytimeH = 5;
         clockw = "3";
         filledx = `${anytimeH}`;
         anytimeH -= filledx.length << (Math.min(Math.abs(2), 1));
       let interstitialz = 1;
       let entryz = 0;
      if (5 == (4 - clockw.length)) {
         interstitialz &= 2 - interstitialz;
      }
      klevinl += 3 / (Math.max(4, renewp.length));
   }
      philippinesW.set(`${showQ}`, 1);
      philippinesW = new Map([[`${clubC.length}`, clubC.length | 2]]);
       let final_x4 = String.fromCharCode(106,95,55,49,95,97,99,115,107,105,112,0);
       let combined = 2;
       let steph = String.fromCharCode(97,95,54,55,95,102,114,111,122,101,110,0);
       let entry4: Map<any, any> = new Map([[String.fromCharCode(108,95,57,52,95,98,111,120,101,115,0),String.fromCharCode(116,95,55,55,95,101,120,105,115,116,101,110,99,101,0)], [String.fromCharCode(114,95,56,54,95,120,102,111,114,109,0),String.fromCharCode(110,95,53,51,95,115,111,114,101,99,118,109,115,103,0)]]);
         combined %= Math.max(4, 1 & entry4.size);
      while (4 == steph.length || final_x4 == String.fromCharCode(54,0)) {
         final_x4 += `${entry4.size}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
          let updatesv: Map<any, any> = new Map([[String.fromCharCode(116,95,54,55,95,114,101,116,117,114,110,0),String.fromCharCode(114,95,57,56,95,100,105,116,104,101,114,0)], [String.fromCharCode(101,95,56,53,95,115,117,98,115,101,108,101,99,116,0),String.fromCharCode(116,95,53,52,95,105,110,102,111,114,109,97,116,105,111,110,0)]]);
          let default_0h = 3;
         final_x4 += `${entry4.size}`;
         updatesv = new Map([[`${updatesv.size}`, default_0h]]);
         default_0h /= Math.max(default_0h / (Math.max(7, updatesv.size)), 5);
      }
         steph += `${final_x4.length}`;
      if (1 == (entry4.size & 1) && (1 & steph.length) == 1) {
         steph = `${combined}`;
      }
      for (let f = 0; f < 2; f++) {
          let lightZ = false;
          let link2: Map<any, any> = new Map([[String.fromCharCode(121,101,108,108,111,119,95,51,95,52,50,0),761], [String.fromCharCode(104,111,110,101,95,122,95,54,48,0),984], [String.fromCharCode(112,114,111,112,111,115,101,100,95,98,95,51,55,0),809]]);
          let info_: Map<any, any> = new Map([[String.fromCharCode(110,95,56,53,95,112,108,97,116,101,97,117,0),508], [String.fromCharCode(105,118,97,114,95,120,95,57,0),922], [String.fromCharCode(97,100,100,102,95,55,95,57,53,0),865]]);
         entry4 = new Map([[`${link2.size}`, steph.length]]);
         lightZ = info_.get(`${lightZ}`) == null;
         link2 = new Map([[`${info_.size}`, info_.size]]);
      }
         final_x4 = `${steph.length / (Math.max(6, combined))}`;
         steph = `${final_x4.length}`;
      libturbomodulejsijniK = `${(final_x4 == String.fromCharCode(108,0) ? final_x4.length : renewp.length)}`;
   let searchi = klevinl <= 6737624;
   do {
       let arrowupN = String.fromCharCode(100,105,118,112,111,119,109,95,117,95,50,54,0);
       let agreementc = 1.0;
       let checkboxm = 5.0;
      let mapping3 = agreementc >= 8797705.0;
      do {
         agreementc *= parseFloat(`${2 * arrowupN.length}`);
         if (mapping3) {
            break;
         }
      } while (mapping3 && ((agreementc / 5.35) > 3.56 && 5 > (arrowupN.length / (Math.max(6, parseInt(`${agreementc}`))))));
      while ((agreementc - checkboxm) == 4.32 || (4.32 * agreementc) == 2.83) {
         agreementc -= parseFloat(`${arrowupN.length}`);
         break;
      }
      klevinl <<= Math.min(5, Math.abs(parseInt(`${showQ}`) >> (Math.min(5, Math.abs(3)))));
      if (searchi) {
         break;
      }
   } while (searchi && (4.31 > (1.28 - showQ)));
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
       let screenN: Array<any> = [973, 305, 561];
    let modelw = 2;
    let exampleimageF = 1;
    let placement3 = 0.0;
    let buttonq = String.fromCharCode(104,95,49,52,95,99,97,118,115,118,105,100,101,111,0);
    let zhengpiand = 2;
    let entryK: Map<any, any> = new Map([[String.fromCharCode(121,95,55,57,95,109,100,97,121,0),119], [String.fromCharCode(99,116,108,111,117,116,112,117,116,95,107,95,50,50,0),453]]);
    let gdtadvS = 0.0;
    let libfollyS = 0.0;
   for (let y = 0; y < 1; y++) {
      zhengpiand |= screenN.length;
   }
   if (buttonq.endsWith(`${zhengpiand}`)) {
       let register_g5s = 2;
       let modityj = String.fromCharCode(116,95,49,49,95,97,100,108,101,114,0);
      for (let k = 0; k < 3; k++) {
         modityj = "3";
      }
      if (2 < (modityj.length >> (Math.min(5, Math.abs(register_g5s))))) {
         register_g5s *= modityj.length;
      }
         register_g5s %= Math.max((String.fromCharCode(103,0) == modityj ? register_g5s : modityj.length), 4);
      while (5 < (4 * register_g5s) || (4 * modityj.length) < 4) {
         modityj += `${register_g5s}`;
         break;
      }
      if (3 > (register_g5s >> (Math.min(modityj.length, 4))) || 2 > (register_g5s >> (Math.min(Math.abs(3), 5)))) {
          let pressuren = String.fromCharCode(99,95,49,52,95,105,109,112,111,114,116,101,114,0);
          let successP = true;
          let combinef = 2;
         register_g5s += 3 % (Math.max(6, modityj.length));
         pressuren += `${(pressuren.length ^ (successP ? 1 : 1))}`;
         successP = pressuren.length == 4;
         combinef -= 2;
      }
      let libfollyW = register_g5s <= 7626242;
      do {
          let pusha = String.fromCharCode(102,105,108,108,112,95,103,95,55,53,0);
          let countdown3 = String.fromCharCode(116,95,50,57,95,109,105,103,114,97,116,105,111,110,0);
          let sentry4 = String.fromCharCode(118,95,53,57,95,109,105,108,108,105,115,0);
          let checkboxh = String.fromCharCode(105,95,57,54,0);
         register_g5s &= register_g5s;
         pusha += `${sentry4.length}`;
         countdown3 += `${countdown3.length}`;
         sentry4 += `${countdown3.length}`;
         checkboxh = `${(String.fromCharCode(86,0) == countdown3 ? countdown3.length : pusha.length)}`;
         if (libfollyW) {
            break;
         }
      } while ((modityj.includes(`${register_g5s}`)) && libfollyW);
      zhengpiand /= Math.max(modelw, 3);
   }
   let moonw = modelw <= 9156286;
   do {
      modelw += buttonq.length >> (Math.min(1, screenN.length));
      if (moonw) {
         break;
      }
   } while (((modelw | 2) > 3 && (2 | exampleimageF) > 5) && moonw);
   for (let d = 0; d < 3; d++) {
       let downloadedg: Map<any, any> = new Map([[String.fromCharCode(109,117,116,97,98,108,101,95,102,95,49,51,0),481], [String.fromCharCode(116,95,55,53,95,104,111,115,116,110,97,109,101,0),424]]);
       let libjsijniprofilerj: Array<any> = [276, 502];
       let halffieldimage1: Array<any> = [162, 401, 403];
       let dependenciesF = 4.0;
      let webviewg = 8508537 <= downloadedg.size;
      do {
         downloadedg = new Map([[`${libjsijniprofilerj.length}`, 2 / (Math.max(parseInt(`${dependenciesF}`), 2))]]);
         if (webviewg) {
            break;
         }
      } while ((downloadedg.get(`${libjsijniprofilerj.length}`) == null) && webviewg);
      while ((libjsijniprofilerj.length % (Math.max(10, halffieldimage1.length))) <= 4) {
         libjsijniprofilerj = [parseInt(`${dependenciesF}`) % (Math.max(libjsijniprofilerj.length, 3))];
         break;
      }
          let window_k_: Array<any> = [778, 315];
          let resenda = false;
          let yellowvideoliveY: Map<any, any> = new Map([[String.fromCharCode(102,95,54,54,95,115,109,105,108,105,101,115,0),false ], [String.fromCharCode(110,95,52,55,95,118,101,114,105,102,105,101,100,0),false ], [String.fromCharCode(101,118,115,105,103,110,97,108,95,108,95,51,48,0),true ]]);
         dependenciesF *= parseFloat(`${window_k_.length << (Math.min(5, Math.abs(parseInt(`${dependenciesF}`))))}`);
         window_k_.push(yellowvideoliveY.size | 3);
         resenda = null == yellowvideoliveY.get(`${resenda}`);
      while (downloadedg.get(`${dependenciesF}`) == null) {
         downloadedg.set(`${dependenciesF}`, 2);
         break;
      }
      while (3 <= (libjsijniprofilerj.length | 3) && 4 <= (3 | downloadedg.size)) {
          let u_locke = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,51,95,56,55,0);
         downloadedg.set(u_locke, parseInt(`${dependenciesF}`));
         break;
      }
      if (!Array.from(downloadedg.values()).includes(libjsijniprofilerj.length)) {
          let yellowredcardA = 0.0;
          let halfU = String.fromCharCode(100,95,56,95,117,110,105,109,112,108,101,109,101,110,116,101,100,0);
          let whistleorangeX = 3.0;
         libjsijniprofilerj = [parseInt(`${yellowredcardA}`) & downloadedg.size];
         yellowredcardA -= parseInt(`${whistleorangeX}`);
         halfU = `${1 | parseInt(`${whistleorangeX}`)}`;
      }
       let langa = String.fromCharCode(115,112,101,99,105,102,105,99,97,116,105,111,110,95,52,95,53,52,0);
         halffieldimage1.push((langa == String.fromCharCode(106,0) ? downloadedg.size : langa.length));
      let policyX = libjsijniprofilerj.length <= 8936811;
      do {
         libjsijniprofilerj.push(2);
         if (policyX) {
            break;
         }
      } while ((!halffieldimage1.includes(libjsijniprofilerj.length)) && policyX);
       let dropdown7 = 0;
       let nativeL = 3;
      for (let l = 0; l < 2; l++) {
         libjsijniprofilerj = [langa.length];
      }
       let referrero = String.fromCharCode(103,95,51,54,95,108,105,115,116,0);
      zhengpiand %= Math.max(1, screenN.length);
   }
      exampleimageF <<= Math.min(3, Math.abs(parseInt(`${placement3}`) / (Math.max(4, parseInt(`${gdtadvS}`)))));
       let libcxxcomponentsW = 5.0;
       let statsR: Map<any, any> = new Map([[String.fromCharCode(107,95,56,55,95,120,100,97,105,0),129], [String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,50,95,51,52,0),859]]);
         statsR = new Map([[`${statsR.size}`, parseInt(`${libcxxcomponentsW}`)]]);
          let orangeclock2 = 2.0;
          let internetg: Array<any> = [992, 165];
         libcxxcomponentsW *= parseInt(`${libcxxcomponentsW}`);
         orangeclock2 -= parseFloat(`${parseInt(`${orangeclock2}`) % (Math.max(internetg.length, 6))}`);
         internetg = [internetg.length];
         statsR.set(`${libcxxcomponentsW}`, statsR.size);
         libcxxcomponentsW += statsR.size % 1;
         statsR = new Map([[`${statsR.size}`, parseInt(`${libcxxcomponentsW}`)]]);
          let templateprocessor9 = 5.0;
         statsR = new Map([[`${libcxxcomponentsW}`, parseInt(`${libcxxcomponentsW}`) >> (Math.min(1, Math.abs(1)))]]);
         templateprocessor9 /= Math.max(1, parseInt(`${templateprocessor9}`) % (Math.max(parseInt(`${templateprocessor9}`), 3)));
      placement3 += 2;
      gdtadvS /= Math.max(parseFloat(`${entryK.size / (Math.max(1, buttonq.length))}`), 1);
   for (let c = 0; c < 1; c++) {
      entryK = new Map([[`${entryK.size}`, entryK.size - 1]]);
   }
   let acceptedY = 5921913 >= exampleimageF;
   do {
       let play3 = 3.0;
       let context_ = 4.0;
       let plusz = 3.0;
         context_ += parseFloat(`${1 | parseInt(`${plusz}`)}`);
         context_ *= parseFloat(`${1 - parseInt(`${plusz}`)}`);
      exampleimageF /= Math.max(1, 5);
      play3 -= parseFloat(`${3}`);
      if (acceptedY) {
         break;
      }
   } while (((gdtadvS * 4.37) < 2.82) && acceptedY);
   for (let z = 0; z < 2; z++) {
      libfollyS *= 3 - parseInt(`${placement3}`);
   }
      buttonq = "2";
   for (let e = 0; e < 3; e++) {
       let d_unlockP: Array<any> = [186, 339];
       let smallB = String.fromCharCode(109,95,51,54,95,100,117,112,115,0);
       let vipsportU = 0.0;
       let pause4: Array<any> = [348, 980];
       let entryu = String.fromCharCode(106,95,50,50,95,109,101,109,98,101,114,115,104,105,112,0);
      if (4 >= (2 / (Math.max(8, entryu.length)))) {
         vipsportU += pause4.length / (Math.max(d_unlockP.length, 8));
      }
         d_unlockP.push(parseInt(`${vipsportU}`) - 1);
          let huaweiv = false;
         smallB = `${smallB.length >> (Math.min(1, entryu.length))}`;
         huaweiv = (!huaweiv ? huaweiv : !huaweiv);
      if (3 == (d_unlockP.length * 2)) {
         vipsportU += d_unlockP.length * 1;
      }
          let selectI = false;
          let neonX = false;
         entryu = `${1 & parseInt(`${vipsportU}`)}`;
         selectI = (neonX ? !selectI : neonX);
      if ((entryu.length % 4) >= 4) {
         pause4.push((String.fromCharCode(80,0) == entryu ? pause4.length : entryu.length));
      }
          let libswscaleJ = true;
         smallB += `${pause4.length}`;
         libswscaleJ = !libswscaleJ;
         vipsportU += pause4.length - 1;
         smallB = `${smallB.length * d_unlockP.length}`;
         pause4.push(2 - d_unlockP.length);
      if (smallB.length <= 2) {
         smallB += `${pause4.length}`;
      }
      let libreactnativeblob3 = 9427983 >= entryu.length;
      do {
         entryu = `${entryu.length}`;
         if (libreactnativeblob3) {
            break;
         }
      } while ((4 >= (3 << (Math.min(4, d_unlockP.length)))) && libreactnativeblob3);
      let subsh = entryu.length <= 5259672;
      do {
         entryu += `${d_unlockP.length << (Math.min(smallB.length, 1))}`;
         if (subsh) {
            break;
         }
      } while (subsh && (pause4.length > 2));
         d_unlockP = [d_unlockP.length];
      if ((1 / (Math.max(10, d_unlockP.length))) == 4 || (entryu.length / (Math.max(1, 5))) == 2) {
         d_unlockP = [d_unlockP.length % (Math.max(smallB.length, 6))];
      }
      screenN.push(3 * modelw);
   }

    setShowControls(!showControls);

   let ewardedS = 9754865 <= screenN.length;
   do {
       let popupp = 1.0;
       let with_xA = true;
          let redgoal9 = String.fromCharCode(116,111,112,109,111,115,116,95,111,95,56,54,0);
         with_xA = !with_xA;
         redgoal9 = `${redgoal9.length * redgoal9.length}`;
         with_xA = with_xA || 50.9 >= popupp;
      let holderR = with_xA ? !with_xA : with_xA;
      do {
         with_xA = !with_xA;
         if (holderR) {
            break;
         }
      } while ((4.63 <= (5.37 - popupp) || !with_xA) && holderR);
         with_xA = !with_xA;
      while (with_xA) {
         with_xA = !with_xA;
         break;
      }
      for (let x = 0; x < 1; x++) {
          let iconrefreshf = String.fromCharCode(108,111,111,107,95,118,95,49,57,0);
          let playK = String.fromCharCode(115,116,114,99,97,116,95,54,95,54,52,0);
         popupp /= Math.max(5, parseFloat(`${playK.length - 1}`));
         iconrefreshf += "1";
         playK += `${iconrefreshf.length}`;
      }
      screenN.push(exampleimageF);
      if (ewardedS) {
         break;
      }
   } while (ewardedS && (screenN.length < 3));
   while (5.48 >= (placement3 / 5.51)) {
      buttonq += "2";
      break;
   }
   let sharey = 8269591 >= modelw;
   do {
      modelw >>= Math.min(5, Math.abs(exampleimageF));
      if (sharey) {
         break;
      }
   } while ((5 > modelw) && sharey);
   let cornerkicke = 9643736 >= zhengpiand;
   do {
       let tnewinterstitialu = true;
       let targetz: Array<any> = [579, 119];
       let backwardZ = String.fromCharCode(107,95,52,53,95,103,108,111,115,115,0);
       let questiconP = String.fromCharCode(118,95,55,0);
         backwardZ = `${backwardZ.length}`;
         questiconP = `${((tnewinterstitialu ? 2 : 4) % (Math.max(questiconP.length, 3)))}`;
      for (let b = 0; b < 2; b++) {
         backwardZ = `${backwardZ.length * questiconP.length}`;
      }
      if (targetz.length > 4 && 2 > (4 - targetz.length)) {
         tnewinterstitialu = questiconP.length <= backwardZ.length;
      }
      if (1 < (5 | targetz.length)) {
          let iconbackwhited: Map<any, any> = new Map([[String.fromCharCode(116,95,54,53,95,104,101,97,100,115,0),false ], [String.fromCharCode(115,117,110,114,105,115,101,115,101,116,95,53,95,52,53,0),false ]]);
          let checkboxt = String.fromCharCode(104,95,57,49,95,114,101,116,114,121,97,98,108,101,0);
          let auto_lgp = 0.0;
          let trashK = 3.0;
         backwardZ += `${1 ^ targetz.length}`;
         iconbackwhited.set(`${auto_lgp}`, (checkboxt == String.fromCharCode(98,0) ? parseInt(`${auto_lgp}`) : checkboxt.length));
         trashK /= Math.max(4, parseFloat(`${3 + iconbackwhited.size}`));
      }
         backwardZ = `${targetz.length ^ backwardZ.length}`;
      for (let m = 0; m < 3; m++) {
         tnewinterstitialu = (24 <= (questiconP.length | (!tnewinterstitialu ? questiconP.length : 24)));
      }
         targetz.push(((tnewinterstitialu ? 3 : 1) % 1));
         questiconP += `${(1 + (tnewinterstitialu ? 1 : 2))}`;
          let libavfilterl = String.fromCharCode(114,95,50,56,95,97,114,98,105,116,114,97,114,121,0);
          let headerp = String.fromCharCode(99,95,57,56,95,116,105,99,107,105,110,103,0);
          let libglogn = true;
         targetz = [(3 ^ (tnewinterstitialu ? 5 : 2))];
         libavfilterl += `${((libglogn ? 4 : 3))}`;
         headerp = `${((libglogn ? 3 : 2) + 2)}`;
      if (questiconP.length >= backwardZ.length) {
          let templateprocessor3: Array<any> = [758, 889];
          let libruntimeexecutor2 = String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,95,104,95,49,48,48,0);
          let modity1 = false;
          let tickedI = String.fromCharCode(119,95,49,50,95,100,101,112,111,115,105,116,0);
         backwardZ = `${backwardZ.length * templateprocessor3.length}`;
         templateprocessor3 = [libruntimeexecutor2.length];
         libruntimeexecutor2 += `${2 & tickedI.length}`;
         tickedI = `${tickedI.length}`;
      }
       let selection8: Map<any, any> = new Map([[String.fromCharCode(114,97,110,103,101,115,95,107,95,49,48,0),String.fromCharCode(109,95,56,95,115,105,122,101,98,105,116,114,97,116,101,0)], [String.fromCharCode(115,119,97,112,112,101,114,95,49,95,57,49,0),String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,99,95,50,51,0)]]);
       let incident4: Map<any, any> = new Map([[String.fromCharCode(106,95,49,48,48,95,101,115,99,97,112,101,115,0),190], [String.fromCharCode(105,110,105,95,122,95,52,0),326]]);
      zhengpiand |= modelw;
      if (cornerkicke) {
         break;
      }
   } while ((buttonq.includes(`${zhengpiand}`)) && cornerkicke);
   for (let k = 0; k < 2; k++) {
      gdtadvS += parseFloat(`${screenN.length}`);
   }
   for (let h = 0; h < 1; h++) {
      screenN = [exampleimageF + 1];
   }
   let umengm = entryK.size <= 8431145;
   do {
      entryK.set(buttonq, buttonq.length);
      if (umengm) {
         break;
      }
   } while ((Array.from(entryK.keys()).includes(`${exampleimageF}`)) && umengm);
      libfollyS += parseInt(`${gdtadvS}`);
      placement3 *= entryK.size;
   while (4.25 < (exampleimageF * libfollyS)) {
       let filterj = String.fromCharCode(116,95,53,54,95,98,117,116,116,101,114,119,111,114,116,104,0);
      if (filterj.length < 5) {
         filterj = "1";
      }
         filterj += "1";
      let animationL = 7752122 <= filterj.length;
      do {
         filterj = `${filterj.length % (Math.max(filterj.length, 5))}`;
         if (animationL) {
            break;
         }
      } while ((filterj != filterj) && animationL);
      libfollyS += parseInt(`${placement3}`) + entryK.size;
      break;
   }
      zhengpiand -= 1 | buttonq.length;
   let androidu = libfollyS <= 8197913.0;
   do {
       let iconpipexpandL = String.fromCharCode(121,95,54,55,95,109,97,110,105,102,101,115,116,0);
       let textU = 5.0;
       let spinnerf = true;
       let package_g7: Array<any> = [721, 55, 958];
         package_g7.push(3 & iconpipexpandL.length);
         spinnerf = 16 < package_g7.length;
      if ((package_g7.length ^ 2) >= 2 && 2 >= package_g7.length) {
          let moviesZ = 1.0;
          let greyarrowupQ = String.fromCharCode(106,95,57,50,95,108,101,116,115,0);
          let showZ: Array<any> = [310, 420, 916];
          let search7: Array<any> = [54, 328];
         spinnerf = iconpipexpandL.length > 4;
         moviesZ += parseFloat(`${greyarrowupQ.length * 3}`);
         greyarrowupQ = `${parseInt(`${moviesZ}`) ^ 1}`;
         showZ = [showZ.length];
         search7 = [(String.fromCharCode(79,0) == greyarrowupQ ? showZ.length : greyarrowupQ.length)];
      }
       let large4 = String.fromCharCode(107,95,52,56,95,118,105,115,105,116,0);
       let connectiona = String.fromCharCode(102,108,97,99,101,110,99,95,53,95,49,52,0);
          let connectionF = 3.0;
          let overlayS = 2.0;
          let uploadd: Array<any> = [428, 723];
         textU -= 2 << (Math.min(Math.abs(parseInt(`${overlayS}`)), 1));
         connectionF /= Math.max(3, parseFloat(`${1}`));
         overlayS += uploadd.length - 1;
         uploadd.push(parseInt(`${connectionF}`));
          let libruntimeexecutor3 = 1;
          let countryl = 1.0;
         connectiona += `${package_g7.length << (Math.min(1, Math.abs(parseInt(`${textU}`))))}`;
         libruntimeexecutor3 %= Math.max(4, 3 << (Math.min(Math.abs(libruntimeexecutor3), 3)));
         countryl *= parseFloat(`${parseInt(`${countryl}`)}`);
         iconpipexpandL += `${iconpipexpandL.length / (Math.max(2, parseInt(`${textU}`)))}`;
         large4 += `${package_g7.length >> (Math.min(large4.length, 5))}`;
      let redirectg = 6947773.0 <= textU;
      do {
          let rewardvideoj = String.fromCharCode(111,95,56,52,95,111,98,109,99,0);
          let profileinactiveH = String.fromCharCode(122,95,54,52,95,111,110,103,111,105,110,103,0);
          let long_sgN = true;
          let applicationy: Array<any> = [431, 514];
         textU += large4.length / 3;
         rewardvideoj = "3";
         profileinactiveH += `${2 ^ applicationy.length}`;
         long_sgN = 21 > profileinactiveH.length && applicationy.length > 21;
         if (redirectg) {
            break;
         }
      } while ((textU > iconpipexpandL.length) && redirectg);
      let firebasey = large4 == String.fromCharCode(114,116,104,104,0);
      do {
          let soundc: Array<any> = [840, 693];
          let rootz: Array<any> = [115, 821];
          let libavcodecW = 4.0;
         large4 += `${package_g7.length}`;
         soundc = [1];
         rootz = [parseInt(`${libavcodecW}`)];
         libavcodecW += rootz.length;
         if (firebasey) {
            break;
         }
      } while (firebasey && (connectiona == large4));
      while ((2.21 - textU) < 2.87 && 1 < (iconpipexpandL.length ^ 4)) {
         iconpipexpandL = "1";
         break;
      }
      if (spinnerf) {
         textU -= ((spinnerf ? 4 : 4) ^ package_g7.length);
      }
      libfollyS += 3 + zhengpiand;
      if (androidu) {
         break;
      }
   } while (androidu && (libfollyS <= exampleimageF));
    delayControls();
  };

  const clearHidingDelay = () => {
       let description_myq = 3.0;
    let constantsN = String.fromCharCode(112,114,101,104,97,115,104,95,108,95,56,57,0);
    let constants8 = String.fromCharCode(117,95,53,54,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
    let libturbomodulejsijniR = 2.0;
    let iconsharem: Array<any> = [462, 93];
    let playlist6: Array<any> = [469, 64, 628];
    let predictionwina = true;
    let bing5 = String.fromCharCode(113,95,49,48,48,95,115,101,101,107,97,98,108,101,0);
    let k_positionP = String.fromCharCode(99,95,57,56,95,114,108,105,110,101,0);
    let indicator4 = 0.0;
    let bangW: Array<any> = [50, 199];
    let gmailu = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,108,95,57,49,0);
      iconsharem.push(parseInt(`${indicator4}`) + 3);
   while (predictionwina) {
       let matchactivey = 0;
       let iconnewsshareh = String.fromCharCode(107,95,49,52,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0);
       let emptyp = 3.0;
       let const_ktz = String.fromCharCode(103,95,55,49,95,98,108,111,99,107,105,101,0);
      if (2 > (5 ^ matchactivey) || (emptyp * 1.9) > 3.16) {
         emptyp -= const_ktz.length;
      }
       let libcrashsdkl = String.fromCharCode(113,114,99,111,100,101,95,109,95,49,53,0);
       let pointI = String.fromCharCode(100,101,116,97,105,108,95,50,95,55,48,0);
         pointI += `${iconnewsshareh.length + parseInt(`${emptyp}`)}`;
      while (2 <= (iconnewsshareh.length + 1) && (parseInt(`${emptyp}`) / (Math.max(4, iconnewsshareh.length))) <= 1) {
          let playercommony: Map<any, any> = new Map([[String.fromCharCode(104,95,50,55,95,97,108,115,97,0),601], [String.fromCharCode(106,95,51,52,95,99,111,110,102,101,116,116,105,0),251], [String.fromCharCode(112,97,114,97,98,111,108,108,105,99,95,57,95,49,53,0),481]]);
          let catalogD = 0.0;
         iconnewsshareh = `${matchactivey % (Math.max(iconnewsshareh.length, 4))}`;
         playercommony = new Map([[`${playercommony.size}`, parseInt(`${catalogD}`) / (Math.max(playercommony.size, 4))]]);
         catalogD /= Math.max(parseInt(`${catalogD}`) - 3, 1);
         break;
      }
      while (const_ktz != String.fromCharCode(103,0) || iconnewsshareh == String.fromCharCode(69,0)) {
          let privilegeq = 2.0;
          let dangern = 0.0;
         iconnewsshareh = `${2 * iconnewsshareh.length}`;
         privilegeq /= Math.max(parseFloat(`${parseInt(`${dangern}`)}`), 2);
         break;
      }
      for (let n = 0; n < 1; n++) {
         matchactivey *= 3;
      }
      let gifgoalp = libcrashsdkl.length <= 5436774;
      do {
         libcrashsdkl = `${3 * matchactivey}`;
         if (gifgoalp) {
            break;
         }
      } while ((libcrashsdkl.endsWith(const_ktz)) && gifgoalp);
         emptyp /= Math.max(5, const_ktz.length % 2);
      if (5.2 > (emptyp / (Math.max(iconnewsshareh.length, 8))) || (iconnewsshareh.length % 3) > 1) {
         iconnewsshareh += "3";
      }
         pointI = `${pointI.length - parseInt(`${emptyp}`)}`;
         iconnewsshareh = `${matchactivey}`;
      while (5 < (const_ktz.length + parseInt(`${emptyp}`))) {
          let mintegraln: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,119,105,116,104,111,117,116,0),375], [String.fromCharCode(119,95,54,48,95,109,101,97,115,117,114,101,100,0),708], [String.fromCharCode(120,116,101,97,95,109,95,53,51,0),255]]);
          let membershiph: Array<any> = [123, 916];
          let libffmpegkitJ: Array<any> = [825, 387];
         const_ktz += `${3 - const_ktz.length}`;
         mintegraln.set(`${membershiph.length}`, 2);
         membershiph.push(membershiph.length);
         libffmpegkitJ = [3];
         break;
      }
      predictionwina = (parseInt(`${emptyp}`) + playlist6.length) >= 85;
      break;
   }
   let send5 = 7426015 >= constants8.length;
   do {
      constants8 = `${3 << (Math.min(Math.abs(parseInt(`${indicator4}`)), 3))}`;
      if (send5) {
         break;
      }
   } while (send5 && (1 >= (2 + bangW.length) && 1 >= (2 + constants8.length)));
   let result5 = predictionwina ? !predictionwina : predictionwina;
   do {
      predictionwina = constants8 == k_positionP;
      if (result5) {
         break;
      }
   } while (result5 && (!predictionwina));
   for (let a = 0; a < 2; a++) {
      constants8 = `${2 * constantsN.length}`;
   }
   let type_q0 = libturbomodulejsijniR >= 9549405.0;
   do {
      libturbomodulejsijniR -= parseFloat(`${parseInt(`${indicator4}`)}`);
      if (type_q0) {
         break;
      }
   } while ((constantsN.includes(`${libturbomodulejsijniR}`)) && type_q0);
   if (5.33 < indicator4) {
      k_positionP += `${parseInt(`${indicator4}`) | parseInt(`${libturbomodulejsijniR}`)}`;
   }
      libturbomodulejsijniR -= parseFloat(`${3}`);
      bing5 = `${playlist6.length}`;
   let mbnativeu = 5131955 <= constants8.length;
   do {
      constants8 += `${parseInt(`${libturbomodulejsijniR}`)}`;
      if (mbnativeu) {
         break;
      }
   } while ((!constants8.startsWith(k_positionP)) && mbnativeu);
   if ((1 - k_positionP.length) < 3) {
      indicator4 /= Math.max(3, parseInt(`${libturbomodulejsijniR}`) >> (Math.min(2, Math.abs(1))));
   }
   for (let z = 0; z < 3; z++) {
      bangW.push(parseInt(`${indicator4}`) % (Math.max(3, 6)));
   }
       let dinit_eZ = true;
       let greyarrowupX = 0.0;
       let statisticsinactivet: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,101,110,117,109,101,114,97,116,105,111,110,0),810], [String.fromCharCode(102,105,101,108,100,95,119,95,55,0),899], [String.fromCharCode(108,95,55,57,95,99,114,101,97,116,101,0),108]]);
         statisticsinactivet.set(`${dinit_eZ}`, ((dinit_eZ ? 2 : 3) / (Math.max(parseInt(`${greyarrowupX}`), 8))));
      if (dinit_eZ) {
         greyarrowupX *= parseFloat(`${statisticsinactivet.size / (Math.max(2, 1))}`);
      }
      while (2 >= statisticsinactivet.size) {
          let giftbutton9 = true;
          let bufferi: Map<any, any> = new Map([[String.fromCharCode(117,95,49,49,95,101,99,114,101,116,0),49], [String.fromCharCode(100,95,54,57,95,102,105,110,100,110,101,116,0),295]]);
          let plus9: Array<any> = [374, 460];
         statisticsinactivet.set(`${greyarrowupX}`, parseInt(`${greyarrowupX}`));
         giftbutton9 = (bufferi.size >> (Math.min(3, plus9.length))) <= 67;
         bufferi = new Map([[`${bufferi.size}`, 1 - plus9.length]]);
         break;
      }
       let googlef = String.fromCharCode(110,95,52,50,95,97,118,97,105,108,97,98,105,108,105,116,121,0);
       let orangeclockf = String.fromCharCode(106,112,101,103,100,119,116,95,122,95,54,0);
          let routerH = String.fromCharCode(104,117,102,102,121,117,118,100,115,112,95,97,95,53,55,0);
         dinit_eZ = routerH.endsWith(`${dinit_eZ}`);
         googlef += `${googlef.length * orangeclockf.length}`;
      while (5.21 > (5.84 + greyarrowupX)) {
         orangeclockf += `${3 ^ parseInt(`${greyarrowupX}`)}`;
         break;
      }
      if (dinit_eZ && orangeclockf.length == 4) {
         orangeclockf += `${parseInt(`${greyarrowupX}`) & statisticsinactivet.size}`;
      }
      while (2 >= (googlef.length ^ 2) || (2 ^ statisticsinactivet.size) >= 2) {
         googlef += `${statisticsinactivet.size - 2}`;
         break;
      }
      playlist6 = [1];
      indicator4 -= (iconsharem.length / (Math.max(2, (predictionwina ? 3 : 2))));
      k_positionP = `${2 << (Math.min(2, k_positionP.length))}`;
      indicator4 /= Math.max(parseInt(`${libturbomodulejsijniR}`), 3);
      predictionwina = k_positionP.startsWith(`${predictionwina}`);
   if ((2 << (Math.min(4, k_positionP.length))) >= 5 && (2 << (Math.min(5, k_positionP.length))) >= 3) {
       let producte = true;
       let libloggert = String.fromCharCode(101,95,50,52,95,100,101,115,99,114,105,98,101,0);
       let stringsl: Map<any, any> = new Map([[String.fromCharCode(116,104,101,109,101,95,50,95,51,51,0),String.fromCharCode(120,95,51,52,95,109,111,114,101,0)], [String.fromCharCode(97,120,105,120,95,114,95,51,57,0),String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,95,49,95,53,55,0)], [String.fromCharCode(122,95,50,56,95,104,105,103,104,101,115,116,0),String.fromCharCode(105,102,97,115,116,95,54,95,52,53,0)]]);
         libloggert = `${stringsl.size}`;
      let photoH = 5538727 <= stringsl.size;
      do {
         stringsl = new Map([[`${producte}`, 3 ^ libloggert.length]]);
         if (photoH) {
            break;
         }
      } while (photoH && ((5 + libloggert.length) > 1));
         libloggert += `${stringsl.size}`;
         producte = !producte;
         stringsl = new Map([[libloggert, (libloggert == String.fromCharCode(108,0) ? (producte ? 3 : 2) : libloggert.length)]]);
         producte = libloggert.length >= 84;
         stringsl.set(`${producte}`, ((producte ? 1 : 2)));
       let selectionU: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,101,100,95,113,95,55,55,0),890], [String.fromCharCode(100,101,109,117,120,95,115,95,56,55,0),370]]);
      let animationn = producte ? !producte : producte;
      do {
         producte = libloggert.length < 52 && producte;
         if (animationn) {
            break;
         }
      } while (animationn && (!producte || libloggert.length < 2));
      bangW = [bangW.length / 2];
   }
   for (let d = 0; d < 3; d++) {
       let appsL = false;
       let graphicsO: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,115,101,114,116,95,107,95,51,55,0),false ], [String.fromCharCode(116,95,56,51,95,115,112,105,110,110,101,114,0),false ]]);
       let nbatrophy5 = String.fromCharCode(101,95,51,49,95,98,105,116,115,113,112,0);
       let darka = 0;
       let entryl = String.fromCharCode(109,95,56,49,95,98,97,116,99,104,101,100,0);
          let iconwechath = 1.0;
         darka -= nbatrophy5.length | 1;
         iconwechath /= Math.max(3, parseFloat(`${parseInt(`${iconwechath}`)}`));
          let subtextD = String.fromCharCode(120,95,52,53,95,114,104,115,0);
         darka <<= Math.min(nbatrophy5.length, 1);
         subtextD = `${subtextD.length | subtextD.length}`;
      while (!appsL || nbatrophy5.length == 4) {
         appsL = graphicsO.size >= 66 || darka >= 66;
         break;
      }
         graphicsO.set(nbatrophy5, nbatrophy5.length);
      if (!nbatrophy5.endsWith(entryl)) {
          let whistleorangeH = 3.0;
          let topicL = String.fromCharCode(98,97,99,107,98,114,111,117,110,100,95,120,95,52,53,0);
          let watchs = String.fromCharCode(98,95,52,50,95,97,99,104,105,101,118,101,100,0);
          let predictionarrowX: Array<any> = [4, 376];
          let dragclosey = 3.0;
         nbatrophy5 += `${((appsL ? 3 : 4))}`;
         whistleorangeH += (parseFloat(`${String.fromCharCode(79,0) == watchs ? predictionarrowX.length : watchs.length}`));
         topicL += `${topicL.length}`;
         predictionarrowX.push(1);
         dragclosey *= (topicL == String.fromCharCode(56,0) ? parseInt(`${dragclosey}`) : topicL.length);
      }
          let areaE = 5.0;
          let darkV = 5.0;
          let jingdongs = String.fromCharCode(105,112,102,115,95,114,95,56,53,0);
         darka *= (darka + (appsL ? 5 : 4));
         areaE -= parseFloat(`${2 | parseInt(`${darkV}`)}`);
         darkV *= 3 ^ jingdongs.length;
         jingdongs += "1";
      while (4 < (3 + graphicsO.size) && 4 < (3 + graphicsO.size)) {
          let turndownw: Array<any> = [53, 80, 598];
          let china4 = String.fromCharCode(112,95,55,49,95,102,97,97,110,100,99,116,0);
          let iconwatchnow0 = String.fromCharCode(97,115,111,99,95,110,95,52,53,0);
          let encrypth = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,104,95,57,51,0);
         graphicsO = new Map([[`${darka}`, iconwatchnow0.length << (Math.min(Math.abs(2), 4))]]);
         turndownw.push(turndownw.length);
         china4 += `${china4.length % (Math.max(6, turndownw.length))}`;
         iconwatchnow0 += "3";
         encrypth += `${1 - china4.length}`;
         break;
      }
         darka *= 1;
      if (4 < (5 >> (Math.min(5, Math.abs(graphicsO.size))))) {
         nbatrophy5 += `${darka}`;
      }
      let iconmore7 = nbatrophy5 == String.fromCharCode(121,48,103,53,107,49,117,53,109,0);
      do {
          let armva0 = String.fromCharCode(119,95,56,95,99,111,110,116,101,110,116,115,0);
          let runtimez = String.fromCharCode(111,100,100,97,118,103,95,56,95,52,50,0);
          let adultR = 3.0;
          let injuryv = false;
          let upgradeh = String.fromCharCode(110,101,103,97,116,101,95,99,95,56,56,0);
         nbatrophy5 += `${((appsL ? 1 : 1) >> (Math.min(Math.abs(1), 5)))}`;
         armva0 = `${parseInt(`${adultR}`) | 1}`;
         runtimez += `${(parseInt(`${adultR}`) << (Math.min(3, Math.abs((injuryv ? 4 : 3)))))}`;
         injuryv = adultR > runtimez.length;
         upgradeh = `${upgradeh.length}`;
         if (iconmore7) {
            break;
         }
      } while (iconmore7 && ((darka ^ nbatrophy5.length) >= 4 || 2 >= (darka ^ 4)));
         graphicsO.set(`${entryl}`, graphicsO.size / 1);
      while (nbatrophy5.startsWith(`${darka}`)) {
         nbatrophy5 = `${(String.fromCharCode(69,0) == entryl ? entryl.length : nbatrophy5.length)}`;
         break;
      }
      let dangerV = 9271226 >= graphicsO.size;
      do {
         graphicsO.set(`${darka}`, darka >> (Math.min(Math.abs(1), 1)));
         if (dangerV) {
            break;
         }
      } while (dangerV && (!appsL));
      while (5 > (nbatrophy5.length % (Math.max(1, 2)))) {
         graphicsO = new Map([[`${darka}`, 2]]);
         break;
      }
      while (entryl.length < graphicsO.size) {
         entryl += "1";
         break;
      }
      iconsharem.push(3);
   }
   while (4 > k_positionP.length) {
      constants8 = `${(constantsN.length >> (Math.min(5, Math.abs((predictionwina ? 5 : 1)))))}`;
      break;
   }
      bangW = [parseInt(`${libturbomodulejsijniR}`) + 3];
   while (1.97 == libturbomodulejsijniR && (libturbomodulejsijniR / (Math.max(1.97, 7))) == 5.100) {
      libturbomodulejsijniR /= Math.max(parseFloat(`${parseInt(`${indicator4}`)}`), 5);
      break;
   }
   if (3.9 <= (parseFloat(`${constants8.length}`) * libturbomodulejsijniR)) {
      constants8 += `${parseInt(`${indicator4}`) + bing5.length}`;
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let t_image0 = 2.0;
    let miniU = 3;
    let holderc = true;
    let awayi = String.fromCharCode(114,101,115,117,109,101,95,53,95,54,54,0);
    let untickN = 3;
    let telegram4 = String.fromCharCode(98,95,54,50,95,101,115,116,105,109,97,116,101,0);
    let switch_fiq = String.fromCharCode(110,95,57,50,95,109,105,115,109,97,116,99,104,101,115,0);
    let resendT = 4;
    let configureZ = String.fromCharCode(97,108,119,97,121,115,95,52,95,49,50,0);
   while (telegram4.length <= 4) {
       let editT = String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,56,95,54,57,0);
       let tempP = String.fromCharCode(108,108,100,98,105,110,105,116,95,55,95,49,52,0);
          let flipper3 = String.fromCharCode(99,104,115,99,97,108,101,95,102,95,52,49,0);
          let home7: Map<any, any> = new Map([[String.fromCharCode(97,95,55,55,95,112,111,116,105,115,105,111,110,0),false ], [String.fromCharCode(114,95,54,50,95,100,109,117,108,0),true ], [String.fromCharCode(105,100,101,110,116,105,116,105,121,95,121,95,50,0),false ]]);
          let libfollyz = 5.0;
         editT = `${editT.length}`;
         flipper3 += `${home7.size & 2}`;
         home7.set(flipper3, flipper3.length << (Math.min(5, Math.abs(home7.size))));
         libfollyz *= (parseFloat(`${String.fromCharCode(68,0) == flipper3 ? flipper3.length : home7.size}`));
      for (let x = 0; x < 3; x++) {
         tempP += `${editT.length ^ 3}`;
      }
      if (editT.length < 4) {
         editT += `${editT.length}`;
      }
         tempP = `${tempP.length}`;
      if (!tempP.startsWith(editT)) {
          let injuryr = 1.0;
          let handler5 = String.fromCharCode(109,115,118,105,100,101,111,95,53,95,56,56,0);
          let close8 = false;
         editT += `${(tempP.length - (close8 ? 2 : 2))}`;
         injuryr *= parseFloat(`${1}`);
         handler5 = `${2 ^ handler5.length}`;
         close8 = String.fromCharCode(98,0) == handler5;
      }
      if (1 <= tempP.length) {
         editT += `${editT.length}`;
      }
      untickN -= miniU ^ parseInt(`${t_image0}`);
      break;
   }
   let transferT = 7384949 <= switch_fiq.length;
   do {
      switch_fiq = `${(switch_fiq == String.fromCharCode(53,0) ? switch_fiq.length : untickN)}`;
      if (transferT) {
         break;
      }
   } while ((!switch_fiq.endsWith(`${holderc}`)) && transferT);
      telegram4 = "1";
      untickN <<= Math.min(Math.abs(2), 5);
       let catalogn = 3.0;
         catalogn /= Math.max(parseFloat(`${3 * parseInt(`${catalogn}`)}`), 4);
         catalogn -= parseFloat(`${1}`);
         catalogn *= parseFloat(`${1}`);
      resendT <<= Math.min(3, Math.abs(untickN));

      if (delayValue === undefined) {

       let streamingY = String.fromCharCode(105,110,116,101,114,120,121,95,105,95,49,54,0);
       let libfollyE: Array<any> = [126, 622];
      let selectH = 9679364 <= streamingY.length;
      do {
          let paginationa = 0.0;
          let jingdongC = 4.0;
         streamingY += `${3 | libfollyE.length}`;
         paginationa /= Math.max(5, 3 | parseInt(`${jingdongC}`));
         jingdongC -= parseFloat(`${parseInt(`${paginationa}`) % (Math.max(parseInt(`${jingdongC}`), 7))}`);
         if (selectH) {
            break;
         }
      } while (selectH && (!streamingY.endsWith(`${libfollyE.length}`)));
         libfollyE.push(streamingY.length >> (Math.min(4, libfollyE.length)));
          let modulesk: Array<any> = [560, 704, 65];
          let eactl = String.fromCharCode(111,118,101,114,108,97,112,95,108,95,53,48,0);
         streamingY = `${modulesk.length}`;
         modulesk = [eactl.length / (Math.max(eactl.length, 4))];
      for (let l = 0; l < 3; l++) {
         streamingY += `${streamingY.length}`;
      }
      if ((streamingY.length - 2) < 3) {
          let foregroundf = String.fromCharCode(118,112,99,120,95,57,95,52,48,0);
         libfollyE = [libfollyE.length | streamingY.length];
         foregroundf += `${3 & foregroundf.length}`;
      }
       let yellowvideolive1 = 2.0;
       let prediction0 = 4.0;
      switch_fiq = `${switch_fiq.length}`;
      t_image0 *= parseFloat(`${telegram4.length}`);
   let weiboM = 5457714 >= telegram4.length;
   do {
       let regengI = 1.0;
       let rankF = 1;
       let annerF = String.fromCharCode(109,95,54,55,95,120,109,108,0);
       let nativeexP: Array<any> = [294, 618, 338];
       let securityw: Array<any> = [510, 427, 210];
         nativeexP = [parseInt(`${regengI}`)];
         securityw = [2];
       let arrowu = String.fromCharCode(105,115,115,117,101,114,115,95,104,95,56,56,0);
       let bdxadsdkE = String.fromCharCode(115,95,50,95,99,117,100,97,117,112,108,111,97,100,0);
      for (let s = 0; s < 2; s++) {
          let fastforwardK = 3.0;
         rankF /= Math.max(5, rankF / (Math.max(3, 5)));
         fastforwardK /= Math.max(5, parseInt(`${fastforwardK}`));
      }
      if (arrowu.startsWith(`${securityw.length}`)) {
          let penaltya = 2;
         securityw = [(arrowu == String.fromCharCode(115,0) ? arrowu.length : securityw.length)];
         penaltya += penaltya % (Math.max(penaltya, 5));
      }
       let dependencyA: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,112,110,101,115,115,95,109,95,53,51,0),false ], [String.fromCharCode(99,95,54,56,95,114,101,115,105,103,110,115,0),false ], [String.fromCharCode(97,95,54,95,99,97,108,108,0),false ]]);
       let goal9: Map<any, any> = new Map([[String.fromCharCode(100,101,102,108,97,116,101,95,114,95,49,48,48,0),688], [String.fromCharCode(109,105,103,114,97,116,101,95,120,95,55,54,0),119], [String.fromCharCode(106,99,109,97,115,116,101,114,95,118,95,50,50,0),864]]);
         goal9.set(bdxadsdkE, nativeexP.length);
      while (annerF.endsWith(bdxadsdkE)) {
         annerF += `${3 & goal9.size}`;
         break;
      }
      telegram4 = `${(switch_fiq == String.fromCharCode(86,0) ? miniU : switch_fiq.length)}`;
      if (weiboM) {
         break;
      }
   } while ((2 >= (3 * untickN)) && weiboM);
   for (let p = 0; p < 3; p++) {
      holderc = switch_fiq.endsWith(`${miniU}`);
   }
      holderc = 60.47 <= t_image0 || telegram4 == String.fromCharCode(84,0);
        if (showSlider === 'none' && !paused) {

      t_image0 += parseFloat(`${switch_fiq.length ^ resendT}`);
      untickN <<= Math.min(3, Math.abs(parseInt(`${t_image0}`)));
   let sideX = 8440229 <= switch_fiq.length;
   do {
      switch_fiq += `${switch_fiq.length}`;
      if (sideX) {
         break;
      }
   } while (sideX && (5 <= (untickN >> (Math.min(Math.abs(1), 1))) && (1 >> (Math.min(5, switch_fiq.length))) <= 4));
       let overlayA = true;
       let libreanimatedq = String.fromCharCode(112,95,57,95,115,114,116,99,112,0);
      let register_muH = overlayA ? !overlayA : overlayA;
      do {
         overlayA = overlayA || libreanimatedq.length > 39;
         if (register_muH) {
            break;
         }
      } while (register_muH && (overlayA));
          let helperY = 1.0;
          let graph1: Array<any> = [735, 844];
          let cornerkick0: Map<any, any> = new Map([[String.fromCharCode(110,95,50,55,95,116,112,99,0),246], [String.fromCharCode(109,95,57,50,95,116,114,99,0),926], [String.fromCharCode(101,95,57,55,95,115,101,112,97,114,97,116,101,115,0),595]]);
         overlayA = 42 <= cornerkick0.size;
         helperY /= Math.max(3, parseInt(`${helperY}`));
         graph1.push(parseInt(`${helperY}`) | 3);
         cornerkick0.set(`${helperY}`, parseInt(`${helperY}`) * 3);
          let buttonG = 4.0;
         overlayA = ((libreanimatedq.length << (Math.min(5, Math.abs((overlayA ? 45 : libreanimatedq.length))))) > 45);
         buttonG -= parseFloat(`${parseInt(`${buttonG}`) << (Math.min(4, Math.abs(1)))}`);
         libreanimatedq += `${libreanimatedq.length}`;
         overlayA = libreanimatedq.length >= 67;
         libreanimatedq = `${3 << (Math.min(2, libreanimatedq.length))}`;
      telegram4 += `${parseInt(`${t_image0}`) >> (Math.min(switch_fiq.length, 3))}`;
       let b_center3 = String.fromCharCode(109,95,49,48,95,97,99,99,114,117,101,100,0);
       let statsg = 0.0;
         statsg += parseFloat(`${b_center3.length}`);
         statsg -= parseFloat(`${parseInt(`${statsg}`)}`);
      for (let a = 0; a < 3; a++) {
         b_center3 = `${2 * b_center3.length}`;
      }
         b_center3 += `${parseInt(`${statsg}`) | b_center3.length}`;
      let filterW = b_center3.length >= 7252090;
      do {
          let tramini6 = 5.0;
          let greyarrowup3 = 3;
          let encryptC = String.fromCharCode(109,98,117,102,115,95,106,95,52,55,0);
          let armvaN = 5;
          let light4: Array<any> = [819, 600, 75];
         b_center3 += `${parseInt(`${tramini6}`)}`;
         tramini6 *= parseFloat(`${greyarrowup3}`);
         greyarrowup3 ^= light4.length / (Math.max(2, 9));
         encryptC += `${(encryptC == String.fromCharCode(104,0) ? encryptC.length : greyarrowup3)}`;
         armvaN -= greyarrowup3;
         light4.push(2 << (Math.min(Math.abs(armvaN), 4)));
         if (filterW) {
            break;
         }
      } while (filterW && (b_center3.length > 3));
          let bridgeI = 4.0;
          let firebaseF: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,119,105,110,103,95,54,95,51,49,0),408], [String.fromCharCode(111,95,51,49,95,116,97,103,103,105,110,103,0),734]]);
          let stringsg = 2.0;
         statsg -= parseFloat(`${2 << (Math.min(1, Math.abs(parseInt(`${stringsg}`))))}`);
         bridgeI += parseFloat(`${parseInt(`${bridgeI}`)}`);
         firebaseF.set(`${bridgeI}`, 1);
         stringsg += parseFloat(`${firebaseF.size / (Math.max(1, 1))}`);
      awayi += `${b_center3.length ^ awayi.length}`;
          setShowControls(false)
        }
      } else {

      awayi = `${configureZ.length}`;
      telegram4 = `${miniU / 2}`;
      telegram4 = `${telegram4.length}`;
       let utilsg = String.fromCharCode(105,95,50,56,95,115,112,101,97,107,101,114,115,0);
      if (utilsg.length > 4) {
         utilsg = `${3 + utilsg.length}`;
      }
         utilsg = `${utilsg.length}`;
       let unreado = 3.0;
       let privacyC = 5.0;
      awayi += `${((holderc ? 3 : 3))}`;
       let uimanagero = 3;
          let iconscheduleR = 2.0;
         uimanagero *= uimanagero >> (Math.min(Math.abs(parseInt(`${iconscheduleR}`)), 5));
          let speca = 4.0;
          let sansF = false;
         uimanagero ^= uimanagero;
         speca /= Math.max(3, (parseInt(`${speca}`) << (Math.min(1, Math.abs((sansF ? 1 : 5))))));
         sansF = !sansF;
      if (3 >= uimanagero) {
         uimanagero >>= Math.min(3, Math.abs(1 % (Math.max(1, uimanagero))));
      }
      untickN *= configureZ.length;
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let completeD = 0.0;
    let volumeG = false;
    let gesturel = 2.0;
    let ewardedp = 4;
    let modityB = String.fromCharCode(97,95,57,56,95,100,97,117,98,101,99,104,105,101,115,0);
    let modulep = false;
    let constantsJ = String.fromCharCode(99,95,51,57,95,109,98,117,118,0);
    let configureI = String.fromCharCode(110,111,110,98,95,101,95,54,57,0);
    let referrert = String.fromCharCode(104,95,55,48,95,115,108,105,99,101,115,0);
    let matchesA = String.fromCharCode(119,95,53,56,95,100,101,97,100,108,111,99,107,101,100,0);
    let arrowrightT: Array<any> = [49, 25, 866];
   for (let d = 0; d < 3; d++) {
       let boot_ = 4;
       let utils9 = false;
       let videoo = 0;
      if (videoo == 1) {
         boot_ <<= Math.min(3, Math.abs(boot_));
      }
      let privatechatbgu = boot_ >= 8374663;
      do {
          let productR = String.fromCharCode(106,95,52,52,95,115,116,111,112,0);
          let pushZ = String.fromCharCode(101,110,113,117,101,117,101,95,113,95,49,49,0);
          let goalz: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,111,110,101,95,112,95,50,53,0),339], [String.fromCharCode(119,95,53,49,95,112,97,114,97,109,101,116,114,105,122,101,100,0),298], [String.fromCharCode(100,95,50,51,95,114,101,99,111,114,100,97,98,108,101,0),979]]);
         boot_ += boot_ << (Math.min(Math.abs(2), 5));
         productR += `${pushZ.length}`;
         pushZ = `${productR.length << (Math.min(Math.abs(3), 4))}`;
         goalz = new Map([[pushZ, pushZ.length + 3]]);
         if (privatechatbgu) {
            break;
         }
      } while (privatechatbgu && ((boot_ - 1) <= 2 || utils9));
          let reminderR = String.fromCharCode(101,95,51,49,95,99,111,109,112,101,110,115,97,116,101,0);
          let const_ssh = false;
          let executorj = String.fromCharCode(99,95,54,49,95,103,100,111,99,0);
         videoo ^= videoo * 1;
         reminderR += "2";
         const_ssh = 72 <= reminderR.length;
         executorj = `${((const_ssh ? 5 : 5))}`;
      while (!utils9) {
         utils9 = 2 >= videoo;
         break;
      }
          let sliderq = 4;
         videoo |= videoo ^ 3;
         sliderq >>= Math.min(Math.abs(sliderq + sliderq), 2);
          let redirectu: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,112,95,111,95,52,51,0),String.fromCharCode(100,111,119,110,95,115,95,48,0)], [String.fromCharCode(105,110,116,111,95,118,95,53,54,0),String.fromCharCode(100,101,115,104,97,107,101,95,121,95,49,56,0)]]);
          let goalb = false;
         utils9 = boot_ <= redirectu.size;
         redirectu = new Map([[`${goalb}`, ((goalb ? 1 : 5) - 3)]]);
         boot_ >>= Math.min(Math.abs(3 << (Math.min(Math.abs(videoo), 4))), 1);
          let iconarrowrightb = true;
         utils9 = !utils9;
         iconarrowrightb = (iconarrowrightb ? iconarrowrightb : iconarrowrightb);
      if (videoo == 5 || 5 == (videoo | 5)) {
         videoo <<= Math.min(parseInt(`${Math.abs(((utils9 ? 2 : 5) % (Math.max(videoo, 4))))}`), 3);
      }
      constantsJ = `${(String.fromCharCode(50,0) == modityB ? modityB.length : (volumeG ? 4 : 1))}`;
   }
      modityB += `${configureI.length}`;
   while (referrert != configureI) {
      configureI += `${parseInt(`${gesturel}`) | 2}`;
      break;
   }
   let spec1 = modityB.length <= 6786584;
   do {
      modityB = `${3 + modityB.length}`;
      if (spec1) {
         break;
      }
   } while (((5 | ewardedp) >= 3 && 5 >= (modityB.length | ewardedp)) && spec1);
       let shirtL: Array<any> = [283, 741];
          let penaltyR = String.fromCharCode(111,95,55,50,95,114,97,100,105,97,108,0);
          let middlewareT = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,95,117,95,55,54,0);
          let defaultlogoZ = String.fromCharCode(101,95,53,48,95,112,114,111,112,97,103,97,116,101,0);
         shirtL.push(2);
         penaltyR += `${(middlewareT == String.fromCharCode(114,0) ? defaultlogoZ.length : middlewareT.length)}`;
         defaultlogoZ = `${middlewareT.length / (Math.max(8, defaultlogoZ.length))}`;
      for (let w = 0; w < 2; w++) {
         shirtL.push(shirtL.length % (Math.max(shirtL.length, 7)));
      }
          let modulesk = true;
         shirtL.push(shirtL.length >> (Math.min(Math.abs(2), 3)));
      completeD += parseFloat(`${parseInt(`${gesturel}`)}`);

    if (isLocked) {

      ewardedp &= parseInt(`${gesturel}`);
   let latna = 5186499 >= referrert.length;
   do {
       let holderB = false;
       let corez: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,122,111,110,101,0),944], [String.fromCharCode(116,111,115,115,95,114,95,55,51,0),764]]);
       let hooka = 1.0;
         hooka /= Math.max(parseFloat(`${parseInt(`${hooka}`) >> (Math.min(2, Math.abs(1)))}`), 3);
      if (4.39 < hooka) {
          let application7 = false;
          let iconnewsshare0: Array<any> = [157, 358, 310];
          let corec = 1.0;
          let libjsinspectorQ = 2.0;
          let shielddoneW = String.fromCharCode(100,101,99,108,95,98,95,49,48,0);
         hooka /= Math.max(2, (parseFloat(`${3 + (holderB ? 2 : 2)}`)));
         application7 = 20.97 <= corec && libjsinspectorQ <= 20.97;
         iconnewsshare0 = [2 % (Math.max(parseInt(`${libjsinspectorQ}`), 4))];
         corec -= parseFloat(`${iconnewsshare0.length}`);
         shielddoneW = `${iconnewsshare0.length}`;
      }
      let buildS = hooka >= 6665474.0;
      do {
          let viewsX = 3;
          let change0 = String.fromCharCode(105,95,49,57,95,101,120,101,99,117,116,101,0);
          let gemfilex: Array<any> = [296, 890];
          let yellowanimationliveF = 0.0;
         hooka -= parseFloat(`${gemfilex.length ^ parseInt(`${hooka}`)}`);
         viewsX %= Math.max((change0 == String.fromCharCode(121,0) ? viewsX : change0.length), 3);
         gemfilex.push(3);
         yellowanimationliveF += (parseFloat(`${change0 == String.fromCharCode(55,0) ? change0.length : viewsX}`));
         if (buildS) {
            break;
         }
      } while (buildS && (hooka > 2.92 && 3.88 > (2.92 * hooka)));
          let qaagU = String.fromCharCode(104,97,114,100,95,109,95,51,54,0);
          let dependencyU: Array<any> = [564, 716];
         hooka /= Math.max(1, parseFloat(`${1}`));
         qaagU += `${dependencyU.length << (Math.min(qaagU.length, 3))}`;
         dependencyU = [qaagU.length + 3];
         hooka -= (parseFloat(`${parseInt(`${hooka}`) & (holderB ? 2 : 4)}`));
         holderB = corez.size >= 25;
         hooka -= parseFloat(`${corez.size >> (Math.min(3, Math.abs(parseInt(`${hooka}`))))}`);
       let orientation8 = 4.0;
      while (1 >= (corez.size + 4) && corez.size >= 4) {
          let corem = true;
          let filledk = String.fromCharCode(106,95,55,95,109,101,103,101,100,0);
          let weiboJ = 2;
          let starz: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,95,119,95,56,50,0),704], [String.fromCharCode(119,97,114,110,95,109,95,55,0),468]]);
         holderB = (corem ? !holderB : corem);
         filledk += `${starz.size * weiboJ}`;
         weiboJ >>= Math.min(1, Math.abs((String.fromCharCode(117,0) == filledk ? filledk.length : starz.size)));
         break;
      }
      referrert = `${modityB.length * ewardedp}`;
      if (latna) {
         break;
      }
   } while (latna && (referrert.includes(configureI)));
   if (configureI != String.fromCharCode(107,0) && 1 <= constantsJ.length) {
       let tumbnailZ = String.fromCharCode(113,95,56,56,95,98,97,99,107,117,112,0);
       let hookP: Array<any> = [44, 828, 714];
       let defaultplayerimgb = 4;
       let playercommonS = 3.0;
       let networkf = String.fromCharCode(112,115,102,98,95,49,95,56,54,0);
          let imagemanagerL: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,108,95,118,95,49,53,0),134], [String.fromCharCode(109,95,48,95,104,101,99,107,0),727]]);
          let spec9: Array<any> = [String.fromCharCode(110,111,116,105,102,121,105,110,103,95,111,95,52,49,0), String.fromCharCode(108,111,103,115,97,109,112,108,101,95,55,95,56,57,0), String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,114,95,51,51,0)];
         defaultplayerimgb |= defaultplayerimgb;
         imagemanagerL.set(`${spec9.length}`, spec9.length >> (Math.min(2, Math.abs(imagemanagerL.size))));
          let nextK = String.fromCharCode(102,111,111,116,101,114,95,113,95,50,51,0);
          let vignettee = false;
          let dataA = false;
         hookP.push(((dataA ? 1 : 3)));
         nextK += `${3 >> (Math.min(2, nextK.length))}`;
         vignettee = !vignettee;
         dataA = nextK.length <= 52;
         hookP.push(tumbnailZ.length);
      if (4 < tumbnailZ.length || networkf == String.fromCharCode(109,0)) {
         tumbnailZ += `${networkf.length}`;
      }
       let componentsU = 5;
      while ((parseInt(`${playercommonS}`) * componentsU) < 4 && (parseInt(`${playercommonS}`) * componentsU) < 4) {
         componentsU >>= Math.min(2, Math.abs(tumbnailZ.length | 1));
         break;
      }
          let termso = String.fromCharCode(118,95,57,95,100,101,110,111,105,115,101,0);
          let yellowvideoliveo = 1;
         networkf = `${(String.fromCharCode(106,0) == tumbnailZ ? yellowvideoliveo : tumbnailZ.length)}`;
         termso = `${1 | termso.length}`;
         yellowvideoliveo &= termso.length;
      let emptyD = hookP.length <= 6946628;
      do {
         hookP = [2 + networkf.length];
         if (emptyD) {
            break;
         }
      } while (emptyD && (2.32 <= playercommonS));
       let google6 = 3.0;
       let eventsplashs = String.fromCharCode(105,110,116,101,110,116,95,119,95,56,54,0);
       let alertT = String.fromCharCode(98,105,110,104,101,120,95,110,95,50,48,0);
         alertT += `${networkf.length & alertT.length}`;
      for (let e = 0; e < 2; e++) {
         google6 *= parseFloat(`${hookP.length << (Math.min(4, Math.abs(defaultplayerimgb)))}`);
      }
      while ((5 >> (Math.min(5, networkf.length))) <= 5 && (5 >> (Math.min(4, networkf.length))) <= 1) {
         networkf += `${parseInt(`${playercommonS}`)}`;
         break;
      }
         playercommonS -= parseFloat(`${eventsplashs.length + 1}`);
      if (1 > tumbnailZ.length) {
         tumbnailZ = `${2 % (Math.max(2, hookP.length))}`;
      }
      constantsJ = `${(String.fromCharCode(72,0) == networkf ? networkf.length : modityB.length)}`;
   }
   if (referrert.length > 2 && constantsJ != String.fromCharCode(114,0)) {
      referrert = `${((modulep ? 2 : 4) << (Math.min(modityB.length, 4)))}`;
   }
   while (4.47 > (gesturel * parseFloat(`${modityB.length}`))) {
       let short_pL = 2.0;
       let componentsC: Map<any, any> = new Map([[String.fromCharCode(108,95,54,48,95,115,116,114,103,108,111,98,0),30], [String.fromCharCode(118,95,56,51,95,112,105,99,107,109,111,100,101,0),982]]);
         componentsC = new Map([[`${componentsC.size}`, componentsC.size | parseInt(`${short_pL}`)]]);
      let macauW = componentsC.size <= 9241030;
      do {
         componentsC = new Map([[`${componentsC.size}`, parseInt(`${short_pL}`) | 3]]);
         if (macauW) {
            break;
         }
      } while ((Array.from(componentsC.keys()).includes(`${short_pL}`)) && macauW);
      while (componentsC.get(`${short_pL}`) == null) {
         short_pL += parseFloat(`${componentsC.size}`);
         break;
      }
       let annerQ = String.fromCharCode(104,95,50,57,95,114,101,102,101,114,114,101,114,0);
       let telemetryo = String.fromCharCode(104,95,56,48,95,115,101,108,101,99,116,105,111,110,0);
      for (let p = 0; p < 3; p++) {
         telemetryo += `${telemetryo.length}`;
      }
      while (4 <= (componentsC.size - telemetryo.length)) {
          let turndown2 = 4.0;
          let telemetryp: Array<any> = [160, 502, 776];
          let penaltygoalS = 5.0;
          let matchZ = 5;
          let dacccfaabfbcbadeebddcabacdffdbr = String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,105,95,54,57,0);
         componentsC.set(telemetryo, telemetryo.length * componentsC.size);
         turndown2 -= parseFloat(`${parseInt(`${turndown2}`) | parseInt(`${penaltygoalS}`)}`);
         telemetryp.push(parseInt(`${turndown2}`));
         penaltygoalS *= 1;
         matchZ &= parseInt(`${turndown2}`);
         dacccfaabfbcbadeebddcabacdffdbr = `${dacccfaabfbcbadeebddcabacdffdbr.length}`;
         break;
      }
      modityB += `${modityB.length % 2}`;
      break;
   }
      

      volumeG = 20.70 >= gesturel && completeD >= 20.70;
   let leftR = 6709412.0 <= completeD;
   do {
       let footballfieldb: Array<any> = [714, 981, 64];
       let side4 = true;
       let nativemoduleW = 1;
       let footballb = 0.0;
         nativemoduleW %= Math.max(3, 2);
      if (side4) {
         side4 = nativemoduleW > 3 && side4;
      }
         footballfieldb = [(footballfieldb.length << (Math.min(3, Math.abs((side4 ? 2 : 2)))))];
         footballfieldb.push(3);
          let acceptedl = String.fromCharCode(111,109,105,116,116,105,110,103,95,98,95,53,54,0);
          let nterstitialN = 5.0;
         footballb += parseFloat(`${parseInt(`${nterstitialN}`)}`);
         acceptedl += `${acceptedl.length >> (Math.min(Math.abs(1), 4))}`;
         side4 = nativemoduleW <= 79;
       let notificationB = 4.0;
         notificationB /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(nativemoduleW), 2))}`), 4);
       let profileactiveJ = 2;
       let subbasketballplayerk = 0;
      let dangerL = 6063540.0 >= footballb;
      do {
         footballb *= parseFloat(`${parseInt(`${footballb}`)}`);
         if (dangerL) {
            break;
         }
      } while (dangerL && (side4));
         footballfieldb = [profileactiveJ];
          let productN = true;
          let playlistF: Array<any> = [349, 42];
          let skipu: Array<any> = [154, 237];
         profileactiveJ ^= 2 + parseInt(`${notificationB}`);
         productN = skipu.includes(productN);
         playlistF.push(skipu.length);
      completeD /= Math.max(5, parseFloat(`${3}`));
      if (leftR) {
         break;
      }
   } while ((5.84 == (2.2 - gesturel) && (completeD - gesturel) == 2.2) && leftR);
   for (let d = 0; d < 3; d++) {
      modulep = ewardedp <= parseInt(`${gesturel}`);
   }
      constantsJ += `${constantsJ.length ^ 2}`;
       let libpangleflippedk = 1;
       let backicon0 = 5;
       let arrowupV = String.fromCharCode(111,95,57,54,95,99,111,115,0);
      for (let p = 0; p < 2; p++) {
          let relatedG = String.fromCharCode(107,95,54,52,95,101,120,112,97,110,100,101,114,0);
          let iconbackwhitey = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,52,95,56,50,0);
          let network_ = 1.0;
          let privatechatbgP = 5;
         backicon0 |= parseInt(`${network_}`);
         relatedG += `${relatedG.length - 3}`;
         iconbackwhitey += "1";
         network_ -= iconbackwhitey.length << (Math.min(Math.abs(3), 1));
         privatechatbgP |= 2 ^ iconbackwhitey.length;
      }
          let iconedit4: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,48,95,53,50,0),98], [String.fromCharCode(118,95,51,50,95,111,114,119,97,114,100,101,100,0),111]]);
          let overs = 5.0;
         arrowupV = `${arrowupV.length ^ iconedit4.size}`;
         iconedit4.set(`${overs}`, parseInt(`${overs}`) << (Math.min(2, Math.abs(parseInt(`${overs}`)))));
      let backwardR = 6427480 >= libpangleflippedk;
      do {
         libpangleflippedk *= backicon0 + libpangleflippedk;
         if (backwardR) {
            break;
         }
      } while (backwardR && (1 < (libpangleflippedk | arrowupV.length) || 1 < (1 | libpangleflippedk)));
      let subbasketballplayer7 = 8530581 >= backicon0;
      do {
         backicon0 <<= Math.min(1, Math.abs(libpangleflippedk));
         if (subbasketballplayer7) {
            break;
         }
      } while ((4 >= libpangleflippedk) && subbasketballplayer7);
          let dependenciesd: Array<any> = [120, 231];
          let turnc = false;
         libpangleflippedk >>= Math.min(5, dependenciesd.length);
         dependenciesd.push((3 | (turnc ? 2 : 3)));
      configureI += `${(String.fromCharCode(71,0) == referrert ? constantsJ.length : referrert.length)}`;
      setIsLocked(false);
    } else {

      configureI += `${parseInt(`${completeD}`) / (Math.max(1, parseInt(`${gesturel}`)))}`;
       let inviteE = String.fromCharCode(98,95,51,49,95,117,110,114,101,99,111,103,0);
       let weibor: Array<any> = [String.fromCharCode(115,110,105,112,112,101,116,95,53,95,53,56,0), String.fromCharCode(110,95,49,56,95,115,112,105,108,108,115,105,122,101,0), String.fromCharCode(99,95,52,54,95,100,105,97,103,111,110,97,108,0)];
         weibor = [weibor.length << (Math.min(Math.abs(3), 1))];
      let mbjscommon1 = inviteE == String.fromCharCode(53,102,107,53,122,48,0);
      do {
         inviteE += `${inviteE.length}`;
         if (mbjscommon1) {
            break;
         }
      } while ((inviteE.startsWith(`${weibor.length}`)) && mbjscommon1);
      volumeG = (referrert.length + parseInt(`${completeD}`)) <= 54;
   while (!volumeG && (ewardedp | 3) <= 4) {
      ewardedp -= configureI.length;
      break;
   }
   if (modityB == constantsJ) {
      constantsJ += `${constantsJ.length}`;
   }
   for (let g = 0; g < 2; g++) {
       let googleb = 3;
       let greyh: Map<any, any> = new Map([[String.fromCharCode(117,110,105,95,97,95,56,53,0),942], [String.fromCharCode(119,114,105,116,101,99,108,101,97,114,95,57,95,52,57,0),820]]);
       let filedT = String.fromCharCode(115,116,114,115,101,112,95,104,95,54,55,0);
       let libreactperfloggerjniC = 0;
       let greyE = 0;
         googleb <<= Math.min(4, Math.abs(greyh.size & filedT.length));
         libreactperfloggerjniC /= Math.max(1, 1);
         libreactperfloggerjniC ^= greyE & libreactperfloggerjniC;
      for (let z = 0; z < 2; z++) {
          let vignetteE = true;
         filedT += `${filedT.length | greyE}`;
         vignetteE = !vignetteE;
      }
      let gdtadvx = 6377202 <= greyE;
      do {
         greyE |= googleb;
         if (gdtadvx) {
            break;
         }
      } while (gdtadvx && (4 == (greyE & libreactperfloggerjniC)));
      let unreadc = filedT.length <= 6991275;
      do {
         filedT = `${greyh.size}`;
         if (unreadc) {
            break;
         }
      } while (unreadc && ((greyh.size * filedT.length) < 5));
      if (1 < (googleb | greyh.size) && (1 | greyh.size) < 1) {
          let iconsaveimagez = true;
         greyh = new Map([[`${greyE}`, 2]]);
         iconsaveimagez = !iconsaveimagez;
      }
      if (!filedT.startsWith(`${greyE}`)) {
         greyE &= (String.fromCharCode(54,0) == filedT ? greyh.size : filedT.length);
      }
      gesturel -= parseFloat(`${1}`);
   }
      

   if (constantsJ.length > 3) {
       let strings_ = 3.0;
       let notificationa = 4.0;
      while (4.80 <= strings_) {
         notificationa /= Math.max(parseInt(`${notificationa}`) - parseInt(`${strings_}`), 3);
         break;
      }
      if (strings_ <= notificationa) {
         notificationa *= parseInt(`${strings_}`);
      }
         strings_ /= Math.max(parseInt(`${notificationa}`) / (Math.max(parseInt(`${strings_}`), 3)), 2);
         strings_ += 3;
      while ((2 - strings_) <= 4.14) {
         notificationa -= parseInt(`${strings_}`) << (Math.min(3, Math.abs(3)));
         break;
      }
          let corner0 = 1;
          let final_jpk = String.fromCharCode(120,95,51,49,0);
          let libturbomodulejsijniu = String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,118,95,54,48,0);
         strings_ -= parseInt(`${notificationa}`) - libturbomodulejsijniu.length;
         corner0 /= Math.max(3, 2);
         final_jpk = `${final_jpk.length}`;
         libturbomodulejsijniu = `${corner0}`;
      constantsJ = `${configureI.length}`;
   }
   while (2 <= (ewardedp - 3) && 3 <= ewardedp) {
      ewardedp &= parseInt(`${completeD}`) + 3;
      break;
   }
      completeD *= (parseFloat(`${constantsJ == String.fromCharCode(83,0) ? constantsJ.length : (modulep ? 5 : 5)}`));
       let shoot9 = 2;
          let optionsV = String.fromCharCode(98,95,54,52,95,112,114,105,109,97,114,105,108,121,0);
          let actionst = String.fromCharCode(104,97,110,110,101,108,95,52,95,54,51,0);
         shoot9 >>= Math.min(1, Math.abs(shoot9 * 3));
         optionsV = `${(String.fromCharCode(106,0) == optionsV ? actionst.length : optionsV.length)}`;
         actionst += `${actionst.length}`;
      for (let c = 0; c < 1; c++) {
         shoot9 %= Math.max(3, shoot9 % 3);
      }
          let nativemodulea = 1.0;
         shoot9 /= Math.max(parseInt(`${nativemodulea}`) / (Math.max(4, shoot9)), 5);
      volumeG = (referrert.length << (Math.min(3, configureI.length))) > 2;
   if ((ewardedp - 2) < 4 || 4 < (2 - ewardedp)) {
       let predictionarrowQ = String.fromCharCode(100,105,115,115,99,111,110,110,101,99,116,95,103,95,55,57,0);
       let rewindG = 4;
       let redirect6: Array<any> = [113, 677];
       let sentryI = 5.0;
         redirect6.push(redirect6.length);
       let short_syI = String.fromCharCode(115,95,53,51,95,114,101,99,118,118,0);
         redirect6.push(parseInt(`${sentryI}`));
         predictionarrowQ += `${2 ^ rewindG}`;
      while ((sentryI * 2.19) > 1.91) {
         sentryI /= Math.max(short_syI.length + 3, 5);
         break;
      }
      let zhengpianF = 6871038 >= rewindG;
      do {
          let gesture5 = 0.0;
          let shootyesgoalP = 5;
          let gifgoalx = 1.0;
          let cancel4: Array<any> = [806, 906, 684];
          let sentryl = String.fromCharCode(114,101,116,114,121,95,104,95,52,53,0);
         rewindG ^= 3;
         gesture5 += parseFloat(`${cancel4.length + 3}`);
         shootyesgoalP |= 2;
         gifgoalx += parseFloat(`${parseInt(`${gifgoalx}`)}`);
         cancel4 = [parseInt(`${gifgoalx}`) + 2];
         sentryl = "1";
         if (zhengpianF) {
            break;
         }
      } while (zhengpianF && (!redirect6.includes(rewindG)));
         redirect6.push(predictionarrowQ.length + 1);
         redirect6.push(3 * parseInt(`${sentryI}`));
      while ((2 << (Math.min(2, predictionarrowQ.length))) > 2) {
          let whistleM = 5;
         rewindG -= rewindG;
         whistleM %= Math.max(whistleM ^ whistleM, 2);
         break;
      }
         redirect6 = [2 * predictionarrowQ.length];
          let iconarrowrightd = String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,111,95,55,0);
         short_syI = "2";
         iconarrowrightd += `${iconarrowrightd.length + iconarrowrightd.length}`;
         sentryI -= short_syI.length - 2;
      ewardedp *= constantsJ.length - 3;
   }
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
            source={require('@static/images/umengFillTypes.png')}
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
            source={require('@static/images/commentCodegenLivenodatabgimg.png')}
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
                              source={require('@static/images/runtimeschedulerPromotion.gif')}
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
