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
import PlayIcon from '@static/images/leftBodanHumidity.svg';
import PauseIcon from '@static/images/nterstitialAssistCarousel.svg';
import PlayZhengPianIcon from '@static/images/flyerConfigure.svg';
import PlayBoDanIcon from '@static/images/vietnamLoginAdult.svg';

import FastImage from '../common/tt_connection';
import { Slider } from '@rneui/themed';
import { useAppDispatch } from '@hooks/tt_spec_download';
import { useNavigation, useTheme } from '@react-navigation/native';
import { playVod, viewPlaylistDetails } from '@redux/actions/tt_activity';
import HejiIcon from '@static/images/singaporeDelegate_kc.svg';
import ExpandUpIcon from '@static/images/profileTopicResult.svg';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';

interface ttSmall {
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
}: ttSmall) {
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
       let malaysia9 = String.fromCharCode(98,116,114,101,101,95,49,95,51,50,0);
    let promotion3: Map<any, any> = new Map([[String.fromCharCode(115,95,57,57,95,108,111,103,115,0),75], [String.fromCharCode(111,95,49,55,95,111,112,101,110,101,100,0),647]]);
    let streamingL = false;
    let sheetl = 1.0;
    let iconP = true;
    let description_4i = String.fromCharCode(108,111,99,97,116,105,111,110,95,55,95,52,54,0);
    let vietnamd = 3;
    let buildk = String.fromCharCode(105,109,103,95,108,95,53,56,0);
    let checkboxV = 1.0;
    let manifestm: Array<any> = [String.fromCharCode(115,112,97,99,101,95,108,95,53,52,0), String.fromCharCode(99,95,54,51,95,99,117,114,115,111,114,115,0), String.fromCharCode(97,114,103,115,95,102,95,54,55,0)];
    let modal1: Map<any, any> = new Map([[String.fromCharCode(112,95,53,54,95,110,117,109,101,114,111,0),true ], [String.fromCharCode(116,101,120,116,117,114,101,115,95,104,95,56,53,0),true ], [String.fromCharCode(117,95,54,57,95,102,105,108,116,101,114,102,0),true ]]);
    let pointL = 2.0;
    let smallh: Map<any, any> = new Map([[String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,49,95,52,55,0),791], [String.fromCharCode(115,111,99,107,101,116,118,97,114,95,111,95,54,0),408], [String.fromCharCode(107,95,54,51,95,111,108,111,114,0),24]]);
   for (let j = 0; j < 3; j++) {
       let inactiveQ: Map<any, any> = new Map([[String.fromCharCode(98,108,99,107,95,105,95,57,49,0),String.fromCharCode(108,111,99,97,116,101,95,99,95,54,51,0)], [String.fromCharCode(108,115,112,102,108,112,99,95,110,95,51,53,0),String.fromCharCode(120,97,118,115,95,53,95,54,54,0)]]);
      let completeS = 9179029 <= inactiveQ.size;
      do {
          let bridge5: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,104,119,117,112,108,111,97,100,0),false ], [String.fromCharCode(103,97,109,109,97,95,57,95,50,56,0),true ]]);
          let navigationf = 4.0;
         inactiveQ.set(`${navigationf}`, 1);
         bridge5.set(`${bridge5.size}`, bridge5.size * 1);
         navigationf /= Math.max(1, parseFloat(`${bridge5.size}`));
         if (completeS) {
            break;
         }
      } while (((inactiveQ.size + 4) == 4) && completeS);
         inactiveQ = new Map([[`${inactiveQ.size}`, inactiveQ.size / (Math.max(6, inactiveQ.size))]]);
      let umeng6 = inactiveQ.size <= 7136551;
      do {
         inactiveQ = new Map([[`${inactiveQ.size}`, inactiveQ.size << (Math.min(Math.abs(inactiveQ.size), 5))]]);
         if (umeng6) {
            break;
         }
      } while (umeng6 && (4 <= (1 | inactiveQ.size) && (inactiveQ.size | inactiveQ.size) <= 1));
      buildk += `${parseInt(`${checkboxV}`) % (Math.max(3, 7))}`;
   }
   while (2.57 <= (parseFloat(`${manifestm.length}`) + checkboxV)) {
       let auto_sK = String.fromCharCode(99,108,111,115,101,99,98,95,103,95,54,0);
       let dialogu: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,114,103,98,97,98,101,0),String.fromCharCode(101,112,104,101,109,101,114,97,108,95,57,95,53,0)], [String.fromCharCode(105,110,115,101,114,116,115,95,106,95,51,53,0),String.fromCharCode(99,111,112,121,120,110,95,113,95,49,48,0)]]);
         auto_sK += `${auto_sK.length}`;
       let stringY = false;
       let mapping2 = true;
      if ((dialogu.size & 4) < 2) {
         dialogu.set(`${auto_sK}`, 1 << (Math.min(5, Math.abs(dialogu.size))));
      }
      while (!stringY) {
         stringY = dialogu.size == 25 || !stringY;
         break;
      }
      if (3 == auto_sK.length) {
          let mbbannerb = false;
         dialogu = new Map([[`${dialogu.size}`, dialogu.size]]);
         mbbannerb = !mbbannerb;
      }
         auto_sK += `${((stringY ? 1 : 2) ^ 3)}`;
      checkboxV += parseFloat(`${buildk.length}`);
      break;
   }
      sheetl += parseFloat(`${2}`);
       let yingc = String.fromCharCode(112,97,117,115,101,95,112,95,56,0);
       let leagueO = 1.0;
       let headerh = true;
      while (yingc.length < 1 && !headerh) {
          let heartX = 2.0;
          let download2 = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,111,95,49,57,0);
         yingc += "2";
         heartX /= Math.max((parseFloat(`${String.fromCharCode(76,0) == download2 ? parseInt(`${heartX}`) : download2.length}`)), 5);
         break;
      }
          let muted2 = String.fromCharCode(101,95,52,48,95,111,102,102,101,116,0);
          let interstitialp = true;
          let membershipX: Array<any> = [54, 265];
         leagueO /= Math.max(2, (parseFloat(`${(interstitialp ? 1 : 5) >> (Math.min(membershipX.length, 3))}`)));
         muted2 += `${(String.fromCharCode(101,0) == muted2 ? muted2.length : muted2.length)}`;
         interstitialp = muted2 == muted2;
         headerh = !headerh;
         yingc = `${((headerh ? 5 : 1) / 1)}`;
         yingc += `${(yingc == String.fromCharCode(57,0) ? yingc.length : parseInt(`${leagueO}`))}`;
       let editr = String.fromCharCode(112,97,114,97,109,101,116,101,114,95,116,95,52,56,0);
         editr = `${yingc.length}`;
      if (!headerh && 3 < editr.length) {
          let tooltipsd = 0;
         editr += `${(String.fromCharCode(109,0) == editr ? tooltipsd : editr.length)}`;
      }
      for (let b = 0; b < 2; b++) {
         leagueO *= (parseFloat(`${parseInt(`${leagueO}`) - (headerh ? 1 : 5)}`));
      }
      description_4i = `${buildk.length}`;
      promotion3.set(`${checkboxV}`, parseInt(`${checkboxV}`));
      malaysia9 = `${malaysia9.length >> (Math.min(Math.abs(2), 5))}`;
      malaysia9 += `${manifestm.length}`;
   while (2.45 <= sheetl) {
       let usernameB = 5;
       let main_o3: Array<any> = [671, 286];
      for (let o = 0; o < 2; o++) {
         usernameB += 1 | main_o3.length;
      }
          let ewardedp = String.fromCharCode(116,114,105,112,108,101,95,104,95,57,51,0);
          let edit9 = 1.0;
         main_o3 = [ewardedp.length + 2];
         ewardedp = "2";
         edit9 /= Math.max(parseInt(`${edit9}`) | parseInt(`${edit9}`), 1);
         usernameB <<= Math.min(Math.abs(usernameB), 1);
         usernameB <<= Math.min(Math.abs(usernameB), 1);
      while (usernameB < 3) {
         usernameB >>= Math.min(3, Math.abs(usernameB | 1));
         break;
      }
       let regengb: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,115,95,119,95,49,48,48,0),501], [String.fromCharCode(102,95,51,52,95,100,97,116,97,98,97,115,101,115,0),938], [String.fromCharCode(109,117,120,95,120,95,53,49,0),665]]);
       let holderJ: Map<any, any> = new Map([[String.fromCharCode(119,95,56,53,95,108,101,114,112,102,0),87], [String.fromCharCode(105,95,54,52,95,108,111,103,111,0),988], [String.fromCharCode(112,114,111,99,97,109,112,95,115,95,54,49,0),586]]);
      sheetl -= parseFloat(`${3 % (Math.max(8, parseInt(`${sheetl}`)))}`);
      break;
   }
       let sina0 = String.fromCharCode(112,114,111,116,101,99,116,105,111,110,95,120,95,49,48,48,0);
       let reacts: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,116,97,103,95,55,95,55,49,0),false ], [String.fromCharCode(106,95,49,52,0),false ], [String.fromCharCode(119,95,50,49,95,97,116,104,0),true ]]);
         sina0 += `${sina0.length}`;
      for (let i = 0; i < 3; i++) {
         sina0 = `${sina0.length}`;
      }
      description_4i = "2";
   while (2 >= promotion3.size) {
       let search9: Array<any> = [11, 942, 655];
      for (let y = 0; y < 1; y++) {
         search9.push(2);
      }
      while (2 > (search9.length & search9.length)) {
          let acceptedY = String.fromCharCode(116,97,116,105,99,95,112,95,54,55,0);
          let relatedd = String.fromCharCode(97,95,53,49,95,104,101,114,101,0);
          let forwards = 0;
          let selectede = 2;
         search9 = [1 << (Math.min(Math.abs(selectede), 4))];
         acceptedY += `${(relatedd == String.fromCharCode(71,0) ? forwards : relatedd.length)}`;
         forwards <<= Math.min(Math.abs(3 + relatedd.length), 3);
         selectede ^= 1 & forwards;
         break;
      }
         search9.push(3 << (Math.min(3, search9.length)));
      streamingL = !streamingL;
      break;
   }
   for (let h = 0; h < 2; h++) {
       let dragc: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,97,98,108,101,95,108,95,55,56,0),false ], [String.fromCharCode(108,95,53,57,95,117,121,118,121,0),true ], [String.fromCharCode(115,99,114,111,108,108,105,110,103,95,56,95,49,52,0),false ]]);
       let sourcer = String.fromCharCode(122,95,55,95,97,110,97,108,121,122,101,0);
       let unreadZ = String.fromCharCode(98,105,100,105,114,95,118,95,57,48,0);
       let gradleZ = String.fromCharCode(113,95,50,52,95,114,101,113,117,101,115,116,101,114,0);
      let videoP = unreadZ.length <= 7825901;
      do {
         unreadZ = `${dragc.size}`;
         if (videoP) {
            break;
         }
      } while (videoP && (unreadZ.length >= 4));
         dragc = new Map([[`${dragc.size}`, 1]]);
         gradleZ += `${2 - sourcer.length}`;
         sourcer = `${sourcer.length >> (Math.min(gradleZ.length, 1))}`;
      for (let v = 0; v < 2; v++) {
         dragc = new Map([[`${dragc.size}`, dragc.size]]);
      }
          let result3 = String.fromCharCode(117,95,52,48,95,114,101,105,115,115,117,101,0);
          let backf: Array<any> = [892, 665];
         gradleZ = `${(String.fromCharCode(100,0) == unreadZ ? gradleZ.length : unreadZ.length)}`;
         result3 += `${backf.length * 3}`;
         backf = [1];
         dragc = new Map([[gradleZ, gradleZ.length]]);
      if (sourcer.length >= unreadZ.length) {
         sourcer = `${1 & unreadZ.length}`;
      }
      if (!sourcer.endsWith(`${dragc.size}`)) {
         dragc.set(`${unreadZ}`, unreadZ.length);
      }
      for (let h = 0; h < 1; h++) {
         gradleZ += `${dragc.size >> (Math.min(Math.abs(1), 5))}`;
      }
         dragc.set(gradleZ, unreadZ.length * 2);
      for (let u = 0; u < 2; u++) {
          let logoy = 1.0;
          let guideR = false;
          let stringr: Array<any> = [799, 298, 259];
          let sortC = 5.0;
          let playlistk = String.fromCharCode(99,111,112,121,109,95,121,95,54,51,0);
         sourcer += `${2 - stringr.length}`;
         logoy -= parseFloat(`${parseInt(`${sortC}`)}`);
         guideR = 10.87 > sortC || 10.87 > logoy;
         stringr.push(1 - parseInt(`${logoy}`));
         playlistk = `${parseInt(`${logoy}`) ^ parseInt(`${sortC}`)}`;
      }
      iconP = gradleZ.length > 71;
   }
      manifestm = [parseInt(`${sheetl}`) + 3];
      buildk += `${buildk.length / (Math.max(2, 3))}`;
   if (5 > description_4i.length) {
      description_4i += "2";
   }
      description_4i += "3";
       let sideM = String.fromCharCode(112,108,117,103,103,101,100,95,98,95,50,0);
          let forwardL = String.fromCharCode(110,95,55,52,95,114,101,109,111,118,105,110,103,0);
          let transferR = 4;
          let sourceX = 3.0;
         sideM += "1";
         forwardL += `${parseInt(`${sourceX}`) >> (Math.min(1, Math.abs(2)))}`;
         transferR |= transferR;
         sourceX += parseInt(`${sourceX}`) | 1;
       let membershipG = 5.0;
      while (4.14 < (5.17 * membershipG)) {
         membershipG -= parseInt(`${membershipG}`);
         break;
      }
      vietnamd >>= Math.min(4, Math.abs(malaysia9.length ^ 1));
      description_4i = "1";
   for (let y = 0; y < 2; y++) {
      manifestm.push(manifestm.length % (Math.max(1, buildk.length)));
   }
      manifestm.push(description_4i.length);
   if (buildk.length == 4) {
       let configu = String.fromCharCode(108,100,105,115,116,95,116,95,49,51,0);
       let philippinesH: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,97,98,108,101,95,103,95,55,50,0),623], [String.fromCharCode(111,95,57,57,95,103,101,116,99,114,101,100,0),132], [String.fromCharCode(101,120,97,109,112,108,101,95,101,95,54,54,0),298]]);
         configu += `${2 >> (Math.min(4, configu.length))}`;
         philippinesH = new Map([[`${philippinesH.size}`, configu.length >> (Math.min(1, Math.abs(philippinesH.size)))]]);
       let group3 = String.fromCharCode(122,95,54,55,95,99,98,117,102,0);
          let arrown = String.fromCharCode(103,95,50,54,95,114,101,109,117,120,0);
         philippinesH = new Map([[arrown, arrown.length]]);
      for (let v = 0; v < 1; v++) {
         group3 += `${(String.fromCharCode(72,0) == group3 ? philippinesH.size : group3.length)}`;
      }
      if (!group3.endsWith(`${philippinesH.size}`)) {
         philippinesH = new Map([[`${philippinesH.size}`, philippinesH.size + group3.length]]);
      }
      iconP = 73 > philippinesH.size || 73 > buildk.length;
   }
      description_4i = `${description_4i.length}`;
   for (let r = 0; r < 2; r++) {
      iconP = vietnamd >= 21 || description_4i.length >= 21;
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
       let carouselk = true;
    let handlerE = true;
    let stationN = String.fromCharCode(115,101,113,117,101,110,99,101,115,95,100,95,56,54,0);
    let loadingf: Map<any, any> = new Map([[String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,95,115,95,51,48,0),452], [String.fromCharCode(98,95,53,51,95,112,114,111,116,101,99,116,101,100,0),965]]);
    let modalD = 0.0;
    let desc6 = 3.0;
    let default_qrs = 5.0;
    let privilegel: Map<any, any> = new Map([[String.fromCharCode(118,97,116,97,114,95,53,95,51,52,0),138], [String.fromCharCode(103,95,53,52,95,111,112,112,111,115,105,116,101,0),13]]);
    let foundr = String.fromCharCode(101,95,57,50,95,99,111,109,109,105,115,115,105,111,110,0);
      handlerE = privilegel.size >= 41;
      default_qrs /= Math.max(1, parseFloat(`${1}`));
   while (!handlerE) {
      handlerE = !handlerE || loadingf.size < 66;
      break;
   }
   while (handlerE) {
      carouselk = loadingf.get(`${handlerE}`) == null;
      break;
   }
      carouselk = !carouselk || 88.0 <= desc6;
       let sentry3 = 0;
       let malaysiab = String.fromCharCode(116,95,51,54,95,116,115,99,99,100,97,116,97,0);
         sentry3 /= Math.max(5, sentry3);
          let headerY = 2.0;
          let weiboG = false;
         malaysiab += `${parseInt(`${headerY}`) % 1}`;
         headerY += 1;
          let controlsb = String.fromCharCode(106,95,53,53,95,119,105,116,104,0);
          let successH = 4;
          let moviesR = 5.0;
         sentry3 += 2 | successH;
         controlsb = `${1 & controlsb.length}`;
         successH <<= Math.min(controlsb.length, 3);
         moviesR /= Math.max(parseFloat(`${controlsb.length}`), 5);
         sentry3 %= Math.max(sentry3 / (Math.max(malaysiab.length, 10)), 5);
         malaysiab = `${2 << (Math.min(3, Math.abs(sentry3)))}`;
         sentry3 |= sentry3;
      carouselk = !handlerE;
      modalD *= parseFloat(`${privilegel.size & parseInt(`${desc6}`)}`);
   while ((modalD - 4.23) > 1.22 && carouselk) {
      carouselk = (privilegel.size ^ loadingf.size) < 24;
      break;
   }

    clearTimeout(timer.current);

       let debugA = 3.0;
          let reminder7 = 3.0;
          let controlsT = 0;
          let spinnerl: Map<any, any> = new Map([[String.fromCharCode(100,99,98,122,95,98,95,50,56,0),134], [String.fromCharCode(116,105,109,101,98,97,115,101,95,52,95,50,0),385], [String.fromCharCode(115,101,103,105,116,101,114,95,113,95,54,52,0),946]]);
         debugA /= Math.max(1, parseInt(`${reminder7}`));
         reminder7 /= Math.max(3, parseFloat(`${spinnerl.size}`));
         controlsT |= spinnerl.size;
         debugA += parseInt(`${debugA}`);
      for (let h = 0; h < 1; h++) {
          let actionsd = 1.0;
          let lessH: Map<any, any> = new Map([[String.fromCharCode(108,101,114,112,102,95,109,95,49,48,0),false ], [String.fromCharCode(115,111,109,101,116,104,105,110,103,95,116,95,51,0),true ]]);
          let description_qbs = 3;
          let toponq = 1.0;
          let usernamev = 5.0;
         debugA -= parseInt(`${toponq}`);
         actionsd -= lessH.size;
         lessH = new Map([[`${usernamev}`, 3 & parseInt(`${usernamev}`)]]);
         description_qbs += lessH.size;
      }
      privilegel = new Map([[`${handlerE}`, 1 - parseInt(`${default_qrs}`)]]);
       let langkeyU = 2;
         langkeyU %= Math.max(1, 3);
      while ((langkeyU - 5) == 2) {
         langkeyU |= 2 - langkeyU;
         break;
      }
      while (langkeyU >= langkeyU) {
          let mbjscommonu: Map<any, any> = new Map([[String.fromCharCode(119,95,50,48,95,100,117,114,103,101,114,107,105,110,103,0),String.fromCharCode(120,95,48,95,105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,0)], [String.fromCharCode(122,95,50,51,0),String.fromCharCode(98,111,116,95,110,95,52,49,0)], [String.fromCharCode(105,95,50,52,95,116,111,103,103,108,105,110,103,0),String.fromCharCode(105,95,55,48,95,99,111,100,101,99,112,114,105,118,97,116,101,0)]]);
          let launcherG = 1.0;
         langkeyU &= parseInt(`${launcherG}`) | mbjscommonu.size;
         break;
      }
      loadingf.set(`${langkeyU}`, langkeyU);
   let filex = default_qrs <= 6595493.0;
   do {
      default_qrs -= parseFloat(`${2}`);
      if (filex) {
         break;
      }
   } while (((1.95 + desc6) <= 1.8 || (1.95 + default_qrs) <= 5.65) && filex);
   if ((parseFloat(`${stationN.length}`) / (Math.max(10, modalD))) >= 3.59) {
      stationN += `${loadingf.size - 1}`;
   }
       let indexa = false;
       let search1 = String.fromCharCode(114,95,50,51,95,111,110,108,105,110,101,115,0);
       let crossh = String.fromCharCode(97,95,56,95,109,117,116,101,0);
         search1 = `${crossh.length ^ 1}`;
      while (search1 == String.fromCharCode(112,0)) {
          let fieldD = String.fromCharCode(99,111,110,118,115,97,109,112,95,53,95,50,53,0);
          let internetV = false;
          let indicator3 = 1;
          let connection7 = 2.0;
         crossh = `${((internetV ? 5 : 1) * (indexa ? 2 : 2))}`;
         fieldD += `${parseInt(`${connection7}`) & 3}`;
         internetV = indicator3 <= parseInt(`${connection7}`);
         indicator3 >>= Math.min(3, Math.abs(parseInt(`${connection7}`) << (Math.min(3, Math.abs(indicator3)))));
         break;
      }
         crossh = `${((indexa ? 1 : 2) - 2)}`;
       let philippinesz = 0.0;
       let robotoy = 4.0;
       let langkeyv: Array<any> = [618, 259];
      while (crossh.length >= 3) {
         crossh = `${((indexa ? 4 : 1) * search1.length)}`;
         break;
      }
          let entryN = 0.0;
          let nalyticsd = false;
         philippinesz /= Math.max((parseFloat(`${(indexa ? 2 : 4) / (Math.max(7, parseInt(`${philippinesz}`)))}`)), 5);
         entryN *= parseInt(`${entryN}`) << (Math.min(4, Math.abs(2)));
         nalyticsd = !nalyticsd;
         indexa = (langkeyv.length << (Math.min(search1.length, 2))) > 2;
         indexa = philippinesz > 41.21;
      privilegel = new Map([[`${modalD}`, 1]]);
   let guideK = String.fromCharCode(121,116,113,110,104,114,0) == stationN;
   do {
      stationN = `${stationN.length % 1}`;
      if (guideK) {
         break;
      }
   } while (((default_qrs - 4.63) > 5.76) && guideK);
      loadingf = new Map([[`${default_qrs}`, stationN.length * parseInt(`${default_qrs}`)]]);
       let gemfilel = String.fromCharCode(100,95,51,53,95,116,104,114,111,117,103,104,112,117,116,0);
       let alert0 = 3.0;
       let episodesQ = String.fromCharCode(109,95,56,52,95,115,97,117,99,101,0);
      for (let b = 0; b < 2; b++) {
         gemfilel += "3";
      }
      if (4 == (2 >> (Math.min(2, episodesQ.length)))) {
          let groupg: Map<any, any> = new Map([[String.fromCharCode(97,100,105,100,95,98,95,56,49,0),String.fromCharCode(117,95,55,54,95,108,101,115,115,0)], [String.fromCharCode(113,95,55,53,95,110,111,104,101,97,100,101,114,0),String.fromCharCode(119,97,107,101,95,100,95,51,55,0)]]);
          let watchq: Map<any, any> = new Map([[String.fromCharCode(108,95,57,48,95,99,117,100,97,117,112,108,111,97,100,0),827], [String.fromCharCode(98,95,50,95,117,115,101,99,0),651]]);
         alert0 *= parseFloat(`${watchq.size * groupg.size}`);
      }
      let orientationz = gemfilel.length >= 5080440;
      do {
         gemfilel += `${episodesQ.length * 1}`;
         if (orientationz) {
            break;
         }
      } while (orientationz && (gemfilel.startsWith(`${alert0}`)));
      let plush = 7427860.0 >= alert0;
      do {
         alert0 *= (parseFloat(`${episodesQ == String.fromCharCode(79,0) ? parseInt(`${alert0}`) : episodesQ.length}`));
         if (plush) {
            break;
         }
      } while ((!gemfilel.endsWith(`${alert0}`)) && plush);
      while ((1.75 - alert0) >= 1.49 || 1.31 >= (alert0 - 1.75)) {
          let stringsG = String.fromCharCode(121,95,54,52,95,111,103,103,101,114,0);
          let giftS: Map<any, any> = new Map([[String.fromCharCode(105,109,105,116,97,116,101,95,104,95,52,54,0),String.fromCharCode(112,111,115,116,105,110,103,95,100,95,53,0)], [String.fromCharCode(99,111,109,98,105,110,101,115,95,56,95,50,56,0),String.fromCharCode(106,95,51,57,95,98,111,110,100,0)]]);
          let circleM: Array<any> = [850, 163, 628];
          let catalogo: Map<any, any> = new Map([[String.fromCharCode(108,114,111,110,100,95,122,95,53,57,0),193], [String.fromCharCode(104,105,103,104,119,97,116,101,114,95,104,95,57,49,0),959], [String.fromCharCode(110,95,49,55,95,100,101,108,105,109,105,116,101,114,115,0),783]]);
          let rewardvideoZ: Map<any, any> = new Map([[String.fromCharCode(98,95,50,55,95,112,97,114,101,110,116,115,0),String.fromCharCode(122,95,51,48,95,104,117,102,102,121,117,118,100,115,112,0)], [String.fromCharCode(105,95,49,49,95,116,104,114,101,97,100,115,0),String.fromCharCode(116,95,57,48,95,115,107,101,119,0)], [String.fromCharCode(117,95,49,55,95,110,101,116,119,111,114,107,115,0),String.fromCharCode(103,95,56,95,102,114,97,110,100,111,109,0)]]);
         alert0 += parseFloat(`${rewardvideoZ.size}`);
         stringsG += "2";
         giftS.set(stringsG, stringsG.length / (Math.max(1, 9)));
         circleM.push(catalogo.size);
         catalogo.set(stringsG, 3 | stringsG.length);
         rewardvideoZ.set(`${stringsG}`, stringsG.length ^ giftS.size);
         break;
      }
      for (let f = 0; f < 1; f++) {
         episodesQ = `${(gemfilel == String.fromCharCode(97,0) ? parseInt(`${alert0}`) : gemfilel.length)}`;
      }
      if (episodesQ.length == 4) {
         episodesQ += `${episodesQ.length}`;
      }
          let submit6 = String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,50,95,56,53,0);
         gemfilel = "2";
         submit6 += "2";
         alert0 -= parseFloat(`${1}`);
      default_qrs -= parseFloat(`${parseInt(`${desc6}`) * privilegel.size}`);
    setShowOverlay(true);

   while (carouselk || handlerE) {
       let mapping6 = 1.0;
      while (5.45 > mapping6) {
         mapping6 += parseInt(`${mapping6}`);
         break;
      }
       let emptyU = 1.0;
          let subsz = 1.0;
          let brightness_: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,111,102,102,115,101,116,115,0),String.fromCharCode(111,95,52,52,95,97,101,97,100,0)], [String.fromCharCode(120,95,51,50,95,105,110,118,111,99,97,116,105,111,110,115,0),String.fromCharCode(100,114,111,112,95,53,95,50,48,0)]]);
         mapping6 -= parseInt(`${subsz}`);
         subsz -= parseFloat(`${1}`);
         brightness_ = new Map([[`${brightness_.size}`, 1]]);
      handlerE = !handlerE || privilegel.size < 96;
      break;
   }
       let profileK = 4;
       let feedback_ = 0.0;
         feedback_ /= Math.max(2, profileK);
          let internetL = 1.0;
          let turnN = 4.0;
          let expiredm = true;
         profileK += 1;
         internetL /= Math.max((parseFloat(`${parseInt(`${internetL}`) / (Math.max(4, (expiredm ? 5 : 4)))}`)), 5);
         turnN -= ((expiredm ? 3 : 2) << (Math.min(Math.abs(parseInt(`${internetL}`)), 5)));
         feedback_ *= parseInt(`${feedback_}`) >> (Math.min(3, Math.abs(3)));
         feedback_ += parseInt(`${feedback_}`);
      let nterstitialQ = profileK >= 6438188;
      do {
         profileK |= 3 - profileK;
         if (nterstitialQ) {
            break;
         }
      } while ((profileK > 3) && nterstitialQ);
      let nativeQ = feedback_ <= 9035175.0;
      do {
         feedback_ /= Math.max(3, profileK);
         if (nativeQ) {
            break;
         }
      } while (nativeQ && ((1.17 + feedback_) > 5.66));
      default_qrs += parseFloat(`${1}`);
       let indexJ = 0.0;
       let invitey = String.fromCharCode(117,95,50,56,95,99,111,111,114,100,0);
       let componentW = 3;
      let about8 = invitey.length <= 6430345;
      do {
         invitey = `${(invitey == String.fromCharCode(56,0) ? parseInt(`${indexJ}`) : invitey.length)}`;
         if (about8) {
            break;
         }
      } while (about8 && (invitey.includes(`${componentW}`)));
      while (componentW < 5) {
          let clubF: Array<any> = [827, 325, 13];
          let leftv = String.fromCharCode(97,95,57,52,95,102,111,114,109,0);
          let predictionU = false;
          let dropdowni = String.fromCharCode(111,95,52,50,95,105,110,116,101,114,97,116,105,111,110,0);
          let greenQ = 5.0;
         invitey = `${(parseInt(`${greenQ}`) * (predictionU ? 2 : 2))}`;
         clubF.push(dropdowni.length);
         leftv = `${leftv.length % (Math.max(4, clubF.length))}`;
         predictionU = (clubF.length + leftv.length) > 10;
         dropdowni += `${clubF.length - 1}`;
         greenQ += parseFloat(`${leftv.length}`);
         break;
      }
      let arrowJ = componentW <= 7616297;
      do {
         componentW *= componentW ^ 1;
         if (arrowJ) {
            break;
         }
      } while (arrowJ && (3 == (componentW + parseInt(`${indexJ}`)) && (3 & componentW) == 1));
          let chinasameW: Map<any, any> = new Map([[String.fromCharCode(122,95,50,50,95,99,97,110,99,101,108,0),687], [String.fromCharCode(111,95,55,49,95,115,116,97,107,101,0),316]]);
          let eact9: Map<any, any> = new Map([[String.fromCharCode(102,95,55,51,0),717], [String.fromCharCode(98,105,116,114,101,100,117,99,116,105,111,110,95,53,95,56,52,0),623], [String.fromCharCode(116,114,105,97,110,103,108,101,95,118,95,49,53,0),324]]);
         componentW <<= Math.min(4, Math.abs(eact9.size / 1));
         chinasameW = new Map([[`${chinasameW.size}`, 1 | chinasameW.size]]);
         eact9 = new Map([[`${chinasameW.size}`, chinasameW.size]]);
          let step4 = String.fromCharCode(117,95,49,48,95,117,115,101,114,115,0);
          let langS = 3;
          let selectedU = true;
         invitey = "1";
         step4 += "1";
         langS &= langS + 3;
         selectedU = !step4.startsWith(`${selectedU}`);
         invitey += `${2 * componentW}`;
       let vignetteo = String.fromCharCode(102,95,51,54,95,99,111,109,112,111,115,101,100,0);
       let selectionN = String.fromCharCode(99,101,110,99,95,97,95,55,52,0);
      for (let d = 0; d < 1; d++) {
         indexJ /= Math.max(5, (vignetteo == String.fromCharCode(80,0) ? vignetteo.length : componentW));
      }
      while (indexJ >= 5.63) {
         componentW /= Math.max(1, 1);
         break;
      }
      default_qrs -= parseFloat(`${componentW}`);
      modalD -= parseFloat(`${parseInt(`${modalD}`) >> (Math.min(Math.abs(parseInt(`${default_qrs}`)), 5))}`);
      modalD *= parseFloat(`${loadingf.size}`);
      stationN += `${1 % (Math.max(9, privilegel.size))}`;
   for (let u = 0; u < 2; u++) {
      handlerE = 24 > privilegel.size;
   }
       let trashK: Map<any, any> = new Map([[String.fromCharCode(121,95,50,50,95,114,101,97,100,105,110,0),String.fromCharCode(110,95,55,49,95,105,115,115,0)], [String.fromCharCode(109,95,48,95,97,117,116,111,105,110,99,114,101,109,101,110,116,0),String.fromCharCode(105,100,105,111,109,95,49,95,55,0)], [String.fromCharCode(106,95,53,52,95,99,104,111,115,101,110,0),String.fromCharCode(105,95,50,57,95,99,104,97,112,0)]]);
       let star1: Map<any, any> = new Map([[String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,95,49,95,51,57,0),403], [String.fromCharCode(100,95,57,57,95,116,121,112,105,110,103,0),36]]);
      while ((star1.size ^ trashK.size) <= 5 || 5 <= (5 ^ star1.size)) {
          let reactG = String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,49,95,50,54,0);
          let inactiveU = String.fromCharCode(104,95,50,54,95,99,111,110,99,114,101,116,101,0);
          let optionsL = String.fromCharCode(119,95,51,54,95,117,116,118,105,100,101,111,0);
          let common1 = false;
         trashK = new Map([[`${star1.size}`, star1.size]]);
         reactG += `${((common1 ? 3 : 2))}`;
         inactiveU += `${(inactiveU.length ^ (common1 ? 1 : 2))}`;
         optionsL += `${((common1 ? 2 : 1) / (Math.max(3, 4)))}`;
         break;
      }
          let ewardedt = String.fromCharCode(112,99,97,99,104,101,95,117,95,51,54,0);
          let moreB = 3;
         star1 = new Map([[`${star1.size}`, (String.fromCharCode(54,0) == ewardedt ? ewardedt.length : star1.size)]]);
         moreB <<= Math.min(2, Math.abs(moreB ^ 1));
      carouselk = trashK.size > 32;
    overlayRef.current = true

      loadingf.set(`${default_qrs}`, 1);
   while (1 >= (4 % (Math.max(2, privilegel.size))) && handlerE) {
      handlerE = !handlerE;
      break;
   }
      stationN += `${parseInt(`${desc6}`) / (Math.max(3, 10))}`;
      default_qrs *= (parseFloat(`${String.fromCharCode(48,0) == foundr ? foundr.length : loadingf.size}`));
   let window_nS = default_qrs >= 8426315.0;
   do {
      default_qrs += (parseFloat(`${(handlerE ? 1 : 4) & parseInt(`${default_qrs}`)}`));
      if (window_nS) {
         break;
      }
   } while (window_nS && (1.2 > default_qrs));
   while (5 <= foundr.length) {
      carouselk = String.fromCharCode(69,0) == foundr;
      break;
   }
   for (let v = 0; v < 3; v++) {
       let applicationC = String.fromCharCode(111,95,50,56,95,119,101,98,118,116,116,0);
      for (let b = 0; b < 2; b++) {
          let scheduleE = String.fromCharCode(109,95,49,51,95,97,115,105,115,0);
          let combinem: Array<any> = [136, 559, 570];
          let event6 = 2;
          let flipperp = 0.0;
          let updatesO: Array<any> = [144, 435];
         applicationC = `${parseInt(`${flipperp}`) / (Math.max(2, updatesO.length))}`;
         scheduleE += `${(scheduleE == String.fromCharCode(101,0) ? event6 : scheduleE.length)}`;
         combinem.push(1);
         event6 &= 1 | event6;
         flipperp *= scheduleE.length;
         updatesO.push(event6);
      }
      let rewindY = String.fromCharCode(118,48,51,114,49,55,0) == applicationC;
      do {
          let rewindJ = false;
          let stringE = false;
          let disconnected6 = 0.0;
          let closeV = 4.0;
          let search0 = String.fromCharCode(115,95,49,54,95,99,104,97,110,103,101,100,104,0);
         applicationC = "2";
         rewindJ = search0.length >= parseInt(`${disconnected6}`);
         stringE = closeV <= 14.30 && rewindJ;
         disconnected6 *= (parseFloat(`${(rewindJ ? 2 : 4) << (Math.min(Math.abs(parseInt(`${closeV}`)), 1))}`));
         search0 += `${parseInt(`${closeV}`)}`;
         if (rewindY) {
            break;
         }
      } while (rewindY && (applicationC.length == 4));
          let buildk = 4;
          let typingk = String.fromCharCode(104,95,56,53,95,108,101,97,115,101,0);
          let foregroundL: Array<any> = [120, 583, 104];
         applicationC += `${applicationC.length}`;
         buildk &= typingk.length;
         typingk += "3";
         foregroundL = [buildk / 3];
      stationN += `${1 | parseInt(`${modalD}`)}`;
   }
   while (2 > (loadingf.size - parseInt(`${default_qrs}`)) && (2 << (Math.min(2, Math.abs(loadingf.size)))) > 3) {
       let successy: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,105,110,103,95,51,95,50,51,0),167], [String.fromCharCode(105,95,52,54,95,111,98,106,99,0),975], [String.fromCharCode(105,95,55,54,95,115,101,97,100,0),419]]);
       let commonm = String.fromCharCode(104,97,115,104,107,101,121,95,109,95,53,49,0);
       let customj = String.fromCharCode(99,108,117,116,115,95,51,95,52,48,0);
       let leftM = String.fromCharCode(116,114,97,110,115,95,122,95,54,52,0);
      if (commonm == String.fromCharCode(109,0)) {
         customj = `${successy.size - commonm.length}`;
      }
          let modalg: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,106,115,105,109,100,99,102,103,0),String.fromCharCode(114,101,109,97,112,95,114,95,49,54,0)], [String.fromCharCode(113,95,49,48,48,95,100,105,115,97,98,108,101,115,0),String.fromCharCode(99,97,108,101,110,100,97,114,95,120,95,49,54,0)], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,99,95,55,0),String.fromCharCode(122,95,51,50,95,116,105,108,101,109,107,97,0)]]);
         customj += `${(customj == String.fromCharCode(115,0) ? commonm.length : customj.length)}`;
         modalg.set(`${modalg.size}`, modalg.size);
      for (let r = 0; r < 3; r++) {
         customj = `${commonm.length << (Math.min(3, customj.length))}`;
      }
      for (let t = 0; t < 3; t++) {
         leftM += `${customj.length * 3}`;
      }
         customj += `${commonm.length}`;
       let membership6 = String.fromCharCode(112,95,51,56,95,98,117,102,115,112,97,99,101,0);
      while (successy.size >= 3) {
         successy.set(leftM, commonm.length);
         break;
      }
      for (let k = 0; k < 2; k++) {
          let f_unlock1 = String.fromCharCode(101,95,54,53,95,115,112,114,111,112,0);
          let emptyF = 0.0;
          let grayk = String.fromCharCode(116,97,112,102,105,108,116,101,114,95,53,95,51,56,0);
          let floaterq = 1.0;
         customj += "3";
         f_unlock1 += `${f_unlock1.length}`;
         emptyF /= Math.max(parseInt(`${floaterq}`) >> (Math.min(5, Math.abs(parseInt(`${emptyF}`)))), 4);
         grayk = `${1 >> (Math.min(Math.abs(parseInt(`${floaterq}`)), 5))}`;
      }
          let dropdownI = 4;
         commonm += `${membership6.length}`;
         dropdownI ^= dropdownI / (Math.max(dropdownI, 7));
          let gesture2 = 2;
          let weibo0 = 0.0;
          let collectionP = 2.0;
         commonm = `${(String.fromCharCode(54,0) == customj ? leftM.length : customj.length)}`;
         gesture2 &= 3 - gesture2;
         weibo0 -= 3;
         collectionP += parseInt(`${weibo0}`);
         commonm += `${customj.length & commonm.length}`;
         commonm = `${(String.fromCharCode(89,0) == leftM ? successy.size : leftM.length)}`;
      loadingf.set(`${default_qrs}`, 3 - customj.length);
      break;
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
       let countdownZ: Array<any> = [580, 127];
    let banner9 = true;
    let headerS = String.fromCharCode(101,95,49,48,48,95,116,114,97,110,115,112,97,114,101,110,116,0);
    let forme = String.fromCharCode(114,116,108,95,99,95,56,48,0);
    let unreadY: Array<any> = [265, 424, 694];
    let register_xyn = 5.0;
    let l_centerd = String.fromCharCode(119,95,50,49,95,99,111,108,111,117,114,0);
    let downZ = 4;
    let scorel = String.fromCharCode(105,95,49,52,95,97,99,116,105,118,97,116,111,114,0);
    let styles9 = String.fromCharCode(100,99,116,120,100,99,95,102,95,49,54,0);
    let singapore5 = 5.0;
    let constantsE = 1.0;
    let moditys = String.fromCharCode(106,95,57,50,95,100,101,115,99,101,110,116,0);
    let dycreator7 = true;
    let temperature7 = String.fromCharCode(97,95,57,49,95,116,115,99,99,0);
    let incidentC = false;
      register_xyn /= Math.max((moditys == String.fromCharCode(65,0) ? moditys.length : parseInt(`${constantsE}`)), 2);
      scorel = `${(parseInt(`${singapore5}`) - (banner9 ? 1 : 3))}`;
       let screenS = String.fromCharCode(105,95,54,51,95,104,111,110,101,121,115,119,97,112,0);
       let lesss = String.fromCharCode(116,97,99,107,95,122,95,50,55,0);
      let mbridgeo = 5470506 <= lesss.length;
      do {
         lesss += `${1 ^ lesss.length}`;
         if (mbridgeo) {
            break;
         }
      } while ((screenS != String.fromCharCode(52,0) || 5 >= lesss.length) && mbridgeo);
      while (screenS == lesss) {
         lesss += `${screenS.length << (Math.min(Math.abs(2), 2))}`;
         break;
      }
       let modulet = String.fromCharCode(114,95,49,95,99,108,101,97,114,98,105,116,0);
      for (let h = 0; h < 2; h++) {
         screenS += `${(String.fromCharCode(110,0) == screenS ? screenS.length : lesss.length)}`;
      }
       let sendh = String.fromCharCode(110,95,49,51,95,111,110,101,108,105,110,101,0);
          let leagueG = 1.0;
          let subs8: Array<any> = [913, 152, 214];
         lesss = `${lesss.length ^ 1}`;
         leagueG += parseFloat(`${subs8.length}`);
         subs8 = [2];
      banner9 = headerS.length == 17 || !banner9;
      styles9 += `${2 & forme.length}`;
   if ((register_xyn / (Math.max(singapore5, 10))) > 1.25 && 3.3 > (register_xyn / (Math.max(1.25, 4)))) {
      singapore5 *= 1 / (Math.max(5, styles9.length));
   }
      constantsE *= parseFloat(`${styles9.length + parseInt(`${singapore5}`)}`);
      unreadY = [unreadY.length];
      moditys = `${countdownZ.length}`;
       let xnewinterstitial9 = true;
         xnewinterstitial9 = (!xnewinterstitial9 ? xnewinterstitial9 : !xnewinterstitial9);
         xnewinterstitial9 = (xnewinterstitial9 ? xnewinterstitial9 : xnewinterstitial9);
      let profilel = xnewinterstitial9 ? !xnewinterstitial9 : xnewinterstitial9;
      do {
         xnewinterstitial9 = !xnewinterstitial9;
         if (profilel) {
            break;
         }
      } while ((!xnewinterstitial9) && profilel);
      forme += `${((banner9 ? 3 : 3))}`;


      if (videoRef.current) {

       let f_playere: Map<any, any> = new Map([[String.fromCharCode(108,95,53,56,95,117,112,103,114,97,100,101,100,0),true ], [String.fromCharCode(110,95,54,52,95,97,117,116,111,100,101,116,101,99,116,111,114,0),true ]]);
       let borderlessY: Map<any, any> = new Map([[String.fromCharCode(119,95,55,49,95,109,97,112,102,105,108,101,0),696], [String.fromCharCode(107,95,50,56,95,101,120,116,101,114,105,111,114,0),386], [String.fromCharCode(118,120,119,111,114,107,115,95,51,95,54,0),70]]);
       let themee = 2;
         borderlessY = new Map([[`${borderlessY.size}`, borderlessY.size]]);
       let regengk = String.fromCharCode(100,101,108,101,116,101,95,50,95,57,48,0);
       let groupc = String.fromCharCode(108,95,57,48,95,104,100,108,114,0);
      if (5 < borderlessY.size) {
         regengk = `${borderlessY.size >> (Math.min(Math.abs(f_playere.size), 4))}`;
      }
      let watchD = 6081568 >= f_playere.size;
      do {
         f_playere = new Map([[`${f_playere.size}`, themee]]);
         if (watchD) {
            break;
         }
      } while ((3 == (4 / (Math.max(1, themee))) && 5 == (themee / 4)) && watchD);
      for (let r = 0; r < 2; r++) {
         groupc += "2";
      }
      downZ *= 1 | downZ;
      l_centerd = `${countdownZ.length}`;
       let controlM = String.fromCharCode(117,110,99,111,100,101,100,95,110,95,57,54,0);
       let sportsp = String.fromCharCode(103,95,51,53,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
       let over7 = 5.0;
      if (controlM.includes(`${over7}`)) {
          let matchR = String.fromCharCode(105,95,53,50,95,100,114,97,103,0);
          let sinaw = 2;
          let castD = false;
          let tickr = String.fromCharCode(99,95,49,95,99,111,110,116,101,120,116,99,111,110,102,105,103,0);
          let yinga = 5.0;
         controlM = `${2 << (Math.min(Math.abs(parseInt(`${yinga}`)), 5))}`;
         matchR += "3";
         sinaw |= matchR.length;
         castD = sinaw < 35;
         tickr += `${matchR.length >> (Math.min(Math.abs(1), 4))}`;
         yinga += parseFloat(`${matchR.length / 1}`);
      }
         controlM = `${sportsp.length}`;
          let annerb = false;
         controlM = `${((annerb ? 3 : 4) << (Math.min(Math.abs(parseInt(`${over7}`)), 5)))}`;
      while ((over7 * 3.92) <= 2.79 && 5 <= (controlM.length - 2)) {
         over7 /= Math.max(parseFloat(`${parseInt(`${over7}`)}`), 2);
         break;
      }
      while (4.94 <= (over7 / (Math.max(8, parseFloat(`${controlM.length}`)))) || 3.37 <= (4.94 / (Math.max(10, over7)))) {
         over7 -= parseFloat(`${controlM.length}`);
         break;
      }
      for (let c = 0; c < 2; c++) {
         sportsp += `${3 >> (Math.min(3, Math.abs(parseInt(`${over7}`))))}`;
      }
         over7 -= parseFloat(`${parseInt(`${over7}`) % (Math.max(sportsp.length, 9))}`);
          let smallu: Array<any> = [450, 608, 157];
          let mimo2 = 3;
          let change1 = String.fromCharCode(116,95,54,54,95,117,112,108,111,97,100,0);
         sportsp = `${controlM.length}`;
         smallu = [(change1 == String.fromCharCode(82,0) ? change1.length : mimo2)];
         mimo2 >>= Math.min(2, Math.abs(smallu.length * 1));
      let activityr = String.fromCharCode(110,107,107,107,51,50,120,95,49,54,0) == sportsp;
      do {
         sportsp = `${3 * controlM.length}`;
         if (activityr) {
            break;
         }
      } while (((parseFloat(`${sportsp.length}`) - over7) == 3.87 && 3 == (sportsp.length & 3)) && activityr);
      countdownZ.push((String.fromCharCode(67,0) == headerS ? temperature7.length : headerS.length));
   let productM = register_xyn <= 8853498.0;
   do {
      register_xyn -= parseInt(`${constantsE}`) / (Math.max(unreadY.length, 9));
      if (productM) {
         break;
      }
   } while (((register_xyn / (Math.max(10, downZ))) > 3.85) && productM);
   while (dycreator7) {
      register_xyn += countdownZ.length | parseInt(`${constantsE}`);
      break;
   }
      l_centerd = `${styles9.length / (Math.max(3, 2))}`;
   while (temperature7.startsWith(`${unreadY.length}`)) {
      unreadY.push(((banner9 ? 2 : 3)));
      break;
   }
      register_xyn *= parseInt(`${singapore5}`);
   if (temperature7.length < l_centerd.length) {
       let logoO = false;
         logoO = !logoO;
       let actiona: Array<any> = [531, 936, 244];
         logoO = actiona.length >= 48;
      temperature7 = `${((dycreator7 ? 3 : 4) << (Math.min(Math.abs(1), 5)))}`;
   }
        videoRef.current.seek(value);

       let pageS = String.fromCharCode(104,95,57,54,95,105,110,115,116,97,108,108,101,100,0);
       let nativeex0 = String.fromCharCode(114,102,112,115,95,48,95,50,52,0);
      if (nativeex0.length > pageS.length) {
         nativeex0 += `${nativeex0.length}`;
      }
         pageS = `${(nativeex0 == String.fromCharCode(106,0) ? nativeex0.length : pageS.length)}`;
      for (let m = 0; m < 2; m++) {
         nativeex0 = "2";
      }
      let controlsI = nativeex0 == String.fromCharCode(119,120,53,105,54,111,118,52,49,53,0);
      do {
         nativeex0 += "2";
         if (controlsI) {
            break;
         }
      } while ((pageS == String.fromCharCode(65,0) || nativeex0.length <= 4) && controlsI);
      while (pageS.length >= 1) {
         pageS += `${2 ^ nativeex0.length}`;
         break;
      }
      while (nativeex0.includes(pageS)) {
         nativeex0 = `${(nativeex0 == String.fromCharCode(99,0) ? pageS.length : nativeex0.length)}`;
         break;
      }
      temperature7 = `${headerS.length}`;
       let trophyR = String.fromCharCode(106,117,108,105,97,110,100,97,121,95,50,95,52,49,0);
      while (trophyR != trophyR) {
          let xvodS = 0.0;
          let sheet0 = String.fromCharCode(98,101,104,97,118,105,111,117,114,95,49,95,50,55,0);
          let bottomt = String.fromCharCode(118,95,53,51,95,112,117,112,117,112,0);
          let filed_: Array<any> = [961, 877, 124];
         trophyR = `${parseInt(`${xvodS}`)}`;
         xvodS *= 2;
         sheet0 += "1";
         bottomt = `${3 * sheet0.length}`;
         filed_.push(bottomt.length >> (Math.min(Math.abs(1), 3)));
         break;
      }
         trophyR = `${trophyR.length}`;
      while (trophyR.includes(trophyR)) {
         trophyR += `${trophyR.length >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
      constantsE *= (parseFloat(`${(banner9 ? 2 : 3) % (Math.max((dycreator7 ? 1 : 1), 3))}`));
   let with_qO = String.fromCharCode(54,99,112,102,0) == l_centerd;
   do {
       let thumbnail1 = true;
       let left4 = 5;
         left4 /= Math.max(5, 3 + left4);
      while (!thumbnail1) {
         left4 += ((thumbnail1 ? 5 : 4) % (Math.max(left4, 8)));
         break;
      }
      for (let h = 0; h < 2; h++) {
         thumbnail1 = left4 <= 90 && thumbnail1;
      }
      if (left4 == 2) {
         left4 <<= Math.min(2, Math.abs(1));
      }
          let context3 = String.fromCharCode(102,95,55,50,95,115,117,105,116,101,115,0);
          let downS: Array<any> = [144, 205, 390];
          let optionsu = String.fromCharCode(112,105,120,101,108,115,95,111,95,51,53,0);
         left4 %= Math.max(downS.length, 4);
         context3 = `${2 ^ context3.length}`;
         downS.push(1 << (Math.min(1, optionsu.length)));
         optionsu += `${context3.length / (Math.max(8, optionsu.length))}`;
          let paginationE = true;
         thumbnail1 = thumbnail1 || 9 == left4;
         paginationE = paginationE || paginationE;
      l_centerd += `${2 & countdownZ.length}`;
      if (with_qO) {
         break;
      }
   } while ((temperature7 != l_centerd) && with_qO);
       let awayk = 5;
       let loadingM = 3;
       let flipper9 = String.fromCharCode(105,108,108,117,109,105,110,97,116,105,111,110,95,120,95,51,49,0);
      let shirtf = 7955918 <= loadingM;
      do {
          let listZ: Map<any, any> = new Map([[String.fromCharCode(100,105,97,109,111,110,100,95,98,95,57,55,0),false ], [String.fromCharCode(99,95,51,57,95,97,118,105,97,108,97,98,108,101,0),true ], [String.fromCharCode(101,95,52,57,95,116,105,99,107,105,110,103,0),true ]]);
          let fastW = 1.0;
          let teamr = String.fromCharCode(107,95,55,56,95,115,112,101,101,100,111,109,101,116,101,114,0);
          let giftg = 0;
         loadingM &= flipper9.length * 2;
         listZ = new Map([[`${listZ.size}`, parseInt(`${fastW}`) / 3]]);
         fastW *= parseFloat(`${giftg}`);
         teamr = `${parseInt(`${fastW}`) ^ listZ.size}`;
         giftg <<= Math.min(Math.abs(listZ.size & parseInt(`${fastW}`)), 5);
         if (shirtf) {
            break;
         }
      } while (shirtf && ((loadingM % (Math.max(3, 6))) == 5));
         flipper9 = "1";
      let fastforward7 = 8058905 <= flipper9.length;
      do {
         flipper9 += `${loadingM}`;
         if (fastforward7) {
            break;
         }
      } while (fastforward7 && (flipper9.startsWith(`${loadingM}`)));
         loadingM /= Math.max(1, 3);
         flipper9 += "3";
         loadingM /= Math.max(awayk, 4);
          let searchv = 4.0;
          let mbnativeK = 5.0;
          let episodesG = String.fromCharCode(120,95,53,55,95,120,99,111,100,101,0);
         awayk |= 3;
         searchv += parseInt(`${searchv}`) ^ 3;
         mbnativeK += parseFloat(`${parseInt(`${searchv}`)}`);
         episodesG += `${parseInt(`${searchv}`) % 1}`;
          let configureC = 4.0;
         flipper9 = `${loadingM}`;
         configureC += parseInt(`${configureC}`);
       let moduleu: Array<any> = [String.fromCharCode(99,111,114,114,101,99,116,105,110,103,95,50,95,57,48,0), String.fromCharCode(112,105,112,101,108,105,110,101,115,95,115,95,55,48,0)];
      singapore5 += awayk;
   while (4 >= (1 / (Math.max(1, countdownZ.length)))) {
      forme += `${unreadY.length}`;
      break;
   }
   while (headerS == String.fromCharCode(83,0)) {
       let coreu = String.fromCharCode(122,95,51,51,95,102,105,120,0);
       let footballo = true;
       let agreementW = 0;
       let inviteG = String.fromCharCode(100,101,110,111,105,115,105,110,103,95,114,95,56,53,0);
       let middlewareX = String.fromCharCode(120,119,109,97,95,120,95,55,0);
       let dataK = String.fromCharCode(106,95,49,48,95,112,114,111,100,117,99,101,0);
          let containerq = 3;
         inviteG = `${dataK.length}`;
         containerq += containerq & containerq;
      let kickH = 7638073 <= agreementW;
      do {
         agreementW >>= Math.min(1, Math.abs(3));
         if (kickH) {
            break;
         }
      } while (((2 + middlewareX.length) > 4) && kickH);
      while (5 > coreu.length || 5 > middlewareX.length) {
         coreu += `${agreementW}`;
         break;
      }
         footballo = String.fromCharCode(74,0) == middlewareX;
      let toponh = 8787177 <= coreu.length;
      do {
         coreu += `${(agreementW | (footballo ? 3 : 1))}`;
         if (toponh) {
            break;
         }
      } while (toponh && (dataK == coreu));
         inviteG = `${((footballo ? 3 : 1) - 1)}`;
      if (2 >= (4 | agreementW)) {
         footballo = middlewareX.length == 63 && 63 == agreementW;
      }
         coreu = `${inviteG.length & 2}`;
      let whistle8 = coreu == String.fromCharCode(56,48,107,121,99,0);
      do {
         coreu += `${(inviteG == String.fromCharCode(95,0) ? inviteG.length : middlewareX.length)}`;
         if (whistle8) {
            break;
         }
      } while (whistle8 && (footballo));
      if (coreu.includes(inviteG)) {
          let taiwan2 = true;
          let circleC = String.fromCharCode(97,110,116,105,95,111,95,52,53,0);
         coreu += `${3 & circleC.length}`;
      }
         coreu = `${inviteG.length}`;
         coreu += `${dataK.length - 3}`;
         middlewareX += `${(inviteG == String.fromCharCode(81,0) ? (footballo ? 3 : 5) : inviteG.length)}`;
         middlewareX = "1";
      scorel = "1";
      break;
   }
      headerS = `${unreadY.length >> (Math.min(Math.abs(3), 2))}`;
   for (let r = 0; r < 3; r++) {
      headerS = `${2 + temperature7.length}`;
   }
   if (!temperature7.includes(`${incidentC}`)) {
      temperature7 = `${((incidentC ? 3 : 4) + temperature7.length)}`;
   }
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current]
  );

  const handlePlayPause = () => {
       let paginationt = false;
    let langP = 3.0;
    let fileq = String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,107,95,54,54,0);
    let ewardedM = 5.0;
    let string_ = 4.0;
    let actionsm: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,101,100,95,51,95,54,56,0),522], [String.fromCharCode(98,95,56,48,95,100,101,110,105,101,100,0),70]]);
    let sigmob1: Array<any> = [627, 699, 27];
    let clubc = 3;
    let basketball6: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,119,95,57,49,0),455], [String.fromCharCode(116,105,109,101,119,97,105,116,95,99,95,57,57,0),850]]);
    let links: Array<any> = [951, 158];
      sigmob1.push(1 >> (Math.min(Math.abs(parseInt(`${ewardedM}`)), 1)));
      actionsm.set(`${paginationt}`, 1 ^ fileq.length);
   for (let i = 0; i < 1; i++) {
       let hookq = String.fromCharCode(116,95,54,50,95,116,109,109,98,110,0);
         hookq = `${hookq.length >> (Math.min(3, hookq.length))}`;
         hookq = `${(String.fromCharCode(67,0) == hookq ? hookq.length : hookq.length)}`;
      let turn9 = String.fromCharCode(115,54,111,111,52,111,122,0) == hookq;
      do {
          let floaterB = String.fromCharCode(118,95,56,49,95,121,97,114,110,0);
          let emptyE = 1.0;
         hookq = `${(String.fromCharCode(72,0) == hookq ? parseInt(`${emptyE}`) : hookq.length)}`;
         floaterB = `${floaterB.length}`;
         emptyE -= floaterB.length;
         if (turn9) {
            break;
         }
      } while ((hookq != String.fromCharCode(80,0)) && turn9);
      basketball6.set(`${langP}`, parseInt(`${langP}`) | basketball6.size);
   }
      clubc += 3;
      actionsm.set(`${paginationt}`, (parseInt(`${string_}`) & (paginationt ? 5 : 1)));
   if ((actionsm.size >> (Math.min(Math.abs(1), 5))) < 4 && (sigmob1.length >> (Math.min(Math.abs(actionsm.size), 4))) < 1) {
       let commonX = String.fromCharCode(116,95,51,49,95,112,97,114,101,110,116,0);
       let xvod9 = 1;
         commonX = `${xvod9}`;
         xvod9 -= 1;
      while (4 == (2 << (Math.min(4, commonX.length))) && (xvod9 << (Math.min(Math.abs(2), 1))) == 2) {
         commonX = `${xvod9 % 3}`;
         break;
      }
      while ((xvod9 << (Math.min(commonX.length, 5))) == 5) {
         xvod9 -= xvod9;
         break;
      }
      while (3 >= xvod9) {
          let liveN = true;
          let step2 = false;
          let next0 = 1.0;
          let alert_: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,103,101,111,99,111,100,101,100,0),true ], [String.fromCharCode(97,95,53,52,95,116,114,105,112,0),true ], [String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,100,95,49,53,0),false ]]);
         xvod9 %= Math.max((parseInt(`${next0}`) ^ (liveN ? 2 : 5)), 1);
         liveN = alert_.get(`${step2}`) == null;
         step2 = !step2 || alert_.size <= 37;
         next0 += parseFloat(`${alert_.size}`);
         break;
      }
       let overlayM: Array<any> = [153, 637, 337];
       let rewindo: Array<any> = [35, 325, 650];
      sigmob1.push(parseInt(`${ewardedM}`));
   }
   while (2 > actionsm.size) {
      actionsm.set(`${string_}`, parseInt(`${string_}`) / (Math.max(1, 8)));
      break;
   }

    clearTimeout(iconTimer.current);

      string_ -= parseFloat(`${parseInt(`${string_}`) / (Math.max(actionsm.size, 8))}`);
      actionsm = new Map([[`${actionsm.size}`, 2]]);
      sigmob1 = [sigmob1.length];
   for (let c = 0; c < 2; c++) {
       let zhengpiane = 1;
         zhengpiane -= zhengpiane;
         zhengpiane -= zhengpiane | 1;
      if ((zhengpiane << (Math.min(1, Math.abs(zhengpiane)))) < 5 && 5 < (zhengpiane << (Math.min(Math.abs(5), 4)))) {
         zhengpiane %= Math.max(3, zhengpiane);
      }
      actionsm.set(`${paginationt}`, actionsm.size - 3);
   }
   while (Array.from(basketball6.keys()).includes(`${ewardedM}`)) {
      basketball6 = new Map([[`${sigmob1.length}`, clubc]]);
      break;
   }
       let notificatione: Map<any, any> = new Map([[String.fromCharCode(104,101,120,98,115,95,104,95,51,52,0),String.fromCharCode(113,95,50,53,95,117,108,112,105,110,102,111,0)], [String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,54,95,51,52,0),String.fromCharCode(107,95,57,48,95,99,97,109,101,108,108,105,97,0)], [String.fromCharCode(117,95,49,48,95,100,111,118,101,0),String.fromCharCode(97,95,51,95,116,101,115,118,101,114,116,0)]]);
         notificatione.set(`${notificatione.size}`, notificatione.size % (Math.max(3, 6)));
      if (2 <= notificatione.size) {
         notificatione.set(`${notificatione.size}`, 2 * notificatione.size);
      }
          let inewsI = 0.0;
          let sounds = String.fromCharCode(102,95,51,52,95,100,101,114,105,118,97,116,105,118,101,0);
         notificatione = new Map([[`${inewsI}`, parseInt(`${inewsI}`) * sounds.length]]);
      ewardedM *= ((paginationt ? 3 : 4) % (Math.max(8, actionsm.size)));
   if (Array.from(actionsm.keys()).includes(`${basketball6.size}`)) {
       let uploada = String.fromCharCode(116,114,97,105,116,115,95,118,95,54,49,0);
       let movies2 = 2.0;
       let agreementE = 2.0;
       let turni = 5.0;
      for (let r = 0; r < 3; r++) {
         agreementE -= parseFloat(`${1}`);
      }
         agreementE -= (parseFloat(`${String.fromCharCode(65,0) == uploada ? parseInt(`${movies2}`) : uploada.length}`));
         movies2 /= Math.max(parseFloat(`${parseInt(`${turni}`) * 3}`), 4);
         agreementE *= parseFloat(`${parseInt(`${movies2}`)}`);
      if (2 > (4 << (Math.min(2, uploada.length))) && 3 > (uploada.length << (Math.min(Math.abs(4), 2)))) {
          let yingF = String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,48,95,55,52,0);
          let stationb = 0.0;
          let umeng3 = String.fromCharCode(97,118,101,114,97,103,101,115,95,98,95,51,52,0);
         movies2 += parseFloat(`${uploada.length >> (Math.min(Math.abs(3), 1))}`);
         yingF += `${3 - yingF.length}`;
         stationb += umeng3.length;
         umeng3 = `${umeng3.length}`;
      }
      if ((movies2 * parseFloat(`${uploada.length}`)) == 4.19) {
          let default_qb = String.fromCharCode(100,95,54,49,95,108,105,98,116,103,118,111,105,112,0);
          let mathQ: Array<any> = [262, 786, 869];
          let fieldb = 5.0;
         movies2 -= parseFloat(`${parseInt(`${movies2}`) << (Math.min(1, Math.abs(2)))}`);
         default_qb += `${2 | parseInt(`${fieldb}`)}`;
         mathQ.push(3);
         fieldb /= Math.max(parseFloat(`${mathQ.length}`), 4);
      }
      if (agreementE > 2.63) {
         agreementE += parseFloat(`${parseInt(`${movies2}`) % (Math.max(parseInt(`${agreementE}`), 7))}`);
      }
      let upgrade0 = 6652595.0 >= turni;
      do {
         turni *= uploada.length;
         if (upgrade0) {
            break;
         }
      } while (upgrade0 && ((turni - 2.30) == 3.67));
          let clubn: Array<any> = [659, 92];
          let expandG = String.fromCharCode(103,95,57,55,95,114,101,102,99,111,117,110,116,101,100,0);
          let episode3 = 3.0;
         agreementE += parseFloat(`${parseInt(`${agreementE}`) >> (Math.min(5, Math.abs(2)))}`);
         clubn.push((String.fromCharCode(54,0) == expandG ? expandG.length : clubn.length));
         episode3 *= expandG.length;
         turni *= 3 * parseInt(`${movies2}`);
         turni /= Math.max(parseInt(`${agreementE}`), 5);
         agreementE *= parseFloat(`${3 * parseInt(`${agreementE}`)}`);
      actionsm.set(`${langP}`, 3);
   }
    setShowIcon(true);

   let cnewsx = actionsm.size <= 5678037;
   do {
      actionsm = new Map([[`${actionsm.size}`, 3 | parseInt(`${ewardedM}`)]]);
      if (cnewsx) {
         break;
      }
   } while (cnewsx && (5 >= (actionsm.size << (Math.min(Math.abs(2), 4))) || 2 >= (sigmob1.length << (Math.min(Math.abs(2), 4)))));
   for (let q = 0; q < 1; q++) {
       let upgradeU: Array<any> = [612, 198];
       let pointr = 2.0;
       let membershipM = 1;
      for (let x = 0; x < 2; x++) {
         pointr *= parseInt(`${pointr}`);
      }
         membershipM >>= Math.min(Math.abs(parseInt(`${pointr}`)), 1);
      for (let l = 0; l < 3; l++) {
         pointr -= 2;
      }
          let indicatorr = 5.0;
         pointr -= membershipM;
         indicatorr *= 1;
         upgradeU.push(parseInt(`${pointr}`));
          let textU: Array<any> = [786, 739, 611];
         membershipM -= parseInt(`${pointr}`);
         textU = [textU.length];
       let moreN = String.fromCharCode(101,110,99,108,111,115,105,110,103,95,57,95,53,57,0);
       let canvasn = String.fromCharCode(115,95,53,50,95,114,101,97,108,108,111,99,112,0);
      while ((canvasn.length ^ membershipM) == 5) {
         membershipM &= membershipM;
         break;
      }
         pointr *= moreN.length % 3;
      fileq += `${basketball6.size}`;
   }
       let volumeZ = 0.0;
       let detailk: Map<any, any> = new Map([[String.fromCharCode(107,95,53,50,95,114,100,98,120,0),34], [String.fromCharCode(101,95,55,54,95,108,97,118,102,105,0),246]]);
         detailk = new Map([[`${detailk.size}`, parseInt(`${volumeZ}`)]]);
         detailk.set(`${volumeZ}`, parseInt(`${volumeZ}`) & 3);
      for (let d = 0; d < 2; d++) {
         volumeZ -= parseFloat(`${detailk.size}`);
      }
         detailk.set(`${volumeZ}`, 1);
       let bingH = 2.0;
       let commonH = 3.0;
      for (let w = 0; w < 3; w++) {
         bingH *= parseFloat(`${detailk.size + 1}`);
      }
      ewardedM /= Math.max(5, 3 + basketball6.size);
   for (let o = 0; o < 1; o++) {
       let downloaderb = String.fromCharCode(104,105,103,104,101,114,95,99,95,57,0);
      if (!downloaderb.endsWith(downloaderb)) {
          let balln = 4.0;
          let mbsplashm = String.fromCharCode(100,97,118,100,95,122,95,53,52,0);
          let sidex = 2.0;
         downloaderb += `${parseInt(`${sidex}`)}`;
         balln -= (String.fromCharCode(49,0) == mbsplashm ? mbsplashm.length : parseInt(`${balln}`));
      }
       let downn = 5.0;
       let clear7 = 1.0;
          let homeX = String.fromCharCode(120,95,54,50,95,115,117,98,115,101,108,101,99,116,0);
          let klevin0: Array<any> = [146, 297, 344];
          let previewz: Map<any, any> = new Map([[String.fromCharCode(99,111,100,105,110,103,95,120,95,53,57,0),988], [String.fromCharCode(99,111,109,112,108,101,116,101,100,95,52,95,52,56,0),724]]);
         downn += parseInt(`${clear7}`);
         homeX = `${klevin0.length | 2}`;
         klevin0 = [1];
         previewz = new Map([[`${previewz.size}`, homeX.length]]);
      clubc /= Math.max(2 ^ parseInt(`${string_}`), 4);
   }
   for (let w = 0; w < 3; w++) {
      sigmob1.push(clubc);
   }
      string_ += parseFloat(`${2 >> (Math.min(1, sigmob1.length))}`);
      clubc |= 3;
    if (isPause) {

   for (let c = 0; c < 2; c++) {
       let transferw = String.fromCharCode(116,95,50,48,95,115,101,97,114,99,104,97,98,108,101,0);
       let stylesC = String.fromCharCode(105,115,112,97,99,107,101,100,95,54,95,49,49,0);
       let temperatureq: Map<any, any> = new Map([[String.fromCharCode(107,95,54,95,98,105,110,107,100,97,116,97,0),947], [String.fromCharCode(116,95,51,50,95,100,115,112,114,0),669]]);
          let dycreatorw: Array<any> = [967, 359];
          let expandb = 4.0;
          let analyticE = 1.0;
         transferw = `${transferw.length}`;
         dycreatorw.push(parseInt(`${analyticE}`) / (Math.max(parseInt(`${expandb}`), 9)));
         expandb += parseFloat(`${parseInt(`${expandb}`) * 2}`);
         analyticE += parseFloat(`${1}`);
          let hongkong7 = String.fromCharCode(97,95,52,56,95,105,99,111,110,115,0);
         transferw += `${transferw.length / (Math.max(6, hongkong7.length))}`;
      for (let l = 0; l < 2; l++) {
          let sinae = false;
          let chatr = 0.0;
          let dropdownL = true;
         stylesC = `${transferw.length >> (Math.min(3, stylesC.length))}`;
         sinae = sinae || 75.51 > chatr;
         chatr /= Math.max(2, parseFloat(`${parseInt(`${chatr}`) % 1}`));
         dropdownL = !dropdownL || sinae;
      }
       let vignette9 = 1.0;
       let basketballP = 0.0;
       let loginF = 2.0;
       let borderlessy = 5.0;
      while ((vignette9 - 5.53) <= 1.31 || 3 <= (parseInt(`${vignette9}`) - stylesC.length)) {
          let clubK = String.fromCharCode(97,95,57,51,95,115,116,114,105,99,116,0);
         stylesC = `${temperatureq.size + stylesC.length}`;
         clubK += "3";
         break;
      }
      if (3 < (transferw.length - temperatureq.size) && (3 - temperatureq.size) < 5) {
         transferw += `${stylesC.length}`;
      }
         loginF /= Math.max(parseFloat(`${parseInt(`${borderlessy}`) << (Math.min(Math.abs(parseInt(`${basketballP}`)), 1))}`), 3);
          let dangerT: Array<any> = [709, 915, 80];
          let rankQ = 4.0;
         loginF /= Math.max(3, parseFloat(`${dangerT.length * 3}`));
         dangerT.push(3);
         rankQ += parseFloat(`${parseInt(`${rankQ}`)}`);
      string_ /= Math.max(4, parseFloat(`${2}`));
   }
   let launcher_ = 8509677 <= basketball6.size;
   do {
      basketball6 = new Map([[`${ewardedM}`, 1]]);
      if (launcher_) {
         break;
      }
   } while (launcher_ && ((basketball6.size + parseInt(`${ewardedM}`)) >= 4));
      clubc *= 3;
      string_ /= Math.max(parseFloat(`${parseInt(`${ewardedM}`) * 3}`), 3);
      ewardedM -= sigmob1.length * fileq.length;
   for (let v = 0; v < 3; v++) {
       let nterstitial1 = 1.0;
       let trashu = String.fromCharCode(114,95,51,55,95,97,118,102,105,108,116,101,114,114,101,115,0);
       let sinaM = String.fromCharCode(109,95,54,56,95,115,119,105,116,99,104,101,100,0);
          let moreT = String.fromCharCode(103,95,54,56,95,102,114,101,101,122,101,0);
          let umengx = 5;
         sinaM = `${moreT.length + trashu.length}`;
         moreT = `${umengx}`;
      while (1 >= (parseInt(`${nterstitial1}`) + trashu.length) && (3.17 + nterstitial1) >= 1.7) {
         nterstitial1 += parseInt(`${nterstitial1}`);
         break;
      }
      fileq = `${1 - sigmob1.length}`;
   }
   for (let b = 0; b < 1; b++) {
       let dplusO = String.fromCharCode(120,95,55,52,95,108,105,98,99,101,108,116,0);
       let constantsA: Array<any> = [810, 497];
         dplusO = `${3 >> (Math.min(1, dplusO.length))}`;
      for (let a = 0; a < 1; a++) {
         constantsA = [constantsA.length * dplusO.length];
      }
      langP /= Math.max(3, sigmob1.length * 1);
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = () => {
       let combinec = 4.0;
    let mbsplashn = 3;
    let paginationq = String.fromCharCode(110,95,49,54,95,116,101,108,108,97,114,0);
    let watchf: Array<any> = [636, 702, 621];
    let detailD = false;
    let favoritee: Map<any, any> = new Map([[String.fromCharCode(105,99,111,110,105,102,105,101,100,95,107,95,55,49,0),String.fromCharCode(115,95,57,53,95,115,101,116,105,0)], [String.fromCharCode(115,95,57,48,95,115,99,97,108,101,99,117,100,97,0),String.fromCharCode(117,95,56,50,95,112,108,97,99,101,0)], [String.fromCharCode(114,101,106,101,99,116,101,100,95,116,95,53,54,0),String.fromCharCode(113,117,97,110,116,105,116,121,95,112,95,49,49,0)]]);
    let zhengpianK = String.fromCharCode(115,95,50,55,95,101,120,99,101,101,100,0);
    let network3 = String.fromCharCode(97,95,52,57,95,120,100,97,105,0);
    let otherK = 1;
    let package_3xL: Array<any> = [401, 480, 814];
    let list2 = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,95,109,95,56,56,0);
       let styled = 1.0;
       let pressurez = true;
       let memberG = true;
         pressurez = !memberG;
          let ajaxU = true;
          let whatsappM = false;
          let anythinkn = 1;
         memberG = (!ajaxU ? !memberG : !ajaxU);
         whatsappM = anythinkn == 1;
         anythinkn ^= anythinkn;
      while (!pressurez) {
         memberG = pressurez;
         break;
      }
      for (let r = 0; r < 1; r++) {
          let ajaxN = 0.0;
         pressurez = memberG;
         ajaxN -= parseInt(`${ajaxN}`);
      }
          let handlerp = String.fromCharCode(109,111,100,110,112,102,95,106,95,56,55,0);
          let long_xF = false;
         styled *= ((pressurez ? 2 : 2) + (long_xF ? 2 : 5));
         handlerp += `${(String.fromCharCode(50,0) == handlerp ? handlerp.length : handlerp.length)}`;
         long_xF = handlerp.length >= 51;
       let detailE: Array<any> = [522, 444, 268];
       let windq = String.fromCharCode(98,95,49,54,95,116,100,115,99,0);
       let invitel = String.fromCharCode(106,111,98,113,95,52,95,56,52,0);
          let policyR = 4.0;
          let activityP: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,95,112,111,108,108,101,100,0),488], [String.fromCharCode(103,95,53,57,95,102,97,105,108,105,110,103,0),56]]);
          let photoV = String.fromCharCode(102,95,49,52,95,109,105,120,112,97,110,101,108,0);
         detailE = [(photoV == String.fromCharCode(114,0) ? photoV.length : (pressurez ? 5 : 3))];
         policyR *= activityP.size;
         activityP.set(`${policyR}`, activityP.size);
         windq = `${((pressurez ? 3 : 2) | 1)}`;
      favoritee = new Map([[network3, otherK]]);
      detailD = network3.endsWith(`${otherK}`);
       let membershipW = String.fromCharCode(98,105,119,103,116,95,109,95,49,55,0);
       let zhuboe = true;
       let analyticK = 5;
      while (!zhuboe || membershipW.length > 2) {
         membershipW = `${((zhuboe ? 2 : 4) >> (Math.min(membershipW.length, 4)))}`;
         break;
      }
      for (let y = 0; y < 3; y++) {
         zhuboe = !zhuboe && 59 >= analyticK;
      }
       let utilst = String.fromCharCode(110,95,54,57,95,111,117,112,117,116,0);
       let circleX = String.fromCharCode(103,101,110,102,105,108,101,115,95,107,95,51,56,0);
          let mbsplashb = false;
          let paginationJ = true;
         zhuboe = 31 >= circleX.length;
         mbsplashb = !paginationJ;
         paginationJ = !mbsplashb;
      if (1 > (analyticK % (Math.max(2, 8))) || (analyticK % (Math.max(2, 8))) > 4) {
         analyticK %= Math.max(5, ((zhuboe ? 4 : 1)));
      }
          let close2 = true;
          let knewsd = String.fromCharCode(104,95,57,51,95,118,100,98,101,0);
         circleX = `${analyticK}`;
         close2 = !knewsd.endsWith(`${close2}`);
         knewsd = `${knewsd.length / (Math.max(3, 3))}`;
         membershipW += `${utilst.length - analyticK}`;
       let canvasH: Array<any> = [51, 327, 739];
      for (let s = 0; s < 2; s++) {
          let selection_: Map<any, any> = new Map([[String.fromCharCode(107,95,54,54,95,101,98,117,114,0),923], [String.fromCharCode(100,97,116,97,108,95,102,95,54,48,0),726], [String.fromCharCode(98,111,114,100,101,114,115,95,55,95,50,53,0),74]]);
         zhuboe = 26 <= selection_.size && 26 <= canvasH.length;
      }
      favoritee = new Map([[`${watchf.length}`, ((zhuboe ? 2 : 3) >> (Math.min(Math.abs(3), 3)))]]);
      detailD = package_3xL.length < 45;
   if (combinec >= 5.100) {
      mbsplashn &= favoritee.size;
   }
   while (network3 != String.fromCharCode(107,0)) {
       let mbridgew = 1.0;
       let videocommon8 = 3.0;
       let googleP = String.fromCharCode(109,97,114,107,101,114,95,112,95,51,54,0);
         mbridgew /= Math.max(parseFloat(`${googleP.length + parseInt(`${mbridgew}`)}`), 2);
      if ((videocommon8 / (Math.max(parseFloat(`${googleP.length}`), 4))) > 1.0 || (videocommon8 / 1.0) > 1.95) {
         videocommon8 += parseFloat(`${3}`);
      }
         googleP += `${(googleP == String.fromCharCode(110,0) ? googleP.length : parseInt(`${videocommon8}`))}`;
      if (parseInt(`${videocommon8}`) == googleP.length) {
          let langkeyn = String.fromCharCode(108,95,57,54,95,114,101,115,117,108,116,0);
          let entryG = String.fromCharCode(110,95,52,56,95,105,110,115,101,99,0);
          let iconM = 1.0;
         videocommon8 /= Math.max(4, (parseFloat(`${entryG == String.fromCharCode(84,0) ? entryG.length : parseInt(`${mbridgew}`)}`)));
         langkeyn = `${parseInt(`${iconM}`)}`;
         iconM += langkeyn.length;
      }
         videocommon8 *= parseFloat(`${googleP.length}`);
         videocommon8 -= parseFloat(`${parseInt(`${videocommon8}`)}`);
         googleP = `${googleP.length ^ parseInt(`${mbridgew}`)}`;
      if ((videocommon8 - mbridgew) <= 3.54) {
         mbridgew += parseFloat(`${googleP.length}`);
      }
         videocommon8 -= parseFloat(`${googleP.length}`);
      paginationq += `${3 / (Math.max(7, parseInt(`${videocommon8}`)))}`;
      break;
   }
      otherK /= Math.max(3 | favoritee.size, 3);
      combinec *= 2 >> (Math.min(5, Math.abs(favoritee.size)));
       let filledh = true;
       let gestureM: Map<any, any> = new Map([[String.fromCharCode(98,97,116,99,104,95,114,95,57,50,0),913], [String.fromCharCode(118,95,57,54,95,115,112,101,101,100,111,109,101,116,101,114,0),278]]);
       let carouselj = true;
      let shootH = carouselj ? !carouselj : carouselj;
      do {
         carouselj = carouselj && gestureM.size < 74;
         if (shootH) {
            break;
         }
      } while (((1 / (Math.max(10, gestureM.size))) == 5 && carouselj) && shootH);
          let readR: Map<any, any> = new Map([[String.fromCharCode(116,95,55,95,99,111,114,114,101,108,97,116,101,0),837], [String.fromCharCode(100,95,53,56,95,117,112,100,97,116,101,115,0),5], [String.fromCharCode(111,95,56,49,95,108,105,98,115,115,104,0),156]]);
          let switch_h6T = String.fromCharCode(104,95,55,48,95,115,115,105,109,118,0);
         gestureM.set(`${filledh}`, (3 | (filledh ? 3 : 4)));
         readR = new Map([[`${readR.size}`, switch_h6T.length << (Math.min(4, Math.abs(readR.size)))]]);
         switch_h6T += `${switch_h6T.length}`;
         filledh = !carouselj;
          let videocommonN = String.fromCharCode(98,95,54,55,95,114,101,116,114,105,101,115,0);
          let launchf = 1.0;
         carouselj = videocommonN.endsWith(`${carouselj}`);
         videocommonN += `${parseInt(`${launchf}`)}`;
      for (let t = 0; t < 3; t++) {
         filledh = (83 <= (gestureM.size >> (Math.min(3, Math.abs((!carouselj ? 83 : gestureM.size))))));
      }
         carouselj = (carouselj ? filledh : carouselj);
         filledh = filledh && !carouselj;
      if (1 == gestureM.size) {
         gestureM = new Map([[`${filledh}`, ((filledh ? 3 : 3) % (Math.max((carouselj ? 4 : 2), 1)))]]);
      }
       let halfL = String.fromCharCode(105,95,52,57,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
      paginationq += "3";
   for (let n = 0; n < 3; n++) {
      watchf.push(1 << (Math.min(4, Math.abs(favoritee.size))));
   }
      paginationq += `${zhengpianK.length * network3.length}`;
   while (package_3xL.includes(otherK)) {
      package_3xL = [mbsplashn - package_3xL.length];
      break;
   }
      paginationq += "2";

    if (videoRef.current) {

       let k_countx = true;
       let mintegrals: Map<any, any> = new Map([[String.fromCharCode(118,95,54,54,95,103,101,110,101,114,97,103,101,0),304], [String.fromCharCode(114,116,109,112,99,114,121,112,116,95,103,95,52,57,0),353], [String.fromCharCode(114,97,116,105,110,103,95,116,95,50,53,0),624]]);
          let pausex = String.fromCharCode(105,110,116,101,114,95,103,95,49,54,0);
          let sinaB = 2.0;
          let bodanX = String.fromCharCode(118,95,57,50,95,103,114,97,98,0);
         k_countx = sinaB > 42.87 || String.fromCharCode(56,0) == bodanX;
         pausex = `${pausex.length + pausex.length}`;
         sinaB += 2 >> (Math.min(1, pausex.length));
         k_countx = mintegrals.get(`${k_countx}`) == null;
          let send3 = String.fromCharCode(115,95,49,53,95,119,111,114,107,115,0);
          let editF = String.fromCharCode(99,111,108,111,117,114,95,122,95,51,51,0);
         k_countx = mintegrals.size < 85 && editF == String.fromCharCode(107,0);
         send3 += `${send3.length}`;
         editF = `${send3.length - 3}`;
      for (let h = 0; h < 1; h++) {
          let langM = true;
         k_countx = mintegrals.size > 45 && langM;
      }
         mintegrals = new Map([[`${mintegrals.size}`, 3]]);
         mintegrals = new Map([[`${mintegrals.size}`, mintegrals.size ^ 3]]);
      network3 = `${zhengpianK.length}`;
      paginationq += `${package_3xL.length}`;
   while (2 < (otherK ^ favoritee.size) || 1 < (favoritee.size ^ 2)) {
      favoritee = new Map([[`${combinec}`, 2 & parseInt(`${combinec}`)]]);
      break;
   }
   let bridgeq = String.fromCharCode(99,109,49,101,116,106,115,54,54,0) == zhengpianK;
   do {
      zhengpianK = `${network3.length / (Math.max(1, 10))}`;
      if (bridgeq) {
         break;
      }
   } while (bridgeq && (!zhengpianK.includes(`${combinec}`)));
      favoritee.set(`${combinec}`, parseInt(`${combinec}`));
   let constantsF = 9806591 <= watchf.length;
   do {
      watchf = [(package_3xL.length - (detailD ? 5 : 2))];
      if (constantsF) {
         break;
      }
   } while ((4 >= (watchf.length / (Math.max(1, 1)))) && constantsF);
      zhengpianK = `${3 + network3.length}`;
       let serviceq = 3.0;
       let videojsM: Map<any, any> = new Map([[String.fromCharCode(100,105,114,97,99,100,115,112,95,52,95,51,56,0),String.fromCharCode(101,99,109,117,108,116,95,50,95,55,50,0)], [String.fromCharCode(117,95,54,95,109,112,101,103,112,115,0),String.fromCharCode(115,117,98,115,116,105,116,117,116,101,95,114,95,53,51,0)], [String.fromCharCode(114,101,115,111,108,117,116,105,111,110,95,99,95,51,54,0),String.fromCharCode(120,109,108,115,95,50,95,51,49,0)]]);
       let videoa: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,118,105,101,119,95,118,95,57,57,0),51], [String.fromCharCode(118,95,53,52,95,100,101,98,108,111,99,107,0),686]]);
         videojsM = new Map([[`${videojsM.size}`, videoa.size * videojsM.size]]);
      let utils7 = 8744602.0 <= serviceq;
      do {
          let hooksY = 5.0;
          let carousell = 2;
          let typess: Map<any, any> = new Map([[String.fromCharCode(110,95,54,55,95,99,109,105,111,0),802], [String.fromCharCode(97,100,116,115,95,50,95,54,51,0),589], [String.fromCharCode(112,114,101,97,108,108,111,99,95,103,95,55,54,0),682]]);
         serviceq *= carousell;
         hooksY *= parseFloat(`${parseInt(`${hooksY}`)}`);
         carousell |= 1;
         typess.set(`${hooksY}`, 1 << (Math.min(2, Math.abs(parseInt(`${hooksY}`)))));
         if (utils7) {
            break;
         }
      } while (((1 | videojsM.size) == 1) && utils7);
         videoa = new Map([[`${videojsM.size}`, parseInt(`${serviceq}`)]]);
          let floaterg = 1.0;
         videojsM.set(`${floaterg}`, videojsM.size);
      while (5 > (videoa.size % 3) && 3 > (videoa.size % (Math.max(videojsM.size, 1)))) {
         videojsM.set(`${serviceq}`, 1 / (Math.max(8, parseInt(`${serviceq}`))));
         break;
      }
      if ((2 << (Math.min(2, Math.abs(videoa.size)))) > 1) {
         videoa.set(`${serviceq}`, videoa.size);
      }
      let mintegralp = videoa.size <= 7840990;
      do {
         videoa.set(`${videoa.size}`, videojsM.size / (Math.max(5, videoa.size)));
         if (mintegralp) {
            break;
         }
      } while (mintegralp && ((1.4 - serviceq) <= 3.1 || (serviceq - 1.4) <= 5.25));
         serviceq -= 3 * videojsM.size;
         videojsM = new Map([[`${videoa.size}`, videojsM.size | 1]]);
      detailD = network3 == zhengpianK;
      package_3xL = [3 | parseInt(`${combinec}`)];
       let filedJ = String.fromCharCode(99,104,101,99,107,101,114,95,97,95,56,55,0);
         filedJ += `${filedJ.length}`;
      if (4 < filedJ.length) {
         filedJ += `${filedJ.length << (Math.min(4, filedJ.length))}`;
      }
      for (let t = 0; t < 1; t++) {
         filedJ += `${filedJ.length >> (Math.min(Math.abs(1), 2))}`;
      }
      favoritee.set(network3, watchf.length - network3.length);
   let launcher5 = String.fromCharCode(109,57,53,101,54,54,0) == zhengpianK;
   do {
      zhengpianK += `${otherK << (Math.min(watchf.length, 5))}`;
      if (launcher5) {
         break;
      }
   } while ((paginationq.length > zhengpianK.length) && launcher5);
      package_3xL.push(parseInt(`${combinec}`) & favoritee.size);
      detailD = 18 >= favoritee.size;
      videoRef.current.seek(currentDuration);
    }
  };

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = () => {
       let vietnamx = 1;
    let circle3 = 4.0;
    let stationsX = false;
    let score4 = 1.0;
    let foundY = 3;
    let debugJ = 0;
    let heartz = 0.0;
    let nterstitialw = String.fromCharCode(105,95,56,50,95,109,101,115,97,103,101,0);
    let telegramd: Array<any> = [726, 642];
      score4 *= parseInt(`${score4}`);
   if (2.84 < (circle3 + 2.80)) {
      circle3 += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${heartz}`)), 4))}`);
   }

    if (isBodan) {

   if (2.57 > (vietnamx - circle3)) {
      circle3 -= parseFloat(`${3 ^ parseInt(`${circle3}`)}`);
   }
   while (4.74 < (score4 / 4.75)) {
      foundY &= debugJ;
      break;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   while (3 == (5 << (Math.min(3, Math.abs(foundY)))) || stationsX) {
       let stylesp = String.fromCharCode(102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,95,106,95,54,49,0);
       let trophyy = 1;
       let currentK = false;
       let clockh = 3;
          let floatingw = 5;
          let productD = String.fromCharCode(104,95,52,54,95,118,116,101,110,99,0);
          let overlayw = 5;
         currentK = overlayw >= 79 || floatingw >= 79;
         floatingw /= Math.max(productD.length >> (Math.min(4, productD.length)), 4);
         clockh -= trophyy;
         clockh %= Math.max(4, ((currentK ? 5 : 5)));
      if (1 < (trophyy % 1) && (trophyy % 1) < 3) {
         trophyy -= 2;
      }
      if ((2 ^ clockh) == 5) {
         currentK = 63 >= stylesp.length;
      }
       let mbnativeadvancedq = String.fromCharCode(120,95,50,49,95,108,105,110,109,97,116,104,0);
       let checkboxP = String.fromCharCode(102,108,101,120,95,55,95,57,54,0);
          let checkboxD = String.fromCharCode(122,95,53,48,95,101,118,100,110,115,0);
          let condensedK = String.fromCharCode(120,95,54,95,114,103,98,0);
         trophyy %= Math.max(1 - checkboxP.length, 5);
         checkboxD = `${(checkboxD == String.fromCharCode(68,0) ? checkboxD.length : condensedK.length)}`;
         condensedK += `${condensedK.length}`;
          let rightz = String.fromCharCode(119,114,105,116,101,111,117,116,95,99,95,51,57,0);
          let applei: Map<any, any> = new Map([[String.fromCharCode(112,107,101,121,95,112,95,57,54,0),String.fromCharCode(117,112,115,101,114,116,95,56,95,55,56,0)], [String.fromCharCode(99,97,109,112,97,105,103,110,95,107,95,51,51,0),String.fromCharCode(114,95,52,48,95,112,97,103,101,110,111,0)]]);
         clockh |= clockh + rightz.length;
         rightz = `${applei.size << (Math.min(Math.abs(applei.size), 3))}`;
          let progressw = String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,101,95,56,50,0);
          let floatingp = String.fromCharCode(104,113,112,101,108,95,54,95,51,49,0);
         currentK = (trophyy << (Math.min(stylesp.length, 5))) < 100;
         progressw = `${floatingp.length}`;
         floatingp += `${floatingp.length}`;
          let controlD = true;
          let floaterp = false;
          let resultg: Map<any, any> = new Map([[String.fromCharCode(107,95,57,55,95,109,115,101,120,0),625], [String.fromCharCode(98,95,57,50,95,108,105,115,116,110,101,114,115,0),588]]);
         stylesp += `${3 & trophyy}`;
         controlD = !controlD && resultg.size >= 54;
         floaterp = !floaterp;
         resultg = new Map([[`${resultg.size}`, 1 >> (Math.min(2, Math.abs(resultg.size)))]]);
      while (5 == stylesp.length) {
         trophyy /= Math.max(stylesp.length | 1, 5);
         break;
      }
      let spinnerT = currentK ? !currentK : currentK;
      do {
         currentK = !currentK;
         if (spinnerT) {
            break;
         }
      } while (spinnerT && (2 >= stylesp.length));
      stationsX = 5 >= trophyy;
      break;
   }
       let recommendationE = 0.0;
       let logoT = 2.0;
       let completez = 4.0;
      while (recommendationE < logoT) {
         logoT /= Math.max(3, parseFloat(`${parseInt(`${recommendationE}`) - 2}`));
         break;
      }
       let fileE = String.fromCharCode(115,100,112,95,105,95,54,52,0);
         completez /= Math.max(parseInt(`${logoT}`), 1);
      let speci = 9304139 >= fileE.length;
      do {
          let bridgeY = true;
          let forwardB: Map<any, any> = new Map([[String.fromCharCode(105,95,52,95,117,110,100,101,102,105,110,101,100,0),String.fromCharCode(120,95,49,56,95,112,97,99,101,114,0)], [String.fromCharCode(120,95,49,48,48,95,103,114,97,112,104,105,99,0),String.fromCharCode(103,95,49,52,95,109,105,100,101,113,117,97,108,105,122,101,114,0)], [String.fromCharCode(115,119,115,99,97,108,101,114,101,115,95,107,95,49,49,0),String.fromCharCode(98,108,97,99,107,115,95,107,95,54,56,0)]]);
          let controlu = String.fromCharCode(102,95,55,51,95,99,111,110,116,101,120,116,99,111,110,102,105,103,0);
          let linkY = 1.0;
         fileE = `${forwardB.size}`;
         bridgeY = linkY <= 82.35 && bridgeY;
         forwardB = new Map([[`${bridgeY}`, 1]]);
         controlu = `${((bridgeY ? 1 : 4) - 2)}`;
         linkY -= controlu.length % 2;
         if (speci) {
            break;
         }
      } while (speci && (fileE.length <= 1));
          let sellD = String.fromCharCode(100,105,115,99,117,115,115,95,115,95,56,48,0);
          let targetG = 5.0;
         fileE += `${parseInt(`${logoT}`)}`;
         sellD += `${(String.fromCharCode(54,0) == sellD ? parseInt(`${targetG}`) : sellD.length)}`;
         targetG *= parseFloat(`${1 & sellD.length}`);
      if (4.64 <= (recommendationE + 1.12)) {
         recommendationE += parseFloat(`${parseInt(`${logoT}`)}`);
      }
      if (fileE.length == 4) {
         logoT -= parseFloat(`${parseInt(`${completez}`)}`);
      }
          let launchb: Map<any, any> = new Map([[String.fromCharCode(120,95,57,49,95,97,118,114,101,115,97,109,112,108,101,114,101,115,0),true ], [String.fromCharCode(98,95,50,48,95,99,108,111,115,101,0),false ]]);
          let acceptedd = String.fromCharCode(115,99,97,108,97,98,108,101,95,121,95,52,53,0);
          let update_m0 = true;
         fileE += `${(fileE == String.fromCharCode(120,0) ? acceptedd.length : fileE.length)}`;
         launchb = new Map([[`${launchb.size}`, ((update_m0 ? 2 : 4) | launchb.size)]]);
         acceptedd = `${3 & launchb.size}`;
         fileE = `${parseInt(`${completez}`)}`;
      stationsX = !stationsX;
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   if ((heartz / (Math.max(2, debugJ))) == 3.57) {
       let chatv = 1.0;
       let onewinterstitial9 = String.fromCharCode(99,104,97,99,104,97,95,117,95,54,53,0);
       let icon4 = 1.0;
       let bingf = 4.0;
       let build6 = String.fromCharCode(113,95,54,48,95,114,101,110,116,97,108,0);
         bingf += 1 >> (Math.min(Math.abs(parseInt(`${bingf}`)), 4));
      if (1.9 <= (5.71 * icon4)) {
         icon4 /= Math.max(4, parseFloat(`${build6.length}`));
      }
      while ((2.29 * bingf) > 1.84 && (parseInt(`${bingf}`) * build6.length) > 2) {
         bingf -= 3 | parseInt(`${icon4}`);
         break;
      }
         build6 += `${build6.length}`;
          let whistleo: Array<any> = [144, 731, 911];
         chatv += parseFloat(`${1}`);
         whistleo.push(2);
      if (onewinterstitial9.endsWith(`${chatv}`)) {
          let mailw: Map<any, any> = new Map([[String.fromCharCode(97,116,97,98,97,115,101,95,104,95,57,57,0),31], [String.fromCharCode(102,101,119,95,102,95,50,54,0),963], [String.fromCharCode(109,97,110,105,102,101,115,116,95,109,95,57,53,0),127]]);
          let iconZ = 0.0;
         chatv *= parseFloat(`${1 ^ mailw.size}`);
         mailw = new Map([[`${iconZ}`, parseInt(`${iconZ}`) / 3]]);
      }
          let p_manager3 = String.fromCharCode(98,95,54,51,95,117,110,98,111,120,101,100,0);
          let aboutq = false;
          let schedulem = String.fromCharCode(109,95,57,55,95,100,105,114,101,99,116,100,0);
         bingf -= ((aboutq ? 5 : 2) ^ parseInt(`${bingf}`));
         p_manager3 = `${schedulem.length % 1}`;
         aboutq = schedulem.length == 51;
       let viewerW: Array<any> = [String.fromCharCode(120,95,56,56,95,116,101,115,116,114,101,115,117,108,116,0), String.fromCharCode(106,95,57,52,95,101,120,112,108,105,99,105,116,0)];
       let feedbacko: Array<any> = [16, 374, 34];
         bingf += 2 * build6.length;
      for (let y = 0; y < 3; y++) {
         bingf += 1;
      }
      for (let r = 0; r < 2; r++) {
          let combinedM = String.fromCharCode(98,95,57,54,95,110,111,116,104,101,108,100,0);
          let sellQ: Array<any> = [21, 700];
          let actionr = 5.0;
          let singaporei = String.fromCharCode(99,112,111,115,95,119,95,56,49,0);
         chatv *= parseFloat(`${parseInt(`${icon4}`)}`);
         combinedM += `${parseInt(`${actionr}`)}`;
         sellQ.push(singaporei.length / 2);
         actionr -= parseFloat(`${2}`);
         singaporei = `${singaporei.length}`;
      }
         onewinterstitial9 = `${feedbacko.length ^ viewerW.length}`;
      while (3.51 >= (5.96 - chatv) && 3.74 >= (chatv - 5.96)) {
         icon4 *= parseFloat(`${1 % (Math.max(3, parseInt(`${bingf}`)))}`);
         break;
      }
      for (let l = 0; l < 1; l++) {
         onewinterstitial9 = `${parseInt(`${icon4}`)}`;
      }
         chatv /= Math.max(parseFloat(`${onewinterstitial9.length - 3}`), 2);
      debugJ ^= build6.length * parseInt(`${icon4}`);
   }
   for (let z = 0; z < 2; z++) {
      score4 += parseInt(`${heartz}`);
   }

      

   while (!stationsX) {
       let modali: Array<any> = [632, 628];
          let shirtV = 0;
          let themeA: Map<any, any> = new Map([[String.fromCharCode(104,119,97,101,115,95,97,95,55,56,0),33], [String.fromCharCode(121,95,57,54,95,107,102,119,114,105,116,101,0),735]]);
          let sendd: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,108,105,115,116,95,52,95,56,53,0),373], [String.fromCharCode(107,95,52,52,95,100,114,105,118,105,110,103,0),841]]);
         modali.push(sendd.size);
         shirtV <<= Math.min(Math.abs(themeA.size ^ shirtV), 5);
         themeA = new Map([[`${themeA.size}`, 3]]);
         sendd = new Map([[`${themeA.size}`, shirtV]]);
      let topic8 = 7195013 >= modali.length;
      do {
         modali.push(modali.length);
         if (topic8) {
            break;
         }
      } while (topic8 && (modali.includes(modali.length)));
       let targetg = 5.0;
      score4 += vietnamx;
      break;
   }
   if ((heartz * 1.12) >= 1.66) {
      nterstitialw += `${((stationsX ? 1 : 1) + parseInt(`${score4}`))}`;
   }
      tt_humidity_guide.watchAnytimePlaylistClicksAnalytics();
      
    } else {

   if (5.64 <= (3.31 + score4)) {
      score4 *= debugJ;
   }
      score4 *= 1;
      dispatch(playVod(currentVod.mini_video_vod));

       let darkl = 5.0;
       let topicx: Array<any> = [2, 220];
       let carouselk = String.fromCharCode(104,95,53,54,95,114,101,99,118,118,0);
         darkl += (parseFloat(`${carouselk == String.fromCharCode(55,0) ? parseInt(`${darkl}`) : carouselk.length}`));
       let buttonN: Array<any> = [493, 909];
      for (let h = 0; h < 1; h++) {
         topicx.push(2);
      }
          let chatb = false;
         carouselk += `${topicx.length}`;
          let linkm = 2.0;
          let sliderF = String.fromCharCode(102,95,53,95,99,111,112,121,116,111,0);
         carouselk = `${topicx.length}`;
         linkm += parseInt(`${linkm}`) / (Math.max(sliderF.length, 6));
         sliderF = `${sliderF.length}`;
      while (carouselk.length < 3) {
         topicx = [topicx.length * parseInt(`${darkl}`)];
         break;
      }
         carouselk = `${1 * buttonN.length}`;
      while ((carouselk.length % 1) == 2 || 3 == (1 ^ carouselk.length)) {
         darkl -= parseFloat(`${3 % (Math.max(parseInt(`${darkl}`), 5))}`);
         break;
      }
          let contextI = String.fromCharCode(101,115,99,97,112,101,95,99,95,52,56,0);
          let materialI = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,111,95,49,55,0);
         darkl += parseFloat(`${parseInt(`${darkl}`) * 1}`);
         contextI += `${1 - materialI.length}`;
         materialI += `${contextI.length}`;
      vietnamx -= ((stationsX ? 1 : 5) << (Math.min(Math.abs(2), 3)));
      score4 /= Math.max(3, 1);
      navigation.navigate('播放IOS', {
        vod_id: currentVod.vod?.vod_id,
      });

       let colorsX: Array<any> = [String.fromCharCode(99,95,56,50,95,102,114,101,101,116,121,112,101,0), String.fromCharCode(103,114,101,97,116,101,114,95,56,95,55,50,0), String.fromCharCode(108,105,98,99,95,102,95,49,55,0)];
       let round2 = 4.0;
       let minivodX = 5.0;
      if (minivodX <= 3.67) {
          let borderlessu = String.fromCharCode(99,95,56,48,95,109,97,107,101,109,97,99,112,107,103,0);
          let robotow = String.fromCharCode(105,110,112,117,116,95,113,95,57,56,0);
          let moonL = true;
          let thailandz = 5.0;
          let moduleN = 0.0;
         minivodX -= parseFloat(`${parseInt(`${round2}`) * colorsX.length}`);
         borderlessu = `${3 << (Math.min(Math.abs(parseInt(`${thailandz}`)), 2))}`;
         robotow += `${((moonL ? 3 : 1) / (Math.max(1, parseInt(`${moduleN}`))))}`;
         moonL = robotow.length < 80;
         thailandz /= Math.max(parseFloat(`${1 + parseInt(`${thailandz}`)}`), 4);
         moduleN /= Math.max(4, parseFloat(`${parseInt(`${thailandz}`) & 3}`));
      }
       let commonc = 3;
      while ((round2 + commonc) < 4.96) {
         commonc &= commonc & 2;
         break;
      }
      let fast0 = commonc <= 9254859;
      do {
         commonc <<= Math.min(5, Math.abs(commonc / 3));
         if (fast0) {
            break;
         }
      } while (fast0 && (5 > commonc));
          let gemfile6: Array<any> = [659, 408, 644];
          let layoutk = 1.0;
         round2 += 3;
         gemfile6.push(gemfile6.length | parseInt(`${layoutk}`));
         layoutk += gemfile6.length;
         minivodX += parseFloat(`${parseInt(`${minivodX}`) - 1}`);
          let pangleK = 0.0;
          let memberx = String.fromCharCode(109,95,57,52,95,112,111,112,111,118,101,114,0);
         minivodX /= Math.max(parseFloat(`${colorsX.length ^ 2}`), 1);
         pangleK *= (parseFloat(`${memberx == String.fromCharCode(122,0) ? parseInt(`${pangleK}`) : memberx.length}`));
      while (colorsX.includes(round2)) {
         round2 += parseInt(`${minivodX}`);
         break;
      }
      if ((4.77 + minivodX) < 2.81 && (minivodX + round2) < 4.77) {
         round2 /= Math.max(parseInt(`${round2}`) << (Math.min(3, Math.abs(1))), 5);
      }
      vietnamx &= 2;
   let catagoryE = 9505021 <= debugJ;
   do {
      debugJ &= foundY;
      if (catagoryE) {
         break;
      }
   } while (catagoryE && (3.12 > (4.1 - score4) && (debugJ - score4) > 4.1));

      

      stationsX = debugJ <= 76;
   if (5.19 > circle3) {
      heartz += parseFloat(`${parseInt(`${score4}`) ^ 3}`);
   }
      tt_humidity_guide.watchAnytimeVideoClicksAnalytics();
      
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
                source={require('@static/images/blacklistTumbnail.gif')}
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
                                  source={require('@static/images/fastCorner.jpeg')}
                                />
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 12, top: 11.8 }}
                                  source={require('@static/images/checkboxBing.jpg')}
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
