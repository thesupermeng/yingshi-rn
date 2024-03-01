import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity, Platform } from 'react-native';
import MiddleControls from './yys_ticked';
import BottomControls from './yys_middle_login';
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
import { screenModel } from '@type/yys_service_setting';
import { useAppSelector } from '@hooks/yys_frame';
import AdultModeCountdownIndicator from '../adultVideo/yys_champion';
import { DOWNLOAD_FEATURE_ENABLED, UMENG_CHANNEL } from '@utility/yys_ajax_switch';
import DownloadBtn from '@static/images/navigationDownloading.svg';
import VodDownloadSelection from '../vod/yys_libjsinspector_invite';

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
  isFetchingRecommendedMovies?: boolean,
  isVip: boolean,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
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
       let connection2: Array<any> = [590, 638, 253];
    let bnewinterstitialQ = String.fromCharCode(97,97,102,99,95,50,95,53,55,0);
    let materialf = true;
    let yellowl: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,105,110,103,95,106,95,53,52,0),false ], [String.fromCharCode(103,114,111,117,112,110,97,109,101,115,95,104,95,55,48,0),false ], [String.fromCharCode(115,98,111,120,95,105,95,49,49,0),false ]]);
    let textlayoutmanagerr = String.fromCharCode(100,101,102,101,114,95,104,95,51,0);
    let libimagepipelineS: Map<any, any> = new Map([[String.fromCharCode(111,95,49,95,115,109,97,108,108,0),82], [String.fromCharCode(120,95,53,52,95,101,121,101,100,114,111,112,112,101,114,0),689], [String.fromCharCode(99,95,55,55,95,97,114,98,105,116,114,97,114,121,0),553]]);
    let libavfilteri = 4;
    let upgrader = String.fromCharCode(99,108,117,115,116,95,56,95,51,53,0);
    let usera = 4;
    let entryk = 5.0;
      libimagepipelineS = new Map([[`${materialf}`, 2 + parseInt(`${entryk}`)]]);
   let unewst = connection2.length <= 8249764;
   do {
       let libavcodecm = 5.0;
       let mbsplasht: Map<any, any> = new Map([[String.fromCharCode(110,95,50,56,95,108,119,115,115,112,110,0),String.fromCharCode(97,95,57,48,95,115,119,101,101,112,0)], [String.fromCharCode(118,97,114,108,101,110,103,116,104,95,102,95,49,54,0),String.fromCharCode(104,95,53,52,95,115,101,116,102,100,0)], [String.fromCharCode(98,95,57,55,95,115,105,103,105,110,116,0),String.fromCharCode(115,101,112,97,114,97,116,101,115,95,53,95,52,51,0)]]);
      while (libavcodecm >= parseFloat(`${mbsplasht.size}`)) {
         libavcodecm -= parseFloat(`${2}`);
         break;
      }
      for (let q = 0; q < 3; q++) {
         mbsplasht.set(`${libavcodecm}`, parseInt(`${libavcodecm}`));
      }
      if (3.48 == libavcodecm) {
          let leagueF = String.fromCharCode(108,95,50,54,95,97,99,114,111,115,115,102,97,100,101,0);
          let blackd: Array<any> = [String.fromCharCode(103,95,49,50,95,109,111,100,109,0), String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,50,95,52,49,0)];
         libavcodecm += parseFloat(`${blackd.length + 3}`);
         leagueF = "2";
         blackd.push(1);
      }
      for (let s = 0; s < 2; s++) {
          let play7 = String.fromCharCode(115,97,110,105,116,105,122,101,114,95,51,95,52,52,0);
          let grayj: Map<any, any> = new Map([[String.fromCharCode(100,114,97,105,110,95,117,95,56,53,0),794], [String.fromCharCode(102,95,57,52,0),819]]);
          let ewardedj = 0;
          let countryS = String.fromCharCode(105,116,117,110,101,115,95,52,95,52,49,0);
         libavcodecm += parseFloat(`${countryS.length}`);
         play7 = `${play7.length}`;
         grayj.set(`${ewardedj}`, play7.length & 1);
         ewardedj &= play7.length;
         countryS += `${ewardedj}`;
      }
      if ((libavcodecm + 4.59) <= 1.82 || 1 <= (mbsplasht.size + parseInt(`${libavcodecm}`))) {
         mbsplasht = new Map([[`${mbsplasht.size}`, 3 * mbsplasht.size]]);
      }
      if ((parseFloat(`${mbsplasht.size}`) - libavcodecm) >= 3.97 || 5.53 >= (libavcodecm - 3.97)) {
         mbsplasht = new Map([[`${mbsplasht.size}`, parseInt(`${libavcodecm}`) & 3]]);
      }
      connection2 = [(String.fromCharCode(113,0) == upgrader ? yellowl.size : upgrader.length)];
      if (unewst) {
         break;
      }
   } while (unewst && ((4 | connection2.length) <= 4));
   if ((entryk + 5.33) > 3.6 && (3 - usera) > 1) {
      entryk *= (parseFloat(`${(materialf ? 1 : 3) << (Math.min(Math.abs(1), 3))}`));
   }
       let libcrashsdk1 = String.fromCharCode(114,101,116,114,121,97,98,108,101,95,50,95,57,52,0);
       let gradlew = 2.0;
       let hiadS: Map<any, any> = new Map([[String.fromCharCode(117,112,99,97,115,101,95,49,95,50,56,0),String.fromCharCode(118,95,50,54,95,99,111,110,116,101,120,116,115,0)], [String.fromCharCode(116,95,50,53,95,99,111,110,102,108,105,99,116,101,100,0),String.fromCharCode(115,101,116,115,95,51,95,55,51,0)], [String.fromCharCode(100,95,52,48,95,114,101,100,115,112,97,114,107,0),String.fromCharCode(110,111,114,109,95,99,95,51,52,0)]]);
       let theme0 = String.fromCharCode(97,112,112,101,110,100,99,104,97,114,95,97,95,55,57,0);
       let settings1 = String.fromCharCode(117,95,57,95,100,101,99,101,108,101,114,97,116,105,111,110,0);
         theme0 += `${theme0.length / 1}`;
      while ((hiadS.size % (Math.max(1, 5))) > 5 || (theme0.length % 1) > 5) {
          let attributedstringF: Array<any> = [String.fromCharCode(112,114,101,99,105,115,101,95,116,95,57,0), String.fromCharCode(111,95,54,48,95,112,114,101,97,109,98,117,108,97,0)];
          let humidityD = String.fromCharCode(110,95,54,49,95,102,111,114,0);
          let terms3: Map<any, any> = new Map([[String.fromCharCode(105,95,53,51,95,114,116,112,114,101,99,101,105,118,101,114,0),false ], [String.fromCharCode(116,114,97,105,116,95,103,95,51,56,0),true ]]);
         theme0 = `${3 & attributedstringF.length}`;
         attributedstringF.push((humidityD == String.fromCharCode(89,0) ? terms3.size : humidityD.length));
         terms3.set(humidityD, 3 + humidityD.length);
         break;
      }
      while (3.26 < gradlew) {
          let handlerJ = String.fromCharCode(112,95,52,51,95,115,101,116,97,99,116,105,118,101,107,101,121,0);
          let smallU = String.fromCharCode(99,104,101,99,107,115,95,49,95,56,56,0);
          let downloaded0 = 2;
          let kick6 = 4.0;
         libcrashsdk1 = `${handlerJ.length >> (Math.min(Math.abs(3), 5))}`;
         handlerJ += `${smallU.length}`;
         smallU = `${smallU.length >> (Math.min(Math.abs(3), 2))}`;
         downloaded0 += 1;
         kick6 += parseFloat(`${downloaded0}`);
         break;
      }
      let profilep = theme0 == String.fromCharCode(101,48,116,97,100,110,105,0);
      do {
          let bannerN = 0.0;
          let save8: Array<any> = [String.fromCharCode(112,95,51,51,95,116,114,97,110,115,112,97,114,101,110,116,0), String.fromCharCode(118,95,56,57,95,115,107,97,100,0)];
          let storea = 0.0;
         theme0 = `${parseInt(`${gradlew}`) - 2}`;
         bannerN += parseFloat(`${save8.length % (Math.max(10, parseInt(`${bannerN}`)))}`);
         save8.push(parseInt(`${storea}`) / 1);
         storea += parseInt(`${storea}`);
         if (profilep) {
            break;
         }
      } while ((!theme0.endsWith(`${gradlew}`)) && profilep);
      if (4 >= theme0.length) {
         theme0 = `${theme0.length}`;
      }
         hiadS.set(settings1, settings1.length);
         gradlew *= (parseFloat(`${String.fromCharCode(111,0) == settings1 ? hiadS.size : settings1.length}`));
         gradlew /= Math.max(5, (parseFloat(`${String.fromCharCode(69,0) == settings1 ? hiadS.size : settings1.length}`)));
      upgrader += `${connection2.length}`;
   let injuryW = usera <= 6705561;
   do {
       let nativeexO = String.fromCharCode(98,95,55,54,95,101,103,119,105,116,0);
       let light2 = String.fromCharCode(109,107,118,112,97,114,115,101,114,95,111,95,51,51,0);
       let fastforward0: Array<any> = [527, 148, 881];
       let logoutV = 3;
       let sliderQ = 5.0;
         fastforward0.push(fastforward0.length + nativeexO.length);
      for (let n = 0; n < 1; n++) {
         logoutV ^= 2 / (Math.max(8, logoutV));
      }
         sliderQ += parseFloat(`${2}`);
         nativeexO = `${light2.length >> (Math.min(Math.abs(1), 1))}`;
      if ((5 * logoutV) > 2) {
         logoutV <<= Math.min(Math.abs(fastforward0.length << (Math.min(3, Math.abs(logoutV)))), 4);
      }
      for (let e = 0; e < 3; e++) {
         nativeexO += `${1 - light2.length}`;
      }
         logoutV %= Math.max((String.fromCharCode(56,0) == nativeexO ? light2.length : nativeexO.length), 3);
         sliderQ *= parseFloat(`${parseInt(`${sliderQ}`) | light2.length}`);
         light2 += `${logoutV | fastforward0.length}`;
         light2 += `${light2.length}`;
         logoutV <<= Math.min(2, nativeexO.length);
          let tumbnail2 = 4;
          let singleP: Array<any> = [805, 13, 446];
         light2 += `${parseInt(`${sliderQ}`) | nativeexO.length}`;
         tumbnail2 -= 2;
         singleP = [singleP.length];
      let dplusK = 5495670 <= fastforward0.length;
      do {
          let forwardG: Array<any> = [256, 942, 873];
          let areas = String.fromCharCode(100,117,114,97,116,105,111,110,115,95,107,95,49,57,0);
         fastforward0 = [(String.fromCharCode(57,0) == light2 ? light2.length : fastforward0.length)];
         forwardG.push((String.fromCharCode(78,0) == areas ? forwardG.length : areas.length));
         if (dplusK) {
            break;
         }
      } while ((3 > (logoutV & fastforward0.length)) && dplusK);
         light2 = `${nativeexO.length - 1}`;
      let profile4 = light2 == String.fromCharCode(114,117,119,55,56,55,0);
      do {
         light2 += `${fastforward0.length}`;
         if (profile4) {
            break;
         }
      } while (profile4 && (light2 == String.fromCharCode(107,0) || 1 <= nativeexO.length));
      usera *= 3;
      if (injuryW) {
         break;
      }
   } while ((usera == 2) && injuryW);
   let sans9 = yellowl.size <= 9100084;
   do {
       let infod = false;
       let dragj = 0;
       let score8 = 0.0;
       let serviceh = String.fromCharCode(122,95,54,54,95,114,101,97,99,116,0);
       let mappingo = String.fromCharCode(114,101,116,114,105,101,100,95,103,95,54,53,0);
      while ((2 * dragj) > 5 || (dragj * mappingo.length) > 2) {
         mappingo = `${((infod ? 4 : 5) >> (Math.min(Math.abs(dragj), 4)))}`;
         break;
      }
      let rncorec = String.fromCharCode(103,52,95,104,48,108,111,56,0) == mappingo;
      do {
         mappingo += `${parseInt(`${score8}`) | 3}`;
         if (rncorec) {
            break;
         }
      } while (((3 + dragj) >= 5) && rncorec);
          let corner4 = 4.0;
         dragj >>= Math.min(Math.abs(parseInt(`${corner4}`) / (Math.max(serviceh.length, 7))), 4);
         serviceh = `${dragj - parseInt(`${score8}`)}`;
       let privilege5 = String.fromCharCode(114,97,110,100,101,110,95,101,95,49,49,0);
       let hoverN = String.fromCharCode(102,105,110,110,101,121,95,48,95,51,48,0);
      for (let g = 0; g < 1; g++) {
          let clockT: Array<any> = [437, 33, 873];
         dragj >>= Math.min(Math.abs(dragj << (Math.min(2, Math.abs(1)))), 3);
         clockT = [2];
      }
         mappingo += `${privilege5.length}`;
         serviceh = `${dragj | 3}`;
      let mbsplasho = dragj <= 8149942;
      do {
         dragj <<= Math.min(1, Math.abs(privilege5.length >> (Math.min(Math.abs(1), 5))));
         if (mbsplasho) {
            break;
         }
      } while ((serviceh.startsWith(`${dragj}`)) && mbsplasho);
         hoverN += `${mappingo.length}`;
         hoverN = `${serviceh.length & parseInt(`${score8}`)}`;
         mappingo = `${serviceh.length}`;
          let long_8p = 3.0;
         mappingo += `${((infod ? 1 : 4) / 1)}`;
         long_8p /= Math.max(parseInt(`${long_8p}`), 2);
         privilege5 = `${privilege5.length / 3}`;
         infod = (hoverN.length | serviceh.length) >= 78;
      yellowl.set(`${entryk}`, parseInt(`${entryk}`));
      if (sans9) {
         break;
      }
   } while (sans9 && (yellowl.size > 5));
   let faviconm = 8859567 >= usera;
   do {
       let overL: Map<any, any> = new Map([[String.fromCharCode(117,95,49,48,48,95,114,111,103,114,97,109,0),697], [String.fromCharCode(112,95,51,55,95,115,104,97,108,108,111,119,0),682]]);
       let chats = 3.0;
          let arrowp = 2.0;
          let libreanimatedi = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,100,95,57,95,56,51,0);
          let chart2 = String.fromCharCode(105,112,99,95,53,95,57,57,0);
         overL = new Map([[chart2, chart2.length]]);
         arrowp += parseInt(`${arrowp}`) & libreanimatedi.length;
         libreanimatedi += "1";
      for (let r = 0; r < 3; r++) {
          let collectionO: Array<any> = [String.fromCharCode(108,95,52,95,99,117,114,114,0), String.fromCharCode(105,95,54,56,95,97,117,116,111,115,99,114,111,108,108,0)];
         overL = new Map([[`${collectionO.length}`, collectionO.length + parseInt(`${chats}`)]]);
      }
         overL = new Map([[`${overL.size}`, 3]]);
      while (!Array.from(overL.keys()).includes(`${chats}`)) {
         chats *= parseInt(`${chats}`);
         break;
      }
         overL.set(`${chats}`, parseInt(`${chats}`) - 1);
       let nativemoduleh = String.fromCharCode(114,117,108,101,98,111,111,107,95,120,95,53,52,0);
       let frame_toM = String.fromCharCode(112,95,51,53,95,116,111,114,103,98,0);
      usera /= Math.max(3, 3);
      if (faviconm) {
         break;
      }
   } while (faviconm && (usera > 1));
   if (entryk >= 1.43) {
       let moviess = 0.0;
         moviess += parseFloat(`${3 - parseInt(`${moviess}`)}`);
       let emoji9 = String.fromCharCode(116,95,48,95,109,101,114,103,101,97,98,108,101,0);
       let side8 = String.fromCharCode(115,95,51,49,95,102,109,97,99,0);
      while (2.94 == (3.98 + moviess) || (moviess + 3.98) == 2.11) {
         side8 += `${emoji9.length ^ 3}`;
         break;
      }
      materialf = moviess == 44.24 || 24 == libimagepipelineS.size;
   }
      materialf = 68.90 == entryk || !materialf;
       let formD: Map<any, any> = new Map([[String.fromCharCode(108,115,112,108,112,99,95,121,95,54,54,0),620], [String.fromCharCode(110,95,50,54,95,102,105,108,101,110,97,109,101,115,0),959]]);
       let layouta: Array<any> = [String.fromCharCode(109,99,108,109,115,95,117,95,51,49,0), String.fromCharCode(100,95,53,56,95,112,114,101,118,101,110,116,0)];
         layouta = [formD.size];
      while ((formD.size + 3) >= 5 || (3 + layouta.length) >= 3) {
         layouta.push(formD.size);
         break;
      }
      let uimanagerR = 6048182 <= formD.size;
      do {
         formD.set(`${layouta.length}`, 1);
         if (uimanagerR) {
            break;
         }
      } while (uimanagerR && (5 <= (layouta.length / (Math.max(formD.size, 4))) || 3 <= (layouta.length / 5)));
      for (let y = 0; y < 2; y++) {
          let aboutG = String.fromCharCode(105,110,116,101,114,109,105,100,105,97,116,101,95,120,95,57,48,0);
          let popupo: Map<any, any> = new Map([[String.fromCharCode(116,101,120,105,100,101,112,95,48,95,52,49,0),904], [String.fromCharCode(97,99,99,101,112,116,115,95,101,95,51,49,0),517], [String.fromCharCode(116,111,107,101,110,105,122,101,95,108,95,57,55,0),900]]);
         formD = new Map([[`${formD.size}`, aboutG.length]]);
         aboutG = `${popupo.size >> (Math.min(Math.abs(2), 3))}`;
         popupo = new Map([[`${popupo.size}`, popupo.size]]);
      }
      for (let s = 0; s < 2; s++) {
         formD = new Map([[`${formD.size}`, layouta.length | formD.size]]);
      }
       let matchS = 3.0;
       let indicatorO = 1.0;
      upgrader = `${connection2.length - 1}`;
   for (let r = 0; r < 1; r++) {
      yellowl.set(textlayoutmanagerr, libavfilteri * 2);
   }
      textlayoutmanagerr += `${((materialf ? 3 : 3) - parseInt(`${entryk}`))}`;
       let nalyticsn = 2.0;
       let libflipperI = false;
       let matchesB: Array<any> = [851, 115];
       let themeP = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,121,95,50,55,0);
       let arrowG = String.fromCharCode(109,111,98,105,117,115,95,117,95,56,55,0);
      for (let d = 0; d < 2; d++) {
          let dropdownI = 0.0;
          let roomY = false;
         themeP += `${themeP.length | 1}`;
         dropdownI *= 2 & parseInt(`${dropdownI}`);
         roomY = !roomY;
      }
         arrowG = `${(themeP.length & (libflipperI ? 5 : 1))}`;
          let graphicsq: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,98,108,101,114,95,110,95,54,57,0),String.fromCharCode(99,104,101,99,107,115,117,109,115,95,103,95,52,53,0)], [String.fromCharCode(103,95,50,50,95,99,111,109,112,97,116,105,98,108,101,0),String.fromCharCode(115,116,114,110,115,116,114,95,113,95,50,56,0)], [String.fromCharCode(120,95,53,51,95,119,111,114,100,108,101,110,0),String.fromCharCode(105,95,55,48,95,97,118,101,114,97,103,101,0)]]);
          let zhuboW: Map<any, any> = new Map([[String.fromCharCode(106,95,48,95,111,97,101,112,0),false ], [String.fromCharCode(116,95,51,49,95,114,101,116,105,110,97,0),true ], [String.fromCharCode(110,95,55,48,95,110,97,108,117,115,0),true ]]);
          let classesC: Map<any, any> = new Map([[String.fromCharCode(105,108,115,116,95,110,95,55,48,0),625], [String.fromCharCode(106,95,49,50,95,107,101,114,110,101,114,0),456]]);
         arrowG += `${((libflipperI ? 3 : 1) << (Math.min(matchesB.length, 4)))}`;
         graphicsq = new Map([[`${zhuboW.size}`, 3]]);
         zhuboW = new Map([[`${classesC.size}`, zhuboW.size]]);
         classesC.set(`${zhuboW.size}`, zhuboW.size);
         arrowG = "2";
         arrowG = `${themeP.length}`;
      if (themeP.startsWith(`${arrowG.length}`)) {
          let configureR = 4.0;
          let neonW = 5;
          let disconnected4 = String.fromCharCode(115,104,117,116,100,111,119,110,95,116,95,53,55,0);
         arrowG += "3";
         configureR -= neonW;
         neonW /= Math.max(4, neonW * parseInt(`${configureR}`));
         disconnected4 = `${parseInt(`${configureR}`) >> (Math.min(Math.abs(3), 4))}`;
      }
      for (let n = 0; n < 3; n++) {
         arrowG += "2";
      }
         matchesB = [matchesB.length & 2];
      connection2 = [(usera + (materialf ? 2 : 5))];
      nalyticsn += parseFloat(`${1}`);
   for (let w = 0; w < 2; w++) {
      yellowl = new Map([[`${libimagepipelineS.size}`, (textlayoutmanagerr == String.fromCharCode(107,0) ? textlayoutmanagerr.length : libimagepipelineS.size)]]);
   }
      bnewinterstitialQ = `${usera << (Math.min(Math.abs(libimagepipelineS.size), 5))}`;
   while (3 >= upgrader.length) {
      materialf = 49 <= connection2.length && 49 <= libimagepipelineS.size;
      break;
   }
       let combineK = 0.0;
      for (let v = 0; v < 3; v++) {
          let anythinkA = 0.0;
          let acceptedH = true;
          let profileD: Array<any> = [String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,98,95,57,56,0), String.fromCharCode(118,95,50,56,95,99,111,118,101,114,115,0), String.fromCharCode(109,95,54,95,104,111,117,114,0)];
          let philippinesM = true;
         combineK /= Math.max(parseFloat(`${3 % (Math.max(5, profileD.length))}`), 4);
         anythinkA += ((philippinesM ? 3 : 4) * parseInt(`${anythinkA}`));
         acceptedH = (acceptedH ? !philippinesM : !acceptedH);
         profileD = [parseInt(`${anythinkA}`) + 1];
      }
         combineK /= Math.max(1, parseFloat(`${1}`));
         combineK -= parseFloat(`${parseInt(`${combineK}`)}`);
      usera /= Math.max(yellowl.size >> (Math.min(3, Math.abs(libavfilteri))), 5);
       let j_title2 = String.fromCharCode(105,110,116,109,97,116,104,95,113,95,52,48,0);
       let configb = 2;
       let floatere = String.fromCharCode(106,112,101,103,116,97,98,108,101,115,95,101,95,50,49,0);
      while (5 <= (j_title2.length % 1)) {
         configb %= Math.max(1, j_title2.length);
         break;
      }
       let rootk = 5.0;
       let libcxxcomponentsJ = 1.0;
      for (let p = 0; p < 3; p++) {
         libcxxcomponentsJ += configb;
      }
      let anythinkG = floatere == String.fromCharCode(98,101,95,112,57,116,116,117,52,0);
      do {
          let mbnativeE = String.fromCharCode(106,112,101,103,108,105,98,95,107,95,56,49,0);
          let sendG: Array<any> = [782, 653];
          let readm = 4.0;
          let hongkongJ = String.fromCharCode(114,101,112,108,105,101,114,115,95,97,95,52,55,0);
          let chartg = String.fromCharCode(120,95,51,56,95,114,101,99,111,109,109,101,110,100,0);
         floatere += `${3 ^ parseInt(`${libcxxcomponentsJ}`)}`;
         mbnativeE += `${parseInt(`${readm}`)}`;
         sendG = [chartg.length - 1];
         readm *= parseFloat(`${parseInt(`${readm}`)}`);
         hongkongJ = "1";
         chartg = `${1 | mbnativeE.length}`;
         if (anythinkG) {
            break;
         }
      } while (anythinkG && ((4 * floatere.length) <= 5 && (4 + parseInt(`${libcxxcomponentsJ}`)) <= 2));
      let topicu = String.fromCharCode(119,100,116,48,57,54,110,0) == j_title2;
      do {
         j_title2 += `${parseInt(`${rootk}`) % 2}`;
         if (topicu) {
            break;
         }
      } while ((!floatere.endsWith(j_title2)) && topicu);
         floatere += `${parseInt(`${rootk}`)}`;
          let playL = 2;
          let checkbox1: Array<any> = [649, 656, 241];
          let weiboj = true;
         configb %= Math.max(parseInt(`${rootk}`) / 2, 3);
         playL /= Math.max(1, (3 << (Math.min(3, Math.abs((weiboj ? 2 : 4))))));
         checkbox1.push(3);
      let humidity8 = String.fromCharCode(119,106,49,52,54,48,121,110,53,115,0) == floatere;
      do {
         floatere += `${1 >> (Math.min(3, Math.abs(parseInt(`${libcxxcomponentsJ}`))))}`;
         if (humidity8) {
            break;
         }
      } while ((2 >= (floatere.length ^ 5) && 3.38 >= (rootk - 2.83)) && humidity8);
          let usernameE: Map<any, any> = new Map([[String.fromCharCode(117,110,102,101,116,99,104,95,104,95,50,56,0),403], [String.fromCharCode(102,105,101,108,95,54,95,52,50,0),241]]);
          let moviesX: Map<any, any> = new Map([[String.fromCharCode(105,95,50,55,95,105,100,105,111,109,0),String.fromCharCode(104,95,57,55,95,119,111,114,107,0)], [String.fromCharCode(102,108,117,115,104,95,100,95,49,57,0),String.fromCharCode(98,95,52,49,95,116,107,104,100,0)]]);
         libcxxcomponentsJ *= usernameE.size;
         usernameE = new Map([[`${moviesX.size}`, moviesX.size]]);
      usera |= 2;
   if ((yellowl.size | usera) >= 1 || (yellowl.size | 1) >= 3) {
      usera ^= 2;
   }
   while (textlayoutmanagerr != String.fromCharCode(72,0)) {
      bnewinterstitialQ = `${2 + connection2.length}`;
      break;
   }
      usera -= yellowl.size;
   if (usera <= libimagepipelineS.size) {
       let indexb = false;
      for (let l = 0; l < 2; l++) {
          let umengH = 0.0;
         indexb = umengH == 61.5;
      }
      if (indexb && indexb) {
         indexb = (indexb ? indexb : indexb);
      }
       let googlec = 3.0;
       let updatesZ = 1.0;
      usera ^= libimagepipelineS.size & bnewinterstitialQ.length;
   }
   if (!bnewinterstitialQ.endsWith(`${entryk}`)) {
       let moonh = 5;
       let configureO = true;
       let graphicsK = String.fromCharCode(117,95,50,48,0);
       let watchv = String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,97,95,54,50,0);
       let favoriteH = String.fromCharCode(105,110,116,114,111,95,118,95,57,56,0);
      if (2 == watchv.length) {
         watchv += `${(String.fromCharCode(55,0) == favoriteH ? favoriteH.length : watchv.length)}`;
      }
      for (let n = 0; n < 1; n++) {
         configureO = favoriteH.length == 72;
      }
          let imagemanagerh = String.fromCharCode(108,95,54,55,95,118,108,105,110,101,0);
          let expiredd = 4.0;
          let whistle7 = false;
         watchv += `${2 / (Math.max(10, parseInt(`${expiredd}`)))}`;
         imagemanagerh = `${((whistle7 ? 5 : 5))}`;
         expiredd -= ((whistle7 ? 1 : 4));
       let memberl = String.fromCharCode(121,98,108,111,99,107,95,49,95,54,51,0);
      for (let e = 0; e < 1; e++) {
         watchv += `${favoriteH.length}`;
      }
         graphicsK += `${(2 ^ (configureO ? 4 : 1))}`;
       let ksadt: Map<any, any> = new Map([[String.fromCharCode(122,95,57,53,95,103,101,111,112,111,108,121,0),322], [String.fromCharCode(120,95,52,56,95,98,97,99,107,114,111,117,110,100,0),588], [String.fromCharCode(112,105,120,101,108,115,95,108,95,55,53,0),93]]);
       let anythink8: Map<any, any> = new Map([[String.fromCharCode(98,95,54,48,95,115,112,108,105,116,0),958], [String.fromCharCode(114,117,110,116,105,109,101,95,105,95,52,53,0),497], [String.fromCharCode(106,95,49,56,95,97,110,116,105,97,108,105,97,115,101,100,0),726]]);
         graphicsK = `${ksadt.size}`;
      while (graphicsK.length < 2 || !configureO) {
          let contextF = 5;
         configureO = contextF >= 40;
         break;
      }
      while ((4 << (Math.min(2, graphicsK.length))) > 5) {
          let ksadN: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,108,95,53,49,0),String.fromCharCode(99,95,53,55,95,97,115,116,101,114,105,115,107,0)], [String.fromCharCode(100,101,99,108,105,110,101,100,95,103,95,49,56,0),String.fromCharCode(105,95,55,95,116,111,98,105,116,0)]]);
          let utils2 = String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,95,49,95,54,50,0);
          let gesturesI = String.fromCharCode(121,117,118,109,111,110,111,95,106,95,49,51,0);
         moonh >>= Math.min(5, Math.abs(graphicsK.length * utils2.length));
         ksadN = new Map([[`${ksadN.size}`, (String.fromCharCode(121,0) == gesturesI ? gesturesI.length : ksadN.size)]]);
         utils2 += `${(String.fromCharCode(53,0) == gesturesI ? gesturesI.length : ksadN.size)}`;
         break;
      }
         memberl += `${ksadt.size}`;
         configureO = 18 < moonh;
      for (let g = 0; g < 2; g++) {
          let relatedq = String.fromCharCode(115,95,55,52,95,101,120,112,97,110,100,101,114,0);
          let expandz: Array<any> = [736, 126, 843];
          let textlayoutmanagerq = 4.0;
         memberl = `${(String.fromCharCode(108,0) == relatedq ? relatedq.length : anythink8.size)}`;
         expandz.push(2);
         textlayoutmanagerq += 1 / (Math.max(parseInt(`${textlayoutmanagerq}`), 8));
      }
      if (2 >= anythink8.size) {
          let headerw = String.fromCharCode(119,95,55,54,95,97,120,112,0);
          let mapbuffere = String.fromCharCode(104,97,118,101,95,113,95,50,57,0);
          let yellowM: Array<any> = [446, 142];
         anythink8.set(`${moonh}`, 1 ^ yellowM.length);
         headerw = `${2 + headerw.length}`;
         mapbuffere = `${(String.fromCharCode(122,0) == mapbuffere ? mapbuffere.length : headerw.length)}`;
         yellowM = [1];
      }
      while (2 < favoriteH.length) {
         graphicsK += `${graphicsK.length}`;
         break;
      }
      bnewinterstitialQ += `${2 >> (Math.min(4, Math.abs(libimagepipelineS.size)))}`;
   }
   for (let m = 0; m < 2; m++) {
      textlayoutmanagerr += `${libimagepipelineS.size}`;
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
       let mintegraln = false;
    let alertq: Array<any> = [163, 400, 519];
    let gpay4: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,114,97,114,121,95,104,95,53,55,0),34], [String.fromCharCode(107,95,50,50,95,115,111,108,97,110,97,0),935], [String.fromCharCode(119,97,116,99,104,101,114,95,119,95,51,0),853]]);
    let stara: Map<any, any> = new Map([[String.fromCharCode(102,95,53,52,95,105,115,116,114,101,97,109,0),true ], [String.fromCharCode(104,121,115,99,97,108,101,95,103,95,49,55,0),true ], [String.fromCharCode(116,95,49,50,0),true ]]);
    let match1 = String.fromCharCode(113,95,49,55,95,110,101,117,116,114,97,108,0);
    let smallI = 2.0;
    let sportsM = true;
    let navigation_ = 1.0;
    let sliderW = String.fromCharCode(97,98,103,114,95,115,95,56,48,0);
    let libffmpegkitJ = 0.0;
    let vietnamp: Array<any> = [String.fromCharCode(118,95,50,57,95,98,114,111,97,100,99,97,115,116,101,114,0), String.fromCharCode(116,95,53,55,95,112,114,101,109,105,117,109,0), String.fromCharCode(100,105,118,105,100,101,110,100,95,122,95,49,0)];
    let textinputf = String.fromCharCode(105,95,50,53,95,97,118,105,97,108,97,98,108,101,0);
   if (mintegraln && (4 & gpay4.size) > 3) {
       let pointC = 0.0;
      if ((pointC * pointC) >= 1.79 || 1.79 >= (pointC * pointC)) {
          let result8 = false;
          let animationsC: Map<any, any> = new Map([[String.fromCharCode(122,95,56,52,95,105,109,112,97,99,116,0),48], [String.fromCharCode(108,95,52,57,95,116,117,110,101,0),835], [String.fromCharCode(114,116,112,112,114,111,116,111,95,110,95,53,0),917]]);
          let telegramI = 5.0;
          let upgrade6: Map<any, any> = new Map([[String.fromCharCode(115,97,118,105,110,103,115,95,97,95,54,52,0),250], [String.fromCharCode(107,95,54,95,115,97,109,112,108,101,100,0),707], [String.fromCharCode(114,95,49,49,95,98,101,110,101,102,105,99,105,97,114,121,0),141]]);
          let neonq = 2;
         pointC /= Math.max(parseFloat(`${parseInt(`${pointC}`) * parseInt(`${telegramI}`)}`), 5);
         result8 = !result8;
         animationsC.set(`${neonq}`, animationsC.size);
         telegramI -= (parseFloat(`${(result8 ? 5 : 3) & upgrade6.size}`));
         upgrade6.set(`${result8}`, (3 | (result8 ? 4 : 2)));
         neonq <<= Math.min(Math.abs(2), 4);
      }
       let selectede = 3.0;
       let dialogV = 0.0;
      while (5.78 >= pointC) {
         pointC -= parseFloat(`${parseInt(`${selectede}`) / (Math.max(6, parseInt(`${pointC}`)))}`);
         break;
      }
      gpay4.set(`${pointC}`, parseInt(`${pointC}`));
   }
   for (let l = 0; l < 2; l++) {
       let sendv = 3.0;
      let guidec = 6799373.0 >= sendv;
      do {
         sendv *= 1;
         if (guidec) {
            break;
         }
      } while ((5.19 == (sendv * sendv)) && guidec);
      let pangle5 = sendv >= 6322653.0;
      do {
          let yellowm = String.fromCharCode(118,95,53,50,95,102,117,108,108,121,0);
          let short_qbJ = 1.0;
          let streamingD = String.fromCharCode(112,101,115,113,95,111,95,50,48,0);
          let searchU = String.fromCharCode(113,95,53,95,114,117,101,0);
          let libflipperL = 0;
         sendv -= streamingD.length;
         yellowm += `${libflipperL}`;
         short_qbJ -= parseFloat(`${parseInt(`${short_qbJ}`) >> (Math.min(searchU.length, 2))}`);
         streamingD += `${(String.fromCharCode(102,0) == yellowm ? searchU.length : yellowm.length)}`;
         libflipperL <<= Math.min(Math.abs(parseInt(`${short_qbJ}`)), 3);
         if (pangle5) {
            break;
         }
      } while (((sendv + 4) < 3.68) && pangle5);
      if ((sendv / (Math.max(2.60, 7))) < 1.93 || (sendv / (Math.max(2.60, 7))) < 3.4) {
         sendv *= parseInt(`${sendv}`) | 2;
      }
      libffmpegkitJ += 2 % (Math.max(5, parseInt(`${sendv}`)));
   }
      sliderW = `${2 & gpay4.size}`;
   if ((match1.length ^ 2) < 5 && (gpay4.size ^ match1.length) < 2) {
      gpay4 = new Map([[`${gpay4.size}`, sliderW.length * gpay4.size]]);
   }
      stara.set(`${alertq.length}`, alertq.length);
   while (!sliderW.includes(`${smallI}`)) {
      smallI /= Math.max(5, parseFloat(`${alertq.length}`));
      break;
   }
       let confirmationb = String.fromCharCode(103,102,109,117,108,95,97,95,56,56,0);
       let register_9x: Map<any, any> = new Map([[String.fromCharCode(99,95,56,56,95,115,121,109,98,111,108,105,99,97,116,101,100,0),true ], [String.fromCharCode(100,95,52,57,95,115,99,104,101,100,117,108,101,114,0),false ], [String.fromCharCode(98,95,53,51,95,99,111,110,116,111,117,114,115,0),false ]]);
       let comment0: Map<any, any> = new Map([[String.fromCharCode(109,95,55,48,95,114,117,110,116,105,109,101,0),226], [String.fromCharCode(108,105,98,120,118,105,100,95,108,95,53,56,0),766]]);
          let rootf = String.fromCharCode(97,95,54,56,95,112,101,101,114,115,0);
          let cancelG = String.fromCharCode(104,95,56,50,95,101,120,99,104,97,110,103,101,115,0);
          let sourceV: Array<any> = [440, 302];
         register_9x.set(`${cancelG}`, 2);
         rootf = `${(rootf == String.fromCharCode(108,0) ? rootf.length : sourceV.length)}`;
         cancelG = `${rootf.length}`;
         sourceV = [(String.fromCharCode(76,0) == rootf ? rootf.length : sourceV.length)];
      for (let q = 0; q < 3; q++) {
          let greenX = 0.0;
          let animationsV = 2.0;
         comment0 = new Map([[`${greenX}`, confirmationb.length | 1]]);
         greenX *= parseFloat(`${parseInt(`${animationsV}`) | parseInt(`${animationsV}`)}`);
      }
       let with_fiV: Array<any> = [797, 216];
       let selectr: Array<any> = [262, 938, 697];
       let commonH: Array<any> = [830, 850, 321];
       let shareQ: Array<any> = [686, 299];
      if ((1 % (Math.max(2, register_9x.size))) == 5) {
         register_9x = new Map([[`${register_9x.size}`, register_9x.size / (Math.max(1, 6))]]);
      }
      alertq = [3];
       let libimagepipelineW = false;
      if (libimagepipelineW && !libimagepipelineW) {
          let libruntimeexecutorR = 1;
         libimagepipelineW = 5 >= libruntimeexecutorR;
      }
      while (libimagepipelineW) {
         libimagepipelineW = !libimagepipelineW;
         break;
      }
      if (libimagepipelineW && libimagepipelineW) {
          let listX = String.fromCharCode(118,95,56,50,95,105,100,119,116,0);
          let package_w1 = String.fromCharCode(115,116,114,115,116,97,114,116,95,116,95,56,48,0);
         libimagepipelineW = listX.startsWith(`${libimagepipelineW}`);
         listX = `${package_w1.length | package_w1.length}`;
      }
      sportsM = 43.77 <= libffmpegkitJ;
   while (!sportsM) {
       let render5 = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,54,95,55,54,0);
       let leakcheckerR = String.fromCharCode(115,111,97,99,99,101,112,116,95,104,95,55,55,0);
       let sentryn = 5.0;
       let auto_tA = 3.0;
      for (let i = 0; i < 3; i++) {
         sentryn /= Math.max(3, parseFloat(`${parseInt(`${auto_tA}`)}`));
      }
         render5 += "2";
      let androida = sentryn >= 5579461.0;
      do {
          let refresha = 3.0;
          let graphicsy = 5.0;
         sentryn *= parseFloat(`${2}`);
         refresha *= parseFloat(`${parseInt(`${refresha}`) | 3}`);
         graphicsy += 3 << (Math.min(Math.abs(parseInt(`${graphicsy}`)), 1));
         if (androida) {
            break;
         }
      } while (androida && ((leakcheckerR.length / 2) < 2 && 2 < (parseInt(`${sentryn}`) + leakcheckerR.length)));
          let handler4: Array<any> = [69, 851, 401];
          let backwardm = 3.0;
          let linkl: Array<any> = [918, 388];
         render5 += `${linkl.length | 3}`;
         handler4.push(3);
         backwardm /= Math.max(4, 3);
         linkl.push(handler4.length);
          let frame_1i = String.fromCharCode(99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,95,105,95,49,50,0);
          let launch5 = false;
          let moviesC = String.fromCharCode(116,102,117,101,108,95,112,95,49,51,0);
         sentryn -= (parseFloat(`${frame_1i == String.fromCharCode(81,0) ? parseInt(`${auto_tA}`) : frame_1i.length}`));
         launch5 = launch5 || moviesC.length > 4;
         moviesC = `${3 * moviesC.length}`;
      sportsM = (((!sportsM ? 16 : match1.length) & match1.length) == 16);
      break;
   }
      navigation_ *= 2 + parseInt(`${smallI}`);
       let forwardC = String.fromCharCode(106,115,101,112,95,106,95,50,48,0);
       let direct2: Map<any, any> = new Map([[String.fromCharCode(120,95,52,49,95,105,110,115,101,114,116,105,111,110,115,0),String.fromCharCode(113,117,97,110,116,105,108,101,95,117,95,56,55,0)], [String.fromCharCode(102,114,97,110,100,111,109,95,121,95,49,56,0),String.fromCharCode(114,95,53,57,95,99,111,100,101,119,111,114,100,0)]]);
       let gpay7 = String.fromCharCode(97,95,51,57,95,99,111,110,116,101,120,116,99,111,110,102,105,103,0);
      for (let m = 0; m < 2; m++) {
         forwardC = `${direct2.size ^ forwardC.length}`;
      }
      while (forwardC != gpay7) {
          let sansg = String.fromCharCode(110,111,104,101,97,100,101,114,95,120,95,56,54,0);
          let stylese = String.fromCharCode(104,95,55,49,95,108,111,110,103,0);
         gpay7 = `${direct2.size}`;
         sansg += `${sansg.length | 1}`;
         stylese = `${stylese.length ^ 3}`;
         break;
      }
      while (1 > (direct2.size % (Math.max(forwardC.length, 2))) && 1 > (forwardC.length % (Math.max(4, direct2.size)))) {
         forwardC += `${direct2.size - 2}`;
         break;
      }
      for (let e = 0; e < 1; e++) {
          let foundw: Array<any> = [String.fromCharCode(99,95,55,51,95,121,111,110,108,121,0), String.fromCharCode(114,101,97,108,108,111,99,97,116,101,95,52,95,56,56,0)];
         forwardC = `${direct2.size >> (Math.min(Math.abs(3), 4))}`;
         foundw = [foundw.length];
      }
         direct2.set(`${gpay7}`, 2);
         direct2.set(forwardC, 3 * forwardC.length);
          let miniZ = 1.0;
          let verticalu = String.fromCharCode(111,95,51,49,95,105,110,116,101,110,116,115,0);
          let resendh = 1.0;
         gpay7 = `${(String.fromCharCode(108,0) == forwardC ? forwardC.length : parseInt(`${miniZ}`))}`;
         miniZ += parseInt(`${resendh}`);
         verticalu += `${(String.fromCharCode(121,0) == verticalu ? parseInt(`${resendh}`) : verticalu.length)}`;
      let libhermese = direct2.size <= 8949012;
      do {
         direct2.set(`${gpay7}`, gpay7.length);
         if (libhermese) {
            break;
         }
      } while (libhermese && (2 <= (2 << (Math.min(4, gpay7.length)))));
      for (let e = 0; e < 3; e++) {
          let chart0 = String.fromCharCode(116,105,102,102,95,120,95,51,50,0);
          let renew5 = 5;
          let filed0 = String.fromCharCode(106,95,50,51,95,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
         forwardC += `${2 | gpay7.length}`;
         chart0 += `${renew5}`;
         renew5 *= renew5 << (Math.min(chart0.length, 1));
         filed0 = `${(String.fromCharCode(66,0) == filed0 ? filed0.length : renew5)}`;
      }
      alertq = [1 | parseInt(`${navigation_}`)];
   while (1 >= (alertq.length & 1) || 1 >= (alertq.length & gpay4.size)) {
      alertq.push(match1.length);
      break;
   }

    setShowSliderThumbnail(!showSliderThumbnail);

   for (let h = 0; h < 2; h++) {
       let moon6 = 0.0;
       let collectionS = String.fromCharCode(113,116,97,98,108,101,95,104,95,49,54,0);
         collectionS = `${collectionS.length}`;
      let routerB = 7159509.0 >= moon6;
      do {
         moon6 *= 3;
         if (routerB) {
            break;
         }
      } while ((5.99 < (2.38 + moon6) && 1.90 < (2.38 + moon6)) && routerB);
      for (let f = 0; f < 1; f++) {
         moon6 /= Math.max(3, 1 << (Math.min(2, Math.abs(parseInt(`${moon6}`)))));
      }
      while (parseInt(`${moon6}`) >= collectionS.length) {
         moon6 += 1;
         break;
      }
      while ((moon6 / 5.3) >= 3.62 && (moon6 / 5.3) >= 1.29) {
         collectionS = `${(String.fromCharCode(66,0) == collectionS ? parseInt(`${moon6}`) : collectionS.length)}`;
         break;
      }
         collectionS = `${(collectionS == String.fromCharCode(57,0) ? parseInt(`${moon6}`) : collectionS.length)}`;
      sportsM = match1.length > stara.size;
   }
   while (gpay4.size <= 5) {
       let libreactnativejniO: Map<any, any> = new Map([[String.fromCharCode(109,101,108,116,95,101,95,57,52,0),846], [String.fromCharCode(108,95,55,55,95,115,99,97,108,97,98,108,101,0),976]]);
       let telemetryq = false;
       let layoutZ = false;
       let libreactnativejniq = 1;
       let plash3: Array<any> = [23, 886];
         plash3 = [3];
      while (!telemetryq && 3 == (2 << (Math.min(4, Math.abs(libreactnativejniq))))) {
         libreactnativejniq <<= Math.min(Math.abs(libreactnativejniO.size), 1);
         break;
      }
       let libruntimeexecutorR1 = String.fromCharCode(113,95,51,51,95,115,105,103,112,97,115,115,0);
       let logoutf = String.fromCharCode(102,101,108,101,109,95,113,95,52,54,0);
         telemetryq = libruntimeexecutorR1.length == libreactnativejniq;
      if (!layoutZ) {
         telemetryq = 25 < libreactnativejniq;
      }
      if (1 <= libreactnativejniq) {
          let searchbar7 = String.fromCharCode(99,95,50,55,95,107,102,114,109,0);
          let unimplementedviewh = String.fromCharCode(111,95,53,54,95,102,114,97,109,101,102,111,114,109,97,116,0);
          let flyerw = false;
          let flyerm = 4;
          let settingy = String.fromCharCode(101,95,53,57,95,102,97,117,108,116,121,0);
         layoutZ = 1 >= plash3.length || unimplementedviewh == String.fromCharCode(56,0);
         searchbar7 += `${((flyerw ? 3 : 5) | flyerm)}`;
         unimplementedviewh = `${settingy.length}`;
         flyerw = !searchbar7.includes(`${flyerw}`);
         flyerm += (settingy == String.fromCharCode(87,0) ? searchbar7.length : settingy.length);
      }
      let dycreatorA = 8008743 <= libreactnativejniO.size;
      do {
         libreactnativejniO.set(`${libreactnativejniq}`, libreactnativejniq % (Math.max(5, libreactnativejniO.size)));
         if (dycreatorA) {
            break;
         }
      } while (dycreatorA && (telemetryq));
      for (let t = 0; t < 1; t++) {
         layoutZ = layoutZ || 46 == libreactnativejniq;
      }
         libreactnativejniq ^= plash3.length | 2;
       let filledl = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,115,95,52,95,51,55,0);
       let over7 = String.fromCharCode(97,95,53,49,95,114,97,110,103,101,99,111,100,101,114,0);
          let notificationL = String.fromCharCode(102,95,50,54,95,119,105,101,110,101,114,0);
         logoutf += `${notificationL.length << (Math.min(5, Math.abs(libreactnativejniO.size)))}`;
      if (!logoutf.startsWith(libruntimeexecutorR1)) {
          let minimize2 = 1;
         libruntimeexecutorR1 += `${(libruntimeexecutorR1 == String.fromCharCode(83,0) ? libruntimeexecutorR1.length : logoutf.length)}`;
         minimize2 *= minimize2;
      }
      while (libreactnativejniq >= libruntimeexecutorR1.length) {
         libruntimeexecutorR1 = `${1 + plash3.length}`;
         break;
      }
       let libavformatk = String.fromCharCode(118,95,49,49,95,105,115,101,120,112,108,97,105,110,0);
       let schedulerS = String.fromCharCode(119,95,56,56,95,99,111,108,108,97,112,115,105,110,103,0);
      let minimizeP = String.fromCharCode(113,108,121,54,57,0) == logoutf;
      do {
          let country9 = String.fromCharCode(98,95,57,53,95,104,100,108,114,0);
          let container1: Map<any, any> = new Map([[String.fromCharCode(106,95,57,52,95,117,100,112,108,105,116,101,0),521], [String.fromCharCode(112,95,56,51,95,109,111,100,101,0),399]]);
          let megaphoneN = String.fromCharCode(113,117,97,114,116,95,52,95,57,56,0);
          let unimplementedviewV = 3.0;
          let viewsO = String.fromCharCode(118,101,114,105,102,105,101,100,95,105,95,49,48,0);
         logoutf = `${2 + parseInt(`${unimplementedviewV}`)}`;
         country9 = `${viewsO.length / 3}`;
         container1.set(country9, country9.length ^ 3);
         megaphoneN += `${country9.length}`;
         unimplementedviewV += parseFloat(`${1 << (Math.min(5, viewsO.length))}`);
         if (minimizeP) {
            break;
         }
      } while ((logoutf.includes(`${libreactnativejniq}`)) && minimizeP);
      gpay4.set(`${libreactnativejniq}`, stara.size % (Math.max(1, 9)));
      break;
   }
      libffmpegkitJ /= Math.max(match1.length >> (Math.min(4, Math.abs(stara.size))), 2);
      navigation_ /= Math.max(2, alertq.length);
       let build0 = String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,53,95,53,55,0);
       let gemfile3 = String.fromCharCode(101,120,112,97,110,100,101,114,95,111,95,52,48,0);
       let rounda = 2;
         build0 += `${build0.length}`;
      for (let e = 0; e < 1; e++) {
         gemfile3 += `${build0.length ^ 3}`;
      }
      if (build0.length == 3) {
          let modelI = String.fromCharCode(108,95,51,56,95,100,97,118,100,0);
          let libyogao: Array<any> = [873, 284];
          let video9 = 4.0;
          let promotionY: Map<any, any> = new Map([[String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,100,95,52,48,0),false ], [String.fromCharCode(117,95,49,53,95,104,105,103,104,108,105,103,104,116,97,98,108,101,0),false ]]);
          let codegenA = false;
         build0 = `${parseInt(`${video9}`)}`;
         modelI += `${(modelI == String.fromCharCode(99,0) ? modelI.length : promotionY.size)}`;
         libyogao.push((1 >> (Math.min(4, Math.abs((codegenA ? 1 : 1))))));
         video9 *= parseFloat(`${3}`);
         promotionY.set(`${libyogao.length}`, libyogao.length ^ 1);
      }
      for (let h = 0; h < 1; h++) {
         build0 = `${build0.length}`;
      }
          let regengg = String.fromCharCode(99,111,109,112,97,114,95,105,95,51,57,0);
         gemfile3 = `${rounda}`;
         regengg += `${regengg.length * regengg.length}`;
      if (!gemfile3.startsWith(`${rounda}`)) {
          let analyticp = String.fromCharCode(97,116,116,95,110,95,49,48,0);
          let modelsO: Map<any, any> = new Map([[String.fromCharCode(97,112,116,120,95,101,95,54,53,0),false ], [String.fromCharCode(100,115,116,114,101,97,109,95,56,95,54,49,0),true ]]);
         rounda += build0.length;
         analyticp = `${(analyticp == String.fromCharCode(48,0) ? analyticp.length : modelsO.size)}`;
         modelsO = new Map([[`${modelsO.size}`, modelsO.size]]);
      }
      if (gemfile3.length > build0.length) {
          let mergerl = false;
          let libswscalea: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,99,115,119,97,112,0),String.fromCharCode(114,101,108,111,103,105,110,95,116,95,51,52,0)], [String.fromCharCode(97,114,97,98,105,99,95,100,95,49,50,0),String.fromCharCode(115,101,110,100,101,114,115,95,52,95,54,0)]]);
          let optionsk = String.fromCharCode(104,95,53,52,95,100,114,105,118,101,114,115,0);
          let reactR = String.fromCharCode(100,111,117,103,108,97,115,95,99,95,52,51,0);
          let indicators = 0.0;
         gemfile3 += "2";
         mergerl = 47 > libswscalea.size;
         libswscalea = new Map([[reactR, 1]]);
         optionsk += `${libswscalea.size & optionsk.length}`;
         reactR += "2";
         indicators -= ((mergerl ? 2 : 5));
      }
          let libreactnativeblobR = String.fromCharCode(114,97,105,115,101,95,118,95,53,55,0);
          let reducer5 = true;
         build0 += `${libreactnativeblobR.length | 1}`;
          let libswresampleu = String.fromCharCode(116,105,109,101,119,97,105,116,95,51,95,56,0);
         rounda %= Math.max(rounda, 5);
         libswresampleu = `${libswresampleu.length}`;
      gpay4.set(`${sportsM}`, 3 >> (Math.min(Math.abs(parseInt(`${navigation_}`)), 1)));
      smallI /= Math.max(5, parseFloat(`${3 >> (Math.min(1, Math.abs(gpay4.size)))}`));
   for (let p = 0; p < 3; p++) {
       let zhuboM = String.fromCharCode(105,95,56,52,95,108,101,103,97,99,121,0);
       let bdxadsdkE = 4.0;
       let smallC = 4.0;
       let megaphoneP = 1.0;
       let bottome = true;
      let selectF = String.fromCharCode(103,55,108,106,113,99,99,48,0) == zhuboM;
      do {
         zhuboM = `${parseInt(`${bdxadsdkE}`)}`;
         if (selectF) {
            break;
         }
      } while (selectF && ((zhuboM.length | 2) < 5 || (2 >> (Math.min(3, zhuboM.length))) < 5));
          let commonx = 2.0;
         megaphoneP *= parseFloat(`${1 + zhuboM.length}`);
         commonx += parseFloat(`${parseInt(`${commonx}`)}`);
      while (!bottome) {
         megaphoneP += parseFloat(`${parseInt(`${smallC}`)}`);
         break;
      }
       let mbjscommonw: Map<any, any> = new Map([[String.fromCharCode(97,95,55,51,95,112,97,112,101,114,0),835], [String.fromCharCode(117,95,57,53,95,105,109,97,103,101,114,111,116,97,116,101,0),727]]);
       let single3: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,97,99,101,115,115,111,114,121,0),true ], [String.fromCharCode(114,112,122,97,95,122,95,56,53,0),true ]]);
      if ((4 >> (Math.min(3, Math.abs(single3.size)))) > 3 && 4 > single3.size) {
         single3.set(zhuboM, (String.fromCharCode(49,0) == zhuboM ? zhuboM.length : single3.size));
      }
         smallC /= Math.max(3, single3.size);
      if (mbjscommonw.get(`${smallC}`) == null) {
          let libyogai = 3;
          let hejih = 1;
         mbjscommonw = new Map([[`${mbjscommonw.size}`, mbjscommonw.size << (Math.min(2, Math.abs(libyogai)))]]);
         libyogai &= 1;
         hejih ^= hejih << (Math.min(Math.abs(hejih), 4));
      }
          let foundG = 1.0;
         mbjscommonw = new Map([[`${bdxadsdkE}`, parseInt(`${bdxadsdkE}`)]]);
         foundG *= parseFloat(`${parseInt(`${foundG}`) / 2}`);
      if (Array.from(single3.keys()).includes(`${smallC}`)) {
         single3 = new Map([[`${single3.size}`, 3 * single3.size]]);
      }
         zhuboM += `${2 + parseInt(`${megaphoneP}`)}`;
         bottome = 32.51 > smallC;
      while ((3 >> (Math.min(2, zhuboM.length))) < 1 || 2 < (parseInt(`${megaphoneP}`) / (Math.max(3, 3)))) {
         zhuboM += `${(String.fromCharCode(77,0) == zhuboM ? zhuboM.length : mbjscommonw.size)}`;
         break;
      }
         smallC += parseInt(`${smallC}`) & zhuboM.length;
         mbjscommonw = new Map([[`${bottome}`, ((bottome ? 4 : 3) + parseInt(`${smallC}`))]]);
      for (let o = 0; o < 3; o++) {
         smallC += 3;
      }
      sportsM = libffmpegkitJ == 79.80;
   }
   let huaweiz = 6416150 <= stara.size;
   do {
      stara = new Map([[`${alertq.length}`, ((sportsM ? 5 : 5) / 1)]]);
      if (huaweiz) {
         break;
      }
   } while (huaweiz && (parseInt(`${libffmpegkitJ}`) <= stara.size));
   while (sportsM) {
       let productU = 4;
       let bootsplasho = String.fromCharCode(109,97,110,97,103,101,115,95,108,95,56,50,0);
       let scheduleF = String.fromCharCode(113,95,50,48,95,105,115,112,111,114,116,0);
      if (1 > productU) {
          let agreementn = String.fromCharCode(112,114,105,109,105,116,105,118,101,95,99,95,57,53,0);
          let libloggeri: Array<any> = [97, 738, 296];
         scheduleF += "1";
         agreementn += `${libloggeri.length % (Math.max(agreementn.length, 7))}`;
         libloggeri.push(libloggeri.length);
      }
      if (5 <= bootsplasho.length) {
          let librrcg = 2.0;
          let circleY = 5;
          let libffmpegkitX = String.fromCharCode(115,95,49,52,95,102,116,101,108,108,0);
          let networkf = String.fromCharCode(116,114,97,118,101,114,115,101,95,105,95,55,48,0);
          let termso: Array<any> = [String.fromCharCode(98,105,103,103,101,115,116,95,119,95,51,50,0), String.fromCharCode(115,95,53,95,116,105,99,107,101,114,0)];
         scheduleF = `${scheduleF.length / 2}`;
         librrcg /= Math.max(parseFloat(`${networkf.length}`), 5);
         circleY /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${librrcg}`)), 4)), 1);
         libffmpegkitX = `${networkf.length}`;
         termso = [circleY * 2];
      }
      let componentF = bootsplasho == String.fromCharCode(110,48,108,102,100,0);
      do {
         bootsplasho = `${(String.fromCharCode(98,0) == scheduleF ? bootsplasho.length : scheduleF.length)}`;
         if (componentF) {
            break;
         }
      } while (componentF && (scheduleF != bootsplasho));
      if (productU >= scheduleF.length) {
         scheduleF = "2";
      }
      while (bootsplasho.length < productU) {
         productU ^= 2;
         break;
      }
      for (let b = 0; b < 2; b++) {
         bootsplasho += `${bootsplasho.length}`;
      }
          let libgloga = true;
          let binddatasE: Array<any> = [213, 973, 624];
          let nalyticsI = String.fromCharCode(121,95,49,55,95,109,111,100,101,109,118,99,111,115,116,0);
         productU *= scheduleF.length >> (Math.min(Math.abs(3), 1));
         libgloga = 64 == nalyticsI.length;
         binddatasE = [binddatasE.length];
         nalyticsI += `${(String.fromCharCode(89,0) == nalyticsI ? nalyticsI.length : binddatasE.length)}`;
         bootsplasho += `${scheduleF.length | productU}`;
         productU -= 2;
      libffmpegkitJ *= 2;
      break;
   }
      mintegraln = smallI <= parseFloat(`${match1.length}`);
   while (gpay4.size > sliderW.length) {
      gpay4 = new Map([[`${smallI}`, parseInt(`${libffmpegkitJ}`)]]);
      break;
   }
   if ((parseInt(`${navigation_}`) / (Math.max(sliderW.length, 7))) <= 2 && (navigation_ / (Math.max(1.12, 7))) <= 1.20) {
      navigation_ -= ((sportsM ? 2 : 2) / (Math.max(alertq.length, 1)));
   }
    delayControls(!paused);

   while ((navigation_ - 2.36) <= 5.11 || navigation_ <= 2.36) {
       let cornerJ = 5;
         cornerJ <<= Math.min(Math.abs(cornerJ), 5);
      while (2 > (3 & cornerJ) && (cornerJ & 3) > 4) {
          let targetz: Array<any> = [984, 587];
          let basketballT = 4.0;
         cornerJ %= Math.max(targetz.length << (Math.min(1, Math.abs(parseInt(`${basketballT}`)))), 1);
         break;
      }
       let resend4 = false;
      sportsM = mintegraln && 13.74 == smallI;
      break;
   }
      navigation_ += parseInt(`${smallI}`) * 2;
       let settingsg = String.fromCharCode(105,95,50,55,95,115,99,111,114,101,115,0);
       let securityL = 3;
      for (let i = 0; i < 3; i++) {
         settingsg += `${2 & securityL}`;
      }
      let pointt = 6085159 >= settingsg.length;
      do {
         settingsg += `${settingsg.length << (Math.min(Math.abs(1), 1))}`;
         if (pointt) {
            break;
         }
      } while (pointt && (4 <= (settingsg.length | 2)));
          let homee = false;
          let rewardT: Map<any, any> = new Map([[String.fromCharCode(120,95,51,51,95,114,101,99,108,97,105,109,0),220], [String.fromCharCode(116,95,51,52,95,115,101,112,97,114,97,116,101,100,0),551]]);
         settingsg += `${securityL}`;
         homee = null != rewardT.get(`${homee}`);
         rewardT.set(`${homee}`, ((homee ? 5 : 2) * rewardT.size));
          let borderlessP = 1.0;
          let textI = String.fromCharCode(113,95,55,54,95,116,114,97,110,115,112,97,114,101,110,116,0);
         securityL += 1;
         borderlessP += parseInt(`${borderlessP}`);
         textI = `${(String.fromCharCode(74,0) == textI ? parseInt(`${borderlessP}`) : textI.length)}`;
      if ((settingsg.length >> (Math.min(Math.abs(4), 3))) == 5) {
         settingsg += `${settingsg.length + 1}`;
      }
      let sportsc = securityL <= 6455314;
      do {
          let update_n4s = 5;
          let filedX = 1.0;
          let analyticN = String.fromCharCode(117,100,112,95,98,95,55,56,0);
         securityL ^= analyticN.length;
         update_n4s ^= 3 / (Math.max(parseInt(`${filedX}`), 1));
         filedX *= 3 / (Math.max(update_n4s, 8));
         analyticN = `${1 >> (Math.min(Math.abs(update_n4s), 3))}`;
         if (sportsc) {
            break;
         }
      } while (sportsc && (5 == (settingsg.length ^ 2) || (securityL ^ settingsg.length) == 2));
      navigation_ *= gpay4.size;
      smallI *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${navigation_}`)), 1))}`);
   while (2.33 <= (navigation_ - alertq.length) && 2 <= (alertq.length - parseInt(`${navigation_}`))) {
       let overT = true;
       let libjsiV = 3;
       let f_title3 = String.fromCharCode(98,111,114,100,101,114,95,122,95,53,52,0);
       let libjsiJ = String.fromCharCode(101,109,109,105,110,116,114,105,110,95,120,95,54,49,0);
       let shootx = String.fromCharCode(115,99,114,101,101,110,95,109,95,51,51,0);
          let huaweio: Array<any> = [637, 615, 965];
          let miniz = String.fromCharCode(104,95,56,48,95,104,111,117,114,108,121,0);
         shootx = `${libjsiJ.length / 3}`;
         huaweio = [huaweio.length];
         miniz = "1";
      if (4 == shootx.length) {
         overT = f_title3.length == 42;
      }
      if (libjsiJ == String.fromCharCode(80,0)) {
         shootx = `${(String.fromCharCode(54,0) == f_title3 ? f_title3.length : shootx.length)}`;
      }
      let delegate_50N = 9387670 <= libjsiV;
      do {
         libjsiV >>= Math.min(Math.abs(((overT ? 4 : 3) * 1)), 2);
         if (delegate_50N) {
            break;
         }
      } while (delegate_50N && ((libjsiV % 3) <= 4));
         f_title3 = `${libjsiJ.length ^ 2}`;
         libjsiJ += `${libjsiJ.length}`;
      for (let e = 0; e < 3; e++) {
         overT = f_title3.length < libjsiV;
      }
      for (let e = 0; e < 1; e++) {
          let auto_9gU = false;
         f_title3 = `${f_title3.length}`;
         auto_9gU = (!auto_9gU ? !auto_9gU : auto_9gU);
      }
         libjsiV &= 3;
         shootx = `${libjsiV | 3}`;
      while (!shootx.endsWith(libjsiJ)) {
         libjsiJ += `${libjsiJ.length / 2}`;
         break;
      }
      if ((shootx.length << (Math.min(Math.abs(5), 4))) < 5 && (shootx.length << (Math.min(2, Math.abs(libjsiV)))) < 5) {
         libjsiV /= Math.max(2, 2);
      }
      let detailc = overT ? !overT : overT;
      do {
         overT = libjsiJ.length >= f_title3.length;
         if (detailc) {
            break;
         }
      } while ((overT) && detailc);
          let infoT = String.fromCharCode(97,107,97,114,111,115,95,119,95,55,49,0);
          let encrypto = false;
          let settingsG = String.fromCharCode(115,95,52,56,95,112,99,98,105,110,102,111,0);
         shootx = `${(String.fromCharCode(117,0) == shootx ? shootx.length : libjsiV)}`;
         infoT += `${infoT.length - settingsG.length}`;
         encrypto = encrypto && infoT.length <= 43;
         settingsG += `${(infoT == String.fromCharCode(81,0) ? infoT.length : (encrypto ? 1 : 3))}`;
      while (!shootx.includes(`${overT}`)) {
         overT = (shootx.length >> (Math.min(4, libjsiJ.length))) >= 91;
         break;
      }
      navigation_ -= match1.length % 2;
      break;
   }
      smallI *= parseFloat(`${2}`);
   if (1 > (match1.length * 3) && 3 > (stara.size * match1.length)) {
      stara.set(`${smallI}`, 2);
   }
   for (let f = 0; f < 2; f++) {
      sliderW = `${((sportsM ? 4 : 1) % (Math.max(3, parseInt(`${navigation_}`))))}`;
   }
       let scrollviewg = String.fromCharCode(119,95,50,48,95,99,108,111,99,107,100,114,105,102,116,0);
       let untickO = 0.0;
      let merger0 = untickO >= 7596458.0;
      do {
         untickO /= Math.max(2 & parseInt(`${untickO}`), 1);
         if (merger0) {
            break;
         }
      } while ((5 >= (parseInt(`${untickO}`) * scrollviewg.length)) && merger0);
      for (let z = 0; z < 1; z++) {
          let flipper3 = 4.0;
         scrollviewg = `${parseInt(`${untickO}`) + scrollviewg.length}`;
         flipper3 *= parseFloat(`${3}`);
      }
      if (4 < (1 / (Math.max(10, parseInt(`${untickO}`)))) && (scrollviewg.length * 1) < 1) {
         untickO *= 2 >> (Math.min(5, Math.abs(parseInt(`${untickO}`))));
      }
      while (5.74 > untickO) {
         scrollviewg = `${parseInt(`${untickO}`) | 1}`;
         break;
      }
         scrollviewg = `${2 >> (Math.min(2, Math.abs(parseInt(`${untickO}`))))}`;
       let friendsN = String.fromCharCode(115,117,98,112,97,114,116,105,116,105,111,110,95,106,95,54,51,0);
       let list7 = String.fromCharCode(101,95,52,56,95,105,111,115,117,114,102,97,99,101,0);
      stara.set(sliderW, 1 << (Math.min(2, Math.abs(parseInt(`${untickO}`)))));
      navigation_ -= ((sportsM ? 4 : 5) | stara.size);
   while (parseInt(`${navigation_}`) >= match1.length) {
      match1 = `${((mintegraln ? 4 : 3) + 3)}`;
      break;
   }
   if ((smallI / 5.71) > 5.4 || 5.48 > (5.71 + navigation_)) {
       let settingE = 5.0;
       let orientationj = String.fromCharCode(109,95,53,49,95,103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,0);
       let robotoi = 4.0;
       let overlayc = 5.0;
       let screenh = String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,54,95,52,52,0);
      while (!orientationj.includes(`${overlayc}`)) {
         orientationj += `${parseInt(`${robotoi}`)}`;
         break;
      }
         settingE += 3;
      let binddatasK = 6536471.0 >= overlayc;
      do {
          let orientation5 = 4.0;
          let rightv = 5.0;
         overlayc /= Math.max(3, parseFloat(`${1 & orientationj.length}`));
         orientation5 += parseInt(`${rightv}`) | parseInt(`${orientation5}`);
         rightv *= parseInt(`${rightv}`) * 2;
         if (binddatasK) {
            break;
         }
      } while (binddatasK && (2.45 >= (overlayc / (Math.max(5.19, 2)))));
         overlayc -= parseFloat(`${parseInt(`${settingE}`) | 2}`);
      if ((robotoi - orientationj.length) == 1.71 && 2 == (4 | orientationj.length)) {
         robotoi += (screenh == String.fromCharCode(122,0) ? screenh.length : parseInt(`${overlayc}`));
      }
          let bootsplashN = 1.0;
          let circleK = String.fromCharCode(120,95,49,55,95,102,101,116,99,104,0);
          let goalG = 2.0;
         settingE += circleK.length << (Math.min(2, Math.abs(parseInt(`${overlayc}`))));
         bootsplashN *= parseInt(`${goalG}`);
         circleK = `${1 | parseInt(`${bootsplashN}`)}`;
         robotoi += (screenh == String.fromCharCode(49,0) ? orientationj.length : screenh.length);
         screenh = `${parseInt(`${overlayc}`)}`;
       let runtimez: Map<any, any> = new Map([[String.fromCharCode(113,95,56,57,95,108,97,115,114,0),741], [String.fromCharCode(97,109,101,120,95,52,95,52,48,0),829], [String.fromCharCode(102,108,111,97,116,115,104,111,114,116,95,111,95,55,50,0),273]]);
      while (3 == (screenh.length & 3) || 3 == (screenh.length + parseInt(`${robotoi}`))) {
         robotoi += parseInt(`${overlayc}`);
         break;
      }
       let feedback2 = String.fromCharCode(116,117,112,108,101,95,50,95,55,56,0);
      smallI *= parseFloat(`${sliderW.length % (Math.max(2, 4))}`);
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let trashv = false;
    let adultO: Array<any> = [273, 133];
    let cancelS = false;
    let buildq = 0.0;
    let sideb = 0.0;
    let libpangleflippedG: Array<any> = [String.fromCharCode(119,95,57,55,95,105,110,99,114,101,97,115,105,110,103,0), String.fromCharCode(98,95,54,56,95,109,101,97,115,117,114,101,115,0)];
    let t_title3: Array<any> = [587, 408, 320];
    let dangerf = String.fromCharCode(121,95,54,51,95,100,111,119,110,0);
    let sportp = 2;
    let tinit_c9: Array<any> = [181, 868, 346];
      sideb /= Math.max(parseInt(`${buildq}`) | 1, 3);
       let emptyJ = 2.0;
       let libcxxcomponentsw: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,114,100,112,99,109,0),true ], [String.fromCharCode(105,110,99,114,101,97,115,105,110,103,95,105,95,55,53,0),false ], [String.fromCharCode(101,118,100,110,115,95,121,95,50,48,0),false ]]);
         emptyJ *= libcxxcomponentsw.size;
      if (libcxxcomponentsw.get(`${emptyJ}`) != null) {
         emptyJ += libcxxcomponentsw.size & 2;
      }
         emptyJ -= parseInt(`${emptyJ}`) ^ 3;
       let bingj = 3;
       let abidetectH = 3;
         emptyJ -= 1 * bingj;
          let strings2 = 0.0;
         bingj &= libcxxcomponentsw.size;
         strings2 -= 3;
      dangerf += `${parseInt(`${emptyJ}`)}`;
   for (let p = 0; p < 1; p++) {
      sportp >>= Math.min(1, Math.abs((3 | (trashv ? 5 : 4))));
   }
   let overlayl = t_title3.length <= 7707467;
   do {
      t_title3 = [parseInt(`${buildq}`)];
      if (overlayl) {
         break;
      }
   } while (((5 * t_title3.length) < 3 || !cancelS) && overlayl);
   while (sideb >= 3.25) {
      sideb += (libpangleflippedG.length >> (Math.min(1, Math.abs((trashv ? 1 : 1)))));
      break;
   }
   let fastj = buildq <= 7567261.0;
   do {
      buildq += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${sideb}`)), 5))}`);
      if (fastj) {
         break;
      }
   } while (fastj && (1 > (dangerf.length - parseInt(`${buildq}`))));
   for (let i = 0; i < 1; i++) {
      libpangleflippedG.push(2 + dangerf.length);
   }
   while (5 <= (libpangleflippedG.length - 5)) {
      t_title3 = [sportp % (Math.max(parseInt(`${buildq}`), 5))];
      break;
   }
   for (let m = 0; m < 3; m++) {
      buildq -= (parseFloat(`${(cancelS ? 2 : 5) + libpangleflippedG.length}`));
   }
   while (dangerf.includes(`${cancelS}`)) {
      cancelS = (((trashv ? 41 : libpangleflippedG.length) >> (Math.min(libpangleflippedG.length, 2))) > 41);
      break;
   }
      adultO = [((trashv ? 1 : 1) % (Math.max(parseInt(`${sideb}`), 4)))];
      sportp ^= 3;
      trashv = t_title3.includes(buildq);
   while (dangerf.length < t_title3.length) {
      dangerf += `${2 | parseInt(`${sideb}`)}`;
      break;
   }
       let guideH = true;
       let libyogaO: Map<any, any> = new Map([[String.fromCharCode(116,95,57,56,95,116,97,103,0),606], [String.fromCharCode(102,114,101,101,102,111,114,109,95,103,95,55,49,0),338], [String.fromCharCode(116,95,54,50,95,98,119,103,116,0),457]]);
         guideH = guideH || libyogaO.size == 65;
      if ((libyogaO.size ^ 3) < 2 && !guideH) {
          let flyerh = 2.0;
          let greyn = 3.0;
         libyogaO = new Map([[`${greyn}`, 1]]);
         flyerh += parseFloat(`${3 + parseInt(`${flyerh}`)}`);
         greyn /= Math.max(2, parseFloat(`${3 / (Math.max(7, parseInt(`${flyerh}`)))}`));
      }
         guideH = !guideH;
         libyogaO = new Map([[`${libyogaO.size}`, libyogaO.size + 3]]);
         guideH = !guideH;
          let string2 = 5.0;
          let selectedJ = String.fromCharCode(109,111,110,111,99,104,114,111,109,101,95,116,95,53,49,0);
          let renewX = 3.0;
         libyogaO = new Map([[`${libyogaO.size}`, 1]]);
         string2 -= parseInt(`${renewX}`);
         selectedJ = `${1 >> (Math.min(4, Math.abs(parseInt(`${renewX}`))))}`;
      sportp |= adultO.length - 3;
   while (1 <= (t_title3.length << (Math.min(adultO.length, 4)))) {
       let ying6 = 4;
       let hooksS = String.fromCharCode(116,118,100,99,95,119,95,54,48,0);
       let time_fr: Map<any, any> = new Map([[String.fromCharCode(115,105,108,101,110,116,108,121,95,103,95,49,51,0),true ], [String.fromCharCode(112,114,102,95,50,95,51,52,0),true ], [String.fromCharCode(115,116,97,110,100,97,114,100,95,57,95,53,48,0),true ]]);
       let proxyF = String.fromCharCode(116,108,117,116,95,98,95,56,53,0);
       let templateprocessorq: Map<any, any> = new Map([[String.fromCharCode(109,102,104,100,95,48,95,49,49,0),String.fromCharCode(107,95,51,49,95,117,110,115,97,118,101,0)], [String.fromCharCode(106,95,56,49,95,105,110,116,114,111,100,117,99,116,105,111,110,0),String.fromCharCode(115,95,50,57,95,112,101,114,99,101,110,116,0)], [String.fromCharCode(100,121,97,100,105,99,95,97,95,50,57,0),String.fromCharCode(121,95,50,95,114,101,100,105,114,101,99,116,111,114,0)]]);
          let clubV = String.fromCharCode(109,118,104,100,95,97,95,51,0);
          let volumeT: Map<any, any> = new Map([[String.fromCharCode(111,117,116,112,111,105,110,116,95,111,95,53,54,0),true ], [String.fromCharCode(115,109,97,108,108,101,115,116,95,109,95,53,57,0),false ]]);
         ying6 -= time_fr.size << (Math.min(Math.abs(1), 3));
         clubV = `${volumeT.size % (Math.max(clubV.length, 5))}`;
         volumeT = new Map([[`${volumeT.size}`, 1]]);
         templateprocessorq = new Map([[`${time_fr.size}`, 2]]);
       let traminiX = 2.0;
       let incidentk = 1.0;
      while (3 >= templateprocessorq.size) {
          let lightm = 2;
          let paginationF: Map<any, any> = new Map([[String.fromCharCode(102,100,99,116,100,115,112,95,56,95,49,52,0),false ], [String.fromCharCode(115,101,116,115,104,97,114,101,95,115,95,55,54,0),false ]]);
          let rulesr = 2.0;
         templateprocessorq = new Map([[`${templateprocessorq.size}`, 1]]);
         lightm <<= Math.min(Math.abs(parseInt(`${rulesr}`)), 5);
         paginationF = new Map([[`${paginationF.size}`, 3 ^ lightm]]);
         rulesr -= paginationF.size;
         break;
      }
      for (let q = 0; q < 2; q++) {
         incidentk += parseInt(`${incidentk}`);
      }
      while (4 == (3 * hooksS.length)) {
          let gradle4 = String.fromCharCode(109,97,103,105,99,95,115,95,55,57,0);
         hooksS += `${hooksS.length | 3}`;
         gradle4 = `${gradle4.length}`;
         break;
      }
         proxyF = `${1 % (Math.max(5, time_fr.size))}`;
      if (hooksS == String.fromCharCode(50,0)) {
         proxyF = `${3 % (Math.max(9, parseInt(`${incidentk}`)))}`;
      }
       let libsgcore_ = String.fromCharCode(115,97,109,112,108,105,110,103,95,104,95,52,54,0);
      while ((incidentk + libsgcore_.length) < 1.67 && (incidentk + 1.67) < 1.18) {
         libsgcore_ += `${libsgcore_.length ^ 3}`;
         break;
      }
       let typesP = false;
       let zoomK = false;
       let containerA = String.fromCharCode(99,108,117,116,115,95,99,95,50,51,0);
      for (let p = 0; p < 1; p++) {
         incidentk /= Math.max(2, 1);
      }
         containerA += `${parseInt(`${traminiX}`) + parseInt(`${incidentk}`)}`;
      for (let c = 0; c < 3; c++) {
         libsgcore_ = `${libsgcore_.length}`;
      }
      t_title3.push(parseInt(`${buildq}`) / 3);
      break;
   }
   if ((t_title3.length | 1) == 5 && (1 | sportp) == 3) {
      sportp |= 2;
   }
       let desct = String.fromCharCode(97,114,103,98,105,95,105,95,49,54,0);
       let mbsplashp = 1.0;
         desct += `${parseInt(`${mbsplashp}`) + 2}`;
         desct = `${(desct == String.fromCharCode(76,0) ? desct.length : parseInt(`${mbsplashp}`))}`;
         desct = "3";
      while (4.41 >= mbsplashp) {
          let infoU: Array<any> = [462, 197, 988];
          let selected7 = true;
          let megaphone6 = false;
          let signinupZ = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,110,95,50,57,0);
         mbsplashp -= parseFloat(`${parseInt(`${mbsplashp}`)}`);
         infoU.push(((selected7 ? 5 : 3) - 1));
         selected7 = infoU.length < 41;
         megaphone6 = selected7 || signinupZ.length >= 2;
         signinupZ = `${signinupZ.length ^ 3}`;
         break;
      }
          let transferi = String.fromCharCode(100,114,97,102,116,115,95,98,95,53,49,0);
         desct += `${parseInt(`${mbsplashp}`)}`;
         transferi = `${transferi.length >> (Math.min(transferi.length, 3))}`;
      let mbridgee = desct.length >= 9700202;
      do {
         desct = `${(String.fromCharCode(104,0) == desct ? desct.length : parseInt(`${mbsplashp}`))}`;
         if (mbridgee) {
            break;
         }
      } while ((1 > (4 + parseInt(`${mbsplashp}`)) && (desct.length >> (Math.min(Math.abs(4), 4))) > 5) && mbridgee);
      libpangleflippedG = [desct.length];
   while (adultO.length <= sportp) {
      sportp ^= adultO.length;
      break;
   }
   let unselectedq = 7265279.0 >= sideb;
   do {
       let gesturet = String.fromCharCode(110,95,50,57,95,102,97,99,105,108,105,116,97,116,101,0);
       let station9 = String.fromCharCode(117,110,100,101,114,108,105,110,101,95,57,95,49,51,0);
       let gpay5 = String.fromCharCode(99,111,118,97,108,101,110,116,95,50,95,55,53,0);
       let policyP: Array<any> = [831, 57];
       let recommendationR = true;
      while (station9 == gesturet) {
         gesturet = `${(gesturet == String.fromCharCode(83,0) ? (recommendationR ? 1 : 3) : gesturet.length)}`;
         break;
      }
      let tooltipsQ = String.fromCharCode(108,49,54,121,113,50,0) == gesturet;
      do {
         gesturet = `${((recommendationR ? 3 : 4) % (Math.max(policyP.length, 4)))}`;
         if (tooltipsQ) {
            break;
         }
      } while (tooltipsQ && (recommendationR || gesturet.length < 4));
         station9 = "3";
      if (2 > (4 << (Math.min(2, gesturet.length))) || 3 > (policyP.length << (Math.min(Math.abs(4), 3)))) {
         gesturet = `${(String.fromCharCode(51,0) == station9 ? gpay5.length : station9.length)}`;
      }
      if (!station9.startsWith(`${recommendationR}`)) {
          let mergera = 4;
          let producti = String.fromCharCode(117,95,54,51,95,99,97,112,115,0);
          let neon2 = 3.0;
         station9 += `${((recommendationR ? 3 : 1))}`;
         mergera %= Math.max(4, producti.length / 2);
         producti += `${parseInt(`${neon2}`)}`;
         neon2 -= parseInt(`${neon2}`) + 3;
      }
       let graphicsJ = String.fromCharCode(109,105,115,115,101,115,95,115,95,52,54,0);
       let relatedj = String.fromCharCode(108,111,110,103,105,116,117,100,101,95,98,95,52,53,0);
          let viewerR = 3.0;
         station9 += `${((recommendationR ? 4 : 1))}`;
         viewerR += parseInt(`${viewerR}`);
      while (gpay5.endsWith(gesturet)) {
         gesturet += `${policyP.length}`;
         break;
      }
      let uimanagerF = 7157986 <= relatedj.length;
      do {
         relatedj = `${station9.length << (Math.min(3, policyP.length))}`;
         if (uimanagerF) {
            break;
         }
      } while (uimanagerF && (relatedj.length >= gesturet.length));
      let googlel = relatedj.length >= 9095163;
      do {
          let libavdevicep = 0.0;
         relatedj = `${3 | gpay5.length}`;
         libavdevicep -= parseFloat(`${parseInt(`${libavdevicep}`)}`);
         if (googlel) {
            break;
         }
      } while (googlel && (relatedj.length == 3));
      for (let n = 0; n < 1; n++) {
         graphicsJ = `${station9.length - 2}`;
      }
      if (!station9.startsWith(`${recommendationR}`)) {
         recommendationR = gesturet == gpay5;
      }
      if (gesturet == graphicsJ) {
          let readu = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,99,95,54,54,0);
          let chinau = 3.0;
          let taiwanB = 1;
          let mountingy = 1.0;
         graphicsJ = "3";
         readu = `${taiwanB}`;
         chinau += 3;
         taiwanB &= parseInt(`${mountingy}`) ^ 3;
         mountingy *= parseFloat(`${parseInt(`${chinau}`) / 1}`);
      }
         graphicsJ += `${(String.fromCharCode(54,0) == relatedj ? graphicsJ.length : relatedj.length)}`;
         policyP = [relatedj.length - station9.length];
      sideb *= 1;
      if (unselectedq) {
         break;
      }
   } while (unselectedq && (4.32 > (buildq - 3.0) || (sideb - buildq) > 3.0));
      sportp %= Math.max(1, tinit_c9.length / 2);

    onHandleFullScreen();
  };

  const goBack = () => {
       let becomeK = String.fromCharCode(100,95,52,54,95,111,100,100,0);
    let back9 = 2.0;
    let holderp = String.fromCharCode(110,95,51,52,95,114,101,100,105,114,101,99,116,105,111,110,0);
    let yingt = 2;
    let zoomZ = String.fromCharCode(116,95,53,95,115,113,108,105,116,101,112,97,103,101,114,0);
    let sinaT = String.fromCharCode(117,110,115,97,118,101,100,95,98,95,57,50,0);
    let neon7 = String.fromCharCode(114,101,112,108,97,99,105,110,103,95,57,95,51,49,0);
    let viewsu = String.fromCharCode(105,95,57,56,95,100,101,110,111,105,115,101,0);
    let aboutN = 0.0;
    let imagemanagerq = String.fromCharCode(97,95,54,55,95,110,101,116,0);
    let animationL = String.fromCharCode(97,95,56,51,95,115,101,116,117,112,100,0);
    let libreanimatedF = String.fromCharCode(122,95,49,48,0);
      becomeK = `${yingt}`;
       let trashG = false;
      let maile = trashG ? !trashG : trashG;
      do {
          let cancelV: Array<any> = [376, 775];
         trashG = cancelV.length >= 36;
         if (maile) {
            break;
         }
      } while (maile && (trashG));
      for (let p = 0; p < 3; p++) {
         trashG = (trashG ? !trashG : trashG);
      }
      if (!trashG || trashG) {
         trashG = !trashG;
      }
      neon7 += `${viewsu.length}`;
   let foregroundr = String.fromCharCode(113,119,98,97,50,98,49,106,122,97,0) == sinaT;
   do {
      sinaT += `${becomeK.length}`;
      if (foregroundr) {
         break;
      }
   } while ((sinaT.length > 4) && foregroundr);
   while (yingt >= viewsu.length) {
       let largej = String.fromCharCode(112,105,110,99,104,105,110,103,95,103,95,51,48,0);
       let inviteV: Array<any> = [String.fromCharCode(100,105,115,97,112,112,101,97,114,101,100,95,50,95,54,54,0), String.fromCharCode(99,111,108,115,112,97,110,95,101,95,48,0), String.fromCharCode(113,95,54,55,95,99,111,110,110,101,99,116,0)];
       let untick0 = String.fromCharCode(116,111,112,105,99,97,108,95,106,95,54,0);
       let config7 = true;
      if (3 <= untick0.length) {
          let themeB = true;
          let footballv = 2.0;
          let hongkong6 = String.fromCharCode(108,95,49,50,95,119,105,100,116,104,0);
          let currentp = String.fromCharCode(98,95,52,57,95,99,105,112,104,101,114,98,121,110,97,109,101,0);
         untick0 += `${(currentp == String.fromCharCode(120,0) ? currentp.length : largej.length)}`;
         themeB = 45.73 <= footballv || !themeB;
         footballv -= parseInt(`${footballv}`) / 1;
         hongkong6 = `${parseInt(`${footballv}`) / (Math.max(2, hongkong6.length))}`;
      }
      for (let s = 0; s < 2; s++) {
         untick0 += `${((config7 ? 2 : 4) >> (Math.min(Math.abs(2), 3)))}`;
      }
       let detaild = String.fromCharCode(99,111,114,111,117,116,105,110,101,95,116,95,49,53,0);
      let single8 = config7 ? !config7 : config7;
      do {
         config7 = (22 >= (detaild.length - (config7 ? 22 : detaild.length)));
         if (single8) {
            break;
         }
      } while (single8 && (untick0.length > 1));
         untick0 = "2";
         detaild += `${1 << (Math.min(5, untick0.length))}`;
          let roomc = String.fromCharCode(118,101,99,116,111,114,115,99,111,112,101,95,55,95,54,53,0);
         inviteV.push((String.fromCharCode(57,0) == largej ? roomc.length : largej.length));
       let splashn: Array<any> = [700, 674];
          let privacyB = 3.0;
          let controlsL: Array<any> = [String.fromCharCode(112,95,49,49,95,98,100,119,110,0), String.fromCharCode(104,95,49,56,95,114,101,100,101,109,112,116,105,111,110,0), String.fromCharCode(109,95,54,49,95,115,99,113,117,101,114,121,0)];
         detaild += `${(untick0 == String.fromCharCode(76,0) ? splashn.length : untick0.length)}`;
         privacyB += parseFloat(`${controlsL.length}`);
         controlsL.push(parseInt(`${privacyB}`));
       let filed_ = String.fromCharCode(112,95,53,57,0);
       let tickedv = String.fromCharCode(99,95,52,49,95,115,116,97,116,101,109,101,110,116,115,0);
      if ((inviteV.length >> (Math.min(detaild.length, 2))) >= 2 && 4 >= (inviteV.length >> (Math.min(Math.abs(2), 3)))) {
         detaild += `${((config7 ? 2 : 3))}`;
      }
       let langkeyF = 0.0;
      yingt >>= Math.min(Math.abs(1), 3);
      break;
   }
       let buffern = 5.0;
       let libflipperT: Array<any> = [922, 742, 10];
       let textD = 0;
      if ((buffern + 1.26) == 3.33) {
         libflipperT.push(libflipperT.length);
      }
       let q_centerg: Array<any> = [String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,49,95,52,52,0), String.fromCharCode(98,108,105,116,95,122,95,57,54,0), String.fromCharCode(103,95,57,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0)];
       let attributedstring2: Array<any> = [226, 915];
       let skipY = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,116,95,56,56,0);
       let privilege0 = String.fromCharCode(114,101,115,101,116,95,108,95,49,57,0);
      for (let v = 0; v < 2; v++) {
         attributedstring2.push(skipY.length);
      }
         skipY += `${1 - libflipperT.length}`;
         privilege0 += `${skipY.length}`;
         textD /= Math.max(3, libflipperT.length);
         attributedstring2 = [1];
         attributedstring2 = [attributedstring2.length << (Math.min(4, Math.abs(parseInt(`${buffern}`))))];
      yingt *= (neon7 == String.fromCharCode(115,0) ? libflipperT.length : neon7.length);
   for (let o = 0; o < 1; o++) {
       let condensedr = String.fromCharCode(97,121,111,117,116,95,101,95,52,48,0);
       let navigation4: Map<any, any> = new Map([[String.fromCharCode(116,97,114,103,101,116,115,95,52,95,51,49,0),281], [String.fromCharCode(98,117,105,108,100,95,109,95,49,49,0),935], [String.fromCharCode(109,111,109,101,110,116,117,109,95,48,95,55,0),762]]);
       let expiredg: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,107,105,99,107,101,100,0),String.fromCharCode(113,117,105,122,95,116,95,49,48,0)], [String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,102,95,57,53,0),String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,113,95,52,52,0)], [String.fromCharCode(98,95,50,54,95,100,101,110,111,105,115,101,114,0),String.fromCharCode(99,104,101,99,107,112,111,105,110,116,115,95,116,95,54,54,0)]]);
       let libglogS = 1;
       let middlej = 5.0;
          let invite0 = 2.0;
         libglogS *= 2;
         invite0 *= parseInt(`${invite0}`);
          let launch7 = String.fromCharCode(121,95,49,51,95,110,111,114,109,97,108,105,115,101,0);
         libglogS &= libglogS;
         launch7 = `${(String.fromCharCode(121,0) == launch7 ? launch7.length : launch7.length)}`;
      let incidentz = 6351539 >= navigation4.size;
      do {
         navigation4.set(condensedr, condensedr.length ^ 1);
         if (incidentz) {
            break;
         }
      } while ((condensedr.includes(`${navigation4.size}`)) && incidentz);
       let screenU = String.fromCharCode(112,105,99,109,101,109,115,101,116,95,49,95,55,50,0);
       let comment5 = String.fromCharCode(100,101,112,111,115,105,116,95,121,95,55,52,0);
      if (!condensedr.startsWith(`${middlej}`)) {
         condensedr += `${(comment5 == String.fromCharCode(53,0) ? comment5.length : expiredg.size)}`;
      }
         condensedr += `${libglogS >> (Math.min(Math.abs(3), 5))}`;
          let promotionA = false;
         comment5 += `${condensedr.length * libglogS}`;
         promotionA = (!promotionA ? !promotionA : promotionA);
       let resend3 = String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,114,95,52,49,0);
       let vietnamf = String.fromCharCode(106,95,50,53,95,102,114,97,109,101,115,101,116,116,101,114,0);
      for (let k = 0; k < 2; k++) {
         navigation4 = new Map([[condensedr, 2 & condensedr.length]]);
      }
       let plashN: Map<any, any> = new Map([[String.fromCharCode(109,95,52,56,95,112,97,105,110,116,105,110,103,0),754], [String.fromCharCode(99,100,110,95,112,95,55,0),611], [String.fromCharCode(117,110,117,115,101,100,95,107,95,57,48,0),527]]);
      while (1 <= (expiredg.size & 3) && (3 & libglogS) <= 4) {
         libglogS %= Math.max(2, 1);
         break;
      }
      for (let n = 0; n < 2; n++) {
          let robotoS = false;
         expiredg.set(comment5, comment5.length);
         robotoS = robotoS || robotoS;
      }
         vietnamf = `${(String.fromCharCode(114,0) == comment5 ? navigation4.size : comment5.length)}`;
      for (let i = 0; i < 2; i++) {
          let libreactnativejnie = 5.0;
         expiredg.set(comment5, 1 | comment5.length);
         libreactnativejnie /= Math.max(parseFloat(`${parseInt(`${libreactnativejnie}`)}`), 1);
      }
         vietnamf += "2";
      viewsu += "1";
   }
   if (neon7 == sinaT) {
       let subsc = String.fromCharCode(116,104,114,101,101,95,102,95,52,57,0);
       let libfabricjniK = 5.0;
         libfabricjniK -= 2;
          let fieldQ = 2;
         libfabricjniK += parseInt(`${libfabricjniK}`) >> (Math.min(Math.abs(1), 1));
         fieldQ |= fieldQ % 3;
          let emptyA = 3.0;
          let libcrashsdkH = true;
          let miniC = String.fromCharCode(101,120,116,114,101,109,117,109,95,115,95,57,49,0);
         libfabricjniK += miniC.length - subsc.length;
         emptyA /= Math.max(2, (parseInt(`${emptyA}`) << (Math.min(1, Math.abs((libcrashsdkH ? 2 : 4))))));
         libcrashsdkH = !libcrashsdkH;
         miniC = `${(parseInt(`${emptyA}`) + (libcrashsdkH ? 4 : 3))}`;
      if ((3 - subsc.length) >= 4 || 2.90 >= (libfabricjniK / (Math.max(subsc.length, 3)))) {
         subsc += `${subsc.length}`;
      }
         subsc = `${3 / (Math.max(5, parseInt(`${libfabricjniK}`)))}`;
       let finit_yO: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,101,100,95,51,95,54,56,0),String.fromCharCode(105,95,56,54,0)], [String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,118,95,50,0),String.fromCharCode(99,95,53,53,95,114,101,99,121,99,108,101,0)], [String.fromCharCode(97,109,112,108,105,116,117,100,101,95,49,95,56,55,0),String.fromCharCode(114,101,115,105,100,117,101,115,95,54,95,51,49,0)]]);
      sinaT = `${subsc.length ^ parseInt(`${back9}`)}`;
   }
       let oranger: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,100,99,115,99,116,112,0),String.fromCharCode(113,95,49,53,95,105,110,116,101,110,116,115,0)], [String.fromCharCode(119,95,51,50,95,102,105,102,111,0),String.fromCharCode(113,95,56,57,95,115,105,116,101,0)]]);
         oranger.set(`${oranger.size}`, oranger.size - oranger.size);
      let libavdevicek = 5459785 >= oranger.size;
      do {
         oranger = new Map([[`${oranger.size}`, oranger.size]]);
         if (libavdevicek) {
            break;
         }
      } while (libavdevicek && ((oranger.size & oranger.size) < 2 && 2 < (oranger.size & oranger.size)));
         oranger = new Map([[`${oranger.size}`, oranger.size]]);
      viewsu += `${neon7.length & 1}`;
       let sportk: Map<any, any> = new Map([[String.fromCharCode(107,95,52,95,99,111,112,121,0),false ], [String.fromCharCode(121,95,55,53,95,115,111,114,116,0),false ]]);
       let collectionk = String.fromCharCode(117,110,122,116,101,108,108,95,56,95,56,55,0);
      for (let s = 0; s < 1; s++) {
         collectionk = "2";
      }
          let libfbO = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,51,95,56,57,0);
         sportk = new Map([[collectionk, collectionk.length]]);
         libfbO = `${libfbO.length}`;
          let homez = true;
          let arrowr: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,115,104,101,101,116,95,116,95,53,0),19], [String.fromCharCode(122,97,108,108,111,99,95,116,95,56,52,0),217], [String.fromCharCode(115,101,113,118,105,100,101,111,95,98,95,55,51,0),431]]);
          let flyer6 = String.fromCharCode(114,101,109,111,116,101,108,121,95,54,95,54,0);
         collectionk += `${arrowr.size}`;
         homez = (9 > (flyer6.length ^ (!homez ? flyer6.length : 9)));
         arrowr = new Map([[`${homez}`, (String.fromCharCode(57,0) == flyer6 ? flyer6.length : (homez ? 4 : 4))]]);
          let libreacty = String.fromCharCode(108,95,49,49,95,103,101,110,99,102,103,115,0);
         sportk = new Map([[collectionk, (libreacty == String.fromCharCode(82,0) ? libreacty.length : collectionk.length)]]);
      for (let u = 0; u < 2; u++) {
         collectionk = "2";
      }
      let emojij = sportk.size <= 4946846;
      do {
         sportk = new Map([[`${sportk.size}`, (String.fromCharCode(65,0) == collectionk ? collectionk.length : sportk.size)]]);
         if (emojij) {
            break;
         }
      } while ((5 > (sportk.size ^ collectionk.length) || (5 ^ collectionk.length) > 2) && emojij);
      holderp = `${zoomZ.length - becomeK.length}`;
   for (let j = 0; j < 1; j++) {
      aboutN /= Math.max(2, imagemanagerq.length);
   }
   while ((yingt * viewsu.length) >= 2) {
       let runtimeschedulers = String.fromCharCode(109,101,97,115,117,114,105,110,103,95,50,95,55,0);
       let vietnamJ = 3.0;
       let gemfileW: Map<any, any> = new Map([[String.fromCharCode(98,95,55,51,95,100,101,102,97,117,108,0),285], [String.fromCharCode(113,95,51,52,95,97,108,112,104,97,108,101,115,115,0),639]]);
       let mbnativeadvanced3 = 4.0;
       let carouselW = 2.0;
       let libfabricjniM = 1.0;
          let t_managerJ = String.fromCharCode(122,111,111,109,101,100,95,106,95,56,55,0);
          let flipperr = 4.0;
          let settingsx = String.fromCharCode(111,95,49,95,102,108,97,99,0);
         libfabricjniM -= parseFloat(`${parseInt(`${carouselW}`) ^ 1}`);
         t_managerJ = "2";
         flipperr *= parseFloat(`${1 ^ parseInt(`${flipperr}`)}`);
         settingsx += `${3 | parseInt(`${flipperr}`)}`;
         carouselW -= parseFloat(`${1 - gemfileW.size}`);
      if (1.19 <= (carouselW / 3.8)) {
         carouselW *= parseFloat(`${1}`);
      }
       let libavfilterl = false;
          let p_titler = String.fromCharCode(98,95,49,54,95,101,120,116,114,97,0);
          let armvan = String.fromCharCode(116,95,53,50,95,105,110,111,117,116,0);
          let fille: Array<any> = [633, 262];
         carouselW /= Math.max(2, parseFloat(`${parseInt(`${carouselW}`) >> (Math.min(5, Math.abs(3)))}`));
         p_titler = "1";
         armvan = `${armvan.length}`;
         fille = [3 | fille.length];
         gemfileW = new Map([[`${libavfilterl}`, parseInt(`${mbnativeadvanced3}`) & 2]]);
      let modityl = gemfileW.size >= 7275057;
      do {
         gemfileW.set(`${vietnamJ}`, ((libavfilterl ? 1 : 4) ^ parseInt(`${vietnamJ}`)));
         if (modityl) {
            break;
         }
      } while (modityl && (5 <= (gemfileW.size / (Math.max(runtimeschedulers.length, 4))) && (5 / (Math.max(10, gemfileW.size))) <= 1));
      yingt <<= Math.min(Math.abs(zoomZ.length | runtimeschedulers.length), 3);
      break;
   }
       let pointJ = 4;
       let redirectD: Array<any> = [163, 937];
         pointJ ^= 1;
      while (redirectD.includes(pointJ)) {
         pointJ -= 2;
         break;
      }
       let update_t_k = true;
       let moonW = true;
         redirectD = [redirectD.length];
      if (3 >= redirectD.length && (redirectD.length / (Math.max(3, 1))) >= 3) {
          let canvaso = 5;
          let codegent: Array<any> = [String.fromCharCode(116,114,120,116,95,103,95,53,51,0), String.fromCharCode(108,95,55,54,95,98,101,114,110,111,117,108,108,105,0), String.fromCharCode(114,116,112,102,98,95,53,95,51,54,0)];
          let ajaxc: Array<any> = [224, 524, 543];
          let gray2 = 4.0;
         redirectD = [ajaxc.length ^ codegent.length];
         canvaso -= parseInt(`${gray2}`);
         codegent = [parseInt(`${gray2}`)];
         ajaxc = [3 / (Math.max(8, canvaso))];
      }
         redirectD = [pointJ >> (Math.min(3, Math.abs(3)))];
      becomeK = `${parseInt(`${back9}`)}`;
   while (sinaT.length < 5) {
       let sidex = 0.0;
       let langkeyt: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,101,110,116,95,104,95,54,52,0),305], [String.fromCharCode(119,95,50,51,95,100,105,97,108,111,103,115,0),735], [String.fromCharCode(109,97,112,108,105,109,105,116,95,105,95,53,49,0),346]]);
       let flyerc = 5.0;
         sidex += parseInt(`${flyerc}`) & langkeyt.size;
         langkeyt = new Map([[`${langkeyt.size}`, parseInt(`${flyerc}`)]]);
         langkeyt = new Map([[`${langkeyt.size}`, langkeyt.size & 2]]);
          let materialN = String.fromCharCode(101,110,117,109,95,48,95,50,48,0);
          let statsk = 0;
          let back9h: Map<any, any> = new Map([[String.fromCharCode(105,95,53,49,95,117,110,98,111,117,110,100,0),870], [String.fromCharCode(101,120,116,101,114,105,111,114,95,114,95,52,49,0),202]]);
         langkeyt.set(`${sidex}`, 3);
         materialN += `${statsk}`;
         statsk *= 3 - materialN.length;
         back9h.set(`${statsk}`, statsk);
         flyerc -= parseFloat(`${parseInt(`${sidex}`)}`);
         langkeyt = new Map([[`${langkeyt.size}`, 1 + parseInt(`${sidex}`)]]);
      if (1.93 > (langkeyt.size - sidex) && 4 > (langkeyt.size - parseInt(`${sidex}`))) {
          let hiadu = 5;
          let textz = String.fromCharCode(97,95,56,56,95,98,112,114,105,110,116,0);
          let zoomF = false;
          let mutedQ = 5;
         sidex /= Math.max(1, 3);
         hiadu &= ((zoomF ? 1 : 5) / (Math.max(textz.length, 5)));
         textz += `${(String.fromCharCode(51,0) == textz ? hiadu : textz.length)}`;
         zoomF = (54 > (textz.length >> (Math.min(4, Math.abs((zoomF ? 54 : textz.length))))));
         mutedQ &= textz.length;
      }
         flyerc /= Math.max(parseFloat(`${1 ^ parseInt(`${flyerc}`)}`), 1);
      while (!Array.from(langkeyt.keys()).includes(`${flyerc}`)) {
         langkeyt.set(`${sidex}`, langkeyt.size + parseInt(`${sidex}`));
         break;
      }
      sinaT = `${langkeyt.size}`;
      break;
   }

    delayControls();

      imagemanagerq += `${becomeK.length}`;
   let libcrashsdkl = 6660556.0 >= back9;
   do {
      back9 *= neon7.length % 3;
      if (libcrashsdkl) {
         break;
      }
   } while (((back9 / (Math.max(10, becomeK.length))) == 2.81 || (back9 / (Math.max(becomeK.length, 4))) == 2.81) && libcrashsdkl);
      sinaT = "1";
      yingt /= Math.max(4, 2);
       let sharedw = 5.0;
      while (sharedw < 4.3) {
         sharedw -= parseFloat(`${parseInt(`${sharedw}`)}`);
         break;
      }
      while (2.71 >= (5.21 + sharedw)) {
          let photoE = true;
          let statsf: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,95,106,95,54,53,0),String.fromCharCode(100,111,99,105,100,95,120,95,53,52,0)], [String.fromCharCode(98,114,97,99,107,101,116,115,95,113,95,53,54,0),String.fromCharCode(97,95,53,48,95,111,112,116,105,109,105,122,101,0)], [String.fromCharCode(101,120,97,109,105,110,101,95,111,95,51,51,0),String.fromCharCode(109,117,108,116,105,101,110,100,95,113,95,55,48,0)]]);
         sharedw += parseFloat(`${parseInt(`${sharedw}`) | 2}`);
         photoE = photoE && statsf.size >= 67;
         statsf.set(`${photoE}`, (statsf.size << (Math.min(1, Math.abs((photoE ? 1 : 4))))));
         break;
      }
      let fileZ = 7161838.0 >= sharedw;
      do {
         sharedw /= Math.max(parseFloat(`${parseInt(`${sharedw}`) / 3}`), 2);
         if (fileZ) {
            break;
         }
      } while (fileZ && (sharedw > sharedw));
      holderp += `${(String.fromCharCode(56,0) == imagemanagerq ? parseInt(`${sharedw}`) : imagemanagerq.length)}`;
       let projectC = String.fromCharCode(105,112,112,108,101,95,55,95,54,54,0);
       let constantsS = String.fromCharCode(100,95,57,52,95,115,121,110,99,104,114,111,110,105,122,101,0);
      if (constantsS.length > 2) {
         projectC += `${projectC.length}`;
      }
      for (let q = 0; q < 2; q++) {
          let u_manager1 = String.fromCharCode(99,97,99,104,101,95,116,95,55,51,0);
          let tumbnailG: Map<any, any> = new Map([[String.fromCharCode(112,95,57,95,117,115,101,114,110,97,109,101,0),603], [String.fromCharCode(101,98,117,108,97,115,95,120,95,51,56,0),72]]);
          let type_gN: Array<any> = [716, 514, 168];
         projectC = `${constantsS.length}`;
         u_manager1 += "1";
         tumbnailG = new Map([[`${tumbnailG.size}`, u_manager1.length]]);
         type_gN.push(type_gN.length);
      }
      if (constantsS.length >= 1) {
         constantsS = `${constantsS.length * projectC.length}`;
      }
      let libzeusU = projectC.length >= 8107902;
      do {
          let greyZ = String.fromCharCode(99,95,56,48,95,100,101,99,107,108,105,110,107,0);
          let side3: Array<any> = [614, 697];
         projectC = `${projectC.length % 1}`;
         greyZ += `${(String.fromCharCode(118,0) == greyZ ? side3.length : greyZ.length)}`;
         side3.push(side3.length);
         if (libzeusU) {
            break;
         }
      } while ((projectC.length <= constantsS.length) && libzeusU);
      for (let a = 0; a < 1; a++) {
         projectC += `${constantsS.length - 1}`;
      }
       let awayh = true;
      aboutN -= projectC.length | 3;
      holderp += `${parseInt(`${back9}`)}`;
   if (aboutN >= becomeK.length) {
       let t_position6 = String.fromCharCode(110,95,51,48,95,112,111,108,121,103,111,110,0);
          let awayb: Array<any> = [373, 920, 810];
         t_position6 = `${awayb.length}`;
      if (t_position6.length < 5) {
         t_position6 += `${(String.fromCharCode(86,0) == t_position6 ? t_position6.length : t_position6.length)}`;
      }
         t_position6 += `${(t_position6 == String.fromCharCode(75,0) ? t_position6.length : t_position6.length)}`;
      becomeK += `${sinaT.length}`;
   }
   while (holderp != animationL) {
      animationL += `${imagemanagerq.length & 3}`;
      break;
   }
      sinaT = "3";
   while ((4.78 * back9) < 1.71 && 3.15 < (back9 * 4.78)) {
      becomeK += `${(String.fromCharCode(87,0) == holderp ? neon7.length : holderp.length)}`;
      break;
   }
   while (4 == (2 % (Math.max(5, yingt))) || 2 == (holderp.length % (Math.max(4, yingt)))) {
      yingt -= imagemanagerq.length ^ 3;
      break;
   }
      sinaT = "3";
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
       let team9 = 0;
    let libavutilW = false;
    let manifestc = 1.0;
    let profileg = String.fromCharCode(99,111,109,98,105,110,101,114,95,104,95,54,0);
    let libfollyY: Map<any, any> = new Map([[String.fromCharCode(112,95,50,54,95,115,117,112,112,114,101,115,115,105,111,110,0),String.fromCharCode(121,95,51,55,95,99,105,112,104,101,114,116,101,120,116,0)], [String.fromCharCode(117,116,109,111,115,116,95,118,95,51,52,0),String.fromCharCode(98,95,55,50,95,116,101,115,101,100,103,101,0)]]);
    let controlsY = 3;
    let about7: Array<any> = [324, 460, 885];
   while (2.23 < manifestc) {
      manifestc += about7.length;
      break;
   }
   let videoh = 7082109 >= libfollyY.size;
   do {
      libfollyY.set(`${team9}`, 3 ^ team9);
      if (videoh) {
         break;
      }
   } while (videoh && (4 >= (controlsY << (Math.min(Math.abs(1), 5)))));
   if (!about7.includes(manifestc)) {
      about7.push(1);
   }
   while ((1 / (Math.max(8, team9))) >= 1 && (1 / (Math.max(3, team9))) >= 3) {
       let greyd = 2;
      for (let q = 0; q < 2; q++) {
         greyd <<= Math.min(4, Math.abs(1 >> (Math.min(3, Math.abs(greyd)))));
      }
         greyd /= Math.max(1, 5);
      while (4 < (4 << (Math.min(1, Math.abs(greyd))))) {
         greyd *= greyd >> (Math.min(1, Math.abs(greyd)));
         break;
      }
      controlsY += controlsY;
      break;
   }
   for (let z = 0; z < 2; z++) {
      controlsY >>= Math.min(Math.abs(parseInt(`${manifestc}`)), 1);
   }
   let fnewarchdefaultso = 9785304.0 >= manifestc;
   do {
      manifestc *= 1 * about7.length;
      if (fnewarchdefaultso) {
         break;
      }
   } while (fnewarchdefaultso && ((manifestc / 4.2) < 5.20));
      profileg += `${libfollyY.size}`;
   let playlist_ = libfollyY.size <= 5999356;
   do {
      libfollyY.set(`${controlsY}`, about7.length / (Math.max(1, 3)));
      if (playlist_) {
         break;
      }
   } while (((libfollyY.size / (Math.max(3, 1))) == 3) && playlist_);
      manifestc /= Math.max(1, about7.length);
      team9 <<= Math.min(Math.abs(2 | parseInt(`${manifestc}`)), 5);
      libfollyY.set(`${about7.length}`, libfollyY.size << (Math.min(Math.abs(3), 5)));
   if ((profileg.length | 3) >= 2) {
       let countdownC = 2.0;
       let themeo = 1;
         countdownC -= parseInt(`${countdownC}`) * 1;
      while (countdownC == themeo) {
         themeo <<= Math.min(Math.abs(parseInt(`${countdownC}`) << (Math.min(4, Math.abs(1)))), 1);
         break;
      }
      let untickJ = 6503076.0 <= countdownC;
      do {
         countdownC *= 2 & themeo;
         if (untickJ) {
            break;
         }
      } while (untickJ && (countdownC >= 2.7));
      if (themeo == 5) {
         countdownC *= themeo ^ 1;
      }
      for (let z = 0; z < 3; z++) {
          let componentregistryS = String.fromCharCode(109,97,120,98,105,116,114,97,116,101,95,116,95,52,51,0);
         countdownC += 3;
         componentregistryS = `${componentregistryS.length}`;
      }
      while ((4.73 - countdownC) >= 4.100) {
          let p_managera = 3.0;
          let larget = 0.0;
          let reactnativejsj = 5;
          let libfabricjni6 = 4;
          let selectedd = 3.0;
         countdownC -= parseInt(`${countdownC}`) | parseInt(`${larget}`);
         p_managera *= parseFloat(`${libfabricjni6}`);
         larget -= parseFloat(`${3 * parseInt(`${selectedd}`)}`);
         reactnativejsj &= reactnativejsj ^ 3;
         libfabricjni6 /= Math.max(parseInt(`${p_managera}`), 1);
         selectedd += parseFloat(`${parseInt(`${p_managera}`) - libfabricjni6}`);
         break;
      }
      profileg += `${((libavutilW ? 4 : 3) & parseInt(`${countdownC}`))}`;
   }

    setShowControls(!showControls);

   if (team9 > about7.length) {
      about7 = [profileg.length];
   }
      about7.push(1 & about7.length);
      manifestc /= Math.max(2, (team9 & (libavutilW ? 1 : 4)));
   let selectedk = libavutilW ? !libavutilW : libavutilW;
   do {
      libavutilW = about7.includes(controlsY);
      if (selectedk) {
         break;
      }
   } while ((1.17 >= (2.98 / (Math.max(4, manifestc))) || !libavutilW) && selectedk);
   while (5 <= (libfollyY.size - 5) && (5 - libfollyY.size) <= 3) {
      libfollyY.set(`${team9}`, team9 ^ 1);
      break;
   }
   while ((controlsY / (Math.max(about7.length, 9))) == 1) {
      controlsY /= Math.max(parseInt(`${manifestc}`) / (Math.max(libfollyY.size, 2)), 4);
      break;
   }
   while (!Array.from(libfollyY.keys()).includes(`${about7.length}`)) {
       let regengU = 3.0;
         regengU -= parseFloat(`${parseInt(`${regengU}`)}`);
      for (let v = 0; v < 2; v++) {
         regengU /= Math.max(parseFloat(`${2}`), 3);
      }
      while ((1.29 - regengU) == 5.69 && 4.77 == (regengU / 1.29)) {
         regengU += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${regengU}`)), 4))}`);
         break;
      }
      libfollyY = new Map([[`${regengU}`, parseInt(`${regengU}`) + 2]]);
      break;
   }
      controlsY *= 2 << (Math.min(Math.abs(team9), 1));
   let ewardedy = 6956104 <= profileg.length;
   do {
       let internet4 = String.fromCharCode(120,95,53,55,95,115,116,114,108,0);
       let becomea = true;
          let sendR = String.fromCharCode(116,95,50,49,95,115,117,98,112,105,120,101,108,0);
         internet4 += `${((becomea ? 4 : 3) << (Math.min(sendR.length, 1)))}`;
      let alertd = becomea ? !becomea : becomea;
      do {
         becomea = internet4.length < 74;
         if (alertd) {
            break;
         }
      } while (alertd && (5 <= internet4.length));
      let statisticsS = 5624268 >= internet4.length;
      do {
          let clubp = 5;
          let brightnessg = true;
          let recommendationF = 0;
         internet4 = `${2 >> (Math.min(Math.abs(clubp), 3))}`;
         clubp %= Math.max(1, (recommendationF + (brightnessg ? 4 : 3)));
         brightnessg = !brightnessg || 29 > recommendationF;
         if (statisticsS) {
            break;
         }
      } while ((!becomea) && statisticsS);
       let klevinT = String.fromCharCode(115,95,51,56,95,120,112,97,116,104,0);
      let accepted6 = internet4.length <= 5163817;
      do {
          let nativew = 5;
          let chinae = String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,114,95,56,52,0);
          let roundm = 3;
          let libreactnativejnip = 2.0;
         internet4 += `${chinae.length << (Math.min(2, Math.abs(nativew)))}`;
         nativew >>= Math.min(Math.abs(roundm ^ parseInt(`${libreactnativejnip}`)), 2);
         chinae += `${parseInt(`${libreactnativejnip}`)}`;
         roundm += roundm;
         if (accepted6) {
            break;
         }
      } while ((!internet4.startsWith(`${becomea}`)) && accepted6);
       let become7 = String.fromCharCode(99,95,53,48,95,97,109,114,119,98,100,101,99,0);
       let cancelp = String.fromCharCode(110,111,118,101,99,95,118,95,55,50,0);
      profileg += `${internet4.length ^ controlsY}`;
      if (ewardedy) {
         break;
      }
   } while ((4 <= controlsY) && ewardedy);
   let becomeQ = libavutilW ? !libavutilW : libavutilW;
   do {
       let turnv = 0.0;
       let favoriteq: Map<any, any> = new Map([[String.fromCharCode(115,95,54,49,95,114,101,115,101,97,114,99,104,0),String.fromCharCode(122,95,56,53,95,102,97,109,105,108,121,0)], [String.fromCharCode(112,95,57,52,95,99,111,110,110,0),String.fromCharCode(116,95,50,95,99,105,112,104,101,114,98,121,110,105,100,0)], [String.fromCharCode(102,95,57,55,95,112,104,114,97,115,101,0),String.fromCharCode(114,95,56,51,95,115,99,97,116,116,101,114,0)]]);
       let suggestiong = false;
       let calendarw = String.fromCharCode(119,95,49,48,95,116,114,116,97,98,108,101,0);
       let hongkongL = String.fromCharCode(113,95,49,95,108,105,98,115,114,116,0);
      if ((favoriteq.size * 4) == 1) {
         favoriteq = new Map([[calendarw, ((suggestiong ? 2 : 1) % 2)]]);
      }
         hongkongL = `${1 | favoriteq.size}`;
      for (let c = 0; c < 1; c++) {
          let singlew = String.fromCharCode(115,117,98,109,105,116,95,56,95,51,49,0);
          let tempX = true;
          let modelsX = String.fromCharCode(106,117,115,116,95,98,95,56,52,0);
          let settingsc: Array<any> = [String.fromCharCode(119,95,51,48,95,105,116,101,114,97,116,105,111,110,115,0), String.fromCharCode(114,101,97,99,104,95,54,95,54,52,0), String.fromCharCode(98,95,56,48,95,97,108,116,101,114,110,97,116,105,111,110,0)];
         calendarw = "1";
         singlew += `${settingsc.length}`;
         tempX = singlew.length >= settingsc.length;
         modelsX += `${modelsX.length}`;
      }
          let hongkongo: Array<any> = [411, 893, 237];
          let overlays = String.fromCharCode(118,95,49,53,95,115,109,97,99,107,101,114,0);
          let macauU: Map<any, any> = new Map([[String.fromCharCode(116,104,101,114,101,117,109,95,57,95,56,55,0),801], [String.fromCharCode(120,95,52,52,95,100,111,112,115,0),475], [String.fromCharCode(111,95,49,52,95,102,111,114,103,111,116,0),615]]);
         hongkongL += `${((suggestiong ? 3 : 2))}`;
         hongkongo = [hongkongo.length - 2];
         overlays = `${hongkongo.length}`;
         macauU = new Map([[`${hongkongo.length}`, (String.fromCharCode(113,0) == overlays ? overlays.length : hongkongo.length)]]);
      libavutilW = profileg.length <= controlsY;
      turnv += parseInt(`${turnv}`);
      if (becomeQ) {
         break;
      }
   } while (((2 << (Math.min(1, Math.abs(libfollyY.size)))) < 2 || libfollyY.size < 2) && becomeQ);
       let episodef = String.fromCharCode(114,95,55,56,95,99,111,117,110,116,101,114,0);
       let teamp = String.fromCharCode(113,117,97,110,116,105,116,121,95,107,95,50,51,0);
      if (!episodef.startsWith(teamp)) {
          let loadingn = 2.0;
          let sport_ = 1;
         episodef = `${(String.fromCharCode(79,0) == teamp ? episodef.length : teamp.length)}`;
         loadingn /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${loadingn}`)), 3))}`), 1);
         sport_ %= Math.max(sport_, 5);
      }
         episodef += "2";
      while (episodef != String.fromCharCode(72,0)) {
          let soundw = 5.0;
          let strI: Array<any> = [String.fromCharCode(118,95,51,51,95,112,114,101,100,105,99,116,0), String.fromCharCode(107,110,111,99,107,111,117,116,95,53,95,55,49,0)];
          let membershipP = 2.0;
          let androidC = 2.0;
          let mailw = String.fromCharCode(107,98,100,119,105,110,95,100,95,48,0);
         teamp = "2";
         soundw *= parseFloat(`${strI.length}`);
         strI = [parseInt(`${membershipP}`)];
         membershipP += strI.length ^ parseInt(`${soundw}`);
         androidC -= parseInt(`${androidC}`);
         mailw += `${parseInt(`${androidC}`) / 1}`;
         break;
      }
       let cancel3 = String.fromCharCode(104,95,50,95,105,110,112,117,116,115,0);
      for (let y = 0; y < 1; y++) {
         cancel3 = `${episodef.length % (Math.max(5, teamp.length))}`;
      }
         teamp += "1";
      controlsY /= Math.max(3, profileg.length);
      controlsY ^= libfollyY.size;
    delayControls();
  };

  const clearHidingDelay = () => {
       let episodesg: Map<any, any> = new Map([[String.fromCharCode(110,95,53,50,95,104,102,108,105,112,0),true ], [String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,52,95,56,55,0),false ]]);
    let libavdevice4 = 1.0;
    let streamingP: Map<any, any> = new Map([[String.fromCharCode(110,95,49,52,95,104,111,115,116,110,97,109,101,0),true ], [String.fromCharCode(114,95,57,56,95,98,121,116,101,115,116,114,105,110,103,0),false ]]);
    let singaporeX = String.fromCharCode(97,115,115,105,103,110,101,100,95,118,95,54,48,0);
    let shrinkA = String.fromCharCode(118,111,105,99,101,109,97,105,108,95,118,95,54,51,0);
    let clockc = String.fromCharCode(115,119,97,112,95,108,95,50,0);
    let combinedB = String.fromCharCode(114,101,109,105,120,95,107,95,54,57,0);
    let uimanagerv = String.fromCharCode(115,121,110,116,97,120,95,122,95,49,48,0);
    let shareh: Array<any> = [596, 790];
    let downloadr = 2;
    let brightnessy = String.fromCharCode(112,95,56,51,95,114,111,111,116,115,0);
    let custom1 = 4.0;
    let debugQ = String.fromCharCode(100,95,52,52,95,104,97,110,100,108,101,100,0);
       let skipT = String.fromCharCode(107,95,52,53,95,97,109,101,120,0);
       let final_vF = String.fromCharCode(113,95,50,54,95,113,117,97,108,105,102,105,101,114,115,0);
         final_vF = `${final_vF.length / 3}`;
      if (skipT != final_vF) {
         final_vF += `${skipT.length}`;
      }
         skipT = `${skipT.length * final_vF.length}`;
      let schedule8 = 7042023 >= skipT.length;
      do {
         skipT += `${skipT.length}`;
         if (schedule8) {
            break;
         }
      } while (schedule8 && (final_vF == String.fromCharCode(74,0)));
      while (skipT.length <= 1) {
         final_vF += `${skipT.length}`;
         break;
      }
         skipT = "1";
      clockc += `${(String.fromCharCode(50,0) == shrinkA ? shrinkA.length : episodesg.size)}`;
   if (shrinkA.length == clockc.length) {
      shrinkA = `${parseInt(`${libavdevice4}`) - clockc.length}`;
   }
      clockc = `${(String.fromCharCode(48,0) == shrinkA ? uimanagerv.length : shrinkA.length)}`;
      episodesg.set(singaporeX, (String.fromCharCode(111,0) == singaporeX ? singaporeX.length : shrinkA.length));
      uimanagerv += "2";
   for (let j = 0; j < 3; j++) {
      streamingP = new Map([[`${libavdevice4}`, parseInt(`${libavdevice4}`) * downloadr]]);
   }
      libavdevice4 -= parseFloat(`${singaporeX.length}`);
       let settingse = false;
       let latnt = 4.0;
          let verticalH = String.fromCharCode(99,111,100,101,99,112,97,114,95,100,95,55,50,0);
         latnt /= Math.max(((settingse ? 1 : 1) | parseInt(`${latnt}`)), 2);
         verticalH += `${1 % (Math.max(7, verticalH.length))}`;
      while (2.59 >= latnt) {
         settingse = latnt >= 45.79;
         break;
      }
      while (1.52 >= (latnt - 5.6) && 5.6 >= latnt) {
         settingse = !settingse;
         break;
      }
         settingse = !settingse || latnt <= 95.43;
         settingse = !settingse || 42.43 > latnt;
         latnt -= ((settingse ? 3 : 1) / (Math.max(parseInt(`${latnt}`), 1)));
      combinedB += `${parseInt(`${libavdevice4}`)}`;
   for (let i = 0; i < 2; i++) {
      clockc += `${2 + parseInt(`${libavdevice4}`)}`;
   }
       let rulesu = String.fromCharCode(101,110,99,105,112,104,101,114,95,113,95,53,48,0);
       let eacty = String.fromCharCode(101,95,53,48,95,118,97,114,105,110,102,111,0);
          let android2 = false;
          let huaweiF = String.fromCharCode(97,95,51,52,95,102,97,117,108,116,0);
         eacty = `${huaweiF.length}`;
      while (eacty != String.fromCharCode(104,0)) {
          let sliderq = String.fromCharCode(98,105,110,107,98,95,57,95,49,49,0);
          let statistics1 = String.fromCharCode(118,95,49,52,95,116,105,116,108,101,98,97,114,0);
         rulesu += `${3 - statistics1.length}`;
         sliderq = "1";
         statistics1 += "2";
         break;
      }
         eacty = `${eacty.length}`;
         rulesu = `${eacty.length - rulesu.length}`;
          let closeb = 1.0;
          let headerJ = String.fromCharCode(121,95,52,56,95,99,97,108,99,108,117,108,97,116,101,0);
         rulesu += `${rulesu.length}`;
         closeb += parseFloat(`${headerJ.length / (Math.max(9, parseInt(`${closeb}`)))}`);
         headerJ = `${3 % (Math.max(4, headerJ.length))}`;
       let short_2d: Array<any> = [634, 405];
      clockc = `${shareh.length ^ uimanagerv.length}`;
      downloadr |= 3;
   let zhubo3 = uimanagerv.length >= 8722959;
   do {
       let sheetm = 0.0;
       let mintegralD = String.fromCharCode(112,108,97,110,97,114,120,95,111,95,49,50,0);
      if (3.87 >= (1.100 + sheetm) || 3 >= (parseInt(`${sheetm}`) + mintegralD.length)) {
         mintegralD = `${mintegralD.length + 3}`;
      }
         sheetm *= 3 & parseInt(`${sheetm}`);
          let launcha = String.fromCharCode(111,95,49,48,48,95,119,97,108,107,116,104,114,111,117,103,104,0);
          let libreanimated9 = 3;
         mintegralD = "3";
         launcha += `${launcha.length}`;
         libreanimated9 /= Math.max(5, (String.fromCharCode(109,0) == launcha ? libreanimated9 : launcha.length));
      for (let z = 0; z < 3; z++) {
         mintegralD = `${parseInt(`${sheetm}`)}`;
      }
         mintegralD = `${mintegralD.length + parseInt(`${sheetm}`)}`;
      if (1 > (mintegralD.length + parseInt(`${sheetm}`))) {
         sheetm -= 3;
      }
      uimanagerv += `${clockc.length * episodesg.size}`;
      if (zhubo3) {
         break;
      }
   } while ((uimanagerv.length >= 5) && zhubo3);
      shrinkA += `${clockc.length}`;
   let gemfileT = combinedB == String.fromCharCode(116,48,55,112,0);
   do {
       let calendarJ = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,56,95,53,49,0);
       let textinputo = 1;
       let expandM = String.fromCharCode(109,95,54,54,95,106,111,105,110,101,100,0);
      while (5 <= textinputo) {
         expandM = `${2 - textinputo}`;
         break;
      }
      while ((textinputo & 5) >= 3 || (expandM.length & textinputo) >= 5) {
         textinputo += 2 ^ calendarJ.length;
         break;
      }
      for (let q = 0; q < 1; q++) {
         textinputo |= calendarJ.length;
      }
      let codegenl = 5147496 <= textinputo;
      do {
          let sheetH: Array<any> = [112, 212, 175];
          let libfbF = String.fromCharCode(108,95,55,53,95,102,105,108,101,110,97,109,101,0);
          let xadsdkU: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,116,95,55,52,0),147], [String.fromCharCode(97,95,49,57,95,115,116,97,114,116,0),829], [String.fromCharCode(107,95,50,50,95,112,97,108,109,0),966]]);
         textinputo ^= sheetH.length;
         sheetH = [xadsdkU.size + libfbF.length];
         libfbF = `${xadsdkU.size % (Math.max(libfbF.length, 2))}`;
         if (codegenl) {
            break;
         }
      } while (codegenl && (5 < (textinputo % 1) || 1 < (textinputo % (Math.max(expandM.length, 7)))));
         textinputo &= textinputo;
      while (calendarJ.startsWith(`${textinputo}`)) {
          let whistle7 = 0.0;
          let untickH = 5.0;
          let agreementE = true;
          let loadingS = 0;
         calendarJ = "2";
         whistle7 += parseFloat(`${parseInt(`${untickH}`)}`);
         untickH -= parseFloat(`${3 * parseInt(`${untickH}`)}`);
         agreementE = untickH == 15.13 && 15.13 == whistle7;
         loadingS /= Math.max(loadingS, 3);
         break;
      }
         expandM = `${calendarJ.length}`;
          let selectedP = 3;
         calendarJ += "2";
         selectedP |= selectedP;
      for (let a = 0; a < 3; a++) {
         textinputo *= expandM.length % 2;
      }
      combinedB += `${parseInt(`${libavdevice4}`) * 3}`;
      if (gemfileT) {
         break;
      }
   } while (gemfileT && (!combinedB.includes(`${episodesg.size}`)));
   if (libavdevice4 <= 1.64) {
      libavdevice4 *= parseFloat(`${downloadr}`);
   }
       let xvodS = 1.0;
         xvodS -= parseFloat(`${parseInt(`${xvodS}`) >> (Math.min(1, Math.abs(parseInt(`${xvodS}`))))}`);
         xvodS -= parseFloat(`${2}`);
      for (let y = 0; y < 1; y++) {
          let friendsG = 2;
          let unselectedB = String.fromCharCode(100,97,116,97,98,97,115,101,95,122,95,52,52,0);
          let analytick = false;
          let hongkongS: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,115,95,54,50,0),21], [String.fromCharCode(120,95,50,48,95,117,100,116,97,0),184], [String.fromCharCode(104,95,52,57,95,121,117,118,114,103,98,0),346]]);
          let video_ = String.fromCharCode(101,95,55,49,95,97,115,111,108,117,116,101,0);
         xvodS += parseFloat(`${3 % (Math.max(parseInt(`${xvodS}`), 9))}`);
         friendsG %= Math.max(3, 5);
         unselectedB += `${friendsG}`;
         analytick = 56 <= hongkongS.size;
         hongkongS = new Map([[`${hongkongS.size}`, 3]]);
         video_ += `${unselectedB.length}`;
      }
      clockc = "2";
   for (let x = 0; x < 2; x++) {
      shrinkA += `${downloadr * 1}`;
   }
      libavdevice4 += parseFloat(`${2}`);
   while (libavdevice4 == parseFloat(`${brightnessy.length}`)) {
       let androidK = String.fromCharCode(115,99,97,109,95,103,95,53,56,0);
         androidK = `${androidK.length}`;
         androidK += `${(androidK == String.fromCharCode(108,0) ? androidK.length : androidK.length)}`;
         androidK = `${androidK.length * 3}`;
      brightnessy = `${uimanagerv.length}`;
      break;
   }
   let description_u0 = shrinkA.length <= 9890016;
   do {
      shrinkA = `${(String.fromCharCode(70,0) == brightnessy ? brightnessy.length : streamingP.size)}`;
      if (description_u0) {
         break;
      }
   } while (description_u0 && (!shrinkA.startsWith(singaporeX)));
   let sharee = 6247327 <= shrinkA.length;
   do {
       let rewindd = String.fromCharCode(117,110,109,117,116,101,100,95,49,95,56,50,0);
       let floatingE = 3.0;
          let libruntimeexecutort = String.fromCharCode(121,95,53,50,95,101,110,97,98,108,101,115,0);
         rewindd += `${libruntimeexecutort.length % (Math.max(4, rewindd.length))}`;
         rewindd = "3";
       let package_cx: Array<any> = [936, 483, 995];
       let orientationB: Array<any> = [690, 748];
      for (let h = 0; h < 3; h++) {
          let cancel0: Array<any> = [String.fromCharCode(110,95,55,50,95,104,105,103,104,0), String.fromCharCode(99,109,105,111,95,109,95,51,54,0), String.fromCharCode(107,95,51,51,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0)];
          let libsgcore4 = String.fromCharCode(112,108,97,99,101,109,101,110,116,95,111,95,56,55,0);
         orientationB.push(package_cx.length >> (Math.min(orientationB.length, 2)));
         cancel0 = [(String.fromCharCode(66,0) == libsgcore4 ? libsgcore4.length : cancel0.length)];
      }
       let logoutn = String.fromCharCode(109,97,103,110,105,102,105,101,114,95,49,95,53,56,0);
       let middlee = String.fromCharCode(118,95,57,49,95,99,111,110,99,97,116,100,101,99,0);
         package_cx = [1];
      shrinkA = "1";
      floatingE -= 1 >> (Math.min(Math.abs(parseInt(`${floatingE}`)), 4));
      if (sharee) {
         break;
      }
   } while (sharee && (2 == (shrinkA.length << (Math.min(4, Math.abs(streamingP.size)))) && 2 == (shrinkA.length << (Math.min(4, Math.abs(streamingP.size))))));
      uimanagerv += "3";
      libavdevice4 += parseFloat(`${episodesg.size}`);
       let popupf = 0;
       let latny = String.fromCharCode(98,95,50,48,95,115,99,116,112,117,116,105,108,0);
      let clear0 = String.fromCharCode(49,119,116,107,49,57,51,102,0) == latny;
      do {
         latny = `${latny.length}`;
         if (clear0) {
            break;
         }
      } while ((latny.startsWith(`${popupf}`)) && clear0);
         popupf <<= Math.min(Math.abs((String.fromCharCode(88,0) == latny ? latny.length : popupf)), 1);
      let liveX = popupf <= 6850192;
      do {
         popupf += 1;
         if (liveX) {
            break;
         }
      } while (liveX && (3 <= (latny.length | popupf) || (popupf | 3) <= 1));
      let j_countK = popupf <= 8811282;
      do {
          let sourceg = 0.0;
          let rncoreE = true;
          let gesturesH = String.fromCharCode(97,115,115,111,99,108,105,115,116,95,55,95,50,50,0);
         popupf &= 2 * latny.length;
         sourceg /= Math.max(5, ((rncoreE ? 3 : 5) % (Math.max(parseInt(`${sourceg}`), 2))));
         rncoreE = (gesturesH.length - parseInt(`${sourceg}`)) > 87;
         gesturesH += "1";
         if (j_countK) {
            break;
         }
      } while (((popupf % (Math.max(4, latny.length))) > 3) && j_countK);
          let sigmob7 = 2.0;
         latny += `${parseInt(`${sigmob7}`) + 3}`;
      while (latny.endsWith(`${popupf}`)) {
         popupf += 3;
         break;
      }
      shrinkA = `${3 | singaporeX.length}`;
       let fast8 = 1;
          let libfabricjniG = 5;
          let product4 = String.fromCharCode(100,95,52,48,95,112,114,111,99,101,115,115,101,100,0);
          let mintegralV = String.fromCharCode(118,97,108,105,100,97,116,101,95,114,95,51,50,0);
         fast8 <<= Math.min(Math.abs(mintegralV.length * libfabricjniG), 4);
         libfabricjniG >>= Math.min(4, product4.length);
         product4 = `${product4.length}`;
       let reducerv: Array<any> = [String.fromCharCode(104,95,50,53,95,101,110,100,112,111,105,110,116,115,0), String.fromCharCode(102,114,101,101,112,95,54,95,54,49,0), String.fromCharCode(103,114,97,100,102,117,110,95,114,95,52,50,0)];
       let tail1: Array<any> = [552, 623];
      let libpangleflippedF = tail1.length >= 6513670;
      do {
         tail1 = [tail1.length];
         if (libpangleflippedF) {
            break;
         }
      } while ((1 > (reducerv.length ^ 1)) && libpangleflippedF);
      shareh = [(String.fromCharCode(73,0) == shrinkA ? shrinkA.length : streamingP.size)];

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let historyO = 5;
    let pangle2 = String.fromCharCode(105,95,52,56,95,111,110,121,120,100,0);
    let direct_ = 1;
    let searchbari = 5.0;
    let fieldZ = String.fromCharCode(118,111,114,98,105,115,95,57,95,52,53,0);
    let modelb = 0;
    let interstitialZ = 1.0;
    let mountingi = 4;
    let refresh8 = String.fromCharCode(114,97,110,107,105,110,103,115,95,55,95,53,52,0);
    let agreements: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,95,50,95,51,52,0),true ], [String.fromCharCode(103,95,54,50,95,116,114,105,110,103,0),false ], [String.fromCharCode(118,95,56,53,95,97,112,112,108,121,0),true ]]);
    let assistl = String.fromCharCode(115,116,114,110,108,101,110,95,110,95,57,53,0);
    let selectiond: Map<any, any> = new Map([[String.fromCharCode(111,95,55,52,95,115,105,109,112,108,105,102,121,0),false ], [String.fromCharCode(106,115,105,109,100,99,112,117,95,107,95,52,54,0),false ]]);
   for (let d = 0; d < 3; d++) {
      direct_ /= Math.max(historyO, 3);
   }
       let share9 = String.fromCharCode(115,110,105,112,112,101,116,95,49,95,49,49,0);
       let mbnative_: Array<any> = [304, 72, 240];
      while ((mbnative_.length / (Math.max(8, share9.length))) < 2 && 5 < (share9.length / (Math.max(2, 9)))) {
          let binddatasa = 4;
          let inactivet: Map<any, any> = new Map([[String.fromCharCode(98,101,115,116,95,51,95,56,54,0),true ], [String.fromCharCode(111,112,117,115,101,110,99,95,54,95,49,52,0),true ], [String.fromCharCode(115,108,97,115,104,105,110,103,95,120,95,50,48,0),true ]]);
          let filterJ = String.fromCharCode(120,95,57,50,95,115,112,97,110,115,0);
          let playw = String.fromCharCode(121,95,51,50,95,112,97,114,116,105,99,108,101,115,0);
         mbnative_.push(3);
         binddatasa += 2;
         inactivet.set(`${binddatasa}`, 2 * binddatasa);
         filterJ += `${inactivet.size / 3}`;
         playw += `${filterJ.length}`;
         break;
      }
          let hiad4 = String.fromCharCode(98,100,119,110,95,119,95,54,48,0);
         mbnative_ = [1];
         hiad4 += "2";
      for (let y = 0; y < 2; y++) {
         share9 += "2";
      }
         share9 = `${mbnative_.length / (Math.max(share9.length, 1))}`;
      while (1 <= (share9.length - mbnative_.length)) {
         share9 = "1";
         break;
      }
          let main_qy = String.fromCharCode(97,95,49,55,95,116,116,97,99,104,109,101,110,116,0);
         mbnative_ = [1 / (Math.max(6, share9.length))];
         main_qy = "2";
      interstitialZ /= Math.max(4, parseFloat(`${3}`));
      fieldZ += "2";
   let root3 = historyO >= 5221022;
   do {
       let predictiony: Map<any, any> = new Map([[String.fromCharCode(116,95,57,48,95,102,111,117,114,105,101,114,0),String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,95,105,95,56,49,0)], [String.fromCharCode(122,109,113,115,104,101,108,108,95,121,95,52,53,0),String.fromCharCode(119,95,52,52,95,100,114,105,102,116,105,110,103,0)], [String.fromCharCode(105,95,52,49,95,97,112,112,114,101,99,97,116,105,111,110,0),String.fromCharCode(107,95,53,53,95,98,100,115,0)]]);
       let path4 = String.fromCharCode(104,111,110,101,95,107,95,56,54,0);
       let nativeb = String.fromCharCode(109,97,105,110,115,116,97,103,101,95,56,95,54,56,0);
       let styles8 = 1.0;
       let gmailI = 1.0;
      if (path4.endsWith(`${predictiony.size}`)) {
         path4 = `${path4.length}`;
      }
         predictiony = new Map([[`${gmailI}`, parseInt(`${styles8}`) >> (Math.min(5, Math.abs(parseInt(`${gmailI}`))))]]);
      while (!nativeb.endsWith(`${path4.length}`)) {
          let connectionf: Map<any, any> = new Map([[String.fromCharCode(98,114,105,110,103,95,99,95,57,57,0),String.fromCharCode(101,110,118,95,107,95,57,53,0)], [String.fromCharCode(121,95,54,50,95,112,99,97,112,0),String.fromCharCode(115,95,53,56,95,109,115,103,115,0)], [String.fromCharCode(118,95,54,50,95,109,111,100,105,102,121,0),String.fromCharCode(109,95,51,49,95,115,109,111,111,116,104,110,101,115,115,0)]]);
         nativeb = `${parseInt(`${gmailI}`) & 3}`;
         connectionf = new Map([[`${connectionf.size}`, connectionf.size >> (Math.min(Math.abs(1), 1))]]);
         break;
      }
       let send6 = String.fromCharCode(117,95,51,55,95,98,105,116,101,120,97,99,116,110,101,115,115,0);
         gmailI -= parseInt(`${gmailI}`) & 2;
         predictiony = new Map([[`${styles8}`, parseInt(`${styles8}`) % 1]]);
      if (1 < nativeb.length) {
         nativeb += `${2 ^ nativeb.length}`;
      }
         predictiony.set(`${gmailI}`, predictiony.size | parseInt(`${gmailI}`));
      historyO ^= (String.fromCharCode(67,0) == refresh8 ? pangle2.length : refresh8.length);
      if (root3) {
         break;
      }
   } while ((5 == (5 << (Math.min(3, fieldZ.length))) || 5 == (historyO << (Math.min(fieldZ.length, 4)))) && root3);
   for (let v = 0; v < 2; v++) {
       let sharedp = false;
       let share1 = 0;
       let dialogR = String.fromCharCode(100,95,51,56,95,102,105,110,105,115,104,101,100,0);
       let match2 = String.fromCharCode(98,95,56,57,95,99,109,105,111,0);
         dialogR += `${dialogR.length}`;
      let dataf = share1 >= 9688147;
      do {
          let stepA = String.fromCharCode(113,95,52,49,95,99,111,110,102,111,114,109,115,0);
          let sansn = String.fromCharCode(103,95,52,48,95,104,101,97,112,0);
          let stationF = String.fromCharCode(112,115,102,98,95,51,95,49,56,0);
          let station1 = String.fromCharCode(118,98,112,114,105,110,116,102,95,117,95,57,50,0);
         share1 *= ((sharedp ? 5 : 3) % 3);
         stepA += `${stationF.length ^ 2}`;
         sansn += `${sansn.length - 2}`;
         stationF += `${2 / (Math.max(3, station1.length))}`;
         station1 = `${2 & station1.length}`;
         if (dataf) {
            break;
         }
      } while (((share1 / (Math.max(dialogR.length, 1))) > 4 || (share1 / (Math.max(dialogR.length, 9))) > 4) && dataf);
          let baidue = String.fromCharCode(109,97,103,101,110,116,97,95,51,95,51,49,0);
          let description_29G: Map<any, any> = new Map([[String.fromCharCode(116,95,54,56,95,100,105,110,102,0),505], [String.fromCharCode(97,112,97,114,97,109,115,95,105,95,53,57,0),985], [String.fromCharCode(117,95,55,50,95,111,99,116,112,111,105,110,116,0),337]]);
         match2 += `${match2.length & baidue.length}`;
         baidue += "1";
         description_29G.set(`${description_29G.size}`, 1 ^ description_29G.size);
      for (let r = 0; r < 1; r++) {
         share1 %= Math.max(match2.length, 1);
      }
          let package_h0h: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,101,115,95,99,95,56,52,0),938], [String.fromCharCode(99,95,50,51,95,116,111,108,111,119,101,114,0),344], [String.fromCharCode(105,110,116,101,103,114,105,116,121,95,116,95,54,0),444]]);
          let nativeex1 = String.fromCharCode(99,111,109,109,105,116,116,101,100,95,51,95,50,51,0);
          let shootr = 3.0;
         dialogR = "3";
         package_h0h.set(`${nativeex1}`, nativeex1.length);
         shootr -= parseFloat(`${1 * package_h0h.size}`);
      while (dialogR.startsWith(`${share1}`)) {
         dialogR = "3";
         break;
      }
         dialogR += `${(match2 == String.fromCharCode(76,0) ? match2.length : share1)}`;
      while (sharedp) {
          let delegate_daP = String.fromCharCode(122,95,55,57,95,112,111,115,116,112,114,111,99,0);
          let splashc = true;
          let policyv = 5.0;
          let minivodC = String.fromCharCode(110,117,108,108,105,102,95,55,95,55,49,0);
         share1 <<= Math.min(Math.abs(3 & share1), 4);
         delegate_daP += `${parseInt(`${policyv}`)}`;
         splashc = policyv == 43.33 || !splashc;
         minivodC = `${(String.fromCharCode(108,0) == minivodC ? parseInt(`${policyv}`) : minivodC.length)}`;
         break;
      }
      if (!dialogR.includes(`${match2.length}`)) {
         dialogR += `${match2.length}`;
      }
          let gmailE = 1;
         share1 *= (match2 == String.fromCharCode(50,0) ? match2.length : gmailE);
       let main_iO = String.fromCharCode(115,104,97,100,101,115,95,111,95,49,55,0);
      let configM = share1 >= 8901672;
      do {
         share1 += (String.fromCharCode(80,0) == main_iO ? main_iO.length : share1);
         if (configM) {
            break;
         }
      } while ((!sharedp) && configM);
      modelb <<= Math.min(Math.abs(parseInt(`${interstitialZ}`) % 3), 4);
   }
      direct_ |= mountingi * parseInt(`${interstitialZ}`);

      if (delayValue === undefined) {

      agreements.set(`${modelb}`, refresh8.length << (Math.min(Math.abs(3), 4)));
      mountingi ^= agreements.size << (Math.min(Math.abs(2), 4));
      direct_ |= parseInt(`${interstitialZ}`);
      pangle2 += "2";
      mountingi *= fieldZ.length;
   let sendn = interstitialZ >= 5958250.0;
   do {
      interstitialZ += (parseFloat(`${String.fromCharCode(68,0) == pangle2 ? pangle2.length : historyO}`));
      if (sendn) {
         break;
      }
   } while (((historyO + parseInt(`${interstitialZ}`)) <= 5 || (interstitialZ + 2.61) <= 2.18) && sendn);
        if (showSlider === 'none' && !paused) {

   if (3 == fieldZ.length) {
       let commonu = String.fromCharCode(116,111,100,97,121,115,95,113,95,49,48,48,0);
       let launcherR: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,100,101,98,97,110,100,0),758], [String.fromCharCode(102,97,114,109,101,95,119,95,50,49,0),368]]);
          let chinasamex = false;
         launcherR = new Map([[`${chinasamex}`, 3]]);
         launcherR.set(`${commonu}`, commonu.length);
      mountingi /= Math.max(2, fieldZ.length);
   }
      fieldZ = `${parseInt(`${searchbari}`) / 1}`;
   if (refresh8.endsWith(`${interstitialZ}`)) {
      refresh8 = `${historyO * agreements.size}`;
   }
   if (refresh8.length >= 1) {
       let save0 = 2;
       let kuaishouc: Array<any> = [405, 412, 164];
       let graphicsI = String.fromCharCode(115,95,49,56,95,97,100,100,0);
       let suggestionO = 3.0;
      if (2 < save0) {
          let libavutilQ = 5.0;
          let policya = String.fromCharCode(118,95,57,54,95,110,97,117,116,105,99,97,108,0);
          let core1: Array<any> = [25, 836];
          let sideK = String.fromCharCode(100,95,50,57,95,108,105,98,119,101,98,112,0);
          let countdownY = 0.0;
         kuaishouc = [save0 ^ 2];
         libavutilQ *= parseFloat(`${3 | sideK.length}`);
         policya = "2";
         core1 = [parseInt(`${libavutilQ}`) ^ sideK.length];
         countdownY *= parseFloat(`${parseInt(`${libavutilQ}`) - 2}`);
      }
         save0 /= Math.max(4, graphicsI.length * 3);
         graphicsI = `${kuaishouc.length & 1}`;
         suggestionO *= parseFloat(`${2 << (Math.min(Math.abs(save0), 5))}`);
         suggestionO /= Math.max(1, parseFloat(`${graphicsI.length << (Math.min(Math.abs(2), 1))}`));
          let detaili = String.fromCharCode(112,114,105,110,116,111,117,116,95,120,95,56,0);
         kuaishouc.push(3 * save0);
         detaili += `${detaili.length + 3}`;
      let resultx = suggestionO >= 6428886.0;
      do {
         suggestionO -= parseFloat(`${parseInt(`${suggestionO}`)}`);
         if (resultx) {
            break;
         }
      } while (resultx && (kuaishouc.includes(suggestionO)));
          let pressurea = String.fromCharCode(122,95,56,57,95,116,101,109,112,0);
          let back2 = String.fromCharCode(113,95,49,95,97,97,99,112,115,121,0);
          let customD = 4;
         suggestionO *= parseFloat(`${back2.length ^ 3}`);
         pressurea = "2";
         back2 = `${(pressurea == String.fromCharCode(86,0) ? customD : pressurea.length)}`;
         customD %= Math.max(pressurea.length / 1, 2);
      let eactw = 8694759 <= kuaishouc.length;
      do {
         kuaishouc.push(parseInt(`${suggestionO}`));
         if (eactw) {
            break;
         }
      } while ((!kuaishouc.includes(save0)) && eactw);
       let sellh = 4;
       let sliderf = 4;
       let modelse = 4;
       let floater3 = 5.0;
      refresh8 = `${(graphicsI == String.fromCharCode(86,0) ? save0 : graphicsI.length)}`;
   }
   for (let e = 0; e < 1; e++) {
      pangle2 += `${pangle2.length}`;
   }
       let whatsappF: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,111,95,50,53,0),String.fromCharCode(120,95,49,55,95,115,108,105,112,112,97,103,101,115,0)], [String.fromCharCode(104,114,116,102,95,56,95,56,53,0),String.fromCharCode(116,121,112,101,115,95,121,95,51,50,0)]]);
       let typesK = 0;
         whatsappF = new Map([[`${whatsappF.size}`, 3 / (Math.max(7, whatsappF.size))]]);
      if ((whatsappF.size << (Math.min(5, Math.abs(typesK)))) < 3 && (whatsappF.size << (Math.min(Math.abs(3), 3))) < 3) {
         whatsappF = new Map([[`${whatsappF.size}`, typesK >> (Math.min(Math.abs(whatsappF.size), 1))]]);
      }
      for (let h = 0; h < 2; h++) {
         whatsappF.set(`${typesK}`, typesK % (Math.max(whatsappF.size, 9)));
      }
         whatsappF = new Map([[`${whatsappF.size}`, whatsappF.size % (Math.max(1, 9))]]);
         typesK ^= whatsappF.size ^ 3;
         typesK >>= Math.min(5, Math.abs(whatsappF.size | 2));
      pangle2 = `${direct_}`;
          setShowControls(false)
        }
      } else {

   while (3 > historyO) {
       let i_centerr = true;
       let armva2 = String.fromCharCode(99,115,119,97,112,95,109,95,53,49,0);
       let libhermesE = 2.0;
       let settingX = 0.0;
       let modalN: Array<any> = [446, 108];
      while (armva2.length < modalN.length) {
         modalN = [3];
         break;
      }
         settingX *= (String.fromCharCode(79,0) == armva2 ? parseInt(`${libhermesE}`) : armva2.length);
         settingX /= Math.max(2, ((i_centerr ? 1 : 3) & modalN.length));
         libhermesE *= parseFloat(`${3 - modalN.length}`);
      for (let w = 0; w < 2; w++) {
         armva2 += `${parseInt(`${libhermesE}`)}`;
      }
      if (modalN.length == settingX) {
         modalN = [1 ^ armva2.length];
      }
       let mbridgeK: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,111,95,57,49,0),790], [String.fromCharCode(110,95,56,52,95,99,97,112,105,0),557]]);
      if (5.84 < (1.74 * libhermesE) && libhermesE < 1.74) {
          let plashv = true;
          let libflipperE = 3.0;
          let default_6C = true;
         libhermesE += parseFloat(`${mbridgeK.size & 2}`);
         plashv = default_6C;
         libflipperE -= ((default_6C ? 1 : 1) / (Math.max(parseInt(`${libflipperE}`), 10)));
      }
         armva2 += `${mbridgeK.size % (Math.max(armva2.length, 9))}`;
          let handlerO: Array<any> = [947, 581, 384];
          let episodesD = String.fromCharCode(115,117,98,112,97,116,104,95,55,95,55,50,0);
         libhermesE -= parseFloat(`${parseInt(`${libhermesE}`) / 3}`);
         handlerO = [3];
         episodesD = `${episodesD.length}`;
          let sortw = String.fromCharCode(119,95,57,53,95,116,104,114,111,119,0);
         armva2 = `${parseInt(`${settingX}`)}`;
         sortw = `${sortw.length | 1}`;
       let edit6 = 1.0;
       let connectiont = 2.0;
      if ((libhermesE / (Math.max(4.17, 7))) == 2.18) {
         libhermesE *= parseFloat(`${2}`);
      }
      if ((parseFloat(`${modalN.length}`) / (Math.max(8, connectiont))) >= 2.91 || (parseInt(`${connectiont}`) / (Math.max(2, modalN.length))) >= 2) {
         connectiont *= parseFloat(`${1 - modalN.length}`);
      }
      while (2 > modalN.length) {
         edit6 += parseFloat(`${parseInt(`${edit6}`)}`);
         break;
      }
      modelb *= 3 >> (Math.min(Math.abs(parseInt(`${searchbari}`)), 1));
      break;
   }
      mountingi *= fieldZ.length & 3;
       let cornery = String.fromCharCode(112,114,111,109,112,116,95,49,95,55,50,0);
       let reactnativejsK: Array<any> = [String.fromCharCode(108,97,110,103,105,100,95,53,95,49,50,0), String.fromCharCode(105,110,103,101,110,105,101,110,116,95,101,95,57,56,0), String.fromCharCode(100,95,54,50,95,100,99,97,100,101,99,0)];
       let combinedY = true;
      while (!combinedY) {
          let leakcheckeri = 4;
          let combineY = 5;
          let shareE = 2;
         combinedY = 28 >= combineY && cornery == String.fromCharCode(82,0);
         leakcheckeri -= 1 + leakcheckeri;
         combineY %= Math.max(2 / (Math.max(10, leakcheckeri)), 1);
         shareE <<= Math.min(Math.abs(2 + shareE), 1);
         break;
      }
      for (let w = 0; w < 2; w++) {
         reactnativejsK.push((String.fromCharCode(98,0) == cornery ? cornery.length : (combinedY ? 4 : 4)));
      }
      for (let d = 0; d < 1; d++) {
         cornery = `${cornery.length - 3}`;
      }
      let libavutilN = 8604428 >= cornery.length;
      do {
         cornery += "3";
         if (libavutilN) {
            break;
         }
      } while (libavutilN && ((reactnativejsK.length % (Math.max(cornery.length, 1))) >= 3));
      while (!cornery.startsWith(`${reactnativejsK.length}`)) {
          let xadsdkA = 3.0;
          let promotionz = String.fromCharCode(100,101,102,114,97,103,109,101,110,116,95,109,95,54,51,0);
          let thailandV = String.fromCharCode(113,95,54,56,95,97,112,112,118,101,121,111,114,0);
         reactnativejsK.push(promotionz.length | 1);
         xadsdkA *= parseFloat(`${1 ^ thailandV.length}`);
         promotionz = `${thailandV.length}`;
         break;
      }
          let save2: Array<any> = [String.fromCharCode(107,95,54,48,95,111,99,116,101,116,0), String.fromCharCode(103,117,105,100,115,95,109,95,49,55,0)];
          let delegate_q7 = 0;
          let themeX = String.fromCharCode(118,112,120,100,101,99,95,107,95,56,55,0);
         cornery = `${(3 | (combinedY ? 4 : 5))}`;
         save2.push(save2.length);
         delegate_q7 >>= Math.min(Math.abs(delegate_q7 - 1), 1);
         themeX += `${save2.length + 2}`;
      for (let c = 0; c < 3; c++) {
         cornery = "2";
      }
       let klevinZ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,121,95,50,51,0),206], [String.fromCharCode(112,95,54,55,95,118,105,101,119,0),676], [String.fromCharCode(117,95,57,52,95,111,111,108,98,97,114,0),225]]);
      while ((reactnativejsK.length & 4) >= 2) {
         reactnativejsK.push((cornery == String.fromCharCode(53,0) ? cornery.length : reactnativejsK.length));
         break;
      }
      searchbari += 2 % (Math.max(2, reactnativejsK.length));
   if (refresh8.endsWith(`${agreements.size}`)) {
      refresh8 += `${parseInt(`${interstitialZ}`)}`;
   }
   if ((direct_ * 5) <= 5 || 2 <= (5 * modelb)) {
      direct_ &= refresh8.length;
   }
      fieldZ += "2";
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let leakcheckerG = String.fromCharCode(109,95,57,50,95,116,114,105,109,109,105,110,103,0);
    let anner9 = 1.0;
    let codegenO = String.fromCharCode(104,95,55,53,95,99,104,97,110,103,101,0);
    let upgradeb: Array<any> = [817, 39];
    let robotoc: Map<any, any> = new Map([[String.fromCharCode(101,95,49,53,95,108,105,98,111,112,101,110,104,0),267], [String.fromCharCode(111,110,116,111,95,100,95,48,0),129]]);
    let goalE = 5.0;
    let termst = 1.0;
    let leagueg: Map<any, any> = new Map([[String.fromCharCode(105,110,116,111,95,100,95,51,55,0),String.fromCharCode(98,111,111,107,109,97,114,107,115,95,56,95,51,50,0)], [String.fromCharCode(112,109,107,95,48,95,56,52,0),String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,57,95,56,0)]]);
       let placementN = false;
       let hejiC = String.fromCharCode(97,99,99,101,112,116,115,95,107,95,52,51,0);
       let customT = false;
      for (let j = 0; j < 2; j++) {
         customT = !placementN;
      }
      let update_7G = customT ? !customT : customT;
      do {
          let agreementq = String.fromCharCode(99,111,108,114,97,109,95,51,95,51,49,0);
         customT = (((placementN ? 22 : agreementq.length) << (Math.min(agreementq.length, 4))) > 22);
         if (update_7G) {
            break;
         }
      } while ((!hejiC.startsWith(`${customT}`)) && update_7G);
      for (let z = 0; z < 1; z++) {
         placementN = hejiC.length <= 92 || !placementN;
      }
          let mounting3 = String.fromCharCode(119,95,52,54,95,112,97,114,105,116,121,0);
          let libyogaw = String.fromCharCode(102,95,53,48,95,113,117,101,117,101,115,0);
         hejiC += `${((placementN ? 4 : 2) | 2)}`;
         mounting3 = `${(mounting3 == String.fromCharCode(57,0) ? mounting3.length : libyogaw.length)}`;
         libyogaw += "3";
       let taiwanR = 0.0;
         customT = !placementN;
          let linkU = String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,100,95,51,48,0);
          let serviceR = 0;
          let libyogaS = String.fromCharCode(118,95,54,56,95,97,99,99,114,117,101,0);
         taiwanR += parseFloat(`${linkU.length}`);
         linkU = `${(String.fromCharCode(85,0) == libyogaS ? serviceR : libyogaS.length)}`;
         serviceR += libyogaS.length >> (Math.min(3, Math.abs(serviceR)));
         customT = 67.21 <= taiwanR;
         customT = taiwanR > 28.59 || hejiC == String.fromCharCode(74,0);
      goalE += 2 - hejiC.length;
      termst += robotoc.size - 2;
      termst /= Math.max(4, codegenO.length);
   if (2.19 <= (termst + 2)) {
       let native7: Array<any> = [317, 573];
       let s_managerX = String.fromCharCode(104,100,97,116,97,95,114,95,48,0);
      while (!s_managerX.startsWith(`${native7.length}`)) {
         s_managerX = `${native7.length}`;
         break;
      }
          let y_playerd = true;
          let ballZ = String.fromCharCode(108,95,56,50,95,115,112,101,110,100,101,114,0);
         native7 = [ballZ.length];
         native7.push(1 + native7.length);
          let dragJ = String.fromCharCode(109,95,50,52,95,98,111,117,110,100,97,114,121,0);
         native7.push(dragJ.length ^ 1);
      let play3 = 7653819 <= native7.length;
      do {
         native7 = [(String.fromCharCode(88,0) == s_managerX ? native7.length : s_managerX.length)];
         if (play3) {
            break;
         }
      } while ((s_managerX.length <= native7.length) && play3);
          let directJ = String.fromCharCode(118,95,49,49,95,104,105,100,99,116,0);
         native7 = [2];
         directJ = `${directJ.length - 1}`;
      anner9 -= s_managerX.length;
   }

    if (isLocked) {

       let libfbjniB: Map<any, any> = new Map([[String.fromCharCode(97,102,102,105,110,105,116,121,95,104,95,49,51,0),true ], [String.fromCharCode(105,95,53,54,95,98,105,110,100,101,114,0),true ], [String.fromCharCode(118,95,49,53,95,101,116,104,114,101,97,100,0),true ]]);
          let analyticsi = String.fromCharCode(108,95,51,50,0);
          let settingr = true;
         libfbjniB = new Map([[`${settingr}`, 3]]);
         analyticsi += `${(analyticsi == String.fromCharCode(57,0) ? analyticsi.length : analyticsi.length)}`;
      if (libfbjniB.get(`${libfbjniB.size}`) == null) {
         libfbjniB.set(`${libfbjniB.size}`, libfbjniB.size);
      }
      let hooks3 = 5039732 <= libfbjniB.size;
      do {
          let graph_ = String.fromCharCode(99,95,56,53,95,99,97,118,108,99,0);
          let malaysiah = 5.0;
          let customS: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,107,101,95,97,95,57,57,0),748], [String.fromCharCode(117,108,112,102,101,99,95,115,95,52,57,0),836], [String.fromCharCode(98,95,57,52,95,112,108,97,116,102,111,114,109,115,0),404]]);
          let tempg: Array<any> = [434, 210, 217];
         libfbjniB = new Map([[`${customS.size}`, 1 + customS.size]]);
         graph_ += `${parseInt(`${malaysiah}`) - graph_.length}`;
         malaysiah *= 1 << (Math.min(Math.abs(parseInt(`${malaysiah}`)), 5));
         tempg = [parseInt(`${malaysiah}`) << (Math.min(2, Math.abs(3)))];
         if (hooks3) {
            break;
         }
      } while (hooks3 && (!Array.from(libfbjniB.keys()).includes(`${libfbjniB.size}`)));
      leakcheckerG += "2";
       let floating8 = 0.0;
       let other8 = 3;
       let pointv = 5.0;
          let libreactnativeblobC = 0.0;
          let regengj = 4.0;
         pointv += parseInt(`${floating8}`) << (Math.min(5, Math.abs(other8)));
         libreactnativeblobC += parseFloat(`${parseInt(`${libreactnativeblobC}`) >> (Math.min(1, Math.abs(parseInt(`${regengj}`))))}`);
         regengj += parseFloat(`${parseInt(`${libreactnativeblobC}`) | parseInt(`${regengj}`)}`);
       let sideO = false;
       let pagex = true;
      let stationsG = 5648122.0 >= floating8;
      do {
          let dialogH: Map<any, any> = new Map([[String.fromCharCode(100,111,102,102,115,101,116,115,95,119,95,57,0),976], [String.fromCharCode(122,95,53,57,95,122,114,101,111,114,100,101,114,0),764]]);
          let volumet = 1.0;
          let emojij: Array<any> = [45, 421, 339];
          let orangeP = String.fromCharCode(104,95,49,53,95,118,114,97,115,116,101,114,0);
         floating8 /= Math.max(5, (dialogH.size | (pagex ? 2 : 2)));
         dialogH.set(`${volumet}`, 2);
         volumet -= parseFloat(`${orangeP.length}`);
         emojij.push(parseInt(`${volumet}`) * 1);
         orangeP += `${parseInt(`${volumet}`)}`;
         if (stationsG) {
            break;
         }
      } while (stationsG && ((4.92 / (Math.max(4, floating8))) < 3.87 && 4.92 < floating8));
         pointv += ((sideO ? 2 : 5) - (pagex ? 1 : 5));
         pagex = 3.91 < pointv;
      for (let s = 0; s < 2; s++) {
          let codegenR: Map<any, any> = new Map([[String.fromCharCode(111,95,51,49,95,116,106,101,120,97,109,112,108,101,116,101,115,116,0),85], [String.fromCharCode(115,105,112,114,95,98,95,57,0),881]]);
         pagex = !sideO;
         codegenR = new Map([[`${codegenR.size}`, 1]]);
      }
      let fileK = 8819918 >= other8;
      do {
         other8 |= parseInt(`${pointv}`) - 3;
         if (fileK) {
            break;
         }
      } while (((other8 + 3) < 5 || pagex) && fileK);
      for (let m = 0; m < 1; m++) {
         other8 %= Math.max(other8, 4);
      }
         floating8 /= Math.max(parseInt(`${floating8}`) % 2, 1);
      robotoc = new Map([[`${other8}`, 1]]);
      anner9 /= Math.max(3, parseInt(`${termst}`));
      goalE -= upgradeb.length - 3;
      

   for (let f = 0; f < 2; f++) {
      anner9 += parseInt(`${termst}`);
   }
   for (let d = 0; d < 3; d++) {
       let traminio = 1;
       let orientation0 = 2;
       let commonB = 4.0;
       let mathv = String.fromCharCode(99,111,100,101,99,117,116,105,108,115,95,110,95,53,53,0);
         mathv = `${parseInt(`${commonB}`) | 3}`;
         mathv = `${parseInt(`${commonB}`)}`;
      if (commonB >= mathv.length) {
         commonB *= 2;
      }
      for (let n = 0; n < 3; n++) {
         orientation0 ^= parseInt(`${commonB}`) / 2;
      }
      let main_gu = 9890010 <= mathv.length;
      do {
         mathv = `${orientation0 * traminio}`;
         if (main_gu) {
            break;
         }
      } while (main_gu && ((traminio & mathv.length) == 3 && 3 == (mathv.length & traminio)));
          let skipT: Map<any, any> = new Map([[String.fromCharCode(105,95,53,48,95,100,97,98,97,115,101,0),String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,120,95,49,57,0)], [String.fromCharCode(121,95,49,57,95,117,118,114,100,0),String.fromCharCode(116,95,54,53,95,115,121,110,99,97,98,108,101,0)], [String.fromCharCode(109,117,115,120,95,100,95,50,48,0),String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,53,95,51,52,0)]]);
          let eactl = false;
         commonB -= orientation0;
         skipT.set(`${eactl}`, 3);
          let rulesx = false;
          let libjsinspectorV = String.fromCharCode(97,95,55,56,95,118,99,97,114,100,0);
          let actionF = 1;
         traminio *= (String.fromCharCode(77,0) == mathv ? mathv.length : orientation0);
         rulesx = String.fromCharCode(100,0) == libjsinspectorV;
         libjsinspectorV += `${(String.fromCharCode(102,0) == libjsinspectorV ? actionF : libjsinspectorV.length)}`;
         actionF ^= 1 & actionF;
      let catalogq = String.fromCharCode(103,56,104,108,121,52,105,0) == mathv;
      do {
         mathv = "2";
         if (catalogq) {
            break;
         }
      } while (catalogq && (5 >= (mathv.length % 2)));
      upgradeb = [2];
   }
      leakcheckerG += `${parseInt(`${goalE}`) - 1}`;
       let pagen = false;
       let lineD = String.fromCharCode(100,95,52,49,95,101,120,116,114,97,99,116,101,100,0);
       let regengf = String.fromCharCode(100,114,97,119,97,98,108,101,115,95,50,95,55,52,0);
          let championu = 5.0;
          let halfh = 3.0;
         lineD = `${3 % (Math.max(2, regengf.length))}`;
         championu += parseFloat(`${parseInt(`${halfh}`) * parseInt(`${championu}`)}`);
         halfh -= parseInt(`${halfh}`) | parseInt(`${championu}`);
      for (let x = 0; x < 1; x++) {
         lineD = `${((pagen ? 3 : 4) & 1)}`;
      }
      for (let b = 0; b < 1; b++) {
         lineD += `${(2 - (pagen ? 2 : 2))}`;
      }
         lineD += `${lineD.length << (Math.min(Math.abs(2), 2))}`;
         lineD = `${regengf.length & 3}`;
         regengf = `${(String.fromCharCode(84,0) == lineD ? (pagen ? 1 : 4) : lineD.length)}`;
      if (pagen) {
          let taiwanu = 4;
          let carousels = 2;
         lineD += `${regengf.length}`;
         taiwanu |= 3 << (Math.min(4, Math.abs(carousels)));
         carousels /= Math.max(1, 3);
      }
       let historyh = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,109,95,54,56,0);
       let favoriteW = String.fromCharCode(101,95,56,95,102,114,111,109,98,105,110,100,0);
       let sigmobs: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,117,118,95,120,95,55,54,0),669], [String.fromCharCode(109,98,101,100,95,104,95,52,57,0),986]]);
       let heartu: Map<any, any> = new Map([[String.fromCharCode(97,118,97,116,97,114,115,95,52,95,50,51,0),240], [String.fromCharCode(116,95,55,49,95,99,111,112,121,116,111,0),673]]);
      leakcheckerG = `${leagueg.size * parseInt(`${termst}`)}`;
      setIsLocked(false);
    } else {

   let indicatorH = codegenO == String.fromCharCode(52,110,51,106,102,106,54,119,0);
   do {
      codegenO += `${codegenO.length}`;
      if (indicatorH) {
         break;
      }
   } while (indicatorH && (2 < (3 - robotoc.size) && 5 < (codegenO.length - 3)));
       let rightE = String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,115,95,51,56,0);
          let zoom9 = 1.0;
          let type_nN = false;
          let sigmob0 = String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,101,95,52,55,0);
         rightE = `${((type_nN ? 3 : 2) % (Math.max(8, sigmob0.length)))}`;
         zoom9 -= 2 / (Math.max(parseInt(`${zoom9}`), 6));
         type_nN = 41.32 == zoom9 && 41.32 == zoom9;
         rightE += `${2 * rightE.length}`;
      let klevinP = rightE.length <= 8957947;
      do {
         rightE += `${1 << (Math.min(1, rightE.length))}`;
         if (klevinP) {
            break;
         }
      } while ((rightE.length < rightE.length) && klevinP);
      leagueg.set(codegenO, codegenO.length);
       let stationR: Array<any> = [661, 912, 274];
       let untickp: Array<any> = [876, 776];
       let singleR = 1;
      if (untickp.includes(singleR)) {
         singleR <<= Math.min(1, Math.abs(3 >> (Math.min(1, untickp.length))));
      }
      for (let m = 0; m < 3; m++) {
          let rewindG: Map<any, any> = new Map([[String.fromCharCode(109,117,115,120,95,107,95,54,48,0),4], [String.fromCharCode(102,114,97,109,101,105,110,102,111,95,97,95,55,0),828], [String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,99,95,49,50,0),543]]);
          let redirectQ = true;
          let down9: Array<any> = [81, 866, 475];
          let upgradem = false;
         untickp = [rewindG.size];
         rewindG = new Map([[`${down9.length}`, 2]]);
         redirectQ = down9.length <= 48 && redirectQ;
         upgradem = !redirectQ && down9.length >= 91;
      }
      if (untickp.includes(singleR)) {
         singleR %= Math.max(stationR.length << (Math.min(Math.abs(2), 2)), 5);
      }
      while ((singleR * 5) <= 2 && (singleR * untickp.length) <= 5) {
          let uimanagern = 5.0;
         singleR += 3;
         uimanagern *= parseFloat(`${parseInt(`${uimanagern}`) + 2}`);
         break;
      }
       let anytimet = true;
       let alert1 = false;
      if (4 == (singleR & 2)) {
         singleR %= Math.max(3, untickp.length);
      }
      if (untickp.includes(singleR)) {
         untickp = [untickp.length + 1];
      }
         alert1 = untickp.length <= 56;
      if (!untickp.includes(singleR)) {
          let short_fqA: Map<any, any> = new Map([[String.fromCharCode(114,112,99,115,95,119,95,54,51,0),171], [String.fromCharCode(97,108,105,97,115,101,115,95,108,95,51,51,0),716], [String.fromCharCode(108,95,50,53,95,110,117,109,98,101,114,115,0),997]]);
         singleR += singleR;
         short_fqA = new Map([[`${short_fqA.size}`, short_fqA.size]]);
      }
      leakcheckerG = `${3 * singleR}`;
   for (let f = 0; f < 1; f++) {
      anner9 -= (String.fromCharCode(118,0) == codegenO ? leagueg.size : codegenO.length);
   }
      

      goalE *= 2 | leakcheckerG.length;
   for (let f = 0; f < 2; f++) {
       let viewerD = String.fromCharCode(107,95,50,50,95,109,112,101,103,97,117,100,105,111,0);
       let libyogaC = true;
       let viewse = String.fromCharCode(111,95,51,55,95,114,101,110,116,97,108,0);
       let flyer8 = String.fromCharCode(103,97,109,117,116,95,106,95,56,48,0);
       let filter8 = String.fromCharCode(100,95,54,52,95,121,109,105,110,112,117,116,0);
          let tailN: Array<any> = [847, 162, 877];
          let armva0: Array<any> = [627, 490, 370];
          let historyC: Array<any> = [723, 878];
         libyogaC = historyC.length > 65;
         tailN = [tailN.length | armva0.length];
         armva0 = [3 << (Math.min(5, armva0.length))];
         historyC.push(armva0.length);
       let detail4 = 4;
       let analyticO = 3;
          let libmapbufferjniw: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,98,117,116,101,95,57,95,54,49,0),315], [String.fromCharCode(114,95,54,54,95,98,97,99,107,108,105,103,104,116,0),581]]);
          let starR = String.fromCharCode(115,95,49,48,48,95,112,114,101,104,97,115,104,0);
          let cricket9: Array<any> = [393, 318, 441];
         libyogaC = !libyogaC;
         libmapbufferjniw = new Map([[`${libmapbufferjniw.size}`, cricket9.length]]);
         starR = `${cricket9.length}`;
      for (let h = 0; h < 3; h++) {
         libyogaC = filter8.length > 27 || detail4 > 27;
      }
          let agreementu = String.fromCharCode(108,95,56,50,95,115,99,105,101,110,116,105,102,105,99,0);
         libyogaC = viewse.length > 40;
         agreementu += `${3 + agreementu.length}`;
       let libturbomodulejsijniQ = String.fromCharCode(114,101,109,111,118,101,100,95,103,95,56,54,0);
      if ((5 * detail4) > 4 || detail4 > 5) {
          let termsU = String.fromCharCode(105,110,102,111,115,95,50,95,57,56,0);
          let episodes7 = true;
          let dplusG: Map<any, any> = new Map([[String.fromCharCode(98,102,114,97,99,116,105,111,110,95,122,95,57,54,0),870], [String.fromCharCode(100,101,98,117,103,98,111,120,95,49,95,52,0),809], [String.fromCharCode(115,95,49,56,95,101,118,101,114,121,119,104,101,114,101,0),804]]);
          let side1: Array<any> = [317, 949];
          let feedbackJ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,105,116,105,111,110,105,110,103,95,100,95,56,51,0),552], [String.fromCharCode(97,95,56,95,100,101,112,114,101,99,97,116,101,100,0),686], [String.fromCharCode(115,116,97,108,108,95,111,95,51,49,0),875]]);
         libyogaC = viewerD == String.fromCharCode(113,0) && termsU.length < 94;
         termsU = `${dplusG.size}`;
         episodes7 = episodes7 && side1.length >= 57;
         dplusG = new Map([[`${dplusG.size}`, 1]]);
         side1.push(((episodes7 ? 5 : 4) - 2));
         feedbackJ.set(`${side1.length}`, feedbackJ.size * 3);
      }
         viewse += "3";
      if (!viewse.startsWith(flyer8)) {
         viewse += "1";
      }
         viewerD = `${filter8.length}`;
         viewerD += `${flyer8.length << (Math.min(viewse.length, 5))}`;
      if (!libyogaC) {
         libturbomodulejsijniQ = "2";
      }
          let placeholderJ: Map<any, any> = new Map([[String.fromCharCode(119,95,51,52,95,101,110,97,98,108,101,0),true ], [String.fromCharCode(118,100,115,111,95,53,95,51,50,0),true ]]);
          let libfollyY = false;
         libturbomodulejsijniQ = "3";
         placeholderJ.set(`${libfollyY}`, 1);
      if (1 <= detail4) {
          let libmapbufferjniW = String.fromCharCode(97,95,53,48,95,101,99,116,97,110,103,108,101,0);
          let stationx = false;
          let networkh: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,95,111,95,56,49,0),347], [String.fromCharCode(114,101,109,105,120,105,110,103,95,119,95,55,51,0),637], [String.fromCharCode(107,95,51,49,95,99,111,108,108,97,112,115,101,0),548]]);
         viewerD = `${3 / (Math.max(8, flyer8.length))}`;
         libmapbufferjniW += `${networkh.size / (Math.max(3, 10))}`;
         stationx = (networkh.size - libmapbufferjniW.length) == 89;
      }
      for (let n = 0; n < 3; n++) {
          let statisticsG: Map<any, any> = new Map([[String.fromCharCode(118,95,51,57,95,112,117,116,98,105,116,98,117,102,102,101,114,0),360], [String.fromCharCode(103,95,57,53,95,110,111,115,105,109,100,0),523]]);
          let statistics4: Array<any> = [String.fromCharCode(117,95,55,56,0), String.fromCharCode(102,95,56,49,95,102,116,118,99,108,0), String.fromCharCode(109,95,54,51,95,97,114,110,114,0)];
         detail4 ^= detail4;
         statisticsG.set(`${statistics4.length}`, statisticsG.size);
         statistics4 = [statisticsG.size % 2];
      }
      upgradeb = [parseInt(`${goalE}`) / (Math.max(leagueg.size, 2))];
   }
   if (leakcheckerG.length <= 3) {
      leakcheckerG = `${robotoc.size % 3}`;
   }
       let libimagepipelineS = 0.0;
       let projectD = 0.0;
       let type_wf3 = String.fromCharCode(99,95,54,52,95,99,111,109,109,117,110,105,99,97,116,105,111,110,0);
      while (!type_wf3.includes(`${projectD}`)) {
         type_wf3 = `${parseInt(`${projectD}`) & parseInt(`${libimagepipelineS}`)}`;
         break;
      }
      let styleB = projectD <= 9727156.0;
      do {
         projectD += parseFloat(`${parseInt(`${projectD}`)}`);
         if (styleB) {
            break;
         }
      } while ((type_wf3.includes(`${projectD}`)) && styleB);
         projectD += parseFloat(`${3 - parseInt(`${projectD}`)}`);
         projectD += parseFloat(`${parseInt(`${libimagepipelineS}`) % (Math.max(parseInt(`${projectD}`), 8))}`);
         libimagepipelineS *= parseFloat(`${parseInt(`${libimagepipelineS}`) / (Math.max(type_wf3.length, 7))}`);
      upgradeb.push(parseInt(`${goalE}`) - 3);
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
