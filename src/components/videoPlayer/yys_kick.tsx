import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity, Platform } from 'react-native';
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
import { UnlockScreenSvg, ProjectSvg, DownloadBtnSvg } from '@static';
import VodListVertical from '../vod/yys_giftbutton';
import GesturesGuide from '../gestures/vod/yys_homeloading';
import VodLiveStationListVertical from '../vod/yys_basketballplayerplaceholder';
import FastImage from '../common/yys_alert_backwhite';
import { screenModel } from '@type';
import { useAppSelector } from '@hooks';
import AdultModeCountdownIndicator from '../adultVideo/yys_libglog_unselected';
import { DOWNLOAD_FEATURE_ENABLED, UMENG_CHANNEL } from '@utility';
import VodDownloadSelection from '../vod/yys_matchdetailbg';

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
  isFetchingRecommendedMovies?: boolean,
  isVip: boolean,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
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
       let reactnavigationX = false;
    let libmapbufferjni2 = 3.0;
    let pathr = String.fromCharCode(117,110,115,101,108,101,99,116,95,105,95,56,51,0);
    let expandd: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,98,111,111,107,95,114,95,51,50,0),393], [String.fromCharCode(119,95,50,52,95,102,111,112,101,110,0),704], [String.fromCharCode(100,101,99,114,121,112,116,95,114,95,57,56,0),998]]);
    let redcirclebgZ = true;
    let countdownG = false;
    let schedulerk = 4.0;
    let x_hashr = String.fromCharCode(108,95,53,52,95,114,101,99,111,109,98,105,110,101,0);
    let update_b7C = 2.0;
      pathr += `${parseInt(`${libmapbufferjni2}`) >> (Math.min(Math.abs(parseInt(`${schedulerk}`)), 2))}`;
   if (!reactnavigationX) {
      libmapbufferjni2 -= (parseFloat(`${(redcirclebgZ ? 1 : 3) / (Math.max(6, expandd.size))}`));
   }
      reactnavigationX = String.fromCharCode(102,0) == x_hashr;
       let filterS = 0.0;
       let awayiconZ = String.fromCharCode(107,95,53,50,95,102,111,114,101,109,97,110,0);
      let clearh = filterS >= 9486857.0;
      do {
         filterS -= parseFloat(`${parseInt(`${filterS}`) - awayiconZ.length}`);
         if (clearh) {
            break;
         }
      } while (clearh && (!awayiconZ.startsWith(`${filterS}`)));
         awayiconZ += `${1 ^ awayiconZ.length}`;
         awayiconZ = `${parseInt(`${filterS}`) & awayiconZ.length}`;
         awayiconZ += `${parseInt(`${filterS}`)}`;
      while (!awayiconZ.startsWith(`${filterS}`)) {
          let iconarrowrightblackF = 0.0;
          let libfabricjniQ: Map<any, any> = new Map([[String.fromCharCode(104,121,115,99,97,108,101,95,115,95,53,57,0),214], [String.fromCharCode(112,97,114,97,108,108,97,120,95,54,95,57,56,0),781], [String.fromCharCode(98,105,103,110,117,109,95,115,95,50,48,0),516]]);
          let checkbox6 = true;
          let internetv = String.fromCharCode(115,105,103,105,108,108,95,98,95,50,52,0);
         filterS *= parseFloat(`${1 / (Math.max(10, libfabricjniQ.size))}`);
         iconarrowrightblackF *= parseInt(`${iconarrowrightblackF}`);
         libfabricjniQ.set(internetv, parseInt(`${iconarrowrightblackF}`) ^ internetv.length);
         checkbox6 = (internetv.length - iconarrowrightblackF) == 4.20;
         break;
      }
      while (awayiconZ.length >= parseInt(`${filterS}`)) {
         awayiconZ = `${parseInt(`${filterS}`)}`;
         break;
      }
      libmapbufferjni2 *= (parseFloat(`${String.fromCharCode(104,0) == x_hashr ? x_hashr.length : parseInt(`${libmapbufferjni2}`)}`));
      countdownG = !countdownG;
      expandd.set(pathr, 1);
   for (let u = 0; u < 3; u++) {
       let leagueT = 2.0;
       let defaultfootballbgb = 1;
          let activeA = 4;
          let mbbidG: Array<any> = [675, 907];
          let pangleF = false;
         defaultfootballbgb ^= activeA % (Math.max(1, 1));
         activeA %= Math.max(3, 4);
         mbbidG = [(3 >> (Math.min(2, Math.abs((pangleF ? 3 : 5)))))];
         leagueT /= Math.max(2, parseInt(`${leagueT}`));
      while (5.11 > leagueT) {
         leagueT /= Math.max(defaultfootballbgb / (Math.max(parseInt(`${leagueT}`), 1)), 4);
         break;
      }
       let activityJ = true;
         defaultfootballbgb |= parseInt(`${leagueT}`) | 2;
         leagueT /= Math.max(2, defaultfootballbgb);
      reactnavigationX = defaultfootballbgb >= 65;
   }
   if (2 <= expandd.size) {
       let leagueX = 2.0;
      while ((3.43 * leagueX) > 4.19 && 1.0 > (leagueX / 3.43)) {
          let iconmegaphone1: Array<any> = [String.fromCharCode(105,103,110,111,114,101,115,95,57,95,52,49,0), String.fromCharCode(110,95,55,50,95,106,112,101,103,100,115,112,0), String.fromCharCode(115,95,57,53,95,115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0)];
         leagueX += iconmegaphone1.length;
         break;
      }
      if (leagueX == leagueX) {
          let questiconO = 4;
          let trashS = 4.0;
          let stations9 = 4;
          let faviconP = 4.0;
         leagueX *= parseInt(`${faviconP}`);
         questiconO <<= Math.min(Math.abs(stations9 >> (Math.min(3, Math.abs(questiconO)))), 3);
         trashS -= parseFloat(`${2 >> (Math.min(3, Math.abs(stations9)))}`);
         faviconP -= stations9;
      }
         leagueX /= Math.max(5, 3);
      expandd.set(`${schedulerk}`, ((reactnavigationX ? 5 : 3) & parseInt(`${schedulerk}`)));
   }
      expandd = new Map([[`${schedulerk}`, parseInt(`${schedulerk}`)]]);
   let yellowcirclebgB = countdownG ? !countdownG : countdownG;
   do {
       let libcrashsdkD = String.fromCharCode(108,95,48,95,99,111,109,112,108,101,120,0);
       let sell8 = 2.0;
       let imagenetworkerrv = 5.0;
       let libmapbufferjni9 = 0;
       let hearts = 5.0;
         libmapbufferjni9 <<= Math.min(Math.abs(libmapbufferjni9 | 1), 3);
      let tnewinterstitialB = 7591578 <= libcrashsdkD.length;
      do {
         libcrashsdkD += `${(libcrashsdkD == String.fromCharCode(120,0) ? parseInt(`${sell8}`) : libcrashsdkD.length)}`;
         if (tnewinterstitialB) {
            break;
         }
      } while (tnewinterstitialB && ((hearts - libcrashsdkD.length) == 3.74 && 5 == (libcrashsdkD.length & 5)));
      while (2 > (1 & libmapbufferjni9) || 1 > (libcrashsdkD.length & libmapbufferjni9)) {
         libcrashsdkD += `${libcrashsdkD.length}`;
         break;
      }
         libmapbufferjni9 %= Math.max(5, 1);
         hearts *= 3 | parseInt(`${sell8}`);
      let theme8 = sell8 <= 9646851.0;
      do {
         sell8 *= parseInt(`${imagenetworkerrv}`) & 2;
         if (theme8) {
            break;
         }
      } while ((!libcrashsdkD.includes(`${sell8}`)) && theme8);
         libcrashsdkD = "2";
      let iconwatchnowA = imagenetworkerrv >= 6418399.0;
      do {
          let render4 = true;
          let humidityq = 5;
         imagenetworkerrv += (parseFloat(`${libcrashsdkD == String.fromCharCode(72,0) ? libcrashsdkD.length : libmapbufferjni9}`));
         render4 = 34 <= humidityq || !render4;
         humidityq ^= 3 & humidityq;
         if (iconwatchnowA) {
            break;
         }
      } while (iconwatchnowA && (2.52 < (sell8 / (Math.max(imagenetworkerrv, 4))) && 3.66 < (sell8 / 2.52)));
          let matchdetailbgp = String.fromCharCode(101,95,55,95,97,108,105,103,110,109,101,110,116,0);
          let combinea = String.fromCharCode(108,95,50,48,95,110,97,110,0);
          let types2 = 0;
         imagenetworkerrv -= parseFloat(`${types2 | 3}`);
         matchdetailbgp = `${combinea.length << (Math.min(matchdetailbgp.length, 1))}`;
         combinea = `${2 >> (Math.min(5, combinea.length))}`;
         types2 *= combinea.length % 3;
          let iconnointernet6 = String.fromCharCode(109,97,112,108,105,109,105,116,95,120,95,50,55,0);
          let iconchatsendE: Array<any> = [94, 343];
          let libjsiE = true;
         libmapbufferjni9 >>= Math.min(3, libcrashsdkD.length);
         iconnointernet6 += `${(3 - (libjsiE ? 3 : 1))}`;
         iconchatsendE = [(iconchatsendE.length - (libjsiE ? 3 : 5))];
      if (3.58 < (5.39 + imagenetworkerrv)) {
         imagenetworkerrv -= parseFloat(`${libcrashsdkD.length}`);
      }
         imagenetworkerrv *= parseFloat(`${1}`);
          let teama = 4;
          let footballtrophyJ: Map<any, any> = new Map([[String.fromCharCode(114,97,116,105,111,95,101,95,52,0),760], [String.fromCharCode(107,95,51,50,95,101,115,116,114,111,121,0),546]]);
         libmapbufferjni9 %= Math.max(4, (String.fromCharCode(56,0) == libcrashsdkD ? libcrashsdkD.length : parseInt(`${hearts}`)));
         teama %= Math.max(2, footballtrophyJ.size / (Math.max(6, teama)));
         footballtrophyJ.set(`${teama}`, teama);
         libcrashsdkD = `${parseInt(`${sell8}`)}`;
      for (let t = 0; t < 2; t++) {
         libcrashsdkD += "1";
      }
      countdownG = !x_hashr.startsWith(`${schedulerk}`);
      if (yellowcirclebgB) {
         break;
      }
   } while ((!redcirclebgZ || countdownG) && yellowcirclebgB);
   if (redcirclebgZ) {
      redcirclebgZ = !reactnavigationX;
   }
      x_hashr += "1";
      reactnavigationX = !reactnavigationX || !redcirclebgZ;
      x_hashr = `${(String.fromCharCode(68,0) == pathr ? pathr.length : parseInt(`${schedulerk}`))}`;
      x_hashr = `${2 << (Math.min(Math.abs(parseInt(`${libmapbufferjni2}`)), 5))}`;
      reactnavigationX = !redcirclebgZ;
      schedulerk -= (parseFloat(`${(reactnavigationX ? 1 : 4) * 1}`));
   if (3.49 <= (2.89 * schedulerk)) {
      redcirclebgZ = countdownG && 4.43 < libmapbufferjni2;
   }
   let combineR = x_hashr == String.fromCharCode(102,48,116,103,55,107,105,48,107,0);
   do {
      x_hashr = `${3 + parseInt(`${libmapbufferjni2}`)}`;
      if (combineR) {
         break;
      }
   } while ((!redcirclebgZ) && combineR);
   let thumbnail7 = update_b7C >= 8964490.0;
   do {
       let balla = 4.0;
      while (4.55 <= (balla - 4.17) || 3.62 <= (4.17 / (Math.max(6, balla)))) {
         balla -= parseInt(`${balla}`);
         break;
      }
         balla /= Math.max(1, parseInt(`${balla}`));
      while (5.91 > (balla - 2.16) && (balla - 2.16) > 3.92) {
         balla /= Math.max(parseInt(`${balla}`) % 3, 1);
         break;
      }
      update_b7C += parseInt(`${update_b7C}`) / 1;
      if (thumbnail7) {
         break;
      }
   } while (thumbnail7 && ((update_b7C * pathr.length) < 1.98 || (update_b7C * pathr.length) < 1.98));

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
       let positionfieldH = String.fromCharCode(115,97,116,95,116,95,55,53,0);
    let detailw = String.fromCharCode(115,116,97,103,105,110,103,95,112,95,53,55,0);
    let videovarO = 4.0;
    let listS = String.fromCharCode(121,95,49,54,95,100,101,112,114,101,99,97,116,105,111,110,115,0);
    let libbufferQ = String.fromCharCode(110,105,98,98,108,101,95,109,95,51,49,0);
    let awayteamfieldx = 5;
    let pangleu = 4.0;
    let orangeclocke = String.fromCharCode(116,97,110,115,105,103,95,100,95,54,55,0);
    let renderI: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,108,97,112,95,109,95,51,50,0),String.fromCharCode(121,95,52,53,95,100,101,108,101,103,97,116,101,115,0)], [String.fromCharCode(107,95,51,49,95,109,101,100,105,97,0),String.fromCharCode(112,108,117,103,103,101,100,95,112,95,49,52,0)], [String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,122,95,55,0),String.fromCharCode(105,95,49,52,95,106,115,105,109,100,99,102,103,0)]]);
    let nbatrophyD = false;
    let anythinki = 5;
    let matchZ: Map<any, any> = new Map([[String.fromCharCode(101,95,54,54,95,104,100,97,116,97,0),825], [String.fromCharCode(111,95,55,55,95,118,97,114,105,97,100,105,99,0),47], [String.fromCharCode(112,95,54,95,99,105,114,99,108,101,100,0),759]]);
    let java7 = String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,115,95,113,95,52,49,0);
    let profileframe9 = String.fromCharCode(105,115,115,117,101,95,114,95,55,56,0);
   let circleN = 9760960 <= awayteamfieldx;
   do {
      awayteamfieldx <<= Math.min(5, Math.abs((String.fromCharCode(112,0) == positionfieldH ? positionfieldH.length : renderI.size)));
      if (circleN) {
         break;
      }
   } while ((!listS.endsWith(`${awayteamfieldx}`)) && circleN);
   if (3 <= (matchZ.size - 5)) {
      detailw += `${renderI.size ^ 2}`;
   }
   if (detailw == positionfieldH) {
      positionfieldH = `${renderI.size}`;
   }
       let rncoreo = String.fromCharCode(101,118,97,108,117,108,97,116,101,95,49,95,51,56,0);
       let hometeamfield_: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,95,120,95,52,54,0),true ], [String.fromCharCode(105,95,53,55,95,104,97,115,104,101,100,0),true ]]);
      let release_5g0 = rncoreo.length <= 8585305;
      do {
         rncoreo = `${rncoreo.length}`;
         if (release_5g0) {
            break;
         }
      } while (release_5g0 && (4 > hometeamfield_.size));
         rncoreo += `${(String.fromCharCode(55,0) == rncoreo ? hometeamfield_.size : rncoreo.length)}`;
      if ((rncoreo.length * hometeamfield_.size) < 3 || 3 < (hometeamfield_.size * rncoreo.length)) {
         hometeamfield_ = new Map([[`${hometeamfield_.size}`, rncoreo.length]]);
      }
      for (let r = 0; r < 1; r++) {
          let animationq = 5.0;
          let zhengpian4: Array<any> = [192, 83, 768];
          let stats2 = 1;
         hometeamfield_.set(`${animationq}`, hometeamfield_.size);
         animationq *= parseFloat(`${stats2}`);
         zhengpian4 = [zhengpian4.length];
         stats2 /= Math.max(1, stats2);
      }
      for (let v = 0; v < 3; v++) {
          let iconeyec = 1.0;
          let description_8_ = 2.0;
          let skipM = String.fromCharCode(110,95,49,55,95,117,116,105,108,115,0);
          let binddatasF = false;
         rncoreo += "1";
         iconeyec += (parseFloat(`${String.fromCharCode(70,0) == skipM ? parseInt(`${iconeyec}`) : skipM.length}`));
         description_8_ /= Math.max(1, 2);
         binddatasF = iconeyec > 74.9;
      }
          let left_ = 4.0;
         hometeamfield_ = new Map([[`${left_}`, 2 ^ parseInt(`${left_}`)]]);
      anythinki %= Math.max(libbufferQ.length, 2);
      orangeclocke = `${3 << (Math.min(1, detailw.length))}`;
       let smallorangemanf = String.fromCharCode(100,95,55,95,114,101,109,111,118,97,108,115,0);
      for (let i = 0; i < 2; i++) {
         smallorangemanf = `${smallorangemanf.length}`;
      }
       let static_jq = 1;
       let trash1 = 5;
      if ((smallorangemanf.length - 2) <= 4) {
         smallorangemanf += `${static_jq}`;
      }
      anythinki *= 3;
       let fullscreenminr = 1;
       let redcirclebgK: Array<any> = [816, 84];
       let constantsl = String.fromCharCode(116,111,112,105,99,97,108,95,54,95,52,52,0);
         redcirclebgK.push(constantsl.length | fullscreenminr);
      for (let k = 0; k < 2; k++) {
         fullscreenminr -= redcirclebgK.length - 1;
      }
      for (let v = 0; v < 2; v++) {
         constantsl = `${constantsl.length ^ redcirclebgK.length}`;
      }
      for (let z = 0; z < 3; z++) {
         fullscreenminr %= Math.max(4, 1 ^ redcirclebgK.length);
      }
         fullscreenminr >>= Math.min(5, Math.abs(3));
      if ((4 ^ redcirclebgK.length) >= 1) {
         redcirclebgK = [redcirclebgK.length];
      }
      while (fullscreenminr > 2) {
          let iconviewerS = String.fromCharCode(100,121,110,97,114,114,97,121,95,103,95,55,57,0);
          let nendc = 1.0;
          let upgrade4 = 1.0;
          let basketballiconO: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,105,110,103,95,113,95,52,55,0),699], [String.fromCharCode(115,95,57,53,95,112,101,114,99,101,110,116,105,108,101,0),491]]);
          let layoutD = 0.0;
         fullscreenminr += parseInt(`${layoutD}`) ^ 3;
         iconviewerS = "3";
         nendc += parseFloat(`${3}`);
         upgrade4 -= 2;
         basketballiconO.set(`${nendc}`, 1);
         layoutD -= parseFloat(`${1}`);
         break;
      }
         redcirclebgK.push(constantsl.length);
          let iconclosewhitewithbgi = false;
          let condensedg = String.fromCharCode(112,111,115,116,97,108,95,114,95,50,53,0);
         fullscreenminr -= redcirclebgK.length - 3;
         iconclosewhitewithbgi = !condensedg.includes(`${iconclosewhitewithbgi}`);
         condensedg = `${condensedg.length}`;
      pangleu -= parseFloat(`${fullscreenminr}`);
      positionfieldH = `${(listS == String.fromCharCode(82,0) ? detailw.length : listS.length)}`;
   let utilsm = 8970861 <= awayteamfieldx;
   do {
       let basketballhometeamC = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,122,95,50,0);
      let macaum = String.fromCharCode(112,112,122,106,98,122,0) == basketballhometeamC;
      do {
         basketballhometeamC += `${(String.fromCharCode(113,0) == basketballhometeamC ? basketballhometeamC.length : basketballhometeamC.length)}`;
         if (macaum) {
            break;
         }
      } while (macaum && (basketballhometeamC == basketballhometeamC));
      if (basketballhometeamC != String.fromCharCode(78,0) || basketballhometeamC != String.fromCharCode(49,0)) {
         basketballhometeamC = `${1 << (Math.min(3, basketballhometeamC.length))}`;
      }
          let mbridgeG = 2.0;
         basketballhometeamC += `${basketballhometeamC.length * 1}`;
         mbridgeG *= parseInt(`${mbridgeG}`);
      awayteamfieldx &= libbufferQ.length;
      if (utilsm) {
         break;
      }
   } while (utilsm && (3 < (1 << (Math.min(2, detailw.length)))));
   while ((5 << (Math.min(1, libbufferQ.length))) == 5 || (libbufferQ.length << (Math.min(5, Math.abs(awayteamfieldx)))) == 5) {
      libbufferQ = `${parseInt(`${pangleu}`) % (Math.max(3, 8))}`;
      break;
   }
      pangleu -= (parseFloat(`${String.fromCharCode(78,0) == positionfieldH ? (nbatrophyD ? 1 : 5) : positionfieldH.length}`));
   let middlesound0 = 6008556 <= anythinki;
   do {
      anythinki -= renderI.size;
      if (middlesound0) {
         break;
      }
   } while (middlesound0 && (2.79 < videovarO));
   while (matchZ.size >= orangeclocke.length) {
      orangeclocke = `${matchZ.size}`;
      break;
   }
      renderI = new Map([[libbufferQ, (String.fromCharCode(78,0) == libbufferQ ? awayteamfieldx : libbufferQ.length)]]);
   if (nbatrophyD) {
      nbatrophyD = anythinki == 8;
   }

    setShowSliderThumbnail(!showSliderThumbnail);

       let privacyI = String.fromCharCode(99,111,110,116,101,120,116,95,108,95,56,52,0);
       let valuesh = String.fromCharCode(99,111,118,97,114,105,97,110,99,101,95,57,95,57,48,0);
       let sentryB = 1;
         valuesh += `${valuesh.length % 1}`;
       let rulesc = String.fromCharCode(106,100,115,97,109,112,108,101,95,97,95,57,57,0);
         privacyI = `${rulesc.length}`;
         rulesc = `${3 + privacyI.length}`;
      if (5 >= (4 - sentryB)) {
          let orangew = 3;
          let settingo = String.fromCharCode(104,97,100,95,115,95,54,55,0);
          let handlerp: Array<any> = [732, 90];
         sentryB += 3;
         orangew %= Math.max(settingo.length, 2);
         settingo += `${(String.fromCharCode(74,0) == settingo ? handlerp.length : settingo.length)}`;
         handlerp.push(handlerp.length);
      }
       let componentregistryl = false;
      while (2 >= rulesc.length) {
         valuesh += `${(String.fromCharCode(99,0) == valuesh ? sentryB : valuesh.length)}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
         rulesc = "2";
      }
          let libmapbufferjnir = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,107,95,54,48,0);
          let d_imagec = 2;
         rulesc += "3";
         libmapbufferjnir = "1";
         d_imagec >>= Math.min(3, Math.abs((String.fromCharCode(118,0) == libmapbufferjnir ? libmapbufferjnir.length : d_imagec)));
      anythinki |= renderI.size ^ libbufferQ.length;
   let weather7 = 6963761 >= libbufferQ.length;
   do {
       let defaultplayerimgo = String.fromCharCode(97,95,53,55,95,98,101,116,104,115,111,102,116,118,105,100,0);
         defaultplayerimgo = "2";
      if (defaultplayerimgo != String.fromCharCode(56,0) && defaultplayerimgo != String.fromCharCode(114,0)) {
         defaultplayerimgo = `${defaultplayerimgo.length | defaultplayerimgo.length}`;
      }
      while (defaultplayerimgo == String.fromCharCode(115,0)) {
         defaultplayerimgo += `${defaultplayerimgo.length}`;
         break;
      }
      libbufferQ = `${2 | matchZ.size}`;
      if (weather7) {
         break;
      }
   } while ((libbufferQ.endsWith(`${videovarO}`)) && weather7);
   for (let x = 0; x < 2; x++) {
      videovarO /= Math.max(awayteamfieldx, 5);
   }
   while (positionfieldH != libbufferQ) {
      libbufferQ = `${orangeclocke.length | awayteamfieldx}`;
      break;
   }
   if (4.85 <= (pangleu + 3.73) && (3.73 + pangleu) <= 4.46) {
       let singlet = String.fromCharCode(112,111,105,110,116,115,95,120,95,49,56,0);
       let sportsh = String.fromCharCode(112,114,101,115,101,110,99,101,95,115,95,54,49,0);
       let basketballD: Array<any> = [809, 446];
       let plashb = String.fromCharCode(114,101,116,117,114,110,115,95,105,95,49,54,0);
      while (2 == (plashb.length % 5) && 5 == (basketballD.length % (Math.max(plashb.length, 10)))) {
         basketballD = [singlet.length / 3];
         break;
      }
       let libfollyV = 1;
         basketballD.push(singlet.length);
       let basketballplayerplaceholderG = String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,51,95,55,57,0);
       let giflivestreamingw = String.fromCharCode(102,95,51,51,95,97,116,116,97,99,107,0);
          let bellreminderY = String.fromCharCode(115,116,97,114,95,98,95,54,53,0);
         basketballD = [1 >> (Math.min(3, Math.abs(libfollyV)))];
         bellreminderY = `${bellreminderY.length}`;
         sportsh += "3";
      for (let m = 0; m < 3; m++) {
         sportsh = "1";
      }
      while (singlet.length == sportsh.length) {
         singlet = `${plashb.length}`;
         break;
      }
         plashb = `${basketballD.length}`;
      while ((basketballD.length + singlet.length) > 4 && (4 + singlet.length) > 4) {
          let x_countD = String.fromCharCode(98,95,51,55,95,101,110,117,109,101,114,97,116,101,100,0);
          let lightp: Array<any> = [String.fromCharCode(119,101,98,109,101,110,99,95,109,95,53,56,0), String.fromCharCode(102,95,55,55,95,97,108,110,117,109,0)];
          let filledm = String.fromCharCode(97,95,49,48,95,97,116,116,97,99,104,101,100,0);
         singlet += `${basketballplayerplaceholderG.length}`;
         x_countD = `${3 | x_countD.length}`;
         lightp = [2 * x_countD.length];
         filledm += `${filledm.length}`;
         break;
      }
          let blacka = String.fromCharCode(118,95,54,48,95,115,116,114,101,110,103,116,104,115,0);
         basketballplayerplaceholderG += `${libfollyV << (Math.min(Math.abs(2), 5))}`;
         blacka = `${2 % (Math.max(3, blacka.length))}`;
       let roote = 4;
       let containerY = 2;
      awayteamfieldx |= (String.fromCharCode(111,0) == sportsh ? sportsh.length : matchZ.size);
   }
   while (3.99 > (videovarO / 4.21)) {
      videovarO *= anythinki * detailw.length;
      break;
   }
       let long_gw4 = String.fromCharCode(106,95,53,57,95,111,99,99,117,114,114,101,110,99,101,115,0);
         long_gw4 = "3";
      for (let c = 0; c < 2; c++) {
         long_gw4 = `${3 * long_gw4.length}`;
      }
      let stationg = long_gw4 == String.fromCharCode(55,118,118,0);
      do {
          let videojs7 = String.fromCharCode(108,95,51,55,95,117,109,102,97,118,114,0);
          let ewardedi = String.fromCharCode(117,95,49,51,95,105,110,99,114,101,97,115,101,0);
          let iconwechatA = true;
          let y_imager = true;
          let stringE = 4.0;
         long_gw4 += "2";
         videojs7 = `${2 & videojs7.length}`;
         ewardedi = `${((y_imager ? 3 : 5) - 3)}`;
         iconwechatA = iconwechatA && stringE < 26.32;
         stringE -= videojs7.length ^ ewardedi.length;
         if (stationg) {
            break;
         }
      } while (stationg && (!long_gw4.endsWith(`${long_gw4.length}`)));
      libbufferQ = `${listS.length * 2}`;
      libbufferQ = `${3 << (Math.min(3, listS.length))}`;
   let long_mL = listS.length <= 7530904;
   do {
       let componentg: Map<any, any> = new Map([[String.fromCharCode(99,95,54,49,95,116,101,115,116,110,101,116,115,0),false ], [String.fromCharCode(109,97,107,101,119,116,95,122,95,54,51,0),true ], [String.fromCharCode(108,105,115,116,101,110,95,53,95,49,52,0),true ]]);
       let calendarV = true;
       let reducerZ = false;
       let fill1 = true;
       let langC = false;
      if ((2 ^ componentg.size) > 2 || calendarV) {
         componentg.set(`${calendarV}`, (1 * (calendarV ? 4 : 2)));
      }
      listS = `${parseInt(`${videovarO}`) * 3}`;
      if (long_mL) {
         break;
      }
   } while (long_mL && (3 >= (parseInt(`${pangleu}`) - 2) || 2 >= (listS.length % (Math.max(2, 10)))));
      renderI = new Map([[`${matchZ.size}`, matchZ.size]]);
      positionfieldH += "3";
      renderI = new Map([[`${matchZ.size}`, matchZ.size]]);
      pangleu += parseFloat(`${3 << (Math.min(4, orangeclocke.length))}`);
       let trophyz = String.fromCharCode(122,95,56,51,95,116,114,117,116,104,0);
       let aboutO: Array<any> = [120, 611, 827];
       let iconsubssuccessA: Map<any, any> = new Map([[String.fromCharCode(117,108,116,114,97,119,105,100,101,95,120,95,55,51,0),String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,51,95,53,55,0)], [String.fromCharCode(121,95,55,56,95,97,121,117,118,108,101,0),String.fromCharCode(99,95,49,56,95,98,111,117,110,99,101,0)]]);
         iconsubssuccessA.set(`${aboutO.length}`, aboutO.length);
      if (iconsubssuccessA.size > trophyz.length) {
          let statisticsinactivek = String.fromCharCode(99,97,116,99,104,105,110,103,95,97,95,50,57,0);
         trophyz = `${iconsubssuccessA.size}`;
         statisticsinactivek = `${statisticsinactivek.length % (Math.max(1, 7))}`;
      }
          let handlerD = String.fromCharCode(116,95,56,53,95,99,111,112,121,0);
         trophyz += `${(String.fromCharCode(120,0) == trophyz ? aboutO.length : trophyz.length)}`;
         handlerD += `${handlerD.length}`;
          let notification4 = 4.0;
          let libtoba = 1.0;
          let dplusS = 0.0;
         trophyz = `${parseInt(`${libtoba}`) & parseInt(`${notification4}`)}`;
         notification4 *= parseFloat(`${parseInt(`${dplusS}`) / 3}`);
         libtoba *= 1;
       let macauP = false;
       let benefitW = true;
       let thailandU = String.fromCharCode(120,95,50,55,95,105,110,115,116,97,108,108,115,0);
       let clearA = String.fromCharCode(98,117,102,102,101,114,115,95,115,95,56,52,0);
       let recommendationc = String.fromCharCode(109,97,103,121,95,102,95,54,54,0);
      let contextY = aboutO.length <= 6817085;
      do {
         aboutO.push((trophyz.length << (Math.min(1, Math.abs((benefitW ? 3 : 5))))));
         if (contextY) {
            break;
         }
      } while (contextY && (1 >= aboutO.length));
      if ((thailandU.length * 4) < 4) {
         thailandU += `${iconsubssuccessA.size & 3}`;
      }
      renderI = new Map([[positionfieldH, positionfieldH.length << (Math.min(2, Math.abs(anythinki)))]]);
   let componentregistryG = String.fromCharCode(54,100,122,107,107,55,102,0) == positionfieldH;
   do {
       let iconpipexpandV = String.fromCharCode(97,101,115,110,105,95,111,95,49,56,0);
       let defaultteamt = 3.0;
       let updatesH = String.fromCharCode(106,95,54,49,95,105,110,116,112,0);
      let rncoreL = 8044149.0 <= defaultteamt;
      do {
         defaultteamt += updatesH.length << (Math.min(iconpipexpandV.length, 4));
         if (rncoreL) {
            break;
         }
      } while ((4 <= (parseInt(`${defaultteamt}`) + updatesH.length)) && rncoreL);
          let gemfiley = 4.0;
         defaultteamt -= parseInt(`${defaultteamt}`) % 1;
         gemfiley -= parseFloat(`${2 / (Math.max(4, parseInt(`${gemfiley}`)))}`);
          let videobufferloading7 = String.fromCharCode(109,95,51,51,95,117,110,108,111,99,107,0);
          let application_: Map<any, any> = new Map([[String.fromCharCode(111,95,55,48,95,101,110,117,109,101,114,97,116,101,100,0),303], [String.fromCharCode(98,95,53,54,95,115,109,97,99,107,101,114,0),599], [String.fromCharCode(121,95,54,54,95,117,110,103,114,111,117,112,0),178]]);
         defaultteamt += parseInt(`${defaultteamt}`);
         videobufferloading7 += `${application_.size % (Math.max(videobufferloading7.length, 8))}`;
         application_ = new Map([[`${application_.size}`, videobufferloading7.length * application_.size]]);
      while ((5 << (Math.min(4, updatesH.length))) <= 2) {
         defaultteamt += updatesH.length * parseInt(`${defaultteamt}`);
         break;
      }
         updatesH += `${updatesH.length & 1}`;
      if (3 == (parseInt(`${defaultteamt}`) * 1) && (defaultteamt * 5.44) == 1.0) {
         iconpipexpandV = `${iconpipexpandV.length | 1}`;
      }
         defaultteamt *= updatesH.length;
         iconpipexpandV = `${iconpipexpandV.length}`;
          let orange5 = 3.0;
          let assistC = String.fromCharCode(99,114,101,97,116,111,114,115,95,113,95,57,54,0);
          let typings = String.fromCharCode(109,95,57,48,95,102,111,114,109,0);
         iconpipexpandV = `${iconpipexpandV.length}`;
         orange5 *= parseFloat(`${parseInt(`${orange5}`) >> (Math.min(typings.length, 3))}`);
         assistC += `${1 >> (Math.min(2, assistC.length))}`;
         typings += "1";
      positionfieldH += `${parseInt(`${videovarO}`) % (Math.max(1, 5))}`;
      if (componentregistryG) {
         break;
      }
   } while (componentregistryG && (listS == positionfieldH));
    delayControls(!paused);

   for (let n = 0; n < 3; n++) {
      orangeclocke += `${anythinki}`;
   }
   if (!nbatrophyD && (2.92 * pangleu) < 5.36) {
      pangleu -= parseFloat(`${matchZ.size}`);
   }
      listS = `${3 & positionfieldH.length}`;
   while (1 == (2 >> (Math.min(4, Math.abs(renderI.size)))) || (renderI.size >> (Math.min(orangeclocke.length, 5))) == 2) {
       let bgvipxvodm: Map<any, any> = new Map([[String.fromCharCode(114,101,118,105,115,105,111,110,95,116,95,51,52,0),265], [String.fromCharCode(116,95,51,56,95,104,111,117,114,115,0),263], [String.fromCharCode(104,97,115,95,103,95,57,48,0),369]]);
          let recommendation5 = String.fromCharCode(116,105,116,110,116,95,54,95,57,0);
          let long_4xE = 1.0;
         bgvipxvodm.set(`${recommendation5}`, 1);
         recommendation5 = `${parseInt(`${long_4xE}`)}`;
         bgvipxvodm = new Map([[`${bgvipxvodm.size}`, 3]]);
          let langkeye = String.fromCharCode(97,110,110,101,120,98,109,112,95,57,95,52,55,0);
         bgvipxvodm = new Map([[`${bgvipxvodm.size}`, langkeye.length + 2]]);
      orangeclocke += `${parseInt(`${videovarO}`)}`;
      break;
   }
   while (listS.includes(`${matchZ.size}`)) {
      listS += "2";
      break;
   }
      positionfieldH += "1";
   for (let o = 0; o < 2; o++) {
      anythinki /= Math.max(((nbatrophyD ? 2 : 4) / (Math.max(parseInt(`${videovarO}`), 7))), 4);
   }
       let orientationP = String.fromCharCode(104,97,118,101,95,56,95,56,50,0);
          let teamdetailsbgO = String.fromCharCode(106,95,57,57,95,118,97,108,105,100,97,116,101,0);
          let moviesB: Array<any> = [633, 68];
          let libavfilters: Map<any, any> = new Map([[String.fromCharCode(120,95,56,48,95,98,111,108,100,0),29], [String.fromCharCode(104,95,55,56,95,97,103,97,105,110,0),31], [String.fromCharCode(116,95,50,54,95,114,101,115,117,109,101,100,0),284]]);
         orientationP += `${(teamdetailsbgO == String.fromCharCode(113,0) ? teamdetailsbgO.length : moviesB.length)}`;
         moviesB = [3 << (Math.min(5, Math.abs(libavfilters.size)))];
      while (orientationP.length == orientationP.length) {
         orientationP += `${(orientationP == String.fromCharCode(116,0) ? orientationP.length : orientationP.length)}`;
         break;
      }
         orientationP += "1";
      awayteamfieldx >>= Math.min(2, Math.abs(1));
      listS = `${matchZ.size}`;
      matchZ = new Map([[libbufferQ, anythinki]]);
       let placeholderm = 5.0;
       let vertical6: Map<any, any> = new Map([[String.fromCharCode(113,115,111,114,116,95,105,95,54,57,0),String.fromCharCode(116,95,50,51,95,111,112,101,110,103,108,0)], [String.fromCharCode(97,95,50,52,95,116,97,110,103,101,110,116,0),String.fromCharCode(115,101,116,117,112,95,53,95,55,48,0)], [String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,105,95,57,55,0),String.fromCharCode(115,101,118,101,114,105,116,121,95,49,95,53,50,0)]]);
       let lineT = String.fromCharCode(115,108,105,99,101,100,95,107,95,49,53,0);
       let w_centerO = String.fromCharCode(110,95,50,48,95,115,97,108,115,97,0);
      if (lineT.length > 2) {
          let q_playera = 4;
         lineT += `${parseInt(`${placeholderm}`) - w_centerO.length}`;
         q_playera -= 2;
      }
         lineT += `${1 * parseInt(`${placeholderm}`)}`;
      for (let h = 0; h < 2; h++) {
         vertical6.set(`${w_centerO}`, 3);
      }
      while (vertical6.get(`${placeholderm}`) != null) {
          let containerx = 5;
          let chatroombackgroundi = String.fromCharCode(119,95,52,51,95,109,105,115,115,105,110,103,0);
          let sliderr = true;
          let overM = String.fromCharCode(112,97,108,108,101,116,101,95,105,95,49,56,0);
          let largebrightnessM = String.fromCharCode(112,95,53,50,95,116,104,114,111,117,103,104,0);
         placeholderm += lineT.length + parseInt(`${placeholderm}`);
         containerx |= (overM == String.fromCharCode(71,0) ? overM.length : largebrightnessM.length);
         chatroombackgroundi += `${2 >> (Math.min(1, Math.abs(containerx)))}`;
         sliderr = containerx < 64;
         largebrightnessM += `${(String.fromCharCode(103,0) == largebrightnessM ? largebrightnessM.length : containerx)}`;
         break;
      }
       let reminderT = 4.0;
       let nativemoduleK = 4.0;
      if (lineT.length < w_centerO.length) {
         lineT += `${vertical6.size - 3}`;
      }
          let mbnativeadvancedV: Array<any> = [853, 944];
          let combineu = String.fromCharCode(101,120,115,115,95,110,95,49,52,0);
          let predictionZ: Map<any, any> = new Map([[String.fromCharCode(105,95,49,53,95,98,110,108,101,0),14], [String.fromCharCode(118,95,52,49,95,105,110,116,101,114,99,101,112,116,111,114,115,0),861]]);
         lineT += "3";
         mbnativeadvancedV = [2 - combineu.length];
         combineu += "1";
         predictionZ.set(combineu, 2);
      if ((parseInt(`${placeholderm}`) - lineT.length) > 1) {
         lineT = `${vertical6.size}`;
      }
      positionfieldH = `${parseInt(`${videovarO}`) + 1}`;
   while (2.66 >= (1.82 - videovarO)) {
      videovarO += parseInt(`${videovarO}`) * 1;
      break;
   }
   if (2.54 == (pangleu * parseFloat(`${orangeclocke.length}`)) || 5.30 == (2.54 * pangleu)) {
       let graphW = true;
       let arrowrightwithtailV: Map<any, any> = new Map([[String.fromCharCode(98,95,57,54,95,100,101,99,111,114,114,101,108,97,116,101,0),String.fromCharCode(102,95,55,54,95,97,114,105,116,104,0)], [String.fromCharCode(100,111,110,110,97,95,57,95,57,49,0),String.fromCharCode(112,107,99,114,121,112,116,95,113,95,56,57,0)], [String.fromCharCode(115,95,54,50,95,118,101,110,99,0),String.fromCharCode(101,112,104,101,109,101,114,97,108,95,103,95,53,56,0)]]);
       let mergerg = true;
       let subbasketballplayer8 = true;
      for (let f = 0; f < 1; f++) {
         arrowrightwithtailV.set(`${mergerg}`, arrowrightwithtailV.size);
      }
      let rockets = subbasketballplayer8 ? !subbasketballplayer8 : subbasketballplayer8;
      do {
         subbasketballplayer8 = arrowrightwithtailV.get(`${mergerg}`) == null;
         if (rockets) {
            break;
         }
      } while (rockets && (arrowrightwithtailV.size >= 1));
       let showmoreY = String.fromCharCode(101,99,107,101,121,95,116,95,55,56,0);
         subbasketballplayer8 = (((graphW ? showmoreY.length : 65) << (Math.min(showmoreY.length, 4))) == 65);
          let linkS = false;
          let gesturem: Array<any> = [310, 219];
          let inouttargetredp = 5.0;
         graphW = gesturem.includes(subbasketballplayer8);
         linkS = inouttargetredp < 16.71;
         gesturem = [2 / (Math.max(7, parseInt(`${inouttargetredp}`)))];
          let logouserV = String.fromCharCode(101,95,57,48,95,99,111,110,100,101,110,115,97,98,108,101,0);
         mergerg = arrowrightwithtailV.size <= 96;
         logouserV = `${logouserV.length}`;
         mergerg = (((subbasketballplayer8 ? 79 : showmoreY.length) - showmoreY.length) >= 79);
         subbasketballplayer8 = !showmoreY.startsWith(`${subbasketballplayer8}`);
      let defaultlogoy = subbasketballplayer8 ? !subbasketballplayer8 : subbasketballplayer8;
      do {
         subbasketballplayer8 = !graphW;
         if (defaultlogoy) {
            break;
         }
      } while (defaultlogoy && (subbasketballplayer8 && 2 <= showmoreY.length));
          let interstitialh: Array<any> = [965, 541, 177];
          let orangedownarrowC = 5.0;
         graphW = (!mergerg ? !subbasketballplayer8 : !mergerg);
         interstitialh = [interstitialh.length % (Math.max(9, parseInt(`${orangedownarrowC}`)))];
         orangedownarrowC += interstitialh.length;
          let release_n_i = 3.0;
          let selectionu: Map<any, any> = new Map([[String.fromCharCode(118,95,57,54,95,98,117,103,115,0),431], [String.fromCharCode(119,95,51,51,95,101,110,99,97,112,115,117,108,97,116,101,100,0),764], [String.fromCharCode(115,117,105,116,101,115,95,56,95,57,48,0),480]]);
         arrowrightwithtailV = new Map([[`${arrowrightwithtailV.size}`, (3 + (mergerg ? 5 : 4))]]);
         release_n_i -= parseInt(`${release_n_i}`) ^ selectionu.size;
         selectionu.set(`${release_n_i}`, selectionu.size);
         arrowrightwithtailV = new Map([[`${subbasketballplayer8}`, 2]]);
      pangleu *= parseFloat(`${renderI.size}`);
   }
       let viewsa = true;
       let sportsc: Map<any, any> = new Map([[String.fromCharCode(102,95,57,48,95,115,101,116,115,97,114,0),405], [String.fromCharCode(99,121,99,108,101,115,95,116,95,50,0),624], [String.fromCharCode(115,116,111,112,101,100,95,106,95,51,52,0),642]]);
      let iconstary = viewsa ? !viewsa : viewsa;
      do {
          let l_imageI = String.fromCharCode(104,95,54,53,95,99,108,97,122,122,0);
          let result3 = String.fromCharCode(103,117,105,100,101,115,95,50,95,51,56,0);
          let thumbnaill = 2.0;
          let filledo: Array<any> = [String.fromCharCode(112,95,50,57,95,117,116,116,101,114,97,110,99,101,0), String.fromCharCode(102,105,118,101,95,112,95,50,0)];
         viewsa = 95 == result3.length;
         l_imageI += "3";
         result3 += `${1 * l_imageI.length}`;
         thumbnaill /= Math.max(3, l_imageI.length);
         filledo.push((String.fromCharCode(116,0) == l_imageI ? l_imageI.length : parseInt(`${thumbnaill}`)));
         if (iconstary) {
            break;
         }
      } while ((sportsc.size <= 5) && iconstary);
      while (viewsa) {
         viewsa = !viewsa || sportsc.size < 15;
         break;
      }
      for (let z = 0; z < 3; z++) {
         viewsa = (100 < ((viewsa ? 100 : sportsc.size) & sportsc.size));
      }
          let thailandA = 3.0;
          let sheeta = String.fromCharCode(116,105,109,105,110,103,115,95,55,95,56,57,0);
         viewsa = (thailandA / (Math.max(parseFloat(`${sheeta.length}`), 3))) == 13.55;
      while (1 <= sportsc.size) {
         sportsc.set(`${viewsa}`, ((viewsa ? 1 : 4) & sportsc.size));
         break;
      }
       let orangedownarrowS = String.fromCharCode(114,116,112,109,97,112,95,115,95,57,54,0);
      libbufferQ = "2";
      videovarO *= listS.length;
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let yellowH: Map<any, any> = new Map([[String.fromCharCode(116,95,51,49,95,101,97,105,100,99,116,0),true ], [String.fromCharCode(117,95,55,52,95,101,110,99,111,100,101,102,114,97,109,101,0),true ]]);
    let schedulera = String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,97,95,51,57,0);
    let inactiveu: Map<any, any> = new Map([[String.fromCharCode(99,101,105,108,95,114,95,52,51,0),961], [String.fromCharCode(100,101,108,101,116,101,95,54,95,56,52,0),973], [String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,95,116,95,53,51,0),732]]);
    let huaweiY = String.fromCharCode(104,95,51,53,95,115,104,97,114,100,0);
    let default_2z: Map<any, any> = new Map([[String.fromCharCode(114,101,99,101,105,118,105,110,103,95,54,95,49,57,0),String.fromCharCode(112,95,55,54,0)], [String.fromCharCode(119,95,51,51,95,111,102,102,115,101,116,115,0),String.fromCharCode(97,110,97,103,108,121,112,104,95,109,95,51,53,0)], [String.fromCharCode(117,112,108,111,97,100,101,100,95,53,95,57,53,0),String.fromCharCode(98,95,54,49,95,99,111,112,121,114,105,103,104,116,0)]]);
    let specL = 1.0;
    let eventj = String.fromCharCode(104,105,103,104,112,111,114,116,95,105,95,57,55,0);
    let tempnodatar = String.fromCharCode(103,95,54,57,95,114,101,108,111,97,100,101,114,0);
    let mutedy = true;
    let turnM: Map<any, any> = new Map([[String.fromCharCode(114,101,108,102,117,110,99,95,111,95,56,51,0),992], [String.fromCharCode(108,112,99,108,115,112,95,114,95,54,50,0),659]]);
    let diceC = 4.0;
    let episodeP = 1;
   let encryptort = 8575833 >= huaweiY.length;
   do {
      huaweiY = `${default_2z.size * 2}`;
      if (encryptort) {
         break;
      }
   } while (encryptort && ((turnM.size / (Math.max(4, 4))) > 1));
      eventj = `${1 << (Math.min(1, schedulera.length))}`;
   if ((default_2z.size ^ inactiveu.size) == 4 && (4 ^ inactiveu.size) == 1) {
      inactiveu.set(huaweiY, default_2z.size * huaweiY.length);
   }
   if (tempnodatar.length >= schedulera.length) {
      tempnodatar += `${yellowH.size ^ 1}`;
   }
   while ((turnM.size ^ huaweiY.length) == 2) {
      turnM = new Map([[`${turnM.size}`, 2]]);
      break;
   }
   if (yellowH.size > schedulera.length) {
      yellowH.set(`${specL}`, 3 - turnM.size);
   }
   if (tempnodatar.length < huaweiY.length) {
      tempnodatar = `${((mutedy ? 3 : 4) * 3)}`;
   }
      default_2z.set(`${tempnodatar}`, (String.fromCharCode(78,0) == tempnodatar ? inactiveu.size : tempnodatar.length));
   while ((specL / 2.2) < 4.12 && (specL / 2.2) < 4.70) {
      specL /= Math.max(parseFloat(`${2}`), 4);
      break;
   }
   while (!mutedy) {
      mutedy = turnM.size >= 28 && huaweiY.length >= 28;
      break;
   }
      tempnodatar = `${3 % (Math.max(6, eventj.length))}`;
       let modelX = String.fromCharCode(115,113,117,97,114,101,95,116,95,49,53,0);
       let changeb = String.fromCharCode(104,95,55,53,95,114,101,115,116,97,114,116,0);
       let umengS: Map<any, any> = new Map([[String.fromCharCode(99,95,52,95,118,97,114,105,110,116,0),String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,120,95,50,49,0)], [String.fromCharCode(115,101,115,115,105,111,110,105,100,95,104,95,51,0),String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,53,95,51,49,0)]]);
      if ((1 % (Math.max(2, changeb.length))) >= 1) {
         umengS.set(`${changeb}`, changeb.length);
      }
      while (!changeb.startsWith(`${modelX.length}`)) {
          let libhermesN = 4.0;
          let turndown5 = String.fromCharCode(109,95,57,53,95,102,114,105,101,110,100,115,0);
          let controlsf = 2.0;
          let package_dk2 = 4.0;
          let productF: Map<any, any> = new Map([[String.fromCharCode(108,95,52,55,95,115,97,116,105,115,102,105,101,100,0),458], [String.fromCharCode(98,95,51,57,95,98,108,101,101,100,0),770], [String.fromCharCode(118,95,56,55,95,119,97,116,99,104,101,114,115,0),206]]);
         modelX += `${productF.size}`;
         libhermesN -= parseInt(`${controlsf}`) / (Math.max(5, parseInt(`${package_dk2}`)));
         turndown5 += "1";
         controlsf += 2 << (Math.min(2, turndown5.length));
         package_dk2 -= parseFloat(`${turndown5.length}`);
         productF = new Map([[turndown5, 3]]);
         break;
      }
       let math_ = 5.0;
      while ((1 + changeb.length) >= 1 || 1 >= (umengS.size + changeb.length)) {
         umengS = new Map([[`${umengS.size}`, 3]]);
         break;
      }
         math_ += parseFloat(`${changeb.length - 1}`);
         changeb = `${umengS.size % (Math.max(changeb.length, 9))}`;
      while (2.25 > math_) {
          let homeplayerx = 3;
          let clubV = 4.0;
         modelX += "2";
         homeplayerx %= Math.max(1, homeplayerx);
         clubV /= Math.max(1 % (Math.max(7, parseInt(`${clubV}`))), 1);
         break;
      }
      for (let w = 0; w < 3; w++) {
         changeb += `${modelX.length}`;
      }
      let homeinactiveD = changeb == String.fromCharCode(103,103,54,101,0);
      do {
         changeb = `${modelX.length << (Math.min(4, changeb.length))}`;
         if (homeinactiveD) {
            break;
         }
      } while (homeinactiveD && (3 > (umengS.size * 5) && (umengS.size * changeb.length) > 5));
      default_2z.set(schedulera, schedulera.length);
      specL += parseFloat(`${parseInt(`${specL}`)}`);
   let chatbotphotoM = yellowH.size >= 5302538;
   do {
      yellowH.set(`${huaweiY}`, (String.fromCharCode(68,0) == huaweiY ? huaweiY.length : yellowH.size));
      if (chatbotphotoM) {
         break;
      }
   } while (chatbotphotoM && (2 >= (schedulera.length - 1) && (1 - schedulera.length) >= 1));
   let umeng_ = String.fromCharCode(112,95,116,50,98,0) == huaweiY;
   do {
      huaweiY = `${((mutedy ? 1 : 5) % (Math.max(1, 8)))}`;
      if (umeng_) {
         break;
      }
   } while (umeng_ && (2 == turnM.size));
   for (let t = 0; t < 1; t++) {
      eventj = `${2 | parseInt(`${specL}`)}`;
   }
       let owngoalb: Map<any, any> = new Map([[String.fromCharCode(113,105,110,116,102,108,111,97,116,95,97,95,54,50,0),71], [String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,122,95,53,48,0),340], [String.fromCharCode(120,95,51,52,95,115,112,97,99,101,100,0),731]]);
       let gradlec = 1.0;
       let flipperM = 1.0;
      let embed_ = 5961402.0 <= gradlec;
      do {
          let iconrefreshi = 1.0;
         gradlec += parseFloat(`${parseInt(`${gradlec}`) << (Math.min(Math.abs(parseInt(`${iconrefreshi}`)), 5))}`);
         if (embed_) {
            break;
         }
      } while ((2.13 >= (4.4 - gradlec) || 3 >= (2 >> (Math.min(2, Math.abs(owngoalb.size))))) && embed_);
         gradlec *= parseFloat(`${parseInt(`${flipperM}`)}`);
       let debugg: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,101,97,115,101,0),247], [String.fromCharCode(112,105,120,101,108,98,117,102,102,101,114,95,51,95,56,54,0),765], [String.fromCharCode(116,95,50,53,95,108,101,97,102,110,111,100,101,0),758]]);
      let iconcurrentmatchJ = owngoalb.size >= 5463337;
      do {
          let libloggerI = String.fromCharCode(115,95,54,95,109,97,114,115,104,97,108,108,105,110,103,0);
          let target_ = 2;
         owngoalb.set(`${gradlec}`, parseInt(`${gradlec}`) % (Math.max(2, libloggerI.length)));
         libloggerI = `${3 | target_}`;
         target_ <<= Math.min(Math.abs(target_ & 2), 3);
         if (iconcurrentmatchJ) {
            break;
         }
      } while (((1.26 - flipperM) > 5.15 && 2 > (5 / (Math.max(7, owngoalb.size)))) && iconcurrentmatchJ);
      while (5 <= owngoalb.size) {
         flipperM -= parseFloat(`${owngoalb.size}`);
         break;
      }
       let langkeyi = 5.0;
         langkeyi += parseFloat(`${3}`);
      while (debugg.get(`${langkeyi}`) == null) {
         debugg.set(`${langkeyi}`, debugg.size);
         break;
      }
      while (5.13 < (gradlec * 2.5) || 3 < (parseInt(`${gradlec}`) * owngoalb.size)) {
          let libavutil7: Array<any> = [924, 58];
          let loginR = String.fromCharCode(105,110,115,101,114,116,105,110,103,95,101,95,49,54,0);
          let chinasamef = false;
          let reactN: Array<any> = [String.fromCharCode(103,95,50,52,95,99,114,111,112,112,101,100,0), String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,54,95,51,49,0), String.fromCharCode(107,101,121,112,97,116,104,115,95,108,95,52,55,0)];
         gradlec *= parseFloat(`${parseInt(`${gradlec}`) ^ 3}`);
         libavutil7 = [3];
         loginR += `${reactN.length}`;
         chinasamef = 50 < loginR.length && 50 < reactN.length;
         break;
      }
      eventj = `${tempnodatar.length ^ parseInt(`${flipperM}`)}`;
   let iconwechatc = 9139230 <= huaweiY.length;
   do {
      huaweiY = `${default_2z.size}`;
      if (iconwechatc) {
         break;
      }
   } while ((1 < huaweiY.length) && iconwechatc);
   if ((parseInt(`${specL}`) * schedulera.length) > 2 && (2 * schedulera.length) > 5) {
      schedulera += "3";
   }
      diceC /= Math.max((tempnodatar == String.fromCharCode(53,0) ? parseInt(`${diceC}`) : tempnodatar.length), 5);
       let profileframeK: Map<any, any> = new Map([[String.fromCharCode(113,95,56,49,95,112,114,101,100,105,99,116,105,111,110,0),297], [String.fromCharCode(115,95,56,53,95,100,111,99,115,0),274], [String.fromCharCode(101,95,49,53,95,97,101,99,109,0),80]]);
       let episodesh = String.fromCharCode(97,99,116,105,111,110,115,95,107,95,56,57,0);
      if (5 <= (profileframeK.size / 5)) {
          let mimej: Array<any> = [867, 727];
          let orangedownarrow6 = 1.0;
          let kickZ = 1.0;
         profileframeK = new Map([[`${profileframeK.size}`, mimej.length << (Math.min(5, Math.abs(profileframeK.size)))]]);
         mimej.push(parseInt(`${kickZ}`) | 2);
         orangedownarrow6 *= parseInt(`${kickZ}`) % (Math.max(6, parseInt(`${orangedownarrow6}`)));
      }
       let stepB: Array<any> = [282, 389, 751];
       let imagenomoredataT: Array<any> = [898, 389, 832];
      let teamdetailsbgd = stepB.length <= 7343114;
      do {
         stepB.push(1 & imagenomoredataT.length);
         if (teamdetailsbgd) {
            break;
         }
      } while ((4 > (imagenomoredataT.length | stepB.length) && (stepB.length | 4) > 4) && teamdetailsbgd);
      while ((episodesh.length | imagenomoredataT.length) > 2 && (2 | imagenomoredataT.length) > 3) {
         episodesh += `${imagenomoredataT.length - 3}`;
         break;
      }
      let abidetectf = episodesh == String.fromCharCode(117,95,120,51,48,49,113,0);
      do {
         episodesh = `${1 & imagenomoredataT.length}`;
         if (abidetectf) {
            break;
         }
      } while (((4 & episodesh.length) <= 4) && abidetectf);
          let memberQ = false;
          let matchese = String.fromCharCode(112,95,49,49,95,99,111,110,115,116,114,117,99,116,0);
          let videobufferloadingX = 5.0;
         imagenomoredataT = [3];
         memberQ = matchese == String.fromCharCode(51,0);
         matchese += `${matchese.length + 3}`;
         videobufferloadingX /= Math.max(parseFloat(`${matchese.length}`), 1);
      inactiveu = new Map([[`${default_2z.size}`, 3 % (Math.max(8, default_2z.size))]]);
      turnM = new Map([[schedulera, (String.fromCharCode(74,0) == huaweiY ? huaweiY.length : schedulera.length)]]);

    onHandleFullScreen();
  };

  const goBack = () => {
       let sheet1 = 2;
    let imagesy: Map<any, any> = new Map([[String.fromCharCode(114,95,52,48,95,115,112,97,119,110,97,98,108,101,0),643], [String.fromCharCode(118,95,53,56,95,114,101,99,117,114,115,105,118,101,0),303]]);
    let q_managerI: Map<any, any> = new Map([[String.fromCharCode(108,95,50,53,95,110,97,116,105,118,101,108,121,0),852], [String.fromCharCode(114,95,52,52,95,115,99,97,108,105,110,103,0),29], [String.fromCharCode(112,95,56,48,95,114,101,100,111,0),933]]);
    let detailsa = String.fromCharCode(111,95,54,52,95,113,99,111,109,0);
    let unselectedm = 4;
    let completej = String.fromCharCode(97,114,99,95,114,95,50,0);
    let iconnewsshareo = true;
    let bangy = String.fromCharCode(114,95,55,52,95,105,110,99,114,109,101,114,103,101,0);
   if (4 == (3 % (Math.max(1, detailsa.length)))) {
      detailsa = `${completej.length / 3}`;
   }
       let y_image8 = false;
         y_image8 = (y_image8 ? !y_image8 : y_image8);
      if (!y_image8) {
         y_image8 = (y_image8 ? !y_image8 : !y_image8);
      }
      while (!y_image8 && y_image8) {
          let navigationm = String.fromCharCode(100,114,105,102,116,105,110,103,95,114,95,52,56,0);
          let ccdfbdabcabbbedbY = String.fromCharCode(120,95,49,48,48,95,107,101,121,115,116,114,101,97,109,0);
          let tnewsshareV = 4;
         y_image8 = navigationm.endsWith(`${tnewsshareV}`);
         navigationm = `${1 % (Math.max(9, ccdfbdabcabbbedbY.length))}`;
         ccdfbdabcabbbedbY += `${ccdfbdabcabbbedbY.length * 3}`;
         break;
      }
      completej += `${detailsa.length}`;
       let smallsoundJ: Array<any> = [String.fromCharCode(108,105,98,115,104,105,110,101,95,115,95,52,54,0), String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,95,48,95,53,49,0)];
       let sider = String.fromCharCode(102,95,49,54,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0);
      let guideF = 5505748 >= smallsoundJ.length;
      do {
          let emojiheartz: Array<any> = [415, 574];
         smallsoundJ = [smallsoundJ.length];
         emojiheartz.push(emojiheartz.length);
         if (guideF) {
            break;
         }
      } while (guideF && (2 > sider.length));
      for (let g = 0; g < 2; g++) {
          let libfollyg = 5;
          let shielddone0: Array<any> = [204, 422];
          let audiencea = true;
          let malaysiaQ = 1.0;
         sider += "1";
         libfollyg += ((audiencea ? 5 : 3) + libfollyg);
         shielddone0.push(3 / (Math.max(1, shielddone0.length)));
         malaysiaQ -= parseInt(`${malaysiaQ}`) - libfollyg;
      }
         sider = `${smallsoundJ.length}`;
      if (2 == (sider.length >> (Math.min(5, smallsoundJ.length)))) {
          let gradleC: Array<any> = [329, 470];
          let textx = 0;
         sider = `${sider.length / 1}`;
         gradleC = [gradleC.length];
         textx <<= Math.min(5, Math.abs(3 + textx));
      }
      for (let b = 0; b < 3; b++) {
         sider = `${smallsoundJ.length << (Math.min(Math.abs(1), 5))}`;
      }
       let basketballdetailsbgs = String.fromCharCode(99,121,97,110,95,104,95,56,52,0);
      q_managerI = new Map([[detailsa, unselectedm * detailsa.length]]);
   if (sheet1 > completej.length) {
      completej += `${imagesy.size}`;
   }
      unselectedm <<= Math.min(5, Math.abs(sheet1));
      unselectedm /= Math.max(3, 5);
   if (iconnewsshareo) {
       let rncore4: Array<any> = [822, 166, 966];
       let mbnativeadvancedF: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,95,107,95,49,51,0),943], [String.fromCharCode(110,117,109,95,119,95,57,51,0),947], [String.fromCharCode(122,95,53,95,119,114,105,116,116,101,110,0),986]]);
         rncore4 = [2];
      while (3 >= (2 * mbnativeadvancedF.size) || (2 * mbnativeadvancedF.size) >= 1) {
         rncore4.push(rncore4.length);
         break;
      }
         mbnativeadvancedF = new Map([[`${mbnativeadvancedF.size}`, rncore4.length | 1]]);
         rncore4.push(rncore4.length | 3);
         mbnativeadvancedF = new Map([[`${mbnativeadvancedF.size}`, mbnativeadvancedF.size]]);
      if (Array.from(mbnativeadvancedF.values()).includes(rncore4.length)) {
         rncore4 = [1 ^ mbnativeadvancedF.size];
      }
      completej += `${completej.length}`;
   }
   if ((1 & unselectedm) <= 3) {
      sheet1 |= detailsa.length << (Math.min(1, Math.abs(imagesy.size)));
   }
   let adultZ = iconnewsshareo ? !iconnewsshareo : iconnewsshareo;
   do {
      iconnewsshareo = detailsa.endsWith(`${unselectedm}`);
      if (adultZ) {
         break;
      }
   } while ((!iconnewsshareo) && adultZ);
      sheet1 %= Math.max(4, unselectedm);
      iconnewsshareo = bangy.length <= 89;

    delayControls();

       let internet0 = String.fromCharCode(108,95,57,95,115,116,100,101,114,114,0);
       let hooks0: Array<any> = [688, 949];
       let reddownarrowV = 3.0;
      while (4 <= (hooks0.length | 2)) {
         hooks0.push(3 - internet0.length);
         break;
      }
      let eventn = hooks0.length <= 8406019;
      do {
          let frame_7dV = String.fromCharCode(107,95,54,48,95,119,97,110,116,115,0);
          let awayteamfieldg = true;
          let anythinkn = String.fromCharCode(100,101,110,105,97,108,95,51,95,52,52,0);
         hooks0.push(hooks0.length >> (Math.min(Math.abs(1), 5)));
         frame_7dV = "2";
         awayteamfieldg = !awayteamfieldg;
         anythinkn += `${((awayteamfieldg ? 2 : 5) - 1)}`;
         if (eventn) {
            break;
         }
      } while (eventn && (3 > (3 << (Math.min(3, internet0.length))) || 3 > (internet0.length << (Math.min(4, hooks0.length)))));
          let launchF = 2.0;
         hooks0 = [(internet0 == String.fromCharCode(118,0) ? internet0.length : parseInt(`${reddownarrowV}`))];
         launchF += parseInt(`${launchF}`);
      let graphicsv = reddownarrowV <= 5314696.0;
      do {
         reddownarrowV *= 3;
         if (graphicsv) {
            break;
         }
      } while ((!hooks0.includes(reddownarrowV)) && graphicsv);
          let libapminsightah = 0;
          let submitR = 0;
         hooks0 = [3];
         libapminsightah -= submitR + libapminsightah;
         submitR ^= libapminsightah;
          let leftq: Map<any, any> = new Map([[String.fromCharCode(116,97,103,103,101,114,95,49,95,56,54,0),430], [String.fromCharCode(101,110,100,105,97,110,95,104,95,54,50,0),213]]);
         reddownarrowV /= Math.max((String.fromCharCode(54,0) == internet0 ? hooks0.length : internet0.length), 5);
         leftq = new Map([[`${leftq.size}`, leftq.size]]);
          let sideE = 1.0;
          let playercommonX = 2.0;
          let basketballiconH = 0.0;
         hooks0.push(parseInt(`${playercommonX}`) - internet0.length);
         sideE -= 2;
         playercommonX -= parseFloat(`${1}`);
         basketballiconH += parseFloat(`${parseInt(`${sideE}`) >> (Math.min(1, Math.abs(3)))}`);
      if (internet0.length >= hooks0.length) {
         hooks0.push(parseInt(`${reddownarrowV}`) - internet0.length);
      }
         hooks0 = [internet0.length ^ hooks0.length];
      q_managerI = new Map([[detailsa, 2 >> (Math.min(5, detailsa.length))]]);
       let telegram6 = 2.0;
       let defaultpredictionprofileX = true;
       let largebrightnessD = String.fromCharCode(115,104,111,119,95,48,95,57,52,0);
       let resendm = String.fromCharCode(97,115,115,105,103,110,101,100,95,115,95,50,51,0);
         telegram6 += largebrightnessD.length | 2;
      if (!resendm.includes(`${largebrightnessD.length}`)) {
          let refreshA = 5.0;
          let alertM = 2.0;
          let mbnativeadvancedM = String.fromCharCode(108,95,50,52,95,115,111,110,105,99,0);
          let basketballicond: Array<any> = [221, 347];
          let spinnerT = String.fromCharCode(103,95,49,50,0);
         largebrightnessD += `${1 >> (Math.min(1, mbnativeadvancedM.length))}`;
         refreshA += parseFloat(`${3 & parseInt(`${alertM}`)}`);
         alertM /= Math.max(2, parseFloat(`${2 & basketballicond.length}`));
         mbnativeadvancedM = `${parseInt(`${alertM}`)}`;
         basketballicond.push(parseInt(`${alertM}`) & 1);
         spinnerT = `${basketballicond.length}`;
      }
         defaultpredictionprofileX = 73.32 < telegram6;
         defaultpredictionprofileX = !defaultpredictionprofileX;
      for (let m = 0; m < 2; m++) {
         largebrightnessD = `${2 >> (Math.min(Math.abs(parseInt(`${telegram6}`)), 4))}`;
      }
      detailsa = `${((defaultpredictionprofileX ? 3 : 1))}`;
      sheet1 &= 3;
   if (!bangy.endsWith(`${q_managerI.size}`)) {
      q_managerI.set(`${unselectedm}`, unselectedm - detailsa.length);
   }
   if (3 <= (sheet1 * detailsa.length)) {
      detailsa = `${bangy.length}`;
   }
   for (let t = 0; t < 1; t++) {
      detailsa += `${unselectedm}`;
   }
   for (let a = 0; a < 3; a++) {
      completej += `${detailsa.length >> (Math.min(Math.abs(2), 3))}`;
   }
   let gestureB = unselectedm >= 7918327;
   do {
      unselectedm >>= Math.min(Math.abs(3 % (Math.max(1, detailsa.length))), 1);
      if (gestureB) {
         break;
      }
   } while (gestureB && (3 <= (completej.length ^ 3) || (unselectedm ^ completej.length) <= 3));
       let pausex: Array<any> = [321, 76, 597];
      let mbnativeo = pausex.length >= 8145062;
      do {
         pausex = [3 & pausex.length];
         if (mbnativeo) {
            break;
         }
      } while ((!pausex.includes(pausex.length)) && mbnativeo);
         pausex = [pausex.length ^ pausex.length];
         pausex = [2 & pausex.length];
      iconnewsshareo = String.fromCharCode(100,0) == completej;
   for (let w = 0; w < 3; w++) {
       let configureN: Array<any> = [34, 355, 494];
       let flipperC = String.fromCharCode(116,111,112,105,99,95,100,95,52,57,0);
       let iconqqL: Map<any, any> = new Map([[String.fromCharCode(119,95,51,53,95,109,97,114,107,105,110,103,115,0),String.fromCharCode(112,95,49,51,95,97,110,111,110,121,109,111,117,115,0)], [String.fromCharCode(98,97,99,107,112,116,114,95,48,95,53,0),String.fromCharCode(108,95,50,50,95,97,118,118,115,0)]]);
       let scorepopsoundJ = String.fromCharCode(116,95,51,48,95,115,117,98,116,114,101,101,0);
          let contextt: Map<any, any> = new Map([[String.fromCharCode(114,95,56,56,95,116,104,101,109,101,115,0),false ], [String.fromCharCode(104,95,52,54,95,121,111,110,108,121,120,0),false ], [String.fromCharCode(98,117,114,115,116,95,119,95,50,52,0),false ]]);
         flipperC = `${iconqqL.size}`;
         contextt.set(`${contextt.size}`, contextt.size / (Math.max(8, contextt.size)));
       let subinF = 0.0;
       let resultv = false;
       let defaultprofilepicg = false;
      let libreactperfloggerjniT = resultv ? !resultv : resultv;
      do {
         resultv = !scorepopsoundJ.startsWith(`${resultv}`);
         if (libreactperfloggerjniT) {
            break;
         }
      } while (libreactperfloggerjniT && (!defaultprofilepicg));
         iconqqL.set(`${resultv}`, (String.fromCharCode(121,0) == scorepopsoundJ ? scorepopsoundJ.length : (resultv ? 4 : 2)));
         flipperC = "1";
         configureN = [flipperC.length + 1];
         resultv = !flipperC.startsWith(`${subinF}`);
      while (subinF <= 1.85 || 3.63 <= (subinF + 1.85)) {
         subinF -= 3 * flipperC.length;
         break;
      }
         subinF += 2;
      while (!scorepopsoundJ.endsWith(`${resultv}`)) {
         scorepopsoundJ += `${(parseInt(`${subinF}`) - (defaultprofilepicg ? 5 : 1))}`;
         break;
      }
         flipperC += `${(flipperC == String.fromCharCode(118,0) ? configureN.length : flipperC.length)}`;
      sheet1 /= Math.max(3, 5);
   }
   let inviteA = iconnewsshareo ? !iconnewsshareo : iconnewsshareo;
   do {
      iconnewsshareo = bangy.length > 88;
      if (inviteA) {
         break;
      }
   } while (inviteA && (iconnewsshareo || 5 >= detailsa.length));
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
       let zoomR: Array<any> = [157, 373];
    let cornershootX = 0;
    let notificationfillemptyT = String.fromCharCode(116,95,50,56,95,99,111,108,115,0);
    let basketballawayteamL = String.fromCharCode(98,97,110,100,95,56,95,55,56,0);
    let animationsa: Array<any> = [603, 102];
    let umengF = 1;
    let nalyticsk = 1.0;
    let defaultpredictionprofileH = false;
    let static_nk5 = 4.0;
    let libffmpegkite = false;
    let yingr = true;
    let ballj = String.fromCharCode(98,101,99,97,117,115,101,95,104,95,51,56,0);
    let unimplementedviewe = 4;
    let positionfieldH = 3.0;
       let statsnomoredatan = 5;
       let rncorey: Map<any, any> = new Map([[String.fromCharCode(105,95,57,52,95,100,114,101,102,0),642], [String.fromCharCode(116,117,108,115,105,95,100,95,55,51,0),605], [String.fromCharCode(112,95,53,49,95,115,121,115,114,97,110,100,0),900]]);
       let statsnomoredataf = String.fromCharCode(115,117,101,108,111,95,111,95,50,57,0);
         rncorey.set(statsnomoredataf, statsnomoredataf.length << (Math.min(Math.abs(3), 5)));
         statsnomoredatan %= Math.max(2 * rncorey.size, 1);
      let reactnativeultimatelistviewk = statsnomoredatan <= 7634920;
      do {
         statsnomoredatan -= statsnomoredataf.length | rncorey.size;
         if (reactnativeultimatelistviewk) {
            break;
         }
      } while ((statsnomoredatan >= statsnomoredataf.length) && reactnativeultimatelistviewk);
         rncorey.set(`${statsnomoredatan}`, statsnomoredatan);
      if (rncorey.get(`${statsnomoredatan}`) == null) {
         rncorey = new Map([[`${rncorey.size}`, statsnomoredatan]]);
      }
      for (let z = 0; z < 1; z++) {
         rncorey.set(`${statsnomoredataf}`, statsnomoredataf.length);
      }
      for (let i = 0; i < 1; i++) {
         rncorey = new Map([[`${rncorey.size}`, statsnomoredatan]]);
      }
      if (statsnomoredataf.length < rncorey.size) {
          let whitevideoliveJ = String.fromCharCode(115,104,97,100,101,95,115,95,49,49,0);
          let y_unlockf = 2.0;
         statsnomoredataf = `${parseInt(`${y_unlockf}`) - 2}`;
         whitevideoliveJ = "3";
         y_unlockf -= 3;
      }
          let save0 = String.fromCharCode(115,105,100,101,95,104,95,54,53,0);
         statsnomoredataf += `${statsnomoredataf.length}`;
         save0 = "1";
      zoomR = [1 | parseInt(`${static_nk5}`)];
   for (let r = 0; r < 2; r++) {
       let shirt0 = 4;
       let circlee = String.fromCharCode(106,101,114,114,111,114,95,99,95,55,0);
       let homeplayerE: Array<any> = [669, 184, 704];
          let giflivestreamingB = 2;
         circlee = "2";
         giflivestreamingB &= giflivestreamingB;
      let eyeopen_ = 5918412 >= shirt0;
      do {
         shirt0 >>= Math.min(2, circlee.length);
         if (eyeopen_) {
            break;
         }
      } while (eyeopen_ && (!circlee.endsWith(`${shirt0}`)));
          let bingC: Map<any, any> = new Map([[String.fromCharCode(113,95,49,55,95,100,105,99,116,0),916], [String.fromCharCode(115,105,100,101,115,95,107,95,51,54,0),899]]);
         shirt0 *= 1 << (Math.min(5, Math.abs(bingC.size)));
      while (3 >= (shirt0 % (Math.max(5, homeplayerE.length))) || 4 >= (3 % (Math.max(7, shirt0)))) {
         shirt0 -= 3;
         break;
      }
         shirt0 <<= Math.min(Math.abs(circlee.length >> (Math.min(1, homeplayerE.length))), 2);
      while (shirt0 >= 5) {
          let policy4 = String.fromCharCode(103,95,52,53,95,114,105,99,101,0);
          let telemetrys = String.fromCharCode(99,111,115,112,105,95,116,95,51,52,0);
          let rncore5: Map<any, any> = new Map([[String.fromCharCode(98,95,57,49,95,98,117,105,108,100,101,114,0),775], [String.fromCharCode(101,110,99,111,100,105,110,103,95,52,95,54,53,0),940]]);
         homeplayerE = [circlee.length];
         policy4 += `${policy4.length}`;
         telemetrys = `${telemetrys.length - 1}`;
         rncore5.set(telemetrys, rncore5.size);
         break;
      }
         circlee += `${shirt0}`;
      let frame_ol = 9235840 <= circlee.length;
      do {
          let blacku: Array<any> = [String.fromCharCode(111,112,116,105,109,105,115,109,95,116,95,51,50,0), String.fromCharCode(112,114,111,102,114,101,115,115,95,118,95,54,52,0)];
          let window__j = 1;
          let defaultroombgk = 1.0;
          let filli: Array<any> = [705, 62, 431];
         circlee = `${parseInt(`${defaultroombgk}`) ^ 1}`;
         blacku.push(filli.length);
         window__j |= blacku.length / (Math.max(2, window__j));
         defaultroombgk -= 3;
         filli.push(filli.length);
         if (frame_ol) {
            break;
         }
      } while ((3 >= (5 & shirt0) || 5 >= (shirt0 & circlee.length)) && frame_ol);
      let teamB = 6312521 >= homeplayerE.length;
      do {
         homeplayerE = [2 / (Math.max(6, shirt0))];
         if (teamB) {
            break;
         }
      } while (((5 - circlee.length) > 4 && (5 - circlee.length) > 2) && teamB);
      cornershootX |= zoomR.length << (Math.min(1, Math.abs(cornershootX)));
   }
   for (let v = 0; v < 1; v++) {
      static_nk5 /= Math.max(1 & basketballawayteamL.length, 2);
   }
   let brightnessz = 7882306.0 <= nalyticsk;
   do {
      nalyticsk += parseFloat(`${3 << (Math.min(4, Math.abs(cornershootX)))}`);
      if (brightnessz) {
         break;
      }
   } while ((basketballawayteamL.endsWith(`${nalyticsk}`)) && brightnessz);
      zoomR = [animationsa.length];
       let giftbuttonf = 0;
         giftbuttonf <<= Math.min(Math.abs(giftbuttonf), 3);
      if (1 <= giftbuttonf) {
         giftbuttonf >>= Math.min(Math.abs(giftbuttonf), 2);
      }
      let notificationfilledn = 6793844 <= giftbuttonf;
      do {
          let mbnativex = String.fromCharCode(99,97,110,111,110,105,99,97,108,95,54,95,57,51,0);
          let bridgev: Map<any, any> = new Map([[String.fromCharCode(112,95,55,55,0),282], [String.fromCharCode(120,95,51,48,95,98,121,116,101,115,104,117,109,97,110,0),314], [String.fromCharCode(103,95,49,50,95,115,112,105,108,108,115,105,122,101,0),380]]);
         giftbuttonf ^= giftbuttonf;
         mbnativex = `${mbnativex.length}`;
         bridgev = new Map([[`${bridgev.size}`, (String.fromCharCode(104,0) == mbnativex ? bridgev.size : mbnativex.length)]]);
         if (notificationfilledn) {
            break;
         }
      } while (notificationfilledn && (4 < giftbuttonf));
      static_nk5 += ((libffmpegkite ? 3 : 3) << (Math.min(Math.abs(parseInt(`${static_nk5}`)), 1)));
      cornershootX -= ((defaultpredictionprofileH ? 2 : 1));
       let serviceD = 0;
       let phoneJ: Map<any, any> = new Map([[String.fromCharCode(104,121,98,114,105,100,95,116,95,57,0),557], [String.fromCharCode(104,95,57,48,95,109,111,110,111,115,112,97,99,101,0),623], [String.fromCharCode(99,109,97,115,107,95,56,95,48,0),831]]);
       let incidentZ = String.fromCharCode(115,95,53,95,116,114,97,99,107,101,100,0);
      if (5 < (5 * incidentZ.length) && 3 < (serviceD * 5)) {
         incidentZ = `${phoneJ.size | 3}`;
      }
          let sourcez = String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,118,95,50,55,0);
          let homeactiveu: Array<any> = [141, 985];
          let const_4U = String.fromCharCode(107,95,50,54,95,112,97,108,98,97,114,115,0);
         serviceD >>= Math.min(incidentZ.length, 3);
         sourcez = `${(const_4U == String.fromCharCode(57,0) ? const_4U.length : homeactiveu.length)}`;
         homeactiveu.push(1 & const_4U.length);
      for (let i = 0; i < 1; i++) {
         incidentZ += `${2 >> (Math.min(5, Math.abs(phoneJ.size)))}`;
      }
          let statsT = true;
          let largesoundV = 0.0;
          let related9 = true;
         phoneJ.set(`${incidentZ}`, 1 << (Math.min(1, incidentZ.length)));
         statsT = largesoundV >= 49.79 || related9;
         largesoundV /= Math.max(5, ((statsT ? 5 : 4) ^ parseInt(`${largesoundV}`)));
         related9 = 13.99 == largesoundV;
      let imageactionlive3 = phoneJ.size >= 6180912;
      do {
          let textv: Array<any> = [534, 539];
          let register_69 = String.fromCharCode(108,95,57,55,95,115,101,99,116,111,114,0);
         phoneJ = new Map([[`${phoneJ.size}`, 2]]);
         textv = [2 / (Math.max(1, textv.length))];
         register_69 += "2";
         if (imageactionlive3) {
            break;
         }
      } while ((phoneJ.size < 4) && imageactionlive3);
      if (Array.from(phoneJ.keys()).includes(`${serviceD}`)) {
          let forward1 = 5;
          let gmailN = String.fromCharCode(105,115,110,97,110,95,108,95,56,57,0);
          let private_vW = String.fromCharCode(118,95,50,49,95,100,117,109,112,105,110,103,0);
          let dark6 = 5.0;
         phoneJ.set(private_vW, private_vW.length);
         forward1 += 3;
         gmailN += `${(gmailN == String.fromCharCode(70,0) ? gmailN.length : parseInt(`${dark6}`))}`;
         dark6 *= gmailN.length + parseInt(`${dark6}`);
      }
      if (5 > (2 * incidentZ.length) && (2 * phoneJ.size) > 1) {
          let friendsD = String.fromCharCode(105,100,101,116,95,122,95,56,51,0);
         incidentZ = `${incidentZ.length << (Math.min(1, Math.abs(phoneJ.size)))}`;
         friendsD += `${(friendsD == String.fromCharCode(76,0) ? friendsD.length : friendsD.length)}`;
      }
       let libtobV = String.fromCharCode(107,95,55,49,95,97,117,116,111,105,110,99,114,101,109,101,110,116,0);
         phoneJ = new Map([[incidentZ, libtobV.length | incidentZ.length]]);
      basketballawayteamL += `${parseInt(`${nalyticsk}`) >> (Math.min(3, Math.abs(3)))}`;
      libffmpegkite = 85 == zoomR.length;
   if (!defaultpredictionprofileH && 5 > (5 ^ cornershootX)) {
      cornershootX &= 3 + parseInt(`${static_nk5}`);
   }
   let basketballdetailsbgE = nalyticsk >= 5108329.0;
   do {
       let iconbellactiveH: Map<any, any> = new Map([[String.fromCharCode(100,117,109,109,121,95,51,95,50,48,0),133], [String.fromCharCode(120,95,49,55,95,109,111,100,101,0),661], [String.fromCharCode(114,97,112,112,101,114,95,100,95,53,52,0),121]]);
       let tooltipsT: Map<any, any> = new Map([[String.fromCharCode(112,114,102,95,119,95,52,55,0),String.fromCharCode(108,111,117,100,110,101,115,115,95,53,95,57,52,0)], [String.fromCharCode(112,105,100,95,97,95,56,52,0),String.fromCharCode(105,110,116,101,114,114,97,99,116,105,118,101,95,120,95,56,49,0)], [String.fromCharCode(119,95,55,52,95,111,112,116,115,0),String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,48,95,50,55,0)]]);
       let dangerU = true;
       let telemetryl = 1;
      while (!dangerU) {
          let shielddonen = true;
          let floatingS = 2.0;
         dangerU = !dangerU;
         shielddonen = !shielddonen || floatingS >= 32.41;
         floatingS += parseFloat(`${parseInt(`${floatingS}`) - 2}`);
         break;
      }
      let nativen = dangerU ? !dangerU : dangerU;
      do {
          let libjsip = String.fromCharCode(122,95,49,53,95,100,107,101,121,0);
          let textlayoutmanagerL = String.fromCharCode(110,95,57,56,95,120,120,99,104,0);
          let libcxxcomponentsb = String.fromCharCode(116,97,114,103,101,116,115,95,114,95,55,54,0);
         dangerU = libcxxcomponentsb.length <= textlayoutmanagerL.length;
         libjsip += `${2 & libjsip.length}`;
         textlayoutmanagerL = `${(libjsip == String.fromCharCode(56,0) ? libjsip.length : libjsip.length)}`;
         if (nativen) {
            break;
         }
      } while (nativen && ((2 ^ iconbellactiveH.size) == 1));
         tooltipsT = new Map([[`${dangerU}`, 3 % (Math.max(telemetryl, 10))]]);
         telemetryl <<= Math.min(5, Math.abs(iconbellactiveH.size));
      let release_w4 = 6404007 <= iconbellactiveH.size;
      do {
         iconbellactiveH.set(`${dangerU}`, ((dangerU ? 5 : 3) ^ 1));
         if (release_w4) {
            break;
         }
      } while ((telemetryl <= iconbellactiveH.size) && release_w4);
          let mailu: Array<any> = [818, 315, 273];
          let defaultbasketballbgf = 2.0;
          let greenn: Array<any> = [476, 134];
         telemetryl ^= telemetryl;
         mailu = [greenn.length | parseInt(`${defaultbasketballbgf}`)];
         defaultbasketballbgf -= mailu.length;
         greenn = [1 << (Math.min(3, mailu.length))];
      let homeactiveG = 7837387 >= iconbellactiveH.size;
      do {
         iconbellactiveH.set(`${tooltipsT.size}`, tooltipsT.size);
         if (homeactiveG) {
            break;
         }
      } while ((Array.from(iconbellactiveH.keys()).includes(`${telemetryl}`)) && homeactiveG);
         tooltipsT = new Map([[`${iconbellactiveH.size}`, 1]]);
         iconbellactiveH.set(`${dangerU}`, (telemetryl + (dangerU ? 5 : 1)));
         telemetryl &= (tooltipsT.size % (Math.max(3, (dangerU ? 5 : 1))));
      let mutedA = telemetryl >= 6760488;
      do {
         telemetryl <<= Math.min(Math.abs(1), 2);
         if (mutedA) {
            break;
         }
      } while (mutedA && (dangerU));
         telemetryl ^= tooltipsT.size;
      nalyticsk += parseFloat(`${1 + tooltipsT.size}`);
      if (basketballdetailsbgE) {
         break;
      }
   } while ((2.48 <= (4.68 - nalyticsk)) && basketballdetailsbgE);
      zoomR = [cornershootX];
   while ((cornershootX & umengF) > 5) {
      umengF ^= notificationfillemptyT.length / 1;
      break;
   }
   for (let s = 0; s < 3; s++) {
      cornershootX &= 1;
   }
   let foundD = libffmpegkite ? !libffmpegkite : libffmpegkite;
   do {
      libffmpegkite = (!libffmpegkite ? !defaultpredictionprofileH : !libffmpegkite);
      if (foundD) {
         break;
      }
   } while ((!libffmpegkite) && foundD);

    setShowControls(!showControls);

   if ((umengF + parseInt(`${static_nk5}`)) == 1 && 1 == (umengF + parseInt(`${static_nk5}`))) {
      umengF <<= Math.min(Math.abs(3 & notificationfillemptyT.length), 3);
   }
      animationsa.push(basketballawayteamL.length);
      animationsa.push(umengF + cornershootX);
       let injuryz = 5;
       let cancelL: Array<any> = [108, 512];
       let reactnativejso = 0.0;
          let shielddone_ = String.fromCharCode(115,116,100,108,105,98,95,122,95,57,52,0);
          let fastforwardc = 3;
          let finit_4I = String.fromCharCode(98,95,52,49,95,109,105,99,114,111,100,118,100,0);
         reactnativejso *= 2;
         shielddone_ += `${finit_4I.length}`;
         fastforwardc <<= Math.min(2, Math.abs(2 << (Math.min(5, shielddone_.length))));
         finit_4I = `${(shielddone_ == String.fromCharCode(99,0) ? fastforwardc : shielddone_.length)}`;
      for (let y = 0; y < 2; y++) {
         injuryz >>= Math.min(Math.abs(2), 4);
      }
      while (!cancelL.includes(reactnativejso)) {
         cancelL = [cancelL.length];
         break;
      }
          let other8 = 1.0;
         injuryz ^= cancelL.length;
         other8 /= Math.max(5, parseInt(`${other8}`));
       let yellowscoreballc = String.fromCharCode(115,95,57,53,95,100,117,112,108,105,99,97,116,111,114,0);
       let libswresample0 = String.fromCharCode(105,110,116,114,97,120,100,115,112,95,110,95,57,52,0);
       let episodeM = String.fromCharCode(108,95,54,52,95,116,104,114,101,97,100,112,111,111,108,0);
       let j_lockX = String.fromCharCode(105,95,57,50,95,109,117,108,116,105,112,108,105,101,100,0);
      if (2 >= j_lockX.length) {
         episodeM = `${libswresample0.length}`;
      }
      if ((5 - cancelL.length) >= 3 || 5 >= (cancelL.length - 5)) {
         cancelL = [j_lockX.length << (Math.min(Math.abs(1), 2))];
      }
         injuryz -= cancelL.length;
      static_nk5 *= notificationfillemptyT.length;
       let iconpointscorej = String.fromCharCode(116,114,105,97,110,103,108,101,95,104,95,50,52,0);
      let loginT = 8720437 <= iconpointscorej.length;
      do {
          let scorepopsoundK = String.fromCharCode(121,95,51,53,95,115,99,97,110,116,97,98,108,101,115,0);
          let whistleG = String.fromCharCode(101,95,49,56,95,109,118,99,111,110,116,101,120,116,115,0);
         iconpointscorej += `${(String.fromCharCode(80,0) == scorepopsoundK ? whistleG.length : scorepopsoundK.length)}`;
         if (loginT) {
            break;
         }
      } while ((iconpointscorej.length == 2) && loginT);
         iconpointscorej = "1";
         iconpointscorej = `${iconpointscorej.length | iconpointscorej.length}`;
      defaultpredictionprofileH = iconpointscorej == String.fromCharCode(67,0);
      animationsa = [2];
      nalyticsk += parseFloat(`${1 & cornershootX}`);
   let statisticss = nalyticsk <= 7259080.0;
   do {
       let placeholdere = String.fromCharCode(118,95,52,0);
      while (placeholdere.length < 2) {
          let iconclose8 = 2.0;
         placeholdere = `${placeholdere.length % (Math.max(3, parseInt(`${iconclose8}`)))}`;
         break;
      }
          let roundY = String.fromCharCode(106,95,49,48,48,95,116,114,97,110,115,108,97,116,105,111,110,0);
          let cornershoote = String.fromCharCode(122,95,55,95,104,99,109,99,0);
          let closel = 2.0;
         placeholdere = `${parseInt(`${closel}`)}`;
         roundY += `${2 ^ cornershoote.length}`;
         cornershoote = `${2 & cornershoote.length}`;
         closel += cornershoote.length;
         placeholdere = `${placeholdere.length}`;
      nalyticsk /= Math.max(3, parseFloat(`${cornershootX * basketballawayteamL.length}`));
      if (statisticss) {
         break;
      }
   } while (statisticss && ((static_nk5 + 1) <= 4.5));
      animationsa = [parseInt(`${static_nk5}`) - 3];
   let typingloading1 = libffmpegkite ? !libffmpegkite : libffmpegkite;
   do {
      libffmpegkite = notificationfillemptyT.length >= 67;
      if (typingloading1) {
         break;
      }
   } while (typingloading1 && (3 == umengF));
   while ((static_nk5 * 2.86) >= 4.7 || 1 >= (3 >> (Math.min(2, Math.abs(cornershootX))))) {
      cornershootX %= Math.max(1, ((libffmpegkite ? 1 : 5)));
      break;
   }
   let malaysia9 = 9289515 >= cornershootX;
   do {
       let sellh = 1.0;
       let smallbrightnessY = 0;
       let terms5 = String.fromCharCode(115,95,55,49,95,98,111,111,107,109,97,114,107,115,0);
      while ((sellh + 5.94) <= 1.4 || 4 <= (smallbrightnessY + parseInt(`${sellh}`))) {
         smallbrightnessY >>= Math.min(Math.abs(3), 4);
         break;
      }
         smallbrightnessY >>= Math.min(2, Math.abs((terms5 == String.fromCharCode(100,0) ? parseInt(`${sellh}`) : terms5.length)));
          let subtext3 = String.fromCharCode(116,95,55,95,115,117,98,105,116,101,109,115,0);
         terms5 += `${smallbrightnessY - terms5.length}`;
         subtext3 += `${2 << (Math.min(3, subtext3.length))}`;
       let contextC: Map<any, any> = new Map([[String.fromCharCode(122,105,112,112,101,100,95,55,95,53,56,0),true ], [String.fromCharCode(115,117,105,116,97,98,108,101,95,56,95,49,57,0),false ], [String.fromCharCode(122,95,57,52,95,115,116,100,0),false ]]);
      let logouserF = 5219320 >= smallbrightnessY;
      do {
          let sigmob4 = 3.0;
          let fill0 = 4;
         smallbrightnessY <<= Math.min(Math.abs(parseInt(`${sellh}`) >> (Math.min(Math.abs(2), 3))), 2);
         sigmob4 += parseFloat(`${fill0}`);
         fill0 |= 1;
         if (logouserF) {
            break;
         }
      } while ((terms5.length == 1) && logouserF);
       let entry3 = 4.0;
         contextC.set(`${entry3}`, parseInt(`${entry3}`) % (Math.max(contextC.size, 2)));
          let dependency3 = 4;
         smallbrightnessY /= Math.max(2, parseInt(`${sellh}`) % 2);
         dependency3 >>= Math.min(Math.abs(2 | dependency3), 4);
          let collectiono = 0.0;
          let values7 = String.fromCharCode(120,95,57,54,95,108,105,98,97,118,114,101,115,97,109,112,108,101,0);
         terms5 = `${smallbrightnessY}`;
         collectiono -= parseInt(`${collectiono}`);
         values7 = `${values7.length}`;
      cornershootX <<= Math.min(2, Math.abs(2));
      if (malaysia9) {
         break;
      }
   } while ((cornershootX >= 2) && malaysia9);
   while (!libffmpegkite && (nalyticsk * 2.14) <= 5.38) {
       let iconrightorangej = String.fromCharCode(116,95,55,56,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
       let login5: Array<any> = [String.fromCharCode(100,95,49,95,119,111,114,100,0), String.fromCharCode(98,97,99,107,101,100,95,52,95,51,56,0), String.fromCharCode(100,95,49,55,95,117,110,105,109,112,111,114,116,97,110,116,0)];
       let valuesG = String.fromCharCode(114,108,118,108,99,95,99,95,54,52,0);
       let textF = String.fromCharCode(111,95,53,53,95,119,111,114,107,97,114,111,117,110,100,0);
       let grayX = 5;
         valuesG += `${textF.length | grayX}`;
      while (3 > textF.length) {
         textF = `${1 % (Math.max(10, iconrightorangej.length))}`;
         break;
      }
         textF = "3";
      let iconsharefriendsC = grayX >= 7205206;
      do {
          let binddatasb: Array<any> = [954, 452, 406];
          let hongkongt = 4;
          let nalyticsl = 4.0;
          let iconeyeN = String.fromCharCode(111,95,56,95,98,108,111,99,107,113,117,111,116,101,0);
          let homeD: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,108,108,111,99,95,102,95,56,53,0),true ], [String.fromCharCode(100,95,54,53,95,97,100,100,105,110,103,0),false ]]);
         grayX ^= 1 << (Math.min(3, valuesG.length));
         binddatasb = [homeD.size - iconeyeN.length];
         hongkongt <<= Math.min(Math.abs(2), 5);
         nalyticsl += parseFloat(`${hongkongt}`);
         iconeyeN += "2";
         homeD = new Map([[`${hongkongt}`, hongkongt * parseInt(`${nalyticsl}`)]]);
         if (iconsharefriendsC) {
            break;
         }
      } while ((1 < (4 - grayX) || 4 < (textF.length - grayX)) && iconsharefriendsC);
      while (textF == String.fromCharCode(115,0)) {
          let yellowtoredV = String.fromCharCode(112,97,99,107,97,103,101,115,95,99,95,49,48,48,0);
          let gpayv = 5.0;
          let catagoryF = 0.0;
          let sharedY = String.fromCharCode(118,95,55,55,95,115,107,105,112,115,0);
         valuesG += `${(textF == String.fromCharCode(111,0) ? login5.length : textF.length)}`;
         yellowtoredV += `${(String.fromCharCode(70,0) == sharedY ? sharedY.length : parseInt(`${catagoryF}`))}`;
         gpayv *= 1 | yellowtoredV.length;
         catagoryF *= parseFloat(`${yellowtoredV.length ^ 3}`);
         break;
      }
         textF = `${textF.length}`;
      for (let x = 0; x < 3; x++) {
         valuesG = `${textF.length}`;
      }
      if (textF.length < iconrightorangej.length) {
          let chinasamer = 0.0;
          let libyogar: Array<any> = [965, 391, 703];
          let chinasamex = 2.0;
         iconrightorangej = `${parseInt(`${chinasamex}`) / (Math.max(iconrightorangej.length, 8))}`;
         chinasamer *= parseFloat(`${1}`);
         libyogar = [parseInt(`${chinasamer}`)];
         chinasamex -= parseFloat(`${parseInt(`${chinasamer}`)}`);
      }
      for (let n = 0; n < 3; n++) {
          let homeactiveQ = String.fromCharCode(107,95,53,50,95,99,105,110,101,0);
          let videoC: Array<any> = [738, 686, 715];
          let cornerkickp = String.fromCharCode(97,95,54,56,95,115,117,98,99,108,97,115,115,101,115,0);
          let crossj: Array<any> = [879, 68];
          let nbatrophyL = false;
         valuesG = `${((nbatrophyL ? 4 : 4) / (Math.max(crossj.length, 1)))}`;
         homeactiveQ += `${homeactiveQ.length % (Math.max(1, 8))}`;
         videoC.push(cornerkickp.length & 3);
         cornerkickp = `${homeactiveQ.length * 2}`;
         crossj = [2];
         nbatrophyL = 20 >= cornerkickp.length;
      }
          let with_ir = String.fromCharCode(121,95,56,95,101,120,112,108,111,100,105,110,103,0);
         grayX /= Math.max(login5.length % 2, 1);
         with_ir += "2";
         valuesG += `${(iconrightorangej == String.fromCharCode(80,0) ? iconrightorangej.length : valuesG.length)}`;
      if (3 == textF.length) {
          let watchH = String.fromCharCode(115,97,109,112,95,56,95,54,53,0);
         textF = `${grayX % 1}`;
         watchH += `${watchH.length | watchH.length}`;
      }
      while (valuesG == iconrightorangej) {
          let bggradient6 = String.fromCharCode(106,95,51,51,95,98,97,116,99,104,0);
          let nalyticsg = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,108,95,54,51,0);
          let gpayE = String.fromCharCode(110,95,56,55,95,103,101,116,0);
         iconrightorangej += "2";
         bggradient6 = "2";
         nalyticsg = `${bggradient6.length}`;
         gpayE += `${(bggradient6 == String.fromCharCode(102,0) ? gpayE.length : bggradient6.length)}`;
         break;
      }
          let privatechatbgO = 0;
          let logop = String.fromCharCode(100,95,50,55,95,104,111,115,116,102,108,97,103,115,0);
         textF += `${valuesG.length % (Math.max(8, textF.length))}`;
         privatechatbgO >>= Math.min(5, Math.abs(privatechatbgO | logop.length));
         logop += `${logop.length & 3}`;
      while (iconrightorangej.startsWith(textF)) {
         iconrightorangej = `${(String.fromCharCode(100,0) == valuesG ? valuesG.length : grayX)}`;
         break;
      }
      nalyticsk -= (parseFloat(`${textF == String.fromCharCode(76,0) ? basketballawayteamL.length : textF.length}`));
      break;
   }
   if (!libffmpegkite) {
       let playL = 2.0;
       let register_qu = String.fromCharCode(112,101,101,114,95,101,95,57,0);
       let codef: Array<any> = [916, 663];
       let time_jO = 2.0;
         codef = [1];
      if (parseFloat(`${register_qu.length}`) >= playL) {
         register_qu = `${1 >> (Math.min(Math.abs(parseInt(`${time_jO}`)), 3))}`;
      }
      if (4 <= register_qu.length) {
         register_qu += `${register_qu.length % 3}`;
      }
      while (parseFloat(`${register_qu.length}`) >= playL) {
         register_qu += `${codef.length}`;
         break;
      }
         playL -= parseFloat(`${parseInt(`${time_jO}`) ^ parseInt(`${playL}`)}`);
          let episodeX = true;
          let tempnodatagifp: Array<any> = [375, 464];
         playL /= Math.max((parseFloat(`${String.fromCharCode(110,0) == register_qu ? register_qu.length : codef.length}`)), 3);
         episodeX = !episodeX;
         tempnodatagifp.push(((episodeX ? 2 : 4) | tempnodatagifp.length));
          let huaweiJ: Array<any> = [684, 165];
         register_qu += `${register_qu.length}`;
         huaweiJ = [huaweiJ.length];
         time_jO /= Math.max(3 << (Math.min(3, codef.length)), 4);
          let panglez = String.fromCharCode(103,101,116,116,105,109,101,95,48,95,56,53,0);
         playL += parseFloat(`${2 | panglez.length}`);
       let expandb = 5.0;
         codef = [parseInt(`${playL}`)];
      while ((expandb - time_jO) >= 1.8 || 2.30 >= (1.8 - expandb)) {
          let stringsv = 5;
         time_jO /= Math.max(2, 2 - parseInt(`${playL}`));
         stringsv *= 3;
         break;
      }
      umengF ^= parseInt(`${time_jO}`);
   }
      static_nk5 /= Math.max(ballj.length, 2);
    delayControls();
  };

  const clearHidingDelay = () => {
       let suggestionZ = String.fromCharCode(99,111,110,118,101,114,116,95,111,95,53,57,0);
    let iconorientationz: Map<any, any> = new Map([[String.fromCharCode(117,95,51,52,95,118,101,99,116,111,114,115,0),true ], [String.fromCharCode(105,95,51,52,95,109,98,99,110,116,0),false ]]);
    let neonF = String.fromCharCode(111,95,57,95,115,101,97,100,0);
    let mbjscommong = 1;
    let basketballiconi = 1.0;
    let fill3: Map<any, any> = new Map([[String.fromCharCode(98,95,57,52,95,111,112,116,101,100,0),58], [String.fromCharCode(110,95,51,52,95,100,105,103,114,97,112,104,0),637], [String.fromCharCode(109,95,49,48,48,95,116,101,109,112,108,97,116,101,100,0),674]]);
    let notificationgrayL = 1.0;
    let defaultfootballbgy = 3;
    let distu = 5.0;
    let libjsijniprofilerA: Map<any, any> = new Map([[String.fromCharCode(101,95,55,50,95,122,101,114,111,109,118,0),631], [String.fromCharCode(115,105,103,110,97,108,115,95,115,95,55,57,0),612], [String.fromCharCode(120,95,57,49,95,111,98,115,101,114,118,105,110,103,0),933]]);
   for (let y = 0; y < 3; y++) {
      neonF = `${defaultfootballbgy}`;
   }
      suggestionZ += "1";
      iconorientationz.set(`${notificationgrayL}`, 1);
   let sigmobn = basketballiconi >= 6451608.0;
   do {
      basketballiconi /= Math.max(defaultfootballbgy & 1, 2);
      if (sigmobn) {
         break;
      }
   } while (sigmobn && ((3 - mbjscommong) >= 3 && (basketballiconi + 5.55) >= 1.88));
   if (!Array.from(iconorientationz.values()).includes(mbjscommong)) {
      iconorientationz = new Map([[`${notificationgrayL}`, parseInt(`${notificationgrayL}`)]]);
   }
   for (let s = 0; s < 2; s++) {
      iconorientationz.set(neonF, neonF.length);
   }
      fill3.set(neonF, defaultfootballbgy / 3);
       let iconbellactive3 = 5.0;
       let storeo = String.fromCharCode(114,100,118,111,95,100,95,49,48,0);
         iconbellactive3 *= parseFloat(`${parseInt(`${iconbellactive3}`)}`);
       let backwhite2 = 1.0;
       let greenarrowupg = 5.0;
       let embedr = 2.0;
       let annerF = 1.0;
         backwhite2 /= Math.max(parseInt(`${annerF}`), 4);
      if (1.21 >= (annerF / (Math.max(1, backwhite2))) || (backwhite2 / (Math.max(annerF, 10))) >= 1.21) {
         annerF /= Math.max(storeo.length, 4);
      }
      for (let g = 0; g < 2; g++) {
         greenarrowupg -= storeo.length | 1;
      }
      defaultfootballbgy &= defaultfootballbgy;
      suggestionZ = "1";
       let attributedstringR = 2.0;
       let customw = 0.0;
       let suggestionQ = String.fromCharCode(110,111,99,104,101,99,107,95,106,95,52,57,0);
      while (2.51 > (2.34 + customw)) {
         suggestionQ += "2";
         break;
      }
          let dycreatorN = 5.0;
          let mbbannerj = 4;
          let indexd = 1;
         customw /= Math.max(parseInt(`${customw}`), 1);
         dycreatorN -= parseFloat(`${mbbannerj}`);
         indexd <<= Math.min(2, Math.abs(mbbannerj));
         suggestionQ = `${suggestionQ.length / (Math.max(3, parseInt(`${attributedstringR}`)))}`;
      let mbnativeadvancedo = customw <= 8436271.0;
      do {
         customw *= 1 + parseInt(`${customw}`);
         if (mbnativeadvancedo) {
            break;
         }
      } while (((4 ^ suggestionQ.length) < 5) && mbnativeadvancedo);
      for (let f = 0; f < 3; f++) {
          let tail2 = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,111,95,54,50,0);
          let defaultpredictionprofile0: Map<any, any> = new Map([[String.fromCharCode(97,100,100,95,101,95,52,49,0),638], [String.fromCharCode(97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,95,115,95,57,0),254], [String.fromCharCode(98,95,56,50,95,114,101,109,97,112,112,105,110,103,0),732]]);
          let chatbotphotoz = 2;
          let policyj = 5.0;
          let eventc: Array<any> = [125, 198, 551];
         attributedstringR += parseInt(`${attributedstringR}`) << (Math.min(tail2.length, 5));
         tail2 = `${parseInt(`${policyj}`)}`;
         defaultpredictionprofile0.set(`${chatbotphotoz}`, defaultpredictionprofile0.size);
         chatbotphotoz %= Math.max(parseInt(`${policyj}`) + eventc.length, 5);
         eventc = [chatbotphotoz];
      }
      if (5 > suggestionQ.length) {
         suggestionQ = `${1 + parseInt(`${attributedstringR}`)}`;
      }
         suggestionQ = `${parseInt(`${customw}`)}`;
          let stylez = String.fromCharCode(101,95,49,54,95,98,105,116,114,101,100,117,99,116,105,111,110,0);
          let bgvipxvod4 = 2.0;
          let taiwanb = 4.0;
         attributedstringR += 2;
         stylez = `${1 - parseInt(`${bgvipxvod4}`)}`;
         bgvipxvod4 += parseInt(`${taiwanb}`) / (Math.max(stylez.length, 8));
         taiwanb += 3;
         suggestionQ = `${parseInt(`${attributedstringR}`)}`;
      neonF += `${iconorientationz.size ^ parseInt(`${customw}`)}`;
   let type_d8w = fill3.size >= 6620131;
   do {
       let awayI = 4.0;
       let friends8: Map<any, any> = new Map([[String.fromCharCode(111,95,56,52,95,115,105,122,101,100,0),449], [String.fromCharCode(115,95,51,51,95,105,103,110,111,114,105,110,103,0),882], [String.fromCharCode(102,95,57,52,95,100,101,115,99,114,105,112,116,111,114,115,0),647]]);
       let showmore8 = true;
       let annerJ = 2;
      while ((awayI / 3.95) <= 2.28) {
          let middlesounde: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,108,105,109,105,116,95,97,95,49,50,0),String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,51,95,49,53,0)], [String.fromCharCode(115,101,109,97,112,104,111,114,101,95,105,95,52,49,0),String.fromCharCode(114,95,53,48,95,97,118,97,115,115,101,114,116,0)], [String.fromCharCode(103,95,51,95,111,98,115,101,114,118,97,116,105,111,110,115,0),String.fromCharCode(110,95,54,52,95,97,108,105,103,110,101,100,0)]]);
         showmore8 = 32 >= friends8.size;
         middlesounde.set(`${middlesounde.size}`, middlesounde.size + middlesounde.size);
         break;
      }
       let containerJ = String.fromCharCode(110,95,52,55,95,112,101,114,99,101,112,116,0);
       let baseV = String.fromCharCode(116,95,56,52,95,108,105,98,120,0);
      if (baseV.length > 1) {
          let fullscreenmaxO: Array<any> = [959, 924, 233];
          let notificationfilledr = String.fromCharCode(120,95,57,57,95,97,118,115,116,114,105,110,103,0);
          let promotion7 = 0;
          let securityX = 3.0;
         friends8.set(`${notificationfilledr}`, notificationfilledr.length);
         fullscreenmaxO = [2];
         promotion7 %= Math.max(1 / (Math.max(parseInt(`${securityX}`), 6)), 2);
         securityX *= parseInt(`${securityX}`);
      }
          let greenarrowupt = 0.0;
         baseV += `${parseInt(`${awayI}`) ^ 1}`;
         greenarrowupt -= parseFloat(`${3}`);
      fill3.set(`${basketballiconi}`, friends8.size);
      if (type_d8w) {
         break;
      }
   } while (((5.12 - notificationgrayL) < 4.62 || (fill3.size | 4) < 1) && type_d8w);
      defaultfootballbgy /= Math.max(5, parseInt(`${notificationgrayL}`) | suggestionZ.length);
   while ((iconorientationz.size + 1) == 3 && (defaultfootballbgy + 1) == 1) {
      iconorientationz.set(`${basketballiconi}`, 1);
      break;
   }
       let emptyL = 5.0;
         emptyL /= Math.max(2, 2);
      if (4.41 < (emptyL - emptyL)) {
         emptyL += parseInt(`${emptyL}`);
      }
      let libreactnativeblobj = emptyL <= 8052264.0;
      do {
          let service5: Array<any> = [129, 871, 613];
          let scoref: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,95,50,95,54,51,0),972], [String.fromCharCode(100,116,115,109,95,97,95,51,56,0),95], [String.fromCharCode(105,110,118,101,114,115,105,111,110,95,115,95,51,50,0),570]]);
          let filledg = 5.0;
          let iconviewera: Map<any, any> = new Map([[String.fromCharCode(105,110,116,105,95,111,95,50,50,0),725], [String.fromCharCode(121,95,54,53,95,115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0),910], [String.fromCharCode(101,108,108,105,112,116,105,99,95,102,95,52,55,0),361]]);
          let favoriteQ = String.fromCharCode(111,95,49,57,95,115,117,98,99,111,101,102,115,0);
         emptyL /= Math.max(scoref.size, 4);
         service5 = [parseInt(`${filledg}`) ^ service5.length];
         scoref = new Map([[`${iconviewera.size}`, favoriteQ.length]]);
         filledg -= parseFloat(`${parseInt(`${filledg}`)}`);
         iconviewera = new Map([[`${iconviewera.size}`, favoriteQ.length]]);
         if (libreactnativeblobj) {
            break;
         }
      } while (((emptyL - 4.52) > 4.82 && (emptyL - 4.52) > 3.21) && libreactnativeblobj);
      mbjscommong += 3;
   if (2 >= mbjscommong) {
      notificationgrayL += parseFloat(`${2 / (Math.max(2, parseInt(`${distu}`)))}`);
   }
      distu += 3;
      iconorientationz = new Map([[`${mbjscommong}`, mbjscommong | 1]]);
   if (!neonF.startsWith(`${fill3.size}`)) {
       let activityu = 2.0;
       let main_qC = 0.0;
       let graphicst = 2;
      if ((activityu - graphicst) >= 4.99 && 4.87 >= (activityu - 4.99)) {
         graphicst >>= Math.min(4, Math.abs(parseInt(`${main_qC}`)));
      }
      let hookG = 8711361.0 <= main_qC;
      do {
         main_qC *= parseInt(`${main_qC}`) - parseInt(`${activityu}`);
         if (hookG) {
            break;
         }
      } while (((graphicst - main_qC) > 2.53) && hookG);
      let danger2 = 7940158.0 >= main_qC;
      do {
          let moviesR = String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,103,95,56,48,0);
          let predictionactivej: Map<any, any> = new Map([[String.fromCharCode(100,95,55,48,95,108,97,117,110,99,104,0),770], [String.fromCharCode(104,95,49,53,95,119,101,108,108,0),73]]);
         main_qC -= parseInt(`${activityu}`) / 1;
         moviesR += `${predictionactivej.size >> (Math.min(Math.abs(1), 2))}`;
         predictionactivej = new Map([[`${predictionactivej.size}`, (moviesR == String.fromCharCode(73,0) ? moviesR.length : predictionactivej.size)]]);
         if (danger2) {
            break;
         }
      } while (danger2 && (graphicst < main_qC));
      if ((activityu - 4.93) > 2.99) {
          let iconpointscoreq = String.fromCharCode(116,121,112,101,100,101,102,95,122,95,52,48,0);
          let dplusR = String.fromCharCode(101,95,55,52,95,108,111,103,111,115,0);
          let appsB = String.fromCharCode(117,114,112,111,115,101,95,109,95,50,49,0);
         activityu += parseInt(`${main_qC}`);
         iconpointscoreq += `${dplusR.length % (Math.max(3, 8))}`;
         dplusR = `${dplusR.length / (Math.max(1, appsB.length))}`;
         appsB = `${appsB.length * dplusR.length}`;
      }
         graphicst %= Math.max(2 - graphicst, 3);
         main_qC -= parseInt(`${main_qC}`);
      for (let g = 0; g < 3; g++) {
         main_qC += parseInt(`${main_qC}`) - graphicst;
      }
       let b_managerZ = true;
         graphicst *= ((b_managerZ ? 4 : 1) - parseInt(`${activityu}`));
      neonF += `${parseInt(`${activityu}`)}`;
   }
   for (let r = 0; r < 3; r++) {
      neonF = `${mbjscommong >> (Math.min(Math.abs(3), 5))}`;
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let upgradeI: Array<any> = [958, 815, 61];
    let rulesD = 2.0;
    let left4 = String.fromCharCode(112,108,97,105,110,95,115,95,49,54,0);
    let greenarrowupn = String.fromCharCode(100,95,56,49,95,114,101,109,111,118,101,0);
    let shareblackU = String.fromCharCode(118,97,108,105,100,95,53,95,52,57,0);
    let anneru = 4;
    let nterstitialR: Map<any, any> = new Map([[String.fromCharCode(122,95,55,52,95,100,101,118,105,100,101,0),String.fromCharCode(108,95,55,56,95,101,120,112,108,111,100,105,110,103,0)], [String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,121,95,49,51,0),String.fromCharCode(106,95,55,57,95,109,97,110,105,112,117,108,97,116,101,0)], [String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,95,57,95,51,55,0),String.fromCharCode(109,95,52,48,95,115,116,97,116,105,115,116,105,99,0)]]);
    let shareO = false;
    let greyarrowupa: Map<any, any> = new Map([[String.fromCharCode(103,95,54,55,95,110,97,112,115,104,111,116,0),String.fromCharCode(114,101,99,121,99,108,101,95,108,95,52,48,0)], [String.fromCharCode(115,95,51,54,0),String.fromCharCode(99,111,110,115,116,115,95,54,95,51,53,0)]]);
    let combine3 = String.fromCharCode(110,95,53,54,95,112,111,114,116,115,0);
    let matchactiveh = 1;
    let downD = 3.0;
    let privacyk: Map<any, any> = new Map([[String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,51,95,54,50,0),false ], [String.fromCharCode(99,95,54,50,95,99,97,99,104,105,110,103,0),true ], [String.fromCharCode(107,105,110,103,95,49,95,49,56,0),true ]]);
    let resultv = 0.0;
    let homem = String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,115,95,54,51,0);
      left4 += `${(shareblackU == String.fromCharCode(121,0) ? (shareO ? 3 : 1) : shareblackU.length)}`;
   for (let k = 0; k < 2; k++) {
      shareO = combine3.length < 5;
   }
   if (5 == (matchactiveh >> (Math.min(Math.abs(greyarrowupa.size), 4))) && (5 >> (Math.min(4, Math.abs(greyarrowupa.size)))) == 3) {
      greyarrowupa = new Map([[`${upgradeI.length}`, left4.length + upgradeI.length]]);
   }
   for (let y = 0; y < 1; y++) {
      shareblackU += `${greenarrowupn.length}`;
   }
       let sharedt: Array<any> = [440, 689];
       let inactived = 1;
      for (let j = 0; j < 2; j++) {
         sharedt.push(inactived % (Math.max(sharedt.length, 7)));
      }
      let thumbnaily = 7835295 >= inactived;
      do {
         inactived %= Math.max(3, sharedt.length);
         if (thumbnaily) {
            break;
         }
      } while (thumbnaily && (3 > (sharedt.length ^ inactived)));
       let arrowup7 = 5;
      if (!sharedt.includes(arrowup7)) {
          let switch_1X: Map<any, any> = new Map([[String.fromCharCode(112,95,49,51,95,109,101,109,111,106,105,0),true ], [String.fromCharCode(118,95,55,55,95,117,108,111,110,103,0),true ]]);
          let arrowdownI = 5.0;
          let latnG = String.fromCharCode(99,95,57,50,95,101,108,101,109,101,110,116,0);
          let pageB = String.fromCharCode(97,109,116,95,54,95,50,50,0);
         arrowup7 |= 1;
         switch_1X.set(`${arrowdownI}`, 3);
         arrowdownI *= 3 * switch_1X.size;
         latnG += `${switch_1X.size - 3}`;
         pageB += `${pageB.length >> (Math.min(Math.abs(2), 2))}`;
      }
      while ((inactived ^ sharedt.length) == 5) {
          let overlayz = String.fromCharCode(109,106,112,101,103,101,110,99,95,105,95,56,55,0);
          let minimizeo = 5;
          let mountingr = true;
         inactived %= Math.max(4, sharedt.length - 1);
         overlayz = `${(String.fromCharCode(97,0) == overlayz ? minimizeo : overlayz.length)}`;
         minimizeo &= 1 - overlayz.length;
         mountingr = overlayz.length >= 58 || minimizeo >= 58;
         break;
      }
      while (2 < (arrowup7 >> (Math.min(sharedt.length, 3))) || (arrowup7 >> (Math.min(sharedt.length, 1))) < 2) {
         arrowup7 /= Math.max(3 / (Math.max(1, sharedt.length)), 5);
         break;
      }
      nterstitialR.set(`${rulesD}`, parseInt(`${rulesD}`) << (Math.min(upgradeI.length, 3)));
   for (let z = 0; z < 2; z++) {
      greyarrowupa.set(left4, 3 ^ parseInt(`${rulesD}`));
   }
   while (2 >= (nterstitialR.size + parseInt(`${rulesD}`)) || 3.63 >= (3.40 + rulesD)) {
       let bgvipxvodV: Map<any, any> = new Map([[String.fromCharCode(115,95,55,56,95,102,114,97,109,101,114,0),true ], [String.fromCharCode(121,95,55,50,95,98,108,117,101,116,111,111,116,104,0),true ], [String.fromCharCode(98,95,57,52,0),true ]]);
       let ynews8 = true;
       let iconsubssuccessj: Array<any> = [String.fromCharCode(100,95,51,95,115,116,114,108,105,107,101,0), String.fromCharCode(115,105,108,107,95,101,95,51,49,0)];
      for (let q = 0; q < 3; q++) {
         bgvipxvodV = new Map([[`${iconsubssuccessj.length}`, ((ynews8 ? 3 : 5) % (Math.max(2, 2)))]]);
      }
      let libimagepipeline1 = ynews8 ? !ynews8 : ynews8;
      do {
          let iconlogoutG = String.fromCharCode(98,97,99,107,95,49,95,56,54,0);
          let unselectedK = 5;
          let arrowselectdownv = false;
          let darkK = 0.0;
         ynews8 = iconsubssuccessj.length > 93;
         iconlogoutG = `${unselectedK}`;
         unselectedK *= 1;
         arrowselectdownv = parseInt(`${darkK}`) == iconlogoutG.length;
         darkK *= parseFloat(`${2 % (Math.max(unselectedK, 10))}`);
         if (libimagepipeline1) {
            break;
         }
      } while (libimagepipeline1 && (ynews8));
         ynews8 = ynews8 || bgvipxvodV.size <= 6;
          let inouttargetredw = 1;
          let iconarrowleftq: Map<any, any> = new Map([[String.fromCharCode(108,95,57,55,95,117,110,109,97,115,107,0),308], [String.fromCharCode(111,95,50,52,95,109,101,109,111,106,105,0),53], [String.fromCharCode(111,118,101,114,104,101,97,100,95,111,95,52,57,0),507]]);
         iconsubssuccessj.push(2 >> (Math.min(2, Math.abs(iconarrowleftq.size))));
         inouttargetredw /= Math.max(1, 2 ^ inouttargetredw);
         iconarrowleftq.set(`${inouttargetredw}`, inouttargetredw / (Math.max(3, inouttargetredw)));
      let reactnavigation7 = 5544609 >= iconsubssuccessj.length;
      do {
          let mapbuffero = true;
          let libruntimeexecutorW = 1;
          let imageactionliveT = String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,95,109,95,49,49,0);
          let iconsaveimage9 = 4.0;
         iconsubssuccessj.push(3);
         mapbuffero = !mapbuffero || imageactionliveT.length > 17;
         libruntimeexecutorW += ((mapbuffero ? 5 : 1) & imageactionliveT.length);
         iconsaveimage9 -= ((mapbuffero ? 1 : 2));
         if (reactnavigation7) {
            break;
         }
      } while (reactnavigation7 && (bgvipxvodV.get(`${iconsubssuccessj.length}`) != null));
         ynews8 = 87 == iconsubssuccessj.length && bgvipxvodV.size == 87;
      for (let l = 0; l < 1; l++) {
          let imagenetworkerrP = String.fromCharCode(97,108,97,114,109,95,99,95,57,55,0);
          let fullscreenmaxX: Array<any> = [374, 757];
          let light9 = String.fromCharCode(109,95,53,54,95,114,101,112,111,0);
          let formT = 2.0;
         iconsubssuccessj = [(imagenetworkerrP == String.fromCharCode(116,0) ? imagenetworkerrP.length : bgvipxvodV.size)];
         fullscreenmaxX = [parseInt(`${formT}`)];
         light9 += `${(light9 == String.fromCharCode(95,0) ? light9.length : parseInt(`${formT}`))}`;
      }
          let arrowrightwithtailJ = String.fromCharCode(113,95,57,51,95,112,114,101,118,105,101,119,112,112,0);
         iconsubssuccessj = [(bgvipxvodV.size & (ynews8 ? 4 : 5))];
         arrowrightwithtailJ = `${arrowrightwithtailJ.length}`;
         bgvipxvodV.set(`${iconsubssuccessj.length}`, 2 << (Math.min(5, Math.abs(bgvipxvodV.size))));
      nterstitialR.set(`${matchactiveh}`, 1);
      break;
   }

      if (delayValue === undefined) {

      greyarrowupa.set(`${matchactiveh}`, matchactiveh);
      shareblackU += "3";
      greenarrowupn = "3";
      rulesD -= parseFloat(`${upgradeI.length}`);
       let description_njC = String.fromCharCode(117,95,51,54,95,115,116,114,115,101,112,0);
       let whitevideoliveE = 4.0;
       let typingloadingX = 4.0;
      for (let b = 0; b < 3; b++) {
          let armvaE = String.fromCharCode(110,95,51,53,95,114,101,110,100,105,116,105,111,110,0);
          let showmore_ = 4;
          let animationC = 2;
          let questiconL = String.fromCharCode(120,95,50,52,95,117,110,109,97,114,115,104,97,108,0);
          let baseliner = String.fromCharCode(102,105,108,108,105,110,103,95,97,95,54,54,0);
         typingloadingX -= parseFloat(`${showmore_ + parseInt(`${whitevideoliveE}`)}`);
         armvaE += `${2 | armvaE.length}`;
         showmore_ *= animationC % (Math.max(1, 9));
         animationC *= baseliner.length | questiconL.length;
         questiconL = `${(questiconL == String.fromCharCode(85,0) ? animationC : questiconL.length)}`;
         baseliner = `${animationC}`;
      }
          let basketballawayteamQ: Array<any> = [String.fromCharCode(101,118,97,115,97,112,112,95,101,95,50,50,0), String.fromCharCode(99,95,55,53,95,110,105,100,115,0), String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,118,95,55,52,0)];
          let favicon7 = 4.0;
         whitevideoliveE -= parseFloat(`${2 * parseInt(`${typingloadingX}`)}`);
         basketballawayteamQ.push(2);
         favicon7 -= parseFloat(`${parseInt(`${favicon7}`) & 3}`);
      nterstitialR = new Map([[`${anneru}`, 3 % (Math.max(6, anneru))]]);
      description_njC = `${description_njC.length}`;
   let clubt = nterstitialR.size <= 8131808;
   do {
       let stored = 5.0;
       let countdown2: Array<any> = [7, 715, 940];
       let predictiondefaultJ = 5.0;
      let libfabricjniK = 6238083 >= countdown2.length;
      do {
         countdown2.push(countdown2.length | 2);
         if (libfabricjniK) {
            break;
         }
      } while (libfabricjniK && ((countdown2.length | 2) > 4));
      if ((predictiondefaultJ + 5.8) < 5.56 && 3.1 < (stored / (Math.max(5.8, 8)))) {
         predictiondefaultJ += parseInt(`${stored}`);
      }
       let tramini6: Array<any> = [974, 227, 280];
         tramini6.push(3 % (Math.max(4, tramini6.length)));
       let pangled = false;
       let renewp = false;
      nterstitialR.set(`${stored}`, 1 * nterstitialR.size);
      if (clubt) {
         break;
      }
   } while ((!left4.endsWith(`${nterstitialR.size}`)) && clubt);
       let shoott = false;
          let chartZ: Map<any, any> = new Map([[String.fromCharCode(108,111,103,103,101,114,115,95,116,95,50,56,0),false ], [String.fromCharCode(108,105,109,105,116,97,116,105,111,110,95,103,95,56,49,0),false ], [String.fromCharCode(118,95,56,48,95,100,105,115,99,108,111,115,117,114,101,0),false ]]);
          let iconviewerC = String.fromCharCode(109,101,97,110,95,51,95,53,56,0);
          let homeinactiveQ: Map<any, any> = new Map([[String.fromCharCode(108,111,110,103,95,107,95,57,52,0),126], [String.fromCharCode(117,116,117,114,101,95,116,95,55,56,0),37]]);
         shoott = chartZ.size < homeinactiveQ.size;
         chartZ.set(iconviewerC, (String.fromCharCode(101,0) == iconviewerC ? iconviewerC.length : iconviewerC.length));
      if (shoott && shoott) {
         shoott = (!shoott ? !shoott : shoott);
      }
      if (shoott || !shoott) {
         shoott = (shoott ? shoott : !shoott);
      }
      combine3 = `${3 >> (Math.min(Math.abs(parseInt(`${rulesD}`)), 4))}`;
        if (showSlider === 'none' && !paused) {

       let goal4 = String.fromCharCode(99,95,57,54,95,106,115,105,109,100,99,112,117,0);
       let paginationi = String.fromCharCode(114,116,109,112,101,95,49,95,56,56,0);
         goal4 = `${paginationi.length}`;
      while (paginationi == String.fromCharCode(114,0)) {
         goal4 = `${goal4.length}`;
         break;
      }
          let readc = String.fromCharCode(115,95,49,51,95,115,99,114,97,112,101,0);
          let greenarrowupX = String.fromCharCode(111,97,117,116,104,95,101,95,55,52,0);
         goal4 = `${readc.length}`;
         readc += `${greenarrowupX.length - greenarrowupX.length}`;
      for (let a = 0; a < 1; a++) {
         paginationi += `${(String.fromCharCode(111,0) == goal4 ? goal4.length : paginationi.length)}`;
      }
          let dropdowno = String.fromCharCode(112,95,49,49,95,109,117,108,109,111,100,0);
         goal4 += `${dropdowno.length & paginationi.length}`;
      while (4 > paginationi.length) {
          let privacyd = false;
          let mounting5 = String.fromCharCode(107,95,49,55,95,98,114,111,119,110,0);
          let ticked8 = 5.0;
          let membershipM = 1;
          let bootsplash4 = 4.0;
         goal4 += `${(String.fromCharCode(115,0) == paginationi ? paginationi.length : (privacyd ? 3 : 4))}`;
         privacyd = 50 == membershipM;
         mounting5 = `${(String.fromCharCode(83,0) == mounting5 ? parseInt(`${ticked8}`) : mounting5.length)}`;
         ticked8 += (parseFloat(`${String.fromCharCode(104,0) == mounting5 ? mounting5.length : parseInt(`${ticked8}`)}`));
         membershipM -= 2 % (Math.max(parseInt(`${ticked8}`), 7));
         bootsplash4 += parseInt(`${ticked8}`) % (Math.max(4, mounting5.length));
         break;
      }
      combine3 = `${1 & greenarrowupn.length}`;
      left4 = `${parseInt(`${downD}`) << (Math.min(5, Math.abs(1)))}`;
      shareO = String.fromCharCode(118,0) == combine3 && upgradeI.length == 37;
      greenarrowupn += `${shareblackU.length}`;
      upgradeI = [shareblackU.length + matchactiveh];
   if (2 <= (upgradeI.length - left4.length)) {
      left4 = `${combine3.length + shareblackU.length}`;
   }
       let libnms4 = 1.0;
       let dialogA: Array<any> = [972, 111, 369];
       let flipperJ = 1;
      if (dialogA.length == 2) {
         dialogA = [flipperJ ^ parseInt(`${libnms4}`)];
      }
      while (5 <= flipperJ) {
          let projectF = String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,95,103,95,50,54,0);
          let rules_ = 0;
          let libreactnativeblobh = String.fromCharCode(111,95,56,49,95,100,101,114,105,118,101,100,0);
          let libfollyR = String.fromCharCode(99,95,49,56,95,111,111,108,116,105,112,0);
         libnms4 -= parseFloat(`${1 << (Math.min(Math.abs(flipperJ), 2))}`);
         projectF += `${projectF.length}`;
         rules_ %= Math.max(libreactnativeblobh.length + libfollyR.length, 4);
         libreactnativeblobh += `${libfollyR.length % 3}`;
         break;
      }
      if (3 <= (dialogA.length & 2) || 2.90 <= (libnms4 / (Math.max(parseFloat(`${dialogA.length}`), 5)))) {
         libnms4 -= parseFloat(`${parseInt(`${libnms4}`)}`);
      }
      for (let o = 0; o < 2; o++) {
         flipperJ += parseInt(`${libnms4}`) & flipperJ;
      }
      while (dialogA.includes(flipperJ)) {
         dialogA.push(flipperJ % (Math.max(parseInt(`${libnms4}`), 4)));
         break;
      }
         dialogA = [dialogA.length];
         dialogA = [3 ^ parseInt(`${libnms4}`)];
       let libavformat8 = String.fromCharCode(116,95,52,55,95,99,111,109,109,117,116,101,0);
      for (let v = 0; v < 2; v++) {
          let yellowscoreballQ: Array<any> = [669, 740, 290];
          let incident4 = 0.0;
         dialogA.push(3);
         yellowscoreballQ.push(3 ^ yellowscoreballQ.length);
         incident4 *= parseFloat(`${3 & yellowscoreballQ.length}`);
      }
      downD += parseInt(`${rulesD}`) | 2;
          setShowControls(false)
        }
      } else {

      upgradeI = [matchactiveh + 3];
   let iconeditS = rulesD >= 6598775.0;
   do {
      rulesD -= parseFloat(`${matchactiveh % 3}`);
      if (iconeditS) {
         break;
      }
   } while ((!combine3.includes(`${rulesD}`)) && iconeditS);
      combine3 = `${parseInt(`${downD}`)}`;
      greyarrowupa.set(`${shareO}`, ((shareO ? 1 : 3) * 2));
      combine3 = `${anneru / (Math.max(8, parseInt(`${downD}`)))}`;
       let save5 = true;
         save5 = save5 && save5;
         save5 = !save5;
      if (!save5 || save5) {
         save5 = !save5;
      }
      upgradeI.push(anneru);
       let photoW = 1.0;
       let resultG: Map<any, any> = new Map([[String.fromCharCode(110,111,109,105,110,97,116,101,95,52,95,55,50,0),923], [String.fromCharCode(97,108,116,101,114,95,103,95,56,0),784], [String.fromCharCode(115,95,48,95,110,105,115,116,0),491]]);
         resultG.set(`${photoW}`, parseInt(`${photoW}`));
      let activep = 7285652 <= resultG.size;
      do {
         resultG.set(`${photoW}`, resultG.size & 2);
         if (activep) {
            break;
         }
      } while (activep && (resultG.size >= 1));
      for (let n = 0; n < 3; n++) {
         photoW += parseFloat(`${2 - parseInt(`${photoW}`)}`);
      }
       let homeu = String.fromCharCode(106,112,101,103,116,114,97,110,95,105,95,52,51,0);
      if ((photoW / 2.68) <= 1.17 || (photoW / (Math.max(parseFloat(`${resultG.size}`), 1))) <= 2.68) {
         resultG = new Map([[`${photoW}`, homeu.length]]);
      }
      if (!Array.from(resultG.values()).includes(photoW)) {
         photoW *= parseFloat(`${2}`);
      }
      rulesD += parseFloat(`${resultG.size}`);
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let storeW = 5.0;
    let ajax4 = 4;
    let detailD = 0.0;
    let libffmpegkitf = true;
    let mergerw = 4.0;
    let informationl = 3;
    let rewardvideo3 = 5.0;
    let whitebellL = false;
    let eact5 = 0.0;
    let iconarrowrightblackY = String.fromCharCode(100,95,52,48,95,116,114,97,110,115,112,0);
    let whiteg = String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,95,113,95,49,48,0);
    let listN: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,116,95,54,53,0),false ], [String.fromCharCode(104,100,108,114,95,109,95,55,51,0),true ]]);
      whitebellL = !libffmpegkitf;
   let libfbjnil = whiteg.length >= 6791962;
   do {
       let bgvipsporte = true;
       let backgroundb = String.fromCharCode(107,95,54,56,95,97,118,103,115,97,100,0);
         backgroundb = `${backgroundb.length}`;
          let sinaV = String.fromCharCode(102,105,110,100,97,115,111,99,95,110,95,56,50,0);
          let wifirouterK = 3.0;
          let basketballtrophyT = false;
         backgroundb += "3";
         sinaV = `${((basketballtrophyT ? 3 : 4) & parseInt(`${wifirouterK}`))}`;
         wifirouterK += (parseFloat(`${(basketballtrophyT ? 3 : 4) | 2}`));
         backgroundb = `${((bgvipsporte ? 5 : 1))}`;
      while (bgvipsporte) {
         bgvipsporte = ((backgroundb.length * (bgvipsporte ? 32 : backgroundb.length)) > 32);
         break;
      }
         bgvipsporte = !bgvipsporte;
       let penaltygoalM = String.fromCharCode(99,95,53,52,95,106,111,98,113,0);
       let iconnotificationnewc = String.fromCharCode(118,95,57,48,95,108,111,119,0);
      whiteg = "3";
      if (libfbjnil) {
         break;
      }
   } while ((!whiteg.includes(`${eact5}`)) && libfbjnil);
   while (!libffmpegkitf) {
       let canvasJ: Map<any, any> = new Map([[String.fromCharCode(100,121,110,108,111,99,107,95,104,95,48,0),72], [String.fromCharCode(99,111,114,110,101,114,115,95,116,95,50,54,0),664]]);
       let znewsC = String.fromCharCode(119,95,53,48,95,116,119,111,115,0);
       let whitevideolive1 = String.fromCharCode(110,101,116,119,111,114,107,95,117,95,53,50,0);
      for (let a = 0; a < 2; a++) {
          let searchc: Array<any> = [851, 183];
          let brightnesst: Array<any> = [246, 574, 81];
          let fnewinterstitialA = 4.0;
         whitevideolive1 = `${parseInt(`${fnewinterstitialA}`)}`;
         searchc = [1];
         brightnesst = [searchc.length & brightnesst.length];
         fnewinterstitialA += parseFloat(`${searchc.length >> (Math.min(Math.abs(2), 2))}`);
      }
      let audienceS = String.fromCharCode(54,106,112,111,52,0) == znewsC;
      do {
          let analyticsz = 4;
          let chartN = String.fromCharCode(111,95,56,48,95,99,111,100,101,119,111,114,100,0);
          let basketballmatchdetailbg7 = String.fromCharCode(115,105,103,115,108,111,116,95,52,95,57,53,0);
          let defaultteam8 = 3.0;
          let selectionR = String.fromCharCode(98,108,97,99,107,115,95,98,95,57,50,0);
         znewsC = `${selectionR.length - 3}`;
         analyticsz %= Math.max(3, chartN.length & basketballmatchdetailbg7.length);
         chartN += `${chartN.length >> (Math.min(Math.abs(1), 4))}`;
         basketballmatchdetailbg7 += `${chartN.length}`;
         defaultteam8 += parseFloat(`${3 >> (Math.min(3, basketballmatchdetailbg7.length))}`);
         selectionR = `${parseInt(`${defaultteam8}`) - basketballmatchdetailbg7.length}`;
         if (audienceS) {
            break;
         }
      } while ((znewsC.endsWith(`${canvasJ.size}`)) && audienceS);
         canvasJ.set(`${znewsC}`, canvasJ.size % (Math.max(1, 7)));
          let greenarrowupm = String.fromCharCode(100,95,53,48,95,115,105,103,0);
         znewsC = `${2 + greenarrowupm.length}`;
         canvasJ.set(znewsC, znewsC.length % 3);
         canvasJ = new Map([[`${canvasJ.size}`, 3]]);
       let eyeopen_ = 1.0;
       let statisticsinactivez = 5.0;
          let window_rs: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,97,116,116,97,99,107,0),350], [String.fromCharCode(101,110,115,117,114,101,95,122,95,52,54,0),0]]);
         canvasJ = new Map([[`${window_rs.size}`, whitevideolive1.length]]);
      for (let s = 0; s < 2; s++) {
         eyeopen_ /= Math.max(2, whitevideolive1.length / (Math.max(1, 2)));
      }
      libffmpegkitf = rewardvideo3 == 10.8;
      break;
   }
   if ((eact5 - ajax4) >= 1.18) {
       let downloadingu = 3;
       let elementss = String.fromCharCode(112,95,52,53,95,112,99,109,119,98,0);
       let libavfilterU = String.fromCharCode(117,95,56,53,95,112,114,101,118,118,101,99,0);
         libavfilterU = `${downloadingu * 2}`;
      let iconarrowrightwhitey = 7636566 <= elementss.length;
      do {
         elementss = "2";
         if (iconarrowrightwhitey) {
            break;
         }
      } while (iconarrowrightwhitey && (2 >= libavfilterU.length));
      let historyD = String.fromCharCode(117,117,110,114,57,104,0) == elementss;
      do {
          let mintegral4: Array<any> = [String.fromCharCode(109,95,53,53,95,97,117,116,111,98,97,110,104,0), String.fromCharCode(97,101,99,95,102,95,53,50,0)];
          let target2 = 0.0;
         elementss = `${downloadingu}`;
         mintegral4 = [mintegral4.length];
         target2 /= Math.max(mintegral4.length, 1);
         if (historyD) {
            break;
         }
      } while ((elementss.startsWith(`${downloadingu}`)) && historyD);
         downloadingu ^= (libavfilterU == String.fromCharCode(80,0) ? elementss.length : libavfilterU.length);
      let iconlogouth = elementss == String.fromCharCode(49,117,116,107,106,49,114,101,0);
      do {
         elementss += `${1 | downloadingu}`;
         if (iconlogouth) {
            break;
         }
      } while ((4 == elementss.length) && iconlogouth);
         elementss += `${elementss.length * libavfilterU.length}`;
      for (let k = 0; k < 1; k++) {
          let referrerl = String.fromCharCode(100,101,101,112,101,114,95,118,95,49,48,0);
          let icondownimg9: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,106,95,56,48,0),367], [String.fromCharCode(110,101,119,101,114,95,57,95,52,57,0),510]]);
          let tempnodatagifz = String.fromCharCode(99,100,120,108,95,118,95,51,53,0);
          let subbasketballplayers: Array<any> = [String.fromCharCode(101,95,48,95,109,97,114,115,104,97,108,108,105,110,103,0), String.fromCharCode(102,116,118,99,108,95,100,95,54,48,0)];
         elementss = `${icondownimg9.size}`;
         referrerl = `${tempnodatagifz.length}`;
         icondownimg9 = new Map([[`${subbasketballplayers.length}`, 2]]);
         tempnodatagifz += `${subbasketballplayers.length}`;
      }
          let graphicsh = String.fromCharCode(118,115,102,114,97,109,101,95,112,95,52,55,0);
         elementss = `${graphicsh.length}`;
         libavfilterU = `${2 << (Math.min(2, elementss.length))}`;
      ajax4 <<= Math.min(Math.abs((parseInt(`${eact5}`) & (whitebellL ? 3 : 5))), 3);
   }
   while (2.90 >= (storeW - rewardvideo3)) {
      rewardvideo3 *= parseFloat(`${3 & parseInt(`${rewardvideo3}`)}`);
      break;
   }
   for (let y = 0; y < 1; y++) {
      whitebellL = 43.75 == mergerw;
   }
   for (let c = 0; c < 2; c++) {
      informationl *= (parseInt(`${eact5}`) - (whitebellL ? 2 : 5));
   }

    if (isLocked) {

      storeW -= parseFloat(`${1 % (Math.max(7, parseInt(`${eact5}`)))}`);
   if (whitebellL && whiteg.length <= 1) {
       let mimox = true;
       let libsentryA = String.fromCharCode(121,95,49,95,114,101,97,100,105,110,103,0);
       let navigationC = 1.0;
       let recommendationC: Map<any, any> = new Map([[String.fromCharCode(108,97,121,115,95,106,95,56,51,0),578], [String.fromCharCode(117,110,107,101,121,101,100,95,101,95,57,48,0),427]]);
      let defaultplayerimgT = 6769439 <= recommendationC.size;
      do {
         recommendationC.set(`${mimox}`, ((mimox ? 2 : 2)));
         if (defaultplayerimgT) {
            break;
         }
      } while (defaultplayerimgT && (4 == recommendationC.size));
      if (1 < libsentryA.length) {
         mimox = libsentryA == String.fromCharCode(121,0) || 13 <= recommendationC.size;
      }
      for (let f = 0; f < 2; f++) {
         recommendationC = new Map([[`${recommendationC.size}`, recommendationC.size * 3]]);
      }
      for (let o = 0; o < 2; o++) {
         mimox = libsentryA == String.fromCharCode(90,0);
      }
       let applicationu = 2.0;
         libsentryA = `${(parseInt(`${applicationu}`) >> (Math.min(1, Math.abs((mimox ? 2 : 3)))))}`;
         recommendationC = new Map([[`${mimox}`, ((mimox ? 1 : 2))]]);
         mimox = ((libsentryA.length * (!mimox ? 93 : libsentryA.length)) <= 93);
      let backwardG = navigationC <= 8128570.0;
      do {
         navigationC *= parseFloat(`${recommendationC.size}`);
         if (backwardG) {
            break;
         }
      } while (backwardG && (recommendationC.size < 2));
         recommendationC = new Map([[`${navigationC}`, parseInt(`${navigationC}`) - 2]]);
      if (Array.from(recommendationC.keys()).includes(`${applicationu}`)) {
         recommendationC.set(`${applicationu}`, parseInt(`${navigationC}`) * 3);
      }
          let middlesound5: Map<any, any> = new Map([[String.fromCharCode(102,95,55,51,95,121,117,108,101,0),String.fromCharCode(114,95,50,52,95,104,97,115,104,101,115,0)], [String.fromCharCode(116,95,50,53,95,101,118,101,110,108,121,0),String.fromCharCode(103,95,50,50,95,104,117,102,102,121,117,118,100,115,112,0)], [String.fromCharCode(104,95,56,49,95,99,111,110,116,101,110,116,115,0),String.fromCharCode(109,95,54,49,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0)]]);
          let viewsa = 0.0;
         libsentryA += `${libsentryA.length + parseInt(`${navigationC}`)}`;
         middlesound5 = new Map([[`${middlesound5.size}`, middlesound5.size ^ 3]]);
         viewsa -= middlesound5.size;
      whitebellL = 42.41 < rewardvideo3;
   }
   for (let h = 0; h < 2; h++) {
      libffmpegkitf = ajax4 > 30;
   }
      eact5 += parseInt(`${storeW}`) % (Math.max(parseInt(`${rewardvideo3}`), 4));
       let rewindi = false;
       let loginsuccessi = String.fromCharCode(119,114,105,116,101,99,108,101,97,114,95,106,95,49,50,0);
       let fnewarchdefaultsW: Array<any> = [810, 919, 138];
      while ((fnewarchdefaultsW.length % (Math.max(4, 7))) < 3 && 5 < (fnewarchdefaultsW.length % 4)) {
         loginsuccessi = `${(1 * (rewindi ? 3 : 4))}`;
         break;
      }
      let homeicon_ = rewindi ? !rewindi : rewindi;
      do {
         rewindi = fnewarchdefaultsW.length > loginsuccessi.length;
         if (homeicon_) {
            break;
         }
      } while (homeicon_ && (loginsuccessi.endsWith(`${rewindi}`)));
      for (let x = 0; x < 1; x++) {
          let actionR = String.fromCharCode(100,97,116,97,115,116,111,114,101,95,53,95,57,0);
          let libfbI = 2;
          let floaterb = String.fromCharCode(105,95,52,0);
          let abidetectz = true;
          let spinneru: Array<any> = [367, 468];
         rewindi = (spinneru.length << (Math.min(actionR.length, 1))) >= 86;
         actionR = `${libfbI - 3}`;
         libfbI += (floaterb == String.fromCharCode(95,0) ? (abidetectz ? 3 : 2) : floaterb.length);
         abidetectz = 40 >= libfbI || abidetectz;
         spinneru.push(2);
      }
      if (fnewarchdefaultsW.length >= 3) {
         rewindi = loginsuccessi.length < fnewarchdefaultsW.length;
      }
      if (2 <= loginsuccessi.length) {
          let data0: Array<any> = [141, 481, 894];
         rewindi = !rewindi;
         data0.push(data0.length - 1);
      }
      let mbjscommonJ = loginsuccessi == String.fromCharCode(122,115,112,111,53,0);
      do {
          let connection6: Array<any> = [879, 310];
          let otheru = String.fromCharCode(111,95,52,55,95,105,110,116,114,111,0);
          let setting7 = false;
          let gmailH = 1;
         loginsuccessi = "1";
         connection6.push(gmailH ^ 3);
         otheru = `${otheru.length}`;
         setting7 = (connection6.length << (Math.min(otheru.length, 5))) == 18;
         gmailH |= connection6.length % (Math.max(1, otheru.length));
         if (mbjscommonJ) {
            break;
         }
      } while (mbjscommonJ && ((2 * fnewarchdefaultsW.length) > 4 && (2 * fnewarchdefaultsW.length) > 5));
       let arrowrightp = String.fromCharCode(115,117,98,120,95,49,95,56,54,0);
      while ((1 ^ arrowrightp.length) < 2 && (1 ^ fnewarchdefaultsW.length) < 3) {
          let networkP = String.fromCharCode(103,101,116,115,111,99,107,111,112,116,95,52,95,57,50,0);
         fnewarchdefaultsW.push(arrowrightp.length % (Math.max(1, 6)));
         networkP = `${(String.fromCharCode(115,0) == networkP ? networkP.length : networkP.length)}`;
         break;
      }
         loginsuccessi += "3";
      ajax4 &= iconarrowrightblackY.length + 2;
   while (libffmpegkitf) {
       let borderless1 = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,100,95,48,0);
       let baiduadsx = 0.0;
       let become3 = 3.0;
       let langkey7 = String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,112,95,51,49,0);
       let mimot = String.fromCharCode(105,110,110,101,114,95,56,95,49,54,0);
         langkey7 = `${mimot.length}`;
         borderless1 += `${langkey7.length}`;
      while (3.40 == (baiduadsx - 5.98)) {
          let libapminsightb7 = String.fromCharCode(109,95,49,50,95,103,101,116,109,0);
          let expandW = String.fromCharCode(97,100,100,95,114,95,50,56,0);
          let list5 = false;
          let long_l4t = 3;
         baiduadsx *= parseInt(`${baiduadsx}`);
         libapminsightb7 += `${expandW.length}`;
         expandW = `${((list5 ? 1 : 2))}`;
         list5 = expandW == libapminsightb7;
         long_l4t /= Math.max(long_l4t / (Math.max(2, expandW.length)), 1);
         break;
      }
      let footballfieldt = 5359261 >= borderless1.length;
      do {
         borderless1 = `${(mimot == String.fromCharCode(73,0) ? mimot.length : langkey7.length)}`;
         if (footballfieldt) {
            break;
         }
      } while (footballfieldt && (borderless1 == String.fromCharCode(120,0) || mimot.length >= 3));
      while (4.10 == (baiduadsx / (Math.max(3.91, 3))) && (parseInt(`${baiduadsx}`) / 5) == 5) {
         baiduadsx /= Math.max(5, 1);
         break;
      }
      while (2.68 >= (4.18 - baiduadsx)) {
         baiduadsx += borderless1.length;
         break;
      }
          let membershipL = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,109,95,56,48,0);
         become3 += langkey7.length;
         membershipL = `${membershipL.length & membershipL.length}`;
      let iconqq9 = langkey7.length <= 7681919;
      do {
          let libswscaleu = 5;
          let ewarded3: Map<any, any> = new Map([[String.fromCharCode(112,95,54,56,95,102,97,115,116,109,97,116,104,0),String.fromCharCode(118,95,50,95,104,113,97,100,115,112,0)], [String.fromCharCode(114,101,110,97,109,101,95,55,95,52,57,0),String.fromCharCode(112,95,48,95,115,111,108,105,100,0)]]);
          let cast2 = String.fromCharCode(115,95,53,57,95,106,114,101,118,100,99,116,0);
         langkey7 += "2";
         libswscaleu /= Math.max(5, 1);
         ewarded3 = new Map([[`${ewarded3.size}`, (cast2 == String.fromCharCode(95,0) ? ewarded3.size : cast2.length)]]);
         if (iconqq9) {
            break;
         }
      } while (((langkey7.length ^ 3) >= 2 || (langkey7.length - become3) >= 1.55) && iconqq9);
      for (let l = 0; l < 3; l++) {
          let iconarrowrightorangeS = 1.0;
          let iconcalendary = 1.0;
          let crownI = false;
          let closeS = false;
         mimot = `${(borderless1 == String.fromCharCode(105,0) ? borderless1.length : parseInt(`${baiduadsx}`))}`;
         iconarrowrightorangeS *= parseFloat(`${parseInt(`${iconcalendary}`) << (Math.min(1, Math.abs(2)))}`);
         iconcalendary -= parseFloat(`${parseInt(`${iconarrowrightorangeS}`) / (Math.max(1, parseInt(`${iconcalendary}`)))}`);
         crownI = closeS;
      }
          let successS = String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,95,108,95,49,55,0);
          let subtextq = true;
         become3 -= 3 & langkey7.length;
         successS += `${((subtextq ? 1 : 2))}`;
         subtextq = ((successS.length << (Math.min(4, Math.abs((!subtextq ? successS.length : 9))))) <= 9);
      for (let j = 0; j < 2; j++) {
          let teamdetailsbgi = 5.0;
          let libnmsL = true;
          let moduleE = 3.0;
          let searchQ = String.fromCharCode(118,101,114,115,105,111,110,101,100,95,122,95,55,57,0);
         borderless1 = `${langkey7.length / (Math.max(9, parseInt(`${baiduadsx}`)))}`;
         teamdetailsbgi += parseInt(`${moduleE}`);
         libnmsL = 74.86 < teamdetailsbgi;
         moduleE *= ((libnmsL ? 3 : 1));
         searchQ += `${parseInt(`${moduleE}`) - 1}`;
      }
         mimot += `${3 & parseInt(`${baiduadsx}`)}`;
      for (let m = 0; m < 2; m++) {
         langkey7 += "1";
      }
          let homeplayerq = String.fromCharCode(122,95,56,48,95,109,97,105,110,115,116,97,103,101,0);
          let stepK = String.fromCharCode(121,95,50,57,95,99,115,104,97,114,112,0);
          let ewardedY: Array<any> = [601, 73];
         become3 += 2;
         homeplayerq = `${(String.fromCharCode(76,0) == homeplayerq ? homeplayerq.length : stepK.length)}`;
         stepK += "1";
         ewardedY = [homeplayerq.length];
       let profile3 = 5.0;
       let arrowrightu = 4.0;
      whiteg += `${2 >> (Math.min(Math.abs(parseInt(`${eact5}`)), 3))}`;
      break;
   }
      libffmpegkitf = 24.54 >= detailD;
      

      libffmpegkitf = rewardvideo3 > 24.39;
      rewardvideo3 += (parseFloat(`${(whitebellL ? 4 : 5) ^ whiteg.length}`));
      whitebellL = eact5 > storeW;
       let filterN = String.fromCharCode(112,114,105,118,107,101,121,95,109,95,48,0);
      for (let h = 0; h < 3; h++) {
         filterN = `${filterN.length}`;
      }
          let collectionY: Map<any, any> = new Map([[String.fromCharCode(101,95,52,53,95,101,105,103,104,116,0),true ], [String.fromCharCode(101,110,102,111,114,99,101,95,109,95,55,57,0),true ]]);
         filterN = `${collectionY.size}`;
      for (let j = 0; j < 1; j++) {
         filterN += `${filterN.length}`;
      }
      informationl >>= Math.min(Math.abs(parseInt(`${eact5}`)), 4);
      whiteg = `${(whiteg == String.fromCharCode(108,0) ? parseInt(`${rewardvideo3}`) : whiteg.length)}`;
       let stationsJ = 4;
       let gradlewj = 4;
          let videovarH = 3.0;
         gradlewj %= Math.max(1 & stationsJ, 1);
         videovarH /= Math.max(parseFloat(`${parseInt(`${videovarH}`)}`), 5);
       let scrollviewg = false;
      if (scrollviewg) {
         scrollviewg = !scrollviewg;
      }
       let downarrowi = String.fromCharCode(115,116,100,108,105,98,95,55,95,54,49,0);
         scrollviewg = downarrowi.length == 27;
       let libcxxcomponentsP: Map<any, any> = new Map([[String.fromCharCode(119,95,50,95,112,97,100,100,105,110,103,0),925], [String.fromCharCode(98,95,55,53,95,115,116,114,105,100,101,97,98,108,101,0),590], [String.fromCharCode(113,95,55,48,95,114,101,99,111,114,100,105,110,103,0),170]]);
       let main_uX: Map<any, any> = new Map([[String.fromCharCode(105,95,55,51,95,97,100,106,117,115,116,109,101,110,116,115,0),730], [String.fromCharCode(111,95,53,55,95,110,97,118,105,103,97,116,101,0),402]]);
      whitebellL = 70 < stationsJ;
       let sentryx: Map<any, any> = new Map([[String.fromCharCode(107,95,52,95,105,110,118,101,114,115,101,100,0),true ], [String.fromCharCode(105,95,51,48,95,100,101,115,99,101,110,116,0),true ], [String.fromCharCode(115,101,114,105,97,108,105,122,101,95,100,95,54,52,0),true ]]);
       let baiduadsX = String.fromCharCode(120,95,57,95,115,116,111,114,121,98,111,97,114,100,0);
       let listU: Array<any> = [523, 2];
       let match2: Array<any> = [815, 979];
      while ((match2.length % 1) <= 3) {
          let icondownimgr = String.fromCharCode(115,95,51,55,95,115,98,105,116,115,0);
          let libsentryO = true;
         sentryx.set(baiduadsX, (baiduadsX == String.fromCharCode(68,0) ? match2.length : baiduadsX.length));
         icondownimgr += `${((libsentryO ? 3 : 2))}`;
         libsentryO = icondownimgr.length > 28 || libsentryO;
         break;
      }
          let networko: Array<any> = [44, 125, 696];
         listU.push((String.fromCharCode(85,0) == baiduadsX ? networko.length : baiduadsX.length));
          let iconchatsendm: Map<any, any> = new Map([[String.fromCharCode(114,95,52,57,95,116,99,109,105,0),119], [String.fromCharCode(102,111,117,114,120,109,95,121,95,50,48,0),707], [String.fromCharCode(117,95,52,55,95,97,114,107,101,114,0),755]]);
          let componentregistryP: Map<any, any> = new Map([[String.fromCharCode(102,95,52,55,95,109,115,122,104,0),true ], [String.fromCharCode(109,111,110,107,101,121,95,112,95,56,0),true ], [String.fromCharCode(103,95,57,53,95,99,111,110,102,105,103,117,114,97,116,105,110,0),true ]]);
         baiduadsX = `${iconchatsendm.size % 2}`;
         iconchatsendm = new Map([[`${componentregistryP.size}`, 1]]);
         componentregistryP.set(`${componentregistryP.size}`, 2);
      if (!Array.from(sentryx.values()).includes(listU.length)) {
         sentryx = new Map([[`${sentryx.size}`, match2.length]]);
      }
         sentryx = new Map([[`${match2.length}`, 2]]);
      mergerw -= parseFloat(`${ajax4}`);
      setIsLocked(false);
    } else {

      whitebellL = 90.41 > detailD || libffmpegkitf;
      eact5 /= Math.max((parseInt(`${mergerw}`) >> (Math.min(1, Math.abs((libffmpegkitf ? 1 : 4))))), 5);
       let defaultroombgL = String.fromCharCode(97,95,51,49,95,116,111,111,108,98,97,114,0);
       let bnewarchdefaults8 = 4.0;
       let cornerkickS = true;
      if ((bnewarchdefaults8 - 4.67) == 4.59 || 4.67 == bnewarchdefaults8) {
         bnewarchdefaults8 /= Math.max(5, parseFloat(`${defaultroombgL.length / 2}`));
      }
          let floaterW: Map<any, any> = new Map([[String.fromCharCode(106,95,53,55,95,105,110,116,101,114,110,97,108,0),701], [String.fromCharCode(109,109,105,117,116,105,108,115,95,56,95,57,57,0),197]]);
          let chatbotphotog = 1.0;
         defaultroombgL = `${2 * parseInt(`${chatbotphotog}`)}`;
         floaterW.set(`${floaterW.size}`, floaterW.size + floaterW.size);
         chatbotphotog /= Math.max(floaterW.size >> (Math.min(Math.abs(floaterW.size), 3)), 3);
         cornerkickS = defaultroombgL.length >= 21 && cornerkickS;
      for (let r = 0; r < 1; r++) {
          let gradle7 = String.fromCharCode(104,95,55,57,95,107,95,52,55,0);
          let currentG = false;
          let whistleorangeV = String.fromCharCode(98,97,99,107,115,105,100,101,95,103,95,50,56,0);
          let libreactD = true;
         cornerkickS = !currentG;
         gradle7 = "3";
         whistleorangeV = `${whistleorangeV.length}`;
         libreactD = gradle7.length == 13;
      }
      if (defaultroombgL.startsWith(`${bnewarchdefaults8}`)) {
         defaultroombgL += `${defaultroombgL.length & 2}`;
      }
          let matchactive0 = String.fromCharCode(103,95,57,49,95,112,105,99,107,109,111,100,101,0);
          let detaile = String.fromCharCode(100,105,115,97,98,108,101,95,53,95,55,50,0);
         cornerkickS = bnewarchdefaults8 > 77.32;
         matchactive0 += `${detaile.length}`;
         detaile += `${detaile.length}`;
         cornerkickS = cornerkickS || 26.93 >= bnewarchdefaults8;
          let halffieldimageE = false;
          let hoverG = String.fromCharCode(103,95,56,51,95,101,112,104,101,109,101,114,97,108,0);
         defaultroombgL = `${hoverG.length << (Math.min(Math.abs(2), 5))}`;
         bnewarchdefaults8 += (parseFloat(`${(cornerkickS ? 4 : 5) / (Math.max(6, parseInt(`${bnewarchdefaults8}`)))}`));
      storeW *= parseFloat(`${parseInt(`${mergerw}`) >> (Math.min(2, Math.abs(3)))}`);
       let reactt: Map<any, any> = new Map([[String.fromCharCode(120,95,50,52,95,122,112,116,102,0),String.fromCharCode(97,100,97,112,116,101,100,95,50,95,54,54,0)], [String.fromCharCode(100,114,111,112,120,95,114,95,50,53,0),String.fromCharCode(115,116,114,115,116,97,114,116,95,119,95,52,53,0)], [String.fromCharCode(121,95,55,56,95,115,112,108,105,99,101,0),String.fromCharCode(107,95,49,50,0)]]);
       let statsnomoredataD = 5.0;
          let libtobQ = true;
          let v_hasho = false;
         reactt = new Map([[`${v_hasho}`, (3 >> (Math.min(Math.abs((libtobQ ? 1 : 2)), 1)))]]);
          let analyticB = true;
          let usernameG = 3.0;
          let release_hi = 4.0;
         reactt.set(`${usernameG}`, 2);
         analyticB = !analyticB;
         usernameG -= parseFloat(`${parseInt(`${release_hi}`) + 1}`);
         release_hi *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${release_hi}`)), 5))}`);
      if (reactt.get(`${statsnomoredataD}`) != null) {
         statsnomoredataD -= parseFloat(`${1 * parseInt(`${statsnomoredataD}`)}`);
      }
      let middlesoundr = statsnomoredataD >= 5958355.0;
      do {
          let starv = 0;
          let humiditym = 0.0;
         statsnomoredataD += parseFloat(`${parseInt(`${statsnomoredataD}`) | starv}`);
         starv ^= parseInt(`${humiditym}`) - parseInt(`${humiditym}`);
         if (middlesoundr) {
            break;
         }
      } while (middlesoundr && ((reactt.size * parseInt(`${statsnomoredataD}`)) > 2));
      if ((parseFloat(`${reactt.size}`) - statsnomoredataD) == 3.39) {
          let update_v8K = 5.0;
          let controlsc = 3;
          let iconpipexpandV: Map<any, any> = new Map([[String.fromCharCode(114,101,100,100,105,116,95,54,95,55,56,0),true ], [String.fromCharCode(105,115,101,109,112,116,121,95,100,95,51,49,0),false ]]);
          let mintegralC = String.fromCharCode(107,95,51,56,95,109,118,100,97,116,97,0);
          let resultn = String.fromCharCode(106,95,57,53,95,112,105,120,101,108,98,117,102,102,101,114,0);
         statsnomoredataD /= Math.max(parseFloat(`${resultn.length}`), 1);
         update_v8K += parseFloat(`${2 | parseInt(`${update_v8K}`)}`);
         controlsc += iconpipexpandV.size;
         iconpipexpandV = new Map([[`${iconpipexpandV.size}`, iconpipexpandV.size]]);
         mintegralC += `${mintegralC.length * 3}`;
         resultn += `${parseInt(`${update_v8K}`)}`;
      }
      let profileframe5 = statsnomoredataD >= 7513730.0;
      do {
         statsnomoredataD += parseFloat(`${3 / (Math.max(10, parseInt(`${statsnomoredataD}`)))}`);
         if (profileframe5) {
            break;
         }
      } while (profileframe5 && (statsnomoredataD < 1.67));
      whitebellL = 18.68 < detailD && !libffmpegkitf;
   let greyc = 8803753 >= ajax4;
   do {
       let infoQ = String.fromCharCode(98,95,50,56,95,116,111,120,121,122,0);
         infoQ = `${(String.fromCharCode(65,0) == infoQ ? infoQ.length : infoQ.length)}`;
         infoQ += `${infoQ.length * 3}`;
          let plusg: Array<any> = [String.fromCharCode(115,112,114,105,110,103,95,118,95,56,53,0), String.fromCharCode(109,95,49,49,95,117,110,115,111,114,116,101,100,0), String.fromCharCode(105,95,52,52,95,100,105,118,105,100,101,114,0)];
          let servicez = 5;
         infoQ = `${servicez - plusg.length}`;
      ajax4 |= 1 & parseInt(`${storeW}`);
      if (greyc) {
         break;
      }
   } while ((ajax4 > informationl) && greyc);
      whiteg += `${(parseInt(`${rewardvideo3}`) | (whitebellL ? 3 : 2))}`;
   for (let f = 0; f < 1; f++) {
      detailD /= Math.max(5, ajax4);
   }
      

       let detailt = 5.0;
         detailt *= parseFloat(`${parseInt(`${detailt}`) * parseInt(`${detailt}`)}`);
         detailt += parseFloat(`${1}`);
         detailt += parseFloat(`${parseInt(`${detailt}`)}`);
      rewardvideo3 += parseFloat(`${1}`);
   for (let a = 0; a < 2; a++) {
       let linkf: Array<any> = [597, 902];
       let awayteamfieldH = 1.0;
       let privatechatbgb = false;
       let activityc = String.fromCharCode(119,95,49,57,95,98,105,110,100,108,105,115,116,0);
       let orangeuparrowP: Array<any> = [String.fromCharCode(101,95,54,54,95,112,101,110,100,105,110,103,0), String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,100,95,53,52,0), String.fromCharCode(103,95,56,56,95,115,101,99,117,114,101,0)];
         linkf.push(1);
      if (activityc.length > 4) {
         activityc = `${2 / (Math.max(parseInt(`${awayteamfieldH}`), 8))}`;
      }
      for (let a = 0; a < 2; a++) {
         privatechatbgb = activityc == String.fromCharCode(79,0);
      }
       let icontransferclubo = String.fromCharCode(110,95,52,57,95,114,101,115,101,110,100,0);
       let analytic0 = 3.0;
       let sidec = String.fromCharCode(104,95,50,48,95,116,104,117,109,98,115,0);
       let register_y8 = String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,56,95,52,55,0);
         sidec += "1";
      while (!activityc.endsWith(register_y8)) {
         activityc = `${(2 >> (Math.min(1, Math.abs((privatechatbgb ? 2 : 4)))))}`;
         break;
      }
         awayteamfieldH *= parseInt(`${analytic0}`);
       let next6 = false;
       let flipperu = false;
      for (let y = 0; y < 2; y++) {
         flipperu = !privatechatbgb;
      }
      if (2 <= sidec.length) {
          let lineN = false;
          let codegeng = false;
          let cornerkickC = 4.0;
          let goalf = String.fromCharCode(105,110,108,105,110,101,95,100,95,53,52,0);
         sidec = `${(activityc.length ^ (privatechatbgb ? 2 : 2))}`;
         lineN = codegeng;
         cornerkickC /= Math.max(2, (goalf.length >> (Math.min(1, Math.abs((lineN ? 1 : 3))))));
         goalf = `${(3 >> (Math.min(2, Math.abs((lineN ? 2 : 1)))))}`;
      }
         next6 = linkf.includes(next6);
      while (icontransferclubo.length <= 3) {
          let tickA = String.fromCharCode(120,112,116,97,98,108,101,95,52,95,53,0);
          let sort5 = String.fromCharCode(108,95,55,95,122,98,105,110,0);
          let sansP = String.fromCharCode(111,108,107,97,100,111,116,95,110,95,50,53,0);
          let customs: Map<any, any> = new Map([[String.fromCharCode(115,121,109,95,113,95,54,56,0),829], [String.fromCharCode(117,112,97,116,101,100,95,107,95,55,57,0),114]]);
         icontransferclubo += `${2 & tickA.length}`;
         tickA += `${(sansP == String.fromCharCode(118,0) ? sansP.length : sort5.length)}`;
         sort5 += `${(String.fromCharCode(67,0) == sansP ? sansP.length : customs.size)}`;
         customs = new Map([[`${customs.size}`, customs.size]]);
         break;
      }
      for (let j = 0; j < 2; j++) {
         activityc = `${((next6 ? 2 : 4) << (Math.min(linkf.length, 1)))}`;
      }
      eact5 -= ((privatechatbgb ? 5 : 1) * (libffmpegkitf ? 4 : 1));
   }
       let librrcV = String.fromCharCode(98,95,49,48,48,95,111,117,116,99,111,109,101,0);
          let private_llG = String.fromCharCode(100,111,99,117,109,101,110,116,95,119,95,56,53,0);
          let teamdetailsbgr = 0.0;
         librrcV += `${parseInt(`${teamdetailsbgr}`) >> (Math.min(librrcV.length, 3))}`;
         private_llG += `${private_llG.length << (Math.min(private_llG.length, 2))}`;
         teamdetailsbgr /= Math.max((String.fromCharCode(116,0) == private_llG ? private_llG.length : private_llG.length), 3);
       let tempnodata3 = 1.0;
      while (librrcV.includes(`${tempnodata3}`)) {
          let defaultprofilepicb = 2;
          let fill2 = 4.0;
         librrcV += `${defaultprofilepicb * parseInt(`${tempnodata3}`)}`;
         defaultprofilepicb &= 1;
         fill2 *= 3 - parseInt(`${fill2}`);
         break;
      }
      informationl -= parseInt(`${storeW}`) << (Math.min(3, Math.abs(parseInt(`${eact5}`))));
       let nativemodule5: Map<any, any> = new Map([[String.fromCharCode(119,95,51,57,0),337], [String.fromCharCode(103,95,54,55,95,107,101,121,110,97,109,101,0),558], [String.fromCharCode(105,95,56,51,95,111,112,112,111,115,105,116,101,0),565]]);
         nativemodule5.set(`${nativemodule5.size}`, 3);
          let controlsY = String.fromCharCode(115,116,114,116,111,108,108,95,116,95,52,0);
          let arrowdownm: Map<any, any> = new Map([[String.fromCharCode(109,97,120,105,109,117,109,95,102,95,57,0),618], [String.fromCharCode(99,114,101,97,116,111,114,95,51,95,55,49,0),447], [String.fromCharCode(116,97,103,95,50,95,51,52,0),931]]);
          let bellreminderC = true;
         nativemodule5.set(`${bellreminderC}`, (2 ^ (bellreminderC ? 2 : 1)));
         controlsY += "2";
         arrowdownm.set(controlsY, arrowdownm.size);
          let typeso = 0.0;
          let smallorangemanW = 5.0;
          let abidetectp: Map<any, any> = new Map([[String.fromCharCode(111,108,100,101,114,95,110,95,48,0),315], [String.fromCharCode(101,118,101,114,121,95,106,95,53,53,0),751], [String.fromCharCode(112,95,50,55,95,101,110,100,0),55]]);
         nativemodule5.set(`${typeso}`, parseInt(`${typeso}`));
         smallorangemanW += 1;
         abidetectp.set(`${smallorangemanW}`, 3 & parseInt(`${smallorangemanW}`));
      storeW *= parseFloat(`${parseInt(`${rewardvideo3}`) >> (Math.min(1, Math.abs(2)))}`);
       let profileinactived = String.fromCharCode(101,110,117,109,101,114,97,116,101,95,97,95,54,50,0);
       let redirect2 = String.fromCharCode(103,95,50,49,0);
       let screen7 = String.fromCharCode(106,95,51,49,95,117,110,99,108,105,112,112,101,100,0);
       let mimoQ = 1.0;
         screen7 = "2";
         redirect2 += `${redirect2.length}`;
      while (5 < (screen7.length / 3)) {
         mimoQ -= screen7.length;
         break;
      }
       let overq: Map<any, any> = new Map([[String.fromCharCode(109,105,103,104,116,95,50,95,57,55,0),694], [String.fromCharCode(115,99,104,101,100,95,48,95,49,48,48,0),705], [String.fromCharCode(109,97,103,105,99,95,108,95,54,50,0),386]]);
       let tumbnailW: Map<any, any> = new Map([[String.fromCharCode(121,111,117,114,95,106,95,57,56,0),712], [String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,97,95,55,50,0),727], [String.fromCharCode(99,121,99,108,101,100,95,114,95,54,0),335]]);
      while (!Array.from(overq.values()).includes(mimoQ)) {
          let notificationgrayr = String.fromCharCode(117,95,54,51,95,112,108,97,121,112,97,117,115,101,0);
          let scrollviewO = 5.0;
          let placementC = 4.0;
          let mathN = 4.0;
          let heartX = 1;
         mimoQ -= overq.size >> (Math.min(Math.abs(3), 4));
         notificationgrayr = `${(String.fromCharCode(71,0) == notificationgrayr ? notificationgrayr.length : parseInt(`${placementC}`))}`;
         scrollviewO += parseInt(`${placementC}`);
         mathN += parseInt(`${scrollviewO}`) + 2;
         heartX &= 3;
         break;
      }
      for (let j = 0; j < 3; j++) {
          let chatbotphotoh: Array<any> = [919, 388, 196];
          let libfabricjniM = String.fromCharCode(101,95,53,50,95,100,111,117,98,108,101,115,0);
          let kickP = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,53,95,50,49,0);
         overq = new Map([[`${tumbnailW.size}`, overq.size]]);
         chatbotphotoh = [(String.fromCharCode(81,0) == kickP ? libfabricjniM.length : kickP.length)];
         libfabricjniM = `${kickP.length}`;
      }
       let notificationR = String.fromCharCode(112,117,116,105,110,116,95,99,95,57,57,0);
      while (notificationR.endsWith(`${tumbnailW.size}`)) {
         notificationR = `${tumbnailW.size}`;
         break;
      }
      rewardvideo3 += parseFloat(`${parseInt(`${rewardvideo3}`) >> (Math.min(Math.abs(1), 3))}`);
      profileinactived = `${profileinactived.length}`;
   if (4.19 > (detailD - 1.8)) {
       let bggradientm = true;
       let tooltipsh = 0.0;
       let watchs = String.fromCharCode(112,111,108,108,95,121,95,48,0);
         bggradientm = watchs.includes(`${tooltipsh}`);
      while (!bggradientm) {
         watchs = `${((bggradientm ? 2 : 2))}`;
         break;
      }
         bggradientm = watchs.startsWith(`${tooltipsh}`);
      if (!bggradientm) {
         bggradientm = !bggradientm;
      }
          let rightq = String.fromCharCode(99,95,53,56,95,114,101,99,111,114,100,105,110,103,0);
          let kuaishouh = 2.0;
         bggradientm = bggradientm && 30.72 == kuaishouh;
         rightq = `${(rightq == String.fromCharCode(103,0) ? rightq.length : rightq.length)}`;
         kuaishouh += rightq.length;
         tooltipsh *= (parseFloat(`${watchs == String.fromCharCode(56,0) ? watchs.length : parseInt(`${tooltipsh}`)}`));
       let libhermest = 5.0;
       let holder0 = 4.0;
         holder0 -= parseInt(`${libhermest}`);
         tooltipsh /= Math.max(parseFloat(`${watchs.length ^ parseInt(`${tooltipsh}`)}`), 2);
      whitebellL = libffmpegkitf || tooltipsh <= 67.24;
   }
   if (3 > informationl || (informationl * 3) > 3) {
       let zoomw = 0.0;
       let libruntimeexecutor2 = 0.0;
       let modulesR: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,95,54,95,55,0),577], [String.fromCharCode(116,115,97,110,95,103,95,57,48,0),938]]);
          let combinedh: Array<any> = [568, 177, 350];
          let iconpipshrink0: Array<any> = [429, 159];
          let kickI = 3.0;
         libruntimeexecutor2 /= Math.max(iconpipshrink0.length, 4);
         combinedh = [combinedh.length];
         iconpipshrink0.push(combinedh.length % (Math.max(1, 6)));
         kickI += parseInt(`${kickI}`) | combinedh.length;
         libruntimeexecutor2 -= modulesR.size >> (Math.min(2, Math.abs(parseInt(`${libruntimeexecutor2}`))));
         libruntimeexecutor2 -= parseInt(`${zoomw}`);
         modulesR.set(`${libruntimeexecutor2}`, modulesR.size | 2);
      if (2.25 > (1.24 + zoomw) || (libruntimeexecutor2 + zoomw) > 1.24) {
         zoomw -= parseFloat(`${parseInt(`${libruntimeexecutor2}`) | parseInt(`${zoomw}`)}`);
      }
      let containerZ = libruntimeexecutor2 <= 5480841.0;
      do {
         libruntimeexecutor2 += parseInt(`${libruntimeexecutor2}`) | 2;
         if (containerZ) {
            break;
         }
      } while (containerZ && (5.20 < (libruntimeexecutor2 - zoomw) || (libruntimeexecutor2 - 5.20) < 2.33));
      let unimplementedviewp = zoomw <= 8985975.0;
      do {
         zoomw -= parseFloat(`${modulesR.size << (Math.min(Math.abs(2), 5))}`);
         if (unimplementedviewp) {
            break;
         }
      } while (unimplementedviewp && (5.39 < (libruntimeexecutor2 / (Math.max(10, zoomw)))));
      for (let v = 0; v < 1; v++) {
         libruntimeexecutor2 += 2;
      }
          let stringsf = String.fromCharCode(111,95,53,52,95,109,97,116,101,114,105,97,108,105,122,101,0);
          let basketballawayteam3 = 2.0;
          let detail_ = String.fromCharCode(118,95,52,51,0);
         libruntimeexecutor2 *= 1;
         stringsf = `${3 >> (Math.min(3, detail_.length))}`;
         basketballawayteam3 -= stringsf.length * detail_.length;
      whitebellL = eact5 > 52.4 || 99 > informationl;
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
            source={require('../../../static/images/dycreatorSuboutBoot.png')}
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
            source={require('../../../static/images/configChat.png')}
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
                              source={require('../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
