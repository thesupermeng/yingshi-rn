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
import Video, { OnProgressData, OBasketballPlaylist } from 'react-native-video';
import PlayIcon from '@static/images/starProduct.svg';
import PauseIcon from '@static/images/descHeji.svg';
import PlayBoDanIcon from '@static/images/short_kkSwitch_a.svg';
import PlayZhengPianIcon from '@static/images/tailDisconnected.svg';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import HejiIcon from '@static/images/stringEighteenPlaceholder.svg';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/kg_index';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import { showAdultModeVip } from '@redux/actions/a_switch';
import { playVod, viewPlaylistDetails } from '@redux/actions/xif_layout';
import { screenModel } from '@type/nb_shared_target';
import { ADULT_MODE_PREVIEW_DURATION, DOWNLOAD_WATCH_ANYTIME } from '@utility/n_subs_interstitial';
import FastImage from '../../common/gwi_with';
import RedirectButton from './lp_icon_button';
import DescriptionBar from './ll_alert';
import HejiButton from './ac_service_preview_button';
import { addIdToCache } from '../../../utils/iue_description_form';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import { KWConstants } from '@models/kl_sheet';

interface XFillButton {
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

const videoBufferGif = require('@static/images/shootAcceptedPrivate_7.gif')

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
}: XFillButton) {
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
  const videoRef = useRef<OBasketballPlaylist>(null);
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

  const userState = useSelector<HDTGesturesList>('userReducer');

  const isVip = KWConstants.isVip(userState.user);
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
       let downloadG = String.fromCharCode(116,111,111,108,115,95,56,95,54,54,0);
    let episodee = String.fromCharCode(114,95,57,52,95,100,120,118,97,0);
    let window_xn: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,50,95,54,55,0),228], [String.fromCharCode(115,95,55,53,95,100,105,118,109,111,100,0),888], [String.fromCharCode(104,95,57,50,95,106,105,116,116,101,114,0),213]]);
    let condensed7 = 4;
    let gemfile6: Array<any> = [String.fromCharCode(112,101,114,99,95,120,95,53,49,0), String.fromCharCode(100,114,97,119,117,116,105,108,115,95,114,95,50,57,0), String.fromCharCode(119,101,98,112,95,102,95,57,53,0)];
    let signinupi = false;
    let sentryZ = String.fromCharCode(97,105,116,101,114,95,109,95,57,54,0);
    let friendsC = 2;
    let appleK: Map<any, any> = new Map([[String.fromCharCode(99,104,105,109,112,95,120,95,49,50,0),498], [String.fromCharCode(112,111,115,116,115,99,97,108,101,95,49,95,55,57,0),139], [String.fromCharCode(102,105,108,101,115,121,115,116,101,109,95,107,95,56,53,0),781]]);
    let dragO = String.fromCharCode(107,95,56,49,95,103,97,115,0);
   for (let r = 0; r < 2; r++) {
       let tickedU = true;
       let inactiveK: Array<any> = [794, 723];
       let dragV = String.fromCharCode(105,95,51,51,95,99,111,114,114,101,99,116,105,111,110,0);
      let frame_ww = tickedU ? !tickedU : tickedU;
      do {
         tickedU = (((!tickedU ? dragV.length : 80) - dragV.length) >= 80);
         if (frame_ww) {
            break;
         }
      } while ((!tickedU || 2 <= (inactiveK.length >> (Math.min(Math.abs(3), 4)))) && frame_ww);
         inactiveK = [(dragV == String.fromCharCode(71,0) ? inactiveK.length : dragV.length)];
         tickedU = dragV.length > 82;
         inactiveK.push(inactiveK.length);
         inactiveK = [(dragV == String.fromCharCode(72,0) ? dragV.length : inactiveK.length)];
      if (tickedU) {
          let redirectx = 1;
          let modityH = String.fromCharCode(113,95,50,57,95,99,111,109,98,101,100,0);
          let catalogp = String.fromCharCode(116,111,111,108,115,95,107,95,55,52,0);
         dragV += `${(String.fromCharCode(67,0) == dragV ? redirectx : dragV.length)}`;
         redirectx <<= Math.min(modityH.length, 3);
         modityH = `${catalogp.length & 1}`;
         catalogp += "3";
      }
      let shareK = inactiveK.length >= 9608540;
      do {
         inactiveK.push(dragV.length);
         if (shareK) {
            break;
         }
      } while ((!dragV.includes(`${inactiveK.length}`)) && shareK);
         inactiveK = [2];
      for (let k = 0; k < 2; k++) {
         inactiveK = [(dragV == String.fromCharCode(54,0) ? (tickedU ? 3 : 1) : dragV.length)];
      }
      window_xn.set(dragV, dragV.length << (Math.min(5, inactiveK.length)));
   }
   let analyticsJ = gemfile6.length <= 5307210;
   do {
      gemfile6 = [1 << (Math.min(Math.abs(friendsC), 4))];
      if (analyticsJ) {
         break;
      }
   } while (analyticsJ && (sentryZ.endsWith(`${gemfile6.length}`)));
      gemfile6 = [episodee.length * downloadG.length];
      condensed7 >>= Math.min(1, Math.abs(condensed7));
   if (signinupi && (1 + friendsC) == 2) {
       let fill4 = 4.0;
      while (2.97 == (fill4 * 1.78) || 3.12 == (1.78 * fill4)) {
         fill4 /= Math.max(3, 2);
         break;
      }
          let shrinkD = String.fromCharCode(116,121,112,101,100,101,102,115,95,53,95,49,50,0);
          let dialogi = String.fromCharCode(118,105,115,105,98,105,108,105,116,121,95,100,95,50,56,0);
          let umengZ: Array<any> = [349, 976, 453];
         fill4 *= parseInt(`${fill4}`);
         shrinkD += `${(shrinkD == String.fromCharCode(50,0) ? shrinkD.length : umengZ.length)}`;
         dialogi += `${(dialogi == String.fromCharCode(53,0) ? shrinkD.length : dialogi.length)}`;
         umengZ.push(1 << (Math.min(3, dialogi.length)));
      for (let a = 0; a < 1; a++) {
          let bingZ = 2.0;
         fill4 *= parseInt(`${bingZ}`) | 1;
      }
      signinupi = 4 >= condensed7;
   }
   let style8 = 7688345 >= gemfile6.length;
   do {
      gemfile6 = [downloadG.length ^ 2];
      if (style8) {
         break;
      }
   } while ((window_xn.get(`${gemfile6.length}`) == null) && style8);
   let modityu = 8309633 >= condensed7;
   do {
       let predictiond = String.fromCharCode(107,95,49,51,95,100,101,99,105,100,101,0);
       let dropdownP = 2;
       let serviceq = true;
         dropdownP |= dropdownP;
      let forms = predictiond == String.fromCharCode(50,108,103,54,113,121,97,108,101,0);
      do {
         predictiond = `${(predictiond == String.fromCharCode(114,0) ? (serviceq ? 2 : 5) : predictiond.length)}`;
         if (forms) {
            break;
         }
      } while ((1 >= (4 >> (Math.min(5, Math.abs(dropdownP)))) || (4 >> (Math.min(5, Math.abs(dropdownP)))) >= 5) && forms);
      if (serviceq && predictiond.length < 5) {
         serviceq = (((!serviceq ? predictiond.length : 12) % (Math.max(predictiond.length, 4))) == 12);
      }
         serviceq = (dropdownP + predictiond.length) > 80;
         predictiond += `${dropdownP}`;
      if (dropdownP <= 4) {
         serviceq = (88 == (predictiond.length | (serviceq ? predictiond.length : 88)));
      }
          let vignetteC = String.fromCharCode(111,95,50,49,95,115,117,98,116,114,97,99,116,111,114,0);
          let castingf = 4.0;
         serviceq = predictiond == vignetteC;
         vignetteC = `${parseInt(`${castingf}`) >> (Math.min(Math.abs(parseInt(`${castingf}`)), 3))}`;
          let grayQ = String.fromCharCode(99,97,115,116,115,95,108,95,57,57,0);
          let championr: Map<any, any> = new Map([[String.fromCharCode(108,111,103,100,98,95,110,95,57,53,0),85], [String.fromCharCode(112,95,56,52,95,101,120,116,101,110,100,0),90]]);
          let playi = 5.0;
         serviceq = grayQ.length < 66;
         grayQ = "2";
         championr.set(`${playi}`, parseInt(`${playi}`));
      while (3 >= predictiond.length) {
         serviceq = predictiond.includes(`${dropdownP}`);
         break;
      }
      condensed7 <<= Math.min(Math.abs(appleK.size), 1);
      if (modityu) {
         break;
      }
   } while ((3 == (condensed7 | 2)) && modityu);
      friendsC *= appleK.size;
   for (let q = 0; q < 1; q++) {
       let scoref: Map<any, any> = new Map([[String.fromCharCode(107,95,51,57,95,104,111,115,116,102,108,97,103,115,0),true ], [String.fromCharCode(109,95,50,49,95,98,97,115,105,99,0),true ], [String.fromCharCode(98,95,51,52,95,112,114,101,116,99,104,0),true ]]);
       let pausej = String.fromCharCode(100,95,54,56,95,104,105,115,116,111,103,114,97,109,115,0);
       let placeholdero = true;
       let malaysiav = String.fromCharCode(101,99,117,114,115,105,118,101,95,104,95,55,50,0);
      if (pausej.length < 5) {
          let zhuboE = 0.0;
          let popupU: Map<any, any> = new Map([[String.fromCharCode(118,95,53,48,95,105,118,97,114,0),797], [String.fromCharCode(114,117,108,101,115,95,100,95,51,0),264]]);
          let type_riF = String.fromCharCode(101,110,116,105,116,101,115,95,119,95,52,55,0);
          let navigations = 0.0;
         placeholdero = !placeholdero;
         zhuboE /= Math.max(parseFloat(`${3}`), 1);
         popupU.set(`${zhuboE}`, 1);
         type_riF += `${parseInt(`${navigations}`) + 3}`;
         navigations -= parseFloat(`${1 | parseInt(`${navigations}`)}`);
      }
      while (2 == malaysiav.length) {
         placeholdero = (scoref.size >> (Math.min(pausej.length, 4))) > 83;
         break;
      }
      if (!placeholdero && malaysiav.length == 2) {
          let suggestionr = 3.0;
         malaysiav += "2";
         suggestionr /= Math.max(parseFloat(`${2}`), 2);
      }
      let countdownT = String.fromCharCode(105,121,55,0) == malaysiav;
      do {
         malaysiav = `${malaysiav.length}`;
         if (countdownT) {
            break;
         }
      } while (countdownT && (malaysiav.length >= 2));
         pausej += "2";
      while ((4 + malaysiav.length) > 5 && 4 > (malaysiav.length + scoref.size)) {
         malaysiav += `${((placeholdero ? 4 : 2) & 3)}`;
         break;
      }
          let score4: Array<any> = [965, 854];
          let bodane: Map<any, any> = new Map([[String.fromCharCode(118,115,101,114,118,105,99,101,95,111,95,56,0),false ], [String.fromCharCode(121,95,52,53,95,115,101,99,111,110,100,0),false ], [String.fromCharCode(120,95,53,54,95,98,108,97,109,101,100,0),false ]]);
          let streamingQ: Map<any, any> = new Map([[String.fromCharCode(111,95,56,95,116,101,108,101,116,101,120,116,0),751], [String.fromCharCode(102,114,97,112,115,95,101,95,54,54,0),703]]);
         placeholdero = String.fromCharCode(109,0) == malaysiav;
         score4 = [score4.length];
         bodane = new Map([[`${bodane.size}`, 3]]);
         streamingQ = new Map([[`${bodane.size}`, streamingQ.size]]);
      if (5 <= (pausej.length * 3) || 1 <= (3 * scoref.size)) {
         pausej = `${scoref.size >> (Math.min(Math.abs(1), 2))}`;
      }
      while (5 == (4 % (Math.max(4, scoref.size)))) {
         placeholdero = ((scoref.size + (placeholdero ? scoref.size : 10)) < 30);
         break;
      }
      for (let x = 0; x < 1; x++) {
          let leagueI = false;
          let charty = String.fromCharCode(105,95,53,50,95,97,108,105,118,101,0);
         scoref.set(charty, (charty == String.fromCharCode(66,0) ? charty.length : malaysiav.length));
         leagueI = (leagueI ? !leagueI : !leagueI);
      }
         pausej += `${pausej.length + 2}`;
         placeholdero = scoref.size < 23;
      episodee = `${pausej.length}`;
   }
   if ((friendsC >> (Math.min(Math.abs(4), 2))) > 2 || (friendsC >> (Math.min(Math.abs(appleK.size), 2))) > 4) {
      friendsC *= sentryZ.length | 2;
   }
      signinupi = downloadG.length < 15 && 15 < window_xn.size;
      downloadG += `${window_xn.size}`;
       let statisticsR: Map<any, any> = new Map([[String.fromCharCode(98,99,100,117,105,110,116,95,120,95,56,54,0),988], [String.fromCharCode(117,95,57,53,95,102,114,97,109,101,105,110,102,111,0),714]]);
       let twitterp: Array<any> = [524, 604];
       let typingI = true;
       let alertO: Array<any> = [516, 807];
       let usernameN: Array<any> = [String.fromCharCode(109,95,51,52,95,97,112,112,108,105,101,114,0), String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,97,95,49,48,0), String.fromCharCode(109,111,118,101,95,119,95,55,57,0)];
         twitterp.push(alertO.length);
          let arrowT = 4.0;
         statisticsR.set(`${usernameN.length}`, usernameN.length);
         arrowT *= parseInt(`${arrowT}`) + parseInt(`${arrowT}`);
          let headerl = 0.0;
         statisticsR = new Map([[`${usernameN.length}`, usernameN.length]]);
         headerl *= 3;
      while (1 <= usernameN.length) {
         usernameN = [usernameN.length >> (Math.min(2, alertO.length))];
         break;
      }
       let uploadK = String.fromCharCode(115,95,50,49,95,111,99,116,101,116,115,0);
       let heartg = String.fromCharCode(112,108,97,121,112,97,117,115,101,95,114,95,49,48,0);
         uploadK += "1";
      while (4 > (usernameN.length << (Math.min(Math.abs(statisticsR.size), 1))) && (4 << (Math.min(1, Math.abs(statisticsR.size)))) > 5) {
         statisticsR = new Map([[`${typingI}`, 1 / (Math.max(8, heartg.length))]]);
         break;
      }
      while (2 > uploadK.length) {
         uploadK = "1";
         break;
      }
      gemfile6 = [2 + downloadG.length];
      appleK.set(`${friendsC}`, friendsC);
   for (let w = 0; w < 1; w++) {
      downloadG += `${(downloadG == String.fromCharCode(75,0) ? downloadG.length : window_xn.size)}`;
   }
      signinupi = 36 <= condensed7 || episodee == String.fromCharCode(48,0);
       let dangerQ = String.fromCharCode(113,95,53,55,95,99,111,109,98,105,110,97,116,111,114,0);
       let k_imager: Array<any> = [53, 384];
       let orange1 = String.fromCharCode(111,95,56,95,100,97,115,104,101,110,99,0);
      let strF = 5303731 >= k_imager.length;
      do {
         k_imager.push((String.fromCharCode(50,0) == orange1 ? k_imager.length : orange1.length));
         if (strF) {
            break;
         }
      } while (((k_imager.length / (Math.max(2, 4))) == 3 || 5 == (2 / (Math.max(6, orange1.length)))) && strF);
       let goalC = 1;
       let with_zlF = 3;
         dangerQ += `${goalC}`;
         goalC >>= Math.min(Math.abs(3), 3);
          let readr: Array<any> = [String.fromCharCode(109,97,116,114,105,120,102,95,106,95,55,48,0), String.fromCharCode(118,111,114,100,105,112,108,111,109,95,102,95,57,50,0)];
         k_imager = [orange1.length ^ dangerQ.length];
         readr.push(readr.length - 1);
          let projectG = String.fromCharCode(105,95,56,50,95,114,97,110,103,101,99,111,100,101,114,0);
          let bottom1: Map<any, any> = new Map([[String.fromCharCode(117,95,50,48,95,99,112,117,105,110,102,111,0),true ], [String.fromCharCode(110,95,56,54,95,99,111,108,108,105,100,101,114,0),false ]]);
          let changep: Array<any> = [String.fromCharCode(117,108,116,114,97,95,99,95,56,49,0), String.fromCharCode(107,95,56,50,95,109,111,114,101,0), String.fromCharCode(110,95,56,51,95,99,111,110,110,101,99,116,105,118,105,116,121,0)];
         dangerQ += `${bottom1.size - goalC}`;
         projectG = `${1 >> (Math.min(1, projectG.length))}`;
         bottom1.set(projectG, 1 - projectG.length);
         changep = [projectG.length];
         dangerQ = `${goalC << (Math.min(orange1.length, 3))}`;
          let blacklistY = 1;
         orange1 = "1";
         blacklistY /= Math.max(5, 2 - blacklistY);
      for (let r = 0; r < 3; r++) {
         orange1 += `${goalC >> (Math.min(k_imager.length, 3))}`;
      }
      friendsC /= Math.max(3, 3);
   while (!downloadG.includes(`${appleK.size}`)) {
      appleK.set(downloadG, 2 << (Math.min(4, Math.abs(appleK.size))));
      break;
   }

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
       let sansS: Array<any> = [String.fromCharCode(115,108,105,112,112,97,103,101,115,95,51,95,56,49,0), String.fromCharCode(115,101,110,100,95,120,95,52,0), String.fromCharCode(109,95,51,51,95,105,110,116,101,114,115,112,101,114,115,101,0)];
    let placeholderO = String.fromCharCode(98,97,114,95,51,95,54,49,0);
    let notificationg = 0.0;
    let robotoG = true;
    let historyR = String.fromCharCode(101,95,50,55,95,97,99,100,101,99,0);
    let chart9 = String.fromCharCode(97,110,103,108,101,100,95,51,95,55,48,0);
    let sliderA = String.fromCharCode(115,116,97,107,101,100,95,122,95,54,51,0);
    let overE = String.fromCharCode(101,95,54,48,95,114,102,102,116,98,0);
       let vignetter = true;
       let backgroundz: Array<any> = [180, 753, 275];
         vignetter = backgroundz.includes(vignetter);
       let sheetR = String.fromCharCode(114,101,109,111,118,105,110,103,95,99,95,56,56,0);
       let sharei = String.fromCharCode(117,95,57,54,95,119,101,98,112,97,103,101,0);
      while (1 >= sharei.length) {
          let lightX: Array<any> = [728, 394, 142];
          let foundu = String.fromCharCode(120,111,114,101,100,95,104,95,49,56,0);
         sharei += `${lightX.length + backgroundz.length}`;
         lightX.push((foundu == String.fromCharCode(107,0) ? foundu.length : foundu.length));
         break;
      }
      let group5 = vignetter ? !vignetter : vignetter;
      do {
          let hongkongQ = 4;
          let entryV = String.fromCharCode(109,115,114,108,101,100,101,99,95,116,95,51,55,0);
          let regengo = String.fromCharCode(104,95,54,53,95,103,101,115,116,117,114,101,0);
          let fastforwardX = 3.0;
          let wind8 = false;
         vignetter = 18 > hongkongQ;
         hongkongQ %= Math.max(2, 3 * entryV.length);
         entryV += "1";
         regengo = "3";
         fastforwardX -= 1;
         wind8 = fastforwardX >= 59.19;
         if (group5) {
            break;
         }
      } while (group5 && (!sheetR.includes(`${vignetter}`)));
      let match2 = vignetter ? !vignetter : vignetter;
      do {
         vignetter = (sheetR.length - sharei.length) == 16;
         if (match2) {
            break;
         }
      } while ((!sheetR.endsWith(`${vignetter}`)) && match2);
          let update_2om = String.fromCharCode(101,105,110,116,114,95,111,95,56,52,0);
         sharei += "1";
         update_2om += `${(String.fromCharCode(119,0) == update_2om ? update_2om.length : update_2om.length)}`;
      sliderA = `${((robotoG ? 2 : 3) >> (Math.min(placeholderO.length, 1)))}`;
       let ncopy_if_ = 0.0;
       let description_dP: Map<any, any> = new Map([[String.fromCharCode(105,95,51,48,95,119,105,108,100,99,97,114,100,0),796], [String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,112,95,54,51,0),837]]);
          let telegram9 = 0.0;
          let injuryS: Map<any, any> = new Map([[String.fromCharCode(110,95,53,54,95,112,97,99,107,97,103,101,0),String.fromCharCode(117,95,49,51,95,105,110,116,101,103,101,114,0)], [String.fromCharCode(109,95,52,55,95,108,105,98,115,119,114,101,115,97,109,112,108,101,0),String.fromCharCode(114,95,48,95,115,99,114,111,108,108,97,98,108,101,0)]]);
         description_dP = new Map([[`${injuryS.size}`, injuryS.size << (Math.min(Math.abs(1), 1))]]);
         telegram9 *= 3;
      let middleN = 6029956 >= description_dP.size;
      do {
          let filedI = false;
          let kickB = String.fromCharCode(103,101,110,101,114,97,116,111,114,115,95,101,95,51,48,0);
          let whitee = String.fromCharCode(105,110,116,101,114,118,97,108,115,95,54,95,56,50,0);
          let projectE = 1;
          let fill2 = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,108,95,51,52,0);
         description_dP.set(`${projectE}`, projectE);
         filedI = 47 >= kickB.length;
         kickB = "2";
         whitee += `${(fill2 == String.fromCharCode(81,0) ? fill2.length : whitee.length)}`;
         if (middleN) {
            break;
         }
      } while (middleN && (Array.from(description_dP.keys()).includes(`${ncopy_if_}`)));
      let lineN = 5252701 >= description_dP.size;
      do {
         description_dP = new Map([[`${description_dP.size}`, description_dP.size - parseInt(`${ncopy_if_}`)]]);
         if (lineN) {
            break;
         }
      } while (lineN && ((description_dP.size + parseInt(`${ncopy_if_}`)) == 2 && (description_dP.size / (Math.max(2, 10))) == 4));
         description_dP.set(`${ncopy_if_}`, description_dP.size);
      if (description_dP.get(`${ncopy_if_}`) != null) {
         ncopy_if_ /= Math.max(3, parseFloat(`${3 | parseInt(`${ncopy_if_}`)}`));
      }
         description_dP.set(`${ncopy_if_}`, parseInt(`${ncopy_if_}`) | description_dP.size);
      sliderA += "2";
      historyR = "2";
      chart9 = `${((robotoG ? 1 : 5) + 3)}`;
   for (let t = 0; t < 2; t++) {
      sliderA = `${sliderA.length >> (Math.min(placeholderO.length, 3))}`;
   }
       let qcopy_4S = String.fromCharCode(122,95,56,56,95,109,100,101,99,0);
       let foundd = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,57,95,49,54,0);
       let register_fx = 2.0;
         foundd += "2";
         register_fx -= 3 / (Math.max(1, qcopy_4S.length));
         qcopy_4S += `${(foundd == String.fromCharCode(72,0) ? foundd.length : parseInt(`${register_fx}`))}`;
          let networkO = String.fromCharCode(120,95,49,48,95,115,121,110,116,104,101,115,105,122,101,0);
          let unselectedu = String.fromCharCode(110,95,57,95,108,101,97,121,0);
          let bufferv = 1.0;
         foundd = `${unselectedu.length}`;
         networkO += `${parseInt(`${bufferv}`)}`;
         unselectedu += `${networkO.length}`;
         bufferv /= Math.max((parseFloat(`${networkO == String.fromCharCode(112,0) ? networkO.length : parseInt(`${bufferv}`)}`)), 1);
       let i_unlockA = String.fromCharCode(109,95,57,54,95,98,114,101,110,100,101,114,0);
       let annerp = String.fromCharCode(106,95,51,56,95,115,104,111,119,105,110,103,0);
         i_unlockA = `${foundd.length}`;
         qcopy_4S = `${foundd.length * qcopy_4S.length}`;
      if (qcopy_4S == String.fromCharCode(111,0)) {
         foundd += `${3 - annerp.length}`;
      }
       let logint = 2;
      robotoG = sliderA.length <= 50;
   for (let t = 0; t < 3; t++) {
      historyR = `${parseInt(`${notificationg}`)}`;
   }

    clearTimeout(timer.current);

      historyR = `${sansS.length >> (Math.min(Math.abs(2), 5))}`;
       let whistleR = String.fromCharCode(110,95,54,54,95,103,114,111,119,105,110,103,0);
       let scheduleI = 3.0;
          let termsl = String.fromCharCode(97,114,114,105,118,97,108,95,51,95,50,57,0);
          let v_positionj: Map<any, any> = new Map([[String.fromCharCode(100,111,110,110,97,95,122,95,49,55,0),25], [String.fromCharCode(114,95,57,52,95,97,117,116,111,99,111,109,109,105,116,0),66], [String.fromCharCode(105,110,105,116,105,97,116,101,95,106,95,55,49,0),741]]);
         whistleR += `${whistleR.length % 1}`;
         termsl += `${(termsl == String.fromCharCode(73,0) ? termsl.length : v_positionj.size)}`;
         v_positionj = new Map([[`${v_positionj.size}`, v_positionj.size | 3]]);
          let shootv = String.fromCharCode(106,95,56,55,95,114,101,118,111,107,105,110,103,0);
          let arrowi: Array<any> = [String.fromCharCode(103,95,57,54,95,100,101,99,111,109,112,114,101,115,115,101,100,0), String.fromCharCode(115,95,51,55,95,115,116,97,114,116,101,100,0)];
          let phoneY = 1.0;
         scheduleI += (parseFloat(`${String.fromCharCode(113,0) == shootv ? whistleR.length : shootv.length}`));
         arrowi.push(parseInt(`${phoneY}`) >> (Math.min(4, Math.abs(1))));
         phoneY += arrowi.length ^ 3;
       let componentx: Array<any> = [231, 565];
      for (let u = 0; u < 1; u++) {
         whistleR = `${whistleR.length + 3}`;
      }
          let balls = false;
         scheduleI *= parseFloat(`${parseInt(`${scheduleI}`)}`);
         balls = (!balls ? !balls : !balls);
          let chinaQ = String.fromCharCode(105,95,54,53,95,115,121,109,0);
          let sharedb = 1.0;
          let play9 = String.fromCharCode(99,108,97,112,95,100,95,49,49,0);
         whistleR = `${componentx.length}`;
         chinaQ = `${play9.length % 2}`;
         sharedb /= Math.max(3, parseFloat(`${3}`));
         play9 += `${parseInt(`${sharedb}`)}`;
      historyR = `${((robotoG ? 2 : 1))}`;
       let groupW = String.fromCharCode(106,95,57,51,95,112,97,101,116,104,0);
       let downloadedj = false;
      if (!downloadedj || 5 <= groupW.length) {
         groupW += `${groupW.length}`;
      }
       let questa: Array<any> = [950, 129, 305];
       let type_ec: Array<any> = [832, 584, 382];
         downloadedj = !groupW.endsWith(`${downloadedj}`);
      while (groupW.startsWith(`${downloadedj}`)) {
          let customh = String.fromCharCode(100,111,110,116,95,107,95,55,55,0);
          let usernameI = String.fromCharCode(100,95,55,55,95,111,112,101,110,99,108,0);
          let nterstitialD = 4.0;
          let usery = 5;
          let logoV: Array<any> = [String.fromCharCode(113,95,50,50,95,116,121,112,101,115,0), String.fromCharCode(114,101,115,101,116,98,117,102,95,122,95,52,56,0), String.fromCharCode(118,95,49,55,95,117,99,111,110,115,116,0)];
         groupW = `${((downloadedj ? 5 : 1) * 1)}`;
         customh = "3";
         usernameI = `${logoV.length << (Math.min(4, Math.abs(parseInt(`${nterstitialD}`))))}`;
         nterstitialD *= usery;
         usery *= (String.fromCharCode(80,0) == customh ? parseInt(`${nterstitialD}`) : customh.length);
         logoV.push(usernameI.length);
         break;
      }
      while (questa.length > 5) {
         questa = [type_ec.length % (Math.max(questa.length, 10))];
         break;
      }
       let greyv = 4.0;
       let heart8 = 0.0;
      sliderA += "1";
   while (sliderA == chart9) {
      chart9 += `${parseInt(`${notificationg}`) | 3}`;
      break;
   }
       let placementb = 3;
      for (let f = 0; f < 2; f++) {
         placementb ^= placementb / (Math.max(2, 5));
      }
      if (2 > (placementb | placementb)) {
         placementb += placementb % 3;
      }
         placementb += 2 + placementb;
      robotoG = 2 < sansS.length;
   for (let r = 0; r < 2; r++) {
      sliderA = `${(String.fromCharCode(97,0) == placeholderO ? placeholderO.length : (robotoG ? 5 : 2))}`;
   }
   while (!robotoG && 3 <= (2 + sansS.length)) {
      robotoG = 93.1 <= notificationg;
      break;
   }
    setShowOverlay(true);

       let containery: Map<any, any> = new Map([[String.fromCharCode(120,99,108,105,95,119,95,54,52,0),210], [String.fromCharCode(105,115,97,108,110,117,109,95,113,95,52,53,0),657], [String.fromCharCode(101,95,55,95,116,103,99,97,108,108,115,0),591]]);
       let settingsM: Array<any> = [String.fromCharCode(111,95,57,52,95,97,116,116,114,105,98,115,0), String.fromCharCode(104,95,56,51,95,100,117,114,98,0)];
       let singaporeo = 5.0;
      let i_imageW = containery.size >= 8269112;
      do {
          let upgradex = 0;
          let penaltyH = true;
          let logini: Array<any> = [621, 273];
         containery.set(`${penaltyH}`, ((penaltyH ? 3 : 2) >> (Math.min(Math.abs(containery.size), 1))));
         upgradex -= logini.length + upgradex;
         logini = [upgradex];
         if (i_imageW) {
            break;
         }
      } while ((5 > (containery.size >> (Math.min(3, settingsM.length))) || 5 > (containery.size >> (Math.min(1, settingsM.length)))) && i_imageW);
       let tickF = 1.0;
      let pagination1 = tickF <= 7421861.0;
      do {
          let dicel = String.fromCharCode(117,95,53,55,95,109,97,116,99,104,101,115,0);
          let customu: Array<any> = [925, 738, 274];
          let modelA = 4.0;
          let subsX = String.fromCharCode(115,95,52,51,95,112,101,101,108,0);
          let friendst = String.fromCharCode(99,95,51,48,95,116,98,108,101,110,100,0);
         tickF -= parseFloat(`${parseInt(`${tickF}`)}`);
         dicel = "3";
         customu.push(subsX.length);
         modelA += parseFloat(`${2 | subsX.length}`);
         friendst += `${customu.length | 1}`;
         if (pagination1) {
            break;
         }
      } while (pagination1 && (settingsM.length >= 1));
         singaporeo /= Math.max(5, parseInt(`${tickF}`) << (Math.min(settingsM.length, 2)));
         singaporeo *= containery.size % (Math.max(8, parseInt(`${singaporeo}`)));
          let refreshn = String.fromCharCode(112,95,53,49,95,114,101,106,101,99,116,0);
          let hearts = 1;
          let vietnamr = 3.0;
         tickF -= parseFloat(`${1}`);
         refreshn = `${parseInt(`${vietnamr}`)}`;
         hearts ^= hearts;
         vietnamr *= parseFloat(`${parseInt(`${vietnamr}`)}`);
      let vignette8 = 7101863 <= settingsM.length;
      do {
         settingsM = [3 ^ settingsM.length];
         if (vignette8) {
            break;
         }
      } while (vignette8 && (4.91 >= (settingsM.length + singaporeo)));
         containery.set(`${singaporeo}`, 2);
         singaporeo -= 1;
      historyR = "1";
   let pauseb = 5202185.0 <= notificationg;
   do {
       let usery1 = 2.0;
       let volumev = true;
       let dragr = String.fromCharCode(110,95,49,53,95,112,101,114,99,101,110,116,0);
         volumev = 14.100 < usery1;
         dragr += "2";
         usery1 += parseFloat(`${3}`);
         volumev = !volumev || dragr.length == 80;
         usery1 += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${usery1}`)), 2))}`);
       let gmailE = 2;
       let rulesl = 3;
         dragr += `${(dragr == String.fromCharCode(100,0) ? dragr.length : (volumev ? 2 : 3))}`;
       let launchz: Array<any> = [String.fromCharCode(121,95,57,48,95,117,110,98,111,110,100,101,100,0), String.fromCharCode(119,101,108,108,95,54,95,50,51,0)];
       let group3: Array<any> = [538, 615];
      for (let k = 0; k < 3; k++) {
         gmailE <<= Math.min(group3.length, 2);
      }
      notificationg += 2 >> (Math.min(Math.abs(parseInt(`${notificationg}`)), 3));
      if (pauseb) {
         break;
      }
   } while (pauseb && (robotoG));
   if (!historyR.startsWith(placeholderO)) {
       let currentO = false;
       let plusa: Array<any> = [413, 817, 919];
       let untick6: Array<any> = [352, 308];
          let actionsv = 0.0;
          let basketballM = 4.0;
         plusa = [2 & parseInt(`${basketballM}`)];
         actionsv /= Math.max(5, parseInt(`${actionsv}`) & parseInt(`${actionsv}`));
         basketballM -= parseFloat(`${3 * parseInt(`${actionsv}`)}`);
      let goalb = untick6.length <= 9007225;
      do {
          let loadingJ = String.fromCharCode(118,112,115,104,97,114,101,100,95,53,95,56,53,0);
          let vignette0: Array<any> = [111, 581];
         untick6.push(loadingJ.length);
         loadingJ = `${vignette0.length / (Math.max(vignette0.length, 7))}`;
         if (goalb) {
            break;
         }
      } while ((untick6.length >= 1) && goalb);
      for (let h = 0; h < 3; h++) {
          let mathU = 3.0;
          let dicen = 3.0;
          let membershipA = 2;
          let benefitL: Map<any, any> = new Map([[String.fromCharCode(100,95,48,95,102,105,108,101,104,101,97,100,101,114,0),String.fromCharCode(110,95,53,57,95,115,117,99,99,101,115,115,99,98,0)], [String.fromCharCode(106,95,50,51,95,100,101,109,111,0),String.fromCharCode(99,97,110,116,95,49,95,56,56,0)]]);
         plusa.push(membershipA);
         mathU /= Math.max(1, parseInt(`${dicen}`));
         dicen -= parseFloat(`${parseInt(`${dicen}`) % (Math.max(benefitL.size, 4))}`);
         membershipA *= 1;
         benefitL = new Map([[`${dicen}`, 2 & parseInt(`${dicen}`)]]);
      }
      if (4 >= (untick6.length | 2)) {
         plusa = [plusa.length];
      }
         plusa.push((plusa.length / (Math.max(9, (currentO ? 1 : 2)))));
         untick6.push(untick6.length + plusa.length);
      if (!currentO) {
         currentO = (((!currentO ? 63 : untick6.length) << (Math.min(untick6.length, 3))) >= 63);
      }
         currentO = !currentO;
      for (let y = 0; y < 2; y++) {
         plusa.push(untick6.length);
      }
      historyR += "2";
   }
       let soundp = String.fromCharCode(120,95,57,50,95,99,100,108,109,115,0);
       let acceptedu: Array<any> = [60, 23];
       let custom4 = 1;
      let w_playerm = custom4 <= 9862174;
      do {
          let thailando = false;
          let save3 = false;
          let tooltipsn = 3.0;
          let commentS = String.fromCharCode(107,101,121,104,97,115,104,95,109,95,49,57,0);
         custom4 >>= Math.min(parseInt(`${Math.abs(((save3 ? 1 : 4) << (Math.min(Math.abs(2), 5))))}`), 4);
         thailando = commentS.length == 61 || thailando;
         save3 = thailando;
         tooltipsn /= Math.max(parseFloat(`${2 ^ commentS.length}`), 1);
         if (w_playerm) {
            break;
         }
      } while (w_playerm && ((soundp.length ^ 2) < 4));
         custom4 >>= Math.min(acceptedu.length, 2);
          let muted7: Map<any, any> = new Map([[String.fromCharCode(108,95,54,52,95,111,110,101,105,110,99,104,0),256], [String.fromCharCode(116,95,51,55,95,97,112,112,101,97,114,97,110,99,101,0),778], [String.fromCharCode(113,95,50,51,95,112,105,112,101,108,105,110,105,110,103,0),50]]);
         custom4 |= 2 | muted7.size;
          let filledG: Array<any> = [696, 41, 535];
         acceptedu.push(3);
         filledG = [1 - filledG.length];
          let switch_q0 = String.fromCharCode(109,97,105,110,110,101,116,95,49,95,55,0);
          let star3 = 3.0;
         acceptedu.push(custom4 / 3);
         switch_q0 += "3";
         star3 /= Math.max(5, switch_q0.length);
         acceptedu = [custom4 * 3];
         acceptedu.push(1 & custom4);
      while ((acceptedu.length & 1) >= 4 && (1 & acceptedu.length) >= 2) {
          let guideW: Map<any, any> = new Map([[String.fromCharCode(119,95,55,95,110,111,110,110,117,108,108,111,117,116,0),834], [String.fromCharCode(106,95,50,56,95,110,111,110,110,117,108,108,115,99,104,101,109,101,115,0),108]]);
          let popupM = 5.0;
         custom4 <<= Math.min(4, Math.abs(custom4 | parseInt(`${popupM}`)));
         guideW = new Map([[`${guideW.size}`, guideW.size / (Math.max(6, guideW.size))]]);
         popupM *= guideW.size;
         break;
      }
      while (!acceptedu.includes(custom4)) {
         custom4 /= Math.max(5, (soundp == String.fromCharCode(102,0) ? custom4 : soundp.length));
         break;
      }
      placeholderO = "2 * custom4";
      notificationg += 2;
      placeholderO += `${(String.fromCharCode(89,0) == overE ? overE.length : (robotoG ? 4 : 2))}`;
   while (1 < placeholderO.length) {
      notificationg /= Math.max(1, ((robotoG ? 1 : 3) % (Math.max(3, 2))));
      break;
   }
    overlayRef.current = true;

      chart9 += `${(String.fromCharCode(98,0) == historyR ? historyR.length : placeholderO.length)}`;
   if (placeholderO.length == 5 || !robotoG) {
       let changeU = String.fromCharCode(98,105,116,118,101,99,115,95,106,95,51,54,0);
       let volume1 = 3.0;
       let liveb = 2;
      for (let r = 0; r < 1; r++) {
         changeU = `${liveb}`;
      }
         changeU = `${parseInt(`${volume1}`) | liveb}`;
      while (4 <= (changeU.length >> (Math.min(Math.abs(5), 3)))) {
          let pauseZ = false;
          let privilegee = 1;
         volume1 -= ((pauseZ ? 5 : 4) / (Math.max(liveb, 2)));
         pauseZ = 89 <= (privilegee & privilegee);
         break;
      }
         liveb *= 1 - liveb;
      if ((5 - changeU.length) >= 2 || 1 >= (5 / (Math.max(9, parseInt(`${volume1}`))))) {
          let greys = 0.0;
         changeU += `${liveb | 1}`;
         greys /= Math.max(4, parseFloat(`${1}`));
      }
      let orientationK = 9901952 <= liveb;
      do {
         liveb &= liveb;
         if (orientationK) {
            break;
         }
      } while ((2 < liveb) && orientationK);
      let eighteenK = 9347900 <= liveb;
      do {
          let commonR = 2.0;
         liveb *= 1;
         commonR /= Math.max(parseFloat(`${parseInt(`${commonR}`)}`), 3);
         if (eighteenK) {
            break;
         }
      } while (eighteenK && (volume1 <= 3.95));
          let basketbally = String.fromCharCode(102,102,105,111,95,49,95,54,56,0);
          let fullb = String.fromCharCode(121,95,55,53,95,114,101,97,100,113,0);
          let themei = true;
         volume1 /= Math.max(2, liveb);
         basketbally = `${(fullb == String.fromCharCode(101,0) ? (themei ? 4 : 5) : fullb.length)}`;
         themei = !basketbally.startsWith(`${themei}`);
         volume1 += 1;
      placeholderO += `${placeholderO.length - 2}`;
   }
       let photoo = false;
       let changeW: Map<any, any> = new Map([[String.fromCharCode(100,95,56,57,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0),false ], [String.fromCharCode(120,110,97,115,109,95,111,95,49,56,0),false ]]);
       let mappingg = String.fromCharCode(105,100,99,116,100,115,112,95,120,95,52,55,0);
       let phoneO = String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,100,95,50,52,0);
      if ((4 % (Math.max(1, changeW.size))) <= 3 || photoo) {
          let blacklistV = 3.0;
          let usernameo: Map<any, any> = new Map([[String.fromCharCode(120,118,109,99,95,122,95,49,55,0),false ], [String.fromCharCode(106,95,55,95,105,110,100,101,102,105,110,105,116,101,108,121,0),false ]]);
         photoo = blacklistV > 85.26;
         blacklistV /= Math.max(1, 3);
         usernameo.set(`${usernameo.size}`, usernameo.size << (Math.min(1, Math.abs(usernameo.size))));
      }
      while (changeW.size == 2) {
         mappingg = `${(mappingg == String.fromCharCode(54,0) ? mappingg.length : (photoo ? 2 : 1))}`;
         break;
      }
         mappingg += `${phoneO.length & 1}`;
      while (3 < (phoneO.length - 5) || 5 < (5 - changeW.size)) {
          let filledH = false;
          let vietnams = String.fromCharCode(106,115,111,110,115,95,109,95,52,49,0);
          let loadingx: Array<any> = [451, 229, 251];
          let favorites = false;
          let filterX = String.fromCharCode(112,108,116,101,95,115,95,55,56,0);
         changeW = new Map([[`${changeW.size}`, (mappingg == String.fromCharCode(65,0) ? mappingg.length : changeW.size)]]);
         filledH = vietnams == String.fromCharCode(110,0);
         vietnams += `${((favorites ? 3 : 5) / (Math.max(2, 5)))}`;
         loadingx.push((2 ^ (filledH ? 4 : 5)));
         favorites = loadingx.length >= 18;
         filterX += `${loadingx.length >> (Math.min(vietnams.length, 3))}`;
         break;
      }
         phoneO = `${1 ^ changeW.size}`;
      overE = `${overE.length}`;
   let clubM = sliderA.length >= 5795573;
   do {
      sliderA += "3";
      if (clubM) {
         break;
      }
   } while ((4.16 < notificationg) && clubM);
   while (2 == (5 - historyR.length)) {
       let playlistt = 1.0;
       let tailM: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,95,49,95,56,52,0),854], [String.fromCharCode(103,95,52,55,95,118,105,97,0),560]]);
       let combined = String.fromCharCode(114,95,49,49,95,97,108,116,101,114,97,98,108,101,0);
       let actionT: Array<any> = [556, 972];
       let controls2: Array<any> = [String.fromCharCode(110,97,109,101,115,112,97,99,101,115,95,49,95,57,57,0), String.fromCharCode(108,105,98,110,100,105,95,100,95,49,51,0)];
      for (let j = 0; j < 3; j++) {
         combined = `${tailM.size}`;
      }
          let n_countY: Array<any> = [228, 6, 778];
          let default_zQ = String.fromCharCode(117,109,98,101,114,95,106,95,51,55,0);
         actionT = [combined.length];
         n_countY.push(1 & default_zQ.length);
         default_zQ = `${n_countY.length << (Math.min(default_zQ.length, 1))}`;
         playlistt -= parseFloat(`${3 - controls2.length}`);
      let singlea = controls2.length >= 8172140;
      do {
         controls2.push(parseInt(`${playlistt}`) / (Math.max(2, 3)));
         if (singlea) {
            break;
         }
      } while (((actionT.length >> (Math.min(Math.abs(4), 2))) > 3 && 5 > (4 >> (Math.min(5, controls2.length)))) && singlea);
      if (5 >= (controls2.length % (Math.max(combined.length, 8)))) {
          let nextv: Array<any> = [846, 936];
          let langkeyi: Map<any, any> = new Map([[String.fromCharCode(119,95,50,53,95,117,110,99,114,111,112,112,101,100,0),656], [String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,53,95,56,52,0),874]]);
         combined = `${tailM.size}`;
         nextv = [langkeyi.size];
         langkeyi = new Map([[`${langkeyi.size}`, nextv.length]]);
      }
       let zhengpianE = 2;
      if (1 > (4 - actionT.length)) {
         actionT.push(3);
      }
         zhengpianE <<= Math.min(Math.abs(parseInt(`${playlistt}`)), 2);
       let screeni = true;
      if (tailM.size < actionT.length) {
         actionT.push(3 - parseInt(`${playlistt}`));
      }
      if (3 == (3 >> (Math.min(5, Math.abs(zhengpianE)))) || 5 == (zhengpianE >> (Math.min(Math.abs(3), 1)))) {
         zhengpianE |= controls2.length;
      }
      for (let j = 0; j < 3; j++) {
         combined += `${actionT.length}`;
      }
         playlistt /= Math.max(parseFloat(`${1 & tailM.size}`), 5);
      while ((actionT.length & 3) >= 3) {
         actionT.push(2);
         break;
      }
      for (let j = 0; j < 3; j++) {
         zhengpianE |= 3;
      }
      notificationg -= parseInt(`${notificationg}`) << (Math.min(3, Math.abs(1)));
      break;
   }
   let renewc = robotoG ? !robotoG : robotoG;
   do {
       let clubm: Map<any, any> = new Map([[String.fromCharCode(112,95,57,53,95,108,97,115,114,0),false ], [String.fromCharCode(108,95,54,57,95,115,111,102,116,119,97,114,101,0),false ]]);
       let dialogU = 5;
       let sentrym: Array<any> = [String.fromCharCode(117,95,56,51,95,104,101,97,114,116,0), String.fromCharCode(100,99,116,101,108,101,109,95,49,95,57,52,0)];
      for (let c = 0; c < 1; c++) {
          let actionsh = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,106,95,56,56,0);
          let resendj = String.fromCharCode(105,110,115,116,97,108,108,101,100,95,120,95,51,51,0);
          let championh = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,106,95,55,52,0);
          let commonb = 0.0;
         clubm = new Map([[`${commonb}`, 1]]);
         actionsh = `${1 % (Math.max(2, resendj.length))}`;
         resendj = `${actionsh.length}`;
         championh += `${actionsh.length}`;
         commonb *= 3 * resendj.length;
      }
          let sideQ = 2.0;
          let injuryr = 5;
          let customg: Array<any> = [596, 544, 7];
         dialogU ^= dialogU;
         sideQ *= parseFloat(`${parseInt(`${sideQ}`)}`);
         injuryr ^= 1 >> (Math.min(Math.abs(parseInt(`${sideQ}`)), 3));
         customg = [1 << (Math.min(Math.abs(injuryr), 4))];
      while (sentrym.includes(dialogU)) {
         sentrym = [clubm.size];
         break;
      }
          let logoutJ: Array<any> = [String.fromCharCode(113,95,49,54,95,109,99,111,109,112,97,110,100,0), String.fromCharCode(114,101,102,105,110,101,95,114,95,50,48,0), String.fromCharCode(112,95,57,51,95,105,110,100,101,120,0)];
          let anythink1: Map<any, any> = new Map([[String.fromCharCode(97,95,51,50,95,114,101,109,105,110,100,0),443], [String.fromCharCode(102,95,54,53,95,99,111,110,116,101,120,116,0),634]]);
          let gemfilei = String.fromCharCode(113,95,55,56,95,103,114,111,119,0);
         clubm.set(`${sentrym.length}`, sentrym.length);
         logoutJ = [anythink1.size % 3];
         anythink1.set(gemfilei, (gemfilei == String.fromCharCode(112,0) ? gemfilei.length : logoutJ.length));
       let orientationc = String.fromCharCode(99,95,51,55,95,101,120,99,101,112,116,105,111,110,115,0);
         dialogU |= (String.fromCharCode(50,0) == orientationc ? orientationc.length : sentrym.length);
      while (!orientationc.startsWith(`${sentrym.length}`)) {
         sentrym = [1];
         break;
      }
         orientationc += "1";
      while (4 > (orientationc.length >> (Math.min(4, sentrym.length))) && 4 > (sentrym.length >> (Math.min(orientationc.length, 3)))) {
          let blackU: Array<any> = [335, 252, 976];
         sentrym = [sentrym.length];
         blackU = [blackU.length - 2];
         break;
      }
      robotoG = 86 <= overE.length;
      if (renewc) {
         break;
      }
   } while ((!robotoG || chart9.length == 4) && renewc);
       let action6: Array<any> = [316, 729];
       let nativeL = 2;
       let themeN = 1;
         nativeL -= themeN;
       let teamh: Array<any> = [680, 183, 580];
       let vcopy_2z: Array<any> = [195, 501];
      if (!teamh.includes(vcopy_2z.length)) {
         vcopy_2z.push(nativeL % (Math.max(8, themeN)));
      }
      while (!teamh.includes(action6.length)) {
         action6.push(action6.length - 2);
         break;
      }
      while (5 > (themeN << (Math.min(Math.abs(2), 4))) || 1 > (2 << (Math.min(1, Math.abs(themeN))))) {
         teamh.push(1);
         break;
      }
         themeN &= 1 << (Math.min(2, teamh.length));
      let redirect3 = vcopy_2z.length >= 7514255;
      do {
         vcopy_2z.push(themeN & 3);
         if (redirect3) {
            break;
         }
      } while (redirect3 && ((3 << (Math.min(3, vcopy_2z.length))) < 4 || (vcopy_2z.length << (Math.min(Math.abs(3), 4))) < 5));
         nativeL += 1 >> (Math.min(1, teamh.length));
      let nativeD = vcopy_2z.length >= 7005043;
      do {
         vcopy_2z = [nativeL];
         if (nativeD) {
            break;
         }
      } while (nativeD && (3 < vcopy_2z.length));
      chart9 = `${(parseInt(`${notificationg}`) | (robotoG ? 1 : 3))}`;
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
       let customT = 4.0;
    let editH = String.fromCharCode(98,101,103,117,110,95,54,95,56,55,0);
    let moviesk = String.fromCharCode(100,105,115,99,95,113,95,54,55,0);
    let lineF = 1.0;
    let whiteq = String.fromCharCode(115,113,117,97,114,101,95,56,95,51,56,0);
    let fillf = String.fromCharCode(116,114,101,108,108,105,115,95,54,95,57,54,0);
    let downloadedL = String.fromCharCode(118,95,55,48,95,116,119,111,109,0);
    let regengC = String.fromCharCode(109,95,50,49,95,118,99,97,99,100,97,116,97,0);
    let w_countY = 0;
    let singaporeq = 2;
    let darkj = true;
    let linkd = 4.0;
    let sportd = true;
   for (let y = 0; y < 3; y++) {
      singaporeq -= 2;
   }
   for (let e = 0; e < 1; e++) {
      singaporeq >>= Math.min(Math.abs(w_countY ^ whiteq.length), 4);
   }
       let vietnam8 = true;
       let whatsappM = String.fromCharCode(101,105,103,104,116,115,118,120,95,55,95,49,50,0);
       let thumbnail5 = String.fromCharCode(105,95,52,53,95,115,121,110,99,115,97,102,101,0);
      while (4 <= thumbnail5.length) {
          let volume_ = String.fromCharCode(99,104,111,115,101,110,95,98,95,53,0);
          let calendari = 0.0;
          let sourceJ = 4.0;
         whatsappM += `${(String.fromCharCode(54,0) == whatsappM ? whatsappM.length : parseInt(`${calendari}`))}`;
         volume_ += "1";
         calendari /= Math.max(4, parseFloat(`${volume_.length >> (Math.min(Math.abs(2), 3))}`));
         sourceJ /= Math.max(5, parseInt(`${sourceJ}`) << (Math.min(Math.abs(1), 5)));
         break;
      }
      let sort_ = whatsappM.length <= 8358683;
      do {
          let promotionJ = String.fromCharCode(122,95,50,54,95,111,99,116,101,116,115,0);
          let str3 = 5.0;
          let bannerA = false;
          let annerv = String.fromCharCode(108,95,50,55,95,115,110,97,112,112,121,0);
         whatsappM = `${(whatsappM == String.fromCharCode(86,0) ? thumbnail5.length : whatsappM.length)}`;
         promotionJ += `${2 ^ parseInt(`${str3}`)}`;
         str3 -= (String.fromCharCode(53,0) == promotionJ ? (bannerA ? 5 : 3) : promotionJ.length);
         bannerA = promotionJ.length > 23;
         annerv = "1";
         if (sort_) {
            break;
         }
      } while ((thumbnail5.startsWith(whatsappM)) && sort_);
      if (!vietnam8) {
          let incidentv: Array<any> = [637, 935, 522];
          let blacklist0 = String.fromCharCode(113,95,50,50,95,115,104,97,100,111,119,0);
          let favoritev = String.fromCharCode(97,117,116,111,95,56,95,53,57,0);
         thumbnail5 = `${(blacklist0 == String.fromCharCode(85,0) ? blacklist0.length : incidentv.length)}`;
         incidentv = [favoritev.length];
      }
      for (let g = 0; g < 3; g++) {
         thumbnail5 += `${3 / (Math.max(9, whatsappM.length))}`;
      }
         vietnam8 = !vietnam8;
      for (let s = 0; s < 3; s++) {
         whatsappM += `${whatsappM.length}`;
      }
          let refreshQ: Map<any, any> = new Map([[String.fromCharCode(107,98,100,119,105,110,95,54,95,49,0),625], [String.fromCharCode(97,116,101,120,105,116,95,54,95,49,48,48,0),934], [String.fromCharCode(97,118,117,105,95,54,95,51,57,0),721]]);
          let pagination5: Array<any> = [945, 267, 765];
          let hongkongX = 5;
         vietnam8 = refreshQ.size < 39;
         refreshQ.set(`${hongkongX}`, 3);
         pagination5 = [hongkongX / (Math.max(2, pagination5.length))];
      if (1 > whatsappM.length && thumbnail5 != String.fromCharCode(84,0)) {
         whatsappM = `${whatsappM.length * thumbnail5.length}`;
      }
      if (2 <= whatsappM.length) {
         whatsappM = `${whatsappM.length}`;
      }
      customT /= Math.max(1 & parseInt(`${customT}`), 4);
      whiteq += `${1 * fillf.length}`;
      fillf = `${(fillf == String.fromCharCode(88,0) ? fillf.length : moviesk.length)}`;
       let containern = 0.0;
       let m_imageA = String.fromCharCode(103,95,51,56,95,115,109,106,112,101,103,0);
         m_imageA += `${m_imageA.length ^ 3}`;
      for (let q = 0; q < 2; q++) {
          let screen4: Map<any, any> = new Map([[String.fromCharCode(112,95,56,52,95,97,99,99,111,114,100,105,110,103,0),385], [String.fromCharCode(101,95,56,48,95,119,102,101,120,0),475]]);
          let sort3 = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,111,114,95,109,95,50,48,0);
         containern /= Math.max(1, (parseFloat(`${m_imageA == String.fromCharCode(66,0) ? screen4.size : m_imageA.length}`)));
         screen4.set(sort3, sort3.length % (Math.max(1, 5)));
      }
         containern += parseFloat(`${1}`);
      for (let x = 0; x < 2; x++) {
          let zhubob = String.fromCharCode(111,95,49,48,48,95,100,101,99,105,100,101,0);
          let matchesP: Array<any> = [String.fromCharCode(97,95,48,95,98,111,100,121,0), String.fromCharCode(116,95,49,51,95,109,112,101,103,112,115,0)];
          let time_zt = 4.0;
          let headerr: Array<any> = [804, 215];
          let detailJ = 3.0;
         m_imageA += `${parseInt(`${detailJ}`) % (Math.max(3, 3))}`;
         zhubob += `${zhubob.length}`;
         matchesP = [matchesP.length << (Math.min(1, Math.abs(parseInt(`${time_zt}`))))];
         time_zt *= matchesP.length | parseInt(`${time_zt}`);
         headerr.push(zhubob.length << (Math.min(Math.abs(3), 1)));
         detailJ -= parseFloat(`${matchesP.length}`);
      }
          let watcha: Map<any, any> = new Map([[String.fromCharCode(105,95,56,54,95,109,101,100,105,117,109,0),88], [String.fromCharCode(99,95,53,52,95,101,113,117,105,118,97,108,101,110,99,101,0),446]]);
         containern /= Math.max(4, (parseFloat(`${String.fromCharCode(72,0) == m_imageA ? m_imageA.length : watcha.size}`)));
          let clock7: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,101,114,95,112,95,51,51,0),String.fromCharCode(97,110,105,109,97,116,105,110,103,95,48,95,54,48,0)], [String.fromCharCode(109,101,110,116,105,111,110,95,122,95,52,54,0),String.fromCharCode(116,117,112,108,101,95,52,95,52,56,0)], [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,95,115,95,49,56,0),String.fromCharCode(115,111,114,116,95,101,95,52,57,0)]]);
          let shrink3 = String.fromCharCode(102,95,55,50,95,107,101,121,115,116,111,114,101,0);
          let controlo = String.fromCharCode(114,95,49,53,95,109,105,100,101,113,117,97,108,105,122,101,114,0);
         containern *= parseFloat(`${m_imageA.length}`);
         clock7 = new Map([[`${clock7.size}`, 2 ^ shrink3.length]]);
         shrink3 = `${(shrink3 == String.fromCharCode(107,0) ? controlo.length : shrink3.length)}`;
         controlo = `${(shrink3 == String.fromCharCode(65,0) ? shrink3.length : clock7.size)}`;
      singaporeq ^= 1;
   for (let j = 0; j < 1; j++) {
      downloadedL += "3";
   }
      w_countY &= 1;
   if (!darkj) {
      singaporeq ^= (editH == String.fromCharCode(66,0) ? w_countY : editH.length);
   }
      regengC += `${downloadedL.length}`;
   for (let g = 0; g < 2; g++) {
      fillf = "3";
   }

      if (videoRef.current) {
        videoRef.current.seek(isNaN(value) ? 0 : value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
       let backgroundQ = false;
    let downloadingn: Map<any, any> = new Map([[String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,109,95,50,54,0),861], [String.fromCharCode(101,103,111,108,111,109,98,95,50,95,52,57,0),898], [String.fromCharCode(99,95,55,56,95,99,104,105,110,0),780]]);
    let calendarq = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,117,95,53,55,0);
    let short_v4: Array<any> = [989, 863, 889];
    let resendr: Map<any, any> = new Map([[String.fromCharCode(112,116,104,114,101,97,100,95,105,95,50,56,0),true ], [String.fromCharCode(107,95,57,54,95,120,108,97,98,101,108,119,105,100,116,104,0),true ]]);
    let overb = 5.0;
    let q_centerk = 1;
      calendarq += `${calendarq.length}`;
   for (let x = 0; x < 3; x++) {
      downloadingn = new Map([[`${overb}`, q_centerk | parseInt(`${overb}`)]]);
   }
      backgroundQ = 18 <= short_v4.length;
      downloadingn = new Map([[`${short_v4.length}`, parseInt(`${overb}`)]]);

    clearTimeout(iconTimer.current);

   while (q_centerk <= 3) {
      backgroundQ = null != downloadingn.get(`${backgroundQ}`);
      break;
   }
   if (Array.from(downloadingn.keys()).includes(`${overb}`)) {
      downloadingn = new Map([[`${downloadingn.size}`, downloadingn.size]]);
   }
      backgroundQ = overb < 98.69 || 69 < downloadingn.size;
      downloadingn.set(calendarq, 3);
    setShowIcon(true);

   if (4 < (3 % (Math.max(7, resendr.size)))) {
      downloadingn.set(`${overb}`, resendr.size % 1);
   }
   while (3 < (short_v4.length + 2) && 5 < (short_v4.length + 2)) {
      short_v4 = [resendr.size];
      break;
   }
   for (let v = 0; v < 1; v++) {
      backgroundQ = 80 >= resendr.size || downloadingn.size >= 80;
   }
      calendarq = `${resendr.size}`;
    if (isPause) {

   let spinnerf = 8308493 >= short_v4.length;
   do {
      short_v4.push(calendarq.length);
      if (spinnerf) {
         break;
      }
   } while (spinnerf && (1 > short_v4.length));
      q_centerk &= q_centerk << (Math.min(calendarq.length, 4));
   for (let p = 0; p < 2; p++) {
      resendr = new Map([[`${short_v4.length}`, q_centerk]]);
   }
      short_v4 = [(String.fromCharCode(120,0) == calendarq ? parseInt(`${overb}`) : calendarq.length)];
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    else {

   let register_w5V = 9796779 <= short_v4.length;
   do {
      short_v4 = [downloadingn.size >> (Math.min(short_v4.length, 1))];
      if (register_w5V) {
         break;
      }
   } while (register_w5V && (downloadingn.get(`${short_v4.length}`) != null));
   for (let y = 0; y < 2; y++) {
      overb -= q_centerk;
   }
      calendarq += `${downloadingn.size}`;
      downloadingn = new Map([[calendarq, (calendarq.length >> (Math.min(3, Math.abs((backgroundQ ? 5 : 4)))))]]);
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let blackliste = 3.0;
    let inactivee = String.fromCharCode(118,95,51,95,117,105,111,116,111,109,98,117,102,0);
    let moduleX = String.fromCharCode(113,95,56,49,95,97,97,110,100,99,116,116,97,98,0);
    let sentrye = 0.0;
    let minivodA = 1.0;
    let orangeZ = 0;
    let grayI = false;
    let pingY = 4.0;
    let configureY = 3.0;
    let backgroundk = 1;
   let flyerl = inactivee.length >= 5298910;
   do {
      inactivee = "1";
      if (flyerl) {
         break;
      }
   } while (flyerl && (3 > inactivee.length));
      pingY += moduleX.length;
      moduleX += `${moduleX.length % (Math.max(6, inactivee.length))}`;
      moduleX += `${3 | parseInt(`${minivodA}`)}`;
      blackliste /= Math.max((parseInt(`${configureY}`) / (Math.max(10, (grayI ? 2 : 5)))), 3);
       let moviesC: Map<any, any> = new Map([[String.fromCharCode(114,95,49,56,95,112,108,117,114,97,108,115,0),String.fromCharCode(97,114,114,97,110,103,101,100,95,117,95,55,50,0)], [String.fromCharCode(112,97,114,97,108,108,101,108,95,99,95,53,57,0),String.fromCharCode(104,95,54,57,95,97,97,115,99,0)], [String.fromCharCode(118,111,98,115,117,98,95,52,95,50,49,0),String.fromCharCode(99,95,53,48,95,97,116,116,114,97,99,116,0)]]);
       let membership9 = 3;
          let championC = 3.0;
         membership9 >>= Math.min(1, Math.abs(parseInt(`${championC}`)));
         membership9 >>= Math.min(3, Math.abs(membership9));
      let flyerv = moviesC.size >= 7875699;
      do {
          let overlayQ = String.fromCharCode(114,95,55,95,114,97,115,116,101,114,105,122,101,0);
          let starT = String.fromCharCode(99,97,112,116,117,114,101,100,95,107,95,53,52,0);
          let group6 = 0.0;
          let entryX = String.fromCharCode(107,95,55,50,95,112,108,97,121,112,97,117,115,101,0);
          let orientation9 = 3.0;
         moviesC.set(`${membership9}`, (overlayQ == String.fromCharCode(57,0) ? membership9 : overlayQ.length));
         starT += `${parseInt(`${group6}`)}`;
         entryX = `${parseInt(`${group6}`)}`;
         orientation9 += parseInt(`${group6}`);
         if (flyerv) {
            break;
         }
      } while (flyerv && (moviesC.get(`${membership9}`) == null));
      if (2 <= (1 >> (Math.min(2, Math.abs(moviesC.size)))) || 1 <= (moviesC.size >> (Math.min(Math.abs(1), 1)))) {
         membership9 -= membership9 ^ moviesC.size;
      }
      let pointb = membership9 <= 7826831;
      do {
          let teamS = String.fromCharCode(98,95,54,55,95,105,100,101,110,116,105,116,121,0);
          let areaT = true;
          let themea: Array<any> = [195, 369, 278];
          let darkl: Array<any> = [76, 442, 388];
         membership9 *= membership9;
         teamS += `${(2 / (Math.max(1, (areaT ? 5 : 4))))}`;
         areaT = (darkl.length - themea.length) == 60;
         themea.push(teamS.length);
         darkl = [teamS.length];
         if (pointb) {
            break;
         }
      } while ((3 > (moviesC.size / (Math.max(1, 6))) || (membership9 / 1) > 4) && pointb);
      while (moviesC.get(`${membership9}`) != null) {
          let adultK = String.fromCharCode(112,95,50,49,95,119,97,107,101,0);
          let small6 = 4;
          let termsu = 4.0;
          let googleW = 2.0;
          let gpayn = String.fromCharCode(119,95,57,54,95,121,117,118,112,99,0);
         membership9 |= 1;
         adultK += `${small6 % 1}`;
         small6 <<= Math.min(4, Math.abs(small6));
         termsu += parseFloat(`${gpayn.length >> (Math.min(Math.abs(2), 2))}`);
         googleW -= gpayn.length & adultK.length;
         break;
      }
      configureY *= parseInt(`${pingY}`) & 3;
      blackliste += orangeZ + 2;
   while (1.71 < blackliste) {
       let modelW = 5.0;
       let entryR = 1;
       let ncopy__P: Map<any, any> = new Map([[String.fromCharCode(114,108,111,116,116,105,101,95,114,95,57,0),true ], [String.fromCharCode(109,98,98,108,111,99,107,95,99,95,49,56,0),false ], [String.fromCharCode(97,95,53,50,95,112,105,120,100,101,115,99,0),false ]]);
          let selectedY: Map<any, any> = new Map([[String.fromCharCode(112,95,57,56,95,106,105,110,99,108,117,100,101,0),279], [String.fromCharCode(111,114,105,103,95,108,95,55,55,0),763]]);
         ncopy__P.set(`${modelW}`, parseInt(`${modelW}`) ^ 2);
         selectedY.set(`${selectedY.size}`, selectedY.size % 3);
      orangeZ >>= Math.min(3, Math.abs(3 & parseInt(`${pingY}`)));
      break;
   }
      minivodA += parseFloat(`${parseInt(`${sentrye}`)}`);
   if ((5.31 - configureY) < 5.8) {
      moduleX += `${2 & moduleX.length}`;
   }

    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
       let anytimeu = 0.0;
    let eighteeni = 4;
    let promotion9 = 1;
    let playlisth = String.fromCharCode(99,95,52,57,95,102,105,108,101,115,121,115,116,101,109,0);
    let appleb = 2.0;
    let chinaH = 4.0;
    let containerL = 5.0;
    let dialogZ: Array<any> = [755, 153, 401];
    let referrerD = String.fromCharCode(108,95,53,95,109,98,103,114,97,112,104,0);
    let vietnam3 = 2;
      eighteeni ^= parseInt(`${containerL}`) * parseInt(`${appleb}`);
      eighteeni >>= Math.min(2, Math.abs(eighteeni / 1));

    if (isBodanRef.current) {

      promotion9 %= Math.max(2 & promotion9, 3);
   while (5 <= promotion9) {
      anytimeu -= (playlisth == String.fromCharCode(98,0) ? promotion9 : playlisth.length);
      break;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   while ((appleb / (Math.max(1, anytimeu))) > 1.34) {
      appleb /= Math.max(parseFloat(`${dialogZ.length << (Math.min(2, Math.abs(parseInt(`${appleb}`))))}`), 2);
      break;
   }
   for (let z = 0; z < 3; z++) {
       let apple5: Array<any> = [String.fromCharCode(97,114,103,95,48,95,51,55,0), String.fromCharCode(119,117,110,100,101,102,95,100,95,57,54,0)];
       let footballa = 2.0;
       let episodesW: Map<any, any> = new Map([[String.fromCharCode(105,109,97,103,101,121,117,118,99,111,110,102,105,103,95,119,95,57,56,0),String.fromCharCode(109,95,49,95,115,105,103,110,101,100,0)], [String.fromCharCode(97,95,50,51,95,114,101,112,117,98,108,105,115,104,0),String.fromCharCode(109,95,55,57,95,100,101,99,111,117,112,108,101,0)], [String.fromCharCode(115,116,114,101,97,109,115,95,52,95,53,57,0),String.fromCharCode(119,105,102,105,95,102,95,49,56,0)]]);
         footballa -= 1;
      for (let q = 0; q < 1; q++) {
          let routerj = 5.0;
          let readR = String.fromCharCode(102,97,99,116,111,114,121,95,52,95,57,0);
          let indexd = String.fromCharCode(115,97,102,97,114,121,95,107,95,54,0);
          let grayl = String.fromCharCode(97,95,52,54,95,99,117,115,116,111,109,0);
         episodesW = new Map([[`${episodesW.size}`, apple5.length]]);
         routerj += parseFloat(`${indexd.length >> (Math.min(Math.abs(2), 2))}`);
         readR = `${parseInt(`${routerj}`) / (Math.max(2, 9))}`;
         indexd = `${readR.length * indexd.length}`;
         grayl += "1";
      }
         footballa *= 1;
         episodesW = new Map([[`${episodesW.size}`, 2 >> (Math.min(3, Math.abs(parseInt(`${footballa}`))))]]);
          let loadingV: Map<any, any> = new Map([[String.fromCharCode(101,114,114,111,114,95,102,95,55,49,0),411], [String.fromCharCode(103,95,52,57,95,102,108,105,99,0),497], [String.fromCharCode(111,95,51,49,95,108,108,118,105,100,100,115,112,0),821]]);
          let verticall = true;
         apple5 = [episodesW.size];
         loadingV.set(`${verticall}`, (loadingV.size - (verticall ? 2 : 5)));
         apple5.push(2 >> (Math.min(Math.abs(parseInt(`${footballa}`)), 1)));
         apple5 = [apple5.length];
      let vertical4 = episodesW.size >= 5846569;
      do {
          let reportX = 0;
          let episodesp = 2.0;
          let gray0 = String.fromCharCode(98,105,111,109,101,116,114,105,99,95,53,95,53,54,0);
          let umengq = 2.0;
         episodesW = new Map([[gray0, gray0.length]]);
         reportX |= parseInt(`${umengq}`);
         episodesp -= parseFloat(`${reportX / (Math.max(7, parseInt(`${episodesp}`)))}`);
         if (vertical4) {
            break;
         }
      } while (vertical4 && (2 <= (episodesW.size >> (Math.min(Math.abs(4), 1))) && (parseInt(`${footballa}`) - episodesW.size) <= 4));
      if (2 >= (apple5.length * 2)) {
         footballa -= episodesW.size;
      }
      dialogZ.push(3);
   }
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   for (let d = 0; d < 1; d++) {
       let notificationG = String.fromCharCode(109,101,114,103,101,114,95,112,95,51,51,0);
       let inviteh = 1.0;
       let yingP = String.fromCharCode(115,101,108,101,99,116,97,98,108,101,95,105,95,49,49,0);
         inviteh -= (notificationG == String.fromCharCode(72,0) ? notificationG.length : parseInt(`${inviteh}`));
         inviteh -= notificationG.length % (Math.max(2, 6));
          let expandX: Array<any> = [484, 618, 585];
          let verticals = String.fromCharCode(121,95,57,54,95,114,111,102,105,108,101,0);
         yingP += `${notificationG.length | 3}`;
         expandX = [expandX.length >> (Math.min(Math.abs(3), 3))];
         verticals += "1";
          let agreementN: Array<any> = [90, 613];
          let checkboxb: Map<any, any> = new Map([[String.fromCharCode(106,95,53,51,95,111,112,116,105,109,105,115,116,105,99,0),269], [String.fromCharCode(99,95,55,56,95,100,105,109,109,101,100,0),404]]);
         notificationG += `${parseInt(`${inviteh}`) % (Math.max(yingP.length, 2))}`;
         agreementN = [agreementN.length / 1];
         checkboxb.set(`${agreementN.length}`, checkboxb.size * 1);
      let completee = inviteh >= 9671255.0;
      do {
         inviteh *= 1 & notificationG.length;
         if (completee) {
            break;
         }
      } while ((1.36 < (inviteh - 1.94) && 1.94 < (notificationG.length - inviteh)) && completee);
      while (!notificationG.endsWith(yingP)) {
         yingP += `${parseInt(`${inviteh}`) % 3}`;
         break;
      }
          let topicY = String.fromCharCode(109,95,52,48,95,116,111,110,0);
          let controlsb = String.fromCharCode(110,95,56,56,95,114,101,116,114,105,101,114,0);
         yingP = `${notificationG.length}`;
         topicY += `${topicY.length / (Math.max(7, controlsb.length))}`;
         controlsb += `${2 & controlsb.length}`;
      for (let q = 0; q < 1; q++) {
          let filterQ = 0;
          let profileV = true;
         notificationG += "3";
         filterQ |= filterQ;
         profileV = !profileV;
      }
      for (let b = 0; b < 2; b++) {
         yingP = `${(String.fromCharCode(120,0) == yingP ? yingP.length : notificationG.length)}`;
      }
      chinaH *= parseInt(`${containerL}`) & eighteeni;
   }
   while ((3 + appleb) == 1.19) {
       let guiden = 1;
       let searchbarx = 3.0;
       let stepY = String.fromCharCode(97,95,54,55,95,115,99,114,111,108,108,101,114,0);
      let lighte = String.fromCharCode(99,120,95,109,51,119,51,118,100,0) == stepY;
      do {
         stepY += `${2 - parseInt(`${searchbarx}`)}`;
         if (lighte) {
            break;
         }
      } while (((searchbarx * stepY.length) >= 2.51) && lighte);
          let bufferw = 4;
          let goalm = 3.0;
          let sortm: Array<any> = [String.fromCharCode(115,105,103,110,117,109,95,57,95,57,49,0), String.fromCharCode(122,108,105,98,112,114,105,109,101,95,108,95,55,56,0)];
         searchbarx *= parseInt(`${searchbarx}`);
         bufferw <<= Math.min(4, sortm.length);
         goalm /= Math.max(3, sortm.length - 2);
         stepY += `${stepY.length * guiden}`;
          let comment1: Map<any, any> = new Map([[String.fromCharCode(106,95,56,57,95,110,111,114,109,97,108,0),605], [String.fromCharCode(108,95,56,52,95,118,101,99,116,111,114,100,0),274]]);
         guiden *= 1 - comment1.size;
      while ((1 / (Math.max(4, guiden))) > 1) {
         guiden |= stepY.length / 1;
         break;
      }
      while ((searchbarx - 5.41) > 2.70) {
         guiden %= Math.max(3, parseInt(`${searchbarx}`) - stepY.length);
         break;
      }
      for (let j = 0; j < 2; j++) {
         searchbarx /= Math.max(2 | stepY.length, 4);
      }
       let halfD = 0.0;
       let membershipJ = 3.0;
          let active9 = 5.0;
         searchbarx -= 3 + stepY.length;
         active9 -= 1 << (Math.min(Math.abs(parseInt(`${active9}`)), 3));
      containerL -= parseFloat(`${parseInt(`${containerL}`) + 3}`);
      break;
   }

      

   while ((1 / (Math.max(10, eighteeni))) == 3 || 3 == (1 / (Math.max(3, promotion9)))) {
      promotion9 *= vietnam3;
      break;
   }
   if (1.75 >= anytimeu) {
      dialogZ.push(parseInt(`${appleb}`) ^ vietnam3);
   }
      umb_center_carousel.watchAnytimePlaylistClicksAnalytics();
      
    } else {

   for (let x = 0; x < 3; x++) {
      containerL /= Math.max(1, parseFloat(`${dialogZ.length - 1}`));
   }
      referrerD = `${parseInt(`${anytimeu}`)}`;
      dispatch(playVod(currentVod.mini_video_vod));

      containerL += parseFloat(`${playlisth.length}`);
   while ((promotion9 - parseInt(`${appleb}`)) >= 2 && (appleb - parseFloat(`${promotion9}`)) >= 2.59) {
      appleb /= Math.max(parseFloat(`${parseInt(`${chinaH}`) / (Math.max(5, parseInt(`${containerL}`)))}`), 5);
      break;
   }
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

   while (containerL == parseFloat(`${dialogZ.length}`)) {
       let calendari = String.fromCharCode(114,101,100,117,99,101,100,95,104,95,53,48,0);
       let brightness4 = String.fromCharCode(100,95,51,56,95,117,112,97,116,101,100,0);
       let activep: Array<any> = [231, 695, 664];
       let tickedc: Array<any> = [673, 945, 838];
      if (!brightness4.startsWith(`${tickedc.length}`)) {
          let internetf = String.fromCharCode(119,95,53,53,95,99,114,108,102,0);
         tickedc = [(String.fromCharCode(53,0) == brightness4 ? calendari.length : brightness4.length)];
         internetf += `${(internetf == String.fromCharCode(103,0) ? internetf.length : internetf.length)}`;
      }
      if ((activep.length - 1) > 2 && (activep.length - 1) > 1) {
          let n_image9 = 5.0;
          let auto_kuj = String.fromCharCode(105,116,120,102,109,95,115,95,49,52,0);
          let minimize7 = String.fromCharCode(108,105,98,114,115,118,103,95,51,95,53,53,0);
         activep = [minimize7.length ^ 3];
         n_image9 *= parseFloat(`${auto_kuj.length * 2}`);
         auto_kuj += `${parseInt(`${n_image9}`)}`;
         minimize7 = `${1 << (Math.min(1, auto_kuj.length))}`;
      }
         calendari += "2";
       let relatedr = 2.0;
         activep = [2];
      dialogZ = [eighteeni << (Math.min(Math.abs(parseInt(`${chinaH}`)), 3))];
      break;
   }
      referrerD = `${playlisth.length + 1}`;

      

       let brightnesss = String.fromCharCode(104,111,115,116,110,97,109,101,95,116,95,56,52,0);
      while (brightnesss.length > 1) {
         brightnesss += `${brightnesss.length - 1}`;
         break;
      }
       let humidityl = 5;
       let footballg = 0;
      if ((humidityl & 4) == 1 || 5 == (4 & brightnesss.length)) {
         humidityl += footballg;
      }
      referrerD += `${parseInt(`${containerL}`)}`;
      dialogZ = [dialogZ.length];
      umb_center_carousel.watchAnytimeVideoClicksAnalytics();
      
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
       let relatedU = 3.0;
    let sinav = 0.0;
    let disconnectedx: Array<any> = [352, 595, 112];
    let bodana: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,101,114,115,95,111,95,55,48,0),359], [String.fromCharCode(115,117,98,115,99,114,105,112,116,95,99,95,51,0),823]]);
    let resendi = String.fromCharCode(119,104,116,120,95,112,95,55,53,0);
    let moreQ = String.fromCharCode(109,108,111,99,107,95,112,95,52,49,0);
    let gpayr = 4.0;
    let long_k8: Map<any, any> = new Map([[String.fromCharCode(100,101,110,111,109,95,99,95,49,48,0),String.fromCharCode(99,111,108,108,97,112,115,101,95,112,95,52,53,0)], [String.fromCharCode(115,105,110,113,98,95,52,95,54,52,0),String.fromCharCode(120,115,117,98,95,120,95,57,49,0)], [String.fromCharCode(97,100,111,98,101,95,116,95,57,55,0),String.fromCharCode(114,97,103,103,97,98,108,101,95,113,95,49,56,0)]]);
    let tick2 = String.fromCharCode(98,117,110,100,108,101,115,95,109,95,51,0);
    let nativec = 0.0;
      gpayr /= Math.max(parseFloat(`${disconnectedx.length | moreQ.length}`), 2);
       let mapping8: Map<any, any> = new Map([[String.fromCharCode(100,95,53,49,95,108,97,115,116,109,98,117,102,0),199], [String.fromCharCode(102,95,54,50,95,101,110,99,111,100,101,115,0),226], [String.fromCharCode(113,95,56,95,114,103,101,110,0),957]]);
      while (3 == (mapping8.size % (Math.max(5, 8))) && (mapping8.size % (Math.max(4, mapping8.size))) == 5) {
         mapping8.set(`${mapping8.size}`, 3);
         break;
      }
         mapping8 = new Map([[`${mapping8.size}`, mapping8.size * 1]]);
          let untick7 = 4.0;
          let smallj = String.fromCharCode(97,116,116,114,115,95,102,95,50,53,0);
          let saveh = String.fromCharCode(99,111,109,112,97,116,105,98,108,101,95,116,95,52,50,0);
         mapping8 = new Map([[`${mapping8.size}`, mapping8.size]]);
         untick7 -= saveh.length;
         smallj += `${(smallj == String.fromCharCode(97,0) ? smallj.length : parseInt(`${untick7}`))}`;
         saveh = `${(String.fromCharCode(87,0) == saveh ? parseInt(`${untick7}`) : saveh.length)}`;
      disconnectedx.push(bodana.size);
   if (2.53 >= gpayr) {
       let sound1 = 0.0;
       let mappingC = 2.0;
       let default_wkQ = true;
       let vietnamK: Map<any, any> = new Map([[String.fromCharCode(115,95,54,56,95,112,117,116,115,0),String.fromCharCode(120,95,51,56,95,101,109,117,108,97,116,101,100,0)], [String.fromCharCode(104,95,56,50,95,115,105,108,101,110,116,0),String.fromCharCode(115,95,52,95,111,102,102,101,114,101,100,0)]]);
       let telegramD = true;
      let singaporex = default_wkQ ? !default_wkQ : default_wkQ;
      do {
         default_wkQ = vietnamK.size > 91;
         if (singaporex) {
            break;
         }
      } while (singaporex && (default_wkQ && (vietnamK.size % 3) > 5));
         vietnamK.set(`${mappingC}`, parseInt(`${mappingC}`));
         default_wkQ = parseInt(`${mappingC}`) >= vietnamK.size;
      if (1.80 == sound1) {
          let singlei = true;
          let uploada = String.fromCharCode(113,95,57,50,95,115,117,98,116,114,97,99,116,111,114,0);
          let championI = 1.0;
         sound1 += parseFloat(`${parseInt(`${mappingC}`)}`);
         singlei = !singlei && championI <= 14.24;
         uploada += `${((singlei ? 2 : 1) / (Math.max(7, parseInt(`${championI}`))))}`;
      }
      for (let r = 0; r < 1; r++) {
          let profile4: Array<any> = [String.fromCharCode(115,101,110,100,95,55,95,56,57,0), String.fromCharCode(119,95,53,50,95,118,105,101,119,0)];
         mappingC += parseFloat(`${profile4.length & 1}`);
      }
         mappingC -= parseFloat(`${parseInt(`${sound1}`) / 3}`);
      while (!telegramD) {
          let floatingP = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,119,95,51,53,0);
          let signinupR = String.fromCharCode(97,95,51,52,95,99,105,112,104,101,114,98,121,110,97,109,101,0);
          let readj: Array<any> = [String.fromCharCode(101,95,53,51,95,114,101,109,111,116,101,108,121,0), String.fromCharCode(113,95,49,48,95,115,101,113,117,101,110,116,105,97,108,0)];
          let nalyticsW = 3.0;
         mappingC /= Math.max(parseFloat(`${1 / (Math.max(parseInt(`${mappingC}`), 5))}`), 4);
         floatingP += `${1 - parseInt(`${nalyticsW}`)}`;
         signinupR += `${readj.length >> (Math.min(Math.abs(2), 5))}`;
         readj.push(2);
         nalyticsW *= readj.length;
         break;
      }
      let hookg = telegramD ? !telegramD : telegramD;
      do {
          let agreementj = 1;
          let less0: Map<any, any> = new Map([[String.fromCharCode(120,106,112,101,103,95,51,95,55,50,0),390], [String.fromCharCode(104,95,54,53,0),668]]);
          let configureb = String.fromCharCode(99,95,51,48,95,97,109,101,114,97,0);
          let catagorye = String.fromCharCode(103,95,56,56,95,117,110,119,105,110,100,0);
         telegramD = !configureb.includes(`${sound1}`);
         agreementj -= 3 & less0.size;
         less0.set(`${agreementj}`, less0.size / (Math.max(1, 10)));
         configureb = `${(String.fromCharCode(88,0) == catagorye ? catagorye.length : less0.size)}`;
         if (hookg) {
            break;
         }
      } while ((default_wkQ) && hookg);
       let modelsB: Map<any, any> = new Map([[String.fromCharCode(107,95,55,55,95,117,110,99,111,109,112,97,99,116,0),String.fromCharCode(112,95,52,48,95,115,111,117,114,99,101,115,0)], [String.fromCharCode(110,95,57,56,95,105,110,100,101,120,0),String.fromCharCode(121,95,55,95,114,97,115,116,101,114,105,122,101,115,0)], [String.fromCharCode(112,114,111,116,111,99,111,108,115,95,97,95,54,55,0),String.fromCharCode(103,114,101,101,100,121,95,55,95,53,51,0)]]);
       let helpera: Map<any, any> = new Map([[String.fromCharCode(97,114,109,99,97,112,95,49,95,53,52,0),false ], [String.fromCharCode(112,95,50,54,95,112,104,105,0),false ], [String.fromCharCode(120,114,117,110,95,99,95,51,53,0),false ]]);
       let overK = 1;
       let dialogK = 0;
       let cornerw = String.fromCharCode(98,95,49,55,95,115,109,105,109,101,0);
       let customn = String.fromCharCode(103,95,57,50,95,98,97,108,97,110,99,101,115,0);
         sound1 *= (parseFloat(`${overK - (telegramD ? 4 : 3)}`));
       let acceptede: Array<any> = [452, 953, 936];
         vietnamK = new Map([[`${acceptede.length}`, acceptede.length]]);
         dialogK *= overK;
      moreQ += `${parseInt(`${relatedU}`)}`;
   }
   let orangeK = gpayr <= 6901363.0;
   do {
      gpayr *= parseFloat(`${parseInt(`${gpayr}`)}`);
      if (orangeK) {
         break;
      }
   } while (orangeK && (disconnectedx.includes(gpayr)));
   let submita = 7739484.0 <= gpayr;
   do {
      gpayr += parseFloat(`${long_k8.size}`);
      if (submita) {
         break;
      }
   } while (submita && (4.64 == (2.85 * sinav) || (gpayr * sinav) == 2.85));
   if (5.94 >= (sinav * bodana.size)) {
      bodana.set(resendi, disconnectedx.length);
   }
   let tumbnail4 = tick2 == String.fromCharCode(117,107,97,100,0);
   do {
       let malaysia2 = String.fromCharCode(114,97,112,105,100,95,102,95,53,48,0);
       let overP = String.fromCharCode(98,95,51,48,95,112,98,107,100,102,0);
         malaysia2 = `${overP.length % (Math.max(3, 7))}`;
      if (overP == malaysia2) {
          let right8: Map<any, any> = new Map([[String.fromCharCode(115,95,53,50,95,111,117,116,98,111,120,0),34], [String.fromCharCode(99,95,49,48,48,95,114,101,112,108,105,101,115,0),99], [String.fromCharCode(116,95,56,52,95,115,117,99,99,101,115,115,99,98,0),198]]);
          let sporth: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,109,101,115,95,55,95,56,57,0),718], [String.fromCharCode(97,114,103,120,105,95,101,95,57,57,0),450]]);
          let viewer4: Array<any> = [42, 555, 969];
          let googleT = String.fromCharCode(98,95,56,54,95,97,100,100,102,0);
          let nextJ: Map<any, any> = new Map([[String.fromCharCode(100,95,51,55,95,105,110,118,105,115,105,98,108,101,0),665], [String.fromCharCode(102,109,97,100,100,95,116,95,49,56,0),189], [String.fromCharCode(101,120,112,111,114,116,101,100,95,112,95,56,52,0),394]]);
         malaysia2 += `${sporth.size}`;
         right8.set(`${googleT}`, (String.fromCharCode(53,0) == googleT ? right8.size : googleT.length));
         sporth.set(googleT, googleT.length - viewer4.length);
         viewer4.push(2);
         nextJ.set(`${googleT}`, 3);
      }
       let renewf = true;
       let casting4 = true;
         renewf = !casting4;
          let canvasE = 2.0;
          let abouti = true;
         casting4 = !casting4 && malaysia2.length == 34;
         canvasE *= parseInt(`${canvasE}`) + 2;
         abouti = !abouti;
       let condensedo = 0.0;
       let expandC = 0.0;
      tick2 = `${(overP == String.fromCharCode(72,0) ? parseInt(`${sinav}`) : overP.length)}`;
      if (tumbnail4) {
         break;
      }
   } while (((tick2.length - 5) < 3) && tumbnail4);
   while (long_k8.size >= bodana.size) {
       let clock4 = 0;
       let trophyy = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,52,95,53,57,0);
       let internetn = false;
       let faviconS = false;
         internetn = faviconS;
          let backgroundu: Map<any, any> = new Map([[String.fromCharCode(103,95,49,56,95,115,101,110,116,0),186], [String.fromCharCode(97,108,112,104,97,108,101,115,115,95,102,95,57,54,0),647], [String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,56,95,56,57,0),121]]);
         clock4 %= Math.max(clock4, 2);
         backgroundu.set(`${backgroundu.size}`, 1 << (Math.min(5, Math.abs(backgroundu.size))));
      for (let l = 0; l < 3; l++) {
          let castf = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,122,95,50,53,0);
          let entry2 = 5.0;
          let googleI = 0.0;
          let feedback_ = String.fromCharCode(104,112,105,99,95,57,95,53,53,0);
          let analyticH = false;
         clock4 <<= Math.min(1, Math.abs(parseInt(`${googleI}`)));
         castf += `${(feedback_ == String.fromCharCode(106,0) ? feedback_.length : parseInt(`${entry2}`))}`;
         entry2 /= Math.max(parseFloat(`${parseInt(`${entry2}`) / 3}`), 2);
         googleI *= parseFloat(`${parseInt(`${entry2}`)}`);
         analyticH = String.fromCharCode(122,0) == feedback_;
      }
         internetn = trophyy.startsWith(`${faviconS}`);
      while (trophyy.includes(`${faviconS}`)) {
          let emoji6 = String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,54,95,53,56,0);
          let bootsplashS: Map<any, any> = new Map([[String.fromCharCode(116,95,52,51,95,109,111,114,112,104,101,100,0),false ], [String.fromCharCode(102,108,105,99,95,104,95,55,52,0),false ]]);
          let friendsN = false;
          let temperaturep = String.fromCharCode(109,95,55,49,95,119,105,108,100,99,97,114,100,0);
         trophyy = `${(trophyy.length * (internetn ? 2 : 3))}`;
         emoji6 = `${temperaturep.length}`;
         bootsplashS = new Map([[`${bootsplashS.size}`, 1 & bootsplashS.size]]);
         friendsN = 81 <= emoji6.length && 81 <= bootsplashS.size;
         temperaturep += `${temperaturep.length}`;
         break;
      }
          let liveV = String.fromCharCode(106,95,50,51,95,108,105,98,115,104,105,110,101,0);
          let guide5 = 0.0;
          let actionL = 1;
         clock4 &= 3;
         liveV += `${actionL % (Math.max(parseInt(`${guide5}`), 6))}`;
         guide5 *= parseFloat(`${1 / (Math.max(4, parseInt(`${guide5}`)))}`);
         actionL -= actionL;
      while (!internetn) {
         faviconS = !internetn;
         break;
      }
         internetn = !internetn;
         trophyy += `${clock4 * 1}`;
         internetn = trophyy == String.fromCharCode(51,0) && 85 < clock4;
          let viewerS = String.fromCharCode(119,95,51,50,95,115,108,97,115,104,105,110,103,0);
          let otherw = false;
          let hongkongo: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,57,95,49,55,0),true ], [String.fromCharCode(102,111,114,101,105,103,110,95,104,95,54,54,0),true ], [String.fromCharCode(111,110,101,111,102,115,95,103,95,54,53,0),false ]]);
         internetn = hongkongo.get(`${otherw}`) != null;
         viewerS = `${(String.fromCharCode(80,0) == viewerS ? viewerS.length : viewerS.length)}`;
         otherw = 99 >= viewerS.length;
         clock4 /= Math.max(5, 1 % (Math.max(3, trophyy.length)));
      long_k8.set(moreQ, 3);
      break;
   }
      moreQ += `${long_k8.size}`;
   if (2.88 < (1.97 + gpayr) && 1 < (disconnectedx.length % (Math.max(1, 2)))) {
      disconnectedx = [tick2.length % (Math.max(1, 6))];
   }
   let connectionJ = 9343677.0 >= sinav;
   do {
       let entry0 = 3.0;
       let chinaf = 2.0;
       let shrink5 = String.fromCharCode(105,109,112,114,105,110,116,95,122,95,56,55,0);
          let logouti = String.fromCharCode(104,95,57,48,95,98,116,110,99,108,105,99,107,0);
         chinaf /= Math.max(3, parseFloat(`${logouti.length ^ shrink5.length}`));
          let groupP = 3.0;
         shrink5 += "1";
         groupP -= parseInt(`${groupP}`);
          let incidentq = String.fromCharCode(109,95,52,50,95,97,99,111,108,111,114,115,0);
          let actionsQ = String.fromCharCode(117,95,57,54,95,107,101,121,115,112,101,99,0);
          let pressure1 = String.fromCharCode(117,95,54,55,95,111,97,101,112,0);
         chinaf /= Math.max(parseFloat(`${1 - parseInt(`${entry0}`)}`), 3);
         incidentq = `${incidentq.length}`;
         actionsQ += `${(pressure1 == String.fromCharCode(106,0) ? incidentq.length : pressure1.length)}`;
         chinaf *= parseFloat(`${parseInt(`${chinaf}`) / 2}`);
         chinaf += parseFloat(`${parseInt(`${entry0}`) << (Math.min(4, Math.abs(2)))}`);
      for (let a = 0; a < 2; a++) {
         shrink5 = `${parseInt(`${chinaf}`) >> (Math.min(Math.abs(parseInt(`${entry0}`)), 4))}`;
      }
          let firebase6 = 5;
         entry0 += (shrink5 == String.fromCharCode(48,0) ? parseInt(`${chinaf}`) : shrink5.length);
         firebase6 <<= Math.min(4, Math.abs(firebase6));
       let commonx = false;
          let xvod1 = 2;
         chinaf /= Math.max((parseFloat(`${shrink5 == String.fromCharCode(52,0) ? shrink5.length : (commonx ? 2 : 5)}`)), 2);
         xvod1 <<= Math.min(Math.abs(xvod1 % (Math.max(1, xvod1))), 2);
      sinav /= Math.max(parseInt(`${chinaf}`), 3);
      if (connectionJ) {
         break;
      }
   } while (connectionJ && (5.25 <= (gpayr / 5.98) && (sinav / (Math.max(8, gpayr))) <= 5.98));
      gpayr /= Math.max(2, parseFloat(`${disconnectedx.length}`));
      bodana = new Map([[`${disconnectedx.length}`, disconnectedx.length | 2]]);
   for (let z = 0; z < 2; z++) {
      tick2 += `${2 & parseInt(`${relatedU}`)}`;
   }
   let time_xo = 6737151 <= resendi.length;
   do {
       let incidentJ = String.fromCharCode(102,108,105,112,95,111,95,54,56,0);
      if (incidentJ.length > incidentJ.length) {
         incidentJ += `${incidentJ.length << (Math.min(incidentJ.length, 5))}`;
      }
       let miniZ = String.fromCharCode(106,95,54,57,95,109,111,117,115,0);
       let views2 = String.fromCharCode(104,95,49,56,95,104,97,115,104,101,114,0);
      if (incidentJ.length <= 2) {
         miniZ += `${(String.fromCharCode(71,0) == views2 ? views2.length : incidentJ.length)}`;
      }
      resendi = `${parseInt(`${sinav}`) + disconnectedx.length}`;
      if (time_xo) {
         break;
      }
   } while (((sinav * resendi.length) < 2.89 && 5.3 < (sinav * 2.89)) && time_xo);
      disconnectedx = [3];

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
       let settingo = String.fromCharCode(109,95,49,48,48,95,97,97,99,101,110,99,100,115,112,0);
    let playf = 3.0;
    let stringJ = 5.0;
    let reporta = false;
    let userE: Array<any> = [String.fromCharCode(104,95,50,57,95,112,97,114,109,115,0), String.fromCharCode(100,95,49,52,95,99,111,109,112,97,114,101,0)];
    let applel: Map<any, any> = new Map([[String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,104,95,56,48,0),269], [String.fromCharCode(117,95,56,49,95,112,111,114,116,0),293]]);
    let tumbnailk = true;
    let crossJ = 4.0;
    let interstitial2 = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,50,95,53,52,0);
    let infoH = String.fromCharCode(102,95,49,95,107,105,116,116,121,0);
    let signinupK = String.fromCharCode(119,95,51,52,95,99,100,97,116,101,0);
    let temperatureF = String.fromCharCode(110,101,120,116,108,95,55,95,53,57,0);
    let profilez = 5.0;
    let forwardr: Array<any> = [201, 839, 765];
    let fieldX = String.fromCharCode(106,95,56,52,95,114,101,99,111,109,112,117,116,101,0);
   let networka = 6481194 >= applel.size;
   do {
      applel.set(`${playf}`, userE.length);
      if (networka) {
         break;
      }
   } while (networka && (1.39 <= (2.27 * crossJ)));
       let clockP = String.fromCharCode(103,95,52,49,95,101,110,100,105,110,103,0);
         clockP = `${2 / (Math.max(5, clockP.length))}`;
      if (clockP.includes(`${clockP.length}`)) {
         clockP = "1";
      }
          let selectO = 2.0;
         clockP = `${parseInt(`${selectO}`) - 2}`;
      infoH = `${parseInt(`${stringJ}`)}`;

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   if ((1 % (Math.max(4, userE.length))) == 4 || 1 == (parseInt(`${playf}`) / (Math.max(userE.length, 3)))) {
       let expands = String.fromCharCode(110,95,49,56,95,102,114,97,103,109,101,110,116,0);
       let nexti = String.fromCharCode(103,95,56,52,95,110,97,118,105,103,97,116,105,111,110,0);
       let roboto3 = String.fromCharCode(113,95,54,51,95,98,117,102,102,101,114,115,105,110,107,0);
         roboto3 = "1";
         expands += `${roboto3.length << (Math.min(1, nexti.length))}`;
         nexti = `${roboto3.length - expands.length}`;
       let eactx = 3;
      if (roboto3.startsWith(`${eactx}`)) {
         eactx ^= expands.length;
      }
         nexti += `${eactx - expands.length}`;
       let privacyC = 5.0;
      while (nexti == expands) {
         expands = `${expands.length >> (Math.min(Math.abs(1), 5))}`;
         break;
      }
      if (nexti != expands) {
          let sliderU = String.fromCharCode(102,114,101,101,95,111,95,50,51,0);
          let anews_ = String.fromCharCode(106,95,57,54,95,102,111,114,103,111,116,0);
          let nterstitialt = 4.0;
          let collectionG: Array<any> = [String.fromCharCode(103,95,54,48,95,115,113,114,116,110,101,103,0), String.fromCharCode(100,116,100,102,95,122,95,56,51,0)];
          let headerJ = 3.0;
         expands = `${anews_.length}`;
         sliderU += `${collectionG.length}`;
         anews_ += `${parseInt(`${nterstitialt}`)}`;
         nterstitialt /= Math.max(2, parseFloat(`${parseInt(`${headerJ}`) << (Math.min(sliderU.length, 3))}`));
         collectionG = [parseInt(`${headerJ}`)];
      }
      playf -= ((tumbnailk ? 2 : 2));
   }
   while (!tumbnailk) {
       let styleT = false;
       let scheduler = String.fromCharCode(117,95,50,48,95,105,110,116,101,114,112,114,101,116,0);
       let pageO = String.fromCharCode(121,95,55,56,95,100,118,98,116,120,116,0);
       let matha = String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,95,101,95,50,53,0);
         scheduler += `${scheduler.length}`;
       let moduleU: Array<any> = [String.fromCharCode(121,95,54,48,95,101,118,101,114,121,98,111,100,121,0), String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,115,95,51,55,0)];
         moduleU = [scheduler.length << (Math.min(Math.abs(3), 2))];
      for (let s = 0; s < 2; s++) {
          let fieldr = false;
          let yellowV = String.fromCharCode(118,95,57,50,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0);
          let next9 = true;
         matha = `${((next9 ? 1 : 1) & scheduler.length)}`;
         fieldr = !fieldr;
         yellowV += `${yellowV.length}`;
         next9 = fieldr;
      }
          let rulesD: Array<any> = [718, 803];
         scheduler += `${moduleU.length}`;
         rulesD = [rulesD.length / 1];
         scheduler += `${pageO.length * 2}`;
         scheduler = `${scheduler.length * 3}`;
      while (2 > matha.length || scheduler == String.fromCharCode(74,0)) {
          let anytimeU = String.fromCharCode(118,98,114,117,115,104,95,57,95,51,54,0);
          let gpayc: Map<any, any> = new Map([[String.fromCharCode(104,95,55,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0),152], [String.fromCharCode(99,95,57,48,0),317], [String.fromCharCode(108,105,115,116,101,110,105,110,103,95,115,95,53,51,0),49]]);
          let dangerU = 1;
          let banner0 = String.fromCharCode(98,97,99,107,112,116,114,95,109,95,54,48,0);
          let main_nw: Array<any> = [319, 391];
         scheduler += `${pageO.length & 2}`;
         anytimeU = `${main_nw.length & 3}`;
         gpayc = new Map([[anytimeU, (banner0 == String.fromCharCode(71,0) ? banner0.length : anytimeU.length)]]);
         dangerU += 3;
         main_nw = [1];
         break;
      }
         scheduler = `${pageO.length}`;
      let country0 = styleT ? !styleT : styleT;
      do {
         styleT = matha.length == pageO.length;
         if (country0) {
            break;
         }
      } while ((pageO.includes(`${styleT}`)) && country0);
      let actions3 = scheduler == String.fromCharCode(95,52,101,99,119,49,110,113,0);
      do {
         scheduler += `${matha.length}`;
         if (actions3) {
            break;
         }
      } while (actions3 && (2 > scheduler.length || !styleT));
      for (let g = 0; g < 3; g++) {
         styleT = scheduler.length >= 21;
      }
      tumbnailk = infoH == pageO;
      break;
   }
        

   while (!tumbnailk) {
      applel.set(`${playf}`, 2 * parseInt(`${playf}`));
      break;
   }
   for (let g = 0; g < 3; g++) {
       let targetF: Map<any, any> = new Map([[String.fromCharCode(99,95,53,57,95,116,99,112,0),String.fromCharCode(99,111,112,121,95,98,95,57,55,0)], [String.fromCharCode(104,95,53,57,95,111,112,101,110,115,101,97,0),String.fromCharCode(101,109,112,116,121,95,103,95,50,0)], [String.fromCharCode(117,95,51,49,95,105,100,99,116,114,111,119,0),String.fromCharCode(99,95,54,49,95,100,105,114,97,99,100,115,112,0)]]);
       let relatedT = false;
       let fastforwardV = 4.0;
       let rankR = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,53,95,50,0);
          let orientationk = String.fromCharCode(110,95,57,53,95,104,111,115,116,112,111,114,116,102,105,108,101,0);
          let gestureW = 4;
         rankR += `${targetF.size / 1}`;
         orientationk += `${gestureW}`;
         gestureW |= orientationk.length % 3;
      for (let x = 0; x < 1; x++) {
         relatedT = fastforwardV <= 38.24;
      }
      for (let v = 0; v < 2; v++) {
         relatedT = (99 > (rankR.length + (!relatedT ? rankR.length : 99)));
      }
       let singaporex = 3;
       let frame_ll = true;
      let pointY = relatedT ? !relatedT : relatedT;
      do {
         relatedT = fastforwardV > 30.31 || relatedT;
         if (pointY) {
            break;
         }
      } while (pointY && (rankR.endsWith(`${relatedT}`)));
      let buffere = 6066365 >= singaporex;
      do {
          let catalogN: Array<any> = [756, 18, 13];
         singaporex &= catalogN.length;
         if (buffere) {
            break;
         }
      } while (buffere && (!frame_ll));
       let reminderZ = 0;
       let mappingZ = 3;
      if (5 < (targetF.size / (Math.max(5, 5))) || 5 < (targetF.size / (Math.max(rankR.length, 10)))) {
         rankR += "3";
      }
      while (rankR.length >= mappingZ) {
         rankR = `${(reminderZ ^ (frame_ll ? 4 : 4))}`;
         break;
      }
         singaporex <<= Math.min(Math.abs(3 << (Math.min(Math.abs(parseInt(`${fastforwardV}`)), 1))), 5);
         fastforwardV -= (parseFloat(`${(frame_ll ? 4 : 5) % (Math.max(singaporex, 5))}`));
      applel = new Map([[`${applel.size}`, (applel.size + (tumbnailk ? 4 : 1))]]);
   }
        

       let downj = 5.0;
       let carousell: Map<any, any> = new Map([[String.fromCharCode(108,95,50,55,95,101,110,97,98,108,101,0),String.fromCharCode(113,95,51,53,95,118,101,114,105,102,105,99,97,116,105,111,110,0)], [String.fromCharCode(110,95,52,56,95,112,114,101,102,101,114,0),String.fromCharCode(99,95,57,52,95,105,110,116,101,114,99,101,112,116,111,114,0)]]);
       let routerU = 1.0;
         routerU /= Math.max(4, parseInt(`${routerU}`) << (Math.min(1, Math.abs(2))));
       let notificationJ = 3;
       let borderlessf = 2;
         routerU *= 3 * notificationJ;
      while (carousell.get(`${borderlessf}`) != null) {
         carousell.set(`${downj}`, carousell.size);
         break;
      }
         borderlessf %= Math.max(5, 1);
      if (4 < notificationJ) {
          let verticalM = String.fromCharCode(98,95,55,53,95,97,109,111,117,110,116,115,0);
          let private_vi = 0.0;
          let sportsH: Array<any> = [String.fromCharCode(106,95,54,56,95,118,105,115,105,98,108,105,116,121,0), String.fromCharCode(110,99,111,109,105,110,103,95,57,95,55,49,0)];
          let moreG = 2;
          let modulel: Array<any> = [723, 395];
         downj *= carousell.size % 3;
         verticalM += `${modulel.length + sportsH.length}`;
         private_vi += parseFloat(`${1}`);
         sportsH.push(modulel.length % 2);
         moreG *= 3 ^ modulel.length;
      }
          let diceU: Array<any> = [626, 894, 776];
          let h_positionn: Array<any> = [String.fromCharCode(102,95,51,56,95,111,112,116,105,109,105,115,109,0), String.fromCharCode(107,95,56,54,95,112,97,114,97,109,99,104,97,110,103,101,0), String.fromCharCode(108,95,53,49,95,98,111,111,115,116,101,100,0)];
          let downloaded2 = 3.0;
         downj += parseInt(`${downloaded2}`);
         diceU.push(3);
         h_positionn = [h_positionn.length & 1];
      for (let m = 0; m < 1; m++) {
         borderlessf ^= notificationJ | parseInt(`${routerU}`);
      }
      for (let t = 0; t < 1; t++) {
         routerU *= notificationJ;
      }
      playf += parseInt(`${crossJ}`);
   while (interstitial2.length > settingo.length) {
      interstitial2 += `${parseInt(`${crossJ}`) * interstitial2.length}`;
      break;
   }
        

   let previewS = playf <= 7817757.0;
   do {
      playf -= infoH.length / 3;
      if (previewS) {
         break;
      }
   } while (((3.74 + playf) >= 4.66 || 2 >= (parseInt(`${playf}`) + userE.length)) && previewS);
      reporta = stringJ <= 90.26;

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

      stringJ *= parseFloat(`${1}`);
   if (3 < settingo.length || !tumbnailk) {
       let homeC = String.fromCharCode(115,108,111,112,101,95,109,95,50,53,0);
       let sourcei = 5;
       let linkr = 2.0;
       let internetP: Map<any, any> = new Map([[String.fromCharCode(118,105,115,97,95,108,95,55,54,0),true ], [String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,101,95,54,0),false ], [String.fromCharCode(105,110,116,101,114,102,97,99,101,115,95,106,95,53,51,0),false ]]);
       let clubT = String.fromCharCode(108,95,57,53,95,102,108,117,115,104,105,110,103,0);
         linkr -= 2;
         linkr *= 3 | internetP.size;
         internetP = new Map([[`${sourcei}`, sourcei | parseInt(`${linkr}`)]]);
      while (3 == (4 >> (Math.min(5, homeC.length)))) {
         linkr -= internetP.size;
         break;
      }
       let readW = String.fromCharCode(112,95,55,52,95,108,111,99,97,108,0);
          let referrerz = 4.0;
          let casting4: Array<any> = [281, 568];
          let dialogU: Array<any> = [682, 250, 590];
         readW += `${1 ^ internetP.size}`;
         referrerz -= casting4.length;
         casting4.push(1 * casting4.length);
         dialogU.push(2);
          let schedule9 = false;
          let changew = String.fromCharCode(114,97,112,105,100,95,110,95,48,0);
         clubT = `${changew.length}`;
         schedule9 = schedule9 && !schedule9;
         changew = `${((schedule9 ? 5 : 2))}`;
          let main_wt = String.fromCharCode(112,95,54,49,95,99,97,108,99,0);
          let linkP = false;
         clubT = "2";
         main_wt = `${(String.fromCharCode(79,0) == main_wt ? (linkP ? 4 : 3) : main_wt.length)}`;
         linkP = (80 <= (main_wt.length | (!linkP ? main_wt.length : 80)));
          let expiredZ = 1;
          let ready = String.fromCharCode(104,95,55,53,95,109,117,108,115,117,98,0);
         sourcei *= (String.fromCharCode(76,0) == clubT ? clubT.length : parseInt(`${linkr}`));
         expiredZ += ready.length % 2;
         ready = `${ready.length}`;
      for (let v = 0; v < 1; v++) {
         homeC += `${readW.length >> (Math.min(3, clubT.length))}`;
      }
         readW = `${readW.length}`;
      for (let s = 0; s < 1; s++) {
         clubT += `${readW.length}`;
      }
      for (let w = 0; w < 1; w++) {
         linkr *= homeC.length % 3;
      }
      if (!readW.includes(`${linkr}`)) {
         linkr /= Math.max(1 >> (Math.min(3, homeC.length)), 1);
      }
         clubT = `${internetP.size * 1}`;
      tumbnailk = 13 < applel.size;
   }

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   if (userE.length == parseInt(`${stringJ}`)) {
      stringJ *= parseFloat(`${interstitial2.length}`);
   }
      infoH = `${userE.length << (Math.min(5, Math.abs(applel.size)))}`;


        if (fileExist) {

   for (let l = 0; l < 3; l++) {
       let promotionr: Array<any> = [639, 344, 288];
       let anner2: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,115,95,115,95,55,0),String.fromCharCode(113,95,52,54,95,105,110,103,114,101,115,115,0)], [String.fromCharCode(113,100,109,99,95,104,95,54,53,0),String.fromCharCode(114,101,115,121,110,99,95,113,95,50,56,0)]]);
       let downloadL: Map<any, any> = new Map([[String.fromCharCode(99,111,100,105,110,103,95,111,95,51,55,0),809], [String.fromCharCode(116,95,50,53,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0),442]]);
       let whistleX: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,99,104,117,110,107,101,100,0),312], [String.fromCharCode(107,95,55,53,95,100,105,115,112,0),942], [String.fromCharCode(102,95,53,56,95,116,101,109,112,108,97,116,101,100,0),379]]);
          let team6 = String.fromCharCode(109,101,116,97,108,95,102,95,57,52,0);
         anner2.set(`${promotionr.length}`, whistleX.size | 2);
         team6 = `${2 % (Math.max(5, team6.length))}`;
         whistleX.set(`${downloadL.size}`, 3);
      for (let s = 0; s < 3; s++) {
         anner2.set(`${whistleX.size}`, anner2.size + whistleX.size);
      }
      let policyf = whistleX.size >= 7676557;
      do {
         whistleX = new Map([[`${downloadL.size}`, 1]]);
         if (policyf) {
            break;
         }
      } while (policyf && (1 <= (4 << (Math.min(4, Math.abs(anner2.size)))) || (4 << (Math.min(5, Math.abs(whistleX.size)))) <= 4));
         whistleX.set(`${downloadL.size}`, downloadL.size ^ 2);
      for (let a = 0; a < 2; a++) {
         downloadL = new Map([[`${anner2.size}`, anner2.size - 2]]);
      }
      while ((4 ^ downloadL.size) <= 2 || (whistleX.size ^ 4) <= 5) {
         whistleX = new Map([[`${whistleX.size}`, anner2.size << (Math.min(Math.abs(3), 5))]]);
         break;
      }
      while ((5 >> (Math.min(5, Math.abs(anner2.size)))) == 5 || (anner2.size >> (Math.min(Math.abs(5), 4))) == 1) {
         promotionr.push(promotionr.length ^ 1);
         break;
      }
      for (let a = 0; a < 2; a++) {
          let back5 = 2.0;
          let watchQ = 0.0;
          let submit9 = 4;
          let inactived = 0;
          let expandi = String.fromCharCode(101,114,114,108,111,103,95,100,95,52,54,0);
         promotionr.push(parseInt(`${back5}`));
         back5 /= Math.max(parseInt(`${watchQ}`), 5);
         watchQ /= Math.max(5, parseFloat(`${inactived}`));
         submit9 += submit9 % 3;
         expandi += `${(expandi == String.fromCharCode(55,0) ? expandi.length : submit9)}`;
      }
      while ((4 ^ promotionr.length) > 5) {
         downloadL = new Map([[`${whistleX.size}`, 1]]);
         break;
      }
      while ((promotionr.length & 3) > 2 || (anner2.size & 3) > 1) {
         anner2.set(`${downloadL.size}`, anner2.size);
         break;
      }
          let whistlex = String.fromCharCode(121,95,52,57,95,97,110,105,109,97,108,115,0);
         promotionr.push(anner2.size + 3);
         whistlex = `${whistlex.length * 2}`;
      userE = [1];
   }
       let servicee = 4;
       let renew9 = String.fromCharCode(100,95,49,52,95,122,105,103,122,97,103,0);
       let notificationa: Array<any> = [926, 852, 805];
       let sortO = 5.0;
      for (let x = 0; x < 3; x++) {
          let matchesD = String.fromCharCode(99,98,115,110,105,100,95,103,95,54,50,0);
          let trashR = 0;
         servicee <<= Math.min(4, Math.abs(renew9.length * parseInt(`${sortO}`)));
         matchesD = "3";
         trashR *= trashR;
      }
       let sportsN: Array<any> = [172, 483];
       let awayD: Array<any> = [115, 333, 767];
         sortO *= parseFloat(`${sportsN.length}`);
      if ((sportsN.length * parseInt(`${sortO}`)) == 2 || 2 == (sportsN.length * parseInt(`${sortO}`))) {
          let update_x_ = String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,100,95,52,52,0);
         sportsN = [1 % (Math.max(10, awayD.length))];
         update_x_ += `${update_x_.length}`;
      }
      while (3 > (awayD.length - 1) || 1 > (awayD.length - renew9.length)) {
          let tumbnail6 = String.fromCharCode(108,95,51,54,95,99,109,112,97,100,100,114,0);
         awayD = [tumbnail6.length];
         break;
      }
          let malaysia6: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,114,105,99,116,95,108,95,54,54,0),true ], [String.fromCharCode(111,102,102,115,101,116,95,101,95,55,53,0),true ]]);
          let football1: Map<any, any> = new Map([[String.fromCharCode(118,95,50,51,95,110,111,116,105,102,105,101,100,0),String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,95,106,95,56,55,0)], [String.fromCharCode(107,95,55,53,95,105,115,109,108,0),String.fromCharCode(112,95,49,49,95,102,111,111,116,101,114,0)], [String.fromCharCode(98,97,99,107,112,116,114,95,52,95,57,53,0),String.fromCharCode(117,95,51,54,95,108,101,103,97,99,121,0)]]);
          let subsO = 1;
         awayD = [(String.fromCharCode(117,0) == renew9 ? awayD.length : renew9.length)];
         malaysia6 = new Map([[`${football1.size}`, football1.size]]);
         subsO &= 1;
      while (5 > renew9.length) {
          let time_ps: Array<any> = [String.fromCharCode(111,118,101,114,108,97,121,95,57,95,56,55,0), String.fromCharCode(97,118,102,105,108,116,101,114,95,117,95,51,51,0)];
          let pingk = String.fromCharCode(111,95,55,49,95,109,117,116,97,98,105,108,105,116,121,0);
          let searchbarv: Array<any> = [619, 196];
         renew9 += `${pingk.length}`;
         time_ps.push(2 * searchbarv.length);
         pingk += "1";
         searchbarv.push(time_ps.length + searchbarv.length);
         break;
      }
      if (!awayD.includes(servicee)) {
         awayD = [2 ^ awayD.length];
      }
      applel.set(settingo, parseInt(`${stringJ}`));
          const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

   for (let s = 0; s < 1; s++) {
      reporta = tumbnailk;
   }
   let analyticsQ = applel.size >= 5346615;
   do {
       let m_positionv = String.fromCharCode(105,95,49,56,95,105,112,111,108,0);
      if (m_positionv != m_positionv) {
          let animationh: Map<any, any> = new Map([[String.fromCharCode(108,95,51,54,95,98,108,117,114,0),false ], [String.fromCharCode(109,97,114,115,104,97,108,95,52,95,53,55,0),true ], [String.fromCharCode(114,101,103,105,115,116,101,114,95,53,95,55,54,0),true ]]);
          let redirecth: Map<any, any> = new Map([[String.fromCharCode(121,95,55,50,95,98,117,116,111,110,0),903], [String.fromCharCode(105,95,49,57,95,101,120,116,114,101,109,117,109,0),180], [String.fromCharCode(119,97,108,95,53,95,55,48,0),727]]);
          let detailsm = 1.0;
          let d_positionH = 3.0;
          let shootJ = String.fromCharCode(101,95,53,51,95,101,112,111,99,104,0);
         m_positionv = `${animationh.size}`;
         animationh = new Map([[shootJ, 3]]);
         redirecth = new Map([[`${d_positionH}`, parseInt(`${d_positionH}`)]]);
         detailsm /= Math.max(1, parseFloat(`${1}`));
         shootJ += `${parseInt(`${d_positionH}`)}`;
      }
      let photod = m_positionv.length >= 8811375;
      do {
          let analyticI = 1.0;
          let twitterG = String.fromCharCode(120,95,54,54,95,99,104,97,105,110,105,100,0);
          let chinai = 1.0;
          let giftK = 2;
         m_positionv += `${parseInt(`${chinai}`)}`;
         analyticI /= Math.max(4, 3);
         twitterG += `${parseInt(`${analyticI}`)}`;
         chinai /= Math.max((parseFloat(`${twitterG == String.fromCharCode(89,0) ? twitterG.length : giftK}`)), 5);
         giftK >>= Math.min(Math.abs(parseInt(`${analyticI}`)), 4);
         if (photod) {
            break;
         }
      } while (photod && (m_positionv == String.fromCharCode(113,0) && m_positionv == String.fromCharCode(74,0)));
         m_positionv = `${1 + m_positionv.length}`;
      applel.set(m_positionv, infoH.length * m_positionv.length);
      if (analyticsQ) {
         break;
      }
   } while ((2 < applel.size) && analyticsQ);
          

   let downloadD = 6254964 >= settingo.length;
   do {
      settingo = "3";
      if (downloadD) {
         break;
      }
   } while (downloadD && (!settingo.endsWith(interstitial2)));
   let searchbar5 = interstitial2.length <= 4973299;
   do {
      interstitial2 = "2";
      if (searchbar5) {
         break;
      }
   } while ((3 > infoH.length) && searchbar5);
          if (!fileIsEmpty) {

      stringJ /= Math.max((parseFloat(`${String.fromCharCode(75,0) == settingo ? parseInt(`${stringJ}`) : settingo.length}`)), 5);
   let philippinesf = 9576779 >= applel.size;
   do {
      applel = new Map([[`${tumbnailk}`, interstitial2.length]]);
      if (philippinesf) {
         break;
      }
   } while ((5 < (5 ^ applel.size) && applel.size < 5) && philippinesf);
            setMiniVodUrl(`${fileLocation}`);
          } else {

       let muted7: Array<any> = [852, 46, 9];
      if (2 <= (muted7.length & 1)) {
         muted7.push(2);
      }
      while (1 < (muted7.length & 3) || (3 & muted7.length) < 5) {
          let string6 = 2;
          let moreR = 3.0;
          let teamh = 4;
         muted7.push(teamh - 3);
         string6 |= parseInt(`${moreR}`);
         moreR -= parseInt(`${moreR}`);
         teamh /= Math.max(string6 % 3, 5);
         break;
      }
         muted7.push(3);
      playf /= Math.max(muted7.length, 1);
      infoH += `${applel.size >> (Math.min(infoH.length, 4))}`;
            

   let china5 = reporta ? !reporta : reporta;
   do {
       let anythink5 = String.fromCharCode(97,95,56,51,95,113,112,101,108,100,115,112,0);
       let sinaf: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,109,97,110,97,103,101,115,0),true ], [String.fromCharCode(100,95,55,51,95,115,117,98,115,116,114,97,99,116,101,100,0),false ], [String.fromCharCode(101,95,54,48,95,120,111,102,102,115,101,116,0),true ]]);
       let entryH = 5.0;
      if ((sinaf.size % (Math.max(4, anythink5.length))) < 5) {
          let awayO = String.fromCharCode(101,112,115,118,95,107,95,57,0);
         anythink5 += `${anythink5.length}`;
         awayO = `${awayO.length}`;
      }
         entryH -= (parseFloat(`${anythink5 == String.fromCharCode(76,0) ? parseInt(`${entryH}`) : anythink5.length}`));
         sinaf.set(`${entryH}`, parseInt(`${entryH}`));
          let floatingQ = 2;
         entryH /= Math.max(parseFloat(`${sinaf.size & 2}`), 3);
         floatingQ <<= Math.min(1, Math.abs(1));
         sinaf.set(`${entryH}`, anythink5.length & 2);
         sinaf = new Map([[`${sinaf.size}`, sinaf.size ^ 2]]);
         sinaf = new Map([[`${sinaf.size}`, (String.fromCharCode(84,0) == anythink5 ? sinaf.size : anythink5.length)]]);
      for (let d = 0; d < 2; d++) {
          let combineA = String.fromCharCode(102,95,57,52,95,98,114,105,101,102,108,121,0);
         anythink5 += "3";
         combineA = `${(combineA == String.fromCharCode(120,0) ? combineA.length : combineA.length)}`;
      }
         entryH /= Math.max(3, parseFloat(`${sinaf.size ^ anythink5.length}`));
      reporta = applel.size == 33;
      if (china5) {
         break;
      }
   } while ((!tumbnailk || reporta) && china5);
   let disconnectedV = signinupK == String.fromCharCode(56,115,119,95,102,118,0);
   do {
      signinupK += `${1 & userE.length}`;
      if (disconnectedV) {
         break;
      }
   } while ((2 < (signinupK.length ^ userE.length) || 2 < (signinupK.length ^ userE.length)) && disconnectedV);
            setMiniVodUrl(currentVod.mini_video_origin_video_url)
          }
        } else {

   while (reporta) {
      reporta = (parseFloat(`${userE.length}`) / (Math.max(5, stringJ))) < 73.85;
      break;
   }
   let readI = crossJ >= 7831697.0;
   do {
      crossJ /= Math.max(3, 3 + parseInt(`${playf}`));
      if (readI) {
         break;
      }
   } while ((tumbnailk || 4.39 > (5.63 / (Math.max(6, crossJ)))) && readI);
          

      temperatureF = `${applel.size}`;
      tumbnailk = reporta;
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
       let submiti = String.fromCharCode(102,111,99,117,115,101,100,95,101,95,49,50,0);
    let areaR = String.fromCharCode(110,112,114,111,98,101,95,112,95,54,55,0);
    let signinups: Map<any, any> = new Map([[String.fromCharCode(116,102,120,100,95,102,95,56,49,0),614], [String.fromCharCode(97,95,55,57,95,109,105,120,101,114,0),907], [String.fromCharCode(115,95,53,56,95,110,99,104,117,110,107,0),82]]);
    let headerb = 4.0;
    let collection6 = 3;
    let crossv = false;
    let emoji4 = true;
    let confirmationD: Array<any> = [477, 288, 258];
    let bingJ: Array<any> = [540, 665];
    let placeholderg = 1.0;
    let rewindk = 0;
    let brightnessO: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,115,95,57,95,51,52,0),String.fromCharCode(112,114,101,102,101,114,101,110,99,101,95,104,95,49,49,0)], [String.fromCharCode(114,95,49,56,95,118,111,112,101,110,0),String.fromCharCode(111,95,52,54,95,101,99,108,0)]]);
    let uploadY = 2;
    let networkB = String.fromCharCode(99,95,57,57,95,116,119,111,108,111,111,112,0);
    let malaysia9 = false;
       let completeR = String.fromCharCode(117,95,50,53,95,111,99,116,112,111,105,110,116,0);
       let sendB = String.fromCharCode(104,95,53,55,95,100,105,115,112,111,115,97,108,0);
       let liveB = false;
      for (let d = 0; d < 1; d++) {
         sendB += `${(String.fromCharCode(56,0) == sendB ? sendB.length : (liveB ? 2 : 3))}`;
      }
      while (!liveB) {
          let previewv = String.fromCharCode(109,117,108,116,105,98,97,115,101,95,111,95,49,50,0);
          let canvasF: Array<any> = [String.fromCharCode(119,95,50,51,95,109,102,113,101,0), String.fromCharCode(112,105,120,108,101,116,95,119,95,48,0)];
          let dicec = String.fromCharCode(121,95,51,95,99,117,101,115,0);
          let photox = 2.0;
         sendB += "2";
         previewv += `${3 + dicec.length}`;
         canvasF = [canvasF.length];
         dicec = `${(String.fromCharCode(72,0) == previewv ? previewv.length : parseInt(`${photox}`))}`;
         photox *= parseFloat(`${parseInt(`${photox}`) ^ dicec.length}`);
         break;
      }
         sendB += `${((liveB ? 4 : 5))}`;
       let main_gS = String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,102,95,52,54,0);
         sendB += `${main_gS.length | 3}`;
         completeR = "2";
          let long_7hX = String.fromCharCode(121,95,50,56,95,99,111,110,102,111,114,109,115,0);
          let group7 = 5.0;
         completeR = `${sendB.length}`;
         long_7hX += `${parseInt(`${group7}`) + 2}`;
         group7 += parseFloat(`${3 << (Math.min(5, long_7hX.length))}`);
          let condensedL = 3.0;
         liveB = sendB.length < 10;
         condensedL /= Math.max(4, 3);
      while (!liveB || sendB.length < 4) {
          let catalogp = true;
          let backgroundH = String.fromCharCode(103,110,111,95,110,95,53,51,0);
          let downloadingx = String.fromCharCode(111,117,114,95,105,95,51,51,0);
          let networko = 0;
         liveB = completeR == sendB;
         catalogp = catalogp || downloadingx.length < 12;
         backgroundH = `${((catalogp ? 1 : 3) << (Math.min(Math.abs(networko), 1)))}`;
         downloadingx += `${downloadingx.length}`;
         networko %= Math.max(2, 2);
         break;
      }
      bingJ.push((String.fromCharCode(87,0) == submiti ? brightnessO.size : submiti.length));
      signinups.set(`${collection6}`, areaR.length);
      submiti += `${bingJ.length * 2}`;
       let sportsS = 4.0;
       let sourcel = 3;
       let shirtK = true;
      for (let y = 0; y < 2; y++) {
         shirtK = 79 >= sourcel;
      }
      for (let o = 0; o < 1; o++) {
         sportsS *= parseInt(`${sportsS}`);
      }
      if (1.49 >= sportsS && (1.49 + sportsS) >= 5.92) {
         sportsS += 1;
      }
      for (let m = 0; m < 3; m++) {
          let smalln: Map<any, any> = new Map([[String.fromCharCode(117,95,55,57,95,100,101,110,115,101,0),53], [String.fromCharCode(104,101,108,112,101,114,115,95,121,95,50,51,0),852], [String.fromCharCode(115,108,97,115,104,105,110,103,95,51,95,49,48,0),645]]);
          let report8: Array<any> = [167, 165, 470];
          let room4 = String.fromCharCode(105,114,100,102,116,95,108,95,49,57,0);
          let acceptedD = String.fromCharCode(119,97,115,95,51,95,56,48,0);
          let redirectR = 3.0;
         sourcel ^= sourcel % 2;
         smalln.set(room4, (room4 == String.fromCharCode(89,0) ? report8.length : room4.length));
         report8.push(smalln.size);
         acceptedD += `${acceptedD.length}`;
         redirectR /= Math.max(5, parseFloat(`${acceptedD.length ^ 3}`));
      }
          let onews3: Array<any> = [92, 129];
          let crown6 = true;
          let windD = String.fromCharCode(122,95,56,50,95,114,101,115,116,114,105,99,116,105,111,110,115,0);
         shirtK = (sourcel % (Math.max(onews3.length, 6))) == 65;
         onews3.push((windD == String.fromCharCode(87,0) ? (crown6 ? 3 : 3) : windD.length));
         crown6 = !crown6;
         shirtK = !shirtK;
          let predictionU = String.fromCharCode(99,111,110,102,105,103,117,114,101,114,95,114,95,56,55,0);
          let optionsG = true;
          let changeA = String.fromCharCode(120,95,52,49,95,97,109,102,101,110,99,0);
         shirtK = changeA.includes(`${optionsG}`);
         predictionU = `${(String.fromCharCode(87,0) == predictionU ? predictionU.length : predictionU.length)}`;
         optionsG = predictionU.length < predictionU.length;
      while (sourcel < 2 || (sourcel % 2) < 2) {
         shirtK = !shirtK;
         break;
      }
      let viewera = 9145009.0 >= sportsS;
      do {
         sportsS /= Math.max(5, 1);
         if (viewera) {
            break;
         }
      } while ((!shirtK || 4.89 > (4.84 + sportsS)) && viewera);
      bingJ.push(3 << (Math.min(Math.abs(parseInt(`${sportsS}`)), 5)));
   let forwardn = placeholderg <= 9770132.0;
   do {
      placeholderg /= Math.max(5, parseFloat(`${1}`));
      if (forwardn) {
         break;
      }
   } while (((areaR.length + 3) < 5) && forwardn);
       let expand0 = 5;
       let inviteR = 2.0;
       let twittera = String.fromCharCode(119,95,52,55,95,105,100,99,116,120,108,108,109,0);
         expand0 ^= twittera.length;
       let modityv = 2.0;
          let filledB = String.fromCharCode(109,95,57,57,95,101,109,117,108,97,116,101,0);
          let pressure1 = 4;
          let plash4 = 5.0;
         twittera += `${parseInt(`${plash4}`) << (Math.min(1, Math.abs(pressure1)))}`;
         filledB += `${(filledB == String.fromCharCode(65,0) ? filledB.length : filledB.length)}`;
         pressure1 /= Math.max(filledB.length, 5);
       let dataJ = 0.0;
      while (4.25 <= dataJ) {
          let volumeq: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,100,117,112,95,57,95,55,51,0),925], [String.fromCharCode(122,95,57,53,95,97,110,103,114,121,0),805], [String.fromCharCode(105,95,49,56,95,114,101,116,117,114,110,101,100,0),278]]);
          let modew = false;
         dataJ *= parseFloat(`${volumeq.size}`);
         volumeq.set(`${modew}`, (3 | (modew ? 4 : 5)));
         break;
      }
       let const_yj = false;
         twittera += `${((const_yj ? 5 : 5) / (Math.max(parseInt(`${dataJ}`), 10)))}`;
          let calendarP: Array<any> = [177, 422, 345];
         expand0 -= ((const_yj ? 5 : 1) * expand0);
         calendarP = [3 * calendarP.length];
      while (!const_yj) {
         const_yj = 94.33 < dataJ && !const_yj;
         break;
      }
      confirmationD.push(twittera.length ^ parseInt(`${headerb}`));
      inviteR += parseFloat(`${parseInt(`${inviteR}`)}`);
   if (!confirmationD.includes(placeholderg)) {
      confirmationD = [collection6];
   }
      confirmationD = [signinups.size * areaR.length];
   for (let y = 0; y < 3; y++) {
       let benefitU: Map<any, any> = new Map([[String.fromCharCode(122,95,50,54,95,116,101,97,109,115,0),String.fromCharCode(107,105,99,107,95,109,95,53,0)], [String.fromCharCode(108,95,57,95,115,112,108,97,110,101,0),String.fromCharCode(107,95,57,95,115,105,102,116,0)]]);
       let relatedU: Map<any, any> = new Map([[String.fromCharCode(112,95,57,53,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0),82], [String.fromCharCode(104,95,56,57,95,105,115,112,111,115,97,98,108,101,0),262]]);
       let orientationx: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,105,110,103,95,120,95,56,49,0),true ], [String.fromCharCode(108,105,102,116,95,99,95,52,57,0),true ]]);
       let sansK = 2.0;
      if (1 >= (relatedU.size * benefitU.size)) {
         benefitU = new Map([[`${orientationx.size}`, parseInt(`${sansK}`)]]);
      }
       let description_mzX = String.fromCharCode(105,119,104,116,95,106,95,57,54,0);
      let gestures_ = 6445831 >= orientationx.size;
      do {
         orientationx.set(`${sansK}`, orientationx.size);
         if (gestures_) {
            break;
         }
      } while ((3 > (description_mzX.length % 3) || 4 > (orientationx.size % 3)) && gestures_);
      if ((orientationx.size | description_mzX.length) >= 1) {
         description_mzX += "1";
      }
       let zhengpianU: Array<any> = [888, 663];
       let otherx: Array<any> = [841, 611];
          let fastA = false;
         relatedU = new Map([[`${orientationx.size}`, relatedU.size]]);
         fastA = (fastA ? !fastA : !fastA);
         sansK += parseFloat(`${benefitU.size / (Math.max(otherx.length, 4))}`);
      for (let f = 0; f < 2; f++) {
          let privilege1 = String.fromCharCode(118,95,56,48,95,114,103,116,99,0);
          let private_vF = 2.0;
          let firebase7 = String.fromCharCode(101,95,52,57,95,101,118,101,114,121,0);
          let searchbar6 = 4.0;
         benefitU = new Map([[`${relatedU.size}`, relatedU.size + 1]]);
         privilege1 = `${1 << (Math.min(5, firebase7.length))}`;
         private_vF -= parseFloat(`${parseInt(`${private_vF}`) / (Math.max(9, privilege1.length))}`);
         firebase7 = `${privilege1.length}`;
         searchbar6 *= parseFloat(`${parseInt(`${private_vF}`) | parseInt(`${searchbar6}`)}`);
      }
          let carouselA: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,109,101,114,103,101,95,50,95,49,48,48,0),true ], [String.fromCharCode(110,95,52,52,95,101,120,112,105,114,101,0),false ], [String.fromCharCode(110,101,97,114,101,115,116,95,110,95,53,53,0),false ]]);
          let headerl = String.fromCharCode(97,95,50,50,95,114,117,110,116,105,109,101,0);
          let actionsq = 1.0;
         orientationx = new Map([[`${carouselA.size}`, carouselA.size]]);
         headerl += `${(String.fromCharCode(67,0) == headerl ? headerl.length : parseInt(`${actionsq}`))}`;
         actionsq -= parseFloat(`${parseInt(`${actionsq}`) / (Math.max(headerl.length, 4))}`);
         relatedU = new Map([[`${orientationx.size}`, parseInt(`${sansK}`)]]);
      for (let v = 0; v < 2; v++) {
          let kickt = String.fromCharCode(116,105,100,121,95,104,95,50,56,0);
          let notifications: Array<any> = [848, 233];
          let progressi = String.fromCharCode(115,111,108,117,116,105,111,110,95,108,95,57,51,0);
         zhengpianU = [1 << (Math.min(4, kickt.length))];
         kickt = `${2 >> (Math.min(5, notifications.length))}`;
         notifications.push(notifications.length);
         progressi += `${(String.fromCharCode(118,0) == progressi ? progressi.length : notifications.length)}`;
      }
         otherx.push(benefitU.size);
      uploadY += ((crossv ? 1 : 3) << (Math.min(Math.abs(parseInt(`${sansK}`)), 5)));
   }
      collection6 >>= Math.min(Math.abs(2), 3);
      bingJ.push((submiti == String.fromCharCode(87,0) ? areaR.length : submiti.length));
   while (!areaR.startsWith(`${emoji4}`)) {
      areaR = `${3 | bingJ.length}`;
      break;
   }
   while (emoji4) {
      brightnessO.set(`${crossv}`, ((crossv ? 4 : 1) | signinups.size));
      break;
   }
   let backwardT = 9430495 <= rewindk;
   do {
      rewindk &= 1;
      if (backwardT) {
         break;
      }
   } while (backwardT && (3 == (4 >> (Math.min(4, Math.abs(rewindk))))));
   if (5 >= uploadY) {
      uploadY ^= collection6 << (Math.min(Math.abs(parseInt(`${placeholderg}`)), 1));
   }
      collection6 -= 1;
   let pressure4 = uploadY <= 5955098;
   do {
      uploadY -= 2;
      if (pressure4) {
         break;
      }
   } while (pressure4 && (5.39 <= (placeholderg + 5.54)));
      placeholderg *= parseFloat(`${1 * brightnessO.size}`);
      bingJ = [parseInt(`${placeholderg}`)];

    setVideoReadyIos(true)

   while (submiti.length >= signinups.size) {
      submiti = `${3 * areaR.length}`;
      break;
   }
      submiti = `${areaR.length * rewindk}`;
   for (let s = 0; s < 1; s++) {
      placeholderg += (parseFloat(`${3 - (emoji4 ? 5 : 3)}`));
   }
   while ((brightnessO.size ^ 3) > 1 && 4 > (brightnessO.size ^ 3)) {
      uploadY ^= 3 << (Math.min(Math.abs(uploadY), 3));
      break;
   }
   while (collection6 >= 1 || 4 >= (collection6 & 1)) {
       let launchT = 0;
       let animationD: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,101,115,95,102,95,54,53,0),497], [String.fromCharCode(115,95,53,54,95,97,116,97,98,97,115,101,0),936], [String.fromCharCode(100,101,99,114,101,97,115,101,95,112,95,49,53,0),234]]);
       let aboutf = String.fromCharCode(99,111,110,115,111,108,101,95,119,95,49,0);
       let reminderC = String.fromCharCode(113,95,52,48,95,109,120,112,101,103,0);
       let catagoryX = 2;
          let controlm: Array<any> = [389, 441];
         animationD.set(`${launchT}`, launchT);
         controlm.push(3 ^ controlm.length);
      while (reminderC.endsWith(`${catagoryX}`)) {
         reminderC = `${1 ^ catagoryX}`;
         break;
      }
      let roboto8 = 9661243 >= catagoryX;
      do {
         catagoryX *= animationD.size + catagoryX;
         if (roboto8) {
            break;
         }
      } while (roboto8 && ((1 >> (Math.min(3, Math.abs(launchT)))) <= 2));
         catagoryX /= Math.max(animationD.size, 4);
         aboutf += `${launchT}`;
      while ((1 & aboutf.length) < 1 || (launchT & 1) < 1) {
         aboutf = `${2 % (Math.max(7, animationD.size))}`;
         break;
      }
         animationD = new Map([[`${animationD.size}`, (String.fromCharCode(50,0) == reminderC ? reminderC.length : animationD.size)]]);
      while ((animationD.size + 1) == 1 && (animationD.size + 1) == 4) {
         animationD.set(`${aboutf}`, aboutf.length + animationD.size);
         break;
      }
         reminderC = `${reminderC.length}`;
          let clear9 = 1.0;
          let acceptedb = 5.0;
          let morec = 4;
         animationD = new Map([[`${launchT}`, launchT + 3]]);
         clear9 += 2 + morec;
         acceptedb += parseFloat(`${2 - parseInt(`${clear9}`)}`);
         morec /= Math.max(3, 3);
      while (3 < reminderC.length) {
         reminderC += `${reminderC.length & 1}`;
         break;
      }
         catagoryX ^= (String.fromCharCode(69,0) == reminderC ? reminderC.length : catagoryX);
      let gesturesT = aboutf.length >= 5932066;
      do {
          let configuret = 5.0;
          let confirmationp = false;
          let taiwanr = 5.0;
         aboutf = `${reminderC.length - animationD.size}`;
         configuret += 1 + parseInt(`${taiwanr}`);
         confirmationp = !confirmationp;
         taiwanr += parseInt(`${taiwanr}`) | parseInt(`${configuret}`);
         if (gesturesT) {
            break;
         }
      } while (gesturesT && (2 <= (aboutf.length - 1) || 1 <= (aboutf.length - animationD.size)));
      while (3 <= (animationD.size / (Math.max(reminderC.length, 8)))) {
          let minimizeU = 0.0;
          let downR = String.fromCharCode(119,95,52,54,95,119,105,112,101,0);
          let filter3: Array<any> = [521, 184, 502];
         reminderC = `${2 << (Math.min(2, Math.abs(catagoryX)))}`;
         minimizeU -= parseInt(`${minimizeU}`);
         downR += `${3 << (Math.min(3, filter3.length))}`;
         filter3 = [2];
         break;
      }
         reminderC += `${launchT | animationD.size}`;
      collection6 *= ((emoji4 ? 4 : 4) << (Math.min(Math.abs(parseInt(`${placeholderg}`)), 1)));
      break;
   }
       let album9 = 1;
       let theme_ = 1.0;
       let fieldz: Array<any> = [String.fromCharCode(100,111,119,110,119,97,114,100,95,114,95,54,48,0), String.fromCharCode(121,95,55,52,95,100,101,102,108,105,99,107,101,114,0)];
      let clockV = 5890530 <= album9;
      do {
         album9 &= 3 & album9;
         if (clockV) {
            break;
         }
      } while ((5 > album9) && clockV);
         theme_ /= Math.max(parseFloat(`${parseInt(`${theme_}`)}`), 4);
          let roomN = String.fromCharCode(104,95,56,52,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0);
          let configa: Array<any> = [798, 212, 847];
          let s_imageg = String.fromCharCode(101,95,48,95,117,110,109,97,112,0);
         theme_ += parseFloat(`${3}`);
         roomN = `${roomN.length}`;
         configa.push(3 + roomN.length);
         s_imageg = "3";
      for (let n = 0; n < 2; n++) {
          let ajaxH = String.fromCharCode(102,99,104,111,119,110,95,101,95,49,56,0);
          let memberg = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,99,95,56,55,0);
         theme_ -= parseFloat(`${album9}`);
         ajaxH = `${(ajaxH == String.fromCharCode(115,0) ? memberg.length : ajaxH.length)}`;
         memberg = `${ajaxH.length}`;
      }
      for (let q = 0; q < 1; q++) {
         fieldz = [album9 & 2];
      }
      if ((album9 - theme_) == 2.97) {
         album9 &= parseInt(`${theme_}`);
      }
      if (fieldz.includes(album9)) {
         album9 /= Math.max(5, 1);
      }
      while ((theme_ - 1.70) <= 1.45) {
          let largeQ: Array<any> = [172, 107, 157];
          let pointc = 2;
         album9 <<= Math.min(fieldz.length, 2);
         largeQ.push(largeQ.length);
         pointc ^= pointc ^ largeQ.length;
         break;
      }
      let historyn = fieldz.length <= 9110794;
      do {
         fieldz.push(album9 % 2);
         if (historyn) {
            break;
         }
      } while (historyn && (!fieldz.includes(theme_)));
      submiti += `${2 / (Math.max(parseInt(`${theme_}`), 8))}`;
   if (4 >= uploadY) {
      uploadY &= 3;
   }
       let lighta = 0.0;
          let matchm = String.fromCharCode(115,116,121,108,101,95,122,95,53,53,0);
          let data1: Array<any> = [2, 970, 784];
         lighta -= parseFloat(`${parseInt(`${lighta}`)}`);
         matchm = `${data1.length}`;
         data1 = [matchm.length * 3];
         lighta /= Math.max(4, parseFloat(`${parseInt(`${lighta}`)}`));
      for (let q = 0; q < 1; q++) {
          let themeB = 1.0;
          let currentf = String.fromCharCode(116,111,107,101,110,116,120,95,54,95,49,48,0);
          let link_: Array<any> = [871, 913, 428];
         lighta -= parseFloat(`${parseInt(`${lighta}`)}`);
         themeB *= parseFloat(`${link_.length << (Math.min(4, Math.abs(parseInt(`${themeB}`))))}`);
         currentf = `${(String.fromCharCode(95,0) == currentf ? currentf.length : link_.length)}`;
      }
      uploadY |= (areaR == String.fromCharCode(119,0) ? parseInt(`${placeholderg}`) : areaR.length);
      headerb += parseFloat(`${1 - submiti.length}`);
      crossv = bingJ.length <= 40;
       let benefitG = String.fromCharCode(109,95,56,48,95,109,117,116,101,100,0);
         benefitG += `${(benefitG == String.fromCharCode(115,0) ? benefitG.length : benefitG.length)}`;
      if (benefitG == benefitG) {
          let private_ddX: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,112,114,105,118,95,103,95,52,57,0),254], [String.fromCharCode(117,95,54,53,95,115,101,108,101,99,116,105,118,101,108,121,0),56], [String.fromCharCode(104,114,115,115,95,111,95,54,48,0),363]]);
          let pressure3: Map<any, any> = new Map([[String.fromCharCode(114,95,55,53,95,101,103,97,99,121,0),38], [String.fromCharCode(105,110,118,105,115,105,98,108,101,95,121,95,54,56,0),561], [String.fromCharCode(114,101,118,101,114,115,101,100,95,116,95,49,0),317]]);
          let championy = 5.0;
          let leftv = false;
         benefitG += "3";
         private_ddX = new Map([[`${pressure3.size}`, private_ddX.size]]);
         pressure3 = new Map([[`${pressure3.size}`, pressure3.size]]);
         championy /= Math.max(2, private_ddX.size);
         leftv = 45 == pressure3.size;
      }
       let streaming2 = 4;
      rewindk /= Math.max((1 + (crossv ? 3 : 2)), 1);
       let matchese = true;
       let roomp: Map<any, any> = new Map([[String.fromCharCode(101,95,51,50,95,115,100,116,112,0),961], [String.fromCharCode(99,95,49,50,95,113,115,118,118,112,112,0),180], [String.fromCharCode(112,111,116,105,115,105,111,110,95,51,95,54,57,0),610]]);
       let profilet = 2;
          let logom = 5;
          let upgrade6 = String.fromCharCode(112,107,116,104,100,114,95,105,95,57,50,0);
          let tailP = String.fromCharCode(111,112,115,99,97,108,101,95,103,95,50,49,0);
         profilet *= logom << (Math.min(tailP.length, 2));
         logom ^= upgrade6.length;
         upgrade6 += `${upgrade6.length / 3}`;
         profilet -= ((matchese ? 5 : 3) - 2);
         matchese = !matchese;
       let invitez = String.fromCharCode(115,101,101,110,95,111,95,55,53,0);
       let pointd = String.fromCharCode(110,95,56,52,95,97,118,100,99,116,0);
      let rank4 = 9122111 <= pointd.length;
      do {
         pointd = `${roomp.size / (Math.max(3, 4))}`;
         if (rank4) {
            break;
         }
      } while (((5 & pointd.length) < 2) && rank4);
      for (let h = 0; h < 3; h++) {
         roomp.set(invitez, invitez.length % (Math.max(3, 2)));
      }
      while (!matchese) {
         matchese = invitez == String.fromCharCode(109,0);
         break;
      }
          let lightz = 1.0;
         matchese = String.fromCharCode(115,0) == pointd;
         lightz /= Math.max(parseInt(`${lightz}`) * parseInt(`${lightz}`), 2);
         profilet += pointd.length & 3;
      crossv = !crossv;
   if (crossv) {
       let splasha = 4.0;
       let auto_mrp: Map<any, any> = new Map([[String.fromCharCode(111,110,101,112,97,115,115,95,56,95,54,57,0),100], [String.fromCharCode(100,115,116,114,101,97,109,95,121,95,52,53,0),752], [String.fromCharCode(97,114,101,118,101,114,115,101,95,116,95,50,56,0),200]]);
       let condensede = String.fromCharCode(103,101,116,120,115,115,101,95,102,95,50,55,0);
      while (5 <= (auto_mrp.size & 2) && 3 <= (condensede.length & 2)) {
          let langkeya = 2.0;
          let ewardedQ = String.fromCharCode(109,95,57,56,95,99,111,118,97,108,101,110,116,0);
          let downA = 3.0;
          let downloaded5 = 0;
         condensede += `${auto_mrp.size & condensede.length}`;
         langkeya /= Math.max((String.fromCharCode(76,0) == ewardedQ ? downloaded5 : ewardedQ.length), 3);
         downA += (ewardedQ == String.fromCharCode(119,0) ? parseInt(`${langkeya}`) : ewardedQ.length);
         downloaded5 ^= 2 << (Math.min(Math.abs(parseInt(`${langkeya}`)), 4));
         break;
      }
          let shared2 = 4.0;
         splasha -= (parseFloat(`${String.fromCharCode(98,0) == condensede ? condensede.length : auto_mrp.size}`));
         shared2 -= 1 & parseInt(`${shared2}`);
      for (let b = 0; b < 3; b++) {
         splasha -= parseFloat(`${parseInt(`${splasha}`) / 3}`);
      }
         auto_mrp = new Map([[`${auto_mrp.size}`, parseInt(`${splasha}`) - auto_mrp.size]]);
          let hejiZ: Map<any, any> = new Map([[String.fromCharCode(105,109,101,114,95,114,95,54,52,0),false ], [String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,95,100,95,50,57,0),false ], [String.fromCharCode(99,111,109,112,108,101,116,101,100,95,55,95,56,49,0),true ]]);
         splasha /= Math.max(3, parseFloat(`${parseInt(`${splasha}`)}`));
         hejiZ.set(`${hejiZ.size}`, 3 - hejiZ.size);
         auto_mrp.set(`${splasha}`, auto_mrp.size * 3);
      if (condensede.length > 4) {
          let side8 = String.fromCharCode(116,95,49,57,95,100,101,99,111,114,97,116,105,111,110,115,0);
          let bottomE = String.fromCharCode(107,95,54,55,95,101,120,99,101,112,116,105,111,110,0);
         auto_mrp = new Map([[`${splasha}`, 3 * side8.length]]);
         side8 += `${bottomE.length % (Math.max(3, 7))}`;
         bottomE = `${bottomE.length + bottomE.length}`;
      }
         auto_mrp.set(condensede, auto_mrp.size >> (Math.min(Math.abs(3), 1)));
      let gmailB = splasha >= 7829218.0;
      do {
         splasha /= Math.max(parseFloat(`${auto_mrp.size >> (Math.min(2, Math.abs(parseInt(`${splasha}`))))}`), 1);
         if (gmailB) {
            break;
         }
      } while ((Array.from(auto_mrp.values()).includes(splasha)) && gmailB);
      bingJ = [(submiti == String.fromCharCode(76,0) ? collection6 : submiti.length)];
   }
       let megaphoneB = String.fromCharCode(114,101,116,114,105,101,115,95,50,95,51,55,0);
       let taiwanC = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,105,95,53,51,0);
      if (megaphoneB != String.fromCharCode(121,0)) {
         taiwanC += `${2 & megaphoneB.length}`;
      }
         taiwanC = "2";
         megaphoneB = `${(taiwanC == String.fromCharCode(116,0) ? taiwanC.length : megaphoneB.length)}`;
       let terms3 = String.fromCharCode(107,95,51,53,95,116,114,97,110,115,108,97,116,111,110,0);
      for (let d = 0; d < 3; d++) {
          let plus7 = 2.0;
          let regengh = 3;
         megaphoneB = `${2 & parseInt(`${plus7}`)}`;
         plus7 -= parseFloat(`${3 >> (Math.min(3, Math.abs(regengh)))}`);
         regengh -= regengh % 1;
      }
       let notificationJ = String.fromCharCode(103,95,57,48,95,108,105,98,120,0);
      bingJ.push(bingJ.length << (Math.min(5, Math.abs(uploadY))));
   let z_unlockH = uploadY >= 8055143;
   do {
      uploadY *= collection6;
      if (z_unlockH) {
         break;
      }
   } while (z_unlockH && (5 < (2 * brightnessO.size)));
   for (let o = 0; o < 1; o++) {
      submiti += "1";
   }
   for (let d = 0; d < 1; d++) {
      submiti = `${signinups.size - submiti.length}`;
   }
      placeholderg += parseFloat(`${1}`);
      brightnessO = new Map([[`${bingJ.length}`, collection6 & 1]]);
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
