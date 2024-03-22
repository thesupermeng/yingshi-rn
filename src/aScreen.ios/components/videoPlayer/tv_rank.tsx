import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControls from './k_collection_detail';
import BottomControls from './axx_field';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/exb_member_source_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/bx_sell';
import { XPaginationWeiboItem, IDelegate, XVSScoreDark } from '@type/wpk_long';
import VodCombinedGesture from '../gestures/vod/cy_count_matches';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/storeService.svg';
import ProjectIcon from '@static/images/lineTumbnailSpinner.svg'
import VodListVertical from '../vod/z_langkey';
import GesturesGuide from '../gestures/vod/y_image_bottom';
import VodLiveStationListVertical from '../vod/mmr_placeholder';
import FastImage from '../common/gwi_with';

type XFillButton = {
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
  episodes?: IDelegate
  movieList?: XVSScoreDark[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: XPaginationWeiboItem[],
  isFetchingRecommendedMovies?: boolean
};

type JDSort = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<JDSort, XFillButton>(({
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
       let bannerW = String.fromCharCode(120,119,109,97,0);
    let emojiy = 0.0;
    let penaltyI: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,114,100,0),String.fromCharCode(117,110,100,101,114,108,121,105,110,103,0)], [String.fromCharCode(101,95,53,56,0),String.fromCharCode(100,101,99,108,97,114,101,0)]]);
    let contextl = 2;
    let confirmationh = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,0);
    let helperY = 1.0;
    let confirmationD = String.fromCharCode(115,105,103,105,100,0);
    let interstitialj = 5.0;
    let sheetj = String.fromCharCode(100,105,115,112,97,116,99,104,0);
    let bingd = 3.0;
    let analytics2 = 2;
    let china5 = 5;
    let mail6 = String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,0);
    let vignettez = String.fromCharCode(105,110,105,116,105,97,108,105,115,101,0);
    let videoH: Array<any> = [857, 224];
    let select8 = 0.0;
      penaltyI.set(`${analytics2}`, 1);
      analytics2 <<= Math.min(3, Math.abs(confirmationh.length - 2));
   while ((china5 - bingd) <= 2.53 && 5 <= (1 & china5)) {
      china5 <<= Math.min(Math.abs(1), 1);
      break;
   }
      penaltyI = new Map([[`${contextl}`, contextl]]);
       let listd = true;
       let data4 = String.fromCharCode(112,114,111,103,114,97,109,0);
       let middlewareg = String.fromCharCode(115,108,111,112,101,0);
       let headert = 5;
       let fully = 1;
          let logoutn = 1;
         middlewareg += `${fully - 1}`;
         logoutn >>= Math.min(Math.abs(logoutn), 4);
         middlewareg = `${headert}`;
          let tail0 = String.fromCharCode(101,95,57,49,95,109,111,122,106,112,101,103,0);
         data4 += `${tail0.length / 1}`;
      let logoO = listd ? !listd : listd;
      do {
         listd = 62 <= headert;
         if (logoO) {
            break;
         }
      } while (logoO && (data4.length == 1));
      penaltyI.set(`${contextl}`, contextl % (Math.max(1, 5)));
      emojiy /= Math.max(5, confirmationh.length);
   for (let r = 0; r < 1; r++) {
      interstitialj -= parseFloat(`${penaltyI.size}`);
   }
   for (let f = 0; f < 2; f++) {
      interstitialj *= parseFloat(`${penaltyI.size >> (Math.min(bannerW.length, 4))}`);
   }
   for (let t = 0; t < 3; t++) {
      china5 /= Math.max(2, 1);
   }
   while (4 == (contextl / (Math.max(parseInt(`${helperY}`), 7))) || 1 == (contextl / (Math.max(4, 5)))) {
       let sourcej = String.fromCharCode(108,105,109,105,116,101,114,0);
       let shirtK = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,0);
       let benefitQ: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,0),String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,0)], [String.fromCharCode(99,102,116,109,100,108,0),String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,0)], [String.fromCharCode(112,114,111,99,97,109,112,0),String.fromCharCode(100,111,119,110,103,114,97,100,101,0)]]);
       let model4 = 5.0;
         benefitQ = new Map([[`${model4}`, parseInt(`${model4}`)]]);
       let langkey6 = 3.0;
         shirtK = `${benefitQ.size}`;
      for (let f = 0; f < 2; f++) {
         model4 *= parseFloat(`${2 >> (Math.min(1, Math.abs(benefitQ.size)))}`);
      }
      for (let q = 0; q < 1; q++) {
          let guideO = 4;
         sourcej += "2";
         guideO %= Math.max(4, guideO * 3);
      }
       let send0 = true;
       let constantsj = false;
         model4 *= parseFloat(`${3}`);
      while (5.98 > model4 || 1.95 > (5.98 + model4)) {
         model4 /= Math.max(2, parseFloat(`${2}`));
         break;
      }
         model4 *= (parseFloat(`${1 >> (Math.min(1, Math.abs((constantsj ? 5 : 1))))}`));
         langkey6 /= Math.max(parseFloat(`${benefitQ.size % (Math.max(7, parseInt(`${langkey6}`)))}`), 4);
          let trashZ = String.fromCharCode(116,105,99,107,101,116,115,0);
          let previewT = String.fromCharCode(104,101,108,100,0);
         shirtK += `${(parseInt(`${langkey6}`) ^ (send0 ? 1 : 5))}`;
         trashZ = "3";
         previewT += `${(String.fromCharCode(81,0) == previewT ? trashZ.length : previewT.length)}`;
      let gesturesw = send0 ? !send0 : send0;
      do {
         send0 = 29.38 <= langkey6 || benefitQ.size <= 43;
         if (gesturesw) {
            break;
         }
      } while (gesturesw && (!send0));
      contextl >>= Math.min(5, Math.abs(3));
      break;
   }
   while ((5 % (Math.max(3, china5))) < 4) {
      contextl += 3;
      break;
   }
   for (let c = 0; c < 3; c++) {
       let unselectedU = String.fromCharCode(112,95,50,48,95,115,117,109,102,0);
       let middlewarec = String.fromCharCode(114,101,102,101,114,0);
       let hook3 = String.fromCharCode(116,97,110,115,105,103,0);
       let spinnerD = String.fromCharCode(112,105,110,103,0);
          let feedbackZ = false;
         middlewarec = `${hook3.length}`;
         feedbackZ = !feedbackZ;
       let aboutG: Array<any> = [915, 778];
       let more6: Array<any> = [493, 824, 880];
         aboutG = [(String.fromCharCode(75,0) == middlewarec ? middlewarec.length : hook3.length)];
      let optionsO = String.fromCharCode(115,52,51,105,0) == unselectedU;
      do {
         unselectedU += `${middlewarec.length << (Math.min(Math.abs(1), 3))}`;
         if (optionsO) {
            break;
         }
      } while (optionsO && (!spinnerD.startsWith(`${unselectedU.length}`)));
      while (1 > (3 << (Math.min(2, hook3.length)))) {
         hook3 += `${aboutG.length & spinnerD.length}`;
         break;
      }
      if (middlewarec.endsWith(`${spinnerD.length}`)) {
          let privilegeJ = String.fromCharCode(110,105,100,99,98,98,0);
         middlewarec += `${privilegeJ.length >> (Math.min(3, aboutG.length))}`;
      }
         more6 = [2];
       let settingb = 5;
      bannerW = `${middlewarec.length * 2}`;
   }
      bingd /= Math.max(4, 2 + china5);
   let privacyz = confirmationD.length >= 7122502;
   do {
       let nextp = 2.0;
       let grayC = true;
       let downu = 2;
       let live2: Map<any, any> = new Map([[String.fromCharCode(105,110,102,0),947], [String.fromCharCode(99,111,112,121,118,0),484], [String.fromCharCode(116,114,117,110,99,97,116,105,111,110,0),570]]);
      let rightk = 5946254 >= downu;
      do {
          let subsV = 0.0;
          let greenn = String.fromCharCode(102,97,108,108,111,102,102,0);
          let middlewaret = 2;
         downu *= 1;
         subsV += (parseFloat(`${greenn == String.fromCharCode(112,0) ? greenn.length : parseInt(`${subsV}`)}`));
         middlewaret += 3 - parseInt(`${subsV}`);
         if (rightk) {
            break;
         }
      } while ((4.34 >= (nextp - 5.57) && 5 >= (downu + 3)) && rightk);
         downu |= 2 ^ live2.size;
         grayC = downu == live2.size;
         grayC = !grayC;
         grayC = nextp < 61.50 && grayC;
      let long__zg = 8969889.0 <= nextp;
      do {
         nextp /= Math.max(parseFloat(`${1}`), 1);
         if (long__zg) {
            break;
         }
      } while (long__zg && (!Array.from(live2.values()).includes(nextp)));
         grayC = nextp == 17.56 && grayC;
      let footballn = live2.size >= 9657864;
      do {
         live2.set(`${downu}`, 1 / (Math.max(downu, 10)));
         if (footballn) {
            break;
         }
      } while (((live2.size ^ 5) > 2 && (3.23 - nextp) > 1.13) && footballn);
      for (let g = 0; g < 1; g++) {
          let unreadR = String.fromCharCode(101,108,101,109,101,110,116,115,0);
          let progressw: Array<any> = [String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,0), String.fromCharCode(99,111,110,116,114,111,108,101,114,115,0)];
         downu %= Math.max(1, parseInt(`${nextp}`));
         unreadR += `${3 - unreadR.length}`;
         progressw.push(unreadR.length);
      }
       let hooka = String.fromCharCode(115,99,114,97,116,99,104,0);
          let placeholderL = 0;
          let animationH: Array<any> = [547, 48, 469];
          let renewN = String.fromCharCode(116,108,115,0);
         grayC = !grayC;
         placeholderL >>= Math.min(5, Math.abs(1 << (Math.min(3, animationH.length))));
         animationH.push(placeholderL / 1);
         renewN = `${placeholderL % 3}`;
          let pause3 = String.fromCharCode(122,95,50,55,95,99,97,112,116,117,114,101,0);
          let indicatorV = 2;
          let championX = 0.0;
         hooka = "1";
         pause3 = "1";
         indicatorV += parseInt(`${championX}`);
         championX /= Math.max(parseFloat(`${parseInt(`${championX}`)}`), 4);
      confirmationD = `${parseInt(`${bingd}`)}`;
      if (privacyz) {
         break;
      }
   } while (privacyz && (2 >= confirmationD.length));
   if (analytics2 <= 4) {
       let matches0: Map<any, any> = new Map([[String.fromCharCode(120,100,99,97,109,0),570], [String.fromCharCode(97,108,108,111,99,97,116,111,114,115,0),353]]);
       let countryB = String.fromCharCode(111,110,121,120,95,116,95,49,50,0);
       let xvodc: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,0),false ], [String.fromCharCode(100,101,115,101,108,101,99,116,0),false ]]);
       let controlst = String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,0);
         matches0 = new Map([[`${matches0.size}`, xvodc.size << (Math.min(Math.abs(matches0.size), 3))]]);
      while (1 > (countryB.length << (Math.min(Math.abs(3), 2))) && (countryB.length << (Math.min(5, Math.abs(xvodc.size)))) > 3) {
          let product3: Map<any, any> = new Map([[String.fromCharCode(114,111,111,116,115,0),180], [String.fromCharCode(99,111,110,102,108,105,99,116,115,0),169]]);
          let network7: Map<any, any> = new Map([[String.fromCharCode(108,111,111,115,101,0),521], [String.fromCharCode(119,101,108,99,111,109,101,0),332], [String.fromCharCode(114,97,110,103,101,115,0),301]]);
         countryB += `${(controlst == String.fromCharCode(107,0) ? xvodc.size : controlst.length)}`;
         product3.set(`${network7.size}`, network7.size);
         break;
      }
      while (5 == controlst.length) {
         matches0.set(`${countryB}`, countryB.length & 3);
         break;
      }
      if (matches0.size < xvodc.size) {
         matches0 = new Map([[`${xvodc.size}`, 2]]);
      }
      let star_ = controlst == String.fromCharCode(54,50,111,50,119,57,49,57,0);
      do {
         controlst += `${countryB.length % (Math.max(8, matches0.size))}`;
         if (star_) {
            break;
         }
      } while (star_ && (controlst.includes(`${countryB.length}`)));
      let detail3 = 6494025 <= matches0.size;
      do {
         matches0.set(`${countryB}`, 1 - countryB.length);
         if (detail3) {
            break;
         }
      } while ((3 < (2 ^ matches0.size) || (matches0.size ^ 2) < 2) && detail3);
          let screen8 = true;
          let gesturesf = String.fromCharCode(105,110,112,117,116,121,0);
          let formJ = 2.0;
         countryB += `${parseInt(`${formJ}`) - 1}`;
         screen8 = gesturesf.length == 64 || screen8;
         gesturesf = `${(gesturesf.length % (Math.max(10, (screen8 ? 1 : 3))))}`;
         formJ += (String.fromCharCode(49,0) == gesturesf ? gesturesf.length : (screen8 ? 2 : 2));
       let shirtB = 0;
       let liveg = 4;
      let down5 = String.fromCharCode(114,49,111,0) == controlst;
      do {
          let club2 = 3.0;
          let unselected8: Array<any> = [893, 890, 97];
          let statisticsw: Array<any> = [859, 685, 128];
         controlst += `${3 + parseInt(`${club2}`)}`;
         club2 *= unselected8.length % (Math.max(2, 6));
         unselected8.push(unselected8.length);
         statisticsw = [statisticsw.length];
         if (down5) {
            break;
         }
      } while ((1 == (shirtB / 3) && (3 / (Math.max(8, shirtB))) == 5) && down5);
      let match6 = 8244670 >= liveg;
      do {
         liveg |= countryB.length;
         if (match6) {
            break;
         }
      } while (match6 && (4 < (liveg << (Math.min(3, Math.abs(shirtB))))));
      while (!countryB.includes(`${shirtB}`)) {
          let mailP = 0;
         countryB += `${mailP ^ 3}`;
         break;
      }
          let halfi = 3.0;
          let switch_4r = String.fromCharCode(102,114,97,109,101,95,49,95,53,55,0);
         liveg |= controlst.length >> (Math.min(2, Math.abs(shirtB)));
         halfi /= Math.max(parseInt(`${halfi}`) | 3, 4);
         switch_4r += `${1 & parseInt(`${halfi}`)}`;
      analytics2 <<= Math.min(Math.abs(parseInt(`${bingd}`) & 3), 5);
   }
      emojiy -= parseInt(`${bingd}`);
   for (let j = 0; j < 3; j++) {
       let targete = 1.0;
       let main_iJ = 4.0;
       let malaysiaA = String.fromCharCode(108,97,110,103,117,97,103,101,0);
       let bannerB = false;
       let crownW = String.fromCharCode(111,95,51,49,95,117,112,103,114,97,100,101,0);
      while ((malaysiaA.length % (Math.max(5, 10))) == 5) {
         malaysiaA = `${2 | parseInt(`${main_iJ}`)}`;
         break;
      }
          let canvasm = false;
          let nalyticsP = 1.0;
          let chartq = 3;
         main_iJ -= parseFloat(`${malaysiaA.length ^ 1}`);
         canvasm = chartq == 43 || nalyticsP == 37.69;
         nalyticsP /= Math.max(parseFloat(`${parseInt(`${nalyticsP}`)}`), 1);
         chartq += ((canvasm ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${nalyticsP}`)), 1)));
      for (let s = 0; s < 2; s++) {
         bannerB = malaysiaA.startsWith(`${targete}`);
      }
         main_iJ *= parseFloat(`${parseInt(`${targete}`) >> (Math.min(1, Math.abs(3)))}`);
          let productK = String.fromCharCode(116,114,97,110,115,112,111,114,116,0);
          let dangerj = 4.0;
          let usernameN = 3.0;
         bannerB = usernameN >= 56.75 && 56.75 >= dangerj;
         productK += `${1 >> (Math.min(5, productK.length))}`;
         dangerj *= parseFloat(`${productK.length}`);
         main_iJ += parseFloat(`${2 * parseInt(`${main_iJ}`)}`);
      if (!bannerB && (1.88 + main_iJ) >= 1.69) {
          let mappingw = 5;
          let mutedX: Array<any> = [187, 427, 681];
          let moviesN = false;
          let emptyE = 5.0;
         main_iJ += parseFloat(`${3 << (Math.min(1, malaysiaA.length))}`);
         mappingw |= mutedX.length & 1;
         mutedX.push((parseInt(`${emptyE}`) / (Math.max(8, (moviesN ? 3 : 1)))));
         emptyE -= (parseInt(`${emptyE}`) + (moviesN ? 3 : 4));
      }
         crownW += `${((bannerB ? 5 : 3))}`;
      for (let k = 0; k < 2; k++) {
         malaysiaA = `${parseInt(`${targete}`) & 3}`;
      }
      let navigationj = bannerB ? !bannerB : bannerB;
      do {
         bannerB = 87.17 > main_iJ;
         if (navigationj) {
            break;
         }
      } while (navigationj && (bannerB));
         crownW += "1";
         targete /= Math.max(parseFloat(`${parseInt(`${targete}`) + parseInt(`${main_iJ}`)}`), 3);
         malaysiaA += `${1 >> (Math.min(4, Math.abs(parseInt(`${main_iJ}`))))}`;
      let streamingW = 8535759.0 >= main_iJ;
      do {
         main_iJ += parseFloat(`${2 * crownW.length}`);
         if (streamingW) {
            break;
         }
      } while (streamingW && (2.97 == (targete / (Math.max(6, main_iJ)))));
         malaysiaA = `${parseInt(`${main_iJ}`) | parseInt(`${targete}`)}`;
      sheetj = `${3 & parseInt(`${bingd}`)}`;
   }
   for (let r = 0; r < 1; r++) {
       let project9 = String.fromCharCode(99,95,50,49,95,102,116,118,118,101,114,116,108,105,110,101,0);
       let turnQ = true;
         turnQ = project9.length < 88;
         project9 += `${2 ^ project9.length}`;
         project9 = `${((turnQ ? 2 : 2))}`;
         turnQ = ((project9.length ^ (turnQ ? project9.length : 33)) >= 33);
       let helper5 = String.fromCharCode(99,111,100,101,114,0);
      for (let g = 0; g < 3; g++) {
         project9 = `${project9.length + 1}`;
      }
      analytics2 &= 2;
   }
      emojiy /= Math.max(confirmationD.length - 1, 2);
       let countryM = 1.0;
       let penaltyQ = 1;
       let vignetten: Map<any, any> = new Map([[String.fromCharCode(114,107,109,112,112,0),String.fromCharCode(99,97,118,115,100,115,112,0)], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,0),String.fromCharCode(116,97,105,108,115,0)], [String.fromCharCode(116,114,97,112,0),String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,0)]]);
      if (1.0 < (countryM - penaltyQ)) {
          let sortn = String.fromCharCode(99,111,97,114,115,101,0);
          let trophyu = true;
         penaltyQ <<= Math.min(Math.abs(parseInt(`${countryM}`) >> (Math.min(4, Math.abs(3)))), 2);
         sortn += `${(sortn == String.fromCharCode(89,0) ? (trophyu ? 1 : 5) : sortn.length)}`;
         trophyu = sortn.length >= 7;
      }
      for (let x = 0; x < 3; x++) {
         countryM -= 1;
      }
      for (let o = 0; o < 1; o++) {
         countryM /= Math.max(2, 3);
      }
      while ((3 - penaltyQ) < 5 && (penaltyQ + countryM) < 2.23) {
          let setting4: Map<any, any> = new Map([[String.fromCharCode(115,101,118,101,110,0),true ], [String.fromCharCode(115,116,105,108,108,0),false ], [String.fromCharCode(112,105,110,110,101,100,95,48,95,57,53,0),false ]]);
          let alertI = 2;
          let carouselY = 3.0;
         penaltyQ &= 1 - parseInt(`${countryM}`);
         setting4 = new Map([[`${carouselY}`, 3 + alertI]]);
         alertI >>= Math.min(5, Math.abs(setting4.size));
         carouselY /= Math.max(setting4.size / 3, 3);
         break;
      }
         penaltyQ /= Math.max(2, 5);
      for (let b = 0; b < 2; b++) {
          let eighteenO = false;
         penaltyQ &= (vignetten.size + (eighteenO ? 4 : 2));
      }
      for (let d = 0; d < 2; d++) {
         countryM /= Math.max(5, 2);
      }
          let bally = String.fromCharCode(115,119,114,0);
          let foundY = 1.0;
         penaltyQ |= (String.fromCharCode(79,0) == bally ? bally.length : parseInt(`${countryM}`));
         foundY /= Math.max(3, parseInt(`${foundY}`) ^ 3);
      if (2 > (penaltyQ << (Math.min(Math.abs(vignetten.size), 3))) || 1 > (vignetten.size << (Math.min(Math.abs(2), 4)))) {
          let filled6 = 1.0;
          let savep = String.fromCharCode(100,105,115,115,105,109,0);
          let matchr = 1.0;
          let score0 = String.fromCharCode(107,95,50,95,110,116,115,99,0);
          let nextH = 2;
         penaltyQ /= Math.max(1 + score0.length, 1);
         filled6 -= parseFloat(`${2 | nextH}`);
         savep += `${parseInt(`${filled6}`) | parseInt(`${matchr}`)}`;
         matchr *= (String.fromCharCode(99,0) == savep ? savep.length : parseInt(`${matchr}`));
         score0 += "3";
         nextH -= parseInt(`${filled6}`) ^ savep.length;
      }
      confirmationh = "2";
   for (let j = 0; j < 3; j++) {
       let appsr = true;
       let sentryQ: Array<any> = [205, 943, 199];
       let internetu = 5.0;
       let containerh: Array<any> = [19, 462];
      let floaterK = internetu >= 5345946.0;
      do {
         internetu *= (sentryQ.length << (Math.min(2, Math.abs((appsr ? 5 : 1)))));
         if (floaterK) {
            break;
         }
      } while (floaterK && ((containerh.length / (Math.max(3, parseInt(`${internetu}`)))) >= 2 && 2 >= (containerh.length | 2)));
      let tickedG = appsr ? !appsr : appsr;
      do {
         appsr = 81 > containerh.length;
         if (tickedG) {
            break;
         }
      } while (tickedG && (!appsr));
         containerh = [3];
          let episodeB = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
          let playlist1 = false;
         sentryQ.push(3 & parseInt(`${internetu}`));
         episodeB += `${((playlist1 ? 1 : 4) / (Math.max(3, episodeB.length)))}`;
         playlist1 = episodeB.length == 14 && !playlist1;
         internetu *= containerh.length | 3;
         appsr = !appsr;
       let googley = 4.0;
       let greeng = 1.0;
      if (3.60 >= (greeng + 4.17)) {
         containerh = [parseInt(`${internetu}`)];
      }
      while (!containerh.includes(googley)) {
          let infof: Array<any> = [770, 83];
          let liveC = String.fromCharCode(109,112,101,103,0);
          let back5 = 3.0;
          let countdownc = 4.0;
          let anytimeP: Array<any> = [String.fromCharCode(98,100,119,110,0), String.fromCharCode(112,97,108,108,101,116,101,0), String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0)];
         containerh.push(parseInt(`${internetu}`) - 2);
         infof.push(1);
         liveC = `${liveC.length << (Math.min(Math.abs(2), 4))}`;
         back5 /= Math.max(infof.length, 2);
         countdownc -= parseInt(`${countdownc}`);
         anytimeP = [parseInt(`${back5}`) * infof.length];
         break;
      }
         googley *= parseFloat(`${1}`);
          let viewsq = String.fromCharCode(103,100,115,112,0);
         containerh.push(2 + parseInt(`${internetu}`));
         viewsq = `${viewsq.length ^ 2}`;
       let stringn = String.fromCharCode(109,97,116,114,105,120,101,110,99,0);
       let middlep = String.fromCharCode(97,110,97,108,121,115,101,0);
      bannerW += `${confirmationh.length * confirmationD.length}`;
   }
       let invitei = false;
       let searchbarU = String.fromCharCode(101,115,116,97,98,108,105,115,104,0);
       let controlsv = String.fromCharCode(114,108,105,110,101,0);
          let telegramK = 2.0;
          let fillm = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,0);
         invitei = controlsv == String.fromCharCode(119,0);
         telegramK -= (parseFloat(`${fillm == String.fromCharCode(98,0) ? fillm.length : parseInt(`${telegramK}`)}`));
          let kickk = true;
         searchbarU += `${((kickk ? 4 : 4))}`;
      while (!invitei || 3 > controlsv.length) {
         invitei = controlsv.length >= 36;
         break;
      }
       let telegramI = String.fromCharCode(97,117,103,109,101,110,116,101,100,0);
       let applee = String.fromCharCode(115,117,98,0);
      let episodeI = invitei ? !invitei : invitei;
      do {
          let thailandA = true;
          let controlsC = 4.0;
          let rewindX = true;
          let grayi = 5.0;
          let temperature3 = String.fromCharCode(106,111,105,110,101,114,95,107,95,51,54,0);
         invitei = (telegramI.length + parseInt(`${controlsC}`)) < 80;
         thailandA = rewindX;
         controlsC += (parseInt(`${grayi}`) * (rewindX ? 4 : 5));
         grayi -= temperature3.length;
         temperature3 = `${temperature3.length}`;
         if (episodeI) {
            break;
         }
      } while (episodeI && (invitei || searchbarU.length == 1));
          let refresh6 = false;
          let tumbnailb = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,0);
          let userE = String.fromCharCode(99,97,110,110,111,116,0);
         controlsv += "1";
         refresh6 = tumbnailb.length > 49;
         tumbnailb += `${((refresh6 ? 4 : 4))}`;
         userE = `${(userE == String.fromCharCode(55,0) ? userE.length : tumbnailb.length)}`;
      if (applee.length > telegramI.length) {
          let tumbnails = false;
          let backwardV = 1;
         telegramI = `${((invitei ? 1 : 2) & 2)}`;
         tumbnails = !tumbnails;
         backwardV >>= Math.min(Math.abs(backwardV * 1), 1);
      }
         applee += "2";
         invitei = searchbarU == String.fromCharCode(114,0);
      helperY -= parseFloat(`${contextl}`);
   if (confirmationh.length < china5) {
      china5 <<= Math.min(5, Math.abs(sheetj.length | analytics2));
   }
   while (analytics2 >= 5) {
       let modal4 = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,115,0);
       let gemfile9 = String.fromCharCode(119,121,99,104,101,112,114,111,111,102,0);
         modal4 = `${3 - modal4.length}`;
         modal4 += `${modal4.length / (Math.max(1, 2))}`;
          let megaphonen = 0.0;
          let gesturese = 5;
          let filter2: Map<any, any> = new Map([[String.fromCharCode(109,97,99,114,111,115,0),332], [String.fromCharCode(117,110,105,102,111,114,109,0),125]]);
         modal4 += `${3 >> (Math.min(3, Math.abs(parseInt(`${megaphonen}`))))}`;
         megaphonen -= parseFloat(`${3}`);
         gesturese >>= Math.min(2, Math.abs(filter2.size * 2));
         filter2.set(`${gesturese}`, filter2.size - gesturese);
      if (3 < modal4.length) {
         modal4 = `${2 | modal4.length}`;
      }
      if (gemfile9 == String.fromCharCode(86,0) || 3 == modal4.length) {
          let productE: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,0),true ], [String.fromCharCode(103,97,116,105,110,103,0),false ]]);
         modal4 += `${modal4.length / (Math.max(gemfile9.length, 4))}`;
         productE.set(`${productE.size}`, productE.size);
      }
         modal4 += `${modal4.length - gemfile9.length}`;
      emojiy += (String.fromCharCode(52,0) == confirmationD ? confirmationD.length : confirmationh.length);
      break;
   }
       let mappinga = String.fromCharCode(110,105,103,104,116,0);
       let spinner3 = String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,0);
         mappinga = `${(mappinga == String.fromCharCode(75,0) ? mappinga.length : spinner3.length)}`;
      for (let b = 0; b < 2; b++) {
         spinner3 = `${mappinga.length}`;
      }
      while (!mappinga.includes(`${spinner3.length}`)) {
         spinner3 = `${mappinga.length * spinner3.length}`;
         break;
      }
         mappinga = `${spinner3.length << (Math.min(Math.abs(1), 5))}`;
         mappinga += `${mappinga.length}`;
         mappinga += `${mappinga.length}`;
      bingd += spinner3.length;
   let promotionx = 5741419 <= penaltyI.size;
   do {
      penaltyI = new Map([[`${china5}`, 2]]);
      if (promotionx) {
         break;
      }
   } while (promotionx && (penaltyI.get(`${china5}`) == null));
   while (penaltyI.get(`${emojiy}`) == null) {
       let sheetX = 0.0;
          let ping1: Array<any> = [808, 536];
          let usernameI = 1;
         sheetX /= Math.max(3, parseFloat(`${ping1.length / 1}`));
         ping1 = [usernameI];
          let loadingO = 5.0;
          let delegate_ig5: Array<any> = [721, 836];
         sheetX += parseFloat(`${delegate_ig5.length * 3}`);
         loadingO += parseFloat(`${parseInt(`${loadingO}`) | parseInt(`${loadingO}`)}`);
         delegate_ig5.push(parseInt(`${loadingO}`));
       let incidentF: Array<any> = [852, 934];
       let statisticsH: Array<any> = [15, 476];
      emojiy -= (String.fromCharCode(56,0) == sheetj ? parseInt(`${emojiy}`) : sheetj.length);
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
       let profiles = 5.0;
    let paginations = 1.0;
    let bannery = String.fromCharCode(104,119,99,111,110,102,105,103,95,114,95,50,49,0);
    let dangert: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,108,121,0),15], [String.fromCharCode(105,99,111,110,115,0),879], [String.fromCharCode(98,97,114,114,101,116,116,95,110,95,53,56,0),927]]);
    let animationJ = String.fromCharCode(117,110,112,114,111,116,101,99,116,0);
    let catalogR = true;
    let viewsM = String.fromCharCode(110,111,116,105,102,105,101,115,95,53,95,55,57,0);
    let showJ = 5.0;
   let settingsU = 9181005 >= viewsM.length;
   do {
      viewsM = `${(3 >> (Math.min(3, Math.abs((catalogR ? 1 : 1)))))}`;
      if (settingsU) {
         break;
      }
   } while (settingsU && (viewsM.includes(`${profiles}`)));
      bannery += `${3 << (Math.min(4, animationJ.length))}`;
       let clockw = String.fromCharCode(105,102,97,115,116,0);
       let gpayi = String.fromCharCode(101,120,112,97,110,115,105,111,110,0);
          let streamingF: Array<any> = [String.fromCharCode(101,110,117,109,101,114,97,116,101,100,0), String.fromCharCode(108,95,52,0), String.fromCharCode(105,110,102,95,54,95,51,50,0)];
         gpayi = `${clockw.length - 2}`;
         streamingF.push(3 * streamingF.length);
      if (gpayi == clockw) {
         clockw += `${clockw.length}`;
      }
      for (let i = 0; i < 2; i++) {
         clockw += `${gpayi.length & clockw.length}`;
      }
      for (let w = 0; w < 3; w++) {
         clockw = `${clockw.length}`;
      }
          let corner1 = 3.0;
         gpayi += `${clockw.length - parseInt(`${corner1}`)}`;
          let moret = String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,0);
          let membership_ = true;
         clockw += `${1 & moret.length}`;
      profiles += ((catalogR ? 5 : 5) & parseInt(`${paginations}`));
      catalogR = bannery.length < 78;
      dangert = new Map([[viewsM, (2 - (catalogR ? 1 : 2))]]);
       let groupp = String.fromCharCode(115,116,97,116,117,115,101,115,0);
       let usernamer = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,0);
       let sansv: Map<any, any> = new Map([[String.fromCharCode(107,109,115,0),394], [String.fromCharCode(109,95,50,95,97,115,115,111,99,105,97,116,101,0),878]]);
      while (2 < (sansv.size | groupp.length)) {
         groupp = `${(String.fromCharCode(98,0) == groupp ? usernamer.length : groupp.length)}`;
         break;
      }
       let rankD = true;
       let videos = String.fromCharCode(103,95,49,49,95,113,119,111,114,100,0);
      while (4 > (sansv.size >> (Math.min(Math.abs(2), 5)))) {
         rankD = videos.length >= 19;
         break;
      }
         videos += `${videos.length}`;
      let time_ba = String.fromCharCode(118,104,49,109,0) == usernamer;
      do {
         usernamer += "3";
         if (time_ba) {
            break;
         }
      } while (time_ba && (usernamer.length >= 1));
      for (let s = 0; s < 1; s++) {
          let dark3 = String.fromCharCode(108,101,114,116,0);
          let shirt0: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,108,115,0),247], [String.fromCharCode(115,99,97,108,101,0),338], [String.fromCharCode(112,97,99,107,105,110,103,0),544]]);
          let indexd = String.fromCharCode(105,95,50,54,95,117,117,105,100,112,114,111,102,0);
          let successN: Array<any> = [571, 420];
          let bottoml = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,0);
         rankD = indexd.length == 77;
         dark3 = `${shirt0.size}`;
         shirt0 = new Map([[`${successN.length}`, 2 & bottoml.length]]);
         indexd += `${bottoml.length}`;
         successN.push(successN.length);
      }
          let component7: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,0),true ], [String.fromCharCode(99,95,57,49,95,115,117,112,112,111,114,116,115,0),true ], [String.fromCharCode(121,117,118,112,0),true ]]);
          let umengc: Array<any> = [667, 367];
          let long_tY = 0;
         groupp = `${videos.length ^ 3}`;
         component7.set(`${long_tY}`, long_tY);
         umengc = [umengc.length - 1];
       let tumbnail0: Array<any> = [923, 367, 34];
       let shrinks: Array<any> = [150, 301];
      catalogR = animationJ == groupp;
      profiles += 3 | parseInt(`${profiles}`);
       let video7 = String.fromCharCode(115,101,108,0);
       let episodeO = String.fromCharCode(114,101,119,97,114,100,0);
       let configt = 3.0;
      for (let s = 0; s < 3; s++) {
         episodeO += `${2 ^ parseInt(`${configt}`)}`;
      }
          let shrinkk: Array<any> = [546, 716];
         episodeO = `${episodeO.length | parseInt(`${configt}`)}`;
         shrinkk.push(shrinkk.length >> (Math.min(5, shrinkk.length)));
      let popupk = 8910382 >= video7.length;
      do {
          let fillx = String.fromCharCode(108,115,104,105,102,116,0);
          let viewsj: Array<any> = [324, 687];
         video7 = "3";
         fillx += `${fillx.length | viewsj.length}`;
         viewsj = [fillx.length];
         if (popupk) {
            break;
         }
      } while ((episodeO == video7) && popupk);
      while (episodeO.length == parseInt(`${configt}`)) {
         configt += parseFloat(`${episodeO.length}`);
         break;
      }
         configt /= Math.max(1, parseFloat(`${episodeO.length}`));
          let bootsplashZ = String.fromCharCode(105,115,112,108,97,121,95,120,95,56,52,0);
          let rewindP = String.fromCharCode(114,101,102,111,99,117,115,95,105,95,53,53,0);
         configt *= parseFloat(`${1 * bootsplashZ.length}`);
         bootsplashZ = `${rewindP.length}`;
         rewindP += `${rewindP.length + 1}`;
         video7 += "3";
      if (1 == (episodeO.length << (Math.min(Math.abs(4), 3)))) {
         episodeO += `${video7.length | episodeO.length}`;
      }
          let placeholderZ: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,99,111,110,102,105,103,0),846], [String.fromCharCode(103,95,57,49,95,98,101,99,104,0),251]]);
          let eventP = String.fromCharCode(107,95,55,48,95,104,121,112,104,101,110,97,116,101,100,0);
          let indicatorY = true;
         episodeO = "3";
         placeholderZ = new Map([[`${placeholderZ.size}`, placeholderZ.size]]);
         eventP += `${placeholderZ.size ^ 2}`;
         indicatorY = eventP == String.fromCharCode(80,0);
      catalogR = (bannery.length | dangert.size) < 67;
      bannery = "2";

    setShowSliderThumbnail(!showSliderThumbnail);

   while (3.59 <= (1.55 / (Math.max(5, profiles)))) {
      bannery += `${(String.fromCharCode(51,0) == animationJ ? parseInt(`${profiles}`) : animationJ.length)}`;
      break;
   }
   while ((5 * bannery.length) >= 5 && 4 >= (bannery.length * 5)) {
      bannery += `${parseInt(`${paginations}`)}`;
      break;
   }
      dangert.set(animationJ, animationJ.length - 1);
   let yellowL = catalogR ? !catalogR : catalogR;
   do {
      catalogR = bannery == viewsM;
      if (yellowL) {
         break;
      }
   } while ((!bannery.includes(`${catalogR}`)) && yellowL);
      animationJ = "2";
      animationJ += "1";
   if (!catalogR) {
      dangert.set(`${paginations}`, parseInt(`${paginations}`) >> (Math.min(Math.abs(1), 2)));
   }
      viewsM = `${viewsM.length}`;
       let firebaseL = String.fromCharCode(112,101,114,115,111,110,0);
       let selectionD = 1.0;
       let emojiz = String.fromCharCode(116,97,112,112,101,100,0);
      let detailsC = selectionD <= 6137908.0;
      do {
         selectionD -= 2 & emojiz.length;
         if (detailsC) {
            break;
         }
      } while ((4.28 < selectionD) && detailsC);
         selectionD /= Math.max(parseInt(`${selectionD}`), 5);
      while (4.7 >= selectionD) {
         selectionD -= 3 ^ parseInt(`${selectionD}`);
         break;
      }
         selectionD -= emojiz.length;
          let hejir = 4;
          let membera = 5.0;
         selectionD += 2;
         hejir *= 2;
         membera *= hejir << (Math.min(5, Math.abs(3)));
          let clubj = true;
         emojiz += `${emojiz.length}`;
         clubj = (!clubj ? !clubj : !clubj);
      while (firebaseL.length < emojiz.length) {
         firebaseL += `${1 >> (Math.min(1, firebaseL.length))}`;
         break;
      }
         selectionD -= firebaseL.length * parseInt(`${selectionD}`);
      let sheet0 = 8109587.0 >= selectionD;
      do {
         selectionD -= firebaseL.length * parseInt(`${selectionD}`);
         if (sheet0) {
            break;
         }
      } while ((3 == (parseInt(`${selectionD}`) * emojiz.length) || 4 == (3 & emojiz.length)) && sheet0);
      bannery = `${firebaseL.length}`;
    delayControls(!paused);

       let expiredi = String.fromCharCode(114,101,108,111,97,100,105,110,103,0);
       let macauK = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,0);
       let storeE = String.fromCharCode(115,107,101,108,101,116,111,110,0);
      while (macauK == storeE) {
         storeE += `${storeE.length ^ expiredi.length}`;
         break;
      }
          let mappingZ = String.fromCharCode(105,115,101,109,112,116,121,0);
         expiredi = `${expiredi.length}`;
         mappingZ = `${3 - mappingZ.length}`;
      while (storeE == String.fromCharCode(110,0)) {
         macauK += `${storeE.length / (Math.max(macauK.length, 5))}`;
         break;
      }
       let whistleK: Array<any> = [920, 32, 518];
      while (expiredi == String.fromCharCode(50,0)) {
         macauK = `${whistleK.length | 1}`;
         break;
      }
      bannery += `${parseInt(`${profiles}`) << (Math.min(2, Math.abs(1)))}`;
       let whistleV: Map<any, any> = new Map([[String.fromCharCode(122,98,117,102,0),false ], [String.fromCharCode(101,114,97,115,101,100,0),true ]]);
       let orangeQ = 0;
      let currentu = 9801536 >= whistleV.size;
      do {
         whistleV.set(`${orangeQ}`, whistleV.size);
         if (currentu) {
            break;
         }
      } while (currentu && (whistleV.get(`${orangeQ}`) == null));
         whistleV.set(`${orangeQ}`, orangeQ / (Math.max(whistleV.size, 7)));
          let bellO = 4.0;
          let main_hz = String.fromCharCode(116,117,110,110,101,108,105,110,103,95,113,95,51,49,0);
          let playlisto = String.fromCharCode(101,110,117,109,101,114,97,116,101,0);
         orangeQ <<= Math.min(3, Math.abs(parseInt(`${bellO}`) ^ 3));
         bellO += (parseFloat(`${String.fromCharCode(86,0) == playlisto ? playlisto.length : main_hz.length}`));
         main_hz += `${(String.fromCharCode(81,0) == main_hz ? main_hz.length : playlisto.length)}`;
      if (whistleV.get(`${orangeQ}`) == null) {
         orangeQ ^= orangeQ | whistleV.size;
      }
          let topicZ = true;
         orangeQ &= orangeQ;
         topicZ = !topicZ;
         whistleV = new Map([[`${whistleV.size}`, 2]]);
      showJ *= orangeQ;
   if (Array.from(dangert.values()).includes(paginations)) {
      paginations += parseFloat(`${viewsM.length << (Math.min(Math.abs(1), 3))}`);
   }
   while (showJ <= 1.50) {
      bannery = `${animationJ.length + 1}`;
      break;
   }
   let showE = 7827967.0 >= profiles;
   do {
      profiles -= animationJ.length;
      if (showE) {
         break;
      }
   } while (showE && (profiles == 3.0));
      paginations /= Math.max(1, parseFloat(`${animationJ.length}`));
   if (!bannery.endsWith(`${paginations}`)) {
       let room1 = 0.0;
       let appleC = String.fromCharCode(100,101,110,111,105,115,101,114,0);
       let sportsx = true;
       let volumeM: Array<any> = [323, 544];
       let fcopy_d81 = true;
       let lessp = 1.0;
       let leagueh = 2.0;
       let actiony = String.fromCharCode(116,97,107,101,110,0);
      while (2 <= (volumeM.length >> (Math.min(Math.abs(4), 2)))) {
          let sellC = String.fromCharCode(102,97,110,116,111,109,0);
         sportsx = sellC.length <= 32 && !fcopy_d81;
         break;
      }
         leagueh += volumeM.length << (Math.min(Math.abs(2), 1));
         fcopy_d81 = actiony.length == 72;
      let liver = sportsx ? !sportsx : sportsx;
      do {
         sportsx = (parseInt(`${leagueh}`) + volumeM.length) < 47;
         if (liver) {
            break;
         }
      } while (liver && (2.3 == (2.10 * room1)));
      if (sportsx) {
         sportsx = 87 == volumeM.length;
      }
         lessp /= Math.max(4, ((sportsx ? 1 : 3) % (Math.max(3, appleC.length))));
      let skipm = fcopy_d81 ? !fcopy_d81 : fcopy_d81;
      do {
          let album5 = 3.0;
          let albumV = String.fromCharCode(102,97,114,95,118,95,54,53,0);
          let xvods = true;
          let buttonF = String.fromCharCode(99,121,97,110,0);
         fcopy_d81 = (buttonF.length - parseInt(`${lessp}`)) >= 64;
         album5 *= (parseFloat(`${(xvods ? 2 : 1)}`));
         albumV = `${albumV.length}`;
         xvods = !xvods || albumV.length <= 16;
         buttonF = `${albumV.length - 2}`;
         if (skipm) {
            break;
         }
      } while (((2 << (Math.min(2, volumeM.length))) > 3 || 2 > volumeM.length) && skipm);
      while (!appleC.endsWith(`${leagueh}`)) {
          let helperx = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,0);
          let eighteenC = 3.0;
          let chatN = 3.0;
         appleC = `${1 + parseInt(`${leagueh}`)}`;
         helperx = `${(String.fromCharCode(89,0) == helperx ? parseInt(`${eighteenC}`) : helperx.length)}`;
         eighteenC -= parseInt(`${eighteenC}`) - 3;
         chatN += (parseFloat(`${helperx == String.fromCharCode(106,0) ? parseInt(`${chatN}`) : helperx.length}`));
         break;
      }
          let episodesV = 4.0;
         appleC += `${(parseInt(`${lessp}`) & (sportsx ? 2 : 3))}`;
         episodesV += parseFloat(`${parseInt(`${episodesV}`) + parseInt(`${episodesV}`)}`);
          let y_count3: Array<any> = [String.fromCharCode(99,114,111,115,115,102,97,100,101,0), String.fromCharCode(114,101,108,97,116,105,118,101,108,121,0)];
          let plusZ = String.fromCharCode(97,117,116,111,102,105,108,108,95,113,95,53,48,0);
         fcopy_d81 = 81 <= y_count3.length && plusZ.length <= 81;
      if (1.26 >= (lessp * 4.20)) {
         fcopy_d81 = !appleC.includes(`${room1}`);
      }
          let mutedl = 4.0;
          let twitterV = String.fromCharCode(108,111,119,99,111,109,112,0);
          let sortN: Map<any, any> = new Map([[String.fromCharCode(97,100,118,97,110,99,105,110,103,0),131], [String.fromCharCode(103,97,109,97,0),518]]);
         fcopy_d81 = (volumeM.length * lessp) <= 52.77;
         mutedl -= parseFloat(`${sortN.size << (Math.min(twitterV.length, 1))}`);
         twitterV += "2";
         sortN.set(`${mutedl}`, parseInt(`${mutedl}`) * sortN.size);
         actiony = `${((fcopy_d81 ? 4 : 2) % (Math.max(1, parseInt(`${leagueh}`))))}`;
      bannery += "2";
   }
       let episodes8 = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,57,95,57,57,0);
       let floatern = String.fromCharCode(119,114,105,116,101,99,104,101,99,107,0);
         episodes8 = `${floatern.length}`;
      if (floatern.length <= 2 || episodes8.length <= 2) {
          let actionsj = String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,109,95,57,54,0);
          let tooltipsv = 0;
          let e_centerv = 0.0;
         episodes8 = "1";
         actionsj += `${3 / (Math.max(tooltipsv, 3))}`;
         tooltipsv /= Math.max(2, actionsj.length * 2);
         e_centerv /= Math.max(5, parseInt(`${e_centerv}`));
      }
      if (episodes8 == floatern) {
         floatern = `${floatern.length}`;
      }
         episodes8 += `${2 >> (Math.min(4, episodes8.length))}`;
      while (floatern.length >= 2) {
         floatern += `${floatern.length << (Math.min(2, episodes8.length))}`;
         break;
      }
          let hooksh = String.fromCharCode(117,114,118,101,95,55,95,49,55,0);
         floatern += `${(episodes8 == String.fromCharCode(53,0) ? hooksh.length : episodes8.length)}`;
      paginations /= Math.max((parseFloat(`${episodes8 == String.fromCharCode(110,0) ? episodes8.length : parseInt(`${paginations}`)}`)), 2);
   if (viewsM.length == animationJ.length) {
      viewsM = `${bannery.length % 1}`;
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let playlist5 = 1;
    let scorex = 5.0;
    let matha: Array<any> = [378, 75];
    let frame_1J = String.fromCharCode(97,99,99,101,112,116,101,100,0);
    let typese = String.fromCharCode(98,105,108,105,110,101,97,114,0);
    let cornerV = String.fromCharCode(112,95,54,56,95,102,111,114,101,97,99,104,0);
    let notificationb = true;
    let awayj = true;
    let helperz = 1;
    let renewV = true;
    let termsX = 0;
    let vietnam1 = String.fromCharCode(116,121,112,95,57,95,52,50,0);
    let helperF = 1;
   for (let s = 0; s < 3; s++) {
      renewV = frame_1J == String.fromCharCode(97,0);
   }
   if (2 == helperz) {
      helperz *= (termsX | (awayj ? 5 : 5));
   }
   for (let r = 0; r < 1; r++) {
       let borderlessl = false;
       let flyerR: Array<any> = [144, 270, 727];
       let moviesi: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,0),665], [String.fromCharCode(112,97,114,116,110,101,114,0),840]]);
       let teamv = 4;
       let penaltyv = String.fromCharCode(102,97,99,105,108,105,116,97,116,101,0);
      let changeG = flyerR.length <= 7194780;
      do {
         flyerR.push(moviesi.size);
         if (changeG) {
            break;
         }
      } while ((5 <= (moviesi.size & flyerR.length) || 5 <= (flyerR.length & moviesi.size)) && changeG);
       let detailt = 2;
      while (teamv < 3 || 2 < (teamv / (Math.max(3, 2)))) {
         borderlessl = 23 <= teamv;
         break;
      }
      for (let k = 0; k < 1; k++) {
         flyerR = [moviesi.size * 1];
      }
          let pageo = String.fromCharCode(115,116,97,116,0);
          let friendsC: Array<any> = [951, 292];
          let paginationi: Array<any> = [String.fromCharCode(107,101,121,115,116,114,101,97,109,0), String.fromCharCode(110,97,99,107,0), String.fromCharCode(115,101,116,116,101,114,95,119,95,53,50,0)];
         borderlessl = moviesi.size >= 19;
         pageo = `${friendsC.length & pageo.length}`;
         friendsC.push(friendsC.length);
         paginationi.push(pageo.length % 3);
       let models6: Array<any> = [114, 210];
      for (let x = 0; x < 2; x++) {
         moviesi = new Map([[`${flyerR.length}`, flyerR.length]]);
      }
      let eighteen0 = 9135000 >= flyerR.length;
      do {
         flyerR.push(2);
         if (eighteen0) {
            break;
         }
      } while (eighteen0 && (flyerR.length == 4 || 5 == (4 | flyerR.length)));
      if (2 >= (moviesi.size << (Math.min(2, flyerR.length)))) {
         flyerR.push(2 ^ flyerR.length);
      }
         detailt -= penaltyv.length;
         borderlessl = (((borderlessl ? models6.length : 59) / (Math.max(models6.length, 5))) < 59);
      for (let z = 0; z < 2; z++) {
          let expiredl = String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,0);
          let downloadere = String.fromCharCode(99,114,101,97,116,101,100,0);
          let floater4 = 2.0;
          let feedbacki = 1;
         moviesi = new Map([[`${flyerR.length}`, teamv / 2]]);
         expiredl = "3";
         downloadere = `${feedbacki}`;
         floater4 -= parseFloat(`${3}`);
         feedbacki -= 1;
      }
          let hoverU = 5.0;
         teamv *= 1;
         hoverU -= parseFloat(`${parseInt(`${hoverU}`)}`);
          let updatesW = 3.0;
          let headerU = 1;
         penaltyv += "2";
         updatesW += parseFloat(`${headerU}`);
         headerU >>= Math.min(3, Math.abs(2));
         flyerR.push(moviesi.size << (Math.min(Math.abs(1), 2)));
      termsX -= frame_1J.length ^ 1;
   }
      termsX -= typese.length;
   while (4 == frame_1J.length) {
       let mini9 = String.fromCharCode(97,116,116,114,97,99,116,111,114,0);
      let downloadG = mini9 == String.fromCharCode(54,118,104,120,121,109,111,105,0);
      do {
         mini9 += `${mini9.length}`;
         if (downloadG) {
            break;
         }
      } while ((mini9.length >= 2) && downloadG);
         mini9 += `${(mini9 == String.fromCharCode(103,0) ? mini9.length : mini9.length)}`;
          let currentS: Map<any, any> = new Map([[String.fromCharCode(104,100,97,116,97,0),true ], [String.fromCharCode(115,101,110,100,116,111,0),true ], [String.fromCharCode(112,114,101,118,105,101,119,0),true ]]);
          let bootsplasha = String.fromCharCode(112,108,97,121,101,114,0);
         mini9 += `${bootsplasha.length}`;
         currentS.set(`${currentS.size}`, currentS.size + currentS.size);
         bootsplasha = `${currentS.size | currentS.size}`;
      frame_1J += `${termsX & typese.length}`;
      break;
   }
   let humidityW = awayj ? !awayj : awayj;
   do {
       let clubF = 2.0;
       let feedbackM: Map<any, any> = new Map([[String.fromCharCode(104,113,120,100,115,112,95,50,95,52,48,0),352], [String.fromCharCode(118,97,108,105,100,105,116,121,0),55]]);
         clubF *= feedbackM.size << (Math.min(Math.abs(3), 2));
      for (let o = 0; o < 3; o++) {
          let blacklist0 = String.fromCharCode(108,95,55,57,95,115,112,105,110,110,105,110,103,0);
          let mode3 = String.fromCharCode(112,95,53,53,95,122,109,98,118,0);
          let friendso = String.fromCharCode(105,118,102,101,110,99,0);
          let pauset = 1.0;
         clubF /= Math.max(5, parseInt(`${pauset}`) ^ 1);
         blacklist0 = `${(blacklist0 == String.fromCharCode(69,0) ? mode3.length : blacklist0.length)}`;
         mode3 += `${(mode3 == String.fromCharCode(69,0) ? mode3.length : friendso.length)}`;
         friendso += `${(String.fromCharCode(81,0) == friendso ? friendso.length : mode3.length)}`;
         pauset /= Math.max(parseFloat(`${mode3.length / (Math.max(8, friendso.length))}`), 3);
      }
          let window_bmE = String.fromCharCode(115,111,97,99,99,101,112,116,0);
          let animationW = false;
          let disconnectedB = String.fromCharCode(108,111,117,100,110,101,115,115,0);
         clubF += window_bmE.length;
         window_bmE += "2";
         animationW = disconnectedB.length >= 37;
         disconnectedB += `${(disconnectedB.length - (animationW ? 4 : 1))}`;
      while (feedbackM.get(`${clubF}`) == null) {
         clubF /= Math.max(4, feedbackM.size);
         break;
      }
       let emptyR = String.fromCharCode(117,110,102,108,97,116,116,101,110,101,100,0);
       let pointh = String.fromCharCode(116,105,109,101,119,97,105,116,95,104,95,57,55,0);
         feedbackM.set(`${clubF}`, parseInt(`${clubF}`) % 2);
      awayj = clubF < scorex;
      if (humidityW) {
         break;
      }
   } while ((renewV) && humidityW);
   for (let d = 0; d < 1; d++) {
      playlist5 += termsX & 1;
   }
   while ((playlist5 | 3) > 5) {
      playlist5 |= ((awayj ? 1 : 3) % (Math.max(cornerV.length, 5)));
      break;
   }
   let inews5 = 8502067 <= cornerV.length;
   do {
       let progresst = 3.0;
       let untick3 = 2;
       let progress5 = String.fromCharCode(120,95,53,50,95,115,112,101,99,105,102,105,99,0);
       let linkm: Array<any> = [String.fromCharCode(116,114,101,101,116,111,107,95,107,95,49,49,0), String.fromCharCode(102,97,118,101,0), String.fromCharCode(110,111,110,110,101,103,0)];
       let gmaily: Array<any> = [915, 678];
         progress5 += `${gmaily.length ^ 3}`;
         progress5 += `${parseInt(`${progresst}`) / (Math.max(gmaily.length, 6))}`;
          let starc = String.fromCharCode(97,110,110,111,117,110,99,101,0);
         progress5 += `${untick3}`;
         starc = `${starc.length}`;
         progresst += parseFloat(`${untick3}`);
         linkm = [parseInt(`${progresst}`)];
      for (let u = 0; u < 3; u++) {
         progresst *= parseFloat(`${linkm.length}`);
      }
      if (3 <= (5 >> (Math.min(1, linkm.length))) || 5 <= (5 >> (Math.min(3, linkm.length)))) {
          let reducerB = 3.0;
          let expand4 = String.fromCharCode(122,95,52,54,95,97,112,112,114,111,112,114,105,97,116,101,0);
          let n_titleL: Array<any> = [String.fromCharCode(102,105,120,116,117,114,101,95,55,95,56,49,0), String.fromCharCode(109,97,120,105,109,105,122,101,100,95,115,95,53,54,0), String.fromCharCode(117,110,112,97,99,107,101,100,0)];
          let overlayw = false;
          let long_4O = 3.0;
         untick3 -= 1;
         reducerB += parseFloat(`${n_titleL.length}`);
         expand4 += `${(expand4 == String.fromCharCode(106,0) ? n_titleL.length : expand4.length)}`;
         overlayw = n_titleL.includes(reducerB);
         long_4O += ((overlayw ? 2 : 3) % 3);
      }
         untick3 >>= Math.min(4, Math.abs(1));
         progresst *= parseFloat(`${1 * parseInt(`${progresst}`)}`);
      for (let x = 0; x < 3; x++) {
          let logoutZ = String.fromCharCode(116,114,97,110,115,102,101,114,114,101,100,0);
         gmaily.push(1 % (Math.max(2, progress5.length)));
         logoutZ = `${logoutZ.length}`;
      }
      let detailc = progresst >= 9625129.0;
      do {
          let temp9 = String.fromCharCode(115,101,116,99,116,120,0);
          let update_th = String.fromCharCode(105,115,110,111,116,116,97,112,0);
         progresst *= parseFloat(`${linkm.length & gmaily.length}`);
         temp9 = `${1 ^ temp9.length}`;
         update_th = `${temp9.length >> (Math.min(update_th.length, 2))}`;
         if (detailc) {
            break;
         }
      } while ((3 < (untick3 << (Math.min(Math.abs(1), 5)))) && detailc);
      for (let g = 0; g < 3; g++) {
         untick3 -= untick3;
      }
      while (gmaily.length > linkm.length) {
         gmaily = [2];
         break;
      }
      while (progresst < 2.76) {
          let uploadj = String.fromCharCode(115,95,57,48,95,112,116,114,0);
          let button4 = false;
          let details7: Array<any> = [446, 160, 0];
         progresst /= Math.max((parseFloat(`${(button4 ? 3 : 1) << (Math.min(linkm.length, 2))}`)), 5);
         uploadj = `${uploadj.length >> (Math.min(Math.abs(1), 4))}`;
         button4 = details7.length >= uploadj.length;
         details7 = [uploadj.length << (Math.min(1, details7.length))];
         break;
      }
      let expande = 5558918 <= untick3;
      do {
         untick3 /= Math.max(gmaily.length, 2);
         if (expande) {
            break;
         }
      } while ((4 <= (gmaily.length << (Math.min(Math.abs(5), 1))) || (untick3 << (Math.min(Math.abs(5), 5))) <= 2) && expande);
      cornerV += `${playlist5 % 3}`;
      if (inews5) {
         break;
      }
   } while ((!notificationb && cornerV.length > 3) && inews5);
   for (let v = 0; v < 2; v++) {
      typese += `${parseInt(`${scorex}`) / 3}`;
   }
   let less7 = notificationb ? !notificationb : notificationb;
   do {
      notificationb = playlist5 > 36;
      if (less7) {
         break;
      }
   } while (less7 && (!notificationb && 1 <= (3 >> (Math.min(3, Math.abs(helperz))))));
   let logoh = scorex >= 8452029.0;
   do {
       let navigatione = false;
       let profileJ: Array<any> = [String.fromCharCode(97,95,57,57,95,99,101,108,108,115,0), String.fromCharCode(115,105,103,104,97,110,100,108,101,114,0), String.fromCharCode(119,95,53,53,95,109,111,100,105,102,121,0)];
      if (navigatione) {
          let indexG = String.fromCharCode(108,101,114,112,102,0);
          let championC = 3.0;
          let confirmationD = 2.0;
          let turnb = String.fromCharCode(105,110,116,101,114,101,115,116,0);
          let navigationt = String.fromCharCode(114,101,115,121,110,99,95,48,95,49,57,0);
         profileJ = [parseInt(`${confirmationD}`) + indexG.length];
         indexG = `${parseInt(`${championC}`)}`;
         championC /= Math.max(4, 1 << (Math.min(4, navigationt.length)));
         confirmationD -= parseFloat(`${parseInt(`${championC}`)}`);
         turnb += `${turnb.length << (Math.min(Math.abs(3), 2))}`;
         navigationt += `${navigationt.length | parseInt(`${championC}`)}`;
      }
      if (profileJ.length >= 5) {
         navigatione = !navigatione;
      }
         profileJ = [(profileJ.length >> (Math.min(4, Math.abs((navigatione ? 4 : 2)))))];
      for (let s = 0; s < 2; s++) {
         navigatione = profileJ.length <= 53;
      }
         navigatione = profileJ.includes(navigatione);
       let logoutG: Map<any, any> = new Map([[String.fromCharCode(100,112,97,103,101,0),520], [String.fromCharCode(101,108,101,109,101,110,116,0),837], [String.fromCharCode(114,102,102,116,105,0),866]]);
       let descW: Map<any, any> = new Map([[String.fromCharCode(114,105,112,101,109,100,0),168], [String.fromCharCode(99,111,108,111,114,101,100,0),423], [String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,0),911]]);
      scorex *= termsX - cornerV.length;
      if (logoh) {
         break;
      }
   } while ((5.54 <= (5.46 - scorex) && !renewV) && logoh);
   while ((matha.length - helperz) > 5 && (helperz - matha.length) > 5) {
       let statistics0 = true;
       let bally: Map<any, any> = new Map([[String.fromCharCode(108,101,103,97,99,121,0),166], [String.fromCharCode(114,101,103,105,115,116,101,114,0),268], [String.fromCharCode(108,111,119,101,115,116,0),309]]);
       let t_playerb: Array<any> = [548, 862, 649];
       let hcopy_5k = 0.0;
      let infoa = t_playerb.length >= 6844332;
      do {
         t_playerb = [((statistics0 ? 4 : 1) - 1)];
         if (infoa) {
            break;
         }
      } while (((4.17 * hcopy_5k) <= 4.51 && 4.17 <= (hcopy_5k * parseFloat(`${t_playerb.length}`))) && infoa);
         hcopy_5k /= Math.max(parseFloat(`${t_playerb.length}`), 1);
          let tempr = 3;
          let configure4 = String.fromCharCode(116,102,114,97,0);
          let dialogN = String.fromCharCode(108,115,112,112,111,108,121,102,0);
         t_playerb = [3 >> (Math.min(2, configure4.length))];
         tempr %= Math.max(2, dialogN.length);
         configure4 += `${(dialogN == String.fromCharCode(49,0) ? tempr : dialogN.length)}`;
      let privilegeu = hcopy_5k >= 6351989.0;
      do {
         hcopy_5k -= parseFloat(`${bally.size}`);
         if (privilegeu) {
            break;
         }
      } while (privilegeu && (t_playerb.includes(hcopy_5k)));
      for (let f = 0; f < 2; f++) {
          let selectedi = String.fromCharCode(112,114,101,112,114,111,99,101,115,115,0);
          let closeV = 5.0;
          let j_centeri = false;
         hcopy_5k /= Math.max(3, parseFloat(`${1}`));
         selectedi += `${((j_centeri ? 2 : 5) + parseInt(`${closeV}`))}`;
         closeV *= (selectedi == String.fromCharCode(100,0) ? parseInt(`${closeV}`) : selectedi.length);
         j_centeri = closeV < 68.93;
      }
      let pointz = 7768770 >= bally.size;
      do {
         bally = new Map([[`${t_playerb.length}`, 2]]);
         if (pointz) {
            break;
         }
      } while (pointz && (!Array.from(bally.values()).includes(t_playerb.length)));
          let eventn = 0.0;
          let assistQ = 4;
          let backwardH = false;
         t_playerb = [(1 & (statistics0 ? 4 : 4))];
         eventn *= parseFloat(`${parseInt(`${eventn}`)}`);
         assistQ /= Math.max((assistQ >> (Math.min(4, Math.abs((backwardH ? 3 : 2))))), 4);
         backwardH = !backwardH && 58 >= assistQ;
       let episodec: Array<any> = [537, 591, 629];
       let minivodn: Array<any> = [String.fromCharCode(116,119,111,115,99,97,108,101,95,52,95,51,52,0), String.fromCharCode(110,101,101,100,101,100,0)];
      helperz *= matha.length;
      break;
   }
      typese = `${((notificationb ? 4 : 1))}`;
       let subs0 = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,0);
       let clearH = 5;
      if (subs0.length < clearH) {
          let d_lockA: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,0),521], [String.fromCharCode(115,104,97,108,108,0),990], [String.fromCharCode(117,116,116,101,114,97,110,99,101,0),581]]);
         clearH /= Math.max(d_lockA.size, 2);
      }
      if ((5 & subs0.length) == 1 || (5 & clearH) == 5) {
         subs0 += `${clearH}`;
      }
      for (let g = 0; g < 1; g++) {
         subs0 = `${clearH}`;
      }
         clearH += clearH;
          let giftK: Map<any, any> = new Map([[String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,0),406], [String.fromCharCode(116,97,107,101,111,117,116,0),427], [String.fromCharCode(101,95,54,56,95,100,97,98,97,115,101,0),909]]);
          let sportsE = false;
          let actionsR = true;
         subs0 = `${((actionsR ? 5 : 3) / (Math.max(1, giftK.size)))}`;
         giftK.set(`${sportsE}`, ((sportsE ? 4 : 2) >> (Math.min(5, Math.abs(2)))));
          let downloadu = 0;
          let relatedn = String.fromCharCode(100,105,109,109,101,100,0);
          let backwardE = 2.0;
         subs0 += "1";
         downloadu %= Math.max(5, (String.fromCharCode(118,0) == relatedn ? downloadu : relatedn.length));
         backwardE /= Math.max(2, parseFloat(`${downloadu}`));
      renewV = cornerV.length == 92 || !awayj;
       let recommendationW = 2.0;
       let analyticsL: Map<any, any> = new Map([[String.fromCharCode(119,97,116,101,114,109,97,114,107,115,0),829], [String.fromCharCode(99,111,110,102,105,103,117,114,101,114,0),742], [String.fromCharCode(99,97,118,115,105,100,99,116,0),218]]);
         recommendationW *= analyticsL.size;
       let homeJ = 5.0;
       let winda = 1.0;
      while (analyticsL.get(`${homeJ}`) == null) {
         analyticsL.set(`${winda}`, 1 << (Math.min(Math.abs(parseInt(`${winda}`)), 4)));
         break;
      }
      for (let a = 0; a < 3; a++) {
          let inviteB = String.fromCharCode(102,116,114,117,110,99,97,116,101,0);
          let tumbnailW = false;
          let upgrade2 = true;
          let untickx = String.fromCharCode(115,113,117,101,101,122,101,0);
          let s_centerM: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,108,101,107,104,122,0),true ], [String.fromCharCode(100,114,101,102,0),true ], [String.fromCharCode(111,100,100,97,118,103,0),true ]]);
         winda -= (parseFloat(`${inviteB == String.fromCharCode(57,0) ? inviteB.length : (upgrade2 ? 5 : 2)}`));
         tumbnailW = !tumbnailW;
         upgrade2 = (untickx.length << (Math.min(5, Math.abs(s_centerM.size)))) < 74;
         untickx += `${(String.fromCharCode(69,0) == untickx ? untickx.length : (tumbnailW ? 2 : 3))}`;
         s_centerM = new Map([[`${s_centerM.size}`, s_centerM.size ^ untickx.length]]);
      }
          let stepP = String.fromCharCode(112,101,101,108,95,116,95,49,51,0);
          let models: Map<any, any> = new Map([[String.fromCharCode(107,108,97,121,116,110,0),984], [String.fromCharCode(117,110,101,120,112,101,99,116,101,100,0),594]]);
         analyticsL.set(`${stepP}`, models.size);
         homeJ += parseFloat(`${1}`);
      matha.push(typese.length);
   while ((parseInt(`${scorex}`) - typese.length) == 2 && (typese.length & 2) == 3) {
      typese += `${helperz}`;
      break;
   }
      playlist5 /= Math.max(cornerV.length - 3, 3);
       let register_vG = true;
       let playlistC: Array<any> = [683, 392, 832];
       let unreadE: Array<any> = [138, 54, 200];
      for (let d = 0; d < 2; d++) {
         unreadE = [1];
      }
         unreadE = [unreadE.length % (Math.max(1, 10))];
      while ((5 << (Math.min(5, playlistC.length))) <= 3) {
         register_vG = ((playlistC.length - (!register_vG ? playlistC.length : 92)) == 92);
         break;
      }
          let tickedo = false;
         playlistC.push(2);
      let suggestionn = playlistC.length <= 8907306;
      do {
         playlistC.push(playlistC.length);
         if (suggestionn) {
            break;
         }
      } while ((unreadE.length >= playlistC.length) && suggestionn);
      let clubt = 9383278 <= playlistC.length;
      do {
         playlistC = [playlistC.length];
         if (clubt) {
            break;
         }
      } while (clubt && (unreadE.includes(playlistC.length)));
      while (unreadE.length >= playlistC.length) {
         unreadE = [unreadE.length & 1];
         break;
      }
      if (!register_vG || 2 == (1 * playlistC.length)) {
         playlistC.push((2 >> (Math.min(5, Math.abs((register_vG ? 4 : 1))))));
      }
      for (let s = 0; s < 1; s++) {
         register_vG = 6 > unreadE.length;
      }
      awayj = matha.length > typese.length;
   for (let e = 0; e < 2; e++) {
      playlist5 &= ((awayj ? 2 : 3) % 3);
   }
       let containerW = String.fromCharCode(115,95,50,55,95,100,111,117,98,108,105,110,103,0);
          let nativeA = String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,0);
          let arrowO = String.fromCharCode(117,110,97,108,105,103,110,101,100,0);
         containerW = "1";
         nativeA += "3";
         arrowO += `${(nativeA == String.fromCharCode(70,0) ? nativeA.length : arrowO.length)}`;
         containerW = `${containerW.length ^ 1}`;
      let orange7 = containerW.length >= 8722033;
      do {
          let hooksp = 5;
          let memberZ = 5;
          let selectione = 3;
         containerW = `${hooksp - containerW.length}`;
         hooksp /= Math.max(5, memberZ % (Math.max(2, 7)));
         memberZ /= Math.max(selectione / (Math.max(3, 4)), 3);
         selectione &= selectione >> (Math.min(Math.abs(2), 3));
         if (orange7) {
            break;
         }
      } while ((containerW.length >= containerW.length) && orange7);
      notificationb = 5 > termsX || 30.74 > scorex;
   for (let e = 0; e < 1; e++) {
      helperz ^= matha.length;
   }
   if (1 >= cornerV.length) {
      cornerV += `${helperz * playlist5}`;
   }
      cornerV = `${termsX}`;
   let forward5 = helperz >= 6650902;
   do {
      helperz %= Math.max(4, termsX);
      if (forward5) {
         break;
      }
   } while (forward5 && (5 == (1 >> (Math.min(1, Math.abs(helperz))))));
      helperz ^= 1 + matha.length;

    onHandleFullScreen();
  };

  const goBack = () => {
       let home8: Map<any, any> = new Map([[String.fromCharCode(99,97,114,101,102,117,108,108,121,0),9], [String.fromCharCode(101,120,99,108,117,115,105,111,110,115,0),471], [String.fromCharCode(102,95,50,53,95,109,97,114,107,105,110,103,115,0),122]]);
    let becomeu = 4;
    let corner1 = 4.0;
    let internetN: Map<any, any> = new Map([[String.fromCharCode(111,98,106,101,99,116,0),String.fromCharCode(99,110,97,109,101,0)], [String.fromCharCode(97,95,57,53,95,112,114,111,112,111,115,101,114,0),String.fromCharCode(97,100,100,107,101,121,0)]]);
    let register_asm = 2.0;
    let combinedl = 4.0;
    let projecti = 5.0;
    let emojif = String.fromCharCode(111,99,97,116,105,111,110,0);
    let halfe = String.fromCharCode(97,116,116,114,105,98,0);
    let vietnamM = String.fromCharCode(102,95,53,48,95,115,117,112,112,111,114,116,97,98,108,101,0);
    let privilegeO = 3.0;
   for (let i = 0; i < 3; i++) {
      projecti -= parseInt(`${corner1}`);
   }
      vietnamM = `${(String.fromCharCode(118,0) == emojif ? internetN.size : emojif.length)}`;
   let chartV = register_asm >= 9270087.0;
   do {
       let incident6 = String.fromCharCode(100,97,117,98,101,99,104,105,101,115,0);
       let sharedZ = String.fromCharCode(108,95,55,50,0);
          let middleE = 4.0;
         incident6 = "3";
         middleE -= 2;
         sharedZ = `${sharedZ.length << (Math.min(Math.abs(2), 4))}`;
      if (incident6.length <= 3) {
          let turng = 4.0;
          let referrerV = 4.0;
         sharedZ += `${(String.fromCharCode(55,0) == incident6 ? sharedZ.length : incident6.length)}`;
         turng -= parseInt(`${referrerV}`);
      }
      while (incident6 != String.fromCharCode(100,0)) {
         sharedZ += `${sharedZ.length - 3}`;
         break;
      }
         sharedZ = `${incident6.length + sharedZ.length}`;
      for (let t = 0; t < 3; t++) {
          let shoots = String.fromCharCode(111,117,116,112,117,116,115,0);
          let regengT = true;
          let commonL = String.fromCharCode(114,101,109,111,116,101,108,121,0);
          let collectionk = true;
          let referrerj = 2.0;
         incident6 = `${(String.fromCharCode(108,0) == shoots ? parseInt(`${referrerj}`) : shoots.length)}`;
         regengT = !collectionk || commonL.length >= 95;
         commonL = `${(String.fromCharCode(87,0) == commonL ? (regengT ? 5 : 4) : commonL.length)}`;
         collectionk = !regengT;
         referrerj += commonL.length;
      }
      register_asm /= Math.max(2, parseFloat(`${parseInt(`${corner1}`) / (Math.max(1, 9))}`));
      if (chartV) {
         break;
      }
   } while (chartV && (4 >= (parseInt(`${register_asm}`) / (Math.max(home8.size, 2)))));
       let contextd = 5.0;
      if (5.0 < (contextd - 5.22)) {
         contextd /= Math.max(2, parseInt(`${contextd}`) / 2);
      }
          let nextz: Array<any> = [854, 372, 19];
          let crownY = 3;
         contextd /= Math.max(3, 3);
         nextz = [crownY];
         crownY &= 2 - crownY;
       let member1 = String.fromCharCode(112,98,108,111,99,107,115,0);
      vietnamM = `${3 % (Math.max(8, parseInt(`${contextd}`)))}`;
       let backgroundX = String.fromCharCode(115,104,105,109,109,101,114,95,115,95,53,52,0);
      for (let d = 0; d < 3; d++) {
         backgroundX += `${backgroundX.length}`;
      }
          let modelsU = String.fromCharCode(112,95,57,56,95,117,97,100,100,0);
          let gesture1 = String.fromCharCode(99,111,112,121,97,100,100,95,105,95,54,51,0);
          let trophya: Array<any> = [557, 768];
         backgroundX += `${backgroundX.length | 3}`;
         modelsU = `${gesture1.length}`;
         gesture1 += `${modelsU.length * gesture1.length}`;
         trophya.push(trophya.length << (Math.min(Math.abs(3), 4)));
         backgroundX = `${backgroundX.length}`;
      internetN.set(`${register_asm}`, 2 | parseInt(`${combinedl}`));
      emojif = `${halfe.length >> (Math.min(Math.abs(1), 5))}`;
      vietnamM += `${becomeu / (Math.max(1, internetN.size))}`;
   for (let g = 0; g < 2; g++) {
       let disconnected0 = String.fromCharCode(109,111,99,107,0);
      let agreementS = String.fromCharCode(112,113,117,53,109,102,100,0) == disconnected0;
      do {
         disconnected0 += `${disconnected0.length}`;
         if (agreementS) {
            break;
         }
      } while (agreementS && (4 < disconnected0.length || disconnected0 != String.fromCharCode(55,0)));
       let telegramM = 5.0;
       let themef = 1.0;
      for (let j = 0; j < 1; j++) {
          let rewindS = String.fromCharCode(111,118,101,114,97,108,108,0);
         themef -= 1;
         rewindS = `${(rewindS == String.fromCharCode(99,0) ? rewindS.length : rewindS.length)}`;
      }
      register_asm -= parseFloat(`${parseInt(`${corner1}`)}`);
   }
   for (let v = 0; v < 2; v++) {
       let referrerk: Array<any> = [String.fromCharCode(102,114,101,101,116,121,112,101,0), String.fromCharCode(105,115,111,112,101,110,113,117,111,116,101,0), String.fromCharCode(114,101,117,112,108,111,97,100,105,110,103,0)];
       let megaphoned = 4.0;
       let refreshO: Map<any, any> = new Map([[String.fromCharCode(108,97,99,105,110,103,0),false ], [String.fromCharCode(106,95,56,48,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),true ], [String.fromCharCode(115,101,97,108,95,121,95,57,50,0),false ]]);
       let clubV = 0.0;
       let clubP = 4.0;
         clubP += parseInt(`${clubV}`);
      for (let f = 0; f < 2; f++) {
         referrerk.push(parseInt(`${clubV}`));
      }
          let changeR = 3.0;
          let schedule6 = String.fromCharCode(111,114,100,101,114,105,110,103,0);
          let const_4g = 2.0;
         referrerk.push(referrerk.length << (Math.min(Math.abs(2), 4)));
         changeR += parseInt(`${changeR}`) - schedule6.length;
         schedule6 += `${parseInt(`${const_4g}`) | parseInt(`${changeR}`)}`;
         const_4g += parseFloat(`${schedule6.length}`);
          let moon9 = String.fromCharCode(104,111,117,114,108,121,0);
          let filter0: Array<any> = [558, 671, 99];
         clubP -= 2;
         moon9 += `${moon9.length}`;
         filter0.push(filter0.length);
      if (3.14 <= (clubV / 1.94)) {
         clubV += parseInt(`${clubV}`) - 1;
      }
       let bell8 = 0.0;
         referrerk = [2];
      while (!Array.from(refreshO.values()).includes(clubV)) {
         clubV += parseInt(`${clubP}`);
         break;
      }
         referrerk = [refreshO.size + parseInt(`${megaphoned}`)];
         clubV += 2;
          let sortq = 4.0;
          let ewarded3 = String.fromCharCode(104,115,99,114,111,108,108,95,119,95,55,49,0);
          let vietnam7 = String.fromCharCode(117,115,101,97,103,101,95,110,95,50,50,0);
         megaphoned -= ewarded3.length;
         sortq *= parseFloat(`${3}`);
         ewarded3 += `${parseInt(`${sortq}`) << (Math.min(Math.abs(2), 4))}`;
         vietnam7 = `${vietnam7.length - parseInt(`${sortq}`)}`;
      if (Array.from(refreshO.values()).includes(bell8)) {
         refreshO = new Map([[`${referrerk.length}`, 3 << (Math.min(5, referrerk.length))]]);
      }
         clubV += 1 & parseInt(`${clubV}`);
          let combinedQ = String.fromCharCode(100,95,52,51,95,104,113,100,115,112,0);
          let projectm = String.fromCharCode(117,116,109,111,115,116,0);
         refreshO = new Map([[`${clubP}`, 3]]);
         combinedQ = `${(projectm == String.fromCharCode(119,0) ? projectm.length : combinedQ.length)}`;
         clubV /= Math.max(1 << (Math.min(Math.abs(parseInt(`${clubV}`)), 4)), 5);
      becomeu %= Math.max(3, (emojif == String.fromCharCode(114,0) ? emojif.length : parseInt(`${projecti}`)));
   }
   let updatesd = 6523611 >= halfe.length;
   do {
       let humidityE = String.fromCharCode(108,115,112,105,0);
       let langkeyH = String.fromCharCode(111,99,117,109,101,110,116,95,116,95,56,53,0);
         langkeyH = `${humidityE.length}`;
       let notificationB = String.fromCharCode(99,108,116,111,115,116,114,0);
       let sportH = String.fromCharCode(110,111,119,0);
      for (let w = 0; w < 3; w++) {
         notificationB += `${sportH.length | humidityE.length}`;
      }
         notificationB = `${humidityE.length}`;
         humidityE = `${notificationB.length ^ 3}`;
         humidityE += `${sportH.length}`;
      halfe = `${halfe.length | 1}`;
      if (updatesd) {
         break;
      }
   } while ((halfe != String.fromCharCode(112,0) || emojif == String.fromCharCode(75,0)) && updatesd);
   for (let m = 0; m < 2; m++) {
      register_asm /= Math.max(3, parseFloat(`${parseInt(`${corner1}`) >> (Math.min(Math.abs(3), 5))}`));
   }
      corner1 *= parseFloat(`${2 / (Math.max(5, becomeu))}`);
   let areaj = corner1 <= 6455479.0;
   do {
      corner1 -= parseFloat(`${parseInt(`${projecti}`)}`);
      if (areaj) {
         break;
      }
   } while (areaj && (1.34 == projecti));
      corner1 += parseFloat(`${parseInt(`${corner1}`) % 3}`);
       let gmailK = 3;
       let pointj: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,100,114,111,112,0),10], [String.fromCharCode(109,97,116,116,101,100,0),135], [String.fromCharCode(116,111,110,97,108,0),1]]);
       let minimize3 = String.fromCharCode(97,114,111,117,110,100,0);
         pointj = new Map([[`${pointj.size}`, pointj.size - 2]]);
       let selecto = String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,0);
      if ((3 + pointj.size) <= 3 || (pointj.size + gmailK) <= 3) {
         pointj.set(`${gmailK}`, 2 | gmailK);
      }
       let trashe = true;
          let policyi: Array<any> = [42, 73, 772];
         minimize3 += `${((trashe ? 4 : 5) | minimize3.length)}`;
         policyi = [1 - policyi.length];
      while ((gmailK << (Math.min(Math.abs(4), 5))) < 3 && 4 < (selecto.length << (Math.min(1, Math.abs(gmailK))))) {
          let interstitial8 = false;
         gmailK /= Math.max(2, 1);
         break;
      }
      let shirtc = 8719228 <= selecto.length;
      do {
          let sheetn = String.fromCharCode(101,114,97,115,101,114,0);
          let whatsappW = 2.0;
          let playm: Array<any> = [344, 894, 411];
          let arrowH: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,115,105,122,101,0),818], [String.fromCharCode(115,108,105,100,97,98,108,101,0),887]]);
          let blacklist6: Map<any, any> = new Map([[String.fromCharCode(111,98,106,0),223], [String.fromCharCode(114,101,100,117,99,101,0),727], [String.fromCharCode(105,110,105,116,0),672]]);
         selecto += `${(sheetn == String.fromCharCode(70,0) ? sheetn.length : (trashe ? 5 : 4))}`;
         whatsappW += parseFloat(`${arrowH.size >> (Math.min(Math.abs(2), 3))}`);
         playm.push(1);
         arrowH.set(`${whatsappW}`, 2 + blacklist6.size);
         blacklist6.set(`${arrowH.size}`, 1 >> (Math.min(5, Math.abs(arrowH.size))));
         if (shirtc) {
            break;
         }
      } while (shirtc && (5 >= selecto.length));
      while (!selecto.startsWith(`${pointj.size}`)) {
          let networkk: Map<any, any> = new Map([[String.fromCharCode(113,95,50,49,95,116,101,120,116,0),false ], [String.fromCharCode(104,95,53,54,95,97,117,116,111,99,111,114,114,0),false ]]);
          let sansC = true;
          let membershipZ = 5;
          let canvasr: Array<any> = [295, 163];
          let catagory5 = true;
         pointj = new Map([[`${catagory5}`, ((sansC ? 3 : 2) | (catagory5 ? 5 : 2))]]);
         networkk.set(`${membershipZ}`, 3 | networkk.size);
         sansC = canvasr.includes(membershipZ);
         canvasr.push(canvasr.length ^ membershipZ);
         break;
      }
       let typesw: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,109,98,108,101,114,0),500], [String.fromCharCode(122,95,52,57,95,112,111,108,121,109,101,115,104,0),889]]);
      projecti *= emojif.length / 1;
       let team4 = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,0);
       let taiwan0 = String.fromCharCode(109,97,116,114,105,120,101,110,99,95,97,95,53,54,0);
          let darkV = 0;
         taiwan0 = `${(taiwan0 == String.fromCharCode(80,0) ? taiwan0.length : darkV)}`;
      let typingF = String.fromCharCode(121,103,117,99,105,0) == team4;
      do {
          let giftt = true;
          let actionss = String.fromCharCode(119,115,97,117,100,0);
          let paginationU = String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,0);
          let pingg = 3.0;
         team4 = `${((giftt ? 4 : 4))}`;
         giftt = 1 < actionss.length;
         actionss += `${actionss.length}`;
         paginationU = `${(String.fromCharCode(55,0) == actionss ? paginationU.length : actionss.length)}`;
         pingg *= 3 | paginationU.length;
         if (typingF) {
            break;
         }
      } while ((taiwan0 == String.fromCharCode(69,0) || team4 != String.fromCharCode(80,0)) && typingF);
          let updateso = false;
          let robotoQ: Array<any> = [717, 229];
          let unselected4: Array<any> = [171, 827];
         taiwan0 = `${unselected4.length}`;
         updateso = robotoQ.includes(updateso);
         robotoQ = [(robotoQ.length / (Math.max(7, (updateso ? 3 : 5))))];
         unselected4.push(robotoQ.length);
      let favoriteB = String.fromCharCode(54,116,99,114,118,100,50,97,106,0) == team4;
      do {
          let config9: Map<any, any> = new Map([[String.fromCharCode(97,95,49,57,95,115,119,105,102,116,99,0),356], [String.fromCharCode(109,111,100,101,114,110,95,54,95,51,54,0),940]]);
          let upgrade3 = String.fromCharCode(99,111,100,101,99,117,116,105,108,115,0);
         team4 = `${3 * taiwan0.length}`;
         config9 = new Map([[`${config9.size}`, 1]]);
         upgrade3 += `${2 / (Math.max(10, config9.size))}`;
         if (favoriteB) {
            break;
         }
      } while (favoriteB && (taiwan0 != team4));
      if (team4 == taiwan0) {
         taiwan0 = `${taiwan0.length % 2}`;
      }
         taiwan0 = `${taiwan0.length * 3}`;
      internetN.set(`${becomeu}`, 3 ^ parseInt(`${combinedl}`));

    delayControls();

      projecti += halfe.length;
       let reducerJ = String.fromCharCode(107,95,53,54,95,100,105,103,101,115,116,98,121,110,105,100,0);
       let plusk = true;
       let shirtn = 2.0;
      while (!plusk && 5 == reducerJ.length) {
         plusk = 68.91 >= shirtn;
         break;
      }
      for (let z = 0; z < 1; z++) {
         plusk = shirtn <= 41.84;
      }
      let navigationx = plusk ? !plusk : plusk;
      do {
         plusk = !reducerJ.endsWith(`${plusk}`);
         if (navigationx) {
            break;
         }
      } while (navigationx && (!plusk));
      if (shirtn < 2.61 && (shirtn * 2.61) < 1.85) {
         shirtn /= Math.max(4, parseInt(`${shirtn}`) ^ reducerJ.length);
      }
      for (let w = 0; w < 1; w++) {
         plusk = !plusk;
      }
          let firebaseM = 0.0;
          let overh = String.fromCharCode(97,99,111,100,101,99,0);
          let diceB: Map<any, any> = new Map([[String.fromCharCode(103,95,56,95,109,99,111,109,112,0),false ], [String.fromCharCode(113,116,97,98,108,101,95,106,95,51,50,0),true ]]);
         shirtn += diceB.size;
         firebaseM /= Math.max(parseFloat(`${2 - overh.length}`), 3);
         overh = `${parseInt(`${firebaseM}`) / 3}`;
         diceB.set(overh, overh.length);
          let playV = String.fromCharCode(113,99,111,109,0);
          let stats7 = true;
          let whiteP = String.fromCharCode(106,95,56,95,106,112,101,103,99,111,109,112,0);
         shirtn /= Math.max(playV.length, 3);
         playV += `${whiteP.length + whiteP.length}`;
         stats7 = whiteP.length > 48;
      for (let v = 0; v < 1; v++) {
         reducerJ += `${(parseInt(`${shirtn}`) & (plusk ? 4 : 5))}`;
      }
         plusk = reducerJ.length > 47;
      home8.set(halfe, 3);
       let update_2v = 2.0;
       let star4: Array<any> = [617, 500];
         update_2v += parseFloat(`${parseInt(`${update_2v}`)}`);
         update_2v -= parseFloat(`${parseInt(`${update_2v}`) * 3}`);
      let stores = 8178181 <= star4.length;
      do {
         star4.push(3 ^ parseInt(`${update_2v}`));
         if (stores) {
            break;
         }
      } while (stores && (4 <= star4.length));
      while ((star4.length | 1) >= 5 && (update_2v + 3.30) >= 1.42) {
         update_2v /= Math.max(1, parseFloat(`${parseInt(`${update_2v}`) >> (Math.min(star4.length, 4))}`));
         break;
      }
       let rightu = String.fromCharCode(103,101,116,112,116,114,0);
          let minimizeb = false;
         update_2v *= parseFloat(`${parseInt(`${update_2v}`)}`);
         minimizeb = !minimizeb;
      projecti /= Math.max(3, parseInt(`${update_2v}`));
   if (2 <= home8.size) {
      home8.set(emojif, parseInt(`${projecti}`));
   }
      privilegeO += 1;
      becomeu *= (halfe == String.fromCharCode(77,0) ? halfe.length : parseInt(`${privilegeO}`));
   if (1.95 > (register_asm * 5.52)) {
      register_asm += parseFloat(`${emojif.length - parseInt(`${combinedl}`)}`);
   }
      combinedl += (parseFloat(`${emojif == String.fromCharCode(90,0) ? parseInt(`${projecti}`) : emojif.length}`));
      register_asm *= parseFloat(`${vietnamM.length}`);
      vietnamM = `${(emojif == String.fromCharCode(74,0) ? home8.size : emojif.length)}`;
      projecti /= Math.max(4, emojif.length);
   for (let f = 0; f < 2; f++) {
      halfe += `${parseInt(`${corner1}`) * 1}`;
   }
   while ((2.35 - combinedl) == 2.96 || (parseInt(`${combinedl}`) - 3) == 1) {
      halfe += `${vietnamM.length * 1}`;
      break;
   }
   let backgroundL = 7492311 <= emojif.length;
   do {
      emojif += `${halfe.length}`;
      if (backgroundL) {
         break;
      }
   } while ((halfe == String.fromCharCode(111,0) && 5 < emojif.length) && backgroundL);
   for (let i = 0; i < 2; i++) {
      corner1 *= parseFloat(`${parseInt(`${projecti}`)}`);
   }
   for (let x = 0; x < 1; x++) {
      home8.set(`${register_asm}`, 1);
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
       let macauX = String.fromCharCode(115,112,101,114,97,116,111,114,0);
    let dragC = 3.0;
    let zhengpianZ: Map<any, any> = new Map([[String.fromCharCode(111,114,100,101,114,115,0),64], [String.fromCharCode(112,95,51,49,95,107,100,102,0),691]]);
    let volumeQ: Map<any, any> = new Map([[String.fromCharCode(116,117,112,108,101,115,0),String.fromCharCode(117,110,114,101,102,101,114,101,110,99,101,0)], [String.fromCharCode(114,97,110,107,115,0),String.fromCharCode(98,105,103,100,105,97,95,119,95,57,55,0)], [String.fromCharCode(102,95,49,48,48,95,115,101,101,107,116,97,98,108,101,0),String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,0)]]);
    let backwardI = String.fromCharCode(115,105,108,101,110,99,101,100,0);
    let sell1 = String.fromCharCode(115,97,100,120,120,0);
    let tickr = String.fromCharCode(109,117,108,116,105,116,97,98,108,101,0);
    let k_unlockP = 4.0;
    let phoneQ = 0;
    let turn3: Array<any> = [970, 941, 54];
   while (!macauX.includes(`${k_unlockP}`)) {
       let placeholder0 = 3.0;
       let logoB = String.fromCharCode(102,114,101,101,122,101,0);
       let roomE = 3.0;
          let bannerD = String.fromCharCode(114,101,109,111,116,101,0);
          let privilegej = 3.0;
          let productH = 4.0;
         logoB = `${1 ^ parseInt(`${productH}`)}`;
         bannerD += "1";
         privilegej -= (parseFloat(`${String.fromCharCode(106,0) == bannerD ? parseInt(`${privilegej}`) : bannerD.length}`));
         productH *= parseFloat(`${1}`);
         logoB = `${(String.fromCharCode(119,0) == logoB ? parseInt(`${roomE}`) : logoB.length)}`;
      for (let r = 0; r < 1; r++) {
          let countryg = String.fromCharCode(111,110,116,101,120,116,0);
          let optionsh = String.fromCharCode(114,97,115,116,101,114,105,122,101,115,0);
          let circleA = false;
          let agreementB = 5.0;
          let brightnessf: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,98,121,116,101,115,0),true ], [String.fromCharCode(100,114,97,119,117,116,105,108,115,0),true ], [String.fromCharCode(112,114,101,115,101,114,118,101,0),false ]]);
         roomE /= Math.max(3, ((circleA ? 2 : 2) ^ 2));
         countryg += `${parseInt(`${agreementB}`)}`;
         optionsh = `${(optionsh == String.fromCharCode(122,0) ? countryg.length : optionsh.length)}`;
         circleA = 70 == optionsh.length;
         agreementB += parseFloat(`${countryg.length - 3}`);
         brightnessf = new Map([[`${brightnessf.size}`, (optionsh == String.fromCharCode(49,0) ? optionsh.length : brightnessf.size)]]);
      }
          let crossq = true;
          let tumbnailm = String.fromCharCode(115,99,97,108,97,114,109,117,108,116,0);
         roomE -= tumbnailm.length;
         crossq = (!crossq ? crossq : crossq);
         tumbnailm += `${((crossq ? 5 : 2) * 2)}`;
         logoB = `${parseInt(`${roomE}`)}`;
      if (3.20 == (logoB.length + roomE)) {
         roomE *= 3;
      }
      while ((logoB.length + 2) == 5) {
         logoB = `${parseInt(`${roomE}`)}`;
         break;
      }
       let completer = String.fromCharCode(117,95,51,55,95,103,101,116,115,105,103,99,116,120,110,111,0);
       let specF = String.fromCharCode(119,114,97,112,0);
       let p_playerh = String.fromCharCode(122,101,114,111,109,118,0);
      macauX = `${2 + backwardI.length}`;
      placeholder0 -= parseFloat(`${1}`);
      break;
   }
       let yinga = 4.0;
          let placeholderV = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,0);
         yinga /= Math.max(parseFloat(`${2}`), 3);
         placeholderV += `${placeholderV.length >> (Math.min(2, placeholderV.length))}`;
      let completeh = 6370517.0 <= yinga;
      do {
         yinga -= parseFloat(`${1}`);
         if (completeh) {
            break;
         }
      } while ((yinga == yinga) && completeh);
      while (2.6 <= (yinga / 1.63)) {
         yinga /= Math.max(parseFloat(`${3}`), 4);
         break;
      }
      sell1 = "2";
       let commentR = 1.0;
      let currentt = 5397271.0 <= commentR;
      do {
         commentR /= Math.max(2 % (Math.max(4, parseInt(`${commentR}`))), 2);
         if (currentt) {
            break;
         }
      } while (currentt && (3.33 == (1.35 * commentR) || 2.49 == (commentR * 1.35)));
         commentR -= 1 << (Math.min(Math.abs(parseInt(`${commentR}`)), 2));
          let champion7 = String.fromCharCode(106,117,108,105,97,110,100,97,121,0);
         commentR *= parseInt(`${commentR}`) % (Math.max(champion7.length, 1));
      sell1 = `${turn3.length * 2}`;
   let temperaturel = 8472909 >= volumeQ.size;
   do {
      volumeQ.set(sell1, sell1.length ^ tickr.length);
      if (temperaturel) {
         break;
      }
   } while ((5 >= (5 % (Math.max(8, volumeQ.size))) && 5 >= (5 % (Math.max(9, tickr.length)))) && temperaturel);
       let faviconv = 5.0;
       let assistt = String.fromCharCode(120,95,56,56,95,112,108,117,115,0);
       let controls2: Array<any> = [223, 372, 949];
          let hejiA: Array<any> = [125, 129, 873];
          let activeG = 1;
          let assistO = 5;
         assistt = `${parseInt(`${faviconv}`)}`;
         hejiA.push(hejiA.length);
         activeG /= Math.max(4, 2);
         assistO ^= activeG;
          let disconnected6 = String.fromCharCode(116,104,101,109,101,100,0);
          let phoneA = 4;
         assistt = `${(String.fromCharCode(49,0) == disconnected6 ? controls2.length : disconnected6.length)}`;
         phoneA |= phoneA;
         faviconv /= Math.max(controls2.length, 4);
         faviconv *= controls2.length;
         assistt = `${assistt.length + 1}`;
      if (2 == (assistt.length % 1)) {
          let l_unlockV = String.fromCharCode(111,117,116,99,111,109,101,0);
          let chinaE = 1.0;
          let save7 = String.fromCharCode(115,105,109,117,108,97,116,101,100,0);
         controls2.push(save7.length | controls2.length);
         l_unlockV += "2";
         chinaE *= parseFloat(`${parseInt(`${chinaE}`) / 3}`);
         save7 = `${(String.fromCharCode(52,0) == l_unlockV ? l_unlockV.length : parseInt(`${chinaE}`))}`;
      }
      if (faviconv >= 4.69) {
         assistt = "1";
      }
         faviconv /= Math.max(controls2.length / (Math.max(3, parseInt(`${faviconv}`))), 3);
       let heartF = String.fromCharCode(101,95,52,55,95,99,108,101,97,114,0);
       let checkboxQ = String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,0);
      volumeQ = new Map([[`${volumeQ.size}`, parseInt(`${dragC}`) & 1]]);
       let targetV: Array<any> = [387, 262, 522];
       let brightness6: Map<any, any> = new Map([[String.fromCharCode(100,110,111,119,95,102,95,54,56,0),531], [String.fromCharCode(114,95,54,54,95,99,97,112,116,117,114,105,110,103,0),203]]);
       let read5 = false;
         brightness6 = new Map([[`${brightness6.size}`, brightness6.size / (Math.max(targetV.length, 5))]]);
      while (read5) {
          let descG = 0;
          let historyy = 2;
          let fastG = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,0);
          let arrowO = 2;
          let verticald = true;
         brightness6.set(`${historyy}`, fastG.length ^ 1);
         descG &= arrowO;
         historyy <<= Math.min(2, Math.abs(3));
         fastG += "3";
         verticald = arrowO >= 3;
         break;
      }
      if (!read5) {
         targetV.push(targetV.length);
      }
       let modityI = String.fromCharCode(111,95,50,56,95,117,101,117,101,0);
          let recommendationI = 0;
          let frame_z4n: Array<any> = [94, 123];
          let entryv = 4.0;
         targetV.push(brightness6.size & frame_z4n.length);
         recommendationI -= parseInt(`${entryv}`) - 1;
         frame_z4n.push(recommendationI);
         entryv -= 3;
       let lightf = String.fromCharCode(104,119,97,101,115,0);
       let upload8 = String.fromCharCode(99,95,56,56,95,117,110,97,108,105,103,110,101,100,0);
      let customP = 8295666 >= upload8.length;
      do {
          let pageR = true;
          let appleM = false;
          let side9 = 4.0;
          let moonW = 3;
         upload8 = `${targetV.length << (Math.min(Math.abs(1), 5))}`;
         pageR = !appleM && moonW <= 32;
         appleM = moonW == 27;
         side9 /= Math.max(parseFloat(`${3}`), 2);
         if (customP) {
            break;
         }
      } while ((upload8.includes(`${brightness6.size}`)) && customP);
      for (let o = 0; o < 2; o++) {
         lightf = `${brightness6.size}`;
      }
         targetV = [(String.fromCharCode(113,0) == lightf ? upload8.length : lightf.length)];
      sell1 = `${turn3.length | 2}`;
      sell1 = `${zhengpianZ.size}`;
   while (4 < zhengpianZ.size) {
       let playq = String.fromCharCode(115,112,111,110,115,111,114,101,100,95,55,95,52,48,0);
       let hejiz = String.fromCharCode(101,108,105,103,105,98,108,101,0);
         hejiz = `${1 >> (Math.min(3, hejiz.length))}`;
         hejiz = `${hejiz.length}`;
      zhengpianZ = new Map([[`${k_unlockP}`, parseInt(`${dragC}`)]]);
      playq += `${(playq == String.fromCharCode(111,0) ? playq.length : playq.length)}`;
      break;
   }
       let strB = false;
      let expiredv = strB ? !strB : strB;
      do {
          let half8: Array<any> = [875, 970, 774];
          let sheetC = String.fromCharCode(102,114,97,110,100,111,109,0);
          let controlc = String.fromCharCode(116,104,114,111,117,103,104,0);
          let bingH = String.fromCharCode(101,110,116,101,114,105,110,103,0);
         strB = 91 < bingH.length || sheetC == String.fromCharCode(104,0);
         half8 = [2 * half8.length];
         sheetC = `${(controlc == String.fromCharCode(73,0) ? controlc.length : half8.length)}`;
         bingH = `${controlc.length}`;
         if (expiredv) {
            break;
         }
      } while ((!strB) && expiredv);
      while (strB) {
         strB = !strB;
         break;
      }
      if (strB && strB) {
          let plashd = true;
          let sheeto = 4.0;
          let yellowr: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,110,97,109,101,0),String.fromCharCode(120,95,49,51,95,116,114,101,110,100,108,105,110,101,0)], [String.fromCharCode(106,95,56,54,95,105,110,118,111,107,101,0),String.fromCharCode(109,101,109,98,101,114,115,0)]]);
          let promotionJ = false;
          let chinah = false;
         strB = null != yellowr.get(`${sheeto}`);
         plashd = (!chinah ? !promotionJ : !chinah);
         sheeto /= Math.max(((plashd ? 4 : 4) | 1), 3);
         yellowr.set(`${plashd}`, ((plashd ? 4 : 5) | (promotionJ ? 4 : 3)));
      }
      turn3.push(backwardI.length >> (Math.min(Math.abs(3), 5)));
      macauX += `${zhengpianZ.size}`;
   for (let k = 0; k < 2; k++) {
      turn3 = [turn3.length];
   }
   for (let l = 0; l < 3; l++) {
       let blackd = 0;
       let settingsn: Map<any, any> = new Map([[String.fromCharCode(97,99,107,100,114,111,112,0),String.fromCharCode(114,116,109,112,99,114,121,112,116,0)], [String.fromCharCode(116,95,53,95,114,101,100,101,101,109,0),String.fromCharCode(114,101,109,105,110,100,101,114,115,0)]]);
         blackd %= Math.max(blackd % (Math.max(settingsn.size, 5)), 3);
       let signinup8 = String.fromCharCode(120,95,53,50,0);
       let middleX = String.fromCharCode(118,95,56,56,95,108,101,110,103,116,104,0);
          let unselected_ = 2;
          let arrowW = String.fromCharCode(114,111,116,97,116,105,111,110,0);
         blackd <<= Math.min(4, arrowW.length);
         unselected_ -= 2 + unselected_;
         arrowW = "2";
      for (let a = 0; a < 3; a++) {
         blackd /= Math.max(blackd + settingsn.size, 1);
      }
       let minivodG = 4.0;
          let side7 = String.fromCharCode(109,117,120,0);
         blackd += 1 % (Math.max(1, middleX.length));
         side7 += `${(String.fromCharCode(120,0) == side7 ? side7.length : side7.length)}`;
      macauX = "2";
   }
   let configureJ = 7614179 >= sell1.length;
   do {
      sell1 = "1";
      if (configureJ) {
         break;
      }
   } while ((backwardI != sell1) && configureJ);
   while (phoneQ >= 1) {
      phoneQ ^= backwardI.length;
      break;
   }

    setShowControls(!showControls);

   while ((5 + volumeQ.size) == 5 || 4 == (volumeQ.size + 5)) {
      volumeQ.set(sell1, 1);
      break;
   }
       let shoot1 = 3.0;
       let downloadingw = 0;
       let screenq = 5.0;
      if (screenq > shoot1) {
          let tempV = String.fromCharCode(114,101,112,108,97,121,0);
          let backwardi = true;
          let gnewsK = String.fromCharCode(105,116,101,109,115,95,115,95,50,48,0);
         shoot1 *= (String.fromCharCode(98,0) == gnewsK ? (backwardi ? 2 : 1) : gnewsK.length);
         tempV = `${tempV.length}`;
         backwardi = 16 > tempV.length;
      }
      for (let y = 0; y < 1; y++) {
         screenq /= Math.max(1, parseFloat(`${parseInt(`${shoot1}`)}`));
      }
         screenq *= parseFloat(`${parseInt(`${shoot1}`)}`);
      let match_ = 8868889 <= downloadingw;
      do {
          let memberships = 3.0;
          let spec_ = String.fromCharCode(117,110,98,111,120,0);
          let small6: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,108,115,95,101,95,55,54,0),995], [String.fromCharCode(112,104,111,116,111,115,0),751]]);
          let forwardH: Array<any> = [14, 892];
          let mappingt = String.fromCharCode(114,101,98,117,105,108,100,0);
         downloadingw |= 1;
         memberships /= Math.max(parseFloat(`${3 ^ small6.size}`), 1);
         spec_ += "2";
         small6 = new Map([[`${forwardH.length}`, (String.fromCharCode(99,0) == mappingt ? forwardH.length : mappingt.length)]]);
         if (match_) {
            break;
         }
      } while (match_ && (5.37 <= (screenq - 4.82)));
         downloadingw /= Math.max(3, 3 & parseInt(`${shoot1}`));
         downloadingw += downloadingw;
         screenq += parseFloat(`${downloadingw}`);
          let dialogU = String.fromCharCode(104,95,52,51,0);
         shoot1 *= (dialogU == String.fromCharCode(100,0) ? parseInt(`${screenq}`) : dialogU.length);
      for (let f = 0; f < 2; f++) {
         screenq -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${screenq}`)), 2))}`);
      }
      macauX = `${parseInt(`${shoot1}`)}`;
       let anner9 = 4;
       let tailn = false;
         tailn = 61 >= anner9;
      if ((anner9 | 4) < 1) {
          let forwardHi = String.fromCharCode(115,95,50,48,95,114,101,99,101,105,118,101,0);
          let alertL = String.fromCharCode(109,101,109,100,101,98,117,103,0);
         tailn = 78 > anner9;
         forwardHi += `${alertL.length - forwardHi.length}`;
         alertL += `${alertL.length - forwardHi.length}`;
      }
      if ((5 << (Math.min(1, Math.abs(anner9)))) >= 5 || tailn) {
         anner9 -= anner9;
      }
      if (!tailn) {
         tailn = !tailn || anner9 == 18;
      }
         anner9 &= 1 & anner9;
         anner9 %= Math.max((anner9 >> (Math.min(5, Math.abs((tailn ? 2 : 2))))), 3);
      turn3 = [3 | macauX.length];
   while (macauX.length <= turn3.length) {
       let floatingT = String.fromCharCode(111,108,100,110,101,119,0);
       let modeW = true;
      for (let v = 0; v < 2; v++) {
         floatingT = `${floatingT.length & 1}`;
      }
      while (floatingT.length < 4) {
         modeW = !modeW;
         break;
      }
          let crownT = String.fromCharCode(111,95,55,50,95,113,112,101,108,111,114,0);
         modeW = crownT.length > 83;
          let gesturesE = String.fromCharCode(110,95,52,56,95,108,97,122,121,0);
         modeW = !modeW;
         gesturesE = `${gesturesE.length}`;
      if (!modeW) {
         floatingT += `${((modeW ? 5 : 3) * 2)}`;
      }
         floatingT += `${((modeW ? 1 : 4) | floatingT.length)}`;
      turn3 = [1];
      break;
   }
   let clearT = backwardI.length <= 7817409;
   do {
      backwardI += `${phoneQ * 1}`;
      if (clearT) {
         break;
      }
   } while (clearT && (!backwardI.startsWith(`${zhengpianZ.size}`)));
      backwardI += "1";
   if ((3 << (Math.min(2, Math.abs(zhengpianZ.size)))) > 2) {
       let calendar4: Map<any, any> = new Map([[String.fromCharCode(98,97,116,99,104,101,115,0),false ], [String.fromCharCode(116,101,97,114,95,121,95,52,53,0),false ]]);
       let streamingU = String.fromCharCode(114,95,49,54,0);
      if (2 > (streamingU.length ^ calendar4.size) && (calendar4.size ^ streamingU.length) > 2) {
         streamingU += `${streamingU.length}`;
      }
       let modelsJ = 3;
         calendar4 = new Map([[streamingU, (streamingU == String.fromCharCode(98,0) ? modelsJ : streamingU.length)]]);
      let submitz = String.fromCharCode(122,99,55,107,54,52,101,55,55,0) == streamingU;
      do {
         streamingU = `${(streamingU == String.fromCharCode(77,0) ? streamingU.length : calendar4.size)}`;
         if (submitz) {
            break;
         }
      } while (submitz && (!streamingU.endsWith(`${modelsJ}`)));
         calendar4 = new Map([[`${calendar4.size}`, 1 >> (Math.min(5, Math.abs(modelsJ)))]]);
      for (let r = 0; r < 3; r++) {
         modelsJ |= modelsJ % 3;
      }
      zhengpianZ = new Map([[`${phoneQ}`, phoneQ | 1]]);
   }
   if ((3 - tickr.length) <= 4 || 3 <= (tickr.length - turn3.length)) {
      tickr += `${turn3.length & 2}`;
   }
   for (let j = 0; j < 2; j++) {
       let resendt = 1.0;
       let filledh = 4.0;
       let scoreB = 1;
      while (1.36 > (resendt + filledh)) {
          let long_jA = String.fromCharCode(112,105,120,101,108,115,0);
         filledh -= parseFloat(`${parseInt(`${resendt}`)}`);
         long_jA = `${long_jA.length}`;
         break;
      }
       let macauP: Array<any> = [135, 989, 323];
      for (let e = 0; e < 1; e++) {
          let r_countx: Array<any> = [910, 507, 676];
          let canvasT = String.fromCharCode(99,111,108,111,114,109,97,112,95,114,95,57,57,0);
         resendt += scoreB / (Math.max(3, parseInt(`${resendt}`)));
         r_countx.push(r_countx.length);
         canvasT = `${canvasT.length}`;
      }
      while (macauP.length > 1) {
          let sportsl: Map<any, any> = new Map([[String.fromCharCode(116,111,108,108,95,101,95,51,48,0),256], [String.fromCharCode(114,101,99,117,114,115,105,118,101,0),489]]);
          let headerE = 5.0;
         macauP = [parseInt(`${headerE}`)];
         sportsl.set(`${sportsl.size}`, 3);
         headerE += parseFloat(`${sportsl.size >> (Math.min(Math.abs(sportsl.size), 2))}`);
         break;
      }
      for (let f = 0; f < 1; f++) {
          let area0 = 1;
          let servicei = String.fromCharCode(99,97,116,99,104,105,110,103,0);
         macauP = [3 % (Math.max(8, area0))];
         area0 *= servicei.length;
         servicei += "1";
      }
         macauP = [3];
       let middlewareO = String.fromCharCode(119,97,110,116,0);
       let vietnamh = String.fromCharCode(109,115,112,101,108,0);
          let gpayI = 5;
         scoreB *= 3 - parseInt(`${resendt}`);
         gpayI |= gpayI;
      for (let m = 0; m < 1; m++) {
         macauP.push(parseInt(`${resendt}`));
      }
      tickr += "1";
   }
      phoneQ += zhengpianZ.size | volumeQ.size;
   if (macauX.startsWith(`${dragC}`)) {
      dragC /= Math.max(2, parseInt(`${dragC}`));
   }
      k_unlockP *= zhengpianZ.size * 1;
   let expired7 = phoneQ <= 9691332;
   do {
       let spinner9 = String.fromCharCode(108,95,51,51,0);
       let flyerN: Array<any> = [260, 450];
         spinner9 += `${2 << (Math.min(1, flyerN.length))}`;
         flyerN = [spinner9.length];
      for (let b = 0; b < 1; b++) {
         spinner9 += `${flyerN.length}`;
      }
      if (4 <= (flyerN.length - 2) || (2 - flyerN.length) <= 3) {
         spinner9 = `${flyerN.length & 2}`;
      }
      let guideV = 8955572 <= flyerN.length;
      do {
          let eventX: Array<any> = [613, 345];
          let dialoge = false;
          let customX: Array<any> = [269, 938, 543];
          let referrerD = 2.0;
         flyerN = [3];
         eventX = [3 << (Math.min(Math.abs(parseInt(`${referrerD}`)), 3))];
         dialoge = 98 == eventX.length;
         customX.push(parseInt(`${referrerD}`) / 3);
         if (guideV) {
            break;
         }
      } while (guideV && ((spinner9.length | flyerN.length) <= 4));
      let contextX = String.fromCharCode(115,114,108,108,109,112,52,110,0) == spinner9;
      do {
         spinner9 = `${(spinner9 == String.fromCharCode(104,0) ? spinner9.length : flyerN.length)}`;
         if (contextX) {
            break;
         }
      } while (((1 ^ flyerN.length) >= 5) && contextX);
      phoneQ <<= Math.min(3, Math.abs(backwardI.length * 1));
      if (expired7) {
         break;
      }
   } while (((macauX.length & phoneQ) == 3 || (3 & phoneQ) == 5) && expired7);
      turn3 = [tickr.length & 3];
    delayControls();
  };

  const clearHidingDelay = () => {
       let smallA = String.fromCharCode(116,105,109,101,111,117,116,115,0);
    let rulesV = 5.0;
    let recommendationY: Array<any> = [798, 943];
    let brightnessq = 2;
    let resulto = String.fromCharCode(118,97,108,105,100,97,116,111,114,0);
    let resendX = 2.0;
    let gesturej = String.fromCharCode(105,109,109,117,116,97,98,108,101,0);
    let customb = 2.0;
    let basketballE = 5.0;
    let filledX = 0;
    let stationr = String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,105,95,51,54,0);
    let settingd: Array<any> = [String.fromCharCode(108,95,57,52,95,117,110,102,105,108,116,101,114,101,100,0), String.fromCharCode(101,120,116,114,97,115,0), String.fromCharCode(100,111,102,102,115,101,116,115,0)];
    let yellow8 = 3.0;
      resendX /= Math.max(brightnessq, 1);
      basketballE *= (parseFloat(`${resulto == String.fromCharCode(103,0) ? recommendationY.length : resulto.length}`));
   let champion2 = 8824489 >= resulto.length;
   do {
       let serviceg = String.fromCharCode(111,110,115,101,116,0);
       let switch_mnB = String.fromCharCode(112,99,98,105,110,102,111,0);
       let sportp = String.fromCharCode(115,116,97,110,100,97,114,100,0);
          let heartY = String.fromCharCode(118,95,49,56,0);
          let shirte = 5;
         sportp += `${(heartY == String.fromCharCode(72,0) ? switch_mnB.length : heartY.length)}`;
         shirte >>= Math.min(5, Math.abs(shirte << (Math.min(Math.abs(2), 3))));
          let actiona = String.fromCharCode(104,95,49,53,95,99,111,108,108,101,116,105,111,110,0);
         switch_mnB = "1";
         actiona = `${(String.fromCharCode(73,0) == actiona ? actiona.length : actiona.length)}`;
      let statsB = String.fromCharCode(106,57,111,122,108,53,54,50,113,119,0) == switch_mnB;
      do {
         switch_mnB = `${2 & serviceg.length}`;
         if (statsB) {
            break;
         }
      } while (statsB && (2 > switch_mnB.length));
       let selection5: Array<any> = [526, 86];
       let searchbar3: Array<any> = [123, 78, 783];
      if (switch_mnB.length == 5) {
         serviceg = `${switch_mnB.length & 1}`;
      }
         searchbar3 = [searchbar3.length];
      while (2 > (selection5.length * switch_mnB.length) || (2 * switch_mnB.length) > 4) {
         switch_mnB += `${switch_mnB.length}`;
         break;
      }
         selection5 = [1];
      for (let g = 0; g < 1; g++) {
          let send0 = 3;
          let leftM: Map<any, any> = new Map([[String.fromCharCode(101,115,101,110,100,0),345], [String.fromCharCode(118,116,101,115,116,0),746]]);
          let selectiony: Array<any> = [962, 348, 996];
          let morex = true;
          let movieso: Map<any, any> = new Map([[String.fromCharCode(105,110,100,105,99,97,116,111,114,115,0),String.fromCharCode(101,95,50,51,95,115,112,97,99,105,110,103,115,0)], [String.fromCharCode(122,95,51,54,95,112,114,105,118,107,101,121,0),String.fromCharCode(104,97,115,104,0)], [String.fromCharCode(109,97,116,104,101,115,0),String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,52,95,57,54,0)]]);
         switch_mnB = "2";
         send0 += 1;
         leftM.set(`${selectiony.length}`, 1);
         selectiony.push(selectiony.length | leftM.size);
         morex = 64 >= send0;
         movieso = new Map([[`${leftM.size}`, 3 / (Math.max(8, leftM.size))]]);
      }
      resulto = `${serviceg.length % 2}`;
      if (champion2) {
         break;
      }
   } while ((2 > resulto.length) && champion2);
   if (3 == (3 << (Math.min(4, Math.abs(brightnessq))))) {
       let favoriteC = String.fromCharCode(99,105,114,99,108,101,95,53,95,51,50,0);
       let thailandn = String.fromCharCode(97,117,100,0);
       let privilege0 = String.fromCharCode(115,95,51,48,95,98,111,117,110,100,101,100,0);
       let pingT = String.fromCharCode(100,101,115,112,105,108,108,0);
       let singaporez = 4.0;
       let ewardedS = String.fromCharCode(109,111,110,116,103,111,109,101,114,121,0);
       let modityg = String.fromCharCode(99,102,101,110,99,0);
      for (let b = 0; b < 2; b++) {
          let benefitS = String.fromCharCode(108,105,110,103,101,114,0);
          let arrow7: Map<any, any> = new Map([[String.fromCharCode(110,115,117,105,114,103,98,97,0),false ], [String.fromCharCode(100,101,99,108,97,114,101,100,0),false ], [String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,0),false ]]);
          let sharedS = 0.0;
         singaporez /= Math.max(1, 1 & benefitS.length);
         benefitS = `${arrow7.size}`;
         arrow7 = new Map([[`${arrow7.size}`, parseInt(`${sharedS}`)]]);
         sharedS -= parseFloat(`${3 / (Math.max(7, arrow7.size))}`);
      }
          let gmailk: Array<any> = [967, 19, 811];
          let album_ = 4.0;
         favoriteC += `${modityg.length | parseInt(`${singaporez}`)}`;
         gmailk = [gmailk.length - parseInt(`${album_}`)];
         album_ *= 1;
      for (let q = 0; q < 3; q++) {
          let f_countz = String.fromCharCode(104,95,53,56,95,98,115,119,97,112,100,115,112,0);
          let commond = String.fromCharCode(99,114,111,112,112,105,110,103,95,115,95,49,50,0);
         favoriteC += `${thailandn.length ^ 3}`;
         f_countz += `${f_countz.length << (Math.min(Math.abs(2), 3))}`;
         commond = "3";
      }
      if (ewardedS.startsWith(favoriteC)) {
          let heartYH: Map<any, any> = new Map([[String.fromCharCode(115,105,99,107,0),337], [String.fromCharCode(98,117,102,102,101,114,105,110,103,0),485], [String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,0),407]]);
          let baidut = String.fromCharCode(101,110,104,97,110,99,101,0);
          let bootsplashh = 1.0;
         favoriteC = `${parseInt(`${singaporez}`) & thailandn.length}`;
         heartYH.set(baidut, baidut.length | heartYH.size);
         bootsplashh *= parseFloat(`${baidut.length * heartYH.size}`);
      }
          let modelP = 5.0;
          let result2 = String.fromCharCode(122,101,114,111,101,115,0);
          let schedulem: Map<any, any> = new Map([[String.fromCharCode(102,111,112,101,110,0),49], [String.fromCharCode(121,95,57,52,95,99,104,97,114,108,101,110,0),17], [String.fromCharCode(99,105,110,118,105,100,101,111,0),263]]);
         singaporez -= 2;
         modelP -= (String.fromCharCode(101,0) == result2 ? schedulem.size : result2.length);
         schedulem.set(`${modelP}`, parseInt(`${modelP}`));
      for (let f = 0; f < 2; f++) {
          let c_view7 = true;
          let matchd = String.fromCharCode(114,111,117,116,101,114,0);
          let gray6 = 4;
          let otherT = String.fromCharCode(114,97,112,105,100,106,115,111,110,0);
         singaporez *= privilege0.length - 3;
         c_view7 = gray6 > 25;
         matchd += `${((c_view7 ? 1 : 2) >> (Math.min(matchd.length, 3)))}`;
         gray6 += 3 - gray6;
         otherT += `${gray6 + 2}`;
      }
      while (favoriteC.length > 4) {
         favoriteC += `${2 + privilege0.length}`;
         break;
      }
          let liveV = String.fromCharCode(109,97,120,107,101,121,115,105,122,101,0);
          let bufferO = 4;
          let overR: Array<any> = [784, 189, 871];
         singaporez /= Math.max(2, pingT.length);
         liveV = `${1 / (Math.max(8, liveV.length))}`;
         bufferO &= bufferO;
         overR = [bufferO];
      for (let z = 0; z < 1; z++) {
         privilege0 = `${ewardedS.length % (Math.max(3, 5))}`;
      }
         pingT = `${ewardedS.length}`;
      let plus0 = 6765094.0 >= singaporez;
      do {
         singaporez /= Math.max(3, privilege0.length << (Math.min(Math.abs(2), 4)));
         if (plus0) {
            break;
         }
      } while ((4.52 == singaporez) && plus0);
         favoriteC += `${pingT.length ^ 3}`;
      while (privilege0.length > modityg.length) {
          let pointX = 4;
          let sortf = String.fromCharCode(112,114,101,118,105,111,117,115,108,121,0);
          let strw = false;
          let friendsv = String.fromCharCode(97,112,112,101,114,97,110,99,101,0);
          let condensedg = 1.0;
         privilege0 = "1";
         pointX /= Math.max((sortf == String.fromCharCode(57,0) ? (strw ? 3 : 2) : sortf.length), 1);
         strw = sortf.length <= 63 || 63 <= friendsv.length;
         friendsv = `${sortf.length & parseInt(`${condensedg}`)}`;
         condensedg /= Math.max(parseFloat(`${pointX}`), 5);
         break;
      }
         privilege0 = `${thailandn.length & privilege0.length}`;
      resulto = `${parseInt(`${customb}`) * 1}`;
   }
   while (!resulto.startsWith(`${customb}`)) {
      resulto = `${3 - gesturej.length}`;
      break;
   }
       let sidex: Array<any> = [String.fromCharCode(114,101,115,111,108,118,101,114,115,0), String.fromCharCode(118,97,114,105,97,98,105,108,105,116,121,0)];
       let vignettee = 3.0;
      for (let p = 0; p < 3; p++) {
          let weibo_ = String.fromCharCode(99,95,56,48,95,99,111,110,110,0);
          let room0 = 0;
          let checkboxk = String.fromCharCode(115,112,97,114,115,101,0);
          let notificationP = String.fromCharCode(99,111,100,101,99,114,97,119,0);
          let sinaz: Map<any, any> = new Map([[String.fromCharCode(116,103,101,116,0),659], [String.fromCharCode(110,101,120,116,104,111,112,0),826], [String.fromCharCode(121,95,53,95,117,110,105,116,121,0),236]]);
         sidex.push(sidex.length >> (Math.min(Math.abs(1), 2)));
         weibo_ += `${notificationP.length << (Math.min(4, Math.abs(sinaz.size)))}`;
         room0 ^= room0;
         checkboxk = `${notificationP.length}`;
         sinaz = new Map([[`${sinaz.size}`, sinaz.size]]);
      }
      let sharedC = vignettee >= 7712609.0;
      do {
          let completeq: Map<any, any> = new Map([[String.fromCharCode(101,95,57,49,95,112,117,116,0),928], [String.fromCharCode(120,95,54,51,95,115,112,101,99,105,102,105,101,114,0),820], [String.fromCharCode(105,109,112,108,105,99,105,116,0),757]]);
          let switch_2f = false;
         vignettee += (parseFloat(`${(switch_2f ? 3 : 3) / 1}`));
         completeq = new Map([[`${completeq.size}`, completeq.size]]);
         switch_2f = completeq.size < 67;
         if (sharedC) {
            break;
         }
      } while (sharedC && ((vignettee - parseFloat(`${sidex.length}`)) <= 3.29 || (parseFloat(`${sidex.length}`) - vignettee) <= 3.29));
      while ((4 ^ sidex.length) <= 1) {
         sidex.push(sidex.length);
         break;
      }
         sidex.push(parseInt(`${vignettee}`));
       let saveZ = String.fromCharCode(97,116,116,105,98,117,116,101,115,0);
       let routerF = String.fromCharCode(106,117,115,116,0);
          let twitterc: Map<any, any> = new Map([[String.fromCharCode(97,114,114,97,121,115,105,122,101,0),String.fromCharCode(101,116,104,0)], [String.fromCharCode(112,114,101,115,101,110,99,101,0),String.fromCharCode(99,114,101,97,116,105,118,101,0)], [String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,0),String.fromCharCode(112,114,111,109,111,116,105,110,103,95,103,95,56,0)]]);
          let overRU: Array<any> = [String.fromCharCode(115,119,105,122,122,108,101,100,0), String.fromCharCode(109,98,117,118,101,114,114,111,114,0)];
         sidex.push(2 & saveZ.length);
         twitterc.set(`${overRU.length}`, overRU.length - 3);
      recommendationY = [parseInt(`${basketballE}`)];
      recommendationY.push((String.fromCharCode(70,0) == resulto ? resulto.length : parseInt(`${resendX}`)));
      basketballE *= parseFloat(`${2 + recommendationY.length}`);
   while (2 == (brightnessq ^ 1) && 3 == (brightnessq / 1)) {
       let upgraden = String.fromCharCode(117,116,102,108,101,110,0);
      for (let h = 0; h < 3; h++) {
         upgraden = `${upgraden.length & 2}`;
      }
          let recommendationb = String.fromCharCode(117,115,101,115,0);
          let connectionJ = 3.0;
          let untickj = false;
         upgraden += `${((untickj ? 5 : 5) / (Math.max(2, 4)))}`;
         recommendationb += `${recommendationb.length}`;
         connectionJ /= Math.max((String.fromCharCode(54,0) == recommendationb ? parseInt(`${connectionJ}`) : recommendationb.length), 2);
         untickj = (recommendationb.length - parseInt(`${connectionJ}`)) > 92;
       let roomO = String.fromCharCode(103,95,51,53,0);
       let statsw = String.fromCharCode(109,97,116,99,104,105,110,102,111,0);
      brightnessq <<= Math.min(Math.abs(smallA.length >> (Math.min(4, upgraden.length))), 3);
      break;
   }
      resendX /= Math.max(3, resulto.length / 2);
      filledX /= Math.max(3, 4);
       let tickedF = false;
          let membershipY: Array<any> = [String.fromCharCode(108,105,98,103,115,109,0), String.fromCharCode(116,98,108,101,110,100,0)];
         tickedF = !tickedF;
         membershipY.push(membershipY.length);
         tickedF = !tickedF;
      if (tickedF) {
         tickedF = !tickedF;
      }
      filledX ^= 1 * parseInt(`${resendX}`);
   while (3 >= (filledX - parseInt(`${customb}`)) || (filledX - parseInt(`${customb}`)) >= 3) {
       let tooltipsD: Array<any> = [883, 556];
       let sporta = 0.0;
       let goalU: Map<any, any> = new Map([[String.fromCharCode(116,119,101,97,107,0),String.fromCharCode(112,114,111,99,101,115,115,101,100,0)], [String.fromCharCode(112,95,55,48,95,116,105,108,101,120,0),String.fromCharCode(115,116,97,107,105,110,103,0)], [String.fromCharCode(99,104,117,110,107,115,0),String.fromCharCode(100,105,115,112,108,97,121,101,100,0)]]);
          let ajax4 = String.fromCharCode(119,105,110,115,111,99,107,0);
          let appsL = 3.0;
          let with_3u = false;
         sporta -= (ajax4 == String.fromCharCode(85,0) ? parseInt(`${appsL}`) : ajax4.length);
         appsL *= 1;
      let complete3 = 6591608 <= goalU.size;
      do {
          let tooltipsb: Array<any> = [21, 515, 866];
          let actions: Map<any, any> = new Map([[String.fromCharCode(98,97,116,99,104,105,110,103,0),717], [String.fromCharCode(110,95,52,56,95,97,114,98,105,116,114,117,109,0),945]]);
          let temperatureI = String.fromCharCode(114,109,115,116,114,101,97,109,0);
          let mutedg = 4.0;
         goalU = new Map([[`${goalU.size}`, goalU.size ^ parseInt(`${mutedg}`)]]);
         tooltipsb = [(temperatureI == String.fromCharCode(49,0) ? actions.size : temperatureI.length)];
         actions = new Map([[`${actions.size}`, actions.size << (Math.min(Math.abs(1), 3))]]);
         mutedg /= Math.max(parseFloat(`${actions.size}`), 3);
         if (complete3) {
            break;
         }
      } while (complete3 && ((2 + tooltipsD.length) < 5 && 1 < (2 + goalU.size)));
          let stationz = 3.0;
         tooltipsD.push(parseInt(`${sporta}`));
         stationz *= parseFloat(`${parseInt(`${stationz}`)}`);
      for (let s = 0; s < 3; s++) {
         sporta += 3 << (Math.min(3, tooltipsD.length));
      }
      while ((tooltipsD.length * parseInt(`${sporta}`)) < 4) {
          let trophyD = 2;
          let window_cjW = String.fromCharCode(114,101,99,111,114,100,101,114,95,118,95,56,53,0);
          let relatedp = 5.0;
          let expand5 = 3.0;
         sporta -= parseInt(`${sporta}`) % 2;
         trophyD %= Math.max(2, window_cjW.length);
         window_cjW = `${window_cjW.length}`;
         relatedp /= Math.max((String.fromCharCode(103,0) == window_cjW ? trophyD : window_cjW.length), 3);
         expand5 *= 2 * window_cjW.length;
         break;
      }
      let changep = 7536995 >= tooltipsD.length;
      do {
         tooltipsD.push(parseInt(`${sporta}`) | tooltipsD.length);
         if (changep) {
            break;
         }
      } while (changep && (tooltipsD.includes(sporta)));
      let sheet2 = sporta >= 4950521.0;
      do {
         sporta += 1;
         if (sheet2) {
            break;
         }
      } while ((tooltipsD.includes(sporta)) && sheet2);
      while (2 <= (tooltipsD.length & 5)) {
          let flyere = false;
          let rankX = String.fromCharCode(105,110,97,99,116,105,118,101,0);
          let stored = String.fromCharCode(98,107,116,114,0);
         sporta /= Math.max(1, parseInt(`${sporta}`) / 1);
         flyere = stored.length >= 45;
         rankX = `${stored.length}`;
         break;
      }
      if ((sporta + 4.70) >= 4.59 && 4 >= (goalU.size - 1)) {
          let data2 = false;
          let sharedz = String.fromCharCode(117,116,104,111,114,0);
         sporta += ((data2 ? 2 : 1) / (Math.max(parseInt(`${sporta}`), 9)));
         data2 = sharedz.length > 18;
         sharedz += `${sharedz.length - sharedz.length}`;
      }
      filledX /= Math.max(4, goalU.size);
      break;
   }
   let combine1 = 8947969 <= recommendationY.length;
   do {
       let storeS = String.fromCharCode(102,117,115,101,0);
       let back8: Map<any, any> = new Map([[String.fromCharCode(102,119,97,108,115,104,95,51,95,56,50,0),String.fromCharCode(114,101,102,108,101,99,116,111,114,95,121,95,54,50,0)], [String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,0),String.fromCharCode(100,97,117,100,0)], [String.fromCharCode(97,99,101,108,112,0),String.fromCharCode(115,97,118,105,110,103,0)]]);
         storeS = `${storeS.length}`;
      let rewindc = back8.size >= 6617023;
      do {
         back8.set(`${storeS}`, 1);
         if (rewindc) {
            break;
         }
      } while ((storeS.length > 1) && rewindc);
      for (let j = 0; j < 3; j++) {
          let refreshk: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,101,115,116,101,100,0),81], [String.fromCharCode(98,108,111,99,107,99,104,97,105,110,115,0),925], [String.fromCharCode(107,112,115,0),910]]);
         storeS += `${back8.size}`;
         refreshk = new Map([[`${refreshk.size}`, refreshk.size / (Math.max(2, refreshk.size))]]);
      }
         storeS = `${1 - storeS.length}`;
      while (storeS.length < 2) {
          let championf = String.fromCharCode(109,111,116,105,111,110,0);
          let telegramN = String.fromCharCode(111,95,49,57,95,114,116,114,105,109,0);
         storeS = `${championf.length}`;
         championf += `${telegramN.length & 3}`;
         telegramN = `${telegramN.length / 3}`;
         break;
      }
         back8.set(`${storeS}`, back8.size + 2);
      recommendationY = [1];
      if (combine1) {
         break;
      }
   } while ((!settingd.includes(recommendationY.length)) && combine1);
   let descg = filledX <= 9860415;
   do {
      filledX <<= Math.min(stationr.length, 2);
      if (descg) {
         break;
      }
   } while (descg && (4 == (filledX - parseInt(`${rulesV}`)) && 2.29 == (1.25 - rulesV)));
      resendX += 1;
      gesturej += `${parseInt(`${rulesV}`)}`;

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let fullX = 3.0;
    let lines = true;
    let vignetteL = String.fromCharCode(105,112,97,100,100,0);
    let adultP = true;
    let hovers = 4.0;
    let clubD: Array<any> = [157, 52, 271];
    let regengX: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,115,111,109,101,0),94], [String.fromCharCode(109,97,116,114,105,120,102,0),722], [String.fromCharCode(99,111,100,101,115,0),460]]);
    let modelsd = String.fromCharCode(117,118,97,114,105,110,116,95,98,95,55,51,0);
    let langA: Array<any> = [715, 16];
    let temperatureT: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,105,110,103,0),755], [String.fromCharCode(112,101,114,109,117,116,101,0),760], [String.fromCharCode(117,110,105,118,101,114,115,97,108,0),193]]);
    let playe = 2;
    let playlistS = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0);
   if (lines) {
       let phoneD = 0.0;
       let telegramp = 2.0;
      while (3.74 <= (1.76 - telegramp) || 1.82 <= (1.76 + phoneD)) {
         phoneD -= parseFloat(`${parseInt(`${telegramp}`)}`);
         break;
      }
      for (let d = 0; d < 3; d++) {
         telegramp /= Math.max(3, 3);
      }
      for (let d = 0; d < 3; d++) {
          let dicey: Array<any> = [565, 831];
         telegramp -= 2;
         dicey = [1];
      }
       let bellq = String.fromCharCode(110,101,97,114,101,114,95,109,95,49,57,0);
       let countdown6 = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,0);
      while ((phoneD * 5) < 2.49) {
         telegramp += (String.fromCharCode(74,0) == bellq ? bellq.length : parseInt(`${telegramp}`));
         break;
      }
         countdown6 = `${parseInt(`${telegramp}`) * parseInt(`${phoneD}`)}`;
      vignetteL += `${((adultP ? 1 : 5) ^ regengX.size)}`;
   }
       let gemfilea = String.fromCharCode(100,101,115,99,0);
       let bottom8 = String.fromCharCode(119,95,52,52,95,106,105,110,99,108,117,100,101,0);
       let emojit: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,98,97,115,101,115,0),134], [String.fromCharCode(99,108,105,99,107,115,0),628]]);
       let thailandB: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,0),287], [String.fromCharCode(111,118,101,114,108,97,112,95,52,95,54,0),654], [String.fromCharCode(104,100,108,114,0),847]]);
         bottom8 = `${gemfilea.length & bottom8.length}`;
         emojit.set(`${thailandB.size}`, 1);
       let themeA = String.fromCharCode(99,108,101,97,114,115,0);
       let commonj = String.fromCharCode(110,105,109,97,116,105,111,110,0);
      let combinev = bottom8.length >= 5365754;
      do {
          let filledw = true;
          let hejiA = 0.0;
          let brightnessg = 0;
          let bing5 = String.fromCharCode(98,105,110,116,101,120,116,0);
         bottom8 = `${emojit.size / (Math.max(bottom8.length, 6))}`;
         filledw = filledw || 12.38 < hejiA;
         hejiA += 2 + parseInt(`${hejiA}`);
         brightnessg /= Math.max(parseInt(`${hejiA}`) % 1, 1);
         bing5 += `${((filledw ? 1 : 4) ^ bing5.length)}`;
         if (combinev) {
            break;
         }
      } while ((!bottom8.includes(gemfilea)) && combinev);
         emojit = new Map([[`${emojit.size}`, 3]]);
      hovers -= 3;
   let time_dE = modelsd.length >= 8417956;
   do {
       let pressurea = 1;
       let configureP: Map<any, any> = new Map([[String.fromCharCode(103,101,111,0),String.fromCharCode(113,117,97,100,114,95,114,95,51,48,0)], [String.fromCharCode(105,95,56,57,95,108,105,98,114,97,114,121,0),String.fromCharCode(108,97,99,101,115,0)]]);
      let loadingU = 9402495 >= configureP.size;
      do {
          let rankl = 0.0;
          let friendsG = 4;
          let ballc = String.fromCharCode(117,110,107,110,111,119,110,0);
          let detailB = String.fromCharCode(122,95,54,48,95,109,112,101,103,118,105,100,101,111,0);
         configureP = new Map([[`${friendsG}`, friendsG]]);
         rankl += detailB.length ^ 3;
         ballc += `${ballc.length}`;
         detailB = `${2 / (Math.max(1, detailB.length))}`;
         if (loadingU) {
            break;
         }
      } while (((5 ^ pressurea) < 4 || 5 < (pressurea ^ configureP.size)) && loadingU);
          let arrowc = String.fromCharCode(109,111,110,111,98,108,97,99,107,0);
          let countryI = String.fromCharCode(97,118,103,121,0);
         configureP.set(`${pressurea}`, pressurea + arrowc.length);
         arrowc = `${countryI.length << (Math.min(2, countryI.length))}`;
      let modelsr = configureP.size <= 7756097;
      do {
          let gmailq: Array<any> = [String.fromCharCode(104,95,55,95,98,116,114,101,101,0), String.fromCharCode(109,118,104,100,0)];
         configureP.set(`${pressurea}`, pressurea);
         gmailq = [gmailq.length % (Math.max(9, gmailq.length))];
         if (modelsr) {
            break;
         }
      } while (((configureP.size + 3) <= 4) && modelsr);
      if ((pressurea << (Math.min(Math.abs(1), 2))) == 4 && (1 << (Math.min(2, Math.abs(pressurea)))) == 5) {
         configureP.set(`${pressurea}`, 3 - configureP.size);
      }
      for (let w = 0; w < 3; w++) {
          let rewindd = 4.0;
          let other0 = false;
          let main_ro = 1.0;
          let catalogT = true;
         pressurea *= 2;
         rewindd /= Math.max((parseFloat(`${(other0 ? 5 : 2) / (Math.max(9, parseInt(`${rewindd}`)))}`)), 2);
         other0 = !other0;
         main_ro += ((other0 ? 5 : 2));
         catalogT = !other0;
      }
      let forward0 = configureP.size >= 6454359;
      do {
          let editr = 3.0;
         configureP = new Map([[`${pressurea}`, pressurea]]);
         editr += parseFloat(`${parseInt(`${editr}`)}`);
         if (forward0) {
            break;
         }
      } while (((pressurea / (Math.max(10, configureP.size))) <= 4) && forward0);
      modelsd += `${((adultP ? 3 : 2))}`;
      if (time_dE) {
         break;
      }
   } while (((2 & modelsd.length) < 2) && time_dE);
   while (vignetteL.length == 3 || !lines) {
       let yingQ = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,108,95,50,56,0);
       let macaud = String.fromCharCode(101,109,105,116,116,101,100,0);
         macaud += `${macaud.length | 2}`;
      while (yingQ.length >= macaud.length) {
         macaud = `${macaud.length + 2}`;
         break;
      }
         macaud += `${macaud.length % (Math.max(2, 1))}`;
      if (!yingQ.startsWith(`${macaud.length}`)) {
         macaud = "2";
      }
         yingQ = `${macaud.length / (Math.max(yingQ.length, 10))}`;
      while (macaud.length <= 3) {
          let rewindV = String.fromCharCode(100,95,49,54,95,99,108,111,115,101,115,116,0);
          let rewindU = String.fromCharCode(116,95,52,48,95,114,101,112,117,98,108,105,115,104,0);
         macaud += `${yingQ.length}`;
         rewindV = `${(String.fromCharCode(65,0) == rewindV ? rewindU.length : rewindV.length)}`;
         rewindU += `${rewindV.length}`;
         break;
      }
      lines = !lines;
      break;
   }
      langA = [parseInt(`${hovers}`) / (Math.max(temperatureT.size, 6))];

      if (delayValue === undefined) {

   let less8 = fullX >= 4947781.0;
   do {
      fullX -= (parseFloat(`${vignetteL == String.fromCharCode(57,0) ? vignetteL.length : clubD.length}`));
      if (less8) {
         break;
      }
   } while (((parseInt(`${fullX}`) / (Math.max(1, regengX.size))) == 4 && 4.72 == (fullX / (Math.max(2.95, 7)))) && less8);
      langA = [langA.length * 1];
   let turn1 = hovers >= 7260098.0;
   do {
      hovers *= ((lines ? 4 : 4) / (Math.max(5, parseInt(`${fullX}`))));
      if (turn1) {
         break;
      }
   } while ((3.62 == (langA.length - hovers)) && turn1);
       let logoutr = String.fromCharCode(105,109,112,111,114,116,115,0);
       let inactiveN = 0;
         logoutr += `${1 << (Math.min(4, logoutr.length))}`;
         logoutr += `${logoutr.length - inactiveN}`;
      if (logoutr.endsWith(`${inactiveN}`)) {
         inactiveN &= logoutr.length;
      }
      if ((logoutr.length % (Math.max(4, 5))) <= 2) {
          let appleq = String.fromCharCode(98,114,111,97,100,99,97,115,116,95,51,95,51,53,0);
          let fillZ = String.fromCharCode(122,95,53,48,95,108,108,118,105,100,100,115,112,101,110,99,0);
         logoutr += `${inactiveN * 3}`;
         appleq += "3";
         fillZ += `${2 ^ fillZ.length}`;
      }
      let update_wt = inactiveN >= 8557859;
      do {
         inactiveN &= logoutr.length % (Math.max(10, inactiveN));
         if (update_wt) {
            break;
         }
      } while (update_wt && (2 >= (logoutr.length - inactiveN)));
      for (let y = 0; y < 3; y++) {
         logoutr = "3";
      }
      hovers /= Math.max(parseInt(`${fullX}`), 5);
      hovers += (vignetteL == String.fromCharCode(103,0) ? vignetteL.length : (lines ? 3 : 3));
        if (showSlider === 'none' && !paused) {

      fullX /= Math.max(parseFloat(`${playe % 3}`), 1);
   let darkD = 9584979 >= langA.length;
   do {
      langA.push(1);
      if (darkD) {
         break;
      }
   } while (darkD && (vignetteL.includes(`${langA.length}`)));
       let model = String.fromCharCode(100,95,57,53,95,116,97,100,100,0);
       let morem = String.fromCharCode(116,114,105,97,110,103,117,108,97,114,0);
       let inviteg = 0.0;
       let styley = String.fromCharCode(116,115,97,110,0);
       let buttone = String.fromCharCode(122,111,110,101,0);
      for (let n = 0; n < 3; n++) {
         buttone += "2";
      }
         morem += `${styley.length ^ 1}`;
         styley = `${morem.length - model.length}`;
      while (1 == (5 >> (Math.min(4, model.length)))) {
         inviteg *= buttone.length % (Math.max(1, 7));
         break;
      }
      if (2 <= styley.length) {
          let report4 = String.fromCharCode(105,95,49,51,95,112,114,101,118,105,101,119,105,110,103,0);
          let rankn: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,104,111,115,116,0),597], [String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,0),755]]);
         styley += "2";
         report4 += `${rankn.size}`;
         rankn.set(report4, rankn.size ^ 3);
      }
         styley = `${buttone.length}`;
         morem = `${parseInt(`${inviteg}`)}`;
      while (styley == String.fromCharCode(84,0)) {
         model = `${styley.length}`;
         break;
      }
      clubD = [regengX.size >> (Math.min(langA.length, 3))];
      vignetteL += `${regengX.size}`;
      playlistS += `${playlistS.length}`;
          setShowControls(false)
        }
      } else {

   if (adultP) {
       let referrerd = 0.0;
      while (referrerd < referrerd) {
         referrerd += 1;
         break;
      }
         referrerd /= Math.max(2, 1 % (Math.max(parseInt(`${referrerd}`), 7)));
      while (referrerd < 1.60) {
         referrerd /= Math.max(parseInt(`${referrerd}`), 4);
         break;
      }
      adultP = 20.22 < hovers;
   }
   for (let q = 0; q < 1; q++) {
       let spinnerL = String.fromCharCode(108,97,110,103,95,105,95,56,48,0);
       let tooltipsz = String.fromCharCode(108,111,99,0);
          let updates5 = String.fromCharCode(100,101,109,117,120,101,114,0);
          let typeso = true;
          let bellO = String.fromCharCode(117,95,50,56,95,112,114,101,109,117,108,116,105,112,108,121,0);
         spinnerL += "1";
         updates5 = `${((typeso ? 2 : 3) % (Math.max(bellO.length, 9)))}`;
         typeso = updates5.length < 77;
         bellO = "2";
      while (3 == spinnerL.length) {
          let frame_gwo: Array<any> = [787, 970];
          let heartL = false;
          let middlewareH = String.fromCharCode(118,112,108,97,121,101,114,0);
          let moduleV = 1.0;
         tooltipsz += "3";
         frame_gwo = [middlewareH.length];
         heartL = !heartL && frame_gwo.length > 74;
         middlewareH = `${(frame_gwo.length & (heartL ? 3 : 3))}`;
         moduleV /= Math.max(2, parseFloat(`${3}`));
         break;
      }
      langA = [modelsd.length];
   }
   for (let o = 0; o < 3; o++) {
       let moonO: Array<any> = [647, 434, 382];
       let zhengpianW = 1;
       let lessg = 3.0;
          let overlayU: Map<any, any> = new Map([[String.fromCharCode(102,114,97,110,100,111,109,95,49,95,49,0),69], [String.fromCharCode(101,120,116,95,113,95,55,49,0),425]]);
          let stepQ = String.fromCharCode(103,95,54,48,95,112,114,101,115,117,109,101,0);
          let clubU: Array<any> = [556, 679];
         zhengpianW *= zhengpianW / (Math.max(1, 2));
         overlayU = new Map([[`${overlayU.size}`, clubU.length | 2]]);
         stepQ += "1";
         clubU = [overlayU.size];
       let r_playerV = true;
       let constantsc = false;
      while (4 == (moonO.length - 2) || r_playerV) {
          let adulte = 0.0;
          let unselectedW: Array<any> = [308, 502];
         moonO = [moonO.length + 1];
         adulte /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${adulte}`)), 2)), 5);
         unselectedW = [3];
         break;
      }
      while (constantsc) {
          let privilegeu: Array<any> = [String.fromCharCode(110,115,116,97,110,116,0), String.fromCharCode(114,101,111,115,95,48,95,53,55,0), String.fromCharCode(98,97,115,101,100,0)];
          let placeholder2 = String.fromCharCode(115,104,111,117,108,100,95,109,95,55,0);
          let volumel: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,115,95,105,95,57,53,0),false ], [String.fromCharCode(102,116,118,98,108,97,110,107,0),true ], [String.fromCharCode(114,103,98,116,111,121,118,95,102,95,52,52,0),false ]]);
          let hoverK = String.fromCharCode(101,97,115,105,110,103,0);
          let episodesz = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,0);
         constantsc = placeholder2.length > 34 && !constantsc;
         privilegeu.push(volumel.size);
         placeholder2 += `${privilegeu.length}`;
         volumel = new Map([[`${volumel.size}`, volumel.size ^ 2]]);
         hoverK = `${(episodesz == String.fromCharCode(82,0) ? episodesz.length : privilegeu.length)}`;
         break;
      }
         zhengpianW += (zhengpianW / (Math.max(8, (constantsc ? 5 : 1))));
      let downloaderB = constantsc ? !constantsc : constantsc;
      do {
         constantsc = moonO.includes(zhengpianW);
         if (downloaderB) {
            break;
         }
      } while ((moonO.length <= 5) && downloaderB);
      for (let p = 0; p < 2; p++) {
         moonO.push(zhengpianW + 3);
      }
      if (3.82 == (lessg / (Math.max(4, zhengpianW)))) {
          let networkf: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,97,100,100,114,101,115,115,0),false ], [String.fromCharCode(118,111,116,101,0),true ]]);
          let h_unlocke = 4;
         lessg -= parseFloat(`${h_unlocke + 3}`);
         networkf.set(`${networkf.size}`, networkf.size);
         h_unlocke ^= 3;
      }
      let blacklistY = 7016907.0 >= lessg;
      do {
          let ewardedY = 5.0;
          let time_su = true;
          let userr = String.fromCharCode(113,95,50,55,95,109,97,99,114,111,98,108,111,99,107,0);
         lessg += parseFloat(`${moonO.length ^ parseInt(`${lessg}`)}`);
         ewardedY += (parseFloat(`${(time_su ? 1 : 3)}`));
         time_su = !time_su;
         userr = `${((time_su ? 4 : 3) % (Math.max(userr.length, 9)))}`;
         if (blacklistY) {
            break;
         }
      } while (blacklistY && ((zhengpianW * lessg) <= 4.42));
      temperatureT = new Map([[`${fullX}`, 1 ^ parseInt(`${fullX}`)]]);
   }
      fullX -= parseFloat(`${parseInt(`${fullX}`)}`);
   let friendsb = 6187628 >= playe;
   do {
      playe /= Math.max(3 & clubD.length, 1);
      if (friendsb) {
         break;
      }
   } while (((playlistS.length - 4) > 2) && friendsb);
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let hookv: Array<any> = [114, 750, 461];
    let zhengpianc = 2.0;
    let controlsR: Array<any> = [369, 403, 37];
    let humidityK = 0;
    let loadingz = String.fromCharCode(114,97,105,115,101,95,52,95,51,53,0);
    let favicon8 = String.fromCharCode(118,95,55,55,95,103,101,116,101,110,118,0);
    let matchh = false;
    let auto__s: Array<any> = [836, 798];
    let networkI: Array<any> = [15, 469, 832];
    let search9 = String.fromCharCode(115,104,111,114,116,108,121,0);
    let short_r2r = String.fromCharCode(97,116,111,98,111,111,108,0);
    let tickedP = String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,0);
    let point8 = String.fromCharCode(97,115,110,116,0);
    let otherP = String.fromCharCode(102,97,116,101,0);
    let typingo = true;
    let whiten = String.fromCharCode(109,100,112,114,0);
       let sellS = 4.0;
         sellS -= parseInt(`${sellS}`) - 3;
          let customg = String.fromCharCode(109,98,103,114,97,112,104,0);
          let moonL: Map<any, any> = new Map([[String.fromCharCode(103,101,111,99,111,100,101,114,0),505], [String.fromCharCode(104,101,120,105,110,116,0),394]]);
         sellS *= moonL.size | parseInt(`${sellS}`);
         customg = `${customg.length}`;
         moonL = new Map([[customg, 3 >> (Math.min(1, customg.length))]]);
      let memberK = sellS >= 5320828.0;
      do {
         sellS *= 1;
         if (memberK) {
            break;
         }
      } while (memberK && (sellS < sellS));
      favicon8 += "2";
   for (let v = 0; v < 1; v++) {
       let dropdown0 = 3.0;
       let combineh = String.fromCharCode(115,121,110,99,0);
      let crossZ = combineh.length >= 7585361;
      do {
         combineh += `${combineh.length}`;
         if (crossZ) {
            break;
         }
      } while ((!combineh.startsWith(`${dropdown0}`)) && crossZ);
         combineh += `${combineh.length + parseInt(`${dropdown0}`)}`;
      if (dropdown0 == 2.27) {
         combineh = `${combineh.length | 3}`;
      }
      let viewera = dropdown0 >= 7573599.0;
      do {
         dropdown0 += parseInt(`${dropdown0}`) & combineh.length;
         if (viewera) {
            break;
         }
      } while ((5 <= combineh.length) && viewera);
         combineh = "2";
         combineh = `${parseInt(`${dropdown0}`) / 3}`;
      auto__s.push(auto__s.length % (Math.max(1, 10)));
   }
   if (3 <= auto__s.length) {
       let sella = 2.0;
       let langkeyC: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,0),157], [String.fromCharCode(120,99,98,103,114,97,98,95,48,95,55,53,0),747]]);
       let dropdownz = 4.0;
       let tempT = 5;
       let friendsY = 1.0;
         langkeyC = new Map([[`${tempT}`, parseInt(`${dropdownz}`)]]);
      while ((sella - 5.3) == 5.28 || (friendsY - sella) == 5.3) {
          let heart0 = false;
         sella /= Math.max(parseFloat(`${3}`), 4);
         heart0 = !heart0;
         break;
      }
         tempT *= langkeyC.size;
         dropdownz += 2 & parseInt(`${friendsY}`);
          let datag: Array<any> = [String.fromCharCode(114,97,103,103,97,98,108,101,0), String.fromCharCode(100,111,120,121,103,101,110,0), String.fromCharCode(97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,115,95,52,50,0)];
          let fastforwardM = 1.0;
          let module_: Array<any> = [163, 159, 704];
         langkeyC.set(`${dropdownz}`, 1);
         datag = [datag.length];
         fastforwardM += parseFloat(`${datag.length >> (Math.min(1, Math.abs(parseInt(`${fastforwardM}`))))}`);
         module_.push(datag.length);
      if (Array.from(langkeyC.keys()).includes(`${sella}`)) {
          let mathI = 1.0;
         sella /= Math.max(parseFloat(`${2 - parseInt(`${dropdownz}`)}`), 5);
         mathI -= parseInt(`${mathI}`) << (Math.min(1, Math.abs(parseInt(`${mathI}`))));
      }
      while (3 < (tempT << (Math.min(Math.abs(2), 3))) || (langkeyC.size << (Math.min(Math.abs(2), 1))) < 1) {
          let shoot4 = 1;
          let nterstitiall: Array<any> = [734, 620];
         langkeyC = new Map([[`${langkeyC.size}`, parseInt(`${sella}`) * 3]]);
         shoot4 /= Math.max(1, nterstitiall.length);
         nterstitiall.push(shoot4 ^ 3);
         break;
      }
          let relatedf = String.fromCharCode(112,97,115,115,101,100,0);
         langkeyC.set(`${dropdownz}`, 1);
         relatedf = `${(String.fromCharCode(84,0) == relatedf ? relatedf.length : relatedf.length)}`;
          let descR = false;
         dropdownz += parseInt(`${friendsY}`);
         descR = (!descR ? !descR : !descR);
         langkeyC = new Map([[`${langkeyC.size}`, langkeyC.size]]);
          let singleZ = String.fromCharCode(112,97,99,107,97,103,101,100,0);
          let baidu1 = String.fromCharCode(115,119,105,102,116,121,0);
          let descJ = String.fromCharCode(115,113,108,0);
         dropdownz *= 2 << (Math.min(Math.abs(parseInt(`${dropdownz}`)), 5));
         singleZ = `${(singleZ == String.fromCharCode(121,0) ? baidu1.length : singleZ.length)}`;
         baidu1 += `${2 >> (Math.min(2, descJ.length))}`;
         descJ = `${baidu1.length}`;
      while ((parseFloat(`${langkeyC.size}`) - sella) == 3.41 && 3 == (langkeyC.size - parseInt(`${sella}`))) {
         langkeyC.set(`${friendsY}`, parseInt(`${dropdownz}`));
         break;
      }
      while ((3.52 - sella) < 1.88 && 3.52 < (dropdownz - sella)) {
         sella -= parseFloat(`${langkeyC.size + parseInt(`${dropdownz}`)}`);
         break;
      }
         langkeyC = new Map([[`${dropdownz}`, tempT]]);
       let commonM = true;
      matchh = 8 == langkeyC.size;
   }
   for (let t = 0; t < 3; t++) {
      auto__s = [search9.length];
   }
   let configureu = favicon8.length <= 8614375;
   do {
       let themee: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,0),107], [String.fromCharCode(115,116,111,112,101,100,0),801]]);
         themee = new Map([[`${themee.size}`, themee.size >> (Math.min(4, Math.abs(themee.size)))]]);
      if ((themee.size << (Math.min(Math.abs(4), 4))) <= 5) {
         themee.set(`${themee.size}`, 3 << (Math.min(5, Math.abs(themee.size))));
      }
      while (themee.size <= 3) {
         themee.set(`${themee.size}`, themee.size / 2);
         break;
      }
      favicon8 += `${parseInt(`${zhengpianc}`) + humidityK}`;
      if (configureu) {
         break;
      }
   } while (configureu && (controlsR.length > favicon8.length));

    if (isLocked) {

      search9 = `${networkI.length % (Math.max(3, auto__s.length))}`;
       let policyQ = 5;
          let pluss: Map<any, any> = new Map([[String.fromCharCode(108,97,110,103,105,100,0),808], [String.fromCharCode(113,109,97,116,0),255]]);
         policyQ %= Math.max(3, 2);
         pluss.set(`${pluss.size}`, 3 & pluss.size);
         policyQ -= policyQ;
         policyQ &= policyQ;
      loadingz += `${auto__s.length % (Math.max(loadingz.length, 6))}`;
   let profileU = 9641863 >= auto__s.length;
   do {
       let flyero: Map<any, any> = new Map([[String.fromCharCode(119,97,114,110,105,110,103,115,0),String.fromCharCode(109,101,103,97,98,121,116,101,95,122,95,50,0)], [String.fromCharCode(109,105,115,109,97,116,99,104,0),String.fromCharCode(101,120,116,114,97,0)], [String.fromCharCode(112,111,108,105,99,101,95,119,95,50,48,0),String.fromCharCode(99,111,114,114,101,99,116,105,111,110,0)]]);
       let apple6 = String.fromCharCode(105,114,114,101,108,118,97,110,116,0);
       let actiong = String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,0);
       let animation7 = 1.0;
          let inactiveD = String.fromCharCode(114,101,109,101,109,98,101,114,0);
          let carousel0 = String.fromCharCode(115,116,101,110,99,105,108,0);
         animation7 += 1 % (Math.max(10, inactiveD.length));
         inactiveD += `${(String.fromCharCode(112,0) == carousel0 ? carousel0.length : carousel0.length)}`;
         actiong = `${1 - parseInt(`${animation7}`)}`;
       let agreementu = String.fromCharCode(115,116,97,116,117,115,111,114,0);
      let popupn = animation7 >= 8254072.0;
      do {
          let googleO = String.fromCharCode(115,117,98,115,116,114,101,97,109,0);
          let flyerb = String.fromCharCode(120,95,50,95,101,110,97,98,108,101,0);
          let appsx = String.fromCharCode(100,95,52,48,95,98,117,105,108,116,0);
          let entrym = String.fromCharCode(108,105,107,101,108,121,0);
          let photoE = String.fromCharCode(105,110,105,0);
         animation7 *= apple6.length << (Math.min(Math.abs(2), 1));
         googleO = `${flyerb.length}`;
         flyerb += `${photoE.length}`;
         appsx = `${1 | entrym.length}`;
         entrym += `${(String.fromCharCode(68,0) == flyerb ? flyerb.length : photoE.length)}`;
         if (popupn) {
            break;
         }
      } while (popupn && (2 >= (agreementu.length % 1)));
         flyero = new Map([[actiong, actiong.length]]);
          let annerD: Map<any, any> = new Map([[String.fromCharCode(102,95,52,54,95,105,97,100,115,116,120,0),970], [String.fromCharCode(111,95,50,55,95,116,105,116,110,116,0),894]]);
         actiong = `${2 >> (Math.min(1, Math.abs(annerD.size)))}`;
          let private_sL = String.fromCharCode(98,101,120,116,95,119,95,56,51,0);
          let zhengpianN: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,114,116,0),887], [String.fromCharCode(97,110,105,109,97,116,111,114,115,0),304]]);
          let progressn = 5.0;
         actiong += `${zhengpianN.size / (Math.max(6, flyero.size))}`;
         private_sL += `${(String.fromCharCode(51,0) == private_sL ? parseInt(`${progressn}`) : private_sL.length)}`;
         zhengpianN.set(private_sL, 2 - private_sL.length);
         progressn -= 3 << (Math.min(3, private_sL.length));
      if (2 == (5 ^ agreementu.length) && (agreementu.length + 5) == 3) {
         animation7 -= apple6.length * 3;
      }
      auto__s.push(3 & loadingz.length);
      if (profileU) {
         break;
      }
   } while (profileU && (tickedP.endsWith(`${auto__s.length}`)));
   if ((1 ^ auto__s.length) > 4) {
       let auto_knS = String.fromCharCode(115,95,54,55,95,112,111,108,121,0);
       let gestureL: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,115,95,55,53,0),179], [String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,122,95,52,56,0),486], [String.fromCharCode(106,115,105,109,100,101,120,116,0),110]]);
       let penaltyV = true;
       let emptyW: Map<any, any> = new Map([[String.fromCharCode(115,119,105,99,104,0),false ], [String.fromCharCode(112,95,54,49,95,110,105,108,115,0),true ], [String.fromCharCode(103,101,116,110,112,97,115,115,101,115,0),false ]]);
       let friendsA = String.fromCharCode(103,101,116,98,105,116,0);
         auto_knS = `${gestureL.size}`;
       let eventb = String.fromCharCode(109,111,110,111,116,111,110,121,0);
          let lessG = String.fromCharCode(119,95,56,48,95,99,97,99,104,101,100,0);
         friendsA += `${gestureL.size - emptyW.size}`;
         lessG = `${lessG.length}`;
         emptyW = new Map([[`${gestureL.size}`, eventb.length | gestureL.size]]);
      let benefitz = emptyW.size >= 6511381;
      do {
          let teamJ = String.fromCharCode(102,95,49,51,95,102,97,118,111,114,105,116,101,0);
         emptyW = new Map([[`${gestureL.size}`, 2]]);
         teamJ = `${(String.fromCharCode(88,0) == teamJ ? teamJ.length : teamJ.length)}`;
         if (benefitz) {
            break;
         }
      } while ((4 >= (friendsA.length + 5) || (friendsA.length + emptyW.size) >= 5) && benefitz);
      if ((gestureL.size % (Math.max(6, eventb.length))) > 2 && 2 > (gestureL.size % (Math.max(7, eventb.length)))) {
         gestureL.set(`${penaltyV}`, 3);
      }
         gestureL.set(`${auto_knS}`, emptyW.size / (Math.max(auto_knS.length, 4)));
         penaltyV = (84 == ((!penaltyV ? auto_knS.length : 84) + auto_knS.length));
          let emoji8 = 5.0;
         friendsA = `${auto_knS.length}`;
         emoji8 -= parseFloat(`${parseInt(`${emoji8}`) % (Math.max(parseInt(`${emoji8}`), 1))}`);
         gestureL = new Map([[eventb, auto_knS.length]]);
      while (auto_knS.startsWith(`${penaltyV}`)) {
         penaltyV = (6 >= (friendsA.length << (Math.min(4, Math.abs((!penaltyV ? 6 : friendsA.length))))));
         break;
      }
      while (emptyW.size < friendsA.length) {
         friendsA = `${((penaltyV ? 3 : 4) / 3)}`;
         break;
      }
      for (let z = 0; z < 1; z++) {
         auto_knS += `${2 | gestureL.size}`;
      }
          let telegramq = 4;
          let disconnected3 = 2.0;
         eventb = `${2 + parseInt(`${disconnected3}`)}`;
         telegramq <<= Math.min(Math.abs(telegramq), 1);
         disconnected3 += 2;
      while (3 == gestureL.size || (gestureL.size << (Math.min(Math.abs(3), 1))) == 5) {
          let middleg: Map<any, any> = new Map([[String.fromCharCode(109,111,110,105,116,111,114,0),true ], [String.fromCharCode(116,111,117,99,104,0),true ], [String.fromCharCode(116,97,103,98,105,116,0),true ]]);
          let confirmationD = String.fromCharCode(119,102,100,105,102,95,122,95,54,50,0);
         penaltyV = gestureL.size == auto_knS.length;
         middleg.set(confirmationD, (confirmationD == String.fromCharCode(55,0) ? middleg.size : confirmationD.length));
         break;
      }
      auto__s.push(controlsR.length / (Math.max(auto__s.length, 10)));
   }
       let options_ = String.fromCharCode(103,101,110,101,114,97,116,111,114,115,0);
          let videoa = String.fromCharCode(97,110,99,104,111,114,105,110,103,0);
          let save0 = 3;
         options_ += `${videoa.length}`;
         videoa += `${save0}`;
         options_ += `${(options_ == String.fromCharCode(98,0) ? options_.length : options_.length)}`;
      if (options_.endsWith(`${options_.length}`)) {
         options_ = `${options_.length}`;
      }
      loadingz = `${options_.length / (Math.max(2, 7))}`;
      

      tickedP += `${networkI.length & point8.length}`;
       let stepE: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,100,117,112,0),true ], [String.fromCharCode(112,107,99,115,0),false ], [String.fromCharCode(107,95,54,50,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0),false ]]);
          let combineS = 0.0;
         stepE.set(`${combineS}`, stepE.size);
         stepE.set(`${stepE.size}`, stepE.size % (Math.max(stepE.size, 8)));
         stepE = new Map([[`${stepE.size}`, stepE.size ^ stepE.size]]);
      hookv.push(loadingz.length);
       let time_4aR: Array<any> = [524, 158, 64];
       let yellowv = 4.0;
         time_4aR = [parseInt(`${yellowv}`) / (Math.max(1, time_4aR.length))];
          let tickedI = true;
          let fieldv: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,111,0),570], [String.fromCharCode(115,117,98,115,116,97,116,101,95,49,95,52,0),853], [String.fromCharCode(104,95,56,50,95,98,100,115,0),354]]);
         yellowv -= parseInt(`${yellowv}`) & 3;
         tickedI = fieldv.size >= 84;
         fieldv.set(`${tickedI}`, 1);
      while (parseInt(`${yellowv}`) >= time_4aR.length) {
         yellowv -= parseInt(`${yellowv}`) ^ time_4aR.length;
         break;
      }
      let sheetZ = time_4aR.length <= 6474114;
      do {
          let loadingM = true;
          let long_fJ = String.fromCharCode(97,103,103,105,110,102,111,0);
          let episodeW: Map<any, any> = new Map([[String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,118,95,55,49,0),581], [String.fromCharCode(118,109,100,118,105,100,101,111,0),658], [String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,0),150]]);
          let disconnectedr: Array<any> = [909, 977, 484];
          let zhubo6 = String.fromCharCode(111,95,49,48,95,110,105,115,116,122,0);
         time_4aR = [parseInt(`${yellowv}`)];
         loadingM = long_fJ.length == 69;
         long_fJ = `${3 ^ disconnectedr.length}`;
         episodeW.set(long_fJ, (String.fromCharCode(99,0) == long_fJ ? long_fJ.length : zhubo6.length));
         disconnectedr.push((String.fromCharCode(80,0) == zhubo6 ? disconnectedr.length : zhubo6.length));
         if (sheetZ) {
            break;
         }
      } while (sheetZ && (4.71 < yellowv));
      if (5.68 >= (yellowv * 3.28) && (2 & time_4aR.length) >= 5) {
         time_4aR.push(parseInt(`${yellowv}`));
      }
          let sportsT = 2;
         time_4aR.push(sportsT);
      networkI.push(hookv.length ^ time_4aR.length);
      favicon8 = `${tickedP.length}`;
   let arrowr = search9.length >= 6124755;
   do {
       let expiredK = 4;
         expiredK *= expiredK >> (Math.min(Math.abs(expiredK), 3));
      if (4 >= expiredK) {
          let rankF = 0.0;
          let controlr = String.fromCharCode(103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,95,110,95,54,57,0);
          let pingp = String.fromCharCode(116,97,107,101,110,95,54,95,49,53,0);
          let popup_ = false;
          let userV = String.fromCharCode(112,114,101,100,105,99,97,116,101,95,110,95,54,49,0);
         expiredK += expiredK;
         rankF /= Math.max(2, pingp.length ^ userV.length);
         controlr = `${parseInt(`${rankF}`)}`;
         pingp = `${((popup_ ? 5 : 3))}`;
         popup_ = rankF > 51.97 && String.fromCharCode(108,0) == controlr;
         userV = `${(String.fromCharCode(81,0) == pingp ? pingp.length : (popup_ ? 2 : 3))}`;
      }
         expiredK &= expiredK / (Math.max(3, 4));
      search9 = "1";
      if (arrowr) {
         break;
      }
   } while (arrowr && ((search9.length | controlsR.length) > 4));
      setIsLocked(false);
    } else {

   let mailO = 9209438 >= loadingz.length;
   do {
       let reportP = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,0);
       let ping6 = String.fromCharCode(109,101,109,110,95,100,95,48,0);
       let submitj = 2.0;
       let whistlep = 3.0;
         submitj *= 2;
         reportP = `${parseInt(`${whistlep}`) - 3}`;
         ping6 += "2";
       let weiboK = String.fromCharCode(116,121,112,101,100,101,102,115,0);
      if (3 == (2 | weiboK.length)) {
         whistlep /= Math.max(3, 2 >> (Math.min(Math.abs(parseInt(`${submitj}`)), 1)));
      }
      let tickq = ping6 == String.fromCharCode(97,114,104,115,117,105,101,0);
      do {
          let chinau = String.fromCharCode(111,117,114,0);
          let combineZ = 4.0;
          let appleZ = 1.0;
          let otherL = String.fromCharCode(109,95,49,53,95,102,97,115,116,102,105,114,115,116,112,97,115,115,0);
         ping6 = `${1 ^ chinau.length}`;
         chinau += `${otherL.length}`;
         combineZ *= parseFloat(`${1}`);
         appleZ -= (otherL == String.fromCharCode(119,0) ? otherL.length : parseInt(`${appleZ}`));
         if (tickq) {
            break;
         }
      } while (tickq && ((submitj / (Math.max(ping6.length, 6))) >= 3.45 && (submitj / 3.45) >= 5.84));
      if (3.95 >= (whistlep / (Math.max(ping6.length, 8)))) {
         ping6 = `${parseInt(`${whistlep}`)}`;
      }
         whistlep *= parseInt(`${whistlep}`);
       let otherm = String.fromCharCode(122,95,52,51,95,98,101,97,114,105,110,103,0);
       let flyerS = String.fromCharCode(99,108,111,115,101,115,116,95,48,95,53,0);
         reportP = `${(flyerS == String.fromCharCode(98,0) ? flyerS.length : parseInt(`${submitj}`))}`;
      while ((reportP.length % 1) >= 4 && 1 >= (reportP.length ^ 1)) {
          let pauseM = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,0);
          let adultt = 2;
          let const_pzq = 3.0;
          let match4: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,115,105,122,101,0),322], [String.fromCharCode(114,97,110,115,112,111,114,116,0),285]]);
          let inactiveV = 3.0;
         submitj -= parseInt(`${submitj}`) << (Math.min(otherm.length, 1));
         pauseM += `${(String.fromCharCode(71,0) == pauseM ? pauseM.length : parseInt(`${const_pzq}`))}`;
         adultt ^= 1 << (Math.min(Math.abs(parseInt(`${const_pzq}`)), 4));
         match4 = new Map([[`${adultt}`, pauseM.length & 3]]);
         inactiveV *= 3;
         break;
      }
         weiboK += `${otherm.length % (Math.max(ping6.length, 1))}`;
      loadingz = `${((matchh ? 1 : 1))}`;
      if (mailO) {
         break;
      }
   } while (mailO && (4 <= tickedP.length));
   let networkj = 5230848 >= short_r2r.length;
   do {
       let logox = String.fromCharCode(112,114,105,118,97,116,101,0);
       let currente = String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,97,95,56,55,0);
         currente = `${currente.length}`;
      if (currente.length == 5) {
         currente = "2";
      }
         logox = `${(logox == String.fromCharCode(82,0) ? logox.length : currente.length)}`;
         logox = `${2 & currente.length}`;
      while (currente.startsWith(`${logox.length}`)) {
          let groupt = String.fromCharCode(108,97,118,102,117,116,105,108,115,0);
         logox += `${currente.length}`;
         groupt += "1";
         break;
      }
         currente = `${currente.length >> (Math.min(logox.length, 1))}`;
      short_r2r += `${favicon8.length * 3}`;
      if (networkj) {
         break;
      }
   } while ((loadingz.length < 4) && networkj);
   while (search9.length <= loadingz.length) {
      search9 = `${2 | parseInt(`${zhengpianc}`)}`;
      break;
   }
   for (let x = 0; x < 1; x++) {
      short_r2r = `${humidityK}`;
   }
   for (let t = 0; t < 2; t++) {
      tickedP += `${humidityK}`;
   }
      

   for (let x = 0; x < 3; x++) {
      zhengpianc *= (tickedP == String.fromCharCode(85,0) ? tickedP.length : controlsR.length);
   }
   if (short_r2r.endsWith(`${controlsR.length}`)) {
      controlsR = [hookv.length];
   }
       let episodesq = 1.0;
       let pingt = 4.0;
       let targetU = false;
      let guideY = targetU ? !targetU : targetU;
      do {
         targetU = !targetU;
         if (guideY) {
            break;
         }
      } while (guideY && ((4.77 * pingt) >= 3.40 || targetU));
          let mathO: Array<any> = [986, 240];
          let albumP: Array<any> = [984, 650];
         pingt += parseFloat(`${3}`);
         mathO = [1 * albumP.length];
         albumP.push(3 >> (Math.min(4, albumP.length)));
      let backwardx = 7962225.0 >= pingt;
      do {
          let dialogv = false;
          let gesturesk: Array<any> = [173, 145, 939];
          let inviteh = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,95,55,95,50,54,0);
          let homei = 2.0;
         pingt -= (parseFloat(`${parseInt(`${episodesq}`) + (dialogv ? 3 : 5)}`));
         dialogv = gesturesk.length > 80;
         gesturesk = [1];
         inviteh += `${gesturesk.length}`;
         homei -= parseFloat(`${3 - inviteh.length}`);
         if (backwardx) {
            break;
         }
      } while ((5.33 == (episodesq / (Math.max(pingt, 7))) && (episodesq / (Math.max(5, pingt))) == 5.33) && backwardx);
      let matchR = episodesq <= 6248274.0;
      do {
         episodesq += parseFloat(`${3}`);
         if (matchR) {
            break;
         }
      } while ((5.66 < episodesq || (5.66 - episodesq) < 1.31) && matchR);
      for (let e = 0; e < 1; e++) {
         pingt += parseFloat(`${1 / (Math.max(parseInt(`${pingt}`), 3))}`);
      }
      let project2 = targetU ? !targetU : targetU;
      do {
          let modelsy = String.fromCharCode(117,110,100,111,116,116,101,100,0);
          let volumeF: Map<any, any> = new Map([[String.fromCharCode(99,95,50,51,95,100,105,115,116,112,111,105,110,116,0),454], [String.fromCharCode(115,95,52,51,95,97,115,121,109,0),619], [String.fromCharCode(99,111,110,116,97,105,110,115,0),486]]);
          let expiredl = 0.0;
          let with_9q = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,0);
         targetU = expiredl <= episodesq;
         modelsy = "2";
         volumeF = new Map([[`${volumeF.size}`, 3]]);
         expiredl -= modelsy.length / (Math.max(3, volumeF.size));
         with_9q = `${3 & with_9q.length}`;
         if (project2) {
            break;
         }
      } while (project2 && (!targetU));
      for (let c = 0; c < 2; c++) {
         targetU = episodesq >= 70.40 || targetU;
      }
          let window_7v = String.fromCharCode(98,111,111,116,0);
          let weibo6 = String.fromCharCode(101,95,54,50,95,99,113,117,101,117,101,0);
         pingt *= (parseFloat(`${weibo6 == String.fromCharCode(98,0) ? weibo6.length : parseInt(`${episodesq}`)}`));
         window_7v += `${window_7v.length ^ 3}`;
         targetU = episodesq >= 61.1;
      matchh = point8.length < 75;
      loadingz = `${search9.length - 2}`;
      loadingz += "1";
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
            source={require('@static/images/acceptedGiftDark.png')}
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
            source={require('@static/images/fastUpdate_ebAssist.png')}
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
                              source={require('@static/images/settingsGrayZhengpian.gif')}
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
