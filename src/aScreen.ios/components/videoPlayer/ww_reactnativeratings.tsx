import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
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
  isFetchingRecommendedMovies?: boolean
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
       let floatingu: Array<any> = [707, 555];
    let long_pl = 4;
    let analyticd = String.fromCharCode(118,95,52,57,95,98,112,114,105,110,116,0);
    let libanet = String.fromCharCode(101,118,114,99,95,51,95,50,51,0);
    let iconfeedbackQ = true;
    let turnP: Map<any, any> = new Map([[String.fromCharCode(98,95,53,49,95,98,111,111,108,101,97,110,0),false ], [String.fromCharCode(115,95,54,56,95,112,114,101,102,102,101,114,101,100,0),true ], [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,106,95,50,48,0),false ]]);
    let rulesL = 4.0;
    let righta = String.fromCharCode(102,95,56,52,95,99,111,110,115,116,114,117,99,116,0);
    let dialogG = true;
    let skipQ = String.fromCharCode(100,101,108,97,95,49,95,53,50,0);
    let castm = String.fromCharCode(104,113,120,100,115,112,95,120,95,56,56,0);
    let gemfilem = true;
    let mapbuffere: Map<any, any> = new Map([[String.fromCharCode(98,95,56,48,95,114,101,118,101,114,115,101,0),String.fromCharCode(117,95,51,49,95,102,111,114,105,0)], [String.fromCharCode(114,95,53,48,95,100,101,105,110,105,116,0),String.fromCharCode(103,95,50,52,95,109,116,97,102,0)]]);
    let libyoga9 = String.fromCharCode(117,95,57,55,95,111,112,116,105,109,105,122,101,100,0);
       let o_hashk = 2.0;
       let actions2: Map<any, any> = new Map([[String.fromCharCode(99,95,53,56,95,100,101,99,111,109,112,111,115,101,105,0),String.fromCharCode(120,95,49,57,95,107,101,121,98,111,97,114,100,0)], [String.fromCharCode(111,112,116,105,109,105,122,101,114,95,115,95,49,48,48,0),String.fromCharCode(99,104,114,111,109,97,116,105,99,95,49,95,56,50,0)]]);
          let libswresampleP: Array<any> = [474, 848];
          let profileinactiveQ = 2;
          let utilsB = 2;
         actions2.set(`${utilsB}`, libswresampleP.length / 3);
         libswresampleP.push(profileinactiveQ >> (Math.min(Math.abs(3), 5)));
         profileinactiveQ += 3;
      let dialogV = o_hashk <= 9607160.0;
      do {
         o_hashk /= Math.max(5, parseFloat(`${parseInt(`${o_hashk}`) - 1}`));
         if (dialogV) {
            break;
         }
      } while ((!Array.from(actions2.keys()).includes(`${o_hashk}`)) && dialogV);
         o_hashk -= parseFloat(`${parseInt(`${o_hashk}`)}`);
          let popup0 = 4;
          let arrowY = String.fromCharCode(99,108,97,112,95,99,95,52,49,0);
         o_hashk += parseFloat(`${3 + popup0}`);
         popup0 %= Math.max(arrowY.length % (Math.max(3, 5)), 2);
         arrowY = `${(arrowY == String.fromCharCode(100,0) ? arrowY.length : arrowY.length)}`;
          let subtextT = 4.0;
          let away7 = 1.0;
          let gmailc = String.fromCharCode(99,101,110,116,114,101,95,110,95,51,0);
         o_hashk += parseFloat(`${parseInt(`${subtextT}`) | 1}`);
         subtextT /= Math.max(5, parseInt(`${away7}`) % (Math.max(gmailc.length, 5)));
         away7 += 1 + gmailc.length;
      if (3 == (parseInt(`${o_hashk}`) / (Math.max(actions2.size, 5))) || (parseInt(`${o_hashk}`) / (Math.max(actions2.size, 4))) == 3) {
          let fastforwardJ = false;
          let completeH = 3;
          let langkey5 = false;
         actions2.set(`${completeH}`, 1);
         fastforwardJ = !fastforwardJ && !langkey5;
         completeH += (1 / (Math.max(6, (fastforwardJ ? 4 : 1))));
      }
      iconfeedbackQ = !analyticd.startsWith(`${iconfeedbackQ}`);
      rulesL += ((dialogG ? 4 : 3));
   while (1 < analyticd.length) {
      analyticd += "2";
      break;
   }
   let playG = turnP.size >= 9354218;
   do {
      turnP.set(`${rulesL}`, parseInt(`${rulesL}`) | 1);
      if (playG) {
         break;
      }
   } while (playG && ((turnP.size / 5) >= 2 || 5 >= turnP.size));
   let relatedz = 9245207 <= turnP.size;
   do {
      turnP.set(`${iconfeedbackQ}`, ((iconfeedbackQ ? 5 : 3) << (Math.min(Math.abs(turnP.size), 2))));
      if (relatedz) {
         break;
      }
   } while ((2 <= (5 << (Math.min(5, Math.abs(long_pl))))) && relatedz);
   for (let i = 0; i < 1; i++) {
      turnP = new Map([[`${iconfeedbackQ}`, 1 + libanet.length]]);
   }
   if (libanet.length >= 3) {
       let routerh: Map<any, any> = new Map([[String.fromCharCode(107,102,119,114,105,116,101,95,101,95,52,49,0),834], [String.fromCharCode(117,95,56,48,95,110,101,109,111,110,105,99,0),842]]);
       let footballfiledlayouts: Array<any> = [155, 865];
         footballfiledlayouts.push(footballfiledlayouts.length);
         footballfiledlayouts.push(routerh.size);
       let becomev = String.fromCharCode(101,95,57,55,95,110,101,116,119,111,114,107,115,0);
         becomev += `${becomev.length}`;
         footballfiledlayouts.push(routerh.size);
      for (let u = 0; u < 1; u++) {
         footballfiledlayouts.push(becomev.length | 3);
      }
      analyticd += `${routerh.size & 2}`;
   }
   if (!libanet.endsWith(`${floatingu.length}`)) {
       let builda = 1.0;
       let frame_3q_ = true;
       let animations6 = String.fromCharCode(110,111,114,109,97,108,105,122,101,95,51,95,57,56,0);
       let dropdowny = String.fromCharCode(121,95,51,95,102,105,110,100,110,101,116,0);
       let libavfilter7 = false;
      while (frame_3q_) {
         frame_3q_ = animations6.length > 50 || String.fromCharCode(85,0) == dropdowny;
         break;
      }
      for (let q = 0; q < 2; q++) {
          let commonA = true;
          let currentJ: Array<any> = [358, 804, 307];
          let k_centerT: Array<any> = [389, 543];
          let iconwatchnowS = String.fromCharCode(97,99,107,100,114,111,112,95,57,95,50,48,0);
          let latna = 5.0;
         builda += iconwatchnowS.length;
         commonA = currentJ.length <= 91 && !commonA;
         currentJ.push(parseInt(`${latna}`) ^ 2);
         k_centerT.push(k_centerT.length);
         iconwatchnowS = `${currentJ.length}`;
         latna /= Math.max(2, parseFloat(`${parseInt(`${latna}`)}`));
      }
      let shootyesgoalz = 8162841 <= animations6.length;
      do {
         animations6 = `${((frame_3q_ ? 2 : 2))}`;
         if (shootyesgoalz) {
            break;
         }
      } while (shootyesgoalz && (3 < animations6.length && frame_3q_));
      for (let j = 0; j < 1; j++) {
         animations6 = `${2 << (Math.min(3, dropdowny.length))}`;
      }
         builda *= ((libavfilter7 ? 3 : 2));
       let v_hasho = 1.0;
       let libswresampleH = 4.0;
       let iconT = false;
       let whistleorangep = false;
      if (!animations6.endsWith(`${iconT}`)) {
          let telemetry_: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,97,110,99,101,95,112,95,50,0),385], [String.fromCharCode(100,95,49,95,116,105,99,107,101,116,0),10]]);
          let relatedZ = true;
         iconT = (29 < ((!frame_3q_ ? 29 : animations6.length) | animations6.length));
         telemetry_.set(`${relatedZ}`, ((relatedZ ? 2 : 3) / (Math.max(telemetry_.size, 7))));
      }
         dropdowny = `${((libavfilter7 ? 1 : 3) * parseInt(`${builda}`))}`;
       let inewarchdefaultsB = 1.0;
       let subbasketballplayerx = 4.0;
      while (!libavfilter7) {
         libavfilter7 = parseInt(`${v_hasho}`) < animations6.length;
         break;
      }
      while (libavfilter7) {
         libavfilter7 = (builda + inewarchdefaultsB) == 28.48;
         break;
      }
      if (4 == dropdowny.length) {
         dropdowny += `${parseInt(`${v_hasho}`) >> (Math.min(Math.abs(parseInt(`${libswresampleH}`)), 1))}`;
      }
          let modulesg = 0.0;
          let quests = true;
          let cancelc = String.fromCharCode(110,95,49,48,48,95,102,105,120,116,117,114,101,115,0);
         iconT = v_hasho > 26.63 || !whistleorangep;
         modulesg += ((quests ? 3 : 3) + cancelc.length);
         quests = cancelc.endsWith(`${quests}`);
          let profileactive9: Map<any, any> = new Map([[String.fromCharCode(109,117,116,97,116,105,111,110,95,100,95,51,55,0),396], [String.fromCharCode(98,95,54,57,95,99,111,111,114,100,105,110,97,116,111,114,0),684]]);
          let dplusW = String.fromCharCode(97,118,99,111,100,101,99,95,101,95,55,54,0);
         libavfilter7 = !frame_3q_ && 81.39 >= libswresampleH;
         profileactive9 = new Map([[`${profileactive9.size}`, 2]]);
         dplusW += `${dplusW.length}`;
      libanet += `${righta.length << (Math.min(Math.abs(1), 2))}`;
   }
      iconfeedbackQ = libanet == String.fromCharCode(50,0);
      rulesL *= parseInt(`${rulesL}`);
       let topony = 2.0;
       let iconmoreW = String.fromCharCode(103,95,51,55,95,115,116,114,117,99,116,117,114,101,0);
       let signinupp: Array<any> = [296, 873, 519];
       let thumbnailY: Array<any> = [String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,100,95,49,48,0), String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,121,95,52,49,0)];
         iconmoreW = `${signinupp.length}`;
      while (2 < signinupp.length) {
          let combinedc = 1.0;
          let sportp = 2.0;
         iconmoreW = "2";
         combinedc *= parseFloat(`${parseInt(`${combinedc}`) - 3}`);
         sportp -= parseFloat(`${parseInt(`${combinedc}`)}`);
         break;
      }
          let dacccfaabfbcbadeebddcabacdffdbu = 0.0;
         topony /= Math.max(2, 3);
         dacccfaabfbcbadeebddcabacdffdbu += parseFloat(`${parseInt(`${dacccfaabfbcbadeebddcabacdffdbu}`) >> (Math.min(2, Math.abs(1)))}`);
          let chartq = String.fromCharCode(114,95,53,48,95,101,109,98,101,100,0);
          let networkF = 0.0;
          let giflivestreamingK = String.fromCharCode(97,95,49,54,95,115,121,109,98,111,108,0);
         iconmoreW += `${3 & parseInt(`${topony}`)}`;
         chartq = `${chartq.length}`;
         networkF -= parseInt(`${networkF}`);
         giflivestreamingK += `${(giflivestreamingK == String.fromCharCode(80,0) ? parseInt(`${networkF}`) : giflivestreamingK.length)}`;
      for (let b = 0; b < 1; b++) {
         iconmoreW += `${thumbnailY.length}`;
      }
      analyticd += `${1 ^ long_pl}`;
       let goalx = String.fromCharCode(104,101,105,103,104,116,115,95,54,95,50,54,0);
       let product1 = String.fromCharCode(111,95,50,57,95,109,111,118,101,110,99,0);
      let progressi = String.fromCharCode(101,120,100,111,95,0) == goalx;
      do {
         goalx = `${2 ^ goalx.length}`;
         if (progressi) {
            break;
         }
      } while ((product1 == String.fromCharCode(103,0)) && progressi);
         product1 += "1";
         product1 += "3";
      if (product1.startsWith(`${goalx.length}`)) {
         goalx += `${goalx.length}`;
      }
         product1 += `${goalx.length << (Math.min(Math.abs(2), 5))}`;
      let confirmationM = 5789672 >= goalx.length;
      do {
         goalx = `${goalx.length >> (Math.min(Math.abs(2), 5))}`;
         if (confirmationM) {
            break;
         }
      } while (confirmationM && (!product1.includes(`${goalx.length}`)));
      castm = `${product1.length >> (Math.min(Math.abs(2), 3))}`;
   let friends5 = String.fromCharCode(121,109,51,50,108,0) == castm;
   do {
      castm = `${analyticd.length}`;
      if (friends5) {
         break;
      }
   } while (friends5 && (castm.length >= libanet.length));
   for (let b = 0; b < 1; b++) {
       let orangeclockI = 2;
       let modal5: Map<any, any> = new Map([[String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,106,95,53,56,0),103], [String.fromCharCode(120,95,52,51,95,115,105,109,112,108,101,0),284]]);
      while (modal5.get(`${orangeclockI}`) != null) {
         modal5.set(`${orangeclockI}`, modal5.size);
         break;
      }
      while (2 == (orangeclockI ^ 4)) {
         modal5.set(`${orangeclockI}`, 1 + orangeclockI);
         break;
      }
      for (let q = 0; q < 2; q++) {
         orangeclockI -= orangeclockI * modal5.size;
      }
          let malaysias = 4.0;
          let bggradientT: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,110,117,109,95,57,95,50,57,0),731], [String.fromCharCode(110,99,111,109,105,110,103,95,57,95,49,49,0),795], [String.fromCharCode(112,117,116,98,121,116,101,95,57,95,51,55,0),76]]);
         orangeclockI %= Math.max(5, bggradientT.size << (Math.min(3, Math.abs(parseInt(`${malaysias}`)))));
      let phoneshare8 = orangeclockI >= 7539204;
      do {
         orangeclockI &= 2;
         if (phoneshare8) {
            break;
         }
      } while ((modal5.get(`${orangeclockI}`) == null) && phoneshare8);
      while (!Array.from(modal5.keys()).includes(`${orangeclockI}`)) {
         orangeclockI >>= Math.min(4, Math.abs(orangeclockI));
         break;
      }
      righta = `${3 % (Math.max(10, parseInt(`${rulesL}`)))}`;
   }
   if (analyticd == libanet) {
      libanet = `${1 % (Math.max(3, parseInt(`${rulesL}`)))}`;
   }
   while ((analyticd.length + 4) == 5 && 2 == (4 << (Math.min(4, analyticd.length)))) {
      rulesL *= skipQ.length % 1;
      break;
   }
      gemfilem = dialogG;
       let iconplayC = false;
      let faviconZ = iconplayC ? !iconplayC : iconplayC;
      do {
          let flyerA = 2.0;
          let episode9 = 4.0;
          let overlay1 = String.fromCharCode(100,95,54,52,95,112,111,107,101,114,0);
          let trophyp = false;
         iconplayC = !trophyp;
         flyerA *= (parseFloat(`${overlay1 == String.fromCharCode(85,0) ? overlay1.length : parseInt(`${episode9}`)}`));
         episode9 *= (parseFloat(`${String.fromCharCode(50,0) == overlay1 ? overlay1.length : parseInt(`${episode9}`)}`));
         if (faviconZ) {
            break;
         }
      } while (faviconZ && (!iconplayC));
         iconplayC = !iconplayC;
      let libsgcoreK = iconplayC ? !iconplayC : iconplayC;
      do {
         iconplayC = iconplayC && iconplayC;
         if (libsgcoreK) {
            break;
         }
      } while ((!iconplayC && !iconplayC) && libsgcoreK);
      castm += "3";
      rulesL += libanet.length;
   for (let k = 0; k < 3; k++) {
      skipQ = `${righta.length}`;
   }
   if (dialogG && analyticd.length == 3) {
      dialogG = righta.endsWith(`${long_pl}`);
   }
   for (let x = 0; x < 2; x++) {
      long_pl <<= Math.min(4, Math.abs(((gemfilem ? 4 : 1))));
   }
   while (4.77 >= (rulesL + 4.59) && !gemfilem) {
      rulesL -= 2;
      break;
   }

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
       let edity = String.fromCharCode(101,120,105,115,116,97,110,99,101,95,118,95,56,52,0);
    let chinasameM = String.fromCharCode(103,111,108,100,101,110,95,53,95,51,52,0);
    let greytickh = String.fromCharCode(101,95,54,56,95,105,109,112,111,114,116,97,110,99,101,0);
    let mimoo = String.fromCharCode(114,95,54,49,95,116,111,103,103,108,101,0);
    let defaultfootballbgS: Map<any, any> = new Map([[String.fromCharCode(115,101,99,115,95,122,95,51,55,0),true ], [String.fromCharCode(109,97,120,113,95,48,95,49,55,0),false ], [String.fromCharCode(103,95,49,49,95,100,115,116,115,117,98,0),false ]]);
    let release_bK = 2.0;
    let downloaderL = String.fromCharCode(112,114,105,109,97,114,105,101,115,95,106,95,53,50,0);
    let baselineS = false;
    let quest1 = true;
    let orangeY = 0;
    let editp = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,110,95,50,54,0);
    let modala: Map<any, any> = new Map([[String.fromCharCode(114,95,52,50,95,112,97,115,99,97,108,0),935], [String.fromCharCode(99,102,115,116,114,101,97,109,95,104,95,56,57,0),509]]);
   for (let y = 0; y < 1; y++) {
       let popupP = String.fromCharCode(100,111,119,110,108,111,97,100,95,113,95,50,56,0);
       let phoneH = 0;
       let carouselX = String.fromCharCode(121,95,50,52,95,116,121,112,101,111,102,0);
       let starT: Array<any> = [String.fromCharCode(97,95,57,52,95,99,121,99,108,105,99,0), String.fromCharCode(103,114,111,101,115,116,108,95,102,95,56,53,0), String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,54,95,49,51,0)];
       let linkz: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,114,103,98,95,103,95,54,48,0),44], [String.fromCharCode(105,95,50,95,114,111,117,110,100,110,101,115,115,0),276]]);
      let dangerC = phoneH <= 8815209;
      do {
         phoneH &= carouselX.length;
         if (dangerC) {
            break;
         }
      } while ((popupP.length <= 3) && dangerC);
      if (starT.length <= 5) {
         starT = [2];
      }
       let overlay_ = 5.0;
      let successU = carouselX.length <= 9285930;
      do {
         carouselX = `${1 & starT.length}`;
         if (successU) {
            break;
         }
      } while (successU && ((phoneH >> (Math.min(carouselX.length, 5))) == 2 && 5 == (2 >> (Math.min(5, Math.abs(phoneH))))));
      if (4 >= (3 / (Math.max(7, linkz.size))) && 3 >= (linkz.size / (Math.max(5, starT.length)))) {
         starT = [popupP.length & carouselX.length];
      }
         phoneH /= Math.max(4, starT.length);
      for (let s = 0; s < 3; s++) {
         phoneH *= phoneH | parseInt(`${overlay_}`);
      }
      while (4 > carouselX.length) {
         popupP = `${linkz.size}`;
         break;
      }
      while (parseInt(`${overlay_}`) < starT.length) {
          let completeC = 2.0;
         starT = [parseInt(`${overlay_}`)];
         completeC += parseFloat(`${parseInt(`${completeC}`)}`);
         break;
      }
          let checkboxH = String.fromCharCode(111,117,116,112,117,116,115,95,105,95,54,0);
          let iconfeedbackF = 4.0;
          let sidey: Map<any, any> = new Map([[String.fromCharCode(114,95,50,49,95,98,105,119,101,105,103,104,116,0),501], [String.fromCharCode(101,110,106,105,110,95,104,95,55,55,0),954]]);
         phoneH *= carouselX.length;
         checkboxH = `${checkboxH.length % 1}`;
         iconfeedbackF += parseFloat(`${sidey.size - 2}`);
         sidey.set(`${iconfeedbackF}`, parseInt(`${iconfeedbackF}`) & 1);
      let serviceU = carouselX.length >= 5989365;
      do {
         carouselX = `${(carouselX == String.fromCharCode(82,0) ? starT.length : carouselX.length)}`;
         if (serviceU) {
            break;
         }
      } while (serviceU && (!carouselX.includes(`${overlay_}`)));
          let spec5: Array<any> = [String.fromCharCode(107,95,57,56,95,103,101,110,101,114,97,103,101,0), String.fromCharCode(101,110,102,111,114,99,101,95,110,95,52,50,0)];
         overlay_ *= parseFloat(`${1}`);
         spec5 = [spec5.length];
          let teamdetailsbgY = String.fromCharCode(109,95,55,52,0);
          let minivodO = 2.0;
          let roomV = 0;
         linkz.set(teamdetailsbgY, 1 * parseInt(`${overlay_}`));
         teamdetailsbgY += "1";
         minivodO += parseFloat(`${3 >> (Math.min(Math.abs(roomV), 1))}`);
         roomV |= roomV / (Math.max(4, parseInt(`${minivodO}`)));
         linkz.set(popupP, 1);
      let clockT = 8477320 >= popupP.length;
      do {
         popupP += `${parseInt(`${overlay_}`)}`;
         if (clockT) {
            break;
         }
      } while (clockT && ((linkz.size & 4) == 2));
      defaultfootballbgS = new Map([[mimoo, 3]]);
   }
      baselineS = downloaderL.length < 64 && baselineS;
   if (greytickh.includes(`${orangeY}`)) {
       let applev = String.fromCharCode(112,117,98,108,105,99,95,53,95,53,0);
       let inactiveh = false;
          let telegram7 = String.fromCharCode(101,95,50,54,95,105,115,115,117,101,115,0);
          let fill6: Array<any> = [58, 436];
         inactiveh = telegram7.startsWith(`${inactiveh}`);
         telegram7 = `${fill6.length}`;
         fill6 = [fill6.length ^ 1];
      if (1 > applev.length || !inactiveh) {
          let profileframek = false;
          let release_134 = String.fromCharCode(108,111,99,107,101,100,95,101,95,56,56,0);
          let const_5t: Array<any> = [String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,95,104,95,57,55,0), String.fromCharCode(112,95,50,56,95,114,105,102,102,0)];
         applev = `${((profileframek ? 1 : 1) ^ 3)}`;
         profileframek = String.fromCharCode(113,0) == release_134;
         release_134 += "2";
         const_5t = [1];
      }
       let short_1f: Map<any, any> = new Map([[String.fromCharCode(122,95,49,50,95,117,110,105,110,105,116,105,97,108,105,122,101,100,0),471], [String.fromCharCode(116,95,50,52,95,111,117,116,113,117,101,117,101,0),383], [String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,110,95,55,50,0),39]]);
       let videovarQ: Map<any, any> = new Map([[String.fromCharCode(115,116,105,102,102,110,101,115,115,95,118,95,54,54,0),501], [String.fromCharCode(112,97,115,112,95,107,95,51,0),273]]);
      while (applev.length < 2 || inactiveh) {
         inactiveh = videovarQ.size < 99;
         break;
      }
          let description__p7 = String.fromCharCode(121,95,53,48,95,112,97,103,101,0);
         inactiveh = videovarQ.size == description__p7.length;
      let thumbnailX = applev.length <= 5552752;
      do {
          let libglogu: Array<any> = [635, 900];
          let streamingG = String.fromCharCode(100,95,48,95,116,97,115,107,115,0);
          let topici = 1;
          let xvodK = 0.0;
          let m_managery = String.fromCharCode(108,108,97,117,100,100,115,112,95,120,95,55,54,0);
         applev = `${parseInt(`${xvodK}`) + 1}`;
         libglogu.push(streamingG.length - libglogu.length);
         streamingG += `${m_managery.length & topici}`;
         topici &= libglogu.length - 1;
         xvodK /= Math.max(5, parseFloat(`${streamingG.length * libglogu.length}`));
         m_managery += `${1 & libglogu.length}`;
         if (thumbnailX) {
            break;
         }
      } while ((applev.startsWith(`${videovarQ.size}`)) && thumbnailX);
      greytickh = `${mimoo.length}`;
   }
      release_bK += parseFloat(`${2 * orangeY}`);
   let placeholderx = edity.length <= 8939698;
   do {
      edity += `${downloaderL.length * 1}`;
      if (placeholderx) {
         break;
      }
   } while (((edity.length ^ defaultfootballbgS.size) > 1 && 3 > (1 ^ edity.length)) && placeholderx);
       let faviconK: Array<any> = [679, 964];
       let linke = String.fromCharCode(117,95,53,57,95,101,120,112,114,101,115,115,105,111,110,0);
       let libffmpegkita = String.fromCharCode(107,95,55,57,95,107,101,121,118,97,108,0);
         linke = `${libffmpegkita.length / 1}`;
      for (let k = 0; k < 1; k++) {
         libffmpegkita += `${2 | faviconK.length}`;
      }
      for (let q = 0; q < 3; q++) {
          let imagenetworkerrG = 3.0;
          let clubf = String.fromCharCode(105,110,115,101,114,116,115,95,49,95,57,52,0);
          let hookm = 3.0;
         linke = `${libffmpegkita.length - linke.length}`;
         imagenetworkerrG *= parseFloat(`${clubf.length}`);
         clubf += `${(clubf == String.fromCharCode(82,0) ? clubf.length : parseInt(`${hookm}`))}`;
         hookm /= Math.max(4, parseFloat(`${parseInt(`${imagenetworkerrG}`) + 2}`));
      }
      let eactc = libffmpegkita.length <= 7210556;
      do {
          let photoy = String.fromCharCode(120,95,57,49,95,97,114,103,117,109,101,110,116,115,0);
          let referrern: Array<any> = [350, 738, 919];
          let popupN: Map<any, any> = new Map([[String.fromCharCode(115,95,49,52,95,101,114,97,115,101,114,0),String.fromCharCode(107,95,54,55,95,97,112,112,114,116,99,0)], [String.fromCharCode(98,114,101,97,107,105,110,103,95,56,95,50,57,0),String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,100,95,55,52,0)]]);
         libffmpegkita = `${(String.fromCharCode(79,0) == linke ? linke.length : referrern.length)}`;
         photoy += `${popupN.size / (Math.max(photoy.length, 4))}`;
         referrern = [2];
         popupN = new Map([[`${popupN.size}`, photoy.length]]);
         if (eactc) {
            break;
         }
      } while (((faviconK.length * 4) >= 4 && 4 >= (libffmpegkita.length * faviconK.length)) && eactc);
         linke += `${(String.fromCharCode(101,0) == linke ? libffmpegkita.length : linke.length)}`;
         libffmpegkita = `${linke.length}`;
      let baser = String.fromCharCode(117,113,116,104,57,120,118,0) == linke;
      do {
         linke = `${linke.length}`;
         if (baser) {
            break;
         }
      } while (baser && ((faviconK.length / 3) == 5));
      for (let d = 0; d < 1; d++) {
          let yellowvideolivek = String.fromCharCode(99,95,57,56,95,119,104,105,116,101,115,0);
         linke = `${(String.fromCharCode(90,0) == linke ? yellowvideolivek.length : linke.length)}`;
      }
         linke += `${linke.length | faviconK.length}`;
      edity += `${1 % (Math.max(4, editp.length))}`;
   let iconschedulez = edity.length >= 5540462;
   do {
      edity += `${((baselineS ? 4 : 2) + 2)}`;
      if (iconschedulez) {
         break;
      }
   } while (iconschedulez && (edity.startsWith(`${editp.length}`)));
   if (editp != edity) {
      edity += `${editp.length << (Math.min(Math.abs(3), 4))}`;
   }
      downloaderL = `${1 | mimoo.length}`;
   while (editp.length > 4) {
       let muted3 = 2.0;
       let manifestd = 2.0;
         manifestd += parseInt(`${manifestd}`) * 2;
         manifestd += parseInt(`${muted3}`);
       let list4 = 1.0;
         manifestd *= parseInt(`${muted3}`);
       let footballfieldC = String.fromCharCode(111,95,56,52,95,115,117,110,118,101,114,0);
       let mimoi = String.fromCharCode(109,117,108,116,105,112,108,121,120,95,116,95,52,51,0);
       let topicK: Array<any> = [String.fromCharCode(97,114,116,105,102,97,99,116,115,95,109,95,51,54,0), String.fromCharCode(99,95,54,49,95,114,101,99,111,118,101,114,121,0)];
      editp = `${((quest1 ? 2 : 3) >> (Math.min(Math.abs(1), 4)))}`;
      break;
   }
       let modulea = String.fromCharCode(117,95,50,56,95,100,101,115,116,111,114,121,0);
         modulea += `${(modulea == String.fromCharCode(81,0) ? modulea.length : modulea.length)}`;
       let volumeo = String.fromCharCode(112,95,53,51,95,105,110,115,116,97,108,108,97,116,105,111,110,0);
       let rewardN = String.fromCharCode(99,111,108,108,105,115,116,95,110,95,51,49,0);
         volumeo = `${volumeo.length << (Math.min(modulea.length, 1))}`;
      orangeY &= 3 + greytickh.length;
      release_bK *= parseFloat(`${parseInt(`${release_bK}`)}`);
   for (let q = 0; q < 2; q++) {
      quest1 = 29 == defaultfootballbgS.size;
   }
       let libhermesv: Map<any, any> = new Map([[String.fromCharCode(110,111,110,100,99,95,100,95,54,48,0),804], [String.fromCharCode(108,111,99,97,108,104,111,115,116,95,109,95,52,56,0),211], [String.fromCharCode(112,95,56,51,95,119,109,118,100,115,112,0),638]]);
       let floatingh: Array<any> = [431, 623, 694];
       let reactnativeultimatelistviewu: Map<any, any> = new Map([[String.fromCharCode(108,97,118,102,105,95,120,95,51,49,0),String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,98,95,55,51,0)], [String.fromCharCode(98,95,52,53,95,108,97,121,111,121,116,0),String.fromCharCode(117,110,105,116,95,118,95,50,0)], [String.fromCharCode(114,95,55,49,95,115,99,97,108,105,110,103,0),String.fromCharCode(117,95,55,50,95,99,111,99,111,115,100,120,0)]]);
       let teamdetailsbgd = String.fromCharCode(102,95,51,54,95,101,115,116,105,109,97,116,105,111,110,0);
       let iconwechatn = String.fromCharCode(100,105,114,112,95,109,95,57,49,0);
         iconwechatn += `${libhermesv.size << (Math.min(Math.abs(3), 3))}`;
      for (let t = 0; t < 3; t++) {
          let memberE: Array<any> = [258, 387];
         iconwechatn += "1";
         memberE = [3 - memberE.length];
      }
         iconwechatn = `${reactnativeultimatelistviewu.size}`;
         floatingh = [iconwechatn.length];
         teamdetailsbgd += "3";
         libhermesv = new Map([[`${libhermesv.size}`, teamdetailsbgd.length >> (Math.min(Math.abs(1), 1))]]);
      if ((floatingh.length / 4) <= 4) {
         floatingh.push(teamdetailsbgd.length >> (Math.min(Math.abs(2), 4)));
      }
      let sharemodal5 = floatingh.length >= 5436002;
      do {
          let saveA: Array<any> = [63, 621, 617];
          let goal9: Array<any> = [115, 820];
          let submit3: Array<any> = [175, 69];
          let mbjscommonk = String.fromCharCode(120,95,51,49,95,114,101,99,111,118,101,114,121,0);
         floatingh.push(mbjscommonk.length * reactnativeultimatelistviewu.size);
         saveA = [goal9.length];
         goal9.push(goal9.length % (Math.max(6, saveA.length)));
         submit3 = [2 - goal9.length];
         mbjscommonk = `${submit3.length}`;
         if (sharemodal5) {
            break;
         }
      } while (sharemodal5 && (4 == teamdetailsbgd.length));
      downloaderL = "2";

    setShowSliderThumbnail(!showSliderThumbnail);

      editp = `${mimoo.length}`;
   if (downloaderL.endsWith(editp)) {
       let private_8j = 1.0;
       let renderw = String.fromCharCode(100,95,56,50,0);
       let iconsubssuccessw = String.fromCharCode(114,101,103,105,111,110,95,102,95,54,48,0);
       let middleg: Array<any> = [57, 86];
       let usernameg = 3.0;
      if (!iconsubssuccessw.startsWith(`${middleg.length}`)) {
         iconsubssuccessw = `${renderw.length}`;
      }
         usernameg -= parseFloat(`${parseInt(`${usernameg}`) | 2}`);
      if (renderw.includes(iconsubssuccessw)) {
         renderw += `${(iconsubssuccessw == String.fromCharCode(98,0) ? iconsubssuccessw.length : middleg.length)}`;
      }
         private_8j += parseFloat(`${middleg.length}`);
      while (1 > renderw.length) {
          let dycreator1 = 1;
          let clocko = String.fromCharCode(98,101,110,99,104,95,122,95,51,57,0);
          let binddatasL = String.fromCharCode(101,110,116,105,114,101,95,101,95,53,56,0);
          let privilegeq = 1.0;
         renderw = `${(String.fromCharCode(117,0) == iconsubssuccessw ? iconsubssuccessw.length : parseInt(`${private_8j}`))}`;
         dycreator1 %= Math.max(3, parseInt(`${privilegeq}`));
         clocko = `${parseInt(`${privilegeq}`) >> (Math.min(5, Math.abs(3)))}`;
         binddatasL += "2 | dycreator1";
         break;
      }
         middleg.push(renderw.length << (Math.min(1, Math.abs(parseInt(`${private_8j}`)))));
      let sansE = 5103929 <= middleg.length;
      do {
         middleg = [parseInt(`${usernameg}`)];
         if (sansE) {
            break;
         }
      } while (sansE && (4 == (1 << (Math.min(4, middleg.length))) || (middleg.length + 1) == 5));
      while (5 >= middleg.length) {
         middleg.push(3 % (Math.max(9, parseInt(`${private_8j}`))));
         break;
      }
          let mailj = String.fromCharCode(113,100,109,99,95,48,95,53,52,0);
          let eyeopen0 = String.fromCharCode(121,117,118,109,111,110,111,95,120,95,52,49,0);
          let arrowupJ = String.fromCharCode(104,95,49,48,95,97,117,116,111,114,101,102,114,101,115,104,0);
         renderw = `${iconsubssuccessw.length >> (Math.min(2, middleg.length))}`;
         mailj += `${2 >> (Math.min(3, arrowupJ.length))}`;
         eyeopen0 += `${mailj.length}`;
         arrowupJ += `${mailj.length}`;
          let watchm = 1.0;
          let nalyticsJ = String.fromCharCode(97,115,111,99,105,100,95,102,95,53,56,0);
         iconsubssuccessw = "3";
         watchm /= Math.max(3, parseFloat(`${parseInt(`${watchm}`) / (Math.max(nalyticsJ.length, 6))}`));
         nalyticsJ = `${nalyticsJ.length}`;
          let philippinesY = 1.0;
          let middlebrightness7 = String.fromCharCode(112,95,49,49,95,116,105,116,108,101,98,97,114,0);
          let penaltygoalM = true;
         renderw = `${(middlebrightness7 == String.fromCharCode(117,0) ? middlebrightness7.length : parseInt(`${philippinesY}`))}`;
         philippinesY += (parseFloat(`${(penaltygoalM ? 1 : 4)}`));
      for (let j = 0; j < 2; j++) {
          let unfille = 4.0;
         iconsubssuccessw += `${iconsubssuccessw.length}`;
         unfille += parseInt(`${unfille}`) - 3;
      }
       let applicationD = false;
       let desc8 = false;
      let orientationE = desc8 ? !desc8 : desc8;
      do {
          let libfbq = 0.0;
          let renderj = 2.0;
          let greytickT = String.fromCharCode(122,112,116,102,95,52,95,53,51,0);
          let dependenciesx = false;
          let configp = String.fromCharCode(108,95,50,53,95,120,109,108,115,0);
         desc8 = (greytickT.length ^ middleg.length) < 59;
         libfbq -= (parseInt(`${renderj}`) | (dependenciesx ? 4 : 2));
         renderj -= parseFloat(`${3 & parseInt(`${renderj}`)}`);
         greytickT = "3";
         dependenciesx = 31.69 < renderj || dependenciesx;
         configp = `${parseInt(`${renderj}`)}`;
         if (orientationE) {
            break;
         }
      } while ((3 >= (4 << (Math.min(3, middleg.length)))) && orientationE);
      while (3.94 >= usernameg) {
         desc8 = 74.4 > private_8j || !applicationD;
         break;
      }
      editp = "1";
   }
      chinasameM = `${orangeY >> (Math.min(5, Math.abs(1)))}`;
   for (let d = 0; d < 3; d++) {
      downloaderL += `${chinasameM.length / (Math.max(greytickh.length, 5))}`;
   }
      defaultfootballbgS.set(`${quest1}`, modala.size);
   while (5.44 >= release_bK) {
      downloaderL += `${greytickh.length}`;
      break;
   }
      mimoo = `${modala.size}`;
      orangeY += (orangeY - (quest1 ? 2 : 3));
       let gemfileI = 1.0;
       let foregroundZ = 1.0;
       let flipperX = String.fromCharCode(116,101,120,116,95,100,95,50,52,0);
      let paginationZ = String.fromCharCode(51,113,50,115,50,0) == flipperX;
      do {
         flipperX = `${flipperX.length % 1}`;
         if (paginationZ) {
            break;
         }
      } while (paginationZ && (gemfileI <= 1.42));
       let middleI = 0;
       let libavformatP = 0.0;
       let iconpipexpandI = 4.0;
      if (3.7 == iconpipexpandI) {
          let k_center3 = 0;
          let volumeT: Array<any> = [186, 623, 944];
          let plusO = String.fromCharCode(108,95,52,51,95,117,110,115,117,112,112,111,114,116,101,100,0);
          let iconmorew: Array<any> = [418, 540];
          let proxyj = String.fromCharCode(116,95,53,95,112,114,111,98,0);
         libavformatP -= 1 + plusO.length;
         k_center3 |= 3;
         volumeT.push(iconmorew.length / (Math.max(3, k_center3)));
         plusO += "1";
         iconmorew = [(proxyj == String.fromCharCode(117,0) ? iconmorew.length : proxyj.length)];
      }
         middleI /= Math.max(3, parseInt(`${foregroundZ}`));
         middleI &= parseInt(`${libavformatP}`) % 2;
      let combineG = middleI <= 5505997;
      do {
         middleI /= Math.max(3, parseInt(`${foregroundZ}`));
         if (combineG) {
            break;
         }
      } while (combineG && (flipperX.endsWith(`${middleI}`)));
         foregroundZ /= Math.max((parseFloat(`${String.fromCharCode(87,0) == flipperX ? parseInt(`${iconpipexpandI}`) : flipperX.length}`)), 2);
          let shootg: Array<any> = [String.fromCharCode(109,95,57,57,95,99,112,117,117,115,101,100,0), String.fromCharCode(102,105,110,105,115,104,95,118,95,54,51,0), String.fromCharCode(117,95,51,49,95,109,117,116,97,116,105,111,110,0)];
          let dycreatork = 2.0;
         flipperX += `${shootg.length}`;
         shootg = [1 >> (Math.min(Math.abs(parseInt(`${dycreatork}`)), 1))];
         dycreatork /= Math.max(parseFloat(`${parseInt(`${dycreatork}`) % 2}`), 2);
      mimoo += `${(String.fromCharCode(74,0) == editp ? modala.size : editp.length)}`;
       let vertical6 = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,118,95,53,52,0);
         vertical6 = `${(String.fromCharCode(101,0) == vertical6 ? vertical6.length : vertical6.length)}`;
         vertical6 += `${vertical6.length % (Math.max(2, 1))}`;
       let u_positionh = false;
      baselineS = 85 >= orangeY;
   while (downloaderL.length < 2 || baselineS) {
      downloaderL += `${parseInt(`${release_bK}`) / (Math.max(8, editp.length))}`;
      break;
   }
      quest1 = (mimoo.length - edity.length) <= 1;
      orangeY /= Math.max(1, greytickh.length);
   let progresss = quest1 ? !quest1 : quest1;
   do {
      quest1 = mimoo.length < 30;
      if (progresss) {
         break;
      }
   } while ((!quest1 || mimoo.length <= 4) && progresss);
    delayControls(!paused);

      baselineS = !baselineS;
       let configD = 2.0;
      for (let m = 0; m < 3; m++) {
         configD *= parseFloat(`${parseInt(`${configD}`)}`);
      }
         configD -= parseFloat(`${3 - parseInt(`${configD}`)}`);
      let philippinesi = configD <= 7641626.0;
      do {
          let transferq: Map<any, any> = new Map([[String.fromCharCode(98,105,110,97,115,99,105,105,95,51,95,48,0),425], [String.fromCharCode(115,117,112,101,114,115,101,116,95,105,95,55,55,0),353]]);
          let videoS = String.fromCharCode(119,95,56,52,95,101,120,112,105,114,101,115,0);
          let episodej: Array<any> = [355, 122, 739];
          let mbnativeadvancedY: Array<any> = [942, 246];
          let incidente = 5;
         configD += (parseFloat(`${String.fromCharCode(116,0) == videoS ? videoS.length : episodej.length}`));
         transferq.set(`${mbnativeadvancedY.length}`, mbnativeadvancedY.length << (Math.min(5, Math.abs(transferq.size))));
         episodej = [incidente / 3];
         incidente <<= Math.min(Math.abs(3 & mbnativeadvancedY.length), 1);
         if (philippinesi) {
            break;
         }
      } while ((configD > configD) && philippinesi);
      greytickh = `${1 | chinasameM.length}`;
      release_bK *= parseFloat(`${orangeY}`);
   while (!chinasameM.endsWith(`${edity.length}`)) {
      chinasameM += `${modala.size}`;
      break;
   }
   let previewB = 9249696 >= defaultfootballbgS.size;
   do {
      defaultfootballbgS.set(downloaderL, downloaderL.length);
      if (previewB) {
         break;
      }
   } while (previewB && (1 > (defaultfootballbgS.size + 4)));
      release_bK += parseFloat(`${modala.size >> (Math.min(Math.abs(1), 5))}`);
       let brightnessG = 1;
      while ((brightnessG >> (Math.min(Math.abs(4), 1))) <= 2 || (brightnessG >> (Math.min(Math.abs(brightnessG), 1))) <= 4) {
         brightnessG += brightnessG % (Math.max(brightnessG, 10));
         break;
      }
          let episodes0 = 1.0;
          let iconsettingu = String.fromCharCode(110,111,116,103,101,116,95,115,95,50,55,0);
         brightnessG ^= 2;
         episodes0 += (iconsettingu == String.fromCharCode(65,0) ? parseInt(`${episodes0}`) : iconsettingu.length);
         brightnessG += 1;
      defaultfootballbgS = new Map([[`${release_bK}`, (downloaderL == String.fromCharCode(67,0) ? parseInt(`${release_bK}`) : downloaderL.length)]]);
   if ((orangeY * 3) <= 5) {
      orangeY <<= Math.min(Math.abs((editp == String.fromCharCode(107,0) ? editp.length : orangeY)), 5);
   }
   for (let c = 0; c < 2; c++) {
       let heji9: Map<any, any> = new Map([[String.fromCharCode(105,95,49,57,95,112,101,114,109,117,116,97,116,105,111,110,0),410], [String.fromCharCode(118,105,116,99,95,112,95,49,0),175], [String.fromCharCode(111,102,102,115,101,116,115,95,98,95,55,57,0),764]]);
       let rewindJ = 2.0;
         heji9 = new Map([[`${heji9.size}`, heji9.size - 2]]);
         heji9 = new Map([[`${heji9.size}`, parseInt(`${rewindJ}`)]]);
         rewindJ -= heji9.size / 2;
      let sliderE = 8759863 >= heji9.size;
      do {
         heji9.set(`${rewindJ}`, parseInt(`${rewindJ}`));
         if (sliderE) {
            break;
         }
      } while (((1.25 + rewindJ) == 1.55) && sliderE);
      if (1 < heji9.size) {
          let catagoryh = 4;
          let themeM = String.fromCharCode(122,95,53,51,95,99,111,110,115,116,113,112,0);
          let larges = String.fromCharCode(112,95,57,48,95,112,114,101,99,111,109,112,111,115,101,100,0);
          let sourcef = 5.0;
          let buildX = 0.0;
         heji9.set(`${catagoryh}`, heji9.size);
         catagoryh += larges.length >> (Math.min(5, Math.abs(parseInt(`${buildX}`))));
         themeM = `${themeM.length}`;
         larges = "2";
         sourcef *= parseFloat(`${themeM.length}`);
         buildX *= parseFloat(`${parseInt(`${sourcef}`) % 1}`);
      }
       let disconnectedlogog = false;
      chinasameM = `${(String.fromCharCode(74,0) == greytickh ? parseInt(`${rewindJ}`) : greytickh.length)}`;
   }
   let schedulerP = 7262209 >= mimoo.length;
   do {
       let mergerJ: Map<any, any> = new Map([[String.fromCharCode(117,110,99,97,99,104,101,100,95,101,95,49,49,0),true ], [String.fromCharCode(117,110,105,113,117,101,95,107,95,50,50,0),true ]]);
       let mathQ: Array<any> = [337, 548, 449];
       let sideN: Array<any> = [369, 445, 284];
      while ((sideN.length >> (Math.min(Math.abs(3), 5))) >= 4 && (sideN.length >> (Math.min(Math.abs(3), 2))) >= 4) {
         mergerJ = new Map([[`${mathQ.length}`, mathQ.length]]);
         break;
      }
      while (4 <= (4 >> (Math.min(5, mathQ.length))) && 2 <= (4 >> (Math.min(1, mathQ.length)))) {
         mathQ.push(sideN.length);
         break;
      }
      mimoo += `${mergerJ.size - 2}`;
      if (schedulerP) {
         break;
      }
   } while ((!mimoo.startsWith(`${quest1}`)) && schedulerP);
   for (let b = 0; b < 2; b++) {
      defaultfootballbgS = new Map([[`${quest1}`, (String.fromCharCode(105,0) == mimoo ? mimoo.length : (quest1 ? 3 : 2))]]);
   }
      release_bK -= parseFloat(`${greytickh.length + 2}`);
   while ((5 / (Math.max(5, orangeY))) < 2 && 5 < (orangeY / (Math.max(modala.size, 3)))) {
       let sigmoba: Array<any> = [240, 459, 271];
       let dependency8: Array<any> = [48, 229];
       let progressn = String.fromCharCode(119,95,50,53,95,99,111,109,112,108,101,116,101,0);
      if ((progressn.length & sigmoba.length) > 2 || 3 > (progressn.length & 2)) {
          let sell5 = String.fromCharCode(105,111,118,101,99,105,110,95,102,95,56,50,0);
          let sideX = 0.0;
          let iconschedule9: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,103,114,97,100,101,95,55,95,55,49,0),829], [String.fromCharCode(114,95,54,57,95,108,97,99,101,115,0),267], [String.fromCharCode(119,95,53,48,95,118,101,99,116,111,114,115,0),0]]);
          let libcrashsdkS = 1;
          let statisticsinactivec = String.fromCharCode(100,105,109,95,117,95,52,48,0);
         sigmoba = [statisticsinactivec.length];
         sell5 = `${sell5.length}`;
         sideX /= Math.max(3 & parseInt(`${sideX}`), 1);
         iconschedule9 = new Map([[`${iconschedule9.size}`, parseInt(`${sideX}`) << (Math.min(Math.abs(2), 5))]]);
         libcrashsdkS &= iconschedule9.size;
         statisticsinactivec += `${(sell5 == String.fromCharCode(50,0) ? sell5.length : libcrashsdkS)}`;
      }
      let downloadv = progressn == String.fromCharCode(100,103,99,107,52,0);
      do {
         progressn = `${progressn.length}`;
         if (downloadv) {
            break;
         }
      } while (downloadv && (1 > (dependency8.length % 1) || 1 > (dependency8.length % (Math.max(10, progressn.length)))));
      for (let p = 0; p < 3; p++) {
         dependency8 = [(String.fromCharCode(101,0) == progressn ? progressn.length : sigmoba.length)];
      }
      let playercommonz = sigmoba.length <= 9841986;
      do {
         sigmoba = [dependency8.length];
         if (playercommonz) {
            break;
         }
      } while (((4 - sigmoba.length) < 5 || (progressn.length - sigmoba.length) < 4) && playercommonz);
         progressn += `${dependency8.length & 2}`;
          let gdtadvU = String.fromCharCode(97,98,98,114,95,97,95,52,55,0);
          let libffmpegkitq = 4.0;
         dependency8 = [3];
         gdtadvU += `${parseInt(`${libffmpegkitq}`) % (Math.max(1, 7))}`;
         libffmpegkitq += gdtadvU.length;
      while ((dependency8.length | 4) == 3 && 4 == (4 | dependency8.length)) {
         progressn += `${2 * sigmoba.length}`;
         break;
      }
         dependency8.push(progressn.length);
      for (let q = 0; q < 2; q++) {
         dependency8 = [1 >> (Math.min(4, sigmoba.length))];
      }
      modala = new Map([[`${modala.size}`, downloaderL.length >> (Math.min(Math.abs(2), 1))]]);
      break;
   }
       let shrinkn = String.fromCharCode(116,95,49,54,95,99,111,110,99,97,116,0);
       let xadsdke = false;
       let textinputP = true;
      let nbatrophyr = textinputP ? !textinputP : textinputP;
      do {
          let selection7 = String.fromCharCode(102,95,52,56,95,99,97,108,99,117,108,97,116,101,0);
         textinputP = (37 >= (selection7.length + (xadsdke ? selection7.length : 37)));
         if (nbatrophyr) {
            break;
         }
      } while (nbatrophyr && (textinputP));
      if (xadsdke) {
         textinputP = shrinkn.length > 10;
      }
      mimoo += `${(greytickh.length / (Math.max(10, (baselineS ? 2 : 2))))}`;
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let l_positionQ = String.fromCharCode(107,95,53,52,95,99,111,100,101,115,0);
    let singleA: Map<any, any> = new Map([[String.fromCharCode(116,111,112,109,111,115,116,95,109,95,54,54,0),false ], [String.fromCharCode(114,95,53,95,97,110,116,105,99,111,108,108,97,112,115,101,0),true ], [String.fromCharCode(119,95,52,56,95,102,117,108,102,105,108,108,101,100,0),true ]]);
    let greenJ: Map<any, any> = new Map([[String.fromCharCode(115,95,51,55,95,102,105,110,100,110,101,116,0),859], [String.fromCharCode(99,111,112,121,116,111,95,102,95,57,0),204], [String.fromCharCode(103,95,57,48,95,112,97,114,115,101,114,0),196]]);
    let basketballY = String.fromCharCode(100,114,105,102,116,95,103,95,52,52,0);
    let feedback8 = true;
    let singaporev = 2.0;
    let calendarT = 5;
    let plashn = 4.0;
    let mbbannerN: Array<any> = [33, 593, 344];
    let typingQ: Map<any, any> = new Map([[String.fromCharCode(110,95,49,55,95,99,111,114,114,101,99,116,105,110,103,0),536], [String.fromCharCode(97,110,110,111,116,97,116,101,95,108,95,55,55,0),536]]);
    let libreactnativeblobg = String.fromCharCode(109,117,116,97,116,105,110,103,95,102,95,56,55,0);
    let telemetryG = String.fromCharCode(116,95,52,52,95,100,105,115,112,111,115,97,98,108,101,115,0);
    let specu = String.fromCharCode(103,95,52,53,95,116,111,109,111,114,114,111,119,0);
       let basketballhometeamF = String.fromCharCode(118,95,57,53,95,108,105,118,101,0);
      if (1 >= basketballhometeamF.length) {
          let unticky = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,95,116,95,55,51,0);
          let classese = String.fromCharCode(115,95,51,57,95,115,97,118,101,0);
          let fcdaebecbcbafcdfceaaeccfeacdbv = 1.0;
         basketballhometeamF += `${unticky.length | parseInt(`${fcdaebecbcbafcdfceaaeccfeacdbv}`)}`;
         unticky = "2";
         classese = `${2 << (Math.min(1, classese.length))}`;
      }
      while (1 > basketballhometeamF.length || 1 > basketballhometeamF.length) {
          let disconnecteda: Array<any> = [485, 853];
          let whiteT = 4.0;
          let homeh: Array<any> = [252, 806];
          let notification7 = String.fromCharCode(111,95,49,55,95,118,97,99,117,117,109,0);
          let sigmob6 = String.fromCharCode(114,95,52,53,95,98,101,110,99,0);
         basketballhometeamF = `${1 * sigmob6.length}`;
         disconnecteda = [2];
         whiteT *= (notification7 == String.fromCharCode(107,0) ? disconnecteda.length : notification7.length);
         homeh.push(disconnecteda.length / 3);
         sigmob6 = `${parseInt(`${whiteT}`)}`;
         break;
      }
          let appleg: Map<any, any> = new Map([[String.fromCharCode(101,95,53,51,95,101,116,101,114,110,105,116,121,0),String.fromCharCode(101,95,56,53,95,109,98,109,111,100,101,0)], [String.fromCharCode(105,110,99,114,109,101,114,103,101,95,56,95,53,56,0),String.fromCharCode(119,114,105,116,101,95,112,95,51,0)], [String.fromCharCode(102,95,51,54,95,114,101,112,101,97,116,0),String.fromCharCode(105,110,100,101,120,97,98,108,101,95,120,95,51,50,0)]]);
          let defaultprofilepice = String.fromCharCode(122,95,50,51,95,116,101,108,101,112,104,111,110,121,0);
         basketballhometeamF = `${(String.fromCharCode(50,0) == basketballhometeamF ? basketballhometeamF.length : defaultprofilepice.length)}`;
         appleg.set(`${appleg.size}`, appleg.size);
         defaultprofilepice = `${appleg.size * appleg.size}`;
      mbbannerN = [1];
       let basef = 4.0;
      while (5.4 >= (basef + 5.35)) {
          let completeM = String.fromCharCode(117,95,53,52,95,102,111,114,101,97,99,104,0);
          let debugW = String.fromCharCode(109,111,116,99,111,109,112,95,115,95,54,57,0);
         basef /= Math.max(parseInt(`${basef}`) & 2, 3);
         completeM = `${(debugW == String.fromCharCode(70,0) ? completeM.length : debugW.length)}`;
         break;
      }
      if ((basef + 4) < 1.2) {
         basef -= parseInt(`${basef}`);
      }
      for (let l = 0; l < 1; l++) {
          let calendarO = false;
          let layoutm = String.fromCharCode(105,95,54,56,95,116,114,101,110,100,105,110,103,0);
          let livenodatabgimgd = 1;
         basef *= parseInt(`${basef}`) / 1;
         calendarO = livenodatabgimgd == 98;
         layoutm += `${livenodatabgimgd}`;
      }
      typingQ = new Map([[`${greenJ.size}`, 1]]);
   if ((greenJ.size ^ singleA.size) == 4 && 1 == (singleA.size ^ 4)) {
       let shielddonec: Map<any, any> = new Map([[String.fromCharCode(102,95,48,95,102,116,118,100,111,99,0),661], [String.fromCharCode(115,101,116,99,116,120,95,111,95,49,54,0),197], [String.fromCharCode(97,95,53,55,95,99,111,110,115,116,115,0),556]]);
       let subtextv = true;
       let untickm = 3.0;
       let zoomA = String.fromCharCode(100,114,97,119,97,98,108,101,95,116,95,57,55,0);
         untickm *= parseFloat(`${parseInt(`${untickm}`) - 1}`);
         untickm += parseFloat(`${zoomA.length}`);
         subtextv = shielddonec.size > 100;
      if ((5.47 / (Math.max(8, untickm))) < 2.25) {
          let teamO = 4.0;
         subtextv = 6.90 > teamO;
      }
         shielddonec.set(`${subtextv}`, ((subtextv ? 5 : 1) & shielddonec.size));
         untickm /= Math.max(parseFloat(`${shielddonec.size * zoomA.length}`), 2);
       let mappingj = 0.0;
         subtextv = zoomA.length == 91;
         shielddonec.set(`${untickm}`, parseInt(`${untickm}`));
         shielddonec = new Map([[zoomA, ((subtextv ? 3 : 4) << (Math.min(zoomA.length, 4)))]]);
      while ((untickm * parseFloat(`${shielddonec.size}`)) >= 1.15 || (1.15 * untickm) >= 1.95) {
         shielddonec.set(zoomA, 2 >> (Math.min(5, Math.abs(parseInt(`${mappingj}`)))));
         break;
      }
          let g_center3 = false;
          let yellowanimationlivee: Array<any> = [531, 306];
         zoomA += `${2 << (Math.min(1, yellowanimationlivee.length))}`;
      greenJ.set(`${untickm}`, ((subtextv ? 5 : 4) ^ parseInt(`${untickm}`)));
   }
   let build_ = 7516525.0 <= plashn;
   do {
      plashn -= 3;
      if (build_) {
         break;
      }
   } while ((3 < (telemetryG.length - parseInt(`${plashn}`))) && build_);
       let refreshi: Array<any> = [862, 772, 727];
       let selecteda = 4;
       let defaultroombg9: Map<any, any> = new Map([[String.fromCharCode(108,95,53,95,109,111,100,101,109,0),866], [String.fromCharCode(101,120,116,114,97,102,105,101,108,100,95,105,95,51,49,0),340], [String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,102,95,52,51,0),527]]);
      while ((selecteda % (Math.max(2, 8))) == 5 || 2 == (selecteda % 2)) {
         selecteda *= 2 ^ refreshi.length;
         break;
      }
      for (let q = 0; q < 3; q++) {
         defaultroombg9.set(`${selecteda}`, selecteda);
      }
          let inactive3 = String.fromCharCode(105,110,108,105,110,101,100,95,53,95,57,51,0);
          let iconmoreT: Array<any> = [101, 877, 672];
          let controlN = String.fromCharCode(101,109,117,108,97,116,101,95,115,95,57,50,0);
         defaultroombg9.set(`${iconmoreT.length}`, refreshi.length);
         inactive3 += "2";
         iconmoreT = [(String.fromCharCode(90,0) == controlN ? inactive3.length : controlN.length)];
         selecteda -= 1;
       let previewQ = 4.0;
         refreshi.push(selecteda * refreshi.length);
      while ((2 >> (Math.min(5, refreshi.length))) <= 5 || (2 >> (Math.min(2, Math.abs(selecteda)))) <= 2) {
          let tailD = String.fromCharCode(114,95,55,51,95,115,117,103,103,101,115,116,105,111,110,0);
          let actionsN = String.fromCharCode(115,95,51,50,95,115,101,116,99,116,120,0);
          let screenD = 5.0;
         refreshi.push(defaultroombg9.size % 2);
         tailD += "2";
         actionsN = `${parseInt(`${screenD}`) * actionsN.length}`;
         screenD /= Math.max(2, 2 ^ actionsN.length);
         break;
      }
      for (let n = 0; n < 3; n++) {
         refreshi.push(selecteda - refreshi.length);
      }
      while (5.5 == (previewQ - parseFloat(`${selecteda}`)) || (selecteda - parseInt(`${previewQ}`)) == 1) {
         selecteda |= selecteda * defaultroombg9.size;
         break;
      }
      singaporev -= parseFloat(`${telemetryG.length + basketballY.length}`);
   for (let g = 0; g < 1; g++) {
      singaporev += parseFloat(`${calendarT}`);
   }
      l_positionQ = `${parseInt(`${plashn}`)}`;
      specu += "1";
   if (5 > (greenJ.size >> (Math.min(Math.abs(2), 1))) && 3 > (greenJ.size >> (Math.min(Math.abs(2), 4)))) {
      calendarT <<= Math.min(3, Math.abs(singleA.size));
   }
      singleA = new Map([[`${singaporev}`, parseInt(`${plashn}`) << (Math.min(2, Math.abs(3)))]]);
   if ((typingQ.size * l_positionQ.length) == 1) {
      l_positionQ = `${(mbbannerN.length | (feedback8 ? 5 : 2))}`;
   }
   for (let l = 0; l < 1; l++) {
      singleA.set(`${feedback8}`, (parseInt(`${plashn}`) >> (Math.min(1, Math.abs((feedback8 ? 1 : 5))))));
   }
   while (mbbannerN.length == 5) {
       let match9 = true;
       let patho = 4;
       let hookL = String.fromCharCode(122,95,55,56,95,112,97,115,115,112,104,114,97,115,101,0);
          let modeH = String.fromCharCode(109,101,97,115,117,114,101,95,106,95,54,53,0);
          let predictione: Map<any, any> = new Map([[String.fromCharCode(117,95,49,53,95,109,97,99,104,105,110,101,0),String.fromCharCode(113,95,55,48,95,99,111,110,102,105,103,117,114,101,114,0)], [String.fromCharCode(102,97,105,108,105,110,103,95,102,95,56,56,0),String.fromCharCode(102,95,54,52,95,115,101,97,108,97,110,116,0)], [String.fromCharCode(112,95,53,57,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0),String.fromCharCode(105,95,55,95,114,101,97,99,104,97,98,108,101,0)]]);
         patho ^= hookL.length;
         modeH = `${predictione.size}`;
         predictione.set(modeH, 1 & predictione.size);
      for (let q = 0; q < 3; q++) {
          let backD = String.fromCharCode(121,95,55,49,95,105,110,116,114,97,120,109,98,117,118,0);
          let appley = String.fromCharCode(107,95,53,49,95,117,110,97,118,97,105,108,97,98,108,101,0);
         match9 = (62 <= (appley.length << (Math.min(5, Math.abs((!match9 ? appley.length : 62))))));
         backD = "2";
      }
      while (match9) {
         patho *= patho;
         break;
      }
          let jnewsshare3 = String.fromCharCode(112,95,53,56,95,115,101,115,115,111,110,0);
         match9 = !jnewsshare3.includes(`${match9}`);
          let googleu = String.fromCharCode(108,105,98,99,101,108,116,95,116,95,50,49,0);
          let searchh = 4.0;
         patho *= googleu.length & 2;
         googleu = `${parseInt(`${searchh}`) / 3}`;
         searchh -= parseFloat(`${parseInt(`${searchh}`)}`);
         patho >>= Math.min(2, Math.abs(patho));
      while ((patho << (Math.min(Math.abs(2), 3))) >= 3 || (2 << (Math.min(1, hookL.length))) >= 2) {
          let iconbellactive1 = true;
          let saveP = String.fromCharCode(117,95,49,50,95,102,98,100,101,118,0);
          let full8 = false;
          let libreactnativeblobF = false;
         hookL += `${(String.fromCharCode(98,0) == saveP ? (iconbellactive1 ? 4 : 2) : saveP.length)}`;
         iconbellactive1 = (!libreactnativeblobF ? !full8 : libreactnativeblobF);
         full8 = (full8 ? !libreactnativeblobF : full8);
         break;
      }
      let slider5 = match9 ? !match9 : match9;
      do {
         match9 = 36 < patho;
         if (slider5) {
            break;
         }
      } while (slider5 && (!match9));
      let gpayM = patho <= 7187096;
      do {
         patho -= 2 + patho;
         if (gpayM) {
            break;
         }
      } while ((4 >= (5 + hookL.length)) && gpayM);
      feedback8 = ((specu.length ^ (!match9 ? 100 : specu.length)) <= 100);
      break;
   }
   if (plashn == 5.89) {
       let soundK = 3.0;
       let defaultfootballbg4: Array<any> = [176, 844, 171];
       let valuesf: Array<any> = [565, 894];
      while (5 == (valuesf.length % (Math.max(2, defaultfootballbg4.length)))) {
         valuesf.push(1);
         break;
      }
       let libfbt = 4.0;
       let anewsu = 2.0;
      if (defaultfootballbg4.includes(soundK)) {
          let libloggerH: Array<any> = [217, 27];
         defaultfootballbg4.push(valuesf.length);
         libloggerH.push(3 & libloggerH.length);
      }
      if (2 >= (valuesf.length ^ 2) || 2 >= (2 & valuesf.length)) {
         anewsu /= Math.max(3, parseInt(`${soundK}`));
      }
      if (4.71 == (anewsu * libfbt)) {
          let transferC = 5;
          let reactnativejsB: Map<any, any> = new Map([[String.fromCharCode(105,95,57,57,95,98,110,100,101,99,0),true ], [String.fromCharCode(112,114,101,101,110,99,111,100,101,95,99,95,51,48,0),false ], [String.fromCharCode(118,95,53,56,95,112,114,111,109,105,115,101,115,0),true ]]);
          let vipsport_ = String.fromCharCode(115,116,115,115,95,97,95,53,51,0);
          let anythinkx: Array<any> = [String.fromCharCode(121,95,51,52,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0), String.fromCharCode(118,97,114,105,110,102,111,95,118,95,52,57,0), String.fromCharCode(99,95,49,49,95,100,105,116,104,101,114,105,110,103,0)];
          let liveW = 2.0;
         libfbt -= parseInt(`${liveW}`);
         transferC <<= Math.min(5, vipsport_.length);
         reactnativejsB.set(vipsport_, vipsport_.length);
         anythinkx = [vipsport_.length];
      }
         defaultfootballbg4 = [parseInt(`${libfbt}`)];
      while (!defaultfootballbg4.includes(soundK)) {
         defaultfootballbg4 = [parseInt(`${anewsu}`)];
         break;
      }
          let stringsh = String.fromCharCode(116,95,56,95,115,104,97,114,112,101,110,105,110,103,0);
          let bridge6 = false;
         libfbt /= Math.max(1, parseInt(`${anewsu}`));
         stringsh += `${((bridge6 ? 5 : 4) & 2)}`;
         bridge6 = stringsh.length > 63;
      while ((soundK * anewsu) >= 4.45) {
         anewsu /= Math.max(parseInt(`${soundK}`) * 3, 1);
         break;
      }
      singleA = new Map([[`${singleA.size}`, singleA.size * 2]]);
   }
   while (basketballY.startsWith(`${mbbannerN.length}`)) {
       let back7 = String.fromCharCode(114,111,117,110,100,117,112,95,102,95,56,0);
         back7 += `${back7.length}`;
      for (let o = 0; o < 3; o++) {
          let libruntimeexecutork = String.fromCharCode(118,105,115,97,95,103,95,50,57,0);
          let splashs: Map<any, any> = new Map([[String.fromCharCode(97,95,53,54,95,99,111,115,113,102,0),382], [String.fromCharCode(119,95,50,51,95,114,101,115,111,117,114,99,101,115,0),379], [String.fromCharCode(102,114,105,99,116,105,111,110,95,105,95,55,57,0),326]]);
          let container8 = false;
          let defaultpredictionprofilei = 3.0;
         back7 = `${(String.fromCharCode(65,0) == back7 ? back7.length : splashs.size)}`;
         libruntimeexecutork += `${libruntimeexecutork.length}`;
         splashs = new Map([[`${container8}`, (String.fromCharCode(74,0) == libruntimeexecutork ? (container8 ? 2 : 1) : libruntimeexecutork.length)]]);
         defaultpredictionprofilei -= (parseFloat(`${libruntimeexecutork == String.fromCharCode(84,0) ? (container8 ? 5 : 5) : libruntimeexecutork.length}`));
      }
          let codegenC: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,101,100,95,103,95,50,49,0),721], [String.fromCharCode(119,95,53,52,95,115,111,117,114,99,101,105,100,0),125], [String.fromCharCode(102,95,56,50,95,113,109,97,116,0),706]]);
          let drag3 = 0.0;
          let window_01D = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,95,52,95,56,50,0);
         back7 += `${back7.length}`;
         codegenC.set(window_01D, (window_01D == String.fromCharCode(114,0) ? parseInt(`${drag3}`) : window_01D.length));
         drag3 -= parseFloat(`${parseInt(`${drag3}`)}`);
      mbbannerN.push(3);
      break;
   }
       let libreactperfloggerjnis: Array<any> = [513, 522, 809];
       let clockn = String.fromCharCode(99,95,53,95,100,105,115,116,105,110,99,116,0);
       let sortR = String.fromCharCode(104,95,49,54,95,99,97,112,112,101,100,0);
         clockn += `${libreactperfloggerjnis.length | clockn.length}`;
         sortR += `${(String.fromCharCode(114,0) == sortR ? clockn.length : sortR.length)}`;
         libreactperfloggerjnis = [(clockn == String.fromCharCode(121,0) ? libreactperfloggerjnis.length : clockn.length)];
          let videojsU: Map<any, any> = new Map([[String.fromCharCode(110,95,57,53,95,109,97,120,107,101,121,115,105,122,101,0),863], [String.fromCharCode(108,95,54,54,95,115,109,111,111,116,104,105,110,103,0),455], [String.fromCharCode(97,108,116,101,114,97,98,108,101,95,51,95,49,52,0),510]]);
          let auto_o__ = 1.0;
          let serviceX = false;
         sortR += `${(1 | (serviceX ? 4 : 2))}`;
         videojsU.set(`${auto_o__}`, videojsU.size & parseInt(`${auto_o__}`));
         serviceX = auto_o__ >= 20.30;
      while (!clockn.endsWith(`${sortR.length}`)) {
          let register_4wn = String.fromCharCode(115,116,97,114,116,115,95,100,95,49,55,0);
          let traminic = String.fromCharCode(98,103,114,97,95,53,95,52,53,0);
          let sendR = String.fromCharCode(120,95,55,48,95,101,112,105,99,0);
          let libreactB = 5.0;
          let policyg = 3;
         clockn = `${1 - libreactperfloggerjnis.length}`;
         register_4wn = `${traminic.length}`;
         traminic += `${2 >> (Math.min(5, traminic.length))}`;
         sendR = `${parseInt(`${libreactB}`)}`;
         libreactB *= parseFloat(`${sendR.length ^ 3}`);
         policyg %= Math.max(4, policyg + parseInt(`${libreactB}`));
         break;
      }
         sortR = `${clockn.length}`;
      while (!clockn.includes(`${libreactperfloggerjnis.length}`)) {
         libreactperfloggerjnis.push(2 / (Math.max(3, sortR.length)));
         break;
      }
         libreactperfloggerjnis = [1];
      let libpangleflippedc = String.fromCharCode(102,110,107,109,0) == clockn;
      do {
         clockn = `${sortR.length}`;
         if (libpangleflippedc) {
            break;
         }
      } while ((!clockn.endsWith(`${sortR.length}`)) && libpangleflippedc);
      mbbannerN.push(1 * parseInt(`${plashn}`));
      typingQ = new Map([[`${greenJ.size}`, 3 - parseInt(`${plashn}`)]]);
   while ((calendarT & basketballY.length) >= 5) {
       let awayteamfieldz = 4;
         awayteamfieldz >>= Math.min(Math.abs(2 * awayteamfieldz), 3);
          let checkbox_ = 3.0;
          let statisticsinactiven = 2;
         awayteamfieldz -= 1 << (Math.min(Math.abs(parseInt(`${checkbox_}`)), 5));
         checkbox_ += 3 + statisticsinactiven;
         statisticsinactiven /= Math.max(2, 2);
          let rewardvideoH: Map<any, any> = new Map([[String.fromCharCode(114,116,112,100,101,99,95,111,95,57,54,0),219], [String.fromCharCode(111,95,55,95,108,111,116,116,105,101,108,111,97,100,101,114,0),313]]);
          let detailJ = String.fromCharCode(120,95,51,54,95,98,121,116,101,115,116,114,101,97,109,0);
          let whiteanimationlive6 = false;
         awayteamfieldz <<= Math.min(3, Math.abs(awayteamfieldz));
         rewardvideoH.set(`${detailJ}`, 2 * rewardvideoH.size);
         detailJ = `${(1 ^ (whiteanimationlive6 ? 3 : 2))}`;
         whiteanimationlive6 = detailJ.length >= 19 && !whiteanimationlive6;
      calendarT >>= Math.min(Math.abs(((feedback8 ? 3 : 5) * greenJ.size)), 3);
      break;
   }
      specu = `${basketballY.length - parseInt(`${singaporev}`)}`;
      mbbannerN = [2 * parseInt(`${singaporev}`)];
      calendarT |= ((feedback8 ? 5 : 2) << (Math.min(Math.abs(singleA.size), 5)));
   if (2.5 > (parseFloat(`${specu.length}`) * singaporev) && 3 > (parseInt(`${singaporev}`) * 3)) {
      singaporev += parseFloat(`${parseInt(`${singaporev}`)}`);
   }
   while (3.19 == (3 / (Math.max(6, plashn)))) {
       let security7 = String.fromCharCode(108,95,52,51,95,110,111,110,110,101,103,0);
       let statisticsinactiveT = 2.0;
       let unselectedH = 2;
       let redgoaln: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,117,95,51,0),String.fromCharCode(109,118,115,101,116,95,99,95,57,53,0)], [String.fromCharCode(105,95,53,50,95,98,101,97,114,105,110,103,0),String.fromCharCode(100,101,108,116,97,113,95,107,95,54,49,0)]]);
      while (1.51 < (parseFloat(`${unselectedH}`) / (Math.max(7, statisticsinactiveT))) || 1 < (unselectedH << (Math.min(Math.abs(2), 1)))) {
         statisticsinactiveT += parseFloat(`${unselectedH}`);
         break;
      }
      while (Array.from(redgoaln.values()).includes(statisticsinactiveT)) {
         statisticsinactiveT -= parseFloat(`${parseInt(`${statisticsinactiveT}`) | unselectedH}`);
         break;
      }
      while (!Array.from(redgoaln.keys()).includes(`${unselectedH}`)) {
          let modityq = 4;
          let episodesP = 0.0;
          let analyticsz = String.fromCharCode(110,95,54,57,95,115,117,98,116,101,120,116,0);
         unselectedH &= analyticsz.length;
         modityq <<= Math.min(Math.abs(parseInt(`${episodesP}`)), 3);
         episodesP -= 2;
         analyticsz = `${parseInt(`${episodesP}`) & 3}`;
         break;
      }
       let pushF = 2.0;
       let tempnodatagifp = 4.0;
          let x_centerO = 5.0;
          let membershipe = 5.0;
         security7 = `${parseInt(`${tempnodatagifp}`) / (Math.max(security7.length, 8))}`;
         x_centerO /= Math.max(parseFloat(`${parseInt(`${membershipe}`)}`), 2);
          let selll: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,48,95,99,111,110,116,97,99,116,0),242], [String.fromCharCode(114,95,53,53,95,114,101,102,101,114,101,110,99,101,115,0),639], [String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,55,95,52,56,0),327]]);
         redgoaln.set(`${statisticsinactiveT}`, parseInt(`${statisticsinactiveT}`) >> (Math.min(Math.abs(redgoaln.size), 4)));
         selll.set(`${selll.size}`, selll.size ^ 2);
          let liveendmodallogoC = 1.0;
          let basketballa = 0;
         tempnodatagifp += unselectedH % (Math.max(redgoaln.size, 1));
         liveendmodallogoC *= 1;
         basketballa -= 2 & basketballa;
       let xadsdkN = String.fromCharCode(106,95,55,95,112,111,115,116,112,111,110,101,100,0);
       let list2 = String.fromCharCode(122,95,55,52,95,100,101,115,99,114,105,112,116,105,111,110,115,0);
      for (let c = 0; c < 1; c++) {
         unselectedH *= security7.length;
      }
         list2 = `${(list2 == String.fromCharCode(55,0) ? list2.length : xadsdkN.length)}`;
          let rncoreu = true;
          let episodeZ = String.fromCharCode(100,97,118,115,95,56,95,50,48,0);
         pushF /= Math.max(3, 3);
         rncoreu = episodeZ.length <= 78 && !rncoreu;
         episodeZ += `${(2 - (rncoreu ? 5 : 1))}`;
       let episodel: Array<any> = [760, 54, 999];
       let time_meK: Array<any> = [646, 314, 417];
      singaporev *= parseFloat(`${2}`);
      break;
   }
   let greyarrowupV = String.fromCharCode(121,52,121,0) == l_positionQ;
   do {
      l_positionQ = "2";
      if (greyarrowupV) {
         break;
      }
   } while ((specu.includes(l_positionQ)) && greyarrowupV);
   if ((1.96 / (Math.max(10, plashn))) <= 5.82 || (2 ^ mbbannerN.length) <= 3) {
       let webview3 = 3;
       let reactnativeultimatelistviewb = 0.0;
       let unreadr = String.fromCharCode(108,95,50,55,95,109,101,109,111,114,121,98,117,102,102,101,114,0);
       let sansa: Map<any, any> = new Map([[String.fromCharCode(97,95,56,57,95,112,114,111,98,97,98,105,108,105,116,121,0),494], [String.fromCharCode(97,117,116,104,105,110,102,111,95,98,95,55,49,0),901]]);
      if ((webview3 * reactnativeultimatelistviewb) < 5.36) {
         reactnativeultimatelistviewb /= Math.max(3, parseFloat(`${parseInt(`${reactnativeultimatelistviewb}`)}`));
      }
         unreadr += `${parseInt(`${reactnativeultimatelistviewb}`) / (Math.max(3, sansa.size))}`;
         webview3 %= Math.max(4, webview3 + parseInt(`${reactnativeultimatelistviewb}`));
          let connectiont = 3.0;
          let defaultlogof: Array<any> = [635, 847, 500];
         reactnativeultimatelistviewb *= parseFloat(`${defaultlogof.length}`);
         connectiont /= Math.max(parseInt(`${connectiont}`) >> (Math.min(4, Math.abs(1))), 2);
         defaultlogof = [parseInt(`${connectiont}`) | parseInt(`${connectiont}`)];
      for (let y = 0; y < 1; y++) {
         reactnativeultimatelistviewb *= parseFloat(`${webview3 << (Math.min(Math.abs(parseInt(`${reactnativeultimatelistviewb}`)), 1))}`);
      }
          let classes3: Array<any> = [805, 540];
          let profileZ = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,57,95,49,57,0);
         webview3 <<= Math.min(Math.abs(webview3 * sansa.size), 3);
         classes3.push((String.fromCharCode(79,0) == profileZ ? profileZ.length : classes3.length));
       let playercommonA = true;
      let clubR = reactnativeultimatelistviewb <= 7939800.0;
      do {
         reactnativeultimatelistviewb += (parseFloat(`${String.fromCharCode(122,0) == unreadr ? unreadr.length : (playercommonA ? 3 : 5)}`));
         if (clubR) {
            break;
         }
      } while ((5.0 <= reactnativeultimatelistviewb || (reactnativeultimatelistviewb * 5.0) <= 5.66) && clubR);
         unreadr += `${webview3}`;
      for (let j = 0; j < 3; j++) {
          let saveg = String.fromCharCode(106,95,49,51,95,104,101,97,100,115,101,116,0);
          let q_centerO = String.fromCharCode(119,104,101,116,104,101,114,95,106,95,52,0);
          let assist7: Map<any, any> = new Map([[String.fromCharCode(99,95,57,50,95,105,102,114,97,109,101,0),448], [String.fromCharCode(100,95,57,56,95,109,105,112,115,102,112,117,0),786], [String.fromCharCode(108,95,53,48,95,100,101,102,101,97,116,0),668]]);
         unreadr += `${2 >> (Math.min(3, Math.abs(parseInt(`${reactnativeultimatelistviewb}`))))}`;
         saveg += `${(String.fromCharCode(88,0) == q_centerO ? assist7.size : q_centerO.length)}`;
         assist7.set(saveg, saveg.length * 3);
      }
          let topicm = 4.0;
         sansa = new Map([[`${sansa.size}`, parseInt(`${topicm}`) / (Math.max(sansa.size, 9))]]);
      while (1 > (3 - unreadr.length) && 3 > (3 - sansa.size)) {
         unreadr += `${sansa.size - parseInt(`${reactnativeultimatelistviewb}`)}`;
         break;
      }
      plashn += 3;
   }

    onHandleFullScreen();
  };

  const goBack = () => {
       let whistleorange2: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,120,95,50,0),523], [String.fromCharCode(97,115,99,101,110,100,105,110,103,95,98,95,54,54,0),843]]);
    let historyh: Array<any> = [322, 615];
    let libffmpegkitc = String.fromCharCode(97,95,54,51,95,97,118,100,101,118,105,99,101,0);
    let footballfieldX = String.fromCharCode(99,116,105,118,105,116,121,95,97,95,49,56,0);
    let final_nl = String.fromCharCode(112,114,101,100,105,99,116,120,95,48,95,49,50,0);
    let videojsb = 3.0;
    let reducerS = String.fromCharCode(122,99,111,110,118,111,108,118,101,95,53,95,54,57,0);
    let productc = 5.0;
    let reacth = 0;
    let mbridgew: Map<any, any> = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,99,95,57,54,0),222], [String.fromCharCode(99,114,101,97,116,101,100,95,119,95,56,57,0),462]]);
    let codek = String.fromCharCode(117,95,52,49,95,109,115,114,108,101,100,101,99,0);
    let rncorep = true;
    let emptyJ = String.fromCharCode(110,95,51,57,95,99,117,114,114,114,101,110,116,0);
    let gradleT = String.fromCharCode(102,95,50,55,95,114,101,109,98,0);
    let armvaY: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,101,100,95,101,95,52,57,0),849], [String.fromCharCode(98,110,98,105,110,112,97,100,95,112,95,52,50,0),999]]);
    let phoneshareP: Map<any, any> = new Map([[String.fromCharCode(99,95,49,57,95,115,105,110,99,101,0),705], [String.fromCharCode(117,110,115,97,118,101,95,48,95,55,49,0),481]]);
       let runtime2 = 4.0;
       let navigationY: Map<any, any> = new Map([[String.fromCharCode(102,95,52,50,95,116,97,98,108,101,112,114,105,110,116,0),319], [String.fromCharCode(99,111,117,110,116,95,105,95,51,51,0),297]]);
      for (let o = 0; o < 1; o++) {
         navigationY.set(`${runtime2}`, navigationY.size / (Math.max(2, 1)));
      }
         runtime2 *= parseFloat(`${2}`);
      while (2 < (1 & navigationY.size) || 2.13 < (runtime2 / (Math.max(1.46, 5)))) {
          let libffmpegkita = String.fromCharCode(117,95,49,56,95,114,101,115,105,122,97,98,108,101,0);
          let taiwanw = 4.0;
          let exampleimager = 0.0;
         navigationY.set(libffmpegkita, navigationY.size | 2);
         libffmpegkita += `${parseInt(`${taiwanw}`)}`;
         exampleimager -= 1 * parseInt(`${exampleimager}`);
         break;
      }
      while ((runtime2 - 4.22) < 1.42 || (runtime2 - 4.22) < 4.70) {
         runtime2 *= parseFloat(`${navigationY.size / 2}`);
         break;
      }
          let switch_ezq = String.fromCharCode(113,95,49,49,95,99,111,109,112,111,115,101,105,0);
          let clear3 = false;
          let muted9 = false;
         runtime2 -= parseFloat(`${1 % (Math.max(parseInt(`${runtime2}`), 4))}`);
         switch_ezq += `${((muted9 ? 3 : 3))}`;
         clear3 = (muted9 ? clear3 : !muted9);
      if ((runtime2 * parseFloat(`${navigationY.size}`)) >= 3.100 || 1 >= (3 >> (Math.min(2, Math.abs(navigationY.size))))) {
         navigationY.set(`${runtime2}`, parseInt(`${runtime2}`));
      }
      reacth |= footballfieldX.length;
   for (let p = 0; p < 2; p++) {
      productc *= parseFloat(`${mbridgew.size}`);
   }
   let settingw = 9573065 >= whistleorange2.size;
   do {
       let defaultroombg3 = String.fromCharCode(101,95,50,52,95,109,105,115,115,105,110,103,0);
       let sentry9: Array<any> = [String.fromCharCode(115,95,57,49,95,108,111,99,97,108,105,122,97,98,108,101,0), String.fromCharCode(118,97,114,105,97,110,99,101,120,95,52,95,55,48,0), String.fromCharCode(114,101,97,112,95,109,95,56,50,0)];
         sentry9 = [defaultroombg3.length];
      for (let p = 0; p < 1; p++) {
         defaultroombg3 += "1";
      }
         defaultroombg3 = `${defaultroombg3.length + sentry9.length}`;
         defaultroombg3 = "3";
      for (let j = 0; j < 3; j++) {
          let profileactive2 = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,108,95,49,0);
          let sportR = String.fromCharCode(109,118,115,101,116,95,103,95,49,51,0);
          let notification9 = 3.0;
          let floater0 = String.fromCharCode(118,95,52,53,95,99,110,111,110,99,101,0);
         defaultroombg3 += `${floater0.length * 2}`;
         profileactive2 = "2";
         sportR += "2";
         notification9 += parseFloat(`${1 ^ sportR.length}`);
         floater0 = `${parseInt(`${notification9}`)}`;
      }
       let refreshj = String.fromCharCode(116,105,109,101,99,111,100,101,95,98,95,55,0);
      whistleorange2 = new Map([[defaultroombg3, 2 + defaultroombg3.length]]);
      if (settingw) {
         break;
      }
   } while ((4.37 >= (1.0 + videojsb) || (videojsb + whistleorange2.size) >= 1.0) && settingw);
      reducerS = `${historyh.length}`;
      reducerS += "1";
   for (let q = 0; q < 3; q++) {
      videojsb *= historyh.length;
   }
      historyh.push(1);
   if ((reducerS.length | 5) < 3 && (reducerS.length | 5) < 2) {
      historyh.push(footballfieldX.length ^ historyh.length);
   }
   if (3 >= reducerS.length) {
      whistleorange2 = new Map([[`${videojsb}`, 3 - footballfieldX.length]]);
   }
   while (1 > (2 & codek.length)) {
      codek += `${final_nl.length}`;
      break;
   }
      mbridgew = new Map([[`${historyh.length}`, 3 % (Math.max(7, historyh.length))]]);
      final_nl += "3";
      codek = `${codek.length + 1}`;
   for (let e = 0; e < 2; e++) {
      final_nl = "1";
   }
   while (1 == emptyJ.length) {
       let sellQ: Map<any, any> = new Map([[String.fromCharCode(103,95,49,56,95,115,116,121,108,101,0),false ], [String.fromCharCode(115,95,54,55,95,117,115,114,115,99,116,112,0),false ]]);
       let volumeP: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,101,95,120,95,56,50,0),541], [String.fromCharCode(99,101,108,116,95,103,95,57,55,0),941], [String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,103,95,51,53,0),93]]);
       let tumbnailB = false;
       let heartV = 0.0;
       let flagv = true;
      let regengu = tumbnailB ? !tumbnailB : tumbnailB;
      do {
          let servicez: Map<any, any> = new Map([[String.fromCharCode(112,95,54,56,95,100,105,115,99,111,110,110,101,99,116,0),240], [String.fromCharCode(114,95,52,56,95,109,97,105,110,0),877]]);
          let j_hashj = 0.0;
          let assist7 = String.fromCharCode(113,95,50,54,95,97,103,97,105,110,0);
          let savep = 3.0;
         tumbnailB = (assist7.length - servicez.size) < 15;
         servicez = new Map([[`${savep}`, 3]]);
         j_hashj -= parseFloat(`${1}`);
         assist7 = `${1 + parseInt(`${j_hashj}`)}`;
         savep /= Math.max(5, 2);
         if (regengu) {
            break;
         }
      } while ((flagv || tumbnailB) && regengu);
      let miniX = volumeP.size >= 7758749;
      do {
         volumeP = new Map([[`${heartV}`, parseInt(`${heartV}`) * 2]]);
         if (miniX) {
            break;
         }
      } while ((volumeP.get(`${heartV}`) != null) && miniX);
      for (let i = 0; i < 1; i++) {
         heartV *= sellQ.size;
      }
      if (flagv) {
         flagv = 74.73 > heartV && 46 > sellQ.size;
      }
      while ((3 * volumeP.size) >= 3 || 1 >= (volumeP.size * 3)) {
          let bootsplashR = 0.0;
          let foregroundW = String.fromCharCode(101,95,55,51,95,101,114,97,115,105,110,103,0);
         volumeP = new Map([[`${bootsplashR}`, parseInt(`${bootsplashR}`)]]);
         foregroundW += `${foregroundW.length}`;
         break;
      }
       let vignettej = 2.0;
         tumbnailB = sellQ.get(`${tumbnailB}`) == null;
      for (let z = 0; z < 1; z++) {
         tumbnailB = (((tumbnailB ? 84 : volumeP.size) % (Math.max(volumeP.size, 9))) > 84);
      }
      while (!flagv) {
          let refreshL: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,95,106,95,49,48,48,0),true ], [String.fromCharCode(97,116,117,114,97,116,105,111,110,95,115,95,53,54,0),true ], [String.fromCharCode(115,104,97,100,101,114,115,95,51,95,49,53,0),true ]]);
          let sharedd = false;
          let iconsaveimage7 = 5;
          let middleR = String.fromCharCode(101,118,101,110,108,121,95,54,95,51,51,0);
         volumeP.set(middleR, ((flagv ? 3 : 5)));
         refreshL.set(`${sharedd}`, iconsaveimage7 + 3);
         sharedd = iconsaveimage7 <= 77;
         middleR = `${iconsaveimage7 >> (Math.min(Math.abs(refreshL.size), 1))}`;
         break;
      }
         tumbnailB = !tumbnailB;
      if (!Array.from(volumeP.values()).includes(sellQ.size)) {
         volumeP = new Map([[`${sellQ.size}`, 2]]);
      }
      if (tumbnailB && (2.57 / (Math.max(3, vignettej))) > 1.53) {
          let yellowredcardD: Array<any> = [593, 60];
         tumbnailB = null == volumeP.get(`${tumbnailB}`);
         yellowredcardD = [1 - yellowredcardD.length];
      }
          let productp = true;
          let listm = String.fromCharCode(105,95,50,57,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0);
         tumbnailB = null == sellQ.get(`${productp}`);
         productp = listm == listm;
      let filterL = 7823914 >= sellQ.size;
      do {
         sellQ.set(`${vignettej}`, (parseInt(`${vignettej}`) ^ (flagv ? 2 : 5)));
         if (filterL) {
            break;
         }
      } while ((4 == (sellQ.size % 1)) && filterL);
          let borderlessj = String.fromCharCode(99,102,115,116,114,101,97,109,95,104,95,51,56,0);
          let volumey = String.fromCharCode(99,95,50,55,95,115,117,103,103,101,115,116,0);
          let notificationfillemptyc = true;
         volumeP.set(`${vignettej}`, parseInt(`${vignettej}`));
         borderlessj += `${borderlessj.length % 2}`;
         volumey = `${((notificationfillemptyc ? 2 : 2))}`;
         notificationfillemptyc = (37 > (volumey.length << (Math.min(4, Math.abs((!notificationfillemptyc ? 37 : volumey.length))))));
      rncorep = ((mbridgew.size | (rncorep ? mbridgew.size : 27)) > 46);
      break;
   }
      mbridgew.set(emptyJ, mbridgew.size);
      codek = `${whistleorange2.size + parseInt(`${productc}`)}`;

    delayControls();

   for (let f = 0; f < 3; f++) {
       let libavdevicef: Array<any> = [String.fromCharCode(115,95,57,56,95,102,102,109,101,116,97,0), String.fromCharCode(110,95,57,48,95,98,105,116,120,0)];
       let mintegrall = 1;
       let exampleimageP = 3.0;
       let attributedstringg = 3;
       let iconclosewhitebgq = 1.0;
      let weather_ = mintegrall <= 9202224;
      do {
         mintegrall -= 3;
         if (weather_) {
            break;
         }
      } while (weather_ && ((3 << (Math.min(1, Math.abs(mintegrall)))) < 2 || 5.50 < (4.98 / (Math.max(4, iconclosewhitebgq)))));
          let downM = String.fromCharCode(105,95,55,48,95,111,112,117,115,102,105,108,101,0);
          let episodes8 = String.fromCharCode(118,95,57,50,95,115,117,98,120,0);
         mintegrall %= Math.max(2, parseInt(`${iconclosewhitebgq}`));
         downM = `${(downM == String.fromCharCode(69,0) ? episodes8.length : downM.length)}`;
         episodes8 += `${episodes8.length}`;
      while (libavdevicef.length <= parseInt(`${iconclosewhitebgq}`)) {
         libavdevicef = [1];
         break;
      }
       let footballfieldZ = 1;
       let suggestiona: Array<any> = [446, 443, 739];
       let librrcq: Array<any> = [156, 964, 664];
         libavdevicef.push(attributedstringg * libavdevicef.length);
         exampleimageP -= 1;
         libavdevicef = [mintegrall * libavdevicef.length];
          let iconfeedbackB = String.fromCharCode(97,95,53,57,95,99,111,112,121,120,110,0);
          let unfilli = true;
          let forwardK: Map<any, any> = new Map([[String.fromCharCode(118,97,114,95,57,95,54,52,0),65], [String.fromCharCode(112,95,51,55,95,114,101,97,108,108,111,99,0),970]]);
         mintegrall <<= Math.min(4, Math.abs(footballfieldZ));
         iconfeedbackB = `${forwardK.size}`;
         unfilli = !unfilli;
         forwardK = new Map([[`${forwardK.size}`, iconfeedbackB.length]]);
          let ewardedQ = 3.0;
          let fieldJ: Map<any, any> = new Map([[String.fromCharCode(114,101,102,115,95,52,95,52,55,0),312], [String.fromCharCode(100,99,116,120,95,110,95,50,48,0),729]]);
         exampleimageP /= Math.max(2, 1);
         ewardedQ -= parseInt(`${ewardedQ}`);
         fieldJ.set(`${ewardedQ}`, 2 << (Math.min(2, Math.abs(fieldJ.size))));
         suggestiona.push(librrcq.length);
         mintegrall /= Math.max(1 - mintegrall, 2);
      if (iconclosewhitebgq < attributedstringg) {
          let short_hq: Map<any, any> = new Map([[String.fromCharCode(107,95,54,95,112,114,101,102,101,114,114,101,100,0),475], [String.fromCharCode(100,99,97,109,97,116,104,95,105,95,51,55,0),449], [String.fromCharCode(108,97,110,100,109,105,110,101,115,95,114,95,55,56,0),964]]);
          let libcxxcomponentsX = 3.0;
          let private_8t0: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,105,110,103,95,101,95,52,49,0),String.fromCharCode(113,95,53,51,95,109,97,120,105,109,117,109,0)], [String.fromCharCode(101,95,49,51,95,97,118,117,116,105,108,114,101,115,0),String.fromCharCode(116,111,110,101,109,97,112,95,53,95,50,52,0)], [String.fromCharCode(104,95,54,48,95,116,101,108,101,109,101,116,114,121,0),String.fromCharCode(116,114,105,101,115,95,101,95,53,54,0)]]);
         iconclosewhitebgq += parseFloat(`${parseInt(`${iconclosewhitebgq}`) / (Math.max(2, 7))}`);
         short_hq.set(`${short_hq.size}`, private_8t0.size);
         libcxxcomponentsX *= parseInt(`${libcxxcomponentsX}`);
         private_8t0 = new Map([[`${short_hq.size}`, parseInt(`${libcxxcomponentsX}`)]]);
      }
      if (5 <= (attributedstringg << (Math.min(Math.abs(3), 3)))) {
         footballfieldZ %= Math.max(2, 5);
      }
         libavdevicef = [1 >> (Math.min(Math.abs(attributedstringg), 4))];
      historyh = [3 & codek.length];
   }
      historyh = [whistleorange2.size / (Math.max(2, 6))];
   for (let i = 0; i < 3; i++) {
       let giflivestreamingj = 0.0;
       let humidityR: Map<any, any> = new Map([[String.fromCharCode(101,118,114,99,95,114,95,54,57,0),824], [String.fromCharCode(105,95,53,51,95,101,120,101,99,117,116,101,100,0),896]]);
      while ((2.87 / (Math.max(1, giflivestreamingj))) == 1.9) {
         giflivestreamingj += parseFloat(`${humidityR.size}`);
         break;
      }
         giflivestreamingj += parseFloat(`${parseInt(`${giflivestreamingj}`) % (Math.max(humidityR.size, 6))}`);
          let defaultpredictionprofile_: Map<any, any> = new Map([[String.fromCharCode(115,99,97,109,95,102,95,55,50,0),600], [String.fromCharCode(111,95,48,95,115,117,114,114,111,117,110,100,0),871], [String.fromCharCode(112,99,97,112,95,53,95,54,51,0),402]]);
          let viewerm: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,116,105,109,101,114,115,0),185], [String.fromCharCode(113,95,49,48,48,95,104,119,102,114,97,109,101,0),26]]);
          let frame_ueI = String.fromCharCode(115,101,115,115,105,111,110,95,114,95,52,48,0);
         humidityR.set(`${giflivestreamingj}`, 1 | parseInt(`${giflivestreamingj}`));
         defaultpredictionprofile_.set(frame_ueI, defaultpredictionprofile_.size * 3);
         viewerm.set(`${frame_ueI}`, frame_ueI.length);
      if (humidityR.get(`${giflivestreamingj}`) == null) {
          let phoneZ = String.fromCharCode(115,110,97,112,112,101,100,95,98,95,54,56,0);
          let eventsplashA = 4.0;
         humidityR.set(`${eventsplashA}`, parseInt(`${eventsplashA}`));
         phoneZ = `${phoneZ.length - 1}`;
      }
          let libimagepipeline6 = false;
          let merger0 = String.fromCharCode(111,95,54,50,95,97,116,99,104,0);
          let iconbackwhiteo = 1.0;
         giflivestreamingj *= parseFloat(`${humidityR.size & merger0.length}`);
         libimagepipeline6 = !libimagepipeline6;
         merger0 = `${(parseInt(`${iconbackwhiteo}`) - (libimagepipeline6 ? 2 : 3))}`;
         iconbackwhiteo += (parseFloat(`${(libimagepipeline6 ? 2 : 1) + parseInt(`${iconbackwhiteo}`)}`));
          let castingr = 4.0;
          let acceptedp = false;
          let ksad5 = String.fromCharCode(114,101,115,112,95,114,95,52,53,0);
         humidityR = new Map([[`${humidityR.size}`, humidityR.size * 1]]);
         castingr += (parseFloat(`${parseInt(`${castingr}`) % (Math.max(2, (acceptedp ? 3 : 5)))}`));
         acceptedp = 91.20 >= castingr;
         ksad5 += `${(ksad5.length / (Math.max(5, (acceptedp ? 5 : 5))))}`;
      final_nl = `${((rncorep ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${videojsb}`)), 5)))}`;
   }
   for (let h = 0; h < 1; h++) {
      rncorep = String.fromCharCode(52,0) == reducerS;
   }
       let code5: Array<any> = [709, 504];
          let middlewarei = String.fromCharCode(97,97,99,116,97,98,95,97,95,54,55,0);
          let ajaxE = 2.0;
          let libreactnativejni5 = true;
         code5 = [code5.length];
         middlewarei = `${((libreactnativejni5 ? 5 : 5) << (Math.min(Math.abs(parseInt(`${ajaxE}`)), 1)))}`;
         ajaxE += parseInt(`${ajaxE}`) & 2;
         libreactnativejni5 = 88.20 >= ajaxE && !libreactnativejni5;
      if (2 >= (code5.length % (Math.max(4, code5.length))) || 4 >= (code5.length % 2)) {
          let photoP = String.fromCharCode(99,111,108,108,105,115,116,95,100,95,55,51,0);
          let renewN = 0;
          let sharedG = 2.0;
          let hejip = true;
         code5 = [3];
         photoP = `${3 << (Math.min(2, photoP.length))}`;
         renewN -= ((hejip ? 4 : 2) / (Math.max(renewN, 9)));
         sharedG *= 1 % (Math.max(10, renewN));
         hejip = 93 <= photoP.length && 93 <= renewN;
      }
         code5.push(3);
      productc -= parseFloat(`${code5.length + emptyJ.length}`);
      mbridgew = new Map([[reducerS, reducerS.length << (Math.min(emptyJ.length, 1))]]);
   for (let c = 0; c < 2; c++) {
      whistleorange2.set(`${emptyJ}`, 3);
   }
       let mountingm: Array<any> = [String.fromCharCode(114,116,99,95,50,95,54,56,0), String.fromCharCode(103,95,55,50,95,102,117,115,101,0)];
       let defaultpredictionprofilel: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,100,95,104,95,53,49,0),102], [String.fromCharCode(99,97,108,108,111,99,95,114,95,49,54,0),99]]);
       let backiconr = 2;
          let logoH = String.fromCharCode(115,112,101,97,107,95,119,95,51,57,0);
          let rightS = String.fromCharCode(97,110,97,103,108,121,112,104,95,118,95,52,52,0);
         mountingm.push(mountingm.length);
         logoH += "2";
         rightS = `${logoH.length}`;
      while (Array.from(defaultpredictionprofilel.keys()).includes(`${backiconr}`)) {
         backiconr <<= Math.min(Math.abs(backiconr << (Math.min(mountingm.length, 5))), 5);
         break;
      }
          let libturbomodulejsijniY = String.fromCharCode(116,95,53,51,95,100,105,105,110,0);
          let refreshN = String.fromCharCode(100,95,55,57,95,97,114,98,105,116,114,97,114,121,0);
          let arrowrightz = 4.0;
         backiconr %= Math.max(1, 1);
         libturbomodulejsijniY = `${2 * parseInt(`${arrowrightz}`)}`;
         refreshN = `${(refreshN == String.fromCharCode(53,0) ? parseInt(`${arrowrightz}`) : refreshN.length)}`;
      while (defaultpredictionprofilel.get(`${backiconr}`) != null) {
         backiconr ^= 3;
         break;
      }
      if (5 <= (backiconr - 5) || (backiconr - 5) <= 1) {
         backiconr += backiconr;
      }
       let chartX = String.fromCharCode(114,95,53,56,95,115,109,111,111,116,104,101,110,0);
         defaultpredictionprofilel.set(`${mountingm.length}`, 2);
      if (defaultpredictionprofilel.get(`${backiconr}`) != null) {
         backiconr &= backiconr & mountingm.length;
      }
      if (defaultpredictionprofilel.size < 4) {
          let thailandI = String.fromCharCode(108,95,56,51,95,97,115,115,101,114,116,105,111,110,0);
          let minimized: Array<any> = [257, 316, 153];
          let defaultlogoB = String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,95,49,95,54,57,0);
          let libavutilh = String.fromCharCode(114,100,109,117,108,116,95,97,95,55,53,0);
          let trophy2: Array<any> = [7, 468, 614];
         defaultpredictionprofilel.set(chartX, chartX.length);
         thailandI += `${trophy2.length - minimized.length}`;
         minimized.push(defaultlogoB.length);
         defaultlogoB += `${(String.fromCharCode(76,0) == thailandI ? minimized.length : thailandI.length)}`;
         libavutilh = `${defaultlogoB.length}`;
         trophy2 = [libavutilh.length << (Math.min(2, thailandI.length))];
      }
      historyh = [2 >> (Math.min(1, Math.abs(defaultpredictionprofilel.size)))];
      reacth >>= Math.min(reducerS.length, 1);
      libffmpegkitc = `${((rncorep ? 4 : 2) & footballfieldX.length)}`;
      codek = `${footballfieldX.length}`;
   if (2 == libffmpegkitc.length) {
       let commonD = 4.0;
       let heji5 = 1.0;
       let appleO = 3.0;
       let fieldK = 5.0;
       let latnt = 1.0;
         commonD -= parseFloat(`${parseInt(`${fieldK}`)}`);
      libffmpegkitc += "3";
   }
      productc *= parseFloat(`${whistleorange2.size + historyh.length}`);
   if (!Array.from(armvaY.values()).includes(reacth)) {
      reacth %= Math.max(3, gradleT.length);
   }
      codek += `${reacth * 2}`;
      footballfieldX = "2";
      final_nl = `${libffmpegkitc.length}`;
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
       let selectedx = false;
    let closeM = true;
    let debugu: Map<any, any> = new Map([[String.fromCharCode(99,95,56,56,95,109,112,111,110,0),740], [String.fromCharCode(106,95,54,54,95,112,114,101,115,101,116,0),869]]);
    let inactive3: Map<any, any> = new Map([[String.fromCharCode(108,117,97,95,101,95,53,57,0),48], [String.fromCharCode(115,99,117,98,98,101,114,95,118,95,56,54,0),590]]);
    let schedule4 = String.fromCharCode(122,95,52,51,0);
    let miniQ = String.fromCharCode(113,100,101,108,116,97,95,49,95,56,55,0);
    let temperaturef: Array<any> = [442, 589, 483];
    let logob: Array<any> = [381, 42];
    let playx = true;
    let inviteO = 2.0;
    let malaysiaz = String.fromCharCode(103,95,54,53,95,99,97,108,99,117,108,97,116,101,100,0);
       let scheduler4 = false;
       let teamdetailsbgh: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,95,99,95,50,55,0),975], [String.fromCharCode(101,95,53,49,95,118,97,114,105,97,110,99,101,115,0),974]]);
       let dependenciesK = String.fromCharCode(106,95,49,54,95,115,104,97,114,105,110,103,0);
      let telemetryi = scheduler4 ? !scheduler4 : scheduler4;
      do {
         scheduler4 = teamdetailsbgh.size <= 97 && 97 <= dependenciesK.length;
         if (telemetryi) {
            break;
         }
      } while ((scheduler4 && (teamdetailsbgh.size / 5) <= 2) && telemetryi);
      if (3 < dependenciesK.length) {
         scheduler4 = 80 > dependenciesK.length;
      }
      let membero = teamdetailsbgh.size >= 5960694;
      do {
          let styleV = String.fromCharCode(116,95,53,53,95,109,106,112,101,103,97,0);
          let fullW = 3.0;
          let bgvipxvodS = 1;
         teamdetailsbgh = new Map([[`${bgvipxvodS}`, ((scheduler4 ? 3 : 5) * bgvipxvodS)]]);
         styleV += `${parseInt(`${fullW}`)}`;
         fullW /= Math.max(1, parseInt(`${fullW}`));
         if (membero) {
            break;
         }
      } while ((!scheduler4) && membero);
          let targeta = 5.0;
          let lnewinterstitialn = String.fromCharCode(114,116,102,95,107,95,57,51,0);
         teamdetailsbgh.set(`${scheduler4}`, lnewinterstitialn.length * 3);
         targeta /= Math.max(4, parseFloat(`${parseInt(`${targeta}`) + parseInt(`${targeta}`)}`));
         lnewinterstitialn += `${parseInt(`${targeta}`)}`;
       let producto: Map<any, any> = new Map([[String.fromCharCode(98,95,50,50,95,114,101,99,116,105,102,121,0),518], [String.fromCharCode(99,95,56,54,95,100,101,98,117,103,0),432]]);
       let bannerT: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,95,114,95,51,48,0),String.fromCharCode(122,95,50,51,95,109,97,120,98,105,116,114,97,116,101,0)], [String.fromCharCode(110,95,53,49,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0),String.fromCharCode(100,95,52,49,95,110,115,112,97,99,101,115,0)]]);
          let placementL = String.fromCharCode(115,112,101,101,100,117,112,95,122,95,55,57,0);
          let modity3 = true;
          let uploade: Array<any> = [String.fromCharCode(101,120,104,97,117,115,116,95,55,95,55,56,0), String.fromCharCode(105,95,55,54,95,116,114,117,115,116,101,100,0)];
         scheduler4 = (59 == ((scheduler4 ? bannerT.size : 73) - bannerT.size));
         placementL = `${3 ^ uploade.length}`;
         modity3 = !modity3;
         uploade.push(placementL.length);
          let mbjscommonj: Array<any> = [925, 882, 323];
         dependenciesK = `${1 & producto.size}`;
         mbjscommonj = [mbjscommonj.length * 2];
      if (scheduler4) {
         dependenciesK += `${(dependenciesK == String.fromCharCode(67,0) ? producto.size : dependenciesK.length)}`;
      }
       let optionsQ = 1.0;
      miniQ += "1";
   while (!schedule4.includes(miniQ)) {
      schedule4 = "2";
      break;
   }
       let awayteamfieldi = true;
       let stations3: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,121,95,53,53,0),String.fromCharCode(115,116,97,107,101,95,102,95,54,0)], [String.fromCharCode(106,95,50,56,95,115,116,114,105,112,101,0),String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,95,121,95,52,54,0)], [String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,50,95,51,48,0),String.fromCharCode(105,110,116,101,114,110,101,116,95,52,95,52,53,0)]]);
       let type_qJ = String.fromCharCode(109,95,52,51,95,114,97,100,105,117,115,0);
         type_qJ = `${type_qJ.length & stations3.size}`;
         awayteamfieldi = !type_qJ.startsWith(`${awayteamfieldi}`);
         stations3 = new Map([[`${stations3.size}`, stations3.size * 2]]);
          let nextV = true;
          let mapping0 = 4.0;
          let floaterc = false;
         type_qJ += `${(parseInt(`${mapping0}`) << (Math.min(2, Math.abs((nextV ? 2 : 4)))))}`;
         nextV = floaterc && !floaterc;
         mapping0 -= (parseFloat(`${2 % (Math.max(5, (floaterc ? 5 : 2)))}`));
      if (4 <= (3 - stations3.size) && (stations3.size - type_qJ.length) <= 3) {
         stations3.set(`${awayteamfieldi}`, stations3.size);
      }
         awayteamfieldi = (39 == ((awayteamfieldi ? 39 : type_qJ.length) / (Math.max(2, type_qJ.length))));
      for (let t = 0; t < 1; t++) {
          let championK: Map<any, any> = new Map([[String.fromCharCode(113,95,56,50,95,111,112,116,101,100,0),452], [String.fromCharCode(118,105,101,119,101,114,95,54,95,51,54,0),220], [String.fromCharCode(97,112,112,101,110,100,95,117,95,51,0),91]]);
          let pagination7 = 0;
          let unfillO = 0.0;
         stations3 = new Map([[`${championK.size}`, 2]]);
         championK.set(`${unfillO}`, pagination7 & 3);
         pagination7 <<= Math.min(4, Math.abs(parseInt(`${unfillO}`) >> (Math.min(4, Math.abs(pagination7)))));
      }
         awayteamfieldi = stations3.size <= 92 && !awayteamfieldi;
       let latnP: Map<any, any> = new Map([[String.fromCharCode(99,95,51,57,95,110,105,115,116,110,105,100,0),true ], [String.fromCharCode(97,115,102,99,114,121,112,116,95,51,95,53,56,0),false ]]);
      debugu.set(type_qJ, temperaturef.length);
   for (let l = 0; l < 3; l++) {
      selectedx = miniQ.length <= 2 && schedule4.length <= 2;
   }
      inactive3.set(schedule4, temperaturef.length);
      selectedx = (23 >= (debugu.size >> (Math.min(2, Math.abs((selectedx ? 23 : debugu.size))))));
       let loadingW = true;
         loadingW = (!loadingW ? !loadingW : loadingW);
      while (!loadingW) {
         loadingW = (loadingW ? !loadingW : loadingW);
         break;
      }
      if (loadingW && loadingW) {
         loadingW = (loadingW ? loadingW : loadingW);
      }
      schedule4 = `${inactive3.size | 2}`;
   if (closeM) {
      temperaturef.push(1);
   }
   for (let g = 0; g < 2; g++) {
      inactive3.set(schedule4, 1);
   }
       let malaysia6: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,95,102,95,49,57,0),true ], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,53,95,52,51,0),false ]]);
       let penalty6 = 0.0;
       let nativek: Map<any, any> = new Map([[String.fromCharCode(121,111,117,95,108,95,50,0),String.fromCharCode(116,95,50,53,95,114,111,102,105,108,101,0)], [String.fromCharCode(112,111,105,110,116,99,98,98,95,50,95,55,52,0),String.fromCharCode(111,95,55,51,95,115,105,110,113,98,0)]]);
          let settingsC = String.fromCharCode(97,117,116,104,107,101,121,95,109,95,54,0);
          let logoutN = false;
         malaysia6 = new Map([[`${malaysia6.size}`, malaysia6.size]]);
         settingsC += `${settingsC.length | 1}`;
         logoutN = settingsC.length >= 70 || logoutN;
         malaysia6 = new Map([[`${nativek.size}`, nativek.size ^ parseInt(`${penalty6}`)]]);
      for (let a = 0; a < 1; a++) {
         penalty6 *= malaysia6.size * nativek.size;
      }
      if (parseInt(`${penalty6}`) == nativek.size) {
          let tumbnailX = String.fromCharCode(97,95,49,54,95,101,120,116,114,101,109,101,0);
         penalty6 -= tumbnailX.length % (Math.max(1, 9));
      }
      let anythinkF = malaysia6.size >= 4984277;
      do {
         malaysia6 = new Map([[`${nativek.size}`, nativek.size << (Math.min(Math.abs(2), 1))]]);
         if (anythinkF) {
            break;
         }
      } while ((malaysia6.get(`${penalty6}`) == null) && anythinkF);
      if (2.71 < (penalty6 - 5.97)) {
          let pangleL = 5.0;
          let memberj = String.fromCharCode(101,114,114,111,114,99,98,95,113,95,52,53,0);
         penalty6 += malaysia6.size;
         pangleL += (memberj == String.fromCharCode(106,0) ? parseInt(`${pangleL}`) : memberj.length);
      }
      let librrcR = 9507674 >= malaysia6.size;
      do {
          let completeX = 2.0;
          let configureg = String.fromCharCode(98,111,111,107,109,97,114,107,115,95,111,95,51,51,0);
          let unimplementedviewi = String.fromCharCode(122,95,53,57,95,109,111,118,101,110,99,0);
         malaysia6.set(`${penalty6}`, 2 * parseInt(`${penalty6}`));
         completeX += parseFloat(`${configureg.length >> (Math.min(2, Math.abs(parseInt(`${completeX}`))))}`);
         configureg += `${unimplementedviewi.length}`;
         unimplementedviewi += `${(configureg == String.fromCharCode(97,0) ? configureg.length : parseInt(`${completeX}`))}`;
         if (librrcR) {
            break;
         }
      } while (librrcR && (5.20 <= (4.19 - penalty6) && (4 / (Math.max(8, malaysia6.size))) <= 2));
         malaysia6 = new Map([[`${malaysia6.size}`, nativek.size]]);
      while ((penalty6 * 1.85) == 3.89) {
         penalty6 /= Math.max(1, 3 / (Math.max(4, parseInt(`${penalty6}`))));
         break;
      }
      temperaturef.push(temperaturef.length | 3);
       let reacte = String.fromCharCode(105,110,116,101,114,115,101,99,116,95,48,95,52,55,0);
       let arrowupe = String.fromCharCode(100,97,116,97,100,105,114,95,117,95,55,55,0);
       let whistleorangeC = false;
      let service5 = String.fromCharCode(55,57,98,112,0) == reacte;
      do {
          let predictionwint: Map<any, any> = new Map([[String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,49,95,55,53,0),String.fromCharCode(117,95,50,56,95,115,117,99,99,101,115,115,0)], [String.fromCharCode(105,95,55,48,95,120,118,105,100,105,100,99,116,0),String.fromCharCode(115,95,50,48,95,116,105,108,101,109,107,97,0)]]);
          let libflipperb: Array<any> = [751, 458];
          let libyogax = String.fromCharCode(109,95,51,56,0);
          let ajaxa: Array<any> = [String.fromCharCode(115,95,57,48,95,115,101,99,111,110,100,115,0), String.fromCharCode(117,110,109,97,112,102,105,108,101,95,50,95,55,50,0), String.fromCharCode(99,97,115,101,100,95,116,95,51,57,0)];
         reacte = `${1 >> (Math.min(3, arrowupe.length))}`;
         predictionwint = new Map([[`${ajaxa.length}`, ajaxa.length | 2]]);
         libflipperb.push(3 / (Math.max(5, ajaxa.length)));
         libyogax = `${1 >> (Math.min(2, Math.abs(predictionwint.size)))}`;
         if (service5) {
            break;
         }
      } while ((5 > arrowupe.length || reacte != String.fromCharCode(54,0)) && service5);
      for (let p = 0; p < 3; p++) {
         reacte = `${(arrowupe == String.fromCharCode(121,0) ? arrowupe.length : (whistleorangeC ? 2 : 4))}`;
      }
       let defaultlogom = 3;
       let benefitc = 5;
         defaultlogom <<= Math.min(Math.abs(benefitc >> (Math.min(reacte.length, 3))), 5);
      while ((2 + benefitc) >= 1) {
          let chatB = true;
          let lightI = 4.0;
          let privacyv = 1;
         defaultlogom <<= Math.min(Math.abs(parseInt(`${lightI}`) / (Math.max(reacte.length, 4))), 2);
         chatB = !chatB;
         lightI -= privacyv;
         privacyv |= privacyv;
         break;
      }
      let homeh = benefitc >= 6246778;
      do {
         benefitc *= reacte.length;
         if (homeh) {
            break;
         }
      } while (((1 >> (Math.min(4, Math.abs(benefitc)))) >= 5 || benefitc >= 1) && homeh);
      while (!whistleorangeC && (4 * defaultlogom) == 2) {
         whistleorangeC = 40 >= arrowupe.length;
         break;
      }
         whistleorangeC = arrowupe.length <= 7;
      let templateprocessorC = whistleorangeC ? !whistleorangeC : whistleorangeC;
      do {
          let tick5: Map<any, any> = new Map([[String.fromCharCode(121,95,55,51,95,100,97,116,97,99,101,110,116,101,114,0),116], [String.fromCharCode(119,95,55,57,95,112,105,120,102,109,116,0),888]]);
         whistleorangeC = !whistleorangeC && 18 >= defaultlogom;
         tick5 = new Map([[`${tick5.size}`, tick5.size]]);
         if (templateprocessorC) {
            break;
         }
      } while ((defaultlogom <= 1) && templateprocessorC);
      temperaturef.push((temperaturef.length << (Math.min(5, Math.abs((closeM ? 3 : 2))))));

    setShowControls(!showControls);

   for (let k = 0; k < 3; k++) {
      closeM = selectedx;
   }
      debugu = new Map([[`${temperaturef.length}`, (temperaturef.length & (closeM ? 2 : 5))]]);
       let context6 = 0.0;
         context6 += parseFloat(`${2}`);
         context6 *= parseFloat(`${parseInt(`${context6}`) | 1}`);
          let albumH = String.fromCharCode(114,95,50,51,95,116,101,99,104,110,111,108,111,103,121,0);
         context6 /= Math.max(parseFloat(`${parseInt(`${context6}`) / 2}`), 4);
         albumH += `${albumH.length}`;
      closeM = debugu.size == 70;
   for (let v = 0; v < 3; v++) {
       let nterstitiali: Array<any> = [696, 920, 202];
       let favicone = String.fromCharCode(107,95,51,50,95,115,100,107,0);
       let action1 = false;
         action1 = 26 == nterstitiali.length;
       let libffmpegkito = String.fromCharCode(105,95,51,95,115,116,97,116,101,115,0);
         libffmpegkito += `${2 & nterstitiali.length}`;
      while (favicone.includes(libffmpegkito)) {
          let slider8 = 0.0;
         favicone = "2";
         slider8 /= Math.max(parseInt(`${slider8}`) * 2, 5);
         break;
      }
         libffmpegkito = `${(libffmpegkito == String.fromCharCode(57,0) ? (action1 ? 2 : 3) : libffmpegkito.length)}`;
          let playercommonx = 4.0;
          let libhermeso = true;
         action1 = (parseInt(`${playercommonx}`) - favicone.length) >= 28;
         playercommonx *= (parseFloat(`${(libhermeso ? 4 : 2) + (libhermeso ? 1 : 3)}`));
         nterstitiali = [nterstitiali.length & favicone.length];
          let sharemodalb = 5.0;
         favicone = `${2 | nterstitiali.length}`;
         sharemodalb -= parseInt(`${sharemodalb}`);
         nterstitiali.push(2 - favicone.length);
      closeM = ((debugu.size | (!closeM ? 80 : debugu.size)) >= 80);
   }
   if (selectedx) {
      schedule4 = `${((closeM ? 2 : 1) / (Math.max(inactive3.size, 8)))}`;
   }
   while (miniQ.length == 5 && !selectedx) {
      selectedx = temperaturef.includes(selectedx);
      break;
   }
   while (5 < (4 | schedule4.length)) {
      debugu.set(`${temperaturef.length}`, debugu.size);
      break;
   }
      inactive3 = new Map([[`${debugu.size}`, schedule4.length]]);
      schedule4 += `${inactive3.size >> (Math.min(Math.abs(3), 3))}`;
       let football2: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,111,108,117,116,101,95,122,95,57,53,0),555], [String.fromCharCode(106,95,56,95,102,111,114,119,97,114,100,115,0),516]]);
      if (Array.from(football2.keys()).includes(`${football2.size}`)) {
         football2.set(`${football2.size}`, 1);
      }
      if (!Array.from(football2.keys()).includes(`${football2.size}`)) {
          let floatingb = 0.0;
          let downloaderF = 3;
          let colorsJ = false;
          let sharedL = String.fromCharCode(102,95,50,53,95,108,97,110,103,117,97,103,101,115,0);
          let telegramR = String.fromCharCode(100,95,55,55,95,118,111,119,101,108,0);
         football2.set(telegramR, football2.size << (Math.min(telegramR.length, 2)));
         floatingb /= Math.max(sharedL.length >> (Math.min(Math.abs(3), 4)), 4);
         downloaderF ^= parseInt(`${floatingb}`);
         colorsJ = downloaderF == 16;
         sharedL = "2";
      }
      for (let l = 0; l < 1; l++) {
          let latnK = 2.0;
          let navigationg = 5.0;
          let componentsB = false;
         football2.set(`${latnK}`, (parseInt(`${latnK}`) >> (Math.min(3, Math.abs((componentsB ? 5 : 2))))));
         navigationg -= parseFloat(`${3}`);
      }
      schedule4 = `${((closeM ? 2 : 2) | debugu.size)}`;
   while (inactive3.size >= 4 && 5 >= (4 ^ inactive3.size)) {
       let homeb = String.fromCharCode(121,95,57,57,95,116,114,101,101,0);
       let proxyD = String.fromCharCode(109,102,113,101,95,102,95,56,55,0);
       let userY = 0.0;
       let googlei = String.fromCharCode(110,95,57,56,95,97,116,116,114,97,99,116,105,110,103,0);
       let backK = 2;
      while (1 == homeb.length) {
         proxyD += `${backK}`;
         break;
      }
      if (googlei != proxyD) {
         proxyD += `${proxyD.length}`;
      }
      for (let w = 0; w < 2; w++) {
          let iconnointernet3 = 0.0;
          let code_ = false;
          let eventsplashH = String.fromCharCode(104,95,53,51,95,97,110,110,111,117,110,99,101,0);
          let package_ns = 0;
          let dycreatorL = 0.0;
         proxyD += `${eventsplashH.length}`;
         iconnointernet3 *= parseInt(`${dycreatorL}`) * 2;
         code_ = 41 >= package_ns;
         eventsplashH += `${package_ns * parseInt(`${iconnointernet3}`)}`;
         dycreatorL /= Math.max(4, parseFloat(`${2}`));
      }
      if (proxyD.length <= 1) {
         proxyD += `${proxyD.length + backK}`;
      }
         googlei = "2";
          let gifgoalS = 5.0;
         homeb = `${2 + googlei.length}`;
         gifgoalS /= Math.max(parseFloat(`${parseInt(`${gifgoalS}`) ^ 1}`), 2);
          let areaf = String.fromCharCode(108,95,54,56,95,114,101,113,117,105,114,101,115,0);
          let volumeb = false;
          let bggradient1 = String.fromCharCode(111,95,51,55,95,112,114,111,99,101,101,100,0);
         userY *= 1 / (Math.max(2, backK));
         areaf += `${areaf.length}`;
         volumeb = !bggradient1.includes(`${volumeb}`);
         bggradient1 = `${areaf.length}`;
         userY *= homeb.length % (Math.max(4, proxyD.length));
         homeb += `${googlei.length}`;
         backK *= proxyD.length >> (Math.min(homeb.length, 3));
         googlei += `${proxyD.length - 1}`;
          let zooms: Array<any> = [String.fromCharCode(115,112,101,99,116,114,117,109,95,118,95,51,53,0), String.fromCharCode(99,95,56,50,95,100,101,108,105,118,101,114,0)];
          let gifgoalL = String.fromCharCode(98,95,57,51,95,114,101,112,108,97,99,101,0);
         proxyD = `${parseInt(`${userY}`) + 1}`;
         zooms.push(zooms.length - 1);
         gifgoalL += `${(gifgoalL == String.fromCharCode(76,0) ? gifgoalL.length : zooms.length)}`;
      let rightN = googlei == String.fromCharCode(110,116,113,56,106,0);
      do {
          let utilsd = true;
          let shirtk = 1.0;
          let libavformatH = String.fromCharCode(115,116,115,100,95,103,95,57,55,0);
         googlei += `${2 >> (Math.min(Math.abs(parseInt(`${userY}`)), 3))}`;
         utilsd = libavformatH.length < parseInt(`${shirtk}`);
         shirtk -= (parseFloat(`${String.fromCharCode(70,0) == libavformatH ? libavformatH.length : parseInt(`${shirtk}`)}`));
         if (rightN) {
            break;
         }
      } while (rightN && (proxyD == String.fromCharCode(121,0)));
      if (3 == proxyD.length) {
         proxyD = `${backK}`;
      }
      let phoneshareJ = 6164505 >= backK;
      do {
          let zoomc = 4;
          let ranko = 3;
          let crownH = 2.0;
          let progressW = String.fromCharCode(114,95,56,53,95,97,118,102,102,116,0);
         backK <<= Math.min(5, Math.abs(zoomc));
         zoomc ^= ranko - progressW.length;
         ranko &= 2;
         crownH += parseFloat(`${progressW.length - 1}`);
         if (phoneshareJ) {
            break;
         }
      } while (phoneshareJ && ((backK | 4) > 2 || 4 > (4 | googlei.length)));
      playx = (inviteO + backK) <= 18;
      break;
   }
    delayControls();
  };

  const clearHidingDelay = () => {
       let tumbnailU: Map<any, any> = new Map([[String.fromCharCode(112,105,110,107,95,57,95,49,52,0),627], [String.fromCharCode(116,95,56,57,95,110,117,109,101,114,111,0),856]]);
    let pausex: Array<any> = [196, 495];
    let whiteanimationliveZ = String.fromCharCode(104,95,55,49,95,97,115,112,101,99,116,115,0);
    let successj: Array<any> = [890, 129];
    let encryptc = 3.0;
    let arrowup6: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,102,108,117,115,104,0),790], [String.fromCharCode(120,109,108,115,95,100,95,56,53,0),715]]);
    let countdowny = 1;
    let dplusZ = 2;
    let redirect0 = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,95,119,95,51,54,0);
    let upgraded: Array<any> = [689, 447];
    let sinaY: Map<any, any> = new Map([[String.fromCharCode(106,95,49,56,95,111,102,102,101,114,115,0),true ], [String.fromCharCode(102,95,57,49,95,102,105,120,116,117,114,101,115,0),true ]]);
    let libfbZ = String.fromCharCode(122,95,49,48,95,116,101,115,116,105,109,103,105,110,116,0);
    let bootg = 3.0;
    let plus8 = 5.0;
   if (1 == (3 << (Math.min(2, Math.abs(sinaY.size))))) {
      dplusZ += sinaY.size;
   }
       let gifgoalp = 0.0;
       let resend_: Array<any> = [String.fromCharCode(114,95,49,52,95,98,105,116,97,108,108,111,99,0), String.fromCharCode(111,95,51,55,95,100,101,99,114,121,112,116,105,111,110,0)];
         resend_ = [parseInt(`${gifgoalp}`) << (Math.min(4, Math.abs(1)))];
       let libzeuso = 0.0;
      while (3.13 > (gifgoalp - 2.68) || (parseInt(`${gifgoalp}`) - resend_.length) > 3) {
         resend_.push(3);
         break;
      }
      let moviesl = resend_.length >= 6713605;
      do {
         resend_.push(1 & resend_.length);
         if (moviesl) {
            break;
         }
      } while (moviesl && (5.52 <= (resend_.length - gifgoalp) || 5.55 <= (5.52 - gifgoalp)));
         resend_.push(parseInt(`${gifgoalp}`));
         resend_.push(2 * parseInt(`${gifgoalp}`));
      arrowup6.set(`${countdowny}`, countdowny);
      sinaY = new Map([[`${sinaY.size}`, pausex.length]]);
   if (!redirect0.endsWith(`${pausex.length}`)) {
      redirect0 += `${dplusZ | 3}`;
   }
      upgraded.push(3 * dplusZ);
   if ((pausex.length * 5) <= 4 || (pausex.length * sinaY.size) <= 5) {
       let leftj = String.fromCharCode(101,105,112,118,95,112,95,54,51,0);
       let yellowredcardw = String.fromCharCode(120,95,49,51,95,99,97,117,116,101,114,105,122,101,0);
       let reactnativejsA = 3.0;
      if (leftj.includes(yellowredcardw)) {
          let giflivestreamings = 0;
          let eventsplashC: Map<any, any> = new Map([[String.fromCharCode(112,103,115,122,95,106,95,49,56,0),true ], [String.fromCharCode(108,95,57,56,95,98,108,117,101,0),true ]]);
          let gifgoalI = String.fromCharCode(115,95,52,51,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
         yellowredcardw = `${3 ^ giflivestreamings}`;
         giflivestreamings |= gifgoalI.length;
         eventsplashC = new Map([[`${eventsplashC.size}`, eventsplashC.size - gifgoalI.length]]);
      }
      for (let n = 0; n < 2; n++) {
          let searchd = String.fromCharCode(105,95,56,95,114,110,110,111,105,115,101,0);
          let area9: Array<any> = [String.fromCharCode(114,100,111,112,116,95,112,95,50,48,0), String.fromCharCode(119,105,101,110,101,114,95,122,95,57,52,0), String.fromCharCode(122,95,56,95,114,97,100,102,103,0)];
         yellowredcardw += `${(String.fromCharCode(49,0) == leftj ? yellowredcardw.length : leftj.length)}`;
         searchd = `${searchd.length}`;
         area9.push(searchd.length << (Math.min(2, area9.length)));
      }
      if (3 >= leftj.length) {
         reactnativejsA /= Math.max(2, parseFloat(`${yellowredcardw.length}`));
      }
      for (let e = 0; e < 1; e++) {
         leftj += `${leftj.length - 2}`;
      }
         yellowredcardw += `${parseInt(`${reactnativejsA}`) / 1}`;
      if ((3 + leftj.length) == 4 || 2.16 == (parseFloat(`${leftj.length}`) - reactnativejsA)) {
         leftj = `${parseInt(`${reactnativejsA}`)}`;
      }
      if (yellowredcardw.length < parseInt(`${reactnativejsA}`)) {
         yellowredcardw += `${yellowredcardw.length}`;
      }
          let interstitialK = 5;
          let pingP = String.fromCharCode(101,110,100,97,95,48,95,57,55,0);
         reactnativejsA /= Math.max(parseFloat(`${leftj.length | 2}`), 1);
         interstitialK -= 1;
         pingP = `${pingP.length}`;
          let privacyN = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,111,95,56,55,0);
          let bufferI = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,99,95,49,48,0);
          let nativeexs = true;
         yellowredcardw += `${leftj.length * 1}`;
         privacyN += `${(String.fromCharCode(100,0) == privacyN ? bufferI.length : privacyN.length)}`;
         bufferI = `${bufferI.length}`;
         nativeexs = privacyN.length < 22;
      sinaY = new Map([[`${reactnativejsA}`, 3]]);
   }
      arrowup6.set(`${upgraded.length}`, upgraded.length);
   let executors = dplusZ >= 8051670;
   do {
      dplusZ /= Math.max(arrowup6.size % 1, 5);
      if (executors) {
         break;
      }
   } while (executors && (sinaY.get(`${dplusZ}`) == null));
   while ((sinaY.size * 1) < 2 && (1 * countdowny) < 5) {
       let actiong: Array<any> = [String.fromCharCode(99,95,51,56,95,102,105,114,101,100,0), String.fromCharCode(97,117,116,111,102,105,120,95,115,95,52,52,0)];
       let turndowns = true;
       let phoneshareC = String.fromCharCode(115,95,50,95,105,110,97,99,116,105,118,101,0);
       let libfollyJ = String.fromCharCode(100,99,98,122,95,53,95,49,0);
      if (turndowns) {
         turndowns = !turndowns && actiong.length > 31;
      }
      let iconwatchnowz = libfollyJ == String.fromCharCode(106,113,48,119,112,109,113,117,119,56,0);
      do {
          let more5: Map<any, any> = new Map([[String.fromCharCode(116,114,105,99,107,108,101,95,99,95,56,53,0),false ], [String.fromCharCode(101,95,57,56,95,119,97,118,101,0),false ], [String.fromCharCode(106,95,52,57,95,114,101,103,105,111,110,115,0),false ]]);
          let awayteamfieldE = String.fromCharCode(99,111,112,121,100,97,116,97,95,48,95,51,55,0);
          let phoneshareI = true;
         libfollyJ = `${((turndowns ? 5 : 2))}`;
         more5.set(awayteamfieldE, awayteamfieldE.length & 3);
         phoneshareI = !phoneshareI;
         if (iconwatchnowz) {
            break;
         }
      } while ((turndowns) && iconwatchnowz);
      let klevine = turndowns ? !turndowns : turndowns;
      do {
         turndowns = phoneshareC.length == 45;
         if (klevine) {
            break;
         }
      } while (((actiong.length & 3) >= 5 || 3 >= actiong.length) && klevine);
         phoneshareC += `${(2 << (Math.min(5, Math.abs((turndowns ? 2 : 4)))))}`;
      for (let c = 0; c < 1; c++) {
         phoneshareC += `${(actiong.length | (turndowns ? 2 : 5))}`;
      }
      sinaY = new Map([[`${sinaY.size}`, sinaY.size | 2]]);
      break;
   }
   let librrcb = dplusZ <= 6454719;
   do {
      dplusZ &= 1;
      if (librrcb) {
         break;
      }
   } while ((4.27 >= encryptc) && librrcb);
      redirect0 += "1";
   let uimanagerE = encryptc >= 8964186.0;
   do {
      encryptc /= Math.max(parseFloat(`${1}`), 5);
      if (uimanagerE) {
         break;
      }
   } while (uimanagerE && ((3 & arrowup6.size) >= 2));
       let n_viewI = 2;
       let downarrowq = false;
         n_viewI ^= 2 << (Math.min(Math.abs(n_viewI), 4));
      while (!downarrowq && (n_viewI & 4) > 1) {
          let headerg = String.fromCharCode(114,101,110,116,97,108,95,101,95,53,52,0);
          let telegram6 = String.fromCharCode(106,95,57,48,95,100,101,108,116,97,115,0);
          let invite5 = 4.0;
          let jingdongS = String.fromCharCode(119,95,56,54,95,102,97,115,116,109,97,116,104,0);
         n_viewI *= headerg.length >> (Math.min(5, Math.abs(parseInt(`${invite5}`))));
         headerg += `${jingdongS.length + 3}`;
         telegram6 = `${jingdongS.length}`;
         invite5 /= Math.max(4, parseFloat(`${jingdongS.length}`));
         break;
      }
      while (3 >= n_viewI) {
          let largebrightnessp = String.fromCharCode(106,95,49,51,95,119,100,108,116,0);
          let transfer2 = 2;
         downarrowq = 77 >= n_viewI && downarrowq;
         largebrightnessp = "3";
         transfer2 -= 2;
         break;
      }
      while (downarrowq || (n_viewI * 2) < 5) {
         n_viewI <<= Math.min(5, Math.abs(2));
         break;
      }
      if (4 <= (5 * n_viewI) && downarrowq) {
          let toponp = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,57,95,53,51,0);
          let inviteU: Array<any> = [187, 331, 910];
          let controlss = String.fromCharCode(103,95,55,50,95,112,112,99,99,111,109,109,111,110,0);
          let libjsijniprofilert = 2;
         n_viewI /= Math.max(inviteU.length, 4);
         toponp = `${(String.fromCharCode(118,0) == toponp ? libjsijniprofilert : toponp.length)}`;
         inviteU.push(2 ^ libjsijniprofilert);
         controlss += `${2 + controlss.length}`;
      }
         n_viewI += ((downarrowq ? 2 : 2) * n_viewI);
      arrowup6 = new Map([[`${sinaY.size}`, sinaY.size]]);
   if (2 > (redirect0.length * parseInt(`${encryptc}`)) || 2 > (redirect0.length * parseInt(`${encryptc}`))) {
      encryptc *= parseFloat(`${tumbnailU.size}`);
   }
      arrowup6.set(libfbZ, 3);
      libfbZ += `${whiteanimationliveZ.length * parseInt(`${encryptc}`)}`;
   if (1 <= sinaY.size) {
       let chinasame9: Array<any> = [945, 739];
       let libanen = String.fromCharCode(115,97,116,105,115,102,105,101,100,95,51,95,53,52,0);
       let dplusp = 3.0;
      while (1 == (chinasame9.length | 2) || (2 | chinasame9.length) == 5) {
         libanen += `${parseInt(`${dplusp}`)}`;
         break;
      }
      let downloadw = String.fromCharCode(116,120,54,105,0) == libanen;
      do {
         libanen = `${2 & chinasame9.length}`;
         if (downloadw) {
            break;
         }
      } while (downloadw && (libanen.endsWith(`${chinasame9.length}`)));
      for (let z = 0; z < 2; z++) {
          let analyticx: Map<any, any> = new Map([[String.fromCharCode(115,105,103,115,108,111,116,95,101,95,50,55,0),true ], [String.fromCharCode(112,95,54,56,95,109,111,111,102,0),false ], [String.fromCharCode(110,95,55,52,95,115,121,110,99,104,114,111,110,111,117,115,0),false ]]);
          let iconuserG = String.fromCharCode(116,95,52,57,95,115,105,108,101,110,116,0);
          let iconbackwhiteu = String.fromCharCode(107,112,115,95,104,95,57,55,0);
          let utilsx = String.fromCharCode(99,111,110,116,101,120,116,117,97,108,95,115,95,51,54,0);
          let sportsg = true;
         dplusp -= parseFloat(`${chinasame9.length << (Math.min(Math.abs(3), 3))}`);
         analyticx = new Map([[utilsx, (String.fromCharCode(77,0) == iconbackwhiteu ? iconbackwhiteu.length : utilsx.length)]]);
         iconuserG += `${analyticx.size}`;
         sportsg = iconuserG.length <= 54 && sportsg;
      }
          let uploadg = 3.0;
         chinasame9 = [1 << (Math.min(4, chinasame9.length))];
         uploadg /= Math.max(parseFloat(`${3}`), 3);
      while (libanen.startsWith(`${chinasame9.length}`)) {
         libanen += `${parseInt(`${dplusp}`)}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
         dplusp += (parseFloat(`${String.fromCharCode(89,0) == libanen ? libanen.length : parseInt(`${dplusp}`)}`));
      }
      if (chinasame9.includes(dplusp)) {
         dplusp *= parseFloat(`${parseInt(`${dplusp}`)}`);
      }
      if ((2 - libanen.length) == 4 || (dplusp * 3.10) == 5.27) {
          let libreactnativejnij = 1.0;
          let nativeG = 1.0;
          let zhuboV = String.fromCharCode(111,114,103,95,102,95,55,52,0);
          let libfbF: Map<any, any> = new Map([[String.fromCharCode(109,95,57,0),false ], [String.fromCharCode(99,97,110,99,101,108,108,101,100,95,121,95,57,56,0),true ]]);
         libanen = `${(libanen == String.fromCharCode(53,0) ? chinasame9.length : libanen.length)}`;
         libreactnativejnij += parseFloat(`${1 << (Math.min(3, Math.abs(parseInt(`${nativeG}`))))}`);
         nativeG *= parseFloat(`${parseInt(`${nativeG}`) + zhuboV.length}`);
         zhuboV = `${(zhuboV == String.fromCharCode(56,0) ? zhuboV.length : libfbF.size)}`;
         libfbF = new Map([[`${nativeG}`, parseInt(`${libreactnativejnij}`)]]);
      }
          let encryptk: Map<any, any> = new Map([[String.fromCharCode(105,103,110,101,116,116,101,95,113,95,54,57,0),940], [String.fromCharCode(104,95,50,53,95,116,111,111,116,105,112,0),143], [String.fromCharCode(116,97,98,115,95,99,95,52,50,0),44]]);
         chinasame9.push(parseInt(`${dplusp}`) * libanen.length);
         encryptk.set(`${encryptk.size}`, encryptk.size);
      sinaY = new Map([[`${chinasame9.length}`, chinasame9.length ^ redirect0.length]]);
   }
      dplusZ -= countdowny | dplusZ;
   while ((upgraded.length & whiteanimationliveZ.length) < 1 && (whiteanimationliveZ.length & upgraded.length) < 1) {
      whiteanimationliveZ = `${countdowny}`;
      break;
   }
      upgraded = [dplusZ ^ pausex.length];
   while (4 == (whiteanimationliveZ.length % (Math.max(5, tumbnailU.size))) || (4 % (Math.max(4, whiteanimationliveZ.length))) == 2) {
      whiteanimationliveZ += `${sinaY.size}`;
      break;
   }
      countdowny ^= whiteanimationliveZ.length;
      upgraded.push(libfbZ.length);
   let volumeS = 7897109 >= countdowny;
   do {
      countdowny += 2;
      if (volumeS) {
         break;
      }
   } while ((2 == (countdowny / (Math.max(6, redirect0.length))) && (redirect0.length / (Math.max(8, countdowny))) == 2) && volumeS);
   if (whiteanimationliveZ.length > sinaY.size) {
      sinaY = new Map([[`${countdowny}`, 2]]);
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let stationsH = String.fromCharCode(99,95,49,56,95,104,101,97,100,101,114,0);
    let launcherg = 2;
    let componentregistry6 = String.fromCharCode(118,109,97,102,95,122,95,50,55,0);
    let questicon8: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,105,99,105,116,95,53,95,50,51,0),616], [String.fromCharCode(112,114,101,112,97,114,105,110,103,95,52,95,55,51,0),796], [String.fromCharCode(103,110,117,116,108,115,95,52,95,52,49,0),534]]);
    let awayF = 1;
    let stationR = String.fromCharCode(108,95,52,52,95,115,98,117,118,0);
    let sellY: Array<any> = [253, 842, 484];
    let libfbu = false;
    let gestures = String.fromCharCode(108,95,52,55,95,101,114,114,111,114,99,98,0);
    let zhengpianC = 5.0;
    let iconpipexpandu: Map<any, any> = new Map([[String.fromCharCode(100,101,114,105,118,95,101,95,51,49,0),161], [String.fromCharCode(102,111,108,108,111,119,101,114,95,111,95,50,56,0),889]]);
    let quest2 = true;
   while ((stationR.length * 3) < 1 || (stationR.length * 3) < 2) {
       let rulesS = String.fromCharCode(111,95,53,51,95,97,100,115,97,114,109,97,115,109,0);
       let suggestionf: Array<any> = [749, 693];
       let e_playerP = 0.0;
       let incidentL: Map<any, any> = new Map([[String.fromCharCode(102,112,117,116,115,95,121,95,53,51,0),838], [String.fromCharCode(99,117,114,114,101,110,116,95,55,95,52,48,0),38], [String.fromCharCode(121,95,51,51,95,100,101,103,114,97,100,97,116,105,111,110,0),452]]);
      while ((rulesS.length * 3) < 3) {
         incidentL.set(`${e_playerP}`, 3 % (Math.max(6, parseInt(`${e_playerP}`))));
         break;
      }
         suggestionf = [3 | parseInt(`${e_playerP}`)];
      let iconnointernetS = 5647904 <= incidentL.size;
      do {
         incidentL.set(`${e_playerP}`, parseInt(`${e_playerP}`) & incidentL.size);
         if (iconnointernetS) {
            break;
         }
      } while (iconnointernetS && (incidentL.size == 5));
       let libflipper1 = String.fromCharCode(115,98,119,97,105,116,95,111,95,54,54,0);
       let gradlewP = String.fromCharCode(112,95,54,55,95,119,101,108,115,101,110,99,100,101,109,111,0);
         e_playerP /= Math.max(rulesS.length, 2);
      if (Array.from(incidentL.values()).includes(suggestionf.length)) {
         suggestionf = [(String.fromCharCode(113,0) == gradlewP ? suggestionf.length : gradlewP.length)];
      }
         gradlewP = `${libflipper1.length}`;
      let countdownl = incidentL.size >= 7115254;
      do {
         incidentL.set(libflipper1, libflipper1.length % 1);
         if (countdownl) {
            break;
         }
      } while (countdownl && (!libflipper1.startsWith(`${incidentL.size}`)));
         e_playerP *= rulesS.length;
         rulesS += "2";
         libflipper1 += `${parseInt(`${e_playerP}`)}`;
       let football3: Array<any> = [267, 838, 106];
       let mathn: Array<any> = [171, 967];
      stationR += `${(String.fromCharCode(88,0) == stationR ? incidentL.size : stationR.length)}`;
      break;
   }
   while ((4 & sellY.length) >= 5) {
      sellY.push(2);
      break;
   }
      questicon8 = new Map([[`${awayF}`, componentregistry6.length]]);
      launcherg /= Math.max(2, sellY.length << (Math.min(stationsH.length, 3)));
   for (let k = 0; k < 3; k++) {
       let sportsC: Array<any> = [865, 944, 634];
       let dragp: Array<any> = [104, 418];
       let neonK = String.fromCharCode(118,95,52,54,95,105,110,105,116,105,97,108,105,122,101,100,0);
       let successk = String.fromCharCode(105,115,115,117,101,95,110,95,51,53,0);
      if (5 == (dragp.length << (Math.min(Math.abs(1), 5)))) {
         dragp = [(String.fromCharCode(113,0) == successk ? sportsC.length : successk.length)];
      }
      for (let q = 0; q < 3; q++) {
          let tumbnailF = String.fromCharCode(106,95,57,51,95,120,99,104,97,99,104,97,0);
          let trophyA = 0;
          let downarrowv: Map<any, any> = new Map([[String.fromCharCode(97,101,115,95,52,95,52,49,0),751], [String.fromCharCode(106,95,52,49,95,111,98,106,110,105,100,0),857]]);
         dragp = [downarrowv.size * 2];
         tumbnailF += `${trophyA}`;
         trophyA >>= Math.min(3, tumbnailF.length);
         downarrowv = new Map([[tumbnailF, trophyA]]);
      }
          let fillT: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,116,105,111,110,95,108,95,57,52,0),String.fromCharCode(97,95,55,48,95,114,101,99,101,105,118,101,114,115,0)], [String.fromCharCode(103,95,54,53,95,115,97,110,105,116,105,122,101,100,0),String.fromCharCode(106,95,49,56,95,99,111,110,100,117,99,116,111,114,0)]]);
          let proxy8 = 5;
         dragp.push((String.fromCharCode(85,0) == neonK ? successk.length : neonK.length));
         fillT = new Map([[`${fillT.size}`, proxy8 & fillT.size]]);
         proxy8 |= fillT.size + 3;
      if (successk != String.fromCharCode(120,0)) {
         neonK = `${2 | neonK.length}`;
      }
       let dicek = 1.0;
         sportsC.push(sportsC.length + 3);
      while ((parseInt(`${dicek}`) - successk.length) < 4) {
         dicek *= 1;
         break;
      }
       let memberP = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,109,95,52,0);
       let splashU = true;
       let mode9 = true;
       let latnj = true;
      for (let x = 0; x < 3; x++) {
         sportsC.push(3 - parseInt(`${dicek}`));
      }
         splashU = dragp.length >= neonK.length;
      launcherg *= (String.fromCharCode(107,0) == successk ? componentregistry6.length : successk.length);
   }

      if (delayValue === undefined) {

       let stylesj = String.fromCharCode(120,95,57,50,95,108,111,111,112,102,105,108,116,101,114,0);
          let latnm = 5.0;
          let upgradeN = 5.0;
         stylesj += `${(String.fromCharCode(88,0) == stylesj ? parseInt(`${latnm}`) : stylesj.length)}`;
         latnm *= parseFloat(`${3}`);
         upgradeN -= parseInt(`${upgradeN}`) / (Math.max(parseInt(`${upgradeN}`), 6));
       let login_ = 3;
       let encrypts = 2.0;
       let sportc = 1.0;
      stationR += "1";
   while (!Array.from(questicon8.values()).includes(sellY.length)) {
       let crown_ = String.fromCharCode(116,111,97,115,116,115,95,114,95,56,53,0);
       let referrerc = String.fromCharCode(113,95,57,53,95,115,99,97,110,115,0);
       let libcrashsdkJ = 0;
       let humidityB = 0.0;
       let detaild: Array<any> = [839, 516, 808];
         crown_ += `${detaild.length}`;
      let iconnointernetv = humidityB <= 5315665.0;
      do {
          let iconclosewhitebg8 = false;
          let common4: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,114,116,101,114,95,49,95,51,54,0),697], [String.fromCharCode(102,95,57,95,98,121,114,121,0),619]]);
          let description_lh: Array<any> = [580, 498];
         humidityB /= Math.max(((iconclosewhitebg8 ? 3 : 1)), 4);
         iconclosewhitebg8 = 9 > common4.size;
         common4 = new Map([[`${common4.size}`, 3]]);
         description_lh.push(2 ^ common4.size);
         if (iconnointernetv) {
            break;
         }
      } while ((5 > libcrashsdkJ) && iconnointernetv);
         crown_ = `${libcrashsdkJ ^ referrerc.length}`;
      while (3 < (crown_.length & libcrashsdkJ) || 3 < (libcrashsdkJ & crown_.length)) {
         libcrashsdkJ %= Math.max(libcrashsdkJ, 2);
         break;
      }
       let moonm = String.fromCharCode(109,95,50,52,95,111,110,121,120,100,0);
         moonm = `${parseInt(`${humidityB}`) * 3}`;
          let libturbomodulejsijni4 = 4.0;
          let subbasketballplayerG = String.fromCharCode(112,116,104,114,101,97,100,95,118,95,55,48,0);
         moonm += `${crown_.length}`;
         libturbomodulejsijni4 += parseFloat(`${parseInt(`${libturbomodulejsijni4}`)}`);
         subbasketballplayerG = `${3 >> (Math.min(2, Math.abs(parseInt(`${libturbomodulejsijni4}`))))}`;
         humidityB *= libcrashsdkJ / 1;
      let material6 = 6563390 >= libcrashsdkJ;
      do {
         libcrashsdkJ += parseInt(`${humidityB}`) | 1;
         if (material6) {
            break;
         }
      } while (material6 && ((2 | referrerc.length) < 4 && (libcrashsdkJ | 2) < 3));
      let componentregistry7 = detaild.length <= 9161162;
      do {
          let unreadA = 4.0;
         detaild.push((moonm == String.fromCharCode(104,0) ? moonm.length : detaild.length));
         unreadA *= parseInt(`${unreadA}`);
         if (componentregistry7) {
            break;
         }
      } while (componentregistry7 && ((2 | detaild.length) > 5));
         crown_ = `${detaild.length * libcrashsdkJ}`;
      sellY = [stationsH.length - 1];
      break;
   }
       let subtextx = 3.0;
       let fileda = String.fromCharCode(114,101,103,95,100,95,54,53,0);
       let selld = true;
         selld = (89 > ((!selld ? fileda.length : 89) / (Math.max(fileda.length, 6))));
      for (let g = 0; g < 3; g++) {
         selld = (46 <= (fileda.length + (selld ? fileda.length : 46)));
      }
         subtextx /= Math.max(2, parseFloat(`${3 - parseInt(`${subtextx}`)}`));
      for (let r = 0; r < 2; r++) {
          let searchd = 2.0;
          let placeholderH = String.fromCharCode(106,95,50,56,95,102,105,116,115,0);
          let modelsK: Map<any, any> = new Map([[String.fromCharCode(107,95,56,95,99,97,110,110,111,116,0),String.fromCharCode(116,95,53,51,95,111,112,101,114,97,116,105,111,110,115,0)], [String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,120,95,53,48,0),String.fromCharCode(122,95,57,49,95,108,111,99,97,116,101,0)]]);
         fileda += `${parseInt(`${subtextx}`)}`;
         searchd /= Math.max(1, parseFloat(`${modelsK.size}`));
         placeholderH = `${(placeholderH == String.fromCharCode(110,0) ? placeholderH.length : modelsK.size)}`;
      }
         fileda += `${2 * fileda.length}`;
         fileda = `${2 | fileda.length}`;
          let photoi = String.fromCharCode(100,97,116,97,116,121,112,101,115,95,50,95,50,0);
         fileda = `${photoi.length}`;
      if ((parseInt(`${subtextx}`) - 5) <= 5 && 5.93 <= (4.12 - subtextx)) {
         subtextx -= (parseFloat(`${(selld ? 5 : 5) ^ parseInt(`${subtextx}`)}`));
      }
      let codegenm = String.fromCharCode(50,119,112,52,120,0) == fileda;
      do {
         fileda = `${(fileda.length << (Math.min(1, Math.abs((selld ? 4 : 5)))))}`;
         if (codegenm) {
            break;
         }
      } while ((3 < fileda.length) && codegenm);
      componentregistry6 = `${stationR.length}`;
   while ((3.45 + zhengpianC) >= 5.67 || 3 >= (sellY.length ^ 3)) {
      sellY.push(1);
      break;
   }
   while (2 == awayF) {
      sellY.push(launcherg / (Math.max(stationsH.length, 5)));
      break;
   }
        if (showSlider === 'none' && !paused) {

   while (!stationR.startsWith(gestures)) {
       let downloadp = String.fromCharCode(119,95,51,48,95,109,117,116,97,116,105,110,103,0);
       let libmapbufferjniQ = false;
         downloadp = `${((libmapbufferjniQ ? 2 : 2))}`;
      for (let h = 0; h < 3; h++) {
         downloadp = `${((libmapbufferjniQ ? 5 : 2) + 3)}`;
      }
      for (let x = 0; x < 2; x++) {
         downloadp += "3";
      }
          let auto_hK = String.fromCharCode(116,119,105,116,116,101,114,95,98,95,56,0);
         downloadp = `${(downloadp == String.fromCharCode(57,0) ? (libmapbufferjniQ ? 5 : 4) : downloadp.length)}`;
         auto_hK += `${auto_hK.length + auto_hK.length}`;
         libmapbufferjniQ = !libmapbufferjniQ;
         downloadp = `${downloadp.length}`;
      gestures = `${iconpipexpandu.size / 3}`;
      break;
   }
      stationR = `${gestures.length}`;
       let largeh = String.fromCharCode(110,95,56,51,95,114,97,116,101,99,116,114,108,0);
       let modelsq = 2;
       let package_k79: Array<any> = [69, 413];
      while (1 > modelsq) {
          let pageE = 1;
         package_k79.push(2 ^ package_k79.length);
         pageE ^= pageE * 3;
         break;
      }
         modelsq += largeh.length + 3;
      while ((1 * modelsq) == 3) {
          let imagenetworkerre = 1.0;
          let nativeJ = true;
          let largebrightness7: Array<any> = [949, 116];
          let release_7Y: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,48,95,97,115,115,111,99,105,97,116,101,100,0),746], [String.fromCharCode(103,95,55,50,95,102,114,97,103,0),47], [String.fromCharCode(114,101,119,114,105,116,101,114,95,106,95,56,57,0),635]]);
          let tempnodatagifv = String.fromCharCode(99,95,55,57,95,102,97,115,116,0);
         modelsq /= Math.max(2 + largeh.length, 4);
         imagenetworkerre *= 3;
         nativeJ = tempnodatagifv.startsWith(`${imagenetworkerre}`);
         largebrightness7 = [((nativeJ ? 3 : 2) | parseInt(`${imagenetworkerre}`))];
         release_7Y.set(`${nativeJ}`, (largebrightness7.length / (Math.max(3, (nativeJ ? 5 : 2)))));
         tempnodatagifv += `${parseInt(`${imagenetworkerre}`)}`;
         break;
      }
          let matchP = 5;
          let downloadingO: Array<any> = [318, 632, 896];
         largeh = `${downloadingO.length >> (Math.min(Math.abs(1), 3))}`;
         matchP &= 3;
         downloadingO.push(matchP);
      for (let l = 0; l < 3; l++) {
         largeh += "3";
      }
      let showo = 5437753 >= modelsq;
      do {
         modelsq %= Math.max(1, package_k79.length);
         if (showo) {
            break;
         }
      } while ((3 <= modelsq) && showo);
      while (package_k79.length == largeh.length) {
          let libruntimeexecutorV = 2.0;
          let loginsuccessV = String.fromCharCode(115,117,98,116,121,112,101,95,108,95,57,51,0);
         largeh += `${3 + largeh.length}`;
         libruntimeexecutorV += parseInt(`${libruntimeexecutorV}`) % (Math.max(10, loginsuccessV.length));
         loginsuccessV = `${loginsuccessV.length + 3}`;
         break;
      }
          let stylep = String.fromCharCode(117,110,115,105,103,110,101,100,95,116,95,49,54,0);
         modelsq <<= Math.min(1, Math.abs((largeh == String.fromCharCode(57,0) ? largeh.length : modelsq)));
         stylep += `${stylep.length | stylep.length}`;
         package_k79 = [largeh.length];
      gestures = `${largeh.length * package_k79.length}`;
      questicon8.set(componentregistry6, componentregistry6.length);
      libfbu = gestures.length == 17 || componentregistry6.length == 17;
          setShowControls(false)
        }
      } else {

      stationsH += `${sellY.length}`;
   while (5 < (3 & awayF) || 1 < (3 & stationR.length)) {
      stationR = `${questicon8.size}`;
      break;
   }
   let inviteB = zhengpianC <= 9784017.0;
   do {
      zhengpianC -= parseFloat(`${gestures.length / 2}`);
      if (inviteB) {
         break;
      }
   } while ((4.19 <= (2.10 + zhengpianC) || (iconpipexpandu.size >> (Math.min(Math.abs(3), 4))) <= 4) && inviteB);
      libfbu = String.fromCharCode(109,0) == gestures;
      launcherg %= Math.max(4, sellY.length);
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let d_managerr = String.fromCharCode(122,95,56,52,95,100,110,120,104,100,100,97,116,97,0);
    let nativeG = String.fromCharCode(100,101,116,101,99,116,111,114,95,118,95,56,49,0);
    let whitea: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,98,105,116,95,49,95,52,51,0),String.fromCharCode(100,95,57,50,95,103,101,116,116,101,114,0)], [String.fromCharCode(121,95,49,52,95,116,111,111,98,105,103,0),String.fromCharCode(116,105,116,108,101,95,49,95,51,49,0)], [String.fromCharCode(117,110,109,97,112,95,115,95,54,52,0),String.fromCharCode(107,95,49,50,95,98,108,117,114,114,97,98,108,101,0)]]);
    let libreact5 = 1.0;
    let chinah: Array<any> = [149, 640];
    let reactnavigationh = String.fromCharCode(99,102,104,100,95,56,95,53,56,0);
    let lightw = 4;
    let profileframeg: Array<any> = [String.fromCharCode(97,110,110,111,117,110,99,101,95,54,95,50,53,0), String.fromCharCode(120,95,57,51,95,112,114,101,100,101,99,101,115,115,111,114,0)];
    let constantsZ = false;
    let umengP = String.fromCharCode(122,95,52,95,110,101,101,100,101,100,0);
    let sentryD = String.fromCharCode(103,95,55,55,95,115,112,105,108,108,115,105,122,101,0);
    let macau6: Map<any, any> = new Map([[String.fromCharCode(122,111,109,98,105,101,95,49,95,53,57,0),true ], [String.fromCharCode(102,102,116,112,97,99,107,95,109,95,56,50,0),false ]]);
    let predictionwin1 = String.fromCharCode(114,115,112,95,121,95,49,50,0);
    let hongkongR = String.fromCharCode(112,97,99,107,97,103,101,100,95,99,95,56,57,0);
    let activea = true;
   for (let a = 0; a < 2; a++) {
      constantsZ = reactnavigationh.startsWith(`${lightw}`);
   }
   for (let x = 0; x < 1; x++) {
       let pingg: Array<any> = [String.fromCharCode(97,99,101,115,115,111,114,121,95,108,95,55,54,0), String.fromCharCode(101,95,56,55,95,115,119,105,114,108,0)];
       let libreactperfloggerjnig = 4.0;
         libreactperfloggerjnig /= Math.max(3, parseFloat(`${parseInt(`${libreactperfloggerjnig}`) + 2}`));
         libreactperfloggerjnig /= Math.max(parseFloat(`${parseInt(`${libreactperfloggerjnig}`) << (Math.min(4, Math.abs(1)))}`), 3);
         libreactperfloggerjnig -= parseFloat(`${parseInt(`${libreactperfloggerjnig}`)}`);
          let graphicsn = 5.0;
         libreactperfloggerjnig -= parseFloat(`${1 & parseInt(`${graphicsn}`)}`);
      if ((parseInt(`${libreactperfloggerjnig}`) - pingg.length) >= 3 || (parseInt(`${libreactperfloggerjnig}`) - pingg.length) >= 3) {
          let libreactpc = String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,95,55,95,49,53,0);
          let countdownI = String.fromCharCode(109,98,117,102,115,95,100,95,53,51,0);
         libreactperfloggerjnig -= (parseFloat(`${String.fromCharCode(84,0) == countdownI ? countdownI.length : parseInt(`${libreactperfloggerjnig}`)}`));
         libreactpc += `${libreactpc.length}`;
      }
      while (3 < (parseInt(`${libreactperfloggerjnig}`) / (Math.max(1, pingg.length)))) {
          let codegenQ: Array<any> = [727, 906, 844];
          let sharedC: Array<any> = [92, 366, 975];
          let matchesb = 4;
          let containerh = String.fromCharCode(116,95,50,48,95,108,105,98,101,114,116,121,0);
          let membershipG = 2.0;
         pingg = [parseInt(`${membershipG}`)];
         codegenQ = [containerh.length + sharedC.length];
         sharedC = [2];
         matchesb %= Math.max(3, 4);
         containerh = `${sharedC.length ^ 1}`;
         membershipG -= parseFloat(`${3}`);
         break;
      }
      chinah = [lightw * 2];
   }
      chinah.push(parseInt(`${libreact5}`) + 1);
   while (d_managerr != String.fromCharCode(112,0)) {
      reactnavigationh += `${1 ^ whitea.size}`;
      break;
   }
   for (let t = 0; t < 3; t++) {
       let floating_ = String.fromCharCode(99,97,112,115,95,112,95,52,53,0);
       let redgoal9 = String.fromCharCode(118,95,55,53,95,108,105,110,103,101,114,0);
       let smallY = String.fromCharCode(111,95,49,52,95,111,110,110,101,99,116,105,111,110,0);
       let reactnativeultimatelistviewy: Map<any, any> = new Map([[String.fromCharCode(111,95,57,48,95,97,105,114,105,110,103,0),42], [String.fromCharCode(111,98,106,95,120,95,57,0),686], [String.fromCharCode(114,95,53,95,97,115,115,101,114,116,105,111,110,0),288]]);
          let debugS = String.fromCharCode(97,95,53,49,95,105,110,118,101,114,115,101,100,0);
          let executorg = 3.0;
         redgoal9 = `${floating_.length & debugS.length}`;
         debugS += `${parseInt(`${executorg}`) ^ 2}`;
         executorg /= Math.max(3, parseInt(`${executorg}`) & 3);
      if ((reactnativeultimatelistviewy.size % (Math.max(smallY.length, 10))) >= 1) {
          let areak = 3.0;
          let libaneB = 4;
          let reviewl = String.fromCharCode(111,112,116,105,111,110,97,108,95,54,95,51,0);
         smallY = `${2 - libaneB}`;
         areak /= Math.max(4, parseFloat(`${1 | reviewl.length}`));
         libaneB >>= Math.min(5, Math.abs((String.fromCharCode(102,0) == reviewl ? parseInt(`${areak}`) : reviewl.length)));
      }
       let libmapbufferjni3 = String.fromCharCode(121,95,55,51,95,116,101,120,101,108,0);
         smallY = `${2 & floating_.length}`;
         reactnativeultimatelistviewy.set(redgoal9, 1 << (Math.min(1, smallY.length)));
      let producth = 5706594 >= reactnativeultimatelistviewy.size;
      do {
         reactnativeultimatelistviewy.set(libmapbufferjni3, 1 + libmapbufferjni3.length);
         if (producth) {
            break;
         }
      } while (producth && (reactnativeultimatelistviewy.size > libmapbufferjni3.length));
       let libfabricjni0 = String.fromCharCode(116,111,109,98,117,102,95,52,95,52,50,0);
         libmapbufferjni3 = `${smallY.length}`;
         libfabricjni0 += `${smallY.length}`;
          let projectH = String.fromCharCode(97,95,54,53,95,97,115,107,0);
         libmapbufferjni3 = `${(String.fromCharCode(87,0) == floating_ ? floating_.length : redgoal9.length)}`;
         projectH = `${(String.fromCharCode(50,0) == projectH ? projectH.length : projectH.length)}`;
         smallY += `${2 - libfabricjni0.length}`;
      let shrinkr = smallY.length >= 5042127;
      do {
         smallY += `${libfabricjni0.length}`;
         if (shrinkr) {
            break;
         }
      } while (shrinkr && (!smallY.includes(`${libfabricjni0.length}`)));
      chinah.push(((constantsZ ? 1 : 1) | whitea.size));
   }
      d_managerr += `${(nativeG == String.fromCharCode(52,0) ? parseInt(`${libreact5}`) : nativeG.length)}`;

    if (isLocked) {

   if (!reactnavigationh.includes(`${lightw}`)) {
      lightw += 1 << (Math.min(Math.abs(parseInt(`${libreact5}`)), 1));
   }
   if (3 > (1 & whitea.size)) {
       let shoot6 = String.fromCharCode(111,95,53,52,95,115,117,98,106,101,99,116,105,118,101,115,0);
       let recommendationh = 3.0;
       let emojir = 1.0;
          let setting3: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,116,105,118,101,108,121,95,105,95,57,53,0),972], [String.fromCharCode(101,118,97,108,95,111,95,56,49,0),390]]);
          let successG = String.fromCharCode(112,95,51,49,95,114,101,112,114,101,115,101,110,116,105,110,103,0);
         emojir += parseInt(`${emojir}`);
         setting3 = new Map([[`${setting3.size}`, 1 - successG.length]]);
         successG += `${setting3.size & 3}`;
      if ((1.18 * recommendationh) < 2.32) {
         recommendationh += 3;
      }
      constantsZ = umengP.length >= 31;
      shoot6 += `${shoot6.length ^ shoot6.length}`;
   }
   for (let q = 0; q < 3; q++) {
      umengP = "1";
   }
   while ((lightw + whitea.size) >= 1 && (1 + lightw) >= 1) {
       let privatechatbgy = false;
       let subtextl = 1;
         privatechatbgy = subtextl >= 31 || !privatechatbgy;
      if (privatechatbgy) {
         privatechatbgy = privatechatbgy || 65 > subtextl;
      }
       let libavutil_ = String.fromCharCode(103,101,116,108,97,121,111,117,116,95,112,95,51,50,0);
      while (libavutil_.length >= subtextl) {
         subtextl <<= Math.min(3, parseInt(`${Math.abs(((privatechatbgy ? 2 : 3) >> (Math.min(Math.abs(1), 1))))}`));
         break;
      }
         subtextl -= subtextl;
         subtextl += 1;
      lightw -= 2 | nativeG.length;
      break;
   }
      sentryD += "1";
   let hiadj = 9182626 >= profileframeg.length;
   do {
      profileframeg = [2];
      if (hiadj) {
         break;
      }
   } while (hiadj && (!sentryD.includes(`${profileframeg.length}`)));
      

      reactnavigationh = `${3 >> (Math.min(4, d_managerr.length))}`;
       let r_manager5 = 3.0;
      while (2.2 <= r_manager5) {
         r_manager5 *= parseFloat(`${parseInt(`${r_manager5}`) >> (Math.min(Math.abs(parseInt(`${r_manager5}`)), 3))}`);
         break;
      }
       let catagoryU = 1;
       let libruntimeexecutore = 3;
      if (2.14 <= r_manager5) {
         r_manager5 += parseFloat(`${catagoryU}`);
      }
      umengP += `${(String.fromCharCode(53,0) == nativeG ? d_managerr.length : nativeG.length)}`;
   let gemfileA = reactnavigationh.length <= 7235771;
   do {
       let libfbb: Array<any> = [673, 817, 162];
          let uploadD = String.fromCharCode(115,105,122,101,114,95,105,95,50,51,0);
          let annerU = true;
          let iconedity = 3;
         libfbb.push(uploadD.length);
         uploadD += `${((annerU ? 1 : 4) + iconedity)}`;
         annerU = !annerU;
         iconedity *= 3 / (Math.max(iconedity, 10));
      for (let i = 0; i < 1; i++) {
         libfbb.push(libfbb.length);
      }
      for (let o = 0; o < 1; o++) {
         libfbb.push(libfbb.length);
      }
      reactnavigationh += `${whitea.size ^ profileframeg.length}`;
      if (gemfileA) {
         break;
      }
   } while ((reactnavigationh.length < 2) && gemfileA);
      constantsZ = 37 >= chinah.length && String.fromCharCode(52,0) == reactnavigationh;
      sentryD = `${(String.fromCharCode(83,0) == nativeG ? (constantsZ ? 4 : 1) : nativeG.length)}`;
      reactnavigationh = `${whitea.size / (Math.max(1, 3))}`;
      setIsLocked(false);
    } else {

      reactnavigationh += `${macau6.size}`;
   for (let g = 0; g < 2; g++) {
       let halfj: Map<any, any> = new Map([[String.fromCharCode(115,95,52,49,95,109,105,115,117,115,101,0),String.fromCharCode(119,97,108,108,97,112,101,114,115,95,102,95,52,56,0)], [String.fromCharCode(103,95,52,48,95,114,101,99,116,0),String.fromCharCode(109,97,120,114,101,97,100,101,114,115,95,121,95,49,54,0)]]);
       let iconbackwhitey: Array<any> = [String.fromCharCode(99,104,101,118,114,111,110,95,48,95,52,52,0), String.fromCharCode(105,95,52,51,95,103,105,102,0)];
       let dacccfaabfbcbadeebddcabacdffdbJ: Array<any> = [419, 494];
       let commentV = 3.0;
       let iconpipexpand2 = String.fromCharCode(115,95,54,95,112,115,104,0);
      if (commentV == 5.32) {
         commentV -= 1 & dacccfaabfbcbadeebddcabacdffdbJ.length;
      }
       let libhermess = String.fromCharCode(116,95,52,54,95,102,111,114,109,97,116,116,105,110,103,0);
       let stationsI: Map<any, any> = new Map([[String.fromCharCode(113,95,51,54,95,114,101,97,114,114,97,110,103,101,0),78], [String.fromCharCode(121,95,57,56,95,102,102,118,108,0),118]]);
       let iconnewssharew: Map<any, any> = new Map([[String.fromCharCode(97,95,57,51,95,114,101,102,112,108,97,110,101,0),String.fromCharCode(115,95,55,57,95,103,101,110,101,115,105,115,0)], [String.fromCharCode(100,95,56,54,95,116,102,114,102,0),String.fromCharCode(114,95,49,51,95,99,100,97,116,97,0)]]);
         iconbackwhitey = [3];
      for (let g = 0; g < 1; g++) {
         halfj = new Map([[`${halfj.size}`, libhermess.length ^ 1]]);
      }
         libhermess += `${libhermess.length}`;
       let ewardedl = 0.0;
       let backiconj = 1.0;
      let placementw = 8518451 >= dacccfaabfbcbadeebddcabacdffdbJ.length;
      do {
         dacccfaabfbcbadeebddcabacdffdbJ = [iconnewssharew.size];
         if (placementw) {
            break;
         }
      } while ((Array.from(halfj.keys()).includes(`${dacccfaabfbcbadeebddcabacdffdbJ.length}`)) && placementw);
      let proxyM = ewardedl >= 8087158.0;
      do {
          let default_ae = String.fromCharCode(115,110,105,112,112,101,116,95,56,95,49,57,0);
          let viewsl = String.fromCharCode(99,114,111,115,115,102,97,100,105,110,103,95,115,95,49,51,0);
         ewardedl += iconpipexpand2.length;
         default_ae += `${viewsl.length << (Math.min(Math.abs(2), 3))}`;
         viewsl += `${(viewsl == String.fromCharCode(79,0) ? viewsl.length : default_ae.length)}`;
         if (proxyM) {
            break;
         }
      } while (((iconpipexpand2.length / (Math.max(9, ewardedl))) < 3.5 && (parseInt(`${ewardedl}`) / 5) < 3) && proxyM);
         halfj = new Map([[`${stationsI.size}`, stationsI.size % 1]]);
         stationsI = new Map([[`${iconnewssharew.size}`, parseInt(`${backiconj}`)]]);
          let blackC = true;
          let actionG = 5.0;
         halfj = new Map([[`${actionG}`, parseInt(`${actionG}`)]]);
         blackC = (!blackC ? !blackC : blackC);
      while (libhermess == String.fromCharCode(98,0)) {
         iconpipexpand2 = "3";
         break;
      }
      let libjsinspectorf = 8696089 >= halfj.size;
      do {
         halfj = new Map([[`${halfj.size}`, 2]]);
         if (libjsinspectorf) {
            break;
         }
      } while ((halfj.size > iconbackwhitey.length) && libjsinspectorf);
          let videovarL = false;
          let greyarrowupA = 4.0;
         iconbackwhitey.push(iconpipexpand2.length + halfj.size);
         videovarL = greyarrowupA > 10.46;
         greyarrowupA -= parseInt(`${greyarrowupA}`) ^ 3;
      nativeG = `${2 & lightw}`;
   }
      umengP += `${parseInt(`${libreact5}`) + 1}`;
   let nativemodule_ = 9627835 >= chinah.length;
   do {
      chinah.push(umengP.length + sentryD.length);
      if (nativemodule_) {
         break;
      }
   } while (nativemodule_ && ((chinah.length % 2) == 2 || (2 % (Math.max(10, d_managerr.length))) == 3));
   while (umengP != sentryD) {
      sentryD += `${sentryD.length - 1}`;
      break;
   }
      predictionwin1 += "3";
      

      macau6 = new Map([[`${whitea.size}`, lightw]]);
   for (let r = 0; r < 3; r++) {
      macau6 = new Map([[`${chinah.length}`, parseInt(`${libreact5}`)]]);
   }
      profileframeg.push(2 << (Math.min(Math.abs(parseInt(`${libreact5}`)), 5)));
      whitea = new Map([[`${constantsZ}`, ((constantsZ ? 1 : 3) * nativeG.length)]]);
       let vipsportc: Array<any> = [277, 987, 687];
      if (2 <= (1 & vipsportc.length) || 1 <= (vipsportc.length & vipsportc.length)) {
          let bingh: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,95,98,95,50,53,0),552], [String.fromCharCode(104,101,97,114,116,115,95,53,95,53,57,0),634], [String.fromCharCode(114,101,99,111,109,109,101,110,100,95,110,95,55,0),129]]);
          let yingm = true;
          let orangeclockR = String.fromCharCode(99,95,49,49,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0);
          let libflipperd = String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,95,108,95,56,57,0);
          let plusE = String.fromCharCode(107,95,55,48,95,99,111,100,105,110,103,0);
         vipsportc.push(bingh.size ^ plusE.length);
         bingh = new Map([[orangeclockR, 3]]);
         yingm = !libflipperd.includes(`${yingm}`);
         orangeclockR += `${orangeclockR.length}`;
         libflipperd = `${(String.fromCharCode(83,0) == orangeclockR ? (yingm ? 1 : 4) : orangeclockR.length)}`;
         plusE += `${orangeclockR.length - 3}`;
      }
      while (2 >= (vipsportc.length & 4)) {
          let mbbanner8 = String.fromCharCode(97,95,51,50,95,97,110,115,119,101,114,0);
          let toponN: Map<any, any> = new Map([[String.fromCharCode(117,95,49,55,95,109,101,109,110,0),false ], [String.fromCharCode(102,95,53,51,95,115,113,108,0),false ]]);
          let componentE = 1.0;
         vipsportc = [vipsportc.length * 2];
         mbbanner8 += `${parseInt(`${componentE}`) * toponN.size}`;
         toponN = new Map([[`${toponN.size}`, 3]]);
         componentE += parseFloat(`${parseInt(`${componentE}`) * 3}`);
         break;
      }
         vipsportc = [vipsportc.length << (Math.min(5, vipsportc.length))];
      nativeG = `${macau6.size | umengP.length}`;
       let proxyI = String.fromCharCode(110,111,116,105,102,105,99,97,116,111,110,115,95,105,95,55,51,0);
      while (proxyI != String.fromCharCode(110,0) && proxyI != String.fromCharCode(113,0)) {
          let userw = 0;
          let launcherg = 4.0;
          let profilet = true;
          let floatingl = true;
          let mintegralg = 3.0;
         proxyI = "2";
         userw ^= ((floatingl ? 3 : 1) & userw);
         launcherg += parseFloat(`${parseInt(`${mintegralg}`)}`);
         profilet = !profilet;
         floatingl = userw >= 96;
         mintegralg += 2 ^ userw;
         break;
      }
       let predictionactiveT: Map<any, any> = new Map([[String.fromCharCode(108,117,109,105,110,97,110,99,101,95,49,95,53,54,0),String.fromCharCode(108,105,110,101,115,105,122,101,95,118,95,52,51,0)], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,100,95,56,57,0),String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,95,52,95,56,55,0)], [String.fromCharCode(109,95,52,48,95,98,101,110,105,103,110,0),String.fromCharCode(115,112,97,114,115,101,95,55,95,55,52,0)]]);
         proxyI += `${proxyI.length}`;
      reactnavigationh = `${macau6.size}`;
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
                      numberOfLines={1}>
                      {headerTitle}
                    </Text>
                  </TouchableOpacity>
                  {
                    videoType === 'vod' && <RectButton
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
