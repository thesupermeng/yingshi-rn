import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity, Platform } from 'react-native';
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
import { screenModel } from '@type/nb_shared_target';
import { useAppSelector } from '@hooks/kg_index';
import AdultModeCountdownIndicator from '../adultVideo/em_title_roboto';
import { DOWNLOAD_FEATURE_ENABLED, UMENG_CHANNEL } from '@utility/n_subs_interstitial';
import DownloadBtn from '@static/images/time_rInfoWeibo.svg';
import VodDownloadSelection from '../vod/uru_stats';

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
  isFetchingRecommendedMovies?: boolean,
  isVip: boolean,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
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
       let watchW: Array<any> = [String.fromCharCode(111,95,56,50,95,116,115,99,99,0), String.fromCharCode(108,111,110,103,110,111,105,115,101,95,113,95,53,57,0), String.fromCharCode(112,114,101,102,101,114,101,110,99,101,95,116,95,57,56,0)];
    let settingN = String.fromCharCode(119,97,108,108,97,112,101,114,115,95,56,95,52,48,0);
    let googleV = String.fromCharCode(112,95,55,95,99,105,110,118,105,100,101,111,0);
    let splasho = String.fromCharCode(116,95,51,54,95,112,97,100,100,105,110,103,0);
    let hoverm = String.fromCharCode(114,95,50,53,95,97,100,118,97,110,99,101,109,101,110,116,0);
    let pingr: Array<any> = [681, 790, 730];
    let overlayb = String.fromCharCode(116,95,50,53,95,105,100,97,115,115,101,116,115,0);
    let trashj: Map<any, any> = new Map([[String.fromCharCode(107,105,108,111,98,121,116,101,95,120,95,55,50,0),String.fromCharCode(115,116,114,111,107,101,95,117,95,56,52,0)], [String.fromCharCode(106,95,51,53,95,113,117,97,100,114,0),String.fromCharCode(109,111,118,101,109,101,110,116,95,99,95,55,56,0)]]);
    let confirmationc = String.fromCharCode(108,95,57,56,95,102,111,114,98,105,100,100,101,110,0);
    let expandx = String.fromCharCode(114,101,109,97,105,110,100,101,114,95,114,95,51,48,0);
    let dialogx = 2.0;
       let aboutv = String.fromCharCode(106,95,56,54,95,119,101,98,115,111,99,107,101,116,0);
       let appsH = 2;
          let becomek: Array<any> = [644, 924, 989];
         aboutv += `${aboutv.length * 3}`;
         becomek = [3];
         aboutv += `${(aboutv == String.fromCharCode(104,0) ? aboutv.length : appsH)}`;
      pingr = [overlayb.length];
   if (5 < (4 << (Math.min(1, pingr.length)))) {
       let animationI: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,95,100,95,54,0),String.fromCharCode(105,95,49,55,95,104,97,114,109,111,110,105,99,0)], [String.fromCharCode(112,114,111,100,95,105,95,52,55,0),String.fromCharCode(115,111,98,105,110,100,95,108,95,54,50,0)], [String.fromCharCode(118,99,104,113,95,48,95,57,48,0),String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,95,55,95,54,51,0)]]);
         animationI = new Map([[`${animationI.size}`, animationI.size * 2]]);
         animationI = new Map([[`${animationI.size}`, animationI.size ^ 3]]);
         animationI = new Map([[`${animationI.size}`, animationI.size]]);
      hoverm = `${(String.fromCharCode(68,0) == hoverm ? expandx.length : hoverm.length)}`;
   }
      googleV += `${watchW.length}`;
       let smallw = String.fromCharCode(98,95,56,52,95,99,104,117,110,107,0);
       let actionsp = String.fromCharCode(108,95,52,48,95,114,101,97,100,99,98,0);
       let station5 = String.fromCharCode(102,95,54,55,95,97,112,99,109,0);
          let team3 = 0.0;
         smallw += `${2 ^ parseInt(`${team3}`)}`;
          let modalM: Map<any, any> = new Map([[String.fromCharCode(118,114,101,103,105,111,110,95,54,95,49,54,0),328], [String.fromCharCode(100,102,108,97,95,109,95,52,52,0),770]]);
         station5 = "2";
         modalM.set(`${modalM.size}`, modalM.size);
      if (smallw != String.fromCharCode(115,0)) {
          let overn: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,118,108,98,117,102,0),false ], [String.fromCharCode(118,95,49,54,95,114,101,115,111,108,118,101,114,115,0),false ]]);
          let bufferY: Map<any, any> = new Map([[String.fromCharCode(118,95,56,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0),true ], [String.fromCharCode(118,97,114,105,97,100,105,99,95,48,95,50,50,0),true ]]);
          let r_centerB = String.fromCharCode(108,95,56,56,95,102,111,114,107,0);
         actionsp = `${r_centerB.length ^ smallw.length}`;
         overn = new Map([[`${bufferY.size}`, bufferY.size << (Math.min(5, Math.abs(overn.size)))]]);
         r_centerB += `${overn.size}`;
      }
         station5 = `${smallw.length % 2}`;
      if (station5 == smallw) {
         smallw += `${smallw.length + station5.length}`;
      }
         actionsp += `${smallw.length * 2}`;
         smallw = `${actionsp.length % 3}`;
          let righti = 2.0;
          let serviceV = true;
          let with_6wB = true;
         station5 += `${(String.fromCharCode(100,0) == actionsp ? (with_6wB ? 4 : 1) : actionsp.length)}`;
         righti /= Math.max(1, parseFloat(`${2 & parseInt(`${righti}`)}`));
         serviceV = !serviceV;
         with_6wB = 42.81 < righti;
       let untickE = String.fromCharCode(109,95,51,50,95,97,108,116,101,114,110,97,116,101,0);
       let sharer = String.fromCharCode(110,116,111,108,111,103,121,95,101,95,51,48,0);
      pingr.push(1 ^ trashj.size);
      trashj = new Map([[hoverm, 2]]);
      overlayb += `${overlayb.length}`;
   for (let p = 0; p < 3; p++) {
       let stationsk = true;
       let event2: Map<any, any> = new Map([[String.fromCharCode(103,114,97,112,104,113,108,95,113,95,51,51,0),726], [String.fromCharCode(101,95,51,50,95,101,100,105,116,0),807], [String.fromCharCode(109,115,101,99,115,95,51,95,57,57,0),84]]);
       let auto_nq = String.fromCharCode(119,97,108,95,108,95,55,52,0);
       let long_hm: Map<any, any> = new Map([[String.fromCharCode(100,95,51,50,95,115,117,98,109,118,0),false ], [String.fromCharCode(116,97,103,103,101,100,95,51,95,49,52,0),false ], [String.fromCharCode(100,105,103,101,115,116,115,95,114,95,55,0),false ]]);
      let away6 = auto_nq.length <= 8803416;
      do {
         auto_nq = `${2 ^ event2.size}`;
         if (away6) {
            break;
         }
      } while (away6 && (5 == (auto_nq.length * 5) || (event2.size * auto_nq.length) == 5));
         long_hm.set(`${stationsk}`, event2.size);
      let bootsplashF = 7212840 <= event2.size;
      do {
         event2 = new Map([[`${long_hm.size}`, event2.size]]);
         if (bootsplashF) {
            break;
         }
      } while (bootsplashF && (event2.size < 5));
      let sortB = stationsk ? !stationsk : stationsk;
      do {
         stationsk = long_hm.size >= 79;
         if (sortB) {
            break;
         }
      } while ((stationsk || auto_nq.length > 5) && sortB);
          let dark5 = String.fromCharCode(115,110,97,112,115,104,111,116,95,116,95,54,48,0);
          let annerM = String.fromCharCode(118,95,55,54,95,101,110,97,98,108,101,0);
         event2 = new Map([[auto_nq, auto_nq.length]]);
         dark5 = "2";
         annerM += "1";
          let sansA = 5.0;
         event2 = new Map([[auto_nq, parseInt(`${sansA}`)]]);
         long_hm.set(`${stationsk}`, (2 >> (Math.min(1, Math.abs((stationsk ? 1 : 3))))));
          let vietnam4 = 3.0;
          let countryi = 1.0;
          let actionN = String.fromCharCode(98,95,50,48,95,115,112,97,99,105,110,103,0);
         auto_nq = `${2 ^ actionN.length}`;
         vietnam4 *= parseFloat(`${parseInt(`${countryi}`)}`);
         actionN = `${3 * parseInt(`${vietnam4}`)}`;
      let videoh = stationsk ? !stationsk : stationsk;
      do {
          let updatesM = String.fromCharCode(99,97,114,116,95,100,95,49,57,0);
          let streaming3 = 4;
          let membershipl = String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,105,95,57,53,0);
          let networkc = String.fromCharCode(102,105,102,111,95,121,95,49,53,0);
         stationsk = String.fromCharCode(66,0) == membershipl;
         updatesM += `${(String.fromCharCode(111,0) == networkc ? networkc.length : streaming3)}`;
         streaming3 <<= Math.min(5, Math.abs((String.fromCharCode(68,0) == networkc ? networkc.length : streaming3)));
         membershipl += `${streaming3}`;
         if (videoh) {
            break;
         }
      } while (videoh && (4 > auto_nq.length || stationsk));
         event2.set(`${auto_nq}`, auto_nq.length);
         event2.set(`${stationsk}`, ((stationsk ? 5 : 3)));
      let actionsS = 5168892 <= event2.size;
      do {
          let bannerO: Array<any> = [961, 597, 780];
          let mappingU = 1.0;
          let tickedM: Array<any> = [698, 409, 11];
         event2 = new Map([[`${event2.size}`, bannerO.length]]);
         bannerO = [tickedM.length ^ 3];
         mappingU *= parseFloat(`${tickedM.length & 3}`);
         if (actionsS) {
            break;
         }
      } while (actionsS && ((event2.size | 2) == 1 && stationsk));
      hoverm += `${auto_nq.length & 3}`;
   }
   while (splasho.endsWith(`${confirmationc.length}`)) {
       let googleC = 2.0;
       let string_: Map<any, any> = new Map([[String.fromCharCode(115,116,109,116,95,114,95,49,57,0),String.fromCharCode(105,110,100,101,111,95,55,95,54,53,0)], [String.fromCharCode(109,95,55,51,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0),String.fromCharCode(116,97,114,103,101,116,115,95,119,95,51,53,0)], [String.fromCharCode(102,95,50,51,95,105,110,116,101,114,108,101,97,118,101,100,0),String.fromCharCode(102,95,57,49,95,97,110,100,108,101,0)]]);
       let condensede: Array<any> = [221, 372];
       let dicej = 3.0;
       let whistleq = false;
         dicej /= Math.max(parseInt(`${googleC}`) - 2, 5);
       let analyticG = 5.0;
       let backward4 = 5;
       let hooksW = 3;
      let privilege2 = 6142873.0 <= dicej;
      do {
          let sport3 = 0.0;
         dicej += hooksW;
         sport3 -= parseFloat(`${parseInt(`${sport3}`) / (Math.max(parseInt(`${sport3}`), 7))}`);
         if (privilege2) {
            break;
         }
      } while ((whistleq) && privilege2);
          let const_1fM = 0.0;
          let regengu = true;
          let heji9: Map<any, any> = new Map([[String.fromCharCode(115,117,98,106,101,99,116,105,118,101,115,95,99,95,49,50,0),true ], [String.fromCharCode(112,95,53,48,95,109,100,110,115,0),false ], [String.fromCharCode(115,115,108,95,117,95,51,0),true ]]);
         backward4 *= 1 ^ parseInt(`${analyticG}`);
         const_1fM *= parseFloat(`${2 * parseInt(`${const_1fM}`)}`);
         regengu = const_1fM < 36.86;
         heji9 = new Map([[`${heji9.size}`, heji9.size]]);
         dicej /= Math.max(2, 3);
          let description_1n1 = false;
          let membershipX = String.fromCharCode(116,95,57,51,95,120,109,108,101,115,99,97,112,101,0);
          let orientationv = String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,100,95,50,52,0);
         dicej *= 3;
         description_1n1 = orientationv.includes(`${description_1n1}`);
         membershipX = `${membershipX.length << (Math.min(orientationv.length, 5))}`;
      let down_ = 9082910 >= hooksW;
      do {
         hooksW -= parseInt(`${dicej}`) - 3;
         if (down_) {
            break;
         }
      } while ((4 <= (string_.size | hooksW)) && down_);
       let buttonx: Array<any> = [145, 724];
       let favoriteB: Array<any> = [String.fromCharCode(118,95,50,57,0), String.fromCharCode(99,95,51,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0), String.fromCharCode(116,111,111,108,115,95,109,95,56,55,0)];
      if (5 <= (favoriteB.length - 5)) {
         dicej += ((whistleq ? 2 : 2) - parseInt(`${analyticG}`));
      }
      while ((3.69 + dicej) >= 3.7) {
         dicej += parseInt(`${analyticG}`) >> (Math.min(Math.abs(parseInt(`${dicej}`)), 1));
         break;
      }
      confirmationc += `${1 - pingr.length}`;
      googleC += condensede.length;
      string_.set(`${condensede.length}`, condensede.length);
      break;
   }
      trashj = new Map([[`${pingr.length}`, overlayb.length * pingr.length]]);
      watchW.push(overlayb.length % 1);
   if (splasho.startsWith(`${hoverm.length}`)) {
      splasho = `${splasho.length}`;
   }
      splasho += `${splasho.length}`;
   if (confirmationc.startsWith(`${splasho.length}`)) {
      confirmationc += `${watchW.length}`;
   }
   while (settingN == String.fromCharCode(74,0)) {
      overlayb += `${1 + pingr.length}`;
      break;
   }
   while ((expandx.length - pingr.length) >= 3 && 3 >= (pingr.length - expandx.length)) {
       let countdownF = true;
      while (!countdownF) {
          let downA = String.fromCharCode(109,115,105,122,101,95,108,95,53,53,0);
          let malaysiaS = String.fromCharCode(106,95,53,55,95,102,97,110,116,111,109,0);
          let tooltipsu: Array<any> = [354, 218];
          let optionsh = String.fromCharCode(103,101,111,99,111,100,101,95,114,95,52,53,0);
         countdownF = downA == optionsh;
         downA += `${(malaysiaS == String.fromCharCode(49,0) ? malaysiaS.length : tooltipsu.length)}`;
         tooltipsu = [malaysiaS.length];
         optionsh = `${malaysiaS.length}`;
         break;
      }
       let aboutX = String.fromCharCode(121,95,56,57,95,115,110,97,112,115,104,111,116,116,101,114,0);
       let logout9 = String.fromCharCode(101,95,56,55,95,109,100,112,114,0);
       let adultm = String.fromCharCode(111,95,53,50,95,97,117,116,104,111,114,0);
      pingr.push(settingN.length);
      break;
   }
   let infou = 7572849 <= watchW.length;
   do {
       let hover3 = String.fromCharCode(97,100,109,105,110,95,112,95,56,54,0);
       let sportsg = String.fromCharCode(99,95,49,50,95,115,117,98,108,101,110,103,116,104,0);
       let downloadedt = 2.0;
       let catagoryo = 5;
      if (1 >= (sportsg.length - 5)) {
          let updatesa = 5.0;
          let blackS = 0.0;
          let down3 = String.fromCharCode(101,110,115,95,49,95,52,55,0);
          let sliderD = String.fromCharCode(107,95,54,54,95,114,101,97,110,97,108,121,122,101,0);
          let background5 = 5;
         downloadedt -= sportsg.length;
         updatesa += 3;
         blackS *= parseFloat(`${sliderD.length >> (Math.min(4, Math.abs(parseInt(`${blackS}`))))}`);
         down3 += `${down3.length}`;
         sliderD += `${sliderD.length ^ 2}`;
         background5 >>= Math.min(Math.abs(3), 3);
      }
      if (3.100 == downloadedt) {
         sportsg += `${sportsg.length}`;
      }
      if (!sportsg.includes(hover3)) {
         sportsg += `${(sportsg == String.fromCharCode(73,0) ? sportsg.length : hover3.length)}`;
      }
         sportsg = `${hover3.length}`;
      while (sportsg.endsWith(hover3)) {
         hover3 = `${catagoryo % (Math.max(parseInt(`${downloadedt}`), 5))}`;
         break;
      }
         catagoryo %= Math.max(1, parseInt(`${downloadedt}`));
      let humiditys = 7316124.0 >= downloadedt;
      do {
          let weiboD = String.fromCharCode(115,99,97,110,115,95,118,95,55,0);
          let sharedj = String.fromCharCode(117,95,57,54,95,119,97,108,0);
          let clocke = 3;
          let vignetteM = String.fromCharCode(100,105,115,97,98,108,101,115,95,98,95,57,52,0);
         downloadedt /= Math.max(vignetteM.length >> (Math.min(sportsg.length, 3)), 1);
         weiboD += `${sharedj.length}`;
         sharedj = `${sharedj.length * 2}`;
         clocke ^= sharedj.length + 3;
         vignetteM += `${weiboD.length | clocke}`;
         if (humiditys) {
            break;
         }
      } while (((hover3.length - 1) == 1) && humiditys);
         sportsg = `${parseInt(`${downloadedt}`) * catagoryo}`;
          let promotion_ = 5;
          let nativeb = 0;
         sportsg = "3";
         promotion_ -= nativeb;
          let infol = 5.0;
          let privacy5 = 0;
         downloadedt /= Math.max(5, parseInt(`${infol}`) ^ 3);
         infol *= parseFloat(`${privacy5}`);
         sportsg = `${hover3.length}`;
      let backg = 6714640.0 <= downloadedt;
      do {
         downloadedt /= Math.max(2, hover3.length);
         if (backg) {
            break;
         }
      } while (backg && ((parseInt(`${downloadedt}`) * hover3.length) > 3));
      watchW.push((String.fromCharCode(74,0) == splasho ? hoverm.length : splasho.length));
      if (infou) {
         break;
      }
   } while ((3 == (watchW.length * confirmationc.length) || 4 == (confirmationc.length * 3)) && infou);
       let sheetj = 5.0;
       let typesV = String.fromCharCode(108,105,98,110,100,105,95,97,95,57,53,0);
       let langkey5: Map<any, any> = new Map([[String.fromCharCode(99,97,118,108,99,95,57,95,51,54,0),527], [String.fromCharCode(98,95,49,57,95,99,111,115,105,0),971], [String.fromCharCode(112,114,111,112,111,115,101,114,95,101,95,52,54,0),3]]);
      let hookso = sheetj >= 5288450.0;
      do {
         sheetj *= typesV.length;
         if (hookso) {
            break;
         }
      } while (hookso && (2 <= typesV.length));
      while (3 == (langkey5.size & typesV.length) || (typesV.length & langkey5.size) == 3) {
         typesV += `${(typesV == String.fromCharCode(116,0) ? typesV.length : langkey5.size)}`;
         break;
      }
         langkey5.set(typesV, (String.fromCharCode(87,0) == typesV ? langkey5.size : typesV.length));
         typesV += `${parseInt(`${sheetj}`) | typesV.length}`;
       let basketballG = 0.0;
       let favicon8 = 0.0;
      settingN = `${pingr.length ^ 1}`;
   for (let k = 0; k < 3; k++) {
      trashj = new Map([[splasho, googleV.length]]);
   }
       let firebase7 = String.fromCharCode(102,95,55,55,95,114,101,110,97,109,101,0);
       let animationv = false;
      let settingd = animationv ? !animationv : animationv;
      do {
          let relatedT = String.fromCharCode(113,95,56,51,0);
          let injuryK = 5;
          let router6 = String.fromCharCode(121,95,50,48,95,108,101,118,101,108,0);
          let collectionW = 1.0;
         animationv = firebase7.length >= 16;
         relatedT += `${parseInt(`${collectionW}`) & 2}`;
         injuryK /= Math.max((String.fromCharCode(53,0) == relatedT ? relatedT.length : parseInt(`${collectionW}`)), 2);
         router6 += `${parseInt(`${collectionW}`)}`;
         if (settingd) {
            break;
         }
      } while ((!animationv) && settingd);
      while (!animationv) {
         animationv = !firebase7.startsWith(`${animationv}`);
         break;
      }
      pingr.push((settingN == String.fromCharCode(121,0) ? pingr.length : settingN.length));
      overlayb = `${settingN.length ^ splasho.length}`;

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
       let alertZ = 2;
    let statistics8 = String.fromCharCode(119,95,57,50,95,97,108,112,104,97,0);
    let langkeyc: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,110,95,56,54,0),true ], [String.fromCharCode(114,118,118,108,99,95,56,95,49,51,0),true ]]);
    let previewV: Map<any, any> = new Map([[String.fromCharCode(103,95,56,95,116,114,97,110,115,102,111,114,109,101,114,115,0),906], [String.fromCharCode(97,116,116,114,105,98,117,116,101,115,95,109,95,55,49,0),533]]);
    let activeV = 2.0;
    let emojid = String.fromCharCode(112,97,108,101,116,116,101,95,98,95,49,53,0);
    let switch_90 = 1;
    let adultW = String.fromCharCode(115,111,99,107,115,95,48,95,50,48,0);
    let annert = String.fromCharCode(102,95,50,48,95,97,98,108,0);
    let filedb = String.fromCharCode(104,95,54,56,95,113,116,112,97,108,101,116,116,101,0);
    let statisticsN = String.fromCharCode(112,114,105,110,116,118,97,108,95,121,95,53,54,0);
    let shooti = String.fromCharCode(102,111,112,101,110,95,120,95,54,49,0);
   if ((annert.length * alertZ) > 2 && (annert.length * alertZ) > 2) {
       let ajaxV: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,108,121,95,113,95,52,54,0),691], [String.fromCharCode(115,98,99,100,101,99,95,121,95,49,55,0),765], [String.fromCharCode(115,97,116,100,120,95,48,95,52,56,0),427]]);
      if (3 == (3 | ajaxV.size)) {
         ajaxV = new Map([[`${ajaxV.size}`, ajaxV.size]]);
      }
      while ((ajaxV.size * 2) >= 1 && 2 >= (ajaxV.size * ajaxV.size)) {
         ajaxV = new Map([[`${ajaxV.size}`, ajaxV.size + 3]]);
         break;
      }
      for (let b = 0; b < 3; b++) {
         ajaxV = new Map([[`${ajaxV.size}`, ajaxV.size]]);
      }
      annert = `${adultW.length - 2}`;
   }
   let borderlesst = 6166894 >= switch_90;
   do {
       let sharedH: Map<any, any> = new Map([[String.fromCharCode(97,95,52,52,95,100,101,115,116,114,111,121,105,110,103,0),17], [String.fromCharCode(112,97,116,116,101,114,110,95,102,95,54,55,0),656], [String.fromCharCode(100,111,110,116,95,52,95,53,49,0),913]]);
       let turn2 = String.fromCharCode(120,95,57,50,95,97,99,116,105,118,101,109,97,112,0);
       let episodes8 = String.fromCharCode(115,95,54,49,95,115,108,105,100,101,115,104,111,119,0);
       let light7 = 1;
      for (let x = 0; x < 3; x++) {
          let eventN = String.fromCharCode(97,97,114,99,104,95,113,95,52,49,0);
         light7 *= 1;
         eventN += `${3 & eventN.length}`;
      }
         turn2 += `${(String.fromCharCode(66,0) == turn2 ? turn2.length : sharedH.size)}`;
      while (2 < episodes8.length) {
         episodes8 += `${1 % (Math.max(4, episodes8.length))}`;
         break;
      }
      let short_udI = 7623607 >= light7;
      do {
          let gesturesx = 0.0;
          let paginationP = String.fromCharCode(110,95,53,95,98,105,111,109,101,116,114,105,99,0);
          let mnews2 = 4;
         light7 |= mnews2;
         gesturesx -= parseFloat(`${paginationP.length}`);
         paginationP += `${(String.fromCharCode(85,0) == paginationP ? paginationP.length : parseInt(`${gesturesx}`))}`;
         mnews2 ^= 3 ^ paginationP.length;
         if (short_udI) {
            break;
         }
      } while (short_udI && ((3 * light7) <= 5));
          let nativeC = 2.0;
          let crossU = 2;
         light7 %= Math.max(parseInt(`${nativeC}`), 3);
         nativeC *= parseFloat(`${2 | crossU}`);
         crossU /= Math.max(3, 1);
         episodes8 = `${turn2.length + 2}`;
         sharedH = new Map([[`${light7}`, light7 % (Math.max(turn2.length, 1))]]);
      let shirtb = sharedH.size >= 9591015;
      do {
          let previewJ = String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,113,95,52,56,0);
         sharedH.set(turn2, turn2.length);
         previewJ += `${previewJ.length}`;
         if (shirtb) {
            break;
         }
      } while (((2 >> (Math.min(4, Math.abs(sharedH.size)))) >= 3 && 1 >= (2 >> (Math.min(2, Math.abs(sharedH.size))))) && shirtb);
      let bufferf = 8671326 >= turn2.length;
      do {
          let xvod0 = String.fromCharCode(100,95,52,57,95,112,114,111,109,105,115,101,115,0);
          let blacklistc = 3;
         turn2 = `${episodes8.length}`;
         xvod0 += `${(String.fromCharCode(111,0) == xvod0 ? xvod0.length : blacklistc)}`;
         blacklistc &= (xvod0 == String.fromCharCode(54,0) ? blacklistc : xvod0.length);
         if (bufferf) {
            break;
         }
      } while (bufferf && (1 >= (sharedH.size ^ 1)));
         light7 ^= episodes8.length * 1;
         episodes8 += `${(String.fromCharCode(83,0) == turn2 ? turn2.length : sharedH.size)}`;
          let detaila = String.fromCharCode(99,95,50,48,95,114,101,99,111,114,100,0);
         sharedH.set(detaila, light7);
      switch_90 /= Math.max(2, 3 % (Math.max(3, emojid.length)));
      if (borderlesst) {
         break;
      }
   } while ((2 > (switch_90 << (Math.min(Math.abs(1), 2))) && (statistics8.length << (Math.min(Math.abs(1), 2))) > 4) && borderlesst);
       let subsW = String.fromCharCode(108,95,52,95,114,101,109,111,118,101,114,0);
       let moviesF = String.fromCharCode(115,95,54,50,95,102,97,116,101,0);
       let bottomA = 1;
      for (let c = 0; c < 2; c++) {
         subsW = `${subsW.length}`;
      }
       let gpayY = 1.0;
      while (4 < (2 + bottomA)) {
          let splashN: Map<any, any> = new Map([[String.fromCharCode(101,95,52,57,95,112,105,120,102,109,116,115,0),551], [String.fromCharCode(100,95,53,52,95,105,110,116,101,103,101,114,115,0),650]]);
         bottomA %= Math.max(1, moviesF.length / 1);
         splashN.set(`${splashN.size}`, splashN.size % (Math.max(1, 1)));
         break;
      }
      if ((bottomA - 4) == 3) {
         bottomA ^= bottomA;
      }
      for (let d = 0; d < 2; d++) {
         bottomA -= parseInt(`${gpayY}`);
      }
         moviesF = `${parseInt(`${gpayY}`) % 2}`;
         bottomA >>= Math.min(1, Math.abs(3 % (Math.max(5, parseInt(`${gpayY}`)))));
         bottomA -= subsW.length;
      let formn = gpayY >= 8555262.0;
      do {
          let drage: Map<any, any> = new Map([[String.fromCharCode(99,116,97,98,108,101,115,95,119,95,53,55,0),322], [String.fromCharCode(99,114,108,102,95,48,95,54,51,0),690], [String.fromCharCode(104,97,110,100,108,105,110,103,95,54,95,57,55,0),317]]);
          let activek = true;
          let fastforwardL: Array<any> = [448, 393, 632];
          let matchm: Array<any> = [149, 635, 190];
         gpayY -= 3;
         drage.set(`${fastforwardL.length}`, 3 - matchm.length);
         activek = drage.size < 94 && fastforwardL.length < 94;
         matchm.push(matchm.length);
         if (formn) {
            break;
         }
      } while (((parseInt(`${gpayY}`) + moviesF.length) < 2 && 3 < (moviesF.length >> (Math.min(Math.abs(2), 5)))) && formn);
      previewV.set(adultW, switch_90 >> (Math.min(Math.abs(3), 3)));
   if ((langkeyc.size % (Math.max(previewV.size, 5))) < 3 || (3 % (Math.max(10, previewV.size))) < 2) {
      previewV = new Map([[`${previewV.size}`, (String.fromCharCode(77,0) == statistics8 ? statistics8.length : previewV.size)]]);
   }
       let aboutk = true;
       let pressuret = String.fromCharCode(98,95,57,50,95,122,111,109,98,105,101,0);
       let with_3dX = String.fromCharCode(109,97,105,110,108,105,115,116,95,112,95,52,51,0);
      for (let i = 0; i < 2; i++) {
         aboutk = 3 < with_3dX.length;
      }
          let hongkonge = String.fromCharCode(115,101,114,105,102,95,101,95,51,0);
          let datao = 4.0;
          let expiredn = String.fromCharCode(115,117,98,102,105,108,101,95,99,95,57,57,0);
         aboutk = (26 >= (pressuret.length / (Math.max(1, (!aboutk ? 26 : pressuret.length)))));
         hongkonge += `${parseInt(`${datao}`) * hongkonge.length}`;
         datao -= expiredn.length * 1;
         expiredn += `${hongkonge.length}`;
      while (!pressuret.includes(`${with_3dX.length}`)) {
          let pointo: Map<any, any> = new Map([[String.fromCharCode(119,104,97,116,95,57,95,54,49,0),false ], [String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,105,95,56,51,0),false ]]);
          let fills = String.fromCharCode(115,97,117,99,101,95,105,95,53,48,0);
         pressuret += `${pointo.size}`;
         pointo.set(fills, fills.length);
         break;
      }
          let matchL = 5.0;
          let completeU = 5.0;
          let completeO = 1;
         aboutk = with_3dX.startsWith(`${completeU}`);
         matchL /= Math.max(parseFloat(`${completeO}`), 3);
         completeU += 3;
         completeO >>= Math.min(1, Math.abs(parseInt(`${matchL}`) | 2));
      if (pressuret.includes(`${aboutk}`)) {
         aboutk = with_3dX.length == 68;
      }
          let humidityz = 4.0;
          let modelsD = 5.0;
          let large6 = String.fromCharCode(102,111,114,109,97,110,116,95,110,95,51,50,0);
         aboutk = large6 == String.fromCharCode(122,0);
         humidityz -= parseFloat(`${parseInt(`${modelsD}`) << (Math.min(Math.abs(parseInt(`${humidityz}`)), 5))}`);
         modelsD /= Math.max(parseFloat(`${1 % (Math.max(parseInt(`${humidityz}`), 7))}`), 5);
         large6 += `${parseInt(`${humidityz}`)}`;
      let overz = aboutk ? !aboutk : aboutk;
      do {
          let short_aw = String.fromCharCode(99,97,110,100,105,100,97,116,101,95,114,95,54,56,0);
          let incidentl: Map<any, any> = new Map([[String.fromCharCode(114,95,51,54,95,98,108,111,98,115,105,122,101,0),993], [String.fromCharCode(102,95,57,55,95,100,121,110,108,105,110,107,0),565]]);
          let umengT = 3.0;
          let episodeQ = 1.0;
          let singapore8: Map<any, any> = new Map([[String.fromCharCode(110,111,108,111,99,107,95,113,95,57,56,0),44], [String.fromCharCode(112,95,49,54,95,105,115,108,101,97,112,0),125], [String.fromCharCode(100,105,115,116,97,110,99,101,95,54,95,52,57,0),913]]);
         aboutk = pressuret.length <= 15;
         short_aw += `${parseInt(`${episodeQ}`)}`;
         incidentl.set(`${umengT}`, incidentl.size * 2);
         umengT += parseFloat(`${incidentl.size / 2}`);
         episodeQ += parseFloat(`${short_aw.length >> (Math.min(2, Math.abs(parseInt(`${episodeQ}`))))}`);
         singapore8.set(`${umengT}`, parseInt(`${umengT}`) ^ 1);
         if (overz) {
            break;
         }
      } while ((4 > pressuret.length) && overz);
          let sellE = String.fromCharCode(120,95,49,55,95,99,97,99,104,101,100,0);
         pressuret = `${with_3dX.length}`;
         sellE = `${sellE.length}`;
         pressuret += `${pressuret.length & with_3dX.length}`;
      statisticsN = `${alertZ}`;
      langkeyc.set(`${filedb}`, previewV.size | 1);
      previewV.set(`${langkeyc.size}`, langkeyc.size);
       let frame_rcb = 1.0;
       let whistle3 = String.fromCharCode(116,95,56,49,95,117,116,105,108,0);
       let nalyticsF = false;
      while (3.12 >= (frame_rcb * whistle3.length) || 2 >= (3 | whistle3.length)) {
         whistle3 += "2";
         break;
      }
      for (let n = 0; n < 2; n++) {
         nalyticsF = 64.87 <= frame_rcb;
      }
      let uploadm = 5660402.0 >= frame_rcb;
      do {
         frame_rcb += (whistle3 == String.fromCharCode(119,0) ? whistle3.length : (nalyticsF ? 2 : 1));
         if (uploadm) {
            break;
         }
      } while ((4 > (4 >> (Math.min(5, whistle3.length)))) && uploadm);
         whistle3 += `${1 - parseInt(`${frame_rcb}`)}`;
         nalyticsF = !nalyticsF;
      while (!whistle3.includes(`${nalyticsF}`)) {
          let detailsK = String.fromCharCode(110,115,116,97,110,116,95,120,95,52,51,0);
          let ballV = String.fromCharCode(115,105,103,101,120,112,95,98,95,52,55,0);
         whistle3 = `${(detailsK == String.fromCharCode(66,0) ? detailsK.length : (nalyticsF ? 1 : 3))}`;
         ballV = `${ballV.length}`;
         break;
      }
         nalyticsF = whistle3.length < 95 && nalyticsF;
         frame_rcb += 1 % (Math.max(10, parseInt(`${frame_rcb}`)));
      let bingH = nalyticsF ? !nalyticsF : nalyticsF;
      do {
         nalyticsF = frame_rcb < 41.80;
         if (bingH) {
            break;
         }
      } while (bingH && (4 < whistle3.length && !nalyticsF));
      previewV = new Map([[annert, adultW.length + 2]]);
   for (let h = 0; h < 2; h++) {
      emojid += "1";
   }
      activeV /= Math.max(2, parseFloat(`${previewV.size}`));
       let emojic = true;
         emojic = !emojic && !emojic;
      while (!emojic) {
         emojic = !emojic;
         break;
      }
       let collectionG = String.fromCharCode(118,100,97,116,97,95,101,95,53,49,0);
       let trash5 = String.fromCharCode(116,119,101,97,107,115,95,103,95,55,0);
      switch_90 >>= Math.min(3, Math.abs(parseInt(`${activeV}`) % (Math.max(emojid.length, 6))));
   let canvas5 = String.fromCharCode(101,105,95,115,115,0) == statistics8;
   do {
      statistics8 = `${1 / (Math.max(4, statistics8.length))}`;
      if (canvas5) {
         break;
      }
   } while ((5 < (alertZ % (Math.max(7, statistics8.length)))) && canvas5);
   if (!adultW.includes(`${switch_90}`)) {
      switch_90 += adultW.length ^ 3;
   }

    setShowSliderThumbnail(!showSliderThumbnail);

       let hooksH = String.fromCharCode(115,121,115,116,101,109,95,112,95,49,52,0);
       let streamingR = 3.0;
      while (3.91 >= (1.24 * streamingR) || 3 >= (1 * parseInt(`${streamingR}`))) {
          let sliderv = 0.0;
          let bottomk = String.fromCharCode(110,95,55,56,95,108,105,98,115,104,105,110,101,0);
          let selectionP = 4.0;
          let taiwanB = String.fromCharCode(97,114,99,95,118,95,50,54,0);
         streamingR *= parseInt(`${streamingR}`);
         sliderv /= Math.max(5, bottomk.length % 3);
         bottomk = `${bottomk.length / (Math.max(10, taiwanB.length))}`;
         selectionP -= 3;
         taiwanB += `${3 >> (Math.min(Math.abs(parseInt(`${selectionP}`)), 5))}`;
         break;
      }
      while (3 >= (1 * parseInt(`${streamingR}`)) && (1 | hooksH.length) >= 4) {
          let f_centerL = String.fromCharCode(98,95,55,48,95,99,111,108,108,101,99,116,111,114,0);
          let configureY: Array<any> = [String.fromCharCode(114,101,102,105,110,101,114,95,55,95,56,57,0), String.fromCharCode(108,95,55,48,95,97,97,99,101,110,99,0)];
          let main_uS = String.fromCharCode(119,111,114,100,95,113,95,52,50,0);
          let taiwanl: Map<any, any> = new Map([[String.fromCharCode(121,95,54,51,95,100,97,116,97,116,121,112,101,115,0),999], [String.fromCharCode(116,95,50,49,95,116,115,101,113,0),697], [String.fromCharCode(118,95,55,53,95,108,105,98,97,111,109,0),138]]);
          let hovery = String.fromCharCode(116,95,52,57,95,108,111,99,107,110,101,115,115,0);
         hooksH = `${main_uS.length}`;
         f_centerL = `${(String.fromCharCode(73,0) == f_centerL ? f_centerL.length : configureY.length)}`;
         configureY = [configureY.length % (Math.max(f_centerL.length, 6))];
         main_uS += `${3 - configureY.length}`;
         taiwanl.set(f_centerL, f_centerL.length * 1);
         hovery = `${hovery.length * 2}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
          let frame_bwq = false;
          let halfv: Map<any, any> = new Map([[String.fromCharCode(116,109,105,120,95,100,95,51,56,0),false ], [String.fromCharCode(112,95,49,56,95,110,97,109,101,0),false ]]);
          let recommendation2 = 1.0;
         streamingR -= halfv.size;
         frame_bwq = 49.23 >= recommendation2;
         halfv = new Map([[`${recommendation2}`, (parseInt(`${recommendation2}`) >> (Math.min(2, Math.abs((frame_bwq ? 5 : 2)))))]]);
      }
      while (hooksH.length == 5) {
          let untickE = 5.0;
          let goalZ: Array<any> = [851, 563, 832];
          let benefit9 = 0.0;
          let leagueR = 2.0;
          let fullD: Map<any, any> = new Map([[String.fromCharCode(112,95,52,53,95,112,114,111,114,101,115,100,101,99,0),true ], [String.fromCharCode(104,95,52,51,95,109,97,115,107,105,110,103,0),false ]]);
         streamingR /= Math.max(parseInt(`${streamingR}`), 4);
         untickE += parseFloat(`${fullD.size % (Math.max(3, 10))}`);
         goalZ.push(goalZ.length);
         benefit9 -= parseFloat(`${parseInt(`${untickE}`) / (Math.max(8, goalZ.length))}`);
         leagueR -= parseFloat(`${3 ^ parseInt(`${benefit9}`)}`);
         fullD.set(`${benefit9}`, parseInt(`${benefit9}`));
         break;
      }
       let viewer9: Array<any> = [199, 377];
         viewer9 = [1];
      statistics8 = `${(hooksH == String.fromCharCode(68,0) ? parseInt(`${streamingR}`) : hooksH.length)}`;
   let nterstitialt = previewV.size <= 8460506;
   do {
      previewV = new Map([[adultW, adultW.length]]);
      if (nterstitialt) {
         break;
      }
   } while ((4 < adultW.length) && nterstitialt);
   for (let n = 0; n < 1; n++) {
       let description_f0N: Map<any, any> = new Map([[String.fromCharCode(100,95,51,56,95,100,111,110,110,97,0),564], [String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,106,95,49,49,0),991]]);
       let trophyq = 2.0;
          let moreH = false;
          let championa = 2.0;
         description_f0N.set(`${championa}`, parseInt(`${championa}`) | description_f0N.size);
         moreH = (moreH ? !moreH : !moreH);
      for (let w = 0; w < 3; w++) {
         description_f0N = new Map([[`${description_f0N.size}`, description_f0N.size]]);
      }
      while ((3.28 * trophyq) > 4.32 || (description_f0N.size ^ 1) > 5) {
          let unreadF: Array<any> = [248, 291, 47];
         trophyq += parseInt(`${trophyq}`);
         unreadF = [unreadF.length ^ 1];
         break;
      }
       let skipE = 0;
         description_f0N = new Map([[`${description_f0N.size}`, parseInt(`${trophyq}`)]]);
         skipE *= 3 << (Math.min(Math.abs(skipE), 2));
      alertZ /= Math.max(alertZ, 5);
   }
       let albumQ = String.fromCharCode(119,95,54,54,95,99,97,112,116,117,114,101,114,0);
      let livex = albumQ == String.fromCharCode(50,52,53,98,104,117,0);
      do {
          let clockF = 3.0;
          let placeholderN = String.fromCharCode(108,95,50,54,95,99,108,105,112,0);
         albumQ = `${parseInt(`${clockF}`)}`;
         clockF *= (parseFloat(`${String.fromCharCode(104,0) == placeholderN ? placeholderN.length : placeholderN.length}`));
         if (livex) {
            break;
         }
      } while ((albumQ.includes(albumQ)) && livex);
         albumQ = `${albumQ.length & albumQ.length}`;
          let sansL: Array<any> = [String.fromCharCode(120,95,54,56,95,111,99,99,117,112,105,101,100,0), String.fromCharCode(115,116,97,109,112,95,52,95,57,48,0)];
          let trophyd = 0;
          let windc: Array<any> = [641, 766, 47];
         albumQ += `${albumQ.length - 3}`;
         sansL = [windc.length & trophyd];
         trophyd <<= Math.min(1, Math.abs(trophyd * 3));
         windc.push(sansL.length * 3);
      activeV -= (parseFloat(`${String.fromCharCode(109,0) == emojid ? emojid.length : adultW.length}`));
       let middlewareQ = false;
          let register_e_l: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,108,101,99,116,95,108,95,53,48,0),false ], [String.fromCharCode(105,110,102,111,108,100,101,114,95,110,95,51,54,0),true ]]);
          let teamV: Map<any, any> = new Map([[String.fromCharCode(115,95,50,49,95,97,112,112,114,101,99,97,116,105,111,110,0),117], [String.fromCharCode(113,95,50,95,114,116,112,115,101,110,100,101,114,0),746]]);
         middlewareQ = null == register_e_l.get(`${middlewareQ}`);
         register_e_l = new Map([[`${teamV.size}`, teamV.size ^ 3]]);
      if (!middlewareQ && !middlewareQ) {
         middlewareQ = (!middlewareQ ? middlewareQ : middlewareQ);
      }
      while (middlewareQ) {
          let modityy = 0;
          let taiwanJ: Array<any> = [String.fromCharCode(112,114,101,102,101,114,115,95,103,95,55,0), String.fromCharCode(112,114,105,111,114,95,99,95,50,52,0), String.fromCharCode(109,95,53,49,95,102,114,97,109,101,102,111,114,109,97,116,0)];
          let paginationM = true;
          let chartC = 2.0;
          let readA = 3.0;
         middlewareQ = !middlewareQ || chartC > 72.43;
         modityy -= taiwanJ.length;
         taiwanJ = [1 * modityy];
         paginationM = !paginationM;
         chartC += parseInt(`${readA}`) + 3;
         readA /= Math.max(parseFloat(`${taiwanJ.length}`), 5);
         break;
      }
      annert = `${adultW.length}`;
       let viewerP = 3;
       let dropdown0 = String.fromCharCode(112,114,101,99,111,109,112,95,117,95,50,53,0);
      while ((viewerP ^ dropdown0.length) <= 3) {
          let fieldD = 4.0;
          let watchx = 2.0;
          let actionP = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,95,102,95,50,48,0);
         dropdown0 = `${parseInt(`${watchx}`)}`;
         fieldD -= parseFloat(`${parseInt(`${fieldD}`) << (Math.min(Math.abs(1), 3))}`);
         watchx += actionP.length;
         actionP = `${parseInt(`${fieldD}`) / (Math.max(actionP.length, 8))}`;
         break;
      }
      if (3 > (viewerP | 4)) {
          let editp = 5;
          let commonq = 0;
          let headerh: Array<any> = [846, 367];
          let settings5 = 5.0;
          let filterK = String.fromCharCode(100,101,102,97,117,108,116,115,95,57,95,49,55,0);
         dropdown0 = `${3 % (Math.max(5, commonq))}`;
         editp <<= Math.min(Math.abs(2), 5);
         commonq *= filterK.length;
         headerh.push(filterK.length / 1);
         settings5 += parseFloat(`${filterK.length % (Math.max(1, 9))}`);
      }
      if (dropdown0.includes(`${viewerP}`)) {
         viewerP ^= dropdown0.length;
      }
      while (viewerP >= dropdown0.length) {
         viewerP /= Math.max(viewerP, 3);
         break;
      }
         viewerP |= (String.fromCharCode(106,0) == dropdown0 ? dropdown0.length : viewerP);
      let castingr = viewerP >= 9570282;
      do {
          let questF = String.fromCharCode(107,95,55,95,109,111,100,101,109,118,99,111,115,116,0);
          let dialogr = false;
          let borderlessK = String.fromCharCode(112,114,111,99,101,115,115,95,106,95,51,56,0);
          let downloaderz = String.fromCharCode(98,95,55,50,95,116,114,97,110,115,108,97,116,101,100,0);
          let promotionk = false;
         viewerP %= Math.max(3, 3);
         questF += `${(String.fromCharCode(72,0) == questF ? questF.length : (dialogr ? 2 : 4))}`;
         dialogr = promotionk;
         borderlessK += `${borderlessK.length & 3}`;
         downloaderz = "3";
         if (castingr) {
            break;
         }
      } while ((2 < (dropdown0.length * 2)) && castingr);
      statisticsN += `${filedb.length - 3}`;
   for (let g = 0; g < 1; g++) {
      statistics8 += `${2 | annert.length}`;
   }
   for (let s = 0; s < 3; s++) {
       let typingx = false;
       let stationso = true;
      let injuryi = typingx ? !typingx : typingx;
      do {
         typingx = !stationso || typingx;
         if (injuryi) {
            break;
         }
      } while ((stationso) && injuryi);
      if (!typingx || !stationso) {
          let untickc = String.fromCharCode(116,115,97,110,95,122,95,54,53,0);
          let long_jqx = 2.0;
          let headern = 5;
         stationso = !stationso && untickc.length > 76;
         untickc += `${parseInt(`${long_jqx}`) | headern}`;
         long_jqx -= 1;
         headern &= headern | 2;
      }
      for (let q = 0; q < 3; q++) {
          let forwardX = String.fromCharCode(118,95,54,54,95,104,101,97,112,0);
          let mathV = false;
          let untick9 = 4;
          let s_titleu: Map<any, any> = new Map([[String.fromCharCode(110,95,54,52,95,115,99,97,108,97,114,0),String.fromCharCode(99,104,97,110,103,101,108,111,103,95,53,95,56,0)], [String.fromCharCode(106,95,49,57,95,97,102,102,101,99,116,101,100,0),String.fromCharCode(116,114,97,110,115,112,111,110,101,100,95,49,95,56,57,0)], [String.fromCharCode(108,95,49,51,95,112,97,121,108,111,97,100,0),String.fromCharCode(109,105,110,109,97,120,95,57,95,53,56,0)]]);
         stationso = 44 == untick9 && !stationso;
         forwardX += `${(String.fromCharCode(84,0) == forwardX ? (mathV ? 5 : 3) : forwardX.length)}`;
         mathV = forwardX.length < 86;
         untick9 ^= forwardX.length;
         s_titleu.set(`${mathV}`, (1 ^ (mathV ? 5 : 4)));
      }
      while (stationso) {
         typingx = !stationso && typingx;
         break;
      }
      for (let k = 0; k < 2; k++) {
         typingx = stationso;
      }
      for (let o = 0; o < 3; o++) {
         typingx = !typingx && !stationso;
      }
      previewV = new Map([[adultW, adultW.length]]);
   }
   while (!annert.startsWith(`${previewV.size}`)) {
      previewV = new Map([[annert, (filedb == String.fromCharCode(88,0) ? annert.length : filedb.length)]]);
      break;
   }
      adultW += `${adultW.length}`;
       let downloads = String.fromCharCode(102,95,57,48,95,100,114,111,112,112,101,100,0);
       let mini1 = 1;
       let relatedM = String.fromCharCode(120,95,53,50,95,100,105,102,102,120,0);
         downloads = `${relatedM.length}`;
      let page6 = relatedM.length <= 5952629;
      do {
         relatedM += "1";
         if (page6) {
            break;
         }
      } while (page6 && (3 > (mini1 & relatedM.length)));
         mini1 &= (relatedM == String.fromCharCode(48,0) ? downloads.length : relatedM.length);
      let gestureh = 9669016 <= relatedM.length;
      do {
         relatedM = "1";
         if (gestureh) {
            break;
         }
      } while ((1 <= (mini1 % (Math.max(relatedM.length, 6))) && 1 <= (mini1 % (Math.max(relatedM.length, 7)))) && gestureh);
      let settingso = 5442044 <= mini1;
      do {
         mini1 <<= Math.min(Math.abs(downloads.length << (Math.min(2, Math.abs(mini1)))), 5);
         if (settingso) {
            break;
         }
      } while (settingso && ((mini1 | downloads.length) == 3));
      let controlsQ = downloads.length >= 5633975;
      do {
         downloads += "1 - mini1";
         if (controlsQ) {
            break;
         }
      } while (controlsQ && (downloads.startsWith(`${mini1}`)));
         downloads = `${mini1}`;
          let target9 = String.fromCharCode(111,111,117,114,97,95,121,95,54,55,0);
         mini1 |= (String.fromCharCode(97,0) == downloads ? mini1 : downloads.length);
         target9 = `${target9.length + 3}`;
         mini1 -= 1 | downloads.length;
      statistics8 = `${relatedM.length}`;
   let googlet = alertZ >= 9565771;
   do {
       let left5 = false;
       let n_countj = true;
       let bodanq = String.fromCharCode(97,118,97,105,108,95,97,95,53,51,0);
      if (bodanq.length < 4) {
         bodanq += "1";
      }
         n_countj = !bodanq.endsWith(`${n_countj}`);
      while (bodanq.endsWith(`${left5}`)) {
          let combineM = 5.0;
          let dataD = String.fromCharCode(103,95,52,50,95,107,105,99,107,101,114,0);
          let emptyn = String.fromCharCode(98,95,50,55,95,115,116,114,101,116,99,104,97,98,108,101,0);
          let borderlessL = 2;
          let suggestion4 = String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,100,95,54,51,0);
         bodanq = "1";
         combineM /= Math.max(parseFloat(`${emptyn.length}`), 1);
         dataD += `${emptyn.length}`;
         borderlessL >>= Math.min(1, Math.abs(1));
         suggestion4 += `${suggestion4.length * emptyn.length}`;
         break;
      }
      while (left5) {
         left5 = ((bodanq.length - (n_countj ? bodanq.length : 66)) == 66);
         break;
      }
      let searchbarf = n_countj ? !n_countj : n_countj;
      do {
         n_countj = (n_countj ? !left5 : n_countj);
         if (searchbarf) {
            break;
         }
      } while (searchbarf && (n_countj || left5));
         left5 = ((bodanq.length - (left5 ? 19 : bodanq.length)) == 19);
      for (let k = 0; k < 1; k++) {
         bodanq += `${2 >> (Math.min(2, bodanq.length))}`;
      }
      while (!n_countj && left5) {
         n_countj = bodanq.length == 49;
         break;
      }
         n_countj = (left5 ? n_countj : left5);
      alertZ <<= Math.min(Math.abs((statistics8 == String.fromCharCode(117,0) ? parseInt(`${activeV}`) : statistics8.length)), 1);
      if (googlet) {
         break;
      }
   } while (googlet && (!statisticsN.startsWith(`${alertZ}`)));
      emojid = "1";
    delayControls(!paused);

   let relatedy = alertZ <= 9767888;
   do {
      alertZ += (String.fromCharCode(82,0) == adultW ? statisticsN.length : adultW.length);
      if (relatedy) {
         break;
      }
   } while ((4 <= (alertZ / (Math.max(9, switch_90))) || (4 / (Math.max(2, alertZ))) <= 3) && relatedy);
   if ((adultW.length & 4) == 5 || 1 == (adultW.length & 4)) {
      adultW += `${alertZ ^ previewV.size}`;
   }
   let starX = switch_90 >= 6093715;
   do {
      switch_90 %= Math.max(4, alertZ);
      if (starX) {
         break;
      }
   } while ((2 < (switch_90 << (Math.min(Math.abs(5), 4))) && (5 << (Math.min(2, Math.abs(switch_90)))) < 3) && starX);
   while (5 >= (2 & previewV.size)) {
      previewV.set(`${alertZ}`, 1);
      break;
   }
   while (switch_90 >= previewV.size) {
      previewV = new Map([[adultW, adultW.length]]);
      break;
   }
   while (3 > langkeyc.size) {
      langkeyc = new Map([[`${langkeyc.size}`, langkeyc.size / 1]]);
      break;
   }
   if (statisticsN == filedb) {
      filedb = `${statistics8.length}`;
   }
   for (let a = 0; a < 3; a++) {
       let prediction3 = 3;
       let singaporev = String.fromCharCode(109,97,114,107,100,111,119,110,95,54,95,55,55,0);
      if (prediction3 > singaporev.length) {
         prediction3 /= Math.max(2, (singaporev == String.fromCharCode(108,0) ? singaporev.length : prediction3));
      }
      if ((3 ^ singaporev.length) < 1 && 3 < (prediction3 ^ singaporev.length)) {
          let refreshJ = String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,102,95,52,56,0);
          let selecto = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,51,95,55,51,0);
          let reportV: Array<any> = [603, 409, 125];
          let hooksm = String.fromCharCode(107,95,54,49,95,117,99,109,112,0);
          let sidet = 2.0;
         singaporev += `${hooksm.length}`;
         refreshJ = `${reportV.length + 2}`;
         selecto += "1";
         reportV = [2];
         hooksm += `${reportV.length}`;
         sidet -= parseFloat(`${parseInt(`${sidet}`) | selecto.length}`);
      }
       let whatsappH = String.fromCharCode(106,95,56,51,95,98,101,104,97,118,105,111,117,114,0);
       let arrowy = String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,108,95,54,51,0);
      while (5 < (whatsappH.length + prediction3)) {
         whatsappH += `${whatsappH.length}`;
         break;
      }
         arrowy += `${arrowy.length}`;
         whatsappH = `${singaporev.length - 3}`;
      alertZ ^= emojid.length;
   }
      shooti = `${filedb.length}`;
      switch_90 |= 2 ^ previewV.size;
   while (1 < (switch_90 + langkeyc.size) && 5 < (1 + switch_90)) {
      langkeyc.set(`${shooti}`, (shooti == String.fromCharCode(52,0) ? langkeyc.size : shooti.length));
      break;
   }
       let statisticsd: Array<any> = [164, 477, 263];
       let handler_ = 1.0;
      let searchB = 5984271.0 >= handler_;
      do {
          let minimizep: Array<any> = [String.fromCharCode(109,95,56,53,95,114,101,106,101,99,116,101,100,0), String.fromCharCode(111,95,56,51,95,115,101,110,99,0)];
         handler_ += minimizep.length << (Math.min(Math.abs(2), 1));
         if (searchB) {
            break;
         }
      } while ((3 == (2 | statisticsd.length)) && searchB);
          let carouselt = 1;
          let submitL = true;
         handler_ /= Math.max(carouselt, 5);
         carouselt /= Math.max(5, ((submitL ? 1 : 4) & (submitL ? 2 : 3)));
         statisticsd.push(statisticsd.length / (Math.max(2, 6)));
       let club8: Array<any> = [535, 337, 379];
       let membershipp: Array<any> = [174, 463];
      while ((2 ^ club8.length) <= 1 && (membershipp.length ^ 2) <= 3) {
         club8.push(2 ^ parseInt(`${handler_}`));
         break;
      }
         club8 = [1 & statisticsd.length];
      statisticsN += `${2 ^ previewV.size}`;
      filedb = "3";
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let launch3 = 1.0;
    let fullN = String.fromCharCode(118,95,57,50,95,97,115,115,117,109,101,0);
    let iconw = false;
    let backx = 5.0;
    let otherQ: Map<any, any> = new Map([[String.fromCharCode(107,95,56,57,95,117,110,109,105,120,0),true ], [String.fromCharCode(107,95,57,50,95,98,97,99,107,103,114,117,110,100,0),true ], [String.fromCharCode(112,114,101,117,112,100,97,116,101,95,120,95,55,52,0),false ]]);
    let routerD: Array<any> = [String.fromCharCode(108,97,117,110,99,104,101,115,95,113,95,55,55,0), String.fromCharCode(99,95,54,55,95,115,117,112,101,114,103,114,111,117,112,0), String.fromCharCode(110,95,53,51,95,115,117,112,101,114,110,111,100,101,115,0)];
    let macauJ = String.fromCharCode(99,111,108,115,101,116,95,107,95,51,55,0);
    let rankb = String.fromCharCode(107,95,55,54,95,100,101,110,111,105,115,101,102,105,108,116,101,114,0);
    let private_ee4: Map<any, any> = new Map([[String.fromCharCode(117,95,51,57,95,99,114,111,119,100,105,110,0),844], [String.fromCharCode(105,95,53,49,95,101,118,112,111,114,116,0),741], [String.fromCharCode(99,111,110,102,111,114,109,115,95,115,95,56,53,0),3]]);
      otherQ.set(`${launch3}`, parseInt(`${launch3}`) & 2);
       let profile1 = String.fromCharCode(109,106,112,101,103,101,110,99,95,111,95,51,50,0);
       let index5 = String.fromCharCode(121,95,54,48,95,115,97,110,105,116,105,122,101,100,0);
          let serviceH = String.fromCharCode(113,112,101,108,100,115,112,95,115,95,57,57,0);
         profile1 = `${serviceH.length & 2}`;
      for (let w = 0; w < 1; w++) {
         index5 = `${index5.length}`;
      }
         index5 += "2";
          let regengM = String.fromCharCode(97,117,100,105,111,103,101,110,95,97,95,50,56,0);
         index5 += `${(String.fromCharCode(83,0) == profile1 ? profile1.length : regengM.length)}`;
      let logoutC = String.fromCharCode(118,115,116,57,122,110,113,0) == profile1;
      do {
         profile1 += `${profile1.length}`;
         if (logoutC) {
            break;
         }
      } while ((profile1 == String.fromCharCode(70,0) || index5 == String.fromCharCode(76,0)) && logoutC);
      while (index5 == profile1) {
          let starg = 5.0;
          let twitter6 = String.fromCharCode(112,101,114,115,105,115,116,95,53,95,51,50,0);
         profile1 = `${parseInt(`${starg}`)}`;
         starg *= twitter6.length & 2;
         twitter6 += `${twitter6.length}`;
         break;
      }
      backx += (parseFloat(`${String.fromCharCode(120,0) == fullN ? routerD.length : fullN.length}`));
      otherQ = new Map([[`${iconw}`, 3]]);
   if (macauJ.includes(`${routerD.length}`)) {
      macauJ += `${parseInt(`${launch3}`) % (Math.max(6, routerD.length))}`;
   }
   let modalV = iconw ? !iconw : iconw;
   do {
       let emojiy = String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,119,95,57,0);
       let middleU = true;
          let annerc: Array<any> = [950, 498, 304];
          let viewerT = false;
          let about1 = String.fromCharCode(105,95,51,49,95,100,97,116,101,116,105,109,101,0);
         middleU = !middleU;
         annerc = [(String.fromCharCode(122,0) == about1 ? about1.length : (viewerT ? 3 : 5))];
         viewerT = annerc.includes(viewerT);
          let overv = String.fromCharCode(105,110,116,101,114,114,117,112,116,95,112,95,55,52,0);
          let scorez = String.fromCharCode(115,117,103,103,101,115,116,101,100,95,121,95,54,56,0);
          let zhengpianv = String.fromCharCode(110,95,54,54,95,115,99,97,108,101,102,97,99,116,111,114,115,0);
         emojiy = `${zhengpianv.length}`;
         overv += `${scorez.length}`;
         scorez = `${(String.fromCharCode(56,0) == scorez ? overv.length : scorez.length)}`;
         zhengpianv += `${overv.length << (Math.min(Math.abs(2), 5))}`;
      if (!emojiy.startsWith(`${middleU}`)) {
          let theme3 = 4;
          let componentz = 5.0;
          let becomew = false;
          let homea = 2;
          let slidero = String.fromCharCode(114,101,115,112,111,110,100,101,114,95,102,95,50,54,0);
         emojiy += "2";
         theme3 ^= theme3;
         componentz -= 3;
         becomew = homea == 88;
         homea /= Math.max(4, 3 - homea);
         slidero = `${(slidero == String.fromCharCode(95,0) ? slidero.length : homea)}`;
      }
      while (4 > emojiy.length) {
         emojiy = `${(emojiy == String.fromCharCode(112,0) ? emojiy.length : (middleU ? 5 : 1))}`;
         break;
      }
       let anewsj: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,100,97,115,104,98,111,97,114,100,0),String.fromCharCode(115,112,108,97,110,101,95,108,95,50,52,0)], [String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,103,95,55,56,0),String.fromCharCode(104,95,57,57,95,101,114,114,115,116,114,0)]]);
       let stringH: Map<any, any> = new Map([[String.fromCharCode(116,115,99,99,95,110,95,49,53,0),657], [String.fromCharCode(100,114,97,119,116,101,120,116,95,108,95,49,51,0),519], [String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,121,95,54,53,0),940]]);
      for (let x = 0; x < 1; x++) {
         anewsj.set(`${middleU}`, anewsj.size);
      }
      iconw = (10 > (fullN.length * (!middleU ? fullN.length : 10)));
      if (modalV) {
         break;
      }
   } while (modalV && ((backx / (Math.max(1.48, 5))) > 3.87 || backx > 1.48));
   let xvodv = macauJ.length <= 8380522;
   do {
      macauJ = `${routerD.length}`;
      if (xvodv) {
         break;
      }
   } while ((otherQ.size <= macauJ.length) && xvodv);
      macauJ = `${routerD.length}`;
      routerD.push(fullN.length);
      fullN = `${routerD.length << (Math.min(3, Math.abs(parseInt(`${launch3}`))))}`;
      macauJ = `${2 | routerD.length}`;
      backx += parseFloat(`${parseInt(`${backx}`)}`);
   if ((parseFloat(`${fullN.length}`) * launch3) > 1.3 && 1.3 > (parseFloat(`${fullN.length}`) * launch3)) {
       let lessk: Array<any> = [String.fromCharCode(111,108,107,97,100,111,116,95,110,95,53,52,0), String.fromCharCode(112,95,57,48,95,115,105,98,108,105,110,103,0), String.fromCharCode(104,95,53,48,95,116,114,97,110,115,99,116,105,111,110,0)];
       let style2 = 4.0;
         style2 -= parseInt(`${style2}`);
      while ((lessk.length - style2) <= 3.8 && 4.88 <= (3.8 - style2)) {
          let volumea: Array<any> = [155, 425];
          let volumeN = String.fromCharCode(98,95,50,51,95,116,101,115,116,114,97,110,115,0);
          let sortF: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,97,112,112,101,110,100,101,100,0),129], [String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,101,95,53,0),667]]);
         lessk = [volumeN.length % 3];
         volumea.push(1 + volumea.length);
         volumeN += `${volumea.length}`;
         sortF = new Map([[`${sortF.size}`, 2]]);
         break;
      }
      if (3.68 <= (style2 + 4.59) || (lessk.length + style2) <= 4.59) {
          let watch6 = String.fromCharCode(106,95,54,49,95,104,109,97,99,0);
          let eventS: Map<any, any> = new Map([[String.fromCharCode(98,95,50,52,95,116,101,110,99,0),59], [String.fromCharCode(117,110,114,101,115,101,114,118,101,100,95,49,95,54,56,0),460]]);
         style2 *= 1;
         watch6 = `${eventS.size / (Math.max(watch6.length, 4))}`;
         eventS.set(`${watch6}`, eventS.size >> (Math.min(Math.abs(1), 1)));
      }
         style2 /= Math.max(1, 1);
      let ticked0 = 6694359 >= lessk.length;
      do {
         lessk.push(parseInt(`${style2}`));
         if (ticked0) {
            break;
         }
      } while ((1.62 == (style2 / (Math.max(lessk.length, 1))) && 5 == (3 << (Math.min(2, lessk.length)))) && ticked0);
      while (5.49 >= (style2 * 1.54) || (parseInt(`${style2}`) * lessk.length) >= 1) {
         style2 += parseInt(`${style2}`) % 1;
         break;
      }
      fullN += `${routerD.length}`;
   }
   if ((otherQ.size + routerD.length) == 1 || 4 == (1 + routerD.length)) {
      routerD = [fullN.length];
   }
      fullN = `${2 + fullN.length}`;
       let yingA = String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,95,50,95,49,48,0);
      while (!yingA.includes(yingA)) {
         yingA += "2";
         break;
      }
      while (yingA == String.fromCharCode(83,0) && yingA.length == 2) {
          let stationsR: Array<any> = [873, 470, 956];
          let langkeyW = 1;
          let hoverm = false;
         yingA += `${stationsR.length + yingA.length}`;
         stationsR.push(1);
         langkeyW -= (langkeyW + (hoverm ? 1 : 5));
         hoverm = langkeyW >= 94;
         break;
      }
         yingA = `${yingA.length}`;
      backx += parseFloat(`${2 & fullN.length}`);
   for (let q = 0; q < 1; q++) {
      backx /= Math.max(1, parseFloat(`${1 ^ macauJ.length}`));
   }
   let analyticsD = routerD.length <= 6989378;
   do {
       let h_count7: Array<any> = [974, 835];
       let langG = 0.0;
       let brightnessv = 1.0;
         langG += parseInt(`${langG}`) / 3;
         h_count7.push(parseInt(`${langG}`) / (Math.max(h_count7.length, 6)));
         h_count7.push(h_count7.length);
          let currentu = 2.0;
          let internetd = 3.0;
          let transfert = String.fromCharCode(122,95,57,55,95,108,105,103,104,116,110,101,115,115,0);
         langG -= h_count7.length | parseInt(`${currentu}`);
         currentu *= parseFloat(`${1 >> (Math.min(5, transfert.length))}`);
         internetd -= parseInt(`${internetd}`);
         transfert += "2";
      for (let r = 0; r < 3; r++) {
         langG *= h_count7.length & 2;
      }
      let liveT = 6704904.0 <= langG;
      do {
         langG *= 1 * parseInt(`${brightnessv}`);
         if (liveT) {
            break;
         }
      } while ((3 < (h_count7.length << (Math.min(Math.abs(1), 5))) || (4.4 * langG) < 1.22) && liveT);
      while (1.33 > langG) {
          let entryx = 2.0;
          let ballW = false;
          let profileO = false;
          let save8 = 3.0;
          let acceptedJ = 4.0;
         brightnessv /= Math.max(4, parseFloat(`${2 & parseInt(`${save8}`)}`));
         entryx *= (parseFloat(`${parseInt(`${acceptedJ}`) & (profileO ? 1 : 5)}`));
         ballW = !ballW;
         profileO = !ballW;
         save8 -= 3 % (Math.max(10, parseInt(`${entryx}`)));
         acceptedJ -= (parseFloat(`${parseInt(`${entryx}`) << (Math.min(1, Math.abs((ballW ? 4 : 3))))}`));
         break;
      }
      let pageR = 9330000.0 <= langG;
      do {
         langG += parseInt(`${langG}`) * 1;
         if (pageR) {
            break;
         }
      } while (pageR && ((brightnessv * 5.56) >= 1.75 && 2.82 >= (5.56 * brightnessv)));
      let overlayH = langG >= 9580798.0;
      do {
         langG += parseInt(`${brightnessv}`) | parseInt(`${langG}`);
         if (overlayH) {
            break;
         }
      } while ((2.11 > (2.46 - langG) || (langG * brightnessv) > 2.46) && overlayH);
      routerD = [2];
      if (analyticsD) {
         break;
      }
   } while (((3.62 + launch3) == 1.90 && (3.62 + launch3) == 1.15) && analyticsD);

    onHandleFullScreen();
  };

  const goBack = () => {
       let clockN: Array<any> = [String.fromCharCode(114,101,99,101,105,118,101,100,95,102,95,57,57,0), String.fromCharCode(117,95,57,56,95,99,97,110,99,101,108,108,97,98,108,101,0), String.fromCharCode(100,101,113,117,97,110,116,95,97,95,48,0)];
    let tickX: Map<any, any> = new Map([[String.fromCharCode(103,114,101,103,95,104,95,56,49,0),392], [String.fromCharCode(98,101,122,105,101,114,95,119,95,55,49,0),182], [String.fromCharCode(119,95,50,57,95,100,115,112,114,0),643]]);
    let const_2G = String.fromCharCode(98,95,49,51,95,99,114,111,110,111,115,0);
    let heartE = String.fromCharCode(100,100,118,97,95,120,95,49,54,0);
    let typesW = 5;
    let iconO = false;
    let giftz = 0.0;
    let change5 = 4.0;
    let lightP: Map<any, any> = new Map([[String.fromCharCode(98,95,51,57,95,97,116,111,109,105,99,115,0),false ], [String.fromCharCode(113,95,52,52,95,103,101,116,112,97,100,100,114,115,0),true ], [String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,95,109,95,53,53,0),false ]]);
    let watch6: Array<any> = [392, 273];
    let soundu = String.fromCharCode(115,101,108,101,99,116,111,114,95,110,95,50,50,0);
    let usernameO = String.fromCharCode(104,95,49,57,95,100,101,115,99,114,105,98,101,0);
      watch6 = [tickX.size];
      usernameO += `${watch6.length}`;
   let privilegeg = tickX.size >= 7037025;
   do {
       let viewerI = 2;
       let movies4: Array<any> = [54, 773];
       let selectionn = 5.0;
       let favorited = true;
       let stats1 = 4;
      while ((selectionn + 5.35) <= 4.27) {
         selectionn *= parseInt(`${selectionn}`);
         break;
      }
      while (4 <= (viewerI & stats1)) {
          let splashy = 3.0;
          let bellD = String.fromCharCode(114,101,115,95,111,95,56,57,0);
          let away2 = String.fromCharCode(116,95,56,95,97,109,111,117,110,116,0);
         viewerI ^= 2;
         splashy /= Math.max(4, (bellD == String.fromCharCode(119,0) ? bellD.length : parseInt(`${splashy}`)));
         away2 = `${parseInt(`${splashy}`) | 1}`;
         break;
      }
      let memberf = viewerI >= 9349059;
      do {
         viewerI -= stats1;
         if (memberf) {
            break;
         }
      } while (memberf && ((4 - viewerI) > 2));
         viewerI ^= movies4.length;
      for (let w = 0; w < 3; w++) {
         movies4 = [1 & movies4.length];
      }
         movies4 = [1 | parseInt(`${selectionn}`)];
      if (selectionn >= stats1) {
         selectionn -= viewerI * 2;
      }
          let bodann = 5;
         stats1 *= (parseInt(`${selectionn}`) >> (Math.min(2, Math.abs((favorited ? 4 : 4)))));
         bodann <<= Math.min(Math.abs(bodann % (Math.max(3, bodann))), 5);
      if (!favorited) {
          let scheduleX = 3.0;
          let regengs: Array<any> = [323, 912, 976];
          let hongkongJ: Array<any> = [194, 205, 252];
          let trashj = true;
          let singlec = String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,54,95,54,51,0);
         favorited = (parseInt(`${scheduleX}`) * regengs.length) == 100;
         scheduleX += (parseFloat(`${String.fromCharCode(109,0) == singlec ? singlec.length : hongkongJ.length}`));
         regengs.push(hongkongJ.length % 2);
         trashj = hongkongJ.length == 3 || !trashj;
      }
      for (let g = 0; g < 3; g++) {
          let privacy7: Array<any> = [878, 207, 467];
         viewerI &= stats1 | 3;
         privacy7.push(privacy7.length % 1);
      }
      if (favorited) {
         stats1 /= Math.max(3, viewerI);
      }
      for (let e = 0; e < 3; e++) {
          let servicep = String.fromCharCode(112,114,111,112,111,115,97,108,115,95,109,95,54,52,0);
          let g_player6 = String.fromCharCode(100,101,112,111,115,105,116,95,54,95,57,52,0);
          let championr = String.fromCharCode(116,95,48,95,118,101,114,105,102,121,0);
         selectionn /= Math.max((String.fromCharCode(55,0) == g_player6 ? servicep.length : g_player6.length), 3);
         servicep = "1";
      }
       let ewarded0 = String.fromCharCode(108,95,49,53,95,115,101,113,110,111,0);
      for (let c = 0; c < 3; c++) {
          let vignetteY: Map<any, any> = new Map([[String.fromCharCode(104,95,51,57,95,116,101,120,105,100,101,112,0),false ], [String.fromCharCode(122,95,57,48,0),true ]]);
          let area5: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,97,98,108,101,95,109,95,53,54,0),String.fromCharCode(115,121,109,111,100,100,95,109,95,56,53,0)], [String.fromCharCode(112,95,55,53,95,115,104,97,114,105,110,103,0),String.fromCharCode(101,95,57,48,95,115,101,101,0)]]);
         favorited = favorited || 89.16 <= selectionn;
         vignetteY.set(`${vignetteY.size}`, vignetteY.size);
         area5 = new Map([[`${area5.size}`, vignetteY.size | 2]]);
      }
      let policyL = viewerI <= 6317513;
      do {
          let robotoy = 2;
          let miniQ: Array<any> = [465, 944];
          let minimizej: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,101,100,95,119,95,52,56,0),864], [String.fromCharCode(115,95,53,51,95,115,121,115,99,116,108,115,0),258], [String.fromCharCode(110,95,54,57,95,100,110,115,108,97,98,101,108,0),61]]);
          let delegate_r3: Array<any> = [217, 549];
         viewerI /= Math.max(5, stats1);
         robotoy ^= minimizej.size >> (Math.min(miniQ.length, 3));
         miniQ.push(robotoy);
         minimizej.set(`${delegate_r3.length}`, 1 | delegate_r3.length);
         if (policyL) {
            break;
         }
      } while (((stats1 << (Math.min(Math.abs(viewerI), 2))) >= 1 || 3 >= (1 << (Math.min(5, Math.abs(stats1))))) && policyL);
      tickX = new Map([[const_2G, 2]]);
      if (privilegeg) {
         break;
      }
   } while ((typesW < tickX.size) && privilegeg);
      lightP.set(usernameO, usernameO.length % (Math.max(9, parseInt(`${change5}`))));
   if (Array.from(tickX.keys()).includes(`${lightP.size}`)) {
      tickX = new Map([[heartE, 2 - soundu.length]]);
   }
      tickX = new Map([[heartE, usernameO.length ^ 1]]);
   if (2 <= (tickX.size >> (Math.min(5, watch6.length))) || 5 <= (2 >> (Math.min(4, watch6.length)))) {
       let showE = false;
       let a_lock7 = String.fromCharCode(122,95,48,95,99,104,111,105,99,101,115,0);
       let rankR = String.fromCharCode(114,95,55,51,95,105,110,100,101,118,115,0);
       let sendz = String.fromCharCode(108,95,53,48,95,99,102,116,121,112,101,114,101,102,0);
       let renewN: Array<any> = [String.fromCharCode(99,114,101,97,116,105,110,103,95,122,95,55,51,0), String.fromCharCode(102,95,56,56,95,112,114,111,116,111,0), String.fromCharCode(97,116,117,114,97,116,105,111,110,95,52,95,53,50,0)];
         a_lock7 = `${(sendz.length % (Math.max(5, (showE ? 4 : 1))))}`;
      while ((4 - sendz.length) > 3 || (sendz.length - 4) > 2) {
         renewN = [3];
         break;
      }
         rankR += `${rankR.length}`;
         renewN.push(2);
         sendz += `${((showE ? 3 : 2))}`;
      while (a_lock7.includes(`${rankR.length}`)) {
         rankR = "3";
         break;
      }
         a_lock7 = `${(1 % (Math.max(10, (showE ? 5 : 4))))}`;
      while (rankR.length < sendz.length) {
         sendz += `${a_lock7.length}`;
         break;
      }
      while (!a_lock7.startsWith(`${renewN.length}`)) {
         a_lock7 += `${renewN.length / 2}`;
         break;
      }
      for (let d = 0; d < 3; d++) {
         renewN = [3];
      }
         a_lock7 += `${(2 + (showE ? 2 : 5))}`;
         a_lock7 = `${((showE ? 1 : 4) * 2)}`;
          let description_qdk = 0.0;
         showE = 25 < a_lock7.length;
         description_qdk /= Math.max(parseFloat(`${parseInt(`${description_qdk}`)}`), 4);
      if (a_lock7 != rankR) {
         rankR += `${sendz.length}`;
      }
         renewN.push(((showE ? 2 : 2) | 3));
      tickX = new Map([[`${watch6.length}`, (watch6.length % (Math.max(2, (iconO ? 4 : 3))))]]);
   }
   for (let n = 0; n < 1; n++) {
      usernameO += "3";
   }
      typesW >>= Math.min(Math.abs((String.fromCharCode(122,0) == const_2G ? const_2G.length : usernameO.length)), 2);
   if (usernameO.length == soundu.length) {
      usernameO = `${parseInt(`${giftz}`) | usernameO.length}`;
   }
      change5 += parseInt(`${change5}`);
   for (let w = 0; w < 1; w++) {
      watch6 = [lightP.size >> (Math.min(5, Math.abs(tickX.size)))];
   }
   while (4 == (1 * watch6.length) && 4.61 == (3.81 / (Math.max(8, giftz)))) {
      watch6.push(parseInt(`${giftz}`));
      break;
   }
       let lessn: Array<any> = [179, 562];
       let castX: Array<any> = [596, 386, 124];
      let logoutp = lessn.length >= 5226270;
      do {
         lessn.push(lessn.length / (Math.max(9, castX.length)));
         if (logoutp) {
            break;
         }
      } while (logoutp && (2 == (castX.length % 2) && (castX.length % 2) == 1));
         lessn.push(castX.length + 3);
      clockN.push(const_2G.length);
   let sellU = 8749736 >= const_2G.length;
   do {
      const_2G += `${const_2G.length - 1}`;
      if (sellU) {
         break;
      }
   } while (sellU && (tickX.size >= const_2G.length));
   let middleware3 = 7466841 <= usernameO.length;
   do {
       let carousel2 = 2.0;
       let penaltyG = 1.0;
         penaltyG -= parseFloat(`${parseInt(`${carousel2}`)}`);
         penaltyG /= Math.max(1, parseFloat(`${parseInt(`${penaltyG}`) & parseInt(`${carousel2}`)}`));
         penaltyG += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${penaltyG}`)), 1))}`);
      if ((penaltyG - carousel2) >= 4.27) {
         penaltyG += parseFloat(`${2}`);
      }
          let philippinese = 3.0;
          let window_ynx = String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,95,49,95,55,51,0);
          let volumeA = String.fromCharCode(111,95,52,56,95,115,104,111,119,110,0);
         penaltyG += parseFloat(`${3}`);
         philippinese -= volumeA.length;
         window_ynx = `${window_ynx.length}`;
         volumeA = `${1 + volumeA.length}`;
      let windS = 8438932.0 <= carousel2;
      do {
          let whatsappa: Array<any> = [283, 982];
          let yellowX = true;
          let smallo: Map<any, any> = new Map([[String.fromCharCode(99,95,51,49,95,109,101,116,114,105,99,115,0),540], [String.fromCharCode(111,95,52,50,95,100,101,116,0),758]]);
         carousel2 /= Math.max(4, (parseFloat(`${3 & (yellowX ? 4 : 3)}`)));
         whatsappa.push(1 >> (Math.min(5, whatsappa.length)));
         yellowX = (smallo.size & whatsappa.length) >= 91;
         smallo = new Map([[`${smallo.size}`, smallo.size]]);
         if (windS) {
            break;
         }
      } while (((carousel2 - 2.100) == 1.85) && windS);
      usernameO += `${((iconO ? 1 : 4) % (Math.max(lightP.size, 1)))}`;
      if (middleware3) {
         break;
      }
   } while (middleware3 && (const_2G.length == usernameO.length));
      soundu += `${typesW - 2}`;
      const_2G = `${clockN.length & parseInt(`${giftz}`)}`;
      watch6.push(parseInt(`${giftz}`) | parseInt(`${change5}`));

    delayControls();

      iconO = (watch6.length * lightP.size) == 21;
   for (let o = 0; o < 3; o++) {
      usernameO = `${soundu.length - 1}`;
   }
   if (!const_2G.includes(`${clockN.length}`)) {
      const_2G += `${watch6.length ^ 3}`;
   }
       let typesK = 2;
       let unselectedR = false;
       let hearte = 4.0;
         hearte += 2;
         unselectedR = (hearte + typesK) > 52;
      let action2 = 6606503 >= typesK;
      do {
         typesK -= typesK * parseInt(`${hearte}`);
         if (action2) {
            break;
         }
      } while (action2 && ((hearte * 1.74) <= 5.6));
      for (let s = 0; s < 3; s++) {
          let analytics1: Array<any> = [751, 991];
          let rewindi = String.fromCharCode(102,95,52,53,95,100,117,112,99,108,0);
         hearte += 3;
         analytics1.push((rewindi == String.fromCharCode(71,0) ? analytics1.length : rewindi.length));
      }
      while ((hearte * 5.3) == 2.12 && 5.3 == hearte) {
         hearte /= Math.max(2, 1);
         break;
      }
         unselectedR = !unselectedR || hearte > 33.7;
          let upgradeM: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,95,98,95,49,56,0),598], [String.fromCharCode(105,110,104,105,98,105,116,95,56,95,56,50,0),22]]);
          let const_eqa = 1;
         hearte /= Math.max(parseInt(`${hearte}`) - upgradeM.size, 3);
         upgradeM = new Map([[`${const_eqa}`, 2]]);
         const_eqa >>= Math.min(Math.abs(const_eqa << (Math.min(Math.abs(3), 3))), 4);
      if (5.2 <= (hearte * 3.23)) {
         unselectedR = typesK > 25 && hearte > 47.69;
      }
      while (typesK <= 2) {
          let singaporeo = true;
         typesK >>= Math.min(1, Math.abs(typesK));
         singaporeo = !singaporeo;
         break;
      }
      change5 *= parseInt(`${giftz}`) / (Math.max(soundu.length, 9));
   for (let r = 0; r < 1; r++) {
      giftz -= (parseFloat(`${(iconO ? 5 : 4) + typesW}`));
   }
      watch6 = [soundu.length / 1];
      heartE += `${3 + clockN.length}`;
   for (let r = 0; r < 1; r++) {
       let videos = String.fromCharCode(101,95,53,48,95,109,98,101,100,103,101,0);
       let controlsY = String.fromCharCode(118,95,56,55,95,116,104,101,105,114,0);
       let basketballp: Map<any, any> = new Map([[String.fromCharCode(118,95,51,54,95,115,98,105,116,115,0),626], [String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,121,95,52,48,0),555]]);
         controlsY += `${(String.fromCharCode(52,0) == videos ? basketballp.size : videos.length)}`;
      if (2 <= controlsY.length) {
          let singleD: Array<any> = [String.fromCharCode(97,95,57,50,0), String.fromCharCode(100,95,56,51,95,112,117,108,108,117,112,0)];
          let default_7P = 2.0;
          let favoritem = 0.0;
          let headerB = 5.0;
         videos = `${videos.length}`;
         singleD = [parseInt(`${favoritem}`)];
         default_7P /= Math.max(5, parseFloat(`${1}`));
         favoritem -= parseFloat(`${singleD.length}`);
         headerB *= parseInt(`${favoritem}`);
      }
      if (videos.length <= 4 || controlsY != String.fromCharCode(102,0)) {
          let pingv = false;
          let clearb = false;
         videos += "1";
         pingv = pingv || pingv;
         clearb = !pingv;
      }
         basketballp = new Map([[`${basketballp.size}`, basketballp.size - controlsY.length]]);
      while (videos == String.fromCharCode(99,0)) {
         controlsY = `${basketballp.size}`;
         break;
      }
      let pingF = controlsY == String.fromCharCode(118,55,111,48,110,0);
      do {
         controlsY += "1";
         if (pingF) {
            break;
         }
      } while (pingF && (1 <= (basketballp.size / (Math.max(controlsY.length, 5)))));
         videos += `${basketballp.size}`;
      if ((controlsY.length * 4) < 5) {
         controlsY += `${controlsY.length}`;
      }
         videos += `${basketballp.size}`;
      usernameO = "3";
   }
       let profile6: Map<any, any> = new Map([[String.fromCharCode(103,95,48,0),467], [String.fromCharCode(103,101,116,112,105,120,95,119,95,52,49,0),20]]);
      for (let m = 0; m < 1; m++) {
          let customU = String.fromCharCode(120,95,49,53,95,115,122,97,98,111,0);
          let user2 = 1.0;
          let previewM: Map<any, any> = new Map([[String.fromCharCode(103,95,54,55,95,109,111,100,101,99,111,110,116,0),String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,100,95,49,52,0)], [String.fromCharCode(119,97,108,107,95,116,95,49,53,0),String.fromCharCode(105,95,51,48,95,117,116,112,117,116,0)]]);
          let small1 = String.fromCharCode(114,101,113,117,101,115,116,115,95,100,95,53,0);
         profile6.set(`${customU}`, 2);
         customU = `${(String.fromCharCode(53,0) == small1 ? parseInt(`${user2}`) : small1.length)}`;
         user2 /= Math.max(3, parseFloat(`${3}`));
         previewM = new Map([[`${user2}`, parseInt(`${user2}`) << (Math.min(Math.abs(2), 5))]]);
      }
      if ((profile6.size & 3) >= 5 && (3 & profile6.size) >= 5) {
          let membershipv = String.fromCharCode(114,95,49,52,95,105,110,116,101,114,111,112,0);
          let nativeV: Map<any, any> = new Map([[String.fromCharCode(107,95,53,55,95,101,118,97,108,117,97,116,111,114,0),124], [String.fromCharCode(111,119,110,101,100,95,110,95,51,50,0),882], [String.fromCharCode(112,114,101,100,120,108,95,103,95,51,51,0),947]]);
         profile6.set(`${membershipv}`, 2);
         membershipv += `${nativeV.size}`;
         nativeV = new Map([[`${nativeV.size}`, 2 * nativeV.size]]);
      }
         profile6.set(`${profile6.size}`, profile6.size | profile6.size);
      clockN = [profile6.size * 1];
   while (!Array.from(lightP.keys()).includes(`${watch6.length}`)) {
      lightP.set(soundu, 2);
      break;
   }
   while (const_2G.length == 4) {
      giftz *= parseFloat(`${const_2G.length % 1}`);
      break;
   }
   let transferB = String.fromCharCode(98,114,113,105,55,104,113,0) == soundu;
   do {
      soundu += `${typesW ^ usernameO.length}`;
      if (transferB) {
         break;
      }
   } while (transferB && ((soundu.length | watch6.length) > 1));
       let unselectedU: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,98,114,111,97,100,99,97,115,116,0),411], [String.fromCharCode(100,101,112,101,110,100,95,112,95,49,53,0),616]]);
       let logoL: Map<any, any> = new Map([[String.fromCharCode(106,95,57,55,95,101,109,111,106,105,115,0),true ], [String.fromCharCode(116,111,107,101,110,116,120,95,107,95,52,49,0),false ], [String.fromCharCode(97,95,51,95,108,97,122,121,0),false ]]);
      let blacklisth = logoL.size <= 8746519;
      do {
          let sansY: Map<any, any> = new Map([[String.fromCharCode(109,95,49,52,95,108,105,98,116,103,118,111,105,112,0),961], [String.fromCharCode(100,95,55,53,95,109,111,100,117,108,101,115,0),870], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,100,95,53,56,0),282]]);
          let dialogH: Map<any, any> = new Map([[String.fromCharCode(112,95,54,51,95,110,99,114,121,112,116,105,111,110,0),String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,122,95,56,0)], [String.fromCharCode(110,95,53,49,95,114,101,112,114,101,112,97,114,101,0),String.fromCharCode(121,95,51,51,95,115,112,97,99,105,110,103,0)]]);
          let reminderP = 3.0;
          let lessA = String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,56,95,51,0);
          let castz = String.fromCharCode(118,95,55,49,95,98,108,97,107,101,0);
         logoL = new Map([[`${unselectedU.size}`, 2]]);
         sansY.set(`${reminderP}`, parseInt(`${reminderP}`));
         dialogH.set(`${castz}`, castz.length * dialogH.size);
         lessA += "2";
         if (blacklisth) {
            break;
         }
      } while (((logoL.size << (Math.min(Math.abs(5), 3))) > 2 && (unselectedU.size << (Math.min(Math.abs(logoL.size), 5))) > 5) && blacklisth);
       let temperature4 = 1.0;
      let interstitial4 = 6603462 >= logoL.size;
      do {
         logoL = new Map([[`${logoL.size}`, parseInt(`${temperature4}`) << (Math.min(Math.abs(2), 3))]]);
         if (interstitial4) {
            break;
         }
      } while (interstitial4 && (2 <= (3 % (Math.max(6, logoL.size))) && 4 <= (logoL.size % (Math.max(3, 6)))));
          let albumN = String.fromCharCode(98,95,53,51,95,101,120,112,97,110,115,105,111,110,0);
          let chinas = String.fromCharCode(115,117,112,112,108,121,95,112,95,49,57,0);
          let castingb = String.fromCharCode(118,95,55,52,95,112,111,111,108,0);
         temperature4 += parseFloat(`${2 + albumN.length}`);
         albumN += "2";
         chinas += `${chinas.length}`;
         castingb += `${1 + castingb.length}`;
       let minie: Map<any, any> = new Map([[String.fromCharCode(99,100,97,116,101,95,118,95,57,52,0),String.fromCharCode(109,100,99,116,95,106,95,50,50,0)], [String.fromCharCode(105,122,101,114,111,95,101,95,52,53,0),String.fromCharCode(117,118,109,118,95,116,95,56,55,0)], [String.fromCharCode(113,95,55,57,95,116,104,114,111,116,116,108,105,110,103,0),String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,97,95,52,55,0)]]);
       let lineR = String.fromCharCode(120,95,56,50,95,118,105,100,101,111,104,100,114,0);
       let zhubot = String.fromCharCode(101,95,53,50,95,117,116,105,108,105,116,105,101,115,0);
      iconO = null != tickX.get(`${change5}`);
       let headera: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,110,101,115,115,95,101,95,56,50,0),10], [String.fromCharCode(106,95,49,48,95,111,112,101,110,115,115,108,99,111,110,102,0),828]]);
       let faviconK = 5.0;
       let zhuboK = 0.0;
      let helperG = 9875913.0 <= zhuboK;
      do {
          let aboutn = String.fromCharCode(109,105,103,114,97,116,101,100,95,55,95,53,57,0);
          let specb = 2.0;
          let roomW = 2.0;
          let actionsv = String.fromCharCode(117,95,50,55,95,112,97,115,99,97,108,0);
          let gray6: Map<any, any> = new Map([[String.fromCharCode(115,119,105,112,101,100,95,107,95,52,54,0),402], [String.fromCharCode(100,95,51,56,95,102,111,114,101,105,103,110,0),967]]);
         zhuboK /= Math.max(parseFloat(`${gray6.size / 1}`), 4);
         aboutn = `${(aboutn == String.fromCharCode(115,0) ? parseInt(`${specb}`) : aboutn.length)}`;
         specb -= 1;
         roomW /= Math.max(parseInt(`${roomW}`) - parseInt(`${specb}`), 1);
         actionsv = `${parseInt(`${roomW}`) % 3}`;
         gray6 = new Map([[`${specb}`, parseInt(`${specb}`)]]);
         if (helperG) {
            break;
         }
      } while (helperG && (faviconK <= zhuboK));
      let long_7F = 9493922 >= headera.size;
      do {
          let popupw: Map<any, any> = new Map([[String.fromCharCode(101,120,97,99,116,95,56,95,52,52,0),String.fromCharCode(98,97,99,107,98,114,111,117,110,100,95,55,95,54,54,0)], [String.fromCharCode(97,110,97,108,121,115,101,95,98,95,51,50,0),String.fromCharCode(107,101,121,115,101,116,117,112,95,115,95,49,50,0)]]);
          let mailt = 2.0;
          let hoverD = String.fromCharCode(115,95,50,53,95,97,108,108,0);
          let dialogb = 0.0;
          let anytimex: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,115,101,100,95,52,95,52,48,0),String.fromCharCode(98,95,49,95,116,111,116,97,108,115,0)], [String.fromCharCode(100,114,97,102,116,95,118,95,56,48,0),String.fromCharCode(100,101,114,105,118,101,100,95,54,95,57,51,0)]]);
         headera = new Map([[`${headera.size}`, anytimex.size & 2]]);
         popupw = new Map([[hoverD, 1]]);
         mailt /= Math.max(2, parseFloat(`${hoverD.length | 2}`));
         dialogb /= Math.max(parseInt(`${dialogb}`), 4);
         anytimex = new Map([[`${popupw.size}`, popupw.size]]);
         if (long_7F) {
            break;
         }
      } while (long_7F && (headera.get(`${zhuboK}`) != null));
       let bingO = true;
       let register_bl = 5;
       let tumbnail_ = 5;
      if ((3 - headera.size) == 2) {
         headera = new Map([[`${headera.size}`, headera.size]]);
      }
         faviconK /= Math.max(parseInt(`${zhuboK}`) ^ 2, 2);
      while (Array.from(headera.keys()).includes(`${faviconK}`)) {
          let hookw: Array<any> = [310, 403];
          let incidentf = 5.0;
          let stylew = 0.0;
          let clockr = 1.0;
          let statsh = 4;
         faviconK -= 2;
         hookw = [1 % (Math.max(5, parseInt(`${clockr}`)))];
         incidentf -= parseInt(`${clockr}`);
         stylew *= 3;
         statsh *= statsh;
         break;
      }
       let w_lockv = 1.0;
       let emoji3 = 2.0;
      if ((emoji3 - zhuboK) >= 3.14 && (zhuboK - emoji3) >= 3.14) {
         emoji3 *= 2 - parseInt(`${w_lockv}`);
      }
      giftz *= parseFloat(`${lightP.size}`);
      giftz /= Math.max(parseFloat(`${tickX.size}`), 3);
      iconO = heartE == String.fromCharCode(103,0);
      watch6.push(3 / (Math.max(2, usernameO.length)));
   for (let j = 0; j < 2; j++) {
      soundu = `${clockN.length >> (Math.min(Math.abs(3), 1))}`;
   }
      tickX.set(`${change5}`, lightP.size * parseInt(`${change5}`));
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
       let type_lpQ: Map<any, any> = new Map([[String.fromCharCode(114,95,50,50,95,118,97,114,105,110,116,115,0),861], [String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,120,95,51,55,0),585]]);
    let delegate_797 = 5.0;
    let awayS: Array<any> = [845, 481];
    let mutedr = String.fromCharCode(118,95,55,49,95,108,101,102,116,0);
    let containeri = 2;
    let whatsappf = true;
    let clock0 = String.fromCharCode(120,95,57,52,95,105,110,99,108,117,100,101,115,0);
    let minimize6 = 5.0;
    let c_count9: Map<any, any> = new Map([[String.fromCharCode(103,95,51,53,95,116,104,101,97,116,101,114,0),413], [String.fromCharCode(117,95,49,54,95,99,111,109,112,0),398], [String.fromCharCode(99,108,117,116,115,95,103,95,51,53,0),757]]);
    let lightV = false;
      containeri &= 1 + mutedr.length;
   while (3 < type_lpQ.size || (type_lpQ.size / 3) < 1) {
       let twitterN: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,110,103,95,101,95,52,55,0),true ], [String.fromCharCode(109,97,115,107,115,95,102,95,53,56,0),false ]]);
         twitterN.set(`${twitterN.size}`, 1 + twitterN.size);
      while ((1 | twitterN.size) <= 3 && (1 | twitterN.size) <= 3) {
          let volumek = true;
          let championH = String.fromCharCode(114,95,51,49,95,109,97,105,110,100,98,0);
         twitterN = new Map([[`${volumek}`, 2]]);
         championH += `${championH.length}`;
         break;
      }
          let downloaderw: Array<any> = [813, 708];
          let penaltyH = 4;
          let actionso: Map<any, any> = new Map([[String.fromCharCode(102,111,114,119,97,114,100,101,100,95,121,95,53,52,0),String.fromCharCode(97,117,116,111,100,101,116,101,99,116,105,111,110,95,52,95,56,49,0)], [String.fromCharCode(116,114,105,109,109,101,100,95,100,95,50,56,0),String.fromCharCode(109,95,57,53,95,116,99,102,105,108,101,0)], [String.fromCharCode(111,95,52,57,95,109,101,116,104,111,100,0),String.fromCharCode(113,95,57,56,95,99,111,108,108,97,112,115,105,110,103,0)]]);
         twitterN = new Map([[`${actionso.size}`, actionso.size]]);
         downloaderw.push(downloaderw.length);
         penaltyH ^= downloaderw.length;
      whatsappf = 73 < containeri;
      break;
   }
   while (1.98 >= (1.78 * delegate_797) || (1.78 * delegate_797) >= 1.47) {
      type_lpQ = new Map([[clock0, clock0.length - 1]]);
      break;
   }
   while (awayS.includes(delegate_797)) {
      awayS = [3];
      break;
   }
   if ((type_lpQ.size * 5) >= 3) {
      delegate_797 /= Math.max(2, 3 % (Math.max(8, awayS.length)));
   }
      delegate_797 *= containeri;
   if (1.43 == (containeri + delegate_797) || 1 == (containeri / 1)) {
       let nterstitial3 = true;
       let controlsW = true;
       let anytimeg = String.fromCharCode(122,95,55,51,0);
       let selectedC = String.fromCharCode(114,95,56,95,100,105,115,97,98,108,101,100,0);
      for (let e = 0; e < 1; e++) {
         controlsW = 25 < anytimeg.length;
      }
      for (let v = 0; v < 2; v++) {
         controlsW = !anytimeg.startsWith(`${nterstitial3}`);
      }
      while (selectedC.length >= 5) {
          let tumbnaili = String.fromCharCode(121,95,51,48,95,110,111,116,101,115,0);
          let penaltyR = 4.0;
          let gpayJ = 3.0;
          let eactY = true;
          let less2: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,95,100,95,52,0),542], [String.fromCharCode(115,99,105,101,110,116,105,102,105,99,95,119,95,51,50,0),414], [String.fromCharCode(115,116,105,112,112,101,100,95,49,95,53,56,0),806]]);
         nterstitial3 = !controlsW;
         tumbnaili = `${parseInt(`${gpayJ}`) | less2.size}`;
         penaltyR *= parseFloat(`${less2.size + parseInt(`${penaltyR}`)}`);
         gpayJ += tumbnaili.length;
         eactY = (parseFloat(`${less2.size}`) + penaltyR) > 79.71;
         break;
      }
      let data5 = anytimeg.length <= 9408286;
      do {
         anytimeg = `${((nterstitial3 ? 4 : 5) ^ (controlsW ? 1 : 5))}`;
         if (data5) {
            break;
         }
      } while ((anytimeg.length <= 2) && data5);
         nterstitial3 = anytimeg.length < 69 || !nterstitial3;
      if (!selectedC.includes(`${controlsW}`)) {
         controlsW = (((controlsW ? selectedC.length : 4) << (Math.min(selectedC.length, 5))) <= 4);
      }
         nterstitial3 = (69 == ((controlsW ? 69 : anytimeg.length) | anytimeg.length));
         anytimeg = "3";
      containeri <<= Math.min(3, Math.abs(containeri << (Math.min(Math.abs(type_lpQ.size), 2))));
   }
   while ((delegate_797 * 5.57) >= 3.60) {
      mutedr = "1";
      break;
   }
      awayS = [clock0.length ^ 3];
   for (let k = 0; k < 2; k++) {
       let brightness8 = String.fromCharCode(105,110,116,101,114,112,114,101,116,95,103,95,52,50,0);
       let select8 = String.fromCharCode(114,97,116,101,99,116,114,108,95,113,95,55,56,0);
       let macaus: Array<any> = [814, 344];
      if (4 <= brightness8.length) {
          let middlewarei = String.fromCharCode(106,95,56,51,95,105,111,101,114,114,0);
          let settingC = 0.0;
          let spinner1: Map<any, any> = new Map([[String.fromCharCode(120,95,53,51,95,116,101,109,112,111,114,97,114,121,0),false ], [String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,109,95,53,55,0),false ]]);
         select8 = `${(String.fromCharCode(99,0) == middlewarei ? parseInt(`${settingC}`) : middlewarei.length)}`;
         settingC *= parseFloat(`${spinner1.size >> (Math.min(Math.abs(spinner1.size), 3))}`);
      }
      let tumbnailt = String.fromCharCode(113,101,111,122,97,0) == select8;
      do {
          let l_lockW = 3.0;
          let expired8 = 1.0;
         select8 = `${parseInt(`${expired8}`)}`;
         l_lockW += parseFloat(`${3}`);
         expired8 /= Math.max(parseFloat(`${parseInt(`${l_lockW}`)}`), 1);
         if (tumbnailt) {
            break;
         }
      } while (tumbnailt && ((select8.length & macaus.length) == 1));
         macaus.push(brightness8.length);
         select8 = `${macaus.length + brightness8.length}`;
         brightness8 += `${macaus.length}`;
      mutedr += `${containeri % 1}`;
   }
   while (Array.from(c_count9.keys()).includes(`${containeri}`)) {
       let reada = 2.0;
       let minimizee = 0;
       let short_4ku = 1.0;
       let topicx: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,117,108,101,112,111,115,95,104,95,53,49,0),120], [String.fromCharCode(105,95,49,52,95,115,101,103,102,101,97,116,117,114,101,115,0),969], [String.fromCharCode(97,99,99,114,117,101,95,115,95,54,50,0),464]]);
         minimizee |= topicx.size;
      for (let i = 0; i < 1; i++) {
         reada *= minimizee & parseInt(`${short_4ku}`);
      }
          let update_0f_: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,118,97,100,107,104,122,0),585], [String.fromCharCode(98,95,57,95,112,97,117,115,101,0),706]]);
          let sendt = 4;
          let default_tpW = 2;
         reada *= sendt >> (Math.min(Math.abs(update_0f_.size), 3));
         update_0f_ = new Map([[`${default_tpW}`, 2]]);
         sendt ^= default_tpW;
      while ((minimizee & 4) >= 4) {
         minimizee >>= Math.min(Math.abs(parseInt(`${short_4ku}`) % 2), 2);
         break;
      }
       let disconnectedI = 4.0;
      let placeholdera = 7419014 >= topicx.size;
      do {
         topicx = new Map([[`${reada}`, minimizee]]);
         if (placeholdera) {
            break;
         }
      } while (((reada - 4.60) == 2.1) && placeholdera);
      for (let b = 0; b < 2; b++) {
          let alertz = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,100,95,56,95,57,0);
          let transfer8 = 3;
          let pointV = 3.0;
          let fastforwardt = String.fromCharCode(117,95,49,95,115,112,97,119,110,97,98,108,101,0);
         topicx = new Map([[`${disconnectedI}`, 2]]);
         alertz += "2";
         transfer8 -= (String.fromCharCode(114,0) == alertz ? alertz.length : parseInt(`${pointV}`));
         pointV /= Math.max((String.fromCharCode(71,0) == alertz ? alertz.length : transfer8), 3);
         fastforwardt += `${fastforwardt.length << (Math.min(Math.abs(2), 1))}`;
      }
         topicx.set(`${reada}`, topicx.size * parseInt(`${reada}`));
         short_4ku /= Math.max(parseFloat(`${topicx.size / (Math.max(1, 6))}`), 4);
         topicx = new Map([[`${disconnectedI}`, parseInt(`${disconnectedI}`)]]);
         short_4ku /= Math.max(5, parseFloat(`${topicx.size}`));
         topicx.set(`${reada}`, parseInt(`${reada}`) * topicx.size);
      c_count9 = new Map([[`${containeri}`, minimizee]]);
      break;
   }
      containeri |= clock0.length;

    setShowControls(!showControls);

   for (let d = 0; d < 2; d++) {
       let matchesZ: Map<any, any> = new Map([[String.fromCharCode(114,97,110,107,115,95,57,95,56,54,0),false ], [String.fromCharCode(99,95,54,53,95,111,110,101,111,102,115,0),true ], [String.fromCharCode(106,117,109,112,95,52,95,50,53,0),false ]]);
      if (5 == (matchesZ.size | matchesZ.size) && 2 == (matchesZ.size | 5)) {
         matchesZ.set(`${matchesZ.size}`, matchesZ.size - 3);
      }
      for (let z = 0; z < 2; z++) {
          let rankF = 0.0;
          let middleT = 3;
         matchesZ.set(`${middleT}`, 2 / (Math.max(middleT, 4)));
         rankF /= Math.max(2, 2);
      }
      while (Array.from(matchesZ.keys()).includes(`${matchesZ.size}`)) {
         matchesZ.set(`${matchesZ.size}`, 1 - matchesZ.size);
         break;
      }
      awayS.push((String.fromCharCode(54,0) == mutedr ? parseInt(`${delegate_797}`) : mutedr.length));
   }
       let rightU = String.fromCharCode(112,114,111,112,101,114,121,95,104,95,56,49,0);
         rightU = `${rightU.length}`;
          let hearta: Array<any> = [161, 838, 837];
          let episodesC = 1.0;
          let expiredE = String.fromCharCode(101,95,55,50,95,117,110,109,117,116,101,100,0);
         rightU += `${hearta.length | rightU.length}`;
         hearta.push(parseInt(`${episodesC}`));
         episodesC -= parseFloat(`${parseInt(`${episodesC}`)}`);
         expiredE += "3";
          let minimized = 3.0;
          let dropdown9 = String.fromCharCode(97,116,116,101,109,112,116,101,100,95,112,95,52,50,0);
         rightU += `${parseInt(`${minimized}`)}`;
         minimized -= parseFloat(`${1}`);
         dropdown9 = `${3 >> (Math.min(1, dropdown9.length))}`;
      containeri %= Math.max(5, parseInt(`${delegate_797}`));
       let commentt = 2;
       let appsj = 5;
          let completeA = String.fromCharCode(108,95,51,95,97,118,102,111,117,110,100,97,116,105,111,110,0);
          let phoneA = 2.0;
          let changeg = false;
         commentt %= Math.max(3 ^ completeA.length, 5);
         completeA += `${(parseInt(`${phoneA}`) % (Math.max(5, (changeg ? 2 : 5))))}`;
         phoneA *= (parseFloat(`${parseInt(`${phoneA}`) << (Math.min(3, Math.abs((changeg ? 4 : 2))))}`));
      for (let m = 0; m < 2; m++) {
          let sharedl = String.fromCharCode(108,95,49,48,48,95,104,107,100,102,0);
          let telegramr = 5.0;
          let langkeyF: Map<any, any> = new Map([[String.fromCharCode(120,95,51,48,95,114,101,115,116,114,105,99,116,101,100,0),false ], [String.fromCharCode(114,111,102,105,108,101,95,121,95,51,51,0),false ], [String.fromCharCode(98,101,122,101,108,95,116,95,54,52,0),true ]]);
          let nextr = 5;
          let sportU = String.fromCharCode(103,95,53,56,95,114,101,99,101,105,118,101,100,0);
         commentt += parseInt(`${telegramr}`) & commentt;
         sharedl = `${langkeyF.size / 1}`;
         telegramr *= parseFloat(`${nextr << (Math.min(sportU.length, 5))}`);
         langkeyF = new Map([[`${langkeyF.size}`, langkeyF.size | 3]]);
         nextr /= Math.max(5, langkeyF.size % 3);
         sportU = `${sharedl.length * 1}`;
      }
          let handlerT = String.fromCharCode(117,95,51,49,95,101,108,101,109,101,110,116,119,105,115,101,0);
          let configureW = String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,112,95,55,50,0);
         appsj |= 3 * appsj;
         handlerT += `${(handlerT == String.fromCharCode(74,0) ? configureW.length : handlerT.length)}`;
         configureW = `${1 ^ configureW.length}`;
         appsj >>= Math.min(Math.abs(commentt), 4);
          let submitk = String.fromCharCode(101,95,51,95,98,97,114,99,111,100,101,0);
         commentt += (String.fromCharCode(78,0) == submitk ? submitk.length : appsj);
      let otherr = 7333517 >= appsj;
      do {
         appsj %= Math.max(appsj * 2, 1);
         if (otherr) {
            break;
         }
      } while (((commentt % (Math.max(appsj, 4))) >= 3 && (commentt % 3) >= 1) && otherr);
      delegate_797 /= Math.max(1, 4);
       let overlayh = String.fromCharCode(100,101,99,97,121,95,106,95,48,0);
         overlayh += "3";
       let videod = 1.0;
         videod -= parseFloat(`${overlayh.length | parseInt(`${videod}`)}`);
      awayS.push(3);
      mutedr = `${containeri}`;
      whatsappf = null == c_count9.get(`${containeri}`);
      delegate_797 /= Math.max(3, parseInt(`${delegate_797}`) << (Math.min(1, Math.abs(parseInt(`${minimize6}`)))));
      awayS = [parseInt(`${minimize6}`) ^ c_count9.size];
   while (awayS.includes(delegate_797)) {
       let lessh = String.fromCharCode(105,95,54,51,95,99,111,110,100,101,110,115,101,100,0);
       let matchp = 0.0;
       let groupW = String.fromCharCode(115,97,118,101,95,109,95,53,52,0);
       let type_t5 = 5.0;
      for (let f = 0; f < 3; f++) {
         matchp -= 2;
      }
      while ((groupW.length / 5) <= 1 || 3 <= (5 % (Math.max(2, groupW.length)))) {
          let ajaxb = true;
          let arrowH = 5.0;
          let indicator2: Array<any> = [345, 485, 842];
         groupW += `${groupW.length}`;
         ajaxb = 62.78 <= arrowH;
         arrowH /= Math.max(parseFloat(`${3 % (Math.max(10, parseInt(`${arrowH}`)))}`), 1);
         indicator2 = [2 * parseInt(`${arrowH}`)];
         break;
      }
      if (matchp < lessh.length) {
          let cornerM = 5;
          let layoutz = String.fromCharCode(109,111,116,105,111,110,95,97,95,54,56,0);
          let nextl = String.fromCharCode(117,112,108,111,97,100,101,114,95,49,95,57,52,0);
         matchp /= Math.max(cornerM / 3, 4);
         cornerM += layoutz.length;
         layoutz += `${nextl.length}`;
         nextl = `${layoutz.length % (Math.max(2, 3))}`;
      }
      if (3 < (groupW.length / (Math.max(9, parseInt(`${matchp}`))))) {
         matchp /= Math.max(3, parseInt(`${type_t5}`) << (Math.min(Math.abs(3), 1)));
      }
       let heartk: Array<any> = [682, 178];
         lessh = `${parseInt(`${type_t5}`) % (Math.max(6, heartk.length))}`;
      let statisticsF = 7801274 >= heartk.length;
      do {
          let infoN = 0.0;
         heartk.push(heartk.length);
         infoN *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${infoN}`)), 4))}`);
         if (statisticsF) {
            break;
         }
      } while (((lessh.length % (Math.max(2, heartk.length))) < 3) && statisticsF);
         groupW += `${(lessh == String.fromCharCode(54,0) ? lessh.length : parseInt(`${matchp}`))}`;
      for (let l = 0; l < 1; l++) {
          let sendI = String.fromCharCode(120,95,55,57,95,116,111,111,108,98,97,114,0);
         groupW += `${groupW.length / (Math.max(sendI.length, 5))}`;
      }
          let backward5 = String.fromCharCode(112,95,50,51,95,114,101,113,117,101,115,116,0);
         type_t5 /= Math.max(5, groupW.length);
         backward5 = `${backward5.length}`;
          let videoj = String.fromCharCode(122,95,50,53,95,100,101,110,111,105,115,101,114,0);
          let commentP: Array<any> = [82, 669];
         heartk.push((groupW == String.fromCharCode(50,0) ? videoj.length : groupW.length));
         videoj = `${commentP.length}`;
         commentP.push(1 << (Math.min(5, commentP.length)));
      while (3.47 >= (type_t5 - 3.23)) {
         lessh += `${heartk.length + 2}`;
         break;
      }
      delegate_797 += 1;
      break;
   }
      containeri <<= Math.min(Math.abs(2), 2);
   if (!Array.from(type_lpQ.values()).includes(minimize6)) {
      minimize6 += awayS.length & 3;
   }
      clock0 = `${parseInt(`${minimize6}`) - 3}`;
    delayControls();
  };

  const clearHidingDelay = () => {
       let j_count6 = String.fromCharCode(97,95,52,95,112,114,101,100,105,99,116,111,114,115,0);
    let agreement6 = String.fromCharCode(118,95,57,55,95,105,116,120,102,109,0);
    let becomeq = 1.0;
    let gemfilev = true;
    let awayQ = 3;
    let datau = true;
    let spinnerI = String.fromCharCode(114,111,117,116,105,110,103,95,112,95,53,0);
    let nalyticsI = String.fromCharCode(112,108,97,116,101,97,117,95,117,95,53,53,0);
      j_count6 += `${2 - parseInt(`${becomeq}`)}`;
   if (!spinnerI.endsWith(`${datau}`)) {
       let profileE: Array<any> = [450, 131];
       let emojiL = String.fromCharCode(105,95,53,57,95,99,114,108,105,115,115,117,101,114,0);
       let usernameX = 5.0;
      while (5.34 < (2.33 + usernameX)) {
          let updatesv = String.fromCharCode(99,95,53,56,95,114,101,115,97,109,112,108,101,0);
          let usernamer = 5.0;
          let signinupA = String.fromCharCode(104,111,108,100,101,114,115,95,116,95,51,57,0);
          let selectk: Map<any, any> = new Map([[String.fromCharCode(117,95,51,56,95,112,114,111,112,101,114,0),178], [String.fromCharCode(100,114,111,112,111,102,102,95,98,95,55,54,0),769], [String.fromCharCode(116,95,55,53,95,99,104,115,99,97,108,101,0),305]]);
         profileE.push(profileE.length << (Math.min(Math.abs(2), 2)));
         updatesv += `${selectk.size}`;
         usernamer -= signinupA.length;
         signinupA = "1";
         selectk = new Map([[signinupA, signinupA.length + parseInt(`${usernamer}`)]]);
         break;
      }
       let configureh = String.fromCharCode(118,109,112,114,105,110,116,102,95,119,95,56,54,0);
       let bellP = String.fromCharCode(119,95,52,53,95,114,101,112,108,105,101,115,0);
         usernameX += parseInt(`${usernameX}`) << (Math.min(bellP.length, 5));
      while (bellP.endsWith(`${usernameX}`)) {
          let shootA = 2.0;
          let settingsJ = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,101,95,49,53,0);
          let filedT = String.fromCharCode(109,95,53,50,95,115,101,101,110,0);
          let sendU = 3;
          let philippinesV = 0.0;
         bellP = `${2 ^ bellP.length}`;
         shootA -= (filedT == String.fromCharCode(51,0) ? settingsJ.length : filedT.length);
         settingsJ = `${2 << (Math.min(4, Math.abs(parseInt(`${philippinesV}`))))}`;
         sendU <<= Math.min(Math.abs((filedT == String.fromCharCode(84,0) ? settingsJ.length : filedT.length)), 1);
         philippinesV *= parseInt(`${philippinesV}`);
         break;
      }
      while (5.74 == (4.7 + usernameX)) {
         usernameX += parseInt(`${usernameX}`) >> (Math.min(emojiL.length, 2));
         break;
      }
      if (configureh != emojiL) {
          let servicee = 0.0;
          let tailJ = true;
          let borderlessR: Array<any> = [String.fromCharCode(102,95,53,56,95,114,101,112,111,114,116,115,0), String.fromCharCode(115,95,57,54,95,117,110,101,110,99,114,121,112,116,101,100,0)];
         emojiL = `${(3 ^ (tailJ ? 1 : 1))}`;
         servicee -= parseFloat(`${2 - parseInt(`${servicee}`)}`);
         tailJ = servicee > 11.82;
         borderlessR.push(1);
      }
         configureh = `${profileE.length << (Math.min(emojiL.length, 4))}`;
       let minimize7 = String.fromCharCode(109,115,112,101,108,95,53,95,49,57,0);
      let giftQ = 9885187.0 >= usernameX;
      do {
         usernameX *= 3 * emojiL.length;
         if (giftQ) {
            break;
         }
      } while (giftQ && (5 >= (4 >> (Math.min(5, configureh.length)))));
      datau = 22 == j_count6.length;
   }
      agreement6 = `${2 % (Math.max(8, parseInt(`${becomeq}`)))}`;
   while ((agreement6.length ^ 4) <= 5 && (becomeq - parseFloat(`${agreement6.length}`)) <= 5.34) {
      agreement6 += "1";
      break;
   }
   let constantsF = datau ? !datau : datau;
   do {
       let roomn: Array<any> = [853, 659];
       let interstitialC: Array<any> = [1, 78, 42];
       let greyf = String.fromCharCode(121,95,54,56,95,105,110,116,101,108,0);
       let paginationj = 2.0;
         greyf += "1";
      if ((roomn.length - parseInt(`${paginationj}`)) >= 5 && (3.21 - paginationj) >= 1.5) {
         roomn = [greyf.length % (Math.max(1, 10))];
      }
       let watchn: Array<any> = [18, 613];
      while ((roomn.length - 3) <= 2) {
          let vieweri = 4;
          let watchw = 5.0;
          let x_playerD = String.fromCharCode(99,111,110,116,97,99,116,115,95,118,95,49,55,0);
         roomn = [watchn.length % (Math.max(3, greyf.length))];
         vieweri |= vieweri / 2;
         watchw += vieweri / (Math.max(3, x_playerD.length));
         x_playerD = `${x_playerD.length & parseInt(`${watchw}`)}`;
         break;
      }
         watchn.push(watchn.length * 1);
      if (roomn.length <= watchn.length) {
         watchn = [3];
      }
          let borderless8: Map<any, any> = new Map([[String.fromCharCode(103,95,54,54,95,109,105,110,113,0),false ], [String.fromCharCode(118,105,100,101,111,95,109,95,53,52,0),false ]]);
          let submitm = String.fromCharCode(101,95,51,56,95,102,116,118,112,108,97,115,116,110,111,100,101,0);
          let tooltipsI: Array<any> = [690, 111];
         roomn.push(watchn.length * greyf.length);
         borderless8.set(`${tooltipsI.length}`, tooltipsI.length ^ 3);
         submitm += "2";
         paginationj /= Math.max(3, parseInt(`${paginationj}`));
         roomn.push(3 & watchn.length);
         greyf = `${parseInt(`${paginationj}`) * 2}`;
         greyf += `${watchn.length & interstitialC.length}`;
         roomn.push(parseInt(`${paginationj}`) >> (Math.min(watchn.length, 1)));
      datau = 34 >= spinnerI.length;
      if (constantsF) {
         break;
      }
   } while ((2 == j_count6.length) && constantsF);
   for (let d = 0; d < 1; d++) {
       let sheetP = String.fromCharCode(104,95,50,57,95,108,101,97,115,101,0);
       let selectedP = 4;
       let controlsE = 2.0;
       let baidu_ = true;
      for (let f = 0; f < 3; f++) {
         selectedP *= (parseInt(`${controlsE}`) * (baidu_ ? 3 : 5));
      }
         controlsE -= (sheetP == String.fromCharCode(113,0) ? (baidu_ ? 5 : 5) : sheetP.length);
      while (4.88 >= controlsE) {
          let navigationl = 4.0;
          let castJ = 2.0;
          let anythinks = String.fromCharCode(118,95,49,49,95,99,108,97,115,104,101,100,0);
          let liven = String.fromCharCode(99,111,109,98,95,112,95,54,54,0);
          let bufferd = 5.0;
         controlsE *= 3;
         navigationl += parseFloat(`${3 | parseInt(`${navigationl}`)}`);
         castJ *= 2;
         anythinks += `${parseInt(`${bufferd}`) & 2}`;
         liven += `${parseInt(`${castJ}`)}`;
         bufferd *= parseFloat(`${1}`);
         break;
      }
      for (let u = 0; u < 3; u++) {
          let moon6 = String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,113,95,54,51,0);
          let overlays = 2.0;
          let q_centerD = 5;
          let middlewareC = true;
          let giftF = 5.0;
         baidu_ = middlewareC;
         moon6 += `${moon6.length}`;
         overlays += parseFloat(`${parseInt(`${overlays}`) << (Math.min(2, Math.abs(3)))}`);
         q_centerD -= 2 ^ parseInt(`${giftF}`);
         giftF -= parseFloat(`${parseInt(`${giftF}`)}`);
      }
         controlsE -= 3 * selectedP;
          let formC = String.fromCharCode(118,95,54,55,95,100,97,105,0);
          let long_b6 = String.fromCharCode(99,111,110,112,111,110,101,110,116,115,95,112,95,54,48,0);
          let photo9: Array<any> = [137, 264];
         selectedP /= Math.max(1, 2);
         formC += "3";
         long_b6 += `${photo9.length}`;
         photo9 = [1 >> (Math.min(2, formC.length))];
         selectedP &= selectedP;
         baidu_ = 72.32 >= controlsE;
          let k_titlel = 4.0;
         baidu_ = 2.83 >= k_titlel && controlsE >= 2.83;
      for (let m = 0; m < 2; m++) {
          let downloaded2 = false;
          let submitt = 5;
          let short_hvE = false;
         selectedP ^= (parseInt(`${controlsE}`) ^ (downloaded2 ? 4 : 4));
         downloaded2 = 92 == submitt;
         submitt >>= Math.min(Math.abs(submitt), 1);
         short_hvE = !short_hvE;
      }
       let register_hE = 1;
         controlsE += ((baidu_ ? 3 : 2) / (Math.max(10, parseInt(`${controlsE}`))));
      becomeq += (parseFloat(`${parseInt(`${becomeq}`) >> (Math.min(3, Math.abs((datau ? 2 : 3))))}`));
   }
      spinnerI += `${1 & parseInt(`${becomeq}`)}`;
   for (let z = 0; z < 3; z++) {
       let lighta = String.fromCharCode(100,114,97,119,108,105,110,101,95,54,95,53,0);
       let friendsi: Array<any> = [92, 917];
       let sellR = 1.0;
         friendsi.push(friendsi.length);
      let s_unlockq = sellR <= 6251618.0;
      do {
         sellR /= Math.max((lighta == String.fromCharCode(114,0) ? lighta.length : parseInt(`${sellR}`)), 1);
         if (s_unlockq) {
            break;
         }
      } while (((sellR * 2.21) > 1.83 || (friendsi.length * sellR) > 2.21) && s_unlockq);
         lighta += `${parseInt(`${sellR}`) ^ 3}`;
          let u_counta = 4.0;
         sellR *= friendsi.length & 2;
         u_counta += parseFloat(`${parseInt(`${u_counta}`) & 2}`);
       let styleG: Array<any> = [221, 754];
       let gestures5 = String.fromCharCode(102,95,54,49,95,116,114,97,99,107,0);
       let singlem = String.fromCharCode(101,109,98,101,100,100,105,110,103,95,118,95,53,48,0);
      for (let p = 0; p < 2; p++) {
         friendsi = [(lighta == String.fromCharCode(102,0) ? lighta.length : styleG.length)];
      }
         styleG = [singlem.length];
         sellR /= Math.max(3, 1);
      becomeq *= parseFloat(`${lighta.length}`);
   }
      awayQ /= Math.max(2, 3);
      awayQ *= (j_count6.length * (datau ? 2 : 5));
   for (let x = 0; x < 3; x++) {
       let trasht = String.fromCharCode(115,113,108,105,116,101,101,120,116,95,114,95,54,53,0);
       let injuryF = 1.0;
       let tooltipsY = String.fromCharCode(115,105,112,114,107,100,97,116,97,95,55,95,54,57,0);
          let modelO: Map<any, any> = new Map([[String.fromCharCode(121,95,57,57,95,112,104,111,110,101,98,111,111,107,0),423], [String.fromCharCode(121,95,53,57,95,109,115,115,100,115,112,0),104], [String.fromCharCode(120,95,57,57,95,98,105,116,114,101,97,100,101,114,0),67]]);
         trasht += `${trasht.length & 1}`;
         modelO = new Map([[`${modelO.size}`, modelO.size]]);
      for (let x = 0; x < 2; x++) {
         injuryF /= Math.max(1, parseFloat(`${parseInt(`${injuryF}`)}`));
      }
      if ((injuryF - 5.60) == 1.72 && 5.60 == (injuryF - parseFloat(`${tooltipsY.length}`))) {
          let volumee = 1.0;
          let sinaK = true;
          let tooltips4 = String.fromCharCode(113,95,49,95,111,110,101,105,110,99,104,0);
         injuryF -= (parseFloat(`${(sinaK ? 2 : 2) * 3}`));
         volumee *= (parseFloat(`${String.fromCharCode(110,0) == tooltips4 ? tooltips4.length : parseInt(`${volumee}`)}`));
         sinaK = tooltips4.startsWith(`${volumee}`);
      }
         tooltipsY = `${(trasht == String.fromCharCode(68,0) ? tooltipsY.length : trasht.length)}`;
      for (let f = 0; f < 1; f++) {
         tooltipsY += `${tooltipsY.length / (Math.max(10, parseInt(`${injuryF}`)))}`;
      }
      let shootv = 9426050.0 >= injuryF;
      do {
         injuryF += parseFloat(`${parseInt(`${injuryF}`)}`);
         if (shootv) {
            break;
         }
      } while (((parseFloat(`${trasht.length}`) * injuryF) == 4.23 || 2 == (trasht.length & 5)) && shootv);
      if (!tooltipsY.startsWith(trasht)) {
          let carouselW: Array<any> = [String.fromCharCode(109,111,116,105,111,110,95,121,95,55,54,0), String.fromCharCode(108,105,103,104,116,95,118,95,56,56,0)];
         trasht += `${parseInt(`${injuryF}`)}`;
         carouselW.push(carouselW.length * carouselW.length);
      }
         injuryF *= parseFloat(`${2 * trasht.length}`);
         tooltipsY = `${3 >> (Math.min(4, tooltipsY.length))}`;
      j_count6 = `${awayQ}`;
   }
   while (!j_count6.includes(`${gemfilev}`)) {
      j_count6 += `${((datau ? 4 : 3) * 1)}`;
      break;
   }
       let pingS: Map<any, any> = new Map([[String.fromCharCode(103,95,50,53,95,112,111,115,116,101,114,0),889], [String.fromCharCode(115,104,97,112,101,95,104,95,54,48,0),519], [String.fromCharCode(99,111,110,115,117,109,101,95,120,95,50,56,0),694]]);
      for (let e = 0; e < 2; e++) {
          let taiwann: Array<any> = [65, 264, 854];
         pingS = new Map([[`${pingS.size}`, 2]]);
         taiwann = [3];
      }
       let greyI = false;
      for (let w = 0; w < 2; w++) {
         greyI = pingS.size == 55 && greyI;
      }
      datau = becomeq == parseFloat(`${j_count6.length}`);
       let constantsO = String.fromCharCode(102,95,57,55,95,114,111,117,110,100,105,110,103,0);
       let temperaturef = String.fromCharCode(99,111,100,97,98,108,101,95,55,95,55,57,0);
       let data0: Map<any, any> = new Map([[String.fromCharCode(117,95,57,50,95,111,118,101,114,104,101,97,100,0),148], [String.fromCharCode(109,98,117,118,95,106,95,56,52,0),189], [String.fromCharCode(115,99,116,112,117,116,105,108,95,52,95,49,57,0),528]]);
       let minimizen: Map<any, any> = new Map([[String.fromCharCode(112,95,48,95,112,114,101,108,111,97,100,105,110,103,0),110], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,110,95,54,49,0),464]]);
      for (let c = 0; c < 1; c++) {
          let down9 = 0.0;
          let chatq = String.fromCharCode(116,95,56,48,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0);
          let p_lockc = String.fromCharCode(109,109,99,116,120,95,99,95,52,51,0);
          let basketballc = String.fromCharCode(117,95,52,54,95,101,98,117,114,0);
          let networkr = false;
         constantsO = `${constantsO.length | 1}`;
         down9 /= Math.max(1, 4);
         chatq += `${(basketballc == String.fromCharCode(115,0) ? p_lockc.length : basketballc.length)}`;
         p_lockc = `${((networkr ? 5 : 1) * p_lockc.length)}`;
         networkr = (down9 - p_lockc.length) <= 96.15;
      }
       let leagueF: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,95,105,95,52,0),String.fromCharCode(115,95,49,57,95,108,111,99,97,108,0)], [String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,100,95,52,48,0),String.fromCharCode(116,109,105,120,95,116,95,57,56,0)], [String.fromCharCode(112,114,105,110,116,95,102,95,49,48,0),String.fromCharCode(112,114,101,102,101,116,99,104,101,114,95,104,95,57,48,0)]]);
       let countdownw: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,95,100,105,102,102,101,114,101,110,99,101,115,0),String.fromCharCode(101,95,54,57,0)], [String.fromCharCode(101,95,49,55,0),String.fromCharCode(97,115,99,105,105,105,110,100,101,120,95,49,95,49,0)]]);
      if (2 > data0.size) {
          let filterO: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,114,114,95,102,95,53,48,0),294], [String.fromCharCode(114,101,118,111,107,105,110,103,95,120,95,52,54,0),185], [String.fromCharCode(115,116,114,108,101,110,95,99,95,53,52,0),629]]);
          let loginn = String.fromCharCode(120,95,55,53,95,113,115,118,101,110,99,0);
          let fieldk: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,95,56,95,49,51,0),false ], [String.fromCharCode(109,107,118,114,101,97,100,101,114,95,50,95,57,56,0),false ], [String.fromCharCode(102,95,56,95,107,101,101,112,97,108,105,118,101,0),true ]]);
         leagueF.set(temperaturef, 3);
         filterO = new Map([[`${fieldk.size}`, fieldk.size >> (Math.min(Math.abs(3), 5))]]);
         loginn += `${loginn.length | fieldk.size}`;
      }
         countdownw.set(temperaturef, (temperaturef == String.fromCharCode(85,0) ? minimizen.size : temperaturef.length));
       let main_xj: Map<any, any> = new Map([[String.fromCharCode(114,95,49,50,95,115,109,117,115,104,0),true ], [String.fromCharCode(99,100,120,108,95,99,95,52,51,0),false ]]);
       let blacklistM: Map<any, any> = new Map([[String.fromCharCode(97,108,105,118,101,95,110,95,56,55,0),String.fromCharCode(98,108,111,99,107,105,101,115,95,51,95,51,49,0)], [String.fromCharCode(105,95,57,95,112,114,111,112,97,103,97,116,105,111,110,0),String.fromCharCode(121,95,49,48,48,95,114,101,115,117,108,116,115,0)], [String.fromCharCode(100,97,105,108,121,95,55,95,54,53,0),String.fromCharCode(102,95,53,55,95,99,114,101,97,116,101,0)]]);
      agreement6 += `${parseInt(`${becomeq}`)}`;
   while (datau && j_count6.length == 3) {
      datau = gemfilev && j_count6.length < 47;
      break;
   }
   let controlsZ = gemfilev ? !gemfilev : gemfilev;
   do {
       let buttonI = 3.0;
       let invite9 = 3.0;
       let macauI = String.fromCharCode(108,97,116,101,95,114,95,53,55,0);
       let minie = String.fromCharCode(101,95,54,51,95,101,108,115,101,0);
       let eventA = String.fromCharCode(107,95,55,49,95,104,101,120,98,115,0);
      let whistle_ = minie == String.fromCharCode(118,108,54,53,0);
      do {
          let type_48K = 4;
          let selectedm = String.fromCharCode(118,95,49,55,95,118,109,100,118,105,100,101,111,0);
          let filledf = String.fromCharCode(116,95,52,49,95,109,115,109,112,101,103,0);
         minie += `${type_48K | 1}`;
         type_48K /= Math.max(2, (String.fromCharCode(72,0) == selectedm ? filledf.length : selectedm.length));
         filledf = `${filledf.length}`;
         if (whistle_) {
            break;
         }
      } while ((eventA.endsWith(minie)) && whistle_);
         minie += `${macauI.length}`;
       let userP = 5;
         macauI += `${macauI.length}`;
          let diceA = false;
          let teamb: Map<any, any> = new Map([[String.fromCharCode(114,95,53,53,95,114,97,103,103,97,98,108,101,0),314], [String.fromCharCode(102,95,55,53,95,119,109,97,118,111,105,99,101,0),46], [String.fromCharCode(122,95,49,50,95,114,101,97,100,102,114,97,109,101,0),948]]);
          let register_puL = 1.0;
         minie = `${1 | parseInt(`${register_puL}`)}`;
         diceA = teamb.get(`${diceA}`) != null;
         teamb = new Map([[`${teamb.size}`, 1]]);
         register_puL += (parseFloat(`${1 >> (Math.min(1, Math.abs((diceA ? 2 : 3))))}`));
      let dataL = userP >= 8784565;
      do {
         userP <<= Math.min(Math.abs((String.fromCharCode(104,0) == eventA ? eventA.length : parseInt(`${invite9}`))), 4);
         if (dataL) {
            break;
         }
      } while ((1 == (macauI.length % (Math.max(8, userP))) || (1 % (Math.max(8, userP))) == 5) && dataL);
      for (let m = 0; m < 2; m++) {
         buttonI += 1;
      }
       let shrinkC = String.fromCharCode(98,97,100,95,50,95,50,55,0);
         macauI = `${eventA.length & 2}`;
       let lightk = 3.0;
      if (3.83 > (invite9 + userP) && 3.83 > (userP + invite9)) {
         invite9 /= Math.max((eventA == String.fromCharCode(83,0) ? eventA.length : userP), 2);
      }
         invite9 *= 3 / (Math.max(3, eventA.length));
         invite9 *= macauI.length & parseInt(`${invite9}`);
       let combinedn: Map<any, any> = new Map([[String.fromCharCode(106,95,49,56,95,97,115,111,99,105,100,0),645], [String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,55,95,51,0),591]]);
       let goalF: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,119,97,105,116,101,114,0),String.fromCharCode(112,114,101,97,108,108,111,99,95,104,95,56,49,0)], [String.fromCharCode(115,101,110,100,95,103,95,52,51,0),String.fromCharCode(106,95,52,51,95,100,111,109,97,105,110,0)]]);
         combinedn.set(`${buttonI}`, parseInt(`${invite9}`) + 1);
      gemfilev = String.fromCharCode(98,0) == agreement6;
      if (controlsZ) {
         break;
      }
   } while (controlsZ && (spinnerI.length < 5));

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let episodesr = 0.0;
    let main_s2: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,109,118,95,116,95,51,48,0),355], [String.fromCharCode(102,95,50,95,109,115,101,99,115,0),649]]);
    let promotionj = 0.0;
    let delegate_xM = 4.0;
    let light8 = String.fromCharCode(111,95,54,48,95,114,101,97,100,98,121,116,101,0);
    let overlayQ = String.fromCharCode(120,102,111,114,109,101,100,95,57,95,52,50,0);
    let applep = true;
    let volumeI = String.fromCharCode(111,118,101,114,97,108,108,95,115,95,49,52,0);
    let viewsP = 2.0;
      overlayQ = `${light8.length}`;
   while (2 < (parseInt(`${episodesr}`) / (Math.max(1, overlayQ.length))) || 3.91 < (parseFloat(`${overlayQ.length}`) / (Math.max(1, episodesr)))) {
      episodesr /= Math.max((parseFloat(`${(applep ? 5 : 3) * parseInt(`${episodesr}`)}`)), 1);
      break;
   }
   let changet = 9524053.0 >= promotionj;
   do {
       let castF = String.fromCharCode(122,95,52,52,95,118,109,97,116,114,105,120,0);
          let filtere: Array<any> = [251, 101, 37];
          let tickb: Array<any> = [String.fromCharCode(120,95,56,50,95,100,117,109,112,105,110,103,0), String.fromCharCode(104,100,110,111,100,101,95,122,95,55,55,0), String.fromCharCode(105,110,116,102,105,95,110,95,54,51,0)];
          let yingC: Array<any> = [671, 750, 26];
         castF += `${tickb.length / (Math.max(8, castF.length))}`;
         filtere.push(filtere.length >> (Math.min(yingC.length, 5)));
         tickb.push(filtere.length);
         yingC.push(1 * filtere.length);
         castF = `${castF.length ^ 2}`;
         castF += `${castF.length - 1}`;
      promotionj -= 3;
      if (changet) {
         break;
      }
   } while (changet && (2.64 == episodesr));
   let commonu = applep ? !applep : applep;
   do {
      applep = main_s2.get(`${episodesr}`) != null;
      if (commonu) {
         break;
      }
   } while (commonu && (promotionj >= 1.32));

      if (delayValue === undefined) {

       let expired6 = true;
       let halfz: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,101,109,101,110,116,95,97,95,51,49,0),String.fromCharCode(97,109,98,105,101,110,116,95,103,95,49,0)], [String.fromCharCode(115,101,115,115,105,111,110,105,100,95,106,95,54,57,0),String.fromCharCode(114,95,49,48,48,95,115,111,114,116,101,100,0)], [String.fromCharCode(101,95,53,49,95,98,101,103,97,110,0),String.fromCharCode(99,95,50,51,95,108,105,98,112,104,111,110,101,110,117,109,98,101,114,0)]]);
         halfz = new Map([[`${halfz.size}`, ((expired6 ? 1 : 3) << (Math.min(Math.abs(1), 1)))]]);
      let f_playern = halfz.size <= 6073927;
      do {
         halfz = new Map([[`${halfz.size}`, (halfz.size & (expired6 ? 2 : 4))]]);
         if (f_playern) {
            break;
         }
      } while ((5 > (halfz.size * 2)) && f_playern);
          let eventC: Map<any, any> = new Map([[String.fromCharCode(118,100,112,97,117,95,98,95,51,54,0),416], [String.fromCharCode(102,95,57,53,95,116,121,112,101,100,101,102,0),541]]);
          let agreementD = 2.0;
         expired6 = 69.81 <= agreementD;
         eventC.set(`${eventC.size}`, eventC.size + 3);
         agreementD += eventC.size % (Math.max(1, 9));
         halfz = new Map([[`${halfz.size}`, (halfz.size & (expired6 ? 4 : 2))]]);
          let gmailH = 5.0;
          let layout1: Array<any> = [318, 913, 249];
          let dropdownZ = String.fromCharCode(120,118,105,100,105,100,99,116,95,110,95,57,48,0);
         halfz = new Map([[`${halfz.size}`, ((expired6 ? 3 : 5) + 3)]]);
         gmailH /= Math.max(5, parseFloat(`${parseInt(`${gmailH}`)}`));
         layout1 = [(String.fromCharCode(85,0) == dropdownZ ? dropdownZ.length : layout1.length)];
      if (1 <= (halfz.size + 3)) {
          let downloadingN = 5.0;
          let privacyQ = String.fromCharCode(115,112,101,99,105,102,105,99,97,116,105,111,110,95,105,95,50,56,0);
          let selectionc: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,109,95,53,0),698], [String.fromCharCode(118,99,120,112,114,111,106,95,48,95,51,56,0),390]]);
         expired6 = (halfz.size / (Math.max(8, parseInt(`${downloadingN}`)))) < 98;
         downloadingN -= parseFloat(`${selectionc.size}`);
         privacyQ = "3";
         selectionc = new Map([[`${selectionc.size}`, selectionc.size]]);
      }
      main_s2.set(`${overlayQ}`, 2 + overlayQ.length);
       let time_96N: Array<any> = [853, 181, 845];
       let more9 = String.fromCharCode(100,117,112,108,105,99,97,116,101,115,95,57,95,49,53,0);
       let smallc = false;
      let bcopy_krj = 6876526 <= time_96N.length;
      do {
         time_96N.push(3);
         if (bcopy_krj) {
            break;
         }
      } while (bcopy_krj && (more9.startsWith(`${time_96N.length}`)));
      if (more9.length > 3) {
         smallc = !smallc;
      }
         more9 = `${(1 >> (Math.min(1, Math.abs((smallc ? 4 : 1)))))}`;
      let awayL = 9573743 >= more9.length;
      do {
         more9 = "3";
         if (awayL) {
            break;
         }
      } while (awayL && (!smallc));
         time_96N = [((smallc ? 5 : 1) % (Math.max(more9.length, 6)))];
      if ((5 % (Math.max(8, more9.length))) > 2) {
          let adultG = 4;
          let bing2 = 0;
          let countdownr: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,95,120,95,53,57,0),true ], [String.fromCharCode(115,95,55,49,95,100,114,111,112,115,0),false ], [String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,95,113,95,53,53,0),false ]]);
         more9 += `${((smallc ? 2 : 1) ^ 2)}`;
         adultG %= Math.max(3, 5);
         bing2 -= bing2;
         countdownr = new Map([[`${bing2}`, bing2]]);
      }
       let pingZ = 3;
       let friendsH = 4;
      let confirmationr = smallc ? !smallc : smallc;
      do {
          let privilegeg = String.fromCharCode(116,99,109,105,95,113,95,57,52,0);
          let userD = String.fromCharCode(103,95,57,55,95,118,105,116,97,108,105,107,108,105,122,101,0);
         smallc = 52 >= time_96N.length;
         privilegeg += `${(privilegeg == String.fromCharCode(48,0) ? privilegeg.length : userD.length)}`;
         userD += `${1 >> (Math.min(4, privilegeg.length))}`;
         if (confirmationr) {
            break;
         }
      } while (((pingZ / 5) == 2 && pingZ == 5) && confirmationr);
         smallc = time_96N.includes(pingZ);
      applep = 75.21 >= promotionj;
   while (!light8.endsWith(`${delegate_xM}`)) {
      light8 += `${parseInt(`${promotionj}`) << (Math.min(overlayQ.length, 2))}`;
      break;
   }
   for (let y = 0; y < 2; y++) {
      delegate_xM *= parseFloat(`${parseInt(`${delegate_xM}`)}`);
   }
        if (showSlider === 'none' && !paused) {

       let temperatureL = 2.0;
       let navigationF = 4;
       let thailandM = 3.0;
          let chart0 = 0;
         temperatureL -= chart0 / 1;
         navigationF *= parseInt(`${thailandM}`) & 3;
          let internetE = 4;
         navigationF ^= internetE / (Math.max(parseInt(`${thailandM}`), 2));
         thailandM *= navigationF;
         navigationF <<= Math.min(4, Math.abs(navigationF >> (Math.min(4, Math.abs(1)))));
      while ((temperatureL + navigationF) > 1.99) {
          let stationS = String.fromCharCode(101,120,116,114,97,99,116,101,100,95,52,95,55,0);
         navigationF /= Math.max(3, stationS.length % 1);
         break;
      }
          let half_ = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,104,95,52,51,0);
         thailandM *= 1;
         half_ += "1";
      let ping4 = navigationF <= 6320997;
      do {
         navigationF -= 3;
         if (ping4) {
            break;
         }
      } while (ping4 && (1.79 >= (thailandM - navigationF) || 2.12 >= (1.79 - thailandM)));
      for (let s = 0; s < 3; s++) {
         navigationF ^= 3;
      }
      main_s2 = new Map([[`${applep}`, ((applep ? 1 : 3) + parseInt(`${thailandM}`))]]);
   for (let l = 0; l < 1; l++) {
      overlayQ = `${main_s2.size - 2}`;
   }
      delegate_xM -= (parseFloat(`${(applep ? 5 : 5)}`));
       let downloader4 = false;
      if (downloader4) {
         downloader4 = !downloader4 || !downloader4;
      }
         downloader4 = (!downloader4 ? !downloader4 : downloader4);
      for (let x = 0; x < 1; x++) {
          let gestureV = 0.0;
         downloader4 = !downloader4;
         gestureV *= parseFloat(`${parseInt(`${gestureV}`)}`);
      }
      episodesr /= Math.max(1, parseFloat(`${parseInt(`${episodesr}`) - main_s2.size}`));
          setShowControls(false)
        }
      } else {

       let indicatork = String.fromCharCode(114,95,55,55,95,117,116,102,108,101,110,0);
       let models1 = 2.0;
       let animationH = 1.0;
          let hongkongk = 4.0;
          let forwardA: Array<any> = [965, 564, 401];
         models1 += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${hongkongk}`)), 5))}`);
         hongkongk += parseFloat(`${2 - forwardA.length}`);
         forwardA = [forwardA.length | 3];
      if (!indicatork.endsWith(`${models1}`)) {
         indicatork += `${indicatork.length << (Math.min(1, Math.abs(parseInt(`${models1}`))))}`;
      }
      while (3 >= (parseInt(`${animationH}`) / (Math.max(indicatork.length, 1)))) {
         animationH /= Math.max(4, parseInt(`${animationH}`) / (Math.max(parseInt(`${models1}`), 5)));
         break;
      }
      while (5.56 < (animationH * indicatork.length)) {
         indicatork += `${indicatork.length}`;
         break;
      }
      for (let m = 0; m < 1; m++) {
         animationH += parseInt(`${animationH}`) * indicatork.length;
      }
         animationH += indicatork.length;
          let navigationT = String.fromCharCode(98,105,116,114,97,116,101,115,95,118,95,57,54,0);
         models1 += parseFloat(`${indicatork.length}`);
         navigationT = "1";
      let combinedr = models1 <= 9140081.0;
      do {
         models1 /= Math.max(parseFloat(`${indicatork.length}`), 4);
         if (combinedr) {
            break;
         }
      } while ((4.35 == (animationH * models1) || 4.35 == (animationH * models1)) && combinedr);
         models1 *= parseFloat(`${parseInt(`${animationH}`) % (Math.max(1, 4))}`);
      promotionj -= parseInt(`${animationH}`);
       let inactivee = String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,98,95,49,57,0);
       let umengC = String.fromCharCode(115,101,109,105,99,111,108,111,110,95,97,95,57,57,0);
       let dialogt = 0;
      while (umengC.length <= dialogt) {
         dialogt <<= Math.min(2, Math.abs(3 ^ inactivee.length));
         break;
      }
         dialogt /= Math.max(dialogt * umengC.length, 5);
       let nextl = 1.0;
          let matchesP: Map<any, any> = new Map([[String.fromCharCode(98,95,56,49,95,97,101,99,109,0),911], [String.fromCharCode(112,108,117,114,97,108,115,95,117,95,56,55,0),192], [String.fromCharCode(122,95,57,49,95,112,111,97,0),852]]);
         umengC += `${2 + matchesP.size}`;
      let showD = 8167592.0 <= nextl;
      do {
         nextl /= Math.max(4, parseFloat(`${parseInt(`${nextl}`) & 3}`));
         if (showD) {
            break;
         }
      } while (((dialogt + nextl) > 3.82) && showD);
      for (let f = 0; f < 1; f++) {
          let clubX = 4;
          let forwardU: Array<any> = [289, 933, 769];
          let fast8 = String.fromCharCode(100,95,54,57,95,113,122,98,105,110,0);
         nextl *= parseFloat(`${inactivee.length}`);
         clubX %= Math.max(3, 3);
         forwardU.push((fast8 == String.fromCharCode(66,0) ? fast8.length : forwardU.length));
      }
          let tumbnailb: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,48,95,108,111,111,107,97,115,105,100,101,0),false ], [String.fromCharCode(120,104,116,109,108,95,118,95,56,52,0),false ], [String.fromCharCode(101,120,112,111,110,101,110,116,115,95,111,95,55,51,0),false ]]);
          let stringy = 3.0;
         umengC = "3";
         tumbnailb = new Map([[`${tumbnailb.size}`, tumbnailb.size >> (Math.min(Math.abs(2), 2))]]);
         stringy -= parseFloat(`${tumbnailb.size | parseInt(`${stringy}`)}`);
          let fastforwardq = String.fromCharCode(111,117,116,112,111,105,110,116,95,97,95,49,54,0);
          let nterstitiali = 3.0;
          let gestures3 = 5.0;
         nextl /= Math.max(3, parseFloat(`${parseInt(`${gestures3}`)}`));
         fastforwardq = `${fastforwardq.length}`;
         nterstitiali += (fastforwardq == String.fromCharCode(81,0) ? fastforwardq.length : parseInt(`${nterstitiali}`));
         gestures3 /= Math.max(parseInt(`${nterstitiali}`) % (Math.max(fastforwardq.length, 1)), 1);
          let friendsO: Map<any, any> = new Map([[String.fromCharCode(111,118,102,108,95,49,95,55,49,0),602], [String.fromCharCode(102,95,54,57,95,115,117,109,115,113,0),162], [String.fromCharCode(120,95,51,50,95,111,112,97,113,117,101,0),141]]);
         nextl += parseFloat(`${dialogt - parseInt(`${nextl}`)}`);
         friendsO.set(`${friendsO.size}`, friendsO.size - friendsO.size);
      main_s2.set(`${episodesr}`, 2);
   if ((episodesr * delegate_xM) > 3.22 && 3.22 > (delegate_xM * episodesr)) {
      episodesr /= Math.max(5, parseFloat(`${light8.length / (Math.max(3, 8))}`));
   }
   while (2.88 <= (parseFloat(`${light8.length}`) + delegate_xM) || (light8.length + parseInt(`${delegate_xM}`)) <= 2) {
      light8 += `${parseInt(`${promotionj}`) * 3}`;
      break;
   }
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let gmailf = String.fromCharCode(100,95,50,49,95,112,114,101,118,0);
    let moduleP = String.fromCharCode(100,101,115,99,114,105,112,116,105,111,110,95,114,95,53,52,0);
    let goalU = String.fromCharCode(105,109,112,114,105,110,116,95,109,95,52,51,0);
    let sinaL = 5.0;
    let emptyq = 3.0;
    let starv = 3.0;
    let update_xlg = false;
    let playB = String.fromCharCode(114,101,105,109,112,111,114,116,95,50,95,56,53,0);
    let navigationH: Map<any, any> = new Map([[String.fromCharCode(102,95,55,52,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0),102], [String.fromCharCode(108,95,51,95,109,112,101,103,118,105,100,101,111,100,101,99,0),53], [String.fromCharCode(118,95,54,95,109,105,115,99,0),355]]);
    let xvod8 = 2.0;
    let lessz = String.fromCharCode(114,95,57,51,95,107,97,108,109,97,110,0);
    let main_if: Array<any> = [185, 592];
      xvod8 += parseFloat(`${2}`);
      xvod8 -= parseFloat(`${1 + navigationH.size}`);
       let router8 = String.fromCharCode(121,95,54,53,95,105,110,116,109,97,116,104,0);
       let readi = String.fromCharCode(107,95,50,57,95,102,101,116,99,104,0);
      while (5 >= readi.length) {
          let overlayd = true;
          let reducerm = 4;
          let green7: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,57,95,55,54,0),725], [String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,48,95,55,56,0),139]]);
          let rankX = String.fromCharCode(106,95,55,51,95,109,97,105,110,108,105,115,116,0);
         router8 += `${green7.size}`;
         overlayd = (66 <= (rankX.length * (!overlayd ? rankX.length : 66)));
         reducerm %= Math.max(1, 3);
         green7 = new Map([[`${reducerm}`, 2 & reducerm]]);
         break;
      }
      if (2 == router8.length && readi == String.fromCharCode(112,0)) {
         readi += `${readi.length}`;
      }
      if (readi == String.fromCharCode(48,0)) {
         router8 = `${(readi == String.fromCharCode(68,0) ? readi.length : router8.length)}`;
      }
      let pointS = String.fromCharCode(102,95,51,50,52,0) == router8;
      do {
          let playI = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,122,95,55,56,0);
          let crownf = 4.0;
         router8 += `${(readi == String.fromCharCode(86,0) ? readi.length : playI.length)}`;
         playI += `${parseInt(`${crownf}`) << (Math.min(1, Math.abs(3)))}`;
         crownf -= parseFloat(`${parseInt(`${crownf}`) << (Math.min(1, Math.abs(3)))}`);
         if (pointS) {
            break;
         }
      } while ((readi.length < 3) && pointS);
       let long_cH: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,49,95,52,49,0),211], [String.fromCharCode(117,95,51,56,95,111,117,98,108,101,0),363]]);
       let reminderZ: Map<any, any> = new Map([[String.fromCharCode(108,97,115,116,95,56,95,56,0),558], [String.fromCharCode(101,109,117,101,100,103,101,95,112,95,51,54,0),495], [String.fromCharCode(114,101,118,101,114,98,95,97,95,49,55,0),671]]);
         readi += `${long_cH.size | readi.length}`;
      navigationH.set(`${emptyq}`, 2);
      lessz += `${gmailf.length}`;
       let privacyR = 1.0;
       let verticalQ = false;
       let gemfileM = 3.0;
      if (!verticalQ) {
         verticalQ = gemfileM < 9.64;
      }
      if (!verticalQ) {
         verticalQ = gemfileM <= privacyR;
      }
      while (verticalQ) {
         privacyR *= parseInt(`${gemfileM}`) << (Math.min(5, Math.abs(2)));
         break;
      }
      for (let y = 0; y < 3; y++) {
         verticalQ = !verticalQ;
      }
         verticalQ = privacyR == gemfileM;
         privacyR *= (parseInt(`${gemfileM}`) << (Math.min(2, Math.abs((verticalQ ? 3 : 2)))));
         privacyR -= ((verticalQ ? 5 : 5) + parseInt(`${privacyR}`));
      if ((2.8 - privacyR) <= 5.37 || 2.8 <= privacyR) {
         privacyR -= parseInt(`${privacyR}`) / 3;
      }
      let expiredR = verticalQ ? !verticalQ : verticalQ;
      do {
          let soundY = String.fromCharCode(118,95,57,56,95,115,117,110,118,101,114,0);
          let fullO = 0.0;
          let stringr = 4.0;
          let grayM = String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,53,95,56,48,0);
          let downloadingU = 1;
         verticalQ = grayM == String.fromCharCode(110,0);
         soundY += `${parseInt(`${stringr}`) << (Math.min(4, Math.abs(3)))}`;
         fullO -= parseFloat(`${soundY.length}`);
         stringr /= Math.max(3, soundY.length);
         grayM += `${soundY.length}`;
         downloadingU <<= Math.min(Math.abs(parseInt(`${fullO}`)), 1);
         if (expiredR) {
            break;
         }
      } while ((!verticalQ) && expiredR);
      gmailf = `${parseInt(`${sinaL}`) >> (Math.min(Math.abs(parseInt(`${emptyq}`)), 3))}`;
      moduleP += `${playB.length & parseInt(`${sinaL}`)}`;

    if (isLocked) {

   while (5.39 == (goalU.length * starv)) {
      goalU = `${(String.fromCharCode(73,0) == moduleP ? playB.length : moduleP.length)}`;
      break;
   }
       let thailandO = String.fromCharCode(120,95,51,57,95,115,104,97,114,112,101,110,0);
          let pauseK = 4.0;
          let linez: Array<any> = [364, 150, 571];
         thailandO = `${thailandO.length}`;
         pauseK *= parseInt(`${pauseK}`) & 3;
         linez = [2];
      while (!thailandO.includes(`${thailandO.length}`)) {
          let tickedM = 1;
         thailandO = `${tickedM}`;
         break;
      }
         thailandO += `${thailandO.length}`;
      xvod8 /= Math.max((parseFloat(`${String.fromCharCode(56,0) == lessz ? lessz.length : thailandO.length}`)), 1);
   while (lessz.endsWith(`${xvod8}`)) {
       let vignetteW = 3.0;
       let castingB: Map<any, any> = new Map([[String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,56,95,50,51,0),String.fromCharCode(117,112,99,97,108,108,95,120,95,54,49,0)], [String.fromCharCode(117,95,49,49,95,99,121,117,118,0),String.fromCharCode(97,95,53,52,95,117,110,115,104,97,114,112,0)]]);
      let mailL = 5116914.0 >= vignetteW;
      do {
         vignetteW += castingB.size * parseInt(`${vignetteW}`);
         if (mailL) {
            break;
         }
      } while (mailL && (castingB.get(`${vignetteW}`) != null));
      while (castingB.get(`${vignetteW}`) != null) {
         castingB = new Map([[`${castingB.size}`, 2 | parseInt(`${vignetteW}`)]]);
         break;
      }
      if (castingB.size < 4) {
          let profile1 = String.fromCharCode(102,95,54,56,95,97,108,105,97,115,101,115,0);
          let filterk = String.fromCharCode(119,95,56,55,95,116,105,110,116,101,100,0);
          let winda: Array<any> = [528, 271, 619];
         castingB.set(profile1, winda.length + 3);
         profile1 += `${filterk.length}`;
         filterk = `${filterk.length}`;
      }
      while (!Array.from(castingB.keys()).includes(`${vignetteW}`)) {
         vignetteW /= Math.max(3, parseInt(`${vignetteW}`));
         break;
      }
      if (Array.from(castingB.values()).includes(vignetteW)) {
          let iconD = 4.0;
          let episodeq = String.fromCharCode(98,95,53,52,95,103,114,97,118,105,116,121,0);
          let promotionb = String.fromCharCode(101,95,49,57,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
          let rulesm = String.fromCharCode(101,95,49,95,101,120,112,111,114,116,101,100,0);
          let roomK = String.fromCharCode(106,95,49,48,95,107,101,121,119,111,114,100,0);
         castingB = new Map([[`${castingB.size}`, 1 ^ episodeq.length]]);
         iconD += roomK.length;
         episodeq += `${rulesm.length & 3}`;
         promotionb = `${parseInt(`${iconD}`) & 1}`;
         rulesm += `${2 >> (Math.min(3, rulesm.length))}`;
         roomK += `${roomK.length}`;
      }
         vignetteW -= parseInt(`${vignetteW}`);
      lessz = `${lessz.length}`;
      break;
   }
   while (!update_xlg && lessz.length <= 5) {
      update_xlg = String.fromCharCode(56,0) == goalU;
      break;
   }
   let plusP = 6399374 <= navigationH.size;
   do {
      navigationH.set(`${xvod8}`, 3 << (Math.min(5, Math.abs(parseInt(`${xvod8}`)))));
      if (plusP) {
         break;
      }
   } while (plusP && (5 <= (gmailf.length << (Math.min(3, Math.abs(navigationH.size)))) || (5 << (Math.min(2, gmailf.length))) <= 1));
   for (let m = 0; m < 2; m++) {
      goalU += `${(String.fromCharCode(70,0) == goalU ? navigationH.size : goalU.length)}`;
   }
      

       let sportsF = String.fromCharCode(115,115,114,99,95,110,95,50,54,0);
       let projects = String.fromCharCode(121,95,54,51,95,117,110,114,101,118,101,114,115,101,100,0);
       let selectL: Map<any, any> = new Map([[String.fromCharCode(115,101,97,114,99,104,101,100,95,122,95,51,51,0),659], [String.fromCharCode(104,101,97,114,116,115,95,110,95,52,52,0),415], [String.fromCharCode(117,110,105,111,110,95,55,95,53,53,0),865]]);
      for (let u = 0; u < 2; u++) {
          let pingx = String.fromCharCode(98,95,57,49,95,112,114,105,110,116,0);
          let pointG: Array<any> = [523, 849, 356];
          let eact6 = String.fromCharCode(98,95,57,53,95,112,101,114,105,111,100,105,99,0);
          let volumeK = String.fromCharCode(100,95,49,52,95,115,112,101,99,116,114,97,108,0);
         sportsF = "3";
         pingx = "1";
         pointG = [2];
         eact6 += `${(pingx == String.fromCharCode(68,0) ? pingx.length : volumeK.length)}`;
         volumeK = "2";
      }
      for (let a = 0; a < 1; a++) {
          let private_9aD = String.fromCharCode(102,95,49,53,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0);
         selectL = new Map([[`${selectL.size}`, selectL.size >> (Math.min(Math.abs(3), 3))]]);
         private_9aD += `${(String.fromCharCode(99,0) == private_9aD ? private_9aD.length : private_9aD.length)}`;
      }
       let photon: Array<any> = [765, 400];
         sportsF = "3";
         selectL = new Map([[projects, projects.length << (Math.min(sportsF.length, 3))]]);
      let constantsF = projects.length >= 7603907;
      do {
         projects = `${selectL.size / 3}`;
         if (constantsF) {
            break;
         }
      } while ((2 < (4 | selectL.size)) && constantsF);
      let whistlef = photon.length <= 6645223;
      do {
         photon = [1];
         if (whistlef) {
            break;
         }
      } while ((3 < (3 * projects.length) && (photon.length * projects.length) < 3) && whistlef);
          let dangerB = true;
          let changeu = 3.0;
         selectL = new Map([[`${selectL.size}`, selectL.size]]);
         dangerB = !dangerB;
         changeu /= Math.max(parseInt(`${changeu}`) / 3, 1);
      while (!projects.endsWith(`${selectL.size}`)) {
         projects += `${1 - selectL.size}`;
         break;
      }
      lessz += `${lessz.length}`;
   for (let n = 0; n < 1; n++) {
      sinaL += navigationH.size ^ 2;
   }
      lessz = `${parseInt(`${sinaL}`)}`;
   if ((xvod8 / (Math.max(1, sinaL))) == 2.75 || (xvod8 / (Math.max(sinaL, 5))) == 2.75) {
      sinaL /= Math.max(goalU.length & playB.length, 2);
   }
      lessz += `${parseInt(`${sinaL}`) % 2}`;
   let taiwanL = 5061513.0 >= xvod8;
   do {
      xvod8 /= Math.max(1, (parseFloat(`${(update_xlg ? 2 : 3)}`)));
      if (taiwanL) {
         break;
      }
   } while (taiwanL && (starv < xvod8));
      setIsLocked(false);
    } else {

   for (let d = 0; d < 1; d++) {
       let commona = 5;
       let contextT = false;
      while (contextT || 5 > (commona << (Math.min(Math.abs(5), 3)))) {
         commona /= Math.max(commona, 4);
         break;
      }
      if (3 > (3 ^ commona)) {
         commona &= ((contextT ? 4 : 5) / (Math.max(commona, 5)));
      }
      for (let k = 0; k < 3; k++) {
         contextT = !contextT;
      }
          let countdownv = String.fromCharCode(97,108,97,109,111,102,105,114,101,95,120,95,51,54,0);
          let sentryC = String.fromCharCode(122,95,49,55,95,112,108,117,103,103,101,100,0);
         commona |= 2 ^ countdownv.length;
         countdownv += `${sentryC.length | sentryC.length}`;
         contextT = commona == 84;
         contextT = !contextT;
      goalU = `${gmailf.length ^ 1}`;
   }
   if (2.16 >= emptyq) {
      moduleP += `${goalU.length}`;
   }
   let sporto = String.fromCharCode(114,109,54,98,0) == lessz;
   do {
      lessz = `${1 & gmailf.length}`;
      if (sporto) {
         break;
      }
   } while (sporto && ((lessz.length * parseInt(`${xvod8}`)) > 5));
   if (moduleP != String.fromCharCode(50,0) && gmailf.length == 1) {
       let connectionW = 0.0;
      if (5.18 < (connectionW + connectionW)) {
          let uploadz = String.fromCharCode(115,95,54,55,95,98,105,116,114,118,99,111,110,106,0);
          let zhengpianH = String.fromCharCode(99,95,50,48,95,113,99,101,108,112,0);
         connectionW += parseFloat(`${parseInt(`${connectionW}`)}`);
         uploadz = `${uploadz.length % (Math.max(7, zhengpianH.length))}`;
         zhengpianH += `${(uploadz == String.fromCharCode(119,0) ? uploadz.length : zhengpianH.length)}`;
      }
       let shirtz = String.fromCharCode(102,95,57,51,95,102,111,114,109,97,116,116,101,114,115,0);
       let downloaderp = 5.0;
      moduleP = "3";
   }
       let bootsplasha = String.fromCharCode(98,108,97,107,101,115,95,121,95,53,49,0);
       let bottomJ = String.fromCharCode(100,101,99,114,121,112,116,95,106,95,54,53,0);
       let fastK = String.fromCharCode(121,95,49,54,95,118,112,108,97,121,101,114,0);
      let malaysiaB = fastK == String.fromCharCode(109,108,122,99,102,115,120,0);
      do {
         fastK += "3";
         if (malaysiaB) {
            break;
         }
      } while ((!bottomJ.includes(fastK)) && malaysiaB);
          let sinaC = true;
         bootsplasha = `${(String.fromCharCode(115,0) == bottomJ ? bottomJ.length : (sinaC ? 5 : 3))}`;
      while (bootsplasha.length > 3) {
         bottomJ = `${1 * bottomJ.length}`;
         break;
      }
         fastK = "3";
      let time_cZ = 9612934 >= bottomJ.length;
      do {
          let orientationd = 0;
          let hoverZ = String.fromCharCode(121,95,55,51,95,99,111,111,114,100,0);
          let sinap: Map<any, any> = new Map([[String.fromCharCode(101,109,112,116,121,95,120,95,54,56,0),48], [String.fromCharCode(120,95,52,57,95,109,97,100,101,0),826]]);
         bottomJ += `${1 + hoverZ.length}`;
         orientationd ^= orientationd % (Math.max(1, 2));
         hoverZ = `${orientationd}`;
         sinap.set(`${orientationd}`, orientationd);
         if (time_cZ) {
            break;
         }
      } while (time_cZ && (bottomJ.startsWith(`${fastK.length}`)));
         fastK = `${bottomJ.length * 1}`;
      for (let w = 0; w < 3; w++) {
         bottomJ = `${bootsplasha.length | 3}`;
      }
       let user9: Map<any, any> = new Map([[String.fromCharCode(118,95,49,95,99,111,112,121,105,110,105,111,118,0),173], [String.fromCharCode(112,99,97,99,104,101,95,101,95,51,57,0),88]]);
      let benefitu = 5016336 <= user9.size;
      do {
         user9 = new Map([[`${user9.size}`, user9.size ^ fastK.length]]);
         if (benefitu) {
            break;
         }
      } while (((user9.size % (Math.max(1, 2))) <= 1) && benefitu);
      sinaL /= Math.max(5, 2);
      playB = `${(moduleP.length - (update_xlg ? 4 : 5))}`;
      

   if ((4 - parseInt(`${xvod8}`)) < 5 || (xvod8 - 1.40) < 1.80) {
      goalU = `${moduleP.length}`;
   }
   for (let n = 0; n < 2; n++) {
      moduleP += "1";
   }
       let sharedb: Array<any> = [864, 435];
      for (let b = 0; b < 3; b++) {
         sharedb = [2];
      }
       let inviteg = String.fromCharCode(100,95,57,48,95,115,116,114,111,107,101,114,0);
      for (let r = 0; r < 2; r++) {
          let completeC = String.fromCharCode(114,95,56,52,95,102,105,114,101,119,97,108,108,0);
          let countdowne = 1.0;
          let emojir = 5.0;
          let current3 = 3.0;
         sharedb = [(inviteg == String.fromCharCode(69,0) ? inviteg.length : completeC.length)];
         completeC += `${parseInt(`${countdowne}`) * parseInt(`${emojir}`)}`;
         countdowne += parseFloat(`${3}`);
         emojir -= 1 & parseInt(`${countdowne}`);
         current3 -= parseInt(`${emojir}`);
      }
      sinaL /= Math.max(2, navigationH.size << (Math.min(Math.abs(3), 5)));
      gmailf += `${moduleP.length}`;
   for (let q = 0; q < 3; q++) {
       let inactiveI = 2;
       let episodesa = String.fromCharCode(115,95,50,50,95,97,115,101,108,101,99,116,0);
       let spinner9 = String.fromCharCode(114,95,49,50,95,115,119,105,116,99,104,101,114,0);
          let gift5 = 4.0;
         spinner9 = `${spinner9.length & 3}`;
         gift5 *= parseFloat(`${parseInt(`${gift5}`) << (Math.min(3, Math.abs(2)))}`);
         episodesa += `${(String.fromCharCode(56,0) == episodesa ? inactiveI : episodesa.length)}`;
         episodesa += `${spinner9.length / 3}`;
         episodesa += `${inactiveI}`;
         spinner9 = `${(String.fromCharCode(71,0) == spinner9 ? spinner9.length : episodesa.length)}`;
       let disconnectedN = 0;
         spinner9 = `${1 << (Math.min(5, Math.abs(inactiveI)))}`;
       let downh = 2.0;
       let ying8 = 4.0;
      if ((disconnectedN - spinner9.length) <= 1 && (disconnectedN - spinner9.length) <= 1) {
         spinner9 = `${episodesa.length >> (Math.min(Math.abs(3), 1))}`;
      }
      gmailf = `${((update_xlg ? 3 : 4))}`;
   }
   for (let q = 0; q < 3; q++) {
       let borderlessD = 0.0;
       let containerQ = 4.0;
       let areai: Array<any> = [494, 145, 479];
       let editJ: Array<any> = [487, 298];
       let short_mh = 1.0;
      if ((editJ.length * parseInt(`${short_mh}`)) >= 3 || (editJ.length * short_mh) >= 2.68) {
         editJ.push(2);
      }
         areai = [editJ.length % (Math.max(4, areai.length))];
          let dialogw = 5.0;
         containerQ -= areai.length;
         dialogw += parseFloat(`${parseInt(`${dialogw}`)}`);
          let store9: Map<any, any> = new Map([[String.fromCharCode(113,112,101,103,95,99,95,57,51,0),914], [String.fromCharCode(112,97,114,97,109,95,110,95,49,48,48,0),929], [String.fromCharCode(103,111,112,115,95,100,95,50,0),656]]);
          let turnD = String.fromCharCode(99,104,101,99,107,95,119,95,51,50,0);
          let tooltipsZ = 3;
         short_mh /= Math.max(areai.length, 4);
         store9 = new Map([[`${store9.size}`, (String.fromCharCode(100,0) == turnD ? store9.size : turnD.length)]]);
         tooltipsZ |= store9.size;
      let description_vcy = areai.length >= 6895447;
      do {
          let referrerw = 5;
          let type_klc = String.fromCharCode(106,95,52,57,95,100,101,115,116,105,110,97,116,105,111,110,0);
          let clearR = 3.0;
         areai.push(referrerw - 1);
         referrerw %= Math.max(3, type_klc.length);
         type_klc = `${parseInt(`${clearR}`)}`;
         clearR *= parseInt(`${clearR}`) % 3;
         if (description_vcy) {
            break;
         }
      } while ((!editJ.includes(areai.length)) && description_vcy);
      let sendr = containerQ >= 9371808.0;
      do {
         containerQ *= 1 >> (Math.min(Math.abs(parseInt(`${borderlessD}`)), 1));
         if (sendr) {
            break;
         }
      } while ((1.80 > borderlessD) && sendr);
         borderlessD *= parseFloat(`${2}`);
      for (let q = 0; q < 1; q++) {
          let leaguew = String.fromCharCode(121,95,56,52,95,97,99,117,116,111,102,102,0);
          let gesturesE: Map<any, any> = new Map([[String.fromCharCode(115,95,50,48,95,115,117,112,101,114,115,101,116,0),String.fromCharCode(121,95,57,95,115,104,105,109,0)], [String.fromCharCode(111,95,56,54,95,116,117,110,110,101,108,0),String.fromCharCode(108,111,111,107,115,95,113,95,51,50,0)]]);
         editJ = [2];
         leaguew = "2";
         gesturesE = new Map([[`${gesturesE.size}`, leaguew.length | 2]]);
      }
      let reportN = editJ.length >= 5581482;
      do {
         editJ.push(editJ.length);
         if (reportN) {
            break;
         }
      } while (reportN && ((4 + areai.length) == 1));
          let regengb: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,117,95,55,54,0),String.fromCharCode(116,111,117,116,95,52,95,57,53,0)], [String.fromCharCode(117,95,54,49,95,110,111,116,99,104,101,100,0),String.fromCharCode(103,101,116,116,105,110,103,95,106,95,55,48,0)]]);
          let with_tyF = String.fromCharCode(114,101,97,100,101,114,95,110,95,49,51,0);
          let small_ = false;
         editJ.push(parseInt(`${short_mh}`) * 2);
         regengb = new Map([[`${regengb.size}`, 2]]);
         with_tyF = `${(String.fromCharCode(103,0) == with_tyF ? regengb.size : with_tyF.length)}`;
         small_ = regengb.size <= with_tyF.length;
      for (let j = 0; j < 3; j++) {
         areai.push(parseInt(`${short_mh}`) & 1);
      }
       let countryW = String.fromCharCode(97,108,109,111,115,116,95,97,95,54,55,0);
         countryW += `${countryW.length % 2}`;
         areai.push(parseInt(`${containerQ}`));
      while ((short_mh + 3.50) < 1.52) {
         short_mh += countryW.length;
         break;
      }
      lessz += `${(parseInt(`${containerQ}`) ^ (update_xlg ? 2 : 2))}`;
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
