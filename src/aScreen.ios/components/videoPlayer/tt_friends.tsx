import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControlsMin from './tt_videojs_clear';
import BottomControlsMin from './tt_statistics';
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
       let homes = 1.0;
    let policye = 1;
    let shareb = 4;
    let recommendationw = 3.0;
    let clear1 = String.fromCharCode(97,99,116,105,118,97,116,101,95,112,95,53,48,0);
    let fieldO = false;
    let sideM = String.fromCharCode(118,95,54,51,95,112,114,107,0);
    let constants7 = false;
    let sheet6 = 3.0;
    let targetM = String.fromCharCode(97,95,50,52,0);
    let adultR: Map<any, any> = new Map([[String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,105,95,57,51,0),true ], [String.fromCharCode(116,95,57,48,95,103,101,116,98,121,116,101,0),true ]]);
    let productH = false;
      constants7 = (adultR.size / (Math.max(clear1.length, 5))) == 99;
   let ynewinterstitialx = sideM.length <= 8277901;
   do {
       let gmail1 = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,101,95,55,56,0);
       let hongkongb = String.fromCharCode(108,95,49,48,48,95,119,114,105,116,101,114,0);
          let shootQ = 4.0;
          let register_1N: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,112,101,100,95,112,95,50,54,0),594], [String.fromCharCode(100,95,53,95,99,114,99,99,0),604], [String.fromCharCode(111,118,101,114,108,97,121,95,99,95,56,55,0),537]]);
          let anytimeA = 1;
         hongkongb = `${anytimeA & 3}`;
         shootQ *= parseInt(`${shootQ}`);
         register_1N = new Map([[`${register_1N.size}`, 2]]);
         anytimeA /= Math.max(4, parseInt(`${shootQ}`));
       let blackn = String.fromCharCode(110,95,49,48,48,95,105,114,99,97,109,0);
       let unselectedl = String.fromCharCode(101,101,112,95,49,95,57,49,0);
      while (!gmail1.startsWith(unselectedl)) {
         gmail1 = "2";
         break;
      }
      for (let l = 0; l < 1; l++) {
         blackn += `${(String.fromCharCode(110,0) == unselectedl ? unselectedl.length : blackn.length)}`;
      }
      let dplusZ = hongkongb == String.fromCharCode(114,120,99,52,104,49,95,0);
      do {
          let time_mW = String.fromCharCode(103,95,50,50,95,103,101,116,109,0);
          let materialN = String.fromCharCode(107,95,55,95,106,97,99,111,98,105,0);
          let rcopy_ih: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,117,112,112,95,48,95,54,56,0),642], [String.fromCharCode(108,115,102,108,115,112,95,109,95,57,50,0),942]]);
          let stringx = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,97,95,50,48,0);
         hongkongb = `${2 - hongkongb.length}`;
         time_mW = `${stringx.length}`;
         materialN += `${(String.fromCharCode(75,0) == stringx ? stringx.length : time_mW.length)}`;
         rcopy_ih = new Map([[`${rcopy_ih.size}`, rcopy_ih.size]]);
         if (dplusZ) {
            break;
         }
      } while (dplusZ && (5 == blackn.length));
         blackn = `${hongkongb.length}`;
      sideM += `${parseInt(`${recommendationw}`) - hongkongb.length}`;
      if (ynewinterstitialx) {
         break;
      }
   } while ((sideM.length >= 1) && ynewinterstitialx);
       let drags = 1.0;
       let mode7: Array<any> = [155, 360, 48];
         drags += 1 - parseInt(`${drags}`);
          let splashl = 2;
          let b_title8: Map<any, any> = new Map([[String.fromCharCode(105,110,97,99,116,105,118,101,95,48,95,57,52,0),true ], [String.fromCharCode(99,111,110,100,117,99,116,111,114,95,57,95,49,50,0),false ], [String.fromCharCode(106,95,51,49,0),false ]]);
          let recommendationq = String.fromCharCode(116,95,57,95,114,101,97,100,101,114,0);
         mode7 = [recommendationq.length & parseInt(`${drags}`)];
         splashl &= b_title8.size * 3;
         b_title8.set(`${splashl}`, splashl / (Math.max(5, b_title8.size)));
         recommendationq += `${splashl}`;
          let helperZ = 4;
          let dycreator5 = 5.0;
         mode7.push(1 & mode7.length);
         helperZ <<= Math.min(5, Math.abs(parseInt(`${dycreator5}`) << (Math.min(4, Math.abs(1)))));
         dycreator5 -= 2;
      let guideb = drags <= 7472267.0;
      do {
         drags -= 2 + mode7.length;
         if (guideb) {
            break;
         }
      } while ((drags <= mode7.length) && guideb);
      let albumW = drags >= 8290289.0;
      do {
         drags /= Math.max(3, 1);
         if (albumW) {
            break;
         }
      } while ((!mode7.includes(drags)) && albumW);
         mode7.push(3 - mode7.length);
      homes -= 2 | sideM.length;
   let dcopy_v_6 = 6278250 >= sideM.length;
   do {
      sideM += `${(2 << (Math.min(1, Math.abs((constants7 ? 4 : 1)))))}`;
      if (dcopy_v_6) {
         break;
      }
   } while (dcopy_v_6 && (4 > (sideM.length | shareb) || (4 | shareb) > 3));
   if ((targetM.length + recommendationw) > 4.32 && 1 > (targetM.length + parseInt(`${recommendationw}`))) {
      recommendationw *= 2;
   }
      homes -= parseInt(`${sheet6}`) / 3;
      homes /= Math.max(4, 3);
   while (!constants7 || 3.64 < (5.28 * recommendationw)) {
      constants7 = 53 >= adultR.size;
      break;
   }
   if (sheet6 <= 4.44) {
      sheet6 += parseInt(`${sheet6}`) * parseInt(`${homes}`);
   }
   while (constants7 && sideM.length > 3) {
      sideM = `${((constants7 ? 3 : 3) << (Math.min(Math.abs(parseInt(`${homes}`)), 1)))}`;
      break;
   }
   for (let k = 0; k < 3; k++) {
      sideM = `${1 * parseInt(`${sheet6}`)}`;
   }
       let collectionY = 3.0;
         collectionY /= Math.max(2, parseFloat(`${parseInt(`${collectionY}`) - parseInt(`${collectionY}`)}`));
         collectionY /= Math.max(5, parseFloat(`${parseInt(`${collectionY}`)}`));
         collectionY *= parseFloat(`${parseInt(`${collectionY}`) & parseInt(`${collectionY}`)}`);
      policye -= targetM.length * 3;
      clear1 += "2";
       let videoV: Array<any> = [305, 350];
       let condensedO: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,110,97,103,101,100,95,112,95,57,0),false ], [String.fromCharCode(115,105,110,103,108,101,95,54,95,51,56,0),true ]]);
       let username1: Map<any, any> = new Map([[String.fromCharCode(98,95,53,54,95,115,119,114,0),559], [String.fromCharCode(103,97,105,110,99,95,103,95,54,51,0),50], [String.fromCharCode(122,95,50,54,95,103,100,115,112,0),768]]);
      if (username1.size == condensedO.size) {
         condensedO = new Map([[`${username1.size}`, username1.size * 2]]);
      }
      while ((4 ^ condensedO.size) > 5 && (condensedO.size ^ 4) > 4) {
         condensedO = new Map([[`${condensedO.size}`, condensedO.size]]);
         break;
      }
      if ((videoV.length / 1) >= 3 || (condensedO.size / (Math.max(9, videoV.length))) >= 1) {
         condensedO.set(`${username1.size}`, username1.size << (Math.min(Math.abs(1), 2)));
      }
      if (1 < (4 / (Math.max(8, username1.size)))) {
         condensedO.set(`${videoV.length}`, videoV.length);
      }
         videoV.push(videoV.length << (Math.min(3, Math.abs(condensedO.size))));
      if (1 <= (condensedO.size + videoV.length) || (condensedO.size + 1) <= 3) {
         videoV = [3 + username1.size];
      }
         username1.set(`${videoV.length}`, condensedO.size);
       let read9 = false;
       let appsJ = false;
      let spinnerA = 9836948 <= condensedO.size;
      do {
         condensedO = new Map([[`${username1.size}`, 3]]);
         if (spinnerA) {
            break;
         }
      } while ((5 == (condensedO.size + 3)) && spinnerA);
      homes += parseInt(`${sheet6}`) | parseInt(`${recommendationw}`);
       let previewh = 1.0;
       let temperatureh: Map<any, any> = new Map([[String.fromCharCode(115,101,108,102,95,53,95,50,51,0),684], [String.fromCharCode(120,95,55,54,95,114,116,112,112,114,111,116,111,0),810], [String.fromCharCode(109,95,49,50,95,114,101,97,100,99,98,0),859]]);
         previewh -= 2;
         previewh *= 3;
      for (let e = 0; e < 1; e++) {
         previewh *= temperatureh.size;
      }
      if (1.1 <= (previewh + 5.96)) {
         previewh -= parseInt(`${previewh}`);
      }
       let interstitialM: Array<any> = [162, 970, 718];
          let darkw: Array<any> = [916, 246];
         previewh -= 2;
         darkw.push(3 | darkw.length);
      clear1 += `${adultR.size}`;
       let langkeyK = 2.0;
       let actions0 = String.fromCharCode(109,97,99,114,111,95,104,95,53,54,0);
       let long_kO = true;
       let calendarg = 0.0;
         langkeyK /= Math.max(parseInt(`${langkeyK}`) % (Math.max(actions0.length, 5)), 5);
         calendarg *= (parseFloat(`${(long_kO ? 1 : 5) - parseInt(`${langkeyK}`)}`));
          let skipr = true;
         actions0 += "3";
         skipr = !skipr;
         calendarg *= parseFloat(`${3 - actions0.length}`);
          let dycreator7 = String.fromCharCode(97,108,108,101,116,95,114,95,53,54,0);
          let anythinkA = 5.0;
          let goalK = String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,55,95,57,50,0);
         actions0 += "3";
         dycreator7 = `${parseInt(`${anythinkA}`) & goalK.length}`;
         anythinkA -= parseInt(`${anythinkA}`) % (Math.max(goalK.length, 2));
         calendarg *= parseFloat(`${parseInt(`${langkeyK}`)}`);
       let privilegeC = true;
      if (!long_kO && !privilegeC) {
         privilegeC = String.fromCharCode(111,0) == actions0 && langkeyK == 46.53;
      }
      adultR = new Map([[`${policye}`, policye]]);
      shareb -= 1;
       let homes8 = 1;
       let checkboxR = 3.0;
      if (5 == (4 | homes8) || 4 == (4 >> (Math.min(5, Math.abs(homes8))))) {
         checkboxR /= Math.max(parseFloat(`${1}`), 1);
      }
      while (homes8 >= 5) {
          let renewr = 5;
          let modeB: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,97,118,97,116,97,114,115,0),true ], [String.fromCharCode(104,95,57,55,95,101,110,99,111,100,101,100,102,114,97,109,101,0),false ], [String.fromCharCode(110,95,53,95,99,111,110,110,101,99,116,111,114,0),true ]]);
          let completeH = String.fromCharCode(114,101,110,97,109,101,95,112,95,54,48,0);
          let forwardj = String.fromCharCode(103,95,54,57,95,115,104,97,107,105,110,103,0);
         checkboxR /= Math.max(parseFloat(`${homes8}`), 5);
         renewr *= (String.fromCharCode(51,0) == completeH ? completeH.length : modeB.size);
         modeB = new Map([[forwardj, forwardj.length]]);
         break;
      }
      for (let a = 0; a < 3; a++) {
         homes8 <<= Math.min(Math.abs(parseInt(`${checkboxR}`)), 3);
      }
         homes8 -= parseInt(`${checkboxR}`);
         checkboxR /= Math.max(parseFloat(`${1 / (Math.max(8, parseInt(`${checkboxR}`)))}`), 1);
         homes8 >>= Math.min(2, Math.abs(parseInt(`${checkboxR}`) + 1));
      homes /= Math.max(2, parseInt(`${sheet6}`) + 3);
      recommendationw /= Math.max(4, sideM.length << (Math.min(1, Math.abs(policye))));
   while (3.43 < (3.6 * sheet6)) {
       let condensedu = String.fromCharCode(97,95,51,55,95,98,117,102,102,101,114,101,100,0);
       let referrerP: Map<any, any> = new Map([[String.fromCharCode(109,102,104,100,95,106,95,55,50,0),String.fromCharCode(102,95,57,52,95,117,110,114,101,102,0)], [String.fromCharCode(119,95,50,55,95,106,112,101,103,108,115,0),String.fromCharCode(104,95,50,57,95,112,97,114,116,121,0)]]);
       let dice1 = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,114,95,56,56,0);
         condensedu = `${(condensedu == String.fromCharCode(50,0) ? referrerP.size : condensedu.length)}`;
      for (let q = 0; q < 1; q++) {
          let productV = 3.0;
          let historyL = String.fromCharCode(99,111,115,113,105,95,55,95,49,56,0);
          let reducerS = 5.0;
          let n_player0: Array<any> = [456, 126, 868];
          let feedback6: Map<any, any> = new Map([[String.fromCharCode(101,109,97,105,108,95,57,95,53,52,0),String.fromCharCode(115,97,118,105,110,103,115,95,55,95,54,51,0)], [String.fromCharCode(111,95,53,50,95,106,117,115,116,0),String.fromCharCode(100,95,57,57,95,110,111,97,108,108,111,99,0)], [String.fromCharCode(112,111,115,115,105,98,108,121,95,102,95,49,56,0),String.fromCharCode(103,117,116,116,101,114,95,101,95,55,51,0)]]);
         condensedu += "2";
         productV /= Math.max(1, (parseFloat(`${historyL == String.fromCharCode(122,0) ? historyL.length : parseInt(`${reducerS}`)}`)));
         reducerS /= Math.max(parseInt(`${productV}`) * 1, 3);
         n_player0.push(feedback6.size * 2);
         feedback6 = new Map([[`${productV}`, parseInt(`${reducerS}`)]]);
      }
      let goalw = String.fromCharCode(52,119,52,104,120,112,110,53,118,103,0) == dice1;
      do {
         dice1 = `${dice1.length}`;
         if (goalw) {
            break;
         }
      } while (goalw && (referrerP.size <= dice1.length));
         referrerP.set(dice1, referrerP.size);
      for (let y = 0; y < 2; y++) {
         referrerP.set(condensedu, (String.fromCharCode(71,0) == condensedu ? condensedu.length : referrerP.size));
      }
      while (dice1.endsWith(`${referrerP.size}`)) {
         referrerP.set(dice1, dice1.length << (Math.min(Math.abs(3), 1)));
         break;
      }
         condensedu += `${condensedu.length * 2}`;
      while ((3 >> (Math.min(1, Math.abs(referrerP.size)))) < 2 && (referrerP.size >> (Math.min(condensedu.length, 3))) < 3) {
         referrerP.set(dice1, referrerP.size ^ dice1.length);
         break;
      }
          let mode5 = 0.0;
         dice1 = `${condensedu.length ^ dice1.length}`;
         mode5 /= Math.max(parseInt(`${mode5}`), 2);
      sheet6 -= (clear1 == String.fromCharCode(54,0) ? clear1.length : dice1.length);
      break;
   }
   while (2.24 == (homes * 5.31) && (5.31 * homes) == 4.88) {
       let shirtx = String.fromCharCode(99,97,99,97,95,121,95,50,54,0);
       let referrer0: Map<any, any> = new Map([[String.fromCharCode(112,114,97,112,97,114,101,95,56,95,56,56,0),235], [String.fromCharCode(100,95,52,55,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0),398]]);
       let macauz: Array<any> = [189, 314, 677];
      if (1 >= macauz.length) {
         macauz.push((String.fromCharCode(70,0) == shirtx ? referrer0.size : shirtx.length));
      }
         macauz = [macauz.length];
      if (referrer0.size <= 2) {
          let sinaV: Map<any, any> = new Map([[String.fromCharCode(117,110,99,104,101,99,107,101,100,95,121,95,53,48,0),355], [String.fromCharCode(102,101,116,99,104,95,55,95,56,52,0),606]]);
          let minimizeb = 1;
          let starp: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,48,95,115,117,98,116,114,97,99,116,0),false ], [String.fromCharCode(105,95,51,95,99,100,110,0),true ]]);
         referrer0.set(`${referrer0.size}`, referrer0.size);
         sinaV.set(`${minimizeb}`, 3);
         minimizeb <<= Math.min(Math.abs(minimizeb ^ 1), 3);
         starp.set(`${minimizeb}`, 3);
      }
      let whistleY = 7629868 >= referrer0.size;
      do {
          let sheetD = String.fromCharCode(100,95,54,48,95,100,101,114,105,118,101,0);
          let helperE = 5;
          let listu: Map<any, any> = new Map([[String.fromCharCode(105,111,101,114,114,95,121,95,57,52,0),38], [String.fromCharCode(98,97,108,97,110,99,101,115,95,55,95,50,51,0),36], [String.fromCharCode(113,95,51,54,95,116,114,97,110,115,112,97,114,101,110,99,121,0),874]]);
          let actions6 = 4;
          let rewardk = String.fromCharCode(104,119,97,99,99,101,108,95,113,95,52,48,0);
         referrer0 = new Map([[`${listu.size}`, sheetD.length * listu.size]]);
         sheetD += `${actions6 & helperE}`;
         helperE %= Math.max(1, rewardk.length << (Math.min(Math.abs(2), 5)));
         actions6 *= rewardk.length;
         if (whistleY) {
            break;
         }
      } while (((shirtx.length + referrer0.size) <= 4) && whistleY);
         shirtx += `${referrer0.size * shirtx.length}`;
         referrer0 = new Map([[`${referrer0.size}`, referrer0.size]]);
          let fileQ = 4.0;
         macauz.push(1);
         fileQ *= parseInt(`${fileQ}`);
         shirtx = `${referrer0.size}`;
      let appleQ = 6515325 >= shirtx.length;
      do {
         shirtx = "3";
         if (appleQ) {
            break;
         }
      } while (appleQ && ((shirtx.length + 4) > 2 || 4 > (shirtx.length + referrer0.size)));
      recommendationw *= referrer0.size + policye;
      break;
   }
   let confirmationi = 6585590.0 >= sheet6;
   do {
      sheet6 /= Math.max(parseInt(`${homes}`) / 1, 1);
      if (confirmationi) {
         break;
      }
   } while ((4.53 <= (4.59 - sheet6) && !fieldO) && confirmationi);
       let listN = String.fromCharCode(108,105,115,116,101,110,95,97,95,54,0);
       let modityj = 0;
      while (3 <= (modityj | 1) || 3 <= (1 | listN.length)) {
          let pressureY = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,51,95,57,54,0);
          let heartz = false;
          let events: Array<any> = [371, 123, 516];
         listN += `${events.length ^ pressureY.length}`;
         pressureY += "3";
         break;
      }
          let rules3 = 4.0;
          let macauq: Map<any, any> = new Map([[String.fromCharCode(105,103,110,101,116,116,101,95,48,95,57,56,0),664], [String.fromCharCode(121,101,97,114,95,54,95,50,54,0),62]]);
         modityj /= Math.max(3, parseInt(`${rules3}`) - modityj);
         rules3 *= macauq.size;
         macauq = new Map([[`${macauq.size}`, macauq.size]]);
      let viewerN = modityj <= 9592282;
      do {
          let zhuboj = String.fromCharCode(106,95,53,53,0);
          let update_hyR: Array<any> = [654, 25, 490];
          let roboto0 = 2.0;
          let collectionq: Map<any, any> = new Map([[String.fromCharCode(109,101,110,117,115,95,107,95,49,52,0),726], [String.fromCharCode(102,105,114,115,116,108,121,95,52,95,56,53,0),214], [String.fromCharCode(115,100,97,108,108,111,99,120,95,48,95,56,0),632]]);
         modityj &= 2 + update_hyR.length;
         zhuboj = `${zhuboj.length}`;
         update_hyR = [collectionq.size | zhuboj.length];
         roboto0 += parseFloat(`${parseInt(`${roboto0}`)}`);
         collectionq.set(`${roboto0}`, 1 + collectionq.size);
         if (viewerN) {
            break;
         }
      } while ((5 < (modityj * 4)) && viewerN);
          let resultP = 2;
         modityj &= (String.fromCharCode(85,0) == listN ? listN.length : resultP);
      if (listN.length > 5) {
         listN = `${listN.length}`;
      }
         listN += `${modityj - 3}`;
      sheet6 += parseInt(`${homes}`) | 1;
   while (productH) {
      productH = String.fromCharCode(87,0) == clear1;
      break;
   }
   if (clear1.length == targetM.length) {
       let bnewsQ = String.fromCharCode(112,95,57,52,95,103,97,109,117,116,115,0);
       let albuml = String.fromCharCode(116,95,55,51,0);
       let o_unlockf = 0.0;
       let stringsv: Map<any, any> = new Map([[String.fromCharCode(112,111,119,101,114,101,100,95,102,95,51,54,0),false ], [String.fromCharCode(119,101,108,115,95,52,95,55,55,0),true ], [String.fromCharCode(119,104,105,116,101,115,95,55,95,51,50,0),true ]]);
       let huaweiv = String.fromCharCode(105,100,101,116,95,51,95,49,54,0);
      for (let c = 0; c < 3; c++) {
         albuml = `${stringsv.size >> (Math.min(albuml.length, 4))}`;
      }
      for (let o = 0; o < 3; o++) {
         o_unlockf /= Math.max(parseFloat(`${3}`), 5);
      }
      let debugT = huaweiv.length >= 8269399;
      do {
         huaweiv += `${1 ^ stringsv.size}`;
         if (debugT) {
            break;
         }
      } while ((2 >= (huaweiv.length + parseInt(`${o_unlockf}`)) && (parseInt(`${o_unlockf}`) + huaweiv.length) >= 2) && debugT);
         albuml = `${(String.fromCharCode(48,0) == huaweiv ? huaweiv.length : stringsv.size)}`;
         huaweiv = "3";
         huaweiv = "3";
          let combined7 = false;
          let str8 = String.fromCharCode(113,95,51,52,95,119,97,105,116,101,114,0);
         huaweiv = `${parseInt(`${o_unlockf}`) | stringsv.size}`;
         combined7 = !combined7;
         str8 = `${str8.length}`;
         albuml += `${huaweiv.length}`;
          let securityI = String.fromCharCode(102,95,57,51,95,109,112,101,103,117,116,105,108,115,0);
          let g_managerb: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,95,50,95,55,50,0),873], [String.fromCharCode(110,115,112,97,99,101,115,95,119,95,49,54,0),219], [String.fromCharCode(111,95,57,57,95,105,109,112,114,101,115,115,105,111,110,0),157]]);
         albuml += `${3 - albuml.length}`;
         securityI = "2";
         g_managerb = new Map([[`${g_managerb.size}`, 3]]);
      for (let a = 0; a < 2; a++) {
         bnewsQ += `${stringsv.size & parseInt(`${o_unlockf}`)}`;
      }
      for (let p = 0; p < 1; p++) {
         stringsv = new Map([[`${stringsv.size}`, 2 * bnewsQ.length]]);
      }
      if (4 >= (huaweiv.length / (Math.max(3, 7)))) {
          let overr = true;
          let loadinge = false;
          let modityJ = 5.0;
          let libcrashsdk2: Map<any, any> = new Map([[String.fromCharCode(120,95,53,52,95,100,101,99,101,108,101,114,97,116,101,100,0),String.fromCharCode(110,111,115,99,97,108,101,95,104,95,54,55,0)], [String.fromCharCode(113,95,54,50,95,108,115,112,112,111,108,121,102,0),String.fromCharCode(101,95,51,52,95,117,110,116,114,97,99,107,0)]]);
          let logoutd = String.fromCharCode(115,113,117,101,101,122,101,95,116,95,49,51,0);
         stringsv = new Map([[`${modityJ}`, parseInt(`${o_unlockf}`) >> (Math.min(3, Math.abs(3)))]]);
         overr = loadinge || libcrashsdk2.size <= 50;
         loadinge = (3 > ((!loadinge ? 3 : logoutd.length) << (Math.min(logoutd.length, 3))));
         modityJ -= libcrashsdk2.size;
      }
      while ((3 + parseInt(`${o_unlockf}`)) == 3 || (parseInt(`${o_unlockf}`) + bnewsQ.length) == 3) {
         bnewsQ += `${2 ^ stringsv.size}`;
         break;
      }
      while (albuml != String.fromCharCode(118,0)) {
         huaweiv = "2";
         break;
      }
         albuml = `${stringsv.size & bnewsQ.length}`;
      targetM = `${(clear1 == String.fromCharCode(82,0) ? clear1.length : targetM.length)}`;
   }
   while ((policye << (Math.min(Math.abs(shareb), 2))) >= 1) {
      shareb ^= shareb + 1;
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
       let unselectedi = 1;
    let ranka = 1.0;
    let detailL = String.fromCharCode(105,95,56,51,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
    let becomeg: Array<any> = [528, 971, 783];
    let componentF = String.fromCharCode(116,114,97,105,108,95,56,95,57,0);
    let eventT: Array<any> = [String.fromCharCode(98,95,55,95,99,104,97,115,101,0), String.fromCharCode(109,101,97,110,95,56,95,50,55,0)];
    let footballC = String.fromCharCode(99,111,110,100,105,116,105,111,110,95,107,95,57,53,0);
   for (let r = 0; r < 1; r++) {
       let greyv = 4.0;
       let sellO: Array<any> = [896, 741, 456];
       let suggestionq = 5.0;
         greyv += parseInt(`${greyv}`);
      if (2.75 <= suggestionq) {
         sellO = [sellO.length];
      }
          let darkV = 4;
         greyv += 2;
         darkV &= 3 + darkV;
      for (let w = 0; w < 3; w++) {
         greyv -= sellO.length - 1;
      }
      let indicatorK = 9397726 <= sellO.length;
      do {
         sellO = [sellO.length];
         if (indicatorK) {
            break;
         }
      } while (((suggestionq * 3.63) < 2.3 || 5 < (sellO.length * parseInt(`${suggestionq}`))) && indicatorK);
          let target1: Array<any> = [551, 75, 71];
          let feedback3 = 5;
         sellO = [target1.length];
         target1 = [2 + feedback3];
         feedback3 /= Math.max(4, feedback3 / 3);
          let station6 = 3.0;
          let apple_: Array<any> = [76, 363];
         greyv /= Math.max(1, sellO.length * parseInt(`${suggestionq}`));
         station6 /= Math.max(2, apple_.length);
         apple_.push(parseInt(`${station6}`) / (Math.max(apple_.length, 6)));
       let types_ = 2.0;
       let halfR = 0.0;
      while (1.4 < greyv) {
         halfR /= Math.max(1, 3);
         break;
      }
      componentF = `${sellO.length & 1}`;
   }
      eventT = [2 + unselectedi];
   for (let k = 0; k < 1; k++) {
       let successo = 0.0;
       let long_em = 4.0;
       let savej = true;
       let searchbarf = String.fromCharCode(100,95,53,52,95,111,112,116,105,109,105,122,101,0);
      while ((successo + searchbarf.length) == 2.41 || 2 == (searchbarf.length + parseInt(`${successo}`))) {
          let usernamel: Array<any> = [473, 219, 845];
          let whiteO = false;
          let register_kj = 3.0;
          let rankk = String.fromCharCode(101,95,52,51,95,116,114,97,110,115,102,111,114,109,101,100,0);
         successo += parseInt(`${register_kj}`) << (Math.min(3, Math.abs(1)));
         usernamel.push(usernamel.length % 1);
         whiteO = (rankk.length >> (Math.min(5, usernamel.length))) > 49;
         register_kj /= Math.max((parseFloat(`${(whiteO ? 5 : 2) % (Math.max(rankk.length, 2))}`)), 1);
         break;
      }
         savej = successo < 52.76 || savej;
         successo -= (parseInt(`${long_em}`) & (savej ? 3 : 2));
          let mbridgeF = 1.0;
          let temperaturee = 3.0;
          let reminderR = true;
         savej = 90.76 > long_em;
         mbridgeF /= Math.max((parseFloat(`${(reminderR ? 3 : 5) ^ parseInt(`${mbridgeF}`)}`)), 3);
         temperaturee *= parseInt(`${temperaturee}`) * 3;
         reminderR = !reminderR;
      while ((long_em * 5.92) == 3.35) {
          let emptyf = 5.0;
          let renewJ = String.fromCharCode(114,95,56,56,95,115,116,114,116,111,100,0);
          let casts = 3;
          let activityN = 4.0;
          let taiwan8 = false;
         long_em += (parseFloat(`${renewJ == String.fromCharCode(86,0) ? renewJ.length : parseInt(`${emptyf}`)}`));
         emptyf /= Math.max(5, (parseInt(`${activityN}`) | (taiwan8 ? 3 : 4)));
         casts >>= Math.min(5, Math.abs(3 & parseInt(`${activityN}`)));
         taiwan8 = !taiwan8;
         break;
      }
         searchbarf = `${parseInt(`${successo}`)}`;
          let pausei = 4.0;
         long_em += (parseFloat(`${parseInt(`${long_em}`) - (savej ? 2 : 4)}`));
         pausei -= 3 << (Math.min(Math.abs(parseInt(`${pausei}`)), 2));
         searchbarf += `${searchbarf.length}`;
          let cast2: Map<any, any> = new Map([[String.fromCharCode(109,101,115,104,101,115,95,121,95,56,55,0),237], [String.fromCharCode(109,98,99,110,116,95,52,95,55,55,0),385], [String.fromCharCode(112,114,111,109,112,116,95,104,95,57,55,0),692]]);
          let contextX = 5.0;
          let matchg = String.fromCharCode(107,95,49,53,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0);
         searchbarf += `${cast2.size / (Math.max(1, 3))}`;
         cast2.set(matchg, 2 & parseInt(`${contextX}`));
         contextX += (String.fromCharCode(55,0) == matchg ? matchg.length : parseInt(`${contextX}`));
       let configF = 2;
       let chinasameq = String.fromCharCode(108,95,51,55,95,120,99,111,100,101,0);
         savej = savej && 82.63 < long_em;
      ranka += parseFloat(`${2}`);
   }
   for (let z = 0; z < 2; z++) {
      detailL += `${1 + componentF.length}`;
   }
      becomeg.push(parseInt(`${ranka}`));
   if (detailL.length <= becomeg.length) {
      detailL += `${eventT.length * 3}`;
   }
   while (eventT.length == componentF.length) {
      eventT = [unselectedi & parseInt(`${ranka}`)];
      break;
   }
      ranka *= parseFloat(`${1}`);
   while (componentF.length == 1) {
      detailL = "3";
      break;
   }

    setShowSliderThumbnail(!showSliderThumbnail);

      becomeg = [2];
       let floating8: Map<any, any> = new Map([[String.fromCharCode(114,97,110,103,101,95,120,95,50,0),507], [String.fromCharCode(112,95,55,53,95,114,101,112,101,97,116,0),756]]);
       let sortr = String.fromCharCode(111,95,51,48,95,105,111,115,117,114,102,97,99,101,0);
       let dragr = 2.0;
      for (let s = 0; s < 2; s++) {
          let downloaderd = String.fromCharCode(112,98,108,111,99,107,115,95,48,95,55,53,0);
          let bridgea = String.fromCharCode(108,111,99,105,95,117,95,53,50,0);
          let description_l9: Map<any, any> = new Map([[String.fromCharCode(99,95,56,50,95,99,102,101,110,99,0),511], [String.fromCharCode(112,98,108,111,99,107,115,95,99,95,51,55,0),98], [String.fromCharCode(117,110,108,111,99,107,95,121,95,50,50,0),907]]);
          let termsM = true;
          let interstitialV = String.fromCharCode(109,95,52,50,95,104,111,116,105,122,111,110,116,108,0);
         sortr = "2";
         downloaderd = `${(interstitialV.length | (termsM ? 2 : 5))}`;
         bridgea = `${downloaderd.length}`;
         description_l9.set(`${termsM}`, description_l9.size);
         interstitialV = `${interstitialV.length}`;
      }
      while (2 < (floating8.size >> (Math.min(Math.abs(4), 3))) || 5 < (4 >> (Math.min(3, sortr.length)))) {
          let mbsplashV = String.fromCharCode(99,95,56,51,95,108,97,117,110,99,104,105,110,103,0);
          let infot = 4;
          let less2 = String.fromCharCode(100,95,56,54,95,109,105,99,0);
         sortr = "2";
         mbsplashV += `${(mbsplashV == String.fromCharCode(114,0) ? less2.length : mbsplashV.length)}`;
         infot += less2.length * 1;
         break;
      }
          let canvasl = String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,97,95,52,52,0);
          let renewE = true;
          let overlayb: Map<any, any> = new Map([[String.fromCharCode(97,114,99,104,95,122,95,54,0),String.fromCharCode(99,111,109,112,111,115,101,114,95,50,95,53,57,0)], [String.fromCharCode(99,118,105,100,95,105,95,52,49,0),String.fromCharCode(101,110,116,105,114,101,95,102,95,57,50,0)], [String.fromCharCode(97,108,103,111,114,105,116,104,109,95,120,95,48,0),String.fromCharCode(112,95,49,48,48,95,114,101,112,108,121,0)]]);
         floating8.set(`${dragr}`, 2);
         canvasl += `${(1 + (renewE ? 3 : 3))}`;
         renewE = overlayb.size == 24;
         overlayb = new Map([[`${overlayb.size}`, overlayb.size / (Math.max(1, 2))]]);
      while (4.73 == (1.27 - dragr)) {
         sortr = `${floating8.size | 1}`;
         break;
      }
         sortr = `${floating8.size << (Math.min(2, Math.abs(parseInt(`${dragr}`))))}`;
      if (4 < (floating8.size / (Math.max(5, 10)))) {
         floating8.set(sortr, sortr.length);
      }
      let forwardN = String.fromCharCode(110,101,110,102,112,121,104,51,55,0) == sortr;
      do {
         sortr += `${parseInt(`${dragr}`) >> (Math.min(Math.abs(3), 2))}`;
         if (forwardN) {
            break;
         }
      } while ((3.85 == dragr) && forwardN);
      if ((sortr.length ^ 2) <= 3) {
          let videojsy = 1.0;
          let shared3: Array<any> = [433, 46];
          let assistK = String.fromCharCode(110,95,50,50,95,108,111,97,100,0);
         sortr = `${shared3.length}`;
         videojsy *= parseInt(`${videojsy}`);
         shared3.push((String.fromCharCode(115,0) == assistK ? parseInt(`${videojsy}`) : assistK.length));
      }
         dragr /= Math.max(parseFloat(`${sortr.length + 2}`), 3);
      eventT.push(footballC.length >> (Math.min(3, detailL.length)));
       let logoutM: Map<any, any> = new Map([[String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,118,95,50,52,0),false ], [String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,113,95,55,56,0),true ]]);
       let rankS = 3.0;
      let privilegex = logoutM.size <= 8960660;
      do {
         logoutM.set(`${rankS}`, parseInt(`${rankS}`) + 3);
         if (privilegex) {
            break;
         }
      } while (((5.48 + rankS) >= 1.6 && 5.48 >= (logoutM.size + rankS)) && privilegex);
         rankS += logoutM.size | parseInt(`${rankS}`);
      detailL += `${detailL.length * 2}`;
   let changeD = String.fromCharCode(117,102,48,122,120,121,109,106,107,95,0) == footballC;
   do {
       let historyM = String.fromCharCode(110,95,52,56,95,102,97,116,97,108,0);
         historyM += `${historyM.length}`;
      while (historyM == historyM) {
         historyM = `${historyM.length - 3}`;
         break;
      }
         historyM += `${historyM.length - 1}`;
      footballC += `${becomeg.length - 1}`;
      if (changeD) {
         break;
      }
   } while (changeD && (footballC.length > eventT.length));
      eventT.push(detailL.length);
      eventT = [detailL.length];
      footballC = `${footballC.length & unselectedi}`;
   let untick0 = String.fromCharCode(116,105,99,0) == detailL;
   do {
      detailL = `${1 * componentF.length}`;
      if (untick0) {
         break;
      }
   } while ((5 == (2 - eventT.length) || 2 == (detailL.length - eventT.length)) && untick0);
       let customh: Map<any, any> = new Map([[String.fromCharCode(119,95,56,52,95,100,114,97,103,103,101,100,0),381], [String.fromCharCode(113,95,49,55,95,108,111,99,97,116,105,111,110,115,0),531]]);
       let bodanv: Map<any, any> = new Map([[String.fromCharCode(113,95,51,50,95,110,111,116,105,102,105,101,114,0),413], [String.fromCharCode(112,114,111,109,112,116,95,54,95,54,48,0),344], [String.fromCharCode(110,95,50,56,95,116,97,103,103,101,100,0),610]]);
         bodanv = new Map([[`${bodanv.size}`, 3]]);
      let screen3 = customh.size <= 9712473;
      do {
          let gcopy_j7 = 4.0;
         customh = new Map([[`${customh.size}`, 3 & customh.size]]);
         gcopy_j7 /= Math.max(parseInt(`${gcopy_j7}`), 1);
         if (screen3) {
            break;
         }
      } while ((!Array.from(customh.keys()).includes(`${bodanv.size}`)) && screen3);
          let agreementL = String.fromCharCode(103,114,111,117,110,100,95,119,95,49,54,0);
         bodanv = new Map([[`${bodanv.size}`, bodanv.size / (Math.max(2, agreementL.length))]]);
         bodanv = new Map([[`${bodanv.size}`, customh.size]]);
      let descp = 6258156 >= customh.size;
      do {
         customh.set(`${bodanv.size}`, customh.size);
         if (descp) {
            break;
         }
      } while (descp && (customh.get(`${bodanv.size}`) != null));
       let pause6 = 4;
      detailL = `${footballC.length / 2}`;
    delayControls(!paused);

   while (4 <= (becomeg.length - 1)) {
      detailL += "3";
      break;
   }
       let tickedA = 4.0;
       let calendarT = true;
      if (!calendarT || 3.36 > (tickedA - 1.18)) {
          let notification0: Array<any> = [136, 581];
          let gradlee = true;
          let appsZ = String.fromCharCode(118,95,55,95,115,105,100,101,0);
         tickedA -= parseFloat(`${1}`);
         notification0.push((appsZ == String.fromCharCode(54,0) ? appsZ.length : notification0.length));
         gradlee = appsZ.length <= notification0.length;
      }
          let huaweiE = 0.0;
          let bottomt = String.fromCharCode(113,95,50,51,95,104,101,108,112,101,114,0);
          let away8: Array<any> = [761, 69, 181];
         tickedA += parseFloat(`${parseInt(`${tickedA}`) >> (Math.min(3, Math.abs(3)))}`);
         huaweiE += bottomt.length;
         bottomt = `${away8.length / (Math.max(1, parseInt(`${huaweiE}`)))}`;
         away8.push(3 * parseInt(`${huaweiE}`));
      for (let j = 0; j < 1; j++) {
         tickedA *= parseFloat(`${1 ^ parseInt(`${tickedA}`)}`);
      }
      for (let x = 0; x < 3; x++) {
         calendarT = !calendarT;
      }
      for (let n = 0; n < 2; n++) {
         tickedA -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${tickedA}`)), 2))}`);
      }
          let currenta = 0.0;
          let g_playerB = false;
          let overe = String.fromCharCode(108,95,51,52,95,114,101,112,101,97,116,105,110,103,0);
         calendarT = String.fromCharCode(73,0) == overe || tickedA > 30.70;
         currenta /= Math.max(4, 2 << (Math.min(Math.abs(parseInt(`${currenta}`)), 1)));
         g_playerB = 54.91 < currenta || g_playerB;
         overe = `${2 * parseInt(`${currenta}`)}`;
      becomeg = [eventT.length];
      eventT = [footballC.length << (Math.min(1, eventT.length))];
      footballC = `${1 % (Math.max(1, parseInt(`${ranka}`)))}`;
   for (let n = 0; n < 3; n++) {
       let minimizeI = 0.0;
       let interstitialH: Array<any> = [802, 754, 716];
       let matches9 = String.fromCharCode(100,101,99,105,109,97,116,111,114,95,98,95,57,55,0);
      for (let x = 0; x < 1; x++) {
         interstitialH.push(interstitialH.length);
      }
          let megaphone7 = false;
          let malaysia9 = 3.0;
         interstitialH = [(parseInt(`${minimizeI}`) * (megaphone7 ? 3 : 4))];
         megaphone7 = 92.94 == malaysia9;
         malaysia9 += parseFloat(`${parseInt(`${malaysia9}`)}`);
      for (let y = 0; y < 1; y++) {
         matches9 = `${interstitialH.length << (Math.min(4, Math.abs(parseInt(`${minimizeI}`))))}`;
      }
         minimizeI /= Math.max(3, 2);
         minimizeI *= interstitialH.length / 2;
         minimizeI -= parseInt(`${minimizeI}`);
      while (!matches9.endsWith(`${interstitialH.length}`)) {
          let gradleY = String.fromCharCode(98,108,97,99,107,108,105,115,116,95,112,95,53,50,0);
          let albumG = String.fromCharCode(115,95,56,53,95,101,120,112,114,101,115,115,105,111,110,115,0);
          let greyL = String.fromCharCode(114,105,103,104,116,109,111,115,116,95,97,95,55,53,0);
         interstitialH = [interstitialH.length + 2];
         gradleY += `${greyL.length}`;
         albumG += `${(String.fromCharCode(53,0) == gradleY ? gradleY.length : greyL.length)}`;
         break;
      }
      let fastL = minimizeI >= 9285484.0;
      do {
         minimizeI -= 1 * interstitialH.length;
         if (fastL) {
            break;
         }
      } while (fastL && (4.62 >= (minimizeI + 2.35)));
      for (let g = 0; g < 1; g++) {
         matches9 = `${interstitialH.length}`;
      }
      ranka -= parseFloat(`${eventT.length | 3}`);
   }
      footballC += `${footballC.length}`;
       let update_uk = true;
      let i_lockX = update_uk ? !update_uk : update_uk;
      do {
         update_uk = !update_uk;
         if (i_lockX) {
            break;
         }
      } while ((update_uk) && i_lockX);
         update_uk = (update_uk ? !update_uk : !update_uk);
       let component8 = String.fromCharCode(117,95,57,51,95,97,116,101,120,105,116,0);
       let questF = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,111,95,54,53,0);
      unselectedi <<= Math.min(3, footballC.length);
       let rewardQ = 0.0;
      for (let w = 0; w < 1; w++) {
         rewardQ += parseInt(`${rewardQ}`);
      }
          let emptyU: Array<any> = [153, 667];
         rewardQ -= 1;
         emptyU.push(emptyU.length);
       let footballZ = String.fromCharCode(105,110,100,101,120,101,115,95,57,95,56,52,0);
       let disconnectedw = String.fromCharCode(106,95,49,53,95,115,105,114,105,0);
      unselectedi %= Math.max((String.fromCharCode(71,0) == detailL ? eventT.length : detailL.length), 2);
   if (footballC.includes(detailL)) {
       let weiboc = true;
       let collectionx = String.fromCharCode(98,95,56,54,95,116,120,102,109,0);
       let cornerv = String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,122,95,53,52,0);
       let volumeQ = 3;
       let detailsZ: Array<any> = [966, 694, 720];
      let adulth = 6073590 <= detailsZ.length;
      do {
         detailsZ = [3];
         if (adulth) {
            break;
         }
      } while (adulth && (1 < collectionx.length));
      for (let m = 0; m < 3; m++) {
         volumeQ ^= volumeQ + detailsZ.length;
      }
          let traminiR = String.fromCharCode(100,95,57,50,95,111,110,108,105,110,101,115,0);
         cornerv = `${cornerv.length % 2}`;
         traminiR = `${2 + traminiR.length}`;
         detailsZ = [((weiboc ? 4 : 2))];
          let single0 = String.fromCharCode(99,95,52,53,95,102,109,105,120,0);
          let modelv = 1.0;
         detailsZ.push(single0.length | parseInt(`${modelv}`));
         detailsZ.push(cornerv.length);
         volumeQ ^= detailsZ.length;
       let ticked3: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,54,95,51,50,0),788], [String.fromCharCode(120,120,99,104,95,53,95,56,52,0),449]]);
          let blackC: Map<any, any> = new Map([[String.fromCharCode(97,107,97,114,111,115,95,121,95,54,53,0),24], [String.fromCharCode(99,97,114,101,116,95,56,95,52,54,0),2], [String.fromCharCode(114,117,110,110,105,110,103,95,98,95,49,48,0),623]]);
         ticked3.set(collectionx, (collectionx == String.fromCharCode(54,0) ? cornerv.length : collectionx.length));
         blackC = new Map([[`${blackC.size}`, blackC.size ^ 3]]);
         cornerv += `${ticked3.size >> (Math.min(Math.abs(2), 4))}`;
         weiboc = detailsZ.length >= 88;
       let mbnativeadvancede = 4;
      while (volumeQ >= detailsZ.length) {
          let pageV = 1;
          let fileu = String.fromCharCode(114,101,115,105,122,101,100,95,57,95,49,55,0);
          let routeri = String.fromCharCode(121,95,55,49,95,116,105,100,121,0);
         detailsZ = [cornerv.length | detailsZ.length];
         pageV >>= Math.min(Math.abs(3 << (Math.min(5, routeri.length))), 5);
         fileu = `${pageV * fileu.length}`;
         routeri = `${fileu.length}`;
         break;
      }
      if (!weiboc) {
         weiboc = (collectionx.length >> (Math.min(2, detailsZ.length))) >= 61;
      }
      for (let y = 0; y < 2; y++) {
          let singaporef: Array<any> = [506, 677];
          let descG = 3.0;
          let redirectx = String.fromCharCode(116,95,52,55,95,112,105,120,115,99,111,112,101,0);
         mbnativeadvancede ^= detailsZ.length - ticked3.size;
         singaporef.push(redirectx.length / 1);
         descG *= parseFloat(`${redirectx.length << (Math.min(5, singaporef.length))}`);
      }
      detailL += `${volumeQ + eventT.length}`;
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let bellg = String.fromCharCode(107,95,51,51,95,100,101,108,97,121,115,0);
    let modulej = 2.0;
    let specy: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,111,117,116,95,99,95,49,53,0),339], [String.fromCharCode(121,95,51,95,122,112,98,105,113,117,97,100,115,0),726]]);
    let footballw: Array<any> = [String.fromCharCode(104,95,53,50,95,97,114,109,116,104,0), String.fromCharCode(115,105,109,112,108,101,116,97,103,95,49,95,53,55,0)];
    let main_zD: Map<any, any> = new Map([[String.fromCharCode(122,95,50,50,95,99,104,97,112,0),829], [String.fromCharCode(119,95,53,56,95,100,97,115,104,101,110,99,0),880]]);
    let read1 = true;
    let volume3 = 0;
    let componenti = 3;
    let mbridgef = String.fromCharCode(120,112,116,97,98,108,101,95,122,95,54,0);
   while ((footballw.length % 1) <= 4 && (modulej - 3.3) <= 1.100) {
      modulej *= parseFloat(`${specy.size}`);
      break;
   }
       let shootB: Array<any> = [334, 693, 425];
       let next0 = String.fromCharCode(108,95,51,48,95,110,105,98,98,108,101,0);
       let circleq = String.fromCharCode(99,121,99,108,101,100,95,119,95,54,0);
      for (let c = 0; c < 2; c++) {
          let more1 = String.fromCharCode(110,95,57,57,95,115,116,121,108,0);
          let libcrashsdkn = 0.0;
          let bridgeO = true;
          let frame_qtv = 2.0;
          let xvodq = String.fromCharCode(121,109,105,110,112,117,116,95,102,95,56,49,0);
         next0 = `${1 - more1.length}`;
         more1 = `${2 - parseInt(`${libcrashsdkn}`)}`;
         libcrashsdkn /= Math.max(5, xvodq.length % 1);
         bridgeO = 79.77 > frame_qtv;
         frame_qtv += parseFloat(`${parseInt(`${libcrashsdkn}`) - 1}`);
         xvodq = `${2 / (Math.max(3, parseInt(`${libcrashsdkn}`)))}`;
      }
         next0 += `${shootB.length}`;
         next0 += `${next0.length / (Math.max(circleq.length, 6))}`;
      for (let y = 0; y < 3; y++) {
         shootB = [next0.length];
      }
          let file3 = String.fromCharCode(119,95,55,54,95,114,117,101,0);
          let mbbid0: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,119,95,52,95,53,53,0),String.fromCharCode(103,114,101,121,95,117,95,53,51,0)], [String.fromCharCode(116,95,55,54,95,104,97,108,108,0),String.fromCharCode(114,95,50,53,95,114,101,118,101,114,115,101,100,0)], [String.fromCharCode(105,100,101,110,116,105,102,101,114,95,121,95,55,48,0),String.fromCharCode(99,111,110,97,110,102,105,108,101,95,98,95,51,48,0)]]);
         next0 = `${shootB.length - next0.length}`;
         file3 = `${2 + file3.length}`;
         mbbid0.set(`${file3}`, file3.length);
      if (shootB.length == 5) {
          let dropdownK = 4;
          let launchO = String.fromCharCode(107,109,115,103,114,97,98,95,104,95,52,57,0);
         next0 = `${shootB.length ^ launchO.length}`;
         dropdownK += dropdownK;
         launchO += `${dropdownK >> (Math.min(Math.abs(1), 3))}`;
      }
      let projectt = String.fromCharCode(111,57,112,108,0) == circleq;
      do {
         circleq = `${(String.fromCharCode(104,0) == next0 ? shootB.length : next0.length)}`;
         if (projectt) {
            break;
         }
      } while ((next0.length < 3) && projectt);
      while (circleq != next0) {
          let privilegeo = 2.0;
          let controls4: Array<any> = [26, 724];
         next0 += `${controls4.length / (Math.max(4, parseInt(`${privilegeo}`)))}`;
         break;
      }
       let streaming3 = 1.0;
      volume3 /= Math.max(1, main_zD.size - footballw.length);
      read1 = (volume3 / (Math.max(4, modulej))) < 26;
   if (read1) {
      read1 = footballw.includes(read1);
   }
       let selectedl = 4.0;
       let dice8: Array<any> = [462, 137];
         dice8 = [dice8.length];
         dice8.push(dice8.length);
      for (let u = 0; u < 3; u++) {
          let teame = String.fromCharCode(115,108,111,112,95,105,95,49,55,0);
          let privacyS = 0.0;
         dice8 = [dice8.length << (Math.min(Math.abs(2), 5))];
         teame = `${2 - parseInt(`${privacyS}`)}`;
         privacyS *= parseFloat(`${1}`);
      }
         dice8.push(1 * dice8.length);
      while (dice8.includes(selectedl)) {
         selectedl *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${selectedl}`)), 4))}`);
         break;
      }
      while ((dice8.length - parseInt(`${selectedl}`)) <= 2 || (parseInt(`${selectedl}`) - dice8.length) <= 2) {
         selectedl -= parseFloat(`${dice8.length * 2}`);
         break;
      }
      main_zD.set(`${bellg}`, bellg.length / (Math.max(2, specy.size)));
      main_zD = new Map([[`${specy.size}`, 2 >> (Math.min(3, Math.abs(specy.size)))]]);
      main_zD.set(`${volume3}`, volume3 >> (Math.min(footballw.length, 1)));
       let context4 = String.fromCharCode(107,95,54,56,95,100,101,99,111,100,105,110,103,0);
         context4 = `${(context4 == String.fromCharCode(99,0) ? context4.length : context4.length)}`;
      let heji2 = context4 == String.fromCharCode(116,98,52,113,102,120,48,117,49,110,0);
      do {
          let step_ = false;
          let stats_: Array<any> = [210, 530, 699];
         context4 = `${(1 | (step_ ? 1 : 2))}`;
         step_ = (stats_.length ^ stats_.length) >= 14;
         if (heji2) {
            break;
         }
      } while (heji2 && (context4.length == context4.length));
         context4 += `${context4.length ^ 1}`;
      read1 = 37 <= volume3 && read1;
      main_zD.set(`${modulej}`, parseInt(`${modulej}`));
   if ((main_zD.size & volume3) > 5 || 2 > (5 & volume3)) {
      volume3 >>= Math.min(3, Math.abs(1));
   }
   while (4 <= (volume3 ^ 2) || 5 <= (2 ^ volume3)) {
      volume3 -= main_zD.size | 1;
      break;
   }
   if (read1 || (1 * footballw.length) <= 3) {
      read1 = 44 < volume3;
   }
   let type_sq = 7686993 >= mbridgef.length;
   do {
      mbridgef += `${componenti}`;
      if (type_sq) {
         break;
      }
   } while (type_sq && ((mbridgef.length & 3) >= 4 && 3 >= (mbridgef.length & 3)));
   if (5 <= (2 * mbridgef.length)) {
      mbridgef = `${componenti}`;
   }
      read1 = specy.size >= 4;
      bellg += `${componenti}`;

    onHandleFullScreen();
  };

  const goBack = () => {
       let auto_3gu = 3.0;
    let mbjscommone = String.fromCharCode(99,105,114,99,108,101,115,95,107,95,51,48,0);
    let navigationl = String.fromCharCode(104,95,52,54,95,101,98,117,108,97,115,0);
    let forwardL: Array<any> = [334, 523, 772];
    let unread5: Map<any, any> = new Map([[String.fromCharCode(99,111,99,103,95,119,95,52,50,0),616], [String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,119,95,55,52,0),984]]);
    let rewardC = 5.0;
    let langkeye = 1;
    let y_playerK = String.fromCharCode(100,105,115,116,114,105,99,116,95,97,95,57,50,0);
    let pointu: Map<any, any> = new Map([[String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,103,95,50,51,0),597], [String.fromCharCode(122,95,51,54,95,100,101,112,116,104,0),319]]);
    let themeS = true;
    let guideF = 1.0;
    let searchO: Array<any> = [626, 766, 526];
    let downloaderq = String.fromCharCode(111,95,54,53,95,116,117,110,105,110,103,0);
    let unselectedp = String.fromCharCode(98,95,54,56,95,99,111,109,112,101,110,115,97,116,101,100,0);
      guideF -= parseFloat(`${2}`);
      y_playerK = `${y_playerK.length}`;
   let theme3 = 6507859 <= mbjscommone.length;
   do {
      mbjscommone = `${3 << (Math.min(Math.abs(parseInt(`${rewardC}`)), 1))}`;
      if (theme3) {
         break;
      }
   } while ((3 <= (2 << (Math.min(5, mbjscommone.length))) || (mbjscommone.length - parseInt(`${auto_3gu}`)) <= 2) && theme3);
      searchO = [pointu.size];
   if (5 >= (pointu.size + downloaderq.length) && 5 >= (downloaderq.length + pointu.size)) {
       let selectedu: Array<any> = [String.fromCharCode(101,109,112,116,121,95,117,95,50,51,0), String.fromCharCode(99,111,112,121,95,102,95,55,53,0), String.fromCharCode(112,97,110,110,105,110,103,95,113,95,54,56,0)];
      while ((3 | selectedu.length) <= 5 || 3 <= (selectedu.length | selectedu.length)) {
         selectedu.push(selectedu.length);
         break;
      }
          let sharec = String.fromCharCode(97,99,99,117,114,97,99,121,95,111,95,52,57,0);
          let redirects = 5;
         selectedu.push(sharec.length >> (Math.min(2, Math.abs(redirects))));
         selectedu = [selectedu.length - 2];
      pointu.set(`${selectedu.length}`, forwardL.length * 3);
   }
   for (let s = 0; s < 3; s++) {
      forwardL.push(1 & parseInt(`${rewardC}`));
   }
   let submitw = 5525056 >= pointu.size;
   do {
      pointu = new Map([[y_playerK, y_playerK.length]]);
      if (submitw) {
         break;
      }
   } while ((pointu.size < 2) && submitw);
   let backwardZ = forwardL.length >= 5460037;
   do {
      forwardL.push(downloaderq.length);
      if (backwardZ) {
         break;
      }
   } while ((1 < (pointu.size + 3)) && backwardZ);
       let inactiveq = String.fromCharCode(118,112,120,100,101,99,95,53,95,49,55,0);
       let overlayp = String.fromCharCode(109,95,50,57,95,112,108,105,115,116,0);
         overlayp = `${overlayp.length}`;
      let reactI = String.fromCharCode(101,57,109,105,0) == overlayp;
      do {
         overlayp += `${1 << (Math.min(2, inactiveq.length))}`;
         if (reactI) {
            break;
         }
      } while (reactI && (4 <= inactiveq.length));
         inactiveq += `${(overlayp == String.fromCharCode(105,0) ? overlayp.length : inactiveq.length)}`;
      let stationg = inactiveq == String.fromCharCode(109,116,114,116,0);
      do {
         inactiveq = `${overlayp.length}`;
         if (stationg) {
            break;
         }
      } while (stationg && (!inactiveq.endsWith(`${overlayp.length}`)));
         overlayp += `${1 - inactiveq.length}`;
      let backwardJ = inactiveq == String.fromCharCode(101,55,112,113,102,103,0);
      do {
         inactiveq += `${overlayp.length | inactiveq.length}`;
         if (backwardJ) {
            break;
         }
      } while (backwardJ && (overlayp == inactiveq));
      guideF /= Math.max(parseFloat(`${1 * downloaderq.length}`), 4);
      downloaderq += "3";
       let taiwanl = String.fromCharCode(114,101,115,111,108,118,101,95,57,95,53,55,0);
       let checkboxC = 2;
         checkboxC ^= checkboxC;
      if (3 >= (checkboxC + 4)) {
         taiwanl += `${(String.fromCharCode(102,0) == taiwanl ? taiwanl.length : checkboxC)}`;
      }
      if ((checkboxC & taiwanl.length) < 1 && 1 < (taiwanl.length & checkboxC)) {
          let toponU = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,105,95,53,0);
          let targetf = 4;
         taiwanl = `${checkboxC}`;
         toponU = `${3 % (Math.max(7, toponU.length))}`;
         targetf |= 3 % (Math.max(5, toponU.length));
      }
         taiwanl += `${checkboxC | 1}`;
       let combinedh = String.fromCharCode(120,95,51,50,0);
       let fullM = String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,52,95,51,56,0);
      if (taiwanl.endsWith(`${fullM.length}`)) {
         taiwanl += "2";
      }
      downloaderq = `${y_playerK.length / 1}`;
   while (forwardL.includes(searchO.length)) {
      searchO.push(y_playerK.length);
      break;
   }
      themeS = 25 >= searchO.length && navigationl.length >= 25;
   for (let o = 0; o < 1; o++) {
      mbjscommone = `${searchO.length}`;
   }
      y_playerK = `${pointu.size}`;
      mbjscommone += `${unread5.size >> (Math.min(Math.abs(3), 2))}`;
   let circleb = downloaderq == String.fromCharCode(122,110,116,108,100,104,103,119,121,110,0);
   do {
       let condenseds = false;
       let injuryj = String.fromCharCode(115,112,97,119,110,97,98,108,101,95,56,95,55,51,0);
       let types5 = 1.0;
       let nativeexL: Array<any> = [799, 199, 486];
       let fcopy__Y: Array<any> = [824, 769];
         injuryj += `${fcopy__Y.length}`;
          let gpayI = String.fromCharCode(108,95,55,56,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0);
          let adultF = 2;
          let type_p8x: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,115,105,115,95,55,95,49,0),String.fromCharCode(99,97,110,111,112,117,115,95,119,95,50,53,0)], [String.fromCharCode(103,95,52,57,95,116,114,105,108,105,110,101,97,114,0),String.fromCharCode(121,95,52,49,95,109,109,115,104,0)], [String.fromCharCode(98,95,52,52,95,103,101,116,114,97,110,100,111,109,0),String.fromCharCode(119,95,56,55,95,115,97,118,101,0)]]);
         condenseds = 5 < nativeexL.length;
         gpayI = `${2 >> (Math.min(4, Math.abs(type_p8x.size)))}`;
         adultF <<= Math.min(2, Math.abs(type_p8x.size));
          let fielde = String.fromCharCode(111,95,57,57,95,99,111,110,116,111,117,114,115,0);
          let active6: Map<any, any> = new Map([[String.fromCharCode(99,95,50,54,95,98,121,116,101,115,0),String.fromCharCode(108,111,119,100,101,108,97,121,95,48,95,56,49,0)], [String.fromCharCode(97,95,54,51,95,115,117,99,99,101,115,115,111,114,0),String.fromCharCode(103,100,97,116,97,95,97,95,56,50,0)]]);
          let condensedb = false;
         injuryj = "1";
         fielde += `${fielde.length}`;
         active6.set(fielde, fielde.length);
         condensedb = (((!condensedb ? active6.size : 83) & active6.size) >= 22);
      for (let s = 0; s < 3; s++) {
         fcopy__Y.push(((condenseds ? 1 : 2) - nativeexL.length));
      }
         fcopy__Y = [((condenseds ? 4 : 5))];
          let condensed4 = 4.0;
          let transferT = String.fromCharCode(100,95,52,50,95,115,109,105,108,101,0);
         injuryj += `${fcopy__Y.length - 3}`;
         condensed4 /= Math.max(parseFloat(`${1}`), 5);
         transferT += `${transferT.length ^ 1}`;
      if ((types5 - 5.90) < 3.20) {
         types5 += fcopy__Y.length;
      }
      for (let r = 0; r < 3; r++) {
          let viewso = String.fromCharCode(100,114,111,112,112,101,100,95,55,95,52,52,0);
          let danger5 = true;
         fcopy__Y = [injuryj.length];
         viewso = `${((danger5 ? 5 : 1))}`;
         danger5 = !danger5;
      }
      downloaderq += `${injuryj.length}`;
      if (circleb) {
         break;
      }
   } while ((downloaderq.length < searchO.length) && circleb);
   let greyA = 5028262.0 >= auto_3gu;
   do {
      auto_3gu /= Math.max((langkeye + (themeS ? 3 : 5)), 4);
      if (greyA) {
         break;
      }
   } while ((navigationl.length == parseInt(`${auto_3gu}`)) && greyA);
   if ((guideF - 1.79) == 4.95 || themeS) {
      guideF /= Math.max(2, parseFloat(`${2 | unselectedp.length}`));
   }
       let dragx: Array<any> = [String.fromCharCode(114,101,115,97,109,112,95,107,95,49,51,0), String.fromCharCode(110,111,116,101,115,95,105,95,51,53,0)];
       let manifesta = 1;
       let ewardedO: Array<any> = [224, 836];
      let expandm = 9231991 >= manifesta;
      do {
          let analyticsL = 1;
          let livea = 5.0;
          let clock9 = String.fromCharCode(108,95,54,57,95,116,104,114,101,115,0);
          let membershipH = String.fromCharCode(117,118,108,99,95,54,95,55,48,0);
         manifesta %= Math.max(4, clock9.length);
         analyticsL &= membershipH.length / (Math.max(2, 3));
         livea *= membershipH.length * analyticsL;
         clock9 += "2";
         if (expandm) {
            break;
         }
      } while (expandm && (dragx.includes(manifesta)));
         dragx = [manifesta & ewardedO.length];
         dragx.push(2);
         manifesta -= 1 % (Math.max(3, dragx.length));
         manifesta |= 3;
         ewardedO.push(ewardedO.length + 3);
          let faviconw = String.fromCharCode(109,97,112,95,118,95,55,56,0);
          let u_lockn: Array<any> = [911, 872];
         dragx.push(ewardedO.length * 1);
         faviconw = "1";
         u_lockn = [2];
          let plusC = String.fromCharCode(110,95,55,56,95,100,97,116,101,116,105,109,101,0);
          let countdownp = 4;
          let turnS = 1.0;
         manifesta |= plusC.length / (Math.max(10, parseInt(`${turnS}`)));
         plusC += `${countdownp}`;
         dragx.push(2 & dragx.length);
      themeS = rewardC >= 92.11;

    delayControls();

       let vietnamC = 2;
          let profilei = String.fromCharCode(100,95,49,52,95,104,97,108,102,0);
          let goal3: Map<any, any> = new Map([[String.fromCharCode(117,95,56,48,95,114,101,98,97,108,97,110,99,101,0),931], [String.fromCharCode(114,115,112,95,107,95,54,53,0),811], [String.fromCharCode(99,95,51,57,95,98,111,120,98,108,117,114,0),46]]);
         vietnamC %= Math.max(profilei.length, 1);
         profilei = `${goal3.size}`;
         goal3.set(`${goal3.size}`, 1 ^ goal3.size);
         vietnamC /= Math.max(vietnamC * 3, 4);
       let commentN = String.fromCharCode(111,95,57,48,95,108,101,118,97,114,105,110,116,0);
       let plus0 = String.fromCharCode(105,95,51,48,95,115,98,111,120,0);
      themeS = !themeS || 47.98 <= rewardC;
   let agreementV = String.fromCharCode(51,101,52,107,0) == downloaderq;
   do {
      downloaderq = `${unread5.size}`;
      if (agreementV) {
         break;
      }
   } while (agreementV && (y_playerK != downloaderq));
      unselectedp += `${downloaderq.length + 1}`;
      mbjscommone += `${unread5.size << (Math.min(Math.abs(1), 1))}`;
      forwardL.push(2 << (Math.min(2, Math.abs(parseInt(`${auto_3gu}`)))));
      mbjscommone += "2";
      searchO.push(parseInt(`${guideF}`) * forwardL.length);
       let logoutu = String.fromCharCode(99,95,51,54,95,99,111,110,118,115,97,109,112,0);
       let greyI = String.fromCharCode(107,95,53,52,95,116,105,116,108,101,98,97,114,0);
      for (let w = 0; w < 3; w++) {
          let awaye = String.fromCharCode(103,110,117,116,108,115,95,54,95,53,50,0);
          let chinasame3 = 4.0;
         logoutu = `${parseInt(`${chinasame3}`)}`;
         awaye += `${awaye.length}`;
         chinasame3 += (parseFloat(`${awaye == String.fromCharCode(84,0) ? awaye.length : awaye.length}`));
      }
      let complete_ = 9005314 >= greyI.length;
      do {
         greyI = "2";
         if (complete_) {
            break;
         }
      } while (complete_ && (logoutu == String.fromCharCode(79,0)));
          let borderlessx: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,95,56,95,55,50,0),String.fromCharCode(99,108,105,112,112,105,110,103,95,53,95,54,55,0)], [String.fromCharCode(112,97,114,97,95,54,95,55,57,0),String.fromCharCode(120,95,51,50,95,108,111,103,105,110,0)]]);
          let connectionE = String.fromCharCode(118,112,120,100,101,99,95,54,95,50,51,0);
         logoutu = `${connectionE.length}`;
         borderlessx = new Map([[`${borderlessx.size}`, 3 ^ borderlessx.size]]);
         connectionE += `${borderlessx.size + 2}`;
      if (logoutu.length <= greyI.length) {
          let nalyticsP = String.fromCharCode(108,111,103,111,95,122,95,52,56,0);
          let countdownl = String.fromCharCode(107,95,53,50,95,98,105,100,105,114,101,99,116,105,111,110,97,108,0);
         greyI = `${nalyticsP.length - 1}`;
         nalyticsP += `${countdownl.length & countdownl.length}`;
      }
      while (!logoutu.startsWith(greyI)) {
          let fastforwardX = 2.0;
          let showm: Map<any, any> = new Map([[String.fromCharCode(111,95,54,54,95,109,111,100,101,109,0),166], [String.fromCharCode(112,95,49,48,95,100,121,110,97,109,105,99,97,108,108,121,0),539], [String.fromCharCode(101,95,54,52,95,99,114,111,115,115,102,97,100,101,0),556]]);
         greyI = `${logoutu.length}`;
         fastforwardX *= parseFloat(`${1 | parseInt(`${fastforwardX}`)}`);
         showm.set(`${fastforwardX}`, parseInt(`${fastforwardX}`));
         break;
      }
      let watchX = String.fromCharCode(120,114,57,104,106,48,112,57,0) == greyI;
      do {
          let phonen = 1;
          let mbsplashU = String.fromCharCode(102,117,115,101,95,112,95,52,53,0);
          let textC = String.fromCharCode(108,105,110,109,97,116,104,95,117,95,51,52,0);
          let orientationx = String.fromCharCode(117,100,112,108,105,116,101,95,120,95,56,50,0);
          let stringsJ = String.fromCharCode(105,95,51,53,95,100,105,115,99,117,115,115,0);
         greyI = `${logoutu.length}`;
         phonen -= phonen;
         mbsplashU += "2";
         textC += `${orientationx.length - 2}`;
         orientationx = `${phonen << (Math.min(Math.abs(3), 4))}`;
         stringsJ += `${2 & stringsJ.length}`;
         if (watchX) {
            break;
         }
      } while (watchX && (logoutu == String.fromCharCode(73,0)));
      searchO.push(1);
   let nextw = themeS ? !themeS : themeS;
   do {
      themeS = (y_playerK.length - downloaderq.length) >= 13;
      if (nextw) {
         break;
      }
   } while (nextw && ((4 + pointu.size) <= 3));
      pointu = new Map([[`${themeS}`, (parseInt(`${guideF}`) + (themeS ? 2 : 2))]]);
       let historyg = String.fromCharCode(119,101,97,118,101,95,119,95,52,50,0);
       let reactnativejsi = String.fromCharCode(115,101,114,105,102,95,51,95,53,48,0);
       let expandV = String.fromCharCode(113,95,57,51,95,100,101,118,105,99,101,115,0);
         historyg += `${historyg.length * 3}`;
       let sigmobz = 4;
       let album6 = 0;
         sigmobz *= sigmobz;
         album6 /= Math.max(1, reactnativejsi.length * sigmobz);
      while (!expandV.endsWith(`${sigmobz}`)) {
          let sigmobB = String.fromCharCode(122,95,49,53,95,107,110,111,98,0);
         sigmobz >>= Math.min(Math.abs(1), 1);
         sigmobB = `${3 + sigmobB.length}`;
         break;
      }
         expandV = `${sigmobz}`;
          let analyticg: Array<any> = [550, 204, 163];
         sigmobz |= 2;
         analyticg.push(analyticg.length % (Math.max(9, analyticg.length)));
         historyg = "1";
      for (let t = 0; t < 3; t++) {
         expandV = `${expandV.length * sigmobz}`;
      }
      forwardL.push((String.fromCharCode(97,0) == downloaderq ? searchO.length : downloaderq.length));
      auto_3gu /= Math.max(1, parseInt(`${auto_3gu}`) * 3);
       let albuma: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,114,101,108,111,103,105,110,0),290], [String.fromCharCode(112,108,97,110,101,95,111,95,56,57,0),825], [String.fromCharCode(98,121,116,101,115,116,114,105,110,103,95,105,95,53,0),627]]);
       let entryY: Map<any, any> = new Map([[String.fromCharCode(112,95,53,50,95,112,114,101,118,101,110,116,115,0),528], [String.fromCharCode(100,105,115,97,98,108,101,95,122,95,53,53,0),801]]);
       let temperatureZ = false;
         entryY.set(`${albuma.size}`, albuma.size / 2);
      while (1 >= (5 + entryY.size)) {
         temperatureZ = !temperatureZ || entryY.size >= 42;
         break;
      }
      for (let a = 0; a < 3; a++) {
         entryY.set(`${entryY.size}`, albuma.size);
      }
          let footballN: Array<any> = [210, 550, 719];
          let mbjscommonU = 4.0;
         temperatureZ = footballN.includes(temperatureZ);
         footballN = [parseInt(`${mbjscommonU}`) + parseInt(`${mbjscommonU}`)];
      for (let s = 0; s < 1; s++) {
         albuma = new Map([[`${albuma.size}`, 1]]);
      }
      for (let n = 0; n < 3; n++) {
          let pressurec = 5;
          let package_hyC: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,112,97,100,95,52,95,49,49,0),243], [String.fromCharCode(119,95,49,56,95,99,111,115,116,115,0),617], [String.fromCharCode(114,101,102,111,99,117,115,95,99,95,53,54,0),654]]);
         entryY = new Map([[`${package_hyC.size}`, 2 % (Math.max(3, pressurec))]]);
      }
          let projectm = 5;
          let usernamef: Map<any, any> = new Map([[String.fromCharCode(101,95,52,49,95,108,111,99,97,108,97,100,100,114,0),true ], [String.fromCharCode(116,104,101,109,101,115,95,50,95,53,52,0),true ]]);
         albuma.set(`${temperatureZ}`, ((temperatureZ ? 2 : 5) + projectm));
         projectm >>= Math.min(Math.abs(usernamef.size / (Math.max(1, 8))), 2);
         usernamef = new Map([[`${usernamef.size}`, usernamef.size - usernamef.size]]);
         entryY.set(`${temperatureZ}`, (2 << (Math.min(3, Math.abs((temperatureZ ? 2 : 1))))));
          let smalla = String.fromCharCode(97,99,107,115,95,109,95,55,51,0);
         entryY.set(`${entryY.size}`, 1);
         smalla = `${smalla.length}`;
      pointu.set(mbjscommone, 3);
      navigationl = `${(String.fromCharCode(50,0) == downloaderq ? downloaderq.length : unselectedp.length)}`;
   if (mbjscommone.includes(`${unread5.size}`)) {
      mbjscommone += `${(String.fromCharCode(87,0) == mbjscommone ? mbjscommone.length : parseInt(`${rewardC}`))}`;
   }
   while (downloaderq.endsWith(`${pointu.size}`)) {
      downloaderq = `${parseInt(`${guideF}`)}`;
      break;
   }
       let pathz = String.fromCharCode(113,95,49,52,95,116,101,115,116,114,101,115,117,108,116,0);
       let photoc = 5;
       let temp3 = 1.0;
      if ((4 ^ photoc) < 1 || 2 < (photoc ^ 4)) {
          let time_lve = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,119,95,54,56,0);
          let traminip: Array<any> = [915, 32, 125];
         photoc *= time_lve.length << (Math.min(5, traminip.length));
      }
          let watch6 = 5;
          let carouselh: Array<any> = [String.fromCharCode(122,109,98,118,95,115,95,49,50,0), String.fromCharCode(101,97,115,121,95,108,95,51,55,0), String.fromCharCode(101,112,111,108,108,95,57,95,53,54,0)];
          let navigationb = 0.0;
         pathz += `${parseInt(`${temp3}`) * 2}`;
         watch6 |= carouselh.length;
         carouselh = [2];
         navigationb *= parseFloat(`${3}`);
         temp3 *= pathz.length;
         temp3 *= pathz.length;
       let emptye = true;
       let usero = false;
      while (emptye) {
         emptye = !emptye;
         break;
      }
         photoc ^= pathz.length;
          let downloadZ = String.fromCharCode(98,111,111,116,104,95,50,95,54,57,0);
         pathz = `${3 & parseInt(`${temp3}`)}`;
         downloadZ = `${downloadZ.length << (Math.min(downloadZ.length, 2))}`;
          let rewindD = 1;
          let login3 = 1.0;
         temp3 *= parseInt(`${login3}`);
         rewindD >>= Math.min(Math.abs(2), 1);
         login3 *= rewindD;
      rewardC *= parseFloat(`${navigationl.length}`);
      pointu.set(`${guideF}`, parseInt(`${rewardC}`) % (Math.max(3, parseInt(`${guideF}`))));
      unread5 = new Map([[downloaderq, parseInt(`${rewardC}`) & 1]]);
      rewardC -= parseFloat(`${1}`);
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
       let singapore4 = String.fromCharCode(117,95,54,50,95,115,99,116,112,99,111,110,110,0);
    let inviteT: Map<any, any> = new Map([[String.fromCharCode(117,95,57,52,95,115,101,116,99,116,120,0),251], [String.fromCharCode(97,108,108,121,117,118,95,105,95,50,57,0),57]]);
    let package_ym = 4;
    let projectZ = String.fromCharCode(100,105,97,109,111,110,100,95,98,95,49,0);
    let pathL = String.fromCharCode(101,103,97,99,121,95,115,95,50,55,0);
    let savef: Array<any> = [String.fromCharCode(109,101,115,97,103,101,115,95,100,95,54,0), String.fromCharCode(103,101,116,116,101,114,95,115,95,53,50,0)];
    let dragc: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,99,100,106,112,101,103,0),false ], [String.fromCharCode(117,114,97,110,100,111,109,95,122,95,57,51,0),false ], [String.fromCharCode(114,97,100,102,103,95,111,95,55,55,0),false ]]);
    let foundH = 0.0;
    let hongkongV = String.fromCharCode(100,95,57,55,95,111,112,116,105,111,110,97,108,0);
    let match0 = true;
   let telegramT = 5075400 <= dragc.size;
   do {
       let weibob = 4;
       let bottomK = String.fromCharCode(108,95,55,49,95,115,116,97,108,108,0);
       let leaguez = String.fromCharCode(105,116,111,97,95,106,95,54,48,0);
       let configureU = String.fromCharCode(98,117,116,116,111,110,95,53,95,52,55,0);
         leaguez += `${(bottomK == String.fromCharCode(118,0) ? bottomK.length : leaguez.length)}`;
      while (1 >= (weibob % (Math.max(bottomK.length, 3)))) {
         weibob %= Math.max(2, (String.fromCharCode(100,0) == configureU ? configureU.length : weibob));
         break;
      }
          let recommendation7 = 4;
          let heji_: Array<any> = [26, 289];
          let topict: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,120,95,52,49,0),997], [String.fromCharCode(109,118,112,114,101,100,95,99,95,53,56,0),187], [String.fromCharCode(113,95,55,53,95,101,115,101,110,100,0),981]]);
         bottomK = `${leaguez.length}`;
         recommendation7 &= heji_.length | recommendation7;
         heji_.push(heji_.length & topict.size);
         topict.set(`${heji_.length}`, 2);
      while (2 >= (leaguez.length & weibob) && 4 >= (weibob & 2)) {
         weibob /= Math.max(weibob + 2, 5);
         break;
      }
         configureU = `${2 % (Math.max(3, leaguez.length))}`;
      while (leaguez.startsWith(`${weibob}`)) {
          let episodeb = String.fromCharCode(99,97,118,112,95,57,95,51,48,0);
          let orangeG = false;
          let memberC = true;
         leaguez += `${(weibob / (Math.max(2, (orangeG ? 1 : 1))))}`;
         episodeb += `${((memberC ? 3 : 5) & episodeb.length)}`;
         orangeG = episodeb.length > 96 && memberC;
         break;
      }
      if (leaguez.length < 3) {
         weibob *= configureU.length % (Math.max(3, weibob));
      }
      if (bottomK.length < weibob) {
         weibob += configureU.length / 2;
      }
         leaguez = `${configureU.length}`;
      while ((2 << (Math.min(1, bottomK.length))) < 3) {
          let utilsq = false;
          let logob = 1.0;
          let spinnerz = 4.0;
          let filteru: Array<any> = [536, 827];
          let taile = String.fromCharCode(105,95,55,51,95,115,112,97,119,110,0);
         bottomK += `${2 | parseInt(`${spinnerz}`)}`;
         utilsq = logob <= 3.40 && taile.length <= 52;
         logob += 1 ^ parseInt(`${logob}`);
         spinnerz -= parseFloat(`${1}`);
         filteru.push((String.fromCharCode(114,0) == taile ? taile.length : filteru.length));
         break;
      }
          let applicationK = 5.0;
          let mbridgeC = false;
         leaguez = `${parseInt(`${applicationK}`) ^ 3}`;
         applicationK += ((mbridgeC ? 1 : 4) % 2);
       let renewL: Map<any, any> = new Map([[String.fromCharCode(99,108,97,117,115,101,95,106,95,53,53,0),955], [String.fromCharCode(113,95,53,51,95,117,105,110,116,0),13], [String.fromCharCode(119,95,57,57,95,115,104,111,119,99,113,116,0),698]]);
       let dialogC: Map<any, any> = new Map([[String.fromCharCode(113,95,57,53,95,97,110,105,109,97,116,111,114,0),true ], [String.fromCharCode(122,95,57,48,95,99,97,116,97,108,111,103,0),false ], [String.fromCharCode(108,95,51,53,95,103,97,116,101,100,0),true ]]);
      dragc.set(`${bottomK}`, bottomK.length & inviteT.size);
      if (telegramT) {
         break;
      }
   } while (telegramT && (dragc.get(`${savef.length}`) == null));
   let inactiveW = 8247724 >= savef.length;
   do {
      savef = [hongkongV.length];
      if (inactiveW) {
         break;
      }
   } while (inactiveW && ((pathL.length % (Math.max(2, 7))) > 4 && (pathL.length % (Math.max(8, savef.length))) > 2));
      savef.push(3);
      pathL += "1";
      pathL += `${inviteT.size / (Math.max(pathL.length, 10))}`;
   for (let b = 0; b < 2; b++) {
       let formS: Map<any, any> = new Map([[String.fromCharCode(104,95,50,53,95,112,114,105,110,116,101,114,0),String.fromCharCode(108,97,98,101,108,110,115,95,103,95,49,56,0)], [String.fromCharCode(112,105,99,107,105,110,103,95,100,95,54,57,0),String.fromCharCode(98,95,49,55,95,97,105,109,100,0)]]);
       let lessN: Array<any> = [String.fromCharCode(115,95,49,95,114,101,119,114,105,116,101,114,0), String.fromCharCode(106,95,55,56,95,99,111,109,112,101,110,115,97,116,101,0)];
       let infoU = String.fromCharCode(99,117,115,116,111,109,95,121,95,54,51,0);
         lessN.push((infoU == String.fromCharCode(97,0) ? formS.size : infoU.length));
      for (let r = 0; r < 2; r++) {
         lessN.push(formS.size);
      }
      while ((1 >> (Math.min(3, infoU.length))) == 3 || 1 == (lessN.length >> (Math.min(infoU.length, 1)))) {
         infoU += `${(infoU == String.fromCharCode(100,0) ? formS.size : infoU.length)}`;
         break;
      }
         lessN = [formS.size];
       let selectedq = String.fromCharCode(116,95,51,49,95,116,101,108,108,0);
      if (formS.size == lessN.length) {
         lessN.push(lessN.length + formS.size);
      }
      for (let f = 0; f < 3; f++) {
          let completeQ = String.fromCharCode(118,111,105,112,95,100,95,53,53,0);
         lessN.push(lessN.length ^ 1);
         completeQ = `${1 << (Math.min(1, completeQ.length))}`;
      }
          let expiredf = 4.0;
          let frame_lY = 0.0;
          let navigationk = 2.0;
         formS = new Map([[`${navigationk}`, parseInt(`${expiredf}`) >> (Math.min(2, Math.abs(2)))]]);
         expiredf /= Math.max(parseFloat(`${parseInt(`${frame_lY}`) - parseInt(`${frame_lY}`)}`), 4);
      for (let o = 0; o < 1; o++) {
         selectedq += `${(selectedq == String.fromCharCode(107,0) ? selectedq.length : infoU.length)}`;
      }
      hongkongV = `${pathL.length}`;
   }
   let borderlessI = hongkongV == String.fromCharCode(122,112,100,120,51,119,120,102,98,0);
   do {
      hongkongV += `${package_ym - 2}`;
      if (borderlessI) {
         break;
      }
   } while ((!hongkongV.endsWith(`${package_ym}`)) && borderlessI);
      dragc.set(`${savef.length}`, 3);
   for (let h = 0; h < 3; h++) {
       let aboutG: Array<any> = [523, 819];
       let delegate_0aG = false;
       let anythinkl = String.fromCharCode(101,95,52,49,95,116,116,97,100,97,116,97,0);
       let episodesi = String.fromCharCode(105,95,56,49,95,116,105,109,101,119,97,105,116,0);
      for (let c = 0; c < 2; c++) {
         delegate_0aG = anythinkl.length >= 55;
      }
      let trophyb = delegate_0aG ? !delegate_0aG : delegate_0aG;
      do {
         delegate_0aG = delegate_0aG || anythinkl.length < 83;
         if (trophyb) {
            break;
         }
      } while (trophyb && (!episodesi.endsWith(`${delegate_0aG}`)));
      if (1 == (anythinkl.length & aboutG.length) && 4 == (aboutG.length & 1)) {
         aboutG = [anythinkl.length];
      }
       let dark9 = true;
       let delegate_iN = true;
          let userA = 0.0;
          let downloadingt: Map<any, any> = new Map([[String.fromCharCode(110,95,57,95,110,97,110,111,115,101,99,111,110,100,115,0),66], [String.fromCharCode(115,95,55,53,95,101,118,105,99,116,105,111,110,0),877]]);
          let foregroundd: Array<any> = [627, 62];
         delegate_0aG = aboutG.length < 33 || delegate_iN;
         userA /= Math.max(5, parseFloat(`${downloadingt.size}`));
         downloadingt.set(`${foregroundd.length}`, foregroundd.length ^ downloadingt.size);
         episodesi = "1";
       let championR = 4;
       let placementv = 5;
          let baiduI = String.fromCharCode(97,105,102,102,95,122,95,51,55,0);
         delegate_0aG = baiduI.length <= anythinkl.length;
         delegate_0aG = (19 == (episodesi.length ^ (!dark9 ? 19 : episodesi.length)));
          let penaltyP = String.fromCharCode(99,114,111,115,115,112,111,115,116,95,101,95,57,48,0);
         dark9 = aboutG.includes(delegate_iN);
         penaltyP = `${penaltyP.length}`;
      for (let u = 0; u < 3; u++) {
          let completeG: Array<any> = [766, 747];
         aboutG = [(2 & (delegate_0aG ? 3 : 1))];
         completeG = [3 ^ completeG.length];
      }
      while (!dark9 && delegate_0aG) {
          let stationK: Map<any, any> = new Map([[String.fromCharCode(114,115,97,122,95,110,95,51,48,0),59], [String.fromCharCode(99,95,53,56,95,101,120,97,109,112,108,101,115,0),72]]);
         dark9 = 59 >= stationK.size || 59 >= placementv;
         break;
      }
      dragc = new Map([[`${inviteT.size}`, singapore4.length]]);
   }
      hongkongV += "3";
       let privilegeN = true;
       let clockI = String.fromCharCode(117,95,56,55,95,99,111,110,116,101,110,116,108,101,115,115,0);
      let eventB = clockI.length <= 6539109;
      do {
         clockI = "2";
         if (eventB) {
            break;
         }
      } while ((!privilegeN) && eventB);
      while (!clockI.includes(`${privilegeN}`)) {
          let update_p8u = String.fromCharCode(115,116,105,102,102,110,101,115,115,95,50,95,49,56,0);
          let searchD = String.fromCharCode(99,108,111,99,107,95,111,95,51,55,0);
          let sheetg: Array<any> = [310, 150];
          let i_imageL: Array<any> = [86, 703];
          let tempU = 1;
         privilegeN = clockI.length < 19 && String.fromCharCode(85,0) == searchD;
         update_p8u += `${(String.fromCharCode(101,0) == update_p8u ? sheetg.length : update_p8u.length)}`;
         searchD += `${update_p8u.length}`;
         sheetg = [tempU >> (Math.min(i_imageL.length, 1))];
         i_imageL.push(2 >> (Math.min(4, sheetg.length)));
         tempU ^= (update_p8u == String.fromCharCode(87,0) ? update_p8u.length : sheetg.length);
         break;
      }
         privilegeN = !privilegeN;
         clockI += "2";
      if (clockI.includes(`${privilegeN}`)) {
         clockI += `${((privilegeN ? 2 : 3) | 2)}`;
      }
      if (!privilegeN) {
         clockI += `${3 ^ clockI.length}`;
      }
      pathL += `${2 | parseInt(`${foundH}`)}`;
      inviteT.set(pathL, pathL.length - hongkongV.length);

    setShowControls(!showControls);

   for (let c = 0; c < 2; c++) {
       let spinner4 = String.fromCharCode(99,104,97,110,103,101,104,95,55,95,49,50,0);
       let previewm = String.fromCharCode(117,110,102,114,101,101,122,101,95,56,95,52,49,0);
       let vietnamC: Array<any> = [String.fromCharCode(122,95,57,54,95,111,112,117,115,101,110,99,0), String.fromCharCode(97,116,116,114,105,98,95,97,95,55,57,0)];
       let hoverz = 2.0;
      if (spinner4.length > 2) {
          let default_o43: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,116,114,97,110,115,102,111,114,109,97,98,108,101,0),String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,103,95,54,52,0)], [String.fromCharCode(105,95,57,56,95,116,101,109,112,111,114,97,114,121,0),String.fromCharCode(98,95,49,95,115,105,109,117,108,99,97,115,116,0)]]);
          let mbridgef = String.fromCharCode(101,95,53,53,95,99,111,110,103,101,115,116,105,111,110,0);
          let predictionU = 0.0;
         previewm += `${parseInt(`${predictionU}`)}`;
         default_o43 = new Map([[`${default_o43.size}`, mbridgef.length]]);
         mbridgef += `${default_o43.size * mbridgef.length}`;
         predictionU -= 3 & mbridgef.length;
      }
          let modityg = 0;
         spinner4 += `${vietnamC.length}`;
         modityg ^= modityg << (Math.min(Math.abs(modityg), 5));
          let goalw = 4.0;
          let signinupp = true;
         vietnamC.push(spinner4.length);
         goalw /= Math.max(parseInt(`${goalw}`) - 2, 2);
         signinupp = goalw <= 37.68 || 37.68 <= goalw;
       let k_imager: Map<any, any> = new Map([[String.fromCharCode(118,101,99,116,111,114,95,104,95,52,49,0),903], [String.fromCharCode(115,95,52,51,95,104,111,110,101,121,115,119,97,112,0),356]]);
          let halfj = 0;
          let showl = 1.0;
         k_imager = new Map([[`${vietnamC.length}`, previewm.length >> (Math.min(1, vietnamC.length))]]);
         halfj <<= Math.min(Math.abs(halfj), 4);
         showl -= 1;
          let humidityx = 3.0;
          let buildL = 3.0;
         k_imager = new Map([[`${buildL}`, parseInt(`${buildL}`)]]);
         humidityx *= parseFloat(`${parseInt(`${humidityx}`)}`);
      if (2 >= (vietnamC.length * spinner4.length) && 2 >= (spinner4.length * 2)) {
         spinner4 += `${previewm.length >> (Math.min(4, Math.abs(parseInt(`${hoverz}`))))}`;
      }
      let placeholder6 = k_imager.size <= 8110145;
      do {
         k_imager = new Map([[`${hoverz}`, parseInt(`${hoverz}`) ^ spinner4.length]]);
         if (placeholder6) {
            break;
         }
      } while (((parseInt(`${hoverz}`) * k_imager.size) == 4 || (2.99 * hoverz) == 2.13) && placeholder6);
         hoverz -= parseFloat(`${spinner4.length}`);
         k_imager = new Map([[spinner4, previewm.length >> (Math.min(Math.abs(1), 4))]]);
      while (spinner4.length == k_imager.size) {
         k_imager = new Map([[`${k_imager.size}`, k_imager.size]]);
         break;
      }
       let stationJ: Array<any> = [699, 947];
       let blacklistT: Array<any> = [79, 685];
      pathL += `${2 & hongkongV.length}`;
   }
   let agreementq = pathL.length >= 7986206;
   do {
       let nalytics3: Array<any> = [148, 128, 314];
       let modelsy = String.fromCharCode(122,95,50,51,95,113,109,98,108,0);
       let live8: Map<any, any> = new Map([[String.fromCharCode(115,95,49,57,95,109,111,110,105,116,111,114,105,110,103,0),596], [String.fromCharCode(117,95,52,54,95,101,110,100,120,0),479], [String.fromCharCode(97,98,111,117,116,115,95,56,95,55,53,0),444]]);
       let catalog1 = false;
       let previewC = 3.0;
      if (1 < (live8.size * 4) || catalog1) {
         catalog1 = modelsy.length >= 53;
      }
         nalytics3.push(nalytics3.length);
      for (let t = 0; t < 1; t++) {
         nalytics3.push(live8.size);
      }
          let reminderh = String.fromCharCode(107,95,49,53,95,100,101,99,111,109,112,114,101,115,115,0);
          let constantsw = String.fromCharCode(108,95,50,50,95,101,112,105,99,0);
         nalytics3 = [reminderh.length];
         reminderh = `${constantsw.length ^ 1}`;
         constantsw = `${constantsw.length - constantsw.length}`;
         previewC += parseFloat(`${modelsy.length >> (Math.min(5, nalytics3.length))}`);
         modelsy += `${(modelsy == String.fromCharCode(114,0) ? modelsy.length : nalytics3.length)}`;
          let with_y9s: Map<any, any> = new Map([[String.fromCharCode(100,101,116,97,105,108,95,49,95,53,50,0),669], [String.fromCharCode(99,114,101,97,116,101,101,120,95,121,95,54,48,0),35], [String.fromCharCode(99,108,111,115,101,95,111,95,54,53,0),12]]);
         previewC -= (parseFloat(`${modelsy == String.fromCharCode(71,0) ? parseInt(`${previewC}`) : modelsy.length}`));
         with_y9s.set(`${with_y9s.size}`, with_y9s.size << (Math.min(Math.abs(3), 3)));
         catalog1 = String.fromCharCode(52,0) == modelsy || 47.24 < previewC;
      if ((nalytics3.length / 2) > 5) {
         modelsy += `${modelsy.length + live8.size}`;
      }
         catalog1 = 18.77 < previewC || 17 < modelsy.length;
      if (catalog1) {
         nalytics3 = [(parseInt(`${previewC}`) << (Math.min(3, Math.abs((catalog1 ? 2 : 2)))))];
      }
       let vietnamq = 3.0;
          let membership7 = 0.0;
         nalytics3 = [live8.size << (Math.min(5, Math.abs(parseInt(`${vietnamq}`))))];
         membership7 *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${membership7}`)), 3))}`);
          let actionS: Map<any, any> = new Map([[String.fromCharCode(114,105,118,97,116,101,95,111,95,54,51,0),false ], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,104,95,51,56,0),false ]]);
          let gifti = true;
         vietnamq *= parseFloat(`${3 * parseInt(`${previewC}`)}`);
         actionS = new Map([[`${actionS.size}`, (actionS.size << (Math.min(3, Math.abs((gifti ? 5 : 2)))))]]);
         gifti = !gifti;
         vietnamq *= parseFloat(`${parseInt(`${previewC}`)}`);
      pathL += `${live8.size}`;
      if (agreementq) {
         break;
      }
   } while ((2 == (3 % (Math.max(6, pathL.length))) && 3 == (inviteT.size % (Math.max(pathL.length, 4)))) && agreementq);
   let anythink8 = projectZ == String.fromCharCode(95,95,120,120,0);
   do {
       let w_image1: Array<any> = [264, 620];
       let upgradeo = String.fromCharCode(117,95,56,50,0);
       let termsU = String.fromCharCode(109,117,108,116,105,112,97,114,116,95,104,95,54,53,0);
       let skipi: Array<any> = [917, 734, 751];
       let kuaishouu = 5;
      if (2 <= (upgradeo.length & w_image1.length) || (w_image1.length & 2) <= 1) {
         upgradeo += `${kuaishouu + skipi.length}`;
      }
         upgradeo += `${termsU.length ^ skipi.length}`;
      if (!upgradeo.startsWith(`${skipi.length}`)) {
          let main_zl = 4;
         skipi.push(kuaishouu << (Math.min(skipi.length, 1)));
         main_zl |= main_zl;
      }
          let friendsi = String.fromCharCode(108,115,102,112,111,108,121,95,102,95,53,52,0);
          let arrowm = String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,55,95,52,0);
         upgradeo += `${friendsi.length % (Math.max(5, w_image1.length))}`;
         friendsi += `${(String.fromCharCode(80,0) == arrowm ? arrowm.length : arrowm.length)}`;
         termsU = `${kuaishouu ^ w_image1.length}`;
      while (5 >= kuaishouu) {
          let penaltyJ = String.fromCharCode(121,95,53,48,95,117,110,112,114,111,116,101,99,116,0);
         skipi.push(w_image1.length);
         penaltyJ = `${penaltyJ.length}`;
         break;
      }
         skipi.push(kuaishouu);
      for (let y = 0; y < 1; y++) {
         skipi = [w_image1.length / 3];
      }
      let huaweiy = termsU.length >= 9410752;
      do {
          let anytimeb = false;
          let stylesX = String.fromCharCode(111,119,110,115,95,52,95,56,48,0);
         termsU = `${kuaishouu / 3}`;
         anytimeb = stylesX.startsWith(`${anytimeb}`);
         stylesX += "2";
         if (huaweiy) {
            break;
         }
      } while ((!termsU.includes(`${kuaishouu}`)) && huaweiy);
      for (let v = 0; v < 2; v++) {
          let package_i0D = true;
         skipi = [kuaishouu];
         package_i0D = !package_i0D;
      }
         termsU += `${w_image1.length - 3}`;
          let bottomo = String.fromCharCode(115,101,116,95,54,95,50,52,0);
          let debugY = 3;
         upgradeo += `${skipi.length}`;
         bottomo = `${2 / (Math.max(2, debugY))}`;
         debugY &= 2 + bottomo.length;
         skipi = [termsU.length];
       let dropdownd: Map<any, any> = new Map([[String.fromCharCode(98,105,108,97,116,101,114,97,108,95,111,95,51,56,0),String.fromCharCode(115,116,101,112,95,110,95,50,57,0)], [String.fromCharCode(99,95,49,95,103,114,111,119,116,104,0),String.fromCharCode(104,95,53,56,95,108,101,97,102,0)], [String.fromCharCode(120,95,54,49,95,101,120,104,97,117,115,116,0),String.fromCharCode(99,95,49,49,95,116,101,115,116,115,0)]]);
         termsU += `${1 ^ termsU.length}`;
      projectZ += `${(2 << (Math.min(4, Math.abs((match0 ? 2 : 3)))))}`;
      if (anythink8) {
         break;
      }
   } while (anythink8 && (singapore4 != projectZ));
      singapore4 += `${inviteT.size >> (Math.min(2, Math.abs(package_ym)))}`;
      projectZ = `${projectZ.length << (Math.min(Math.abs(1), 4))}`;
      savef = [dragc.size];
       let starG = String.fromCharCode(108,111,103,111,117,114,108,95,122,95,50,50,0);
       let langkeyC = 3;
      while (!starG.startsWith(`${langkeyC}`)) {
         starG += `${(String.fromCharCode(51,0) == starG ? starG.length : langkeyC)}`;
         break;
      }
         starG = `${starG.length}`;
       let crossX = 4;
       let mutedI = 5;
          let member5: Map<any, any> = new Map([[String.fromCharCode(118,95,50,55,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),String.fromCharCode(112,95,54,52,95,98,101,120,116,0)], [String.fromCharCode(118,95,49,49,95,112,114,111,99,101,115,115,111,114,0),String.fromCharCode(117,95,57,54,95,97,109,98,105,101,110,116,0)]]);
         langkeyC &= 3 + starG.length;
         member5 = new Map([[`${member5.size}`, member5.size]]);
          let mintegralJ = String.fromCharCode(122,95,54,54,95,102,116,118,100,111,99,0);
          let grayA = false;
          let bodant: Array<any> = [971, 323];
         crossX >>= Math.min(starG.length, 5);
         mintegralJ = `${2 ^ mintegralJ.length}`;
         grayA = 46 <= bodant.length;
         bodant.push(1);
      let stepZ = 6901169 >= langkeyC;
      do {
         langkeyC -= mutedI * starG.length;
         if (stepZ) {
            break;
         }
      } while (stepZ && (2 <= (2 - starG.length) && (starG.length - langkeyC) <= 2));
      foundH += pathL.length + 1;
      singapore4 = `${parseInt(`${foundH}`) % 2}`;
   for (let d = 0; d < 3; d++) {
       let watchT = String.fromCharCode(114,95,50,52,95,115,111,117,114,99,101,99,108,105,112,0);
         watchT += "2";
          let shrinkb = 2.0;
          let ewardedb = String.fromCharCode(116,101,97,109,115,95,119,95,51,57,0);
         watchT += `${watchT.length}`;
         shrinkb -= ewardedb.length;
         ewardedb += "1";
      while (watchT == watchT) {
          let volume4 = String.fromCharCode(108,103,111,114,97,110,100,95,109,95,57,53,0);
          let bnews2 = String.fromCharCode(98,95,50,53,95,112,114,111,112,101,114,116,105,101,115,0);
          let stringA = String.fromCharCode(110,95,52,95,115,116,100,105,110,116,0);
         watchT = `${watchT.length << (Math.min(2, volume4.length))}`;
         volume4 = `${3 + stringA.length}`;
         bnews2 = `${stringA.length / 2}`;
         break;
      }
      dragc = new Map([[`${inviteT.size}`, singapore4.length]]);
   }
      match0 = 23 < savef.length;
      foundH /= Math.max(4, hongkongV.length);
   if (pathL != projectZ) {
      projectZ += `${(hongkongV == String.fromCharCode(51,0) ? hongkongV.length : dragc.size)}`;
   }
    delayControls();
  };

  const clearHidingDelay = () => {
       let description_tvi: Array<any> = [674, 744, 643];
    let wind8 = true;
    let downloadedN = String.fromCharCode(120,95,53,48,95,118,108,111,103,0);
    let custom8 = 1.0;
    let stationsx: Map<any, any> = new Map([[String.fromCharCode(107,95,56,54,95,97,108,105,97,115,0),String.fromCharCode(122,95,54,51,95,114,117,98,98,101,114,0)], [String.fromCharCode(98,95,56,48,95,115,117,98,106,0),String.fromCharCode(117,95,54,50,95,99,98,112,104,105,0)], [String.fromCharCode(105,110,105,116,105,97,108,108,121,95,52,95,55,55,0),String.fromCharCode(121,95,52,50,95,101,120,112,101,99,116,115,0)]]);
    let stylec = String.fromCharCode(116,101,108,101,103,114,97,95,118,95,56,50,0);
    let configs = String.fromCharCode(113,95,52,56,95,109,97,112,115,116,114,105,110,103,0);
    let chato = 5.0;
   while (2.32 == (3.68 - custom8) && 3 == (parseInt(`${custom8}`) - stylec.length)) {
      stylec = `${(description_tvi.length | (wind8 ? 1 : 1))}`;
      break;
   }
   while (custom8 < 1.7) {
      wind8 = 91 < configs.length;
      break;
   }
      downloadedN += `${(2 << (Math.min(5, Math.abs((wind8 ? 2 : 2)))))}`;
   let nativeex1 = stationsx.size <= 7057578;
   do {
       let select_ = 1.0;
          let buildJ = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,95,54,95,51,54,0);
          let malaysiaP = true;
         select_ += (parseFloat(`${(malaysiaP ? 4 : 3) / (Math.max(parseInt(`${select_}`), 8))}`));
         buildJ += `${buildJ.length}`;
         malaysiaP = buildJ.length == buildJ.length;
      if (select_ <= 3.52) {
          let time_v5K: Array<any> = [String.fromCharCode(113,95,53,56,95,115,121,109,108,105,110,107,0), String.fromCharCode(115,111,99,105,97,108,95,102,95,56,49,0), String.fromCharCode(112,95,49,54,95,97,99,99,117,109,0)];
          let type_tl = false;
          let spinners = false;
          let main_az: Array<any> = [767, 268, 466];
         select_ += parseFloat(`${1}`);
         time_v5K.push((time_v5K.length << (Math.min(3, Math.abs((spinners ? 1 : 2))))));
         type_tl = !type_tl;
         spinners = !type_tl;
         main_az = [(3 % (Math.max((spinners ? 3 : 2), 8)))];
      }
          let related1 = String.fromCharCode(115,117,112,101,114,95,109,95,55,48,0);
         select_ -= parseFloat(`${related1.length >> (Math.min(Math.abs(3), 4))}`);
      stationsx.set(stylec, (String.fromCharCode(103,0) == stylec ? description_tvi.length : stylec.length));
      if (nativeex1) {
         break;
      }
   } while (nativeex1 && (!Array.from(stationsx.keys()).includes(`${description_tvi.length}`)));
      description_tvi = [3 | description_tvi.length];
   if (!wind8) {
      configs += `${description_tvi.length - downloadedN.length}`;
   }
   let editR = 8124838 <= stationsx.size;
   do {
      stationsx.set(`${wind8}`, 1);
      if (editR) {
         break;
      }
   } while (((3 + description_tvi.length) == 4 && (description_tvi.length + stationsx.size) == 3) && editR);
      downloadedN = "2";
   for (let u = 0; u < 3; u++) {
      wind8 = description_tvi.length < 38;
   }
      stationsx = new Map([[`${stationsx.size}`, 1]]);
   if ((downloadedN.length * 2) <= 4) {
      downloadedN = `${description_tvi.length}`;
   }
       let selectY = 2.0;
          let bottome = String.fromCharCode(97,95,50,57,95,112,101,110,97,108,116,121,0);
          let away8 = true;
         selectY /= Math.max(5, parseInt(`${selectY}`) & 3);
         bottome += `${(bottome.length | (away8 ? 1 : 5))}`;
         away8 = !away8;
         selectY /= Math.max(2 / (Math.max(parseInt(`${selectY}`), 1)), 1);
         selectY /= Math.max(4, 3 << (Math.min(Math.abs(parseInt(`${selectY}`)), 1)));
      stylec += "3";
      stationsx.set(`${stylec}`, stationsx.size ^ stylec.length);
   while (!wind8) {
      custom8 /= Math.max(parseFloat(`${parseInt(`${custom8}`)}`), 1);
      break;
   }
      stationsx = new Map([[`${stationsx.size}`, (configs == String.fromCharCode(87,0) ? configs.length : stationsx.size)]]);
      custom8 /= Math.max(4, parseFloat(`${description_tvi.length}`));
   while (downloadedN.length < configs.length) {
      configs = `${(configs == String.fromCharCode(67,0) ? configs.length : stationsx.size)}`;
      break;
   }

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let minimizeK = 5;
    let with_tc = String.fromCharCode(111,95,56,57,95,111,114,112,104,97,110,0);
    let xvode: Array<any> = [216, 951, 460];
    let chatT = true;
    let middlewarey = 0;
    let strz: Array<any> = [String.fromCharCode(117,95,49,50,95,115,119,97,112,112,101,114,0), String.fromCharCode(110,95,53,55,95,99,115,104,97,114,112,0), String.fromCharCode(109,95,55,53,95,100,112,99,109,0)];
    let relatedv = 2.0;
    let league4 = 4;
    let feedbackm = String.fromCharCode(114,95,53,55,95,116,114,97,110,115,105,116,105,111,110,0);
    let modalf: Array<any> = [543, 623];
   if (strz.length < middlewarey) {
      strz = [middlewarey * 3];
   }
   while (!xvode.includes(minimizeK)) {
       let clearB: Array<any> = [496, 869, 136];
      let time_z2F = 8299465 >= clearB.length;
      do {
         clearB = [clearB.length | 2];
         if (time_z2F) {
            break;
         }
      } while (time_z2F && (clearB.length == 5));
       let soundh = 4;
       let notificationu = 3;
      let scorev = notificationu >= 9334801;
      do {
         notificationu %= Math.max(5, soundh);
         if (scorev) {
            break;
         }
      } while ((!clearB.includes(notificationu)) && scorev);
      minimizeK += strz.length;
      break;
   }
   if (strz.includes(middlewarey)) {
      strz = [2];
   }
      with_tc = `${parseInt(`${relatedv}`)}`;
       let dialogg: Array<any> = [378, 349, 719];
       let switch_sc = 1;
       let umengI: Map<any, any> = new Map([[String.fromCharCode(108,115,112,114,95,121,95,57,55,0),false ], [String.fromCharCode(108,105,107,101,108,121,95,54,95,57,54,0),false ]]);
         switch_sc += dialogg.length * switch_sc;
      let fieldz = 5543281 <= switch_sc;
      do {
         switch_sc |= switch_sc * umengI.size;
         if (fieldz) {
            break;
         }
      } while (fieldz && (5 == (switch_sc & dialogg.length) && (dialogg.length & switch_sc) == 5));
         switch_sc -= 2 - umengI.size;
      if (4 < (switch_sc << (Math.min(Math.abs(3), 1))) || (umengI.size << (Math.min(3, Math.abs(switch_sc)))) < 3) {
          let tumbnailr = 4.0;
          let applicationN = 0.0;
          let modulez = true;
         switch_sc *= 3;
         tumbnailr -= parseFloat(`${parseInt(`${tumbnailr}`) - parseInt(`${applicationN}`)}`);
         applicationN -= parseFloat(`${parseInt(`${applicationN}`) / 1}`);
         modulez = 80.40 < tumbnailr;
      }
      if ((2 - dialogg.length) > 1 && 5 > (2 - switch_sc)) {
          let shrinkA = 2;
          let circlea = 5.0;
          let firebaseB = 5.0;
          let preview4: Map<any, any> = new Map([[String.fromCharCode(100,114,97,102,116,115,95,111,95,53,55,0),false ], [String.fromCharCode(103,95,51,55,95,100,101,100,117,112,101,0),true ]]);
         switch_sc <<= Math.min(4, Math.abs(umengI.size));
         shrinkA <<= Math.min(Math.abs(preview4.size >> (Math.min(3, Math.abs(parseInt(`${circlea}`))))), 1);
         circlea -= 1 ^ preview4.size;
         firebaseB += parseFloat(`${parseInt(`${circlea}`)}`);
      }
      if ((switch_sc * dialogg.length) <= 2 || 4 <= (2 * dialogg.length)) {
         switch_sc %= Math.max(umengI.size, 2);
      }
      let selection6 = switch_sc <= 9026530;
      do {
         switch_sc %= Math.max(2, dialogg.length ^ umengI.size);
         if (selection6) {
            break;
         }
      } while (selection6 && (3 > dialogg.length));
      while (2 == (5 * switch_sc) && (switch_sc * 5) == 2) {
         switch_sc %= Math.max(3 % (Math.max(3, umengI.size)), 1);
         break;
      }
      for (let e = 0; e < 1; e++) {
          let albumO = String.fromCharCode(117,95,55,49,95,98,101,120,116,0);
         umengI.set(`${dialogg.length}`, umengI.size);
         albumO = `${(albumO == String.fromCharCode(55,0) ? albumO.length : albumO.length)}`;
      }
      minimizeK += league4;

      if (delayValue === undefined) {

   while (xvode.length <= 2) {
       let combinedl = String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,106,95,57,0);
       let handlerd = String.fromCharCode(116,95,55,48,0);
      let down0 = handlerd.length <= 6219951;
      do {
         handlerd += `${combinedl.length & 1}`;
         if (down0) {
            break;
         }
      } while (down0 && (combinedl.length == 5));
      if (combinedl != handlerd) {
         handlerd = `${handlerd.length + combinedl.length}`;
      }
      chatT = 68 > with_tc.length;
      break;
   }
      minimizeK >>= Math.min(1, Math.abs(1 ^ league4));
   while (with_tc.startsWith(`${strz.length}`)) {
      strz.push(middlewarey);
      break;
   }
   for (let p = 0; p < 2; p++) {
      minimizeK %= Math.max(4, 2 * strz.length);
   }
      middlewarey <<= Math.min(xvode.length, 4);
        if (showSlider === 'none' && !paused) {

      middlewarey /= Math.max(5, (with_tc == String.fromCharCode(73,0) ? minimizeK : with_tc.length));
       let with_fl = 1.0;
       let reducerq: Array<any> = [154, 151, 790];
       let yellowM = 4.0;
       let gradlev = 4;
       let expandD = 4;
          let previewj = String.fromCharCode(97,116,116,114,105,98,95,52,95,51,56,0);
          let referrerr = 4.0;
         with_fl /= Math.max(3, parseFloat(`${1}`));
         previewj = `${(previewj == String.fromCharCode(76,0) ? previewj.length : parseInt(`${referrerr}`))}`;
         referrerr -= parseFloat(`${1}`);
         expandD -= gradlev;
         gradlev ^= 2 / (Math.max(parseInt(`${yellowM}`), 5));
      if (yellowM > 3.17) {
         yellowM *= parseFloat(`${1 - reducerq.length}`);
      }
         reducerq.push(2);
         with_fl -= parseFloat(`${parseInt(`${with_fl}`) % 1}`);
      for (let j = 0; j < 3; j++) {
         yellowM += parseFloat(`${parseInt(`${yellowM}`) << (Math.min(1, Math.abs(gradlev)))}`);
      }
      if ((expandD + reducerq.length) >= 2 && (expandD + reducerq.length) >= 2) {
         expandD &= parseInt(`${yellowM}`);
      }
      xvode = [minimizeK];
   while ((xvode.length + 3) > 4 && (relatedv / (Math.max(5, parseFloat(`${xvode.length}`)))) > 1.88) {
       let pathZ = String.fromCharCode(111,117,114,95,104,95,52,53,0);
       let overv = 0;
      for (let j = 0; j < 1; j++) {
          let streamingG: Array<any> = [467, 952, 635];
          let largeS = 1;
         overv &= 1;
         streamingG = [2 * streamingG.length];
         largeS |= largeS - 3;
      }
       let targets = String.fromCharCode(114,95,51,52,95,97,105,114,105,110,103,0);
      xvode.push(league4);
      pathZ += `${pathZ.length}`;
      break;
   }
   let internetz = chatT ? !chatT : chatT;
   do {
      chatT = minimizeK > 50 || chatT;
      if (internetz) {
         break;
      }
   } while (internetz && ((relatedv + 4.17) >= 2.43 || !chatT));
       let time_hyD = String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,95,49,95,56,55,0);
      while (time_hyD == String.fromCharCode(76,0) || time_hyD.length == 4) {
         time_hyD = `${(time_hyD == String.fromCharCode(55,0) ? time_hyD.length : time_hyD.length)}`;
         break;
      }
       let tempr = 2.0;
          let stepH = true;
          let overlayu: Map<any, any> = new Map([[String.fromCharCode(110,95,57,57,95,109,107,118,112,97,114,115,101,114,0),802], [String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,101,95,50,54,0),312], [String.fromCharCode(112,95,49,55,95,115,112,108,105,116,116,105,110,103,0),664]]);
          let redirecti: Array<any> = [594, 102, 752];
         tempr -= parseFloat(`${parseInt(`${tempr}`) >> (Math.min(3, Math.abs(1)))}`);
         stepH = overlayu.size > 89;
         overlayu = new Map([[`${overlayu.size}`, ((stepH ? 4 : 1) % (Math.max(3, 7)))]]);
         redirecti.push(3);
      with_tc = `${parseInt(`${relatedv}`) & 2}`;
          setShowControls(false)
        }
      } else {

      middlewarey %= Math.max(3, with_tc.length);
      xvode = [strz.length & with_tc.length];
   while ((league4 % 3) < 4 && 1 < (3 % (Math.max(10, strz.length)))) {
       let savel: Array<any> = [473, 903, 159];
       let leagueJ = String.fromCharCode(115,118,103,95,106,95,50,51,0);
       let singleE: Array<any> = [String.fromCharCode(111,103,103,118,111,114,98,105,115,95,115,95,56,57,0), String.fromCharCode(115,95,50,52,95,109,97,114,107,105,110,103,115,0)];
       let greenR = 5.0;
       let relatedw = 3.0;
       let nativeexM = String.fromCharCode(115,112,108,97,110,101,95,115,95,53,50,0);
       let contextq = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,54,95,57,50,0);
      for (let c = 0; c < 2; c++) {
         savel.push(parseInt(`${greenR}`));
      }
         greenR /= Math.max(singleE.length, 1);
         savel = [3 ^ nativeexM.length];
          let time_40 = 3;
         leagueJ += `${(String.fromCharCode(107,0) == contextq ? contextq.length : leagueJ.length)}`;
         time_40 ^= time_40;
       let schedulei = 4.0;
       let register_2q = 2.0;
          let feedbackE = String.fromCharCode(108,111,111,107,117,112,95,121,95,51,57,0);
          let activeg: Array<any> = [55, 352];
          let pauseO = 4.0;
         greenR /= Math.max(parseInt(`${pauseO}`) << (Math.min(3, Math.abs(3))), 4);
         feedbackE += `${activeg.length}`;
         activeg = [2 % (Math.max(8, feedbackE.length))];
         pauseO /= Math.max(activeg.length, 2);
       let tailx = 3.0;
      strz.push(with_tc.length);
      break;
   }
      xvode = [(String.fromCharCode(107,0) == with_tc ? with_tc.length : strz.length)];
      league4 -= with_tc.length ^ 1;
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let malaysian = String.fromCharCode(114,95,56,53,95,109,101,115,97,103,101,115,0);
    let dialogC = String.fromCharCode(113,95,54,48,95,101,112,105,115,111,100,101,0);
    let closeq = 4.0;
    let videoo = 2.0;
    let adult5 = String.fromCharCode(115,100,97,108,108,111,99,120,95,54,95,52,48,0);
    let analytico: Map<any, any> = new Map([[String.fromCharCode(99,95,49,51,95,121,105,101,108,100,0),994], [String.fromCharCode(111,119,110,101,100,95,118,95,49,53,0),710]]);
    let react4 = String.fromCharCode(121,95,57,50,95,109,102,113,101,0);
    let mathS = 3;
    let plus4 = 2.0;
    let pnewsg = String.fromCharCode(100,113,99,111,101,102,102,95,116,95,53,57,0);
    let dataJ: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,101,115,95,115,95,56,49,0),963], [String.fromCharCode(121,95,53,48,95,116,117,112,108,101,0),536], [String.fromCharCode(113,95,54,53,95,98,108,105,110,107,0),906]]);
    let langt = String.fromCharCode(97,101,115,111,112,116,95,102,95,53,57,0);
    let quests = true;
    let type_7bO: Array<any> = [496, 896, 218];
    let reportb = 2.0;
    let buildZ = false;
    let bottomG = true;
    let injuryY: Array<any> = [381, 323];
    let groupD: Map<any, any> = new Map([[String.fromCharCode(116,114,117,116,104,95,118,95,57,0),false ], [String.fromCharCode(97,95,57,53,95,97,97,115,99,0),true ], [String.fromCharCode(114,111,111,116,115,95,100,95,50,50,0),false ]]);
      plus4 += 2;
       let catalogn = String.fromCharCode(108,95,49,56,95,114,101,112,101,97,116,101,114,0);
      while (catalogn.length < 5) {
         catalogn = `${catalogn.length + catalogn.length}`;
         break;
      }
         catalogn += `${2 + catalogn.length}`;
      let projectJ = catalogn.length <= 8103573;
      do {
         catalogn = "3";
         if (projectJ) {
            break;
         }
      } while (projectJ && (!catalogn.startsWith(`${catalogn.length}`)));
      pnewsg += `${parseInt(`${plus4}`)}`;
      react4 += "2";
   if (dataJ.get(`${mathS}`) != null) {
      dataJ = new Map([[`${plus4}`, langt.length << (Math.min(Math.abs(3), 4))]]);
   }
   let sportsQ = closeq <= 8094528.0;
   do {
       let customY = String.fromCharCode(116,95,56,53,95,100,112,114,105,110,116,0);
      for (let o = 0; o < 3; o++) {
         customY += `${(String.fromCharCode(79,0) == customY ? customY.length : customY.length)}`;
      }
         customY = `${customY.length}`;
      for (let i = 0; i < 3; i++) {
          let scorez = false;
         customY += `${(customY == String.fromCharCode(73,0) ? (scorez ? 3 : 5) : customY.length)}`;
      }
      closeq *= (parseFloat(`${adult5 == String.fromCharCode(104,0) ? mathS : adult5.length}`));
      if (sportsQ) {
         break;
      }
   } while ((mathS < 5) && sportsQ);
   while (malaysian.length <= react4.length) {
      react4 += "1";
      break;
   }
   for (let y = 0; y < 1; y++) {
       let catagory0 = 2.0;
         catagory0 += parseInt(`${catagory0}`) >> (Math.min(4, Math.abs(parseInt(`${catagory0}`))));
         catagory0 /= Math.max(3, parseInt(`${catagory0}`));
         catagory0 /= Math.max(3 | parseInt(`${catagory0}`), 4);
      langt += `${2 / (Math.max(3, analytico.size))}`;
   }

    if (isLocked) {

      pnewsg = `${parseInt(`${closeq}`)}`;
       let launchF = String.fromCharCode(110,95,53,95,98,105,116,101,120,97,99,116,0);
       let watchl = String.fromCharCode(98,95,49,95,97,110,99,104,111,114,105,110,103,0);
      if (watchl != launchF) {
         launchF += `${watchl.length}`;
      }
         launchF = `${watchl.length >> (Math.min(1, launchF.length))}`;
         watchl = `${launchF.length}`;
      let reactnativejsb = 8294372 <= launchF.length;
      do {
          let activityb = String.fromCharCode(99,97,116,95,115,95,51,51,0);
         launchF = `${(launchF == String.fromCharCode(74,0) ? watchl.length : launchF.length)}`;
         activityb += `${2 * activityb.length}`;
         if (reactnativejsb) {
            break;
         }
      } while ((watchl != launchF) && reactnativejsb);
          let plusv = 1.0;
          let sentry8: Map<any, any> = new Map([[String.fromCharCode(113,95,53,48,95,116,97,103,103,101,100,0),500], [String.fromCharCode(108,105,98,115,115,104,95,102,95,55,0),495]]);
         launchF += `${sentry8.size & parseInt(`${plusv}`)}`;
         watchl = `${watchl.length}`;
      videoo *= parseFloat(`${2 / (Math.max(3, parseInt(`${plus4}`)))}`);
       let rewardo = 2.0;
      for (let e = 0; e < 3; e++) {
         rewardo -= parseFloat(`${parseInt(`${rewardo}`) - 1}`);
      }
         rewardo *= parseFloat(`${parseInt(`${rewardo}`) << (Math.min(5, Math.abs(1)))}`);
         rewardo *= parseFloat(`${parseInt(`${rewardo}`)}`);
      pnewsg += `${parseInt(`${plus4}`)}`;
      analytico.set(dialogC, dialogC.length);
       let strings1 = false;
       let modityQ: Map<any, any> = new Map([[String.fromCharCode(97,95,54,49,95,99,97,108,108,111,99,0),String.fromCharCode(119,95,55,95,114,101,100,101,108,101,103,97,116,101,0)], [String.fromCharCode(114,95,55,57,95,105,110,105,116,105,97,108,105,122,101,114,0),String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,121,95,55,54,0)], [String.fromCharCode(116,97,107,101,95,52,95,49,53,0),String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,98,95,57,48,0)]]);
       let eighteen7 = 2.0;
          let greenQ = String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,115,95,53,52,0);
          let aboutP: Array<any> = [334, 879, 432];
          let championf = String.fromCharCode(102,95,51,54,95,116,101,108,101,112,104,111,116,111,0);
         modityQ = new Map([[`${aboutP.length}`, aboutP.length]]);
         greenQ = `${greenQ.length}`;
         championf = `${greenQ.length % (Math.max(3, championf.length))}`;
       let launchr = 0.0;
       let areav = 5.0;
      let updates_ = launchr <= 5702503.0;
      do {
         launchr += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${launchr}`)), 5))}`);
         if (updates_) {
            break;
         }
      } while (((areav * launchr) < 4.3) && updates_);
         eighteen7 -= modityQ.size;
       let overlay0 = String.fromCharCode(106,95,53,52,95,110,111,110,110,117,108,108,115,115,114,99,0);
       let reactv = String.fromCharCode(99,104,97,112,116,101,114,95,106,95,57,51,0);
         eighteen7 /= Math.max(1, 3);
      for (let z = 0; z < 2; z++) {
         launchr /= Math.max(3, parseFloat(`${overlay0.length}`));
      }
         reactv = "1";
         eighteen7 -= modityQ.size >> (Math.min(Math.abs(3), 3));
      dataJ.set(`${videoo}`, 2 - parseInt(`${videoo}`));
   for (let e = 0; e < 2; e++) {
      mathS >>= Math.min(Math.abs(parseInt(`${plus4}`)), 2);
   }
      pnewsg = `${react4.length}`;
      

       let logoz = String.fromCharCode(111,118,101,114,105,100,100,101,110,95,120,95,52,55,0);
       let roundm = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,105,95,49,51,0);
       let animationx = 0.0;
      while (logoz.includes(roundm)) {
         roundm = `${roundm.length}`;
         break;
      }
      let backwardm = 5239060.0 <= animationx;
      do {
         animationx /= Math.max(4, (parseFloat(`${roundm == String.fromCharCode(51,0) ? roundm.length : logoz.length}`)));
         if (backwardm) {
            break;
         }
      } while (backwardm && (5 < (4 & logoz.length) && 1.82 < (animationx - 5.99)));
         animationx *= parseFloat(`${logoz.length * roundm.length}`);
      while (roundm.startsWith(`${animationx}`)) {
          let dplus2 = String.fromCharCode(112,95,52,49,95,119,101,98,112,97,103,101,115,0);
          let album4 = 3.0;
          let favorite5: Array<any> = [384, 661, 547];
          let mbridgeM = 2.0;
         roundm = `${dplus2.length / 3}`;
         dplus2 += `${parseInt(`${mbridgeM}`) << (Math.min(5, Math.abs(2)))}`;
         album4 /= Math.max(4, parseFloat(`${favorite5.length ^ parseInt(`${mbridgeM}`)}`));
         favorite5.push(parseInt(`${album4}`) - 2);
         break;
      }
       let z_managerA = String.fromCharCode(97,99,104,105,101,118,101,100,95,118,95,55,54,0);
       let borderlessI = 1;
       let vignette3 = 1;
      for (let j = 0; j < 2; j++) {
         animationx /= Math.max(2, parseFloat(`${2 << (Math.min(Math.abs(vignette3), 1))}`));
      }
          let paginationl = String.fromCharCode(119,95,49,53,95,102,105,110,105,115,104,101,100,0);
          let downloaderO: Array<any> = [String.fromCharCode(113,99,101,108,112,95,53,95,53,52,0), String.fromCharCode(104,97,114,100,99,111,100,101,100,95,103,95,50,52,0), String.fromCharCode(122,95,57,50,95,99,97,112,105,116,97,108,105,122,105,110,103,0)];
         borderlessI |= paginationl.length;
         paginationl = `${3 << (Math.min(2, downloaderO.length))}`;
         downloaderO = [downloaderO.length | downloaderO.length];
      for (let e = 0; e < 2; e++) {
         z_managerA = `${parseInt(`${animationx}`)}`;
      }
      plus4 *= analytico.size;
   if (3.53 >= (parseFloat(`${analytico.size}`) / (Math.max(9, videoo))) || 3.53 >= (parseFloat(`${analytico.size}`) / (Math.max(5, videoo)))) {
       let chinasameK = String.fromCharCode(97,112,112,101,110,100,97,108,108,95,119,95,53,51,0);
       let topico = 4.0;
         chinasameK = `${chinasameK.length + 1}`;
      let modelsS = 8932417.0 <= topico;
      do {
          let gesturen = 2.0;
          let live3 = String.fromCharCode(105,100,102,118,95,53,95,54,51,0);
          let update_njl: Array<any> = [852, 262];
          let eighteend = String.fromCharCode(116,100,108,116,95,98,95,57,56,0);
          let combinedd = String.fromCharCode(103,95,54,56,95,101,109,111,106,105,0);
         topico /= Math.max(4, parseFloat(`${2}`));
         gesturen /= Math.max(4, parseFloat(`${update_njl.length & parseInt(`${gesturen}`)}`));
         live3 += `${combinedd.length}`;
         update_njl.push((String.fromCharCode(68,0) == eighteend ? parseInt(`${gesturen}`) : eighteend.length));
         combinedd += `${combinedd.length}`;
         if (modelsS) {
            break;
         }
      } while ((4.23 < (topico + 1.23)) && modelsS);
         chinasameK = `${chinasameK.length << (Math.min(5, Math.abs(parseInt(`${topico}`))))}`;
      while (1.37 < (topico / (Math.max(parseFloat(`${chinasameK.length}`), 7)))) {
         chinasameK += `${parseInt(`${topico}`) * chinasameK.length}`;
         break;
      }
         chinasameK += `${parseInt(`${topico}`)}`;
         chinasameK = `${(String.fromCharCode(106,0) == chinasameK ? chinasameK.length : parseInt(`${topico}`))}`;
      analytico = new Map([[`${dataJ.size}`, dataJ.size]]);
   }
   let dataS = String.fromCharCode(48,98,104,0) == dialogC;
   do {
      dialogC = `${analytico.size % (Math.max(1, 7))}`;
      if (dataS) {
         break;
      }
   } while ((react4 != String.fromCharCode(54,0)) && dataS);
      quests = !adult5.startsWith(`${plus4}`);
      dataJ.set(`${mathS}`, 3 << (Math.min(3, Math.abs(mathS))));
   let circlet = String.fromCharCode(121,54,99,101,113,99,118,48,107,0) == malaysian;
   do {
      malaysian += `${langt.length % 1}`;
      if (circlet) {
         break;
      }
   } while (circlet && ((malaysian.length + 5) == 5));
   while (react4.includes(adult5)) {
       let whatsappZ = String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,95,112,95,52,52,0);
       let xvodN = 0.0;
       let hookc = String.fromCharCode(105,95,54,51,95,98,108,111,99,107,115,99,97,110,0);
       let sounds = String.fromCharCode(115,116,114,105,112,115,95,55,95,57,56,0);
       let upgradeI = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,104,95,56,0);
         hookc = `${upgradeI.length % (Math.max(2, 9))}`;
         upgradeI += `${sounds.length}`;
         hookc = "2";
         xvodN *= parseFloat(`${upgradeI.length ^ sounds.length}`);
         sounds += `${(upgradeI == String.fromCharCode(84,0) ? upgradeI.length : parseInt(`${xvodN}`))}`;
      let carouselS = String.fromCharCode(100,116,120,105,95,116,0) == hookc;
      do {
         hookc = `${whatsappZ.length + sounds.length}`;
         if (carouselS) {
            break;
         }
      } while (carouselS && (!whatsappZ.endsWith(`${hookc.length}`)));
          let connectionL = String.fromCharCode(113,95,51,55,95,115,101,115,115,105,111,110,115,0);
         xvodN -= parseFloat(`${whatsappZ.length * 3}`);
         connectionL += `${connectionL.length % 2}`;
      while (!sounds.endsWith(`${whatsappZ.length}`)) {
          let philippinesS = 2;
          let brightnessS = String.fromCharCode(104,97,110,103,95,122,95,57,50,0);
          let mintegralk = 0.0;
         sounds += "3";
         philippinesS %= Math.max(2, 1 & philippinesS);
         brightnessS = `${parseInt(`${mintegralk}`) >> (Math.min(4, Math.abs(philippinesS)))}`;
         mintegralk += parseFloat(`${brightnessS.length >> (Math.min(4, Math.abs(parseInt(`${mintegralk}`))))}`);
         break;
      }
      if (5 == (parseInt(`${xvodN}`) * 5) && (upgradeI.length * parseInt(`${xvodN}`)) == 5) {
          let apps5 = false;
          let vignettei = true;
          let screenu = String.fromCharCode(103,101,110,101,114,105,99,115,95,115,95,52,57,0);
          let private_mg = String.fromCharCode(109,111,100,97,108,108,121,95,56,95,50,56,0);
         upgradeI = `${hookc.length}`;
         apps5 = !apps5;
         vignettei = private_mg == String.fromCharCode(67,0);
         screenu += `${((vignettei ? 4 : 1))}`;
         private_mg = "3";
      }
          let fieldy = String.fromCharCode(115,95,53,55,0);
          let foregroundm = 1.0;
         upgradeI += `${(String.fromCharCode(102,0) == whatsappZ ? whatsappZ.length : parseInt(`${foregroundm}`))}`;
         fieldy += `${fieldy.length * 1}`;
         foregroundm *= parseFloat(`${fieldy.length}`);
       let foregroundp: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,110,97,109,101,95,117,95,53,55,0),false ], [String.fromCharCode(105,110,116,101,114,112,111,108,95,49,95,54,48,0),true ], [String.fromCharCode(113,95,56,52,95,115,101,108,0),true ]]);
       let homeJ: Map<any, any> = new Map([[String.fromCharCode(114,95,55,55,95,100,101,99,111,109,112,111,115,101,105,0),891], [String.fromCharCode(100,116,100,102,95,98,95,57,57,0),812]]);
      for (let l = 0; l < 2; l++) {
          let nativez = false;
         foregroundp.set(`${homeJ.size}`, 2);
         nativez = !nativez;
      }
          let gmaily: Map<any, any> = new Map([[String.fromCharCode(102,95,52,55,95,110,101,111,110,0),745], [String.fromCharCode(97,117,116,104,105,110,102,111,95,106,95,56,49,0),609]]);
          let rewardvideoM = String.fromCharCode(114,101,99,104,101,99,107,95,98,95,51,49,0);
          let hoverS = 1.0;
         foregroundp.set(`${hookc}`, foregroundp.size << (Math.min(hookc.length, 5)));
         gmaily.set(rewardvideoM, (String.fromCharCode(104,0) == rewardvideoM ? gmaily.size : rewardvideoM.length));
         hoverS -= parseFloat(`${3 | parseInt(`${hoverS}`)}`);
       let switch_x0v = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,118,95,49,57,0);
      while ((foregroundp.size >> (Math.min(upgradeI.length, 4))) <= 5 && (5 >> (Math.min(5, Math.abs(foregroundp.size)))) <= 5) {
          let rewind3 = String.fromCharCode(97,101,97,100,95,48,95,50,49,0);
         upgradeI += `${(String.fromCharCode(82,0) == whatsappZ ? parseInt(`${xvodN}`) : whatsappZ.length)}`;
         rewind3 += "2";
         break;
      }
      adult5 = "1";
      break;
   }
      setIsLocked(false);
    } else {

   while (5 >= (dataJ.size - 1) && 4.11 >= (plus4 * 3.53)) {
      dataJ = new Map([[adult5, (String.fromCharCode(89,0) == dialogC ? adult5.length : dialogC.length)]]);
      break;
   }
   while (2 < (pnewsg.length * mathS) || (2 * mathS) < 3) {
       let settingV: Map<any, any> = new Map([[String.fromCharCode(104,117,110,103,95,110,95,57,0),953], [String.fromCharCode(117,118,108,99,95,118,95,51,56,0),376], [String.fromCharCode(102,95,54,54,95,112,105,110,0),953]]);
      let indexj = settingV.size <= 6787423;
      do {
         settingV = new Map([[`${settingV.size}`, 1 << (Math.min(1, Math.abs(settingV.size)))]]);
         if (indexj) {
            break;
         }
      } while ((4 >= (settingV.size + 3) && (settingV.size + settingV.size) >= 3) && indexj);
         settingV.set(`${settingV.size}`, settingV.size);
          let videojsq: Array<any> = [137, 497];
          let profile5 = String.fromCharCode(115,99,104,101,100,95,116,95,52,0);
         settingV = new Map([[`${settingV.size}`, 1 / (Math.max(2, settingV.size))]]);
         videojsq.push(3);
         profile5 += `${videojsq.length}`;
      mathS <<= Math.min(3, Math.abs(((quests ? 2 : 2) % 1)));
      break;
   }
       let a_centerJ: Array<any> = [88, 118, 747];
         a_centerJ.push(a_centerJ.length & 3);
      if (2 >= (3 ^ a_centerJ.length) || 3 >= (3 ^ a_centerJ.length)) {
         a_centerJ.push(a_centerJ.length);
      }
      if ((a_centerJ.length * a_centerJ.length) == 5) {
         a_centerJ.push(a_centerJ.length << (Math.min(Math.abs(3), 5)));
      }
      plus4 += mathS / (Math.max(react4.length, 2));
      type_7bO = [dataJ.size - adult5.length];
   for (let s = 0; s < 2; s++) {
      dialogC = `${parseInt(`${plus4}`)}`;
   }
      closeq *= parseFloat(`${2}`);
      adult5 = "1";
      

      adult5 += `${(1 ^ (quests ? 3 : 5))}`;
      videoo -= (parseFloat(`${(buildZ ? 2 : 2) & adult5.length}`));
   while ((plus4 / (Math.max(videoo, 3))) == 4.39 && (4.39 / (Math.max(2, videoo))) == 2.7) {
       let sort4 = String.fromCharCode(110,95,56,54,95,109,117,116,101,120,101,115,0);
       let analyticsl = String.fromCharCode(99,111,109,109,97,110,100,115,95,115,95,52,51,0);
      while (analyticsl.startsWith(sort4)) {
         sort4 = "1";
         break;
      }
         analyticsl = `${3 & analyticsl.length}`;
      if (5 <= analyticsl.length) {
         analyticsl = `${2 / (Math.max(7, analyticsl.length))}`;
      }
      for (let z = 0; z < 2; z++) {
         analyticsl += `${(String.fromCharCode(85,0) == sort4 ? sort4.length : analyticsl.length)}`;
      }
      if (!sort4.endsWith(analyticsl)) {
          let greyp = false;
         sort4 += "1";
      }
         analyticsl += `${(String.fromCharCode(89,0) == analyticsl ? analyticsl.length : sort4.length)}`;
      videoo += parseFloat(`${pnewsg.length | 2}`);
      break;
   }
       let tailk: Array<any> = [811, 276];
       let assistw: Map<any, any> = new Map([[String.fromCharCode(117,110,98,97,110,95,49,95,51,54,0),614], [String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,110,95,51,56,0),613]]);
          let pressureF: Map<any, any> = new Map([[String.fromCharCode(111,110,116,111,95,115,95,53,54,0),611], [String.fromCharCode(112,114,105,111,95,99,95,51,54,0),619]]);
          let serviced = 2.0;
         tailk.push(pressureF.size + 3);
         pressureF = new Map([[`${serviced}`, parseInt(`${serviced}`) >> (Math.min(Math.abs(parseInt(`${serviced}`)), 3))]]);
      while (5 < (tailk.length + 1) && 1 < (assistw.size + tailk.length)) {
          let eighteenk = 0.0;
          let gpayh = 4.0;
         assistw = new Map([[`${assistw.size}`, parseInt(`${eighteenk}`)]]);
         eighteenk += parseInt(`${gpayh}`);
         break;
      }
      for (let d = 0; d < 2; d++) {
         tailk = [tailk.length * assistw.size];
      }
         assistw = new Map([[`${assistw.size}`, 1 ^ tailk.length]]);
      if (assistw.size <= 1) {
         assistw.set(`${tailk.length}`, assistw.size % (Math.max(3, 8)));
      }
      for (let i = 0; i < 1; i++) {
          let ying5 = String.fromCharCode(120,95,53,49,95,103,101,116,98,105,116,0);
          let hover_: Array<any> = [46, 919, 799];
          let interstitial6 = String.fromCharCode(116,95,50,50,95,105,110,105,116,97,99,107,0);
          let alertx = 4.0;
         assistw = new Map([[`${hover_.length}`, hover_.length]]);
         ying5 += `${ying5.length}`;
         interstitial6 = `${(interstitial6 == String.fromCharCode(103,0) ? interstitial6.length : parseInt(`${alertx}`))}`;
         alertx *= ying5.length << (Math.min(Math.abs(1), 4));
      }
      type_7bO = [((quests ? 3 : 2) - (buildZ ? 4 : 2))];
       let mimoV = 5;
       let coreD: Array<any> = [261, 297];
         coreD.push(mimoV);
         mimoV -= 3;
         coreD.push(coreD.length & 1);
         coreD = [mimoV ^ 1];
      for (let f = 0; f < 3; f++) {
         coreD.push(mimoV / 2);
      }
      if (!coreD.includes(mimoV)) {
          let logoutx = String.fromCharCode(106,95,57,95,105,100,119,116,0);
          let toponi: Array<any> = [String.fromCharCode(115,111,102,116,119,97,114,101,95,114,95,54,51,0), String.fromCharCode(115,116,114,111,107,101,100,95,118,95,54,50,0), String.fromCharCode(120,95,50,95,111,110,108,121,0)];
         mimoV /= Math.max(3, mimoV + coreD.length);
         logoutx = `${logoutx.length * toponi.length}`;
         toponi.push(2);
      }
      buildZ = (reportb + closeq) < 40.22;
   let found1 = 5602532 >= type_7bO.length;
   do {
       let statisticsD: Array<any> = [499, 557];
      while ((statisticsD.length | 3) < 5 || (3 | statisticsD.length) < 1) {
         statisticsD = [1 ^ statisticsD.length];
         break;
      }
         statisticsD.push(statisticsD.length);
          let turnX: Array<any> = [916, 307, 885];
          let confirmationA: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,116,105,109,101,99,111,100,101,115,0),true ], [String.fromCharCode(97,98,111,114,116,95,113,95,54,0),false ]]);
         statisticsD = [turnX.length];
         turnX.push(1);
         confirmationA = new Map([[`${confirmationA.size}`, confirmationA.size % (Math.max(3, 3))]]);
      type_7bO = [3 | langt.length];
      if (found1) {
         break;
      }
   } while (found1 && (2 < (type_7bO.length ^ 2) || 1 < (adult5.length ^ 2)));
   if (5.41 <= (2.30 + plus4)) {
       let configN = true;
         configN = (!configN ? configN : configN);
       let shareS = String.fromCharCode(114,101,97,108,109,95,104,95,52,54,0);
       let turne = String.fromCharCode(110,101,119,108,105,110,101,95,102,95,56,49,0);
       let muted8 = String.fromCharCode(111,98,115,101,114,118,101,114,115,95,57,95,56,55,0);
      plus4 *= 1 % (Math.max(2, parseInt(`${reportb}`)));
   }
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
