import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControls from './yys_cast';
import BottomControls from './yys_invite';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/yys_matchdetailbg_iconarrowright_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/yys_smallsound';
import { yysTempnodatagifLeagueItem, yysSpinner, yysPenaltyshoot } from '@type';
import VodCombinedGesture from '../gestures/vod/yys_store_abidetect';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import { UnlockScreenSvg, ProjectSvg } from '@static';
import VodListVertical from '../vod/yys_giftbutton';
import GesturesGuide from '../gestures/vod/yys_homeloading';
import VodLiveStationListVertical from '../vod/yys_basketballplayerplaceholder';
import FastImage from '../common/yys_alert_backwhite';

type yysIconarrowrightorangeStation = {
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
  episodes?: yysSpinner
  movieList?: yysPenaltyshoot[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: yysTempnodatagifLeagueItem[],
  isFetchingRecommendedMovies?: boolean
};

type yysSigninup = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<yysSigninup, yysIconarrowrightorangeStation>(({
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
  isFetchingRecommendedMovies = false
}, ref) => {
  const { colors, spacing, textVariants, icons } = useTheme();
  const navigation = useNavigation();
  const [showSlider, setShowSlider] = useState<'none' | 'playback' | 'episodes' | 'movies' | 'streams'>('none');
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimeout = useRef(-1);
  const opacity = useSharedValue(1);
  const timeout = useRef(-1);
  const [isLocked, setIsLocked] = useState(false);
  const [showSliderThumbnail, setShowSliderThumbnail] = useState(false);

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  const hideText = () => {
       let package_c9T: Map<any, any> = new Map([[String.fromCharCode(105,95,56,54,95,100,101,105,110,118,101,114,116,0),613], [String.fromCharCode(115,117,109,109,95,119,95,49,48,0),728], [String.fromCharCode(104,95,57,52,95,101,108,101,118,97,116,101,100,0),324]]);
    let navigationX: Array<any> = [String.fromCharCode(100,95,55,51,95,114,101,102,101,114,101,110,99,101,0), String.fromCharCode(107,95,56,53,0), String.fromCharCode(117,95,52,50,95,100,98,111,111,108,104,117,102,102,0)];
    let libfilep = 5.0;
    let dropdown_ = false;
    let trophyG = String.fromCharCode(111,95,53,52,95,115,99,97,110,105,110,100,101,120,0);
    let orangeclockS: Map<any, any> = new Map([[String.fromCharCode(116,111,114,99,104,95,121,95,56,0),828], [String.fromCharCode(100,95,51,56,95,97,116,114,97,99,112,108,117,115,0),465], [String.fromCharCode(102,108,105,99,95,55,95,49,55,0),282]]);
    let sentryH = String.fromCharCode(114,101,116,114,121,97,98,108,101,95,107,95,57,0);
    let abidetectN = false;
    let iconrightorangeM = true;
    let arrowrightG = String.fromCharCode(109,97,115,107,105,110,103,95,112,95,50,53,0);
    let iconrightorangea: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,112,101,110,95,97,95,50,57,0),683], [String.fromCharCode(113,95,55,53,95,114,117,110,0),415]]);
    let constantsZ: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,112,114,105,110,116,0),469], [String.fromCharCode(119,95,55,48,95,99,111,109,112,97,114,105,115,111,110,0),863], [String.fromCharCode(113,99,101,108,112,95,115,95,54,55,0),948]]);
    let configure5: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,101,114,95,99,95,55,56,0),683], [String.fromCharCode(114,108,112,95,100,95,51,50,0),133]]);
    let dicelogoS = String.fromCharCode(114,101,115,111,108,118,101,95,115,95,54,56,0);
    let zoomf = 5;
    let defaultbasketballbgt = String.fromCharCode(117,110,109,97,112,102,105,108,101,95,107,95,49,49,0);
       let moon7: Array<any> = [755, 542, 142];
       let modeo: Map<any, any> = new Map([[String.fromCharCode(111,95,56,56,95,112,115,101,117,100,111,0),563], [String.fromCharCode(115,117,98,112,97,116,104,115,95,103,95,50,48,0),486], [String.fromCharCode(115,116,114,101,101,116,95,121,95,51,0),306]]);
       let mime7 = 3;
       let package_4xd = 1;
      for (let m = 0; m < 1; m++) {
         mime7 <<= Math.min(Math.abs(mime7 % (Math.max(modeo.size, 6))), 3);
      }
      while ((package_4xd * 1) == 2 && (1 * moon7.length) == 2) {
         moon7.push(moon7.length);
         break;
      }
         mime7 ^= package_4xd % 2;
      for (let t = 0; t < 2; t++) {
         modeo.set(`${moon7.length}`, moon7.length + modeo.size);
      }
       let b_lock1 = String.fromCharCode(103,95,54,55,95,109,115,118,105,100,101,111,0);
       let popupg = String.fromCharCode(109,101,109,109,101,116,104,111,100,115,95,119,95,48,0);
      orangeclockS = new Map([[`${iconrightorangea.size}`, iconrightorangea.size + 3]]);
   for (let d = 0; d < 2; d++) {
       let weather0: Map<any, any> = new Map([[String.fromCharCode(111,95,54,51,95,115,101,115,115,111,110,0),143], [String.fromCharCode(114,95,52,51,95,97,99,116,117,97,108,105,122,101,100,0),877]]);
       let iconbelli = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,107,95,52,56,0);
      for (let y = 0; y < 2; y++) {
         iconbelli += `${weather0.size / (Math.max(iconbelli.length, 10))}`;
      }
       let statsS = true;
       let logouserh = true;
         logouserh = (85 > ((statsS ? iconbelli.length : 85) & iconbelli.length));
       let delegate_z0 = 4;
       let footballfielda = 2;
          let backgroundj = 1.0;
          let iconclosewhitewithbg1 = String.fromCharCode(112,110,105,101,108,115,95,105,95,51,49,0);
         weather0.set(`${backgroundj}`, weather0.size >> (Math.min(Math.abs(2), 1)));
         backgroundj += 2;
         iconclosewhitewithbg1 = `${iconclosewhitewithbg1.length * iconclosewhitewithbg1.length}`;
         delegate_z0 >>= Math.min(Math.abs(weather0.size), 3);
      arrowrightG = `${sentryH.length}`;
   }
      trophyG = `${((dropdown_ ? 2 : 3) % (Math.max(iconrightorangea.size, 6)))}`;
      libfilep += (parseFloat(`${(iconrightorangeM ? 2 : 5) << (Math.min(Math.abs(parseInt(`${libfilep}`)), 4))}`));
   while (!Array.from(iconrightorangea.values()).includes(constantsZ.size)) {
       let linkG = String.fromCharCode(118,95,51,53,95,107,102,119,114,105,116,101,0);
       let match_: Array<any> = [863, 14];
       let whitep: Array<any> = [410, 886, 33];
       let wifirouterF = true;
      for (let z = 0; z < 1; z++) {
         match_ = [((wifirouterF ? 5 : 3) & whitep.length)];
      }
      for (let d = 0; d < 1; d++) {
         match_.push(match_.length);
      }
         whitep = [1];
      for (let h = 0; h < 3; h++) {
         wifirouterF = 30 < match_.length;
      }
         match_ = [3];
      for (let p = 0; p < 3; p++) {
          let shrinki = String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,107,95,56,51,0);
          let profilepicM: Map<any, any> = new Map([[String.fromCharCode(110,95,48,95,102,114,101,113,0),871], [String.fromCharCode(109,97,115,107,101,100,99,108,97,109,112,95,104,95,49,55,0),630], [String.fromCharCode(121,95,50,54,95,102,97,117,108,116,0),633]]);
          let logoW = String.fromCharCode(109,100,97,121,95,98,95,56,0);
         match_.push(linkG.length);
         shrinki = "3";
         profilepicM.set(logoW, profilepicM.size);
         logoW += `${shrinki.length}`;
      }
      while ((3 >> (Math.min(2, whitep.length))) > 2 || wifirouterF) {
         wifirouterF = match_.length == 20 || !wifirouterF;
         break;
      }
         whitep = [(String.fromCharCode(67,0) == linkG ? (wifirouterF ? 1 : 2) : linkG.length)];
          let playj = String.fromCharCode(107,95,49,56,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0);
         whitep = [match_.length];
         playj = `${playj.length}`;
      for (let v = 0; v < 3; v++) {
         wifirouterF = ((match_.length | (!wifirouterF ? 37 : match_.length)) > 37);
      }
      while (whitep.length <= 4) {
          let libavutils: Array<any> = [391, 9];
          let manifestL = false;
          let fileq = String.fromCharCode(115,116,111,114,121,98,111,97,114,100,95,56,95,51,51,0);
          let catagoryT = String.fromCharCode(98,101,104,105,110,100,95,51,95,52,50,0);
         whitep = [(catagoryT == String.fromCharCode(51,0) ? catagoryT.length : libavutils.length)];
         libavutils = [(fileq == String.fromCharCode(76,0) ? (manifestL ? 3 : 1) : fileq.length)];
         manifestL = !manifestL;
         break;
      }
       let coreL = 0.0;
      iconrightorangea.set(`${wifirouterF}`, orangeclockS.size | 2);
      break;
   }
   let liveendmodallogok = abidetectN ? !abidetectN : abidetectN;
   do {
       let iconviewergif2 = 2;
       let mbsplashb = String.fromCharCode(119,95,57,95,99,111,108,108,101,99,116,111,114,0);
       let predictionE = String.fromCharCode(120,95,53,55,95,109,97,120,98,105,116,114,97,116,101,0);
      let hooke = iconviewergif2 >= 5938289;
      do {
          let sideb = 4.0;
          let iconnointernet9 = String.fromCharCode(111,108,111,114,95,118,95,50,0);
          let animationsT: Array<any> = [989, 184, 922];
         iconviewergif2 ^= animationsT.length;
         sideb += 3 & parseInt(`${sideb}`);
         iconnointernet9 += `${iconnointernet9.length}`;
         animationsT.push(2 << (Math.min(1, iconnointernet9.length)));
         if (hooke) {
            break;
         }
      } while (hooke && (mbsplashb.startsWith(`${iconviewergif2}`)));
         mbsplashb = `${predictionE.length << (Math.min(Math.abs(3), 4))}`;
         predictionE += `${iconviewergif2 & 1}`;
       let emojiE = 4;
       let orangedownarrowH = 2;
      if ((orangedownarrowH | iconviewergif2) > 3) {
          let showc: Array<any> = [614, 311, 213];
          let predictiondefaultp = String.fromCharCode(115,105,116,101,95,106,95,52,0);
         orangedownarrowH &= orangedownarrowH;
         showc = [1];
         predictiondefaultp = `${predictiondefaultp.length}`;
      }
       let megaphoneZ = String.fromCharCode(109,97,116,114,105,99,101,115,95,120,95,54,49,0);
       let activeK = String.fromCharCode(98,95,52,49,95,114,105,110,103,105,110,103,0);
         orangedownarrowH += 3;
          let iconcloseM = String.fromCharCode(106,95,49,95,116,114,101,97,116,0);
         megaphoneZ += `${mbsplashb.length}`;
         iconcloseM += `${iconcloseM.length}`;
         activeK += `${iconviewergif2}`;
      abidetectN = 61 > orangeclockS.size;
      if (liveendmodallogok) {
         break;
      }
   } while ((!abidetectN) && liveendmodallogok);
       let bingi = 1.0;
      if (4.98 >= (bingi - bingi) && (4.98 - bingi) >= 4.67) {
         bingi /= Math.max(parseFloat(`${3}`), 3);
      }
          let math5: Map<any, any> = new Map([[String.fromCharCode(115,117,98,110,111,100,101,95,55,95,55,50,0),406], [String.fromCharCode(101,95,49,53,95,117,97,100,100,0),569]]);
          let orangey = String.fromCharCode(122,95,53,53,95,119,114,111,110,103,0);
          let orangeclockK = 3.0;
         bingi -= parseFloat(`${math5.size}`);
         math5.set(`${orangeclockK}`, parseInt(`${orangeclockK}`));
         orangey = `${orangey.length - 1}`;
         bingi /= Math.max(parseFloat(`${parseInt(`${bingi}`)}`), 2);
      trophyG += `${package_c9T.size * constantsZ.size}`;
      dropdown_ = 22 < constantsZ.size;
   if (!dropdown_) {
      dropdown_ = 1 < sentryH.length;
   }
   if (5.13 <= (libfilep * parseFloat(`${trophyG.length}`)) || (5 ^ trophyG.length) <= 4) {
      trophyG += `${trophyG.length}`;
   }
   for (let k = 0; k < 2; k++) {
      trophyG = "1";
   }
   for (let q = 0; q < 2; q++) {
      trophyG = `${1 + parseInt(`${libfilep}`)}`;
   }
       let libavfilter9 = 2;
       let reactnativeultimatelistviewU = 0.0;
       let iconuserX: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,112,114,111,116,111,99,111,108,0),false ], [String.fromCharCode(117,110,97,114,99,104,105,118,101,100,95,49,95,52,48,0),false ]]);
      for (let w = 0; w < 2; w++) {
         reactnativeultimatelistviewU *= libavfilter9 | 1;
      }
      if ((libavfilter9 + 4) == 1 && 4 == (libavfilter9 + iconuserX.size)) {
         libavfilter9 %= Math.max(iconuserX.size, 1);
      }
       let miniV: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,48,95,98,114,111,119,115,101,0),30], [String.fromCharCode(121,95,53,55,95,108,109,108,109,0),469], [String.fromCharCode(115,105,108,101,110,116,95,115,95,49,50,0),541]]);
       let chartD: Map<any, any> = new Map([[String.fromCharCode(118,95,54,50,95,122,97,108,108,111,99,0),619], [String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,52,95,51,52,0),321], [String.fromCharCode(110,119,105,115,101,95,115,95,57,54,0),942]]);
         reactnativeultimatelistviewU *= chartD.size;
          let libjsinspectorI = String.fromCharCode(99,95,48,95,116,104,114,111,116,116,108,101,114,0);
         chartD = new Map([[`${miniV.size}`, chartD.size % 3]]);
         libjsinspectorI = `${libjsinspectorI.length}`;
       let predictionactivek = String.fromCharCode(121,117,118,112,108,97,110,101,95,113,95,53,49,0);
       let textlayoutmanagerb = String.fromCharCode(107,95,55,50,95,101,120,116,101,110,116,0);
          let long_tD: Array<any> = [503, 798, 76];
          let anythinkI = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,51,95,49,52,0);
          let googley = String.fromCharCode(97,100,118,97,110,99,101,100,95,53,95,53,49,0);
         iconuserX.set(`${long_tD.length}`, miniV.size / (Math.max(1, 8)));
         long_tD = [(googley == String.fromCharCode(48,0) ? googley.length : anythinkI.length)];
         anythinkI = `${googley.length}`;
         chartD.set(`${reactnativeultimatelistviewU}`, predictionactivek.length);
       let descP = 3;
       let episodesa = 5;
      abidetectN = iconrightorangea.size > 29;
   while (5 < (iconrightorangea.size | package_c9T.size) && (package_c9T.size | iconrightorangea.size) < 5) {
      package_c9T.set(trophyG, trophyG.length);
      break;
   }
   let eventU = dropdown_ ? !dropdown_ : dropdown_;
   do {
      dropdown_ = package_c9T.size < 11 && 11 < sentryH.length;
      if (eventU) {
         break;
      }
   } while (eventU && (dropdown_ && trophyG.length == 2));
      abidetectN = !abidetectN;
      orangeclockS.set(`${iconrightorangea.size}`, constantsZ.size - 3);
   if ((arrowrightG.length / (Math.max(7, navigationX.length))) <= 4) {
      navigationX = [trophyG.length ^ 2];
   }
   if (Array.from(package_c9T.keys()).includes(`${libfilep}`)) {
      libfilep -= parseFloat(`${trophyG.length ^ arrowrightG.length}`);
   }
   let libfabricjniR = 8904548 >= navigationX.length;
   do {
       let fillU = String.fromCharCode(111,95,55,56,95,115,104,97,114,101,115,0);
       let telegramg: Array<any> = [6, 489];
       let middlesoundF = String.fromCharCode(102,101,97,116,117,114,101,115,95,105,95,50,51,0);
         telegramg = [1];
      if (3 >= telegramg.length) {
         fillU += `${(String.fromCharCode(73,0) == fillU ? fillU.length : telegramg.length)}`;
      }
         telegramg = [(String.fromCharCode(121,0) == middlesoundF ? middlesoundF.length : telegramg.length)];
       let fileb = false;
      for (let w = 0; w < 2; w++) {
         telegramg.push((fillU == String.fromCharCode(56,0) ? fillU.length : (fileb ? 5 : 5)));
      }
      let activityr = String.fromCharCode(119,52,117,98,50,117,97,114,50,107,0) == middlesoundF;
      do {
         middlesoundF = `${fillU.length >> (Math.min(Math.abs(3), 4))}`;
         if (activityr) {
            break;
         }
      } while (((telegramg.length ^ middlesoundF.length) < 4 && (4 ^ middlesoundF.length) < 1) && activityr);
      let libapminsightaN = 5920821 >= telegramg.length;
      do {
          let questN = 0.0;
          let rncoreN = true;
          let yellowcirclebgz = String.fromCharCode(104,111,116,111,95,111,95,56,0);
          let schedulerW = true;
         telegramg = [(String.fromCharCode(95,0) == middlesoundF ? parseInt(`${questN}`) : middlesoundF.length)];
         questN /= Math.max(1, (parseFloat(`${(rncoreN ? 5 : 3)}`)));
         rncoreN = (((!rncoreN ? yellowcirclebgz.length : 50) << (Math.min(yellowcirclebgz.length, 2))) <= 50);
         schedulerW = rncoreN;
         if (libapminsightaN) {
            break;
         }
      } while (((3 + telegramg.length) <= 1 && 3 <= (telegramg.length + middlesoundF.length)) && libapminsightaN);
         fileb = (((fileb ? fillU.length : 24) | fillU.length) <= 24);
          let sourceY: Array<any> = [643, 816];
          let c_title4 = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,99,95,57,55,0);
         middlesoundF = `${1 / (Math.max(8, c_title4.length))}`;
         sourceY.push(1);
         c_title4 += `${1 - sourceY.length}`;
      navigationX.push(1 >> (Math.min(1, sentryH.length)));
      if (libfabricjniR) {
         break;
      }
   } while ((5 >= arrowrightG.length) && libfabricjniR);
   if (dropdown_) {
       let kuaishou8 = 2.0;
      if (5.60 > kuaishou8) {
         kuaishou8 += 1;
      }
         kuaishou8 += parseInt(`${kuaishou8}`);
         kuaishou8 -= parseInt(`${kuaishou8}`);
      dropdown_ = constantsZ.size == 86 && kuaishou8 == 22.13;
   }
       let basketball4 = false;
       let philippinesJ: Array<any> = [634, 42, 71];
      while (basketball4) {
         basketball4 = (35 < (philippinesJ.length >> (Math.min(2, Math.abs((basketball4 ? philippinesJ.length : 35))))));
         break;
      }
         philippinesJ.push(((basketball4 ? 1 : 1) / (Math.max(philippinesJ.length, 3))));
      for (let s = 0; s < 3; s++) {
         basketball4 = philippinesJ.length <= 16;
      }
         basketball4 = philippinesJ.includes(basketball4);
         philippinesJ = [philippinesJ.length];
         philippinesJ = [philippinesJ.length << (Math.min(Math.abs(2), 1))];
      iconrightorangeM = trophyG.length == 24;
      libfilep *= parseFloat(`${orangeclockS.size}`);
   let mbbid9 = abidetectN ? !abidetectN : abidetectN;
   do {
      abidetectN = 56 <= constantsZ.size && String.fromCharCode(88,0) == arrowrightG;
      if (mbbid9) {
         break;
      }
   } while ((3.100 < libfilep && 5.43 < (libfilep - 3.100)) && mbbid9);
       let livenodatabgimg8 = 5.0;
       let java4 = String.fromCharCode(115,95,56,50,95,109,112,99,104,117,102,102,0);
       let qaagu = 3.0;
      let promotionP = java4.length <= 9157856;
      do {
         java4 = "3";
         if (promotionP) {
            break;
         }
      } while ((qaagu <= 2.17) && promotionP);
      while ((livenodatabgimg8 / (Math.max(qaagu, 4))) <= 5.88 && 3.97 <= (livenodatabgimg8 / (Math.max(5.88, 1)))) {
         qaagu /= Math.max(3, (String.fromCharCode(84,0) == java4 ? java4.length : parseInt(`${qaagu}`)));
         break;
      }
         qaagu -= 2;
          let gifgoald = String.fromCharCode(98,95,56,56,95,108,97,98,101,108,0);
         qaagu *= parseInt(`${qaagu}`) << (Math.min(Math.abs(2), 5));
         gifgoald = `${gifgoald.length}`;
      if (2 <= (3 | java4.length)) {
         qaagu *= parseInt(`${qaagu}`) | 2;
      }
       let libbuffer_ = 1.0;
       let iconarrowrightwhite8 = 1.0;
          let downloaderv = String.fromCharCode(115,116,100,111,117,116,95,120,95,57,0);
         livenodatabgimg8 *= parseInt(`${qaagu}`);
         downloaderv += `${downloaderv.length % (Math.max(1, 6))}`;
         java4 += `${parseInt(`${libbuffer_}`)}`;
      for (let p = 0; p < 2; p++) {
         livenodatabgimg8 += 1;
      }
      abidetectN = 79 <= configure5.size;

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
       let gmail2 = String.fromCharCode(117,115,97,98,108,101,95,109,95,52,57,0);
    let iconbackwhitev = 1;
    let detailB = String.fromCharCode(116,95,49,49,95,119,97,115,116,101,100,0);
    let modity8 = 0.0;
    let halffieldimageY: Array<any> = [453, 235, 917];
    let whitetickf = 5.0;
    let upgradep = 2.0;
    let statisticsX = 3;
    let libswresampleN = true;
    let moviesI = String.fromCharCode(99,111,117,110,116,114,105,101,115,95,105,95,50,53,0);
    let questL = String.fromCharCode(116,95,54,57,95,112,114,101,115,101,110,116,97,116,105,111,110,0);
    let pagination8 = String.fromCharCode(109,97,114,107,100,111,119,110,95,116,95,50,52,0);
    let knewsshare3 = String.fromCharCode(105,115,109,108,95,101,95,56,51,0);
    let yellowanimationliveJ = 5.0;
    let headerU = String.fromCharCode(97,95,51,53,95,107,101,121,102,114,97,109,101,0);
   while (whitetickf == 5.85) {
       let analyticsv = String.fromCharCode(112,95,57,56,95,99,109,111,118,101,0);
       let middlesoundd = String.fromCharCode(102,117,110,103,105,98,108,101,115,95,50,95,49,56,0);
       let statsnomoredata3 = String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,106,95,55,52,0);
       let libfollyg = String.fromCharCode(115,99,104,101,100,95,114,95,51,55,0);
       let largei = 4.0;
          let dplusS = false;
         largei *= parseFloat(`${parseInt(`${largei}`) | libfollyg.length}`);
         dplusS = !dplusS || !dplusS;
      if (4 >= (2 - statsnomoredata3.length) && (parseFloat(`${statsnomoredata3.length}`) + largei) >= 2.49) {
         statsnomoredata3 = `${libfollyg.length - middlesoundd.length}`;
      }
      while (4 >= (parseInt(`${largei}`) / (Math.max(libfollyg.length, 5)))) {
          let positionfieldP: Array<any> = [String.fromCharCode(110,95,54,95,110,111,108,111,99,107,0), String.fromCharCode(102,95,50,50,95,103,101,116,99,117,116,0)];
          let libreactnativeblobO: Array<any> = [200, 755];
          let middlesoundR: Map<any, any> = new Map([[String.fromCharCode(105,108,115,116,95,116,95,52,57,0),271], [String.fromCharCode(117,95,49,55,95,108,97,116,116,105,99,101,0),651], [String.fromCharCode(105,110,116,102,105,95,56,95,49,55,0),414]]);
         largei -= parseFloat(`${3 * middlesoundR.size}`);
         positionfieldP = [libreactnativeblobO.length];
         libreactnativeblobO = [libreactnativeblobO.length];
         middlesoundR = new Map([[`${positionfieldP.length}`, 3]]);
         break;
      }
      if ((libfollyg.length + parseInt(`${largei}`)) >= 2 || 3 >= (libfollyg.length + 2)) {
         largei += (parseFloat(`${String.fromCharCode(54,0) == libfollyg ? parseInt(`${largei}`) : libfollyg.length}`));
      }
      while (!analyticsv.endsWith(`${middlesoundd.length}`)) {
          let info7 = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,106,95,55,55,0);
          let modalp = 1.0;
          let suggestionL: Map<any, any> = new Map([[String.fromCharCode(117,95,54,56,95,116,111,107,101,104,0),String.fromCharCode(121,95,50,48,95,105,102,111,114,119,97,114,100,0)], [String.fromCharCode(117,95,52,95,97,115,115,105,103,110,109,101,110,116,0),String.fromCharCode(99,95,57,49,95,101,110,103,108,105,115,104,0)]]);
          let gpayC = String.fromCharCode(109,95,51,51,95,99,108,101,97,114,115,0);
         analyticsv = `${(statsnomoredata3 == String.fromCharCode(52,0) ? parseInt(`${modalp}`) : statsnomoredata3.length)}`;
         info7 = `${suggestionL.size % 1}`;
         modalp += suggestionL.size % (Math.max(gpayC.length, 4));
         gpayC = "1";
         break;
      }
      for (let v = 0; v < 2; v++) {
         largei -= parseFloat(`${1}`);
      }
      if (statsnomoredata3.length < libfollyg.length) {
         libfollyg += `${parseInt(`${largei}`) >> (Math.min(Math.abs(3), 5))}`;
      }
         middlesoundd += `${(libfollyg == String.fromCharCode(97,0) ? middlesoundd.length : libfollyg.length)}`;
         statsnomoredata3 += `${analyticsv.length}`;
      let applei = libfollyg == String.fromCharCode(103,48,118,56,52,99,56,117,0);
      do {
         libfollyg += `${middlesoundd.length}`;
         if (applei) {
            break;
         }
      } while ((!statsnomoredata3.startsWith(`${libfollyg.length}`)) && applei);
      for (let g = 0; g < 2; g++) {
         libfollyg = `${3 << (Math.min(2, libfollyg.length))}`;
      }
      while (statsnomoredata3 != middlesoundd) {
          let iconcalendarZ = String.fromCharCode(99,95,53,49,95,104,119,117,112,108,111,97,100,0);
          let animationsT = String.fromCharCode(97,95,50,52,95,103,108,121,112,104,0);
          let latns: Map<any, any> = new Map([[String.fromCharCode(109,95,49,57,95,100,117,112,99,108,0),String.fromCharCode(111,95,49,51,95,100,100,114,97,110,103,101,0)], [String.fromCharCode(99,111,110,116,101,110,116,115,95,53,95,53,56,0),String.fromCharCode(119,95,55,48,95,104,105,101,114,0)], [String.fromCharCode(114,101,102,105,110,101,114,95,104,95,54,50,0),String.fromCharCode(108,111,119,101,114,95,109,95,53,49,0)]]);
          let encrypt5 = String.fromCharCode(104,101,120,98,105,110,95,104,95,50,49,0);
         middlesoundd = `${iconcalendarZ.length / (Math.max(1, 7))}`;
         iconcalendarZ += `${1 & animationsT.length}`;
         animationsT += "1";
         latns.set(encrypt5, latns.size << (Math.min(Math.abs(2), 1)));
         encrypt5 += `${latns.size}`;
         break;
      }
      while (3 < (5 + libfollyg.length)) {
          let reactnativeratingsb = false;
          let tempnodatagifC = String.fromCharCode(98,97,99,107,119,97,114,100,95,111,95,54,54,0);
          let regengF = String.fromCharCode(99,111,110,102,108,105,99,116,95,101,95,54,0);
         libfollyg += `${regengF.length}`;
         reactnativeratingsb = (((reactnativeratingsb ? 87 : tempnodatagifC.length) - tempnodatagifC.length) >= 87);
         regengF = `${((reactnativeratingsb ? 3 : 4) / (Math.max(1, tempnodatagifC.length)))}`;
         break;
      }
      if ((statsnomoredata3.length - parseInt(`${largei}`)) >= 2 && 2 >= (parseInt(`${largei}`) - statsnomoredata3.length)) {
          let securityE = String.fromCharCode(102,95,51,95,97,114,101,110,97,115,0);
          let yellowtoredd = false;
          let whatsapp1 = true;
          let filledl: Array<any> = [868, 913];
         statsnomoredata3 += `${middlesoundd.length | statsnomoredata3.length}`;
         securityE = `${filledl.length}`;
         yellowtoredd = whatsapp1 || securityE.length > 89;
         filledl = [filledl.length - 3];
      }
      if (1 <= statsnomoredata3.length) {
         libfollyg = `${1 ^ statsnomoredata3.length}`;
      }
      modity8 += gmail2.length * 3;
      break;
   }
       let invitef = String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,50,95,51,55,0);
      if (invitef.length <= invitef.length) {
         invitef += `${invitef.length >> (Math.min(2, invitef.length))}`;
      }
         invitef += `${invitef.length % 3}`;
      let icondownimgC = String.fromCharCode(117,101,95,56,101,0) == invitef;
      do {
         invitef += `${invitef.length}`;
         if (icondownimgC) {
            break;
         }
      } while (icondownimgC && (invitef != String.fromCharCode(100,0)));
      modity8 += 2 / (Math.max(iconbackwhitev, 8));
       let applicationY = 2.0;
         applicationY -= parseFloat(`${parseInt(`${applicationY}`) << (Math.min(4, Math.abs(parseInt(`${applicationY}`))))}`);
      while ((applicationY / 5.42) > 5.53) {
          let middlebrightnessf = 2.0;
          let libreactnativeblob7 = String.fromCharCode(110,97,118,95,102,95,50,52,0);
          let renew7 = String.fromCharCode(113,95,57,54,95,104,97,110,103,0);
          let brightnessU: Map<any, any> = new Map([[String.fromCharCode(112,95,49,53,95,116,109,112,108,0),37], [String.fromCharCode(117,95,54,95,114,102,112,115,0),347], [String.fromCharCode(103,95,57,48,95,99,104,97,105,110,115,0),718]]);
         applicationY += parseFloat(`${renew7.length * 3}`);
         middlebrightnessf /= Math.max(brightnessU.size, 2);
         libreactnativeblob7 = `${(String.fromCharCode(84,0) == libreactnativeblob7 ? parseInt(`${middlebrightnessf}`) : libreactnativeblob7.length)}`;
         renew7 += `${libreactnativeblob7.length ^ 1}`;
         brightnessU = new Map([[libreactnativeblob7, 3 | parseInt(`${middlebrightnessf}`)]]);
         break;
      }
      if (applicationY >= applicationY) {
         applicationY -= parseFloat(`${parseInt(`${applicationY}`)}`);
      }
      moviesI = `${questL.length}`;
   for (let u = 0; u < 3; u++) {
       let circlei = 0.0;
          let commentz = 2.0;
          let memberi: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,110,97,109,101,95,111,95,55,52,0),282], [String.fromCharCode(115,110,97,112,112,121,95,56,95,56,56,0),606]]);
         circlei -= parseFloat(`${parseInt(`${commentz}`)}`);
         commentz *= memberi.size;
         memberi.set(`${memberi.size}`, memberi.size);
         circlei /= Math.max(parseFloat(`${parseInt(`${circlei}`) / (Math.max(2, parseInt(`${circlei}`)))}`), 2);
       let episodeh: Array<any> = [String.fromCharCode(111,112,116,105,109,105,122,101,95,57,95,50,51,0), String.fromCharCode(115,101,108,101,99,116,97,98,108,101,95,49,95,53,52,0)];
      questL += `${gmail2.length - iconbackwhitev}`;
   }
       let guideU = String.fromCharCode(117,95,54,95,99,108,105,99,107,0);
       let clockJ = String.fromCharCode(98,95,56,51,95,114,116,97,100,100,114,115,0);
       let statisticsactivej = String.fromCharCode(109,111,110,103,111,95,106,95,57,56,0);
       let reactE = String.fromCharCode(115,116,101,110,99,105,108,95,50,95,57,49,0);
       let mailL = String.fromCharCode(115,111,108,118,101,100,95,110,95,50,55,0);
          let q_hash3 = 2.0;
          let banner9 = String.fromCharCode(108,95,49,48,48,95,117,110,104,105,103,104,108,105,103,104,116,0);
         mailL += `${guideU.length * parseInt(`${q_hash3}`)}`;
         q_hash3 += (banner9 == String.fromCharCode(78,0) ? banner9.length : banner9.length);
         clockJ += `${(String.fromCharCode(86,0) == mailL ? mailL.length : statisticsactivej.length)}`;
      if (clockJ == String.fromCharCode(81,0) && guideU != String.fromCharCode(81,0)) {
         clockJ = `${(guideU == String.fromCharCode(73,0) ? guideU.length : clockJ.length)}`;
      }
          let closec = 2.0;
          let alert2: Array<any> = [String.fromCharCode(98,95,54,54,95,116,114,117,115,116,0), String.fromCharCode(111,95,52,48,95,99,111,114,114,101,99,116,101,100,0)];
          let gifgoalbgY = 0.0;
         statisticsactivej = "2";
         closec /= Math.max(2, parseFloat(`${1 * parseInt(`${gifgoalbgY}`)}`));
         alert2 = [alert2.length];
         gifgoalbgY /= Math.max(5, 2);
       let encryptorp = String.fromCharCode(97,118,103,98,108,117,114,95,53,95,50,53,0);
       let chatroombackground6 = String.fromCharCode(97,99,114,111,110,121,109,115,95,109,95,55,55,0);
      while (!mailL.startsWith(clockJ)) {
          let notificationb: Map<any, any> = new Map([[String.fromCharCode(114,95,55,49,95,115,117,98,101,120,112,114,0),924], [String.fromCharCode(117,110,107,110,111,119,110,95,118,95,57,53,0),865], [String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,108,95,51,0),985]]);
          let scores = 0;
          let statisticsactive2 = 1.0;
          let e_hashH = String.fromCharCode(102,95,56,56,95,105,110,116,114,97,102,114,97,109,101,0);
          let unreadi = 2.0;
         clockJ = `${chatroombackground6.length / (Math.max(10, parseInt(`${statisticsactive2}`)))}`;
         notificationb.set(`${unreadi}`, 2);
         scores |= parseInt(`${unreadi}`) << (Math.min(1, Math.abs(1)));
         statisticsactive2 += (String.fromCharCode(80,0) == e_hashH ? e_hashH.length : scores);
         break;
      }
      for (let z = 0; z < 1; z++) {
         reactE = `${clockJ.length}`;
      }
      let libavfilterQ = 9084169 <= mailL.length;
      do {
          let watchnowbgF = String.fromCharCode(122,95,53,57,95,117,110,105,109,112,108,101,109,101,110,116,101,100,0);
          let mbnativeG = String.fromCharCode(105,95,55,54,95,115,117,98,112,97,121,108,111,97,100,0);
          let expired0 = 5.0;
          let iconviewergif5: Array<any> = [441, 425, 724];
          let termsn = 5.0;
         mailL = "3";
         watchnowbgF += `${3 ^ watchnowbgF.length}`;
         mbnativeG += `${parseInt(`${expired0}`)}`;
         expired0 += (String.fromCharCode(66,0) == mbnativeG ? mbnativeG.length : watchnowbgF.length);
         iconviewergif5 = [iconviewergif5.length];
         termsn *= parseInt(`${termsn}`) >> (Math.min(watchnowbgF.length, 3));
         if (libavfilterQ) {
            break;
         }
      } while ((clockJ.length < mailL.length) && libavfilterQ);
      modity8 /= Math.max((gmail2 == String.fromCharCode(51,0) ? gmail2.length : parseInt(`${whitetickf}`)), 5);
   let flipperF = 6681406.0 <= modity8;
   do {
       let predictiondefault2 = String.fromCharCode(115,116,117,98,95,48,95,51,56,0);
      while (predictiondefault2.length >= 3) {
          let blackb = 1;
          let scoreu = String.fromCharCode(112,114,111,104,105,98,105,116,95,111,95,49,50,0);
          let navigationq = true;
          let langkeyk = String.fromCharCode(101,95,54,53,95,100,111,97,108,108,0);
         predictiondefault2 = "2";
         blackb |= 1;
         scoreu += `${blackb}`;
         navigationq = scoreu.length == blackb;
         langkeyk += `${scoreu.length % 1}`;
         break;
      }
          let libfollyi = String.fromCharCode(98,97,99,107,119,97,114,100,95,100,95,57,49,0);
          let containerp: Array<any> = [4, 996, 902];
          let xvodx = String.fromCharCode(119,95,52,95,112,114,101,108,111,97,100,105,110,103,0);
         predictiondefault2 += `${(libfollyi == String.fromCharCode(69,0) ? containerp.length : libfollyi.length)}`;
         containerp.push(xvodx.length & xvodx.length);
         predictiondefault2 = `${(predictiondefault2 == String.fromCharCode(89,0) ? predictiondefault2.length : predictiondefault2.length)}`;
      modity8 /= Math.max(1 - parseInt(`${whitetickf}`), 3);
      if (flipperF) {
         break;
      }
   } while (flipperF && ((knewsshare3.length + 5) <= 1 && 2.34 <= (modity8 + knewsshare3.length)));
       let playlistB = String.fromCharCode(111,95,53,95,115,121,115,105,110,102,111,0);
          let loadingspinnerv = 1.0;
         playlistB = "2";
         loadingspinnerv /= Math.max(parseFloat(`${parseInt(`${loadingspinnerv}`)}`), 1);
      for (let j = 0; j < 2; j++) {
         playlistB = `${playlistB.length}`;
      }
       let shielddoneK = true;
      libswresampleN = 59 >= pagination8.length;
   if (3 <= (iconbackwhitev & 3) && (iconbackwhitev & 3) <= 1) {
      iconbackwhitev *= 3;
   }
       let bgvipsporta = String.fromCharCode(115,99,114,117,98,98,101,114,95,102,95,56,54,0);
          let pressure6 = String.fromCharCode(99,95,57,48,95,115,116,117,110,0);
          let commoni = String.fromCharCode(100,95,56,56,95,118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0);
         bgvipsporta += `${1 % (Math.max(9, bgvipsporta.length))}`;
         pressure6 += `${pressure6.length << (Math.min(Math.abs(2), 2))}`;
         commoni = `${1 >> (Math.min(2, commoni.length))}`;
       let acceptedk: Array<any> = [759, 411, 584];
       let crownx: Array<any> = [29, 575];
         bgvipsporta += `${acceptedk.length}`;
      questL = `${iconbackwhitev | 2}`;
      moviesI = `${knewsshare3.length}`;
   while (2 == (3 - halffieldimageY.length) || 3 == (halffieldimageY.length - 3)) {
       let kuaishou1 = 2;
       let searchbarD = String.fromCharCode(103,95,53,95,110,97,118,105,0);
          let binddatasJ = String.fromCharCode(104,121,98,114,105,100,95,104,95,52,52,0);
         kuaishou1 /= Math.max(4, kuaishou1);
         binddatasJ += `${binddatasJ.length}`;
         searchbarD = `${2 >> (Math.min(5, searchbarD.length))}`;
       let audiencea = 2.0;
       let iconbackwhiteo = 0.0;
      if (2 == (kuaishou1 | 5) || (5 | kuaishou1) == 4) {
         kuaishou1 >>= Math.min(2, Math.abs(parseInt(`${audiencea}`)));
      }
          let indicatorJ = 3.0;
          let livenodatabgimgV = 2.0;
          let iconlogoutp = 5.0;
         kuaishou1 &= 2;
         indicatorJ += parseInt(`${iconlogoutp}`);
         livenodatabgimgV /= Math.max(1, parseFloat(`${parseInt(`${indicatorJ}`)}`));
         iconlogoutp *= parseFloat(`${parseInt(`${livenodatabgimgV}`) * 3}`);
         audiencea /= Math.max(2 * searchbarD.length, 1);
      halffieldimageY.push(((libswresampleN ? 4 : 3) - 1));
      break;
   }
   while ((upgradep + iconbackwhitev) == 3.19) {
       let yellowvideolivet = 0.0;
       let animationI = String.fromCharCode(115,111,114,116,95,100,95,55,55,0);
         animationI = `${1 ^ parseInt(`${yellowvideolivet}`)}`;
      if (animationI.length < parseInt(`${yellowvideolivet}`)) {
         animationI += `${animationI.length >> (Math.min(Math.abs(2), 1))}`;
      }
       let righty = String.fromCharCode(109,95,57,57,95,97,121,98,114,0);
         animationI += `${righty.length / (Math.max(animationI.length, 8))}`;
      let libffmpegkitE = animationI.length >= 9762003;
      do {
         animationI = `${3 * parseInt(`${yellowvideolivet}`)}`;
         if (libffmpegkitE) {
            break;
         }
      } while (libffmpegkitE && ((animationI.length / (Math.max(2, 6))) > 2 || (yellowvideolivet / (Math.max(parseFloat(`${animationI.length}`), 7))) > 4.44));
      if (4.41 > (yellowvideolivet - 2.67) || (2.67 - yellowvideolivet) > 5.22) {
         righty += `${righty.length}`;
      }
      iconbackwhitev <<= Math.min(Math.abs((moviesI == String.fromCharCode(74,0) ? moviesI.length : iconbackwhitev)), 3);
      break;
   }
      upgradep /= Math.max(2, 2 >> (Math.min(Math.abs(parseInt(`${yellowanimationliveJ}`)), 1)));
   for (let m = 0; m < 3; m++) {
       let pangle7 = String.fromCharCode(112,97,99,107,97,103,101,100,95,114,95,53,48,0);
         pangle7 = "1";
          let backwhitev = String.fromCharCode(103,95,55,95,119,97,108,108,0);
         pangle7 += `${(String.fromCharCode(112,0) == backwhitev ? pangle7.length : backwhitev.length)}`;
      let downarrow2 = String.fromCharCode(106,109,106,0) == pangle7;
      do {
         pangle7 = "3";
         if (downarrow2) {
            break;
         }
      } while ((pangle7.endsWith(`${pangle7.length}`)) && downarrow2);
      halffieldimageY = [detailB.length & statisticsX];
   }

    setShowSliderThumbnail(!showSliderThumbnail);

       let cancelh = 3;
       let questicon9 = false;
      if (4 <= cancelh) {
          let notificationfillemptyF = 0;
          let heji1 = String.fromCharCode(99,95,53,53,95,102,105,108,116,101,114,115,0);
         cancelh /= Math.max(heji1.length, 2);
         notificationfillemptyF *= notificationfillemptyF;
         heji1 += `${notificationfillemptyF}`;
      }
       let relatedh = String.fromCharCode(115,105,109,105,108,97,114,95,115,95,48,0);
       let telemetry8 = 1.0;
       let imagemanagerQ = 3.0;
      while (!questicon9) {
          let middlesoundG = String.fromCharCode(98,105,116,115,104,105,102,116,95,48,95,53,0);
          let yellowredcardV: Map<any, any> = new Map([[String.fromCharCode(118,99,114,101,97,116,101,95,57,95,56,56,0),237], [String.fromCharCode(98,95,56,48,95,98,97,110,110,101,100,0),45], [String.fromCharCode(102,95,48,95,109,117,108,116,105,112,97,114,116,0),117]]);
         questicon9 = cancelh == 30;
         middlesoundG = `${middlesoundG.length}`;
         yellowredcardV = new Map([[`${yellowredcardV.size}`, middlesoundG.length % (Math.max(2, 2))]]);
         break;
      }
          let select3: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,99,111,100,101,99,95,101,95,52,50,0),false ], [String.fromCharCode(106,95,52,52,95,112,108,117,114,97,108,0),true ], [String.fromCharCode(104,95,49,50,95,105,110,105,116,105,97,108,108,121,0),false ]]);
          let goalc = 0.0;
         questicon9 = !questicon9;
         select3 = new Map([[`${select3.size}`, select3.size * 2]]);
         goalc /= Math.max(parseFloat(`${parseInt(`${goalc}`)}`), 1);
         relatedh = `${((questicon9 ? 5 : 2) / (Math.max(cancelh, 9)))}`;
      upgradep += 1 + parseInt(`${upgradep}`);
       let windd = 2;
       let imagemanagerW = 2.0;
       let iconuserJ = String.fromCharCode(101,120,112,114,101,115,115,95,116,95,55,51,0);
       let plashA = 0.0;
       let matchesq = 5.0;
         imagemanagerW -= windd + 1;
         imagemanagerW += iconuserJ.length ^ 1;
      let traminic = 8612512.0 <= matchesq;
      do {
          let mbnativeadvancedd = 2;
         matchesq -= mbnativeadvancedd;
         if (traminic) {
            break;
         }
      } while ((matchesq <= plashA) && traminic);
         imagemanagerW -= parseInt(`${plashA}`);
      while ((plashA + 4) < 3.74) {
         matchesq /= Math.max(3, 3 % (Math.max(parseInt(`${imagemanagerW}`), 8)));
         break;
      }
      while (1.18 == matchesq) {
          let rendery = String.fromCharCode(105,110,105,116,105,97,108,95,56,95,54,55,0);
          let basketballplayerplaceholder1 = String.fromCharCode(111,95,49,50,95,109,95,49,53,0);
          let whitel = 1;
         matchesq *= parseInt(`${imagemanagerW}`) ^ 3;
         rendery += `${rendery.length - 3}`;
         basketballplayerplaceholder1 = `${1 & basketballplayerplaceholder1.length}`;
         whitel *= (String.fromCharCode(79,0) == rendery ? rendery.length : whitel);
         break;
      }
      while ((plashA + 1.6) <= 3.96) {
          let defaultteamo: Map<any, any> = new Map([[String.fromCharCode(118,97,114,119,105,100,116,104,95,100,95,54,56,0),false ], [String.fromCharCode(100,121,110,97,109,105,99,115,95,108,95,57,53,0),true ]]);
          let auto_mb5 = String.fromCharCode(112,111,112,117,108,97,116,101,100,95,55,95,50,50,0);
          let profileframec: Array<any> = [692, 250];
          let paginationS = 1.0;
          let ewardedS: Map<any, any> = new Map([[String.fromCharCode(111,114,103,95,122,95,55,57,0),true ], [String.fromCharCode(99,104,101,99,107,98,111,120,95,52,95,52,56,0),true ]]);
         plashA += profileframec.length / 2;
         defaultteamo = new Map([[`${ewardedS.size}`, parseInt(`${paginationS}`)]]);
         auto_mb5 += `${2 << (Math.min(5, Math.abs(defaultteamo.size)))}`;
         profileframec = [3];
         paginationS -= parseFloat(`${parseInt(`${paginationS}`)}`);
         ewardedS = new Map([[`${defaultteamo.size}`, defaultteamo.size >> (Math.min(2, Math.abs(parseInt(`${paginationS}`))))]]);
         break;
      }
         imagemanagerW *= (iconuserJ == String.fromCharCode(97,0) ? parseInt(`${imagemanagerW}`) : iconuserJ.length);
      halffieldimageY.push((knewsshare3 == String.fromCharCode(111,0) ? iconuserJ.length : knewsshare3.length));
   while (whitetickf == 5.62) {
      whitetickf *= (parseFloat(`${iconbackwhitev + (libswresampleN ? 4 : 2)}`));
      break;
   }
       let leftb: Array<any> = [String.fromCharCode(100,97,116,101,95,98,95,50,54,0), String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,115,95,57,57,0)];
      let logouserY = leftb.length >= 9262012;
      do {
         leftb = [1 - leftb.length];
         if (logouserY) {
            break;
         }
      } while ((leftb.includes(leftb.length)) && logouserY);
         leftb.push(leftb.length);
      for (let a = 0; a < 2; a++) {
         leftb = [leftb.length | 1];
      }
      pagination8 += `${gmail2.length & parseInt(`${upgradep}`)}`;
       let profilepicE = 5;
       let anytimeR = String.fromCharCode(98,95,52,51,95,114,103,98,97,98,101,0);
       let classesi = true;
       let thumbnailz = String.fromCharCode(114,101,99,101,105,118,101,114,115,95,57,95,51,0);
         classesi = (85 >= ((!classesi ? 85 : anytimeR.length) / (Math.max(anytimeR.length, 4))));
         classesi = anytimeR == String.fromCharCode(52,0) || 14 < profilepicE;
      let footballfield0 = classesi ? !classesi : classesi;
      do {
         classesi = !classesi || profilepicE <= 53;
         if (footballfield0) {
            break;
         }
      } while (((3 * profilepicE) >= 4) && footballfield0);
      if (1 > thumbnailz.length || classesi) {
          let livenodatabgimg0 = String.fromCharCode(100,95,52,48,95,114,116,112,112,108,97,121,0);
          let libimagepipeliner = String.fromCharCode(108,95,55,48,95,97,98,115,116,114,97,99,116,0);
          let gradle4 = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,54,95,57,54,0);
          let knewsshareQ = 1.0;
         classesi = (libimagepipeliner.length - anytimeR.length) == 14;
         livenodatabgimg0 = `${gradle4.length}`;
         libimagepipeliner = `${gradle4.length >> (Math.min(5, Math.abs(parseInt(`${knewsshareQ}`))))}`;
         knewsshareQ += 1;
      }
          let o_imageJ = 3;
          let subbasketballplayerT: Array<any> = [54, 850];
          let questiconK = String.fromCharCode(97,108,97,109,111,102,105,114,101,95,50,95,57,52,0);
         thumbnailz = `${profilepicE}`;
         o_imageJ -= o_imageJ - 2;
         subbasketballplayerT.push((String.fromCharCode(67,0) == questiconK ? subbasketballplayerT.length : questiconK.length));
         classesi = !thumbnailz.startsWith(`${classesi}`);
         anytimeR = `${thumbnailz.length | 2}`;
      let launchS = 5365011 >= profilepicE;
      do {
          let yellowvideolivep = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,95,112,95,51,52,0);
          let photoo: Map<any, any> = new Map([[String.fromCharCode(116,105,116,108,116,101,95,101,95,53,49,0),true ], [String.fromCharCode(102,114,97,112,115,95,109,95,57,55,0),true ], [String.fromCharCode(115,111,99,107,101,116,95,115,95,54,56,0),false ]]);
          let uimanager1 = 4.0;
          let attributedstringR: Map<any, any> = new Map([[String.fromCharCode(100,95,53,54,95,99,102,101,110,99,115,116,114,0),String.fromCharCode(114,101,118,101,114,98,95,53,95,53,49,0)], [String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,115,95,55,0),String.fromCharCode(108,95,57,52,95,99,111,118,97,108,101,110,116,0)]]);
          let foreground2 = 2.0;
         profilepicE <<= Math.min(5, yellowvideolivep.length);
         yellowvideolivep += "2";
         photoo.set(`${attributedstringR.size}`, attributedstringR.size);
         uimanager1 -= parseInt(`${foreground2}`);
         if (launchS) {
            break;
         }
      } while (((2 ^ profilepicE) < 3 || !classesi) && launchS);
      pagination8 = `${knewsshare3.length}`;
      libswresampleN = yellowanimationliveJ < 85.68;
      modity8 /= Math.max(5, parseInt(`${modity8}`) / 2);
      moviesI = `${2 - iconbackwhitev}`;
       let modalI = true;
       let libjsil = 1.0;
      if (libjsil == 5.11) {
          let popupw = 3.0;
          let trophy9 = 2.0;
         libjsil += parseInt(`${popupw}`);
         trophy9 -= parseInt(`${trophy9}`);
      }
      while ((libjsil + 5.14) == 5.63) {
         modalI = libjsil > 70.55;
         break;
      }
       let flippere = String.fromCharCode(119,111,114,107,101,114,115,95,53,95,51,56,0);
       let catalogH = String.fromCharCode(112,115,115,104,95,97,95,51,54,0);
      if ((3.84 + libjsil) <= 2.97 && libjsil <= 3.84) {
         libjsil /= Math.max(((modalI ? 4 : 4) | flippere.length), 5);
      }
         modalI = flippere.length <= 100 || 19.16 <= libjsil;
      let yellowtoredA = modalI ? !modalI : modalI;
      do {
          let launch1: Array<any> = [372, 619, 784];
          let libffmpegkitq = String.fromCharCode(104,95,51,51,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
          let photoq = String.fromCharCode(99,111,108,111,99,97,116,101,100,95,48,95,49,56,0);
         modalI = 64 <= photoq.length || 64 <= catalogH.length;
         launch1.push((libffmpegkitq == String.fromCharCode(100,0) ? libffmpegkitq.length : launch1.length));
         photoq += `${2 ^ launch1.length}`;
         if (yellowtoredA) {
            break;
         }
      } while (yellowtoredA && (3.52 == libjsil));
      gmail2 = `${pagination8.length >> (Math.min(Math.abs(3), 3))}`;
      yellowanimationliveJ *= parseFloat(`${iconbackwhitev + pagination8.length}`);
   while (!knewsshare3.startsWith(detailB)) {
       let greyj = 2;
       let c_centerR: Array<any> = [454, 70];
       let questiconc = String.fromCharCode(119,95,54,50,95,105,110,116,101,114,97,99,116,105,111,110,0);
       let iconeyed = true;
       let libreactperfloggerjni7 = 0;
         iconeyed = 61 < (libreactperfloggerjni7 / (Math.max(greyj, 8)));
      for (let x = 0; x < 1; x++) {
         greyj *= c_centerR.length;
      }
         iconeyed = greyj == questiconc.length;
         iconeyed = libreactperfloggerjni7 == greyj;
         questiconc += "2";
          let controlsL = String.fromCharCode(121,95,55,53,95,106,99,104,117,102,102,0);
         questiconc += "2";
         controlsL = `${controlsL.length}`;
      if (2 <= (c_centerR.length * 4) || iconeyed) {
         iconeyed = questiconc.includes(`${greyj}`);
      }
      while ((1 * greyj) == 5 && (greyj * 1) == 4) {
         questiconc = `${questiconc.length}`;
         break;
      }
      if (questiconc.length <= greyj) {
         greyj &= c_centerR.length;
      }
       let inouttargetredA = false;
         c_centerR = [(greyj << (Math.min(2, Math.abs((inouttargetredA ? 5 : 2)))))];
          let iconarrowrightC = String.fromCharCode(102,95,55,48,0);
         iconeyed = 84 > libreactperfloggerjni7 || iconarrowrightC == String.fromCharCode(98,0);
         c_centerR.push((String.fromCharCode(116,0) == questiconc ? (inouttargetredA ? 1 : 5) : questiconc.length));
         c_centerR = [c_centerR.length];
      if (5 > (1 >> (Math.min(5, questiconc.length))) && (questiconc.length >> (Math.min(5, Math.abs(greyj)))) > 1) {
         questiconc = `${(String.fromCharCode(51,0) == questiconc ? questiconc.length : greyj)}`;
      }
      knewsshare3 = `${greyj << (Math.min(4, Math.abs(2)))}`;
      break;
   }
       let networkp = String.fromCharCode(113,95,53,50,95,101,118,116,97,103,0);
          let storec = true;
         networkp = `${((storec ? 2 : 1) << (Math.min(networkp.length, 2)))}`;
      if (!networkp.startsWith(`${networkp.length}`)) {
          let fieldq: Array<any> = [529, 482];
          let imagemanagerQX = 2;
          let iconpipshrink3: Map<any, any> = new Map([[String.fromCharCode(116,114,97,105,116,115,95,109,95,55,56,0),751], [String.fromCharCode(110,95,56,51,95,111,112,101,110,101,100,0),597]]);
         networkp = `${3 >> (Math.min(3, fieldq.length))}`;
         fieldq = [iconpipshrink3.size];
         imagemanagerQX -= imagemanagerQX;
         iconpipshrink3.set(`${imagemanagerQX}`, 2);
      }
         networkp += `${networkp.length - networkp.length}`;
      gmail2 = `${1 + questL.length}`;
   let homeloadingn = gmail2.length <= 9639766;
   do {
      gmail2 = `${detailB.length}`;
      if (homeloadingn) {
         break;
      }
   } while (homeloadingn && (gmail2.startsWith(`${halffieldimageY.length}`)));
       let storei: Map<any, any> = new Map([[String.fromCharCode(97,117,103,109,101,110,116,95,56,95,56,49,0),500], [String.fromCharCode(100,95,55,51,95,97,117,116,104,111,114,0),736], [String.fromCharCode(114,95,53,52,95,114,101,116,114,105,101,114,0),699]]);
       let mountingW: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,111,102,102,95,105,95,57,49,0),String.fromCharCode(116,114,97,110,115,112,95,112,95,50,55,0)], [String.fromCharCode(97,112,110,103,95,113,95,51,48,0),String.fromCharCode(110,95,51,57,95,114,97,110,100,111,109,105,122,101,0)]]);
       let logo7: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,115,109,111,111,116,104,101,110,0),719], [String.fromCharCode(108,105,98,118,112,120,95,113,95,51,0),211], [String.fromCharCode(98,95,52,51,0),784]]);
         mountingW.set(`${storei.size}`, mountingW.size / (Math.max(4, storei.size)));
         storei.set(`${mountingW.size}`, mountingW.size);
          let reactnavigationp = String.fromCharCode(120,95,49,50,95,105,110,116,101,114,112,111,108,0);
         mountingW = new Map([[`${mountingW.size}`, storei.size ^ mountingW.size]]);
         reactnavigationp = `${reactnavigationp.length}`;
         mountingW = new Map([[`${mountingW.size}`, mountingW.size >> (Math.min(3, Math.abs(logo7.size)))]]);
         logo7.set(`${storei.size}`, mountingW.size / 2);
      if (Array.from(mountingW.keys()).includes(`${storei.size}`)) {
          let basketballiconf = String.fromCharCode(109,101,109,117,116,105,108,95,121,95,55,56,0);
          let smallbrightnessw = true;
          let cancelY: Array<any> = [954, 996, 626];
          let bottom2 = 3;
         mountingW = new Map([[`${logo7.size}`, logo7.size % 1]]);
         basketballiconf = `${(String.fromCharCode(112,0) == basketballiconf ? (smallbrightnessw ? 2 : 1) : basketballiconf.length)}`;
         smallbrightnessw = basketballiconf.length == 90;
         cancelY = [basketballiconf.length - 2];
         bottom2 ^= 3 >> (Math.min(1, basketballiconf.length));
      }
         logo7 = new Map([[`${storei.size}`, mountingW.size]]);
      for (let a = 0; a < 3; a++) {
          let plusf = String.fromCharCode(110,95,49,48,95,119,115,97,117,100,0);
          let showlessO = String.fromCharCode(103,95,57,53,95,103,112,111,115,116,102,105,108,116,101,114,0);
         mountingW.set(plusf, plusf.length - 3);
         showlessO = `${showlessO.length}`;
      }
      while (Array.from(storei.keys()).includes(`${mountingW.size}`)) {
         storei.set(`${logo7.size}`, mountingW.size);
         break;
      }
      knewsshare3 += `${knewsshare3.length}`;
    delayControls(!paused);

      questL = "2";
      pagination8 = `${headerU.length}`;
       let loadingx = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,99,101,95,104,95,54,57,0);
       let arrowdowne = 3.0;
         arrowdowne += parseFloat(`${2}`);
      let privilegeh = arrowdowne >= 6147054.0;
      do {
          let executorG: Array<any> = [40, 638, 476];
          let backwhitee: Map<any, any> = new Map([[String.fromCharCode(101,95,48,95,103,112,111,115,116,102,105,108,116,101,114,0),748], [String.fromCharCode(122,95,55,51,95,115,116,114,101,116,99,104,97,98,108,101,0),561]]);
          let sendC = 0;
         arrowdowne += parseFloat(`${loadingx.length}`);
         executorG.push(3 | backwhitee.size);
         backwhitee.set(`${sendC}`, sendC);
         if (privilegeh) {
            break;
         }
      } while (((1.66 + arrowdowne) > 4.12) && privilegeh);
      if (3 == loadingx.length) {
          let airbnbstarselectedw = String.fromCharCode(118,114,97,115,116,101,114,95,53,95,52,54,0);
          let clearM = String.fromCharCode(109,106,112,101,103,106,112,101,103,95,99,95,49,53,0);
          let downloadedb = String.fromCharCode(112,115,104,95,97,95,49,52,0);
          let iconclose8 = 1.0;
         loadingx = `${airbnbstarselectedw.length}`;
         airbnbstarselectedw = `${clearM.length << (Math.min(3, downloadedb.length))}`;
         clearM += `${parseInt(`${iconclose8}`)}`;
         downloadedb = `${downloadedb.length}`;
         iconclose8 += parseInt(`${iconclose8}`) << (Math.min(downloadedb.length, 2));
      }
      for (let f = 0; f < 3; f++) {
          let iconcurrentmatchx = true;
          let predictionarrowE: Array<any> = [377, 627, 909];
         arrowdowne *= (parseFloat(`${predictionarrowE.length - (iconcurrentmatchx ? 3 : 1)}`));
      }
      while (parseInt(`${arrowdowne}`) > loadingx.length) {
         arrowdowne -= parseFloat(`${loadingx.length}`);
         break;
      }
         arrowdowne *= parseFloat(`${1}`);
      knewsshare3 = "3";
   while (moviesI.length == statisticsX) {
      moviesI = `${parseInt(`${yellowanimationliveJ}`)}`;
      break;
   }
   for (let y = 0; y < 3; y++) {
      questL += `${(String.fromCharCode(122,0) == pagination8 ? pagination8.length : headerU.length)}`;
   }
   for (let v = 0; v < 3; v++) {
      libswresampleN = modity8 >= 92.2;
   }
      pagination8 = `${statisticsX}`;
   let dependenciesk = pagination8.length >= 6513248;
   do {
      pagination8 = "1";
      if (dependenciesk) {
         break;
      }
   } while ((pagination8.length < 5 || 5 < knewsshare3.length) && dependenciesk);
   for (let b = 0; b < 2; b++) {
      whitetickf /= Math.max(3, parseFloat(`${statisticsX}`));
   }
   let pageH = knewsshare3 == String.fromCharCode(54,112,56,110,111,110,120,95,120,0);
   do {
      knewsshare3 += `${parseInt(`${whitetickf}`) * headerU.length}`;
      if (pageH) {
         break;
      }
   } while (pageH && ((knewsshare3.length << (Math.min(Math.abs(2), 5))) == 4));
       let distq: Array<any> = [617, 253, 798];
       let mapbuffer7: Map<any, any> = new Map([[String.fromCharCode(110,95,52,57,95,112,117,98,0),829], [String.fromCharCode(98,101,97,116,95,106,95,49,51,0),788]]);
          let homeactiveF = 0;
          let iconwatchnowS = false;
         distq = [mapbuffer7.size * homeactiveF];
         homeactiveF ^= ((iconwatchnowS ? 4 : 4) % 3);
      for (let q = 0; q < 1; q++) {
         mapbuffer7 = new Map([[`${mapbuffer7.size}`, distq.length ^ mapbuffer7.size]]);
      }
      if (4 <= (mapbuffer7.size % (Math.max(5, 10)))) {
          let referrere: Map<any, any> = new Map([[String.fromCharCode(121,95,56,56,95,112,101,101,114,0),12], [String.fromCharCode(115,97,118,105,110,103,115,95,114,95,49,53,0),828], [String.fromCharCode(114,95,50,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0),147]]);
          let reactnavigationE = 5;
          let iconmegaphoneO = String.fromCharCode(116,101,120,105,112,111,100,95,105,95,56,53,0);
          let castV = String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,100,95,56,48,0);
         mapbuffer7 = new Map([[`${referrere.size}`, reactnavigationE]]);
         referrere.set(castV, 3 - iconmegaphoneO.length);
         reactnavigationE /= Math.max(iconmegaphoneO.length * castV.length, 3);
      }
      let iconnointernetQ = mapbuffer7.size <= 8062911;
      do {
          let sharedL = 1.0;
          let animationIF: Array<any> = [990, 540];
          let redirectw = 1;
         mapbuffer7.set(`${redirectw}`, 3 ^ animationIF.length);
         sharedL -= parseInt(`${sharedL}`);
         animationIF.push(parseInt(`${sharedL}`));
         if (iconnointernetQ) {
            break;
         }
      } while (iconnointernetQ && (!Array.from(mapbuffer7.values()).includes(distq.length)));
      let chatm = mapbuffer7.size >= 6085808;
      do {
          let downarrow1 = 2.0;
         mapbuffer7.set(`${downarrow1}`, mapbuffer7.size * 1);
         if (chatm) {
            break;
         }
      } while (chatm && (4 >= (mapbuffer7.size * distq.length) || (distq.length * 4) >= 2));
       let libapminsightbz = String.fromCharCode(117,95,52,95,122,111,110,101,105,110,102,111,0);
       let homeloadingC = String.fromCharCode(116,95,57,49,95,105,112,118,105,100,101,111,0);
      modity8 /= Math.max(pagination8.length, 4);
       let heartO = 3.0;
       let frame_9W = 3;
       let contextW = String.fromCharCode(118,95,55,50,95,109,111,100,101,114,110,0);
         frame_9W /= Math.max(1, 3);
         contextW = `${parseInt(`${heartO}`)}`;
          let icong = String.fromCharCode(98,95,51,52,95,99,111,110,116,105,110,117,101,100,0);
          let cornerkickU = String.fromCharCode(111,95,54,50,95,104,105,100,99,116,0);
          let profilepics = false;
         contextW = `${1 + parseInt(`${heartO}`)}`;
         icong += `${(icong == String.fromCharCode(73,0) ? (profilepics ? 2 : 5) : icong.length)}`;
         cornerkickU = `${icong.length}`;
         profilepics = !icong.startsWith(`${profilepics}`);
         frame_9W += frame_9W & parseInt(`${heartO}`);
      if (1.69 <= heartO) {
          let mbridgen = 2;
          let brightnessz = false;
         frame_9W %= Math.max(contextW.length, 3);
         mbridgen -= ((brightnessz ? 5 : 5) / (Math.max(mbridgen, 10)));
         brightnessz = brightnessz && 97 > mbridgen;
      }
      for (let w = 0; w < 1; w++) {
         contextW += `${1 & parseInt(`${heartO}`)}`;
      }
      while ((frame_9W * 1) <= 1 || 4 <= (1 * frame_9W)) {
         contextW += `${frame_9W}`;
         break;
      }
      while ((contextW.length / 5) > 5) {
          let minivodC = 2.0;
          let goallogos: Map<any, any> = new Map([[String.fromCharCode(122,95,54,48,95,115,116,114,105,114,101,112,108,97,99,101,0),true ], [String.fromCharCode(102,119,104,116,95,116,95,53,54,0),true ], [String.fromCharCode(121,95,52,51,95,100,97,109,112,0),false ]]);
         contextW += `${parseInt(`${heartO}`) + goallogos.size}`;
         minivodC += parseInt(`${minivodC}`);
         goallogos = new Map([[`${minivodC}`, 2 % (Math.max(parseInt(`${minivodC}`), 7))]]);
         break;
      }
      let vignetted = frame_9W <= 5783087;
      do {
         frame_9W >>= Math.min(Math.abs(3), 4);
         if (vignetted) {
            break;
         }
      } while ((1.7 == heartO) && vignetted);
      halffieldimageY = [detailB.length >> (Math.min(Math.abs(3), 5))];
       let dplusE = 1.0;
       let libjsiJ = 4.0;
      while (3.0 == (libjsiJ + dplusE) && (3.0 + libjsiJ) == 5.71) {
          let stru = String.fromCharCode(108,97,118,102,105,95,48,95,53,48,0);
         dplusE *= parseFloat(`${3}`);
         stru += `${stru.length}`;
         break;
      }
          let episodeG = String.fromCharCode(111,95,51,57,95,104,105,116,0);
          let notificationgrayM: Map<any, any> = new Map([[String.fromCharCode(112,95,57,53,95,97,110,100,108,101,0),956], [String.fromCharCode(111,95,53,57,95,112,114,105,110,116,0),743]]);
          let gemfile4: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,104,100,114,95,101,95,57,52,0),String.fromCharCode(97,95,50,53,95,97,103,103,105,110,102,111,0)], [String.fromCharCode(99,104,97,114,115,95,117,95,54,57,0),String.fromCharCode(122,111,111,109,101,100,95,118,95,54,52,0)], [String.fromCharCode(100,114,97,103,103,101,100,95,112,95,57,0),String.fromCharCode(100,101,101,112,108,105,110,107,95,115,95,52,54,0)]]);
         dplusE -= parseFloat(`${3 * parseInt(`${dplusE}`)}`);
         episodeG = `${episodeG.length}`;
         notificationgrayM = new Map([[`${notificationgrayM.size}`, 3 + episodeG.length]]);
         gemfile4 = new Map([[`${notificationgrayM.size}`, 2 - notificationgrayM.size]]);
         libjsiJ += parseFloat(`${parseInt(`${dplusE}`) << (Math.min(4, Math.abs(1)))}`);
      while (1.72 < (libjsiJ + dplusE) || (1.72 + libjsiJ) < 5.87) {
         dplusE -= parseFloat(`${parseInt(`${dplusE}`) << (Math.min(1, Math.abs(2)))}`);
         break;
      }
         libjsiJ *= parseFloat(`${parseInt(`${dplusE}`) - parseInt(`${libjsiJ}`)}`);
      if (dplusE == 4.21) {
         dplusE += parseFloat(`${parseInt(`${libjsiJ}`) >> (Math.min(3, Math.abs(parseInt(`${dplusE}`))))}`);
      }
      libswresampleN = (knewsshare3.length - pagination8.length) == 39;
       let predictionactive3: Array<any> = [String.fromCharCode(100,117,114,103,101,114,107,105,110,103,95,97,95,51,53,0), String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,95,98,95,55,52,0), String.fromCharCode(118,95,49,48,48,95,116,105,109,115,116,97,109,112,0)];
       let corec = 2.0;
       let cornershooty = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,115,95,108,95,50,51,0);
      let placeholder1 = 5169889 <= predictionactive3.length;
      do {
          let episode_: Array<any> = [String.fromCharCode(121,95,51,50,95,109,115,115,100,115,112,0), String.fromCharCode(105,95,52,48,95,97,103,103,114,101,103,97,116,111,114,0), String.fromCharCode(108,95,52,49,0)];
          let foundj = String.fromCharCode(99,111,115,116,105,95,50,95,49,52,0);
          let dialoga = 3.0;
          let statisticsinactivea = String.fromCharCode(114,101,99,108,97,105,109,95,117,95,51,0);
          let redgoalB: Array<any> = [635, 448, 252];
         predictionactive3 = [episode_.length % (Math.max(2, 7))];
         episode_.push((foundj == String.fromCharCode(82,0) ? statisticsinactivea.length : foundj.length));
         dialoga *= parseFloat(`${foundj.length}`);
         statisticsinactivea += `${(String.fromCharCode(87,0) == statisticsinactivea ? statisticsinactivea.length : redgoalB.length)}`;
         redgoalB = [(statisticsinactivea == String.fromCharCode(80,0) ? statisticsinactivea.length : redgoalB.length)];
         if (placeholder1) {
            break;
         }
      } while (placeholder1 && (4 < predictionactive3.length));
          let tickedl = 0.0;
          let filledU = 2.0;
          let faviconi = false;
         corec /= Math.max(4, parseFloat(`${parseInt(`${corec}`) / 1}`));
         tickedl += parseFloat(`${2}`);
         filledU += (parseFloat(`${parseInt(`${tickedl}`) | (faviconi ? 4 : 4)}`));
         faviconi = !faviconi;
      for (let w = 0; w < 1; w++) {
         predictionactive3.push((String.fromCharCode(105,0) == cornershooty ? cornershooty.length : parseInt(`${corec}`)));
      }
         corec *= parseFloat(`${cornershooty.length}`);
       let orangeclockr = String.fromCharCode(115,104,117,116,100,111,119,110,95,104,95,56,54,0);
       let overlay9 = String.fromCharCode(112,117,108,108,100,111,119,110,95,52,95,57,0);
      for (let x = 0; x < 3; x++) {
          let gpayp = String.fromCharCode(98,111,114,100,101,114,115,95,103,95,50,48,0);
          let logo9: Map<any, any> = new Map([[String.fromCharCode(106,95,57,56,95,112,105,110,103,0),813], [String.fromCharCode(114,95,49,56,95,115,101,103,0),837], [String.fromCharCode(118,108,98,117,102,95,101,95,48,0),297]]);
          let short_gfF = false;
         cornershooty = `${predictionactive3.length}`;
         gpayp += `${2 ^ gpayp.length}`;
         logo9.set(`${short_gfF}`, ((short_gfF ? 3 : 1) + 2));
      }
      for (let b = 0; b < 3; b++) {
         predictionactive3 = [2];
      }
         overlay9 += "3";
          let helperW = String.fromCharCode(112,95,48,95,98,108,111,99,107,105,110,101,115,115,0);
         orangeclockr += `${overlay9.length}`;
         helperW += "2";
      halffieldimageY = [2];
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let rocketZ = String.fromCharCode(116,95,54,51,95,102,97,108,108,98,97,99,107,0);
    let attributedstring_ = String.fromCharCode(100,95,56,50,95,109,115,101,120,0);
    let nextd = 0;
    let codez = 0;
    let phonem = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,104,95,49,51,0);
    let searcht = String.fromCharCode(107,95,49,48,48,95,112,101,114,109,117,116,97,116,105,111,110,0);
    let nextdg = false;
    let eighteenl = String.fromCharCode(104,95,54,53,95,112,97,114,116,110,101,114,0);
    let iconcalendarT = String.fromCharCode(115,116,114,101,97,109,97,98,108,101,95,57,95,54,56,0);
    let modules7 = String.fromCharCode(101,120,99,101,112,116,105,111,110,95,101,95,54,56,0);
    let mappingU = String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,95,109,95,49,50,0);
    let videovarp = String.fromCharCode(112,95,51,51,95,103,102,109,117,108,0);
    let runtimeschedulerN = 4.0;
    let libavformat2 = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,99,95,49,48,0);
      iconcalendarT = `${searcht.length & 2}`;
      eighteenl += `${rocketZ.length}`;
   for (let k = 0; k < 1; k++) {
      modules7 = `${attributedstring_.length & 3}`;
   }
       let modityN = String.fromCharCode(104,95,50,55,95,112,114,111,104,105,98,105,116,0);
       let sportsH = 4;
       let eactv: Map<any, any> = new Map([[String.fromCharCode(109,95,50,56,95,109,97,107,101,0),754], [String.fromCharCode(111,95,55,95,100,105,103,105,116,0),901], [String.fromCharCode(112,97,121,108,111,97,100,95,109,95,50,55,0),729]]);
         eactv.set(modityN, sportsH % (Math.max(8, modityN.length)));
      for (let c = 0; c < 3; c++) {
         modityN = `${(String.fromCharCode(108,0) == modityN ? modityN.length : sportsH)}`;
      }
      for (let n = 0; n < 2; n++) {
         sportsH <<= Math.min(Math.abs(sportsH), 4);
      }
          let constantsZ = false;
          let chatg = String.fromCharCode(112,95,54,95,105,99,99,112,0);
          let halffieldimage1 = String.fromCharCode(110,111,99,104,97,110,103,101,95,53,95,54,0);
         sportsH *= 1;
         constantsZ = chatg.length == 13;
         chatg += `${3 - halffieldimage1.length}`;
         halffieldimage1 = `${((constantsZ ? 4 : 5) ^ 1)}`;
          let listm = 1.0;
          let texty = String.fromCharCode(101,120,112,111,115,117,114,101,95,122,95,57,0);
         sportsH |= 2 >> (Math.min(Math.abs(parseInt(`${listm}`)), 5));
         listm -= (texty == String.fromCharCode(106,0) ? texty.length : texty.length);
         eactv = new Map([[modityN, modityN.length | 3]]);
      let subsk = 6664014 <= sportsH;
      do {
          let temperature2: Array<any> = [168, 928];
          let score8 = String.fromCharCode(111,95,48,95,114,101,115,111,108,117,116,105,111,110,115,0);
          let selectionU = String.fromCharCode(115,105,112,114,95,106,95,50,0);
          let videobufferloading5: Array<any> = [880, 5, 143];
         sportsH -= sportsH;
         temperature2 = [videobufferloading5.length];
         score8 += `${score8.length}`;
         selectionU += `${score8.length}`;
         videobufferloading5.push(score8.length);
         if (subsk) {
            break;
         }
      } while (subsk && (modityN.length > 3));
       let iconnewchatV = String.fromCharCode(100,105,109,105,115,115,95,111,95,57,48,0);
          let arrowdownB = String.fromCharCode(122,95,49,48,95,99,111,110,118,101,114,116,101,100,0);
          let completeF = 0;
         modityN = `${arrowdownB.length}`;
         arrowdownB = `${completeF & completeF}`;
      runtimeschedulerN += parseFloat(`${iconcalendarT.length ^ nextd}`);
   for (let d = 0; d < 1; d++) {
       let iconlogoutu: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,101,115,95,50,95,53,50,0),false ], [String.fromCharCode(115,117,114,114,111,117,110,100,95,98,95,53,52,0),false ]]);
       let faviconR = 2.0;
          let verticalP = 2.0;
          let predictionlossR = 3.0;
         faviconR -= parseInt(`${predictionlossR}`) | parseInt(`${faviconR}`);
         verticalP *= parseFloat(`${2}`);
         predictionlossR /= Math.max(5, parseInt(`${verticalP}`) << (Math.min(1, Math.abs(2))));
          let libloggerl = String.fromCharCode(100,95,55,48,95,108,111,99,97,108,105,122,97,98,108,101,0);
          let twitter1: Array<any> = [644, 753];
          let gifgoalbga: Map<any, any> = new Map([[String.fromCharCode(115,103,105,114,108,101,95,111,95,57,0),624], [String.fromCharCode(108,95,51,95,109,97,99,114,111,0),555]]);
         faviconR *= libloggerl.length;
         libloggerl += `${twitter1.length}`;
         twitter1.push(3 << (Math.min(4, Math.abs(gifgoalbga.size))));
         gifgoalbga.set(`${twitter1.length}`, 1);
       let iconwatchnowW: Array<any> = [String.fromCharCode(105,112,114,101,100,95,113,95,51,49,0), String.fromCharCode(115,112,97,110,115,95,105,95,56,55,0)];
       let moduleA: Array<any> = [89, 298];
         iconwatchnowW = [parseInt(`${faviconR}`) | iconlogoutu.size];
          let productY = 0.0;
         moduleA.push(1);
         productY -= parseInt(`${productY}`);
       let whitevideoliveQ = 1.0;
      iconcalendarT += "1";
   }
       let becomeU = 0.0;
       let release_xrh = String.fromCharCode(122,95,50,57,95,104,105,116,0);
       let shareblackv = 5.0;
          let mathV = String.fromCharCode(116,114,116,97,98,108,101,95,50,95,55,49,0);
         release_xrh = `${parseInt(`${shareblackv}`) | mathV.length}`;
         release_xrh += `${release_xrh.length}`;
         release_xrh = `${(String.fromCharCode(109,0) == release_xrh ? release_xrh.length : parseInt(`${becomeU}`))}`;
         shareblackv += parseInt(`${becomeU}`) >> (Math.min(1, Math.abs(parseInt(`${shareblackv}`))));
      if (shareblackv < 2.62) {
         becomeU *= parseFloat(`${2}`);
      }
         release_xrh += "2";
         shareblackv += parseInt(`${shareblackv}`);
         shareblackv *= release_xrh.length << (Math.min(Math.abs(2), 3));
       let gesturesb: Map<any, any> = new Map([[String.fromCharCode(99,95,51,52,95,100,101,110,111,109,0),473], [String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,122,95,54,57,0),294], [String.fromCharCode(110,95,49,52,95,109,109,99,111,115,0),586]]);
       let greenQ: Map<any, any> = new Map([[String.fromCharCode(105,95,53,48,95,115,116,114,102,0),260], [String.fromCharCode(110,111,116,105,102,105,101,114,95,122,95,55,56,0),75]]);
      codez += (eighteenl == String.fromCharCode(79,0) ? attributedstring_.length : eighteenl.length);
       let streaminge = String.fromCharCode(114,95,53,95,99,111,114,100,122,0);
       let libjsinspectorr: Array<any> = [String.fromCharCode(110,95,52,50,95,97,108,108,114,103,98,0), String.fromCharCode(109,95,56,51,95,115,107,105,112,112,97,98,108,101,0)];
      while (4 < (libjsinspectorr.length % (Math.max(5, 8)))) {
         libjsinspectorr.push(2 << (Math.min(4, streaminge.length)));
         break;
      }
         libjsinspectorr = [libjsinspectorr.length];
         libjsinspectorr = [streaminge.length];
      let dependencies5 = streaminge == String.fromCharCode(116,101,52,0);
      do {
         streaminge += `${libjsinspectorr.length ^ streaminge.length}`;
         if (dependencies5) {
            break;
         }
      } while ((2 <= (libjsinspectorr.length ^ 1)) && dependencies5);
         libjsinspectorr = [2];
       let foreground8 = String.fromCharCode(101,120,104,97,117,115,116,101,100,95,107,95,54,51,0);
       let inouttargetyellowz = String.fromCharCode(122,95,51,54,95,119,101,98,112,97,103,101,0);
      rocketZ += `${(searcht == String.fromCharCode(121,0) ? (nextdg ? 2 : 2) : searcht.length)}`;
   for (let z = 0; z < 1; z++) {
      rocketZ = `${1 | parseInt(`${runtimeschedulerN}`)}`;
   }
   for (let e = 0; e < 1; e++) {
      eighteenl = `${parseInt(`${runtimeschedulerN}`) + iconcalendarT.length}`;
   }
      modules7 += `${searcht.length}`;
   if (!mappingU.endsWith(videovarp)) {
      videovarp = `${rocketZ.length % (Math.max(1, 5))}`;
   }
       let emojik = 2.0;
      if (2.53 < (emojik + emojik)) {
          let success_ = 4.0;
          let live6 = 0.0;
         emojik *= parseInt(`${live6}`);
         success_ *= 3;
      }
      if (5.45 <= (4.82 - emojik) && 4.82 <= (emojik - emojik)) {
         emojik += parseInt(`${emojik}`);
      }
         emojik += 1 * parseInt(`${emojik}`);
      videovarp += "1";
      eighteenl += "2";
      searcht += `${mappingU.length}`;
   if (phonem != String.fromCharCode(109,0)) {
       let rewardvideoU = 4;
       let predictionbannersharedT = true;
       let chatroombackground5: Array<any> = [33, 746];
       let customb = String.fromCharCode(113,95,54,48,95,115,101,97,114,99,104,97,98,108,101,0);
      for (let p = 0; p < 3; p++) {
         predictionbannersharedT = String.fromCharCode(87,0) == customb;
      }
         rewardvideoU /= Math.max(1, customb.length ^ rewardvideoU);
      let android0 = customb == String.fromCharCode(97,100,109,119,101,99,0);
      do {
         customb += `${(String.fromCharCode(121,0) == customb ? chatroombackground5.length : customb.length)}`;
         if (android0) {
            break;
         }
      } while (android0 && (chatroombackground5.length < customb.length));
          let statisticsinactiven = String.fromCharCode(108,95,56,57,95,111,98,115,101,114,118,101,0);
         rewardvideoU -= ((predictionbannersharedT ? 3 : 1) * rewardvideoU);
         statisticsinactiven = `${(statisticsinactiven == String.fromCharCode(113,0) ? statisticsinactiven.length : statisticsinactiven.length)}`;
      while (customb.length <= 3) {
         customb += `${customb.length}`;
         break;
      }
      let whitevideolivez = predictionbannersharedT ? !predictionbannersharedT : predictionbannersharedT;
      do {
         predictionbannersharedT = rewardvideoU > 81;
         if (whitevideolivez) {
            break;
         }
      } while ((!predictionbannersharedT && (5 & chatroombackground5.length) < 2) && whitevideolivez);
         customb = `${(chatroombackground5.length << (Math.min(1, Math.abs((predictionbannersharedT ? 2 : 5)))))}`;
      let dragD = chatroombackground5.length <= 6511014;
      do {
         chatroombackground5 = [(3 << (Math.min(5, Math.abs((predictionbannersharedT ? 4 : 3)))))];
         if (dragD) {
            break;
         }
      } while ((2 < chatroombackground5.length) && dragD);
       let alertG: Array<any> = [490, 970];
       let pushV: Array<any> = [String.fromCharCode(121,95,53,51,95,100,121,110,108,111,97,100,0), String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,99,95,52,0)];
         alertG = [pushV.length];
      let temp2 = pushV.length >= 6297613;
      do {
         pushV.push(1 & alertG.length);
         if (temp2) {
            break;
         }
      } while (temp2 && (1 > customb.length));
      for (let w = 0; w < 3; w++) {
         rewardvideoU += (customb == String.fromCharCode(113,0) ? customb.length : chatroombackground5.length);
      }
      videovarp += `${3 ^ modules7.length}`;
   }
   for (let g = 0; g < 3; g++) {
      nextdg = videovarp.length >= 73;
   }
   while (attributedstring_ == phonem) {
       let sourceM = 1.0;
       let defaultroombgG = true;
       let listj = String.fromCharCode(98,95,53,50,95,115,101,103,119,105,116,0);
       let logouts: Array<any> = [298, 41, 959];
       let defaultroombgu: Array<any> = [455, 827];
         listj += "2";
      let sigmoby = listj == String.fromCharCode(113,56,104,102,110,107,108,109,122,0);
      do {
          let iconarrowrightwhiteS: Array<any> = [789, 60];
          let taiwano = false;
          let sellmathbackgroundA = String.fromCharCode(100,105,116,97,98,108,101,95,111,95,49,48,0);
          let iconplayM = String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,95,104,95,52,57,0);
          let graphx = 5.0;
         listj += `${2 ^ defaultroombgu.length}`;
         iconarrowrightwhiteS = [sellmathbackgroundA.length];
         taiwano = sellmathbackgroundA.endsWith(`${graphx}`);
         iconplayM = `${sellmathbackgroundA.length >> (Math.min(2, iconplayM.length))}`;
         graphx /= Math.max(2, parseFloat(`${3}`));
         if (sigmoby) {
            break;
         }
      } while (sigmoby && (!listj.includes(`${sourceM}`)));
      while ((defaultroombgu.length >> (Math.min(Math.abs(3), 2))) > 4) {
         defaultroombgu = [((defaultroombgG ? 2 : 2) + 1)];
         break;
      }
          let yellowZ = 2;
          let orangeuparrow8 = 3.0;
          let templateprocessor3: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,105,110,103,95,102,95,57,53,0),190], [String.fromCharCode(113,95,52,51,95,116,97,98,108,101,108,105,109,0),696]]);
         defaultroombgu.push(logouts.length % (Math.max(defaultroombgu.length, 7)));
         yellowZ += 2 * parseInt(`${orangeuparrow8}`);
         orangeuparrow8 /= Math.max(parseFloat(`${2}`), 5);
         templateprocessor3.set(`${yellowZ}`, 1);
      if ((listj.length - 3) <= 2) {
          let lessl: Array<any> = [95, 685];
          let armvaT: Array<any> = [1, 997, 780];
          let minib = 1.0;
          let eyeclose1 = 4.0;
         logouts = [1];
         lessl = [parseInt(`${minib}`) * 3];
         armvaT = [armvaT.length ^ 1];
         minib *= parseInt(`${minib}`) << (Math.min(lessl.length, 2));
         eyeclose1 -= parseInt(`${minib}`) % 1;
      }
      while (3 == (logouts.length >> (Math.min(Math.abs(1), 4)))) {
         logouts.push(listj.length);
         break;
      }
      while ((1 + listj.length) <= 1) {
         listj += `${((defaultroombgG ? 3 : 2) * listj.length)}`;
         break;
      }
         listj += `${listj.length}`;
      if ((logouts.length % 2) == 5 || 1 == (listj.length % 2)) {
         logouts.push(logouts.length % (Math.max(2, defaultroombgu.length)));
      }
       let iconplay5: Map<any, any> = new Map([[String.fromCharCode(107,95,55,48,95,99,101,110,99,0),449], [String.fromCharCode(117,95,53,57,95,116,104,105,99,107,0),594], [String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,95,52,95,51,54,0),67]]);
       let iconarrowrightg: Map<any, any> = new Map([[String.fromCharCode(114,95,56,48,95,105,109,112,108,105,99,105,116,108,121,0),896], [String.fromCharCode(110,95,53,53,95,108,97,98,101,108,115,0),3], [String.fromCharCode(105,102,97,100,100,114,115,95,121,95,50,52,0),455]]);
      let gifgoalbg_ = listj == String.fromCharCode(52,55,120,54,98,55,108,51,109,115,0);
      do {
          let componentI: Map<any, any> = new Map([[String.fromCharCode(116,105,110,116,101,114,108,97,99,101,95,104,95,53,50,0),913], [String.fromCharCode(122,95,55,50,95,114,105,100,103,101,0),396]]);
          let defaultplayerimg6 = String.fromCharCode(101,95,57,48,95,114,101,97,100,98,121,116,101,0);
         listj = `${(String.fromCharCode(110,0) == listj ? listj.length : logouts.length)}`;
         componentI = new Map([[`${componentI.size}`, componentI.size]]);
         defaultplayerimg6 = `${defaultplayerimg6.length - componentI.size}`;
         if (gifgoalbg_) {
            break;
         }
      } while (gifgoalbg_ && (defaultroombgu.length <= 3));
      while (2 >= (iconarrowrightg.size << (Math.min(Math.abs(5), 5)))) {
         iconarrowrightg.set(`${defaultroombgu.length}`, iconarrowrightg.size * 3);
         break;
      }
         defaultroombgG = (70 == (logouts.length - (!defaultroombgG ? logouts.length : 70)));
         iconplay5 = new Map([[`${iconplay5.size}`, listj.length >> (Math.min(1, Math.abs(iconplay5.size)))]]);
       let plashu = 1.0;
       let userV = 1.0;
      phonem = `${codez}`;
      break;
   }
       let iconclosewhitewithbgv = String.fromCharCode(112,114,111,100,117,99,116,115,95,112,95,53,55,0);
       let cancelB = String.fromCharCode(100,105,102,102,101,114,101,110,116,95,104,95,55,50,0);
         iconclosewhitewithbgv += `${cancelB.length}`;
      while (cancelB.length == 1 && iconclosewhitewithbgv != String.fromCharCode(110,0)) {
          let backwarda = 4;
          let defaultpredictionprofileF: Array<any> = [499, 400];
          let videojs6 = 3.0;
          let schedulei: Array<any> = [String.fromCharCode(108,105,116,116,108,101,95,48,95,49,54,0), String.fromCharCode(119,95,52,55,95,111,102,102,115,99,114,101,101,110,0), String.fromCharCode(108,95,51,57,95,116,101,115,116,105,110,103,0)];
          let a_title2 = String.fromCharCode(108,101,116,116,101,114,95,52,95,55,54,0);
         cancelB = `${parseInt(`${videojs6}`) / 3}`;
         backwarda += 2;
         defaultpredictionprofileF = [(a_title2 == String.fromCharCode(105,0) ? a_title2.length : schedulei.length)];
         videojs6 -= 2 % (Math.max(3, backwarda));
         schedulei = [1 + backwarda];
         break;
      }
      let iconwechatG = 5429005 <= cancelB.length;
      do {
          let questh = true;
          let renewa = String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,53,95,53,48,0);
         cancelB += `${(renewa.length % (Math.max(8, (questh ? 3 : 4))))}`;
         if (iconwechatG) {
            break;
         }
      } while (iconwechatG && (!iconclosewhitewithbgv.startsWith(cancelB)));
         cancelB = `${2 / (Math.max(8, iconclosewhitewithbgv.length))}`;
          let regengb = 4.0;
          let bgvipsport1 = String.fromCharCode(122,95,54,95,115,111,99,111,110,110,101,99,116,0);
         iconclosewhitewithbgv += "2";
         regengb += (parseFloat(`${String.fromCharCode(121,0) == bgvipsport1 ? parseInt(`${regengb}`) : bgvipsport1.length}`));
      while (cancelB.length == 4) {
         iconclosewhitewithbgv = `${(String.fromCharCode(66,0) == iconclosewhitewithbgv ? cancelB.length : iconclosewhitewithbgv.length)}`;
         break;
      }
      runtimeschedulerN /= Math.max(2, parseFloat(`${videovarp.length}`));
       let fastz = 5.0;
       let popupZ: Map<any, any> = new Map([[String.fromCharCode(110,101,120,116,108,95,51,95,50,48,0),false ], [String.fromCharCode(113,95,56,51,95,114,101,97,108,108,111,99,0),true ], [String.fromCharCode(109,95,51,95,102,108,105,112,0),true ]]);
         fastz += popupZ.size;
          let x_positionr: Map<any, any> = new Map([[String.fromCharCode(115,117,114,102,95,103,95,54,48,0),270], [String.fromCharCode(106,95,57,48,95,100,101,105,110,116,0),563], [String.fromCharCode(120,95,57,52,95,109,107,118,109,117,120,101,114,117,116,105,108,0),390]]);
          let userM = 0;
         fastz += popupZ.size >> (Math.min(Math.abs(1), 1));
         x_positionr.set(`${userM}`, 3 - userM);
          let libcrashsdku = String.fromCharCode(115,95,52,54,95,104,97,100,97,109,97,114,100,120,0);
         popupZ.set(libcrashsdku, 3 - libcrashsdku.length);
      let libsentryT = popupZ.size >= 9361344;
      do {
         popupZ.set(`${fastz}`, 3 + parseInt(`${fastz}`));
         if (libsentryT) {
            break;
         }
      } while (libsentryT && (!Array.from(popupZ.values()).includes(fastz)));
      let awayD = fastz <= 7492777.0;
      do {
         fastz /= Math.max(popupZ.size % 1, 3);
         if (awayD) {
            break;
         }
      } while (awayD && ((3.27 + fastz) > 1.23 || (3 | popupZ.size) > 5));
      for (let o = 0; o < 3; o++) {
         fastz *= parseInt(`${fastz}`) << (Math.min(Math.abs(2), 3));
      }
      runtimeschedulerN /= Math.max(parseFloat(`${1}`), 2);
      nextdg = 34 < codez;
       let runtimeschedulerq = true;
      for (let m = 0; m < 3; m++) {
         runtimeschedulerq = (runtimeschedulerq ? runtimeschedulerq : !runtimeschedulerq);
      }
      let smallorangemanO = runtimeschedulerq ? !runtimeschedulerq : runtimeschedulerq;
      do {
         runtimeschedulerq = (!runtimeschedulerq ? runtimeschedulerq : !runtimeschedulerq);
         if (smallorangemanO) {
            break;
         }
      } while ((runtimeschedulerq && runtimeschedulerq) && smallorangemanO);
       let macauK = 1.0;
       let nativej = 1.0;
      eighteenl += `${phonem.length << (Math.min(attributedstring_.length, 2))}`;
      eighteenl += `${(String.fromCharCode(103,0) == eighteenl ? parseInt(`${runtimeschedulerN}`) : eighteenl.length)}`;

    onHandleFullScreen();
  };

  const goBack = () => {
       let icontransferclubl = String.fromCharCode(99,111,110,116,114,111,108,108,101,100,95,113,95,55,54,0);
    let componentregistryu = 2;
    let mbnativeZ = false;
    let sendh = String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,56,95,57,50,0);
    let lessN = 5.0;
    let submitL = 1.0;
    let gradlewD: Array<any> = [298, 499, 491];
    let productp = 2;
    let redscoreballd: Map<any, any> = new Map([[String.fromCharCode(115,95,52,54,95,112,114,111,118,105,100,101,115,0),165], [String.fromCharCode(111,110,97,118,99,100,97,116,97,95,120,95,55,52,0),459], [String.fromCharCode(118,95,52,95,100,101,112,116,104,0),102]]);
    let smallbrightnessu = String.fromCharCode(98,114,105,110,103,95,117,95,50,53,0);
    let holderJ = 1;
       let becomeT: Array<any> = [654, 298, 280];
         becomeT = [becomeT.length / 3];
      for (let u = 0; u < 2; u++) {
         becomeT = [becomeT.length];
      }
         becomeT.push(becomeT.length);
      productp &= 3;
   for (let a = 0; a < 2; a++) {
      mbnativeZ = gradlewD.length < lessN;
   }
       let inouttargetyellow0: Map<any, any> = new Map([[String.fromCharCode(109,115,114,108,101,100,101,99,95,102,95,49,0),false ], [String.fromCharCode(104,95,50,49,95,108,97,114,103,101,0),true ], [String.fromCharCode(100,95,54,48,95,100,97,114,119,105,110,0),true ]]);
         inouttargetyellow0.set(`${inouttargetyellow0.size}`, 1 << (Math.min(1, Math.abs(inouttargetyellow0.size))));
      let matchesZ = inouttargetyellow0.size <= 9229462;
      do {
         inouttargetyellow0.set(`${inouttargetyellow0.size}`, 1 ^ inouttargetyellow0.size);
         if (matchesZ) {
            break;
         }
      } while (matchesZ && (Array.from(inouttargetyellow0.values()).includes(inouttargetyellow0.size)));
       let rncorer = String.fromCharCode(97,100,111,98,101,95,103,95,54,54,0);
      componentregistryu <<= Math.min(Math.abs(3), 1);
   for (let r = 0; r < 3; r++) {
      mbnativeZ = 64 == gradlewD.length;
   }
   let matchB = 7479632 <= gradlewD.length;
   do {
      gradlewD = [gradlewD.length ^ redscoreballd.size];
      if (matchB) {
         break;
      }
   } while (matchB && (gradlewD.length <= icontransferclubl.length));
   for (let c = 0; c < 3; c++) {
      lessN *= redscoreballd.size % (Math.max(sendh.length, 8));
   }
   let area2 = 7109369 <= productp;
   do {
      productp <<= Math.min(3, Math.abs((parseInt(`${submitL}`) | (mbnativeZ ? 2 : 3))));
      if (area2) {
         break;
      }
   } while (((5 | productp) <= 2) && area2);
       let macauK = 0.0;
       let mimeI: Map<any, any> = new Map([[String.fromCharCode(115,112,101,101,100,117,112,95,120,95,55,48,0),String.fromCharCode(116,95,49,50,95,110,111,99,104,101,99,107,0)], [String.fromCharCode(97,99,116,105,118,97,116,111,114,95,56,95,57,56,0),String.fromCharCode(116,97,98,108,101,116,95,104,95,56,57,0)], [String.fromCharCode(101,120,105,115,116,101,100,95,52,95,56,50,0),String.fromCharCode(101,95,48,95,104,100,115,112,0)]]);
       let smallorangemanb = String.fromCharCode(100,101,98,117,103,103,101,114,95,99,95,53,55,0);
      while (1 < (1 % (Math.max(2, smallorangemanb.length))) && 1 < (mimeI.size % (Math.max(9, smallorangemanb.length)))) {
         mimeI.set(smallorangemanb, mimeI.size);
         break;
      }
          let selectw = String.fromCharCode(98,101,110,101,97,116,104,95,51,95,56,51,0);
         mimeI.set(`${macauK}`, 2 << (Math.min(1, smallorangemanb.length)));
         selectw = `${selectw.length ^ 1}`;
      while (parseFloat(`${mimeI.size}`) >= macauK) {
         mimeI.set(smallorangemanb, smallorangemanb.length);
         break;
      }
         macauK *= parseFloat(`${mimeI.size + parseInt(`${macauK}`)}`);
      if (smallorangemanb.endsWith(`${mimeI.size}`)) {
         mimeI = new Map([[`${mimeI.size}`, 3 << (Math.min(5, Math.abs(mimeI.size)))]]);
      }
      let executorB = 6385282.0 >= macauK;
      do {
         macauK /= Math.max(parseFloat(`${parseInt(`${macauK}`)}`), 5);
         if (executorB) {
            break;
         }
      } while (((smallorangemanb.length - 3) < 1 || (parseFloat(`${smallorangemanb.length}`) * macauK) < 2.62) && executorB);
      if ((2 >> (Math.min(2, smallorangemanb.length))) > 3) {
         mimeI.set(`${macauK}`, 3);
      }
      let downloaderY = macauK <= 7884658.0;
      do {
         macauK /= Math.max(parseFloat(`${1 & parseInt(`${macauK}`)}`), 5);
         if (downloaderY) {
            break;
         }
      } while (((2 * smallorangemanb.length) < 2) && downloaderY);
      let imagenetworkerrs = 9682895 <= mimeI.size;
      do {
         mimeI = new Map([[`${macauK}`, parseInt(`${macauK}`) % (Math.max(1, 7))]]);
         if (imagenetworkerrs) {
            break;
         }
      } while ((5.31 < (parseFloat(`${mimeI.size}`) - macauK) && (macauK - 5.31) < 5.16) && imagenetworkerrs);
      lessN /= Math.max(componentregistryu + 3, 5);
       let tickA: Array<any> = [963, 260, 735];
       let penaltyshootA: Array<any> = [758, 967, 366];
       let arrowright6 = 2.0;
      while (tickA.includes(arrowright6)) {
         tickA = [parseInt(`${arrowright6}`) - penaltyshootA.length];
         break;
      }
         penaltyshootA = [tickA.length];
       let viewsa = 1.0;
       let clock_ = String.fromCharCode(101,95,49,95,106,100,99,111,101,102,99,116,0);
       let libjsiv = String.fromCharCode(120,95,54,55,95,118,98,112,114,105,110,116,102,0);
         clock_ += `${penaltyshootA.length}`;
      if ((tickA.length + 3) >= 2 && (parseFloat(`${tickA.length}`) + viewsa) >= 5.83) {
         viewsa /= Math.max(2, parseFloat(`${penaltyshootA.length % 1}`));
      }
          let scheduleh = 5;
          let native2 = String.fromCharCode(111,95,55,56,95,116,114,97,110,115,102,101,114,101,100,0);
         tickA.push((String.fromCharCode(114,0) == libjsiv ? scheduleh : libjsiv.length));
         scheduleh /= Math.max(native2.length, 1);
         native2 += `${native2.length >> (Math.min(native2.length, 3))}`;
         viewsa -= parseFloat(`${3}`);
          let yellowanimationliveH = String.fromCharCode(99,104,101,99,107,98,111,120,95,116,95,49,54,0);
          let encrypt6: Map<any, any> = new Map([[String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,113,95,57,51,0),233], [String.fromCharCode(102,101,97,116,117,114,101,95,118,95,55,54,0),474]]);
          let pathz = 2;
         libjsiv += `${tickA.length}`;
         yellowanimationliveH = `${(yellowanimationliveH == String.fromCharCode(116,0) ? pathz : yellowanimationliveH.length)}`;
         encrypt6 = new Map([[yellowanimationliveH, pathz >> (Math.min(yellowanimationliveH.length, 5))]]);
      submitL += parseInt(`${submitL}`) ^ componentregistryu;
   let stylef = 6179665 >= gradlewD.length;
   do {
      gradlewD.push(2);
      if (stylef) {
         break;
      }
   } while (stylef && (gradlewD.includes(productp)));
       let text5 = String.fromCharCode(103,95,48,95,115,99,97,109,0);
       let yellowcirclebgN = true;
         yellowcirclebgN = !yellowcirclebgN;
      let membershipW = yellowcirclebgN ? !yellowcirclebgN : yellowcirclebgN;
      do {
          let flagj: Map<any, any> = new Map([[String.fromCharCode(114,95,56,95,115,116,114,108,0),631], [String.fromCharCode(114,101,101,108,95,105,95,52,56,0),802]]);
          let statisticsinactive6 = String.fromCharCode(116,109,112,95,53,95,53,55,0);
         yellowcirclebgN = text5 == statisticsinactive6;
         flagj = new Map([[`${flagj.size}`, 1 >> (Math.min(2, Math.abs(flagj.size)))]]);
         statisticsinactive6 = `${flagj.size >> (Math.min(1, Math.abs(flagj.size)))}`;
         if (membershipW) {
            break;
         }
      } while (membershipW && (!yellowcirclebgN));
      while (2 < text5.length && yellowcirclebgN) {
         yellowcirclebgN = !yellowcirclebgN;
         break;
      }
          let interstitialJ = String.fromCharCode(115,121,109,111,100,100,95,56,95,51,49,0);
          let episodesk = 4.0;
         yellowcirclebgN = !yellowcirclebgN;
         interstitialJ += `${parseInt(`${episodesk}`)}`;
         episodesk -= interstitialJ.length & 3;
          let entryN = String.fromCharCode(121,95,51,56,95,101,105,116,104,101,114,0);
         text5 += `${text5.length}`;
         entryN += `${(entryN == String.fromCharCode(116,0) ? entryN.length : entryN.length)}`;
      for (let j = 0; j < 1; j++) {
         yellowcirclebgN = (((yellowcirclebgN ? 16 : text5.length) & text5.length) == 16);
      }
      gradlewD = [(String.fromCharCode(112,0) == sendh ? (mbnativeZ ? 1 : 3) : sendh.length)];
   while (icontransferclubl.length == gradlewD.length) {
      icontransferclubl += `${parseInt(`${submitL}`) << (Math.min(Math.abs(3), 3))}`;
      break;
   }
   for (let p = 0; p < 2; p++) {
      gradlewD.push(2 + productp);
   }
       let mimeIf = 5.0;
          let chatroombackgroundw = String.fromCharCode(105,111,118,101,99,105,110,95,114,95,54,57,0);
         mimeIf *= parseFloat(`${parseInt(`${mimeIf}`)}`);
         chatroombackgroundw += "1";
      while ((mimeIf - mimeIf) > 4.21 && (mimeIf - 4.21) > 3.6) {
          let backiconmaskD: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,115,112,97,99,101,95,118,95,52,56,0),239], [String.fromCharCode(119,95,54,56,95,108,97,122,105,108,121,0),865], [String.fromCharCode(111,95,50,48,95,112,114,101,99,0),832]]);
          let pressure8 = String.fromCharCode(115,117,98,116,105,116,108,101,95,110,95,56,55,0);
         mimeIf *= (parseFloat(`${pressure8 == String.fromCharCode(50,0) ? pressure8.length : parseInt(`${mimeIf}`)}`));
         backiconmaskD.set(`${backiconmaskD.size}`, backiconmaskD.size);
         break;
      }
         mimeIf /= Math.max(2, parseFloat(`${parseInt(`${mimeIf}`) ^ 3}`));
      mbnativeZ = !mbnativeZ;

    delayControls();

      sendh += `${componentregistryu % (Math.max(10, gradlewD.length))}`;
   let sharedW = 7606400 >= redscoreballd.size;
   do {
      redscoreballd = new Map([[sendh, icontransferclubl.length]]);
      if (sharedW) {
         break;
      }
   } while (sharedW && (submitL >= 5.68));
      icontransferclubl += "3";
      icontransferclubl += "3";
   while (icontransferclubl.length <= parseInt(`${submitL}`)) {
      submitL /= Math.max(componentregistryu, 1);
      break;
   }
      lessN /= Math.max(4, parseInt(`${submitL}`));
   for (let x = 0; x < 1; x++) {
      mbnativeZ = smallbrightnessu == icontransferclubl;
   }
   let cornerW = 7782428 >= icontransferclubl.length;
   do {
      icontransferclubl = `${gradlewD.length & 2}`;
      if (cornerW) {
         break;
      }
   } while ((5 == (5 * icontransferclubl.length)) && cornerW);
       let pausek = 2;
       let buildQ = 4.0;
      while (pausek <= 5) {
         pausek *= pausek + 3;
         break;
      }
          let signinup9 = String.fromCharCode(97,100,100,115,95,105,95,51,55,0);
          let layout8: Array<any> = [375, 735, 64];
         buildQ += 1;
         signinup9 += `${layout8.length}`;
         layout8 = [3 * signinup9.length];
      for (let y = 0; y < 1; y++) {
         buildQ *= pausek;
      }
         pausek >>= Math.min(4, Math.abs(3));
       let reddownarrowr = false;
      while (5.59 < buildQ) {
         buildQ *= ((reddownarrowr ? 4 : 2) - parseInt(`${buildQ}`));
         break;
      }
      redscoreballd.set(`${lessN}`, parseInt(`${lessN}`) + 2);
       let mutedw = 0.0;
      for (let h = 0; h < 2; h++) {
          let video0 = String.fromCharCode(114,97,119,118,105,100,101,111,95,48,95,52,57,0);
         mutedw -= parseFloat(`${parseInt(`${mutedw}`) >> (Math.min(video0.length, 1))}`);
      }
       let loadingspinnerR = String.fromCharCode(101,95,52,52,95,115,104,111,119,105,110,103,0);
       let fastP = String.fromCharCode(98,95,51,57,95,108,101,109,111,110,0);
         loadingspinnerR += `${1 - fastP.length}`;
      submitL -= parseInt(`${lessN}`) ^ 2;
      mbnativeZ = String.fromCharCode(53,0) == sendh && productp > 19;
       let redscoreballw = String.fromCharCode(114,95,49,55,95,114,101,106,101,99,116,0);
       let smallJ: Map<any, any> = new Map([[String.fromCharCode(100,95,50,53,95,114,105,110,103,0),false ], [String.fromCharCode(115,95,51,95,102,97,108,115,101,0),true ], [String.fromCharCode(119,95,55,57,95,100,105,115,99,97,114,100,0),false ]]);
         redscoreballw += "1";
      while ((redscoreballw.length >> (Math.min(Math.abs(1), 5))) > 4 || (1 >> (Math.min(4, Math.abs(smallJ.size)))) > 5) {
         smallJ.set(`${redscoreballw}`, (redscoreballw == String.fromCharCode(121,0) ? redscoreballw.length : smallJ.size));
         break;
      }
          let moduled = 4;
          let china5 = 4.0;
         redscoreballw = `${redscoreballw.length | 2}`;
         moduled ^= moduled;
         china5 += parseFloat(`${moduled}`);
         smallJ = new Map([[`${smallJ.size}`, smallJ.size & 1]]);
      let episodesA = 5281826 <= smallJ.size;
      do {
          let iconcalendarf = String.fromCharCode(114,101,100,117,99,116,105,111,110,115,95,114,95,55,57,0);
          let downT: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,122,95,50,53,0),896], [String.fromCharCode(98,95,51,48,95,105,100,101,110,116,105,102,101,114,0),675]]);
         smallJ = new Map([[`${downT.size}`, redscoreballw.length]]);
         iconcalendarf = `${iconcalendarf.length}`;
         downT = new Map([[iconcalendarf, iconcalendarf.length % (Math.max(1, 4))]]);
         if (episodesA) {
            break;
         }
      } while (episodesA && (5 <= (smallJ.size + redscoreballw.length) || (redscoreballw.length + smallJ.size) <= 5));
      if (!redscoreballw.endsWith(`${smallJ.size}`)) {
         smallJ.set(`${redscoreballw}`, 3 - smallJ.size);
      }
      lessN /= Math.max(5, componentregistryu);
      icontransferclubl += `${componentregistryu + 2}`;
      mbnativeZ = 54 >= componentregistryu && smallbrightnessu.length >= 54;
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
    isLocked: showControls,
    toggleLock: () => {
      setIsLocked(!isLocked)
    }
  }))

  const changeControlsState = () => {
       let whitevideolive9 = 5;
    let scorepopsoundv: Array<any> = [7, 166, 316];
    let reactnativejs7: Map<any, any> = new Map([[String.fromCharCode(97,95,56,52,95,103,114,97,100,0),762], [String.fromCharCode(99,121,117,118,95,50,95,55,49,0),619], [String.fromCharCode(115,95,50,48,95,106,117,108,105,97,110,100,97,121,0),332]]);
    let iconadslink9: Array<any> = [214, 555, 372];
    let auto_wP: Array<any> = [String.fromCharCode(105,95,54,95,99,97,112,97,98,105,108,105,116,105,101,115,0), String.fromCharCode(115,95,57,49,95,98,97,99,107,108,105,103,104,116,0)];
    let icondefaultthumbnailJ = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,55,95,52,57,0);
    let libcxxcomponentst = 3.0;
    let mbbannerP = String.fromCharCode(101,95,53,51,95,98,111,111,116,104,0);
    let episode4 = true;
    let defaultplayerimgM = String.fromCharCode(111,95,51,56,95,114,101,103,105,115,116,101,114,0);
       let backwhite4 = 1.0;
         backwhite4 /= Math.max(parseFloat(`${parseInt(`${backwhite4}`)}`), 1);
         backwhite4 -= parseFloat(`${2 + parseInt(`${backwhite4}`)}`);
      while (backwhite4 >= backwhite4) {
          let contextv = String.fromCharCode(114,103,98,112,108,117,115,95,102,95,55,56,0);
          let libbufferu = String.fromCharCode(118,100,115,111,95,113,95,55,0);
          let nendk: Array<any> = [365, 768];
          let backicon1 = 5.0;
          let brightnessR = String.fromCharCode(121,95,52,49,95,118,120,119,111,114,107,115,0);
         backwhite4 += parseFloat(`${contextv.length / (Math.max(7, parseInt(`${backicon1}`)))}`);
         contextv = `${nendk.length}`;
         libbufferu = `${3 << (Math.min(5, brightnessR.length))}`;
         nendk.push(brightnessR.length << (Math.min(Math.abs(1), 5)));
         backicon1 *= (String.fromCharCode(102,0) == libbufferu ? nendk.length : libbufferu.length);
         break;
      }
      icondefaultthumbnailJ += `${((episode4 ? 2 : 1))}`;
   let h_imageu = 8373979 >= mbbannerP.length;
   do {
      mbbannerP += `${reactnativejs7.size * scorepopsoundv.length}`;
      if (h_imageu) {
         break;
      }
   } while (h_imageu && (5 <= (mbbannerP.length << (Math.min(1, Math.abs(whitevideolive9)))) && 5 <= (whitevideolive9 << (Math.min(mbbannerP.length, 1)))));
       let issubI = String.fromCharCode(105,109,99,100,97,116,97,95,117,95,52,54,0);
         issubI = `${issubI.length | issubI.length}`;
      for (let s = 0; s < 2; s++) {
         issubI = `${issubI.length + 1}`;
      }
      let reactZ = issubI.length >= 5846890;
      do {
         issubI = `${issubI.length}`;
         if (reactZ) {
            break;
         }
      } while ((issubI != issubI) && reactZ);
      libcxxcomponentst *= parseFloat(`${3}`);
      scorepopsoundv.push(((episode4 ? 5 : 3)));
   let whitesmalltick_ = episode4 ? !episode4 : episode4;
   do {
       let imagenetworkerrq = true;
       let projectZ = String.fromCharCode(103,105,116,104,117,98,95,106,95,53,53,0);
       let scorepopsoundT = 4;
       let sigmoba = 5.0;
       let stepR = String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,112,95,50,54,0);
      let nativemodulei = String.fromCharCode(117,112,48,105,52,97,57,103,0) == stepR;
      do {
         stepR = `${((imagenetworkerrq ? 2 : 2) ^ projectZ.length)}`;
         if (nativemodulei) {
            break;
         }
      } while (nativemodulei && (3.50 > (1.88 * sigmoba) && 1 > (4 & stepR.length)));
      while (projectZ.startsWith(`${scorepopsoundT}`)) {
         projectZ = `${(String.fromCharCode(122,0) == stepR ? stepR.length : parseInt(`${sigmoba}`))}`;
         break;
      }
         sigmoba /= Math.max(5, 3 / (Math.max(9, parseInt(`${sigmoba}`))));
      for (let j = 0; j < 2; j++) {
          let shirtK = 5.0;
          let progressj: Array<any> = [526, 358];
          let huaweia = String.fromCharCode(100,97,112,112,95,52,95,56,56,0);
          let arrowselectdownN: Array<any> = [String.fromCharCode(116,105,109,101,98,97,115,101,95,107,95,56,53,0), String.fromCharCode(104,95,53,53,95,98,108,105,116,0), String.fromCharCode(109,95,52,48,95,102,105,110,103,101,114,0)];
         stepR += `${stepR.length | 3}`;
         shirtK *= parseFloat(`${2}`);
         progressj.push(2 - progressj.length);
         huaweia = "3";
         arrowselectdownN = [huaweia.length];
      }
         projectZ = `${1 ^ stepR.length}`;
      if ((sigmoba - 2.74) == 5.55 && 5.87 == (sigmoba - 2.74)) {
         stepR = `${parseInt(`${sigmoba}`) + 3}`;
      }
      if ((scorepopsoundT & 5) <= 2) {
         scorepopsoundT >>= Math.min(2, Math.abs((String.fromCharCode(97,0) == stepR ? scorepopsoundT : stepR.length)));
      }
         sigmoba += 3 - scorepopsoundT;
          let iconeyee = String.fromCharCode(99,95,57,56,95,112,99,97,112,0);
         sigmoba /= Math.max(projectZ.length + stepR.length, 3);
         iconeyee += "3";
      let types4 = imagenetworkerrq ? !imagenetworkerrq : imagenetworkerrq;
      do {
         imagenetworkerrq = imagenetworkerrq && scorepopsoundT == 17;
         if (types4) {
            break;
         }
      } while (types4 && (!stepR.includes(`${imagenetworkerrq}`)));
      for (let b = 0; b < 2; b++) {
         stepR = `${projectZ.length}`;
      }
         sigmoba /= Math.max(3 ^ stepR.length, 3);
          let iconadslinkG = String.fromCharCode(108,95,52,54,95,103,101,110,101,114,97,103,101,0);
          let splashX = String.fromCharCode(113,95,55,49,0);
          let defaultfootballbgm = 2.0;
         projectZ += `${((imagenetworkerrq ? 1 : 5))}`;
         iconadslinkG = `${parseInt(`${defaultfootballbgm}`)}`;
         splashX += "3";
         defaultfootballbgm *= 2;
      if (!imagenetworkerrq) {
         imagenetworkerrq = scorepopsoundT <= projectZ.length;
      }
         sigmoba /= Math.max(parseInt(`${sigmoba}`) << (Math.min(5, Math.abs(1))), 5);
      episode4 = (auto_wP.length >> (Math.min(Math.abs(reactnativejs7.size), 1))) == 45;
      if (whitesmalltick_) {
         break;
      }
   } while (whitesmalltick_ && (auto_wP.length > 1));
      scorepopsoundv = [auto_wP.length];
       let libavcodecv = String.fromCharCode(103,95,49,51,95,103,101,110,101,114,97,108,105,115,101,100,0);
       let rulesf: Array<any> = [String.fromCharCode(115,95,56,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0), String.fromCharCode(113,95,57,53,95,119,114,105,116,101,120,0)];
       let temperatures = 0;
       let benefit3: Map<any, any> = new Map([[String.fromCharCode(115,109,105,108,95,108,95,54,52,0),960], [String.fromCharCode(114,103,101,110,95,57,95,50,54,0),861]]);
       let editE: Map<any, any> = new Map([[String.fromCharCode(122,95,54,55,95,99,111,114,101,105,109,97,103,101,0),String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,118,95,51,0)], [String.fromCharCode(99,111,117,110,116,114,105,101,115,95,103,95,52,52,0),String.fromCharCode(97,95,51,51,95,100,117,114,97,116,105,111,110,0)]]);
      for (let e = 0; e < 2; e++) {
          let photo6 = 4.0;
          let emptyY = 4.0;
         temperatures %= Math.max(3, 4);
         photo6 /= Math.max(parseInt(`${emptyY}`), 4);
         emptyY /= Math.max(3, parseFloat(`${parseInt(`${emptyY}`) | 3}`));
      }
       let recommendation5: Array<any> = [925, 358];
       let appleQ: Array<any> = [453, 636, 427];
       let auto_lP = 5.0;
         benefit3 = new Map([[`${rulesf.length}`, 3 << (Math.min(Math.abs(temperatures), 3))]]);
          let blackt = 2.0;
         benefit3 = new Map([[`${rulesf.length}`, (libavcodecv == String.fromCharCode(77,0) ? rulesf.length : libavcodecv.length)]]);
         blackt *= parseFloat(`${1 - parseInt(`${blackt}`)}`);
      for (let f = 0; f < 2; f++) {
         appleQ.push(rulesf.length);
      }
         rulesf.push(editE.size - 3);
          let teamdetailsbgk = 4;
          let push_ = String.fromCharCode(113,95,53,52,95,100,121,108,105,98,115,0);
         auto_lP += parseFloat(`${rulesf.length ^ teamdetailsbgk}`);
         teamdetailsbgk -= push_.length * push_.length;
      icondefaultthumbnailJ = `${1 ^ defaultplayerimgM.length}`;
      defaultplayerimgM += `${reactnativejs7.size}`;
      auto_wP = [icondefaultthumbnailJ.length];
   if (episode4) {
      episode4 = 38 == auto_wP.length;
   }
   if (!episode4) {
      episode4 = !episode4;
   }
       let bggradientg: Map<any, any> = new Map([[String.fromCharCode(97,95,49,56,95,112,114,101,99,111,109,112,0),false ], [String.fromCharCode(118,95,49,56,95,118,97,108,105,100,97,116,111,114,115,0),false ]]);
      for (let h = 0; h < 1; h++) {
         bggradientg.set(`${bggradientg.size}`, bggradientg.size * bggradientg.size);
      }
      let executorb = bggradientg.size >= 6472307;
      do {
         bggradientg.set(`${bggradientg.size}`, bggradientg.size + 2);
         if (executorb) {
            break;
         }
      } while ((bggradientg.size == bggradientg.size) && executorb);
      while (!Array.from(bggradientg.keys()).includes(`${bggradientg.size}`)) {
         bggradientg.set(`${bggradientg.size}`, bggradientg.size - 1);
         break;
      }
      mbbannerP = `${bggradientg.size - 3}`;
   for (let n = 0; n < 1; n++) {
       let themeL: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,100,95,98,95,55,55,0),339], [String.fromCharCode(116,111,117,99,104,101,115,95,122,95,50,50,0),839], [String.fromCharCode(118,95,52,57,95,116,111,108,101,114,97,110,99,101,0),944]]);
       let kuaishouo = true;
       let flipperC = true;
      let servicec = flipperC ? !flipperC : flipperC;
      do {
         flipperC = !flipperC && !kuaishouo;
         if (servicec) {
            break;
         }
      } while ((1 > themeL.size) && servicec);
      for (let t = 0; t < 3; t++) {
          let airbnbstary: Array<any> = [String.fromCharCode(106,95,55,55,95,97,108,108,0), String.fromCharCode(105,110,112,117,116,120,95,48,95,49,57,0)];
          let uimanagerI: Map<any, any> = new Map([[String.fromCharCode(111,95,55,55,95,99,97,115,116,115,0),129], [String.fromCharCode(111,112,97,99,105,116,121,95,111,95,51,53,0),501]]);
          let handlerZ = 4.0;
          let iconrightorange4 = 5.0;
         themeL = new Map([[`${themeL.size}`, 3]]);
         airbnbstary = [parseInt(`${iconrightorange4}`)];
         uimanagerI.set(`${iconrightorange4}`, 2 * parseInt(`${handlerZ}`));
         handlerZ *= parseInt(`${handlerZ}`) << (Math.min(5, Math.abs(parseInt(`${iconrightorange4}`))));
      }
      let subs7 = kuaishouo ? !kuaishouo : kuaishouo;
      do {
          let minivodc: Map<any, any> = new Map([[String.fromCharCode(117,114,97,110,100,111,109,95,100,95,55,52,0),false ], [String.fromCharCode(109,97,107,101,95,97,95,50,56,0),true ]]);
          let profilea: Array<any> = [String.fromCharCode(115,95,53,48,95,101,110,117,109,101,114,97,116,111,114,115,0), String.fromCharCode(112,101,105,114,115,95,106,95,55,48,0), String.fromCharCode(104,95,54,95,99,111,100,101,114,0)];
          let default_9kz = true;
          let greenarrowupg = String.fromCharCode(97,108,105,97,115,95,118,95,50,50,0);
          let disconnectedS = String.fromCharCode(100,117,114,98,95,106,95,55,52,0);
         kuaishouo = !default_9kz;
         minivodc = new Map([[disconnectedS, greenarrowupg.length]]);
         profilea.push(greenarrowupg.length);
         default_9kz = (profilea.length / (Math.max(2, disconnectedS.length))) <= 3;
         if (subs7) {
            break;
         }
      } while (subs7 && ((4 / (Math.max(8, themeL.size))) <= 3));
      while (kuaishouo) {
         kuaishouo = null == themeL.get(`${kuaishouo}`);
         break;
      }
          let iconclosewhitewithbga = String.fromCharCode(99,104,97,114,97,99,116,101,114,115,95,121,95,57,51,0);
          let chartJ = String.fromCharCode(102,95,51,51,95,115,97,110,105,116,121,0);
          let buttonO = 0.0;
         flipperC = iconclosewhitewithbga == chartJ;
         iconclosewhitewithbga = "2";
         chartJ += `${parseInt(`${buttonO}`)}`;
         themeL.set(`${kuaishouo}`, (1 & (kuaishouo ? 4 : 2)));
      while ((themeL.size ^ 5) < 1) {
         themeL.set(`${flipperC}`, (3 / (Math.max((flipperC ? 5 : 5), 5))));
         break;
      }
         flipperC = (kuaishouo ? flipperC : kuaishouo);
       let whitebellg = String.fromCharCode(105,110,116,114,97,112,114,101,100,95,102,95,57,54,0);
      defaultplayerimgM += `${2 % (Math.max(3, icondefaultthumbnailJ.length))}`;
   }
   let elementsD = 8534906 >= iconadslink9.length;
   do {
       let moonO = String.fromCharCode(115,108,97,115,104,105,110,103,95,106,95,55,55,0);
       let stepn: Map<any, any> = new Map([[String.fromCharCode(104,95,55,55,95,97,99,99,101,112,116,115,0),264], [String.fromCharCode(101,110,99,104,95,114,95,51,53,0),638], [String.fromCharCode(106,115,105,109,100,99,112,117,95,98,95,56,49,0),688]]);
       let overk = false;
       let positionfieldH = String.fromCharCode(103,95,57,53,95,116,101,120,116,98,111,120,0);
      if (!positionfieldH.endsWith(`${overk}`)) {
         overk = !positionfieldH.endsWith(`${overk}`);
      }
      while (!overk) {
         overk = positionfieldH.length <= 57;
         break;
      }
      let logoutG = moonO.length <= 7770686;
      do {
         moonO += `${stepn.size}`;
         if (logoutG) {
            break;
         }
      } while (logoutG && (positionfieldH == String.fromCharCode(100,0)));
          let frame_p8c = false;
          let twitter0 = String.fromCharCode(101,110,111,117,103,104,95,113,95,48,0);
          let megaphoneC = String.fromCharCode(105,110,116,114,97,120,104,117,102,95,109,95,56,51,0);
         overk = 81 == megaphoneC.length;
         frame_p8c = !frame_p8c;
         twitter0 = `${(twitter0 == String.fromCharCode(52,0) ? (frame_p8c ? 4 : 4) : twitter0.length)}`;
         megaphoneC += `${((frame_p8c ? 4 : 4))}`;
          let sourcec = 2;
          let datag: Array<any> = [770, 972];
          let elementsV: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,119,97,114,110,105,110,103,115,0),99], [String.fromCharCode(119,95,53,53,95,117,116,116,111,110,0),379], [String.fromCharCode(104,95,49,56,95,104,101,97,100,105,110,103,0),574]]);
         overk = elementsV.get(`${sourcec}`) == null;
         sourcec /= Math.max(1, 1 + datag.length);
         datag.push(2);
         stepn.set(moonO, moonO.length);
         overk = (stepn.size >> (Math.min(positionfieldH.length, 2))) >= 58;
         stepn.set(positionfieldH, moonO.length >> (Math.min(Math.abs(2), 4)));
         positionfieldH += `${(String.fromCharCode(83,0) == positionfieldH ? positionfieldH.length : moonO.length)}`;
       let manifesta: Map<any, any> = new Map([[String.fromCharCode(119,95,57,50,95,114,101,99,111,110,105,110,116,114,97,120,0),60], [String.fromCharCode(110,95,50,55,95,116,101,120,116,109,111,118,115,117,98,0),407]]);
         stepn.set(moonO, 2);
         stepn = new Map([[positionfieldH, 1]]);
      iconadslink9 = [icondefaultthumbnailJ.length + whitevideolive9];
      if (elementsD) {
         break;
      }
   } while (elementsD && ((iconadslink9.length / 4) > 2 || iconadslink9.length > 4));
      reactnativejs7.set(mbbannerP, icondefaultthumbnailJ.length);
      mbbannerP += "1";
   for (let t = 0; t < 1; t++) {
       let loadingspinnerX = String.fromCharCode(108,105,99,101,110,115,101,115,95,112,95,50,57,0);
       let sharewhiteu = 0.0;
       let sellg = 0.0;
       let indicatorm: Array<any> = [String.fromCharCode(98,95,56,50,95,109,97,103,105,99,0), String.fromCharCode(112,95,56,95,109,112,101,103,112,105,99,116,117,114,101,0), String.fromCharCode(104,95,50,49,95,99,117,115,116,111,109,105,122,101,0)];
       let weatherf: Array<any> = [888, 604];
       let othermatchdetailbgM: Array<any> = [427, 182];
          let zoom_: Array<any> = [110, 583];
          let sheetN = 3.0;
         othermatchdetailbgM = [weatherf.length << (Math.min(Math.abs(1), 4))];
         zoom_.push(2);
         sheetN += parseFloat(`${2}`);
          let arrowselectdownT: Map<any, any> = new Map([[String.fromCharCode(120,95,49,55,95,119,111,114,107,101,114,115,0),80], [String.fromCharCode(99,95,53,54,95,116,104,105,99,107,110,101,115,115,0),102]]);
          let iconwatchC = String.fromCharCode(114,111,98,105,110,95,98,95,50,52,0);
         indicatorm.push(iconwatchC.length);
         arrowselectdownT = new Map([[`${arrowselectdownT.size}`, arrowselectdownT.size]]);
         iconwatchC += `${arrowselectdownT.size << (Math.min(3, Math.abs(arrowselectdownT.size)))}`;
      for (let x = 0; x < 2; x++) {
         loadingspinnerX += `${parseInt(`${sharewhiteu}`) - 1}`;
      }
          let iconwechatF = 3.0;
         weatherf = [loadingspinnerX.length];
         iconwechatF *= parseFloat(`${parseInt(`${iconwechatF}`)}`);
      if (3 <= indicatorm.length) {
          let delegate_tc = 3.0;
          let confirmationF: Map<any, any> = new Map([[String.fromCharCode(105,95,50,95,109,101,115,115,115,97,103,101,0),289], [String.fromCharCode(108,111,103,111,117,116,95,99,95,52,52,0),466]]);
          let logoP = 5.0;
          let resultm = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,57,95,56,48,0);
          let screenZ = 5.0;
         indicatorm.push(weatherf.length * 3);
         delegate_tc /= Math.max(1, parseFloat(`${parseInt(`${logoP}`) >> (Math.min(resultm.length, 2))}`));
         confirmationF.set(resultm, (String.fromCharCode(97,0) == resultm ? parseInt(`${screenZ}`) : resultm.length));
         logoP /= Math.max(4, parseFloat(`${parseInt(`${logoP}`) << (Math.min(Math.abs(3), 2))}`));
         screenZ += (parseFloat(`${resultm == String.fromCharCode(55,0) ? parseInt(`${delegate_tc}`) : resultm.length}`));
      }
          let dicee = String.fromCharCode(106,95,55,95,118,112,100,101,99,0);
          let modelsi: Array<any> = [621, 538, 534];
         sellg += parseFloat(`${3}`);
         dicee += `${modelsi.length % (Math.max(6, dicee.length))}`;
         modelsi.push(modelsi.length >> (Math.min(Math.abs(1), 4)));
          let whitevideolive_: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,95,109,95,51,50,0),true ], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,104,95,52,50,0),false ]]);
          let catagoryN = String.fromCharCode(110,95,57,51,95,117,112,108,105,110,107,0);
          let ajaxW = String.fromCharCode(118,111,116,101,100,95,100,95,56,0);
         othermatchdetailbgM = [1 * parseInt(`${sharewhiteu}`)];
         whitevideolive_.set(catagoryN, catagoryN.length);
         ajaxW = `${catagoryN.length + 3}`;
      if (4 == weatherf.length) {
          let basketballiconl: Array<any> = [35, 650, 48];
          let bottom_: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,113,117,111,116,101,95,107,95,56,52,0),19], [String.fromCharCode(113,95,51,52,95,115,99,114,117,98,98,101,114,0),815], [String.fromCharCode(109,117,116,117,97,108,95,113,95,51,56,0),70]]);
          let animation_ = 2.0;
          let overi = 0.0;
         weatherf = [parseInt(`${sellg}`) << (Math.min(othermatchdetailbgM.length, 5))];
         basketballiconl = [basketballiconl.length];
         bottom_ = new Map([[`${bottom_.size}`, bottom_.size ^ parseInt(`${overi}`)]]);
         animation_ *= bottom_.size + 1;
         overi += parseInt(`${animation_}`) - 2;
      }
       let episodei: Array<any> = [524, 633];
       let iconarrowrightwhitep: Array<any> = [803, 180, 955];
      while ((4 << (Math.min(2, indicatorm.length))) == 4) {
          let manifestd: Array<any> = [64, 435];
          let cricket5 = 4;
          let containerD = false;
          let homeiconP = String.fromCharCode(100,95,55,49,95,118,115,105,110,107,0);
         indicatorm = [indicatorm.length];
         manifestd = [((containerD ? 2 : 5))];
         cricket5 += cricket5;
         containerD = 82 > cricket5;
         homeiconP = `${2 >> (Math.min(4, manifestd.length))}`;
         break;
      }
      if (weatherf.length == loadingspinnerX.length) {
          let nodec = false;
          let iconrightorangeK: Array<any> = [String.fromCharCode(102,95,57,57,95,118,97,108,105,100,97,116,111,114,0), String.fromCharCode(99,111,100,101,115,116,114,101,97,109,95,112,95,54,0)];
          let selectE = 4.0;
         loadingspinnerX = "1";
         nodec = iconrightorangeK.includes(selectE);
         iconrightorangeK.push(parseInt(`${selectE}`) + iconrightorangeK.length);
      }
      scorepopsoundv = [defaultplayerimgM.length];
   }

    setShowControls(!showControls);

      scorepopsoundv = [whitevideolive9 - iconadslink9.length];
   let typingloadingz = 7836440 <= iconadslink9.length;
   do {
      iconadslink9 = [mbbannerP.length];
      if (typingloadingz) {
         break;
      }
   } while (typingloadingz && (5 >= auto_wP.length));
   for (let g = 0; g < 1; g++) {
       let successJ = 2;
          let libreactM = false;
          let ocopy_2e = 1.0;
          let tramini0 = 3.0;
         successJ >>= Math.min(Math.abs(1), 2);
         libreactM = 89.50 <= tramini0;
         ocopy_2e -= parseFloat(`${2}`);
         tramini0 /= Math.max(parseInt(`${tramini0}`) >> (Math.min(5, Math.abs(parseInt(`${ocopy_2e}`)))), 5);
      if (2 >= (successJ - 4) || (4 - successJ) >= 3) {
         successJ -= 3 >> (Math.min(3, Math.abs(successJ)));
      }
       let iconsharefriendsY: Array<any> = [187, 140, 723];
       let type_am: Array<any> = [String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,122,95,56,54,0), String.fromCharCode(114,103,116,99,117,95,117,95,53,48,0), String.fromCharCode(112,95,57,51,95,105,109,112,111,114,116,97,98,108,101,0)];
      reactnativejs7.set(`${whitevideolive9}`, whitevideolive9);
   }
      defaultplayerimgM = `${(mbbannerP == String.fromCharCode(51,0) ? auto_wP.length : mbbannerP.length)}`;
   for (let y = 0; y < 1; y++) {
      reactnativejs7 = new Map([[`${libcxxcomponentst}`, parseInt(`${libcxxcomponentst}`) + 2]]);
   }
      episode4 = parseFloat(`${defaultplayerimgM.length}`) > libcxxcomponentst;
      whitevideolive9 |= auto_wP.length & 2;
   for (let b = 0; b < 3; b++) {
      scorepopsoundv = [whitevideolive9];
   }
       let homeloading0 = 4.0;
       let changez = String.fromCharCode(106,95,53,54,95,109,97,99,101,120,97,109,112,108,101,0);
       let chatroombackgroundo = 3.0;
      let positionfieldJ = String.fromCharCode(120,49,114,0) == changez;
      do {
          let phonel = String.fromCharCode(115,111,114,101,99,101,105,118,101,95,48,95,56,50,0);
         changez = "2";
         phonel = `${phonel.length % (Math.max(1, 6))}`;
         if (positionfieldJ) {
            break;
         }
      } while (((parseFloat(`${changez.length}`) - chatroombackgroundo) <= 2.14) && positionfieldJ);
         chatroombackgroundo /= Math.max(parseFloat(`${changez.length}`), 4);
         chatroombackgroundo *= (parseFloat(`${changez == String.fromCharCode(57,0) ? changez.length : parseInt(`${homeloading0}`)}`));
      for (let d = 0; d < 1; d++) {
         chatroombackgroundo *= parseFloat(`${parseInt(`${chatroombackgroundo}`)}`);
      }
      while (1.6 > homeloading0) {
         chatroombackgroundo *= parseFloat(`${changez.length}`);
         break;
      }
      let typingV = chatroombackgroundo >= 9093082.0;
      do {
          let sharedn = String.fromCharCode(102,102,117,114,108,95,51,95,49,55,0);
          let awayicon6 = String.fromCharCode(119,95,53,48,95,105,110,99,114,101,97,115,101,0);
          let downloadingF = 4.0;
          let componentn = String.fromCharCode(102,105,108,101,102,117,110,99,95,55,95,56,50,0);
         chatroombackgroundo /= Math.max(2, parseFloat(`${parseInt(`${downloadingF}`) % (Math.max(awayicon6.length, 5))}`));
         sharedn = `${componentn.length * sharedn.length}`;
         awayicon6 = `${sharedn.length - componentn.length}`;
         downloadingF += parseFloat(`${1 - sharedn.length}`);
         if (typingV) {
            break;
         }
      } while ((!changez.includes(`${chatroombackgroundo}`)) && typingV);
         chatroombackgroundo *= parseFloat(`${parseInt(`${homeloading0}`)}`);
         changez += `${changez.length}`;
       let langG = 4;
      episode4 = reactnativejs7.size <= icondefaultthumbnailJ.length;
   while (2 == (mbbannerP.length * 2)) {
      mbbannerP += `${mbbannerP.length}`;
      break;
   }
       let upgradep = 3;
       let plusu: Map<any, any> = new Map([[String.fromCharCode(118,101,114,98,111,115,101,95,122,95,57,56,0),916], [String.fromCharCode(100,99,116,101,108,101,109,95,115,95,50,55,0),6], [String.fromCharCode(120,95,54,95,99,97,108,99,117,97,108,116,101,0),241]]);
       let leakcheckerk = String.fromCharCode(99,95,52,49,95,118,105,116,99,0);
         upgradep >>= Math.min(2, Math.abs((leakcheckerk == String.fromCharCode(75,0) ? plusu.size : leakcheckerk.length)));
         upgradep *= 1;
          let scheduleJ = String.fromCharCode(117,110,114,101,109,111,118,97,98,108,101,95,107,95,53,54,0);
         upgradep ^= 3 | scheduleJ.length;
      if (4 < (2 * plusu.size)) {
          let screenS = 1;
          let submit9 = String.fromCharCode(106,95,52,54,95,101,118,101,110,116,115,0);
          let nendkx: Map<any, any> = new Map([[String.fromCharCode(109,95,50,51,95,103,108,111,98,97,108,0),456], [String.fromCharCode(97,95,52,51,95,115,97,109,112,108,101,100,0),462]]);
         plusu.set(submit9, screenS);
         screenS ^= 1 + nendkx.size;
         submit9 = "2";
      }
      for (let s = 0; s < 2; s++) {
         leakcheckerk += `${upgradep << (Math.min(Math.abs(plusu.size), 5))}`;
      }
         leakcheckerk += `${(String.fromCharCode(110,0) == leakcheckerk ? plusu.size : leakcheckerk.length)}`;
      let stats7 = 5022292 >= plusu.size;
      do {
          let alertz = String.fromCharCode(120,95,55,57,95,99,108,117,116,115,0);
         plusu = new Map([[`${plusu.size}`, 1 << (Math.min(5, Math.abs(plusu.size)))]]);
         alertz += `${3 + alertz.length}`;
         if (stats7) {
            break;
         }
      } while (stats7 && ((1 << (Math.min(3, leakcheckerk.length))) > 3));
      while (Array.from(plusu.keys()).includes(`${upgradep}`)) {
         upgradep ^= plusu.size;
         break;
      }
      if (1 == (upgradep * plusu.size) && (plusu.size * 1) == 1) {
         plusu = new Map([[`${plusu.size}`, plusu.size + leakcheckerk.length]]);
      }
      defaultplayerimgM += `${defaultplayerimgM.length * upgradep}`;
   while (icondefaultthumbnailJ.length == auto_wP.length) {
      icondefaultthumbnailJ += `${reactnativejs7.size % 1}`;
      break;
   }
       let notificationi = 2.0;
       let z_unlockb: Array<any> = [99, 305, 364];
       let footballtrophyA: Array<any> = [717, 231];
         notificationi *= parseFloat(`${z_unlockb.length}`);
       let schedulev = String.fromCharCode(98,95,51,50,95,101,120,116,101,114,110,97,108,0);
       let viewsB = String.fromCharCode(121,117,118,95,107,95,56,49,0);
      if (viewsB.length > 5 || schedulev == String.fromCharCode(68,0)) {
          let libglog9 = 0;
         viewsB += `${schedulev.length}`;
         libglog9 |= 2;
      }
         notificationi *= parseFloat(`${schedulev.length}`);
         footballtrophyA.push(parseInt(`${notificationi}`) - viewsB.length);
      for (let p = 0; p < 1; p++) {
         notificationi += parseFloat(`${schedulev.length}`);
      }
         schedulev += `${parseInt(`${notificationi}`) | 3}`;
          let xvodU: Map<any, any> = new Map([[String.fromCharCode(102,95,53,50,95,98,108,117,101,116,111,111,116,104,0),760], [String.fromCharCode(114,95,52,49,95,102,111,108,100,0),964]]);
          let iconO: Array<any> = [936, 620, 603];
         schedulev = `${xvodU.size ^ parseInt(`${notificationi}`)}`;
         xvodU = new Map([[`${iconO.length}`, iconO.length]]);
          let neon4 = true;
          let tooltipsU = String.fromCharCode(120,95,49,95,110,105,100,115,0);
         footballtrophyA = [(1 - (neon4 ? 1 : 5))];
         neon4 = (tooltipsU.length >> (Math.min(4, tooltipsU.length))) <= 36;
      icondefaultthumbnailJ = `${defaultplayerimgM.length % 1}`;
      libcxxcomponentst *= parseFloat(`${3}`);
      mbbannerP = `${iconadslink9.length}`;
   let megaphone3 = 6470310 >= auto_wP.length;
   do {
      auto_wP = [(icondefaultthumbnailJ == String.fromCharCode(84,0) ? icondefaultthumbnailJ.length : parseInt(`${libcxxcomponentst}`))];
      if (megaphone3) {
         break;
      }
   } while (((auto_wP.length * reactnativejs7.size) > 3 && 4 > (3 * auto_wP.length)) && megaphone3);
      reactnativejs7.set(`${libcxxcomponentst}`, 3 | parseInt(`${libcxxcomponentst}`));
    delayControls();
  };

  const clearHidingDelay = () => {
       let greeny = 1.0;
    let livesharee = String.fromCharCode(119,97,105,116,95,111,95,53,48,0);
    let telemetryv = String.fromCharCode(114,95,55,50,95,104,114,101,97,100,0);
    let appsL = String.fromCharCode(119,95,56,53,95,112,97,116,99,104,115,101,116,0);
    let logoK = String.fromCharCode(103,95,51,57,95,108,105,110,107,0);
    let modityh = 5.0;
    let carouselz = false;
    let noden = false;
    let layouto = String.fromCharCode(118,95,48,95,97,105,102,102,0);
    let signinupW = 3.0;
    let iconmore6 = 4.0;
    let sina9 = String.fromCharCode(106,95,55,51,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
      livesharee = `${2 * telemetryv.length}`;
       let iconsubssuccessh: Map<any, any> = new Map([[String.fromCharCode(117,95,49,56,95,114,101,115,112,0),536], [String.fromCharCode(108,95,51,50,95,99,104,114,111,110,111,0),448], [String.fromCharCode(108,101,98,110,95,99,95,55,53,0),68]]);
       let filterj = String.fromCharCode(101,95,51,55,95,99,111,100,101,114,115,0);
       let sellmathbackgroundo = String.fromCharCode(118,99,97,99,100,97,116,97,95,102,95,51,53,0);
       let fillZ = 2;
       let kick_ = 0;
          let selected8 = 2;
          let mounting0 = String.fromCharCode(111,111,108,116,105,112,95,98,95,52,53,0);
         sellmathbackgroundo += `${(sellmathbackgroundo == String.fromCharCode(49,0) ? sellmathbackgroundo.length : mounting0.length)}`;
         selected8 %= Math.max(selected8 | 1, 2);
         mounting0 = `${selected8 / 1}`;
          let mbridgeZ = String.fromCharCode(100,111,109,105,110,97,110,116,95,52,95,54,51,0);
          let yellowredcardN = 1.0;
          let libreanimated0 = String.fromCharCode(114,101,113,117,101,115,116,105,110,103,95,57,95,49,48,48,0);
         sellmathbackgroundo += `${(filterj == String.fromCharCode(90,0) ? filterj.length : sellmathbackgroundo.length)}`;
         mbridgeZ = `${(String.fromCharCode(104,0) == mbridgeZ ? parseInt(`${yellowredcardN}`) : mbridgeZ.length)}`;
         yellowredcardN += 1;
         libreanimated0 = `${1 ^ parseInt(`${yellowredcardN}`)}`;
       let controlD: Map<any, any> = new Map([[String.fromCharCode(99,111,111,107,105,101,115,95,109,95,49,48,0),931], [String.fromCharCode(115,95,52,53,95,99,116,120,105,100,120,105,110,99,0),308]]);
      for (let j = 0; j < 3; j++) {
         filterj += `${controlD.size + sellmathbackgroundo.length}`;
      }
         iconsubssuccessh = new Map([[`${iconsubssuccessh.size}`, iconsubssuccessh.size / (Math.max(filterj.length, 4))]]);
         filterj = `${(filterj == String.fromCharCode(85,0) ? kick_ : filterj.length)}`;
      for (let n = 0; n < 1; n++) {
         filterj += "1";
      }
         sellmathbackgroundo += `${filterj.length}`;
      signinupW *= (parseFloat(`${filterj == String.fromCharCode(56,0) ? livesharee.length : filterj.length}`));
   for (let j = 0; j < 3; j++) {
      noden = parseInt(`${signinupW}`) > layouto.length;
   }
      livesharee = "1";
   for (let g = 0; g < 1; g++) {
      noden = 89.66 < modityh && 89.66 < signinupW;
   }
       let bellreminder0 = String.fromCharCode(102,95,53,55,95,115,118,101,99,116,111,114,0);
       let stepi: Array<any> = [384, 753, 171];
       let cornershootQ = 1.0;
       let lightu = 2.0;
       let leakchecker9 = String.fromCharCode(117,95,49,53,95,115,113,117,97,114,101,115,0);
         lightu /= Math.max(parseInt(`${cornershootQ}`), 3);
       let predictionbannersharedy = String.fromCharCode(105,110,116,99,104,101,99,107,95,110,95,53,55,0);
         stepi.push(predictionbannersharedy.length / (Math.max(6, parseInt(`${lightu}`))));
         predictionbannersharedy = `${leakchecker9.length}`;
         predictionbannersharedy += "2";
      for (let d = 0; d < 1; d++) {
         bellreminder0 = `${parseInt(`${cornershootQ}`) << (Math.min(Math.abs(2), 5))}`;
      }
      while ((cornershootQ - predictionbannersharedy.length) > 3.35 && (3.35 - cornershootQ) > 4.21) {
          let splashp: Array<any> = [276, 704, 720];
         cornershootQ /= Math.max(splashp.length, 1);
         break;
      }
      layouto = `${bellreminder0.length}`;
   while (5.66 == modityh) {
      modityh *= (logoK == String.fromCharCode(95,0) ? parseInt(`${modityh}`) : logoK.length);
      break;
   }
      telemetryv += `${appsL.length & 2}`;
      logoK = `${parseInt(`${greeny}`) / 3}`;
   for (let a = 0; a < 1; a++) {
      logoK += `${parseInt(`${signinupW}`) | 2}`;
   }
   if (signinupW <= 4.44) {
       let shielddoner = String.fromCharCode(112,95,56,57,95,110,111,118,101,99,0);
       let sheetV = String.fromCharCode(112,111,115,116,105,110,103,95,116,95,56,48,0);
       let roundJ = String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,110,95,54,48,0);
       let stepo = String.fromCharCode(116,105,109,115,116,97,109,112,95,117,95,53,49,0);
       let singaporem = false;
      for (let v = 0; v < 1; v++) {
          let iconsharefriendsE = 2.0;
          let chartS = 3.0;
          let codegenP = 2.0;
          let package_vM = 4.0;
         roundJ += `${shielddoner.length}`;
         iconsharefriendsE *= parseFloat(`${2}`);
         chartS /= Math.max(parseFloat(`${3}`), 4);
         codegenP += parseInt(`${package_vM}`) % (Math.max(7, parseInt(`${codegenP}`)));
         package_vM /= Math.max(parseInt(`${chartS}`) | 3, 2);
      }
      if (stepo.startsWith(`${singaporem}`)) {
         singaporem = sheetV.length > stepo.length;
      }
       let modal_ = 1.0;
      for (let c = 0; c < 2; c++) {
         roundJ += `${((singaporem ? 1 : 3))}`;
      }
      while (4.93 >= (2.9 + modal_)) {
         singaporem = String.fromCharCode(76,0) == stepo;
         break;
      }
      while (modal_ > 2.61) {
         singaporem = stepo == roundJ;
         break;
      }
         shielddoner = `${((singaporem ? 2 : 2))}`;
      let airbnbstarZ = String.fromCharCode(50,112,110,119,122,0) == stepo;
      do {
         stepo += `${parseInt(`${modal_}`) & 2}`;
         if (airbnbstarZ) {
            break;
         }
      } while ((!singaporem) && airbnbstarZ);
      for (let a = 0; a < 1; a++) {
          let countryM = String.fromCharCode(117,110,100,101,114,101,115,116,105,109,97,116,101,100,95,102,95,51,56,0);
         sheetV += `${stepo.length * 2}`;
         countryM += `${2 >> (Math.min(1, countryM.length))}`;
      }
         modal_ *= 3 - roundJ.length;
         shielddoner += `${sheetV.length}`;
      greeny -= layouto.length;
   }
       let iconlogoutT = String.fromCharCode(97,95,54,55,95,97,114,114,97,121,0);
       let issubu = true;
       let inouttargetyellowi = true;
      let profileframeg = issubu ? !issubu : issubu;
      do {
         issubu = ((iconlogoutT.length & (!inouttargetyellowi ? 45 : iconlogoutT.length)) > 45);
         if (profileframeg) {
            break;
         }
      } while ((!issubu || !inouttargetyellowi) && profileframeg);
       let flagA = String.fromCharCode(104,95,49,48,48,95,115,99,111,112,101,105,100,0);
      livesharee += `${parseInt(`${modityh}`)}`;
       let episodeo = String.fromCharCode(110,95,51,48,95,112,114,111,109,111,116,101,100,0);
       let movies7 = String.fromCharCode(115,119,97,112,112,97,98,108,101,95,106,95,55,56,0);
      while (episodeo != String.fromCharCode(102,0)) {
         movies7 = `${episodeo.length}`;
         break;
      }
      if (episodeo == String.fromCharCode(118,0) || movies7.length > 3) {
          let goallogox = 2.0;
          let homeactivex = String.fromCharCode(99,111,110,99,104,95,102,95,49,57,0);
          let saveO = 4.0;
         episodeo += `${movies7.length & 3}`;
         goallogox /= Math.max(2, 3 % (Math.max(6, homeactivex.length)));
         homeactivex = `${2 ^ parseInt(`${goallogox}`)}`;
         saveO -= parseFloat(`${parseInt(`${goallogox}`) << (Math.min(homeactivex.length, 5))}`);
      }
         episodeo += `${movies7.length}`;
         movies7 = `${movies7.length}`;
         episodeo = `${1 << (Math.min(3, episodeo.length))}`;
       let bgvipxvod3: Array<any> = [String.fromCharCode(104,97,115,104,116,97,98,108,101,122,95,105,95,53,53,0), String.fromCharCode(121,109,105,110,112,117,116,95,53,95,50,53,0), String.fromCharCode(100,95,53,52,95,99,111,108,108,105,115,116,0)];
       let rocket0: Array<any> = [849, 489];
      carouselz = (appsL.length * modityh) >= 11.94;
      appsL = `${((carouselz ? 3 : 5))}`;
       let detailsJ: Map<any, any> = new Map([[String.fromCharCode(118,101,110,100,111,114,95,119,95,53,0),229], [String.fromCharCode(108,95,54,52,95,111,97,117,116,104,0),541], [String.fromCharCode(101,120,112,110,97,100,101,100,95,102,95,55,57,0),618]]);
         detailsJ = new Map([[`${detailsJ.size}`, 2]]);
         detailsJ = new Map([[`${detailsJ.size}`, 2 & detailsJ.size]]);
         detailsJ = new Map([[`${detailsJ.size}`, 2]]);
      signinupW /= Math.max(parseFloat(`${3}`), 1);
      logoK = `${(3 + (carouselz ? 2 : 5))}`;
   if (5.4 >= modityh || (modityh / (Math.max(5.4, 3))) >= 2.14) {
      carouselz = 16.70 < (modityh / (Math.max(1, iconmore6)));
   }
      telemetryv = `${parseInt(`${greeny}`)}`;
   while (4.66 <= (iconmore6 - 2.66) || !carouselz) {
      iconmore6 -= (parseFloat(`${logoK == String.fromCharCode(71,0) ? layouto.length : logoK.length}`));
      break;
   }
      iconmore6 -= parseFloat(`${parseInt(`${signinupW}`)}`);
      livesharee = "1";
      layouto = "3";
      signinupW -= (parseFloat(`${(noden ? 2 : 1) / (Math.max(parseInt(`${iconmore6}`), 1))}`));
   for (let a = 0; a < 2; a++) {
      signinupW *= (parseFloat(`${(noden ? 3 : 3) * appsL.length}`));
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let desck = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,114,95,55,48,0);
    let mergerf = 0.0;
    let types_ = 5.0;
    let streamingi = true;
    let heart3 = true;
    let profileactiveE = true;
    let videocommonf = String.fromCharCode(98,101,103,117,110,95,105,95,57,57,0);
    let selectX: Map<any, any> = new Map([[String.fromCharCode(101,95,50,95,109,97,99,114,111,98,108,111,99,107,0),String.fromCharCode(104,95,57,54,95,100,105,114,101,99,116,105,111,110,115,0)], [String.fromCharCode(115,95,50,52,95,98,105,116,114,97,116,101,115,0),String.fromCharCode(102,95,49,53,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0)], [String.fromCharCode(103,95,57,95,99,97,116,97,112,117,108,116,0),String.fromCharCode(120,99,101,112,116,105,111,110,95,106,95,52,49,0)]]);
    let fullR = 3.0;
    let iconarrowrightorange0 = String.fromCharCode(108,111,99,107,105,110,103,95,115,95,52,55,0);
    let iconviewerR = false;
    let scrollviewZ = String.fromCharCode(106,95,55,48,95,113,117,97,114,116,101,114,0);
    let fullscreenmaxi: Map<any, any> = new Map([[String.fromCharCode(116,102,100,116,95,54,95,57,51,0),967], [String.fromCharCode(116,95,55,49,95,115,119,105,112,101,100,0),353], [String.fromCharCode(121,95,50,54,95,114,101,115,105,122,101,0),361]]);
   if (1 < (selectX.size * parseInt(`${mergerf}`))) {
       let macauo = 3.0;
       let iconarrowleft2 = String.fromCharCode(117,95,50,54,95,109,101,97,115,117,114,101,114,0);
       let componentregistryg = 2.0;
          let long_o0q = String.fromCharCode(111,95,49,48,48,95,105,109,112,111,114,116,0);
         componentregistryg += parseFloat(`${parseInt(`${macauo}`) * iconarrowleft2.length}`);
         long_o0q = "2";
      if ((iconarrowleft2.length * 4) > 1) {
          let mapbuffer2 = String.fromCharCode(98,95,54,48,95,101,120,116,114,97,99,116,0);
          let matchesZ = false;
          let libturbomodulejsijniN = 3.0;
          let whitet = String.fromCharCode(97,110,111,116,104,101,114,95,119,95,55,49,0);
         iconarrowleft2 += `${whitet.length ^ 1}`;
         mapbuffer2 = `${(String.fromCharCode(114,0) == mapbuffer2 ? parseInt(`${libturbomodulejsijniN}`) : mapbuffer2.length)}`;
         matchesZ = 48 <= mapbuffer2.length;
         libturbomodulejsijniN += parseFloat(`${parseInt(`${libturbomodulejsijniN}`) << (Math.min(5, Math.abs(1)))}`);
         whitet = `${((matchesZ ? 4 : 2) / (Math.max(parseInt(`${libturbomodulejsijniN}`), 2)))}`;
      }
         macauo *= (parseFloat(`${String.fromCharCode(95,0) == iconarrowleft2 ? parseInt(`${macauo}`) : iconarrowleft2.length}`));
      for (let a = 0; a < 2; a++) {
         componentregistryg *= parseFloat(`${parseInt(`${macauo}`) | parseInt(`${componentregistryg}`)}`);
      }
         iconarrowleft2 = `${iconarrowleft2.length}`;
         macauo *= parseFloat(`${parseInt(`${componentregistryg}`) << (Math.min(Math.abs(3), 2))}`);
         iconarrowleft2 = `${iconarrowleft2.length}`;
         componentregistryg *= parseFloat(`${1 / (Math.max(9, parseInt(`${macauo}`)))}`);
         iconarrowleft2 += `${(String.fromCharCode(74,0) == iconarrowleft2 ? iconarrowleft2.length : parseInt(`${componentregistryg}`))}`;
      selectX.set(`${heart3}`, 3 * parseInt(`${fullR}`));
   }
      fullR += parseFloat(`${parseInt(`${types_}`) / 1}`);
   if (2 < iconarrowrightorange0.length) {
      types_ += ((profileactiveE ? 4 : 2) | parseInt(`${mergerf}`));
   }
      videocommonf = `${parseInt(`${mergerf}`) + 3}`;
   while ((iconarrowrightorange0.length * selectX.size) > 2) {
      iconarrowrightorange0 += `${((heart3 ? 5 : 2) & (profileactiveE ? 5 : 1))}`;
      break;
   }
   if (3.2 >= (fullR - 1.17)) {
      fullR += (parseFloat(`${iconarrowrightorange0 == String.fromCharCode(70,0) ? (iconviewerR ? 1 : 5) : iconarrowrightorange0.length}`));
   }
   for (let q = 0; q < 2; q++) {
       let forwardg = String.fromCharCode(102,95,53,55,95,114,101,97,100,113,0);
       let xvodz: Map<any, any> = new Map([[String.fromCharCode(108,105,118,101,95,101,95,50,49,0),String.fromCharCode(104,97,100,95,101,95,51,55,0)], [String.fromCharCode(104,95,56,48,95,112,114,111,120,105,109,105,116,121,0),String.fromCharCode(108,95,51,53,95,112,114,111,109,112,101,103,0)], [String.fromCharCode(102,95,52,54,95,116,103,115,0),String.fromCharCode(121,95,57,56,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0)]]);
       let mountingq = 2.0;
       let latnX = String.fromCharCode(107,95,50,95,114,101,97,115,111,110,0);
       let whiteanimationlived = String.fromCharCode(120,95,55,55,95,115,112,101,108,108,0);
          let modali = String.fromCharCode(106,95,57,49,95,99,111,101,102,102,115,112,0);
          let orangeH = String.fromCharCode(100,95,53,51,95,118,97,108,105,100,97,116,105,110,103,0);
         xvodz.set(forwardg, xvodz.size);
         modali = `${modali.length}`;
         orangeH = `${modali.length | orangeH.length}`;
       let scheduleL: Array<any> = [144, 657, 980];
         forwardg += `${parseInt(`${mountingq}`)}`;
         scheduleL.push((String.fromCharCode(79,0) == latnX ? scheduleL.length : latnX.length));
      for (let o = 0; o < 1; o++) {
         forwardg = "3";
      }
      let mountingt = forwardg == String.fromCharCode(117,98,103,97,117,109,99,0);
      do {
         forwardg += `${scheduleL.length}`;
         if (mountingt) {
            break;
         }
      } while ((whiteanimationlived.length > forwardg.length) && mountingt);
      let lightu = 5216736 >= scheduleL.length;
      do {
         scheduleL.push(xvodz.size >> (Math.min(4, Math.abs(parseInt(`${mountingq}`)))));
         if (lightu) {
            break;
         }
      } while (lightu && ((scheduleL.length % (Math.max(forwardg.length, 1))) <= 1 && (scheduleL.length % (Math.max(forwardg.length, 3))) <= 1));
      let logouserF = mountingq <= 5157103.0;
      do {
         mountingq -= parseFloat(`${whiteanimationlived.length}`);
         if (logouserF) {
            break;
         }
      } while (((xvodz.size / 1) >= 1 || (parseInt(`${mountingq}`) + xvodz.size) >= 1) && logouserF);
      let emojiheartP = 5893402.0 <= mountingq;
      do {
         mountingq += parseFloat(`${1}`);
         if (emojiheartP) {
            break;
         }
      } while (emojiheartP && (Array.from(xvodz.values()).includes(mountingq)));
         whiteanimationlived += `${1 * latnX.length}`;
      for (let u = 0; u < 1; u++) {
         mountingq *= parseFloat(`${forwardg.length}`);
      }
         mountingq /= Math.max(1, parseFloat(`${scheduleL.length}`));
         mountingq += parseFloat(`${scheduleL.length ^ 1}`);
         latnX = "2";
         whiteanimationlived += "3";
      iconarrowrightorange0 += `${scrollviewZ.length - 1}`;
   }

      if (delayValue === undefined) {

   if (4.20 > (4.11 - fullR) || (4.11 - types_) > 1.94) {
      types_ /= Math.max(((heart3 ? 4 : 4) % (Math.max(parseInt(`${fullR}`), 3))), 3);
   }
   for (let i = 0; i < 1; i++) {
      selectX.set(`${profileactiveE}`, ((profileactiveE ? 5 : 3) % (Math.max(fullscreenmaxi.size, 8))));
   }
      heart3 = (((iconviewerR ? iconarrowrightorange0.length : 43) / (Math.max(iconarrowrightorange0.length, 5))) >= 43);
   for (let b = 0; b < 2; b++) {
      fullscreenmaxi = new Map([[`${selectX.size}`, 1]]);
   }
       let reddownarrowZ = 4.0;
         reddownarrowZ -= parseInt(`${reddownarrowZ}`);
      for (let a = 0; a < 1; a++) {
         reddownarrowZ -= 1;
      }
      if (3.9 == (3.7 + reddownarrowZ)) {
         reddownarrowZ += parseInt(`${reddownarrowZ}`) % (Math.max(parseInt(`${reddownarrowZ}`), 5));
      }
      iconviewerR = 77.11 == fullR;
      fullR -= parseFloat(`${desck.length ^ 1}`);
   let v_unlockB = selectX.size <= 7915783;
   do {
       let iconviewergifS = 1;
       let gestureD: Map<any, any> = new Map([[String.fromCharCode(103,95,57,50,95,100,97,116,97,98,108,111,99,107,0),228], [String.fromCharCode(121,95,55,95,112,114,101,115,101,108,101,99,116,0),815]]);
      while (iconviewergifS >= 4) {
         iconviewergifS <<= Math.min(2, Math.abs(3 << (Math.min(1, Math.abs(iconviewergifS)))));
         break;
      }
          let reminderR = 4.0;
          let descR: Map<any, any> = new Map([[String.fromCharCode(115,95,52,48,95,105,109,112,111,115,116,101,114,0),44], [String.fromCharCode(104,95,49,56,95,110,111,116,104,101,108,100,0),393]]);
         iconviewergifS *= gestureD.size & parseInt(`${reminderR}`);
         reminderR += parseFloat(`${descR.size}`);
         descR.set(`${descR.size}`, 2);
      let commonS = 8654406 <= iconviewergifS;
      do {
         iconviewergifS /= Math.max(1, 3);
         if (commonS) {
            break;
         }
      } while (((iconviewergifS << (Math.min(Math.abs(4), 3))) > 3 && 3 > (iconviewergifS << (Math.min(Math.abs(4), 1)))) && commonS);
      while ((gestureD.size - iconviewergifS) == 4) {
         iconviewergifS += iconviewergifS ^ 1;
         break;
      }
          let downloadern = 0.0;
         iconviewergifS -= iconviewergifS & parseInt(`${downloadern}`);
          let member2: Array<any> = [String.fromCharCode(105,95,49,51,95,110,111,109,101,109,0), String.fromCharCode(100,114,97,119,117,116,105,108,115,95,109,95,56,56,0), String.fromCharCode(108,95,49,53,95,118,101,99,116,111,114,115,99,111,112,101,0)];
          let tempnodatagifw = String.fromCharCode(115,111,102,116,119,97,114,101,95,118,95,56,0);
          let notificationfillemptyv = String.fromCharCode(98,105,116,111,112,115,95,98,95,52,49,0);
         iconviewergifS >>= Math.min(Math.abs(gestureD.size), 4);
         member2.push(tempnodatagifw.length);
         tempnodatagifw = `${tempnodatagifw.length | member2.length}`;
         notificationfillemptyv += `${member2.length | 2}`;
      selectX.set(`${fullR}`, parseInt(`${fullR}`) - 1);
      if (v_unlockB) {
         break;
      }
   } while (v_unlockB && ((3 << (Math.min(4, scrollviewZ.length))) == 4 || 5 == (3 << (Math.min(2, Math.abs(selectX.size))))));
        if (showSlider === 'none' && !paused) {

      desck = `${iconarrowrightorange0.length}`;
   if (desck.endsWith(`${heart3}`)) {
      desck += `${fullscreenmaxi.size}`;
   }
   if ((2 - selectX.size) == 4 || !profileactiveE) {
       let episodesd: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,112,105,110,103,95,51,95,53,48,0),42], [String.fromCharCode(116,95,56,53,95,97,117,116,104,114,111,114,105,122,97,116,105,111,110,0),480]]);
         episodesd.set(`${episodesd.size}`, 3 << (Math.min(5, Math.abs(episodesd.size))));
         episodesd = new Map([[`${episodesd.size}`, episodesd.size]]);
       let anythinkv = String.fromCharCode(97,118,97,105,108,97,98,108,101,95,107,95,51,53,0);
      profileactiveE = !profileactiveE;
   }
   let vietnam_ = iconarrowrightorange0 == String.fromCharCode(112,122,53,97,56,103,53,106,0);
   do {
       let buildG = 1.0;
       let google2 = 5.0;
       let textlayoutmanageru = 4.0;
         textlayoutmanageru += parseInt(`${google2}`);
      let show0 = google2 >= 9308192.0;
      do {
          let plash1: Array<any> = [String.fromCharCode(101,95,50,49,95,114,101,115,105,122,97,98,108,101,0), String.fromCharCode(119,95,51,48,95,99,111,108,111,114,115,112,97,99,101,0), String.fromCharCode(122,95,55,57,95,112,97,112,101,114,0)];
         google2 += parseInt(`${textlayoutmanageru}`);
         plash1.push(plash1.length + 3);
         if (show0) {
            break;
         }
      } while ((4.85 >= (google2 - textlayoutmanageru)) && show0);
      let yellowvideoliveV = 7986447.0 >= buildG;
      do {
          let defaultroombgC = String.fromCharCode(115,95,57,53,95,99,111,109,98,105,0);
          let countryF = String.fromCharCode(110,111,115,105,109,100,95,54,95,57,56,0);
         buildG *= parseInt(`${textlayoutmanageru}`);
         defaultroombgC = `${countryF.length}`;
         countryF += `${3 & countryF.length}`;
         if (yellowvideoliveV) {
            break;
         }
      } while ((4.54 > buildG) && yellowvideoliveV);
      let minimizep = google2 <= 7608355.0;
      do {
         google2 += parseInt(`${google2}`) >> (Math.min(Math.abs(parseInt(`${textlayoutmanageru}`)), 1));
         if (minimizep) {
            break;
         }
      } while (minimizep && ((google2 / (Math.max(9, buildG))) > 2.88 && (google2 / (Math.max(8, buildG))) > 2.88));
       let stylesN = String.fromCharCode(112,108,111,116,116,101,114,95,97,95,57,54,0);
         stylesN += `${3 + parseInt(`${buildG}`)}`;
          let release_7N: Map<any, any> = new Map([[String.fromCharCode(109,95,49,48,48,95,118,101,99,116,111,114,115,0),String.fromCharCode(108,105,115,116,115,95,114,95,56,49,0)], [String.fromCharCode(97,95,53,95,109,117,120,101,114,115,0),String.fromCharCode(97,116,116,97,99,107,95,100,95,56,50,0)]]);
         buildG *= release_7N.size % (Math.max(stylesN.length, 5));
         textlayoutmanageru += parseInt(`${buildG}`);
          let ynewsshareO = 4.0;
         buildG += parseInt(`${google2}`) / (Math.max(parseInt(`${ynewsshareO}`), 9));
      iconarrowrightorange0 += `${parseInt(`${mergerf}`)}`;
      if (vietnam_) {
         break;
      }
   } while (vietnam_ && (!iconarrowrightorange0.includes(`${fullR}`)));
   while (1.28 <= fullR || 4.99 <= (1.28 + fullR)) {
      fullR /= Math.max((parseFloat(`${(streamingi ? 5 : 3) / (Math.max((heart3 ? 5 : 5), 3))}`)), 5);
      break;
   }
   let libavformatf = types_ <= 6277771.0;
   do {
      types_ -= (desck == String.fromCharCode(114,0) ? (iconviewerR ? 2 : 2) : desck.length);
      if (libavformatf) {
         break;
      }
   } while (libavformatf && ((4.0 - types_) <= 5.68));
   for (let w = 0; w < 1; w++) {
      types_ /= Math.max(4, parseInt(`${fullR}`));
   }
          setShowControls(false)
        }
      } else {

       let ajaxj = 2;
       let libreactnativejniy: Array<any> = [424, 857];
       let historyT = 1.0;
          let lessT = String.fromCharCode(121,95,56,57,95,109,97,116,99,104,101,100,0);
          let zhuboi = String.fromCharCode(98,108,97,99,107,108,105,115,116,95,115,95,50,48,0);
         libreactnativejniy.push((zhuboi == String.fromCharCode(119,0) ? ajaxj : zhuboi.length));
         lessT = "3";
         libreactnativejniy.push(ajaxj / (Math.max(parseInt(`${historyT}`), 9)));
      let rulesq = libreactnativejniy.length >= 9495334;
      do {
          let iconplayM: Map<any, any> = new Map([[String.fromCharCode(116,97,108,107,95,100,95,56,49,0),782], [String.fromCharCode(114,101,103,101,120,95,55,95,56,49,0),933]]);
          let greytickr: Array<any> = [870, 332, 286];
         libreactnativejniy = [ajaxj >> (Math.min(libreactnativejniy.length, 3))];
         iconplayM = new Map([[`${iconplayM.size}`, greytickr.length >> (Math.min(Math.abs(1), 5))]]);
         greytickr.push(greytickr.length);
         if (rulesq) {
            break;
         }
      } while (rulesq && (4 == (libreactnativejniy.length & 1) && (ajaxj & libreactnativejniy.length) == 1));
         historyT /= Math.max(3, parseFloat(`${2}`));
          let node3 = String.fromCharCode(112,95,53,95,115,121,110,99,104,114,111,110,105,115,101,100,0);
         ajaxj %= Math.max(ajaxj, 3);
         node3 += `${(node3 == String.fromCharCode(71,0) ? node3.length : node3.length)}`;
          let langkeyo = 2;
         ajaxj %= Math.max(libreactnativejniy.length, 2);
         langkeyo -= langkeyo - 3;
      while (2 <= (libreactnativejniy.length & ajaxj) && (2 & libreactnativejniy.length) <= 4) {
         libreactnativejniy.push(3);
         break;
      }
      while ((historyT + 2.83) > 3.39 && (libreactnativejniy.length + parseInt(`${historyT}`)) > 1) {
         historyT *= parseFloat(`${1}`);
         break;
      }
      for (let u = 0; u < 2; u++) {
         libreactnativejniy = [ajaxj - 1];
      }
      heart3 = (1 < (iconarrowrightorange0.length | (iconviewerR ? iconarrowrightorange0.length : 1)));
      streamingi = (desck.length | videocommonf.length) <= 47;
      videocommonf += `${parseInt(`${mergerf}`)}`;
       let mbbidT = String.fromCharCode(99,95,49,51,95,97,110,109,114,0);
         mbbidT = `${mbbidT.length}`;
      if (mbbidT.length == mbbidT.length) {
          let awayY: Map<any, any> = new Map([[String.fromCharCode(120,95,50,57,95,115,116,114,101,97,109,105,110,103,0),true ], [String.fromCharCode(109,97,114,103,105,110,95,114,95,54,52,0),true ]]);
         mbbidT = `${(mbbidT == String.fromCharCode(86,0) ? mbbidT.length : awayY.size)}`;
      }
      while (mbbidT == String.fromCharCode(111,0)) {
         mbbidT += `${mbbidT.length - mbbidT.length}`;
         break;
      }
      mergerf *= (parseFloat(`${2 >> (Math.min(5, Math.abs((iconviewerR ? 2 : 1))))}`));
      fullscreenmaxi.set(`${types_}`, 1 - fullscreenmaxi.size);
       let gradleh = 5.0;
       let paused = 2.0;
       let iconwatchnowd = false;
         paused -= parseFloat(`${parseInt(`${gradleh}`)}`);
         iconwatchnowd = !iconwatchnowd;
      while (2.94 > paused) {
         iconwatchnowd = !iconwatchnowd;
         break;
      }
      while ((gradleh / 3.28) >= 4.25) {
         iconwatchnowd = gradleh <= paused;
         break;
      }
      for (let n = 0; n < 2; n++) {
         iconwatchnowd = !iconwatchnowd;
      }
         iconwatchnowd = 63.22 <= paused && iconwatchnowd;
      for (let j = 0; j < 2; j++) {
          let defaultlogo8 = 3.0;
         gradleh /= Math.max(2, parseFloat(`${parseInt(`${paused}`) - parseInt(`${gradleh}`)}`));
         defaultlogo8 -= parseFloat(`${parseInt(`${defaultlogo8}`) * 3}`);
      }
         paused /= Math.max((parseFloat(`${parseInt(`${gradleh}`) << (Math.min(2, Math.abs((iconwatchnowd ? 2 : 3))))}`)), 3);
       let liveshareT = 3.0;
      mergerf *= (parseFloat(`${2 + (iconviewerR ? 1 : 3)}`));
      selectX.set(scrollviewZ, 3 << (Math.min(5, Math.abs(fullscreenmaxi.size))));
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let basketballO = 4.0;
    let whiteanimationliveu: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,105,99,109,112,95,48,95,57,49,0),false ], [String.fromCharCode(102,111,114,101,109,97,110,95,99,95,55,50,0),true ]]);
    let component4: Array<any> = [833, 425];
    let iconbackwhiteI: Array<any> = [737, 271, 721];
    let dangerD: Map<any, any> = new Map([[String.fromCharCode(106,95,51,51,95,97,109,114,110,98,0),false ], [String.fromCharCode(119,95,53,53,95,99,115,115,0),true ], [String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,107,95,52,57,0),false ]]);
    let eighteen8 = String.fromCharCode(115,116,101,112,115,95,105,95,52,53,0);
    let profileactiveM: Map<any, any> = new Map([[String.fromCharCode(114,101,102,101,114,95,52,95,49,48,0),false ], [String.fromCharCode(100,111,119,110,108,111,97,100,95,54,95,50,50,0),false ], [String.fromCharCode(104,95,52,57,95,99,111,110,99,97,116,100,101,99,0),false ]]);
    let notificationgrayr = String.fromCharCode(97,97,99,101,110,99,100,115,112,95,103,95,57,51,0);
    let backgrounda = String.fromCharCode(109,117,108,116,105,101,110,100,95,101,95,55,54,0);
    let confirmationc = String.fromCharCode(97,95,50,53,95,102,109,115,117,98,0);
    let latn1 = String.fromCharCode(99,95,53,51,95,98,111,108,100,0);
    let vertical_ = 0.0;
    let iconadslink2: Array<any> = [826, 782, 376];
    let recommendationf = String.fromCharCode(111,95,55,57,95,110,101,103,97,116,105,118,101,0);
      profileactiveM = new Map([[`${profileactiveM.size}`, profileactiveM.size >> (Math.min(Math.abs(3), 3))]]);
      dangerD = new Map([[eighteen8, confirmationc.length]]);
      iconadslink2 = [dangerD.size * 3];
      latn1 = `${profileactiveM.size}`;
   while (5.20 > (parseFloat(`${latn1.length}`) - vertical_) && (3 % (Math.max(9, latn1.length))) > 5) {
      vertical_ *= parseFloat(`${backgrounda.length - notificationgrayr.length}`);
      break;
   }
   if (whiteanimationliveu.get(`${iconbackwhiteI.length}`) != null) {
      whiteanimationliveu.set(`${vertical_}`, profileactiveM.size - 1);
   }
   while (latn1 == String.fromCharCode(83,0) || eighteen8 == String.fromCharCode(122,0)) {
       let videojs6 = String.fromCharCode(115,105,108,101,110,99,101,100,95,107,95,54,0);
       let videovarp = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,98,95,52,51,0);
       let result1 = 1.0;
         videovarp += `${videojs6.length | videovarp.length}`;
      while (videojs6 != String.fromCharCode(53,0) || videovarp.length <= 3) {
         videojs6 += `${videovarp.length & 1}`;
         break;
      }
         videojs6 = `${parseInt(`${result1}`) % 2}`;
       let imagemanagerb = 5.0;
       let othermatchdetailbg7 = 3.0;
      while (1.67 < (othermatchdetailbg7 / 5.77) && 5 < (parseInt(`${othermatchdetailbg7}`) / 3)) {
          let actionp: Array<any> = [880, 341, 437];
          let becomej = true;
         othermatchdetailbg7 -= parseFloat(`${videovarp.length >> (Math.min(Math.abs(2), 1))}`);
         actionp.push(actionp.length);
         becomej = actionp.length >= 18;
         break;
      }
         videojs6 = `${(String.fromCharCode(77,0) == videojs6 ? videojs6.length : parseInt(`${imagemanagerb}`))}`;
      for (let w = 0; w < 3; w++) {
         videovarp = `${parseInt(`${result1}`) ^ videojs6.length}`;
      }
         imagemanagerb *= parseFloat(`${parseInt(`${othermatchdetailbg7}`)}`);
          let textlayoutmanagera = String.fromCharCode(102,95,55,55,95,116,101,108,101,103,114,97,112,104,0);
          let google9 = String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,119,95,51,50,0);
          let assetsC: Map<any, any> = new Map([[String.fromCharCode(112,95,56,48,95,115,101,108,101,99,116,0),String.fromCharCode(120,95,56,50,95,109,117,116,97,116,101,0)], [String.fromCharCode(108,122,111,120,95,48,95,51,52,0),String.fromCharCode(103,95,52,50,95,111,117,116,112,117,116,113,0)]]);
         videojs6 += `${parseInt(`${othermatchdetailbg7}`)}`;
         textlayoutmanagera = `${google9.length << (Math.min(Math.abs(3), 4))}`;
         google9 += `${(String.fromCharCode(108,0) == textlayoutmanagera ? assetsC.size : textlayoutmanagera.length)}`;
         assetsC = new Map([[textlayoutmanagera, google9.length]]);
      latn1 = `${videovarp.length + videojs6.length}`;
      break;
   }
   let build2 = eighteen8.length <= 8654527;
   do {
       let base3 = String.fromCharCode(120,95,55,54,95,114,101,99,105,112,0);
      while (3 <= base3.length) {
         base3 = `${base3.length % (Math.max(base3.length, 5))}`;
         break;
      }
      let notificationfillede = 8529398 <= base3.length;
      do {
          let long_i3 = String.fromCharCode(121,95,51,57,95,102,111,108,100,0);
          let anytimem = 2.0;
         base3 = `${long_i3.length >> (Math.min(5, Math.abs(parseInt(`${anytimem}`))))}`;
         if (notificationfillede) {
            break;
         }
      } while (notificationfillede && (base3.length <= base3.length));
         base3 += `${base3.length}`;
      eighteen8 += `${profileactiveM.size}`;
      if (build2) {
         break;
      }
   } while ((2 == (eighteen8.length | component4.length)) && build2);

    if (isLocked) {

   if (4 == eighteen8.length) {
       let orangedownarrowt = 5;
       let matha = 3;
       let sortS = 5;
      for (let t = 0; t < 1; t++) {
          let backiconI = String.fromCharCode(116,101,108,108,95,49,95,49,52,0);
         orangedownarrowt *= 3 - sortS;
         backiconI = `${backiconI.length / 2}`;
      }
      while (3 >= (matha >> (Math.min(Math.abs(2), 3))) || (2 >> (Math.min(2, Math.abs(sortS)))) >= 4) {
         sortS -= 1 << (Math.min(3, Math.abs(matha)));
         break;
      }
         sortS ^= sortS + 2;
      for (let h = 0; h < 1; h++) {
         matha ^= 2 << (Math.min(1, Math.abs(matha)));
      }
         orangedownarrowt /= Math.max(4, sortS);
      if ((1 % (Math.max(7, orangedownarrowt))) <= 3 || (orangedownarrowt % (Math.max(sortS, 3))) <= 1) {
         sortS <<= Math.min(Math.abs(matha), 1);
      }
      for (let l = 0; l < 3; l++) {
          let iconpipshrinkV = 5.0;
          let tooltipsP = String.fromCharCode(116,114,101,120,95,113,95,51,53,0);
          let playlistr = String.fromCharCode(112,114,111,112,111,115,97,108,95,97,95,49,57,0);
         orangedownarrowt -= 3;
         iconpipshrinkV *= 1 >> (Math.min(4, Math.abs(parseInt(`${iconpipshrinkV}`))));
         tooltipsP += `${tooltipsP.length ^ 3}`;
         playlistr = `${parseInt(`${iconpipshrinkV}`)}`;
      }
         matha *= sortS;
          let dependencyp = 5.0;
          let appsl = 0;
          let subtextv = 3.0;
         matha <<= Math.min(1, Math.abs(parseInt(`${subtextv}`) / 1));
         dependencyp /= Math.max(3, parseInt(`${dependencyp}`));
         appsl |= appsl;
         subtextv -= parseFloat(`${1}`);
      eighteen8 = `${1 + sortS}`;
   }
      profileactiveM.set(`${iconbackwhiteI.length}`, dangerD.size);
      confirmationc += `${2 - profileactiveM.size}`;
   while (1 == (parseInt(`${basketballO}`) / (Math.max(eighteen8.length, 2))) || 2 == (1 << (Math.min(4, eighteen8.length)))) {
      eighteen8 = `${parseInt(`${vertical_}`)}`;
      break;
   }
   let reactnativeultimatelistviewE = iconadslink2.length <= 8823276;
   do {
      iconadslink2.push(parseInt(`${basketballO}`));
      if (reactnativeultimatelistviewE) {
         break;
      }
   } while ((iconadslink2.length >= profileactiveM.size) && reactnativeultimatelistviewE);
      eighteen8 += `${dangerD.size}`;
       let iconmore_: Array<any> = [String.fromCharCode(119,95,52,52,95,114,101,97,108,108,111,99,0), String.fromCharCode(109,95,53,57,95,108,111,119,98,100,0)];
      if (iconmore_.length < 1) {
          let homeinactivex = 4.0;
          let successv = String.fromCharCode(105,109,112,111,114,116,95,49,95,53,53,0);
          let downloading9 = String.fromCharCode(108,111,99,107,95,111,95,56,57,0);
         iconmore_ = [(successv == String.fromCharCode(87,0) ? iconmore_.length : successv.length)];
         homeinactivex /= Math.max(parseFloat(`${downloading9.length >> (Math.min(2, Math.abs(parseInt(`${homeinactivex}`))))}`), 3);
         downloading9 = `${downloading9.length >> (Math.min(Math.abs(3), 1))}`;
      }
      let airbnbstarD = 7454060 <= iconmore_.length;
      do {
          let downP: Array<any> = [615, 350, 788];
          let modulep = 5;
          let statisticsU = String.fromCharCode(101,99,116,97,110,103,108,101,95,101,95,51,55,0);
          let areaV = true;
         iconmore_.push(2 * iconmore_.length);
         downP = [modulep];
         modulep /= Math.max(downP.length ^ 1, 3);
         statisticsU = `${modulep * downP.length}`;
         areaV = !areaV;
         if (airbnbstarD) {
            break;
         }
      } while (airbnbstarD && ((2 ^ iconmore_.length) <= 5));
          let ccdfbdabcabbbedbH = String.fromCharCode(97,95,49,95,115,113,114,116,110,101,103,0);
         iconmore_.push(iconmore_.length);
         ccdfbdabcabbbedbH += `${(ccdfbdabcabbbedbH == String.fromCharCode(107,0) ? ccdfbdabcabbbedbH.length : ccdfbdabcabbbedbH.length)}`;
      profileactiveM = new Map([[`${iconmore_.length}`, iconmore_.length]]);
   while ((vertical_ / 1.79) >= 4.94) {
      vertical_ -= parseFloat(`${confirmationc.length}`);
      break;
   }
      

       let hooksk = 5;
      for (let u = 0; u < 2; u++) {
         hooksk /= Math.max(hooksk, 5);
      }
         hooksk &= 3;
      while ((hooksk | 5) >= 1) {
         hooksk <<= Math.min(4, Math.abs(hooksk / 1));
         break;
      }
      whiteanimationliveu = new Map([[`${profileactiveM.size}`, (eighteen8 == String.fromCharCode(117,0) ? profileactiveM.size : eighteen8.length)]]);
      dangerD = new Map([[`${dangerD.size}`, confirmationc.length - 1]]);
      notificationgrayr += `${dangerD.size}`;
   if (iconbackwhiteI.length > 5) {
      iconbackwhiteI.push(backgrounda.length % 3);
   }
   if ((profileactiveM.size - 4) > 4) {
      profileactiveM.set(`${basketballO}`, (confirmationc == String.fromCharCode(120,0) ? confirmationc.length : parseInt(`${basketballO}`)));
   }
      iconadslink2.push((String.fromCharCode(90,0) == eighteen8 ? notificationgrayr.length : eighteen8.length));
       let leaguedetailsbgN = 2.0;
      for (let j = 0; j < 2; j++) {
          let bellc = String.fromCharCode(116,105,109,101,99,111,100,101,95,98,95,55,50,0);
          let libfollyv = false;
         leaguedetailsbgN /= Math.max(bellc.length >> (Math.min(Math.abs(2), 1)), 1);
         bellc = `${((libfollyv ? 3 : 4))}`;
      }
      let nativej = 5702302.0 <= leaguedetailsbgN;
      do {
         leaguedetailsbgN /= Math.max(2, 1);
         if (nativej) {
            break;
         }
      } while (nativej && ((leaguedetailsbgN - leaguedetailsbgN) > 3.40));
       let shareH = 2.0;
      profileactiveM = new Map([[`${leaguedetailsbgN}`, (String.fromCharCode(120,0) == notificationgrayr ? parseInt(`${leaguedetailsbgN}`) : notificationgrayr.length)]]);
   if (4 >= iconbackwhiteI.length) {
      eighteen8 += `${3 & parseInt(`${basketballO}`)}`;
   }
      setIsLocked(false);
    } else {

   while (5 >= dangerD.size) {
       let commentc = 3;
          let configure7 = String.fromCharCode(115,95,56,57,95,101,120,116,114,97,99,102,103,0);
         commentc %= Math.max(4, 2);
         configure7 = "3";
         commentc >>= Math.min(4, Math.abs(3));
      if ((5 - commentc) > 1) {
         commentc ^= commentc / (Math.max(2, 5));
      }
      latn1 = `${3 ^ parseInt(`${vertical_}`)}`;
      break;
   }
   while (profileactiveM.size >= 3) {
      eighteen8 += "2";
      break;
   }
   let foregroundj = confirmationc.length <= 9143944;
   do {
      confirmationc += `${whiteanimationliveu.size}`;
      if (foregroundj) {
         break;
      }
   } while ((!backgrounda.startsWith(`${confirmationc.length}`)) && foregroundj);
       let iconwechatM = String.fromCharCode(114,101,115,111,117,114,99,101,115,95,120,95,57,55,0);
       let assets9 = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,118,95,49,56,0);
         assets9 = `${assets9.length - iconwechatM.length}`;
      for (let q = 0; q < 3; q++) {
         iconwechatM += "1";
      }
       let sina4 = false;
       let searchbarF = false;
         assets9 += `${((searchbarF ? 4 : 2))}`;
          let desc0 = String.fromCharCode(121,95,50,50,95,112,114,101,115,99,97,108,101,0);
          let floaterZ: Array<any> = [607, 577];
          let renewt = String.fromCharCode(99,111,108,115,107,105,112,95,102,95,57,50,0);
         searchbarF = 78 == assets9.length;
         desc0 += `${1 + floaterZ.length}`;
         floaterZ = [3 >> (Math.min(2, desc0.length))];
         renewt = `${(String.fromCharCode(84,0) == renewt ? renewt.length : floaterZ.length)}`;
      let mbbannerY = sina4 ? !sina4 : sina4;
      do {
         sina4 = (((!sina4 ? 47 : assets9.length) / (Math.max(6, assets9.length))) == 47);
         if (mbbannerY) {
            break;
         }
      } while (mbbannerY && (!searchbarF));
      backgrounda += `${(String.fromCharCode(86,0) == notificationgrayr ? latn1.length : notificationgrayr.length)}`;
       let predictionbuttonp: Map<any, any> = new Map([[String.fromCharCode(116,95,49,56,95,109,117,108,116,105,112,108,101,0),8], [String.fromCharCode(104,95,54,54,95,112,97,103,101,110,117,109,98,101,114,0),472], [String.fromCharCode(115,105,103,110,114,97,110,100,95,104,95,53,55,0),220]]);
       let interstitialc: Map<any, any> = new Map([[String.fromCharCode(102,105,97,116,95,113,95,51,51,0),871], [String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,95,53,95,56,48,0),108], [String.fromCharCode(108,111,117,100,110,111,114,109,95,53,95,53,0),828]]);
      let invite0 = predictionbuttonp.size >= 8360286;
      do {
         predictionbuttonp.set(`${predictionbuttonp.size}`, 1 * interstitialc.size);
         if (invite0) {
            break;
         }
      } while ((2 == (2 | interstitialc.size) || (interstitialc.size | predictionbuttonp.size) == 2) && invite0);
          let libfbjniP = 3.0;
          let subsC = String.fromCharCode(105,95,57,50,95,99,111,112,121,105,110,105,111,118,0);
          let logouserh = 3;
         predictionbuttonp.set(`${libfbjniP}`, 3 + subsC.length);
         libfbjniP /= Math.max(logouserh, 5);
         subsC = `${logouserh}`;
          let profileframed = 5.0;
         interstitialc = new Map([[`${predictionbuttonp.size}`, 2 ^ predictionbuttonp.size]]);
         profileframed /= Math.max(parseInt(`${profileframed}`), 5);
         interstitialc.set(`${interstitialc.size}`, predictionbuttonp.size | 3);
      if (1 < (5 ^ predictionbuttonp.size)) {
         interstitialc.set(`${interstitialc.size}`, predictionbuttonp.size);
      }
      let bannerS = interstitialc.size >= 5731277;
      do {
          let t_managerj: Map<any, any> = new Map([[String.fromCharCode(119,95,54,56,95,114,101,105,110,115,101,114,116,0),601], [String.fromCharCode(103,95,52,54,95,108,105,98,118,111,114,98,105,115,0),294]]);
          let iconwatchnowN = 3.0;
         interstitialc = new Map([[`${interstitialc.size}`, interstitialc.size]]);
         t_managerj.set(`${iconwatchnowN}`, t_managerj.size * parseInt(`${iconwatchnowN}`));
         if (bannerS) {
            break;
         }
      } while (bannerS && (!Array.from(interstitialc.values()).includes(predictionbuttonp.size)));
      confirmationc = `${whiteanimationliveu.size * 3}`;
      eighteen8 += `${(latn1 == String.fromCharCode(85,0) ? latn1.length : iconadslink2.length)}`;
       let long_aN = String.fromCharCode(119,95,51,50,95,118,105,115,105,98,108,105,116,121,0);
       let stringsp: Map<any, any> = new Map([[String.fromCharCode(111,95,55,95,112,114,111,116,111,98,117,102,0),644], [String.fromCharCode(107,95,54,95,99,104,105,109,112,0),891], [String.fromCharCode(114,100,101,108,116,97,95,104,95,49,56,0),892]]);
       let penaltyshootK = 1;
      let gifgoalf = penaltyshootK >= 6005788;
      do {
         penaltyshootK &= long_aN.length;
         if (gifgoalf) {
            break;
         }
      } while ((1 <= (penaltyshootK / 4) && (stringsp.size / 4) <= 4) && gifgoalf);
         stringsp.set(`${penaltyshootK}`, long_aN.length);
      for (let y = 0; y < 2; y++) {
          let defaultprofilepict = 4.0;
          let unreadv = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,97,95,56,51,0);
          let matchn = 1;
          let stationsO = 3;
          let colorsy: Array<any> = [String.fromCharCode(97,95,52,53,95,99,111,108,115,101,116,0), String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,108,95,55,51,0), String.fromCharCode(117,95,51,53,95,109,112,101,103,112,115,0)];
         penaltyshootK ^= (String.fromCharCode(56,0) == unreadv ? parseInt(`${defaultprofilepict}`) : unreadv.length);
         defaultprofilepict /= Math.max(stationsO, 4);
         matchn += stationsO;
         colorsy = [1 << (Math.min(2, Math.abs(matchn)))];
      }
          let libturbomodulejsijnip = true;
          let orangedownarrowa = 4.0;
         penaltyshootK += penaltyshootK;
         libturbomodulejsijnip = !libturbomodulejsijnip;
         orangedownarrowa /= Math.max(5, parseInt(`${orangedownarrowa}`) / 1);
          let taild: Map<any, any> = new Map([[String.fromCharCode(101,100,116,115,95,119,95,53,52,0),341], [String.fromCharCode(108,111,99,97,108,101,115,95,121,95,51,57,0),305], [String.fromCharCode(114,101,97,100,99,98,95,56,95,57,50,0),428]]);
         penaltyshootK += taild.size - 3;
      if (1 > (long_aN.length << (Math.min(1, Math.abs(penaltyshootK)))) || (1 << (Math.min(4, long_aN.length))) > 5) {
         long_aN = `${(long_aN == String.fromCharCode(53,0) ? long_aN.length : penaltyshootK)}`;
      }
         stringsp = new Map([[`${stringsp.size}`, stringsp.size]]);
         stringsp.set(long_aN, long_aN.length << (Math.min(Math.abs(1), 3)));
         long_aN = `${(String.fromCharCode(65,0) == long_aN ? penaltyshootK : long_aN.length)}`;
      backgrounda = `${(latn1 == String.fromCharCode(108,0) ? latn1.length : parseInt(`${basketballO}`))}`;
   let point0 = 7060772 >= iconadslink2.length;
   do {
      iconadslink2 = [parseInt(`${basketballO}`)];
      if (point0) {
         break;
      }
   } while (point0 && (4.20 <= vertical_));
      

      dangerD.set(eighteen8, backgrounda.length);
      confirmationc = `${dangerD.size}`;
   for (let w = 0; w < 3; w++) {
       let turndowng = String.fromCharCode(117,95,52,48,95,112,97,103,101,108,105,115,116,0);
       let yellowscoreballu = String.fromCharCode(108,111,119,98,105,116,115,95,113,95,53,50,0);
       let actionsv: Map<any, any> = new Map([[String.fromCharCode(97,95,52,53,95,114,101,102,105,110,105,110,103,0),String.fromCharCode(109,117,108,116,105,112,108,121,105,110,103,95,112,95,55,50,0)], [String.fromCharCode(108,95,50,52,95,102,111,114,109,97,116,115,0),String.fromCharCode(104,95,51,50,95,112,117,108,115,101,115,98,105,116,115,0)], [String.fromCharCode(111,95,51,53,95,97,99,107,115,0),String.fromCharCode(115,101,113,117,101,110,99,101,114,95,122,95,49,49,0)]]);
      let crownB = yellowscoreballu.length >= 8004997;
      do {
         yellowscoreballu = "1";
         if (crownB) {
            break;
         }
      } while (crownB && (turndowng == String.fromCharCode(52,0) && yellowscoreballu == String.fromCharCode(72,0)));
         yellowscoreballu += `${turndowng.length & yellowscoreballu.length}`;
      for (let w = 0; w < 2; w++) {
         yellowscoreballu = `${3 << (Math.min(5, Math.abs(actionsv.size)))}`;
      }
       let mailT = 4.0;
      if (3 < turndowng.length) {
         mailT *= 1 + parseInt(`${mailT}`);
      }
      latn1 += `${eighteen8.length * profileactiveM.size}`;
   }
       let playershirth = false;
       let airbnbstarselected9 = 0;
       let awayplayerY = String.fromCharCode(118,105,111,108,97,116,105,111,110,95,99,95,52,0);
      if (airbnbstarselected9 > 2 || (2 - airbnbstarselected9) > 2) {
         playershirth = 16 < airbnbstarselected9 || playershirth;
      }
          let smallsound9: Map<any, any> = new Map([[String.fromCharCode(118,95,54,54,95,99,105,114,99,108,101,0),106], [String.fromCharCode(117,110,105,102,111,114,109,95,48,95,54,57,0),897]]);
          let reactnavigation7: Map<any, any> = new Map([[String.fromCharCode(97,95,55,54,95,114,101,115,101,114,118,101,115,105,122,101,0),42], [String.fromCharCode(122,95,49,50,95,108,101,97,118,105,110,103,0),611]]);
         airbnbstarselected9 &= reactnavigation7.size;
         smallsound9.set(`${smallsound9.size}`, smallsound9.size ^ smallsound9.size);
         reactnavigation7.set(`${smallsound9.size}`, smallsound9.size);
      while (airbnbstarselected9 <= awayplayerY.length) {
          let gifgoalX = 0.0;
          let homeloadingN = 0.0;
         awayplayerY = `${((playershirth ? 3 : 4) & parseInt(`${homeloadingN}`))}`;
         gifgoalX /= Math.max(parseFloat(`${parseInt(`${gifgoalX}`)}`), 5);
         homeloadingN /= Math.max(2, 5);
         break;
      }
      let adultb = playershirth ? !playershirth : playershirth;
      do {
          let phoneA = false;
          let emojiheartQ: Map<any, any> = new Map([[String.fromCharCode(97,108,112,105,110,101,95,107,95,57,51,0),987], [String.fromCharCode(111,114,105,103,95,118,95,52,53,0),324]]);
          let frame_2p = String.fromCharCode(113,95,51,54,95,115,104,111,114,116,116,101,114,109,0);
         playershirth = frame_2p.length <= 55;
         phoneA = null != emojiheartQ.get(`${phoneA}`);
         emojiheartQ = new Map([[`${emojiheartQ.size}`, emojiheartQ.size]]);
         frame_2p += `${((phoneA ? 2 : 5) % (Math.max(1, 6)))}`;
         if (adultb) {
            break;
         }
      } while (adultb && (awayplayerY.startsWith(`${playershirth}`)));
      for (let g = 0; g < 3; g++) {
          let yellowredcardB = String.fromCharCode(107,95,55,49,95,115,117,103,103,101,115,116,101,100,0);
          let iconclosewhitek = 4.0;
          let sellmathbackgroundo: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,101,109,117,109,95,115,95,51,48,0),147], [String.fromCharCode(104,95,49,48,48,95,114,101,106,101,99,116,105,111,110,115,0),289], [String.fromCharCode(97,97,99,112,115,100,115,112,95,122,95,55,57,0),69]]);
          let basketballicon7 = false;
          let macaub = String.fromCharCode(116,95,49,55,95,115,117,98,99,111,101,102,115,0);
         airbnbstarselected9 <<= Math.min(1, Math.abs(3));
         yellowredcardB += `${2 << (Math.min(5, yellowredcardB.length))}`;
         iconclosewhitek *= sellmathbackgroundo.size << (Math.min(Math.abs(2), 5));
         sellmathbackgroundo.set(`${yellowredcardB}`, sellmathbackgroundo.size);
         basketballicon7 = sellmathbackgroundo.size < 60;
         macaub = "2";
      }
         airbnbstarselected9 ^= airbnbstarselected9 | 2;
      let anythinku = playershirth ? !playershirth : playershirth;
      do {
         playershirth = !playershirth;
         if (anythinku) {
            break;
         }
      } while (anythinku && (airbnbstarselected9 < 1));
          let selectI = 4.0;
         airbnbstarselected9 &= awayplayerY.length;
         selectI += parseFloat(`${parseInt(`${selectI}`)}`);
      if (airbnbstarselected9 > 4) {
          let lesso: Map<any, any> = new Map([[String.fromCharCode(114,116,114,101,101,99,104,101,99,107,95,106,95,50,49,0),843], [String.fromCharCode(111,95,51,57,95,109,117,116,97,98,105,108,105,116,121,0),723], [String.fromCharCode(113,95,54,95,110,98,105,116,115,0),693]]);
         airbnbstarselected9 |= 1 * airbnbstarselected9;
         lesso.set(`${lesso.size}`, lesso.size);
      }
      backgrounda = `${(String.fromCharCode(112,0) == eighteen8 ? whiteanimationliveu.size : eighteen8.length)}`;
       let bridge_: Map<any, any> = new Map([[String.fromCharCode(121,95,52,49,95,101,97,114,108,105,101,114,0),430], [String.fromCharCode(104,95,55,56,95,97,114,101,115,0),898], [String.fromCharCode(112,95,54,49,95,118,108,99,115,0),380]]);
         bridge_.set(`${bridge_.size}`, 3);
      if ((bridge_.size % (Math.max(3, bridge_.size))) >= 3 || 3 >= (bridge_.size % (Math.max(7, bridge_.size)))) {
         bridge_ = new Map([[`${bridge_.size}`, bridge_.size >> (Math.min(Math.abs(1), 1))]]);
      }
      for (let j = 0; j < 2; j++) {
         bridge_ = new Map([[`${bridge_.size}`, bridge_.size % 2]]);
      }
      notificationgrayr = `${iconbackwhiteI.length << (Math.min(Math.abs(3), 1))}`;
   if (2 == profileactiveM.size) {
      profileactiveM = new Map([[`${iconadslink2.length}`, backgrounda.length & iconadslink2.length]]);
   }
      notificationgrayr = `${(String.fromCharCode(66,0) == latn1 ? latn1.length : parseInt(`${vertical_}`))}`;
   for (let e = 0; e < 3; e++) {
      eighteen8 += `${parseInt(`${vertical_}`) >> (Math.min(Math.abs(1), 1))}`;
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
            source={require('../../../../static/images/dycreatorSuboutBoot.png')}
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
            source={require('../../../../static/images/configChat.png')}
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
            <UnlockScreenSvg width={40} height={40} />
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
                    showSlider === 'movies' &&
                    <View style={{ paddingLeft: spacing.sideOffset + 10, flex: 1, display: 'flex' }}>
                      {
                        isFetchingRecommendedMovies
                          ? <View style={{ ...styles.loading }}>
                            <FastImage
                              style={{ height: 80, width: 80 }}
                              source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
                      numberOfLines={1}>
                      {headerTitle}
                    </Text>
                  </TouchableOpacity>
                  {
                    videoType === 'vod' && <RectButton
                      disallowInterruption={true}
                      onPress={onShare}>
                      <ProjectSvg width={30} height={30} />
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
