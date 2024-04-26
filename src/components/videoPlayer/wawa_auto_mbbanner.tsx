import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity, Platform } from 'react-native';
import MiddleControls from './wawa_predictionactive';
import BottomControls from './wawa_executor';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/wawa_awayteamfield_airbnbstarselected_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/wawa_airbnbstarselected_playlist';
import { wawaIconeyeMoonItem, wawaXvodNeon, wawaSellProfileinactive } from '@type/wawa_gradlew';
import VodCombinedGesture from '../gestures/vod/wawa_homeplayer';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/disconnectedThailandLibswscale.svg';
import ProjectIcon from '@static/images/dataPromotion.svg'
import VodListVertical from '../vod/wawa_icon_action';
import GesturesGuide from '../gestures/vod/wawa_member';
import VodLiveStationListVertical from '../vod/wawa_reactnativeratings_mounting';
import FastImage from '../common/wawa_iconarrowrightblack';
import { screenModel } from '@type/wawa_rules';
import { useAppSelector } from '@hooks/wawa_root';
import AdultModeCountdownIndicator from '../adultVideo/wawa_station';
import { DOWNLOAD_FEATURE_ENABLED, UMENG_CHANNEL } from '@utility/wawa_iconpointscore';
import DownloadBtn from '@static/images/relatedChatroombackgroundLibfbjni.svg';
import VodDownloadSelection from '../vod/wawa_hooks';

