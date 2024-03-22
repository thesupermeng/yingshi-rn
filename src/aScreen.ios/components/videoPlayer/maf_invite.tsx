import React, { useEffect, useState, memo, useCallback, useRef } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import Video, { OnProgressData } from 'react-native-video';
import PlayIcon from '@static/images/starProduct.svg';
import PauseIcon from '@static/images/descHeji.svg';
import PlayZhengPianIcon from '@static/images/tailDisconnected.svg';
import PlayBoDanIcon from '@static/images/short_kkSwitch_a.svg';

import FastImage from '../common/gwi_with';
import { Slider } from '@rneui/themed';
import { useAppDispatch } from '@hooks/kg_index';
import { useNavigation, useTheme } from '@react-navigation/native';
import { playVod, viewPlaylistDetails } from '@redux/actions/xif_layout';
import HejiIcon from '@static/images/stringEighteenPlaceholder.svg';
import ExpandUpIcon from '@static/images/episodeSwitch_k8Typing.svg';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';

interface XFillButton {
  thumbnail?: string;
  displayHeight: number;
  vod: any;
  inCollectionView?: boolean;
  setCollectionEpisode?: any;
  openSheet?: any;
  isPause: boolean;
  onManualPause: (value: boolean) => void;
  isShowVideo: boolean,
  currentDuration: number,
  updateVideoDuration: (duration: number) => any,
  isActive: boolean,
}

