import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import MiddleControls from './wawa_predictionactive';
import BottomControls from './wawa_executor';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/wawa_awayteamfield_airbnbstarselected_button';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/wawa_airbnbstarselected_playlist';
import { wawaIconeyeMoonItem, wawaXvodNeon, wawaSellProfileinactive } from '@type/wawa_gradlew';
import VodCombinedGesture from '../gestures/vod/wawa_homeplayer';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS, FadeIn } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '@static/images/disconnectedThailandLibswscale.svg';
import ProjectIcon from '@static/images/dataPromotion.svg'
import VodListVertical from '../vod/wawa_icon_action';
import GesturesGuide from '../gestures/vod/wawa_member';
import VodLiveStationListVertical from '../vod/wawa_reactnativeratings_mounting';
import FastImage from '../common/wawa_iconarrowrightblack';

type wawaAwayShow = {
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
  episodes?: wawaXvodNeon
  movieList?: wawaSellProfileinactive[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: wawaIconeyeMoonItem[],
  isFetchingRecommendedMovies?: boolean
};

type wawaDescMiddleware = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void,
  isLocked: boolean,
  toggleLock: () => void
}

export default forwardRef<wawaDescMiddleware, wawaAwayShow>(({
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
       let homeloading0 = 4.0;
    let streaming3 = false;
    let shareblacke = String.fromCharCode(115,99,97,108,101,115,95,49,95,54,56,0);
    let basketballmatchdetailbgc = 3;
    let floating1: Array<any> = [String.fromCharCode(102,95,54,54,95,112,97,116,116,101,114,110,0), String.fromCharCode(113,95,56,54,95,104,121,98,114,105,100,0)];
    let downu: Map<any, any> = new Map([[String.fromCharCode(115,112,104,101,114,105,99,97,108,95,120,95,52,52,0),643], [String.fromCharCode(100,105,115,99,111,110,110,101,99,116,95,103,95,54,57,0),69], [String.fromCharCode(114,111,117,110,100,115,95,57,95,53,51,0),509]]);
    let episodej = false;
    let bridgeI = 4.0;
    let leaguea: Array<any> = [529, 47, 670];
   while (5.38 < (3.62 / (Math.max(2, bridgeI)))) {
      bridgeI /= Math.max(leaguea.length >> (Math.min(5, Math.abs(parseInt(`${homeloading0}`)))), 5);
      break;
   }
      homeloading0 += parseFloat(`${shareblacke.length - parseInt(`${bridgeI}`)}`);
   if (!shareblacke.startsWith(`${downu.size}`)) {
       let downloadedH: Array<any> = [463, 635];
       let gesturesE = String.fromCharCode(116,116,97,101,110,99,95,120,95,57,0);
       let list2 = String.fromCharCode(99,111,97,114,115,101,95,99,95,53,54,0);
       let d_managerZ = 4;
      for (let y = 0; y < 1; y++) {
          let tempnodatagifp: Array<any> = [String.fromCharCode(100,101,110,121,95,111,95,49,0), String.fromCharCode(104,95,51,53,95,99,111,109,112,111,115,101,105,0), String.fromCharCode(122,95,54,50,95,108,105,98,115,104,105,110,101,0)];
          let streaming1 = String.fromCharCode(103,95,52,57,95,98,97,115,101,117,114,108,0);
          let phone6: Array<any> = [713, 344, 109];
          let mbbida = String.fromCharCode(109,117,116,97,116,105,110,103,95,51,95,56,49,0);
         gesturesE = `${d_managerZ / 1}`;
         tempnodatagifp = [1 + streaming1.length];
         streaming1 = `${tempnodatagifp.length}`;
         phone6.push(tempnodatagifp.length / (Math.max(1, 10)));
         mbbida = `${mbbida.length | 3}`;
      }
         d_managerZ += list2.length ^ gesturesE.length;
      for (let n = 0; n < 1; n++) {
          let chinasame1: Map<any, any> = new Map([[String.fromCharCode(99,95,55,52,95,114,101,99,118,102,114,111,109,0),978], [String.fromCharCode(118,95,55,49,95,108,97,122,121,0),514]]);
          let libavformati: Array<any> = [String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,48,95,53,55,0), String.fromCharCode(107,95,49,95,114,101,115,101,114,118,101,0), String.fromCharCode(101,95,55,95,109,118,99,111,117,110,116,0)];
         list2 += "3";
         chinasame1 = new Map([[`${chinasame1.size}`, 2 | chinasame1.size]]);
         libavformati.push(3);
      }
          let predictiondefault9 = false;
         gesturesE += `${list2.length + d_managerZ}`;
         predictiondefault9 = !predictiondefault9 && !predictiondefault9;
      let rootB = 7705583 >= list2.length;
      do {
          let placeholders = String.fromCharCode(117,95,49,49,95,98,114,105,100,103,101,0);
         list2 = `${d_managerZ}`;
         placeholders += `${placeholders.length}`;
         if (rootB) {
            break;
         }
      } while (rootB && (5 < list2.length));
      if (gesturesE != list2) {
         list2 += "1";
      }
      while (d_managerZ < 3) {
         d_managerZ *= list2.length;
         break;
      }
          let connectiont = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,95,104,95,49,57,0);
          let adultt = 4.0;
          let iconsharefriendsb = 0.0;
         list2 += `${parseInt(`${iconsharefriendsb}`)}`;
         connectiont = `${(String.fromCharCode(53,0) == connectiont ? connectiont.length : parseInt(`${adultt}`))}`;
         adultt += (connectiont == String.fromCharCode(106,0) ? connectiont.length : parseInt(`${adultt}`));
       let yellowvideoliveG: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,100,95,49,95,56,52,0),930], [String.fromCharCode(122,95,55,49,95,108,97,121,111,117,116,0),412], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,105,95,53,54,0),31]]);
       let playlistQ: Map<any, any> = new Map([[String.fromCharCode(111,95,49,55,95,115,109,105,108,0),180], [String.fromCharCode(114,95,57,51,95,116,97,98,115,0),41], [String.fromCharCode(102,95,48,95,116,114,97,110,115,112,111,114,116,115,0),199]]);
       let customR = String.fromCharCode(114,101,115,101,101,107,95,105,95,57,56,0);
      let release_pjK = 8528427 <= playlistQ.size;
      do {
          let roundH = String.fromCharCode(97,95,49,50,95,114,101,99,97,108,99,117,108,97,116,105,111,110,0);
          let auto_rW = true;
          let yellowredcardP = 3.0;
          let reactZ = 4.0;
         playlistQ = new Map([[`${downloadedH.length}`, (customR == String.fromCharCode(88,0) ? customR.length : downloadedH.length)]]);
         roundH = `${1 / (Math.max(parseInt(`${yellowredcardP}`), 1))}`;
         auto_rW = (66 >= (roundH.length + (auto_rW ? roundH.length : 66)));
         yellowredcardP += parseFloat(`${roundH.length}`);
         reactZ *= ((auto_rW ? 3 : 5));
         if (release_pjK) {
            break;
         }
      } while ((3 >= (playlistQ.size - customR.length) && 3 >= (customR.length - playlistQ.size)) && release_pjK);
         yellowvideoliveG.set(gesturesE, gesturesE.length);
      shareblacke += `${list2.length >> (Math.min(Math.abs(2), 4))}`;
   }
       let description_aN = 2.0;
      while ((description_aN / 2.24) > 4.60 || 2.24 > (description_aN + description_aN)) {
         description_aN -= 3;
         break;
      }
         description_aN += parseInt(`${description_aN}`) + 3;
          let bangV: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,112,101,114,99,0),true ], [String.fromCharCode(113,95,51,56,95,103,114,97,121,102,0),true ], [String.fromCharCode(97,103,97,105,110,95,112,95,57,57,0),false ]]);
         description_aN /= Math.max(3, bangV.size | 3);
      streaming3 = bridgeI > 46.92;
   while (1 < (floating1.length - 5)) {
      floating1 = [shareblacke.length];
      break;
   }
      downu.set(`${homeloading0}`, parseInt(`${homeloading0}`) | 1);
   for (let q = 0; q < 3; q++) {
      streaming3 = leaguea.length < 78;
   }
       let chatbotphotoO = String.fromCharCode(112,95,57,54,95,105,115,110,97,110,0);
       let sourceu = 4.0;
         chatbotphotoO = `${(String.fromCharCode(53,0) == chatbotphotoO ? parseInt(`${sourceu}`) : chatbotphotoO.length)}`;
         sourceu /= Math.max(2, 1);
         sourceu *= parseInt(`${sourceu}`) - chatbotphotoO.length;
         sourceu *= 1;
      if (1 >= chatbotphotoO.length) {
         chatbotphotoO = `${chatbotphotoO.length << (Math.min(Math.abs(2), 3))}`;
      }
         sourceu += 3;
      shareblacke = `${parseInt(`${sourceu}`)}`;
       let signinupo = String.fromCharCode(98,95,56,53,95,105,115,109,108,0);
       let owngoalD = String.fromCharCode(117,95,49,56,95,116,116,116,0);
       let catagoryB = String.fromCharCode(117,95,53,53,95,97,108,108,111,99,97,116,101,0);
       let mbnativeadvancedt = String.fromCharCode(106,99,109,97,115,116,101,114,95,102,95,50,52,0);
      while (!owngoalD.endsWith(mbnativeadvancedt)) {
         mbnativeadvancedt += `${owngoalD.length + catagoryB.length}`;
         break;
      }
         mbnativeadvancedt += `${(catagoryB == String.fromCharCode(80,0) ? catagoryB.length : owngoalD.length)}`;
      let shrinkd = String.fromCharCode(97,106,95,49,102,109,109,55,55,0) == catagoryB;
      do {
          let sourceU = true;
          let storeU = 1.0;
          let goallogoO = 5.0;
          let sellk = String.fromCharCode(111,95,54,49,95,108,97,116,0);
          let f_managerq = 1.0;
         catagoryB = `${parseInt(`${f_managerq}`)}`;
         sourceU = 49.9 >= (storeU + goallogoO);
         storeU /= Math.max((parseFloat(`${(sourceU ? 1 : 1) | parseInt(`${storeU}`)}`)), 5);
         goallogoO += parseInt(`${storeU}`) * 2;
         sellk += `${parseInt(`${storeU}`)}`;
         f_managerq -= ((sourceU ? 4 : 2) | parseInt(`${goallogoO}`));
         if (shrinkd) {
            break;
         }
      } while (shrinkd && (owngoalD != String.fromCharCode(113,0)));
      while (4 < catagoryB.length) {
          let basketballdetailsbgO = String.fromCharCode(110,99,98,99,95,97,95,54,55,0);
          let searchbar7: Map<any, any> = new Map([[String.fromCharCode(104,95,49,53,95,112,115,102,105,108,101,0),852], [String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,52,95,48,0),692], [String.fromCharCode(105,119,104,116,95,120,95,51,51,0),608]]);
         signinupo = `${owngoalD.length << (Math.min(Math.abs(3), 3))}`;
         basketballdetailsbgO = `${searchbar7.size}`;
         searchbar7.set(`${basketballdetailsbgO}`, basketballdetailsbgO.length - 2);
         break;
      }
      while (signinupo.length == owngoalD.length) {
         signinupo = `${signinupo.length << (Math.min(owngoalD.length, 5))}`;
         break;
      }
      if (signinupo.length >= 2) {
         signinupo = `${signinupo.length}`;
      }
      while (catagoryB == mbnativeadvancedt) {
          let descW = 4.0;
         mbnativeadvancedt += `${signinupo.length ^ catagoryB.length}`;
         descW -= parseFloat(`${parseInt(`${descW}`)}`);
         break;
      }
         catagoryB += `${3 * catagoryB.length}`;
      episodej = signinupo.length > floating1.length;
   let redgoalJ = 7053759.0 >= homeloading0;
   do {
      homeloading0 += parseFloat(`${leaguea.length << (Math.min(3, floating1.length))}`);
      if (redgoalJ) {
         break;
      }
   } while (redgoalJ && (parseInt(`${homeloading0}`) > leaguea.length));
      homeloading0 += parseFloat(`${2}`);
       let handler7: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,121,95,48,95,56,52,0),false ], [String.fromCharCode(117,110,101,120,112,101,99,116,101,100,95,102,95,53,54,0),false ], [String.fromCharCode(121,95,51,55,95,99,111,114,114,101,99,116,105,110,103,0),true ]]);
         handler7 = new Map([[`${handler7.size}`, 3]]);
      let floaterP = 6337241 <= handler7.size;
      do {
         handler7 = new Map([[`${handler7.size}`, handler7.size]]);
         if (floaterP) {
            break;
         }
      } while ((2 <= (3 << (Math.min(4, Math.abs(handler7.size))))) && floaterP);
      if ((handler7.size % 5) < 2 && 5 < (5 % (Math.max(7, handler7.size)))) {
         handler7 = new Map([[`${handler7.size}`, handler7.size ^ 2]]);
      }
      basketballmatchdetailbgc *= handler7.size;
       let backwhiteR = true;
       let liveshareX = String.fromCharCode(107,101,121,108,101,110,95,51,95,50,0);
         liveshareX = `${((backwhiteR ? 5 : 1))}`;
         liveshareX = `${liveshareX.length}`;
      if (backwhiteR || 4 <= liveshareX.length) {
         liveshareX += `${(1 - (backwhiteR ? 4 : 2))}`;
      }
      while (3 < liveshareX.length) {
          let unselectedp: Map<any, any> = new Map([[String.fromCharCode(104,95,53,51,95,119,114,105,116,101,108,111,99,107,0),251], [String.fromCharCode(101,120,105,115,116,115,95,103,95,54,52,0),795], [String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,95,101,95,54,56,0),818]]);
          let defaultpredictionprofileD = String.fromCharCode(99,115,115,95,50,95,56,52,0);
         backwhiteR = defaultpredictionprofileD.length <= 88;
         unselectedp = new Map([[`${unselectedp.size}`, unselectedp.size]]);
         defaultpredictionprofileD = `${unselectedp.size | unselectedp.size}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         liveshareX += `${((backwhiteR ? 4 : 4) / (Math.max(liveshareX.length, 3)))}`;
      }
         liveshareX += "2";
      basketballmatchdetailbgc <<= Math.min(4, floating1.length);
   if ((bridgeI / 3.43) <= 4.69) {
       let liveendmodallogoX = true;
       let greyP = String.fromCharCode(112,95,57,95,115,99,114,97,112,101,0);
       let commonR = 4;
       let specs: Array<any> = [String.fromCharCode(100,95,52,55,95,115,104,111,116,0), String.fromCharCode(99,97,110,110,111,116,95,110,95,56,49,0)];
       let libjsie = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,119,95,50,55,0);
          let proxyY = false;
         greyP += "1";
      let issubA = String.fromCharCode(115,104,55,107,114,0) == greyP;
      do {
         greyP += "2";
         if (issubA) {
            break;
         }
      } while (issubA && (4 <= libjsie.length || 4 <= greyP.length));
      let windQ = 8987740 >= commonR;
      do {
          let issubf: Map<any, any> = new Map([[String.fromCharCode(104,95,56,51,95,98,97,116,99,104,105,110,103,0),false ], [String.fromCharCode(107,95,49,0),true ]]);
          let models4 = 4.0;
         commonR &= specs.length << (Math.min(5, Math.abs(issubf.size)));
         issubf.set(`${models4}`, 1);
         models4 += parseInt(`${models4}`);
         if (windQ) {
            break;
         }
      } while (windQ && (5 == (1 | commonR) && 1 == (commonR | greyP.length)));
      let nativeexM = 5062139 <= commonR;
      do {
         commonR /= Math.max(1, 1 - libjsie.length);
         if (nativeexM) {
            break;
         }
      } while ((2 < (specs.length - 2)) && nativeexM);
         commonR += (greyP == String.fromCharCode(89,0) ? greyP.length : (liveendmodallogoX ? 3 : 3));
         greyP += `${((liveendmodallogoX ? 2 : 4) / (Math.max(1, greyP.length)))}`;
         greyP = `${3 / (Math.max(7, commonR))}`;
         greyP = "3";
          let bellreminderH: Map<any, any> = new Map([[String.fromCharCode(112,98,107,100,102,95,110,95,52,50,0),794], [String.fromCharCode(102,95,55,57,95,101,109,111,116,105,99,111,110,0),352]]);
         commonR |= 1 * commonR;
         bellreminderH = new Map([[`${bellreminderH.size}`, bellreminderH.size % (Math.max(2, 10))]]);
       let tickF: Array<any> = [136, 192, 191];
       let watchnowbg1: Array<any> = [420, 180, 314];
      if (liveendmodallogoX || (1 / (Math.max(4, watchnowbg1.length))) >= 1) {
         watchnowbg1.push(1 << (Math.min(Math.abs(commonR), 4)));
      }
       let catalog4 = 3.0;
       let nextk = 2.0;
         liveendmodallogoX = (greyP.length >> (Math.min(4, Math.abs(commonR)))) > 94;
          let brightnessi = true;
          let auto_6u7 = 3;
         greyP += "3";
         brightnessi = 2 > auto_6u7 || brightnessi;
         auto_6u7 <<= Math.min(4, Math.abs(((brightnessi ? 2 : 1) & auto_6u7)));
       let textlayoutmanager0 = String.fromCharCode(110,111,116,103,101,116,95,106,95,53,57,0);
       let source2 = String.fromCharCode(97,95,55,56,95,105,110,116,101,110,116,0);
      bridgeI -= commonR / (Math.max(shareblacke.length, 10));
   }
   if (1 < (leaguea.length % 2)) {
      leaguea.push(shareblacke.length);
   }
       let trophyy: Array<any> = [String.fromCharCode(99,108,101,97,114,101,100,95,52,95,52,51,0), String.fromCharCode(103,101,116,98,121,116,101,95,52,95,54,0)];
       let downloadk = String.fromCharCode(99,111,112,121,105,110,103,95,113,95,55,48,0);
      for (let j = 0; j < 1; j++) {
         downloadk += `${2 * downloadk.length}`;
      }
          let xadsdkZ = 4;
         trophyy = [xadsdkZ & 2];
          let largebrightnessG = String.fromCharCode(105,95,50,52,95,109,97,120,101,100,0);
          let modeL = 2;
         downloadk += `${downloadk.length >> (Math.min(Math.abs(2), 2))}`;
         largebrightnessG += `${largebrightnessG.length + modeL}`;
         modeL *= 2;
         downloadk += `${1 ^ trophyy.length}`;
         downloadk = `${downloadk.length >> (Math.min(1, trophyy.length))}`;
          let dplusK = 3.0;
          let renderm = String.fromCharCode(120,95,56,55,95,114,101,99,105,112,114,111,99,97,108,0);
          let searchbarO = String.fromCharCode(119,95,57,51,95,108,97,110,103,117,97,103,101,115,0);
         downloadk = `${(String.fromCharCode(117,0) == searchbarO ? searchbarO.length : parseInt(`${dplusK}`))}`;
         dplusK -= parseFloat(`${renderm.length}`);
         renderm = `${(String.fromCharCode(90,0) == renderm ? renderm.length : renderm.length)}`;
      basketballmatchdetailbgc %= Math.max(5, 2);
      basketballmatchdetailbgc /= Math.max(downu.size, 4);
   while (4.76 >= homeloading0) {
      episodej = 68 < floating1.length;
      break;
   }
   if ((4 + leaguea.length) < 4 && (floating1.length + 4) < 1) {
      floating1.push(3);
   }
   for (let i = 0; i < 2; i++) {
       let backK = String.fromCharCode(100,105,115,116,97,110,99,101,115,95,53,95,57,56,0);
       let privilege9 = 3.0;
       let mutedf = String.fromCharCode(104,95,51,95,111,98,115,101,114,118,105,110,103,0);
       let scheduler4 = String.fromCharCode(104,111,115,116,110,97,109,101,95,114,95,49,57,0);
      for (let p = 0; p < 2; p++) {
         backK += `${mutedf.length}`;
      }
       let mbbannerv = 5.0;
         privilege9 -= 2;
      let favorite1 = mbbannerv <= 8189068.0;
      do {
         mbbannerv /= Math.max(scheduler4.length, 5);
         if (favorite1) {
            break;
         }
      } while (((privilege9 / (Math.max(mbbannerv, 3))) > 5.67) && favorite1);
      while (mutedf.startsWith(`${backK.length}`)) {
         mutedf += `${scheduler4.length - mutedf.length}`;
         break;
      }
      while (2.65 > privilege9) {
         privilege9 += scheduler4.length;
         break;
      }
      if (mutedf.includes(`${scheduler4.length}`)) {
         mutedf = `${mutedf.length & 2}`;
      }
          let predictionactive7 = 2.0;
          let encryptI: Array<any> = [307, 468];
         scheduler4 = `${parseInt(`${mbbannerv}`) ^ backK.length}`;
         predictionactive7 -= 2 ^ parseInt(`${predictionactive7}`);
         encryptI.push(encryptI.length / (Math.max(5, parseInt(`${predictionactive7}`))));
         backK += "1";
          let buffer2: Array<any> = [840, 899];
          let contextT = String.fromCharCode(104,105,101,114,95,104,95,50,52,0);
          let scrollviewi = String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,95,104,95,49,0);
         mbbannerv -= mutedf.length;
         buffer2.push(buffer2.length * contextT.length);
         contextT = `${scrollviewi.length}`;
         scrollviewi = `${3 << (Math.min(3, scrollviewi.length))}`;
       let greenarrowupc = String.fromCharCode(113,95,57,50,95,116,104,114,111,116,116,108,101,114,0);
      if (3 >= backK.length) {
          let rinit_zL = 0.0;
          let subin0 = false;
          let expandj = String.fromCharCode(99,107,112,116,95,115,95,52,50,0);
          let predictionC = 0;
         scheduler4 += `${parseInt(`${mbbannerv}`) | 2}`;
         rinit_zL *= parseFloat(`${1 - expandj.length}`);
         subin0 = (predictionC & expandj.length) == 43;
         predictionC += (1 * (subin0 ? 1 : 4));
      }
      bridgeI += parseInt(`${bridgeI}`) / 1;
   }
       let hoverk = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,114,95,51,57,0);
       let side0 = String.fromCharCode(99,111,114,110,101,114,115,95,104,95,49,57,0);
       let inouttargetrede: Array<any> = [896, 533, 927];
      while (2 <= side0.length) {
         hoverk += `${1 * inouttargetrede.length}`;
         break;
      }
      if (3 > (side0.length % 4) && 5 > (inouttargetrede.length % (Math.max(4, 5)))) {
          let termsa = String.fromCharCode(114,97,116,101,95,118,95,53,55,0);
          let circleZ = String.fromCharCode(105,110,108,105,110,107,95,104,95,55,56,0);
         inouttargetrede.push(circleZ.length / 1);
         termsa = `${termsa.length}`;
         circleZ += `${(String.fromCharCode(90,0) == termsa ? termsa.length : termsa.length)}`;
      }
         inouttargetrede = [hoverk.length];
      if (!side0.endsWith(`${inouttargetrede.length}`)) {
          let statisticsactivey = 3.0;
          let kick3 = 4;
         side0 = `${parseInt(`${statisticsactivey}`) * 2}`;
         statisticsactivey += parseFloat(`${kick3}`);
      }
          let floatingr = 4;
          let assets2: Map<any, any> = new Map([[String.fromCharCode(99,95,54,56,0),587], [String.fromCharCode(97,95,56,51,95,97,99,99,101,108,101,114,97,116,101,100,0),315]]);
         hoverk += `${side0.length - 3}`;
         floatingr += 3;
         assets2 = new Map([[`${assets2.size}`, floatingr % (Math.max(assets2.size, 1))]]);
      for (let j = 0; j < 3; j++) {
          let projectF = 4;
          let pangleg = String.fromCharCode(114,101,99,105,112,114,111,99,97,108,95,122,95,53,50,0);
          let nalyticsS = String.fromCharCode(112,107,116,104,100,114,95,51,95,51,57,0);
          let albumi = 1.0;
         side0 = `${hoverk.length ^ nalyticsS.length}`;
         projectF *= 1;
         pangleg += `${3 * pangleg.length}`;
         nalyticsS = `${projectF}`;
         albumi /= Math.max(1, parseInt(`${albumi}`));
      }
         side0 += `${side0.length}`;
         hoverk = `${inouttargetrede.length}`;
      if (side0.endsWith(`${inouttargetrede.length}`)) {
         inouttargetrede = [side0.length];
      }
      floating1 = [parseInt(`${homeloading0}`) + 3];

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
       let predictione = String.fromCharCode(116,95,49,53,95,101,120,112,108,111,114,101,114,0);
    let tempnodataS: Map<any, any> = new Map([[String.fromCharCode(105,95,50,53,95,100,101,102,97,117,108,0),809], [String.fromCharCode(118,95,50,54,95,100,120,116,97,0),408], [String.fromCharCode(98,97,99,107,101,100,95,105,95,55,48,0),901]]);
    let trophyL = String.fromCharCode(111,95,49,49,95,98,114,97,110,100,0);
    let privilege3 = 2.0;
    let membershipt = String.fromCharCode(104,105,100,99,116,95,97,95,52,48,0);
    let modulesL = 0.0;
    let classess = String.fromCharCode(107,95,55,57,95,103,97,116,101,100,0);
    let zoom2 = 4;
    let arrowupi = String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,55,95,56,53,0);
    let modulesF = 2.0;
    let iconarrowrightwhiteK = 4;
    let changed = false;
    let xvodD = String.fromCharCode(103,95,51,95,114,101,115,104,97,112,101,0);
    let pressureR = 2.0;
      trophyL = `${predictione.length}`;
      tempnodataS = new Map([[`${tempnodataS.size}`, 2]]);
      trophyL = "3";
       let tempu = String.fromCharCode(98,95,54,51,95,116,97,110,103,101,110,116,0);
       let libaneg: Array<any> = [592, 40, 564];
       let penaltygoal5: Array<any> = [225, 874, 67];
          let file8 = String.fromCharCode(109,95,57,54,95,103,97,117,115,115,105,97,110,0);
         penaltygoal5 = [libaneg.length * penaltygoal5.length];
         file8 = `${(file8 == String.fromCharCode(102,0) ? file8.length : file8.length)}`;
      while (!tempu.startsWith(`${libaneg.length}`)) {
         libaneg = [libaneg.length << (Math.min(tempu.length, 2))];
         break;
      }
       let unewinterstitiall = String.fromCharCode(119,105,110,100,111,119,115,95,101,95,52,56,0);
       let mimoz: Array<any> = [String.fromCharCode(110,97,117,116,105,99,97,108,95,121,95,51,55,0), String.fromCharCode(102,95,55,50,95,101,120,99,101,101,100,105,110,103,0), String.fromCharCode(115,117,98,114,101,115,117,108,116,95,111,95,49,55,0)];
       let airbnbstarV = String.fromCharCode(97,95,57,55,95,105,110,118,101,114,115,101,0);
      tempnodataS = new Map([[`${tempnodataS.size}`, trophyL.length - tempnodataS.size]]);
   let defaultplayerimgS = membershipt == String.fromCharCode(101,106,106,110,0);
   do {
      membershipt = `${1 - trophyL.length}`;
      if (defaultplayerimgS) {
         break;
      }
   } while (defaultplayerimgS && (membershipt.includes(`${privilege3}`)));
   while (arrowupi.startsWith(`${modulesL}`)) {
       let time_8h = 0.0;
       let moduleH = 2;
       let arrow2: Array<any> = [390, 726, 684];
         time_8h += 1 & arrow2.length;
      while ((3 / (Math.max(1, moduleH))) == 5) {
         time_8h += moduleH % (Math.max(arrow2.length, 5));
         break;
      }
      if (3.74 <= time_8h) {
         time_8h += 3 >> (Math.min(Math.abs(moduleH), 3));
      }
         time_8h += 2;
         moduleH *= moduleH;
      while (arrow2.includes(time_8h)) {
         time_8h *= 3 ^ arrow2.length;
         break;
      }
         moduleH ^= arrow2.length & 3;
      let libglogV = moduleH <= 9855942;
      do {
         moduleH *= parseInt(`${time_8h}`);
         if (libglogV) {
            break;
         }
      } while (libglogV && (arrow2.includes(moduleH)));
      while ((arrow2.length / (Math.max(5, time_8h))) > 4.14 || (time_8h / (Math.max(arrow2.length, 1))) > 4.14) {
         arrow2 = [moduleH * parseInt(`${time_8h}`)];
         break;
      }
      modulesL *= (parseFloat(`${String.fromCharCode(56,0) == membershipt ? parseInt(`${modulesL}`) : membershipt.length}`));
      break;
   }
       let debugV = false;
      if (!debugV || !debugV) {
         debugV = (!debugV ? !debugV : debugV);
      }
         debugV = !debugV && !debugV;
       let result1: Array<any> = [String.fromCharCode(99,109,105,111,95,111,95,52,50,0), String.fromCharCode(115,105,103,115,95,110,95,51,52,0), String.fromCharCode(98,95,50,49,95,121,101,97,114,0)];
       let icontransferclubb: Array<any> = [761, 448, 868];
      classess = `${classess.length}`;
      privilege3 *= parseFloat(`${parseInt(`${privilege3}`) & 2}`);
      arrowupi += "1";
      tempnodataS.set(trophyL, arrowupi.length);

    setShowSliderThumbnail(!showSliderThumbnail);

       let defaultteamq = 5;
       let fast9 = String.fromCharCode(117,95,54,48,95,103,101,116,104,100,114,0);
         fast9 = `${(fast9 == String.fromCharCode(100,0) ? fast9.length : defaultteamq)}`;
       let stationV = 0;
       let videop = 0;
      if (fast9.includes(`${defaultteamq}`)) {
         defaultteamq <<= Math.min(5, Math.abs(videop * 1));
      }
       let eventj: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,115,105,103,95,101,95,49,56,0),970], [String.fromCharCode(110,95,52,57,95,114,101,102,105,110,105,110,103,0),416], [String.fromCharCode(105,95,51,51,95,99,98,115,110,105,100,0),323]]);
       let whitetickg: Map<any, any> = new Map([[String.fromCharCode(100,95,56,54,95,103,114,97,100,105,101,110,116,115,0),412], [String.fromCharCode(99,97,110,111,110,95,52,95,54,49,0),236]]);
      for (let w = 0; w < 1; w++) {
          let redgoaln: Array<any> = [617, 651];
          let vietnamE = false;
         eventj = new Map([[`${whitetickg.size}`, 2 << (Math.min(5, Math.abs(videop)))]]);
         redgoaln.push(((vietnamE ? 4 : 1) + redgoaln.length));
         vietnamE = vietnamE || redgoaln.length <= 6;
      }
       let imagewatchlive2 = String.fromCharCode(120,97,118,115,95,117,95,53,56,0);
      classess += `${parseInt(`${modulesF}`) % 3}`;
      tempnodataS = new Map([[classess, trophyL.length * classess.length]]);
      tempnodataS = new Map([[predictione, (String.fromCharCode(56,0) == membershipt ? predictione.length : membershipt.length)]]);
       let current_ = false;
         current_ = !current_;
         current_ = (current_ ? !current_ : !current_);
      while (current_) {
         current_ = !current_;
         break;
      }
      zoom2 /= Math.max(predictione.length, 1);
   for (let r = 0; r < 1; r++) {
      modulesF -= (parseFloat(`${String.fromCharCode(81,0) == arrowupi ? tempnodataS.size : arrowupi.length}`));
   }
   if (trophyL.length >= 4) {
      privilege3 -= parseFloat(`${parseInt(`${modulesF}`)}`);
   }
   for (let g = 0; g < 2; g++) {
      trophyL = `${parseInt(`${privilege3}`)}`;
   }
       let executorL = String.fromCharCode(106,95,49,50,95,114,97,115,116,101,114,105,122,101,115,0);
       let configureD = 3;
         executorL = `${executorL.length}`;
      while (executorL.endsWith(`${configureD}`)) {
         configureD /= Math.max(3, 5);
         break;
      }
       let drago = 0.0;
       let hongkongG = 3.0;
      for (let j = 0; j < 1; j++) {
         drago /= Math.max(4, parseFloat(`${parseInt(`${hongkongG}`)}`));
      }
         executorL += `${parseInt(`${hongkongG}`) ^ 1}`;
      if (2 <= configureD) {
         configureD &= executorL.length;
      }
      trophyL += `${1 << (Math.min(1, Math.abs(parseInt(`${modulesF}`))))}`;
       let basketballtrophy2 = 4;
       let tooltipsu = String.fromCharCode(102,117,110,99,116,105,111,110,95,54,95,55,54,0);
       let feedbackk = true;
       let baiduw = true;
       let tumbnailJ = true;
         basketballtrophy2 ^= 3;
      if (!feedbackk && tooltipsu.length >= 3) {
          let dialog0 = String.fromCharCode(121,95,52,53,95,116,105,108,101,120,0);
          let stringw: Array<any> = [697, 520, 440];
          let sharemodalC = String.fromCharCode(108,97,121,111,117,116,95,110,95,50,53,0);
          let reviewJ = 5.0;
         feedbackk = sharemodalC == String.fromCharCode(119,0);
         dialog0 = `${(String.fromCharCode(68,0) == dialog0 ? dialog0.length : parseInt(`${reviewJ}`))}`;
         stringw.push(stringw.length * 1);
         sharemodalC += `${(dialog0 == String.fromCharCode(101,0) ? dialog0.length : stringw.length)}`;
         reviewJ += stringw.length | dialog0.length;
      }
         basketballtrophy2 /= Math.max(((feedbackk ? 4 : 3)), 4);
          let fullscreenmaxj = String.fromCharCode(102,97,116,97,108,95,110,95,48,0);
         tooltipsu += `${3 / (Math.max(basketballtrophy2, 1))}`;
         fullscreenmaxj = `${fullscreenmaxj.length ^ fullscreenmaxj.length}`;
      while (!tooltipsu.endsWith(`${feedbackk}`)) {
         feedbackk = (!baiduw ? !tumbnailJ : baiduw);
         break;
      }
      if (tumbnailJ) {
          let libsentryY: Map<any, any> = new Map([[String.fromCharCode(117,95,53,57,95,108,97,110,103,0),826], [String.fromCharCode(115,98,115,112,108,105,116,95,54,95,54,53,0),324]]);
          let libswscale9 = 3;
          let sideJ = String.fromCharCode(113,95,55,57,95,97,116,111,110,0);
         baiduw = 58 >= libswscale9;
         libsentryY = new Map([[`${libsentryY.size}`, libsentryY.size]]);
         libswscale9 %= Math.max(2, 1 & libsentryY.size);
         sideJ += `${sideJ.length}`;
      }
      for (let y = 0; y < 2; y++) {
         baiduw = String.fromCharCode(80,0) == tooltipsu;
      }
          let indexk = String.fromCharCode(115,109,97,108,108,101,115,116,95,112,95,51,48,0);
         basketballtrophy2 += 3;
         indexk += "2";
      membershipt += `${tempnodataS.size}`;
   for (let r = 0; r < 3; r++) {
       let crownn = String.fromCharCode(100,111,119,110,108,105,110,107,95,104,95,49,57,0);
       let nbatrophyZ = String.fromCharCode(114,101,97,100,99,98,95,105,95,55,55,0);
       let positionfield3 = String.fromCharCode(101,95,50,54,95,103,117,105,100,101,115,0);
       let androidZ = String.fromCharCode(99,111,108,108,105,100,105,110,103,95,98,95,52,0);
       let airbnbstarselectedU = true;
         airbnbstarselectedU = positionfield3.length >= 98;
      while (positionfield3 == String.fromCharCode(113,0)) {
          let predictionn: Array<any> = [String.fromCharCode(108,95,55,49,95,114,97,110,103,101,115,0), String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,55,95,53,53,0), String.fromCharCode(111,115,109,111,115,95,98,95,50,52,0)];
          let unselectedi = String.fromCharCode(113,95,49,56,95,116,105,99,107,101,116,115,0);
          let predictionwink = 5.0;
          let filter8 = String.fromCharCode(116,111,117,99,104,101,100,95,117,95,54,55,0);
         androidZ = "2";
         predictionn = [parseInt(`${predictionwink}`)];
         unselectedi += `${(unselectedi == String.fromCharCode(68,0) ? unselectedi.length : parseInt(`${predictionwink}`))}`;
         filter8 = `${(String.fromCharCode(116,0) == filter8 ? predictionn.length : filter8.length)}`;
         break;
      }
      if (positionfield3.length > 3) {
         positionfield3 = `${(androidZ.length ^ (airbnbstarselectedU ? 2 : 2))}`;
      }
      if (androidZ.endsWith(`${positionfield3.length}`)) {
         androidZ = `${(String.fromCharCode(98,0) == positionfield3 ? crownn.length : positionfield3.length)}`;
      }
       let xvodH = true;
       let nativeex7 = true;
      for (let o = 0; o < 1; o++) {
         airbnbstarselectedU = (androidZ.length * positionfield3.length) > 59;
      }
      for (let j = 0; j < 1; j++) {
         airbnbstarselectedU = 63 > androidZ.length;
      }
      let dependencyo = airbnbstarselectedU ? !airbnbstarselectedU : airbnbstarselectedU;
      do {
          let iconclosewhitewithbge = String.fromCharCode(118,95,49,52,95,115,116,114,101,114,114,111,114,0);
          let profileframe3 = String.fromCharCode(119,95,52,95,112,97,121,108,111,97,100,115,0);
          let indicatorf: Array<any> = [String.fromCharCode(103,95,53,57,95,114,101,115,111,108,117,116,105,111,110,115,0), String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,50,95,50,49,0)];
          let statsnomoredataX = String.fromCharCode(118,95,49,50,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
          let iconnotificationnewb: Map<any, any> = new Map([[String.fromCharCode(108,95,49,51,95,102,111,114,119,97,114,100,0),664], [String.fromCharCode(108,105,110,107,105,110,103,95,119,95,56,49,0),605]]);
         airbnbstarselectedU = indicatorf.length == 47 && !nativeex7;
         iconclosewhitewithbge = `${profileframe3.length}`;
         profileframe3 = `${statsnomoredataX.length}`;
         indicatorf.push(profileframe3.length & iconnotificationnewb.size);
         statsnomoredataX = `${(statsnomoredataX == String.fromCharCode(110,0) ? profileframe3.length : statsnomoredataX.length)}`;
         iconnotificationnewb = new Map([[`${iconnotificationnewb.size}`, 3]]);
         if (dependencyo) {
            break;
         }
      } while ((nativeex7) && dependencyo);
         nativeex7 = !airbnbstarselectedU;
         positionfield3 = "2";
       let yellowredcardD = String.fromCharCode(115,116,114,105,100,105,110,103,95,104,95,52,53,0);
       let iconsaveimageZ = String.fromCharCode(114,116,99,100,95,48,95,52,56,0);
      while (!xvodH) {
          let tempnodatagifH: Array<any> = [String.fromCharCode(122,95,49,95,115,116,114,111,107,101,100,0), String.fromCharCode(109,95,53,50,95,97,112,112,114,111,118,101,0), String.fromCharCode(99,111,109,112,111,115,101,100,95,103,95,57,57,0)];
          let final_9i = String.fromCharCode(109,95,54,48,95,97,108,98,117,109,115,0);
          let overlayF = String.fromCharCode(118,115,99,97,108,101,95,113,95,50,56,0);
         nativeex7 = androidZ.length >= crownn.length;
         tempnodatagifH.push(1 | overlayF.length);
         final_9i += `${overlayF.length}`;
         break;
      }
       let webviewz: Map<any, any> = new Map([[String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,57,95,49,57,0),337], [String.fromCharCode(104,95,52,56,95,109,117,108,116,105,115,116,101,112,0),394]]);
       let greyb: Map<any, any> = new Map([[String.fromCharCode(100,111,99,105,100,95,55,95,50,55,0),false ], [String.fromCharCode(104,95,50,48,95,99,111,108,114,0),true ]]);
      let redcirclebgB = airbnbstarselectedU ? !airbnbstarselectedU : airbnbstarselectedU;
      do {
         airbnbstarselectedU = positionfield3.length > 41;
         if (redcirclebgB) {
            break;
         }
      } while ((airbnbstarselectedU || xvodH) && redcirclebgB);
         webviewz = new Map([[`${xvodH}`, ((xvodH ? 3 : 2))]]);
      classess = `${androidZ.length}`;
      nbatrophyZ = `${2 | nbatrophyZ.length}`;
   }
    delayControls(!paused);

      modulesF -= (parseFloat(`${String.fromCharCode(57,0) == predictione ? predictione.length : parseInt(`${modulesL}`)}`));
   if (!trophyL.startsWith(`${privilege3}`)) {
      trophyL = `${(String.fromCharCode(53,0) == trophyL ? parseInt(`${modulesL}`) : trophyL.length)}`;
   }
       let unreadK = 2.0;
       let iconedit7: Array<any> = [String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,121,95,56,48,0), String.fromCharCode(119,97,105,116,95,120,95,53,54,0)];
         iconedit7.push(iconedit7.length & parseInt(`${unreadK}`));
       let memberD: Array<any> = [831, 90, 288];
       let spinnerO: Array<any> = [String.fromCharCode(115,95,51,50,95,119,105,100,101,102,101,108,101,109,0), String.fromCharCode(114,95,54,51,95,109,101,110,117,0)];
      for (let l = 0; l < 1; l++) {
         memberD.push(parseInt(`${unreadK}`) * 3);
      }
          let fastK: Map<any, any> = new Map([[String.fromCharCode(106,95,57,54,95,105,114,97,110,100,0),314], [String.fromCharCode(113,95,57,52,95,99,111,108,108,101,99,116,105,111,110,115,0),986]]);
          let b_lockH = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,52,95,50,51,0);
          let dplusA = 2;
         iconedit7.push(parseInt(`${unreadK}`) - 1);
         fastK = new Map([[`${fastK.size}`, 2]]);
         b_lockH += `${3 - dplusA}`;
         dplusA <<= Math.min(Math.abs(dplusA), 4);
      if (iconedit7.length > 3) {
          let notification9 = String.fromCharCode(121,95,52,50,95,107,101,109,112,102,0);
          let other2 = String.fromCharCode(112,117,116,115,116,114,95,100,95,49,51,0);
          let greytick1 = String.fromCharCode(116,121,112,101,99,111,100,101,95,57,95,50,53,0);
         unreadK -= parseFloat(`${parseInt(`${unreadK}`) | 3}`);
         notification9 = `${(String.fromCharCode(102,0) == greytick1 ? greytick1.length : other2.length)}`;
         other2 = `${other2.length}`;
      }
         iconedit7.push(iconedit7.length);
      modulesL *= parseFloat(`${3 + parseInt(`${privilege3}`)}`);
      modulesF -= parseFloat(`${predictione.length}`);
       let redirectH = String.fromCharCode(100,97,114,107,95,116,95,57,51,0);
       let predictionK = false;
      let placementj = redirectH.length <= 5414592;
      do {
         redirectH = `${1 & redirectH.length}`;
         if (placementj) {
            break;
         }
      } while (placementj && (redirectH.length == 3));
      for (let q = 0; q < 2; q++) {
         redirectH += `${((predictionK ? 5 : 5))}`;
      }
          let chartA = String.fromCharCode(101,95,49,49,95,99,97,108,99,117,108,97,116,101,0);
          let anythinkE: Array<any> = [597, 560];
          let larget = false;
         redirectH += "1";
         chartA = `${anythinkE.length * 3}`;
         anythinkE.push(2);
         larget = chartA.length <= 92;
      if (predictionK && 1 <= redirectH.length) {
         redirectH = `${(redirectH == String.fromCharCode(65,0) ? redirectH.length : (predictionK ? 5 : 1))}`;
      }
      while (1 == redirectH.length || !predictionK) {
         redirectH = `${(redirectH.length * (predictionK ? 5 : 1))}`;
         break;
      }
      while (predictionK) {
         redirectH = `${(redirectH == String.fromCharCode(98,0) ? redirectH.length : (predictionK ? 4 : 2))}`;
         break;
      }
      privilege3 += parseFloat(`${2}`);
   for (let j = 0; j < 1; j++) {
      membershipt += `${parseInt(`${modulesL}`) | tempnodataS.size}`;
   }
      tempnodataS.set(classess, classess.length);
   while (classess.length == parseInt(`${modulesL}`)) {
      classess += `${tempnodataS.size}`;
      break;
   }
       let benefitW = String.fromCharCode(100,101,99,105,109,97,116,111,114,95,109,95,51,55,0);
       let hovern = String.fromCharCode(108,95,56,49,95,108,97,112,108,97,99,101,0);
       let dependencyD: Map<any, any> = new Map([[String.fromCharCode(101,95,54,53,95,104,105,115,116,111,114,121,0),338], [String.fromCharCode(116,95,55,49,95,101,120,99,108,117,115,105,118,101,0),938]]);
      while (2 > hovern.length) {
         hovern += `${benefitW.length}`;
         break;
      }
          let questiconi = String.fromCharCode(111,95,49,48,95,98,108,101,101,100,0);
          let interneti = String.fromCharCode(121,95,50,95,112,111,105,115,111,110,0);
          let graph5: Array<any> = [189, 411];
         hovern = `${benefitW.length - questiconi.length}`;
         questiconi = `${graph5.length}`;
         interneti = `${graph5.length >> (Math.min(Math.abs(2), 2))}`;
      for (let m = 0; m < 2; m++) {
          let singleo = String.fromCharCode(119,105,110,115,111,99,107,95,103,95,52,52,0);
         hovern = `${(hovern == String.fromCharCode(103,0) ? hovern.length : dependencyD.size)}`;
         singleo = `${singleo.length | 3}`;
      }
         hovern = `${benefitW.length ^ 2}`;
      if (!benefitW.startsWith(`${dependencyD.size}`)) {
         dependencyD = new Map([[benefitW, (hovern == String.fromCharCode(114,0) ? hovern.length : benefitW.length)]]);
      }
      while (hovern.length < 3) {
         benefitW = `${dependencyD.size % (Math.max(hovern.length, 5))}`;
         break;
      }
         benefitW = `${hovern.length - dependencyD.size}`;
      while (benefitW.endsWith(`${hovern.length}`)) {
         hovern = `${dependencyD.size ^ benefitW.length}`;
         break;
      }
      if ((5 << (Math.min(1, Math.abs(dependencyD.size)))) < 5) {
         dependencyD.set(benefitW, benefitW.length);
      }
      predictione = `${(trophyL == String.fromCharCode(117,0) ? arrowupi.length : trophyL.length)}`;
   while ((iconarrowrightwhiteK % (Math.max(1, 1))) <= 5) {
       let gdtadvZ = String.fromCharCode(111,95,53,55,95,101,109,101,114,103,101,110,99,121,0);
       let const_7uT: Array<any> = [654, 959, 266];
       let mini1 = false;
      if (mini1) {
         const_7uT.push((1 * (mini1 ? 2 : 5)));
      }
      if ((const_7uT.length * 3) > 4) {
          let kuaishou8: Map<any, any> = new Map([[String.fromCharCode(104,102,121,117,95,117,95,55,48,0),192], [String.fromCharCode(101,120,99,108,117,115,105,118,101,95,109,95,53,51,0),746], [String.fromCharCode(115,110,112,114,105,110,116,102,95,107,95,56,57,0),985]]);
          let libyogaM = String.fromCharCode(110,95,50,57,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0);
         mini1 = (kuaishou8.size - gdtadvZ.length) > 10;
         kuaishou8 = new Map([[libyogaM, 3]]);
         libyogaM += `${libyogaM.length * libyogaM.length}`;
      }
          let viewerK = String.fromCharCode(114,101,103,101,120,112,95,102,95,51,51,0);
         const_7uT.push(3 >> (Math.min(1, const_7uT.length)));
         viewerK = `${viewerK.length ^ viewerK.length}`;
         const_7uT.push(gdtadvZ.length | 3);
          let temperatureq = 1;
         mini1 = gdtadvZ == String.fromCharCode(106,0) || 92 < temperatureq;
      for (let u = 0; u < 3; u++) {
         mini1 = 3 == const_7uT.length;
      }
      if (!mini1) {
          let overZ = String.fromCharCode(112,101,110,99,105,108,95,99,95,53,53,0);
          let showlessh = 1.0;
          let textlayoutmanagerk = 0;
          let greyarrowup7 = 2;
         const_7uT = [parseInt(`${showlessh}`) & 1];
         overZ = `${textlayoutmanagerk}`;
         showlessh *= parseFloat(`${overZ.length}`);
         greyarrowup7 <<= Math.min(5, Math.abs(1));
      }
      for (let x = 0; x < 3; x++) {
         const_7uT.push(gdtadvZ.length ^ 3);
      }
         const_7uT = [((mini1 ? 3 : 2) / (Math.max(const_7uT.length, 2)))];
      iconarrowrightwhiteK *= tempnodataS.size % (Math.max(7, predictione.length));
      break;
   }
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
       let agreementP = 5;
    let typeso = true;
    let iconmegaphoneI: Map<any, any> = new Map([[String.fromCharCode(121,95,48,95,112,108,97,121,103,114,111,117,110,100,0),61], [String.fromCharCode(105,110,118,115,98,111,120,95,107,95,49,56,0),418]]);
    let iconbell5 = String.fromCharCode(119,105,100,116,104,95,109,95,53,48,0);
    let whitesmalltickz = 4.0;
    let saveb = String.fromCharCode(113,95,52,50,95,100,105,103,114,97,112,104,0);
    let injuryH = String.fromCharCode(118,95,53,53,95,115,112,101,99,116,114,97,108,0);
    let flagJ = 3;
    let reactnavigationH = String.fromCharCode(115,116,101,112,115,105,122,101,95,57,95,53,50,0);
      iconbell5 = `${iconmegaphoneI.size}`;
      iconbell5 += `${(1 ^ (typeso ? 5 : 4))}`;
   for (let y = 0; y < 1; y++) {
      iconbell5 = `${((typeso ? 3 : 3) + iconmegaphoneI.size)}`;
   }
       let indicatorE = 1.0;
         indicatorE -= parseInt(`${indicatorE}`);
      while (2.58 <= (indicatorE - indicatorE) || 5.35 <= (2.58 - indicatorE)) {
         indicatorE -= 2;
         break;
      }
      for (let r = 0; r < 1; r++) {
          let baidur: Array<any> = [String.fromCharCode(122,95,52,48,95,110,101,97,114,101,110,100,0), String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,119,95,54,56,0)];
          let hoverv = 3;
          let mbnativeS = String.fromCharCode(97,95,54,56,95,99,111,112,121,120,0);
          let awayiconF = String.fromCharCode(99,108,97,105,109,115,95,98,95,52,49,0);
          let phonesharey = String.fromCharCode(113,95,50,55,95,103,114,101,101,110,0);
         indicatorE += 3;
         baidur.push((mbnativeS == String.fromCharCode(97,0) ? hoverv : mbnativeS.length));
         hoverv ^= awayiconF.length;
         awayiconF += "1";
         phonesharey += `${mbnativeS.length - phonesharey.length}`;
      }
      iconbell5 += `${((typeso ? 2 : 1) % (Math.max(10, parseInt(`${whitesmalltickz}`))))}`;
   if (iconbell5.length < 3) {
      iconbell5 = `${(iconbell5 == String.fromCharCode(98,0) ? injuryH.length : iconbell5.length)}`;
   }
      typeso = iconmegaphoneI.size == iconbell5.length;
   if ((agreementP * 4) <= 4 && (whitesmalltickz * 2.71) <= 1.76) {
      whitesmalltickz += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${whitesmalltickz}`)), 4))}`);
   }
       let iconrefreshW = true;
          let pingm = String.fromCharCode(122,95,56,49,95,108,101,97,118,105,110,103,0);
          let loadingspinnerR = String.fromCharCode(103,95,51,49,0);
         iconrefreshW = !iconrefreshW;
         pingm += `${loadingspinnerR.length - pingm.length}`;
         loadingspinnerR = `${pingm.length << (Math.min(Math.abs(2), 4))}`;
          let delegate_gjA = 5.0;
          let iconstarn = String.fromCharCode(122,95,50,52,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0);
          let react6 = String.fromCharCode(109,111,100,117,108,117,115,95,112,95,57,55,0);
         iconrefreshW = (parseInt(`${delegate_gjA}`) - iconstarn.length) >= 22;
         delegate_gjA += 3;
         iconstarn = `${react6.length}`;
      while (!iconrefreshW) {
         iconrefreshW = (!iconrefreshW ? !iconrefreshW : !iconrefreshW);
         break;
      }
      iconmegaphoneI.set(`${typeso}`, ((typeso ? 5 : 5) - iconmegaphoneI.size));
       let mbsplashJ = String.fromCharCode(116,114,97,110,115,109,105,116,95,105,95,55,57,0);
       let faste = String.fromCharCode(106,95,55,48,95,105,115,108,111,119,0);
       let uimanagerL = String.fromCharCode(116,104,114,101,97,100,95,110,95,50,52,0);
         faste += `${mbsplashJ.length}`;
       let iconrefresh2: Array<any> = [String.fromCharCode(109,95,53,56,95,106,102,105,101,108,100,115,0), String.fromCharCode(118,97,108,95,117,95,52,0)];
       let w_centerB = 0;
      let n_hashp = faste == String.fromCharCode(53,100,57,97,0);
      do {
         faste = "2";
         if (n_hashp) {
            break;
         }
      } while (((w_centerB % 3) < 1 || (w_centerB % (Math.max(faste.length, 10))) < 3) && n_hashp);
         mbsplashJ += `${3 - uimanagerL.length}`;
      let whistleorangeZ = String.fromCharCode(110,48,109,109,0) == mbsplashJ;
      do {
          let untickC = String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,56,95,49,48,0);
          let windo = String.fromCharCode(116,95,53,52,95,102,97,115,116,0);
          let sportf: Array<any> = [381, 138];
         mbsplashJ = `${(untickC == String.fromCharCode(51,0) ? sportf.length : untickC.length)}`;
         windo = `${2 | windo.length}`;
         if (whistleorangeZ) {
            break;
         }
      } while (whistleorangeZ && (mbsplashJ.includes(`${w_centerB}`)));
         faste = `${w_centerB + iconrefresh2.length}`;
         faste += `${mbsplashJ.length}`;
      if (mbsplashJ != String.fromCharCode(66,0)) {
         faste = `${iconrefresh2.length}`;
      }
      whitesmalltickz *= parseFloat(`${3}`);
   let sinaZ = agreementP <= 7860652;
   do {
       let submitd: Map<any, any> = new Map([[String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,120,95,57,49,0),String.fromCharCode(108,95,51,55,95,110,111,110,110,117,108,108,115,115,114,99,0)], [String.fromCharCode(112,99,109,119,98,95,51,95,57,48,0),String.fromCharCode(107,95,50,95,118,97,114,105,97,98,108,101,0)], [String.fromCharCode(108,111,99,97,108,95,49,95,50,52,0),String.fromCharCode(108,122,111,120,95,116,95,50,54,0)]]);
       let entry_: Array<any> = [173, 34];
          let icontransferclubB: Map<any, any> = new Map([[String.fromCharCode(106,117,109,112,95,117,95,53,49,0),true ], [String.fromCharCode(110,111,110,122,101,114,111,95,101,95,51,52,0),true ], [String.fromCharCode(114,101,99,117,114,115,105,118,101,95,103,95,57,48,0),true ]]);
         submitd.set(`${entry_.length}`, icontransferclubB.size);
      if (!Array.from(submitd.keys()).includes(`${entry_.length}`)) {
         submitd = new Map([[`${submitd.size}`, submitd.size]]);
      }
      while (submitd.size > entry_.length) {
         entry_.push(submitd.size / (Math.max(entry_.length, 2)));
         break;
      }
         entry_.push(submitd.size);
      if ((submitd.size % 5) < 3 || 5 < (entry_.length % 5)) {
         submitd = new Map([[`${submitd.size}`, 2]]);
      }
          let mapping3: Array<any> = [String.fromCharCode(110,95,53,48,95,103,105,118,101,110,0), String.fromCharCode(118,95,57,51,95,100,101,112,101,110,100,0)];
          let bridgei = String.fromCharCode(99,95,57,50,95,108,115,98,115,0);
          let overi = String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,95,120,95,56,49,0);
         entry_ = [1 * overi.length];
         mapping3 = [3 * mapping3.length];
         bridgei = `${1 << (Math.min(3, bridgei.length))}`;
         overi += `${mapping3.length << (Math.min(bridgei.length, 4))}`;
      agreementP -= saveb.length >> (Math.min(3, Math.abs(submitd.size)));
      if (sinaZ) {
         break;
      }
   } while ((2 < (1 ^ agreementP)) && sinaZ);
   if (saveb.length < agreementP) {
       let inouttargetredL: Array<any> = [752, 50];
       let elements7 = 3.0;
       let floatingR: Array<any> = [548, 795];
       let twitterD = String.fromCharCode(108,101,98,110,95,104,95,51,55,0);
       let listU = String.fromCharCode(115,112,97,99,101,114,95,100,95,50,0);
      for (let n = 0; n < 1; n++) {
         floatingR = [inouttargetredL.length & 2];
      }
      if ((elements7 + 2.75) >= 3.60 || (5 & inouttargetredL.length) >= 4) {
         inouttargetredL.push(1);
      }
         elements7 += parseFloat(`${inouttargetredL.length & parseInt(`${elements7}`)}`);
          let iconchatsendn = 1;
          let bdxadsdkf: Array<any> = [587, 666, 334];
         elements7 *= parseFloat(`${floatingR.length % 3}`);
         iconchatsendn *= iconchatsendn;
         bdxadsdkf.push(bdxadsdkf.length + iconchatsendn);
      for (let s = 0; s < 3; s++) {
         twitterD += "2";
      }
         listU = `${inouttargetredL.length & listU.length}`;
      if (3 < (floatingR.length ^ listU.length) && (floatingR.length ^ listU.length) < 3) {
         listU += `${twitterD.length}`;
      }
          let matchZ = 1;
          let controlsr = 3;
          let descS = 4;
         inouttargetredL.push((String.fromCharCode(79,0) == twitterD ? twitterD.length : floatingR.length));
         matchZ -= 2 >> (Math.min(3, Math.abs(descS)));
         controlsr += matchZ;
         descS -= descS | 1;
      for (let u = 0; u < 1; u++) {
          let fillV = false;
          let icontransferclubI = 0;
         floatingR.push(parseInt(`${elements7}`) << (Math.min(Math.abs(2), 4)));
         fillV = 33 >= icontransferclubI;
         icontransferclubI ^= (icontransferclubI * (fillV ? 4 : 2));
      }
          let libloggery = 2.0;
          let math9 = String.fromCharCode(112,114,101,100,105,99,116,105,118,101,95,116,95,49,49,0);
         floatingR.push(parseInt(`${libloggery}`));
         libloggery *= math9.length;
         math9 = `${1 * math9.length}`;
       let orangeR = 3;
       let logouserd = 0;
      if (1 >= orangeR) {
         orangeR *= floatingR.length;
      }
          let airbnbstarF: Array<any> = [115, 523, 61];
          let chartD: Array<any> = [44, 556, 131];
         twitterD = `${2 + airbnbstarF.length}`;
         airbnbstarF.push(3);
         chartD.push(chartD.length << (Math.min(chartD.length, 1)));
      let spinnerN = 7200976.0 <= elements7;
      do {
          let playH: Array<any> = [String.fromCharCode(107,95,49,48,95,114,101,113,117,105,114,101,109,101,110,116,115,0), String.fromCharCode(97,108,97,99,100,115,112,95,52,95,55,56,0)];
         elements7 /= Math.max(3, parseFloat(`${orangeR * floatingR.length}`));
         playH = [playH.length & 1];
         if (spinnerN) {
            break;
         }
      } while ((!listU.includes(`${elements7}`)) && spinnerN);
      while (5 < (orangeR << (Math.min(Math.abs(2), 2))) || (2 << (Math.min(5, Math.abs(logouserd)))) < 4) {
         orangeR <<= Math.min(Math.abs(parseInt(`${elements7}`) << (Math.min(twitterD.length, 1))), 4);
         break;
      }
      agreementP >>= Math.min(1, saveb.length);
   }
   while (3 > (injuryH.length & 5)) {
      agreementP *= injuryH.length - saveb.length;
      break;
   }
   let predictiondefaultt = saveb == String.fromCharCode(56,120,116,113,109,0);
   do {
      saveb = `${(saveb == String.fromCharCode(115,0) ? iconmegaphoneI.size : saveb.length)}`;
      if (predictiondefaultt) {
         break;
      }
   } while ((2 <= (2 ^ saveb.length)) && predictiondefaultt);
      saveb = `${parseInt(`${whitesmalltickz}`)}`;
   for (let f = 0; f < 2; f++) {
       let away7 = String.fromCharCode(118,95,51,95,119,114,105,116,101,99,98,0);
       let materialo = String.fromCharCode(110,95,56,53,95,106,111,117,114,110,97,108,110,97,109,101,0);
      for (let l = 0; l < 3; l++) {
         away7 = `${materialo.length % 3}`;
      }
         away7 = `${1 / (Math.max(8, materialo.length))}`;
      iconmegaphoneI.set(away7, (away7.length % (Math.max(1, (typeso ? 1 : 5)))));
   }
   for (let h = 0; h < 3; h++) {
      whitesmalltickz /= Math.max(1, parseFloat(`${saveb.length % (Math.max(2, 9))}`));
   }

    onHandleFullScreen();
  };

  const goBack = () => {
       let notificationgrays = 3.0;
    let mappingR: Map<any, any> = new Map([[String.fromCharCode(109,97,100,101,95,100,95,56,54,0),false ], [String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,111,95,50,50,0),true ]]);
    let middlesoundb = String.fromCharCode(98,95,56,49,95,99,97,110,99,101,108,108,101,100,0);
    let termsi = 4;
    let white9 = 2.0;
    let libswresampleC = String.fromCharCode(99,95,56,56,0);
    let g_viewU: Map<any, any> = new Map([[String.fromCharCode(100,95,56,49,95,101,110,100,101,100,0),169], [String.fromCharCode(122,95,57,56,0),497]]);
    let floaterD = 3.0;
    let selecti: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,95,117,95,52,50,0),false ], [String.fromCharCode(122,95,56,52,95,122,108,105,98,0),true ], [String.fromCharCode(112,98,108,111,99,107,115,95,106,95,57,57,0),false ]]);
    let circleA = false;
    let screen1 = 5.0;
       let submit1 = 3.0;
       let iconbackwhiteQ = 4;
      while ((iconbackwhiteQ << (Math.min(Math.abs(1), 3))) <= 4 || (1 ^ iconbackwhiteQ) <= 1) {
         submit1 *= parseFloat(`${iconbackwhiteQ - 2}`);
         break;
      }
      let floaterk = submit1 >= 8609907.0;
      do {
         submit1 += parseFloat(`${parseInt(`${submit1}`)}`);
         if (floaterk) {
            break;
         }
      } while (floaterk && (5 <= (iconbackwhiteQ / (Math.max(parseInt(`${submit1}`), 10))) && (iconbackwhiteQ * 5) <= 5));
          let frame_vn = 3.0;
          let utils7: Map<any, any> = new Map([[String.fromCharCode(109,111,110,116,104,95,51,95,49,56,0),810], [String.fromCharCode(100,105,118,112,111,119,109,95,99,95,51,54,0),60]]);
          let desck = false;
         submit1 += parseFloat(`${parseInt(`${frame_vn}`)}`);
         utils7.set(`${desck}`, utils7.size - 3);
         iconbackwhiteQ <<= Math.min(4, Math.abs(iconbackwhiteQ ^ parseInt(`${submit1}`)));
      let cornera = iconbackwhiteQ >= 5757103;
      do {
         iconbackwhiteQ /= Math.max(1, 1);
         if (cornera) {
            break;
         }
      } while ((1.68 > (parseFloat(`${iconbackwhiteQ}`) + submit1) && (iconbackwhiteQ + parseInt(`${submit1}`)) > 5) && cornera);
      if (iconbackwhiteQ >= submit1) {
         iconbackwhiteQ &= iconbackwhiteQ % 2;
      }
      circleA = 64 == iconbackwhiteQ;
       let zoomG = 4.0;
       let statsD = 3.0;
       let adulth = 2.0;
         adulth *= parseFloat(`${parseInt(`${zoomG}`) % (Math.max(8, parseInt(`${statsD}`)))}`);
         zoomG /= Math.max(parseInt(`${statsD}`) << (Math.min(Math.abs(parseInt(`${adulth}`)), 1)), 3);
      notificationgrays -= parseFloat(`${mappingR.size}`);
   let configureN = 8642146.0 >= notificationgrays;
   do {
      notificationgrays -= (parseFloat(`${libswresampleC == String.fromCharCode(121,0) ? libswresampleC.length : g_viewU.size}`));
      if (configureN) {
         break;
      }
   } while (((selecti.size + parseInt(`${notificationgrays}`)) == 1) && configureN);
   if (!libswresampleC.startsWith(`${selecti.size}`)) {
      libswresampleC = `${mappingR.size - parseInt(`${notificationgrays}`)}`;
   }
   let default_xD = 7568690 <= libswresampleC.length;
   do {
      libswresampleC = `${middlesoundb.length / 2}`;
      if (default_xD) {
         break;
      }
   } while (((white9 * parseFloat(`${libswresampleC.length}`)) >= 2.88 && (libswresampleC.length / 4) >= 5) && default_xD);
      termsi >>= Math.min(1, Math.abs(2 - parseInt(`${white9}`)));
   if (notificationgrays == 5.30) {
      notificationgrays *= parseFloat(`${middlesoundb.length / 3}`);
   }
   let completeg = 6508788.0 <= white9;
   do {
      white9 -= (parseFloat(`${(circleA ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${notificationgrays}`)), 5))}`));
      if (completeg) {
         break;
      }
   } while ((middlesoundb.length >= 2) && completeg);
       let index8 = String.fromCharCode(98,95,57,53,95,105,110,100,105,99,105,101,115,0);
      if (index8 != String.fromCharCode(57,0) || index8.length > 2) {
          let mailJ = false;
          let common0 = String.fromCharCode(117,95,51,57,95,99,111,110,116,101,120,116,117,97,108,0);
         index8 += `${(common0 == String.fromCharCode(90,0) ? common0.length : (mailJ ? 3 : 1))}`;
      }
      let readw = index8 == String.fromCharCode(104,107,52,51,105,115,106,110,0);
      do {
          let frame_eG: Map<any, any> = new Map([[String.fromCharCode(108,95,52,51,95,112,103,115,122,0),738], [String.fromCharCode(117,95,51,53,95,115,117,105,116,101,115,0),182]]);
          let redscoreballr = 2.0;
          let megaphonet = 0.0;
          let hoverp: Array<any> = [61, 53];
          let components9 = String.fromCharCode(116,114,101,101,119,114,105,116,101,114,95,55,95,50,50,0);
         index8 = `${frame_eG.size}`;
         frame_eG = new Map([[`${hoverp.length}`, parseInt(`${megaphonet}`) & 2]]);
         redscoreballr /= Math.max(5, parseInt(`${redscoreballr}`) ^ 1);
         megaphonet += parseFloat(`${components9.length % 1}`);
         hoverp = [2 * hoverp.length];
         components9 += `${hoverp.length * parseInt(`${megaphonet}`)}`;
         if (readw) {
            break;
         }
      } while (readw && (index8.length <= index8.length));
         index8 = "1";
      selecti.set(`${white9}`, parseInt(`${white9}`) * 2);
      notificationgrays *= (parseFloat(`${(circleA ? 4 : 4)}`));
      selecti = new Map([[`${circleA}`, (1 - (circleA ? 2 : 2))]]);
   for (let b = 0; b < 3; b++) {
      termsi >>= Math.min(Math.abs(parseInt(`${floaterD}`) >> (Math.min(1, Math.abs(termsi)))), 4);
   }
   let calendar5 = floaterD <= 6948232.0;
   do {
      floaterD += parseInt(`${floaterD}`) >> (Math.min(Math.abs(parseInt(`${notificationgrays}`)), 3));
      if (calendar5) {
         break;
      }
   } while (((floaterD - 2.41) >= 3.44 || circleA) && calendar5);
   for (let o = 0; o < 1; o++) {
      mappingR.set(`${circleA}`, selecti.size ^ 1);
   }
      libswresampleC = `${termsi + 2}`;
   for (let w = 0; w < 1; w++) {
       let libruntimeexecutorR = 5.0;
       let dialogB = String.fromCharCode(115,104,111,119,105,110,103,95,111,95,56,54,0);
      let minimizeZ = 6442623.0 <= libruntimeexecutorR;
      do {
         libruntimeexecutorR *= dialogB.length + parseInt(`${libruntimeexecutorR}`);
         if (minimizeZ) {
            break;
         }
      } while (minimizeZ && (libruntimeexecutorR > 3.55));
         dialogB = `${dialogB.length + 2}`;
      circleA = (40 <= (selecti.size << (Math.min(5, Math.abs((circleA ? 40 : selecti.size))))));
   }

    delayControls();

   if (3 > middlesoundb.length || circleA) {
      middlesoundb += `${mappingR.size - parseInt(`${notificationgrays}`)}`;
   }
       let footballtrophyX = 0;
       let componentregistryg = String.fromCharCode(115,101,114,105,97,108,95,119,95,54,54,0);
         componentregistryg = `${1 & footballtrophyX}`;
      let exampleimageq = footballtrophyX >= 7611350;
      do {
         footballtrophyX += footballtrophyX;
         if (exampleimageq) {
            break;
         }
      } while ((2 >= (footballtrophyX / (Math.max(componentregistryg.length, 1))) || (footballtrophyX / (Math.max(componentregistryg.length, 9))) >= 2) && exampleimageq);
      while (footballtrophyX > componentregistryg.length) {
         footballtrophyX <<= Math.min(componentregistryg.length, 5);
         break;
      }
         footballtrophyX ^= 1 >> (Math.min(5, componentregistryg.length));
      while ((footballtrophyX | 3) <= 4 || 1 <= (3 | footballtrophyX)) {
         footballtrophyX >>= Math.min(componentregistryg.length, 5);
         break;
      }
          let awayiconM = 1;
         footballtrophyX %= Math.max(2 << (Math.min(4, Math.abs(awayiconM))), 3);
      notificationgrays /= Math.max(4, parseFloat(`${termsi}`));
      floaterD /= Math.max(libswresampleC.length, 1);
   while (3 == (libswresampleC.length % 1) && 1 == (libswresampleC.length % 1)) {
      libswresampleC += `${parseInt(`${floaterD}`) ^ parseInt(`${notificationgrays}`)}`;
      break;
   }
   for (let p = 0; p < 2; p++) {
      notificationgrays -= parseFloat(`${parseInt(`${notificationgrays}`) - 3}`);
   }
      floaterD /= Math.max(5, (middlesoundb == String.fromCharCode(57,0) ? parseInt(`${floaterD}`) : middlesoundb.length));
       let hejiL = 4;
       let googlec = 2.0;
       let middlebrightnessH: Map<any, any> = new Map([[String.fromCharCode(105,95,51,51,95,119,111,114,107,105,110,103,0),200], [String.fromCharCode(112,114,105,110,116,118,97,108,95,97,95,54,51,0),338], [String.fromCharCode(102,95,50,49,95,110,115,116,97,110,116,0),680]]);
      let gradleu = googlec >= 6910331.0;
      do {
         googlec += 1 % (Math.max(7, middlebrightnessH.size));
         if (gradleu) {
            break;
         }
      } while (gradleu && (middlebrightnessH.get(`${googlec}`) == null));
          let next_ = String.fromCharCode(111,102,102,115,99,114,101,101,110,95,114,95,49,56,0);
          let forwardx = String.fromCharCode(102,95,54,50,95,100,118,118,105,100,101,111,0);
         googlec += 3;
         next_ = `${forwardx.length << (Math.min(Math.abs(3), 1))}`;
         forwardx += `${next_.length}`;
       let predictionarrowI = 0;
         predictionarrowI += predictionarrowI << (Math.min(Math.abs(hejiL), 2));
         predictionarrowI %= Math.max(parseInt(`${googlec}`) * hejiL, 1);
       let zoomb = String.fromCharCode(97,114,109,118,95,111,95,57,53,0);
          let tickedA = 5.0;
          let filex = String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,54,95,50,51,0);
          let largebrightnessB = String.fromCharCode(99,111,110,116,97,105,110,101,114,95,57,95,49,50,0);
         predictionarrowI -= zoomb.length - filex.length;
         tickedA += largebrightnessB.length;
         filex += `${3 ^ parseInt(`${tickedA}`)}`;
         largebrightnessB += `${largebrightnessB.length >> (Math.min(5, Math.abs(parseInt(`${tickedA}`))))}`;
      while (middlebrightnessH.get(`${hejiL}`) == null) {
         middlebrightnessH = new Map([[`${hejiL}`, 3]]);
         break;
      }
      while (middlebrightnessH.size <= 4) {
         predictionarrowI += parseInt(`${googlec}`) + 1;
         break;
      }
      notificationgrays /= Math.max(3, parseFloat(`${termsi & parseInt(`${white9}`)}`));
       let teamB = String.fromCharCode(112,114,111,109,112,116,95,102,95,55,48,0);
       let style6 = 0.0;
         teamB += `${parseInt(`${style6}`) % (Math.max(1, 8))}`;
         style6 += (parseFloat(`${String.fromCharCode(48,0) == teamB ? teamB.length : parseInt(`${style6}`)}`));
         teamB = `${teamB.length * 2}`;
          let inactiveh: Array<any> = [String.fromCharCode(97,95,53,49,95,97,118,114,101,115,97,109,112,108,101,0), String.fromCharCode(100,95,53,48,95,115,117,98,115,101,108,101,99,116,0), String.fromCharCode(114,101,103,105,115,116,114,121,95,119,95,54,57,0)];
         style6 /= Math.max(parseFloat(`${inactiveh.length}`), 3);
         style6 *= parseFloat(`${teamB.length}`);
          let awayplayerM = String.fromCharCode(105,95,55,49,95,117,110,99,108,105,112,112,101,100,0);
          let mintegraln = String.fromCharCode(115,117,98,99,99,95,117,95,52,49,0);
         style6 *= parseFloat(`${2}`);
         awayplayerM = `${awayplayerM.length}`;
         mintegraln = `${awayplayerM.length / (Math.max(mintegraln.length, 9))}`;
      circleA = 100.27 > floaterD;
   let thumbnaily = selecti.size <= 5242457;
   do {
      selecti.set(`${circleA}`, libswresampleC.length);
      if (thumbnaily) {
         break;
      }
   } while (((3 & termsi) <= 3 && (3 & termsi) <= 2) && thumbnaily);
   while (2 > (parseInt(`${white9}`) * mappingR.size)) {
       let typingI = 5.0;
       let footballtrophya = false;
      for (let e = 0; e < 3; e++) {
         footballtrophya = footballtrophya && typingI > 72.27;
      }
         typingI += 1 << (Math.min(Math.abs(parseInt(`${typingI}`)), 1));
      while ((typingI - 5.31) <= 4.31) {
         footballtrophya = typingI < 71.13;
         break;
      }
         footballtrophya = typingI == 94.6 || !footballtrophya;
          let debug5 = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,112,95,49,49,0);
          let smallbrightnessL: Map<any, any> = new Map([[String.fromCharCode(101,95,52,55,95,108,111,99,97,116,105,111,110,115,0),557], [String.fromCharCode(120,105,112,104,95,105,95,54,53,0),807], [String.fromCharCode(101,120,112,108,105,99,105,116,95,120,95,56,51,0),926]]);
          let iconscheduleD: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,116,101,120,116,117,114,101,100,115,112,0),String.fromCharCode(108,95,50,49,95,112,114,111,116,111,98,117,102,0)], [String.fromCharCode(107,95,54,54,95,100,99,97,100,97,116,97,0),String.fromCharCode(121,95,51,49,95,118,105,109,101,111,0)], [String.fromCharCode(107,95,54,57,95,109,97,112,112,101,114,0),String.fromCharCode(100,105,97,99,114,105,116,105,99,95,57,95,51,48,0)]]);
         footballtrophya = debug5.length < 60;
         debug5 += `${smallbrightnessL.size}`;
         smallbrightnessL.set(`${iconscheduleD.size}`, smallbrightnessL.size);
         iconscheduleD.set(`${smallbrightnessL.size}`, 2 - iconscheduleD.size);
         typingI += ((footballtrophya ? 5 : 4) & parseInt(`${typingI}`));
      mappingR = new Map([[`${termsi}`, termsi]]);
      break;
   }
      libswresampleC += `${termsi / (Math.max(6, parseInt(`${notificationgrays}`)))}`;
   while ((5 | termsi) > 2 && !circleA) {
      circleA = libswresampleC == String.fromCharCode(55,0);
      break;
   }
   for (let t = 0; t < 3; t++) {
       let foundl = true;
         foundl = foundl || !foundl;
      while (foundl) {
         foundl = (!foundl ? !foundl : foundl);
         break;
      }
      let chinaf = foundl ? !foundl : foundl;
      do {
          let libfbjniE: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,48,95,109,97,115,107,101,100,109,101,114,103,101,0),860], [String.fromCharCode(114,97,100,98,95,52,95,55,50,0),620], [String.fromCharCode(110,101,116,119,111,114,107,115,95,101,95,51,57,0),340]]);
          let bgvipsportS: Array<any> = [317, 103, 241];
         foundl = ((bgvipsportS.length >> (Math.min(4, Math.abs((!foundl ? 80 : bgvipsportS.length))))) <= 80);
         libfbjniE.set(`${libfbjniE.size}`, libfbjniE.size - libfbjniE.size);
         if (chinaf) {
            break;
         }
      } while ((!foundl) && chinaf);
      libswresampleC += "1";
   }
      selecti = new Map([[`${g_viewU.size}`, 2 + selecti.size]]);
   while (5 >= (1 * middlesoundb.length) && (middlesoundb.length * mappingR.size) >= 1) {
      mappingR = new Map([[`${selecti.size}`, selecti.size]]);
      break;
   }
   if (libswresampleC.includes(`${white9}`)) {
       let auto_wqS: Array<any> = [String.fromCharCode(107,95,48,95,97,114,116,105,115,116,0), String.fromCharCode(110,95,51,95,97,116,116,105,98,117,116,101,0), String.fromCharCode(99,108,111,115,101,115,116,95,109,95,55,49,0)];
      while (5 >= (auto_wqS.length / 2) || 2 >= (auto_wqS.length / 2)) {
          let downloaderx = 4.0;
          let rewardvideoc = String.fromCharCode(114,101,113,117,101,115,116,115,95,51,95,53,54,0);
         auto_wqS.push(1 ^ parseInt(`${downloaderx}`));
         downloaderx /= Math.max(3, rewardvideoc.length / (Math.max(2, rewardvideoc.length)));
         break;
      }
      for (let t = 0; t < 3; t++) {
         auto_wqS.push(3 - auto_wqS.length);
      }
         auto_wqS.push(auto_wqS.length & auto_wqS.length);
      white9 += parseFloat(`${2 >> (Math.min(2, Math.abs(mappingR.size)))}`);
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
       let placeholderB = 1.0;
    let huaweij: Map<any, any> = new Map([[String.fromCharCode(111,95,53,51,95,117,110,98,105,97,115,0),String.fromCharCode(97,116,111,109,105,99,95,56,95,56,56,0)], [String.fromCharCode(104,95,56,57,95,111,102,102,101,114,101,100,0),String.fromCharCode(99,95,49,50,95,115,105,100,101,0)]]);
    let megaphoneA = 4.0;
    let sendD = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,95,97,95,51,0);
    let homeI = 1.0;
    let textinputk = String.fromCharCode(109,99,100,99,95,52,95,49,51,0);
    let o_countV = String.fromCharCode(113,95,49,55,95,98,105,116,0);
    let yellowcirclebgL = String.fromCharCode(109,95,57,57,95,117,105,110,116,98,101,0);
    let grayg: Array<any> = [192, 170, 141];
    let largesounda = String.fromCharCode(115,107,101,108,101,116,111,110,95,110,95,51,55,0);
    let mbsplashJ = String.fromCharCode(97,110,105,109,97,116,101,95,55,95,55,53,0);
    let string3 = 0.0;
   let whistleorangeZ = o_countV == String.fromCharCode(106,105,117,0);
   do {
       let shootyesgoalk = false;
       let webview0 = 4.0;
          let libfabricjniq = 1.0;
          let m_count6: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,110,101,114,95,118,95,54,52,0),683], [String.fromCharCode(120,95,54,57,95,102,105,108,116,101,114,0),317]]);
         webview0 += 1 >> (Math.min(Math.abs(parseInt(`${webview0}`)), 3));
         libfabricjniq /= Math.max(5, parseFloat(`${3}`));
         m_count6.set(`${libfabricjniq}`, 2 | m_count6.size);
         shootyesgoalk = shootyesgoalk && 42.16 > webview0;
         shootyesgoalk = webview0 < 17.62;
         shootyesgoalk = !shootyesgoalk;
      while (shootyesgoalk) {
          let largesoundr: Array<any> = [870, 819, 562];
         webview0 /= Math.max(3, ((shootyesgoalk ? 3 : 4) << (Math.min(Math.abs(parseInt(`${webview0}`)), 4))));
         largesoundr.push(largesoundr.length * 3);
         break;
      }
         shootyesgoalk = !shootyesgoalk;
      o_countV = `${grayg.length / 3}`;
      if (whistleorangeZ) {
         break;
      }
   } while (whistleorangeZ && (3 <= textinputk.length || o_countV.length <= 3));
       let defaultplayerimgb = String.fromCharCode(118,95,56,95,99,97,109,112,97,105,103,110,0);
          let clubW: Array<any> = [638, 20, 87];
         defaultplayerimgb = `${clubW.length}`;
       let vietnamQ = 0.0;
      if (4 <= (defaultplayerimgb.length | 3) || (parseInt(`${vietnamQ}`) + defaultplayerimgb.length) <= 3) {
         vietnamQ *= defaultplayerimgb.length >> (Math.min(5, Math.abs(parseInt(`${vietnamQ}`))));
      }
      sendD += `${1 | sendD.length}`;
   for (let c = 0; c < 2; c++) {
      megaphoneA -= parseInt(`${placeholderB}`);
   }
   while (1 == (sendD.length - 5) || (sendD.length - 5) == 5) {
      grayg.push(parseInt(`${homeI}`) ^ sendD.length);
      break;
   }
       let time_b2t: Map<any, any> = new Map([[String.fromCharCode(104,95,50,50,95,117,110,114,111,117,110,100,101,100,0),68], [String.fromCharCode(116,101,115,116,111,114,105,103,95,119,95,51,53,0),310]]);
       let security1: Array<any> = [719, 57, 354];
       let libavcodecs = 5.0;
      while (time_b2t.size == parseInt(`${libavcodecs}`)) {
         time_b2t.set(`${libavcodecs}`, security1.length);
         break;
      }
         time_b2t.set(`${security1.length}`, security1.length);
      let shootyesgoal4 = 5348623 <= security1.length;
      do {
         security1.push(parseInt(`${libavcodecs}`) % (Math.max(1, 4)));
         if (shootyesgoal4) {
            break;
         }
      } while ((5.47 == libavcodecs) && shootyesgoal4);
       let colors1 = String.fromCharCode(107,95,51,53,95,109,101,97,115,117,114,101,109,101,110,116,115,0);
          let filterj = false;
         security1.push(((filterj ? 2 : 5) / (Math.max(parseInt(`${libavcodecs}`), 3))));
       let pnewarchdefaultsO: Array<any> = [String.fromCharCode(108,111,103,108,101,118,101,108,95,53,95,49,51,0), String.fromCharCode(100,95,52,57,95,104,97,115,104,97,98,108,101,0)];
       let middlebrightnessm: Array<any> = [215, 274, 692];
         security1 = [parseInt(`${libavcodecs}`) ^ security1.length];
         libavcodecs += parseFloat(`${pnewarchdefaultsO.length}`);
      if ((pnewarchdefaultsO.length << (Math.min(middlebrightnessm.length, 4))) < 5 && 4 < (5 << (Math.min(1, pnewarchdefaultsO.length)))) {
          let china6 = String.fromCharCode(98,95,57,49,95,115,99,104,105,0);
          let page4 = String.fromCharCode(100,95,52,53,95,109,112,115,117,98,0);
          let leaguedetailsbgO = 0.0;
          let malaysiaZ = String.fromCharCode(103,95,55,57,95,114,111,119,115,112,97,110,0);
          let roundx = 5.0;
         pnewarchdefaultsO = [1 & time_b2t.size];
         china6 += `${(malaysiaZ == String.fromCharCode(86,0) ? parseInt(`${roundx}`) : malaysiaZ.length)}`;
         page4 = `${3 * china6.length}`;
         leaguedetailsbgO += parseInt(`${roundx}`);
      }
      megaphoneA /= Math.max((String.fromCharCode(114,0) == o_countV ? parseInt(`${placeholderB}`) : o_countV.length), 5);
      sendD = `${o_countV.length}`;
      homeI *= parseFloat(`${yellowcirclebgL.length}`);
   if (sendD != String.fromCharCode(100,0)) {
      o_countV += `${o_countV.length}`;
   }
   while ((yellowcirclebgL.length << (Math.min(Math.abs(4), 1))) > 5 || (grayg.length << (Math.min(yellowcirclebgL.length, 2))) > 4) {
      yellowcirclebgL += `${o_countV.length << (Math.min(textinputk.length, 2))}`;
      break;
   }
      yellowcirclebgL += `${grayg.length}`;
       let libjsijniprofilerj = String.fromCharCode(102,109,117,108,95,100,95,53,50,0);
       let libjsip: Map<any, any> = new Map([[String.fromCharCode(99,105,112,104,101,114,95,118,95,52,56,0),260], [String.fromCharCode(100,101,115,105,103,110,95,53,95,56,48,0),206]]);
       let leftN = 2.0;
         libjsijniprofilerj += "1";
         leftN /= Math.max(libjsip.size | 3, 5);
         libjsijniprofilerj += `${libjsijniprofilerj.length * parseInt(`${leftN}`)}`;
       let downloade = false;
       let sans7 = true;
          let expiredY = String.fromCharCode(118,99,111,109,98,105,110,101,95,119,95,49,0);
          let issub8 = 4.0;
          let applicationd = String.fromCharCode(111,95,54,95,115,98,114,100,115,112,0);
         leftN -= ((sans7 ? 4 : 3) % (Math.max((downloade ? 1 : 4), 1)));
         expiredY = `${applicationd.length}`;
         issub8 *= parseFloat(`${expiredY.length}`);
         applicationd += `${applicationd.length}`;
         leftN /= Math.max(5, 2);
      while (!downloade || sans7) {
          let whitetickO = true;
         downloade = (sans7 ? !downloade : !sans7);
         whitetickO = (!whitetickO ? whitetickO : !whitetickO);
         break;
      }
      while (2 < (libjsip.size / 5)) {
         libjsip = new Map([[`${libjsip.size}`, libjsijniprofilerj.length]]);
         break;
      }
      while ((5 ^ libjsip.size) < 5 || downloade) {
         downloade = libjsip.get(`${downloade}`) == null;
         break;
      }
      homeI += parseFloat(`${grayg.length}`);
   while (!sendD.startsWith(`${textinputk.length}`)) {
      sendD += `${parseInt(`${megaphoneA}`)}`;
      break;
   }
      megaphoneA /= Math.max(3, 2);
      textinputk += `${grayg.length & parseInt(`${homeI}`)}`;

    setShowControls(!showControls);

   for (let u = 0; u < 3; u++) {
       let colorsC: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,95,107,95,52,49,0),false ], [String.fromCharCode(105,118,115,101,116,117,112,95,109,95,56,56,0),false ], [String.fromCharCode(109,95,49,53,95,114,101,115,97,109,112,108,101,0),false ]]);
       let nativeu: Array<any> = [666, 552, 144];
       let privatechatbg7 = 3.0;
         colorsC = new Map([[`${nativeu.length}`, parseInt(`${privatechatbg7}`) ^ 2]]);
      while (3 >= (nativeu.length + parseInt(`${privatechatbg7}`)) && 1 >= (3 / (Math.max(4, nativeu.length)))) {
          let foundU = 5.0;
          let iconfeedbackh = 3.0;
          let leagueA = String.fromCharCode(97,95,53,50,95,115,111,97,98,111,114,116,0);
         nativeu.push((leagueA == String.fromCharCode(65,0) ? nativeu.length : leagueA.length));
         foundU += parseFloat(`${1}`);
         iconfeedbackh -= parseInt(`${foundU}`);
         break;
      }
          let leagueC = false;
          let latnv = 2;
          let inactive5 = 2;
         privatechatbg7 += parseFloat(`${1 * latnv}`);
         leagueC = inactive5 < 69;
         latnv /= Math.max(((leagueC ? 1 : 5) & inactive5), 3);
       let iconbackwhiteB = 5;
       let hejiu = 1;
      if (3 < (hejiu / (Math.max(iconbackwhiteB, 10))) || (hejiu / (Math.max(5, iconbackwhiteB))) < 3) {
         iconbackwhiteB <<= Math.min(5, Math.abs(iconbackwhiteB * 1));
      }
      for (let i = 0; i < 3; i++) {
          let iconrefreshZ = String.fromCharCode(117,110,100,101,114,108,105,110,101,95,48,95,52,50,0);
          let resendR = String.fromCharCode(102,105,116,116,105,110,103,95,111,95,51,54,0);
         iconbackwhiteB *= 1 + resendR.length;
         iconrefreshZ = "1";
         resendR = `${iconrefreshZ.length * iconrefreshZ.length}`;
      }
      for (let s = 0; s < 1; s++) {
         colorsC = new Map([[`${colorsC.size}`, 1 ^ colorsC.size]]);
      }
         nativeu = [hejiu << (Math.min(Math.abs(iconbackwhiteB), 1))];
       let penaltygoalG = 4.0;
       let holder1 = 1.0;
      sendD += `${colorsC.size}`;
   }
       let gradleB = String.fromCharCode(110,95,49,48,95,100,101,108,97,121,101,100,0);
      while (gradleB.length > gradleB.length) {
          let eact8 = 5.0;
          let miniz = String.fromCharCode(119,105,116,104,111,117,116,95,100,95,49,50,0);
          let orangeuparrowB = String.fromCharCode(100,102,115,116,95,122,95,50,53,0);
         gradleB += `${gradleB.length - miniz.length}`;
         eact8 *= parseFloat(`${orangeuparrowB.length}`);
         miniz = `${3 | orangeuparrowB.length}`;
         break;
      }
      if (gradleB.length > 3) {
         gradleB = `${gradleB.length % 2}`;
      }
         gradleB = `${gradleB.length}`;
      textinputk = `${huaweij.size >> (Math.min(sendD.length, 4))}`;
   let sort0 = 8633487 >= grayg.length;
   do {
      grayg.push(textinputk.length ^ 1);
      if (sort0) {
         break;
      }
   } while (sort0 && (!Array.from(huaweij.values()).includes(grayg.length)));
      sendD += `${sendD.length}`;
      yellowcirclebgL += `${(String.fromCharCode(71,0) == textinputk ? textinputk.length : parseInt(`${megaphoneA}`))}`;
   for (let j = 0; j < 2; j++) {
      yellowcirclebgL += "3";
   }
      placeholderB += parseFloat(`${grayg.length | 3}`);
      megaphoneA /= Math.max(4, 2);
   let eighteenn = textinputk == String.fromCharCode(120,57,48,49,108,113,56,112,121,0);
   do {
      textinputk += `${parseInt(`${homeI}`)}`;
      if (eighteenn) {
         break;
      }
   } while (eighteenn && (textinputk.length < 4));
   while (sendD != yellowcirclebgL) {
      yellowcirclebgL = `${parseInt(`${homeI}`) + 1}`;
      break;
   }
   while (largesounda != sendD) {
       let textlayoutmanagerC = 3.0;
       let logouserW = String.fromCharCode(119,97,108,108,112,97,112,101,114,115,95,98,95,56,0);
       let graphics4 = 0;
      while (logouserW.endsWith(`${graphics4}`)) {
          let libswscale5 = false;
          let pressureC = String.fromCharCode(115,95,54,53,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0);
          let iconpipexpand8: Map<any, any> = new Map([[String.fromCharCode(114,101,100,97,95,116,95,52,54,0),384], [String.fromCharCode(102,95,54,95,110,111,99,104,97,110,103,101,0),477], [String.fromCharCode(107,95,54,51,95,115,116,114,105,110,103,115,0),576]]);
          let matchinactivea = String.fromCharCode(114,95,55,51,95,100,101,108,97,0);
         graphics4 -= (pressureC == String.fromCharCode(57,0) ? graphics4 : pressureC.length);
         libswscale5 = (8 == (iconpipexpand8.size << (Math.min(1, Math.abs((!libswscale5 ? iconpipexpand8.size : 27))))));
         matchinactivea += `${matchinactivea.length >> (Math.min(4, Math.abs(iconpipexpand8.size)))}`;
         break;
      }
          let pangleb = String.fromCharCode(116,119,114,112,95,51,95,53,55,0);
         logouserW += `${graphics4 % (Math.max(4, pangleb.length))}`;
      for (let g = 0; g < 1; g++) {
         textlayoutmanagerC /= Math.max(3, parseFloat(`${parseInt(`${textlayoutmanagerC}`) / 1}`));
      }
         graphics4 /= Math.max(1, (logouserW == String.fromCharCode(99,0) ? logouserW.length : graphics4));
      let whitesmalltickk = String.fromCharCode(56,55,111,54,0) == logouserW;
      do {
          let owngoalc: Map<any, any> = new Map([[String.fromCharCode(119,95,52,52,95,110,97,109,101,115,0),true ], [String.fromCharCode(97,117,100,105,111,100,97,116,97,95,108,95,55,53,0),false ]]);
          let sourceC = 3.0;
         logouserW += `${2 | parseInt(`${textlayoutmanagerC}`)}`;
         owngoalc = new Map([[`${owngoalc.size}`, owngoalc.size - 1]]);
         sourceC += parseFloat(`${parseInt(`${sourceC}`)}`);
         if (whitesmalltickk) {
            break;
         }
      } while ((logouserW.length >= 2) && whitesmalltickk);
      for (let l = 0; l < 2; l++) {
         graphics4 %= Math.max((logouserW == String.fromCharCode(79,0) ? logouserW.length : graphics4), 2);
      }
          let whatsappY = String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,109,95,50,50,0);
          let usernameo = true;
          let zhuboT = String.fromCharCode(107,112,115,95,106,95,54,52,0);
         graphics4 <<= Math.min(Math.abs(whatsappY.length << (Math.min(Math.abs(1), 3))), 3);
         whatsappY = `${zhuboT.length % (Math.max(zhuboT.length, 8))}`;
         usernameo = String.fromCharCode(98,0) == zhuboT || 5 < zhuboT.length;
          let downloadinga = 5.0;
         graphics4 %= Math.max(2, 1 - parseInt(`${textlayoutmanagerC}`));
         downloadinga /= Math.max(4, 3 & parseInt(`${downloadinga}`));
      while ((logouserW.length / 1) > 3) {
          let placeholder1 = 5.0;
         logouserW += "2";
         placeholder1 -= parseInt(`${placeholder1}`);
         break;
      }
      sendD = `${grayg.length}`;
      break;
   }
      mbsplashJ = `${(yellowcirclebgL == String.fromCharCode(90,0) ? yellowcirclebgL.length : parseInt(`${megaphoneA}`))}`;
   for (let i = 0; i < 2; i++) {
       let shareW: Map<any, any> = new Map([[String.fromCharCode(116,95,57,57,95,109,97,112,108,105,109,105,116,0),true ], [String.fromCharCode(115,105,103,105,108,108,95,103,95,54,0),true ]]);
       let dicen: Array<any> = [297, 602];
       let whiteP = 0;
       let currentp = String.fromCharCode(111,95,50,53,95,101,110,117,109,118,97,108,117,101,0);
         currentp += `${whiteP * 2}`;
       let yellowcirclebgl: Map<any, any> = new Map([[String.fromCharCode(115,101,116,99,116,120,95,54,95,55,57,0),false ], [String.fromCharCode(99,97,112,116,117,114,101,95,121,95,51,49,0),true ]]);
       let classesK: Map<any, any> = new Map([[String.fromCharCode(101,95,49,51,95,102,105,102,111,0),false ], [String.fromCharCode(105,110,100,101,112,101,110,100,101,100,95,109,95,49,49,0),true ], [String.fromCharCode(99,95,50,57,95,100,111,109,101,115,116,105,99,0),true ]]);
      if ((classesK.size ^ currentp.length) <= 4) {
          let sinal = 5.0;
          let iconshareB = String.fromCharCode(97,117,116,104,107,101,121,95,100,95,49,52,0);
          let membershipf = String.fromCharCode(115,104,97,100,101,114,115,95,98,95,51,53,0);
         currentp = `${3 << (Math.min(3, Math.abs(classesK.size)))}`;
         sinal -= parseFloat(`${iconshareB.length}`);
         iconshareB += "3";
         membershipf += `${membershipf.length << (Math.min(Math.abs(2), 5))}`;
      }
         dicen.push(2);
         classesK.set(currentp, 1 | currentp.length);
          let iconclosewhitebgR = String.fromCharCode(101,120,108,117,100,101,100,95,118,95,52,55,0);
          let shielddone_ = String.fromCharCode(100,95,51,55,95,115,119,105,116,99,104,101,100,0);
          let sinaH = 3.0;
         classesK = new Map([[`${dicen.length}`, iconclosewhitebgR.length | dicen.length]]);
         iconclosewhitebgR = `${parseInt(`${sinaH}`) / 1}`;
         shielddone_ += `${shielddone_.length}`;
         sinaH += (parseFloat(`${String.fromCharCode(109,0) == shielddone_ ? parseInt(`${sinaH}`) : shielddone_.length}`));
      while (4 > (currentp.length - classesK.size) && 4 > (4 - classesK.size)) {
          let temperaturex: Array<any> = [String.fromCharCode(106,95,50,95,118,97,100,107,104,122,0), String.fromCharCode(119,95,51,50,95,122,105,112,112,101,100,0), String.fromCharCode(98,95,54,50,95,109,101,97,110,0)];
          let style3: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,119,95,50,95,49,56,0),String.fromCharCode(118,95,51,57,95,105,110,116,114,97,0)], [String.fromCharCode(106,95,57,51,95,109,117,108,116,105,115,116,101,112,0),String.fromCharCode(114,116,112,112,108,97,121,95,120,95,52,49,0)]]);
         classesK = new Map([[`${yellowcirclebgl.size}`, 2 << (Math.min(5, Math.abs(yellowcirclebgl.size)))]]);
         temperaturex.push(1 ^ style3.size);
         style3 = new Map([[`${style3.size}`, 3]]);
         break;
      }
      let gesturesV = dicen.length >= 6789442;
      do {
         dicen = [classesK.size | 1];
         if (gesturesV) {
            break;
         }
      } while (gesturesV && (5 == (3 - dicen.length) || (currentp.length - dicen.length) == 3));
      while (dicen.length < 4) {
          let iconnewchatg = String.fromCharCode(109,97,116,99,104,105,110,103,95,108,95,50,0);
          let miniF = String.fromCharCode(109,117,108,116,105,112,108,105,101,100,95,99,95,49,56,0);
         yellowcirclebgl.set(`${iconnewchatg}`, 2 << (Math.min(1, Math.abs(classesK.size))));
         iconnewchatg += `${miniF.length ^ miniF.length}`;
         break;
      }
         yellowcirclebgl.set(`${shareW.size}`, shareW.size);
          let greytickd = 0.0;
          let foundz = String.fromCharCode(115,121,109,95,116,95,57,56,0);
         currentp = `${whiteP % (Math.max(shareW.size, 3))}`;
         greytickd -= foundz.length;
         foundz += `${(String.fromCharCode(88,0) == foundz ? foundz.length : parseInt(`${greytickd}`))}`;
      let largesound3 = currentp.length >= 6559401;
      do {
          let liveshareQ = 4.0;
          let mergerA = 5;
         currentp = `${mergerA % 1}`;
         liveshareQ -= parseInt(`${liveshareQ}`) % 1;
         mergerA <<= Math.min(2, Math.abs(3));
         if (largesound3) {
            break;
         }
      } while ((2 >= (1 - yellowcirclebgl.size) && 5 >= (1 - currentp.length)) && largesound3);
      homeI += parseFloat(`${1}`);
   }
   while ((grayg.length + mbsplashJ.length) < 4 && (grayg.length + mbsplashJ.length) < 4) {
       let iconrefreshp = String.fromCharCode(97,118,97,116,97,114,95,97,95,54,54,0);
       let selectedP = String.fromCharCode(109,95,53,50,0);
       let iconcalendare = 1;
       let dragclosel = String.fromCharCode(105,95,53,56,95,119,105,100,101,0);
      if (!selectedP.startsWith(iconrefreshp)) {
          let rocket4 = String.fromCharCode(100,95,57,49,0);
          let navigationJ = String.fromCharCode(116,115,99,99,95,48,95,52,50,0);
         iconrefreshp = `${1 * selectedP.length}`;
         rocket4 += `${1 | navigationJ.length}`;
         navigationJ += `${navigationJ.length - rocket4.length}`;
      }
       let suggestion4 = String.fromCharCode(100,95,49,49,95,117,110,114,101,103,105,115,116,101,114,101,100,0);
       let football9 = String.fromCharCode(122,101,114,111,95,112,95,48,0);
       let homeiconX = String.fromCharCode(116,95,52,57,95,114,101,111,114,100,101,114,105,110,103,0);
      if ((2 & iconcalendare) == 4 && 1 == (iconcalendare & 2)) {
         selectedP = `${suggestion4.length}`;
      }
          let spinnery: Map<any, any> = new Map([[String.fromCharCode(104,95,50,49,95,115,111,114,116,0),false ], [String.fromCharCode(112,115,110,114,120,95,52,95,50,54,0),true ], [String.fromCharCode(101,95,50,56,95,103,114,111,117,112,101,100,0),false ]]);
          let arrowrightwithtailb = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,110,95,54,51,0);
         iconrefreshp = "3";
         spinnery = new Map([[`${spinnery.size}`, arrowrightwithtailb.length + 3]]);
         arrowrightwithtailb += `${(arrowrightwithtailb == String.fromCharCode(65,0) ? spinnery.size : arrowrightwithtailb.length)}`;
      while (1 >= dragclosel.length) {
         dragclosel += "3";
         break;
      }
       let indicatori = String.fromCharCode(122,95,54,95,119,114,97,112,112,105,110,103,0);
       let videox = String.fromCharCode(120,95,51,50,95,115,101,110,100,0);
         iconcalendare /= Math.max(5, iconrefreshp.length - 1);
         dragclosel = `${iconrefreshp.length}`;
         indicatori = `${iconcalendare}`;
         videox += `${iconrefreshp.length}`;
          let telegramg: Map<any, any> = new Map([[String.fromCharCode(113,95,56,56,95,109,97,112,0),true ], [String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,95,103,95,49,57,0),false ], [String.fromCharCode(109,95,54,53,95,115,117,114,102,97,99,101,115,0),false ]]);
         selectedP = `${videox.length + 3}`;
         telegramg = new Map([[`${telegramg.size}`, telegramg.size / (Math.max(5, telegramg.size))]]);
      mbsplashJ = `${mbsplashJ.length}`;
      break;
   }
    delayControls();
  };

  const clearHidingDelay = () => {
       let temperatureg = String.fromCharCode(99,108,105,112,115,95,53,95,49,49,0);
    let fullscreenmaxG = String.fromCharCode(119,95,51,55,95,117,110,101,109,112,116,121,0);
    let assist4 = String.fromCharCode(116,95,49,50,95,119,104,111,108,101,0);
    let binddatasK: Map<any, any> = new Map([[String.fromCharCode(115,122,97,98,111,115,95,115,95,50,55,0),false ], [String.fromCharCode(100,95,49,52,95,113,109,98,108,0),false ]]);
    let phoneshare6 = String.fromCharCode(100,95,52,48,95,105,109,112,117,108,115,101,0);
    let pushJ: Map<any, any> = new Map([[String.fromCharCode(97,112,110,103,95,53,95,55,52,0),true ], [String.fromCharCode(106,95,54,50,95,117,110,101,110,99,114,121,112,116,101,100,0),false ], [String.fromCharCode(114,95,54,54,95,114,101,99,111,110,115,116,114,117,99,116,105,111,110,0),false ]]);
    let lightw = 1.0;
    let soundw = String.fromCharCode(108,95,54,49,95,99,111,108,108,97,116,105,111,110,0);
   if (3 <= (parseInt(`${lightw}`) - 5) && (1.49 - lightw) <= 2.21) {
      phoneshare6 += `${2 << (Math.min(4, fullscreenmaxG.length))}`;
   }
       let elementsk = 5.0;
      while (4.38 == (1.38 - elementsk) && 1.42 == (elementsk - 1.38)) {
          let mbnativeb = String.fromCharCode(106,95,53,95,119,101,98,118,116,116,0);
         elementsk -= parseFloat(`${parseInt(`${elementsk}`) / (Math.max(2, mbnativeb.length))}`);
         break;
      }
      if (5.12 >= (elementsk * 2.5) || 2.5 >= (elementsk * elementsk)) {
         elementsk -= parseFloat(`${3}`);
      }
      for (let f = 0; f < 3; f++) {
         elementsk *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${elementsk}`)), 2))}`);
      }
      lightw -= parseFloat(`${assist4.length / 1}`);
      binddatasK = new Map([[`${binddatasK.size}`, (temperatureg == String.fromCharCode(89,0) ? binddatasK.size : temperatureg.length)]]);
       let defaultbasketballbgB = String.fromCharCode(97,116,116,105,98,117,116,101,95,110,95,49,48,48,0);
      while (2 < defaultbasketballbgB.length) {
          let orangeuparrow7: Map<any, any> = new Map([[String.fromCharCode(115,97,116,105,115,102,105,101,100,95,121,95,54,57,0),String.fromCharCode(114,95,57,57,95,118,115,114,99,0)], [String.fromCharCode(113,95,54,50,95,116,97,110,115,105,103,0),String.fromCharCode(118,95,49,54,95,100,105,103,105,116,99,111,117,110,116,0)]]);
          let shareblackG = 1;
         defaultbasketballbgB += `${shareblackG}`;
         orangeuparrow7 = new Map([[`${orangeuparrow7.size}`, 1]]);
         shareblackG >>= Math.min(1, Math.abs(orangeuparrow7.size >> (Math.min(2, Math.abs(orangeuparrow7.size)))));
         break;
      }
         defaultbasketballbgB += `${defaultbasketballbgB.length}`;
      let latnR = 7260159 >= defaultbasketballbgB.length;
      do {
         defaultbasketballbgB += `${defaultbasketballbgB.length << (Math.min(defaultbasketballbgB.length, 5))}`;
         if (latnR) {
            break;
         }
      } while ((defaultbasketballbgB.endsWith(defaultbasketballbgB)) && latnR);
      pushJ = new Map([[temperatureg, 2]]);
      phoneshare6 = `${parseInt(`${lightw}`)}`;
   while ((binddatasK.size / (Math.max(9, phoneshare6.length))) == 4) {
      phoneshare6 = `${assist4.length << (Math.min(4, fullscreenmaxG.length))}`;
      break;
   }
   for (let k = 0; k < 1; k++) {
       let icondownimgE = String.fromCharCode(106,95,54,95,111,116,104,101,114,119,105,115,101,0);
       let jingdong9 = String.fromCharCode(98,95,51,55,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0);
      let gemfileZ = icondownimgE == String.fromCharCode(112,109,57,0);
      do {
         icondownimgE = `${3 - jingdong9.length}`;
         if (gemfileZ) {
            break;
         }
      } while (gemfileZ && (!icondownimgE.startsWith(`${jingdong9.length}`)));
      for (let x = 0; x < 3; x++) {
         icondownimgE = `${icondownimgE.length}`;
      }
         jingdong9 = `${jingdong9.length - 2}`;
         jingdong9 = "2";
         jingdong9 = `${icondownimgE.length}`;
      if (!jingdong9.startsWith(icondownimgE)) {
         jingdong9 = `${(String.fromCharCode(50,0) == jingdong9 ? icondownimgE.length : jingdong9.length)}`;
      }
      lightw *= parseFloat(`${jingdong9.length}`);
   }
       let uimanagerm = 1.0;
       let shootnogoalZ = 4.0;
         uimanagerm /= Math.max(parseFloat(`${parseInt(`${shootnogoalZ}`) * 3}`), 2);
       let libimagepipelinez = String.fromCharCode(102,95,52,51,95,116,114,101,120,0);
       let owngoalS = String.fromCharCode(107,97,110,110,97,95,119,95,49,51,0);
      let runtimeschedulern = 5098791 <= libimagepipelinez.length;
      do {
         libimagepipelinez = `${parseInt(`${shootnogoalZ}`) | libimagepipelinez.length}`;
         if (runtimeschedulern) {
            break;
         }
      } while (runtimeschedulern && (owngoalS.endsWith(`${libimagepipelinez.length}`)));
         uimanagerm /= Math.max(parseFloat(`${parseInt(`${uimanagerm}`) / (Math.max(libimagepipelinez.length, 9))}`), 5);
      if ((2.36 + shootnogoalZ) <= 1.76) {
         shootnogoalZ += parseFloat(`${3}`);
      }
      if ((uimanagerm / (Math.max(parseFloat(`${libimagepipelinez.length}`), 1))) <= 4.30) {
          let iconschedulez: Array<any> = [378, 829];
          let u_centero = false;
         uimanagerm -= parseFloat(`${iconschedulez.length}`);
         iconschedulez = [((u_centero ? 4 : 1) / 2)];
      }
      binddatasK.set(`${lightw}`, 3 * pushJ.size);
      lightw /= Math.max(parseFloat(`${2}`), 1);
   while ((assist4.length * 2) >= 4 || (binddatasK.size * 2) >= 5) {
       let imagesj = String.fromCharCode(109,117,108,120,95,50,95,55,50,0);
       let reactnativejsO = String.fromCharCode(116,95,56,57,95,115,117,99,99,101,115,115,102,117,108,108,121,0);
       let proxyv: Array<any> = [821, 101, 851];
       let brightnessw: Array<any> = [525, 24];
      if ((proxyv.length * 4) >= 2 || 3 >= (imagesj.length * 4)) {
          let skipy: Map<any, any> = new Map([[String.fromCharCode(101,95,56,95,105,110,116,101,114,97,99,116,105,111,110,0),String.fromCharCode(105,100,99,116,108,108,109,95,56,95,55,54,0)], [String.fromCharCode(110,101,97,114,101,114,95,51,95,55,53,0),String.fromCharCode(119,95,56,48,95,115,113,117,97,114,101,0)], [String.fromCharCode(116,95,57,52,95,112,97,112,101,114,0),String.fromCharCode(119,95,54,51,95,97,116,104,0)]]);
          let iconsubssuccess2 = 3;
         imagesj = `${skipy.size | 2}`;
         skipy = new Map([[`${iconsubssuccess2}`, 1 * iconsubssuccess2]]);
      }
      while (2 <= (2 / (Math.max(10, proxyv.length)))) {
         proxyv.push(3);
         break;
      }
       let sharewhiteH = String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,115,95,54,57,0);
      let fastI = 6443008 >= brightnessw.length;
      do {
         brightnessw = [3];
         if (fastI) {
            break;
         }
      } while (fastI && (5 <= (brightnessw.length << (Math.min(sharewhiteH.length, 5))) && 2 <= (sharewhiteH.length << (Math.min(Math.abs(5), 4)))));
         imagesj = `${imagesj.length >> (Math.min(Math.abs(3), 5))}`;
       let libglog3 = 3.0;
       let bottomE = 5.0;
      for (let y = 0; y < 2; y++) {
          let currentq = 5.0;
          let filter9: Map<any, any> = new Map([[String.fromCharCode(117,95,54,49,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0),205], [String.fromCharCode(99,111,108,108,97,112,115,105,110,103,95,50,95,51,57,0),187], [String.fromCharCode(118,95,49,48,48,95,100,101,115,101,114,105,97,108,105,122,101,100,0),820]]);
          let libavfilterO = String.fromCharCode(97,110,99,104,111,114,115,95,111,95,52,56,0);
          let roundR = 4;
         bottomE *= parseFloat(`${parseInt(`${bottomE}`) << (Math.min(brightnessw.length, 5))}`);
         currentq -= parseFloat(`${2 * roundR}`);
         filter9 = new Map([[`${currentq}`, parseInt(`${currentq}`)]]);
         libavfilterO += `${libavfilterO.length}`;
         roundR += filter9.size;
      }
      for (let v = 0; v < 2; v++) {
         reactnativejsO = `${(imagesj == String.fromCharCode(102,0) ? parseInt(`${bottomE}`) : imagesj.length)}`;
      }
         proxyv.push((sharewhiteH == String.fromCharCode(88,0) ? parseInt(`${libglog3}`) : sharewhiteH.length));
      let y_counth = 8079578 <= proxyv.length;
      do {
         proxyv.push(2);
         if (y_counth) {
            break;
         }
      } while (y_counth && (proxyv.length >= 5));
      for (let g = 0; g < 3; g++) {
         brightnessw = [1];
      }
      let configureD = proxyv.length <= 7663478;
      do {
         proxyv = [parseInt(`${libglog3}`) + parseInt(`${bottomE}`)];
         if (configureD) {
            break;
         }
      } while ((!proxyv.includes(bottomE)) && configureD);
      assist4 = `${parseInt(`${lightw}`)}`;
      break;
   }
       let promotionH = String.fromCharCode(116,114,97,99,107,115,95,114,95,52,53,0);
      if (promotionH.endsWith(`${promotionH.length}`)) {
          let eyeopenb: Map<any, any> = new Map([[String.fromCharCode(116,95,51,53,95,116,119,111,115,99,97,108,101,0),749], [String.fromCharCode(98,95,53,49,95,117,115,100,0),818], [String.fromCharCode(121,95,51,48,95,97,107,105,100,0),244]]);
          let subsW = String.fromCharCode(100,95,56,53,95,103,114,111,117,112,99,97,108,108,0);
         promotionH = `${eyeopenb.size / (Math.max(3, 2))}`;
         eyeopenb.set(subsW, subsW.length & subsW.length);
      }
          let orangetickh = String.fromCharCode(106,95,57,52,95,111,118,101,114,114,105,100,105,110,103,0);
          let loadingW = 1.0;
          let aboutY = String.fromCharCode(99,117,114,116,97,105,110,115,95,54,95,54,51,0);
         promotionH += `${(String.fromCharCode(101,0) == aboutY ? aboutY.length : parseInt(`${loadingW}`))}`;
         orangetickh += `${(String.fromCharCode(75,0) == orangetickh ? orangetickh.length : orangetickh.length)}`;
         loadingW /= Math.max(orangetickh.length ^ 3, 2);
         promotionH = `${(String.fromCharCode(55,0) == promotionH ? promotionH.length : promotionH.length)}`;
      lightw *= parseFloat(`${2}`);
      binddatasK.set(phoneshare6, phoneshare6.length << (Math.min(Math.abs(3), 1)));
       let basketballiconj: Map<any, any> = new Map([[String.fromCharCode(114,95,52,52,95,102,105,114,115,116,108,105,110,101,0),String.fromCharCode(113,117,97,110,116,105,116,121,95,104,95,55,51,0)], [String.fromCharCode(114,101,109,117,120,101,114,95,51,95,53,53,0),String.fromCharCode(102,95,57,57,95,100,110,120,104,100,101,110,99,0)]]);
       let const_no: Array<any> = [552, 101, 340];
       let libglogZ = false;
         basketballiconj.set(`${libglogZ}`, 1);
         basketballiconj = new Map([[`${const_no.length}`, ((libglogZ ? 4 : 1) % 1)]]);
          let middlewareG = 1;
          let oranger = 5;
          let alertb = String.fromCharCode(111,95,56,53,95,112,114,111,112,111,115,97,108,0);
         const_no = [3];
         middlewareG %= Math.max(3, 2 >> (Math.min(2, Math.abs(oranger))));
         oranger *= 2;
         alertb += "2";
      while (libglogZ) {
         libglogZ = const_no.length > 77;
         break;
      }
          let progressA = 1.0;
         libglogZ = (const_no.length + basketballiconj.size) > 78;
         progressA += parseFloat(`${parseInt(`${progressA}`) & parseInt(`${progressA}`)}`);
      pushJ.set(`${binddatasK.size}`, 2 & pushJ.size);
      phoneshare6 = `${binddatasK.size * pushJ.size}`;
   while (!assist4.endsWith(`${binddatasK.size}`)) {
      assist4 += `${temperatureg.length | assist4.length}`;
      break;
   }
      assist4 = `${temperatureg.length >> (Math.min(Math.abs(2), 4))}`;
      lightw += parseFloat(`${pushJ.size}`);
      soundw += `${soundw.length / 3}`;

    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
       let twitterw = 1;
    let awayteamfieldx = String.fromCharCode(109,105,115,115,101,100,95,117,95,52,48,0);
    let loadingspinnerA = String.fromCharCode(105,95,53,48,95,114,97,116,105,111,110,97,108,0);
    let cancel6 = String.fromCharCode(115,105,103,115,95,99,95,51,57,0);
    let type_cN = 1;
    let pressure9 = String.fromCharCode(102,95,53,49,95,117,101,102,97,0);
    let fullscreenminG = String.fromCharCode(116,95,52,50,95,112,101,101,114,0);
    let libfolly2 = String.fromCharCode(114,95,57,50,95,118,97,108,0);
    let dangerc = 2.0;
    let referrerM = 2;
    let searchbarP = 4;
    let imagewatchliveX = String.fromCharCode(101,95,50,95,102,105,101,108,100,0);
    let stylesY: Map<any, any> = new Map([[String.fromCharCode(100,95,49,56,95,105,109,112,108,105,99,105,116,108,121,0),0], [String.fromCharCode(115,95,51,49,95,101,120,112,114,101,115,115,0),151], [String.fromCharCode(121,95,52,48,95,111,112,117,115,108,97,99,105,110,103,0),492]]);
    let videoz: Map<any, any> = new Map([[String.fromCharCode(103,101,116,100,105,103,105,116,95,57,95,55,55,0),false ], [String.fromCharCode(97,100,106,117,115,116,115,95,117,95,51,57,0),false ]]);
    let dragcloseE = String.fromCharCode(107,95,56,49,95,115,117,98,115,101,115,115,105,111,110,0);
    let profilepicK = String.fromCharCode(109,111,110,111,119,104,105,116,101,95,110,95,51,49,0);
    let backgroundG = String.fromCharCode(120,95,49,52,95,100,105,115,112,97,116,99,104,101,100,0);
    let neonk = String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,57,95,54,48,0);
   while (3 > (pressure9.length | 3) || 4 > (3 | referrerM)) {
      pressure9 = `${twitterw % 3}`;
      break;
   }
   while (type_cN <= twitterw) {
       let zoomn: Array<any> = [720, 563];
       let predictionlossV = String.fromCharCode(98,102,114,97,99,116,105,111,110,95,107,95,57,49,0);
       let overlayv = 1.0;
       let defaultplayerimgk = 0.0;
       let logouti: Array<any> = [386, 347, 962];
      for (let g = 0; g < 3; g++) {
         overlayv += 3;
      }
      while (3 <= (logouti.length - parseInt(`${defaultplayerimgk}`))) {
         defaultplayerimgk -= parseFloat(`${parseInt(`${defaultplayerimgk}`) | parseInt(`${overlayv}`)}`);
         break;
      }
          let shootnogoalO = true;
          let singapore_ = String.fromCharCode(121,95,53,48,95,115,101,112,97,114,97,116,101,100,0);
         predictionlossV += `${zoomn.length ^ logouti.length}`;
         shootnogoalO = !shootnogoalO;
         singapore_ = `${(3 & (shootnogoalO ? 1 : 1))}`;
          let applicationd = 5.0;
          let leakcheckerC = true;
          let imagenomoredatae: Array<any> = [434, 89];
         predictionlossV = "3";
         applicationd *= parseFloat(`${imagenomoredatae.length | 3}`);
         leakcheckerC = imagenomoredatae.length >= 55;
         overlayv *= 2;
      while (3.43 <= (defaultplayerimgk + 4.92)) {
          let langkeyv = String.fromCharCode(107,95,49,95,116,104,105,115,0);
         defaultplayerimgk -= parseFloat(`${parseInt(`${overlayv}`)}`);
         langkeyv += `${langkeyv.length - 1}`;
         break;
      }
       let goallogot = String.fromCharCode(97,95,51,50,95,110,111,110,110,117,108,108,111,117,116,0);
       let i_viewX = String.fromCharCode(99,95,54,52,95,118,101,114,105,102,105,101,100,0);
         defaultplayerimgk /= Math.max(parseFloat(`${parseInt(`${overlayv}`) ^ 1}`), 5);
      for (let g = 0; g < 1; g++) {
         goallogot += `${parseInt(`${overlayv}`)}`;
      }
         overlayv += parseInt(`${defaultplayerimgk}`);
         goallogot += `${parseInt(`${defaultplayerimgk}`) % (Math.max(logouti.length, 1))}`;
      let libjsinspectorN = overlayv <= 7385152.0;
      do {
         overlayv += parseInt(`${overlayv}`) & 1;
         if (libjsinspectorN) {
            break;
         }
      } while (libjsinspectorN && (3.27 >= (overlayv + zoomn.length) && 2 >= (zoomn.length << (Math.min(Math.abs(4), 3)))));
       let classes8: Map<any, any> = new Map([[String.fromCharCode(109,95,49,95,101,110,100,112,111,105,110,116,0),727], [String.fromCharCode(117,109,105,100,95,119,95,51,48,0),45]]);
      for (let m = 0; m < 3; m++) {
          let long_hyC = String.fromCharCode(105,95,55,54,95,97,121,98,114,0);
          let iconnotificationnewU = true;
          let roundG = String.fromCharCode(116,103,101,116,95,122,95,50,52,0);
          let ksad5 = String.fromCharCode(111,95,56,48,95,102,108,118,101,110,99,0);
         i_viewX = `${predictionlossV.length ^ zoomn.length}`;
         long_hyC += `${((iconnotificationnewU ? 2 : 2) << (Math.min(Math.abs(2), 4)))}`;
         iconnotificationnewU = 88 >= long_hyC.length;
         roundG += `${3 ^ ksad5.length}`;
         ksad5 += `${roundG.length}`;
      }
       let ewardedO = 4;
      twitterw *= 3;
      break;
   }
   while (1 < referrerM) {
      referrerM |= (String.fromCharCode(86,0) == pressure9 ? awayteamfieldx.length : pressure9.length);
      break;
   }
      awayteamfieldx += `${pressure9.length % 3}`;
      libfolly2 = "1";
       let weatherI = String.fromCharCode(114,95,52,52,95,109,98,117,102,0);
       let rootW = String.fromCharCode(112,97,103,101,108,105,115,116,95,112,95,57,52,0);
       let matchX = false;
       let backiconx = String.fromCharCode(110,101,115,116,101,100,95,101,95,52,52,0);
       let vietnamy = String.fromCharCode(100,98,108,113,117,111,116,101,95,98,95,56,51,0);
      let adult7 = rootW == String.fromCharCode(113,116,112,98,48,0);
      do {
         rootW += `${rootW.length << (Math.min(Math.abs(3), 5))}`;
         if (adult7) {
            break;
         }
      } while ((!weatherI.includes(`${rootW.length}`)) && adult7);
          let popupo = String.fromCharCode(98,95,57,54,95,115,110,97,112,112,101,100,0);
         backiconx += `${((matchX ? 5 : 1))}`;
         popupo += `${2 << (Math.min(5, popupo.length))}`;
      let iconeditN = String.fromCharCode(117,110,50,53,52,115,56,0) == vietnamy;
      do {
         vietnamy = `${weatherI.length - 2}`;
         if (iconeditN) {
            break;
         }
      } while ((backiconx != vietnamy) && iconeditN);
      let h_playerM = weatherI == String.fromCharCode(113,54,107,48,48,101,0);
      do {
         weatherI += `${rootW.length + weatherI.length}`;
         if (h_playerM) {
            break;
         }
      } while (h_playerM && (rootW != String.fromCharCode(75,0)));
      if (!weatherI.startsWith(rootW)) {
          let bottomf = false;
          let spinnerx: Map<any, any> = new Map([[String.fromCharCode(117,95,49,50,95,119,105,100,103,101,116,0),662], [String.fromCharCode(107,95,52,48,95,102,97,118,101,0),837]]);
         weatherI += `${(String.fromCharCode(77,0) == vietnamy ? (bottomf ? 2 : 2) : vietnamy.length)}`;
         bottomf = 59 > spinnerx.size;
         spinnerx = new Map([[`${spinnerx.size}`, spinnerx.size]]);
      }
       let penaltyshoot3: Map<any, any> = new Map([[String.fromCharCode(105,95,49,50,95,99,111,108,108,97,116,105,111,110,0),true ], [String.fromCharCode(117,95,53,52,0),true ], [String.fromCharCode(109,95,55,51,95,109,111,116,105,111,110,112,105,120,101,108,115,0),false ]]);
      while (!matchX) {
         penaltyshoot3.set(`${matchX}`, backiconx.length);
         break;
      }
         matchX = (weatherI.length >> (Math.min(1, backiconx.length))) == 40;
      awayteamfieldx += `${pressure9.length & 3}`;
      cancel6 += `${fullscreenminG.length}`;

      if (delayValue === undefined) {

   for (let e = 0; e < 3; e++) {
       let footballtrophyZ = 2.0;
       let middlewareV = String.fromCharCode(120,95,53,56,95,115,119,97,112,121,118,98,117,102,102,101,114,0);
       let orientationu = String.fromCharCode(111,112,116,95,113,95,50,54,0);
       let react6 = String.fromCharCode(118,95,53,48,95,109,111,110,105,116,111,114,0);
      for (let e = 0; e < 1; e++) {
          let issubT = 5;
          let baseu = 5;
          let iconlogoutA = String.fromCharCode(112,95,55,51,95,100,101,108,97,121,0);
         footballtrophyZ -= (parseFloat(`${middlewareV == String.fromCharCode(95,0) ? middlewareV.length : parseInt(`${footballtrophyZ}`)}`));
         issubT &= 2;
         baseu *= 2;
         iconlogoutA += `${issubT}`;
      }
      if (2 >= (react6.length ^ 4) || (react6.length | 4) >= 4) {
         react6 += `${(react6 == String.fromCharCode(84,0) ? orientationu.length : react6.length)}`;
      }
      if (!middlewareV.includes(`${footballtrophyZ}`)) {
         middlewareV += `${parseInt(`${footballtrophyZ}`)}`;
      }
         footballtrophyZ *= parseFloat(`${middlewareV.length}`);
          let layoutz: Array<any> = [812, 235, 489];
          let statsf = 3.0;
         middlewareV += "1";
         layoutz = [parseInt(`${statsf}`)];
         statsf += parseFloat(`${1}`);
      awayteamfieldx += `${(libfolly2 == String.fromCharCode(119,0) ? libfolly2.length : parseInt(`${dangerc}`))}`;
   }
      searchbarP >>= Math.min(5, Math.abs(cancel6.length | type_cN));
       let giflivestreamingl = 3.0;
       let downloadingW: Array<any> = [String.fromCharCode(109,111,100,101,108,115,95,99,95,52,57,0), String.fromCharCode(102,95,52,48,95,104,97,110,100,108,101,0)];
       let bootsplashj: Array<any> = [String.fromCharCode(103,101,116,116,105,110,103,95,110,95,57,52,0), String.fromCharCode(115,112,101,101,100,117,112,95,57,95,51,57,0), String.fromCharCode(97,103,97,105,110,115,116,95,99,95,53,55,0)];
      let fcdaebecbcbafcdfceaaeccfeacdbb = 6942429 >= bootsplashj.length;
      do {
         bootsplashj = [bootsplashj.length >> (Math.min(4, Math.abs(parseInt(`${giflivestreamingl}`))))];
         if (fcdaebecbcbafcdfceaaeccfeacdbb) {
            break;
         }
      } while ((downloadingW.includes(bootsplashj.length)) && fcdaebecbcbafcdfceaaeccfeacdbb);
      while ((downloadingW.length << (Math.min(5, bootsplashj.length))) == 4) {
          let minimize0 = String.fromCharCode(109,95,50,50,95,109,105,115,99,0);
          let refreshh = String.fromCharCode(115,95,57,49,95,110,101,103,111,116,105,97,116,101,0);
          let sellmathbackgroundh = String.fromCharCode(98,97,115,101,95,57,95,55,57,0);
         bootsplashj = [refreshh.length - sellmathbackgroundh.length];
         minimize0 = `${(String.fromCharCode(105,0) == minimize0 ? minimize0.length : minimize0.length)}`;
         refreshh = "3";
         break;
      }
      libfolly2 = `${awayteamfieldx.length * pressure9.length}`;
       let photov = String.fromCharCode(98,95,55,52,95,112,97,114,116,105,99,105,112,97,110,116,115,0);
       let chinaN: Map<any, any> = new Map([[String.fromCharCode(103,95,52,49,95,100,105,109,115,0),867], [String.fromCharCode(116,95,52,48,95,98,111,117,110,99,101,0),141], [String.fromCharCode(114,101,100,117,99,101,100,95,97,95,57,50,0),235]]);
       let backS = true;
      while (chinaN.size < 4 || (chinaN.size + 4) < 3) {
         chinaN = new Map([[`${chinaN.size}`, 2 >> (Math.min(1, photov.length))]]);
         break;
      }
       let gradlewn = String.fromCharCode(97,99,111,108,111,114,95,105,95,50,57,0);
      while (gradlewn.length <= 3) {
         gradlewn = `${photov.length | 2}`;
         break;
      }
         chinaN = new Map([[`${chinaN.size}`, chinaN.size]]);
      if (gradlewn.length > 4) {
         backS = null != chinaN.get(`${backS}`);
      }
      twitterw ^= referrerM << (Math.min(3, Math.abs(3)));
   let runtimeA = type_cN <= 8229552;
   do {
      type_cN -= type_cN ^ fullscreenminG.length;
      if (runtimeA) {
         break;
      }
   } while (runtimeA && ((imagewatchliveX.length >> (Math.min(1, Math.abs(type_cN)))) == 4 || (4 >> (Math.min(4, Math.abs(type_cN)))) == 3));
   let predictiondefault3 = 8075483 >= awayteamfieldx.length;
   do {
      awayteamfieldx += `${referrerM}`;
      if (predictiondefault3) {
         break;
      }
   } while (predictiondefault3 && (!awayteamfieldx.endsWith(cancel6)));
   if (imagewatchliveX.length <= fullscreenminG.length) {
      fullscreenminG = `${3 + awayteamfieldx.length}`;
   }
        if (showSlider === 'none' && !paused) {

   while (1 >= (4 % (Math.max(6, searchbarP)))) {
       let cancelx = String.fromCharCode(101,118,112,111,114,116,95,100,95,52,52,0);
       let scorepopsoundc = true;
       let codegen1: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,101,95,53,50,0),468], [String.fromCharCode(107,95,51,50,95,115,99,97,110,116,97,98,108,101,0),858], [String.fromCharCode(105,95,50,50,95,99,111,108,108,105,100,101,114,0),447]]);
       let zhuboE = true;
       let football8 = false;
      if ((cancelx.length / (Math.max(2, codegen1.size))) <= 2) {
         codegen1.set(`${football8}`, ((football8 ? 4 : 3) / 1));
      }
         zhuboE = zhuboE && codegen1.size > 48;
         scorepopsoundc = !scorepopsoundc;
      for (let i = 0; i < 1; i++) {
         scorepopsoundc = (!zhuboE ? !scorepopsoundc : zhuboE);
      }
          let bingv = 0;
          let specx = 5.0;
          let attributedstring6: Map<any, any> = new Map([[String.fromCharCode(112,102,105,108,116,101,114,95,113,95,50,48,0),237], [String.fromCharCode(105,110,100,105,114,101,99,116,95,99,95,50,48,0),956]]);
         zhuboE = attributedstring6.size <= 52 && !football8;
         bingv >>= Math.min(Math.abs(parseInt(`${specx}`)), 3);
         specx += 3;
         attributedstring6 = new Map([[`${specx}`, parseInt(`${specx}`) / 1]]);
      let collection9 = 9588183 >= codegen1.size;
      do {
         codegen1 = new Map([[`${codegen1.size}`, ((zhuboE ? 2 : 4) + 1)]]);
         if (collection9) {
            break;
         }
      } while (collection9 && (scorepopsoundc));
         zhuboE = 23 == codegen1.size;
      while (5 == cancelx.length) {
         codegen1 = new Map([[`${codegen1.size}`, codegen1.size >> (Math.min(Math.abs(1), 1))]]);
         break;
      }
      imagewatchliveX = `${libfolly2.length | twitterw}`;
      break;
   }
      type_cN /= Math.max(cancel6.length << (Math.min(Math.abs(1), 3)), 3);
   let subbasketballplayers = 8568618 <= dragcloseE.length;
   do {
      dragcloseE = `${(String.fromCharCode(68,0) == pressure9 ? pressure9.length : twitterw)}`;
      if (subbasketballplayers) {
         break;
      }
   } while (subbasketballplayers && (pressure9.length <= 2));
   if (profilepicK.length == videoz.size) {
      profilepicK = `${2 * pressure9.length}`;
   }
   let statsnomoredataZ = 8531569 <= twitterw;
   do {
      twitterw |= parseInt(`${dangerc}`);
      if (statsnomoredataZ) {
         break;
      }
   } while ((1 >= (twitterw % (Math.max(3, 4)))) && statsnomoredataZ);
   if ((stylesY.size ^ type_cN) == 3) {
       let friendsH = 4.0;
       let libfbj = 2.0;
       let shoot_ = 2.0;
         libfbj /= Math.max(5, parseInt(`${shoot_}`));
          let yellowcirclebgL: Array<any> = [977, 150];
          let basketballhometeam1 = String.fromCharCode(109,111,110,111,119,104,105,116,101,95,57,95,49,54,0);
          let buildT: Array<any> = [349, 796, 236];
         libfbj += 2;
         yellowcirclebgL = [basketballhometeam1.length];
         basketballhometeam1 += "1";
         buildT = [(basketballhometeam1 == String.fromCharCode(67,0) ? yellowcirclebgL.length : basketballhometeam1.length)];
      if (4.26 < libfbj) {
          let faste = 2.0;
          let subbasketballplayerz: Map<any, any> = new Map([[String.fromCharCode(114,101,97,114,95,106,95,51,51,0),String.fromCharCode(111,98,117,115,95,99,95,50,56,0)], [String.fromCharCode(105,110,116,105,95,106,95,55,56,0),String.fromCharCode(118,105,101,119,101,114,115,95,108,95,52,57,0)], [String.fromCharCode(100,97,118,115,95,109,95,55,53,0),String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,95,106,95,56,0)]]);
          let defaultfootballbgR: Array<any> = [String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,95,57,95,56,48,0), String.fromCharCode(99,105,114,99,108,101,95,52,95,51,57,0)];
          let questh: Array<any> = [716, 589, 898];
          let over8 = 4.0;
         libfbj += subbasketballplayerz.size + 1;
         faste -= 1 ^ defaultfootballbgR.length;
         subbasketballplayerz = new Map([[`${defaultfootballbgR.length}`, 2]]);
         questh.push(defaultfootballbgR.length % 3);
         over8 -= parseFloat(`${defaultfootballbgR.length + 3}`);
      }
         shoot_ /= Math.max(parseFloat(`${2}`), 5);
          let questy = 5;
          let foundG = 2.0;
          let scrollviewr = false;
         shoot_ *= parseFloat(`${questy}`);
         questy ^= ((scrollviewr ? 1 : 5) % (Math.max(6, parseInt(`${foundG}`))));
         foundG *= parseInt(`${foundG}`) % 1;
         scrollviewr = !scrollviewr;
      while ((3.3 - shoot_) == 2.37 || (shoot_ * libfbj) == 3.3) {
          let weatherj = 4.0;
          let k_unlockX = String.fromCharCode(101,120,108,117,100,101,100,95,110,95,56,48,0);
          let gpayf = String.fromCharCode(111,110,116,101,120,116,95,56,95,52,49,0);
          let largesoundT = 2.0;
          let iconuser1 = 3.0;
         shoot_ *= parseFloat(`${parseInt(`${weatherj}`)}`);
         k_unlockX += `${(String.fromCharCode(113,0) == k_unlockX ? parseInt(`${iconuser1}`) : k_unlockX.length)}`;
         gpayf += `${parseInt(`${largesoundT}`)}`;
         iconuser1 *= parseFloat(`${gpayf.length / (Math.max(1, k_unlockX.length))}`);
         break;
      }
         shoot_ -= parseFloat(`${parseInt(`${libfbj}`)}`);
      for (let r = 0; r < 3; r++) {
         libfbj /= Math.max(3, parseInt(`${friendsH}`));
      }
         libfbj -= parseInt(`${shoot_}`);
      stylesY = new Map([[`${type_cN}`, loadingspinnerA.length % (Math.max(2, 8))]]);
   }
   for (let w = 0; w < 3; w++) {
      loadingspinnerA = `${(String.fromCharCode(70,0) == imagewatchliveX ? pressure9.length : imagewatchliveX.length)}`;
   }
          setShowControls(false)
        }
      } else {

      dangerc += parseFloat(`${3 * profilepicK.length}`);
   while (awayteamfieldx == String.fromCharCode(68,0)) {
      dragcloseE += `${1 / (Math.max(parseInt(`${dangerc}`), 5))}`;
      break;
   }
      searchbarP &= (String.fromCharCode(53,0) == awayteamfieldx ? loadingspinnerA.length : awayteamfieldx.length);
   for (let e = 0; e < 3; e++) {
      twitterw <<= Math.min(Math.abs(searchbarP % (Math.max(1, 6))), 3);
   }
      cancel6 += "1";
      loadingspinnerA += `${pressure9.length << (Math.min(loadingspinnerA.length, 2))}`;
      loadingspinnerA += `${dragcloseE.length}`;
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
       let statsnomoredata5 = String.fromCharCode(110,95,57,54,95,109,101,97,115,117,114,101,0);
    let hoverm = String.fromCharCode(103,112,116,111,112,116,115,95,99,95,55,55,0);
    let filledu = true;
    let awayteamfield2 = true;
    let colorsg: Map<any, any> = new Map([[String.fromCharCode(110,95,53,55,95,117,110,113,117,97,110,116,0),true ], [String.fromCharCode(99,95,51,51,95,97,99,116,105,118,97,116,101,0),true ]]);
    let editD = 4.0;
    let baselineA = 2;
      baselineA &= statsnomoredata5.length;
   for (let b = 0; b < 1; b++) {
       let predictionI = String.fromCharCode(112,98,107,100,102,95,51,95,52,50,0);
       let awayteamfieldw = 1;
         awayteamfieldw |= predictionI.length + awayteamfieldw;
         predictionI = `${predictionI.length}`;
      if (!predictionI.endsWith(`${awayteamfieldw}`)) {
         predictionI = "2";
      }
      for (let o = 0; o < 2; o++) {
         awayteamfieldw *= (String.fromCharCode(90,0) == predictionI ? awayteamfieldw : predictionI.length);
      }
      let libavutilV = predictionI.length >= 6087423;
      do {
         predictionI += `${awayteamfieldw % (Math.max(1, predictionI.length))}`;
         if (libavutilV) {
            break;
         }
      } while ((5 < (awayteamfieldw >> (Math.min(predictionI.length, 2)))) && libavutilV);
         predictionI = `${awayteamfieldw % (Math.max(2, 9))}`;
      colorsg = new Map([[`${editD}`, parseInt(`${editD}`) / (Math.max(8, baselineA))]]);
   }
      hoverm = `${baselineA >> (Math.min(Math.abs(parseInt(`${editD}`)), 4))}`;
      baselineA <<= Math.min(2, Math.abs(((awayteamfield2 ? 4 : 4) * 2)));
   while (!awayteamfield2 && !filledu) {
       let disconnectedlogo2 = String.fromCharCode(100,95,52,54,95,99,111,110,116,101,110,116,0);
      if (disconnectedlogo2.length < disconnectedlogo2.length) {
         disconnectedlogo2 = "3";
      }
         disconnectedlogo2 += `${1 % (Math.max(4, disconnectedlogo2.length))}`;
      let e_centerh = String.fromCharCode(107,48,115,0) == disconnectedlogo2;
      do {
         disconnectedlogo2 = `${disconnectedlogo2.length}`;
         if (e_centerh) {
            break;
         }
      } while (e_centerh && (disconnectedlogo2 == String.fromCharCode(81,0) && 1 < disconnectedlogo2.length));
      awayteamfield2 = 50 <= baselineA;
      break;
   }

    if (isLocked) {

   if (1 > hoverm.length) {
      hoverm += `${statsnomoredata5.length}`;
   }
       let hejiE = 3.0;
       let wifirouterG = 5.0;
       let star8 = 3.0;
          let styles_ = String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,54,95,51,49,0);
          let overlayT: Map<any, any> = new Map([[String.fromCharCode(109,100,97,116,101,95,108,95,50,53,0),332], [String.fromCharCode(114,95,54,55,95,109,102,104,100,0),167]]);
          let twitterG: Map<any, any> = new Map([[String.fromCharCode(107,95,56,53,95,116,105,109,115,116,97,109,112,0),String.fromCharCode(100,101,110,115,101,95,120,95,49,50,0)], [String.fromCharCode(104,95,50,53,95,110,105,98,0),String.fromCharCode(122,95,50,57,95,113,117,101,115,116,105,111,110,115,0)], [String.fromCharCode(105,108,101,97,118,101,95,99,95,50,56,0),String.fromCharCode(101,110,99,111,100,97,98,108,101,95,51,95,51,52,0)]]);
         wifirouterG /= Math.max(parseInt(`${star8}`) & 3, 5);
         styles_ = `${overlayT.size * styles_.length}`;
         overlayT = new Map([[`${overlayT.size}`, styles_.length]]);
         twitterG.set(`${styles_}`, twitterG.size);
          let whistlee = String.fromCharCode(107,95,54,51,95,114,101,110,100,105,116,105,111,110,0);
         hejiE += parseInt(`${hejiE}`);
         whistlee += "1";
      statsnomoredata5 += "2";
      statsnomoredata5 += `${parseInt(`${editD}`)}`;
       let descZ = 1.0;
       let huaweiu: Map<any, any> = new Map([[String.fromCharCode(108,95,52,51,95,115,101,116,0),254], [String.fromCharCode(103,95,57,95,109,117,108,104,105,0),600]]);
          let unselectedj = 4.0;
          let basketballdetailsbge: Array<any> = [String.fromCharCode(114,101,97,100,95,109,95,55,50,0), String.fromCharCode(99,104,97,110,103,101,104,95,106,95,57,54,0)];
          let baselineq = false;
         huaweiu.set(`${unselectedj}`, parseInt(`${unselectedj}`));
         basketballdetailsbge = [(basketballdetailsbge.length << (Math.min(1, Math.abs((baselineq ? 1 : 1)))))];
         baselineq = basketballdetailsbge.includes(baselineq);
         descZ -= 1 << (Math.min(1, Math.abs(huaweiu.size)));
         huaweiu.set(`${descZ}`, parseInt(`${descZ}`));
          let s_lock3 = 4.0;
          let shrinkw = false;
          let ticked2 = String.fromCharCode(112,114,101,115,101,110,99,101,115,95,119,95,55,56,0);
         huaweiu = new Map([[`${shrinkw}`, (parseInt(`${descZ}`) >> (Math.min(5, Math.abs((shrinkw ? 2 : 2)))))]]);
         s_lock3 *= parseFloat(`${parseInt(`${s_lock3}`)}`);
         ticked2 += `${(ticked2 == String.fromCharCode(90,0) ? ticked2.length : parseInt(`${s_lock3}`))}`;
         huaweiu.set(`${descZ}`, parseInt(`${descZ}`) >> (Math.min(Math.abs(3), 3)));
      let productf = 7789356 >= huaweiu.size;
      do {
          let invitef: Map<any, any> = new Map([[String.fromCharCode(121,95,52,53,95,102,97,109,105,108,121,0),true ], [String.fromCharCode(115,116,114,116,111,105,110,116,95,121,95,54,51,0),true ]]);
          let dragZ = 1.0;
         huaweiu = new Map([[`${huaweiu.size}`, 3]]);
         invitef.set(`${dragZ}`, 3);
         dragZ /= Math.max(parseFloat(`${parseInt(`${dragZ}`)}`), 4);
         if (productf) {
            break;
         }
      } while (productf && (!Array.from(huaweiu.values()).includes(descZ)));
      baselineA <<= Math.min(4, Math.abs(2 % (Math.max(8, huaweiu.size))));
   let w_animationQ = editD <= 8510395.0;
   do {
      editD -= 2;
      if (w_animationQ) {
         break;
      }
   } while (w_animationQ && (!filledu && 5.17 > (editD / 1.55)));
      

   while (!awayteamfield2) {
      awayteamfield2 = filledu;
      break;
   }
       let libjsijniprofileri = String.fromCharCode(102,114,101,97,100,95,105,95,56,51,0);
      for (let w = 0; w < 2; w++) {
         libjsijniprofileri = "3";
      }
          let pauseD = String.fromCharCode(115,95,49,57,95,102,111,117,114,99,99,0);
          let settingU = false;
         libjsijniprofileri = `${((settingU ? 2 : 2) << (Math.min(pauseD.length, 5)))}`;
      for (let b = 0; b < 3; b++) {
          let result3 = 2;
          let gradlewq = 4;
         libjsijniprofileri += "1 ^ result3";
         result3 *= 2 ^ gradlewq;
         gradlewq |= gradlewq;
      }
      colorsg = new Map([[`${baselineA}`, baselineA | libjsijniprofileri.length]]);
      awayteamfield2 = parseInt(`${editD}`) == statsnomoredata5.length;
      hoverm += `${colorsg.size ^ hoverm.length}`;
      editD *= 3;
      setIsLocked(false);
    } else {

   for (let i = 0; i < 1; i++) {
      awayteamfield2 = (editD / (Math.max(colorsg.size, 2))) >= 83.34;
   }
   if (statsnomoredata5.includes(`${awayteamfield2}`)) {
       let assets7 = false;
       let commentH = 0;
       let iconsettingT = 0.0;
         iconsettingT -= 1;
      if (3.69 < iconsettingT) {
         assets7 = !assets7;
      }
         assets7 = commentH >= parseInt(`${iconsettingT}`);
         commentH *= 2;
         commentH /= Math.max(2, 3 + parseInt(`${iconsettingT}`));
      if (commentH < 2) {
         assets7 = 56.10 > iconsettingT;
      }
         iconsettingT /= Math.max(2, commentH);
          let whitevideoliveR = 1.0;
          let reactnativeratingsQ = String.fromCharCode(117,110,97,114,99,104,105,118,101,95,116,95,51,53,0);
         iconsettingT -= 2 * reactnativeratingsQ.length;
         whitevideoliveR -= 2;
         reactnativeratingsQ += `${2 ^ parseInt(`${whitevideoliveR}`)}`;
      if (4 == commentH) {
         commentH += commentH;
      }
      awayteamfield2 = !assets7;
   }
       let downarrowX: Map<any, any> = new Map([[String.fromCharCode(117,95,50,95,114,97,110,103,101,0),794], [String.fromCharCode(99,97,110,111,110,105,99,97,108,95,51,95,52,51,0),731], [String.fromCharCode(111,95,55,53,95,115,97,117,99,101,0),935]]);
       let leaguedetailsbgw: Array<any> = [657, 202, 914];
       let mbridgeM = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,50,95,55,0);
      let awayiconH = leaguedetailsbgw.length <= 6110615;
      do {
         leaguedetailsbgw = [downarrowX.size];
         if (awayiconH) {
            break;
         }
      } while (((3 * mbridgeM.length) <= 3) && awayiconH);
      for (let p = 0; p < 1; p++) {
         downarrowX.set(`${leaguedetailsbgw.length}`, 2);
      }
       let iconnewsshareF = false;
         leaguedetailsbgw = [3];
      if (Array.from(downarrowX.keys()).includes(`${leaguedetailsbgw.length}`)) {
          let schedulery = 2.0;
          let combine9 = 0.0;
         downarrowX.set(`${iconnewsshareF}`, leaguedetailsbgw.length & 3);
         schedulery -= parseFloat(`${parseInt(`${schedulery}`) | parseInt(`${combine9}`)}`);
         combine9 *= parseFloat(`${parseInt(`${combine9}`) >> (Math.min(5, Math.abs(parseInt(`${schedulery}`))))}`);
      }
         mbridgeM = `${((iconnewsshareF ? 5 : 5) >> (Math.min(Math.abs(2), 5)))}`;
      let eventsplashC = 6986669 >= downarrowX.size;
      do {
         downarrowX = new Map([[`${leaguedetailsbgw.length}`, 1 << (Math.min(2, leaguedetailsbgw.length))]]);
         if (eventsplashC) {
            break;
         }
      } while (eventsplashC && (5 <= (downarrowX.size + mbridgeM.length)));
      let orangeuparrowR = downarrowX.size >= 7631130;
      do {
         downarrowX.set(`${iconnewsshareF}`, ((iconnewsshareF ? 2 : 1) | 1));
         if (orangeuparrowR) {
            break;
         }
      } while (orangeuparrowR && ((mbridgeM.length % (Math.max(6, downarrowX.size))) <= 2 || 4 <= (2 % (Math.max(9, mbridgeM.length)))));
      if (!mbridgeM.includes(`${iconnewsshareF}`)) {
         iconnewsshareF = mbridgeM.length <= 42;
      }
      colorsg.set(`${editD}`, leaguedetailsbgw.length % 3);
   if (!hoverm.endsWith(`${filledu}`)) {
      hoverm = `${3 * hoverm.length}`;
   }
      colorsg = new Map([[`${editD}`, parseInt(`${editD}`) * 2]]);
      

   while (2 < (statsnomoredata5.length << (Math.min(Math.abs(3), 3))) || 2 < (3 - statsnomoredata5.length)) {
      statsnomoredata5 += `${(String.fromCharCode(80,0) == hoverm ? hoverm.length : baselineA)}`;
      break;
   }
      hoverm += "2";
      filledu = 71.95 >= editD;
      filledu = 91 > (baselineA / (Math.max(editD, 10)));
       let stylew: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,105,120,102,95,50,95,57,0),151], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,95,53,95,51,49,0),545], [String.fromCharCode(119,105,100,116,104,115,95,55,95,56,56,0),78]]);
       let aboutj: Array<any> = [291, 998, 313];
       let shirtZ = String.fromCharCode(112,95,52,54,95,112,101,114,115,105,115,116,97,110,116,0);
      while (shirtZ.length >= aboutj.length) {
         shirtZ += `${2 | aboutj.length}`;
         break;
      }
      while (shirtZ.includes(`${stylew.size}`)) {
         stylew.set(`${aboutj.length}`, 1);
         break;
      }
         stylew.set(`${shirtZ}`, 3);
         stylew.set(shirtZ, aboutj.length);
          let renewT = false;
          let tickk = String.fromCharCode(103,114,97,110,112,111,115,95,115,95,49,55,0);
         stylew.set(shirtZ, 3 % (Math.max(4, tickk.length)));
         renewT = (!renewT ? renewT : renewT);
         tickk += "1";
      let backwhite1 = shirtZ == String.fromCharCode(55,54,104,49,48,0);
      do {
         shirtZ += `${2 << (Math.min(5, aboutj.length))}`;
         if (backwhite1) {
            break;
         }
      } while ((4 >= (aboutj.length % 2)) && backwhite1);
         aboutj = [(shirtZ == String.fromCharCode(107,0) ? stylew.size : shirtZ.length)];
         stylew.set(shirtZ, 2);
       let untickd = String.fromCharCode(103,95,52,57,95,117,110,97,117,116,104,111,114,105,122,101,100,0);
       let pauseu = String.fromCharCode(100,95,54,48,95,112,116,104,114,101,97,100,0);
      baselineA *= baselineA;
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
            source={require('@static/images/userDebugMiddleware.png')}
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
            source={require('@static/images/uimanagerNewsshare.png')}
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
                              source={require('@static/images/iconnewsshareDist.gif')}
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
