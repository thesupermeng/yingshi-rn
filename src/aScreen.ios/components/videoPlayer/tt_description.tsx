import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControls from './tt_holder_detail';
import BottomControls from './tt_icon';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/tt_moon_favicon_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/tt_round';
import { ttAcceptedCountItem, ttWeibo, ttAppsOther } from '@type/tt_line_borderless';
import VodCombinedGesture from '../gestures/vod/tt_ajax_bootsplash';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/roundExpired.svg';
import ProjectIcon from '@static/images/sinaProjectEdit.svg'
import VodListVertical from '../vod/tt_player';
import GesturesGuide from '../gestures/vod/tt_product';
import VodLiveStationListVertical from '../vod/tt_flipper';
import FastImage from '../common/tt_connection';

type ttSmall = {
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
  episodes?: ttWeibo
  movieList?: ttAppsOther[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: ttAcceptedCountItem[],
  isFetchingRecommendedMovies?: boolean
};

type ttSpinner = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<ttSpinner, ttSmall>(({
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
       let gradle9 = String.fromCharCode(112,114,111,109,112,101,103,95,112,95,56,48,0);
    let descR = String.fromCharCode(103,95,51,56,95,102,101,116,99,104,101,114,0);
    let appleB = 5;
    let navigationp = 5.0;
    let logoQ = String.fromCharCode(114,111,103,114,101,115,115,95,97,95,57,54,0);
    let giftr = String.fromCharCode(117,95,53,50,95,117,97,100,100,0);
    let gesturesg = String.fromCharCode(115,118,97,103,95,57,95,56,0);
    let type_fpl: Array<any> = [460, 445, 910];
    let sheetB = 3.0;
    let dycreatorq = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,98,95,49,51,0);
    let interstitialc: Array<any> = [452, 742];
    let layoutX = 1.0;
    let minivoda: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,111,114,115,95,101,95,49,57,0),473], [String.fromCharCode(114,101,102,112,97,115,115,95,106,95,54,52,0),734]]);
    let fileds = 2.0;
   while ((2 + gesturesg.length) == 1) {
       let fullW = 5.0;
       let downO = 4;
       let i_managerS = 1;
       let resultY = String.fromCharCode(112,108,97,116,102,111,114,109,95,111,95,55,53,0);
       let reducerH = 2.0;
       let privilegec = String.fromCharCode(121,95,57,48,95,120,109,108,115,0);
       let searchbarv = String.fromCharCode(109,95,55,55,95,112,97,103,101,111,117,116,0);
      if ((5.76 - fullW) < 1.66 || (5.76 - fullW) < 4.20) {
         resultY += `${resultY.length % 1}`;
      }
      while (3 >= (resultY.length * 2)) {
         reducerH += 1 - resultY.length;
         break;
      }
      let combine9 = downO >= 7948343;
      do {
         downO -= 3;
         if (combine9) {
            break;
         }
      } while (((downO - 5) >= 5) && combine9);
      while (3 == (2 >> (Math.min(1, Math.abs(i_managerS))))) {
          let reducerw: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,97,115,111,99,95,98,95,53,49,0),410], [String.fromCharCode(112,104,112,95,122,95,54,0),185], [String.fromCharCode(112,95,54,48,95,115,117,98,112,101,108,0),708]]);
          let mbnativeadvancedd = String.fromCharCode(115,101,116,105,118,95,103,95,54,55,0);
          let klevins = String.fromCharCode(100,95,52,57,95,115,116,117,100,105,111,0);
          let stringsz = String.fromCharCode(102,102,105,111,95,105,95,50,54,0);
          let zhubo4 = 1.0;
         i_managerS /= Math.max(1 >> (Math.min(5, Math.abs(reducerw.size))), 2);
         reducerw.set(mbnativeadvancedd, klevins.length);
         mbnativeadvancedd = `${parseInt(`${zhubo4}`)}`;
         klevins = `${parseInt(`${zhubo4}`)}`;
         stringsz = `${parseInt(`${zhubo4}`)}`;
         break;
      }
         reducerH *= searchbarv.length;
          let mintegral5 = String.fromCharCode(100,121,110,97,109,105,99,97,108,108,121,95,116,95,50,57,0);
         fullW += 1 + parseInt(`${fullW}`);
         mintegral5 += `${1 * mintegral5.length}`;
      while (1 >= resultY.length) {
          let loading0 = 4.0;
          let orientationi: Map<any, any> = new Map([[String.fromCharCode(122,105,109,103,95,48,95,55,53,0),55], [String.fromCharCode(108,115,104,105,102,116,95,100,95,49,54,0),341], [String.fromCharCode(105,109,112,111,114,116,101,114,95,112,95,55,0),974]]);
          let sportb = 0.0;
          let kickY: Map<any, any> = new Map([[String.fromCharCode(102,114,111,122,101,110,95,100,95,57,51,0),62], [String.fromCharCode(100,112,116,114,115,95,54,95,52,57,0),209], [String.fromCharCode(112,115,102,105,108,101,95,114,95,57,49,0),72]]);
         resultY = `${kickY.size}`;
         loading0 *= orientationi.size % 3;
         orientationi.set(`${loading0}`, orientationi.size);
         sportb -= parseFloat(`${orientationi.size}`);
         kickY = new Map([[`${sportb}`, parseInt(`${sportb}`)]]);
         break;
      }
         downO += searchbarv.length;
       let update_9y = String.fromCharCode(99,95,55,48,95,98,105,116,112,97,99,107,101,100,0);
       let eact9 = String.fromCharCode(114,118,100,97,116,97,95,107,95,55,50,0);
         resultY += "2";
          let feedbackF = 3.0;
          let gradlewk = 4.0;
          let matchM = String.fromCharCode(116,95,56,56,95,103,101,116,120,118,97,114,0);
         searchbarv = `${privilegec.length | 1}`;
         feedbackF /= Math.max(parseFloat(`${matchM.length ^ 3}`), 3);
         gradlewk /= Math.max(matchM.length % (Math.max(1, 4)), 1);
      if (1 <= searchbarv.length || privilegec == String.fromCharCode(108,0)) {
          let megaphoneO = String.fromCharCode(101,95,49,57,95,116,104,114,101,115,104,111,108,100,0);
          let robotoG = String.fromCharCode(108,95,53,95,111,112,101,110,0);
         searchbarv = "1";
         megaphoneO = `${robotoG.length}`;
         robotoG = `${megaphoneO.length ^ robotoG.length}`;
      }
       let malaysiaQ = 4.0;
      while (1 <= update_9y.length) {
         searchbarv = `${2 - eact9.length}`;
         break;
      }
      gesturesg += `${type_fpl.length * 3}`;
      break;
   }
      navigationp *= dycreatorq.length * 2;
   while (4 == (parseInt(`${layoutX}`) - dycreatorq.length)) {
       let navigationM = 1.0;
         navigationM += parseFloat(`${parseInt(`${navigationM}`)}`);
         navigationM *= parseFloat(`${parseInt(`${navigationM}`) + parseInt(`${navigationM}`)}`);
      while (navigationM > 4.9) {
          let downloadw = String.fromCharCode(99,95,50,50,95,115,101,110,115,105,116,105,118,105,116,121,0);
          let actionsz: Map<any, any> = new Map([[String.fromCharCode(99,102,101,110,99,95,117,95,55,50,0),false ], [String.fromCharCode(112,95,52,49,95,116,105,109,101,115,116,97,109,112,101,100,0),false ], [String.fromCharCode(99,104,111,111,115,101,114,95,120,95,56,56,0),true ]]);
          let feedbackQ = 2;
         navigationM -= parseFloat(`${actionsz.size}`);
         downloadw += `${feedbackQ}`;
         actionsz.set(downloadw, (downloadw == String.fromCharCode(73,0) ? feedbackQ : downloadw.length));
         break;
      }
      layoutX *= parseFloat(`${type_fpl.length}`);
      break;
   }
      gradle9 += `${(descR == String.fromCharCode(90,0) ? descR.length : parseInt(`${navigationp}`))}`;
   if (3 == gesturesg.length) {
      gesturesg += `${descR.length & 2}`;
   }
   for (let g = 0; g < 1; g++) {
      layoutX -= parseFloat(`${interstitialc.length}`);
   }
   while ((descR.length - parseInt(`${sheetB}`)) > 5 && (descR.length + 5) > 4) {
      sheetB += parseFloat(`${appleB | 1}`);
      break;
   }
   if ((appleB - giftr.length) < 1 || (appleB - 1) < 3) {
      appleB /= Math.max(5, gradle9.length);
   }
   for (let s = 0; s < 3; s++) {
      type_fpl = [appleB ^ logoQ.length];
   }
   let zhengpianW = 6760006 >= dycreatorq.length;
   do {
       let rewardvideoh: Array<any> = [281, 636, 914];
       let gift2 = String.fromCharCode(102,95,55,54,95,117,108,116,105,0);
         rewardvideoh = [2];
         gift2 += `${gift2.length}`;
      for (let b = 0; b < 1; b++) {
          let chartl = String.fromCharCode(99,108,111,115,105,110,103,95,115,95,49,54,0);
         rewardvideoh.push(2);
         chartl = `${chartl.length}`;
      }
          let a_position4 = String.fromCharCode(110,95,55,56,95,118,105,101,119,101,114,115,0);
          let selecti = true;
         rewardvideoh = [((selecti ? 5 : 3))];
         a_position4 = `${(String.fromCharCode(89,0) == a_position4 ? a_position4.length : a_position4.length)}`;
         selecti = a_position4.length == a_position4.length;
      for (let o = 0; o < 1; o++) {
         rewardvideoh = [gift2.length];
      }
      let mbbannerp = gift2 == String.fromCharCode(121,53,105,99,50,97,114,0);
      do {
          let gradle8: Array<any> = [413, 392];
          let helperf = 0;
         gift2 += `${helperf >> (Math.min(gradle8.length, 4))}`;
         if (mbbannerp) {
            break;
         }
      } while (mbbannerp && (5 <= (gift2.length % (Math.max(6, rewardvideoh.length)))));
      dycreatorq += `${(String.fromCharCode(105,0) == dycreatorq ? dycreatorq.length : parseInt(`${layoutX}`))}`;
      if (zhengpianW) {
         break;
      }
   } while (zhengpianW && (appleB < dycreatorq.length));
       let y_manager3 = String.fromCharCode(108,115,112,114,95,97,95,51,0);
       let topons: Array<any> = [String.fromCharCode(117,110,102,114,101,101,122,101,95,53,95,56,54,0), String.fromCharCode(119,95,56,52,0), String.fromCharCode(116,114,97,105,108,105,110,103,95,113,95,54,53,0)];
       let episodes6 = 2.0;
         episodes6 *= parseFloat(`${topons.length & 2}`);
         topons.push(topons.length);
         episodes6 -= parseFloat(`${y_manager3.length}`);
         episodes6 -= parseFloat(`${1}`);
          let faviconv = 5;
          let sinay = 5.0;
         topons = [topons.length >> (Math.min(4, Math.abs(faviconv)))];
         faviconv &= 3;
         sinay /= Math.max(parseInt(`${sinay}`) * 3, 2);
         episodes6 += parseFloat(`${topons.length * 3}`);
          let roomy = String.fromCharCode(104,95,49,57,95,98,114,101,97,100,0);
          let statisticsk = 4.0;
         episodes6 /= Math.max(2, parseFloat(`${parseInt(`${statisticsk}`) % 1}`));
         roomy = `${2 - roomy.length}`;
         statisticsk /= Math.max(roomy.length ^ 3, 1);
      if (!topons.includes(episodes6)) {
         topons.push(parseInt(`${episodes6}`) | y_manager3.length);
      }
         y_manager3 += `${3 & y_manager3.length}`;
      giftr = `${interstitialc.length}`;
       let gpayn = String.fromCharCode(114,95,51,55,95,97,99,99,117,109,117,108,97,116,101,0);
       let championg: Map<any, any> = new Map([[String.fromCharCode(119,95,56,56,95,97,100,106,117,115,116,109,101,110,116,0),true ], [String.fromCharCode(98,95,52,53,95,99,101,114,116,115,0),true ], [String.fromCharCode(102,95,52,50,95,98,111,120,112,108,111,116,0),true ]]);
       let fastp = 4.0;
      if ((fastp * parseFloat(`${gpayn.length}`)) <= 3.96) {
         fastp += parseFloat(`${parseInt(`${fastp}`)}`);
      }
         gpayn += `${championg.size >> (Math.min(Math.abs(1), 4))}`;
      if (4 >= (parseInt(`${fastp}`) - gpayn.length)) {
         gpayn = `${(String.fromCharCode(57,0) == gpayn ? gpayn.length : parseInt(`${fastp}`))}`;
      }
         gpayn += `${(gpayn == String.fromCharCode(86,0) ? gpayn.length : championg.size)}`;
      if (championg.size < gpayn.length) {
         championg = new Map([[`${championg.size}`, 3 % (Math.max(9, parseInt(`${fastp}`)))]]);
      }
          let tickedC = String.fromCharCode(112,114,101,99,101,110,99,101,95,122,95,52,50,0);
          let mbnativeadvancedE = 0.0;
          let statisticsg = String.fromCharCode(107,97,108,109,97,110,95,110,95,50,48,0);
         championg = new Map([[statisticsg, parseInt(`${mbnativeadvancedE}`)]]);
         tickedC = `${tickedC.length}`;
         mbnativeadvancedE += tickedC.length;
         championg.set(`${fastp}`, gpayn.length);
         championg = new Map([[`${championg.size}`, gpayn.length]]);
         gpayn += "3";
      appleB /= Math.max(4, parseInt(`${fastp}`));
   while ((giftr.length >> (Math.min(2, Math.abs(minivoda.size)))) <= 2 && (minivoda.size >> (Math.min(Math.abs(2), 1))) <= 2) {
      minivoda = new Map([[logoQ, 2]]);
      break;
   }
   for (let a = 0; a < 3; a++) {
      appleB &= parseInt(`${navigationp}`) | 1;
   }
   for (let d = 0; d < 1; d++) {
      descR += `${type_fpl.length ^ dycreatorq.length}`;
   }
   while (gesturesg.includes(`${type_fpl.length}`)) {
      type_fpl = [parseInt(`${sheetB}`)];
      break;
   }
      appleB ^= parseInt(`${layoutX}`);
   for (let b = 0; b < 2; b++) {
      giftr += `${(gesturesg == String.fromCharCode(85,0) ? gesturesg.length : parseInt(`${layoutX}`))}`;
   }
      dycreatorq += `${(descR == String.fromCharCode(85,0) ? descR.length : parseInt(`${sheetB}`))}`;
       let questi: Array<any> = [627, 23, 506];
       let flipperH: Map<any, any> = new Map([[String.fromCharCode(105,95,51,51,95,100,111,119,110,108,111,97,100,105,110,103,0),406], [String.fromCharCode(104,101,120,95,49,95,56,49,0),879], [String.fromCharCode(98,95,54,56,95,97,115,116,101,114,105,115,107,0),756]]);
          let typingo = String.fromCharCode(99,111,118,101,114,97,103,101,95,122,95,57,51,0);
          let bingt: Map<any, any> = new Map([[String.fromCharCode(113,95,53,51,95,118,97,114,0),466], [String.fromCharCode(111,110,116,97,99,116,95,57,95,49,0),773]]);
          let bottoms: Array<any> = [444, 385];
         flipperH.set(typingo, typingo.length);
         bingt.set(`${bottoms.length}`, bottoms.length);
          let heartx = String.fromCharCode(105,110,102,111,95,116,95,49,54,0);
         flipperH.set(heartx, heartx.length);
         questi = [2 & flipperH.size];
      while ((3 + questi.length) == 5 && 3 == (questi.length + flipperH.size)) {
          let mbnativeR = 5;
          let vieweru: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,105,95,99,95,57,0),605], [String.fromCharCode(118,95,50,57,95,99,117,114,108,121,0),44], [String.fromCharCode(115,95,56,49,95,108,109,108,109,0),968]]);
         flipperH = new Map([[`${flipperH.size}`, flipperH.size]]);
         mbnativeR &= 1;
         vieweru = new Map([[`${vieweru.size}`, 3 / (Math.max(9, mbnativeR))]]);
         break;
      }
         questi = [questi.length * flipperH.size];
      let tailB = questi.length <= 9703323;
      do {
         questi = [flipperH.size * 3];
         if (tailB) {
            break;
         }
      } while (tailB && ((questi.length ^ flipperH.size) <= 1));
      sheetB += parseFloat(`${2 * type_fpl.length}`);
   if (gesturesg.length > 5) {
      gesturesg = `${type_fpl.length}`;
   }
       let upgradem = String.fromCharCode(110,95,57,48,95,108,101,115,115,0);
       let pause_ = String.fromCharCode(114,95,56,48,95,97,116,116,97,99,104,0);
       let editS = String.fromCharCode(99,117,98,101,95,105,95,50,52,0);
         editS += `${(String.fromCharCode(49,0) == editS ? upgradem.length : editS.length)}`;
      let zhengpianM = pause_.length <= 6045485;
      do {
         pause_ += `${(editS == String.fromCharCode(68,0) ? pause_.length : editS.length)}`;
         if (zhengpianM) {
            break;
         }
      } while (zhengpianM && (3 <= pause_.length));
         pause_ = "2";
      while (editS != pause_) {
         pause_ += `${pause_.length >> (Math.min(editS.length, 4))}`;
         break;
      }
      while (editS == String.fromCharCode(120,0)) {
         upgradem = `${upgradem.length}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         pause_ += "3";
      }
          let theme_: Map<any, any> = new Map([[String.fromCharCode(97,109,111,117,110,116,95,118,95,49,53,0),true ], [String.fromCharCode(111,99,107,105,110,103,95,106,95,55,53,0),false ], [String.fromCharCode(119,95,49,50,95,118,108,105,110,101,0),true ]]);
          let anytimeM = true;
         editS = `${((anytimeM ? 5 : 3))}`;
         theme_.set(`${theme_.size}`, theme_.size - 1);
         anytimeM = 4 == theme_.size;
         upgradem = `${pause_.length & 3}`;
      for (let j = 0; j < 3; j++) {
         upgradem = `${2 + editS.length}`;
      }
      dycreatorq = `${2 & pause_.length}`;
   let plashd = gradle9 == String.fromCharCode(109,105,114,108,113,48,104,50,0);
   do {
      gradle9 = `${descR.length}`;
      if (plashd) {
         break;
      }
   } while ((2 > gradle9.length) && plashd);

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
       let assistY = true;
    let storeX = String.fromCharCode(110,95,49,52,95,114,101,99,101,110,116,108,121,0);
    let customD = String.fromCharCode(116,95,57,55,95,112,111,115,116,115,99,97,108,101,0);
    let selectp = 0.0;
    let penalty9 = String.fromCharCode(117,110,112,97,99,107,95,114,95,52,55,0);
    let formT = String.fromCharCode(117,95,51,57,95,103,119,103,116,0);
    let catagoryu = 5;
    let volumex: Array<any> = [650, 451];
    let chinaw = String.fromCharCode(101,97,99,115,95,50,95,56,48,0);
    let corner0 = String.fromCharCode(116,95,55,95,112,112,102,108,97,103,115,0);
    let project3 = String.fromCharCode(110,116,115,99,95,105,95,56,0);
    let member1: Array<any> = [549, 458];
    let frame_sH: Array<any> = [920, 736];
    let expandc = false;
    let pingE = String.fromCharCode(107,95,49,50,95,105,110,116,101,114,108,101,97,118,101,0);
    let formd = true;
    let faviconU = String.fromCharCode(100,117,112,115,111,114,116,95,98,95,57,49,0);
      volumex = [storeX.length];
      volumex = [catagoryu];
   for (let k = 0; k < 1; k++) {
      assistY = 40 <= volumex.length;
   }
   let paginationB = catagoryu <= 9815461;
   do {
      catagoryu += project3.length | 2;
      if (paginationB) {
         break;
      }
   } while (paginationB && (1 <= (formT.length / 5)));
   if ((3 + member1.length) <= 2 && 3 <= (member1.length + 3)) {
      member1 = [formT.length | 2];
   }
   let collectionH = assistY ? !assistY : assistY;
   do {
      assistY = member1.length > 85;
      if (collectionH) {
         break;
      }
   } while (collectionH && (!assistY || 5 < formT.length));
       let dangerg = 1.0;
       let resendV = 0.0;
       let area9: Array<any> = [String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,110,95,57,49,0), String.fromCharCode(120,95,51,53,95,97,99,99,101,112,116,115,0), String.fromCharCode(97,95,49,50,95,98,97,111,98,97,98,0)];
         resendV /= Math.max(1, 2);
         dangerg *= parseInt(`${resendV}`);
         resendV *= parseInt(`${dangerg}`);
       let catagoryE = false;
       let klevin0 = true;
         area9 = [parseInt(`${dangerg}`) & 3];
       let progressm = 5.0;
       let topicb = 0.0;
          let bing8 = 5.0;
          let topon1 = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,97,95,50,50,0);
          let carouself = 0;
         catagoryE = resendV > bing8;
         bing8 += carouself & topon1.length;
         topon1 += `${2 + carouself}`;
         topicb /= Math.max(1, parseFloat(`${3 / (Math.max(parseInt(`${progressm}`), 9))}`));
         klevin0 = progressm >= 12.39 || topicb >= 12.39;
      chinaw += `${(String.fromCharCode(108,0) == chinaw ? parseInt(`${dangerg}`) : chinaw.length)}`;
      catagoryu += volumex.length % 3;
       let mbridgeH = 3.0;
       let mail_: Map<any, any> = new Map([[String.fromCharCode(119,95,56,54,95,99,111,114,114,101,99,116,105,111,110,0),String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,95,112,95,56,50,0)], [String.fromCharCode(98,95,55,95,119,111,114,100,108,105,115,116,0),String.fromCharCode(112,95,53,57,95,118,111,105,100,0)], [String.fromCharCode(111,95,57,51,95,115,116,97,108,101,0),String.fromCharCode(99,104,105,108,100,95,51,95,49,52,0)]]);
       let roomV: Array<any> = [240, 632];
      if ((mbridgeH / (Math.max(2.50, 2))) == 2.0 && (roomV.length | 3) == 3) {
         roomV.push(parseInt(`${mbridgeH}`) * 3);
      }
      if ((mbridgeH / 3.44) <= 2.72 || (parseInt(`${mbridgeH}`) / (Math.max(roomV.length, 2))) <= 2) {
         mbridgeH *= 1 + mail_.size;
      }
      for (let i = 0; i < 2; i++) {
          let reminderc = 3.0;
          let questX = String.fromCharCode(114,101,97,100,95,109,95,48,0);
          let detailsv = String.fromCharCode(100,95,57,55,95,100,101,110,115,101,0);
          let builds: Map<any, any> = new Map([[String.fromCharCode(118,95,53,56,95,122,101,114,111,118,0),String.fromCharCode(114,101,115,101,116,98,117,102,95,55,95,53,52,0)], [String.fromCharCode(112,95,57,52,0),String.fromCharCode(105,110,115,101,114,116,95,108,95,57,0)], [String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,114,95,50,53,0),String.fromCharCode(114,101,110,111,114,109,101,95,57,95,52,57,0)]]);
         roomV.push(questX.length ^ 2);
         reminderc += builds.size;
         questX += `${parseInt(`${reminderc}`) >> (Math.min(Math.abs(3), 1))}`;
         detailsv = `${builds.size << (Math.min(detailsv.length, 4))}`;
      }
      if ((mbridgeH - 2.74) < 4.7) {
          let bootsplashq = 4;
         mbridgeH /= Math.max(bootsplashq / (Math.max(mail_.size, 4)), 4);
      }
          let utilsh = 3.0;
          let tempH = String.fromCharCode(99,121,99,108,101,100,95,116,95,49,50,0);
          let mbnativeb = String.fromCharCode(107,95,54,56,95,112,105,120,101,108,102,108,111,97,116,0);
         mbridgeH -= mail_.size << (Math.min(5, Math.abs(parseInt(`${mbridgeH}`))));
         utilsh += (parseFloat(`${tempH == String.fromCharCode(57,0) ? mbnativeb.length : tempH.length}`));
         mbnativeb += `${mbnativeb.length}`;
         mail_.set(`${mbridgeH}`, 3 << (Math.min(5, roomV.length)));
         roomV = [2 << (Math.min(1, Math.abs(mail_.size)))];
      let shirtg = mail_.size >= 9328556;
      do {
         mail_.set(`${mbridgeH}`, 1);
         if (shirtg) {
            break;
         }
      } while (shirtg && (5 < roomV.length));
          let strz = 2;
         mail_.set(`${strz}`, 3);
      assistY = String.fromCharCode(51,0) == project3 || volumex.length < 47;
   if (customD == String.fromCharCode(69,0)) {
      corner0 += "3";
   }
      member1.push(corner0.length);
   if (project3.includes(`${catagoryu}`)) {
      catagoryu &= penalty9.length & 1;
   }
   let steph = customD == String.fromCharCode(104,97,56,95,0);
   do {
      customD = `${storeX.length << (Math.min(2, member1.length))}`;
      if (steph) {
         break;
      }
   } while ((!customD.includes(`${volumex.length}`)) && steph);

    setShowSliderThumbnail(!showSliderThumbnail);

       let entryR = 1.0;
         entryR /= Math.max(5, 1);
          let resendE = 3;
          let calendarP = 2;
         entryR /= Math.max(2, 1);
         resendE |= calendarP;
      for (let x = 0; x < 1; x++) {
         entryR *= parseInt(`${entryR}`) - parseInt(`${entryR}`);
      }
      penalty9 += `${(project3 == String.fromCharCode(68,0) ? catagoryu : project3.length)}`;
      assistY = member1.length == 60 && selectp == 66.15;
   let becomeV = 6829282 >= storeX.length;
   do {
       let turnW = 1.0;
       let suggestionU = String.fromCharCode(109,117,108,116,105,112,108,101,120,101,100,95,55,95,53,48,0);
       let ballI = true;
       let awayy = String.fromCharCode(104,97,115,104,97,98,108,101,95,50,95,50,49,0);
       let chinat = 5.0;
      if (2.0 > (3.88 / (Math.max(7, turnW))) || (turnW * 3.88) > 3.44) {
         turnW -= ((ballI ? 4 : 5));
      }
         chinat /= Math.max((parseFloat(`${(ballI ? 5 : 3)}`)), 1);
      while (1.67 == (3.95 - turnW) || 2 == (4 - suggestionU.length)) {
         suggestionU += `${1 ^ parseInt(`${turnW}`)}`;
         break;
      }
          let anythinkQ = String.fromCharCode(112,111,108,108,115,95,119,95,55,55,0);
         suggestionU += `${anythinkQ.length}`;
      while (!suggestionU.includes(`${chinat}`)) {
         chinat -= parseFloat(`${3}`);
         break;
      }
      for (let j = 0; j < 1; j++) {
         suggestionU += `${(String.fromCharCode(67,0) == suggestionU ? parseInt(`${turnW}`) : suggestionU.length)}`;
      }
      if (!awayy.startsWith(`${ballI}`)) {
         awayy = `${awayy.length << (Math.min(Math.abs(3), 2))}`;
      }
      for (let t = 0; t < 3; t++) {
         suggestionU += `${(awayy == String.fromCharCode(76,0) ? awayy.length : parseInt(`${chinat}`))}`;
      }
      for (let f = 0; f < 1; f++) {
         chinat /= Math.max(4, parseFloat(`${awayy.length}`));
      }
      if (!suggestionU.includes(`${turnW}`)) {
          let sellD = 2.0;
          let overlaya = 3.0;
          let eactY = 1.0;
         turnW /= Math.max(5, suggestionU.length / (Math.max(9, parseInt(`${turnW}`))));
         sellD *= parseFloat(`${parseInt(`${overlaya}`) ^ 1}`);
         overlaya *= parseFloat(`${3}`);
         eactY *= parseFloat(`${parseInt(`${overlaya}`) | parseInt(`${sellD}`)}`);
      }
      while (suggestionU != String.fromCharCode(114,0) && awayy.length > 3) {
          let overlayl: Map<any, any> = new Map([[String.fromCharCode(111,95,57,50,95,100,101,99,111,114,0),true ], [String.fromCharCode(101,95,53,48,95,108,105,98,97,118,99,111,100,101,99,0),true ], [String.fromCharCode(101,95,52,53,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0),true ]]);
          let context1 = 2.0;
          let f_locku = String.fromCharCode(115,101,101,110,95,103,95,56,54,0);
         suggestionU += `${((ballI ? 3 : 3))}`;
         overlayl = new Map([[`${overlayl.size}`, 1]]);
         context1 += parseFloat(`${2 >> (Math.min(4, Math.abs(parseInt(`${context1}`))))}`);
         f_locku = `${(String.fromCharCode(103,0) == f_locku ? f_locku.length : parseInt(`${context1}`))}`;
         break;
      }
       let flyerp = 5.0;
       let baidu_ = 1.0;
      if (!ballI) {
          let buttonI = String.fromCharCode(97,95,56,56,95,109,98,114,116,104,114,101,97,100,0);
          let plus7 = String.fromCharCode(100,95,50,48,95,112,111,115,116,112,111,110,101,100,0);
          let statisticsR = 2;
          let mbridges = 0.0;
          let singlea = true;
         ballI = mbridges <= 32.16;
         buttonI = `${3 - plus7.length}`;
         plus7 = `${buttonI.length >> (Math.min(Math.abs(2), 2))}`;
         statisticsR |= (String.fromCharCode(51,0) == plus7 ? buttonI.length : plus7.length);
         mbridges /= Math.max((buttonI.length << (Math.min(3, Math.abs((singlea ? 5 : 3))))), 5);
      }
      if ((baidu_ - flyerp) == 4.4 || (4.4 - baidu_) == 3.12) {
          let with_oY = String.fromCharCode(98,95,53,49,95,98,105,116,105,122,101,110,0);
          let videof = String.fromCharCode(108,95,52,95,101,100,105,116,111,114,0);
          let bodan9 = false;
          let condensed0: Array<any> = [994, 940];
          let chart9 = true;
         flyerp += 2;
         with_oY = `${(videof == String.fromCharCode(48,0) ? videof.length : (chart9 ? 4 : 3))}`;
         bodan9 = !videof.includes(`${bodan9}`);
         condensed0.push(with_oY.length | 1);
         chart9 = !chart9;
      }
      let anythinkv = chinat <= 9729570.0;
      do {
         chinat += parseFloat(`${parseInt(`${flyerp}`)}`);
         if (anythinkv) {
            break;
         }
      } while (anythinkv && (flyerp < chinat));
      storeX += `${((assistY ? 1 : 5))}`;
      if (becomeV) {
         break;
      }
   } while ((1 > storeX.length) && becomeV);
      assistY = volumex.length < penalty9.length;
   for (let v = 0; v < 1; v++) {
      assistY = chinaw == penalty9;
   }
      storeX = `${(project3 == String.fromCharCode(86,0) ? project3.length : member1.length)}`;
      member1 = [storeX.length];
      volumex.push(1);
   if (1 <= volumex.length) {
      volumex = [member1.length];
   }
       let turn5: Map<any, any> = new Map([[String.fromCharCode(109,95,55,51,95,118,101,108,97,112,115,101,100,116,105,109,101,114,0),599], [String.fromCharCode(114,97,100,97,114,95,111,95,51,52,0),307]]);
         turn5.set(`${turn5.size}`, turn5.size);
      while (1 <= (turn5.size - 4) && 4 <= (turn5.size - turn5.size)) {
          let chartt = 4.0;
          let rewardvideov = 5.0;
          let flipperC = String.fromCharCode(109,97,105,108,99,104,105,109,112,95,97,95,53,0);
          let turno: Array<any> = [712, 12];
         turn5.set(flipperC, flipperC.length);
         chartt += turno.length;
         rewardvideov /= Math.max(2, parseFloat(`${parseInt(`${rewardvideov}`)}`));
         turno = [parseInt(`${rewardvideov}`)];
         break;
      }
      if (turn5.get(`${turn5.size}`) == null) {
          let targetd = String.fromCharCode(116,97,98,108,101,115,95,50,95,51,49,0);
         turn5 = new Map([[`${turn5.size}`, (targetd == String.fromCharCode(117,0) ? targetd.length : turn5.size)]]);
      }
      chinaw = `${2 << (Math.min(3, Math.abs(turn5.size)))}`;
   if (!storeX.endsWith(`${assistY}`)) {
      assistY = 43 == member1.length;
   }
   for (let r = 0; r < 1; r++) {
      chinaw += `${member1.length * volumex.length}`;
   }
   if (2 > (chinaw.length | 5)) {
      chinaw = `${project3.length << (Math.min(Math.abs(2), 1))}`;
   }
    delayControls(!paused);

   while ((1 * penalty9.length) < 4) {
      penalty9 = `${corner0.length * parseInt(`${selectp}`)}`;
      break;
   }
       let sportn = 4.0;
       let shirt2 = 4.0;
       let ewardedH = 1;
         shirt2 /= Math.max(parseFloat(`${2 ^ ewardedH}`), 3);
      while (4.45 <= (shirt2 - sportn)) {
         shirt2 -= parseFloat(`${1}`);
         break;
      }
       let awayJ = String.fromCharCode(112,95,55,54,95,97,99,111,100,101,99,0);
      let whistleW = ewardedH <= 6611359;
      do {
          let fullm = String.fromCharCode(116,114,97,110,115,108,97,116,101,100,95,118,95,49,56,0);
          let stationk: Array<any> = [696, 975, 394];
          let mbnativeJ = String.fromCharCode(106,95,54,48,95,99,111,109,112,97,99,116,101,100,0);
          let brightness3 = 3;
          let selectiong = false;
         ewardedH *= 1;
         fullm += `${(mbnativeJ == String.fromCharCode(51,0) ? (selectiong ? 5 : 2) : mbnativeJ.length)}`;
         stationk = [(String.fromCharCode(103,0) == mbnativeJ ? brightness3 : mbnativeJ.length)];
         brightness3 |= ((selectiong ? 5 : 2) % (Math.max(brightness3, 10)));
         if (whistleW) {
            break;
         }
      } while (whistleW && (awayJ.length == ewardedH));
          let dialogK = true;
         sportn -= (awayJ == String.fromCharCode(72,0) ? (dialogK ? 1 : 2) : awayJ.length);
       let trashU = String.fromCharCode(117,95,56,56,95,102,111,114,98,105,100,100,101,110,0);
         ewardedH ^= parseInt(`${shirt2}`) & parseInt(`${sportn}`);
          let videos = false;
         trashU += `${parseInt(`${sportn}`) >> (Math.min(1, Math.abs(parseInt(`${shirt2}`))))}`;
         videos = videos || !videos;
      while (trashU != String.fromCharCode(83,0)) {
          let langkeyi = String.fromCharCode(117,95,53,54,95,103,97,109,101,0);
          let rightL = 1;
          let adultP = 4.0;
         awayJ = `${1 & parseInt(`${sportn}`)}`;
         langkeyi += `${rightL * langkeyi.length}`;
         rightL -= 1;
         adultP /= Math.max(4, (parseFloat(`${langkeyi == String.fromCharCode(77,0) ? parseInt(`${adultP}`) : langkeyi.length}`)));
         break;
      }
      formT += `${frame_sH.length}`;
   while (assistY) {
       let materialz = String.fromCharCode(115,101,97,114,99,104,105,110,103,95,113,95,50,52,0);
       let holderV = String.fromCharCode(99,95,52,48,95,97,117,116,111,100,101,108,101,116,101,0);
         materialz += `${holderV.length | 2}`;
       let layoutX: Map<any, any> = new Map([[String.fromCharCode(101,95,50,95,97,117,116,104,105,110,102,111,0),String.fromCharCode(99,97,114,95,118,95,53,57,0)], [String.fromCharCode(112,95,51,95,115,105,112,114,107,100,97,116,97,0),String.fromCharCode(103,101,111,99,111,100,101,114,95,120,95,53,54,0)], [String.fromCharCode(100,101,108,116,97,113,95,56,95,55,57,0),String.fromCharCode(110,95,55,49,95,114,116,114,101,101,99,104,101,99,107,0)]]);
         holderV = `${(String.fromCharCode(72,0) == materialz ? holderV.length : materialz.length)}`;
       let reminderK = String.fromCharCode(121,95,53,56,95,112,97,115,116,101,98,111,97,114,100,0);
       let descI = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,115,95,115,95,50,48,0);
         layoutX.set(`${holderV}`, holderV.length);
       let submitV = 4.0;
       let langC = 3.0;
      member1.push(materialz.length);
      break;
   }
      catagoryu /= Math.max(((assistY ? 1 : 5)), 3);
       let analyticsi = String.fromCharCode(122,95,56,54,95,101,99,114,101,99,111,118,101,114,0);
       let knewinterstitialD = 1;
          let appsN = 0;
         analyticsi = `${knewinterstitialD - 3}`;
         appsN *= appsN & 1;
      for (let y = 0; y < 1; y++) {
          let linkP = 1.0;
         knewinterstitialD ^= analyticsi.length;
         linkP /= Math.max(parseInt(`${linkP}`), 2);
      }
         analyticsi = "2";
         knewinterstitialD <<= Math.min(Math.abs(knewinterstitialD ^ 1), 1);
         analyticsi = `${analyticsi.length & knewinterstitialD}`;
      let sellW = analyticsi.length >= 5534003;
      do {
         analyticsi += `${analyticsi.length}`;
         if (sellW) {
            break;
         }
      } while (sellW && (3 >= (analyticsi.length + 5) && (5 + analyticsi.length) >= 3));
      catagoryu %= Math.max(frame_sH.length ^ 2, 3);
       let viewerm = String.fromCharCode(112,95,55,53,95,97,105,110,116,0);
         viewerm += "1";
      for (let f = 0; f < 3; f++) {
          let viewerS = 2.0;
          let holderC: Array<any> = [378, 692];
          let empty8 = 5;
         viewerm = `${holderC.length * viewerm.length}`;
         viewerS -= 3 + empty8;
         holderC = [empty8];
      }
         viewerm += "3";
      storeX += `${corner0.length - 2}`;
       let taiwanY = String.fromCharCode(107,101,114,110,101,108,95,50,95,56,51,0);
       let weiboO: Array<any> = [871, 17, 748];
       let hejio = false;
          let halff = 2;
         weiboO.push(2);
         halff |= halff;
          let window_ut = 3;
          let condensedS = 2;
          let colorsK = true;
         weiboO.push((String.fromCharCode(101,0) == taiwanY ? taiwanY.length : weiboO.length));
         window_ut |= 1;
         condensedS <<= Math.min(Math.abs(window_ut & condensedS), 4);
         colorsK = !colorsK;
      for (let a = 0; a < 2; a++) {
          let viewsY: Array<any> = [127, 755];
          let disconnected3: Map<any, any> = new Map([[String.fromCharCode(111,112,97,100,95,102,95,51,52,0),585], [String.fromCharCode(117,112,112,101,114,99,97,115,101,95,103,95,54,54,0),45]]);
         weiboO = [(viewsY.length * (hejio ? 4 : 4))];
         viewsY = [1 * disconnected3.size];
         disconnected3 = new Map([[`${disconnected3.size}`, 1]]);
      }
       let dangerH = 2.0;
       let mbridgeK = 4.0;
       let report5 = 4.0;
       let gradleq = 4.0;
         taiwanY += "2";
          let paginationS = 2;
          let policyT = 2.0;
          let selectL = String.fromCharCode(109,109,120,101,120,116,95,112,95,49,48,48,0);
         taiwanY += `${2 ^ parseInt(`${dangerH}`)}`;
         paginationS <<= Math.min(4, Math.abs(2));
         policyT -= parseFloat(`${parseInt(`${policyT}`)}`);
         selectL = `${2 & parseInt(`${policyT}`)}`;
         taiwanY = `${parseInt(`${gradleq}`) + 1}`;
      let heartq = 9241556.0 >= mbridgeK;
      do {
         mbridgeK /= Math.max(2, 5);
         if (heartq) {
            break;
         }
      } while (heartq && (!hejio));
      assistY = (frame_sH.length & member1.length) > 4;
      member1.push(frame_sH.length + 1);
      member1 = [2];
       let chaty = String.fromCharCode(118,114,101,99,116,95,117,95,55,52,0);
       let flyerh: Map<any, any> = new Map([[String.fromCharCode(105,95,52,48,95,114,101,103,105,115,116,101,114,101,100,0),230], [String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,118,95,51,56,0),983], [String.fromCharCode(120,95,57,56,95,109,97,114,107,0),224]]);
       let long_lcx = 5;
      for (let p = 0; p < 1; p++) {
          let fastforwardm = 5;
          let placeholderb: Array<any> = [552, 246, 661];
          let debugu = 2.0;
          let analyticY = String.fromCharCode(119,95,53,0);
          let lessM = true;
         flyerh = new Map([[`${flyerh.size}`, chaty.length - flyerh.size]]);
         fastforwardm &= analyticY.length / (Math.max(1, 1));
         placeholderb.push(placeholderb.length);
         debugu += analyticY.length;
         lessM = fastforwardm > debugu;
      }
      for (let n = 0; n < 2; n++) {
          let statisticsQ = true;
          let dice5 = String.fromCharCode(98,95,51,56,95,99,111,109,112,0);
          let lessU: Array<any> = [665, 95];
          let modalI = String.fromCharCode(117,95,48,95,101,99,107,101,121,0);
         long_lcx *= ((statisticsQ ? 5 : 5) * 3);
         statisticsQ = dice5 == String.fromCharCode(120,0) || lessU.length <= 55;
         dice5 = `${modalI.length >> (Math.min(Math.abs(2), 4))}`;
         lessU.push(1 << (Math.min(3, modalI.length)));
      }
         chaty += `${long_lcx | flyerh.size}`;
          let mbbanner1: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,115,105,98,108,101,95,107,95,52,0),3], [String.fromCharCode(99,111,108,111,114,109,97,112,95,52,95,53,53,0),834]]);
          let hovery = String.fromCharCode(116,95,54,48,95,112,97,114,101,110,0);
         long_lcx |= 3 << (Math.min(4, Math.abs(mbbanner1.size)));
         mbbanner1 = new Map([[hovery, hovery.length / (Math.max(2, 4))]]);
         flyerh = new Map([[`${flyerh.size}`, 1]]);
         chaty += `${long_lcx * 3}`;
         long_lcx += chaty.length;
      let interstitialQ = chaty.length <= 5713485;
      do {
          let assistd = 2;
          let viewer6: Map<any, any> = new Map([[String.fromCharCode(109,95,54,56,95,115,101,99,116,105,111,110,0),953], [String.fromCharCode(118,95,51,95,112,114,111,112,115,0),606]]);
          let tickD: Map<any, any> = new Map([[String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,122,95,56,56,0),466], [String.fromCharCode(115,95,55,55,95,99,111,108,108,101,99,116,0),730]]);
          let selected9 = 1.0;
         chaty += "3";
         assistd /= Math.max(4, 1);
         viewer6 = new Map([[`${tickD.size}`, parseInt(`${selected9}`)]]);
         tickD = new Map([[`${tickD.size}`, parseInt(`${selected9}`)]]);
         if (interstitialQ) {
            break;
         }
      } while ((5 > chaty.length) && interstitialQ);
         flyerh = new Map([[`${flyerh.size}`, flyerh.size]]);
      customD += `${volumex.length}`;
   while (catagoryu >= 1) {
      catagoryu &= member1.length * project3.length;
      break;
   }
       let downloadingm = 0;
         downloadingm %= Math.max(4, downloadingm + downloadingm);
          let eighteenn = String.fromCharCode(117,110,99,114,111,112,112,101,100,95,121,95,49,57,0);
          let forwardY = 3;
          let circleY = 1.0;
         downloadingm %= Math.max(downloadingm + forwardY, 1);
         eighteenn += `${parseInt(`${circleY}`) << (Math.min(eighteenn.length, 1))}`;
         forwardY |= eighteenn.length + 1;
         circleY *= parseInt(`${circleY}`);
         downloadingm += downloadingm >> (Math.min(5, Math.abs(downloadingm)));
      formT += `${catagoryu}`;
   let reportS = expandc ? !expandc : expandc;
   do {
      expandc = (project3.length - chinaw.length) <= 72;
      if (reportS) {
         break;
      }
   } while ((expandc && 4 >= chinaw.length) && reportS);
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let filled8 = true;
    let turn9 = String.fromCharCode(111,112,116,105,109,105,122,101,100,95,114,95,49,53,0);
    let gradlewD = 0.0;
    let targett = String.fromCharCode(101,95,52,95,117,114,108,0);
    let forwarde: Array<any> = [696, 493];
    let episodes4: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,105,110,103,95,98,95,57,57,0),672], [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,121,95,48,0),636]]);
    let macauI = String.fromCharCode(112,101,97,107,115,95,51,95,57,48,0);
    let configm: Array<any> = [650, 964, 320];
    let areas = String.fromCharCode(114,95,49,55,95,99,111,108,108,105,115,116,0);
    let mbridgeR = 1.0;
      turn9 = "3";
      targett += `${macauI.length - 1}`;
       let viewsD = String.fromCharCode(109,111,100,98,95,119,95,52,51,0);
       let combineo = false;
      let logoutU = viewsD.length >= 6723046;
      do {
         viewsD = `${(2 + (combineo ? 5 : 1))}`;
         if (logoutU) {
            break;
         }
      } while (logoutU && (!viewsD.startsWith(`${combineo}`)));
      for (let n = 0; n < 1; n++) {
         viewsD = `${((combineo ? 4 : 3) * viewsD.length)}`;
      }
         viewsD = "2";
          let annerA = String.fromCharCode(121,95,51,52,95,109,115,103,115,109,100,101,99,0);
         viewsD += `${((combineo ? 1 : 3))}`;
         annerA = "3";
      for (let o = 0; o < 2; o++) {
         combineo = !viewsD.endsWith(`${combineo}`);
      }
         combineo = ((viewsD.length ^ (!combineo ? viewsD.length : 56)) <= 56);
      macauI = `${macauI.length}`;
      gradlewD /= Math.max(2, parseInt(`${gradlewD}`) * 2);
      filled8 = 12 <= macauI.length;
   for (let b = 0; b < 2; b++) {
       let submit2 = String.fromCharCode(101,95,49,54,95,115,116,97,110,100,97,114,100,115,0);
       let bottomE = String.fromCharCode(110,116,115,115,95,120,95,52,56,0);
      while (1 <= submit2.length) {
         bottomE += `${bottomE.length}`;
         break;
      }
      let stringq = bottomE.length >= 5012702;
      do {
          let utilsf = String.fromCharCode(99,104,97,105,110,115,95,101,95,56,48,0);
          let gpayZ: Array<any> = [878, 776];
          let thumbnailY = String.fromCharCode(97,95,53,51,95,119,101,105,103,104,116,105,110,103,0);
          let popupV = 1.0;
          let downloadera = 1.0;
         bottomE += `${submit2.length * 3}`;
         utilsf = `${thumbnailY.length ^ parseInt(`${popupV}`)}`;
         gpayZ = [gpayZ.length << (Math.min(Math.abs(2), 1))];
         thumbnailY += "1";
         popupV /= Math.max(gpayZ.length / (Math.max(7, utilsf.length)), 4);
         downloadera *= parseFloat(`${1 ^ parseInt(`${popupV}`)}`);
         if (stringq) {
            break;
         }
      } while (stringq && (!bottomE.startsWith(`${submit2.length}`)));
      if (submit2.length <= 5) {
         submit2 += "3";
      }
       let agreementJ = true;
       let filterr = 5;
      for (let r = 0; r < 3; r++) {
         bottomE = `${filterr % 2}`;
      }
      macauI = `${episodes4.size >> (Math.min(macauI.length, 1))}`;
   }
      configm.push(turn9.length);
       let grayc = true;
       let nextb = true;
       let playlista: Map<any, any> = new Map([[String.fromCharCode(115,104,114,117,110,107,95,108,95,53,57,0),675], [String.fromCharCode(107,95,55,49,95,111,98,106,110,105,100,0),175]]);
          let stationO = 0;
          let room6 = 0.0;
          let showj: Map<any, any> = new Map([[String.fromCharCode(118,101,110,117,101,95,54,95,56,55,0),484], [String.fromCharCode(97,108,112,104,97,108,101,115,115,95,120,95,51,48,0),641], [String.fromCharCode(105,110,116,101,114,120,95,104,95,51,49,0),912]]);
         playlista = new Map([[`${playlista.size}`, (playlista.size - (grayc ? 4 : 3))]]);
         stationO *= parseInt(`${room6}`) - 3;
         room6 -= parseFloat(`${parseInt(`${room6}`)}`);
         showj = new Map([[`${room6}`, stationO]]);
         nextb = (nextb ? grayc : nextb);
      if (!grayc) {
         grayc = playlista.get(`${grayc}`) != null;
      }
          let projectF = String.fromCharCode(101,120,116,114,97,99,116,105,111,110,95,118,95,57,53,0);
          let rewind3 = true;
         playlista = new Map([[`${rewind3}`, ((rewind3 ? 4 : 5) << (Math.min(Math.abs(1), 5)))]]);
         projectF += `${2 % (Math.max(2, projectF.length))}`;
         grayc = playlista.get(`${nextb}`) == null;
      let middlewareO = grayc ? !grayc : grayc;
      do {
          let traminiD = true;
          let time_hU = String.fromCharCode(100,95,56,48,95,99,97,99,104,101,115,105,122,101,0);
          let dice0 = String.fromCharCode(105,95,57,56,95,109,98,118,115,0);
          let annerf: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,115,115,108,99,111,110,102,95,118,95,51,55,0),639], [String.fromCharCode(114,95,52,50,95,115,116,105,108,108,0),852], [String.fromCharCode(118,95,51,52,95,105,110,118,105,116,101,0),353]]);
          let agreementa = String.fromCharCode(120,95,53,95,115,97,116,100,0);
         grayc = playlista.size < 35 && grayc;
         traminiD = 43 > annerf.size;
         time_hU = `${dice0.length + annerf.size}`;
         dice0 += `${time_hU.length}`;
         agreementa += `${1 ^ annerf.size}`;
         if (middlewareO) {
            break;
         }
      } while (middlewareO && (!grayc || !nextb));
      for (let q = 0; q < 1; q++) {
          let greenO = 2.0;
          let tumbnailx = 4.0;
          let sansi = 0;
         nextb = !grayc;
         greenO += parseFloat(`${3 - parseInt(`${tumbnailx}`)}`);
         tumbnailx /= Math.max(parseInt(`${greenO}`) % 3, 4);
         sansi |= parseInt(`${greenO}`) + sansi;
      }
         playlista = new Map([[`${playlista.size}`, (3 * (nextb ? 2 : 2))]]);
         grayc = !nextb;
      episodes4 = new Map([[`${configm.length}`, configm.length]]);
       let vignettek = String.fromCharCode(115,105,110,113,105,95,103,95,49,52,0);
       let subsU = 1;
      for (let w = 0; w < 2; w++) {
          let completec = 5;
          let filedj = 2;
          let miniR = 5;
          let questX = String.fromCharCode(107,95,57,53,95,117,110,111,114,100,101,114,101,100,0);
          let friendsq = String.fromCharCode(98,95,57,95,115,116,114,110,115,116,114,0);
         subsU *= questX.length ^ 1;
         completec &= miniR % (Math.max(2, 2));
         filedj &= completec;
         miniR |= friendsq.length;
         questX += "2";
         friendsq += "1";
      }
      while ((1 | vignettek.length) > 1 && (1 | vignettek.length) > 5) {
          let loginK = 0.0;
          let containerx: Array<any> = [String.fromCharCode(120,109,112,101,103,95,116,95,50,56,0), String.fromCharCode(97,108,103,111,95,108,95,51,54,0)];
          let filedh = 0.0;
          let z_position4 = String.fromCharCode(98,95,51,56,95,97,100,109,105,110,115,0);
          let phoneV = String.fromCharCode(98,95,57,57,95,101,110,117,109,118,97,108,117,101,0);
         vignettek += "1";
         loginK /= Math.max(2, parseFloat(`${3}`));
         containerx.push(z_position4.length % (Math.max(phoneV.length, 2)));
         filedh -= phoneV.length;
         z_position4 = `${(String.fromCharCode(119,0) == phoneV ? phoneV.length : containerx.length)}`;
         break;
      }
      if (vignettek.length == 1) {
          let volumeV = false;
          let telegramM = String.fromCharCode(103,95,53,48,95,105,110,116,101,103,101,114,0);
          let stationo = String.fromCharCode(112,114,101,102,101,114,114,101,100,95,115,95,49,50,0);
          let recommendation1 = String.fromCharCode(109,95,48,95,117,116,105,108,0);
          let whistle4 = String.fromCharCode(99,102,104,100,95,120,95,49,51,0);
         subsU /= Math.max(telegramM.length % (Math.max(recommendation1.length, 10)), 3);
         volumeV = whistle4 == stationo;
         telegramM = `${stationo.length}`;
         recommendation1 += `${(3 * (volumeV ? 5 : 2))}`;
         whistle4 = `${whistle4.length % (Math.max(stationo.length, 6))}`;
      }
      if ((4 << (Math.min(3, vignettek.length))) > 3 || (4 << (Math.min(1, Math.abs(subsU)))) > 1) {
         subsU ^= subsU % 1;
      }
      let whitee = subsU >= 9440916;
      do {
         subsU ^= 2 ^ vignettek.length;
         if (whitee) {
            break;
         }
      } while (whitee && (3 <= (subsU % (Math.max(7, vignettek.length)))));
      if (2 >= (vignettek.length % (Math.max(2, 9))) || (vignettek.length % (Math.max(8, subsU))) >= 2) {
         subsU /= Math.max(subsU | vignettek.length, 3);
      }
      turn9 = `${vignettek.length * macauI.length}`;
      turn9 += `${((filled8 ? 4 : 2))}`;
      filled8 = gradlewD == 2.42;
   for (let g = 0; g < 1; g++) {
      gradlewD -= (String.fromCharCode(102,0) == targett ? targett.length : forwarde.length);
   }
       let mbridgec = true;
      if (!mbridgec) {
         mbridgec = (!mbridgec ? mbridgec : mbridgec);
      }
      let filec = mbridgec ? !mbridgec : mbridgec;
      do {
         mbridgec = !mbridgec;
         if (filec) {
            break;
         }
      } while ((!mbridgec && mbridgec) && filec);
          let emojiA = 0;
         mbridgec = !mbridgec;
         emojiA /= Math.max(5, 3 << (Math.min(4, Math.abs(emojiA))));
      macauI += `${2 + episodes4.size}`;
       let injuryv = 2;
       let paginationa = String.fromCharCode(112,104,111,116,111,95,114,95,57,54,0);
       let zhengpian3 = String.fromCharCode(104,95,52,49,95,111,103,103,108,101,0);
         injuryv -= injuryv;
      while (zhengpian3.length < 1) {
          let constantsQ = true;
          let soundc = String.fromCharCode(114,95,52,95,111,108,100,108,105,115,116,0);
          let privileges = true;
          let core5 = String.fromCharCode(111,95,52,49,95,114,101,118,101,114,115,101,100,0);
         paginationa = `${((constantsQ ? 2 : 1))}`;
         constantsQ = !privileges;
         soundc += `${((privileges ? 3 : 1) | core5.length)}`;
         core5 += `${soundc.length + 2}`;
         break;
      }
      if (1 < zhengpian3.length) {
          let handlerf = 4.0;
         paginationa += `${(String.fromCharCode(95,0) == paginationa ? injuryv : paginationa.length)}`;
         handlerf += parseFloat(`${parseInt(`${handlerf}`) >> (Math.min(4, Math.abs(parseInt(`${handlerf}`))))}`);
      }
      for (let h = 0; h < 3; h++) {
         injuryv <<= Math.min(3, Math.abs((String.fromCharCode(103,0) == paginationa ? injuryv : paginationa.length)));
      }
         zhengpian3 += "2";
      while (5 < zhengpian3.length) {
         paginationa += `${2 - zhengpian3.length}`;
         break;
      }
       let benefit0 = false;
       let volumeW = true;
          let philippinesb = String.fromCharCode(106,95,54,54,95,115,101,110,99,0);
          let gradlei = String.fromCharCode(120,95,57,49,95,115,105,110,103,117,108,97,114,0);
         paginationa = "2";
         philippinesb += `${gradlei.length}`;
         gradlei = `${philippinesb.length}`;
      let reactj = zhengpian3 == String.fromCharCode(55,111,110,116,0);
      do {
         zhengpian3 = `${paginationa.length}`;
         if (reactj) {
            break;
         }
      } while (reactj && (2 <= zhengpian3.length));
      gradlewD += (String.fromCharCode(103,0) == paginationa ? paginationa.length : parseInt(`${gradlewD}`));
   for (let t = 0; t < 1; t++) {
      forwarde = [episodes4.size];
   }
   if ((1 << (Math.min(3, configm.length))) == 2) {
      macauI += `${forwarde.length}`;
   }
   while (forwarde.length >= 5) {
      forwarde.push(episodes4.size - 2);
      break;
   }
      macauI = `${3 | forwarde.length}`;
      gradlewD -= forwarde.length;

    onHandleFullScreen();
  };

  const goBack = () => {
       let terms1 = 1.0;
    let loadingH = 3;
    let membershipP = String.fromCharCode(97,117,100,105,111,100,115,112,95,102,95,56,54,0);
    let holderK = 5.0;
    let routerO = false;
    let usernamep = 2.0;
    let bottoms: Array<any> = [String.fromCharCode(99,108,109,117,108,95,114,95,56,52,0), String.fromCharCode(103,95,54,51,95,98,116,114,101,101,0), String.fromCharCode(115,101,116,116,105,110,103,95,101,95,50,53,0)];
    let forwardj: Array<any> = [456, 986];
    let videocommonC = 0;
    let rules1: Array<any> = [388, 962];
    let video6 = 4.0;
    let redirecto = String.fromCharCode(116,101,115,116,98,105,116,95,105,95,52,55,0);
    let formE: Array<any> = [223, 51, 659];
      videocommonC >>= Math.min(3, Math.abs(loadingH));
       let tumbnail7 = String.fromCharCode(112,95,48,95,105,110,116,108,105,115,116,0);
          let link4 = false;
          let formC = 1.0;
          let score9: Array<any> = [143, 793, 627];
         tumbnail7 = `${parseInt(`${formC}`) | 3}`;
         link4 = (30 <= (score9.length >> (Math.min(1, Math.abs((link4 ? 30 : score9.length))))));
         formC *= 3;
      for (let y = 0; y < 1; y++) {
         tumbnail7 += `${(tumbnail7 == String.fromCharCode(87,0) ? tumbnail7.length : tumbnail7.length)}`;
      }
      let paginationD = 4928081 >= tumbnail7.length;
      do {
         tumbnail7 += `${tumbnail7.length >> (Math.min(tumbnail7.length, 2))}`;
         if (paginationD) {
            break;
         }
      } while (paginationD && (tumbnail7.length >= 5));
      holderK += parseFloat(`${parseInt(`${usernamep}`) % (Math.max(1, parseInt(`${holderK}`)))}`);
   let debuge = routerO ? !routerO : routerO;
   do {
      routerO = usernamep < 81.1;
      if (debuge) {
         break;
      }
   } while (((4 - forwardj.length) > 3) && debuge);
      forwardj = [1 % (Math.max(4, rules1.length))];
   while ((1 / (Math.max(5, forwardj.length))) > 5 || 2 > (forwardj.length / (Math.max(1, 3)))) {
      forwardj = [membershipP.length & loadingH];
      break;
   }
   while (3 > forwardj.length && 5 > (3 >> (Math.min(4, forwardj.length)))) {
       let previewL = 2;
       let score8 = 0.0;
       let tailP = 5.0;
       let searchc = 0.0;
         tailP -= parseInt(`${tailP}`) << (Math.min(5, Math.abs(parseInt(`${score8}`))));
       let indexP = 0.0;
       let basketballF = 5.0;
         score8 += 3;
      for (let x = 0; x < 3; x++) {
         basketballF /= Math.max(parseFloat(`${1}`), 5);
      }
      if (1 < (previewL | 2) || (previewL - 2) < 2) {
         previewL %= Math.max(5, parseInt(`${tailP}`) * 2);
      }
          let temperature9 = String.fromCharCode(103,95,55,52,95,112,101,114,102,111,114,109,97,110,99,101,0);
          let typesT = 4;
         tailP += temperature9.length * parseInt(`${basketballF}`);
         temperature9 = `${typesT % 3}`;
         typesT ^= typesT;
         score8 /= Math.max(parseInt(`${basketballF}`), 5);
         searchc -= parseInt(`${basketballF}`);
      let thumbnail4 = 6462280.0 >= tailP;
      do {
         tailP /= Math.max(parseInt(`${score8}`) * parseInt(`${searchc}`), 3);
         if (thumbnail4) {
            break;
         }
      } while ((tailP == indexP) && thumbnail4);
         indexP /= Math.max(5, parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${score8}`)), 4))}`));
       let downloaderL = 3.0;
         indexP *= parseFloat(`${parseInt(`${basketballF}`)}`);
      routerO = searchc == 46.34 && loadingH == 29;
      break;
   }
       let miniC = String.fromCharCode(116,101,114,109,105,110,97,116,101,100,95,117,95,51,57,0);
       let expandV = 1.0;
      if (!miniC.startsWith(`${expandV}`)) {
         expandV *= parseFloat(`${2}`);
      }
      let main_eC = 9511797.0 >= expandV;
      do {
         expandV /= Math.max(1, (parseFloat(`${String.fromCharCode(80,0) == miniC ? parseInt(`${expandV}`) : miniC.length}`)));
         if (main_eC) {
            break;
         }
      } while ((2 <= miniC.length) && main_eC);
         expandV += parseFloat(`${miniC.length}`);
          let videojsi = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,107,95,51,50,0);
          let combinee: Array<any> = [153, 21];
         expandV *= (parseFloat(`${String.fromCharCode(119,0) == miniC ? miniC.length : combinee.length}`));
         videojsi = "2";
         combinee = [videojsi.length - videojsi.length];
      if (1 == miniC.length) {
          let plus8: Array<any> = [815, 446, 541];
          let googleO: Array<any> = [String.fromCharCode(104,111,117,114,95,122,95,56,56,0), String.fromCharCode(108,95,52,51,95,101,116,104,101,114,0), String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,95,53,95,53,57,0)];
          let whatsappa = String.fromCharCode(103,95,56,95,112,101,114,115,105,115,116,97,110,116,0);
          let loadingO = 3;
         expandV -= parseFloat(`${plus8.length >> (Math.min(Math.abs(1), 5))}`);
         plus8 = [loadingO];
         googleO = [whatsappa.length - 2];
         whatsappa = `${googleO.length | whatsappa.length}`;
         loadingO /= Math.max(googleO.length, 4);
      }
         miniC = `${miniC.length - 3}`;
      terms1 *= 2 / (Math.max(parseInt(`${holderK}`), 9));
       let goaln = String.fromCharCode(98,95,51,48,95,100,105,114,97,99,116,97,98,0);
       let thailand_ = String.fromCharCode(112,114,101,100,95,101,95,54,49,0);
         goaln = `${(thailand_ == String.fromCharCode(79,0) ? thailand_.length : goaln.length)}`;
          let smallY = String.fromCharCode(118,97,114,119,105,100,116,104,95,103,95,56,48,0);
         thailand_ = "3";
         smallY += `${2 ^ smallY.length}`;
      while (!goaln.startsWith(thailand_)) {
         thailand_ = `${thailand_.length + goaln.length}`;
         break;
      }
         goaln = `${goaln.length}`;
      for (let e = 0; e < 2; e++) {
         thailand_ = `${1 / (Math.max(1, goaln.length))}`;
      }
          let downloader4 = true;
         goaln += `${(goaln.length | (downloader4 ? 3 : 4))}`;
      usernamep += rules1.length >> (Math.min(5, Math.abs(parseInt(`${terms1}`))));
       let savek = 0.0;
       let clearp = 3.0;
      for (let e = 0; e < 1; e++) {
         savek *= parseFloat(`${parseInt(`${clearp}`) & parseInt(`${savek}`)}`);
      }
          let register_5O = String.fromCharCode(115,100,116,112,95,109,95,51,49,0);
          let holderv = 0.0;
         savek *= parseFloat(`${parseInt(`${savek}`)}`);
         register_5O += `${register_5O.length >> (Math.min(2, Math.abs(parseInt(`${holderv}`))))}`;
         holderv -= 2;
      while ((clearp - savek) > 5.70 || 5.70 > (savek - clearp)) {
         clearp *= parseInt(`${savek}`);
         break;
      }
       let linkw = 4;
      if (2 > (2 * linkw) || 4.82 > (3.99 + clearp)) {
          let traminiz = false;
          let kickI: Map<any, any> = new Map([[String.fromCharCode(115,95,52,55,95,116,111,114,103,98,0),784], [String.fromCharCode(97,110,110,117,108,97,114,95,110,95,49,0),226], [String.fromCharCode(112,95,52,55,95,116,119,111,115,99,97,108,101,0),835]]);
          let orientationX = String.fromCharCode(120,95,51,48,95,116,104,114,101,115,104,111,108,100,101,100,0);
          let buttonp = String.fromCharCode(106,95,56,57,95,105,109,112,108,0);
          let main_c2 = 0.0;
         clearp *= kickI.size;
         traminiz = (12 < ((!traminiz ? 12 : orientationX.length) / (Math.max(3, orientationX.length))));
         kickI = new Map([[buttonp, buttonp.length]]);
         main_c2 += buttonp.length + 3;
      }
          let sideC = 4;
          let debugt = 5;
         clearp *= parseInt(`${savek}`);
         sideC &= debugt;
      videocommonC /= Math.max(3, 2);
      terms1 /= Math.max(4, videocommonC % (Math.max(parseInt(`${usernamep}`), 1)));
   for (let b = 0; b < 3; b++) {
      holderK /= Math.max(parseFloat(`${bottoms.length * rules1.length}`), 2);
   }
   while ((3 / (Math.max(8, forwardj.length))) <= 5 && 4 <= (3 ^ forwardj.length)) {
      usernamep *= loadingH / (Math.max(forwardj.length, 7));
      break;
   }
      loadingH &= membershipP.length;
   while (1 < (rules1.length - 3)) {
      rules1.push(loadingH);
      break;
   }

    delayControls();

       let x_managerb = String.fromCharCode(100,95,51,56,95,98,117,110,100,108,101,0);
      let dicep = x_managerb == String.fromCharCode(104,110,115,100,111,50,118,100,55,0);
      do {
          let carousele: Array<any> = [22, 383];
          let statsm: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,100,95,107,95,56,53,0),String.fromCharCode(98,117,105,108,116,95,112,95,55,50,0)], [String.fromCharCode(116,95,51,49,95,115,109,105,108,105,110,103,0),String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,50,95,56,50,0)]]);
          let castingz = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,95,108,95,49,51,0);
          let langZ = 0.0;
          let mbnativeH: Map<any, any> = new Map([[String.fromCharCode(117,95,48,95,115,111,102,97,108,105,122,101,114,0),String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,95,112,95,52,56,0)], [String.fromCharCode(107,102,109,111,100,101,115,95,52,95,55,50,0),String.fromCharCode(103,101,115,116,117,114,101,115,95,53,95,55,0)], [String.fromCharCode(106,95,51,48,95,102,119,104,116,0),String.fromCharCode(98,105,110,100,105,110,103,95,110,95,54,49,0)]]);
         x_managerb = `${x_managerb.length}`;
         carousele = [(castingz == String.fromCharCode(87,0) ? parseInt(`${langZ}`) : castingz.length)];
         statsm = new Map([[`${statsm.size}`, carousele.length]]);
         langZ += castingz.length;
         mbnativeH.set(`${mbnativeH.size}`, statsm.size);
         if (dicep) {
            break;
         }
      } while ((x_managerb.length <= 5) && dicep);
      while (x_managerb != String.fromCharCode(57,0)) {
         x_managerb += `${x_managerb.length}`;
         break;
      }
         x_managerb = `${x_managerb.length}`;
      videocommonC |= loadingH;
   if (5.84 >= (holderK - 2.50) && 3 >= (loadingH & 1)) {
       let preview2: Array<any> = [196, 957];
       let popupz = 2.0;
       let catagoryn = String.fromCharCode(112,95,51,51,95,99,111,109,112,111,115,105,116,101,0);
         catagoryn += `${catagoryn.length - 1}`;
          let materialq = 5;
         preview2 = [preview2.length];
         materialq ^= 3;
      while ((popupz - catagoryn.length) >= 1.68) {
         popupz -= parseInt(`${popupz}`) & preview2.length;
         break;
      }
       let infoy = 1.0;
      while ((1.49 - popupz) >= 4.0 || (1.49 - popupz) >= 5.54) {
         popupz -= parseInt(`${popupz}`) / (Math.max(parseInt(`${infoy}`), 9));
         break;
      }
      while ((infoy / 5.22) >= 1.19 && 5.22 >= (infoy / (Math.max(parseFloat(`${preview2.length}`), 5)))) {
         infoy -= parseFloat(`${parseInt(`${popupz}`) - catagoryn.length}`);
         break;
      }
       let topicu: Array<any> = [808, 765, 120];
         infoy -= parseFloat(`${topicu.length & parseInt(`${infoy}`)}`);
         preview2 = [parseInt(`${popupz}`)];
      holderK += (parseFloat(`${parseInt(`${holderK}`) - (routerO ? 1 : 2)}`));
   }
   let progresso = 5529797.0 >= video6;
   do {
       let typingM = String.fromCharCode(107,95,53,95,114,108,111,116,116,105,101,0);
       let philippinesD = true;
       let settingM = true;
      for (let q = 0; q < 1; q++) {
         philippinesD = typingM.length > 51;
      }
      for (let s = 0; s < 3; s++) {
         settingM = typingM.includes(`${philippinesD}`);
      }
      video6 *= bottoms.length - parseInt(`${terms1}`);
      if (progresso) {
         break;
      }
   } while (progresso && (4 <= (1 & videocommonC) && (parseInt(`${video6}`) * videocommonC) <= 1));
   while (videocommonC < 2) {
      videocommonC |= 3 << (Math.min(1, membershipP.length));
      break;
   }
      terms1 -= 2 << (Math.min(Math.abs(parseInt(`${terms1}`)), 4));
      loadingH <<= Math.min(1, Math.abs(1));
   for (let f = 0; f < 1; f++) {
      terms1 -= (String.fromCharCode(78,0) == redirecto ? redirecto.length : parseInt(`${video6}`));
   }
      redirecto = `${rules1.length * 1}`;
   let model_ = terms1 >= 5195094.0;
   do {
       let filter5 = true;
       let traminis = String.fromCharCode(99,97,112,116,117,114,101,114,95,52,95,54,50,0);
      if (filter5 || 3 >= traminis.length) {
          let tickK = 4.0;
          let megaphoneS = 0.0;
          let middleR = 2.0;
          let untickV = true;
          let resendv: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,95,97,108,116,101,114,110,97,116,105,111,110,0),564], [String.fromCharCode(115,105,103,115,108,111,116,95,113,95,52,57,0),341]]);
         traminis = `${((filter5 ? 5 : 3) / (Math.max(parseInt(`${tickK}`), 6)))}`;
         tickK *= parseFloat(`${parseInt(`${middleR}`)}`);
         megaphoneS /= Math.max(3, parseFloat(`${3}`));
         untickV = (((untickV ? resendv.size : 30) % (Math.max(5, resendv.size))) == 75);
      }
       let giftc = 4;
         filter5 = traminis.length > 45;
         giftc += giftc;
      for (let b = 0; b < 2; b++) {
         traminis += `${((filter5 ? 4 : 4) - 3)}`;
      }
      for (let z = 0; z < 1; z++) {
          let active2 = 3;
         filter5 = 28 > giftc || 28 > active2;
      }
      terms1 += (membershipP == String.fromCharCode(107,0) ? traminis.length : membershipP.length);
      if (model_) {
         break;
      }
   } while (model_ && ((videocommonC - terms1) < 4.49 && (4.49 - terms1) < 5.63));
       let flyer7 = 4.0;
       let macau3 = 1.0;
      let unreadt = 7985053.0 >= flyer7;
      do {
         flyer7 *= 2;
         if (unreadt) {
            break;
         }
      } while (unreadt && (4.25 == (flyer7 + 2.41)));
      let vietnamC = 7235787.0 <= macau3;
      do {
          let zoomk: Map<any, any> = new Map([[String.fromCharCode(112,95,49,49,95,100,105,99,116,0),708], [String.fromCharCode(114,95,55,53,95,115,116,114,105,112,0),401], [String.fromCharCode(99,117,109,101,95,53,95,51,49,0),30]]);
          let downloadingv = String.fromCharCode(112,105,99,107,101,114,95,100,95,51,56,0);
          let stationsF = true;
         macau3 *= downloadingv.length;
         zoomk = new Map([[`${zoomk.size}`, (zoomk.size * (stationsF ? 1 : 2))]]);
         downloadingv += `${((stationsF ? 3 : 3) - 1)}`;
         if (vietnamC) {
            break;
         }
      } while (((flyer7 / (Math.max(macau3, 6))) == 4.29) && vietnamC);
         flyer7 += 2;
          let mimoB = 5.0;
          let statsM = false;
         flyer7 *= 1;
         mimoB /= Math.max((parseInt(`${mimoB}`) | (statsM ? 5 : 5)), 2);
         statsM = 67.3 <= mimoB;
       let langkey_ = String.fromCharCode(108,95,54,54,95,101,108,105,109,105,110,97,116,105,111,110,0);
      while ((flyer7 + macau3) > 1.41) {
         flyer7 -= parseInt(`${flyer7}`) << (Math.min(4, Math.abs(parseInt(`${macau3}`))));
         break;
      }
      forwardj = [1 ^ parseInt(`${terms1}`)];
   let emojiO = rules1.length <= 6423061;
   do {
      rules1 = [parseInt(`${terms1}`) & bottoms.length];
      if (emojiO) {
         break;
      }
   } while ((3.49 >= (2.57 / (Math.max(10, holderK))) || 2 >= (parseInt(`${holderK}`) / (Math.max(rules1.length, 5)))) && emojiO);
      videocommonC *= 3;
      usernamep -= 2;
   if (!redirecto.includes(`${rules1.length}`)) {
      redirecto += `${redirecto.length}`;
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
       let catagoryD = String.fromCharCode(115,112,111,105,108,101,114,115,95,101,95,53,51,0);
    let username8 = String.fromCharCode(105,95,50,54,95,110,111,116,101,115,0);
    let bootsplashD = false;
    let mutedi: Map<any, any> = new Map([[String.fromCharCode(116,95,54,55,95,109,97,114,107,101,116,0),String.fromCharCode(115,95,54,54,95,115,104,111,119,0)], [String.fromCharCode(114,95,50,56,95,108,111,117,100,110,101,115,115,0),String.fromCharCode(118,112,115,104,97,114,101,100,95,98,95,55,56,0)]]);
    let watchA = String.fromCharCode(116,111,114,103,98,95,57,95,55,50,0);
    let humidityl: Array<any> = [String.fromCharCode(111,110,101,105,110,99,104,95,99,95,51,56,0), String.fromCharCode(110,95,57,50,95,109,111,100,105,116,121,0), String.fromCharCode(119,95,56,55,95,115,116,105,112,112,101,100,0)];
    let sendM = String.fromCharCode(114,101,102,114,101,115,104,95,122,95,52,50,0);
    let searchy = String.fromCharCode(112,95,49,57,95,98,108,105,110,107,0);
    let bridge2 = String.fromCharCode(105,100,101,110,116,95,97,95,57,55,0);
       let combineD = 3.0;
       let firebase5 = String.fromCharCode(109,98,112,114,101,100,95,116,95,54,56,0);
       let internetC = 5.0;
         internetC /= Math.max((parseFloat(`${String.fromCharCode(65,0) == firebase5 ? firebase5.length : parseInt(`${combineD}`)}`)), 2);
      while (firebase5.startsWith(`${combineD}`)) {
         combineD /= Math.max(parseFloat(`${parseInt(`${internetC}`) >> (Math.min(2, Math.abs(parseInt(`${combineD}`))))}`), 3);
         break;
      }
      if (firebase5.length < 4) {
         combineD += parseFloat(`${parseInt(`${internetC}`) - firebase5.length}`);
      }
          let abouto = true;
         internetC -= parseFloat(`${parseInt(`${internetC}`)}`);
         abouto = (!abouto ? abouto : !abouto);
      while ((parseInt(`${internetC}`) + firebase5.length) == 4 && (internetC + parseFloat(`${firebase5.length}`)) == 3.66) {
          let dycreatorw = 2.0;
         internetC -= parseFloat(`${parseInt(`${dycreatorw}`) + 1}`);
         break;
      }
      username8 += `${((bootsplashD ? 2 : 4) * username8.length)}`;
      bootsplashD = catagoryD.length <= humidityl.length;
   if (searchy.includes(`${sendM.length}`)) {
       let assisth = String.fromCharCode(97,95,57,55,95,101,97,116,105,110,103,0);
       let countdownk = 2.0;
       let forwardH: Map<any, any> = new Map([[String.fromCharCode(111,97,117,116,104,95,116,95,54,51,0),String.fromCharCode(112,114,111,109,112,116,101,100,95,48,95,55,51,0)], [String.fromCharCode(109,117,108,97,100,100,95,121,95,57,49,0),String.fromCharCode(108,105,107,101,108,121,95,121,95,51,52,0)], [String.fromCharCode(97,118,117,116,105,108,95,57,95,57,54,0),String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,95,111,95,52,48,0)]]);
       let commentd: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,55,95,50,56,0),834], [String.fromCharCode(104,95,57,53,95,101,97,116,105,110,103,0),914], [String.fromCharCode(116,114,105,103,103,101,114,95,115,95,50,53,0),812]]);
       let minimizel = 4;
          let video0 = true;
          let navigationq = 0.0;
          let moonl = String.fromCharCode(108,95,57,53,95,109,111,110,105,116,111,114,0);
         commentd.set(assisth, 1);
         video0 = (((!video0 ? 27 : moonl.length) % (Math.max(7, moonl.length))) == 27);
         navigationq /= Math.max(parseFloat(`${1 << (Math.min(3, Math.abs(parseInt(`${navigationq}`))))}`), 1);
      let dragI = 4994584 <= minimizel;
      do {
         minimizel *= 1;
         if (dragI) {
            break;
         }
      } while (dragI && (!assisth.endsWith(`${minimizel}`)));
         forwardH.set(`${commentd.size}`, forwardH.size);
          let catalogJ = String.fromCharCode(109,95,54,56,95,109,105,99,114,111,112,104,111,110,101,0);
          let qnewinterstitialK: Array<any> = [620, 220, 197];
          let morem: Array<any> = [String.fromCharCode(120,102,97,99,101,95,99,95,53,55,0), String.fromCharCode(99,114,101,97,116,111,114,95,103,95,57,48,0), String.fromCharCode(101,120,112,101,114,116,95,102,95,57,56,0)];
         assisth += `${assisth.length}`;
         catalogJ = `${(catalogJ == String.fromCharCode(117,0) ? qnewinterstitialK.length : catalogJ.length)}`;
         qnewinterstitialK.push(qnewinterstitialK.length << (Math.min(Math.abs(3), 1)));
         morem.push(3 * morem.length);
       let pangleP = String.fromCharCode(116,114,117,101,115,112,101,101,99,104,95,102,95,56,56,0);
         commentd.set(`${forwardH.size}`, commentd.size ^ 1);
       let mbjscommon1: Map<any, any> = new Map([[String.fromCharCode(105,95,50,49,95,115,105,122,101,108,101,115,115,0),546], [String.fromCharCode(98,95,48,95,97,108,105,103,110,109,101,110,116,0),406], [String.fromCharCode(100,98,105,95,113,95,49,51,0),768]]);
         commentd.set(`${commentd.size}`, 1);
      if (minimizel <= commentd.size) {
         minimizel /= Math.max(2, 3 >> (Math.min(3, Math.abs(minimizel))));
      }
          let back6 = 2;
          let catagoryr = String.fromCharCode(101,95,53,56,95,118,111,108,117,109,101,0);
          let modex = 0;
         pangleP += `${commentd.size}`;
         back6 |= modex * back6;
         catagoryr = `${catagoryr.length - modex}`;
      if (commentd.size <= minimizel) {
         commentd = new Map([[`${countdownk}`, assisth.length]]);
      }
          let eighteen8 = 3.0;
          let reducerB = 4.0;
         mbjscommon1 = new Map([[`${mbjscommon1.size}`, parseInt(`${eighteen8}`)]]);
         eighteen8 *= parseInt(`${reducerB}`);
       let sina_: Array<any> = [String.fromCharCode(111,114,112,104,97,110,95,57,95,54,54,0), String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,95,51,95,57,52,0), String.fromCharCode(109,97,108,108,111,99,122,95,98,95,55,49,0)];
       let klevin7: Array<any> = [131, 804];
         commentd.set(`${assisth}`, commentd.size);
      let blacklistL = 6730728 <= minimizel;
      do {
         minimizel *= forwardH.size - minimizel;
         if (blacklistL) {
            break;
         }
      } while (((forwardH.size - minimizel) < 5 && (forwardH.size - minimizel) < 5) && blacklistL);
      sendM += `${minimizel << (Math.min(Math.abs(1), 3))}`;
   }
      humidityl.push(3);
      humidityl = [1];
   let utils1 = 9839945 >= humidityl.length;
   do {
      humidityl.push(((bootsplashD ? 4 : 4)));
      if (utils1) {
         break;
      }
   } while (((humidityl.length - 2) > 2 || (watchA.length - 2) > 2) && utils1);
       let selectedV = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,55,95,57,56,0);
       let contextI: Array<any> = [348, 41, 832];
      while (2 < (selectedV.length % 3) || 3 < (contextI.length % (Math.max(selectedV.length, 8)))) {
         contextI.push(contextI.length);
         break;
      }
         selectedV = "1";
       let downloaded8 = String.fromCharCode(115,95,52,51,95,103,101,116,102,114,97,109,101,0);
       let episodesS = String.fromCharCode(100,116,111,97,95,112,95,53,48,0);
          let plus9 = String.fromCharCode(97,97,99,101,110,99,95,118,95,52,51,0);
          let singleZ = String.fromCharCode(102,111,108,100,101,114,95,48,95,54,49,0);
         episodesS = `${episodesS.length + 3}`;
         plus9 += `${singleZ.length ^ plus9.length}`;
         singleZ = `${(plus9 == String.fromCharCode(85,0) ? singleZ.length : plus9.length)}`;
         episodesS = `${selectedV.length}`;
      for (let n = 0; n < 2; n++) {
         selectedV += `${contextI.length}`;
      }
      bootsplashD = humidityl.length > 93;
   for (let w = 0; w < 3; w++) {
      searchy = `${username8.length ^ mutedi.size}`;
   }
   if (5 <= mutedi.size) {
      humidityl = [mutedi.size + 1];
   }
       let close5 = String.fromCharCode(97,98,108,95,48,95,57,52,0);
         close5 += `${close5.length / (Math.max(2, 2))}`;
      if (!close5.endsWith(`${close5.length}`)) {
         close5 = `${close5.length & 2}`;
      }
         close5 += `${close5.length / (Math.max(5, close5.length))}`;
      sendM = `${catagoryD.length - searchy.length}`;
   let sportsb = String.fromCharCode(120,104,102,105,95,0) == sendM;
   do {
       let episodesb = String.fromCharCode(115,116,97,103,105,110,103,95,51,95,54,51,0);
       let blackS = 4.0;
       let halfC = true;
       let n_playerg = String.fromCharCode(118,95,55,51,95,115,116,100,108,105,98,0);
       let listO: Map<any, any> = new Map([[String.fromCharCode(104,95,51,53,95,100,101,115,101,108,101,99,116,0),String.fromCharCode(102,114,97,109,101,115,95,104,95,51,48,0)], [String.fromCharCode(115,117,98,116,121,112,101,115,95,121,95,51,53,0),String.fromCharCode(116,95,49,56,95,118,100,97,116,97,0)]]);
      while (episodesb.endsWith(`${blackS}`)) {
         episodesb = `${episodesb.length}`;
         break;
      }
      while (halfC) {
          let albumz = 3;
          let windW = 4.0;
          let predictionY = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,95,52,95,51,57,0);
         episodesb = "3";
         albumz %= Math.max(2, albumz);
         windW /= Math.max(5, parseFloat(`${albumz - 3}`));
         predictionY += `${predictionY.length}`;
         break;
      }
         n_playerg += "1";
         halfC = listO.size <= 8 || String.fromCharCode(72,0) == episodesb;
      let activec = episodesb == String.fromCharCode(115,52,105,119,103,0);
      do {
          let temp1 = 2.0;
          let c_playerB: Array<any> = [String.fromCharCode(97,112,112,101,110,100,99,104,97,114,95,51,95,52,50,0), String.fromCharCode(109,95,55,53,95,114,101,99,101,112,116,105,111,110,0)];
          let time_0J: Map<any, any> = new Map([[String.fromCharCode(104,95,57,95,109,117,110,108,111,99,107,0),String.fromCharCode(104,95,52,50,95,114,101,118,111,107,101,0)], [String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,51,95,57,56,0),String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,52,95,49,51,0)], [String.fromCharCode(114,101,116,114,121,97,98,108,101,95,48,95,57,48,0),String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,99,95,50,0)]]);
          let placementB = String.fromCharCode(111,114,100,101,114,116,121,112,101,95,108,95,49,55,0);
         episodesb += `${2 << (Math.min(2, Math.abs(parseInt(`${blackS}`))))}`;
         temp1 /= Math.max(5, 1 ^ placementB.length);
         c_playerB = [(String.fromCharCode(118,0) == placementB ? placementB.length : parseInt(`${temp1}`))];
         time_0J.set(`${placementB}`, (String.fromCharCode(101,0) == placementB ? placementB.length : time_0J.size));
         if (activec) {
            break;
         }
      } while ((4.21 > (3.69 - blackS) && 1.16 > (3.69 - blackS)) && activec);
      let awayT = 6224965 <= episodesb.length;
      do {
          let downloaderd = 0.0;
          let taiwan2 = String.fromCharCode(99,113,117,101,117,101,95,55,95,50,56,0);
         episodesb = `${2 ^ n_playerg.length}`;
         downloaderd /= Math.max(taiwan2.length, 1);
         taiwan2 = "1";
         if (awayT) {
            break;
         }
      } while (((episodesb.length | 5) == 4) && awayT);
         episodesb = `${episodesb.length >> (Math.min(3, Math.abs(parseInt(`${blackS}`))))}`;
         n_playerg += `${listO.size ^ 1}`;
      while (!halfC || 5 < n_playerg.length) {
         n_playerg += `${(n_playerg == String.fromCharCode(67,0) ? listO.size : n_playerg.length)}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
         halfC = (parseInt(`${blackS}`) / (Math.max(3, episodesb.length))) < 83;
      }
      if (blackS < 1.68) {
         episodesb = "2";
      }
      while (3 > (parseInt(`${blackS}`) / (Math.max(3, n_playerg.length))) && 3 > (parseInt(`${blackS}`) / (Math.max(n_playerg.length, 8)))) {
         blackS *= parseFloat(`${3 - parseInt(`${blackS}`)}`);
         break;
      }
       let whistleL: Array<any> = [582, 348, 152];
         whistleL.push(parseInt(`${blackS}`));
      while ((n_playerg.length % 3) > 1 || (3 % (Math.max(9, n_playerg.length))) > 1) {
          let found6 = String.fromCharCode(122,101,114,111,101,100,95,119,95,57,53,0);
          let manifestA = 4.0;
          let slider4 = String.fromCharCode(102,95,49,51,95,107,101,121,118,97,108,0);
         listO = new Map([[`${manifestA}`, parseInt(`${manifestA}`) >> (Math.min(n_playerg.length, 4))]]);
         found6 += `${found6.length & 3}`;
         slider4 += `${slider4.length % (Math.max(2, 4))}`;
         break;
      }
      sendM += `${catagoryD.length / 1}`;
      if (sportsb) {
         break;
      }
   } while (sportsb && (sendM.length == username8.length));
   if (watchA == String.fromCharCode(90,0)) {
       let form9 = String.fromCharCode(114,95,52,95,99,97,110,99,101,108,0);
       let whistleZ = String.fromCharCode(116,95,51,56,95,114,101,115,111,108,118,101,100,0);
      for (let i = 0; i < 3; i++) {
         whistleZ += `${form9.length % 3}`;
      }
      if (whistleZ.length >= 2) {
         whistleZ += `${whistleZ.length ^ 3}`;
      }
      if (whistleZ.length < 3) {
          let scheduleh: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,112,95,55,48,0),293], [String.fromCharCode(117,95,56,48,95,109,97,100,101,0),54], [String.fromCharCode(107,95,55,51,95,109,101,109,100,98,0),933]]);
          let canvasC = String.fromCharCode(106,95,56,51,95,99,97,110,100,105,100,97,116,101,115,0);
         form9 += "1";
         scheduleh.set(canvasC, canvasC.length * scheduleh.size);
      }
      while (whistleZ == String.fromCharCode(55,0)) {
          let langk: Map<any, any> = new Map([[String.fromCharCode(118,95,56,48,95,116,101,115,116,114,97,110,115,0),true ], [String.fromCharCode(98,105,110,116,114,101,101,95,119,95,56,51,0),false ]]);
          let anner2 = String.fromCharCode(119,95,52,56,95,115,119,115,99,97,108,101,0);
         form9 += "1";
         langk.set(`${anner2}`, langk.size / (Math.max(anner2.length, 10)));
         break;
      }
      for (let w = 0; w < 3; w++) {
          let plusS = String.fromCharCode(99,111,108,108,97,112,115,101,95,119,95,51,56,0);
         whistleZ = `${(plusS == String.fromCharCode(98,0) ? whistleZ.length : plusS.length)}`;
      }
      if (form9.length >= 3 || whistleZ == String.fromCharCode(49,0)) {
         whistleZ = "1";
      }
      searchy += `${3 & whistleZ.length}`;
   }

    setShowControls(!showControls);

   for (let y = 0; y < 1; y++) {
       let filledR = String.fromCharCode(121,95,49,50,95,121,109,101,110,99,0);
       let splash6 = String.fromCharCode(116,114,97,110,115,95,113,95,57,53,0);
       let update__g = String.fromCharCode(111,118,97,108,95,105,95,55,48,0);
       let foundW = 0.0;
       let forwardk = false;
         forwardk = update__g.length <= 57 || !forwardk;
      while (filledR.length > 1) {
         filledR += `${parseInt(`${foundW}`) ^ splash6.length}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         foundW *= parseInt(`${foundW}`) % (Math.max(2, 1));
      }
      let launchE = filledR == String.fromCharCode(115,119,108,53,119,116,110,100,48,103,0);
      do {
         filledR = `${splash6.length ^ 3}`;
         if (launchE) {
            break;
         }
      } while ((filledR.endsWith(`${foundW}`)) && launchE);
          let sigmobc = String.fromCharCode(112,95,50,56,95,97,116,116,114,0);
          let completeJ: Map<any, any> = new Map([[String.fromCharCode(102,95,52,56,95,115,111,117,114,99,101,99,108,105,112,0),false ], [String.fromCharCode(100,105,118,105,100,101,114,95,98,95,52,52,0),false ]]);
          let time_q5Z = String.fromCharCode(118,95,53,53,95,97,100,106,97,99,101,110,116,0);
         splash6 += `${(String.fromCharCode(88,0) == filledR ? completeJ.size : filledR.length)}`;
         sigmobc += `${(sigmobc == String.fromCharCode(121,0) ? time_q5Z.length : sigmobc.length)}`;
         completeJ.set(sigmobc, (sigmobc == String.fromCharCode(116,0) ? time_q5Z.length : sigmobc.length));
         update__g = `${filledR.length ^ 3}`;
      while (splash6.length < 3) {
          let resendo: Array<any> = [36, 41];
          let showr: Map<any, any> = new Map([[String.fromCharCode(103,95,57,50,95,109,97,112,108,105,109,105,116,0),809], [String.fromCharCode(115,117,112,101,114,120,115,97,105,95,106,95,50,54,0),305], [String.fromCharCode(112,105,120,101,108,115,120,95,116,95,55,55,0),751]]);
          let debugu = 0.0;
         filledR += `${(String.fromCharCode(70,0) == filledR ? filledR.length : parseInt(`${foundW}`))}`;
         resendo = [3 >> (Math.min(3, Math.abs(parseInt(`${debugu}`))))];
         showr.set(`${debugu}`, 2);
         break;
      }
         splash6 = `${update__g.length ^ 2}`;
      let materialu = forwardk ? !forwardk : forwardk;
      do {
          let colorsp: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,104,101,99,107,111,117,116,95,53,95,55,0),180], [String.fromCharCode(101,95,56,95,105,105,114,102,105,108,116,101,114,0),356], [String.fromCharCode(104,111,115,116,95,122,95,49,49,0),670]]);
          let linka = String.fromCharCode(100,105,118,105,100,101,114,115,95,53,95,56,48,0);
          let incidentp = 3.0;
          let emptyT: Map<any, any> = new Map([[String.fromCharCode(109,97,112,102,105,108,101,95,53,95,57,49,0),String.fromCharCode(99,111,108,105,110,101,97,114,95,103,95,48,0)], [String.fromCharCode(119,95,56,55,95,112,108,97,105,110,116,101,120,116,0),String.fromCharCode(104,95,54,51,95,102,114,97,103,109,101,110,116,115,0)], [String.fromCharCode(115,95,54,57,95,115,117,98,99,101,108,0),String.fromCharCode(119,95,55,57,95,109,101,109,111,114,121,0)]]);
          let corep = String.fromCharCode(115,97,99,107,95,100,95,51,55,0);
         forwardk = colorsp.size < emptyT.size;
         colorsp.set(linka, linka.length);
         incidentp /= Math.max((parseFloat(`${linka == String.fromCharCode(83,0) ? parseInt(`${incidentp}`) : linka.length}`)), 1);
         emptyT = new Map([[`${incidentp}`, corep.length]]);
         corep += `${2 << (Math.min(1, corep.length))}`;
         if (materialu) {
            break;
         }
      } while (materialu && (forwardk));
      for (let g = 0; g < 2; g++) {
         splash6 = `${filledR.length}`;
      }
         foundW *= (update__g == String.fromCharCode(56,0) ? update__g.length : filledR.length);
      while (5.73 >= (3.98 * foundW)) {
         forwardk = filledR.endsWith(`${forwardk}`);
         break;
      }
         foundW *= (filledR == String.fromCharCode(104,0) ? filledR.length : splash6.length);
         splash6 = `${((forwardk ? 5 : 1) >> (Math.min(update__g.length, 5)))}`;
         filledR += `${(String.fromCharCode(106,0) == splash6 ? filledR.length : splash6.length)}`;
      catagoryD += `${mutedi.size | searchy.length}`;
   }
   while (5 > (username8.length ^ 2) && 2 > (username8.length ^ humidityl.length)) {
      username8 = "1";
      break;
   }
       let selectF = true;
      if (!selectF || selectF) {
          let analyticR = String.fromCharCode(99,117,98,105,99,95,121,95,53,48,0);
         selectF = analyticR.length >= 14 || selectF;
      }
      while (selectF && !selectF) {
          let coret: Map<any, any> = new Map([[String.fromCharCode(120,95,55,57,0),true ], [String.fromCharCode(120,95,52,50,95,115,99,101,110,97,114,105,111,0),true ], [String.fromCharCode(112,95,50,56,95,97,103,103,114,101,103,97,116,101,115,0),true ]]);
          let canvas4: Map<any, any> = new Map([[String.fromCharCode(118,95,57,49,95,109,111,117,115,101,0),743], [String.fromCharCode(116,101,115,116,95,106,95,52,50,0),653]]);
          let nativer = String.fromCharCode(108,111,99,97,116,105,111,110,95,100,95,52,50,0);
         selectF = nativer.length >= 5 || 5 >= canvas4.size;
         coret.set(`${coret.size}`, coret.size);
         canvas4.set(`${coret.size}`, coret.size);
         break;
      }
         selectF = (selectF ? selectF : !selectF);
      username8 = `${username8.length << (Math.min(Math.abs(2), 4))}`;
   while ((mutedi.size & searchy.length) == 5) {
      searchy += `${((bootsplashD ? 2 : 4) & 1)}`;
      break;
   }
      sendM = `${(2 & (bootsplashD ? 5 : 1))}`;
   for (let i = 0; i < 2; i++) {
      username8 += `${catagoryD.length}`;
   }
      humidityl = [2 / (Math.max(6, searchy.length))];
   for (let x = 0; x < 3; x++) {
      humidityl = [searchy.length - mutedi.size];
   }
      humidityl = [watchA.length >> (Math.min(4, bridge2.length))];
      bridge2 += `${2 ^ humidityl.length}`;
       let commentL = String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,56,95,50,54,0);
       let const_i1 = String.fromCharCode(99,108,101,97,110,117,112,95,55,95,51,54,0);
       let baiduj = 4.0;
          let pingO = true;
          let vertical9: Map<any, any> = new Map([[String.fromCharCode(97,102,105,108,116,101,114,95,54,95,57,52,0),180], [String.fromCharCode(115,112,105,108,108,115,105,122,101,95,99,95,53,49,0),781]]);
         baiduj -= (parseFloat(`${(pingO ? 5 : 3)}`));
         pingO = (vertical9.size ^ vertical9.size) == 83;
         commentL += `${commentL.length << (Math.min(const_i1.length, 4))}`;
      for (let u = 0; u < 2; u++) {
         commentL = `${commentL.length}`;
      }
          let buffer0: Map<any, any> = new Map([[String.fromCharCode(112,97,110,100,105,110,103,95,51,95,57,53,0),871], [String.fromCharCode(105,115,101,109,112,116,121,95,113,95,56,54,0),938], [String.fromCharCode(112,97,105,114,105,110,103,115,95,55,95,55,54,0),158]]);
         const_i1 += "2";
         buffer0.set(`${buffer0.size}`, buffer0.size);
         const_i1 = `${(String.fromCharCode(121,0) == const_i1 ? const_i1.length : parseInt(`${baiduj}`))}`;
         const_i1 = `${const_i1.length ^ commentL.length}`;
         commentL += `${parseInt(`${baiduj}`)}`;
         baiduj += parseFloat(`${1}`);
      for (let l = 0; l < 1; l++) {
         commentL += "1";
      }
      sendM = `${(String.fromCharCode(50,0) == commentL ? username8.length : commentL.length)}`;
   if (bridge2 == String.fromCharCode(75,0)) {
      catagoryD = "2";
   }
    delayControls();
  };

  const clearHidingDelay = () => {
       let security0 = 0.0;
    let spinnerz = String.fromCharCode(111,95,54,49,95,119,101,108,108,98,101,104,97,118,101,100,0);
    let securityL = String.fromCharCode(104,95,51,51,95,114,97,110,100,111,109,0);
    let anythinkO = 4;
    let package_5e: Array<any> = [String.fromCharCode(107,95,54,95,105,110,102,111,114,109,97,116,105,118,101,0), String.fromCharCode(114,101,99,111,110,110,101,99,116,95,109,95,49,57,0)];
    let collectionG = 5.0;
    let searchz = String.fromCharCode(107,95,56,53,95,97,114,99,104,105,118,101,100,0);
    let androidj = 1.0;
    let sansZ: Map<any, any> = new Map([[String.fromCharCode(113,112,113,115,99,97,108,101,95,120,95,57,57,0),true ], [String.fromCharCode(116,95,56,55,95,109,105,114,114,111,114,101,100,0),true ]]);
    let recommendationc = String.fromCharCode(116,95,56,54,95,115,116,97,116,105,111,110,97,114,105,116,121,0);
   while (securityL == String.fromCharCode(86,0)) {
      spinnerz += `${3 | securityL.length}`;
      break;
   }
   while (4.55 > security0) {
       let bottomo = 1;
       let backwardF = String.fromCharCode(99,109,105,111,95,49,95,54,49,0);
       let configo = 2.0;
       let whatsapp1 = 5.0;
      let changeQ = bottomo <= 6467808;
      do {
         bottomo >>= Math.min(Math.abs(parseInt(`${configo}`) % (Math.max(parseInt(`${whatsapp1}`), 9))), 2);
         if (changeQ) {
            break;
         }
      } while (changeQ && ((bottomo / 1) > 2 && (backwardF.length / (Math.max(6, bottomo))) > 1));
       let floatingy = 4.0;
       let modalg = 5.0;
      for (let d = 0; d < 2; d++) {
         backwardF = `${parseInt(`${floatingy}`)}`;
      }
      if (!backwardF.includes(`${floatingy}`)) {
         backwardF = `${2 & bottomo}`;
      }
         floatingy *= 1;
      if ((1.72 + floatingy) < 5.50 || (1.72 + floatingy) < 2.18) {
         modalg /= Math.max(4, bottomo);
      }
      if (4.56 > (configo - 1)) {
          let gray_ = String.fromCharCode(114,108,112,95,53,95,51,49,0);
          let pathj = 3.0;
          let animationj = String.fromCharCode(105,110,118,111,107,101,95,52,95,54,48,0);
          let common3 = 2.0;
          let plusE = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,97,95,55,54,0);
         modalg += parseInt(`${common3}`) * 2;
         gray_ += `${2 ^ parseInt(`${pathj}`)}`;
         pathj /= Math.max(4, animationj.length);
         animationj = `${2 % (Math.max(1, plusE.length))}`;
         common3 -= (parseFloat(`${gray_ == String.fromCharCode(83,0) ? parseInt(`${pathj}`) : gray_.length}`));
         plusE += `${animationj.length}`;
      }
      for (let n = 0; n < 3; n++) {
         backwardF = `${backwardF.length * bottomo}`;
      }
      collectionG /= Math.max(4, parseFloat(`${package_5e.length}`));
      break;
   }
      collectionG += parseFloat(`${parseInt(`${androidj}`) << (Math.min(5, Math.abs(1)))}`);
   if (5 < spinnerz.length) {
       let native9 = 0.0;
         native9 /= Math.max(1, 1);
      for (let g = 0; g < 3; g++) {
         native9 += parseInt(`${native9}`) - 2;
      }
      let previewQ = native9 >= 9565111.0;
      do {
         native9 -= parseInt(`${native9}`);
         if (previewQ) {
            break;
         }
      } while (previewQ && ((native9 / 5.18) < 5.49));
      spinnerz += "1";
   }
   if (4 == (anythinkO + 4) || 1 == (4 + anythinkO)) {
       let success6 = String.fromCharCode(112,111,108,108,101,114,95,109,95,54,51,0);
       let cleary = 0.0;
       let membern = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,52,95,51,53,0);
       let googlet = 2;
         success6 += `${googlet}`;
      while (!success6.endsWith(`${cleary}`)) {
         cleary += success6.length;
         break;
      }
          let kickx = 5.0;
         membern += `${1 | membern.length}`;
         kickx *= 2 >> (Math.min(Math.abs(parseInt(`${kickx}`)), 5));
      for (let i = 0; i < 2; i++) {
         cleary *= 2;
      }
      for (let v = 0; v < 1; v++) {
          let renew4 = String.fromCharCode(108,95,49,48,95,101,115,99,97,112,101,100,0);
          let privacyP = String.fromCharCode(106,95,55,54,95,113,101,120,112,0);
          let mbsplashQ: Array<any> = [363, 275, 464];
          let reactnativejsg = String.fromCharCode(98,97,99,107,119,97,114,100,115,95,53,95,56,0);
         success6 += `${parseInt(`${cleary}`)}`;
         renew4 = `${(String.fromCharCode(69,0) == renew4 ? renew4.length : mbsplashQ.length)}`;
         privacyP = `${3 & renew4.length}`;
         mbsplashQ.push(privacyP.length * 3);
         reactnativejsg += `${mbsplashQ.length >> (Math.min(Math.abs(1), 1))}`;
      }
      let switch_fL = String.fromCharCode(105,115,55,54,95,112,101,118,0) == membern;
      do {
          let googlev = String.fromCharCode(101,95,52,50,95,100,101,118,105,99,101,0);
         membern += "1";
         googlev += `${googlev.length & googlev.length}`;
         if (switch_fL) {
            break;
         }
      } while ((5.30 > cleary) && switch_fL);
      for (let s = 0; s < 1; s++) {
         googlet += parseInt(`${cleary}`) | 3;
      }
      let inactiveS = googlet >= 6410285;
      do {
          let left2: Array<any> = [630, 93, 679];
          let loadingX = String.fromCharCode(121,95,53,54,95,107,101,121,105,100,0);
         googlet %= Math.max((String.fromCharCode(117,0) == loadingX ? left2.length : loadingX.length), 4);
         if (inactiveS) {
            break;
         }
      } while ((1 >= (5 | googlet)) && inactiveS);
      while (3.10 <= cleary) {
         success6 = `${3 << (Math.min(5, success6.length))}`;
         break;
      }
         membern = "3";
      let default_03n = String.fromCharCode(99,49,111,56,0) == membern;
      do {
         membern = `${1 >> (Math.min(5, success6.length))}`;
         if (default_03n) {
            break;
         }
      } while (default_03n && (5 <= membern.length));
      if ((cleary + membern.length) <= 5.39 || 1 <= (membern.length * 5)) {
         membern = `${membern.length}`;
      }
      anythinkO += searchz.length | 3;
   }
       let hongkong4 = String.fromCharCode(106,95,51,52,95,100,101,118,105,99,101,115,0);
       let component_ = String.fromCharCode(112,117,98,101,120,112,95,117,95,51,49,0);
       let bingb = 2.0;
       let auto_wX = 5.0;
         auto_wX *= 1 - hongkong4.length;
      while (5.10 < auto_wX) {
         auto_wX /= Math.max((component_ == String.fromCharCode(72,0) ? hongkong4.length : component_.length), 5);
         break;
      }
      if (5.77 < (3 + auto_wX)) {
         bingb += parseInt(`${auto_wX}`);
      }
      let mbbannerR = bingb <= 9007531.0;
      do {
         bingb += parseInt(`${auto_wX}`);
         if (mbbannerR) {
            break;
         }
      } while (mbbannerR && (3 <= (component_.length ^ 1) && (1 * component_.length) <= 4));
      let tempy = 7373037.0 >= bingb;
      do {
         bingb *= 2;
         if (tempy) {
            break;
         }
      } while (tempy && (1 >= component_.length));
      collectionG -= parseFloat(`${2 & parseInt(`${security0}`)}`);
   for (let b = 0; b < 3; b++) {
       let giftl: Map<any, any> = new Map([[String.fromCharCode(109,117,108,97,100,100,95,102,95,57,49,0),406], [String.fromCharCode(100,112,114,105,110,116,95,101,95,51,57,0),311]]);
       let loadingr = 0.0;
       let yingA = 4.0;
       let background1 = String.fromCharCode(120,114,101,115,95,100,95,49,52,0);
      for (let i = 0; i < 2; i++) {
         yingA -= giftl.size | 1;
      }
         giftl = new Map([[`${giftl.size}`, 2]]);
      while (2.8 <= (yingA * 1.76) && (yingA * giftl.size) <= 1.76) {
          let home5 = false;
          let successZ = true;
          let lessh = true;
         giftl = new Map([[`${yingA}`, ((home5 ? 1 : 5) % (Math.max(6, parseInt(`${yingA}`))))]]);
         home5 = lessh;
         successZ = (lessh ? successZ : !lessh);
         break;
      }
          let styler = 5;
          let sinaK = String.fromCharCode(102,111,114,109,97,110,116,95,105,95,57,55,0);
          let fill9 = 4.0;
         background1 = `${parseInt(`${fill9}`) - 1}`;
         styler %= Math.max(styler | 2, 5);
         sinaK += `${sinaK.length % (Math.max(2, 9))}`;
         fill9 *= (String.fromCharCode(48,0) == sinaK ? styler : sinaK.length);
         loadingr += background1.length & 1;
         background1 = `${parseInt(`${yingA}`) >> (Math.min(background1.length, 5))}`;
         loadingr *= background1.length;
          let shared3 = String.fromCharCode(101,95,54,95,106,97,99,111,115,117,98,0);
          let carouselE = String.fromCharCode(104,95,55,0);
          let unread8 = String.fromCharCode(122,105,109,103,95,118,95,55,51,0);
         loadingr *= carouselE.length;
         shared3 += `${unread8.length << (Math.min(Math.abs(3), 3))}`;
         carouselE = `${(shared3 == String.fromCharCode(55,0) ? unread8.length : shared3.length)}`;
      let dialogY = 8831318.0 >= yingA;
      do {
          let statisticsb = String.fromCharCode(116,101,115,115,95,99,95,56,52,0);
          let component7: Map<any, any> = new Map([[String.fromCharCode(121,95,57,51,95,108,111,99,97,108,105,116,121,0),String.fromCharCode(119,95,55,55,95,116,114,105,112,108,101,0)], [String.fromCharCode(110,95,54,50,95,107,101,121,115,116,114,101,97,109,0),String.fromCharCode(103,95,52,51,95,103,101,116,99,114,101,100,0)]]);
          let black0 = String.fromCharCode(99,104,117,110,107,95,99,95,55,56,0);
          let configureX = String.fromCharCode(118,95,54,52,95,112,114,101,99,111,109,112,111,115,101,100,0);
          let subsp: Map<any, any> = new Map([[String.fromCharCode(118,95,55,52,95,113,116,97,98,108,101,0),766], [String.fromCharCode(102,95,55,55,95,103,101,111,0),603]]);
         yingA += parseInt(`${yingA}`) ^ 1;
         statisticsb += `${statisticsb.length - 3}`;
         component7.set(black0, black0.length);
         configureX += `${(statisticsb == String.fromCharCode(114,0) ? statisticsb.length : black0.length)}`;
         subsp = new Map([[statisticsb, statisticsb.length]]);
         if (dialogY) {
            break;
         }
      } while (dialogY && (5.100 < yingA));
         loadingr /= Math.max(4, 1);
         yingA /= Math.max(2, background1.length);
      let expired1 = giftl.size >= 8453370;
      do {
         giftl = new Map([[`${giftl.size}`, 3]]);
         if (expired1) {
            break;
         }
      } while (expired1 && ((background1.length | 4) <= 2));
      androidj -= parseFloat(`${3}`);
   }
   let type_j5 = securityL == String.fromCharCode(49,105,52,105,51,110,109,0);
   do {
       let dangerl = false;
       let actionC: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,105,95,52,0),471], [String.fromCharCode(103,95,49,54,95,100,111,117,98,108,101,115,0),571]]);
         actionC = new Map([[`${actionC.size}`, 2]]);
         dangerl = actionC.size >= 77;
          let short_peI: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,48,95,54,50,0),827], [String.fromCharCode(100,101,99,111,109,112,95,52,95,51,48,0),238], [String.fromCharCode(118,97,116,97,114,95,117,95,54,52,0),972]]);
          let statsS = 3.0;
         dangerl = (short_peI.size | actionC.size) < 25;
         short_peI.set(`${statsS}`, parseInt(`${statsS}`) * parseInt(`${statsS}`));
          let storez = String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,53,95,57,52,0);
          let downloader8: Array<any> = [569, 323];
          let kicku = String.fromCharCode(116,95,51,51,95,98,97,110,100,105,110,103,0);
         actionC.set(`${dangerl}`, ((dangerl ? 3 : 4) >> (Math.min(Math.abs(1), 2))));
         storez = `${kicku.length}`;
         downloader8 = [downloader8.length * storez.length];
         kicku = `${downloader8.length}`;
         actionC = new Map([[`${actionC.size}`, 2 ^ actionC.size]]);
       let filled4 = 3.0;
      securityL = `${package_5e.length}`;
      if (type_j5) {
         break;
      }
   } while (type_j5 && (1.24 < (collectionG + 5.65)));
      package_5e.push(parseInt(`${collectionG}`) % (Math.max(2, 2)));
       let hooksv: Map<any, any> = new Map([[String.fromCharCode(120,95,53,51,95,114,97,112,105,100,106,115,111,110,0),786], [String.fromCharCode(106,95,51,55,95,115,101,116,97,99,116,105,118,101,107,101,121,0),950], [String.fromCharCode(114,101,100,101,109,112,116,105,111,110,95,57,95,53,0),613]]);
         hooksv = new Map([[`${hooksv.size}`, 1 | hooksv.size]]);
      let scoref = hooksv.size >= 7062524;
      do {
         hooksv = new Map([[`${hooksv.size}`, hooksv.size | hooksv.size]]);
         if (scoref) {
            break;
         }
      } while (scoref && (2 < (hooksv.size >> (Math.min(1, Math.abs(hooksv.size))))));
       let policyQ = String.fromCharCode(118,95,56,57,95,97,115,111,108,117,116,101,0);
       let paginationZ = String.fromCharCode(99,104,97,105,110,101,100,95,114,95,57,48,0);
      searchz += `${parseInt(`${collectionG}`) / 1}`;
   let package_wy = 9745180.0 <= androidj;
   do {
       let progressk: Array<any> = [144, 956];
       let anytime8 = 4.0;
       let submitM = String.fromCharCode(120,95,49,54,95,115,99,105,101,110,116,105,102,105,99,0);
       let notificationd = String.fromCharCode(118,95,56,51,95,104,105,116,115,0);
       let mbridgeR = 3;
         mbridgeR >>= Math.min(1, Math.abs(notificationd.length & 1));
          let relatedH = String.fromCharCode(109,105,115,115,95,48,95,50,48,0);
          let condensedl = String.fromCharCode(103,95,56,50,95,109,111,110,107,101,121,115,97,117,100,105,111,0);
         notificationd = "3";
         relatedH += `${(String.fromCharCode(100,0) == relatedH ? relatedH.length : condensedl.length)}`;
         condensedl = "1";
          let register_gS = 0;
         mbridgeR += (String.fromCharCode(122,0) == submitM ? submitM.length : progressk.length);
         register_gS -= register_gS;
      if (notificationd.endsWith(`${mbridgeR}`)) {
          let completem: Map<any, any> = new Map([[String.fromCharCode(97,95,49,57,95,114,97,112,112,101,114,0),false ], [String.fromCharCode(111,95,51,56,95,115,99,104,101,100,0),true ], [String.fromCharCode(108,95,53,48,95,116,97,110,0),false ]]);
          let adultD = true;
          let resend3: Map<any, any> = new Map([[String.fromCharCode(104,111,108,108,111,119,95,50,95,55,55,0),586], [String.fromCharCode(112,95,57,49,95,109,101,115,97,103,101,115,0),293], [String.fromCharCode(105,110,116,101,103,114,105,116,121,95,51,95,49,57,0),73]]);
         mbridgeR /= Math.max(3, completem.size / (Math.max(notificationd.length, 8)));
         completem = new Map([[`${resend3.size}`, 2 ^ resend3.size]]);
         adultD = (88 > (resend3.size * (!adultD ? 88 : resend3.size)));
      }
      for (let x = 0; x < 2; x++) {
         submitM = `${(String.fromCharCode(105,0) == notificationd ? notificationd.length : submitM.length)}`;
      }
          let v_playerI = String.fromCharCode(115,95,55,52,0);
         progressk.push(mbridgeR - 3);
         v_playerI = `${v_playerI.length + 2}`;
       let sansR = String.fromCharCode(97,110,116,105,97,108,105,97,115,95,117,95,54,48,0);
         submitM = `${1 >> (Math.min(2, submitM.length))}`;
      if (2 == (mbridgeR - sansR.length) || (mbridgeR - 2) == 1) {
         mbridgeR *= submitM.length;
      }
         progressk = [progressk.length + notificationd.length];
         progressk = [parseInt(`${anytime8}`) - sansR.length];
          let renewx = String.fromCharCode(118,95,54,57,95,97,116,116,97,99,104,109,101,110,116,115,0);
         mbridgeR *= parseInt(`${anytime8}`) + 2;
         renewx = `${renewx.length}`;
         progressk.push(1 / (Math.max(7, mbridgeR)));
      while ((progressk.length / (Math.max(5, submitM.length))) < 3 && 3 < (progressk.length / (Math.max(submitM.length, 9)))) {
         progressk = [submitM.length];
         break;
      }
      let tumbnailt = 7026290.0 >= anytime8;
      do {
         anytime8 *= (String.fromCharCode(86,0) == sansR ? parseInt(`${anytime8}`) : sansR.length);
         if (tumbnailt) {
            break;
         }
      } while (((parseInt(`${anytime8}`) + progressk.length) < 1 && 4 < (progressk.length - 1)) && tumbnailt);
      androidj *= parseFloat(`${progressk.length * searchz.length}`);
      if (package_wy) {
         break;
      }
   } while ((androidj == 1.24) && package_wy);
   for (let q = 0; q < 3; q++) {
      collectionG -= parseFloat(`${1 + parseInt(`${androidj}`)}`);
   }
       let sansk = String.fromCharCode(108,95,49,48,48,95,109,97,114,107,100,111,119,110,0);
       let short_6pi = 1.0;
       let malaysiaj = 4.0;
         sansk += `${parseInt(`${short_6pi}`)}`;
      if (4.93 < (2.64 * malaysiaj) || 1.100 < (malaysiaj * 2.64)) {
         malaysiaj /= Math.max(parseInt(`${short_6pi}`), 5);
      }
      if ((short_6pi - sansk.length) < 4.64 || (4.64 - short_6pi) < 2.73) {
          let bridgeb: Array<any> = [272, 533, 472];
          let buffery = String.fromCharCode(121,117,118,110,118,99,95,107,95,56,55,0);
          let reportK = true;
          let private_db = 2.0;
         sansk = `${parseInt(`${private_db}`) + buffery.length}`;
         bridgeb.push(bridgeb.length);
         buffery += `${((reportK ? 3 : 2) / (Math.max(bridgeb.length, 7)))}`;
         private_db /= Math.max(4, parseFloat(`${bridgeb.length}`));
      }
      if ((sansk.length / (Math.max(1, malaysiaj))) == 1.76) {
          let switch_7G = 2;
          let confirmationz = 1.0;
         sansk += `${parseInt(`${confirmationz}`) << (Math.min(4, Math.abs(switch_7G)))}`;
      }
          let listn = 4;
          let leagueH: Array<any> = [String.fromCharCode(99,100,108,109,115,95,52,95,50,53,0), String.fromCharCode(116,101,120,105,112,111,100,95,53,95,52,52,0), String.fromCharCode(107,95,49,53,95,98,97,99,107,111,102,102,0)];
         short_6pi -= leagueH.length + parseInt(`${short_6pi}`);
         listn %= Math.max(listn / 2, 2);
         leagueH = [listn / 2];
      for (let x = 0; x < 1; x++) {
         short_6pi -= parseInt(`${short_6pi}`) + 3;
      }
      for (let n = 0; n < 1; n++) {
          let larger = 0.0;
         short_6pi /= Math.max(5, 2);
         larger += 1;
      }
      if ((short_6pi + 1.16) >= 4.42 && (sansk.length + short_6pi) >= 1.16) {
         sansk += `${parseInt(`${malaysiaj}`) | 1}`;
      }
      while (2.52 < malaysiaj) {
          let analyticy = true;
          let bannerJ = 3.0;
          let turn7: Map<any, any> = new Map([[String.fromCharCode(118,95,54,56,95,99,111,110,102,105,103,117,114,97,116,111,114,0),false ], [String.fromCharCode(99,111,112,121,95,103,95,57,56,0),true ]]);
          let change1 = String.fromCharCode(101,95,53,52,0);
         sansk += `${parseInt(`${bannerJ}`) * 2}`;
         analyticy = (change1.length ^ turn7.size) <= 15;
         bannerJ /= Math.max((parseFloat(`${(analyticy ? 1 : 3) & 3}`)), 3);
         turn7.set(change1, turn7.size);
         break;
      }
      searchz += `${parseInt(`${short_6pi}`) - parseInt(`${security0}`)}`;
      collectionG += parseFloat(`${anythinkO}`);
      anythinkO &= 1 - parseInt(`${androidj}`);
      security0 -= parseInt(`${androidj}`) | parseInt(`${collectionG}`);
   if (1.97 < security0) {
       let logo5 = 4;
       let switch_boj: Map<any, any> = new Map([[String.fromCharCode(104,95,50,50,0),true ], [String.fromCharCode(99,111,110,100,105,116,105,111,110,95,112,95,50,55,0),false ]]);
       let eventC = 2.0;
       let tooltips4 = 2.0;
      while (eventC >= tooltips4) {
         eventC += parseInt(`${eventC}`) & logo5;
         break;
      }
      if (eventC == 1.86) {
         tooltips4 += parseFloat(`${parseInt(`${eventC}`) * 1}`);
      }
       let promotionM = String.fromCharCode(110,101,103,95,57,95,51,55,0);
       let baidut = String.fromCharCode(114,101,113,117,105,114,101,95,55,95,54,52,0);
      for (let l = 0; l < 2; l++) {
          let greyr = String.fromCharCode(100,99,97,100,97,116,97,95,116,95,54,57,0);
          let viewerY = String.fromCharCode(108,97,115,116,110,111,100,101,95,55,95,54,52,0);
          let renew0 = 1;
         promotionM += `${parseInt(`${tooltips4}`)}`;
         greyr = "1";
         viewerY = `${renew0}`;
         renew0 &= viewerY.length;
      }
         eventC *= 2;
      let blackj = baidut.length >= 8136801;
      do {
         baidut += `${1 & parseInt(`${eventC}`)}`;
         if (blackj) {
            break;
         }
      } while ((1 >= (baidut.length << (Math.min(Math.abs(2), 1)))) && blackj);
      if (4 > (baidut.length << (Math.min(Math.abs(1), 1))) || 1 > (baidut.length << (Math.min(1, Math.abs(switch_boj.size))))) {
         switch_boj = new Map([[`${switch_boj.size}`, 2 * switch_boj.size]]);
      }
      while ((eventC / (Math.max(switch_boj.size, 1))) <= 1.95 && 1.95 <= (eventC / (Math.max(4, switch_boj.size)))) {
          let uploadJ = 0;
          let filter9 = String.fromCharCode(114,95,57,51,95,97,112,112,101,110,100,101,100,0);
          let h_positionF: Map<any, any> = new Map([[String.fromCharCode(109,100,104,100,95,119,95,51,54,0),46], [String.fromCharCode(98,95,51,48,95,114,101,113,117,101,115,116,101,114,115,0),248]]);
         switch_boj = new Map([[filter9, 2]]);
         uploadJ >>= Math.min(Math.abs(h_positionF.size), 1);
         filter9 = `${1 << (Math.min(3, Math.abs(h_positionF.size)))}`;
         break;
      }
      let login2 = 7443058 >= switch_boj.size;
      do {
         switch_boj.set(`${logo5}`, parseInt(`${tooltips4}`) >> (Math.min(3, Math.abs(3))));
         if (login2) {
            break;
         }
      } while (login2 && (4 >= (5 ^ switch_boj.size) || 3 >= (switch_boj.size ^ 5)));
          let hcopy_9f = String.fromCharCode(114,95,49,48,48,95,103,97,109,97,0);
          let router8 = false;
          let blacklisti: Map<any, any> = new Map([[String.fromCharCode(106,99,109,97,115,116,101,114,95,99,95,51,54,0),false ], [String.fromCharCode(118,95,54,53,95,109,107,118,119,114,105,116,101,114,0),false ], [String.fromCharCode(100,97,115,104,95,53,95,54,55,0),true ]]);
         promotionM = "2";
         hcopy_9f = `${hcopy_9f.length}`;
         router8 = blacklisti.size == 6 && hcopy_9f == String.fromCharCode(117,0);
         blacklisti.set(`${router8}`, ((router8 ? 2 : 1) + blacklisti.size));
          let bingd = String.fromCharCode(100,113,117,97,110,116,95,116,95,53,52,0);
          let cornerO = String.fromCharCode(119,115,119,111,114,100,95,108,95,49,55,0);
         switch_boj = new Map([[`${eventC}`, 2 | logo5]]);
         bingd = `${bingd.length + cornerO.length}`;
         cornerO += `${cornerO.length}`;
         logo5 >>= Math.min(5, Math.abs(3));
      security0 *= parseInt(`${androidj}`);
   }
       let f_image8 = 1.0;
       let singleP = 0;
      if ((singleP * parseInt(`${f_image8}`)) == 3 || (f_image8 * 1.32) == 3.7) {
          let utils4: Map<any, any> = new Map([[String.fromCharCode(113,95,57,52,95,99,111,110,116,97,105,110,105,110,103,0),615], [String.fromCharCode(104,97,115,104,107,101,121,95,103,95,56,55,0),402]]);
          let coreH = String.fromCharCode(115,117,98,118,97,108,117,101,95,50,95,53,56,0);
          let themeQ = String.fromCharCode(108,95,53,52,95,115,117,98,109,105,116,116,101,100,0);
         singleP -= (coreH == String.fromCharCode(72,0) ? coreH.length : utils4.size);
         utils4.set(themeQ, themeQ.length);
      }
      if (1.74 > f_image8) {
         f_image8 -= parseFloat(`${3 + parseInt(`${f_image8}`)}`);
      }
      for (let j = 0; j < 3; j++) {
         singleP &= parseInt(`${f_image8}`);
      }
      let gestures3 = 9154337 >= singleP;
      do {
          let apple7 = 5.0;
         singleP &= parseInt(`${f_image8}`) ^ 3;
         apple7 -= parseFloat(`${3 % (Math.max(parseInt(`${apple7}`), 8))}`);
         if (gestures3) {
            break;
         }
      } while (gestures3 && (singleP <= 1));
          let xvoda = String.fromCharCode(98,111,97,116,95,113,95,54,56,0);
          let umeng3: Map<any, any> = new Map([[String.fromCharCode(97,95,52,51,95,99,116,120,116,0),String.fromCharCode(110,95,57,48,95,119,114,105,116,101,98,105,116,115,0)], [String.fromCharCode(100,95,50,49,95,97,100,118,97,110,99,101,0),String.fromCharCode(102,111,108,108,111,119,115,95,98,95,49,48,0)], [String.fromCharCode(109,112,115,117,98,95,115,95,56,48,0),String.fromCharCode(112,108,97,121,98,97,99,107,95,109,95,51,55,0)]]);
          let heartc = 5;
         f_image8 /= Math.max(parseFloat(`${singleP}`), 1);
         xvoda = `${umeng3.size >> (Math.min(Math.abs(2), 5))}`;
         umeng3.set(`${heartc}`, heartc);
      while ((4.54 * f_image8) <= 4.64 && 1 <= (5 << (Math.min(5, Math.abs(singleP))))) {
         singleP %= Math.max(parseInt(`${f_image8}`) / 2, 1);
         break;
      }
      package_5e = [securityL.length >> (Math.min(4, Math.abs(parseInt(`${collectionG}`))))];

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let reminderm = String.fromCharCode(97,95,50,56,95,99,111,109,97,110,100,0);
    let showx = 4.0;
    let anythinkI: Map<any, any> = new Map([[String.fromCharCode(113,95,50,51,95,109,101,116,101,114,0),144], [String.fromCharCode(99,111,100,101,100,95,103,95,53,55,0),367], [String.fromCharCode(108,95,49,54,95,115,101,116,116,101,114,0),799]]);
    let stark = true;
    let firebaseV = String.fromCharCode(102,101,116,99,104,101,114,95,104,95,49,48,0);
    let foundR: Array<any> = [42, 895, 551];
    let promotion5 = false;
    let adulti = true;
    let mbnativeadvancedC = 5.0;
    let homeY = String.fromCharCode(104,95,53,54,95,97,110,110,111,117,110,99,101,0);
    let formx = String.fromCharCode(106,95,49,53,95,100,101,115,104,97,107,101,0);
    let reportO = false;
   while (reminderm.length >= 4) {
      firebaseV = `${firebaseV.length | parseInt(`${showx}`)}`;
      break;
   }
      firebaseV += `${parseInt(`${mbnativeadvancedC}`) & 2}`;
   if ((showx * parseFloat(`${reminderm.length}`)) > 2.9) {
      showx /= Math.max(parseFloat(`${reminderm.length}`), 4);
   }
      mbnativeadvancedC -= parseInt(`${showx}`) & 2;
       let helperC = String.fromCharCode(104,95,51,57,95,104,101,97,100,108,105,110,101,0);
       let entryN: Array<any> = [714, 1, 508];
       let mbridgev = String.fromCharCode(116,101,120,116,95,111,95,55,49,0);
       let delegate_gbf = 4;
      if (entryN.length < 1) {
         delegate_gbf |= (mbridgev == String.fromCharCode(70,0) ? mbridgev.length : entryN.length);
      }
          let phoneA = true;
          let calendar1: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,101,100,95,109,95,57,54,0),String.fromCharCode(112,95,54,53,95,103,97,112,0)], [String.fromCharCode(112,97,116,104,95,98,95,53,0),String.fromCharCode(100,102,115,116,95,97,95,56,0)]]);
          let stepn = 0.0;
         entryN.push(helperC.length);
         phoneA = null == calendar1.get(`${phoneA}`);
         calendar1 = new Map([[`${calendar1.size}`, (2 / (Math.max(5, (phoneA ? 4 : 1))))]]);
         stepn *= (parseFloat(`${3 & (phoneA ? 2 : 4)}`));
      while ((delegate_gbf << (Math.min(Math.abs(4), 4))) < 3 || 4 < (delegate_gbf << (Math.min(helperC.length, 4)))) {
          let downloadingI = true;
          let userG: Map<any, any> = new Map([[String.fromCharCode(120,95,49,57,95,99,100,106,112,101,103,0),String.fromCharCode(119,95,53,54,95,115,109,97,108,108,101,115,116,0)], [String.fromCharCode(114,101,110,100,101,114,97,98,108,101,95,110,95,53,0),String.fromCharCode(116,95,56,55,95,115,121,110,99,104,114,111,110,105,122,101,100,0)], [String.fromCharCode(109,95,57,50,95,117,110,115,101,110,100,0),String.fromCharCode(104,95,54,50,95,116,119,111,115,116,97,103,101,0)]]);
         delegate_gbf %= Math.max(1, (userG.size * (downloadingI ? 5 : 5)));
         break;
      }
      let indicatorS = entryN.length >= 5259667;
      do {
         entryN = [1 % (Math.max(2, helperC.length))];
         if (indicatorS) {
            break;
         }
      } while (indicatorS && (helperC.endsWith(`${entryN.length}`)));
          let settingU: Array<any> = [311, 457, 263];
          let verticalk = 2.0;
          let kickB = String.fromCharCode(108,95,52,51,95,109,97,100,100,0);
         mbridgev = `${parseInt(`${verticalk}`) * settingU.length}`;
         settingU.push(kickB.length / (Math.max(kickB.length, 2)));
         verticalk /= Math.max(5, parseFloat(`${kickB.length << (Math.min(kickB.length, 1))}`));
      while (1 >= (1 * entryN.length) && (entryN.length * 1) >= 5) {
         entryN = [helperC.length];
         break;
      }
      for (let q = 0; q < 3; q++) {
         mbridgev = `${(String.fromCharCode(121,0) == mbridgev ? entryN.length : mbridgev.length)}`;
      }
      while (helperC.length > 4 && mbridgev.length > 4) {
          let privilegei: Array<any> = [789, 828];
          let thumbnailY = String.fromCharCode(98,110,104,101,120,95,111,95,49,54,0);
          let u_lockw: Map<any, any> = new Map([[String.fromCharCode(120,95,54,51,95,98,117,102,102,101,114,115,114,99,0),true ], [String.fromCharCode(98,105,108,105,110,101,97,114,95,55,95,57,56,0),false ], [String.fromCharCode(116,95,51,52,95,114,116,99,112,0),true ]]);
          let editR = 2;
         mbridgev = `${editR}`;
         privilegei.push(1 ^ thumbnailY.length);
         thumbnailY += "1";
         u_lockw.set(thumbnailY, thumbnailY.length);
         editR += 1;
         break;
      }
      stark = foundR.length < 79 && 79 < mbridgev.length;
   let telegram2 = 7696150.0 <= showx;
   do {
       let editf = String.fromCharCode(118,112,100,97,116,97,95,122,95,50,52,0);
       let controls5: Map<any, any> = new Map([[String.fromCharCode(101,95,50,51,0),String.fromCharCode(115,95,53,56,95,115,99,116,101,0)], [String.fromCharCode(109,95,56,50,95,97,98,105,0),String.fromCharCode(117,95,48,95,98,105,111,109,101,116,114,105,99,115,0)], [String.fromCharCode(120,95,50,54,95,100,101,115,116,105,110,97,116,105,111,110,115,0),String.fromCharCode(111,95,50,95,117,108,116,114,97,0)]]);
       let acceptedM = String.fromCharCode(105,95,57,48,95,104,101,97,118,121,0);
       let pageP = 5.0;
       let statisticsg = true;
      for (let z = 0; z < 1; z++) {
         statisticsg = 5 >= controls5.size;
      }
       let with_hr = String.fromCharCode(100,111,119,110,95,54,95,57,48,0);
       let combineQ = String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,118,95,56,50,0);
         with_hr = `${((statisticsg ? 5 : 4))}`;
      for (let l = 0; l < 2; l++) {
          let sortm = 3.0;
          let crownZ = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,95,116,95,50,49,0);
         pageP *= parseFloat(`${parseInt(`${pageP}`) * 1}`);
         sortm *= 1;
         crownZ += `${crownZ.length}`;
      }
         pageP *= (parseFloat(`${(statisticsg ? 5 : 4) % (Math.max(editf.length, 3))}`));
      while (1.25 < pageP) {
          let huaweiE = String.fromCharCode(100,95,51,57,95,101,120,101,99,117,116,101,100,0);
          let flyers = 5;
         pageP /= Math.max(parseFloat(`${2 % (Math.max(5, editf.length))}`), 5);
         huaweiE = `${flyers + 3}`;
         flyers |= huaweiE.length ^ 2;
         break;
      }
      let windk = pageP <= 5624166.0;
      do {
          let stylesa = true;
          let actionJ = String.fromCharCode(111,95,54,51,0);
          let windN: Array<any> = [String.fromCharCode(107,95,50,48,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0), String.fromCharCode(116,95,53,55,95,116,114,97,105,116,0), String.fromCharCode(113,95,50,50,95,114,101,109,101,109,98,101,114,101,100,0)];
          let pathP = String.fromCharCode(110,95,56,56,95,115,101,109,97,110,116,105,99,97,108,108,121,0);
         pageP -= parseFloat(`${3}`);
         stylesa = actionJ.length > 33;
         actionJ += `${pathP.length}`;
         windN = [2];
         pathP = `${3 | windN.length}`;
         if (windk) {
            break;
         }
      } while (((editf.length % 4) < 2) && windk);
      if (controls5.size < 2) {
         acceptedM += "2";
      }
         statisticsg = pageP >= 58.40 || with_hr.length >= 69;
          let relatedy = String.fromCharCode(115,111,110,111,95,97,95,54,50,0);
          let malaysiaZ = String.fromCharCode(111,95,49,53,95,101,110,99,111,100,105,110,103,0);
         acceptedM = `${(with_hr.length ^ (statisticsg ? 4 : 3))}`;
         relatedy = `${(relatedy == String.fromCharCode(90,0) ? malaysiaZ.length : relatedy.length)}`;
         malaysiaZ = `${malaysiaZ.length ^ relatedy.length}`;
         statisticsg = statisticsg || combineQ.length > 46;
      for (let o = 0; o < 1; o++) {
          let long_wK = String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,95,99,95,51,49,0);
         acceptedM = `${parseInt(`${pageP}`) & long_wK.length}`;
      }
         acceptedM += `${acceptedM.length % (Math.max(3, 9))}`;
      while (4 <= combineQ.length && with_hr != String.fromCharCode(115,0)) {
          let unselectedZ = String.fromCharCode(113,95,51,56,95,100,101,99,111,100,101,0);
          let fastforward5 = true;
         combineQ = `${acceptedM.length}`;
         unselectedZ += `${unselectedZ.length << (Math.min(Math.abs(2), 4))}`;
         fastforward5 = unselectedZ == unselectedZ;
         break;
      }
         editf = "3";
      showx /= Math.max(5, parseFloat(`${firebaseV.length}`));
      if (telegram2) {
         break;
      }
   } while (telegram2 && (showx < 2.18));

      if (delayValue === undefined) {

   while (4.76 == mbnativeadvancedC) {
      reminderm += `${((promotion5 ? 4 : 2) & foundR.length)}`;
      break;
   }
   let zhubou = String.fromCharCode(103,115,110,108,116,118,116,55,113,121,0) == firebaseV;
   do {
      firebaseV = "1";
      if (zhubou) {
         break;
      }
   } while (zhubou && (5 < firebaseV.length));
   let small6 = 7584828 >= reminderm.length;
   do {
       let googleJ: Array<any> = [String.fromCharCode(99,102,116,98,115,117,98,95,54,95,52,56,0), String.fromCharCode(110,95,53,48,95,117,110,115,111,108,118,101,100,0), String.fromCharCode(115,97,116,100,120,95,50,95,57,51,0)];
       let logoP = String.fromCharCode(119,95,53,49,95,99,111,111,108,100,111,119,110,115,0);
       let notificationm = String.fromCharCode(118,95,51,49,95,109,117,116,97,98,108,101,0);
       let gemfileM = 1;
       let leagueL: Map<any, any> = new Map([[String.fromCharCode(114,95,50,57,95,108,122,109,97,0),String.fromCharCode(101,118,98,117,102,102,101,114,95,97,95,51,56,0)], [String.fromCharCode(97,95,51,53,95,108,111,97,100,120,0),String.fromCharCode(114,101,112,108,105,101,114,115,95,49,95,57,56,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,109,95,55,0),String.fromCharCode(101,115,115,105,111,110,95,106,95,48,0)]]);
      if ((gemfileM / (Math.max(5, googleJ.length))) == 4 && 5 == (gemfileM / (Math.max(4, 1)))) {
         gemfileM %= Math.max(4, 3 | gemfileM);
      }
      if (3 >= (notificationm.length ^ 2) && (notificationm.length ^ gemfileM) >= 2) {
         notificationm += `${logoP.length}`;
      }
         notificationm = `${logoP.length - 2}`;
      while (gemfileM > 1) {
         gemfileM <<= Math.min(4, Math.abs(3));
         break;
      }
          let containerE = 4.0;
          let pingc = true;
          let borderlessc: Map<any, any> = new Map([[String.fromCharCode(106,95,56,49,95,105,110,116,114,105,110,0),885], [String.fromCharCode(118,95,52,56,95,99,111,110,116,114,105,98,0),224]]);
         leagueL.set(`${pingc}`, 1);
         containerE += parseFloat(`${parseInt(`${containerE}`)}`);
         borderlessc = new Map([[`${borderlessc.size}`, borderlessc.size - parseInt(`${containerE}`)]]);
         notificationm += `${notificationm.length + logoP.length}`;
      for (let d = 0; d < 2; d++) {
         logoP = `${(String.fromCharCode(48,0) == notificationm ? notificationm.length : leagueL.size)}`;
      }
         logoP = `${notificationm.length}`;
      if (1 == (leagueL.size & logoP.length) || 5 == (1 & leagueL.size)) {
         leagueL = new Map([[`${googleJ.length}`, 1 - googleJ.length]]);
      }
          let data2 = 1.0;
          let kicka = false;
         logoP = `${1 ^ leagueL.size}`;
         data2 /= Math.max((parseInt(`${data2}`) - (kicka ? 3 : 3)), 1);
         kicka = data2 > 11.24;
       let photo8: Array<any> = [14, 705, 394];
       let hnewinterstitialq: Array<any> = [254, 482, 693];
      for (let m = 0; m < 2; m++) {
         logoP += `${photo8.length}`;
      }
      if (!hnewinterstitialq.includes(photo8.length)) {
         photo8.push(leagueL.size);
      }
         googleJ.push(googleJ.length >> (Math.min(3, Math.abs(gemfileM))));
         logoP += `${(logoP == String.fromCharCode(55,0) ? logoP.length : googleJ.length)}`;
      reminderm = `${1 - notificationm.length}`;
      if (small6) {
         break;
      }
   } while (small6 && ((foundR.length % 3) >= 4 || 3 >= (reminderm.length % (Math.max(9, foundR.length)))));
   while (showx < 5.64 || (showx / 5.64) < 4.19) {
      showx += parseFloat(`${3 - parseInt(`${mbnativeadvancedC}`)}`);
      break;
   }
   let progressS = 8694383.0 <= showx;
   do {
       let lessG: Array<any> = [907, 715];
       let changei = 4.0;
       let minivodk: Array<any> = [237, 168];
       let paginationz = String.fromCharCode(105,110,118,102,95,114,95,55,55,0);
      while (4 < minivodk.length) {
         changei *= parseFloat(`${lessG.length % (Math.max(3, 6))}`);
         break;
      }
          let mbridgez = String.fromCharCode(101,115,116,105,109,97,116,105,110,103,95,109,95,50,52,0);
         lessG.push(paginationz.length);
         mbridgez += `${mbridgez.length - mbridgez.length}`;
       let buildd = true;
      if (1.44 <= (changei / 1.42) && changei <= 1.42) {
          let championj = String.fromCharCode(100,95,55,49,95,117,108,111,110,103,0);
          let baiduW = String.fromCharCode(116,95,50,48,95,108,105,98,115,112,101,101,120,0);
          let plus0: Array<any> = [362, 709, 898];
          let dycreator4 = String.fromCharCode(112,114,111,109,111,116,105,110,103,95,56,95,55,0);
         buildd = 56 >= championj.length && dycreator4 == String.fromCharCode(97,0);
         championj += "3";
         baiduW = `${1 * baiduW.length}`;
         plus0.push(baiduW.length);
         dycreator4 += `${baiduW.length}`;
      }
      if (buildd && 5.30 < (changei * 3.34)) {
         buildd = paginationz.length > 3 || 47.89 > changei;
      }
       let native0 = 3.0;
       let rankc: Array<any> = [529, 789];
       let taiwanJ: Array<any> = [String.fromCharCode(115,108,105,99,101,100,95,122,95,57,53,0), String.fromCharCode(115,101,115,115,111,110,95,55,95,52,53,0), String.fromCharCode(101,115,115,101,110,116,105,97,108,95,115,95,50,54,0)];
          let bcopy_zW = String.fromCharCode(99,111,108,111,114,107,101,121,95,51,95,53,0);
          let borderlessj = String.fromCharCode(105,95,49,57,95,104,101,120,105,110,116,0);
          let singlei = String.fromCharCode(107,95,49,48,95,101,108,115,100,101,99,0);
         minivodk = [(singlei == String.fromCharCode(71,0) ? singlei.length : lessG.length)];
         bcopy_zW = "2";
         borderlessj += `${borderlessj.length % (Math.max(9, bcopy_zW.length))}`;
      if (taiwanJ.includes(native0)) {
         taiwanJ.push(parseInt(`${changei}`));
      }
      let feedbackm = paginationz.length <= 5601906;
      do {
          let darkN = String.fromCharCode(119,95,57,49,95,115,101,116,115,104,97,114,101,0);
          let jcopy_alc = String.fromCharCode(101,110,111,117,103,104,95,54,95,57,53,0);
          let stringX = 1;
         paginationz += `${(String.fromCharCode(111,0) == jcopy_alc ? jcopy_alc.length : minivodk.length)}`;
         darkN = "2";
         stringX ^= darkN.length;
         if (feedbackm) {
            break;
         }
      } while (feedbackm && (5 == (taiwanJ.length - 2) && 2 == (paginationz.length - taiwanJ.length)));
      let settings_ = 5811349 >= rankc.length;
      do {
         rankc.push(3 * rankc.length);
         if (settings_) {
            break;
         }
      } while ((2 <= rankc.length) && settings_);
      if (4 >= minivodk.length) {
         lessG.push(parseInt(`${changei}`) / (Math.max(7, parseInt(`${native0}`))));
      }
      showx /= Math.max(1, parseFloat(`${1}`));
      if (progressS) {
         break;
      }
   } while (progressS && ((foundR.length % (Math.max(5, 6))) <= 2 && (3.37 * showx) <= 4.51));
       let anytimew: Map<any, any> = new Map([[String.fromCharCode(116,95,56,56,95,114,105,100,103,101,0),true ], [String.fromCharCode(115,105,112,114,95,57,95,57,50,0),false ], [String.fromCharCode(107,95,54,50,95,115,101,110,100,0),true ]]);
       let forwardr = true;
      let memberO = forwardr ? !forwardr : forwardr;
      do {
         forwardr = anytimew.size < 94 || !forwardr;
         if (memberO) {
            break;
         }
      } while (memberO && (2 >= (anytimew.size << (Math.min(Math.abs(3), 5))) && 3 >= anytimew.size));
      while (4 <= (2 & anytimew.size)) {
         anytimew.set(`${forwardr}`, ((forwardr ? 1 : 3) % (Math.max(10, anytimew.size))));
         break;
      }
      let rules3 = forwardr ? !forwardr : forwardr;
      do {
          let gesturesv = true;
         forwardr = (gesturesv ? forwardr : gesturesv);
         if (rules3) {
            break;
         }
      } while ((3 == (anytimew.size % 2)) && rules3);
      if (2 >= anytimew.size && (2 ^ anytimew.size) >= 1) {
          let reminderr = 5;
          let leftl = true;
          let largeH = String.fromCharCode(117,95,55,50,95,118,97,114,105,97,98,105,108,105,116,121,0);
          let appsy = 2.0;
          let policyJ = 4.0;
         forwardr = !leftl && anytimew.size <= 14;
         reminderr |= 3 << (Math.min(4, Math.abs(parseInt(`${appsy}`))));
         leftl = String.fromCharCode(114,0) == largeH;
         largeH = "1";
         appsy /= Math.max(3, 3);
         policyJ += parseFloat(`${parseInt(`${appsy}`)}`);
      }
       let strr: Map<any, any> = new Map([[String.fromCharCode(117,110,105,116,95,51,95,57,48,0),281], [String.fromCharCode(114,98,115,112,95,103,95,49,48,48,0),77], [String.fromCharCode(112,95,50,55,95,99,108,105,112,98,111,97,114,100,0),943]]);
       let matchesY: Map<any, any> = new Map([[String.fromCharCode(97,114,116,119,111,114,107,95,121,95,51,50,0),String.fromCharCode(97,95,53,56,95,111,114,100,101,114,116,121,112,101,0)], [String.fromCharCode(109,97,116,116,101,100,95,51,95,49,50,0),String.fromCharCode(102,99,116,108,95,115,95,55,55,0)], [String.fromCharCode(98,95,52,51,95,111,102,102,101,115,116,0),String.fromCharCode(113,117,97,110,116,95,100,95,55,56,0)]]);
      if ((2 << (Math.min(3, Math.abs(strr.size)))) < 4 || (matchesY.size << (Math.min(3, Math.abs(strr.size)))) < 2) {
          let diceZ: Map<any, any> = new Map([[String.fromCharCode(113,95,49,54,95,117,110,114,105,115,101,0),false ], [String.fromCharCode(104,111,115,116,115,95,104,95,50,0),false ], [String.fromCharCode(115,95,53,53,95,114,101,115,105,100,117,101,115,0),false ]]);
          let vignette_ = String.fromCharCode(98,108,97,110,107,95,118,95,51,49,0);
          let bootsplashl: Map<any, any> = new Map([[String.fromCharCode(108,95,50,51,95,112,97,103,0),204], [String.fromCharCode(100,111,118,101,95,107,95,54,0),155], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,115,95,53,55,0),101]]);
         matchesY = new Map([[`${bootsplashl.size}`, 3]]);
         diceZ.set(`${vignette_}`, vignette_.length);
         bootsplashl = new Map([[`${diceZ.size}`, (String.fromCharCode(56,0) == vignette_ ? diceZ.size : vignette_.length)]]);
      }
      adulti = firebaseV.startsWith(`${forwardr}`);
        if (showSlider === 'none' && !paused) {

   if (foundR.length <= 5) {
      foundR.push(foundR.length << (Math.min(Math.abs(1), 2)));
   }
      showx *= (parseFloat(`${(stark ? 2 : 5) << (Math.min(Math.abs((promotion5 ? 1 : 5)), 5))}`));
   if (adulti) {
       let injurys: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,115,110,97,112,115,104,111,116,0),570], [String.fromCharCode(115,112,108,97,115,104,95,119,95,53,49,0),372], [String.fromCharCode(105,110,100,105,99,105,101,115,95,108,95,53,56,0),89]]);
       let crossP = true;
       let pathA = true;
       let hongkongO = String.fromCharCode(106,95,49,56,95,98,108,97,99,107,115,0);
       let t_lockl = true;
          let appleJ: Array<any> = [781, 142, 919];
         injurys.set(`${t_lockl}`, 1);
         appleJ = [appleJ.length];
      if (pathA || !t_lockl) {
          let interstitialU = 3.0;
         pathA = !crossP || hongkongO.length <= 7;
         interstitialU /= Math.max(2, parseInt(`${interstitialU}`));
      }
         hongkongO += `${3 << (Math.min(5, hongkongO.length))}`;
      if (hongkongO.length > 1 && !t_lockl) {
         t_lockl = !pathA;
      }
         crossP = crossP || injurys.size > 67;
       let resultU = 1;
      if (injurys.size >= 2 && (injurys.size / 2) >= 3) {
         injurys.set(`${t_lockl}`, 1 & injurys.size);
      }
          let tickN = String.fromCharCode(113,95,51,95,114,101,100,117,110,100,97,110,116,0);
         hongkongO += `${(injurys.size ^ (crossP ? 5 : 5))}`;
         tickN += `${tickN.length - tickN.length}`;
      if (pathA) {
         pathA = !crossP;
      }
      while ((1 << (Math.min(4, Math.abs(resultU)))) > 3) {
         hongkongO += `${((pathA ? 1 : 3) - 1)}`;
         break;
      }
      let skipn = 7277901 >= hongkongO.length;
      do {
         hongkongO = `${((crossP ? 1 : 2) & resultU)}`;
         if (skipn) {
            break;
         }
      } while ((hongkongO.endsWith(`${pathA}`)) && skipn);
      for (let x = 0; x < 1; x++) {
         resultU -= resultU;
      }
          let download2 = 5.0;
         injurys.set(`${pathA}`, hongkongO.length);
         download2 += parseInt(`${download2}`);
      if (crossP) {
         injurys.set(`${pathA}`, 1 << (Math.min(Math.abs(resultU), 4)));
      }
      if (crossP) {
          let k_player6 = String.fromCharCode(116,95,57,56,95,105,115,116,97,112,0);
          let flipperW = 4.0;
          let usern = 5;
          let resendY = 3.0;
          let lessw = 5.0;
         crossP = t_lockl || hongkongO.length >= 42;
         k_player6 += `${parseInt(`${flipperW}`)}`;
         flipperW *= parseInt(`${lessw}`);
         usern *= 3;
         resendY *= parseInt(`${lessw}`);
      }
      adulti = ((reminderm.length ^ (stark ? 70 : reminderm.length)) == 70);
   }
       let productw = String.fromCharCode(107,95,56,95,99,111,114,101,105,109,97,103,101,0);
       let profiley = String.fromCharCode(102,95,54,49,95,105,110,105,116,105,97,108,0);
         productw = `${1 & profiley.length}`;
      if (profiley.endsWith(`${productw.length}`)) {
         profiley += `${(String.fromCharCode(72,0) == profiley ? profiley.length : productw.length)}`;
      }
      anythinkI.set(homeY, reminderm.length);
   let promotionP = homeY == String.fromCharCode(48,55,48,121,119,100,55,52,116,0);
   do {
       let yellowV = String.fromCharCode(100,95,57,56,95,112,97,115,115,102,0);
      while (yellowV != yellowV) {
          let verticalb: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,104,111,117,114,115,0),String.fromCharCode(116,104,101,114,101,117,109,95,112,95,54,57,0)], [String.fromCharCode(118,105,116,99,95,112,95,50,49,0),String.fromCharCode(101,110,117,109,95,111,95,50,54,0)]]);
          let apps6 = String.fromCharCode(122,95,53,48,95,111,110,116,101,120,116,0);
          let orangez = String.fromCharCode(109,95,56,49,95,108,116,97,98,108,101,0);
         yellowV += "3";
         verticalb.set(apps6, 3 / (Math.max(2, apps6.length)));
         orangez = `${2 & verticalb.size}`;
         break;
      }
      if (!yellowV.startsWith(`${yellowV.length}`)) {
          let terms2 = true;
          let controlsF = 1.0;
          let lightM = true;
          let utilsO = false;
         yellowV = `${parseInt(`${controlsF}`) + 2}`;
         terms2 = utilsO;
         controlsF += (parseFloat(`${(utilsO ? 4 : 1) << (Math.min(4, Math.abs((terms2 ? 2 : 2))))}`));
         lightM = (!utilsO ? !lightM : utilsO);
      }
      let vietnamN = yellowV == String.fromCharCode(54,52,105,55,95,0);
      do {
          let bufferV: Map<any, any> = new Map([[String.fromCharCode(120,105,110,99,95,109,95,51,57,0),980], [String.fromCharCode(117,110,114,101,102,95,109,95,57,52,0),514]]);
          let faviconb = String.fromCharCode(97,118,112,114,111,103,114,97,109,95,110,95,55,50,0);
          let whistleg = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,101,95,52,50,0);
         yellowV += "2";
         bufferV.set(`${faviconb}`, 1 - faviconb.length);
         whistleg += `${bufferV.size + 2}`;
         if (vietnamN) {
            break;
         }
      } while ((yellowV == String.fromCharCode(107,0)) && vietnamN);
      homeY += `${((stark ? 1 : 4) ^ 3)}`;
      if (promotionP) {
         break;
      }
   } while ((!homeY.endsWith(`${foundR.length}`)) && promotionP);
      foundR.push((2 + (adulti ? 2 : 5)));
          setShowControls(false)
        }
      } else {

       let termsW = 2;
       let mode5 = String.fromCharCode(104,95,51,50,95,108,105,102,101,99,121,99,108,101,0);
       let floaterT = String.fromCharCode(100,101,108,97,121,115,95,108,95,55,53,0);
         termsW ^= (String.fromCharCode(78,0) == mode5 ? mode5.length : termsW);
         floaterT += `${termsW / 1}`;
       let productG = 0.0;
      while ((1.6 * productG) < 5.6 || 3 < (floaterT.length << (Math.min(Math.abs(3), 4)))) {
         productG += parseFloat(`${3 & termsW}`);
         break;
      }
      while (!floaterT.startsWith(`${mode5.length}`)) {
         mode5 += "1";
         break;
      }
      while ((termsW % (Math.max(4, 3))) == 5 && (termsW % 4) == 5) {
         mode5 += `${mode5.length << (Math.min(4, Math.abs(termsW)))}`;
         break;
      }
         floaterT = `${termsW}`;
         mode5 = "3";
         mode5 = `${parseInt(`${productG}`)}`;
      adulti = 16 >= termsW || !stark;
   for (let s = 0; s < 2; s++) {
      anythinkI.set(firebaseV, (String.fromCharCode(86,0) == firebaseV ? firebaseV.length : (stark ? 5 : 4)));
   }
      homeY += "1";
   let assists = mbnativeadvancedC <= 8500402.0;
   do {
       let profile_ = 2;
       let mbbidk = true;
         mbbidk = !mbbidk;
          let huaweip: Array<any> = [352, 432, 698];
          let settingsd = 4.0;
         mbbidk = (profile_ + settingsd) >= 62;
         huaweip.push(huaweip.length);
         settingsd *= parseFloat(`${huaweip.length * huaweip.length}`);
         mbbidk = profile_ == 85;
         profile_ %= Math.max(2, 2);
      for (let o = 0; o < 3; o++) {
         profile_ /= Math.max(((mbbidk ? 1 : 2) % (Math.max(3, profile_))), 3);
      }
         mbbidk = !mbbidk;
      mbnativeadvancedC /= Math.max(reminderm.length, 5);
      if (assists) {
         break;
      }
   } while (assists && (!adulti));
   let detailsM = 8122039 >= reminderm.length;
   do {
       let dangerN = String.fromCharCode(115,117,98,112,101,101,114,95,49,95,49,48,0);
       let soundf = 1;
       let buttonx: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,95,99,95,55,53,0),true ], [String.fromCharCode(99,117,109,117,108,97,116,105,118,101,95,53,95,57,49,0),false ], [String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,108,95,55,48,0),false ]]);
      for (let p = 0; p < 1; p++) {
         dangerN += `${(String.fromCharCode(121,0) == dangerN ? dangerN.length : soundf)}`;
      }
       let renewi = 4.0;
       let twitterU = 2.0;
          let upgrade7 = String.fromCharCode(108,95,57,50,95,119,101,98,112,97,103,101,0);
         renewi += 3;
         upgrade7 = `${upgrade7.length}`;
          let lessj = false;
         buttonx.set(dangerN, soundf / (Math.max(dangerN.length, 6)));
         lessj = !lessj;
      if ((soundf % 4) >= 2) {
          let targetH: Array<any> = [String.fromCharCode(113,95,55,55,95,115,116,114,101,110,103,116,104,115,0), String.fromCharCode(107,95,56,48,95,117,110,109,105,110,105,109,105,122,101,0)];
          let policyz = String.fromCharCode(110,105,100,115,95,111,95,57,53,0);
          let privilegeij: Map<any, any> = new Map([[String.fromCharCode(108,101,110,103,116,104,95,53,95,51,52,0),670], [String.fromCharCode(103,101,110,101,114,97,116,111,114,95,115,95,55,0),749], [String.fromCharCode(102,95,49,55,95,115,105,103,105,100,0),810]]);
          let applicationa = 0.0;
          let mbbannerR = String.fromCharCode(99,111,110,102,101,116,116,105,95,103,95,51,50,0);
         buttonx.set(`${soundf}`, soundf << (Math.min(Math.abs(parseInt(`${applicationa}`)), 4)));
         targetH.push(privilegeij.size + mbbannerR.length);
         policyz = `${policyz.length - 3}`;
         privilegeij = new Map([[`${privilegeij.size}`, (policyz == String.fromCharCode(111,0) ? privilegeij.size : policyz.length)]]);
         applicationa -= (String.fromCharCode(71,0) == mbbannerR ? privilegeij.size : mbbannerR.length);
      }
          let show0 = 3.0;
          let controlsc = 1;
          let pauseF = 3.0;
         buttonx = new Map([[`${buttonx.size}`, 2]]);
         show0 *= parseInt(`${pauseF}`);
         controlsc %= Math.max(4, parseInt(`${show0}`));
         pauseF -= parseInt(`${show0}`);
         buttonx = new Map([[`${renewi}`, parseInt(`${twitterU}`) << (Math.min(2, Math.abs(2)))]]);
      while (5 == soundf) {
          let ewardedN: Array<any> = [577, 94, 974];
          let gmailA: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,97,95,56,95,54,56,0),false ], [String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,117,95,54,53,0),false ], [String.fromCharCode(119,95,54,51,95,97,116,116,114,97,99,116,111,114,0),true ]]);
          let friendsu = 0.0;
          let turna: Map<any, any> = new Map([[String.fromCharCode(97,95,50,53,95,105,102,97,109,115,103,0),String.fromCharCode(105,110,118,101,114,118,97,108,95,122,95,50,51,0)], [String.fromCharCode(118,95,52,51,95,97,98,111,118,101,0),String.fromCharCode(115,101,108,101,99,116,95,104,95,56,57,0)]]);
         twitterU += turna.size;
         ewardedN.push(ewardedN.length);
         gmailA.set(`${friendsu}`, parseInt(`${friendsu}`) + 3);
         turna = new Map([[`${ewardedN.length}`, ewardedN.length * 3]]);
         break;
      }
      if (buttonx.size >= parseInt(`${twitterU}`)) {
         buttonx.set(`${twitterU}`, parseInt(`${twitterU}`));
      }
      reminderm = `${parseInt(`${mbnativeadvancedC}`) & soundf}`;
      if (detailsM) {
         break;
      }
   } while ((reminderm.length == 2) && detailsM);
      reminderm += "1";
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let indext = String.fromCharCode(112,114,111,106,101,99,116,95,112,95,57,51,0);
    let bottomO: Array<any> = [290, 842];
    let gradleQ: Array<any> = [787, 391];
    let nterstitialn = String.fromCharCode(114,111,117,110,100,115,95,102,95,54,48,0);
    let memberships = true;
    let selecti = true;
    let notificationG = 2.0;
    let gmailV = false;
    let reportH: Array<any> = [642, 943, 487];
    let private_1a = 2.0;
    let routerf = 3.0;
    let controlsE = true;
    let pluss: Array<any> = [633, 870];
    let customH = 1;
   for (let o = 0; o < 2; o++) {
      gmailV = (reportH.length - parseInt(`${private_1a}`)) > 43;
   }
       let filedP: Array<any> = [346, 692, 299];
      while (filedP.length <= filedP.length) {
         filedP = [3 + filedP.length];
         break;
      }
         filedP = [filedP.length >> (Math.min(Math.abs(1), 2))];
         filedP.push(1);
      indext = `${bottomO.length + 2}`;
   for (let l = 0; l < 1; l++) {
      nterstitialn = `${((selecti ? 1 : 1))}`;
   }
       let viewerT = String.fromCharCode(114,101,119,114,105,116,116,101,110,95,100,95,50,54,0);
       let forward9 = String.fromCharCode(112,95,51,52,95,114,116,109,112,112,107,116,0);
       let mappingI = String.fromCharCode(116,95,53,54,95,110,97,118,105,103,97,116,101,0);
      if (5 <= forward9.length) {
         forward9 = `${viewerT.length & 1}`;
      }
         viewerT = `${mappingI.length}`;
          let tempV: Array<any> = [452, 560, 760];
          let champion_: Map<any, any> = new Map([[String.fromCharCode(97,99,97,108,99,95,97,95,51,55,0),true ], [String.fromCharCode(107,95,49,95,112,117,116,115,116,114,0),true ], [String.fromCharCode(109,97,116,104,95,122,95,57,51,0),true ]]);
         viewerT = `${(String.fromCharCode(65,0) == viewerT ? viewerT.length : champion_.size)}`;
         tempV.push(tempV.length / (Math.max(8, tempV.length)));
         champion_.set(`${tempV.length}`, tempV.length + tempV.length);
      if (mappingI.length == forward9.length) {
         mappingI = "3";
      }
      if (forward9.length >= 3) {
          let fieldU = String.fromCharCode(116,95,54,51,95,103,108,107,0);
          let modalY: Map<any, any> = new Map([[String.fromCharCode(99,95,55,50,95,113,116,114,108,101,0),396], [String.fromCharCode(104,102,108,105,112,95,107,95,52,56,0),391]]);
         forward9 = `${1 * fieldU.length}`;
         fieldU += `${modalY.size}`;
         modalY = new Map([[`${modalY.size}`, modalY.size ^ modalY.size]]);
      }
       let gesturesq: Map<any, any> = new Map([[String.fromCharCode(121,95,53,50,95,109,97,116,101,114,105,97,108,0),724], [String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,95,104,95,53,54,0),677], [String.fromCharCode(110,95,52,49,95,99,108,116,111,115,116,114,0),204]]);
       let pageo: Map<any, any> = new Map([[String.fromCharCode(109,101,109,122,101,114,111,95,105,95,51,0),String.fromCharCode(119,95,53,50,95,104,101,108,112,101,114,0)], [String.fromCharCode(100,95,57,50,95,117,110,97,108,105,103,110,101,100,0),String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,114,95,57,55,0)], [String.fromCharCode(103,95,49,48,0),String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,105,95,50,55,0)]]);
       let gmailx = 2;
       let formL = 3;
      if (mappingI.length >= 4) {
         mappingI = `${formL}`;
      }
      if (viewerT != String.fromCharCode(90,0)) {
         mappingI += `${gesturesq.size ^ mappingI.length}`;
      }
      private_1a /= Math.max(3, (parseFloat(`${forward9 == String.fromCharCode(105,0) ? forward9.length : bottomO.length}`)));
   let securityG = 7943469 <= gradleQ.length;
   do {
      gradleQ.push(bottomO.length);
      if (securityG) {
         break;
      }
   } while (securityG && ((2 + gradleQ.length) < 4 && selecti));

    if (isLocked) {

   while (!selecti) {
      nterstitialn += `${indext.length}`;
      break;
   }
   for (let q = 0; q < 3; q++) {
       let editj: Map<any, any> = new Map([[String.fromCharCode(122,95,48,95,116,114,117,116,104,0),419], [String.fromCharCode(99,95,51,56,95,114,117,108,101,0),434]]);
       let episoded: Array<any> = [377, 11, 203];
       let catagoryL = 5.0;
       let confirmation5: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,101,110,99,97,112,0),String.fromCharCode(101,95,57,51,95,114,103,101,110,0)], [String.fromCharCode(100,95,49,51,95,99,104,97,114,116,115,0),String.fromCharCode(97,115,105,115,95,101,95,52,55,0)]]);
       let paginationj = 2.0;
      for (let a = 0; a < 2; a++) {
         editj.set(`${episoded.length}`, editj.size * 1);
      }
          let bannerD: Map<any, any> = new Map([[String.fromCharCode(104,95,51,50,95,100,105,118,105,100,101,100,0),true ], [String.fromCharCode(115,105,110,99,95,115,95,57,53,0),false ], [String.fromCharCode(120,95,50,57,95,117,112,100,97,116,97,98,108,101,0),false ]]);
          let chartn = String.fromCharCode(101,110,104,97,110,99,101,100,95,103,95,53,56,0);
         editj.set(`${paginationj}`, parseInt(`${paginationj}`) << (Math.min(Math.abs(bannerD.size), 2)));
         bannerD = new Map([[chartn, 2]]);
         chartn += "3";
      for (let a = 0; a < 1; a++) {
         editj.set(`${episoded.length}`, 3);
      }
      while (2 == (episoded.length ^ 3)) {
          let eighteenX: Map<any, any> = new Map([[String.fromCharCode(112,101,114,105,111,100,105,99,95,104,95,57,56,0),String.fromCharCode(107,105,115,115,95,53,95,56,48,0)], [String.fromCharCode(102,114,101,101,108,105,115,116,95,107,95,49,48,48,0),String.fromCharCode(97,97,99,112,115,121,95,101,95,54,48,0)]]);
          let sortR = 0.0;
          let middlewareM = 2.0;
          let submit_ = String.fromCharCode(114,101,103,117,108,97,116,101,95,120,95,51,56,0);
          let dplusu: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,116,101,100,95,116,95,51,48,0),true ], [String.fromCharCode(120,95,53,52,95,110,101,103,0),true ]]);
         episoded = [parseInt(`${catagoryL}`) + episoded.length];
         eighteenX = new Map([[`${middlewareM}`, 1]]);
         sortR += parseFloat(`${parseInt(`${sortR}`) - dplusu.size}`);
         middlewareM /= Math.max(1, parseFloat(`${dplusu.size | eighteenX.size}`));
         submit_ += `${2 ^ dplusu.size}`;
         break;
      }
          let loadingI = String.fromCharCode(108,95,57,50,95,110,111,116,105,102,105,101,114,0);
         editj = new Map([[`${confirmation5.size}`, confirmation5.size]]);
         loadingI += `${(loadingI == String.fromCharCode(86,0) ? loadingI.length : loadingI.length)}`;
         confirmation5 = new Map([[`${editj.size}`, 3 ^ parseInt(`${paginationj}`)]]);
         episoded.push(confirmation5.size);
         confirmation5 = new Map([[`${editj.size}`, 1]]);
          let productq = String.fromCharCode(109,95,49,53,95,97,99,116,105,118,97,116,101,0);
          let floating4: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,102,95,55,0),259], [String.fromCharCode(103,95,55,53,95,115,117,98,112,97,116,104,115,0),467], [String.fromCharCode(116,114,105,97,108,95,99,95,54,57,0),952]]);
         episoded = [1];
         productq += `${floating4.size << (Math.min(productq.length, 3))}`;
         floating4 = new Map([[`${floating4.size}`, productq.length]]);
         editj = new Map([[`${episoded.length}`, parseInt(`${catagoryL}`)]]);
      if (3.71 >= (1.7 - paginationj)) {
         editj.set(`${episoded.length}`, editj.size);
      }
          let anytimej: Map<any, any> = new Map([[String.fromCharCode(115,111,114,101,99,118,109,115,103,95,121,95,51,57,0),true ], [String.fromCharCode(102,111,114,109,97,116,115,95,49,95,53,49,0),true ], [String.fromCharCode(110,95,57,51,95,114,101,115,101,116,117,112,0),true ]]);
         paginationj *= editj.size >> (Math.min(Math.abs(2), 1));
         anytimej = new Map([[`${anytimej.size}`, anytimej.size]]);
          let phoneh = String.fromCharCode(110,104,97,110,99,101,95,48,95,54,52,0);
         catagoryL /= Math.max(parseInt(`${catagoryL}`), 3);
         phoneh += `${phoneh.length * phoneh.length}`;
      let analyticb = confirmation5.size <= 5836003;
      do {
          let streamingj = 2.0;
          let diceR = String.fromCharCode(103,101,110,101,114,97,103,101,95,117,95,54,54,0);
         confirmation5.set(diceR, parseInt(`${streamingj}`));
         if (analyticb) {
            break;
         }
      } while (((confirmation5.size / (Math.max(4, 4))) == 1) && analyticb);
      if (!Array.from(editj.keys()).includes(`${episoded.length}`)) {
         episoded = [episoded.length];
      }
      reportH = [1];
   }
      private_1a -= parseFloat(`${2 / (Math.max(parseInt(`${notificationG}`), 3))}`);
      selecti = private_1a >= parseFloat(`${indext.length}`);
   while (memberships) {
      memberships = indext.length <= 16;
      break;
   }
      

      gradleQ = [(indext.length | (gmailV ? 5 : 3))];
       let rulesv = String.fromCharCode(103,95,56,55,95,97,116,116,97,99,104,101,100,0);
          let indicatorv = String.fromCharCode(116,95,50,50,95,111,110,101,0);
         rulesv += `${(String.fromCharCode(76,0) == rulesv ? rulesv.length : indicatorv.length)}`;
      if (!rulesv.includes(`${rulesv.length}`)) {
          let application9: Array<any> = [String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,105,95,53,50,0), String.fromCharCode(106,95,51,53,95,101,109,117,108,97,116,105,111,110,0)];
          let umeng5 = 5;
          let modaly = String.fromCharCode(103,100,111,99,95,113,95,56,49,0);
         rulesv += `${umeng5}`;
         application9.push(modaly.length + 3);
         umeng5 %= Math.max(3, modaly.length / 1);
      }
      if (5 < rulesv.length) {
         rulesv += "1";
      }
      gradleQ = [3];
   while (2 < (nterstitialn.length & 1) || 1.24 < (private_1a - 2.32)) {
      private_1a += (parseFloat(`${(memberships ? 4 : 5) % 2}`));
      break;
   }
   while (!indext.startsWith(`${bottomO.length}`)) {
      bottomO = [gradleQ.length ^ 3];
      break;
   }
      indext += `${reportH.length - gradleQ.length}`;
      setIsLocked(false);
    } else {

   while (4 == (gradleQ.length ^ 1) || (notificationG + 3.95) == 2.36) {
       let fastforwardC = 4.0;
       let singlea = String.fromCharCode(100,105,100,95,112,95,51,56,0);
       let traminiU: Array<any> = [728, 379];
       let plusH = String.fromCharCode(118,105,97,95,104,95,54,54,0);
       let i_managerv = String.fromCharCode(105,109,112,111,114,116,97,110,116,95,121,95,54,48,0);
         traminiU = [3 + traminiU.length];
         traminiU.push(2);
      for (let n = 0; n < 2; n++) {
          let selectedf = 4.0;
          let const_h4r: Array<any> = [String.fromCharCode(97,110,99,104,111,114,115,95,103,95,55,56,0), String.fromCharCode(115,95,53,50,95,101,110,100,105,97,110,110,101,115,115,0)];
         fastforwardC -= parseFloat(`${1}`);
         selectedf += parseFloat(`${parseInt(`${selectedf}`)}`);
         const_h4r = [parseInt(`${selectedf}`)];
      }
      if (traminiU.length >= plusH.length) {
         traminiU.push(1);
      }
         singlea += `${(String.fromCharCode(118,0) == plusH ? traminiU.length : plusH.length)}`;
      for (let p = 0; p < 3; p++) {
          let submit9: Array<any> = [720, 61, 224];
         traminiU.push(singlea.length * submit9.length);
      }
         singlea += `${singlea.length - parseInt(`${fastforwardC}`)}`;
          let animationv: Array<any> = [436, 676, 621];
         fastforwardC *= parseFloat(`${singlea.length / (Math.max(8, parseInt(`${fastforwardC}`)))}`);
         animationv = [animationv.length];
         traminiU = [singlea.length];
      while (parseFloat(`${singlea.length}`) < fastforwardC) {
          let collectiono = true;
          let penaltyZ = String.fromCharCode(121,111,110,108,121,95,51,95,53,48,0);
         singlea += `${(plusH == String.fromCharCode(79,0) ? plusH.length : traminiU.length)}`;
         collectiono = !collectiono;
         penaltyZ += `${((collectiono ? 3 : 3) % 1)}`;
         break;
      }
          let actionsb = String.fromCharCode(99,95,49,95,97,117,116,111,98,97,110,104,0);
          let resultD: Array<any> = [393, 212, 116];
         traminiU = [(actionsb == String.fromCharCode(103,0) ? parseInt(`${fastforwardC}`) : actionsb.length)];
         resultD.push(resultD.length);
      if (4 <= (1 << (Math.min(3, traminiU.length))) && (traminiU.length << (Math.min(Math.abs(1), 4))) <= 5) {
         traminiU.push(1);
      }
      if (1 > (traminiU.length % (Math.max(i_managerv.length, 8))) && (traminiU.length % 1) > 1) {
         i_managerv = "3";
      }
          let rewardl = 1.0;
          let moviesX: Array<any> = [String.fromCharCode(116,95,49,57,95,105,108,108,105,113,97,0), String.fromCharCode(117,95,55,49,95,106,115,111,110,114,112,99,0)];
         plusH = `${parseInt(`${fastforwardC}`) | 2}`;
         rewardl *= parseFloat(`${3}`);
         moviesX.push(moviesX.length);
      for (let j = 0; j < 3; j++) {
          let unreadW: Map<any, any> = new Map([[String.fromCharCode(101,95,56,50,95,113,105,110,100,101,120,0),723], [String.fromCharCode(115,116,101,112,115,95,102,95,56,55,0),221], [String.fromCharCode(109,95,56,56,95,118,101,114,105,102,105,101,100,0),193]]);
          let dplusj = true;
         i_managerv += `${plusH.length % (Math.max(6, singlea.length))}`;
         unreadW.set(`${dplusj}`, 2 << (Math.min(4, Math.abs(unreadW.size))));
      }
      notificationG -= (parseFloat(`${parseInt(`${private_1a}`) + (memberships ? 1 : 1)}`));
      break;
   }
   let pointK = gmailV ? !gmailV : gmailV;
   do {
      gmailV = (64 == ((!gmailV ? gradleQ.length : 64) ^ gradleQ.length));
      if (pointK) {
         break;
      }
   } while (pointK && (memberships));
       let promotionD = false;
       let activityQ = true;
      while (!promotionD) {
          let styleq = String.fromCharCode(109,111,110,111,95,122,95,56,53,0);
          let ball0: Array<any> = [76, 850];
          let coreM = 4;
          let left4 = String.fromCharCode(114,101,99,104,117,110,107,95,120,95,52,51,0);
         activityQ = (!promotionD ? !activityQ : promotionD);
         styleq = `${styleq.length + 1}`;
         ball0.push(styleq.length * ball0.length);
         coreM ^= 1 / (Math.max(1, coreM));
         left4 += `${left4.length + coreM}`;
         break;
      }
      if (promotionD) {
         promotionD = !activityQ;
      }
         activityQ = (promotionD ? activityQ : !promotionD);
          let reportx = 3.0;
          let pages = 2;
         activityQ = reportx >= 66.52;
         reportx -= pages / 1;
         pages ^= pages % (Math.max(1, 5));
         promotionD = !activityQ;
       let pingJ: Array<any> = [955, 477];
       let blacklist_: Array<any> = [135, 787];
      reportH = [((promotionD ? 2 : 4) << (Math.min(4, Math.abs(1))))];
   if (2.65 >= (private_1a - parseFloat(`${indext.length}`))) {
       let editm: Array<any> = [726, 822, 614];
       let ewardedk = String.fromCharCode(108,105,115,116,105,110,103,115,95,119,95,51,56,0);
       let readD: Array<any> = [660, 796];
       let reminderx: Array<any> = [436, 526, 485];
         readD.push(reminderx.length);
       let buffere = 1.0;
         ewardedk += "3";
         editm.push(reminderx.length);
      for (let l = 0; l < 2; l++) {
          let tailX = String.fromCharCode(97,98,108,101,95,106,95,52,56,0);
          let moonf = String.fromCharCode(98,108,111,99,107,101,100,95,114,95,49,52,0);
          let anythinkW = String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,102,95,51,50,0);
         reminderx = [readD.length >> (Math.min(Math.abs(3), 2))];
         tailX = `${1 - moonf.length}`;
         moonf = `${tailX.length}`;
         anythinkW += `${anythinkW.length / (Math.max(2, 10))}`;
      }
      while ((3.23 - buffere) > 1.85 || 3.23 > (reminderx.length - buffere)) {
         reminderx = [reminderx.length % 3];
         break;
      }
         ewardedk = `${ewardedk.length ^ readD.length}`;
      while (buffere <= 1.91) {
          let detailA = 2.0;
          let targetK = 2;
          let appleY = true;
          let index7 = String.fromCharCode(106,95,55,51,95,101,120,101,99,117,116,101,0);
         editm = [ewardedk.length + 3];
         detailA *= targetK << (Math.min(Math.abs(parseInt(`${detailA}`)), 2));
         targetK %= Math.max(2 & parseInt(`${detailA}`), 1);
         appleY = detailA == 8.100;
         index7 = `${((appleY ? 3 : 1) ^ index7.length)}`;
         break;
      }
         buffere /= Math.max(ewardedk.length ^ 3, 2);
         readD.push(readD.length & 2);
      if ((buffere / (Math.max(3, editm.length))) <= 2.47) {
         buffere /= Math.max(ewardedk.length, 2);
      }
          let hoverf: Array<any> = [98, 576, 792];
         ewardedk = `${ewardedk.length}`;
         hoverf = [1];
      indext += `${readD.length}`;
   }
      indext = `${indext.length}`;
      

      gradleQ.push(nterstitialn.length - 3);
       let referrern = String.fromCharCode(103,95,56,95,110,100,111,116,115,0);
       let mbbidk = String.fromCharCode(108,105,98,97,111,109,95,119,95,57,48,0);
      for (let t = 0; t < 1; t++) {
          let eactE = 1;
          let bodanw = String.fromCharCode(114,95,56,57,95,100,114,97,105,110,0);
         mbbidk = `${mbbidk.length}`;
         eactE += eactE + 2;
         bodanw = `${bodanw.length | 3}`;
      }
         referrern += `${(String.fromCharCode(54,0) == referrern ? referrern.length : mbbidk.length)}`;
         mbbidk += `${referrern.length & 2}`;
      while (mbbidk.length <= 1) {
         mbbidk = `${(referrern == String.fromCharCode(87,0) ? mbbidk.length : referrern.length)}`;
         break;
      }
      let episodest = 5887571 <= referrern.length;
      do {
         referrern = `${referrern.length / (Math.max(mbbidk.length, 6))}`;
         if (episodest) {
            break;
         }
      } while ((mbbidk == referrern) && episodest);
         referrern += `${3 >> (Math.min(4, mbbidk.length))}`;
      controlsE = (32 >= (bottomO.length & (controlsE ? 32 : bottomO.length)));
   while (selecti) {
      selecti = controlsE && memberships;
      break;
   }
      indext += `${gradleQ.length}`;
   if (!gmailV) {
      nterstitialn += `${((selecti ? 2 : 2) - 2)}`;
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
            source={require('@static/images/componentModity.png')}
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
            source={require('@static/images/fillDownloader.png')}
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
                              source={require('@static/images/toponTerms.gif')}
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