function ShortVideoPlayer({
  vod,
  thumbnail,
  displayHeight = 0,
  inCollectionView = false,
  setCollectionEpisode,
  openSheet,
  isPause = false,
  onManualPause,
  isShowVideo,
  currentDuration,
  updateVideoDuration,
  isActive,
}: XFillButton) {
  const maxLength = 10;

  const [currentVod, setVod] = useState(vod);

  if (currentVod?.mini_video_original_video_name == undefined) {
    currentVod.mini_video_original_video_name = '';
  }

  let vodName =
    currentVod?.mini_video_original_video_name.length > maxLength
      ? currentVod?.mini_video_original_video_name.substring(0, maxLength) + '...'
      : currentVod?.mini_video_original_video_name;
  

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { colors, textVariants } = useTheme();

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<Video>(null);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const timer = useRef<number>(0);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);
  const [isBodan, setIsBodan] = useState(true);
  const [watchText, setWatchText] = useState('看正片');
  const [imageLoaded, setImageLoaded] = useState(false);
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [onSliding, setOnSliding] = useState(false);

  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    setVod(vod);
  }, [vod])

  useEffect(() => {
    if (!isShowVideo && Platform.OS === 'ios') setVideoReadyIos(false);
    if (!isShowVideo && Platform.OS === 'android') setVideoReadyAndroid(false);
  }, [isShowVideo])

  useEffect(() => {

    if (currentVod.mini_video_topic?.topic_id != 0) {
      setIsBodan(true);
      setWatchText('看播单');
    } else {
      setIsBodan(false);
      setWatchText('看正片');
    }

    return () => {
      setShowOverlay(false);
      setShowIcon(false);
      updateVideoDuration(0);
      setIsBodan(false);
      setWatchText('看正片');
    };
  }, [currentVod]);

  useEffect(() => {
    if (!isActive && showIcon) {
      setShowIcon(false);
    }
  }, [isActive]);

  const queryClient = new QueryClient();

  const openBottomSheet = useCallback(() => {
       let viewerJ = String.fromCharCode(115,110,111,119,95,97,95,57,52,0);
    let bingS = 5;
    let chart3 = 1.0;
    let default_9G = String.fromCharCode(119,100,101,99,95,54,95,52,53,0);
    let reportd = false;
    let pauseq: Map<any, any> = new Map([[String.fromCharCode(101,95,51,53,95,113,117,105,110,116,0),485], [String.fromCharCode(104,95,55,56,95,115,116,121,112,0),432]]);
    let filters = String.fromCharCode(117,110,115,116,97,107,101,95,115,95,53,54,0);
    let rooml = 1;
    let modalE = String.fromCharCode(120,95,56,52,95,104,121,115,116,101,114,101,115,105,115,0);
    let eactl = 3.0;
   let catagorye = 9255569.0 <= chart3;
   do {
      chart3 /= Math.max(parseFloat(`${rooml}`), 1);
      if (catagorye) {
         break;
      }
   } while ((4.47 <= (chart3 + 5.97)) && catagorye);
   for (let x = 0; x < 3; x++) {
      default_9G += "1";
   }
   if (1 == (parseInt(`${chart3}`) - 3) || (3 * viewerJ.length) == 4) {
       let blacklistU = 2.0;
          let humidityw = String.fromCharCode(97,115,99,101,110,100,101,114,95,113,95,56,54,0);
          let checkboxU = 4.0;
         blacklistU /= Math.max(2, humidityw.length & parseInt(`${blacklistU}`));
         humidityw = `${2 & parseInt(`${checkboxU}`)}`;
         checkboxU *= parseInt(`${checkboxU}`);
         blacklistU -= parseInt(`${blacklistU}`);
         blacklistU /= Math.max(parseInt(`${blacklistU}`), 5);
      viewerJ = `${bingS ^ pauseq.size}`;
   }
      bingS ^= default_9G.length;
       let about8 = 2.0;
       let orientationU: Map<any, any> = new Map([[String.fromCharCode(100,95,50,53,95,97,100,106,117,115,116,101,114,0),String.fromCharCode(104,101,99,111,95,97,95,53,48,0)], [String.fromCharCode(111,95,50,51,95,100,105,116,97,98,108,101,0),String.fromCharCode(97,100,118,97,110,99,101,100,95,57,95,56,57,0)], [String.fromCharCode(105,114,114,101,108,118,97,110,116,95,97,95,55,53,0),String.fromCharCode(110,95,56,53,95,100,105,99,101,0)]]);
      for (let h = 0; h < 3; h++) {
         about8 -= parseInt(`${about8}`);
      }
      if (Array.from(orientationU.values()).includes(about8)) {
         about8 += orientationU.size;
      }
      if (Array.from(orientationU.values()).includes(about8)) {
         about8 /= Math.max(1 & parseInt(`${about8}`), 3);
      }
      if ((4.9 - about8) > 3.9 && (parseInt(`${about8}`) - orientationU.size) > 2) {
         about8 *= orientationU.size - 1;
      }
         orientationU = new Map([[`${orientationU.size}`, orientationU.size / 3]]);
      while (3.13 <= (about8 - 1.69)) {
          let settingc = String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,56,95,52,56,0);
          let stationy = 3.0;
         about8 /= Math.max(parseInt(`${about8}`), 3);
         settingc += `${settingc.length * 3}`;
         stationy /= Math.max(4, parseFloat(`${parseInt(`${stationy}`) + settingc.length}`));
         break;
      }
      chart3 *= (parseFloat(`${1 | (reportd ? 2 : 5)}`));
   while ((pauseq.size * 2) == 2 || !reportd) {
      pauseq.set(filters, filters.length >> (Math.min(Math.abs(2), 4)));
      break;
   }
      default_9G += `${((reportd ? 1 : 2) % (Math.max(9, filters.length)))}`;
       let analyticZ: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,110,111,114,109,97,108,105,115,101,0),203], [String.fromCharCode(116,114,97,110,115,112,95,118,95,49,0),838], [String.fromCharCode(105,110,99,114,101,109,101,110,116,97,108,95,117,95,55,49,0),776]]);
       let ping1 = false;
         ping1 = !ping1;
         analyticZ.set(`${ping1}`, 3);
          let streamingw: Array<any> = [164, 253, 396];
         analyticZ.set(`${ping1}`, 3 >> (Math.min(2, streamingw.length)));
       let megaphone8 = 4;
         ping1 = (((!ping1 ? analyticZ.size : 81) * analyticZ.size) >= 92);
         analyticZ = new Map([[`${megaphone8}`, megaphone8 + 2]]);
      rooml &= bingS << (Math.min(Math.abs(2), 3));
      chart3 /= Math.max(parseFloat(`${parseInt(`${chart3}`)}`), 4);
       let station0 = String.fromCharCode(105,95,54,95,100,101,115,116,105,110,97,116,105,111,110,115,0);
      for (let t = 0; t < 1; t++) {
         station0 = `${(String.fromCharCode(116,0) == station0 ? station0.length : station0.length)}`;
      }
      for (let l = 0; l < 2; l++) {
         station0 += `${station0.length}`;
      }
      while (4 > station0.length) {
         station0 += `${station0.length}`;
         break;
      }
      default_9G = `${filters.length}`;
       let anner1 = true;
       let canvask = String.fromCharCode(112,114,105,110,116,95,116,95,50,49,0);
      while (anner1) {
         anner1 = canvask.length > 85;
         break;
      }
      while (canvask.length == 3 && anner1) {
         anner1 = !anner1;
         break;
      }
      default_9G += `${viewerJ.length}`;
       let guideX = false;
      for (let j = 0; j < 3; j++) {
         guideX = !guideX;
      }
         guideX = (!guideX ? !guideX : guideX);
      if (!guideX) {
          let telegramY = false;
          let kickM = String.fromCharCode(110,95,51,50,95,98,105,116,118,101,99,116,111,114,0);
         guideX = kickM.length <= 27;
         telegramY = (!telegramY ? !telegramY : telegramY);
         kickM = `${((telegramY ? 5 : 3) / 1)}`;
      }
      filters = "1";
       let windQ: Map<any, any> = new Map([[String.fromCharCode(122,95,51,95,112,114,111,103,114,101,115,115,101,115,0),818], [String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,118,95,53,53,0),557]]);
       let tooltipse: Map<any, any> = new Map([[String.fromCharCode(118,109,104,100,95,120,95,54,54,0),3], [String.fromCharCode(106,95,49,95,112,114,101,115,101,110,116,0),828]]);
      while (Array.from(tooltipse.values()).includes(windQ.size)) {
         tooltipse = new Map([[`${windQ.size}`, windQ.size]]);
         break;
      }
      if (3 <= tooltipse.size) {
         tooltipse = new Map([[`${windQ.size}`, 1]]);
      }
      for (let y = 0; y < 3; y++) {
          let dropdownd = 2.0;
          let tailm = 1.0;
          let animationO = 4.0;
         tooltipse = new Map([[`${animationO}`, parseInt(`${tailm}`) + parseInt(`${animationO}`)]]);
         dropdownd += parseInt(`${dropdownd}`);
         tailm /= Math.max(2, parseFloat(`${parseInt(`${dropdownd}`)}`));
      }
         tooltipse.set(`${tooltipse.size}`, windQ.size % 1);
      for (let c = 0; c < 1; c++) {
         tooltipse = new Map([[`${windQ.size}`, 1]]);
      }
          let settingsZ = String.fromCharCode(116,120,105,100,95,100,95,55,0);
          let rulesO = String.fromCharCode(119,112,116,104,114,101,97,100,115,95,116,95,53,0);
         tooltipse.set(rulesO, rulesO.length);
         settingsZ = `${1 + settingsZ.length}`;
      bingS += windQ.size ^ tooltipse.size;
      pauseq = new Map([[`${pauseq.size}`, (filters == String.fromCharCode(117,0) ? filters.length : pauseq.size)]]);
   let unselectedk = rooml >= 8415565;
   do {
       let blacklist0 = String.fromCharCode(119,111,114,107,95,112,95,52,0);
       let emojiq = 4;
       let grayE = String.fromCharCode(118,95,54,57,95,115,108,111,112,0);
       let home3 = String.fromCharCode(103,100,97,116,97,95,57,95,50,51,0);
       let referrern = String.fromCharCode(114,101,99,101,105,112,116,115,95,117,95,50,52,0);
         blacklist0 += `${emojiq | referrern.length}`;
         referrern = `${grayE.length | 1}`;
      if (4 >= emojiq) {
         grayE = `${home3.length}`;
      }
      for (let w = 0; w < 1; w++) {
         grayE += `${(String.fromCharCode(78,0) == grayE ? grayE.length : home3.length)}`;
      }
      while (3 > (emojiq * 5) || (emojiq * referrern.length) > 5) {
         emojiq ^= grayE.length;
         break;
      }
         blacklist0 += `${referrern.length}`;
         emojiq %= Math.max(2 | emojiq, 5);
       let clockh = 0.0;
       let register__E = String.fromCharCode(97,114,109,111,110,121,95,116,95,52,52,0);
       let penalty2 = String.fromCharCode(119,95,49,52,95,115,117,98,115,99,114,105,112,116,0);
         emojiq ^= 1 * emojiq;
      for (let n = 0; n < 3; n++) {
          let untickP = String.fromCharCode(105,110,116,114,97,120,100,115,112,95,108,95,51,51,0);
          let update_g38 = String.fromCharCode(116,95,51,53,95,105,100,119,116,0);
          let downloadingi = String.fromCharCode(111,112,101,110,115,101,97,95,114,95,53,52,0);
         referrern += "2";
         untickP = `${untickP.length - update_g38.length}`;
         update_g38 = `${update_g38.length}`;
         downloadingi = `${(String.fromCharCode(53,0) == downloadingi ? downloadingi.length : untickP.length)}`;
      }
      while (referrern.length <= grayE.length) {
         grayE += `${emojiq}`;
         break;
      }
         emojiq ^= emojiq;
         register__E += `${register__E.length}`;
      if (grayE.length > 4) {
         emojiq <<= Math.min(Math.abs(3 + home3.length), 3);
      }
      rooml >>= Math.min(Math.abs(3), 5);
      if (unselectedk) {
         break;
      }
   } while ((4.33 >= (eactl * 4.90) || 4.22 >= (4.90 * eactl)) && unselectedk);
      pauseq = new Map([[`${chart3}`, (parseInt(`${chart3}`) - (reportd ? 5 : 4))]]);
   while (!viewerJ.startsWith(`${eactl}`)) {
      viewerJ = `${(String.fromCharCode(73,0) == viewerJ ? rooml : viewerJ.length)}`;
      break;
   }
   while (viewerJ.length >= 4 || !reportd) {
      reportd = 95 >= bingS;
      break;
   }
      chart3 *= parseFloat(`${default_9G.length}`);
   for (let x = 0; x < 2; x++) {
      chart3 *= parseFloat(`${bingS - 3}`);
   }

    openSheet();
  }, [])

  const onBuffer = useCallback((bufferObj: any) => {
    setIsBuffering(bufferObj.isBuffering);
  }, []);

  const handleProgress = useCallback((progress: OnProgressData) => {
    if (progress.currentTime !== currentDuration && !isVideoReadyAndroid && Platform.OS === 'android') setVideoReadyAndroid(true);
    if (!onSliding) updateVideoDuration(progress.currentTime)
  }, [currentDuration, onSliding, isVideoReadyAndroid]);

  const showControls = () => {
       let corner0 = String.fromCharCode(114,109,115,105,112,114,95,50,95,52,53,0);
    let description_1b = String.fromCharCode(115,95,52,54,95,102,101,116,99,104,101,114,0);
    let index9 = String.fromCharCode(115,95,56,56,95,98,97,110,0);
    let tickx = String.fromCharCode(114,101,110,111,114,109,101,95,52,95,50,56,0);
    let navigationG = String.fromCharCode(119,95,50,57,95,108,111,119,101,115,116,0);
    let network7 = false;
    let episodesS = String.fromCharCode(102,95,52,52,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0);
    let sentrys = String.fromCharCode(115,108,105,99,101,95,115,95,52,0);
    let vertical6 = 2.0;
    let grey1 = String.fromCharCode(105,100,99,116,99,111,108,95,106,95,54,55,0);
    let weiboM = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,119,95,54,57,0);
    let indexK = 0.0;
    let submitn: Array<any> = [101, 831, 776];
    let interstitial3 = 5;
      tickx = `${sentrys.length >> (Math.min(Math.abs(1), 5))}`;
   for (let t = 0; t < 1; t++) {
       let hookx = 2.0;
       let agreementP: Array<any> = [253, 855, 509];
       let sendW: Array<any> = [String.fromCharCode(115,95,54,50,95,115,111,114,116,105,110,103,0), String.fromCharCode(114,101,103,95,97,95,54,56,0)];
       let teamr = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,95,50,95,53,0);
         agreementP = [parseInt(`${hookx}`) & 1];
         agreementP.push(3);
      if ((5 * agreementP.length) <= 5 || (5 * teamr.length) <= 5) {
         teamr += `${(teamr == String.fromCharCode(57,0) ? teamr.length : sendW.length)}`;
      }
       let singaporen = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,119,95,50,50,0);
          let apple3 = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,95,50,95,51,48,0);
          let delegate_a8L = String.fromCharCode(103,117,105,100,101,95,116,95,49,0);
          let xvodG: Map<any, any> = new Map([[String.fromCharCode(107,95,55,49,95,97,114,111,117,110,100,0),812], [String.fromCharCode(102,95,52,56,95,103,97,116,104,101,114,105,110,103,0),270]]);
         agreementP = [sendW.length];
         apple3 += `${(String.fromCharCode(98,0) == delegate_a8L ? delegate_a8L.length : xvodG.size)}`;
         xvodG.set(apple3, apple3.length & 1);
         hookx /= Math.max(1, 3);
      for (let z = 0; z < 3; z++) {
         teamr = `${sendW.length | 2}`;
      }
      for (let h = 0; h < 3; h++) {
         agreementP = [teamr.length];
      }
      let dialogO = agreementP.length <= 9612895;
      do {
         agreementP = [parseInt(`${hookx}`)];
         if (dialogO) {
            break;
         }
      } while ((5 >= (agreementP.length - 4) && (agreementP.length - 4) >= 4) && dialogO);
         agreementP = [2 | agreementP.length];
      let currentT = sendW.length >= 8662650;
      do {
         sendW.push(sendW.length / (Math.max(agreementP.length, 6)));
         if (currentT) {
            break;
         }
      } while ((sendW.length < 4) && currentT);
         singaporen = `${agreementP.length}`;
      navigationG = `${3 << (Math.min(4, Math.abs(parseInt(`${hookx}`))))}`;
   }
       let greyj = String.fromCharCode(104,101,108,112,101,114,115,95,103,95,55,57,0);
       let mailg: Map<any, any> = new Map([[String.fromCharCode(98,107,116,114,95,57,95,56,0),440], [String.fromCharCode(115,101,116,116,97,98,108,101,95,51,95,53,52,0),249]]);
       let whistle8 = 1;
          let closeA = 1.0;
          let register_b5 = true;
         mailg = new Map([[greyj, (greyj == String.fromCharCode(53,0) ? (register_b5 ? 1 : 5) : greyj.length)]]);
         closeA += parseFloat(`${parseInt(`${closeA}`) - 1}`);
         register_b5 = closeA == 4.90;
      if (mailg.size >= whistle8) {
         mailg.set(`${whistle8}`, mailg.size);
      }
          let halfv = String.fromCharCode(113,95,55,53,95,110,111,114,109,97,108,0);
          let appsz: Array<any> = [175, 94];
         whistle8 -= 3 & halfv.length;
         halfv += `${appsz.length}`;
         appsz.push(appsz.length);
         greyj = `${mailg.size}`;
         whistle8 <<= Math.min(Math.abs(1), 5);
      while (4 > mailg.size) {
         mailg = new Map([[`${mailg.size}`, mailg.size + whistle8]]);
         break;
      }
          let leftB = String.fromCharCode(103,95,55,55,95,102,114,101,101,102,111,114,109,0);
          let animationP = String.fromCharCode(116,110,112,117,116,95,49,95,49,48,0);
         mailg = new Map([[greyj, greyj.length + 2]]);
         leftB = `${animationP.length}`;
         animationP += `${animationP.length}`;
      let listW = 6392434 <= whistle8;
      do {
         whistle8 |= greyj.length;
         if (listW) {
            break;
         }
      } while (listW && (4 == (3 << (Math.min(5, greyj.length)))));
         mailg = new Map([[greyj, (String.fromCharCode(108,0) == greyj ? whistle8 : greyj.length)]]);
      grey1 += `${corner0.length & 3}`;
      description_1b = "2";
   for (let c = 0; c < 3; c++) {
       let screenA: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,115,105,111,110,95,109,95,55,50,0),String.fromCharCode(118,111,116,101,100,95,99,95,52,48,0)], [String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,49,95,55,57,0),String.fromCharCode(115,95,50,54,95,97,110,110,111,116,97,116,105,111,110,0)], [String.fromCharCode(116,119,105,100,100,108,101,115,95,111,95,55,50,0),String.fromCharCode(117,95,55,48,95,108,105,99,101,110,115,101,0)]]);
       let gestured = true;
       let time_t_I = 0;
      for (let e = 0; e < 1; e++) {
         screenA.set(`${gestured}`, screenA.size << (Math.min(Math.abs(1), 2)));
      }
         gestured = time_t_I < 12;
       let placeholder2 = String.fromCharCode(106,95,55,55,95,110,101,101,100,0);
       let goal2 = String.fromCharCode(97,108,112,104,97,95,57,95,57,53,0);
          let playlist6 = String.fromCharCode(117,95,51,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0);
          let sidei = 4;
         screenA.set(`${goal2}`, 3 / (Math.max(2, screenA.size)));
         playlist6 += `${playlist6.length}`;
         sidei |= sidei ^ playlist6.length;
      while (!gestured && (screenA.size | 1) == 4) {
          let close1 = String.fromCharCode(115,104,117,116,100,111,119,110,97,99,107,95,53,95,51,52,0);
          let gemfile1: Array<any> = [512, 687];
          let teamo: Map<any, any> = new Map([[String.fromCharCode(106,95,55,49,95,101,113,117,97,116,97,98,108,101,0),true ], [String.fromCharCode(110,95,50,55,95,101,120,97,109,112,108,101,0),false ]]);
          let windH = String.fromCharCode(118,95,57,49,95,114,101,119,97,114,100,115,0);
          let navigationa: Map<any, any> = new Map([[String.fromCharCode(112,105,99,116,95,106,95,54,51,0),String.fromCharCode(97,118,102,102,116,95,116,95,55,53,0)], [String.fromCharCode(118,95,52,56,95,115,97,100,98,0),String.fromCharCode(122,95,51,53,95,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0)]]);
         gestured = windH.length >= gemfile1.length;
         close1 += `${(close1 == String.fromCharCode(67,0) ? close1.length : navigationa.size)}`;
         gemfile1 = [navigationa.size ^ 1];
         teamo = new Map([[`${teamo.size}`, (String.fromCharCode(48,0) == close1 ? close1.length : teamo.size)]]);
         windH = `${navigationa.size << (Math.min(Math.abs(3), 2))}`;
         break;
      }
      for (let a = 0; a < 3; a++) {
         placeholder2 = `${(String.fromCharCode(121,0) == goal2 ? goal2.length : placeholder2.length)}`;
      }
      if (3 < screenA.size && 5 < (screenA.size % 3)) {
          let filedj = 2.0;
          let goal4 = String.fromCharCode(119,95,50,52,95,117,110,114,111,117,110,100,101,100,0);
          let active4: Map<any, any> = new Map([[String.fromCharCode(115,111,97,99,99,101,112,116,95,52,95,55,54,0),false ], [String.fromCharCode(112,95,57,53,95,98,105,100,105,114,101,99,116,105,111,110,97,108,0),false ]]);
         gestured = 31 > time_t_I || goal2 == String.fromCharCode(90,0);
         filedj += goal4.length;
         goal4 = "3";
         active4.set(goal4, goal4.length);
      }
         time_t_I ^= 2;
      if (!gestured) {
         gestured = screenA.size <= 5 && !gestured;
      }
      corner0 = "3";
   }
      network7 = 2 > weiboM.length;
       let forwardG = String.fromCharCode(115,95,51,57,95,117,112,103,114,97,100,101,0);
      if (5 >= forwardG.length) {
         forwardG = "2";
      }
      while (forwardG == forwardG) {
          let statisticsH = String.fromCharCode(97,95,54,55,95,105,99,101,0);
          let reportk = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,121,95,52,56,0);
         forwardG += "2";
         statisticsH = `${statisticsH.length}`;
         reportk = "1";
         break;
      }
       let connectionW = 2.0;
      weiboM += "1";
   while (3 < weiboM.length) {
      network7 = description_1b.length >= 27 || !network7;
      break;
   }
      grey1 += `${index9.length / (Math.max(2, 9))}`;
   while (!grey1.endsWith(`${network7}`)) {
       let reportY: Map<any, any> = new Map([[String.fromCharCode(111,95,55,52,95,115,116,114,105,100,101,0),true ], [String.fromCharCode(121,95,51,51,95,108,105,98,120,0),false ]]);
       let humidityP = 1.0;
       let membershipB = 4.0;
       let canvasD = String.fromCharCode(102,95,49,53,95,105,109,112,114,105,110,116,0);
       let q_playerE = 2;
         humidityP /= Math.max(2, canvasD.length % (Math.max(3, 3)));
       let alertq = 1;
      let gpaye = reportY.size >= 6716142;
      do {
         reportY = new Map([[`${humidityP}`, canvasD.length]]);
         if (gpaye) {
            break;
         }
      } while (gpaye && (Array.from(reportY.keys()).includes(`${q_playerE}`)));
      let langkeyK = 8526215.0 >= membershipB;
      do {
         membershipB *= parseFloat(`${reportY.size | 2}`);
         if (langkeyK) {
            break;
         }
      } while (((3 * parseInt(`${membershipB}`)) >= 1 && 5.34 >= (4.46 * membershipB)) && langkeyK);
       let confirmation6 = 2.0;
          let downloaderA = true;
          let condensedw = String.fromCharCode(101,95,48,95,117,115,101,114,110,97,109,101,0);
         q_playerE /= Math.max(5, parseInt(`${confirmation6}`) & canvasD.length);
         downloaderA = condensedw.length <= 16;
         condensedw += `${(3 + (downloaderA ? 2 : 5))}`;
         reportY.set(canvasD, canvasD.length);
         canvasD += "2";
         membershipB *= parseFloat(`${parseInt(`${membershipB}`) | 3}`);
      if (humidityP >= reportY.size) {
          let tempP = String.fromCharCode(118,101,114,115,105,111,110,115,95,53,95,51,51,0);
          let thumbnail_ = 4.0;
         reportY = new Map([[`${alertq}`, alertq]]);
         tempP = "2";
         thumbnail_ -= tempP.length + parseInt(`${thumbnail_}`);
      }
          let handler4: Map<any, any> = new Map([[String.fromCharCode(122,95,53,57,95,98,121,116,101,111,117,116,0),false ], [String.fromCharCode(111,95,49,53,95,98,105,116,111,112,115,0),false ], [String.fromCharCode(112,114,111,98,105,110,103,95,50,95,55,50,0),true ]]);
          let grayR = 0.0;
         canvasD += `${parseInt(`${grayR}`)}`;
         handler4.set(`${handler4.size}`, handler4.size << (Math.min(4, Math.abs(handler4.size))));
         grayR += 1 | handler4.size;
      let heartZ = String.fromCharCode(101,114,50,110,105,103,103,95,51,112,0) == canvasD;
      do {
          let guidew = 2.0;
          let station5: Map<any, any> = new Map([[String.fromCharCode(109,95,53,48,95,119,101,98,109,101,110,99,0),426], [String.fromCharCode(103,95,57,57,95,116,101,108,101,103,114,97,112,104,0),998], [String.fromCharCode(98,95,51,50,95,111,108,100,101,115,116,0),294]]);
          let verticalE = String.fromCharCode(118,95,51,56,95,99,111,111,114,100,105,110,97,116,101,115,0);
         canvasD += `${(String.fromCharCode(118,0) == verticalE ? parseInt(`${confirmation6}`) : verticalE.length)}`;
         guidew += parseFloat(`${station5.size >> (Math.min(Math.abs(3), 2))}`);
         station5.set(`${guidew}`, 2 << (Math.min(2, Math.abs(parseInt(`${guidew}`)))));
         if (heartZ) {
            break;
         }
      } while (heartZ && ((membershipB * parseFloat(`${canvasD.length}`)) == 4.40));
         reportY = new Map([[`${humidityP}`, 3]]);
       let point0 = String.fromCharCode(100,111,119,110,108,111,97,100,95,117,95,50,49,0);
       let combinedd = String.fromCharCode(112,101,114,109,95,114,95,57,52,0);
      grey1 = `${description_1b.length}`;
      break;
   }
       let down6 = String.fromCharCode(97,95,55,49,95,105,110,102,111,0);
       let historyn: Map<any, any> = new Map([[String.fromCharCode(97,118,117,105,95,104,95,50,51,0),false ], [String.fromCharCode(109,101,116,101,114,95,49,95,55,52,0),true ], [String.fromCharCode(121,95,54,95,114,101,102,112,116,114,0),true ]]);
       let read5 = 0.0;
          let description_iq = 5;
         down6 = `${parseInt(`${read5}`)}`;
         description_iq *= description_iq << (Math.min(Math.abs(description_iq), 2));
         read5 /= Math.max(parseFloat(`${3 * parseInt(`${read5}`)}`), 1);
      while ((historyn.size << (Math.min(down6.length, 4))) > 2 && 2 > (2 << (Math.min(2, Math.abs(historyn.size))))) {
         historyn = new Map([[`${historyn.size}`, down6.length]]);
         break;
      }
       let gmailc = 5;
      while (1 < (down6.length + 2)) {
         gmailc %= Math.max(4, down6.length);
         break;
      }
       let unreadn: Array<any> = [String.fromCharCode(105,95,50,53,95,98,105,110,107,98,0), String.fromCharCode(115,117,98,116,97,115,107,95,106,95,50,48,0), String.fromCharCode(122,95,48,95,105,97,116,0)];
       let annerS: Array<any> = [597, 241, 232];
         unreadn = [historyn.size];
      let floateru = unreadn.length >= 5469310;
      do {
          let tickedl = 1.0;
          let redirectS: Array<any> = [114, 954];
         unreadn = [redirectS.length];
         tickedl /= Math.max(3, parseFloat(`${parseInt(`${tickedl}`)}`));
         redirectS.push(parseInt(`${tickedl}`));
         if (floateru) {
            break;
         }
      } while (((annerS.length << (Math.min(4, unreadn.length))) == 3) && floateru);
      let analyticsg = annerS.length <= 6560909;
      do {
         annerS = [1];
         if (analyticsg) {
            break;
         }
      } while (analyticsg && (1 == (down6.length + 3)));
      weiboM += `${3 >> (Math.min(4, Math.abs(parseInt(`${vertical6}`))))}`;

    clearTimeout(timer.current);

   while (episodesS.startsWith(navigationG)) {
       let watchW = 3.0;
       let taiwanx = String.fromCharCode(114,95,52,48,95,109,101,116,97,115,111,117,110,100,0);
       let reportI = String.fromCharCode(97,100,100,114,105,110,102,111,95,108,95,50,55,0);
       let sharedW: Array<any> = [246, 621];
       let charts = 3;
      for (let g = 0; g < 2; g++) {
          let vietnamP = String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,95,100,95,57,54,0);
          let previewh = String.fromCharCode(114,111,117,110,100,100,115,95,55,95,49,0);
          let pause5 = 0.0;
          let aboutg = true;
          let team1: Array<any> = [134, 893];
         taiwanx += `${parseInt(`${pause5}`) - 2}`;
         vietnamP = `${3 % (Math.max(8, team1.length))}`;
         previewh += `${previewh.length << (Math.min(Math.abs(3), 3))}`;
         pause5 /= Math.max(parseFloat(`${2 << (Math.min(5, previewh.length))}`), 2);
         aboutg = aboutg && team1.length >= 34;
      }
         reportI += `${3 - sharedW.length}`;
      if (4.84 < watchW) {
         charts += reportI.length >> (Math.min(1, Math.abs(parseInt(`${watchW}`))));
      }
         watchW *= parseFloat(`${taiwanx.length >> (Math.min(Math.abs(3), 4))}`);
          let icon5 = 2;
         reportI = "1";
         icon5 *= 3 + icon5;
      for (let c = 0; c < 3; c++) {
         sharedW = [parseInt(`${watchW}`) << (Math.min(2, Math.abs(3)))];
      }
          let benefitf: Map<any, any> = new Map([[String.fromCharCode(122,95,57,95,114,101,100,101,109,112,116,105,111,110,0),565], [String.fromCharCode(106,95,54,51,95,114,101,109,111,118,97,108,115,0),993]]);
         watchW *= parseFloat(`${taiwanx.length | 2}`);
         benefitf = new Map([[`${benefitf.size}`, benefitf.size % (Math.max(1, benefitf.size))]]);
         taiwanx += `${2 << (Math.min(4, reportI.length))}`;
         reportI += `${sharedW.length}`;
      if (3 >= (taiwanx.length * parseInt(`${watchW}`)) && (watchW * parseFloat(`${taiwanx.length}`)) >= 5.65) {
         watchW /= Math.max(4, parseFloat(`${reportI.length}`));
      }
          let teame: Array<any> = [688, 333, 718];
          let t_lockV: Array<any> = [787, 127, 645];
         taiwanx = `${charts << (Math.min(reportI.length, 3))}`;
         teame.push(teame.length << (Math.min(Math.abs(2), 3)));
         t_lockV.push(teame.length);
         taiwanx = "2";
          let appsS: Array<any> = [130, 720];
         taiwanx += `${3 + appsS.length}`;
          let listu: Map<any, any> = new Map([[String.fromCharCode(108,95,55,50,95,109,97,115,107,0),String.fromCharCode(104,95,57,55,95,103,101,116,98,105,116,0)], [String.fromCharCode(98,95,54,95,102,102,116,115,0),String.fromCharCode(104,105,100,105,110,103,95,108,95,49,55,0)]]);
         reportI += `${parseInt(`${watchW}`)}`;
         listu = new Map([[`${listu.size}`, 1]]);
          let yingk = 5.0;
          let text5: Map<any, any> = new Map([[String.fromCharCode(105,95,48,95,99,104,101,99,107,108,105,110,101,0),7], [String.fromCharCode(100,101,99,105,109,97,116,101,95,120,95,57,55,0),702]]);
         reportI += `${reportI.length & 2}`;
         yingk -= parseFloat(`${2}`);
         text5.set(`${yingk}`, parseInt(`${yingk}`));
      episodesS = `${episodesS.length * 2}`;
      break;
   }
   for (let q = 0; q < 3; q++) {
      index9 += `${index9.length}`;
   }
   for (let h = 0; h < 1; h++) {
      tickx = `${(weiboM == String.fromCharCode(116,0) ? weiboM.length : parseInt(`${vertical6}`))}`;
   }
       let moviesO = String.fromCharCode(118,95,53,51,95,103,122,105,112,112,101,100,0);
       let launch0 = 5.0;
       let eventC: Map<any, any> = new Map([[String.fromCharCode(105,109,101,114,95,98,95,54,54,0),745], [String.fromCharCode(105,99,111,110,115,95,116,95,57,54,0),519], [String.fromCharCode(112,97,114,97,109,95,48,95,53,0),582]]);
       let weiboI = 1.0;
      for (let e = 0; e < 1; e++) {
          let benefitE = 4.0;
          let appleg = String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,95,97,95,52,0);
          let eact_ = 0.0;
          let modalW: Array<any> = [62, 712, 620];
          let membershipk = 1.0;
         moviesO = "1";
         benefitE -= 3 & parseInt(`${benefitE}`);
         appleg = `${parseInt(`${benefitE}`)}`;
         eact_ *= parseFloat(`${1 & parseInt(`${membershipk}`)}`);
         modalW = [modalW.length - parseInt(`${benefitE}`)];
         membershipk *= 1;
      }
         weiboI += eventC.size;
      for (let m = 0; m < 1; m++) {
         eventC = new Map([[`${eventC.size}`, 1 ^ parseInt(`${launch0}`)]]);
      }
       let matchesp = 2.0;
         launch0 *= (parseFloat(`${String.fromCharCode(101,0) == moviesO ? moviesO.length : parseInt(`${weiboI}`)}`));
      let controld = moviesO.length <= 7333264;
      do {
         moviesO += `${(moviesO == String.fromCharCode(75,0) ? eventC.size : moviesO.length)}`;
         if (controld) {
            break;
         }
      } while (controld && (moviesO.includes(`${matchesp}`)));
      let watcho = eventC.size >= 7294681;
      do {
         eventC = new Map([[`${launch0}`, parseInt(`${weiboI}`) & parseInt(`${launch0}`)]]);
         if (watcho) {
            break;
         }
      } while (watcho && (Array.from(eventC.values()).includes(launch0)));
      while ((weiboI - 3.39) > 2.23) {
         weiboI /= Math.max(1, 3);
         break;
      }
      episodesS += `${parseInt(`${launch0}`) | tickx.length}`;
       let matchB = 1.0;
       let regengq = String.fromCharCode(105,95,52,52,95,105,110,100,101,102,105,110,105,116,101,0);
       let contextn = 5.0;
         contextn *= parseFloat(`${parseInt(`${matchB}`)}`);
      while ((5.80 - matchB) < 4.71) {
          let progresss = String.fromCharCode(101,110,118,95,121,95,55,48,0);
         matchB /= Math.max((parseFloat(`${String.fromCharCode(73,0) == progresss ? parseInt(`${matchB}`) : progresss.length}`)), 3);
         break;
      }
      if (contextn == 3.86) {
         regengq += "1";
      }
      while (!regengq.startsWith(`${matchB}`)) {
         regengq = `${parseInt(`${contextn}`) / (Math.max(regengq.length, 4))}`;
         break;
      }
      if (2.38 >= (contextn / (Math.max(2, parseFloat(`${regengq.length}`))))) {
         regengq += `${parseInt(`${contextn}`)}`;
      }
         regengq += `${parseInt(`${contextn}`)}`;
         regengq = `${parseInt(`${matchB}`)}`;
         matchB /= Math.max(3, parseFloat(`${2 * parseInt(`${matchB}`)}`));
         matchB += parseFloat(`${2}`);
      corner0 += `${(String.fromCharCode(80,0) == grey1 ? grey1.length : parseInt(`${matchB}`))}`;
   while (corner0 == navigationG) {
       let moviesy: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,115,116,95,107,95,49,54,0),String.fromCharCode(117,95,48,95,102,114,97,109,101,100,0)], [String.fromCharCode(115,95,50,49,95,103,101,116,116,105,109,101,0),String.fromCharCode(115,95,57,55,95,98,121,112,97,115,115,0)], [String.fromCharCode(112,101,101,114,105,100,95,51,95,55,49,0),String.fromCharCode(105,110,103,101,110,105,101,110,116,95,104,95,57,51,0)]]);
      let sharedE = 5048760 <= moviesy.size;
      do {
         moviesy = new Map([[`${moviesy.size}`, moviesy.size]]);
         if (sharedE) {
            break;
         }
      } while (sharedE && ((moviesy.size & moviesy.size) < 1 || (moviesy.size & 1) < 2));
      let singaporea = moviesy.size <= 7194231;
      do {
          let nativeU = String.fromCharCode(111,95,50,52,95,112,97,115,115,105,118,101,0);
          let downy: Map<any, any> = new Map([[String.fromCharCode(122,95,55,52,95,115,112,97,116,105,97,108,0),725], [String.fromCharCode(112,114,105,111,114,105,116,105,101,115,95,119,95,53,50,0),14]]);
          let hooksN = String.fromCharCode(112,114,111,100,117,99,101,114,95,110,95,52,51,0);
         moviesy.set(`${nativeU}`, nativeU.length);
         downy = new Map([[`${downy.size}`, downy.size]]);
         hooksN += `${hooksN.length}`;
         if (singaporea) {
            break;
         }
      } while (singaporea && (5 <= moviesy.size));
         moviesy = new Map([[`${moviesy.size}`, 2]]);
      navigationG += `${sentrys.length << (Math.min(5, episodesS.length))}`;
      break;
   }
      tickx = `${weiboM.length}`;
      corner0 += `${weiboM.length}`;
   for (let e = 0; e < 1; e++) {
       let thailandF = 1.0;
      while ((thailandF / 3.89) <= 3.64) {
         thailandF /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${thailandF}`)), 3))}`), 3);
         break;
      }
      while ((1.99 + thailandF) <= 4.29) {
          let customZ = 5.0;
          let screenf = String.fromCharCode(100,105,115,116,97,110,99,101,95,54,95,50,55,0);
          let userc = String.fromCharCode(112,95,54,51,95,104,111,114,110,0);
          let applen = 5.0;
         thailandF -= parseFloat(`${screenf.length}`);
         customZ -= parseFloat(`${parseInt(`${applen}`) + parseInt(`${customZ}`)}`);
         screenf += `${userc.length - 2}`;
         userc = `${parseInt(`${customZ}`) & userc.length}`;
         applen -= parseFloat(`${parseInt(`${customZ}`) | parseInt(`${applen}`)}`);
         break;
      }
       let orangeb = 2;
      description_1b = `${1 * parseInt(`${thailandF}`)}`;
   }
   for (let d = 0; d < 2; d++) {
      weiboM += `${weiboM.length}`;
   }
       let groupm: Map<any, any> = new Map([[String.fromCharCode(101,110,97,98,108,101,95,114,95,56,57,0),false ], [String.fromCharCode(116,101,115,116,114,97,110,115,95,103,95,56,54,0),false ]]);
       let orangeJ = String.fromCharCode(115,116,97,116,105,111,110,97,114,121,95,104,95,49,55,0);
      for (let o = 0; o < 3; o++) {
          let unticke: Array<any> = [164, 973];
          let ballG = String.fromCharCode(111,117,116,108,105,110,101,95,98,95,55,51,0);
         groupm = new Map([[`${groupm.size}`, groupm.size % 3]]);
         unticke.push((ballG == String.fromCharCode(85,0) ? ballG.length : unticke.length));
      }
      if ((orangeJ.length * groupm.size) <= 4 && 1 <= (4 * groupm.size)) {
         groupm.set(orangeJ, orangeJ.length);
      }
         groupm = new Map([[`${groupm.size}`, groupm.size % (Math.max(2, 7))]]);
       let combinedp = String.fromCharCode(102,95,54,56,95,114,101,103,105,115,116,101,114,0);
       let ajaxx = String.fromCharCode(117,110,100,101,114,108,105,110,101,95,122,95,53,52,0);
      for (let k = 0; k < 1; k++) {
         groupm.set(`${ajaxx}`, (ajaxx == String.fromCharCode(113,0) ? groupm.size : ajaxx.length));
      }
          let champion3: Map<any, any> = new Map([[String.fromCharCode(110,111,115,105,109,100,95,120,95,49,54,0),92], [String.fromCharCode(109,111,110,111,119,104,105,116,101,95,103,95,55,0),388], [String.fromCharCode(119,101,101,107,100,97,121,115,95,49,95,51,56,0),456]]);
          let window_t7: Map<any, any> = new Map([[String.fromCharCode(114,95,51,50,95,102,114,97,103,0),885], [String.fromCharCode(105,95,50,55,95,101,110,115,117,114,101,0),48]]);
         combinedp += `${window_t7.size}`;
         champion3.set(`${champion3.size}`, champion3.size);
         window_t7 = new Map([[`${champion3.size}`, champion3.size | champion3.size]]);
      weiboM = `${grey1.length >> (Math.min(5, corner0.length))}`;
    setShowOverlay(true);

       let fullU = String.fromCharCode(111,95,55,48,95,99,111,109,112,97,99,116,101,100,0);
      if (fullU.length == 2) {
         fullU = `${3 << (Math.min(3, fullU.length))}`;
      }
      while (fullU.length <= 2) {
         fullU = `${fullU.length % 2}`;
         break;
      }
      let entryU = fullU == String.fromCharCode(110,113,99,53,122,53,0);
      do {
         fullU += `${fullU.length / (Math.max(fullU.length, 2))}`;
         if (entryU) {
            break;
         }
      } while (entryU && (fullU == fullU));
      episodesS = `${parseInt(`${vertical6}`) << (Math.min(Math.abs(3), 5))}`;
       let schedule5 = 4.0;
       let lessy: Array<any> = [59, 922];
       let description_eq2 = String.fromCharCode(99,117,98,101,95,49,95,57,51,0);
      while (lessy.length > 4) {
          let goali = false;
          let analytic4 = String.fromCharCode(116,95,55,57,95,115,117,112,101,114,118,105,101,119,0);
          let searchbarU = String.fromCharCode(105,100,97,116,97,95,53,95,49,53,0);
          let controlY: Array<any> = [String.fromCharCode(103,95,51,55,95,105,110,115,101,116,115,0), String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,95,53,95,50,49,0)];
         lessy.push(description_eq2.length * 1);
         goali = searchbarU.length > controlY.length;
         analytic4 += `${(String.fromCharCode(55,0) == searchbarU ? analytic4.length : searchbarU.length)}`;
         controlY = [controlY.length | searchbarU.length];
         break;
      }
         schedule5 /= Math.max(lessy.length, 3);
         schedule5 -= 1;
      if ((parseInt(`${schedule5}`) - description_eq2.length) == 5 || 3 == (5 << (Math.min(4, description_eq2.length)))) {
         description_eq2 += `${parseInt(`${schedule5}`)}`;
      }
      let episodesE = 8417266 <= description_eq2.length;
      do {
         description_eq2 += "2";
         if (episodesE) {
            break;
         }
      } while (((2 - lessy.length) == 5) && episodesE);
      while (4.2 == (4.78 - schedule5) || 1.87 == (schedule5 - 4.78)) {
         schedule5 *= lessy.length;
         break;
      }
         description_eq2 = `${parseInt(`${schedule5}`) << (Math.min(lessy.length, 4))}`;
      for (let n = 0; n < 1; n++) {
         schedule5 *= (description_eq2 == String.fromCharCode(98,0) ? description_eq2.length : lessy.length);
      }
      while (2.71 >= (schedule5 / (Math.max(5.97, 3))) || (parseInt(`${schedule5}`) / (Math.max(lessy.length, 1))) >= 5) {
          let watchB = String.fromCharCode(116,104,114,101,115,104,111,108,100,115,95,112,95,50,53,0);
         lessy = [watchB.length * 1];
         break;
      }
      weiboM += `${sentrys.length}`;
   for (let e = 0; e < 1; e++) {
      weiboM += `${weiboM.length | 2}`;
   }
   for (let g = 0; g < 3; g++) {
       let helperP: Array<any> = [String.fromCharCode(104,101,99,111,95,106,95,53,52,0), String.fromCharCode(122,95,56,55,95,100,105,97,103,114,97,109,0), String.fromCharCode(108,95,49,48,95,110,118,111,105,99,101,0)];
       let linec = String.fromCharCode(102,95,51,51,95,116,114,117,110,99,97,116,101,100,0);
       let x_player5 = false;
       let mailJ = String.fromCharCode(97,95,52,53,95,99,111,109,109,105,116,0);
       let sportV = String.fromCharCode(110,95,54,50,95,115,117,98,106,111,117,114,110,97,108,0);
       let private_rK = 5;
       let shootJ = String.fromCharCode(110,97,118,95,113,95,54,51,0);
      let layouti = private_rK <= 8383747;
      do {
         private_rK %= Math.max(2, (private_rK % (Math.max(1, (x_player5 ? 3 : 2)))));
         if (layouti) {
            break;
         }
      } while (layouti && (5 >= (private_rK * 3) && 3 >= private_rK));
      if (!x_player5) {
          let floatere = String.fromCharCode(120,95,50,50,95,97,99,99,114,117,101,100,0);
          let fastforwardS = false;
          let borderless6: Map<any, any> = new Map([[String.fromCharCode(111,95,57,57,95,115,113,117,97,114,101,0),500], [String.fromCharCode(98,95,52,55,95,112,97,105,110,116,115,0),53]]);
          let soundf = 1.0;
          let full9 = 0.0;
         x_player5 = mailJ.length <= 5;
         floatere = "1";
         fastforwardS = 1 > borderless6.size;
         borderless6.set(`${soundf}`, parseInt(`${soundf}`) * 1);
         full9 -= 1;
      }
         mailJ += `${private_rK >> (Math.min(Math.abs(3), 4))}`;
          let ranka = String.fromCharCode(114,108,105,110,101,95,52,95,52,49,0);
          let darkg = String.fromCharCode(111,95,50,95,115,101,97,114,99,104,98,97,114,0);
         helperP.push(linec.length + sportV.length);
         ranka = `${2 * darkg.length}`;
         darkg = `${ranka.length}`;
      while (shootJ.length >= 5) {
          let tickedlm = String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,95,116,95,57,55,0);
         sportV += `${((x_player5 ? 4 : 1) & 3)}`;
         tickedlm = `${tickedlm.length - 2}`;
         break;
      }
      for (let z = 0; z < 1; z++) {
          let read_ = String.fromCharCode(109,105,120,105,110,103,95,118,95,57,55,0);
          let confirmationC = 0.0;
          let middleware3 = 2.0;
          let notificationy = 3.0;
         shootJ = `${linec.length}`;
         read_ += "1";
         confirmationC -= 2 & parseInt(`${confirmationC}`);
         middleware3 /= Math.max(3, parseInt(`${middleware3}`) * parseInt(`${notificationy}`));
         notificationy *= parseInt(`${confirmationC}`) << (Math.min(2, Math.abs(1)));
      }
      for (let k = 0; k < 2; k++) {
          let macauG = String.fromCharCode(114,101,108,101,97,115,101,95,57,95,54,56,0);
          let robotoz = 0;
         mailJ = `${(String.fromCharCode(112,0) == linec ? (x_player5 ? 2 : 2) : linec.length)}`;
         macauG += `${macauG.length}`;
         robotoz >>= Math.min(2, Math.abs((macauG == String.fromCharCode(85,0) ? macauG.length : robotoz)));
      }
          let uploadd = String.fromCharCode(103,108,111,98,97,108,116,101,109,95,48,95,54,54,0);
          let downloadedv = String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,48,95,49,48,0);
         linec = `${((x_player5 ? 4 : 1))}`;
         uploadd += `${uploadd.length ^ downloadedv.length}`;
         downloadedv += `${downloadedv.length % 2}`;
          let termsv = 0.0;
          let sideX: Map<any, any> = new Map([[String.fromCharCode(103,117,105,100,95,104,95,53,55,0),45], [String.fromCharCode(118,95,53,57,95,113,105,110,116,102,108,111,97,116,0),572], [String.fromCharCode(115,112,108,105,116,115,95,117,95,50,52,0),727]]);
          let founda: Map<any, any> = new Map([[String.fromCharCode(112,105,116,99,104,95,102,95,57,48,0),0], [String.fromCharCode(105,110,99,108,117,100,101,95,97,95,52,54,0),400], [String.fromCharCode(114,101,112,97,114,101,100,95,97,95,56,56,0),699]]);
         mailJ += `${founda.size}`;
         termsv -= parseInt(`${termsv}`) + sideX.size;
         sideX.set(`${termsv}`, sideX.size % (Math.max(6, parseInt(`${termsv}`))));
         founda = new Map([[`${sideX.size}`, 3]]);
         x_player5 = sportV.includes(`${private_rK}`);
      let clearJ = String.fromCharCode(108,110,104,52,0) == sportV;
      do {
         sportV = "3";
         if (clearJ) {
            break;
         }
      } while ((!sportV.includes(`${shootJ.length}`)) && clearJ);
         sportV = `${(String.fromCharCode(79,0) == shootJ ? shootJ.length : linec.length)}`;
      for (let e = 0; e < 1; e++) {
         x_player5 = ((sportV.length / (Math.max(3, (x_player5 ? sportV.length : 52)))) >= 52);
      }
      weiboM += `${sportV.length >> (Math.min(2, index9.length))}`;
   }
      grey1 = `${((network7 ? 1 : 3) & parseInt(`${indexK}`))}`;
      vertical6 += (String.fromCharCode(111,0) == corner0 ? description_1b.length : corner0.length);
       let episodeQ = 5.0;
      while ((episodeQ / (Math.max(episodeQ, 6))) <= 5.100 || (episodeQ / (Math.max(episodeQ, 10))) <= 5.100) {
          let update_4xv = 5.0;
         episodeQ *= parseFloat(`${parseInt(`${episodeQ}`) % 2}`);
         update_4xv /= Math.max(2, parseInt(`${update_4xv}`));
         break;
      }
      let moviesA = 6296991.0 <= episodeQ;
      do {
         episodeQ /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${episodeQ}`)), 1))}`), 3);
         if (moviesA) {
            break;
         }
      } while ((1.93 >= (2 - episodeQ)) && moviesA);
         episodeQ -= parseFloat(`${parseInt(`${episodeQ}`)}`);
      navigationG = `${parseInt(`${episodeQ}`) + sentrys.length}`;
   let collectiona = network7 ? !network7 : network7;
   do {
      network7 = description_1b == episodesS;
      if (collectiona) {
         break;
      }
   } while (collectiona && (vertical6 <= 5.5));
   let middlef = sentrys.length >= 7339711;
   do {
       let paginationZ = 2.0;
         paginationZ /= Math.max(parseFloat(`${3}`), 3);
       let referrerD = true;
          let screenD = false;
         referrerD = 33.85 < paginationZ;
         screenD = !screenD;
      sentrys = `${1 - episodesS.length}`;
      if (middlef) {
         break;
      }
   } while (middlef && (sentrys.length > 4));
      grey1 += `${grey1.length * parseInt(`${indexK}`)}`;
      tickx = `${grey1.length << (Math.min(index9.length, 2))}`;
    overlayRef.current = true

   let leftw = 7260439.0 >= vertical6;
   do {
      vertical6 += 2;
      if (leftw) {
         break;
      }
   } while ((5 < (grey1.length / (Math.max(2, 1))) || (vertical6 * 5.39) < 2.78) && leftw);
      submitn.push(2);
      tickx = `${((network7 ? 2 : 3) / (Math.max(2, 8)))}`;
   if (5.66 <= (2.15 + indexK) && (2.15 + indexK) <= 2.67) {
      navigationG += "3";
   }
   if (weiboM == navigationG) {
      navigationG = "2";
   }
   if (description_1b == String.fromCharCode(48,0)) {
      index9 += `${((network7 ? 4 : 3))}`;
   }
      indexK /= Math.max(1, parseFloat(`${index9.length}`));
   while (grey1 != corner0) {
       let agreementq = false;
       let connectionWK = String.fromCharCode(100,114,105,102,116,95,121,95,57,53,0);
      while (connectionWK.startsWith(`${agreementq}`)) {
          let reducere: Map<any, any> = new Map([[String.fromCharCode(106,95,52,55,95,113,117,97,100,115,0),444], [String.fromCharCode(104,95,50,51,95,99,104,97,114,97,99,116,101,114,0),552], [String.fromCharCode(101,95,49,57,95,116,105,109,101,117,116,105,108,115,0),972]]);
          let condensedQ = String.fromCharCode(97,95,54,56,95,112,114,111,104,105,98,105,116,0);
         agreementq = condensedQ.includes(`${agreementq}`);
         reducere = new Map([[`${reducere.size}`, reducere.size]]);
         condensedQ += `${reducere.size % (Math.max(10, reducere.size))}`;
         break;
      }
      let humidityf = agreementq ? !agreementq : agreementq;
      do {
         agreementq = agreementq || connectionWK.length < 22;
         if (humidityf) {
            break;
         }
      } while (humidityf && (agreementq && connectionWK.length > 4));
      let recommendationi = agreementq ? !agreementq : agreementq;
      do {
         agreementq = !agreementq;
         if (recommendationi) {
            break;
         }
      } while ((connectionWK.includes(`${agreementq}`)) && recommendationi);
         agreementq = !agreementq;
       let video4 = String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,107,95,57,50,0);
       let incidentq = String.fromCharCode(98,108,111,99,107,100,115,112,95,114,95,57,54,0);
       let disconnectedw = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,120,95,56,52,0);
      corner0 = `${(corner0 == String.fromCharCode(105,0) ? (agreementq ? 2 : 5) : corner0.length)}`;
      break;
   }
   if (episodesS.length > sentrys.length) {
      sentrys = "3";
   }
   while (2 >= (parseInt(`${vertical6}`) + grey1.length) || 2 >= (parseInt(`${vertical6}`) + grey1.length)) {
       let c_imageh = String.fromCharCode(104,95,51,55,95,99,102,116,121,112,101,114,101,102,0);
       let mini1 = 2;
      while (mini1 <= 5) {
         c_imageh += `${c_imageh.length | mini1}`;
         break;
      }
      for (let j = 0; j < 1; j++) {
         mini1 *= 3 >> (Math.min(1, c_imageh.length));
      }
      for (let c = 0; c < 1; c++) {
         mini1 += mini1 ^ c_imageh.length;
      }
         c_imageh += `${1 << (Math.min(4, Math.abs(mini1)))}`;
         c_imageh += `${mini1 * 1}`;
          let projectI = String.fromCharCode(112,95,53,55,95,112,114,101,100,105,99,116,105,118,101,0);
         mini1 ^= c_imageh.length;
         projectI += `${2 ^ projectI.length}`;
      grey1 += `${mini1}`;
      break;
   }
   if (indexK == 5.36) {
      submitn = [tickx.length | 3];
   }
    timer.current = setTimeout(() => setShowOverlay(false), 3000);
  };

  const handleSeek = useCallback((value: number) => {
    if (!isVideoReadyIos && Platform.OS === 'ios') return;
    if (!isVideoReadyAndroid && Platform.OS === 'android') return;

    if (Number.isNaN(value)) {
      value = 0;
    }

    if (!onSliding) setOnSliding(true);

    showControls();
    updateVideoDuration(value);
    seekVideo(value);
  }, [isVideoReadyIos, isVideoReadyAndroid, onSliding]);

  const seekVideo = useCallback(
    debounce((value) => {
       let nextt: Map<any, any> = new Map([[String.fromCharCode(102,95,54,56,95,114,117,110,110,105,110,103,0),95], [String.fromCharCode(116,97,112,115,95,118,95,53,48,0),417], [String.fromCharCode(115,112,101,99,116,114,117,109,95,56,95,50,0),903]]);
    let selected1 = 0.0;
    let success7: Array<any> = [String.fromCharCode(106,95,49,57,95,111,118,101,114,117,115,101,0), String.fromCharCode(112,114,111,118,105,100,101,114,115,95,113,95,53,48,0)];
    let filed5 = 1.0;
    let hejiP: Array<any> = [250, 644];
    let l_countl = String.fromCharCode(110,95,53,95,102,98,100,101,118,0);
    let leaguez = true;
    let combine3: Array<any> = [853, 402, 645];
    let langkeyq = String.fromCharCode(100,95,53,95,99,111,108,108,105,115,116,0);
    let xvodD = String.fromCharCode(104,95,50,48,95,99,111,109,98,105,110,101,100,0);
    let termsL = 3;
    let movies4: Array<any> = [730, 32];
    let customu = true;
    let modelsy = String.fromCharCode(109,101,115,104,101,115,95,113,95,50,48,0);
    let tick6 = String.fromCharCode(101,95,50,53,95,99,111,108,108,105,100,101,114,0);
    let z_positionf: Map<any, any> = new Map([[String.fromCharCode(120,95,49,95,115,112,111,116,108,105,103,104,116,0),String.fromCharCode(113,95,51,95,99,111,99,111,115,100,120,0)], [String.fromCharCode(117,110,108,111,99,107,95,103,95,57,0),String.fromCharCode(118,95,56,55,95,102,97,109,105,108,121,0)]]);
    let login6 = false;
      selected1 /= Math.max(hejiP.length / (Math.max(2, 4)), 2);
   for (let i = 0; i < 2; i++) {
      selected1 -= parseInt(`${filed5}`);
   }
   let modelsD = nextt.size <= 6037824;
   do {
      nextt = new Map([[`${combine3.length}`, combine3.length]]);
      if (modelsD) {
         break;
      }
   } while (modelsD && (3 <= (termsL * 1) && (termsL * nextt.size) <= 1));
      combine3.push(3);
   let internetM = 9521935 <= nextt.size;
   do {
      nextt.set(`${selected1}`, success7.length >> (Math.min(5, Math.abs(parseInt(`${selected1}`)))));
      if (internetM) {
         break;
      }
   } while (internetM && (2 == (combine3.length / (Math.max(nextt.size, 10))) && 1 == (combine3.length / (Math.max(2, 4)))));
      hejiP = [parseInt(`${selected1}`) + 3];
      xvodD = `${movies4.length}`;
       let indicatorH = String.fromCharCode(106,95,56,57,95,99,117,114,114,0);
         indicatorH = `${indicatorH.length * indicatorH.length}`;
      for (let i = 0; i < 2; i++) {
          let detail6: Array<any> = [803, 400, 848];
          let shrinko = String.fromCharCode(112,107,116,99,112,121,95,112,95,56,54,0);
          let y_centerM = String.fromCharCode(116,121,112,105,110,103,95,98,95,50,49,0);
          let loadingz = 3.0;
         indicatorH += `${(shrinko == String.fromCharCode(98,0) ? shrinko.length : detail6.length)}`;
         detail6.push(1);
         y_centerM = `${parseInt(`${loadingz}`) << (Math.min(y_centerM.length, 2))}`;
         loadingz -= parseInt(`${loadingz}`) * y_centerM.length;
      }
       let notificationG: Map<any, any> = new Map([[String.fromCharCode(118,95,54,95,112,114,111,118,105,100,101,115,0),29], [String.fromCharCode(102,102,105,111,95,122,95,53,52,0),702]]);
      combine3.push(l_countl.length);
   while (l_countl == langkeyq) {
      langkeyq += `${combine3.length}`;
      break;
   }


      if (videoRef.current) {

       let emptyo = 3.0;
       let history3 = 2.0;
       let tickedB = true;
         history3 /= Math.max(5, (parseFloat(`${(tickedB ? 5 : 2) ^ parseInt(`${history3}`)}`)));
      while (2.37 <= (2.35 - emptyo) || 3.82 <= (2.35 - emptyo)) {
          let nalyticsj = 0;
          let moviesT: Map<any, any> = new Map([[String.fromCharCode(118,105,122,105,101,114,95,54,95,57,49,0),String.fromCharCode(113,95,52,49,95,105,109,112,111,114,116,0)], [String.fromCharCode(119,95,53,54,95,113,116,97,98,108,101,0),String.fromCharCode(119,95,51,54,95,116,114,105,103,103,101,114,101,100,0)], [String.fromCharCode(116,95,52,56,95,114,101,102,101,114,101,110,99,101,115,0),String.fromCharCode(105,109,97,103,101,95,53,95,54,54,0)]]);
         history3 *= parseFloat(`${parseInt(`${emptyo}`)}`);
         nalyticsj -= nalyticsj - 2;
         moviesT.set(`${nalyticsj}`, 2 >> (Math.min(5, Math.abs(moviesT.size))));
         break;
      }
      if ((history3 / 1) == 1.87) {
          let telegramr = 1.0;
          let constants9 = 4;
         emptyo -= 2;
         telegramr += parseInt(`${telegramr}`) << (Math.min(2, Math.abs(constants9)));
         constants9 -= 2;
      }
         tickedB = 38.80 >= history3;
      let infoK = 9605803.0 >= emptyo;
      do {
          let fulli = false;
          let switch_c6O: Map<any, any> = new Map([[String.fromCharCode(109,100,99,116,95,113,95,53,52,0),String.fromCharCode(99,111,110,118,95,56,95,51,52,0)], [String.fromCharCode(112,95,49,56,95,109,97,121,0),String.fromCharCode(102,95,55,52,95,100,105,115,112,108,97,121,0)]]);
         emptyo *= ((tickedB ? 2 : 2));
         fulli = 29 < switch_c6O.size || 29 < switch_c6O.size;
         if (infoK) {
            break;
         }
      } while (infoK && ((emptyo - 5.99) <= 1.68));
      while ((1.13 - emptyo) > 2.21 || !tickedB) {
         tickedB = history3 < emptyo;
         break;
      }
          let verticalp = String.fromCharCode(99,108,97,109,112,95,114,95,54,48,0);
          let acceptedi: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,111,110,101,100,95,98,95,50,51,0),459], [String.fromCharCode(106,95,53,95,112,114,105,109,101,0),652], [String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,102,95,56,55,0),784]]);
          let with_ca: Array<any> = [516, 315, 741];
         history3 /= Math.max(5, parseFloat(`${3}`));
         verticalp += `${verticalp.length}`;
         acceptedi.set(`${with_ca.length}`, acceptedi.size);
         with_ca = [acceptedi.size];
      for (let h = 0; h < 2; h++) {
         history3 *= parseFloat(`${parseInt(`${emptyo}`)}`);
      }
         history3 *= (parseFloat(`${parseInt(`${history3}`) >> (Math.min(1, Math.abs((tickedB ? 3 : 1))))}`));
      nextt = new Map([[`${combine3.length}`, parseInt(`${history3}`) << (Math.min(combine3.length, 5))]]);
   let telegram_ = leaguez ? !leaguez : leaguez;
   do {
       let found_ = String.fromCharCode(112,97,101,116,104,95,104,95,52,51,0);
       let injuryo = String.fromCharCode(112,114,105,110,116,97,98,108,101,95,57,95,54,48,0);
       let downK = String.fromCharCode(121,100,97,121,95,99,95,57,0);
          let friendsW = 5.0;
          let orientationw: Array<any> = [739, 757, 474];
         injuryo += `${orientationw.length}`;
         friendsW -= parseInt(`${friendsW}`);
         orientationw.push(3);
      let frame_y1B = 8943424 <= found_.length;
      do {
         found_ += `${found_.length}`;
         if (frame_y1B) {
            break;
         }
      } while ((5 <= found_.length && injuryo == String.fromCharCode(102,0)) && frame_y1B);
      if (downK != String.fromCharCode(67,0)) {
         found_ = `${found_.length}`;
      }
          let r_centerb = 5.0;
         downK += `${(downK == String.fromCharCode(100,0) ? injuryo.length : downK.length)}`;
         r_centerb += parseFloat(`${parseInt(`${r_centerb}`)}`);
          let signinupz = false;
         downK = `${downK.length * 2}`;
         signinupz = !signinupz && signinupz;
      for (let i = 0; i < 1; i++) {
         injuryo += `${(String.fromCharCode(50,0) == injuryo ? found_.length : injuryo.length)}`;
      }
      while (injuryo.startsWith(downK)) {
         downK = `${(found_ == String.fromCharCode(80,0) ? injuryo.length : found_.length)}`;
         break;
      }
      while (downK.length < injuryo.length) {
          let container6: Map<any, any> = new Map([[String.fromCharCode(103,95,51,56,95,116,114,97,110,115,102,111,114,109,0),293], [String.fromCharCode(102,97,109,105,108,121,95,119,95,51,54,0),625]]);
          let carouselM = false;
          let spinnerW = 5.0;
          let xvodr = 5.0;
          let sinaY = String.fromCharCode(97,95,55,95,102,117,114,116,104,101,114,0);
         downK += `${1 - parseInt(`${spinnerW}`)}`;
         container6.set(sinaY, (String.fromCharCode(57,0) == sinaY ? sinaY.length : parseInt(`${xvodr}`)));
         carouselM = xvodr > 34.51;
         spinnerW -= 3 >> (Math.min(Math.abs(parseInt(`${xvodr}`)), 2));
         break;
      }
       let rankn: Map<any, any> = new Map([[String.fromCharCode(98,102,108,121,95,121,95,53,0),775], [String.fromCharCode(109,95,52,54,95,100,101,115,101,114,105,97,108,105,122,101,100,0),882], [String.fromCharCode(115,112,101,99,95,114,95,52,0),104]]);
       let nalytics3: Map<any, any> = new Map([[String.fromCharCode(104,97,108,102,100,95,48,95,56,48,0),820], [String.fromCharCode(118,95,57,50,95,100,105,100,0),353]]);
      leaguez = (l_countl.length >> (Math.min(2, success7.length))) >= 25;
      if (telegram_) {
         break;
      }
   } while ((leaguez) && telegram_);
   let shirt2 = 8906705 <= l_countl.length;
   do {
       let target8: Map<any, any> = new Map([[String.fromCharCode(116,95,57,53,95,115,116,100,101,114,114,0),967], [String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,102,95,56,0),526]]);
       let reducerc: Map<any, any> = new Map([[String.fromCharCode(100,95,52,56,95,101,118,97,108,102,117,110,99,0),String.fromCharCode(119,95,57,52,95,115,117,115,112,101,110,100,101,100,0)], [String.fromCharCode(105,110,118,105,116,101,114,95,100,95,55,0),String.fromCharCode(117,95,51,51,95,108,111,119,98,105,116,115,0)]]);
         target8.set(`${target8.size}`, reducerc.size & 1);
         reducerc.set(`${target8.size}`, target8.size);
          let moonc: Array<any> = [String.fromCharCode(118,95,51,57,95,115,111,110,101,119,99,111,110,110,0), String.fromCharCode(109,111,100,105,102,121,95,49,95,50,56,0), String.fromCharCode(112,111,114,116,95,108,95,50,52,0)];
          let plusy = 0.0;
         reducerc.set(`${reducerc.size}`, target8.size);
         moonc.push(parseInt(`${plusy}`) % (Math.max(moonc.length, 8)));
         plusy /= Math.max(3, parseFloat(`${parseInt(`${plusy}`) - 1}`));
      while (Array.from(target8.keys()).includes(`${reducerc.size}`)) {
         target8 = new Map([[`${target8.size}`, 1 >> (Math.min(3, Math.abs(target8.size)))]]);
         break;
      }
      for (let h = 0; h < 3; h++) {
         target8 = new Map([[`${target8.size}`, reducerc.size]]);
      }
      for (let v = 0; v < 1; v++) {
         target8 = new Map([[`${target8.size}`, target8.size & 1]]);
      }
      l_countl += `${target8.size + reducerc.size}`;
      if (shirt2) {
         break;
      }
   } while ((l_countl.includes(`${success7.length}`)) && shirt2);
   let pointT = combine3.length >= 8040990;
   do {
       let scoreP = String.fromCharCode(110,95,51,50,95,116,115,120,0);
       let condensedZ = String.fromCharCode(101,95,51,56,95,116,105,109,101,105,110,102,111,114,99,101,0);
       let room2 = String.fromCharCode(97,95,50,51,95,101,113,117,105,108,105,98,114,105,117,109,0);
       let taiwani = 0.0;
       let largeU = String.fromCharCode(115,111,110,105,99,95,107,95,56,51,0);
       let resendJ = String.fromCharCode(113,95,49,52,95,115,109,97,108,108,101,115,116,0);
         scoreP += "2";
      if (resendJ.length < largeU.length) {
          let configo = String.fromCharCode(98,114,101,97,100,95,111,95,53,0);
          let xcopy_4mY: Map<any, any> = new Map([[String.fromCharCode(113,122,98,105,110,95,111,95,50,57,0),810], [String.fromCharCode(112,95,50,52,95,99,97,114,114,121,0),558]]);
          let containerY = String.fromCharCode(100,111,116,115,95,118,95,52,49,0);
          let mail5: Map<any, any> = new Map([[String.fromCharCode(111,95,55,52,95,97,109,114,119,98,0),262], [String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,116,95,50,54,0),862], [String.fromCharCode(107,101,121,102,114,97,109,101,95,56,95,54,56,0),74]]);
         largeU += `${parseInt(`${taiwani}`)}`;
         configo += `${(String.fromCharCode(95,0) == configo ? mail5.size : configo.length)}`;
         xcopy_4mY.set(configo, xcopy_4mY.size % (Math.max(10, configo.length)));
         containerY = `${xcopy_4mY.size + mail5.size}`;
      }
          let lightC = String.fromCharCode(106,95,54,56,95,108,97,116,101,114,0);
          let product_ = 0.0;
          let combined9: Array<any> = [727, 474, 490];
         scoreP += `${combined9.length / (Math.max(8, parseInt(`${taiwani}`)))}`;
         lightC = `${parseInt(`${product_}`) / (Math.max(lightC.length, 4))}`;
         product_ -= parseFloat(`${2}`);
         combined9 = [parseInt(`${product_}`) % (Math.max(lightC.length, 7))];
       let feedbackI: Array<any> = [656, 746];
      for (let g = 0; g < 2; g++) {
          let update_h6f = 1.0;
          let const_aT = String.fromCharCode(115,101,108,101,99,116,105,111,110,95,119,95,57,50,0);
          let robotoc = String.fromCharCode(111,95,49,49,95,109,101,97,115,117,114,101,0);
         condensedZ += `${(String.fromCharCode(102,0) == resendJ ? resendJ.length : parseInt(`${taiwani}`))}`;
         update_h6f *= const_aT.length;
         const_aT += `${const_aT.length - 3}`;
         robotoc += `${1 ^ const_aT.length}`;
      }
      for (let z = 0; z < 3; z++) {
         largeU += `${parseInt(`${taiwani}`)}`;
      }
       let contextb = 1.0;
          let style4 = true;
         feedbackI = [largeU.length];
         style4 = !style4;
      let a_playerV = 9293335 <= largeU.length;
      do {
         largeU = `${parseInt(`${contextb}`) >> (Math.min(feedbackI.length, 2))}`;
         if (a_playerV) {
            break;
         }
      } while ((scoreP.length < 3) && a_playerV);
         room2 = `${resendJ.length}`;
         resendJ += `${room2.length}`;
      for (let j = 0; j < 2; j++) {
         condensedZ = `${scoreP.length + feedbackI.length}`;
      }
         taiwani *= parseFloat(`${condensedZ.length}`);
      let uploadG = feedbackI.length >= 5207767;
      do {
         feedbackI.push(feedbackI.length & room2.length);
         if (uploadG) {
            break;
         }
      } while ((!resendJ.endsWith(`${feedbackI.length}`)) && uploadG);
      combine3.push(hejiP.length | 3);
      if (pointT) {
         break;
      }
   } while (pointT && (!combine3.includes(filed5)));
       let z_titleR = String.fromCharCode(102,95,56,49,95,102,111,111,116,98,97,108,108,0);
      while (z_titleR == String.fromCharCode(114,0)) {
         z_titleR = `${z_titleR.length}`;
         break;
      }
          let submit_ = String.fromCharCode(104,97,115,104,101,114,95,57,95,49,54,0);
         z_titleR = `${submit_.length}`;
         z_titleR = `${z_titleR.length}`;
      langkeyq += `${l_countl.length}`;
      l_countl += `${hejiP.length * 2}`;
      termsL += termsL;
   for (let l = 0; l < 1; l++) {
      xvodD = `${parseInt(`${filed5}`) / (Math.max(nextt.size, 6))}`;
   }
       let rankR = String.fromCharCode(110,117,109,101,114,105,99,97,108,95,49,95,55,55,0);
      for (let y = 0; y < 2; y++) {
         rankR = `${rankR.length << (Math.min(Math.abs(2), 4))}`;
      }
      while (rankR != rankR) {
         rankR += `${rankR.length + 1}`;
         break;
      }
      if (rankR.length <= rankR.length) {
         rankR += `${rankR.length}`;
      }
      hejiP.push(3 ^ xvodD.length);
        videoRef.current.seek(value);

   let navigationW = customu ? !customu : customu;
   do {
      customu = l_countl.length > combine3.length;
      if (navigationW) {
         break;
      }
   } while (navigationW && (3.50 < filed5 || (3.50 / (Math.max(8, filed5))) < 1.29));
   while (1.75 <= (filed5 + 5.34) || !customu) {
       let gmailJ = 0;
       let settingj = String.fromCharCode(114,101,108,101,97,115,101,100,95,112,95,55,53,0);
       let gemfilel = String.fromCharCode(118,99,116,101,115,116,95,113,95,55,49,0);
         gmailJ |= gemfilel.length;
         gmailJ %= Math.max(2, 1 * settingj.length);
      filed5 += hejiP.length;
      break;
   }
   let details_ = 8048546.0 >= filed5;
   do {
      filed5 -= 1 / (Math.max(1, parseInt(`${selected1}`)));
      if (details_) {
         break;
      }
   } while ((langkeyq.startsWith(`${filed5}`)) && details_);
   if (2 < (4 >> (Math.min(2, xvodD.length))) && (xvodD.length >> (Math.min(Math.abs(4), 2))) < 3) {
      xvodD = `${(l_countl.length >> (Math.min(3, Math.abs((leaguez ? 4 : 4)))))}`;
   }
   while (4 == xvodD.length) {
      langkeyq = `${parseInt(`${filed5}`) + 2}`;
      break;
   }
   if (langkeyq.endsWith(`${termsL}`)) {
       let pingb = String.fromCharCode(109,95,49,57,95,121,117,118,103,98,114,112,0);
          let chinaF = false;
          let activej = 0.0;
          let with_g4 = String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,98,95,56,51,0);
         pingb = `${with_g4.length}`;
         chinaF = 36.68 > activej;
         activej /= Math.max(3, (parseFloat(`${parseInt(`${activej}`) >> (Math.min(3, Math.abs((chinaF ? 3 : 4))))}`)));
         with_g4 += `${1 % (Math.max(parseInt(`${activej}`), 10))}`;
      while (pingb.startsWith(`${pingb.length}`)) {
         pingb += `${2 + pingb.length}`;
         break;
      }
         pingb = "2";
      termsL ^= langkeyq.length ^ nextt.size;
   }
   let next0 = 5066948.0 <= filed5;
   do {
      filed5 /= Math.max(((customu ? 3 : 4) % 3), 1);
      if (next0) {
         break;
      }
   } while ((!combine3.includes(filed5)) && next0);
      leaguez = 99 >= langkeyq.length;
      l_countl = `${(l_countl == String.fromCharCode(74,0) ? movies4.length : l_countl.length)}`;
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current]
  );

  const handlePlayPause = () => {
       let orangeX = String.fromCharCode(120,95,57,55,95,112,105,112,101,108,111,115,115,0);
    let episodesn = String.fromCharCode(97,95,52,48,95,112,114,101,97,109,98,108,101,0);
    let shared3 = String.fromCharCode(98,101,101,110,95,52,95,53,49,0);
    let resendn = String.fromCharCode(109,111,109,101,110,116,115,95,51,95,56,48,0);
    let with_4xs = String.fromCharCode(99,108,105,99,107,95,49,95,50,54,0);
    let checkboxD = 2.0;
    let thumbnailC = false;
    let downloaded0 = 1;
      checkboxD *= parseFloat(`${parseInt(`${checkboxD}`)}`);
   for (let r = 0; r < 1; r++) {
       let zhuboh: Array<any> = [122, 231];
       let photoV = 3;
       let eactp = 3.0;
       let spinner2 = String.fromCharCode(122,95,53,49,95,107,101,121,98,117,102,0);
       let zhengpianI = String.fromCharCode(107,95,57,51,95,108,97,100,100,101,114,115,116,101,112,0);
       let pointy = String.fromCharCode(98,117,99,107,101,116,95,105,95,51,51,0);
      let blackt = eactp <= 6488638.0;
      do {
         eactp /= Math.max(3, parseInt(`${eactp}`) / (Math.max(1, spinner2.length)));
         if (blackt) {
            break;
         }
      } while (blackt && (1 >= (pointy.length - 5)));
      for (let l = 0; l < 2; l++) {
         photoV %= Math.max(2, zhengpianI.length << (Math.min(4, Math.abs(parseInt(`${eactp}`)))));
      }
      while ((pointy.length & zhuboh.length) == 3 && 1 == (3 & pointy.length)) {
         pointy += `${zhengpianI.length << (Math.min(1, zhuboh.length))}`;
         break;
      }
      if (!zhengpianI.endsWith(`${eactp}`)) {
          let homeG: Array<any> = [String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,103,95,54,50,0), String.fromCharCode(115,112,97,119,110,95,107,95,55,56,0)];
         zhengpianI += `${parseInt(`${eactp}`)}`;
         homeG.push(homeG.length % (Math.max(3, 3)));
      }
          let nativeK = true;
          let auto_j6 = String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,48,95,54,56,0);
         pointy = "2";
         nativeK = !nativeK;
         auto_j6 = `${auto_j6.length >> (Math.min(Math.abs(2), 4))}`;
         pointy = `${photoV}`;
         spinner2 = `${parseInt(`${eactp}`)}`;
          let stringM = 5.0;
          let indicator5: Array<any> = [601, 248];
         pointy += `${3 | spinner2.length}`;
         stringM -= parseFloat(`${indicator5.length ^ 2}`);
         indicator5 = [parseInt(`${stringM}`) | 2];
       let eventF = String.fromCharCode(119,105,108,100,99,97,114,100,95,122,95,49,48,0);
         zhuboh.push(pointy.length ^ 3);
       let common1 = false;
       let m_imageU = false;
      with_4xs += `${1 | parseInt(`${eactp}`)}`;
   }
   if (5.7 <= checkboxD) {
       let register_2o = String.fromCharCode(106,95,51,51,95,109,117,120,101,114,115,0);
      while (register_2o.length == 3) {
         register_2o = `${register_2o.length & 3}`;
         break;
      }
      if (register_2o == String.fromCharCode(115,0)) {
         register_2o = `${register_2o.length % (Math.max(2, 4))}`;
      }
         register_2o += "1";
      checkboxD += parseFloat(`${episodesn.length << (Math.min(4, resendn.length))}`);
   }
      with_4xs = `${(parseInt(`${checkboxD}`) - (thumbnailC ? 4 : 5))}`;
       let trashq = 4.0;
       let reducerf = String.fromCharCode(97,110,109,114,95,116,95,52,51,0);
       let singleu = String.fromCharCode(105,110,110,101,114,95,57,95,55,57,0);
         reducerf = "1";
       let comment0 = false;
       let homeB = true;
      if (homeB) {
         homeB = String.fromCharCode(119,0) == reducerf && 30.72 <= trashq;
      }
      while (comment0 && 5 == singleu.length) {
          let linkK = 0;
         comment0 = reducerf.length > 16;
         linkK <<= Math.min(Math.abs(linkK), 3);
         break;
      }
         singleu += "1";
          let awaym = 3.0;
         trashq += 2;
         awaym -= parseFloat(`${parseInt(`${awaym}`) >> (Math.min(Math.abs(parseInt(`${awaym}`)), 2))}`);
      while (comment0 || 1 >= singleu.length) {
          let refreshT = 2.0;
          let circle7 = 2.0;
         comment0 = singleu == String.fromCharCode(77,0);
         refreshT += parseFloat(`${parseInt(`${circle7}`)}`);
         break;
      }
          let filedy = String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,56,95,57,51,0);
          let rewindn = 0.0;
         reducerf = `${filedy.length}`;
         filedy += "3";
         rewindn *= parseFloat(`${parseInt(`${rewindn}`)}`);
          let roomx = 3;
          let sportG = String.fromCharCode(104,95,57,51,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
         reducerf += `${((homeB ? 1 : 3))}`;
         roomx %= Math.max(2 & roomx, 2);
         sportG = "1";
      resendn += `${(String.fromCharCode(99,0) == episodesn ? parseInt(`${trashq}`) : episodesn.length)}`;

    clearTimeout(iconTimer.current);

   let vcopy__f = checkboxD <= 5057412.0;
   do {
      checkboxD += parseFloat(`${resendn.length}`);
      if (vcopy__f) {
         break;
      }
   } while ((!thumbnailC) && vcopy__f);
   if (resendn.length == 5) {
       let guide4 = String.fromCharCode(108,95,53,54,95,110,111,105,115,101,0);
       let searchh = 1;
       let sellh = String.fromCharCode(111,95,49,52,95,112,114,101,108,111,97,100,105,110,103,0);
       let pressureG = String.fromCharCode(107,95,50,48,95,100,101,102,101,114,0);
       let memberB = String.fromCharCode(100,95,55,56,95,115,111,109,101,0);
      if (1 >= searchh) {
         searchh *= guide4.length;
      }
         pressureG += "1";
       let tooltipsj = 3.0;
       let switch_1s = 0.0;
      let scheduleM = searchh >= 6450764;
      do {
         searchh += pressureG.length & 2;
         if (scheduleM) {
            break;
         }
      } while (scheduleM && (!sellh.endsWith(`${searchh}`)));
         sellh = `${3 - searchh}`;
         guide4 = "1";
      let privilege3 = 6644470 >= memberB.length;
      do {
         memberB = "1";
         if (privilege3) {
            break;
         }
      } while (privilege3 && ((parseInt(`${tooltipsj}`) - 2) > 5 && 3.87 > (tooltipsj - parseFloat(`${memberB.length}`))));
      while (2.96 >= tooltipsj) {
         memberB = `${pressureG.length}`;
         break;
      }
          let sliderl = 3.0;
         searchh %= Math.max(5, (guide4 == String.fromCharCode(69,0) ? guide4.length : sellh.length));
         sliderl /= Math.max(2, parseFloat(`${1}`));
       let backwardH = String.fromCharCode(100,105,118,105,100,105,110,103,95,107,95,52,56,0);
      for (let r = 0; r < 2; r++) {
         tooltipsj -= parseFloat(`${2}`);
      }
      while (!memberB.startsWith(`${guide4.length}`)) {
         memberB += "2";
         break;
      }
         memberB += `${backwardH.length * 2}`;
         sellh = `${backwardH.length}`;
      let servicez = String.fromCharCode(120,119,117,57,57,109,107,0) == sellh;
      do {
         sellh += `${pressureG.length}`;
         if (servicez) {
            break;
         }
      } while (((5 * searchh) >= 5 && (5 * sellh.length) >= 4) && servicez);
      orangeX += `${3 << (Math.min(5, pressureG.length))}`;
   }
      thumbnailC = 70 >= resendn.length && String.fromCharCode(70,0) == with_4xs;
   for (let z = 0; z < 3; z++) {
       let productV = String.fromCharCode(101,95,55,50,95,103,114,97,110,117,108,97,114,105,116,121,0);
       let fill0: Array<any> = [107, 518];
       let aboutk = 5.0;
       let bellN = String.fromCharCode(112,101,101,114,110,97,109,101,95,97,95,52,52,0);
      if (!bellN.endsWith(`${aboutk}`)) {
         aboutk += parseInt(`${aboutk}`) % (Math.max(4, productV.length));
      }
         productV = `${(bellN == String.fromCharCode(118,0) ? bellN.length : fill0.length)}`;
         fill0.push(fill0.length / (Math.max(productV.length, 2)));
      let b_imageg = 5015348 <= fill0.length;
      do {
         fill0.push(1);
         if (b_imageg) {
            break;
         }
      } while (b_imageg && (!fill0.includes(aboutk)));
         fill0.push((String.fromCharCode(89,0) == bellN ? fill0.length : bellN.length));
       let bingD = 3.0;
      for (let u = 0; u < 1; u++) {
         fill0 = [productV.length];
      }
       let homev: Array<any> = [String.fromCharCode(122,95,57,52,95,109,105,120,112,97,110,101,108,0), String.fromCharCode(118,109,97,102,95,53,95,56,54,0), String.fromCharCode(112,95,55,48,95,101,110,115,117,114,101,100,0)];
       let watch6: Array<any> = [175, 423];
         bellN = `${1 ^ bellN.length}`;
      let gmailx = 9538388 >= watch6.length;
      do {
         watch6.push(parseInt(`${bingD}`) + 1);
         if (gmailx) {
            break;
         }
      } while (gmailx && (2 < (fill0.length % (Math.max(4, 8))) || 2 < (4 % (Math.max(2, watch6.length)))));
      for (let x = 0; x < 1; x++) {
         fill0.push(homev.length & 1);
      }
      for (let f = 0; f < 3; f++) {
         bellN += `${(String.fromCharCode(52,0) == productV ? bellN.length : productV.length)}`;
      }
      with_4xs = "1";
   }
      shared3 += `${episodesn.length}`;
    setShowIcon(true);

   while (with_4xs != orangeX) {
      orangeX = `${2 & resendn.length}`;
      break;
   }
      orangeX += `${shared3.length << (Math.min(Math.abs(3), 1))}`;
   while (3 <= orangeX.length || !thumbnailC) {
      orangeX = `${episodesn.length}`;
      break;
   }
      with_4xs = `${parseInt(`${checkboxD}`) | 2}`;
      shared3 = `${(String.fromCharCode(114,0) == episodesn ? parseInt(`${checkboxD}`) : episodesn.length)}`;
    if (isPause) {

       let starP = 0;
          let lessz = 2.0;
          let championb = false;
         starP %= Math.max(2, 3);
         lessz += parseInt(`${lessz}`) >> (Math.min(3, Math.abs(2)));
         championb = !championb || 92.67 >= lessz;
      for (let k = 0; k < 2; k++) {
         starP += starP << (Math.min(4, Math.abs(starP)));
      }
       let eventP = 1.0;
      resendn += `${(shared3 == String.fromCharCode(50,0) ? shared3.length : starP)}`;
      resendn = `${((thumbnailC ? 2 : 2) % 3)}`;
       let analyticsJ = String.fromCharCode(119,95,56,57,95,108,105,102,101,0);
       let groupF = 1.0;
       let shootw: Map<any, any> = new Map([[String.fromCharCode(99,95,55,53,95,112,114,101,115,101,114,118,101,115,0),String.fromCharCode(101,95,54,53,95,99,117,98,101,100,0)], [String.fromCharCode(115,112,101,99,105,102,105,101,114,95,114,95,49,54,0),String.fromCharCode(106,95,52,48,95,104,108,105,110,101,0)], [String.fromCharCode(109,97,114,107,101,116,95,53,95,50,48,0),String.fromCharCode(101,102,102,101,99,105,116,118,101,108,121,95,113,95,57,0)]]);
      while (shootw.size >= analyticsJ.length) {
         analyticsJ += `${analyticsJ.length << (Math.min(4, Math.abs(parseInt(`${groupF}`))))}`;
         break;
      }
      while (2.60 > (5.86 * groupF)) {
          let minivod3: Array<any> = [417, 261];
          let sound2 = String.fromCharCode(114,101,100,101,108,101,103,97,116,101,95,56,95,52,48,0);
         groupF += parseFloat(`${shootw.size}`);
         minivod3.push(minivod3.length | sound2.length);
         sound2 = `${minivod3.length}`;
         break;
      }
      if (2.73 < (groupF * parseFloat(`${analyticsJ.length}`)) || 2.73 < (groupF * parseFloat(`${analyticsJ.length}`))) {
         analyticsJ = `${2 | parseInt(`${groupF}`)}`;
      }
         shootw.set(`${groupF}`, shootw.size);
       let usernamey = 3.0;
       let handlerb = 2.0;
          let pointR = 1.0;
          let overd = String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,111,95,54,57,0);
          let hejig: Array<any> = [153, 138, 607];
         groupF *= (parseFloat(`${String.fromCharCode(112,0) == overd ? hejig.length : overd.length}`));
         pointR -= parseFloat(`${1}`);
      for (let t = 0; t < 3; t++) {
          let leftA = 2.0;
          let dragv = 3;
          let mailF = 5.0;
         handlerb /= Math.max(5, parseFloat(`${1}`));
         leftA -= parseFloat(`${parseInt(`${mailF}`) >> (Math.min(1, Math.abs(2)))}`);
         dragv ^= 3 | parseInt(`${leftA}`);
         mailF -= parseFloat(`${dragv + 3}`);
      }
         handlerb += parseFloat(`${2}`);
         handlerb /= Math.max(parseFloat(`${2 << (Math.min(3, Math.abs(shootw.size)))}`), 4);
      shared3 += `${orangeX.length}`;
       let s_countJ = 3.0;
          let userB = 5.0;
          let description_875 = String.fromCharCode(98,95,54,57,95,111,112,116,97,98,108,101,0);
          let giftr = 2.0;
         s_countJ *= (parseFloat(`${String.fromCharCode(114,0) == description_875 ? description_875.length : parseInt(`${giftr}`)}`));
         userB /= Math.max(4, parseFloat(`${parseInt(`${userB}`) ^ 3}`));
      if ((s_countJ + s_countJ) <= 4.52 || (s_countJ + s_countJ) <= 4.52) {
         s_countJ *= parseFloat(`${parseInt(`${s_countJ}`)}`);
      }
          let tumbnailh = String.fromCharCode(116,119,111,115,95,121,95,56,0);
         s_countJ /= Math.max(1, (parseFloat(`${tumbnailh == String.fromCharCode(74,0) ? parseInt(`${s_countJ}`) : tumbnailh.length}`)));
      shared3 += `${(episodesn == String.fromCharCode(109,0) ? with_4xs.length : episodesn.length)}`;
      resendn = `${(1 & (thumbnailC ? 3 : 3))}`;
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = () => {
       let downR = 3.0;
    let dangerh = 1.0;
    let textu: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,119,97,116,101,114,95,119,95,51,57,0),false ], [String.fromCharCode(111,95,49,53,95,97,97,115,99,0),false ], [String.fromCharCode(110,95,51,95,105,110,116,101,114,115,112,101,114,115,101,100,0),true ]]);
    let nativek = String.fromCharCode(101,95,49,48,48,95,101,99,111,109,112,114,101,115,115,111,114,0);
    let loadingq = 1.0;
    let singleK: Array<any> = [955, 69];
    let private_z3h = String.fromCharCode(116,95,52,51,95,116,111,112,0);
    let halfI = 2.0;
    let appsK = 4.0;
    let grayn = 5.0;
       let fill2: Array<any> = [512, 672];
       let hooksc = String.fromCharCode(98,117,105,108,100,101,114,95,116,95,49,55,0);
       let plashS = String.fromCharCode(97,112,112,108,121,95,48,95,52,54,0);
      if (fill2.length <= 1) {
         plashS = `${plashS.length}`;
      }
      for (let c = 0; c < 1; c++) {
         hooksc += `${(String.fromCharCode(117,0) == hooksc ? hooksc.length : fill2.length)}`;
      }
      if (plashS.length <= 4) {
         plashS += `${fill2.length}`;
      }
      if (hooksc.length > fill2.length) {
         hooksc = `${(String.fromCharCode(65,0) == hooksc ? hooksc.length : fill2.length)}`;
      }
      let xvode = hooksc.length <= 9202486;
      do {
         hooksc += `${fill2.length - hooksc.length}`;
         if (xvode) {
            break;
         }
      } while (xvode && (hooksc.length == plashS.length));
      for (let t = 0; t < 1; t++) {
         fill2 = [fill2.length | hooksc.length];
      }
         hooksc = `${2 | hooksc.length}`;
      while (hooksc.length == plashS.length) {
         plashS = `${(plashS == String.fromCharCode(112,0) ? plashS.length : hooksc.length)}`;
         break;
      }
      let indicatort = plashS.length >= 6436184;
      do {
          let settingr = String.fromCharCode(118,97,110,99,95,107,95,50,49,0);
          let diceC = 2;
          let streamingM = true;
          let ewarded3 = String.fromCharCode(116,97,117,95,102,95,53,54,0);
         plashS = `${(3 | (streamingM ? 5 : 4))}`;
         settingr += `${settingr.length}`;
         diceC >>= Math.min(Math.abs(ewarded3.length & settingr.length), 1);
         streamingM = settingr.endsWith(`${diceC}`);
         ewarded3 = `${ewarded3.length + 2}`;
         if (indicatort) {
            break;
         }
      } while (indicatort && (fill2.length == plashS.length));
      singleK.push(2 >> (Math.min(3, private_z3h.length)));
      dangerh /= Math.max(5, parseFloat(`${parseInt(`${dangerh}`) >> (Math.min(Math.abs(textu.size), 2))}`));
      nativek = `${parseInt(`${dangerh}`) * 2}`;
      singleK = [1 + nativek.length];
       let mini1: Map<any, any> = new Map([[String.fromCharCode(113,95,53,57,95,105,109,100,99,116,0),true ], [String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,48,95,50,54,0),false ], [String.fromCharCode(100,105,100,95,54,95,49,51,0),false ]]);
       let ewardedb = 4.0;
         mini1.set(`${ewardedb}`, 2 << (Math.min(1, Math.abs(parseInt(`${ewardedb}`)))));
         ewardedb /= Math.max(parseFloat(`${parseInt(`${ewardedb}`)}`), 4);
         ewardedb *= parseFloat(`${parseInt(`${ewardedb}`) ^ 3}`);
      if (!Array.from(mini1.keys()).includes(`${ewardedb}`)) {
          let analyticB = 2.0;
          let emojii = 1.0;
         ewardedb *= parseFloat(`${mini1.size + 3}`);
         analyticB -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${emojii}`)), 5))}`);
         emojii /= Math.max(2, parseInt(`${analyticB}`) * 1);
      }
      if ((ewardedb / (Math.max(5.50, 4))) < 2.64 && (parseFloat(`${mini1.size}`) / (Math.max(1, ewardedb))) < 5.50) {
         mini1 = new Map([[`${mini1.size}`, parseInt(`${ewardedb}`)]]);
      }
          let overg: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,102,108,97,99,101,110,99,0),String.fromCharCode(114,111,108,108,105,110,103,95,113,95,51,57,0)], [String.fromCharCode(115,119,105,102,116,95,119,95,56,0),String.fromCharCode(116,101,120,105,100,101,112,95,106,95,51,54,0)]]);
          let bufferY = String.fromCharCode(107,95,53,53,95,119,97,116,99,104,105,110,103,0);
         mini1 = new Map([[`${mini1.size}`, mini1.size]]);
         overg.set(bufferY, overg.size);
         bufferY += `${bufferY.length * overg.size}`;
      singleK.push((nativek == String.fromCharCode(89,0) ? textu.size : nativek.length));
   while (nativek == String.fromCharCode(67,0)) {
       let f_playerd: Map<any, any> = new Map([[String.fromCharCode(100,111,109,97,105,110,95,110,95,50,53,0),String.fromCharCode(104,95,53,53,95,97,114,109,108,105,110,107,0)], [String.fromCharCode(102,111,114,105,95,52,95,56,52,0),String.fromCharCode(110,111,110,100,99,95,105,95,52,53,0)]]);
       let share9 = 1.0;
         share9 /= Math.max(3, 2 - parseInt(`${share9}`));
      if ((parseInt(`${share9}`) * f_playerd.size) >= 5 || 4.89 >= (f_playerd.size * share9)) {
         share9 *= 2;
      }
         share9 -= parseInt(`${share9}`);
       let guideI = String.fromCharCode(102,95,55,50,95,102,102,116,115,0);
       let moonw = String.fromCharCode(104,95,48,95,97,112,102,115,0);
          let dataW = true;
          let invites = false;
         share9 += (String.fromCharCode(121,0) == moonw ? moonw.length : (invites ? 1 : 2));
         dataW = (dataW ? dataW : dataW);
         invites = !dataW;
      for (let n = 0; n < 2; n++) {
         share9 *= 3 << (Math.min(3, moonw.length));
      }
      private_z3h = `${parseInt(`${downR}`)}`;
      break;
   }
       let philippinesP: Array<any> = [304, 792, 586];
       let update_dzA = String.fromCharCode(99,95,51,53,95,114,101,109,97,112,0);
       let albumd = String.fromCharCode(115,97,116,100,95,118,95,49,56,0);
         update_dzA += `${albumd.length}`;
      if (!albumd.startsWith(`${philippinesP.length}`)) {
         albumd = `${philippinesP.length}`;
      }
      loadingq *= parseFloat(`${parseInt(`${halfI}`) >> (Math.min(1, Math.abs(parseInt(`${loadingq}`))))}`);
      dangerh *= parseFloat(`${1}`);
   for (let p = 0; p < 3; p++) {
       let favoritek: Map<any, any> = new Map([[String.fromCharCode(107,95,57,56,95,114,101,109,111,116,101,108,121,0),false ], [String.fromCharCode(109,105,115,115,95,107,95,55,53,0),true ], [String.fromCharCode(110,95,54,56,95,116,97,103,110,99,111,109,112,97,114,101,0),true ]]);
      for (let v = 0; v < 1; v++) {
          let friendsE = 0;
          let r_unlockD = 5;
          let style0 = 3;
          let aboutF = false;
         favoritek = new Map([[`${style0}`, 2 << (Math.min(4, Math.abs(style0)))]]);
         friendsE -= r_unlockD;
         r_unlockD %= Math.max(2, (r_unlockD + (aboutF ? 2 : 1)));
         aboutF = r_unlockD <= 51 || !aboutF;
      }
      for (let j = 0; j < 1; j++) {
          let stats7 = String.fromCharCode(114,101,112,108,105,99,97,116,101,95,57,95,53,54,0);
         favoritek = new Map([[`${favoritek.size}`, favoritek.size]]);
         stats7 += `${stats7.length}`;
      }
      let blacklist7 = 5856817 <= favoritek.size;
      do {
         favoritek = new Map([[`${favoritek.size}`, favoritek.size | favoritek.size]]);
         if (blacklist7) {
            break;
         }
      } while (((favoritek.size | favoritek.size) <= 4) && blacklist7);
      dangerh /= Math.max(parseFloat(`${singleK.length / (Math.max(1, 3))}`), 1);
   }
   while (3.36 > (dangerh * 5.41) || (dangerh * 5.41) > 2.90) {
      downR *= parseInt(`${downR}`) & 2;
      break;
   }

    if (videoRef.current) {

       let searchbarl: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,121,95,49,48,0),true ], [String.fromCharCode(97,99,99,114,117,101,95,116,95,52,56,0),false ]]);
       let selection9: Array<any> = [857, 999, 86];
          let moviesw = String.fromCharCode(118,95,56,57,95,102,101,116,99,104,0);
          let checkboxf = 2.0;
         searchbarl.set(moviesw, 2);
         moviesw = `${parseInt(`${checkboxf}`)}`;
         selection9.push(searchbarl.size | selection9.length);
          let gmail7 = String.fromCharCode(112,97,100,95,106,95,49,49,0);
         selection9 = [searchbarl.size ^ gmail7.length];
         selection9 = [selection9.length];
      if (Array.from(searchbarl.keys()).includes(`${selection9.length}`)) {
         searchbarl = new Map([[`${searchbarl.size}`, selection9.length]]);
      }
          let leaguez = String.fromCharCode(114,97,119,118,105,100,101,111,95,109,95,55,51,0);
         searchbarl.set(leaguez, leaguez.length / (Math.max(3, selection9.length)));
      downR += singleK.length / (Math.max(nativek.length, 8));
      singleK = [2];
   let trash0 = 7644101.0 >= appsK;
   do {
       let windS = false;
       let blacky = String.fromCharCode(98,95,52,95,115,117,98,109,105,116,116,101,100,0);
       let long_3F: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,109,105,99,115,95,49,95,51,56,0),false ], [String.fromCharCode(111,95,57,52,95,97,108,108,111,99,97,116,101,100,0),true ], [String.fromCharCode(104,95,52,51,95,102,112,99,0),true ]]);
      if (1 <= (blacky.length % (Math.max(1, 9)))) {
         blacky += `${blacky.length + 3}`;
      }
          let soundD: Array<any> = [877, 551];
          let statsH = String.fromCharCode(105,100,102,118,95,50,95,53,56,0);
         long_3F.set(blacky, 3 << (Math.min(1, blacky.length)));
         soundD.push(statsH.length);
         statsH += `${soundD.length + 2}`;
          let sports_: Array<any> = [394, 677, 237];
         blacky += "1";
         sports_ = [sports_.length >> (Math.min(Math.abs(2), 5))];
         long_3F = new Map([[`${long_3F.size}`, 1]]);
      let spinnerA = windS ? !windS : windS;
      do {
          let dangerM: Map<any, any> = new Map([[String.fromCharCode(119,95,54,54,95,100,121,108,105,98,115,0),true ], [String.fromCharCode(102,95,56,53,95,118,105,101,119,101,100,0),true ]]);
          let downb = String.fromCharCode(115,98,115,112,108,105,116,95,121,95,52,52,0);
          let long_eh = String.fromCharCode(97,99,101,108,112,95,119,95,51,52,0);
          let selectionR = 4.0;
          let nterstitiald: Array<any> = [String.fromCharCode(119,95,50,54,95,102,105,114,115,116,108,121,0), String.fromCharCode(102,95,50,54,95,115,101,112,97,114,97,116,111,114,0), String.fromCharCode(116,95,55,56,95,114,101,105,110,105,116,0)];
         windS = !windS;
         dangerM.set(`${selectionR}`, 1);
         downb += `${(long_eh == String.fromCharCode(88,0) ? long_eh.length : dangerM.size)}`;
         selectionR -= parseFloat(`${2}`);
         nterstitiald.push(nterstitiald.length | dangerM.size);
         if (spinnerA) {
            break;
         }
      } while ((windS) && spinnerA);
      while (5 <= (long_3F.size ^ blacky.length) || (long_3F.size ^ 5) <= 2) {
         blacky = "2";
         break;
      }
          let sellW: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,115,117,98,118,97,108,117,101,0),true ], [String.fromCharCode(103,95,49,48,95,116,105,101,114,115,0),true ], [String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,111,95,50,52,0),true ]]);
          let strB = String.fromCharCode(98,97,100,103,101,95,106,95,50,51,0);
         blacky += "1";
         sellW = new Map([[`${sellW.size}`, 3 - sellW.size]]);
         strB += "2";
      if (blacky.endsWith(`${long_3F.size}`)) {
         blacky += `${blacky.length - long_3F.size}`;
      }
         blacky = "2";
      appsK -= (parseFloat(`${nativek == String.fromCharCode(49,0) ? (windS ? 4 : 4) : nativek.length}`));
      if (trash0) {
         break;
      }
   } while (trash0 && (1 >= (singleK.length - parseInt(`${appsK}`)) && (appsK - 1.98) >= 5.26));
   while ((parseFloat(`${nativek.length}`) + loadingq) > 3.1 && (loadingq + 3.1) > 5.31) {
       let privacyA = String.fromCharCode(100,101,110,105,97,108,95,100,95,56,51,0);
      if (5 >= privacyA.length || privacyA == String.fromCharCode(74,0)) {
          let ajaxF = 5;
          let relatedu = String.fromCharCode(102,105,110,97,108,95,121,95,57,55,0);
          let commentU = String.fromCharCode(98,95,54,95,116,103,101,116,0);
          let largey = 3.0;
         privacyA += `${(String.fromCharCode(75,0) == relatedu ? relatedu.length : ajaxF)}`;
         ajaxF /= Math.max(2, 3);
         commentU = `${commentU.length * parseInt(`${largey}`)}`;
         largey += commentU.length;
      }
          let filtere = String.fromCharCode(103,95,52,51,95,101,118,97,108,117,97,116,101,100,0);
          let routerl: Map<any, any> = new Map([[String.fromCharCode(114,101,99,104,101,99,107,95,57,95,56,48,0),false ], [String.fromCharCode(114,100,106,112,103,99,111,109,95,98,95,51,48,0),false ], [String.fromCharCode(106,95,51,50,95,97,114,99,104,105,116,101,99,116,117,114,101,0),false ]]);
          let pressureO = 1.0;
         privacyA = "2";
         filtere += `${parseInt(`${pressureO}`) & routerl.size}`;
         routerl = new Map([[`${routerl.size}`, filtere.length]]);
         pressureO *= parseFloat(`${parseInt(`${pressureO}`)}`);
      let detaili = String.fromCharCode(51,49,111,114,122,49,114,108,118,50,0) == privacyA;
      do {
          let placementp = true;
          let complete1 = 2.0;
          let yellowi = String.fromCharCode(104,97,108,116,95,56,95,54,54,0);
         privacyA = `${3 ^ privacyA.length}`;
         placementp = yellowi.includes(`${placementp}`);
         complete1 += parseInt(`${complete1}`) + yellowi.length;
         if (detaili) {
            break;
         }
      } while ((privacyA.length <= 1) && detaili);
      nativek += `${parseInt(`${dangerh}`) >> (Math.min(2, Math.abs(2)))}`;
      break;
   }
      halfI *= 3 ^ parseInt(`${appsK}`);
   for (let j = 0; j < 2; j++) {
      appsK -= parseFloat(`${singleK.length}`);
   }
   while (5 < (3 << (Math.min(4, nativek.length)))) {
      downR += 2 / (Math.max(10, parseInt(`${halfI}`)));
      break;
   }
      private_z3h = `${singleK.length}`;
      private_z3h += `${parseInt(`${appsK}`)}`;
      halfI /= Math.max(3, 1);
      videoRef.current.seek(currentDuration);
    }
  };

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = () => {
       let trophye = 2;
    let over5 = 1.0;
    let episode7 = String.fromCharCode(97,95,52,55,95,114,101,116,105,110,97,0);
    let brightnessl = 1.0;
    let subsU = String.fromCharCode(107,95,51,54,95,99,97,108,108,0);
    let sortK: Map<any, any> = new Map([[String.fromCharCode(120,95,52,57,95,116,105,109,101,100,0),81], [String.fromCharCode(115,95,57,52,95,99,97,110,110,111,116,0),932]]);
    let rankH = String.fromCharCode(106,95,50,51,95,99,97,116,99,104,105,110,103,0);
    let friendsP = false;
    let moon1 = String.fromCharCode(117,95,50,50,95,112,103,109,120,0);
    let main_p_: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,109,101,116,101,114,0),String.fromCharCode(108,105,98,99,111,100,101,99,95,105,95,54,52,0)], [String.fromCharCode(100,97,116,97,104,97,115,104,95,103,95,51,54,0),String.fromCharCode(115,95,53,54,95,99,121,117,118,0)]]);
    let gestureM = 3.0;
    let baidu9 = String.fromCharCode(101,116,104,101,114,95,49,95,53,49,0);
    let showc = String.fromCharCode(100,97,116,97,95,50,95,52,48,0);
    let stats7 = 5.0;
    let areal = String.fromCharCode(116,105,108,116,95,49,95,56,55,0);
   while (sortK.size <= 1) {
      sortK.set(`${gestureM}`, main_p_.size >> (Math.min(3, Math.abs(parseInt(`${gestureM}`)))));
      break;
   }
      trophye *= 3;
      sortK.set(moon1, moon1.length);

    if (isBodan) {

   for (let x = 0; x < 1; x++) {
       let vignetteO = String.fromCharCode(99,111,101,102,102,95,98,95,52,52,0);
       let whiteT = String.fromCharCode(119,95,52,95,105,109,112,117,108,115,101,0);
       let megaphonem = 4.0;
       let loading5 = String.fromCharCode(99,95,50,56,95,98,117,116,116,111,110,0);
      if (!loading5.startsWith(vignetteO)) {
         vignetteO += `${vignetteO.length}`;
      }
      if (vignetteO == String.fromCharCode(50,0)) {
         whiteT = "1";
      }
         loading5 = `${parseInt(`${megaphonem}`) << (Math.min(vignetteO.length, 5))}`;
      while (1.29 > (megaphonem + parseFloat(`${whiteT.length}`))) {
         megaphonem *= parseFloat(`${1 | vignetteO.length}`);
         break;
      }
      for (let h = 0; h < 1; h++) {
         megaphonem /= Math.max(parseFloat(`${1}`), 1);
      }
      let tumbnailZ = vignetteO == String.fromCharCode(55,57,122,55,49,95,52,99,122,0);
      do {
         vignetteO += `${parseInt(`${megaphonem}`) % (Math.max(3, 3))}`;
         if (tumbnailZ) {
            break;
         }
      } while ((!vignetteO.includes(whiteT)) && tumbnailZ);
      if (1 < vignetteO.length) {
          let roomB = 0;
         whiteT = `${(loading5 == String.fromCharCode(66,0) ? whiteT.length : loading5.length)}`;
         roomB /= Math.max(1 * roomB, 4);
      }
         whiteT += `${(String.fromCharCode(84,0) == whiteT ? parseInt(`${megaphonem}`) : whiteT.length)}`;
      if (vignetteO == String.fromCharCode(86,0)) {
          let interstitialJ: Map<any, any> = new Map([[String.fromCharCode(101,95,51,56,95,112,108,117,114,97,108,115,0),202], [String.fromCharCode(117,95,55,52,95,115,101,109,97,110,116,105,99,0),550]]);
         loading5 += "1";
         interstitialJ.set(`${interstitialJ.size}`, 3 ^ interstitialJ.size);
      }
          let bootsplashl = false;
          let backP = String.fromCharCode(109,95,50,49,95,112,114,101,115,101,110,116,97,116,105,111,110,0);
          let annerw = String.fromCharCode(113,95,56,56,95,97,114,103,120,0);
         whiteT += `${(String.fromCharCode(70,0) == annerw ? annerw.length : parseInt(`${megaphonem}`))}`;
         bootsplashl = (52 > (backP.length | (!bootsplashl ? 52 : backP.length)));
      if (3 > (3 ^ loading5.length) && (loading5.length / 3) > 1) {
         loading5 += `${parseInt(`${megaphonem}`)}`;
      }
      for (let f = 0; f < 1; f++) {
          let comment0 = false;
         vignetteO += `${loading5.length << (Math.min(Math.abs(2), 4))}`;
         comment0 = (comment0 ? comment0 : comment0);
      }
      over5 -= parseFloat(`${parseInt(`${over5}`)}`);
   }
   while ((3 * trophye) < 5) {
       let kickW = String.fromCharCode(110,95,57,95,100,105,97,99,114,105,116,105,99,0);
       let gpayv = String.fromCharCode(109,95,57,54,95,115,105,109,117,108,97,116,105,111,110,0);
       let privacyN = String.fromCharCode(105,95,50,53,95,99,101,108,101,98,114,97,116,101,0);
      if (privacyN.startsWith(`${kickW.length}`)) {
         kickW = `${gpayv.length / (Math.max(2, 9))}`;
      }
      for (let c = 0; c < 1; c++) {
         kickW = "1";
      }
         privacyN += "2";
      for (let c = 0; c < 2; c++) {
         kickW += `${(String.fromCharCode(86,0) == gpayv ? gpayv.length : kickW.length)}`;
      }
      let bingq = privacyN.length <= 7019606;
      do {
         privacyN = "2";
         if (bingq) {
            break;
         }
      } while (bingq && (gpayv.length > 4 && 4 > privacyN.length));
      for (let c = 0; c < 1; c++) {
          let arrowI = String.fromCharCode(102,105,114,101,95,102,95,50,57,0);
         gpayv += `${gpayv.length}`;
         arrowI = `${arrowI.length}`;
      }
         gpayv += "2";
       let successB = String.fromCharCode(109,95,55,55,95,101,120,112,111,114,116,0);
          let previewN = 2.0;
          let largeD = 3.0;
         gpayv = `${kickW.length}`;
         previewN -= parseInt(`${largeD}`) | parseInt(`${previewN}`);
         largeD *= parseFloat(`${parseInt(`${previewN}`)}`);
      subsU += `${rankH.length >> (Math.min(3, episode7.length))}`;
      break;
   }
       let videoh = true;
         videoh = !videoh;
         videoh = !videoh;
      if (videoh) {
         videoh = !videoh;
      }
      brightnessl += parseInt(`${gestureM}`) ^ 3;
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

       let popupr = false;
          let anytimeW = String.fromCharCode(111,95,56,53,95,103,111,112,115,0);
         popupr = popupr || anytimeW.length < 55;
       let overT = String.fromCharCode(117,105,110,116,108,101,95,100,95,55,53,0);
       let with_wx = String.fromCharCode(120,95,57,53,95,121,109,105,110,112,117,116,0);
       let unreadu: Array<any> = [186, 931, 919];
      brightnessl /= Math.max(4, (String.fromCharCode(115,0) == rankH ? rankH.length : (popupr ? 3 : 5)));
      over5 *= (parseFloat(`${(friendsP ? 3 : 2) | 1}`));
      brightnessl *= 2;
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   while (4 <= episode7.length) {
      episode7 += "3";
      break;
   }
      friendsP = gestureM < subsU.length;
   if (subsU.length <= 5) {
       let skipt = String.fromCharCode(120,95,51,49,95,114,101,99,111,118,101,114,0);
       let heartj: Array<any> = [String.fromCharCode(119,95,55,53,95,100,105,115,115,105,109,0), String.fromCharCode(106,95,56,53,95,100,101,97,108,108,111,99,97,116,101,100,0)];
       let banners = String.fromCharCode(114,101,119,97,114,100,95,106,95,49,49,0);
       let diceo: Array<any> = [String.fromCharCode(107,98,100,119,105,110,95,98,95,49,55,0), String.fromCharCode(102,95,57,52,95,104,101,120,98,115,0)];
       let theme6 = 2;
       let basketballb: Map<any, any> = new Map([[String.fromCharCode(111,95,54,53,95,100,121,97,100,105,99,0),497], [String.fromCharCode(97,95,54,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0),857], [String.fromCharCode(104,95,55,54,95,116,114,97,110,115,102,101,114,114,105,110,103,0),198]]);
       let logov: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,120,95,51,51,0),262], [String.fromCharCode(103,95,56,54,95,112,108,97,99,101,115,0),366], [String.fromCharCode(100,118,100,97,116,97,95,107,95,51,57,0),43]]);
      let changer = banners.length >= 6284997;
      do {
         banners += `${basketballb.size}`;
         if (changer) {
            break;
         }
      } while (changer && (heartj.length < banners.length));
         heartj = [logov.size % 3];
       let lightZ = String.fromCharCode(101,110,115,117,114,101,95,100,95,51,0);
       let telegramR = String.fromCharCode(105,115,110,111,116,116,97,112,95,102,95,52,56,0);
         logov = new Map([[telegramR, telegramR.length]]);
          let themeH = 1;
          let recommendation1 = false;
         lightZ = `${themeH}`;
         themeH &= ((recommendation1 ? 2 : 3));
         skipt = "2";
         telegramR = `${heartj.length}`;
         heartj = [banners.length];
         heartj.push(3 << (Math.min(2, heartj.length)));
          let zhubou = String.fromCharCode(100,101,114,105,118,101,100,95,98,95,55,53,0);
          let backwardb = false;
         diceo.push(banners.length & heartj.length);
         zhubou = `${zhubou.length << (Math.min(Math.abs(2), 4))}`;
         backwardb = zhubou.length > 30 || backwardb;
      for (let q = 0; q < 1; q++) {
         telegramR = `${3 ^ banners.length}`;
      }
          let backgrounds = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,95,116,95,54,54,0);
         diceo = [heartj.length >> (Math.min(Math.abs(1), 5))];
         backgrounds += `${backgrounds.length + 2}`;
      let episodeF = logov.size >= 6690250;
      do {
          let calendarm = 0.0;
         logov = new Map([[skipt, 1 & skipt.length]]);
         calendarm /= Math.max(5, parseFloat(`${1}`));
         if (episodeF) {
            break;
         }
      } while ((!Array.from(logov.values()).includes(theme6)) && episodeF);
       let invitew = String.fromCharCode(100,95,50,53,95,99,97,118,108,99,0);
      moon1 = `${theme6 ^ sortK.size}`;
   }

      

       let googleX = false;
       let recommendationY: Map<any, any> = new Map([[String.fromCharCode(106,102,105,101,108,100,115,95,115,95,54,49,0),String.fromCharCode(122,95,53,48,95,109,100,97,121,0)], [String.fromCharCode(116,95,55,52,95,100,99,111,110,108,121,0),String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,48,95,55,51,0)], [String.fromCharCode(121,95,53,56,95,114,101,112,108,97,99,101,115,0),String.fromCharCode(104,95,55,55,95,112,104,111,116,111,115,0)]]);
      for (let i = 0; i < 1; i++) {
         recommendationY.set(`${googleX}`, recommendationY.size | 1);
      }
         recommendationY.set(`${googleX}`, ((googleX ? 4 : 2) + recommendationY.size));
      let handlerF = googleX ? !googleX : googleX;
      do {
         googleX = (73 > (recommendationY.size / (Math.max(7, (!googleX ? recommendationY.size : 75)))));
         if (handlerF) {
            break;
         }
      } while ((recommendationY.size < 1 || (1 << (Math.min(2, Math.abs(recommendationY.size)))) < 1) && handlerF);
      if (googleX) {
         recommendationY.set(`${googleX}`, 1 - recommendationY.size);
      }
      for (let x = 0; x < 2; x++) {
          let tickedI = String.fromCharCode(97,109,98,105,101,110,116,95,107,95,57,53,0);
          let selectedQ = 2.0;
          let termsd: Array<any> = [526, 321];
          let abouta = String.fromCharCode(102,117,122,122,105,110,103,95,103,95,52,54,0);
          let playlistP: Map<any, any> = new Map([[String.fromCharCode(103,97,109,97,95,55,95,54,52,0),false ], [String.fromCharCode(111,95,49,56,95,116,101,110,115,105,111,110,0),false ], [String.fromCharCode(112,114,111,112,101,114,95,112,95,49,56,0),true ]]);
         recommendationY = new Map([[`${playlistP.size}`, ((googleX ? 1 : 3) + 2)]]);
         tickedI = `${(abouta == String.fromCharCode(50,0) ? parseInt(`${selectedQ}`) : abouta.length)}`;
         selectedQ *= parseInt(`${selectedQ}`) % (Math.max(termsd.length, 7));
         termsd.push((String.fromCharCode(113,0) == tickedI ? abouta.length : tickedI.length));
         playlistP = new Map([[`${termsd.length}`, 1]]);
      }
      if (!googleX || 2 <= (recommendationY.size - 5)) {
         recommendationY.set(`${googleX}`, recommendationY.size);
      }
      episode7 += `${2 - sortK.size}`;
      sortK = new Map([[`${main_p_.size}`, 3 & main_p_.size]]);
      baidu9 = "2";
      umb_center_carousel.watchAnytimePlaylistClicksAnalytics();
      
    } else {

      main_p_ = new Map([[`${main_p_.size}`, subsU.length / 2]]);
      main_p_ = new Map([[`${main_p_.size}`, main_p_.size % 1]]);
      episode7 += `${(moon1 == String.fromCharCode(49,0) ? parseInt(`${over5}`) : moon1.length)}`;
      dispatch(playVod(currentVod.mini_video_vod));

      subsU += `${parseInt(`${brightnessl}`) >> (Math.min(4, Math.abs(trophye)))}`;
       let termsk = 1.0;
         termsk += parseInt(`${termsk}`) ^ parseInt(`${termsk}`);
          let navigationK = true;
          let schedulen = 3;
          let guides = String.fromCharCode(98,105,116,105,122,101,110,95,51,95,53,55,0);
         termsk -= 3;
         navigationK = navigationK && guides.length >= 81;
         schedulen += schedulen * 3;
         guides += `${guides.length / (Math.max(3, 7))}`;
      while ((termsk * termsk) >= 2.14) {
         termsk -= parseInt(`${termsk}`) / 3;
         break;
      }
      gestureM -= 1 << (Math.min(3, Math.abs(sortK.size)));
   while ((4 << (Math.min(4, Math.abs(trophye)))) == 4 && (4 << (Math.min(2, Math.abs(trophye)))) == 1) {
      trophye >>= Math.min(baidu9.length, 4);
      break;
   }
      navigation.navigate('播放IOS', {
        vod_id: currentVod.vod?.vod_id,
      });

   let themec = rankH.length >= 8699196;
   do {
       let termsk2 = false;
          let playlistM = 0.0;
          let module8 = 2;
         termsk2 = termsk2 && 4.39 < playlistM;
         playlistM /= Math.max(parseFloat(`${module8}`), 5);
          let currentR = 1.0;
          let canvasZ = String.fromCharCode(97,114,99,116,105,99,95,52,95,53,56,0);
          let combinedv = String.fromCharCode(122,95,52,48,95,114,101,100,97,0);
         termsk2 = !combinedv.startsWith(`${termsk2}`);
         currentR *= parseFloat(`${1}`);
         canvasZ = `${3 % (Math.max(7, parseInt(`${currentR}`)))}`;
         combinedv += `${2 % (Math.max(4, parseInt(`${currentR}`)))}`;
      if (!termsk2 || !termsk2) {
          let clubg: Map<any, any> = new Map([[String.fromCharCode(118,95,53,57,95,110,105,100,110,105,115,116,0),961], [String.fromCharCode(101,118,101,114,95,56,95,49,51,0),784]]);
          let popupl = 1.0;
          let championZ = 1.0;
          let commentu = true;
          let gmail7 = String.fromCharCode(116,97,103,97,118,114,95,55,95,48,0);
         termsk2 = ((gmail7.length << (Math.min(2, Math.abs((!commentu ? 50 : gmail7.length))))) < 50);
         clubg = new Map([[`${popupl}`, 1 | parseInt(`${popupl}`)]]);
         championZ += 1;
         commentu = parseInt(`${popupl}`) <= clubg.size;
      }
      rankH = `${trophye / 1}`;
      if (themec) {
         break;
      }
   } while ((rankH.length == 5) && themec);
      moon1 += `${main_p_.size << (Math.min(Math.abs(2), 3))}`;
      sortK.set(subsU, parseInt(`${brightnessl}`));

      

       let gestureS = false;
       let backgroundF = String.fromCharCode(109,95,51,52,95,97,117,120,105,108,105,97,114,121,0);
       let completer = String.fromCharCode(117,118,109,118,95,109,95,50,56,0);
      let customg = 6370695 <= backgroundF.length;
      do {
         backgroundF = `${backgroundF.length}`;
         if (customg) {
            break;
         }
      } while ((backgroundF.length <= 2 || gestureS) && customg);
         gestureS = !gestureS;
         gestureS = backgroundF.length == 9 && gestureS;
         backgroundF += `${completer.length}`;
         backgroundF = `${completer.length}`;
       let downloadedE = 4.0;
       let volumew = 3.0;
         completer = "2";
      if (!backgroundF.includes(`${volumew}`)) {
         backgroundF = `${completer.length << (Math.min(Math.abs(1), 1))}`;
      }
      for (let m = 0; m < 1; m++) {
          let groupF: Array<any> = [501, 427, 509];
          let sportsG = 5.0;
          let resendo = 5;
          let r_lockO = 5.0;
         downloadedE /= Math.max(parseInt(`${volumew}`), 3);
         groupF.push(parseInt(`${sportsG}`));
         resendo |= parseInt(`${r_lockO}`) ^ 1;
         r_lockO += parseFloat(`${resendo % 1}`);
      }
      brightnessl *= 2 - moon1.length;
   if (baidu9 != String.fromCharCode(71,0)) {
      rankH += `${(2 + (friendsP ? 5 : 2))}`;
   }
   if (2.9 <= gestureM) {
      over5 -= parseFloat(`${2 & subsU.length}`);
   }
      umb_center_carousel.watchAnytimeVideoClicksAnalytics();
      
    }
  };

  const handleViewLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setImageContainerHeight(height);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        showControls();
        if (overlayRef.current) {
          handlePlayPause();
        }
      }}>
      <View>
        <View style={[styles.container, { height: displayHeight }]}>
          {(isBuffering || (Platform.OS === 'ios' ? !isVideoReadyIos : !isVideoReadyAndroid)) && isShowVideo && (
            <View style={styles.buffering}>
              <FastImage
                source={require('@static/images/shootAcceptedPrivate_7.gif')}
                style={{ width: 100, height: 100, }}
                resizeMode="contain"
                useFastImage={true}
              />
            </View>
          )}
          {(Platform.OS === 'ios' ? !isVideoReadyIos : !isVideoReadyAndroid) && thumbnail &&
            <FastImage
              source={{ uri: thumbnail }}
              style={styles.video}
              resizeMode="contain"
              useFastImage={true}
            />
          }
          {isShowVideo &&
            <Video
              ref={videoRef}
              resizeMode="contain"
              
              source={{
                uri: currentVod.mini_video_origin_video_url,
                headers: {
                  'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                },
              }}
              onReadyForDisplay={() => setVideoReadyIos(true)}
              onBuffer={onBuffer}
              repeat={true}
              style={{
                ...styles.video,
                opacity: (Platform.OS === 'ios' ? isVideoReadyIos : isVideoReadyAndroid) ? 1 : 0,
              }}
              
              
              paused={isPause || onSliding || (Platform.OS === 'ios' && !isVideoReadyIos)}
              onLoad={handleLoad}
              onLoadStart={handleLoadStart}
              onProgress={handleProgress}
              progressUpdateInterval={400}
            />
          }
          <View
            style={{
              position: 'absolute',
              left: (Dimensions.get('window').width - 80) / 2,
              top: (Dimensions.get('window').height - 130) / 2,
              zIndex: 999,
            }}>
            {showIcon && (isPause ? <PlayIcon /> : <PauseIcon />)}
          </View>
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              justifyContent: 'flex-end'
            }}>
            <View style={{ paddingHorizontal: 20 }}>
              {/* {currentVod != undefined &&
                currentVod.mini_video_original_img_url != null &&
                currentVod.mini_video_original_img_url != '' && (
                  <View style={{ flexWrap: 'wrap' }}>
                    <View
                      style={{
                        padding: 8,
                        height: 75,
                        flexDirection: 'row',
                        borderRadius: 8,
                        backgroundColor: 'rgba(106, 106, 106, 0.25)',
                      }}>
                      {!isBodan &&
                        <View
                          style={{
                            width: 45,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                          }}
                          onLayout={handleViewLayout}>
                          <TouchableOpacity activeOpacity={0.85} style={{ flex: 1, position: 'relative' }} onPress={redirectVod}>
                            <FastImage
                              style={{ flex: 1, borderRadius: 6 }}
                              source={{
                                uri: currentVod.mini_video_original_img_url,
                                priority: "high",
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      }
                      {isBodan &&
                        <View
                          style={{
                            width: 45,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            marginRight: 6
                          }}
                          onLayout={handleViewLayout}>
                          <TouchableOpacity activeOpacity={0.85} style={{ flex: 1, position: 'relative' }} onPress={redirectVod}>
                            <FastImage
                              style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: '100%', zIndex: 3 }}
                              source={{
                                uri: currentVod.mini_video_original_img_url,
                                priority: "high",
                              }}
                              onProgress={(e) => {
                                setImageLoaded(false)
                              }}
                              onLoad={(e) => {
                                setImageLoaded(true)
                              }}
                            />
                            {imageLoaded && isBodan &&
                              <View>
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 6, zIndex: 2, top: 5.8 }}
                                  source={require('@static/images/mainBenefitForm.jpeg')}
                                />
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 12, top: 11.8 }}
                                  source={require('@static/images/promotionGestureComment.jpg')}
                                />
                              </View>
                            }
                          </TouchableOpacity>
                        </View>
                      }
                      <View
                        style={{
                          flexDirection: 'column',
                          alignContent: 'center',
                          marginLeft: 10,
                          marginRight: 5,
                        }}>
                        <TouchableOpacity activeOpacity={0.85} onPress={redirectVod}>
                          <View
                            style={{
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              height: '100%',
                              paddingVertical: 5,
                            }}>
                            <View
                              style={{
                                justifyContent: 'flex-start',
                                flexDirection: 'row',
                              }}>
                              <View>
                                <Text
                                  numberOfLines={1}
                                  ellipsizeMode="tail"
                                  style={{
                                    ...textVariants.bodyBold,
                                    color: colors.text,
                                    fontSize: 15,
                                  }}>
                                  {vodName}
                                </Text>
                              </View>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                              <View style={{ flexWrap: 'wrap' }}>
                                {isBodan ?
                                  <PlayBoDanIcon width={20} height={20} />
                                  :
                                  <PlayZhengPianIcon width={20} height={20} />
                                }
                              </View>
                              <View
                                style={{
                                  paddingLeft: 6,
                                  justifyContent: 'center',
                                }}>
                                <Text
                                  style={{
                                    ...textVariants.subBody,
                                    color: colors.text,
                                    fontSize: 14,
                                  }}>
                                  {watchText}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )} */}
              <View style={{ marginTop: 10, flexDirection: 'row', width: '70%' }}>
                {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                <View
                  style={{
                    flex: 10,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <Text style={{ ...textVariants.body, color: colors.text, paddingBottom: 8 }}>
                      @{currentVod.mini_video_author}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.85}>
                    <Text style={{ ...textVariants.small, color: colors.text, paddingBottom: 20 }}>
                      {currentVod.mini_video_title}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* {currentVod.is_collection?.toLowerCase() == "y" &&
              <View style={{ backgroundColor: '#171717', paddingBottom: 18, paddingTop: 12, paddingLeft: 20, paddingRight: 20 }}>
                <TouchableOpacity activeOpacity={0.85} style={{ flex: 1 }} onPress={() => {
                  openBottomSheet();
                }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <HejiIcon height={24} width={24} />
                      <Text style={{ paddingLeft: 6, alignSelf: 'center', fontSize: 14, color: colors.text, fontWeight: '700' }}>{currentVod.mini_video_collection_title}</Text>
                    </View>
                    <View style={{}}>
                      <ExpandUpIcon height={24} width={24} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            } */}
          </View>
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
          {
            duration > 0 && showOverlay && currentDuration >= 0 &&
            (
              duration < 3600
                ? <Text style={{
                  position: 'absolute',
                  bottom: 12,
                  backgroundColor: '#000',
                  borderRadius: 4,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  left: Math.min(Math.max(0, (currentDuration / duration) * windowWidth - 44), windowWidth - 76)
                }}>
                  <Text style={textVariants.small}>{new Date(currentDuration * 1000).toISOString().substring(14, 19)}</Text>
                  <Text style={{ ...textVariants.small, color: colors.muted }}>{` / ${new Date(duration * 1000).toISOString().substring(14, 19)}`}</Text>
                </Text>
                : <Text style={{
                  position: 'absolute',
                  bottom: 20,
                  left: Math.min(Math.max(0, (currentDuration / duration) * windowWidth - 34), windowWidth - 76)
                }}>
                  <Text style={textVariants.small}>{new Date(currentDuration * 1000).toISOString().substring(11, 19)}</Text>
                  <Text style={{ ...textVariants.small, color: colors.muted }}>{` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}</Text>
                </Text>
            )
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  }
});
