import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity, Platform } from 'react-native';
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
import { screenModel } from '@type/mayi_libfolly_inouttargetred';
import { useAppSelector } from '@hooks/mayi_redirect';
import AdultModeCountdownIndicator from '../adultVideo/mayi_holder';
import { DOWNLOAD_FEATURE_ENABLED, UMENG_CHANNEL } from '@utility/mayi_middleware_apps';
import DownloadBtn from '@static/images/holderConfirmation.svg';
import VodDownloadSelection from '../vod/mayi_untick';

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
  isFetchingRecommendedMovies?: boolean,
  isVip: boolean,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
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
       let whistleorangem = 4;
    let pressurek = 1.0;
    let stylesC = 2.0;
    let dependenciesb = String.fromCharCode(114,101,99,108,97,105,109,95,111,95,56,51,0);
    let hooksR = String.fromCharCode(109,111,100,101,108,95,120,95,49,53,0);
    let predictionbuttonx = String.fromCharCode(103,95,56,48,95,109,110,99,0);
    let libnmsP = String.fromCharCode(113,95,57,56,95,117,110,100,101,102,105,110,101,100,0);
    let umeng_ = 4.0;
    let halffieldimageD = String.fromCharCode(118,116,97,103,95,100,95,51,52,0);
    let scoreh = String.fromCharCode(99,121,99,108,101,115,95,101,95,57,53,0);
    let plus8 = String.fromCharCode(105,110,112,117,116,95,111,95,49,50,0);
    let defaultfootballbgJ = String.fromCharCode(112,117,115,104,98,97,99,107,95,50,95,52,49,0);
    let grayo = false;
   let robotoX = 8787257.0 >= pressurek;
   do {
       let short_vyi = String.fromCharCode(117,114,108,115,95,48,95,53,49,0);
       let iconlogoutd = String.fromCharCode(113,95,55,57,95,115,105,110,102,0);
       let libfbk: Array<any> = [String.fromCharCode(106,95,53,49,95,101,120,112,101,114,105,109,101,110,116,0), String.fromCharCode(100,95,54,95,100,105,103,101,115,116,98,121,111,98,106,0)];
       let smalla: Array<any> = [764, 46, 326];
      while (iconlogoutd.endsWith(`${libfbk.length}`)) {
         iconlogoutd += `${smalla.length - 3}`;
         break;
      }
         smalla = [3 << (Math.min(3, iconlogoutd.length))];
      while (short_vyi.length <= libfbk.length) {
         libfbk = [1 & libfbk.length];
         break;
      }
          let bootS = String.fromCharCode(116,119,111,115,116,97,103,101,95,109,95,54,49,0);
          let modulesA = String.fromCharCode(101,97,103,101,114,95,54,95,55,56,0);
         short_vyi = `${libfbk.length % (Math.max(8, iconlogoutd.length))}`;
         bootS = "1";
         modulesA += `${modulesA.length << (Math.min(Math.abs(3), 2))}`;
         iconlogoutd = `${iconlogoutd.length}`;
      let philippinesj = 9046328 <= smalla.length;
      do {
          let reminder_ = 5.0;
          let mounting_: Array<any> = [658, 781, 624];
          let skipL = 1.0;
          let lineq: Array<any> = [String.fromCharCode(97,108,108,111,99,97,116,101,95,109,95,49,53,0), String.fromCharCode(105,115,111,95,111,95,57,0)];
          let clear2 = String.fromCharCode(99,95,57,48,95,100,101,108,111,99,97,116,101,0);
         smalla = [1 | parseInt(`${reminder_}`)];
         reminder_ -= mounting_.length / 3;
         mounting_.push(clear2.length / (Math.max(2, 5)));
         skipL *= mounting_.length >> (Math.min(2, Math.abs(parseInt(`${skipL}`))));
         lineq = [parseInt(`${skipL}`)];
         clear2 = `${clear2.length >> (Math.min(Math.abs(1), 5))}`;
         if (philippinesj) {
            break;
         }
      } while (philippinesj && (3 < (smalla.length | short_vyi.length)));
         short_vyi += `${short_vyi.length}`;
      let notification_ = iconlogoutd.length >= 5449115;
      do {
         iconlogoutd = `${smalla.length >> (Math.min(Math.abs(1), 2))}`;
         if (notification_) {
            break;
         }
      } while (((libfbk.length % (Math.max(10, iconlogoutd.length))) < 4) && notification_);
      if (!short_vyi.includes(`${libfbk.length}`)) {
         libfbk.push(short_vyi.length | libfbk.length);
      }
         libfbk = [libfbk.length / (Math.max(iconlogoutd.length, 1))];
      let libjsiI = iconlogoutd == String.fromCharCode(50,112,113,122,112,109,55,97,102,107,0);
      do {
         iconlogoutd = `${short_vyi.length & 2}`;
         if (libjsiI) {
            break;
         }
      } while ((iconlogoutd.length == short_vyi.length) && libjsiI);
         short_vyi = `${short_vyi.length * smalla.length}`;
      pressurek += parseInt(`${stylesC}`);
      if (robotoX) {
         break;
      }
   } while (robotoX && ((hooksR.length % 3) < 2 || 2 < (parseInt(`${pressurek}`) + 3)));
   for (let x = 0; x < 2; x++) {
      hooksR = `${1 + scoreh.length}`;
   }
   let ping5 = hooksR.length >= 9088548;
   do {
      hooksR = `${predictionbuttonx.length % (Math.max(4, dependenciesb.length))}`;
      if (ping5) {
         break;
      }
   } while (ping5 && (hooksR.length < 2));
   if (1 < (whistleorangem + 2) || (whistleorangem * parseInt(`${umeng_}`)) < 2) {
      whistleorangem ^= halffieldimageD.length;
   }
       let push_ = String.fromCharCode(99,111,112,121,109,95,101,95,54,48,0);
         push_ = `${push_.length}`;
       let type_aV = String.fromCharCode(103,95,50,48,95,106,118,101,114,115,105,111,110,0);
      for (let w = 0; w < 1; w++) {
         type_aV = `${1 % (Math.max(9, push_.length))}`;
      }
      scoreh = `${hooksR.length}`;
   let mbjscommonh = predictionbuttonx.length >= 5736121;
   do {
      predictionbuttonx = "1";
      if (mbjscommonh) {
         break;
      }
   } while ((scoreh.endsWith(`${predictionbuttonx.length}`)) && mbjscommonh);
      dependenciesb = `${plus8.length | 1}`;
   for (let v = 0; v < 3; v++) {
      libnmsP += `${parseInt(`${pressurek}`)}`;
   }
       let weibou = String.fromCharCode(107,95,49,55,95,112,97,114,116,105,116,105,111,110,0);
       let reducerV: Map<any, any> = new Map([[String.fromCharCode(112,95,49,51,95,102,105,110,97,108,105,122,105,110,103,0),true ], [String.fromCharCode(102,95,57,56,95,99,101,114,116,115,0),true ], [String.fromCharCode(115,117,99,99,101,101,100,95,112,95,50,51,0),true ]]);
         weibou += `${reducerV.size * 2}`;
      if (weibou.length < 4) {
         weibou = `${(weibou == String.fromCharCode(107,0) ? weibou.length : reducerV.size)}`;
      }
       let xvodF: Array<any> = [String.fromCharCode(109,111,100,117,108,101,115,95,101,95,53,0), String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,56,95,53,52,0)];
       let androidZ: Array<any> = [489, 536];
         reducerV.set(`${weibou}`, 2 + reducerV.size);
       let zhengpianG = 5;
       let notificationfillempty4 = 5;
      for (let n = 0; n < 2; n++) {
         xvodF = [(String.fromCharCode(52,0) == weibou ? zhengpianG : weibou.length)];
      }
      predictionbuttonx = `${parseInt(`${umeng_}`) << (Math.min(Math.abs(1), 1))}`;
   if ((parseInt(`${umeng_}`) / (Math.max(6, halffieldimageD.length))) >= 4) {
       let sortT = String.fromCharCode(114,97,116,105,111,110,97,108,95,99,95,50,57,0);
       let iconrightorangee: Array<any> = [440, 957, 200];
       let homeloadinga: Array<any> = [993, 46, 233];
      let notification5 = 8268955 >= iconrightorangee.length;
      do {
         iconrightorangee = [(String.fromCharCode(77,0) == sortT ? sortT.length : homeloadinga.length)];
         if (notification5) {
            break;
         }
      } while ((sortT.length == 2) && notification5);
         homeloadinga = [iconrightorangee.length & homeloadinga.length];
      for (let t = 0; t < 3; t++) {
         iconrightorangee.push(2);
      }
         iconrightorangee.push(iconrightorangee.length * 2);
         iconrightorangee = [homeloadinga.length];
          let libreactnativejnib = String.fromCharCode(111,95,54,55,0);
          let libavformatm: Map<any, any> = new Map([[String.fromCharCode(103,95,54,53,95,115,117,98,115,116,114,101,97,109,0),String.fromCharCode(104,101,97,114,116,95,54,95,56,56,0)], [String.fromCharCode(109,118,112,114,101,100,95,50,95,55,49,0),String.fromCharCode(115,95,49,49,95,115,112,97,119,110,0)]]);
          let predictionR = 1.0;
         sortT += `${1 & sortT.length}`;
         libreactnativejnib = `${3 / (Math.max(1, libreactnativejnib.length))}`;
         libavformatm.set(`${predictionR}`, libavformatm.size);
         predictionR /= Math.max(2 << (Math.min(5, Math.abs(libavformatm.size))), 3);
       let cornerkickR = String.fromCharCode(98,95,52,50,95,108,97,114,103,101,0);
      if (cornerkickR.startsWith(`${iconrightorangee.length}`)) {
         iconrightorangee = [3 >> (Math.min(1, homeloadinga.length))];
      }
      if (cornerkickR.startsWith(`${iconrightorangee.length}`)) {
          let long_llf = String.fromCharCode(99,116,111,114,95,97,95,55,52,0);
          let chinasameg = String.fromCharCode(117,98,115,99,114,105,98,101,114,95,120,95,55,49,0);
         iconrightorangee = [(String.fromCharCode(48,0) == sortT ? homeloadinga.length : sortT.length)];
         long_llf += `${(String.fromCharCode(99,0) == chinasameg ? chinasameg.length : long_llf.length)}`;
      }
      halffieldimageD += `${parseInt(`${pressurek}`) % (Math.max(scoreh.length, 5))}`;
   }
      predictionbuttonx = `${halffieldimageD.length}`;
   while (2 > predictionbuttonx.length) {
      predictionbuttonx += `${dependenciesb.length}`;
      break;
   }
   if ((5 * parseInt(`${stylesC}`)) <= 3 || 4.27 <= (4.28 * stylesC)) {
      halffieldimageD = `${(libnmsP == String.fromCharCode(104,0) ? parseInt(`${stylesC}`) : libnmsP.length)}`;
   }
   for (let p = 0; p < 1; p++) {
      hooksR += `${parseInt(`${pressurek}`) + 1}`;
   }
   if ((4 ^ plus8.length) <= 4 && 4 <= (plus8.length + parseInt(`${umeng_}`))) {
       let borderlessA: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,120,95,118,95,54,0),653], [String.fromCharCode(118,116,97,98,95,118,95,52,49,0),837], [String.fromCharCode(119,97,108,107,101,114,95,53,95,51,48,0),715]]);
       let buttonO = String.fromCharCode(105,115,109,108,95,108,95,54,54,0);
       let modelO = String.fromCharCode(99,97,110,95,108,95,49,50,0);
      for (let i = 0; i < 2; i++) {
         borderlessA = new Map([[`${borderlessA.size}`, borderlessA.size]]);
      }
         buttonO = `${(modelO == String.fromCharCode(54,0) ? modelO.length : buttonO.length)}`;
      if (modelO == String.fromCharCode(57,0)) {
         buttonO = `${borderlessA.size ^ 2}`;
      }
          let mbjscommonI = 5.0;
          let greyarrowupj: Array<any> = [425, 767];
          let libreanimatedA = String.fromCharCode(115,95,53,53,95,100,101,102,97,117,108,116,115,0);
         borderlessA.set(`${mbjscommonI}`, parseInt(`${mbjscommonI}`) - 2);
         greyarrowupj.push(libreanimatedA.length);
         libreanimatedA = `${(libreanimatedA == String.fromCharCode(108,0) ? libreanimatedA.length : greyarrowupj.length)}`;
          let hongkongn: Array<any> = [788, 544, 948];
          let page2: Array<any> = [400, 476, 105];
          let videocommonP = String.fromCharCode(97,108,108,111,99,97,116,111,114,115,95,53,95,56,0);
         buttonO = `${borderlessA.size}`;
         hongkongn = [(videocommonP == String.fromCharCode(111,0) ? videocommonP.length : page2.length)];
         page2 = [3];
      while (modelO.length > 2) {
          let emoji6 = 1.0;
         modelO = `${buttonO.length & 1}`;
         emoji6 -= parseInt(`${emoji6}`) | parseInt(`${emoji6}`);
         break;
      }
      if (modelO.length < buttonO.length) {
         modelO += `${buttonO.length >> (Math.min(2, Math.abs(borderlessA.size)))}`;
      }
      for (let g = 0; g < 1; g++) {
          let tailk = String.fromCharCode(109,95,49,57,95,116,104,114,101,115,104,111,108,100,105,110,103,0);
         buttonO += `${borderlessA.size ^ buttonO.length}`;
         tailk = `${tailk.length}`;
      }
          let termsR = String.fromCharCode(97,95,50,0);
         borderlessA = new Map([[modelO, 2 - modelO.length]]);
         termsR += `${1 | termsR.length}`;
      plus8 += "3";
   }
   if (!dependenciesb.includes(libnmsP)) {
       let mimoO = String.fromCharCode(111,95,53,54,95,100,101,98,117,103,103,101,114,0);
       let tooltipsH = true;
         mimoO += `${mimoO.length / (Math.max(1, 4))}`;
         mimoO = `${((tooltipsH ? 1 : 1) - mimoO.length)}`;
         tooltipsH = tooltipsH || mimoO.length <= 97;
       let basketballmatchdetailbgO = 4;
       let hover5 = 3;
         basketballmatchdetailbgO ^= 2;
      if (1 > basketballmatchdetailbgO) {
          let profileactiveV = 2.0;
          let clubY = true;
         hover5 /= Math.max(((clubY ? 5 : 1) + 2), 1);
         profileactiveV -= parseFloat(`${parseInt(`${profileactiveV}`) | parseInt(`${profileactiveV}`)}`);
         clubY = (profileactiveV - profileactiveV) <= 20.93;
      }
      libnmsP += `${scoreh.length & 2}`;
   }
      libnmsP = `${halffieldimageD.length ^ 2}`;
      libnmsP += `${halffieldimageD.length}`;
       let auto_jfp = 5.0;
       let detailsu = 4.0;
       let resendG = false;
          let cornershoot8 = true;
         auto_jfp /= Math.max(1, 4);
          let profilepic9 = 1;
         auto_jfp /= Math.max(2, 3 & parseInt(`${detailsu}`));
         profilepic9 >>= Math.min(Math.abs(2 >> (Math.min(4, Math.abs(profilepic9)))), 4);
       let malaysiaS = 0;
          let settingsl = 1.0;
         resendG = 53.77 <= auto_jfp || resendG;
         settingsl += parseFloat(`${parseInt(`${settingsl}`) * 3}`);
      while ((1.82 + detailsu) >= 5.54) {
         resendG = 99 < (detailsu + malaysiaS);
         break;
      }
      let awayk = auto_jfp <= 7092412.0;
      do {
          let leakcheckerk = String.fromCharCode(116,97,103,103,101,114,95,114,95,53,54,0);
          let verticalU = 0.0;
          let iconarrowrightwhiteg = String.fromCharCode(108,95,56,48,95,100,105,97,99,114,105,116,105,99,0);
         auto_jfp /= Math.max(1, ((resendG ? 5 : 1) % (Math.max(parseInt(`${detailsu}`), 1))));
         leakcheckerk += `${leakcheckerk.length / (Math.max(5, parseInt(`${verticalU}`)))}`;
         verticalU += (parseFloat(`${leakcheckerk == String.fromCharCode(51,0) ? leakcheckerk.length : parseInt(`${verticalU}`)}`));
         iconarrowrightwhiteg += `${leakcheckerk.length}`;
         if (awayk) {
            break;
         }
      } while (awayk && ((auto_jfp + 1.55) < 1.16 && auto_jfp < 1.55));
       let androidE = String.fromCharCode(112,97,103,101,114,95,108,95,53,54,0);
       let linkl = String.fromCharCode(105,110,99,114,101,109,101,110,116,95,98,95,53,50,0);
         androidE = "3";
          let libreactnativeblobH = 3.0;
         auto_jfp += parseInt(`${detailsu}`);
         libreactnativeblobH *= parseFloat(`${3 ^ parseInt(`${libreactnativeblobH}`)}`);
      hooksR = `${plus8.length & halffieldimageD.length}`;
      stylesC *= parseFloat(`${scoreh.length | parseInt(`${umeng_}`)}`);
      predictionbuttonx = `${2 + libnmsP.length}`;
      stylesC *= parseFloat(`${parseInt(`${pressurek}`)}`);
      pressurek *= 1 * libnmsP.length;
      predictionbuttonx = `${parseInt(`${stylesC}`)}`;
   if (plus8 == String.fromCharCode(121,0) && hooksR != String.fromCharCode(73,0)) {
       let popupg = String.fromCharCode(99,95,49,50,95,101,120,116,114,101,109,117,109,0);
         popupg += `${(popupg == String.fromCharCode(107,0) ? popupg.length : popupg.length)}`;
      let airbnbstarB = popupg == String.fromCharCode(95,103,115,107,48,116,122,56,120,57,0);
      do {
         popupg = `${2 & popupg.length}`;
         if (airbnbstarB) {
            break;
         }
      } while (airbnbstarB && (popupg.length < 5));
      for (let k = 0; k < 1; k++) {
          let yingv = 1.0;
          let type_6Y = 3.0;
          let modulec = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,50,95,54,55,0);
         popupg += `${(String.fromCharCode(74,0) == popupg ? popupg.length : parseInt(`${yingv}`))}`;
         yingv -= parseFloat(`${1}`);
         type_6Y *= modulec.length / (Math.max(1, 2));
         modulec += `${modulec.length}`;
      }
      plus8 = "1";
   }
      hooksR = `${parseInt(`${stylesC}`) - 2}`;

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
       let window_6hw = 3.0;
    let hooksl = 4;
    let countryj = 1;
    let footballtrophyq = String.fromCharCode(113,95,55,48,95,112,114,111,116,101,99,116,101,100,0);
    let modulesk = String.fromCharCode(114,95,52,50,95,112,97,110,101,108,115,0);
    let renderG = 3;
    let collectionI = true;
    let minih = 4.0;
    let details8: Array<any> = [971, 444, 847];
    let profiley = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,106,95,55,55,0);
   let giftV = profiley == String.fromCharCode(103,111,107,119,49,110,55,116,0);
   do {
      profiley += `${countryj}`;
      if (giftV) {
         break;
      }
   } while ((1 > footballtrophyq.length) && giftV);
   if (3 < (hooksl >> (Math.min(Math.abs(3), 3)))) {
      hooksl <<= Math.min(1, Math.abs(details8.length * 2));
   }
   if (footballtrophyq.length > 3 || !collectionI) {
      footballtrophyq += `${hooksl}`;
   }
   let subtextw = 5364338 <= details8.length;
   do {
      details8 = [footballtrophyq.length];
      if (subtextw) {
         break;
      }
   } while (subtextw && (details8.length <= 5));
   for (let c = 0; c < 1; c++) {
      footballtrophyq += "2";
   }
   let reducerC = 5323236 <= renderG;
   do {
       let shrinkV = false;
       let profilepicg: Array<any> = [93, 442, 692];
       let forwardI = String.fromCharCode(104,95,51,56,95,104,97,110,100,115,0);
       let containerq: Array<any> = [945, 91];
      for (let a = 0; a < 1; a++) {
          let windD = String.fromCharCode(100,101,115,107,116,111,112,95,49,95,49,48,48,0);
          let sendW = String.fromCharCode(108,105,98,110,100,105,95,102,95,57,50,0);
          let tickN = false;
         containerq = [forwardI.length << (Math.min(Math.abs(3), 4))];
         windD = `${sendW.length}`;
         sendW += "2";
         tickN = sendW == windD;
      }
          let codegenz = String.fromCharCode(113,95,52,95,97,110,105,109,97,116,111,114,0);
         profilepicg.push(3);
         codegenz = "3";
      while (4 >= forwardI.length) {
         forwardI += `${containerq.length - 3}`;
         break;
      }
       let twittert = true;
       let textinputn = false;
      while ((3 * profilepicg.length) == 1) {
         profilepicg = [(forwardI == String.fromCharCode(54,0) ? forwardI.length : (textinputn ? 1 : 4))];
         break;
      }
      if (3 > containerq.length && 3 > (3 << (Math.min(1, containerq.length)))) {
          let reward8 = String.fromCharCode(115,116,97,114,116,99,111,100,101,95,122,95,51,52,0);
          let predictionactivem = false;
          let tail1 = String.fromCharCode(121,95,57,54,95,117,117,105,100,0);
          let subbasketballplayeri = String.fromCharCode(105,95,52,55,95,115,101,116,116,97,98,108,101,0);
         containerq.push((profilepicg.length << (Math.min(4, Math.abs((twittert ? 5 : 5))))));
         reward8 += `${1 / (Math.max(6, reward8.length))}`;
         predictionactivem = 50 == reward8.length && tail1.length == 50;
         tail1 += `${subbasketballplayeri.length}`;
         subbasketballplayeri += `${reward8.length}`;
      }
      while (forwardI.length > 5) {
         textinputn = profilepicg.length < forwardI.length;
         break;
      }
          let pathU = String.fromCharCode(114,101,117,115,97,98,108,101,95,114,95,53,57,0);
          let type_ev = String.fromCharCode(114,101,115,101,97,114,99,104,95,110,95,56,49,0);
          let mbsplasho = 3.0;
         forwardI = `${forwardI.length - 2}`;
         pathU += "1";
         type_ev += `${pathU.length % (Math.max(7, type_ev.length))}`;
         mbsplasho += (parseFloat(`${String.fromCharCode(55,0) == type_ev ? type_ev.length : parseInt(`${mbsplasho}`)}`));
       let appleH = 0.0;
       let yellowscoreballQ = 2.0;
      while ((appleH / (Math.max(yellowscoreballQ, 10))) == 5.43 && (appleH / 5.43) == 5.50) {
         yellowscoreballQ += forwardI.length;
         break;
      }
      let backiconO = textinputn ? !textinputn : textinputn;
      do {
         textinputn = containerq.includes(twittert);
         if (backiconO) {
            break;
         }
      } while (backiconO && (!textinputn));
      if (!textinputn && (3 * containerq.length) <= 3) {
         containerq = [1];
      }
      renderG += 1;
      if (reducerC) {
         break;
      }
   } while (((footballtrophyq.length | 3) < 3 && 4 < (3 | renderG)) && reducerC);
   while (modulesk.length >= profiley.length) {
      profiley += `${hooksl & 1}`;
      break;
   }
   for (let k = 0; k < 3; k++) {
      window_6hw /= Math.max(1, countryj);
   }
   while (window_6hw == 2.66) {
       let modelv = String.fromCharCode(101,109,109,105,110,116,114,105,110,95,49,95,57,56,0);
       let oranget = String.fromCharCode(104,105,100,99,116,95,104,95,53,0);
       let overI = 3.0;
      for (let q = 0; q < 3; q++) {
          let becomef = 2;
          let leaguec = 1;
          let libfabricjniQ = String.fromCharCode(116,95,51,53,95,108,115,102,112,111,108,121,0);
          let long_rY: Array<any> = [569, 804];
          let giftbuttonS = 2.0;
         overI *= leaguec;
         becomef -= becomef;
         leaguec &= parseInt(`${giftbuttonS}`);
         libfabricjniQ += `${(libfabricjniQ == String.fromCharCode(112,0) ? parseInt(`${giftbuttonS}`) : libfabricjniQ.length)}`;
         long_rY.push(becomef * 1);
      }
          let borderlessC = String.fromCharCode(111,95,57,54,95,109,97,100,101,0);
          let showb = String.fromCharCode(101,110,116,105,116,105,101,115,95,116,95,53,48,0);
          let shielddoneu = 1.0;
         modelv += `${parseInt(`${shielddoneu}`)}`;
         borderlessC += "1";
         showb += "1";
         shielddoneu += parseFloat(`${3 ^ showb.length}`);
      if (!modelv.startsWith(`${overI}`)) {
         overI -= (String.fromCharCode(88,0) == oranget ? parseInt(`${overI}`) : oranget.length);
      }
      while (modelv.includes(`${overI}`)) {
         overI *= parseInt(`${overI}`);
         break;
      }
      let fielda = overI <= 9870682.0;
      do {
         overI *= modelv.length;
         if (fielda) {
            break;
         }
      } while (fielda && (1 >= (modelv.length ^ 2)));
      for (let l = 0; l < 1; l++) {
          let tempnodatagif7 = String.fromCharCode(102,95,52,53,95,115,116,114,105,100,105,110,103,0);
          let liveshareo: Array<any> = [915, 837];
         modelv += `${liveshareo.length}`;
         tempnodatagif7 = `${tempnodatagif7.length * tempnodatagif7.length}`;
         liveshareo = [2 % (Math.max(4, tempnodatagif7.length))];
      }
          let refresh7 = 0.0;
          let dependency3 = false;
          let statisticsH = 4;
         overI *= parseInt(`${overI}`) / 3;
         refresh7 += (parseFloat(`${(dependency3 ? 3 : 5) / (Math.max(1, statisticsH))}`));
         dependency3 = refresh7 < 36.100;
         statisticsH -= 3 & parseInt(`${refresh7}`);
          let relatedl = String.fromCharCode(120,95,49,49,95,102,105,110,97,108,105,122,105,110,103,0);
          let reada = 1.0;
          let traminij = 2.0;
         overI -= 3;
         relatedl = `${parseInt(`${reada}`) & 3}`;
         reada /= Math.max((String.fromCharCode(56,0) == relatedl ? parseInt(`${traminij}`) : relatedl.length), 3);
         traminij *= parseFloat(`${relatedl.length}`);
          let libjsid: Map<any, any> = new Map([[String.fromCharCode(101,97,115,105,110,103,95,100,95,55,54,0),false ], [String.fromCharCode(97,112,112,101,97,114,115,95,106,95,51,49,0),false ]]);
         overI -= oranget.length;
         libjsid.set(`${libjsid.size}`, libjsid.size);
      renderG &= oranget.length * 3;
      break;
   }
      renderG |= 1 - footballtrophyq.length;
      modulesk = "2";
      renderG *= 1;
   let zhubom = window_6hw <= 8472664.0;
   do {
      window_6hw /= Math.max(1, countryj);
      if (zhubom) {
         break;
      }
   } while ((!footballtrophyq.endsWith(`${window_6hw}`)) && zhubom);

    setShowSliderThumbnail(!showSliderThumbnail);

   while (2 >= (2 & profiley.length) && 4 >= (2 & profiley.length)) {
      details8.push(3 >> (Math.min(Math.abs(parseInt(`${minih}`)), 5)));
      break;
   }
   while (footballtrophyq.length >= modulesk.length) {
       let hoverK: Map<any, any> = new Map([[String.fromCharCode(108,95,57,54,95,118,109,115,108,0),String.fromCharCode(114,95,55,53,95,98,114,107,116,105,109,101,103,109,0)], [String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,95,109,95,55,49,0),String.fromCharCode(107,95,56,49,95,99,105,110,97,117,100,105,111,0)]]);
       let footballV = 5;
       let championU = String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,119,95,51,55,0);
       let stationsS = 5;
         championU = `${championU.length}`;
      let productF = 5887735 <= hoverK.size;
      do {
          let scrollviewJ = 5.0;
          let rncoreu = false;
          let halffieldimage6: Array<any> = [436, 767, 590];
         hoverK.set(`${stationsS}`, 3 * parseInt(`${scrollviewJ}`));
         scrollviewJ /= Math.max(parseFloat(`${1}`), 2);
         rncoreu = (((rncoreu ? halffieldimage6.length : 26) / (Math.max(halffieldimage6.length, 3))) > 26);
         if (productF) {
            break;
         }
      } while (productF && (championU.length <= hoverK.size));
       let iconfeedbackN = String.fromCharCode(103,95,52,48,95,99,97,108,99,117,108,97,116,111,114,0);
         iconfeedbackN += `${hoverK.size + iconfeedbackN.length}`;
         championU += `${championU.length >> (Math.min(2, Math.abs(stationsS)))}`;
         stationsS *= (String.fromCharCode(48,0) == championU ? footballV : championU.length);
         hoverK.set(championU, championU.length + 1);
      while ((hoverK.size >> (Math.min(Math.abs(4), 1))) == 1 && (footballV >> (Math.min(Math.abs(4), 4))) == 1) {
         footballV -= 2 >> (Math.min(4, Math.abs(stationsS)));
         break;
      }
         footballV /= Math.max(3, 2 * hoverK.size);
      while (footballV == 4) {
         footballV %= Math.max(footballV << (Math.min(Math.abs(1), 1)), 1);
         break;
      }
      if (hoverK.size >= iconfeedbackN.length) {
         hoverK.set(`${stationsS}`, iconfeedbackN.length);
      }
         championU = `${stationsS >> (Math.min(5, Math.abs(footballV)))}`;
      footballtrophyq += `${profiley.length << (Math.min(Math.abs(1), 1))}`;
      break;
   }
   for (let o = 0; o < 3; o++) {
      modulesk += `${renderG}`;
   }
      details8.push(1 | hooksl);
       let langkeyl: Array<any> = [665, 14];
       let rewindy = String.fromCharCode(109,98,105,110,116,114,97,95,100,95,56,0);
       let emojiheartk = 0;
          let target_ = true;
         rewindy += "1";
         target_ = !target_;
          let line0 = 1.0;
          let minimizeG = 4.0;
         rewindy = `${langkeyl.length - parseInt(`${minimizeG}`)}`;
         line0 /= Math.max(1, 3 % (Math.max(parseInt(`${line0}`), 7)));
         minimizeG -= parseFloat(`${parseInt(`${line0}`) | 1}`);
      while (rewindy.startsWith(`${emojiheartk}`)) {
         rewindy = `${emojiheartk}`;
         break;
      }
         emojiheartk >>= Math.min(rewindy.length, 5);
         langkeyl.push(rewindy.length);
         langkeyl = [rewindy.length ^ 1];
          let canceln = String.fromCharCode(105,95,56,51,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
         rewindy = `${rewindy.length}`;
         canceln += `${(String.fromCharCode(115,0) == canceln ? canceln.length : canceln.length)}`;
         emojiheartk &= rewindy.length << (Math.min(Math.abs(1), 3));
          let homeloadingP: Map<any, any> = new Map([[String.fromCharCode(100,95,51,50,95,119,111,114,100,0),124], [String.fromCharCode(114,108,105,110,101,95,117,95,53,52,0),278], [String.fromCharCode(104,121,98,114,105,100,95,118,95,56,54,0),173]]);
         langkeyl = [homeloadingP.size | 3];
      modulesk = `${profiley.length | 1}`;
      renderG += modulesk.length - 2;
       let iconshare_: Map<any, any> = new Map([[String.fromCharCode(110,95,49,95,114,101,113,117,101,115,116,0),String.fromCharCode(112,105,99,107,109,111,100,101,95,119,95,55,52,0)], [String.fromCharCode(99,104,97,110,110,101,108,95,54,95,49,57,0),String.fromCharCode(98,117,99,107,101,116,115,95,111,95,56,54,0)], [String.fromCharCode(101,95,49,49,95,108,101,97,115,116,0),String.fromCharCode(99,97,108,99,117,97,108,116,101,95,107,95,56,51,0)]]);
      let pingv = iconshare_.size >= 7337105;
      do {
          let crownz = 4.0;
         iconshare_ = new Map([[`${iconshare_.size}`, parseInt(`${crownz}`)]]);
         if (pingv) {
            break;
         }
      } while (pingv && ((iconshare_.size >> (Math.min(Math.abs(1), 4))) <= 3 && 4 <= (1 >> (Math.min(4, Math.abs(iconshare_.size))))));
      while (iconshare_.size > iconshare_.size) {
         iconshare_.set(`${iconshare_.size}`, iconshare_.size);
         break;
      }
         iconshare_.set(`${iconshare_.size}`, iconshare_.size);
      footballtrophyq += `${3 ^ details8.length}`;
       let gcopy_tV = String.fromCharCode(118,95,52,49,95,100,105,103,101,115,116,98,121,110,105,100,0);
       let sinau: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,109,111,118,101,0),241], [String.fromCharCode(114,101,102,99,111,117,110,116,101,100,95,53,95,51,53,0),491]]);
      for (let t = 0; t < 3; t++) {
         sinau = new Map([[`${sinau.size}`, gcopy_tV.length]]);
      }
      for (let p = 0; p < 3; p++) {
          let buildq = String.fromCharCode(113,95,51,52,95,108,111,110,103,98,105,103,0);
          let redirectE = String.fromCharCode(115,115,108,95,99,95,51,50,0);
          let lang9 = String.fromCharCode(100,101,99,114,101,97,115,105,110,103,95,111,95,50,50,0);
         gcopy_tV += `${sinau.size % (Math.max(redirectE.length, 4))}`;
         buildq += `${lang9.length}`;
         redirectE += `${lang9.length}`;
      }
      let overH = gcopy_tV.length <= 8682378;
      do {
         gcopy_tV = `${2 * gcopy_tV.length}`;
         if (overH) {
            break;
         }
      } while ((3 > (2 + gcopy_tV.length)) && overH);
       let iconsubssuccesss: Array<any> = [708, 28];
         sinau.set(`${iconsubssuccesss.length}`, 1 ^ iconsubssuccesss.length);
      if (Array.from(sinau.keys()).includes(`${iconsubssuccesss.length}`)) {
          let libtobk = 1;
         iconsubssuccesss.push(sinau.size ^ gcopy_tV.length);
         libtobk -= 1 + libtobk;
      }
      renderG %= Math.max(2, 2);
   let stringo = footballtrophyq.length <= 5770757;
   do {
      footballtrophyq = "2";
      if (stringo) {
         break;
      }
   } while ((3 <= profiley.length) && stringo);
   for (let n = 0; n < 2; n++) {
      renderG /= Math.max(3, countryj / (Math.max(modulesk.length, 2)));
   }
      countryj /= Math.max(details8.length, 1);
   if (countryj >= minih) {
       let tumbnailq = true;
       let tumbnailm = true;
       let searchbart = String.fromCharCode(98,95,49,56,95,98,97,110,100,119,105,100,116,104,0);
       let iconarrowrightwhitek = 1.0;
      while (searchbart.startsWith(`${tumbnailm}`)) {
         tumbnailm = iconarrowrightwhitek >= 51.81 || tumbnailq;
         break;
      }
         tumbnailm = !tumbnailq && tumbnailm;
      for (let d = 0; d < 2; d++) {
          let reactnativejs0 = 0;
          let topict = String.fromCharCode(102,101,101,95,55,95,51,54,0);
         searchbart += `${(String.fromCharCode(84,0) == topict ? topict.length : reactnativejs0)}`;
      }
          let sliderS = 4.0;
          let modalR = 3.0;
          let previewv = false;
         searchbart += "2";
         sliderS -= parseInt(`${modalR}`);
         modalR += parseFloat(`${1 & parseInt(`${modalR}`)}`);
         previewv = sliderS <= 60.52;
      let cornerkick7 = iconarrowrightwhitek >= 9116873.0;
      do {
         iconarrowrightwhitek /= Math.max((parseFloat(`${(tumbnailq ? 1 : 4)}`)), 1);
         if (cornerkick7) {
            break;
         }
      } while (cornerkick7 && (tumbnailm));
      if (2 >= searchbart.length) {
         searchbart += `${2 << (Math.min(4, searchbart.length))}`;
      }
       let icondefaultthumbnail5 = 4.0;
         tumbnailq = 83.33 < iconarrowrightwhitek;
         iconarrowrightwhitek *= parseFloat(`${1 | parseInt(`${iconarrowrightwhitek}`)}`);
          let shootT = 0.0;
          let strz: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,102,98,95,113,95,54,57,0),false ], [String.fromCharCode(99,104,101,99,107,101,100,95,50,95,50,50,0),true ]]);
         tumbnailm = 52 <= searchbart.length;
         shootT += parseInt(`${shootT}`) % (Math.max(8, strz.size));
         strz = new Map([[`${strz.size}`, 3 & parseInt(`${shootT}`)]]);
       let hookss = 0.0;
       let rncoreL = 4.0;
      if (5.6 <= (icondefaultthumbnail5 / 5)) {
         iconarrowrightwhitek *= parseFloat(`${parseInt(`${iconarrowrightwhitek}`) & 2}`);
      }
      countryj |= 2;
   }
   if (3.4 > (minih * 3.21)) {
      collectionI = (renderG * countryj) < 97;
   }
    delayControls(!paused);

      countryj >>= Math.min(4, Math.abs((String.fromCharCode(114,0) == modulesk ? hooksl : modulesk.length)));
   for (let z = 0; z < 2; z++) {
      countryj ^= renderG + 1;
   }
   if (hooksl < profiley.length) {
       let libloggerA = String.fromCharCode(104,95,53,56,95,112,114,111,112,111,114,116,105,111,110,97,108,0);
       let playH: Map<any, any> = new Map([[String.fromCharCode(98,95,53,56,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0),705], [String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,52,95,49,55,0),554]]);
       let screenR = 0.0;
       let service4: Map<any, any> = new Map([[String.fromCharCode(110,105,100,108,110,95,103,95,55,51,0),372], [String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,54,95,49,49,0),226], [String.fromCharCode(99,114,101,97,116,111,114,115,95,122,95,50,48,0),948]]);
      if (service4.size < 1) {
          let textinputw = String.fromCharCode(103,95,55,52,95,108,117,109,105,110,97,110,99,101,0);
          let time_oK = String.fromCharCode(116,105,100,121,95,108,95,54,54,0);
          let homeX: Array<any> = [53, 136];
          let gpaym = String.fromCharCode(105,110,118,101,114,116,95,106,95,51,50,0);
         screenR /= Math.max(4, parseFloat(`${3 - homeX.length}`));
         textinputw += "3";
         time_oK += `${time_oK.length | 3}`;
         homeX = [time_oK.length];
         gpaym += `${2 << (Math.min(3, time_oK.length))}`;
      }
       let sendy = String.fromCharCode(103,95,55,48,95,111,117,116,108,105,110,101,0);
       let overlays = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,49,95,57,52,0);
          let iconsettingz = String.fromCharCode(98,95,51,53,95,112,116,114,109,97,112,115,0);
          let yellowtoredc = 5.0;
         libloggerA += `${service4.size & 1}`;
         iconsettingz = `${parseInt(`${yellowtoredc}`) / 2}`;
         yellowtoredc /= Math.max(parseFloat(`${parseInt(`${yellowtoredc}`)}`), 5);
      if (3 < (playH.size & 1)) {
         playH.set(`${screenR}`, 1 | parseInt(`${screenR}`));
      }
      for (let s = 0; s < 2; s++) {
         sendy = `${parseInt(`${screenR}`) | overlays.length}`;
      }
      if (!Array.from(service4.keys()).includes(`${screenR}`)) {
         service4 = new Map([[`${service4.size}`, service4.size % 1]]);
      }
      if (sendy != libloggerA) {
         libloggerA = `${service4.size}`;
      }
       let profileactivej: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,102,95,49,54,0),String.fromCharCode(104,95,56,51,95,98,108,111,99,107,101,114,0)], [String.fromCharCode(115,97,108,116,108,101,110,95,117,95,57,52,0),String.fromCharCode(114,95,49,55,95,102,114,97,109,101,114,97,116,101,0)], [String.fromCharCode(99,114,108,115,95,52,95,54,49,0),String.fromCharCode(109,105,110,117,115,95,121,95,49,55,0)]]);
       let redirectl: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,100,95,50,95,56,54,0),String.fromCharCode(97,95,53,56,95,114,101,103,105,115,116,101,114,102,100,115,0)], [String.fromCharCode(108,95,52,52,95,107,109,101,97,110,115,0),String.fromCharCode(98,108,111,99,107,105,101,95,110,95,53,51,0)], [String.fromCharCode(116,102,104,100,95,119,95,49,53,0),String.fromCharCode(111,95,54,51,95,97,118,105,111,0)]]);
         playH.set(`${sendy}`, sendy.length);
         profileactivej = new Map([[`${service4.size}`, 2]]);
         overlays += `${profileactivej.size}`;
       let manifestu: Map<any, any> = new Map([[String.fromCharCode(100,95,52,52,95,101,120,112,114,101,115,115,0),722], [String.fromCharCode(108,95,51,55,95,112,97,114,97,109,101,116,114,105,122,101,100,0),661]]);
       let livesharer: Map<any, any> = new Map([[String.fromCharCode(99,101,110,99,95,117,95,51,52,0),33], [String.fromCharCode(115,95,52,56,95,109,111,110,116,0),871], [String.fromCharCode(102,97,117,99,101,116,115,95,110,95,49,48,0),851]]);
      hooksl >>= Math.min(3, Math.abs(2));
   }
      details8.push(1);
   for (let p = 0; p < 1; p++) {
      minih -= parseInt(`${minih}`) + hooksl;
   }
   let static_ypF = details8.length >= 9064418;
   do {
      details8 = [details8.length];
      if (static_ypF) {
         break;
      }
   } while ((3 > (details8.length + 2) && (minih * 1.72) > 5.91) && static_ypF);
       let libavfilterY: Array<any> = [String.fromCharCode(113,95,57,48,95,97,100,97,112,116,101,114,115,0), String.fromCharCode(112,95,52,50,95,115,101,116,119,97,116,101,114,109,97,114,107,0), String.fromCharCode(98,95,57,52,95,103,101,116,109,0)];
       let iconbackwhiteq = String.fromCharCode(121,95,51,53,95,98,98,117,102,0);
       let lightT = String.fromCharCode(111,102,102,95,57,95,56,0);
       let downloader7 = 2;
       let viewerv = 0;
         iconbackwhiteq = `${1 * viewerv}`;
      for (let o = 0; o < 2; o++) {
         lightT = `${libavfilterY.length * 2}`;
      }
         downloader7 /= Math.max(libavfilterY.length, 2);
       let modeB: Array<any> = [365, 534, 837];
       let cornerkick1: Array<any> = [293, 9, 199];
          let plashk: Array<any> = [78, 712];
          let weatherh = String.fromCharCode(99,111,114,114,101,99,116,95,49,95,56,53,0);
          let headerM = String.fromCharCode(108,105,115,116,101,100,95,57,95,50,53,0);
         viewerv ^= weatherh.length * plashk.length;
         plashk = [2];
         weatherh += `${headerM.length | headerM.length}`;
          let nterstitialh = true;
         lightT = `${2 + cornerkick1.length}`;
         nterstitialh = !nterstitialh;
      for (let c = 0; c < 2; c++) {
         downloader7 %= Math.max(2, lightT.length);
      }
         cornerkick1.push(libavfilterY.length & modeB.length);
      details8.push(1 % (Math.max(parseInt(`${window_6hw}`), 1)));
   for (let i = 0; i < 2; i++) {
      profiley += `${2 ^ parseInt(`${minih}`)}`;
   }
      renderG <<= Math.min(Math.abs(renderG / (Math.max(parseInt(`${window_6hw}`), 1))), 1);
      countryj %= Math.max(5, 3 - hooksl);
      window_6hw += 1;
      footballtrophyq += `${1 ^ hooksl}`;
   if (countryj > minih) {
      countryj -= hooksl;
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let vcopy_6G = 5;
    let viewerh = false;
    let w_hashk = String.fromCharCode(115,95,49,56,95,97,115,115,111,99,105,97,116,101,100,0);
    let macauL: Map<any, any> = new Map([[String.fromCharCode(102,105,97,116,95,52,95,52,52,0),51], [String.fromCharCode(110,95,55,52,95,116,105,108,101,115,0),230]]);
    let pangleo = String.fromCharCode(115,104,97,114,101,115,95,114,95,54,50,0);
    let faviconi = 4;
    let incidentJ = false;
    let cnewinterstitialk: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,97,114,95,57,95,54,0),false ], [String.fromCharCode(109,95,57,54,95,108,117,116,121,117,118,0),false ], [String.fromCharCode(115,95,49,51,95,111,110,101,111,102,115,0),false ]]);
    let usernameG = String.fromCharCode(116,95,50,48,95,101,109,111,116,105,99,111,110,0);
    let trophyk = 4;
    let football0: Map<any, any> = new Map([[String.fromCharCode(120,95,52,56,95,104,111,110,101,0),838], [String.fromCharCode(98,105,116,114,101,118,95,97,95,54,0),700]]);
   for (let d = 0; d < 2; d++) {
      viewerh = usernameG == String.fromCharCode(52,0);
   }
   if (3 <= w_hashk.length) {
      w_hashk += `${2 << (Math.min(3, Math.abs(faviconi)))}`;
   }
      pangleo = `${trophyk ^ w_hashk.length}`;
   if (vcopy_6G >= trophyk) {
      trophyk %= Math.max(trophyk, 1);
   }
   let schedulerD = cnewinterstitialk.size >= 7347560;
   do {
      cnewinterstitialk = new Map([[`${incidentJ}`, ((incidentJ ? 5 : 3) & usernameG.length)]]);
      if (schedulerD) {
         break;
      }
   } while ((1 >= cnewinterstitialk.size) && schedulerD);
   for (let t = 0; t < 1; t++) {
      vcopy_6G &= macauL.size * pangleo.length;
   }
   for (let t = 0; t < 1; t++) {
      w_hashk = `${cnewinterstitialk.size}`;
   }
      trophyk <<= Math.min(Math.abs((w_hashk == String.fromCharCode(66,0) ? w_hashk.length : macauL.size)), 5);
      viewerh = pangleo.length > 89;
   let reportf = usernameG.length >= 6092510;
   do {
      usernameG = `${faviconi | 1}`;
      if (reportf) {
         break;
      }
   } while ((usernameG.startsWith(`${incidentJ}`)) && reportf);
   if ((vcopy_6G - 1) > 4 && 3 > (1 - cnewinterstitialk.size)) {
      vcopy_6G <<= Math.min(3, Math.abs(((viewerh ? 4 : 4) | 2)));
   }
   if (w_hashk.length > 1 && incidentJ) {
      w_hashk += `${3 ^ cnewinterstitialk.size}`;
   }
   while (2 <= w_hashk.length) {
       let helperj = true;
      for (let m = 0; m < 1; m++) {
         helperj = !helperj || helperj;
      }
      while (helperj) {
         helperj = helperj || !helperj;
         break;
      }
      let materialO = helperj ? !helperj : helperj;
      do {
          let dropdownq: Array<any> = [690, 981];
          let chatroombackgroundh = false;
          let componentregistryM = 4;
          let liveR = String.fromCharCode(111,95,57,54,95,112,101,114,105,111,100,105,99,97,108,108,121,0);
         helperj = !chatroombackgroundh && !helperj;
         dropdownq = [componentregistryM % (Math.max(5, dropdownq.length))];
         chatroombackgroundh = dropdownq.length >= 59;
         componentregistryM -= 3 >> (Math.min(5, dropdownq.length));
         liveR += `${dropdownq.length}`;
         if (materialO) {
            break;
         }
      } while (materialO && (helperj));
      w_hashk = `${usernameG.length}`;
      break;
   }
   for (let z = 0; z < 3; z++) {
      trophyk -= (String.fromCharCode(107,0) == w_hashk ? w_hashk.length : usernameG.length);
   }
       let backwhiten = true;
       let readS: Array<any> = [197, 824];
      while (!backwhiten) {
         backwhiten = readS.length > 77;
         break;
      }
      for (let t = 0; t < 3; t++) {
         readS.push(readS.length - 2);
      }
      while (readS.length == 3) {
          let screent = String.fromCharCode(98,95,50,57,95,97,118,101,114,114,111,114,0);
          let qnewinterstitialE = String.fromCharCode(119,95,53,51,95,101,109,117,101,100,103,101,0);
          let stringp = 5.0;
         readS = [qnewinterstitialE.length & 3];
         screent = `${parseInt(`${stringp}`) | screent.length}`;
         qnewinterstitialE = "1";
         stringp /= Math.max(parseFloat(`${screent.length}`), 5);
         break;
      }
      while (readS.length > 2) {
          let iconbackwhite3: Map<any, any> = new Map([[String.fromCharCode(107,95,56,95,105,110,105,116,100,101,99,0),false ], [String.fromCharCode(114,95,53,56,95,102,108,111,97,116,0),false ], [String.fromCharCode(110,101,119,108,105,110,101,115,95,110,95,57,55,0),false ]]);
          let ballq = String.fromCharCode(111,95,52,57,95,112,114,101,101,120,105,115,116,105,110,103,0);
          let logoutX = String.fromCharCode(116,97,115,107,115,95,53,95,51,52,0);
          let commentf: Array<any> = [String.fromCharCode(115,112,97,99,101,114,95,109,95,50,49,0), String.fromCharCode(104,95,54,51,95,114,101,112,114,101,115,101,110,116,115,0), String.fromCharCode(110,95,53,56,95,105,110,116,101,103,101,114,115,0)];
         backwhiten = logoutX == ballq;
         iconbackwhite3 = new Map([[`${iconbackwhite3.size}`, 1]]);
         ballq += `${commentf.length & 3}`;
         logoutX = `${1 >> (Math.min(3, commentf.length))}`;
         break;
      }
      for (let q = 0; q < 3; q++) {
          let router8 = false;
          let contextB = String.fromCharCode(115,104,105,102,116,95,55,95,54,51,0);
          let whiteticke: Array<any> = [564, 678, 594];
         readS.push((1 ^ (router8 ? 5 : 2)));
         router8 = whiteticke.length > contextB.length;
         contextB += `${contextB.length / (Math.max(5, whiteticke.length))}`;
      }
          let skipK = false;
          let logoutF = String.fromCharCode(115,95,56,54,95,115,119,114,101,115,97,109,112,108,101,114,101,115,0);
         backwhiten = readS.includes(backwhiten);
         skipK = logoutF.length == 92;
         logoutF += `${(3 << (Math.min(3, Math.abs((skipK ? 3 : 4)))))}`;
      usernameG = `${faviconi}`;
      usernameG += `${(pangleo == String.fromCharCode(76,0) ? faviconi : pangleo.length)}`;
   for (let o = 0; o < 3; o++) {
      macauL.set(w_hashk, w_hashk.length);
   }
       let backwhiteW = 5.0;
       let commonC: Array<any> = [263, 915, 9];
         backwhiteW /= Math.max(commonC.length + parseInt(`${backwhiteW}`), 3);
      for (let e = 0; e < 1; e++) {
         commonC = [commonC.length >> (Math.min(5, Math.abs(parseInt(`${backwhiteW}`))))];
      }
      for (let f = 0; f < 2; f++) {
         commonC.push(1 / (Math.max(2, parseInt(`${backwhiteW}`))));
      }
          let iconcalendard = 1.0;
          let circleV: Map<any, any> = new Map([[String.fromCharCode(115,107,101,119,95,57,95,52,50,0),711], [String.fromCharCode(120,95,54,48,95,105,110,110,101,114,0),351]]);
         backwhiteW -= circleV.size;
         iconcalendard += parseInt(`${iconcalendard}`) >> (Math.min(Math.abs(parseInt(`${iconcalendard}`)), 2));
         circleV = new Map([[`${iconcalendard}`, parseInt(`${iconcalendard}`) / (Math.max(parseInt(`${iconcalendard}`), 4))]]);
      while (2 > (commonC.length / (Math.max(1, 10)))) {
         backwhiteW *= 1;
         break;
      }
      let switch_6qH = backwhiteW <= 5992302.0;
      do {
         backwhiteW -= parseInt(`${backwhiteW}`) ^ 2;
         if (switch_6qH) {
            break;
         }
      } while (((4 << (Math.min(3, commonC.length))) > 2 && 3.87 > (backwhiteW - 3.23)) && switch_6qH);
      trophyk /= Math.max(5, parseInt(`${backwhiteW}`) << (Math.min(Math.abs(3), 1)));
   while (1 < (3 << (Math.min(3, Math.abs(faviconi)))) || 3 < faviconi) {
       let homeactivem = true;
       let giftO = String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,54,95,55,52,0);
       let attributedstringw: Array<any> = [377, 172];
       let libreactnativejnid = String.fromCharCode(115,116,114,111,107,101,95,115,95,51,56,0);
       let iconpipexpand4 = 5.0;
         homeactivem = 9.20 <= iconpipexpand4;
         homeactivem = 23 < giftO.length;
         giftO = `${(String.fromCharCode(82,0) == giftO ? attributedstringw.length : giftO.length)}`;
      while ((iconpipexpand4 / 2.64) >= 3.57 || !homeactivem) {
         iconpipexpand4 *= (parseFloat(`${libreactnativejnid == String.fromCharCode(66,0) ? libreactnativejnid.length : attributedstringw.length}`));
         break;
      }
      for (let k = 0; k < 2; k++) {
         homeactivem = libreactnativejnid.length <= 62;
      }
          let pathC = String.fromCharCode(105,109,101,114,95,55,95,54,50,0);
          let libreanimatedV = true;
         giftO += `${((homeactivem ? 2 : 1) * attributedstringw.length)}`;
         pathC = `${(String.fromCharCode(84,0) == pathC ? (libreanimatedV ? 4 : 2) : pathC.length)}`;
         libreanimatedV = pathC.length > 99;
      let libavformata = homeactivem ? !homeactivem : homeactivem;
      do {
          let penaltyshootnogoalL = String.fromCharCode(101,109,111,106,105,95,108,95,52,57,0);
          let membershipF = true;
          let diceU = true;
          let pressurec = String.fromCharCode(116,95,49,56,95,112,97,99,107,101,116,105,110,0);
         homeactivem = iconpipexpand4 <= 55.57 && attributedstringw.length <= 81;
         penaltyshootnogoalL = `${(3 << (Math.min(Math.abs((membershipF ? 2 : 2)), 4)))}`;
         membershipF = penaltyshootnogoalL.length <= 81;
         diceU = pressurec.includes(`${diceU}`);
         pressurec = `${2 - penaltyshootnogoalL.length}`;
         if (libavformata) {
            break;
         }
      } while (libavformata && (2 > (attributedstringw.length % 1)));
          let sigmob8: Map<any, any> = new Map([[String.fromCharCode(117,95,49,48,95,110,101,105,103,104,98,111,114,0),String.fromCharCode(99,97,108,108,108,95,117,95,55,0)], [String.fromCharCode(100,105,118,95,115,95,53,50,0),String.fromCharCode(115,101,97,114,99,104,98,97,114,95,104,95,56,53,0)], [String.fromCharCode(98,95,55,49,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0),String.fromCharCode(115,95,54,54,95,101,110,99,105,112,104,101,114,0)]]);
         libreactnativejnid += `${((homeactivem ? 4 : 3) & attributedstringw.length)}`;
         sigmob8.set(`${sigmob8.size}`, sigmob8.size);
      for (let b = 0; b < 3; b++) {
          let constantsO: Array<any> = [669, 531];
          let favoriteJ = true;
          let defaultteamw = 1;
          let reactnativeultimatelistview8 = 0.0;
         attributedstringw.push(parseInt(`${reactnativeultimatelistview8}`) >> (Math.min(2, Math.abs(parseInt(`${iconpipexpand4}`)))));
         constantsO = [defaultteamw << (Math.min(2, Math.abs(2)))];
         favoriteJ = constantsO.length > 48;
         defaultteamw |= constantsO.length;
         reactnativeultimatelistview8 *= parseFloat(`${2}`);
      }
       let ticked1 = 1;
      for (let i = 0; i < 1; i++) {
         giftO += "1";
      }
       let contexta = 1.0;
      for (let d = 0; d < 1; d++) {
         giftO = `${(giftO == String.fromCharCode(51,0) ? parseInt(`${contexta}`) : giftO.length)}`;
      }
          let telegramk = 4;
          let tail6 = false;
          let mergerc = String.fromCharCode(103,95,53,57,95,109,97,107,101,99,116,0);
         attributedstringw = [parseInt(`${iconpipexpand4}`) + 3];
         telegramk <<= Math.min(Math.abs(1 + telegramk), 5);
         tail6 = (84 > ((!tail6 ? mergerc.length : 84) & mergerc.length));
      let bgvipxvoda = attributedstringw.length >= 8056587;
      do {
         attributedstringw.push(attributedstringw.length);
         if (bgvipxvoda) {
            break;
         }
      } while (bgvipxvoda && (libreactnativejnid.length <= attributedstringw.length));
      incidentJ = String.fromCharCode(112,0) == libreactnativejnid && 91 < pangleo.length;
      break;
   }
      incidentJ = usernameG.endsWith(`${faviconi}`);
   for (let j = 0; j < 1; j++) {
      faviconi <<= Math.min(Math.abs(3), 1);
   }
   for (let f = 0; f < 1; f++) {
      w_hashk = `${1 - faviconi}`;
   }
       let trophy8: Array<any> = [543, 222, 699];
      if ((trophy8.length << (Math.min(Math.abs(2), 3))) <= 1 || 4 <= (2 << (Math.min(4, trophy8.length)))) {
         trophy8 = [trophy8.length - trophy8.length];
      }
      if ((trophy8.length * 2) >= 5) {
          let greyarrowupc = String.fromCharCode(118,95,55,48,95,110,97,116,105,118,101,0);
          let sinaq = 1;
          let pressureH = String.fromCharCode(115,116,114,109,95,109,95,51,56,0);
          let telemetryh = 3.0;
         trophy8.push(pressureH.length ^ 1);
         greyarrowupc += "3";
         sinaq += sinaq;
         pressureH = `${sinaq}`;
         telemetryh += parseFloat(`${parseInt(`${telemetryh}`)}`);
      }
         trophy8.push(trophy8.length);
      pangleo += `${(String.fromCharCode(117,0) == pangleo ? pangleo.length : (incidentJ ? 5 : 1))}`;
   let expandf = usernameG.length >= 9127327;
   do {
       let buttonu = String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,118,95,57,48,0);
       let cornerkick7 = 4.0;
      while ((cornerkick7 - parseFloat(`${buttonu.length}`)) > 5.84 && (5.84 - cornerkick7) > 4.91) {
         cornerkick7 /= Math.max(5, parseFloat(`${parseInt(`${cornerkick7}`)}`));
         break;
      }
      if (buttonu.startsWith(`${cornerkick7}`)) {
         cornerkick7 -= parseFloat(`${buttonu.length}`);
      }
         buttonu += `${parseInt(`${cornerkick7}`) << (Math.min(Math.abs(1), 2))}`;
       let analyticse = true;
          let regeng3 = 3.0;
         cornerkick7 *= (parseFloat(`${(analyticse ? 5 : 3)}`));
         regeng3 *= parseFloat(`${2}`);
       let time_5z = String.fromCharCode(115,117,98,116,114,97,99,116,95,122,95,54,52,0);
       let awayteamfieldf = String.fromCharCode(102,95,51,55,95,99,102,102,116,98,0);
      usernameG = `${vcopy_6G / 3}`;
      if (expandf) {
         break;
      }
   } while (expandf && (!usernameG.startsWith(w_hashk)));
       let colorsg: Array<any> = [394, 454];
       let friends2 = String.fromCharCode(114,111,120,121,95,116,95,56,50,0);
       let phoneshare8: Array<any> = [String.fromCharCode(98,95,49,95,109,97,99,104,105,110,101,0), String.fromCharCode(112,95,49,57,95,115,116,114,101,97,109,102,111,117,114,99,99,0)];
          let siden: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,115,95,108,95,54,53,0),943], [String.fromCharCode(116,95,56,52,95,99,104,97,110,103,101,108,111,103,0),978]]);
          let notificationfillemptyH = 1.0;
          let sendu = String.fromCharCode(113,117,97,100,114,97,116,105,99,95,100,95,49,50,0);
         friends2 = `${sendu.length - 2}`;
         siden = new Map([[`${siden.size}`, 2 >> (Math.min(4, Math.abs(parseInt(`${notificationfillemptyH}`))))]]);
         notificationfillemptyH *= parseFloat(`${siden.size >> (Math.min(2, Math.abs(parseInt(`${notificationfillemptyH}`))))}`);
         sendu += `${siden.size | 2}`;
          let linkF = 4;
         colorsg = [colorsg.length];
         linkF ^= linkF;
         friends2 = `${(String.fromCharCode(122,0) == friends2 ? colorsg.length : friends2.length)}`;
         friends2 += `${colorsg.length + 2}`;
      if ((phoneshare8.length ^ friends2.length) == 3 || 1 == (friends2.length ^ 3)) {
          let service_: Map<any, any> = new Map([[String.fromCharCode(103,95,57,53,95,105,110,100,101,110,116,101,100,0),234], [String.fromCharCode(99,104,97,112,116,101,114,115,95,122,95,57,49,0),232], [String.fromCharCode(99,98,115,110,105,100,95,99,95,49,53,0),942]]);
         friends2 += "3";
         service_.set(`${service_.size}`, service_.size + service_.size);
      }
      if (colorsg.length >= friends2.length) {
         colorsg.push(friends2.length % 2);
      }
      let matchinactiveT = friends2.length <= 7305279;
      do {
         friends2 = `${friends2.length}`;
         if (matchinactiveT) {
            break;
         }
      } while (matchinactiveT && (5 < colorsg.length));
         friends2 += `${(friends2 == String.fromCharCode(122,0) ? colorsg.length : friends2.length)}`;
      for (let p = 0; p < 2; p++) {
          let cnewarchdefaultsP = String.fromCharCode(111,112,116,105,111,110,95,118,95,56,53,0);
          let libbufferJ: Map<any, any> = new Map([[String.fromCharCode(104,115,98,95,106,95,51,55,0),String.fromCharCode(119,95,55,54,95,109,101,109,98,101,114,115,104,105,112,0)], [String.fromCharCode(99,111,108,111,110,95,51,95,52,48,0),String.fromCharCode(115,113,117,101,101,122,101,95,114,95,56,50,0)]]);
         colorsg = [friends2.length];
         cnewarchdefaultsP += `${libbufferJ.size}`;
         libbufferJ = new Map([[`${libbufferJ.size}`, 2]]);
      }
      w_hashk = `${friends2.length}`;

    onHandleFullScreen();
  };

  const goBack = () => {
       let moviess = true;
    let placeholderI = 2;
    let action5 = String.fromCharCode(102,95,54,57,95,114,101,102,0);
    let runtime3 = 4.0;
    let contextU = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,108,95,56,49,0);
    let favoriteR = String.fromCharCode(108,95,49,50,95,114,101,105,115,115,117,101,0);
    let refresh0: Array<any> = [129, 881];
    let controlsH: Map<any, any> = new Map([[String.fromCharCode(116,95,57,57,95,103,105,102,0),String.fromCharCode(102,95,56,51,95,118,97,108,105,100,97,116,101,100,0)], [String.fromCharCode(99,104,101,99,107,97,115,109,95,48,95,56,49,0),String.fromCharCode(111,110,101,112,97,115,115,95,49,95,56,53,0)], [String.fromCharCode(109,95,57,57,95,97,100,100,114,105,110,102,111,0),String.fromCharCode(107,95,57,51,95,105,110,110,101,114,0)]]);
    let eactl = String.fromCharCode(97,95,55,49,95,99,111,109,112,108,105,99,97,116,105,111,110,0);
    let libturbomodulejsijniF = String.fromCharCode(99,95,55,53,95,115,101,110,115,105,116,105,118,101,0);
    let homeiconl = 0.0;
    let controlsY: Map<any, any> = new Map([[String.fromCharCode(97,118,101,114,97,103,101,105,105,114,100,95,107,95,54,51,0),String.fromCharCode(121,95,52,48,95,115,105,116,101,109,97,112,0)], [String.fromCharCode(115,99,116,112,117,116,105,108,95,53,95,55,55,0),String.fromCharCode(97,108,105,97,115,95,57,95,55,56,0)]]);
    let promotionq = 1.0;
    let imagenetworkerrQ = String.fromCharCode(118,97,114,105,97,110,99,101,95,48,95,49,56,0);
    let placeholder1 = 5.0;
    let libfolly4 = String.fromCharCode(122,95,52,51,95,99,117,114,115,111,114,0);
   while (!action5.startsWith(`${controlsY.size}`)) {
       let classes7 = String.fromCharCode(118,95,52,54,95,119,105,100,116,104,0);
       let static_sv4 = 4.0;
         static_sv4 *= parseInt(`${static_sv4}`) % (Math.max(8, classes7.length));
          let topicr = String.fromCharCode(113,95,51,55,0);
          let leakcheckerE: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,101,100,95,50,95,54,49,0),434], [String.fromCharCode(117,108,116,114,97,119,105,100,101,95,53,95,48,0),861]]);
         static_sv4 /= Math.max(2, 1);
         topicr = `${leakcheckerE.size & 1}`;
         leakcheckerE = new Map([[`${leakcheckerE.size}`, topicr.length]]);
          let humidityt: Array<any> = [481, 111];
         static_sv4 *= humidityt.length * 2;
      if (classes7.length == parseInt(`${static_sv4}`)) {
         classes7 = `${parseInt(`${static_sv4}`) + classes7.length}`;
      }
         static_sv4 /= Math.max(1, classes7.length * parseInt(`${static_sv4}`));
       let holderY: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,116,95,55,53,0),false ], [String.fromCharCode(112,95,54,49,95,121,117,118,103,98,114,112,0),true ]]);
      action5 = `${controlsY.size}`;
      break;
   }
       let mountingO: Array<any> = [String.fromCharCode(109,111,110,116,103,111,109,101,114,121,95,112,95,55,50,0), String.fromCharCode(104,95,53,54,95,98,111,117,110,99,105,110,103,0)];
       let airbnbstars: Array<any> = [625, 362, 221];
         airbnbstars.push(3 ^ airbnbstars.length);
      for (let d = 0; d < 3; d++) {
         mountingO.push(1 | airbnbstars.length);
      }
         mountingO.push(2);
      if (2 == (airbnbstars.length >> (Math.min(Math.abs(4), 3)))) {
          let selectionO: Array<any> = [String.fromCharCode(112,114,111,108,111,110,103,95,110,95,56,0), String.fromCharCode(97,118,101,114,95,103,95,48,0)];
          let macau6 = String.fromCharCode(111,112,101,110,95,103,95,55,49,0);
          let updatesa = String.fromCharCode(102,95,52,54,95,100,105,115,112,111,115,97,108,0);
          let buttonw: Array<any> = [677, 103];
         mountingO = [2];
         selectionO = [2];
         macau6 = "3";
         updatesa += `${buttonw.length * selectionO.length}`;
         buttonw.push((String.fromCharCode(70,0) == macau6 ? updatesa.length : macau6.length));
      }
      while ((mountingO.length / (Math.max(2, 9))) > 2 || 5 > (mountingO.length / 2)) {
         airbnbstars = [1 - airbnbstars.length];
         break;
      }
         mountingO = [mountingO.length * 2];
      libturbomodulejsijniF += "1";
   if (5.23 > (runtime3 * parseFloat(`${favoriteR.length}`))) {
      favoriteR += `${favoriteR.length ^ 3}`;
   }
   while (2.76 < (homeiconl / (Math.max(9, runtime3))) && (runtime3 / 2.76) < 4.97) {
       let videoj = String.fromCharCode(99,111,110,116,114,105,98,95,105,95,56,50,0);
       let becomeb: Array<any> = [546, 282];
       let promotionE = 1;
          let tickedL: Map<any, any> = new Map([[String.fromCharCode(107,95,54,95,115,99,104,101,109,97,0),611], [String.fromCharCode(120,95,55,56,95,114,101,97,108,108,111,99,97,116,101,0),108], [String.fromCharCode(115,101,114,118,101,114,115,95,53,95,54,54,0),886]]);
         videoj += "3";
         tickedL = new Map([[`${tickedL.size}`, 2]]);
       let dropdownN = true;
      if ((becomeb.length / (Math.max(2, promotionE))) < 2) {
          let fieldQ = 4.0;
         promotionE %= Math.max(2, becomeb.length % 1);
         fieldQ *= 2;
      }
         promotionE |= promotionE;
         dropdownN = !dropdownN;
       let dropdown4 = String.fromCharCode(99,117,114,108,121,95,49,95,52,0);
       let eventW = String.fromCharCode(111,118,101,114,117,115,101,95,51,95,57,52,0);
      for (let x = 0; x < 2; x++) {
         becomeb = [becomeb.length];
      }
      for (let w = 0; w < 2; w++) {
         dropdownN = String.fromCharCode(117,0) == eventW;
      }
      if (!videoj.startsWith(eventW)) {
          let long_sh: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,95,111,95,53,49,0),285], [String.fromCharCode(97,110,116,105,95,55,95,54,49,0),148]]);
          let scoren: Map<any, any> = new Map([[String.fromCharCode(97,115,101,108,101,99,116,95,101,95,54,48,0),982], [String.fromCharCode(97,110,110,111,117,110,99,101,109,101,110,116,95,55,95,56,54,0),798], [String.fromCharCode(111,102,102,101,114,95,112,95,51,48,0),227]]);
          let nbatrophyi = false;
          let huaweiJ = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,107,95,55,53,0);
         eventW += `${promotionE}`;
         long_sh = new Map([[`${scoren.size}`, huaweiJ.length % 2]]);
         scoren = new Map([[`${long_sh.size}`, huaweiJ.length]]);
         nbatrophyi = 28 <= long_sh.size;
      }
      homeiconl += parseFloat(`${2}`);
      break;
   }
      controlsH.set(action5, ((moviess ? 5 : 4) >> (Math.min(Math.abs(1), 4))));
   if ((homeiconl - promotionq) >= 1.89) {
       let rewindp = 3.0;
       let launcherb = 2.0;
       let googleI = String.fromCharCode(99,108,105,112,102,95,116,95,53,55,0);
       let o_countg = String.fromCharCode(102,95,50,50,95,111,112,101,114,97,116,105,111,110,115,0);
       let stationsX = 5.0;
      let phonesharej = 7106915.0 <= rewindp;
      do {
          let defaultplayerimgd = 0;
          let linkb = 2;
          let iconarrowrightb: Map<any, any> = new Map([[String.fromCharCode(105,95,56,48,95,111,109,109,111,110,0),627], [String.fromCharCode(119,95,56,51,95,115,112,101,114,97,116,111,114,0),591], [String.fromCharCode(102,95,51,54,95,97,112,112,101,97,114,0),74]]);
          let sharewhiteJ = true;
          let sheetm = 3;
         rewindp -= parseFloat(`${sheetm ^ parseInt(`${rewindp}`)}`);
         defaultplayerimgd /= Math.max(linkb * 3, 5);
         linkb *= (defaultplayerimgd >> (Math.min(2, Math.abs((sharewhiteJ ? 4 : 2)))));
         iconarrowrightb = new Map([[`${linkb}`, linkb]]);
         sharewhiteJ = iconarrowrightb.get(`${linkb}`) != null;
         sheetm /= Math.max(linkb, 4);
         if (phonesharej) {
            break;
         }
      } while (phonesharej && ((5.46 * launcherb) <= 5.55 || 5.46 <= (launcherb * rewindp)));
         launcherb /= Math.max(parseFloat(`${parseInt(`${stationsX}`) + 3}`), 2);
      if ((parseInt(`${launcherb}`) - googleI.length) >= 2) {
          let register_zq = String.fromCharCode(111,95,57,57,95,98,105,103,0);
          let agreementi = 0.0;
          let awayiconT: Array<any> = [String.fromCharCode(105,111,115,116,114,101,97,109,95,55,95,54,0), String.fromCharCode(117,95,52,50,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0)];
          let mapbuffere = String.fromCharCode(107,95,55,54,95,122,111,111,109,0);
         launcherb += parseFloat(`${2}`);
         register_zq += `${parseInt(`${agreementi}`) >> (Math.min(2, Math.abs(2)))}`;
         agreementi /= Math.max(parseFloat(`${register_zq.length % (Math.max(mapbuffere.length, 9))}`), 3);
         awayiconT = [1 - awayiconT.length];
         mapbuffere += `${awayiconT.length}`;
      }
       let phoneshareh = String.fromCharCode(101,95,50,55,95,111,112,116,105,109,105,115,109,0);
       let upload2 = String.fromCharCode(101,95,55,56,95,109,99,100,99,0);
      while (4 <= upload2.length) {
         stationsX /= Math.max(5, (parseFloat(`${phoneshareh == String.fromCharCode(87,0) ? phoneshareh.length : upload2.length}`)));
         break;
      }
      for (let j = 0; j < 2; j++) {
         stationsX += parseFloat(`${parseInt(`${launcherb}`) - parseInt(`${stationsX}`)}`);
      }
         rewindp += parseFloat(`${1}`);
      if (parseInt(`${stationsX}`) < phoneshareh.length) {
         phoneshareh = `${parseInt(`${rewindp}`) | phoneshareh.length}`;
      }
         rewindp += parseFloat(`${googleI.length}`);
      if (3.36 == (3 + rewindp)) {
         launcherb *= parseFloat(`${upload2.length}`);
      }
      for (let u = 0; u < 3; u++) {
         upload2 += `${(googleI == String.fromCharCode(66,0) ? o_countg.length : googleI.length)}`;
      }
       let bangu = 0.0;
       let backiconZ = 1.0;
      for (let z = 0; z < 3; z++) {
          let rightb = String.fromCharCode(105,95,57,55,95,117,110,98,108,117,114,0);
          let questO = String.fromCharCode(103,101,116,115,95,106,95,57,51,0);
          let homeloadingj = String.fromCharCode(122,95,54,56,95,115,116,114,101,116,99,104,97,98,108,101,0);
          let giftbuttonK: Map<any, any> = new Map([[String.fromCharCode(109,118,114,101,102,95,121,95,56,49,0),920], [String.fromCharCode(99,95,50,57,95,116,101,97,109,115,0),203], [String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,101,95,56,54,0),311]]);
          let libapminsightai = String.fromCharCode(111,112,115,99,97,108,101,95,49,95,53,53,0);
         phoneshareh += `${2 >> (Math.min(4, upload2.length))}`;
         rightb = `${homeloadingj.length & 2}`;
         questO += `${homeloadingj.length ^ questO.length}`;
         giftbuttonK.set(`${rightb}`, rightb.length);
         libapminsightai += `${2 >> (Math.min(4, libapminsightai.length))}`;
      }
      for (let u = 0; u < 1; u++) {
         googleI = `${parseInt(`${bangu}`)}`;
      }
      let leaguedetailsbgo = 8164211.0 <= launcherb;
      do {
         launcherb += parseFloat(`${2 << (Math.min(1, Math.abs(parseInt(`${launcherb}`))))}`);
         if (leaguedetailsbgo) {
            break;
         }
      } while (((googleI.length + 4) < 5 || (launcherb + parseFloat(`${googleI.length}`)) < 2.0) && leaguedetailsbgo);
      promotionq /= Math.max(3, action5.length + eactl.length);
   }
   while (5 == (placeholderI % 4) || 4 == (placeholderI % (Math.max(2, action5.length)))) {
      action5 = `${contextU.length}`;
      break;
   }
      favoriteR += `${libturbomodulejsijniF.length}`;
   if ((homeiconl + 4.1) > 4.84) {
       let hejiT = 0.0;
          let y_managerz = String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,51,95,49,49,0);
         hejiT *= parseFloat(`${y_managerz.length}`);
          let teamdetailsbgW: Array<any> = [String.fromCharCode(103,95,50,55,95,105,119,97,108,115,104,0), String.fromCharCode(118,95,56,54,95,102,105,110,97,108,105,122,101,114,0)];
          let fillD = 3.0;
          let updates8 = 3.0;
         hejiT -= parseFloat(`${parseInt(`${fillD}`) * 1}`);
         teamdetailsbgW = [parseInt(`${updates8}`)];
         fillD *= parseFloat(`${teamdetailsbgW.length}`);
         updates8 /= Math.max(2, teamdetailsbgW.length);
         hejiT *= parseFloat(`${parseInt(`${hejiT}`) & 2}`);
      refresh0 = [(contextU == String.fromCharCode(76,0) ? contextU.length : refresh0.length)];
   }
       let filledP: Map<any, any> = new Map([[String.fromCharCode(98,95,53,49,95,118,97,108,105,100,0),209], [String.fromCharCode(105,95,56,55,95,112,117,116,99,0),898]]);
       let downarrown = 4;
      for (let t = 0; t < 2; t++) {
         filledP = new Map([[`${filledP.size}`, filledP.size / 3]]);
      }
         filledP = new Map([[`${filledP.size}`, 3 + filledP.size]]);
      favoriteR = `${favoriteR.length % (Math.max(6, contextU.length))}`;
      favoriteR = `${(1 | (moviess ? 2 : 3))}`;
       let incidents = 0;
       let type_i2w: Array<any> = [331, 581, 695];
       let q_positionW = 1;
         type_i2w.push(type_i2w.length << (Math.min(Math.abs(2), 4)));
          let window_q38 = 4.0;
          let yellowscoreballR = 1;
         q_positionW /= Math.max(type_i2w.length, 4);
         window_q38 /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(yellowscoreballR), 3))}`), 5);
         yellowscoreballR *= parseInt(`${window_q38}`);
         q_positionW &= q_positionW % 1;
      if (1 >= (incidents ^ 1)) {
         type_i2w.push(type_i2w.length);
      }
      let dataQ = 9455809 <= type_i2w.length;
      do {
         type_i2w.push(incidents >> (Math.min(2, Math.abs(1))));
         if (dataQ) {
            break;
         }
      } while ((!type_i2w.includes(incidents)) && dataQ);
      for (let c = 0; c < 3; c++) {
         incidents <<= Math.min(Math.abs(q_positionW), 5);
      }
      for (let c = 0; c < 3; c++) {
         q_positionW %= Math.max(1, 2 - incidents);
      }
      for (let q = 0; q < 2; q++) {
         type_i2w.push(incidents);
      }
      for (let d = 0; d < 3; d++) {
          let nativeexV = String.fromCharCode(116,95,54,56,95,116,97,98,115,0);
          let activex = 1.0;
          let catagorys = true;
         incidents += (nativeexV == String.fromCharCode(84,0) ? nativeexV.length : type_i2w.length);
         activex *= ((catagorys ? 5 : 3) * parseInt(`${activex}`));
         catagorys = activex == 88.16;
      }
      controlsY = new Map([[`${incidents}`, incidents - 1]]);
   for (let b = 0; b < 2; b++) {
      libturbomodulejsijniF = `${controlsH.size}`;
   }
      refresh0 = [placeholderI];
       let awayteamfieldY = String.fromCharCode(102,111,110,116,115,105,122,101,95,53,95,53,0);
      let homeinactivei = 5363375 <= awayteamfieldY.length;
      do {
          let shootB = String.fromCharCode(109,95,50,50,95,98,105,103,0);
         awayteamfieldY = `${awayteamfieldY.length ^ 1}`;
         shootB += `${(shootB == String.fromCharCode(117,0) ? shootB.length : shootB.length)}`;
         if (homeinactivei) {
            break;
         }
      } while ((awayteamfieldY != String.fromCharCode(110,0) || awayteamfieldY.length > 1) && homeinactivei);
      let brightnessZ = String.fromCharCode(108,116,122,104,95,110,110,54,107,116,0) == awayteamfieldY;
      do {
         awayteamfieldY += "2";
         if (brightnessZ) {
            break;
         }
      } while (brightnessZ && (awayteamfieldY == String.fromCharCode(108,0)));
      let usernamed = awayteamfieldY == String.fromCharCode(56,122,114,109,95,109,57,112,121,53,0);
      do {
         awayteamfieldY += `${awayteamfieldY.length & awayteamfieldY.length}`;
         if (usernamed) {
            break;
         }
      } while (usernamed && (awayteamfieldY.length < awayteamfieldY.length));
      refresh0 = [parseInt(`${runtime3}`)];
   for (let c = 0; c < 3; c++) {
      promotionq /= Math.max(2, 3);
   }
      action5 += `${eactl.length}`;
       let encrypts: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,102,105,110,100,101,114,0),59], [String.fromCharCode(103,95,56,48,95,121,117,118,114,103,98,0),877]]);
          let resultH = String.fromCharCode(98,95,54,57,95,114,101,102,101,114,101,110,99,101,0);
          let infot = String.fromCharCode(103,95,56,48,95,114,101,102,108,101,99,116,0);
         encrypts.set(resultH, 2);
         resultH += `${infot.length}`;
         infot += `${infot.length}`;
          let megaphone6 = String.fromCharCode(114,116,115,112,95,104,95,51,50,0);
          let register_91y = String.fromCharCode(108,95,54,56,95,112,117,98,108,105,115,104,0);
          let rncoreb = String.fromCharCode(117,95,54,57,95,100,101,115,105,114,101,100,0);
         encrypts.set(rncoreb, (rncoreb == String.fromCharCode(83,0) ? rncoreb.length : megaphone6.length));
         megaphone6 = `${register_91y.length}`;
         register_91y = "2";
      let iconsaveimage9 = encrypts.size >= 8000264;
      do {
         encrypts.set(`${encrypts.size}`, 1);
         if (iconsaveimage9) {
            break;
         }
      } while (iconsaveimage9 && (Array.from(encrypts.values()).includes(encrypts.size)));
      refresh0.push(2);
   if ((favoriteR.length | 5) < 1) {
       let videoP = 4.0;
       let playp = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,97,95,57,56,0);
       let circleO = 5;
       let nterstitialN = 4.0;
      if (5.92 == nterstitialN) {
         nterstitialN += playp.length;
      }
         nterstitialN -= 2;
       let graphicss = String.fromCharCode(116,101,120,116,98,111,120,95,107,95,52,54,0);
       let cornershoot6 = String.fromCharCode(115,95,49,50,95,99,111,110,110,101,99,116,105,111,110,115,0);
         circleO -= cornershoot6.length + 2;
          let spec4 = false;
          let iconbackwhited = String.fromCharCode(103,95,51,57,95,114,101,99,111,110,102,105,103,117,114,101,0);
          let macauW = String.fromCharCode(98,95,55,57,95,115,99,97,108,97,114,109,117,108,116,0);
         graphicss = "3";
         spec4 = 26 <= iconbackwhited.length;
         iconbackwhited += `${iconbackwhited.length}`;
         macauW = "1";
       let topicI = String.fromCharCode(107,95,49,56,95,114,101,97,100,105,110,103,0);
      let halffieldimageH = 6613733 <= circleO;
      do {
         circleO >>= Math.min(graphicss.length, 4);
         if (halffieldimageH) {
            break;
         }
      } while ((1 > playp.length) && halffieldimageH);
      while (!graphicss.includes(`${nterstitialN}`)) {
         nterstitialN /= Math.max(3, 5);
         break;
      }
      let manifestC = circleO <= 5720271;
      do {
         circleO /= Math.max((String.fromCharCode(115,0) == cornershoot6 ? cornershoot6.length : parseInt(`${videoP}`)), 4);
         if (manifestC) {
            break;
         }
      } while ((playp.length == 3) && manifestC);
       let quest6 = String.fromCharCode(110,97,108,115,95,101,95,52,0);
       let reportd = String.fromCharCode(116,121,112,101,100,101,102,115,95,57,95,56,55,0);
         quest6 = `${3 << (Math.min(5, playp.length))}`;
          let libmapbufferjnia = String.fromCharCode(99,95,56,56,95,102,102,118,108,0);
         nterstitialN /= Math.max(2, 5);
         libmapbufferjnia += `${1 * libmapbufferjnia.length}`;
      placeholderI >>= Math.min(3, contextU.length);
   }

    delayControls();

      promotionq += (1 - (moviess ? 5 : 5));
   let neonE = controlsY.size >= 9468651;
   do {
      controlsY.set(`${placeholderI}`, placeholderI / (Math.max(3, 1)));
      if (neonE) {
         break;
      }
   } while (neonE && ((controlsH.size - 5) > 3 || 4 > (5 - controlsH.size)));
      contextU = "3";
   for (let y = 0; y < 2; y++) {
       let macauq = true;
       let executorY = String.fromCharCode(112,95,53,95,100,105,97,108,108,101,100,0);
       let lessh: Array<any> = [String.fromCharCode(103,114,101,97,116,101,115,116,95,110,95,54,51,0), String.fromCharCode(115,97,110,115,95,97,95,50,57,0), String.fromCharCode(109,95,55,54,95,112,97,108,98,97,114,115,0)];
       let hookD: Array<any> = [String.fromCharCode(107,95,48,95,98,97,116,99,104,105,110,103,0), String.fromCharCode(116,95,55,51,95,113,116,112,97,108,101,116,116,101,0), String.fromCharCode(117,95,49,53,95,114,101,115,117,108,116,0)];
       let iconsubssuccessB = String.fromCharCode(110,95,51,50,95,118,97,108,105,100,97,116,111,114,0);
          let libfileP = 3.0;
          let bingi = 1.0;
          let aboutk = String.fromCharCode(118,97,114,105,97,116,105,111,110,95,52,95,52,49,0);
         lessh = [((macauq ? 4 : 5))];
         libfileP -= parseInt(`${libfileP}`);
         bingi -= parseFloat(`${parseInt(`${libfileP}`)}`);
         aboutk += `${parseInt(`${bingi}`)}`;
          let armvaR: Array<any> = [210, 741, 158];
          let scorepopsoundn: Map<any, any> = new Map([[String.fromCharCode(104,95,51,57,95,100,105,115,97,112,112,101,97,114,101,100,0),String.fromCharCode(107,95,51,48,95,110,112,97,116,99,104,101,115,0)], [String.fromCharCode(98,117,108,107,95,119,95,53,52,0),String.fromCharCode(99,117,114,95,101,95,57,49,0)], [String.fromCharCode(100,95,56,53,95,119,97,108,107,101,114,0),String.fromCharCode(103,95,51,57,95,115,99,97,108,105,110,103,0)]]);
          let private_muq = String.fromCharCode(110,95,49,50,95,115,121,110,111,110,121,109,115,0);
         macauq = !macauq;
         armvaR = [private_muq.length];
         scorepopsoundn = new Map([[`${armvaR.length}`, private_muq.length << (Math.min(1, armvaR.length))]]);
      let detailc = String.fromCharCode(99,51,101,101,50,115,116,57,0) == executorY;
      do {
          let iconeditN = 2.0;
          let register_5u = 2.0;
         executorY = `${iconsubssuccessB.length - parseInt(`${register_5u}`)}`;
         iconeditN /= Math.max(parseFloat(`${parseInt(`${iconeditN}`) >> (Math.min(1, Math.abs(parseInt(`${iconeditN}`))))}`), 1);
         register_5u -= parseInt(`${iconeditN}`);
         if (detailc) {
            break;
         }
      } while ((1 >= iconsubssuccessB.length) && detailc);
          let countdowny = true;
         executorY += `${(3 + (macauq ? 1 : 1))}`;
         countdowny = !countdowny;
      for (let i = 0; i < 2; i++) {
         iconsubssuccessB = `${lessh.length * 1}`;
      }
      if (!iconsubssuccessB.includes(`${macauq}`)) {
         iconsubssuccessB += `${iconsubssuccessB.length}`;
      }
         macauq = hookD.includes(macauq);
          let showlessO = String.fromCharCode(112,97,115,116,101,95,104,95,57,48,0);
          let analytics9 = 0.0;
          let videobufferloadinga = 1.0;
         lessh.push(2);
         showlessO += `${showlessO.length}`;
         analytics9 -= showlessO.length + 2;
         videobufferloadinga *= parseInt(`${analytics9}`);
      if (executorY.length <= iconsubssuccessB.length) {
         executorY += `${2 + lessh.length}`;
      }
          let refreshS = String.fromCharCode(111,95,52,95,109,111,115,116,0);
          let modez = String.fromCharCode(114,101,97,100,111,110,108,121,95,116,95,54,0);
         iconsubssuccessB += "2";
         refreshS = `${refreshS.length << (Math.min(Math.abs(2), 2))}`;
         modez += `${modez.length}`;
          let d_countW = 0;
         macauq = iconsubssuccessB == String.fromCharCode(49,0);
         d_countW -= d_countW;
          let componentregistryd = String.fromCharCode(103,114,101,97,116,101,115,116,95,49,95,57,57,0);
          let iconshareM = String.fromCharCode(116,114,101,110,100,108,105,110,101,95,55,95,55,52,0);
         lessh = [iconshareM.length];
         componentregistryd += `${2 >> (Math.min(5, componentregistryd.length))}`;
         iconshareM += `${(componentregistryd == String.fromCharCode(55,0) ? componentregistryd.length : componentregistryd.length)}`;
      for (let k = 0; k < 1; k++) {
          let modulesE = String.fromCharCode(115,95,54,95,97,115,99,98,110,0);
          let dangera = String.fromCharCode(113,117,101,114,121,95,48,95,53,0);
         executorY += `${((macauq ? 5 : 3))}`;
         modulesE += `${(String.fromCharCode(87,0) == dangera ? modulesE.length : dangera.length)}`;
      }
          let securityO: Array<any> = [String.fromCharCode(120,95,57,95,117,112,100,97,116,105,110,103,0), String.fromCharCode(114,97,110,100,101,110,95,117,95,51,53,0), String.fromCharCode(99,95,51,95,101,116,104,0)];
         iconsubssuccessB += `${iconsubssuccessB.length}`;
         securityO = [securityO.length];
          let iconadslinkY = 3.0;
         macauq = executorY.length == parseInt(`${iconadslinkY}`);
      moviess = executorY == String.fromCharCode(68,0);
   }
      placeholderI >>= Math.min(Math.abs((String.fromCharCode(88,0) == eactl ? eactl.length : placeholderI)), 5);
   if (5 < favoriteR.length || libturbomodulejsijniF.length < 5) {
      libturbomodulejsijniF = `${1 & libturbomodulejsijniF.length}`;
   }
      runtime3 += parseFloat(`${parseInt(`${promotionq}`)}`);
   while (5 >= (3 & controlsY.size) || 2 >= (controlsH.size & 3)) {
      controlsY = new Map([[action5, contextU.length << (Math.min(Math.abs(2), 4))]]);
      break;
   }
      favoriteR += `${eactl.length & 3}`;
       let philippinesP = String.fromCharCode(99,109,121,107,95,52,95,49,55,0);
       let servicek = 3.0;
       let unselectedD = 1.0;
      if ((servicek * unselectedD) < 2.41 && 4.76 < (2.41 * unselectedD)) {
         servicek *= parseInt(`${unselectedD}`);
      }
       let debugl = 2.0;
       let canvasH = 1.0;
      while (2.24 >= (4 - servicek)) {
         unselectedD *= parseFloat(`${parseInt(`${canvasH}`) << (Math.min(2, Math.abs(3)))}`);
         break;
      }
          let footballtrophyH = 2.0;
         canvasH /= Math.max(parseFloat(`${2 * parseInt(`${canvasH}`)}`), 5);
         footballtrophyH += parseFloat(`${parseInt(`${footballtrophyH}`) / (Math.max(3, parseInt(`${footballtrophyH}`)))}`);
          let firebase2 = String.fromCharCode(119,114,111,110,103,95,98,95,56,56,0);
          let predictionactiveH = 3;
          let pagey = String.fromCharCode(113,112,98,105,116,115,95,104,95,49,0);
         servicek += 3;
         firebase2 += "3";
         predictionactiveH *= predictionactiveH;
         pagey = `${pagey.length}`;
      for (let i = 0; i < 1; i++) {
          let styleW: Array<any> = [816, 187];
          let linkv = true;
          let downloadT: Map<any, any> = new Map([[String.fromCharCode(106,95,52,95,115,105,109,117,108,97,116,101,0),909], [String.fromCharCode(105,100,99,116,95,100,95,51,53,0),323], [String.fromCharCode(105,115,108,101,97,112,95,113,95,55,53,0),667]]);
          let libavutil9 = String.fromCharCode(114,95,53,48,95,107,101,121,105,100,0);
         philippinesP += `${(2 >> (Math.min(4, Math.abs((linkv ? 4 : 3)))))}`;
         styleW = [(libavutil9 == String.fromCharCode(101,0) ? libavutil9.length : downloadT.size)];
         linkv = libavutil9.length >= 11;
         downloadT.set(`${libavutil9}`, libavutil9.length);
      }
          let tooltipsO = 5.0;
          let libswresampleY: Map<any, any> = new Map([[String.fromCharCode(106,95,54,56,95,105,111,115,116,114,101,97,109,0),615], [String.fromCharCode(97,95,54,56,95,117,105,100,0),127], [String.fromCharCode(105,110,116,116,121,112,101,115,95,116,95,57,49,0),933]]);
          let bangi = String.fromCharCode(117,110,105,110,115,116,97,108,108,95,105,95,51,48,0);
         unselectedD -= parseFloat(`${libswresampleY.size}`);
         tooltipsO -= parseFloat(`${bangi.length / (Math.max(3, 3))}`);
         libswresampleY.set(`${tooltipsO}`, bangi.length ^ 3);
      let aboutx = 4990060.0 <= servicek;
      do {
         servicek -= 2 ^ parseInt(`${servicek}`);
         if (aboutx) {
            break;
         }
      } while (aboutx && (1 < (3 + parseInt(`${servicek}`)) || (servicek + 5.27) < 2.19));
      if (5 > philippinesP.length) {
          let catagoryK = String.fromCharCode(118,95,52,49,95,97,99,113,117,97,110,116,0);
          let hometeamfieldE = String.fromCharCode(112,101,115,113,95,50,95,54,51,0);
         unselectedD -= parseFloat(`${parseInt(`${canvasH}`)}`);
         catagoryK = `${hometeamfieldE.length / 3}`;
         hometeamfieldE = "1";
      }
      eactl += "3";
   if ((4 / (Math.max(6, controlsH.size))) <= 5) {
      moviess = refresh0.length > 89;
   }
   for (let z = 0; z < 1; z++) {
      eactl += `${2 ^ contextU.length}`;
   }
   while ((3 + libturbomodulejsijniF.length) < 2 && (3 % (Math.max(3, libturbomodulejsijniF.length))) < 3) {
      homeiconl += parseFloat(`${libturbomodulejsijniF.length}`);
      break;
   }
      favoriteR += "2";
   if (4.95 > (4.56 / (Math.max(5, homeiconl))) || 2 > (controlsH.size << (Math.min(Math.abs(4), 2)))) {
       let linkM = 1;
       let kickz = 3.0;
       let libturbomodulejsijnip = 3.0;
       let typesq = 2.0;
       let mathu = String.fromCharCode(102,102,116,103,95,51,95,57,0);
      while (linkM > kickz) {
         linkM <<= Math.min(3, Math.abs(2 - parseInt(`${kickz}`)));
         break;
      }
      while ((3.74 - libturbomodulejsijnip) == 2.66 || 3.74 == (typesq - libturbomodulejsijnip)) {
         typesq -= 2;
         break;
      }
      while ((kickz + 5.10) >= 1.82 && 2.54 >= (5.10 - libturbomodulejsijnip)) {
         kickz += parseInt(`${kickz}`);
         break;
      }
         mathu += `${1 << (Math.min(4, Math.abs(parseInt(`${kickz}`))))}`;
      while (4.6 < (1.87 * kickz)) {
         kickz /= Math.max(1, 3);
         break;
      }
          let libapminsightbr = 2.0;
          let pathF = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,55,95,57,56,0);
         mathu = "3";
         libapminsightbr /= Math.max(pathF.length ^ parseInt(`${libapminsightbr}`), 2);
         pathF = `${parseInt(`${libapminsightbr}`)}`;
         linkM %= Math.max(parseInt(`${typesq}`) | 1, 3);
         libturbomodulejsijnip *= parseFloat(`${3}`);
      for (let q = 0; q < 1; q++) {
          let update_o49 = String.fromCharCode(104,95,52,55,95,114,111,116,97,116,105,111,110,0);
          let rewardvideo1 = 2.0;
          let zoomC = true;
          let soundj: Map<any, any> = new Map([[String.fromCharCode(103,95,55,50,95,117,110,109,97,115,107,0),String.fromCharCode(107,95,53,95,109,100,99,118,0)], [String.fromCharCode(101,99,117,114,115,105,118,101,95,118,95,54,57,0),String.fromCharCode(97,95,52,53,95,109,98,109,111,100,101,0)]]);
         kickz -= 1 + update_o49.length;
         update_o49 = `${soundj.size * 1}`;
         rewardvideo1 += parseFloat(`${soundj.size * 3}`);
      }
      for (let a = 0; a < 3; a++) {
          let commonJ = 1;
          let favoritew = 1.0;
          let descV: Map<any, any> = new Map([[String.fromCharCode(98,108,117,114,95,114,95,52,52,0),184], [String.fromCharCode(100,97,114,116,115,95,54,95,52,57,0),269]]);
          let backgroundJ = String.fromCharCode(114,101,99,101,110,116,95,114,95,52,53,0);
          let yellow8 = String.fromCharCode(114,101,112,111,114,116,105,110,103,95,117,95,55,50,0);
         kickz *= parseInt(`${libturbomodulejsijnip}`) << (Math.min(Math.abs(parseInt(`${favoritew}`)), 3));
         commonJ %= Math.max(5, backgroundJ.length / (Math.max(7, yellow8.length)));
         favoritew /= Math.max(2, yellow8.length);
         descV.set(backgroundJ, 2);
      }
         mathu += `${mathu.length}`;
         kickz += parseInt(`${typesq}`);
      for (let t = 0; t < 2; t++) {
         libturbomodulejsijnip /= Math.max(parseFloat(`${3}`), 4);
      }
       let promotionqU = String.fromCharCode(111,114,103,95,104,95,49,48,48,0);
       let stringy = String.fromCharCode(115,98,105,116,115,95,48,95,50,49,0);
      while ((5.29 * kickz) >= 2.70 && (kickz * 5.29) >= 1.50) {
         mathu += `${parseInt(`${kickz}`) | stringy.length}`;
         break;
      }
      controlsH = new Map([[`${linkM}`, 2]]);
   }
      controlsY.set(`${homeiconl}`, favoriteR.length);
       let whistleR = 1.0;
       let projectB = 0;
       let libimagepipelinem = String.fromCharCode(100,95,51,49,95,117,115,101,114,110,97,109,101,0);
       let buildr: Array<any> = [446, 583, 149];
       let manifest5: Array<any> = [257, 436];
      for (let a = 0; a < 3; a++) {
          let penaltyo = String.fromCharCode(97,108,97,110,103,117,97,103,101,95,109,95,51,55,0);
          let abidetectb = 5;
          let mailj: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,99,111,110,118,101,114,115,105,111,110,0),String.fromCharCode(113,95,50,49,0)], [String.fromCharCode(98,95,57,95,114,97,100,105,97,110,115,0),String.fromCharCode(114,116,114,101,101,110,111,100,101,95,98,95,51,57,0)]]);
         whistleR *= parseFloat(`${projectB}`);
         penaltyo = `${abidetectb}`;
         abidetectb >>= Math.min(5, Math.abs(mailj.size >> (Math.min(penaltyo.length, 3))));
         mailj = new Map([[`${abidetectb}`, penaltyo.length]]);
      }
         whistleR += parseFloat(`${2}`);
          let typing6 = true;
          let airbnbstarZ = String.fromCharCode(111,95,50,48,95,111,100,100,97,118,103,0);
         whistleR *= parseFloat(`${1}`);
         typing6 = airbnbstarZ == String.fromCharCode(110,0);
         airbnbstarZ += `${airbnbstarZ.length}`;
      for (let q = 0; q < 3; q++) {
         buildr.push(libimagepipelinem.length + 2);
      }
         manifest5 = [parseInt(`${whistleR}`)];
         buildr = [buildr.length];
          let iconclosewhitef = String.fromCharCode(105,95,53,50,95,121,121,121,121,0);
         projectB %= Math.max(5, projectB);
         iconclosewhitef = `${iconclosewhitef.length % 3}`;
         manifest5 = [buildr.length << (Math.min(Math.abs(3), 5))];
      homeiconl += parseFloat(`${imagenetworkerrQ.length}`);
   if (Array.from(controlsY.values()).includes(controlsH.size)) {
      controlsY = new Map([[imagenetworkerrQ, contextU.length | 2]]);
   }
   while (1 < refresh0.length) {
       let window_iin = 3;
       let questM: Map<any, any> = new Map([[String.fromCharCode(117,112,103,114,97,100,101,95,117,95,50,0),677], [String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,107,95,53,49,0),385]]);
       let homej = String.fromCharCode(110,111,119,95,51,95,53,48,0);
       let home5 = 5.0;
       let libjsinspector2 = false;
      while ((home5 / (Math.max(5.9, 8))) == 4.32 || (parseInt(`${home5}`) / (Math.max(homej.length, 9))) == 1) {
         home5 *= parseFloat(`${2}`);
         break;
      }
      if (2.87 < (home5 / 1.91) && 1.91 < (parseFloat(`${homej.length}`) / (Math.max(7, home5)))) {
         homej = `${(String.fromCharCode(66,0) == homej ? homej.length : (libjsinspector2 ? 5 : 2))}`;
      }
          let detailB = String.fromCharCode(104,111,114,105,103,95,117,95,50,49,0);
         libjsinspector2 = libjsinspector2 || detailB.length >= 44;
          let sheet2: Map<any, any> = new Map([[String.fromCharCode(110,95,52,48,95,114,101,108,99,116,120,0),892], [String.fromCharCode(101,120,112,108,105,99,105,116,95,102,95,56,56,0),167]]);
          let reactnavigationd = String.fromCharCode(99,95,56,56,95,112,97,114,97,108,108,101,108,0);
          let strX = 5;
         libjsinspector2 = null == sheet2.get(`${home5}`);
         sheet2.set(`${strX}`, 1);
         reactnavigationd = `${strX}`;
      for (let f = 0; f < 2; f++) {
         homej += `${homej.length}`;
      }
         homej = `${window_iin}`;
      if (homej.startsWith(`${libjsinspector2}`)) {
         homej += `${parseInt(`${home5}`) + 2}`;
      }
      let videoV = 9042823 >= window_iin;
      do {
          let philippinesx = 1;
          let icontransferclubn = false;
         window_iin %= Math.max((String.fromCharCode(98,0) == homej ? parseInt(`${home5}`) : homej.length), 4);
         philippinesx %= Math.max(philippinesx, 3);
         icontransferclubn = philippinesx <= 69 && icontransferclubn;
         if (videoV) {
            break;
         }
      } while (videoV && (!libjsinspector2));
       let downarrowb = 4.0;
       let dependenciesP = 2.0;
         home5 *= parseFloat(`${questM.size}`);
          let incidentf = 1.0;
          let homeactiveh = String.fromCharCode(116,95,56,55,95,113,114,99,111,100,101,0);
          let downloadedq = false;
         home5 -= (parseFloat(`${homeactiveh.length << (Math.min(2, Math.abs((libjsinspector2 ? 1 : 4))))}`));
         incidentf /= Math.max(parseFloat(`${1 - parseInt(`${incidentf}`)}`), 4);
         homeactiveh = `${(parseInt(`${incidentf}`) ^ (downloadedq ? 4 : 4))}`;
         downloadedq = !downloadedq;
      let showlessF = downarrowb <= 8843190.0;
      do {
         downarrowb -= parseFloat(`${window_iin & 3}`);
         if (showlessF) {
            break;
         }
      } while (showlessF && (5 < (questM.size + parseInt(`${downarrowb}`)) || 5 < (parseInt(`${downarrowb}`) + questM.size)));
      while ((questM.size + 3) <= 5) {
          let chart0 = 5.0;
          let orientationV = String.fromCharCode(99,97,112,112,101,100,95,113,95,55,53,0);
          let securitym = true;
          let club1 = String.fromCharCode(99,95,57,95,114,101,109,111,118,97,108,115,0);
         homej = `${((securitym ? 2 : 1) - 3)}`;
         chart0 -= parseFloat(`${club1.length & orientationV.length}`);
         orientationV = `${orientationV.length}`;
         securitym = club1 == orientationV;
         break;
      }
          let corex = 2;
          let projectv = 4.0;
          let loadingU = String.fromCharCode(100,95,48,95,114,101,108,101,118,97,110,116,0);
         home5 /= Math.max(5, parseFloat(`${homej.length % (Math.max(1, 2))}`));
         corex <<= Math.min(Math.abs(3 - loadingU.length), 1);
         projectv -= parseFloat(`${corex}`);
         loadingU += `${corex}`;
      let coreE = questM.size <= 5347769;
      do {
         questM = new Map([[homej, homej.length - 1]]);
         if (coreE) {
            break;
         }
      } while (coreE && ((window_iin & questM.size) >= 2 && 3 >= (questM.size & 2)));
      refresh0.push((controlsH.size / (Math.max(3, (libjsinspector2 ? 5 : 2)))));
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
    isLocked: isLocked,
    toggleLock: () => {
      setIsLocked(!isLocked)
    }
  }))

  const changeControlsState = () => {
       let listq = false;
    let userQ = String.fromCharCode(111,95,54,51,95,114,111,117,110,100,0);
    let favoriteP = false;
    let renewR: Map<any, any> = new Map([[String.fromCharCode(118,95,57,54,95,109,98,108,111,99,107,0),String.fromCharCode(100,111,112,115,95,110,95,55,49,0)], [String.fromCharCode(122,95,53,50,95,107,101,121,102,114,97,109,101,0),String.fromCharCode(98,97,99,107,114,111,117,110,100,95,117,95,51,51,0)], [String.fromCharCode(98,117,99,107,101,116,115,95,116,95,53,55,0),String.fromCharCode(102,95,56,55,95,109,98,117,118,0)]]);
    let footballfieldl = 5.0;
    let vietnamk = false;
    let sigmobf = 4.0;
    let largeB: Array<any> = [String.fromCharCode(122,95,51,49,95,118,115,114,99,0), String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,105,95,54,53,0), String.fromCharCode(111,95,49,51,95,102,105,110,103,101,114,0)];
    let classesW = 3.0;
    let hongkongG: Array<any> = [344, 786];
    let weiboK = 5.0;
    let subbasketballplayerM: Map<any, any> = new Map([[String.fromCharCode(101,112,105,115,111,100,101,95,120,95,55,53,0),554], [String.fromCharCode(101,110,116,101,114,95,121,95,50,51,0),103]]);
   let largesoundC = 6715112.0 >= sigmobf;
   do {
      sigmobf /= Math.max(parseInt(`${sigmobf}`) % (Math.max(largeB.length, 6)), 3);
      if (largesoundC) {
         break;
      }
   } while (largesoundC && (!favoriteP && (sigmobf + 5.90) == 4.68));
      largeB.push(((vietnamk ? 1 : 4) ^ 2));
   for (let v = 0; v < 3; v++) {
       let googleO: Map<any, any> = new Map([[String.fromCharCode(111,95,52,52,95,115,112,101,101,100,117,112,0),String.fromCharCode(98,112,117,116,115,95,98,95,56,0)], [String.fromCharCode(103,95,52,48,95,99,117,115,116,111,109,105,122,101,114,0),String.fromCharCode(111,95,56,55,95,114,101,99,111,114,100,0)], [String.fromCharCode(108,95,52,53,95,118,112,120,115,116,97,116,115,0),String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,112,95,49,48,48,0)]]);
       let textinputP: Array<any> = [426, 820, 709];
       let libapminsightbK = 2.0;
       let imagemanager6 = 1.0;
       let resendX = String.fromCharCode(119,95,52,56,95,115,116,114,114,101,115,101,116,0);
      if (googleO.get(`${textinputP.length}`) == null) {
         textinputP.push(resendX.length);
      }
         googleO = new Map([[`${libapminsightbK}`, resendX.length / (Math.max(3, parseInt(`${libapminsightbK}`)))]]);
          let langkeyJ: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,119,101,105,103,104,116,0),513], [String.fromCharCode(97,114,99,104,105,118,105,110,103,95,54,95,56,56,0),313]]);
          let catagoryf = String.fromCharCode(111,95,55,56,95,97,98,115,111,108,117,116,101,0);
         imagemanager6 -= parseFloat(`${1}`);
         langkeyJ = new Map([[`${langkeyJ.size}`, langkeyJ.size]]);
         catagoryf = `${catagoryf.length}`;
      let showlessQ = imagemanager6 <= 9715788.0;
      do {
          let livem = 0.0;
         imagemanager6 *= parseFloat(`${2}`);
         livem -= 3;
         if (showlessQ) {
            break;
         }
      } while ((3.87 <= libapminsightbK) && showlessQ);
       let libavdeviced = String.fromCharCode(111,110,116,114,111,108,115,95,107,95,57,48,0);
       let typesk = String.fromCharCode(108,101,109,111,110,95,98,95,54,51,0);
         textinputP.push(libavdeviced.length * 2);
          let privilege7 = 4.0;
          let whiteanimationliveg = 1;
          let libfabricjniS = 0;
         textinputP.push(2 / (Math.max(5, resendX.length)));
         privilege7 *= libfabricjniS;
         whiteanimationliveg -= libfabricjniS;
      let dropdown_ = 5501322 >= googleO.size;
      do {
         googleO = new Map([[`${textinputP.length}`, (typesk == String.fromCharCode(50,0) ? textinputP.length : typesk.length)]]);
         if (dropdown_) {
            break;
         }
      } while (dropdown_ && ((imagemanager6 + 1.42) > 5.34 || (2 * googleO.size) > 4));
      if ((resendX.length << (Math.min(Math.abs(4), 4))) <= 3 && (textinputP.length << (Math.min(resendX.length, 3))) <= 4) {
         resendX += `${textinputP.length}`;
      }
         libapminsightbK /= Math.max(3, parseFloat(`${resendX.length}`));
      if (imagemanager6 > 3.49) {
         textinputP = [googleO.size & 3];
      }
          let utils_ = String.fromCharCode(112,111,115,116,115,99,97,108,101,95,118,95,57,0);
          let middleq = String.fromCharCode(115,95,51,54,95,114,101,113,115,116,97,116,101,0);
         libavdeviced = `${textinputP.length}`;
         utils_ += `${utils_.length << (Math.min(Math.abs(3), 4))}`;
         middleq = `${(String.fromCharCode(51,0) == utils_ ? utils_.length : middleq.length)}`;
      if ((textinputP.length & 3) <= 4 || (textinputP.length * 3) <= 5) {
         libapminsightbK *= parseFloat(`${1 % (Math.max(parseInt(`${libapminsightbK}`), 3))}`);
      }
         imagemanager6 /= Math.max(parseFloat(`${googleO.size - 3}`), 1);
          let gemfile3 = 0.0;
          let path7 = false;
          let playlistr: Array<any> = [String.fromCharCode(114,95,52,49,95,99,111,112,121,116,101,115,116,0), String.fromCharCode(110,111,110,114,100,95,104,95,55,0)];
         textinputP = [3 << (Math.min(1, textinputP.length))];
         gemfile3 += parseFloat(`${1}`);
         path7 = !path7;
         playlistr.push(((path7 ? 1 : 4) / (Math.max(parseInt(`${gemfile3}`), 9))));
      renewR.set(`${imagemanager6}`, 1);
   }
      sigmobf -= 1 + userQ.length;
   let vietnamm = 5186886.0 >= footballfieldl;
   do {
      footballfieldl += parseFloat(`${parseInt(`${sigmobf}`) % 3}`);
      if (vietnamm) {
         break;
      }
   } while ((4.78 <= (5.79 - footballfieldl)) && vietnamm);
   for (let z = 0; z < 3; z++) {
      renewR.set(`${userQ}`, userQ.length);
   }
   while (4.14 >= (3 + classesW)) {
      footballfieldl += parseFloat(`${userQ.length}`);
      break;
   }
       let interstitialB = String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,122,95,52,52,0);
          let regengx = 2.0;
         interstitialB += `${interstitialB.length & parseInt(`${regengx}`)}`;
      let fieldg = interstitialB == String.fromCharCode(108,56,115,115,98,0);
      do {
         interstitialB = `${interstitialB.length << (Math.min(3, interstitialB.length))}`;
         if (fieldg) {
            break;
         }
      } while ((interstitialB == interstitialB) && fieldg);
         interstitialB = `${3 + interstitialB.length}`;
      largeB = [1];
   while (!listq) {
       let playercommonD = String.fromCharCode(118,95,55,53,95,109,111,109,101,110,116,115,0);
       let combinedx = String.fromCharCode(99,95,51,54,95,104,105,101,114,0);
       let interstitialj = String.fromCharCode(122,95,52,51,95,116,119,105,110,118,113,0);
         interstitialj += `${2 >> (Math.min(3, playercommonD.length))}`;
          let vipsportT = String.fromCharCode(99,95,57,50,95,109,111,100,101,115,0);
          let flipperx: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,115,95,48,0),915], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,102,95,52,56,0),315]]);
          let untick6 = String.fromCharCode(114,95,52,51,95,97,114,101,113,117,101,115,116,0);
         combinedx = `${(combinedx == String.fromCharCode(89,0) ? combinedx.length : untick6.length)}`;
         vipsportT += `${vipsportT.length}`;
         flipperx.set(`${vipsportT}`, vipsportT.length);
         untick6 = `${1 * flipperx.size}`;
      let defaultroombg4 = String.fromCharCode(104,101,104,110,100,50,112,53,0) == interstitialj;
      do {
         interstitialj += "2";
         if (defaultroombg4) {
            break;
         }
      } while ((interstitialj.includes(`${combinedx.length}`)) && defaultroombg4);
         combinedx += "1";
         combinedx += "3";
         playercommonD += "1";
         interstitialj += `${combinedx.length + playercommonD.length}`;
         combinedx = `${(interstitialj == String.fromCharCode(70,0) ? interstitialj.length : combinedx.length)}`;
      while (interstitialj.length == 5) {
         interstitialj = `${playercommonD.length / (Math.max(8, interstitialj.length))}`;
         break;
      }
      renewR.set(`${footballfieldl}`, 1 * combinedx.length);
      break;
   }
   while (classesW <= 3.2) {
       let rewindS = 3.0;
       let orientationO = false;
       let defaultteamn = 2;
       let defaultfootballbgS = String.fromCharCode(117,110,115,101,116,95,97,95,52,49,0);
          let currenty = 2;
          let datah = String.fromCharCode(115,95,53,54,95,109,101,109,100,101,98,117,103,0);
         orientationO = 75 >= currenty && defaultfootballbgS.length >= 75;
         currenty *= (String.fromCharCode(122,0) == datah ? datah.length : datah.length);
         orientationO = rewindS < defaultfootballbgS.length;
         orientationO = String.fromCharCode(88,0) == defaultfootballbgS;
      for (let e = 0; e < 3; e++) {
          let iconsubssuccesss = 1.0;
          let football0: Array<any> = [950, 506];
          let videojsa = 5.0;
          let description_20H: Map<any, any> = new Map([[String.fromCharCode(103,95,50,53,95,116,114,117,110,99,0),807], [String.fromCharCode(105,95,54,50,95,112,114,101,116,116,121,0),104], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,109,95,53,49,0),429]]);
          let teamdetailsbgN = String.fromCharCode(106,95,56,53,95,99,114,111,115,115,104,97,105,114,115,0);
         defaultfootballbgS += "2";
         iconsubssuccesss *= parseInt(`${videojsa}`) + football0.length;
         football0.push(1);
         videojsa -= parseFloat(`${parseInt(`${iconsubssuccesss}`)}`);
         description_20H = new Map([[`${description_20H.size}`, parseInt(`${videojsa}`)]]);
         teamdetailsbgN = `${parseInt(`${videojsa}`)}`;
      }
       let schedulerb = 2;
       let iconcloseY = 3;
          let firebaseW = String.fromCharCode(108,95,54,57,95,100,105,115,112,97,116,99,104,101,114,0);
          let kickp = 2.0;
         defaultteamn <<= Math.min(5, Math.abs(parseInt(`${rewindS}`) & 3));
         firebaseW = `${(firebaseW == String.fromCharCode(81,0) ? parseInt(`${kickp}`) : firebaseW.length)}`;
         kickp -= parseInt(`${kickp}`) | firebaseW.length;
          let tempV = true;
          let defaultteamR = String.fromCharCode(98,121,116,101,119,111,114,100,95,111,95,49,49,0);
          let hoverl = 4;
         schedulerb |= 3 / (Math.max(5, hoverl));
         tempV = !tempV;
         defaultteamR += `${((tempV ? 2 : 2))}`;
         hoverl |= ((tempV ? 2 : 5) % 1);
      if (!orientationO) {
          let tickedz = String.fromCharCode(102,105,102,111,95,110,95,57,49,0);
         iconcloseY >>= Math.min(Math.abs(((orientationO ? 1 : 5))), 5);
         tickedz += `${tickedz.length << (Math.min(Math.abs(3), 4))}`;
      }
         orientationO = schedulerb == rewindS;
       let baselineB = String.fromCharCode(108,95,50,57,95,117,110,98,111,120,0);
      for (let m = 0; m < 3; m++) {
         defaultfootballbgS += `${iconcloseY}`;
      }
      for (let t = 0; t < 3; t++) {
         iconcloseY |= ((orientationO ? 4 : 3) + 1);
      }
      largeB.push((3 + (favoriteP ? 3 : 4)));
      break;
   }
      userQ += `${renewR.size}`;
   let condensed2 = listq ? !listq : listq;
   do {
      listq = largeB.includes(classesW);
      if (condensed2) {
         break;
      }
   } while (condensed2 && ((footballfieldl / 5.36) < 1.33 || !listq));
   let inactiveC = userQ == String.fromCharCode(101,111,111,108,53,102,0);
   do {
      userQ += `${parseInt(`${sigmobf}`) - 1}`;
      if (inactiveC) {
         break;
      }
   } while (inactiveC && (favoriteP));
   if (sigmobf >= 2.62 && 2.90 >= (sigmobf + 2.62)) {
      vietnamk = largeB.length < 99;
   }

    setShowControls(!showControls);

       let groups = 4.0;
       let leakcheckerb: Array<any> = [String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,109,95,54,0), String.fromCharCode(97,95,49,51,95,114,103,98,97,98,101,0)];
       let cricketg = String.fromCharCode(115,97,99,107,95,48,95,52,49,0);
      let filterL = String.fromCharCode(113,97,55,119,110,56,98,51,117,50,0) == cricketg;
      do {
         cricketg += `${cricketg.length}`;
         if (filterL) {
            break;
         }
      } while ((cricketg.startsWith(`${groups}`)) && filterL);
         groups /= Math.max(3, (parseFloat(`${cricketg == String.fromCharCode(80,0) ? cricketg.length : parseInt(`${groups}`)}`)));
       let robotoO = String.fromCharCode(98,105,116,118,101,99,116,111,114,95,118,95,51,55,0);
       let select3 = 4.0;
       let signinupv = 4.0;
       let langkey4 = 1.0;
       let linkz = 5.0;
       let short_hU = 3.0;
          let megaphoneG: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,112,116,101,100,95,103,95,52,52,0),true ], [String.fromCharCode(100,117,97,108,105,110,112,117,116,95,118,95,51,52,0),true ], [String.fromCharCode(109,115,103,115,109,100,101,99,95,104,95,57,56,0),true ]]);
          let floatinga = String.fromCharCode(97,95,54,55,95,115,105,103,110,97,108,0);
          let desci = 4.0;
         linkz -= 1 ^ parseInt(`${signinupv}`);
         megaphoneG.set(`${floatinga}`, (String.fromCharCode(55,0) == floatinga ? floatinga.length : megaphoneG.size));
         desci /= Math.max(1, megaphoneG.size);
      for (let v = 0; v < 1; v++) {
         langkey4 *= parseFloat(`${2}`);
      }
      listq = groups >= classesW;
      leakcheckerb = [3];
       let gradleZ = 3.0;
       let chartz = String.fromCharCode(103,101,109,102,105,108,101,95,52,95,56,55,0);
       let projectA = 2;
         gradleZ *= parseFloat(`${1}`);
      if (1.20 > (2.76 + gradleZ)) {
          let firebase_: Map<any, any> = new Map([[String.fromCharCode(105,95,53,95,101,120,112,97,110,100,101,100,0),594], [String.fromCharCode(101,115,99,97,112,105,110,103,95,97,95,56,55,0),969]]);
          let yellowanimationlivee = 5.0;
          let resendJ = 2;
          let basketballiconK = String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,56,95,54,57,0);
          let giftg = false;
         projectA /= Math.max(1, 1);
         firebase_.set(`${giftg}`, ((giftg ? 4 : 4) >> (Math.min(Math.abs(2), 3))));
         yellowanimationlivee += (basketballiconK == String.fromCharCode(82,0) ? (giftg ? 4 : 2) : basketballiconK.length);
         resendJ -= 3;
      }
      let firebaseL = chartz == String.fromCharCode(103,108,107,55,108,97,119,54,53,0);
      do {
         chartz = `${1 + parseInt(`${gradleZ}`)}`;
         if (firebaseL) {
            break;
         }
      } while (firebaseL && (4 < (chartz.length / (Math.max(4, 6)))));
      if ((parseFloat(`${chartz.length}`) / (Math.max(9, gradleZ))) >= 1.7 && (gradleZ / (Math.max(parseFloat(`${chartz.length}`), 1))) >= 1.7) {
         chartz += `${projectA}`;
      }
      while (1.66 <= (projectA * gradleZ)) {
         gradleZ *= parseFloat(`${2 << (Math.min(Math.abs(projectA), 5))}`);
         break;
      }
      classesW /= Math.max(2, parseFloat(`${parseInt(`${classesW}`) ^ parseInt(`${footballfieldl}`)}`));
   while (2 >= largeB.length) {
       let uploadC = String.fromCharCode(108,105,98,118,112,120,95,118,95,52,50,0);
       let halfe = String.fromCharCode(107,110,111,99,107,111,117,116,95,102,95,55,54,0);
      if (uploadC != String.fromCharCode(114,0)) {
         halfe = "2";
      }
       let basketballiconQ = 4.0;
         uploadC += `${halfe.length}`;
      let downloadE = halfe.length <= 5230203;
      do {
          let shootv: Map<any, any> = new Map([[String.fromCharCode(98,95,51,56,95,114,115,116,110,0),449], [String.fromCharCode(109,97,112,102,105,108,101,95,105,95,54,54,0),77]]);
          let small0 = 0.0;
         halfe = `${shootv.size}`;
         shootv.set(`${small0}`, parseInt(`${small0}`) & 3);
         if (downloadE) {
            break;
         }
      } while (((parseInt(`${basketballiconQ}`) / (Math.max(halfe.length, 9))) <= 2 && (halfe.length * 2) <= 2) && downloadE);
      while (halfe.length >= uploadC.length) {
         uploadC = `${uploadC.length}`;
         break;
      }
         basketballiconQ -= parseFloat(`${2}`);
      largeB.push(1 / (Math.max(parseInt(`${sigmobf}`), 1)));
      break;
   }
   while (!favoriteP || !vietnamk) {
      vietnamk = !favoriteP;
      break;
   }
   for (let o = 0; o < 1; o++) {
       let mapping9 = String.fromCharCode(104,95,53,56,95,104,97,114,109,111,110,105,99,0);
       let logouserT = String.fromCharCode(98,95,51,95,116,104,114,101,115,104,111,108,100,115,0);
       let minit = String.fromCharCode(120,95,51,51,95,105,115,116,115,0);
       let apple5 = String.fromCharCode(97,99,99,101,115,115,95,109,95,52,55,0);
         apple5 = `${(String.fromCharCode(73,0) == mapping9 ? minit.length : mapping9.length)}`;
      let spinnerS = 8086617 <= apple5.length;
      do {
          let suggestion9 = 0;
          let chinasamey = String.fromCharCode(121,95,57,57,95,112,114,115,99,116,112,0);
          let mappingr: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,117,97,110,0),String.fromCharCode(107,95,57,57,95,99,121,117,118,0)], [String.fromCharCode(119,95,52,95,115,117,98,116,114,97,99,116,109,111,100,0),String.fromCharCode(101,95,49,56,95,105,116,97,108,105,97,110,0)]]);
         apple5 += `${chinasamey.length % (Math.max(minit.length, 2))}`;
         suggestion9 >>= Math.min(Math.abs(mappingr.size >> (Math.min(4, Math.abs(suggestion9)))), 3);
         chinasamey += "3";
         mappingr.set(`${suggestion9}`, mappingr.size * 2);
         if (spinnerS) {
            break;
         }
      } while (spinnerS && (!minit.startsWith(`${apple5.length}`)));
      for (let k = 0; k < 3; k++) {
          let orientationt = String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,100,95,52,48,0);
          let qaagA = String.fromCharCode(119,97,110,116,115,95,57,95,55,49,0);
          let main_fM = 1.0;
          let librrc1 = 4.0;
          let defaultprofilepicO = String.fromCharCode(103,95,53,51,95,114,101,110,100,101,114,0);
         logouserT = `${(String.fromCharCode(107,0) == orientationt ? parseInt(`${main_fM}`) : orientationt.length)}`;
         qaagA += `${parseInt(`${librrc1}`)}`;
         main_fM -= parseFloat(`${1}`);
         librrc1 -= parseFloat(`${parseInt(`${librrc1}`) ^ qaagA.length}`);
         defaultprofilepicO += `${parseInt(`${librrc1}`)}`;
      }
       let humidityO: Map<any, any> = new Map([[String.fromCharCode(104,95,49,52,95,115,110,105,112,112,101,116,0),168], [String.fromCharCode(109,95,52,51,95,105,102,102,116,0),945]]);
         apple5 = `${3 - apple5.length}`;
      while (logouserT == minit) {
         minit += `${(apple5 == String.fromCharCode(68,0) ? apple5.length : humidityO.size)}`;
         break;
      }
          let calendarY = String.fromCharCode(112,95,51,57,95,112,114,111,116,101,99,116,105,111,110,0);
         humidityO = new Map([[`${humidityO.size}`, humidityO.size]]);
         calendarY += `${2 | calendarY.length}`;
          let backwhiteV = String.fromCharCode(115,102,114,97,109,101,95,110,95,50,49,0);
         apple5 += `${logouserT.length}`;
         backwhiteV += `${backwhiteV.length}`;
      while (mapping9.length >= humidityO.size) {
         humidityO = new Map([[apple5, minit.length]]);
         break;
      }
      if (2 >= (apple5.length >> (Math.min(Math.abs(4), 2))) && (humidityO.size >> (Math.min(Math.abs(4), 4))) >= 3) {
         humidityO = new Map([[mapping9, (logouserT == String.fromCharCode(101,0) ? logouserT.length : mapping9.length)]]);
      }
          let screenq = 5.0;
          let current2 = true;
          let iconnewsshare3: Map<any, any> = new Map([[String.fromCharCode(105,95,57,48,0),555], [String.fromCharCode(100,105,103,114,97,112,104,95,110,95,56,51,0),212], [String.fromCharCode(105,110,104,105,98,105,116,115,95,113,95,50,53,0),190]]);
         mapping9 += `${(String.fromCharCode(107,0) == minit ? minit.length : mapping9.length)}`;
         screenq *= iconnewsshare3.size - 2;
         current2 = 22.68 > screenq || current2;
         iconnewsshare3 = new Map([[`${screenq}`, parseInt(`${screenq}`) / 1]]);
       let iconmoreG = String.fromCharCode(104,95,55,55,95,101,112,104,101,109,101,114,97,108,0);
       let favoriteo = String.fromCharCode(115,104,97,114,112,101,110,95,101,95,56,55,0);
      userQ = `${parseInt(`${sigmobf}`)}`;
   }
   for (let s = 0; s < 1; s++) {
      userQ = `${2 | hongkongG.length}`;
   }
      footballfieldl /= Math.max(4, parseFloat(`${1 - parseInt(`${footballfieldl}`)}`));
       let langt = String.fromCharCode(119,97,108,108,95,49,95,53,57,0);
       let policyU = 2.0;
      while ((langt.length ^ 2) >= 2 && 2 >= (parseInt(`${policyU}`) / (Math.max(2, 4)))) {
          let iconadslinkp: Array<any> = [String.fromCharCode(97,95,55,56,0), String.fromCharCode(102,114,97,109,101,115,105,122,101,95,117,95,50,56,0), String.fromCharCode(116,95,56,54,95,119,105,110,100,111,119,115,0)];
          let iconfeedback5 = String.fromCharCode(101,120,104,97,117,115,116,95,55,95,53,57,0);
          let rocketm = String.fromCharCode(114,101,115,116,111,114,101,95,107,95,55,48,0);
         langt += `${rocketm.length}`;
         iconadslinkp = [iconfeedback5.length];
         iconfeedback5 += `${iconfeedback5.length}`;
         rocketm = `${iconadslinkp.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
      for (let c = 0; c < 2; c++) {
         policyU /= Math.max(4, parseFloat(`${1 >> (Math.min(5, Math.abs(parseInt(`${policyU}`))))}`));
      }
          let elements6: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,109,105,120,112,97,110,101,108,0),false ], [String.fromCharCode(116,120,102,109,95,104,95,54,55,0),false ]]);
         langt += `${parseInt(`${policyU}`) / (Math.max(8, langt.length))}`;
         elements6 = new Map([[`${elements6.size}`, elements6.size]]);
          let adultG: Array<any> = [873, 894];
         policyU /= Math.max(parseFloat(`${1}`), 5);
         adultG = [2 ^ adultG.length];
      for (let z = 0; z < 1; z++) {
         langt += `${parseInt(`${policyU}`)}`;
      }
      let o_countV = 8951136 <= langt.length;
      do {
         langt += `${parseInt(`${policyU}`)}`;
         if (o_countV) {
            break;
         }
      } while (o_countV && ((policyU / (Math.max(5.51, 8))) == 3.44 || 2 == (langt.length / (Math.max(10, parseInt(`${policyU}`))))));
      renewR = new Map([[`${renewR.size}`, 3 >> (Math.min(3, hongkongG.length))]]);
      userQ += `${hongkongG.length ^ parseInt(`${weiboK}`)}`;
   for (let h = 0; h < 3; h++) {
      listq = 37.6 == sigmobf || vietnamk;
   }
   let orangedownarrowa = 5244077.0 >= footballfieldl;
   do {
      footballfieldl -= parseFloat(`${parseInt(`${classesW}`)}`);
      if (orangedownarrowa) {
         break;
      }
   } while (orangedownarrowa && ((4 / (Math.max(10, sigmobf))) < 2.49));
      renewR.set(`${hongkongG.length}`, hongkongG.length ^ 3);
   if ((renewR.size - 4) <= 2 || (renewR.size - parseInt(`${classesW}`)) <= 4) {
      classesW -= parseFloat(`${subbasketballplayerM.size >> (Math.min(hongkongG.length, 5))}`);
   }
   while ((subbasketballplayerM.size + 4) <= 3 || (4 + largeB.length) <= 2) {
      largeB.push(parseInt(`${footballfieldl}`));
      break;
   }
    delayControls();
  };

  const clearHidingDelay = () => {
       let countrya: Array<any> = [730, 230, 315];
    let const_09w = String.fromCharCode(106,95,52,51,95,117,112,112,101,114,0);
    let moreP: Map<any, any> = new Map([[String.fromCharCode(112,117,114,101,95,107,95,53,52,0),true ], [String.fromCharCode(98,97,108,97,110,99,101,100,95,51,95,54,49,0),true ], [String.fromCharCode(114,101,108,111,97,100,105,110,103,95,107,95,50,50,0),true ]]);
    let activityM: Map<any, any> = new Map([[String.fromCharCode(111,95,56,53,95,105,110,116,114,97,112,114,101,100,0),213], [String.fromCharCode(119,97,107,101,117,112,95,98,95,54,49,0),640]]);
    let encryptZ = 0;
    let yellowtoredg = String.fromCharCode(115,101,101,107,98,97,99,107,95,57,95,50,54,0);
    let connectionk = 1.0;
    let helperW = String.fromCharCode(98,103,109,99,95,53,95,52,0);
    let forwardH = String.fromCharCode(112,101,114,112,105,120,101,108,95,121,95,50,50,0);
    let bridge2: Map<any, any> = new Map([[String.fromCharCode(113,95,56,56,95,108,105,110,101,98,114,101,97,107,0),false ], [String.fromCharCode(118,95,52,56,95,109,97,103,110,105,116,117,100,101,115,0),true ]]);
    let launcheri = String.fromCharCode(116,95,51,95,98,111,97,116,0);
    let nendA = String.fromCharCode(114,95,55,53,95,114,101,116,114,105,101,118,101,0);
    let subinC: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,119,95,57,0),true ], [String.fromCharCode(108,105,115,116,101,110,95,110,95,57,50,0),true ], [String.fromCharCode(117,99,108,111,99,107,95,101,95,54,57,0),false ]]);
    let indicatorF: Array<any> = [541, 838, 781];
    let bingS = String.fromCharCode(100,95,57,50,95,104,105,103,104,119,97,116,101,114,0);
    let iconsharel = String.fromCharCode(114,95,55,56,95,97,108,116,101,114,97,98,108,101,0);
      activityM = new Map([[`${encryptZ}`, yellowtoredg.length]]);
   if (5 == (1 * countrya.length)) {
      const_09w += `${countrya.length}`;
   }
       let runtimescheduler9 = String.fromCharCode(107,95,56,57,95,102,115,105,122,101,0);
       let sharewhiten = 0;
          let dark2 = String.fromCharCode(118,95,54,53,95,104,101,97,118,121,0);
          let favoriteL = String.fromCharCode(122,95,54,51,95,104,97,108,100,99,108,117,116,115,114,99,0);
         sharewhiten >>= Math.min(1, Math.abs(2 ^ runtimescheduler9.length));
         dark2 = `${dark2.length}`;
         favoriteL += `${favoriteL.length}`;
      let leaguedetailsbgd = 6978396 <= sharewhiten;
      do {
         sharewhiten |= sharewhiten >> (Math.min(Math.abs(1), 2));
         if (leaguedetailsbgd) {
            break;
         }
      } while ((4 <= (5 << (Math.min(2, Math.abs(sharewhiten)))) && (runtimescheduler9.length << (Math.min(4, Math.abs(sharewhiten)))) <= 5) && leaguedetailsbgd);
      let points = 5711475 >= sharewhiten;
      do {
         sharewhiten |= runtimescheduler9.length;
         if (points) {
            break;
         }
      } while ((1 == (runtimescheduler9.length / 4)) && points);
      if (!runtimescheduler9.includes(`${sharewhiten}`)) {
          let sportN = String.fromCharCode(114,95,53,56,95,114,110,103,115,0);
          let videovarZ = true;
          let miniY = String.fromCharCode(101,95,49,56,95,100,114,97,119,97,98,108,101,0);
          let const_n5K = 3;
          let airbnbstarC = String.fromCharCode(116,101,108,95,108,95,50,52,0);
         runtimescheduler9 = `${sportN.length & airbnbstarC.length}`;
         sportN = `${miniY.length & 2}`;
         videovarZ = miniY.endsWith(`${videovarZ}`);
         const_n5K ^= miniY.length << (Math.min(2, Math.abs(const_n5K)));
         airbnbstarC += `${3 % (Math.max(9, const_n5K))}`;
      }
          let checkboxO = 5.0;
          let toponU = true;
          let sharedf = 0;
         runtimescheduler9 += `${parseInt(`${checkboxO}`) & 1}`;
         checkboxO /= Math.max(1, ((toponU ? 1 : 2) | sharedf));
         toponU = toponU || sharedf < 17;
      while (4 >= (sharewhiten & 4)) {
          let subsN = String.fromCharCode(109,111,109,101,110,116,115,95,48,95,49,51,0);
          let privacyX = 1.0;
         sharewhiten >>= Math.min(runtimescheduler9.length, 1);
         subsN = `${(String.fromCharCode(79,0) == subsN ? subsN.length : parseInt(`${privacyX}`))}`;
         privacyX *= subsN.length;
         break;
      }
      bridge2.set(forwardH, 1);
   let footballfieldA = moreP.size <= 5761426;
   do {
      moreP = new Map([[`${connectionk}`, 1]]);
      if (footballfieldA) {
         break;
      }
   } while (footballfieldA && (5 > (moreP.size | 1) && 2 > (1 | helperW.length)));
      helperW = `${(forwardH == String.fromCharCode(80,0) ? forwardH.length : parseInt(`${connectionk}`))}`;
   let libreactnativeblobd = 9107209 <= encryptZ;
   do {
      encryptZ -= (String.fromCharCode(120,0) == yellowtoredg ? yellowtoredg.length : bridge2.size);
      if (libreactnativeblobd) {
         break;
      }
   } while ((!helperW.startsWith(`${encryptZ}`)) && libreactnativeblobd);
      const_09w += `${encryptZ}`;
   while (helperW.length < subinC.size) {
      subinC.set(`${connectionk}`, nendA.length);
      break;
   }
   while ((yellowtoredg.length ^ 1) == 1 && 5 == (1 ^ activityM.size)) {
      yellowtoredg += `${const_09w.length + bridge2.size}`;
      break;
   }
   if (4 < (1 / (Math.max(6, bridge2.size))) || (bridge2.size / (Math.max(1, countrya.length))) < 1) {
      countrya = [3 | encryptZ];
   }
   if (const_09w.length == subinC.size) {
      const_09w = `${moreP.size}`;
   }
      forwardH += `${(String.fromCharCode(73,0) == launcheri ? launcheri.length : parseInt(`${connectionk}`))}`;
   let iconrightorangeX = activityM.size <= 9101231;
   do {
       let targetu = String.fromCharCode(116,95,51,50,95,99,111,109,112,105,108,101,0);
       let down5 = 4.0;
      for (let y = 0; y < 1; y++) {
          let reminderT = 2.0;
          let fullscreenmaxN = 1;
         targetu += `${2 * parseInt(`${down5}`)}`;
         reminderT -= parseFloat(`${parseInt(`${reminderT}`)}`);
         fullscreenmaxN += parseInt(`${reminderT}`) / 3;
      }
          let invitel: Map<any, any> = new Map([[String.fromCharCode(97,95,55,56,95,98,105,116,114,101,118,0),962], [String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,56,95,57,48,0),340], [String.fromCharCode(104,95,51,49,95,101,110,99,111,100,101,105,110,116,114,97,0),879]]);
          let scrollviewU: Map<any, any> = new Map([[String.fromCharCode(121,117,118,103,98,114,112,95,53,95,51,48,0),389], [String.fromCharCode(105,115,97,99,102,105,120,95,107,95,50,51,0),17], [String.fromCharCode(115,105,110,103,108,101,95,120,95,55,53,0),926]]);
         down5 -= scrollviewU.size + invitel.size;
      activityM.set(`${helperW}`, helperW.length >> (Math.min(Math.abs(2), 1)));
      if (iconrightorangeX) {
         break;
      }
   } while ((4 >= (helperW.length + activityM.size) && 4 >= (activityM.size + helperW.length)) && iconrightorangeX);
      encryptZ <<= Math.min(Math.abs(encryptZ % (Math.max(moreP.size, 1))), 3);
      launcheri = `${activityM.size}`;
   let forwardn = helperW.length >= 5669500;
   do {
       let eighteent: Array<any> = [963, 746, 938];
         eighteent = [eighteent.length];
       let arrowE = String.fromCharCode(116,119,101,97,107,115,95,121,95,52,55,0);
      for (let c = 0; c < 2; c++) {
         arrowE = `${(arrowE == String.fromCharCode(88,0) ? eighteent.length : arrowE.length)}`;
      }
      helperW += `${encryptZ}`;
      if (forwardn) {
         break;
      }
   } while ((helperW.startsWith(`${encryptZ}`)) && forwardn);
   if ((3 << (Math.min(2, launcheri.length))) < 5) {
       let username7 = 1;
       let subtextp = false;
       let belll = 3.0;
       let smallbrightnessx = false;
      if ((username7 - 4) >= 1 && !smallbrightnessx) {
          let rewardb: Array<any> = [592, 35];
          let favoritej = 2.0;
          let kuaishouX = String.fromCharCode(113,115,118,100,101,99,95,117,95,54,50,0);
          let e_center9 = true;
          let libavformaty = String.fromCharCode(98,95,48,95,108,108,118,105,100,100,115,112,101,110,99,0);
         smallbrightnessx = 6 == username7;
         rewardb.push(1);
         favoritej *= (kuaishouX == String.fromCharCode(87,0) ? parseInt(`${favoritej}`) : kuaishouX.length);
         e_center9 = !e_center9 && 2.53 > favoritej;
         libavformaty += `${libavformaty.length << (Math.min(Math.abs(3), 2))}`;
      }
      for (let f = 0; f < 3; f++) {
         belll -= 3;
      }
         belll -= (parseInt(`${belll}`) ^ (subtextp ? 3 : 3));
      for (let j = 0; j < 2; j++) {
          let imagemanagerk = String.fromCharCode(106,95,55,48,95,110,101,108,108,121,109,111,115,101,114,0);
         smallbrightnessx = imagemanagerk.length == 84;
      }
          let unreadz = String.fromCharCode(105,110,116,108,105,115,116,95,53,95,56,54,0);
          let downloadn = 5.0;
         belll *= parseInt(`${downloadn}`) * 1;
         unreadz = "3";
         downloadn += parseFloat(`${unreadz.length / 1}`);
      while (belll <= 3.88) {
          let incidento: Array<any> = [String.fromCharCode(119,111,114,100,108,101,110,95,105,95,50,53,0), String.fromCharCode(98,101,110,99,95,54,95,51,55,0)];
          let uploadF = false;
          let templateprocessor4: Array<any> = [894, 311];
         belll *= (3 ^ (uploadF ? 5 : 3));
         incidento = [3];
         uploadF = incidento.includes(templateprocessor4[0]);
         templateprocessor4 = [3 ^ incidento.length];
         break;
      }
          let referrer5 = String.fromCharCode(112,95,56,48,95,102,111,114,109,97,116,117,0);
         belll += referrer5.length;
       let nbatrophyA = String.fromCharCode(112,105,99,109,101,109,115,101,116,95,100,95,50,51,0);
      if (belll == 3.79) {
          let zhengpianS = String.fromCharCode(116,114,101,101,115,95,52,95,51,49,0);
          let tempnodata1 = 0;
         belll += ((subtextp ? 3 : 4) - 2);
         zhengpianS = `${tempnodata1 & zhengpianS.length}`;
         tempnodata1 *= zhengpianS.length;
      }
      for (let q = 0; q < 3; q++) {
         username7 |= 3;
      }
         username7 >>= Math.min(5, Math.abs(3));
      let pressurec = 6451307.0 <= belll;
      do {
         belll -= 1;
         if (pressurec) {
            break;
         }
      } while (pressurec && ((belll - 1.57) <= 5.59 && 1.57 <= belll));
      subinC = new Map([[`${countrya.length}`, countrya.length >> (Math.min(forwardH.length, 3))]]);
   }
      subinC = new Map([[`${activityM.size}`, activityM.size >> (Math.min(Math.abs(3), 5))]]);
   for (let o = 0; o < 3; o++) {
       let bellm = 3.0;
       let shrinkl: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,110,95,50,50,0),194], [String.fromCharCode(115,116,114,116,111,107,95,116,95,57,55,0),196]]);
       let right9 = String.fromCharCode(100,101,100,117,112,101,95,56,95,57,50,0);
         shrinkl = new Map([[`${shrinkl.size}`, parseInt(`${bellm}`)]]);
         right9 = `${parseInt(`${bellm}`)}`;
       let stringf = String.fromCharCode(115,95,56,52,95,115,104,114,105,110,107,0);
          let policyY = 1;
          let long_ne = String.fromCharCode(116,95,50,50,95,109,105,110,117,116,101,0);
         stringf = `${right9.length}`;
         policyY &= 1 - policyY;
         long_ne = `${1 & long_ne.length}`;
         bellm += right9.length;
         shrinkl = new Map([[`${shrinkl.size}`, parseInt(`${bellm}`) - shrinkl.size]]);
      while (stringf.length < 3) {
         right9 = `${right9.length % 1}`;
         break;
      }
       let vipsportu: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,102,104,116,120,0),true ], [String.fromCharCode(116,120,105,100,95,57,95,53,0),true ], [String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,95,121,95,57,49,0),true ]]);
          let coreJ: Map<any, any> = new Map([[String.fromCharCode(120,95,52,54,95,99,97,112,97,98,105,108,105,116,121,0),361], [String.fromCharCode(116,95,56,52,95,115,116,117,102,102,110,100,0),637], [String.fromCharCode(113,95,53,48,95,111,117,114,0),323]]);
         stringf += `${right9.length & stringf.length}`;
         coreJ.set(`${coreJ.size}`, coreJ.size);
      subinC = new Map([[`${bridge2.size}`, forwardH.length >> (Math.min(Math.abs(3), 3))]]);
   }
      forwardH += `${moreP.size >> (Math.min(1, Math.abs(parseInt(`${connectionk}`))))}`;
   if ((5 >> (Math.min(1, indicatorF.length))) <= 4) {
       let hejie: Map<any, any> = new Map([[String.fromCharCode(104,95,50,52,95,112,111,121,116,109,0),305], [String.fromCharCode(114,111,116,97,116,105,110,103,95,117,95,55,53,0),98], [String.fromCharCode(109,95,52,49,95,97,108,97,114,109,0),787]]);
       let playlists = String.fromCharCode(104,95,52,51,95,100,101,97,108,108,111,99,97,116,105,111,110,0);
       let windO: Array<any> = [String.fromCharCode(114,116,109,112,112,107,116,95,119,95,51,56,0), String.fromCharCode(101,95,57,54,95,109,115,118,99,0)];
       let bgvipxvodj = String.fromCharCode(112,101,114,102,111,114,109,101,114,95,107,95,56,0);
       let logouserS = String.fromCharCode(101,95,48,95,117,114,118,101,0);
         logouserS += `${windO.length >> (Math.min(Math.abs(3), 2))}`;
      let humidity0 = String.fromCharCode(114,102,112,104,97,57,106,122,111,109,0) == logouserS;
      do {
         logouserS = `${bgvipxvodj.length}`;
         if (humidity0) {
            break;
         }
      } while ((logouserS.includes(`${windO.length}`)) && humidity0);
         bgvipxvodj += `${playlists.length}`;
      if ((5 / (Math.max(8, hejie.size))) == 4 && (playlists.length / (Math.max(5, 1))) == 3) {
         playlists = "1";
      }
       let predictionwinm: Array<any> = [121, 107];
      if (1 <= hejie.size) {
         bgvipxvodj += `${logouserS.length}`;
      }
      while ((hejie.size & bgvipxvodj.length) < 1 && (bgvipxvodj.length & 1) < 2) {
         bgvipxvodj += "1";
         break;
      }
         logouserS += `${1 / (Math.max(10, bgvipxvodj.length))}`;
         hejie = new Map([[`${windO.length}`, (String.fromCharCode(88,0) == logouserS ? windO.length : logouserS.length)]]);
          let backicons = 4.0;
         logouserS += `${windO.length % (Math.max(4, logouserS.length))}`;
         backicons -= parseInt(`${backicons}`) * 2;
      if ((predictionwinm.length | logouserS.length) < 4) {
          let macauR = String.fromCharCode(116,105,109,101,117,116,105,108,115,95,119,95,57,54,0);
          let iconviewergifC: Array<any> = [996, 19];
          let rightf = String.fromCharCode(118,98,112,114,105,110,116,102,95,114,95,54,54,0);
          let activityk = 3.0;
          let binddatasP = true;
         logouserS += `${(playlists == String.fromCharCode(66,0) ? playlists.length : rightf.length)}`;
         macauR = "2";
         iconviewergifC = [2 >> (Math.min(Math.abs(parseInt(`${activityk}`)), 4))];
         rightf += `${((binddatasP ? 3 : 1) / (Math.max(parseInt(`${activityk}`), 5)))}`;
      }
      while (!Array.from(hejie.keys()).includes(`${predictionwinm.length}`)) {
         predictionwinm = [2 + hejie.size];
         break;
      }
          let libavcodecR = false;
          let tooltipsB = String.fromCharCode(97,99,102,105,108,116,101,114,95,57,95,57,50,0);
          let showlessK = String.fromCharCode(109,95,50,49,95,109,101,100,105,117,109,116,104,114,101,115,104,0);
         hejie.set(logouserS, 2);
         libavcodecR = tooltipsB.length == 25 || !libavcodecR;
         tooltipsB = `${tooltipsB.length}`;
         showlessK = `${((libavcodecR ? 1 : 3))}`;
          let profilepicQ = 4;
         predictionwinm = [3 & windO.length];
         profilepicQ &= profilepicQ;
         logouserS += "2";
      bridge2.set(bgvipxvodj, 3);
   }
       let next5 = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,116,95,49,0);
       let mathU: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,110,101,103,111,116,105,97,116,105,111,110,0),579], [String.fromCharCode(105,110,118,105,116,101,114,115,95,114,95,50,55,0),744], [String.fromCharCode(121,95,49,48,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0),16]]);
       let combined5 = true;
       let orientationc = String.fromCharCode(115,105,103,102,105,103,95,112,95,53,54,0);
      while (!combined5 && 3 > (1 & mathU.size)) {
         mathU = new Map([[`${combined5}`, 3]]);
         break;
      }
         mathU = new Map([[`${combined5}`, (String.fromCharCode(101,0) == orientationc ? (combined5 ? 3 : 2) : orientationc.length)]]);
      while (orientationc.length > 5 || !combined5) {
         combined5 = orientationc.length == 49;
         break;
      }
          let recommendationb = 0.0;
          let ping_ = 3.0;
          let iconS = String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,95,110,95,52,55,0);
         orientationc = `${orientationc.length & 2}`;
         recommendationb -= parseFloat(`${parseInt(`${ping_}`) - 2}`);
         ping_ -= parseFloat(`${2 + parseInt(`${ping_}`)}`);
         iconS += "3";
       let mbbannerD = 0.0;
         combined5 = mbbannerD <= 30.59;
      while (!combined5) {
         combined5 = orientationc.endsWith(`${combined5}`);
         break;
      }
          let strX = String.fromCharCode(113,95,49,50,95,112,97,115,99,97,108,0);
          let nativemoduleO = String.fromCharCode(113,95,52,51,95,101,110,115,117,114,101,0);
          let notificationfillemptyg = 0;
         mathU = new Map([[`${combined5}`, (String.fromCharCode(103,0) == strX ? strX.length : (combined5 ? 4 : 2))]]);
         nativemoduleO += `${(String.fromCharCode(116,0) == nativemoduleO ? nativemoduleO.length : notificationfillemptyg)}`;
         notificationfillemptyg ^= notificationfillemptyg;
      moreP.set(yellowtoredg, const_09w.length ^ 3);
      next5 = "1";
   if (!bingS.includes(`${indicatorF.length}`)) {
      bingS += "2";
   }
      const_09w += `${1 | moreP.size}`;
   while ((4 ^ encryptZ) > 1) {
      encryptZ &= 1 / (Math.max(1, forwardH.length));
      break;
   }
       let apple4: Array<any> = [550, 252];
       let cornershootS: Array<any> = [416, 397];
       let blackG = String.fromCharCode(97,95,56,52,95,103,101,110,101,114,97,116,111,114,0);
         cornershootS.push(1 * cornershootS.length);
      for (let e = 0; e < 2; e++) {
          let valuesr = false;
         cornershootS.push(blackG.length);
      }
          let reactv = 4.0;
          let annerf = String.fromCharCode(115,95,51,54,95,102,112,101,108,0);
          let sharede = String.fromCharCode(98,100,115,95,107,95,55,52,0);
         cornershootS.push(blackG.length);
         reactv /= Math.max(3, annerf.length);
         annerf += `${1 + annerf.length}`;
         sharede += "2";
          let utilsV: Array<any> = [829, 244, 776];
         apple4.push(2 << (Math.min(5, blackG.length)));
         utilsV.push(3);
      let blackT = apple4.length <= 7179211;
      do {
         apple4 = [(blackG == String.fromCharCode(48,0) ? apple4.length : blackG.length)];
         if (blackT) {
            break;
         }
      } while (blackT && (!cornershootS.includes(apple4.length)));
         apple4.push(blackG.length);
      if (2 > (cornershootS.length >> (Math.min(1, apple4.length))) && (2 >> (Math.min(2, cornershootS.length))) > 3) {
          let drag_ = 3.0;
         apple4.push(parseInt(`${drag_}`) ^ blackG.length);
      }
          let stationQ = 5.0;
          let hooks: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,97,95,55,52,0),true ], [String.fromCharCode(109,97,116,114,105,120,101,110,99,95,57,95,53,54,0),true ], [String.fromCharCode(112,95,55,57,95,100,101,108,101,103,97,116,101,115,0),false ]]);
          let flyer1 = String.fromCharCode(110,95,56,52,95,99,97,108,99,117,108,97,116,105,111,110,0);
         apple4.push(parseInt(`${stationQ}`));
         stationQ *= hooks.size;
         hooks = new Map([[`${hooks.size}`, (String.fromCharCode(82,0) == flyer1 ? hooks.size : flyer1.length)]]);
      for (let u = 0; u < 3; u++) {
         apple4.push(blackG.length);
      }
      launcheri += `${launcheri.length ^ 3}`;
   for (let y = 0; y < 2; y++) {
       let weiboB: Array<any> = [958, 250];
       let lessX: Map<any, any> = new Map([[String.fromCharCode(98,95,56,53,95,104,101,114,109,105,116,101,0),992], [String.fromCharCode(116,104,117,110,107,95,116,95,49,51,0),419]]);
       let orientationU: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,120,95,120,95,56,48,0),String.fromCharCode(103,95,57,57,95,118,109,97,102,109,111,116,105,111,110,0)], [String.fromCharCode(115,101,116,99,116,120,95,117,95,50,49,0),String.fromCharCode(98,95,50,57,95,102,111,114,109,97,116,116,101,114,0)], [String.fromCharCode(97,95,51,54,95,100,111,119,110,108,111,97,100,115,0),String.fromCharCode(100,101,99,111,114,114,101,108,97,116,105,111,110,95,109,95,49,55,0)]]);
      while ((3 | lessX.size) > 3 && 1 > (lessX.size | 3)) {
          let libfileD = String.fromCharCode(112,95,49,56,95,118,99,97,114,100,0);
          let turnZ = 3.0;
          let zhuboJ = 1;
          let firebaseh = 3.0;
          let rewardx: Array<any> = [634, 28];
         lessX = new Map([[`${lessX.size}`, parseInt(`${turnZ}`) % (Math.max(lessX.size, 10))]]);
         libfileD = `${libfileD.length & zhuboJ}`;
         turnZ += parseFloat(`${libfileD.length % (Math.max(7, parseInt(`${firebaseh}`)))}`);
         zhuboJ -= zhuboJ % (Math.max(parseInt(`${firebaseh}`), 10));
         rewardx.push((libfileD == String.fromCharCode(65,0) ? zhuboJ : libfileD.length));
         break;
      }
      while (5 > (lessX.size * 5) && 5 > (weiboB.length * lessX.size)) {
          let basketballN: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,118,97,108,95,101,95,50,51,0),false ], [String.fromCharCode(115,112,108,105,116,116,101,114,95,104,95,55,52,0),true ], [String.fromCharCode(106,95,54,54,95,99,111,109,112,114,101,115,115,105,111,110,0),true ]]);
          let penaltyshootH = 4;
          let libtoba = String.fromCharCode(99,111,114,112,117,115,95,114,95,49,48,48,0);
          let adultX = 0.0;
          let componentB = false;
         lessX = new Map([[`${adultX}`, ((componentB ? 1 : 1) * parseInt(`${adultX}`))]]);
         basketballN = new Map([[`${basketballN.size}`, basketballN.size]]);
         penaltyshootH -= libtoba.length >> (Math.min(Math.abs(1), 5));
         libtoba += "3";
         componentB = penaltyshootH < basketballN.size;
         break;
      }
         lessX = new Map([[`${lessX.size}`, 3 >> (Math.min(2, weiboB.length))]]);
         weiboB.push(1 << (Math.min(4, Math.abs(lessX.size))));
      while (1 <= (weiboB.length & orientationU.size)) {
         weiboB = [orientationU.size ^ 2];
         break;
      }
          let vignette9 = 1.0;
          let sharel = 1;
          let playercommonC = true;
         orientationU.set(`${sharel}`, parseInt(`${vignette9}`));
         vignette9 += ((playercommonC ? 1 : 3) & 3);
         sharel %= Math.max(((playercommonC ? 3 : 1)), 2);
      for (let o = 0; o < 3; o++) {
          let moduleso: Array<any> = [444, 383];
          let securityU = String.fromCharCode(98,95,55,57,95,99,97,116,99,104,97,98,108,101,0);
          let componentm = 2.0;
          let indicatorz = 3.0;
          let footballtrophyB: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,120,95,54,50,0),String.fromCharCode(122,95,57,54,95,114,101,115,101,116,115,0)], [String.fromCharCode(97,95,56,55,95,99,111,110,102,108,105,99,116,0),String.fromCharCode(105,95,50,49,95,99,111,110,102,105,103,117,114,101,0)], [String.fromCharCode(107,108,97,115,115,95,109,95,53,57,0),String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,110,95,55,52,0)]]);
         weiboB = [1];
         moduleso.push(footballtrophyB.size << (Math.min(Math.abs(1), 3)));
         securityU += `${parseInt(`${componentm}`) ^ moduleso.length}`;
         componentm -= parseFloat(`${3}`);
         indicatorz += parseInt(`${indicatorz}`) - 1;
         footballtrophyB.set(`${componentm}`, moduleso.length << (Math.min(Math.abs(2), 3)));
      }
          let checkboxB: Map<any, any> = new Map([[String.fromCharCode(100,100,118,97,95,56,95,55,55,0),754], [String.fromCharCode(116,114,105,109,95,101,95,57,55,0),340], [String.fromCharCode(105,111,115,95,102,95,51,55,0),941]]);
          let homeinactivem = String.fromCharCode(106,95,50,55,95,97,112,112,114,101,99,105,97,116,101,100,104,0);
         weiboB = [1];
         checkboxB = new Map([[`${checkboxB.size}`, 2 & checkboxB.size]]);
         homeinactivem = "2";
      while ((4 | orientationU.size) == 5 && (4 | lessX.size) == 2) {
         lessX = new Map([[`${lessX.size}`, 3 & lessX.size]]);
         break;
      }
      connectionk += helperW.length >> (Math.min(3, countrya.length));
   }
      countrya.push((String.fromCharCode(49,0) == const_09w ? bridge2.size : const_09w.length));

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let bridgeS = String.fromCharCode(116,119,111,119,97,121,95,104,95,54,53,0);
    let libyogaH = String.fromCharCode(113,95,56,56,95,104,111,115,116,0);
    let videoM: Array<any> = [136, 104];
    let matchesW = 3.0;
    let iconclosewhitebg3 = String.fromCharCode(112,107,99,114,121,112,116,95,104,95,49,57,0);
    let videojsI = false;
    let gmailu = String.fromCharCode(99,108,101,97,114,97,108,108,95,114,95,54,57,0);
    let libavfiltera = 3.0;
    let tempnodatagifm: Map<any, any> = new Map([[String.fromCharCode(111,95,54,95,97,115,115,112,111,114,116,0),144], [String.fromCharCode(110,95,53,51,95,110,101,99,101,115,115,97,114,121,0),679], [String.fromCharCode(114,95,51,57,95,97,118,99,105,110,116,114,97,0),732]]);
    let singaporeY: Map<any, any> = new Map([[String.fromCharCode(110,95,51,49,95,115,101,99,116,111,114,0),758], [String.fromCharCode(118,95,52,95,117,110,112,105,110,0),801]]);
    let switch_b4 = 2;
    let type_cki = String.fromCharCode(119,95,52,52,95,112,97,114,97,109,0);
    let basketballN = 2.0;
    let weibom = String.fromCharCode(101,116,119,111,114,107,95,50,95,53,56,0);
   while (5 < (2 - libyogaH.length)) {
      matchesW /= Math.max(libyogaH.length, 2);
      break;
   }
   for (let c = 0; c < 3; c++) {
      gmailu += `${switch_b4 ^ 2}`;
   }
   let iconarrowrightorangea = videoM.length >= 5214971;
   do {
      videoM.push(bridgeS.length << (Math.min(4, videoM.length)));
      if (iconarrowrightorangea) {
         break;
      }
   } while ((videoM.length < singaporeY.size) && iconarrowrightorangea);
   while (libyogaH.endsWith(type_cki)) {
       let binddatasP = String.fromCharCode(97,108,116,101,114,95,122,95,56,57,0);
      let morex = String.fromCharCode(102,95,53,110,103,50,0) == binddatasP;
      do {
          let delegate_fs1: Map<any, any> = new Map([[String.fromCharCode(104,95,54,57,95,99,97,108,99,117,108,97,116,101,0),String.fromCharCode(97,115,99,101,110,100,101,114,95,106,95,56,49,0)], [String.fromCharCode(104,95,50,55,95,114,116,112,119,0),String.fromCharCode(116,95,52,54,95,97,98,115,116,0)]]);
          let left1 = String.fromCharCode(112,108,97,110,95,115,95,52,48,0);
          let chinasameV = 3.0;
          let footballfieldd = 2;
          let customL: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,95,97,95,50,54,0),false ], [String.fromCharCode(109,112,105,98,110,95,56,95,52,48,0),false ], [String.fromCharCode(115,101,114,105,97,108,95,109,95,54,49,0),true ]]);
         binddatasP = `${customL.size >> (Math.min(3, Math.abs(parseInt(`${chinasameV}`))))}`;
         delegate_fs1.set(`${left1}`, delegate_fs1.size & 1);
         left1 += `${delegate_fs1.size / (Math.max(left1.length, 9))}`;
         chinasameV *= parseFloat(`${3}`);
         footballfieldd ^= left1.length / 3;
         customL.set(`${left1}`, delegate_fs1.size / (Math.max(left1.length, 2)));
         if (morex) {
            break;
         }
      } while (morex && (binddatasP == String.fromCharCode(71,0)));
          let pusho = 5;
          let room8 = String.fromCharCode(100,97,115,104,95,102,95,51,55,0);
          let libavdeviceG = 2.0;
         binddatasP = `${room8.length >> (Math.min(3, Math.abs(pusho)))}`;
         pusho >>= Math.min(Math.abs(1 - parseInt(`${libavdeviceG}`)), 2);
         room8 += `${parseInt(`${libavdeviceG}`)}`;
          let reminderS = String.fromCharCode(102,95,56,51,95,109,101,115,97,103,101,115,0);
          let adultg = false;
         binddatasP += `${reminderS.length}`;
      libyogaH += `${libyogaH.length}`;
      break;
   }
      videoM.push(1 & videoM.length);
      gmailu += `${videoM.length}`;
      gmailu += `${type_cki.length}`;

      if (delayValue === undefined) {

      singaporeY.set(libyogaH, 2);
   let componentregistryn = 7610302 >= tempnodatagifm.size;
   do {
      tempnodatagifm = new Map([[`${videojsI}`, gmailu.length << (Math.min(Math.abs(1), 5))]]);
      if (componentregistryn) {
         break;
      }
   } while (componentregistryn && (4 > type_cki.length));
      videoM = [parseInt(`${matchesW}`) / (Math.max(tempnodatagifm.size, 1))];
       let currentg = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,115,95,56,57,0);
         currentg = `${3 + currentg.length}`;
      for (let k = 0; k < 1; k++) {
         currentg = `${3 * currentg.length}`;
      }
          let hongkongW = String.fromCharCode(100,105,115,97,112,112,101,97,114,95,109,95,55,52,0);
          let reddownarrow5: Array<any> = [190, 488, 487];
         currentg = `${reddownarrow5.length ^ 1}`;
         hongkongW += `${1 & hongkongW.length}`;
         reddownarrow5.push(3);
      singaporeY.set(gmailu, parseInt(`${libavfiltera}`));
      singaporeY = new Map([[`${videoM.length}`, (bridgeS == String.fromCharCode(50,0) ? bridgeS.length : videoM.length)]]);
       let iconschedule_ = 1;
      for (let e = 0; e < 3; e++) {
         iconschedule_ |= iconschedule_ ^ 3;
      }
      for (let x = 0; x < 2; x++) {
          let flyer1: Map<any, any> = new Map([[String.fromCharCode(106,95,55,52,95,112,97,114,115,101,100,0),633], [String.fromCharCode(106,95,51,52,95,100,101,108,105,118,101,114,101,100,0),109], [String.fromCharCode(100,97,121,95,121,95,50,57,0),46]]);
          let vcopy_rb = String.fromCharCode(110,95,55,52,95,120,102,101,114,0);
          let reactnativeultimatelistviewj = 5.0;
         iconschedule_ ^= parseInt(`${reactnativeultimatelistviewj}`) * vcopy_rb.length;
         flyer1 = new Map([[`${flyer1.size}`, 2]]);
         vcopy_rb += `${flyer1.size}`;
      }
      if (1 == iconschedule_) {
         iconschedule_ >>= Math.min(Math.abs(iconschedule_), 2);
      }
      libavfiltera -= 2;
   while ((2 / (Math.max(9, matchesW))) > 4.91) {
      libavfiltera -= (bridgeS == String.fromCharCode(109,0) ? bridgeS.length : tempnodatagifm.size);
      break;
   }
        if (showSlider === 'none' && !paused) {

   let iconclosewhitewithbgD = matchesW >= 5496180.0;
   do {
      matchesW *= bridgeS.length / 2;
      if (iconclosewhitewithbgD) {
         break;
      }
   } while (((1.55 * matchesW) <= 2.17 || 1 <= (singaporeY.size << (Math.min(Math.abs(1), 5)))) && iconclosewhitewithbgD);
      libavfiltera *= (bridgeS == String.fromCharCode(95,0) ? bridgeS.length : parseInt(`${libavfiltera}`));
       let libnmsk = String.fromCharCode(119,95,49,51,95,116,103,99,97,108,108,115,0);
       let statsJ = String.fromCharCode(109,95,54,95,111,110,116,114,111,108,115,0);
       let orangedownarrowW: Array<any> = [523, 944];
      let libavcodecC = statsJ.length >= 8653068;
      do {
         statsJ += `${statsJ.length * 3}`;
         if (libavcodecC) {
            break;
         }
      } while (libavcodecC && (statsJ.length == 3));
      if (3 >= libnmsk.length) {
          let network9 = false;
         statsJ += `${((network9 ? 2 : 3) + 3)}`;
      }
      while (libnmsk.endsWith(statsJ)) {
         statsJ = `${1 >> (Math.min(3, statsJ.length))}`;
         break;
      }
         libnmsk = `${(statsJ == String.fromCharCode(66,0) ? orangedownarrowW.length : statsJ.length)}`;
      let expandQ = 6075136 <= libnmsk.length;
      do {
         libnmsk += `${statsJ.length + libnmsk.length}`;
         if (expandQ) {
            break;
         }
      } while ((4 < statsJ.length) && expandQ);
          let contextS: Array<any> = [47, 379];
          let textlayoutmanager7: Map<any, any> = new Map([[String.fromCharCode(109,95,51,53,95,115,111,97,98,111,114,116,0),477], [String.fromCharCode(98,95,54,55,95,102,108,111,119,0),27], [String.fromCharCode(112,95,49,57,95,114,97,116,101,0),866]]);
         statsJ = `${statsJ.length}`;
         contextS = [textlayoutmanager7.size / (Math.max(1, contextS.length))];
         textlayoutmanager7.set(`${contextS.length}`, contextS.length - 2);
      for (let j = 0; j < 3; j++) {
         libnmsk += `${statsJ.length >> (Math.min(2, libnmsk.length))}`;
      }
      for (let x = 0; x < 2; x++) {
          let renderc = 0;
         orangedownarrowW.push(3);
         renderc /= Math.max(renderc - 2, 3);
      }
         libnmsk += `${1 & statsJ.length}`;
      switch_b4 *= 3 << (Math.min(2, orangedownarrowW.length));
      tempnodatagifm = new Map([[gmailu, gmailu.length / 3]]);
       let themef = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,52,95,52,54,0);
         themef = `${themef.length}`;
       let upload3 = String.fromCharCode(110,95,53,50,95,114,116,114,101,101,0);
       let modelsh = 5.0;
       let libreanimatedu = 3.0;
      tempnodatagifm = new Map([[gmailu, 2]]);
   while (4 == (3 >> (Math.min(3, libyogaH.length))) || 3 == (videoM.length >> (Math.min(libyogaH.length, 5)))) {
      videoM.push(1);
      break;
   }
   while (5 >= (videoM.length + 5) && (singaporeY.size + 5) >= 5) {
      videoM = [switch_b4];
      break;
   }
          setShowControls(false)
        }
      } else {

   let utilsY = 8037814 >= gmailu.length;
   do {
      gmailu += `${iconclosewhitebg3.length}`;
      if (utilsY) {
         break;
      }
   } while ((5 >= videoM.length) && utilsY);
      switch_b4 += libyogaH.length & videoM.length;
       let ewardedw = String.fromCharCode(101,95,55,57,95,97,114,101,97,0);
       let time_xw = String.fromCharCode(107,95,57,48,95,110,101,103,97,116,101,0);
       let iconarrowrightwhiten: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,118,97,108,95,51,95,54,0),false ], [String.fromCharCode(111,95,49,48,48,95,101,99,116,97,110,103,108,101,0),false ], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,102,95,49,56,0),false ]]);
      let libswscalec = 7241732 >= iconarrowrightwhiten.size;
      do {
          let unreads = String.fromCharCode(99,116,111,114,95,109,95,56,57,0);
          let watchI = 1;
          let predictionwin4 = false;
         iconarrowrightwhiten = new Map([[`${predictionwin4}`, ((predictionwin4 ? 1 : 2) / (Math.max(watchI, 8)))]]);
         unreads = `${2 * unreads.length}`;
         watchI >>= Math.min(5, Math.abs(1));
         if (libswscalec) {
            break;
         }
      } while (libswscalec && (2 <= (3 + ewardedw.length) && (3 + iconarrowrightwhiten.size) <= 3));
          let homeloading1 = String.fromCharCode(98,105,116,115,116,114,105,110,103,95,117,95,54,50,0);
          let middlewaree = String.fromCharCode(113,95,57,52,0);
          let charta = true;
         iconarrowrightwhiten.set(homeloading1, time_xw.length);
         homeloading1 += `${middlewaree.length}`;
         middlewaree += `${((charta ? 5 : 4) >> (Math.min(Math.abs(3), 5)))}`;
          let constantsF = String.fromCharCode(116,114,120,116,95,48,95,48,0);
         ewardedw = `${time_xw.length ^ iconarrowrightwhiten.size}`;
         constantsF += `${constantsF.length & 1}`;
         time_xw = "1";
       let libswscaleE = 1.0;
       let subini = 1.0;
      if (!time_xw.startsWith(ewardedw)) {
         ewardedw += `${iconarrowrightwhiten.size >> (Math.min(3, Math.abs(parseInt(`${libswscaleE}`))))}`;
      }
         ewardedw = `${ewardedw.length * 1}`;
         time_xw += `${iconarrowrightwhiten.size * ewardedw.length}`;
      for (let l = 0; l < 1; l++) {
          let scrollviewZ = String.fromCharCode(105,116,101,114,97,116,101,95,52,95,49,53,0);
          let completeA: Map<any, any> = new Map([[String.fromCharCode(108,95,56,55,95,105,109,112,114,105,110,116,0),248], [String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,56,95,55,50,0),772]]);
          let basketballtrophye = String.fromCharCode(101,95,52,48,95,117,112,103,114,97,100,101,115,0);
          let b_unlocka = 1;
         iconarrowrightwhiten.set(time_xw, time_xw.length);
         scrollviewZ = `${basketballtrophye.length}`;
         completeA.set(basketballtrophye, 3);
         b_unlocka += completeA.size & 3;
      }
      basketballN /= Math.max(4, 3);
   if (!Array.from(tempnodatagifm.keys()).includes(`${videoM.length}`)) {
       let showlessR = 2;
       let philippinesb = String.fromCharCode(113,95,52,49,95,99,108,110,112,97,115,115,0);
       let commond = String.fromCharCode(97,95,50,52,95,114,101,119,97,114,100,115,0);
       let ewarded1 = 0;
      for (let q = 0; q < 1; q++) {
          let gifgoalS = 5.0;
          let confirmationa: Array<any> = [131, 114];
          let iconnotificationnewM = String.fromCharCode(118,95,53,54,95,115,99,101,110,97,114,105,111,0);
         ewarded1 *= ewarded1;
         gifgoalS -= 1 << (Math.min(2, confirmationa.length));
         confirmationa.push(iconnotificationnewM.length);
         iconnotificationnewM = "2";
      }
      while (commond.includes(`${showlessR}`)) {
         showlessR /= Math.max(1, commond.length % (Math.max(philippinesb.length, 1)));
         break;
      }
         commond += "1 ^ ewarded1";
      for (let j = 0; j < 1; j++) {
          let commentG = String.fromCharCode(101,95,56,54,95,100,101,114,105,118,97,116,105,111,110,0);
          let latnz = String.fromCharCode(115,101,116,98,105,116,95,110,95,55,56,0);
         ewarded1 ^= 3 >> (Math.min(1, latnz.length));
         commentG += `${commentG.length}`;
         latnz += `${(commentG == String.fromCharCode(73,0) ? commentG.length : commentG.length)}`;
      }
         commond += "2";
          let settingE: Map<any, any> = new Map([[String.fromCharCode(113,95,49,95,99,111,114,100,122,0),String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,101,95,55,56,0)], [String.fromCharCode(105,95,49,54,95,115,117,98,115,116,105,116,117,116,101,0),String.fromCharCode(119,95,54,52,95,115,101,108,101,99,116,105,111,110,0)]]);
         showlessR /= Math.max(2, commond.length);
         settingE = new Map([[`${settingE.size}`, settingE.size]]);
          let termsc = false;
          let inactivee: Map<any, any> = new Map([[String.fromCharCode(103,95,51,95,97,108,105,118,101,0),true ], [String.fromCharCode(100,95,50,56,95,104,105,103,104,108,105,103,116,104,101,100,0),false ], [String.fromCharCode(120,95,49,49,95,114,110,110,111,105,115,101,0),true ]]);
         commond += `${1 / (Math.max(1, inactivee.size))}`;
         termsc = (termsc ? !termsc : !termsc);
         inactivee = new Map([[`${termsc}`, ((termsc ? 5 : 5))]]);
          let save1 = String.fromCharCode(114,95,49,51,95,103,115,117,98,0);
          let mbridgeU = 4.0;
          let clearH = String.fromCharCode(113,95,56,51,95,99,118,99,0);
         showlessR /= Math.max(5, parseInt(`${mbridgeU}`) & 3);
         save1 += `${2 * save1.length}`;
         mbridgeU *= parseFloat(`${3 ^ save1.length}`);
         clearH = `${clearH.length}`;
      let greenn = showlessR >= 6671106;
      do {
          let animationsV: Array<any> = [124, 283];
          let sellN = false;
          let iconsubssuccessP = String.fromCharCode(114,95,50,56,95,100,101,116,101,99,116,101,100,0);
         showlessR >>= Math.min(Math.abs(3), 3);
         animationsV.push(animationsV.length * iconsubssuccessP.length);
         sellN = (animationsV.length ^ iconsubssuccessP.length) <= 23;
         if (greenn) {
            break;
         }
      } while (greenn && ((3 - philippinesb.length) == 5 && (philippinesb.length - showlessR) == 3));
         showlessR /= Math.max(3, (philippinesb == String.fromCharCode(55,0) ? commond.length : philippinesb.length));
       let moduleY = 5.0;
          let yellowtoredT = String.fromCharCode(108,105,110,101,115,105,122,101,95,49,95,55,50,0);
          let benefitT = 0.0;
          let launchT = 3;
         ewarded1 |= showlessR / (Math.max(2, 3));
         yellowtoredT = `${launchT * yellowtoredT.length}`;
         benefitT -= parseFloat(`${yellowtoredT.length}`);
         launchT *= parseInt(`${benefitT}`) % (Math.max(7, yellowtoredT.length));
      tempnodatagifm = new Map([[`${videoM.length}`, parseInt(`${basketballN}`) << (Math.min(videoM.length, 2))]]);
   }
   let roundy = 5627230 <= iconclosewhitebg3.length;
   do {
      iconclosewhitebg3 = `${3 >> (Math.min(Math.abs(parseInt(`${basketballN}`)), 3))}`;
      if (roundy) {
         break;
      }
   } while ((!type_cki.includes(iconclosewhitebg3)) && roundy);
      basketballN /= Math.max(1, singaporeY.size ^ 2);
      matchesW += bridgeS.length;
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let resendk = 2;
    let footballfiledlayoutg = 5.0;
    let filedB = String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,95,117,95,52,51,0);
    let relatedd = 1;
    let fileb = String.fromCharCode(117,95,54,54,95,98,119,103,116,0);
    let diceF = String.fromCharCode(106,95,57,49,95,115,119,105,112,101,0);
    let privatechatbg8 = String.fromCharCode(115,116,105,102,102,110,101,115,115,95,118,95,55,50,0);
    let minia = String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,51,95,49,49,0);
    let tumbnail2 = String.fromCharCode(105,110,116,101,114,112,95,102,95,49,51,0);
    let temperaturet = 4.0;
    let firebaseq: Array<any> = [62, 998];
    let security8 = String.fromCharCode(101,95,51,51,95,115,117,99,99,101,115,115,102,117,108,0);
    let viewerW: Map<any, any> = new Map([[String.fromCharCode(111,95,53,48,95,112,104,97,115,101,0),String.fromCharCode(106,118,101,114,115,105,111,110,95,109,95,50,52,0)], [String.fromCharCode(108,101,114,116,95,108,95,51,57,0),String.fromCharCode(98,95,49,52,95,101,110,111,117,103,104,0)], [String.fromCharCode(114,101,97,100,111,110,108,121,95,99,95,53,51,0),String.fromCharCode(114,95,52,50,95,103,105,103,97,98,121,116,101,115,0)]]);
    let largesoundc = String.fromCharCode(109,95,51,50,95,98,102,108,121,0);
    let transferG = 2;
   let subinY = 7954581.0 >= temperaturet;
   do {
      temperaturet /= Math.max((String.fromCharCode(53,0) == tumbnail2 ? firebaseq.length : tumbnail2.length), 1);
      if (subinY) {
         break;
      }
   } while (((3 / (Math.max(7, minia.length))) < 4) && subinY);
      resendk /= Math.max(5, firebaseq.length >> (Math.min(Math.abs(1), 2)));
   if (diceF != fileb) {
       let iconshareP: Map<any, any> = new Map([[String.fromCharCode(118,95,56,54,95,114,101,110,100,101,114,98,117,102,102,101,114,0),969], [String.fromCharCode(104,95,50,53,95,97,98,98,114,0),351]]);
       let coreI: Map<any, any> = new Map([[String.fromCharCode(118,95,49,53,95,99,114,108,102,0),491], [String.fromCharCode(109,117,116,97,116,105,110,103,95,101,95,51,57,0),58], [String.fromCharCode(97,95,55,95,101,116,104,101,114,0),196]]);
       let y_unlockQ: Map<any, any> = new Map([[String.fromCharCode(113,95,50,49,95,99,109,97,99,0),238], [String.fromCharCode(112,97,117,115,101,95,55,95,48,0),273]]);
       let libturbomodulejsijniF = 5;
      while (iconshareP.size <= libturbomodulejsijniF) {
         libturbomodulejsijniF /= Math.max(5, 1 >> (Math.min(1, Math.abs(coreI.size))));
         break;
      }
      let unselectedk = 6439034 <= y_unlockQ.size;
      do {
          let telemetryo = String.fromCharCode(107,95,51,50,95,115,97,118,101,0);
          let rncoreI = 3.0;
          let playercommon2 = 1.0;
          let diceS = true;
         y_unlockQ.set(`${playercommon2}`, 2 % (Math.max(parseInt(`${playercommon2}`), 2)));
         telemetryo += `${parseInt(`${rncoreI}`) | telemetryo.length}`;
         rncoreI += (String.fromCharCode(84,0) == telemetryo ? parseInt(`${rncoreI}`) : telemetryo.length);
         diceS = 80.28 < rncoreI;
         if (unselectedk) {
            break;
         }
      } while (unselectedk && (Array.from(y_unlockQ.values()).includes(iconshareP.size)));
       let lightI = 0.0;
       let iconschedule2 = 2.0;
         lightI -= parseInt(`${lightI}`) / 2;
          let placementy = 2.0;
         coreI.set(`${placementy}`, parseInt(`${placementy}`) >> (Math.min(2, Math.abs(parseInt(`${iconschedule2}`)))));
       let projectR = false;
       let condensedB = true;
          let floaterY = String.fromCharCode(115,101,113,110,111,95,118,95,53,0);
          let referrerG = String.fromCharCode(101,95,56,53,95,114,101,110,111,114,109,101,0);
          let buffern = String.fromCharCode(100,95,54,95,98,117,102,102,101,114,115,0);
         coreI.set(buffern, 3);
         floaterY += `${floaterY.length + referrerG.length}`;
         referrerG += `${floaterY.length}`;
         buffern += `${1 & referrerG.length}`;
       let backk = false;
       let cornerkick7 = true;
         y_unlockQ.set(`${lightI}`, iconshareP.size);
         iconschedule2 -= libturbomodulejsijniF;
      if (3 < (iconshareP.size & 2) && (2 & coreI.size) < 1) {
         coreI.set(`${iconschedule2}`, 2);
      }
      while (4.27 >= (lightI - 5.31) || !condensedB) {
         lightI -= 1;
         break;
      }
      fileb += `${y_unlockQ.size % 1}`;
   }
   while (privatechatbg8.length > diceF.length) {
       let klevinQ = String.fromCharCode(117,110,108,111,99,107,101,100,95,55,95,55,54,0);
       let vietnamP = String.fromCharCode(119,95,53,51,95,114,101,115,117,108,116,0);
       let fastn = 5.0;
       let homeactive3: Map<any, any> = new Map([[String.fromCharCode(98,114,105,110,103,95,111,95,56,53,0),String.fromCharCode(108,95,56,57,95,100,101,99,108,105,110,101,100,0)], [String.fromCharCode(101,120,112,101,99,116,95,102,95,54,50,0),String.fromCharCode(99,114,111,119,100,105,110,95,97,95,54,53,0)]]);
       let countryI: Map<any, any> = new Map([[String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,49,95,52,51,0),182], [String.fromCharCode(114,95,56,48,95,112,111,115,116,114,111,116,97,116,101,0),277]]);
      for (let f = 0; f < 2; f++) {
         countryI = new Map([[`${fastn}`, parseInt(`${fastn}`)]]);
      }
      for (let g = 0; g < 1; g++) {
         countryI.set(vietnamP, 1);
      }
          let homeplayerv = 1.0;
         vietnamP = `${countryI.size}`;
         homeplayerv += parseFloat(`${parseInt(`${homeplayerv}`)}`);
      let profileactivet = 5584776 <= homeactive3.size;
      do {
         homeactive3.set(`${vietnamP}`, vietnamP.length);
         if (profileactivet) {
            break;
         }
      } while ((5.7 <= (homeactive3.size * fastn) && (homeactive3.size * parseInt(`${fastn}`)) <= 4) && profileactivet);
      for (let y = 0; y < 2; y++) {
          let defaultplayerimgD = true;
          let playercommon3 = 1.0;
         homeactive3 = new Map([[`${countryI.size}`, 3]]);
         defaultplayerimgD = 86.94 == playercommon3;
         playercommon3 -= 3 << (Math.min(Math.abs(parseInt(`${playercommon3}`)), 5));
      }
      while ((vietnamP.length + 1) < 5) {
          let downloadedA: Array<any> = [543, 948, 442];
          let indicatorf = false;
          let gesturesC = 0.0;
          let typingU = 5.0;
          let iconarrowleft9: Map<any, any> = new Map([[String.fromCharCode(113,95,54,53,95,119,105,112,101,0),false ], [String.fromCharCode(113,95,52,57,95,119,101,98,0),true ]]);
         vietnamP += "1";
         downloadedA = [(parseInt(`${typingU}`) * (indicatorf ? 3 : 3))];
         indicatorf = iconarrowleft9.get(`${typingU}`) != null;
         gesturesC += parseFloat(`${1 + parseInt(`${typingU}`)}`);
         iconarrowleft9.set(`${typingU}`, iconarrowleft9.size ^ parseInt(`${typingU}`));
         break;
      }
         homeactive3 = new Map([[`${countryI.size}`, countryI.size & vietnamP.length]]);
         fastn += countryI.size;
         fastn /= Math.max(3, 2 % (Math.max(10, countryI.size)));
      while (5 < vietnamP.length) {
         vietnamP += `${1 << (Math.min(4, Math.abs(countryI.size)))}`;
         break;
      }
      let n_managerc = vietnamP.length <= 6310063;
      do {
         vietnamP = "1";
         if (n_managerc) {
            break;
         }
      } while ((vietnamP.length <= 2) && n_managerc);
         vietnamP += `${vietnamP.length % (Math.max(2, 8))}`;
      let leaguedetailsbgb = fastn <= 9623372.0;
      do {
         fastn /= Math.max(parseInt(`${fastn}`) & vietnamP.length, 5);
         if (leaguedetailsbgb) {
            break;
         }
      } while (((countryI.size & 2) < 5) && leaguedetailsbgb);
      if (!Array.from(countryI.values()).includes(homeactive3.size)) {
         countryI.set(`${countryI.size}`, countryI.size | 2);
      }
       let emojij = false;
      diceF = `${(fileb == String.fromCharCode(56,0) ? relatedd : fileb.length)}`;
      klevinQ = `${klevinQ.length + klevinQ.length}`;
      break;
   }
   while ((minia.length + parseInt(`${footballfiledlayoutg}`)) < 4) {
       let iconpipexpandM = 2.0;
       let minivodD = String.fromCharCode(112,114,105,111,114,95,52,95,57,51,0);
       let awayicons: Map<any, any> = new Map([[String.fromCharCode(98,97,100,103,101,95,109,95,55,48,0),326], [String.fromCharCode(110,95,56,49,95,105,110,116,111,0),206]]);
       let mbridgec = String.fromCharCode(104,95,50,57,95,97,100,111,112,116,101,100,0);
       let latni = String.fromCharCode(99,95,53,57,95,108,105,109,105,116,115,0);
         mbridgec += `${awayicons.size}`;
         mbridgec += `${latni.length >> (Math.min(Math.abs(1), 5))}`;
         minivodD += `${parseInt(`${iconpipexpandM}`)}`;
      while (latni.endsWith(`${awayicons.size}`)) {
          let benefitU: Map<any, any> = new Map([[String.fromCharCode(118,95,52,50,95,110,99,104,117,110,107,0),825], [String.fromCharCode(115,101,116,114,97,110,103,101,95,122,95,51,0),761]]);
          let condensed2 = 2;
         awayicons = new Map([[`${benefitU.size}`, benefitU.size - mbridgec.length]]);
         condensed2 |= condensed2;
         break;
      }
      if (minivodD.length >= 1) {
         minivodD = `${latni.length}`;
      }
      if ((parseInt(`${iconpipexpandM}`) / (Math.max(minivodD.length, 9))) > 5 || 4 > (parseInt(`${iconpipexpandM}`) / 5)) {
         minivodD = `${2 | latni.length}`;
      }
      if (minivodD.endsWith(`${iconpipexpandM}`)) {
         minivodD = `${latni.length}`;
      }
      let sendo = mbridgec.length >= 7834333;
      do {
          let privilegei = 2.0;
          let typesk = false;
          let filter_ = true;
          let showl = false;
         mbridgec += `${parseInt(`${iconpipexpandM}`)}`;
         privilegei *= ((filter_ ? 2 : 4) ^ 2);
         typesk = showl && filter_;
         showl = !filter_;
         if (sendo) {
            break;
         }
      } while (sendo && (latni != mbridgec));
          let long_zW = String.fromCharCode(97,95,56,51,95,109,118,101,120,0);
          let mounting9 = 2;
         mbridgec = `${mounting9 / (Math.max(parseInt(`${iconpipexpandM}`), 10))}`;
         long_zW += "3";
         mounting9 *= long_zW.length - 2;
         minivodD += `${parseInt(`${iconpipexpandM}`) >> (Math.min(minivodD.length, 3))}`;
      let profile8 = 9689143 <= awayicons.size;
      do {
         awayicons.set(latni, 3 * latni.length);
         if (profile8) {
            break;
         }
      } while (profile8 && ((mbridgec.length & 1) < 4 || 5 < (1 & mbridgec.length)));
      for (let m = 0; m < 1; m++) {
         awayicons.set(mbridgec, awayicons.size * mbridgec.length);
      }
      for (let k = 0; k < 2; k++) {
         iconpipexpandM -= parseFloat(`${mbridgec.length * latni.length}`);
      }
          let debug3 = String.fromCharCode(104,95,55,54,95,115,116,114,110,99,97,115,101,99,109,112,0);
          let long_99t = String.fromCharCode(112,95,49,56,95,115,104,111,114,116,101,114,0);
         iconpipexpandM += (parseFloat(`${debug3 == String.fromCharCode(79,0) ? debug3.length : minivodD.length}`));
         long_99t += "1";
         minivodD += `${latni.length & parseInt(`${iconpipexpandM}`)}`;
      footballfiledlayoutg += parseFloat(`${latni.length ^ mbridgec.length}`);
      break;
   }
   while (minia.length < 4) {
      minia = `${fileb.length + diceF.length}`;
      break;
   }
   let template_2U = 9834874 >= tumbnail2.length;
   do {
       let homeicon5 = String.fromCharCode(117,112,100,97,116,101,95,50,95,50,51,0);
       let weiboi = 5;
       let showless7: Map<any, any> = new Map([[String.fromCharCode(114,115,116,114,105,112,95,56,95,52,49,0),19], [String.fromCharCode(121,95,50,48,95,112,98,107,100,102,0),906], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,95,107,95,56,51,0),397]]);
      let notificationfillemptyA = 5946423 <= homeicon5.length;
      do {
         homeicon5 = `${weiboi | 2}`;
         if (notificationfillemptyA) {
            break;
         }
      } while ((weiboi > 1) && notificationfillemptyA);
         showless7.set(`${homeicon5}`, (String.fromCharCode(122,0) == homeicon5 ? showless7.size : homeicon5.length));
      while ((4 + showless7.size) < 3 || 5 < (weiboi + 4)) {
         showless7 = new Map([[`${showless7.size}`, 1 | showless7.size]]);
         break;
      }
      let moonH = homeicon5 == String.fromCharCode(104,55,48,100,48,114,113,101,0);
      do {
         homeicon5 += `${1 + showless7.size}`;
         if (moonH) {
            break;
         }
      } while (((homeicon5.length % (Math.max(4, 7))) >= 2 || 2 >= (showless7.size % 4)) && moonH);
      if (2 > weiboi) {
          let leaguedetailsbgZ = 5.0;
         weiboi += weiboi;
         leaguedetailsbgZ += 2;
      }
         homeicon5 = `${weiboi | showless7.size}`;
       let over_ = String.fromCharCode(110,95,49,52,95,115,111,99,107,101,116,118,97,114,0);
       let aboutR = String.fromCharCode(112,95,49,52,95,112,114,101,99,101,100,101,110,99,101,0);
         showless7 = new Map([[over_, 3]]);
       let searchb = 4.0;
       let storeY = 1.0;
      tumbnail2 += `${fileb.length}`;
      if (template_2U) {
         break;
      }
   } while (template_2U && (tumbnail2.endsWith(`${temperaturet}`)));

    if (isLocked) {

   let iconpointscoreN = security8 == String.fromCharCode(112,106,107,0);
   do {
      security8 = `${2 * resendk}`;
      if (iconpointscoreN) {
         break;
      }
   } while (iconpointscoreN && (1 <= (security8.length - 5)));
      relatedd -= (security8 == String.fromCharCode(104,0) ? fileb.length : security8.length);
       let modelsN: Array<any> = [205, 561];
       let largeT: Map<any, any> = new Map([[String.fromCharCode(116,95,54,50,95,109,112,101,103,100,97,116,97,0),405], [String.fromCharCode(115,95,49,56,95,109,117,116,97,116,101,0),390]]);
       let assistH = 4.0;
       let benefitb: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,105,100,100,101,110,95,101,95,49,48,48,0),156], [String.fromCharCode(110,95,51,49,95,114,97,103,103,97,98,108,101,0),647], [String.fromCharCode(100,105,115,97,98,108,101,95,117,95,49,48,48,0),458]]);
      for (let i = 0; i < 1; i++) {
          let gestures6 = 3;
          let downloaderu = String.fromCharCode(97,99,100,101,99,95,120,95,50,0);
          let nterstitiall: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,112,101,114,109,117,116,101,115,0),false ], [String.fromCharCode(108,101,114,112,105,110,103,95,99,95,52,48,0),false ]]);
         assistH *= downloaderu.length + 2;
         gestures6 -= gestures6;
         downloaderu += `${2 << (Math.min(2, Math.abs(gestures6)))}`;
         nterstitiall.set(`${gestures6}`, nterstitiall.size / 1);
      }
      for (let f = 0; f < 3; f++) {
          let gradleB = 2.0;
         benefitb.set(`${assistH}`, parseInt(`${assistH}`) >> (Math.min(3, Math.abs(3))));
         gradleB *= parseInt(`${gradleB}`);
      }
         assistH /= Math.max(4, 2 - modelsN.length);
      if ((5.13 / (Math.max(10, assistH))) < 5.22 && 1 < (parseInt(`${assistH}`) / (Math.max(largeT.size, 10)))) {
         largeT.set(`${assistH}`, modelsN.length);
      }
          let hooke = String.fromCharCode(121,117,118,114,103,98,95,117,95,50,48,0);
          let libbuffer0: Map<any, any> = new Map([[String.fromCharCode(114,101,103,101,120,112,95,100,95,57,53,0),917], [String.fromCharCode(118,95,57,57,95,100,101,118,101,108,111,112,101,114,0),103], [String.fromCharCode(100,101,99,114,101,97,115,101,95,97,95,50,52,0),987]]);
          let langkeyO = String.fromCharCode(103,114,101,101,116,105,110,103,95,97,95,49,50,0);
         largeT = new Map([[`${libbuffer0.size}`, libbuffer0.size]]);
         hooke = `${1 | hooke.length}`;
         langkeyO = "3";
       let animationsK = String.fromCharCode(112,97,108,109,95,100,95,54,50,0);
       let ajax8 = String.fromCharCode(115,117,112,101,114,115,101,116,95,50,95,55,50,0);
         largeT = new Map([[`${benefitb.size}`, parseInt(`${assistH}`)]]);
         benefitb = new Map([[`${benefitb.size}`, parseInt(`${assistH}`)]]);
      footballfiledlayoutg *= (parseFloat(`${tumbnail2 == String.fromCharCode(51,0) ? tumbnail2.length : modelsN.length}`));
   for (let d = 0; d < 2; d++) {
       let hookb = String.fromCharCode(111,95,49,56,95,109,105,109,101,0);
       let iconcalendarQ = String.fromCharCode(108,117,104,110,95,49,95,51,0);
       let viewerD = true;
       let frame_mc = 5.0;
       let tickedg: Map<any, any> = new Map([[String.fromCharCode(101,120,97,109,112,108,101,115,95,118,95,55,0),String.fromCharCode(97,116,114,97,99,100,97,116,97,95,119,95,57,54,0)], [String.fromCharCode(98,95,54,49,95,99,111,109,109,97,110,100,115,0),String.fromCharCode(115,107,105,112,112,97,98,108,101,95,118,95,52,55,0)], [String.fromCharCode(122,95,57,49,95,109,101,97,115,117,114,101,109,101,110,116,0),String.fromCharCode(115,95,49,95,116,106,98,101,110,99,104,116,101,115,116,0)]]);
         frame_mc /= Math.max(parseFloat(`${1}`), 4);
      let informationK = hookb.length <= 6949780;
      do {
          let selectedE: Array<any> = [443, 344, 393];
         hookb += "2";
         selectedE = [1 + selectedE.length];
         if (informationK) {
            break;
         }
      } while (informationK && (1 <= iconcalendarQ.length));
      for (let j = 0; j < 2; j++) {
         frame_mc *= parseFloat(`${3}`);
      }
      for (let e = 0; e < 2; e++) {
         tickedg = new Map([[`${viewerD}`, ((viewerD ? 4 : 3))]]);
      }
      if (3 == tickedg.size) {
         viewerD = 89 >= tickedg.size;
      }
         hookb += `${(iconcalendarQ == String.fromCharCode(82,0) ? tickedg.size : iconcalendarQ.length)}`;
      if (frame_mc <= 5.42) {
          let injuryy = String.fromCharCode(118,95,49,57,95,97,108,108,111,99,97,116,101,0);
          let defaultfootballbgm = String.fromCharCode(109,95,55,53,95,99,109,97,112,0);
         frame_mc -= parseFloat(`${iconcalendarQ.length * hookb.length}`);
         injuryy = `${defaultfootballbgm.length & injuryy.length}`;
         defaultfootballbgm = `${injuryy.length * defaultfootballbgm.length}`;
      }
          let customY: Array<any> = [289, 820, 8];
         iconcalendarQ += `${customY.length | 1}`;
       let p_unlockZ: Map<any, any> = new Map([[String.fromCharCode(101,95,49,57,95,114,100,112,99,109,0),String.fromCharCode(107,105,116,116,121,95,102,95,55,53,0)], [String.fromCharCode(97,95,56,49,95,114,103,98,121,117,118,0),String.fromCharCode(116,95,57,50,95,117,110,115,99,104,101,100,117,108,101,0)], [String.fromCharCode(112,108,97,116,102,111,114,109,95,117,95,55,55,0),String.fromCharCode(110,118,111,105,99,101,95,118,95,54,51,0)]]);
          let subsO: Map<any, any> = new Map([[String.fromCharCode(117,110,99,104,101,99,107,101,100,95,121,95,57,53,0),560], [String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,114,95,52,48,0),829], [String.fromCharCode(97,95,55,49,95,102,105,110,100,110,101,116,0),663]]);
          let rightT = String.fromCharCode(105,110,115,116,97,110,116,95,102,95,51,57,0);
         iconcalendarQ += "2";
         subsO.set(rightT, rightT.length - 1);
         frame_mc *= parseFloat(`${p_unlockZ.size}`);
      firebaseq.push(fileb.length >> (Math.min(1, Math.abs(parseInt(`${temperaturet}`)))));
   }
      viewerW.set(minia, largesoundc.length + 1);
      minia = `${tumbnail2.length}`;
      relatedd /= Math.max(privatechatbg8.length ^ 1, 5);
      

       let videobufferloadingR = 0.0;
       let profileactiveU = false;
       let arrowup_ = String.fromCharCode(111,110,116,114,97,115,116,95,53,95,56,49,0);
      for (let r = 0; r < 2; r++) {
          let iconshareC = 4;
          let inactiveE = 3.0;
          let cornerM = 1.0;
         arrowup_ += `${1 % (Math.max(4, parseInt(`${inactiveE}`)))}`;
         iconshareC %= Math.max(2 + iconshareC, 3);
         inactiveE *= parseFloat(`${iconshareC % (Math.max(parseInt(`${cornerM}`), 2))}`);
         cornerM += parseFloat(`${2}`);
      }
         videobufferloadingR *= (arrowup_.length << (Math.min(1, Math.abs((profileactiveU ? 3 : 2)))));
         videobufferloadingR -= 1 + parseInt(`${videobufferloadingR}`);
      let basketballawayteamM = 5755874.0 >= videobufferloadingR;
      do {
          let zoomb = 4.0;
          let qaagx: Array<any> = [962, 193];
          let q_managerp: Map<any, any> = new Map([[String.fromCharCode(107,95,49,52,95,101,111,99,100,0),String.fromCharCode(119,95,49,57,95,104,111,110,101,0)], [String.fromCharCode(117,110,102,97,105,114,95,48,95,55,55,0),String.fromCharCode(109,101,109,115,104,105,112,95,113,95,50,55,0)]]);
         videobufferloadingR -= arrowup_.length ^ 3;
         zoomb /= Math.max(parseFloat(`${3}`), 3);
         qaagx.push(qaagx.length | q_managerp.size);
         q_managerp = new Map([[`${q_managerp.size}`, 3]]);
         if (basketballawayteamM) {
            break;
         }
      } while (((videobufferloadingR / (Math.max(2.44, 4))) < 2.23 || !profileactiveU) && basketballawayteamM);
         videobufferloadingR *= ((profileactiveU ? 5 : 1));
         videobufferloadingR -= 3 ^ parseInt(`${videobufferloadingR}`);
      for (let u = 0; u < 3; u++) {
          let dplusq = 5;
         videobufferloadingR *= 2;
         dplusq /= Math.max(3, 2);
      }
       let defaultprofilepicM = String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,112,95,52,56,0);
      for (let u = 0; u < 2; u++) {
         profileactiveU = !profileactiveU;
      }
      minia = `${viewerW.size}`;
       let inouttargetred7 = 2.0;
       let redirect8 = 4;
       let rewardu = String.fromCharCode(119,95,51,51,95,105,116,101,114,97,116,101,0);
      while (parseInt(`${inouttargetred7}`) <= rewardu.length) {
         inouttargetred7 *= parseFloat(`${2}`);
         break;
      }
         rewardu = `${parseInt(`${inouttargetred7}`)}`;
       let send0 = String.fromCharCode(114,101,99,118,109,115,103,95,103,95,56,53,0);
         redirect8 -= redirect8 % (Math.max(3, 7));
      let google1 = redirect8 <= 8215345;
      do {
          let selectionk = true;
          let downf: Map<any, any> = new Map([[String.fromCharCode(106,100,104,117,102,102,95,105,95,51,57,0),645], [String.fromCharCode(105,95,53,48,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0),201], [String.fromCharCode(97,95,52,48,95,99,111,114,114,101,99,116,105,110,103,0),859]]);
          let downa: Array<any> = [310, 296];
          let kicks: Map<any, any> = new Map([[String.fromCharCode(111,95,55,52,95,116,101,97,109,115,0),true ], [String.fromCharCode(117,95,52,53,95,116,109,109,98,0),false ], [String.fromCharCode(101,120,112,105,114,101,95,101,95,50,0),false ]]);
         redirect8 -= downa.length;
         selectionk = (downf.size >> (Math.min(3, Math.abs(kicks.size)))) == 99;
         downf = new Map([[`${downf.size}`, 1]]);
         downa.push((downf.size - (selectionk ? 5 : 2)));
         kicks.set(`${selectionk}`, downf.size);
         if (google1) {
            break;
         }
      } while (google1 && ((rewardu.length - 1) <= 5));
          let tail6 = true;
          let spinnere = String.fromCharCode(109,95,52,56,95,117,114,108,0);
         redirect8 /= Math.max(2, send0.length);
         tail6 = spinnere.length == 73;
         spinnere += `${((tail6 ? 5 : 3))}`;
         redirect8 += 3;
      if (send0.length > 3) {
         rewardu += `${redirect8}`;
      }
          let moonu = 0;
          let mbnativeadvanced5 = false;
         send0 = `${(2 >> (Math.min(3, Math.abs((mbnativeadvanced5 ? 4 : 2)))))}`;
         moonu %= Math.max(4, 1);
         mbnativeadvanced5 = moonu >= moonu;
      temperaturet *= 1;
   if (filedB.startsWith(diceF)) {
      diceF += `${relatedd ^ resendk}`;
   }
      diceF += `${2 & filedB.length}`;
   while (!privatechatbg8.startsWith(`${diceF.length}`)) {
      diceF += `${parseInt(`${temperaturet}`) >> (Math.min(largesoundc.length, 1))}`;
      break;
   }
   while (diceF.includes(`${firebaseq.length}`)) {
       let libavcodecz = true;
       let yellowanimationlive_ = 5.0;
       let entryq: Map<any, any> = new Map([[String.fromCharCode(101,95,57,49,95,102,105,110,100,110,101,97,114,109,118,0),String.fromCharCode(113,95,49,52,95,108,111,99,97,116,105,111,110,0)], [String.fromCharCode(99,95,57,50,95,97,109,114,119,98,100,101,99,0),String.fromCharCode(108,111,111,107,115,95,117,95,55,0)]]);
      for (let o = 0; o < 1; o++) {
          let typesS = String.fromCharCode(117,95,54,52,95,99,111,110,116,101,110,116,108,101,115,115,0);
          let castingZ = 5.0;
          let bgvipsporty = 4.0;
          let f_managerU: Array<any> = [String.fromCharCode(112,95,53,50,95,115,121,110,99,109,97,114,107,101,114,0), String.fromCharCode(106,99,111,110,102,105,103,95,107,95,54,49,0)];
         yellowanimationlive_ -= 1;
         typesS = `${(typesS == String.fromCharCode(49,0) ? typesS.length : parseInt(`${bgvipsporty}`))}`;
         castingZ *= parseFloat(`${parseInt(`${castingZ}`)}`);
         bgvipsporty *= 1;
         f_managerU = [parseInt(`${bgvipsporty}`)];
      }
       let neonb: Array<any> = [993, 644, 92];
      for (let k = 0; k < 3; k++) {
          let update__A = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,105,95,53,57,0);
          let styleU: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,109,117,116,97,116,101,0),753], [String.fromCharCode(100,95,50,53,95,109,97,114,107,101,114,115,0),755]]);
          let classesz = String.fromCharCode(101,100,105,116,101,100,95,112,95,56,52,0);
         yellowanimationlive_ += update__A.length << (Math.min(Math.abs(2), 3));
         update__A += `${styleU.size}`;
         styleU.set(`${classesz}`, styleU.size + 1);
         classesz = `${classesz.length - styleU.size}`;
      }
      let mbridgeN = neonb.length >= 8985373;
      do {
         neonb.push(neonb.length);
         if (mbridgeN) {
            break;
         }
      } while (mbridgeN && (entryq.get(`${neonb.length}`) == null));
         libavcodecz = null != entryq.get(`${yellowanimationlive_}`);
      let with_an = libavcodecz ? !libavcodecz : libavcodecz;
      do {
         libavcodecz = libavcodecz && 43.38 <= yellowanimationlive_;
         if (with_an) {
            break;
         }
      } while (with_an && (yellowanimationlive_ == 3.23));
       let configR = 3.0;
       let internetO = 3.0;
      let toponq = 6275467.0 >= yellowanimationlive_;
      do {
         yellowanimationlive_ -= ((libavcodecz ? 1 : 1) / (Math.max(parseInt(`${configR}`), 7)));
         if (toponq) {
            break;
         }
      } while ((!libavcodecz) && toponq);
          let launch5 = String.fromCharCode(103,95,53,53,95,115,119,105,122,122,108,101,100,0);
          let flyerM: Map<any, any> = new Map([[String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,107,95,57,48,0),427], [String.fromCharCode(99,111,100,97,98,108,101,95,122,95,53,54,0),97]]);
          let castingk: Array<any> = [554, 317];
         libavcodecz = launch5.length > flyerM.size;
         launch5 += `${1 & castingk.length}`;
         flyerM = new Map([[`${castingk.length}`, castingk.length % (Math.max(castingk.length, 5))]]);
      firebaseq = [1];
      break;
   }
      temperaturet *= (diceF == String.fromCharCode(65,0) ? privatechatbg8.length : diceF.length);
      setIsLocked(false);
    } else {

   while (viewerW.size <= 4) {
      diceF = "1";
      break;
   }
   for (let a = 0; a < 1; a++) {
      firebaseq.push(3);
   }
   for (let u = 0; u < 1; u++) {
      diceF = `${(String.fromCharCode(69,0) == minia ? parseInt(`${footballfiledlayoutg}`) : minia.length)}`;
   }
       let chart3 = 0.0;
       let latn7 = String.fromCharCode(108,95,56,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0);
       let yellowP = true;
          let iconwechath: Array<any> = [526, 599];
          let fillZ = String.fromCharCode(100,95,57,52,95,108,115,98,102,117,108,108,0);
          let imagenomoredata1 = String.fromCharCode(102,95,57,56,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0);
         latn7 += `${(fillZ == String.fromCharCode(53,0) ? (yellowP ? 5 : 4) : fillZ.length)}`;
         iconwechath.push(imagenomoredata1.length / (Math.max(3, 8)));
         imagenomoredata1 = `${iconwechath.length}`;
         latn7 += `${latn7.length ^ parseInt(`${chart3}`)}`;
      let iconarrowrightT = 6690198.0 <= chart3;
      do {
          let singleN = false;
         chart3 /= Math.max(3, latn7.length >> (Math.min(1, Math.abs(parseInt(`${chart3}`)))));
         singleN = !singleN;
         if (iconarrowrightT) {
            break;
         }
      } while (iconarrowrightT && ((chart3 - 1.24) <= 2.88 || 1.24 <= chart3));
      let executorC = yellowP ? !yellowP : yellowP;
      do {
         yellowP = latn7.length <= 53;
         if (executorC) {
            break;
         }
      } while ((!yellowP) && executorC);
      for (let f = 0; f < 3; f++) {
         yellowP = latn7.endsWith(`${yellowP}`);
      }
      if (!yellowP || latn7.length == 3) {
         latn7 += `${latn7.length}`;
      }
         chart3 /= Math.max(((yellowP ? 4 : 2) / (Math.max(8, parseInt(`${chart3}`)))), 1);
      let klevini = latn7.length <= 7953292;
      do {
          let other0 = String.fromCharCode(114,101,115,105,122,101,95,112,95,49,55,0);
          let renew0: Array<any> = [632, 171];
          let androidB: Map<any, any> = new Map([[String.fromCharCode(111,95,50,50,95,99,111,108,108,97,116,105,111,110,0),250], [String.fromCharCode(107,95,52,49,0),493], [String.fromCharCode(119,95,49,48,95,108,97,98,101,108,115,0),813]]);
          let giftA = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,48,95,49,49,0);
         latn7 = "3";
         other0 += `${androidB.size}`;
         renew0.push(renew0.length);
         androidB = new Map([[`${androidB.size}`, giftA.length * 3]]);
         giftA += "1";
         if (klevini) {
            break;
         }
      } while (klevini && (latn7.endsWith(`${yellowP}`)));
       let c_centerW: Array<any> = [336, 466];
       let service1: Array<any> = [230, 101, 89];
      diceF = `${3 * parseInt(`${chart3}`)}`;
   if (minia != String.fromCharCode(74,0)) {
      filedB = `${parseInt(`${temperaturet}`) >> (Math.min(largesoundc.length, 5))}`;
   }
      resendk += viewerW.size;
      footballfiledlayoutg -= parseFloat(`${security8.length}`);
      

      firebaseq.push(fileb.length);
   let desc2 = String.fromCharCode(104,54,115,117,99,102,57,0) == tumbnail2;
   do {
       let gifgoal0 = false;
       let expand5 = String.fromCharCode(112,121,116,104,111,110,95,102,95,51,50,0);
       let homeplayerW = String.fromCharCode(116,95,55,50,95,101,102,102,101,99,116,105,118,101,108,121,0);
         expand5 = "3";
      for (let d = 0; d < 1; d++) {
          let eighteenb = String.fromCharCode(111,95,52,52,95,104,100,114,115,0);
         expand5 = `${homeplayerW.length}`;
         eighteenb += `${eighteenb.length ^ 3}`;
      }
         expand5 += "1";
      for (let t = 0; t < 2; t++) {
          let auto_b7M = 5.0;
          let editr = 1;
          let catagoryR = false;
          let m_unlockG = 4.0;
          let splashq = String.fromCharCode(116,111,109,99,114,121,112,116,95,121,95,55,49,0);
         gifgoal0 = catagoryR;
         auto_b7M += parseInt(`${auto_b7M}`);
         editr /= Math.max(3, 4);
         m_unlockG -= 1 ^ parseInt(`${auto_b7M}`);
         splashq += `${parseInt(`${m_unlockG}`)}`;
      }
         homeplayerW = "2";
      while (!gifgoal0 || 4 > expand5.length) {
         gifgoal0 = expand5.length < 77;
         break;
      }
      for (let g = 0; g < 3; g++) {
         gifgoal0 = expand5.length == homeplayerW.length;
      }
         expand5 += `${((gifgoal0 ? 1 : 5) ^ expand5.length)}`;
      let reactnativeratingsy = String.fromCharCode(100,99,107,0) == expand5;
      do {
          let umengF: Map<any, any> = new Map([[String.fromCharCode(117,95,55,95,102,105,110,100,0),true ], [String.fromCharCode(102,95,57,48,95,109,117,108,116,105,112,108,101,114,0),false ]]);
          let stringsv: Map<any, any> = new Map([[String.fromCharCode(100,95,57,49,95,98,105,110,115,0),541], [String.fromCharCode(103,95,51,51,95,100,105,115,112,108,97,121,115,0),972], [String.fromCharCode(119,111,114,107,108,111,97,100,95,51,95,54,52,0),184]]);
         expand5 = `${((gifgoal0 ? 3 : 1))}`;
         umengF = new Map([[`${stringsv.size}`, stringsv.size]]);
         if (reactnativeratingsy) {
            break;
         }
      } while (reactnativeratingsy && (homeplayerW == String.fromCharCode(69,0)));
      tumbnail2 += `${resendk * 1}`;
      if (desc2) {
         break;
      }
   } while ((largesoundc != String.fromCharCode(80,0)) && desc2);
   while (1 == filedB.length) {
       let templateprocessorU = String.fromCharCode(109,101,109,111,114,121,95,111,95,49,53,0);
      if (5 == templateprocessorU.length) {
         templateprocessorU = `${templateprocessorU.length / 3}`;
      }
          let huaweic = 3.0;
          let shootI = String.fromCharCode(105,110,99,108,117,100,105,110,103,95,113,95,54,48,0);
         templateprocessorU = `${(String.fromCharCode(73,0) == templateprocessorU ? templateprocessorU.length : shootI.length)}`;
         huaweic *= parseInt(`${huaweic}`);
         shootI += `${2 * parseInt(`${huaweic}`)}`;
          let streamingq: Array<any> = [298, 736];
         templateprocessorU = `${2 & streamingq.length}`;
      filedB = `${relatedd ^ 3}`;
      break;
   }
   let downG = fileb.length >= 4995321;
   do {
      fileb = `${privatechatbg8.length}`;
      if (downG) {
         break;
      }
   } while (downG && (fileb.length <= relatedd));
      tumbnail2 += `${minia.length}`;
   if (2 < (diceF.length / (Math.max(1, viewerW.size))) && 1 < (2 / (Math.max(10, diceF.length)))) {
      viewerW.set(`${temperaturet}`, (String.fromCharCode(118,0) == tumbnail2 ? parseInt(`${temperaturet}`) : tumbnail2.length));
   }
   while (parseFloat(`${minia.length}`) <= footballfiledlayoutg) {
      footballfiledlayoutg /= Math.max(parseFloat(`${firebaseq.length << (Math.min(Math.abs(3), 2))}`), 3);
      break;
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
