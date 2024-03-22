import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControlsMin from './zxc_placeholder';
import BottomControlsMin from './jrw_fill_user';
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
       let clockw = false;
    let selectB = String.fromCharCode(112,95,53,57,0);
    let umengC: Array<any> = [165, 667];
    let faviconf = String.fromCharCode(112,114,102,116,95,52,95,56,0);
    let commentd: Array<any> = [266, 782, 886];
    let mapping2: Map<any, any> = new Map([[String.fromCharCode(101,115,116,97,98,108,105,115,104,95,116,95,50,57,0),307], [String.fromCharCode(110,111,109,101,109,95,48,95,52,54,0),210], [String.fromCharCode(100,105,102,102,97,98,108,101,95,99,95,54,54,0),78]]);
    let t_titlec = String.fromCharCode(118,111,119,101,108,115,95,112,95,51,53,0);
    let whistle8: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,97,95,57,50,0),83], [String.fromCharCode(105,95,56,95,99,104,111,105,99,101,0),486]]);
    let headerJ = true;
   if (faviconf.length == 5) {
      clockw = umengC.includes(clockw);
   }
      clockw = 2 < faviconf.length && selectB.length < 2;
      selectB += `${t_titlec.length}`;
   for (let q = 0; q < 2; q++) {
      faviconf += `${(String.fromCharCode(88,0) == faviconf ? whistle8.size : faviconf.length)}`;
   }
   if (4 > (commentd.length << (Math.min(Math.abs(mapping2.size), 4))) || 1 > (4 << (Math.min(1, Math.abs(mapping2.size))))) {
      commentd.push(2);
   }
       let filterD: Array<any> = [586, 713, 390];
         filterD.push(1 ^ filterD.length);
      for (let l = 0; l < 3; l++) {
         filterD = [filterD.length & 1];
      }
      while (2 <= (filterD.length % (Math.max(10, filterD.length)))) {
         filterD.push(1 * filterD.length);
         break;
      }
      umengC.push(3 + commentd.length);
   if (t_titlec.length >= whistle8.size) {
      t_titlec = `${commentd.length ^ mapping2.size}`;
   }
      clockw = t_titlec == String.fromCharCode(98,0);
   while ((umengC.length | 5) > 3) {
       let vignettew: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,101,116,118,97,114,95,112,95,51,55,0),106], [String.fromCharCode(116,95,52,48,95,114,101,118,111,107,101,100,0),381], [String.fromCharCode(107,95,54,53,95,103,97,109,109,97,0),257]]);
      let typingx = 6213617 <= vignettew.size;
      do {
         vignettew = new Map([[`${vignettew.size}`, vignettew.size]]);
         if (typingx) {
            break;
         }
      } while ((vignettew.size == 5) && typingx);
          let container8 = String.fromCharCode(116,95,56,57,95,116,104,114,101,97,100,112,111,111,108,0);
          let c_viewb = true;
          let actionV = String.fromCharCode(97,95,57,50,95,99,115,115,0);
         vignettew.set(container8, 2 + vignettew.size);
         container8 += `${(actionV == String.fromCharCode(111,0) ? (c_viewb ? 1 : 2) : actionV.length)}`;
         c_viewb = (((!c_viewb ? actionV.length : 80) * actionV.length) >= 80);
         vignettew = new Map([[`${vignettew.size}`, vignettew.size | 2]]);
      umengC.push((t_titlec == String.fromCharCode(55,0) ? t_titlec.length : whistle8.size));
      break;
   }
   while ((faviconf.length + whistle8.size) < 4 && 3 < (faviconf.length + 4)) {
      faviconf = `${mapping2.size}`;
      break;
   }
       let upgraden = String.fromCharCode(101,97,115,121,95,101,95,54,50,0);
          let shareq: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,101,115,95,105,95,53,48,0),349], [String.fromCharCode(114,95,52,51,95,112,114,105,111,0),637], [String.fromCharCode(101,109,111,106,105,115,95,112,95,49,48,0),729]]);
         upgraden += `${upgraden.length ^ shareq.size}`;
      let referrerK = upgraden.length <= 5171267;
      do {
         upgraden = "1";
         if (referrerK) {
            break;
         }
      } while ((upgraden.endsWith(upgraden)) && referrerK);
      while (upgraden.length <= upgraden.length) {
         upgraden = `${3 + upgraden.length}`;
         break;
      }
      mapping2.set(`${commentd.length}`, 1 - commentd.length);
   for (let f = 0; f < 2; f++) {
      whistle8.set(`${t_titlec}`, t_titlec.length >> (Math.min(Math.abs(2), 1)));
   }
      whistle8 = new Map([[`${commentd.length}`, (faviconf == String.fromCharCode(48,0) ? commentd.length : faviconf.length)]]);
      umengC.push(selectB.length);
      clockw = String.fromCharCode(49,0) == selectB;
       let time_t3 = 4.0;
       let episodeZ = 1.0;
       let inviteG = String.fromCharCode(118,95,57,49,95,99,105,112,104,101,114,116,101,120,116,0);
      for (let q = 0; q < 1; q++) {
          let disconnectedy: Array<any> = [250, 128];
          let roomg = true;
         inviteG += `${(String.fromCharCode(114,0) == inviteG ? parseInt(`${episodeZ}`) : inviteG.length)}`;
         disconnectedy = [((roomg ? 4 : 5) >> (Math.min(disconnectedy.length, 1)))];
         roomg = disconnectedy.length >= 67 && roomg;
      }
      if (2.31 > (time_t3 - 3.26) || 3.26 > (episodeZ / (Math.max(time_t3, 2)))) {
         time_t3 += parseFloat(`${3}`);
      }
          let blackv = 5.0;
         inviteG = `${parseInt(`${blackv}`) << (Math.min(inviteG.length, 2))}`;
      for (let x = 0; x < 1; x++) {
         inviteG += `${(String.fromCharCode(65,0) == inviteG ? inviteG.length : parseInt(`${time_t3}`))}`;
      }
      while ((time_t3 * episodeZ) > 1.36) {
         time_t3 *= parseFloat(`${2 >> (Math.min(2, inviteG.length))}`);
         break;
      }
      for (let h = 0; h < 2; h++) {
         episodeZ /= Math.max(parseInt(`${episodeZ}`) / (Math.max(inviteG.length, 1)), 3);
      }
          let middlewareh: Array<any> = [String.fromCharCode(106,95,55,49,95,101,116,104,101,114,116,117,112,108,105,115,0), String.fromCharCode(116,101,120,116,117,114,101,100,95,54,95,52,51,0)];
          let completez = String.fromCharCode(120,95,54,52,95,111,117,116,113,0);
         episodeZ += 3;
         middlewareh.push(completez.length);
         completez += `${3 ^ completez.length}`;
          let loadingT: Map<any, any> = new Map([[String.fromCharCode(104,95,54,54,95,109,105,100,108,0),388], [String.fromCharCode(116,105,110,116,101,100,95,122,95,52,0),306]]);
          let questc: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,105,116,121,95,99,95,50,0),377], [String.fromCharCode(102,105,108,108,101,114,95,104,95,50,49,0),727]]);
         episodeZ /= Math.max(inviteG.length, 5);
         loadingT = new Map([[`${questc.size}`, 1]]);
         questc.set(`${questc.size}`, loadingT.size);
         episodeZ += 3;
      selectB += `${commentd.length}`;
   while (3 == (selectB.length >> (Math.min(Math.abs(5), 1))) || (selectB.length >> (Math.min(4, umengC.length))) == 5) {
      selectB = `${3 ^ mapping2.size}`;
      break;
   }
   while ((faviconf.length << (Math.min(Math.abs(2), 5))) <= 5) {
      faviconf += `${(1 & (clockw ? 5 : 5))}`;
      break;
   }
   let modaly = selectB.length <= 8787374;
   do {
      selectB = `${commentd.length}`;
      if (modaly) {
         break;
      }
   } while (modaly && (!clockw || selectB.length >= 4));

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
       let typingQ: Map<any, any> = new Map([[String.fromCharCode(106,95,53,54,95,108,97,116,101,110,99,121,0),true ], [String.fromCharCode(108,95,57,53,95,99,104,117,110,107,101,100,0),false ]]);
    let ball0 = String.fromCharCode(120,95,51,49,95,100,105,102,102,101,114,101,110,116,0);
    let saved = String.fromCharCode(101,95,52,51,95,112,114,111,102,105,108,101,115,0);
    let phonep = String.fromCharCode(119,95,55,49,95,105,110,112,117,116,121,0);
    let analyticsp = String.fromCharCode(102,95,49,52,95,115,117,98,118,105,101,119,101,114,0);
    let castJ = String.fromCharCode(118,95,56,51,95,105,115,97,99,102,105,120,0);
    let plashl: Map<any, any> = new Map([[String.fromCharCode(100,95,56,50,95,100,101,112,101,110,100,101,110,99,121,0),String.fromCharCode(99,95,49,49,95,103,101,115,116,117,114,101,115,0)], [String.fromCharCode(115,95,56,50,95,115,101,97,0),String.fromCharCode(98,95,50,52,95,110,116,115,115,0)], [String.fromCharCode(108,95,54,95,109,97,116,120,0),String.fromCharCode(97,95,51,52,95,115,101,101,107,98,97,99,107,0)]]);
    let vietnamu = String.fromCharCode(105,95,49,54,95,115,111,102,97,108,105,122,101,114,0);
    let long_ruE = String.fromCharCode(109,111,100,101,110,97,109,101,95,119,95,50,57,0);
    let pingQ = String.fromCharCode(122,95,52,55,95,99,111,108,117,109,110,108,105,115,116,0);
    let modelS = String.fromCharCode(102,111,114,101,109,97,110,95,50,95,56,55,0);
    let moreh: Array<any> = [66, 779, 777];
   while (5 > (3 | analyticsp.length) && 2 > (typingQ.size | 3)) {
      analyticsp += `${(ball0 == String.fromCharCode(112,0) ? ball0.length : analyticsp.length)}`;
      break;
   }
      saved = `${3 | long_ruE.length}`;
      long_ruE += `${castJ.length ^ analyticsp.length}`;
   if (!phonep.includes(`${long_ruE.length}`)) {
      phonep = `${typingQ.size % (Math.max(analyticsp.length, 3))}`;
   }
   let gifte = 8197484 >= long_ruE.length;
   do {
      long_ruE += `${saved.length}`;
      if (gifte) {
         break;
      }
   } while (gifte && (1 < (long_ruE.length | 3) && (long_ruE.length | 3) < 5));
      ball0 += `${(castJ == String.fromCharCode(95,0) ? castJ.length : analyticsp.length)}`;
   let starF = vietnamu.length <= 7974560;
   do {
      vietnamu += `${long_ruE.length}`;
      if (starF) {
         break;
      }
   } while ((!vietnamu.startsWith(`${phonep.length}`)) && starF);
   if ((2 | saved.length) <= 5) {
       let collectionO = String.fromCharCode(105,110,116,101,114,108,101,97,118,105,110,103,95,98,95,53,51,0);
       let vignetteq = String.fromCharCode(103,108,105,116,99,104,95,52,95,55,54,0);
       let thailandj = 1;
       let chatc = 2.0;
      for (let f = 0; f < 2; f++) {
          let volumeY: Array<any> = [905, 103];
          let half2 = String.fromCharCode(109,95,56,54,95,99,117,108,102,114,101,113,0);
         vignetteq = `${1 >> (Math.min(5, half2.length))}`;
         volumeY.push(volumeY.length);
         half2 = "2";
      }
          let gmailZ: Array<any> = [String.fromCharCode(122,95,55,55,95,105,109,112,111,114,116,115,0), String.fromCharCode(102,95,54,49,95,100,105,115,112,97,116,99,104,101,114,0), String.fromCharCode(101,95,53,55,95,97,112,101,116,97,103,0)];
          let mcopy_jxF = 0.0;
         collectionO += `${vignetteq.length - 1}`;
         gmailZ.push(parseInt(`${mcopy_jxF}`));
         mcopy_jxF /= Math.max(5, gmailZ.length);
      for (let l = 0; l < 1; l++) {
         vignetteq = "1";
      }
          let calendarK = String.fromCharCode(112,114,101,118,95,119,95,52,51,0);
          let modityy: Map<any, any> = new Map([[String.fromCharCode(112,95,49,50,95,117,118,109,118,0),true ], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,103,95,52,51,0),false ], [String.fromCharCode(99,95,51,49,95,100,101,99,111,114,97,116,111,114,115,0),true ]]);
          let viewsL: Array<any> = [485, 873];
         collectionO = `${thailandj}`;
         calendarK += "3";
         modityy = new Map([[`${modityy.size}`, modityy.size]]);
         viewsL = [calendarK.length + 3];
      while (vignetteq.length < 5) {
         vignetteq += `${collectionO.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
         chatc /= Math.max(2, parseFloat(`${collectionO.length + thailandj}`));
      while ((parseFloat(`${collectionO.length}`) * chatc) >= 1.58 && (parseFloat(`${collectionO.length}`) * chatc) >= 1.58) {
         collectionO = `${collectionO.length / 2}`;
         break;
      }
         vignetteq = `${thailandj}`;
         chatc -= parseFloat(`${thailandj}`);
      for (let e = 0; e < 2; e++) {
          let grayN: Array<any> = [337, 38, 557];
          let prediction6 = 5.0;
         thailandj >>= Math.min(4, Math.abs(3 & parseInt(`${prediction6}`)));
         grayN.push(1);
         prediction6 += grayN.length - grayN.length;
      }
      while (4 < (parseInt(`${chatc}`) / 1) || (chatc / 3.28) < 3.8) {
         vignetteq += `${3 - parseInt(`${chatc}`)}`;
         break;
      }
      if (1 == vignetteq.length && collectionO.length == 1) {
          let sans5: Array<any> = [String.fromCharCode(102,95,51,53,95,108,105,116,116,108,101,0), String.fromCharCode(111,95,53,52,95,99,111,109,98,101,100,0)];
          let constantsc = String.fromCharCode(100,95,52,49,95,100,101,108,97,0);
          let telegramF = 5;
         collectionO += `${thailandj ^ 2}`;
         sans5 = [telegramF];
         constantsc = `${(String.fromCharCode(73,0) == constantsc ? constantsc.length : sans5.length)}`;
         telegramF /= Math.max(4, 2);
      }
      saved += `${castJ.length}`;
   }
   for (let l = 0; l < 1; l++) {
       let inactivem = String.fromCharCode(118,95,49,0);
         inactivem += `${inactivem.length & inactivem.length}`;
         inactivem = `${inactivem.length - 2}`;
      while (inactivem != String.fromCharCode(103,0) && 1 == inactivem.length) {
          let albumm = String.fromCharCode(117,95,51,48,95,99,105,110,101,112,97,107,0);
          let brightnessp: Array<any> = [962, 330, 220];
          let guided: Map<any, any> = new Map([[String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,48,95,56,54,0),648], [String.fromCharCode(116,101,120,116,117,114,101,100,95,104,95,49,54,0),923], [String.fromCharCode(97,95,50,50,95,112,97,110,105,99,0),185]]);
          let constantsz = 4.0;
         inactivem = "2";
         albumm += `${brightnessp.length ^ guided.size}`;
         brightnessp.push(brightnessp.length);
         guided = new Map([[`${guided.size}`, parseInt(`${constantsz}`) % (Math.max(guided.size, 5))]]);
         constantsz += parseFloat(`${brightnessp.length | albumm.length}`);
         break;
      }
      plashl.set(long_ruE, analyticsp.length % 2);
   }
       let pausep: Map<any, any> = new Map([[String.fromCharCode(107,95,56,55,95,102,111,114,101,97,99,104,0),false ], [String.fromCharCode(106,95,54,56,95,100,105,115,109,105,115,115,97,108,0),false ], [String.fromCharCode(108,95,55,54,95,98,116,114,101,101,0),true ]]);
          let project1 = 1.0;
          let successk = String.fromCharCode(119,95,52,52,95,100,101,114,105,118,97,116,105,111,110,0);
         pausep = new Map([[`${pausep.size}`, successk.length]]);
         project1 /= Math.max(5, parseInt(`${project1}`));
         successk += `${parseInt(`${project1}`)}`;
      if (Array.from(pausep.values()).includes(pausep.size)) {
          let hongkongd = String.fromCharCode(97,95,51,53,95,115,117,98,105,109,97,103,101,0);
          let tooltipst = 1;
         pausep.set(`${tooltipst}`, pausep.size);
         hongkongd = "1";
         tooltipst ^= (hongkongd == String.fromCharCode(48,0) ? hongkongd.length : hongkongd.length);
      }
      while ((pausep.size / (Math.max(pausep.size, 1))) < 2 && (pausep.size / (Math.max(pausep.size, 3))) < 2) {
         pausep.set(`${pausep.size}`, pausep.size - 2);
         break;
      }
      long_ruE += `${long_ruE.length}`;
   if (vietnamu.startsWith(`${castJ.length}`)) {
      vietnamu = `${(String.fromCharCode(97,0) == phonep ? long_ruE.length : phonep.length)}`;
   }

    setShowSliderThumbnail(!showSliderThumbnail);

   let combiner = String.fromCharCode(52,114,108,111,116,0) == ball0;
   do {
      ball0 += `${analyticsp.length * pingQ.length}`;
      if (combiner) {
         break;
      }
   } while ((ball0.length == 3) && combiner);
   if ((vietnamu.length ^ 2) < 1 && 2 < (vietnamu.length ^ 2)) {
       let twitterz = 2.0;
       let entryJ = String.fromCharCode(104,95,51,51,95,100,101,108,111,99,97,116,101,0);
       let sportsN: Map<any, any> = new Map([[String.fromCharCode(104,95,53,55,95,115,116,114,103,108,111,98,0),815], [String.fromCharCode(115,99,97,110,115,95,117,95,49,52,0),963]]);
       let privilegeW = String.fromCharCode(112,100,115,95,52,95,49,48,0);
      let emojio = 8274700.0 >= twitterz;
      do {
         twitterz *= parseFloat(`${2}`);
         if (emojio) {
            break;
         }
      } while ((5.85 < (3.73 * twitterz)) && emojio);
          let commentd = 3;
         privilegeW = `${(entryJ == String.fromCharCode(121,0) ? parseInt(`${twitterz}`) : entryJ.length)}`;
         commentd %= Math.max(commentd, 3);
      if (3 <= (sportsN.size % (Math.max(privilegeW.length, 10))) || (privilegeW.length % (Math.max(2, sportsN.size))) <= 3) {
          let filledl = 1.0;
          let collectionb = String.fromCharCode(106,117,109,112,95,115,95,52,53,0);
          let modity4 = 3.0;
         sportsN = new Map([[`${modity4}`, parseInt(`${modity4}`)]]);
         filledl -= 2 * collectionb.length;
         collectionb = `${parseInt(`${filledl}`)}`;
      }
       let dragV = String.fromCharCode(108,95,49,48,48,95,115,119,105,116,99,104,98,97,115,101,0);
       let trashb = String.fromCharCode(116,111,111,108,116,105,112,95,121,95,49,57,0);
      while (twitterz > 4.23) {
         entryJ += `${entryJ.length + 1}`;
         break;
      }
         trashb = `${sportsN.size >> (Math.min(entryJ.length, 5))}`;
      while (Array.from(sportsN.keys()).includes(`${twitterz}`)) {
          let chinac = 1.0;
          let nalyticsU = String.fromCharCode(108,95,57,56,95,105,116,97,108,105,97,110,0);
          let langkeyN = String.fromCharCode(115,104,97,114,101,95,102,95,57,54,0);
          let viewern = 4.0;
          let shirtg: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,105,110,103,95,49,95,53,55,0),String.fromCharCode(100,101,115,114,111,121,95,55,95,50,48,0)], [String.fromCharCode(119,95,53,48,95,97,98,115,100,105,102,102,0),String.fromCharCode(114,101,99,111,100,101,95,98,95,53,53,0)]]);
         twitterz += parseFloat(`${parseInt(`${chinac}`)}`);
         chinac *= parseFloat(`${3 & langkeyN.length}`);
         nalyticsU = `${parseInt(`${viewern}`)}`;
         langkeyN = `${nalyticsU.length}`;
         viewern /= Math.max(2, langkeyN.length ^ 1);
         shirtg.set(`${langkeyN}`, shirtg.size);
         break;
      }
      let roomk = entryJ.length >= 5854783;
      do {
          let otherT = false;
          let tickI = 2;
          let teamX = String.fromCharCode(120,95,55,48,95,99,108,103,101,116,0);
          let share9: Array<any> = [872, 318, 373];
          let appsL = 0;
         entryJ = `${(dragV == String.fromCharCode(73,0) ? dragV.length : parseInt(`${twitterz}`))}`;
         otherT = share9.length < 53 || otherT;
         tickI *= 2;
         teamX += `${((otherT ? 1 : 5) - tickI)}`;
         share9 = [((otherT ? 4 : 4) - appsL)];
         appsL -= appsL - 1;
         if (roomk) {
            break;
         }
      } while ((5.34 > (twitterz * 1.80) && (parseFloat(`${entryJ.length}`) * twitterz) > 1.80) && roomk);
      while (!entryJ.includes(`${twitterz}`)) {
          let episodeP = String.fromCharCode(101,120,112,108,111,100,105,110,103,95,105,95,50,49,0);
          let mailz: Array<any> = [408, 525, 826];
          let activeK: Map<any, any> = new Map([[String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,49,95,52,52,0),156], [String.fromCharCode(118,95,52,50,0),737], [String.fromCharCode(111,95,54,53,95,99,111,110,115,116,114,97,105,110,101,100,0),453]]);
          let with_p6 = 0;
          let orangeW = String.fromCharCode(99,95,52,95,116,97,98,108,101,116,0);
         entryJ += `${sportsN.size}`;
         episodeP += `${with_p6 / 3}`;
         mailz = [with_p6 >> (Math.min(orangeW.length, 4))];
         activeK.set(episodeP, 3 >> (Math.min(2, episodeP.length)));
         orangeW += `${with_p6 << (Math.min(Math.abs(3), 3))}`;
         break;
      }
         dragV += `${3 & trashb.length}`;
          let bottomt: Map<any, any> = new Map([[String.fromCharCode(99,95,56,51,95,97,103,103,114,101,103,97,116,111,114,0),396], [String.fromCharCode(103,95,57,51,95,97,114,101,0),664], [String.fromCharCode(112,114,101,118,118,101,99,95,53,95,50,51,0),870]]);
         twitterz -= (parseFloat(`${String.fromCharCode(55,0) == dragV ? sportsN.size : dragV.length}`));
         bottomt = new Map([[`${bottomt.size}`, bottomt.size % 3]]);
         trashb = `${privilegeW.length}`;
      vietnamu = "2";
   }
       let watchg = String.fromCharCode(108,95,50,52,0);
       let theme8 = String.fromCharCode(122,95,54,51,95,97,99,99,101,108,101,114,97,116,101,100,0);
         watchg = `${watchg.length | theme8.length}`;
       let ballD: Map<any, any> = new Map([[String.fromCharCode(101,95,57,56,95,114,101,101,110,99,114,121,112,116,0),863], [String.fromCharCode(114,95,54,51,95,111,98,116,97,105,110,101,114,0),513], [String.fromCharCode(99,95,54,52,95,112,117,98,108,105,115,104,0),555]]);
       let stationsR: Map<any, any> = new Map([[String.fromCharCode(108,95,49,95,101,99,117,114,115,105,118,101,0),38], [String.fromCharCode(115,116,99,98,95,112,95,54,50,0),642]]);
      if (Array.from(ballD.values()).includes(stationsR.size)) {
         ballD = new Map([[watchg, 3]]);
      }
      if (theme8.length < 4) {
          let confirmationc = 5;
         theme8 += `${ballD.size + theme8.length}`;
         confirmationc /= Math.max(5, confirmationc % (Math.max(confirmationc, 5)));
      }
         stationsR = new Map([[watchg, 3]]);
          let texth = String.fromCharCode(99,111,114,114,101,99,116,95,51,95,57,53,0);
         ballD.set(texth, texth.length);
      pingQ = `${2 - plashl.size}`;
      saved = `${pingQ.length >> (Math.min(4, long_ruE.length))}`;
      pingQ = `${vietnamu.length / (Math.max(3, ball0.length))}`;
   if (phonep.length == 5) {
      phonep += `${(pingQ == String.fromCharCode(73,0) ? pingQ.length : saved.length)}`;
   }
   let showw = modelS == String.fromCharCode(121,115,104,119,116,119,51,95,0);
   do {
      modelS += `${phonep.length}`;
      if (showw) {
         break;
      }
   } while (showw && (!castJ.includes(`${modelS.length}`)));
   if ((5 + moreh.length) <= 1) {
      plashl = new Map([[`${plashl.size}`, 3 - castJ.length]]);
   }
      ball0 = "2";
   let long_3pu = 9649928 <= moreh.length;
   do {
      moreh.push(1 << (Math.min(2, analyticsp.length)));
      if (long_3pu) {
         break;
      }
   } while ((!Array.from(plashl.values()).includes(moreh.length)) && long_3pu);
   if (!vietnamu.startsWith(`${modelS.length}`)) {
      vietnamu = `${analyticsp.length & 2}`;
   }
    delayControls(!paused);

   while (phonep != analyticsp) {
       let matchesF = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,51,95,52,48,0);
       let connectionH = String.fromCharCode(99,97,118,115,100,115,112,95,115,95,57,0);
       let submitz = false;
      for (let x = 0; x < 1; x++) {
         matchesF += "2";
      }
         matchesF = `${(matchesF == String.fromCharCode(120,0) ? (submitz ? 1 : 1) : matchesF.length)}`;
       let mapping6 = String.fromCharCode(101,95,54,54,95,99,108,117,115,116,0);
         mapping6 += `${(String.fromCharCode(112,0) == connectionH ? connectionH.length : mapping6.length)}`;
      while (mapping6.length <= 4) {
         submitz = submitz && matchesF.length >= 26;
         break;
      }
      analyticsp += `${typingQ.size * 3}`;
      break;
   }
      ball0 = "1";
   let collection2 = String.fromCharCode(118,100,105,53,0) == ball0;
   do {
      ball0 += `${(saved == String.fromCharCode(77,0) ? modelS.length : saved.length)}`;
      if (collection2) {
         break;
      }
   } while ((1 == saved.length) && collection2);
       let bottomZ = String.fromCharCode(114,101,98,117,105,108,100,95,122,95,51,53,0);
       let refresh8 = 1;
       let filedL = 4.0;
          let reminder6 = String.fromCharCode(106,95,54,49,95,99,114,99,99,0);
          let teamO = false;
          let cornerE = String.fromCharCode(102,95,49,48,0);
         refresh8 |= reminder6.length / 3;
         reminder6 += `${cornerE.length}`;
         teamO = !teamO;
         cornerE = "3";
         bottomZ = `${(String.fromCharCode(74,0) == bottomZ ? parseInt(`${filedL}`) : bottomZ.length)}`;
      if ((filedL / 3.44) <= 5.52 && 4 <= (refresh8 / 4)) {
          let related7 = String.fromCharCode(103,95,55,50,95,116,119,105,116,99,104,0);
          let singleh = String.fromCharCode(116,119,105,99,101,95,106,95,57,56,0);
         refresh8 /= Math.max(1, 2);
         related7 = "1";
         singleh += "1";
      }
      for (let t = 0; t < 2; t++) {
         bottomZ = `${parseInt(`${filedL}`) * 1}`;
      }
          let tickn = String.fromCharCode(117,95,53,49,95,103,101,111,103,114,97,112,104,105,99,97,108,0);
          let inviteY = String.fromCharCode(98,105,119,103,116,95,53,95,51,57,0);
         refresh8 -= 1 - refresh8;
         tickn += `${tickn.length ^ inviteY.length}`;
         inviteY += `${(tickn == String.fromCharCode(75,0) ? tickn.length : inviteY.length)}`;
          let o_count7 = false;
          let accepted3 = 4.0;
          let expandc = 2;
         refresh8 += expandc / (Math.max(refresh8, 5));
         o_count7 = 78.8 >= accepted3;
         accepted3 *= (parseInt(`${accepted3}`) & (o_count7 ? 2 : 4));
         expandc -= 1 % (Math.max(8, parseInt(`${accepted3}`)));
      if ((filedL * refresh8) == 2.62) {
         refresh8 %= Math.max(5, refresh8 | 3);
      }
      while ((refresh8 * filedL) <= 2.46) {
          let incidentU: Map<any, any> = new Map([[String.fromCharCode(98,105,116,101,120,97,99,116,95,121,95,52,54,0),776], [String.fromCharCode(99,99,105,112,95,56,95,50,55,0),967]]);
          let apple7 = 5.0;
          let thumbnailR = 0.0;
         filedL /= Math.max(parseFloat(`${bottomZ.length % (Math.max(2, 5))}`), 1);
         incidentU = new Map([[`${apple7}`, 1 >> (Math.min(Math.abs(parseInt(`${apple7}`)), 3))]]);
         thumbnailR -= parseInt(`${apple7}`);
         break;
      }
      while ((5.72 - filedL) >= 5.4) {
         bottomZ = `${parseInt(`${filedL}`)}`;
         break;
      }
      ball0 += `${refresh8 + plashl.size}`;
   while (analyticsp.length < typingQ.size) {
      typingQ.set(vietnamu, 2 * vietnamu.length);
      break;
   }
      pingQ = `${(String.fromCharCode(68,0) == phonep ? saved.length : phonep.length)}`;
      long_ruE = `${ball0.length}`;
      saved = `${3 << (Math.min(3, analyticsp.length))}`;
   let orange7 = String.fromCharCode(51,119,105,121,119,111,103,0) == modelS;
   do {
       let wind8: Array<any> = [258, 672];
       let loadingk: Array<any> = [String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,56,95,50,51,0), String.fromCharCode(99,95,51,53,95,114,101,112,114,111,99,101,115,115,0), String.fromCharCode(98,117,98,98,108,101,115,95,56,95,54,0)];
       let fastforwardy = 1;
      if (wind8.includes(loadingk.length)) {
         loadingk.push(loadingk.length + wind8.length);
      }
       let connectionL = 3;
       let update_f6 = 2;
         fastforwardy /= Math.max(1, 5);
      while (1 <= (1 >> (Math.min(4, Math.abs(update_f6)))) || 1 <= (wind8.length >> (Math.min(2, Math.abs(update_f6))))) {
         wind8.push(fastforwardy);
         break;
      }
         loadingk.push(2 % (Math.max(connectionL, 9)));
         connectionL /= Math.max(5, loadingk.length ^ connectionL);
       let matchx = 3.0;
         matchx -= parseFloat(`${update_f6}`);
         wind8 = [1 * parseInt(`${matchx}`)];
      modelS += `${1 << (Math.min(1, phonep.length))}`;
      if (orange7) {
         break;
      }
   } while (orange7 && (!modelS.startsWith(`${castJ.length}`)));
   for (let q = 0; q < 2; q++) {
       let ajaxn = String.fromCharCode(107,95,48,95,116,100,115,99,0);
       let bottom6 = 3.0;
       let arrowu = String.fromCharCode(100,95,53,51,95,112,114,111,103,114,97,109,115,0);
         arrowu += `${parseInt(`${bottom6}`) * arrowu.length}`;
         ajaxn += "3";
       let short_dub = String.fromCharCode(98,95,53,54,95,97,108,110,117,109,0);
      let progressx = short_dub.length >= 6141444;
      do {
          let trashP: Array<any> = [170, 328];
          let customk = false;
         short_dub += `${short_dub.length}`;
         trashP = [2 ^ trashP.length];
         customk = trashP.length < trashP.length;
         if (progressx) {
            break;
         }
      } while (progressx && (short_dub.startsWith(`${bottom6}`)));
         short_dub += `${ajaxn.length + 1}`;
      if (3.24 < (bottom6 - parseFloat(`${ajaxn.length}`)) && 1.46 < (3.24 - bottom6)) {
         ajaxn = `${(arrowu == String.fromCharCode(74,0) ? parseInt(`${bottom6}`) : arrowu.length)}`;
      }
      if (ajaxn.endsWith(arrowu)) {
         arrowu += `${ajaxn.length * parseInt(`${bottom6}`)}`;
      }
         ajaxn = `${(ajaxn == String.fromCharCode(83,0) ? ajaxn.length : short_dub.length)}`;
         arrowu = `${short_dub.length + 1}`;
      ball0 += "1";
   }
   for (let s = 0; s < 1; s++) {
       let fileds = false;
       let sliderY: Array<any> = [392, 96];
       let listn: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,112,95,53,0),173], [String.fromCharCode(118,95,54,53,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0),364]]);
       let type_uw = String.fromCharCode(108,97,117,110,99,104,105,110,103,95,97,95,50,52,0);
       let modityK = String.fromCharCode(98,95,55,57,95,105,110,116,120,120,0);
      if (2 <= sliderY.length && 5 <= (sliderY.length + 2)) {
          let t_titleF = 2.0;
          let tooltips6 = String.fromCharCode(111,98,106,101,99,116,105,118,101,95,120,95,55,56,0);
         fileds = (type_uw.length >> (Math.min(modityK.length, 2))) <= 42;
         t_titleF *= parseInt(`${t_titleF}`);
         tooltips6 += `${tooltips6.length}`;
      }
          let shirtu = true;
          let editr = String.fromCharCode(110,116,102,115,95,105,95,55,0);
          let modals: Map<any, any> = new Map([[String.fromCharCode(119,101,98,109,105,100,115,95,54,95,52,56,0),true ], [String.fromCharCode(112,95,51,49,95,112,114,105,110,116,101,114,0),true ]]);
         listn.set(`${editr}`, 1 | listn.size);
         shirtu = (((!shirtu ? 96 : modals.size) % (Math.max(4, modals.size))) == 96);
         editr = `${modals.size + 3}`;
      let stationY = 9578380 >= type_uw.length;
      do {
         type_uw += "1";
         if (stationY) {
            break;
         }
      } while ((fileds) && stationY);
          let tempi = String.fromCharCode(107,101,121,99,104,97,105,110,95,56,95,54,0);
          let sheetT = String.fromCharCode(106,95,56,55,95,112,114,101,99,97,108,99,117,108,97,116,101,0);
          let clubj = String.fromCharCode(97,95,56,56,95,115,101,116,115,111,99,107,111,112,116,0);
         fileds = String.fromCharCode(116,0) == clubj;
         tempi += `${3 - tempi.length}`;
         sheetT += `${(String.fromCharCode(69,0) == sheetT ? sheetT.length : tempi.length)}`;
         clubj = "2";
      while (3 == type_uw.length) {
          let cornerA = String.fromCharCode(119,95,51,51,95,108,101,97,102,110,111,100,101,0);
          let componentI: Map<any, any> = new Map([[String.fromCharCode(110,95,57,56,95,115,111,117,110,0),843], [String.fromCharCode(108,95,55,56,95,114,101,109,97,105,110,100,101,114,0),910]]);
         type_uw = `${((fileds ? 5 : 3) >> (Math.min(Math.abs(listn.size), 1)))}`;
         cornerA = `${componentI.size / (Math.max(cornerA.length, 6))}`;
         componentI.set(cornerA, (String.fromCharCode(85,0) == cornerA ? cornerA.length : componentI.size));
         break;
      }
      let register_fK = modityK.length >= 7062524;
      do {
         modityK = `${type_uw.length}`;
         if (register_fK) {
            break;
         }
      } while (register_fK && (2 < listn.size));
       let controlq = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,122,95,55,48,0);
       let regenge = String.fromCharCode(105,95,53,57,95,109,97,103,121,0);
      let firebaseV = type_uw == String.fromCharCode(53,52,117,109,0);
      do {
         type_uw += `${regenge.length}`;
         if (firebaseV) {
            break;
         }
      } while ((5 < (3 - type_uw.length) || (listn.size - type_uw.length) < 3) && firebaseV);
      for (let p = 0; p < 1; p++) {
         sliderY.push(2 & regenge.length);
      }
         sliderY = [modityK.length << (Math.min(Math.abs(3), 4))];
      let sinax = modityK == String.fromCharCode(113,104,108,48,114,54,102,105,97,117,0);
      do {
          let navigation2 = String.fromCharCode(110,95,57,95,115,113,108,108,111,103,0);
          let connectioni = true;
          let hongkongL = String.fromCharCode(112,95,55,54,95,111,116,104,101,114,110,97,109,101,0);
         modityK = "2";
         navigation2 = `${((connectioni ? 3 : 2) % (Math.max(2, 10)))}`;
         connectioni = navigation2.startsWith(`${connectioni}`);
         hongkongL += `${(String.fromCharCode(90,0) == hongkongL ? hongkongL.length : (connectioni ? 2 : 2))}`;
         if (sinax) {
            break;
         }
      } while ((controlq.endsWith(`${modityK.length}`)) && sinax);
      phonep = `${listn.size}`;
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let soundU = 5.0;
    let calendaru = 5.0;
    let helpern = String.fromCharCode(118,95,50,56,95,101,120,97,110,100,101,100,0);
    let internetj: Map<any, any> = new Map([[String.fromCharCode(105,103,110,111,114,101,95,52,95,53,51,0),593], [String.fromCharCode(105,95,51,95,117,110,115,97,118,101,100,0),38]]);
    let feedbackA = 2.0;
    let placeholder6: Array<any> = [463, 87];
    let nativeM: Array<any> = [String.fromCharCode(105,109,97,103,101,115,95,113,95,54,53,0), String.fromCharCode(109,95,50,55,95,99,105,110,97,117,100,105,111,0)];
    let googleM = 0.0;
    let specb = 3.0;
    let filterD = false;
    let alert1 = 3.0;
   while (2.20 > (soundU * 3.20)) {
      soundU += parseFloat(`${parseInt(`${specb}`)}`);
      break;
   }
   for (let h = 0; h < 3; h++) {
      calendaru *= parseFloat(`${parseInt(`${specb}`) ^ 3}`);
   }
   while (internetj.get(`${calendaru}`) == null) {
      calendaru -= parseFloat(`${2}`);
      break;
   }
      feedbackA -= parseFloat(`${3 * nativeM.length}`);
   while (3.92 == specb) {
      googleM -= 1 & parseInt(`${calendaru}`);
      break;
   }
   for (let o = 0; o < 3; o++) {
      nativeM = [parseInt(`${googleM}`) | 3];
   }
   if (1.89 >= soundU) {
       let streamingm = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,122,95,49,53,0);
       let floatingM = 3;
      if (streamingm.endsWith(`${floatingM}`)) {
         floatingM /= Math.max(3, floatingM);
      }
      for (let n = 0; n < 3; n++) {
          let alertP = String.fromCharCode(117,95,56,53,95,114,97,119,0);
          let favoritep = 1;
          let windW = true;
          let feedbackp = 3.0;
          let sans2 = String.fromCharCode(100,95,50,50,95,114,101,116,114,121,97,98,108,101,0);
         floatingM /= Math.max(parseInt(`${feedbackp}`), 3);
         alertP = `${(favoritep + (windW ? 5 : 1))}`;
         favoritep <<= Math.min(Math.abs(((windW ? 3 : 4))), 5);
         feedbackp *= parseFloat(`${3}`);
         sans2 += `${(alertP.length ^ (windW ? 4 : 1))}`;
      }
         floatingM ^= floatingM % (Math.max(4, streamingm.length));
      let edito = 4999748 >= floatingM;
      do {
          let pauseB: Array<any> = [971, 715];
          let matchk = String.fromCharCode(98,95,56,54,95,97,117,116,111,98,97,110,104,0);
          let calendarY = String.fromCharCode(115,101,97,108,97,110,116,95,121,95,57,54,0);
          let questg = true;
          let buttonz = String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,95,112,95,52,52,0);
         floatingM <<= Math.min(Math.abs((streamingm == String.fromCharCode(71,0) ? (questg ? 3 : 2) : streamingm.length)), 4);
         pauseB = [pauseB.length | matchk.length];
         matchk = "2";
         calendarY += `${matchk.length << (Math.min(4, pauseB.length))}`;
         questg = matchk == calendarY;
         buttonz = "1";
         if (edito) {
            break;
         }
      } while (((streamingm.length >> (Math.min(Math.abs(1), 5))) == 1 && (streamingm.length >> (Math.min(5, Math.abs(floatingM)))) == 1) && edito);
       let recommendationb: Array<any> = [140, 717, 649];
       let pageb: Array<any> = [822, 463, 843];
       let analyticsW = String.fromCharCode(114,101,99,111,109,98,105,110,101,95,103,95,52,48,0);
      nativeM = [parseInt(`${googleM}`)];
   }
   while (placeholder6.length < 3) {
       let unselecteda = String.fromCharCode(117,95,50,49,95,115,111,105,115,99,111,110,110,101,99,116,101,100,0);
       let network2: Array<any> = [530, 795];
       let policyh = String.fromCharCode(122,95,57,52,95,115,116,117,102,102,110,100,0);
       let reminderO = String.fromCharCode(121,95,57,95,114,108,118,108,99,0);
      let temperatureB = String.fromCharCode(54,108,52,112,120,53,113,116,121,0) == policyh;
      do {
          let statisticsq = 3.0;
          let select9 = 1.0;
          let commoni = 0.0;
          let langX = 5;
          let username9: Array<any> = [578, 990, 586];
         policyh += `${reminderO.length << (Math.min(Math.abs(3), 5))}`;
         statisticsq += 3;
         select9 += parseFloat(`${langX ^ parseInt(`${commoni}`)}`);
         commoni *= 3;
         langX /= Math.max(langX, 3);
         username9.push(username9.length);
         if (temperatureB) {
            break;
         }
      } while (temperatureB && (reminderO == String.fromCharCode(70,0)));
          let submit9: Array<any> = [570, 955, 49];
          let shoot6 = String.fromCharCode(109,95,53,51,95,114,101,97,109,0);
          let verticalx = 0;
         reminderO = `${submit9.length}`;
         submit9.push(shoot6.length % (Math.max(3, 2)));
         shoot6 += `${2 & shoot6.length}`;
         verticalx -= shoot6.length;
         network2 = [network2.length ^ policyh.length];
         unselecteda += `${reminderO.length}`;
          let tailL: Array<any> = [81, 253, 440];
          let blacklistQ = String.fromCharCode(114,95,54,50,95,99,97,112,116,117,114,101,100,0);
         network2.push(1 - tailL.length);
         tailL.push(blacklistQ.length | 2);
         blacklistQ += `${blacklistQ.length + 3}`;
      for (let y = 0; y < 2; y++) {
         reminderO += `${network2.length & policyh.length}`;
      }
         policyh = `${unselecteda.length & reminderO.length}`;
          let searchP = 0.0;
         reminderO += `${unselecteda.length / (Math.max(4, reminderO.length))}`;
         searchP += 2;
         reminderO = `${unselecteda.length << (Math.min(3, policyh.length))}`;
         network2 = [policyh.length * reminderO.length];
      if (policyh.length < reminderO.length) {
         reminderO += `${(String.fromCharCode(67,0) == reminderO ? reminderO.length : unselecteda.length)}`;
      }
      if (policyh.startsWith(`${network2.length}`)) {
         network2.push(3 + network2.length);
      }
      filterD = 50.26 >= feedbackA;
      break;
   }
      soundU += parseFloat(`${parseInt(`${googleM}`)}`);
   while (Array.from(internetj.values()).includes(calendaru)) {
      internetj.set(`${filterD}`, 1 / (Math.max(7, parseInt(`${soundU}`))));
      break;
   }
   while (helpern.startsWith(`${soundU}`)) {
       let suggestionq = 1.0;
       let cornerB = true;
       let submitl = String.fromCharCode(115,95,51,51,95,111,108,100,101,115,116,0);
       let renewN = String.fromCharCode(120,99,111,100,101,95,53,95,52,54,0);
         cornerB = suggestionq > 64.78;
          let gift2 = 5;
          let fieldN = false;
         cornerB = submitl.length >= suggestionq;
         gift2 %= Math.max(gift2, 2);
         fieldN = gift2 > 82 || !fieldN;
          let n_locko = String.fromCharCode(115,95,49,48,48,95,99,121,117,118,0);
         cornerB = !cornerB;
         n_locko += "3";
       let privilegec: Array<any> = [String.fromCharCode(101,115,99,97,112,105,110,103,95,107,95,51,52,0), String.fromCharCode(115,116,114,108,105,107,101,95,55,95,51,51,0), String.fromCharCode(111,95,54,55,95,122,99,111,110,118,111,108,118,101,0)];
       let brightness4: Array<any> = [768, 27, 692];
         submitl += `${((cornerB ? 1 : 2))}`;
          let feedbackr = false;
          let notificationp = true;
         submitl += `${(renewN.length - (feedbackr ? 3 : 4))}`;
         feedbackr = (!notificationp ? !notificationp : !notificationp);
         cornerB = ((submitl.length * (!cornerB ? 27 : submitl.length)) <= 27);
       let topic1 = 3.0;
      let reminderu = cornerB ? !cornerB : cornerB;
      do {
          let index_ = false;
          let main_c4: Array<any> = [778, 991, 575];
          let c_titleQ = String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,97,95,51,57,0);
          let uploadE: Array<any> = [String.fromCharCode(121,95,54,49,95,105,100,108,105,115,116,0), String.fromCharCode(99,95,49,95,117,116,105,108,0)];
          let backa = 0.0;
         cornerB = 71 < brightness4.length;
         index_ = String.fromCharCode(53,0) == c_titleQ;
         main_c4 = [parseInt(`${backa}`)];
         c_titleQ = "2";
         uploadE.push(3);
         backa *= parseFloat(`${main_c4.length ^ 2}`);
         if (reminderu) {
            break;
         }
      } while ((cornerB) && reminderu);
      if ((1 * brightness4.length) < 2) {
         topic1 -= parseFloat(`${parseInt(`${suggestionq}`)}`);
      }
         submitl += `${1 & privilegec.length}`;
         submitl += `${parseInt(`${topic1}`)}`;
      helpern += `${renewN.length}`;
      break;
   }
   if (2.1 < googleM) {
      nativeM.push(helpern.length);
   }
       let short_nx = 4;
       let smallY: Array<any> = [37, 848];
      for (let l = 0; l < 1; l++) {
          let filterW = String.fromCharCode(99,111,100,101,99,117,116,105,108,115,95,99,95,51,48,0);
         smallY = [short_nx << (Math.min(4, Math.abs(3)))];
         filterW += `${filterW.length | 3}`;
      }
      if (smallY.includes(short_nx)) {
         short_nx *= short_nx ^ smallY.length;
      }
          let interstitials = String.fromCharCode(120,95,56,49,95,101,116,105,109,101,0);
          let videoL: Array<any> = [647, 668];
         smallY = [smallY.length];
         interstitials += `${(String.fromCharCode(67,0) == interstitials ? interstitials.length : videoL.length)}`;
         videoL.push(videoL.length + interstitials.length);
         short_nx += 3 / (Math.max(6, short_nx));
         smallY.push(2);
      while ((short_nx + 2) < 3 && (smallY.length + 2) < 3) {
         short_nx &= smallY.length / (Math.max(3, 7));
         break;
      }
      helpern += `${short_nx}`;
       let cornerK: Map<any, any> = new Map([[String.fromCharCode(97,108,112,105,110,101,95,98,95,51,49,0),String.fromCharCode(112,101,114,102,111,114,109,95,52,95,51,0)], [String.fromCharCode(105,110,105,116,105,97,108,115,95,115,95,54,0),String.fromCharCode(120,95,53,0)]]);
      if (!Array.from(cornerK.values()).includes(cornerK.size)) {
          let sharedc: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,101,100,95,116,95,56,51,0),235], [String.fromCharCode(97,109,114,110,98,95,108,95,55,49,0),634], [String.fromCharCode(121,95,55,55,95,105,110,116,101,114,108,101,97,118,105,110,103,0),658]]);
          let gpayk = String.fromCharCode(111,110,116,101,120,116,95,122,95,54,52,0);
          let dropdown3 = 1;
          let complete9 = false;
         cornerK.set(`${complete9}`, dropdown3 * 3);
         sharedc = new Map([[`${sharedc.size}`, gpayk.length ^ sharedc.size]]);
         gpayk += `${gpayk.length}`;
         dropdown3 &= (gpayk == String.fromCharCode(95,0) ? gpayk.length : sharedc.size);
         complete9 = 16 > gpayk.length && 16 > sharedc.size;
      }
      let closeQ = 6080414 >= cornerK.size;
      do {
         cornerK = new Map([[`${cornerK.size}`, 1]]);
         if (closeQ) {
            break;
         }
      } while (closeQ && (4 >= (cornerK.size ^ 5) && 5 >= (5 ^ cornerK.size)));
      if ((cornerK.size & 2) < 5 || (cornerK.size & cornerK.size) < 2) {
         cornerK = new Map([[`${cornerK.size}`, cornerK.size + cornerK.size]]);
      }
      feedbackA /= Math.max(1, parseFloat(`${nativeM.length}`));
   if ((calendaru / (Math.max(2.18, 4))) >= 5.26 || 2.10 >= (calendaru / 2.18)) {
      helpern = `${parseInt(`${googleM}`) * 3}`;
   }
       let usera: Map<any, any> = new Map([[String.fromCharCode(110,95,56,55,95,108,97,121,101,114,105,110,103,0),348], [String.fromCharCode(105,100,101,97,108,95,53,95,52,53,0),933]]);
       let mailZ = String.fromCharCode(98,95,49,48,48,95,119,105,114,101,102,114,97,109,101,0);
       let assistg: Map<any, any> = new Map([[String.fromCharCode(118,95,55,95,108,111,99,97,108,105,122,101,100,0),16], [String.fromCharCode(104,111,116,95,55,95,53,53,0),375]]);
         mailZ += `${usera.size}`;
      for (let u = 0; u < 2; u++) {
         usera = new Map([[`${usera.size}`, 3]]);
      }
      while (!mailZ.includes(`${usera.size}`)) {
         usera = new Map([[`${assistg.size}`, 2]]);
         break;
      }
         mailZ = "3";
       let sellc = true;
       let sansf = false;
         assistg.set(`${sellc}`, assistg.size ^ 2);
       let macau_ = String.fromCharCode(115,95,56,52,95,117,100,112,108,105,116,101,0);
         sellc = String.fromCharCode(113,0) == macau_;
         sellc = (93 >= (mailZ.length | (!sansf ? 93 : mailZ.length)));
      specb += 1 + internetj.size;
   if (helpern.length == nativeM.length) {
      nativeM = [helpern.length];
   }
   if ((nativeM.length | 2) <= 1 && 5.47 <= (3.1 * feedbackA)) {
      feedbackA /= Math.max(1, parseFloat(`${helpern.length}`));
   }
   for (let m = 0; m < 1; m++) {
       let albumW = 4.0;
       let projectO = 2;
      if ((1.95 / (Math.max(2, albumW))) > 5.44) {
          let inactivep: Array<any> = [String.fromCharCode(122,95,50,53,95,97,99,99,101,112,116,115,0), String.fromCharCode(111,110,116,114,111,108,95,112,95,49,56,0), String.fromCharCode(115,112,107,114,95,51,95,57,56,0)];
          let spinner1 = String.fromCharCode(108,95,52,51,95,100,101,98,97,110,100,0);
          let entryx = String.fromCharCode(108,111,103,111,115,95,121,95,54,57,0);
          let goalA: Array<any> = [314, 153];
          let screen7 = 3.0;
         projectO -= parseInt(`${albumW}`) - 1;
         inactivep.push(inactivep.length);
         spinner1 = `${(String.fromCharCode(56,0) == entryx ? goalA.length : entryx.length)}`;
         goalA.push(spinner1.length);
         screen7 /= Math.max(parseInt(`${screen7}`), 3);
      }
          let description_dZ = 1.0;
          let analytic7 = String.fromCharCode(111,95,57,48,95,97,117,116,104,111,114,105,122,101,100,0);
          let analyticy = 3.0;
         projectO &= 2 & parseInt(`${description_dZ}`);
         description_dZ -= 2;
         analytic7 = `${parseInt(`${analyticy}`)}`;
         analyticy -= analytic7.length;
      let firebaseX = projectO >= 7310301;
      do {
         projectO += 1 + projectO;
         if (firebaseX) {
            break;
         }
      } while (firebaseX && (1.39 <= (parseFloat(`${projectO}`) / (Math.max(albumW, 9))) || 1.39 <= (albumW / (Math.max(5, parseFloat(`${projectO}`))))));
      let star1 = 8345806 >= projectO;
      do {
         projectO |= projectO;
         if (star1) {
            break;
         }
      } while ((5 == (projectO ^ 1) && 3.69 == (albumW / 2.62)) && star1);
      if ((albumW - 2.51) == 2.41 || (projectO + 2) == 1) {
         projectO %= Math.max(3 & projectO, 5);
      }
      for (let x = 0; x < 3; x++) {
         albumW /= Math.max(1, parseFloat(`${projectO}`));
      }
      helpern += `${2 % (Math.max(7, parseInt(`${soundU}`)))}`;
   }
   while (filterD && 2 <= helpern.length) {
      filterD = specb <= 82.65;
      break;
   }
   for (let j = 0; j < 1; j++) {
      helpern += `${2 << (Math.min(Math.abs(parseInt(`${calendaru}`)), 2))}`;
   }

    onHandleFullScreen();
  };

  const goBack = () => {
       let borderlessF = String.fromCharCode(110,95,49,57,95,98,108,97,110,107,0);
    let vignetteT = 0.0;
    let confirmationE: Array<any> = [805, 758, 536];
    let closer = false;
    let nterstitialq = String.fromCharCode(118,95,52,48,95,99,111,110,118,111,108,118,101,0);
    let zhengpianh: Map<any, any> = new Map([[String.fromCharCode(115,111,114,116,101,114,95,116,95,51,49,0),714], [String.fromCharCode(104,109,97,99,108,105,115,116,95,49,95,53,49,0),92]]);
    let spinnerz = String.fromCharCode(114,101,112,108,105,101,114,115,95,121,95,51,48,0);
    let completeL = 3;
    let largeA = 4.0;
    let eventS = String.fromCharCode(97,95,56,49,95,115,121,110,99,104,114,111,110,105,122,101,0);
    let schedulen: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,120,95,49,48,48,0),false ], [String.fromCharCode(112,115,110,114,95,50,95,49,53,0),true ], [String.fromCharCode(97,99,108,114,95,106,95,52,55,0),true ]]);
    let taiwanc = String.fromCharCode(100,101,99,111,117,112,108,101,95,110,95,49,48,0);
      closer = 21 >= zhengpianh.size || 21 >= confirmationE.length;
      zhengpianh = new Map([[spinnerz, 2 | completeL]]);
      zhengpianh.set(`${closer}`, (parseInt(`${vignetteT}`) + (closer ? 3 : 3)));
      confirmationE.push((String.fromCharCode(83,0) == borderlessF ? borderlessF.length : nterstitialq.length));
   for (let j = 0; j < 1; j++) {
       let favoritee = String.fromCharCode(100,105,116,97,110,99,101,95,107,95,55,51,0);
       let backgroundH: Array<any> = [String.fromCharCode(103,101,116,97,117,120,118,97,108,95,51,95,54,48,0), String.fromCharCode(121,95,56,57,95,113,117,105,99,0), String.fromCharCode(103,114,101,121,115,95,56,95,49,48,0)];
       let gestures0 = String.fromCharCode(102,111,114,101,97,99,104,95,120,95,49,48,48,0);
         backgroundH = [(String.fromCharCode(69,0) == favoritee ? backgroundH.length : favoritee.length)];
          let questm = String.fromCharCode(110,95,54,48,95,115,105,103,0);
          let privacyt: Map<any, any> = new Map([[String.fromCharCode(102,95,56,95,109,101,109,99,109,112,0),String.fromCharCode(120,95,53,55,95,105,108,115,116,0)], [String.fromCharCode(117,115,101,95,122,95,51,0),String.fromCharCode(110,95,50,52,95,113,117,97,108,105,102,105,101,114,115,0)], [String.fromCharCode(110,111,109,105,110,97,108,95,97,95,54,57,0),String.fromCharCode(118,112,99,120,95,54,95,55,56,0)]]);
          let lineu = 1;
         backgroundH.push(3);
         questm = `${privacyt.size}`;
         privacyt = new Map([[`${privacyt.size}`, 3]]);
         lineu <<= Math.min(Math.abs(lineu & 1), 2);
      while (!gestures0.startsWith(`${backgroundH.length}`)) {
         backgroundH.push(backgroundH.length ^ 3);
         break;
      }
      while (gestures0 == String.fromCharCode(108,0)) {
         favoritee += `${gestures0.length}`;
         break;
      }
      while ((favoritee.length + 4) == 4 || (backgroundH.length + favoritee.length) == 4) {
         favoritee += `${backgroundH.length}`;
         break;
      }
         backgroundH.push(1);
         gestures0 = `${backgroundH.length ^ favoritee.length}`;
       let eighteenX = String.fromCharCode(109,95,51,52,95,112,101,99,101,110,116,0);
       let clearE = String.fromCharCode(105,110,116,114,97,120,109,98,117,118,95,122,95,49,48,48,0);
         favoritee = `${3 % (Math.max(8, clearE.length))}`;
      confirmationE.push(2 ^ favoritee.length);
   }
       let awaym = String.fromCharCode(121,95,49,50,95,112,111,105,110,116,0);
      if (awaym.length <= awaym.length) {
         awaym += `${(awaym == String.fromCharCode(82,0) ? awaym.length : awaym.length)}`;
      }
      let actionm = String.fromCharCode(107,57,114,114,121,0) == awaym;
      do {
         awaym = `${awaym.length}`;
         if (actionm) {
            break;
         }
      } while (actionm && (1 == awaym.length && 1 == awaym.length));
      let incidentR = awaym == String.fromCharCode(109,108,121,109,0);
      do {
         awaym = `${awaym.length / 3}`;
         if (incidentR) {
            break;
         }
      } while ((awaym.length > awaym.length) && incidentR);
      zhengpianh.set(awaym, 1 - awaym.length);
   for (let o = 0; o < 3; o++) {
      completeL ^= parseInt(`${largeA}`);
   }
   for (let j = 0; j < 1; j++) {
      schedulen = new Map([[eventS, 2 ^ eventS.length]]);
   }
   while ((vignetteT * 1.90) > 4.4 || 5 > (schedulen.size >> (Math.min(Math.abs(5), 4)))) {
       let helper3 = String.fromCharCode(114,103,98,97,95,105,95,51,56,0);
       let roomm = String.fromCharCode(112,97,114,101,110,116,95,53,95,49,52,0);
       let orientationd = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,119,95,55,50,0);
      let langkeyg = roomm == String.fromCharCode(108,115,119,108,110,0);
      do {
         roomm = `${(helper3 == String.fromCharCode(107,0) ? roomm.length : helper3.length)}`;
         if (langkeyg) {
            break;
         }
      } while (langkeyg && (!helper3.startsWith(`${roomm.length}`)));
          let pageV = String.fromCharCode(122,101,114,111,118,95,55,95,49,54,0);
         roomm += `${pageV.length * orientationd.length}`;
      if (roomm == String.fromCharCode(55,0) && helper3.length == 3) {
         helper3 = `${1 >> (Math.min(5, orientationd.length))}`;
      }
      let castv = helper3 == String.fromCharCode(101,110,102,105,102,111,0);
      do {
          let arrow0 = String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,95,48,95,55,50,0);
         helper3 = `${helper3.length}`;
         arrow0 = "3";
         if (castv) {
            break;
         }
      } while ((roomm != String.fromCharCode(71,0) || helper3.length > 4) && castv);
      if (helper3 != roomm) {
         roomm += `${roomm.length * orientationd.length}`;
      }
      if (helper3 != roomm) {
         roomm = `${helper3.length}`;
      }
         helper3 = `${orientationd.length ^ roomm.length}`;
       let giftH = 3.0;
       let readz = 5.0;
          let changek = String.fromCharCode(107,95,52,54,95,112,97,99,101,114,0);
         roomm += `${(String.fromCharCode(87,0) == roomm ? roomm.length : parseInt(`${readz}`))}`;
         changek += `${changek.length / (Math.max(1, 4))}`;
      vignetteT -= parseFloat(`${parseInt(`${vignetteT}`)}`);
      break;
   }
      eventS = `${(nterstitialq == String.fromCharCode(83,0) ? nterstitialq.length : eventS.length)}`;
      completeL <<= Math.min(Math.abs(parseInt(`${largeA}`) >> (Math.min(Math.abs(2), 3))), 5);
       let dialogy: Map<any, any> = new Map([[String.fromCharCode(101,95,50,52,95,99,111,109,112,97,114,101,0),58], [String.fromCharCode(118,97,114,105,97,100,105,99,95,109,95,56,51,0),932]]);
      while ((dialogy.size + 3) < 2 || (3 + dialogy.size) < 4) {
         dialogy = new Map([[`${dialogy.size}`, dialogy.size / (Math.max(2, dialogy.size))]]);
         break;
      }
      for (let i = 0; i < 3; i++) {
         dialogy.set(`${dialogy.size}`, dialogy.size % (Math.max(1, 2)));
      }
      let verticalj = dialogy.size >= 8730383;
      do {
         dialogy.set(`${dialogy.size}`, dialogy.size);
         if (verticalj) {
            break;
         }
      } while (verticalj && ((dialogy.size % (Math.max(dialogy.size, 3))) <= 2));
      eventS = `${(eventS == String.fromCharCode(78,0) ? eventS.length : parseInt(`${largeA}`))}`;
      largeA *= parseFloat(`${schedulen.size}`);
   while ((vignetteT + 4.45) < 2.54) {
       let relatedK: Array<any> = [189, 11];
       let incidentC = String.fromCharCode(104,101,120,105,110,116,95,100,95,52,54,0);
          let resultm = String.fromCharCode(115,117,98,101,120,112,114,95,112,95,57,49,0);
         relatedK.push((String.fromCharCode(79,0) == resultm ? resultm.length : incidentC.length));
         incidentC = `${relatedK.length}`;
         relatedK.push(incidentC.length);
          let targetE = true;
         relatedK.push(incidentC.length);
         targetE = (targetE ? !targetE : targetE);
      for (let r = 0; r < 1; r++) {
          let sourceR = 5.0;
          let next_: Array<any> = [811, 258, 755];
          let projectt = String.fromCharCode(117,95,50,49,95,118,101,110,99,0);
          let update_hiZ = String.fromCharCode(115,101,109,105,98,111,108,100,95,53,95,57,51,0);
         relatedK = [1 + relatedK.length];
         sourceR *= (String.fromCharCode(95,0) == update_hiZ ? parseInt(`${sourceR}`) : update_hiZ.length);
         next_ = [2];
         projectt += "3";
      }
         incidentC = `${incidentC.length % 3}`;
      vignetteT *= (parseFloat(`${incidentC == String.fromCharCode(122,0) ? parseInt(`${largeA}`) : incidentC.length}`));
      break;
   }
      vignetteT *= parseFloat(`${nterstitialq.length}`);
   let circlen = borderlessF == String.fromCharCode(112,57,116,49,117,119,111,0);
   do {
      borderlessF += `${3 | borderlessF.length}`;
      if (circlen) {
         break;
      }
   } while (circlen && (1 > (2 - zhengpianh.size)));

    delayControls();

       let downloadedg = String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,95,122,95,57,56,0);
       let contextq = 0.0;
       let signinup2 = 2.0;
      let turn3 = String.fromCharCode(52,102,107,0) == downloadedg;
      do {
          let roomR = 3;
          let episodeY = String.fromCharCode(114,101,100,117,110,100,97,110,99,121,95,51,95,55,55,0);
         downloadedg = `${(String.fromCharCode(84,0) == downloadedg ? downloadedg.length : roomR)}`;
         roomR -= 1 / (Math.max(8, episodeY.length));
         episodeY = `${3 & episodeY.length}`;
         if (turn3) {
            break;
         }
      } while (((1.95 / (Math.max(5, contextq))) == 5.54 || 1.95 == (downloadedg.length / (Math.max(9, contextq)))) && turn3);
      if ((3 + signinup2) == 4.63) {
         contextq += downloadedg.length;
      }
         contextq -= parseInt(`${signinup2}`) * parseInt(`${contextq}`);
      while ((5.71 * contextq) == 1.0 && 1.42 == (contextq * 5.71)) {
         contextq += 1;
         break;
      }
      if ((downloadedg.length / 5) == 5) {
         signinup2 -= parseFloat(`${1 | parseInt(`${signinup2}`)}`);
      }
         contextq /= Math.max(4, parseInt(`${signinup2}`));
          let profile0 = 2.0;
         contextq += parseInt(`${profile0}`) % 1;
      while (parseFloat(`${downloadedg.length}`) <= signinup2) {
          let sliderv = String.fromCharCode(115,95,56,52,95,115,104,111,114,116,115,0);
          let analyticg: Array<any> = [596, 459];
          let roomW: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,112,115,101,95,101,95,52,56,0),895], [String.fromCharCode(115,95,51,56,95,102,117,108,108,115,99,114,101,101,110,0),626]]);
          let report2 = String.fromCharCode(112,95,56,56,95,109,98,97,102,102,0);
          let googlea = String.fromCharCode(99,112,117,105,110,102,111,95,106,95,50,53,0);
         signinup2 -= parseFloat(`${analyticg.length << (Math.min(sliderv.length, 2))}`);
         sliderv = `${report2.length}`;
         analyticg = [googlea.length];
         roomW.set(`${googlea}`, (String.fromCharCode(69,0) == googlea ? roomW.size : googlea.length));
         report2 = `${roomW.size / (Math.max(3, 10))}`;
         break;
      }
          let photo9 = true;
          let transfer9 = 3.0;
          let turng = 4.0;
         downloadedg += "2";
         photo9 = (transfer9 / (Math.max(turng, 5))) <= 43.81;
         transfer9 /= Math.max(1 - parseInt(`${turng}`), 1);
      confirmationE.push(downloadedg.length);
   while ((confirmationE.length % (Math.max(3, 3))) < 4) {
      closer = eventS.length <= 76;
      break;
   }
   while ((largeA * 4.31) == 5.41 && 4.31 == largeA) {
      closer = 10 >= borderlessF.length;
      break;
   }
   while ((schedulen.size % 3) == 3 && 2 == (schedulen.size % (Math.max(3, 3)))) {
      schedulen.set(spinnerz, 2);
      break;
   }
      eventS += `${((closer ? 2 : 4) / (Math.max(9, parseInt(`${largeA}`))))}`;
       let sharedf = 1.0;
       let contextn = String.fromCharCode(107,95,53,49,95,100,114,97,105,110,0);
       let condensed0 = 5.0;
      if ((2.3 + condensed0) == 3.85) {
         contextn = `${parseInt(`${condensed0}`) % (Math.max(2, 2))}`;
      }
         contextn = `${contextn.length ^ 2}`;
         contextn += `${parseInt(`${condensed0}`) << (Math.min(contextn.length, 3))}`;
      if ((contextn.length ^ 4) == 3) {
          let turnI: Array<any> = [185, 237];
          let privacyH = true;
          let signinup_: Array<any> = [791, 204];
         sharedf /= Math.max((turnI.length / (Math.max(10, (privacyH ? 1 : 2)))), 4);
         turnI.push(1 + signinup_.length);
         privacyH = signinup_.length >= 6;
      }
          let temperatureC = String.fromCharCode(98,95,57,56,95,114,101,100,105,114,101,99,116,111,114,0);
          let component0 = String.fromCharCode(104,95,49,49,95,117,110,98,105,97,115,0);
         contextn = `${parseInt(`${condensed0}`)}`;
         temperatureC += `${temperatureC.length - 1}`;
         component0 = "1";
         sharedf *= parseInt(`${condensed0}`) | contextn.length;
         condensed0 -= parseInt(`${sharedf}`) / (Math.max(contextn.length, 5));
          let profileP: Array<any> = [48, 653, 13];
          let g_centerJ = 5.0;
          let footballr: Array<any> = [15, 386];
         condensed0 += parseInt(`${condensed0}`);
         profileP = [parseInt(`${g_centerJ}`) - footballr.length];
         g_centerJ /= Math.max(1, profileP.length);
         footballr = [profileP.length / (Math.max(6, parseInt(`${g_centerJ}`)))];
          let zhuboc: Map<any, any> = new Map([[String.fromCharCode(116,97,103,115,116,114,95,113,95,49,51,0),398], [String.fromCharCode(107,105,108,111,98,121,116,101,95,104,95,55,50,0),911]]);
          let adult9 = String.fromCharCode(102,101,116,99,104,101,115,95,54,95,50,48,0);
         condensed0 /= Math.max(3, contextn.length >> (Math.min(Math.abs(2), 5)));
         zhuboc.set(adult9, zhuboc.size);
         adult9 = `${adult9.length - 2}`;
      closer = String.fromCharCode(78,0) == spinnerz && 85 < eventS.length;
   for (let n = 0; n < 2; n++) {
       let controla = String.fromCharCode(109,97,110,97,103,101,115,95,116,95,55,55,0);
       let diceG = String.fromCharCode(116,95,52,95,115,108,97,118,101,115,0);
       let resultv = true;
       let eighteen4 = 3.0;
      while (!diceG.includes(`${eighteen4}`)) {
         eighteen4 *= parseFloat(`${controla.length ^ parseInt(`${eighteen4}`)}`);
         break;
      }
      while ((1.41 - eighteen4) < 2.13) {
         resultv = (parseFloat(`${diceG.length}`) - eighteen4) < 62.57;
         break;
      }
      if (!resultv) {
         eighteen4 /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${eighteen4}`)), 4))}`), 1);
      }
       let gemfiler: Array<any> = [String.fromCharCode(105,95,55,53,95,109,101,114,103,101,0), String.fromCharCode(102,105,108,101,115,95,54,95,53,55,0), String.fromCharCode(108,101,102,116,109,111,115,116,95,115,95,54,48,0)];
       let combinedj: Array<any> = [838, 515];
      let placeholderK = 8532988 >= gemfiler.length;
      do {
          let refreshl = String.fromCharCode(99,95,56,57,95,114,101,115,105,122,97,98,108,101,0);
         gemfiler = [(String.fromCharCode(99,0) == refreshl ? parseInt(`${eighteen4}`) : refreshl.length)];
         if (placeholderK) {
            break;
         }
      } while ((combinedj.includes(gemfiler.length)) && placeholderK);
          let privilege9: Map<any, any> = new Map([[String.fromCharCode(101,116,97,100,97,116,97,95,103,95,50,55,0),String.fromCharCode(117,95,52,52,95,100,105,115,112,108,97,121,0)], [String.fromCharCode(111,95,55,49,95,117,99,111,110,115,116,0),String.fromCharCode(108,95,51,56,95,109,111,115,97,105,99,0)], [String.fromCharCode(108,95,51,53,95,97,99,99,0),String.fromCharCode(118,95,57,49,95,111,118,101,114,108,97,121,115,0)]]);
         diceG += `${diceG.length}`;
         privilege9.set(`${privilege9.size}`, 2 + privilege9.size);
         combinedj = [(String.fromCharCode(50,0) == controla ? controla.length : parseInt(`${eighteen4}`))];
       let weibob = 0;
       let fillW = 0;
      for (let g = 0; g < 2; g++) {
         fillW %= Math.max(3, combinedj.length);
      }
         weibob *= fillW - 2;
      let whatsappK = combinedj.length >= 9852168;
      do {
         combinedj = [fillW << (Math.min(2, Math.abs(3)))];
         if (whatsappK) {
            break;
         }
      } while ((combinedj.includes(weibob)) && whatsappK);
         weibob &= (String.fromCharCode(99,0) == controla ? fillW : controla.length);
      schedulen.set(`${closer}`, borderlessF.length);
   }
   if (2 >= (eventS.length + schedulen.size) && (schedulen.size + eventS.length) >= 2) {
      eventS += `${(parseInt(`${vignetteT}`) ^ (closer ? 1 : 4))}`;
   }
      borderlessF += `${schedulen.size}`;
   while (borderlessF.includes(eventS)) {
       let nalyticsT = 3.0;
       let trophyI = false;
      while (!trophyI) {
          let graym = false;
          let listp = String.fromCharCode(113,95,53,50,95,109,112,101,103,97,117,100,105,111,0);
          let homeR = String.fromCharCode(116,95,52,57,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
         nalyticsT += parseFloat(`${homeR.length % 3}`);
         graym = !listp.includes(`${graym}`);
         listp += `${listp.length ^ 3}`;
         homeR += `${((graym ? 5 : 4))}`;
         break;
      }
         nalyticsT *= (parseFloat(`${parseInt(`${nalyticsT}`) ^ (trophyI ? 1 : 5)}`));
      for (let c = 0; c < 3; c++) {
         trophyI = nalyticsT == 55.16;
      }
      if (4.59 > (nalyticsT / 5.50) && !trophyI) {
          let bootsplasho = 3.0;
         nalyticsT *= (parseFloat(`${(trophyI ? 2 : 5) & parseInt(`${nalyticsT}`)}`));
         bootsplasho += parseFloat(`${parseInt(`${bootsplasho}`)}`);
      }
       let agreementz: Map<any, any> = new Map([[String.fromCharCode(108,95,57,51,95,114,101,115,101,116,117,112,0),308], [String.fromCharCode(110,95,53,57,95,97,99,114,111,115,115,0),270], [String.fromCharCode(108,97,98,101,108,115,95,106,95,53,52,0),837]]);
       let thailandW: Map<any, any> = new Map([[String.fromCharCode(115,116,121,108,101,100,95,115,95,53,48,0),String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,122,95,55,50,0)], [String.fromCharCode(114,117,115,115,105,97,110,95,50,95,51,53,0),String.fromCharCode(108,112,99,108,115,112,95,109,95,57,55,0)], [String.fromCharCode(97,99,113,117,105,114,101,95,97,95,56,56,0),String.fromCharCode(112,95,55,54,95,103,101,116,102,114,97,109,101,0)]]);
      while (Array.from(thailandW.keys()).includes(`${agreementz.size}`)) {
         thailandW = new Map([[`${agreementz.size}`, ((trophyI ? 4 : 3) % (Math.max(agreementz.size, 9)))]]);
         break;
      }
      eventS += `${(String.fromCharCode(95,0) == nterstitialq ? parseInt(`${nalyticsT}`) : nterstitialq.length)}`;
      break;
   }
      eventS = `${1 / (Math.max(1, borderlessF.length))}`;
   let renewu = 5420365 <= zhengpianh.size;
   do {
      zhengpianh.set(`${spinnerz}`, spinnerz.length);
      if (renewu) {
         break;
      }
   } while ((3.1 > (vignetteT + 3.82)) && renewu);
   let privacyk = largeA >= 9682281.0;
   do {
      largeA *= parseFloat(`${1}`);
      if (privacyk) {
         break;
      }
   } while (privacyk && (eventS.length <= 4));
   while (zhengpianh.size >= nterstitialq.length) {
      nterstitialq += `${parseInt(`${vignetteT}`) >> (Math.min(Math.abs(1), 2))}`;
      break;
   }
      eventS += `${confirmationE.length ^ 1}`;
   let dropdownb = 8560112.0 <= largeA;
   do {
      largeA += parseFloat(`${borderlessF.length}`);
      if (dropdownb) {
         break;
      }
   } while ((5 < (completeL << (Math.min(Math.abs(4), 2)))) && dropdownb);
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
       let gmailb = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,99,95,48,0);
    let control1: Map<any, any> = new Map([[String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,49,95,52,53,0),488], [String.fromCharCode(117,110,112,105,110,110,101,100,95,104,95,52,48,0),312], [String.fromCharCode(115,99,97,110,95,109,95,54,57,0),720]]);
    let historyU = String.fromCharCode(121,95,53,49,95,98,116,111,98,105,110,0);
    let countdownQ = String.fromCharCode(102,108,97,116,116,101,110,101,100,95,101,95,51,0);
    let moon7 = 5;
    let area2 = String.fromCharCode(100,101,110,105,97,108,95,116,95,54,49,0);
    let animationg = String.fromCharCode(106,95,54,56,95,99,111,110,102,105,114,109,97,116,105,111,110,0);
    let fullU = String.fromCharCode(108,101,102,116,95,114,95,57,57,0);
    let middleware2 = String.fromCharCode(104,109,109,116,95,108,95,51,49,0);
    let specv: Array<any> = [581, 323];
    let lefti = String.fromCharCode(100,101,108,116,97,115,95,97,95,49,48,48,0);
   for (let k = 0; k < 1; k++) {
      countdownQ = `${countdownQ.length}`;
   }
      area2 += "2";
      gmailb = `${countdownQ.length}`;
   if (2 > (control1.size | countdownQ.length)) {
       let starC = String.fromCharCode(121,95,49,48,95,108,105,98,120,118,105,100,0);
       let downloadM: Map<any, any> = new Map([[String.fromCharCode(115,95,50,56,95,104,119,100,111,119,110,108,111,97,100,0),147], [String.fromCharCode(120,95,57,49,95,105,116,97,108,105,99,0),551], [String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,114,95,55,53,0),352]]);
       let dragZ = 1.0;
       let blacky = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,98,95,57,55,0);
         blacky = `${(String.fromCharCode(73,0) == starC ? blacky.length : starC.length)}`;
      while (1 >= blacky.length) {
         dragZ /= Math.max(blacky.length - parseInt(`${dragZ}`), 4);
         break;
      }
      if ((2 * starC.length) >= 3) {
         dragZ += starC.length >> (Math.min(Math.abs(3), 3));
      }
      while (2 >= (1 * blacky.length)) {
          let statsg = 5.0;
          let loginE = 1.0;
          let viewsX = 2;
          let short_d7k = String.fromCharCode(109,111,118,116,101,120,116,115,117,98,95,102,95,55,52,0);
          let tempq = String.fromCharCode(118,116,101,110,99,95,119,95,55,51,0);
         downloadM.set(`${dragZ}`, downloadM.size);
         statsg *= 2 >> (Math.min(Math.abs(parseInt(`${statsg}`)), 3));
         loginE *= parseFloat(`${3 | short_d7k.length}`);
         viewsX |= viewsX << (Math.min(Math.abs(parseInt(`${statsg}`)), 5));
         short_d7k = `${2 << (Math.min(2, Math.abs(parseInt(`${statsg}`))))}`;
         tempq += `${viewsX}`;
         break;
      }
          let screenV = String.fromCharCode(114,100,109,117,108,116,95,51,95,52,53,0);
         downloadM.set(starC, (starC == String.fromCharCode(74,0) ? screenV.length : starC.length));
          let sheetw: Map<any, any> = new Map([[String.fromCharCode(103,95,54,54,95,111,118,97,108,0),String.fromCharCode(114,101,117,115,101,95,98,95,51,48,0)], [String.fromCharCode(115,117,105,116,97,98,108,101,95,99,95,55,55,0),String.fromCharCode(99,95,56,52,95,112,117,108,108,117,112,0)], [String.fromCharCode(120,117,116,105,108,95,100,95,50,57,0),String.fromCharCode(115,116,114,102,117,110,99,95,116,95,53,49,0)]]);
          let tickg = String.fromCharCode(115,117,98,116,121,112,101,95,49,95,53,0);
          let taiwanx = String.fromCharCode(106,95,52,57,95,105,109,103,0);
         downloadM.set(blacky, 3 | blacky.length);
         sheetw = new Map([[taiwanx, taiwanx.length]]);
         tickg += `${sheetw.size}`;
         downloadM = new Map([[`${dragZ}`, 2]]);
       let anythinkl = String.fromCharCode(99,108,97,115,115,105,99,95,113,95,53,0);
         anythinkl += `${starC.length}`;
         starC += `${3 * starC.length}`;
       let componento = String.fromCharCode(100,117,114,103,101,114,95,48,95,53,52,0);
         blacky = `${1 % (Math.max(5, anythinkl.length))}`;
      control1.set(historyU, gmailb.length);
   }
   if (countdownQ.endsWith(`${control1.size}`)) {
      control1 = new Map([[animationg, animationg.length]]);
   }
   for (let b = 0; b < 3; b++) {
       let modityl = String.fromCharCode(118,95,53,50,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0);
       let canvass: Array<any> = [793, 376, 189];
       let tooltips_: Map<any, any> = new Map([[String.fromCharCode(102,97,117,108,116,95,53,95,56,0),false ], [String.fromCharCode(115,101,116,114,97,110,103,101,95,120,95,56,57,0),true ], [String.fromCharCode(97,118,101,114,114,111,114,95,101,95,50,53,0),false ]]);
         tooltips_ = new Map([[`${tooltips_.size}`, tooltips_.size & canvass.length]]);
          let whiten = String.fromCharCode(106,95,57,95,112,105,120,101,108,102,111,114,109,97,116,0);
         canvass.push(modityl.length);
         whiten += "2";
          let floatingc = false;
          let backwardR = String.fromCharCode(119,95,49,51,95,109,111,109,101,110,116,0);
          let more8 = 3.0;
         modityl += "2";
         floatingc = !floatingc;
         backwardR = `${backwardR.length}`;
         more8 -= parseFloat(`${backwardR.length * 1}`);
      let dangerH = tooltips_.size >= 8577791;
      do {
         tooltips_.set(modityl, canvass.length);
         if (dangerH) {
            break;
         }
      } while (dangerH && (canvass.length < tooltips_.size));
          let downloadk = 1;
         tooltips_ = new Map([[`${canvass.length}`, 1 >> (Math.min(1, modityl.length))]]);
         downloadk -= 1;
      if (Array.from(tooltips_.keys()).includes(`${canvass.length}`)) {
         tooltips_ = new Map([[`${canvass.length}`, 2 / (Math.max(8, modityl.length))]]);
      }
         canvass = [1];
         modityl += `${3 & canvass.length}`;
      for (let k = 0; k < 2; k++) {
         tooltips_ = new Map([[`${tooltips_.size}`, 1 | tooltips_.size]]);
      }
      control1 = new Map([[historyU, countdownQ.length << (Math.min(Math.abs(3), 4))]]);
   }
   if (animationg.startsWith(`${moon7}`)) {
      moon7 /= Math.max(3, 3);
   }
   while (gmailb != String.fromCharCode(102,0)) {
       let update_iS = String.fromCharCode(115,104,97,108,108,95,115,95,55,50,0);
       let renewI = String.fromCharCode(106,95,51,57,95,99,111,108,108,101,116,105,111,110,0);
       let middleware_: Map<any, any> = new Map([[String.fromCharCode(116,95,52,51,95,101,120,116,114,97,112,111,108,97,116,111,114,0),773], [String.fromCharCode(117,115,101,114,115,95,115,95,50,55,0),348]]);
       let backU = String.fromCharCode(118,112,120,101,110,99,95,110,95,56,56,0);
       let inactive_ = String.fromCharCode(100,95,52,55,95,102,111,111,0);
      if (renewI.length < 2) {
         renewI = `${backU.length}`;
      }
         backU += "2";
      if (2 >= backU.length || 2 >= renewI.length) {
          let screenq: Array<any> = [734, 443, 805];
          let u_lock6 = 0;
          let thumbnail2 = 3;
          let feedbackN = 0.0;
          let type_9oM: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,95,122,95,52,48,0),false ], [String.fromCharCode(117,95,53,51,95,115,116,117,102,102,115,116,0),false ]]);
         backU += `${1 * parseInt(`${feedbackN}`)}`;
         screenq = [screenq.length];
         u_lock6 -= 3 & u_lock6;
         thumbnail2 *= 3 + thumbnail2;
         feedbackN *= parseFloat(`${thumbnail2}`);
         type_9oM = new Map([[`${thumbnail2}`, u_lock6 ^ 3]]);
      }
      while (3 == (middleware_.size * renewI.length)) {
         middleware_ = new Map([[`${middleware_.size}`, (String.fromCharCode(80,0) == backU ? middleware_.size : backU.length)]]);
         break;
      }
         middleware_ = new Map([[update_iS, update_iS.length | inactive_.length]]);
      while (1 == (middleware_.size + update_iS.length)) {
         middleware_ = new Map([[`${middleware_.size}`, middleware_.size << (Math.min(Math.abs(2), 5))]]);
         break;
      }
      if (!update_iS.startsWith(renewI)) {
         update_iS = `${(inactive_ == String.fromCharCode(88,0) ? inactive_.length : backU.length)}`;
      }
       let tailU = 1.0;
       let switch_c_ = 1.0;
      for (let g = 0; g < 2; g++) {
          let statsI = 2.0;
          let otherG: Array<any> = [852, 586, 839];
         switch_c_ /= Math.max(1 | parseInt(`${switch_c_}`), 4);
         statsI *= 3;
         otherG = [1 + parseInt(`${statsI}`)];
      }
      let videoq = String.fromCharCode(50,55,57,120,0) == backU;
      do {
         backU = `${(String.fromCharCode(76,0) == inactive_ ? backU.length : inactive_.length)}`;
         if (videoq) {
            break;
         }
      } while ((backU.length < 3 || renewI == String.fromCharCode(99,0)) && videoq);
          let renewq = 2.0;
         inactive_ = `${backU.length / (Math.max(10, inactive_.length))}`;
         renewq *= parseInt(`${renewq}`);
      if (2.6 < tailU) {
         update_iS += `${1 | backU.length}`;
      }
       let singaporer = String.fromCharCode(121,95,55,52,95,99,111,110,102,105,103,117,114,101,0);
       let settingr = String.fromCharCode(99,111,109,112,97,114,101,114,115,95,111,95,52,56,0);
          let hookE = 4;
          let orangeE: Map<any, any> = new Map([[String.fromCharCode(111,117,116,100,97,116,101,100,95,109,95,51,53,0),422], [String.fromCharCode(121,95,50,52,95,109,97,105,110,102,117,110,99,0),577]]);
          let regengQ = 3.0;
         update_iS = `${singaporer.length >> (Math.min(2, Math.abs(parseInt(`${tailU}`))))}`;
         hookE *= 2 + parseInt(`${regengQ}`);
         orangeE = new Map([[`${orangeE.size}`, orangeE.size]]);
         regengQ *= 1;
      if (tailU > 4.82) {
         switch_c_ *= (String.fromCharCode(90,0) == renewI ? renewI.length : parseInt(`${switch_c_}`));
      }
      historyU = "2";
      break;
   }
      control1 = new Map([[countdownQ, 2 | area2.length]]);
      historyU += `${countdownQ.length * historyU.length}`;

    setShowControls(!showControls);

      countdownQ = `${gmailb.length | 1}`;
      historyU += `${historyU.length * animationg.length}`;
   let relatedB = 9108483 <= animationg.length;
   do {
       let topicJ = true;
      while (!topicJ) {
         topicJ = !topicJ;
         break;
      }
      let upload_ = topicJ ? !topicJ : topicJ;
      do {
         topicJ = topicJ || !topicJ;
         if (upload_) {
            break;
         }
      } while (upload_ && (!topicJ || topicJ));
       let projecta = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,107,95,49,50,0);
       let controlC = String.fromCharCode(121,95,50,56,95,115,112,101,101,100,0);
      animationg = `${(String.fromCharCode(50,0) == historyU ? historyU.length : animationg.length)}`;
      if (relatedB) {
         break;
      }
   } while ((animationg.length <= control1.size) && relatedB);
      area2 = "3";
   if (2 > (area2.length * 1) && 5 > (1 * moon7)) {
       let controlsp: Array<any> = [915, 962];
       let selection5: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,95,114,95,52,54,0),312], [String.fromCharCode(112,97,105,100,95,117,95,54,57,0),740]]);
      for (let g = 0; g < 3; g++) {
         selection5.set(`${controlsp.length}`, 3);
      }
          let anytimeV = 5.0;
         controlsp.push(2);
         anytimeV += parseInt(`${anytimeV}`) - parseInt(`${anytimeV}`);
         selection5 = new Map([[`${selection5.size}`, controlsp.length >> (Math.min(Math.abs(1), 5))]]);
      if (controlsp.length == selection5.size) {
         controlsp = [controlsp.length];
      }
      let sheetD = 7230352 <= controlsp.length;
      do {
         controlsp.push(controlsp.length);
         if (sheetD) {
            break;
         }
      } while (sheetD && (!Array.from(selection5.keys()).includes(`${controlsp.length}`)));
         selection5.set(`${controlsp.length}`, controlsp.length % (Math.max(3, 8)));
      area2 = `${area2.length % 2}`;
   }
   if (5 <= (1 % (Math.max(6, historyU.length)))) {
      historyU = "1";
   }
   let malaysia7 = 9181908 <= control1.size;
   do {
      control1 = new Map([[`${moon7}`, moon7 % 2]]);
      if (malaysia7) {
         break;
      }
   } while ((5 >= (1 >> (Math.min(3, fullU.length)))) && malaysia7);
   while (historyU.endsWith(`${countdownQ.length}`)) {
      historyU += `${gmailb.length}`;
      break;
   }
   while (animationg.includes(`${area2.length}`)) {
      area2 += `${countdownQ.length >> (Math.min(Math.abs(1), 5))}`;
      break;
   }
       let analytica = String.fromCharCode(106,95,49,57,95,115,105,109,105,108,97,114,0);
       let blackT: Map<any, any> = new Map([[String.fromCharCode(114,101,112,114,111,99,101,115,115,95,52,95,52,53,0),false ], [String.fromCharCode(103,101,116,112,105,120,95,97,95,53,56,0),false ]]);
      while (4 > blackT.size) {
          let analyticz = 1.0;
          let statsK: Map<any, any> = new Map([[String.fromCharCode(113,95,53,53,95,100,105,114,115,0),565], [String.fromCharCode(115,97,118,101,112,111,105,110,116,95,114,95,50,0),383], [String.fromCharCode(118,95,50,50,95,97,112,110,115,0),915]]);
          let notificationD = false;
          let scheduleU = true;
          let moditya: Array<any> = [207, 891];
         blackT = new Map([[`${statsK.size}`, 2]]);
         analyticz /= Math.max((parseInt(`${analyticz}`) >> (Math.min(3, Math.abs((notificationD ? 2 : 2))))), 2);
         statsK = new Map([[`${moditya.length}`, ((notificationD ? 2 : 1) ^ 2)]]);
         scheduleU = !notificationD;
         moditya = [parseInt(`${analyticz}`) ^ 1];
         break;
      }
          let switch_pV = 3.0;
         analytica += `${analytica.length / (Math.max(3, 4))}`;
         switch_pV += parseFloat(`${3}`);
      let combinee = 5974966 <= analytica.length;
      do {
         analytica = "1";
         if (combinee) {
            break;
         }
      } while (combinee && ((blackT.size & analytica.length) < 4 || 4 < (analytica.length & blackT.size)));
         analytica = "3";
      while (1 >= (analytica.length + blackT.size) || (analytica.length + 1) >= 1) {
         analytica += `${1 + blackT.size}`;
         break;
      }
      while (2 >= analytica.length) {
         blackT = new Map([[`${blackT.size}`, analytica.length - 2]]);
         break;
      }
      historyU = "2";
    delayControls();
  };

  const clearHidingDelay = () => {
       let str4 = String.fromCharCode(107,95,50,51,95,109,111,110,111,98,108,97,99,107,0);
    let read_ = 2;
    let feedbacka = String.fromCharCode(112,95,55,52,95,97,114,99,104,105,118,101,114,0);
    let whatsappY = String.fromCharCode(118,101,114,116,105,99,97,108,108,121,95,56,95,56,49,0);
    let castD = String.fromCharCode(104,95,56,50,95,99,104,114,111,109,105,110,97,110,99,101,0);
    let m_player5 = true;
    let modelse: Array<any> = [108, 799, 309];
    let volumed = 4.0;
    let blackb = 1.0;
    let greenI = false;
    let megaphoneU = String.fromCharCode(116,95,51,54,95,99,117,116,0);
    let appled: Map<any, any> = new Map([[String.fromCharCode(121,95,55,95,100,105,115,115,105,109,0),String.fromCharCode(112,111,115,116,97,108,95,104,95,56,52,0)], [String.fromCharCode(108,95,55,53,95,97,97,99,115,98,114,100,97,116,97,0),String.fromCharCode(122,95,54,56,0)], [String.fromCharCode(120,102,101,114,95,109,95,56,53,0),String.fromCharCode(99,95,49,55,95,115,104,111,117,108,100,0)]]);
    let assist5 = String.fromCharCode(114,101,109,105,110,100,101,114,115,95,108,95,53,48,0);
      volumed /= Math.max((parseFloat(`${String.fromCharCode(97,0) == whatsappY ? whatsappY.length : feedbacka.length}`)), 5);
   for (let k = 0; k < 3; k++) {
      modelse = [castD.length];
   }
       let benefitg = true;
       let paginationj = String.fromCharCode(110,95,56,49,95,99,101,114,116,0);
       let windK: Array<any> = [883, 957];
         benefitg = windK.length > paginationj.length;
      if (windK.length < paginationj.length) {
         paginationj = `${paginationj.length - 1}`;
      }
      for (let p = 0; p < 2; p++) {
         benefitg = paginationj.length == 70;
      }
      if ((paginationj.length & windK.length) == 2) {
         windK.push(windK.length);
      }
          let contextt: Map<any, any> = new Map([[String.fromCharCode(100,95,56,53,0),454], [String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,121,95,52,57,0),878], [String.fromCharCode(109,99,111,109,112,95,49,95,51,53,0),44]]);
          let thumbnailV = true;
         paginationj = `${((benefitg ? 2 : 1) / (Math.max(1, 4)))}`;
         contextt.set(`${thumbnailV}`, contextt.size ^ 2);
      for (let k = 0; k < 1; k++) {
          let listJ = false;
          let share2 = String.fromCharCode(113,101,120,112,95,52,95,50,51,0);
          let configureY = String.fromCharCode(111,112,116,105,111,110,97,108,95,105,95,57,50,0);
         benefitg = !listJ;
         share2 += `${share2.length}`;
         configureY = `${configureY.length / (Math.max(10, share2.length))}`;
      }
      while ((5 * windK.length) > 2) {
         windK = [2];
         break;
      }
      while (3 == (paginationj.length | 3) && (3 | paginationj.length) == 4) {
          let upgrade8 = String.fromCharCode(117,110,115,97,118,101,95,48,95,52,49,0);
          let commonB = String.fromCharCode(118,108,99,111,100,101,99,95,52,95,54,0);
         windK = [2];
         upgrade8 = `${(commonB == String.fromCharCode(102,0) ? upgrade8.length : commonB.length)}`;
         break;
      }
         windK.push((1 & (benefitg ? 2 : 1)));
      feedbacka += `${windK.length}`;
      m_player5 = whatsappY == feedbacka;
   for (let r = 0; r < 2; r++) {
      read_ -= feedbacka.length ^ 1;
   }
   if (5 <= castD.length) {
      castD = "2";
   }
      blackb -= parseFloat(`${str4.length}`);
   for (let w = 0; w < 1; w++) {
       let renewk = String.fromCharCode(100,95,50,53,95,97,99,99,101,108,101,114,97,116,101,0);
       let moon9 = 5.0;
          let type_zjH = String.fromCharCode(98,95,53,50,95,112,114,101,115,101,110,116,105,110,103,0);
         renewk += `${(String.fromCharCode(114,0) == renewk ? parseInt(`${moon9}`) : renewk.length)}`;
         type_zjH = `${1 | type_zjH.length}`;
          let resendR = String.fromCharCode(110,95,52,57,95,120,103,101,116,98,118,0);
         renewk += `${(String.fromCharCode(83,0) == resendR ? resendR.length : parseInt(`${moon9}`))}`;
      for (let i = 0; i < 1; i++) {
         renewk += "1";
      }
          let launchW: Array<any> = [837, 379];
          let product3 = true;
         moon9 += parseFloat(`${renewk.length}`);
         launchW = [(2 >> (Math.min(2, Math.abs((product3 ? 1 : 2)))))];
         product3 = launchW.length < 62;
         renewk = `${1 >> (Math.min(4, Math.abs(parseInt(`${moon9}`))))}`;
          let gpayU: Map<any, any> = new Map([[String.fromCharCode(97,95,54,56,95,116,105,109,105,110,103,115,97,102,101,0),309], [String.fromCharCode(98,121,116,101,115,104,117,109,97,110,95,54,95,55,56,0),516], [String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,120,95,55,55,0),671]]);
          let switch_ymd = false;
          let untickn = 3.0;
         renewk = `${2 >> (Math.min(1, Math.abs(gpayU.size)))}`;
         gpayU = new Map([[`${untickn}`, ((switch_ymd ? 4 : 2) + parseInt(`${untickn}`))]]);
         switch_ymd = untickn >= 51.19;
      str4 = `${((greenI ? 1 : 5))}`;
   }
   for (let r = 0; r < 3; r++) {
      whatsappY = `${(String.fromCharCode(115,0) == str4 ? parseInt(`${blackb}`) : str4.length)}`;
   }
   let time_ja = greenI ? !greenI : greenI;
   do {
      greenI = feedbacka.includes(`${greenI}`);
      if (time_ja) {
         break;
      }
   } while ((castD.length > 1 || !greenI) && time_ja);
      whatsappY += `${read_}`;
   let with_hM = 4907344 >= read_;
   do {
       let nativev = 0;
       let textP = String.fromCharCode(115,117,103,103,101,115,116,95,107,95,50,49,0);
       let rank9 = String.fromCharCode(101,118,101,110,95,107,95,57,48,0);
          let sendz: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,105,100,101,110,116,105,102,105,101,114,115,0),775], [String.fromCharCode(99,98,115,110,105,100,95,51,95,49,0),145], [String.fromCharCode(103,95,54,57,95,104,97,115,104,101,114,0),745]]);
          let filedo: Array<any> = [915, 143];
          let register_292 = 5.0;
         textP += `${filedo.length % 3}`;
         sendz = new Map([[`${sendz.size}`, 2 & sendz.size]]);
         filedo = [sendz.size];
         register_292 /= Math.max(1, parseFloat(`${1 & sendz.size}`));
         textP += `${rank9.length}`;
          let watchR = 0.0;
          let hookz = String.fromCharCode(103,95,53,57,95,115,108,105,99,101,116,104,114,101,97,100,0);
         textP = `${2 >> (Math.min(Math.abs(parseInt(`${watchR}`)), 5))}`;
         watchR *= hookz.length;
         hookz = `${hookz.length % (Math.max(2, hookz.length))}`;
       let register_tR = 1.0;
          let hoverF = false;
         nativev <<= Math.min(5, Math.abs(textP.length | 2));
         hoverF = hoverF || hoverF;
          let bannerY = String.fromCharCode(103,95,53,54,95,116,111,115,115,0);
          let detailsf = 4;
          let moreR: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,105,122,101,95,113,95,51,57,0),968], [String.fromCharCode(112,95,50,50,95,115,101,110,100,97,108,108,0),371], [String.fromCharCode(103,101,110,97,110,110,95,57,95,49,54,0),142]]);
         rank9 += `${bannerY.length * 2}`;
         bannerY += `${detailsf}`;
         detailsf &= detailsf << (Math.min(Math.abs(3), 5));
         moreR = new Map([[`${moreR.size}`, detailsf]]);
      for (let b = 0; b < 2; b++) {
          let soundJ = String.fromCharCode(118,95,54,51,95,99,119,110,100,0);
          let contextX: Array<any> = [210, 982, 612];
          let filledj = String.fromCharCode(99,111,110,116,105,110,117,97,108,95,119,95,53,0);
          let shrink8: Array<any> = [String.fromCharCode(97,116,111,109,95,114,95,51,52,0), String.fromCharCode(109,111,118,101,100,95,120,95,51,50,0), String.fromCharCode(116,95,53,50,95,115,117,98,112,97,99,107,101,116,0)];
         rank9 = `${soundJ.length}`;
         soundJ = `${3 - filledj.length}`;
         contextX.push(filledj.length);
         shrink8 = [filledj.length | shrink8.length];
      }
         textP += `${(String.fromCharCode(84,0) == rank9 ? textP.length : rank9.length)}`;
      let select8 = textP == String.fromCharCode(106,48,99,0);
      do {
          let linke = 4.0;
          let k_unlockt = false;
          let aboutI = 5.0;
          let unselected7 = 2;
         textP = `${rank9.length}`;
         linke -= (parseInt(`${aboutI}`) * (k_unlockt ? 2 : 5));
         k_unlockt = linke < 79.56;
         aboutI += parseFloat(`${2 | parseInt(`${linke}`)}`);
         unselected7 %= Math.max(unselected7, 3);
         if (select8) {
            break;
         }
      } while ((3 >= textP.length) && select8);
      read_ %= Math.max(3, (rank9 == String.fromCharCode(116,0) ? str4.length : rank9.length));
      if (with_hM) {
         break;
      }
   } while (with_hM && (2 > (5 + str4.length)));
      volumed += parseFloat(`${3}`);
   let yingB = read_ >= 6058038;
   do {
       let register_ik = String.fromCharCode(98,95,49,54,95,113,119,111,114,100,0);
       let side6: Map<any, any> = new Map([[String.fromCharCode(107,95,50,50,95,97,108,108,121,117,118,0),572], [String.fromCharCode(115,116,117,110,95,49,95,49,57,0),948], [String.fromCharCode(116,104,111,117,115,97,110,100,115,95,121,95,51,53,0),85]]);
       let logoutC: Map<any, any> = new Map([[String.fromCharCode(104,95,54,51,95,112,104,114,97,115,101,0),String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,106,95,56,52,0)], [String.fromCharCode(116,101,114,109,115,101,116,95,49,95,50,0),String.fromCharCode(110,111,99,104,97,110,103,101,95,115,95,51,50,0)]]);
         side6.set(`${logoutC.size}`, 1);
      while (!register_ik.startsWith(`${side6.size}`)) {
         register_ik += `${register_ik.length + side6.size}`;
         break;
      }
      read_ >>= Math.min(feedbacka.length, 4);
      if (yingB) {
         break;
      }
   } while (((read_ % (Math.max(castD.length, 1))) <= 2 && 3 <= (2 % (Math.max(7, castD.length)))) && yingB);
   for (let d = 0; d < 1; d++) {
       let const_3d: Map<any, any> = new Map([[String.fromCharCode(111,99,115,112,95,118,95,51,0),851], [String.fromCharCode(116,105,107,101,114,95,110,95,49,0),78]]);
       let groupU = String.fromCharCode(109,101,109,115,101,116,95,49,95,49,53,0);
      if (1 < groupU.length) {
          let const_na = String.fromCharCode(109,98,118,115,95,111,95,50,56,0);
          let spec0 = String.fromCharCode(109,105,110,105,109,117,109,95,114,95,54,57,0);
         const_3d = new Map([[`${const_3d.size}`, 3]]);
         const_na += `${(String.fromCharCode(114,0) == const_na ? const_na.length : spec0.length)}`;
         spec0 = `${(String.fromCharCode(101,0) == spec0 ? const_na.length : spec0.length)}`;
      }
      let lessW = const_3d.size <= 8302196;
      do {
         const_3d = new Map([[`${const_3d.size}`, groupU.length]]);
         if (lessW) {
            break;
         }
      } while (((5 >> (Math.min(5, Math.abs(const_3d.size)))) <= 4) && lessW);
      if (5 == const_3d.size) {
          let emptyf: Array<any> = [191, 829, 153];
          let back4: Array<any> = [815, 71];
          let placeholder3 = 5;
          let dragM = false;
         const_3d = new Map([[`${const_3d.size}`, placeholder3 / 1]]);
         emptyf = [emptyf.length];
         back4.push(3);
         placeholder3 &= 1;
      }
          let private_a2 = true;
         groupU += `${((private_a2 ? 3 : 5) / 2)}`;
      for (let e = 0; e < 3; e++) {
         groupU += `${const_3d.size}`;
      }
         const_3d = new Map([[`${const_3d.size}`, groupU.length]]);
      volumed *= parseFloat(`${whatsappY.length}`);
   }
   for (let l = 0; l < 2; l++) {
       let description_0q = false;
       let appleK = String.fromCharCode(100,101,115,99,101,110,100,101,114,95,54,95,51,48,0);
       let math0 = 4;
         appleK = `${(String.fromCharCode(57,0) == appleK ? appleK.length : math0)}`;
          let middleW = 1;
          let singleb = false;
         description_0q = middleW == 38;
         middleW += ((singleb ? 3 : 3));
      while (1 == (math0 % (Math.max(3, 1)))) {
         description_0q = 84 >= math0;
         break;
      }
      let updatesz = description_0q ? !description_0q : description_0q;
      do {
         description_0q = !description_0q;
         if (updatesz) {
            break;
         }
      } while ((3 >= appleK.length) && updatesz);
         appleK += `${3 + appleK.length}`;
      blackb += parseFloat(`${2}`);
   }
      modelse = [read_];
   let green4 = String.fromCharCode(117,122,100,103,119,117,95,0) == megaphoneU;
   do {
      megaphoneU = `${(2 - (m_player5 ? 5 : 1))}`;
      if (green4) {
         break;
      }
   } while (green4 && (!greenI && 2 < megaphoneU.length));

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let themeZ = String.fromCharCode(107,95,55,52,95,117,114,108,99,111,110,116,101,120,116,0);
    let leaguej = 2;
    let gemfilen = 0.0;
    let bellC = String.fromCharCode(101,95,56,55,95,109,100,99,118,0);
    let fast2 = false;
    let dangern = String.fromCharCode(106,95,57,48,95,115,105,103,0);
    let photoX = 3;
    let temperatureS = 1.0;
      fast2 = dangern.endsWith(`${photoX}`);
      leaguej |= parseInt(`${gemfilen}`);
       let brightnessi: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,111,115,107,97,95,104,95,57,52,0),false ], [String.fromCharCode(120,95,54,50,95,115,116,114,105,110,103,101,110,99,111,100,101,0),false ]]);
         brightnessi.set(`${brightnessi.size}`, 3);
      while (brightnessi.get(`${brightnessi.size}`) == null) {
         brightnessi.set(`${brightnessi.size}`, 3 & brightnessi.size);
         break;
      }
         brightnessi = new Map([[`${brightnessi.size}`, 1]]);
      photoX += dangern.length;
      themeZ = `${3 + dangern.length}`;
   if (!fast2) {
      leaguej &= 3;
   }

      if (delayValue === undefined) {

      leaguej %= Math.max((bellC == String.fromCharCode(83,0) ? bellC.length : themeZ.length), 4);
      dangern = `${photoX}`;
   let downloadedz = themeZ == String.fromCharCode(116,115,49,122,109,119,54,121,99,0);
   do {
       let controlsz = String.fromCharCode(101,103,114,101,115,115,95,115,95,55,56,0);
       let sliderN = String.fromCharCode(114,101,115,105,103,110,105,110,103,95,51,95,49,0);
       let views_ = String.fromCharCode(120,95,51,54,95,105,102,110,115,0);
      while (sliderN != String.fromCharCode(117,0)) {
         views_ += `${controlsz.length << (Math.min(Math.abs(3), 4))}`;
         break;
      }
         views_ += `${views_.length}`;
      let stationsX = 7796839 >= views_.length;
      do {
          let g_titleW = 4.0;
          let sellk = 4.0;
          let phoneb = 4.0;
          let submitv: Array<any> = [String.fromCharCode(122,98,117,102,95,100,95,52,55,0), String.fromCharCode(97,112,112,114,111,118,97,108,95,103,95,51,56,0)];
         views_ += "3";
         g_titleW /= Math.max(submitv.length >> (Math.min(Math.abs(2), 2)), 5);
         sellk -= parseFloat(`${parseInt(`${sellk}`) | 3}`);
         phoneb /= Math.max(2, parseInt(`${g_titleW}`) << (Math.min(Math.abs(parseInt(`${phoneb}`)), 5)));
         submitv.push(1 - parseInt(`${g_titleW}`));
         if (stationsX) {
            break;
         }
      } while (stationsX && (2 == sliderN.length));
      if (sliderN.startsWith(`${views_.length}`)) {
          let stationsm = 2;
          let sans2: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,101,114,95,110,95,52,54,0),2], [String.fromCharCode(102,114,101,101,108,105,115,116,95,50,95,57,52,0),802], [String.fromCharCode(102,95,51,48,95,121,101,108,108,111,119,0),0]]);
          let bottomK = 1.0;
         views_ += `${(views_ == String.fromCharCode(108,0) ? stationsm : views_.length)}`;
         stationsm >>= Math.min(Math.abs(1), 1);
         sans2 = new Map([[`${sans2.size}`, 1]]);
         bottomK -= 2;
      }
       let description_lH: Array<any> = [String.fromCharCode(98,99,100,117,105,110,116,95,52,95,52,50,0), String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,95,112,95,54,57,0), String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,116,95,56,48,0)];
         views_ += `${description_lH.length}`;
         description_lH.push(views_.length + 2);
         views_ = `${controlsz.length}`;
      while (sliderN.startsWith(controlsz)) {
         sliderN += `${(sliderN == String.fromCharCode(86,0) ? sliderN.length : description_lH.length)}`;
         break;
      }
      themeZ += "2";
      if (downloadedz) {
         break;
      }
   } while ((bellC.length >= 5) && downloadedz);
   let floaters = 8828324 >= themeZ.length;
   do {
      themeZ += `${2 % (Math.max(photoX, 1))}`;
      if (floaters) {
         break;
      }
   } while (floaters && (4 > leaguej));
       let typeso = String.fromCharCode(115,108,97,115,104,101,115,95,57,95,57,53,0);
       let rulesv = String.fromCharCode(121,95,50,57,95,112,101,97,107,115,0);
       let vignetteM = String.fromCharCode(97,95,52,50,95,116,121,112,0);
      let logoutm = vignetteM.length >= 6195375;
      do {
         vignetteM += `${typeso.length >> (Math.min(Math.abs(2), 1))}`;
         if (logoutm) {
            break;
         }
      } while (logoutm && (vignetteM.length >= 2));
      let sliderz = 7668637 <= rulesv.length;
      do {
         rulesv = `${2 << (Math.min(5, rulesv.length))}`;
         if (sliderz) {
            break;
         }
      } while (sliderz && (rulesv.length == 4));
         rulesv += "1";
          let basketballT = 4.0;
          let forwardI = 0.0;
          let fcopy_uhN = String.fromCharCode(118,95,51,53,95,99,111,110,99,101,97,108,109,101,110,116,0);
         rulesv += `${parseInt(`${forwardI}`) >> (Math.min(Math.abs(parseInt(`${basketballT}`)), 3))}`;
         basketballT *= fcopy_uhN.length;
         forwardI /= Math.max(3, (parseFloat(`${String.fromCharCode(52,0) == fcopy_uhN ? fcopy_uhN.length : fcopy_uhN.length}`)));
          let combinem = String.fromCharCode(118,95,49,57,95,109,111,100,117,108,101,0);
          let benefitY = true;
          let awaym = String.fromCharCode(101,95,54,57,95,112,111,108,113,97,0);
         rulesv = `${typeso.length}`;
         combinem += `${(combinem.length / (Math.max(3, (benefitY ? 4 : 2))))}`;
         benefitY = awaym.length == 99;
         awaym = "2";
      for (let o = 0; o < 3; o++) {
         typeso += `${rulesv.length + 3}`;
      }
       let catalogo: Map<any, any> = new Map([[String.fromCharCode(98,111,120,98,108,117,114,95,98,95,49,49,0),43], [String.fromCharCode(116,95,52,51,95,117,110,116,121,112,101,100,0),720], [String.fromCharCode(106,95,55,95,104,97,110,110,101,108,0),796]]);
       let typesJ: Map<any, any> = new Map([[String.fromCharCode(104,95,50,55,95,99,111,110,102,105,103,117,114,101,114,0),String.fromCharCode(115,95,48,95,102,114,97,109,101,115,0)], [String.fromCharCode(117,95,51,50,95,113,100,114,97,119,0),String.fromCharCode(121,95,51,53,95,101,118,112,111,114,116,0)]]);
      let plash8 = 7032424 <= vignetteM.length;
      do {
         vignetteM += "2";
         if (plash8) {
            break;
         }
      } while (plash8 && ((typesJ.size ^ vignetteM.length) < 3 || 2 < (3 ^ vignetteM.length)));
         catalogo.set(`${rulesv}`, (String.fromCharCode(70,0) == rulesv ? typesJ.size : rulesv.length));
      themeZ = `${bellC.length | 1}`;
        if (showSlider === 'none' && !paused) {

      photoX %= Math.max(3, ((fast2 ? 1 : 1) ^ dangern.length));
   while (1 == (bellC.length >> (Math.min(Math.abs(3), 4)))) {
      bellC = `${dangern.length}`;
      break;
   }
       let modelsJ = 4;
         modelsJ ^= modelsJ;
          let chartS = false;
          let context5: Array<any> = [578, 865];
         modelsJ %= Math.max(2, 3);
         chartS = context5.length == 75 || !chartS;
         context5.push((context5.length * (chartS ? 5 : 5)));
          let stepH: Array<any> = [String.fromCharCode(122,95,51,48,95,115,116,112,115,0), String.fromCharCode(118,105,109,101,111,95,112,95,52,52,0), String.fromCharCode(109,97,105,110,95,102,95,50,57,0)];
         modelsJ *= stepH.length;
      leaguej += (themeZ == String.fromCharCode(110,0) ? themeZ.length : (fast2 ? 3 : 2));
   while (4.45 > gemfilen) {
      gemfilen += dangern.length;
      break;
   }
   while (fast2 && 3 < themeZ.length) {
      fast2 = (photoX - bellC.length) == 56;
      break;
   }
          setShowControls(false)
        }
      } else {

   while (dangern.startsWith(`${photoX}`)) {
      dangern = `${parseInt(`${gemfilen}`) - 3}`;
      break;
   }
   while ((leaguej << (Math.min(Math.abs(2), 3))) >= 5 || fast2) {
      fast2 = !fast2;
      break;
   }
       let whatsappp = String.fromCharCode(108,95,50,55,95,112,110,105,101,108,115,0);
       let untickx: Array<any> = [28, 651];
       let overi = String.fromCharCode(97,115,105,110,107,95,48,95,50,56,0);
      for (let o = 0; o < 3; o++) {
          let gnewsL = true;
          let navigation2 = String.fromCharCode(115,116,111,112,112,101,100,95,103,95,50,48,0);
          let darkS: Array<any> = [277, 461];
         untickx.push(((gnewsL ? 1 : 4) / (Math.max(2, 5))));
         gnewsL = (navigation2.length & darkS.length) < 36;
         navigation2 = `${(navigation2 == String.fromCharCode(68,0) ? darkS.length : navigation2.length)}`;
      }
      for (let i = 0; i < 1; i++) {
         untickx = [untickx.length | whatsappp.length];
      }
      if (1 <= (untickx.length | 5) || 4 <= (5 | untickx.length)) {
          let episodeA = String.fromCharCode(115,116,114,116,111,108,108,95,112,95,56,51,0);
         overi += `${whatsappp.length}`;
         episodeA += `${episodeA.length}`;
      }
      let feedback8 = untickx.length <= 7152169;
      do {
         untickx = [whatsappp.length];
         if (feedback8) {
            break;
         }
      } while ((4 >= whatsappp.length) && feedback8);
          let albumb: Map<any, any> = new Map([[String.fromCharCode(107,95,52,53,95,115,105,103,102,105,103,0),264], [String.fromCharCode(122,95,53,48,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0),850]]);
          let successd: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,97,118,103,98,108,117,114,0),196], [String.fromCharCode(115,116,111,114,101,95,111,95,56,56,0),352], [String.fromCharCode(112,95,54,52,95,101,120,99,101,101,100,115,0),927]]);
          let searchbarN = true;
         untickx = [untickx.length];
         albumb.set(`${successd.size}`, successd.size + albumb.size);
         searchbarN = successd.size <= 75;
         untickx = [overi.length << (Math.min(Math.abs(2), 4))];
      let sentryQ = String.fromCharCode(119,117,51,51,48,118,0) == overi;
      do {
          let greyT = String.fromCharCode(112,95,52,56,95,107,102,119,114,105,116,101,0);
          let forwardO = 4;
          let indicator1 = String.fromCharCode(121,95,55,95,109,117,116,97,116,105,110,103,0);
          let reporto = 2.0;
         overi += `${overi.length}`;
         greyT += `${3 - forwardO}`;
         forwardO <<= Math.min(Math.abs((String.fromCharCode(52,0) == greyT ? forwardO : greyT.length)), 1);
         indicator1 = "2";
         reporto /= Math.max(parseFloat(`${indicator1.length}`), 2);
         if (sentryQ) {
            break;
         }
      } while ((whatsappp == String.fromCharCode(77,0)) && sentryQ);
          let sliderNG = 1.0;
          let bottomQ = false;
          let megaphoney = 2;
         untickx = [parseInt(`${sliderNG}`) & 1];
         sliderNG *= parseFloat(`${megaphoney}`);
         bottomQ = !bottomQ && megaphoney >= 82;
         untickx.push(1 | overi.length);
      themeZ += `${parseInt(`${gemfilen}`) << (Math.min(5, Math.abs(1)))}`;
   while (!fast2) {
      photoX %= Math.max(1, dangern.length * bellC.length);
      break;
   }
   let plus4 = dangern == String.fromCharCode(106,54,122,104,53,119,49,99,116,0);
   do {
       let resendi: Map<any, any> = new Map([[String.fromCharCode(114,116,108,95,56,95,51,53,0),594], [String.fromCharCode(112,97,114,115,101,114,115,95,103,95,53,52,0),794], [String.fromCharCode(114,103,98,114,103,98,95,122,95,55,53,0),72]]);
       let mappingv = String.fromCharCode(120,95,53,50,95,99,98,112,104,105,0);
       let screenK = false;
         screenK = !mappingv.startsWith(`${screenK}`);
         mappingv = `${(mappingv.length - (screenK ? 4 : 2))}`;
      for (let e = 0; e < 3; e++) {
          let productd = 0;
          let actionsO = String.fromCharCode(116,105,108,101,120,95,121,95,53,52,0);
          let sinar = false;
          let combinedC = 4.0;
          let albuma = String.fromCharCode(116,95,55,53,95,97,117,116,104,111,114,105,122,101,100,0);
         screenK = actionsO.length < 100;
         productd ^= 2 & parseInt(`${combinedC}`);
         actionsO = `${(String.fromCharCode(90,0) == albuma ? parseInt(`${combinedC}`) : albuma.length)}`;
         sinar = (productd / (Math.max(combinedC, 9))) >= 93;
      }
      if (screenK) {
         screenK = !screenK;
      }
      if (4 == (4 + mappingv.length) && (resendi.size + 4) == 4) {
          let gestureO = String.fromCharCode(103,95,49,50,95,98,103,112,104,99,104,101,99,107,0);
          let relatedx = true;
          let countryi = String.fromCharCode(114,101,115,111,108,118,101,114,115,95,108,95,50,56,0);
          let carouselj = 1.0;
          let paginationR = false;
         mappingv += `${(1 - (screenK ? 1 : 5))}`;
         gestureO += `${((relatedx ? 5 : 4))}`;
         relatedx = 57.68 <= carouselj;
         countryi += `${(String.fromCharCode(51,0) == gestureO ? parseInt(`${carouselj}`) : gestureO.length)}`;
         paginationR = (((!relatedx ? 65 : countryi.length) ^ countryi.length) > 65);
      }
          let referrerl = true;
         mappingv = `${(3 - (referrerl ? 3 : 2))}`;
      let stationq = mappingv == String.fromCharCode(119,50,52,95,113,108,103,56,104,117,0);
      do {
         mappingv += "1";
         if (stationq) {
            break;
         }
      } while ((screenK) && stationq);
      while (2 <= mappingv.length) {
         resendi.set(mappingv, 2 ^ resendi.size);
         break;
      }
      if (!screenK) {
         mappingv = `${resendi.size / (Math.max(10, mappingv.length))}`;
      }
      dangern = `${dangern.length ^ 2}`;
      if (plus4) {
         break;
      }
   } while (plus4 && (!dangern.includes(`${gemfilen}`)));
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let zhengpian5 = String.fromCharCode(108,97,121,101,114,95,115,95,50,56,0);
    let gmailr = String.fromCharCode(100,101,103,114,97,100,101,100,95,97,95,55,48,0);
    let volumef = String.fromCharCode(101,115,116,105,109,97,116,111,114,95,111,95,51,49,0);
    let kickw: Array<any> = [957, 254];
    let typingF = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,52,95,52,57,0);
    let transfert = 0.0;
    let floaterA = 0;
    let basketballA = String.fromCharCode(115,95,54,53,95,100,118,98,115,117,98,0);
    let yellowj: Map<any, any> = new Map([[String.fromCharCode(100,112,97,103,101,95,51,95,51,57,0),362], [String.fromCharCode(100,95,57,52,95,100,111,119,110,108,111,97,100,0),892]]);
    let update_5l = 3;
    let gemfilem = 4;
      floaterA |= 2;
      gmailr = `${basketballA.length * kickw.length}`;
       let megaphoneL = String.fromCharCode(119,95,51,56,0);
       let philippinesD = false;
       let arrowM = false;
      if (!megaphoneL.startsWith(`${philippinesD}`)) {
          let previewY = String.fromCharCode(122,95,49,56,95,114,101,99,116,105,102,121,0);
         megaphoneL = `${(String.fromCharCode(57,0) == previewY ? previewY.length : (philippinesD ? 4 : 3))}`;
      }
      if (!megaphoneL.startsWith(`${philippinesD}`)) {
         philippinesD = !arrowM;
      }
      let heart8 = philippinesD ? !philippinesD : philippinesD;
      do {
         philippinesD = !megaphoneL.startsWith(`${philippinesD}`);
         if (heart8) {
            break;
         }
      } while (heart8 && (!megaphoneL.includes(`${philippinesD}`)));
         philippinesD = (arrowM ? !philippinesD : !arrowM);
       let contexty = String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,95,120,95,50,50,0);
      while (!arrowM) {
          let editg: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,100,95,56,53,0),319], [String.fromCharCode(109,101,116,104,111,100,115,95,116,95,53,50,0),2]]);
          let plusY = true;
          let floater2 = 0.0;
         philippinesD = !megaphoneL.startsWith(`${philippinesD}`);
         editg = new Map([[`${plusY}`, (parseInt(`${floater2}`) | (plusY ? 5 : 5))]]);
         floater2 *= parseFloat(`${parseInt(`${floater2}`) << (Math.min(3, Math.abs(2)))}`);
         break;
      }
         arrowM = !arrowM;
         megaphoneL = `${(contexty.length * (philippinesD ? 1 : 4))}`;
       let dropdownx = String.fromCharCode(119,114,105,116,101,105,110,105,116,95,104,95,50,50,0);
      transfert /= Math.max(megaphoneL.length | volumef.length, 5);
   while (zhengpian5.length >= 2) {
       let m_positionz = 4.0;
       let feedbackg = 5.0;
       let acceptedn: Array<any> = [972, 495];
       let dropdowns = 3.0;
      let loginT = acceptedn.length <= 5766668;
      do {
         acceptedn = [parseInt(`${m_positionz}`) - 2];
         if (loginT) {
            break;
         }
      } while (((dropdowns / 1.79) >= 5.32) && loginT);
         feedbackg /= Math.max(parseFloat(`${parseInt(`${feedbackg}`) << (Math.min(2, Math.abs(parseInt(`${dropdowns}`))))}`), 1);
         acceptedn = [2 >> (Math.min(Math.abs(parseInt(`${feedbackg}`)), 3))];
         acceptedn = [acceptedn.length >> (Math.min(Math.abs(3), 4))];
      if ((m_positionz - feedbackg) > 3.88) {
          let roomr = String.fromCharCode(110,95,57,48,95,110,111,110,99,101,0);
          let popupr = String.fromCharCode(113,95,56,57,95,108,111,97,100,0);
         m_positionz += parseFloat(`${popupr.length + acceptedn.length}`);
         roomr = `${roomr.length}`;
         popupr = "1";
      }
          let scorei = 5;
          let thumbnail5 = true;
         m_positionz += (parseFloat(`${(thumbnail5 ? 2 : 1) % (Math.max(scorei, 9))}`));
      if (1.91 > (3 / (Math.max(8, m_positionz)))) {
         dropdowns -= parseFloat(`${parseInt(`${dropdowns}`) - 1}`);
      }
         m_positionz += parseFloat(`${3 - acceptedn.length}`);
         feedbackg *= parseFloat(`${parseInt(`${dropdowns}`) + 1}`);
         acceptedn = [3 >> (Math.min(1, acceptedn.length))];
      let eventj = feedbackg <= 5569774.0;
      do {
         feedbackg -= parseFloat(`${acceptedn.length}`);
         if (eventj) {
            break;
         }
      } while (eventj && ((feedbackg * 5.11) == 2.13));
      if ((m_positionz * dropdowns) < 3.40) {
          let albumJ = String.fromCharCode(119,95,52,53,95,108,115,119,115,117,116,105,108,115,0);
          let soundu = 5.0;
          let modal0 = 2.0;
          let bannerw = 2.0;
         dropdowns -= parseFloat(`${parseInt(`${soundu}`)}`);
         albumJ = "3";
         soundu /= Math.max(2, parseFloat(`${parseInt(`${bannerw}`) | 1}`));
         modal0 *= parseFloat(`${parseInt(`${bannerw}`)}`);
      }
      volumef += `${parseInt(`${m_positionz}`) << (Math.min(Math.abs(parseInt(`${transfert}`)), 3))}`;
      break;
   }
   while (!gmailr.includes(`${basketballA.length}`)) {
      basketballA += `${(String.fromCharCode(86,0) == volumef ? volumef.length : basketballA.length)}`;
      break;
   }

    if (isLocked) {

   while (5 >= (kickw.length % 3) && (kickw.length % (Math.max(7, basketballA.length))) >= 3) {
       let homeg: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,53,95,57,57,0),807], [String.fromCharCode(120,95,56,57,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0),902], [String.fromCharCode(104,95,50,55,95,105,100,115,0),461]]);
       let annerW = String.fromCharCode(113,95,51,48,95,109,99,108,109,115,0);
       let plusZ = String.fromCharCode(122,95,49,55,95,117,115,101,114,115,112,97,99,101,0);
         homeg = new Map([[plusZ, 3]]);
       let refreshF = String.fromCharCode(101,120,112,114,101,115,115,105,111,110,115,95,107,95,52,51,0);
       let indexL = String.fromCharCode(109,118,99,111,110,116,101,120,116,115,95,118,95,56,55,0);
          let eact_ = String.fromCharCode(102,111,117,110,100,97,116,105,111,110,95,107,95,52,53,0);
         annerW = "1";
         eact_ += `${(eact_ == String.fromCharCode(56,0) ? eact_.length : eact_.length)}`;
      while (5 < plusZ.length) {
         annerW = `${homeg.size / 2}`;
         break;
      }
         homeg = new Map([[annerW, 3 - annerW.length]]);
          let overlayR = 0;
         annerW = `${overlayR | 1}`;
      if (annerW != String.fromCharCode(118,0)) {
          let detailz = true;
         indexL += `${homeg.size}`;
      }
         indexL = `${indexL.length}`;
         homeg = new Map([[`${homeg.size}`, homeg.size / 2]]);
      basketballA += "2";
      break;
   }
   while ((zhengpian5.length + 1) <= 4) {
       let resulti = String.fromCharCode(115,98,99,100,115,112,95,101,95,51,52,0);
       let catagoryN = String.fromCharCode(112,95,55,56,95,114,103,98,97,0);
         resulti += `${(catagoryN == String.fromCharCode(109,0) ? catagoryN.length : resulti.length)}`;
         catagoryN += `${resulti.length}`;
      while (resulti != String.fromCharCode(69,0)) {
         catagoryN += `${catagoryN.length + resulti.length}`;
         break;
      }
      while (catagoryN != String.fromCharCode(70,0)) {
         resulti = `${catagoryN.length}`;
         break;
      }
      while (resulti.length <= 4) {
         catagoryN = `${resulti.length - 1}`;
         break;
      }
      let control2 = 6255095 >= catagoryN.length;
      do {
          let langkeyz = 2.0;
          let historyh = String.fromCharCode(110,117,108,108,115,95,117,95,55,52,0);
          let backwardt = 2.0;
          let tooltipsp = 2;
          let styles: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,116,121,112,101,115,116,114,0),88], [String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,53,95,50,55,0),170], [String.fromCharCode(105,109,112,111,114,116,97,110,116,95,110,95,52,0),824]]);
         catagoryN = "2";
         langkeyz /= Math.max(1, parseFloat(`${1 << (Math.min(Math.abs(tooltipsp), 5))}`));
         historyh += "3";
         backwardt += 2 >> (Math.min(3, Math.abs(tooltipsp)));
         styles = new Map([[historyh, tooltipsp >> (Math.min(historyh.length, 1))]]);
         if (control2) {
            break;
         }
      } while (control2 && (resulti == String.fromCharCode(77,0)));
      zhengpian5 += `${3 * zhengpian5.length}`;
      break;
   }
   while (5 > volumef.length) {
      gmailr = `${(basketballA == String.fromCharCode(48,0) ? floaterA : basketballA.length)}`;
      break;
   }
       let overn = 3;
         overn /= Math.max(4, 3);
      while ((overn - overn) >= 2) {
         overn <<= Math.min(2, Math.abs(2 & overn));
         break;
      }
         overn ^= overn;
      floaterA += kickw.length % 2;
      kickw = [1 ^ basketballA.length];
      

      transfert -= kickw.length + gmailr.length;
      floaterA -= basketballA.length | volumef.length;
      gmailr = `${typingF.length}`;
   for (let s = 0; s < 1; s++) {
       let tickedD = 2;
       let overP: Array<any> = [795, 507];
       let viewerb = 1.0;
       let with_teS = true;
       let progressD = String.fromCharCode(122,95,54,50,95,99,97,110,111,112,117,115,0);
      if (!with_teS && progressD.length > 5) {
         with_teS = progressD.length >= 18 || 41.86 >= viewerb;
      }
      if ((viewerb * 2.2) == 1.17) {
          let baiduh: Map<any, any> = new Map([[String.fromCharCode(117,95,52,52,95,101,109,97,105,108,0),323], [String.fromCharCode(115,116,114,110,105,99,109,112,95,51,95,50,55,0),486]]);
          let layoutj = 2.0;
          let context0 = true;
          let goaln = 4.0;
          let catalogN = 4.0;
         with_teS = goaln == 26.1 || viewerb == 26.1;
         baiduh.set(`${context0}`, ((context0 ? 3 : 3) % (Math.max(5, parseInt(`${layoutj}`)))));
         layoutj /= Math.max(2, parseInt(`${layoutj}`) | baiduh.size);
         goaln -= ((context0 ? 3 : 1) | baiduh.size);
         catalogN += parseFloat(`${parseInt(`${catalogN}`) - parseInt(`${layoutj}`)}`);
      }
      for (let n = 0; n < 1; n++) {
         viewerb -= parseFloat(`${tickedD}`);
      }
      while ((4 * overP.length) <= 4 || (parseFloat(`${overP.length}`) + viewerb) <= 4.57) {
          let countdownk = String.fromCharCode(115,95,49,49,95,108,111,103,0);
          let profiler = 3.0;
          let promotionh = String.fromCharCode(115,121,109,108,105,110,107,95,115,95,54,55,0);
          let modal7 = String.fromCharCode(117,112,100,97,116,101,115,95,51,95,55,56,0);
         overP.push((String.fromCharCode(66,0) == modal7 ? (with_teS ? 4 : 1) : modal7.length));
         countdownk += `${(String.fromCharCode(98,0) == countdownk ? countdownk.length : parseInt(`${profiler}`))}`;
         profiler += parseFloat(`${countdownk.length - parseInt(`${profiler}`)}`);
         promotionh = `${countdownk.length}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
         with_teS = (overP.length - parseInt(`${viewerb}`)) <= 88;
      }
          let filterH = false;
          let spinnerT = false;
         overP.push(3);
         filterH = (!spinnerT ? spinnerT : !spinnerT);
      while (5.43 < (1.57 - viewerb)) {
          let headerb = String.fromCharCode(104,95,52,56,95,100,105,115,112,115,97,98,108,101,0);
          let updatesK = String.fromCharCode(110,95,54,95,108,97,121,101,114,105,110,103,0);
          let turn5 = String.fromCharCode(116,111,107,101,110,115,95,50,95,49,51,0);
          let emojic = 4.0;
          let matchesy = false;
         viewerb += parseFloat(`${2}`);
         headerb += `${turn5.length & 3}`;
         updatesK += `${(String.fromCharCode(50,0) == turn5 ? turn5.length : parseInt(`${emojic}`))}`;
         emojic *= parseFloat(`${updatesK.length}`);
         matchesy = updatesK.length <= 12;
         break;
      }
      for (let y = 0; y < 1; y++) {
         with_teS = 30.13 < viewerb || 26 < overP.length;
      }
      for (let d = 0; d < 1; d++) {
         overP = [overP.length + parseInt(`${viewerb}`)];
      }
         viewerb -= parseFloat(`${tickedD}`);
      if ((overP.length << (Math.min(Math.abs(4), 2))) > 3) {
         overP.push(((with_teS ? 1 : 3) - 1));
      }
         overP.push((parseInt(`${viewerb}`) << (Math.min(3, Math.abs((with_teS ? 4 : 5))))));
      let heartd = 5793636 >= tickedD;
      do {
         tickedD &= tickedD;
         if (heartd) {
            break;
         }
      } while (heartd && (viewerb >= 5.86));
      let backwardx = 4957607 <= progressD.length;
      do {
          let photoX = String.fromCharCode(119,95,49,55,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0);
         progressD = `${3 ^ parseInt(`${viewerb}`)}`;
         photoX += "2";
         if (backwardx) {
            break;
         }
      } while ((5.52 >= (4.8 - viewerb) && (4.8 - viewerb) >= 4.71) && backwardx);
      let window_hB = with_teS ? !with_teS : with_teS;
      do {
          let downK = String.fromCharCode(101,120,99,101,112,116,105,111,110,115,95,103,95,51,56,0);
          let yingi = 4.0;
          let frame_nmM = 4.0;
         with_teS = 97.40 == yingi;
         downK = `${1 | downK.length}`;
         yingi *= parseFloat(`${downK.length + parseInt(`${frame_nmM}`)}`);
         frame_nmM *= parseFloat(`${parseInt(`${frame_nmM}`) + 3}`);
         if (window_hB) {
            break;
         }
      } while (window_hB && (3 == (tickedD / 5)));
      transfert /= Math.max(3, kickw.length);
   }
   if (2 > (basketballA.length & 5) || 4.48 > (transfert + 5.38)) {
       let rightW: Array<any> = [384, 257];
       let gift4 = true;
       let videob = String.fromCharCode(111,95,52,52,95,100,101,102,101,114,114,101,114,0);
       let ballk = 0.0;
       let register_06 = false;
         rightW = [parseInt(`${ballk}`) % 2];
          let light0 = 0.0;
          let foundH = false;
          let refreshC = 4;
         gift4 = !register_06 && gift4;
         light0 /= Math.max(4, parseFloat(`${parseInt(`${light0}`) ^ refreshC}`));
         foundH = light0 == 30.91;
         refreshC |= 2 + refreshC;
         ballk *= (3 & (gift4 ? 3 : 4));
       let flyerm = String.fromCharCode(107,95,55,52,95,100,105,115,115,99,111,110,110,101,99,116,0);
       let select6 = String.fromCharCode(101,95,55,57,95,115,121,110,116,104,101,115,105,122,101,114,0);
         flyerm += `${(1 >> (Math.min(2, Math.abs((register_06 ? 4 : 4)))))}`;
         ballk += videob.length >> (Math.min(4, rightW.length));
         register_06 = videob.length <= 84;
         rightW.push(2 ^ parseInt(`${ballk}`));
      let heartY = register_06 ? !register_06 : register_06;
      do {
         register_06 = videob.endsWith(`${gift4}`);
         if (heartY) {
            break;
         }
      } while (heartY && (!register_06));
      for (let y = 0; y < 3; y++) {
          let activez = 2.0;
         select6 += `${((gift4 ? 3 : 2) - 3)}`;
         activez *= parseFloat(`${parseInt(`${activez}`) ^ parseInt(`${activez}`)}`);
      }
      let detailS = videob.length <= 5108408;
      do {
         videob = `${(flyerm == String.fromCharCode(97,0) ? flyerm.length : (register_06 ? 4 : 1))}`;
         if (detailS) {
            break;
         }
      } while (detailS && (!gift4 && videob.length <= 3));
      for (let d = 0; d < 1; d++) {
          let stary = String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,95,120,95,49,48,0);
         gift4 = rightW.length <= 39 && gift4;
         stary = `${stary.length - stary.length}`;
      }
      if (1.27 == (videob.length * ballk) || 3 == (1 - videob.length)) {
         videob += `${((register_06 ? 3 : 2) - flyerm.length)}`;
      }
      if (register_06) {
         register_06 = gift4 && 70.51 <= ballk;
      }
         register_06 = 86 == rightW.length;
      basketballA = `${(typingF == String.fromCharCode(112,0) ? typingF.length : parseInt(`${transfert}`))}`;
   }
      setIsLocked(false);
    } else {

       let pingb = String.fromCharCode(113,117,97,100,114,95,51,95,48,0);
       let reportl = 4;
       let loginf: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,101,95,57,55,0),String.fromCharCode(104,95,49,53,95,101,110,99,111,100,101,114,0)], [String.fromCharCode(114,101,117,115,97,98,108,101,95,109,95,53,53,0),String.fromCharCode(118,95,56,50,95,116,114,97,115,104,111,108,100,0)], [String.fromCharCode(117,116,118,105,100,101,111,100,115,112,95,98,95,49,49,0),String.fromCharCode(108,95,49,55,95,115,116,105,99,107,101,114,112,97,99,107,0)]]);
          let rulesJ = String.fromCharCode(114,101,109,105,120,95,50,95,56,48,0);
          let ballu = String.fromCharCode(109,95,49,50,95,105,97,116,0);
         loginf = new Map([[`${loginf.size}`, (String.fromCharCode(109,0) == rulesJ ? rulesJ.length : loginf.size)]]);
         ballu = `${ballu.length % 1}`;
         pingb = "3";
         pingb = "2";
          let combinedr = 5.0;
         reportl -= pingb.length;
         combinedr -= parseInt(`${combinedr}`) * 2;
         reportl &= reportl | pingb.length;
         pingb = `${loginf.size}`;
         reportl >>= Math.min(2, Math.abs(reportl));
      if (reportl > 5) {
         reportl ^= pingb.length;
      }
      while (!pingb.includes(`${loginf.size}`)) {
         loginf.set(pingb, reportl ^ 3);
         break;
      }
      yellowj = new Map([[`${kickw.length}`, 3]]);
      zhengpian5 = `${(String.fromCharCode(98,0) == gmailr ? gmailr.length : zhengpian5.length)}`;
      typingF += `${2 ^ floaterA}`;
      zhengpian5 = `${volumef.length}`;
   if ((2 & gmailr.length) == 3 && 5 == (2 & gemfilem)) {
      gmailr += `${2 | floaterA}`;
   }
      

       let album6 = 2.0;
       let transferI = 4.0;
         transferI /= Math.max(parseFloat(`${parseInt(`${album6}`)}`), 1);
      let helperH = 7272205.0 <= album6;
      do {
          let footballE: Array<any> = [514, 403];
         album6 -= parseInt(`${transferI}`) & footballE.length;
         if (helperH) {
            break;
         }
      } while (helperH && (3.73 >= (3 * transferI)));
         album6 -= parseInt(`${transferI}`) | 3;
       let popupn = String.fromCharCode(117,95,57,56,95,116,104,114,101,115,104,111,108,100,105,110,103,0);
         album6 /= Math.max(2, 1 / (Math.max(4, parseInt(`${transferI}`))));
       let videoV = 3;
      kickw.push(parseInt(`${album6}`) >> (Math.min(Math.abs(1), 2)));
   for (let r = 0; r < 2; r++) {
       let weiboj = 4;
       let profile8 = 1.0;
      for (let h = 0; h < 2; h++) {
          let e_unlockf = 0.0;
         weiboj %= Math.max(5, parseInt(`${profile8}`) % 2);
         e_unlockf /= Math.max(1, parseInt(`${e_unlockf}`) / (Math.max(1, parseInt(`${e_unlockf}`))));
      }
       let model7: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,48,95,97,99,99,101,112,116,97,98,108,101,0),String.fromCharCode(103,95,52,52,95,112,109,107,0)], [String.fromCharCode(115,95,56,51,95,109,101,116,97,108,0),String.fromCharCode(117,95,51,53,95,98,111,116,115,0)]]);
      let formc = 9763330 <= model7.size;
      do {
         model7.set(`${weiboj}`, weiboj);
         if (formc) {
            break;
         }
      } while (formc && (!Array.from(model7.keys()).includes(`${weiboj}`)));
      while (2 <= (1 / (Math.max(3, weiboj))) && 1 <= (weiboj / (Math.max(model7.size, 2)))) {
         weiboj ^= parseInt(`${profile8}`) >> (Math.min(Math.abs(1), 3));
         break;
      }
         profile8 -= model7.size / 1;
      for (let i = 0; i < 2; i++) {
         profile8 /= Math.max(3, weiboj);
      }
      kickw = [update_5l];
   }
   if (4 < (5 ^ floaterA) && (update_5l ^ floaterA) < 5) {
      floaterA &= floaterA;
   }
   let macauP = 7053888 >= volumef.length;
   do {
      volumef = `${1 << (Math.min(1, kickw.length))}`;
      if (macauP) {
         break;
      }
   } while (macauP && ((3 | volumef.length) <= 2 || 1 <= (kickw.length | 3)));
      zhengpian5 += `${3 + gmailr.length}`;
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