type wawaAwayShow = {
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
  episodes?: wawaXvodNeon
  movieList?: wawaSellProfileinactive[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: wawaIconeyeMoonItem[],
  isFetchingRecommendedMovies?: boolean,
  isVip: boolean,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
};

type wawaDescMiddleware = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<wawaDescMiddleware, wawaAwayShow>(({
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
       let profileinactive2: Array<any> = [8, 194];
    let mathK = String.fromCharCode(103,95,57,50,95,111,117,116,100,101,118,115,0);
    let matchactive9 = 0.0;
    let greenarrowupx = String.fromCharCode(119,97,108,108,112,97,112,101,114,95,104,95,56,54,0);
    let livenodatabgimgI = 4;
    let floatingy = false;
    let strings1 = 5.0;
    let with_vs6: Map<any, any> = new Map([[String.fromCharCode(114,101,110,111,114,109,95,106,95,55,0),false ], [String.fromCharCode(112,111,115,108,105,115,116,115,95,119,95,50,49,0),true ], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,54,95,57,51,0),false ]]);
    let encrypt4 = false;
    let b_unlockt = String.fromCharCode(116,119,101,97,107,95,100,95,57,57,0);
    let scrollviewo = 5.0;
    let penaltyshootq: Map<any, any> = new Map([[String.fromCharCode(114,101,98,97,108,97,110,99,101,95,121,95,48,0),40], [String.fromCharCode(121,101,97,114,95,114,95,55,53,0),834], [String.fromCharCode(99,108,97,109,112,101,100,95,53,95,51,57,0),348]]);
    let windh = String.fromCharCode(102,95,54,48,95,115,105,116,101,0);
       let dycreatorN = String.fromCharCode(99,95,49,53,95,115,104,97,100,101,0);
      if (3 == dycreatorN.length) {
         dycreatorN += `${dycreatorN.length / (Math.max(3, 5))}`;
      }
      if (5 == dycreatorN.length && dycreatorN.length == 5) {
          let helperH = false;
         dycreatorN += `${(1 | (helperH ? 5 : 4))}`;
      }
         dycreatorN = `${dycreatorN.length << (Math.min(Math.abs(3), 3))}`;
      profileinactive2 = [greenarrowupx.length % 3];
      b_unlockt += `${parseInt(`${scrollviewo}`) + 1}`;
       let root_ = true;
      for (let g = 0; g < 2; g++) {
         root_ = !root_ || !root_;
      }
       let abidetectf = String.fromCharCode(100,105,115,97,98,108,101,100,95,57,95,55,50,0);
      while (4 <= abidetectf.length) {
          let successN = String.fromCharCode(99,101,110,116,114,97,108,108,121,95,56,95,54,49,0);
         abidetectf = `${(successN.length >> (Math.min(4, Math.abs((root_ ? 3 : 4)))))}`;
         break;
      }
      livenodatabgimgI &= parseInt(`${matchactive9}`);
      matchactive9 *= livenodatabgimgI;
   let predictiondefaultZ = 7549821 >= b_unlockt.length;
   do {
      b_unlockt = `${2 | with_vs6.size}`;
      if (predictiondefaultZ) {
         break;
      }
   } while ((b_unlockt.startsWith(`${scrollviewo}`)) && predictiondefaultZ);
   for (let o = 0; o < 1; o++) {
       let chinaU = 2.0;
       let airbnbstarg = 5;
      let humidityK = chinaU <= 9615759.0;
      do {
         chinaU += parseFloat(`${airbnbstarg + parseInt(`${chinaU}`)}`);
         if (humidityK) {
            break;
         }
      } while (humidityK && (4.8 == chinaU));
      if ((4 >> (Math.min(5, Math.abs(airbnbstarg)))) >= 3) {
          let searchu = 0.0;
          let currentZ: Map<any, any> = new Map([[String.fromCharCode(121,95,52,57,95,97,112,112,101,97,114,101,110,99,101,0),true ], [String.fromCharCode(109,105,100,115,95,105,95,56,50,0),false ]]);
          let signinupd = String.fromCharCode(114,95,49,53,95,115,112,101,99,116,105,109,101,0);
          let profilepicH = 5;
          let imagemanagerI = String.fromCharCode(102,95,56,54,95,115,121,110,99,119,111,114,100,115,0);
         chinaU += parseFloat(`${1 | profilepicH}`);
         searchu /= Math.max(1, parseFloat(`${imagemanagerI.length}`));
         currentZ = new Map([[`${currentZ.size}`, 2 ^ currentZ.size]]);
         signinupd = `${parseInt(`${searchu}`) ^ 3}`;
         profilepicH += parseInt(`${searchu}`) | imagemanagerI.length;
      }
          let profilepico = String.fromCharCode(115,101,101,100,95,102,95,49,51,0);
          let profileactiveU = String.fromCharCode(106,95,50,50,95,115,116,111,112,101,100,0);
         chinaU *= parseFloat(`${1}`);
         profilepico += `${(profilepico == String.fromCharCode(115,0) ? profileactiveU.length : profilepico.length)}`;
         profileactiveU = `${profilepico.length}`;
         chinaU /= Math.max(parseFloat(`${3}`), 2);
         chinaU -= parseFloat(`${3}`);
         airbnbstarg <<= Math.min(5, Math.abs(airbnbstarg << (Math.min(1, Math.abs(1)))));
      encrypt4 = 13.86 >= scrollviewo;
   }
      greenarrowupx += `${((floatingy ? 4 : 2))}`;
      profileinactive2.push(profileinactive2.length);
   for (let n = 0; n < 2; n++) {
      profileinactive2 = [2];
   }
      livenodatabgimgI |= ((floatingy ? 1 : 2) & 3);
      strings1 += 2 ^ parseInt(`${strings1}`);
      with_vs6 = new Map([[`${livenodatabgimgI}`, livenodatabgimgI]]);
      mathK += `${parseInt(`${scrollviewo}`)}`;
   if (encrypt4) {
      profileinactive2 = [1 << (Math.min(1, Math.abs(penaltyshootq.size)))];
   }
      livenodatabgimgI -= livenodatabgimgI;
      mathK += `${2 | windh.length}`;
   let whitebellt = 5627638.0 <= matchactive9;
   do {
      matchactive9 /= Math.max(3, parseInt(`${scrollviewo}`));
      if (whitebellt) {
         break;
      }
   } while (((matchactive9 + 1.100) >= 1.99 && 4.83 >= (1.100 + strings1)) && whitebellt);
      greenarrowupx += `${((encrypt4 ? 1 : 5) | 2)}`;
      scrollviewo += parseFloat(`${profileinactive2.length % (Math.max(8, mathK.length))}`);
      scrollviewo /= Math.max(parseFloat(`${parseInt(`${scrollviewo}`)}`), 1);
   let profileactiveA = encrypt4 ? !encrypt4 : encrypt4;
   do {
      encrypt4 = scrollviewo <= 13.87;
      if (profileactiveA) {
         break;
      }
   } while (profileactiveA && (2 <= penaltyshootq.size));
   for (let q = 0; q < 1; q++) {
       let nalyticsE = true;
       let filledv = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,50,95,50,0);
      for (let o = 0; o < 3; o++) {
          let greytickd = String.fromCharCode(114,101,112,114,101,115,101,110,116,115,95,116,95,51,53,0);
          let hook9 = 0;
          let libturbomodulejsijni1 = 4.0;
          let specd: Map<any, any> = new Map([[String.fromCharCode(117,110,101,109,98,101,100,95,48,95,53,56,0),false ], [String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,105,95,49,56,0),false ], [String.fromCharCode(99,121,99,108,101,100,95,120,95,54,53,0),false ]]);
         nalyticsE = hook9 == 97 || 72.99 == libturbomodulejsijni1;
         greytickd = `${2 & greytickd.length}`;
         hook9 %= Math.max(greytickd.length, 1);
         libturbomodulejsijni1 *= (String.fromCharCode(106,0) == greytickd ? specd.size : greytickd.length);
         specd.set(greytickd, (greytickd == String.fromCharCode(69,0) ? specd.size : greytickd.length));
      }
         filledv += `${(String.fromCharCode(101,0) == filledv ? filledv.length : (nalyticsE ? 1 : 5))}`;
      let chatroombackgroundi = filledv == String.fromCharCode(49,116,101,0);
      do {
         filledv = `${((nalyticsE ? 1 : 2) >> (Math.min(filledv.length, 1)))}`;
         if (chatroombackgroundi) {
            break;
         }
      } while (chatroombackgroundi && (filledv.startsWith(`${nalyticsE}`)));
       let light_ = true;
       let episodesb = true;
         light_ = (!light_ ? !nalyticsE : !light_);
       let rocketK = 3.0;
      matchactive9 += penaltyshootq.size;
   }
   if ((5 << (Math.min(5, b_unlockt.length))) >= 5) {
      scrollviewo *= parseFloat(`${2}`);
   }
       let indicatort = String.fromCharCode(97,95,49,50,95,97,108,119,97,121,115,0);
       let resendc = String.fromCharCode(112,97,121,101,101,95,106,95,49,51,0);
       let liveY = String.fromCharCode(121,95,57,49,95,98,105,110,115,0);
      if (resendc.length <= liveY.length) {
         resendc = `${2 >> (Math.min(1, liveY.length))}`;
      }
      let statisticsactivee = liveY == String.fromCharCode(104,110,54,102,52,116,106,112,0);
      do {
         liveY = `${liveY.length >> (Math.min(Math.abs(3), 4))}`;
         if (statisticsactivee) {
            break;
         }
      } while ((resendc == String.fromCharCode(82,0)) && statisticsactivee);
          let libffmpegkitn = 2.0;
          let statisticsactiveJ = String.fromCharCode(113,117,97,100,95,104,95,56,56,0);
          let policyA = 3;
         resendc = `${statisticsactiveJ.length}`;
         libffmpegkitn /= Math.max(5, policyA - 1);
         statisticsactiveJ = `${policyA}`;
          let iconcloseR = 3.0;
         indicatort += `${3 % (Math.max(8, parseInt(`${iconcloseR}`)))}`;
         resendc = "1";
         indicatort += `${liveY.length}`;
       let placementp: Map<any, any> = new Map([[String.fromCharCode(105,95,55,51,95,114,116,114,101,101,0),286], [String.fromCharCode(101,95,54,54,95,108,105,98,111,112,101,110,106,112,101,103,0),168]]);
       let notificationfilledC = 3;
         indicatort = `${indicatort.length}`;
      matchactive9 *= mathK.length;

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
       let upgradeC = 4;
    let iconclosewhitewithbge = 0;
    let middleR = 3.0;
    let n_animationA: Map<any, any> = new Map([[String.fromCharCode(109,95,49,51,95,102,114,101,113,117,101,110,99,121,0),String.fromCharCode(114,101,112,108,97,99,101,100,95,50,95,52,0)], [String.fromCharCode(104,95,54,56,95,114,100,101,108,116,97,0),String.fromCharCode(112,100,102,95,115,95,55,48,0)]]);
    let screens = 5.0;
    let injury6 = 1;
    let loadingm = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,95,117,95,49,50,0);
    let statisticsinactiveo = String.fromCharCode(110,95,49,54,95,99,104,101,99,107,97,115,109,0);
    let predictionw = true;
    let mountingu = 1;
    let libreact1 = 4.0;
    let iconqqV = 4;
    let forme = 3.0;
       let iconmegaphoneK = String.fromCharCode(102,105,101,108,95,121,95,53,52,0);
       let arrowselectdownZ = true;
       let trashI = 3.0;
       let statsnomoredataN = 4.0;
       let homeloadingp = String.fromCharCode(118,95,57,54,95,121,98,108,111,99,107,0);
       let livenodatabgimg8 = String.fromCharCode(112,114,111,99,101,115,115,95,101,95,56,56,0);
         trashI *= parseFloat(`${livenodatabgimg8.length | homeloadingp.length}`);
      while (parseInt(`${statsnomoredataN}`) < homeloadingp.length) {
          let foregroundP: Array<any> = [String.fromCharCode(107,95,54,51,95,109,117,116,97,116,101,0), String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,52,95,57,55,0)];
          let largebrightnessj: Array<any> = [487, 150, 782];
          let shielddoney: Map<any, any> = new Map([[String.fromCharCode(104,95,49,51,95,111,118,101,114,97,108,108,0),216], [String.fromCharCode(116,111,103,103,108,101,100,95,117,95,51,48,0),879], [String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,95,49,95,56,56,0),515]]);
          let mbnativeM: Map<any, any> = new Map([[String.fromCharCode(119,100,108,116,95,56,95,52,50,0),340], [String.fromCharCode(112,101,101,108,111,102,102,95,107,95,54,55,0),182]]);
          let submit1 = 5.0;
         statsnomoredataN *= parseFloat(`${parseInt(`${trashI}`) << (Math.min(Math.abs(parseInt(`${statsnomoredataN}`)), 1))}`);
         foregroundP.push(2);
         largebrightnessj.push(mbnativeM.size >> (Math.min(Math.abs(1), 3)));
         shielddoney.set(`${submit1}`, 3);
         mbnativeM = new Map([[`${largebrightnessj.length}`, foregroundP.length + 3]]);
         submit1 *= 1;
         break;
      }
       let playercommons: Array<any> = [316, 72, 263];
      for (let d = 0; d < 3; d++) {
         statsnomoredataN -= parseFloat(`${iconmegaphoneK.length * homeloadingp.length}`);
      }
      mountingu &= parseInt(`${middleR}`) % 3;
      iconmegaphoneK = "3";
       let mbjscommono = String.fromCharCode(111,110,101,115,95,51,95,51,54,0);
       let schedulerQ = String.fromCharCode(110,95,53,56,95,117,108,116,105,0);
      while (schedulerQ != String.fromCharCode(119,0)) {
         mbjscommono += "1";
         break;
      }
         schedulerQ = `${mbjscommono.length}`;
       let iconscheduleu = String.fromCharCode(97,112,112,101,97,114,101,100,95,121,95,54,51,0);
      let langkey9 = mbjscommono == String.fromCharCode(116,115,117,48,97,113,107,0);
      do {
         mbjscommono += `${(String.fromCharCode(71,0) == schedulerQ ? schedulerQ.length : mbjscommono.length)}`;
         if (langkey9) {
            break;
         }
      } while (langkey9 && (3 >= mbjscommono.length));
      let iconmegaphonee = schedulerQ == String.fromCharCode(51,99,103,52,122,117,0);
      do {
         schedulerQ = `${schedulerQ.length}`;
         if (iconmegaphonee) {
            break;
         }
      } while ((iconscheduleu != schedulerQ) && iconmegaphonee);
      while (2 == mbjscommono.length) {
         mbjscommono += `${schedulerQ.length}`;
         break;
      }
      iconqqV += mbjscommono.length >> (Math.min(Math.abs(3), 3));
   if (2 > (mountingu << (Math.min(Math.abs(3), 2))) || (upgradeC << (Math.min(3, Math.abs(mountingu)))) > 3) {
      upgradeC += upgradeC & mountingu;
   }
      middleR -= parseFloat(`${injury6}`);
   while (upgradeC == injury6) {
      upgradeC <<= Math.min(Math.abs(iconclosewhitewithbge % 2), 1);
      break;
   }
   if (5 > upgradeC) {
       let securityW = 4.0;
       let stringN = true;
       let push7 = String.fromCharCode(102,114,101,113,117,101,110,99,121,95,112,95,51,55,0);
      let whitebellE = 9491194.0 >= securityW;
      do {
         securityW -= parseFloat(`${3 - parseInt(`${securityW}`)}`);
         if (whitebellE) {
            break;
         }
      } while (whitebellE && ((securityW * 5.98) == 1.44 || securityW == 5.98));
      let gestureJ = String.fromCharCode(112,50,114,106,107,53,98,114,0) == push7;
      do {
         push7 += `${1 % (Math.max(1, parseInt(`${securityW}`)))}`;
         if (gestureJ) {
            break;
         }
      } while (gestureJ && (push7.length == 5 && !stringN));
         stringN = 86.53 <= securityW;
          let commentB = String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,53,95,56,49,0);
          let debugr = false;
         stringN = stringN || securityW >= 58.72;
         commentB += `${((debugr ? 5 : 2) >> (Math.min(Math.abs(3), 2)))}`;
         debugr = !debugr;
      while (2.70 <= (securityW - 3.59) && stringN) {
          let referrerW = String.fromCharCode(101,120,97,99,116,95,111,95,57,48,0);
          let logoutw: Array<any> = [690, 194, 294];
         securityW += (parseFloat(`${String.fromCharCode(99,0) == referrerW ? referrerW.length : logoutw.length}`));
         break;
      }
         push7 += `${((stringN ? 5 : 4) * push7.length)}`;
         securityW -= (parseFloat(`${push7 == String.fromCharCode(82,0) ? (stringN ? 3 : 1) : push7.length}`));
          let dplusQ = 2;
         stringN = !stringN;
         dplusQ &= dplusQ;
       let imagenomoredataA = 3.0;
      iconclosewhitewithbge ^= parseInt(`${securityW}`) << (Math.min(Math.abs(3), 5));
   }
       let mbnativep = String.fromCharCode(115,95,52,51,95,99,104,97,99,104,97,112,111,108,121,0);
         mbnativep = `${mbnativep.length & 2}`;
      while (!mbnativep.endsWith(`${mbnativep.length}`)) {
          let stats8 = false;
          let matchactived = 3.0;
          let iconshareW = false;
          let scorepopsoundP = String.fromCharCode(105,95,55,51,95,110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
         mbnativep = "2";
         stats8 = !iconshareW;
         matchactived += (parseFloat(`${(stats8 ? 2 : 3) << (Math.min(Math.abs(parseInt(`${matchactived}`)), 2))}`));
         scorepopsoundP = `${((stats8 ? 4 : 5) * scorepopsoundP.length)}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
         mbnativep = "3";
      }
      upgradeC >>= Math.min(Math.abs(mbnativep.length / (Math.max(7, parseInt(`${libreact1}`)))), 1);
   if ((5 % (Math.max(4, iconqqV))) == 4 || 5.76 == (libreact1 * parseFloat(`${iconqqV}`))) {
       let middlewareX: Map<any, any> = new Map([[String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,121,95,56,50,0),true ], [String.fromCharCode(102,95,55,48,95,105,109,112,111,114,116,97,110,99,101,0),true ], [String.fromCharCode(115,109,105,109,101,95,114,95,52,57,0),false ]]);
       let librrc6 = 4.0;
       let combineb: Map<any, any> = new Map([[String.fromCharCode(99,112,112,108,105,110,116,95,52,95,49,56,0),784], [String.fromCharCode(102,97,116,97,108,95,98,95,52,53,0),198], [String.fromCharCode(99,95,51,52,95,112,111,108,121,115,116,97,114,0),2]]);
       let smallbrightnessD: Array<any> = [180, 285];
       let libfollyQ: Array<any> = [594, 111];
      for (let a = 0; a < 3; a++) {
         combineb.set(`${smallbrightnessD.length}`, combineb.size & smallbrightnessD.length);
      }
         smallbrightnessD = [smallbrightnessD.length];
          let libreactnativeblobk = 3.0;
          let j_lockF: Array<any> = [String.fromCharCode(102,95,57,52,95,117,110,114,101,118,101,114,115,101,100,0), String.fromCharCode(114,116,112,102,98,95,97,95,49,0), String.fromCharCode(106,95,50,49,95,111,112,117,115,0)];
          let event7 = String.fromCharCode(109,111,118,101,109,101,110,116,95,116,95,53,56,0);
         combineb.set(`${smallbrightnessD.length}`, libfollyQ.length + 3);
         libreactnativeblobk *= event7.length + parseInt(`${libreactnativeblobk}`);
         j_lockF.push((String.fromCharCode(84,0) == event7 ? j_lockF.length : event7.length));
      while ((middlewareX.size % 4) < 5 || (4 % (Math.max(3, combineb.size))) < 2) {
          let iconmegaphone9 = String.fromCharCode(105,109,103,95,116,95,49,51,0);
          let expandZ = String.fromCharCode(101,105,116,104,101,114,95,57,95,52,56,0);
          let notificationr = String.fromCharCode(102,95,50,49,95,100,101,101,112,108,105,110,107,0);
          let sansl = String.fromCharCode(106,95,49,56,95,116,101,115,116,114,101,115,117,108,116,0);
         combineb.set(iconmegaphone9, 3);
         iconmegaphone9 += `${(expandZ == String.fromCharCode(65,0) ? expandZ.length : notificationr.length)}`;
         notificationr += "1";
         sansl = `${sansl.length}`;
         break;
      }
      if ((librrc6 / 4.2) == 2.7) {
         middlewareX = new Map([[`${smallbrightnessD.length}`, 2]]);
      }
      let hookR = smallbrightnessD.length <= 8739257;
      do {
         smallbrightnessD = [1];
         if (hookR) {
            break;
         }
      } while (((parseInt(`${librrc6}`) / (Math.max(4, smallbrightnessD.length))) < 2 || 4 < (2 ^ smallbrightnessD.length)) && hookR);
      while ((smallbrightnessD.length * parseInt(`${librrc6}`)) > 2) {
         smallbrightnessD.push(3 / (Math.max(10, parseInt(`${librrc6}`))));
         break;
      }
         combineb.set(`${librrc6}`, parseInt(`${librrc6}`));
         middlewareX.set(`${librrc6}`, parseInt(`${librrc6}`) * 2);
      for (let l = 0; l < 1; l++) {
          let airbnbstarselectedF: Map<any, any> = new Map([[String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,95,51,95,55,54,0),962], [String.fromCharCode(119,95,49,51,95,115,108,111,119,109,111,100,101,0),707]]);
          let gesturesP = false;
          let flipperd: Map<any, any> = new Map([[String.fromCharCode(112,108,117,115,95,112,95,56,0),505], [String.fromCharCode(113,95,55,54,95,112,114,111,116,111,99,111,108,0),649], [String.fromCharCode(100,101,99,114,101,97,115,105,110,103,95,100,95,52,51,0),183]]);
         middlewareX = new Map([[`${flipperd.size}`, combineb.size]]);
         airbnbstarselectedF.set(`${gesturesP}`, airbnbstarselectedF.size);
         flipperd = new Map([[`${airbnbstarselectedF.size}`, airbnbstarselectedF.size]]);
      }
      for (let b = 0; b < 2; b++) {
          let singaporeY: Array<any> = [870, 665];
         smallbrightnessD.push(singaporeY.length);
      }
          let armvaD = String.fromCharCode(99,111,110,102,95,108,95,55,48,0);
          let carousel7 = 4.0;
         libfollyQ = [3];
         armvaD = `${3 >> (Math.min(1, armvaD.length))}`;
         carousel7 *= parseInt(`${carousel7}`);
         combineb.set(`${smallbrightnessD.length}`, smallbrightnessD.length);
         smallbrightnessD = [parseInt(`${librrc6}`) + 1];
          let stepx = true;
          let searchbarN = String.fromCharCode(118,95,54,50,95,112,117,108,108,117,112,0);
         middlewareX.set(`${libfollyQ.length}`, combineb.size * 3);
         stepx = searchbarN.length == 17 || stepx;
         searchbarN = `${((stepx ? 5 : 3))}`;
      iconqqV &= libfollyQ.length;
   }
   let greyV = predictionw ? !predictionw : predictionw;
   do {
      predictionw = libreact1 >= 91.58;
      if (greyV) {
         break;
      }
   } while ((predictionw) && greyV);
      iconclosewhitewithbge |= injury6 - 1;
      loadingm += `${n_animationA.size}`;
      predictionw = !loadingm.endsWith(`${screens}`);
   let twitterQ = 6268124 >= statisticsinactiveo.length;
   do {
      statisticsinactiveo = `${1 ^ mountingu}`;
      if (twitterQ) {
         break;
      }
   } while (twitterQ && (!predictionw));
   let libimagepipelinea = loadingm.length >= 9824071;
   do {
       let down8 = 3.0;
       let math1: Map<any, any> = new Map([[String.fromCharCode(114,95,55,53,95,99,104,97,110,103,101,0),671], [String.fromCharCode(115,99,104,101,100,117,108,101,114,95,110,95,56,53,0),619], [String.fromCharCode(114,95,54,95,115,116,97,116,101,109,101,110,116,115,0),537]]);
       let iconeyeZ = String.fromCharCode(109,95,50,55,95,113,101,120,112,0);
      while ((parseFloat(`${math1.size}`) + down8) == 3.54 || 4 == (math1.size << (Math.min(Math.abs(5), 3)))) {
          let rewindc = String.fromCharCode(102,105,120,117,112,95,56,95,49,48,0);
         math1.set(`${down8}`, parseInt(`${down8}`) + math1.size);
         rewindc += `${rewindc.length >> (Math.min(Math.abs(3), 2))}`;
         break;
      }
      if ((math1.size % (Math.max(3, 6))) < 4) {
         iconeyeZ += `${parseInt(`${down8}`)}`;
      }
      while (!Array.from(math1.keys()).includes(`${down8}`)) {
          let videoq = String.fromCharCode(115,99,104,110,111,114,114,95,102,95,52,53,0);
         math1.set(iconeyeZ, parseInt(`${down8}`));
         videoq = `${(videoq == String.fromCharCode(71,0) ? videoq.length : videoq.length)}`;
         break;
      }
         math1 = new Map([[`${math1.size}`, math1.size]]);
         math1 = new Map([[`${math1.size}`, iconeyeZ.length ^ math1.size]]);
      if (Array.from(math1.values()).includes(down8)) {
         down8 *= parseFloat(`${2}`);
      }
          let injuryb: Map<any, any> = new Map([[String.fromCharCode(100,99,109,112,95,99,95,54,52,0),String.fromCharCode(122,95,52,51,95,110,97,110,111,112,98,0)], [String.fromCharCode(118,95,49,56,95,116,111,120,121,122,0),String.fromCharCode(108,95,56,55,95,103,101,110,101,114,97,116,111,114,0)], [String.fromCharCode(115,105,103,110,97,98,108,101,95,104,95,49,49,0),String.fromCharCode(101,95,49,49,95,99,111,111,114,100,105,110,97,116,111,114,0)]]);
          let logousers = false;
          let submitW = 5;
         math1.set(`${logousers}`, ((logousers ? 2 : 4) & iconeyeZ.length));
         injuryb.set(`${submitW}`, 2 << (Math.min(4, Math.abs(injuryb.size))));
         submitW &= submitW | 2;
      if (5 > (1 / (Math.max(5, math1.size)))) {
         math1 = new Map([[iconeyeZ, iconeyeZ.length | 1]]);
      }
      for (let o = 0; o < 3; o++) {
          let libfbk = true;
          let iconpipshrink3 = String.fromCharCode(105,95,52,53,95,112,105,99,109,101,109,115,101,116,0);
          let predictionbuttony = 2;
         math1.set(iconpipshrink3, iconpipshrink3.length & 3);
         libfbk = libfbk || predictionbuttony < 2;
         predictionbuttony >>= Math.min(3, Math.abs(predictionbuttony));
      }
      loadingm += `${math1.size + upgradeC}`;
      if (libimagepipelinea) {
         break;
      }
   } while (libimagepipelinea && (loadingm.startsWith(`${predictionw}`)));

    setShowSliderThumbnail(!showSliderThumbnail);

   for (let n = 0; n < 2; n++) {
      n_animationA.set(`${upgradeC}`, 2);
   }
       let iconmoreL: Map<any, any> = new Map([[String.fromCharCode(110,95,54,95,100,117,114,97,116,105,111,110,0),76], [String.fromCharCode(108,111,111,107,115,95,116,95,57,51,0),257]]);
      let borderlessj = iconmoreL.size <= 7309643;
      do {
         iconmoreL = new Map([[`${iconmoreL.size}`, iconmoreL.size - iconmoreL.size]]);
         if (borderlessj) {
            break;
         }
      } while ((iconmoreL.size < 3) && borderlessj);
      while ((iconmoreL.size | 5) >= 3) {
         iconmoreL.set(`${iconmoreL.size}`, 1 + iconmoreL.size);
         break;
      }
      for (let u = 0; u < 2; u++) {
          let darkF = 2.0;
         iconmoreL.set(`${darkF}`, iconmoreL.size << (Math.min(4, Math.abs(parseInt(`${darkF}`)))));
      }
      libreact1 /= Math.max(parseFloat(`${parseInt(`${libreact1}`)}`), 4);
      statisticsinactiveo = `${statisticsinactiveo.length}`;
      statisticsinactiveo = `${3 * iconclosewhitewithbge}`;
   while (mountingu < 5) {
      libreact1 -= parseFloat(`${parseInt(`${middleR}`)}`);
      break;
   }
      iconclosewhitewithbge -= parseInt(`${middleR}`);
   for (let a = 0; a < 3; a++) {
      n_animationA = new Map([[`${upgradeC}`, upgradeC]]);
   }
      upgradeC -= 2 + upgradeC;
      statisticsinactiveo = `${n_animationA.size}`;
       let bufferX = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,99,95,51,55,0);
         bufferX += `${bufferX.length >> (Math.min(bufferX.length, 5))}`;
         bufferX = `${bufferX.length ^ 2}`;
         bufferX = `${bufferX.length}`;
      middleR += parseFloat(`${iconclosewhitewithbge}`);
   for (let w = 0; w < 2; w++) {
      screens += parseFloat(`${loadingm.length + 2}`);
   }
   let chatbotphotoL = 6401040 <= iconclosewhitewithbge;
   do {
      iconclosewhitewithbge |= loadingm.length;
      if (chatbotphotoL) {
         break;
      }
   } while ((2 >= (mountingu / (Math.max(5, 10))) && (iconclosewhitewithbge / (Math.max(1, mountingu))) >= 5) && chatbotphotoL);
   for (let m = 0; m < 1; m++) {
       let middlewaret = 3.0;
       let eactC = 3;
       let greytickF = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,53,95,50,56,0);
         greytickF += `${parseInt(`${middlewaret}`) - 1}`;
       let filled7: Array<any> = [844, 468];
      for (let m = 0; m < 1; m++) {
         eactC /= Math.max(greytickF.length, 3);
      }
      let iconarrowrightblack7 = 5080344 <= eactC;
      do {
          let subbasketballplayer9: Array<any> = [528, 986, 554];
          let catalogG: Map<any, any> = new Map([[String.fromCharCode(115,107,101,121,95,57,95,49,56,0),7], [String.fromCharCode(109,95,53,54,95,109,112,101,103,97,117,100,105,111,100,115,112,0),111]]);
         eactC |= catalogG.size - 1;
         subbasketballplayer9.push(subbasketballplayer9.length + subbasketballplayer9.length);
         catalogG = new Map([[`${subbasketballplayer9.length}`, subbasketballplayer9.length ^ subbasketballplayer9.length]]);
         if (iconarrowrightblack7) {
            break;
         }
      } while (iconarrowrightblack7 && (1 == (eactC % 4) && 4 == (4 % (Math.max(4, eactC)))));
         filled7.push(parseInt(`${middlewaret}`) << (Math.min(2, Math.abs(eactC))));
          let unimplementedviewh = false;
         greytickF = `${greytickF.length & filled7.length}`;
         unimplementedviewh = unimplementedviewh && !unimplementedviewh;
         middlewaret *= filled7.length | greytickF.length;
         greytickF = `${greytickF.length - eactC}`;
      while (1.95 > (middlewaret + eactC)) {
          let predictionlossD = String.fromCharCode(97,100,100,114,101,115,115,95,105,95,56,49,0);
          let playi = 0;
          let sliderg = String.fromCharCode(100,95,50,51,95,117,110,109,97,115,107,0);
          let fulll = 4.0;
          let turnK: Map<any, any> = new Map([[String.fromCharCode(120,95,55,95,120,121,122,116,97,98,108,101,115,0),934], [String.fromCharCode(105,95,57,55,95,102,97,100,101,0),303]]);
         middlewaret += predictionlossD.length * parseInt(`${middlewaret}`);
         predictionlossD = `${playi / (Math.max(parseInt(`${fulll}`), 1))}`;
         playi %= Math.max(playi % (Math.max(sliderg.length, 4)), 3);
         sliderg = `${2 << (Math.min(3, Math.abs(turnK.size)))}`;
         fulll -= parseFloat(`${turnK.size & 2}`);
         break;
      }
      middleR += (parseFloat(`${String.fromCharCode(113,0) == loadingm ? parseInt(`${middleR}`) : loadingm.length}`));
   }
      predictionw = iconqqV >= 87;
    delayControls(!paused);

      injury6 >>= Math.min(Math.abs(3), 2);
   if (predictionw && 1 > (3 + injury6)) {
      predictionw = 25 < iconqqV;
   }
       let handlerq = 2.0;
      for (let a = 0; a < 1; a++) {
         handlerq -= parseFloat(`${2 / (Math.max(6, parseInt(`${handlerq}`)))}`);
      }
         handlerq /= Math.max(4, parseFloat(`${parseInt(`${handlerq}`)}`));
       let gifgoalbgn = String.fromCharCode(115,108,101,101,112,95,56,95,54,55,0);
      loadingm = `${upgradeC}`;
   let assistf = predictionw ? !predictionw : predictionw;
   do {
       let gesturesa = 5.0;
       let giflivestreamingx = 5.0;
      let footballtrophy7 = giflivestreamingx >= 9602732.0;
      do {
         giflivestreamingx /= Math.max(5, 2);
         if (footballtrophy7) {
            break;
         }
      } while ((4.66 >= (giflivestreamingx * 5.99) && 5.99 >= (gesturesa - giflivestreamingx)) && footballtrophy7);
      for (let v = 0; v < 3; v++) {
         giflivestreamingx += parseInt(`${gesturesa}`);
      }
         gesturesa -= 1;
          let iconnotificationnewi = 2.0;
          let liblogger4: Array<any> = [String.fromCharCode(100,100,114,97,110,103,101,95,97,95,50,51,0), String.fromCharCode(119,95,56,52,95,109,97,112,115,0), String.fromCharCode(117,95,57,52,95,115,99,114,117,98,98,105,110,103,0)];
          let upgradeM = String.fromCharCode(112,108,97,121,95,111,95,50,57,0);
         gesturesa /= Math.max(4, 2);
         iconnotificationnewi -= upgradeM.length % (Math.max(1, 5));
         liblogger4.push(liblogger4.length);
         upgradeM = `${upgradeM.length - 3}`;
         giflivestreamingx += parseInt(`${gesturesa}`) - 1;
         giflivestreamingx -= parseInt(`${giflivestreamingx}`) - 2;
      predictionw = giflivestreamingx < 66.76;
      if (assistf) {
         break;
      }
   } while (assistf && (upgradeC > 5));
       let libavfilterG = 0.0;
       let iconarrowrightorangeg = String.fromCharCode(109,105,103,114,97,116,105,111,110,95,112,95,53,48,0);
       let hooksd = String.fromCharCode(102,111,114,109,97,116,95,100,95,55,54,0);
         hooksd += `${hooksd.length}`;
      while (iconarrowrightorangeg.length <= 3) {
         hooksd = `${(hooksd == String.fromCharCode(55,0) ? hooksd.length : iconarrowrightorangeg.length)}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
          let neonz: Map<any, any> = new Map([[String.fromCharCode(116,116,97,103,95,115,95,51,53,0),String.fromCharCode(97,95,55,53,95,97,97,99,112,115,100,115,112,0)], [String.fromCharCode(107,95,56,55,95,109,101,116,97,100,97,116,97,115,0),String.fromCharCode(99,111,114,110,101,114,115,95,103,95,56,50,0)], [String.fromCharCode(122,95,50,53,95,111,99,117,109,101,110,116,0),String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,55,95,55,52,0)]]);
          let libavcodecE = String.fromCharCode(110,116,112,95,114,95,57,53,0);
         iconarrowrightorangeg = `${iconarrowrightorangeg.length << (Math.min(libavcodecE.length, 2))}`;
         neonz.set(`${neonz.size}`, neonz.size);
         libavcodecE += `${2 ^ neonz.size}`;
      }
      for (let a = 0; a < 2; a++) {
          let spinner6 = String.fromCharCode(114,103,98,116,111,98,103,114,95,120,95,52,0);
          let reactnativeratingsS = String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,120,95,55,51,0);
          let promotionK: Map<any, any> = new Map([[String.fromCharCode(101,95,49,55,95,114,101,113,117,101,115,116,0),true ], [String.fromCharCode(116,95,50,57,95,118,112,109,116,0),false ]]);
          let largej = String.fromCharCode(100,95,54,95,117,114,98,103,0);
         hooksd += `${iconarrowrightorangeg.length & 2}`;
         spinner6 = `${1 - spinner6.length}`;
         reactnativeratingsS += `${promotionK.size}`;
         promotionK = new Map([[`${promotionK.size}`, largej.length / 3]]);
         largej += `${spinner6.length}`;
      }
      let downu = iconarrowrightorangeg.length <= 7495210;
      do {
         iconarrowrightorangeg = `${iconarrowrightorangeg.length - 1}`;
         if (downu) {
            break;
         }
      } while ((3 > iconarrowrightorangeg.length) && downu);
      let selectw = hooksd == String.fromCharCode(117,117,48,0);
      do {
          let showless7 = 3.0;
          let shrinkc = String.fromCharCode(100,101,110,111,105,115,101,114,95,54,95,49,53,0);
         hooksd = `${parseInt(`${showless7}`) ^ parseInt(`${libavfilterG}`)}`;
         showless7 += shrinkc.length;
         shrinkc = `${shrinkc.length + shrinkc.length}`;
         if (selectw) {
            break;
         }
      } while (selectw && (!hooksd.endsWith(`${libavfilterG}`)));
         libavfilterG += parseFloat(`${1 + hooksd.length}`);
      for (let r = 0; r < 2; r++) {
         iconarrowrightorangeg += `${hooksd.length}`;
      }
         iconarrowrightorangeg = "2";
      upgradeC /= Math.max(upgradeC, 5);
   for (let y = 0; y < 2; y++) {
       let notification2 = 4.0;
       let videobufferloading2 = String.fromCharCode(109,95,53,51,95,115,97,102,101,116,121,0);
      if ((videobufferloading2.length * parseInt(`${notification2}`)) > 3) {
         videobufferloading2 = "3";
      }
      for (let q = 0; q < 2; q++) {
          let q_playerr = false;
          let fieldN = 5.0;
         videobufferloading2 += `${2 * parseInt(`${notification2}`)}`;
         q_playerr = !q_playerr;
         fieldN += 2 + parseInt(`${fieldN}`);
      }
      if (videobufferloading2.endsWith(`${notification2}`)) {
          let privilegeJ = 5.0;
          let libpangleflipped8 = true;
          let tickm: Map<any, any> = new Map([[String.fromCharCode(98,95,55,49,95,102,97,118,101,100,0),494], [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,55,95,54,57,0),828]]);
          let countryn = 2;
          let thumbnailx: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,95,106,95,54,55,0),false ], [String.fromCharCode(104,115,99,97,108,101,95,102,95,57,51,0),false ]]);
         notification2 += parseInt(`${notification2}`) & tickm.size;
         privilegeJ += parseInt(`${privilegeJ}`);
         libpangleflipped8 = thumbnailx.size == 9;
         tickm = new Map([[`${thumbnailx.size}`, countryn & 2]]);
         countryn &= thumbnailx.size;
      }
         notification2 *= (String.fromCharCode(88,0) == videobufferloading2 ? videobufferloading2.length : parseInt(`${notification2}`));
      let container9 = 8988935.0 <= notification2;
      do {
          let chartu = String.fromCharCode(106,95,55,56,95,114,97,110,107,105,110,103,0);
          let fastforwardQ = String.fromCharCode(120,112,114,118,95,108,95,54,48,0);
          let mathT = 2.0;
          let basketballmatchdetailbga: Array<any> = [String.fromCharCode(112,95,56,52,95,116,117,112,108,101,0), String.fromCharCode(97,116,116,114,97,99,116,105,110,103,95,113,95,57,55,0), String.fromCharCode(114,95,51,52,95,98,97,110,100,101,100,0)];
         notification2 /= Math.max(4, 1 * fastforwardQ.length);
         chartu = `${chartu.length >> (Math.min(2, Math.abs(parseInt(`${mathT}`))))}`;
         fastforwardQ = `${(chartu == String.fromCharCode(56,0) ? chartu.length : parseInt(`${mathT}`))}`;
         basketballmatchdetailbga = [chartu.length - 3];
         if (container9) {
            break;
         }
      } while ((videobufferloading2.length >= 4) && container9);
       let orangeclockY: Map<any, any> = new Map([[String.fromCharCode(102,95,57,50,95,102,111,114,103,111,116,116,101,110,0),true ], [String.fromCharCode(115,95,55,51,95,115,112,105,110,108,111,99,107,0),false ], [String.fromCharCode(99,111,109,109,97,95,119,95,54,49,0),true ]]);
      screens *= parseFloat(`${n_animationA.size}`);
   }
   while (3 == (mountingu >> (Math.min(Math.abs(5), 5))) && 5 == (mountingu / (Math.max(parseInt(`${middleR}`), 8)))) {
       let libglogd = String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,119,95,54,56,0);
       let statisticsk = 1;
       let iconv = 3.0;
       let membership6: Array<any> = [String.fromCharCode(102,95,54,0), String.fromCharCode(115,108,102,95,112,95,49,48,0)];
      while (1 <= (membership6.length - 4)) {
         membership6.push(libglogd.length >> (Math.min(Math.abs(1), 1)));
         break;
      }
      for (let f = 0; f < 2; f++) {
         membership6 = [3 << (Math.min(3, membership6.length))];
      }
      while (1 >= (libglogd.length * parseInt(`${iconv}`))) {
          let iconuserg = 4.0;
          let awayplayert = 0.0;
         libglogd += `${membership6.length}`;
         iconuserg += 1;
         awayplayert /= Math.max(parseFloat(`${parseInt(`${iconuserg}`)}`), 5);
         break;
      }
         libglogd = `${libglogd.length >> (Math.min(Math.abs(3), 5))}`;
         iconv *= parseFloat(`${2}`);
      for (let e = 0; e < 1; e++) {
         iconv -= parseFloat(`${parseInt(`${iconv}`)}`);
      }
       let footballfiledlayoutv = true;
         iconv /= Math.max(parseFloat(`${libglogd.length % (Math.max(1, membership6.length))}`), 5);
         libglogd = `${membership6.length}`;
      if (libglogd.length == parseInt(`${iconv}`)) {
         libglogd = `${libglogd.length | 2}`;
      }
       let mbbidQ = String.fromCharCode(113,117,111,116,105,101,110,116,95,109,95,51,48,0);
         iconv *= parseFloat(`${3 % (Math.max(9, libglogd.length))}`);
      middleR -= parseFloat(`${iconclosewhitewithbge ^ parseInt(`${iconv}`)}`);
      statisticsk *= statisticsk - statisticsk;
      break;
   }
   while (!predictionw) {
      statisticsinactiveo += `${injury6}`;
      break;
   }
   for (let q = 0; q < 1; q++) {
       let iconsaveimages: Map<any, any> = new Map([[String.fromCharCode(105,95,53,57,95,115,105,98,108,105,110,103,0),true ], [String.fromCharCode(121,95,57,51,95,114,101,108,102,117,110,99,0),true ]]);
      for (let n = 0; n < 2; n++) {
          let znewsshare6 = String.fromCharCode(104,95,57,48,95,114,101,102,112,108,97,110,101,0);
          let pingy = 4.0;
         iconsaveimages = new Map([[`${iconsaveimages.size}`, iconsaveimages.size + znewsshare6.length]]);
         znewsshare6 = `${parseInt(`${pingy}`) * parseInt(`${pingy}`)}`;
      }
      let arrowdownj = 5739638 <= iconsaveimages.size;
      do {
         iconsaveimages = new Map([[`${iconsaveimages.size}`, 1]]);
         if (arrowdownj) {
            break;
         }
      } while (arrowdownj && (!Array.from(iconsaveimages.values()).includes(iconsaveimages.size)));
      for (let m = 0; m < 2; m++) {
         iconsaveimages.set(`${iconsaveimages.size}`, iconsaveimages.size * iconsaveimages.size);
      }
      libreact1 /= Math.max(parseFloat(`${2 & upgradeC}`), 3);
   }
   while ((upgradeC ^ statisticsinactiveo.length) > 4) {
       let mountingY: Array<any> = [897, 574];
       let middleb: Array<any> = [16, 360, 513];
         middleb = [middleb.length | mountingY.length];
      if ((middleb.length ^ mountingY.length) >= 5) {
         mountingY.push(mountingY.length);
      }
       let bellreminderZ = true;
      let backgroundI = bellreminderZ ? !bellreminderZ : bellreminderZ;
      do {
         bellreminderZ = (mountingY.length + middleb.length) < 53;
         if (backgroundI) {
            break;
         }
      } while (backgroundI && ((4 << (Math.min(3, middleb.length))) == 2 || !bellreminderZ));
      for (let r = 0; r < 3; r++) {
         bellreminderZ = !bellreminderZ || middleb.length == 54;
      }
      if (!bellreminderZ && (3 - middleb.length) >= 1) {
         middleb.push(middleb.length);
      }
      statisticsinactiveo = `${injury6 >> (Math.min(Math.abs(iconqqV), 5))}`;
      break;
   }
      iconclosewhitewithbge *= mountingu;
      predictionw = 63 >= statisticsinactiveo.length;
   while ((upgradeC ^ 2) < 2) {
      predictionw = loadingm.length == 85;
      break;
   }
   let watchnowbgl = 6179904 >= statisticsinactiveo.length;
   do {
       let textinputb = false;
       let circleT = true;
       let predictionbannersharedt = 3;
       let anytimeq = 3.0;
      if (textinputb) {
         textinputb = 69 == predictionbannersharedt;
      }
      for (let z = 0; z < 2; z++) {
         circleT = 38.97 > anytimeq;
      }
          let tempnodatagifR = false;
         textinputb = !circleT;
         tempnodatagifR = !tempnodatagifR;
      if (4.3 < anytimeq && 2.36 < (anytimeq / 4.3)) {
          let pageZ = String.fromCharCode(102,95,53,53,95,114,116,112,114,101,99,101,105,118,101,114,0);
          let valuesG: Array<any> = [682, 76, 222];
          let muted6 = String.fromCharCode(112,95,53,53,95,112,117,114,101,0);
          let shoot5 = false;
         textinputb = !shoot5;
         pageZ += `${muted6.length}`;
         valuesG.push(1 >> (Math.min(1, valuesG.length)));
         muted6 += `${muted6.length}`;
      }
       let foundq = true;
       let fcdaebecbcbafcdfceaaeccfeacdbe = true;
         fcdaebecbcbafcdfceaaeccfeacdbe = foundq && 13 == predictionbannersharedt;
         foundq = fcdaebecbcbafcdfceaaeccfeacdbe;
          let bggradientr = String.fromCharCode(108,95,53,54,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
          let dependencies6 = String.fromCharCode(115,122,97,98,111,115,95,51,95,53,50,0);
          let defaultprofilepicY = 0;
         fcdaebecbcbafcdfceaaeccfeacdbe = bggradientr.length >= 95;
         bggradientr = `${dependencies6.length}`;
         dependencies6 += `${defaultprofilepicY}`;
         defaultprofilepicY += (dependencies6 == String.fromCharCode(105,0) ? defaultprofilepicY : dependencies6.length);
          let iconcurrentmatcha = 2.0;
          let rewardQ = String.fromCharCode(108,105,98,120,95,106,95,53,53,0);
          let disconnectedE = String.fromCharCode(108,111,110,103,95,116,95,49,50,0);
         foundq = !circleT;
         iconcurrentmatcha /= Math.max(parseFloat(`${1}`), 4);
         rewardQ = `${disconnectedE.length}`;
         disconnectedE += `${disconnectedE.length + rewardQ.length}`;
      for (let p = 0; p < 2; p++) {
          let refreshborderlessh: Array<any> = [String.fromCharCode(98,116,111,98,105,110,95,113,95,54,54,0), String.fromCharCode(99,111,111,114,100,95,117,95,53,57,0)];
          let bodanq = 5.0;
          let iconbackwhitea = String.fromCharCode(98,95,51,57,95,101,120,97,99,116,108,121,0);
          let securityY = String.fromCharCode(116,101,115,116,111,114,105,103,95,114,95,53,0);
         predictionbannersharedt %= Math.max(1, 2 * parseInt(`${anytimeq}`));
         refreshborderlessh.push((String.fromCharCode(110,0) == iconbackwhitea ? securityY.length : iconbackwhitea.length));
         bodanq += securityY.length;
      }
      if (textinputb) {
         textinputb = (!textinputb ? !fcdaebecbcbafcdfceaaeccfeacdbe : !textinputb);
      }
      for (let p = 0; p < 1; p++) {
         circleT = 65 >= predictionbannersharedt;
      }
      statisticsinactiveo += `${(parseInt(`${screens}`) | (circleT ? 3 : 5))}`;
      if (watchnowbgl) {
         break;
      }
   } while (watchnowbgl && (!predictionw));
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let completeA = String.fromCharCode(102,111,117,114,120,95,98,95,52,0);
    let share3 = 1.0;
    let morep = 4;
    let xadsdk7 = String.fromCharCode(97,112,112,97,114,101,110,116,95,57,95,52,50,0);
    let appsD = 3.0;
    let goallogoY = String.fromCharCode(117,110,98,108,117,114,95,108,95,55,49,0);
    let iconarrowleftF = 2.0;
    let dialogP = String.fromCharCode(113,95,50,53,95,104,97,114,100,119,97,114,101,0);
    let chatbotphotoN = String.fromCharCode(97,95,53,57,95,98,111,111,107,107,101,101,112,105,110,103,0);
    let libreanimated1 = 3;
    let defaultfootballbg7 = 2.0;
      appsD += parseFloat(`${1}`);
   for (let b = 0; b < 2; b++) {
       let pressureb = String.fromCharCode(114,95,49,95,115,104,111,119,0);
       let showf = 3.0;
      while ((showf - 5.68) < 2.92) {
          let productv = String.fromCharCode(114,101,103,105,115,116,114,97,114,95,103,95,49,0);
          let fullscreenminm = 1.0;
          let textT = 2.0;
         showf -= (pressureb == String.fromCharCode(109,0) ? pressureb.length : parseInt(`${textT}`));
         productv = `${(productv == String.fromCharCode(74,0) ? productv.length : parseInt(`${fullscreenminm}`))}`;
         fullscreenminm *= productv.length;
         textT /= Math.max(parseInt(`${fullscreenminm}`), 4);
         break;
      }
       let predictionf = 5.0;
       let disconnectedS = 5.0;
         disconnectedS /= Math.max(parseFloat(`${pressureb.length - 2}`), 5);
         pressureb += `${pressureb.length}`;
         disconnectedS -= parseFloat(`${pressureb.length * parseInt(`${disconnectedS}`)}`);
         pressureb = "3";
      appsD -= parseFloat(`${parseInt(`${iconarrowleftF}`)}`);
   }
   for (let q = 0; q < 1; q++) {
       let vignetteT = 3;
       let fastS = 0.0;
       let mbbid2 = 2.0;
      for (let e = 0; e < 2; e++) {
         mbbid2 -= parseFloat(`${parseInt(`${fastS}`) | 3}`);
      }
          let build6 = String.fromCharCode(106,95,54,53,95,115,117,112,101,114,103,114,111,117,112,0);
          let mbjscommonP: Array<any> = [241, 521, 169];
         mbbid2 *= parseFloat(`${1 | build6.length}`);
         build6 += `${1 + mbjscommonP.length}`;
         mbjscommonP.push(mbjscommonP.length);
         fastS *= parseFloat(`${3}`);
      while ((mbbid2 + fastS) == 3.24 || 4.71 == (3.24 + mbbid2)) {
         fastS += parseFloat(`${3 + parseInt(`${fastS}`)}`);
         break;
      }
          let smallbrightnessz = String.fromCharCode(112,114,105,110,116,101,100,95,120,95,54,55,0);
         fastS /= Math.max(4, parseFloat(`${parseInt(`${mbbid2}`)}`));
         smallbrightnessz = `${(smallbrightnessz == String.fromCharCode(110,0) ? smallbrightnessz.length : smallbrightnessz.length)}`;
      for (let e = 0; e < 1; e++) {
         fastS /= Math.max(parseFloat(`${vignetteT}`), 1);
      }
      if ((vignetteT / (Math.max(mbbid2, 7))) == 3.53) {
         mbbid2 *= parseFloat(`${parseInt(`${fastS}`) - 3}`);
      }
         mbbid2 -= parseFloat(`${1 + parseInt(`${fastS}`)}`);
          let dplus4 = 2.0;
          let baiduadsx = String.fromCharCode(100,97,121,95,121,95,49,48,48,0);
          let ticked2 = String.fromCharCode(100,95,56,54,95,114,101,102,105,110,101,109,101,110,116,0);
         vignetteT %= Math.max(1, parseInt(`${mbbid2}`));
         dplus4 /= Math.max(4, parseFloat(`${baiduadsx.length}`));
         baiduadsx = `${baiduadsx.length}`;
         ticked2 = `${ticked2.length << (Math.min(1, Math.abs(parseInt(`${dplus4}`))))}`;
      morep += (String.fromCharCode(81,0) == goallogoY ? parseInt(`${iconarrowleftF}`) : goallogoY.length);
   }
   for (let g = 0; g < 1; g++) {
      appsD += parseFloat(`${dialogP.length}`);
   }
      share3 += 1;
      completeA = `${(goallogoY == String.fromCharCode(52,0) ? xadsdk7.length : goallogoY.length)}`;
   if (4 > (completeA.length >> (Math.min(Math.abs(3), 3))) && (completeA.length + 3) > 1) {
       let xvode = false;
       let libjsi8 = String.fromCharCode(117,110,115,104,105,102,116,95,103,95,56,52,0);
       let liveendmodallogot = 0.0;
      while (3 >= (libjsi8.length | 3) || (3 + libjsi8.length) >= 3) {
          let debug5 = String.fromCharCode(111,118,101,114,114,105,100,101,95,98,95,57,55,0);
          let imagesG = String.fromCharCode(98,105,116,115,95,113,95,55,48,0);
          let libsgcoreS = 1.0;
          let white1 = 5.0;
          let arrowupa: Array<any> = [String.fromCharCode(110,95,49,48,48,95,116,105,110,105,116,0), String.fromCharCode(112,95,56,56,95,104,105,103,104,112,97,115,115,0), String.fromCharCode(119,104,101,114,101,95,52,95,56,48,0)];
         liveendmodallogot /= Math.max(parseFloat(`${debug5.length / 1}`), 1);
         debug5 += `${arrowupa.length + imagesG.length}`;
         imagesG += `${1 | imagesG.length}`;
         libsgcoreS -= parseFloat(`${2 ^ imagesG.length}`);
         white1 *= parseFloat(`${3 & parseInt(`${white1}`)}`);
         arrowupa = [parseInt(`${white1}`)];
         break;
      }
         liveendmodallogot /= Math.max(parseFloat(`${libjsi8.length}`), 3);
       let referrerU = true;
      for (let u = 0; u < 3; u++) {
         xvode = 20.23 <= liveendmodallogot;
      }
          let baiduB = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,118,95,55,50,0);
          let minimizeH = false;
         liveendmodallogot += parseFloat(`${parseInt(`${liveendmodallogot}`) >> (Math.min(4, Math.abs(2)))}`);
         baiduB += `${(1 - (minimizeH ? 2 : 1))}`;
         minimizeH = !baiduB.includes(`${minimizeH}`);
          let reviewY = String.fromCharCode(116,95,50,95,99,111,110,99,104,0);
          let corea = String.fromCharCode(114,101,116,117,114,110,105,110,103,95,51,95,51,49,0);
          let libavutilc = String.fromCharCode(100,101,115,105,103,110,95,113,95,51,49,0);
         xvode = (liveendmodallogot * parseFloat(`${reviewY.length}`)) >= 61.18;
         reviewY = `${2 % (Math.max(2, libavutilc.length))}`;
         corea += `${corea.length + libavutilc.length}`;
      for (let k = 0; k < 3; k++) {
         xvode = !referrerU;
      }
       let b_unlock8 = String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,97,95,57,52,0);
      let gpayD = 8370864.0 >= liveendmodallogot;
      do {
         liveendmodallogot += (parseFloat(`${b_unlock8 == String.fromCharCode(86,0) ? (referrerU ? 5 : 3) : b_unlock8.length}`));
         if (gpayD) {
            break;
         }
      } while (gpayD && (5.30 >= liveendmodallogot || (liveendmodallogot / (Math.max(5.30, 6))) >= 3.74));
      share3 -= 3;
   }
      share3 += 3 ^ parseInt(`${share3}`);
   for (let d = 0; d < 3; d++) {
      share3 /= Math.max(1, 3);
   }
   for (let x = 0; x < 3; x++) {
      xadsdk7 = `${parseInt(`${share3}`) * 2}`;
   }
   if (4 < xadsdk7.length) {
       let unfillU: Map<any, any> = new Map([[String.fromCharCode(105,112,118,95,107,95,50,52,0),410], [String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,116,95,55,52,0),729]]);
       let eighteen5 = 1.0;
       let dependencyN = String.fromCharCode(110,95,55,95,116,104,117,109,98,0);
       let libavfilterc = String.fromCharCode(116,95,51,50,95,115,121,110,99,109,97,114,107,101,114,0);
       let interstitialj = String.fromCharCode(110,95,53,56,0);
          let field2 = String.fromCharCode(98,99,104,101,99,107,95,107,95,52,52,0);
          let filterQ = String.fromCharCode(99,117,114,116,97,105,110,95,105,95,50,49,0);
          let xvodA = 4.0;
         libavfilterc = `${parseInt(`${eighteen5}`)}`;
         field2 += `${parseInt(`${xvodA}`)}`;
         filterQ = `${filterQ.length | 2}`;
         xvodA -= parseInt(`${xvodA}`) - field2.length;
         unfillU = new Map([[`${unfillU.size}`, (String.fromCharCode(89,0) == interstitialj ? interstitialj.length : unfillU.size)]]);
         dependencyN = `${2 + parseInt(`${eighteen5}`)}`;
         dependencyN += `${dependencyN.length - unfillU.size}`;
       let singleQ = 0.0;
       let arrown = 1.0;
         libavfilterc += `${parseInt(`${singleQ}`)}`;
         interstitialj += `${1 & interstitialj.length}`;
         singleQ *= parseFloat(`${parseInt(`${arrown}`)}`);
      while (singleQ > 4.56) {
         singleQ /= Math.max((parseFloat(`${libavfilterc == String.fromCharCode(97,0) ? libavfilterc.length : unfillU.size}`)), 2);
         break;
      }
      while (dependencyN.length >= parseInt(`${eighteen5}`)) {
          let iconrightorange5 = false;
          let armvaD = String.fromCharCode(109,117,120,95,115,95,50,51,0);
          let statsnomoredatax = 3.0;
         dependencyN += `${((iconrightorange5 ? 1 : 2) | parseInt(`${arrown}`))}`;
         iconrightorange5 = 77 > armvaD.length;
         armvaD += `${parseInt(`${statsnomoredatax}`)}`;
         statsnomoredatax /= Math.max(parseFloat(`${parseInt(`${statsnomoredatax}`)}`), 1);
         break;
      }
         interstitialj = `${parseInt(`${singleQ}`)}`;
         eighteen5 -= unfillU.size << (Math.min(Math.abs(1), 4));
      while (2 <= dependencyN.length) {
          let libavdevicez = String.fromCharCode(109,97,112,112,105,110,103,115,95,55,95,57,57,0);
          let nativeexf: Map<any, any> = new Map([[String.fromCharCode(119,95,56,49,95,112,117,109,112,0),869], [String.fromCharCode(108,95,50,48,95,99,111,112,121,116,101,115,116,0),407], [String.fromCharCode(119,95,50,95,109,101,103,97,98,121,116,101,0),760]]);
          let stationw = String.fromCharCode(115,101,108,101,99,116,105,111,110,115,95,103,95,52,53,0);
         libavfilterc = `${(String.fromCharCode(81,0) == interstitialj ? parseInt(`${singleQ}`) : interstitialj.length)}`;
         libavdevicez += `${stationw.length % (Math.max(6, nativeexf.size))}`;
         nativeexf = new Map([[stationw, (libavdevicez == String.fromCharCode(87,0) ? stationw.length : libavdevicez.length)]]);
         break;
      }
      for (let y = 0; y < 3; y++) {
         libavfilterc = `${(libavfilterc == String.fromCharCode(56,0) ? libavfilterc.length : parseInt(`${eighteen5}`))}`;
      }
      for (let o = 0; o < 2; o++) {
          let rooms = 2.0;
          let traminiV = 0.0;
         arrown -= parseFloat(`${unfillU.size}`);
         rooms -= parseFloat(`${1}`);
         traminiV /= Math.max(3, parseInt(`${traminiV}`) % 3);
      }
      xadsdk7 = `${xadsdk7.length}`;
   }
   while ((iconarrowleftF + parseFloat(`${dialogP.length}`)) > 1.69 && (dialogP.length / 5) > 2) {
       let iconclose0 = true;
          let bellreminderP: Array<any> = [766, 132];
         iconclose0 = bellreminderP.includes(iconclose0);
          let recommendationi = String.fromCharCode(100,111,99,108,105,115,116,95,117,95,52,54,0);
          let whistleorangeR: Array<any> = [238, 650];
          let taiwanQ = String.fromCharCode(101,118,116,97,103,95,49,95,50,50,0);
         iconclose0 = !iconclose0;
         recommendationi += `${1 >> (Math.min(2, whistleorangeR.length))}`;
         whistleorangeR = [2];
         taiwanQ += `${(recommendationi == String.fromCharCode(107,0) ? recommendationi.length : whistleorangeR.length)}`;
       let iconeyeU = false;
       let description_2z = false;
      iconarrowleftF /= Math.max(4, parseFloat(`${1}`));
      break;
   }
       let tickedV: Array<any> = [983, 892];
         tickedV.push(2 << (Math.min(4, tickedV.length)));
         tickedV = [tickedV.length * tickedV.length];
          let shootyesgoal1 = String.fromCharCode(110,101,111,110,116,101,115,116,95,108,95,49,0);
         tickedV = [tickedV.length + 1];
         shootyesgoal1 += `${shootyesgoal1.length ^ 1}`;
      completeA = `${3 & morep}`;
   for (let y = 0; y < 3; y++) {
       let controlsM = String.fromCharCode(108,97,121,111,121,116,95,118,95,52,48,0);
         controlsM += `${controlsM.length - 2}`;
         controlsM = `${controlsM.length & 2}`;
       let bodana = 3.0;
       let incidentD = 0.0;
      goallogoY = `${morep / (Math.max(4, completeA.length))}`;
   }
       let baselineV = String.fromCharCode(118,95,52,50,95,98,101,122,101,108,0);
       let subtextY = String.fromCharCode(99,111,110,115,116,97,110,116,95,112,95,56,0);
       let watchN = true;
      while (watchN) {
         watchN = subtextY.length < baselineV.length;
         break;
      }
         watchN = !watchN;
      while (!watchN && 4 <= subtextY.length) {
         watchN = !watchN;
         break;
      }
         subtextY = `${baselineV.length}`;
      while (watchN) {
         subtextY += `${baselineV.length}`;
         break;
      }
      if (watchN) {
          let jingdongR = 1;
          let imagesf = String.fromCharCode(98,110,98,105,110,112,97,100,95,108,95,50,53,0);
          let pressureY: Map<any, any> = new Map([[String.fromCharCode(117,116,109,111,115,116,95,101,95,51,55,0),String.fromCharCode(100,95,56,54,95,115,105,110,113,105,0)], [String.fromCharCode(121,95,49,53,95,99,114,111,112,112,105,110,103,0),String.fromCharCode(103,114,111,117,112,99,97,108,108,95,55,95,52,49,0)]]);
          let suggestiond = 5.0;
          let downK = 4.0;
         baselineV = `${parseInt(`${suggestiond}`)}`;
         jingdongR *= pressureY.size;
         imagesf = `${jingdongR}`;
         pressureY = new Map([[`${pressureY.size}`, pressureY.size * parseInt(`${downK}`)]]);
         suggestiond /= Math.max((imagesf == String.fromCharCode(83,0) ? pressureY.size : imagesf.length), 4);
         downK *= 1 << (Math.min(2, imagesf.length));
      }
       let proxyy: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,114,101,118,101,114,115,101,0),true ], [String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,116,95,56,0),true ], [String.fromCharCode(108,105,98,111,112,117,115,95,99,95,55,0),false ]]);
       let floater9: Map<any, any> = new Map([[String.fromCharCode(111,95,50,52,95,112,114,101,115,117,109,101,0),591], [String.fromCharCode(103,95,54,56,95,114,101,119,97,114,100,115,0),467]]);
      for (let r = 0; r < 1; r++) {
         baselineV += `${floater9.size}`;
      }
       let h_lockb = 4;
      goallogoY += `${chatbotphotoN.length % (Math.max(2, 9))}`;
       let flyerG = 5;
       let update_nb = String.fromCharCode(99,111,111,107,105,101,115,95,57,95,54,57,0);
       let chatX = String.fromCharCode(100,95,57,50,95,105,110,102,111,114,109,97,116,105,118,101,0);
       let starX: Map<any, any> = new Map([[String.fromCharCode(106,109,111,114,101,99,102,103,95,116,95,50,57,0),String.fromCharCode(97,95,53,51,95,114,101,115,112,111,110,115,101,115,0)], [String.fromCharCode(116,105,116,108,101,98,97,114,95,109,95,52,55,0),String.fromCharCode(112,111,115,116,101,110,99,111,100,101,95,114,95,57,48,0)]]);
       let livenodatabgimgf: Map<any, any> = new Map([[String.fromCharCode(104,97,118,105,110,103,95,120,95,54,50,0),362], [String.fromCharCode(109,111,110,111,95,104,95,49,48,48,0),585], [String.fromCharCode(98,95,51,55,95,113,117,97,110,116,120,0),518]]);
      let turny = 9578954 >= flyerG;
      do {
         flyerG %= Math.max(starX.size | update_nb.length, 3);
         if (turny) {
            break;
         }
      } while ((chatX.length == 2) && turny);
      while (update_nb.endsWith(`${livenodatabgimgf.size}`)) {
          let hejiD = String.fromCharCode(105,110,105,116,118,95,52,95,55,55,0);
          let indexi = String.fromCharCode(97,114,103,118,95,107,95,57,53,0);
          let matchdetailbgS = String.fromCharCode(116,95,55,50,95,104,97,110,100,108,101,115,0);
          let countdownC = false;
         update_nb = "2";
         hejiD = `${hejiD.length << (Math.min(Math.abs(1), 1))}`;
         indexi += `${hejiD.length}`;
         matchdetailbgS = "1";
         countdownC = matchdetailbgS.length <= 91;
         break;
      }
      let regengu = 6737843 <= livenodatabgimgf.size;
      do {
          let iconcloseK: Array<any> = [693, 122, 988];
          let hejiw = String.fromCharCode(115,111,108,97,110,97,95,102,95,53,56,0);
          let klevini = 0;
          let renderA = 4.0;
          let roundv = false;
         livenodatabgimgf = new Map([[`${renderA}`, (parseInt(`${renderA}`) ^ (roundv ? 3 : 2))]]);
         iconcloseK.push(iconcloseK.length);
         hejiw += `${iconcloseK.length - hejiw.length}`;
         klevini |= hejiw.length * 1;
         roundv = klevini >= 76 || 76 >= hejiw.length;
         if (regengu) {
            break;
         }
      } while (regengu && (1 <= (livenodatabgimgf.size + flyerG) && 4 <= (flyerG + 1)));
       let videoi: Array<any> = [849, 27, 913];
       let shareblackx = String.fromCharCode(109,103,109,116,95,104,95,51,53,0);
       let index6 = String.fromCharCode(102,119,100,95,115,95,54,57,0);
          let backC = 4;
          let storeQ: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,95,112,115,110,114,104,118,115,0),String.fromCharCode(115,95,56,51,95,97,118,99,105,110,116,114,97,0)], [String.fromCharCode(109,97,105,110,95,107,95,49,48,48,0),String.fromCharCode(105,95,53,56,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0)], [String.fromCharCode(105,110,103,114,101,115,115,95,53,95,50,48,0),String.fromCharCode(107,95,57,56,95,97,100,97,112,116,101,100,0)]]);
         index6 = "1";
         backC /= Math.max(3, 3 | storeQ.size);
         storeQ = new Map([[`${storeQ.size}`, backC | storeQ.size]]);
      let googlek = chatX == String.fromCharCode(101,108,104,112,0);
      do {
          let turndowns = String.fromCharCode(120,103,101,116,98,118,95,98,95,52,57,0);
          let iconplay4 = String.fromCharCode(98,95,54,95,115,113,108,108,111,103,0);
         chatX += "1";
         turndowns = `${1 + turndowns.length}`;
         iconplay4 = `${(String.fromCharCode(106,0) == turndowns ? turndowns.length : iconplay4.length)}`;
         if (googlek) {
            break;
         }
      } while ((2 < chatX.length) && googlek);
         update_nb += `${1 | livenodatabgimgf.size}`;
      share3 /= Math.max(flyerG, 5);
      completeA = `${xadsdk7.length}`;
       let basketballtrophy7: Map<any, any> = new Map([[String.fromCharCode(109,101,116,114,105,99,95,114,95,52,54,0),911], [String.fromCharCode(115,101,110,100,118,95,105,95,55,52,0),601]]);
       let reddownarrowT: Array<any> = [904, 45, 836];
       let appsA = String.fromCharCode(116,114,105,103,103,101,114,95,106,95,50,50,0);
      while ((basketballtrophy7.size + reddownarrowT.length) <= 3 || 4 <= (reddownarrowT.length + 3)) {
         basketballtrophy7.set(appsA, (String.fromCharCode(53,0) == appsA ? appsA.length : basketballtrophy7.size));
         break;
      }
          let schedule7 = true;
         reddownarrowT = [reddownarrowT.length];
         schedule7 = (schedule7 ? !schedule7 : !schedule7);
       let playlistb = false;
       let iconsharee = true;
      while (appsA.length < 5) {
         appsA = `${((iconsharee ? 5 : 4))}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
         reddownarrowT.push(3);
      }
         playlistb = appsA.length < 97;
      while (!playlistb) {
          let penaltyshootnogoalT = String.fromCharCode(107,95,53,49,95,112,114,101,99,104,101,99,107,111,117,116,0);
          let defaultfootballbgq = 0;
          let iconuserQ = 3.0;
          let hooksv: Array<any> = [545, 621];
          let animationsS = 1;
         playlistb = animationsS > parseInt(`${iconuserQ}`);
         penaltyshootnogoalT += `${penaltyshootnogoalT.length / 3}`;
         defaultfootballbgq <<= Math.min(1, hooksv.length);
         iconuserQ /= Math.max(2, parseFloat(`${2 - defaultfootballbgq}`));
         hooksv.push(penaltyshootnogoalT.length);
         animationsS /= Math.max(5, defaultfootballbgq);
         break;
      }
      if (basketballtrophy7.size <= 1 || (1 & basketballtrophy7.size) <= 1) {
          let ballZ = String.fromCharCode(107,95,56,53,95,118,111,105,100,0);
          let othermatchdetailbgc: Array<any> = [55, 483];
         basketballtrophy7.set(ballZ, ballZ.length);
         othermatchdetailbgc.push(3);
      }
      for (let u = 0; u < 3; u++) {
         playlistb = appsA.length > 69;
      }
      chatbotphotoN += `${parseInt(`${iconarrowleftF}`) << (Math.min(completeA.length, 3))}`;
      appsD -= parseFloat(`${morep ^ xadsdk7.length}`);

    onHandleFullScreen();
  };

  const goBack = () => {
       let speco = true;
    let backM = String.fromCharCode(108,111,103,102,110,95,113,95,55,49,0);
    let paginationx = String.fromCharCode(103,101,116,120,118,97,114,95,55,95,57,53,0);
    let basketballmatchdetailbg9 = 1.0;
    let nalyticsh = true;
    let clearv = String.fromCharCode(119,105,110,100,105,110,103,95,121,95,56,57,0);
    let moreI = String.fromCharCode(108,95,50,48,95,115,110,97,112,115,104,111,116,116,101,114,0);
    let defaultplayerimgn = 3.0;
    let playercommon9 = 4.0;
    let sideh: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,95,119,95,51,55,0),694], [String.fromCharCode(112,95,51,56,95,99,104,112,108,0),83], [String.fromCharCode(98,114,101,97,107,112,111,105,110,116,95,109,95,55,49,0),150]]);
    let progressF = false;
   for (let v = 0; v < 1; v++) {
      backM = `${paginationx.length}`;
   }
   let greyarrowup7 = sideh.size >= 5217008;
   do {
      sideh.set(`${defaultplayerimgn}`, ((nalyticsh ? 1 : 4) + parseInt(`${defaultplayerimgn}`)));
      if (greyarrowup7) {
         break;
      }
   } while (greyarrowup7 && (!Array.from(sideh.values()).includes(basketballmatchdetailbg9)));
   while (moreI != paginationx) {
      paginationx += `${backM.length << (Math.min(Math.abs(3), 5))}`;
      break;
   }
       let defaultbasketballbgt = 2.0;
       let anytimeM = 3.0;
      for (let i = 0; i < 3; i++) {
          let confirmationL = String.fromCharCode(119,95,55,52,95,100,105,109,101,110,115,105,111,110,115,0);
          let closet: Array<any> = [210, 215, 385];
          let ksadg: Map<any, any> = new Map([[String.fromCharCode(98,95,54,52,95,112,99,97,112,0),204], [String.fromCharCode(104,95,55,55,95,97,112,105,115,0),578], [String.fromCharCode(101,110,99,114,121,112,116,95,117,95,57,51,0),541]]);
         anytimeM *= closet.length / 2;
         confirmationL += `${(confirmationL == String.fromCharCode(85,0) ? confirmationL.length : ksadg.size)}`;
         closet = [1];
         ksadg = new Map([[`${ksadg.size}`, ksadg.size]]);
      }
          let leaguedetailsbgQ = 3.0;
          let incidentT = 5.0;
         anytimeM /= Math.max(3, parseInt(`${leaguedetailsbgQ}`));
         incidentT -= parseFloat(`${parseInt(`${incidentT}`)}`);
         defaultbasketballbgt /= Math.max(2 ^ parseInt(`${anytimeM}`), 4);
      for (let t = 0; t < 3; t++) {
         defaultbasketballbgt *= parseInt(`${anytimeM}`) + 3;
      }
       let attributedstringz = String.fromCharCode(98,105,116,119,114,105,116,101,114,95,116,95,53,49,0);
       let awayplayerA = String.fromCharCode(109,105,100,108,95,113,95,51,57,0);
          let sinaC: Array<any> = [154, 590];
          let trophyG = false;
          let utilsC = String.fromCharCode(97,95,56,52,95,116,121,112,101,111,102,0);
         anytimeM += 1 << (Math.min(Math.abs(parseInt(`${defaultbasketballbgt}`)), 3));
         sinaC.push(3 * sinaC.length);
         trophyG = utilsC.length < sinaC.length;
         utilsC = `${sinaC.length >> (Math.min(utilsC.length, 3))}`;
      playercommon9 -= parseFloat(`${parseInt(`${defaultplayerimgn}`)}`);
      speco = String.fromCharCode(52,0) == moreI || 56.76 > basketballmatchdetailbg9;
   for (let b = 0; b < 2; b++) {
       let gpayI = false;
       let sharemodalM = 4.0;
       let whitevideoliver = 5.0;
         gpayI = sharemodalM == 21.48;
          let whistleorangeZ = String.fromCharCode(97,112,115,95,109,95,54,0);
          let episodesC = String.fromCharCode(100,111,110,97,116,105,111,110,95,113,95,51,49,0);
         sharemodalM /= Math.max(parseInt(`${whitevideoliver}`), 5);
         whistleorangeZ = `${whistleorangeZ.length}`;
         episodesC = `${episodesC.length / 2}`;
      let k_playern = whitevideoliver <= 8174889.0;
      do {
         whitevideoliver *= parseFloat(`${parseInt(`${sharemodalM}`) | parseInt(`${whitevideoliver}`)}`);
         if (k_playern) {
            break;
         }
      } while (k_playern && ((sharemodalM * whitevideoliver) == 4.47 && (sharemodalM * whitevideoliver) == 4.47));
         whitevideoliver -= (parseFloat(`${(gpayI ? 5 : 4) * parseInt(`${sharemodalM}`)}`));
         sharemodalM += parseInt(`${whitevideoliver}`);
          let e_count2 = 0;
          let goalX = 4;
         sharemodalM += e_count2;
         e_count2 /= Math.max(goalX % 1, 5);
         goalX |= goalX;
         whitevideoliver *= parseFloat(`${1 - parseInt(`${sharemodalM}`)}`);
      for (let a = 0; a < 1; a++) {
          let notificationw: Map<any, any> = new Map([[String.fromCharCode(105,112,118,95,101,95,53,0),String.fromCharCode(108,95,52,49,95,99,111,109,112,111,115,105,116,105,110,103,0)], [String.fromCharCode(100,101,115,99,101,110,100,101,114,95,54,95,50,54,0),String.fromCharCode(104,95,53,51,95,107,116,111,112,0)], [String.fromCharCode(113,95,51,57,95,103,97,116,104,101,114,105,110,103,0),String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,115,95,52,56,0)]]);
          let basketballdetailsbgu = 0;
          let condensedP = true;
         sharemodalM *= 3 << (Math.min(Math.abs(parseInt(`${sharemodalM}`)), 2));
         notificationw = new Map([[`${notificationw.size}`, basketballdetailsbgu]]);
         basketballdetailsbgu -= ((condensedP ? 1 : 3) + basketballdetailsbgu);
         condensedP = basketballdetailsbgu == 87;
      }
         gpayI = 66.3 == whitevideoliver;
      speco = nalyticsh && basketballmatchdetailbg9 <= 76.34;
   }
   for (let r = 0; r < 1; r++) {
      clearv += `${moreI.length}`;
   }
      clearv += `${sideh.size ^ moreI.length}`;
      moreI = `${parseInt(`${defaultplayerimgn}`) + 2}`;
      sideh = new Map([[`${speco}`, parseInt(`${defaultplayerimgn}`) + 1]]);
       let rewardj = String.fromCharCode(106,100,109,97,105,110,99,116,95,99,95,56,52,0);
      for (let s = 0; s < 3; s++) {
          let constantsw = String.fromCharCode(104,95,49,57,95,118,111,112,101,110,0);
          let minimizeu = true;
          let recommendationw = 4.0;
         rewardj = "2";
         constantsw += `${1 * parseInt(`${recommendationw}`)}`;
         minimizeu = (49 < ((!minimizeu ? constantsw.length : 49) >> (Math.min(constantsw.length, 2))));
         recommendationw -= 2 << (Math.min(4, constantsw.length));
      }
         rewardj += `${rewardj.length}`;
         rewardj = `${rewardj.length}`;
      playercommon9 -= parseFloat(`${1}`);
   if (!speco) {
      backM = `${backM.length}`;
   }
   let weatherd = playercommon9 <= 5782225.0;
   do {
      playercommon9 -= parseFloat(`${paginationx.length}`);
      if (weatherd) {
         break;
      }
   } while (weatherd && (!speco && 1.31 >= (playercommon9 - 3.35)));
   while (!speco) {
      speco = clearv == String.fromCharCode(113,0);
      break;
   }

    delayControls();

      backM += `${(paginationx == String.fromCharCode(113,0) ? (speco ? 1 : 2) : paginationx.length)}`;
   while (4 < moreI.length) {
      sideh.set(`${speco}`, 3);
      break;
   }
   for (let j = 0; j < 2; j++) {
      sideh.set(`${basketballmatchdetailbg9}`, 3);
   }
      backM = "3";
   while (sideh.size <= 4) {
      sideh = new Map([[backM, backM.length ^ 3]]);
      break;
   }
   let hiad1 = 6460400.0 <= playercommon9;
   do {
      playercommon9 += parseFloat(`${moreI.length * 3}`);
      if (hiad1) {
         break;
      }
   } while (hiad1 && (5.97 < (2.91 - playercommon9)));
   for (let u = 0; u < 3; u++) {
       let indexF = 0.0;
      if ((indexF * indexF) < 3.8 && (indexF * indexF) < 3.8) {
         indexF -= parseFloat(`${parseInt(`${indexF}`) >> (Math.min(Math.abs(parseInt(`${indexF}`)), 5))}`);
      }
          let mbbannerb = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,51,95,54,52,0);
         indexF += parseFloat(`${parseInt(`${indexF}`) & 3}`);
         mbbannerb = `${mbbannerb.length - mbbannerb.length}`;
         indexF /= Math.max(2, parseFloat(`${parseInt(`${indexF}`)}`));
      playercommon9 += (parseFloat(`${String.fromCharCode(52,0) == paginationx ? (speco ? 5 : 5) : paginationx.length}`));
   }
      nalyticsh = basketballmatchdetailbg9 <= 17.56 || moreI.length <= 73;
   let iconschedule6 = 7511468.0 >= basketballmatchdetailbg9;
   do {
      basketballmatchdetailbg9 -= parseFloat(`${backM.length + paginationx.length}`);
      if (iconschedule6) {
         break;
      }
   } while (iconschedule6 && ((paginationx.length >> (Math.min(Math.abs(5), 4))) == 1));
   let statisticsB = sideh.size >= 8754173;
   do {
       let yellowcirclebgl = 1.0;
       let volumeh = 5.0;
       let adulty = String.fromCharCode(99,114,99,116,97,98,108,101,95,105,95,53,55,0);
      if (4 == (adulty.length * parseInt(`${yellowcirclebgl}`)) && (yellowcirclebgl * parseFloat(`${adulty.length}`)) == 4.33) {
         adulty = `${parseInt(`${volumeh}`) ^ adulty.length}`;
      }
          let modelsz = 4.0;
          let previewA = String.fromCharCode(99,95,53,55,95,114,110,103,0);
          let scrollviewF = 2.0;
         volumeh += parseFloat(`${adulty.length}`);
         modelsz /= Math.max(parseFloat(`${parseInt(`${scrollviewF}`) - 1}`), 2);
         previewA = "1";
         scrollviewF += parseInt(`${scrollviewF}`);
      for (let x = 0; x < 2; x++) {
         adulty += `${parseInt(`${yellowcirclebgl}`) ^ parseInt(`${volumeh}`)}`;
      }
       let distW = false;
       let iconbellactive8 = true;
         adulty += `${(String.fromCharCode(87,0) == adulty ? parseInt(`${volumeh}`) : adulty.length)}`;
      sideh = new Map([[`${volumeh}`, 3 & parseInt(`${playercommon9}`)]]);
      if (statisticsB) {
         break;
      }
   } while (statisticsB && (!Array.from(sideh.keys()).includes(`${playercommon9}`)));
       let mimoT = 5.0;
      for (let y = 0; y < 1; y++) {
         mimoT += parseInt(`${mimoT}`) + parseInt(`${mimoT}`);
      }
      let watcha = 7588549.0 <= mimoT;
      do {
         mimoT -= parseInt(`${mimoT}`) * 3;
         if (watcha) {
            break;
         }
      } while (((mimoT + 2.44) < 2.60 || (mimoT - 2.44) < 1.34) && watcha);
      if (3.5 <= (mimoT * mimoT) || (mimoT * 3.5) <= 5.8) {
         mimoT -= parseInt(`${mimoT}`);
      }
      defaultplayerimgn -= parseFloat(`${backM.length / 1}`);
       let questL: Array<any> = [514, 485, 988];
       let arrowupQ = 0.0;
       let greyarrowupm: Map<any, any> = new Map([[String.fromCharCode(104,97,108,100,99,108,117,116,95,112,95,57,49,0),25], [String.fromCharCode(97,95,54,54,95,97,103,103,114,101,103,97,116,101,115,0),943]]);
      for (let s = 0; s < 1; s++) {
         questL.push(greyarrowupm.size);
      }
      if (arrowupQ == 5.21) {
         arrowupQ /= Math.max(4, 1);
      }
      let notificationfillemptyW = greyarrowupm.size >= 7291517;
      do {
         greyarrowupm.set(`${arrowupQ}`, parseInt(`${arrowupQ}`) * greyarrowupm.size);
         if (notificationfillemptyW) {
            break;
         }
      } while (notificationfillemptyW && (2 < (1 + greyarrowupm.size) || 2 < (greyarrowupm.size + 1)));
      while (4 < (5 >> (Math.min(1, questL.length))) && 5 < (greyarrowupm.size >> (Math.min(1, questL.length)))) {
         greyarrowupm = new Map([[`${questL.length}`, questL.length / 1]]);
         break;
      }
      while ((greyarrowupm.size >> (Math.min(Math.abs(2), 1))) == 1) {
          let analytico = String.fromCharCode(104,105,103,104,115,95,51,95,50,52,0);
          let pointL = String.fromCharCode(109,95,49,56,95,117,110,115,101,116,0);
          let catalog_ = String.fromCharCode(101,95,51,57,95,114,101,115,111,108,118,101,114,0);
         greyarrowupm.set(analytico, analytico.length | questL.length);
         pointL += `${catalog_.length | pointL.length}`;
         catalog_ += `${catalog_.length - 2}`;
         break;
      }
       let moviesw = 0.0;
       let scrollviewK = 1.0;
         arrowupQ -= parseInt(`${arrowupQ}`);
      let megaphone9 = 5712907.0 >= moviesw;
      do {
         moviesw -= parseFloat(`${greyarrowupm.size}`);
         if (megaphone9) {
            break;
         }
      } while ((scrollviewK < moviesw) && megaphone9);
         scrollviewK += parseFloat(`${parseInt(`${arrowupQ}`)}`);
      playercommon9 += parseFloat(`${parseInt(`${defaultplayerimgn}`)}`);
      playercommon9 += parseFloat(`${backM.length}`);
       let white_ = String.fromCharCode(103,95,54,52,95,120,103,97,115,0);
       let baselinea: Map<any, any> = new Map([[String.fromCharCode(97,99,100,115,112,95,56,95,53,49,0),182], [String.fromCharCode(117,95,53,56,95,97,108,98,117,109,115,0),517], [String.fromCharCode(118,112,100,97,116,97,95,51,95,53,48,0),826]]);
      if (white_.includes(`${baselinea.size}`)) {
          let progressM = String.fromCharCode(112,114,105,109,95,55,95,50,48,0);
          let temperature5: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,117,116,105,108,115,95,114,95,53,48,0),String.fromCharCode(106,95,57,56,95,109,111,109,101,110,116,115,0)], [String.fromCharCode(98,97,99,107,101,100,95,49,95,52,51,0),String.fromCharCode(106,95,57,55,95,106,100,109,97,105,110,99,116,0)], [String.fromCharCode(110,101,115,116,95,121,95,50,52,0),String.fromCharCode(105,95,56,51,95,117,110,98,111,120,101,100,0)]]);
         baselinea.set(`${white_}`, 2 | baselinea.size);
         progressM = `${progressM.length << (Math.min(Math.abs(2), 4))}`;
         temperature5 = new Map([[`${temperature5.size}`, temperature5.size]]);
      }
         baselinea = new Map([[`${baselinea.size}`, 2]]);
         white_ += `${baselinea.size}`;
          let google6: Array<any> = [String.fromCharCode(109,115,114,108,101,95,55,95,49,55,0), String.fromCharCode(112,95,54,49,95,109,112,99,104,117,102,102,0)];
          let distZ = String.fromCharCode(116,95,53,48,95,97,115,107,105,110,103,0);
          let androidI: Array<any> = [558, 332];
         baselinea.set(distZ, distZ.length);
         google6 = [androidI.length << (Math.min(Math.abs(2), 1))];
         androidI = [2];
      for (let c = 0; c < 1; c++) {
          let whiteanimationlivea: Map<any, any> = new Map([[String.fromCharCode(103,95,52,57,0),386], [String.fromCharCode(104,95,52,48,95,100,117,112,108,105,99,97,116,101,115,0),183], [String.fromCharCode(122,95,48,95,100,101,108,97,121,101,100,0),160]]);
          let loginn = 1.0;
          let penaltyshootnogoalp: Map<any, any> = new Map([[String.fromCharCode(99,111,108,115,95,117,95,54,53,0),false ], [String.fromCharCode(109,97,114,107,101,116,95,50,95,55,57,0),true ]]);
         baselinea.set(`${loginn}`, penaltyshootnogoalp.size << (Math.min(4, Math.abs(parseInt(`${loginn}`)))));
         whiteanimationlivea = new Map([[`${whiteanimationlivea.size}`, 1]]);
      }
       let defaultbasketballbgj = String.fromCharCode(99,95,57,55,95,115,105,103,115,97,102,101,0);
      moreI = `${paginationx.length + clearv.length}`;
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
       let downloaderK = true;
    let checkboxr: Map<any, any> = new Map([[String.fromCharCode(114,109,115,105,112,114,95,114,95,54,50,0),true ], [String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,111,95,55,55,0),true ]]);
    let stylesY = false;
    let nativemoduleF: Array<any> = [String.fromCharCode(105,95,57,55,95,112,101,114,105,111,100,0), String.fromCharCode(106,95,50,57,95,98,105,110,111,109,105,97,108,0)];
    let viewse: Map<any, any> = new Map([[String.fromCharCode(101,95,51,56,95,100,98,108,105,110,116,0),false ], [String.fromCharCode(111,95,51,48,95,97,112,112,108,105,99,97,116,105,111,110,0),false ]]);
    let profilek = String.fromCharCode(100,97,115,104,101,110,99,95,49,95,56,52,0);
    let iconuserp = 1;
    let y_imagek: Array<any> = [294, 965, 894];
    let verticalF = String.fromCharCode(101,109,98,101,100,95,114,95,51,49,0);
   while (!nativemoduleF.includes(y_imagek.length)) {
       let changeD: Array<any> = [879, 741];
       let orientationJ = 5.0;
       let componentsd = String.fromCharCode(106,105,110,99,108,117,100,101,95,52,95,53,54,0);
         orientationJ *= parseFloat(`${parseInt(`${orientationJ}`) << (Math.min(componentsd.length, 2))}`);
       let strings_ = 0.0;
         componentsd = "1";
          let checkbox3 = 2.0;
         strings_ += (parseFloat(`${componentsd == String.fromCharCode(101,0) ? parseInt(`${strings_}`) : componentsd.length}`));
         checkbox3 *= parseFloat(`${1}`);
      for (let q = 0; q < 2; q++) {
         componentsd = `${2 * parseInt(`${strings_}`)}`;
      }
       let modeI = String.fromCharCode(100,101,99,111,100,97,98,108,101,95,118,95,56,51,0);
       let confirmationf = String.fromCharCode(119,104,105,116,101,95,120,95,50,56,0);
          let plusf = String.fromCharCode(111,99,116,112,111,105,110,116,95,97,95,56,57,0);
         modeI += `${plusf.length}`;
      while (orientationJ <= 2.73) {
         modeI = `${componentsd.length}`;
         break;
      }
         confirmationf = `${confirmationf.length}`;
      y_imagek = [2 - componentsd.length];
      changeD.push(changeD.length);
      break;
   }
   for (let i = 0; i < 3; i++) {
      downloaderK = viewse.size < profilek.length;
   }
      nativemoduleF.push(y_imagek.length);
   for (let h = 0; h < 1; h++) {
      stylesY = profilek.length > 51;
   }
   while (5 > (5 >> (Math.min(4, nativemoduleF.length))) || nativemoduleF.length > 5) {
      stylesY = !downloaderK || nativemoduleF.length >= 13;
      break;
   }
   if ((viewse.size + y_imagek.length) >= 1) {
      viewse = new Map([[`${checkboxr.size}`, checkboxr.size]]);
   }
   if (stylesY || 2 < (3 & checkboxr.size)) {
       let libmapbufferjnim: Map<any, any> = new Map([[String.fromCharCode(114,117,110,110,105,110,103,95,116,95,55,50,0),981], [String.fromCharCode(103,95,56,54,95,118,97,114,120,104,0),288], [String.fromCharCode(108,95,55,49,95,109,97,105,110,115,116,97,103,101,0),790]]);
      for (let i = 0; i < 3; i++) {
          let injuryg = String.fromCharCode(114,95,57,55,95,99,111,110,116,111,117,114,115,0);
          let updates_ = String.fromCharCode(101,95,57,57,95,100,105,97,103,114,97,109,0);
         libmapbufferjnim = new Map([[injuryg, updates_.length]]);
      }
      while (2 < (libmapbufferjnim.size ^ libmapbufferjnim.size) && 5 < (libmapbufferjnim.size ^ 2)) {
         libmapbufferjnim.set(`${libmapbufferjnim.size}`, libmapbufferjnim.size);
         break;
      }
      if (libmapbufferjnim.size > 1) {
          let predictionbuttonk = String.fromCharCode(97,110,103,108,101,115,95,122,95,54,48,0);
          let iconarrowrightblackd = String.fromCharCode(111,95,54,48,95,100,102,108,97,0);
         libmapbufferjnim.set(`${iconarrowrightblackd}`, iconarrowrightblackd.length);
         predictionbuttonk = `${predictionbuttonk.length * predictionbuttonk.length}`;
      }
      stylesY = iconuserp <= 89;
   }
   if (!stylesY || 4 >= (nativemoduleF.length >> (Math.min(Math.abs(5), 1)))) {
      nativemoduleF = [checkboxr.size & 1];
   }
   while (!y_imagek.includes(nativemoduleF.length)) {
       let libreactnativeblobB = true;
      let downarrowT = libreactnativeblobB ? !libreactnativeblobB : libreactnativeblobB;
      do {
          let collection0 = false;
          let iconcalendar5: Array<any> = [194, 912];
         libreactnativeblobB = (((libreactnativeblobB ? 95 : iconcalendar5.length) - iconcalendar5.length) == 95);
         collection0 = (collection0 ? collection0 : collection0);
         if (downarrowT) {
            break;
         }
      } while (downarrowT && (!libreactnativeblobB));
         libreactnativeblobB = !libreactnativeblobB;
      let playlistK = libreactnativeblobB ? !libreactnativeblobB : libreactnativeblobB;
      do {
          let chartI: Array<any> = [973, 544, 420];
         libreactnativeblobB = chartI.length <= 5;
         if (playlistK) {
            break;
         }
      } while (playlistK && (libreactnativeblobB));
      nativemoduleF.push((String.fromCharCode(82,0) == profilek ? (stylesY ? 2 : 1) : profilek.length));
      break;
   }
   for (let e = 0; e < 3; e++) {
      checkboxr = new Map([[`${nativemoduleF.length}`, 2]]);
   }
       let baiduadsS: Array<any> = [957, 733];
      if (baiduadsS.length < baiduadsS.length) {
         baiduadsS.push(2);
      }
       let iconmoreL = String.fromCharCode(98,95,55,49,95,112,102,105,108,116,101,114,0);
       let nbatrophyd = String.fromCharCode(115,95,51,52,95,111,110,101,99,104,0);
      while (!nbatrophyd.startsWith(`${iconmoreL.length}`)) {
          let iconsharefriendsZ = true;
          let iconsettingN = 0;
          let soundY: Array<any> = [12, 308];
          let sellW = true;
         nbatrophyd += `${3 - nbatrophyd.length}`;
         iconsharefriendsZ = !sellW;
         iconsettingN |= 2;
         soundY = [2];
         break;
      }
      viewse.set(`${iconuserp}`, viewse.size);
      checkboxr = new Map([[`${viewse.size}`, 2]]);
      viewse.set(`${stylesY}`, checkboxr.size);

    setShowControls(!showControls);

      downloaderK = (checkboxr.size + y_imagek.length) > 85;
      checkboxr.set(`${stylesY}`, iconuserp);
       let moreF: Map<any, any> = new Map([[String.fromCharCode(105,116,117,110,101,115,95,52,95,56,55,0),true ], [String.fromCharCode(102,95,49,57,95,98,111,117,110,99,101,0),false ], [String.fromCharCode(104,97,115,104,101,115,95,49,95,56,51,0),false ]]);
       let greyl = 0.0;
       let time_yt3 = String.fromCharCode(114,95,57,56,95,100,101,99,114,101,97,115,101,0);
      if (!Array.from(moreF.keys()).includes(`${greyl}`)) {
         moreF.set(time_yt3, 1);
      }
      for (let l = 0; l < 1; l++) {
          let footballh = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,102,95,52,49,0);
          let nterstitialq = 2.0;
          let tickg = String.fromCharCode(104,95,52,48,95,105,110,105,118,105,116,101,100,0);
          let redcirclebgT = 5;
         greyl *= parseFloat(`${footballh.length}`);
         footballh = `${parseInt(`${nterstitialq}`)}`;
         nterstitialq += parseFloat(`${3}`);
         tickg = `${redcirclebgT | tickg.length}`;
         redcirclebgT ^= tickg.length;
      }
      if (moreF.size <= 3) {
         moreF = new Map([[`${moreF.size}`, parseInt(`${greyl}`) * 2]]);
      }
      if (time_yt3.length < 4) {
         time_yt3 = `${moreF.size}`;
      }
      for (let s = 0; s < 3; s++) {
         time_yt3 = `${2 ^ moreF.size}`;
      }
          let libswscaleJ = String.fromCharCode(103,95,54,50,95,116,97,114,103,101,116,115,0);
          let detail8 = 5;
          let resulto: Array<any> = [643, 142];
         greyl -= parseFloat(`${3 >> (Math.min(4, Math.abs(moreF.size)))}`);
         libswscaleJ += `${(String.fromCharCode(82,0) == libswscaleJ ? resulto.length : libswscaleJ.length)}`;
         detail8 %= Math.max(detail8, 3);
         resulto.push(1);
      for (let q = 0; q < 2; q++) {
         moreF.set(`${time_yt3}`, 1);
      }
         time_yt3 += `${(time_yt3 == String.fromCharCode(55,0) ? parseInt(`${greyl}`) : time_yt3.length)}`;
      for (let h = 0; h < 3; h++) {
         moreF.set(`${greyl}`, parseInt(`${greyl}`));
      }
      stylesY = time_yt3.length == 3;
      iconuserp >>= Math.min(4, Math.abs(2 - profilek.length));
   while (downloaderK && verticalF.length > 4) {
       let homeinactive2: Map<any, any> = new Map([[String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,114,95,56,53,0),String.fromCharCode(97,97,99,116,97,98,95,118,95,57,54,0)], [String.fromCharCode(97,95,57,49,95,97,117,116,111,112,108,97,121,105,110,103,0),String.fromCharCode(107,109,115,95,110,95,52,56,0)]]);
       let downarrowx = 2.0;
       let xadsdkQ: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,105,116,116,101,100,95,55,95,50,57,0),String.fromCharCode(109,95,56,55,95,103,97,105,110,99,0)], [String.fromCharCode(100,112,99,109,95,110,95,49,54,0),String.fromCharCode(99,111,108,117,109,110,95,115,95,56,50,0)]]);
       let footballp: Map<any, any> = new Map([[String.fromCharCode(103,95,51,48,95,99,104,97,116,115,0),533], [String.fromCharCode(105,95,51,53,95,114,97,119,100,101,99,0),209], [String.fromCharCode(121,95,50,95,109,111,114,112,104,101,100,0),275]]);
       let mergerd = String.fromCharCode(115,116,101,112,112,101,114,95,50,95,50,49,0);
         footballp.set(`${downarrowx}`, parseInt(`${downarrowx}`) / 3);
         footballp = new Map([[`${footballp.size}`, parseInt(`${downarrowx}`) & 3]]);
         footballp.set(`${homeinactive2.size}`, xadsdkQ.size & homeinactive2.size);
         mergerd = `${homeinactive2.size << (Math.min(1, Math.abs(parseInt(`${downarrowx}`))))}`;
          let footballtrophyq = String.fromCharCode(117,95,51,52,95,102,105,101,108,100,115,0);
          let whistlea: Map<any, any> = new Map([[String.fromCharCode(116,95,56,55,95,98,117,102,102,101,114,101,118,101,110,116,0),71], [String.fromCharCode(116,105,109,105,110,103,115,97,102,101,95,52,95,53,48,0),93], [String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,104,95,56,55,0),724]]);
         xadsdkQ = new Map([[`${whistlea.size}`, 3 * whistlea.size]]);
         footballtrophyq += `${(footballtrophyq == String.fromCharCode(103,0) ? footballtrophyq.length : footballtrophyq.length)}`;
       let runtimez = 3.0;
       let defaultroombg_ = 0.0;
      if ((4.92 + runtimez) > 2.92) {
         runtimez -= footballp.size * 3;
      }
      if (footballp.get(`${xadsdkQ.size}`) == null) {
         footballp.set(`${downarrowx}`, parseInt(`${defaultroombg_}`) - parseInt(`${downarrowx}`));
      }
         footballp = new Map([[`${footballp.size}`, 1]]);
       let telegramY: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,101,114,95,97,95,57,50,0),25], [String.fromCharCode(114,101,112,111,114,116,95,49,95,54,48,0),417], [String.fromCharCode(99,104,111,115,101,95,117,95,57,57,0),590]]);
       let contextU: Map<any, any> = new Map([[String.fromCharCode(113,95,50,51,95,97,114,101,97,115,0),true ], [String.fromCharCode(112,114,101,99,105,115,105,111,110,95,106,95,57,52,0),true ], [String.fromCharCode(112,114,101,117,112,100,97,116,101,95,49,95,55,53,0),false ]]);
          let index3: Map<any, any> = new Map([[String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,55,95,51,50,0),317], [String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,97,95,50,50,0),145]]);
         footballp = new Map([[`${footballp.size}`, 1]]);
         index3.set(`${index3.size}`, 3);
      let teamdetailsbgG = defaultroombg_ <= 7517113.0;
      do {
          let iconviewergifI = String.fromCharCode(103,115,116,114,105,110,103,95,53,95,51,49,0);
         defaultroombg_ /= Math.max(3, 2);
         iconviewergifI = `${iconviewergifI.length ^ iconviewergifI.length}`;
         if (teamdetailsbgG) {
            break;
         }
      } while ((1 < (xadsdkQ.size | 2)) && teamdetailsbgG);
      for (let f = 0; f < 3; f++) {
          let current0 = 0.0;
         downarrowx /= Math.max(2, 3);
         current0 += parseInt(`${current0}`) * parseInt(`${current0}`);
      }
          let sansZ = String.fromCharCode(115,115,105,109,118,95,51,95,52,50,0);
          let libfolly_ = String.fromCharCode(97,99,117,116,111,102,102,95,121,95,49,49,0);
          let finit_q2 = false;
         xadsdkQ.set(`${runtimez}`, parseInt(`${runtimez}`));
         sansZ = `${((finit_q2 ? 4 : 2))}`;
         libfolly_ += `${libfolly_.length}`;
         footballp = new Map([[`${telegramY.size}`, telegramY.size]]);
      downloaderK = !downloaderK;
      break;
   }
   for (let i = 0; i < 3; i++) {
       let liveX = String.fromCharCode(110,95,54,53,95,97,118,100,99,116,0);
       let iconrightorange_ = 4;
       let sliderz = true;
       let libjsinspectorf = 5;
       let analyticR = 0.0;
         liveX += `${(iconrightorange_ >> (Math.min(2, Math.abs((sliderz ? 5 : 2)))))}`;
         liveX = `${libjsinspectorf / (Math.max(parseInt(`${analyticR}`), 8))}`;
      let eactb = 6075081 <= iconrightorange_;
      do {
         iconrightorange_ %= Math.max(1 << (Math.min(5, Math.abs(parseInt(`${analyticR}`)))), 3);
         if (eactb) {
            break;
         }
      } while (eactb && (libjsinspectorf < 3));
      if (2 == (libjsinspectorf + iconrightorange_)) {
         iconrightorange_ += 3;
      }
         liveX += `${iconrightorange_ | 2}`;
      if ((iconrightorange_ / 4) == 2) {
         libjsinspectorf += 3 / (Math.max(8, iconrightorange_));
      }
      let positionfieldv = iconrightorange_ >= 6866233;
      do {
          let iconfeedbackH = String.fromCharCode(121,95,56,54,95,109,98,108,111,99,107,0);
          let iconstar2 = String.fromCharCode(118,115,105,110,107,95,119,95,57,55,0);
          let defaultfootballbgp = String.fromCharCode(118,95,54,57,95,112,101,114,112,105,120,101,108,0);
         iconrightorange_ >>= Math.min(4, defaultfootballbgp.length);
         iconfeedbackH += `${iconstar2.length | 2}`;
         iconstar2 = `${3 - iconstar2.length}`;
         defaultfootballbgp = `${2 * iconstar2.length}`;
         if (positionfieldv) {
            break;
         }
      } while ((analyticR >= 3.15) && positionfieldv);
          let basketballtrophyJ = String.fromCharCode(119,95,57,53,95,98,108,97,107,101,98,0);
         libjsinspectorf /= Math.max(iconrightorange_, 2);
         basketballtrophyJ += `${(basketballtrophyJ == String.fromCharCode(76,0) ? basketballtrophyJ.length : basketballtrophyJ.length)}`;
      if ((iconrightorange_ << (Math.min(Math.abs(libjsinspectorf), 1))) == 1 && 1 == (libjsinspectorf << (Math.min(4, Math.abs(iconrightorange_))))) {
         libjsinspectorf += iconrightorange_;
      }
       let injuryx = 5.0;
         libjsinspectorf += 3 >> (Math.min(Math.abs(parseInt(`${injuryx}`)), 1));
      stylesY = verticalF.length < 16 || profilek.length < 16;
   }
   while (nativemoduleF.length <= 1) {
      viewse.set(profilek, ((downloaderK ? 5 : 4) + profilek.length));
      break;
   }
      viewse = new Map([[`${viewse.size}`, y_imagek.length >> (Math.min(Math.abs(2), 3))]]);
       let iconbello = String.fromCharCode(113,95,51,52,95,99,104,111,115,101,0);
       let relatedS: Array<any> = [59, 953, 938];
       let librrcv = 1.0;
          let animationse = 4.0;
          let elementsr = false;
         relatedS.push(iconbello.length);
         animationse -= parseFloat(`${parseInt(`${animationse}`) + 2}`);
         elementsr = !elementsr;
       let backiconq = String.fromCharCode(103,95,56,51,95,119,111,114,100,0);
       let libreactnativeblobr = String.fromCharCode(108,95,55,49,95,99,104,97,115,101,0);
      while (iconbello != libreactnativeblobr) {
          let nextE: Array<any> = [50, 163, 789];
          let imagesQ = 0;
          let libglog6 = false;
          let uimanagerR: Array<any> = [String.fromCharCode(103,108,111,98,97,108,116,101,109,95,57,95,57,53,0), String.fromCharCode(115,117,98,114,97,110,103,101,115,95,50,95,49,57,0), String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,54,95,53,57,0)];
         libreactnativeblobr += `${iconbello.length + relatedS.length}`;
         nextE = [nextE.length];
         imagesQ -= (imagesQ - (libglog6 ? 4 : 4));
         libglog6 = imagesQ >= 47;
         uimanagerR = [imagesQ];
         break;
      }
      let emojihearts = backiconq.length >= 8271108;
      do {
          let product0 = String.fromCharCode(113,95,55,50,95,111,103,103,105,110,103,0);
          let greyticke = String.fromCharCode(99,117,116,101,115,116,95,109,95,56,48,0);
          let dpluse: Array<any> = [786, 957];
          let downloadf: Map<any, any> = new Map([[String.fromCharCode(116,95,49,49,95,112,114,111,99,101,101,100,0),499], [String.fromCharCode(114,105,98,98,111,110,95,119,95,51,52,0),373]]);
         backiconq += "1";
         product0 = `${downloadf.size}`;
         greyticke += `${greyticke.length}`;
         dpluse = [1];
         downloadf = new Map([[`${downloadf.size}`, 1]]);
         if (emojihearts) {
            break;
         }
      } while (emojihearts && (libreactnativeblobr.length <= 4));
         iconbello += `${backiconq.length}`;
         backiconq += `${2 | relatedS.length}`;
      if (3 < libreactnativeblobr.length) {
         libreactnativeblobr = `${relatedS.length % 1}`;
      }
         iconbello = `${backiconq.length & 3}`;
      if (1.56 >= (libreactnativeblobr.length / (Math.max(9, librrcv))) && (parseInt(`${librrcv}`) / (Math.max(libreactnativeblobr.length, 2))) >= 3) {
         librrcv *= backiconq.length;
      }
      iconuserp %= Math.max(3, profilek.length & checkboxr.size);
      stylesY = 72 < checkboxr.size && verticalF == String.fromCharCode(67,0);
   for (let j = 0; j < 2; j++) {
       let subtextl = 1;
       let core2 = String.fromCharCode(113,95,53,95,115,105,103,110,105,102,105,99,97,110,99,101,0);
         subtextl /= Math.max(1, 3);
      for (let f = 0; f < 1; f++) {
         subtextl /= Math.max(1, 5);
      }
         subtextl -= subtextl;
         subtextl %= Math.max(subtextl / (Math.max(core2.length, 8)), 3);
      let malaysiaL = 8235646 <= core2.length;
      do {
         core2 += `${subtextl}`;
         if (malaysiaL) {
            break;
         }
      } while (malaysiaL && ((core2.length | subtextl) > 1 && 1 > (subtextl | core2.length)));
          let reactnativejsl = 3;
          let dropdownQ = true;
          let mbnative0 = 5;
         core2 = `${reactnativejsl ^ 3}`;
         reactnativejsl <<= Math.min(Math.abs((mbnative0 & (dropdownQ ? 1 : 2))), 5);
         dropdownQ = !dropdownQ && 6 < mbnative0;
      verticalF = "2";
   }
       let predictionarrowh: Array<any> = [523, 795, 198];
          let switch_uyp = 5.0;
         predictionarrowh.push(3 >> (Math.min(1, predictionarrowh.length)));
         switch_uyp /= Math.max(parseFloat(`${parseInt(`${switch_uyp}`) ^ 3}`), 5);
       let policyL: Array<any> = [406, 872];
       let indexu: Array<any> = [346, 159];
      let sendL = 6571975 <= predictionarrowh.length;
      do {
         predictionarrowh = [policyL.length | 2];
         if (sendL) {
            break;
         }
      } while ((policyL.includes(predictionarrowh.length)) && sendL);
      stylesY = 54 > viewse.size && 54 > profilek.length;
       let pathd: Map<any, any> = new Map([[String.fromCharCode(109,95,49,54,95,97,116,116,114,98,117,116,101,0),210], [String.fromCharCode(113,95,50,95,116,118,100,99,0),641]]);
       let grayi = String.fromCharCode(106,115,116,121,112,101,95,120,95,49,57,0);
         pathd.set(grayi, grayi.length);
          let show9 = 4;
          let sliderc = String.fromCharCode(119,97,118,114,101,97,100,101,114,95,98,95,55,53,0);
          let subout0: Array<any> = [910, 454];
         pathd.set(`${show9}`, show9);
         sliderc += `${(sliderc == String.fromCharCode(97,0) ? sliderc.length : subout0.length)}`;
         subout0.push(sliderc.length << (Math.min(3, subout0.length)));
      for (let u = 0; u < 1; u++) {
         pathd = new Map([[`${pathd.size}`, 2 * grayi.length]]);
      }
         pathd = new Map([[`${pathd.size}`, pathd.size]]);
         pathd = new Map([[`${pathd.size}`, grayi.length & 2]]);
      while ((2 & grayi.length) < 1 || (2 & grayi.length) < 1) {
         grayi += `${pathd.size / (Math.max(1, grayi.length))}`;
         break;
      }
      viewse.set(grayi, (grayi == String.fromCharCode(97,0) ? y_imagek.length : grayi.length));
    delayControls();
  };

  const clearHidingDelay = () => {
       let indicator8: Array<any> = [55, 629, 195];
    let mountingC = false;
    let transfer_ = String.fromCharCode(115,105,103,118,101,114,95,102,95,53,50,0);
    let ticki = 4;
    let sigmob1 = String.fromCharCode(101,95,52,49,95,117,110,98,105,97,115,0);
    let orangew = String.fromCharCode(98,105,114,116,104,100,97,121,95,56,95,52,54,0);
    let feedbacki: Map<any, any> = new Map([[String.fromCharCode(109,95,56,56,95,100,121,97,100,105,99,0),222], [String.fromCharCode(98,95,56,51,95,116,119,111,108,97,109,101,0),664]]);
    let basketballtrophyH = 3.0;
    let basketballdetailsbgT = String.fromCharCode(115,104,111,114,116,101,110,95,50,95,57,57,0);
    let default_cet: Map<any, any> = new Map([[String.fromCharCode(98,95,57,50,95,99,111,108,108,97,112,115,101,0),934], [String.fromCharCode(114,101,100,101,116,101,99,116,95,102,95,55,48,0),85]]);
      indicator8 = [feedbacki.size];
      sigmob1 += "3";
      mountingC = (indicator8.length * feedbacki.size) <= 81;
      transfer_ = `${parseInt(`${basketballtrophyH}`) % 1}`;
   while ((orangew.length + 1) == 5) {
       let tempnodatagifC = 0.0;
       let reactnavigationD = 2;
       let gift3 = 2.0;
       let x_imageE = String.fromCharCode(110,95,53,55,95,115,97,118,101,112,111,105,110,116,0);
       let iconmegaphoneL = String.fromCharCode(105,95,54,50,95,98,119,103,116,0);
          let bgvipsportm = String.fromCharCode(97,95,53,48,95,114,101,112,117,98,108,105,115,104,0);
          let submitf = 0;
          let hongkong2 = 3.0;
         gift3 /= Math.max(2, parseFloat(`${iconmegaphoneL.length}`));
         bgvipsportm = `${(bgvipsportm == String.fromCharCode(115,0) ? submitf : bgvipsportm.length)}`;
         submitf <<= Math.min(3, Math.abs(submitf));
         hongkong2 /= Math.max(3, (parseFloat(`${bgvipsportm == String.fromCharCode(118,0) ? parseInt(`${hongkong2}`) : bgvipsportm.length}`)));
      for (let y = 0; y < 2; y++) {
          let heartp = true;
          let loginsuccessQ = String.fromCharCode(99,95,56,53,95,114,101,115,105,103,110,115,0);
         iconmegaphoneL = "1";
         heartp = String.fromCharCode(113,0) == loginsuccessQ;
         loginsuccessQ += `${loginsuccessQ.length >> (Math.min(Math.abs(3), 2))}`;
      }
          let usernamen = 2;
          let defaultroombg1 = String.fromCharCode(101,95,54,49,95,115,101,108,101,99,116,111,112,0);
         reactnavigationD += reactnavigationD;
         usernamen -= usernamen & 2;
         defaultroombg1 += `${2 * usernamen}`;
      while (1.54 <= (reactnavigationD / (Math.max(4, tempnodatagifC)))) {
          let leakcheckerh = 1;
          let modulesL = String.fromCharCode(115,112,108,105,116,116,101,100,95,113,95,49,52,0);
         reactnavigationD /= Math.max(2, iconmegaphoneL.length);
         leakcheckerh |= modulesL.length >> (Math.min(3, Math.abs(leakcheckerh)));
         modulesL = `${2 | leakcheckerh}`;
         break;
      }
      while (1.22 <= (tempnodatagifC / (Math.max(gift3, 9)))) {
          let build5 = String.fromCharCode(108,95,57,48,95,109,105,114,114,111,114,0);
          let componentX = String.fromCharCode(97,114,116,105,102,97,99,116,95,48,95,50,51,0);
         gift3 -= parseFloat(`${3}`);
         build5 += `${build5.length}`;
         componentX = `${componentX.length}`;
         break;
      }
          let stringsQ = String.fromCharCode(116,95,56,55,95,101,110,99,114,121,112,116,0);
          let i_imageV = String.fromCharCode(112,114,111,118,105,100,101,115,95,48,95,57,54,0);
          let whitesmalltick_: Array<any> = [String.fromCharCode(113,95,50,49,95,100,101,99,111,114,97,116,111,114,115,0), String.fromCharCode(104,95,51,55,95,104,101,97,114,116,115,0), String.fromCharCode(109,101,109,99,112,121,95,116,95,51,0)];
         gift3 += parseFloat(`${reactnavigationD}`);
         stringsQ += `${whitesmalltick_.length}`;
         i_imageV = "3";
         whitesmalltick_.push(stringsQ.length % (Math.max(3, 2)));
      for (let a = 0; a < 3; a++) {
         iconmegaphoneL += "1";
      }
         iconmegaphoneL = "2";
      basketballtrophyH /= Math.max(5, (sigmob1 == String.fromCharCode(79,0) ? sigmob1.length : indicator8.length));
      break;
   }
   for (let j = 0; j < 3; j++) {
      transfer_ = "3";
   }
      orangew = `${(transfer_.length - (mountingC ? 5 : 2))}`;
   for (let c = 0; c < 2; c++) {
      feedbacki.set(`${indicator8.length}`, indicator8.length);
   }
   while (3 > (sigmob1.length / 1)) {
      sigmob1 += "3";
      break;
   }
   let assetsJ = 9688510 <= transfer_.length;
   do {
      transfer_ = `${transfer_.length}`;
      if (assetsJ) {
         break;
      }
   } while ((1 < ticki) && assetsJ);
      orangew = `${parseInt(`${basketballtrophyH}`) * 3}`;
      feedbacki.set(`${transfer_}`, 3);
      orangew += `${feedbacki.size}`;
   if (3 <= (sigmob1.length >> (Math.min(5, indicator8.length)))) {
      indicator8.push(sigmob1.length);
   }
   let videojsg = String.fromCharCode(113,100,112,56,113,53,103,120,49,0) == sigmob1;
   do {
      sigmob1 = "1";
      if (videojsg) {
         break;
      }
   } while ((mountingC) && videojsg);
      sigmob1 = `${(2 - (mountingC ? 5 : 2))}`;
   for (let s = 0; s < 1; s++) {
      feedbacki = new Map([[`${ticki}`, 3]]);
   }
      mountingC = String.fromCharCode(101,0) == sigmob1;
   if (feedbacki.get(`${ticki}`) != null) {
      feedbacki.set(sigmob1, (String.fromCharCode(84,0) == sigmob1 ? sigmob1.length : ticki));
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let notificationfillemptyx = false;
    let graphics_ = String.fromCharCode(118,95,55,54,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0);
    let umengW = 0.0;
    let storer = String.fromCharCode(103,95,52,57,95,104,97,108,102,0);
    let dicelogoy = true;
    let dangerm = String.fromCharCode(98,111,117,110,100,95,53,95,53,51,0);
    let routerZ: Array<any> = [String.fromCharCode(111,95,49,57,95,97,112,112,114,111,118,97,108,0), String.fromCharCode(112,97,114,115,101,114,115,95,104,95,53,56,0)];
    let libffmpegkitX: Array<any> = [String.fromCharCode(97,95,51,55,95,115,117,112,101,114,0), String.fromCharCode(109,112,101,103,116,115,95,99,95,55,50,0), String.fromCharCode(105,95,53,48,95,105,110,115,101,114,116,0)];
    let orangedownarrowc = 5.0;
    let greyarrowupK = String.fromCharCode(116,100,108,115,95,118,95,53,51,0);
    let n_positionM = true;
    let watchnowbgj: Map<any, any> = new Map([[String.fromCharCode(111,95,48,95,115,101,97,114,99,104,0),false ], [String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,99,95,49,48,48,0),false ]]);
       let iconrightorange1 = 3.0;
       let homeplayer9: Array<any> = [742, 817];
       let dependenciesb: Array<any> = [878, 976];
         homeplayer9 = [dependenciesb.length % (Math.max(homeplayer9.length, 9))];
         homeplayer9 = [homeplayer9.length];
      libffmpegkitX = [(dangerm == String.fromCharCode(100,0) ? parseInt(`${umengW}`) : dangerm.length)];
      iconrightorange1 += parseFloat(`${3}`);
       let nbatrophyR = String.fromCharCode(109,97,102,113,95,100,95,56,51,0);
         nbatrophyR += `${nbatrophyR.length}`;
         nbatrophyR = `${(nbatrophyR == String.fromCharCode(52,0) ? nbatrophyR.length : nbatrophyR.length)}`;
         nbatrophyR += `${nbatrophyR.length}`;
      umengW -= parseFloat(`${3 | nbatrophyR.length}`);
   for (let o = 0; o < 1; o++) {
      umengW -= parseFloat(`${parseInt(`${umengW}`) / 1}`);
   }
   for (let t = 0; t < 1; t++) {
      dicelogoy = dangerm.endsWith(`${notificationfillemptyx}`);
   }
   for (let x = 0; x < 2; x++) {
      dangerm = `${parseInt(`${umengW}`) / (Math.max(10, storer.length))}`;
   }

      if (delayValue === undefined) {

   for (let k = 0; k < 1; k++) {
      dangerm += `${libffmpegkitX.length - parseInt(`${umengW}`)}`;
   }
       let xadsdk0 = false;
       let guideC = 1;
       let regengD = String.fromCharCode(116,105,109,101,111,117,116,101,100,95,52,95,53,50,0);
      let chatu = guideC <= 9634964;
      do {
         guideC &= regengD.length;
         if (chatu) {
            break;
         }
      } while (((guideC % 2) > 3) && chatu);
          let notificationL = 4.0;
          let libswscalev = String.fromCharCode(97,112,116,120,104,100,95,121,95,54,57,0);
         regengD += `${libswscalev.length}`;
         notificationL += parseInt(`${notificationL}`) << (Math.min(1, Math.abs(1)));
         libswscalev += `${2 % (Math.max(1, parseInt(`${notificationL}`)))}`;
         guideC &= (String.fromCharCode(109,0) == regengD ? guideC : regengD.length);
      if (guideC > 3) {
         guideC &= 2;
      }
      let successT = 6003164 >= guideC;
      do {
         guideC &= 3;
         if (successT) {
            break;
         }
      } while ((xadsdk0) && successT);
          let componentsW: Array<any> = [348, 626];
          let storeQ = String.fromCharCode(119,105,110,100,111,119,115,95,109,95,49,53,0);
         xadsdk0 = String.fromCharCode(54,0) == storeQ;
         componentsW.push(3 << (Math.min(2, componentsW.length)));
         storeQ += "1";
       let libruntimeexecutor4 = String.fromCharCode(102,95,55,53,95,99,97,118,101,97,116,0);
         guideC &= (String.fromCharCode(86,0) == libruntimeexecutor4 ? libruntimeexecutor4.length : regengD.length);
         regengD = `${libruntimeexecutor4.length + regengD.length}`;
      dangerm += `${libffmpegkitX.length}`;
   for (let f = 0; f < 1; f++) {
      graphics_ = `${((dicelogoy ? 2 : 4) | dangerm.length)}`;
   }
      umengW += parseFloat(`${dangerm.length & 3}`);
   while (5.97 < (umengW - 1.100) || umengW < 1.100) {
      umengW -= parseFloat(`${parseInt(`${umengW}`) + 2}`);
      break;
   }
        if (showSlider === 'none' && !paused) {

       let minimize0: Array<any> = [String.fromCharCode(114,97,100,98,95,109,95,52,55,0), String.fromCharCode(107,95,50,57,95,105,103,110,111,114,101,115,0)];
      if ((1 >> (Math.min(4, minimize0.length))) == 3 || 1 == (minimize0.length >> (Math.min(minimize0.length, 2)))) {
          let membershipr = String.fromCharCode(108,95,55,55,95,112,107,103,99,111,110,102,105,103,0);
         minimize0.push(membershipr.length | minimize0.length);
      }
       let finit_ys = true;
          let libfbjniA = false;
         minimize0 = [((finit_ys ? 5 : 4) ^ (libfbjniA ? 3 : 2))];
      umengW -= parseFloat(`${graphics_.length}`);
      umengW /= Math.max(parseFloat(`${dangerm.length}`), 1);
   while (storer.length >= 3) {
      dicelogoy = (dangerm.length >> (Math.min(5, routerZ.length))) > 96;
      break;
   }
       let logouserW: Array<any> = [549, 514, 212];
       let overx = String.fromCharCode(111,95,50,53,95,103,97,116,104,101,114,105,110,103,0);
       let unselectedh = String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,120,95,53,53,0);
      while (2 >= unselectedh.length) {
         overx += `${unselectedh.length}`;
         break;
      }
      if (unselectedh.length < 4) {
         logouserW.push(unselectedh.length * overx.length);
      }
         overx += `${overx.length}`;
         unselectedh = `${(unselectedh == String.fromCharCode(71,0) ? logouserW.length : unselectedh.length)}`;
      while (2 == logouserW.length) {
          let containerv = false;
          let libcxxcomponentsv = String.fromCharCode(110,95,50,54,95,117,110,114,101,97,100,0);
          let mintegralA = true;
          let halffieldimage7 = String.fromCharCode(102,95,52,56,95,108,105,98,97,118,102,105,108,116,101,114,0);
          let directo = String.fromCharCode(117,95,56,95,109,115,109,112,101,103,118,0);
         overx += `${(1 ^ (containerv ? 4 : 4))}`;
         containerv = !mintegralA;
         libcxxcomponentsv += `${directo.length ^ halffieldimage7.length}`;
         halffieldimage7 = `${((mintegralA ? 1 : 1))}`;
         directo = `${(String.fromCharCode(102,0) == libcxxcomponentsv ? libcxxcomponentsv.length : halffieldimage7.length)}`;
         break;
      }
      let iconqqg = 5744068 >= overx.length;
      do {
         overx += `${1 - overx.length}`;
         if (iconqqg) {
            break;
         }
      } while ((4 == logouserW.length) && iconqqg);
          let privilegeP = 2.0;
         overx += `${2 + overx.length}`;
         privilegeP *= 3 & parseInt(`${privilegeP}`);
          let iconlogoutP = String.fromCharCode(100,101,102,101,97,116,95,122,95,50,53,0);
         overx += `${iconlogoutP.length}`;
         overx = "3";
      graphics_ += `${graphics_.length << (Math.min(Math.abs(3), 4))}`;
   while (4.44 > orangedownarrowc) {
      notificationfillemptyx = libffmpegkitX.includes(routerZ[0]);
      break;
   }
          setShowControls(false)
        }
      } else {

       let holderw = 4.0;
       let iconarrowrightorangeg = true;
          let weibo8: Map<any, any> = new Map([[String.fromCharCode(108,95,52,56,95,114,97,110,107,105,110,103,0),632], [String.fromCharCode(101,120,116,109,97,112,95,50,95,50,56,0),195], [String.fromCharCode(121,95,56,54,95,122,101,114,111,109,118,0),187]]);
          let appsL: Map<any, any> = new Map([[String.fromCharCode(106,95,56,51,95,99,111,110,116,114,111,108,108,101,100,0),String.fromCharCode(107,95,54,53,95,97,101,97,100,0)], [String.fromCharCode(101,103,114,101,115,115,95,121,95,54,57,0),String.fromCharCode(106,95,52,48,95,120,118,105,100,105,100,99,116,0)], [String.fromCharCode(104,95,50,95,99,111,109,112,108,101,116,101,100,0),String.fromCharCode(109,95,54,51,95,115,101,103,105,100,0)]]);
          let leagueu: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,114,95,55,51,0),228], [String.fromCharCode(115,101,116,100,97,114,95,98,95,50,48,0),366]]);
         iconarrowrightorangeg = 59 < leagueu.size;
         weibo8.set(`${appsL.size}`, appsL.size);
         leagueu.set(`${weibo8.size}`, 3 >> (Math.min(4, Math.abs(weibo8.size))));
      while ((4.4 + holderw) >= 2.12 && holderw >= 4.4) {
          let fasty = true;
          let leaguedetailsbgg = 2.0;
          let iconadslinkZ = 3.0;
          let orangeclockj = String.fromCharCode(116,95,57,53,95,97,100,100,114,0);
          let unselectedT: Array<any> = [234, 424, 874];
         iconarrowrightorangeg = 3.70 >= holderw;
         fasty = !fasty && orangeclockj.length >= 17;
         leaguedetailsbgg += parseInt(`${iconadslinkZ}`);
         orangeclockj += `${parseInt(`${iconadslinkZ}`)}`;
         unselectedT = [((fasty ? 3 : 5) | 3)];
         break;
      }
          let s_animation_ = 0;
          let ballQ = String.fromCharCode(114,95,57,52,95,114,101,115,117,108,117,116,105,111,110,0);
          let benefit5 = String.fromCharCode(113,95,56,52,95,105,110,116,101,114,102,114,97,109,101,0);
         iconarrowrightorangeg = !iconarrowrightorangeg || s_animation_ >= 53;
         s_animation_ |= (ballQ == String.fromCharCode(83,0) ? ballQ.length : benefit5.length);
         benefit5 = "2";
         holderw *= 3 * parseInt(`${holderw}`);
         iconarrowrightorangeg = holderw == 28.55 || !iconarrowrightorangeg;
       let bggradientf = 1.0;
       let inviteI = 5.0;
      dicelogoy = (storer.length - libffmpegkitX.length) <= 34;
   for (let y = 0; y < 2; y++) {
      notificationfillemptyx = !dangerm.includes(`${umengW}`);
   }
      libffmpegkitX.push((String.fromCharCode(95,0) == graphics_ ? graphics_.length : parseInt(`${umengW}`)));
       let rules2 = 3.0;
      let eyeopenN = 6519024.0 <= rules2;
      do {
         rules2 -= 1 * parseInt(`${rules2}`);
         if (eyeopenN) {
            break;
         }
      } while ((rules2 == rules2) && eyeopenN);
      if ((4 * rules2) <= 4.54) {
          let stepd: Map<any, any> = new Map([[String.fromCharCode(118,95,56,53,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0),694], [String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,110,95,53,48,0),482]]);
         rules2 += stepd.size - parseInt(`${rules2}`);
      }
         rules2 -= parseInt(`${rules2}`);
      storer += `${((notificationfillemptyx ? 3 : 4) << (Math.min(Math.abs(3), 4)))}`;
   let window_beb = orangedownarrowc >= 7402095.0;
   do {
      orangedownarrowc *= parseFloat(`${routerZ.length | libffmpegkitX.length}`);
      if (window_beb) {
         break;
      }
   } while (window_beb && (1.72 < (orangedownarrowc / (Math.max(parseFloat(`${dangerm.length}`), 7))) && (orangedownarrowc / (Math.max(1.72, 8))) < 2.62));
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let native1 = String.fromCharCode(109,95,50,51,95,105,110,116,101,114,108,101,97,118,101,0);
    let bridgeI = 4;
    let iconadslinkW = true;
    let moduleu = String.fromCharCode(99,95,51,54,95,112,114,101,102,97,99,101,0);
    let teamdetailsbg9 = 0.0;
    let final_9a = 4.0;
    let xcopy_bv9 = 1.0;
    let hiadz = String.fromCharCode(114,95,51,57,95,119,104,105,99,104,0);
    let singleU = String.fromCharCode(109,115,122,104,95,56,95,50,0);
    let default_fL = 5;
    let termsK: Map<any, any> = new Map([[String.fromCharCode(105,95,56,50,95,99,97,108,108,115,0),String.fromCharCode(99,108,105,112,98,111,97,114,100,95,112,95,54,54,0)], [String.fromCharCode(120,95,53,52,95,101,120,105,102,0),String.fromCharCode(105,110,99,108,117,100,101,95,53,95,57,55,0)], [String.fromCharCode(103,95,48,95,101,105,112,118,0),String.fromCharCode(109,95,55,51,95,109,117,108,116,105,112,108,101,0)]]);
    let iconuserw: Array<any> = [961, 545];
    let valuesH: Array<any> = [String.fromCharCode(110,99,104,117,110,107,95,117,95,56,53,0), String.fromCharCode(118,97,99,97,110,116,95,120,95,52,55,0), String.fromCharCode(102,97,105,108,105,110,103,95,115,95,49,48,48,0)];
    let jingdongh = 3;
    let settingsn = 5.0;
    let sentryw = String.fromCharCode(115,116,97,116,105,115,116,105,99,95,117,95,57,50,0);
       let rcopy_g5 = 2;
       let stringM = String.fromCharCode(102,114,101,101,112,95,102,95,52,48,0);
       let sourcel: Map<any, any> = new Map([[String.fromCharCode(104,95,50,48,95,101,114,114,0),64], [String.fromCharCode(106,95,55,56,95,115,104,97,114,101,0),214], [String.fromCharCode(111,98,118,105,111,117,115,108,121,95,102,95,53,48,0),511]]);
          let bingF = 3.0;
          let weibob = false;
          let pointl = String.fromCharCode(118,115,101,114,118,105,99,101,95,110,95,50,0);
         sourcel = new Map([[pointl, 2]]);
         bingF *= (parseInt(`${bingF}`) >> (Math.min(4, Math.abs((weibob ? 1 : 2)))));
         weibob = 59.13 <= bingF && !weibob;
         pointl += `${((weibob ? 5 : 5) / (Math.max(parseInt(`${bingF}`), 1)))}`;
      if ((rcopy_g5 >> (Math.min(Math.abs(sourcel.size), 3))) <= 3 || 1 <= (3 >> (Math.min(5, Math.abs(rcopy_g5))))) {
         sourcel = new Map([[`${sourcel.size}`, sourcel.size & rcopy_g5]]);
      }
          let acceptedR: Map<any, any> = new Map([[String.fromCharCode(115,95,56,53,95,116,97,112,102,105,108,116,101,114,0),String.fromCharCode(104,95,49,51,95,97,114,114,97,110,103,101,100,0)], [String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,95,106,95,50,53,0),String.fromCharCode(115,101,110,100,109,98,117,102,95,97,95,50,48,0)], [String.fromCharCode(119,95,55,54,95,112,114,111,100,117,99,116,102,0),String.fromCharCode(99,111,110,110,101,99,116,101,100,95,104,95,50,51,0)]]);
          let homed: Map<any, any> = new Map([[String.fromCharCode(97,115,102,114,116,112,95,56,95,55,53,0),800], [String.fromCharCode(97,95,52,54,95,114,101,97,100,0),896], [String.fromCharCode(106,95,53,50,95,102,111,114,109,97,116,115,0),700]]);
         stringM += `${stringM.length >> (Math.min(Math.abs(3), 4))}`;
         acceptedR = new Map([[`${homed.size}`, acceptedR.size]]);
         homed = new Map([[`${acceptedR.size}`, 3 << (Math.min(2, Math.abs(homed.size)))]]);
         stringM = `${rcopy_g5}`;
         rcopy_g5 *= rcopy_g5;
       let predictionarrow0 = true;
       let components7 = false;
         predictionarrow0 = rcopy_g5 >= 71;
       let saveF = String.fromCharCode(111,95,49,50,95,115,97,110,101,0);
         sourcel = new Map([[`${sourcel.size}`, sourcel.size]]);
      xcopy_bv9 *= sourcel.size + parseInt(`${xcopy_bv9}`);
   if ((teamdetailsbg9 / 2.86) == 5.82 || (teamdetailsbg9 / 2.86) == 2.19) {
       let statsW = 4.0;
       let backwhiteJ: Map<any, any> = new Map([[String.fromCharCode(115,95,51,52,95,97,100,100,105,116,105,111,110,115,0),601], [String.fromCharCode(111,102,102,108,105,110,101,95,100,95,51,53,0),979]]);
       let predictionbuttonG: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,95,51,95,53,51,0),String.fromCharCode(119,97,107,101,95,57,95,53,49,0)], [String.fromCharCode(98,100,119,110,95,111,95,57,53,0),String.fromCharCode(116,105,108,101,95,50,95,48,0)]]);
       let iconpipexpandd = String.fromCharCode(118,112,100,120,95,48,95,52,55,0);
       let kick0 = String.fromCharCode(106,95,53,51,95,112,114,111,100,117,99,116,105,111,110,0);
          let predictionbannere = String.fromCharCode(114,95,55,53,95,97,97,99,101,110,99,0);
         kick0 = `${predictionbannere.length / (Math.max(1, parseInt(`${statsW}`)))}`;
         statsW /= Math.max(parseFloat(`${kick0.length >> (Math.min(Math.abs(2), 2))}`), 3);
          let libflipperO = 4.0;
          let goallogoC = String.fromCharCode(115,95,51,53,95,100,101,99,111,109,112,97,110,100,0);
         statsW -= parseFloat(`${3 % (Math.max(7, backwhiteJ.size))}`);
         libflipperO -= (String.fromCharCode(83,0) == goallogoC ? goallogoC.length : parseInt(`${libflipperO}`));
      if (kick0.endsWith(`${backwhiteJ.size}`)) {
         backwhiteJ = new Map([[`${backwhiteJ.size}`, iconpipexpandd.length & backwhiteJ.size]]);
      }
         backwhiteJ = new Map([[kick0, (iconpipexpandd == String.fromCharCode(75,0) ? iconpipexpandd.length : kick0.length)]]);
         predictionbuttonG = new Map([[`${predictionbuttonG.size}`, predictionbuttonG.size + parseInt(`${statsW}`)]]);
      while (2 <= (4 & predictionbuttonG.size) || (parseFloat(`${predictionbuttonG.size}`) + statsW) <= 4.20) {
         predictionbuttonG.set(kick0, parseInt(`${statsW}`));
         break;
      }
         backwhiteJ.set(`${statsW}`, 2);
       let switch__oG = true;
      let awayteamfieldP = 5698344 <= predictionbuttonG.size;
      do {
         predictionbuttonG.set(`${switch__oG}`, predictionbuttonG.size + 1);
         if (awayteamfieldP) {
            break;
         }
      } while ((4 == (predictionbuttonG.size & kick0.length) || (predictionbuttonG.size & 4) == 4) && awayteamfieldP);
         switch__oG = 79.21 > statsW;
      for (let s = 0; s < 1; s++) {
         iconpipexpandd = `${((switch__oG ? 4 : 2))}`;
      }
      if (3 > iconpipexpandd.length && kick0.length > 3) {
          let gesturesb = 5.0;
          let moviesJ = String.fromCharCode(100,95,52,56,95,115,115,116,104,114,101,115,104,0);
          let debugi: Array<any> = [374, 196];
          let tailG = true;
          let tick9 = true;
         iconpipexpandd = `${(String.fromCharCode(76,0) == iconpipexpandd ? (tailG ? 5 : 3) : iconpipexpandd.length)}`;
         gesturesb *= parseInt(`${gesturesb}`) & moviesJ.length;
         moviesJ = `${2 - moviesJ.length}`;
         debugi.push((String.fromCharCode(72,0) == moviesJ ? parseInt(`${gesturesb}`) : moviesJ.length));
         tailG = (moviesJ.length / (Math.max(3, gesturesb))) < 74.32;
         tick9 = 76.87 == gesturesb;
      }
       let attributedstringL: Array<any> = [901, 363, 650];
       let handlerp: Array<any> = [18, 950, 244];
      for (let a = 0; a < 2; a++) {
         attributedstringL.push(predictionbuttonG.size * attributedstringL.length);
      }
      teamdetailsbg9 -= ((iconadslinkW ? 1 : 4) ^ parseInt(`${xcopy_bv9}`));
   }
   for (let p = 0; p < 3; p++) {
       let gmailc = String.fromCharCode(117,95,53,48,95,118,102,114,101,101,0);
         gmailc += `${gmailc.length}`;
         gmailc += `${(gmailc == String.fromCharCode(113,0) ? gmailc.length : gmailc.length)}`;
      let baiduO = gmailc.length >= 6187237;
      do {
         gmailc = `${gmailc.length}`;
         if (baiduO) {
            break;
         }
      } while (baiduO && (gmailc == String.fromCharCode(105,0)));
      hiadz += `${parseInt(`${teamdetailsbg9}`) * 2}`;
   }
       let stationsC: Array<any> = [String.fromCharCode(112,95,57,95,118,97,114,108,101,110,103,116,104,0), String.fromCharCode(119,95,50,53,95,114,101,102,112,105,99,0), String.fromCharCode(98,95,54,54,95,97,118,117,116,105,108,0)];
       let tailC = String.fromCharCode(114,116,106,112,101,103,95,55,95,50,48,0);
         tailC += `${stationsC.length / (Math.max(tailC.length, 6))}`;
      if (stationsC.length <= tailC.length) {
         tailC = `${stationsC.length}`;
      }
          let iconpipshrinkF = String.fromCharCode(115,116,97,114,116,117,112,95,48,95,51,54,0);
          let videobufferloadingU = true;
         stationsC.push((iconpipshrinkF.length << (Math.min(1, Math.abs((videobufferloadingU ? 1 : 1))))));
      for (let k = 0; k < 1; k++) {
         tailC += `${tailC.length}`;
      }
         tailC = `${stationsC.length}`;
       let skipT = String.fromCharCode(118,105,97,98,108,101,95,115,95,52,57,0);
       let tumbnail0 = String.fromCharCode(108,95,56,48,95,115,101,110,100,118,0);
      teamdetailsbg9 /= Math.max(4, hiadz.length);
   let bellreminderb = default_fL >= 5035153;
   do {
      default_fL -= (parseInt(`${teamdetailsbg9}`) / (Math.max(3, (iconadslinkW ? 4 : 1))));
      if (bellreminderb) {
         break;
      }
   } while (((default_fL * 4) > 3 || (default_fL * 4) > 1) && bellreminderb);
   for (let m = 0; m < 2; m++) {
       let mbjscommonV = String.fromCharCode(110,95,53,51,95,99,111,109,112,105,108,101,114,0);
       let eventL = 4.0;
       let downC = 0.0;
         eventL -= (parseFloat(`${String.fromCharCode(55,0) == mbjscommonV ? mbjscommonV.length : parseInt(`${eventL}`)}`));
      if (4.31 <= (4.33 - eventL) || (eventL * 4.33) <= 2.39) {
         eventL *= parseFloat(`${mbjscommonV.length % (Math.max(9, parseInt(`${eventL}`)))}`);
      }
         downC /= Math.max(parseFloat(`${3 / (Math.max(7, parseInt(`${downC}`)))}`), 1);
          let leakcheckerb = String.fromCharCode(97,95,50,56,95,100,97,116,97,116,121,112,101,115,0);
          let whistlet = 5.0;
         mbjscommonV += `${3 % (Math.max(5, parseInt(`${downC}`)))}`;
         leakcheckerb = `${parseInt(`${whistlet}`) * 1}`;
         whistlet += parseFloat(`${1}`);
          let searchbar1 = 0.0;
          let basez = String.fromCharCode(112,114,111,109,111,116,105,110,103,95,53,95,52,50,0);
          let rightd = String.fromCharCode(97,99,104,105,101,118,101,100,95,104,95,53,51,0);
         downC += parseFloat(`${2 * rightd.length}`);
         searchbar1 += parseInt(`${searchbar1}`) | basez.length;
         basez += `${parseInt(`${searchbar1}`) % (Math.max(basez.length, 1))}`;
         rightd += "1";
          let whiteD = 4.0;
          let middlel: Array<any> = [461, 959, 689];
          let loadingk = 4.0;
         eventL -= parseFloat(`${2 + parseInt(`${eventL}`)}`);
         whiteD *= middlel.length;
         middlel.push(parseInt(`${whiteD}`) * middlel.length);
         loadingk += 2;
      let empty2 = 7743264.0 >= eventL;
      do {
         eventL /= Math.max(4, parseFloat(`${1}`));
         if (empty2) {
            break;
         }
      } while ((3 >= mbjscommonV.length) && empty2);
      for (let y = 0; y < 1; y++) {
         eventL += (parseFloat(`${mbjscommonV == String.fromCharCode(78,0) ? parseInt(`${eventL}`) : mbjscommonV.length}`));
      }
          let scrollviewf = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,104,95,49,53,0);
          let logouser2 = 2.0;
         eventL += parseFloat(`${2 ^ parseInt(`${downC}`)}`);
         scrollviewf += `${1 * scrollviewf.length}`;
         logouser2 /= Math.max(parseInt(`${logouser2}`), 1);
      xcopy_bv9 += 3;
   }

    if (isLocked) {

   if (4.11 >= final_9a) {
      iconadslinkW = parseInt(`${xcopy_bv9}`) <= singleU.length;
   }
       let weatherQ = String.fromCharCode(101,95,56,54,95,105,100,101,110,116,105,102,101,114,0);
          let componentregistryo = String.fromCharCode(120,95,51,56,95,97,99,116,105,118,97,116,111,114,0);
          let morez = false;
          let activity5 = 3;
         weatherQ = `${activity5}`;
         componentregistryo = `${((morez ? 2 : 4))}`;
         morez = morez || componentregistryo.length < 90;
         activity5 += ((morez ? 3 : 3));
          let diceh = String.fromCharCode(99,108,97,105,109,101,100,95,108,95,57,49,0);
          let streaming8 = String.fromCharCode(102,95,53,55,95,116,105,108,101,0);
          let taiwanq = 2.0;
         weatherQ = "2";
         diceh = "2";
         streaming8 = `${1 | parseInt(`${taiwanq}`)}`;
         taiwanq /= Math.max(2, parseFloat(`${diceh.length << (Math.min(streaming8.length, 5))}`));
          let notificationfilledX: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,100,114,97,102,116,0),348], [String.fromCharCode(100,105,115,99,114,101,116,101,95,108,95,51,53,0),873], [String.fromCharCode(97,95,52,57,95,114,101,115,105,100,117,97,108,115,0),285]]);
          let expand7: Array<any> = [String.fromCharCode(114,101,118,101,97,108,95,114,95,54,49,0), String.fromCharCode(111,112,101,110,109,112,116,95,122,95,57,55,0), String.fromCharCode(116,95,53,55,95,118,97,108,105,100,97,116,111,114,0)];
          let iconpointscorer = false;
         weatherQ = `${expand7.length / (Math.max(3, 9))}`;
         notificationfilledX.set(`${iconpointscorer}`, ((iconpointscorer ? 3 : 3) % 1));
         expand7 = [3 * notificationfilledX.size];
      native1 += `${parseInt(`${xcopy_bv9}`) >> (Math.min(1, Math.abs(2)))}`;
   for (let l = 0; l < 2; l++) {
      native1 = "2";
   }
   let expandO = 4945150 <= hiadz.length;
   do {
      hiadz += `${bridgeI % (Math.max(termsK.size, 10))}`;
      if (expandO) {
         break;
      }
   } while ((hiadz.length >= 3) && expandO);
       let mintegralr = true;
      for (let j = 0; j < 1; j++) {
         mintegralr = !mintegralr;
      }
       let root9 = 0;
       let vignetteC = 1;
      for (let x = 0; x < 2; x++) {
         mintegralr = root9 == 45;
      }
      native1 += "2";
   if (native1.startsWith(`${moduleu.length}`)) {
      native1 += "2";
   }
      

   for (let o = 0; o < 1; o++) {
       let iconarrowleft4 = 5;
       let orangedownarrow5 = true;
       let vipsportV = String.fromCharCode(106,95,57,95,112,105,99,116,121,112,101,0);
          let closeP = String.fromCharCode(117,110,122,105,112,95,48,95,52,55,0);
         iconarrowleft4 += (iconarrowleft4 + (orangedownarrow5 ? 2 : 3));
         closeP = `${closeP.length << (Math.min(Math.abs(2), 4))}`;
          let modulesi = false;
         iconarrowleft4 += (vipsportV == String.fromCharCode(71,0) ? vipsportV.length : iconarrowleft4);
         modulesi = !modulesi;
      if (1 == (iconarrowleft4 >> (Math.min(Math.abs(2), 2))) || orangedownarrow5) {
         orangedownarrow5 = !orangedownarrow5 || vipsportV.length >= 78;
      }
      let mappingp = 7874579 >= iconarrowleft4;
      do {
         iconarrowleft4 ^= ((orangedownarrow5 ? 1 : 3));
         if (mappingp) {
            break;
         }
      } while (((iconarrowleft4 | 2) <= 4 || 2 <= iconarrowleft4) && mappingp);
      while (iconarrowleft4 == 3) {
         iconarrowleft4 <<= Math.min(Math.abs(vipsportV.length & iconarrowleft4), 4);
         break;
      }
          let baiduH = String.fromCharCode(100,117,114,97,116,105,111,110,95,57,95,53,55,0);
          let profilet: Map<any, any> = new Map([[String.fromCharCode(112,95,50,53,95,100,101,112,97,99,107,101,116,105,122,101,114,0),509], [String.fromCharCode(115,101,97,108,97,110,116,95,120,95,49,54,0),645], [String.fromCharCode(102,95,51,51,95,100,105,115,112,115,97,98,108,101,0),189]]);
         vipsportV += `${(String.fromCharCode(65,0) == vipsportV ? vipsportV.length : profilet.size)}`;
         baiduH = `${(baiduH == String.fromCharCode(113,0) ? baiduH.length : baiduH.length)}`;
         profilet.set(baiduH, (baiduH == String.fromCharCode(106,0) ? baiduH.length : baiduH.length));
      for (let j = 0; j < 1; j++) {
          let frame_jqD: Array<any> = [288, 585, 748];
          let matchdetailbg6 = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,104,95,53,49,0);
          let humidityH = String.fromCharCode(102,114,97,109,101,112,97,99,107,95,112,95,50,56,0);
         orangedownarrow5 = !orangedownarrow5 && matchdetailbg6.length < 38;
         frame_jqD.push((String.fromCharCode(101,0) == humidityH ? frame_jqD.length : humidityH.length));
         matchdetailbg6 += "1";
      }
      while (2 >= vipsportV.length) {
         orangedownarrow5 = vipsportV.length > 97 || !orangedownarrow5;
         break;
      }
       let elementsE: Array<any> = [852, 937];
       let targetH: Array<any> = [String.fromCharCode(104,117,102,102,121,117,118,95,102,95,53,49,0), String.fromCharCode(110,95,49,55,0)];
      final_9a -= parseInt(`${teamdetailsbg9}`);
   }
       let telegramH = String.fromCharCode(109,95,57,54,95,121,111,103,97,0);
       let cornershootT: Map<any, any> = new Map([[String.fromCharCode(113,95,56,51,95,114,101,102,101,114,101,110,99,101,100,0),986], [String.fromCharCode(104,111,117,114,95,121,95,57,55,0),322], [String.fromCharCode(98,107,116,114,95,112,95,50,55,0),822]]);
          let floatingd: Map<any, any> = new Map([[String.fromCharCode(98,95,56,57,95,117,112,100,97,116,101,100,0),697], [String.fromCharCode(112,105,112,101,95,101,95,55,52,0),810]]);
          let contexte = String.fromCharCode(108,111,103,111,95,50,95,49,49,0);
          let libreactnativeblobq = 3;
         cornershootT = new Map([[`${cornershootT.size}`, (String.fromCharCode(90,0) == telegramH ? telegramH.length : cornershootT.size)]]);
         floatingd.set(contexte, floatingd.size);
         contexte += `${floatingd.size * 2}`;
         libreactnativeblobq ^= libreactnativeblobq;
         telegramH += "1";
      if (4 > (telegramH.length & cornershootT.size) || 4 > (cornershootT.size & telegramH.length)) {
          let googleL = true;
          let libtanO = false;
         cornershootT.set(`${libtanO}`, ((libtanO ? 5 : 1) % (Math.max(1, 5))));
         googleL = !googleL && googleL;
      }
      while (1 >= (cornershootT.size | 3)) {
          let cornerG = String.fromCharCode(109,95,57,50,95,98,99,100,117,105,110,116,0);
          let statsG = String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,109,95,55,49,0);
          let modea = String.fromCharCode(117,95,49,55,95,99,100,99,105,0);
          let bggradientL = String.fromCharCode(102,105,116,116,101,100,95,113,95,57,49,0);
         cornershootT = new Map([[`${cornershootT.size}`, 2]]);
         cornerG += `${bggradientL.length * modea.length}`;
         statsG += `${modea.length - 3}`;
         bggradientL += `${modea.length + bggradientL.length}`;
         break;
      }
         cornershootT = new Map([[`${cornershootT.size}`, 3 >> (Math.min(2, Math.abs(cornershootT.size)))]]);
         telegramH = `${telegramH.length}`;
      teamdetailsbg9 += cornershootT.size / 2;
      iconadslinkW = 29 == (final_9a + bridgeI);
      termsK.set(`${default_fL}`, moduleu.length | 3);
   let libreactperfloggerjniJ = xcopy_bv9 >= 5810253.0;
   do {
      xcopy_bv9 -= 1;
      if (libreactperfloggerjniJ) {
         break;
      }
   } while (((parseInt(`${xcopy_bv9}`) * native1.length) == 4) && libreactperfloggerjniJ);
       let iconarrowrightwhitey = false;
       let button9 = String.fromCharCode(119,95,54,55,95,100,114,97,103,103,97,98,108,101,0);
      while (!iconarrowrightwhitey) {
         iconarrowrightwhitey = button9.length > 9;
         break;
      }
      if (iconarrowrightwhitey || button9.length == 1) {
         button9 += `${((iconarrowrightwhitey ? 5 : 4) - 2)}`;
      }
      let assisty = iconarrowrightwhitey ? !iconarrowrightwhitey : iconarrowrightwhitey;
      do {
         iconarrowrightwhitey = button9.length > 69 && iconarrowrightwhitey;
         if (assisty) {
            break;
         }
      } while ((1 <= button9.length) && assisty);
         button9 += "2";
      if (!iconarrowrightwhitey) {
          let policy2 = String.fromCharCode(103,95,57,53,95,121,117,118,110,118,99,0);
          let launchE = String.fromCharCode(102,102,106,110,105,95,106,95,53,54,0);
          let iconviewerR: Map<any, any> = new Map([[String.fromCharCode(113,95,54,54,95,99,111,114,114,101,108,97,116,105,111,110,0),false ], [String.fromCharCode(97,115,115,101,109,98,108,121,95,116,95,52,54,0),true ], [String.fromCharCode(98,97,115,101,105,115,107,101,121,95,53,95,54,55,0),false ]]);
         button9 += `${(launchE == String.fromCharCode(116,0) ? policy2.length : launchE.length)}`;
         policy2 += `${iconviewerR.size % 1}`;
      }
          let turndownp: Map<any, any> = new Map([[String.fromCharCode(104,95,49,53,95,105,110,118,105,116,97,116,105,111,110,0),707], [String.fromCharCode(115,104,111,114,116,101,115,116,95,103,95,52,57,0),624], [String.fromCharCode(105,109,112,111,114,116,95,112,95,51,53,0),415]]);
          let n_imagem = false;
         button9 += `${((iconarrowrightwhitey ? 3 : 2) - button9.length)}`;
         turndownp = new Map([[`${turndownp.size}`, 3 + turndownp.size]]);
         n_imagem = turndownp.size < 41;
      xcopy_bv9 += 3 & parseInt(`${final_9a}`);
      setIsLocked(false);
    } else {

   while (iconadslinkW || 1 < native1.length) {
      native1 = "1";
      break;
   }
   for (let v = 0; v < 1; v++) {
      hiadz = `${parseInt(`${xcopy_bv9}`)}`;
   }
   while (native1.length > 3) {
      singleU += `${termsK.size & native1.length}`;
      break;
   }
   if ((bridgeI * final_9a) >= 2.2) {
      bridgeI += (parseInt(`${xcopy_bv9}`) % (Math.max(1, (iconadslinkW ? 5 : 1))));
   }
      teamdetailsbg9 += 2;
   while (iconadslinkW) {
      xcopy_bv9 += 3 * parseInt(`${teamdetailsbg9}`);
      break;
   }
      

   if ((bridgeI - 5) == 3 && (5 - bridgeI) == 2) {
       let orangev = 3.0;
       let activeO = true;
       let volumek: Array<any> = [String.fromCharCode(111,118,102,108,95,110,95,53,50,0), String.fromCharCode(99,104,101,99,107,115,95,56,95,50,53,0)];
       let shareblackH = 0.0;
          let combinedk = true;
         volumek.push(parseInt(`${shareblackH}`) * 3);
         combinedk = !combinedk;
       let pressureC = String.fromCharCode(99,95,51,57,95,99,111,108,111,117,114,0);
      while (2.84 > (4.1 - shareblackH) && 4.39 > (shareblackH - 4.1)) {
         shareblackH /= Math.max(parseInt(`${orangev}`) / 2, 1);
         break;
      }
      if (4.5 == shareblackH) {
          let notificationgrayo = 3.0;
          let iconnointernetA: Map<any, any> = new Map([[String.fromCharCode(106,95,54,50,95,108,111,116,115,0),String.fromCharCode(106,118,101,114,115,105,111,110,95,49,95,53,52,0)], [String.fromCharCode(101,95,50,50,95,104,100,99,100,0),String.fromCharCode(111,98,106,110,105,100,95,116,95,50,50,0)], [String.fromCharCode(100,95,50,49,95,114,101,99,117,114,115,101,0),String.fromCharCode(114,116,112,112,114,111,116,111,95,98,95,54,56,0)]]);
         orangev /= Math.max(3, parseFloat(`${volumek.length * pressureC.length}`));
         notificationgrayo -= iconnointernetA.size;
         iconnointernetA = new Map([[`${iconnointernetA.size}`, parseInt(`${notificationgrayo}`)]]);
      }
         orangev += parseFloat(`${parseInt(`${orangev}`)}`);
          let awayplayerv = 1.0;
         orangev += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${orangev}`)), 5))}`);
         awayplayerv += parseInt(`${awayplayerv}`) % (Math.max(parseInt(`${awayplayerv}`), 9));
      for (let v = 0; v < 1; v++) {
         pressureC += `${(pressureC == String.fromCharCode(100,0) ? pressureC.length : parseInt(`${shareblackH}`))}`;
      }
          let webviewA = String.fromCharCode(97,95,49,51,95,116,109,109,98,110,0);
          let release_24_ = String.fromCharCode(97,95,51,54,95,118,105,115,105,116,111,114,0);
          let network3 = 4.0;
         activeO = (webviewA.length + parseInt(`${shareblackH}`)) > 3;
         webviewA += `${3 * parseInt(`${network3}`)}`;
         release_24_ += `${parseInt(`${network3}`)}`;
      while (activeO || (orangev * 2.95) == 3.10) {
         activeO = !activeO && 33.78 <= shareblackH;
         break;
      }
      let clockP = 5691540.0 <= shareblackH;
      do {
         shareblackH -= ((activeO ? 5 : 5) ^ parseInt(`${orangev}`));
         if (clockP) {
            break;
         }
      } while (clockP && ((4.72 - shareblackH) >= 4.83 && activeO));
      if (activeO || (orangev / 5.43) >= 4.47) {
          let type_ew = String.fromCharCode(100,111,118,101,95,120,95,55,50,0);
          let shootyesgoalN = false;
          let unimplementedviewh: Array<any> = [String.fromCharCode(100,101,118,105,99,101,115,95,57,95,54,54,0), String.fromCharCode(98,95,53,95,105,109,112,111,114,116,0), String.fromCharCode(113,117,97,110,116,120,95,120,95,55,51,0)];
          let detailx = String.fromCharCode(117,116,104,111,114,95,113,95,53,0);
          let analyticS = String.fromCharCode(99,111,114,114,95,114,95,52,50,0);
         activeO = type_ew == String.fromCharCode(52,0) || volumek.length < 77;
         type_ew = `${unimplementedviewh.length % 2}`;
         shootyesgoalN = unimplementedviewh.length > detailx.length;
         detailx += `${(1 >> (Math.min(1, Math.abs((shootyesgoalN ? 3 : 1)))))}`;
         analyticS = `${((shootyesgoalN ? 5 : 4) ^ detailx.length)}`;
      }
          let suboutD = 5.0;
          let routera = String.fromCharCode(113,95,50,57,95,108,97,115,116,109,98,117,102,0);
         orangev -= (parseFloat(`${(activeO ? 5 : 1) % (Math.max(5, routera.length))}`));
         suboutD += parseFloat(`${parseInt(`${suboutD}`)}`);
         routera += "1";
      bridgeI &= parseInt(`${shareblackH}`) % (Math.max(hiadz.length, 1));
   }
      iconadslinkW = singleU.length < 63;
   for (let b = 0; b < 2; b++) {
      native1 = `${hiadz.length}`;
   }
      singleU += `${(singleU == String.fromCharCode(83,0) ? parseInt(`${xcopy_bv9}`) : singleU.length)}`;
       let launch2 = String.fromCharCode(102,117,100,103,101,95,98,95,54,48,0);
       let whitevideolive_ = String.fromCharCode(110,111,110,115,101,99,117,114,101,95,51,95,50,57,0);
      if (3 <= launch2.length || whitevideolive_ == String.fromCharCode(65,0)) {
         whitevideolive_ = `${whitevideolive_.length % (Math.max(3, launch2.length))}`;
      }
      if (launch2 != whitevideolive_) {
          let expiredp = String.fromCharCode(102,97,118,105,99,111,110,95,116,95,56,48,0);
          let iconviewer0 = false;
          let hookN = 5.0;
          let shown = String.fromCharCode(99,95,51,56,95,116,116,97,100,97,116,97,0);
          let libcrashsdkk = String.fromCharCode(100,101,115,105,103,110,95,112,95,50,56,0);
         whitevideolive_ += `${3 >> (Math.min(5, whitevideolive_.length))}`;
         expiredp = `${libcrashsdkk.length >> (Math.min(2, shown.length))}`;
         iconviewer0 = 28.1 <= hookN || shown.length <= 87;
         hookN += shown.length | 2;
         libcrashsdkk = `${shown.length}`;
      }
         whitevideolive_ += `${launch2.length >> (Math.min(4, whitevideolive_.length))}`;
      if (launch2.length >= whitevideolive_.length) {
         launch2 += `${launch2.length}`;
      }
         launch2 += `${whitevideolive_.length ^ 2}`;
      while (whitevideolive_ != String.fromCharCode(81,0)) {
         launch2 = `${whitevideolive_.length % 1}`;
         break;
      }
      iconadslinkW = 12 == termsK.size;
   if (5 < (hiadz.length * parseInt(`${xcopy_bv9}`)) && (5 & hiadz.length) < 1) {
       let formy = String.fromCharCode(107,95,49,49,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0);
       let z_animationT: Array<any> = [282, 600, 474];
       let loadingY: Array<any> = [535, 121, 468];
       let modulesO = String.fromCharCode(107,95,53,48,95,111,110,101,112,97,115,115,0);
       let watchY: Map<any, any> = new Map([[String.fromCharCode(110,111,118,101,99,95,105,95,49,52,0),337], [String.fromCharCode(118,95,57,53,95,101,113,117,97,116,97,98,108,101,0),981], [String.fromCharCode(109,112,116,111,97,110,110,101,120,98,95,50,95,51,56,0),989]]);
       let defaultfootballbgW = String.fromCharCode(117,95,53,48,95,110,101,120,116,104,111,112,0);
       let viewerB = String.fromCharCode(108,95,57,49,95,115,104,111,119,119,97,118,101,115,0);
      if (1 >= viewerB.length) {
         viewerB = "1";
      }
         viewerB = `${z_animationT.length}`;
          let livenodatabgimgh = true;
          let libhermesW = String.fromCharCode(101,115,112,111,110,100,101,114,95,48,95,55,56,0);
         defaultfootballbgW = `${defaultfootballbgW.length >> (Math.min(Math.abs(3), 3))}`;
         livenodatabgimgh = (3 < ((!livenodatabgimgh ? 3 : libhermesW.length) + libhermesW.length));
         formy += `${defaultfootballbgW.length}`;
      if (viewerB.startsWith(`${watchY.size}`)) {
         watchY = new Map([[`${z_animationT.length}`, z_animationT.length / (Math.max(5, viewerB.length))]]);
      }
      while ((2 | watchY.size) < 4 || 2 < (modulesO.length | 2)) {
          let viewsV: Array<any> = [247, 713];
         watchY.set(`${defaultfootballbgW}`, watchY.size ^ 1);
         viewsV = [viewsV.length ^ 1];
         break;
      }
      let wifirouter3 = 8256370 <= z_animationT.length;
      do {
         z_animationT = [3 - watchY.size];
         if (wifirouter3) {
            break;
         }
      } while ((1 > (defaultfootballbgW.length << (Math.min(5, z_animationT.length)))) && wifirouter3);
         defaultfootballbgW += `${loadingY.length / (Math.max(5, defaultfootballbgW.length))}`;
       let control6 = String.fromCharCode(104,95,57,53,95,115,101,116,117,112,0);
      while (3 > (modulesO.length / 2) || 5 > (watchY.size / 2)) {
          let register_zgi: Array<any> = [224, 208];
          let match_ = 2.0;
          let neonZ: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,99,104,114,111,109,97,104,111,108,100,0),true ], [String.fromCharCode(115,101,110,115,111,114,95,118,95,54,56,0),false ]]);
         watchY = new Map([[`${z_animationT.length}`, register_zgi.length | 1]]);
         register_zgi.push(neonZ.size * 1);
         match_ /= Math.max(parseFloat(`${neonZ.size}`), 4);
         break;
      }
      while (5 <= (watchY.size - viewerB.length)) {
         viewerB = `${formy.length - watchY.size}`;
         break;
      }
      if (loadingY.length < formy.length) {
          let blackM: Map<any, any> = new Map([[String.fromCharCode(112,95,52,95,97,101,118,97,108,0),false ], [String.fromCharCode(119,95,52,57,95,101,120,110,111,100,101,0),false ]]);
          let entry5 = String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,95,50,95,56,48,0);
         formy += `${loadingY.length | control6.length}`;
         blackM.set(entry5, entry5.length);
      }
      if ((2 >> (Math.min(1, defaultfootballbgW.length))) < 3 && 2 < (loadingY.length >> (Math.min(defaultfootballbgW.length, 5)))) {
          let combineC: Map<any, any> = new Map([[String.fromCharCode(103,95,49,50,95,114,111,117,110,100,117,112,0),918], [String.fromCharCode(108,97,112,110,100,122,95,106,95,55,55,0),556], [String.fromCharCode(122,95,52,48,95,99,111,110,115,117,109,97,98,108,101,0),627]]);
          let iconadslinkK = 3.0;
         defaultfootballbgW = `${loadingY.length}`;
         combineC.set(`${iconadslinkK}`, 1 & combineC.size);
         iconadslinkK *= parseFloat(`${parseInt(`${iconadslinkK}`) * 3}`);
      }
         formy = `${2 | z_animationT.length}`;
      hiadz = `${(formy == String.fromCharCode(97,0) ? parseInt(`${final_9a}`) : formy.length)}`;
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
            source={require('@static/images/userDebugMiddleware.png')}
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
            source={require('@static/images/uimanagerNewsshare.png')}
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
                              source={require('@static/images/iconnewsshareDist.gif')}
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
