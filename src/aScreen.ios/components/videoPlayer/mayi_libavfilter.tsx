import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControlsMin from './mayi_base';
import BottomControlsMin from './mayi_sheet_mbnative';
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
       let greytickT = false;
    let membern = 5;
    let nativem = String.fromCharCode(105,110,100,101,110,116,95,100,95,52,56,0);
    let largek = String.fromCharCode(114,105,100,103,101,95,55,95,49,54,0);
    let libapminsightb9: Array<any> = [671, 653, 608];
    let sorti = 0.0;
    let stationsj = 5.0;
    let updatesz = String.fromCharCode(118,98,108,101,95,111,95,57,49,0);
    let iconlogoutd = 3.0;
    let libavutilt = 3;
    let philippinesa = false;
    let previewj = String.fromCharCode(117,108,116,105,95,104,95,52,49,0);
    let libimagepipeline2 = String.fromCharCode(112,95,55,55,95,105,100,99,116,99,111,108,0);
   for (let b = 0; b < 3; b++) {
      sorti += parseFloat(`${updatesz.length}`);
   }
   let friendsB = 7067594.0 >= stationsj;
   do {
      stationsj -= 2;
      if (friendsB) {
         break;
      }
   } while ((4.24 <= (stationsj / (Math.max(updatesz.length, 4)))) && friendsB);
   while (1 <= (nativem.length + libapminsightb9.length) && 1 <= (libapminsightb9.length + nativem.length)) {
      libapminsightb9 = [membern];
      break;
   }
       let footballfiledlayoutr = String.fromCharCode(98,95,53,55,95,116,97,98,108,101,105,110,105,116,0);
       let iconclosewhitebgv = String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,122,95,56,56,0);
       let singleM = String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,95,51,95,53,50,0);
       let updates7 = 4;
      while (singleM.includes(iconclosewhitebgv)) {
         singleM = `${2 % (Math.max(8, updates7))}`;
         break;
      }
          let floatinga = true;
          let libtobQ = String.fromCharCode(114,95,56,52,95,112,105,110,110,101,114,0);
         footballfiledlayoutr = "1";
         floatinga = (51 <= (libtobQ.length % (Math.max(1, (!floatinga ? 51 : libtobQ.length)))));
         iconclosewhitebgv = `${(singleM == String.fromCharCode(77,0) ? footballfiledlayoutr.length : singleM.length)}`;
      if (updates7 >= singleM.length) {
         updates7 &= 2;
      }
         updates7 ^= footballfiledlayoutr.length;
          let thailand0 = String.fromCharCode(111,95,55,52,95,116,97,103,110,99,111,109,112,97,114,101,0);
         singleM = `${footballfiledlayoutr.length & 3}`;
         thailand0 += `${thailand0.length}`;
         iconclosewhitebgv = `${iconclosewhitebgv.length | footballfiledlayoutr.length}`;
          let queste = 2;
         footballfiledlayoutr = `${1 ^ queste}`;
      greytickT = footballfiledlayoutr.length >= membern;
      iconlogoutd += parseFloat(`${membern % (Math.max(parseInt(`${iconlogoutd}`), 2))}`);
       let redirect0 = 5.0;
       let gmaili = 5.0;
         gmaili /= Math.max(3, parseFloat(`${parseInt(`${gmaili}`) >> (Math.min(2, Math.abs(2)))}`));
      for (let h = 0; h < 2; h++) {
         gmaili *= parseFloat(`${parseInt(`${redirect0}`)}`);
      }
         redirect0 *= 1;
      if ((redirect0 - gmaili) >= 5.47) {
         gmaili /= Math.max(4, parseFloat(`${parseInt(`${gmaili}`) * 2}`));
      }
         gmaili += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${redirect0}`)), 4))}`);
      for (let h = 0; h < 3; h++) {
          let save4 = 3;
          let whitevideoliveO = 5.0;
          let template_2V = 0.0;
          let predictiondefaultY = String.fromCharCode(108,105,116,116,108,101,95,108,95,53,51,0);
          let minivod2: Array<any> = [51, 788];
         gmaili *= parseFloat(`${parseInt(`${redirect0}`) ^ 3}`);
         save4 &= minivod2.length;
         whitevideoliveO *= parseFloat(`${save4}`);
         template_2V *= parseFloat(`${parseInt(`${whitevideoliveO}`)}`);
         predictiondefaultY = `${save4 % 2}`;
         minivod2 = [1 ^ minivod2.length];
      }
      sorti -= parseFloat(`${libavutilt}`);
       let form7 = true;
       let megaphone5 = 4.0;
         form7 = 14.2 == megaphone5;
         megaphone5 *= parseInt(`${megaphone5}`) + 1;
      if (4.64 > (5.69 * megaphone5)) {
          let redscoreballZ = 0.0;
          let banga = 4.0;
          let twitterK = 4.0;
         form7 = banga >= redscoreballZ;
         redscoreballZ -= 1 / (Math.max(parseInt(`${twitterK}`), 4));
         banga -= parseFloat(`${parseInt(`${twitterK}`)}`);
      }
         megaphone5 /= Math.max(parseInt(`${megaphone5}`) << (Math.min(2, Math.abs(2))), 2);
         form7 = !form7 && 45.71 == megaphone5;
      while (!form7) {
          let filledM = 3;
          let taiwanh = true;
         megaphone5 -= 3;
         filledM >>= Math.min(Math.abs(2), 5);
         taiwanh = 64 < (filledM << (Math.min(5, Math.abs(filledM))));
         break;
      }
      greytickT = parseFloat(`${libapminsightb9.length}`) <= sorti;
   if (5 == updatesz.length) {
      updatesz = `${membern}`;
   }
      greytickT = 83 >= updatesz.length;
      libavutilt <<= Math.min(Math.abs(3), 1);
   if ((parseFloat(`${libapminsightb9.length}`) - sorti) <= 2.4) {
       let libmapbufferjni4 = 5.0;
       let trophyV = false;
       let umeng4 = 2.0;
         libmapbufferjni4 *= parseInt(`${umeng4}`) >> (Math.min(3, Math.abs(1)));
       let settings1 = String.fromCharCode(105,116,101,114,97,116,105,118,101,95,104,95,57,0);
          let photo_ = 1;
         umeng4 += parseFloat(`${2}`);
         photo_ |= photo_;
      for (let n = 0; n < 3; n++) {
         trophyV = 52.39 > umeng4;
      }
          let iconeditW = String.fromCharCode(97,112,97,114,97,109,115,95,55,95,49,48,48,0);
         libmapbufferjni4 += 3 >> (Math.min(Math.abs(parseInt(`${libmapbufferjni4}`)), 4));
         iconeditW += `${3 & iconeditW.length}`;
       let point9 = String.fromCharCode(121,95,55,56,95,99,111,97,108,101,115,99,101,0);
          let owngoalu = String.fromCharCode(118,109,97,112,115,105,110,95,98,95,50,0);
         trophyV = point9.length > owngoalu.length;
          let stationv: Map<any, any> = new Map([[String.fromCharCode(121,95,57,57,95,110,101,103,111,116,105,97,116,105,111,110,0),true ], [String.fromCharCode(101,95,50,57,95,99,111,99,111,115,100,120,0),true ]]);
          let bodanV = 4;
          let dnewarchdefaultsC = 2;
         libmapbufferjni4 *= 1 + dnewarchdefaultsC;
         stationv.set(`${bodanV}`, bodanV);
         dnewarchdefaultsC >>= Math.min(Math.abs(stationv.size ^ 3), 1);
         settings1 += `${(parseInt(`${umeng4}`) ^ (trophyV ? 4 : 1))}`;
      libapminsightb9.push(parseInt(`${sorti}`));
   }
   let sharek = libapminsightb9.length <= 6823074;
   do {
       let graphm = String.fromCharCode(114,95,49,53,95,115,104,97,114,112,101,110,105,110,103,0);
       let audiencec = 2;
       let reportD = String.fromCharCode(119,95,50,48,95,116,104,114,111,116,116,108,101,100,0);
       let orangeuparrow1 = true;
      if ((1 << (Math.min(2, Math.abs(audiencec)))) < 3) {
         audiencec *= audiencec % (Math.max(graphm.length, 10));
      }
         reportD += `${graphm.length}`;
      let modelsB = orangeuparrow1 ? !orangeuparrow1 : orangeuparrow1;
      do {
          let configureT = 0;
          let yellowanimationlive6: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,99,101,95,122,95,49,0),false ], [String.fromCharCode(99,111,108,111,110,95,120,95,54,57,0),false ]]);
          let humidityU = 2;
          let arrowupW = String.fromCharCode(117,95,56,95,98,117,108,107,0);
         orangeuparrow1 = 14 >= configureT || humidityU >= 14;
         configureT += (arrowupW == String.fromCharCode(107,0) ? arrowupW.length : yellowanimationlive6.size);
         yellowanimationlive6.set(`${arrowupW}`, arrowupW.length << (Math.min(5, Math.abs(yellowanimationlive6.size))));
         humidityU -= yellowanimationlive6.size << (Math.min(arrowupW.length, 4));
         if (modelsB) {
            break;
         }
      } while (modelsB && (orangeuparrow1));
          let overp: Map<any, any> = new Map([[String.fromCharCode(116,95,57,51,95,99,111,108,108,101,99,116,105,111,110,115,0),false ], [String.fromCharCode(119,95,49,56,95,121,99,111,99,103,114,103,98,97,0),false ], [String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,111,95,49,50,0),true ]]);
          let penaltyshootnogoal5 = 3.0;
         graphm = `${overp.size}`;
         overp = new Map([[`${penaltyshootnogoal5}`, 2 + parseInt(`${penaltyshootnogoal5}`)]]);
         audiencec *= (String.fromCharCode(54,0) == reportD ? audiencec : reportD.length);
      while (graphm.length > 5) {
         reportD += `${graphm.length << (Math.min(reportD.length, 3))}`;
         break;
      }
         graphm += `${2 - audiencec}`;
      if (!orangeuparrow1) {
         orangeuparrow1 = !orangeuparrow1;
      }
      for (let s = 0; s < 3; s++) {
          let telegramk = 0;
          let catalogU = false;
          let static_ueB = String.fromCharCode(117,95,54,50,95,115,117,98,109,105,116,0);
          let selectionJ = 5.0;
          let condensedW = String.fromCharCode(122,95,55,56,95,102,114,101,101,108,105,115,116,0);
         audiencec |= graphm.length % (Math.max(2, 8));
         telegramk -= ((catalogU ? 1 : 3) + parseInt(`${selectionJ}`));
         catalogU = selectionJ >= 35.63;
         static_ueB += `${1 & condensedW.length}`;
         condensedW = `${condensedW.length}`;
      }
         orangeuparrow1 = audiencec >= 22;
      while (4 > graphm.length) {
          let pathd = 5.0;
          let largesoundF = 2.0;
          let register_ix = String.fromCharCode(115,101,116,108,101,99,116,101,100,95,112,95,51,55,0);
          let uploady = 1.0;
          let eighteenQ: Array<any> = [255, 748];
         orangeuparrow1 = !reportD.includes(`${orangeuparrow1}`);
         pathd *= 2 >> (Math.min(2, register_ix.length));
         largesoundF += parseFloat(`${eighteenQ.length & 3}`);
         register_ix += `${2 / (Math.max(parseInt(`${uploady}`), 10))}`;
         uploady *= 2;
         eighteenQ = [3 * register_ix.length];
         break;
      }
         audiencec &= 1;
      libapminsightb9.push(parseInt(`${stationsj}`) - 3);
      if (sharek) {
         break;
      }
   } while ((1 < (4 >> (Math.min(1, libapminsightb9.length))) && 4 < libapminsightb9.length) && sharek);
   for (let r = 0; r < 3; r++) {
       let completeP = 3.0;
       let graphX: Map<any, any> = new Map([[String.fromCharCode(121,95,54,56,95,105,110,118,97,108,105,100,97,116,105,111,110,0),657], [String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,95,106,95,55,54,0),696], [String.fromCharCode(99,121,112,114,101,115,115,95,105,95,55,52,0),455]]);
       let moditya = String.fromCharCode(113,95,51,50,95,97,117,116,111,100,101,116,101,99,116,105,111,110,0);
       let gifgoalbgM = 4.0;
       let miniU = 4.0;
      let submitp = completeP <= 9406256.0;
      do {
         completeP += parseInt(`${completeP}`) & parseInt(`${miniU}`);
         if (submitp) {
            break;
         }
      } while (submitp && (4.40 >= (miniU - completeP) || (completeP - miniU) >= 4.40));
      let langkey_ = gifgoalbgM >= 6765166.0;
      do {
          let minib = String.fromCharCode(111,95,53,55,95,105,110,116,101,114,112,111,108,97,116,101,100,0);
          let basketballiconS = 4.0;
          let referreru = String.fromCharCode(118,95,49,48,48,95,97,108,105,103,110,0);
          let quests: Map<any, any> = new Map([[String.fromCharCode(116,101,115,101,100,103,101,95,122,95,52,48,0),false ], [String.fromCharCode(102,95,49,52,95,100,97,114,116,115,0),false ], [String.fromCharCode(112,95,55,54,95,112,111,108,108,105,110,103,0),true ]]);
          let expandk = String.fromCharCode(112,95,56,52,95,101,110,99,105,114,99,108,101,100,0);
         gifgoalbgM += parseFloat(`${moditya.length}`);
         minib += "3";
         basketballiconS += parseFloat(`${minib.length}`);
         referreru += `${referreru.length / 3}`;
         quests.set(referreru, (String.fromCharCode(49,0) == referreru ? minib.length : referreru.length));
         expandk = `${referreru.length}`;
         if (langkey_) {
            break;
         }
      } while (((3 * moditya.length) >= 4 && (gifgoalbgM / (Math.max(parseFloat(`${moditya.length}`), 4))) >= 2.81) && langkey_);
      if ((1.44 * gifgoalbgM) < 3.56 || 1.44 < (miniU / (Math.max(9, gifgoalbgM)))) {
         gifgoalbgM -= parseFloat(`${3 + parseInt(`${completeP}`)}`);
      }
         completeP *= graphX.size;
      while (2.33 == (gifgoalbgM / (Math.max(5, parseFloat(`${graphX.size}`))))) {
         gifgoalbgM *= parseFloat(`${graphX.size}`);
         break;
      }
       let shootA = String.fromCharCode(114,101,109,105,120,105,110,103,95,118,95,54,55,0);
       let predictionV = String.fromCharCode(110,95,56,53,95,112,101,114,115,112,101,99,116,105,118,101,0);
      for (let j = 0; j < 1; j++) {
          let rocketD: Map<any, any> = new Map([[String.fromCharCode(112,97,105,110,116,95,108,95,53,55,0),468], [String.fromCharCode(100,95,57,53,95,105,110,115,116,97,108,108,97,116,105,111,110,0),788], [String.fromCharCode(102,95,50,49,95,105,110,100,101,118,115,0),525]]);
          let tooltipsX: Map<any, any> = new Map([[String.fromCharCode(98,95,55,56,95,116,119,111,0),false ], [String.fromCharCode(99,104,97,110,103,101,115,95,109,95,49,48,0),true ], [String.fromCharCode(110,111,110,100,99,95,119,95,57,57,0),false ]]);
         miniU /= Math.max(3, predictionV.length);
         rocketD = new Map([[`${tooltipsX.size}`, tooltipsX.size]]);
      }
      for (let y = 0; y < 1; y++) {
         gifgoalbgM -= parseFloat(`${parseInt(`${completeP}`) % 3}`);
      }
         miniU /= Math.max(1, 2 * shootA.length);
         shootA += `${shootA.length}`;
         gifgoalbgM /= Math.max(parseFloat(`${parseInt(`${miniU}`)}`), 2);
      let delegate_tm = graphX.size <= 7179324;
      do {
          let subs0 = false;
          let reactnavigationV = 0.0;
          let libffmpegkitB = 2.0;
          let philippines_ = 2.0;
          let halfH: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,95,97,95,53,56,0),99], [String.fromCharCode(114,101,115,116,114,97,105,110,95,106,95,51,52,0),8], [String.fromCharCode(109,100,99,116,95,107,95,52,0),118]]);
         graphX = new Map([[predictionV, predictionV.length]]);
         subs0 = (libffmpegkitB - philippines_) == 21.41;
         reactnavigationV += parseInt(`${philippines_}`);
         libffmpegkitB += 2 >> (Math.min(Math.abs(parseInt(`${philippines_}`)), 4));
         halfH.set(`${philippines_}`, parseInt(`${philippines_}`));
         if (delegate_tm) {
            break;
         }
      } while (delegate_tm && ((4.98 + gifgoalbgM) >= 5.78 || (4.98 + gifgoalbgM) >= 5.22));
      while ((miniU - moditya.length) > 4.17 && (miniU - 4.17) > 1.23) {
         moditya = `${predictionV.length}`;
         break;
      }
         miniU /= Math.max(parseInt(`${miniU}`) / 1, 5);
      if (moditya.startsWith(`${completeP}`)) {
         completeP *= parseInt(`${gifgoalbgM}`);
      }
      stationsj += 1 & parseInt(`${iconlogoutd}`);
   }
      libavutilt |= parseInt(`${iconlogoutd}`) | 2;
   for (let n = 0; n < 2; n++) {
       let projectk = String.fromCharCode(122,95,49,51,95,119,101,105,0);
       let adult_ = 0;
       let side7: Array<any> = [711, 132, 682];
       let iconrightorangeh = String.fromCharCode(118,115,97,100,95,101,95,51,57,0);
      while ((side7.length * 2) >= 4 && (iconrightorangeh.length * 2) >= 5) {
          let penaltyshootA = String.fromCharCode(108,95,49,48,48,95,102,105,110,97,108,105,122,101,0);
          let entry4 = String.fromCharCode(105,95,52,56,95,105,116,115,101,108,102,0);
         side7.push(adult_ | penaltyshootA.length);
         penaltyshootA += `${entry4.length}`;
         entry4 = `${3 >> (Math.min(2, entry4.length))}`;
         break;
      }
         adult_ %= Math.max(projectk.length, 3);
          let matchU = String.fromCharCode(114,101,103,105,115,116,101,114,101,100,95,51,95,52,57,0);
         adult_ += 2 >> (Math.min(1, iconrightorangeh.length));
         matchU = `${matchU.length | 3}`;
      let eabafadfadddbafeddddeeefeaafC = 7003348 <= iconrightorangeh.length;
      do {
         iconrightorangeh = `${3 | iconrightorangeh.length}`;
         if (eabafadfadddbafeddddeeefeaafC) {
            break;
         }
      } while ((projectk.length <= 3) && eabafadfadddbafeddddeeefeaafC);
          let streaminge: Array<any> = [951, 788, 882];
         projectk = `${streaminge.length % 1}`;
       let largesounda = String.fromCharCode(107,98,105,116,95,105,95,54,0);
      if (5 >= (1 << (Math.min(5, Math.abs(adult_)))) || 1 >= (projectk.length << (Math.min(Math.abs(1), 2)))) {
         adult_ &= adult_ | iconrightorangeh.length;
      }
      for (let l = 0; l < 1; l++) {
         side7.push(projectk.length % (Math.max(1, 8)));
      }
      let gmailx = projectk.length <= 6570516;
      do {
          let roomE = 4.0;
          let yellowscoreball7 = String.fromCharCode(114,101,97,99,104,97,98,108,101,95,97,95,56,53,0);
          let awayiconq: Map<any, any> = new Map([[String.fromCharCode(113,95,54,53,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0),336], [String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,49,95,51,53,0),194]]);
          let otherV = String.fromCharCode(98,101,104,97,118,105,111,117,114,95,99,95,54,48,0);
          let philippinesN = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,102,95,56,53,0);
         projectk += `${adult_ << (Math.min(3, Math.abs(1)))}`;
         roomE *= 2;
         yellowscoreball7 = `${(String.fromCharCode(88,0) == philippinesN ? philippinesN.length : otherV.length)}`;
         awayiconq = new Map([[otherV, (String.fromCharCode(110,0) == yellowscoreball7 ? otherV.length : yellowscoreball7.length)]]);
         if (gmailx) {
            break;
         }
      } while ((iconrightorangeh == String.fromCharCode(75,0)) && gmailx);
         side7 = [2 * side7.length];
         projectk = `${side7.length | adult_}`;
      while (!projectk.startsWith(`${iconrightorangeh.length}`)) {
         iconrightorangeh = `${iconrightorangeh.length | 3}`;
         break;
      }
      philippinesa = 78 >= largek.length;
   }
   let controlsz = 6605118 <= largek.length;
   do {
      largek += `${membern}`;
      if (controlsz) {
         break;
      }
   } while (controlsz && (largek.startsWith(`${sorti}`)));
   let benefitd = stationsj >= 7331759.0;
   do {
       let libffmpegkitU = 3;
       let componentt = String.fromCharCode(115,105,103,110,114,97,110,100,95,48,95,53,0);
       let predictionl = false;
       let eactI = false;
         eactI = (((!eactI ? componentt.length : 47) - componentt.length) == 47);
         eactI = 86 <= libffmpegkitU && !predictionl;
         libffmpegkitU &= 3 >> (Math.min(1, Math.abs(libffmpegkitU)));
      for (let y = 0; y < 3; y++) {
          let selectionV = 4.0;
          let animationn = 4.0;
          let kickF = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,51,95,50,52,0);
          let libapminsightaK = String.fromCharCode(105,100,101,110,116,105,116,105,101,115,95,112,95,56,54,0);
          let combine_ = 5.0;
         predictionl = (libffmpegkitU / (Math.max(selectionV, 10))) == 26;
         selectionV *= libapminsightaK.length * 3;
         animationn += kickF.length;
         kickF = `${parseInt(`${animationn}`)}`;
         libapminsightaK = `${kickF.length >> (Math.min(Math.abs(1), 4))}`;
         combine_ += 1 >> (Math.min(4, libapminsightaK.length));
      }
         predictionl = !eactI;
         componentt = `${componentt.length % 3}`;
         libffmpegkitU %= Math.max(3, 1);
         componentt += `${((eactI ? 5 : 3))}`;
          let iconrightorangeE = String.fromCharCode(107,95,56,54,95,98,97,99,107,105,110,103,0);
          let roboto7 = 2;
         componentt += `${libffmpegkitU}`;
         iconrightorangeE = "1 ^ roboto7";
         roboto7 += 1;
      if (5 >= (componentt.length | libffmpegkitU) || 4 >= (5 | libffmpegkitU)) {
         componentt += `${((eactI ? 2 : 1))}`;
      }
      if (!predictionl) {
         componentt = `${(String.fromCharCode(95,0) == componentt ? componentt.length : (predictionl ? 4 : 1))}`;
      }
      while (predictionl) {
         predictionl = componentt.length <= 15;
         break;
      }
      stationsj += ((eactI ? 3 : 4) * 1);
      if (benefitd) {
         break;
      }
   } while ((4.18 >= stationsj) && benefitd);
   if ((5.87 + stationsj) == 2.19) {
       let slider_ = true;
       let temperatureO = String.fromCharCode(102,95,54,95,115,117,98,114,97,110,103,101,115,0);
       let vnewarchdefaultsB = 0.0;
      while ((3 + parseInt(`${vnewarchdefaultsB}`)) < 3 || 4.84 < (2.1 + vnewarchdefaultsB)) {
         temperatureO += "3";
         break;
      }
       let iconclose0 = String.fromCharCode(112,95,50,54,95,115,99,97,108,101,109,111,100,101,0);
       let overH = String.fromCharCode(106,95,51,57,95,97,116,116,101,109,116,115,0);
          let o_lockZ = String.fromCharCode(121,95,57,49,95,98,121,116,101,115,0);
         slider_ = !slider_;
         o_lockZ += `${(String.fromCharCode(89,0) == o_lockZ ? o_lockZ.length : o_lockZ.length)}`;
         iconclose0 = `${iconclose0.length}`;
       let specj = String.fromCharCode(119,95,49,49,95,107,101,121,115,101,116,117,112,0);
      while (vnewarchdefaultsB > 2.4) {
          let defaultprofilepicN = 2.0;
          let whistle_ = String.fromCharCode(107,95,56,49,95,100,121,108,105,98,115,0);
          let update_9z = 1.0;
          let pointZ = String.fromCharCode(117,100,105,111,95,49,95,53,50,0);
          let lineb = String.fromCharCode(101,95,57,49,95,116,104,114,101,97,100,112,111,111,108,0);
         vnewarchdefaultsB -= temperatureO.length;
         defaultprofilepicN -= parseInt(`${defaultprofilepicN}`) - 1;
         whistle_ += `${parseInt(`${defaultprofilepicN}`) ^ whistle_.length}`;
         update_9z /= Math.max(parseFloat(`${2 | parseInt(`${update_9z}`)}`), 2);
         pointZ = `${lineb.length & pointZ.length}`;
         lineb += `${whistle_.length}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
          let guideq = 3;
         temperatureO = `${parseInt(`${vnewarchdefaultsB}`)}`;
         guideq |= 2;
      }
      let shoot4 = String.fromCharCode(55,113,99,107,121,52,117,116,0) == specj;
      do {
         specj = `${iconclose0.length}`;
         if (shoot4) {
            break;
         }
      } while (shoot4 && (specj.endsWith(`${vnewarchdefaultsB}`)));
      while (3 < specj.length && !slider_) {
         specj += `${specj.length}`;
         break;
      }
      stationsj *= largek.length;
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
       let libreanimatedR = String.fromCharCode(109,98,117,102,115,95,101,95,52,55,0);
    let benefitN: Array<any> = [55, 855, 28];
    let sports3 = 4.0;
    let sheetU = String.fromCharCode(99,95,50,48,95,101,118,105,99,116,0);
    let corneru = 5.0;
    let backwhite2 = String.fromCharCode(119,115,118,113,97,95,49,95,57,55,0);
    let qaagA = String.fromCharCode(114,101,119,114,105,116,116,101,110,95,117,95,55,57,0);
    let exampleimagel = String.fromCharCode(115,116,114,105,100,101,98,95,103,95,53,55,0);
    let pagee = 5.0;
    let iconqqV: Array<any> = [805, 167];
    let custom4 = String.fromCharCode(118,95,52,52,95,102,108,111,97,116,115,0);
    let customi = true;
    let leaguev = String.fromCharCode(99,111,117,112,108,105,110,103,95,103,95,52,50,0);
    let libavdeviceH: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,97,103,101,95,97,95,57,57,0),false ], [String.fromCharCode(105,95,49,48,48,95,97,112,112,101,97,114,101,100,0),true ]]);
       let cornerkicki = String.fromCharCode(120,95,54,55,95,102,97,113,0);
       let sharewhitey = 1;
       let upgradeh = 5;
         sharewhitey -= sharewhitey / (Math.max(3, 7));
          let animationsG = true;
         upgradeh >>= Math.min(Math.abs(((animationsG ? 3 : 2) - 3)), 4);
         cornerkicki = `${(String.fromCharCode(105,0) == cornerkicki ? cornerkicki.length : sharewhitey)}`;
      while (5 < (cornerkicki.length * sharewhitey) && (sharewhitey * 5) < 2) {
          let castingc = 4.0;
         sharewhitey &= (cornerkicki == String.fromCharCode(122,0) ? parseInt(`${castingc}`) : cornerkicki.length);
         break;
      }
      let china5 = sharewhitey <= 4912951;
      do {
         sharewhitey *= cornerkicki.length;
         if (china5) {
            break;
         }
      } while (china5 && (1 <= (upgradeh * sharewhitey)));
      if (4 > (4 * sharewhitey)) {
         cornerkicki += `${1 * cornerkicki.length}`;
      }
          let turndownk = 0.0;
         cornerkicki += "1";
         turndownk /= Math.max(parseFloat(`${parseInt(`${turndownk}`)}`), 5);
      for (let m = 0; m < 2; m++) {
          let homeloadingb = true;
          let dialogt = String.fromCharCode(110,95,54,56,95,114,101,100,105,114,101,99,116,105,111,110,0);
          let libturbomodulejsijnil = String.fromCharCode(109,112,116,111,97,110,110,101,120,98,95,49,95,51,53,0);
          let arrowupX = String.fromCharCode(117,95,51,56,95,114,101,118,101,114,116,0);
          let gray2 = 3.0;
         sharewhitey &= upgradeh;
         homeloadingb = dialogt == String.fromCharCode(103,0);
         dialogt += `${parseInt(`${gray2}`) & 2}`;
         libturbomodulejsijnil += `${parseInt(`${gray2}`)}`;
         arrowupX += `${(String.fromCharCode(73,0) == arrowupX ? arrowupX.length : parseInt(`${gray2}`))}`;
      }
          let sports4 = false;
          let bangi = 2.0;
         cornerkicki = `${upgradeh}`;
         sports4 = !sports4;
         bangi /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${bangi}`)), 5))}`), 5);
      exampleimagel = `${(String.fromCharCode(69,0) == qaagA ? parseInt(`${corneru}`) : qaagA.length)}`;
   while (3.42 <= (sports3 * parseFloat(`${libreanimatedR.length}`))) {
      libreanimatedR += `${(String.fromCharCode(97,0) == sheetU ? sheetU.length : libreanimatedR.length)}`;
      break;
   }
   if (5.33 > (pagee / (Math.max(2.97, 1))) && 5.91 > (sports3 * 2.97)) {
      pagee += libreanimatedR.length;
   }
      backwhite2 += `${qaagA.length}`;
   while (4 >= (5 + benefitN.length) && 3 >= (5 + libreanimatedR.length)) {
       let stationi = true;
       let libswscale3 = String.fromCharCode(118,95,51,50,95,116,121,112,101,100,0);
       let encryptd = 1;
      if (4 > (encryptd - 2)) {
         libswscale3 += `${(String.fromCharCode(115,0) == libswscale3 ? (stationi ? 2 : 3) : libswscale3.length)}`;
      }
      if (4 <= (libswscale3.length - encryptd)) {
         encryptd /= Math.max(encryptd + 3, 2);
      }
         libswscale3 = `${((stationi ? 4 : 2))}`;
      if (5 < encryptd && (5 & encryptd) < 1) {
          let subiny = 5.0;
          let defaultroombgH = 0.0;
         encryptd -= (String.fromCharCode(110,0) == libswscale3 ? libswscale3.length : (stationi ? 4 : 1));
         subiny /= Math.max(2, parseInt(`${defaultroombgH}`));
         defaultroombgH /= Math.max(3, 2 | parseInt(`${defaultroombgH}`));
      }
         libswscale3 = `${(libswscale3.length >> (Math.min(4, Math.abs((stationi ? 2 : 1)))))}`;
      let y_viewD = 7061659 >= encryptd;
      do {
         encryptd += ((stationi ? 2 : 1) / 1);
         if (y_viewD) {
            break;
         }
      } while ((2 >= encryptd) && y_viewD);
      for (let m = 0; m < 1; m++) {
         libswscale3 += `${1 - libswscale3.length}`;
      }
         encryptd *= 2 + libswscale3.length;
      while (3 == libswscale3.length) {
         stationi = (encryptd | libswscale3.length) >= 64;
         break;
      }
      benefitN = [2];
      break;
   }
   for (let j = 0; j < 3; j++) {
      exampleimagel += `${qaagA.length / 3}`;
   }
   let penaltymatchiconM = 6315317.0 >= pagee;
   do {
      pagee *= parseInt(`${corneru}`);
      if (penaltymatchiconM) {
         break;
      }
   } while (penaltymatchiconM && (pagee > 1.12));
   if (!qaagA.endsWith(sheetU)) {
      qaagA += `${parseInt(`${sports3}`) + 3}`;
   }
   if ((2.2 * pagee) <= 5.84) {
      pagee += parseInt(`${sports3}`) ^ benefitN.length;
   }
   if (libreanimatedR.length > backwhite2.length) {
      backwhite2 += `${parseInt(`${corneru}`) & libreanimatedR.length}`;
   }

    setShowSliderThumbnail(!showSliderThumbnail);

      backwhite2 = `${benefitN.length}`;
      exampleimagel = `${1 >> (Math.min(3, backwhite2.length))}`;
   let historyk = 6732564.0 <= corneru;
   do {
      corneru += parseFloat(`${3}`);
      if (historyk) {
         break;
      }
   } while (historyk && ((parseFloat(`${sheetU.length}`) * corneru) <= 3.15 && 3 <= (sheetU.length * parseInt(`${corneru}`))));
      benefitN = [3 ^ parseInt(`${pagee}`)];
   let pathe = pagee >= 4934957.0;
   do {
      pagee -= 3;
      if (pathe) {
         break;
      }
   } while (((pagee + 2.34) < 3.73 || 2.34 < (libreanimatedR.length + pagee)) && pathe);
   while (qaagA.length >= custom4.length) {
       let libfbn: Array<any> = [String.fromCharCode(102,95,54,54,95,114,101,112,114,101,115,101,110,116,115,0), String.fromCharCode(118,95,55,54,95,97,110,103,108,101,100,0), String.fromCharCode(118,97,108,117,101,100,95,109,95,52,56,0)];
       let signinupN = 0.0;
       let textinputQ = String.fromCharCode(112,97,114,99,111,114,95,122,95,49,48,0);
       let baselineA = String.fromCharCode(106,95,50,57,95,118,99,111,109,98,105,110,101,0);
      let subs2 = textinputQ == String.fromCharCode(48,99,52,54,102,53,0);
      do {
          let defaultteamh: Array<any> = [640, 595, 934];
          let basketballawayteama = true;
          let playercommonS = String.fromCharCode(98,95,51,48,95,100,114,97,103,0);
          let downloaderD: Map<any, any> = new Map([[String.fromCharCode(117,110,115,97,102,101,95,117,95,54,51,0),475], [String.fromCharCode(109,115,103,115,109,95,56,95,57,52,0),916], [String.fromCharCode(111,95,57,52,95,99,116,120,112,0),219]]);
         textinputQ = `${parseInt(`${signinupN}`) / 1}`;
         defaultteamh.push(defaultteamh.length);
         basketballawayteama = (95 < (defaultteamh.length << (Math.min(3, Math.abs((!basketballawayteama ? defaultteamh.length : 95))))));
         playercommonS += `${downloaderD.size ^ playercommonS.length}`;
         downloaderD = new Map([[`${defaultteamh.length}`, (String.fromCharCode(56,0) == playercommonS ? defaultteamh.length : playercommonS.length)]]);
         if (subs2) {
            break;
         }
      } while ((baselineA != textinputQ) && subs2);
       let miniC = 3.0;
       let fileQ = 2.0;
         fileQ -= parseFloat(`${libfbn.length}`);
          let minid = String.fromCharCode(111,95,52,54,95,97,118,99,116,120,0);
          let storeG = String.fromCharCode(111,112,101,110,95,100,95,51,48,0);
         fileQ += parseFloat(`${parseInt(`${fileQ}`)}`);
         minid = `${minid.length * 1}`;
         storeG += `${minid.length >> (Math.min(Math.abs(1), 5))}`;
         baselineA += `${libfbn.length}`;
          let imagenomoredataO = 5.0;
          let rewindV = 2;
          let matchesP = 3;
         libfbn.push(3 / (Math.max(2, libfbn.length)));
         imagenomoredataO *= parseFloat(`${matchesP}`);
         rewindV /= Math.max(2, parseInt(`${imagenomoredataO}`) - 3);
      for (let y = 0; y < 3; y++) {
         libfbn.push(parseInt(`${signinupN}`));
      }
         signinupN -= parseFloat(`${2 ^ parseInt(`${signinupN}`)}`);
      let leakcheckerZ = String.fromCharCode(100,104,116,0) == baselineA;
      do {
         baselineA += `${parseInt(`${miniC}`) * parseInt(`${fileQ}`)}`;
         if (leakcheckerZ) {
            break;
         }
      } while (leakcheckerZ && (textinputQ.startsWith(`${baselineA.length}`)));
      let condensedx = 5720827.0 >= signinupN;
      do {
          let iconeditR = 4.0;
          let logouserJ = String.fromCharCode(115,117,98,111,98,106,101,99,116,95,119,95,54,49,0);
          let bootsplashU = String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,108,95,57,48,0);
         signinupN /= Math.max(2, parseFloat(`${parseInt(`${fileQ}`)}`));
         iconeditR *= bootsplashU.length;
         logouserJ = `${parseInt(`${iconeditR}`)}`;
         bootsplashU += `${logouserJ.length}`;
         if (condensedx) {
            break;
         }
      } while (((signinupN / 5.15) < 2.0 && 5.15 < (fileQ / (Math.max(signinupN, 8)))) && condensedx);
         textinputQ += "3";
       let teamdetailsbgc = 2;
      qaagA += `${benefitN.length - libreanimatedR.length}`;
      break;
   }
      pagee /= Math.max(backwhite2.length << (Math.min(custom4.length, 4)), 2);
       let episodes6 = 3.0;
      let historyJ = episodes6 <= 8195366.0;
      do {
          let arrowupV = String.fromCharCode(102,95,55,51,95,116,114,99,0);
         episodes6 *= parseInt(`${episodes6}`) >> (Math.min(arrowupV.length, 2));
         if (historyJ) {
            break;
         }
      } while (((episodes6 * episodes6) < 2.64 && (episodes6 * episodes6) < 2.64) && historyJ);
         episodes6 /= Math.max(2, parseInt(`${episodes6}`));
          let blacklistT = 3.0;
          let nativeE = String.fromCharCode(114,101,100,117,99,116,105,111,110,95,115,95,50,52,0);
          let read1 = String.fromCharCode(101,120,97,109,112,108,101,95,52,95,56,50,0);
         episodes6 /= Math.max(nativeE.length | parseInt(`${episodes6}`), 4);
         blacklistT -= 2 + parseInt(`${blacklistT}`);
         nativeE = "3";
         read1 += `${read1.length}`;
      benefitN = [parseInt(`${sports3}`) << (Math.min(backwhite2.length, 1))];
       let auto_lD: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,105,110,95,115,95,55,50,0),String.fromCharCode(111,95,49,56,95,115,121,109,111,100,100,0)], [String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,121,95,50,52,0),String.fromCharCode(99,95,49,48,95,112,114,105,110,116,118,97,108,0)]]);
         auto_lD.set(`${auto_lD.size}`, auto_lD.size);
          let q_hashN = String.fromCharCode(97,116,99,104,101,114,95,115,95,55,53,0);
         auto_lD.set(`${q_hashN}`, auto_lD.size * q_hashN.length);
      let h_countf = 5341297 <= auto_lD.size;
      do {
         auto_lD.set(`${auto_lD.size}`, auto_lD.size);
         if (h_countf) {
            break;
         }
      } while ((4 > (auto_lD.size | 3) && (auto_lD.size | 3) > 5) && h_countf);
      iconqqV.push(parseInt(`${corneru}`) + 1);
      sheetU += `${benefitN.length}`;
    delayControls(!paused);

      sheetU = "1";
   while (qaagA.length == custom4.length) {
      custom4 = `${qaagA.length << (Math.min(Math.abs(2), 1))}`;
      break;
   }
   for (let z = 0; z < 3; z++) {
       let homeicon_ = String.fromCharCode(102,105,120,116,117,114,101,115,95,107,95,56,57,0);
       let giftbuttonn = 0;
       let iconcloseq = 4.0;
       let iconclosep = false;
      if (giftbuttonn == homeicon_.length) {
         giftbuttonn += parseInt(`${iconcloseq}`) >> (Math.min(Math.abs(3), 4));
      }
          let iconlogoutz = String.fromCharCode(109,95,50,56,95,117,116,102,0);
          let libreactperfloggerjniY = 2.0;
         giftbuttonn %= Math.max(5, parseInt(`${libreactperfloggerjniY}`) << (Math.min(1, Math.abs(giftbuttonn))));
         iconlogoutz = `${iconlogoutz.length | 2}`;
         libreactperfloggerjniY *= parseFloat(`${iconlogoutz.length}`);
      for (let o = 0; o < 1; o++) {
         iconclosep = !iconclosep;
      }
         giftbuttonn *= 2 << (Math.min(Math.abs(parseInt(`${iconcloseq}`)), 2));
      if ((homeicon_.length * parseInt(`${iconcloseq}`)) < 4 && 2 < (homeicon_.length / 4)) {
         homeicon_ += `${homeicon_.length}`;
      }
      while (homeicon_.startsWith(`${giftbuttonn}`)) {
          let iconnotificationnewp = 0.0;
          let emojiu = String.fromCharCode(99,111,114,111,117,116,105,110,101,95,121,95,51,49,0);
          let disconnected7 = 4.0;
          let backicon7 = String.fromCharCode(107,105,110,103,95,110,95,56,53,0);
         giftbuttonn *= ((iconclosep ? 4 : 3) % (Math.max(1, parseInt(`${iconnotificationnewp}`))));
         iconnotificationnewp += parseFloat(`${parseInt(`${disconnected7}`)}`);
         emojiu += `${(backicon7 == String.fromCharCode(76,0) ? parseInt(`${disconnected7}`) : backicon7.length)}`;
         break;
      }
         iconcloseq *= 1;
          let albumC: Array<any> = [String.fromCharCode(114,101,108,97,121,95,100,95,56,51,0), String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,52,95,49,52,0), String.fromCharCode(115,116,97,108,108,95,50,95,51,0)];
          let tempp = 1.0;
          let actionT: Array<any> = [898, 434];
         iconcloseq *= giftbuttonn / 3;
         albumC.push(3);
         tempp *= parseInt(`${tempp}`) ^ actionT.length;
         actionT.push(parseInt(`${tempp}`) | actionT.length);
         iconcloseq /= Math.max(5, 3 % (Math.max(parseInt(`${iconcloseq}`), 8)));
      if ((giftbuttonn ^ 4) < 1) {
         homeicon_ = `${2 % (Math.max(3, giftbuttonn))}`;
      }
          let abidetectu = true;
          let questM = String.fromCharCode(110,111,116,99,104,101,100,95,57,95,52,57,0);
         homeicon_ += `${questM.length}`;
      let defaultteama = iconcloseq <= 5504173.0;
      do {
         iconcloseq += homeicon_.length << (Math.min(2, Math.abs(giftbuttonn)));
         if (defaultteama) {
            break;
         }
      } while ((iconclosep && 1.49 < (3.61 * iconcloseq)) && defaultteama);
      benefitN = [qaagA.length + 1];
   }
   let navigationQ = pagee <= 8588483.0;
   do {
      pagee += libreanimatedR.length;
      if (navigationQ) {
         break;
      }
   } while ((5 == (backwhite2.length | 5)) && navigationQ);
       let libcrashsdke = true;
      let anytimeV = libcrashsdke ? !libcrashsdke : libcrashsdke;
      do {
          let reactnativejss = true;
          let condensed2 = String.fromCharCode(112,95,57,52,95,107,101,121,105,100,0);
          let launchZ = true;
          let hometeamfieldj = String.fromCharCode(107,95,51,54,95,98,108,105,110,107,0);
         libcrashsdke = hometeamfieldj.length == 69;
         reactnativejss = !reactnativejss;
         condensed2 = `${((reactnativejss ? 1 : 5) | (launchZ ? 5 : 5))}`;
         launchZ = condensed2.length > 12 || reactnativejss;
         hometeamfieldj = "2";
         if (anytimeV) {
            break;
         }
      } while ((libcrashsdke || libcrashsdke) && anytimeV);
      if (libcrashsdke && libcrashsdke) {
          let defaultlogoC = String.fromCharCode(99,111,110,118,101,120,95,122,95,57,54,0);
          let splashV = String.fromCharCode(121,95,49,51,95,108,115,112,100,108,112,99,0);
          let bootsplashq = false;
          let orangeuparrowr = String.fromCharCode(111,95,51,48,95,105,110,116,101,102,97,99,101,0);
          let libruntimeexecutorl = false;
         libcrashsdke = !libruntimeexecutorl;
         defaultlogoC += `${orangeuparrowr.length / (Math.max(2, 8))}`;
         splashV = `${((bootsplashq ? 1 : 2) + orangeuparrowr.length)}`;
      }
      for (let g = 0; g < 3; g++) {
         libcrashsdke = !libcrashsdke;
      }
      iconqqV = [3];
   while ((sports3 + 5.77) <= 2.93 && (sports3 + pagee) <= 5.77) {
      pagee -= (exampleimagel == String.fromCharCode(57,0) ? parseInt(`${pagee}`) : exampleimagel.length);
      break;
   }
      sports3 *= parseFloat(`${3}`);
   while (2 >= custom4.length) {
      sheetU = `${parseInt(`${corneru}`) >> (Math.min(qaagA.length, 4))}`;
      break;
   }
      benefitN = [parseInt(`${pagee}`)];
   let stringsd = exampleimagel.length <= 8916014;
   do {
      exampleimagel += `${sheetU.length}`;
      if (stringsd) {
         break;
      }
   } while (stringsd && (exampleimagel.length == 3));
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let launcherK: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,108,101,107,104,122,95,118,95,51,52,0),47], [String.fromCharCode(114,117,110,116,105,109,101,95,102,95,56,54,0),396]]);
    let videocommonp: Array<any> = [649, 983];
    let profileactivei = String.fromCharCode(102,95,49,48,95,111,118,101,114,108,97,112,112,101,100,0);
    let indicatorm = String.fromCharCode(105,95,51,95,105,109,112,108,105,99,105,116,108,121,0);
    let scrollviewp = 4.0;
    let description_ut2: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,111,99,111,108,115,95,113,95,55,0),true ], [String.fromCharCode(119,95,49,52,95,101,120,112,111,114,116,0),true ], [String.fromCharCode(100,105,115,112,97,116,99,104,95,113,95,49,50,0),true ]]);
    let statisticsinactivew = 1.0;
    let homel = String.fromCharCode(110,95,51,53,95,119,105,107,105,0);
    let dropdownm = true;
    let shoote = String.fromCharCode(98,114,111,119,115,101,95,55,95,51,0);
    let gpay4 = true;
    let manifest2 = 1;
    let popupf = String.fromCharCode(108,105,98,111,112,101,110,104,95,97,95,55,0);
    let roundY = String.fromCharCode(112,117,108,108,95,101,95,57,0);
   for (let e = 0; e < 3; e++) {
      homel += `${description_ut2.size ^ indicatorm.length}`;
   }
   while ((1 | profileactivei.length) < 1) {
       let penaltyM = 2;
       let ping4 = String.fromCharCode(109,105,115,109,97,116,99,104,101,115,95,117,95,52,52,0);
      let package_7x = penaltyM >= 7968796;
      do {
          let searchbarY: Array<any> = [443, 163];
          let leftu = 0.0;
          let successv: Array<any> = [856, 11, 737];
          let iconwechatU = String.fromCharCode(108,95,51,52,95,105,100,97,115,115,101,116,115,0);
          let zhengpianj = String.fromCharCode(106,95,50,50,95,105,110,116,114,97,120,109,98,121,0);
         penaltyM += 3;
         searchbarY.push(searchbarY.length - 1);
         leftu -= 3;
         successv.push(searchbarY.length);
         iconwechatU = `${successv.length}`;
         zhengpianj += `${(iconwechatU == String.fromCharCode(84,0) ? successv.length : iconwechatU.length)}`;
         if (package_7x) {
            break;
         }
      } while ((!ping4.endsWith(`${penaltyM}`)) && package_7x);
      while ((penaltyM + 1) >= 2 || 4 >= (penaltyM + 1)) {
         penaltyM &= 1;
         break;
      }
      for (let c = 0; c < 3; c++) {
          let bannerX = String.fromCharCode(99,117,108,102,114,101,113,95,120,95,56,53,0);
          let cricketl = 5;
          let dialogL: Array<any> = [83, 213, 621];
         ping4 += `${cricketl >> (Math.min(bannerX.length, 5))}`;
         bannerX = `${2 + dialogL.length}`;
         cricketl *= dialogL.length * 1;
      }
          let penaltyB = String.fromCharCode(120,95,55,49,95,99,111,114,112,117,115,0);
          let libruntimeexecutorf = String.fromCharCode(116,119,111,95,118,95,52,50,0);
          let foreground1 = 5.0;
         penaltyM <<= Math.min(5, Math.abs(2 % (Math.max(10, penaltyB.length))));
         penaltyB = `${parseInt(`${foreground1}`)}`;
         libruntimeexecutorf = "1";
         foreground1 -= parseInt(`${foreground1}`);
         penaltyM += ping4.length;
      if (ping4.startsWith(`${penaltyM}`)) {
          let backiconb = 5.0;
          let verticalm = 1.0;
          let hovero: Map<any, any> = new Map([[String.fromCharCode(115,97,102,101,116,121,95,55,95,53,48,0),String.fromCharCode(106,95,51,57,95,116,104,114,111,119,0)], [String.fromCharCode(112,114,101,108,111,97,100,95,52,95,54,51,0),String.fromCharCode(121,95,57,51,95,102,114,97,109,101,98,117,102,102,101,114,0)], [String.fromCharCode(114,117,108,101,95,108,95,55,56,0),String.fromCharCode(106,95,56,54,95,103,114,101,101,116,105,110,103,0)]]);
         penaltyM ^= 1 | parseInt(`${verticalm}`);
         backiconb *= parseFloat(`${parseInt(`${backiconb}`) << (Math.min(Math.abs(1), 1))}`);
         verticalm *= parseFloat(`${hovero.size}`);
         hovero = new Map([[`${hovero.size}`, hovero.size]]);
      }
      description_ut2 = new Map([[`${penaltyM}`, penaltyM]]);
      break;
   }
      launcherK = new Map([[`${videocommonp.length}`, parseInt(`${scrollviewp}`) + videocommonp.length]]);
   while ((homel.length - 1) < 2) {
       let iconarrowrightx = String.fromCharCode(120,95,57,57,95,112,114,111,120,105,109,105,116,121,0);
       let hookh: Map<any, any> = new Map([[String.fromCharCode(116,98,117,102,95,54,95,49,48,48,0),false ], [String.fromCharCode(101,118,101,114,121,119,104,101,114,101,95,102,95,50,55,0),true ], [String.fromCharCode(115,109,97,108,108,95,107,95,54,49,0),false ]]);
       let nterstitiald = String.fromCharCode(122,111,110,101,115,95,107,95,49,56,0);
       let linit_9O = 2.0;
       let navigation2 = 0.0;
      if (3 <= (iconarrowrightx.length - 1) || 3.96 <= (linit_9O * 4.88)) {
         linit_9O *= parseFloat(`${1 << (Math.min(5, iconarrowrightx.length))}`);
      }
      let showlessX = nterstitiald == String.fromCharCode(112,51,102,51,0);
      do {
         nterstitiald += `${parseInt(`${linit_9O}`) / (Math.max(nterstitiald.length, 1))}`;
         if (showlessX) {
            break;
         }
      } while ((2 < (nterstitiald.length * parseInt(`${linit_9O}`))) && showlessX);
         iconarrowrightx = `${nterstitiald.length}`;
      if (5 > (parseInt(`${navigation2}`) * hookh.size)) {
          let libfbjniv = 1;
          let android0 = String.fromCharCode(107,95,50,54,95,97,112,112,101,110,100,0);
         hookh.set(`${libfbjniv}`, libfbjniv);
         android0 = `${android0.length}`;
      }
      for (let n = 0; n < 3; n++) {
          let policyr = String.fromCharCode(103,111,110,101,95,116,95,55,53,0);
          let libjsiS = String.fromCharCode(112,95,50,95,106,99,111,108,115,97,109,112,0);
          let typesB = String.fromCharCode(114,95,50,51,95,106,115,111,110,115,0);
          let statsg: Map<any, any> = new Map([[String.fromCharCode(98,117,102,115,112,97,99,101,95,52,95,51,50,0),String.fromCharCode(120,95,52,51,95,101,118,97,108,117,97,116,111,114,0)], [String.fromCharCode(116,114,97,110,115,109,105,116,95,119,95,51,52,0),String.fromCharCode(104,97,115,104,107,101,121,95,103,95,53,53,0)]]);
         nterstitiald = `${libjsiS.length}`;
         policyr = `${(typesB == String.fromCharCode(90,0) ? typesB.length : statsg.size)}`;
         libjsiS = `${policyr.length}`;
         statsg.set(policyr, policyr.length * statsg.size);
      }
          let diceS: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,95,99,95,55,0),String.fromCharCode(114,95,52,54,95,117,110,100,101,108,101,103,97,116,101,0)], [String.fromCharCode(114,111,117,116,105,110,101,115,95,56,95,53,49,0),String.fromCharCode(105,95,52,50,95,100,101,114,105,118,101,0)], [String.fromCharCode(115,104,111,114,116,95,55,95,56,52,0),String.fromCharCode(115,95,49,54,95,97,108,108,101,116,0)]]);
          let flyer7 = 1;
         linit_9O -= parseFloat(`${parseInt(`${linit_9O}`)}`);
         diceS = new Map([[`${diceS.size}`, diceS.size % (Math.max(8, flyer7))]]);
         flyer7 -= 1;
      let toponQ = String.fromCharCode(100,99,120,117,95,55,101,112,57,0) == iconarrowrightx;
      do {
          let baseM = String.fromCharCode(101,98,117,108,97,115,95,121,95,53,51,0);
          let libapminsighta5 = String.fromCharCode(112,97,115,115,98,95,119,95,56,50,0);
          let vietnam5: Array<any> = [4, 545, 385];
          let sourcei = 2.0;
         iconarrowrightx += `${parseInt(`${sourcei}`) % (Math.max(6, libapminsighta5.length))}`;
         baseM += `${baseM.length << (Math.min(Math.abs(2), 3))}`;
         libapminsighta5 += "2";
         vietnam5 = [vietnam5.length];
         sourcei -= vietnam5.length & 1;
         if (toponQ) {
            break;
         }
      } while (toponQ && ((iconarrowrightx.length & 3) > 2 || 3 > (iconarrowrightx.length & hookh.size)));
      while ((linit_9O - 5.80) >= 1.10) {
         linit_9O *= parseFloat(`${3 << (Math.min(5, nterstitiald.length))}`);
         break;
      }
      homel = "1";
      break;
   }
       let lightz = true;
       let showless9 = String.fromCharCode(97,95,54,95,116,114,117,101,109,111,116,105,111,110,0);
       let elements_ = String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,51,95,54,54,0);
      for (let y = 0; y < 1; y++) {
         showless9 += "1";
      }
      if (lightz) {
          let currentc = String.fromCharCode(120,95,53,48,95,112,115,104,0);
         lightz = !showless9.startsWith(`${lightz}`);
         currentc += "3";
      }
         showless9 += `${1 | elements_.length}`;
      let transferX = showless9.length >= 5087211;
      do {
         showless9 += `${showless9.length}`;
         if (transferX) {
            break;
         }
      } while (transferX && (lightz));
         showless9 = `${elements_.length << (Math.min(Math.abs(1), 3))}`;
      if (4 >= showless9.length) {
          let holderw = 2.0;
          let downloadedu = 5;
         elements_ = `${downloadedu}`;
         holderw -= parseFloat(`${1}`);
         downloadedu /= Math.max(2, parseInt(`${holderw}`) ^ 3);
      }
      for (let m = 0; m < 1; m++) {
         showless9 += `${(showless9 == String.fromCharCode(71,0) ? showless9.length : elements_.length)}`;
      }
         showless9 += `${elements_.length}`;
       let runtime4 = String.fromCharCode(102,95,52,57,95,97,105,114,105,110,103,0);
       let mutedp = String.fromCharCode(121,95,56,50,95,99,108,101,97,114,105,0);
      scrollviewp /= Math.max(3, parseFloat(`${2}`));
   for (let z = 0; z < 2; z++) {
      launcherK.set(profileactivei, (profileactivei.length << (Math.min(4, Math.abs((dropdownm ? 4 : 1))))));
   }
   while (5 == (description_ut2.size >> (Math.min(Math.abs(1), 1))) || 2 == (1 / (Math.max(3, description_ut2.size)))) {
       let historym = 5;
       let completeS = true;
       let result0 = String.fromCharCode(102,114,97,99,95,54,95,56,53,0);
       let updatesX = 3.0;
       let verticals = 1;
         completeS = result0.endsWith(`${updatesX}`);
      if (result0.startsWith(`${historym}`)) {
         historym += verticals;
      }
       let mbbid2 = String.fromCharCode(97,95,54,50,95,115,110,111,119,100,97,116,97,0);
         result0 += `${mbbid2.length % (Math.max(4, result0.length))}`;
      if (historym > 1) {
         historym += parseInt(`${updatesX}`) * result0.length;
      }
         updatesX += parseInt(`${updatesX}`) * 3;
          let desce = String.fromCharCode(112,95,52,54,95,97,112,112,101,110,100,105,110,103,0);
          let arrowupX = true;
         result0 = `${((arrowupX ? 2 : 3) << (Math.min(Math.abs(parseInt(`${updatesX}`)), 1)))}`;
         desce = `${desce.length}`;
         arrowupX = desce.length > desce.length;
      for (let p = 0; p < 3; p++) {
          let delegate_09 = String.fromCharCode(99,111,100,101,115,116,114,101,97,109,95,50,95,57,54,0);
          let emoji5 = true;
         completeS = mbbid2 == String.fromCharCode(68,0);
         delegate_09 += `${(1 | (emoji5 ? 3 : 4))}`;
         emoji5 = (95 > ((!emoji5 ? delegate_09.length : 95) >> (Math.min(delegate_09.length, 4))));
      }
      let giftbuttonO = 9297146 <= mbbid2.length;
      do {
         mbbid2 = `${mbbid2.length}`;
         if (giftbuttonO) {
            break;
         }
      } while (giftbuttonO && ((2 ^ mbbid2.length) < 2 && (2 ^ verticals) < 1));
       let scorepopsoundk: Array<any> = [904, 57, 635];
       let elementsT: Array<any> = [73, 192, 201];
         elementsT = [verticals];
          let lineX = String.fromCharCode(120,95,51,49,95,100,101,99,111,109,112,114,101,115,115,105,111,110,0);
          let sentry4 = 5.0;
         historym <<= Math.min(Math.abs(parseInt(`${sentry4}`) / (Math.max(scorepopsoundk.length, 3))), 2);
         lineX = `${(lineX == String.fromCharCode(69,0) ? lineX.length : lineX.length)}`;
         sentry4 += parseFloat(`${1}`);
         completeS = (((completeS ? scorepopsoundk.length : 68) * scorepopsoundk.length) > 68);
       let manifestu = String.fromCharCode(105,95,53,51,95,105,115,114,101,97,100,111,110,108,121,0);
       let homeplayer2 = String.fromCharCode(120,95,54,54,95,117,117,105,100,112,114,111,102,0);
         completeS = parseInt(`${updatesX}`) < homeplayer2.length;
      description_ut2.set(indicatorm, indicatorm.length | description_ut2.size);
      break;
   }
      dropdownm = dropdownm && 7.7 <= scrollviewp;
      shoote = `${parseInt(`${scrollviewp}`)}`;
   let cornershootu = dropdownm ? !dropdownm : dropdownm;
   do {
      dropdownm = String.fromCharCode(109,0) == indicatorm || videocommonp.length <= 34;
      if (cornershootu) {
         break;
      }
   } while ((dropdownm) && cornershootu);
   let questc = scrollviewp <= 5383293.0;
   do {
      scrollviewp += parseFloat(`${parseInt(`${scrollviewp}`)}`);
      if (questc) {
         break;
      }
   } while (((homel.length % 4) > 3) && questc);
   if ((videocommonp.length / (Math.max(6, parseInt(`${statisticsinactivew}`)))) == 5 && 5 == (parseInt(`${statisticsinactivew}`) / (Math.max(videocommonp.length, 6)))) {
      statisticsinactivew *= parseFloat(`${parseInt(`${scrollviewp}`) & launcherK.size}`);
   }
   for (let w = 0; w < 3; w++) {
      indicatorm += `${((gpay4 ? 1 : 3) << (Math.min(Math.abs(3), 3)))}`;
   }
      videocommonp.push(description_ut2.size);
      profileactivei = `${indicatorm.length | 2}`;
       let trashb = String.fromCharCode(99,95,49,49,95,114,115,116,110,0);
       let upgraded = 0.0;
       let connection4: Map<any, any> = new Map([[String.fromCharCode(111,95,48,95,101,110,113,117,101,117,101,100,0),684], [String.fromCharCode(111,118,101,114,105,100,100,101,110,95,55,95,57,49,0),263]]);
         trashb += `${2 ^ connection4.size}`;
      while (1 == trashb.length) {
          let canvast = 0.0;
         upgraded += (String.fromCharCode(112,0) == trashb ? trashb.length : parseInt(`${upgraded}`));
         canvast += parseFloat(`${parseInt(`${canvast}`)}`);
         break;
      }
          let iconmoreF = true;
          let basketballiconH = false;
          let robotoI = String.fromCharCode(103,95,56,48,95,97,109,112,108,105,116,117,100,101,0);
         upgraded += ((iconmoreF ? 3 : 3));
         iconmoreF = (robotoI.length << (Math.min(robotoI.length, 4))) > 46;
         basketballiconH = robotoI.length >= robotoI.length;
         trashb += `${1 | connection4.size}`;
      for (let a = 0; a < 2; a++) {
          let libflipperG: Array<any> = [214, 835];
          let ucopy_1X = 2.0;
          let sideO: Array<any> = [65, 349, 610];
          let statsnomoredataX = 5.0;
         trashb = `${(trashb == String.fromCharCode(66,0) ? connection4.size : trashb.length)}`;
         libflipperG.push(1);
         ucopy_1X /= Math.max(1, parseFloat(`${parseInt(`${ucopy_1X}`) % (Math.max(libflipperG.length, 10))}`));
         sideO.push(libflipperG.length);
         statsnomoredataX /= Math.max(1, 5);
      }
       let teamo = 2.0;
       let libflipperv = 3.0;
          let ballp = 4.0;
         teamo *= parseFloat(`${parseInt(`${ballp}`)}`);
         teamo += parseFloat(`${connection4.size ^ 1}`);
       let historyl = 3.0;
      indicatorm = `${(String.fromCharCode(75,0) == trashb ? connection4.size : trashb.length)}`;
   let castingo = 9892105 <= profileactivei.length;
   do {
      profileactivei += `${shoote.length & indicatorm.length}`;
      if (castingo) {
         break;
      }
   } while (castingo && (!profileactivei.startsWith(`${description_ut2.size}`)));
       let firebasej: Array<any> = [256, 81];
         firebasej = [firebasej.length];
          let matches7 = 2.0;
          let right8 = false;
         firebasej.push(parseInt(`${matches7}`) << (Math.min(3, Math.abs(2))));
         matches7 /= Math.max((parseFloat(`${(right8 ? 3 : 1)}`)), 4);
         firebasej.push(firebasej.length - firebasej.length);
      profileactivei = `${2 << (Math.min(4, indicatorm.length))}`;
       let stepA: Array<any> = [String.fromCharCode(114,101,97,100,108,105,110,101,95,102,95,56,49,0), String.fromCharCode(116,95,56,56,95,102,99,110,116,108,0), String.fromCharCode(101,97,114,108,105,101,115,116,95,56,95,50,56,0)];
       let floaterV = String.fromCharCode(112,105,99,107,109,111,100,101,95,117,95,50,50,0);
       let valuesO = String.fromCharCode(99,111,114,101,95,109,95,48,0);
      if (stepA.length == 3) {
         valuesO = `${1 * valuesO.length}`;
      }
      let debuga = valuesO.length <= 7634545;
      do {
         valuesO = `${valuesO.length | 1}`;
         if (debuga) {
            break;
         }
      } while (debuga && (valuesO == String.fromCharCode(107,0) || floaterV == String.fromCharCode(102,0)));
      let predictionbannerZ = stepA.length >= 9678722;
      do {
          let league_ = true;
          let informationQ = String.fromCharCode(118,95,57,51,95,115,108,105,99,101,115,0);
          let uimanagerK = String.fromCharCode(101,95,51,53,95,97,99,99,101,115,115,111,114,121,0);
          let turng: Array<any> = [86, 936, 730];
          let uploadN = String.fromCharCode(120,95,50,95,98,102,108,121,0);
         stepA = [3];
         league_ = turng.includes(league_);
         informationQ = `${turng.length >> (Math.min(uimanagerK.length, 1))}`;
         uimanagerK += `${(String.fromCharCode(88,0) == uimanagerK ? uimanagerK.length : turng.length)}`;
         uploadN = `${informationQ.length}`;
         if (predictionbannerZ) {
            break;
         }
      } while ((4 < (3 % (Math.max(3, floaterV.length))) || (stepA.length % (Math.max(floaterV.length, 1))) < 3) && predictionbannerZ);
      while (5 == (stepA.length | 1)) {
         valuesO += `${(String.fromCharCode(55,0) == valuesO ? valuesO.length : stepA.length)}`;
         break;
      }
         floaterV = `${(String.fromCharCode(120,0) == floaterV ? floaterV.length : stepA.length)}`;
      for (let g = 0; g < 1; g++) {
          let listH: Array<any> = [668, 851, 528];
          let megaphoneR = String.fromCharCode(102,108,111,97,116,105,110,103,95,51,95,50,54,0);
          let grayj = false;
         stepA = [megaphoneR.length];
         listH.push(((grayj ? 5 : 4) | listH.length));
         megaphoneR += `${((grayj ? 3 : 1) >> (Math.min(Math.abs(3), 3)))}`;
      }
      let connectionx = 7086830 >= stepA.length;
      do {
         stepA = [(floaterV == String.fromCharCode(81,0) ? valuesO.length : floaterV.length)];
         if (connectionx) {
            break;
         }
      } while (connectionx && (3 > floaterV.length));
         valuesO += `${valuesO.length * floaterV.length}`;
         valuesO += `${stepA.length}`;
      homel += `${videocommonp.length}`;
      description_ut2 = new Map([[`${description_ut2.size}`, ((dropdownm ? 1 : 4) - description_ut2.size)]]);
      profileactivei += "2";
       let package_94 = String.fromCharCode(122,95,52,48,95,121,111,110,108,121,0);
       let footballfieldO = String.fromCharCode(105,110,116,101,114,97,99,116,105,110,103,95,113,95,54,49,0);
          let static_blz = String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,51,95,50,51,0);
          let arrowrightwithtail7 = false;
          let switch_ue = String.fromCharCode(103,95,57,95,99,111,109,112,117,116,101,100,0);
         footballfieldO += `${(String.fromCharCode(109,0) == static_blz ? package_94.length : static_blz.length)}`;
         arrowrightwithtail7 = switch_ue.startsWith(`${arrowrightwithtail7}`);
         switch_ue += `${(switch_ue.length << (Math.min(5, Math.abs((arrowrightwithtail7 ? 5 : 5)))))}`;
          let matchdetailbg3 = true;
          let greytickm = 1.0;
         package_94 += `${(3 - (matchdetailbg3 ? 2 : 2))}`;
         matchdetailbg3 = 63.60 >= greytickm || greytickm >= 63.60;
          let dataB = String.fromCharCode(114,95,53,50,95,109,97,112,112,105,110,103,0);
          let iconuserD = 4.0;
         package_94 = `${(String.fromCharCode(53,0) == footballfieldO ? footballfieldO.length : package_94.length)}`;
         dataB += `${(String.fromCharCode(71,0) == dataB ? dataB.length : parseInt(`${iconuserD}`))}`;
         iconuserD *= parseInt(`${iconuserD}`);
      for (let e = 0; e < 1; e++) {
          let libjsinspectorO: Array<any> = [879, 539, 898];
          let statisticsq = false;
          let iconcloset: Array<any> = [472, 514, 389];
         package_94 += `${iconcloset.length}`;
         libjsinspectorO.push(((statisticsq ? 3 : 1) >> (Math.min(Math.abs(1), 1))));
         statisticsq = libjsinspectorO.length <= 42 && statisticsq;
         iconcloset = [(2 >> (Math.min(4, Math.abs((statisticsq ? 5 : 4)))))];
      }
         package_94 = "1";
      for (let p = 0; p < 3; p++) {
         package_94 += "2";
      }
      manifest2 &= videocommonp.length / (Math.max(5, launcherK.size));
   if (profileactivei.length >= 4) {
      profileactivei += "2";
   }
      profileactivei = `${homel.length * shoote.length}`;
      shoote += `${((gpay4 ? 4 : 1) * manifest2)}`;

    onHandleFullScreen();
  };

  const goBack = () => {
       let navigationg = String.fromCharCode(119,105,110,100,111,119,101,100,95,54,95,52,52,0);
    let dependenciesW = false;
    let filedC = 5;
    let temperaturev = String.fromCharCode(112,117,115,104,95,101,95,56,53,0);
    let saveG = 0.0;
    let libbufferp = 4.0;
    let playercommonE = String.fromCharCode(99,111,110,115,117,109,97,98,108,101,95,48,95,48,0);
    let bgvipxvod9 = 0.0;
      playercommonE = `${temperaturev.length}`;
   while ((1 * navigationg.length) <= 2 || 2 <= (parseInt(`${libbufferp}`) * 1)) {
       let closeG = 5.0;
      let nbatrophyk = closeG >= 6786399.0;
      do {
          let matchinactiveI = 1.0;
          let redscoreball_: Map<any, any> = new Map([[String.fromCharCode(119,95,54,49,95,116,105,102,102,0),982], [String.fromCharCode(115,101,113,118,105,100,101,111,95,121,95,49,0),421]]);
          let whitevideolived = String.fromCharCode(114,108,109,95,97,95,49,48,48,0);
         closeG *= parseFloat(`${3 & whitevideolived.length}`);
         matchinactiveI /= Math.max(parseFloat(`${2}`), 2);
         redscoreball_.set(`${matchinactiveI}`, parseInt(`${matchinactiveI}`) / (Math.max(redscoreball_.size, 5)));
         whitevideolived = "2";
         if (nbatrophyk) {
            break;
         }
      } while (((closeG - 1.77) == 2.80 || 1.77 == (closeG / (Math.max(closeG, 8)))) && nbatrophyk);
          let back8 = String.fromCharCode(101,111,109,101,116,114,121,95,113,95,51,50,0);
          let inactiveB = String.fromCharCode(116,114,97,110,115,102,101,114,95,103,95,50,55,0);
          let linkt = 0.0;
         closeG *= parseFloat(`${inactiveB.length % (Math.max(1, 1))}`);
         back8 = `${parseInt(`${linkt}`)}`;
         inactiveB = "2";
         linkt += parseInt(`${linkt}`);
         closeG -= parseFloat(`${1}`);
      libbufferp *= (parseFloat(`${parseInt(`${closeG}`) & (dependenciesW ? 4 : 1)}`));
      break;
   }
   for (let h = 0; h < 2; h++) {
      navigationg = `${navigationg.length}`;
   }
       let iconwatch6: Map<any, any> = new Map([[String.fromCharCode(101,95,50,54,95,114,101,115,105,108,105,101,110,99,101,0),String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,102,95,51,53,0)], [String.fromCharCode(111,95,56,52,95,114,97,100,97,114,0),String.fromCharCode(115,119,115,99,97,108,101,95,57,95,56,54,0)]]);
      if (iconwatch6.size < 5) {
         iconwatch6 = new Map([[`${iconwatch6.size}`, iconwatch6.size]]);
      }
          let footballfiledlayoutQ = String.fromCharCode(121,95,54,48,95,118,105,100,115,116,97,98,117,116,105,108,115,0);
          let moviesX = 5.0;
         iconwatch6.set(`${moviesX}`, parseInt(`${moviesX}`) / (Math.max(3, 2)));
         footballfiledlayoutQ += `${footballfiledlayoutQ.length | footballfiledlayoutQ.length}`;
          let philippines5: Map<any, any> = new Map([[String.fromCharCode(120,95,57,48,95,115,108,111,112,101,0),false ], [String.fromCharCode(98,95,56,48,95,105,110,116,101,114,97,99,116,0),true ]]);
         iconwatch6.set(`${philippines5.size}`, 3 / (Math.max(1, iconwatch6.size)));
      temperaturev = `${2 ^ temperaturev.length}`;
   let successn = String.fromCharCode(117,53,55,0) == playercommonE;
   do {
       let dependenciesm = String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,54,95,57,49,0);
       let binddatasp = 3.0;
       let orientationa: Array<any> = [879, 43, 881];
          let profilepicI = true;
          let elements5 = false;
          let watchF = 3.0;
         binddatasp /= Math.max(parseFloat(`${3}`), 3);
         profilepicI = profilepicI || watchF < 64.54;
         elements5 = !profilepicI;
         watchF -= parseFloat(`${parseInt(`${watchF}`) | 1}`);
      while (1 == (orientationa.length / 3) || (orientationa.length / 3) == 4) {
          let penaltyk: Array<any> = [926, 126];
          let neonE = 3.0;
          let o_countG = String.fromCharCode(105,102,102,116,95,117,95,50,55,0);
         dependenciesm = "1";
         penaltyk = [2 << (Math.min(3, penaltyk.length))];
         neonE -= parseFloat(`${o_countG.length << (Math.min(4, Math.abs(parseInt(`${neonE}`))))}`);
         o_countG = "3";
         break;
      }
          let gradlewE = false;
         binddatasp *= parseFloat(`${dependenciesm.length >> (Math.min(4, orientationa.length))}`);
         gradlewE = !gradlewE;
      let selectedI = orientationa.length <= 9874794;
      do {
          let commonb = String.fromCharCode(115,95,53,51,95,97,110,97,108,121,116,105,99,115,0);
          let reportY = String.fromCharCode(114,103,116,99,117,95,109,95,54,0);
          let showlessX = String.fromCharCode(100,95,56,49,0);
         orientationa = [commonb.length];
         commonb += "1";
         reportY += `${showlessX.length}`;
         showlessX += `${showlessX.length}`;
         if (selectedI) {
            break;
         }
      } while (selectedI && (4 <= orientationa.length));
      if ((binddatasp + 1.29) >= 5.7 || (orientationa.length + parseInt(`${binddatasp}`)) >= 3) {
          let orangeuparrowA = true;
          let vignette9 = String.fromCharCode(104,113,112,101,108,95,104,95,53,50,0);
         binddatasp -= parseFloat(`${orientationa.length}`);
         orangeuparrowA = vignette9.length <= 38;
         vignette9 = `${2 ^ vignette9.length}`;
      }
          let chartf = 2.0;
         orientationa.push(2);
         chartf /= Math.max(1, 1 % (Math.max(parseInt(`${chartf}`), 10)));
         dependenciesm += `${2 >> (Math.min(1, orientationa.length))}`;
         dependenciesm = `${orientationa.length & 1}`;
         dependenciesm += `${2 - dependenciesm.length}`;
      playercommonE += `${((dependenciesW ? 5 : 4) & 3)}`;
      if (successn) {
         break;
      }
   } while ((playercommonE.length <= 1) && successn);
   let hongkongJ = 7276664.0 >= libbufferp;
   do {
       let sellv = String.fromCharCode(113,95,49,52,95,98,97,115,105,99,115,0);
       let adultP = String.fromCharCode(117,95,57,56,0);
       let modal6 = String.fromCharCode(110,95,49,48,95,116,111,107,104,122,0);
       let telemetryJ: Map<any, any> = new Map([[String.fromCharCode(113,95,55,48,95,115,111,102,114,101,101,0),927], [String.fromCharCode(97,108,119,97,121,115,95,48,95,55,50,0),586], [String.fromCharCode(101,95,49,53,95,115,117,109,109,97,114,105,101,115,0),326]]);
       let dropdownJ = String.fromCharCode(108,115,102,108,115,112,100,95,122,95,54,49,0);
          let tickz = String.fromCharCode(99,102,116,115,116,95,117,95,51,56,0);
          let volumex = String.fromCharCode(105,116,111,97,95,114,95,51,55,0);
          let leaguedetailsbgR = String.fromCharCode(101,110,100,112,111,105,110,116,115,95,110,95,52,53,0);
         adultP += `${tickz.length << (Math.min(Math.abs(2), 1))}`;
         tickz += `${leaguedetailsbgR.length}`;
         volumex += `${volumex.length * leaguedetailsbgR.length}`;
         sellv += `${telemetryJ.size}`;
      if (dropdownJ != modal6) {
         modal6 += `${sellv.length << (Math.min(Math.abs(1), 3))}`;
      }
         modal6 = `${2 + telemetryJ.size}`;
         modal6 = `${dropdownJ.length}`;
          let mimep = String.fromCharCode(106,95,52,57,95,101,120,105,115,116,97,110,99,101,0);
          let unreadx: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,116,119,111,0),false ], [String.fromCharCode(119,95,50,55,95,117,110,118,111,116,101,0),true ], [String.fromCharCode(100,95,56,54,95,121,117,118,112,99,0),false ]]);
         modal6 += "2";
         mimep += `${mimep.length << (Math.min(2, Math.abs(unreadx.size)))}`;
         unreadx.set(`${mimep}`, unreadx.size % (Math.max(2, 4)));
         sellv += `${modal6.length}`;
      let sideT = telemetryJ.size >= 5209149;
      do {
         telemetryJ.set(modal6, 2 >> (Math.min(2, adultP.length)));
         if (sideT) {
            break;
         }
      } while ((dropdownJ.includes(`${telemetryJ.size}`)) && sideT);
         dropdownJ += `${1 >> (Math.min(4, adultP.length))}`;
      while (2 == (sellv.length | telemetryJ.size)) {
         sellv = `${modal6.length}`;
         break;
      }
         adultP += `${dropdownJ.length ^ 3}`;
      if (adultP != String.fromCharCode(84,0)) {
          let predictionarrow0 = 1.0;
         sellv += `${telemetryJ.size}`;
         predictionarrow0 -= 1;
      }
          let crownm = 3;
          let plusx = 3.0;
          let downloader8 = 5;
         telemetryJ = new Map([[modal6, adultP.length & 1]]);
         crownm += crownm / (Math.max(5, parseInt(`${plusx}`)));
         plusx += parseInt(`${plusx}`);
         downloader8 /= Math.max(3 << (Math.min(Math.abs(downloader8), 5)), 2);
      while (5 == sellv.length) {
         sellv += `${1 >> (Math.min(4, Math.abs(telemetryJ.size)))}`;
         break;
      }
         modal6 += `${sellv.length & modal6.length}`;
      libbufferp += parseFloat(`${1 + filedC}`);
      if (hongkongJ) {
         break;
      }
   } while (hongkongJ && (1.87 < libbufferp));
   for (let a = 0; a < 3; a++) {
      filedC <<= Math.min(4, Math.abs(2 >> (Math.min(5, navigationg.length))));
   }
   for (let m = 0; m < 2; m++) {
      filedC += (String.fromCharCode(79,0) == playercommonE ? parseInt(`${saveG}`) : playercommonE.length);
   }
       let found4 = String.fromCharCode(108,111,99,97,108,101,95,116,95,49,50,0);
         found4 = `${found4.length}`;
         found4 = `${1 & found4.length}`;
         found4 += `${found4.length * found4.length}`;
      temperaturev = `${parseInt(`${saveG}`) << (Math.min(playercommonE.length, 2))}`;
       let footballtrophyr: Array<any> = [49, 896];
       let yellowanimationliveH = String.fromCharCode(98,106,101,99,116,95,108,95,49,48,0);
         footballtrophyr.push(1 | footballtrophyr.length);
      let videobufferloadingM = 8418727 <= footballtrophyr.length;
      do {
          let updatesN = true;
          let customo = String.fromCharCode(116,95,49,52,95,98,105,110,107,98,0);
          let sortJ = false;
         footballtrophyr = [1];
         updatesN = !updatesN;
         customo += `${((updatesN ? 5 : 2))}`;
         sortJ = !updatesN;
         if (videobufferloadingM) {
            break;
         }
      } while (videobufferloadingM && ((footballtrophyr.length % 3) == 1));
      if (1 == (1 + yellowanimationliveH.length) || 1 == (footballtrophyr.length + yellowanimationliveH.length)) {
         yellowanimationliveH = `${footballtrophyr.length & yellowanimationliveH.length}`;
      }
      let star1 = yellowanimationliveH == String.fromCharCode(121,106,113,108,100,0);
      do {
          let whitevideoliveG: Array<any> = [174, 992];
          let middlea: Map<any, any> = new Map([[String.fromCharCode(117,95,55,56,0),460], [String.fromCharCode(112,111,115,116,105,110,105,116,95,99,95,57,54,0),811]]);
          let graphicso = false;
         yellowanimationliveH = `${(yellowanimationliveH == String.fromCharCode(89,0) ? middlea.size : yellowanimationliveH.length)}`;
         whitevideoliveG = [whitevideoliveG.length];
         middlea = new Map([[`${whitevideoliveG.length}`, 3]]);
         if (star1) {
            break;
         }
      } while (star1 && (3 <= (footballtrophyr.length | yellowanimationliveH.length)));
         yellowanimationliveH += "1";
         footballtrophyr.push(3 | footballtrophyr.length);
      dependenciesW = navigationg.length <= 15 || 70.96 <= libbufferp;
       let androide: Map<any, any> = new Map([[String.fromCharCode(119,97,114,110,105,110,103,115,95,100,95,56,55,0),705], [String.fromCharCode(114,95,53,52,95,115,117,112,101,114,0),791]]);
       let basketballmatchdetailbg4 = true;
      while ((androide.size ^ 1) < 5 || basketballmatchdetailbg4) {
         androide.set(`${basketballmatchdetailbg4}`, (3 | (basketballmatchdetailbg4 ? 1 : 5)));
         break;
      }
      while (5 >= (androide.size / (Math.max(4, 7)))) {
         androide.set(`${basketballmatchdetailbg4}`, ((basketballmatchdetailbg4 ? 4 : 5) + 3));
         break;
      }
      for (let f = 0; f < 1; f++) {
         androide.set(`${basketballmatchdetailbg4}`, 3);
      }
      for (let d = 0; d < 3; d++) {
          let relatedO = false;
          let time_bj = String.fromCharCode(101,95,50,49,95,115,117,98,116,114,97,99,116,0);
         androide = new Map([[`${basketballmatchdetailbg4}`, 2]]);
         relatedO = time_bj == time_bj;
      }
          let malaysiaN = 3;
         basketballmatchdetailbg4 = androide.size > 6;
         malaysiaN %= Math.max(2, malaysiaN | 3);
         basketballmatchdetailbg4 = androide.size < 15 || basketballmatchdetailbg4;
      filedC %= Math.max(1, navigationg.length);

    delayControls();

      libbufferp *= (parseFloat(`${2 & (dependenciesW ? 2 : 4)}`));
   if (temperaturev.includes(`${libbufferp}`)) {
       let privacyA = 1.0;
       let canvasC = 3;
       let reactnavigationJ = 0;
       let screen1: Map<any, any> = new Map([[String.fromCharCode(116,103,101,116,95,117,95,55,56,0),String.fromCharCode(103,95,53,48,95,118,115,110,112,114,105,110,116,102,0)], [String.fromCharCode(98,95,56,54,95,112,97,114,115,101,114,0),String.fromCharCode(111,111,108,98,97,114,95,107,95,48,0)]]);
       let rightJ = 4.0;
       let basketballiconj = String.fromCharCode(113,95,55,54,95,102,111,114,109,97,110,116,0);
          let transferp = String.fromCharCode(100,97,115,104,101,110,99,95,48,95,56,57,0);
         canvasC <<= Math.min(Math.abs(3), 5);
         transferp = "1";
       let googleX: Map<any, any> = new Map([[String.fromCharCode(109,95,49,55,95,112,114,101,115,101,110,116,97,116,105,111,110,0),483], [String.fromCharCode(99,114,117,110,95,48,95,49,57,0),583]]);
      if (canvasC < reactnavigationJ) {
         reactnavigationJ |= parseInt(`${rightJ}`);
      }
      while (Array.from(screen1.values()).includes(canvasC)) {
         screen1.set(`${canvasC}`, reactnavigationJ);
         break;
      }
      let rewardvideo6 = 9741878.0 >= privacyA;
      do {
          let malaysiaV: Array<any> = [893, 60, 699];
          let defaultroombgh: Map<any, any> = new Map([[String.fromCharCode(122,95,50,95,98,117,102,108,101,110,0),false ], [String.fromCharCode(109,117,108,116,105,95,100,95,54,50,0),false ]]);
          let selectK = 4.0;
         privacyA *= parseInt(`${selectK}`);
         malaysiaV.push(malaysiaV.length);
         defaultroombgh = new Map([[`${defaultroombgh.size}`, malaysiaV.length]]);
         selectK += parseFloat(`${malaysiaV.length % 2}`);
         if (rewardvideo6) {
            break;
         }
      } while (rewardvideo6 && (1.64 >= (privacyA * googleX.size) || (googleX.size * privacyA) >= 1.64));
      while (rightJ == 1.64) {
         canvasC %= Math.max(canvasC, 5);
         break;
      }
         screen1 = new Map([[`${googleX.size}`, googleX.size + reactnavigationJ]]);
          let iconarrowrightorange8 = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,54,95,54,52,0);
         privacyA *= reactnavigationJ % (Math.max(iconarrowrightorange8.length, 2));
      if (googleX.get(`${privacyA}`) == null) {
         googleX.set(basketballiconj, 1);
      }
      if (3 == (1 | canvasC) && 2 == (1 | reactnavigationJ)) {
          let holdery = 2.0;
          let iconpointscoreZ: Array<any> = [String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,111,95,54,56,0), String.fromCharCode(114,101,97,100,98,121,116,101,95,98,95,57,48,0)];
          let zhuboD = 0.0;
          let foundp: Map<any, any> = new Map([[String.fromCharCode(114,95,55,49,95,116,111,112,115,0),86], [String.fromCharCode(114,101,99,105,100,95,107,95,52,48,0),55], [String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,55,95,54,49,0),152]]);
          let logoy = 5.0;
         reactnavigationJ &= (String.fromCharCode(55,0) == basketballiconj ? googleX.size : basketballiconj.length);
         holdery += parseInt(`${logoy}`) << (Math.min(iconpointscoreZ.length, 2));
         iconpointscoreZ = [parseInt(`${zhuboD}`)];
         zhuboD *= parseFloat(`${2 << (Math.min(4, Math.abs(foundp.size)))}`);
         foundp = new Map([[`${foundp.size}`, foundp.size / (Math.max(2, 10))]]);
         logoy += parseFloat(`${foundp.size}`);
      }
         privacyA /= Math.max(1, parseInt(`${privacyA}`) & canvasC);
      let penaltymatchiconC = 6670613 >= googleX.size;
      do {
          let awayiconm = String.fromCharCode(116,104,114,111,119,95,122,95,57,53,0);
          let dycreatorl = String.fromCharCode(101,95,49,48,48,95,102,105,120,101,100,0);
          let kickM = 5.0;
         googleX = new Map([[`${kickM}`, basketballiconj.length / (Math.max(1, 9))]]);
         awayiconm = `${dycreatorl.length * awayiconm.length}`;
         dycreatorl = `${dycreatorl.length * awayiconm.length}`;
         kickM -= awayiconm.length / (Math.max(1, 5));
         if (penaltymatchiconC) {
            break;
         }
      } while (penaltymatchiconC && (googleX.get(`${privacyA}`) != null));
          let pushZ = 4;
          let episodest = 5.0;
          let defaultteam2: Array<any> = [String.fromCharCode(100,95,54,49,95,99,108,105,112,102,0), String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,107,95,56,49,0), String.fromCharCode(106,95,50,53,95,107,109,118,99,0)];
         screen1.set(basketballiconj, reactnavigationJ);
         pushZ /= Math.max(2, parseInt(`${episodest}`) - defaultteam2.length);
         episodest *= parseFloat(`${parseInt(`${episodest}`)}`);
         defaultteam2 = [pushZ];
      while (3 == reactnavigationJ) {
          let submitH = String.fromCharCode(102,114,97,110,100,95,51,95,54,55,0);
          let mimeE: Map<any, any> = new Map([[String.fromCharCode(108,97,114,103,101,114,95,53,95,55,48,0),String.fromCharCode(100,115,104,111,119,95,113,95,54,0)], [String.fromCharCode(114,95,57,48,95,100,114,97,119,116,101,120,116,0),String.fromCharCode(99,104,97,110,103,101,115,95,119,95,49,57,0)]]);
         reactnavigationJ *= (basketballiconj == String.fromCharCode(50,0) ? basketballiconj.length : screen1.size);
         submitH = `${submitH.length ^ mimeE.size}`;
         mimeE = new Map([[`${mimeE.size}`, mimeE.size]]);
         break;
      }
      temperaturev += "2";
   }
      navigationg += `${playercommonE.length}`;
   if (4.62 == (bgvipxvod9 * 2)) {
      saveG += playercommonE.length / 3;
   }
   for (let a = 0; a < 2; a++) {
      filedC &= parseInt(`${saveG}`) ^ 3;
   }
   let libimagepipeline7 = 7466383.0 <= bgvipxvod9;
   do {
      bgvipxvod9 -= temperaturev.length;
      if (libimagepipeline7) {
         break;
      }
   } while (libimagepipeline7 && (2.5 == (saveG * bgvipxvod9)));
      dependenciesW = !playercommonE.startsWith(`${dependenciesW}`);
       let hongkongX: Array<any> = [130, 453];
       let penaltyq = String.fromCharCode(107,95,50,48,95,112,117,108,115,101,115,0);
      while ((1 | hongkongX.length) == 4 || 1 == (penaltyq.length | 1)) {
         penaltyq = `${hongkongX.length}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         hongkongX = [1];
      }
         hongkongX = [penaltyq.length];
         penaltyq += `${2 >> (Math.min(3, penaltyq.length))}`;
         hongkongX.push(hongkongX.length % (Math.max(2, 9)));
       let telemetryt = String.fromCharCode(103,101,111,99,111,100,101,95,115,95,53,57,0);
      bgvipxvod9 /= Math.max(parseInt(`${libbufferp}`), 2);
   while (4.91 == saveG) {
      filedC -= 1 / (Math.max(10, navigationg.length));
      break;
   }
      saveG *= temperaturev.length;
      bgvipxvod9 += playercommonE.length;
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
       let default_w1l = String.fromCharCode(114,101,117,115,101,95,106,95,54,56,0);
    let dplusC = 0.0;
    let buildL = 1.0;
    let stringso: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,117,98,109,105,116,95,55,95,57,49,0),String.fromCharCode(106,95,56,54,95,105,112,100,111,112,100,0)], [String.fromCharCode(100,101,110,105,101,100,95,102,95,50,57,0),String.fromCharCode(116,95,52,49,95,100,105,115,99,111,114,100,0)], [String.fromCharCode(97,115,115,101,109,98,108,101,95,52,95,51,49,0),String.fromCharCode(109,111,122,106,112,101,103,95,115,95,50,57,0)]]);
    let shielddoneM = String.fromCharCode(105,95,49,49,95,103,101,116,110,97,109,101,105,110,102,111,0);
    let inviteD = 3.0;
    let ccopy_azf: Map<any, any> = new Map([[String.fromCharCode(101,116,104,101,114,95,99,95,57,56,0),false ], [String.fromCharCode(109,97,120,120,95,109,95,54,49,0),false ], [String.fromCharCode(116,101,120,116,115,95,98,95,53,55,0),true ]]);
    let textinputP = 1;
    let loadingX: Array<any> = [506, 821, 490];
    let airbnbstarv = false;
    let select8 = 1;
    let default_gI = String.fromCharCode(115,112,97,110,115,95,104,95,50,52,0);
    let airbnbstar3 = false;
    let shoot8: Array<any> = [712, 270];
      shielddoneM += `${3 & parseInt(`${buildL}`)}`;
   for (let p = 0; p < 2; p++) {
       let dependency0 = 4.0;
      let exampleimageG = dependency0 <= 9416809.0;
      do {
          let cornerZ = 1.0;
          let nativet = String.fromCharCode(114,95,51,50,95,108,97,115,114,0);
          let fullscreenmax8 = String.fromCharCode(100,95,52,53,95,115,101,113,0);
          let basketballplayerplaceholderU = 2;
          let znewinterstitiala = 4.0;
         dependency0 += parseFloat(`${parseInt(`${cornerZ}`)}`);
         cornerZ /= Math.max(5, parseFloat(`${1}`));
         nativet = `${fullscreenmax8.length}`;
         fullscreenmax8 = `${2 | nativet.length}`;
         basketballplayerplaceholderU -= parseInt(`${znewinterstitiala}`);
         znewinterstitiala -= parseFloat(`${1 * nativet.length}`);
         if (exampleimageG) {
            break;
         }
      } while (((dependency0 - dependency0) > 5.94) && exampleimageG);
      for (let t = 0; t < 1; t++) {
         dependency0 -= parseFloat(`${3}`);
      }
      for (let p = 0; p < 1; p++) {
         dependency0 -= parseFloat(`${parseInt(`${dependency0}`) ^ parseInt(`${dependency0}`)}`);
      }
      buildL /= Math.max(1, shielddoneM.length);
   }
      buildL += 2 << (Math.min(4, Math.abs(textinputP)));
   for (let a = 0; a < 3; a++) {
       let neond = false;
       let bgvipsportW = 5;
       let whistle_: Array<any> = [String.fromCharCode(97,95,55,48,95,98,117,109,112,0), String.fromCharCode(113,95,50,50,95,98,111,116,116,108,101,110,101,99,107,0)];
       let canvasj = true;
       let eighteenn = String.fromCharCode(106,95,53,52,95,117,115,101,114,99,116,120,0);
      let basketballplayerplaceholdert = eighteenn == String.fromCharCode(50,118,57,57,100,106,107,0);
      do {
         eighteenn += "3";
         if (basketballplayerplaceholdert) {
            break;
         }
      } while (basketballplayerplaceholdert && ((bgvipsportW % (Math.max(eighteenn.length, 8))) == 1));
         canvasj = (((canvasj ? eighteenn.length : 34) << (Math.min(eighteenn.length, 4))) == 34);
          let q_centerA = String.fromCharCode(99,111,112,121,120,95,103,95,49,52,0);
          let filteru = String.fromCharCode(105,95,54,52,95,112,97,112,101,114,0);
          let largesound9 = String.fromCharCode(101,95,56,57,95,100,101,99,97,121,0);
         bgvipsportW >>= Math.min(2, Math.abs(whistle_.length / 2));
         q_centerA = `${(String.fromCharCode(52,0) == largesound9 ? q_centerA.length : largesound9.length)}`;
         filteru = `${q_centerA.length >> (Math.min(largesound9.length, 4))}`;
       let chatB = true;
       let yellowK = false;
          let defaultteamm = 5.0;
          let librrc_: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,101,100,95,117,95,56,57,0),692], [String.fromCharCode(98,95,57,51,95,100,118,100,115,117,98,0),462], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,54,95,50,54,0),732]]);
         bgvipsportW ^= (1 & (chatB ? 2 : 5));
         defaultteamm -= parseFloat(`${librrc_.size}`);
         librrc_ = new Map([[`${librrc_.size}`, parseInt(`${defaultteamm}`) * 3]]);
       let guideP = 5;
       let penaltyshootM = 5;
      while (!neond || (penaltyshootM % (Math.max(1, 7))) >= 3) {
          let middleV = false;
         penaltyshootM |= (penaltyshootM >> (Math.min(2, Math.abs((chatB ? 4 : 4)))));
         middleV = !middleV;
         break;
      }
       let predictionA = true;
      let clock7 = 6851103 <= whistle_.length;
      do {
         whistle_.push((penaltyshootM << (Math.min(5, Math.abs((yellowK ? 4 : 2))))));
         if (clock7) {
            break;
         }
      } while ((whistle_.length < 1) && clock7);
         canvasj = eighteenn.length <= 30;
      let nativeexD = predictionA ? !predictionA : predictionA;
      do {
         predictionA = whistle_.length == 100;
         if (nativeexD) {
            break;
         }
      } while ((penaltyshootM == 1) && nativeexD);
      if (!eighteenn.endsWith(`${penaltyshootM}`)) {
          let basketballtrophyY: Array<any> = [652, 423];
          let renderh = false;
         eighteenn = `${1 + basketballtrophyY.length}`;
         basketballtrophyY = [2];
      }
      if (penaltyshootM == 2) {
         penaltyshootM &= penaltyshootM % (Math.max(10, eighteenn.length));
      }
      while (!eighteenn.endsWith(`${predictionA}`)) {
         predictionA = !neond;
         break;
      }
       let largeQ = false;
      ccopy_azf = new Map([[`${inviteD}`, parseInt(`${inviteD}`) / 2]]);
   }
      stringso.set(`${inviteD}`, 2);
       let backgroundt = false;
          let buildO = 4;
          let weatherY: Map<any, any> = new Map([[String.fromCharCode(97,115,115,111,99,105,97,116,101,95,110,95,52,51,0),976], [String.fromCharCode(97,114,107,101,114,95,121,95,49,48,48,0),24]]);
          let predictionbanner1 = String.fromCharCode(115,101,116,95,52,95,56,54,0);
         backgroundt = (weatherY.size - buildO) == 83;
         buildO ^= 3 ^ predictionbanner1.length;
         weatherY = new Map([[predictionbanner1, predictionbanner1.length - predictionbanner1.length]]);
         backgroundt = (backgroundt ? !backgroundt : backgroundt);
      while (!backgroundt && !backgroundt) {
         backgroundt = (!backgroundt ? backgroundt : backgroundt);
         break;
      }
      shielddoneM = "3";
      buildL += stringso.size - textinputP;
   let mini9 = ccopy_azf.size <= 9524416;
   do {
       let auto_8u: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,115,105,111,110,95,119,95,53,0),0], [String.fromCharCode(110,95,55,53,95,119,97,107,101,117,112,0),82]]);
       let libjsik = String.fromCharCode(115,97,110,105,116,105,122,101,114,95,119,95,52,56,0);
       let floaterp = false;
       let backU = String.fromCharCode(115,105,110,101,115,95,107,95,57,51,0);
       let privacy7 = String.fromCharCode(114,101,97,100,102,117,108,108,95,55,95,50,54,0);
      if ((1 * auto_8u.size) > 1 || 1 > auto_8u.size) {
          let libswresampleZ = String.fromCharCode(114,97,116,105,111,95,104,95,50,56,0);
          let bannerh = String.fromCharCode(100,111,119,110,108,111,97,100,95,56,95,54,55,0);
          let defaultlogow = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,103,95,57,51,0);
         floaterp = libswresampleZ.includes(`${floaterp}`);
         libswresampleZ = `${bannerh.length}`;
         bannerh = `${(bannerh == String.fromCharCode(56,0) ? defaultlogow.length : bannerh.length)}`;
         defaultlogow = `${defaultlogow.length}`;
      }
         libjsik = `${(privacy7 == String.fromCharCode(56,0) ? privacy7.length : (floaterp ? 5 : 3))}`;
         libjsik += `${3 >> (Math.min(3, backU.length))}`;
      for (let o = 0; o < 3; o++) {
          let dycreatorK: Array<any> = [266, 451, 912];
          let handlerT = 4.0;
         auto_8u = new Map([[`${dycreatorK.length}`, (libjsik == String.fromCharCode(66,0) ? dycreatorK.length : libjsik.length)]]);
         handlerT += parseFloat(`${parseInt(`${handlerT}`)}`);
      }
         backU += "3";
      for (let w = 0; w < 1; w++) {
         backU += "1";
      }
          let libglogS: Array<any> = [String.fromCharCode(116,95,54,52,95,121,111,103,97,0), String.fromCharCode(121,95,55,55,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0)];
         libjsik = `${auto_8u.size ^ libjsik.length}`;
         libglogS.push(libglogS.length);
       let ajaxx = String.fromCharCode(116,101,120,105,100,101,112,95,56,95,51,48,0);
       let countdown3 = String.fromCharCode(101,120,112,108,111,114,101,114,95,109,95,49,52,0);
      let brightnessG = libjsik == String.fromCharCode(48,102,52,48,105,101,105,107,0);
      do {
          let libfileA = true;
          let userB = String.fromCharCode(99,111,109,109,111,110,95,102,95,53,54,0);
         libjsik = `${ajaxx.length >> (Math.min(userB.length, 1))}`;
         libfileA = !libfileA;
         userB = `${((libfileA ? 2 : 2))}`;
         if (brightnessG) {
            break;
         }
      } while ((libjsik.length < backU.length) && brightnessG);
      let downloadingZ = 5092903 <= backU.length;
      do {
         backU += `${(String.fromCharCode(85,0) == ajaxx ? countdown3.length : ajaxx.length)}`;
         if (downloadingZ) {
            break;
         }
      } while (downloadingZ && (backU.length == 3));
          let detailsy = String.fromCharCode(110,95,52,53,95,104,97,100,111,119,115,0);
          let settingsn = String.fromCharCode(100,101,118,105,100,101,95,110,95,52,50,0);
          let assistE: Map<any, any> = new Map([[String.fromCharCode(115,97,110,105,116,105,122,101,114,95,118,95,54,57,0),true ], [String.fromCharCode(99,111,110,99,117,114,114,101,110,116,95,52,95,50,53,0),true ]]);
         backU += `${2 ^ countdown3.length}`;
         detailsy += "2";
         settingsn += `${settingsn.length}`;
         assistE = new Map([[`${assistE.size}`, settingsn.length]]);
      while (!countdown3.includes(`${backU.length}`)) {
         backU = `${backU.length ^ 1}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         floaterp = !libjsik.includes(`${floaterp}`);
      }
      if (ajaxx == String.fromCharCode(102,0)) {
          let minimize8 = true;
          let libfb8 = 0.0;
          let selectionj = 1.0;
          let soundH: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,119,101,97,118,101,0),939], [String.fromCharCode(121,95,53,52,95,116,105,109,101,102,105,108,116,101,114,0),948]]);
          let productY: Array<any> = [598, 779];
         countdown3 += `${2 >> (Math.min(2, ajaxx.length))}`;
         minimize8 = 87.99 > selectionj && 87.99 > libfb8;
         libfb8 *= parseFloat(`${productY.length & 3}`);
         selectionj *= parseFloat(`${parseInt(`${selectionj}`)}`);
         soundH.set(`${libfb8}`, parseInt(`${libfb8}`) << (Math.min(Math.abs(3), 2)));
         productY = [parseInt(`${libfb8}`)];
      }
      while (ajaxx.length > 1) {
         auto_8u.set(ajaxx, 2);
         break;
      }
      ccopy_azf = new Map([[`${dplusC}`, 1 * parseInt(`${dplusC}`)]]);
      if (mini9) {
         break;
      }
   } while (mini9 && (!Array.from(ccopy_azf.keys()).includes(`${inviteD}`)));
       let yellowscoreballc = String.fromCharCode(103,95,48,95,117,110,99,111,109,112,114,101,115,115,101,100,0);
       let vipsportR = String.fromCharCode(109,95,52,50,0);
       let orangeuparrowQ = 3.0;
      while ((4.89 + orangeuparrowQ) < 4.22) {
          let backicon7 = String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,57,95,57,54,0);
          let backwhitea = String.fromCharCode(99,95,57,95,116,111,109,99,114,121,112,116,0);
         orangeuparrowQ *= 1 | backwhitea.length;
         backicon7 += `${backicon7.length}`;
         backwhitea = `${backicon7.length + 1}`;
         break;
      }
         vipsportR = `${parseInt(`${orangeuparrowQ}`) << (Math.min(Math.abs(2), 2))}`;
          let disconnectedw = 3;
          let mimeQ = true;
         vipsportR = `${disconnectedw}`;
         disconnectedw %= Math.max(((mimeQ ? 1 : 3) ^ 1), 4);
      if (vipsportR.endsWith(`${yellowscoreballc.length}`)) {
         vipsportR += `${parseInt(`${orangeuparrowQ}`)}`;
      }
      while (yellowscoreballc.endsWith(`${orangeuparrowQ}`)) {
         orangeuparrowQ += (String.fromCharCode(75,0) == vipsportR ? parseInt(`${orangeuparrowQ}`) : vipsportR.length);
         break;
      }
      ccopy_azf.set(`${buildL}`, textinputP ^ 1);
   while (1.91 <= (textinputP / (Math.max(buildL, 7))) && (3 >> (Math.min(4, Math.abs(textinputP)))) <= 2) {
      textinputP ^= parseInt(`${buildL}`);
      break;
   }
   let homeplayerz = buildL >= 7881660.0;
   do {
       let bingn = 4.0;
       let delegate_b6 = 5.0;
       let selection0 = String.fromCharCode(99,97,112,116,117,114,101,114,95,48,95,51,51,0);
       let moviesZ = String.fromCharCode(103,95,53,53,95,102,111,111,116,98,97,108,108,0);
         delegate_b6 *= moviesZ.length;
      let inactiveY = 5889808.0 <= bingn;
      do {
          let point7: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,95,120,95,53,48,0),205], [String.fromCharCode(108,95,52,53,95,121,97,109,97,104,97,0),564]]);
         bingn -= parseFloat(`${point7.size & 2}`);
         if (inactiveY) {
            break;
         }
      } while ((1.24 >= (parseFloat(`${selection0.length}`) / (Math.max(3, bingn))) && (3 * selection0.length) >= 2) && inactiveY);
      let textinput4 = moviesZ.length <= 6138097;
      do {
          let libyogag = 5;
          let shirtF = String.fromCharCode(102,95,52,50,95,121,117,118,116,101,115,116,0);
          let modeV = String.fromCharCode(99,111,97,108,101,115,99,101,95,107,95,56,50,0);
         moviesZ += `${parseInt(`${bingn}`)}`;
         libyogag ^= libyogag ^ shirtF.length;
         shirtF += `${shirtF.length}`;
         modeV = `${shirtF.length}`;
         if (textinput4) {
            break;
         }
      } while ((selection0.length == 1 || moviesZ != String.fromCharCode(79,0)) && textinput4);
         moviesZ += `${parseInt(`${delegate_b6}`)}`;
      if (selection0 == moviesZ) {
         moviesZ += `${1 >> (Math.min(5, moviesZ.length))}`;
      }
      if (delegate_b6 > 5.50) {
         delegate_b6 += parseInt(`${delegate_b6}`) ^ parseInt(`${bingn}`);
      }
      for (let g = 0; g < 1; g++) {
         delegate_b6 *= moviesZ.length % 1;
      }
      while ((5.69 + delegate_b6) < 3.64 && 3.49 < (delegate_b6 + 5.69)) {
         delegate_b6 -= 1 * parseInt(`${bingn}`);
         break;
      }
      buildL *= selection0.length | default_w1l.length;
      if (homeplayerz) {
         break;
      }
   } while (homeplayerz && (buildL < shielddoneM.length));
   let cedbadcebfbfbfbcfecbc6 = 6604662.0 <= inviteD;
   do {
      inviteD *= parseFloat(`${2}`);
      if (cedbadcebfbfbfbcfecbc6) {
         break;
      }
   } while (cedbadcebfbfbfbcfecbc6 && ((2 - parseInt(`${inviteD}`)) == 2 || 1 == (shielddoneM.length / 2)));

    setShowControls(!showControls);

   let ping_ = 5557319.0 <= inviteD;
   do {
       let malaysiau = 0;
      for (let c = 0; c < 2; c++) {
         malaysiau %= Math.max(1, malaysiau);
      }
      let libmapbufferjnim = malaysiau <= 7845061;
      do {
         malaysiau *= 3;
         if (libmapbufferjnim) {
            break;
         }
      } while ((4 == (malaysiau | malaysiau)) && libmapbufferjnim);
      let footballfiledlayoutT = 8671576 <= malaysiau;
      do {
         malaysiau |= 1;
         if (footballfiledlayoutT) {
            break;
         }
      } while (footballfiledlayoutT && (malaysiau < malaysiau));
      inviteD *= parseFloat(`${loadingX.length << (Math.min(shielddoneM.length, 3))}`);
      if (ping_) {
         break;
      }
   } while ((2.3 < (2.63 + inviteD) || (2.63 + inviteD) < 2.48) && ping_);
   if (2.80 == (buildL * 4.10) && 4.50 == (buildL * 4.10)) {
      shielddoneM += `${shielddoneM.length}`;
   }
   if (1 < stringso.size) {
      textinputP <<= Math.min(4, Math.abs(3));
   }
   while (4.84 > (buildL / (Math.max(5.96, 1))) && (ccopy_azf.size / (Math.max(2, 5))) > 5) {
      ccopy_azf.set(`${dplusC}`, 2);
      break;
   }
      dplusC -= parseFloat(`${parseInt(`${buildL}`) ^ 1}`);
      default_w1l += `${ccopy_azf.size | textinputP}`;
      select8 |= 1;
      loadingX = [loadingX.length];
      ccopy_azf.set(`${inviteD}`, parseInt(`${inviteD}`));
   let sliderv = 9627891 <= select8;
   do {
       let predictionp = String.fromCharCode(97,100,100,95,110,95,49,51,0);
       let zoomL: Array<any> = [253, 612, 323];
       let gemfilev = String.fromCharCode(100,95,57,54,95,119,105,110,100,111,119,101,100,0);
       let iconsharefriendsz = String.fromCharCode(116,95,49,95,105,110,116,101,114,105,116,101,109,0);
       let combineE = 3.0;
       let savel = 5.0;
          let k_unlock3 = 0.0;
          let bgvipxvodU: Map<any, any> = new Map([[String.fromCharCode(107,101,114,110,101,108,95,116,95,54,53,0),922], [String.fromCharCode(102,95,56,49,95,100,117,109,112,101,114,0),92], [String.fromCharCode(97,95,52,52,95,110,97,109,101,115,101,114,118,101,114,115,0),454]]);
         iconsharefriendsz += "1";
         k_unlock3 /= Math.max(2, parseFloat(`${1}`));
         bgvipxvodU.set(`${k_unlock3}`, 3);
      if (5.96 < (combineE * 5.16) || (3 * predictionp.length) < 1) {
         combineE += (String.fromCharCode(99,0) == iconsharefriendsz ? zoomL.length : iconsharefriendsz.length);
      }
      for (let u = 0; u < 1; u++) {
          let elements5: Array<any> = [53, 330];
          let pressurej = 1.0;
          let membership3: Array<any> = [String.fromCharCode(121,95,49,49,95,113,117,111,116,101,115,0), String.fromCharCode(116,114,97,105,110,95,119,95,57,48,0), String.fromCharCode(122,95,55,50,95,103,101,111,112,111,108,121,0)];
          let transferP: Map<any, any> = new Map([[String.fromCharCode(116,95,57,50,95,115,117,112,101,114,0),408], [String.fromCharCode(114,117,110,116,101,115,116,115,95,104,95,49,56,0),580]]);
         combineE *= 2 & iconsharefriendsz.length;
         elements5 = [2 + elements5.length];
         pressurej += parseFloat(`${elements5.length % (Math.max(3, 4))}`);
         membership3.push(parseInt(`${pressurej}`));
         transferP.set(`${pressurej}`, elements5.length);
      }
      for (let m = 0; m < 2; m++) {
         zoomL.push(3);
      }
      if ((zoomL.length / 5) > 4 || 4 > (gemfilev.length / (Math.max(5, 4)))) {
         gemfilev += `${1 + parseInt(`${savel}`)}`;
      }
      while (gemfilev.length >= 3) {
         gemfilev = `${parseInt(`${combineE}`)}`;
         break;
      }
          let iconbackwhiteH = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,95,53,95,52,57,0);
          let playG: Array<any> = [324, 744];
         predictionp += `${parseInt(`${combineE}`) >> (Math.min(Math.abs(3), 3))}`;
         iconbackwhiteH += `${playG.length}`;
         playG.push(iconbackwhiteH.length);
         zoomL.push(iconsharefriendsz.length / 3);
      let icondefaultthumbnailw = 4997050 <= zoomL.length;
      do {
         zoomL = [3];
         if (icondefaultthumbnailw) {
            break;
         }
      } while (icondefaultthumbnailw && ((4 + zoomL.length) == 1 || 4 == (gemfilev.length + 4)));
      for (let s = 0; s < 3; s++) {
         zoomL = [predictionp.length];
      }
      while (savel == 4.48) {
          let bannerW: Array<any> = [String.fromCharCode(102,97,109,105,108,121,95,107,95,53,57,0), String.fromCharCode(98,105,116,119,114,105,116,101,114,95,53,95,56,56,0)];
          let mbridges = String.fromCharCode(113,95,52,52,95,114,101,118,101,114,115,101,0);
          let gradleL = String.fromCharCode(103,95,53,56,95,111,110,101,0);
          let iconf = 2.0;
          let holderD = String.fromCharCode(98,95,56,50,95,105,100,108,101,0);
         zoomL = [(String.fromCharCode(83,0) == gradleL ? iconsharefriendsz.length : gradleL.length)];
         bannerW = [2];
         mbridges += `${parseInt(`${iconf}`) << (Math.min(Math.abs(1), 2))}`;
         iconf += parseFloat(`${2 & mbridges.length}`);
         holderD += `${bannerW.length}`;
         break;
      }
      select8 &= gemfilev.length;
      if (sliderv) {
         break;
      }
   } while (((select8 ^ 3) > 1) && sliderv);
      buildL += (2 & (airbnbstarv ? 2 : 2));
   let twitterr = default_w1l.length <= 5407299;
   do {
       let teamz = 4;
       let chinasamek = 4;
       let resendQ = String.fromCharCode(105,95,52,49,95,104,107,100,102,0);
      while (1 < resendQ.length) {
         teamz >>= Math.min(4, Math.abs(2));
         break;
      }
         teamz |= chinasamek ^ 1;
       let iconadslinkU = true;
       let annerK = false;
      if (annerK) {
         annerK = !annerK;
      }
      if ((chinasamek + 1) == 1 || !iconadslinkU) {
          let emptyA = String.fromCharCode(101,95,49,52,95,110,97,118,105,0);
          let airbnbstar5 = String.fromCharCode(101,103,111,108,111,109,98,95,99,95,51,0);
         iconadslinkU = 3 < resendQ.length;
         emptyA = `${airbnbstar5.length >> (Math.min(emptyA.length, 5))}`;
         airbnbstar5 += `${emptyA.length << (Math.min(3, airbnbstar5.length))}`;
      }
         resendQ = `${chinasamek}`;
      for (let y = 0; y < 1; y++) {
          let reactnavigationo = String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,112,95,54,57,0);
          let o_manager4 = 3.0;
          let heartg = String.fromCharCode(116,111,110,101,95,53,95,56,51,0);
          let giftz = true;
          let tnewsX = String.fromCharCode(109,95,56,95,109,101,97,115,117,114,101,109,101,110,116,0);
         iconadslinkU = !annerK;
         reactnavigationo += `${(parseInt(`${o_manager4}`) & (giftz ? 2 : 1))}`;
         o_manager4 += parseFloat(`${heartg.length}`);
         heartg += `${parseInt(`${o_manager4}`) & 1}`;
         giftz = tnewsX.length < 35;
         tnewsX += `${reactnavigationo.length}`;
      }
      for (let e = 0; e < 1; e++) {
         chinasamek %= Math.max(1, 5);
      }
      for (let s = 0; s < 2; s++) {
          let incidentI: Map<any, any> = new Map([[String.fromCharCode(116,95,49,49,95,118,99,100,97,116,97,0),true ], [String.fromCharCode(101,95,56,55,95,108,105,98,115,109,98,99,0),true ]]);
          let weiboh = false;
          let nodeB = 2.0;
          let imagesc = 3;
         chinasamek &= 1;
         incidentI = new Map([[`${incidentI.size}`, incidentI.size - 1]]);
         weiboh = incidentI.size < 72;
         nodeB /= Math.max((parseInt(`${nodeB}`) * (weiboh ? 2 : 3)), 3);
         imagesc %= Math.max(1, imagesc);
      }
      default_w1l += `${1 + ccopy_azf.size}`;
      if (twitterr) {
         break;
      }
   } while (twitterr && (1 < (select8 * default_w1l.length)));
    delayControls();
  };

  const clearHidingDelay = () => {
       let overW = String.fromCharCode(98,95,55,95,110,111,110,115,101,99,117,114,101,0);
    let time_6M = String.fromCharCode(109,97,114,115,104,97,108,95,99,95,55,56,0);
    let buttonO: Map<any, any> = new Map([[String.fromCharCode(106,95,54,50,95,121,117,121,118,116,111,121,117,118,0),String.fromCharCode(99,111,117,110,116,114,121,95,113,95,56,49,0)], [String.fromCharCode(112,95,51,56,95,115,116,100,101,114,114,0),String.fromCharCode(116,106,117,116,105,108,95,50,95,54,0)], [String.fromCharCode(116,95,55,51,95,101,118,101,110,116,115,0),String.fromCharCode(102,95,55,50,95,116,106,101,120,97,109,112,108,101,116,101,115,116,0)]]);
    let turndownF = String.fromCharCode(107,95,53,95,105,110,99,108,117,100,101,115,0);
    let nextb = String.fromCharCode(105,102,97,115,116,95,107,95,57,52,0);
    let binddatas1: Array<any> = [441, 872];
    let configure1 = String.fromCharCode(110,95,53,57,95,111,117,116,100,101,118,115,0);
    let actionss = String.fromCharCode(116,104,97,116,95,54,95,51,57,0);
    let predictionbannerM: Map<any, any> = new Map([[String.fromCharCode(100,111,99,108,105,115,116,115,95,100,95,55,54,0),false ], [String.fromCharCode(112,111,112,111,118,101,114,95,97,95,54,51,0),true ]]);
    let expiredz = 4.0;
    let descH = String.fromCharCode(112,95,53,57,95,105,110,116,114,105,110,0);
    let scoreR = 1;
    let types_ = 1;
      scoreR >>= Math.min(Math.abs(turndownF.length << (Math.min(Math.abs(3), 5))), 3);
      predictionbannerM.set(configure1, time_6M.length / (Math.max(6, configure1.length)));
   for (let w = 0; w < 3; w++) {
       let lefts = false;
       let flippern = 2.0;
       let overlayO: Map<any, any> = new Map([[String.fromCharCode(115,99,111,112,101,115,95,55,95,51,56,0),true ], [String.fromCharCode(99,95,57,53,95,117,110,99,111,114,114,0),true ]]);
      let catalog7 = overlayO.size <= 8539965;
      do {
         overlayO = new Map([[`${overlayO.size}`, parseInt(`${flippern}`) ^ 3]]);
         if (catalog7) {
            break;
         }
      } while ((!lefts) && catalog7);
          let expiredn: Map<any, any> = new Map([[String.fromCharCode(114,95,57,53,95,114,101,97,115,111,110,0),true ], [String.fromCharCode(98,95,54,57,95,110,101,117,116,114,97,108,0),false ]]);
          let sellv = String.fromCharCode(98,95,57,54,95,100,116,108,115,0);
          let videocommonn = String.fromCharCode(104,95,53,55,95,115,105,109,105,108,97,114,0);
         overlayO = new Map([[`${flippern}`, (videocommonn == String.fromCharCode(71,0) ? videocommonn.length : parseInt(`${flippern}`))]]);
         expiredn.set(`${sellv}`, (sellv == String.fromCharCode(98,0) ? sellv.length : expiredn.size));
       let cedbadcebfbfbfbcfecbcu = String.fromCharCode(111,99,116,101,116,95,121,95,55,50,0);
          let orangedownarrowo = 1.0;
         overlayO.set(`${lefts}`, (parseInt(`${flippern}`) | (lefts ? 4 : 2)));
         orangedownarrowo *= parseFloat(`${2}`);
      for (let v = 0; v < 3; v++) {
          let configv: Array<any> = [220, 809, 141];
          let selectedU: Map<any, any> = new Map([[String.fromCharCode(122,95,53,50,95,116,105,109,101,115,116,97,109,112,101,100,0),884], [String.fromCharCode(106,95,49,57,95,112,97,105,114,105,110,103,0),280], [String.fromCharCode(115,116,117,102,102,115,116,95,101,95,49,0),740]]);
         flippern += (cedbadcebfbfbfbcfecbcu == String.fromCharCode(65,0) ? overlayO.size : cedbadcebfbfbfbcfecbcu.length);
         configv.push(1 | configv.length);
         selectedU.set(`${configv.length}`, configv.length / 3);
      }
      if ((overlayO.size << (Math.min(Math.abs(4), 4))) > 2) {
         flippern /= Math.max(4, (parseInt(`${flippern}`) | (lefts ? 3 : 5)));
      }
         lefts = !lefts;
         flippern /= Math.max(2, overlayO.size);
          let iconarrowrightb = 1;
          let type_jqy = 0.0;
         cedbadcebfbfbfbcfecbcu = `${overlayO.size / (Math.max(3, 2))}`;
         iconarrowrightb *= 1 / (Math.max(iconarrowrightb, 5));
         type_jqy += 3 % (Math.max(iconarrowrightb, 2));
      time_6M += "3";
   }
       let referrerv = String.fromCharCode(122,95,50,57,95,102,101,97,116,117,114,101,0);
       let basketballiconO = 1;
          let flipperE = String.fromCharCode(100,121,110,97,109,105,99,95,54,95,52,55,0);
          let halfL = false;
         referrerv += `${referrerv.length}`;
         flipperE += `${(flipperE.length >> (Math.min(4, Math.abs((halfL ? 4 : 2)))))}`;
         halfL = !flipperE.includes(`${halfL}`);
      let logouserN = referrerv == String.fromCharCode(110,114,115,111,55,53,0);
      do {
         referrerv = "3";
         if (logouserN) {
            break;
         }
      } while ((2 > (3 + referrerv.length) && (3 + referrerv.length) > 3) && logouserN);
         referrerv += "1";
          let merger3 = 1;
         referrerv = `${basketballiconO}`;
         merger3 %= Math.max(3, merger3 << (Math.min(Math.abs(merger3), 3)));
         referrerv += "3";
      while ((1 << (Math.min(1, Math.abs(basketballiconO)))) <= 2) {
         basketballiconO %= Math.max(1, 3);
         break;
      }
      configure1 = `${turndownF.length << (Math.min(1, configure1.length))}`;
      predictionbannerM = new Map([[overW, overW.length + 3]]);
      buttonO = new Map([[`${binddatas1.length}`, 3]]);
   if (!time_6M.startsWith(`${buttonO.size}`)) {
       let librrcO: Array<any> = [String.fromCharCode(112,117,109,112,95,104,95,55,57,0), String.fromCharCode(115,95,51,50,95,115,97,109,105,0)];
       let calendarq: Array<any> = [510, 542];
         calendarq = [2 & calendarq.length];
       let updatesN = String.fromCharCode(105,95,53,56,95,97,98,115,116,114,97,99,116,0);
       let mutedZ = String.fromCharCode(116,95,52,53,95,104,97,114,109,111,110,105,99,0);
         updatesN += `${3 & calendarq.length}`;
      let albumM = 7315547 >= calendarq.length;
      do {
         calendarq = [1];
         if (albumM) {
            break;
         }
      } while (((5 + mutedZ.length) > 3 || (mutedZ.length + calendarq.length) > 5) && albumM);
      for (let c = 0; c < 2; c++) {
         calendarq.push(3 | librrcO.length);
      }
         librrcO.push(calendarq.length >> (Math.min(updatesN.length, 4)));
      buttonO = new Map([[`${buttonO.size}`, time_6M.length]]);
   }
      descH += `${predictionbannerM.size}`;
   let cancelK = turndownF == String.fromCharCode(54,49,53,112,0);
   do {
      turndownF = `${configure1.length}`;
      if (cancelK) {
         break;
      }
   } while ((2 < (turndownF.length & 4)) && cancelK);
   while (types_ > 2) {
      configure1 = `${2 | actionss.length}`;
      break;
   }
      binddatas1 = [(String.fromCharCode(119,0) == nextb ? types_ : nextb.length)];
   let complete1 = time_6M.length >= 9756974;
   do {
       let megaphonez: Map<any, any> = new Map([[String.fromCharCode(108,95,55,56,95,102,111,117,114,99,99,0),498], [String.fromCharCode(98,95,48,95,101,109,98,101,100,100,105,110,103,0),817], [String.fromCharCode(99,95,52,56,95,112,117,115,104,105,110,103,0),82]]);
       let submitu: Array<any> = [644, 931, 734];
       let long_9v2: Array<any> = [542, 412];
       let libtobS = String.fromCharCode(122,95,54,49,95,108,97,112,112,101,100,0);
       let networkf = String.fromCharCode(106,95,49,49,95,101,114,114,108,111,103,0);
          let libreactnativejniP = String.fromCharCode(118,95,57,50,0);
         megaphonez = new Map([[`${megaphonez.size}`, libtobS.length << (Math.min(Math.abs(3), 1))]]);
         libreactnativejniP += `${libreactnativejniP.length & libreactnativejniP.length}`;
      let iconcloseK = libtobS == String.fromCharCode(53,120,116,0);
      do {
          let componentregistryK = 3.0;
          let userk = 5.0;
         libtobS += `${libtobS.length}`;
         componentregistryK /= Math.max(3, parseInt(`${userk}`) * 1);
         userk += parseFloat(`${parseInt(`${componentregistryK}`) % 3}`);
         if (iconcloseK) {
            break;
         }
      } while ((libtobS.length <= long_9v2.length) && iconcloseK);
      for (let o = 0; o < 3; o++) {
         megaphonez.set(`${submitu.length}`, megaphonez.size);
      }
         libtobS += `${networkf.length}`;
      let topic8 = submitu.length <= 6854548;
      do {
         submitu.push(3);
         if (topic8) {
            break;
         }
      } while ((megaphonez.get(`${submitu.length}`) == null) && topic8);
         networkf = `${1 ^ megaphonez.size}`;
      while ((long_9v2.length - submitu.length) == 5 || (submitu.length - 5) == 2) {
         long_9v2 = [libtobS.length];
         break;
      }
      if (long_9v2.length == submitu.length) {
         submitu = [networkf.length + 2];
      }
          let favoritea = String.fromCharCode(115,116,97,103,105,110,103,95,102,95,53,52,0);
          let penaltymatchiconT = 0.0;
          let baidui = String.fromCharCode(101,120,116,101,110,115,105,111,110,115,95,111,95,49,0);
         megaphonez = new Map([[baidui, baidui.length]]);
         favoritea = `${favoritea.length}`;
         penaltymatchiconT /= Math.max(2, 1);
      while (1 >= long_9v2.length) {
          let sortz = String.fromCharCode(118,95,54,56,95,98,111,111,107,109,97,114,107,0);
         submitu = [2];
         sortz += `${(String.fromCharCode(74,0) == sortz ? sortz.length : sortz.length)}`;
         break;
      }
      for (let x = 0; x < 3; x++) {
          let libavcodecj = String.fromCharCode(107,95,54,54,95,108,105,98,114,115,118,103,0);
          let sharedj = 4.0;
          let owngoalr = String.fromCharCode(112,97,115,116,101,95,49,95,55,57,0);
          let iconshareQ: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,101,95,53,95,53,55,0),973], [String.fromCharCode(110,95,57,48,95,101,115,99,97,112,101,0),462]]);
         networkf = `${libtobS.length}`;
         libavcodecj += "1";
         sharedj += parseFloat(`${owngoalr.length / (Math.max(3, 5))}`);
         owngoalr += "1";
         iconshareQ.set(libavcodecj, (libavcodecj == String.fromCharCode(80,0) ? iconshareQ.size : libavcodecj.length));
      }
         submitu.push(submitu.length);
      for (let b = 0; b < 1; b++) {
         networkf = `${submitu.length}`;
      }
         long_9v2 = [networkf.length << (Math.min(Math.abs(1), 4))];
          let iconpointscoreW = String.fromCharCode(102,95,56,56,95,102,117,122,122,121,0);
          let filedS = String.fromCharCode(111,95,56,52,95,98,97,99,107,108,105,103,104,116,0);
          let defaultteamt: Array<any> = [728, 197];
         long_9v2.push(defaultteamt.length + 2);
         iconpointscoreW = `${iconpointscoreW.length / (Math.max(2, 5))}`;
         filedS += `${iconpointscoreW.length / (Math.max(2, 9))}`;
         defaultteamt.push(3);
      time_6M += `${scoreR | 2}`;
      if (complete1) {
         break;
      }
   } while (complete1 && (!time_6M.startsWith(`${expiredz}`)));
   for (let m = 0; m < 2; m++) {
      expiredz -= parseFloat(`${overW.length}`);
   }
   for (let p = 0; p < 3; p++) {
      configure1 = `${descH.length}`;
   }
   let libswresampley = 7729155 <= overW.length;
   do {
      overW = `${predictionbannerM.size << (Math.min(overW.length, 5))}`;
      if (libswresampley) {
         break;
      }
   } while (libswresampley && ((overW.length & 5) > 5));
   while (4 == (predictionbannerM.size << (Math.min(Math.abs(5), 3))) || 5 == (time_6M.length << (Math.min(3, Math.abs(predictionbannerM.size))))) {
       let calendarU = String.fromCharCode(109,111,116,105,111,110,95,117,95,51,52,0);
       let libavformato: Map<any, any> = new Map([[String.fromCharCode(113,112,102,105,108,101,95,105,95,56,53,0),String.fromCharCode(114,95,53,49,95,119,115,97,117,100,0)], [String.fromCharCode(105,95,52,54,95,102,111,114,109,0),String.fromCharCode(120,95,50,53,95,97,100,103,114,111,117,112,0)], [String.fromCharCode(99,95,49,53,95,100,105,116,104,101,114,0),String.fromCharCode(122,95,49,48,48,95,115,104,97,114,101,100,107,101,121,0)]]);
       let iconstarF = String.fromCharCode(105,95,55,53,95,100,105,97,103,110,111,115,116,105,99,0);
       let runtimen = 4.0;
       let searchW = 3;
      if (iconstarF.length > 4) {
          let floatingW: Map<any, any> = new Map([[String.fromCharCode(97,115,121,110,99,95,106,95,53,57,0),String.fromCharCode(117,95,52,53,95,117,118,97,114,105,110,116,0)], [String.fromCharCode(98,95,56,48,95,119,104,116,120,0),String.fromCharCode(102,117,122,122,95,118,95,57,48,0)]]);
         libavformato = new Map([[`${libavformato.size}`, libavformato.size]]);
         floatingW = new Map([[`${floatingW.size}`, floatingW.size]]);
      }
          let listW = String.fromCharCode(111,95,57,52,95,102,105,114,115,116,0);
          let applicationu: Array<any> = [760, 985];
         runtimen += parseFloat(`${2 + libavformato.size}`);
         listW += `${3 & applicationu.length}`;
         applicationu.push(applicationu.length);
         iconstarF = `${calendarU.length ^ libavformato.size}`;
      while (runtimen >= 5.49) {
         runtimen *= parseFloat(`${iconstarF.length}`);
         break;
      }
          let defaultteam_ = 3.0;
          let blackE = 4.0;
          let iconwatchnowq = String.fromCharCode(104,115,99,114,111,108,108,95,121,95,50,53,0);
         searchW ^= (calendarU == String.fromCharCode(54,0) ? libavformato.size : calendarU.length);
         defaultteam_ /= Math.max(3 - iconwatchnowq.length, 5);
         blackE /= Math.max(5, (parseFloat(`${iconwatchnowq == String.fromCharCode(50,0) ? iconwatchnowq.length : parseInt(`${defaultteam_}`)}`)));
      while (libavformato.get(`${runtimen}`) != null) {
         runtimen /= Math.max(parseFloat(`${3}`), 4);
         break;
      }
      if (4 > calendarU.length) {
         calendarU = `${1 & libavformato.size}`;
      }
      while ((calendarU.length + 5) <= 2 || (runtimen / (Math.max(parseFloat(`${calendarU.length}`), 7))) <= 1.63) {
          let favorite2 = 4.0;
          let moviesV = 1.0;
          let bellP = 3.0;
          let vietnamZ: Map<any, any> = new Map([[String.fromCharCode(116,116,97,103,95,110,95,55,56,0),938], [String.fromCharCode(110,95,51,53,95,105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,0),576], [String.fromCharCode(103,95,51,55,95,98,121,116,101,108,101,110,0),771]]);
         calendarU = `${3 - calendarU.length}`;
         favorite2 -= parseFloat(`${2 + vietnamZ.size}`);
         moviesV /= Math.max(1, parseFloat(`${1 & parseInt(`${moviesV}`)}`));
         bellP *= parseInt(`${favorite2}`) % (Math.max(1, 3));
         vietnamZ.set(`${favorite2}`, 3);
         break;
      }
         libavformato = new Map([[iconstarF, iconstarF.length]]);
         calendarU = "1";
      for (let y = 0; y < 1; y++) {
         searchW += libavformato.size;
      }
          let xvodN: Map<any, any> = new Map([[String.fromCharCode(97,99,99,114,117,101,100,95,106,95,50,48,0),655], [String.fromCharCode(115,112,114,105,116,101,115,95,57,95,57,51,0),704], [String.fromCharCode(108,122,111,120,95,117,95,54,56,0),268]]);
         libavformato = new Map([[iconstarF, searchW]]);
         xvodN = new Map([[`${xvodN.size}`, 3 + xvodN.size]]);
         iconstarF += "1";
         searchW %= Math.max(parseInt(`${runtimen}`) & calendarU.length, 5);
         runtimen += parseFloat(`${3 ^ libavformato.size}`);
      time_6M += "2";
      break;
   }
      actionss = `${descH.length | turndownF.length}`;
      overW += `${parseInt(`${expiredz}`)}`;
      nextb += `${descH.length}`;
       let rocket7 = 2.0;
      while ((rocket7 / 4.95) == 1.62 && (rocket7 / 4.95) == 4.85) {
         rocket7 /= Math.max(3, parseFloat(`${parseInt(`${rocket7}`) % (Math.max(7, parseInt(`${rocket7}`)))}`));
         break;
      }
          let contexti = 4;
          let awayiconR = String.fromCharCode(102,95,55,52,0);
          let yellowtoredR = true;
         rocket7 *= (parseFloat(`${awayiconR == String.fromCharCode(68,0) ? contexti : awayiconR.length}`));
         contexti /= Math.max(((yellowtoredR ? 5 : 2)), 1);
      while (rocket7 < 4.15) {
          let tempw = String.fromCharCode(115,97,109,112,108,101,114,95,53,95,52,51,0);
         rocket7 *= parseFloat(`${parseInt(`${rocket7}`) % 1}`);
         tempw = `${3 << (Math.min(2, tempw.length))}`;
         break;
      }
      expiredz *= parseFloat(`${configure1.length}`);
   for (let h = 0; h < 3; h++) {
      nextb += `${actionss.length + turndownF.length}`;
   }
      expiredz += parseFloat(`${3 * descH.length}`);
   for (let a = 0; a < 1; a++) {
      predictionbannerM.set(`${binddatas1.length}`, 1);
   }
   if (3 == (3 | scoreR) || 2 == (nextb.length | 3)) {
      scoreR /= Math.max((String.fromCharCode(52,0) == configure1 ? buttonO.size : configure1.length), 4);
   }
   let iconclose6 = overW.length >= 8255912;
   do {
      overW = `${binddatas1.length + 2}`;
      if (iconclose6) {
         break;
      }
   } while (iconclose6 && (overW.includes(`${predictionbannerM.size}`)));
      types_ += (String.fromCharCode(106,0) == configure1 ? turndownF.length : configure1.length);
   let starm = configure1 == String.fromCharCode(55,49,119,0);
   do {
      configure1 += "1";
      if (starm) {
         break;
      }
   } while (starm && (!configure1.endsWith(`${binddatas1.length}`)));
   if ((predictionbannerM.size % (Math.max(3, 4))) <= 3 && (predictionbannerM.size % (Math.max(9, scoreR))) <= 3) {
      predictionbannerM = new Map([[`${types_}`, types_ << (Math.min(Math.abs(3), 2))]]);
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let bootc: Map<any, any> = new Map([[String.fromCharCode(115,116,97,110,100,97,108,111,110,101,95,103,95,52,55,0),399], [String.fromCharCode(104,102,108,105,112,95,121,95,55,0),791]]);
    let popup7 = 3.0;
    let libturbomodulejsijni7 = String.fromCharCode(102,114,101,111,112,101,110,95,109,95,51,53,0);
    let rankH: Array<any> = [String.fromCharCode(107,95,50,51,95,116,114,101,102,0), String.fromCharCode(120,95,57,48,95,115,116,114,109,0), String.fromCharCode(112,114,101,115,101,108,101,99,116,95,119,95,49,52,0)];
    let bodanJ = String.fromCharCode(116,97,103,115,116,114,95,117,95,56,50,0);
    let redirectB = String.fromCharCode(114,101,112,108,97,99,101,100,95,53,95,51,49,0);
    let volumeH = false;
    let subsO = 3.0;
    let gmailX: Array<any> = [777, 53];
    let rocketH = String.fromCharCode(117,116,120,111,95,57,95,55,48,0);
    let libjsijniprofiler5: Map<any, any> = new Map([[String.fromCharCode(115,111,114,101,99,101,105,118,101,95,110,95,56,57,0),567], [String.fromCharCode(111,95,53,52,95,103,101,116,108,98,108,111,99,107,105,110,99,0),720]]);
    let klevin0 = String.fromCharCode(119,97,108,108,97,112,101,114,115,95,120,95,52,55,0);
    let telegramW = String.fromCharCode(112,107,101,121,95,112,95,50,54,0);
   while (!volumeH) {
      volumeH = redirectB.length == 33 || !volumeH;
      break;
   }
   for (let a = 0; a < 3; a++) {
      rocketH = `${parseInt(`${subsO}`) - 2}`;
   }
      gmailX = [2];
   if (5 == (3 & libjsijniprofiler5.size)) {
      klevin0 = `${(klevin0 == String.fromCharCode(110,0) ? (volumeH ? 3 : 4) : klevin0.length)}`;
   }
   for (let b = 0; b < 1; b++) {
      bodanJ = `${parseInt(`${popup7}`) * 1}`;
   }
   while (bootc.size <= 5) {
      bootc = new Map([[`${bootc.size}`, redirectB.length >> (Math.min(4, Math.abs(bootc.size)))]]);
      break;
   }
   while (1.95 >= popup7) {
      popup7 += parseFloat(`${bootc.size ^ parseInt(`${popup7}`)}`);
      break;
   }

      if (delayValue === undefined) {

      bodanJ += `${gmailX.length}`;
   if ((libjsijniprofiler5.size >> (Math.min(Math.abs(3), 2))) >= 3 && (3 >> (Math.min(4, bodanJ.length))) >= 1) {
      bodanJ = `${libturbomodulejsijni7.length | klevin0.length}`;
   }
   for (let q = 0; q < 3; q++) {
       let dangerk = true;
         dangerk = (dangerk ? dangerk : dangerk);
      let regengs = dangerk ? !dangerk : dangerk;
      do {
         dangerk = !dangerk;
         if (regengs) {
            break;
         }
      } while (regengs && (!dangerk));
          let iconqqW = String.fromCharCode(110,99,98,99,95,122,95,53,52,0);
          let progresss: Map<any, any> = new Map([[String.fromCharCode(109,95,57,56,95,116,105,99,107,101,116,0),105], [String.fromCharCode(115,108,105,99,101,95,50,95,49,53,0),358], [String.fromCharCode(107,95,51,56,95,111,102,102,108,111,97,100,0),768]]);
         dangerk = iconqqW.length < 74;
         iconqqW = `${2 + progresss.size}`;
         progresss = new Map([[`${progresss.size}`, progresss.size + 2]]);
      bootc.set(libturbomodulejsijni7, rankH.length);
   }
   let singleR = popup7 >= 8513962.0;
   do {
       let cricket6: Map<any, any> = new Map([[String.fromCharCode(118,95,57,53,95,111,117,116,108,105,110,101,0),String.fromCharCode(97,108,98,117,109,115,95,50,95,49,51,0)], [String.fromCharCode(106,95,56,49,95,100,120,116,121,0),String.fromCharCode(102,102,116,103,95,57,95,54,53,0)]]);
       let chatroombackgroundF = String.fromCharCode(120,95,55,54,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0);
       let downloaders = String.fromCharCode(101,95,54,54,95,97,115,99,101,110,100,101,114,0);
      while (chatroombackgroundF.startsWith(`${cricket6.size}`)) {
         chatroombackgroundF += `${(String.fromCharCode(78,0) == chatroombackgroundF ? cricket6.size : chatroombackgroundF.length)}`;
         break;
      }
         chatroombackgroundF = "2";
          let libruntimeexecutorq: Map<any, any> = new Map([[String.fromCharCode(112,95,50,55,95,110,111,116,0),66], [String.fromCharCode(115,99,116,112,95,114,95,52,55,0),865]]);
         cricket6.set(chatroombackgroundF, downloaders.length);
         libruntimeexecutorq = new Map([[`${libruntimeexecutorq.size}`, 1 >> (Math.min(2, Math.abs(libruntimeexecutorq.size)))]]);
         downloaders = `${chatroombackgroundF.length}`;
      for (let e = 0; e < 2; e++) {
          let l_unlockY = String.fromCharCode(105,100,102,97,95,54,95,56,52,0);
          let canvasE: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,108,105,101,110,99,101,95,109,95,57,57,0),String.fromCharCode(103,114,97,100,102,117,110,95,111,95,56,52,0)], [String.fromCharCode(117,95,51,49,95,100,105,114,0),String.fromCharCode(98,105,100,105,114,95,108,95,50,48,0)], [String.fromCharCode(117,95,50,57,95,102,111,114,109,97,116,116,101,114,115,0),String.fromCharCode(121,95,48,95,112,97,115,115,101,115,0)]]);
          let signinup0 = 4;
         chatroombackgroundF += `${3 - downloaders.length}`;
         l_unlockY += `${l_unlockY.length + canvasE.size}`;
         canvasE.set(`${signinup0}`, signinup0 % (Math.max(5, canvasE.size)));
      }
         cricket6.set(chatroombackgroundF, (chatroombackgroundF == String.fromCharCode(98,0) ? cricket6.size : chatroombackgroundF.length));
      if (!downloaders.includes(`${chatroombackgroundF.length}`)) {
         downloaders += `${cricket6.size}`;
      }
      for (let r = 0; r < 2; r++) {
          let iconarrowrightK: Array<any> = [197, 172];
         chatroombackgroundF += `${cricket6.size}`;
         iconarrowrightK.push(iconarrowrightK.length);
      }
          let privilegeK = String.fromCharCode(115,116,97,114,116,105,110,103,95,116,95,54,49,0);
          let libcxxcomponentsi = true;
          let episodec = false;
         downloaders += `${cricket6.size / 1}`;
         privilegeK += `${(String.fromCharCode(108,0) == privilegeK ? privilegeK.length : (libcxxcomponentsi ? 1 : 5))}`;
         libcxxcomponentsi = (((!libcxxcomponentsi ? 16 : privilegeK.length) * privilegeK.length) <= 16);
         episodec = privilegeK.length >= 14 && libcxxcomponentsi;
      popup7 /= Math.max((parseFloat(`${String.fromCharCode(78,0) == bodanJ ? bodanJ.length : klevin0.length}`)), 2);
      if (singleR) {
         break;
      }
   } while (singleR && (parseFloat(`${rankH.length}`) <= popup7));
   let mapbufferB = volumeH ? !volumeH : volumeH;
   do {
      volumeH = klevin0.length > 81 && libjsijniprofiler5.size > 81;
      if (mapbufferB) {
         break;
      }
   } while ((!volumeH) && mapbufferB);
      gmailX = [3];
   let profilek = 8984391 <= rocketH.length;
   do {
       let module1: Array<any> = [306, 96];
       let lineh = String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,52,95,54,51,0);
       let hejiJ = String.fromCharCode(101,120,116,110,95,113,95,54,55,0);
       let iconwechatW = 1.0;
       let dplusU = 5.0;
          let shirtC = String.fromCharCode(111,95,49,57,95,100,108,105,115,116,0);
         module1 = [parseInt(`${iconwechatW}`) / (Math.max(parseInt(`${dplusU}`), 5))];
         shirtC += `${(shirtC == String.fromCharCode(87,0) ? shirtC.length : shirtC.length)}`;
      if (1.59 <= (iconwechatW - dplusU)) {
          let libjsip = String.fromCharCode(102,95,50,95,115,105,103,110,97,108,115,0);
          let halffieldimagez = String.fromCharCode(103,114,97,121,102,95,117,95,57,52,0);
          let downarrowu: Array<any> = [135, 757];
         dplusU += libjsip.length | 2;
         libjsip = `${(halffieldimagez == String.fromCharCode(102,0) ? downarrowu.length : halffieldimagez.length)}`;
         downarrowu.push(3 + downarrowu.length);
      }
      let hejit = module1.length <= 8189130;
      do {
          let qaagw = 5;
          let disconnectedN = 5.0;
         module1 = [parseInt(`${dplusU}`)];
         qaagw += 3 << (Math.min(Math.abs(qaagw), 1));
         disconnectedN /= Math.max(4, qaagw << (Math.min(5, Math.abs(2))));
         if (hejit) {
            break;
         }
      } while (hejit && ((module1.length - 2) >= 2 || (2 - module1.length) >= 4));
      let basketball3 = hejiJ == String.fromCharCode(97,103,98,53,106,122,113,52,0);
      do {
         hejiJ += `${lineh.length}`;
         if (basketball3) {
            break;
         }
      } while (basketball3 && ((parseFloat(`${hejiJ.length}`) + iconwechatW) < 4.82 || (iconwechatW + parseFloat(`${hejiJ.length}`)) < 4.82));
          let progressV: Array<any> = [192, 400];
          let cancelY: Map<any, any> = new Map([[String.fromCharCode(107,105,116,95,51,95,49,55,0),993], [String.fromCharCode(102,95,48,95,103,105,103,97,103,114,111,117,112,0),758]]);
          let encryptorS = String.fromCharCode(118,97,108,117,101,115,95,56,95,53,57,0);
         module1.push(cancelY.size);
         progressV.push(progressV.length & encryptorS.length);
         cancelY.set(encryptorS, 1);
      while (lineh != String.fromCharCode(121,0) || hejiJ != String.fromCharCode(71,0)) {
         lineh += `${parseInt(`${dplusU}`) | hejiJ.length}`;
         break;
      }
       let malaysiap: Array<any> = [248, 600, 362];
         iconwechatW *= parseFloat(`${module1.length | malaysiap.length}`);
         malaysiap = [hejiJ.length ^ lineh.length];
      let libturbomodulejsijnia = 6562683 >= lineh.length;
      do {
          let viewerQ = String.fromCharCode(112,95,51,49,95,103,111,108,100,0);
          let bing2: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,105,110,103,95,113,95,53,53,0),603], [String.fromCharCode(118,95,57,52,95,97,97,99,101,110,99,116,97,98,0),514]]);
          let latno = String.fromCharCode(112,95,52,48,95,105,99,111,110,0);
         lineh = `${lineh.length}`;
         viewerQ = `${latno.length}`;
         bing2 = new Map([[`${bing2.size}`, viewerQ.length]]);
         latno += `${latno.length}`;
         if (libturbomodulejsijnia) {
            break;
         }
      } while ((3 > module1.length) && libturbomodulejsijnia);
      if ((malaysiap.length + 3) == 2 && 5 == (malaysiap.length + 3)) {
         hejiJ = `${(hejiJ == String.fromCharCode(122,0) ? malaysiap.length : hejiJ.length)}`;
      }
          let specs = String.fromCharCode(106,95,49,56,95,100,101,115,116,105,110,97,116,105,111,110,115,0);
          let entryy = 0;
         hejiJ += `${2 ^ specs.length}`;
         specs += "3";
         entryy *= entryy % 2;
         module1 = [module1.length];
         malaysiap = [module1.length | lineh.length];
          let downloader2 = String.fromCharCode(105,95,50,54,95,100,101,108,101,103,97,116,111,114,0);
         hejiJ = "1";
         downloader2 += `${(downloader2 == String.fromCharCode(115,0) ? downloader2.length : downloader2.length)}`;
      rocketH = `${((volumeH ? 2 : 2) + 3)}`;
      if (profilek) {
         break;
      }
   } while ((4 >= rocketH.length) && profilek);
        if (showSlider === 'none' && !paused) {

      rankH.push(((volumeH ? 5 : 2) | parseInt(`${subsO}`)));
   let libapminsightaK = 5822097 >= redirectB.length;
   do {
      redirectB += `${klevin0.length >> (Math.min(Math.abs(2), 2))}`;
      if (libapminsightaK) {
         break;
      }
   } while ((bodanJ.endsWith(redirectB)) && libapminsightaK);
   let iconL = String.fromCharCode(113,50,119,114,107,109,106,103,56,0) == libturbomodulejsijni7;
   do {
       let defaultroombgH = 2;
       let setting4 = 2;
       let aboutm = String.fromCharCode(116,95,49,48,95,102,117,110,99,116,105,111,110,115,0);
       let successA: Map<any, any> = new Map([[String.fromCharCode(115,95,55,52,95,97,99,116,111,114,0),String.fromCharCode(118,95,54,55,95,108,97,112,112,101,100,0)], [String.fromCharCode(107,95,54,49,95,112,111,108,105,99,101,0),String.fromCharCode(110,115,117,105,114,103,98,97,95,116,95,49,52,0)]]);
         successA = new Map([[`${defaultroombgH}`, setting4 << (Math.min(Math.abs(1), 1))]]);
          let libavcodec2 = 3.0;
         setting4 &= 1 >> (Math.min(2, Math.abs(parseInt(`${libavcodec2}`))));
          let iconR = String.fromCharCode(116,95,57,57,95,112,114,111,98,97,98,105,108,105,116,121,0);
         setting4 ^= 2 << (Math.min(4, Math.abs(successA.size)));
         iconR = `${iconR.length}`;
         aboutm += `${(String.fromCharCode(97,0) == aboutm ? aboutm.length : setting4)}`;
      if ((4 << (Math.min(1, aboutm.length))) == 4) {
         aboutm = `${aboutm.length}`;
      }
          let blacklist3 = 3;
          let footballtrophy2: Array<any> = [112, 537, 428];
          let borderless5 = 3.0;
         aboutm = "3";
         blacklist3 /= Math.max(parseInt(`${borderless5}`) - 1, 3);
         footballtrophy2.push(footballtrophy2.length);
         borderless5 += parseFloat(`${2 >> (Math.min(4, footballtrophy2.length))}`);
          let material9 = 4.0;
         setting4 += 1 * setting4;
         material9 *= 1 * parseInt(`${material9}`);
      while (2 > aboutm.length) {
         aboutm = `${aboutm.length}`;
         break;
      }
       let selectedo = 0.0;
       let search9 = 5.0;
      if (4 == (aboutm.length | 5)) {
          let datau: Map<any, any> = new Map([[String.fromCharCode(97,95,52,53,95,114,117,110,116,105,109,101,0),341], [String.fromCharCode(109,111,118,101,112,97,103,101,95,116,95,54,53,0),359]]);
          let imagenomoredataa = 2.0;
          let reddownarrowU: Map<any, any> = new Map([[String.fromCharCode(100,95,54,52,95,104,115,99,97,108,101,114,0),975], [String.fromCharCode(109,95,56,50,95,100,101,99,105,109,97,116,111,114,0),470], [String.fromCharCode(98,105,116,101,95,118,95,52,54,0),669]]);
          let yellowscoreballw = String.fromCharCode(118,95,52,48,95,98,105,97,115,0);
          let mbnativeS = true;
         successA.set(`${mbnativeS}`, (setting4 * (mbnativeS ? 1 : 5)));
         datau = new Map([[`${imagenomoredataa}`, parseInt(`${imagenomoredataa}`)]]);
         reddownarrowU.set(`${imagenomoredataa}`, 3 + datau.size);
         yellowscoreballw = `${parseInt(`${imagenomoredataa}`) << (Math.min(Math.abs(2), 5))}`;
      }
          let predictionbuttonf = String.fromCharCode(108,95,53,56,95,104,111,108,100,101,114,115,0);
          let handlerQ = 4;
         search9 -= predictionbuttonf.length;
         predictionbuttonf += `${handlerQ % (Math.max(handlerQ, 1))}`;
         successA = new Map([[`${defaultroombgH}`, defaultroombgH + setting4]]);
      libturbomodulejsijni7 = `${1 - parseInt(`${subsO}`)}`;
      if (iconL) {
         break;
      }
   } while (iconL && (3 > libturbomodulejsijni7.length));
   while (redirectB.length == libjsijniprofiler5.size) {
      redirectB += `${klevin0.length}`;
      break;
   }
   for (let c = 0; c < 1; c++) {
      rocketH = `${libjsijniprofiler5.size % (Math.max(2, 2))}`;
   }
      popup7 += parseFloat(`${2}`);
   let unreadJ = gmailX.length <= 5102463;
   do {
       let index4 = true;
       let tickedB = 4;
       let bodan7 = true;
       let unselectedc = 2.0;
       let schedulerI = 3.0;
         unselectedc *= (parseFloat(`${parseInt(`${schedulerI}`) / (Math.max(4, (bodan7 ? 1 : 1)))}`));
          let nexto = 2.0;
          let untick_ = 4;
          let champion0: Map<any, any> = new Map([[String.fromCharCode(104,95,54,50,95,117,110,114,101,102,99,111,117,110,116,0),354], [String.fromCharCode(116,111,117,99,104,101,115,95,119,95,54,51,0),715], [String.fromCharCode(120,95,50,50,95,114,117,101,0),37]]);
         unselectedc -= parseFloat(`${2 ^ champion0.size}`);
         nexto += parseInt(`${nexto}`);
         untick_ <<= Math.min(Math.abs(2 >> (Math.min(Math.abs(untick_), 3))), 2);
         champion0.set(`${nexto}`, untick_ - parseInt(`${nexto}`));
      for (let m = 0; m < 2; m++) {
         schedulerI *= (parseFloat(`${parseInt(`${unselectedc}`) + (bodan7 ? 3 : 2)}`));
      }
          let loadingK: Array<any> = [String.fromCharCode(115,97,108,116,101,100,95,104,95,49,55,0), String.fromCharCode(107,95,57,48,95,99,108,97,110,103,0), String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,95,119,95,56,51,0)];
          let clockY = String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,103,95,57,49,0);
         tickedB -= parseInt(`${unselectedc}`) / 1;
         loadingK = [clockY.length];
         clockY = `${clockY.length & 3}`;
       let iconsharefriendsL = 4;
       let fieldP = 1;
      let logoq = iconsharefriendsL >= 8275908;
      do {
         iconsharefriendsL &= fieldP;
         if (logoq) {
            break;
         }
      } while (logoq && ((fieldP / 1) == 1 && (fieldP / (Math.max(iconsharefriendsL, 6))) == 1));
          let redscoreball6 = String.fromCharCode(119,95,55,50,95,114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
         unselectedc -= parseFloat(`${2 * redscoreball6.length}`);
       let main_vH: Map<any, any> = new Map([[String.fromCharCode(119,114,106,112,103,99,111,109,95,106,95,57,51,0),false ], [String.fromCharCode(97,95,56,56,95,108,111,119,112,97,115,115,0),true ]]);
       let libcxxcomponents9 = String.fromCharCode(97,117,116,111,109,97,116,105,99,95,98,95,51,53,0);
       let configurex = String.fromCharCode(97,95,54,50,95,111,112,117,115,102,105,108,101,0);
      if (configurex.length > libcxxcomponents9.length) {
         libcxxcomponents9 += "3";
      }
      for (let h = 0; h < 3; h++) {
         configurex = `${(tickedB << (Math.min(1, Math.abs((index4 ? 5 : 5)))))}`;
      }
         libcxxcomponents9 = "2";
      for (let m = 0; m < 1; m++) {
         unselectedc /= Math.max(parseFloat(`${configurex.length}`), 3);
      }
          let pressureb = 1.0;
          let binddatasJ: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,98,111,97,114,100,95,117,95,54,48,0),43], [String.fromCharCode(113,117,105,99,107,95,105,95,54,53,0),193]]);
          let private_du = String.fromCharCode(115,95,53,52,95,117,110,114,101,118,101,114,115,101,100,0);
         unselectedc *= parseFloat(`${3 & parseInt(`${schedulerI}`)}`);
         pressureb -= parseFloat(`${binddatasJ.size}`);
         binddatasJ = new Map([[`${binddatasJ.size}`, binddatasJ.size]]);
         private_du = "1";
      if (1 == (main_vH.size / 3)) {
         main_vH = new Map([[`${main_vH.size}`, 3]]);
      }
      gmailX = [2];
      if (unreadJ) {
         break;
      }
   } while (unreadJ && ((gmailX.length & 1) <= 5 && gmailX.length <= 1));
          setShowControls(false)
        }
      } else {

   let firebaseT = 7756989 >= rankH.length;
   do {
      rankH = [2 * telegramW.length];
      if (firebaseT) {
         break;
      }
   } while ((libturbomodulejsijni7.includes(`${rankH.length}`)) && firebaseT);
   let privilege3 = libturbomodulejsijni7.length >= 5746675;
   do {
      libturbomodulejsijni7 = `${klevin0.length}`;
      if (privilege3) {
         break;
      }
   } while ((telegramW != libturbomodulejsijni7) && privilege3);
      subsO -= 3;
      gmailX = [((volumeH ? 2 : 5))];
   while (!volumeH) {
      volumeH = klevin0.length <= parseInt(`${subsO}`);
      break;
   }
      bodanJ = `${1 ^ rankH.length}`;
      popup7 /= Math.max(2, parseFloat(`${1 & parseInt(`${subsO}`)}`));
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let downloadedw: Map<any, any> = new Map([[String.fromCharCode(115,116,111,112,112,101,100,95,118,95,53,0),939], [String.fromCharCode(104,101,97,114,116,98,101,97,116,95,114,95,54,48,0),966], [String.fromCharCode(116,95,49,57,95,119,97,116,99,104,100,111,103,0),55]]);
    let entryY = 0.0;
    let update__yy = String.fromCharCode(99,117,108,115,104,105,102,116,95,120,95,55,48,0);
    let castD = String.fromCharCode(100,101,109,111,116,101,95,98,95,56,56,0);
    let bgvipxvodA = 3;
    let anythinkc: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,122,95,56,51,0),true ], [String.fromCharCode(112,95,49,49,95,101,120,99,101,101,100,0),true ], [String.fromCharCode(97,95,51,95,98,111,114,105,110,103,115,115,108,0),false ]]);
    let backC = String.fromCharCode(114,95,49,57,95,97,100,103,114,111,117,112,0);
    let scorepopsoundV: Array<any> = [300, 900, 931];
    let homeinactiveI: Array<any> = [987, 875, 104];
   let nalyticsJ = update__yy == String.fromCharCode(54,110,98,98,100,119,48,121,102,0);
   do {
      update__yy = `${castD.length << (Math.min(5, scorepopsoundV.length))}`;
      if (nalyticsJ) {
         break;
      }
   } while (nalyticsJ && ((bgvipxvodA % (Math.max(update__yy.length, 10))) == 1 || 3 == (bgvipxvodA % 1)));
      anythinkc = new Map([[`${anythinkc.size}`, anythinkc.size]]);
   while ((entryY / 4.47) <= 2.62) {
       let ping9: Map<any, any> = new Map([[String.fromCharCode(99,95,51,48,95,98,105,116,108,105,110,101,99,104,117,110,107,121,0),889], [String.fromCharCode(109,112,101,103,117,116,105,108,115,95,117,95,55,50,0),26], [String.fromCharCode(109,111,114,112,104,101,100,95,52,95,52,55,0),754]]);
       let related3 = String.fromCharCode(105,110,100,97,116,97,95,110,95,55,55,0);
       let acceptedC = String.fromCharCode(109,97,99,104,105,110,101,95,116,95,57,49,0);
       let defaultteam5: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,101,116,116,105,95,57,95,52,55,0),456], [String.fromCharCode(98,101,120,116,95,107,95,54,52,0),5]]);
       let halft = String.fromCharCode(112,114,101,99,95,109,95,54,51,0);
      if (related3.length == ping9.size) {
          let plusG = String.fromCharCode(115,104,101,101,116,95,114,95,55,53,0);
          let predictionbanner3 = String.fromCharCode(115,95,53,50,95,114,111,116,97,116,105,111,110,0);
          let bell6 = String.fromCharCode(108,95,49,48,48,95,114,101,113,117,105,114,101,100,0);
          let matchesI = true;
         related3 += `${(ping9.size - (matchesI ? 1 : 4))}`;
         plusG = "3";
         predictionbanner3 = `${bell6.length}`;
         bell6 = `${predictionbanner3.length % (Math.max(1, 5))}`;
         matchesI = predictionbanner3.length <= 44;
      }
       let gmail_: Array<any> = [String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,121,95,50,49,0), String.fromCharCode(107,95,57,52,95,100,105,97,109,101,116,101,114,0)];
       let defaultlogoV: Array<any> = [355, 402];
      let progressF = defaultteam5.size <= 6198402;
      do {
         defaultteam5 = new Map([[halft, acceptedC.length]]);
         if (progressF) {
            break;
         }
      } while ((3 < (ping9.size % (Math.max(defaultteam5.size, 9))) && 3 < (ping9.size % 3)) && progressF);
          let utilsB = 5;
          let uimanagerT = 1.0;
          let logout0 = String.fromCharCode(100,101,99,114,101,109,101,110,116,95,104,95,54,51,0);
         related3 = "1";
         utilsB &= 2;
         uimanagerT *= utilsB & logout0.length;
         logout0 = `${parseInt(`${uimanagerT}`)}`;
         halft = `${1 & halft.length}`;
          let libsentryJ: Map<any, any> = new Map([[String.fromCharCode(99,97,116,99,104,95,100,95,52,53,0),String.fromCharCode(99,95,51,55,95,117,112,108,111,97,100,105,110,103,0)], [String.fromCharCode(122,95,57,55,95,108,111,110,103,110,111,105,115,101,0),String.fromCharCode(116,95,51,51,95,101,99,114,101,99,111,118,101,114,0)], [String.fromCharCode(98,101,108,111,110,103,95,107,95,56,54,0),String.fromCharCode(115,117,109,100,95,107,95,55,54,0)]]);
         ping9 = new Map([[`${defaultlogoV.length}`, gmail_.length]]);
         libsentryJ.set(`${libsentryJ.size}`, 2);
      for (let k = 0; k < 3; k++) {
         ping9 = new Map([[halft, halft.length << (Math.min(Math.abs(1), 2))]]);
      }
      for (let a = 0; a < 2; a++) {
         acceptedC += `${halft.length | gmail_.length}`;
      }
         ping9 = new Map([[`${ping9.size}`, (String.fromCharCode(111,0) == related3 ? related3.length : ping9.size)]]);
       let borderlesso = String.fromCharCode(122,95,56,52,95,112,114,111,109,112,101,103,0);
      let constantsy = ping9.size <= 7174941;
      do {
          let libglogt = 1.0;
          let launcherJ = String.fromCharCode(102,95,49,54,95,111,110,108,121,0);
          let libnmsu = String.fromCharCode(118,105,115,117,97,108,105,122,97,116,105,111,110,95,111,95,51,50,0);
          let nativeexP = String.fromCharCode(98,95,57,56,95,98,114,105,100,103,105,110,103,0);
         ping9 = new Map([[libnmsu, 2]]);
         libglogt += nativeexP.length * launcherJ.length;
         launcherJ = `${(launcherJ == String.fromCharCode(87,0) ? parseInt(`${libglogt}`) : launcherJ.length)}`;
         libnmsu = "2";
         nativeexP += `${launcherJ.length << (Math.min(3, nativeexP.length))}`;
         if (constantsy) {
            break;
         }
      } while ((!Array.from(ping9.values()).includes(gmail_.length)) && constantsy);
      let thailandI = 6152272 <= defaultteam5.size;
      do {
          let modelsh: Map<any, any> = new Map([[String.fromCharCode(113,95,53,54,95,116,97,114,103,101,116,0),String.fromCharCode(104,95,52,48,95,120,119,109,97,0)], [String.fromCharCode(114,95,49,50,95,115,101,114,105,97,108,105,122,105,110,103,0),String.fromCharCode(103,95,49,56,0)], [String.fromCharCode(97,108,98,117,109,115,95,57,95,50,50,0),String.fromCharCode(118,95,54,51,95,115,101,116,0)]]);
         defaultteam5 = new Map([[`${modelsh.size}`, related3.length | modelsh.size]]);
         if (thailandI) {
            break;
         }
      } while ((2 > (3 >> (Math.min(1, related3.length)))) && thailandI);
      while ((ping9.size << (Math.min(Math.abs(1), 4))) < 2 && (related3.length << (Math.min(Math.abs(1), 1))) < 3) {
         related3 = `${borderlesso.length << (Math.min(Math.abs(2), 4))}`;
         break;
      }
         borderlesso += `${related3.length << (Math.min(Math.abs(2), 3))}`;
         defaultlogoV = [(String.fromCharCode(49,0) == related3 ? related3.length : borderlesso.length)];
      entryY *= parseFloat(`${downloadedw.size >> (Math.min(Math.abs(1), 4))}`);
      break;
   }
      downloadedw.set(`${update__yy}`, downloadedw.size);
   let incidentj = castD.length >= 6257914;
   do {
       let results = String.fromCharCode(115,97,108,116,95,112,95,49,49,0);
       let gmailc: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,121,95,51,52,0),false ], [String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,108,95,50,53,0),true ], [String.fromCharCode(111,95,51,95,105,115,116,114,101,97,109,0),false ]]);
       let icontransferclubi: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,57,95,56,53,0),true ], [String.fromCharCode(109,97,107,101,102,105,108,101,95,104,95,49,0),false ], [String.fromCharCode(115,116,105,99,107,101,114,95,103,95,55,53,0),false ]]);
       let awayiconY: Map<any, any> = new Map([[String.fromCharCode(116,95,53,49,95,115,119,105,116,99,104,98,97,115,101,0),254], [String.fromCharCode(103,95,55,57,95,100,105,118,105,115,111,114,0),856]]);
      let crownC = 8330823 <= gmailc.size;
      do {
          let soundU: Map<any, any> = new Map([[String.fromCharCode(104,95,55,56,95,116,119,105,100,100,108,101,0),876], [String.fromCharCode(97,95,53,95,99,111,108,105,110,101,97,114,0),387], [String.fromCharCode(104,95,56,54,95,108,111,103,115,0),544]]);
          let stationsG = false;
         gmailc = new Map([[`${awayiconY.size}`, awayiconY.size * 1]]);
         soundU = new Map([[`${soundU.size}`, soundU.size - 3]]);
         stationsG = null == soundU.get(`${stationsG}`);
         if (crownC) {
            break;
         }
      } while (crownC && (!Array.from(gmailc.keys()).includes(`${awayiconY.size}`)));
         gmailc = new Map([[`${icontransferclubi.size}`, icontransferclubi.size]]);
          let libavcodecB = String.fromCharCode(100,95,55,52,95,116,102,120,100,0);
          let iconwatch3 = String.fromCharCode(99,97,110,99,101,108,108,101,114,95,122,95,52,54,0);
         icontransferclubi = new Map([[results, results.length % (Math.max(iconwatch3.length, 7))]]);
         libavcodecB = `${libavcodecB.length << (Math.min(3, libavcodecB.length))}`;
         iconwatch3 = `${(String.fromCharCode(122,0) == libavcodecB ? libavcodecB.length : libavcodecB.length)}`;
      for (let h = 0; h < 2; h++) {
         icontransferclubi.set(`${results}`, gmailc.size % (Math.max(4, results.length)));
      }
         results += "3";
         icontransferclubi.set(`${awayiconY.size}`, awayiconY.size);
      if (1 <= (icontransferclubi.size | gmailc.size)) {
         gmailc = new Map([[`${icontransferclubi.size}`, 1 | icontransferclubi.size]]);
      }
      let giftbuttonT = results == String.fromCharCode(98,114,120,0);
      do {
         results = `${awayiconY.size}`;
         if (giftbuttonT) {
            break;
         }
      } while ((gmailc.size < results.length) && giftbuttonT);
         awayiconY = new Map([[`${gmailc.size}`, gmailc.size]]);
         awayiconY.set(`${awayiconY.size}`, 2);
          let register_phO = true;
          let penaltymatchicon8: Array<any> = [508, 276];
          let scrollviewP = 0;
         gmailc.set(`${scrollviewP}`, scrollviewP);
         register_phO = penaltymatchicon8.length <= 99;
         penaltymatchicon8.push(3);
      for (let u = 0; u < 1; u++) {
          let connection5 = String.fromCharCode(121,95,50,57,95,100,117,97,108,105,110,112,117,116,0);
          let iconpointscore0 = String.fromCharCode(104,111,116,95,122,95,52,53,0);
         gmailc.set(`${awayiconY.size}`, awayiconY.size);
         connection5 += `${iconpointscore0.length}`;
         iconpointscore0 = `${(String.fromCharCode(81,0) == iconpointscore0 ? connection5.length : iconpointscore0.length)}`;
      }
      castD += `${3 * castD.length}`;
      if (incidentj) {
         break;
      }
   } while (incidentj && (1 <= castD.length));

    if (isLocked) {

   for (let x = 0; x < 2; x++) {
      backC = `${2 >> (Math.min(3, backC.length))}`;
   }
   let filedo = String.fromCharCode(56,100,105,50,120,113,57,0) == castD;
   do {
      castD += "2";
      if (filedo) {
         break;
      }
   } while (filedo && (update__yy.length > 4));
   for (let t = 0; t < 3; t++) {
       let headerW: Array<any> = [906, 156];
       let photo9 = String.fromCharCode(105,108,108,101,103,97,108,95,52,95,51,0);
       let imagemanagerO = String.fromCharCode(111,95,52,50,95,97,100,97,112,116,97,116,105,111,110,115,101,116,0);
       let filter3 = String.fromCharCode(102,99,111,100,101,95,57,95,50,54,0);
      while (!photo9.startsWith(filter3)) {
          let catalogj = String.fromCharCode(119,95,53,95,113,101,120,112,0);
         photo9 = "3";
         catalogj = `${catalogj.length >> (Math.min(Math.abs(1), 1))}`;
         break;
      }
      if (filter3 != imagemanagerO) {
         imagemanagerO = `${imagemanagerO.length}`;
      }
      for (let x = 0; x < 3; x++) {
         filter3 += `${headerW.length}`;
      }
      for (let u = 0; u < 1; u++) {
          let sansn = String.fromCharCode(120,95,56,53,95,101,110,117,109,0);
          let whistleT = 4.0;
          let materialD = String.fromCharCode(99,95,51,51,95,118,97,99,97,110,116,0);
          let ewardedX: Map<any, any> = new Map([[String.fromCharCode(112,105,110,107,95,97,95,57,55,0),583], [String.fromCharCode(101,105,103,104,116,95,48,95,50,55,0),74]]);
         filter3 += `${photo9.length - 3}`;
         sansn += `${(String.fromCharCode(119,0) == sansn ? ewardedX.size : sansn.length)}`;
         whistleT -= parseFloat(`${materialD.length}`);
         materialD += `${materialD.length}`;
         ewardedX = new Map([[`${ewardedX.size}`, materialD.length & 3]]);
      }
      while (imagemanagerO == filter3) {
         filter3 = `${filter3.length}`;
         break;
      }
      homeinactiveI.push((update__yy == String.fromCharCode(49,0) ? update__yy.length : parseInt(`${entryY}`)));
   }
   if ((parseInt(`${entryY}`) / (Math.max(10, update__yy.length))) < 4 && 2.15 < (3.30 / (Math.max(3, entryY)))) {
       let iconnewsshareE = String.fromCharCode(102,108,116,117,105,110,116,95,121,95,53,48,0);
       let statisticsinactivel: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,111,116,101,95,53,95,51,0),879], [String.fromCharCode(101,95,57,54,95,112,97,100,100,101,100,0),646], [String.fromCharCode(115,95,53,56,95,108,97,110,103,117,97,103,101,0),371]]);
       let episodek = 3;
       let shared9 = 3.0;
      while ((1 - episodek) <= 3 || 2.60 <= (shared9 - 4.36)) {
         episodek |= episodek | 2;
         break;
      }
       let imagesh = String.fromCharCode(97,98,111,114,116,95,108,95,54,48,0);
      if ((parseFloat(`${imagesh.length}`) - shared9) > 3.2 && (parseInt(`${shared9}`) - imagesh.length) > 4) {
         shared9 += parseFloat(`${2}`);
      }
      for (let x = 0; x < 2; x++) {
          let malaysia1 = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,95,112,95,57,51,0);
          let yellowcirclebgl = 2.0;
          let libcxxcomponentsW = 4;
         shared9 /= Math.max(4, (parseFloat(`${String.fromCharCode(120,0) == imagesh ? parseInt(`${shared9}`) : imagesh.length}`)));
         malaysia1 += `${1 / (Math.max(2, libcxxcomponentsW))}`;
         yellowcirclebgl *= 1;
         libcxxcomponentsW %= Math.max(3, parseInt(`${yellowcirclebgl}`) ^ 1);
      }
          let libswresamplez = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,51,95,53,56,0);
          let sigmobE = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,95,101,95,49,48,48,0);
         imagesh += "3";
         libswresamplez = `${libswresamplez.length / (Math.max(sigmobE.length, 3))}`;
         sigmobE = `${libswresamplez.length / (Math.max(sigmobE.length, 1))}`;
       let combineB = true;
       let configy = false;
          let whiteanimationliveo = String.fromCharCode(118,105,115,105,98,108,101,95,54,95,53,56,0);
          let topic2: Array<any> = [689, 90, 388];
          let yellowcirclebgT = String.fromCharCode(107,101,121,105,100,95,112,95,52,48,0);
         configy = parseFloat(`${imagesh.length}`) > shared9;
         whiteanimationliveo = "3";
         topic2 = [topic2.length / 1];
         yellowcirclebgT += `${topic2.length}`;
          let imagenomoredataq = 2.0;
          let placementN: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,98,111,120,95,56,95,55,54,0),1], [String.fromCharCode(105,95,54,50,95,98,97,116,116,101,114,121,0),857]]);
          let teamdetailsbgD: Map<any, any> = new Map([[String.fromCharCode(119,101,120,112,97,110,100,95,118,95,49,0),795], [String.fromCharCode(110,95,54,48,95,112,116,105,111,110,115,0),740]]);
         iconnewsshareE = `${((combineB ? 2 : 4) / (Math.max(2, parseInt(`${imagenomoredataq}`))))}`;
         imagenomoredataq -= teamdetailsbgD.size;
         placementN = new Map([[`${teamdetailsbgD.size}`, 3]]);
       let matchf = String.fromCharCode(112,101,115,113,95,121,95,54,53,0);
          let listP = String.fromCharCode(100,95,56,57,95,109,97,105,110,98,117,110,100,108,101,0);
         shared9 += parseFloat(`${3}`);
         listP = `${listP.length}`;
      let shirto = 5884034 <= episodek;
      do {
         episodek &= matchf.length;
         if (shirto) {
            break;
         }
      } while (shirto && (4 < (episodek / (Math.max(statisticsinactivel.size, 7))) && (episodek / (Math.max(statisticsinactivel.size, 3))) < 4));
      update__yy += `${statisticsinactivel.size}`;
   }
   for (let q = 0; q < 3; q++) {
      entryY *= parseFloat(`${2 - bgvipxvodA}`);
   }
      

      homeinactiveI = [homeinactiveI.length >> (Math.min(4, Math.abs(anythinkc.size)))];
   while (scorepopsoundV.includes(bgvipxvodA)) {
      scorepopsoundV = [anythinkc.size % 1];
      break;
   }
   for (let j = 0; j < 1; j++) {
      downloadedw.set(`${bgvipxvodA}`, bgvipxvodA);
   }
   let fill1 = 5870771.0 <= entryY;
   do {
      entryY += parseFloat(`${downloadedw.size}`);
      if (fill1) {
         break;
      }
   } while (fill1 && (5.55 <= entryY));
      bgvipxvodA |= anythinkc.size;
      setIsLocked(false);
    } else {

       let iconsharefriendsL = 3.0;
       let unreadF = String.fromCharCode(98,95,54,56,95,104,108,115,112,108,97,121,108,105,115,116,0);
       let megaphoneW = String.fromCharCode(102,95,54,95,115,97,109,112,108,101,114,97,116,101,115,0);
      for (let c = 0; c < 3; c++) {
         iconsharefriendsL *= (parseFloat(`${megaphoneW == String.fromCharCode(113,0) ? parseInt(`${iconsharefriendsL}`) : megaphoneW.length}`));
      }
      if (5.67 <= (parseFloat(`${unreadF.length}`) * iconsharefriendsL) || (unreadF.length * parseInt(`${iconsharefriendsL}`)) <= 5) {
          let basketballawayteamC: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,101,114,95,100,95,53,57,0),735], [String.fromCharCode(120,95,51,48,95,109,117,108,116,105,112,108,101,120,0),540]]);
          let shootyesgoalW = 1.0;
          let unselectedx = 4;
          let castH: Map<any, any> = new Map([[String.fromCharCode(102,95,49,50,95,98,114,111,119,115,101,0),String.fromCharCode(109,95,56,50,95,110,111,110,98,0)], [String.fromCharCode(111,112,101,110,101,100,95,118,95,53,49,0),String.fromCharCode(109,111,100,101,108,95,115,95,55,56,0)]]);
          let showless3: Array<any> = [329, 334, 125];
         iconsharefriendsL /= Math.max(1, parseFloat(`${parseInt(`${shootyesgoalW}`)}`));
         basketballawayteamC.set(`${unselectedx}`, unselectedx);
         shootyesgoalW -= 2;
         castH.set(`${unselectedx}`, unselectedx);
         showless3.push(unselectedx);
      }
          let scrollview_ = false;
          let actionw = 0;
         unreadF += `${actionw}`;
         scrollview_ = (scrollview_ ? !scrollview_ : !scrollview_);
         actionw -= ((scrollview_ ? 5 : 2) + (scrollview_ ? 1 : 4));
      let mimol = iconsharefriendsL <= 7585509.0;
      do {
          let bottomS = String.fromCharCode(120,95,51,50,95,105,110,116,101,114,97,99,116,0);
         iconsharefriendsL -= parseFloat(`${2 & bottomS.length}`);
         if (mimol) {
            break;
         }
      } while ((1 <= (parseInt(`${iconsharefriendsL}`) / (Math.max(megaphoneW.length, 10))) && (parseInt(`${iconsharefriendsL}`) / 1) <= 1) && mimol);
      for (let k = 0; k < 3; k++) {
         unreadF += `${unreadF.length}`;
      }
      for (let p = 0; p < 2; p++) {
          let actions7: Array<any> = [374, 422];
          let homey = 3;
         unreadF = "3";
         actions7.push(2);
         homey *= homey;
      }
         iconsharefriendsL += parseFloat(`${parseInt(`${iconsharefriendsL}`)}`);
      while ((iconsharefriendsL + 1.15) <= 2.89 || (parseFloat(`${unreadF.length}`) + iconsharefriendsL) <= 1.15) {
         unreadF += `${megaphoneW.length}`;
         break;
      }
          let changeM = 2.0;
          let paginationi: Array<any> = [907, 104];
          let canvas3: Map<any, any> = new Map([[String.fromCharCode(122,95,55,53,95,99,111,109,112,101,110,115,97,116,105,111,110,0),182], [String.fromCharCode(102,95,49,57,95,101,120,97,110,100,101,100,0),48]]);
         iconsharefriendsL -= parseFloat(`${1}`);
         changeM *= parseFloat(`${parseInt(`${changeM}`)}`);
         paginationi.push(parseInt(`${changeM}`));
         canvas3 = new Map([[`${paginationi.length}`, paginationi.length & parseInt(`${changeM}`)]]);
      castD = `${backC.length}`;
      homeinactiveI = [homeinactiveI.length % (Math.max(1, 4))];
   for (let i = 0; i < 3; i++) {
      bgvipxvodA >>= Math.min(Math.abs(castD.length - backC.length), 2);
   }
   let defaultfootballbg8 = scorepopsoundV.length >= 7275499;
   do {
      scorepopsoundV.push(2);
      if (defaultfootballbg8) {
         break;
      }
   } while (defaultfootballbg8 && (!scorepopsoundV.includes(bgvipxvodA)));
       let defaultfootballbgA = String.fromCharCode(115,95,49,50,95,104,115,116,114,105,110,103,0);
       let snewinterstitial0 = String.fromCharCode(100,111,110,97,116,101,95,101,95,56,0);
      for (let i = 0; i < 2; i++) {
          let checkbox4 = true;
         defaultfootballbgA += `${(String.fromCharCode(49,0) == defaultfootballbgA ? defaultfootballbgA.length : (checkbox4 ? 1 : 3))}`;
      }
         defaultfootballbgA = `${defaultfootballbgA.length}`;
      while (defaultfootballbgA == String.fromCharCode(86,0) && snewinterstitial0.length <= 5) {
          let nendw = String.fromCharCode(118,109,110,99,95,106,95,57,48,0);
          let iconstarz = true;
          let collectiona: Array<any> = [722, 450];
         defaultfootballbgA += `${collectiona.length / 3}`;
         nendw += `${(String.fromCharCode(100,0) == nendw ? nendw.length : nendw.length)}`;
         iconstarz = nendw.length > 42 || String.fromCharCode(53,0) == nendw;
         break;
      }
      while (defaultfootballbgA != String.fromCharCode(83,0)) {
         snewinterstitial0 += `${1 ^ defaultfootballbgA.length}`;
         break;
      }
         defaultfootballbgA = `${defaultfootballbgA.length}`;
         defaultfootballbgA = `${defaultfootballbgA.length}`;
      anythinkc = new Map([[update__yy, update__yy.length >> (Math.min(backC.length, 2))]]);
      

   for (let l = 0; l < 1; l++) {
       let zhuboA = 1.0;
       let cedbadcebfbfbfbcfecbcb = String.fromCharCode(116,95,55,53,95,97,110,105,109,97,116,105,111,110,115,0);
       let fastforwardh = 2;
         fastforwardh /= Math.max(3, 3);
      while (cedbadcebfbfbfbcfecbcb.length > 5) {
          let sportsn = String.fromCharCode(116,95,56,48,95,111,118,101,114,97,108,108,0);
          let bootsplashn = 5.0;
          let animationV: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,97,118,103,95,110,95,57,52,0),34], [String.fromCharCode(121,95,50,53,95,118,115,121,110,99,0),59], [String.fromCharCode(112,117,115,104,98,97,99,107,95,102,95,53,0),196]]);
         zhuboA *= parseFloat(`${1 % (Math.max(3, cedbadcebfbfbfbcfecbcb.length))}`);
         sportsn += "1";
         bootsplashn /= Math.max(parseInt(`${bootsplashn}`) - sportsn.length, 1);
         animationV.set(`${sportsn}`, sportsn.length);
         break;
      }
         cedbadcebfbfbfbcfecbcb += `${cedbadcebfbfbfbcfecbcb.length}`;
          let transfer8 = String.fromCharCode(109,95,57,51,95,114,101,115,101,116,0);
         fastforwardh <<= Math.min(Math.abs(2 << (Math.min(3, Math.abs(parseInt(`${zhuboA}`))))), 1);
         transfer8 = `${(String.fromCharCode(117,0) == transfer8 ? transfer8.length : transfer8.length)}`;
         fastforwardh <<= Math.min(Math.abs(cedbadcebfbfbfbcfecbcb.length / (Math.max(5, fastforwardh))), 3);
      for (let e = 0; e < 1; e++) {
         zhuboA /= Math.max(4, parseFloat(`${fastforwardh << (Math.min(5, Math.abs(1)))}`));
      }
      for (let d = 0; d < 3; d++) {
          let signinupY: Map<any, any> = new Map([[String.fromCharCode(103,101,116,112,116,114,95,57,95,49,52,0),939], [String.fromCharCode(113,112,113,115,99,97,108,101,95,57,95,56,57,0),532]]);
         cedbadcebfbfbfbcfecbcb = `${signinupY.size ^ parseInt(`${zhuboA}`)}`;
      }
       let diceq: Map<any, any> = new Map([[String.fromCharCode(116,95,56,55,95,103,114,97,110,117,108,97,114,105,116,121,0),String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,120,95,56,57,0)], [String.fromCharCode(99,95,57,53,95,112,101,114,109,97,110,101,110,116,0),String.fromCharCode(99,108,111,99,107,119,105,115,101,95,99,95,52,52,0)]]);
       let shirt5: Array<any> = [874, 761, 730];
       let splash6: Array<any> = [304, 396, 304];
      scorepopsoundV = [fastforwardh ^ parseInt(`${entryY}`)];
   }
      bgvipxvodA ^= backC.length;
      bgvipxvodA -= parseInt(`${entryY}`);
   let details6 = 7823766.0 <= entryY;
   do {
       let libyogav = String.fromCharCode(101,95,52,51,95,112,114,101,100,0);
       let gesturesk = String.fromCharCode(98,101,110,99,95,54,95,52,49,0);
       let leaguedetailsbgw = String.fromCharCode(120,95,50,55,95,98,111,117,110,99,105,110,101,115,115,0);
       let episode5 = false;
          let icontransferclubZ = String.fromCharCode(101,120,116,114,97,115,95,110,95,57,57,0);
          let gmaila: Array<any> = [97, 57, 334];
          let rules_ = String.fromCharCode(112,105,110,99,104,95,119,95,56,51,0);
         leaguedetailsbgw = `${gesturesk.length / (Math.max(rules_.length, 4))}`;
         icontransferclubZ += `${(icontransferclubZ == String.fromCharCode(85,0) ? icontransferclubZ.length : gmaila.length)}`;
         gmaila = [(icontransferclubZ == String.fromCharCode(86,0) ? icontransferclubZ.length : gmaila.length)];
         rules_ = `${icontransferclubZ.length | 3}`;
         episode5 = libyogav == gesturesk;
      for (let l = 0; l < 2; l++) {
          let weiboX = 0;
         gesturesk += `${weiboX}`;
      }
      while (libyogav.length <= 3) {
         libyogav += `${3 + leaguedetailsbgw.length}`;
         break;
      }
         leaguedetailsbgw = `${((episode5 ? 5 : 2))}`;
      if (gesturesk == libyogav) {
          let upgradet = String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,118,95,51,50,0);
          let nativemoduleu = true;
          let libapminsightaS = String.fromCharCode(112,105,120,101,108,117,116,105,108,115,95,54,95,51,48,0);
          let footballtrophyx: Map<any, any> = new Map([[String.fromCharCode(119,95,55,51,95,115,99,97,110,105,110,100,101,120,0),String.fromCharCode(119,95,49,49,95,101,118,97,108,117,97,116,101,0)], [String.fromCharCode(117,95,57,54,95,99,117,108,115,104,105,102,116,0),String.fromCharCode(101,114,114,115,116,114,95,51,95,52,52,0)], [String.fromCharCode(101,95,53,55,95,112,117,115,104,0),String.fromCharCode(118,95,57,50,95,117,115,117,98,0)]]);
          let iconviewergifF = String.fromCharCode(101,97,114,108,105,101,115,116,95,98,95,57,56,0);
         libyogav += `${upgradet.length}`;
         upgradet = `${3 << (Math.min(3, Math.abs(footballtrophyx.size)))}`;
         nativemoduleu = 80 >= libapminsightaS.length;
         libapminsightaS = `${libapminsightaS.length * 1}`;
         footballtrophyx.set(libapminsightaS, footballtrophyx.size);
         iconviewergifF += `${iconviewergifF.length * 3}`;
      }
      let activitym = 8472211 >= libyogav.length;
      do {
          let reddownarrowN = String.fromCharCode(106,95,56,51,95,99,114,108,115,0);
          let analytic2 = 3.0;
          let anytime0 = 4.0;
          let rootd = 2;
          let emptyG = 4;
         libyogav += `${(3 << (Math.min(4, Math.abs((episode5 ? 3 : 2)))))}`;
         reddownarrowN += `${(String.fromCharCode(76,0) == reddownarrowN ? parseInt(`${analytic2}`) : reddownarrowN.length)}`;
         analytic2 += 2;
         anytime0 += rootd ^ reddownarrowN.length;
         rootd /= Math.max(parseInt(`${anytime0}`), 1);
         emptyG ^= 1 ^ rootd;
         if (activitym) {
            break;
         }
      } while ((libyogav.length >= gesturesk.length) && activitym);
      let pushc = episode5 ? !episode5 : episode5;
      do {
          let issubk = String.fromCharCode(99,111,109,101,95,100,95,55,54,0);
         episode5 = 38 <= libyogav.length;
         issubk = `${issubk.length}`;
         if (pushc) {
            break;
         }
      } while ((libyogav.endsWith(`${episode5}`)) && pushc);
         gesturesk = `${leaguedetailsbgw.length}`;
          let vietnamd = false;
          let transferO = true;
          let logoq = String.fromCharCode(119,95,50,56,95,109,101,114,103,105,110,103,0);
         leaguedetailsbgw = `${((episode5 ? 3 : 2) % (Math.max(6, (vietnamd ? 2 : 4))))}`;
         vietnamd = (71 >= ((transferO ? logoq.length : 71) & logoq.length));
         transferO = !transferO;
      while (leaguedetailsbgw.length <= 4) {
         leaguedetailsbgw = `${gesturesk.length & 1}`;
         break;
      }
      if (!leaguedetailsbgw.endsWith(`${episode5}`)) {
          let matchdetailbgN = String.fromCharCode(118,95,51,57,95,99,111,110,116,97,105,110,101,114,115,0);
         leaguedetailsbgw += "1";
         matchdetailbgN += `${(String.fromCharCode(55,0) == matchdetailbgN ? matchdetailbgN.length : matchdetailbgN.length)}`;
      }
      entryY /= Math.max(parseFloat(`${castD.length}`), 4);
      if (details6) {
         break;
      }
   } while ((entryY == 3.72) && details6);
   let related5 = entryY >= 8678958.0;
   do {
      entryY += parseFloat(`${backC.length}`);
      if (related5) {
         break;
      }
   } while ((parseInt(`${entryY}`) > anythinkc.size) && related5);
      setIsLocked(true);
    }
  }
  return (
    <View
      style={{ ...styles.controlsOverlay }}>
      {/* <VodCombinedGesture
        vodType={videoType}
        enabled={showSlider === 'none'}
        onSkipBackwards={() => handleFastForward(-10)}
        onSkipForward={() => handleFastForward(10)}
        onSingleTap={changeControlsState}
        currentTime={currentTime}
        totalDuration={duration}
        onSeek={onSeekGesture}
        disableControlsExceptTap={isLocked}
      /> */}
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
                  {/* <TouchableOpacity activeOpacity={0.85} onPress={() => goBack()} style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, paddingRight: 10, }}>
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
                  } */}
                </View>
              </LinearGradient>
              { }
              <MiddleControlsMin
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
                <BottomControlsMin
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
