import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video, { OnProgressData, wwBinddatasHandler } from 'react-native-video';
import PlayIcon from '@static/images/eighteenGpayFootballfiledlayout.svg';
import PauseIcon from '@static/images/dialogSecurityChat.svg';
import PlayBoDanIcon from '@static/images/holderLiveendmodallogo.svg';
import PlayZhengPianIcon from '@static/images/nterstitialModuleApps.svg';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import HejiIcon from '@static/images/playlistFiledRegeng.svg';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import ww_runtime from '../../../../Umeng/ww_runtime';
import { showAdultModeVip } from '@redux/actions/ww_hash';
import { playVod, viewPlaylistDetails } from '@redux/actions/ww_floater';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import { ADULT_MODE_PREVIEW_DURATION, DOWNLOAD_WATCH_ANYTIME } from '@utility/ww_icon';
import FastImage from '../../common/ww_result';
import RedirectButton from './ww_largebrightness_arrowright_button';
import DescriptionBar from './ww_utils';
import HejiButton from './ww_favicon_button';
import { addIdToCache } from '../../../utils/ww_taiwan';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';

interface wwIndexDice {
  thumbnail?: string;
  displayHeight: number;
  vod: any;
  setCollectionEpisode?: any;
  openSheet?: any;
  isPause: boolean;
  onManualPause: (value: boolean) => void;
  isShowVideo: boolean;
  currentDuration: number;
  updateVideoDuration: (duration: number) => any;
  isActive: boolean;
}

const maxLength = 10;

const truncateVodName = (vodName: string) => {
  return vodName?.length > maxLength
    ? vodName.substring(0, maxLength) + '...'
    : vodName;
};

const videoBufferGif = require('@static/images/giflivestreamingNavigationVolume.gif')

