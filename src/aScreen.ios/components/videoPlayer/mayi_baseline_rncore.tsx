import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControls from './mayi_share';
import BottomControls from './mayi_prediction_material';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/mayi_issub_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/mayi_over_policy';
import { mayi_ReddownarrowItem, mayi_Const, mayi_EmptyGradle } from '@type/mayi_green';
import VodCombinedGesture from '../gestures/vod/mayi_save_icontransferclub';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/collectionGraphicsLibnms.svg';
import ProjectIcon from '@static/images/phoneshareHomeplayer.svg'
import VodListVertical from '../vod/mayi_package';
import GesturesGuide from '../gestures/vod/mayi_pagination_scrollview';
import VodLiveStationListVertical from '../vod/mayi_basketballmatchdetailbg';
import FastImage from '../common/mayi_slider';

type mayi_GoogleViews = {
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
  episodes?: mayi_Const
  movieList?: mayi_EmptyGradle[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: mayi_ReddownarrowItem[],
  isFetchingRecommendedMovies?: boolean
};

type mayi_Textinput = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<mayi_Textinput, mayi_GoogleViews>(({
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
       let relatedb = String.fromCharCode(116,101,115,116,98,114,105,100,103,101,95,120,95,57,55,0);
    let gifgoalbgS = 1;
    let redscoreballP = false;
    let homeiconT: Map<any, any> = new Map([[String.fromCharCode(115,116,97,99,107,95,102,95,50,57,0),716], [String.fromCharCode(101,95,52,57,95,118,105,100,101,111,99,111,100,101,99,0),257]]);
    let tickd = 5;
    let yellowscoreballM = String.fromCharCode(107,95,56,49,95,104,109,97,99,108,105,115,116,0);
    let videojsC = String.fromCharCode(102,95,52,55,95,105,110,100,101,120,101,115,0);
    let umengX = 0.0;
    let rankJ = String.fromCharCode(118,95,50,56,95,114,109,115,116,114,101,97,109,0);
    let dragA = 0.0;
    let smallJ = String.fromCharCode(102,119,104,116,120,95,51,95,49,0);
    let iconlogoutb = String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,122,95,52,53,0);
    let libavfiltert = true;
   for (let l = 0; l < 1; l++) {
      redscoreballP = tickd == videojsC.length;
   }
   let referrerF = dragA >= 9293003.0;
   do {
      dragA *= parseFloat(`${1}`);
      if (referrerF) {
         break;
      }
   } while (((4 - umengX) == 5.9) && referrerF);
   let libavdevicet = umengX <= 7052536.0;
   do {
      umengX -= parseInt(`${umengX}`) >> (Math.min(Math.abs(1), 5));
      if (libavdevicet) {
         break;
      }
   } while (libavdevicet && ((4.62 * umengX) < 4.42 && 3 < (relatedb.length * parseInt(`${umengX}`))));
   while ((rankJ.length + parseInt(`${dragA}`)) < 2 || 1.67 < (dragA + parseFloat(`${rankJ.length}`))) {
      rankJ += `${smallJ.length + homeiconT.size}`;
      break;
   }
   while (!yellowscoreballM.includes(videojsC)) {
       let libreactY: Array<any> = [572, 853, 401];
       let moonx = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,118,95,53,0);
       let sourceF = String.fromCharCode(111,95,50,48,95,115,107,101,119,0);
         moonx = `${moonx.length | libreactY.length}`;
      let templateprocessorf = 9195567 <= libreactY.length;
      do {
         libreactY.push(moonx.length);
         if (templateprocessorf) {
            break;
         }
      } while (templateprocessorf && (3 < (1 >> (Math.min(3, libreactY.length)))));
      videojsC = `${libreactY.length}`;
      break;
   }
      iconlogoutb += `${(smallJ == String.fromCharCode(72,0) ? smallJ.length : (redscoreballP ? 5 : 3))}`;
      videojsC = `${parseInt(`${dragA}`) << (Math.min(yellowscoreballM.length, 5))}`;
   if (smallJ == String.fromCharCode(82,0) || 1 >= rankJ.length) {
       let gemfilev = true;
       let nalyticsd = String.fromCharCode(122,95,53,57,95,115,112,114,101,97,100,0);
          let gpayB: Array<any> = [String.fromCharCode(105,95,51,52,95,99,116,120,0), String.fromCharCode(103,114,97,116,105,99,117,108,101,95,103,95,56,49,0)];
          let uimanagerg: Array<any> = [155, 582];
         gemfilev = gpayB.includes(gemfilev);
         gpayB = [uimanagerg.length];
         uimanagerg.push(uimanagerg.length << (Math.min(Math.abs(3), 4)));
      while (gemfilev) {
          let weatherD: Map<any, any> = new Map([[String.fromCharCode(112,117,114,103,101,95,122,95,52,53,0),915], [String.fromCharCode(99,97,108,101,110,100,97,114,95,98,95,51,48,0),701], [String.fromCharCode(109,95,56,51,95,115,111,102,97,0),122]]);
          let gpay_ = 1.0;
         nalyticsd = `${nalyticsd.length}`;
         weatherD.set(`${gpay_}`, weatherD.size * 2);
         gpay_ += 1 + weatherD.size;
         break;
      }
          let mappingz = false;
          let libhermes3 = String.fromCharCode(100,95,54,53,0);
          let imagesH = true;
         nalyticsd = `${libhermes3.length}`;
         mappingz = !mappingz && !imagesH;
         libhermes3 = `${((mappingz ? 5 : 3))}`;
      if (gemfilev && 4 >= nalyticsd.length) {
         gemfilev = nalyticsd.length >= 82;
      }
       let dice0 = String.fromCharCode(109,111,109,101,110,116,95,98,95,48,0);
       let moviesV = String.fromCharCode(121,95,50,50,95,102,115,105,122,101,0);
      if (nalyticsd.endsWith(dice0)) {
         dice0 += "2";
      }
      rankJ += `${videojsC.length / (Math.max(1, 6))}`;
   }
       let tempnodatagifa = String.fromCharCode(112,101,101,114,115,95,121,95,53,49,0);
       let privatechatbg5 = String.fromCharCode(117,95,52,52,95,119,104,101,101,108,0);
      for (let s = 0; s < 1; s++) {
         tempnodatagifa = "2";
      }
      if (!tempnodatagifa.endsWith(privatechatbg5)) {
         privatechatbg5 = `${privatechatbg5.length}`;
      }
         tempnodatagifa = `${tempnodatagifa.length}`;
         tempnodatagifa += `${privatechatbg5.length}`;
      if (2 >= privatechatbg5.length || tempnodatagifa.length >= 2) {
          let iconarrowrightl = String.fromCharCode(119,115,97,117,100,95,100,95,54,53,0);
          let filledY = String.fromCharCode(110,101,103,97,116,105,118,101,95,105,95,55,49,0);
          let bellm: Map<any, any> = new Map([[String.fromCharCode(105,95,54,54,95,99,97,114,100,97,110,111,0),String.fromCharCode(104,119,114,97,110,100,95,111,95,55,50,0)], [String.fromCharCode(119,101,98,118,116,116,95,97,95,56,52,0),String.fromCharCode(122,95,51,54,95,100,105,102,102,105,99,117,108,116,121,0)]]);
          let h_playerF = 3.0;
         privatechatbg5 = `${privatechatbg5.length}`;
         iconarrowrightl += "3";
         filledY += `${iconarrowrightl.length >> (Math.min(Math.abs(3), 3))}`;
         bellm = new Map([[iconarrowrightl, iconarrowrightl.length << (Math.min(Math.abs(1), 5))]]);
         h_playerF -= parseFloat(`${parseInt(`${h_playerF}`) << (Math.min(Math.abs(bellm.size), 5))}`);
      }
      while (!tempnodatagifa.startsWith(privatechatbg5)) {
          let footballtrophyb = 4;
          let dycreator1: Array<any> = [String.fromCharCode(121,95,55,53,95,106,101,114,114,111,114,0), String.fromCharCode(97,97,115,99,95,51,95,57,49,0)];
         tempnodatagifa = `${(String.fromCharCode(97,0) == privatechatbg5 ? tempnodatagifa.length : privatechatbg5.length)}`;
         footballtrophyb /= Math.max(dycreator1.length, 2);
         dycreator1 = [dycreator1.length];
         break;
      }
      umengX *= smallJ.length;
       let eighteenb = String.fromCharCode(111,112,101,110,109,112,116,95,99,95,57,49,0);
      let resendQ = eighteenb == String.fromCharCode(116,101,120,0);
      do {
         eighteenb += `${1 * eighteenb.length}`;
         if (resendQ) {
            break;
         }
      } while ((eighteenb != String.fromCharCode(84,0)) && resendQ);
      if (eighteenb == String.fromCharCode(90,0)) {
         eighteenb += `${eighteenb.length}`;
      }
      if (1 == eighteenb.length) {
         eighteenb += `${2 & eighteenb.length}`;
      }
      rankJ += `${(String.fromCharCode(100,0) == rankJ ? tickd : rankJ.length)}`;
   if ((dragA + 5.21) >= 5.10 || (5.21 + dragA) >= 2.54) {
      dragA += parseFloat(`${iconlogoutb.length}`);
   }
      tickd *= (yellowscoreballM == String.fromCharCode(80,0) ? smallJ.length : yellowscoreballM.length);
       let blackn: Map<any, any> = new Map([[String.fromCharCode(112,97,115,116,101,108,95,54,95,55,50,0),false ], [String.fromCharCode(120,95,49,0),true ]]);
       let awayt: Map<any, any> = new Map([[String.fromCharCode(106,95,53,49,95,112,97,115,99,97,108,0),String.fromCharCode(106,95,55,55,95,114,101,112,101,97,116,101,100,108,121,0)], [String.fromCharCode(107,95,49,51,95,116,98,109,108,0),String.fromCharCode(118,95,49,55,95,112,97,114,97,0)]]);
       let iconpipexpandU: Array<any> = [309, 910];
          let fast9 = String.fromCharCode(115,116,114,105,110,103,95,57,95,51,55,0);
          let thailandf = 1;
          let iconviewergifd: Map<any, any> = new Map([[String.fromCharCode(114,111,119,107,101,121,95,107,95,51,56,0),749], [String.fromCharCode(101,95,51,57,95,114,111,119,107,101,121,0),718], [String.fromCharCode(104,95,51,49,95,119,101,101,107,100,97,121,0),189]]);
         awayt = new Map([[`${iconviewergifd.size}`, iconviewergifd.size ^ 3]]);
         fast9 += `${thailandf * fast9.length}`;
         thailandf >>= Math.min(Math.abs(2 ^ thailandf), 3);
         blackn.set(`${iconpipexpandU.length}`, 3 / (Math.max(7, iconpipexpandU.length)));
         blackn.set(`${iconpipexpandU.length}`, blackn.size * 2);
      for (let x = 0; x < 1; x++) {
          let taiwanO = true;
          let submitT = String.fromCharCode(102,114,97,109,101,114,97,116,101,95,106,95,57,56,0);
          let projectJ = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,95,98,95,53,51,0);
          let yellowtoredf = String.fromCharCode(97,108,112,105,110,101,95,53,95,54,51,0);
          let confirmationp = String.fromCharCode(109,111,115,97,105,99,95,99,95,55,49,0);
         blackn = new Map([[`${awayt.size}`, awayt.size ^ iconpipexpandU.length]]);
         taiwanO = (88 == ((taiwanO ? 88 : submitT.length) << (Math.min(submitT.length, 5))));
         projectJ += `${(2 >> (Math.min(5, Math.abs((taiwanO ? 3 : 3)))))}`;
         yellowtoredf += `${submitT.length}`;
         confirmationp += `${submitT.length}`;
      }
      let otherC = awayt.size <= 8290711;
      do {
         awayt = new Map([[`${blackn.size}`, 1 - blackn.size]]);
         if (otherC) {
            break;
         }
      } while (otherC && ((1 | awayt.size) >= 3));
      while ((blackn.size * iconpipexpandU.length) >= 5 || 5 >= (iconpipexpandU.length * blackn.size)) {
         iconpipexpandU = [blackn.size];
         break;
      }
         awayt.set(`${iconpipexpandU.length}`, iconpipexpandU.length | blackn.size);
         awayt.set(`${iconpipexpandU.length}`, 1);
      for (let m = 0; m < 2; m++) {
          let nodeN: Map<any, any> = new Map([[String.fromCharCode(116,105,101,114,115,95,113,95,52,55,0),635], [String.fromCharCode(110,111,114,109,97,108,105,122,101,95,53,95,53,56,0),428], [String.fromCharCode(122,95,51,48,95,115,105,109,105,108,97,114,0),888]]);
          let pagex = 2.0;
          let paginationQ: Array<any> = [String.fromCharCode(115,105,102,102,95,114,95,55,51,0), String.fromCharCode(99,98,112,104,105,95,122,95,53,0), String.fromCharCode(115,116,114,99,97,116,95,113,95,51,53,0)];
         blackn = new Map([[`${nodeN.size}`, iconpipexpandU.length * 1]]);
         nodeN.set(`${pagex}`, parseInt(`${pagex}`));
         paginationQ.push(parseInt(`${pagex}`));
      }
      smallJ = `${smallJ.length}`;
   for (let r = 0; r < 2; r++) {
      smallJ = "3";
   }
      umengX /= Math.max((String.fromCharCode(98,0) == videojsC ? yellowscoreballM.length : videojsC.length), 4);
      redscoreballP = tickd == 61;
   if (smallJ.length < yellowscoreballM.length) {
      yellowscoreballM += `${(String.fromCharCode(108,0) == rankJ ? (redscoreballP ? 3 : 5) : rankJ.length)}`;
   }
      videojsC = "2";
       let signinupO = String.fromCharCode(108,95,56,55,95,110,111,116,105,102,105,101,114,0);
       let rocketB = 5.0;
       let fastR = false;
      while (signinupO.startsWith(`${rocketB}`)) {
         rocketB *= parseFloat(`${2 - parseInt(`${rocketB}`)}`);
         break;
      }
       let predictiondefaultT = String.fromCharCode(119,114,105,116,101,108,111,99,107,95,106,95,56,57,0);
       let libavdevice4 = false;
       let subtextr = false;
         predictiondefaultT += `${parseInt(`${rocketB}`) % (Math.max(predictiondefaultT.length, 1))}`;
      for (let j = 0; j < 2; j++) {
          let baiduu = 0;
          let profileactive1 = 3;
          let libavformatF = String.fromCharCode(106,95,51,95,100,111,119,110,108,105,110,107,0);
          let temperatureu = 0.0;
         subtextr = libavformatF.endsWith(`${baiduu}`);
         baiduu &= parseInt(`${temperatureu}`) | 2;
         profileactive1 <<= Math.min(1, Math.abs(parseInt(`${temperatureu}`) * profileactive1));
         libavformatF += `${profileactive1 % (Math.max(parseInt(`${temperatureu}`), 1))}`;
      }
       let bannerk = String.fromCharCode(122,95,52,53,95,109,101,109,109,103,114,0);
       let sigmobV = String.fromCharCode(110,117,109,101,114,105,102,121,95,107,95,52,48,0);
      if (3 < bannerk.length) {
         bannerk = `${bannerk.length / (Math.max(3, parseInt(`${rocketB}`)))}`;
      }
      while (bannerk.length <= signinupO.length) {
         signinupO = `${(1 * (fastR ? 1 : 4))}`;
         break;
      }
         rocketB += (parseFloat(`${(libavdevice4 ? 2 : 1) / (Math.max(7, sigmobV.length))}`));
      gifgoalbgS ^= 2;
       let gifgoal4 = false;
       let largesoundZ = 3.0;
      while (gifgoal4) {
          let matchS = String.fromCharCode(114,111,119,107,101,121,95,99,95,51,49,0);
          let reddownarrowP = 4;
          let data5: Map<any, any> = new Map([[String.fromCharCode(114,95,53,50,95,114,101,99,111,114,100,101,114,0),true ], [String.fromCharCode(100,110,115,110,97,109,101,95,110,95,49,48,48,0),true ], [String.fromCharCode(110,111,99,104,97,110,103,101,95,107,95,49,57,0),true ]]);
          let headerR = String.fromCharCode(113,95,52,95,100,101,114,101,102,0);
          let inactiveQ = 2.0;
         gifgoal4 = !gifgoal4;
         matchS += `${parseInt(`${inactiveQ}`)}`;
         reddownarrowP <<= Math.min(5, Math.abs(parseInt(`${inactiveQ}`) * data5.size));
         data5.set(headerR, (headerR == String.fromCharCode(113,0) ? data5.size : headerR.length));
         break;
      }
       let phoneshare9 = String.fromCharCode(109,115,103,115,95,119,95,51,48,0);
       let tickedC = String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,117,95,49,49,0);
      let greytickD = 8056110.0 >= largesoundZ;
      do {
         largesoundZ -= parseFloat(`${parseInt(`${largesoundZ}`) * 1}`);
         if (greytickD) {
            break;
         }
      } while (greytickD && (gifgoal4));
         phoneshare9 = `${phoneshare9.length % 2}`;
          let custom6: Map<any, any> = new Map([[String.fromCharCode(111,95,51,51,95,120,105,112,104,108,97,99,105,110,103,0),200], [String.fromCharCode(116,111,117,99,104,95,108,95,57,48,0),675], [String.fromCharCode(105,95,54,54,95,97,116,116,114,105,98,117,116,105,111,110,0),327]]);
         tickedC += `${custom6.size}`;
         gifgoal4 = !tickedC.includes(`${largesoundZ}`);
      yellowscoreballM = `${parseInt(`${dragA}`) >> (Math.min(2, Math.abs(2)))}`;
   let telegramZ = String.fromCharCode(51,107,107,53,115,104,0) == rankJ;
   do {
       let grayB = false;
       let room_ = String.fromCharCode(114,117,110,95,108,95,54,55,0);
       let transferD = 4;
          let dplus2 = 5.0;
         room_ += "3";
         dplus2 += parseFloat(`${parseInt(`${dplus2}`) & parseInt(`${dplus2}`)}`);
         room_ = `${1 | transferD}`;
      while (3 > (transferD / 4) && 4 > (transferD / (Math.max(5, room_.length)))) {
         transferD |= 2;
         break;
      }
      while (1 >= room_.length) {
         transferD %= Math.max(((grayB ? 4 : 5) >> (Math.min(Math.abs(1), 1))), 4);
         break;
      }
      if (4 < (room_.length + 2) || (2 + room_.length) < 2) {
         room_ += `${3 * transferD}`;
      }
         grayB = 98 <= room_.length;
         room_ += `${transferD}`;
       let humidityO = String.fromCharCode(112,116,114,115,95,108,95,49,52,0);
          let plusp = String.fromCharCode(115,97,118,101,95,49,95,53,54,0);
         transferD *= humidityO.length | plusp.length;
      rankJ += `${room_.length & 3}`;
      if (telegramZ) {
         break;
      }
   } while (telegramZ && (2 == videojsC.length));
   let eactT = String.fromCharCode(116,110,104,52,0) == videojsC;
   do {
      videojsC += `${1 | iconlogoutb.length}`;
      if (eactT) {
         break;
      }
   } while ((iconlogoutb.length > videojsC.length) && eactT);
   if (smallJ.endsWith(iconlogoutb)) {
      smallJ += `${relatedb.length}`;
   }
   for (let h = 0; h < 3; h++) {
      videojsC += "3";
   }
      yellowscoreballM += `${((redscoreballP ? 2 : 1))}`;

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
       let canvas7 = 3;
    let trophyW = 1.0;
    let x_view3 = String.fromCharCode(116,95,49,49,95,112,97,114,97,108,108,97,120,0);
    let bang7 = false;
    let catagoryc = 2.0;
    let jcopy_7mo = String.fromCharCode(100,105,115,99,111,114,100,95,54,95,57,55,0);
    let viewerZ: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,104,97,115,104,101,115,0),954], [String.fromCharCode(97,116,114,97,99,97,108,95,106,95,50,56,0),99]]);
    let phoneh = String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,116,95,57,50,0);
    let chatroombackgroundy = String.fromCharCode(109,95,51,49,95,114,103,98,97,121,99,111,99,103,0);
      canvas7 ^= 1 + viewerZ.size;
       let stylesR = 5.0;
       let controls8 = 0.0;
      let clockz = stylesR >= 5449919.0;
      do {
          let shared = 1;
          let projectx = String.fromCharCode(113,95,54,54,95,98,108,99,107,0);
          let dialogR = 4.0;
          let previeww = true;
         stylesR -= parseFloat(`${3 + parseInt(`${dialogR}`)}`);
         shared += projectx.length - 3;
         projectx += `${shared % 2}`;
         dialogR -= parseFloat(`${projectx.length}`);
         previeww = projectx.endsWith(`${previeww}`);
         if (clockz) {
            break;
         }
      } while (clockz && (2.70 < controls8));
      if (controls8 > stylesR) {
          let leakcheckero = String.fromCharCode(103,97,117,115,115,105,97,110,95,56,95,51,50,0);
         stylesR -= parseFloat(`${2}`);
         leakcheckero += `${leakcheckero.length << (Math.min(leakcheckero.length, 5))}`;
      }
      let bannerE = controls8 <= 7204504.0;
      do {
         controls8 /= Math.max(3, parseFloat(`${parseInt(`${controls8}`) - parseInt(`${stylesR}`)}`));
         if (bannerE) {
            break;
         }
      } while (bannerE && ((stylesR * 4.4) < 1.41 || 1.59 < (stylesR * 4.4)));
      let screenv = controls8 <= 9499684.0;
      do {
          let castg = true;
         controls8 += (parseFloat(`${(castg ? 3 : 4) / (Math.max(parseInt(`${controls8}`), 1))}`));
         if (screenv) {
            break;
         }
      } while (screenv && (1.90 > (controls8 * stylesR) || (controls8 * 1.90) > 1.88));
      if (1.85 <= (5.52 * controls8)) {
          let customg = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,54,95,55,54,0);
          let assisti = String.fromCharCode(114,95,55,48,95,107,105,99,107,101,114,0);
          let executorV = 0;
          let libreanimated2 = String.fromCharCode(99,108,101,97,110,95,51,95,55,51,0);
          let libjsin = String.fromCharCode(101,95,53,50,95,113,117,101,114,121,0);
         controls8 /= Math.max(2, parseFloat(`${1 + parseInt(`${controls8}`)}`));
         customg += "3";
         assisti = `${libreanimated2.length | 3}`;
         executorV ^= libjsin.length;
         libreanimated2 = `${assisti.length << (Math.min(2, Math.abs(executorV)))}`;
         libjsin = `${executorV}`;
      }
      if (5.81 >= (stylesR + controls8) || 5.81 >= (controls8 + stylesR)) {
         controls8 += parseFloat(`${parseInt(`${stylesR}`)}`);
      }
      viewerZ.set(x_view3, x_view3.length);
      trophyW *= canvas7 & jcopy_7mo.length;
   for (let v = 0; v < 2; v++) {
      viewerZ = new Map([[`${viewerZ.size}`, canvas7]]);
   }
   if (!x_view3.startsWith(`${trophyW}`)) {
       let applem = String.fromCharCode(99,95,55,54,95,97,100,100,114,105,110,102,111,0);
       let productL = 2;
       let privatechatbgL = 5;
       let libglogZ = 3;
      let release_ok = applem.length <= 7966801;
      do {
         applem += `${(applem == String.fromCharCode(85,0) ? productL : applem.length)}`;
         if (release_ok) {
            break;
         }
      } while (release_ok && ((productL - 2) >= 3 && 2 >= (applem.length - productL)));
      while (4 >= (productL | 4)) {
         productL |= 3 << (Math.min(5, Math.abs(libglogZ)));
         break;
      }
      if (5 == productL) {
         productL %= Math.max(2, applem.length ^ 1);
      }
       let icontransferclub6 = String.fromCharCode(105,105,114,102,105,108,116,101,114,95,104,95,57,52,0);
       let modules0 = String.fromCharCode(114,97,116,105,111,110,97,108,95,105,95,57,51,0);
         libglogZ |= 3;
      x_view3 = "3";
   }
      bang7 = 81.16 == catagoryc && !bang7;
   let ruless = phoneh == String.fromCharCode(103,101,104,97,104,0);
   do {
       let predictionactiveX = String.fromCharCode(107,101,114,110,101,114,95,103,95,49,48,48,0);
       let animationsD: Map<any, any> = new Map([[String.fromCharCode(108,105,99,101,110,115,101,115,95,104,95,54,51,0),String.fromCharCode(117,95,57,54,95,115,117,98,108,97,121,111,117,116,115,0)], [String.fromCharCode(116,97,98,108,101,115,95,52,95,56,51,0),String.fromCharCode(108,105,110,103,101,114,95,107,95,50,50,0)], [String.fromCharCode(97,118,97,105,108,97,98,108,101,95,113,95,56,49,0),String.fromCharCode(114,119,110,100,95,102,95,50,55,0)]]);
       let cornerp: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,121,95,48,95,48,0),true ], [String.fromCharCode(106,95,57,95,102,105,101,108,100,115,0),false ]]);
      let carouselg = cornerp.size >= 7380540;
      do {
         cornerp.set(`${animationsD.size}`, 2);
         if (carouselg) {
            break;
         }
      } while (carouselg && ((predictionactiveX.length / (Math.max(4, cornerp.size))) <= 3 && (predictionactiveX.length / 3) <= 5));
      while (!predictionactiveX.includes(`${animationsD.size}`)) {
         animationsD.set(predictionactiveX, 3);
         break;
      }
      phoneh = `${parseInt(`${trophyW}`) | 2}`;
      if (ruless) {
         break;
      }
   } while (ruless && (phoneh.endsWith(`${viewerZ.size}`)));
      canvas7 |= phoneh.length;
      viewerZ = new Map([[chatroombackgroundy, canvas7 | 2]]);

    setShowSliderThumbnail(!showSliderThumbnail);

   let iconstarG = String.fromCharCode(50,53,110,112,119,120,117,117,0) == x_view3;
   do {
      x_view3 += `${canvas7}`;
      if (iconstarG) {
         break;
      }
   } while (iconstarG && ((1 & x_view3.length) < 3 || 5 < (x_view3.length & 1)));
      canvas7 &= viewerZ.size;
   for (let c = 0; c < 2; c++) {
      phoneh += `${jcopy_7mo.length << (Math.min(phoneh.length, 3))}`;
   }
   while (viewerZ.size > 1) {
      viewerZ = new Map([[`${bang7}`, parseInt(`${catagoryc}`) * 3]]);
      break;
   }
      trophyW += 2 - phoneh.length;
       let whiteanimationliveM = 2.0;
       let benefita: Map<any, any> = new Map([[String.fromCharCode(122,95,55,57,95,114,116,112,119,0),541], [String.fromCharCode(102,111,108,108,111,119,95,115,95,57,56,0),534]]);
         whiteanimationliveM += 1;
      let scoreh = 5227946.0 <= whiteanimationliveM;
      do {
          let textv: Array<any> = [54, 255, 727];
          let audiencef: Array<any> = [562, 196, 621];
          let zoom0 = String.fromCharCode(110,95,51,54,95,115,121,110,116,104,102,105,108,116,0);
          let cornerkickW = String.fromCharCode(110,111,116,105,99,101,95,99,95,53,57,0);
          let mode2: Array<any> = [String.fromCharCode(101,120,112,114,108,105,115,116,95,57,95,51,53,0), String.fromCharCode(113,95,56,51,95,115,110,97,107,101,0)];
         whiteanimationliveM -= cornerkickW.length;
         textv = [2 ^ audiencef.length];
         audiencef.push(audiencef.length);
         zoom0 += "1";
         cornerkickW += `${zoom0.length >> (Math.min(4, mode2.length))}`;
         mode2 = [1];
         if (scoreh) {
            break;
         }
      } while (((whiteanimationliveM - benefita.size) < 2.32 && (2.32 - whiteanimationliveM) < 4.4) && scoreh);
         whiteanimationliveM -= parseInt(`${whiteanimationliveM}`) << (Math.min(Math.abs(benefita.size), 3));
         benefita = new Map([[`${benefita.size}`, 3 / (Math.max(9, parseInt(`${whiteanimationliveM}`)))]]);
      while (whiteanimationliveM >= 5.3) {
          let encrypt9 = String.fromCharCode(121,95,56,49,95,97,117,116,111,102,105,120,0);
          let recommendationg = String.fromCharCode(113,95,57,56,95,113,105,110,100,101,120,0);
          let serviceJ = 0.0;
          let privilegeV: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,99,108,95,122,95,54,55,0),true ], [String.fromCharCode(113,95,50,54,95,104,121,112,111,116,104,101,115,101,115,0),true ]]);
          let stepk = 3;
         whiteanimationliveM -= parseInt(`${whiteanimationliveM}`) - parseInt(`${serviceJ}`);
         encrypt9 += `${(recommendationg == String.fromCharCode(49,0) ? recommendationg.length : privilegeV.size)}`;
         serviceJ /= Math.max(parseFloat(`${privilegeV.size}`), 4);
         stepk *= 3;
         break;
      }
          let frame_qqv: Map<any, any> = new Map([[String.fromCharCode(115,101,97,95,104,95,50,57,0),String.fromCharCode(111,98,106,99,95,100,95,54,52,0)], [String.fromCharCode(103,95,53,57,95,109,112,101,103,118,105,100,101,111,100,101,99,0),String.fromCharCode(97,95,54,55,95,113,117,97,110,116,105,122,101,0)]]);
          let shirtz = String.fromCharCode(120,95,49,48,95,99,111,118,101,114,105,110,103,0);
          let abidetecto = String.fromCharCode(105,95,50,95,112,117,116,99,0);
         benefita.set(abidetecto, 1 & abidetecto.length);
         frame_qqv.set(`${shirtz}`, 1);
         shirtz = `${shirtz.length | frame_qqv.size}`;
      phoneh += `${phoneh.length - 2}`;
      bang7 = 59 >= chatroombackgroundy.length;
   let videovarx = jcopy_7mo.length >= 6188253;
   do {
      jcopy_7mo += `${parseInt(`${catagoryc}`)}`;
      if (videovarx) {
         break;
      }
   } while ((!x_view3.endsWith(jcopy_7mo)) && videovarx);
      canvas7 %= Math.max(chatroombackgroundy.length + 1, 5);
    delayControls(!paused);

       let androidH: Map<any, any> = new Map([[String.fromCharCode(101,110,103,105,110,101,95,112,95,50,51,0),623], [String.fromCharCode(115,98,97,100,95,49,95,57,53,0),819], [String.fromCharCode(98,95,56,51,95,100,101,114,101,102,0),844]]);
         androidH = new Map([[`${androidH.size}`, androidH.size ^ androidH.size]]);
         androidH = new Map([[`${androidH.size}`, androidH.size - androidH.size]]);
         androidH = new Map([[`${androidH.size}`, androidH.size / (Math.max(androidH.size, 8))]]);
      canvas7 *= ((bang7 ? 1 : 2) | 3);
   while (2.6 >= (catagoryc / (Math.max(5.31, 6)))) {
      viewerZ = new Map([[`${catagoryc}`, parseInt(`${catagoryc}`) % (Math.max(6, parseInt(`${trophyW}`)))]]);
      break;
   }
   let ewarded2 = phoneh.length <= 7790895;
   do {
       let libhermesh = String.fromCharCode(97,100,97,112,116,101,114,95,107,95,56,57,0);
       let router0 = true;
       let codev = true;
         codev = codev && !router0;
         libhermesh = `${((codev ? 2 : 2))}`;
      phoneh = `${(String.fromCharCode(52,0) == x_view3 ? x_view3.length : chatroombackgroundy.length)}`;
      if (ewarded2) {
         break;
      }
   } while (ewarded2 && (phoneh.endsWith(`${canvas7}`)));
   while (!bang7 || 5 > jcopy_7mo.length) {
      bang7 = (((bang7 ? chatroombackgroundy.length : 30) / (Math.max(chatroombackgroundy.length, 1))) <= 30);
      break;
   }
   for (let s = 0; s < 3; s++) {
      catagoryc *= 1 * viewerZ.size;
   }
   let settingsi = 9685194 <= x_view3.length;
   do {
      x_view3 += "3";
      if (settingsi) {
         break;
      }
   } while (settingsi && (1 > x_view3.length));
   if (3 == (jcopy_7mo.length ^ 4) && (jcopy_7mo.length - parseInt(`${catagoryc}`)) == 4) {
       let injury0 = String.fromCharCode(98,119,114,105,116,101,95,110,95,49,56,0);
       let flyerL = String.fromCharCode(115,109,117,115,104,95,55,95,52,52,0);
       let sansT = String.fromCharCode(106,95,49,51,95,118,112,115,104,97,114,101,100,0);
         sansT += `${sansT.length - 1}`;
      for (let b = 0; b < 3; b++) {
         flyerL = `${injury0.length | flyerL.length}`;
      }
          let gradlev = String.fromCharCode(107,95,52,52,95,98,108,105,110,100,101,100,0);
          let main_jy = String.fromCharCode(102,95,51,55,95,105,110,116,101,103,114,97,116,101,0);
          let emojiheartL: Array<any> = [String.fromCharCode(104,95,50,55,95,100,114,111,112,115,0), String.fromCharCode(101,95,55,49,95,99,107,112,116,0)];
         flyerL = `${sansT.length - flyerL.length}`;
         gradlev += "1";
         main_jy = "2";
         emojiheartL.push(emojiheartL.length << (Math.min(Math.abs(3), 5)));
          let predictiondefaultF: Array<any> = [489, 290];
          let expiredh = String.fromCharCode(119,95,57,50,95,112,108,117,114,97,108,0);
          let countryD: Map<any, any> = new Map([[String.fromCharCode(103,95,57,54,95,99,111,108,108,97,112,115,101,0),112], [String.fromCharCode(102,114,109,97,95,109,95,54,50,0),329]]);
         flyerL += `${countryD.size}`;
         predictiondefaultF.push(expiredh.length % 2);
         expiredh = `${(String.fromCharCode(106,0) == expiredh ? predictiondefaultF.length : expiredh.length)}`;
         countryD.set(expiredh, (expiredh == String.fromCharCode(84,0) ? expiredh.length : predictiondefaultF.length));
      while (sansT != String.fromCharCode(116,0) || injury0 == String.fromCharCode(113,0)) {
         sansT = `${flyerL.length}`;
         break;
      }
      if (flyerL.length < injury0.length) {
          let neonV = 3.0;
          let sentryh = String.fromCharCode(114,101,113,117,105,114,101,115,95,51,95,56,50,0);
          let detailH = String.fromCharCode(103,95,50,53,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0);
         flyerL += `${injury0.length}`;
         neonV -= (parseFloat(`${sentryh == String.fromCharCode(109,0) ? parseInt(`${neonV}`) : sentryh.length}`));
         detailH += "3";
      }
         flyerL += `${injury0.length << (Math.min(flyerL.length, 1))}`;
      for (let j = 0; j < 1; j++) {
          let statsnomoredatao = false;
          let mbbannerL = String.fromCharCode(109,98,109,111,100,101,95,99,95,49,54,0);
          let traminiu: Array<any> = [771, 56];
         flyerL = `${sansT.length - traminiu.length}`;
         statsnomoredatao = !statsnomoredatao;
         mbbannerL = `${((statsnomoredatao ? 5 : 2))}`;
         traminiu.push(((statsnomoredatao ? 5 : 5) - 1));
      }
      if (injury0.length < 2) {
         injury0 = `${sansT.length >> (Math.min(Math.abs(1), 5))}`;
      }
      jcopy_7mo = `${(flyerL == String.fromCharCode(69,0) ? injury0.length : flyerL.length)}`;
   }
      canvas7 -= canvas7 / 3;
   for (let o = 0; o < 1; o++) {
      canvas7 -= 3 ^ viewerZ.size;
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let greyc = false;
    let libswresampleQ = String.fromCharCode(103,114,97,112,104,105,99,115,95,54,95,53,0);
    let analytic1 = 4.0;
    let reddownarrowp = String.fromCharCode(114,101,115,101,116,95,120,95,54,49,0);
    let watch8 = 2;
    let icondefaultthumbnailP = false;
    let infoJ = 2;
    let playR = 1.0;
    let backward0 = 1.0;
    let configureH = String.fromCharCode(111,95,49,51,95,100,105,115,112,97,116,99,104,101,100,0);
    let index9 = 1.0;
   let zhengpian7 = icondefaultthumbnailP ? !icondefaultthumbnailP : icondefaultthumbnailP;
   do {
      icondefaultthumbnailP = String.fromCharCode(116,0) == configureH;
      if (zhengpian7) {
         break;
      }
   } while (((analytic1 + 1.84) >= 3.100 || 1.84 >= analytic1) && zhengpian7);
      watch8 += infoJ * parseInt(`${playR}`);
      configureH = `${(String.fromCharCode(75,0) == libswresampleQ ? configureH.length : libswresampleQ.length)}`;
      analytic1 /= Math.max(parseFloat(`${2 * parseInt(`${analytic1}`)}`), 3);
   for (let d = 0; d < 1; d++) {
      playR -= ((icondefaultthumbnailP ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${backward0}`)), 2)));
   }
   if (4.75 < (analytic1 - watch8)) {
      watch8 /= Math.max(((greyc ? 2 : 5) / (Math.max(parseInt(`${playR}`), 2))), 4);
   }
      libswresampleQ = `${reddownarrowp.length}`;
   if ((analytic1 * parseFloat(`${libswresampleQ.length}`)) <= 5.85 || 2 <= (parseInt(`${analytic1}`) * 4)) {
      analytic1 -= (parseFloat(`${(icondefaultthumbnailP ? 4 : 4) - parseInt(`${playR}`)}`));
   }
       let nativeB: Array<any> = [536, 324];
       let sharewhiteJ = true;
       let pauseX = String.fromCharCode(104,95,54,48,95,115,105,109,117,108,97,116,105,111,110,0);
      while (sharewhiteJ || 3 <= pauseX.length) {
          let uimanagerw = 1;
          let libcxxcomponentsU = 0.0;
          let transfer4 = String.fromCharCode(97,114,105,98,95,49,95,56,55,0);
         sharewhiteJ = transfer4.length < 60;
         uimanagerw /= Math.max(4, parseInt(`${libcxxcomponentsU}`));
         libcxxcomponentsU /= Math.max(4, parseInt(`${libcxxcomponentsU}`) - 2);
         transfer4 = "2";
         break;
      }
       let rulesy = 5.0;
      for (let r = 0; r < 1; r++) {
          let successo = String.fromCharCode(104,105,103,104,95,99,95,50,52,0);
          let tumbnailk = String.fromCharCode(117,95,57,57,95,114,101,115,112,111,110,115,101,115,0);
          let filled1 = 5;
         rulesy /= Math.max(4, parseInt(`${rulesy}`) | 1);
         successo = `${2 << (Math.min(5, tumbnailk.length))}`;
         tumbnailk += `${(String.fromCharCode(78,0) == tumbnailk ? tumbnailk.length : successo.length)}`;
         filled1 ^= successo.length;
      }
          let listA = String.fromCharCode(114,95,51,52,95,116,105,99,107,115,0);
         sharewhiteJ = (rulesy * pauseX.length) == 94.74;
         listA = `${listA.length & listA.length}`;
          let langW = false;
          let yellowanimationlivez = String.fromCharCode(98,111,119,108,105,110,103,95,109,95,53,50,0);
         pauseX = "3";
         langW = yellowanimationlivez.length < 79;
         yellowanimationlivez += `${(String.fromCharCode(110,0) == yellowanimationlivez ? yellowanimationlivez.length : yellowanimationlivez.length)}`;
      let chatroombackgroundo = 7729511 >= pauseX.length;
      do {
          let blacklistw = 2.0;
          let shielddones = 1;
          let becomed = 5.0;
          let layoutr = false;
          let topicC = String.fromCharCode(101,120,99,104,97,110,103,101,115,95,115,95,54,50,0);
         pauseX += `${(topicC == String.fromCharCode(50,0) ? topicC.length : pauseX.length)}`;
         blacklistw -= parseFloat(`${1 / (Math.max(parseInt(`${blacklistw}`), 3))}`);
         shielddones *= 2;
         becomed -= parseFloat(`${parseInt(`${blacklistw}`) ^ shielddones}`);
         layoutr = layoutr || 2.34 <= becomed;
         if (chatroombackgroundo) {
            break;
         }
      } while (chatroombackgroundo && (sharewhiteJ));
          let goal9 = 3.0;
         rulesy -= nativeB.length % (Math.max(3, 1));
         goal9 *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${goal9}`)), 4))}`);
         rulesy /= Math.max(parseInt(`${rulesy}`), 3);
      while (!nativeB.includes(rulesy)) {
          let backwardM = 0.0;
         rulesy *= parseInt(`${backwardM}`);
         break;
      }
      backward0 += (parseFloat(`${nativeB.length * (greyc ? 1 : 3)}`));
       let icontransfercluba = String.fromCharCode(122,95,54,50,95,101,113,117,97,108,115,0);
      for (let v = 0; v < 1; v++) {
         icontransfercluba += `${1 * icontransfercluba.length}`;
      }
          let nativeexe = String.fromCharCode(115,101,99,117,114,105,116,121,95,115,95,56,48,0);
         icontransfercluba += `${nativeexe.length}`;
          let componentregistryR = 3.0;
          let showv: Array<any> = [15, 962, 426];
         icontransfercluba = `${parseInt(`${componentregistryR}`) / (Math.max(showv.length, 7))}`;
      playR -= 2;
      reddownarrowp = `${reddownarrowp.length}`;
   let ballS = backward0 <= 5202330.0;
   do {
      backward0 /= Math.max(parseFloat(`${2 & watch8}`), 4);
      if (ballS) {
         break;
      }
   } while ((libswresampleQ.endsWith(`${backward0}`)) && ballS);
   for (let k = 0; k < 3; k++) {
      configureH += `${parseInt(`${backward0}`) >> (Math.min(3, Math.abs(infoJ)))}`;
   }
      backward0 -= parseFloat(`${parseInt(`${analytic1}`) + 1}`);
   let greenj = 8120738.0 >= playR;
   do {
       let armva2 = String.fromCharCode(108,111,119,95,104,95,57,57,0);
       let frame_gvJ = 3;
       let libreactperfloggerjniT = true;
       let buildD = 1.0;
       let yellowcirclebgF = String.fromCharCode(97,100,115,95,108,95,54,50,0);
       let subin0: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,108,105,110,101,95,108,95,56,0),true ], [String.fromCharCode(100,117,114,98,105,110,95,48,95,54,51,0),false ]]);
       let storez: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,95,108,95,53,51,0),569], [String.fromCharCode(112,95,51,52,0),421], [String.fromCharCode(116,105,102,102,95,50,95,54,53,0),757]]);
      while ((3 % (Math.max(3, armva2.length))) == 1 || 1 == (frame_gvJ % 3)) {
          let dependencyj = 2.0;
          let libjsijniprofilern = String.fromCharCode(103,95,55,48,95,98,101,101,110,0);
          let libimagepipelineB = 0.0;
         armva2 += `${subin0.size % 1}`;
         dependencyj *= parseFloat(`${parseInt(`${libimagepipelineB}`) << (Math.min(1, Math.abs(parseInt(`${dependencyj}`))))}`);
         libjsijniprofilern += `${parseInt(`${dependencyj}`)}`;
         libimagepipelineB -= parseInt(`${libimagepipelineB}`);
         break;
      }
      if (Array.from(storez.keys()).includes(`${buildD}`)) {
          let edito = 1;
          let logoutp = 2.0;
         buildD *= edito ^ frame_gvJ;
         edito >>= Math.min(Math.abs(parseInt(`${logoutp}`)), 2);
      }
          let moreD = 5.0;
          let feedbackB: Map<any, any> = new Map([[String.fromCharCode(113,95,53,53,95,109,101,115,104,101,115,0),true ], [String.fromCharCode(98,108,111,99,107,101,114,95,56,95,50,53,0),false ], [String.fromCharCode(103,108,111,98,97,108,95,115,95,54,0),true ]]);
         subin0.set(`${moreD}`, 2 | storez.size);
         moreD -= parseFloat(`${feedbackB.size}`);
         feedbackB.set(`${feedbackB.size}`, feedbackB.size >> (Math.min(Math.abs(3), 4)));
      while (2 > armva2.length) {
         storez = new Map([[`${subin0.size}`, subin0.size << (Math.min(5, Math.abs(parseInt(`${buildD}`))))]]);
         break;
      }
      while ((storez.size % (Math.max(2, 6))) >= 5) {
          let smallorangemanW: Map<any, any> = new Map([[String.fromCharCode(102,101,97,116,117,114,101,100,95,53,95,56,57,0),true ], [String.fromCharCode(118,95,55,95,100,117,112,108,105,99,97,116,101,115,0),false ], [String.fromCharCode(115,117,98,114,97,110,103,101,95,103,95,54,50,0),false ]]);
         storez = new Map([[`${smallorangemanW.size}`, 1]]);
         break;
      }
      for (let p = 0; p < 1; p++) {
          let phonea = String.fromCharCode(112,114,105,110,116,95,52,95,57,53,0);
          let details4 = 4;
          let areah = String.fromCharCode(103,111,111,103,95,55,95,52,51,0);
          let libglogs: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,115,95,113,95,51,52,0),String.fromCharCode(99,95,56,48,95,99,111,101,114,99,101,0)], [String.fromCharCode(115,104,105,102,116,101,100,95,50,95,55,52,0),String.fromCharCode(115,95,53,49,95,99,97,99,104,101,102,108,117,115,104,0)], [String.fromCharCode(115,95,55,54,95,108,111,116,116,105,101,109,111,100,101,108,0),String.fromCharCode(99,111,108,108,101,116,105,111,110,95,119,95,51,57,0)]]);
         armva2 = `${storez.size}`;
         phonea = `${1 ^ areah.length}`;
         details4 >>= Math.min(2, Math.abs(1 << (Math.min(2, areah.length))));
         libglogs.set(areah, libglogs.size);
      }
      for (let h = 0; h < 2; h++) {
         armva2 = `${yellowcirclebgF.length}`;
      }
      let sort_ = storez.size <= 8992689;
      do {
          let albumi = String.fromCharCode(121,95,56,50,95,104,101,97,100,108,105,110,101,0);
          let nterstitialG = String.fromCharCode(100,95,51,95,108,117,104,110,0);
          let stored = String.fromCharCode(118,95,54,50,95,108,105,102,116,0);
         storez.set(`${albumi}`, subin0.size + 2);
         albumi = `${1 * nterstitialG.length}`;
         nterstitialG += `${stored.length}`;
         stored += `${nterstitialG.length ^ stored.length}`;
         if (sort_) {
            break;
         }
      } while (sort_ && (2 >= (storez.size | yellowcirclebgF.length)));
      let sentry2 = 9674232 <= armva2.length;
      do {
         armva2 = `${1 & yellowcirclebgF.length}`;
         if (sentry2) {
            break;
         }
      } while ((5 == (4 >> (Math.min(3, armva2.length)))) && sentry2);
          let mintegralV: Map<any, any> = new Map([[String.fromCharCode(121,95,54,52,95,115,104,97,100,111,119,0),String.fromCharCode(99,111,110,102,108,105,99,116,95,120,95,53,48,0)], [String.fromCharCode(112,114,111,109,112,101,103,95,110,95,49,49,0),String.fromCharCode(112,97,114,115,101,114,115,95,122,95,54,50,0)]]);
         subin0.set(`${frame_gvJ}`, 2 | mintegralV.size);
      for (let u = 0; u < 2; u++) {
         armva2 += `${3 >> (Math.min(1, armva2.length))}`;
      }
         storez = new Map([[`${buildD}`, armva2.length]]);
      if (!libreactperfloggerjniT) {
          let assistD = String.fromCharCode(104,95,51,49,95,98,111,110,106,111,117,114,0);
         libreactperfloggerjniT = (buildD * subin0.size) == 78.13;
         assistD = "1";
      }
      for (let q = 0; q < 2; q++) {
         buildD += subin0.size;
      }
      playR /= Math.max(((greyc ? 4 : 5)), 5);
      if (greenj) {
         break;
      }
   } while ((playR < 2.44) && greenj);
   let applicationS = 9439334 >= watch8;
   do {
      watch8 %= Math.max(watch8 * 3, 1);
      if (applicationS) {
         break;
      }
   } while (applicationS && ((watch8 - parseInt(`${playR}`)) >= 4 && 4 >= (parseInt(`${playR}`) - watch8)));
   if (watch8 > 1) {
       let floaterC = 1.0;
       let condensed9: Map<any, any> = new Map([[String.fromCharCode(112,95,55,56,95,114,101,97,108,108,121,0),147], [String.fromCharCode(111,102,111,114,109,97,116,95,121,95,49,53,0),564], [String.fromCharCode(97,115,115,111,99,105,97,116,101,100,95,49,95,55,52,0),75]]);
       let sideO = String.fromCharCode(99,95,51,53,95,98,101,103,105,110,0);
       let whiteticky = true;
       let turndowni: Map<any, any> = new Map([[String.fromCharCode(102,108,97,116,110,101,115,115,95,117,95,50,49,0),578], [String.fromCharCode(97,114,101,116,104,101,114,101,95,105,95,50,49,0),105]]);
       let e_unlockl = String.fromCharCode(108,95,54,48,95,101,118,101,110,0);
       let shielddoned = String.fromCharCode(105,100,108,105,115,116,95,57,95,55,54,0);
      while (e_unlockl.includes(`${turndowni.size}`)) {
         e_unlockl += `${(String.fromCharCode(52,0) == sideO ? condensed9.size : sideO.length)}`;
         break;
      }
      if (5 >= (turndowni.size ^ sideO.length)) {
          let whistleorange4 = false;
          let specL = 4.0;
          let libswresamplej = String.fromCharCode(101,95,53,49,95,116,121,111,101,0);
         sideO = `${(parseInt(`${floaterC}`) - (whistleorange4 ? 1 : 3))}`;
         whistleorange4 = libswresamplej.length > 66;
         specL += (parseFloat(`${String.fromCharCode(85,0) == libswresamplej ? parseInt(`${specL}`) : libswresamplej.length}`));
      }
          let grayB: Array<any> = [673, 680];
          let playP: Map<any, any> = new Map([[String.fromCharCode(122,95,51,56,95,116,97,98,115,0),809], [String.fromCharCode(114,97,110,103,101,99,111,100,101,114,95,109,95,53,51,0),580]]);
         sideO += `${sideO.length ^ 3}`;
         grayB.push(grayB.length % 3);
         playP.set(`${grayB.length}`, grayB.length);
         whiteticky = 99 <= shielddoned.length && 99 <= e_unlockl.length;
         whiteticky = condensed9.size > 58;
      for (let r = 0; r < 1; r++) {
         whiteticky = sideO.length <= 58 && shielddoned.length <= 58;
      }
          let iconfeedback1: Array<any> = [525, 504, 60];
          let tooltipsu = String.fromCharCode(114,101,118,105,101,119,95,114,95,51,57,0);
          let topicd: Array<any> = [299, 786];
         condensed9.set(`${shielddoned}`, turndowni.size >> (Math.min(shielddoned.length, 5)));
         iconfeedback1.push(2 % (Math.max(5, topicd.length)));
         tooltipsu += `${tooltipsu.length + topicd.length}`;
      if (condensed9.size > 2) {
         condensed9 = new Map([[sideO, sideO.length]]);
      }
      if (sideO == String.fromCharCode(109,0)) {
          let wnewarchdefaultsV = false;
          let libapminsightaz: Array<any> = [794, 850];
          let homeloadingE = String.fromCharCode(107,95,51,53,95,112,97,116,99,104,115,101,116,0);
         shielddoned += `${libapminsightaz.length}`;
         wnewarchdefaultsV = homeloadingE.length >= 33 || wnewarchdefaultsV;
         libapminsightaz = [homeloadingE.length];
      }
      if (turndowni.size > 2) {
          let redirecta = String.fromCharCode(118,111,105,99,101,115,95,108,95,53,54,0);
          let iconadslinkI: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,48,0),String.fromCharCode(99,108,111,117,100,102,108,97,114,101,95,117,95,54,57,0)], [String.fromCharCode(99,95,56,50,95,115,113,108,108,111,103,0),String.fromCharCode(112,105,112,101,108,111,115,115,95,105,95,49,48,48,0)]]);
         sideO = `${parseInt(`${floaterC}`) >> (Math.min(e_unlockl.length, 4))}`;
         redirecta = `${iconadslinkI.size}`;
         iconadslinkI = new Map([[`${iconadslinkI.size}`, (String.fromCharCode(103,0) == redirecta ? iconadslinkI.size : redirecta.length)]]);
      }
      while (5 <= (e_unlockl.length << (Math.min(Math.abs(3), 2))) || (e_unlockl.length << (Math.min(Math.abs(3), 2))) <= 3) {
          let handlera = String.fromCharCode(116,104,101,109,101,100,95,119,95,53,50,0);
          let iconarrowrightN = 1.0;
         condensed9.set(`${iconarrowrightN}`, (handlera == String.fromCharCode(66,0) ? parseInt(`${iconarrowrightN}`) : handlera.length));
         break;
      }
          let modityo = true;
          let images7 = String.fromCharCode(122,95,53,55,95,114,105,110,103,105,110,103,0);
          let sansF = 1.0;
         condensed9 = new Map([[`${turndowni.size}`, turndowni.size]]);
         modityo = images7.length < 58;
         images7 = `${((modityo ? 2 : 2))}`;
         sansF /= Math.max(images7.length, 2);
       let runtimeschedulerL = String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,113,95,55,49,0);
         turndowni = new Map([[`${floaterC}`, ((whiteticky ? 4 : 1) - parseInt(`${floaterC}`))]]);
      watch8 >>= Math.min(3, Math.abs(((greyc ? 5 : 1))));
   }
   let statsH = 7330059.0 <= playR;
   do {
       let videocommon9 = String.fromCharCode(116,95,48,95,115,112,111,110,115,111,114,101,100,0);
       let upgradeg = 4.0;
       let gmailE = false;
       let oranger = 1;
       let iconmoreT = 2;
      if (5 == (5 - iconmoreT)) {
         iconmoreT &= 3;
      }
      while ((1.55 + upgradeg) < 4.32) {
         upgradeg *= (parseFloat(`${(gmailE ? 1 : 2) << (Math.min(Math.abs(parseInt(`${upgradeg}`)), 5))}`));
         break;
      }
         iconmoreT &= oranger >> (Math.min(Math.abs(1), 2));
      let bingy = gmailE ? !gmailE : gmailE;
      do {
          let nativeR: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,95,121,95,51,0),String.fromCharCode(101,109,98,101,100,100,105,110,103,95,99,95,52,52,0)], [String.fromCharCode(97,99,97,108,99,95,119,95,49,48,0),String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,101,95,52,57,0)], [String.fromCharCode(99,95,51,48,95,99,111,110,102,105,103,117,114,97,116,111,114,0),String.fromCharCode(100,95,51,55,95,120,117,118,109,118,115,0)]]);
          let crickets: Array<any> = [816, 979, 645];
          let math1 = 2.0;
          let libavdeviceG: Array<any> = [532, 283];
         gmailE = String.fromCharCode(109,0) == videocommon9;
         nativeR.set(`${math1}`, 2);
         crickets.push(crickets.length);
         math1 *= 1 << (Math.min(Math.abs(parseInt(`${math1}`)), 5));
         libavdeviceG = [2 | parseInt(`${math1}`)];
         if (bingy) {
            break;
         }
      } while ((gmailE && (1 * oranger) <= 1) && bingy);
          let window_5y = false;
          let phoneshareL = 3.0;
          let libreanimated7 = true;
         videocommon9 = `${(parseInt(`${phoneshareL}`) | (gmailE ? 4 : 5))}`;
         window_5y = (!libreanimated7 ? window_5y : libreanimated7);
         phoneshareL /= Math.max(5, ((libreanimated7 ? 2 : 5) << (Math.min(4, Math.abs(1)))));
      while (1 <= oranger) {
         oranger -= videocommon9.length + 2;
         break;
      }
       let matchV = 5.0;
       let iconshareM = 4.0;
      if (5.91 < upgradeg) {
          let benefitv = false;
          let showR = String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,116,95,49,51,0);
         upgradeg *= parseFloat(`${2}`);
         benefitv = !showR.includes(`${benefitv}`);
         showR = "1";
      }
      while (4.96 <= (4.70 - upgradeg)) {
          let largesoundU = String.fromCharCode(112,114,101,112,95,99,95,57,52,0);
         upgradeg *= (parseFloat(`${parseInt(`${upgradeg}`) & (gmailE ? 3 : 5)}`));
         largesoundU = `${largesoundU.length << (Math.min(Math.abs(1), 3))}`;
         break;
      }
      let weatherB = iconmoreT <= 8380351;
      do {
         iconmoreT %= Math.max(4, 1 + parseInt(`${matchV}`));
         if (weatherB) {
            break;
         }
      } while (weatherB && (3 < (iconmoreT + oranger) || (3 + oranger) < 2));
         matchV /= Math.max((parseFloat(`${videocommon9.length << (Math.min(3, Math.abs((gmailE ? 3 : 5))))}`)), 5);
      if ((matchV - 2.14) < 5.54 && matchV < 2.14) {
         gmailE = 66.71 < upgradeg;
      }
          let mintegralo = String.fromCharCode(121,97,98,101,95,114,95,55,56,0);
         videocommon9 = `${oranger}`;
         mintegralo = `${mintegralo.length >> (Math.min(3, mintegralo.length))}`;
      for (let x = 0; x < 1; x++) {
         matchV -= parseFloat(`${oranger}`);
      }
      let schedule3 = 5365038 <= videocommon9.length;
      do {
          let tumbnailY = String.fromCharCode(108,101,101,119,97,121,95,121,95,50,0);
          let iconwatchnowF = 1.0;
          let googleD: Map<any, any> = new Map([[String.fromCharCode(115,95,50,51,95,102,105,110,110,101,121,0),String.fromCharCode(116,95,54,95,109,117,108,116,105,112,108,101,0)], [String.fromCharCode(117,95,51,54,95,106,105,103,103,108,101,0),String.fromCharCode(103,95,57,57,95,101,113,117,105,118,97,108,101,110,116,0)]]);
          let clearT = true;
          let libswresamplet = true;
         videocommon9 = `${((clearT ? 3 : 3) - parseInt(`${matchV}`))}`;
         tumbnailY = `${2 & googleD.size}`;
         iconwatchnowF /= Math.max(4, googleD.size);
         clearT = iconwatchnowF > 48.95;
         if (schedule3) {
            break;
         }
      } while ((videocommon9.startsWith(`${iconmoreT}`)) && schedule3);
      playR += parseInt(`${upgradeg}`);
      if (statsH) {
         break;
      }
   } while (statsH && ((backward0 / (Math.max(10, playR))) > 4.55));
      reddownarrowp += "1";
   if ((analytic1 / 5.86) <= 2.80 || (analytic1 / 5.86) <= 5.45) {
       let playlistU = String.fromCharCode(100,95,54,57,95,106,109,101,109,115,121,115,0);
       let shareT: Map<any, any> = new Map([[String.fromCharCode(122,95,56,48,95,118,97,108,117,101,0),String.fromCharCode(108,95,51,48,95,115,119,114,101,115,97,109,112,108,101,114,101,115,0)], [String.fromCharCode(108,95,51,53,95,109,117,108,114,101,115,0),String.fromCharCode(104,113,97,100,115,112,95,120,95,52,50,0)], [String.fromCharCode(99,95,53,50,95,117,99,109,112,0),String.fromCharCode(107,95,50,54,95,101,118,111,108,118,101,0)]]);
       let whistleorangeF = 5;
       let emptyK: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,114,97,108,108,121,95,115,95,54,50,0),564], [String.fromCharCode(115,97,118,101,95,49,95,57,53,0),703], [String.fromCharCode(106,95,54,95,121,117,118,109,112,101,103,0),639]]);
         whistleorangeF |= 1 * emptyK.size;
      while (2 == (whistleorangeF & 5) && 4 == (whistleorangeF & 5)) {
          let mutedm = 1.0;
          let iconarrowrightwhitem: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,108,101,97,102,0),808], [String.fromCharCode(99,95,56,55,95,117,110,114,101,118,101,114,115,101,100,0),413], [String.fromCharCode(111,114,105,103,95,55,95,54,49,0),960]]);
          let dycreator3 = 0.0;
          let textinpute = String.fromCharCode(104,95,52,54,95,115,116,114,105,110,103,117,116,105,108,115,0);
         shareT.set(textinpute, 3 | textinpute.length);
         mutedm *= parseFloat(`${iconarrowrightwhitem.size}`);
         iconarrowrightwhitem = new Map([[`${dycreator3}`, 1 >> (Math.min(Math.abs(parseInt(`${mutedm}`)), 2))]]);
         dycreator3 -= iconarrowrightwhitem.size;
         break;
      }
         playlistU += `${3 + shareT.size}`;
         playlistU = `${whistleorangeF / (Math.max(1, shareT.size))}`;
      if ((shareT.size % 4) >= 5) {
         whistleorangeF >>= Math.min(4, Math.abs(emptyK.size - shareT.size));
      }
      while (5 > (whistleorangeF * playlistU.length) && (whistleorangeF * playlistU.length) > 5) {
         whistleorangeF &= playlistU.length;
         break;
      }
      let orangeuparrowC = 9380320 <= whistleorangeF;
      do {
         whistleorangeF |= whistleorangeF / 3;
         if (orangeuparrowC) {
            break;
         }
      } while (orangeuparrowC && (2 == whistleorangeF));
      for (let j = 0; j < 2; j++) {
         playlistU += `${emptyK.size | 1}`;
      }
         shareT = new Map([[`${emptyK.size}`, emptyK.size]]);
          let placementX = false;
          let mbbidg = 3;
         shareT.set(`${mbbidg}`, mbbidg ^ emptyK.size);
         placementX = !placementX;
      let binddatass = 8802513 >= whistleorangeF;
      do {
          let arrowupt: Array<any> = [247, 185];
         whistleorangeF &= 1;
         arrowupt = [1 & arrowupt.length];
         if (binddatass) {
            break;
         }
      } while (binddatass && (4 > (whistleorangeF * 1) || 1 > (whistleorangeF * playlistU.length)));
          let selectionk: Map<any, any> = new Map([[String.fromCharCode(118,95,57,49,0),9], [String.fromCharCode(97,95,50,53,95,105,110,102,117,114,97,0),930], [String.fromCharCode(110,95,52,50,0),753]]);
         shareT = new Map([[`${shareT.size}`, (String.fromCharCode(101,0) == playlistU ? playlistU.length : shareT.size)]]);
         selectionk.set(`${selectionk.size}`, selectionk.size + selectionk.size);
      analytic1 *= parseFloat(`${1 & whistleorangeF}`);
   }
   let overu = reddownarrowp.length <= 6984722;
   do {
       let reactnativeultimatelistviewv: Array<any> = [108, 278];
       let xvodH = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,103,95,57,53,0);
       let trashs: Array<any> = [88, 797, 60];
       let backgroundO = 0.0;
       let iconmoreI: Array<any> = [200, 82];
      let cnewarchdefaultsA = 9439959 <= iconmoreI.length;
      do {
          let bufferx: Array<any> = [256, 591];
          let projectF = 5.0;
          let telegramC = 0.0;
         iconmoreI.push(parseInt(`${backgroundO}`));
         bufferx.push(bufferx.length - parseInt(`${projectF}`));
         projectF /= Math.max(3, parseFloat(`${bufferx.length}`));
         telegramC -= parseFloat(`${1 & parseInt(`${projectF}`)}`);
         if (cnewarchdefaultsA) {
            break;
         }
      } while (cnewarchdefaultsA && (5.57 > (backgroundO / (Math.max(4.68, 7))) && 2.76 > (4.68 / (Math.max(3, backgroundO)))));
         backgroundO *= parseFloat(`${2}`);
          let group3 = true;
         iconmoreI.push(((group3 ? 5 : 4) - parseInt(`${backgroundO}`)));
         backgroundO *= parseFloat(`${iconmoreI.length - trashs.length}`);
      while (backgroundO <= parseFloat(`${trashs.length}`)) {
         trashs.push(2);
         break;
      }
       let appleB = 5;
         xvodH = `${reactnativeultimatelistviewv.length / (Math.max(9, parseInt(`${backgroundO}`)))}`;
      if (4 >= (reactnativeultimatelistviewv.length >> (Math.min(trashs.length, 1))) && (4 >> (Math.min(3, reactnativeultimatelistviewv.length))) >= 5) {
          let iconfeedbackg = 3;
         reactnativeultimatelistviewv.push(3 / (Math.max(10, trashs.length)));
         iconfeedbackg <<= Math.min(2, Math.abs(3 - iconfeedbackg));
      }
      while (5 > (iconmoreI.length ^ 1) || (2.89 / (Math.max(8, backgroundO))) > 4.62) {
          let tailj = 3.0;
         backgroundO /= Math.max(parseFloat(`${reactnativeultimatelistviewv.length}`), 5);
         tailj -= parseInt(`${tailj}`) & parseInt(`${tailj}`);
         break;
      }
      if (!xvodH.startsWith(`${trashs.length}`)) {
          let updatesD = false;
         xvodH = `${((updatesD ? 2 : 3) & parseInt(`${backgroundO}`))}`;
      }
       let mutedL = 3.0;
          let orientationk = 2.0;
          let sellD = 4.0;
          let areab: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,100,105,115,97,98,108,105,110,103,0),String.fromCharCode(110,95,52,56,95,111,98,109,99,0)], [String.fromCharCode(100,95,52,55,95,101,109,111,106,105,115,0),String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,53,95,50,56,0)]]);
         mutedL /= Math.max(parseFloat(`${reactnativeultimatelistviewv.length >> (Math.min(5, Math.abs(parseInt(`${backgroundO}`))))}`), 4);
         orientationk -= parseInt(`${sellD}`);
         sellD -= parseFloat(`${areab.size % 1}`);
         areab.set(`${orientationk}`, parseInt(`${sellD}`) - 2);
         trashs = [parseInt(`${backgroundO}`)];
         reactnativeultimatelistviewv = [reactnativeultimatelistviewv.length / 3];
         trashs.push(3 * appleB);
      reddownarrowp = `${xvodH.length}`;
      if (overu) {
         break;
      }
   } while (overu && (!reddownarrowp.startsWith(`${greyc}`)));
   if ((reddownarrowp.length - watch8) >= 5 && (reddownarrowp.length - watch8) >= 5) {
       let listAv: Map<any, any> = new Map([[String.fromCharCode(101,113,117,97,116,97,98,108,101,95,107,95,54,57,0),537], [String.fromCharCode(103,95,54,49,95,114,101,115,111,108,117,116,105,111,110,115,0),284]]);
      if ((5 + listAv.size) < 2) {
         listAv = new Map([[`${listAv.size}`, listAv.size + listAv.size]]);
      }
      let reactnativeratingsO = listAv.size <= 7488424;
      do {
         listAv = new Map([[`${listAv.size}`, listAv.size]]);
         if (reactnativeratingsO) {
            break;
         }
      } while (reactnativeratingsO && ((listAv.size % (Math.max(7, listAv.size))) >= 2 && 1 >= (2 % (Math.max(2, listAv.size)))));
       let zhubof = 4.0;
      watch8 /= Math.max(1, parseInt(`${analytic1}`));
   }
   for (let x = 0; x < 1; x++) {
      infoJ /= Math.max(1, infoJ & 3);
   }
      playR /= Math.max(5, watch8);

    onHandleFullScreen();
  };

  const goBack = () => {
       let mergerP = String.fromCharCode(114,95,50,55,95,98,105,110,97,114,121,0);
    let catagoryJ = 4.0;
    let langZ = String.fromCharCode(111,95,51,95,105,122,101,114,111,0);
    let latnF = String.fromCharCode(102,95,51,50,95,110,111,109,105,110,97,116,111,114,115,0);
    let pathk = 2;
    let launchA = 1;
    let profileactiveU = 0.0;
    let pangle2 = String.fromCharCode(101,95,54,48,95,109,97,115,107,101,100,109,101,114,103,101,0);
    let iconsaveimageu = String.fromCharCode(98,101,104,105,110,100,95,117,95,52,55,0);
    let diceH = 4.0;
    let predictionarrowd = 5.0;
    let embedO = String.fromCharCode(112,114,101,118,105,101,119,115,95,50,95,49,52,0);
    let turnn: Array<any> = [String.fromCharCode(101,95,55,56,95,100,97,115,104,101,110,99,0), String.fromCharCode(97,95,54,54,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0), String.fromCharCode(112,114,101,100,105,99,116,120,95,56,95,52,50,0)];
      catagoryJ += parseFloat(`${launchA}`);
   if (latnF.length >= pangle2.length) {
       let playercommon9 = 3.0;
      while (playercommon9 < playercommon9) {
          let hoverf = 0.0;
          let yellowanimationliveZ = 3;
          let blacklistu = 5.0;
          let showlessc = true;
          let benefiti = 5.0;
         playercommon9 -= parseFloat(`${parseInt(`${playercommon9}`) - 3}`);
         hoverf *= parseFloat(`${parseInt(`${benefiti}`) >> (Math.min(4, Math.abs(2)))}`);
         yellowanimationliveZ &= 3 | parseInt(`${blacklistu}`);
         blacklistu /= Math.max(5, parseInt(`${benefiti}`) & 1);
         showlessc = yellowanimationliveZ >= parseInt(`${blacklistu}`);
         break;
      }
         playercommon9 -= parseFloat(`${parseInt(`${playercommon9}`)}`);
      let tempnodatagifT = playercommon9 <= 9621709.0;
      do {
          let rewardS: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,110,103,95,110,95,54,48,0),String.fromCharCode(99,95,50,53,95,99,111,108,111,114,107,101,121,0)], [String.fromCharCode(120,112,117,98,95,57,95,56,48,0),String.fromCharCode(98,105,114,116,104,95,112,95,56,52,0)]]);
          let phoneshareX = 0.0;
          let resendl = String.fromCharCode(121,118,99,111,110,102,105,103,95,111,95,49,52,0);
         playercommon9 += parseFloat(`${1 % (Math.max(parseInt(`${phoneshareX}`), 1))}`);
         rewardS.set(`${resendl}`, resendl.length ^ rewardS.size);
         phoneshareX /= Math.max(parseFloat(`${resendl.length}`), 4);
         if (tempnodatagifT) {
            break;
         }
      } while (tempnodatagifT && (5.67 == (playercommon9 + 2)));
      latnF += "1";
   }
   for (let c = 0; c < 2; c++) {
       let currentQ = String.fromCharCode(122,95,53,56,95,105,110,103,101,110,105,101,110,116,0);
      for (let j = 0; j < 3; j++) {
         currentQ = `${currentQ.length}`;
      }
          let minivodS = 3;
          let stationsY = String.fromCharCode(98,95,52,53,95,103,101,116,114,97,110,100,111,109,0);
          let libapminsighta1: Map<any, any> = new Map([[String.fromCharCode(105,95,49,49,0),524], [String.fromCharCode(115,105,112,104,97,115,104,95,100,95,49,49,0),713]]);
         currentQ = "3";
         minivodS >>= Math.min(5, stationsY.length);
         stationsY = `${minivodS}`;
         libapminsighta1 = new Map([[`${libapminsighta1.size}`, (String.fromCharCode(116,0) == stationsY ? stationsY.length : libapminsighta1.size)]]);
         currentQ += `${currentQ.length + currentQ.length}`;
      predictionarrowd /= Math.max(parseFloat(`${parseInt(`${predictionarrowd}`)}`), 1);
   }
   let penaltyshooti = 8405484.0 >= profileactiveU;
   do {
      profileactiveU *= latnF.length;
      if (penaltyshooti) {
         break;
      }
   } while (penaltyshooti && (1.90 >= (profileactiveU * 4.49)));
       let dependencies1 = 1;
       let entryW = false;
      for (let i = 0; i < 1; i++) {
         entryW = !entryW || dependencies1 < 37;
      }
      for (let n = 0; n < 2; n++) {
         entryW = dependencies1 < 60;
      }
         dependencies1 &= dependencies1;
          let mergerJ = 1.0;
          let placeholderS: Map<any, any> = new Map([[String.fromCharCode(113,115,99,97,108,101,113,108,111,103,95,97,95,56,49,0),448], [String.fromCharCode(104,102,121,117,95,107,95,54,50,0),983]]);
          let matchinactiveE = 1.0;
         dependencies1 &= 2 % (Math.max(parseInt(`${mergerJ}`), 2));
         mergerJ *= placeholderS.size;
         placeholderS = new Map([[`${placeholderS.size}`, placeholderS.size | 1]]);
         matchinactiveE *= parseFloat(`${1}`);
          let finit_zd6 = 3;
          let switch_3W = String.fromCharCode(97,95,55,54,95,100,101,116,97,105,108,0);
         dependencies1 += ((entryW ? 2 : 5) | dependencies1);
         finit_zd6 |= finit_zd6;
         switch_3W += `${switch_3W.length}`;
         dependencies1 >>= Math.min(Math.abs(2), 1);
      predictionarrowd *= (parseFloat(`${String.fromCharCode(53,0) == pangle2 ? pathk : pangle2.length}`));
   let large4 = 6569601 >= launchA;
   do {
      launchA += latnF.length;
      if (large4) {
         break;
      }
   } while (large4 && ((5 << (Math.min(1, Math.abs(pathk)))) >= 2));
      latnF += `${parseInt(`${catagoryJ}`) * launchA}`;
   while ((pathk - parseInt(`${predictionarrowd}`)) < 2 || (predictionarrowd - 5.88) < 1.76) {
       let turnP: Map<any, any> = new Map([[String.fromCharCode(103,101,116,95,107,95,49,55,0),String.fromCharCode(107,95,51,50,95,101,110,100,101,100,0)], [String.fromCharCode(106,95,49,48,95,116,97,110,115,105,103,0),String.fromCharCode(112,97,114,97,108,108,101,108,95,112,95,51,57,0)]]);
          let default_lH = 2;
          let backward6 = String.fromCharCode(119,95,49,56,95,115,116,97,116,0);
         turnP = new Map([[`${default_lH}`, (backward6 == String.fromCharCode(117,0) ? default_lH : backward6.length)]]);
      let mbsplasha = turnP.size >= 9341992;
      do {
          let flipperQ = 2.0;
          let libavcodec0: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,101,100,95,102,95,53,54,0),156], [String.fromCharCode(102,112,109,98,95,121,95,53,51,0),601], [String.fromCharCode(101,114,97,115,101,100,95,56,95,57,51,0),284]]);
         turnP = new Map([[`${turnP.size}`, parseInt(`${flipperQ}`)]]);
         flipperQ /= Math.max(parseFloat(`${1}`), 2);
         libavcodec0 = new Map([[`${libavcodec0.size}`, libavcodec0.size | 3]]);
         if (mbsplasha) {
            break;
         }
      } while (mbsplasha && (2 < (1 & turnP.size) && (turnP.size & 1) < 2));
      let launcher7 = turnP.size >= 6635652;
      do {
         turnP = new Map([[`${turnP.size}`, turnP.size + 1]]);
         if (launcher7) {
            break;
         }
      } while (launcher7 && (4 == (turnP.size << (Math.min(5, Math.abs(turnP.size)))) && 5 == (4 << (Math.min(3, Math.abs(turnP.size))))));
      pathk &= 1 >> (Math.min(Math.abs(parseInt(`${predictionarrowd}`)), 1));
      break;
   }
       let contextb = false;
      for (let l = 0; l < 3; l++) {
          let holderD = 2.0;
          let closeO = String.fromCharCode(111,95,54,48,95,101,109,105,116,116,101,100,0);
          let show9 = 3.0;
          let reporte = 3;
          let mbnative2 = 5;
         contextb = closeO.length <= 79 || !contextb;
         holderD /= Math.max(reporte << (Math.min(Math.abs(parseInt(`${holderD}`)), 4)), 2);
         closeO = `${parseInt(`${show9}`) << (Math.min(1, Math.abs(reporte)))}`;
         show9 *= reporte;
         mbnative2 ^= 2 << (Math.min(Math.abs(parseInt(`${holderD}`)), 4));
      }
       let dependencyO = String.fromCharCode(97,118,112,114,111,103,114,97,109,95,105,95,52,48,0);
         dependencyO = `${((contextb ? 4 : 4) >> (Math.min(Math.abs(3), 5)))}`;
      iconsaveimageu = "2";
      launchA += parseInt(`${diceH}`);
   if (!langZ.startsWith(`${pathk}`)) {
      pathk >>= Math.min(Math.abs(latnF.length / (Math.max(1, 3))), 3);
   }
      pathk %= Math.max(3, 4);
      pathk &= 2;
   for (let m = 0; m < 1; m++) {
      launchA /= Math.max(2, pathk);
   }
   while (iconsaveimageu.length == 4) {
      iconsaveimageu += "3";
      break;
   }

    delayControls();

   if (5.83 >= (diceH * 3.72)) {
      diceH /= Math.max(1 * langZ.length, 1);
   }
      pathk *= latnF.length;
   for (let d = 0; d < 1; d++) {
       let sellI: Array<any> = [String.fromCharCode(120,95,49,56,95,118,97,114,105,97,110,99,101,120,104,0), String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,113,95,49,48,0), String.fromCharCode(115,95,51,50,95,99,104,114,111,109,105,117,109,0)];
       let interstitialy = String.fromCharCode(102,95,53,49,95,98,117,105,108,116,0);
       let screeni = String.fromCharCode(107,95,56,51,95,109,98,117,102,99,104,97,105,110,0);
         sellI.push(screeni.length);
         sellI.push(3 >> (Math.min(2, sellI.length)));
      if (interstitialy.startsWith(`${screeni.length}`)) {
         screeni = `${sellI.length * 1}`;
      }
          let loginC = true;
         sellI = [sellI.length];
         loginC = !loginC;
      for (let o = 0; o < 2; o++) {
         screeni += `${screeni.length}`;
      }
      while ((sellI.length / 3) >= 2) {
         interstitialy += "1";
         break;
      }
      let q_viewr = interstitialy.length <= 5271750;
      do {
         interstitialy = `${screeni.length ^ sellI.length}`;
         if (q_viewr) {
            break;
         }
      } while (q_viewr && ((interstitialy.length % (Math.max(6, sellI.length))) > 1 && (1 % (Math.max(6, sellI.length))) > 2));
      for (let k = 0; k < 1; k++) {
          let chart_ = String.fromCharCode(110,95,50,50,95,105,110,116,101,114,114,117,112,116,105,98,108,101,0);
          let mbbid1 = true;
         sellI = [interstitialy.length];
         chart_ = `${chart_.length}`;
         mbbid1 = chart_.includes(`${mbbid1}`);
      }
      for (let y = 0; y < 2; y++) {
         screeni = `${sellI.length}`;
      }
      profileactiveU *= embedO.length;
   }
      latnF += "1";
      profileactiveU -= parseInt(`${catagoryJ}`);
      diceH /= Math.max(5, iconsaveimageu.length << (Math.min(Math.abs(2), 3)));
   let shootD = diceH <= 8083311.0;
   do {
      diceH -= parseInt(`${predictionarrowd}`) << (Math.min(langZ.length, 2));
      if (shootD) {
         break;
      }
   } while ((!pangle2.startsWith(`${diceH}`)) && shootD);
      profileactiveU *= latnF.length << (Math.min(Math.abs(1), 2));
   let tumbnailz = iconsaveimageu.length <= 8557027;
   do {
       let iconqqW = 0;
       let predictionactive1: Map<any, any> = new Map([[String.fromCharCode(105,110,104,105,98,105,116,95,121,95,56,50,0),931], [String.fromCharCode(98,105,109,97,112,95,122,95,51,55,0),735], [String.fromCharCode(117,95,55,50,95,121,117,118,121,97,0),545]]);
         predictionactive1 = new Map([[`${predictionactive1.size}`, 1]]);
      while ((iconqqW << (Math.min(Math.abs(4), 5))) < 5) {
         predictionactive1 = new Map([[`${predictionactive1.size}`, 2 - predictionactive1.size]]);
         break;
      }
      for (let g = 0; g < 3; g++) {
          let langkeyd = 5.0;
          let elementso = false;
          let episodesK = String.fromCharCode(115,105,109,100,95,115,95,53,52,0);
         predictionactive1.set(`${langkeyd}`, 2);
         langkeyd -= 2 ^ episodesK.length;
         elementso = episodesK.length == 68;
      }
          let annerU = true;
          let overq = String.fromCharCode(101,95,55,51,95,112,105,99,107,101,114,0);
         predictionactive1.set(`${annerU}`, 3);
         overq += `${overq.length}`;
          let signinup4 = true;
          let hooksj = 0.0;
         predictionactive1.set(`${iconqqW}`, 3 + iconqqW);
         signinup4 = !signinup4;
         hooksj /= Math.max(5, parseFloat(`${3 - parseInt(`${hooksj}`)}`));
      while (2 <= (iconqqW / 3) && 2 <= (predictionactive1.size / 3)) {
          let guideW = String.fromCharCode(116,95,56,53,95,112,121,116,104,111,110,0);
         iconqqW >>= Math.min(Math.abs(predictionactive1.size + iconqqW), 5);
         guideW = `${guideW.length & guideW.length}`;
         break;
      }
      iconsaveimageu += `${iconqqW >> (Math.min(langZ.length, 4))}`;
      if (tumbnailz) {
         break;
      }
   } while ((pangle2 == String.fromCharCode(100,0)) && tumbnailz);
       let anewsn = String.fromCharCode(98,95,56,48,95,109,105,115,99,0);
       let vignettes = 2.0;
       let attributedstringf = 3.0;
         attributedstringf /= Math.max(parseFloat(`${parseInt(`${attributedstringf}`) | 3}`), 5);
          let starL = String.fromCharCode(109,95,52,56,95,115,117,109,102,0);
         attributedstringf -= parseFloat(`${anewsn.length >> (Math.min(5, Math.abs(parseInt(`${attributedstringf}`))))}`);
         starL = `${starL.length >> (Math.min(Math.abs(2), 4))}`;
      mergerP = `${(latnF == String.fromCharCode(112,0) ? latnF.length : parseInt(`${catagoryJ}`))}`;
       let settingR = String.fromCharCode(113,95,52,50,95,103,117,97,114,97,110,116,101,101,0);
         settingR += `${(settingR == String.fromCharCode(85,0) ? settingR.length : settingR.length)}`;
      let hooksm = settingR == String.fromCharCode(100,112,95,111,99,101,0);
      do {
          let binddatas8 = 1;
         settingR += `${binddatas8 & 2}`;
         if (hooksm) {
            break;
         }
      } while ((settingR.length >= 1) && hooksm);
      for (let r = 0; r < 3; r++) {
         settingR += "2";
      }
      langZ += `${langZ.length ^ parseInt(`${catagoryJ}`)}`;
   let bufferd = latnF.length >= 5722015;
   do {
      latnF = "2";
      if (bufferd) {
         break;
      }
   } while (bufferd && (2 <= (pathk << (Math.min(latnF.length, 3)))));
   let connectionX = String.fromCharCode(108,53,108,106,0) == mergerP;
   do {
       let cricketj: Map<any, any> = new Map([[String.fromCharCode(103,95,49,57,95,107,101,121,115,116,111,114,101,0),469], [String.fromCharCode(103,105,103,97,103,114,111,117,112,95,120,95,54,0),220], [String.fromCharCode(112,95,49,50,0),990]]);
       let inouttargetred4: Array<any> = [156, 739, 350];
       let profileactiveD = 0.0;
       let static_jac = String.fromCharCode(115,95,55,56,95,98,117,102,115,112,97,99,101,0);
       let orangeL = 3;
      if (inouttargetred4.length < 2) {
         orangeL /= Math.max(1, orangeL);
      }
      while ((cricketj.size % (Math.max(4, 7))) <= 3 && (cricketj.size + 4) <= 4) {
         cricketj = new Map([[`${cricketj.size}`, inouttargetred4.length / (Math.max(5, cricketj.size))]]);
         break;
      }
         inouttargetred4 = [orangeL + 3];
         profileactiveD *= parseFloat(`${2 | orangeL}`);
         static_jac += `${3 | orangeL}`;
      let cornershootV = orangeL <= 7342156;
      do {
          let attributedstringq: Map<any, any> = new Map([[String.fromCharCode(97,121,98,114,105,95,101,95,49,57,0),true ], [String.fromCharCode(112,95,54,50,95,101,97,99,115,0),true ]]);
          let smallY: Array<any> = [String.fromCharCode(116,111,117,99,104,101,100,95,55,95,51,55,0), String.fromCharCode(114,102,112,115,95,121,95,55,0)];
         orangeL <<= Math.min(Math.abs(cricketj.size | 2), 1);
         attributedstringq = new Map([[`${attributedstringq.size}`, 2 + smallY.length]]);
         smallY = [2];
         if (cornershootV) {
            break;
         }
      } while (cornershootV && (Array.from(cricketj.values()).includes(orangeL)));
       let basketballplayerplaceholder2: Array<any> = [495, 491];
       let plashH: Array<any> = [397, 35, 284];
      for (let q = 0; q < 3; q++) {
         cricketj.set(`${profileactiveD}`, (String.fromCharCode(68,0) == static_jac ? parseInt(`${profileactiveD}`) : static_jac.length));
      }
         basketballplayerplaceholder2.push(2 + static_jac.length);
      let libapminsightbc = orangeL <= 7996886;
      do {
         orangeL -= 2 & plashH.length;
         if (libapminsightbc) {
            break;
         }
      } while ((5 >= (basketballplayerplaceholder2.length % (Math.max(7, orangeL))) && 5 >= (orangeL % (Math.max(basketballplayerplaceholder2.length, 5)))) && libapminsightbc);
          let iconbackwhiteB = 4.0;
         inouttargetred4 = [static_jac.length];
         iconbackwhiteB -= parseFloat(`${parseInt(`${iconbackwhiteB}`) - parseInt(`${iconbackwhiteB}`)}`);
      if ((profileactiveD - orangeL) >= 2.12) {
         orangeL += basketballplayerplaceholder2.length;
      }
         cricketj.set(`${profileactiveD}`, parseInt(`${profileactiveD}`) - 3);
      for (let q = 0; q < 2; q++) {
         cricketj = new Map([[`${cricketj.size}`, orangeL]]);
      }
      for (let l = 0; l < 2; l++) {
          let homeinactiveY = String.fromCharCode(116,95,51,48,95,101,116,104,101,114,115,99,97,110,0);
          let pingd = 1.0;
          let ajaxA = String.fromCharCode(118,95,49,48,95,109,101,110,116,105,111,110,115,0);
          let u_imageB: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,109,97,114,107,95,113,95,56,57,0),188], [String.fromCharCode(112,114,101,100,101,99,111,100,101,95,103,95,52,49,0),166]]);
          let watchu: Array<any> = [String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,49,95,55,53,0), String.fromCharCode(107,95,55,50,95,103,101,116,115,103,110,99,116,120,110,111,0)];
         profileactiveD -= parseFloat(`${1}`);
         homeinactiveY = `${3 - homeinactiveY.length}`;
         pingd -= parseFloat(`${parseInt(`${pingd}`)}`);
         ajaxA = "1";
         u_imageB.set(`${pingd}`, 2 / (Math.max(10, watchu.length)));
         watchu.push(watchu.length);
      }
      mergerP = `${pathk + 1}`;
      if (connectionX) {
         break;
      }
   } while (((mergerP.length + 4) == 3 && (mergerP.length * parseInt(`${catagoryJ}`)) == 4) && connectionX);
       let orangeuparrowp = String.fromCharCode(115,95,52,56,95,102,105,102,97,0);
      for (let b = 0; b < 2; b++) {
          let darkN = 1.0;
          let chatroombackgrounda = 3.0;
         orangeuparrowp += `${parseInt(`${darkN}`) - 3}`;
         darkN -= 2 << (Math.min(Math.abs(parseInt(`${chatroombackgrounda}`)), 5));
         chatroombackgrounda /= Math.max(2 | parseInt(`${chatroombackgrounda}`), 1);
      }
         orangeuparrowp += "3";
         orangeuparrowp += `${1 - orangeuparrowp.length}`;
      pangle2 = `${pangle2.length}`;
   while (1.87 <= (3.53 / (Math.max(5, diceH))) && 3.53 <= (diceH / (Math.max(5, catagoryJ)))) {
      catagoryJ -= (parseFloat(`${latnF == String.fromCharCode(57,0) ? latnF.length : turnn.length}`));
      break;
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
    isLocked: showControls,
    toggleLock: () => {
      setIsLocked(!isLocked)
    }
  }))

  const changeControlsState = () => {
       let classes_ = 1.0;
    let footballtrophyo = false;
    let analyticC = false;
    let notification1 = String.fromCharCode(100,101,114,105,118,95,107,95,51,52,0);
    let singleK = String.fromCharCode(101,95,49,49,95,112,97,115,119,111,114,100,0);
    let encryptorC = 3.0;
    let goallogox = String.fromCharCode(114,95,56,49,95,104,97,115,104,100,101,115,116,114,111,121,0);
    let assistM: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,115,115,95,106,95,57,56,0),String.fromCharCode(97,100,105,100,95,51,95,51,54,0)], [String.fromCharCode(116,95,52,49,95,118,116,97,98,0),String.fromCharCode(109,95,49,0)], [String.fromCharCode(105,95,51,48,95,99,111,118,101,114,105,110,103,0),String.fromCharCode(112,111,112,117,112,95,116,95,53,48,0)]]);
    let reminder1 = 4.0;
    let x_playerc = String.fromCharCode(116,119,101,97,107,115,95,112,95,51,49,0);
    let libavfilterc = 5.0;
    let annerO = false;
    let subtextc = 4.0;
    let eighteenf = false;
       let graya = 2;
          let rules9: Array<any> = [959, 640];
          let show_ = 4.0;
          let minimizev = 2;
         graya %= Math.max(5, parseInt(`${show_}`));
         rules9.push(minimizev % (Math.max(rules9.length, 9)));
         show_ *= rules9.length;
         minimizev &= minimizev << (Math.min(rules9.length, 5));
      for (let o = 0; o < 2; o++) {
         graya &= graya;
      }
      let usernamer = graya >= 8409684;
      do {
         graya -= graya >> (Math.min(2, Math.abs(graya)));
         if (usernamer) {
            break;
         }
      } while (usernamer && ((2 >> (Math.min(1, Math.abs(graya)))) < 3 || (graya >> (Math.min(Math.abs(2), 1))) < 4));
      assistM = new Map([[`${footballtrophyo}`, ((footballtrophyo ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${encryptorC}`)), 1)))]]);
   if (classes_ >= 4.50) {
      footballtrophyo = (goallogox.length - encryptorC) < 79.72;
   }
      analyticC = 75 > assistM.size || 75 > notification1.length;
   let arrowrightwithtailY = singleK == String.fromCharCode(118,113,57,51,100,113,0);
   do {
      singleK = "3";
      if (arrowrightwithtailY) {
         break;
      }
   } while (arrowrightwithtailY && (5.79 == (1.44 + encryptorC)));
       let issubf: Array<any> = [593, 324];
      let fast2 = issubf.length >= 7522489;
      do {
          let libfabricjniB = String.fromCharCode(101,95,50,49,95,99,111,109,112,114,101,115,115,0);
          let aboutJ = 4.0;
          let submitA: Array<any> = [35, 592];
          let iconbackwhite1 = String.fromCharCode(112,95,52,53,95,103,114,97,110,112,111,115,0);
          let latns = 5.0;
         issubf.push(issubf.length << (Math.min(Math.abs(3), 1)));
         libfabricjniB += `${iconbackwhite1.length + parseInt(`${latns}`)}`;
         aboutJ /= Math.max(1, (String.fromCharCode(68,0) == iconbackwhite1 ? libfabricjniB.length : iconbackwhite1.length));
         submitA = [libfabricjniB.length];
         latns *= 3 * submitA.length;
         if (fast2) {
            break;
         }
      } while (fast2 && ((issubf.length | 1) < 1));
      while (3 >= (issubf.length & 1) && (issubf.length & issubf.length) >= 1) {
          let volumea = 5.0;
          let iconorientationG: Array<any> = [988, 987];
          let iconlogoutn = String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,110,95,56,57,0);
          let closep = String.fromCharCode(115,111,117,114,99,101,115,95,122,95,49,0);
          let resendw: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,115,99,97,110,95,100,95,50,54,0),135], [String.fromCharCode(100,112,110,97,109,101,95,106,95,51,56,0),824]]);
         issubf.push(1);
         volumea += parseFloat(`${iconorientationG.length >> (Math.min(Math.abs(2), 2))}`);
         iconorientationG = [2];
         iconlogoutn += `${iconorientationG.length}`;
         closep = `${closep.length}`;
         resendw.set(iconlogoutn, iconlogoutn.length);
         break;
      }
          let recommendationg = String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,53,95,54,50,0);
         issubf = [(recommendationg == String.fromCharCode(106,0) ? recommendationg.length : issubf.length)];
      goallogox += `${goallogox.length}`;
       let with_nav = String.fromCharCode(117,95,51,52,95,99,104,101,99,107,105,110,103,0);
         with_nav += `${2 | with_nav.length}`;
          let langkeyM: Map<any, any> = new Map([[String.fromCharCode(120,95,55,49,95,101,102,102,101,99,116,115,0),742], [String.fromCharCode(100,111,99,116,111,116,97,108,95,49,95,50,50,0),375]]);
          let middleK = String.fromCharCode(117,95,51,52,95,102,105,110,105,115,101,100,0);
         with_nav += `${langkeyM.size + middleK.length}`;
      for (let o = 0; o < 2; o++) {
         with_nav = `${with_nav.length}`;
      }
      classes_ *= notification1.length % 1;
   if (4.56 == (1.0 * reminder1) && 3.72 == (1.0 * reminder1)) {
       let notificationfillemptyf: Array<any> = [834, 119, 680];
       let defaultlogop = String.fromCharCode(101,112,122,115,95,116,95,54,54,0);
       let libreactnativejniL = 0.0;
       let videojsH = String.fromCharCode(104,95,55,49,95,115,108,111,116,115,0);
       let alertO = false;
      while (2 == videojsH.length) {
         videojsH += `${defaultlogop.length - videojsH.length}`;
         break;
      }
       let empty0: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,121,97,98,108,101,95,56,95,53,55,0),99], [String.fromCharCode(101,95,51,54,95,97,117,116,111,102,105,108,108,0),377]]);
      while (!videojsH.includes(`${alertO}`)) {
         videojsH = `${videojsH.length << (Math.min(Math.abs(2), 2))}`;
         break;
      }
         videojsH = `${((alertO ? 5 : 3) + parseInt(`${libreactnativejniL}`))}`;
      let applications = String.fromCharCode(113,106,119,111,100,0) == defaultlogop;
      do {
         defaultlogop = "3";
         if (applications) {
            break;
         }
      } while ((!alertO) && applications);
      let smallorangemanW = alertO ? !alertO : alertO;
      do {
         alertO = 87.78 <= libreactnativejniL || !alertO;
         if (smallorangemanW) {
            break;
         }
      } while ((3.78 < (3.46 * libreactnativejniL)) && smallorangemanW);
      while (4 < (empty0.size * parseInt(`${libreactnativejniL}`)) || (4 ^ empty0.size) < 1) {
          let moreN = true;
         empty0 = new Map([[`${empty0.size}`, (videojsH == String.fromCharCode(83,0) ? videojsH.length : empty0.size)]]);
         moreN = !moreN;
         break;
      }
       let moduleq = 0.0;
      if (3.44 > (2.69 * libreactnativejniL) && 5.70 > (2.69 * libreactnativejniL)) {
          let libfollyA = String.fromCharCode(98,97,99,107,119,97,114,100,95,120,95,48,0);
          let ballt = 3.0;
          let stylew = false;
         notificationfillemptyf.push(((stylew ? 2 : 2)));
         libfollyA = `${parseInt(`${ballt}`) | 1}`;
         ballt /= Math.max(2, 2);
         stylew = 57.68 <= ballt;
      }
      let vignetteN = 9259838 <= notificationfillemptyf.length;
      do {
         notificationfillemptyf = [(defaultlogop == String.fromCharCode(69,0) ? defaultlogop.length : parseInt(`${libreactnativejniL}`))];
         if (vignetteN) {
            break;
         }
      } while (vignetteN && (3 <= (empty0.size - 1) || (empty0.size - notificationfillemptyf.length) <= 1));
         moduleq *= empty0.size;
      let injuryw = 6266994 >= notificationfillemptyf.length;
      do {
         notificationfillemptyf = [3 << (Math.min(1, videojsH.length))];
         if (injuryw) {
            break;
         }
      } while (injuryw && (notificationfillemptyf.length >= videojsH.length));
       let sinai: Map<any, any> = new Map([[String.fromCharCode(109,95,52,57,95,102,105,108,108,0),false ], [String.fromCharCode(113,112,102,105,108,101,95,50,95,54,48,0),false ]]);
          let defaultlogog: Array<any> = [String.fromCharCode(112,95,52,52,95,101,110,104,97,110,99,101,114,0), String.fromCharCode(117,95,54,49,95,99,111,115,116,105,0), String.fromCharCode(119,101,101,107,95,112,95,49,50,0)];
         sinai.set(`${alertO}`, sinai.size);
         defaultlogog.push(defaultlogog.length);
       let baselinec = String.fromCharCode(103,95,50,51,95,112,114,111,100,117,99,116,105,111,110,0);
      x_playerc += `${parseInt(`${encryptorC}`)}`;
   }
       let homeicons = 5.0;
       let filedy: Map<any, any> = new Map([[String.fromCharCode(98,95,56,48,95,99,97,115,99,97,100,101,100,0),922], [String.fromCharCode(109,95,56,53,95,115,102,116,112,0),554]]);
          let updatesF = 1.0;
         homeicons += parseFloat(`${filedy.size ^ 1}`);
         updatesF += parseFloat(`${parseInt(`${updatesF}`) - parseInt(`${updatesF}`)}`);
         filedy = new Map([[`${filedy.size}`, 3]]);
          let blacklistB = String.fromCharCode(120,95,51,55,95,115,112,101,101,100,104,113,0);
          let predictionarrowu = 1.0;
         homeicons += parseFloat(`${blacklistB.length * parseInt(`${predictionarrowu}`)}`);
       let spinnerN = 0;
       let pause_ = 1;
         filedy.set(`${spinnerN}`, 1 / (Math.max(10, spinnerN)));
         filedy = new Map([[`${filedy.size}`, filedy.size]]);
      x_playerc += `${singleK.length * parseInt(`${encryptorC}`)}`;
      singleK += `${((analyticC ? 3 : 5) | 3)}`;
   for (let u = 0; u < 3; u++) {
       let fill9: Array<any> = [268, 382, 111];
       let renewE = String.fromCharCode(107,95,50,57,95,109,97,107,101,102,105,108,101,0);
       let file1 = String.fromCharCode(98,117,114,115,116,95,106,95,50,56,0);
       let stringsv = String.fromCharCode(97,95,50,54,95,102,114,101,101,122,101,0);
       let relatedv: Array<any> = [329, 873];
          let dicer = String.fromCharCode(98,95,52,57,95,112,101,114,0);
          let statsnomoredatai = 3;
         fill9.push(fill9.length);
         dicer = `${dicer.length - 3}`;
         statsnomoredatai += 1 + dicer.length;
         stringsv = `${file1.length % (Math.max(3, 1))}`;
         relatedv.push(stringsv.length);
          let yellowanimationlivez = 4;
          let s_countg: Array<any> = [956, 273, 948];
         renewE = `${renewE.length}`;
         yellowanimationlivez %= Math.max(2, yellowanimationlivez | 3);
         s_countg.push(s_countg.length);
          let libnmsg: Array<any> = [491, 581];
         renewE += `${(String.fromCharCode(117,0) == stringsv ? fill9.length : stringsv.length)}`;
         libnmsg.push(libnmsg.length / (Math.max(libnmsg.length, 5)));
          let light2 = 3.0;
         file1 = `${parseInt(`${light2}`)}`;
      let statisticsS = 7727208 <= relatedv.length;
      do {
         relatedv.push(stringsv.length);
         if (statisticsS) {
            break;
         }
      } while (statisticsS && (1 <= (file1.length >> (Math.min(5, relatedv.length))) || (1 >> (Math.min(1, file1.length))) <= 2));
      if ((file1.length >> (Math.min(Math.abs(4), 1))) <= 4 && (4 >> (Math.min(3, fill9.length))) <= 4) {
         file1 = `${relatedv.length}`;
      }
         stringsv = `${stringsv.length + file1.length}`;
      while ((fill9.length - 4) == 2) {
         fill9.push(2);
         break;
      }
          let libavutilP = 0.0;
          let combinedY = 2.0;
          let static_p1 = true;
         relatedv = [3];
         libavutilP -= parseFloat(`${1}`);
         combinedY += (parseFloat(`${parseInt(`${combinedY}`) ^ (static_p1 ? 5 : 3)}`));
         static_p1 = 61.61 < libavutilP;
         relatedv.push(fill9.length);
         renewE = `${file1.length}`;
      let editL = relatedv.length <= 6888476;
      do {
         relatedv.push(fill9.length << (Math.min(Math.abs(1), 5)));
         if (editL) {
            break;
         }
      } while (((4 ^ renewE.length) == 4 || 4 == (relatedv.length ^ renewE.length)) && editL);
          let bootsplashC = 5.0;
          let defaultprofilepicz = String.fromCharCode(107,101,121,115,112,101,99,95,115,95,49,48,0);
         stringsv += `${2 & renewE.length}`;
         bootsplashC -= defaultprofilepicz.length;
         defaultprofilepicz += `${parseInt(`${bootsplashC}`)}`;
      notification1 = `${parseInt(`${classes_}`)}`;
   }
       let switch_ce = 4.0;
       let iconpointscoreW = String.fromCharCode(100,95,53,57,95,110,116,115,115,0);
       let navigations = 0.0;
      for (let m = 0; m < 2; m++) {
          let eact_ = 2.0;
          let awayj: Array<any> = [291, 255, 635];
          let update_plq = String.fromCharCode(109,97,116,114,105,120,105,110,103,95,103,95,53,57,0);
          let heart4 = String.fromCharCode(101,95,56,55,95,115,121,109,109,101,116,114,105,99,0);
          let androidr = true;
         switch_ce -= update_plq.length;
         eact_ /= Math.max(parseFloat(`${awayj.length * 1}`), 3);
         awayj.push(awayj.length / (Math.max(2, parseInt(`${eact_}`))));
         update_plq = "1";
         heart4 = `${heart4.length}`;
         androidr = 30 <= heart4.length;
      }
         navigations -= parseFloat(`${parseInt(`${switch_ce}`)}`);
         iconpointscoreW += `${1 | parseInt(`${navigations}`)}`;
      if (navigations >= parseFloat(`${iconpointscoreW.length}`)) {
         navigations /= Math.max(parseFloat(`${parseInt(`${switch_ce}`) + parseInt(`${navigations}`)}`), 4);
      }
       let auto_uz = 3.0;
         iconpointscoreW += `${parseInt(`${switch_ce}`) / 2}`;
       let rocketL = true;
      for (let a = 0; a < 1; a++) {
          let mailU = 3.0;
          let videobufferloadingT = 0.0;
          let halfu = 0.0;
         auto_uz += (parseFloat(`${(rocketL ? 4 : 3) % (Math.max(parseInt(`${mailU}`), 7))}`));
         mailU -= parseFloat(`${1 + parseInt(`${videobufferloadingT}`)}`);
         videobufferloadingT /= Math.max(2, parseFloat(`${3 + parseInt(`${videobufferloadingT}`)}`));
         halfu /= Math.max(parseInt(`${videobufferloadingT}`) | 2, 3);
      }
       let forwardP = String.fromCharCode(118,102,114,101,101,95,108,95,55,54,0);
      analyticC = iconpointscoreW.length < singleK.length;

    setShowControls(!showControls);

       let defaultteamJ = String.fromCharCode(100,95,56,52,95,104,119,114,97,110,100,0);
         defaultteamJ = "1";
      while (defaultteamJ.length > 2) {
          let yellowtoredv = false;
          let libcxxcomponentsN: Map<any, any> = new Map([[String.fromCharCode(120,106,112,101,103,95,117,95,50,57,0),String.fromCharCode(121,95,56,53,95,104,105,103,104,98,105,116,115,0)], [String.fromCharCode(114,95,53,57,95,109,111,100,101,114,110,0),String.fromCharCode(118,95,57,53,95,116,101,115,116,114,101,115,117,108,116,0)], [String.fromCharCode(100,95,49,52,95,115,112,101,99,116,105,109,101,0),String.fromCharCode(115,105,103,110,117,109,95,109,95,57,56,0)]]);
         defaultteamJ = `${libcxxcomponentsN.size & 1}`;
         break;
      }
      if (defaultteamJ.length <= 5) {
         defaultteamJ += `${(defaultteamJ == String.fromCharCode(50,0) ? defaultteamJ.length : defaultteamJ.length)}`;
      }
      analyticC = goallogox.length > classes_;
      assistM.set(`${analyticC}`, x_playerc.length);
       let audienceI: Array<any> = [583, 113, 5];
       let t_titleJ = String.fromCharCode(114,101,116,97,105,110,115,95,118,95,49,53,0);
       let materialY = true;
         t_titleJ = `${t_titleJ.length}`;
       let complete0 = String.fromCharCode(120,95,57,55,95,115,98,114,100,115,112,0);
       let baselineG = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,49,95,50,48,0);
      for (let v = 0; v < 1; v++) {
         t_titleJ = "1";
      }
       let filly = String.fromCharCode(105,103,110,101,116,116,101,95,120,95,56,51,0);
      let sourceo = complete0 == String.fromCharCode(101,121,105,0);
      do {
         complete0 = `${(1 + (materialY ? 3 : 4))}`;
         if (sourceo) {
            break;
         }
      } while (sourceo && (!complete0.startsWith(`${baselineG.length}`)));
         t_titleJ = `${filly.length}`;
         t_titleJ = `${t_titleJ.length}`;
          let cancelJ = 2.0;
         baselineG += "3";
         cancelJ *= 2;
         audienceI = [1 << (Math.min(2, filly.length))];
      x_playerc = `${parseInt(`${classes_}`) | 1}`;
   for (let o = 0; o < 1; o++) {
      analyticC = String.fromCharCode(67,0) == x_playerc;
   }
      assistM.set(`${libavfilterc}`, parseInt(`${libavfilterc}`));
   for (let s = 0; s < 1; s++) {
      notification1 = "2";
   }
       let sellmathbackgroundx: Map<any, any> = new Map([[String.fromCharCode(122,95,49,50,95,115,112,108,105,116,116,101,100,0),484], [String.fromCharCode(112,114,101,102,105,120,95,112,95,51,49,0),356], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,112,95,56,49,0),625]]);
       let blacklist4 = String.fromCharCode(114,97,110,100,101,110,95,117,95,50,57,0);
       let libhermesK = 2;
      let pause6 = 5284411 <= libhermesK;
      do {
         libhermesK <<= Math.min(Math.abs(sellmathbackgroundx.size + blacklist4.length), 2);
         if (pause6) {
            break;
         }
      } while (pause6 && (libhermesK >= blacklist4.length));
         sellmathbackgroundx.set(`${blacklist4}`, sellmathbackgroundx.size ^ 2);
      while ((3 * blacklist4.length) <= 1 || 5 <= (3 * blacklist4.length)) {
         blacklist4 = `${libhermesK}`;
         break;
      }
      while (sellmathbackgroundx.get(`${libhermesK}`) == null) {
         sellmathbackgroundx.set(`${libhermesK}`, 3 ^ blacklist4.length);
         break;
      }
          let predictionarrow_ = String.fromCharCode(105,95,52,51,95,101,120,116,101,110,100,105,110,103,0);
         libhermesK &= sellmathbackgroundx.size;
         predictionarrow_ = `${predictionarrow_.length}`;
      while (5 <= libhermesK) {
          let gifgoalW = 4;
          let yellowtored7 = 1.0;
          let cedbadcebfbfbfbcfecbcD = String.fromCharCode(115,95,50,53,95,101,110,99,111,100,101,109,98,0);
          let greyB: Array<any> = [580, 122, 82];
         blacklist4 = `${2 << (Math.min(4, cedbadcebfbfbfbcfecbcD.length))}`;
         gifgoalW <<= Math.min(Math.abs(gifgoalW), 5);
         yellowtored7 *= parseFloat(`${greyB.length ^ parseInt(`${yellowtored7}`)}`);
         cedbadcebfbfbfbcfecbcD = `${1 * parseInt(`${yellowtored7}`)}`;
         greyB.push(2);
         break;
      }
          let stepH: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,114,101,97,100,115,0),false ], [String.fromCharCode(112,95,53,55,95,114,97,105,115,101,0),false ], [String.fromCharCode(109,95,53,57,95,99,111,110,116,111,117,114,0),false ]]);
         libhermesK &= (String.fromCharCode(78,0) == blacklist4 ? blacklist4.length : sellmathbackgroundx.size);
         stepH.set(`${stepH.size}`, stepH.size);
          let gift3 = String.fromCharCode(112,95,56,54,95,115,99,104,117,110,99,107,0);
         blacklist4 = `${blacklist4.length << (Math.min(Math.abs(2), 4))}`;
         gift3 = "3";
          let bottomj = 3;
         sellmathbackgroundx.set(blacklist4, 3 - blacklist4.length);
         bottomj |= bottomj;
      footballtrophyo = x_playerc == goallogox;
       let matchesX = String.fromCharCode(105,108,108,101,103,97,108,95,51,95,53,57,0);
       let basev = 2.0;
       let bingW = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,49,95,55,49,0);
      while ((parseFloat(`${bingW.length}`) * basev) <= 3.15 && (basev * 3.15) <= 5.98) {
          let groupY = 0;
          let crownd = String.fromCharCode(103,95,54,49,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0);
          let albumq = 1;
          let librrcw = String.fromCharCode(105,95,49,51,95,119,114,105,116,101,99,108,101,97,114,0);
          let videoX: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,101,100,95,106,95,52,50,0),447], [String.fromCharCode(106,95,51,53,95,117,110,114,101,103,105,115,116,101,114,101,100,0),526], [String.fromCharCode(116,95,50,57,95,116,111,108,101,114,97,110,99,101,0),428]]);
         basev *= parseFloat(`${videoX.size & 1}`);
         groupY >>= Math.min(2, Math.abs(2 / (Math.max(1, librrcw.length))));
         crownd = `${groupY}`;
         albumq &= albumq >> (Math.min(Math.abs(3), 1));
         librrcw += "3";
         videoX.set(librrcw, librrcw.length % (Math.max(2, 8)));
         break;
      }
      for (let s = 0; s < 1; s++) {
         matchesX = `${2 | bingW.length}`;
      }
       let shootyesgoalF = String.fromCharCode(109,97,116,99,104,101,100,95,104,95,53,54,0);
       let countdowno = String.fromCharCode(113,95,49,56,95,118,105,100,101,111,114,101,110,100,101,114,101,114,0);
         bingW = `${2 - bingW.length}`;
         matchesX = `${(matchesX == String.fromCharCode(104,0) ? shootyesgoalF.length : matchesX.length)}`;
      notification1 += `${parseInt(`${basev}`)}`;
   if ((parseInt(`${reminder1}`) - notification1.length) == 1 && 3 == (1 | notification1.length)) {
      reminder1 *= parseFloat(`${parseInt(`${reminder1}`)}`);
   }
       let viewerk = 2.0;
       let episodesp = true;
         viewerk *= parseFloat(`${3 ^ parseInt(`${viewerk}`)}`);
      while ((viewerk * 4.69) <= 5.60 || viewerk <= 4.69) {
         episodesp = viewerk < 89.41 || !episodesp;
         break;
      }
         episodesp = 70.72 < viewerk;
      if (4.16 >= viewerk && 3.41 >= (viewerk - 4.16)) {
         viewerk -= (parseFloat(`${(episodesp ? 2 : 3) / (Math.max(parseInt(`${viewerk}`), 9))}`));
      }
          let leakcheckerl: Array<any> = [204, 479];
          let n_imaget = 3.0;
          let basketballplayerplaceholderl = String.fromCharCode(112,95,55,95,108,97,98,101,108,115,0);
         episodesp = !episodesp;
         leakcheckerl.push(leakcheckerl.length);
         n_imaget /= Math.max(leakcheckerl.length - 2, 4);
         basketballplayerplaceholderl = "1";
         episodesp = 40.35 > viewerk;
      goallogox += "2";
      analyticC = encryptorC > 41.77;
    delayControls();
  };

  const clearHidingDelay = () => {
       let networkT = true;
    let minit_yY = 5.0;
    let whiteticku = String.fromCharCode(109,105,110,117,116,101,115,95,111,95,53,48,0);
    let mutedo = String.fromCharCode(105,95,51,51,95,109,112,101,103,112,115,0);
    let enewinterstitialH: Array<any> = [484, 587, 68];
    let condensedw = String.fromCharCode(97,108,97,109,111,102,105,114,101,95,106,95,49,48,48,0);
    let suggestionI = 4;
    let mbridgeS = 2.0;
    let cornerkick6 = true;
    let cornerC = 2.0;
   while (mbridgeS < 5.63) {
      mbridgeS *= whiteticku.length;
      break;
   }
   while (!whiteticku.includes(`${enewinterstitialH.length}`)) {
      whiteticku = `${enewinterstitialH.length}`;
      break;
   }
      mutedo = "2";
      minit_yY += 1 + condensedw.length;
   for (let c = 0; c < 3; c++) {
      enewinterstitialH = [mutedo.length | enewinterstitialH.length];
   }
       let tail6 = String.fromCharCode(119,95,55,48,95,98,117,105,108,116,105,110,0);
       let detailsq = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,54,95,56,52,0);
       let goallogoe: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,49,95,55,53,0),757], [String.fromCharCode(101,112,115,105,108,111,110,95,121,95,49,0),729]]);
         detailsq = `${tail6.length}`;
      let configz = String.fromCharCode(116,109,95,118,99,108,0) == detailsq;
      do {
         detailsq += `${goallogoe.size / (Math.max(2, tail6.length))}`;
         if (configz) {
            break;
         }
      } while ((4 > tail6.length) && configz);
         goallogoe = new Map([[detailsq, tail6.length]]);
      let chinaa = tail6.length >= 9157989;
      do {
          let sellmathbackgroundU: Map<any, any> = new Map([[String.fromCharCode(110,111,110,102,97,116,97,108,95,102,95,55,48,0),452], [String.fromCharCode(105,109,112,111,114,116,101,100,95,107,95,55,55,0),263]]);
          let downloadedu: Array<any> = [266, 296, 692];
          let rewindc = String.fromCharCode(109,97,110,116,105,115,115,97,115,95,102,95,50,55,0);
         tail6 += `${(String.fromCharCode(112,0) == detailsq ? rewindc.length : detailsq.length)}`;
         sellmathbackgroundU = new Map([[`${sellmathbackgroundU.size}`, sellmathbackgroundU.size]]);
         downloadedu.push(3 - sellmathbackgroundU.size);
         rewindc += `${sellmathbackgroundU.size / (Math.max(downloadedu.length, 8))}`;
         if (chinaa) {
            break;
         }
      } while (chinaa && (detailsq == String.fromCharCode(73,0)));
          let turnp = String.fromCharCode(112,95,57,55,95,112,117,108,115,101,0);
          let notificationt = 1.0;
         tail6 += "1";
         turnp += "2";
         notificationt -= (parseFloat(`${turnp == String.fromCharCode(98,0) ? turnp.length : parseInt(`${notificationt}`)}`));
         goallogoe = new Map([[`${goallogoe.size}`, goallogoe.size]]);
          let qaagV = 1.0;
          let libyogaM = String.fromCharCode(116,95,56,53,95,116,111,107,101,110,110,102,116,116,120,0);
          let favoriten = false;
         detailsq += `${1 & libyogaM.length}`;
         qaagV /= Math.max(parseInt(`${qaagV}`) >> (Math.min(1, Math.abs(2))), 2);
         libyogaM = `${(parseInt(`${qaagV}`) & (favoriten ? 2 : 1))}`;
         favoriten = !favoriten;
          let libglog6 = 4.0;
          let defaultroombgo = 4;
          let mbbid8 = false;
         detailsq = "1";
         libglog6 /= Math.max((parseFloat(`${(mbbid8 ? 3 : 4) & defaultroombgo}`)), 5);
         defaultroombgo /= Math.max(4, 1);
         mbbid8 = !mbbid8;
      if (!detailsq.startsWith(`${goallogoe.size}`)) {
          let exampleimage1: Map<any, any> = new Map([[String.fromCharCode(116,95,51,48,95,108,105,115,116,0),983], [String.fromCharCode(98,97,99,107,105,110,103,95,57,95,49,50,0),603]]);
          let shootyesgoalY = false;
         detailsq = `${exampleimage1.size ^ 3}`;
      }
      mutedo = `${parseInt(`${minit_yY}`)}`;
      whiteticku = `${(condensedw == String.fromCharCode(76,0) ? enewinterstitialH.length : condensedw.length)}`;
   while (4.13 == (whiteticku.length + mbridgeS)) {
      mbridgeS *= parseInt(`${mbridgeS}`) % 3;
      break;
   }
   while (2 < whiteticku.length || condensedw == String.fromCharCode(105,0)) {
      whiteticku += `${suggestionI}`;
      break;
   }
      enewinterstitialH.push(whiteticku.length);
   let xnewinterstitial_ = networkT ? !networkT : networkT;
   do {
      networkT = String.fromCharCode(83,0) == mutedo;
      if (xnewinterstitial_) {
         break;
      }
   } while (xnewinterstitial_ && (5.83 > mbridgeS));
   if (whiteticku.includes(`${minit_yY}`)) {
      whiteticku += `${condensedw.length}`;
   }
      whiteticku = "2";
   while (!cornerkick6 || 3 > condensedw.length) {
       let subtextd = false;
       let interstitialI = 2.0;
         interstitialI += parseFloat(`${parseInt(`${interstitialI}`) * 3}`);
         subtextd = !subtextd;
         subtextd = 57.64 >= interstitialI && !subtextd;
          let mailp = String.fromCharCode(122,101,114,111,98,108,111,98,95,98,95,55,50,0);
         subtextd = interstitialI <= parseFloat(`${mailp.length}`);
       let greyarrowupH = String.fromCharCode(100,95,56,57,95,114,101,115,101,110,116,97,116,105,111,110,0);
       let rewardr = String.fromCharCode(113,95,55,49,95,114,111,116,111,0);
      for (let h = 0; h < 3; h++) {
         greyarrowupH = `${rewardr.length}`;
      }
      cornerkick6 = whiteticku.length >= 3 || suggestionI >= 3;
      break;
   }
      minit_yY -= 1;
      mutedo += `${(String.fromCharCode(100,0) == mutedo ? mutedo.length : parseInt(`${mbridgeS}`))}`;
   if (5 >= (1 % (Math.max(4, mutedo.length))) || (minit_yY / (Math.max(mutedo.length, 1))) >= 1.73) {
      minit_yY += parseInt(`${minit_yY}`) / 2;
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let twittery = String.fromCharCode(109,97,105,110,95,120,95,51,52,0);
    let mapbuffer5: Array<any> = [String.fromCharCode(105,108,111,103,95,57,95,49,48,48,0), String.fromCharCode(102,95,56,95,97,114,99,104,105,118,101,0), String.fromCharCode(99,95,54,48,95,99,101,110,116,114,101,0)];
    let aboutF: Map<any, any> = new Map([[String.fromCharCode(114,101,118,101,97,108,95,116,95,57,50,0),String.fromCharCode(104,101,99,107,95,51,95,56,50,0)], [String.fromCharCode(99,97,108,108,111,99,95,51,95,49,48,48,0),String.fromCharCode(100,99,115,116,114,95,48,95,52,57,0)], [String.fromCharCode(101,100,116,115,95,119,95,54,57,0),String.fromCharCode(115,111,108,118,101,114,95,49,95,50,56,0)]]);
    let codeB = String.fromCharCode(110,110,109,111,100,95,103,95,54,49,0);
    let templateprocessorI = String.fromCharCode(117,95,49,49,95,99,104,101,99,107,101,114,0);
    let arrowrightwithtailz: Array<any> = [342, 409];
    let filledo: Map<any, any> = new Map([[String.fromCharCode(115,95,53,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0),650], [String.fromCharCode(114,95,53,50,95,99,111,108,111,114,0),562]]);
    let canvasO: Array<any> = [239, 460];
    let country6 = String.fromCharCode(111,98,115,101,114,118,101,114,95,55,95,49,56,0);
    let template_xwF = String.fromCharCode(114,101,112,111,114,116,101,114,95,118,95,49,55,0);
    let footballfiledlayoutW = 2;
    let profileactive2 = String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,106,95,57,52,0);
   while (country6.startsWith(`${template_xwF.length}`)) {
      template_xwF += `${twittery.length}`;
      break;
   }
       let awayteamfieldb = true;
      while (awayteamfieldb) {
         awayteamfieldb = !awayteamfieldb;
         break;
      }
      if (!awayteamfieldb || awayteamfieldb) {
          let leaguel = String.fromCharCode(99,95,54,53,95,114,101,115,116,114,105,99,116,105,111,110,0);
          let progressP = String.fromCharCode(98,95,51,50,95,97,116,116,114,115,0);
         awayteamfieldb = 60 > progressP.length;
         leaguel = `${leaguel.length}`;
         progressP += `${1 + leaguel.length}`;
      }
         awayteamfieldb = (!awayteamfieldb ? !awayteamfieldb : awayteamfieldb);
      aboutF.set(twittery, 3);
   let libreact7 = canvasO.length <= 9509123;
   do {
       let frame_lca = String.fromCharCode(105,100,99,105,110,95,57,95,49,56,0);
         frame_lca += `${frame_lca.length}`;
      if (!frame_lca.endsWith(`${frame_lca.length}`)) {
         frame_lca = `${frame_lca.length - frame_lca.length}`;
      }
      let homeactiveB = frame_lca == String.fromCharCode(100,104,119,110,0);
      do {
          let minimizeC = true;
          let predictiondefaultg = String.fromCharCode(112,97,114,116,105,97,108,95,106,95,55,0);
          let long_xs = 5;
          let zhuboP = String.fromCharCode(113,95,54,50,95,101,118,115,105,103,110,97,108,0);
         frame_lca = `${zhuboP.length}`;
         minimizeC = String.fromCharCode(99,0) == predictiondefaultg || long_xs == 83;
         predictiondefaultg += `${(long_xs - (minimizeC ? 4 : 3))}`;
         zhuboP += `${long_xs | predictiondefaultg.length}`;
         if (homeactiveB) {
            break;
         }
      } while (homeactiveB && (frame_lca.length == 2));
      canvasO = [country6.length % 2];
      if (libreact7) {
         break;
      }
   } while (libreact7 && ((canvasO.length - 1) < 5 || (canvasO.length - footballfiledlayoutW) < 1));
      aboutF = new Map([[`${arrowrightwithtailz.length}`, 1]]);
      mapbuffer5 = [2];
   let settingf = 5789655 >= footballfiledlayoutW;
   do {
      footballfiledlayoutW /= Math.max(country6.length % (Math.max(4, twittery.length)), 4);
      if (settingf) {
         break;
      }
   } while ((5 > (4 + template_xwF.length)) && settingf);
   let predictionarrowr = country6 == String.fromCharCode(116,117,54,50,104,51,116,116,50,110,0);
   do {
      country6 += `${arrowrightwithtailz.length}`;
      if (predictionarrowr) {
         break;
      }
   } while ((footballfiledlayoutW < 1) && predictionarrowr);

      if (delayValue === undefined) {

   while ((template_xwF.length + mapbuffer5.length) <= 4 || 4 <= (mapbuffer5.length + template_xwF.length)) {
      template_xwF += `${country6.length << (Math.min(4, mapbuffer5.length))}`;
      break;
   }
   if (2 <= (5 - footballfiledlayoutW) && (5 - template_xwF.length) <= 2) {
      footballfiledlayoutW /= Math.max(1, profileactive2.length % 3);
   }
   for (let l = 0; l < 1; l++) {
      template_xwF += `${canvasO.length + country6.length}`;
   }
   let storeF = 6698892 >= footballfiledlayoutW;
   do {
       let vietnamk = String.fromCharCode(120,95,50,51,95,97,118,102,109,116,0);
       let ying_: Array<any> = [767, 540];
       let sharewhite1 = 5.0;
      if (!vietnamk.includes(`${sharewhite1}`)) {
          let upgradeq = String.fromCharCode(106,95,51,53,95,97,114,103,98,0);
          let gmailR: Array<any> = [303, 218, 742];
          let binddatash = String.fromCharCode(99,97,99,104,101,115,95,122,95,54,54,0);
          let assist8 = 2;
          let selectedp = String.fromCharCode(99,95,53,51,95,99,111,108,111,110,115,0);
         sharewhite1 *= gmailR.length / (Math.max(2, 7));
         upgradeq = `${selectedp.length}`;
         gmailR.push(3);
         binddatash = `${binddatash.length + 2}`;
         assist8 -= assist8 / (Math.max(binddatash.length, 6));
         selectedp += `${assist8 | selectedp.length}`;
      }
         vietnamk += `${vietnamk.length | ying_.length}`;
          let start = 4.0;
          let runtimeschedulerL = 3.0;
          let roomF = String.fromCharCode(102,95,51,51,95,98,117,116,116,101,114,0);
         ying_.push(parseInt(`${start}`) | 3);
         start += parseFloat(`${parseInt(`${runtimeschedulerL}`)}`);
         runtimeschedulerL -= parseInt(`${runtimeschedulerL}`) / 1;
         roomF += `${parseInt(`${runtimeschedulerL}`) << (Math.min(Math.abs(2), 2))}`;
       let mergerZ = String.fromCharCode(109,95,53,48,95,105,110,116,114,97,120,104,117,102,0);
       let malaysiaq = String.fromCharCode(121,95,53,56,95,102,111,117,110,100,0);
         ying_ = [ying_.length >> (Math.min(Math.abs(2), 4))];
      if (malaysiaq.length > ying_.length) {
         malaysiaq = `${vietnamk.length}`;
      }
         malaysiaq = `${malaysiaq.length >> (Math.min(Math.abs(3), 1))}`;
       let windb = 0;
      let optionsY = String.fromCharCode(119,55,115,113,112,0) == vietnamk;
      do {
         vietnamk = `${(mergerZ == String.fromCharCode(117,0) ? vietnamk.length : mergerZ.length)}`;
         if (optionsY) {
            break;
         }
      } while ((4.51 == (sharewhite1 * vietnamk.length) && 4.51 == (sharewhite1 * vietnamk.length)) && optionsY);
      footballfiledlayoutW &= templateprocessorI.length;
      if (storeF) {
         break;
      }
   } while ((profileactive2.endsWith(`${footballfiledlayoutW}`)) && storeF);
   while (profileactive2.startsWith(twittery)) {
      profileactive2 = `${aboutF.size & 3}`;
      break;
   }
   let baseK = arrowrightwithtailz.length >= 7427540;
   do {
       let checkboxW = 0.0;
       let episodek = 0;
       let emojiheartY = String.fromCharCode(113,95,48,95,110,117,109,101,114,111,0);
       let mimeq = String.fromCharCode(98,95,57,49,95,97,114,109,118,0);
          let sharer = false;
          let binddatasl = String.fromCharCode(102,95,56,48,95,99,111,110,99,101,97,108,0);
         checkboxW *= (parseFloat(`${String.fromCharCode(95,0) == binddatasl ? episodek : binddatasl.length}`));
         sharer = !sharer;
          let whiteanimationliveK: Array<any> = [829, 44];
         episodek ^= mimeq.length >> (Math.min(3, Math.abs(parseInt(`${checkboxW}`))));
         whiteanimationliveK = [whiteanimationliveK.length ^ whiteanimationliveK.length];
          let home9 = 5;
         mimeq = `${home9}`;
         emojiheartY = `${emojiheartY.length}`;
          let matches2 = String.fromCharCode(112,95,54,49,95,99,111,108,117,109,110,108,105,115,116,0);
          let zhengpianL = String.fromCharCode(105,95,56,57,95,109,105,110,113,0);
          let heartV = String.fromCharCode(103,95,55,51,95,117,110,114,101,102,99,111,117,110,116,0);
         emojiheartY = `${mimeq.length | 3}`;
         matches2 = `${matches2.length}`;
         zhengpianL = `${1 + zhengpianL.length}`;
         heartV = `${heartV.length}`;
         checkboxW *= parseFloat(`${emojiheartY.length}`);
         episodek /= Math.max(1, 3 / (Math.max(episodek, 5)));
      for (let u = 0; u < 3; u++) {
          let latnE = String.fromCharCode(99,111,108,100,95,117,95,56,48,0);
         mimeq += `${mimeq.length % 3}`;
         latnE += `${1 % (Math.max(3, latnE.length))}`;
      }
          let utilss = true;
          let shared5 = 4.0;
          let firebasez = String.fromCharCode(99,97,112,116,117,114,101,114,95,108,95,56,49,0);
         episodek -= parseInt(`${checkboxW}`) ^ 2;
         utilss = !utilss || shared5 >= 61.68;
         shared5 *= parseFloat(`${parseInt(`${shared5}`) + firebasez.length}`);
         firebasez = `${parseInt(`${shared5}`) / 2}`;
       let liveshareU = 1.0;
       let scorepopsoundI = 0.0;
      for (let f = 0; f < 2; f++) {
         scorepopsoundI /= Math.max(parseFloat(`${3 | parseInt(`${liveshareU}`)}`), 3);
      }
      while (3.79 >= (checkboxW * 4.91) && (mimeq.length ^ 4) >= 1) {
         checkboxW *= parseFloat(`${mimeq.length + 2}`);
         break;
      }
      arrowrightwithtailz.push(1 % (Math.max(10, mapbuffer5.length)));
      if (baseK) {
         break;
      }
   } while (((arrowrightwithtailz.length * 5) > 4 && (country6.length * 5) > 2) && baseK);
       let baselineF = 2;
       let imagenetworkerrn = String.fromCharCode(109,101,109,100,98,95,48,95,55,50,0);
       let views1 = String.fromCharCode(101,95,57,54,95,100,115,112,117,116,105,108,0);
      if (views1.length > imagenetworkerrn.length) {
          let ballS = 1.0;
          let codegeny = 3.0;
          let topont = 4;
          let ewardeds = String.fromCharCode(113,95,57,51,95,99,111,101,102,102,115,0);
         imagenetworkerrn = `${parseInt(`${ballS}`)}`;
         ballS *= topont & 1;
         codegeny += parseFloat(`${parseInt(`${codegeny}`) << (Math.min(Math.abs(2), 3))}`);
         topont /= Math.max(2, ewardeds.length);
         ewardeds = `${topont}`;
      }
      if (!imagenetworkerrn.endsWith(`${baselineF}`)) {
         imagenetworkerrn = `${(views1 == String.fromCharCode(87,0) ? views1.length : baselineF)}`;
      }
      let telegram3 = 6925412 >= baselineF;
      do {
          let qaagP = String.fromCharCode(100,95,51,52,95,111,112,97,99,105,116,121,0);
          let iconclosewhitewithbg1 = 1;
          let reactt = String.fromCharCode(107,95,57,57,95,97,110,116,105,97,108,105,97,115,105,110,103,0);
          let uimanageru = 3.0;
         baselineF -= imagenetworkerrn.length;
         qaagP = `${iconclosewhitewithbg1}`;
         iconclosewhitewithbg1 -= (String.fromCharCode(103,0) == qaagP ? iconclosewhitewithbg1 : qaagP.length);
         reactt += `${qaagP.length % 2}`;
         uimanageru /= Math.max(qaagP.length % 3, 3);
         if (telegram3) {
            break;
         }
      } while (telegram3 && (imagenetworkerrn.startsWith(`${baselineF}`)));
      let desc_ = views1 == String.fromCharCode(112,100,98,110,0);
      do {
         views1 += `${imagenetworkerrn.length / 1}`;
         if (desc_) {
            break;
         }
      } while (desc_ && (imagenetworkerrn == String.fromCharCode(84,0) || views1 != String.fromCharCode(86,0)));
       let networkv = String.fromCharCode(115,95,54,51,95,97,112,112,101,97,114,0);
       let anytimeM = String.fromCharCode(108,105,102,116,95,97,95,51,55,0);
      while (anytimeM.length > networkv.length) {
          let anytime5 = 5.0;
          let playercommon3: Array<any> = [90, 439];
          let black4 = String.fromCharCode(108,98,108,95,120,95,53,49,0);
         networkv = `${networkv.length}`;
         anytime5 /= Math.max(parseInt(`${anytime5}`) * black4.length, 5);
         playercommon3.push(playercommon3.length & parseInt(`${anytime5}`));
         black4 = `${playercommon3.length / 2}`;
         break;
      }
      while (1 < (4 ^ views1.length)) {
         views1 += `${2 & networkv.length}`;
         break;
      }
          let mime6 = String.fromCharCode(101,120,112,108,111,114,101,114,95,97,95,56,0);
          let filterK = 4.0;
         baselineF >>= Math.min(Math.abs(3), 2);
         mime6 = `${1 % (Math.max(1, parseInt(`${filterK}`)))}`;
         filterK += parseInt(`${filterK}`);
         imagenetworkerrn += `${anytimeM.length + 1}`;
      profileactive2 += `${imagenetworkerrn.length}`;
        if (showSlider === 'none' && !paused) {

      codeB = `${twittery.length & 3}`;
       let currentj = 0;
       let modalv = 5.0;
         modalv *= parseInt(`${modalv}`);
         modalv += currentj << (Math.min(Math.abs(parseInt(`${modalv}`)), 2));
          let eacth = 5.0;
         currentj /= Math.max(currentj / (Math.max(parseInt(`${modalv}`), 3)), 3);
         eacth -= 1 & parseInt(`${eacth}`);
         modalv *= parseInt(`${modalv}`);
          let invitep = 2;
          let neonh = 2.0;
         modalv -= currentj / (Math.max(2, 2));
         invitep += invitep % (Math.max(5, parseInt(`${neonh}`)));
         neonh -= parseInt(`${neonh}`) & 1;
         modalv *= 1;
      twittery = `${2 / (Math.max(6, codeB.length))}`;
   let icontransferclubZ = codeB.length <= 7004546;
   do {
      codeB += "1";
      if (icontransferclubZ) {
         break;
      }
   } while (icontransferclubZ && (mapbuffer5.length > codeB.length));
   for (let i = 0; i < 2; i++) {
      codeB += `${arrowrightwithtailz.length >> (Math.min(Math.abs(1), 5))}`;
   }
   while ((2 + filledo.size) > 5 || 1 > (2 + filledo.size)) {
      filledo.set(templateprocessorI, canvasO.length / 1);
      break;
   }
   let sourceE = 4947630 >= templateprocessorI.length;
   do {
      templateprocessorI = "2";
      if (sourceE) {
         break;
      }
   } while (sourceE && (templateprocessorI.length <= 2));
   if (3 >= filledo.size) {
      filledo = new Map([[`${mapbuffer5.length}`, mapbuffer5.length]]);
   }
          setShowControls(false)
        }
      } else {

   if ((1 * aboutF.size) > 5 && 1 > (codeB.length * aboutF.size)) {
       let fileG = 0.0;
       let completeG: Map<any, any> = new Map([[String.fromCharCode(107,97,108,109,97,110,95,103,95,52,52,0),String.fromCharCode(122,95,53,54,95,117,110,114,111,117,110,100,101,100,0)], [String.fromCharCode(111,95,56,53,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0),String.fromCharCode(116,95,53,56,95,108,101,118,97,114,105,110,116,0)]]);
       let time_lg: Array<any> = [348, 105, 817];
       let diceG = true;
         fileG += 3;
         time_lg.push(parseInt(`${fileG}`) * 3);
      while (5.54 > fileG || (5.54 - fileG) > 1.96) {
          let reportP = 5.0;
          let starN: Array<any> = [458, 986, 65];
          let armvaZ = String.fromCharCode(98,114,101,97,107,112,111,105,110,116,95,112,95,57,56,0);
         diceG = (parseInt(`${reportP}`) / (Math.max(armvaZ.length, 6))) >= 60;
         reportP += parseFloat(`${3}`);
         starN = [1];
         break;
      }
       let brightness7 = 2.0;
       let short__gf = 4.0;
      for (let f = 0; f < 1; f++) {
         short__gf *= parseInt(`${fileG}`);
      }
      if (diceG) {
         brightness7 *= (parseInt(`${fileG}`) + (diceG ? 1 : 2));
      }
         diceG = brightness7 >= 15.3;
      if (Array.from(completeG.values()).includes(short__gf)) {
          let termsK = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,97,95,53,53,0);
          let moonU = 3.0;
          let n_viewt: Array<any> = [841, 798, 284];
          let iconlogoutF = false;
         completeG.set(`${moonU}`, parseInt(`${moonU}`));
         termsK = `${((iconlogoutF ? 3 : 4) - n_viewt.length)}`;
         n_viewt.push(((iconlogoutF ? 2 : 3) + 1));
      }
      if (2.17 > (completeG.size + fileG) || 3 > (completeG.size % (Math.max(2, 9)))) {
          let connectionI: Array<any> = [791, 33, 689];
          let volumeb = 5.0;
         completeG.set(`${short__gf}`, parseInt(`${short__gf}`));
         connectionI = [parseInt(`${volumeb}`) | connectionI.length];
         volumeb += parseFloat(`${parseInt(`${volumeb}`)}`);
      }
         time_lg.push(completeG.size);
          let videojsX = String.fromCharCode(116,95,51,54,95,104,105,100,99,116,0);
          let libfabricjni3 = String.fromCharCode(119,95,55,53,95,99,97,110,99,101,108,101,100,0);
          let twitteru = 4.0;
         fileG /= Math.max(1, completeG.size - 1);
         videojsX = `${videojsX.length}`;
         libfabricjni3 += `${videojsX.length}`;
         twitteru /= Math.max(3, videojsX.length & 1);
         time_lg = [parseInt(`${fileG}`) << (Math.min(Math.abs(parseInt(`${short__gf}`)), 1))];
      aboutF.set(profileactive2, arrowrightwithtailz.length % (Math.max(profileactive2.length, 2)));
   }
      canvasO.push(canvasO.length);
   let statsW = codeB.length <= 9023783;
   do {
      codeB += `${1 + country6.length}`;
      if (statsW) {
         break;
      }
   } while (((codeB.length % (Math.max(5, 7))) < 3 && 5 < (filledo.size % (Math.max(codeB.length, 10)))) && statsW);
   let bangt = 8212806 <= country6.length;
   do {
      country6 += `${(String.fromCharCode(122,0) == template_xwF ? aboutF.size : template_xwF.length)}`;
      if (bangt) {
         break;
      }
   } while (bangt && (country6 == String.fromCharCode(53,0) || 2 == twittery.length));
   while (profileactive2.includes(`${mapbuffer5.length}`)) {
      mapbuffer5 = [1 / (Math.max(4, codeB.length))];
      break;
   }
      template_xwF += `${template_xwF.length ^ 1}`;
      country6 += `${footballfiledlayoutW}`;
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let targetN: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,101,100,95,106,95,53,50,0),276], [String.fromCharCode(100,95,57,95,97,115,101,108,101,99,116,0),850], [String.fromCharCode(99,95,57,48,95,111,112,101,114,97,110,100,0),919]]);
    let alert9: Array<any> = [155, 873];
    let expiredi = String.fromCharCode(107,95,51,57,95,115,101,103,105,100,0);
    let whitetickY = 0;
    let tempnodataR = 2;
    let libimagepipeline6: Map<any, any> = new Map([[String.fromCharCode(116,95,56,56,95,108,101,97,121,0),469], [String.fromCharCode(115,105,103,116,101,114,109,95,115,95,56,49,0),398]]);
    let gemfileb = String.fromCharCode(102,95,50,53,95,110,111,110,102,97,116,97,108,0);
    let favoriteo = String.fromCharCode(112,95,55,57,95,109,117,108,116,105,116,97,98,108,101,0);
    let greyt = String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,121,95,57,53,0);
    let componentX = 0.0;
    let pageb = 3.0;
    let changep: Array<any> = [573, 495];
   for (let b = 0; b < 3; b++) {
      libimagepipeline6.set(`${componentX}`, libimagepipeline6.size);
   }
   let strings0 = tempnodataR >= 6303001;
   do {
      tempnodataR /= Math.max(2, 1);
      if (strings0) {
         break;
      }
   } while (((parseInt(`${componentX}`) * tempnodataR) > 5 && (5 << (Math.min(1, Math.abs(tempnodataR)))) > 4) && strings0);
       let defaultroombgq = 3.0;
         defaultroombgq *= parseFloat(`${1}`);
      for (let c = 0; c < 3; c++) {
         defaultroombgq *= parseFloat(`${2}`);
      }
      while (3.85 <= defaultroombgq) {
          let plasho = 5;
          let catagory9 = 3;
          let pauseJ = String.fromCharCode(105,95,50,57,95,115,101,97,116,0);
          let imagemanager2 = String.fromCharCode(118,95,56,52,95,114,101,103,105,115,116,101,114,105,110,103,0);
          let showN = String.fromCharCode(98,95,52,48,95,103,117,105,100,101,0);
         defaultroombgq /= Math.max(parseFloat(`${catagory9}`), 3);
         plasho += pauseJ.length;
         catagory9 &= showN.length;
         pauseJ = `${pauseJ.length}`;
         imagemanager2 = `${plasho}`;
         showN = `${(String.fromCharCode(56,0) == imagemanager2 ? showN.length : imagemanager2.length)}`;
         break;
      }
      alert9 = [greyt.length | 1];
      favoriteo = `${parseInt(`${componentX}`)}`;
      libimagepipeline6.set(`${tempnodataR}`, tempnodataR | 2);
      alert9 = [targetN.size];

    if (isLocked) {

   if (targetN.get(`${componentX}`) != null) {
       let target0 = String.fromCharCode(108,105,98,114,97,114,105,101,115,95,115,95,57,55,0);
       let grayb = true;
       let homey = 2.0;
       let benefite = 1.0;
         grayb = homey <= target0.length;
       let androidD = 2.0;
       let navigationQ = 1.0;
         homey *= 2;
         grayb = !grayb;
          let light8 = 1;
         homey *= parseInt(`${homey}`) + light8;
      for (let a = 0; a < 3; a++) {
          let basketballplayerplaceholder9 = 2.0;
         androidD /= Math.max(1, parseInt(`${homey}`));
         basketballplayerplaceholder9 -= parseFloat(`${parseInt(`${basketballplayerplaceholder9}`)}`);
      }
          let gemfileF = 0;
         homey *= (target0.length - (grayb ? 2 : 5));
         gemfileF /= Math.max(gemfileF, 4);
         androidD /= Math.max(4, 1 - parseInt(`${androidD}`));
       let predictionz = String.fromCharCode(113,95,52,95,118,101,114,116,105,99,97,108,108,121,0);
       let gestureso = String.fromCharCode(115,105,98,108,105,110,103,95,103,95,49,48,48,0);
      if ((4.65 * navigationQ) > 4.71 && 5 > (target0.length * parseInt(`${navigationQ}`))) {
         target0 += `${target0.length}`;
      }
       let frame_x8P: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,57,95,56,51,0),String.fromCharCode(119,95,52,57,95,114,116,112,112,114,111,116,111,0)], [String.fromCharCode(116,95,55,54,95,105,110,116,101,114,115,101,99,116,105,111,110,0),String.fromCharCode(100,101,115,116,95,119,95,56,52,0)]]);
       let iconeditU: Map<any, any> = new Map([[String.fromCharCode(101,120,97,109,112,108,101,95,121,95,49,55,0),false ], [String.fromCharCode(113,95,57,48,95,115,101,114,105,97,108,105,122,97,98,108,101,0),true ], [String.fromCharCode(114,95,54,95,114,101,115,112,111,110,115,101,115,0),true ]]);
       let tempnodatagifK = String.fromCharCode(120,95,57,52,95,114,101,97,108,108,111,99,0);
       let predictionactiveu = String.fromCharCode(117,112,108,105,110,107,95,109,95,51,49,0);
      targetN.set(`${grayb}`, (parseInt(`${homey}`) % (Math.max(8, (grayb ? 2 : 1)))));
   }
      targetN.set(`${alert9.length}`, targetN.size << (Math.min(alert9.length, 3)));
      favoriteo = `${1 - tempnodataR}`;
   while ((alert9.length & 5) >= 1) {
      alert9.push(tempnodataR / 1);
      break;
   }
   let benefitb = 9688248 >= targetN.size;
   do {
       let questp = 5.0;
       let bufferP = String.fromCharCode(108,95,51,49,95,97,115,98,100,0);
       let libtobV = String.fromCharCode(103,95,53,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0);
       let tickP = String.fromCharCode(104,95,50,51,95,113,117,97,110,116,105,122,101,114,0);
       let logoI = String.fromCharCode(113,95,53,48,95,115,116,117,98,98,101,100,0);
      let notificationfillempty4 = 6874045.0 <= questp;
      do {
         questp /= Math.max(4, parseFloat(`${1}`));
         if (notificationfillempty4) {
            break;
         }
      } while (notificationfillempty4 && ((5 - bufferP.length) <= 2 && (bufferP.length ^ 5) <= 2));
      while (logoI.endsWith(`${questp}`)) {
         questp *= parseFloat(`${bufferP.length & 2}`);
         break;
      }
         libtobV = `${libtobV.length ^ 2}`;
         libtobV = "2";
      let internetc = String.fromCharCode(111,95,121,108,106,111,50,113,48,0) == logoI;
      do {
         logoI += `${parseInt(`${questp}`) >> (Math.min(bufferP.length, 2))}`;
         if (internetc) {
            break;
         }
      } while ((logoI.length < tickP.length) && internetc);
       let scrollviewE = true;
          let index2: Map<any, any> = new Map([[String.fromCharCode(100,95,51,52,95,112,97,103,0),false ], [String.fromCharCode(113,95,50,95,100,105,116,97,98,108,101,0),true ]]);
          let typesJ = String.fromCharCode(97,115,121,109,95,114,95,50,50,0);
          let main_vA = String.fromCharCode(108,105,102,101,99,121,99,108,101,95,53,95,52,52,0);
         logoI = `${parseInt(`${questp}`) - 3}`;
         index2.set(`${typesJ}`, 3 << (Math.min(1, typesJ.length)));
         main_vA = `${main_vA.length ^ 1}`;
          let tickx = String.fromCharCode(108,95,54,95,99,104,101,99,107,112,111,105,110,116,0);
          let elementsm: Array<any> = [373, 136];
         tickP = `${tickP.length ^ 2}`;
         tickx += `${tickx.length}`;
         elementsm.push(3);
         logoI = `${2 % (Math.max(2, logoI.length))}`;
      if (5 == (2 ^ logoI.length) || (logoI.length / (Math.max(1, parseInt(`${questp}`)))) == 2) {
         questp -= parseFloat(`${3 * bufferP.length}`);
      }
         logoI += `${(tickP == String.fromCharCode(117,0) ? tickP.length : parseInt(`${questp}`))}`;
         scrollviewE = (parseInt(`${questp}`) * bufferP.length) <= 59;
      if (1 >= (tickP.length + 5) || (5 | tickP.length) >= 5) {
          let crownZ = String.fromCharCode(102,105,110,100,101,114,95,119,95,56,55,0);
          let libapminsightbv: Array<any> = [String.fromCharCode(100,105,115,99,114,101,116,101,95,121,95,56,50,0), String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,95,120,95,51,57,0)];
          let libreactc: Map<any, any> = new Map([[String.fromCharCode(120,95,50,55,95,119,114,97,112,0),228], [String.fromCharCode(100,117,97,108,95,118,95,54,57,0),517], [String.fromCharCode(101,120,99,101,101,100,101,100,95,51,95,53,55,0),660]]);
          let libfile8: Map<any, any> = new Map([[String.fromCharCode(100,95,55,57,0),String.fromCharCode(102,95,52,54,95,116,104,111,117,115,97,110,100,115,0)], [String.fromCharCode(100,95,52,0),String.fromCharCode(99,95,53,54,95,108,105,98,120,118,105,100,0)]]);
          let stationL = false;
         tickP = "2";
         crownZ = "1";
         libapminsightbv.push(1);
         libreactc.set(crownZ, crownZ.length);
         libfile8.set(crownZ, 3);
         stationL = !stationL || libfile8.size >= 21;
      }
      let ping3 = questp >= 7096970.0;
      do {
         questp += parseFloat(`${parseInt(`${questp}`)}`);
         if (ping3) {
            break;
         }
      } while (ping3 && ((questp + parseFloat(`${logoI.length}`)) < 4.78 && (parseInt(`${questp}`) + logoI.length) < 2));
         logoI += `${(logoI == String.fromCharCode(113,0) ? libtobV.length : logoI.length)}`;
      targetN.set(`${tempnodataR}`, logoI.length);
      if (benefitb) {
         break;
      }
   } while (benefitb && (Array.from(targetN.keys()).includes(`${tempnodataR}`)));
   for (let k = 0; k < 2; k++) {
      expiredi = `${(String.fromCharCode(99,0) == favoriteo ? tempnodataR : favoriteo.length)}`;
   }
      

       let iconclosewhitebgJ = false;
      let teamw = iconclosewhitebgJ ? !iconclosewhitebgJ : iconclosewhitebgJ;
      do {
          let huaweiW: Array<any> = [78, 814];
          let iconsharek: Array<any> = [10, 53];
          let libfollym = String.fromCharCode(118,95,51,54,95,116,105,108,101,115,0);
         iconclosewhitebgJ = huaweiW.length < 89 || iconsharek.length < 89;
         huaweiW.push(libfollym.length);
         iconsharek.push(libfollym.length >> (Math.min(Math.abs(1), 3)));
         if (teamw) {
            break;
         }
      } while ((!iconclosewhitebgJ) && teamw);
         iconclosewhitebgJ = (iconclosewhitebgJ ? !iconclosewhitebgJ : iconclosewhitebgJ);
      while (iconclosewhitebgJ) {
         iconclosewhitebgJ = !iconclosewhitebgJ;
         break;
      }
      componentX -= parseFloat(`${targetN.size / (Math.max(3, parseInt(`${componentX}`)))}`);
   while ((alert9.length & 5) == 1) {
       let zhuboa = 4.0;
      for (let j = 0; j < 2; j++) {
          let iconi = 0;
          let playn: Array<any> = [String.fromCharCode(107,101,121,115,116,111,114,101,95,50,95,56,50,0), String.fromCharCode(107,95,55,54,95,106,114,101,118,100,99,116,0), String.fromCharCode(110,95,54,50,95,108,97,110,103,105,100,0)];
          let templateprocessorA = 0;
          let mbnativeD: Array<any> = [268, 205, 492];
         zhuboa /= Math.max(parseFloat(`${mbnativeD.length}`), 4);
         iconi += templateprocessorA;
         playn.push(2 * playn.length);
         mbnativeD.push(templateprocessorA);
      }
       let libbufferY = 4;
       let overlayO: Array<any> = [155, 820, 703];
       let informationJ: Array<any> = [226, 927, 35];
      expiredi = `${alert9.length << (Math.min(Math.abs(2), 2))}`;
      break;
   }
      expiredi = "1";
      tempnodataR += favoriteo.length;
   if (gemfileb == String.fromCharCode(70,0)) {
      greyt += `${whitetickY}`;
   }
   while (libimagepipeline6.size == 1) {
      libimagepipeline6 = new Map([[gemfileb, (String.fromCharCode(108,0) == gemfileb ? tempnodataR : gemfileb.length)]]);
      break;
   }
      setIsLocked(false);
    } else {

   let memberz = 7592185 <= whitetickY;
   do {
      whitetickY >>= Math.min(5, Math.abs(gemfileb.length | tempnodataR));
      if (memberz) {
         break;
      }
   } while (memberz && (5 >= (whitetickY % (Math.max(9, alert9.length)))));
   if (5 == (2 + greyt.length) && 4 == (2 + tempnodataR)) {
      tempnodataR -= 2;
   }
   if ((2 * targetN.size) >= 3 && (alert9.length * targetN.size) >= 2) {
      alert9 = [(favoriteo == String.fromCharCode(106,0) ? alert9.length : favoriteo.length)];
   }
   while (1 <= libimagepipeline6.size) {
       let paginationa = false;
       let sortb: Array<any> = [String.fromCharCode(106,95,55,55,95,99,97,110,99,101,108,97,98,108,101,0), String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,112,95,54,54,0), String.fromCharCode(105,111,101,114,114,95,115,95,54,50,0)];
       let roundg = String.fromCharCode(97,95,52,56,95,102,99,117,110,112,117,98,108,105,115,104,0);
       let libcxxcomponentsO = String.fromCharCode(115,118,97,103,95,55,95,55,56,0);
         sortb = [sortb.length + roundg.length];
      for (let v = 0; v < 1; v++) {
          let smallbrightnessR: Map<any, any> = new Map([[String.fromCharCode(118,95,52,54,95,115,110,111,119,0),958], [String.fromCharCode(116,105,107,101,114,95,108,95,49,48,0),889], [String.fromCharCode(107,95,53,51,95,112,101,114,105,111,100,0),407]]);
          let middlen: Map<any, any> = new Map([[String.fromCharCode(110,95,48,95,112,114,101,115,115,105,110,103,0),275], [String.fromCharCode(102,95,51,51,95,111,117,116,112,117,116,113,0),607], [String.fromCharCode(111,95,53,50,95,107,101,121,103,101,110,0),937]]);
         paginationa = sortb.length < 89 || roundg.length < 89;
         smallbrightnessR.set(`${smallbrightnessR.size}`, smallbrightnessR.size);
         middlen.set(`${smallbrightnessR.size}`, 3 << (Math.min(4, Math.abs(middlen.size))));
      }
         libcxxcomponentsO += `${roundg.length / (Math.max(libcxxcomponentsO.length, 1))}`;
          let cornerQ = String.fromCharCode(114,95,49,48,95,104,108,105,110,101,0);
          let becomef = 2;
         libcxxcomponentsO = `${3 << (Math.min(4, cornerQ.length))}`;
         cornerQ += `${becomef >> (Math.min(Math.abs(2), 5))}`;
         becomef /= Math.max(4, becomef);
       let componentw = 0.0;
      if (libcxxcomponentsO.length < 1) {
          let register_byk = String.fromCharCode(113,95,49,49,95,99,111,110,102,105,103,117,114,97,98,108,101,0);
         libcxxcomponentsO = `${(roundg.length & (paginationa ? 1 : 1))}`;
         register_byk = "1";
      }
         sortb.push(libcxxcomponentsO.length - 3);
         paginationa = sortb.includes(componentw);
      for (let e = 0; e < 2; e++) {
         libcxxcomponentsO = `${parseInt(`${componentw}`)}`;
      }
         paginationa = ((roundg.length | (!paginationa ? 25 : roundg.length)) <= 25);
      if (sortb.includes(componentw)) {
          let tempT = true;
          let libtob6 = String.fromCharCode(102,117,108,102,105,108,108,95,103,95,56,51,0);
          let componentregistryi: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,105,110,103,95,111,95,49,55,0),68], [String.fromCharCode(117,98,115,99,114,105,98,101,114,95,112,95,57,53,0),819], [String.fromCharCode(97,95,57,56,95,111,102,102,115,101,116,115,0),380]]);
          let blacklistl = String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,114,95,55,50,0);
          let securityl: Map<any, any> = new Map([[String.fromCharCode(113,112,101,108,95,122,95,49,49,0),389], [String.fromCharCode(99,95,55,54,95,105,110,118,105,116,101,114,0),542], [String.fromCharCode(108,95,54,50,95,100,105,109,0),815]]);
         sortb = [((paginationa ? 1 : 1) << (Math.min(sortb.length, 5)))];
         tempT = componentregistryi.size >= 25 && 25 >= libtob6.length;
         libtob6 = "1";
         componentregistryi.set(`${securityl.size}`, securityl.size / 3);
         blacklistl += `${blacklistl.length ^ libtob6.length}`;
      }
      if ((sortb.length % (Math.max(roundg.length, 1))) > 4) {
         sortb.push((sortb.length + (paginationa ? 1 : 4)));
      }
      libimagepipeline6 = new Map([[`${alert9.length}`, 3 * tempnodataR]]);
      break;
   }
   if (4 == gemfileb.length) {
      libimagepipeline6 = new Map([[`${whitetickY}`, expiredi.length * 1]]);
   }
      alert9.push(1 | parseInt(`${pageb}`));
      

   while (1 == greyt.length) {
      tempnodataR &= alert9.length;
      break;
   }
       let pangleW = String.fromCharCode(98,95,50,48,95,115,116,115,99,0);
       let interstitialu = 3;
      if (!pangleW.startsWith(`${interstitialu}`)) {
         interstitialu /= Math.max(interstitialu % 3, 5);
      }
      while ((interstitialu | 5) > 3) {
         interstitialu /= Math.max(5, interstitialu);
         break;
      }
          let agreementX = 5.0;
         interstitialu *= 1 * parseInt(`${agreementX}`);
       let rulesX = String.fromCharCode(101,110,99,111,100,105,110,103,98,95,97,95,55,55,0);
       let desce = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,100,95,51,55,0);
         rulesX += `${(pangleW == String.fromCharCode(82,0) ? pangleW.length : interstitialu)}`;
      let securityD = rulesX.length <= 7622320;
      do {
         rulesX += `${3 >> (Math.min(3, Math.abs(interstitialu)))}`;
         if (securityD) {
            break;
         }
      } while (securityD && (rulesX.includes(desce)));
      gemfileb = `${1 / (Math.max(9, parseInt(`${pageb}`)))}`;
       let armvar = 3.0;
      let zhuboX = 5728880.0 >= armvar;
      do {
         armvar -= parseFloat(`${parseInt(`${armvar}`) & 2}`);
         if (zhuboX) {
            break;
         }
      } while (((armvar * armvar) == 3.50 || (3.50 + armvar) == 1.98) && zhuboX);
          let referrerq = String.fromCharCode(99,101,108,101,98,114,97,116,101,95,121,95,55,57,0);
         armvar /= Math.max(4, parseFloat(`${2 * referrerq.length}`));
      while (armvar < armvar) {
         armvar += parseFloat(`${parseInt(`${armvar}`) / 2}`);
         break;
      }
      whitetickY &= 2;
   let bello = 8500110.0 >= pageb;
   do {
       let whitez = 0.0;
       let nativeexH = true;
       let binddatasy = String.fromCharCode(108,95,53,51,95,111,116,105,102,105,99,97,116,105,111,110,0);
       let yellowscoreballk = false;
       let libjsijniprofileru = 3;
      if (!nativeexH) {
         nativeexH = !yellowscoreballk;
      }
         whitez /= Math.max(5, 1 - parseInt(`${whitez}`));
         yellowscoreballk = !yellowscoreballk;
      for (let u = 0; u < 2; u++) {
         nativeexH = yellowscoreballk;
      }
         binddatasy = "3";
      if (5 > libjsijniprofileru) {
         libjsijniprofileru /= Math.max((parseInt(`${whitez}`) << (Math.min(4, Math.abs((yellowscoreballk ? 5 : 2))))), 5);
      }
         binddatasy = `${3 | parseInt(`${whitez}`)}`;
      if (1.30 < (whitez - 5.75)) {
         nativeexH = 15 <= libjsijniprofileru;
      }
       let interstitialH = 2;
       let vignettef = 4;
      for (let e = 0; e < 1; e++) {
         binddatasy = `${1 >> (Math.min(2, binddatasy.length))}`;
      }
         binddatasy += `${binddatasy.length | 1}`;
      while (nativeexH && !yellowscoreballk) {
         nativeexH = vignettef < parseInt(`${whitez}`);
         break;
      }
      for (let i = 0; i < 1; i++) {
         libjsijniprofileru %= Math.max(2 / (Math.max(9, interstitialH)), 5);
      }
         whitez -= (3 | (nativeexH ? 1 : 4));
      for (let j = 0; j < 2; j++) {
         interstitialH += (binddatasy == String.fromCharCode(116,0) ? vignettef : binddatasy.length);
      }
      pageb /= Math.max(4, parseFloat(`${parseInt(`${componentX}`)}`));
      if (bello) {
         break;
      }
   } while (bello && (5 == (targetN.size | 5)));
      tempnodataR |= 2 << (Math.min(Math.abs(parseInt(`${pageb}`)), 2));
      greyt += `${favoriteo.length}`;
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
            source={require('@static/images/scorepopsoundReport.png')}
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
            source={require('@static/images/frame_tTick.png')}
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
                              source={require('@static/images/robotoNetwork.gif')}
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
                  <TouchableOpacity activeOpacity={0.85} onPress={() => goBack()} style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, paddingRight: 10, }}>
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
