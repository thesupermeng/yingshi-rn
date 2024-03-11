import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControlsMin from './yys_ticked_min';
import BottomControlsMin from './yys_middle_login_min';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/yys_render_cast_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/yys_utils';
import { yys_StyleItem, yys_Libreact, yys_Bing } from '@type/yys_libzeus';
import VodCombinedGesture from '../gestures/vod/yys_pagination_nalytics';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/ajaxRoomFilled.svg';
import ProjectIcon from '@static/images/stringYing.svg'
import VodListVertical from '../vod/yys_downloader';
import GesturesGuide from '../gestures/vod/yys_zhubo_sell';
import VodLiveStationListVertical from '../vod/yys_langkey_gradlew';
import FastImage from '../common/yys_vertical_collection';

type yys_ConfigureUimanager = {
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
  episodes?: yys_Libreact
  movieList?: yys_Bing[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: yys_StyleItem[],
  isFetchingRecommendedMovies?: boolean
};

type yys_DangerKsad = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<yys_DangerKsad, yys_ConfigureUimanager>(({
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
       let debugm = 5.0;
    let nativeexb = String.fromCharCode(100,101,99,98,110,95,107,95,55,56,0);
    let overT = 4.0;
    let activek: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,99,95,55,55,0),368], [String.fromCharCode(102,95,49,54,95,99,111,109,112,114,101,115,115,111,114,0),405], [String.fromCharCode(103,95,53,54,95,114,101,108,97,121,115,0),97]]);
    let paginationC = String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,48,95,52,0);
    let roundB = String.fromCharCode(112,95,53,48,95,112,114,111,106,101,99,116,101,100,0);
    let videojsu: Array<any> = [920, 514];
    let customw: Array<any> = [396, 263, 203];
    let productH: Map<any, any> = new Map([[String.fromCharCode(115,110,111,119,95,118,95,49,55,0),false ], [String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,95,116,95,54,53,0),true ]]);
    let ewardedh = String.fromCharCode(109,95,53,49,95,115,97,103,97,0);
    let x_positione: Array<any> = [671, 872];
    let saveO: Map<any, any> = new Map([[String.fromCharCode(120,95,55,53,95,105,110,102,111,114,109,97,116,105,118,101,0),String.fromCharCode(99,108,105,101,110,116,95,54,95,53,52,0)], [String.fromCharCode(98,95,54,95,116,101,115,116,99,108,101,97,110,0),String.fromCharCode(98,95,50,55,0)]]);
    let skipb = String.fromCharCode(117,110,105,113,117,101,95,106,95,57,54,0);
    let libpangleflippedR = 4.0;
    let selectionB = true;
    let screenr: Array<any> = [String.fromCharCode(108,95,54,49,95,109,97,105,108,0), String.fromCharCode(114,101,100,101,116,101,99,116,95,97,95,49,57,0), String.fromCharCode(115,108,105,99,101,97,110,103,108,101,95,109,95,53,57,0)];
   if ((x_positione.length * paginationC.length) == 4 || 3 == (4 * x_positione.length)) {
      x_positione = [ewardedh.length >> (Math.min(nativeexb.length, 4))];
   }
   let eactv = roundB.length <= 6676239;
   do {
       let modelsc = String.fromCharCode(111,95,51,48,95,97,108,97,99,100,115,112,0);
       let ballH: Array<any> = [765, 425];
       let animationq = String.fromCharCode(117,95,50,50,95,97,107,97,114,111,115,0);
       let volumeh = String.fromCharCode(108,101,110,103,116,104,95,98,95,52,57,0);
         ballH.push(modelsc.length - 2);
      let livef = String.fromCharCode(53,115,111,50,114,120,0) == animationq;
      do {
          let untickv = 0.0;
          let entryw = String.fromCharCode(100,98,108,105,110,116,95,116,95,49,50,0);
         animationq += `${(entryw == String.fromCharCode(83,0) ? entryw.length : parseInt(`${untickv}`))}`;
         if (livef) {
            break;
         }
      } while ((5 <= animationq.length) && livef);
      while (animationq.length < 5) {
         animationq = `${(animationq == String.fromCharCode(108,0) ? ballH.length : animationq.length)}`;
         break;
      }
       let tramini_ = 2.0;
          let latn6: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,95,118,95,56,52,0),13], [String.fromCharCode(120,95,55,49,95,111,116,111,105,0),688], [String.fromCharCode(110,95,57,95,115,99,114,111,108,108,97,98,108,101,0),235]]);
         volumeh += `${(volumeh == String.fromCharCode(119,0) ? parseInt(`${tramini_}`) : volumeh.length)}`;
         latn6.set(`${latn6.size}`, latn6.size ^ 2);
      roundB = `${productH.size}`;
      if (eactv) {
         break;
      }
   } while ((roundB.length >= 1) && eactv);
   while (!Array.from(productH.values()).includes(overT)) {
      productH = new Map([[`${customw.length}`, 3]]);
      break;
   }
   while (4 == (paginationC.length * 4) || (videojsu.length * paginationC.length) == 4) {
       let schedulerE: Array<any> = [587, 415];
       let selectI = String.fromCharCode(104,111,108,101,95,52,95,56,56,0);
       let imagemanagerX = 1.0;
       let select8 = String.fromCharCode(111,119,110,115,95,105,95,52,49,0);
          let hookd = 4.0;
          let qaagZ = 4.0;
         imagemanagerX -= schedulerE.length;
         hookd -= parseInt(`${qaagZ}`);
         selectI += `${select8.length - 1}`;
         imagemanagerX /= Math.max(3, 1);
      for (let v = 0; v < 3; v++) {
         select8 = `${(selectI == String.fromCharCode(101,0) ? selectI.length : parseInt(`${imagemanagerX}`))}`;
      }
      for (let z = 0; z < 2; z++) {
          let formz = String.fromCharCode(115,95,57,56,95,109,98,97,102,102,0);
          let l_positionp = String.fromCharCode(115,95,48,95,105,109,112,111,114,116,101,100,0);
          let countryU = String.fromCharCode(107,95,54,53,95,114,108,111,116,116,105,101,0);
          let containerk = String.fromCharCode(98,111,114,100,101,114,95,50,95,56,53,0);
         selectI = `${parseInt(`${imagemanagerX}`) & 1}`;
         formz = `${containerk.length}`;
         l_positionp += `${countryU.length}`;
         countryU += `${formz.length << (Math.min(Math.abs(3), 5))}`;
         containerk = "3";
      }
      if (selectI.length <= 5) {
         schedulerE.push(schedulerE.length | 2);
      }
      while (5 < (selectI.length << (Math.min(Math.abs(4), 1)))) {
          let away8 = 1.0;
          let securityj: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,116,121,95,52,95,52,57,0),335], [String.fromCharCode(115,99,97,108,101,115,95,117,95,56,57,0),281]]);
          let halfF: Array<any> = [462, 841];
          let libavformatx = String.fromCharCode(116,95,51,57,95,111,112,101,114,97,116,105,111,110,115,0);
          let rinit_vM: Array<any> = [739, 452, 244];
         imagemanagerX += schedulerE.length;
         away8 *= halfF.length - 2;
         securityj.set(`${halfF.length}`, 1);
         libavformatx += `${(String.fromCharCode(101,0) == libavformatx ? libavformatx.length : rinit_vM.length)}`;
         rinit_vM = [libavformatx.length << (Math.min(Math.abs(3), 2))];
         break;
      }
       let searchbarG = String.fromCharCode(109,101,115,115,115,97,103,101,95,57,95,55,57,0);
       let textH = String.fromCharCode(115,111,102,116,116,104,114,101,115,104,95,112,95,50,51,0);
      if ((4.77 / (Math.max(7, imagemanagerX))) == 5.14 && (imagemanagerX / 4.77) == 2.34) {
         selectI += `${parseInt(`${imagemanagerX}`)}`;
      }
      let zoom2 = 8207742 >= schedulerE.length;
      do {
          let downloadE = false;
          let servicee = false;
          let umeng4 = true;
          let singaporei = String.fromCharCode(121,95,53,55,95,115,117,98,112,101,108,0);
          let storel = 3.0;
         schedulerE.push(searchbarG.length & select8.length);
         downloadE = storel < 34.11 && String.fromCharCode(90,0) == singaporei;
         servicee = umeng4;
         singaporei += `${((umeng4 ? 5 : 3))}`;
         storel /= Math.max(2, (parseFloat(`${1 + (umeng4 ? 3 : 3)}`)));
         if (zoom2) {
            break;
         }
      } while (zoom2 && (searchbarG.length == schedulerE.length));
         select8 += `${3 >> (Math.min(2, schedulerE.length))}`;
       let dangery = String.fromCharCode(114,101,115,111,108,118,101,100,95,106,95,54,48,0);
      paginationC = `${saveO.size << (Math.min(x_positione.length, 5))}`;
      break;
   }
      nativeexb = `${x_positione.length}`;
   while (!Array.from(productH.values()).includes(customw.length)) {
       let libffmpegkitV: Map<any, any> = new Map([[String.fromCharCode(102,111,117,110,100,97,116,105,111,110,95,57,95,51,53,0),876], [String.fromCharCode(116,101,115,116,110,101,116,95,50,95,52,56,0),40]]);
      for (let j = 0; j < 2; j++) {
         libffmpegkitV.set(`${libffmpegkitV.size}`, libffmpegkitV.size);
      }
       let hooksm = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,120,95,55,51,0);
       let libfabricjniv = String.fromCharCode(109,95,52,49,95,98,105,116,115,116,114,105,110,103,0);
       let textlayoutmanagerm = String.fromCharCode(99,95,56,50,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0);
      productH = new Map([[`${activek.size}`, activek.size | x_positione.length]]);
      break;
   }
   let adult3 = paginationC == String.fromCharCode(110,119,122,107,99,56,0);
   do {
      paginationC = `${2 + ewardedh.length}`;
      if (adult3) {
         break;
      }
   } while ((paginationC.endsWith(`${saveO.size}`)) && adult3);
      debugm += roundB.length | paginationC.length;
      x_positione.push(3 >> (Math.min(4, customw.length)));
   let storeG = 9144066 <= activek.size;
   do {
      activek.set(nativeexb, 1 + nativeexb.length);
      if (storeG) {
         break;
      }
   } while (storeG && ((paginationC.length % 5) >= 4 && 2 >= (5 % (Math.max(8, paginationC.length)))));
      overT += ewardedh.length & x_positione.length;
   if ((4 + saveO.size) < 1) {
       let download8 = 4.0;
       let forwardg: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,115,101,95,122,95,51,56,0),312], [String.fromCharCode(117,112,100,97,116,101,95,104,95,51,0),262], [String.fromCharCode(117,95,55,52,95,102,119,104,116,0),651]]);
       let lighto: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,101,95,56,95,52,48,0),false ], [String.fromCharCode(102,111,114,116,104,95,102,95,49,57,0),true ]]);
          let popupJ = 2.0;
          let bottomb = String.fromCharCode(120,95,53,57,95,112,97,105,110,116,105,110,103,0);
          let foundc = String.fromCharCode(100,95,49,57,95,109,105,110,105,109,97,108,0);
         download8 += parseFloat(`${2}`);
         popupJ *= bottomb.length;
         bottomb += `${bottomb.length}`;
         foundc += `${bottomb.length}`;
      while (Array.from(forwardg.values()).includes(lighto.size)) {
         forwardg = new Map([[`${forwardg.size}`, forwardg.size | parseInt(`${download8}`)]]);
         break;
      }
      for (let d = 0; d < 1; d++) {
          let dialogq = String.fromCharCode(100,105,115,97,112,112,101,97,114,95,107,95,54,49,0);
          let leftk = 0.0;
          let utilsO: Array<any> = [28, 554, 340];
         download8 /= Math.max(parseFloat(`${parseInt(`${download8}`) - utilsO.length}`), 5);
         dialogq = `${parseInt(`${leftk}`)}`;
         leftk *= parseFloat(`${parseInt(`${leftk}`)}`);
         utilsO.push(1 | dialogq.length);
      }
      if (1 > (forwardg.size & 5) && (forwardg.size & 5) > 2) {
          let graphX = 2.0;
          let stringV = 3;
          let typingP = String.fromCharCode(121,95,49,54,95,105,110,116,114,97,120,98,108,111,99,107,0);
          let dycreatorU = 1.0;
          let libavdevice1 = String.fromCharCode(114,95,52,50,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
         forwardg.set(libavdevice1, libavdevice1.length >> (Math.min(Math.abs(3), 1)));
         graphX /= Math.max(2, 5);
         stringV |= stringV % 2;
         typingP = `${parseInt(`${graphX}`) | typingP.length}`;
         dycreatorU -= 2;
      }
          let nterstitial0 = true;
          let minivodg = false;
          let streamingf = String.fromCharCode(105,95,51,49,95,106,112,101,103,105,110,116,0);
         forwardg.set(streamingf, ((minivodg ? 2 : 3) * streamingf.length));
         nterstitial0 = !nterstitial0;
         minivodg = (nterstitial0 ? nterstitial0 : nterstitial0);
         forwardg.set(`${download8}`, forwardg.size);
      while (3.1 <= (download8 + 1.68) && 2.92 <= (1.68 + download8)) {
         forwardg = new Map([[`${forwardg.size}`, parseInt(`${download8}`)]]);
         break;
      }
      while ((5 * forwardg.size) >= 3 && 5.46 >= (1.92 - download8)) {
          let libzeus1: Map<any, any> = new Map([[String.fromCharCode(107,95,50,51,95,119,100,101,99,0),391], [String.fromCharCode(103,101,116,120,115,115,101,95,110,95,50,52,0),693], [String.fromCharCode(108,95,50,52,95,112,111,119,0),762]]);
         forwardg.set(`${download8}`, libzeus1.size | parseInt(`${download8}`));
         break;
      }
         lighto = new Map([[`${forwardg.size}`, 1]]);
      paginationC = "2";
   }
      activek.set(roundB, roundB.length % (Math.max(1, 2)));
   for (let w = 0; w < 1; w++) {
      nativeexb = `${1 | nativeexb.length}`;
   }
   let playA = nativeexb == String.fromCharCode(112,109,48,107,57,116,117,53,109,0);
   do {
      nativeexb = `${(String.fromCharCode(100,0) == skipb ? skipb.length : parseInt(`${overT}`))}`;
      if (playA) {
         break;
      }
   } while (playA && ((overT * 5.37) == 2.79));
   if (!ewardedh.startsWith(`${customw.length}`)) {
      ewardedh += `${(skipb == String.fromCharCode(72,0) ? parseInt(`${debugm}`) : skipb.length)}`;
   }
       let taiwanO = 5.0;
       let abidetecto: Array<any> = [String.fromCharCode(100,114,97,119,97,98,108,101,95,56,95,53,55,0), String.fromCharCode(99,109,97,99,95,120,95,55,56,0)];
          let utilsy = String.fromCharCode(115,95,50,50,95,110,111,102,105,116,105,99,97,116,105,111,110,0);
          let plusU: Array<any> = [941, 224];
         abidetecto.push(utilsy.length % (Math.max(9, abidetecto.length)));
         utilsy = `${plusU.length}`;
         plusU.push(plusU.length);
          let valuesD = String.fromCharCode(109,95,50,49,95,117,115,117,98,0);
          let transferm: Array<any> = [30, 201];
         taiwanO -= parseFloat(`${3}`);
         valuesD += `${transferm.length}`;
         transferm = [transferm.length];
         taiwanO /= Math.max(parseFloat(`${parseInt(`${taiwanO}`)}`), 4);
      let hnewinterstitialU = 7459590 >= abidetecto.length;
      do {
         abidetecto = [abidetecto.length ^ parseInt(`${taiwanO}`)];
         if (hnewinterstitialU) {
            break;
         }
      } while ((!abidetecto.includes(taiwanO)) && hnewinterstitialU);
         taiwanO += parseFloat(`${2 - abidetecto.length}`);
         taiwanO += parseFloat(`${abidetecto.length}`);
      skipb += `${parseInt(`${taiwanO}`)}`;
      saveO.set(`${x_positione.length}`, 2 & productH.size);
      productH.set(skipb, 1 | videojsu.length);
       let eventr = 4;
       let chinasameO = 4.0;
      if (eventr == 1) {
          let auto_hnK: Array<any> = [514, 718];
         chinasameO -= parseFloat(`${auto_hnK.length % (Math.max(1, 7))}`);
      }
         chinasameO -= parseFloat(`${eventr >> (Math.min(5, Math.abs(3)))}`);
      for (let o = 0; o < 2; o++) {
          let catagory1 = 2.0;
          let codegenL = String.fromCharCode(115,105,100,101,95,112,95,50,48,0);
          let w_unlockf = true;
          let entry6 = String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,114,95,54,55,0);
         chinasameO += parseFloat(`${eventr / 2}`);
         catagory1 /= Math.max((parseFloat(`${parseInt(`${catagory1}`) ^ (w_unlockf ? 5 : 1)}`)), 4);
         codegenL += `${(String.fromCharCode(110,0) == codegenL ? codegenL.length : parseInt(`${catagory1}`))}`;
         w_unlockf = !w_unlockf;
         entry6 = `${3 & entry6.length}`;
      }
         eventr >>= Math.min(3, Math.abs(parseInt(`${chinasameO}`) ^ eventr));
         chinasameO += parseFloat(`${eventr % 2}`);
      let templateprocessorI = 9050891 <= eventr;
      do {
          let textinputF = 5;
          let private_9ff = 5;
         eventr -= 3 << (Math.min(5, Math.abs(textinputF)));
         textinputF %= Math.max(2, private_9ff);
         if (templateprocessorI) {
            break;
         }
      } while ((2 == (eventr / (Math.max(parseInt(`${chinasameO}`), 8))) && (2 ^ eventr) == 5) && templateprocessorI);
      saveO = new Map([[roundB, roundB.length ^ parseInt(`${debugm}`)]]);
      customw.push(videojsu.length % 1);
       let pointx = String.fromCharCode(104,95,55,48,95,108,105,110,107,115,0);
      while (pointx.endsWith(`${pointx.length}`)) {
          let xvodR: Array<any> = [853, 328];
          let tempW = String.fromCharCode(113,95,56,95,109,98,99,110,116,0);
          let clubC = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,117,95,51,54,0);
          let searchY = String.fromCharCode(101,95,51,50,95,115,116,114,110,108,101,110,0);
         pointx = `${xvodR.length}`;
         xvodR = [searchY.length | clubC.length];
         tempW = `${1 << (Math.min(4, searchY.length))}`;
         clubC = "1";
         break;
      }
         pointx += `${(String.fromCharCode(106,0) == pointx ? pointx.length : pointx.length)}`;
      if (pointx.endsWith(`${pointx.length}`)) {
         pointx += `${pointx.length + 3}`;
      }
      customw = [x_positione.length];
   let selll = productH.size <= 7484963;
   do {
      productH = new Map([[`${productH.size}`, productH.size]]);
      if (selll) {
         break;
      }
   } while ((productH.get(`${customw.length}`) == null) && selll);
      productH.set(roundB, videojsu.length);
      customw.push(roundB.length * 3);
   if (!paginationC.includes(`${debugm}`)) {
      paginationC = `${saveO.size / (Math.max(skipb.length, 1))}`;
   }
       let minimizet: Map<any, any> = new Map([[String.fromCharCode(99,101,108,108,95,56,95,51,52,0),990], [String.fromCharCode(115,99,114,117,98,98,105,110,103,95,97,95,55,56,0),749], [String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,111,95,52,48,0),282]]);
       let o_playerU = true;
          let nativeex_ = String.fromCharCode(109,95,55,57,95,105,100,99,105,110,0);
          let bootsplashU: Array<any> = [306, 291];
          let arrowg = String.fromCharCode(100,105,97,99,114,105,116,105,99,95,50,95,51,54,0);
         minimizet.set(nativeex_, bootsplashU.length << (Math.min(Math.abs(3), 3)));
         nativeex_ += `${arrowg.length}`;
         bootsplashU.push(arrowg.length);
         minimizet.set(`${o_playerU}`, (2 & (o_playerU ? 1 : 4)));
          let project_: Array<any> = [687, 320, 119];
          let signinupz = 1.0;
         minimizet = new Map([[`${project_.length}`, project_.length ^ 2]]);
         signinupz *= parseFloat(`${parseInt(`${signinupz}`)}`);
         minimizet.set(`${o_playerU}`, ((o_playerU ? 1 : 5) ^ minimizet.size));
         o_playerU = !o_playerU;
         minimizet = new Map([[`${minimizet.size}`, 3]]);
      activek = new Map([[`${saveO.size}`, saveO.size]]);
   while (1.40 <= (overT / 5.66)) {
       let searchbar7: Array<any> = [780, 621, 863];
       let telemetrym = 5.0;
         telemetrym += parseFloat(`${parseInt(`${telemetrym}`)}`);
         searchbar7 = [3];
      for (let m = 0; m < 2; m++) {
         telemetrym /= Math.max(1, parseFloat(`${searchbar7.length >> (Math.min(Math.abs(1), 5))}`));
      }
      if (2 <= (3 ^ searchbar7.length)) {
          let valuesS = String.fromCharCode(97,95,52,50,95,118,108,98,117,102,0);
          let shirtg = String.fromCharCode(115,114,99,95,100,95,49,56,0);
          let orangeQ: Array<any> = [776, 853];
          let shrinkd = String.fromCharCode(99,111,111,107,95,102,95,50,53,0);
          let teama = String.fromCharCode(113,95,49,54,95,113,115,118,115,99,97,108,101,0);
         telemetrym -= parseFloat(`${shrinkd.length}`);
         valuesS = `${2 & shirtg.length}`;
         shirtg += `${shirtg.length}`;
         orangeQ = [orangeQ.length << (Math.min(teama.length, 5))];
         shrinkd += `${1 % (Math.max(1, teama.length))}`;
      }
         searchbar7 = [parseInt(`${telemetrym}`)];
         searchbar7 = [searchbar7.length * parseInt(`${telemetrym}`)];
      x_positione.push(nativeexb.length % (Math.max(paginationC.length, 7)));
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
  
  };

  const handlePlayPause = () => {
       let delegate_qK = String.fromCharCode(118,105,115,97,95,111,95,54,48,0);
    let fadfdeebbbfdabbbabdadfaaddaaR: Array<any> = [850, 638];
    let championu = String.fromCharCode(118,100,101,99,95,100,95,55,57,0);
    let green3 = false;
    let cancelP: Array<any> = [442, 395, 14];
    let thumbnailH = String.fromCharCode(102,105,108,116,101,114,98,97,110,107,95,54,95,49,50,0);
    let detailsZ = String.fromCharCode(97,112,112,114,101,99,105,97,116,101,100,104,95,55,95,53,51,0);
    let redirecte = false;
    let cricket4: Map<any, any> = new Map([[String.fromCharCode(106,95,49,55,95,99,111,110,102,105,103,117,114,97,116,105,111,110,0),29], [String.fromCharCode(111,117,116,112,117,116,115,95,54,95,57,54,0),705]]);
    let e_titlem = String.fromCharCode(103,101,116,117,114,108,99,111,110,116,101,120,116,95,106,95,53,0);
      championu = `${fadfdeebbbfdabbbabdadfaaddaaR.length}`;
       let nativemoduleM = String.fromCharCode(121,95,55,55,95,115,117,98,99,99,0);
          let const_ts = true;
          let libavutilQ = 0;
          let zooml: Map<any, any> = new Map([[String.fromCharCode(105,95,49,53,95,97,112,112,101,110,100,99,104,97,114,0),918], [String.fromCharCode(98,108,101,101,100,95,106,95,57,57,0),179], [String.fromCharCode(97,95,57,48,95,115,105,112,114,100,97,116,97,0),903]]);
         nativemoduleM += `${zooml.size * libavutilQ}`;
         const_ts = !const_ts;
         libavutilQ |= (3 | (const_ts ? 4 : 1));
      while (!nativemoduleM.includes(`${nativemoduleM.length}`)) {
         nativemoduleM = `${nativemoduleM.length << (Math.min(Math.abs(3), 2))}`;
         break;
      }
      for (let o = 0; o < 3; o++) {
         nativemoduleM = "3";
      }
      cancelP.push(delegate_qK.length);
   let anytime0 = championu.length <= 8316436;
   do {
       let combinep = 4.0;
       let light3 = String.fromCharCode(120,117,118,109,118,115,95,97,95,52,53,0);
      while (3.70 == combinep) {
          let containerC = String.fromCharCode(99,95,52,55,95,100,101,108,105,109,0);
          let dialog7 = String.fromCharCode(114,95,55,56,95,115,101,101,107,97,98,108,101,0);
          let notifications = false;
         light3 = `${(light3 == String.fromCharCode(103,0) ? (notifications ? 1 : 4) : light3.length)}`;
         containerC += `${containerC.length << (Math.min(dialog7.length, 1))}`;
         dialog7 += `${containerC.length}`;
         notifications = String.fromCharCode(52,0) == dialog7;
         break;
      }
      while (4 < light3.length) {
         combinep /= Math.max(parseInt(`${combinep}`) & light3.length, 2);
         break;
      }
      if (5.82 > (3.56 * combinep) && (light3.length * combinep) > 3.56) {
          let contexte = String.fromCharCode(100,101,99,111,114,114,95,108,95,56,52,0);
          let lightU: Array<any> = [621, 406, 412];
          let schedulez: Array<any> = [699, 285, 311];
          let encryptC = false;
          let umengN = String.fromCharCode(115,95,52,53,95,102,108,111,99,107,0);
         light3 += `${3 & parseInt(`${combinep}`)}`;
         contexte += `${((encryptC ? 4 : 4) / 2)}`;
         lightU.push(contexte.length);
         schedulez = [2];
         encryptC = lightU.includes(encryptC);
         umengN += "3";
      }
       let native5: Map<any, any> = new Map([[String.fromCharCode(115,108,105,100,97,98,108,101,95,56,95,49,55,0),String.fromCharCode(97,95,52,56,95,99,121,99,108,101,99,108,111,99,107,0)], [String.fromCharCode(119,101,98,118,105,101,119,95,116,95,50,50,0),String.fromCharCode(101,97,99,104,95,113,95,49,0)], [String.fromCharCode(98,111,117,110,99,101,95,102,95,55,50,0),String.fromCharCode(98,95,49,95,116,121,112,101,99,111,100,101,0)]]);
       let application3: Map<any, any> = new Map([[String.fromCharCode(112,115,102,98,95,54,95,53,49,0),String.fromCharCode(116,114,105,112,108,101,116,95,97,95,56,57,0)], [String.fromCharCode(115,101,99,116,105,111,110,95,108,95,51,57,0),String.fromCharCode(102,117,108,108,115,99,114,101,101,110,95,99,95,55,56,0)]]);
         combinep /= Math.max(3, (String.fromCharCode(51,0) == light3 ? parseInt(`${combinep}`) : light3.length));
      let indexp = combinep <= 6062063.0;
      do {
         combinep += 3;
         if (indexp) {
            break;
         }
      } while ((native5.get(`${combinep}`) != null) && indexp);
      championu = "2";
      if (anytime0) {
         break;
      }
   } while (anytime0 && ((cancelP.length << (Math.min(championu.length, 3))) < 5 && (5 << (Math.min(5, cancelP.length))) < 3));
   if (1 >= (3 >> (Math.min(1, cancelP.length))) && 5 >= (thumbnailH.length >> (Math.min(Math.abs(3), 4)))) {
      thumbnailH += `${(1 - (redirecte ? 2 : 2))}`;
   }
   if (green3 || delegate_qK.length >= 5) {
       let mutedV: Array<any> = [524, 314, 147];
       let final_m3 = String.fromCharCode(122,95,52,53,95,111,114,105,101,110,116,0);
       let holder2 = true;
       let libreactperfloggerjniS: Array<any> = [30, 771];
         libreactperfloggerjniS.push((libreactperfloggerjniS.length | (holder2 ? 4 : 1)));
      while (!holder2) {
          let rncoreZ = 5.0;
          let selectedy = String.fromCharCode(121,95,52,56,95,116,101,108,108,97,114,0);
         holder2 = selectedy == String.fromCharCode(114,0);
         rncoreZ /= Math.max(2, parseInt(`${rncoreZ}`));
         selectedy += `${parseInt(`${rncoreZ}`)}`;
         break;
      }
       let paginationO = 2.0;
      while (!holder2) {
         libreactperfloggerjniS.push(mutedV.length - 3);
         break;
      }
         final_m3 += `${mutedV.length + 3}`;
         final_m3 = "1";
      for (let y = 0; y < 2; y++) {
         libreactperfloggerjniS.push(libreactperfloggerjniS.length);
      }
       let libreanimatedg: Array<any> = [String.fromCharCode(106,95,54,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0), String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,111,95,49,56,0), String.fromCharCode(110,95,53,49,95,100,105,115,116,97,110,99,101,0)];
       let placeholder_: Array<any> = [468, 662, 744];
      for (let d = 0; d < 2; d++) {
         mutedV = [2];
      }
      let dialog9 = 8912634 >= libreanimatedg.length;
      do {
         libreanimatedg.push(3);
         if (dialog9) {
            break;
         }
      } while (((libreactperfloggerjniS.length % (Math.max(4, 4))) <= 3) && dialog9);
      while (holder2) {
         placeholder_.push(parseInt(`${paginationO}`));
         break;
      }
      for (let q = 0; q < 2; q++) {
         libreactperfloggerjniS = [1];
      }
      green3 = final_m3 == String.fromCharCode(83,0);
   }
      cancelP = [3];
       let stats0 = String.fromCharCode(110,95,51,52,95,97,97,114,99,104,0);
       let renewZ = String.fromCharCode(117,95,53,54,95,115,110,97,112,0);
       let playlistd = 0;
       let description_j7a = String.fromCharCode(99,111,108,117,109,115,95,120,95,50,54,0);
         playlistd /= Math.max(4, renewZ.length - playlistd);
      if (5 < (stats0.length / (Math.max(4, 5)))) {
          let favoritej = 3;
          let macauC = String.fromCharCode(122,95,52,56,95,102,105,114,101,119,97,108,108,0);
          let areaj = String.fromCharCode(117,95,55,53,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0);
          let readn: Map<any, any> = new Map([[String.fromCharCode(107,95,56,48,95,101,110,97,98,108,101,100,0),549], [String.fromCharCode(101,95,55,55,95,117,110,97,117,116,104,111,114,105,122,101,100,0),792], [String.fromCharCode(97,95,50,57,95,100,101,114,101,103,105,115,116,101,114,0),93]]);
          let checkboxU = 1;
         playlistd <<= Math.min(4, Math.abs(macauC.length & stats0.length));
         favoritej ^= 1;
         macauC += `${readn.size >> (Math.min(Math.abs(1), 3))}`;
         areaj += `${checkboxU}`;
         readn.set(`${favoritej}`, (areaj == String.fromCharCode(98,0) ? areaj.length : favoritej));
         checkboxU /= Math.max(1, favoritej - checkboxU);
      }
       let middleo: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,122,111,111,109,101,100,0),true ], [String.fromCharCode(112,97,116,104,109,116,117,95,116,95,53,49,0),true ], [String.fromCharCode(116,114,97,110,115,108,97,116,101,95,105,95,50,50,0),true ]]);
          let vietnamT = false;
         description_j7a += `${playlistd}`;
         vietnamT = vietnamT || vietnamT;
          let loginM = String.fromCharCode(108,95,50,57,95,100,105,102,102,101,114,101,110,99,101,115,0);
         stats0 += `${description_j7a.length & 2}`;
         loginM += `${loginM.length / (Math.max(loginM.length, 9))}`;
         stats0 = "1";
      if (stats0.length < 2) {
          let shrinkY = String.fromCharCode(97,95,50,95,109,118,99,111,109,112,111,110,101,110,116,0);
          let uimanager1 = String.fromCharCode(109,112,101,103,118,105,100,101,111,95,109,95,55,53,0);
          let mailQ = String.fromCharCode(98,95,50,56,0);
         renewZ += `${description_j7a.length & 1}`;
         shrinkY += `${mailQ.length / (Math.max(uimanager1.length, 2))}`;
         uimanager1 = `${mailQ.length}`;
      }
         stats0 += `${middleo.size * renewZ.length}`;
      cancelP.push(((redirecte ? 4 : 1) ^ playlistd));
      thumbnailH = `${thumbnailH.length}`;
   for (let h = 0; h < 1; h++) {
      detailsZ = `${thumbnailH.length & 2}`;
   }
   let modelM = String.fromCharCode(55,104,104,107,109,0) == detailsZ;
   do {
       let leakcheckerL = true;
       let floaterf = 3;
       let temperaturet = 1.0;
       let libavcodecZ = 2.0;
      if (1.88 < (libavcodecZ / (Math.max(temperaturet, 8))) && (temperaturet + 1.88) < 2.52) {
         temperaturet *= floaterf % 3;
      }
         temperaturet -= parseInt(`${libavcodecZ}`);
         floaterf /= Math.max(1 << (Math.min(Math.abs(parseInt(`${libavcodecZ}`)), 1)), 4);
      if ((parseInt(`${libavcodecZ}`) + floaterf) > 4 && 1 > (floaterf << (Math.min(Math.abs(4), 4)))) {
         floaterf >>= Math.min(Math.abs(floaterf), 2);
      }
         libavcodecZ *= parseFloat(`${floaterf}`);
          let mergerh: Array<any> = [761, 942];
          let directm: Map<any, any> = new Map([[String.fromCharCode(108,97,110,101,95,56,95,50,0),35], [String.fromCharCode(111,95,55,53,95,100,105,114,97,99,0),168], [String.fromCharCode(120,106,112,101,103,95,116,95,53,54,0),569]]);
         leakcheckerL = 31 > directm.size || libavcodecZ > 58.23;
         mergerh = [mergerh.length];
         directm.set(`${mergerh.length}`, mergerh.length);
      if (1.7 == (2.81 + temperaturet) || 2.81 == (libavcodecZ + temperaturet)) {
          let statisticsS = 5;
          let membere: Array<any> = [356, 982, 772];
          let vignettes: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,110,111,100,101,95,121,95,56,57,0),625], [String.fromCharCode(103,95,56,56,95,115,118,113,101,110,99,0),115], [String.fromCharCode(122,95,57,50,95,118,99,116,101,115,116,0),611]]);
          let bridge6: Array<any> = [184, 439];
          let sortY = String.fromCharCode(119,95,51,50,95,101,110,116,114,121,112,111,105,110,116,0);
         temperaturet /= Math.max(3, floaterf & parseInt(`${libavcodecZ}`));
         statisticsS |= sortY.length | 1;
         membere.push(bridge6.length);
         vignettes = new Map([[`${bridge6.length}`, 1]]);
         sortY = `${statisticsS}`;
      }
      for (let n = 0; n < 3; n++) {
         temperaturet += 1;
      }
          let flipperG = String.fromCharCode(117,112,100,97,116,101,114,95,122,95,53,54,0);
          let leaguez: Array<any> = [935, 510];
          let networky = 5.0;
         floaterf <<= Math.min(Math.abs(2 * floaterf), 4);
         flipperG += "1";
         leaguez = [leaguez.length];
         networky -= parseFloat(`${1 + flipperG.length}`);
      for (let v = 0; v < 3; v++) {
          let showT = String.fromCharCode(98,95,50,51,95,115,116,97,116,105,115,116,105,99,115,0);
         libavcodecZ += (parseFloat(`${(leakcheckerL ? 3 : 4) << (Math.min(Math.abs(parseInt(`${temperaturet}`)), 4))}`));
         showT = `${showT.length}`;
      }
         temperaturet /= Math.max((parseInt(`${libavcodecZ}`) | (leakcheckerL ? 1 : 2)), 5);
      let collection5 = temperaturet <= 5458961.0;
      do {
         temperaturet += 1;
         if (collection5) {
            break;
         }
      } while ((4 < (3 >> (Math.min(2, Math.abs(floaterf)))) || 4 < (floaterf / (Math.max(3, 3)))) && collection5);
      detailsZ += `${(String.fromCharCode(72,0) == detailsZ ? cancelP.length : detailsZ.length)}`;
      if (modelM) {
         break;
      }
   } while ((detailsZ.endsWith(`${delegate_qK.length}`)) && modelM);

    setShowSliderThumbnail(!showSliderThumbnail);

   for (let d = 0; d < 2; d++) {
      redirecte = (11 > (detailsZ.length * (redirecte ? detailsZ.length : 11)));
   }
   while (thumbnailH == String.fromCharCode(57,0)) {
      championu = `${thumbnailH.length}`;
      break;
   }
      fadfdeebbbfdabbbabdadfaaddaaR.push(3);
   let windH = redirecte ? !redirecte : redirecte;
   do {
       let mappingD = String.fromCharCode(105,110,115,116,97,110,99,101,115,95,112,95,55,51,0);
       let textM: Array<any> = [803, 549];
       let final_2eb = 4.0;
      for (let p = 0; p < 3; p++) {
         textM.push(parseInt(`${final_2eb}`));
      }
      let colorsu = 6571999 >= textM.length;
      do {
         textM.push(parseInt(`${final_2eb}`));
         if (colorsu) {
            break;
         }
      } while ((1 > (mappingD.length - textM.length)) && colorsu);
      while (1 == (textM.length / (Math.max(mappingD.length, 6))) || (mappingD.length / 1) == 4) {
          let robotom: Map<any, any> = new Map([[String.fromCharCode(122,95,52,51,95,112,114,111,99,101,115,115,0),String.fromCharCode(99,95,56,53,95,115,101,116,115,104,97,114,101,0)], [String.fromCharCode(107,95,50,49,95,97,100,100,105,116,105,111,110,115,0),String.fromCharCode(102,95,51,56,95,97,117,116,111,115,99,114,111,108,108,105,110,103,0)]]);
          let cricketO: Map<any, any> = new Map([[String.fromCharCode(110,95,57,57,95,103,105,118,101,110,0),992], [String.fromCharCode(109,111,116,99,111,109,112,95,106,95,52,52,0),250]]);
          let show6: Array<any> = [215, 66, 945];
          let roundj = false;
         mappingD = `${2 << (Math.min(5, textM.length))}`;
         robotom.set(`${roundj}`, ((roundj ? 5 : 1) % (Math.max(show6.length, 1))));
         cricketO.set(`${show6.length}`, show6.length);
         break;
      }
         textM.push(mappingD.length);
          let libfabricjni1 = String.fromCharCode(110,95,55,51,95,101,118,97,108,115,0);
          let targetQ = String.fromCharCode(98,117,116,116,111,110,115,95,52,95,51,51,0);
          let favorite2 = false;
         textM = [libfabricjni1.length + 2];
         libfabricjni1 += `${targetQ.length | targetQ.length}`;
      let layout_ = final_2eb <= 9370620.0;
      do {
         final_2eb /= Math.max(parseInt(`${final_2eb}`) >> (Math.min(Math.abs(1), 5)), 3);
         if (layout_) {
            break;
         }
      } while (layout_ && ((mappingD.length & 3) > 5));
       let dplus1 = 2.0;
       let mbjscommonP = 1.0;
       let minimizeo = String.fromCharCode(116,95,50,50,95,111,100,100,97,118,103,0);
      while (1.83 <= (mbjscommonP + minimizeo.length)) {
          let controlsY = true;
          let libsgcore8 = 4.0;
          let modulef = String.fromCharCode(121,95,54,50,95,100,97,115,104,101,115,0);
          let libflippero = 0;
          let saver = String.fromCharCode(100,101,116,101,99,116,105,110,103,95,51,95,50,52,0);
         minimizeo = `${parseInt(`${libsgcore8}`) - 3}`;
         controlsY = (60 >= ((controlsY ? 60 : saver.length) << (Math.min(saver.length, 3))));
         libsgcore8 += modulef.length << (Math.min(Math.abs(3), 4));
         modulef += "2";
         libflippero /= Math.max(modulef.length, 2);
         break;
      }
      redirecte = fadfdeebbbfdabbbabdadfaaddaaR.length >= detailsZ.length;
      if (windH) {
         break;
      }
   } while (windH && ((fadfdeebbbfdabbbabdadfaaddaaR.length + 5) == 5 && fadfdeebbbfdabbbabdadfaaddaaR.length == 5));
   if (delegate_qK.endsWith(`${green3}`)) {
      delegate_qK += `${1 * thumbnailH.length}`;
   }
   if (thumbnailH.startsWith(`${green3}`)) {
      green3 = !redirecte && championu.length <= 13;
   }
   let verticalQ = String.fromCharCode(110,117,48,119,103,107,0) == thumbnailH;
   do {
      thumbnailH = `${((green3 ? 5 : 3))}`;
      if (verticalQ) {
         break;
      }
   } while (verticalQ && (cancelP.length >= thumbnailH.length));
      thumbnailH = `${(2 / (Math.max(9, (green3 ? 1 : 5))))}`;
   let textlayoutmanager4 = redirecte ? !redirecte : redirecte;
   do {
       let private_ukE = 1.0;
       let root8: Array<any> = [988, 480];
       let catagorye = true;
       let update_5n = String.fromCharCode(98,95,51,48,95,100,115,116,0);
       let hiad_ = false;
      let faviconI = 6255124 >= root8.length;
      do {
          let configure5 = String.fromCharCode(122,95,51,52,95,111,110,116,114,97,115,116,0);
         root8 = [root8.length / (Math.max(2, update_5n.length))];
         configure5 += `${configure5.length * 3}`;
         if (faviconI) {
            break;
         }
      } while (faviconI && (!catagorye));
      for (let h = 0; h < 3; h++) {
          let langJ = String.fromCharCode(113,95,51,57,95,112,97,116,104,109,116,117,0);
          let dnewarchdefaultsC = String.fromCharCode(100,95,56,49,95,114,101,99,118,0);
         update_5n += `${1 + update_5n.length}`;
         langJ += `${langJ.length}`;
         dnewarchdefaultsC = `${dnewarchdefaultsC.length}`;
      }
      let armva3 = private_ukE <= 7950433.0;
      do {
         private_ukE += (parseFloat(`${(catagorye ? 1 : 1) % (Math.max(2, 1))}`));
         if (armva3) {
            break;
         }
      } while (armva3 && ((parseFloat(`${root8.length}`) / (Math.max(1, private_ukE))) > 2.58));
      if (root8.length > 3) {
          let stationsx = String.fromCharCode(97,95,53,54,95,104,112,97,114,97,109,115,0);
          let yellowq: Array<any> = [String.fromCharCode(109,95,50,51,95,114,111,119,105,100,0), String.fromCharCode(112,95,51,51,95,115,112,101,99,116,114,97,108,0), String.fromCharCode(122,95,56,48,95,106,114,101,118,100,99,116,0)];
          let checkboxO = String.fromCharCode(120,95,53,54,95,109,98,102,105,108,116,101,114,0);
          let constantsS: Array<any> = [163, 251, 889];
         root8 = [(String.fromCharCode(81,0) == checkboxO ? constantsS.length : checkboxO.length)];
         stationsx += `${yellowq.length + stationsx.length}`;
         yellowq.push(stationsx.length << (Math.min(Math.abs(2), 1)));
         constantsS = [1];
      }
         catagorye = !update_5n.endsWith(`${private_ukE}`);
      if (!update_5n.startsWith(`${private_ukE}`)) {
         update_5n = `${parseInt(`${private_ukE}`) - 3}`;
      }
          let relatedZ: Array<any> = [115, 652, 92];
          let zoomf = 0;
         update_5n += `${root8.length << (Math.min(Math.abs(1), 2))}`;
         relatedZ = [1];
         zoomf -= 3;
       let humidityS = String.fromCharCode(97,95,52,49,95,99,102,102,116,105,0);
       let combine7 = String.fromCharCode(100,121,110,97,109,105,99,115,95,101,95,57,48,0);
      while (root8.length < update_5n.length) {
         update_5n = `${((hiad_ ? 1 : 5) * 3)}`;
         break;
      }
       let goals = 2.0;
      while (catagorye) {
         catagorye = update_5n.length == 71;
         break;
      }
      while (!hiad_) {
          let tickp = 4.0;
          let hiadw = String.fromCharCode(105,110,116,120,120,95,113,95,51,55,0);
          let sports6: Array<any> = [String.fromCharCode(102,95,54,48,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0), String.fromCharCode(108,95,55,55,95,98,111,120,101,115,0)];
          let sinaw = 5;
          let ajax4 = String.fromCharCode(115,95,50,57,95,100,99,116,115,117,98,0);
         humidityS = `${update_5n.length}`;
         tickp += parseFloat(`${sports6.length}`);
         hiadw += `${hiadw.length + 3}`;
         sports6.push(sinaw << (Math.min(ajax4.length, 3)));
         sinaw -= sports6.length;
         ajax4 = `${sinaw}`;
         break;
      }
       let circlep = String.fromCharCode(115,101,110,100,101,114,115,95,119,95,50,54,0);
       let tooltipsw = String.fromCharCode(98,95,50,54,95,116,105,108,116,0);
      let libyogal = 6368942.0 <= private_ukE;
      do {
         private_ukE *= parseFloat(`${parseInt(`${goals}`)}`);
         if (libyogal) {
            break;
         }
      } while (libyogal && (2 <= (4 - parseInt(`${private_ukE}`)) || (5.14 - private_ukE) <= 5.47));
      let libjsinspectorf = goals <= 6406301.0;
      do {
         goals *= parseFloat(`${parseInt(`${goals}`) % 2}`);
         if (libjsinspectorf) {
            break;
         }
      } while ((!combine7.startsWith(`${goals}`)) && libjsinspectorf);
      redirecte = (thumbnailH.length & cancelP.length) == 16;
      if (textlayoutmanager4) {
         break;
      }
   } while ((!redirecte) && textlayoutmanager4);
   for (let f = 0; f < 3; f++) {
       let baiduR: Map<any, any> = new Map([[String.fromCharCode(97,95,55,53,95,109,108,112,100,115,112,0),303], [String.fromCharCode(112,95,53,53,95,102,119,100,0),614]]);
       let recommendationo = String.fromCharCode(111,118,101,114,114,105,100,101,95,121,95,53,0);
       let savez = 4;
         savez %= Math.max(recommendationo.length, 5);
      for (let x = 0; x < 1; x++) {
         baiduR.set(recommendationo, baiduR.size / (Math.max(recommendationo.length, 1)));
      }
         recommendationo = `${savez}`;
      for (let k = 0; k < 1; k++) {
          let ticked1 = 0;
          let completeO = String.fromCharCode(98,95,54,54,95,105,110,116,102,114,0);
          let sansD = 5;
          let plash8 = 5;
          let gestureQ: Map<any, any> = new Map([[String.fromCharCode(109,95,52,50,95,112,101,101,108,111,102,102,0),62], [String.fromCharCode(100,95,52,56,95,114,101,117,112,108,111,97,100,0),960], [String.fromCharCode(106,95,50,56,95,100,121,110,98,117,102,0),197]]);
         baiduR = new Map([[`${baiduR.size}`, completeO.length]]);
         ticked1 += sansD + 1;
         completeO += `${plash8 + 1}`;
         sansD &= ticked1;
         plash8 -= plash8;
         gestureQ.set(`${plash8}`, plash8 * 2);
      }
      if (3 == (recommendationo.length | 2) && 5 == (recommendationo.length | 2)) {
          let circlex = String.fromCharCode(115,116,100,111,117,116,95,111,95,50,54,0);
         recommendationo += `${circlex.length}`;
      }
      if (!recommendationo.includes(`${baiduR.size}`)) {
          let show1 = 3.0;
          let libjsijniprofiler7: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,111,114,95,118,95,50,48,0),String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,114,95,50,56,0)], [String.fromCharCode(105,95,51,95,115,101,108,101,99,116,101,100,0),String.fromCharCode(100,105,102,102,120,95,109,95,50,54,0)], [String.fromCharCode(101,95,51,52,95,115,116,114,101,97,109,105,100,0),String.fromCharCode(116,95,55,53,95,105,97,100,115,116,0)]]);
          let valuesQ = String.fromCharCode(103,114,97,100,102,117,110,95,117,95,51,50,0);
         recommendationo = `${(valuesQ == String.fromCharCode(97,0) ? valuesQ.length : baiduR.size)}`;
         show1 /= Math.max(parseFloat(`${libjsijniprofiler7.size}`), 5);
         libjsijniprofiler7.set(`${show1}`, libjsijniprofiler7.size);
      }
          let codegen4 = true;
          let optionsz = String.fromCharCode(100,95,52,51,95,97,97,99,101,110,99,0);
          let mintegralC: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,105,116,108,101,115,95,52,95,51,48,0),true ], [String.fromCharCode(116,95,49,48,48,95,104,101,97,112,0),false ]]);
         savez <<= Math.min(3, Math.abs(savez & optionsz.length));
         codegen4 = mintegralC.size <= 69;
         optionsz += `${(mintegralC.size | (codegen4 ? 1 : 5))}`;
         savez &= savez;
      if (recommendationo.endsWith(`${baiduR.size}`)) {
          let backX = String.fromCharCode(112,104,114,97,115,101,115,95,114,95,54,0);
          let form8 = String.fromCharCode(119,101,101,107,100,97,121,115,95,55,95,51,0);
          let classesD = false;
          let canvasL: Map<any, any> = new Map([[String.fromCharCode(108,95,55,54,95,118,101,114,116,115,0),599], [String.fromCharCode(103,95,56,52,95,99,111,110,116,97,105,110,101,100,0),7]]);
         recommendationo = `${recommendationo.length}`;
         backX += `${backX.length % 3}`;
         form8 += `${(form8 == String.fromCharCode(67,0) ? canvasL.size : form8.length)}`;
         classesD = backX.length == 88;
         canvasL = new Map([[`${classesD}`, ((classesD ? 4 : 1) % 1)]]);
      }
      cancelP.push(2 / (Math.max(2, detailsZ.length)));
   }
    delayControls(!paused);

   let actionsr = String.fromCharCode(119,52,115,114,56,102,95,107,54,54,0) == detailsZ;
   do {
      detailsZ = `${detailsZ.length << (Math.min(Math.abs(3), 1))}`;
      if (actionsr) {
         break;
      }
   } while (actionsr && (thumbnailH.length <= 5));
      green3 = green3 && thumbnailH.length >= 52;
      fadfdeebbbfdabbbabdadfaaddaaR.push((cancelP.length * (green3 ? 1 : 1)));
       let constantsd = String.fromCharCode(114,101,99,121,99,108,101,95,114,95,51,48,0);
      while (constantsd.length <= 1 || constantsd.length <= 1) {
         constantsd = `${constantsd.length}`;
         break;
      }
         constantsd += `${constantsd.length & 3}`;
      if (constantsd == String.fromCharCode(108,0) || constantsd.length <= 5) {
         constantsd = "3";
      }
      thumbnailH = `${2 >> (Math.min(2, fadfdeebbbfdabbbabdadfaaddaaR.length))}`;
      championu += `${((green3 ? 1 : 1) * (redirecte ? 2 : 1))}`;
       let updatesN = String.fromCharCode(118,95,53,55,95,117,110,119,114,97,112,112,101,100,0);
       let package_rg = 1;
       let assistb = String.fromCharCode(101,110,116,114,105,101,115,95,109,95,53,54,0);
       let libglogJ = false;
         libglogJ = !libglogJ && assistb.length == 37;
         package_rg %= Math.max((assistb == String.fromCharCode(97,0) ? package_rg : assistb.length), 2);
      if (3 <= package_rg) {
         updatesN += `${updatesN.length / (Math.max(6, package_rg))}`;
      }
          let middleb = 0.0;
         package_rg /= Math.max(updatesN.length, 1);
         middleb += parseFloat(`${1}`);
          let upgrade_ = String.fromCharCode(100,95,51,95,100,101,102,105,110,101,0);
         updatesN += "1";
         upgrade_ += "3";
      for (let m = 0; m < 2; m++) {
          let downloaderW = String.fromCharCode(106,95,52,57,95,99,111,100,101,114,115,0);
         libglogJ = updatesN.length < 84;
         downloaderW += `${downloaderW.length}`;
      }
         libglogJ = updatesN.startsWith(`${package_rg}`);
         assistb += "1";
      thumbnailH += `${3 >> (Math.min(2, thumbnailH.length))}`;
   if (3 > cancelP.length) {
      championu = `${championu.length}`;
   }
       let service_ = 4;
       let sharedP = String.fromCharCode(115,117,114,102,95,51,95,50,57,0);
         service_ >>= Math.min(5, sharedP.length);
      for (let n = 0; n < 2; n++) {
          let zhubo2: Array<any> = [141, 842, 551];
          let sansh = 3;
          let commonh: Map<any, any> = new Map([[String.fromCharCode(110,95,49,54,95,116,105,109,101,99,111,100,101,0),214], [String.fromCharCode(115,99,114,101,101,110,115,95,54,95,53,49,0),925]]);
          let mathl = true;
          let pressure4 = 2.0;
         sharedP += `${(1 % (Math.max(7, (mathl ? 4 : 3))))}`;
         zhubo2.push(1);
         sansh += zhubo2.length & parseInt(`${pressure4}`);
         commonh = new Map([[`${zhubo2.length}`, 3]]);
         mathl = 13.41 > pressure4;
      }
      if ((service_ * 5) >= 4 && (service_ * 5) >= 5) {
          let filterX = String.fromCharCode(97,95,52,53,95,121,117,118,112,0);
          let qaage = true;
          let bridger = String.fromCharCode(115,105,100,120,95,55,95,51,55,0);
          let modelsG: Array<any> = [739, 230];
         service_ %= Math.max(1, 4);
         filterX += `${2 % (Math.max(4, filterX.length))}`;
         qaage = modelsG.length > 18;
         bridger = `${(filterX.length & (qaage ? 2 : 3))}`;
         modelsG.push(bridger.length);
      }
         service_ >>= Math.min(Math.abs(3), 1);
          let moviesD = 5;
          let imagemanagerq = 2.0;
         sharedP = `${moviesD}`;
         moviesD += parseInt(`${imagemanagerq}`) % (Math.max(6, parseInt(`${imagemanagerq}`)));
         service_ *= sharedP.length;
      detailsZ += `${championu.length >> (Math.min(1, fadfdeebbbfdabbbabdadfaaddaaR.length))}`;
      delegate_qK = `${((redirecte ? 2 : 4) >> (Math.min(Math.abs(2), 1)))}`;
      cricket4.set(`${green3}`, ((green3 ? 3 : 2) & 3));
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let latnS: Array<any> = [998, 382, 177];
    let videojsa: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,112,115,101,95,113,95,56,0),620], [String.fromCharCode(108,95,52,53,95,100,105,115,112,111,115,97,98,108,101,0),50]]);
    let incidentb = String.fromCharCode(105,109,112,111,114,116,101,100,95,109,95,57,54,0);
    let libswscaleL = 3;
    let eighteenv = 2;
    let activityi = String.fromCharCode(99,109,105,111,95,50,95,51,49,0);
    let shrinkP = true;
    let qaagN = false;
    let downV = 3.0;
    let mbbannerM: Array<any> = [481, 878, 790];
    let graph0 = true;
    let green2: Map<any, any> = new Map([[String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,105,95,49,55,0),470], [String.fromCharCode(99,95,49,57,95,112,111,112,0),43], [String.fromCharCode(107,95,50,55,95,102,111,117,114,99,99,0),436]]);
    let next5 = String.fromCharCode(97,116,111,109,105,99,111,112,115,95,119,95,50,56,0);
    let shrinkv = 1;
    let renewh = String.fromCharCode(116,95,55,54,95,103,101,116,97,100,100,114,105,110,102,111,0);
    let langkeye = String.fromCharCode(115,95,55,53,95,114,116,99,99,0);
      latnS.push((incidentb == String.fromCharCode(89,0) ? green2.size : incidentb.length));
   while (1 < mbbannerM.length) {
      mbbannerM = [videojsa.size];
      break;
   }
       let connectionA: Array<any> = [697, 950, 963];
       let streamingH: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,110,97,109,101,95,101,95,56,52,0),472], [String.fromCharCode(98,95,53,50,95,97,108,108,111,99,97,116,101,0),645]]);
       let scheduleI = String.fromCharCode(110,101,119,101,114,95,51,95,54,56,0);
      while (!scheduleI.includes(`${streamingH.size}`)) {
         streamingH = new Map([[`${streamingH.size}`, 2 << (Math.min(1, connectionA.length))]]);
         break;
      }
         connectionA = [3];
      for (let n = 0; n < 1; n++) {
          let theme2 = false;
          let sourceN = String.fromCharCode(100,95,54,54,95,99,111,110,102,105,103,117,114,101,114,0);
         connectionA = [sourceN.length];
      }
         scheduleI += `${2 | connectionA.length}`;
      while (scheduleI.length > 3) {
         streamingH.set(`${connectionA.length}`, 3 ^ connectionA.length);
         break;
      }
      for (let n = 0; n < 1; n++) {
          let analytico = true;
          let relatedw = false;
         connectionA = [(2 * (analytico ? 4 : 3))];
      }
      while (scheduleI.length >= 5) {
          let singaporel = 1.0;
          let resendd: Array<any> = [91, 551, 94];
          let flyerJ = 1.0;
          let confirmationM = 4.0;
         streamingH = new Map([[`${resendd.length}`, parseInt(`${singaporel}`) - resendd.length]]);
         singaporel *= 1;
         flyerJ -= parseInt(`${confirmationM}`);
         confirmationM *= parseFloat(`${3}`);
         break;
      }
      if (3 >= (5 - scheduleI.length)) {
         streamingH.set(`${scheduleI}`, 2);
      }
         streamingH = new Map([[`${streamingH.size}`, scheduleI.length ^ 2]]);
      qaagN = (parseFloat(`${incidentb.length}`) / (Math.max(1, downV))) >= 54.25;
   if (3 < activityi.length || graph0) {
      graph0 = videojsa.size >= 13 && green2.size >= 13;
   }
       let actionI = false;
       let malaysiaL = String.fromCharCode(102,105,120,101,100,95,120,95,57,0);
       let latn1 = String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,57,95,54,50,0);
      while (actionI && 1 > malaysiaL.length) {
         malaysiaL = `${(latn1 == String.fromCharCode(100,0) ? malaysiaL.length : latn1.length)}`;
         break;
      }
      graph0 = (mbbannerM.length >> (Math.min(activityi.length, 1))) < 60;
      mbbannerM.push(videojsa.size);
      mbbannerM.push(activityi.length >> (Math.min(5, mbbannerM.length)));
      shrinkP = mbbannerM.length == 24 || activityi.length == 24;
   while ((mbbannerM.length >> (Math.min(Math.abs(4), 2))) > 1 || 4 > (4 >> (Math.min(2, mbbannerM.length)))) {
       let mode0: Array<any> = [837, 99, 254];
       let holderf: Array<any> = [102, 172];
         mode0 = [holderf.length];
      while (!mode0.includes(holderf.length)) {
          let zoomo = String.fromCharCode(100,95,57,54,95,99,104,117,110,107,121,99,104,117,110,107,121,0);
          let circlen = String.fromCharCode(115,104,105,102,116,101,100,95,111,95,49,0);
          let projects: Map<any, any> = new Map([[String.fromCharCode(108,95,55,56,95,99,97,108,108,98,97,99,107,0),517], [String.fromCharCode(100,111,116,95,114,95,57,56,0),151]]);
          let libturbomodulejsijni3 = 0;
          let foundz: Map<any, any> = new Map([[String.fromCharCode(115,95,52,48,95,111,114,105,103,105,110,115,0),false ], [String.fromCharCode(115,117,98,109,111,100,117,108,101,95,120,95,57,48,0),false ], [String.fromCharCode(101,118,105,99,116,105,111,110,95,121,95,53,56,0),true ]]);
         holderf.push(3 << (Math.min(1, holderf.length)));
         zoomo = `${foundz.size}`;
         circlen += `${libturbomodulejsijni3}`;
         projects = new Map([[`${foundz.size}`, projects.size]]);
         libturbomodulejsijni3 %= Math.max(2 - zoomo.length, 2);
         break;
      }
      while (2 == (2 << (Math.min(2, mode0.length)))) {
          let listq = 3.0;
          let greya: Array<any> = [508, 890];
         holderf.push(2 & holderf.length);
         listq *= parseInt(`${listq}`);
         greya = [parseInt(`${listq}`) % (Math.max(greya.length, 1))];
         break;
      }
          let relatedQ = true;
          let handlerM = false;
          let search9 = true;
         mode0 = [((search9 ? 1 : 4) << (Math.min(2, Math.abs(3))))];
         relatedQ = (!handlerM ? handlerM : !handlerM);
         holderf = [3];
         holderf.push(mode0.length);
      mbbannerM = [((shrinkP ? 5 : 5) + holderf.length)];
      break;
   }
   for (let w = 0; w < 2; w++) {
       let c_lock2: Map<any, any> = new Map([[String.fromCharCode(106,95,57,55,95,115,98,115,112,108,105,116,0),869], [String.fromCharCode(112,95,48,95,114,101,106,111,105,110,0),154]]);
       let g_lockX = 5.0;
         c_lock2 = new Map([[`${c_lock2.size}`, 1 ^ parseInt(`${g_lockX}`)]]);
       let nativew = 2;
       let incidentw = 5;
      for (let y = 0; y < 2; y++) {
         nativew ^= parseInt(`${g_lockX}`);
      }
      let trashf = 6034828.0 >= g_lockX;
      do {
         g_lockX /= Math.max(5, parseFloat(`${incidentw}`));
         if (trashf) {
            break;
         }
      } while (((incidentw / 4) == 4) && trashf);
      let actioni = 9747591 >= nativew;
      do {
         nativew <<= Math.min(Math.abs(2 | c_lock2.size), 3);
         if (actioni) {
            break;
         }
      } while (actioni && (2 > (incidentw * nativew)));
         nativew += 2;
      latnS = [((graph0 ? 2 : 4) ^ next5.length)];
   }
      videojsa.set(`${mbbannerM.length}`, videojsa.size);
   if (qaagN) {
      qaagN = next5.length <= 95 || qaagN;
   }
      incidentb += `${(next5 == String.fromCharCode(87,0) ? next5.length : eighteenv)}`;
       let foundK = String.fromCharCode(100,105,118,105,100,101,100,95,122,95,49,55,0);
       let logouth: Map<any, any> = new Map([[String.fromCharCode(97,108,108,112,97,115,115,95,56,95,53,0),420], [String.fromCharCode(114,101,109,117,120,95,52,95,55,52,0),831]]);
          let danger1 = String.fromCharCode(98,95,50,52,95,115,108,102,0);
         logouth.set(foundK, 1 >> (Math.min(3, foundK.length)));
         danger1 += `${danger1.length}`;
         foundK += `${(String.fromCharCode(72,0) == foundK ? logouth.size : foundK.length)}`;
      if (4 > (foundK.length << (Math.min(5, Math.abs(logouth.size)))) && 4 > (logouth.size << (Math.min(foundK.length, 1)))) {
         logouth = new Map([[`${logouth.size}`, 3]]);
      }
         logouth = new Map([[`${logouth.size}`, logouth.size * 1]]);
         foundK += `${foundK.length}`;
      let untick9 = foundK.length >= 7761857;
      do {
          let selectionu = 1;
         foundK = "2";
         selectionu += 2;
         if (untick9) {
            break;
         }
      } while (untick9 && ((foundK.length % 3) < 2));
      incidentb = `${green2.size}`;
       let graphicsk = String.fromCharCode(111,95,50,57,0);
      for (let v = 0; v < 2; v++) {
         graphicsk = `${2 >> (Math.min(3, graphicsk.length))}`;
      }
          let mergerM = String.fromCharCode(106,95,55,51,95,97,103,103,114,101,103,97,116,101,0);
         graphicsk += `${mergerM.length}`;
         graphicsk = "1";
      incidentb = `${3 | libswscaleL}`;
   let countdown1 = 5755079 >= green2.size;
   do {
       let proxyQ = String.fromCharCode(110,95,55,52,95,102,114,111,109,98,121,116,101,97,114,114,97,121,0);
       let actionp = String.fromCharCode(100,114,105,118,101,114,115,95,100,95,52,54,0);
       let stylesO = String.fromCharCode(115,108,105,100,95,107,95,54,55,0);
         actionp += `${actionp.length}`;
         stylesO += `${stylesO.length}`;
       let submitA = false;
      for (let g = 0; g < 2; g++) {
         stylesO = `${stylesO.length * actionp.length}`;
      }
          let targety = String.fromCharCode(100,114,97,119,97,98,108,101,95,107,95,56,50,0);
          let reactz = 0.0;
         actionp += `${stylesO.length << (Math.min(1, proxyQ.length))}`;
         targety += `${targety.length}`;
         reactz /= Math.max(1, 3);
       let moreF = String.fromCharCode(105,95,55,49,95,117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
       let routerw = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,118,95,52,53,0);
          let halfN: Map<any, any> = new Map([[String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,48,95,49,55,0),String.fromCharCode(115,95,57,53,95,117,110,100,101,102,105,110,101,100,0)], [String.fromCharCode(119,97,114,110,105,110,103,115,95,118,95,52,57,0),String.fromCharCode(101,110,117,109,101,114,97,116,111,114,95,100,95,49,49,0)], [String.fromCharCode(108,105,107,101,95,104,95,57,57,0),String.fromCharCode(102,95,50,51,95,105,115,99,111,118,101,114,0)]]);
         submitA = 57 < routerw.length || stylesO == String.fromCharCode(72,0);
         halfN = new Map([[`${halfN.size}`, halfN.size | halfN.size]]);
         stylesO += `${routerw.length}`;
         submitA = routerw.length > actionp.length;
      green2 = new Map([[`${videojsa.size}`, videojsa.size * 2]]);
      if (countdown1) {
         break;
      }
   } while (((1 >> (Math.min(1, Math.abs(green2.size)))) == 5 || (libswscaleL >> (Math.min(Math.abs(green2.size), 2))) == 1) && countdown1);
   while ((eighteenv * 1) == 4 && !shrinkP) {
      eighteenv ^= 3;
      break;
   }
   let graphicsZ = latnS.length >= 6753625;
   do {
       let valuesr = String.fromCharCode(114,95,51,54,95,97,100,111,112,116,101,100,0);
       let privacyc = false;
       let apple1 = 4;
       let langz: Map<any, any> = new Map([[String.fromCharCode(103,95,54,55,95,117,110,115,101,101,110,0),String.fromCharCode(115,101,101,107,116,97,98,108,101,95,116,95,55,49,0)], [String.fromCharCode(115,101,118,101,110,95,106,95,57,53,0),String.fromCharCode(109,105,110,115,95,97,95,56,50,0)], [String.fromCharCode(114,115,112,95,101,95,50,50,0),String.fromCharCode(102,95,53,54,95,115,116,117,98,0)]]);
       let downloade: Array<any> = [627, 554];
          let lefti = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,117,95,53,0);
         apple1 &= langz.size;
         lefti += `${lefti.length}`;
       let componentU = String.fromCharCode(97,95,53,56,95,103,114,101,121,0);
          let placeholderQ = String.fromCharCode(120,95,54,55,95,98,105,110,107,0);
          let utils8 = String.fromCharCode(105,95,56,51,95,99,97,99,104,101,115,105,122,101,0);
          let libreanimatedA: Map<any, any> = new Map([[String.fromCharCode(112,95,57,50,95,114,101,99,101,105,118,101,100,0),String.fromCharCode(110,95,52,53,95,104,112,101,108,100,115,112,0)], [String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,51,95,49,54,0),String.fromCharCode(99,97,115,116,115,95,105,95,52,57,0)]]);
         downloade.push(2);
         placeholderQ = `${placeholderQ.length}`;
         utils8 = `${placeholderQ.length | 1}`;
         libreanimatedA.set(placeholderQ, 2);
      for (let n = 0; n < 1; n++) {
          let specn = 4;
          let executorM = 1.0;
          let latnM = String.fromCharCode(98,105,110,107,100,97,116,97,95,119,95,57,51,0);
          let episodesV: Array<any> = [262, 253];
         langz.set(`${componentU}`, (String.fromCharCode(68,0) == componentU ? componentU.length : langz.size));
         specn += 2;
         executorM *= parseFloat(`${parseInt(`${executorM}`)}`);
         latnM = `${parseInt(`${executorM}`)}`;
         episodesV = [3 / (Math.max(parseInt(`${executorM}`), 4))];
      }
       let serviceE: Map<any, any> = new Map([[String.fromCharCode(103,101,110,115,95,98,95,55,50,0),636], [String.fromCharCode(115,101,103,109,101,110,116,115,95,54,95,51,57,0),903]]);
       let uimanagerH: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,100,101,102,115,95,99,95,56,48,0),502], [String.fromCharCode(97,95,50,48,95,115,119,105,116,99,104,0),236], [String.fromCharCode(112,114,101,115,115,101,115,95,54,95,55,50,0),64]]);
       let update_3zf = 1;
       let mbnativeadvanceds = 2;
      for (let d = 0; d < 3; d++) {
          let submitr = 5;
          let mappingF = 4.0;
          let analyticx = 2.0;
          let logoM = String.fromCharCode(119,95,54,50,95,114,101,99,101,105,118,101,0);
         mbnativeadvanceds <<= Math.min(3, Math.abs(3 & parseInt(`${mappingF}`)));
         submitr <<= Math.min(Math.abs(logoM.length & parseInt(`${analyticx}`)), 4);
         mappingF *= parseFloat(`${submitr - 3}`);
         analyticx /= Math.max(parseFloat(`${logoM.length | 1}`), 4);
      }
         downloade.push(downloade.length >> (Math.min(4, Math.abs(update_3zf))));
         serviceE = new Map([[`${uimanagerH.size}`, serviceE.size & uimanagerH.size]]);
      while (4 <= (mbnativeadvanceds * langz.size)) {
          let nativemoduleo = 2;
          let mapbufferl = String.fromCharCode(110,95,55,55,95,104,97,110,100,108,101,115,0);
          let mbnative1: Array<any> = [12, 274];
          let main_xD: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,95,109,95,56,57,0),783], [String.fromCharCode(112,111,112,117,112,115,95,110,95,52,52,0),39], [String.fromCharCode(122,95,55,57,95,109,118,104,100,0),817]]);
         mbnativeadvanceds += 2;
         nativemoduleo -= 3 - mbnative1.length;
         mapbufferl += `${(String.fromCharCode(103,0) == mapbufferl ? mapbufferl.length : mbnative1.length)}`;
         main_xD = new Map([[`${mbnative1.length}`, nativemoduleo | 2]]);
         break;
      }
          let launchert: Map<any, any> = new Map([[String.fromCharCode(103,95,54,51,95,112,105,99,116,111,114,0),String.fromCharCode(113,95,55,51,95,112,111,115,116,0)], [String.fromCharCode(118,95,56,52,95,100,101,114,101,103,105,115,116,101,114,0),String.fromCharCode(106,95,52,95,98,121,116,101,0)]]);
          let applem = false;
          let libffmpegkitr = 4.0;
         langz = new Map([[`${serviceE.size}`, serviceE.size]]);
         launchert = new Map([[`${launchert.size}`, launchert.size / 3]]);
         applem = launchert.get(`${libffmpegkitr}`) == null;
         libffmpegkitr *= (parseFloat(`${parseInt(`${libffmpegkitr}`) | (applem ? 3 : 5)}`));
         apple1 *= update_3zf - uimanagerH.size;
         uimanagerH = new Map([[`${uimanagerH.size}`, 2]]);
       let colorsX = String.fromCharCode(116,95,52,48,95,97,110,103,101,0);
       let selectionn = String.fromCharCode(102,99,111,100,101,95,56,95,49,56,0);
      for (let s = 0; s < 3; s++) {
          let expiredw = String.fromCharCode(109,95,53,55,95,115,109,104,100,0);
         uimanagerH = new Map([[`${langz.size}`, (String.fromCharCode(68,0) == componentU ? langz.size : componentU.length)]]);
         expiredw = `${(String.fromCharCode(114,0) == expiredw ? expiredw.length : expiredw.length)}`;
      }
      latnS.push(3 >> (Math.min(2, Math.abs(shrinkv))));
      valuesr += `${3 / (Math.max(4, valuesr.length))}`;
      privacyc = ((valuesr.length + (privacyc ? 30 : valuesr.length)) == 30);
      if (graphicsZ) {
         break;
      }
   } while ((videojsa.get(`${latnS.length}`) != null) && graphicsZ);
   if (incidentb.startsWith(`${videojsa.size}`)) {
      incidentb += `${((qaagN ? 4 : 1))}`;
   }
   while (qaagN && (downV / 2.90) > 3.52) {
      downV -= parseFloat(`${eighteenv - 2}`);
      break;
   }
   while (latnS.includes(eighteenv)) {
       let windR = String.fromCharCode(98,95,53,54,95,98,108,97,109,101,100,0);
       let viewsL = String.fromCharCode(100,98,108,112,95,99,95,51,53,0);
      let bottomH = String.fromCharCode(122,95,109,118,50,97,0) == viewsL;
      do {
         viewsL += `${windR.length - viewsL.length}`;
         if (bottomH) {
            break;
         }
      } while ((1 <= viewsL.length) && bottomH);
      while (windR.length < 1) {
          let hongkongd = String.fromCharCode(110,97,109,101,115,95,100,95,52,54,0);
          let otherl: Array<any> = [184, 291];
          let mbnativeadvancedI = 3.0;
         windR = `${windR.length + viewsL.length}`;
         hongkongd += `${hongkongd.length & otherl.length}`;
         otherl.push(hongkongd.length - 3);
         mbnativeadvancedI /= Math.max(parseFloat(`${parseInt(`${mbnativeadvancedI}`) - 3}`), 4);
         break;
      }
          let floater7: Map<any, any> = new Map([[String.fromCharCode(101,115,116,97,98,108,105,115,104,95,104,95,52,0),String.fromCharCode(111,110,101,111,102,95,100,95,50,51,0)], [String.fromCharCode(102,95,50,51,95,114,97,110,100,0),String.fromCharCode(106,99,115,97,109,112,108,101,95,116,95,49,50,0)]]);
         windR += "2";
         floater7.set(`${floater7.size}`, floater7.size);
         windR = `${windR.length >> (Math.min(4, viewsL.length))}`;
          let skipv = 0.0;
          let moviesv = String.fromCharCode(115,121,110,99,97,98,108,101,95,114,95,56,54,0);
         windR = `${moviesv.length - windR.length}`;
         skipv /= Math.max(1, parseFloat(`${parseInt(`${skipv}`) >> (Math.min(4, Math.abs(3)))}`));
         moviesv = "1";
          let whistleH: Map<any, any> = new Map([[String.fromCharCode(116,121,112,95,115,95,49,57,0),String.fromCharCode(113,95,51,51,95,99,111,111,107,105,101,115,0)], [String.fromCharCode(119,95,50,54,95,100,114,97,119,97,98,108,101,115,0),String.fromCharCode(98,95,50,54,95,97,100,100,109,111,100,0)]]);
          let model4 = 1.0;
         viewsL += `${viewsL.length >> (Math.min(Math.abs(3), 2))}`;
         whistleH = new Map([[`${whistleH.size}`, parseInt(`${model4}`)]]);
         model4 += parseFloat(`${2}`);
      latnS.push(3);
      break;
   }
   while (2 == (green2.size << (Math.min(Math.abs(4), 1))) && 1 == (4 << (Math.min(4, activityi.length)))) {
      green2.set(next5, next5.length - 2);
      break;
   }
   let libruntimeexecutorS = 9689450 <= libswscaleL;
   do {
      libswscaleL += ((shrinkP ? 2 : 3));
      if (libruntimeexecutorS) {
         break;
      }
   } while (libruntimeexecutorS && (3 == (4 % (Math.max(3, libswscaleL)))));
      green2.set(next5, ((graph0 ? 4 : 3) / (Math.max(3, 5))));
       let shooty: Map<any, any> = new Map([[String.fromCharCode(105,95,57,53,95,97,108,97,99,0),26], [String.fromCharCode(99,111,109,112,97,99,116,101,100,95,107,95,52,51,0),433]]);
      while (5 == (shooty.size / (Math.max(5, 7))) && 3 == (shooty.size / 5)) {
          let moonZ = String.fromCharCode(113,95,55,49,95,99,111,109,112,111,110,101,110,116,115,0);
          let taiwanw = true;
          let controlQ = String.fromCharCode(101,97,115,121,95,103,95,56,48,0);
         shooty = new Map([[`${shooty.size}`, 1]]);
         moonZ += `${1 | moonZ.length}`;
         taiwanw = !taiwanw;
         controlQ += `${moonZ.length}`;
         break;
      }
      if (shooty.get(`${shooty.size}`) == null) {
         shooty = new Map([[`${shooty.size}`, shooty.size + shooty.size]]);
      }
         shooty = new Map([[`${shooty.size}`, 2]]);
      libswscaleL %= Math.max(libswscaleL, 1);
   if (next5.endsWith(`${libswscaleL}`)) {
      next5 = `${activityi.length % 3}`;
   }
   for (let j = 0; j < 1; j++) {
      incidentb = `${(activityi == String.fromCharCode(101,0) ? activityi.length : videojsa.size)}`;
   }

    onHandleFullScreen();
  };

  const goBack = () => {
       let canvasM = 0.0;
    let libjsinspectorK = String.fromCharCode(110,95,52,55,95,97,112,112,101,110,100,97,108,108,0);
    let settingn = String.fromCharCode(107,95,50,55,95,105,116,101,114,97,116,111,114,0);
    let pathE = String.fromCharCode(118,97,108,117,101,100,95,114,95,57,56,0);
    let private_9Z = String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,105,95,51,51,0);
    let settingsA = 5.0;
    let turnU = 4;
    let referrerc = false;
    let libyogaI = String.fromCharCode(107,95,51,56,95,109,97,116,99,104,101,115,0);
       let type_8H: Map<any, any> = new Map([[String.fromCharCode(104,95,55,48,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,0),String.fromCharCode(109,115,98,115,95,111,95,56,53,0)], [String.fromCharCode(107,95,55,49,95,100,97,112,112,115,0),String.fromCharCode(108,105,109,105,116,95,112,95,53,0)]]);
         type_8H.set(`${type_8H.size}`, type_8H.size + 2);
         type_8H = new Map([[`${type_8H.size}`, 1]]);
      if (Array.from(type_8H.keys()).includes(`${type_8H.size}`)) {
          let penalty5 = String.fromCharCode(99,112,117,105,110,102,111,95,117,95,52,54,0);
         type_8H.set(penalty5, penalty5.length);
      }
      pathE += "3";
   for (let w = 0; w < 1; w++) {
       let whistleo = 5.0;
       let androidz = String.fromCharCode(111,95,49,53,0);
       let mapbufferf = String.fromCharCode(112,117,98,108,105,115,104,95,56,95,55,0);
       let helpery: Map<any, any> = new Map([[String.fromCharCode(102,95,56,95,97,117,103,109,101,110,116,97,116,105,111,110,0),319], [String.fromCharCode(110,95,49,54,95,119,105,110,99,101,0),287]]);
       let anytimef = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,118,95,49,53,0);
       let contextK = String.fromCharCode(111,95,48,95,116,101,109,112,111,114,97,114,105,108,121,0);
       let textinput6 = String.fromCharCode(118,95,51,54,95,97,99,116,105,118,97,116,105,111,110,115,0);
      let fastforwardI = whistleo <= 8611996.0;
      do {
          let progressG = 3;
          let string6 = String.fromCharCode(109,95,52,57,95,112,105,120,102,109,116,0);
          let vietnamP = String.fromCharCode(102,97,99,101,95,108,95,49,48,0);
          let active4 = String.fromCharCode(116,102,117,101,108,95,49,95,55,54,0);
          let fadfdeebbbfdabbbabdadfaaddaa3: Map<any, any> = new Map([[String.fromCharCode(108,95,49,56,95,115,115,105,109,118,0),665], [String.fromCharCode(113,95,51,95,115,105,122,101,98,105,116,114,97,116,101,0),745], [String.fromCharCode(115,95,50,56,95,115,117,98,109,101,115,115,97,103,101,0),283]]);
         whistleo -= contextK.length;
         progressG |= 2 & active4.length;
         string6 += `${string6.length}`;
         vietnamP = "2";
         active4 = "2";
         fadfdeebbbfdabbbabdadfaaddaa3 = new Map([[string6, string6.length]]);
         if (fastforwardI) {
            break;
         }
      } while (((helpery.size - parseInt(`${whistleo}`)) == 5 && 3.95 == (whistleo - helpery.size)) && fastforwardI);
      for (let a = 0; a < 1; a++) {
          let photo1 = 2;
         anytimef += `${contextK.length}`;
         photo1 %= Math.max(2, photo1 | photo1);
      }
       let mbbidL = false;
      if ((1 ^ helpery.size) > 4 && 3 > (helpery.size ^ 1)) {
          let notificationu = String.fromCharCode(98,95,52,52,95,114,101,112,115,116,114,0);
          let fill9 = String.fromCharCode(113,117,105,99,95,116,95,57,57,0);
          let const_lY: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,101,116,116,105,95,111,95,54,50,0),false ], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,95,106,95,54,49,0),false ], [String.fromCharCode(115,117,109,115,113,95,103,95,53,52,0),false ]]);
         androidz = `${androidz.length & fill9.length}`;
         notificationu += `${const_lY.size + 1}`;
         fill9 += "2";
         const_lY.set(notificationu, (notificationu == String.fromCharCode(105,0) ? const_lY.size : notificationu.length));
      }
      for (let u = 0; u < 2; u++) {
         textinput6 += `${helpery.size}`;
      }
         anytimef = `${(String.fromCharCode(114,0) == androidz ? androidz.length : (mbbidL ? 4 : 5))}`;
      for (let q = 0; q < 3; q++) {
          let filtert = String.fromCharCode(112,95,52,52,0);
          let cinit_imh = 3.0;
          let animationsu = String.fromCharCode(97,108,103,111,114,105,116,104,109,95,52,95,51,53,0);
         mapbufferf = `${((mbbidL ? 5 : 1))}`;
         filtert = `${animationsu.length}`;
         cinit_imh /= Math.max(3, filtert.length);
         animationsu += `${parseInt(`${cinit_imh}`)}`;
      }
         anytimef += "1";
         helpery = new Map([[textinput6, textinput6.length]]);
       let chato = 0;
       let rootW = 4;
         anytimef = `${textinput6.length - 1}`;
      let mailj = chato >= 8103386;
      do {
         chato -= rootW % (Math.max(1, contextK.length));
         if (mailj) {
            break;
         }
      } while ((4 < androidz.length) && mailj);
          let libmapbufferjnii = String.fromCharCode(107,95,52,55,95,110,111,110,115,101,99,117,114,101,0);
         mapbufferf = `${rootW ^ 1}`;
         libmapbufferjnii += `${3 - libmapbufferjnii.length}`;
       let utilsF = false;
       let dycreatorM = true;
      private_9Z += `${androidz.length / 2}`;
   }
       let trophyI = String.fromCharCode(120,95,57,53,95,114,101,99,111,109,112,111,115,101,0);
      let modalu = 5154063 >= trophyI.length;
      do {
         trophyI = `${trophyI.length}`;
         if (modalu) {
            break;
         }
      } while (modalu && (trophyI.startsWith(`${trophyI.length}`)));
       let const_tpL = 3.0;
       let modelP = 3.0;
         const_tpL += parseFloat(`${parseInt(`${modelP}`)}`);
      pathE += `${(private_9Z == String.fromCharCode(104,0) ? parseInt(`${settingsA}`) : private_9Z.length)}`;
   let collectionv = 6766825.0 <= canvasM;
   do {
      canvasM += parseFloat(`${pathE.length >> (Math.min(private_9Z.length, 5))}`);
      if (collectionv) {
         break;
      }
   } while ((3.83 >= canvasM) && collectionv);
       let sheeti = 5;
       let hongkong3: Array<any> = [127, 831, 727];
      let circleO = 8178702 <= hongkong3.length;
      do {
          let historyw = 0.0;
          let dataS = 2;
          let description__t = 3;
          let viewsi = 0.0;
          let stringsY = 5;
         hongkong3 = [sheeti & parseInt(`${historyw}`)];
         historyw -= stringsY;
         dataS <<= Math.min(4, Math.abs(dataS));
         description__t %= Math.max(5, parseInt(`${viewsi}`));
         viewsi /= Math.max(stringsY % 2, 4);
         if (circleO) {
            break;
         }
      } while (((sheeti & hongkong3.length) >= 1 && 1 >= (sheeti & 1)) && circleO);
          let castU = String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,54,95,56,50,0);
         hongkong3.push(hongkong3.length);
         castU = `${castU.length >> (Math.min(4, castU.length))}`;
         hongkong3 = [sheeti << (Math.min(3, Math.abs(2)))];
          let iconk = false;
          let resultv = false;
         hongkong3.push(((iconk ? 5 : 3) % (Math.max(sheeti, 4))));
         iconk = !resultv;
      for (let g = 0; g < 3; g++) {
         sheeti ^= 1 * hongkong3.length;
      }
         sheeti >>= Math.min(Math.abs(hongkong3.length / (Math.max(2, 10))), 1);
      settingsA -= parseFloat(`${3}`);
      private_9Z += "2";
   for (let v = 0; v < 3; v++) {
      settingn += `${2 >> (Math.min(3, Math.abs(parseInt(`${canvasM}`))))}`;
   }
   let bingr = settingn == String.fromCharCode(57,51,113,0);
   do {
       let iconC = String.fromCharCode(103,95,53,51,95,100,115,116,0);
       let hookr = String.fromCharCode(109,95,55,49,0);
       let penaltya = String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,103,95,55,49,0);
       let upgradeG = 4.0;
       let pangle2 = String.fromCharCode(117,110,114,101,103,105,115,116,101,114,95,50,95,55,50,0);
      let mailx = hookr == String.fromCharCode(48,104,99,118,110,0);
      do {
         hookr = `${parseInt(`${upgradeG}`) % 3}`;
         if (mailx) {
            break;
         }
      } while (mailx && (3 <= (1 ^ hookr.length) && 2 <= (parseInt(`${upgradeG}`) * 1)));
         pangle2 += `${(pangle2 == String.fromCharCode(99,0) ? hookr.length : pangle2.length)}`;
       let libsentryi = String.fromCharCode(109,97,115,107,113,95,118,95,50,56,0);
       let statsJ = String.fromCharCode(114,97,98,105,110,95,54,95,50,55,0);
      let gesture9 = hookr == String.fromCharCode(99,101,103,114,118,120,115,0);
      do {
         hookr += `${1 & hookr.length}`;
         if (gesture9) {
            break;
         }
      } while ((4 < iconC.length || hookr.length < 4) && gesture9);
      while (pangle2.endsWith(hookr)) {
         pangle2 = `${2 - iconC.length}`;
         break;
      }
         pangle2 = `${(iconC == String.fromCharCode(105,0) ? iconC.length : penaltya.length)}`;
      if (hookr != String.fromCharCode(81,0)) {
         iconC += "2";
      }
          let interstitialg = String.fromCharCode(106,95,56,55,95,100,112,97,103,101,0);
         statsJ = `${(String.fromCharCode(90,0) == iconC ? pangle2.length : iconC.length)}`;
         interstitialg += `${2 & interstitialg.length}`;
         upgradeG /= Math.max(parseFloat(`${libsentryi.length / (Math.max(penaltya.length, 10))}`), 5);
       let gmail9 = String.fromCharCode(97,114,105,98,95,105,95,53,51,0);
       let bootsplash7 = String.fromCharCode(115,116,97,99,107,115,95,102,95,50,56,0);
       let soundl = 0.0;
       let short_18K = 3.0;
          let pressureQ = 3.0;
         penaltya = "1";
         pressureQ *= 2 | parseInt(`${pressureQ}`);
         soundl /= Math.max(5, parseFloat(`${penaltya.length}`));
      for (let e = 0; e < 1; e++) {
         pangle2 += `${(penaltya == String.fromCharCode(120,0) ? penaltya.length : parseInt(`${upgradeG}`))}`;
      }
         short_18K -= parseFloat(`${pangle2.length >> (Math.min(1, gmail9.length))}`);
      settingn += `${hookr.length}`;
      if (bingr) {
         break;
      }
   } while ((!settingn.endsWith(libjsinspectorK)) && bingr);
      pathE += "2";
       let bellI = 1.0;
       let libreanimatedU: Map<any, any> = new Map([[String.fromCharCode(101,120,116,109,97,112,95,108,95,53,57,0),String.fromCharCode(110,111,110,122,101,114,111,95,99,95,52,51,0)], [String.fromCharCode(120,95,50,95,112,101,114,99,101,110,116,97,103,101,0),String.fromCharCode(114,95,50,56,95,114,101,112,111,114,116,0)], [String.fromCharCode(116,97,103,97,118,114,95,107,95,50,56,0),String.fromCharCode(109,117,116,97,116,105,110,103,95,102,95,48,0)]]);
       let righty = 3.0;
         righty -= parseFloat(`${1}`);
      let suggestion2 = 8289217 <= libreanimatedU.size;
      do {
          let downloadedW = String.fromCharCode(101,108,115,101,95,113,95,52,55,0);
          let acceptedN = 2.0;
         libreanimatedU.set(`${righty}`, parseInt(`${righty}`));
         downloadedW = `${downloadedW.length}`;
         acceptedN *= parseFloat(`${2 | downloadedW.length}`);
         if (suggestion2) {
            break;
         }
      } while (suggestion2 && (2.15 >= (righty * 5.76) || (righty * parseFloat(`${libreanimatedU.size}`)) >= 5.76));
      if ((righty * bellI) < 5.2 || (5.2 * righty) < 4.98) {
         righty += parseFloat(`${parseInt(`${righty}`)}`);
      }
       let questZ: Array<any> = [String.fromCharCode(116,95,50,53,95,115,121,115,114,97,110,100,0), String.fromCharCode(114,101,99,111,114,100,95,101,95,57,0)];
         questZ.push(parseInt(`${bellI}`));
      for (let w = 0; w < 3; w++) {
         righty *= parseFloat(`${2}`);
      }
      while ((parseInt(`${righty}`) * libreanimatedU.size) <= 4 || (righty * parseFloat(`${libreanimatedU.size}`)) <= 5.6) {
         righty -= parseFloat(`${3 + questZ.length}`);
         break;
      }
      for (let a = 0; a < 3; a++) {
         righty /= Math.max(4, parseFloat(`${parseInt(`${bellI}`)}`));
      }
          let filed6 = 4;
         libreanimatedU.set(`${filed6}`, libreanimatedU.size >> (Math.min(1, Math.abs(filed6))));
      canvasM += parseFloat(`${1}`);
      settingsA -= parseFloat(`${turnU % (Math.max(parseInt(`${canvasM}`), 6))}`);
      referrerc = libyogaI.length <= 25;

    delayControls();

   while (!libyogaI.startsWith(`${settingsA}`)) {
       let thailandd = String.fromCharCode(110,95,55,48,95,119,97,118,101,102,111,114,109,0);
       let upgradek = 2.0;
      for (let w = 0; w < 1; w++) {
         upgradek += 3 + parseInt(`${upgradek}`);
      }
         thailandd += `${(String.fromCharCode(70,0) == thailandd ? thailandd.length : parseInt(`${upgradek}`))}`;
       let unread5 = String.fromCharCode(101,108,97,115,116,105,99,95,98,95,52,49,0);
       let sigmobH = String.fromCharCode(122,95,50,57,95,111,114,105,103,110,97,108,0);
      if (sigmobH.length == 1) {
         sigmobH += `${1 & sigmobH.length}`;
      }
      for (let b = 0; b < 2; b++) {
          let mountinga = String.fromCharCode(97,116,114,97,99,112,108,117,115,95,103,95,57,57,0);
          let libzeusQ = 2.0;
          let smallb = String.fromCharCode(119,114,105,116,116,101,110,95,119,95,53,49,0);
         upgradek -= (sigmobH == String.fromCharCode(115,0) ? sigmobH.length : parseInt(`${libzeusQ}`));
         mountinga = `${smallb.length}`;
         libzeusQ += 3 * mountinga.length;
         smallb = `${smallb.length << (Math.min(5, mountinga.length))}`;
      }
       let taiwan0 = String.fromCharCode(103,95,57,57,95,109,99,108,109,115,0);
      settingsA /= Math.max(4, parseFloat(`${private_9Z.length}`));
      break;
   }
      turnU <<= Math.min(Math.abs((libyogaI.length * (referrerc ? 1 : 4))), 5);
      libyogaI = "2";
   if (libjsinspectorK.includes(pathE)) {
       let libruntimeexecutoru: Map<any, any> = new Map([[String.fromCharCode(104,97,108,100,99,108,117,116,95,48,95,49,0),924], [String.fromCharCode(105,95,56,51,95,102,114,97,109,101,100,97,116,97,0),253], [String.fromCharCode(105,119,104,116,120,95,52,95,51,52,0),233]]);
       let greenQ: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,108,121,95,48,95,57,0),String.fromCharCode(97,95,53,49,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0)], [String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,108,95,50,57,0),String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,117,95,50,56,0)]]);
       let fill1 = String.fromCharCode(98,114,97,99,101,95,48,95,54,54,0);
       let colorsf = String.fromCharCode(107,95,49,55,95,114,116,112,100,101,99,0);
      while (colorsf != fill1) {
         fill1 += `${greenQ.size * 2}`;
         break;
      }
          let bridgeL = String.fromCharCode(113,115,99,97,108,101,95,109,95,54,53,0);
         libruntimeexecutoru.set(colorsf, (String.fromCharCode(72,0) == colorsf ? bridgeL.length : colorsf.length));
      let sentryZ = 8375046 >= libruntimeexecutoru.size;
      do {
          let actionn = String.fromCharCode(115,105,122,101,95,110,95,51,48,0);
         libruntimeexecutoru.set(actionn, (String.fromCharCode(110,0) == actionn ? actionn.length : greenQ.size));
         if (sentryZ) {
            break;
         }
      } while ((Array.from(libruntimeexecutoru.values()).includes(greenQ.size)) && sentryZ);
       let chate = String.fromCharCode(120,95,56,55,95,115,116,114,108,99,97,116,0);
       let eighteenJ = String.fromCharCode(115,108,111,112,101,95,121,95,51,55,0);
       let modelsN = 3;
      for (let h = 0; h < 1; h++) {
          let mbsplashy = String.fromCharCode(119,95,54,57,95,100,101,116,101,99,116,101,100,0);
          let morex = false;
         greenQ = new Map([[mbsplashy, (String.fromCharCode(68,0) == colorsf ? colorsf.length : mbsplashy.length)]]);
         morex = !morex;
      }
         eighteenJ += `${1 + libruntimeexecutoru.size}`;
      let recommendation_ = 4980728 >= modelsN;
      do {
         modelsN &= colorsf.length;
         if (recommendation_) {
            break;
         }
      } while ((4 < (2 | colorsf.length)) && recommendation_);
      if (eighteenJ.startsWith(`${modelsN}`)) {
         eighteenJ += "2";
      }
      if (fill1 == String.fromCharCode(71,0)) {
          let encryptB = String.fromCharCode(108,95,52,51,95,111,110,116,114,97,115,116,0);
          let team9 = 4;
         chate += `${(String.fromCharCode(67,0) == encryptB ? chate.length : encryptB.length)}`;
         team9 -= team9 - 2;
      }
         libruntimeexecutoru.set(chate, chate.length ^ 2);
       let chat1 = String.fromCharCode(99,95,49,48,48,95,103,114,97,121,115,99,97,108,101,0);
      libjsinspectorK += "1";
   }
      libjsinspectorK += `${2 + libyogaI.length}`;
      settingn = `${parseInt(`${canvasM}`) ^ 1}`;
      settingsA += parseFloat(`${turnU / 1}`);
      referrerc = (((referrerc ? 46 : settingn.length) << (Math.min(settingn.length, 5))) == 46);
   for (let i = 0; i < 1; i++) {
       let matchesQ = String.fromCharCode(105,95,56,48,95,99,111,100,105,110,103,0);
       let analyticsr = String.fromCharCode(103,95,54,52,95,118,105,115,105,98,105,108,105,116,121,0);
       let privacyI: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,95,55,95,49,52,0),true ], [String.fromCharCode(102,97,99,101,95,108,95,51,54,0),false ]]);
       let e_positionS = String.fromCharCode(106,95,51,48,95,98,97,110,100,115,0);
       let sourceE = String.fromCharCode(106,95,49,48,95,120,112,114,118,0);
         analyticsr += `${e_positionS.length % 3}`;
          let main_qQ = false;
          let nativeex_ = String.fromCharCode(116,95,50,51,95,98,111,114,100,101,114,0);
         sourceE += `${2 - sourceE.length}`;
         main_qQ = !nativeex_.includes(`${main_qQ}`);
         nativeex_ = `${((main_qQ ? 3 : 2))}`;
      if (4 == e_positionS.length) {
          let nnewsG = 5;
          let middleo = true;
          let indexw = 2;
          let headerx = 2;
         matchesQ = `${indexw >> (Math.min(Math.abs(1), 4))}`;
         nnewsG |= (headerx & (middleo ? 1 : 2));
         middleo = 80 == nnewsG;
         indexw /= Math.max(((middleo ? 1 : 1) + headerx), 5);
      }
         e_positionS += "2";
       let p_managerN = 0;
      if (!e_positionS.startsWith(`${analyticsr.length}`)) {
         analyticsr += `${(String.fromCharCode(122,0) == matchesQ ? matchesQ.length : analyticsr.length)}`;
      }
          let feedbackB: Array<any> = [709, 42];
          let v_lockd = String.fromCharCode(111,112,117,115,95,113,95,53,48,0);
         e_positionS += `${sourceE.length}`;
         feedbackB.push(3);
         v_lockd += `${(v_lockd == String.fromCharCode(80,0) ? feedbackB.length : v_lockd.length)}`;
       let register__93 = 0.0;
         matchesQ = `${privacyI.size ^ analyticsr.length}`;
      while (matchesQ == String.fromCharCode(89,0) || 1 <= sourceE.length) {
         sourceE = `${(analyticsr == String.fromCharCode(100,0) ? analyticsr.length : sourceE.length)}`;
         break;
      }
      let readI = String.fromCharCode(97,113,49,101,114,112,122,55,102,0) == sourceE;
      do {
         sourceE = `${p_managerN}`;
         if (readI) {
            break;
         }
      } while ((sourceE.endsWith(analyticsr)) && readI);
      let textinputQ = register__93 <= 8625235.0;
      do {
         register__93 -= parseFloat(`${analyticsr.length * e_positionS.length}`);
         if (textinputQ) {
            break;
         }
      } while (textinputQ && ((register__93 - 5.17) == 4.83));
      for (let e = 0; e < 1; e++) {
         analyticsr += `${p_managerN / (Math.max(4, privacyI.size))}`;
      }
      let backwardu = 7404833 <= sourceE.length;
      do {
          let gradlewT = String.fromCharCode(100,95,50,55,95,108,101,118,97,114,105,110,116,0);
          let castingp: Array<any> = [424, 55];
          let mbbidy = String.fromCharCode(113,117,97,110,116,115,95,100,95,49,54,0);
          let i_positionq = 4;
         sourceE += `${e_positionS.length - p_managerN}`;
         gradlewT = "2";
         castingp.push(mbbidy.length);
         mbbidy += `${mbbidy.length * 3}`;
         i_positionq += i_positionq ^ 2;
         if (backwardu) {
            break;
         }
      } while (backwardu && (e_positionS.length >= 4 && sourceE != String.fromCharCode(88,0)));
          let description_297 = 4;
          let libyogaQ = String.fromCharCode(101,95,53,55,95,116,114,97,110,115,109,105,116,0);
         p_managerN &= (String.fromCharCode(57,0) == matchesQ ? matchesQ.length : analyticsr.length);
         description_297 <<= Math.min(Math.abs((String.fromCharCode(76,0) == libyogaQ ? libyogaQ.length : description_297)), 4);
      canvasM += parseFloat(`${matchesQ.length * private_9Z.length}`);
   }
      referrerc = settingn == pathE;
   while (private_9Z.includes(`${settingsA}`)) {
      settingsA -= parseFloat(`${parseInt(`${canvasM}`)}`);
      break;
   }
   while (libyogaI.includes(`${referrerc}`)) {
       let sharedj = 5;
       let crownW = true;
       let libreactnativejni7: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,117,109,95,57,95,51,49,0),false ], [String.fromCharCode(105,95,50,52,95,97,115,115,101,114,116,0),false ]]);
         crownW = !crownW;
      while (5 == (2 * sharedj) && 2 == sharedj) {
         sharedj %= Math.max(3, libreactnativejni7.size);
         break;
      }
         crownW = sharedj <= 69 && crownW;
          let dragr = 1.0;
          let tickedq = String.fromCharCode(105,95,55,95,97,110,115,119,101,114,0);
          let bootsplash5 = String.fromCharCode(106,95,54,48,95,114,103,101,110,0);
         sharedj >>= Math.min(Math.abs(1), 1);
         dragr -= (parseFloat(`${String.fromCharCode(70,0) == tickedq ? parseInt(`${dragr}`) : tickedq.length}`));
         bootsplash5 = `${bootsplash5.length * parseInt(`${dragr}`)}`;
         libreactnativejni7 = new Map([[`${libreactnativejni7.size}`, libreactnativejni7.size >> (Math.min(Math.abs(2), 2))]]);
          let condensedf = true;
          let favoriteT = 5.0;
         libreactnativejni7.set(`${favoriteT}`, libreactnativejni7.size + 3);
         condensedf = (condensedf ? !condensedf : !condensedf);
         favoriteT -= ((condensedf ? 1 : 4) ^ 3);
          let skipb = false;
          let video8 = String.fromCharCode(108,105,110,101,98,114,101,97,107,95,57,95,50,48,0);
         sharedj %= Math.max(5, sharedj << (Math.min(3, Math.abs(2))));
         skipb = video8.length >= 21 || !skipb;
         video8 = `${1 | video8.length}`;
         sharedj ^= (2 - (crownW ? 2 : 2));
      if (crownW && 2 < (libreactnativejni7.size ^ 4)) {
         libreactnativejni7 = new Map([[`${libreactnativejni7.size}`, sharedj]]);
      }
      referrerc = !referrerc;
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
       let baiduh = 5.0;
    let awayB = 5;
    let faviconG: Map<any, any> = new Map([[String.fromCharCode(105,95,51,48,95,115,99,114,97,116,99,104,0),false ], [String.fromCharCode(108,95,54,55,95,112,101,117,107,101,114,0),false ], [String.fromCharCode(116,95,53,54,95,105,110,111,117,116,0),true ]]);
    let fillg = true;
    let commonV = 4.0;
    let singlei = String.fromCharCode(114,101,101,110,99,114,121,112,116,95,97,95,55,57,0);
    let analytics0: Array<any> = [305, 190];
    let codegen8 = 4.0;
    let manifestZ = true;
    let specN = String.fromCharCode(109,95,51,52,95,115,101,113,118,105,100,101,111,0);
    let flyerj = String.fromCharCode(113,95,54,52,95,112,111,108,101,0);
   let kleviny = String.fromCharCode(114,118,54,95,119,50,104,113,115,119,0) == singlei;
   do {
      singlei += `${analytics0.length}`;
      if (kleviny) {
         break;
      }
   } while ((2 <= singlei.length) && kleviny);
   for (let r = 0; r < 1; r++) {
       let trash8 = String.fromCharCode(109,95,52,48,95,97,117,116,111,102,111,114,109,97,116,116,105,110,103,0);
       let dplusO = String.fromCharCode(115,95,49,56,95,97,112,112,101,110,100,0);
       let refreshX = String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,111,95,50,49,0);
      while (refreshX != String.fromCharCode(101,0) && 1 > dplusO.length) {
          let statisticsS = false;
          let ecopy_m4 = 3;
          let combined9 = String.fromCharCode(122,95,51,52,95,97,118,99,105,110,116,114,97,0);
         refreshX = `${(trash8 == String.fromCharCode(106,0) ? trash8.length : ecopy_m4)}`;
         statisticsS = combined9.length >= 95;
         ecopy_m4 += 3;
         combined9 += `${((statisticsS ? 2 : 2) % (Math.max(combined9.length, 6)))}`;
         break;
      }
      if (refreshX.startsWith(dplusO)) {
         refreshX += `${refreshX.length / (Math.max(3, 2))}`;
      }
         refreshX += `${dplusO.length}`;
         refreshX = `${(trash8 == String.fromCharCode(50,0) ? dplusO.length : trash8.length)}`;
      if (trash8.length >= 2) {
         trash8 += `${dplusO.length}`;
      }
         dplusO += `${refreshX.length}`;
          let uimanager7: Array<any> = [658, 332];
          let greyC: Map<any, any> = new Map([[String.fromCharCode(113,117,105,122,95,115,95,57,52,0),77], [String.fromCharCode(98,108,111,99,107,115,99,97,110,95,55,95,53,49,0),867]]);
          let lineo = String.fromCharCode(100,95,51,54,95,99,104,101,99,107,101,100,0);
         trash8 += `${trash8.length}`;
         uimanager7 = [greyC.size % (Math.max(3, lineo.length))];
         greyC.set(`${uimanager7.length}`, greyC.size * 2);
         lineo += `${(String.fromCharCode(65,0) == lineo ? lineo.length : greyC.size)}`;
         trash8 += `${3 / (Math.max(5, refreshX.length))}`;
      while (dplusO == trash8) {
          let scoreK: Array<any> = [566, 999, 722];
         trash8 = `${scoreK.length & 1}`;
         break;
      }
      faviconG.set(singlei, (singlei == String.fromCharCode(81,0) ? singlei.length : parseInt(`${codegen8}`)));
   }
   if (commonV > 5.64 || 3.61 > (commonV + 5.64)) {
       let chinaW: Array<any> = [String.fromCharCode(119,95,49,50,95,115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,0), String.fromCharCode(102,114,97,110,100,95,57,95,57,51,0), String.fromCharCode(112,114,111,109,111,95,119,95,53,0)];
      for (let t = 0; t < 3; t++) {
          let screenz = 5.0;
          let trophyB = String.fromCharCode(101,110,116,114,121,95,50,95,51,57,0);
          let stylesq = String.fromCharCode(112,95,57,50,95,102,119,100,0);
         chinaW.push(1 - trophyB.length);
         screenz += parseInt(`${screenz}`) % 2;
         trophyB += "1";
         stylesq = `${1 | stylesq.length}`;
      }
      let pangleX = 5120245 >= chinaW.length;
      do {
          let componentY = 5;
          let indexf = false;
          let bottomv: Array<any> = [813, 148, 506];
          let foundY = 4;
         chinaW.push(bottomv.length);
         componentY *= componentY;
         indexf = 5 >= componentY;
         bottomv.push(foundY);
         foundY += componentY;
         if (pangleX) {
            break;
         }
      } while (((chinaW.length * 3) <= 2 || (chinaW.length * 3) <= 4) && pangleX);
      let string_ = chinaW.length >= 5951141;
      do {
          let ticked7 = 1;
          let analytic_ = String.fromCharCode(111,95,49,56,95,117,105,100,115,0);
          let trophy1 = 2.0;
          let sports5: Map<any, any> = new Map([[String.fromCharCode(104,95,52,57,95,108,105,110,107,105,110,103,0),false ], [String.fromCharCode(104,101,97,114,116,98,101,97,116,95,116,95,49,52,0),true ]]);
          let matches0 = 4.0;
         chinaW.push(3 / (Math.max(ticked7, 5)));
         ticked7 %= Math.max(1 << (Math.min(5, Math.abs(parseInt(`${matches0}`)))), 5);
         analytic_ = `${3 << (Math.min(4, Math.abs(parseInt(`${trophy1}`))))}`;
         trophy1 += sports5.size;
         sports5 = new Map([[`${sports5.size}`, sports5.size % 3]]);
         matches0 *= (String.fromCharCode(73,0) == analytic_ ? analytic_.length : parseInt(`${trophy1}`));
         if (string_) {
            break;
         }
      } while ((chinaW.includes(chinaW.length)) && string_);
      fillg = String.fromCharCode(80,0) == singlei;
   }
      singlei += `${(parseInt(`${commonV}`) & (fillg ? 4 : 3))}`;
      codegen8 += parseFloat(`${singlei.length}`);
   for (let w = 0; w < 2; w++) {
      faviconG.set(`${awayB}`, parseInt(`${baiduh}`));
   }
      singlei += `${1 * singlei.length}`;
   if (awayB < 1) {
      awayB /= Math.max(awayB + 3, 3);
   }
   let tooltipsJ = 8742873.0 >= baiduh;
   do {
      baiduh /= Math.max(5, 3);
      if (tooltipsJ) {
         break;
      }
   } while (tooltipsJ && (4.49 > (baiduh + 5.78) && fillg));
   for (let z = 0; z < 3; z++) {
      faviconG.set(`${fillg}`, faviconG.size % 3);
   }
      fillg = parseInt(`${baiduh}`) > singlei.length;
      faviconG.set(singlei, 2 + singlei.length);

    setShowControls(!showControls);

      commonV /= Math.max(3, parseFloat(`${parseInt(`${baiduh}`)}`));
   while (fillg) {
      fillg = faviconG.get(`${awayB}`) != null;
      break;
   }
       let libavfilterD = 0.0;
       let checkboxR: Map<any, any> = new Map([[String.fromCharCode(112,95,55,53,95,99,121,99,108,105,99,0),String.fromCharCode(112,95,53,52,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0)], [String.fromCharCode(116,95,55,95,115,117,112,112,111,114,116,105,110,103,0),String.fromCharCode(110,95,49,95,112,117,98,107,101,121,104,97,115,104,0)]]);
      for (let w = 0; w < 3; w++) {
          let reactnativejsl: Map<any, any> = new Map([[String.fromCharCode(117,95,54,54,95,115,104,117,116,116,101,114,0),831], [String.fromCharCode(112,95,56,48,95,115,101,99,115,0),147]]);
          let statsa = String.fromCharCode(99,95,50,53,95,98,114,107,116,105,109,101,103,109,0);
          let signinuph = String.fromCharCode(99,95,53,49,95,106,112,101,103,100,115,112,0);
          let completet = String.fromCharCode(110,111,116,105,102,105,101,115,95,104,95,53,56,0);
          let reactH = String.fromCharCode(97,95,50,57,95,105,110,99,114,101,109,101,110,116,97,108,0);
         libavfilterD -= 1 % (Math.max(7, completet.length));
         reactnativejsl.set(reactH, reactnativejsl.size / (Math.max(1, 9)));
         statsa += "3";
         signinuph += `${signinuph.length - 1}`;
         completet += "2";
         reactH = "2";
      }
       let holderN = String.fromCharCode(110,117,109,95,108,95,56,53,0);
       let logout7 = String.fromCharCode(106,95,51,51,95,115,105,103,110,101,100,0);
         logout7 = `${holderN.length}`;
      for (let s = 0; s < 1; s++) {
          let search8 = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,114,95,52,51,0);
          let light8: Array<any> = [String.fromCharCode(121,95,56,54,95,98,97,99,107,115,108,97,115,104,0), String.fromCharCode(113,95,52,51,95,99,111,110,116,114,111,108,108,101,114,0)];
          let applicationu = 5;
          let libffmpegkitF = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,112,95,56,54,0);
         logout7 += `${holderN.length}`;
         search8 = `${libffmpegkitF.length}`;
         light8 = [libffmpegkitF.length];
         applicationu |= libffmpegkitF.length - 1;
      }
      if (4 > holderN.length) {
          let x_centerZ = String.fromCharCode(117,110,111,114,100,101,114,101,100,95,53,95,54,54,0);
          let memberh: Map<any, any> = new Map([[String.fromCharCode(114,101,99,104,101,99,107,95,102,95,57,51,0),true ], [String.fromCharCode(115,95,52,54,95,101,120,99,108,117,115,105,118,101,0),false ], [String.fromCharCode(116,111,97,115,116,115,95,50,95,51,50,0),false ]]);
          let mountingO: Array<any> = [936, 379];
         logout7 = `${checkboxR.size}`;
         x_centerZ = `${mountingO.length / (Math.max(7, memberh.size))}`;
         memberh = new Map([[`${memberh.size}`, 3 | memberh.size]]);
         mountingO = [mountingO.length >> (Math.min(Math.abs(2), 1))];
      }
         logout7 = `${checkboxR.size}`;
      singlei = `${2 & faviconG.size}`;
      awayB /= Math.max(1, 2);
   while (5.68 == (5.72 + baiduh)) {
      baiduh *= parseInt(`${commonV}`) - 1;
      break;
   }
   if (manifestZ) {
      manifestZ = analytics0.includes(baiduh);
   }
      codegen8 *= (parseFloat(`${(manifestZ ? 3 : 3) + parseInt(`${codegen8}`)}`));
      fillg = null == faviconG.get(`${codegen8}`);
   if (parseInt(`${baiduh}`) < singlei.length) {
       let gpayi = String.fromCharCode(108,97,121,111,117,116,95,119,95,54,52,0);
       let relatedA = 3.0;
       let nativeexx = String.fromCharCode(111,110,97,118,99,95,105,95,55,54,0);
       let list_ = false;
       let settingh = 1.0;
         list_ = gpayi == String.fromCharCode(102,0);
      while (gpayi != nativeexx) {
         nativeexx += `${parseInt(`${settingh}`) & 3}`;
         break;
      }
      let windW = list_ ? !list_ : list_;
      do {
         list_ = nativeexx.length >= 89;
         if (windW) {
            break;
         }
      } while (windW && (gpayi.includes(`${list_}`)));
      let mbsplashr = String.fromCharCode(108,103,110,0) == nativeexx;
      do {
         nativeexx = `${parseInt(`${relatedA}`)}`;
         if (mbsplashr) {
            break;
         }
      } while ((gpayi.length > nativeexx.length) && mbsplashr);
       let armvaO: Array<any> = [451, 161, 835];
       let rightb: Array<any> = [218, 215];
         gpayi = `${(String.fromCharCode(86,0) == gpayi ? armvaO.length : gpayi.length)}`;
         settingh += parseFloat(`${3}`);
         nativeexx = `${armvaO.length}`;
      while (relatedA > 4.10) {
         nativeexx = "3";
         break;
      }
      if (5 <= nativeexx.length && !list_) {
         list_ = gpayi == String.fromCharCode(65,0) || 41 <= armvaO.length;
      }
         settingh -= parseFloat(`${armvaO.length / (Math.max(2, 5))}`);
       let yingD = 5.0;
       let bellM = 0.0;
      let mbjscommon_ = rightb.length >= 6252198;
      do {
          let chatT: Map<any, any> = new Map([[String.fromCharCode(102,111,108,108,111,119,101,114,95,50,95,55,56,0),String.fromCharCode(118,112,99,120,95,112,95,51,50,0)], [String.fromCharCode(119,95,53,55,95,99,99,105,116,116,0),String.fromCharCode(101,115,115,101,110,116,105,97,108,95,100,95,50,51,0)], [String.fromCharCode(103,108,111,98,97,108,115,95,103,95,57,57,0),String.fromCharCode(111,95,54,48,95,114,101,99,111,103,110,105,122,101,114,115,0)]]);
          let clubl = String.fromCharCode(108,105,102,101,116,105,109,101,95,117,95,53,57,0);
          let episodeN = String.fromCharCode(105,110,105,116,104,95,98,95,57,53,0);
          let reactB = 1.0;
          let controlsp = 1.0;
         rightb.push((String.fromCharCode(88,0) == gpayi ? (list_ ? 5 : 5) : gpayi.length));
         chatT.set(`${controlsp}`, episodeN.length << (Math.min(Math.abs(2), 2)));
         clubl = `${chatT.size}`;
         episodeN += `${episodeN.length}`;
         reactB /= Math.max(parseInt(`${reactB}`) * 2, 1);
         controlsp -= parseFloat(`${parseInt(`${reactB}`) - parseInt(`${controlsp}`)}`);
         if (mbjscommon_) {
            break;
         }
      } while (mbjscommon_ && (relatedA < parseFloat(`${rightb.length}`)));
         bellM *= 3 / (Math.max(1, parseInt(`${yingD}`)));
      while ((armvaO.length ^ 1) >= 5 && armvaO.length >= 1) {
         armvaO.push(parseInt(`${yingD}`));
         break;
      }
      baiduh += parseInt(`${relatedA}`);
   }
      analytics0.push(parseInt(`${codegen8}`) >> (Math.min(3, Math.abs(1))));
      baiduh += (parseInt(`${codegen8}`) << (Math.min(1, Math.abs((manifestZ ? 1 : 1)))));
   if (2 >= (analytics0.length ^ 2) && analytics0.length >= 2) {
      fillg = analytics0.length == 91;
   }
    delayControls();
  };

  const clearHidingDelay = () => {
       let templateprocessorO = 3.0;
    let libavformatC = String.fromCharCode(114,95,50,48,95,117,97,100,100,0);
    let langkey3 = 2.0;
    let overlay7 = String.fromCharCode(101,110,97,98,108,101,115,95,117,95,52,55,0);
    let renewT: Array<any> = [358, 319];
    let shareh = true;
    let pointm = false;
    let hongkong1 = String.fromCharCode(115,117,99,99,101,115,115,111,114,95,121,95,57,49,0);
    let manifest4 = String.fromCharCode(102,114,105,101,110,100,108,121,95,107,95,57,50,0);
    let thailand4 = 5;
    let selectiond = 5.0;
    let indicatorq: Array<any> = [829, 315, 501];
    let search3 = 1;
   if (!pointm || 3 > (renewT.length % (Math.max(4, 3)))) {
       let dycreatorz: Array<any> = [55, 510];
      for (let l = 0; l < 3; l++) {
          let crownP = 2;
          let huawei7 = String.fromCharCode(119,95,51,52,95,117,110,100,101,108,101,103,97,116,101,0);
          let select1: Array<any> = [120, 763];
          let recommendationm = String.fromCharCode(115,121,115,99,116,108,115,95,102,95,55,0);
          let connectionq = 4.0;
         dycreatorz = [3];
         crownP |= crownP & 1;
         huawei7 += `${(String.fromCharCode(90,0) == recommendationm ? crownP : recommendationm.length)}`;
         select1.push(select1.length | 1);
         connectionq += parseFloat(`${recommendationm.length}`);
      }
      let buttonJ = 7338379 >= dycreatorz.length;
      do {
         dycreatorz = [dycreatorz.length & 1];
         if (buttonJ) {
            break;
         }
      } while (((3 << (Math.min(1, dycreatorz.length))) < 3) && buttonJ);
         dycreatorz.push(2 >> (Math.min(4, dycreatorz.length)));
      renewT.push(libavformatC.length & thailand4);
   }
       let telegramG = String.fromCharCode(102,102,109,101,116,97,95,55,95,49,0);
       let down1 = String.fromCharCode(110,95,55,55,95,97,118,105,103,97,116,105,111,110,0);
          let mutedI = String.fromCharCode(120,95,49,54,95,105,100,115,0);
         telegramG += `${down1.length}`;
         mutedI = `${mutedI.length & 2}`;
         telegramG = `${down1.length}`;
      if (down1 == String.fromCharCode(51,0)) {
         telegramG = `${3 >> (Math.min(5, down1.length))}`;
      }
      while (4 >= down1.length) {
         telegramG = `${down1.length * telegramG.length}`;
         break;
      }
         telegramG = `${telegramG.length | down1.length}`;
      for (let u = 0; u < 2; u++) {
         down1 = `${telegramG.length}`;
      }
      shareh = telegramG.length < 53;
       let sliderm = 0.0;
      if ((sliderm * sliderm) <= 2.83) {
         sliderm += parseFloat(`${parseInt(`${sliderm}`) ^ parseInt(`${sliderm}`)}`);
      }
      while (2.58 <= (3 + sliderm)) {
          let search1 = 5.0;
          let filled0 = String.fromCharCode(117,95,50,55,95,119,115,97,117,100,0);
          let shootA = String.fromCharCode(112,97,114,101,110,116,95,111,95,50,55,0);
          let progresse = false;
         sliderm /= Math.max(parseFloat(`${parseInt(`${search1}`)}`), 1);
         search1 += (shootA.length * (progresse ? 1 : 4));
         filled0 = `${((progresse ? 4 : 3))}`;
         shootA += `${(1 % (Math.max(6, (progresse ? 3 : 5))))}`;
         break;
      }
       let activity3 = 5.0;
      selectiond /= Math.max(libavformatC.length, 4);
   let invitem = overlay7 == String.fromCharCode(111,51,55,56,115,101,103,111,48,0);
   do {
       let backward7 = 4.0;
       let buttonw = 5.0;
         buttonw /= Math.max(parseFloat(`${2 - parseInt(`${buttonw}`)}`), 5);
      while (1.15 == (buttonw + 2.6)) {
         buttonw -= parseFloat(`${parseInt(`${backward7}`)}`);
         break;
      }
       let rewind7 = String.fromCharCode(114,101,115,101,116,115,95,122,95,55,50,0);
       let backG = String.fromCharCode(122,95,56,50,95,112,114,101,99,105,115,101,0);
      if (5 == (3 - rewind7.length) || 4 == (3 >> (Math.min(4, rewind7.length)))) {
         buttonw /= Math.max(parseFloat(`${backG.length ^ parseInt(`${backward7}`)}`), 5);
      }
         buttonw /= Math.max(parseFloat(`${parseInt(`${backward7}`) / (Math.max(backG.length, 2))}`), 4);
         buttonw += parseFloat(`${rewind7.length ^ 2}`);
      overlay7 += `${2 * manifest4.length}`;
      if (invitem) {
         break;
      }
   } while (((overlay7.length & renewT.length) <= 2 && (overlay7.length & renewT.length) <= 2) && invitem);
   for (let v = 0; v < 3; v++) {
       let reducerf = String.fromCharCode(99,111,108,111,110,95,101,95,56,51,0);
       let ballP = String.fromCharCode(113,95,54,50,95,112,117,114,112,111,115,101,0);
       let heart7: Array<any> = [String.fromCharCode(122,95,56,57,95,115,116,121,112,0), String.fromCharCode(103,101,116,105,110,116,95,103,95,55,50,0), String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,95,112,95,49,49,0)];
       let classesj = 5.0;
       let mergero: Array<any> = [String.fromCharCode(114,99,118,100,95,118,95,56,48,0), String.fromCharCode(99,95,56,49,95,117,115,108,101,101,112,0)];
      let rncoreF = 5864912.0 <= classesj;
      do {
         classesj /= Math.max(4, parseInt(`${classesj}`) * 1);
         if (rncoreF) {
            break;
         }
      } while ((3.35 == classesj) && rncoreF);
      if (2 <= (ballP.length - 1)) {
         heart7 = [2 / (Math.max(parseInt(`${classesj}`), 6))];
      }
      let unreadb = ballP == String.fromCharCode(120,100,55,120,112,108,0);
      do {
         ballP += `${mergero.length ^ 2}`;
         if (unreadb) {
            break;
         }
      } while (unreadb && (ballP.length < 5));
      let popup5 = heart7.length <= 8877292;
      do {
         heart7.push(mergero.length - ballP.length);
         if (popup5) {
            break;
         }
      } while ((2 <= (heart7.length % (Math.max(2, 8))) || 4 <= (ballP.length % 2)) && popup5);
      if (!ballP.includes(`${reducerf.length}`)) {
          let interstitialS = String.fromCharCode(116,111,111,108,115,95,112,95,57,57,0);
          let topicb = 1.0;
         reducerf += "1";
         interstitialS += `${3 >> (Math.min(4, interstitialS.length))}`;
         topicb /= Math.max(parseFloat(`${2 | parseInt(`${topicb}`)}`), 2);
      }
         ballP += `${reducerf.length}`;
       let tick2 = 5.0;
       let sinao: Array<any> = [String.fromCharCode(109,98,118,115,95,109,95,54,52,0), String.fromCharCode(114,95,57,49,95,99,114,101,100,101,110,116,105,97,108,115,0), String.fromCharCode(110,111,114,109,97,108,95,118,95,51,57,0)];
       let emptyL: Array<any> = [310, 762];
          let sentryW = 0;
          let countdownl: Array<any> = [343, 945];
         mergero.push(sinao.length * sentryW);
         sentryW &= 3;
         countdownl.push(countdownl.length | countdownl.length);
          let nextD: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,102,95,52,49,0),376], [String.fromCharCode(101,97,105,100,99,116,95,103,95,49,50,0),308], [String.fromCharCode(113,99,101,108,112,100,97,116,97,95,103,95,55,49,0),725]]);
         emptyL.push(emptyL.length);
         nextD.set(`${nextD.size}`, 1 ^ nextD.size);
      if (5.14 <= tick2) {
         classesj += reducerf.length >> (Math.min(2, emptyL.length));
      }
         emptyL.push(mergero.length >> (Math.min(2, Math.abs(parseInt(`${classesj}`)))));
      for (let u = 0; u < 3; u++) {
         ballP = "1";
      }
          let sourcea = String.fromCharCode(122,95,49,48,95,112,108,97,121,112,97,117,115,101,0);
          let statisticsy = String.fromCharCode(97,112,112,108,105,101,114,95,116,95,50,51,0);
          let viewerG = String.fromCharCode(116,95,54,49,95,108,111,119,101,115,116,0);
         ballP += `${heart7.length}`;
         sourcea = `${(String.fromCharCode(102,0) == viewerG ? statisticsy.length : viewerG.length)}`;
         statisticsy += `${statisticsy.length % (Math.max(3, 10))}`;
      for (let d = 0; d < 3; d++) {
         ballP += `${ballP.length & emptyL.length}`;
      }
      pointm = 8 < libavformatC.length;
   }
   if ((renewT.length % (Math.max(manifest4.length, 9))) > 5 && 5 > (renewT.length % (Math.max(3, manifest4.length)))) {
       let acceptedy = String.fromCharCode(121,95,50,52,95,114,101,108,111,99,107,0);
         acceptedy += `${acceptedy.length - acceptedy.length}`;
         acceptedy += `${acceptedy.length}`;
          let libreanimatedJ = String.fromCharCode(102,95,50,50,95,110,111,110,100,99,0);
          let philippineso = 1.0;
         acceptedy = `${libreanimatedJ.length ^ 2}`;
         libreanimatedJ += `${parseInt(`${philippineso}`)}`;
      renewT.push((parseInt(`${langkey3}`) / (Math.max(8, (pointm ? 3 : 5)))));
   }
   let anythinkb = thailand4 <= 5651965;
   do {
      thailand4 >>= Math.min(Math.abs((overlay7 == String.fromCharCode(65,0) ? overlay7.length : parseInt(`${templateprocessorO}`))), 3);
      if (anythinkb) {
         break;
      }
   } while ((5 > (2 | thailand4)) && anythinkb);
   for (let e = 0; e < 1; e++) {
      libavformatC += `${((shareh ? 5 : 2) ^ parseInt(`${langkey3}`))}`;
   }
      thailand4 /= Math.max(1, indicatorq.length);
   while (!pointm) {
      pointm = 91 < indicatorq.length;
      break;
   }
   for (let v = 0; v < 1; v++) {
       let mbbidw = false;
       let indexL = false;
       let nalyticsy = String.fromCharCode(119,111,114,100,95,108,95,54,57,0);
          let const_bh: Array<any> = [993, 552];
          let videojsv = String.fromCharCode(99,108,97,117,115,101,115,95,110,95,54,50,0);
          let uimanagerz = String.fromCharCode(102,114,101,101,102,111,114,109,95,106,95,54,54,0);
         indexL = nalyticsy.length < uimanagerz.length;
         const_bh = [(videojsv == String.fromCharCode(82,0) ? videojsv.length : const_bh.length)];
         uimanagerz = `${(videojsv == String.fromCharCode(48,0) ? videojsv.length : const_bh.length)}`;
         nalyticsy += "1";
      while (mbbidw) {
          let downloaderQ = 0.0;
         indexL = !mbbidw;
         downloaderQ -= parseInt(`${downloaderQ}`);
         break;
      }
      while (!indexL) {
         mbbidw = (41 >= ((mbbidw ? 41 : nalyticsy.length) * nalyticsy.length));
         break;
      }
      for (let z = 0; z < 2; z++) {
          let leagueP = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,54,95,55,49,0);
         mbbidw = String.fromCharCode(119,0) == leagueP || nalyticsy.length <= 51;
      }
      overlay7 = `${(String.fromCharCode(113,0) == overlay7 ? overlay7.length : indicatorq.length)}`;
   }
      manifest4 = "3";
       let descY = 5;
       let eventu = String.fromCharCode(121,95,55,48,95,115,116,114,110,99,97,115,101,99,109,112,0);
       let videojsY = String.fromCharCode(119,104,105,99,104,95,55,95,51,57,0);
         eventu += `${descY}`;
         videojsY = `${eventu.length & 3}`;
      let abouto = 8762988 >= eventu.length;
      do {
         eventu = `${2 >> (Math.min(2, videojsY.length))}`;
         if (abouto) {
            break;
         }
      } while (abouto && (5 <= eventu.length));
      for (let e = 0; e < 2; e++) {
          let logouta = 1.0;
          let photoM = String.fromCharCode(121,95,50,53,95,99,111,111,114,100,105,110,97,116,105,111,110,0);
         descY += parseInt(`${logouta}`);
         logouta *= parseFloat(`${photoM.length}`);
         photoM += `${(photoM == String.fromCharCode(110,0) ? photoM.length : photoM.length)}`;
      }
      if (eventu.length < 1) {
         videojsY = `${videojsY.length >> (Math.min(Math.abs(3), 5))}`;
      }
      for (let h = 0; h < 1; h++) {
          let update_pW: Array<any> = [90, 280];
          let anytimeN: Array<any> = [String.fromCharCode(100,95,51,55,95,110,101,97,114,101,115,116,0), String.fromCharCode(102,95,50,53,95,97,115,105,115,0), String.fromCharCode(103,95,51,52,95,115,117,98,112,105,120,101,108,0)];
          let ecopy_5pn = String.fromCharCode(117,114,108,95,101,95,50,0);
          let themeT = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,52,95,57,0);
         eventu = "1";
         update_pW.push(1 / (Math.max(6, ecopy_5pn.length)));
         anytimeN.push(anytimeN.length | 3);
         ecopy_5pn = `${update_pW.length}`;
         themeT += `${anytimeN.length / 1}`;
      }
      while (videojsY.length >= 5) {
         eventu = `${videojsY.length - 3}`;
         break;
      }
      while ((descY % 5) >= 2 && (descY % (Math.max(eventu.length, 3))) >= 5) {
         descY |= videojsY.length - descY;
         break;
      }
          let otherK: Array<any> = [295, 698, 494];
          let mbridgeW = 3.0;
         descY *= 2 & eventu.length;
         otherK.push(otherK.length);
         mbridgeW *= parseFloat(`${otherK.length}`);
      manifest4 = `${renewT.length}`;
   while (indicatorq.includes(templateprocessorO)) {
      indicatorq = [(manifest4 == String.fromCharCode(71,0) ? manifest4.length : libavformatC.length)];
      break;
   }
   if (5.94 > (selectiond + 4.77) || 1 > (2 + parseInt(`${selectiond}`))) {
      hongkong1 += `${(String.fromCharCode(81,0) == overlay7 ? overlay7.length : thailand4)}`;
   }
      langkey3 /= Math.max(1, parseFloat(`${hongkong1.length >> (Math.min(manifest4.length, 2))}`));
       let libflipper4: Array<any> = [24, 750, 589];
      while (!libflipper4.includes(libflipper4.length)) {
          let runtimeM = false;
         libflipper4.push(2);
         break;
      }
      let libreanimated7 = libflipper4.length <= 6940743;
      do {
         libflipper4 = [3 + libflipper4.length];
         if (libreanimated7) {
            break;
         }
      } while ((5 > libflipper4.length) && libreanimated7);
         libflipper4.push(libflipper4.length & 1);
      overlay7 = `${thailand4}`;
       let g_positionK = 3.0;
       let libreactnativejniv = 3;
       let klevinl: Array<any> = [159, 146, 747];
      for (let v = 0; v < 3; v++) {
         libreactnativejniv -= 3;
      }
      if (!klevinl.includes(libreactnativejniv)) {
         libreactnativejniv *= 1;
      }
          let canvasT: Map<any, any> = new Map([[String.fromCharCode(105,95,51,51,95,100,101,115,105,103,110,0),323], [String.fromCharCode(114,105,102,102,95,50,95,49,53,0),205], [String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,116,95,54,54,0),982]]);
          let constantsj: Array<any> = [String.fromCharCode(99,105,116,121,95,110,95,52,56,0), String.fromCharCode(114,95,56,56,95,114,101,118,101,114,115,101,100,0)];
          let step8: Array<any> = [798, 271];
         klevinl.push(constantsj.length % 2);
         canvasT = new Map([[`${canvasT.size}`, step8.length]]);
         constantsj.push(canvasT.size * step8.length);
         klevinl = [libreactnativejniv | 3];
      let videocommon1 = 7050047 <= klevinl.length;
      do {
         klevinl = [klevinl.length % (Math.max(10, libreactnativejniv))];
         if (videocommon1) {
            break;
         }
      } while (videocommon1 && ((5 >> (Math.min(2, klevinl.length))) >= 2 || 1.31 >= (g_positionK + parseFloat(`${klevinl.length}`))));
         libreactnativejniv -= libreactnativejniv << (Math.min(3, Math.abs(1)));
          let libcxxcomponentsA = false;
          let resultE = String.fromCharCode(99,111,112,121,102,100,95,122,95,54,55,0);
         g_positionK += parseFloat(`${libreactnativejniv}`);
         libcxxcomponentsA = resultE.length <= 9;
         resultE += `${((libcxxcomponentsA ? 1 : 1) - resultE.length)}`;
      while (!klevinl.includes(libreactnativejniv)) {
          let gradle9: Array<any> = [699, 290];
          let rewindE = String.fromCharCode(113,109,98,108,95,48,95,49,53,0);
          let zinit_fw = String.fromCharCode(101,95,55,55,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0);
         klevinl = [3];
         gradle9.push(gradle9.length);
         rewindE = `${rewindE.length >> (Math.min(Math.abs(2), 4))}`;
         zinit_fw += `${(rewindE == String.fromCharCode(72,0) ? zinit_fw.length : rewindE.length)}`;
         break;
      }
          let tailR: Array<any> = [String.fromCharCode(114,95,56,55,95,102,105,120,0), String.fromCharCode(101,95,54,48,95,119,105,107,105,0)];
          let macauS = 3;
         g_positionK += parseFloat(`${klevinl.length}`);
         tailR.push(2 % (Math.max(1, macauS)));
         macauS <<= Math.min(Math.abs(macauS >> (Math.min(5, Math.abs(3)))), 2);
      manifest4 += `${(renewT.length - (shareh ? 4 : 4))}`;
   for (let s = 0; s < 2; s++) {
      libavformatC = `${3 | hongkong1.length}`;
   }
      hongkong1 += `${((shareh ? 3 : 2) % (Math.max(thailand4, 10)))}`;
      libavformatC += `${libavformatC.length}`;
   for (let f = 0; f < 1; f++) {
      indicatorq.push(parseInt(`${langkey3}`));
   }
       let lang4: Array<any> = [String.fromCharCode(116,104,105,115,95,54,95,57,53,0), String.fromCharCode(108,95,49,48,48,95,114,101,100,105,114,101,99,116,105,111,110,97,108,0), String.fromCharCode(115,97,110,105,116,121,95,106,95,49,57,0)];
          let with_haB = String.fromCharCode(98,97,99,107,111,102,102,95,120,95,49,0);
         lang4.push(3);
         with_haB = `${with_haB.length / (Math.max(3, 8))}`;
       let serviceB = String.fromCharCode(115,104,114,117,110,107,95,111,95,49,48,48,0);
       let typesR = String.fromCharCode(97,108,114,101,97,100,121,95,54,95,51,56,0);
          let tempe = String.fromCharCode(114,101,115,105,100,117,97,108,115,95,52,95,49,55,0);
          let selectedT: Array<any> = [801, 670, 349];
         typesR = `${lang4.length}`;
         tempe = `${tempe.length}`;
         selectedT = [tempe.length | 2];
      langkey3 *= parseFloat(`${parseInt(`${templateprocessorO}`) << (Math.min(1, Math.abs(3)))}`);
      shareh = hongkong1.length < 62;
   for (let t = 0; t < 1; t++) {
      renewT.push(3 & parseInt(`${templateprocessorO}`));
   }
       let miniy: Array<any> = [141, 955, 784];
      for (let l = 0; l < 1; l++) {
         miniy = [miniy.length + miniy.length];
      }
         miniy.push(miniy.length * 1);
      if (miniy.includes(miniy.length)) {
          let promotionN = 2.0;
         miniy.push(miniy.length - parseInt(`${promotionN}`));
      }
      templateprocessorO -= (parseFloat(`${libavformatC == String.fromCharCode(65,0) ? libavformatC.length : miniy.length}`));
      hongkong1 += `${overlay7.length - thailand4}`;
      thailand4 %= Math.max(1, ((shareh ? 3 : 5) / (Math.max(thailand4, 5))));

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let temperatureP = String.fromCharCode(104,95,49,52,95,101,115,99,97,112,101,100,0);
    let update_e0g: Array<any> = [String.fromCharCode(118,95,49,56,95,99,97,99,104,101,100,107,101,121,115,0), String.fromCharCode(117,95,50,52,95,108,111,111,112,98,114,101,97,107,0), String.fromCharCode(100,101,108,97,121,95,119,95,56,55,0)];
    let textA = 1.0;
    let libsgcorec = 5.0;
    let sharedI = 4.0;
    let saveD: Map<any, any> = new Map([[String.fromCharCode(108,97,109,101,95,102,95,56,48,0),true ], [String.fromCharCode(111,95,54,51,95,97,98,117,102,102,101,114,115,105,110,107,0),true ]]);
    let redirectq = String.fromCharCode(98,95,51,50,95,109,105,108,108,101,114,0);
    let renew0 = false;
    let acceptedS = String.fromCharCode(102,105,101,108,95,51,95,57,48,0);
    let shootz = String.fromCharCode(112,117,98,105,99,95,120,95,55,55,0);
    let currentY = 3.0;
    let utilsP = true;
    let libreactnativejni_ = String.fromCharCode(115,116,115,100,95,121,95,51,49,0);
   let neon8 = update_e0g.length >= 9503559;
   do {
      update_e0g = [1];
      if (neon8) {
         break;
      }
   } while (((saveD.size | 1) <= 1 && 2 <= (1 | saveD.size)) && neon8);
   if (1 <= (saveD.size << (Math.min(1, update_e0g.length))) && 5 <= (update_e0g.length << (Math.min(Math.abs(1), 5)))) {
      update_e0g = [temperatureP.length % 3];
   }
       let dnewinterstitial6 = String.fromCharCode(101,122,111,115,95,57,95,56,0);
       let langV: Array<any> = [634, 433, 545];
       let playu = 5.0;
      let configm = playu >= 7123545.0;
      do {
         playu += parseFloat(`${parseInt(`${playu}`)}`);
         if (configm) {
            break;
         }
      } while (configm && ((parseFloat(`${dnewinterstitial6.length}`) - playu) > 4.94 || 1.18 > (playu - 4.94)));
       let readr: Map<any, any> = new Map([[String.fromCharCode(98,95,54,49,95,113,117,97,110,116,105,122,101,114,115,0),648], [String.fromCharCode(100,98,112,97,103,101,95,48,95,55,55,0),687]]);
      let catalog0 = 5698217 <= langV.length;
      do {
         langV.push(2);
         if (catalog0) {
            break;
         }
      } while ((dnewinterstitial6.endsWith(`${langV.length}`)) && catalog0);
      if (readr.size < 4) {
         readr.set(dnewinterstitial6, 1 ^ dnewinterstitial6.length);
      }
      while (4 >= (parseInt(`${playu}`) - dnewinterstitial6.length) || (dnewinterstitial6.length - parseInt(`${playu}`)) >= 4) {
         playu -= parseFloat(`${readr.size}`);
         break;
      }
         langV = [(dnewinterstitial6 == String.fromCharCode(57,0) ? dnewinterstitial6.length : langV.length)];
         playu -= (parseFloat(`${String.fromCharCode(99,0) == dnewinterstitial6 ? dnewinterstitial6.length : readr.size}`));
      if (Array.from(readr.keys()).includes(`${playu}`)) {
         playu -= parseFloat(`${1}`);
      }
      for (let j = 0; j < 3; j++) {
         langV.push(1);
      }
      update_e0g.push((parseInt(`${sharedI}`) & (renew0 ? 2 : 1)));
      temperatureP += `${3 | update_e0g.length}`;
      libsgcorec *= parseFloat(`${saveD.size}`);
   while (!acceptedS.includes(`${textA}`)) {
      textA += saveD.size % 3;
      break;
   }
       let mbbidG = 2.0;
       let reminderm: Array<any> = [654, 902, 971];
       let selectedu = true;
         selectedu = reminderm.length == 79;
      while (1 >= (5 >> (Math.min(4, reminderm.length)))) {
          let downloaderF = String.fromCharCode(116,95,50,53,95,100,101,108,101,116,101,0);
          let handlerZ = String.fromCharCode(102,95,51,51,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0);
          let countryp = String.fromCharCode(102,95,56,48,95,100,105,114,112,0);
          let moviesD: Array<any> = [307, 380, 279];
          let telegramP = String.fromCharCode(109,99,111,109,112,97,110,100,95,57,95,51,50,0);
         selectedu = downloaderF.length >= handlerZ.length;
         downloaderF = `${moviesD.length & 2}`;
         handlerZ += `${telegramP.length}`;
         countryp = `${moviesD.length >> (Math.min(countryp.length, 2))}`;
         telegramP = "2";
         break;
      }
      for (let v = 0; v < 3; v++) {
         reminderm = [(reminderm.length - (selectedu ? 1 : 4))];
      }
          let contexti: Map<any, any> = new Map([[String.fromCharCode(114,95,49,57,95,107,105,116,0),String.fromCharCode(105,95,51,57,95,110,101,116,115,0)], [String.fromCharCode(112,95,55,57,95,114,112,99,0),String.fromCharCode(98,95,49,95,105,110,116,99,104,101,99,107,0)], [String.fromCharCode(101,105,116,104,101,114,95,109,95,54,57,0),String.fromCharCode(100,95,55,56,95,111,110,118,101,114,115,97,116,105,111,110,0)]]);
          let stationsZ = 3.0;
         reminderm.push(parseInt(`${stationsZ}`) * 2);
         contexti.set(`${contexti.size}`, contexti.size % (Math.max(2, contexti.size)));
         stationsZ -= contexti.size & contexti.size;
       let libturbomodulejsijni5 = 3;
       let overlayt = 4;
      let nativeg = reminderm.length <= 9217880;
      do {
          let homeR = true;
          let y_positionX = 0;
          let libglogu: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,95,56,95,52,0),514], [String.fromCharCode(110,111,97,108,108,111,99,95,112,95,53,0),332], [String.fromCharCode(105,95,55,51,95,112,97,108,109,0),346]]);
         reminderm.push(libturbomodulejsijni5 ^ 2);
         homeR = homeR || y_positionX < 54;
         y_positionX -= 1;
         libglogu = new Map([[`${libglogu.size}`, libglogu.size % 1]]);
         if (nativeg) {
            break;
         }
      } while (((2 + reminderm.length) <= 5 && 4 <= (2 + reminderm.length)) && nativeg);
      if (selectedu) {
         overlayt ^= libturbomodulejsijni5 * 2;
      }
       let c_imageS: Map<any, any> = new Map([[String.fromCharCode(109,95,52,56,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0),String.fromCharCode(100,95,53,53,95,97,118,97,105,108,97,98,108,101,0)], [String.fromCharCode(99,117,109,101,95,104,95,48,0),String.fromCharCode(97,95,53,52,95,97,97,102,99,0)], [String.fromCharCode(112,114,101,115,101,108,101,99,116,95,103,95,53,0),String.fromCharCode(112,111,115,116,95,113,95,51,52,0)]]);
          let watchs: Array<any> = [357, 610];
         overlayt &= reminderm.length >> (Math.min(Math.abs(1), 4));
         watchs.push(watchs.length % (Math.max(2, 4)));
      currentY += 3;
      mbbidG -= parseFloat(`${parseInt(`${mbbidG}`)}`);
   for (let c = 0; c < 2; c++) {
      libsgcorec /= Math.max(3, (parseFloat(`${acceptedS == String.fromCharCode(99,0) ? acceptedS.length : saveD.size}`)));
   }

      if (delayValue === undefined) {

   if (1.3 >= (sharedI + 5.36) && (sharedI + currentY) >= 5.36) {
       let stylesY = 1.0;
         stylesY += parseFloat(`${3}`);
         stylesY /= Math.max(parseFloat(`${1}`), 4);
         stylesY *= parseFloat(`${parseInt(`${stylesY}`)}`);
      currentY += 1 ^ parseInt(`${sharedI}`);
   }
   for (let h = 0; h < 3; h++) {
       let taiwan7 = String.fromCharCode(98,95,53,52,95,112,114,101,102,97,99,101,0);
       let loginu = String.fromCharCode(98,103,114,97,95,115,95,57,50,0);
       let grayC: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,98,108,117,114,0),400], [String.fromCharCode(97,95,55,55,95,115,116,114,0),419], [String.fromCharCode(98,101,97,116,105,110,103,95,117,95,55,56,0),64]]);
         loginu = `${grayC.size}`;
      while (loginu.length >= taiwan7.length) {
         taiwan7 = "3";
         break;
      }
       let buildm: Map<any, any> = new Map([[String.fromCharCode(117,95,51,52,95,117,114,97,110,100,111,109,0),961], [String.fromCharCode(105,110,118,105,116,97,116,105,111,110,95,102,95,52,51,0),904], [String.fromCharCode(117,110,100,101,108,101,103,97,116,101,95,104,95,52,52,0),715]]);
      while (!loginu.includes(`${buildm.size}`)) {
         loginu = "3";
         break;
      }
      while (!loginu.includes(taiwan7)) {
          let mimok = 4.0;
          let circler = String.fromCharCode(120,95,56,52,0);
         taiwan7 = `${(String.fromCharCode(111,0) == circler ? circler.length : grayC.size)}`;
         mimok += parseFloat(`${2}`);
         break;
      }
      for (let f = 0; f < 3; f++) {
          let libreanimatedZ = String.fromCharCode(112,114,111,95,102,95,55,53,0);
          let utilss: Array<any> = [String.fromCharCode(111,95,49,56,95,112,114,111,109,111,116,101,100,0), String.fromCharCode(99,111,110,110,101,99,116,105,111,110,95,48,95,49,51,0), String.fromCharCode(111,95,50,53,95,109,115,110,119,99,0)];
          let apps9: Map<any, any> = new Map([[String.fromCharCode(104,95,52,48,95,110,101,119,108,105,110,101,115,0),String.fromCharCode(120,95,52,57,95,97,115,105,115,0)], [String.fromCharCode(99,104,97,116,95,48,95,49,52,0),String.fromCharCode(97,95,57,51,95,112,105,112,101,108,105,110,105,110,103,0)], [String.fromCharCode(101,120,116,114,97,100,97,116,97,112,115,101,116,115,95,98,95,52,55,0),String.fromCharCode(106,95,52,54,95,114,116,109,112,99,114,121,112,116,0)]]);
          let libhermesS: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,101,100,117,99,116,105,111,110,95,97,95,55,0),492], [String.fromCharCode(119,95,55,55,95,99,104,97,110,103,101,0),323]]);
          let mbridgeF: Map<any, any> = new Map([[String.fromCharCode(114,117,110,110,105,110,103,95,114,95,55,0),false ], [String.fromCharCode(106,95,57,48,95,110,111,108,111,99,107,0),false ], [String.fromCharCode(98,95,51,55,95,116,109,109,98,114,0),true ]]);
         buildm.set(`${buildm.size}`, libhermesS.size * 3);
         libreanimatedZ += "1";
         utilss = [apps9.size];
         apps9 = new Map([[`${mbridgeF.size}`, 1 >> (Math.min(1, Math.abs(mbridgeF.size)))]]);
         libhermesS = new Map([[`${utilss.length}`, utilss.length * libreanimatedZ.length]]);
      }
      for (let e = 0; e < 2; e++) {
         taiwan7 = `${grayC.size}`;
      }
         taiwan7 = `${grayC.size % 1}`;
         grayC = new Map([[`${grayC.size}`, taiwan7.length - grayC.size]]);
      sharedI *= (parseFloat(`${String.fromCharCode(112,0) == redirectq ? redirectq.length : (renew0 ? 5 : 4)}`));
   }
      textA *= parseInt(`${libsgcorec}`);
   if (!shootz.includes(redirectq)) {
      redirectq += `${parseInt(`${currentY}`) >> (Math.min(1, Math.abs(2)))}`;
   }
   for (let v = 0; v < 3; v++) {
      update_e0g = [1 | libreactnativejni_.length];
   }
   let play7 = utilsP ? !utilsP : utilsP;
   do {
      utilsP = (acceptedS.length - temperatureP.length) >= 90;
      if (play7) {
         break;
      }
   } while ((1 < update_e0g.length || 1 < (update_e0g.length % 1)) && play7);
   if (4.38 >= (1.47 / (Math.max(8, textA)))) {
      textA -= (shootz == String.fromCharCode(86,0) ? (utilsP ? 3 : 5) : shootz.length);
   }
      shootz += `${parseInt(`${currentY}`) >> (Math.min(5, Math.abs(1)))}`;
        if (showSlider === 'none' && !paused) {

      libsgcorec += parseFloat(`${parseInt(`${libsgcorec}`) - 1}`);
   for (let w = 0; w < 1; w++) {
       let holdera: Array<any> = [String.fromCharCode(119,95,50,51,95,99,97,110,0), String.fromCharCode(116,114,117,116,104,95,98,95,55,0)];
       let telegramZ: Map<any, any> = new Map([[String.fromCharCode(110,95,55,51,95,101,120,112,97,110,100,0),String.fromCharCode(97,108,115,97,95,115,95,53,49,0)], [String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,115,95,57,53,0),String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,100,95,50,50,0)]]);
          let hongkong7 = true;
          let turn4: Map<any, any> = new Map([[String.fromCharCode(113,117,111,116,97,95,101,95,55,55,0),String.fromCharCode(121,95,55,95,101,121,101,0)], [String.fromCharCode(112,97,114,116,105,99,108,101,95,97,95,54,53,0),String.fromCharCode(101,115,116,105,109,97,116,105,110,103,95,103,95,55,50,0)], [String.fromCharCode(97,95,51,50,95,114,101,115,105,122,101,100,0),String.fromCharCode(112,95,53,56,95,100,105,115,97,98,108,101,115,0)]]);
          let playV = String.fromCharCode(106,95,52,53,0);
         holdera = [(playV == String.fromCharCode(118,0) ? turn4.size : playV.length)];
         hongkong7 = hongkong7 || !hongkong7;
         turn4 = new Map([[`${hongkong7}`, ((hongkong7 ? 2 : 1))]]);
      for (let i = 0; i < 2; i++) {
          let icono = true;
         holdera = [2 << (Math.min(1, Math.abs(telegramZ.size)))];
      }
         telegramZ.set(`${holdera.length}`, 3 << (Math.min(5, Math.abs(telegramZ.size))));
      while (!Array.from(telegramZ.keys()).includes(`${holdera.length}`)) {
         telegramZ = new Map([[`${telegramZ.size}`, holdera.length]]);
         break;
      }
         telegramZ = new Map([[`${telegramZ.size}`, telegramZ.size / (Math.max(4, holdera.length))]]);
         telegramZ = new Map([[`${telegramZ.size}`, telegramZ.size ^ 2]]);
      libsgcorec += (parseFloat(`${(renew0 ? 2 : 5) << (Math.min(Math.abs(parseInt(`${sharedI}`)), 2))}`));
   }
   for (let g = 0; g < 1; g++) {
       let soundz = 4.0;
       let with_4F = String.fromCharCode(108,95,57,55,95,105,116,101,109,115,0);
       let assist3: Map<any, any> = new Map([[String.fromCharCode(109,95,52,50,95,108,111,103,105,115,116,105,99,0),String.fromCharCode(115,104,97,100,111,119,95,117,95,57,54,0)], [String.fromCharCode(101,118,114,112,99,95,108,95,57,57,0),String.fromCharCode(99,111,110,115,117,109,101,95,101,95,50,50,0)]]);
      if ((2 & with_4F.length) == 4 && (assist3.size & 2) == 5) {
          let clockJ = String.fromCharCode(106,95,57,55,95,117,110,109,97,115,107,0);
          let collectionc = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,109,95,55,50,0);
          let windD = String.fromCharCode(119,95,57,95,115,105,103,116,101,114,109,0);
         assist3 = new Map([[collectionc, windD.length << (Math.min(5, collectionc.length))]]);
         clockJ += "3";
      }
          let pointZ: Array<any> = [String.fromCharCode(110,95,55,54,0), String.fromCharCode(104,111,115,116,110,97,109,101,95,107,95,49,48,0), String.fromCharCode(102,95,56,51,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0)];
         with_4F += `${parseInt(`${soundz}`) / (Math.max(2, 4))}`;
         pointZ.push(pointZ.length);
      while (with_4F.endsWith(`${soundz}`)) {
          let guide3 = 3.0;
          let filtern: Array<any> = [348, 519];
          let playercommonQ = 1.0;
          let kuaishouU = String.fromCharCode(112,95,57,55,95,98,97,99,107,114,111,117,110,100,0);
         soundz *= parseInt(`${guide3}`) | assist3.size;
         guide3 += 3 << (Math.min(5, Math.abs(parseInt(`${playercommonQ}`))));
         filtern = [kuaishouU.length << (Math.min(3, Math.abs(parseInt(`${playercommonQ}`))))];
         kuaishouU = `${filtern.length}`;
         break;
      }
       let googleU = false;
       let activep = true;
         activep = !googleU;
      let mbsplashX = soundz <= 5529003.0;
      do {
          let gradlewq: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,95,116,100,115,99,0),true ], [String.fromCharCode(104,105,103,104,119,97,116,101,114,95,101,95,52,50,0),false ], [String.fromCharCode(101,112,108,121,95,105,95,55,56,0),false ]]);
         soundz -= assist3.size;
         gradlewq.set(`${gradlewq.size}`, gradlewq.size & 1);
         if (mbsplashX) {
            break;
         }
      } while (mbsplashX && ((assist3.size + soundz) <= 5.58 && (1 >> (Math.min(2, Math.abs(assist3.size)))) <= 2));
      while (googleU && (soundz / 2.21) >= 4.28) {
         googleU = 42.59 < soundz;
         break;
      }
         with_4F += `${assist3.size % 1}`;
      if ((soundz + with_4F.length) > 1.34 || (with_4F.length + parseInt(`${soundz}`)) > 2) {
          let thailandc = 4.0;
          let anytimeN = 1;
          let benefit7 = false;
          let screeni = String.fromCharCode(118,95,52,54,95,115,121,109,111,100,100,0);
         with_4F += `${((googleU ? 3 : 5) | 1)}`;
         thailandc /= Math.max(1, 2);
         anytimeN *= parseInt(`${thailandc}`) + 3;
         benefit7 = anytimeN == parseInt(`${thailandc}`);
         screeni = `${screeni.length}`;
      }
      shootz += "1";
   }
      libreactnativejni_ = `${((utilsP ? 3 : 5))}`;
      utilsP = !utilsP;
   for (let o = 0; o < 1; o++) {
      redirectq = `${libreactnativejni_.length}`;
   }
   let styleF = acceptedS.length <= 5909353;
   do {
      acceptedS = `${acceptedS.length}`;
      if (styleF) {
         break;
      }
   } while (((acceptedS.length + saveD.size) < 3 || (saveD.size + acceptedS.length) < 3) && styleF);
   let malaysiaA = 8138197 <= saveD.size;
   do {
       let default_4_ = 0.0;
       let submits = true;
       let largeG = String.fromCharCode(99,117,114,108,95,122,95,49,49,0);
       let textm = String.fromCharCode(108,111,99,107,115,99,114,101,101,110,95,121,95,57,50,0);
      let root2 = 8422017.0 >= default_4_;
      do {
         default_4_ += 1;
         if (root2) {
            break;
         }
      } while (root2 && (default_4_ >= largeG.length));
      while (!submits) {
         largeG = `${((submits ? 5 : 5) - parseInt(`${default_4_}`))}`;
         break;
      }
         submits = 89.37 <= default_4_;
      while (textm == largeG) {
         largeG = `${3 & parseInt(`${default_4_}`)}`;
         break;
      }
      let a_unlockz = 5486838 >= largeG.length;
      do {
          let brightness_ = 4;
          let theme3 = 5.0;
         largeG += `${parseInt(`${default_4_}`) - largeG.length}`;
         brightness_ <<= Math.min(4, Math.abs(2 & parseInt(`${theme3}`)));
         theme3 /= Math.max(parseFloat(`${parseInt(`${theme3}`) << (Math.min(4, Math.abs(brightness_)))}`), 2);
         if (a_unlockz) {
            break;
         }
      } while (a_unlockz && (textm.startsWith(`${largeG.length}`)));
         textm += `${1 >> (Math.min(Math.abs(parseInt(`${default_4_}`)), 1))}`;
         submits = !submits || textm.length == 21;
          let animationS: Map<any, any> = new Map([[String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,101,95,53,48,0),641], [String.fromCharCode(121,95,55,57,95,120,99,111,100,101,0),136], [String.fromCharCode(110,95,55,51,95,100,114,97,103,103,105,110,103,0),119]]);
         textm += `${1 * animationS.size}`;
      while (!largeG.endsWith(`${textm.length}`)) {
         textm = "3";
         break;
      }
          let mutede = 5;
          let kickR = 5;
          let encryptW = 1.0;
         textm = `${(parseInt(`${default_4_}`) >> (Math.min(5, Math.abs((submits ? 3 : 2)))))}`;
         mutede %= Math.max(mutede | 1, 3);
         kickR |= mutede + 3;
         encryptW -= 3 * parseInt(`${encryptW}`);
          let analyticsw = String.fromCharCode(113,95,54,49,95,105,100,99,116,120,0);
          let policyc = 2.0;
          let philippinesV = String.fromCharCode(105,95,56,54,95,98,111,111,107,109,97,114,107,0);
         largeG = `${parseInt(`${policyc}`)}`;
         analyticsw += `${1 | analyticsw.length}`;
         policyc += philippinesV.length ^ analyticsw.length;
         philippinesV += `${analyticsw.length ^ philippinesV.length}`;
      if ((5 + textm.length) == 3 && 2 == (textm.length << (Math.min(Math.abs(5), 1)))) {
          let lightS = String.fromCharCode(113,95,50,50,95,115,101,99,116,111,114,0);
          let serviceI = 5.0;
          let zoomZ = 5.0;
          let baiduN = 2;
          let phonex = false;
         default_4_ -= (String.fromCharCode(102,0) == textm ? (submits ? 1 : 3) : textm.length);
         lightS += `${(parseInt(`${zoomZ}`) * (phonex ? 5 : 2))}`;
         serviceI /= Math.max(4, (parseFloat(`${baiduN + (phonex ? 4 : 1)}`)));
         zoomZ *= 1;
         baiduN <<= Math.min(2, Math.abs(baiduN / 2));
      }
      saveD.set(libreactnativejni_, 2 ^ libreactnativejni_.length);
      if (malaysiaA) {
         break;
      }
   } while (malaysiaA && ((1 - saveD.size) < 5 || 1 < (acceptedS.length - saveD.size)));
          setShowControls(false)
        }
      } else {

      acceptedS = `${(1 >> (Math.min(5, Math.abs((renew0 ? 3 : 1)))))}`;
       let header1 = String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,95,116,95,56,53,0);
       let invite6 = 2.0;
       let strx: Map<any, any> = new Map([[String.fromCharCode(104,95,52,48,95,112,114,111,100,115,0),true ], [String.fromCharCode(102,95,57,49,95,104,97,108,102,108,116,117,105,110,116,0),false ], [String.fromCharCode(120,95,49,56,95,100,118,118,105,100,101,111,0),true ]]);
      for (let h = 0; h < 2; h++) {
         invite6 += parseFloat(`${parseInt(`${invite6}`) ^ strx.size}`);
      }
         header1 += `${(String.fromCharCode(78,0) == header1 ? parseInt(`${invite6}`) : header1.length)}`;
      if (5.56 >= (parseFloat(`${header1.length}`) - invite6)) {
          let typesY = 3;
          let d_positionu: Map<any, any> = new Map([[String.fromCharCode(107,95,52,56,95,108,105,98,115,119,105,102,116,111,115,0),String.fromCharCode(118,95,51,51,95,114,101,109,111,116,101,108,121,0)], [String.fromCharCode(100,95,55,57,95,112,111,115,116,97,108,0),String.fromCharCode(100,95,54,55,95,103,108,121,112,104,115,0)]]);
          let scorec = String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,106,95,49,51,0);
          let libtanw = String.fromCharCode(119,95,53,49,95,104,97,110,100,108,101,114,0);
         header1 = `${(scorec == String.fromCharCode(120,0) ? scorec.length : parseInt(`${invite6}`))}`;
         typesY <<= Math.min(2, Math.abs(libtanw.length * 3));
         d_positionu = new Map([[libtanw, 3 * typesY]]);
      }
          let flyer5 = 5.0;
          let libavfilter1 = 1.0;
         invite6 -= parseFloat(`${strx.size << (Math.min(3, Math.abs(parseInt(`${libavfilter1}`))))}`);
         flyer5 /= Math.max(parseFloat(`${1 & parseInt(`${flyer5}`)}`), 2);
         libavfilter1 /= Math.max(parseFloat(`${2 | parseInt(`${flyer5}`)}`), 3);
         invite6 *= parseFloat(`${strx.size}`);
       let clocky: Map<any, any> = new Map([[String.fromCharCode(100,121,110,108,111,99,107,95,105,95,50,55,0),false ], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,112,95,51,49,0),true ], [String.fromCharCode(115,116,114,117,99,116,117,114,101,115,95,105,95,52,48,0),true ]]);
         header1 = `${header1.length}`;
          let productE = String.fromCharCode(114,95,50,49,95,114,101,97,109,0);
          let fullC = 1.0;
         strx.set(productE, 1 & parseInt(`${invite6}`));
         productE = "3";
         fullC -= parseFloat(`${3}`);
          let basketballZ: Array<any> = [226, 716];
         strx = new Map([[`${clocky.size}`, 2]]);
         basketballZ.push(basketballZ.length << (Math.min(4, basketballZ.length)));
      currentY *= acceptedS.length << (Math.min(5, Math.abs(parseInt(`${sharedI}`))));
   let materialW = String.fromCharCode(104,115,98,113,56,0) == libreactnativejni_;
   do {
      libreactnativejni_ += `${(2 << (Math.min(2, Math.abs((renew0 ? 2 : 3)))))}`;
      if (materialW) {
         break;
      }
   } while (materialW && (!libreactnativejni_.startsWith(`${saveD.size}`)));
       let zoomD = String.fromCharCode(112,114,111,102,114,101,115,115,95,108,95,53,51,0);
      let fastQ = zoomD == String.fromCharCode(115,112,111,100,0);
      do {
         zoomD = `${zoomD.length | zoomD.length}`;
         if (fastQ) {
            break;
         }
      } while (fastQ && (zoomD != zoomD));
      let stylesD = zoomD.length >= 6826547;
      do {
         zoomD += `${2 & zoomD.length}`;
         if (stylesD) {
            break;
         }
      } while (stylesD && (2 > zoomD.length));
          let promotionY = 2.0;
         zoomD += `${3 >> (Math.min(1, zoomD.length))}`;
         promotionY *= parseFloat(`${parseInt(`${promotionY}`) + 2}`);
      libsgcorec -= (parseFloat(`${temperatureP == String.fromCharCode(87,0) ? redirectq.length : temperatureP.length}`));
   for (let w = 0; w < 2; w++) {
      redirectq += `${2 % (Math.max(6, parseInt(`${textA}`)))}`;
   }
   if (saveD.size >= update_e0g.length) {
      saveD = new Map([[`${sharedI}`, parseInt(`${sharedI}`) % (Math.max(parseInt(`${currentY}`), 6))]]);
   }
      update_e0g = [((renew0 ? 4 : 3) << (Math.min(Math.abs(parseInt(`${currentY}`)), 3)))];
   while (!utilsP && !renew0) {
      renew0 = shootz == String.fromCharCode(108,0);
      break;
   }
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let guidec: Array<any> = [725, 488];
    let reada = 4.0;
    let alertW = String.fromCharCode(109,95,52,50,95,97,97,99,112,115,121,0);
    let gemfile2 = String.fromCharCode(116,121,112,101,100,101,102,95,122,95,57,0);
    let areaV = String.fromCharCode(102,109,115,117,98,95,105,95,55,57,0);
    let termsU = String.fromCharCode(101,111,109,101,116,114,121,95,104,95,51,50,0);
    let short_0R: Map<any, any> = new Map([[String.fromCharCode(108,95,57,49,95,119,101,108,99,104,0),230], [String.fromCharCode(121,95,50,53,95,112,114,111,118,105,100,105,110,103,0),807]]);
    let valueso = String.fromCharCode(115,116,105,99,107,121,95,117,95,49,48,0);
    let teamI: Map<any, any> = new Map([[String.fromCharCode(105,115,111,109,95,48,95,52,48,0),836], [String.fromCharCode(118,112,100,115,112,95,118,95,49,48,0),777], [String.fromCharCode(122,101,116,97,95,120,95,55,0),169]]);
    let classes7 = String.fromCharCode(110,95,54,48,95,116,119,105,100,100,108,101,0);
    let cancel6 = String.fromCharCode(100,95,55,56,95,119,101,98,109,0);
    let infoQ = 4.0;
    let telegramp = String.fromCharCode(114,101,113,115,116,97,116,101,95,56,95,50,49,0);
   for (let z = 0; z < 2; z++) {
      termsU += `${classes7.length << (Math.min(1, Math.abs(teamI.size)))}`;
   }
      classes7 = "3";
   if (!alertW.includes(`${classes7.length}`)) {
      classes7 = `${teamI.size & 2}`;
   }
   let darkG = 7239998 >= short_0R.size;
   do {
      short_0R = new Map([[termsU, 2 >> (Math.min(1, termsU.length))]]);
      if (darkG) {
         break;
      }
   } while ((Array.from(short_0R.values()).includes(teamI.size)) && darkG);
   while ((cancel6.length * 3) <= 5 && (cancel6.length * 3) <= 3) {
      teamI = new Map([[areaV, 1 + areaV.length]]);
      break;
   }
   let huaweiG = 8778476 >= gemfile2.length;
   do {
       let temp9: Array<any> = [520, 879];
       let tickS = 5.0;
       let qaagE = true;
       let tickH: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,101,95,105,95,52,56,0),false ], [String.fromCharCode(101,104,105,103,104,95,102,95,50,0),false ], [String.fromCharCode(102,95,55,54,95,119,101,98,112,0),true ]]);
       let shirtl = String.fromCharCode(114,111,98,117,115,116,95,103,95,51,49,0);
         qaagE = (14 < (tickH.size >> (Math.min(4, Math.abs((!qaagE ? tickH.size : 30))))));
      while ((tickS / 1.65) < 3.13) {
         tickS -= 1 >> (Math.min(4, shirtl.length));
         break;
      }
      let club2 = qaagE ? !qaagE : qaagE;
      do {
         qaagE = shirtl.length == 42;
         if (club2) {
            break;
         }
      } while ((shirtl.includes(`${qaagE}`)) && club2);
      let statsX = shirtl.length >= 8786033;
      do {
          let signinup2 = false;
          let agreementg: Array<any> = [1000, 672];
          let popupv = 2.0;
          let sell9 = 0.0;
          let tumbnail8 = String.fromCharCode(115,101,116,95,53,95,50,55,0);
         shirtl = "3";
         signinup2 = popupv >= sell9;
         agreementg.push((parseInt(`${sell9}`) << (Math.min(4, Math.abs((signinup2 ? 1 : 2))))));
         popupv -= ((signinup2 ? 5 : 1) | 3);
         tumbnail8 += `${((signinup2 ? 3 : 1) + parseInt(`${sell9}`))}`;
         if (statsX) {
            break;
         }
      } while ((shirtl.length == 2) && statsX);
      let playlistD = tickH.size <= 5241630;
      do {
         tickH = new Map([[`${tickH.size}`, temp9.length % (Math.max(8, tickH.size))]]);
         if (playlistD) {
            break;
         }
      } while ((5 <= (shirtl.length | 1) || 1 <= (shirtl.length | tickH.size)) && playlistD);
         qaagE = !shirtl.endsWith(`${qaagE}`);
          let flyerS = String.fromCharCode(122,95,49,54,95,97,115,115,101,116,115,0);
          let playercommonu = true;
         tickH.set(shirtl, (String.fromCharCode(85,0) == shirtl ? parseInt(`${tickS}`) : shirtl.length));
         flyerS += `${1 & flyerS.length}`;
         playercommonu = flyerS.endsWith(`${playercommonu}`);
      let dplusi = shirtl == String.fromCharCode(121,101,55,121,49,110,100,115,120,0);
      do {
          let classesw = false;
          let rewardw: Map<any, any> = new Map([[String.fromCharCode(102,97,97,110,105,100,99,116,95,109,95,55,54,0),169], [String.fromCharCode(110,95,56,51,95,112,111,114,116,115,0),485], [String.fromCharCode(114,101,109,97,116,114,105,120,105,110,103,95,99,95,57,53,0),426]]);
          let plashC: Array<any> = [String.fromCharCode(114,111,119,115,95,98,95,57,50,0), String.fromCharCode(102,116,118,108,105,110,107,95,57,95,54,53,0)];
          let configD = String.fromCharCode(114,97,116,101,99,116,114,108,95,114,95,49,56,0);
         shirtl += `${((classesw ? 4 : 2) / (Math.max(1, temp9.length)))}`;
         classesw = plashC.length >= 78;
         rewardw = new Map([[`${plashC.length}`, configD.length - plashC.length]]);
         configD += `${(String.fromCharCode(105,0) == configD ? rewardw.size : configD.length)}`;
         if (dplusi) {
            break;
         }
      } while (((1 >> (Math.min(5, Math.abs(tickH.size)))) >= 2) && dplusi);
         temp9.push(3 | temp9.length);
         qaagE = tickS >= temp9.length;
          let tickedR = 0;
          let buttont = String.fromCharCode(100,101,112,101,110,100,95,109,95,56,53,0);
         qaagE = (tickedR | temp9.length) == 7;
         tickedR ^= buttont.length;
         buttont += `${1 >> (Math.min(3, buttont.length))}`;
      let showu = 5829421 <= tickH.size;
      do {
         tickH.set(`${tickS}`, parseInt(`${tickS}`));
         if (showu) {
            break;
         }
      } while ((!Array.from(tickH.keys()).includes(`${tickS}`)) && showu);
          let topon7 = String.fromCharCode(102,95,53,48,95,97,99,108,114,0);
          let membershipD = 0.0;
          let downloadingd = String.fromCharCode(109,95,56,56,95,97,120,105,120,0);
         qaagE = temp9.includes(tickS);
         topon7 += `${downloadingd.length | parseInt(`${membershipD}`)}`;
         membershipD += (parseFloat(`${downloadingd == String.fromCharCode(103,0) ? downloadingd.length : parseInt(`${membershipD}`)}`));
       let downX = 0.0;
         shirtl = `${shirtl.length}`;
      gemfile2 += "2";
      if (huaweiG) {
         break;
      }
   } while (huaweiG && (valueso == String.fromCharCode(101,0)));

    if (isLocked) {

   let mutedC = 8466903 <= teamI.size;
   do {
       let hookZ = 1.0;
       let abouti = true;
       let time_mB: Array<any> = [String.fromCharCode(115,111,108,105,100,99,111,108,111,114,95,115,95,50,52,0), String.fromCharCode(114,101,115,116,111,114,101,95,50,95,50,54,0)];
       let libfabricjniK = String.fromCharCode(114,102,112,115,95,120,95,50,0);
          let useri = true;
          let manifesth: Map<any, any> = new Map([[String.fromCharCode(110,95,54,49,95,114,114,111,114,0),955], [String.fromCharCode(105,110,116,115,95,111,95,56,54,0),743]]);
         abouti = 25 < time_mB.length || 25 < libfabricjniK.length;
         useri = null == manifesth.get(`${useri}`);
         manifesth = new Map([[`${manifesth.size}`, 1 << (Math.min(4, Math.abs(manifesth.size)))]]);
      while (2 > (time_mB.length ^ 5)) {
          let type_5lf = 5;
         libfabricjniK = `${2 / (Math.max(3, type_5lf))}`;
         break;
      }
         hookZ /= Math.max(1, libfabricjniK.length);
          let encryptU = 2.0;
          let selectG = 3.0;
         time_mB = [libfabricjniK.length % 3];
         encryptU -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${selectG}`)), 2))}`);
         selectG += parseInt(`${encryptU}`);
      while (abouti) {
         abouti = !abouti && libfabricjniK.length < 91;
         break;
      }
      if (1 <= libfabricjniK.length) {
         hookZ *= 2;
      }
         abouti = time_mB.includes(abouti);
         abouti = String.fromCharCode(119,0) == libfabricjniK;
      if ((time_mB.length / 2) < 1 || !abouti) {
          let soundA = true;
          let launchm = 5;
         time_mB.push(3);
         soundA = !soundA;
         launchm <<= Math.min(Math.abs(1), 3);
      }
         libfabricjniK += "3";
      let combinedj = 9703806 <= time_mB.length;
      do {
         time_mB = [libfabricjniK.length];
         if (combinedj) {
            break;
         }
      } while (((5 & libfabricjniK.length) <= 1 && (5 & libfabricjniK.length) <= 2) && combinedj);
          let bridgeh = false;
          let verticalF = String.fromCharCode(99,109,111,118,95,103,95,49,49,0);
         abouti = !bridgeh;
         verticalF = `${verticalF.length}`;
      teamI.set(`${short_0R.size}`, teamI.size);
      if (mutedC) {
         break;
      }
   } while (mutedC && (Array.from(teamI.values()).includes(guidec.length)));
      cancel6 += `${teamI.size}`;
      short_0R.set(`${cancel6}`, (cancel6 == String.fromCharCode(106,0) ? cancel6.length : short_0R.size));
   if (guidec.length < classes7.length) {
       let type__R = String.fromCharCode(102,105,108,116,101,114,95,103,95,51,0);
       let u_player7 = 3.0;
       let spinner7 = 0.0;
       let armvau = 3.0;
      for (let v = 0; v < 1; v++) {
         type__R += `${parseInt(`${armvau}`)}`;
      }
          let matchesy = false;
         armvau += 1 - parseInt(`${u_player7}`);
         matchesy = !matchesy || !matchesy;
      let hooksr = armvau >= 6146004.0;
      do {
         armvau -= parseInt(`${armvau}`) ^ parseInt(`${spinner7}`);
         if (hooksr) {
            break;
         }
      } while ((2 > type__R.length) && hooksr);
          let grayA: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,115,116,121,108,0),String.fromCharCode(120,95,52,50,95,115,101,108,101,99,116,101,100,0)], [String.fromCharCode(115,112,108,105,116,116,105,110,103,95,98,95,57,54,0),String.fromCharCode(110,95,49,50,95,99,113,117,101,117,101,0)], [String.fromCharCode(101,121,98,111,97,114,100,95,122,95,57,57,0),String.fromCharCode(112,95,51,53,95,102,114,97,109,101,105,110,102,111,0)]]);
         u_player7 += 3;
         grayA = new Map([[`${grayA.size}`, grayA.size]]);
      let componenta = spinner7 <= 5347197.0;
      do {
          let basketballV = String.fromCharCode(98,97,99,107,119,97,114,100,115,95,48,95,56,50,0);
          let navigations = 5;
         spinner7 *= parseFloat(`${2}`);
         basketballV += `${navigations}`;
         navigations += basketballV.length % (Math.max(9, navigations));
         if (componenta) {
            break;
         }
      } while ((5.100 == armvau) && componenta);
         spinner7 *= parseFloat(`${parseInt(`${armvau}`) * 2}`);
      for (let a = 0; a < 3; a++) {
         u_player7 *= parseInt(`${spinner7}`);
      }
          let upgrader = String.fromCharCode(116,114,97,110,115,112,95,105,95,57,55,0);
          let phoneK = String.fromCharCode(111,110,121,120,95,117,95,53,48,0);
         spinner7 += parseFloat(`${parseInt(`${u_player7}`) >> (Math.min(Math.abs(3), 1))}`);
         upgrader = "2";
         phoneK += `${upgrader.length - 1}`;
      while ((3.100 + spinner7) < 3.98 && 2 < (type__R.length + parseInt(`${spinner7}`))) {
          let specw = String.fromCharCode(107,95,56,55,95,100,101,115,101,114,105,97,108,105,122,101,0);
         spinner7 -= parseFloat(`${type__R.length}`);
         specw = `${2 | specw.length}`;
         break;
      }
      while ((u_player7 - spinner7) > 5.65) {
          let plusU = 2;
          let sportsW = String.fromCharCode(98,95,53,51,95,105,110,115,116,97,108,108,0);
          let suggestion9 = 4;
          let reducer5 = 2;
          let libflipperN = String.fromCharCode(122,95,53,55,95,112,115,110,114,120,0);
         u_player7 -= 2;
         plusU &= 2;
         sportsW += `${(libflipperN == String.fromCharCode(104,0) ? libflipperN.length : reducer5)}`;
         suggestion9 |= sportsW.length;
         reducer5 /= Math.max(reducer5, 1);
         break;
      }
      let libzeus3 = 9751318.0 >= spinner7;
      do {
          let twitter4: Array<any> = [536, 428];
         spinner7 += parseFloat(`${parseInt(`${armvau}`) * type__R.length}`);
         twitter4 = [twitter4.length - 1];
         if (libzeus3) {
            break;
         }
      } while ((type__R.startsWith(`${spinner7}`)) && libzeus3);
      if (4.1 <= (armvau - 2.60) || 3.8 <= (2.60 - armvau)) {
         spinner7 -= parseFloat(`${2 % (Math.max(2, parseInt(`${spinner7}`)))}`);
      }
      guidec.push(parseInt(`${armvau}`));
   }
   let libsgcoreB = 8058992.0 <= infoQ;
   do {
       let bdxadsdk8 = String.fromCharCode(98,95,54,48,95,115,101,101,0);
       let guideL = String.fromCharCode(108,95,51,54,95,99,104,97,110,110,101,108,109,97,112,0);
       let inviten: Array<any> = [886, 876];
       let playercommonO = String.fromCharCode(119,95,54,51,95,97,99,113,117,105,114,101,100,0);
          let shirtE: Array<any> = [344, 71];
         bdxadsdk8 = "1";
         shirtE = [3 * shirtE.length];
       let scheduleO = String.fromCharCode(114,95,56,57,95,99,111,110,115,116,115,0);
       let controlsr = String.fromCharCode(115,116,97,116,117,115,111,114,95,104,95,51,0);
      let materialA = 9691890 <= guideL.length;
      do {
          let modelJ = 3.0;
          let mailm = String.fromCharCode(105,95,53,95,112,114,105,110,116,111,117,116,0);
          let control_ = String.fromCharCode(105,95,49,56,95,105,110,116,101,103,101,114,115,0);
         guideL += `${(guideL == String.fromCharCode(67,0) ? guideL.length : controlsr.length)}`;
         modelJ -= control_.length >> (Math.min(5, mailm.length));
         mailm = `${mailm.length / (Math.max(2, 3))}`;
         control_ = `${3 ^ mailm.length}`;
         if (materialA) {
            break;
         }
      } while (materialA && (2 == (guideL.length ^ inviten.length)));
          let libreactperfloggerjniW = String.fromCharCode(112,111,114,116,95,117,95,50,0);
          let change3 = 2;
          let becomew: Array<any> = [String.fromCharCode(99,95,54,52,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0), String.fromCharCode(117,95,57,55,95,101,120,116,101,110,100,0)];
         inviten.push(guideL.length);
         libreactperfloggerjniW += `${libreactperfloggerjniW.length - change3}`;
         change3 %= Math.max(2, libreactperfloggerjniW.length);
         becomew = [3];
         scheduleO = `${controlsr.length}`;
       let hiadM = String.fromCharCode(116,95,51,56,95,114,101,99,97,108,99,0);
      let show5 = String.fromCharCode(105,55,49,101,118,98,113,119,112,0) == scheduleO;
      do {
         scheduleO = `${2 | inviten.length}`;
         if (show5) {
            break;
         }
      } while ((!controlsr.includes(`${scheduleO.length}`)) && show5);
         hiadM = `${hiadM.length}`;
      for (let z = 0; z < 3; z++) {
         inviten = [scheduleO.length & guideL.length];
      }
         controlsr += `${2 - scheduleO.length}`;
      while (guideL.length == inviten.length) {
          let cricket9 = String.fromCharCode(119,95,50,95,100,105,115,112,108,97,99,101,0);
          let backY: Array<any> = [727, 776];
         guideL += `${1 << (Math.min(5, inviten.length))}`;
         cricket9 = `${backY.length | 1}`;
         backY = [cricket9.length & 1];
         break;
      }
      let nativeexz = bdxadsdk8.length <= 8288399;
      do {
          let reactnativejsu: Array<any> = [102, 344, 951];
          let awayK = 0;
          let whiten = String.fromCharCode(102,95,49,50,95,105,110,100,101,120,101,100,0);
          let holder3 = 4.0;
         bdxadsdk8 += `${parseInt(`${holder3}`)}`;
         reactnativejsu = [reactnativejsu.length - awayK];
         awayK >>= Math.min(4, Math.abs(awayK));
         whiten += `${awayK}`;
         holder3 -= (parseFloat(`${whiten == String.fromCharCode(76,0) ? whiten.length : reactnativejsu.length}`));
         if (nativeexz) {
            break;
         }
      } while ((hiadM.includes(bdxadsdk8)) && nativeexz);
      infoQ *= parseFloat(`${bdxadsdk8.length | parseInt(`${infoQ}`)}`);
      if (libsgcoreB) {
         break;
      }
   } while (((infoQ + parseFloat(`${termsU.length}`)) > 1.76 && 3 > (3 - termsU.length)) && libsgcoreB);
   if ((areaV.length % 5) <= 5 && 5 <= (short_0R.size % (Math.max(areaV.length, 10)))) {
      short_0R = new Map([[`${infoQ}`, gemfile2.length - parseInt(`${infoQ}`)]]);
   }
      

      short_0R = new Map([[`${teamI.size}`, valueso.length - 2]]);
   while (termsU.startsWith(`${cancel6.length}`)) {
      termsU += `${parseInt(`${reada}`)}`;
      break;
   }
   let topicC = valueso == String.fromCharCode(113,50,111,104,101,0);
   do {
       let s_countk = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,108,121,95,119,95,52,55,0);
       let ticky = String.fromCharCode(116,95,50,51,95,55,95,52,53,0);
       let singaporek = 3.0;
         ticky = `${(s_countk == String.fromCharCode(81,0) ? s_countk.length : parseInt(`${singaporek}`))}`;
      while (!s_countk.includes(`${ticky.length}`)) {
         ticky += "1";
         break;
      }
      let headerP = singaporek >= 8695715.0;
      do {
         singaporek -= s_countk.length / (Math.max(ticky.length, 6));
         if (headerP) {
            break;
         }
      } while (headerP && (!ticky.endsWith(`${singaporek}`)));
      for (let o = 0; o < 2; o++) {
         ticky = `${(String.fromCharCode(50,0) == s_countk ? parseInt(`${singaporek}`) : s_countk.length)}`;
      }
      if ((s_countk.length / 5) > 5) {
         singaporek -= ticky.length;
      }
      while (2 < (ticky.length - 2)) {
         singaporek -= s_countk.length - 2;
         break;
      }
         singaporek -= (String.fromCharCode(110,0) == s_countk ? ticky.length : s_countk.length);
         ticky += `${s_countk.length}`;
       let condensed6: Array<any> = [485, 222, 372];
       let lnewinterstitiale: Array<any> = [996, 550];
      valueso += `${3 - short_0R.size}`;
      if (topicC) {
         break;
      }
   } while ((gemfile2.length > 2) && topicC);
   while ((valueso.length - parseInt(`${infoQ}`)) < 5) {
      valueso = `${classes7.length >> (Math.min(2, areaV.length))}`;
      break;
   }
      gemfile2 = `${short_0R.size}`;
   if (short_0R.get(`${reada}`) != null) {
       let topono = 3.0;
       let logoutX: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,108,111,103,95,50,95,55,48,0),203], [String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,115,95,55,54,0),418], [String.fromCharCode(119,95,57,56,95,101,112,105,99,0),568]]);
      while (5 > logoutX.size) {
          let sortQ = String.fromCharCode(114,101,99,101,105,118,101,95,102,95,52,51,0);
          let showS: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,104,95,51,50,0),39], [String.fromCharCode(110,95,56,48,95,109,105,112,115,0),381]]);
          let soundT: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,105,111,110,95,103,95,51,49,0),308], [String.fromCharCode(98,105,116,109,97,115,107,95,118,95,49,50,0),141], [String.fromCharCode(114,95,52,55,95,100,101,99,111,100,101,109,118,0),858]]);
         topono -= parseInt(`${topono}`) >> (Math.min(Math.abs(3), 3));
         sortQ = `${sortQ.length}`;
         showS.set(`${showS.size}`, soundT.size);
         soundT.set(sortQ, sortQ.length);
         break;
      }
      for (let z = 0; z < 2; z++) {
         logoutX = new Map([[`${logoutX.size}`, parseInt(`${topono}`) * logoutX.size]]);
      }
      if ((logoutX.size / (Math.max(6, parseInt(`${topono}`)))) == 1 && (5.67 / (Math.max(3, topono))) == 4.49) {
          let topico = 2.0;
          let collectionU = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,98,95,51,55,0);
          let singaporeN: Array<any> = [556, 657];
          let gpay5 = 0;
          let texta = 5;
         topono *= logoutX.size;
         topico *= parseFloat(`${1 << (Math.min(Math.abs(gpay5), 3))}`);
         collectionU += `${2 ^ collectionU.length}`;
         singaporeN.push(3 | singaporeN.length);
         gpay5 %= Math.max(4, gpay5 & 1);
         texta >>= Math.min(Math.abs(3 / (Math.max(4, parseInt(`${topico}`)))), 5);
      }
       let applee = 3;
       let dark9 = 4;
       let stringsP: Array<any> = [472, 151, 686];
       let edit7: Array<any> = [897, 80, 823];
         edit7.push(applee);
      short_0R.set(valueso, (String.fromCharCode(121,0) == valueso ? teamI.size : valueso.length));
   }
      setIsLocked(false);
    } else {

      teamI = new Map([[classes7, 3 * classes7.length]]);
   while (1 > (guidec.length / (Math.max(valueso.length, 4))) && 3 > (guidec.length / (Math.max(1, 9)))) {
      guidec.push(classes7.length - gemfile2.length);
      break;
   }
      guidec = [(String.fromCharCode(48,0) == gemfile2 ? gemfile2.length : short_0R.size)];
      gemfile2 = `${short_0R.size ^ 1}`;
   let signinupk = teamI.size >= 7283991;
   do {
       let libzeusB = false;
       let hovery = 5.0;
       let bootsplashM = 0.0;
         hovery += 1 - parseInt(`${bootsplashM}`);
      for (let g = 0; g < 1; g++) {
         libzeusB = 75.65 >= hovery && bootsplashM >= 75.65;
      }
         bootsplashM += ((libzeusB ? 5 : 2) * parseInt(`${bootsplashM}`));
      if (bootsplashM <= 2.43) {
         bootsplashM += ((libzeusB ? 2 : 5) * parseInt(`${bootsplashM}`));
      }
      let pointt = libzeusB ? !libzeusB : libzeusB;
      do {
          let foundE: Map<any, any> = new Map([[String.fromCharCode(100,117,109,112,101,114,95,115,95,50,54,0),false ], [String.fromCharCode(100,95,51,48,95,114,97,116,101,99,116,114,108,0),true ], [String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,53,95,53,55,0),false ]]);
          let rewardvideoW = String.fromCharCode(115,95,51,51,95,105,110,115,116,97,108,108,0);
          let sentryj = String.fromCharCode(102,105,108,116,101,114,117,118,95,115,95,57,48,0);
         libzeusB = 87 > rewardvideoW.length;
         foundE.set(`${sentryj}`, sentryj.length);
         rewardvideoW = `${sentryj.length | 3}`;
         if (pointt) {
            break;
         }
      } while ((2.19 > (hovery * 4.65) && !libzeusB) && pointt);
      if (libzeusB) {
          let penaltyT = String.fromCharCode(105,95,57,53,95,119,97,108,107,116,104,114,111,117,103,104,0);
          let anythinke = String.fromCharCode(117,95,57,55,95,101,98,109,108,110,117,109,0);
          let downloadingV: Array<any> = [222, 229];
         hovery += penaltyT.length;
         penaltyT = `${anythinke.length}`;
         anythinke = `${downloadingV.length >> (Math.min(anythinke.length, 1))}`;
         downloadingV.push(downloadingV.length);
      }
         libzeusB = hovery > 36.29;
         hovery *= ((libzeusB ? 5 : 1) << (Math.min(Math.abs(parseInt(`${bootsplashM}`)), 3)));
      while (3.88 == bootsplashM && 3.0 == (bootsplashM + 3.88)) {
         libzeusB = libzeusB && hovery < 79.5;
         break;
      }
      teamI.set(classes7, (String.fromCharCode(112,0) == classes7 ? termsU.length : classes7.length));
      if (signinupk) {
         break;
      }
   } while (signinupk && ((teamI.size % (Math.max(valueso.length, 6))) >= 4 || (4 % (Math.max(8, valueso.length))) >= 1));
       let moonP = String.fromCharCode(115,108,97,115,104,105,110,103,95,99,95,56,50,0);
         moonP = `${(moonP == String.fromCharCode(110,0) ? moonP.length : moonP.length)}`;
         moonP = `${moonP.length}`;
      while (moonP.length >= 1) {
         moonP += `${moonP.length ^ moonP.length}`;
         break;
      }
      guidec.push((termsU == String.fromCharCode(85,0) ? termsU.length : parseInt(`${reada}`)));
      

   if (termsU == alertW) {
      alertW += "3";
   }
       let humidityS = String.fromCharCode(115,117,98,101,120,112,114,95,122,95,52,50,0);
       let bottomq = 5;
       let selectedE = false;
      for (let c = 0; c < 3; c++) {
         selectedE = humidityS == String.fromCharCode(89,0);
      }
      if ((humidityS.length / 3) >= 2) {
         bottomq <<= Math.min(4, Math.abs(humidityS.length ^ bottomq));
      }
      if (humidityS.endsWith(`${selectedE}`)) {
          let indicatorP = String.fromCharCode(116,114,97,110,115,112,111,110,101,100,95,49,95,50,56,0);
          let armvaU = String.fromCharCode(98,101,103,105,110,115,95,53,95,57,49,0);
          let sportC = String.fromCharCode(105,95,55,54,95,115,99,97,110,115,0);
          let libhermesA = String.fromCharCode(114,101,112,108,105,101,115,95,100,95,53,54,0);
          let playercommonu_ = 2.0;
         selectedE = (bottomq << (Math.min(sportC.length, 1))) < 52;
         indicatorP += `${(String.fromCharCode(116,0) == libhermesA ? libhermesA.length : indicatorP.length)}`;
         armvaU = `${3 ^ indicatorP.length}`;
         sportC = `${indicatorP.length * armvaU.length}`;
         playercommonu_ += (parseFloat(`${String.fromCharCode(83,0) == libhermesA ? libhermesA.length : indicatorP.length}`));
      }
          let benefitE = String.fromCharCode(101,95,56,52,95,108,115,112,102,108,112,99,0);
          let activeR = String.fromCharCode(117,95,54,49,95,115,99,97,110,116,97,98,108,101,115,0);
          let codegen_ = 3;
         selectedE = !selectedE && activeR.length >= 19;
         benefitE += `${codegen_}`;
         activeR += "3";
         codegen_ -= (benefitE == String.fromCharCode(90,0) ? benefitE.length : codegen_);
         humidityS = `${humidityS.length}`;
          let viewsJ = 2.0;
         humidityS += "1";
         viewsJ += parseFloat(`${parseInt(`${viewsJ}`)}`);
      let libsgcoreG = bottomq <= 5961590;
      do {
         bottomq *= (humidityS == String.fromCharCode(87,0) ? bottomq : humidityS.length);
         if (libsgcoreG) {
            break;
         }
      } while (libsgcoreG && (selectedE));
         bottomq += bottomq;
          let zhengpianX = 2;
         humidityS += `${zhengpianX}`;
      classes7 = `${(valueso == String.fromCharCode(109,0) ? guidec.length : valueso.length)}`;
       let xadsdkb = String.fromCharCode(111,95,50,51,95,112,114,101,112,97,114,101,0);
       let homes = String.fromCharCode(97,105,114,105,110,103,95,111,95,57,49,0);
      let helper1 = xadsdkb == String.fromCharCode(106,106,97,0);
      do {
         xadsdkb += `${homes.length | xadsdkb.length}`;
         if (helper1) {
            break;
         }
      } while (helper1 && (homes == String.fromCharCode(110,0)));
      if (homes.length == xadsdkb.length) {
         xadsdkb += `${xadsdkb.length}`;
      }
      let mbbannerO = 8368561 <= xadsdkb.length;
      do {
          let loging: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,95,97,95,50,53,0),49], [String.fromCharCode(121,118,116,111,121,117,121,95,102,95,49,0),426]]);
          let backj = String.fromCharCode(122,98,105,110,95,121,95,56,52,0);
          let interstitial_ = 1;
          let libyoga1 = 4.0;
          let zhuboQ = String.fromCharCode(107,101,121,108,101,110,95,104,95,55,52,0);
         xadsdkb = `${3 * parseInt(`${libyoga1}`)}`;
         loging = new Map([[`${interstitial_}`, 1 ^ backj.length]]);
         backj += `${zhuboQ.length}`;
         interstitial_ |= interstitial_ | zhuboQ.length;
         libyoga1 -= parseFloat(`${interstitial_ % (Math.max(2, backj.length))}`);
         if (mbbannerO) {
            break;
         }
      } while ((xadsdkb.length >= homes.length) && mbbannerO);
      for (let g = 0; g < 1; g++) {
          let placeholderM = 3.0;
          let inactive0 = 1.0;
         homes = `${xadsdkb.length}`;
         placeholderM += parseFloat(`${parseInt(`${inactive0}`)}`);
      }
      for (let z = 0; z < 2; z++) {
         xadsdkb = `${xadsdkb.length << (Math.min(homes.length, 2))}`;
      }
          let hooks7 = true;
          let shirto: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,95,107,95,55,51,0),true ], [String.fromCharCode(109,95,53,50,95,116,104,114,101,115,104,111,108,100,0),true ], [String.fromCharCode(98,95,51,55,95,118,105,115,98,108,101,0),true ]]);
          let hiadp = 1;
         xadsdkb = `${xadsdkb.length}`;
         hooks7 = 41 < hiadp || hooks7;
         shirto.set(`${hooks7}`, (1 >> (Math.min(5, Math.abs((hooks7 ? 2 : 3))))));
         hiadp *= hiadp;
      guidec.push(3);
      termsU += `${termsU.length}`;
   while (cancel6.length <= gemfile2.length) {
      gemfile2 = `${parseInt(`${infoQ}`)}`;
      break;
   }
      termsU += "3";
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
            source={require('@static/images/libreactnativejniProfile.png')}
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
            source={require('@static/images/valuesLangConstants.png')}
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
                              source={require('@static/images/cancelSigmobLibzeus.gif')}
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