function ShortVideoPlayer({
  vod,
  thumbnail,
  displayHeight = 0,
  openSheet,
  isPause = false,
  onManualPause,
  isShowVideo,
  currentDuration,
  updateVideoDuration,
  isActive,
}: wwIndexDice) {
  const [currentVod, setVod] = useState(vod);
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer,
  );
  const { watchAnytimeAdultMode: adultMode, adultVideoWatchTime } = screenState;
  if (currentVod?.mini_video_original_video_name == undefined) {
    currentVod.mini_video_original_video_name = '';
  }

  let vodName = !adultMode
    ? truncateVodName(currentVod?.mini_video_original_video_name)
    : truncateVodName(currentVod?.mini_video_vod?.vod_name);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { colors, textVariants } = useTheme();

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<wwBinddatasHandler>(null);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const timer = useRef<number>(0);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);
  const isBodanRef = useRef(true)
  const watchTextRef = useRef('看正片')

  const [imageLoaded, setImageLoaded] = useState(false);
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [onSliding, setOnSliding] = useState(false);
  const [miniVodUrl, setMiniVodUrl] = useState(currentVod.mini_video_origin_video_url);

  const windowWidth = Dimensions.get('window').width;

  const userState = useSelector<wwVertical>('userReducer');

  const isVip = wwBodan.fakeIsVip(userState.user);
  const disableSeek =
    !isVip && adultVideoWatchTime >= ADULT_MODE_PREVIEW_DURATION && adultMode;

  useEffect(() => {
    if (!isShowVideo && Platform.OS === 'ios') setVideoReadyIos(false);
    if (!isShowVideo && Platform.OS === 'android') setVideoReadyAndroid(false);
  }, [isShowVideo]);

  useEffect(() => {
    if (currentVod.mini_video_topic?.topic_id != 0) {
      
      isBodanRef.current = true
      
      watchTextRef.current = '看播单'
    } else {
      
      
      isBodanRef.current = false
      watchTextRef.current = '看正片'

    }

    return () => {
      setShowOverlay(false);
      setShowIcon(false);
      updateVideoDuration(0);
      
      
      isBodanRef.current = false
      watchTextRef.current = '看正片'
    };
  }, [currentVod]);

  useEffect(() => {
    if (!isActive && showIcon) {
      setShowIcon(false);
    }
  }, [isActive]);

  const openBottomSheet = useCallback(() => {
       let yingm = 0.0;
    let predictionarrowh = String.fromCharCode(114,101,100,101,109,112,116,105,111,110,95,107,95,49,51,0);
    let typinge = String.fromCharCode(114,101,115,105,115,116,97,110,99,101,95,108,95,51,53,0);
    let leftb = 0;
    let o_hashr = String.fromCharCode(110,95,49,57,95,117,110,108,111,97,100,0);
    let modalZ = String.fromCharCode(109,97,105,110,112,97,103,101,95,49,95,56,56,0);
    let dataN = String.fromCharCode(97,100,108,101,114,95,104,95,52,55,0);
    let modityE = String.fromCharCode(112,95,56,49,95,100,101,99,111,109,112,111,115,101,105,0);
    let moreI = String.fromCharCode(111,95,51,52,95,101,116,104,114,101,97,100,105,110,103,0);
    let filledv: Map<any, any> = new Map([[String.fromCharCode(109,117,109,98,97,105,95,112,95,54,48,0),507], [String.fromCharCode(110,97,99,107,95,115,95,49,51,0),563]]);
    let libglog1 = String.fromCharCode(115,101,110,100,95,102,95,53,51,0);
    let iconpipexpandq = 0.0;
    let expiredZ = 4;
    let lighth: Array<any> = [653, 925, 736];
   let libpangleflipped3 = 7464517 <= predictionarrowh.length;
   do {
      predictionarrowh = `${1 >> (Math.min(1, Math.abs(filledv.size)))}`;
      if (libpangleflipped3) {
         break;
      }
   } while ((predictionarrowh.length >= 1) && libpangleflipped3);
      o_hashr = `${libglog1.length << (Math.min(Math.abs(1), 3))}`;
      typinge = `${modityE.length | typinge.length}`;
   while (5 < modityE.length) {
      modityE = `${predictionarrowh.length ^ parseInt(`${yingm}`)}`;
      break;
   }
      moreI += `${2 + predictionarrowh.length}`;
   while (typinge.length >= dataN.length) {
      typinge += `${(String.fromCharCode(110,0) == modityE ? modityE.length : parseInt(`${yingm}`))}`;
      break;
   }
   let reward5 = String.fromCharCode(112,48,105,115,110,120,97,55,0) == o_hashr;
   do {
       let becomeq = String.fromCharCode(97,95,49,48,48,95,102,114,101,101,100,0);
       let profileq: Array<any> = [424, 528];
       let mbnativeadvancedw = String.fromCharCode(114,101,111,115,95,97,95,56,50,0);
       let feedbackw = String.fromCharCode(102,95,54,49,95,97,97,99,112,115,0);
       let libavfilterX = 3.0;
          let chinaw = false;
          let countryW = String.fromCharCode(112,114,111,103,114,101,115,115,95,106,95,51,48,0);
          let streamingK = 0.0;
         libavfilterX += countryW.length | 2;
         chinaw = !chinaw;
         countryW = `${(parseInt(`${streamingK}`) | (chinaw ? 1 : 5))}`;
         streamingK *= ((chinaw ? 4 : 4) - parseInt(`${streamingK}`));
      if (5 < (becomeq.length + 4)) {
         profileq.push(parseInt(`${libavfilterX}`) * 2);
      }
      let iconrefreshq = feedbackw.length <= 5840808;
      do {
          let iconwechatg = 2;
          let sigmobr: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,116,114,101,97,109,95,100,95,49,50,0),true ], [String.fromCharCode(106,95,55,57,95,98,97,116,99,104,101,115,0),false ], [String.fromCharCode(114,95,50,48,95,112,97,114,101,110,116,0),false ]]);
          let clearn = true;
          let codegenT = 2.0;
         feedbackw += `${parseInt(`${codegenT}`)}`;
         iconwechatg += 3 ^ iconwechatg;
         sigmobr.set(`${clearn}`, sigmobr.size);
         codegenT += 3;
         if (iconrefreshq) {
            break;
         }
      } while ((1.98 == (libavfilterX / 5.8) || 1 == (parseInt(`${libavfilterX}`) / (Math.max(7, feedbackw.length)))) && iconrefreshq);
      if (feedbackw.startsWith(mbnativeadvancedw)) {
         feedbackw = `${becomeq.length}`;
      }
      if (5 > (2 ^ feedbackw.length)) {
          let gmaili = 5;
         feedbackw = `${profileq.length % 1}`;
         gmaili |= gmaili;
      }
      if (libavfilterX > 4.70) {
          let buttonN = String.fromCharCode(116,101,97,109,115,95,52,95,56,57,0);
          let friends1: Map<any, any> = new Map([[String.fromCharCode(110,115,117,105,114,103,98,97,95,98,95,50,54,0),String.fromCharCode(114,101,118,105,111,117,115,95,52,95,55,55,0)], [String.fromCharCode(109,111,117,116,104,95,103,95,56,48,0),String.fromCharCode(97,112,112,114,111,120,95,111,95,54,49,0)]]);
          let bridgeT = 0;
          let stept = String.fromCharCode(105,95,50,53,95,100,101,109,117,120,0);
          let constantsk = String.fromCharCode(112,97,114,97,109,115,95,121,95,51,56,0);
         libavfilterX -= parseInt(`${libavfilterX}`);
         buttonN = "1";
         friends1.set(constantsk, 2);
         bridgeT <<= Math.min(buttonN.length, 3);
         stept = `${stept.length + 3}`;
         constantsk += "3";
      }
          let saveG = 4;
         profileq.push(saveG % 2);
         profileq = [parseInt(`${libavfilterX}`) / (Math.max(feedbackw.length, 3))];
         feedbackw += `${feedbackw.length | 2}`;
         becomeq = `${feedbackw.length}`;
      if ((profileq.length << (Math.min(mbnativeadvancedw.length, 4))) == 4 && 3 == (4 << (Math.min(2, mbnativeadvancedw.length)))) {
         mbnativeadvancedw += `${feedbackw.length | 1}`;
      }
      let megaphoneC = feedbackw == String.fromCharCode(52,98,95,0);
      do {
          let j_positionr = 4.0;
          let material5 = false;
         feedbackw = `${parseInt(`${j_positionr}`)}`;
         j_positionr *= ((material5 ? 3 : 3) & (material5 ? 2 : 5));
         if (megaphoneC) {
            break;
         }
      } while (megaphoneC && ((3 + feedbackw.length) == 2 || 5 == (feedbackw.length + 3)));
         libavfilterX -= feedbackw.length % 3;
      for (let x = 0; x < 3; x++) {
          let internetj = String.fromCharCode(122,95,52,49,95,111,117,116,101,114,0);
          let alert6 = String.fromCharCode(104,105,115,116,111,103,114,97,109,95,103,95,49,48,48,0);
         feedbackw += `${parseInt(`${libavfilterX}`)}`;
         internetj += `${internetj.length}`;
         alert6 = `${internetj.length}`;
      }
         mbnativeadvancedw = `${(String.fromCharCode(95,0) == mbnativeadvancedw ? feedbackw.length : mbnativeadvancedw.length)}`;
      o_hashr = `${modityE.length}`;
      if (reward5) {
         break;
      }
   } while (reward5 && (typinge != String.fromCharCode(100,0)));
       let moviesp: Array<any> = [840, 283, 855];
       let libfabricjnia = String.fromCharCode(109,95,55,56,95,109,97,108,101,0);
       let resend5 = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,108,95,52,48,0);
      for (let w = 0; w < 1; w++) {
          let iconwechatx = 4.0;
          let dycreatorK = 1.0;
          let libswresamplev = 3.0;
         libfabricjnia = `${parseInt(`${iconwechatx}`) << (Math.min(Math.abs(1), 2))}`;
         iconwechatx /= Math.max(parseFloat(`${2}`), 3);
         dycreatorK *= parseFloat(`${parseInt(`${dycreatorK}`) * parseInt(`${libswresamplev}`)}`);
         libswresamplev += 3;
      }
      while (4 <= (4 % (Math.max(9, libfabricjnia.length))) && (moviesp.length % (Math.max(libfabricjnia.length, 5))) <= 4) {
         libfabricjnia = `${libfabricjnia.length}`;
         break;
      }
       let miniP = 5.0;
      for (let u = 0; u < 1; u++) {
          let transferH = 1.0;
          let profileinactive4 = 4.0;
          let progressj = 0.0;
          let reviewM: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,111,100,105,110,103,95,50,95,50,53,0),111], [String.fromCharCode(100,101,99,111,114,97,116,111,114,115,95,121,95,52,51,0),361]]);
         miniP += 3 ^ resend5.length;
         transferH *= 3 << (Math.min(Math.abs(parseInt(`${transferH}`)), 5));
         profileinactive4 -= parseInt(`${progressj}`) - parseInt(`${profileinactive4}`);
         progressj += reviewM.size;
         reviewM = new Map([[`${profileinactive4}`, parseInt(`${transferH}`)]]);
      }
      let mbnativeadvancedr = libfabricjnia.length >= 6086675;
      do {
          let areaF = String.fromCharCode(112,111,119,101,114,95,103,95,52,52,0);
          let playlist8 = true;
          let iconshareK: Array<any> = [885, 266];
          let libruntimeexecutorv: Array<any> = [406, 534, 386];
          let roomI = 0.0;
         libfabricjnia += `${(areaF == String.fromCharCode(82,0) ? (playlist8 ? 3 : 5) : areaF.length)}`;
         playlist8 = libruntimeexecutorv.includes(roomI);
         iconshareK.push(libruntimeexecutorv.length << (Math.min(4, Math.abs(parseInt(`${roomI}`)))));
         if (mbnativeadvancedr) {
            break;
         }
      } while (mbnativeadvancedr && (1 == libfabricjnia.length));
      if (moviesp.length > 1) {
         moviesp.push((String.fromCharCode(55,0) == resend5 ? parseInt(`${miniP}`) : resend5.length));
      }
         miniP /= Math.max(1, (String.fromCharCode(99,0) == libfabricjnia ? libfabricjnia.length : moviesp.length));
      while (libfabricjnia == resend5) {
         resend5 += `${1 & moviesp.length}`;
         break;
      }
      let progressz = 5360364 >= moviesp.length;
      do {
          let baseD = false;
          let arrowrightg = 4.0;
          let long_vH = String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,103,95,53,0);
         moviesp = [moviesp.length];
         baseD = 26.61 >= arrowrightg;
         arrowrightg /= Math.max(1 - parseInt(`${arrowrightg}`), 3);
         long_vH += `${(String.fromCharCode(68,0) == long_vH ? parseInt(`${arrowrightg}`) : long_vH.length)}`;
         if (progressz) {
            break;
         }
      } while (progressz && (1 > (parseInt(`${miniP}`) * moviesp.length)));
      predictionarrowh += "2";
   let s_playeru = modalZ == String.fromCharCode(102,108,119,107,116,116,115,0);
   do {
      modalZ += `${1 / (Math.max(8, moreI.length))}`;
      if (s_playeru) {
         break;
      }
   } while ((4 <= (filledv.size + modalZ.length) && (4 + modalZ.length) <= 1) && s_playeru);
      modityE += `${(String.fromCharCode(71,0) == modityE ? modityE.length : moreI.length)}`;
      filledv.set(modityE, modalZ.length);
   let fill5 = dataN == String.fromCharCode(120,111,49,55,0);
   do {
       let componentd: Array<any> = [552, 238, 82];
       let shootyesgoalq = true;
         shootyesgoalq = (((!shootyesgoalq ? componentd.length : 80) / (Math.max(componentd.length, 5))) <= 80);
      if (shootyesgoalq) {
         shootyesgoalq = componentd.length >= 4 && !shootyesgoalq;
      }
         shootyesgoalq = !shootyesgoalq;
      let routerO = shootyesgoalq ? !shootyesgoalq : shootyesgoalq;
      do {
         shootyesgoalq = componentd.includes(shootyesgoalq);
         if (routerO) {
            break;
         }
      } while (routerO && (shootyesgoalq));
         componentd = [1 + componentd.length];
      for (let b = 0; b < 2; b++) {
         shootyesgoalq = componentd.length > 52 && !shootyesgoalq;
      }
      dataN = `${libglog1.length + 3}`;
      if (fill5) {
         break;
      }
   } while (fill5 && ((iconpipexpandq * 2.32) < 1.100));
   for (let i = 0; i < 2; i++) {
       let bggradient1 = String.fromCharCode(100,114,97,119,95,118,95,54,0);
         bggradient1 += `${(bggradient1 == String.fromCharCode(89,0) ? bggradient1.length : bggradient1.length)}`;
         bggradient1 = `${bggradient1.length & 3}`;
         bggradient1 += `${bggradient1.length % (Math.max(9, bggradient1.length))}`;
      dataN += `${typinge.length / (Math.max(3, 4))}`;
   }
       let auto_qG = String.fromCharCode(114,95,54,50,95,116,114,97,110,115,102,111,114,109,115,0);
       let klevinA: Map<any, any> = new Map([[String.fromCharCode(108,95,56,54,95,109,97,106,0),142], [String.fromCharCode(106,111,117,114,110,97,108,95,110,95,48,0),263]]);
         klevinA.set(auto_qG, 1 + auto_qG.length);
      while (1 < (3 % (Math.max(8, auto_qG.length))) && 1 < (klevinA.size % 3)) {
         auto_qG = `${auto_qG.length << (Math.min(Math.abs(3), 2))}`;
         break;
      }
      for (let w = 0; w < 3; w++) {
         klevinA = new Map([[`${klevinA.size}`, 1]]);
      }
         auto_qG = `${klevinA.size & 3}`;
      if (3 >= (klevinA.size / 1)) {
          let componentH = 2.0;
          let largebrightnessa: Array<any> = [416, 884, 643];
          let eighteenO: Array<any> = [28, 205, 659];
          let rewardvideos = 2.0;
          let default_y23 = String.fromCharCode(112,114,101,108,111,97,100,105,110,103,95,53,95,57,52,0);
         auto_qG += `${auto_qG.length % 1}`;
         componentH -= parseFloat(`${largebrightnessa.length}`);
         largebrightnessa = [default_y23.length];
         eighteenO = [largebrightnessa.length];
         rewardvideos /= Math.max(parseFloat(`${eighteenO.length}`), 3);
         default_y23 = "1";
      }
         klevinA.set(`${auto_qG}`, 3 << (Math.min(1, Math.abs(klevinA.size))));
      predictionarrowh = `${parseInt(`${yingm}`) % 1}`;
   let editv = expiredZ >= 4919029;
   do {
      expiredZ ^= (typinge == String.fromCharCode(90,0) ? typinge.length : leftb);
      if (editv) {
         break;
      }
   } while (editv && (!modalZ.startsWith(`${expiredZ}`)));
       let reward_ = String.fromCharCode(104,95,57,52,95,106,112,101,103,105,110,116,0);
       let mapbufferX: Array<any> = [String.fromCharCode(103,95,57,50,95,98,97,99,107,119,97,114,100,115,0), String.fromCharCode(113,95,52,53,0)];
      while (5 <= (mapbufferX.length + reward_.length)) {
         mapbufferX = [reward_.length];
         break;
      }
      for (let d = 0; d < 1; d++) {
          let subs8 = 2.0;
          let dycreatorC = String.fromCharCode(115,95,56,56,95,112,97,105,114,0);
         mapbufferX.push(parseInt(`${subs8}`));
         subs8 -= (parseFloat(`${dycreatorC == String.fromCharCode(84,0) ? dycreatorC.length : dycreatorC.length}`));
      }
         reward_ = `${1 - mapbufferX.length}`;
       let dplus9 = String.fromCharCode(98,105,116,105,122,101,110,95,48,95,57,57,0);
      if ((5 + mapbufferX.length) < 2) {
         mapbufferX.push(dplus9.length);
      }
       let baselineN: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,55,95,56,56,0),79], [String.fromCharCode(112,95,52,55,95,112,111,105,110,116,0),132], [String.fromCharCode(110,95,55,55,95,114,101,112,101,97,116,0),291]]);
      dataN += `${moreI.length}`;
      modityE = `${modityE.length & modalZ.length}`;
   let dragx = 8613477 >= modityE.length;
   do {
      modityE = `${leftb}`;
      if (dragx) {
         break;
      }
   } while (dragx && (typinge == String.fromCharCode(89,0)));
   let turndownj = libglog1 == String.fromCharCode(117,117,52,49,106,102,103,0);
   do {
       let exampleimagen = String.fromCharCode(112,95,52,53,95,115,108,105,100,101,0);
       let viewsf = 1;
       let umengy = 2;
       let serviceU: Map<any, any> = new Map([[String.fromCharCode(115,105,102,116,95,97,95,51,50,0),801], [String.fromCharCode(110,95,55,50,95,103,101,116,115,111,99,107,111,112,116,0),762], [String.fromCharCode(115,99,114,101,101,110,115,104,111,116,95,120,95,51,50,0),55]]);
          let mbjscommon4 = 2.0;
          let launch_ = String.fromCharCode(115,95,57,57,95,119,114,105,116,105,110,103,0);
         umengy += launch_.length;
         mbjscommon4 += parseFloat(`${2}`);
         launch_ = `${parseInt(`${mbjscommon4}`)}`;
         viewsf |= serviceU.size;
         viewsf -= umengy;
       let mbnativeadvancedY = String.fromCharCode(105,95,57,49,95,109,97,114,115,104,97,108,108,105,110,103,0);
       let armvaL = String.fromCharCode(114,101,115,112,111,110,115,101,115,95,117,95,51,54,0);
      let sliderh = viewsf <= 8867809;
      do {
         viewsf *= (armvaL == String.fromCharCode(120,0) ? umengy : armvaL.length);
         if (sliderh) {
            break;
         }
      } while (sliderh && ((viewsf % (Math.max(exampleimagen.length, 1))) == 5 || 5 == (viewsf % (Math.max(exampleimagen.length, 9)))));
          let philippines3 = String.fromCharCode(100,101,116,101,99,116,99,108,111,115,101,95,111,95,51,55,0);
         viewsf <<= Math.min(Math.abs((String.fromCharCode(49,0) == philippines3 ? philippines3.length : viewsf)), 4);
      if (umengy < 3) {
         umengy *= armvaL.length % 1;
      }
         serviceU = new Map([[mbnativeadvancedY, umengy]]);
      while (1 == viewsf) {
          let rulesU = String.fromCharCode(111,114,100,101,114,95,54,95,55,49,0);
          let switch_q1 = 2;
          let halfX = String.fromCharCode(97,108,97,109,111,102,105,114,101,95,119,95,50,50,0);
          let styles3: Map<any, any> = new Map([[String.fromCharCode(102,97,99,101,98,111,111,107,95,50,95,56,56,0),0], [String.fromCharCode(114,95,49,50,95,100,101,116,101,99,116,105,111,110,0),45], [String.fromCharCode(100,99,98,122,108,95,110,95,55,57,0),946]]);
          let appleR = 1;
         serviceU.set(`${switch_q1}`, serviceU.size & switch_q1);
         rulesU += `${appleR}`;
         halfX = `${appleR / (Math.max(styles3.size, 2))}`;
         styles3.set(`${halfX}`, 3 * styles3.size);
         break;
      }
         mbnativeadvancedY += `${mbnativeadvancedY.length}`;
         mbnativeadvancedY += `${exampleimagen.length}`;
         armvaL += `${serviceU.size / (Math.max(armvaL.length, 3))}`;
      libglog1 += "3";
      if (turndownj) {
         break;
      }
   } while (turndownj && (dataN.length < 4 && libglog1.length < 4));
   if (typinge.length <= dataN.length) {
      typinge += "2";
   }
   for (let t = 0; t < 1; t++) {
      typinge = `${libglog1.length}`;
   }
   if (dataN.length > moreI.length) {
      dataN = `${leftb}`;
   }
      dataN = `${dataN.length * 3}`;
      expiredZ ^= filledv.size / 1;
   let cornerkicky = 6746532.0 <= iconpipexpandq;
   do {
       let reactnativeultimatelistviewU = String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,53,95,52,55,0);
       let templateprocessor1 = 5;
       let mbnativea: Array<any> = [902, 481];
       let viewsk: Map<any, any> = new Map([[String.fromCharCode(118,95,50,53,95,114,101,99,101,105,118,101,100,0),648], [String.fromCharCode(108,105,98,97,118,102,105,108,116,101,114,95,55,95,57,51,0),722], [String.fromCharCode(99,95,54,95,105,110,115,117,102,102,105,99,105,101,110,116,0),478]]);
       let defaultplayerimgq = 4.0;
       let libtan8: Array<any> = [String.fromCharCode(102,95,52,53,95,101,121,99,104,97,105,110,0), String.fromCharCode(117,115,97,103,101,95,49,95,49,55,0), String.fromCharCode(114,101,100,100,105,116,95,48,95,56,54,0)];
       let small0: Array<any> = [String.fromCharCode(114,101,118,101,97,108,95,50,95,56,51,0), String.fromCharCode(121,95,52,55,95,115,101,113,117,101,110,99,101,0)];
         libtan8.push(mbnativea.length & small0.length);
       let logouserT = 3.0;
       let search6 = 5.0;
      while (5.28 <= defaultplayerimgq) {
         small0.push(viewsk.size);
         break;
      }
          let sendg = 2.0;
          let inactiven: Array<any> = [889, 42];
          let armvaZ = String.fromCharCode(122,95,53,49,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0);
         templateprocessor1 &= parseInt(`${logouserT}`) % (Math.max(mbnativea.length, 3));
         sendg -= parseFloat(`${inactiven.length - 3}`);
         inactiven = [inactiven.length];
         armvaZ += `${3 + parseInt(`${sendg}`)}`;
      while (Array.from(viewsk.values()).includes(defaultplayerimgq)) {
          let settingx = String.fromCharCode(112,97,114,115,101,95,49,95,54,48,0);
          let buffer6 = 1.0;
          let themeF = String.fromCharCode(105,102,102,116,95,117,95,50,56,0);
          let notificationL = String.fromCharCode(115,114,112,95,55,95,52,53,0);
         viewsk = new Map([[`${libtan8.length}`, libtan8.length ^ 2]]);
         settingx = `${(settingx == String.fromCharCode(106,0) ? notificationL.length : settingx.length)}`;
         buffer6 *= parseFloat(`${notificationL.length}`);
         themeF += `${settingx.length}`;
         break;
      }
         templateprocessor1 |= small0.length;
         search6 += 1 + viewsk.size;
      if (5 < (1 << (Math.min(5, small0.length))) || (libtan8.length << (Math.min(2, small0.length))) < 1) {
         small0 = [parseInt(`${defaultplayerimgq}`) >> (Math.min(Math.abs(parseInt(`${search6}`)), 1))];
      }
      while (4 <= (2 * viewsk.size) || (reactnativeultimatelistviewU.length * 2) <= 1) {
         reactnativeultimatelistviewU = "1";
         break;
      }
         viewsk = new Map([[`${small0.length}`, reactnativeultimatelistviewU.length]]);
         search6 /= Math.max(1, 5);
      while ((4.41 - logouserT) <= 2.16) {
         logouserT += 2;
         break;
      }
         templateprocessor1 *= parseInt(`${defaultplayerimgq}`);
         defaultplayerimgq += parseInt(`${defaultplayerimgq}`);
      iconpipexpandq /= Math.max(3, parseFloat(`${modityE.length % (Math.max(7, dataN.length))}`));
      if (cornerkicky) {
         break;
      }
   } while ((3 < (3 - typinge.length) && 5 < (parseInt(`${iconpipexpandq}`) * 3)) && cornerkicky);
   for (let z = 0; z < 2; z++) {
      iconpipexpandq /= Math.max(parseFloat(`${modityE.length << (Math.min(2, moreI.length))}`), 3);
   }
   if (4 == (3 & filledv.size) && (typinge.length & 3) == 5) {
      filledv = new Map([[moreI, (modityE == String.fromCharCode(117,0) ? modityE.length : moreI.length)]]);
   }
   let megaphoneCg = yingm <= 6852098.0;
   do {
       let shrinkr = 0.0;
       let actions3 = String.fromCharCode(118,112,97,116,104,95,113,95,55,48,0);
       let langkeyw = String.fromCharCode(98,95,54,49,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0);
       let iconrefreshi = false;
       let privilegep = 1;
      let libfbjniY = iconrefreshi ? !iconrefreshi : iconrefreshi;
      do {
         iconrefreshi = !iconrefreshi;
         if (libfbjniY) {
            break;
         }
      } while (libfbjniY && ((privilegep << (Math.min(Math.abs(2), 4))) >= 3 && privilegep >= 2));
      let currenth = langkeyw == String.fromCharCode(104,98,121,104,113,0);
      do {
          let libfollyB = 3.0;
          let libcxxcomponentsG = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,106,95,53,57,0);
         langkeyw = `${((iconrefreshi ? 3 : 1) * privilegep)}`;
         libfollyB *= parseInt(`${libfollyB}`) & 3;
         libcxxcomponentsG += "2";
         if (currenth) {
            break;
         }
      } while ((iconrefreshi || langkeyw.length >= 4) && currenth);
      if ((shrinkr / (Math.max(actions3.length, 4))) < 2.10 && (shrinkr / 2.10) < 4.18) {
          let areaG = 3.0;
          let fill0 = String.fromCharCode(101,95,56,52,95,113,115,118,100,101,99,0);
          let mbridgey = String.fromCharCode(118,115,105,110,107,95,104,95,53,57,0);
         shrinkr *= langkeyw.length;
         areaG *= parseFloat(`${mbridgey.length}`);
         fill0 += `${(mbridgey == String.fromCharCode(73,0) ? mbridgey.length : fill0.length)}`;
      }
      for (let o = 0; o < 2; o++) {
         actions3 += `${(privilegep << (Math.min(5, Math.abs((iconrefreshi ? 1 : 2)))))}`;
      }
      if (langkeyw.length == 1 && iconrefreshi) {
         langkeyw = `${1 << (Math.min(2, langkeyw.length))}`;
      }
       let l_imageG = 5;
          let suggestionr = String.fromCharCode(116,95,56,56,95,101,115,115,101,110,99,101,0);
          let iconbellactiveE = String.fromCharCode(118,95,57,55,95,110,105,107,111,110,0);
          let eventsplashV: Map<any, any> = new Map([[String.fromCharCode(122,95,57,56,95,116,105,108,101,104,100,114,0),538], [String.fromCharCode(114,97,110,107,115,95,50,95,55,51,0),432]]);
         langkeyw += `${(String.fromCharCode(82,0) == suggestionr ? actions3.length : suggestionr.length)}`;
         iconbellactiveE += `${eventsplashV.size}`;
         eventsplashV = new Map([[`${eventsplashV.size}`, 1]]);
         l_imageG *= 1;
      while (5.52 >= shrinkr) {
          let dragclose3: Array<any> = [String.fromCharCode(101,120,97,109,105,110,101,95,108,95,53,50,0), String.fromCharCode(101,95,51,53,95,112,114,101,99,97,108,99,117,108,97,116,101,0)];
         l_imageG >>= Math.min(3, Math.abs(langkeyw.length << (Math.min(4, Math.abs(parseInt(`${shrinkr}`))))));
         dragclose3 = [dragclose3.length];
         break;
      }
          let iconnointernet3: Map<any, any> = new Map([[String.fromCharCode(105,102,102,116,95,102,95,54,0),158], [String.fromCharCode(100,111,99,95,104,95,49,49,0),507]]);
          let runtimex = 2.0;
          let libreactk = 5;
         iconrefreshi = langkeyw.length >= iconnointernet3.size;
         iconnointernet3 = new Map([[`${runtimex}`, libreactk]]);
         runtimex /= Math.max(1, parseInt(`${runtimex}`) << (Math.min(4, Math.abs(1))));
         libreactk ^= parseInt(`${runtimex}`);
          let debugp = 2.0;
          let predictionwinv = String.fromCharCode(101,110,115,117,114,101,100,95,102,95,54,52,0);
          let privilegeb = 0.0;
         actions3 = `${privilegep}`;
         debugp *= (parseFloat(`${String.fromCharCode(114,0) == predictionwinv ? parseInt(`${debugp}`) : predictionwinv.length}`));
         privilegeb -= 3;
      let predictionwinu = 8963931 >= langkeyw.length;
      do {
         langkeyw += `${actions3.length}`;
         if (predictionwinu) {
            break;
         }
      } while (predictionwinu && (langkeyw.endsWith(`${l_imageG}`)));
         l_imageG ^= 1 / (Math.max(privilegep, 2));
         langkeyw += `${parseInt(`${shrinkr}`) / 2}`;
         shrinkr /= Math.max(2, privilegep & 3);
      yingm *= o_hashr.length + parseInt(`${shrinkr}`);
      if (megaphoneCg) {
         break;
      }
   } while (megaphoneCg && (5 <= (lighth.length | 3)));

    openSheet();
  }, []);

  const onBuffer = useCallback((bufferObj: any) => {
    setIsBuffering(bufferObj.isBuffering);
    if (adultMode) {
      
      setIsBuffering(false);
    }
  }, [adultMode]);

  const handleProgress = useCallback(
    (progress: OnProgressData) => {
      if (
        progress.currentTime !== currentDuration &&
        !isVideoReadyAndroid &&
        Platform.OS === 'android'
      )
        setVideoReadyAndroid(true);
      if (!onSliding) updateVideoDuration(progress.currentTime);
    },
    [currentDuration, onSliding, isVideoReadyAndroid],
  );

  const showControls = () => {
       let iconwechatL = 3.0;
    let textinputb = String.fromCharCode(97,108,97,114,109,95,53,95,56,0);
    let expiredl = String.fromCharCode(120,95,51,54,95,115,111,99,107,101,116,115,0);
    let expandw = 0.0;
    let eventL = String.fromCharCode(120,95,52,52,95,112,111,108,113,97,0);
    let crossS: Map<any, any> = new Map([[String.fromCharCode(108,115,112,112,111,108,121,102,95,117,95,50,55,0),true ], [String.fromCharCode(101,95,54,53,95,108,111,111,115,101,0),false ], [String.fromCharCode(109,95,55,50,95,112,105,120,99,116,120,0),false ]]);
    let yellowg = 1.0;
    let rankc = String.fromCharCode(117,95,52,49,95,103,97,108,108,101,114,121,0);
    let robotoG = 1;
    let constantsp = 3.0;
    let popuph = 2.0;
    let iconpipexpandB = 1.0;
    let iconsharex = 1.0;
    let downloadk = String.fromCharCode(119,105,100,116,104,95,56,95,52,48,0);
   while (iconwechatL <= 5.8) {
       let weibot = true;
       let libfbjni7: Map<any, any> = new Map([[String.fromCharCode(98,95,52,57,95,116,114,97,115,104,111,108,100,0),287], [String.fromCharCode(119,114,105,116,101,99,104,101,99,107,95,113,95,52,57,0),567]]);
       let webviewD = 5.0;
       let soundA = String.fromCharCode(119,95,56,52,95,116,114,97,110,115,109,105,116,0);
         soundA += `${3 | libfbjni7.size}`;
      for (let y = 0; y < 2; y++) {
         soundA += "1";
      }
      for (let m = 0; m < 2; m++) {
          let actionu = String.fromCharCode(119,95,51,53,95,116,105,109,101,108,105,110,101,0);
          let update_lka = String.fromCharCode(97,95,54,51,95,112,114,101,100,105,99,97,116,101,0);
          let subst = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,110,95,53,52,0);
         webviewD += parseFloat(`${2 * update_lka.length}`);
         actionu = `${(String.fromCharCode(112,0) == actionu ? subst.length : actionu.length)}`;
         update_lka += `${subst.length | actionu.length}`;
      }
      for (let b = 0; b < 2; b++) {
         libfbjni7.set(soundA, soundA.length << (Math.min(4, Math.abs(parseInt(`${webviewD}`)))));
      }
      let zhengpianz = webviewD <= 8856095.0;
      do {
         webviewD /= Math.max(4, (parseFloat(`${String.fromCharCode(76,0) == soundA ? soundA.length : (weibot ? 3 : 1)}`)));
         if (zhengpianz) {
            break;
         }
      } while ((2 < (soundA.length * parseInt(`${webviewD}`))) && zhengpianz);
         weibot = webviewD < 25.20;
      if (weibot) {
         libfbjni7.set(`${webviewD}`, 1 & soundA.length);
      }
         weibot = webviewD <= 57.73;
         weibot = libfbjni7.size < 75;
          let sharedn = String.fromCharCode(110,97,116,105,118,101,108,121,95,49,95,57,0);
         libfbjni7.set(`${webviewD}`, libfbjni7.size);
         sharedn = `${(String.fromCharCode(74,0) == sharedn ? sharedn.length : sharedn.length)}`;
          let lineh = String.fromCharCode(115,112,111,116,95,49,95,53,51,0);
         libfbjni7 = new Map([[`${weibot}`, 1]]);
         lineh += "3";
      while (webviewD == 2.52 && (2.52 + webviewD) == 5.48) {
         webviewD += (parseFloat(`${(weibot ? 4 : 5) % (Math.max(parseInt(`${webviewD}`), 10))}`));
         break;
      }
      iconwechatL += parseFloat(`${soundA.length}`);
      break;
   }
   while (2.3 < (crossS.size / (Math.max(5, constantsp))) && (parseInt(`${constantsp}`) / (Math.max(crossS.size, 9))) < 1) {
       let jingdong_ = String.fromCharCode(107,95,55,57,95,118,105,115,105,98,105,116,121,0);
       let regeng8 = false;
       let iconbackwhiteM = String.fromCharCode(99,111,111,114,100,105,110,97,116,101,95,108,95,57,57,0);
      for (let o = 0; o < 2; o++) {
          let scheduleZ: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,100,110,115,0),false ], [String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,101,95,51,0),false ], [String.fromCharCode(100,114,97,119,95,116,95,49,48,0),true ]]);
         iconbackwhiteM = `${(jingdong_ == String.fromCharCode(89,0) ? jingdong_.length : (regeng8 ? 4 : 3))}`;
         scheduleZ = new Map([[`${scheduleZ.size}`, 1]]);
      }
       let libfbjniz = String.fromCharCode(120,98,105,110,95,99,95,54,51,0);
       let delegate_omg = String.fromCharCode(122,95,54,57,95,101,120,112,101,114,105,109,101,110,116,97,108,0);
      while (!delegate_omg.endsWith(`${regeng8}`)) {
         delegate_omg = `${delegate_omg.length}`;
         break;
      }
         regeng8 = libfbjniz.length > 51;
      let playB = 7006831 <= jingdong_.length;
      do {
         jingdong_ = `${((regeng8 ? 1 : 3))}`;
         if (playB) {
            break;
         }
      } while ((2 <= iconbackwhiteM.length) && playB);
      crossS.set(`${robotoG}`, robotoG);
      break;
   }
   while ((parseInt(`${iconwechatL}`) - eventL.length) == 4) {
       let utilsc = 2;
       let analyticsh: Array<any> = [877, 320, 20];
       let watchnowbgG = 4;
       let gesture8 = String.fromCharCode(105,95,49,57,95,115,119,115,99,97,108,101,114,101,115,0);
       let iconedit8 = 4.0;
       let whitetickU = 5;
      while ((1 % (Math.max(8, watchnowbgG))) == 1) {
         watchnowbgG >>= Math.min(1, Math.abs(parseInt(`${iconedit8}`)));
         break;
      }
         iconedit8 *= parseFloat(`${parseInt(`${iconedit8}`)}`);
       let trashw: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,121,95,49,95,53,52,0),811], [String.fromCharCode(114,101,97,100,111,110,108,121,95,115,95,49,0),398]]);
          let vipsportR = 1.0;
         analyticsh = [utilsc];
         vipsportR *= parseFloat(`${2}`);
      let stringsz = 5656456 >= utilsc;
      do {
         utilsc %= Math.max(utilsc + 1, 1);
         if (stringsz) {
            break;
         }
      } while (stringsz && (2 > utilsc));
         iconedit8 /= Math.max(parseFloat(`${3}`), 3);
          let whatsappQ = 1.0;
          let cornerkicky = 0.0;
         watchnowbgG ^= analyticsh.length ^ 1;
         whatsappQ += parseFloat(`${parseInt(`${cornerkicky}`)}`);
      let disconnectedK = 9581976 <= whitetickU;
      do {
          let middlebrightnesss = String.fromCharCode(117,95,50,48,95,117,110,105,118,101,114,115,97,108,0);
          let leagueh = String.fromCharCode(112,95,51,49,95,98,105,110,100,108,105,115,116,0);
          let reactnativejsB = 4;
         whitetickU &= 2;
         middlebrightnesss = `${leagueh.length & middlebrightnesss.length}`;
         leagueh = `${reactnativejsB % (Math.max(3, middlebrightnesss.length))}`;
         reactnativejsB ^= middlebrightnesss.length ^ leagueh.length;
         if (disconnectedK) {
            break;
         }
      } while ((1 == (whitetickU ^ analyticsh.length) && 1 == (whitetickU ^ analyticsh.length)) && disconnectedK);
          let yellowredcard8 = String.fromCharCode(112,95,56,53,95,112,111,115,115,105,98,108,101,0);
         analyticsh.push(whitetickU);
         yellowredcard8 = `${yellowredcard8.length % 3}`;
         trashw = new Map([[`${trashw.size}`, 3 * trashw.size]]);
         iconedit8 *= parseFloat(`${whitetickU >> (Math.min(Math.abs(3), 2))}`);
       let splashJ = String.fromCharCode(112,95,56,54,95,101,103,97,99,121,0);
       let dicej = String.fromCharCode(110,95,51,55,95,117,110,100,111,0);
      for (let q = 0; q < 3; q++) {
          let greenZ = String.fromCharCode(116,95,56,57,95,97,118,103,115,97,100,0);
         analyticsh.push(greenZ.length);
      }
         trashw.set(`${whitetickU}`, whitetickU | analyticsh.length);
      iconwechatL *= parseFloat(`${parseInt(`${iconedit8}`) % (Math.max(4, utilsc))}`);
      break;
   }
       let notificationfillemptyP = String.fromCharCode(105,95,49,57,95,114,101,103,97,116,104,101,114,105,110,103,0);
         notificationfillemptyP = `${3 - notificationfillemptyP.length}`;
         notificationfillemptyP = `${notificationfillemptyP.length + notificationfillemptyP.length}`;
       let shootH = String.fromCharCode(102,95,56,53,95,115,105,98,108,105,110,103,0);
       let aboutM = String.fromCharCode(120,95,53,55,95,97,109,112,108,105,102,121,0);
      yellowg -= parseFloat(`${eventL.length}`);
   for (let j = 0; j < 3; j++) {
       let previewj = false;
         previewj = (!previewj ? previewj : !previewj);
      if (!previewj || previewj) {
         previewj = (previewj ? !previewj : previewj);
      }
         previewj = !previewj;
      yellowg *= parseFloat(`${parseInt(`${iconwechatL}`)}`);
   }
      robotoG %= Math.max(2, parseInt(`${iconwechatL}`) * 2);
      expiredl = `${parseInt(`${constantsp}`) ^ parseInt(`${iconwechatL}`)}`;
       let liveendmodallogoq = String.fromCharCode(111,117,112,117,116,95,105,95,56,52,0);
      while (liveendmodallogoq != String.fromCharCode(85,0)) {
         liveendmodallogoq += `${liveendmodallogoq.length}`;
         break;
      }
      if (3 == liveendmodallogoq.length) {
          let with_9f: Array<any> = [906, 337];
          let indexq = 4.0;
         liveendmodallogoq = `${2 & liveendmodallogoq.length}`;
         with_9f.push(with_9f.length * 3);
         indexq *= parseInt(`${indexq}`);
      }
      for (let p = 0; p < 2; p++) {
         liveendmodallogoq += `${liveendmodallogoq.length}`;
      }
      expandw *= parseFloat(`${robotoG >> (Math.min(textinputb.length, 4))}`);
      iconpipexpandB -= parseFloat(`${parseInt(`${expandw}`)}`);
   while (1.21 < (3.69 / (Math.max(8, iconwechatL)))) {
      iconwechatL *= parseFloat(`${2 << (Math.min(4, textinputb.length))}`);
      break;
   }
       let gradleP = 1.0;
       let penaltygoalF = String.fromCharCode(102,95,54,51,95,98,114,111,97,100,99,97,115,116,115,0);
       let backy: Array<any> = [526, 532, 386];
      for (let n = 0; n < 1; n++) {
          let materiale = String.fromCharCode(112,95,49,55,95,118,108,102,102,0);
          let resendo = String.fromCharCode(100,101,110,111,105,115,105,110,103,95,52,95,49,48,0);
          let logoutL = false;
          let libavformatA = String.fromCharCode(106,95,49,48,48,95,101,120,112,114,101,115,115,105,111,110,115,0);
         penaltygoalF += `${((logoutL ? 3 : 2) << (Math.min(Math.abs(parseInt(`${gradleP}`)), 2)))}`;
         materiale = "3";
         resendo = `${materiale.length | 3}`;
         logoutL = (resendo.length % (Math.max(materiale.length, 10))) == 29;
         libavformatA = `${libavformatA.length}`;
      }
          let watchU: Map<any, any> = new Map([[String.fromCharCode(99,109,115,103,115,95,51,95,56,52,0),96], [String.fromCharCode(110,111,109,105,110,97,108,95,115,95,53,53,0),960]]);
         penaltygoalF += `${parseInt(`${gradleP}`) | 2}`;
         watchU.set(`${watchU.size}`, watchU.size);
       let libavdeviceK = String.fromCharCode(108,95,51,55,95,101,110,116,105,116,101,115,0);
       let executorC = String.fromCharCode(104,97,108,100,99,108,117,116,95,114,95,52,55,0);
      while ((1 + backy.length) > 4) {
         penaltygoalF = "3";
         break;
      }
         backy.push(executorC.length | 2);
         gradleP -= parseFloat(`${libavdeviceK.length}`);
      if (5 < (2 - penaltygoalF.length)) {
         backy.push(libavdeviceK.length);
      }
       let typingo = 3.0;
       let libffmpegkitT = 3.0;
      for (let p = 0; p < 2; p++) {
          let flippers = String.fromCharCode(104,95,53,53,95,121,117,118,112,0);
          let j_playerj = String.fromCharCode(122,95,51,50,95,105,110,108,105,103,104,116,0);
          let flyerP = String.fromCharCode(107,95,54,50,95,115,107,101,108,101,116,111,110,0);
          let friendsX = String.fromCharCode(116,95,51,50,95,101,110,99,111,100,101,105,110,116,114,97,0);
          let uinit_t97: Array<any> = [873, 622, 978];
         typingo += parseInt(`${typingo}`) >> (Math.min(Math.abs(3), 5));
         flippers = `${uinit_t97.length >> (Math.min(Math.abs(2), 3))}`;
         j_playerj = `${j_playerj.length}`;
         flyerP += `${j_playerj.length}`;
         friendsX += `${friendsX.length}`;
         uinit_t97.push(j_playerj.length);
      }
      textinputb = "3";

    clearTimeout(timer.current);

      popuph += 2 * parseInt(`${popuph}`);
   for (let x = 0; x < 3; x++) {
      eventL = `${1 + parseInt(`${iconwechatL}`)}`;
   }
      rankc += "2";
   for (let f = 0; f < 2; f++) {
      expiredl += `${crossS.size % (Math.max(3, 3))}`;
   }
      rankc += `${parseInt(`${expandw}`) - eventL.length}`;
   if (1 > (crossS.size / 2) && 2 > (crossS.size / (Math.max(rankc.length, 8)))) {
       let toponF = String.fromCharCode(117,95,51,56,95,97,116,97,98,97,115,101,0);
       let otherG: Map<any, any> = new Map([[String.fromCharCode(117,95,55,54,95,99,97,114,101,102,117,108,108,121,0),true ], [String.fromCharCode(103,101,115,116,117,114,101,95,116,95,49,48,0),true ]]);
       let stringM = String.fromCharCode(111,95,55,50,95,103,114,111,117,112,101,100,0);
      if (4 > (stringM.length * 5) || 2 > (stringM.length * 5)) {
          let default_1s2 = String.fromCharCode(107,95,51,50,95,115,112,108,97,115,104,0);
          let iconwatchnow8 = 0.0;
         stringM += "3";
         default_1s2 = `${parseInt(`${iconwatchnow8}`)}`;
         iconwatchnow8 *= (default_1s2 == String.fromCharCode(95,0) ? parseInt(`${iconwatchnow8}`) : default_1s2.length);
      }
          let loadingB: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,105,116,121,95,113,95,51,0),800], [String.fromCharCode(111,110,101,112,97,115,115,95,103,95,57,0),100], [String.fromCharCode(111,95,53,48,95,97,117,100,105,111,112,114,111,99,0),977]]);
          let latni = 2.0;
         otherG = new Map([[`${loadingB.size}`, parseInt(`${latni}`)]]);
         stringM += `${toponF.length}`;
      while ((5 & toponF.length) > 2 && 5 > (toponF.length & 5)) {
         toponF += "3";
         break;
      }
          let leftT = String.fromCharCode(114,101,118,101,97,108,101,100,95,114,95,56,57,0);
          let analyticT = String.fromCharCode(118,95,54,50,95,107,105,116,116,121,0);
         otherG = new Map([[`${otherG.size}`, 1 >> (Math.min(4, leftT.length))]]);
         leftT += `${analyticT.length}`;
         analyticT += `${(String.fromCharCode(48,0) == analyticT ? analyticT.length : analyticT.length)}`;
         stringM = `${toponF.length}`;
         toponF = `${(stringM == String.fromCharCode(66,0) ? otherG.size : stringM.length)}`;
         stringM += `${toponF.length + 1}`;
          let skipr = String.fromCharCode(111,95,53,48,95,111,119,110,115,0);
         otherG.set(stringM, stringM.length ^ toponF.length);
         skipr += `${skipr.length | 1}`;
      rankc += `${rankc.length & 2}`;
   }
       let fastforwardu = 0;
       let countryr: Map<any, any> = new Map([[String.fromCharCode(99,105,110,101,95,120,95,52,49,0),String.fromCharCode(120,97,115,109,95,120,95,51,52,0)], [String.fromCharCode(120,95,54,57,95,116,104,101,109,101,100,0),String.fromCharCode(98,95,52,51,95,98,117,99,107,101,116,115,0)], [String.fromCharCode(122,95,52,49,95,109,117,108,116,105,112,97,114,116,0),String.fromCharCode(122,95,57,49,0)]]);
          let incidentF = 4.0;
          let layoutf: Map<any, any> = new Map([[String.fromCharCode(116,95,57,57,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),true ], [String.fromCharCode(101,95,57,57,95,117,110,105,109,112,111,114,116,97,110,116,0),true ], [String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,114,95,51,0),false ]]);
          let phone6 = 1.0;
         countryr.set(`${phone6}`, 1);
         incidentF /= Math.max(parseFloat(`${layoutf.size ^ 3}`), 2);
         layoutf.set(`${incidentF}`, parseInt(`${incidentF}`));
         phone6 /= Math.max(2, parseFloat(`${parseInt(`${incidentF}`) + 2}`));
         fastforwardu ^= 3;
      robotoG *= 3;
   if (3.62 <= (expandw * iconpipexpandB) && (expandw * 3.62) <= 1.4) {
      iconpipexpandB /= Math.max(parseFloat(`${1}`), 4);
   }
      iconsharex /= Math.max(3, parseFloat(`${1}`));
   for (let a = 0; a < 1; a++) {
       let l_lock5 = 3.0;
       let mounting3 = String.fromCharCode(109,105,110,105,109,97,95,104,95,56,53,0);
       let leakcheckerv = String.fromCharCode(114,101,113,117,105,114,105,110,103,95,99,95,50,56,0);
       let iconmore5 = String.fromCharCode(116,95,52,55,95,116,114,121,0);
       let componentsg = String.fromCharCode(114,101,118,101,114,115,101,100,95,112,95,55,55,0);
      let humidityO = leakcheckerv.length <= 9562639;
      do {
         leakcheckerv = `${mounting3.length ^ 2}`;
         if (humidityO) {
            break;
         }
      } while ((1.25 < l_lock5) && humidityO);
         leakcheckerv = `${(leakcheckerv == String.fromCharCode(53,0) ? leakcheckerv.length : iconmore5.length)}`;
      let castingL = 6106502 >= leakcheckerv.length;
      do {
          let incident6: Array<any> = [228, 676, 651];
          let typesj = 2.0;
          let tailn = String.fromCharCode(121,95,50,49,95,104,97,115,104,107,101,121,0);
          let selectionL = false;
         leakcheckerv = `${3 - parseInt(`${l_lock5}`)}`;
         incident6 = [3 | parseInt(`${typesj}`)];
         typesj -= incident6.length;
         tailn += `${(3 * (selectionL ? 2 : 4))}`;
         selectionL = !selectionL && tailn.length > 96;
         if (castingL) {
            break;
         }
      } while (castingL && (componentsg != leakcheckerv));
      while (2 < mounting3.length) {
          let libfbjniu: Map<any, any> = new Map([[String.fromCharCode(115,95,52,53,95,114,101,112,108,105,99,97,116,101,0),93], [String.fromCharCode(115,117,98,112,101,108,95,57,95,50,53,0),795]]);
          let diceV = String.fromCharCode(109,95,50,49,95,116,105,101,114,115,0);
          let reviewQ: Array<any> = [998, 754, 959];
          let componentsp = String.fromCharCode(99,108,97,115,104,101,100,95,49,95,55,51,0);
         iconmore5 = "1";
         libfbjniu.set(componentsp, componentsp.length);
         diceV = `${diceV.length}`;
         reviewQ.push(componentsp.length);
         break;
      }
      if (componentsg.startsWith(`${iconmore5.length}`)) {
          let sellU = false;
          let related9 = 3.0;
          let iconwechatn: Map<any, any> = new Map([[String.fromCharCode(113,95,55,54,95,114,101,99,111,114,100,110,105,110,103,0),510], [String.fromCharCode(115,101,108,101,99,116,105,111,110,115,95,50,95,52,55,0),137]]);
          let classesJ = true;
         componentsg += "3";
         sellU = iconwechatn.size > 42 && !classesJ;
         related9 /= Math.max(((sellU ? 2 : 4) ^ iconwechatn.size), 2);
         classesJ = related9 == 1.90;
      }
      if (l_lock5 >= parseFloat(`${componentsg.length}`)) {
          let klevinx: Map<any, any> = new Map([[String.fromCharCode(116,95,54,51,95,103,117,105,100,0),false ], [String.fromCharCode(111,95,50,48,95,114,101,100,115,112,97,114,107,0),false ], [String.fromCharCode(115,95,50,48,95,105,112,102,115,0),false ]]);
          let networkl = String.fromCharCode(116,115,114,95,50,95,52,55,0);
          let u_imageK = true;
          let typingB = 4.0;
          let iconuserQ: Map<any, any> = new Map([[String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,50,95,50,55,0),928], [String.fromCharCode(104,97,108,102,102,108,111,97,116,95,110,95,56,53,0),136], [String.fromCharCode(97,95,49,55,95,116,114,97,110,115,112,97,114,101,110,99,121,0),870]]);
         l_lock5 -= parseFloat(`${3}`);
         klevinx.set(`${u_imageK}`, ((u_imageK ? 5 : 1) >> (Math.min(Math.abs(2), 4))));
         networkl = `${(String.fromCharCode(87,0) == networkl ? klevinx.size : networkl.length)}`;
         typingB /= Math.max(parseFloat(`${3 + networkl.length}`), 5);
         iconuserQ = new Map([[`${iconuserQ.size}`, iconuserQ.size - 3]]);
      }
          let dacccfaabfbcbadeebddcabacdffdbK = String.fromCharCode(101,95,51,52,95,112,114,111,98,0);
          let dacccfaabfbcbadeebddcabacdffdbe = String.fromCharCode(114,101,109,98,95,110,95,56,51,0);
          let bannerJ = true;
         leakcheckerv = `${parseInt(`${l_lock5}`)}`;
         dacccfaabfbcbadeebddcabacdffdbK += `${(dacccfaabfbcbadeebddcabacdffdbe.length << (Math.min(1, Math.abs((bannerJ ? 3 : 3)))))}`;
         dacccfaabfbcbadeebddcabacdffdbe += `${dacccfaabfbcbadeebddcabacdffdbK.length}`;
      while (leakcheckerv.endsWith(`${l_lock5}`)) {
         l_lock5 *= parseFloat(`${mounting3.length}`);
         break;
      }
      iconsharex += parseFloat(`${2 * robotoG}`);
   }
      robotoG /= Math.max(5, parseInt(`${expandw}`) % 2);
    setShowOverlay(true);

   while (eventL.length == 1 || 1 == expiredl.length) {
       let langJ = 0.0;
       let scheduleE = 1.0;
       let proxyV = String.fromCharCode(111,95,55,55,95,106,99,111,110,102,105,103,0);
       let latnM = 0.0;
       let smalli = 0.0;
          let circleE = String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,116,95,51,49,0);
         smalli += proxyV.length;
         circleE += `${circleE.length + circleE.length}`;
          let libturbomodulejsijniL = String.fromCharCode(114,95,49,51,95,117,110,102,97,105,114,0);
          let eventv = false;
         proxyV += `${parseInt(`${smalli}`) / 3}`;
         libturbomodulejsijniL = `${libturbomodulejsijniL.length % 2}`;
         eventv = eventv || libturbomodulejsijniL.length > 27;
          let fastP = 2;
          let dragclose8 = 0.0;
         latnM -= 3;
         fastP >>= Math.min(Math.abs(fastP >> (Math.min(1, Math.abs(3)))), 1);
         dragclose8 -= fastP << (Math.min(5, Math.abs(2)));
          let stationS = String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,57,95,52,48,0);
         smalli -= parseInt(`${scheduleE}`) ^ parseInt(`${latnM}`);
         stationS += `${stationS.length}`;
      for (let c = 0; c < 3; c++) {
          let umengR = String.fromCharCode(115,99,97,108,105,110,103,95,48,95,52,51,0);
          let giftbuttonB = 2.0;
          let areaK = 4;
          let soundAj = 3.0;
         langJ /= Math.max(2 & parseInt(`${soundAj}`), 4);
         umengR = `${parseInt(`${giftbuttonB}`)}`;
         giftbuttonB *= areaK;
         areaK /= Math.max(2 * parseInt(`${giftbuttonB}`), 1);
         soundAj += parseFloat(`${areaK / (Math.max(parseInt(`${giftbuttonB}`), 6))}`);
      }
      for (let c = 0; c < 3; c++) {
         langJ /= Math.max(3, 4);
      }
       let pointA = 0;
       let checkboxY = 2;
       let windH = String.fromCharCode(119,95,50,95,112,114,101,102,101,114,101,110,99,101,115,0);
       let zhuboc = String.fromCharCode(115,116,114,115,101,112,95,113,95,54,48,0);
         checkboxY ^= pointA ^ parseInt(`${smalli}`);
         checkboxY *= pointA;
      if (2.46 > langJ) {
         langJ *= 3 % (Math.max(4, zhuboc.length));
      }
         proxyV += "2";
       let iconbellactivey = String.fromCharCode(112,95,49,50,95,108,111,99,107,105,110,103,0);
      let libsgcore8 = 6353405.0 >= langJ;
      do {
         langJ -= (iconbellactivey == String.fromCharCode(69,0) ? iconbellactivey.length : windH.length);
         if (libsgcore8) {
            break;
         }
      } while ((1 < (zhuboc.length + 5) || 2.94 < (langJ - zhuboc.length)) && libsgcore8);
         windH += `${1 & pointA}`;
      expiredl += `${parseInt(`${langJ}`)}`;
      break;
   }
      rankc += `${parseInt(`${expandw}`) & 1}`;
      textinputb = `${parseInt(`${iconsharex}`) % (Math.max(parseInt(`${iconwechatL}`), 10))}`;
   for (let f = 0; f < 1; f++) {
      rankc += `${3 - parseInt(`${expandw}`)}`;
   }
   if (Array.from(crossS.keys()).includes(`${constantsp}`)) {
      crossS = new Map([[rankc, eventL.length]]);
   }
   let zhubol = 6517994.0 <= yellowg;
   do {
      yellowg /= Math.max(parseFloat(`${textinputb.length}`), 5);
      if (zhubol) {
         break;
      }
   } while ((1.66 >= (5.97 * yellowg)) && zhubol);
       let smallM = String.fromCharCode(108,95,55,53,95,99,97,108,108,105,115,116,111,0);
       let subsm: Map<any, any> = new Map([[String.fromCharCode(98,105,116,109,97,115,107,95,55,95,49,57,0),String.fromCharCode(100,99,116,114,101,102,95,102,95,55,55,0)], [String.fromCharCode(118,95,55,52,95,104,101,97,114,116,115,0),String.fromCharCode(114,108,105,110,101,95,119,95,53,51,0)]]);
       let calendarr: Array<any> = [481, 246];
         calendarr = [2];
      let flag1 = 6406692 <= subsm.size;
      do {
         subsm = new Map([[`${subsm.size}`, calendarr.length >> (Math.min(1, Math.abs(subsm.size)))]]);
         if (flag1) {
            break;
         }
      } while (flag1 && (5 > smallM.length));
         subsm.set(`${calendarr.length}`, 1);
         calendarr.push(calendarr.length ^ subsm.size);
      if ((1 | smallM.length) < 2 && 1 < (subsm.size | smallM.length)) {
         smallM += `${calendarr.length}`;
      }
         subsm = new Map([[`${calendarr.length}`, smallM.length * 1]]);
      while (Array.from(subsm.values()).includes(calendarr.length)) {
          let topont = String.fromCharCode(113,117,97,110,116,105,122,101,114,95,98,95,51,48,0);
          let calendare = false;
         calendarr.push(1);
         topont += `${(2 % (Math.max(10, (calendare ? 5 : 4))))}`;
         calendare = ((topont.length << (Math.min(5, Math.abs((!calendare ? 12 : topont.length))))) >= 12);
         break;
      }
          let gemfile6 = 5.0;
         calendarr = [parseInt(`${gemfile6}`)];
       let iconx = 1.0;
      rankc = `${eventL.length}`;
      constantsp /= Math.max(3, parseInt(`${yellowg}`) * 1);
   while (4 < expiredl.length) {
       let confirmationr: Array<any> = [String.fromCharCode(117,110,108,105,109,105,116,101,100,95,97,95,53,51,0), String.fromCharCode(109,95,53,55,95,111,110,97,118,99,100,97,116,97,0)];
       let commentd = String.fromCharCode(97,95,49,55,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0);
          let previewl: Map<any, any> = new Map([[String.fromCharCode(106,95,53,56,95,118,105,101,119,112,111,114,116,0),true ], [String.fromCharCode(98,111,111,115,116,101,100,95,110,95,49,50,0),true ]]);
         commentd += `${previewl.size << (Math.min(commentd.length, 2))}`;
      while (5 >= (commentd.length & 5) || 1 >= (5 & commentd.length)) {
         commentd += `${commentd.length}`;
         break;
      }
      if (!commentd.includes(`${confirmationr.length}`)) {
          let humidityq = 5;
          let recommendationP = String.fromCharCode(103,97,112,95,98,95,49,49,0);
          let lineU = 1.0;
          let gifgoalbgd = false;
         commentd += `${recommendationP.length}`;
         humidityq %= Math.max(parseInt(`${lineU}`) | 3, 3);
         recommendationP = `${2 | parseInt(`${lineU}`)}`;
         gifgoalbgd = humidityq > 50 || lineU > 42.70;
      }
      for (let z = 0; z < 2; z++) {
         commentd = "3";
      }
         confirmationr = [confirmationr.length % (Math.max(1, 7))];
      for (let b = 0; b < 1; b++) {
         confirmationr = [confirmationr.length];
      }
      expiredl = `${parseInt(`${constantsp}`) & 2}`;
      break;
   }
   for (let p = 0; p < 3; p++) {
      eventL += "1";
   }
      eventL = `${(expiredl == String.fromCharCode(77,0) ? expiredl.length : parseInt(`${expandw}`))}`;
    overlayRef.current = true;

       let targeta = String.fromCharCode(111,95,49,48,0);
          let animationsh = 2.0;
          let clearg = 2.0;
         targeta = `${parseInt(`${animationsh}`)}`;
         animationsh -= 3;
         clearg += parseInt(`${clearg}`);
      let thailandM = targeta == String.fromCharCode(52,55,49,107,0);
      do {
         targeta += `${targeta.length}`;
         if (thailandM) {
            break;
         }
      } while (thailandM && (2 == targeta.length && targeta != String.fromCharCode(105,0)));
          let appleN: Array<any> = [865, 226];
          let static_0P = true;
         targeta += `${targeta.length}`;
         appleN = [appleN.length];
         static_0P = appleN.length >= 64;
      rankc += `${parseInt(`${iconwechatL}`) & parseInt(`${constantsp}`)}`;
   let weatherx = 5496834.0 >= iconsharex;
   do {
      iconsharex += parseFloat(`${1}`);
      if (weatherx) {
         break;
      }
   } while (weatherx && ((iconsharex - 5.65) <= 2.29 || (yellowg - 5.65) <= 1.45));
      constantsp *= (rankc == String.fromCharCode(68,0) ? parseInt(`${iconwechatL}`) : rankc.length);
      robotoG |= 1 | parseInt(`${iconpipexpandB}`);
      downloadk = `${parseInt(`${iconsharex}`) * 3}`;
      popuph += parseInt(`${popuph}`);
   for (let h = 0; h < 1; h++) {
      popuph *= 3;
   }
      rankc = `${expiredl.length}`;
      robotoG %= Math.max(parseInt(`${iconsharex}`), 5);
       let predictionwin9: Map<any, any> = new Map([[String.fromCharCode(114,97,112,104,105,99,115,95,116,95,49,53,0),464], [String.fromCharCode(117,110,105,99,111,100,101,95,114,95,53,49,0),907], [String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,95,110,95,51,0),445]]);
      for (let z = 0; z < 1; z++) {
         predictionwin9 = new Map([[`${predictionwin9.size}`, predictionwin9.size]]);
      }
      for (let f = 0; f < 3; f++) {
         predictionwin9.set(`${predictionwin9.size}`, predictionwin9.size);
      }
      for (let q = 0; q < 3; q++) {
         predictionwin9.set(`${predictionwin9.size}`, predictionwin9.size | 1);
      }
      robotoG &= 3 | parseInt(`${popuph}`);
   while ((5.81 - constantsp) < 5.12) {
       let flagX = String.fromCharCode(122,95,53,95,116,105,109,101,111,117,116,0);
       let downarrow8 = String.fromCharCode(110,111,114,109,97,108,105,115,101,95,48,95,54,50,0);
       let overf: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,115,95,54,95,49,49,0),589], [String.fromCharCode(121,95,57,57,95,112,105,118,111,116,0),219]]);
       let auto_iW = String.fromCharCode(119,95,53,55,95,99,97,112,116,117,114,101,114,0);
      let libfbjniD = downarrow8.length <= 8068422;
      do {
         downarrow8 = `${(String.fromCharCode(70,0) == flagX ? overf.size : flagX.length)}`;
         if (libfbjniD) {
            break;
         }
      } while ((!flagX.startsWith(downarrow8)) && libfbjniD);
       let tempnodatagif2 = 1.0;
       let arrowupj = 0.0;
      while (tempnodatagif2 <= 2.27) {
          let linkB: Array<any> = [802, 957, 137];
          let proxyt = true;
          let streamingq = 0.0;
          let previews: Map<any, any> = new Map([[String.fromCharCode(113,117,105,99,107,95,105,95,52,48,0),false ], [String.fromCharCode(99,111,110,99,117,114,114,101,110,116,95,57,95,52,57,0),true ], [String.fromCharCode(119,95,55,52,95,114,107,109,112,112,0),true ]]);
         downarrow8 += `${flagX.length / (Math.max(1, 5))}`;
         linkB.push(parseInt(`${streamingq}`) * 1);
         proxyt = (63 <= ((proxyt ? 63 : linkB.length) - linkB.length));
         streamingq /= Math.max(2, parseInt(`${streamingq}`) & 1);
         previews = new Map([[`${previews.size}`, previews.size]]);
         break;
      }
      for (let r = 0; r < 2; r++) {
         overf.set(`${downarrow8}`, overf.size + 3);
      }
          let sendP = 5.0;
          let z_titleQ = 0;
          let gifgoalbgM = 2;
         tempnodatagif2 *= parseFloat(`${parseInt(`${arrowupj}`) ^ 2}`);
         sendP -= 1;
         z_titleQ &= gifgoalbgM;
      let libffmpegkitL = 7142372 >= downarrow8.length;
      do {
          let cornerw: Array<any> = [760, 700];
          let phoneshareM = String.fromCharCode(105,100,101,110,116,105,99,97,108,95,113,95,55,53,0);
         downarrow8 += `${(String.fromCharCode(106,0) == phoneshareM ? downarrow8.length : phoneshareM.length)}`;
         cornerw = [cornerw.length];
         if (libffmpegkitL) {
            break;
         }
      } while (libffmpegkitL && (auto_iW == downarrow8));
          let stringH: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,100,99,97,97,100,112,99,109,0),500], [String.fromCharCode(103,95,49,95,114,101,109,111,118,101,114,0),456]]);
         downarrow8 = `${1 << (Math.min(4, Math.abs(overf.size)))}`;
         stringH = new Map([[`${stringH.size}`, stringH.size]]);
      while ((tempnodatagif2 + parseFloat(`${overf.size}`)) <= 1.48 && (4 * overf.size) <= 3) {
         tempnodatagif2 *= parseFloat(`${overf.size & 3}`);
         break;
      }
      while (5 < (overf.size / 4)) {
         arrowupj /= Math.max(1, parseFloat(`${flagX.length >> (Math.min(auto_iW.length, 3))}`));
         break;
      }
      for (let v = 0; v < 1; v++) {
         downarrow8 = "3";
      }
      let with_z8 = 8900621 <= downarrow8.length;
      do {
         downarrow8 = "2";
         if (with_z8) {
            break;
         }
      } while ((1 >= (downarrow8.length % (Math.max(2, 2))) && 1 >= (overf.size % 2)) && with_z8);
      if (auto_iW != flagX) {
          let goalh: Array<any> = [855, 150];
          let incident9 = 3.0;
          let libfbjniW = 1.0;
          let contextR: Map<any, any> = new Map([[String.fromCharCode(115,108,101,101,112,95,53,95,54,56,0),true ], [String.fromCharCode(118,111,119,101,108,115,95,56,95,52,52,0),true ], [String.fromCharCode(98,95,57,55,95,99,111,110,116,105,110,117,97,108,0),true ]]);
          let chartt: Array<any> = [563, 395, 672];
         flagX += `${flagX.length}`;
         goalh = [2 - parseInt(`${incident9}`)];
         incident9 += goalh.length;
         libfbjniW += 1;
         contextR.set(`${libfbjniW}`, parseInt(`${libfbjniW}`));
         chartt.push(parseInt(`${incident9}`) * contextR.size);
      }
      expiredl += `${expiredl.length / 2}`;
      break;
   }
    timer.current = setTimeout(() => setShowOverlay(false), 3000);
  };

  const handleSeek = useCallback(
    (value: number) => {
      if (disableSeek) {
        dispatch(showAdultModeVip());
        return;
      }
      if (!isVideoReadyIos && Platform.OS === 'ios') return;
      if (!isVideoReadyAndroid && Platform.OS === 'android') return;

      if (Number.isNaN(value)) {
        value = 0;
      }

      if (!onSliding) setOnSliding(true);

      showControls();
      updateVideoDuration(value);
      seekVideo(value);
    },
    [isVideoReadyIos, isVideoReadyAndroid, onSliding],
  );

  const seekVideo = useCallback(
    debounce(value => {
       let alertT = String.fromCharCode(108,95,52,48,95,104,97,110,100,111,118,101,114,0);
    let whiteZ = String.fromCharCode(103,101,115,116,117,114,101,95,120,95,52,50,0);
    let dice4 = String.fromCharCode(98,95,50,56,95,109,97,112,112,101,100,0);
    let activityM = String.fromCharCode(122,95,54,56,95,115,119,105,122,122,108,105,110,103,0);
    let gmail6 = 1;
    let downloadingG: Array<any> = [String.fromCharCode(98,111,117,110,100,95,101,95,57,51,0), String.fromCharCode(122,101,114,111,109,118,95,110,95,55,53,0), String.fromCharCode(100,101,108,101,116,105,110,103,95,50,95,49,51,0)];
    let reward3: Map<any, any> = new Map([[String.fromCharCode(109,95,52,50,95,115,104,97,114,101,100,107,101,121,0),941], [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,95,100,95,50,54,0),853]]);
    let plashv = String.fromCharCode(122,95,56,55,95,114,101,113,117,105,114,101,109,101,110,116,115,0);
    let over0: Map<any, any> = new Map([[String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,121,95,49,51,0),183], [String.fromCharCode(119,111,114,100,108,101,110,95,104,95,50,57,0),815]]);
    let unselectedz: Array<any> = [794, 667];
   if (!activityM.startsWith(`${reward3.size}`)) {
       let watchQ = String.fromCharCode(108,111,119,100,101,108,97,121,95,106,95,54,56,0);
       let pauseJ = String.fromCharCode(118,95,51,57,95,103,97,109,109,97,118,97,108,0);
       let stringY = 4.0;
       let calendarL = 0.0;
       let abidetectw = 3.0;
         watchQ += `${watchQ.length}`;
      for (let f = 0; f < 1; f++) {
         calendarL *= pauseJ.length / (Math.max(2, watchQ.length));
      }
         abidetectw += parseInt(`${stringY}`) & 3;
      let libavutilI = calendarL >= 8894979.0;
      do {
         calendarL /= Math.max(parseInt(`${calendarL}`), 5);
         if (libavutilI) {
            break;
         }
      } while (libavutilI && (2.73 < (abidetectw + calendarL) || (calendarL + abidetectw) < 2.73));
         calendarL += parseInt(`${stringY}`) << (Math.min(3, Math.abs(parseInt(`${calendarL}`))));
      for (let z = 0; z < 1; z++) {
         abidetectw *= parseInt(`${stringY}`);
      }
       let modelsl = String.fromCharCode(112,95,48,0);
       let xvodG = String.fromCharCode(116,100,115,99,95,97,95,57,55,0);
      for (let i = 0; i < 1; i++) {
         modelsl = `${modelsl.length % (Math.max(6, xvodG.length))}`;
      }
      activityM += "1";
   }
   if (activityM == String.fromCharCode(51,0)) {
      alertT += `${1 << (Math.min(4, alertT.length))}`;
   }
       let inactivea = true;
       let register_4re = String.fromCharCode(105,95,54,53,95,108,105,98,115,114,116,0);
      let reactnativeratingsf = register_4re.length <= 7826018;
      do {
          let holderq = String.fromCharCode(99,108,105,112,112,101,100,95,52,95,49,48,0);
          let questicon5 = true;
          let controlsF = 3.0;
          let launchN: Array<any> = [682, 502];
          let context8 = 5;
         register_4re = `${((questicon5 ? 4 : 4) & parseInt(`${controlsF}`))}`;
         holderq = `${context8 & launchN.length}`;
         questicon5 = holderq.length < launchN.length;
         controlsF /= Math.max(2, parseFloat(`${3 & holderq.length}`));
         context8 ^= 2 - holderq.length;
         if (reactnativeratingsf) {
            break;
         }
      } while ((!inactivea) && reactnativeratingsf);
         register_4re = `${register_4re.length / (Math.max(3, 9))}`;
      dice4 += "3";
      activityM = `${downloadingG.length + 2}`;
      dice4 += `${2 << (Math.min(1, whiteZ.length))}`;
   let unimplementedview0 = gmail6 >= 7770313;
   do {
      gmail6 >>= Math.min(3, dice4.length);
      if (unimplementedview0) {
         break;
      }
   } while (unimplementedview0 && (2 == (4 ^ gmail6) || 1 == (activityM.length ^ 4)));
   while (!whiteZ.includes(`${alertT.length}`)) {
       let neonJ = String.fromCharCode(104,95,48,95,105,110,116,114,97,112,114,101,100,0);
       let encrypt3 = String.fromCharCode(97,95,57,95,117,116,117,114,101,0);
      let arrowupN = String.fromCharCode(99,107,121,119,111,97,95,104,95,111,0) == encrypt3;
      do {
         encrypt3 = `${(String.fromCharCode(88,0) == encrypt3 ? neonJ.length : encrypt3.length)}`;
         if (arrowupN) {
            break;
         }
      } while ((neonJ != String.fromCharCode(73,0) || encrypt3 != String.fromCharCode(99,0)) && arrowupN);
         encrypt3 += "1";
      for (let g = 0; g < 1; g++) {
         encrypt3 += `${encrypt3.length % (Math.max(5, neonJ.length))}`;
      }
      while (encrypt3 == neonJ) {
         neonJ += "3";
         break;
      }
      while (encrypt3.length >= 1) {
         neonJ += `${encrypt3.length}`;
         break;
      }
      if (encrypt3.length < neonJ.length) {
         neonJ += `${(encrypt3 == String.fromCharCode(115,0) ? encrypt3.length : neonJ.length)}`;
      }
      whiteZ = `${encrypt3.length}`;
      break;
   }

      if (videoRef.current) {
        videoRef.current.seek(isNaN(value) ? 0 : value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
       let libsentryW = 4.0;
    let humidityG: Map<any, any> = new Map([[String.fromCharCode(102,111,108,100,101,114,95,106,95,54,57,0),true ], [String.fromCharCode(109,120,112,101,103,95,115,95,49,51,0),true ]]);
    let attributedstring6 = 4;
    let dataS = 5.0;
    let arrowupM = 2.0;
    let long_z_7 = 0.0;
    let trashn = String.fromCharCode(99,97,109,101,114,97,95,113,95,54,57,0);
    let favicone: Array<any> = [706, 551, 68];
    let predictioni: Map<any, any> = new Map([[String.fromCharCode(120,95,55,51,95,115,108,111,116,115,0),190], [String.fromCharCode(114,100,98,120,95,98,95,54,53,0),311]]);
    let philippines0 = 1.0;
    let libjsijniprofilerD = String.fromCharCode(120,95,50,95,97,116,116,101,109,112,116,101,100,0);
    let plusq = String.fromCharCode(98,95,56,51,95,114,101,103,105,115,116,114,97,114,0);
   if (4 <= predictioni.size) {
       let libflipperI = 5.0;
       let penaltygoalu = String.fromCharCode(100,117,114,97,116,105,111,110,95,119,95,49,55,0);
       let klevinJ: Map<any, any> = new Map([[String.fromCharCode(115,98,115,112,108,105,116,95,120,95,52,52,0),true ], [String.fromCharCode(116,95,48,95,110,117,108,108,0),false ]]);
       let z_playeru = false;
         z_playeru = 98.65 == libflipperI;
          let shootT = 1.0;
         libflipperI *= parseFloat(`${2 % (Math.max(parseInt(`${libflipperI}`), 4))}`);
         shootT *= parseFloat(`${2}`);
         libflipperI += (parseFloat(`${klevinJ.size / (Math.max(8, (z_playeru ? 2 : 4)))}`));
      let typesR = penaltygoalu == String.fromCharCode(115,50,122,116,111,49,52,0);
      do {
         penaltygoalu += `${klevinJ.size}`;
         if (typesR) {
            break;
         }
      } while ((!penaltygoalu.includes(`${libflipperI}`)) && typesR);
       let backiconG = String.fromCharCode(118,95,54,51,95,116,105,109,101,111,117,116,115,0);
       let otherb = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,106,95,55,48,0);
          let ksadM = 5;
          let ewardedH = String.fromCharCode(98,95,57,56,95,100,101,102,101,114,0);
          let librrcs = 0.0;
         klevinJ = new Map([[ewardedH, 3 * ewardedH.length]]);
         ksadM |= 2 + parseInt(`${librrcs}`);
         librrcs /= Math.max(parseFloat(`${parseInt(`${librrcs}`)}`), 2);
         z_playeru = backiconG.length == otherb.length;
      for (let f = 0; f < 2; f++) {
          let bdxadsdk5 = 5.0;
          let regengP: Array<any> = [533, 237, 335];
          let xvod8 = true;
          let savei = String.fromCharCode(112,97,114,115,101,114,115,95,51,95,54,54,0);
         klevinJ.set(`${xvod8}`, ((xvod8 ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${bdxadsdk5}`)), 5))));
         bdxadsdk5 += parseFloat(`${regengP.length << (Math.min(savei.length, 3))}`);
         regengP.push(savei.length / (Math.max(5, regengP.length)));
      }
          let resultI = false;
          let completeK = String.fromCharCode(117,95,53,54,95,115,98,114,101,115,101,114,118,101,0);
         otherb += `${(2 * (z_playeru ? 1 : 1))}`;
         resultI = ((completeK.length << (Math.min(5, Math.abs((resultI ? 72 : completeK.length))))) >= 72);
      let dycreatoro = otherb == String.fromCharCode(106,121,99,48,114,49,111,106,121,107,0);
      do {
         otherb += `${klevinJ.size % (Math.max(8, otherb.length))}`;
         if (dycreatoro) {
            break;
         }
      } while ((backiconG == otherb) && dycreatoro);
      for (let c = 0; c < 1; c++) {
          let iconpipexpandy = String.fromCharCode(116,104,114,101,115,95,103,95,52,57,0);
          let catagoryu: Array<any> = [String.fromCharCode(110,95,50,56,95,101,110,99,111,100,97,98,108,101,0), String.fromCharCode(120,95,51,56,95,116,101,109,112,111,114,97,108,0), String.fromCharCode(109,95,52,95,99,111,110,103,101,115,116,105,111,110,0)];
         libflipperI *= (parseFloat(`${parseInt(`${libflipperI}`) >> (Math.min(3, Math.abs((z_playeru ? 5 : 2))))}`));
         iconpipexpandy = `${(iconpipexpandy == String.fromCharCode(68,0) ? iconpipexpandy.length : catagoryu.length)}`;
         catagoryu.push(3 / (Math.max(7, iconpipexpandy.length)));
      }
      for (let g = 0; g < 2; g++) {
          let long_lw6 = String.fromCharCode(117,95,54,54,95,97,110,105,109,97,116,101,100,0);
          let ksadA = true;
         z_playeru = !penaltygoalu.endsWith(`${libflipperI}`);
         long_lw6 = `${((ksadA ? 4 : 1))}`;
         ksadA = !ksadA;
      }
      libjsijniprofilerD = "1";
   }
       let iconuser_ = String.fromCharCode(101,120,99,101,101,100,95,108,95,57,48,0);
       let singleD = String.fromCharCode(104,97,118,105,110,103,95,104,95,54,51,0);
       let handlerF = String.fromCharCode(108,95,50,48,95,105,103,110,112,111,115,116,0);
         handlerF += `${2 & iconuser_.length}`;
      let d_imaged = iconuser_.length >= 9829057;
      do {
         iconuser_ = `${(handlerF == String.fromCharCode(99,0) ? handlerF.length : singleD.length)}`;
         if (d_imaged) {
            break;
         }
      } while ((iconuser_.length > handlerF.length) && d_imaged);
         singleD = `${singleD.length}`;
         handlerF = `${handlerF.length / (Math.max(9, iconuser_.length))}`;
      let dragZ = singleD == String.fromCharCode(104,110,112,98,112,114,0);
      do {
         singleD = "2";
         if (dragZ) {
            break;
         }
      } while (dragZ && (singleD.startsWith(`${iconuser_.length}`)));
         iconuser_ += `${singleD.length * iconuser_.length}`;
         singleD += `${3 >> (Math.min(1, singleD.length))}`;
         singleD += `${(iconuser_ == String.fromCharCode(57,0) ? singleD.length : iconuser_.length)}`;
      while (iconuser_ != String.fromCharCode(87,0)) {
         handlerF += `${handlerF.length % 1}`;
         break;
      }
      trashn += `${(String.fromCharCode(114,0) == handlerF ? handlerF.length : singleD.length)}`;
      favicone = [parseInt(`${arrowupM}`)];
      humidityG.set(`${libjsijniprofilerD}`, 3);
      long_z_7 += 3;

    clearTimeout(iconTimer.current);

   let uimanagera = libjsijniprofilerD.length <= 9427700;
   do {
      libjsijniprofilerD = `${parseInt(`${long_z_7}`) << (Math.min(1, Math.abs(3)))}`;
      if (uimanagera) {
         break;
      }
   } while (uimanagera && (4 == libjsijniprofilerD.length));
   let basketball3 = attributedstring6 >= 5133052;
   do {
      attributedstring6 &= parseInt(`${libsentryW}`);
      if (basketball3) {
         break;
      }
   } while ((5 == (attributedstring6 | 1) || 5 == (attributedstring6 | 1)) && basketball3);
   if ((favicone.length - parseInt(`${libsentryW}`)) == 5 || 5 == (favicone.length - parseInt(`${libsentryW}`))) {
      libsentryW += parseFloat(`${humidityG.size ^ trashn.length}`);
   }
   if ((1 - predictioni.size) < 3 && 3 < (1 - predictioni.size)) {
      attributedstring6 += favicone.length % (Math.max(2, predictioni.size));
   }
       let gcopy_gy = String.fromCharCode(106,112,101,103,99,111,109,112,95,51,95,55,55,0);
         gcopy_gy += `${(gcopy_gy == String.fromCharCode(84,0) ? gcopy_gy.length : gcopy_gy.length)}`;
         gcopy_gy = `${(String.fromCharCode(68,0) == gcopy_gy ? gcopy_gy.length : gcopy_gy.length)}`;
       let shirtr = 3;
      arrowupM *= parseFloat(`${2}`);
    setShowIcon(true);

      philippines0 *= parseFloat(`${humidityG.size >> (Math.min(Math.abs(2), 5))}`);
   while (Array.from(humidityG.keys()).includes(`${arrowupM}`)) {
      humidityG = new Map([[`${favicone.length}`, 1 | libjsijniprofilerD.length]]);
      break;
   }
       let rulesZ = 5.0;
      for (let z = 0; z < 2; z++) {
         rulesZ -= parseInt(`${rulesZ}`) & parseInt(`${rulesZ}`);
      }
          let gpayR = String.fromCharCode(109,100,104,100,95,111,95,51,55,0);
          let cornerkick_ = String.fromCharCode(115,116,97,116,101,115,95,120,95,52,57,0);
         rulesZ /= Math.max(2, gpayR.length / (Math.max(cornerkick_.length, 5)));
      for (let w = 0; w < 3; w++) {
         rulesZ -= parseInt(`${rulesZ}`);
      }
      attributedstring6 |= 1 ^ libjsijniprofilerD.length;
   for (let n = 0; n < 1; n++) {
      favicone.push((String.fromCharCode(54,0) == libjsijniprofilerD ? libjsijniprofilerD.length : parseInt(`${arrowupM}`)));
   }
   if (5.63 == (libsentryW / 5.28) || (humidityG.size / (Math.max(4, parseInt(`${libsentryW}`)))) == 5) {
       let chart6 = 0.0;
       let gmailD = false;
       let completev = 4.0;
      for (let l = 0; l < 3; l++) {
         completev -= parseFloat(`${parseInt(`${completev}`) / 2}`);
      }
         gmailD = chart6 < 39.25;
      for (let i = 0; i < 2; i++) {
         completev /= Math.max(5, parseFloat(`${3 / (Math.max(parseInt(`${completev}`), 6))}`));
      }
          let penaltyJ = 4.0;
          let adulte = 1;
          let moonh = 0.0;
         gmailD = 44 < adulte;
         penaltyJ -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${penaltyJ}`)), 1))}`);
         adulte >>= Math.min(4, Math.abs(parseInt(`${penaltyJ}`)));
         moonh *= parseInt(`${moonh}`) / 1;
      for (let t = 0; t < 2; t++) {
         gmailD = completev > 36.28 || gmailD;
      }
      for (let l = 0; l < 2; l++) {
         chart6 -= ((gmailD ? 3 : 1) & parseInt(`${chart6}`));
      }
         chart6 += parseInt(`${completev}`) + 1;
       let selectp = true;
          let bellC = String.fromCharCode(117,95,53,50,95,114,101,118,111,107,105,110,103,0);
          let serviceI = String.fromCharCode(108,95,51,50,95,103,98,114,97,112,0);
          let vietnamn = String.fromCharCode(122,95,50,52,95,115,101,97,114,99,104,97,98,108,101,0);
         completev += parseFloat(`${1}`);
         bellC += `${serviceI.length}`;
         serviceI += `${vietnamn.length % (Math.max(9, serviceI.length))}`;
         vietnamn = `${serviceI.length}`;
      libsentryW *= parseFloat(`${1 >> (Math.min(4, Math.abs(predictioni.size)))}`);
   }
    if (isPause) {

   while (trashn.startsWith(`${arrowupM}`)) {
      arrowupM /= Math.max(parseFloat(`${favicone.length}`), 3);
      break;
   }
   let windM = 9208297 <= predictioni.size;
   do {
       let defaultpredictionprofilew: Array<any> = [950, 241];
      let roomb = 7142902 <= defaultpredictionprofilew.length;
      do {
         defaultpredictionprofilew = [defaultpredictionprofilew.length + defaultpredictionprofilew.length];
         if (roomb) {
            break;
         }
      } while ((defaultpredictionprofilew.length < defaultpredictionprofilew.length) && roomb);
       let mintegral0: Map<any, any> = new Map([[String.fromCharCode(97,95,56,50,95,106,102,105,101,108,100,115,0),623], [String.fromCharCode(121,95,49,56,95,114,101,102,114,101,115,104,0),842]]);
      while ((2 & defaultpredictionprofilew.length) <= 4 && (defaultpredictionprofilew.length & 2) <= 4) {
         defaultpredictionprofilew.push(2);
         break;
      }
      predictioni.set(libjsijniprofilerD, libjsijniprofilerD.length);
      if (windM) {
         break;
      }
   } while (windM && (1 <= (favicone.length | predictioni.size) && (favicone.length | predictioni.size) <= 1));
      attributedstring6 /= Math.max(parseInt(`${arrowupM}`), 5);
   if (3.29 <= (3.42 * dataS) || 1 <= (parseInt(`${dataS}`) * libjsijniprofilerD.length)) {
      libjsijniprofilerD = "2";
   }
       let gradleZ: Map<any, any> = new Map([[String.fromCharCode(121,95,54,52,95,116,111,107,101,110,105,122,101,114,0),172], [String.fromCharCode(114,97,116,101,99,116,114,108,95,100,95,52,55,0),657]]);
       let profilem = String.fromCharCode(103,101,116,116,105,110,103,95,53,95,57,57,0);
       let rewardvideoy = String.fromCharCode(97,99,104,101,95,55,95,56,49,0);
      let renewE = 7310097 <= profilem.length;
      do {
         profilem += `${profilem.length + rewardvideoy.length}`;
         if (renewE) {
            break;
         }
      } while (renewE && (profilem.length > gradleZ.size));
          let promotions = String.fromCharCode(117,110,99,108,105,112,112,101,100,95,49,95,54,48,0);
          let rewardvideoh = 4.0;
         rewardvideoy = `${(String.fromCharCode(55,0) == promotions ? promotions.length : profilem.length)}`;
         rewardvideoh /= Math.max(parseFloat(`${parseInt(`${rewardvideoh}`)}`), 1);
      let libtanK = rewardvideoy.length <= 7014626;
      do {
         rewardvideoy = `${rewardvideoy.length}`;
         if (libtanK) {
            break;
         }
      } while (libtanK && (3 > profilem.length));
          let inouttargetredl: Map<any, any> = new Map([[String.fromCharCode(100,95,56,49,95,106,111,105,110,101,114,0),true ], [String.fromCharCode(118,95,55,57,95,99,97,114,100,115,0),true ]]);
         profilem += `${profilem.length}`;
         inouttargetredl.set(`${inouttargetredl.size}`, 2);
         gradleZ.set(profilem, profilem.length * rewardvideoy.length);
         gradleZ = new Map([[rewardvideoy, profilem.length << (Math.min(1, rewardvideoy.length))]]);
      while (4 == rewardvideoy.length) {
          let closeK: Map<any, any> = new Map([[String.fromCharCode(103,101,116,97,115,115,111,99,105,100,95,103,95,50,52,0),true ], [String.fromCharCode(97,114,99,104,105,118,101,100,95,114,95,50,49,0),false ]]);
          let iconnewsshareZ = false;
          let spinnerD = true;
          let regengR = String.fromCharCode(110,101,119,101,115,116,95,116,95,49,55,0);
          let statisticsinactives = 4;
         rewardvideoy += "3";
         closeK.set(`${iconnewsshareZ}`, 2);
         spinnerD = !spinnerD;
         regengR += `${regengR.length ^ statisticsinactives}`;
         statisticsinactives -= 2 + closeK.size;
         break;
      }
      for (let m = 0; m < 2; m++) {
         gradleZ.set(rewardvideoy, profilem.length);
      }
      let giftL = String.fromCharCode(107,120,106,107,104,54,103,95,109,51,0) == profilem;
      do {
         profilem += `${1 | profilem.length}`;
         if (giftL) {
            break;
         }
      } while (((5 * gradleZ.size) >= 1) && giftL);
      arrowupM /= Math.max(4, parseFloat(`${humidityG.size}`));
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    else {

      dataS += parseInt(`${long_z_7}`);
       let strW: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,95,115,95,53,52,0),451], [String.fromCharCode(117,95,52,52,95,101,109,98,101,100,100,101,100,0),542]]);
       let libavformatX: Map<any, any> = new Map([[String.fromCharCode(122,95,54,51,95,109,98,101,100,116,108,115,0),188], [String.fromCharCode(99,111,109,109,105,116,116,101,114,95,111,95,57,50,0),59], [String.fromCharCode(122,95,50,57,95,100,101,114,105,118,0),454]]);
       let filen = true;
          let singaporeW: Array<any> = [18, 182];
          let countryR = 2.0;
         libavformatX.set(`${singaporeW.length}`, 2 | singaporeW.length);
         countryR -= parseInt(`${countryR}`);
         strW = new Map([[`${strW.size}`, 2]]);
         strW.set(`${libavformatX.size}`, libavformatX.size | 3);
       let awayteamfieldw = 2;
          let dropdown_ = 2.0;
          let homed = String.fromCharCode(102,95,54,52,95,111,112,116,97,98,108,101,0);
          let telemetrys: Map<any, any> = new Map([[String.fromCharCode(122,95,50,48,95,113,115,118,115,99,97,108,101,0),746], [String.fromCharCode(110,95,49,56,95,115,105,116,101,0),910], [String.fromCharCode(111,95,55,95,102,117,108,108,115,99,114,101,101,110,0),628]]);
         libavformatX.set(`${filen}`, ((filen ? 3 : 5) / (Math.max(5, libavformatX.size))));
         dropdown_ /= Math.max(1, homed.length);
         homed += `${(String.fromCharCode(100,0) == homed ? telemetrys.size : homed.length)}`;
         telemetrys.set(`${dropdown_}`, homed.length);
       let merger6 = String.fromCharCode(110,111,116,104,105,110,103,95,103,95,49,51,0);
       let dependencyr = String.fromCharCode(117,95,52,48,95,102,114,97,109,101,112,97,99,107,0);
          let taiwanj = String.fromCharCode(112,95,57,48,95,115,117,109,102,0);
         filen = filen || dependencyr.length <= 61;
         taiwanj += `${(String.fromCharCode(115,0) == taiwanj ? taiwanj.length : taiwanj.length)}`;
         strW = new Map([[`${awayteamfieldw}`, merger6.length << (Math.min(2, Math.abs(awayteamfieldw)))]]);
         awayteamfieldw &= 1 - merger6.length;
      plusq += `${parseInt(`${libsentryW}`) + predictioni.size}`;
   if (long_z_7 <= libsentryW) {
       let defaultpredictionprofile2 = 2.0;
       let unreads = 5.0;
       let defaultprofilepicx = String.fromCharCode(102,95,48,95,99,111,110,118,101,114,116,101,100,0);
         unreads /= Math.max(3, parseInt(`${defaultpredictionprofile2}`) - 3);
         unreads *= defaultprofilepicx.length;
         unreads /= Math.max(4, (defaultprofilepicx == String.fromCharCode(84,0) ? parseInt(`${unreads}`) : defaultprofilepicx.length));
         unreads -= parseInt(`${defaultpredictionprofile2}`);
      if (1.11 <= (1 - unreads)) {
         defaultpredictionprofile2 *= parseInt(`${unreads}`);
      }
      let nterstitial5 = 9530821 <= defaultprofilepicx.length;
      do {
         defaultprofilepicx = `${1 ^ defaultprofilepicx.length}`;
         if (nterstitial5) {
            break;
         }
      } while (nterstitial5 && ((unreads * 5.52) >= 4.1 && 5.52 >= (defaultprofilepicx.length * unreads)));
         defaultpredictionprofile2 *= 3;
      for (let h = 0; h < 2; h++) {
          let libswresampleD = String.fromCharCode(114,101,106,101,99,116,95,122,95,57,54,0);
          let long_jp = String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,120,95,55,56,0);
          let weibo0 = String.fromCharCode(97,112,112,108,105,101,114,95,121,95,57,48,0);
         unreads *= libswresampleD.length;
         libswresampleD += `${long_jp.length | 3}`;
         long_jp += `${3 * weibo0.length}`;
         weibo0 += `${weibo0.length ^ 3}`;
      }
      let leaguev = 6735821.0 >= unreads;
      do {
         unreads -= parseInt(`${defaultpredictionprofile2}`);
         if (leaguev) {
            break;
         }
      } while (((1 - defaultpredictionprofile2) == 1.32) && leaguev);
      libsentryW *= parseFloat(`${parseInt(`${unreads}`) + predictioni.size}`);
   }
   while (2 >= (favicone.length * 2)) {
      favicone.push(3);
      break;
   }
   if ((parseInt(`${philippines0}`) * libjsijniprofilerD.length) == 5) {
       let commentB = String.fromCharCode(110,95,53,49,95,97,108,105,103,110,109,101,110,116,0);
         commentB += `${(commentB == String.fromCharCode(98,0) ? commentB.length : commentB.length)}`;
      let lineY = commentB == String.fromCharCode(101,122,115,104,108,122,53,0);
      do {
         commentB += "3";
         if (lineY) {
            break;
         }
      } while (lineY && (commentB.endsWith(commentB)));
      for (let l = 0; l < 1; l++) {
         commentB = "3";
      }
      philippines0 /= Math.max(parseFloat(`${3 % (Math.max(8, trashn.length))}`), 3);
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let klevink: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,117,109,95,108,95,52,56,0),17], [String.fromCharCode(98,114,97,110,99,104,95,49,95,56,57,0),515]]);
    let t_playerB = String.fromCharCode(109,118,101,120,95,114,95,50,0);
    let injury8 = String.fromCharCode(114,111,103,114,101,115,115,95,106,95,52,56,0);
    let mbsplashT: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,97,103,101,95,119,95,53,55,0),String.fromCharCode(120,95,49,54,95,115,109,97,99,107,101,114,0)], [String.fromCharCode(109,97,103,105,99,95,53,95,52,52,0),String.fromCharCode(103,95,50,55,95,118,101,114,115,105,111,110,101,100,0)], [String.fromCharCode(114,101,99,121,99,108,101,95,109,95,50,54,0),String.fromCharCode(112,95,48,95,115,105,109,117,108,116,97,110,101,111,117,115,0)]]);
    let grayS = String.fromCharCode(97,110,103,117,108,97,114,95,104,95,56,50,0);
    let mbridgeL: Array<any> = [963, 163, 551];
    let modelg = String.fromCharCode(103,101,110,101,114,97,116,111,114,95,105,95,50,48,0);
    let gradleJ = 5;
    let completef = String.fromCharCode(108,97,118,102,105,95,108,95,57,48,0);
    let routerm = 2;
    let about3: Map<any, any> = new Map([[String.fromCharCode(109,95,54,48,95,119,104,105,108,101,0),699], [String.fromCharCode(97,116,114,97,99,100,97,116,97,95,48,95,51,0),469], [String.fromCharCode(99,111,111,107,95,110,95,49,48,48,0),381]]);
    let runtimen = false;
    let successF = 4;
   for (let b = 0; b < 2; b++) {
      mbsplashT.set(t_playerB, t_playerB.length % 2);
   }
   if (modelg.length == 1) {
      t_playerB += `${(completef == String.fromCharCode(86,0) ? completef.length : injury8.length)}`;
   }
      gradleJ ^= (t_playerB == String.fromCharCode(48,0) ? klevink.size : t_playerB.length);
   for (let t = 0; t < 2; t++) {
      t_playerB = `${grayS.length}`;
   }
   while ((t_playerB.length * 4) > 4 || 4 > (4 * gradleJ)) {
       let libruntimeexecutorA = String.fromCharCode(106,95,50,55,95,97,115,99,101,110,116,0);
       let buildc: Array<any> = [30, 572, 87];
       let detailA = String.fromCharCode(109,111,109,101,110,116,97,114,121,95,54,95,51,56,0);
       let watchnowbga = false;
       let detailC = 5;
         libruntimeexecutorA = `${buildc.length}`;
       let countdownQ = String.fromCharCode(108,111,99,97,108,104,111,115,116,95,116,95,54,57,0);
       let libfbjnif = String.fromCharCode(115,101,110,100,105,110,103,95,112,95,54,54,0);
       let backgroundl = String.fromCharCode(100,116,115,109,95,56,95,52,50,0);
       let iconclosewhitebg3 = String.fromCharCode(106,95,57,56,95,99,111,112,121,99,111,111,107,101,114,0);
      if (!iconclosewhitebg3.includes(`${buildc.length}`)) {
         buildc = [3 & countdownQ.length];
      }
         buildc.push(detailC);
       let w_centerb = String.fromCharCode(112,111,111,108,115,95,49,95,53,52,0);
       let subtexto = String.fromCharCode(116,105,116,108,116,101,95,105,95,55,57,0);
         detailC ^= ((watchnowbga ? 1 : 5));
         buildc.push(3 ^ detailC);
       let live_ = true;
       let handlerz = true;
      if (!watchnowbga) {
         watchnowbga = handlerz && live_;
      }
         handlerz = 61 <= w_centerb.length;
      gradleJ += grayS.length;
      break;
   }
   for (let l = 0; l < 3; l++) {
       let resend1 = String.fromCharCode(115,116,101,114,101,111,95,113,95,56,49,0);
       let codeO = String.fromCharCode(99,95,56,54,95,99,111,100,101,99,112,114,105,118,97,116,101,0);
       let dialogM = String.fromCharCode(109,95,55,48,95,100,101,115,112,105,108,108,0);
       let matchactivem: Map<any, any> = new Map([[String.fromCharCode(118,112,111,105,110,116,95,107,95,51,52,0),833], [String.fromCharCode(118,95,51,48,95,108,97,114,103,101,115,116,0),539]]);
       let const_cQ: Array<any> = [704, 257];
         codeO = `${3 << (Math.min(5, const_cQ.length))}`;
         matchactivem.set(dialogM, resend1.length);
         codeO = `${const_cQ.length % (Math.max(10, codeO.length))}`;
          let libjsinspector4 = 4.0;
          let iconmoreR = String.fromCharCode(122,95,52,49,95,114,101,112,114,101,115,101,110,116,97,116,105,118,101,0);
         resend1 += `${dialogM.length / (Math.max(3, 5))}`;
         libjsinspector4 -= parseFloat(`${parseInt(`${libjsinspector4}`)}`);
         iconmoreR += `${iconmoreR.length}`;
       let morea = String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,122,95,49,52,0);
      for (let t = 0; t < 2; t++) {
          let statsH = String.fromCharCode(116,119,111,115,116,97,103,101,95,115,95,52,0);
          let trophyn = 2;
         morea += `${matchactivem.size}`;
         statsH += `${statsH.length >> (Math.min(Math.abs(1), 1))}`;
         trophyn -= statsH.length / (Math.max(2, trophyn));
      }
         resend1 = "3";
          let iconpipexpandr = String.fromCharCode(113,95,49,57,95,109,97,103,105,99,0);
          let memberO = 2.0;
         codeO += `${morea.length + 1}`;
         iconpipexpandr = `${iconpipexpandr.length / (Math.max(2, parseInt(`${memberO}`)))}`;
         memberO /= Math.max(1, parseFloat(`${parseInt(`${memberO}`) & 1}`));
         const_cQ = [resend1.length - 3];
         codeO = `${2 >> (Math.min(3, codeO.length))}`;
      while ((2 ^ const_cQ.length) == 3 || 2 == (const_cQ.length ^ dialogM.length)) {
         const_cQ.push(1);
         break;
      }
          let libtand = false;
          let circlel = 3;
          let kuaishouc = String.fromCharCode(122,95,52,49,95,99,100,110,0);
         codeO = `${dialogM.length}`;
         libtand = (45 <= ((libtand ? kuaishouc.length : 45) << (Math.min(kuaishouc.length, 4))));
         circlel *= (kuaishouc == String.fromCharCode(52,0) ? circlel : kuaishouc.length);
         morea += `${dialogM.length}`;
      if (matchactivem.size < 5) {
         matchactivem.set(resend1, morea.length ^ 3);
      }
      if (2 < (1 - codeO.length) || 4 < (1 - const_cQ.length)) {
         const_cQ.push(resend1.length & const_cQ.length);
      }
      completef += `${matchactivem.size << (Math.min(Math.abs(3), 1))}`;
   }
      t_playerB += `${grayS.length}`;
   while ((3 / (Math.max(9, mbsplashT.size))) < 2 || 3 < (mbsplashT.size / (Math.max(grayS.length, 3)))) {
      grayS = `${3 >> (Math.min(1, mbridgeL.length))}`;
      break;
   }
   while (completef != String.fromCharCode(117,0)) {
      injury8 += `${2 & klevink.size}`;
      break;
   }
   for (let r = 0; r < 2; r++) {
      modelg = `${3 >> (Math.min(1, Math.abs(mbsplashT.size)))}`;
   }

    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
       let gestureI = 2.0;
    let untickI: Map<any, any> = new Map([[String.fromCharCode(113,95,50,95,114,101,115,99,97,108,101,0),false ], [String.fromCharCode(117,95,57,55,95,112,97,114,116,115,0),false ], [String.fromCharCode(117,101,117,101,95,100,95,49,51,0),true ]]);
    let librrc9 = String.fromCharCode(117,116,105,108,95,105,95,49,48,48,0);
    let confirmationD = 0.0;
    let streamingo = 4;
    let webviewz = String.fromCharCode(118,95,54,48,95,104,101,120,98,105,110,0);
    let libreactnativejniY = 5.0;
    let matchesX = false;
    let reviews = String.fromCharCode(116,95,56,51,95,103,108,111,98,97,108,105,110,102,111,0);
    let libpangleflipped4 = String.fromCharCode(106,95,55,52,95,105,112,118,0);
    let subbasketballplayerx = 3;
    let middlebrightnessN = 1;
   if (3 >= (streamingo * librrc9.length) || (3 * librrc9.length) >= 3) {
      streamingo /= Math.max(3, 2);
   }
   let matchS = 6536721 >= streamingo;
   do {
       let applicationz = 2.0;
       let profilel = String.fromCharCode(98,111,100,121,115,105,100,95,111,95,56,48,0);
      let connectionl = 7436101.0 <= applicationz;
      do {
         applicationz /= Math.max(1, parseFloat(`${2 * profilel.length}`));
         if (connectionl) {
            break;
         }
      } while (connectionl && ((2 >> (Math.min(1, profilel.length))) >= 3));
       let statisticsn = String.fromCharCode(109,95,51,56,95,102,97,99,101,115,0);
          let mbbanneru = String.fromCharCode(101,108,105,115,116,95,100,95,49,53,0);
         applicationz += parseFloat(`${2}`);
         mbbanneru = `${mbbanneru.length}`;
         profilel += `${profilel.length}`;
       let megaphonew: Array<any> = [210, 815, 487];
       let valuesG: Array<any> = [563, 96, 717];
       let manifestw: Map<any, any> = new Map([[String.fromCharCode(99,95,53,55,95,115,101,115,115,111,110,0),772], [String.fromCharCode(122,95,51,51,95,97,99,99,117,114,97,116,101,0),2]]);
       let config6: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,114,95,56,95,49,48,0),String.fromCharCode(111,95,57,49,95,97,110,97,108,121,122,101,114,0)], [String.fromCharCode(98,112,117,116,115,95,101,95,55,53,0),String.fromCharCode(99,95,52,53,95,100,109,105,120,0)]]);
      streamingo %= Math.max(2, 3);
      if (matchS) {
         break;
      }
   } while ((3 == (streamingo >> (Math.min(webviewz.length, 4)))) && matchS);

    if (isBodanRef.current) {

   if (reviews.startsWith(`${gestureI}`)) {
      gestureI += parseInt(`${libreactnativejniY}`);
   }
      reviews = `${(String.fromCharCode(80,0) == webviewz ? parseInt(`${confirmationD}`) : webviewz.length)}`;
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   for (let o = 0; o < 1; o++) {
      confirmationD -= 1;
   }
      matchesX = streamingo < 53 && matchesX;
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

      matchesX = 34.68 > confirmationD;
      webviewz = `${1 - libpangleflipped4.length}`;

      

   let rewardd = reviews == String.fromCharCode(98,110,109,101,57,115,0);
   do {
      reviews += `${parseInt(`${libreactnativejniY}`) / 2}`;
      if (rewardd) {
         break;
      }
   } while (rewardd && (3 <= (streamingo + 4) && 1 <= (4 + reviews.length)));
   for (let c = 0; c < 2; c++) {
      libreactnativejniY += parseFloat(`${1}`);
   }
      ww_runtime.watchAnytimePlaylistClicksAnalytics();
      
    } else {

   while (matchesX) {
      matchesX = webviewz == String.fromCharCode(120,0);
      break;
   }
      streamingo >>= Math.min(reviews.length, 3);
      dispatch(playVod(currentVod.mini_video_vod));

   let mbnativeadvancedh = matchesX ? !matchesX : matchesX;
   do {
       let libaneL = String.fromCharCode(98,95,50,52,95,100,105,114,97,99,100,115,112,0);
       let countryS = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,107,95,51,50,0);
       let slider8 = 1.0;
       let weather3 = 5;
      let greyR = slider8 <= 9227528.0;
      do {
          let middlebrightnesso: Map<any, any> = new Map([[String.fromCharCode(98,99,100,117,105,110,116,95,112,95,57,48,0),245], [String.fromCharCode(115,95,53,51,95,110,117,108,108,115,114,99,0),667], [String.fromCharCode(114,95,57,57,95,109,112,101,103,118,105,100,101,111,100,101,99,0),79]]);
          let reactnativejsK = String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,48,95,56,54,0);
         slider8 /= Math.max(1, countryS.length << (Math.min(2, Math.abs(weather3))));
         middlebrightnesso = new Map([[`${middlebrightnesso.size}`, (String.fromCharCode(102,0) == reactnativejsK ? reactnativejsK.length : middlebrightnesso.size)]]);
         if (greyR) {
            break;
         }
      } while (((2 << (Math.min(3, countryS.length))) == 2) && greyR);
      if (1 > (libaneL.length / 1) && (1 + libaneL.length) > 3) {
          let next5 = false;
         libaneL += "3";
         next5 = (!next5 ? next5 : next5);
      }
       let notificationfillemptyM: Array<any> = [361, 481];
       let register_fF: Array<any> = [229, 958];
         slider8 *= 2 * countryS.length;
         slider8 /= Math.max(4, parseInt(`${slider8}`) & notificationfillemptyM.length);
       let darkz = 4;
       let tinit_oQ = 0;
         libaneL += `${tinit_oQ / 2}`;
      while ((tinit_oQ / (Math.max(darkz, 8))) == 4 || (tinit_oQ / 4) == 5) {
         darkz <<= Math.min(Math.abs(3), 4);
         break;
      }
          let sheetJ: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,101,115,95,112,95,53,50,0),809], [String.fromCharCode(101,112,108,121,95,100,95,50,54,0),392]]);
         countryS += `${notificationfillemptyM.length | libaneL.length}`;
         sheetJ.set(`${sheetJ.size}`, sheetJ.size);
         slider8 -= 1 - tinit_oQ;
      for (let l = 0; l < 1; l++) {
         slider8 *= parseInt(`${slider8}`) | 1;
      }
         libaneL = `${parseInt(`${slider8}`) + 1}`;
      matchesX = 9.31 > slider8;
      if (mbnativeadvancedh) {
         break;
      }
   } while ((3 > (subbasketballplayerx % (Math.max(1, 3)))) && mbnativeadvancedh);
   if (1 >= (librrc9.length + 5) && 5 >= (untickI.size + librrc9.length)) {
       let yingq = 1.0;
       let combineo = false;
       let bridgeD: Array<any> = [String.fromCharCode(104,117,102,102,121,117,118,100,115,112,95,100,95,55,52,0), String.fromCharCode(115,117,115,112,101,110,100,95,103,95,54,50,0)];
       let time_5m = false;
       let middleF = 3;
      let arrowright4 = yingq >= 5819488.0;
      do {
          let modalT = String.fromCharCode(122,95,49,48,48,95,115,99,99,111,110,102,105,103,0);
          let shrinkV = String.fromCharCode(115,116,114,108,95,53,95,49,57,0);
         yingq -= (parseFloat(`${(time_5m ? 5 : 3)}`));
         modalT = `${modalT.length & shrinkV.length}`;
         shrinkV += `${modalT.length}`;
         if (arrowright4) {
            break;
         }
      } while ((5.22 <= yingq) && arrowright4);
      while ((bridgeD.length + 2) < 4 && bridgeD.length < 2) {
         combineo = bridgeD.length <= 25 && !time_5m;
         break;
      }
      for (let v = 0; v < 3; v++) {
         combineo = !combineo || 6.18 > yingq;
      }
         time_5m = combineo;
       let videojs0 = String.fromCharCode(108,95,49,55,95,98,114,111,97,100,99,97,115,116,0);
       let i_lockP = String.fromCharCode(100,95,56,51,95,99,104,101,99,107,105,110,103,0);
      for (let c = 0; c < 3; c++) {
         videojs0 = `${((time_5m ? 1 : 2) / (Math.max(parseInt(`${yingq}`), 4)))}`;
      }
      while (yingq <= 4.38) {
         yingq -= (parseFloat(`${(time_5m ? 2 : 5) & 3}`));
         break;
      }
          let mappingF = 0;
          let footballfieldV: Array<any> = [371, 140, 142];
         combineo = middleF < parseInt(`${yingq}`);
         mappingF %= Math.max(footballfieldV.length * 3, 4);
         footballfieldV = [mappingF % 2];
      let unfilld = middleF >= 6003106;
      do {
         middleF ^= ((time_5m ? 4 : 2) - (combineo ? 4 : 2));
         if (unfilld) {
            break;
         }
      } while (unfilld && ((2 >> (Math.min(2, videojs0.length))) <= 2));
         middleF /= Math.max(2, i_lockP.length + 1);
      while (1 > bridgeD.length) {
         middleF <<= Math.min(parseInt(`${Math.abs((bridgeD.length % (Math.max(9, (combineo ? 2 : 3)))))}`), 2);
         break;
      }
      while ((bridgeD.length ^ 4) == 2 || time_5m) {
          let optionsX: Map<any, any> = new Map([[String.fromCharCode(112,95,50,50,95,98,105,116,101,0),416], [String.fromCharCode(116,105,109,101,122,111,110,101,95,54,95,49,52,0),593], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,50,95,50,56,0),875]]);
          let views4 = String.fromCharCode(110,111,100,111,119,110,95,110,95,50,57,0);
          let cornerb = true;
         bridgeD = [views4.length];
         optionsX = new Map([[`${optionsX.size}`, 1 + optionsX.size]]);
         views4 += "2";
         break;
      }
          let telegramC = String.fromCharCode(108,95,52,48,95,97,99,107,0);
          let oranget: Map<any, any> = new Map([[String.fromCharCode(103,101,111,107,101,121,95,116,95,55,50,0),true ], [String.fromCharCode(115,116,114,102,117,110,99,95,117,95,54,51,0),true ]]);
         middleF >>= Math.min(Math.abs(oranget.size), 2);
         telegramC = `${telegramC.length}`;
         oranget = new Map([[telegramC, 2]]);
         videojs0 = "2";
          let backwardz = String.fromCharCode(105,110,116,108,101,95,113,95,57,51,0);
         time_5m = !time_5m;
         backwardz = `${backwardz.length & backwardz.length}`;
      untickI = new Map([[`${gestureI}`, parseInt(`${gestureI}`) | 2]]);
   }
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

   for (let v = 0; v < 2; v++) {
      subbasketballplayerx <<= Math.min(Math.abs(2 | librrc9.length), 4);
   }
       let lightM = String.fromCharCode(115,95,56,51,95,116,101,115,118,101,114,116,0);
      let thailandB = 5589721 <= lightM.length;
      do {
         lightM = `${(String.fromCharCode(119,0) == lightM ? lightM.length : lightM.length)}`;
         if (thailandB) {
            break;
         }
      } while (thailandB && (2 < lightM.length));
      for (let e = 0; e < 2; e++) {
         lightM = "3";
      }
         lightM = `${lightM.length}`;
      librrc9 += `${(2 & (matchesX ? 1 : 5))}`;

      

   let analyticq = String.fromCharCode(121,110,52,101,98,119,108,103,0) == librrc9;
   do {
       let injury0 = String.fromCharCode(100,95,49,54,95,97,99,116,105,111,110,0);
      while (injury0 == String.fromCharCode(69,0)) {
          let areay = String.fromCharCode(116,116,97,103,95,48,95,55,50,0);
          let schedule7 = String.fromCharCode(111,95,55,53,95,102,105,108,101,102,117,110,99,0);
          let streamingi = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,116,95,54,57,0);
          let valuesq = String.fromCharCode(109,115,110,119,99,95,99,95,55,50,0);
         injury0 = `${(injury0 == String.fromCharCode(48,0) ? injury0.length : valuesq.length)}`;
         areay = `${streamingi.length + areay.length}`;
         schedule7 += `${2 / (Math.max(3, areay.length))}`;
         streamingi += `${schedule7.length / (Math.max(1, areay.length))}`;
         valuesq += "2";
         break;
      }
       let libreactnativeblob7 = 4.0;
       let downloadingj = 5.0;
         libreactnativeblob7 += injury0.length & 2;
      librrc9 += `${subbasketballplayerx * 3}`;
      if (analyticq) {
         break;
      }
   } while ((librrc9.length < webviewz.length) && analyticq);
      untickI.set(`${gestureI}`, (String.fromCharCode(111,0) == webviewz ? webviewz.length : parseInt(`${gestureI}`)));
      ww_runtime.watchAnytimeVideoClicksAnalytics();
      
    }
  }, [currentVod]);

  const handleViewLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setImageContainerHeight(height);
  };

  useEffect(() => {
    if (isPause === false) {
      setIsBuffering(false);
    }
  }, [isPause]);

  useEffect(() => {

    return () => {
      
      const id = vod.mini_video_id
      addIdToCache(id)
    }
  }, [])

  const bottomContent = useCallback(() => {
       let injuryg = String.fromCharCode(108,95,54,52,95,115,117,98,98,108,111,99,107,115,0);
    let emojii = false;
    let loginN: Array<any> = [String.fromCharCode(108,101,97,115,116,95,117,95,55,53,0), String.fromCharCode(116,95,57,49,95,105,110,116,101,114,105,116,101,109,0)];
    let baiduI: Array<any> = [String.fromCharCode(115,99,97,108,97,114,115,95,122,95,56,57,0), String.fromCharCode(99,111,108,115,95,101,95,52,53,0)];
    let runtimeschedulerU: Map<any, any> = new Map([[String.fromCharCode(99,114,97,115,104,108,121,116,105,99,115,95,114,95,57,48,0),287], [String.fromCharCode(100,95,56,95,118,99,101,110,99,0),803]]);
    let notificationg = String.fromCharCode(121,95,55,49,95,115,116,97,99,107,0);
    let plashV: Array<any> = [408, 243];
    let privacys: Array<any> = [319, 881, 953];
    let eactV = false;
    let configurer: Map<any, any> = new Map([[String.fromCharCode(117,110,115,101,110,116,95,106,95,49,0),53], [String.fromCharCode(116,95,50,55,95,102,114,111,109,102,101,0),20]]);
    let checkboxn = 1.0;
    let readS = false;
      notificationg += `${baiduI.length}`;
   if (1 > (1 * loginN.length)) {
      loginN = [loginN.length % (Math.max(1, 3))];
   }
   for (let u = 0; u < 3; u++) {
       let libavformatB = false;
       let i_lockt = true;
       let renewj: Array<any> = [String.fromCharCode(109,95,56,55,95,112,114,111,109,111,116,105,110,103,0), String.fromCharCode(101,95,54,48,95,105,109,112,111,115,116,101,114,0)];
         libavformatB = (4 > ((i_lockt ? renewj.length : 4) & renewj.length));
         i_lockt = renewj.length < 3;
       let actionH = String.fromCharCode(108,97,121,111,117,116,95,114,95,53,48,0);
       let pointi = String.fromCharCode(117,95,49,51,95,117,110,97,108,105,103,110,101,100,0);
          let templateprocessor_: Array<any> = [String.fromCharCode(116,111,109,105,99,95,111,95,53,50,0), String.fromCharCode(114,101,99,111,109,109,101,110,100,95,50,95,50,49,0), String.fromCharCode(100,95,55,54,95,101,99,111,109,112,114,101,115,115,111,114,0)];
          let style5: Map<any, any> = new Map([[String.fromCharCode(120,95,49,53,95,115,97,109,105,0),String.fromCharCode(116,95,56,49,95,97,114,101,116,104,101,114,101,0)], [String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,114,95,54,0),String.fromCharCode(120,95,57,95,119,114,105,116,101,0)]]);
          let rncorej = 2.0;
         pointi += `${templateprocessor_.length >> (Math.min(Math.abs(2), 2))}`;
         templateprocessor_.push(parseInt(`${rncorej}`));
         style5.set(`${rncorej}`, parseInt(`${rncorej}`) * style5.size);
      let defaultplayerimgc = 6906699 >= renewj.length;
      do {
          let rulesI: Array<any> = [String.fromCharCode(115,95,49,53,95,103,108,111,98,97,108,105,110,102,111,0), String.fromCharCode(97,116,116,114,105,98,115,95,119,95,56,49,0), String.fromCharCode(109,117,116,101,120,95,56,95,49,51,0)];
          let volume1 = 4;
          let profilec = String.fromCharCode(103,95,49,56,95,99,111,100,101,99,115,0);
          let bangx: Map<any, any> = new Map([[String.fromCharCode(99,95,55,57,95,117,116,118,105,100,101,111,0),false ], [String.fromCharCode(113,95,49,54,95,97,116,111,102,0),false ]]);
          let componentregistry9: Array<any> = [509, 530];
         renewj.push(bangx.size);
         rulesI = [componentregistry9.length - profilec.length];
         volume1 <<= Math.min(Math.abs(volume1 + profilec.length), 3);
         bangx = new Map([[`${componentregistry9.length}`, profilec.length]]);
         if (defaultplayerimgc) {
            break;
         }
      } while ((!i_lockt) && defaultplayerimgc);
      while (renewj.length == 5) {
         libavformatB = pointi.length > renewj.length;
         break;
      }
         pointi += `${((i_lockt ? 3 : 2) + 3)}`;
         pointi += `${renewj.length}`;
          let shareP = 2.0;
          let greyo = String.fromCharCode(109,95,55,48,95,103,101,116,112,97,100,100,114,115,0);
         pointi += `${(3 << (Math.min(4, Math.abs((libavformatB ? 2 : 3)))))}`;
         shareP -= 1 % (Math.max(2, parseInt(`${shareP}`)));
         greyo += `${greyo.length << (Math.min(Math.abs(3), 3))}`;
      privacys = [1];
   }
   let dragb = 6169618 <= privacys.length;
   do {
       let bggradientn = 4.0;
       let humidityL = 1;
       let hongkongR = 0;
          let countryC = false;
          let analyticc: Map<any, any> = new Map([[String.fromCharCode(100,95,56,52,95,115,117,98,116,114,97,99,116,0),353], [String.fromCharCode(111,112,101,110,95,122,95,53,54,0),3], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,118,95,50,51,0),879]]);
          let firebaseb = 4.0;
         humidityL += humidityL | 2;
         countryC = !countryC;
         analyticc = new Map([[`${analyticc.size}`, analyticc.size]]);
         firebaseb += parseInt(`${firebaseb}`) % 3;
      if (4 < humidityL) {
         bggradientn *= parseInt(`${bggradientn}`);
      }
      while (2 > (hongkongR - 5) && 5 > (hongkongR - humidityL)) {
         humidityL /= Math.max(2, 3);
         break;
      }
         hongkongR *= parseInt(`${bggradientn}`) + 1;
         hongkongR <<= Math.min(Math.abs(2), 1);
      if (humidityL >= hongkongR) {
         hongkongR |= parseInt(`${bggradientn}`) << (Math.min(2, Math.abs(3)));
      }
         bggradientn -= 2;
      while (3 <= hongkongR) {
         humidityL *= 3 >> (Math.min(2, Math.abs(hongkongR)));
         break;
      }
         bggradientn += 1;
      privacys.push(notificationg.length);
      if (dragb) {
         break;
      }
   } while (dragb && (!eactV));
   while ((plashV.length + 2) >= 2) {
       let fillx = String.fromCharCode(103,95,52,51,95,100,101,108,101,116,105,110,103,0);
       let detailK = String.fromCharCode(103,95,51,49,95,105,112,100,111,112,100,0);
         fillx += `${(String.fromCharCode(104,0) == fillx ? fillx.length : detailK.length)}`;
         detailK += `${(String.fromCharCode(56,0) == fillx ? detailK.length : fillx.length)}`;
         fillx = `${fillx.length >> (Math.min(detailK.length, 4))}`;
         detailK = `${fillx.length ^ 2}`;
       let ajaxZ: Array<any> = [655, 528, 796];
       let huaweii: Map<any, any> = new Map([[String.fromCharCode(114,95,55,54,95,99,111,110,100,105,116,105,111,110,115,0),true ], [String.fromCharCode(100,95,55,57,95,109,101,109,99,112,121,0),true ], [String.fromCharCode(104,95,53,57,95,117,110,97,114,99,104,105,118,101,100,0),true ]]);
       let reminderw: Map<any, any> = new Map([[String.fromCharCode(99,95,51,49,95,115,104,97,100,101,114,0),String.fromCharCode(110,95,51,54,95,100,101,101,112,0)], [String.fromCharCode(119,95,55,52,95,115,104,97,114,112,110,101,115,115,0),String.fromCharCode(98,95,56,55,95,108,105,102,116,0)], [String.fromCharCode(115,97,109,112,95,116,95,53,56,0),String.fromCharCode(120,95,52,49,95,111,112,115,0)]]);
      injuryg = `${plashV.length}`;
      break;
   }
   for (let d = 0; d < 3; d++) {
      runtimeschedulerU = new Map([[notificationg, 3]]);
   }
      runtimeschedulerU = new Map([[`${runtimeschedulerU.size}`, runtimeschedulerU.size]]);
      eactV = loginN.length <= 96;
       let gdtadvL = String.fromCharCode(100,97,116,97,114,95,53,95,51,51,0);
          let accepted6 = String.fromCharCode(110,116,102,115,95,109,95,50,49,0);
         gdtadvL = `${(String.fromCharCode(53,0) == accepted6 ? gdtadvL.length : accepted6.length)}`;
         gdtadvL += `${(String.fromCharCode(114,0) == gdtadvL ? gdtadvL.length : gdtadvL.length)}`;
          let flipperM = false;
         gdtadvL = `${gdtadvL.length}`;
      privacys.push(1 + baiduI.length);
   for (let f = 0; f < 2; f++) {
       let buildB: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,95,50,95,52,53,0),false ], [String.fromCharCode(113,95,51,54,95,115,98,99,100,101,99,0),false ]]);
       let inviteQ = String.fromCharCode(106,95,51,48,95,115,101,116,100,97,114,0);
       let china8 = false;
       let listZ: Array<any> = [452, 899, 846];
       let becomew = 2;
         becomew -= listZ.length ^ 2;
         becomew ^= becomew;
         listZ = [listZ.length];
      let utilsQ = 6460506 >= listZ.length;
      do {
         listZ.push(2 ^ buildB.size);
         if (utilsQ) {
            break;
         }
      } while (utilsQ && (becomew >= listZ.length));
      while (4 == inviteQ.length || china8) {
         china8 = listZ.includes(becomew);
         break;
      }
      if (3 < listZ.length) {
         listZ.push(inviteQ.length);
      }
      let subtext_ = becomew >= 6308865;
      do {
          let windS = String.fromCharCode(122,95,52,56,0);
          let button5 = 2.0;
         becomew %= Math.max(1, 3);
         windS = `${parseInt(`${button5}`)}`;
         button5 *= parseInt(`${button5}`);
         if (subtext_) {
            break;
         }
      } while ((4 >= becomew) && subtext_);
         buildB = new Map([[`${listZ.length}`, 1 ^ becomew]]);
      while (buildB.get(`${listZ.length}`) == null) {
          let filledp = String.fromCharCode(122,95,57,51,95,111,110,101,111,102,0);
          let libavformatd = 0;
          let reactnativeultimatelistviewP: Map<any, any> = new Map([[String.fromCharCode(110,95,52,51,95,111,110,101,119,97,121,0),388], [String.fromCharCode(99,95,54,55,95,99,97,108,105,110,103,0),284], [String.fromCharCode(108,115,102,112,111,108,121,95,51,95,50,0),79]]);
          let bufferE = 0.0;
         listZ.push((1 ^ (china8 ? 1 : 3)));
         filledp += `${(filledp == String.fromCharCode(104,0) ? reactnativeultimatelistviewP.size : filledp.length)}`;
         libavformatd *= parseInt(`${bufferE}`);
         reactnativeultimatelistviewP = new Map([[`${bufferE}`, libavformatd * 3]]);
         break;
      }
       let rnewssharef = String.fromCharCode(101,116,104,114,101,97,100,95,54,95,52,0);
         listZ.push(becomew | rnewssharef.length);
          let minimize9 = String.fromCharCode(119,97,110,116,115,95,50,95,52,52,0);
          let countryp = true;
          let roomK = 0;
         listZ.push(listZ.length / (Math.max(1, 2)));
         minimize9 += `${minimize9.length * 1}`;
         countryp = minimize9 == String.fromCharCode(85,0);
         roomK += minimize9.length;
       let moviesa: Map<any, any> = new Map([[String.fromCharCode(119,95,52,50,95,120,105,112,104,0),String.fromCharCode(112,97,116,104,110,97,109,101,95,113,95,50,53,0)], [String.fromCharCode(102,95,49,56,95,115,112,97,99,101,100,0),String.fromCharCode(122,95,51,52,95,107,105,99,107,101,114,0)]]);
       let taiwano: Map<any, any> = new Map([[String.fromCharCode(106,95,56,56,95,115,118,101,99,116,111,114,0),false ], [String.fromCharCode(110,95,53,56,95,114,116,112,119,0),false ]]);
         listZ.push(buildB.size);
         buildB = new Map([[`${buildB.size}`, (buildB.size * (china8 ? 1 : 1))]]);
      plashV.push(privacys.length | inviteQ.length);
   }
   let libreactnativeblobR = notificationg.length >= 7795687;
   do {
      notificationg = `${loginN.length | 2}`;
      if (libreactnativeblobR) {
         break;
      }
   } while ((notificationg.length == 2) && libreactnativeblobR);
       let bggradiento = 3.0;
       let libfbjniH = String.fromCharCode(100,105,115,109,105,115,115,101,100,95,105,95,56,51,0);
      let dependenciesg = 7762001.0 <= bggradiento;
      do {
         bggradiento += parseFloat(`${2}`);
         if (dependenciesg) {
            break;
         }
      } while (((bggradiento * parseFloat(`${libfbjniH.length}`)) >= 1.67 || 1.67 >= (parseFloat(`${libfbjniH.length}`) * bggradiento)) && dependenciesg);
      let directs = bggradiento >= 5558693.0;
      do {
         bggradiento *= parseFloat(`${libfbjniH.length / (Math.max(1, 8))}`);
         if (directs) {
            break;
         }
      } while ((5 < libfbjniH.length) && directs);
         libfbjniH = `${libfbjniH.length}`;
       let suggestionP = 1;
       let subsi = 0;
      while (4 < (libfbjniH.length * parseInt(`${bggradiento}`)) && (parseInt(`${bggradiento}`) * 4) < 5) {
          let gmailc = 3.0;
          let mail1 = String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,101,95,57,55,0);
          let crossN: Array<any> = [926, 756];
          let fast3 = 4.0;
          let arrowO = String.fromCharCode(121,97,108,101,95,52,95,55,48,0);
         libfbjniH += `${subsi & 1}`;
         gmailc += 3 << (Math.min(3, arrowO.length));
         mail1 += `${(String.fromCharCode(117,0) == arrowO ? parseInt(`${fast3}`) : arrowO.length)}`;
         crossN = [2];
         fast3 *= parseFloat(`${3 / (Math.max(1, parseInt(`${gmailc}`)))}`);
         break;
      }
      if (4 < (libfbjniH.length * suggestionP) && 3 < (4 * suggestionP)) {
          let rewardA = 1.0;
          let thailanda = 2.0;
          let paginationk = String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,109,95,55,55,0);
          let zoomM = String.fromCharCode(109,95,52,57,95,122,97,108,108,111,99,0);
         libfbjniH = `${paginationk.length ^ zoomM.length}`;
         rewardA *= 3;
         thailanda /= Math.max(parseInt(`${thailanda}`) - 3, 3);
         paginationk = `${parseInt(`${thailanda}`)}`;
         zoomM += `${parseInt(`${rewardA}`) << (Math.min(5, Math.abs(2)))}`;
      }
      runtimeschedulerU = new Map([[`${privacys.length}`, privacys.length - 2]]);
   let servicew = 8523179 <= plashV.length;
   do {
      plashV = [plashV.length];
      if (servicew) {
         break;
      }
   } while (servicew && ((plashV.length | runtimeschedulerU.size) < 4 && 4 < (plashV.length | runtimeschedulerU.size)));
   for (let j = 0; j < 1; j++) {
      runtimeschedulerU = new Map([[`${privacys.length}`, 3 ^ privacys.length]]);
   }
       let crossQ = String.fromCharCode(111,112,101,110,115,115,108,99,111,110,102,95,54,95,52,57,0);
       let episodesw = 3.0;
       let push4 = String.fromCharCode(122,95,56,50,95,119,105,101,110,101,114,0);
         crossQ += "1";
         crossQ += `${push4.length}`;
       let thumbnail4 = String.fromCharCode(114,101,99,111,118,101,114,95,50,95,57,50,0);
      for (let c = 0; c < 1; c++) {
         push4 = `${crossQ.length % 1}`;
      }
      for (let g = 0; g < 2; g++) {
         crossQ = `${1 >> (Math.min(5, push4.length))}`;
      }
         push4 = `${push4.length}`;
         episodesw += parseInt(`${episodesw}`) >> (Math.min(crossQ.length, 1));
         episodesw -= crossQ.length >> (Math.min(4, Math.abs(parseInt(`${episodesw}`))));
      for (let i = 0; i < 1; i++) {
         push4 += `${parseInt(`${episodesw}`) & 3}`;
      }
      runtimeschedulerU = new Map([[`${baiduI.length}`, 2 & baiduI.length]]);
      privacys.push(1 | baiduI.length);
       let downloadingu = 0.0;
       let weiboh = String.fromCharCode(100,111,115,100,97,116,101,95,107,95,51,50,0);
       let libcxxcomponentsm: Array<any> = [String.fromCharCode(109,95,50,95,100,121,110,108,111,99,107,0), String.fromCharCode(120,95,56,95,112,114,111,99,101,115,115,105,110,103,0), String.fromCharCode(97,95,50,56,95,115,117,112,101,114,120,115,97,105,0)];
      if (libcxxcomponentsm.length < weiboh.length) {
         weiboh = `${3 | libcxxcomponentsm.length}`;
      }
      if ((downloadingu / 2.62) > 5.15 && (libcxxcomponentsm.length / (Math.max(3, parseInt(`${downloadingu}`)))) > 1) {
          let resendo = 3;
          let favoriteA = String.fromCharCode(122,95,56,95,109,97,103,105,99,121,117,118,0);
          let basketballhometeamf = String.fromCharCode(98,95,51,55,95,104,97,112,116,105,99,0);
          let bingP: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,104,95,57,56,0),483], [String.fromCharCode(118,95,54,51,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0),239]]);
          let ajaxI: Map<any, any> = new Map([[String.fromCharCode(99,108,97,122,122,95,56,95,54,48,0),false ], [String.fromCharCode(109,111,118,101,95,106,95,49,56,0),false ]]);
         downloadingu *= 2;
         resendo <<= Math.min(1, Math.abs(1 + bingP.size));
         favoriteA = `${1 + bingP.size}`;
         basketballhometeamf += `${basketballhometeamf.length}`;
         ajaxI = new Map([[basketballhometeamf, favoriteA.length]]);
      }
         weiboh = `${parseInt(`${downloadingu}`) ^ 1}`;
          let philippines7 = 2.0;
         weiboh += `${weiboh.length}`;
         philippines7 *= parseInt(`${philippines7}`) << (Math.min(3, Math.abs(2)));
      let shrinkt = downloadingu <= 6512655.0;
      do {
         downloadingu -= 3;
         if (shrinkt) {
            break;
         }
      } while ((libcxxcomponentsm.includes(downloadingu)) && shrinkt);
       let sourcet = String.fromCharCode(118,95,49,48,48,95,108,111,97,100,115,0);
       let actionC: Map<any, any> = new Map([[String.fromCharCode(104,121,115,99,97,108,101,95,54,95,55,49,0),164], [String.fromCharCode(99,111,110,112,111,110,101,110,116,115,95,100,95,50,53,0),725]]);
      if (!weiboh.endsWith(`${downloadingu}`)) {
         weiboh += `${sourcet.length << (Math.min(3, Math.abs(parseInt(`${downloadingu}`))))}`;
      }
      let closeX = sourcet == String.fromCharCode(105,107,53,51,0);
      do {
         sourcet = `${actionC.size}`;
         if (closeX) {
            break;
         }
      } while (closeX && (weiboh.length < 3 || sourcet.length < 3));
      injuryg = `${(2 ^ (emojii ? 5 : 2))}`;
       let senda = String.fromCharCode(115,95,50,54,95,112,117,98,108,105,99,0);
       let libswscaleO = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,114,95,55,52,0);
       let defaultfootballbg1 = String.fromCharCode(122,95,52,48,95,109,112,106,112,101,103,0);
          let shootyesgoalY = String.fromCharCode(105,110,102,101,114,95,52,95,56,56,0);
          let greytickn = 3.0;
         senda += `${libswscaleO.length >> (Math.min(senda.length, 1))}`;
         shootyesgoalY = "1";
         greytickn *= parseFloat(`${shootyesgoalY.length << (Math.min(Math.abs(2), 1))}`);
      let modalf = libswscaleO == String.fromCharCode(49,116,113,104,122,0);
      do {
         libswscaleO += `${defaultfootballbg1.length - senda.length}`;
         if (modalf) {
            break;
         }
      } while ((defaultfootballbg1 != libswscaleO) && modalf);
         libswscaleO = `${(String.fromCharCode(87,0) == senda ? libswscaleO.length : senda.length)}`;
         senda += `${defaultfootballbg1.length}`;
      while (senda.length >= 2) {
         senda += `${defaultfootballbg1.length + 2}`;
         break;
      }
          let goalq = 1.0;
         defaultfootballbg1 = `${libswscaleO.length >> (Math.min(Math.abs(1), 5))}`;
         goalq -= parseFloat(`${parseInt(`${goalq}`) | 1}`);
       let arrowrightj = String.fromCharCode(97,112,110,103,95,113,95,50,55,0);
       let dataU = 5;
       let spinnerp = false;
       let predictionactivef = false;
      runtimeschedulerU.set(notificationg, notificationg.length << (Math.min(Math.abs(3), 5)));
   while (4 <= (injuryg.length / 2) && (privacys.length / (Math.max(injuryg.length, 9))) <= 2) {
      injuryg = `${((eactV ? 3 : 2) / (Math.max(2, baiduI.length)))}`;
      break;
   }
      emojii = injuryg.length >= 30 || eactV;
   if ((configurer.size / (Math.max(8, runtimeschedulerU.size))) <= 4) {
      runtimeschedulerU = new Map([[`${plashV.length}`, plashV.length]]);
   }

    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <View style={{ paddingHorizontal: 20 }}>
          {currentVod != undefined &&
            currentVod.mini_video_original_img_url != null &&
            currentVod.mini_video_original_img_url != '' && (
              <View style={{ flexWrap: 'wrap' }}>
                {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                {!adultMode &&
                  <RedirectButton
                    imageUrl={currentVod?.mini_video_original_img_url}
                    isBodan={isBodanRef.current}
                    vodTitle={vodName}
                    redirectVod={redirectVod}
                  />}

              </View>
            )}
          <DescriptionBar vodDescription={currentVod.mini_video_title} />
        </View>

        {/* {currentVod.is_collection?.toLowerCase() == 'y' && (
          <HejiButton
            handleOnPress={openBottomSheet}
            collectionTitle={currentVod.mini_video_collection_title}
          />
        )} */}
      </View>
    );
  }, [vodName, currentVod, adultMode]);

  useEffect(() => {
    const fn = async () => {
       let runtimeu = String.fromCharCode(108,95,49,53,95,112,114,101,115,115,101,115,0);
    let gifgoal_ = 5.0;
    let default_cY: Array<any> = [315, 737];
    let gifgoalbgl = 4;
    let latn9 = 2;
    let formb = 2.0;
    let textlayoutmanager_ = 5.0;
    let fillV = String.fromCharCode(112,95,53,49,95,117,112,115,101,114,116,0);
    let reducer7 = 2.0;
    let whistle5: Array<any> = [209, 676, 41];
    let dycreatorL: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,108,101,110,95,116,95,54,53,0),849], [String.fromCharCode(97,95,53,50,95,117,110,105,110,115,116,97,108,108,0),231], [String.fromCharCode(114,95,52,50,95,114,101,99,111,110,110,101,99,116,0),20]]);
    let sidef = String.fromCharCode(120,95,53,57,95,100,117,114,103,101,114,0);
    let signinupk = false;
    let selectI = false;
    let typesq: Map<any, any> = new Map([[String.fromCharCode(102,95,55,48,95,118,100,97,116,97,0),false ], [String.fromCharCode(98,95,52,55,95,108,105,102,101,0),true ]]);
       let reactnativeratingss = 5.0;
       let libreactperfloggerjnig = 1.0;
      let reactnativeratingsd = reactnativeratingss >= 7266187.0;
      do {
          let proxyC: Array<any> = [376, 642];
          let delegate_e6 = 1;
          let largeE = false;
          let yellowredcardh = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,107,95,52,48,0);
         reactnativeratingss *= parseFloat(`${proxyC.length}`);
         proxyC = [delegate_e6 << (Math.min(5, Math.abs(3)))];
         delegate_e6 += delegate_e6 - yellowredcardh.length;
         largeE = !largeE;
         yellowredcardh += `${1 % (Math.max(4, delegate_e6))}`;
         if (reactnativeratingsd) {
            break;
         }
      } while ((4.36 < (reactnativeratingss / 5.47) && (reactnativeratingss - libreactperfloggerjnig) < 5.47) && reactnativeratingsd);
      for (let p = 0; p < 2; p++) {
         libreactperfloggerjnig -= parseFloat(`${parseInt(`${reactnativeratingss}`) - 2}`);
      }
         reactnativeratingss += parseFloat(`${parseInt(`${libreactperfloggerjnig}`) | 3}`);
          let gpayX = false;
         libreactperfloggerjnig *= parseFloat(`${1 % (Math.max(parseInt(`${libreactperfloggerjnig}`), 1))}`);
         gpayX = !gpayX;
      for (let b = 0; b < 3; b++) {
         reactnativeratingss *= parseFloat(`${parseInt(`${libreactperfloggerjnig}`) % (Math.max(parseInt(`${reactnativeratingss}`), 9))}`);
      }
         reactnativeratingss += parseFloat(`${3}`);
      gifgoal_ -= 1 & parseInt(`${textlayoutmanager_}`);
      runtimeu += `${3 - fillV.length}`;

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   if (gifgoal_ <= textlayoutmanager_) {
       let termsH = String.fromCharCode(109,97,120,95,54,95,57,54,0);
       let configure_ = String.fromCharCode(109,97,116,116,101,95,48,95,52,51,0);
       let confirmationW = false;
       let j_managerh = String.fromCharCode(104,95,52,48,95,116,104,101,114,101,0);
       let langkeyD = 0;
          let splashM: Array<any> = [935, 432];
         configure_ += "3";
         splashM = [2];
         confirmationW = langkeyD == configure_.length;
       let dependenciesf = String.fromCharCode(114,115,116,110,95,114,95,57,53,0);
       let notificationfillemptyr = String.fromCharCode(114,116,99,119,101,98,95,115,95,50,57,0);
         dependenciesf += `${configure_.length >> (Math.min(Math.abs(3), 4))}`;
         termsH += `${j_managerh.length}`;
      let assisty = 7696458 <= termsH.length;
      do {
         termsH += `${langkeyD}`;
         if (assisty) {
            break;
         }
      } while (assisty && (configure_ == termsH));
      for (let e = 0; e < 2; e++) {
         confirmationW = j_managerh.length > 66 && confirmationW;
      }
      while (2 > termsH.length && j_managerh == String.fromCharCode(101,0)) {
          let sortm = 3;
          let reactnavigationt = 1.0;
          let eyeopena = 0.0;
          let condensed5 = 4.0;
          let ajaxe = 0.0;
         termsH += `${parseInt(`${reactnavigationt}`) / (Math.max(dependenciesf.length, 8))}`;
         sortm %= Math.max(parseInt(`${condensed5}`), 2);
         reactnavigationt /= Math.max(parseInt(`${eyeopena}`), 2);
         ajaxe -= parseFloat(`${parseInt(`${eyeopena}`)}`);
         break;
      }
      if (termsH.endsWith(`${notificationfillemptyr.length}`)) {
         notificationfillemptyr += `${langkeyD >> (Math.min(Math.abs(3), 5))}`;
      }
       let stepD: Map<any, any> = new Map([[String.fromCharCode(98,101,102,111,114,101,95,107,95,55,56,0),505], [String.fromCharCode(116,114,97,99,107,101,114,95,54,95,54,55,0),566], [String.fromCharCode(101,95,55,56,95,112,114,101,115,101,110,116,97,116,105,111,110,0),847]]);
      while (j_managerh.startsWith(`${confirmationW}`)) {
         confirmationW = langkeyD >= 7 && notificationfillemptyr == String.fromCharCode(86,0);
         break;
      }
      for (let z = 0; z < 3; z++) {
         notificationfillemptyr += "1";
      }
      while ((stepD.size | notificationfillemptyr.length) >= 2 && (notificationfillemptyr.length | 2) >= 4) {
         notificationfillemptyr = `${langkeyD}`;
         break;
      }
          let shareP = String.fromCharCode(107,98,105,116,95,54,95,54,51,0);
          let submitu: Map<any, any> = new Map([[String.fromCharCode(104,95,56,51,95,117,116,120,111,115,0),271], [String.fromCharCode(116,101,109,112,95,122,95,57,48,0),56]]);
          let tooltipsm = 2.0;
         langkeyD %= Math.max(2, 3 * j_managerh.length);
         shareP += `${submitu.size + 1}`;
         submitu.set(shareP, shareP.length | 3);
         tooltipsm -= shareP.length;
          let projectU = String.fromCharCode(116,101,120,116,97,116,116,114,95,107,95,55,50,0);
          let bridged = 3;
         notificationfillemptyr = `${3 % (Math.max(4, termsH.length))}`;
         projectU = `${projectU.length}`;
         bridged += 3;
      gifgoal_ += parseInt(`${textlayoutmanager_}`) - dycreatorL.size;
   }
      latn9 <<= Math.min(3, Math.abs(2 + dycreatorL.size));
        

       let crossk = 4;
         crossk += crossk - 3;
      while (2 < (crossk % (Math.max(1, 8))) && 1 < (crossk % (Math.max(crossk, 4)))) {
         crossk += crossk / (Math.max(10, crossk));
         break;
      }
      let iconwatchnowW = crossk >= 8694332;
      do {
         crossk -= 1 & crossk;
         if (iconwatchnowW) {
            break;
         }
      } while ((2 < (crossk * crossk) && (crossk * crossk) < 2) && iconwatchnowW);
      sidef += `${parseInt(`${formb}`)}`;
      whistle5.push(1);
        

       let leagueE = true;
       let networkM = String.fromCharCode(103,101,110,100,101,114,95,53,95,55,55,0);
       let push_ = String.fromCharCode(105,95,53,55,95,99,116,97,98,108,101,115,0);
         leagueE = push_.length <= 94;
      if (2 >= push_.length) {
         push_ = `${(1 >> (Math.min(5, Math.abs((leagueE ? 2 : 1)))))}`;
      }
       let vipsport7 = String.fromCharCode(110,95,50,49,95,102,97,108,108,98,97,99,107,0);
      while (!leagueE && 5 > networkM.length) {
          let reactnavigationtX = String.fromCharCode(99,95,53,50,95,112,97,114,97,109,101,116,101,114,0);
          let static_jgS = String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,95,110,95,52,57,0);
          let predictionactiveZ: Map<any, any> = new Map([[String.fromCharCode(117,95,52,53,95,121,117,118,114,103,98,97,0),true ], [String.fromCharCode(115,116,105,99,107,121,95,108,95,54,48,0),true ], [String.fromCharCode(119,101,98,114,116,99,95,116,95,52,50,0),true ]]);
          let mbjscommont = String.fromCharCode(110,95,52,53,95,118,98,108,101,0);
          let playercommonJ = String.fromCharCode(101,95,53,48,95,115,108,105,100,101,114,0);
         leagueE = networkM == reactnavigationtX;
         reactnavigationtX += `${predictionactiveZ.size | mbjscommont.length}`;
         static_jgS += `${static_jgS.length}`;
         predictionactiveZ.set(mbjscommont, 1);
         playercommonJ = "2";
         break;
      }
       let catagory3 = 2;
      while (push_.includes(`${catagory3}`)) {
         catagory3 &= networkM.length % 2;
         break;
      }
          let inactivev: Array<any> = [570, 745, 728];
          let aboutZ = true;
          let fcdaebecbcbafcdfceaaeccfeacdbS = String.fromCharCode(98,95,49,52,95,108,97,112,112,101,100,0);
         networkM += `${(vipsport7 == String.fromCharCode(78,0) ? catagory3 : vipsport7.length)}`;
         inactivev = [((aboutZ ? 3 : 2) / (Math.max(fcdaebecbcbafcdfceaaeccfeacdbS.length, 10)))];
         aboutZ = (51 > (fcdaebecbcbafcdfceaaeccfeacdbS.length & (!aboutZ ? 51 : fcdaebecbcbafcdfceaaeccfeacdbS.length)));
         leagueE = catagory3 <= vipsport7.length;
      for (let u = 0; u < 1; u++) {
         networkM += `${((leagueE ? 2 : 4) / 1)}`;
      }
      dycreatorL = new Map([[`${default_cY.length}`, push_.length & 1]]);
      gifgoalbgl |= 3 / (Math.max(3, parseInt(`${gifgoal_}`)));
        

       let yinit_oV = 4.0;
       let modulesV: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,115,99,114,111,108,108,95,98,95,54,52,0),334], [String.fromCharCode(97,116,111,109,105,99,115,95,55,95,53,57,0),144]]);
          let teamdetailsbgd = String.fromCharCode(118,95,53,50,95,110,116,102,115,0);
         modulesV.set(teamdetailsbgd, (teamdetailsbgd == String.fromCharCode(104,0) ? parseInt(`${yinit_oV}`) : teamdetailsbgd.length));
      while (4.54 <= (yinit_oV + 4.20)) {
          let malaysia6 = String.fromCharCode(109,95,56,50,95,97,99,114,111,110,121,109,0);
          let animationA = 3;
          let imageso = 3;
          let upgrader = String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,116,95,55,0);
         modulesV.set(`${imageso}`, 2 | parseInt(`${yinit_oV}`));
         malaysia6 += `${upgrader.length * 1}`;
         animationA >>= Math.min(4, Math.abs(2 % (Math.max(3, malaysia6.length))));
         imageso |= upgrader.length;
         break;
      }
      default_cY = [3];
   for (let g = 0; g < 3; g++) {
       let sportsy = String.fromCharCode(118,97,100,107,104,122,95,57,95,54,57,0);
       let const_gvD = 0.0;
       let liveendmodallogoc = true;
       let watchnowbgn = 1;
          let rewindC = String.fromCharCode(122,95,49,55,95,112,97,114,101,110,116,104,101,115,101,115,0);
          let empty9: Array<any> = [String.fromCharCode(122,95,54,51,95,112,111,111,108,114,101,102,0), String.fromCharCode(114,101,113,115,116,97,116,101,95,50,95,56,53,0), String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,97,95,51,55,0)];
         watchnowbgn += watchnowbgn;
         rewindC += `${empty9.length * 2}`;
         empty9 = [rewindC.length];
      for (let p = 0; p < 3; p++) {
         liveendmodallogoc = String.fromCharCode(106,0) == sportsy || 82 <= watchnowbgn;
      }
         watchnowbgn *= 3;
         sportsy += `${watchnowbgn * sportsy.length}`;
         liveendmodallogoc = 81 <= watchnowbgn || !liveendmodallogoc;
          let configI = String.fromCharCode(109,111,111,102,95,104,95,50,52,0);
         const_gvD /= Math.max(parseFloat(`${sportsy.length}`), 2);
         configI += `${configI.length >> (Math.min(Math.abs(1), 4))}`;
      let h_hashq = 6962665 <= watchnowbgn;
      do {
         watchnowbgn |= sportsy.length / 2;
         if (h_hashq) {
            break;
         }
      } while ((liveendmodallogoc) && h_hashq);
         const_gvD += parseFloat(`${3}`);
       let closeq: Array<any> = [729, 119, 589];
       let applicationn: Array<any> = [453, 428, 584];
      for (let f = 0; f < 2; f++) {
          let temperatureo = 0;
         const_gvD -= parseFloat(`${parseInt(`${const_gvD}`) * 1}`);
         temperatureo /= Math.max(3, temperatureo - 1);
      }
         liveendmodallogoc = sportsy.includes(`${const_gvD}`);
      if ((const_gvD / (Math.max(1.38, 4))) > 1.10 || 1.38 > (parseFloat(`${watchnowbgn}`) / (Math.max(const_gvD, 4)))) {
         const_gvD /= Math.max((parseFloat(`${closeq.length + (liveendmodallogoc ? 3 : 2)}`)), 4);
      }
      sidef = `${fillV.length << (Math.min(Math.abs(3), 4))}`;
   }

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

   let logoutm = 7116997.0 >= formb;
   do {
      formb *= parseFloat(`${runtimeu.length}`);
      if (logoutm) {
         break;
      }
   } while (logoutm && (!runtimeu.endsWith(`${formb}`)));
   let iconrefresh9 = dycreatorL.size >= 6205886;
   do {
      dycreatorL = new Map([[`${reducer7}`, 2]]);
      if (iconrefresh9) {
         break;
      }
   } while ((parseFloat(`${dycreatorL.size}`) == formb) && iconrefresh9);

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   while (4 >= (5 ^ dycreatorL.size)) {
      formb += parseFloat(`${dycreatorL.size}`);
      break;
   }
      dycreatorL.set(`${gifgoal_}`, gifgoalbgl);


        if (fileExist) {

      sidef += `${whistle5.length}`;
   for (let t = 0; t < 2; t++) {
      sidef = "2";
   }
          const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

   if ((2 >> (Math.min(1, Math.abs(latn9)))) == 4 || (2 / (Math.max(10, latn9))) == 2) {
      latn9 >>= Math.min(3, Math.abs(1 << (Math.min(4, runtimeu.length))));
   }
   if ((latn9 >> (Math.min(Math.abs(2), 1))) == 4) {
       let sansr = String.fromCharCode(101,108,108,105,111,116,116,95,113,95,51,52,0);
      for (let f = 0; f < 1; f++) {
         sansr += `${sansr.length}`;
      }
      while (sansr == String.fromCharCode(115,0)) {
          let defaultpredictionprofileD: Array<any> = [28, 597, 939];
          let userW = String.fromCharCode(114,95,57,50,95,97,112,115,0);
          let crossW = 0;
          let huaweie = 2;
         sansr += `${crossW}`;
         defaultpredictionprofileD = [defaultpredictionprofileD.length];
         userW = `${huaweie}`;
         crossW -= huaweie;
         break;
      }
          let bridgeB: Map<any, any> = new Map([[String.fromCharCode(116,95,51,56,95,115,107,101,116,99,104,0),3], [String.fromCharCode(106,95,54,48,95,121,97,114,110,0),588]]);
          let reducer1 = String.fromCharCode(102,108,116,117,105,110,116,95,53,95,49,51,0);
         sansr += `${bridgeB.size >> (Math.min(Math.abs(1), 3))}`;
         bridgeB = new Map([[reducer1, (String.fromCharCode(97,0) == reducer1 ? reducer1.length : reducer1.length)]]);
      textlayoutmanager_ /= Math.max(parseFloat(`${whistle5.length}`), 2);
   }
          

       let templateprocessorM = false;
      while (templateprocessorM) {
          let chart5 = 1.0;
          let historyS = String.fromCharCode(97,101,115,95,121,95,50,56,0);
         templateprocessorM = !templateprocessorM;
         chart5 += parseFloat(`${historyS.length}`);
         historyS = `${parseInt(`${chart5}`) / 3}`;
         break;
      }
          let yellowanimationliveD = true;
         templateprocessorM = (!templateprocessorM ? !yellowanimationliveD : !templateprocessorM);
      for (let j = 0; j < 2; j++) {
         templateprocessorM = (templateprocessorM ? templateprocessorM : !templateprocessorM);
      }
      reducer7 += 3 & parseInt(`${gifgoal_}`);
      dycreatorL.set(sidef, 2);
          if (!fileIsEmpty) {

      dycreatorL.set(`${formb}`, dycreatorL.size ^ parseInt(`${formb}`));
   while ((2 ^ whistle5.length) < 3 && (parseFloat(`${whistle5.length}`) + formb) < 2.94) {
      whistle5 = [parseInt(`${textlayoutmanager_}`)];
      break;
   }
            setMiniVodUrl(`${fileLocation}`);
          } else {

      default_cY = [latn9];
      signinupk = 27.6 >= textlayoutmanager_;
            

   if ((runtimeu.length & dycreatorL.size) <= 5) {
      runtimeu += "1";
   }
   while ((4 / (Math.max(5, gifgoalbgl))) == 3) {
       let runtimeschedulert = String.fromCharCode(122,95,54,55,95,104,105,115,116,111,103,114,97,109,115,0);
       let xnewarchdefaultsz = String.fromCharCode(101,95,49,48,95,115,112,97,99,101,115,0);
       let downarrowy: Array<any> = [108, 192, 391];
       let zoomo = 3;
      for (let m = 0; m < 1; m++) {
         runtimeschedulert += `${runtimeschedulert.length}`;
      }
          let backiconJ = String.fromCharCode(115,112,101,99,105,102,105,101,100,95,52,95,56,48,0);
          let descD = String.fromCharCode(116,119,111,108,111,111,112,95,119,95,51,51,0);
         runtimeschedulert = `${zoomo}`;
         backiconJ += "3";
         descD = `${backiconJ.length + descD.length}`;
         runtimeschedulert += `${zoomo}`;
          let sansT = String.fromCharCode(120,95,57,56,95,100,99,116,99,111,101,102,0);
          let nativemodulem: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,49,95,56,57,0),800], [String.fromCharCode(108,95,55,55,95,115,116,114,111,107,101,114,0),714]]);
         runtimeschedulert += "1";
         sansT += `${sansT.length}`;
         nativemodulem = new Map([[`${nativemodulem.size}`, 1]]);
      while (downarrowy.length > runtimeschedulert.length) {
          let typingw = false;
          let gesturer = 2;
         downarrowy = [((typingw ? 1 : 2) << (Math.min(Math.abs(gesturer), 2)))];
         break;
      }
      for (let e = 0; e < 1; e++) {
          let defaultlogo9 = false;
          let giftB = 4.0;
          let valuesl = 1.0;
          let libhermesr: Array<any> = [363, 607];
          let cornerkicka = String.fromCharCode(114,100,99,111,115,116,95,48,95,55,48,0);
         zoomo /= Math.max(3 * zoomo, 3);
         defaultlogo9 = 9.84 < valuesl;
         giftB -= (cornerkicka == String.fromCharCode(101,0) ? libhermesr.length : cornerkicka.length);
         valuesl *= ((defaultlogo9 ? 2 : 2) - 1);
         libhermesr = [cornerkicka.length / 2];
      }
      for (let n = 0; n < 1; n++) {
         downarrowy = [(xnewarchdefaultsz == String.fromCharCode(111,0) ? downarrowy.length : xnewarchdefaultsz.length)];
      }
      for (let x = 0; x < 3; x++) {
          let righto: Array<any> = [567, 829];
          let rooto: Map<any, any> = new Map([[String.fromCharCode(97,95,53,49,95,102,114,111,109,98,121,116,101,115,0),true ], [String.fromCharCode(109,111,114,101,95,122,95,53,49,0),false ]]);
         runtimeschedulert += "2";
         righto = [rooto.size + 3];
         rooto.set(`${righto.length}`, rooto.size);
      }
      for (let x = 0; x < 1; x++) {
         zoomo <<= Math.min(Math.abs(zoomo), 1);
      }
      if ((2 >> (Math.min(2, runtimeschedulert.length))) > 5) {
         runtimeschedulert += `${zoomo ^ downarrowy.length}`;
      }
      while (downarrowy.length >= runtimeschedulert.length) {
         downarrowy.push(1 >> (Math.min(3, Math.abs(zoomo))));
         break;
      }
         downarrowy = [downarrowy.length];
      gifgoalbgl %= Math.max(sidef.length, 1);
      break;
   }
            setMiniVodUrl(currentVod.mini_video_origin_video_url)
          }
        } else {

       let m_lockN = String.fromCharCode(115,110,110,105,100,95,98,95,55,48,0);
       let vignettev = false;
       let gradlep = 3.0;
      while (vignettev) {
          let imagemanagerH = 3.0;
         vignettev = !vignettev || m_lockN.length >= 51;
         imagemanagerH /= Math.max(5, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${imagemanagerH}`)), 1))}`));
         break;
      }
       let crossr: Array<any> = [544, 461];
      if (parseInt(`${gradlep}`) < m_lockN.length) {
          let libreacte = 1.0;
          let iconsaveimageV: Array<any> = [229, 499, 745];
         gradlep /= Math.max(parseInt(`${libreacte}`), 2);
         libreacte /= Math.max(1, parseFloat(`${2 - iconsaveimageV.length}`));
         iconsaveimageV.push(1);
      }
          let china4 = 4.0;
         crossr.push(m_lockN.length & parseInt(`${china4}`));
         gradlep *= parseInt(`${gradlep}`) * 3;
      if (gradlep >= crossr.length) {
         gradlep /= Math.max(parseInt(`${gradlep}`) / (Math.max(m_lockN.length, 7)), 2);
      }
      while (2 > m_lockN.length) {
         m_lockN += `${2 << (Math.min(Math.abs(parseInt(`${gradlep}`)), 5))}`;
         break;
      }
       let skip_ = 1.0;
      let firebasea = vignettev ? !vignettev : vignettev;
      do {
         vignettev = String.fromCharCode(119,0) == m_lockN;
         if (firebasea) {
            break;
         }
      } while (firebasea && (vignettev));
      gifgoalbgl <<= Math.min(1, m_lockN.length);
   while (!runtimeu.includes(`${gifgoal_}`)) {
      gifgoal_ += (sidef == String.fromCharCode(48,0) ? parseInt(`${gifgoal_}`) : sidef.length);
      break;
   }
          

      textlayoutmanager_ -= (parseFloat(`${fillV == String.fromCharCode(98,0) ? parseInt(`${reducer7}`) : fillV.length}`));
       let libaneu: Map<any, any> = new Map([[String.fromCharCode(114,116,99,115,116,97,116,115,95,98,95,53,0),953], [String.fromCharCode(119,101,114,101,95,112,95,51,50,0),967]]);
      if (5 == (3 | libaneu.size)) {
         libaneu = new Map([[`${libaneu.size}`, libaneu.size * 1]]);
      }
         libaneu.set(`${libaneu.size}`, 2);
         libaneu.set(`${libaneu.size}`, libaneu.size);
      formb /= Math.max(parseFloat(`${parseInt(`${textlayoutmanager_}`)}`), 4);
          setMiniVodUrl(currentVod.mini_video_origin_video_url)
        }
      }
    };
    if (DOWNLOAD_WATCH_ANYTIME === true) {
      
      fn();
    }
  }, [isBuffering, isPause]);

  useEffect(() => {
    setMiniVodUrl(currentVod.mini_video_origin_video_url);
  }, [currentVod]);

  const handleOnReadyForDisplay = useCallback(() => {
       let coreH = String.fromCharCode(100,95,53,57,95,109,97,103,105,99,121,117,118,0);
    let iconbellactiveq = 4.0;
    let matchactiveZ = String.fromCharCode(109,95,54,53,95,99,111,109,101,0);
    let chatM: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,102,95,112,95,54,56,0),917], [String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,108,95,55,50,0),900], [String.fromCharCode(107,95,49,52,95,101,120,101,99,117,116,105,110,103,0),304]]);
    let inouttargetredH = 5;
    let defaultlogoh = String.fromCharCode(113,95,52,50,95,115,111,108,117,116,105,111,110,0);
    let reminderk = 2.0;
    let type_oxQ = 1;
    let footballfiledlayoutz = String.fromCharCode(121,95,50,50,95,116,105,109,105,110,103,115,0);
    let penaltyV: Array<any> = [917, 495];
    let areat = true;
    let armvaS: Array<any> = [926, 604, 264];
    let progressV = String.fromCharCode(105,95,55,50,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0);
    let downloadedm = 0.0;
    let androidb: Array<any> = [713, 808];
    let profileinactiveu = String.fromCharCode(102,105,116,116,101,100,95,48,95,57,55,0);
      chatM = new Map([[`${iconbellactiveq}`, 3 + parseInt(`${iconbellactiveq}`)]]);
       let logo0 = 2.0;
          let classese = 1.0;
          let texte: Array<any> = [554, 64];
          let videojsk = 0;
         logo0 *= parseFloat(`${parseInt(`${classese}`)}`);
         classese /= Math.max(texte.length, 5);
         texte.push(videojsk);
         videojsk <<= Math.min(Math.abs(texte.length >> (Math.min(Math.abs(3), 1))), 4);
       let yellowanimationliveo = true;
      for (let k = 0; k < 2; k++) {
         logo0 += parseFloat(`${parseInt(`${logo0}`) / 1}`);
      }
      type_oxQ += (String.fromCharCode(116,0) == coreH ? coreH.length : armvaS.length);
      armvaS.push((3 & (areat ? 3 : 3)));
      matchactiveZ += `${(parseInt(`${iconbellactiveq}`) + (areat ? 1 : 1))}`;
       let giflivestreamingw = String.fromCharCode(105,95,51,54,95,105,115,115,117,101,114,0);
       let downloader_ = String.fromCharCode(114,95,51,56,95,105,116,101,109,115,0);
         giflivestreamingw = `${3 + giflivestreamingw.length}`;
      if (3 >= giflivestreamingw.length) {
         giflivestreamingw = "3";
      }
      while (giflivestreamingw == String.fromCharCode(56,0) || downloader_ == String.fromCharCode(103,0)) {
          let trashU: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,101,100,95,118,95,52,54,0),646], [String.fromCharCode(113,115,118,118,112,112,95,52,95,55,52,0),253], [String.fromCharCode(108,95,50,52,95,99,111,108,111,114,115,0),182]]);
          let mountingu: Map<any, any> = new Map([[String.fromCharCode(105,95,52,50,95,119,114,105,116,101,0),true ], [String.fromCharCode(105,100,108,101,95,120,95,55,56,0),false ], [String.fromCharCode(105,95,55,55,95,100,114,97,105,110,0),true ]]);
          let reactR = 3.0;
          let middlei = 3.0;
         downloader_ = `${parseInt(`${reactR}`) % 2}`;
         trashU.set(`${middlei}`, 3 << (Math.min(2, Math.abs(mountingu.size))));
         mountingu = new Map([[`${mountingu.size}`, parseInt(`${middlei}`)]]);
         reactR += parseFloat(`${3 * mountingu.size}`);
         break;
      }
         downloader_ += `${(String.fromCharCode(104,0) == downloader_ ? giflivestreamingw.length : downloader_.length)}`;
      while (downloader_.endsWith(`${giflivestreamingw.length}`)) {
          let iconshareC = 5.0;
          let info8 = 1.0;
          let movies3 = String.fromCharCode(110,97,108,117,95,104,95,51,49,0);
          let android9 = String.fromCharCode(101,95,53,49,95,114,101,108,99,116,120,0);
         downloader_ = `${android9.length + movies3.length}`;
         iconshareC /= Math.max(parseFloat(`${parseInt(`${info8}`)}`), 1);
         info8 += parseFloat(`${2}`);
         movies3 += `${parseInt(`${info8}`)}`;
         android9 = `${parseInt(`${info8}`) | parseInt(`${iconshareC}`)}`;
         break;
      }
      if (downloader_ == String.fromCharCode(51,0)) {
          let libavfilterA = String.fromCharCode(121,95,50,50,95,117,115,117,98,0);
          let weathero = 0.0;
          let sinaf: Array<any> = [645, 228];
          let dacccfaabfbcbadeebddcabacdffdb4 = String.fromCharCode(119,95,54,55,95,97,116,111,109,0);
         giflivestreamingw = `${giflivestreamingw.length & libavfilterA.length}`;
         libavfilterA += `${dacccfaabfbcbadeebddcabacdffdb4.length | sinaf.length}`;
         weathero *= parseFloat(`${3}`);
         sinaf.push(dacccfaabfbcbadeebddcabacdffdb4.length);
      }
      penaltyV.push(coreH.length % (Math.max(giflivestreamingw.length, 5)));
      type_oxQ -= defaultlogoh.length;
   let umengg = 6039111.0 <= iconbellactiveq;
   do {
      iconbellactiveq -= parseFloat(`${3}`);
      if (umengg) {
         break;
      }
   } while (umengg && ((iconbellactiveq - 1.100) == 3.51));
   if (matchactiveZ.length == penaltyV.length) {
      penaltyV = [type_oxQ];
   }
      armvaS.push(3 ^ armvaS.length);
      footballfiledlayoutz += `${2 & matchactiveZ.length}`;
      penaltyV.push((matchactiveZ.length >> (Math.min(2, Math.abs((areat ? 5 : 1))))));
      iconbellactiveq *= parseFloat(`${armvaS.length}`);
   if (matchactiveZ.startsWith(`${areat}`)) {
      matchactiveZ += `${inouttargetredH << (Math.min(coreH.length, 2))}`;
   }
   if (1 > penaltyV.length) {
      penaltyV.push(2 ^ parseInt(`${reminderk}`));
   }
      penaltyV = [1 - type_oxQ];
      coreH = `${1 * matchactiveZ.length}`;
      matchactiveZ = `${(parseInt(`${reminderk}`) * (areat ? 3 : 4))}`;
      defaultlogoh += "3";
   let condensedK = inouttargetredH <= 6499735;
   do {
      inouttargetredH ^= parseInt(`${reminderk}`);
      if (condensedK) {
         break;
      }
   } while ((chatM.get(`${inouttargetredH}`) == null) && condensedK);

    setVideoReadyIos(true)

       let handlerQ = 3;
       let libtanK: Array<any> = [400, 341, 17];
       let suggestionE = true;
      while (!libtanK.includes(handlerQ)) {
         handlerQ -= 1;
         break;
      }
         suggestionE = !suggestionE;
      for (let u = 0; u < 2; u++) {
         suggestionE = !suggestionE;
      }
      if (1 == (handlerQ | 5)) {
          let cancelf: Array<any> = [228, 570];
          let webviewg = String.fromCharCode(107,95,49,48,95,112,97,114,97,109,101,116,114,105,99,0);
          let profileinactive6 = String.fromCharCode(99,97,112,97,98,105,108,105,116,121,95,50,95,49,52,0);
          let submitj = String.fromCharCode(102,105,110,97,108,105,122,101,100,95,100,95,56,55,0);
         handlerQ /= Math.max(2, 3 << (Math.min(3, libtanK.length)));
         cancelf = [webviewg.length >> (Math.min(Math.abs(2), 4))];
         webviewg = `${cancelf.length}`;
         profileinactive6 += "1";
         submitj = `${cancelf.length}`;
      }
      if ((5 - libtanK.length) <= 4) {
         libtanK = [handlerQ & 3];
      }
         handlerQ %= Math.max(5, ((suggestionE ? 2 : 1) ^ handlerQ));
       let downloadingI = 1;
       let predictionwin9 = 4;
         libtanK = [2 * libtanK.length];
       let turnY = 5.0;
      footballfiledlayoutz += `${((suggestionE ? 1 : 1) & type_oxQ)}`;
   let cornerC = matchactiveZ == String.fromCharCode(117,112,54,111,107,0);
   do {
      matchactiveZ = `${coreH.length}`;
      if (cornerC) {
         break;
      }
   } while (cornerC && ((matchactiveZ.length % (Math.max(7, armvaS.length))) < 2 || 2 < (matchactiveZ.length % (Math.max(6, armvaS.length)))));
   let flagm = 5893677 >= coreH.length;
   do {
       let textlayoutmanagerz = 1;
       let orangeS = 4.0;
       let defaultplayerimgl = 3.0;
      let iconO = textlayoutmanagerz >= 8433923;
      do {
          let nterstitialr = 4.0;
          let predictionwinl = String.fromCharCode(98,95,51,52,95,115,101,110,116,0);
          let statistics9 = 5.0;
          let playercommon7 = String.fromCharCode(120,95,51,57,95,111,112,116,105,111,110,97,108,115,0);
          let description_d1F = false;
         textlayoutmanagerz -= parseInt(`${statistics9}`);
         nterstitialr += 1 >> (Math.min(4, playercommon7.length));
         predictionwinl += `${playercommon7.length % (Math.max(6, parseInt(`${nterstitialr}`)))}`;
         statistics9 /= Math.max(5, (String.fromCharCode(121,0) == predictionwinl ? predictionwinl.length : playercommon7.length));
         description_d1F = !description_d1F;
         if (iconO) {
            break;
         }
      } while ((1 >= (parseInt(`${orangeS}`) / (Math.max(9, textlayoutmanagerz))) && (orangeS / (Math.max(9, parseFloat(`${textlayoutmanagerz}`)))) >= 3.40) && iconO);
         orangeS *= parseFloat(`${parseInt(`${orangeS}`) | 1}`);
         textlayoutmanagerz /= Math.max(2, 2);
         orangeS -= parseFloat(`${parseInt(`${orangeS}`) & textlayoutmanagerz}`);
      for (let i = 0; i < 3; i++) {
         textlayoutmanagerz /= Math.max(2, 4);
      }
       let subsR = String.fromCharCode(103,95,50,57,95,99,111,110,116,114,97,99,116,115,0);
       let chatl = String.fromCharCode(103,95,53,55,95,111,110,108,121,0);
      let matchese = orangeS >= 6422331.0;
      do {
         orangeS /= Math.max(parseFloat(`${parseInt(`${defaultplayerimgl}`)}`), 3);
         if (matchese) {
            break;
         }
      } while (matchese && (4 >= (textlayoutmanagerz + 4)));
      if (subsR.includes(`${defaultplayerimgl}`)) {
         defaultplayerimgl *= parseFloat(`${1 | subsR.length}`);
      }
      if (2.66 <= defaultplayerimgl) {
         subsR += `${2 * textlayoutmanagerz}`;
      }
      coreH += `${coreH.length & 2}`;
      if (flagm) {
         break;
      }
   } while (flagm && (!coreH.includes(`${chatM.size}`)));
   while (1 >= (3 / (Math.max(9, inouttargetredH)))) {
       let iconarrowrighto = String.fromCharCode(108,97,121,101,114,115,95,49,95,51,57,0);
       let greenb: Map<any, any> = new Map([[String.fromCharCode(120,102,105,120,101,115,95,107,95,53,48,0),291], [String.fromCharCode(106,95,52,55,95,101,100,105,116,0),353], [String.fromCharCode(97,108,108,111,119,95,120,95,50,0),350]]);
       let subs0 = 1;
       let stylesK = 1;
      while ((subs0 + stylesK) <= 3 && 3 <= (stylesK + subs0)) {
          let eyeopen1 = true;
          let j_positiond = String.fromCharCode(109,95,56,57,95,115,98,111,120,0);
          let gradle7 = 3;
          let stationsS = false;
          let mbnativej = String.fromCharCode(97,116,111,109,105,99,115,95,100,95,55,55,0);
         stylesK ^= gradle7;
         eyeopen1 = mbnativej.length == j_positiond.length;
         j_positiond += `${(j_positiond == String.fromCharCode(48,0) ? j_positiond.length : mbnativej.length)}`;
         gradle7 -= (mbnativej.length ^ (stationsS ? 4 : 4));
         stationsS = 55 <= j_positiond.length && 55 <= mbnativej.length;
         break;
      }
       let rnewarchdefaultsm = String.fromCharCode(116,95,57,52,95,108,105,110,101,0);
      for (let q = 0; q < 3; q++) {
          let teamdetailsbg8 = 1.0;
         subs0 -= rnewarchdefaultsm.length - parseInt(`${teamdetailsbg8}`);
      }
         greenb = new Map([[rnewarchdefaultsm, rnewarchdefaultsm.length ^ iconarrowrighto.length]]);
         rnewarchdefaultsm += "1";
      let mbnativef = 9545061 >= stylesK;
      do {
         stylesK -= subs0;
         if (mbnativef) {
            break;
         }
      } while ((stylesK == 1) && mbnativef);
          let yellowanimationlivey = String.fromCharCode(117,95,54,54,95,114,108,112,0);
         iconarrowrighto = `${(rnewarchdefaultsm == String.fromCharCode(103,0) ? rnewarchdefaultsm.length : yellowanimationlivey.length)}`;
          let playlisty: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,112,111,105,110,116,95,51,95,49,48,0),String.fromCharCode(97,110,103,108,101,95,111,95,49,55,0)], [String.fromCharCode(114,116,112,112,108,97,121,95,117,95,57,51,0),String.fromCharCode(119,95,54,53,95,110,97,109,101,116,111,105,110,100,101,120,0)]]);
          let result0 = 5;
          let canvas_ = false;
         stylesK <<= Math.min(4, Math.abs(2));
         playlisty = new Map([[`${result0}`, result0]]);
         canvas_ = playlisty.get(`${canvas_}`) != null;
      for (let x = 0; x < 1; x++) {
         greenb.set(`${stylesK}`, rnewarchdefaultsm.length | stylesK);
      }
      let xadsdkm = rnewarchdefaultsm == String.fromCharCode(121,113,109,112,116,98,49,0);
      do {
         rnewarchdefaultsm = "2";
         if (xadsdkm) {
            break;
         }
      } while ((!rnewarchdefaultsm.endsWith(`${stylesK}`)) && xadsdkm);
         iconarrowrighto += "2";
          let gesturesq: Map<any, any> = new Map([[String.fromCharCode(100,101,102,101,114,114,101,100,95,114,95,56,54,0),String.fromCharCode(103,95,53,49,95,97,116,116,114,97,99,116,111,114,0)], [String.fromCharCode(100,95,49,95,118,100,112,97,117,0),String.fromCharCode(113,95,55,48,95,112,111,115,116,102,105,108,116,101,114,0)], [String.fromCharCode(121,95,57,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0),String.fromCharCode(101,110,116,105,116,105,116,121,95,107,95,52,56,0)]]);
          let episodesn: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,99,114,101,101,110,95,118,95,54,55,0),287], [String.fromCharCode(102,111,117,114,99,99,95,110,95,52,48,0),902], [String.fromCharCode(100,95,50,49,95,116,97,107,101,110,0),260]]);
          let internetV = 2.0;
         subs0 %= Math.max(2, 5);
         gesturesq.set(`${episodesn.size}`, episodesn.size);
         internetV *= episodesn.size >> (Math.min(Math.abs(3), 4));
      inouttargetredH ^= (defaultlogoh == String.fromCharCode(70,0) ? coreH.length : defaultlogoh.length);
      break;
   }
   for (let x = 0; x < 1; x++) {
      footballfiledlayoutz += `${progressV.length}`;
   }
      reminderk *= 1;
   if ((type_oxQ ^ 1) < 3) {
      footballfiledlayoutz = `${(progressV == String.fromCharCode(53,0) ? armvaS.length : progressV.length)}`;
   }
   while ((inouttargetredH ^ 3) == 4 && 3 == (defaultlogoh.length ^ inouttargetredH)) {
      defaultlogoh += "1";
      break;
   }
   if (1 > (coreH.length << (Math.min(1, Math.abs(chatM.size)))) || 2 > (coreH.length << (Math.min(Math.abs(1), 5)))) {
       let ksada = 3.0;
       let screenu: Map<any, any> = new Map([[String.fromCharCode(100,95,52,51,95,115,104,111,119,105,110,103,0),String.fromCharCode(117,95,49,54,95,99,97,112,105,0)], [String.fromCharCode(115,113,108,99,105,112,104,101,114,95,56,95,56,53,0),String.fromCharCode(99,95,55,57,95,118,97,114,105,97,98,108,101,0)]]);
       let basketbally = String.fromCharCode(116,111,112,95,119,95,50,54,0);
       let bing3: Array<any> = [976, 762];
       let streamings = String.fromCharCode(114,95,52,55,95,99,102,101,110,99,0);
          let delegate_kC = String.fromCharCode(111,109,105,116,116,105,110,103,95,107,95,54,56,0);
          let shooth = 4.0;
         basketbally += `${parseInt(`${shooth}`)}`;
         delegate_kC = `${delegate_kC.length << (Math.min(Math.abs(2), 1))}`;
         shooth *= parseFloat(`${delegate_kC.length | delegate_kC.length}`);
      if (basketbally.length <= 3) {
          let orangeclockr = String.fromCharCode(111,95,54,51,95,100,120,116,111,114,121,0);
          let uimanager9: Map<any, any> = new Map([[String.fromCharCode(110,97,110,95,109,95,51,56,0),false ], [String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,107,95,51,54,0),false ], [String.fromCharCode(103,98,114,97,112,95,117,95,54,52,0),false ]]);
          let team6 = 2.0;
          let skipM = String.fromCharCode(120,95,52,57,95,102,112,101,108,0);
         basketbally = `${1 + screenu.size}`;
         orangeclockr += `${2 * uimanager9.size}`;
         uimanager9.set(orangeclockr, skipM.length);
         team6 /= Math.max(parseFloat(`${parseInt(`${team6}`) - skipM.length}`), 4);
      }
         bing3.push(3);
      if ((basketbally.length * bing3.length) <= 5 && (basketbally.length * bing3.length) <= 5) {
         basketbally = "3";
      }
      if (2 <= (screenu.size >> (Math.min(basketbally.length, 1))) && (screenu.size >> (Math.min(basketbally.length, 5))) <= 2) {
          let penaltygoalW = String.fromCharCode(109,111,118,101,109,101,110,116,95,50,95,50,50,0);
          let redgoal_ = 3.0;
          let homen = 0.0;
          let inviteN = String.fromCharCode(105,110,108,105,103,104,116,95,48,95,51,0);
         basketbally += `${parseInt(`${homen}`)}`;
         penaltygoalW = `${penaltygoalW.length | parseInt(`${redgoal_}`)}`;
         redgoal_ -= 2 * penaltygoalW.length;
         inviteN = `${penaltygoalW.length}`;
      }
       let sidet = 5.0;
      if ((1.47 - ksada) == 4.21) {
         screenu = new Map([[`${bing3.length}`, 3 * parseInt(`${sidet}`)]]);
      }
      if ((ksada * 3.75) == 4.54 && 3.85 == (3.75 / (Math.max(9, ksada)))) {
         ksada += 1;
      }
      let xadsdkj = sidet >= 9760794.0;
      do {
         sidet += parseFloat(`${basketbally.length | streamings.length}`);
         if (xadsdkj) {
            break;
         }
      } while ((4 >= (streamings.length - parseInt(`${sidet}`))) && xadsdkj);
      if (!streamings.startsWith(`${sidet}`)) {
         sidet -= parseFloat(`${bing3.length}`);
      }
       let iconclosewhitebgU = String.fromCharCode(100,95,53,56,95,114,101,115,0);
      for (let y = 0; y < 2; y++) {
          let rankr = String.fromCharCode(115,109,100,109,95,49,95,49,53,0);
          let reactnavigationQ = false;
          let merger9 = 3.0;
         basketbally += `${2 - screenu.size}`;
         rankr = `${(1 & (reactnavigationQ ? 5 : 3))}`;
         reactnavigationQ = rankr.length > 17 || reactnavigationQ;
         merger9 -= (String.fromCharCode(80,0) == rankr ? (reactnavigationQ ? 5 : 4) : rankr.length);
      }
      if ((ksada / 1.98) > 1.51) {
          let yellowm = String.fromCharCode(98,95,52,95,115,105,109,117,108,116,97,110,101,111,117,115,0);
          let liveP: Map<any, any> = new Map([[String.fromCharCode(108,95,57,53,95,109,105,99,114,111,100,118,100,0),604], [String.fromCharCode(112,114,111,109,111,116,101,95,105,95,55,53,0),747]]);
          let iconwatchnowe: Array<any> = [545, 33, 41];
          let connectionm: Map<any, any> = new Map([[String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,95,116,95,57,50,0),true ], [String.fromCharCode(99,108,111,115,101,115,116,95,117,95,49,51,0),false ]]);
          let detailsi = String.fromCharCode(100,95,55,95,115,117,98,106,101,99,116,115,0);
         ksada -= 3;
         yellowm = `${iconwatchnowe.length}`;
         liveP = new Map([[`${connectionm.size}`, connectionm.size]]);
         iconwatchnowe = [detailsi.length | liveP.size];
         detailsi += `${2 | yellowm.length}`;
      }
         bing3.push(3);
      for (let n = 0; n < 3; n++) {
         sidet -= parseFloat(`${bing3.length ^ 2}`);
      }
      chatM.set(`${ksada}`, type_oxQ);
   }
      inouttargetredH %= Math.max(5, 2);
       let point5 = String.fromCharCode(118,95,52,55,95,114,101,98,97,108,97,110,99,101,0);
       let filledJ: Map<any, any> = new Map([[String.fromCharCode(98,110,109,112,105,95,55,95,53,56,0),true ], [String.fromCharCode(112,116,115,101,115,95,99,95,57,48,0),true ], [String.fromCharCode(106,95,51,51,95,99,111,108,0),false ]]);
       let favicond = 3;
          let closeS = String.fromCharCode(117,95,50,55,95,116,104,101,114,101,117,109,0);
          let viewerI = 1.0;
         filledJ = new Map([[`${filledJ.size}`, (point5 == String.fromCharCode(57,0) ? point5.length : filledJ.size)]]);
         closeS += "2";
         viewerI += (closeS == String.fromCharCode(116,0) ? parseInt(`${viewerI}`) : closeS.length);
      for (let i = 0; i < 3; i++) {
          let otherO = String.fromCharCode(107,95,56,53,95,116,104,114,101,97,100,115,97,102,101,0);
          let chinasameN: Map<any, any> = new Map([[String.fromCharCode(109,101,115,115,115,97,103,101,95,51,95,51,0),true ], [String.fromCharCode(107,95,50,54,95,97,108,98,117,109,0),true ]]);
          let ballJ = true;
         favicond *= 3 * chinasameN.size;
         otherO += `${otherO.length * 1}`;
         chinasameN.set(otherO, otherO.length / 3);
      }
      let readN = favicond <= 9716473;
      do {
         favicond /= Math.max(3, filledJ.size & 3);
         if (readN) {
            break;
         }
      } while (((4 << (Math.min(5, Math.abs(filledJ.size)))) == 3 && (filledJ.size << (Math.min(Math.abs(4), 4))) == 1) && readN);
         point5 = `${favicond % (Math.max(9, point5.length))}`;
      let mbnativeadvancede = filledJ.size >= 4948624;
      do {
         filledJ = new Map([[`${filledJ.size}`, 3 + filledJ.size]]);
         if (mbnativeadvancede) {
            break;
         }
      } while (((4 & point5.length) >= 4 || 4 >= (filledJ.size & point5.length)) && mbnativeadvancede);
       let libanew = String.fromCharCode(110,101,101,100,115,95,104,95,49,50,0);
       let detailz = String.fromCharCode(114,95,49,53,95,112,111,112,117,108,97,116,101,100,0);
         point5 += "1";
          let materialo = String.fromCharCode(104,95,53,95,100,101,108,101,103,97,116,111,114,0);
          let langl = 3.0;
         detailz += `${(point5 == String.fromCharCode(69,0) ? parseInt(`${langl}`) : point5.length)}`;
         materialo += `${materialo.length}`;
         langl /= Math.max(5, 3 + materialo.length);
          let componentM = String.fromCharCode(115,101,116,105,95,108,95,56,49,0);
          let championE = 1;
          let whiteanimationlivet: Array<any> = [796, 896, 71];
         filledJ.set(`${championE}`, 1);
         componentM += `${whiteanimationlivet.length}`;
         championE >>= Math.min(Math.abs(3), 4);
         whiteanimationlivet = [2 * whiteanimationlivet.length];
      chatM = new Map([[defaultlogoh, 3 - defaultlogoh.length]]);
       let downy: Map<any, any> = new Map([[String.fromCharCode(112,117,114,103,101,95,98,95,52,48,0),31], [String.fromCharCode(111,98,115,101,114,118,101,114,95,48,95,56,54,0),158], [String.fromCharCode(101,95,53,50,95,103,117,101,115,115,0),202]]);
       let iconbackwhitee = 1.0;
      if (downy.size > parseInt(`${iconbackwhitee}`)) {
         iconbackwhitee -= parseFloat(`${parseInt(`${iconbackwhitee}`)}`);
      }
      if (iconbackwhitee >= 5.100) {
         downy = new Map([[`${downy.size}`, 2 * downy.size]]);
      }
         iconbackwhitee -= parseFloat(`${1 | downy.size}`);
      let loginD = iconbackwhitee >= 7476455.0;
      do {
          let libturbomodulejsijniY = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,51,95,53,54,0);
          let videovar5 = String.fromCharCode(119,95,52,57,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
          let bgvipxvodF = false;
          let actionc = false;
          let baselineS = String.fromCharCode(115,112,114,105,116,101,95,97,95,51,52,0);
         iconbackwhitee /= Math.max(4, parseFloat(`${parseInt(`${iconbackwhitee}`)}`));
         libturbomodulejsijniY += `${(libturbomodulejsijniY == String.fromCharCode(78,0) ? (bgvipxvodF ? 5 : 2) : libturbomodulejsijniY.length)}`;
         videovar5 = `${((actionc ? 2 : 4) * 3)}`;
         bgvipxvodF = videovar5.length > baselineS.length;
         actionc = videovar5.length > 12;
         baselineS += "1";
         if (loginD) {
            break;
         }
      } while (loginD && (!Array.from(downy.values()).includes(iconbackwhitee)));
          let routerR = 5;
          let calendarT = 4;
         downy = new Map([[`${routerR}`, 3 - routerR]]);
         calendarT &= calendarT >> (Math.min(Math.abs(calendarT), 2));
       let iconmore9 = String.fromCharCode(102,95,50,50,95,103,97,116,104,101,114,0);
       let templateprocessor6 = String.fromCharCode(111,115,115,108,95,122,95,57,57,0);
      chatM = new Map([[`${downy.size}`, downy.size]]);
   let moonQ = String.fromCharCode(95,121,116,109,108,48,113,0) == progressV;
   do {
      progressV = "3";
      if (moonQ) {
         break;
      }
   } while ((3 == (chatM.size + 2) && 2 == (2 + chatM.size)) && moonQ);
   if (defaultlogoh.length > 5) {
      defaultlogoh += `${parseInt(`${iconbellactiveq}`) + 3}`;
   }
      coreH = `${((areat ? 4 : 5) / (Math.max(8, parseInt(`${iconbellactiveq}`))))}`;
      penaltyV.push(parseInt(`${iconbellactiveq}`));
      penaltyV = [2 - matchactiveZ.length];
       let incidentm = String.fromCharCode(107,95,50,57,95,115,104,111,119,0);
       let episodesY = 5;
       let qaagX = 1;
         episodesY <<= Math.min(5, Math.abs(2));
       let mountingk = 5;
      iconbellactiveq -= parseFloat(`${incidentm.length}`);
   let interstitials = armvaS.length >= 6623027;
   do {
      armvaS = [parseInt(`${reminderk}`)];
      if (interstitials) {
         break;
      }
   } while (((armvaS.length * 1) > 5 && 1 > (defaultlogoh.length * armvaS.length)) && interstitials);
    setVideoReadyAndroid(true)
  }, []);

  return (
    <>
      {isShowVideo && (
        <TouchableWithoutFeedback
          onPress={() => {
            showControls();
            if (overlayRef.current) {
              handlePlayPause();
            }
          }}>
          <View>
            <View style={[styles.container, { height: displayHeight }]}>
              {(isBuffering ||
                (Platform.OS === 'ios'
                  ? !isVideoReadyIos
                  : !isVideoReadyAndroid)) && (
                  <View style={styles.buffering}>
                    <FastImage
                      source={videoBufferGif}
                      style={{ width: 100, height: 100 }}
                      resizeMode="contain"
                      useFastImage={true}
                    />
                  </View>
                )}
              {(Platform.OS === 'ios'
                ? !isVideoReadyIos
                : !isVideoReadyAndroid) &&
                thumbnail && (
                  <FastImage
                    source={{ uri: thumbnail }}
                    style={styles.video}
                    resizeMode="contain"
                    useFastImage={true}
                  />
                )}
              <Video
                ref={videoRef}
                resizeMode="contain"
                
                source={{
                  uri: miniVodUrl,
                  headers: {
                    'User-Agent':
                      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                  },
                }}
                onReadyForDisplay={handleOnReadyForDisplay}
                onBuffer={onBuffer}
                repeat={true}
                style={{
                  ...styles.video,
                  opacity: (
                    Platform.OS === 'ios'
                      ? isVideoReadyIos
                      : isVideoReadyAndroid
                  )
                    ? 1
                    : 0,
                }}
                paused={
                  isPause ||
                  onSliding ||
                  (Platform.OS === 'ios' && !isVideoReadyIos)
                }
                onLoad={handleLoad}
                onLoadStart={handleLoadStart}
                onProgress={handleProgress}
                progressUpdateInterval={1500}
                onError={(e) => {

                  console.log(e)
                  console.log(e)
                  console.log(e)
                  console.log('=============')
                  console.log(e)
                  console.log(e)
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  left: (Dimensions.get('window').width - 80) / 2,
                  top: (Dimensions.get('window').height - 130) / 2,
                  zIndex: 999,
                }}>
                {showIcon && (isPause ? <PlayIcon /> : <PauseIcon />)}
              </View>
              {bottomContent()}
              {!disableSeek && (
                <Slider
                  style={styles.slider}
                  maximumValue={duration}
                  minimumValue={0}
                  disabled={!showOverlay}
                  thumbTouchSize={{ width: 10, height: 10 }}
                  allowTouchTrack={!isBuffering}
                  thumbStyle={{
                    height: showOverlay ? 8 : 1,
                    width: showOverlay ? 8 : 1,
                  }}
                  value={currentDuration}
                  onValueChange={handleSeek}
                  onSlidingComplete={handleSeek}
                  minimumTrackTintColor={'#ffffff80'}
                  maximumTrackTintColor={'#ffffff24'}
                  thumbTintColor={'#FFFFFF'}
                  trackStyle={{ height: 2, opacity: 1 }}
                />
              )}
              {duration > 0 &&
                showOverlay &&
                currentDuration >= 0 &&
                !disableSeek &&
                (duration < 3600 ? (
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: 12,
                      backgroundColor: '#000',
                      borderRadius: 4,
                      paddingVertical: 6,
                      paddingHorizontal: 10,
                      left: Math.min(
                        Math.max(
                          0,
                          (currentDuration / duration) * windowWidth - 44,
                        ),
                        windowWidth - 76,
                      ),
                    }}>
                    <Text style={textVariants.small}>
                      {new Date(currentDuration * 1000)
                        .toISOString()
                        .substring(14, 19)}
                    </Text>
                    <Text
                      style={{
                        ...textVariants.small,
                        color: colors.muted,
                      }}>{` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(14, 19)}`}</Text>
                  </Text>
                ) : (
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: 20,
                      left: Math.min(
                        Math.max(
                          0,
                          (currentDuration / duration) * windowWidth - 34,
                        ),
                        windowWidth - 76,
                      ),
                    }}>
                    <Text style={textVariants.small}>
                      {new Date(currentDuration * 1000)
                        .toISOString()
                        .substring(11, 19)}
                    </Text>
                    <Text
                      style={{
                        ...textVariants.small,
                        color: colors.muted,
                      }}>{` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(11, 19)}`}</Text>
                  </Text>
                ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}
export default memo(ShortVideoPlayer);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  channelName: {
    color: 'white',
    fontWeight: 'bold',
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: 'white',
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: 'absolute',
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: 'white',
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  floatingMusicNote: {
    position: 'absolute',
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: 'white',
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    color: 'yellow',
    position: 'absolute',
    top: '40%',
    left: '36%',
    zIndex: 999,
  },
  slider: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 9,
  },
});
