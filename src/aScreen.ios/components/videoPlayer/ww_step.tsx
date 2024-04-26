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
import PlayIcon from '@static/images/eighteenGpayFootballfiledlayout.svg';
import PauseIcon from '@static/images/dialogSecurityChat.svg';
import PlayZhengPianIcon from '@static/images/nterstitialModuleApps.svg';
import PlayBoDanIcon from '@static/images/holderLiveendmodallogo.svg';

import FastImage from '../common/ww_result';
import { Slider } from '@rneui/themed';
import { useAppDispatch } from '@hooks/ww_catagory_neon';
import { useNavigation, useTheme } from '@react-navigation/native';
import { playVod, viewPlaylistDetails } from '@redux/actions/ww_floater';
import HejiIcon from '@static/images/playlistFiledRegeng.svg';
import ExpandUpIcon from '@static/images/nativeexTeamdetailsbgRncore.svg';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import ww_runtime from '../../../../Umeng/ww_runtime';

interface wwIndexDice {
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
}: wwIndexDice) {
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
       let libpangleflippedq = 3.0;
    let vignettes = 4.0;
    let expandP = String.fromCharCode(114,95,50,50,95,111,99,116,101,116,115,0);
    let traminih: Array<any> = [424, 402, 190];
    let clearc = String.fromCharCode(118,95,53,48,95,114,105,99,101,0);
    let statistics3 = String.fromCharCode(117,116,116,101,114,97,110,99,101,95,112,95,55,55,0);
    let catagoryg = 3;
    let sounda: Map<any, any> = new Map([[String.fromCharCode(110,95,50,57,95,110,100,111,116,115,0),503], [String.fromCharCode(114,95,50,51,95,97,114,99,104,101,116,121,112,101,0),758], [String.fromCharCode(121,95,53,53,95,100,101,106,117,100,100,101,114,0),257]]);
    let release_rwq = true;
    let iconplay7: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,112,103,115,122,0),584], [String.fromCharCode(98,95,57,57,95,99,119,110,100,0),698]]);
    let iconplayf = String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,53,95,52,55,0);
    let resendA = 0.0;
    let gesturesb = 3.0;
    let greyp: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,115,95,105,95,49,49,0),266], [String.fromCharCode(116,95,56,48,95,97,100,97,112,116,0),779], [String.fromCharCode(114,95,50,51,95,115,101,114,105,97,108,110,111,0),577]]);
      expandP = `${1 << (Math.min(1, Math.abs(parseInt(`${libpangleflippedq}`))))}`;
   if (sounda.size == 4) {
      release_rwq = 14.16 < vignettes || 36 < iconplay7.size;
   }
      expandP += `${statistics3.length}`;
   while ((5 >> (Math.min(3, expandP.length))) > 1 && 2 > (5 & expandP.length)) {
      libpangleflippedq += 1;
      break;
   }
   while (expandP.startsWith(`${traminih.length}`)) {
       let shirtE = true;
       let teamO = String.fromCharCode(119,101,105,103,104,116,101,100,95,56,95,53,55,0);
       let iconscheduleV: Array<any> = [142, 830];
       let backiconN = 3.0;
      while (!teamO.startsWith(`${shirtE}`)) {
         teamO = `${teamO.length}`;
         break;
      }
         teamO = `${(teamO == String.fromCharCode(48,0) ? teamO.length : iconscheduleV.length)}`;
      if (!shirtE) {
         shirtE = !shirtE && 83.44 > backiconN;
      }
      let nalyticsc = 9815892 >= teamO.length;
      do {
         teamO = `${teamO.length * iconscheduleV.length}`;
         if (nalyticsc) {
            break;
         }
      } while (nalyticsc && ((parseInt(`${backiconN}`) + teamO.length) <= 2));
      if (teamO.length < parseInt(`${backiconN}`)) {
         teamO += `${((shirtE ? 5 : 5))}`;
      }
      let codegen2 = backiconN <= 9853224.0;
      do {
          let libhermesL: Map<any, any> = new Map([[String.fromCharCode(109,95,53,52,95,118,97,114,120,104,0),166], [String.fromCharCode(97,115,115,101,109,98,108,101,95,109,95,57,52,0),391], [String.fromCharCode(115,97,109,112,108,101,99,112,121,95,56,95,54,54,0),127]]);
          let halffieldimagel = String.fromCharCode(112,114,111,103,114,97,109,95,52,95,56,53,0);
         backiconN -= parseFloat(`${parseInt(`${backiconN}`) - 2}`);
         libhermesL.set(halffieldimagel, 1);
         halffieldimagel += `${libhermesL.size / 3}`;
         if (codegen2) {
            break;
         }
      } while (((1.24 - backiconN) == 4.32) && codegen2);
          let unewsb = String.fromCharCode(103,95,51,51,95,118,97,97,99,97,108,99,117,108,97,116,105,111,110,0);
          let sellI = String.fromCharCode(108,105,98,115,115,104,95,54,95,57,56,0);
          let combinedn = String.fromCharCode(117,110,99,111,100,101,100,95,49,95,54,49,0);
         shirtE = (parseFloat(`${iconscheduleV.length}`) + backiconN) <= 38.18;
         unewsb += `${unewsb.length / (Math.max(3, combinedn.length))}`;
         sellI += `${unewsb.length >> (Math.min(5, sellI.length))}`;
         combinedn = `${unewsb.length}`;
          let circlen = String.fromCharCode(111,112,117,115,102,105,108,101,95,56,95,56,48,0);
          let rewindn = String.fromCharCode(110,105,108,95,113,95,52,49,0);
          let friends7 = 1.0;
         shirtE = (parseInt(`${backiconN}`) - iconscheduleV.length) > 77;
         circlen = `${circlen.length}`;
         rewindn += `${(rewindn == String.fromCharCode(87,0) ? parseInt(`${friends7}`) : rewindn.length)}`;
         friends7 /= Math.max(3, 2);
          let whiteX = false;
          let iconbackwhiteM = String.fromCharCode(98,95,57,51,95,101,120,112,108,97,105,110,0);
         backiconN -= parseFloat(`${3}`);
         whiteX = (93 > (iconbackwhiteM.length | (whiteX ? iconbackwhiteM.length : 93)));
      while (teamO.length > 4) {
          let stringu = true;
          let temperatureQ = 1.0;
          let bridgeh: Map<any, any> = new Map([[String.fromCharCode(109,95,53,54,95,117,115,97,98,108,101,0),759], [String.fromCharCode(118,95,49,57,95,117,97,110,0),63]]);
          let telegramQ = String.fromCharCode(103,119,101,105,95,49,95,53,56,0);
          let footballfieldj = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,95,120,95,55,50,0);
         teamO += `${teamO.length ^ 2}`;
         stringu = stringu || footballfieldj.length == 94;
         temperatureQ += bridgeh.size << (Math.min(Math.abs(3), 1));
         bridgeh = new Map([[`${bridgeh.size}`, 2]]);
         telegramQ = `${parseInt(`${temperatureQ}`) << (Math.min(Math.abs(1), 4))}`;
         footballfieldj += `${(footballfieldj == String.fromCharCode(83,0) ? footballfieldj.length : bridgeh.size)}`;
         break;
      }
         backiconN *= parseFloat(`${2}`);
         backiconN /= Math.max(1, parseFloat(`${1 * teamO.length}`));
      traminih = [teamO.length << (Math.min(clearc.length, 3))];
      break;
   }
      expandP += `${clearc.length * iconplay7.size}`;
   if (expandP.length == 3) {
      statistics3 += `${((release_rwq ? 4 : 2) >> (Math.min(clearc.length, 4)))}`;
   }
      release_rwq = clearc == String.fromCharCode(52,0) && 88 <= sounda.size;
   if (!clearc.endsWith(`${vignettes}`)) {
       let statisticsB = String.fromCharCode(116,95,49,50,95,115,101,109,97,112,104,111,114,101,0);
       let whistleorangeV = 1.0;
       let buttonX = 3.0;
      for (let b = 0; b < 2; b++) {
         statisticsB = `${1 ^ statisticsB.length}`;
      }
      clearc += "2";
   }
      clearc = `${parseInt(`${vignettes}`) << (Math.min(3, Math.abs(2)))}`;
      traminih.push((String.fromCharCode(79,0) == expandP ? expandP.length : iconplay7.size));
   let xvodv = 9083283.0 <= libpangleflippedq;
   do {
      libpangleflippedq += iconplay7.size;
      if (xvodv) {
         break;
      }
   } while ((5.73 <= (5.62 + libpangleflippedq)) && xvodv);
   let mailu = 8997772 <= clearc.length;
   do {
      clearc += `${statistics3.length - sounda.size}`;
      if (mailu) {
         break;
      }
   } while (mailu && (statistics3 == String.fromCharCode(70,0)));
      iconplay7.set(clearc, statistics3.length);
      vignettes += (statistics3 == String.fromCharCode(111,0) ? statistics3.length : iconplay7.size);
      release_rwq = clearc.length > 82;
   for (let c = 0; c < 3; c++) {
      expandP = `${1 | statistics3.length}`;
   }
      expandP = `${catagoryg}`;
      catagoryg /= Math.max(3 % (Math.max(9, parseInt(`${vignettes}`))), 4);
   if (statistics3.length >= 4) {
       let cancelJ = 4.0;
       let taiwanJ = String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,97,95,56,49,0);
       let fieldJ = String.fromCharCode(100,105,114,101,99,116,100,95,102,95,54,51,0);
       let privacyx: Array<any> = [550, 153];
       let footballfielda = 0;
          let mappingW: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,103,114,97,99,101,0),80], [String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,116,95,57,55,0),740]]);
         taiwanJ = `${(String.fromCharCode(49,0) == fieldJ ? taiwanJ.length : fieldJ.length)}`;
         mappingW.set(`${mappingW.size}`, 3 | mappingW.size);
      while ((footballfielda >> (Math.min(fieldJ.length, 4))) == 1) {
         footballfielda /= Math.max(taiwanJ.length ^ 1, 3);
         break;
      }
      for (let u = 0; u < 2; u++) {
         fieldJ = `${2 >> (Math.min(2, taiwanJ.length))}`;
      }
         taiwanJ = `${fieldJ.length}`;
      while (footballfielda >= 1) {
         taiwanJ += `${footballfielda}`;
         break;
      }
       let tooltipsV = 3.0;
      if (tooltipsV < footballfielda) {
         footballfielda %= Math.max(2, (String.fromCharCode(116,0) == taiwanJ ? parseInt(`${cancelJ}`) : taiwanJ.length));
      }
       let componentsb: Array<any> = [String.fromCharCode(97,99,118,112,95,56,95,49,57,0), String.fromCharCode(97,95,55,51,95,105,109,112,0), String.fromCharCode(118,112,100,120,95,107,95,51,48,0)];
      if (taiwanJ.endsWith(`${footballfielda}`)) {
         footballfielda &= footballfielda;
      }
          let k_manager5 = 3.0;
         taiwanJ += `${footballfielda}`;
         k_manager5 *= parseInt(`${k_manager5}`);
         privacyx = [parseInt(`${tooltipsV}`) & 3];
       let p_managerb = String.fromCharCode(122,95,52,53,95,102,111,114,98,105,100,100,101,110,0);
       let interstitialk = String.fromCharCode(97,97,117,100,105,111,95,112,95,55,53,0);
      while (2 >= privacyx.length) {
          let libjsijniprofilerP: Map<any, any> = new Map([[String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,100,95,48,0),String.fromCharCode(115,105,122,101,98,105,116,114,97,116,101,95,117,95,49,52,0)], [String.fromCharCode(107,101,121,101,100,95,108,95,55,48,0),String.fromCharCode(98,95,55,54,95,116,120,102,109,0)]]);
         privacyx = [(String.fromCharCode(118,0) == fieldJ ? fieldJ.length : componentsb.length)];
         libjsijniprofilerP = new Map([[`${libjsijniprofilerP.size}`, libjsijniprofilerP.size]]);
         break;
      }
      while (!fieldJ.endsWith(`${p_managerb.length}`)) {
          let release_6_5: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,115,95,114,95,52,51,0),true ], [String.fromCharCode(107,95,50,95,116,119,105,100,100,108,101,115,0),true ], [String.fromCharCode(106,95,56,51,0),true ]]);
          let filledb = String.fromCharCode(117,95,57,48,95,99,111,110,116,97,105,110,97,98,108,101,0);
          let combineN = String.fromCharCode(98,95,49,51,95,115,116,114,115,101,112,0);
          let telemetryW = String.fromCharCode(122,95,55,53,95,109,97,112,115,0);
          let videoP: Map<any, any> = new Map([[String.fromCharCode(101,118,101,114,121,95,108,95,50,52,0),451], [String.fromCharCode(118,99,111,100,101,99,95,106,95,52,53,0),48], [String.fromCharCode(106,95,54,52,95,114,101,99,111,103,110,105,122,101,114,115,0),888]]);
         p_managerb += `${taiwanJ.length}`;
         release_6_5.set(telemetryW, telemetryW.length);
         filledb = `${combineN.length}`;
         combineN = "3";
         videoP.set(`${combineN}`, combineN.length / 2);
         break;
      }
         p_managerb = `${p_managerb.length}`;
      expandP += "2";
   }
   let mbjscommona = String.fromCharCode(98,112,119,120,95,53,0) == statistics3;
   do {
      statistics3 += `${3 * parseInt(`${libpangleflippedq}`)}`;
      if (mbjscommona) {
         break;
      }
   } while (((statistics3.length + parseInt(`${vignettes}`)) < 3 && (vignettes + 2.0) < 2.56) && mbjscommona);
      release_rwq = libpangleflippedq == clearc.length;

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
       let trashB = String.fromCharCode(116,111,98,105,116,95,50,95,49,48,0);
    let livenodatabgimgG = String.fromCharCode(99,111,109,112,97,115,115,95,54,95,49,51,0);
    let launchO: Array<any> = [String.fromCharCode(111,95,50,95,122,101,114,111,98,108,111,98,0), String.fromCharCode(100,111,119,110,108,105,110,107,95,48,95,54,52,0), String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,103,95,52,52,0)];
    let disconnectedlogo8 = 5.0;
    let selectedW = 2;
    let minimizeG = 0.0;
    let weathera: Map<any, any> = new Map([[String.fromCharCode(102,95,52,50,95,114,101,111,115,0),String.fromCharCode(112,114,111,118,105,100,101,115,95,107,95,55,50,0)], [String.fromCharCode(118,95,51,48,95,109,97,116,101,114,105,97,108,0),String.fromCharCode(107,101,109,112,102,95,107,95,53,55,0)]]);
    let rncoreM: Map<any, any> = new Map([[String.fromCharCode(110,95,54,50,95,98,119,114,105,116,101,0),false ], [String.fromCharCode(97,104,101,97,100,95,111,95,57,49,0),false ]]);
    let v_centerD = true;
    let directO: Map<any, any> = new Map([[String.fromCharCode(100,95,49,57,95,120,117,116,105,108,0),true ], [String.fromCharCode(105,115,110,111,110,122,101,114,111,95,122,95,49,54,0),true ]]);
    let mergerp: Map<any, any> = new Map([[String.fromCharCode(98,95,51,95,99,101,110,116,101,114,105,110,103,0),String.fromCharCode(116,121,112,101,100,101,102,115,95,111,95,49,50,0)], [String.fromCharCode(111,112,117,115,101,110,99,95,121,95,52,53,0),String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,110,95,54,51,0)], [String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,55,95,49,50,0),String.fromCharCode(100,111,108,98,121,95,117,95,55,55,0)]]);
    let memberz = 5.0;
    let androidT: Map<any, any> = new Map([[String.fromCharCode(110,95,57,53,95,103,117,97,114,97,110,116,101,101,115,0),889], [String.fromCharCode(115,108,111,112,101,95,120,95,57,53,0),97]]);
    let yellowvideolive5 = 1.0;
    let reducerc: Map<any, any> = new Map([[String.fromCharCode(110,111,110,98,95,53,95,50,53,0),String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,119,95,51,53,0)], [String.fromCharCode(120,95,54,53,95,116,97,98,108,101,112,114,105,110,116,0),String.fromCharCode(106,95,52,52,95,105,110,110,100,101,114,0)]]);
    let playN = String.fromCharCode(114,97,110,115,112,111,114,116,95,114,95,52,51,0);
      minimizeG *= 3;
   for (let c = 0; c < 2; c++) {
      v_centerD = 67 == weathera.size;
   }
      weathera = new Map([[livenodatabgimgG, 2]]);
   if (rncoreM.get(`${disconnectedlogo8}`) == null) {
      rncoreM.set(livenodatabgimgG, trashB.length);
   }
   let floatingm = weathera.size <= 6593464;
   do {
      weathera = new Map([[`${mergerp.size}`, 1]]);
      if (floatingm) {
         break;
      }
   } while (((3 + weathera.size) >= 2) && floatingm);
      trashB = `${livenodatabgimgG.length}`;
      weathera = new Map([[`${directO.size}`, directO.size]]);
   for (let t = 0; t < 3; t++) {
      disconnectedlogo8 -= rncoreM.size / (Math.max(3, 3));
   }
   if (4 > (androidT.size ^ 1) || (androidT.size ^ 1) > 3) {
      minimizeG += launchO.length;
   }
      livenodatabgimgG = `${livenodatabgimgG.length ^ mergerp.size}`;
       let greyarrowupB: Array<any> = [String.fromCharCode(97,95,52,48,95,97,112,112,101,110,100,101,100,0), String.fromCharCode(101,120,105,115,116,95,53,95,50,50,0), String.fromCharCode(114,95,57,52,95,98,117,108,108,101,116,115,0)];
      if (2 >= (greyarrowupB.length * 4)) {
         greyarrowupB.push(3);
      }
         greyarrowupB.push(3);
       let baidu6 = String.fromCharCode(105,95,51,51,95,101,109,111,116,105,99,111,110,0);
      memberz -= 1 >> (Math.min(1, trashB.length));

    clearTimeout(timer.current);

   let questiconD = 9593685 <= rncoreM.size;
   do {
      rncoreM.set(trashB, rncoreM.size - 2);
      if (questiconD) {
         break;
      }
   } while (((rncoreM.size & 4) > 2 || 4 > (rncoreM.size & selectedW)) && questiconD);
       let arrowX = 3;
          let minimizey = String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,49,95,51,56,0);
          let apps5 = String.fromCharCode(109,97,114,103,105,110,95,56,95,54,48,0);
          let half7 = 3.0;
         arrowX /= Math.max(3, apps5.length / (Math.max(2, minimizey.length)));
         minimizey = `${parseInt(`${half7}`) >> (Math.min(Math.abs(parseInt(`${half7}`)), 2))}`;
         apps5 += `${parseInt(`${half7}`)}`;
      while (2 >= (arrowX * 5)) {
         arrowX *= arrowX * 1;
         break;
      }
         arrowX %= Math.max(arrowX >> (Math.min(5, Math.abs(arrowX))), 3);
      androidT = new Map([[`${v_centerD}`, (selectedW >> (Math.min(5, Math.abs((v_centerD ? 1 : 3)))))]]);
   for (let i = 0; i < 3; i++) {
      androidT.set(trashB, livenodatabgimgG.length);
   }
      v_centerD = directO.size >= selectedW;
   if ((2 >> (Math.min(3, Math.abs(selectedW)))) == 1) {
      rncoreM.set(livenodatabgimgG, (livenodatabgimgG == String.fromCharCode(49,0) ? directO.size : livenodatabgimgG.length));
   }
       let matchesQ = 4.0;
         matchesQ /= Math.max(4, parseInt(`${matchesQ}`));
      for (let o = 0; o < 2; o++) {
         matchesQ += 2 >> (Math.min(Math.abs(parseInt(`${matchesQ}`)), 5));
      }
         matchesQ -= 3 ^ parseInt(`${matchesQ}`);
      mergerp = new Map([[`${rncoreM.size}`, androidT.size]]);
       let spec5 = String.fromCharCode(112,95,55,55,95,115,116,114,116,111,100,0);
       let emojip = 1;
       let popupH = 1.0;
      let privacyL = String.fromCharCode(48,102,101,105,98,106,113,51,53,121,0) == spec5;
      do {
         spec5 += `${parseInt(`${popupH}`) * spec5.length}`;
         if (privacyL) {
            break;
         }
      } while (((3 * emojip) >= 2 && 3 >= (emojip * 3)) && privacyL);
         emojip %= Math.max(1, parseInt(`${popupH}`));
      for (let t = 0; t < 1; t++) {
         emojip |= 2;
      }
      let mbbid7 = spec5.length <= 9869982;
      do {
         spec5 = `${spec5.length}`;
         if (mbbid7) {
            break;
         }
      } while ((!spec5.startsWith(`${emojip}`)) && mbbid7);
      for (let p = 0; p < 2; p++) {
         emojip &= parseInt(`${popupH}`) & 2;
      }
          let middlewarez = 1.0;
          let eactT = 5.0;
         popupH /= Math.max(emojip + parseInt(`${popupH}`), 3);
         middlewarez *= parseFloat(`${parseInt(`${eactT}`) ^ parseInt(`${middlewarez}`)}`);
         eactT /= Math.max(parseFloat(`${parseInt(`${middlewarez}`)}`), 2);
      if (3 >= (3 ^ spec5.length) || 1 >= (spec5.length ^ 3)) {
         emojip *= 2 - emojip;
      }
         popupH -= 2;
      if (spec5.includes(`${emojip}`)) {
          let modelsC: Array<any> = [String.fromCharCode(104,95,54,48,95,104,101,118,99,100,101,99,0), String.fromCharCode(116,95,49,55,95,118,105,111,108,101,110,99,101,0)];
          let description_r_: Array<any> = [725, 136];
          let mutedd = false;
          let schedulerS = false;
         emojip /= Math.max(modelsC.length * 3, 3);
         modelsC = [description_r_.length + 3];
         description_r_.push(3);
         mutedd = !schedulerS;
      }
      directO = new Map([[`${directO.size}`, directO.size]]);
      livenodatabgimgG += `${selectedW}`;
       let hiad7 = 5;
       let libswscalef = 1.0;
       let largebrightness8 = 0.0;
         libswscalef -= parseFloat(`${parseInt(`${largebrightness8}`)}`);
      for (let x = 0; x < 1; x++) {
         hiad7 %= Math.max(1 % (Math.max(parseInt(`${libswscalef}`), 9)), 1);
      }
      while (3 >= (hiad7 | 5)) {
          let u_locky = String.fromCharCode(97,110,116,105,97,108,105,97,115,101,100,95,120,95,54,56,0);
          let ewardedy = 4;
          let templateprocessora = String.fromCharCode(99,109,121,107,95,98,95,54,57,0);
          let iconstarh = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,112,95,49,51,0);
         largebrightness8 -= parseFloat(`${1}`);
         u_locky = `${ewardedy}`;
         ewardedy >>= Math.min(1, Math.abs(3 % (Math.max(2, iconstarh.length))));
         templateprocessora = `${templateprocessora.length / (Math.max(1, 1))}`;
         iconstarh = `${u_locky.length}`;
         break;
      }
         hiad7 <<= Math.min(Math.abs(1), 3);
       let selectiono = String.fromCharCode(100,105,109,105,115,115,95,116,95,50,52,0);
         largebrightness8 *= parseFloat(`${1}`);
      let bellI = 6613387.0 >= largebrightness8;
      do {
         largebrightness8 += parseFloat(`${parseInt(`${largebrightness8}`)}`);
         if (bellI) {
            break;
         }
      } while ((3.28 >= (largebrightness8 / 1.4)) && bellI);
          let previewe: Array<any> = [307, 926];
         libswscalef += parseFloat(`${1 % (Math.max(hiad7, 1))}`);
         previewe = [3 | previewe.length];
         selectiono += `${(String.fromCharCode(50,0) == selectiono ? selectiono.length : parseInt(`${largebrightness8}`))}`;
      minimizeG *= parseInt(`${memberz}`);
       let bufferL = String.fromCharCode(99,95,52,48,95,97,116,116,101,109,116,115,0);
       let iconshareo = 1.0;
      let chat5 = 7430939.0 <= iconshareo;
      do {
         iconshareo -= parseFloat(`${parseInt(`${iconshareo}`) - 2}`);
         if (chat5) {
            break;
         }
      } while (((1.65 + iconshareo) < 3.32) && chat5);
         bufferL += `${parseInt(`${iconshareo}`) / (Math.max(bufferL.length, 6))}`;
      for (let i = 0; i < 2; i++) {
          let render1 = String.fromCharCode(115,119,105,122,122,108,101,100,95,113,95,51,0);
         iconshareo += parseFloat(`${3 ^ render1.length}`);
      }
      if (!bufferL.endsWith(`${iconshareo}`)) {
         iconshareo *= parseFloat(`${2}`);
      }
      let filterZ = String.fromCharCode(117,54,122,107,104,51,119,114,0) == bufferL;
      do {
          let rewindx = String.fromCharCode(114,95,54,95,114,101,100,105,114,101,99,116,111,114,0);
          let productK: Array<any> = [349, 473, 20];
          let typing4 = 4.0;
          let runtimescheduler0 = 5.0;
         bufferL = `${(rewindx == String.fromCharCode(57,0) ? parseInt(`${runtimescheduler0}`) : rewindx.length)}`;
         productK.push(productK.length >> (Math.min(5, Math.abs(parseInt(`${typing4}`)))));
         typing4 += 3 | productK.length;
         runtimescheduler0 -= parseFloat(`${productK.length}`);
         if (filterZ) {
            break;
         }
      } while (filterZ && (2 > (bufferL.length + 3) || (iconshareo + 4.94) > 4.66));
          let customk: Map<any, any> = new Map([[String.fromCharCode(114,95,52,95,114,101,112,101,97,116,105,110,103,0),788], [String.fromCharCode(111,95,56,51,95,109,101,115,115,115,97,103,101,0),340], [String.fromCharCode(112,104,111,110,101,98,111,111,107,95,55,95,57,57,0),932]]);
          let networkD = 3.0;
         bufferL += `${customk.size}`;
         customk = new Map([[`${networkD}`, 1 & parseInt(`${networkD}`)]]);
      minimizeG *= 3;
      livenodatabgimgG = `${1 % (Math.max(3, livenodatabgimgG.length))}`;
    setShowOverlay(true);

      launchO = [1];
      androidT = new Map([[`${mergerp.size}`, directO.size]]);
      mergerp = new Map([[`${rncoreM.size}`, ((v_centerD ? 1 : 1) >> (Math.min(Math.abs(2), 2)))]]);
   if ((memberz + disconnectedlogo8) == 1.95 && (1.95 + memberz) == 3.55) {
      memberz /= Math.max(1, androidT.size);
   }
   while (v_centerD) {
      v_centerD = 52.22 == memberz || directO.size == 37;
      break;
   }
       let updatesg = true;
         updatesg = !updatesg;
      while (!updatesg) {
         updatesg = updatesg && updatesg;
         break;
      }
         updatesg = (!updatesg ? updatesg : updatesg);
      weathera = new Map([[`${rncoreM.size}`, 2 * rncoreM.size]]);
      selectedW ^= launchO.length;
   while ((disconnectedlogo8 - 5.9) >= 3.8) {
      disconnectedlogo8 /= Math.max(rncoreM.size, 1);
      break;
   }
      launchO.push(parseInt(`${memberz}`) - 3);
   for (let o = 0; o < 2; o++) {
      rncoreM.set(`${minimizeG}`, rncoreM.size);
   }
   let topicT = minimizeG <= 5143523.0;
   do {
       let dropdownw = String.fromCharCode(116,95,55,50,95,105,110,116,101,114,97,99,116,105,118,101,108,121,0);
       let preview6: Map<any, any> = new Map([[String.fromCharCode(118,114,97,115,116,101,114,95,111,95,52,55,0),true ], [String.fromCharCode(112,95,55,52,95,116,114,117,110,0),true ], [String.fromCharCode(122,95,50,56,95,117,110,109,97,110,97,103,101,100,0),true ]]);
          let ajaxf = 3;
          let searchbarC = String.fromCharCode(104,95,51,54,95,97,110,111,110,121,109,111,117,115,0);
         preview6 = new Map([[searchbarC, 2]]);
         ajaxf *= ajaxf + 3;
         searchbarC += `${ajaxf}`;
          let kickc = String.fromCharCode(108,95,49,50,95,108,115,112,102,0);
          let disconnectedlogoI = true;
         preview6.set(dropdownw, 1 & dropdownw.length);
         kickc += `${2 & kickc.length}`;
         disconnectedlogoI = kickc.length <= 74;
         preview6.set(`${dropdownw}`, dropdownw.length * preview6.size);
      if (2 <= (preview6.size | 1) && 1 <= (preview6.size | dropdownw.length)) {
         preview6 = new Map([[`${preview6.size}`, preview6.size]]);
      }
         dropdownw = `${preview6.size}`;
      while (4 <= (dropdownw.length - preview6.size) && 3 <= (preview6.size - 4)) {
         dropdownw = `${preview6.size ^ dropdownw.length}`;
         break;
      }
      minimizeG += livenodatabgimgG.length;
      if (topicT) {
         break;
      }
   } while ((minimizeG > 4.79) && topicT);
    overlayRef.current = true

      memberz *= livenodatabgimgG.length << (Math.min(1, Math.abs(parseInt(`${memberz}`))));
   while (weathera.get(`${minimizeG}`) == null) {
       let dicej: Array<any> = [730, 596, 687];
      for (let o = 0; o < 1; o++) {
         dicej = [dicej.length - dicej.length];
      }
      if ((dicej.length >> (Math.min(Math.abs(1), 2))) == 2 && 5 == (dicej.length >> (Math.min(Math.abs(1), 5)))) {
         dicej = [2 >> (Math.min(3, dicej.length))];
      }
          let corek = 5;
         dicej.push(3);
         corek %= Math.max(corek - corek, 3);
      minimizeG += (parseInt(`${memberz}`) ^ (v_centerD ? 2 : 5));
      break;
   }
      livenodatabgimgG = `${livenodatabgimgG.length + rncoreM.size}`;
       let clubM = 3.0;
       let targetZ: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,101,115,95,54,95,54,56,0),94], [String.fromCharCode(103,95,57,50,95,97,103,103,114,101,103,97,116,101,100,0),29]]);
       let anewarchdefaultso = 5.0;
       let xvod4: Array<any> = [String.fromCharCode(115,95,51,49,95,112,114,111,100,117,99,116,102,0), String.fromCharCode(118,95,49,56,95,99,111,108,111,114,113,117,97,110,116,0), String.fromCharCode(108,105,98,120,109,108,95,122,95,49,50,0)];
         anewarchdefaultso -= targetZ.size;
      let with_wK = 7624640.0 <= anewarchdefaultso;
      do {
         anewarchdefaultso *= targetZ.size;
         if (with_wK) {
            break;
         }
      } while (((targetZ.size >> (Math.min(Math.abs(1), 2))) > 2) && with_wK);
      for (let v = 0; v < 1; v++) {
         targetZ.set(`${clubM}`, parseInt(`${clubM}`) & parseInt(`${anewarchdefaultso}`));
      }
         targetZ.set(`${xvod4.length}`, 2 & targetZ.size);
      for (let z = 0; z < 2; z++) {
         anewarchdefaultso -= 3;
      }
      if ((4.86 * anewarchdefaultso) == 3.79 || 3.71 == (4.86 * anewarchdefaultso)) {
          let z_positionw = String.fromCharCode(103,95,52,95,104,111,108,101,0);
          let phoneu = true;
          let forward0 = 4;
          let libavfilter2 = true;
         targetZ = new Map([[`${targetZ.size}`, ((libavfilter2 ? 4 : 1) & 1)]]);
         z_positionw = `${(1 * (phoneu ? 1 : 1))}`;
         phoneu = !z_positionw.startsWith(`${phoneu}`);
         forward0 %= Math.max(2, (forward0 & (phoneu ? 2 : 3)));
         libavfilter2 = (81 > (z_positionw.length * (phoneu ? 81 : z_positionw.length)));
      }
      if (parseInt(`${clubM}`) < targetZ.size) {
         targetZ = new Map([[`${targetZ.size}`, 2]]);
      }
      if (4 == (targetZ.size - parseInt(`${anewarchdefaultso}`)) && 3 == (targetZ.size | 4)) {
          let anythinkX = 2.0;
          let mountingJ: Map<any, any> = new Map([[String.fromCharCode(100,112,114,105,110,116,95,100,95,49,55,0),true ], [String.fromCharCode(115,99,116,112,95,54,95,57,53,0),false ]]);
         anewarchdefaultso += targetZ.size >> (Math.min(5, Math.abs(parseInt(`${anythinkX}`))));
         anythinkX -= mountingJ.size;
         mountingJ = new Map([[`${mountingJ.size}`, 1 - mountingJ.size]]);
      }
      weathera = new Map([[`${clubM}`, parseInt(`${yellowvideolive5}`) - 3]]);
       let dycreatorO = false;
      if (!dycreatorO || dycreatorO) {
         dycreatorO = (!dycreatorO ? !dycreatorO : !dycreatorO);
      }
       let photoB = 0.0;
       let lang7 = String.fromCharCode(97,114,114,95,110,95,51,52,0);
      rncoreM = new Map([[`${launchO.length}`, 2 + launchO.length]]);
   let f_unlockc = v_centerD ? !v_centerD : v_centerD;
   do {
       let android1 = true;
       let qnewarchdefaultsT = false;
       let turnX = 0;
       let phoneshareh = String.fromCharCode(116,105,109,105,110,103,95,55,95,57,55,0);
      if (!phoneshareh.includes(`${turnX}`)) {
         turnX >>= Math.min(Math.abs(1), 3);
      }
          let eventV = 4;
          let iconstaro = String.fromCharCode(102,95,57,51,95,101,118,101,114,121,119,104,101,114,101,0);
          let pausee = true;
         android1 = qnewarchdefaultsT && eventV == 2;
         eventV += 3;
         iconstaro += `${(iconstaro.length & (pausee ? 2 : 5))}`;
         turnX -= ((qnewarchdefaultsT ? 3 : 5) << (Math.min(2, Math.abs((android1 ? 4 : 5)))));
       let logousera = 2.0;
       let pushR = 3.0;
         pushR += parseFloat(`${parseInt(`${logousera}`)}`);
         turnX /= Math.max(turnX, 1);
       let halffieldimagei = String.fromCharCode(115,109,100,109,95,120,95,52,49,0);
      if (phoneshareh.length >= turnX) {
         turnX %= Math.max(1, halffieldimagei.length % 3);
      }
      for (let v = 0; v < 2; v++) {
          let foregroundW: Map<any, any> = new Map([[String.fromCharCode(99,111,110,99,104,95,51,95,49,53,0),String.fromCharCode(112,95,54,49,95,112,114,111,118,105,100,101,114,0)], [String.fromCharCode(116,95,50,49,95,112,114,101,115,101,116,115,0),String.fromCharCode(108,97,114,103,101,114,95,116,95,53,53,0)]]);
         turnX |= parseInt(`${logousera}`) >> (Math.min(5, Math.abs(turnX)));
         foregroundW = new Map([[`${foregroundW.size}`, foregroundW.size]]);
      }
       let kuaishou9 = String.fromCharCode(122,95,51,57,95,101,115,116,97,98,108,105,115,104,0);
       let nativemoduleH = String.fromCharCode(111,95,51,48,95,117,115,101,114,115,112,97,99,101,0);
      for (let a = 0; a < 3; a++) {
         pushR *= parseFloat(`${parseInt(`${logousera}`) >> (Math.min(halffieldimagei.length, 3))}`);
      }
         android1 = !kuaishou9.endsWith(`${qnewarchdefaultsT}`);
      v_centerD = (selectedW + androidT.size) < 96;
      if (f_unlockc) {
         break;
      }
   } while (f_unlockc && (!v_centerD));
   let default_n8 = selectedW <= 7562327;
   do {
      selectedW += 1;
      if (default_n8) {
         break;
      }
   } while ((5 <= (rncoreM.size | 2)) && default_n8);
   while ((rncoreM.size + minimizeG) <= 2.55 || (rncoreM.size + 4) <= 4) {
      rncoreM.set(`${v_centerD}`, (weathera.size << (Math.min(5, Math.abs((v_centerD ? 5 : 2))))));
      break;
   }
   if (launchO.length > 3) {
      launchO = [parseInt(`${memberz}`)];
   }
      livenodatabgimgG += `${weathera.size}`;
       let popupe = 4.0;
       let relatedO = String.fromCharCode(100,116,108,115,95,109,95,50,54,0);
          let pressureu = 1.0;
         relatedO += `${relatedO.length}`;
         pressureu -= parseInt(`${pressureu}`) >> (Math.min(Math.abs(parseInt(`${pressureu}`)), 5));
      for (let t = 0; t < 2; t++) {
         popupe += relatedO.length;
      }
       let whatsapp2: Array<any> = [860, 488, 541];
       let defaultpredictionprofileX: Array<any> = [572, 38, 382];
      let kickO = 7631460.0 >= popupe;
      do {
         popupe += relatedO.length;
         if (kickO) {
            break;
         }
      } while (kickO && (relatedO.endsWith(`${popupe}`)));
       let bingw = 5;
         defaultpredictionprofileX = [bingw];
      minimizeG -= selectedW + parseInt(`${yellowvideolive5}`);
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
       let gesturek: Array<any> = [183, 435, 558];
    let defaultplayerimgi = 2.0;
    let settingt = 0;
    let grayL = String.fromCharCode(105,95,52,49,95,111,110,116,114,111,108,115,0);
    let defaultpredictionprofilez: Array<any> = [375, 612];
    let huaweiR: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,111,114,116,95,113,95,56,54,0),String.fromCharCode(105,95,50,51,95,115,121,110,99,104,114,111,110,105,115,101,100,0)], [String.fromCharCode(101,108,101,109,115,95,121,95,50,0),String.fromCharCode(105,95,49,52,95,109,118,99,111,110,116,101,120,116,115,0)], [String.fromCharCode(109,98,101,100,103,101,95,109,95,51,57,0),String.fromCharCode(103,101,111,99,111,100,101,95,119,95,49,53,0)]]);
    let gifgoalbg_ = String.fromCharCode(109,117,114,109,117,114,95,99,95,54,55,0);
    let searchG = 1.0;
    let windU: Map<any, any> = new Map([[String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,118,95,56,55,0),720], [String.fromCharCode(99,95,49,54,95,105,110,100,105,114,101,99,116,0),122]]);
    let clearg = String.fromCharCode(101,95,49,48,95,112,105,120,109,102,116,115,0);
    let incidentW: Map<any, any> = new Map([[String.fromCharCode(116,119,111,115,116,97,103,101,95,51,95,55,51,0),true ], [String.fromCharCode(100,100,116,115,95,114,95,56,53,0),false ]]);
    let tramini8 = false;
    let roomU: Array<any> = [286, 121];
    let whiteanimationlivev = String.fromCharCode(108,95,55,49,95,101,120,112,105,114,97,116,105,111,110,0);
      windU = new Map([[grayL, 1]]);
       let aboutb = String.fromCharCode(110,95,56,95,112,101,114,115,112,0);
       let subbasketballplayerA: Array<any> = [535, 564];
       let tooltipsv = false;
      for (let x = 0; x < 1; x++) {
         subbasketballplayerA.push((aboutb == String.fromCharCode(49,0) ? (tooltipsv ? 3 : 4) : aboutb.length));
      }
       let macau5 = String.fromCharCode(102,95,52,50,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0);
       let macauV = String.fromCharCode(98,95,50,54,95,112,117,116,98,121,116,101,0);
      if (macau5.endsWith(`${tooltipsv}`)) {
         tooltipsv = macau5 == String.fromCharCode(75,0);
      }
       let actionW = String.fromCharCode(107,95,51,50,95,105,110,116,101,114,112,111,108,97,116,105,111,110,0);
      let updates3 = macauV == String.fromCharCode(52,101,52,51,100,0);
      do {
         macauV += "2";
         if (updates3) {
            break;
         }
      } while (updates3 && (macauV.length == 1));
      settingt -= ((tramini8 ? 5 : 1));
   for (let i = 0; i < 3; i++) {
       let reactnativeultimatelistviewv = false;
         reactnativeultimatelistviewv = !reactnativeultimatelistviewv || !reactnativeultimatelistviewv;
          let application9 = false;
         reactnativeultimatelistviewv = (reactnativeultimatelistviewv ? application9 : !reactnativeultimatelistviewv);
      let fullp = reactnativeultimatelistviewv ? !reactnativeultimatelistviewv : reactnativeultimatelistviewv;
      do {
         reactnativeultimatelistviewv = !reactnativeultimatelistviewv;
         if (fullp) {
            break;
         }
      } while (fullp && (reactnativeultimatelistviewv));
      searchG *= windU.size;
   }
   for (let i = 0; i < 3; i++) {
      grayL = `${2 & parseInt(`${searchG}`)}`;
   }
   let downloaderk = String.fromCharCode(104,113,103,115,103,103,118,0) == clearg;
   do {
      clearg += `${((tramini8 ? 3 : 2) << (Math.min(Math.abs(3), 5)))}`;
      if (downloaderk) {
         break;
      }
   } while (downloaderk && (grayL.length < clearg.length));
      incidentW.set(`${defaultplayerimgi}`, parseInt(`${defaultplayerimgi}`));
   while (2 <= (windU.size ^ 1)) {
       let downloadedL = String.fromCharCode(112,112,99,99,111,109,109,111,110,95,48,95,54,48,0);
       let k_hashx = true;
       let megaphone1 = String.fromCharCode(121,95,56,56,95,117,110,114,101,109,111,118,97,98,108,101,0);
       let weibo9 = true;
      let libreanimatedF = downloadedL == String.fromCharCode(99,116,119,97,117,0);
      do {
         downloadedL = `${megaphone1.length}`;
         if (libreanimatedF) {
            break;
         }
      } while ((!k_hashx && 3 >= downloadedL.length) && libreanimatedF);
          let signinupp = 3.0;
          let nextq = 4;
          let phoneD = false;
         k_hashx = megaphone1.includes(`${k_hashx}`);
         signinupp *= parseFloat(`${1}`);
         nextq += 1;
         phoneD = !phoneD;
      while (!megaphone1.startsWith(`${k_hashx}`)) {
         megaphone1 = `${((k_hashx ? 3 : 1))}`;
         break;
      }
      while (downloadedL.length <= 5) {
          let tempnodatagif4 = String.fromCharCode(100,95,55,56,95,115,112,97,110,115,0);
          let settingsT = 0.0;
          let type_xq = false;
          let matchactive9 = 2.0;
          let liveh = String.fromCharCode(109,100,97,116,95,121,95,51,52,0);
         downloadedL += "1";
         tempnodatagif4 = `${liveh.length / 3}`;
         settingsT -= (parseInt(`${matchactive9}`) >> (Math.min(3, Math.abs((type_xq ? 2 : 2)))));
         type_xq = settingsT > 39.12;
         matchactive9 /= Math.max(2, parseFloat(`${parseInt(`${matchactive9}`) ^ parseInt(`${settingsT}`)}`));
         liveh += `${2 - parseInt(`${settingsT}`)}`;
         break;
      }
      while (!megaphone1.startsWith(`${weibo9}`)) {
          let membershipc = String.fromCharCode(113,95,56,57,95,103,101,116,114,97,110,100,111,109,0);
          let servicew = String.fromCharCode(118,95,56,48,95,98,108,101,110,100,109,111,100,101,0);
          let indexz = String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,101,95,55,56,0);
          let zhengpianq = String.fromCharCode(115,101,118,101,110,95,99,95,57,48,0);
          let nbatrophyK = 5;
         weibo9 = k_hashx;
         membershipc = `${3 << (Math.min(3, membershipc.length))}`;
         servicew += `${membershipc.length}`;
         indexz += "3";
         zhengpianq += `${zhengpianq.length % 1}`;
         nbatrophyK ^= (zhengpianq == String.fromCharCode(78,0) ? zhengpianq.length : nbatrophyK);
         break;
      }
      let qaag4 = k_hashx ? !k_hashx : k_hashx;
      do {
         k_hashx = (98 > (downloadedL.length * (weibo9 ? 98 : downloadedL.length)));
         if (qaag4) {
            break;
         }
      } while (qaag4 && (!k_hashx));
       let auto_7bs = 3.0;
          let windo = false;
         megaphone1 += `${downloadedL.length | 2}`;
          let confirmationK = String.fromCharCode(122,95,57,53,95,111,99,116,101,116,0);
          let webview8 = String.fromCharCode(114,101,113,117,105,114,101,95,53,95,54,48,0);
         k_hashx = megaphone1.length == auto_7bs;
         confirmationK = `${webview8.length}`;
         webview8 = `${confirmationK.length | webview8.length}`;
      let bellU = String.fromCharCode(117,56,117,101,99,98,97,100,53,0) == megaphone1;
      do {
         megaphone1 = `${((k_hashx ? 4 : 3))}`;
         if (bellU) {
            break;
         }
      } while (bellU && (!megaphone1.endsWith(`${weibo9}`)));
       let awayteamfieldU = 4.0;
       let icon8 = String.fromCharCode(111,95,53,51,95,99,121,112,114,101,115,115,0);
      clearg += "1";
      break;
   }
       let fulls = String.fromCharCode(116,95,55,95,105,100,101,110,116,105,102,121,0);
       let iconshareF = String.fromCharCode(109,97,116,104,95,52,95,57,48,0);
         iconshareF = `${fulls.length}`;
         fulls += `${2 / (Math.max(7, fulls.length))}`;
      for (let c = 0; c < 3; c++) {
          let login1 = String.fromCharCode(112,95,53,54,95,117,112,115,101,114,116,0);
         iconshareF += `${iconshareF.length}`;
         login1 = `${login1.length}`;
      }
       let orangeR = 2.0;
         iconshareF += "2";
         iconshareF = `${2 ^ iconshareF.length}`;
      searchG -= windU.size;
      searchG /= Math.max(2, 5);
      windU.set(gifgoalbg_, gesturek.length);


      if (videoRef.current) {

      searchG -= parseInt(`${searchG}`);
       let button0 = String.fromCharCode(114,101,118,105,101,119,95,52,95,49,56,0);
       let arrowup0 = String.fromCharCode(110,95,53,50,95,115,105,110,99,101,0);
       let middlebrightnessX = 5;
         button0 += `${arrowup0.length}`;
          let foregroundA = false;
          let suggestionk = 2.0;
         button0 = `${middlebrightnessX}`;
         foregroundA = !foregroundA;
         suggestionk /= Math.max(1 << (Math.min(Math.abs(parseInt(`${suggestionk}`)), 4)), 3);
       let expiredi = String.fromCharCode(108,95,52,51,95,113,99,101,108,112,0);
         arrowup0 = `${arrowup0.length | expiredi.length}`;
          let webviewi = false;
         middlebrightnessX >>= Math.min(3, Math.abs(2 - arrowup0.length));
         webviewi = (!webviewi ? !webviewi : webviewi);
      if (!expiredi.startsWith(`${middlebrightnessX}`)) {
         expiredi += `${(expiredi == String.fromCharCode(111,0) ? middlebrightnessX : expiredi.length)}`;
      }
         arrowup0 = `${expiredi.length / (Math.max(arrowup0.length, 10))}`;
         middlebrightnessX <<= Math.min(Math.abs(expiredi.length / (Math.max(3, 3))), 4);
          let weibom = String.fromCharCode(105,103,110,111,114,101,95,116,95,52,52,0);
          let relatedH = 4;
          let mountingv = String.fromCharCode(118,95,50,55,95,116,104,105,99,107,0);
         expiredi += "2";
         weibom = `${(String.fromCharCode(107,0) == weibom ? weibom.length : relatedH)}`;
         relatedH += 2;
         mountingv = `${weibom.length}`;
      settingt += 1 >> (Math.min(Math.abs(settingt), 4));
       let neonh = String.fromCharCode(97,110,110,111,117,110,99,101,109,101,110,116,95,55,95,57,54,0);
       let banner2 = false;
       let basketballhometeam1 = 5;
      if (banner2) {
         basketballhometeam1 %= Math.max(5, neonh.length - basketballhometeam1);
      }
         basketballhometeam1 &= 1 ^ neonh.length;
       let giftbuttonv = String.fromCharCode(102,111,114,119,97,114,100,101,114,95,98,95,52,54,0);
       let templateprocessorE = String.fromCharCode(122,95,52,53,95,97,101,118,97,108,0);
          let expiredc: Array<any> = [String.fromCharCode(120,95,56,52,95,116,114,97,110,115,108,105,116,101,114,97,116,101,100,0), String.fromCharCode(112,101,114,99,95,122,95,52,54,0), String.fromCharCode(105,95,53,57,95,98,105,116,115,104,105,102,116,0)];
          let castR = String.fromCharCode(102,95,56,48,95,115,112,108,105,116,116,101,114,0);
         templateprocessorE = `${neonh.length % (Math.max(4, giftbuttonv.length))}`;
         expiredc = [castR.length];
         castR += "2";
      if (1 <= templateprocessorE.length) {
          let videojsG = true;
          let textE: Map<any, any> = new Map([[String.fromCharCode(109,95,49,57,95,99,97,112,116,117,114,101,114,0),true ], [String.fromCharCode(110,95,57,95,118,112,97,116,104,0),true ], [String.fromCharCode(106,95,50,52,95,99,111,110,118,101,114,116,111,114,0),true ]]);
          let greenc = String.fromCharCode(106,95,49,56,95,113,117,101,114,121,0);
         templateprocessorE = `${((banner2 ? 3 : 3))}`;
         videojsG = videojsG && textE.size >= 15;
         textE.set(`${videojsG}`, textE.size);
         greenc = `${(greenc.length | (videojsG ? 3 : 4))}`;
      }
      while (2 <= giftbuttonv.length) {
         giftbuttonv = "1";
         break;
      }
         basketballhometeam1 ^= templateprocessorE.length | 3;
      while ((5 | templateprocessorE.length) <= 1 && 5 <= (basketballhometeam1 | templateprocessorE.length)) {
         templateprocessorE += `${(String.fromCharCode(105,0) == neonh ? neonh.length : (banner2 ? 4 : 3))}`;
         break;
      }
       let overlayM = 0.0;
      incidentW = new Map([[`${gesturek.length}`, 3 >> (Math.min(Math.abs(parseInt(`${defaultplayerimgi}`)), 2))]]);
      defaultpredictionprofilez.push(3);
   for (let d = 0; d < 3; d++) {
       let dacccfaabfbcbadeebddcabacdffdbn = String.fromCharCode(103,95,52,52,95,109,101,109,106,114,110,108,0);
       let analyticI = true;
      if (dacccfaabfbcbadeebddcabacdffdbn.endsWith(`${analyticI}`)) {
         analyticI = !dacccfaabfbcbadeebddcabacdffdbn.includes(`${analyticI}`);
      }
         dacccfaabfbcbadeebddcabacdffdbn += `${(String.fromCharCode(114,0) == dacccfaabfbcbadeebddcabacdffdbn ? dacccfaabfbcbadeebddcabacdffdbn.length : (analyticI ? 5 : 2))}`;
      for (let s = 0; s < 1; s++) {
         analyticI = dacccfaabfbcbadeebddcabacdffdbn.includes(`${analyticI}`);
      }
      for (let m = 0; m < 3; m++) {
          let reducers = 2;
          let projectp: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,105,110,105,116,0),String.fromCharCode(101,120,97,109,112,108,101,95,109,95,54,51,0)], [String.fromCharCode(105,111,101,114,114,110,111,109,101,109,95,100,95,52,51,0),String.fromCharCode(115,107,105,112,105,110,116,114,97,95,48,95,52,53,0)]]);
          let iconstarB = String.fromCharCode(108,95,54,55,95,117,110,98,97,110,0);
          let b_titleZ = String.fromCharCode(105,112,108,105,109,97,103,101,95,115,95,48,0);
         dacccfaabfbcbadeebddcabacdffdbn += `${(String.fromCharCode(71,0) == b_titleZ ? (analyticI ? 3 : 2) : b_titleZ.length)}`;
         reducers <<= Math.min(Math.abs(reducers), 4);
         projectp = new Map([[`${reducers}`, 3]]);
         iconstarB = `${iconstarB.length}`;
      }
      while (!dacccfaabfbcbadeebddcabacdffdbn.endsWith(`${analyticI}`)) {
         analyticI = !dacccfaabfbcbadeebddcabacdffdbn.endsWith(`${analyticI}`);
         break;
      }
         dacccfaabfbcbadeebddcabacdffdbn = `${dacccfaabfbcbadeebddcabacdffdbn.length}`;
      searchG -= 2;
   }
   while (4 == (settingt / 2)) {
       let modulesG = 0.0;
         modulesG /= Math.max(parseInt(`${modulesG}`) & parseInt(`${modulesG}`), 5);
      let bdxadsdkV = modulesG >= 5312100.0;
      do {
          let sharemodalm = String.fromCharCode(111,95,48,95,100,101,105,110,116,101,114,108,97,99,101,0);
          let nexts = String.fromCharCode(103,114,97,121,95,57,95,52,55,0);
          let logoutO: Array<any> = [785, 361, 86];
          let iconpipexpand0 = 4.0;
         modulesG -= 2;
         sharemodalm = `${3 ^ logoutO.length}`;
         nexts = `${1 % (Math.max(1, sharemodalm.length))}`;
         logoutO = [parseInt(`${iconpipexpand0}`) / (Math.max(4, logoutO.length))];
         iconpipexpand0 *= nexts.length ^ 3;
         if (bdxadsdkV) {
            break;
         }
      } while (((modulesG * 3) == 2.40) && bdxadsdkV);
         modulesG /= Math.max(5, 3);
      defaultplayerimgi -= roomU.length - huaweiR.size;
      break;
   }
   if (1 == (huaweiR.size / (Math.max(8, parseInt(`${searchG}`)))) || (2.96 / (Math.max(2, searchG))) == 3.39) {
      searchG /= Math.max(3, gifgoalbg_.length);
   }
   for (let s = 0; s < 2; s++) {
      huaweiR = new Map([[`${gesturek.length}`, clearg.length & gesturek.length]]);
   }
      defaultplayerimgi -= 3 - parseInt(`${searchG}`);
      gifgoalbg_ += `${2 >> (Math.min(2, roomU.length))}`;
        videoRef.current.seek(value);

       let baselineR: Array<any> = [978, 991, 418];
       let listy = String.fromCharCode(98,97,114,107,95,117,95,51,0);
       let hongkongR = String.fromCharCode(107,98,112,115,95,122,95,55,49,0);
       let giftbuttonn = String.fromCharCode(120,95,56,54,95,98,97,107,101,0);
          let white4: Array<any> = [546, 623, 604];
         giftbuttonn = `${listy.length ^ white4.length}`;
         listy = `${giftbuttonn.length ^ 3}`;
         giftbuttonn = "2";
          let full8 = String.fromCharCode(120,95,54,53,95,109,105,110,105,0);
          let ball1 = String.fromCharCode(120,120,104,97,115,104,95,55,95,53,56,0);
         baselineR.push(listy.length);
         full8 = `${ball1.length}`;
         ball1 += `${(String.fromCharCode(100,0) == ball1 ? full8.length : ball1.length)}`;
       let gdtadv0: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,119,105,110,103,95,115,95,51,55,0),170], [String.fromCharCode(114,101,102,101,114,101,110,99,101,95,101,95,56,56,0),30], [String.fromCharCode(98,117,110,100,108,101,115,95,104,95,53,51,0),182]]);
       let statisticsV: Map<any, any> = new Map([[String.fromCharCode(119,95,56,48,95,112,97,99,107,101,116,105,122,97,116,105,111,110,0),193], [String.fromCharCode(113,95,49,57,95,114,101,118,111,107,97,98,108,101,0),200]]);
      while ((hongkongR.length * 3) == 2 && 3 == (hongkongR.length * baselineR.length)) {
         baselineR = [statisticsV.size];
         break;
      }
      if (statisticsV.size < 1) {
         statisticsV = new Map([[`${baselineR.length}`, baselineR.length]]);
      }
       let zoom0 = String.fromCharCode(105,110,105,116,105,97,108,115,95,106,95,55,51,0);
      defaultpredictionprofilez = [3 - incidentW.size];
   while (2 == (windU.size ^ gifgoalbg_.length) || 1 == (2 ^ gifgoalbg_.length)) {
      windU.set(`${settingt}`, parseInt(`${searchG}`));
      break;
   }
   while ((2.21 + searchG) >= 5.31 && (incidentW.size & 2) >= 1) {
      searchG *= defaultpredictionprofilez.length;
      break;
   }
   for (let p = 0; p < 1; p++) {
       let predictionbannersharedb = 5;
       let libtan2: Map<any, any> = new Map([[String.fromCharCode(105,115,105,95,57,95,53,50,0),false ], [String.fromCharCode(121,95,52,57,95,115,117,98,104,101,97,100,101,114,0),false ], [String.fromCharCode(105,95,49,51,95,115,105,109,112,108,101,119,114,105,116,101,0),false ]]);
      for (let i = 0; i < 2; i++) {
          let constantsA: Array<any> = [String.fromCharCode(108,105,115,116,105,110,103,95,98,95,57,52,0), String.fromCharCode(98,116,114,101,101,95,51,95,51,48,0)];
          let homeF: Array<any> = [41, 218, 622];
         predictionbannersharedb %= Math.max(5, 2);
         constantsA.push(constantsA.length >> (Math.min(Math.abs(3), 4)));
         homeF = [constantsA.length];
      }
         predictionbannersharedb &= libtan2.size;
      gesturek = [roomU.length * 3];
   }
       let eventv = String.fromCharCode(102,111,117,114,105,101,114,95,116,95,53,51,0);
       let libpangleflippedv = true;
       let middlebrightnessf = String.fromCharCode(112,114,101,115,115,101,100,95,52,95,53,57,0);
       let regeng9 = String.fromCharCode(109,95,50,52,95,103,101,116,112,116,114,0);
      let closeF = String.fromCharCode(57,118,100,107,115,121,107,0) == middlebrightnessf;
      do {
          let brightness9 = 1.0;
         middlebrightnessf = `${eventv.length}`;
         brightness9 += parseFloat(`${parseInt(`${brightness9}`) & parseInt(`${brightness9}`)}`);
         if (closeF) {
            break;
         }
      } while ((!middlebrightnessf.endsWith(`${libpangleflippedv}`)) && closeF);
      if (!eventv.startsWith(`${libpangleflippedv}`)) {
         libpangleflippedv = !libpangleflippedv;
      }
          let scrollviewB = String.fromCharCode(98,114,105,100,103,105,110,103,95,101,95,51,50,0);
          let libffmpegkitc = false;
          let reactnativeultimatelistview8 = true;
         middlebrightnessf += `${1 * scrollviewB.length}`;
         scrollviewB += "2";
         libffmpegkitc = (reactnativeultimatelistview8 ? libffmpegkitc : !reactnativeultimatelistview8);
          let searchbarm = false;
         libpangleflippedv = middlebrightnessf == regeng9;
         searchbarm = (!searchbarm ? !searchbarm : searchbarm);
       let mappingP: Map<any, any> = new Map([[String.fromCharCode(107,95,53,56,95,100,100,115,116,0),455], [String.fromCharCode(104,95,50,50,95,105,110,105,116,105,97,108,105,122,101,114,115,0),656]]);
      roomU.push(parseInt(`${searchG}`) & 1);
   if (windU.size > parseInt(`${defaultplayerimgi}`)) {
       let libhermesz = false;
          let code0 = String.fromCharCode(97,103,103,114,101,103,97,116,101,95,109,95,51,53,0);
          let hongkonge = false;
          let untickk = 2;
         libhermesz = !hongkonge;
         code0 += `${untickk >> (Math.min(code0.length, 2))}`;
         untickk ^= code0.length % 1;
       let soundh = 1.0;
      for (let o = 0; o < 1; o++) {
         soundh -= (parseInt(`${soundh}`) & (libhermesz ? 2 : 4));
      }
      defaultplayerimgi *= 1;
   }
   for (let i = 0; i < 2; i++) {
      settingt >>= Math.min(Math.abs(parseInt(`${defaultplayerimgi}`)), 5);
   }
      searchG -= 1;
   while (gifgoalbg_.includes(`${windU.size}`)) {
      gifgoalbg_ += `${parseInt(`${searchG}`)}`;
      break;
   }
   while ((searchG / (Math.max(3.31, 7))) == 2.34 && (parseInt(`${searchG}`) / (Math.max(incidentW.size, 3))) == 3) {
      incidentW.set(whiteanimationlivev, whiteanimationlivev.length - grayL.length);
      break;
   }
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current]
  );

  const handlePlayPause = () => {
       let tempnodatagifa = String.fromCharCode(116,111,111,108,99,104,97,105,110,95,121,95,51,0);
    let defaultfootballbgr: Map<any, any> = new Map([[String.fromCharCode(101,120,108,117,100,101,100,95,115,95,50,56,0),781], [String.fromCharCode(102,95,53,55,95,114,101,102,105,100,0),442]]);
    let chinaL = String.fromCharCode(112,95,57,48,95,109,101,97,115,117,114,101,0);
    let exampleimageW = 3.0;
    let resultG = String.fromCharCode(99,117,114,116,97,105,110,115,95,116,95,55,52,0);
    let championi = String.fromCharCode(105,95,49,55,95,98,101,110,99,104,115,0);
    let promotionI = 3.0;
    let slider6 = String.fromCharCode(101,95,51,52,95,101,110,100,105,97,110,110,101,115,115,0);
   let containero = 9311938 <= chinaL.length;
   do {
       let placeholderO = String.fromCharCode(114,95,53,50,95,109,112,101,103,116,115,0);
       let notificationE = 4.0;
       let selected9 = String.fromCharCode(116,101,114,109,95,54,95,55,54,0);
       let gpayP = String.fromCharCode(111,105,100,97,110,121,95,54,95,52,53,0);
       let orientation9: Array<any> = [796, 673];
       let overu = 1.0;
       let webview3 = 0.0;
         overu /= Math.max(3, parseFloat(`${3}`));
       let previewl = 2.0;
      let iconarrowrightO = gpayP.length >= 8213069;
      do {
          let libreactnativeblobs = String.fromCharCode(100,95,53,54,95,105,116,101,114,97,116,111,114,0);
         gpayP += `${libreactnativeblobs.length}`;
         if (iconarrowrightO) {
            break;
         }
      } while (iconarrowrightO && (gpayP.length > 1));
      let less8 = gpayP.length <= 9427777;
      do {
         gpayP += "3";
         if (less8) {
            break;
         }
      } while (less8 && ((2.0 + notificationE) > 3.14));
      let shrinkH = 6720625 >= selected9.length;
      do {
         selected9 += `${selected9.length}`;
         if (shrinkH) {
            break;
         }
      } while ((4.56 == (1.32 + overu) && 2 == (selected9.length + parseInt(`${overu}`))) && shrinkH);
      let iconwatchnowK = overu >= 9655509.0;
      do {
         overu *= parseFloat(`${3 - parseInt(`${previewl}`)}`);
         if (iconwatchnowK) {
            break;
         }
      } while ((previewl <= overu) && iconwatchnowK);
      if ((parseInt(`${notificationE}`) - placeholderO.length) == 2) {
         placeholderO += `${gpayP.length}`;
      }
         placeholderO += "2";
         notificationE *= (placeholderO == String.fromCharCode(75,0) ? placeholderO.length : parseInt(`${overu}`));
         webview3 += parseFloat(`${orientation9.length}`);
       let proxyx: Array<any> = [106, 852, 343];
          let expandx = String.fromCharCode(98,95,57,57,95,115,104,97,107,105,110,103,0);
          let productV: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,100,101,120,95,113,95,54,53,0),356], [String.fromCharCode(102,105,120,116,117,114,101,95,115,95,53,54,0),975], [String.fromCharCode(118,111,99,97,98,95,101,95,55,57,0),83]]);
         orientation9.push(3);
         expandx = `${expandx.length * 3}`;
         productV = new Map([[`${productV.size}`, productV.size * 1]]);
         placeholderO = `${selected9.length | parseInt(`${previewl}`)}`;
         gpayP = `${parseInt(`${previewl}`)}`;
      chinaL = `${placeholderO.length - 3}`;
      if (containero) {
         break;
      }
   } while (containero && (championi != String.fromCharCode(98,0)));
      tempnodatagifa += `${championi.length / (Math.max(1, 8))}`;
   for (let t = 0; t < 1; t++) {
      exampleimageW *= 2;
   }
   let singaporeM = 5023187 <= defaultfootballbgr.size;
   do {
       let sinaK: Map<any, any> = new Map([[String.fromCharCode(115,119,97,98,95,106,95,55,54,0),135], [String.fromCharCode(113,99,101,108,112,100,97,116,97,95,104,95,57,54,0),961], [String.fromCharCode(121,95,57,49,95,110,111,114,111,117,110,100,0),351]]);
       let membero = String.fromCharCode(108,111,111,107,97,104,101,97,100,95,57,95,57,49,0);
       let hongkongq = 4.0;
       let scorep: Array<any> = [873, 783, 718];
       let rootT = String.fromCharCode(101,95,51,57,95,101,109,109,115,0);
          let stepI = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,95,113,95,55,52,0);
         scorep = [scorep.length];
         stepI = `${stepI.length}`;
         rootT = `${3 % (Math.max(2, rootT.length))}`;
         scorep.push(2);
      while ((scorep.length << (Math.min(Math.abs(4), 4))) <= 4) {
         scorep = [3];
         break;
      }
      let qaagM = sinaK.size >= 7505435;
      do {
          let entryX = 5;
          let fieldP = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,95,97,95,53,53,0);
          let footballfieldU = 1.0;
          let renewF = String.fromCharCode(111,95,57,54,95,101,108,115,101,0);
          let scheduleG = true;
         sinaK.set(`${footballfieldU}`, parseInt(`${footballfieldU}`));
         entryX |= fieldP.length;
         fieldP += `${2 % (Math.max(5, entryX))}`;
         renewF = "1";
         scheduleG = renewF.length > 1;
         if (qaagM) {
            break;
         }
      } while (qaagM && (3 > (sinaK.size >> (Math.min(Math.abs(2), 1)))));
      while (!Array.from(sinaK.values()).includes(hongkongq)) {
         sinaK.set(rootT, parseInt(`${hongkongq}`) / (Math.max(rootT.length, 4)));
         break;
      }
         hongkongq -= parseFloat(`${scorep.length}`);
      if (3.51 > (hongkongq + parseFloat(`${rootT.length}`))) {
         hongkongq += parseFloat(`${scorep.length + sinaK.size}`);
      }
         membero = `${parseInt(`${hongkongq}`) / (Math.max(6, sinaK.size))}`;
       let episodesa = String.fromCharCode(112,115,97,95,101,95,51,56,0);
       let profileactiveF = String.fromCharCode(99,111,108,115,95,122,95,52,51,0);
      if ((sinaK.size + parseInt(`${hongkongq}`)) < 3 || 1.4 < (parseFloat(`${sinaK.size}`) + hongkongq)) {
         hongkongq *= parseFloat(`${3}`);
      }
         membero = `${episodesa.length % 1}`;
      let actionsF = profileactiveF.length <= 9177675;
      do {
         profileactiveF = `${sinaK.size / (Math.max(rootT.length, 6))}`;
         if (actionsF) {
            break;
         }
      } while (actionsF && (episodesa != profileactiveF));
      while (1 <= (scorep.length - 1) || (1 & scorep.length) <= 3) {
         scorep.push(2);
         break;
      }
         membero = `${rootT.length + episodesa.length}`;
      defaultfootballbgr.set(tempnodatagifa, parseInt(`${exampleimageW}`) << (Math.min(tempnodatagifa.length, 5)));
      if (singaporeM) {
         break;
      }
   } while (singaporeM && (5 < resultG.length));
   while (!tempnodatagifa.includes(`${championi.length}`)) {
       let schedulerE = 4.0;
         schedulerE *= 3;
      for (let i = 0; i < 1; i++) {
         schedulerE -= 1;
      }
         schedulerE *= parseInt(`${schedulerE}`);
      tempnodatagifa += `${chinaL.length * 3}`;
      break;
   }

    clearTimeout(iconTimer.current);

   for (let v = 0; v < 2; v++) {
      defaultfootballbgr = new Map([[`${defaultfootballbgr.size}`, 3 / (Math.max(6, chinaL.length))]]);
   }
   while (resultG.endsWith(`${promotionI}`)) {
      promotionI += 1;
      break;
   }
       let penaltygoalA = String.fromCharCode(116,101,108,108,95,122,95,51,0);
      if (penaltygoalA.startsWith(penaltygoalA)) {
          let libsgcoreT = 2.0;
         penaltygoalA = `${penaltygoalA.length / (Math.max(9, parseInt(`${libsgcoreT}`)))}`;
      }
         penaltygoalA += `${penaltygoalA.length + 2}`;
      for (let z = 0; z < 3; z++) {
         penaltygoalA += "1";
      }
      resultG = `${tempnodatagifa.length}`;
       let emojiZ = String.fromCharCode(98,105,110,107,98,95,109,95,49,56,0);
       let pushz = String.fromCharCode(118,95,57,52,95,97,117,120,100,97,116,97,0);
       let rightT: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,114,105,99,116,95,104,95,48,0),202], [String.fromCharCode(119,95,50,52,95,99,111,110,115,116,97,110,116,115,0),140], [String.fromCharCode(119,101,105,103,104,116,95,54,95,49,55,0),536]]);
       let runtimeT = 2.0;
       let profileinactive8 = 3.0;
      if (emojiZ != String.fromCharCode(69,0)) {
         pushz += `${parseInt(`${profileinactive8}`)}`;
      }
      let privatechatbgq = pushz == String.fromCharCode(97,101,111,48,49,112,114,111,54,0);
      do {
         pushz = `${2 << (Math.min(1, Math.abs(rightT.size)))}`;
         if (privatechatbgq) {
            break;
         }
      } while ((emojiZ.length < 1) && privatechatbgq);
          let storeY = String.fromCharCode(109,111,100,105,102,121,95,106,95,54,54,0);
         pushz = `${2 - emojiZ.length}`;
         storeY += `${storeY.length >> (Math.min(Math.abs(2), 2))}`;
      if ((pushz.length + rightT.size) <= 1 && (pushz.length + rightT.size) <= 1) {
         rightT.set(`${runtimeT}`, (String.fromCharCode(76,0) == emojiZ ? parseInt(`${runtimeT}`) : emojiZ.length));
      }
      let sideK = 8741454 >= rightT.size;
      do {
          let leakcheckerX: Array<any> = [String.fromCharCode(110,95,55,53,95,105,110,115,112,101,99,116,0), String.fromCharCode(110,111,110,98,95,102,95,50,56,0)];
          let contextE: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,95,103,95,53,54,0),String.fromCharCode(105,95,54,48,95,97,112,112,108,121,0)], [String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,98,95,56,51,0),String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,105,95,55,55,0)], [String.fromCharCode(117,95,49,54,95,97,117,116,111,112,108,97,121,105,110,103,0),String.fromCharCode(119,95,53,55,95,103,100,115,112,0)]]);
         rightT = new Map([[`${rightT.size}`, 1 >> (Math.min(2, leakcheckerX.length))]]);
         leakcheckerX = [contextE.size];
         contextE = new Map([[`${contextE.size}`, contextE.size % (Math.max(contextE.size, 9))]]);
         if (sideK) {
            break;
         }
      } while (sideK && (!emojiZ.endsWith(`${rightT.size}`)));
         rightT.set(pushz, rightT.size);
      if (emojiZ.length <= profileinactive8) {
          let network2 = false;
          let controlD = 1;
          let scoreE = false;
          let sportp = false;
         emojiZ += `${rightT.size | parseInt(`${profileinactive8}`)}`;
         network2 = controlD > 23;
         controlD <<= Math.min(Math.abs(((scoreE ? 1 : 1) | controlD)), 2);
         scoreE = !sportp;
      }
      let videol = 5267147.0 >= runtimeT;
      do {
          let projecty = 4.0;
          let langx = String.fromCharCode(115,95,54,51,95,114,101,112,108,97,121,0);
          let hookg = true;
          let refreshL: Array<any> = [String.fromCharCode(108,111,103,95,118,95,52,55,0), String.fromCharCode(107,95,57,53,95,114,101,113,117,101,115,116,97,98,108,101,0)];
          let armvaL = 0.0;
         runtimeT -= 2;
         projecty *= parseInt(`${armvaL}`);
         langx += `${(parseInt(`${armvaL}`) >> (Math.min(3, Math.abs((hookg ? 3 : 5)))))}`;
         hookg = (42 == (refreshL.length & (!hookg ? refreshL.length : 42)));
         if (videol) {
            break;
         }
      } while ((rightT.get(`${runtimeT}`) == null) && videol);
      resultG += "2";
   while (!tempnodatagifa.startsWith(`${exampleimageW}`)) {
      exampleimageW -= resultG.length;
      break;
   }
    setShowIcon(true);

   for (let d = 0; d < 3; d++) {
      tempnodatagifa = `${chinaL.length / (Math.max(resultG.length, 8))}`;
   }
      defaultfootballbgr = new Map([[resultG, resultG.length + parseInt(`${exampleimageW}`)]]);
      exampleimageW -= 1;
      chinaL += `${chinaL.length}`;
   for (let j = 0; j < 3; j++) {
      resultG += "3";
   }
    if (isPause) {

      chinaL += "1";
      resultG = `${parseInt(`${promotionI}`) % (Math.max(parseInt(`${exampleimageW}`), 4))}`;
   for (let y = 0; y < 2; y++) {
      tempnodatagifa = `${3 & championi.length}`;
   }
   let roundc = 7790093 >= championi.length;
   do {
       let descI = 1;
       let activitye: Array<any> = [646, 574, 555];
       let watchg = 4.0;
          let yingi = false;
          let window_c4X = String.fromCharCode(97,97,99,112,115,100,115,112,95,103,95,52,51,0);
          let incident8 = String.fromCharCode(97,107,105,100,95,105,95,49,50,0);
         descI <<= Math.min(parseInt(`${Math.abs((descI >> (Math.min(2, Math.abs((yingi ? 3 : 2))))))}`), 2);
         yingi = incident8.length <= window_c4X.length;
         window_c4X = `${incident8.length * window_c4X.length}`;
         descI <<= Math.min(Math.abs(activitye.length ^ 3), 3);
         activitye = [activitye.length];
         activitye.push(1);
         activitye = [activitye.length & 3];
         descI <<= Math.min(Math.abs(descI), 1);
      let untick1 = activitye.length <= 5406575;
      do {
         activitye = [descI * parseInt(`${watchg}`)];
         if (untick1) {
            break;
         }
      } while (((1 | activitye.length) <= 4) && untick1);
      if ((watchg + descI) <= 2.100) {
          let libglog_: Map<any, any> = new Map([[String.fromCharCode(114,101,110,101,119,95,48,95,57,49,0),815], [String.fromCharCode(112,117,98,108,105,115,104,101,100,95,106,95,55,55,0),770]]);
          let corek: Array<any> = [853, 278, 462];
          let areaP = 3.0;
         watchg /= Math.max(1, parseInt(`${areaP}`));
         libglog_ = new Map([[`${libglog_.size}`, corek.length]]);
         corek = [libglog_.size];
         areaP += parseFloat(`${corek.length | 2}`);
      }
          let libturbomodulejsijniO: Array<any> = [257, 591];
         activitye.push(activitye.length);
         libturbomodulejsijniO.push(libturbomodulejsijniO.length << (Math.min(libturbomodulejsijniO.length, 4)));
      championi += `${3 & championi.length}`;
      if (roundc) {
         break;
      }
   } while ((!resultG.includes(championi)) && roundc);
   let placeholderE = slider6 == String.fromCharCode(114,111,110,108,101,0);
   do {
       let userA = 4;
       let mappingj: Array<any> = [29, 894, 417];
       let defaultlogoa = String.fromCharCode(105,95,55,56,95,115,112,108,97,110,101,0);
         defaultlogoa += `${(defaultlogoa == String.fromCharCode(107,0) ? mappingj.length : defaultlogoa.length)}`;
      let cornerC = 6214412 >= userA;
      do {
          let stationsm = String.fromCharCode(117,118,108,99,95,121,95,56,53,0);
          let soundL: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,95,52,95,50,53,0),401], [String.fromCharCode(115,117,98,115,116,105,116,117,116,101,100,95,108,95,54,53,0),237]]);
          let kuaishou_ = true;
          let apps1 = String.fromCharCode(101,109,109,115,95,121,95,52,0);
          let resend5: Array<any> = [685, 829];
         userA %= Math.max(5, soundL.size);
         stationsm = `${(String.fromCharCode(116,0) == apps1 ? apps1.length : resend5.length)}`;
         soundL = new Map([[`${resend5.length}`, stationsm.length & resend5.length]]);
         kuaishou_ = stationsm == apps1;
         if (cornerC) {
            break;
         }
      } while ((userA > mappingj.length) && cornerC);
      if (3 > (userA | mappingj.length) && (3 | mappingj.length) > 5) {
         userA |= defaultlogoa.length >> (Math.min(5, Math.abs(userA)));
      }
          let xnewarchdefaultsM = true;
          let string3 = String.fromCharCode(97,95,50,55,95,118,112,97,116,104,0);
          let uploadc = 5.0;
         mappingj.push(1);
         xnewarchdefaultsM = string3.length > 51;
         string3 += `${parseInt(`${uploadc}`)}`;
         uploadc /= Math.max(3, (parseFloat(`${string3 == String.fromCharCode(78,0) ? parseInt(`${uploadc}`) : string3.length}`)));
          let jingdongF: Map<any, any> = new Map([[String.fromCharCode(106,95,57,53,95,112,111,108,108,0),945], [String.fromCharCode(101,103,114,101,115,115,95,112,95,56,48,0),706]]);
          let penaltygoal5 = 3;
         mappingj.push(3);
         jingdongF = new Map([[`${jingdongF.size}`, 1 >> (Math.min(5, Math.abs(penaltygoal5)))]]);
         penaltygoal5 *= jingdongF.size + penaltygoal5;
      while (2 >= (userA | mappingj.length) || (mappingj.length | userA) >= 2) {
          let greenj = String.fromCharCode(103,95,54,52,95,100,105,118,112,111,119,109,0);
         mappingj = [1 & greenj.length];
         break;
      }
          let saver = 0.0;
          let huawei6 = String.fromCharCode(100,95,56,51,95,98,121,116,101,115,116,114,105,110,103,0);
         userA |= userA;
         saver += parseFloat(`${huawei6.length}`);
         huawei6 = `${parseInt(`${saver}`)}`;
      let iconsettingR = defaultlogoa == String.fromCharCode(111,98,51,51,50,101,49,108,110,0);
      do {
         defaultlogoa += `${userA % 3}`;
         if (iconsettingR) {
            break;
         }
      } while (iconsettingR && (5 >= (userA - defaultlogoa.length) && 5 >= (defaultlogoa.length - userA)));
         userA <<= Math.min(Math.abs(1), 1);
      slider6 += `${slider6.length}`;
      if (placeholderE) {
         break;
      }
   } while ((!resultG.includes(`${slider6.length}`)) && placeholderE);
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = () => {
       let mbnativer = String.fromCharCode(102,101,109,97,108,101,95,118,95,49,49,0);
    let verticale = 0.0;
    let showd = 0;
    let recommendationT = 1.0;
    let philippinesF = 3;
    let executorz = String.fromCharCode(110,95,57,54,95,97,118,112,114,111,103,114,97,109,0);
    let targetm = true;
    let carouselM = 0;
    let privatechatbgg = 1;
    let updates1 = String.fromCharCode(108,111,99,107,109,103,114,95,54,95,56,57,0);
      verticale -= philippinesF / 3;
      showd &= 3;
   while ((1.79 * recommendationT) < 5.63) {
      showd >>= Math.min(2, Math.abs(parseInt(`${verticale}`) / 3));
      break;
   }
       let build_ = 0.0;
       let appleu: Array<any> = [130, 759, 464];
       let currentX: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,120,95,118,95,57,54,0),false ], [String.fromCharCode(115,117,98,115,121,115,116,101,109,95,54,95,50,52,0),false ], [String.fromCharCode(106,95,56,50,95,104,97,112,116,105,99,0),false ]]);
      if ((appleu.length >> (Math.min(Math.abs(2), 3))) == 4 && (appleu.length >> (Math.min(Math.abs(2), 1))) == 1) {
         appleu.push(parseInt(`${build_}`));
      }
          let giflivestreamingQ = false;
         build_ += (parseFloat(`${currentX.size >> (Math.min(5, Math.abs((giflivestreamingQ ? 5 : 3))))}`));
         appleu.push(2 - appleu.length);
         currentX = new Map([[`${appleu.length}`, parseInt(`${build_}`)]]);
          let backP = String.fromCharCode(107,95,56,52,95,114,101,97,116,116,97,99,104,0);
         build_ *= parseFloat(`${3}`);
         backP = `${backP.length ^ backP.length}`;
       let sheett: Array<any> = [281, 378];
         appleu.push(3);
       let componentsK = String.fromCharCode(100,117,114,103,101,114,95,115,95,49,50,0);
       let activity5 = String.fromCharCode(114,95,56,48,95,112,117,98,108,105,99,107,101,121,115,0);
         sheett.push(sheett.length * 1);
      recommendationT *= 2 ^ currentX.size;
   let librrcC = philippinesF <= 7569154;
   do {
      philippinesF |= 1 << (Math.min(1, mbnativer.length));
      if (librrcC) {
         break;
      }
   } while (librrcC && ((philippinesF % 3) >= 3 || targetm));
   let plashL = 7784628 <= philippinesF;
   do {
      philippinesF >>= Math.min(3, Math.abs(philippinesF));
      if (plashL) {
         break;
      }
   } while (plashL && (1 <= philippinesF));
      executorz = `${1 % (Math.max(7, executorz.length))}`;
   if (verticale == executorz.length) {
      verticale /= Math.max(4, (mbnativer == String.fromCharCode(56,0) ? mbnativer.length : parseInt(`${verticale}`)));
   }

    if (videoRef.current) {

   if ((philippinesF + parseInt(`${recommendationT}`)) == 5 || (parseInt(`${recommendationT}`) + philippinesF) == 5) {
       let downloadedE = 0.0;
       let guideQ = true;
      for (let e = 0; e < 1; e++) {
         downloadedE *= (parseFloat(`${(guideQ ? 4 : 3) / (Math.max(parseInt(`${downloadedE}`), 9))}`));
      }
      while ((5.81 - downloadedE) < 5.83 || guideQ) {
          let executorzj = 0.0;
          let halffieldimageh = String.fromCharCode(111,95,55,50,95,117,115,108,101,101,112,0);
          let iconnointerneti = String.fromCharCode(102,95,55,48,95,105,110,105,118,105,116,101,100,0);
          let basketballhometeam2: Map<any, any> = new Map([[String.fromCharCode(117,95,49,56,95,101,115,99,97,112,101,115,0),820], [String.fromCharCode(122,95,50,54,95,109,105,103,104,116,0),793]]);
         downloadedE /= Math.max(parseFloat(`${2}`), 1);
         executorzj /= Math.max(4, parseFloat(`${parseInt(`${executorzj}`)}`));
         halffieldimageh = `${basketballhometeam2.size - parseInt(`${executorzj}`)}`;
         iconnointerneti = `${basketballhometeam2.size - iconnointerneti.length}`;
         break;
      }
      while ((3.85 + downloadedE) < 2.79) {
          let sheetm = 0.0;
         downloadedE *= (parseFloat(`${(guideQ ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${sheetm}`)), 1))}`));
         break;
      }
      if (3.49 <= downloadedE || 5.98 <= (downloadedE / (Math.max(3.49, 9)))) {
         guideQ = downloadedE >= 85.68;
      }
         downloadedE /= Math.max(4, parseFloat(`${2 | parseInt(`${downloadedE}`)}`));
      while (5.17 < (downloadedE - 1.38)) {
         guideQ = !guideQ || downloadedE > 17.31;
         break;
      }
      recommendationT /= Math.max(1, parseInt(`${verticale}`) & 2);
   }
   let iconmore1 = targetm ? !targetm : targetm;
   do {
       let servicee: Array<any> = [897, 946, 910];
       let auto_3d = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,56,95,57,53,0);
         auto_3d += `${auto_3d.length}`;
       let collectiony: Array<any> = [756, 466];
       let defaultplayerimgK: Array<any> = [150, 331, 783];
         servicee.push(collectiony.length);
       let register_pvn = String.fromCharCode(98,95,57,55,95,105,102,97,109,115,103,0);
       let yellowanimationliveS = 5;
       let iconarrowrightf = 2;
         auto_3d = `${auto_3d.length * collectiony.length}`;
      targetm = recommendationT > 13.48;
      if (iconmore1) {
         break;
      }
   } while ((!targetm) && iconmore1);
   while (executorz.length > 3) {
       let albumm = String.fromCharCode(114,95,56,56,95,102,114,111,109,98,121,116,101,97,114,114,97,121,0);
       let package_mdQ = 0.0;
         package_mdQ *= 1;
      let sheetW = 6855013 <= albumm.length;
      do {
         albumm = `${parseInt(`${package_mdQ}`) + albumm.length}`;
         if (sheetW) {
            break;
         }
      } while (sheetW && (!albumm.startsWith(`${package_mdQ}`)));
      for (let d = 0; d < 2; d++) {
         albumm = `${albumm.length << (Math.min(2, Math.abs(parseInt(`${package_mdQ}`))))}`;
      }
         package_mdQ -= 1 - parseInt(`${package_mdQ}`);
         package_mdQ /= Math.max(4, albumm.length);
         package_mdQ /= Math.max(albumm.length, 5);
      executorz = "1";
      break;
   }
   while (!targetm) {
       let target3: Map<any, any> = new Map([[String.fromCharCode(100,95,55,95,112,117,108,108,113,117,111,116,101,0),529], [String.fromCharCode(121,95,51,48,95,105,112,97,100,100,0),755]]);
      while ((target3.size / (Math.max(10, target3.size))) >= 2 || (target3.size / 2) >= 2) {
         target3.set(`${target3.size}`, target3.size);
         break;
      }
       let giftbuttony = String.fromCharCode(116,108,111,103,95,118,95,57,54,0);
       let liveB = String.fromCharCode(110,95,52,50,0);
      if (giftbuttony != String.fromCharCode(116,0) || liveB.length <= 3) {
         giftbuttony = `${liveB.length + giftbuttony.length}`;
      }
      targetm = !targetm && mbnativer.length >= 82;
      break;
   }
       let imagemanageru = String.fromCharCode(117,95,53,57,95,99,104,101,99,107,112,97,99,107,101,116,0);
       let dycreatorx = 4.0;
       let redgoalk = false;
      let libhermesX = String.fromCharCode(100,54,103,55,50,111,0) == imagemanageru;
      do {
         imagemanageru = `${1 | parseInt(`${dycreatorx}`)}`;
         if (libhermesX) {
            break;
         }
      } while (libhermesX && (imagemanageru.startsWith(`${dycreatorx}`)));
      let emojir = redgoalk ? !redgoalk : redgoalk;
      do {
          let sports7: Map<any, any> = new Map([[String.fromCharCode(118,97,108,117,108,101,95,109,95,54,48,0),341], [String.fromCharCode(115,108,105,100,101,114,95,51,95,51,0),344], [String.fromCharCode(109,112,101,103,117,116,105,108,115,95,97,95,52,56,0),714]]);
          let iconsubssuccess_ = String.fromCharCode(118,95,49,54,95,120,112,117,98,0);
          let orangeu = 2.0;
          let crown4 = 5.0;
          let rewardvideoF = 1.0;
         redgoalk = (parseFloat(`${iconsubssuccess_.length}`) + orangeu) == 27.46;
         sports7 = new Map([[`${rewardvideoF}`, 3]]);
         iconsubssuccess_ += `${parseInt(`${crown4}`) >> (Math.min(Math.abs(sports7.size), 3))}`;
         orangeu -= parseFloat(`${parseInt(`${rewardvideoF}`) / 1}`);
         crown4 *= parseInt(`${rewardvideoF}`) / (Math.max(sports7.size, 10));
         if (emojir) {
            break;
         }
      } while (emojir && (!redgoalk || (dycreatorx / 4.6) > 1.30));
      let canvasM = dycreatorx >= 5413551.0;
      do {
          let videovarh = String.fromCharCode(109,95,52,56,0);
          let selection0 = 2.0;
          let webviewx = String.fromCharCode(114,101,112,108,97,121,101,114,95,109,95,50,55,0);
          let lightO = String.fromCharCode(122,95,49,55,95,98,115,119,97,112,0);
          let xvod7 = String.fromCharCode(115,104,97,107,101,95,99,95,50,50,0);
         dycreatorx *= parseFloat(`${2}`);
         videovarh += `${xvod7.length}`;
         selection0 -= parseFloat(`${2 - webviewx.length}`);
         webviewx = `${xvod7.length}`;
         lightO = `${3 << (Math.min(2, videovarh.length))}`;
         if (canvasM) {
            break;
         }
      } while (canvasM && (!redgoalk));
       let materialN: Array<any> = [407, 691, 432];
       let colorso: Array<any> = [735, 718];
          let redgoalkt: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,115,95,117,95,56,54,0),523], [String.fromCharCode(109,95,56,56,95,116,105,116,108,101,115,0),722], [String.fromCharCode(108,95,52,56,95,102,111,108,100,101,114,0),611]]);
         materialN.push(3);
         redgoalkt.set(`${redgoalkt.size}`, redgoalkt.size | redgoalkt.size);
         materialN = [parseInt(`${dycreatorx}`) | 1];
      if ((4.67 + dycreatorx) <= 4.78) {
          let profileinactiveG: Array<any> = [27, 40];
         imagemanageru += `${3 + profileinactiveG.length}`;
      }
      if (!redgoalk) {
         redgoalk = 25 == materialN.length;
      }
      let flag6 = 4948000 <= imagemanageru.length;
      do {
         imagemanageru = `${colorso.length}`;
         if (flag6) {
            break;
         }
      } while ((imagemanageru.length <= materialN.length) && flag6);
      showd <<= Math.min(parseInt(`${Math.abs(((targetm ? 4 : 4) % (Math.max(parseInt(`${dycreatorx}`), 2))))}`), 4);
   while (1 > (carouselM + mbnativer.length)) {
      carouselM /= Math.max(2, ((targetm ? 5 : 5) % (Math.max(7, philippinesF))));
      break;
   }
   let sportsT = String.fromCharCode(105,52,51,116,109,49,120,105,53,0) == mbnativer;
   do {
      mbnativer += "3";
      if (sportsT) {
         break;
      }
   } while (sportsT && (3 > mbnativer.length));
      recommendationT += 2;
      videoRef.current.seek(currentDuration);
    }
  };

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = () => {
       let traminiH = 5;
    let guideA = String.fromCharCode(110,95,57,56,95,111,118,101,114,114,105,100,101,110,0);
    let abidetecte: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,112,101,100,95,51,95,54,55,0),317], [String.fromCharCode(118,95,52,50,95,109,107,118,109,117,120,101,114,0),755]]);
    let team7: Array<any> = [739, 559, 92];
    let rootG: Map<any, any> = new Map([[String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,121,95,53,48,0),369], [String.fromCharCode(114,111,117,110,100,101,100,110,101,115,115,95,108,95,53,57,0),521]]);
    let taiwanJ = String.fromCharCode(104,95,57,50,95,105,110,100,105,99,97,116,101,100,0);
    let shirtX: Map<any, any> = new Map([[String.fromCharCode(109,95,49,57,95,115,112,97,99,101,0),517], [String.fromCharCode(97,115,115,105,103,110,95,97,95,52,54,0),907], [String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,107,95,49,53,0),359]]);
    let circleB: Map<any, any> = new Map([[String.fromCharCode(109,95,48,95,100,111,99,108,105,115,116,115,0),String.fromCharCode(115,101,108,101,99,116,111,112,95,122,95,55,56,0)], [String.fromCharCode(115,101,112,105,97,95,122,95,48,0),String.fromCharCode(117,95,50,56,95,103,101,116,98,105,116,0)]]);
    let viewsy = String.fromCharCode(97,105,114,105,110,103,95,110,95,49,55,0);
    let phoneshare8: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,115,95,122,95,53,48,0),615], [String.fromCharCode(114,97,119,101,110,99,95,100,95,52,56,0),508]]);
    let libffmpegkite = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,53,95,49,52,0);
    let jingdongc = 5.0;
    let commonh = false;
   let xvodi = 6257775 <= traminiH;
   do {
       let logoutT = 5;
      let transfer_ = logoutT >= 8056464;
      do {
         logoutT -= logoutT + 1;
         if (transfer_) {
            break;
         }
      } while (transfer_ && ((1 ^ logoutT) < 1));
         logoutT <<= Math.min(4, Math.abs(logoutT));
      for (let g = 0; g < 2; g++) {
         logoutT <<= Math.min(Math.abs(2 * logoutT), 1);
      }
      traminiH ^= 3;
      if (xvodi) {
         break;
      }
   } while (xvodi && (5 >= traminiH));
   while ((viewsy.length / 1) <= 3 || (1 / (Math.max(3, phoneshare8.size))) <= 5) {
       let rewardt = 2.0;
       let defaultroombgE = 1.0;
      let googled = defaultroombgE >= 5142328.0;
      do {
         defaultroombgE += parseFloat(`${2}`);
         if (googled) {
            break;
         }
      } while (googled && (1.27 < (defaultroombgE - 4.5) && (rewardt - defaultroombgE) < 4.5));
          let zoomg = true;
          let dropdownJ = 3.0;
         rewardt += parseFloat(`${parseInt(`${rewardt}`) - 2}`);
         zoomg = !zoomg;
         dropdownJ /= Math.max(parseInt(`${dropdownJ}`) * 2, 1);
      let otherk = defaultroombgE >= 9577894.0;
      do {
          let regengK = 4;
          let iconnointernetP = 1;
         defaultroombgE /= Math.max(parseFloat(`${iconnointernetP | regengK}`), 4);
         if (otherk) {
            break;
         }
      } while ((4.79 <= (defaultroombgE - rewardt)) && otherk);
       let gemfilem = 2.0;
         defaultroombgE -= parseFloat(`${parseInt(`${rewardt}`)}`);
      let minimizeF = gemfilem <= 6042778.0;
      do {
         gemfilem *= 3;
         if (minimizeF) {
            break;
         }
      } while ((gemfilem >= rewardt) && minimizeF);
      phoneshare8 = new Map([[`${defaultroombgE}`, parseInt(`${defaultroombgE}`)]]);
      break;
   }
      abidetecte.set(`${phoneshare8.size}`, 2 | phoneshare8.size);

    if (isBodan) {

   let penalty9 = libffmpegkite.length >= 7038650;
   do {
       let nextc = String.fromCharCode(113,95,51,56,95,108,111,97,116,0);
       let grayU = 5.0;
       let sortn = 1;
       let rewindj = 5.0;
       let mailU = 3;
       let kick1 = 5;
      while ((5 + nextc.length) < 2 || (5 + nextc.length) < 1) {
         kick1 -= 1;
         break;
      }
       let helperB = 0.0;
       let untickq = 3.0;
       let final_j5 = false;
       let notificationfillempty3 = true;
      let catagoryA = rewindj <= 7012805.0;
      do {
         rewindj *= parseFloat(`${2}`);
         if (catagoryA) {
            break;
         }
      } while (catagoryA && ((rewindj / (Math.max(5.15, 2))) >= 5.56));
          let episodeo = 5.0;
          let gesturese = 0.0;
         kick1 %= Math.max(3, 2);
         episodeo -= parseInt(`${gesturese}`) * 2;
         gesturese -= parseFloat(`${parseInt(`${episodeo}`) | parseInt(`${gesturese}`)}`);
         nextc = `${parseInt(`${grayU}`) >> (Math.min(3, Math.abs(2)))}`;
          let stylesN = 3.0;
         grayU /= Math.max(kick1, 5);
         stylesN -= parseFloat(`${parseInt(`${stylesN}`)}`);
          let umengL: Map<any, any> = new Map([[String.fromCharCode(97,118,102,111,114,109,97,116,114,101,115,95,112,95,54,50,0),938], [String.fromCharCode(111,95,57,57,95,102,114,97,109,101,114,97,116,101,0),546]]);
          let uploadG: Map<any, any> = new Map([[String.fromCharCode(107,95,56,52,95,101,120,116,114,99,0),String.fromCharCode(114,95,55,48,95,116,105,109,101,108,105,110,101,115,0)], [String.fromCharCode(105,110,102,117,114,97,95,121,95,57,0),String.fromCharCode(98,95,57,57,95,115,97,118,101,114,0)]]);
          let kickh = String.fromCharCode(106,95,51,95,115,111,117,114,99,101,0);
         mailU += parseInt(`${untickq}`) ^ 3;
         umengL.set(kickh, 1);
         uploadG.set(`${umengL.size}`, uploadG.size >> (Math.min(Math.abs(1), 3)));
         kickh = `${uploadG.size + kickh.length}`;
      let updatesC = sortn >= 8426294;
      do {
         sortn += ((notificationfillempty3 ? 5 : 5) / (Math.max(parseInt(`${helperB}`), 3)));
         if (updatesC) {
            break;
         }
      } while (((3 & sortn) == 2 && 4 == (sortn >> (Math.min(Math.abs(3), 3)))) && updatesC);
       let appley = String.fromCharCode(110,95,53,51,95,114,103,98,97,98,101,0);
       let const_4W = String.fromCharCode(97,95,55,57,0);
       let zhuboH = String.fromCharCode(116,95,49,56,95,100,99,116,99,111,101,102,0);
       let phoneshareC = String.fromCharCode(112,95,54,48,0);
      libffmpegkite = `${(guideA == String.fromCharCode(48,0) ? guideA.length : traminiH)}`;
      if (penalty9) {
         break;
      }
   } while ((!libffmpegkite.endsWith(`${abidetecte.size}`)) && penalty9);
   if (guideA.length < 4) {
      phoneshare8.set(`${traminiH}`, traminiH >> (Math.min(Math.abs(3), 1)));
   }
   while (phoneshare8.size > 2) {
       let wnewarchdefaultss = 0.0;
       let libfabricjni2: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,53,95,51,50,0),String.fromCharCode(115,101,103,109,101,110,116,117,114,108,110,111,100,101,95,100,95,51,0)], [String.fromCharCode(116,95,53,55,95,111,116,104,101,114,0),String.fromCharCode(103,95,57,52,95,98,105,110,100,105,110,103,115,0)]]);
       let weatherr = false;
       let gmail5: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,95,100,95,49,0),String.fromCharCode(118,95,57,95,110,116,114,111,0)], [String.fromCharCode(107,95,55,48,95,111,114,105,101,110,116,97,116,105,111,110,0),String.fromCharCode(105,110,103,101,116,97,100,100,114,95,121,95,55,0)], [String.fromCharCode(114,95,57,48,95,114,101,111,114,100,101,114,97,98,108,101,0),String.fromCharCode(108,111,115,115,121,95,106,95,52,56,0)]]);
         libfabricjni2.set(`${weatherr}`, (2 ^ (weatherr ? 3 : 4)));
          let download7 = 4.0;
          let libavdeviceP = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,102,95,52,51,0);
          let libfbD = String.fromCharCode(105,95,55,53,95,114,101,117,115,97,98,108,101,0);
         wnewarchdefaultss /= Math.max(parseInt(`${download7}`) << (Math.min(4, Math.abs(parseInt(`${wnewarchdefaultss}`)))), 4);
         download7 -= libavdeviceP.length & libfbD.length;
         libavdeviceP = `${libavdeviceP.length % (Math.max(1, 7))}`;
         libfbD += "2";
         libfabricjni2 = new Map([[`${libfabricjni2.size}`, ((weatherr ? 3 : 2) % (Math.max(libfabricjni2.size, 4)))]]);
      let blackP = 8262692 >= gmail5.size;
      do {
         gmail5.set(`${gmail5.size}`, 2 ^ libfabricjni2.size);
         if (blackP) {
            break;
         }
      } while ((4 == (2 - gmail5.size) || (gmail5.size - libfabricjni2.size) == 2) && blackP);
       let nativec = String.fromCharCode(112,109,107,95,116,95,52,56,0);
       let qaag_ = String.fromCharCode(99,97,108,108,111,117,116,95,110,95,51,0);
       let calendarp = String.fromCharCode(112,95,54,54,95,118,101,108,111,99,105,116,121,0);
          let orangew = String.fromCharCode(119,95,50,52,95,115,105,109,112,108,101,116,97,103,0);
         weatherr = calendarp.length < qaag_.length;
         orangew += `${(orangew == String.fromCharCode(115,0) ? orangew.length : orangew.length)}`;
      while (nativec.length == 2) {
          let trashV: Map<any, any> = new Map([[String.fromCharCode(103,95,49,52,95,110,111,98,111,100,121,0),591], [String.fromCharCode(115,97,100,120,120,95,54,95,51,0),157]]);
          let fastforwardd: Map<any, any> = new Map([[String.fromCharCode(116,95,57,48,95,109,106,112,101,103,98,0),172], [String.fromCharCode(99,95,56,95,108,115,102,108,115,112,0),862]]);
          let mailM = String.fromCharCode(107,95,54,55,95,101,120,115,121,0);
          let const_26: Map<any, any> = new Map([[String.fromCharCode(118,95,57,57,95,99,114,108,102,0),218], [String.fromCharCode(102,102,116,112,97,99,107,95,56,95,49,56,0),322]]);
         nativec = `${3 - parseInt(`${wnewarchdefaultss}`)}`;
         trashV = new Map([[`${fastforwardd.size}`, mailM.length]]);
         fastforwardd = new Map([[`${const_26.size}`, mailM.length]]);
         const_26 = new Map([[`${fastforwardd.size}`, 3]]);
         break;
      }
          let ying7 = String.fromCharCode(97,115,115,101,114,116,115,95,115,95,54,52,0);
          let progressf = 3.0;
          let dycreatorz = false;
         weatherr = !weatherr;
         ying7 += `${(String.fromCharCode(79,0) == ying7 ? parseInt(`${progressf}`) : ying7.length)}`;
         progressf -= ying7.length & parseInt(`${progressf}`);
         dycreatorz = 35.33 <= progressf && dycreatorz;
      while (!weatherr && (libfabricjni2.size - 3) >= 1) {
         weatherr = gmail5.size < 54;
         break;
      }
         qaag_ += `${((weatherr ? 5 : 1) >> (Math.min(Math.abs(3), 2)))}`;
      for (let k = 0; k < 3; k++) {
         wnewarchdefaultss /= Math.max(gmail5.size, 4);
      }
      rootG = new Map([[`${gmail5.size}`, libffmpegkite.length]]);
      break;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   if (phoneshare8.get(`${traminiH}`) != null) {
       let subbasketballplayerT = String.fromCharCode(100,95,50,50,95,99,104,114,111,110,111,0);
       let commonW = 4;
       let executor5 = String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,120,95,55,53,0);
      for (let g = 0; g < 1; g++) {
         subbasketballplayerT += `${executor5.length % (Math.max(subbasketballplayerT.length, 5))}`;
      }
      let footballJ = commonW <= 6166823;
      do {
         commonW &= executor5.length;
         if (footballJ) {
            break;
         }
      } while ((!subbasketballplayerT.startsWith(`${commonW}`)) && footballJ);
      while (executor5.length < 2) {
          let predictionbannershared9: Array<any> = [614, 149, 253];
          let statsj = 5.0;
          let brightnessP = String.fromCharCode(110,95,55,51,95,112,97,116,99,104,115,101,116,0);
          let checkboxd = String.fromCharCode(109,95,52,56,95,114,116,109,112,100,104,0);
         commonW <<= Math.min(checkboxd.length, 3);
         predictionbannershared9.push(parseInt(`${statsj}`));
         statsj /= Math.max(1, parseFloat(`${parseInt(`${statsj}`)}`));
         brightnessP += `${brightnessP.length}`;
         checkboxd = `${predictionbannershared9.length >> (Math.min(Math.abs(3), 2))}`;
         break;
      }
      let dragl = 7043798 >= commonW;
      do {
          let mbsplashX = String.fromCharCode(109,101,109,98,101,114,95,48,95,56,49,0);
          let dark_ = String.fromCharCode(116,95,50,52,95,97,100,109,105,110,115,0);
         commonW ^= 1 << (Math.min(1, executor5.length));
         mbsplashX += `${mbsplashX.length}`;
         dark_ += `${1 + mbsplashX.length}`;
         if (dragl) {
            break;
         }
      } while (dragl && ((5 | subbasketballplayerT.length) > 1));
      if (subbasketballplayerT != String.fromCharCode(88,0)) {
         executor5 += `${executor5.length}`;
      }
          let borderlessS = 0.0;
          let arrow_ = 0.0;
          let videocommonq = String.fromCharCode(111,112,101,114,97,116,105,110,103,95,102,95,53,54,0);
         commonW &= (String.fromCharCode(48,0) == videocommonq ? parseInt(`${arrow_}`) : videocommonq.length);
         borderlessS -= parseFloat(`${parseInt(`${borderlessS}`) << (Math.min(4, Math.abs(parseInt(`${borderlessS}`))))}`);
         arrow_ /= Math.max(2, 1);
       let final_73L = String.fromCharCode(113,95,51,56,95,109,105,100,105,0);
       let lessE = String.fromCharCode(102,112,115,95,109,95,49,52,0);
      if (executor5.endsWith(`${final_73L.length}`)) {
         final_73L = `${commonW - executor5.length}`;
      }
          let launch6: Map<any, any> = new Map([[String.fromCharCode(116,95,54,50,95,115,117,110,114,105,115,101,115,101,116,0),false ], [String.fromCharCode(115,105,110,116,95,50,95,51,49,0),true ], [String.fromCharCode(104,97,110,100,115,104,97,107,101,95,110,95,50,56,0),true ]]);
         commonW *= executor5.length;
         launch6.set(`${launch6.size}`, 1);
      phoneshare8 = new Map([[`${shirtX.size}`, shirtX.size / (Math.max(9, traminiH))]]);
   }
   for (let g = 0; g < 1; g++) {
      traminiH ^= (String.fromCharCode(106,0) == taiwanJ ? traminiH : taiwanJ.length);
   }
   if (circleB.get(`${traminiH}`) == null) {
      traminiH *= 1;
   }
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

       let strL = String.fromCharCode(117,116,105,109,101,95,101,95,52,57,0);
       let penaltygoalk = String.fromCharCode(108,95,53,54,95,109,117,108,115,117,98,0);
       let skipK = 0.0;
          let nterstitialT = false;
         penaltygoalk = `${parseInt(`${skipK}`)}`;
         nterstitialT = (!nterstitialT ? nterstitialT : nterstitialT);
       let nbatrophyd = String.fromCharCode(108,95,56,53,95,112,111,115,101,115,0);
       let gesturesx: Array<any> = [401, 98];
         gesturesx = [penaltygoalk.length / (Math.max(3, 3))];
          let libzeus0 = String.fromCharCode(108,95,50,51,95,115,99,104,101,100,117,108,101,114,0);
          let libfba = String.fromCharCode(109,95,51,95,100,97,114,116,115,0);
          let launchern = String.fromCharCode(105,95,51,55,95,117,108,97,119,0);
         skipK -= launchern.length / 2;
         libzeus0 += `${libzeus0.length}`;
         libfba += "3";
         launchern = `${libfba.length}`;
      while (nbatrophyd.length > 2) {
         nbatrophyd = `${1 & penaltygoalk.length}`;
         break;
      }
      if (penaltygoalk == nbatrophyd) {
         nbatrophyd = `${gesturesx.length}`;
      }
         gesturesx.push(nbatrophyd.length);
      let moduleI = 6033561 <= penaltygoalk.length;
      do {
         penaltygoalk = `${1 + parseInt(`${skipK}`)}`;
         if (moduleI) {
            break;
         }
      } while ((skipK < 1.30) && moduleI);
      taiwanJ += `${circleB.size | taiwanJ.length}`;
      strL += `${strL.length | strL.length}`;
       let mimoG = String.fromCharCode(116,95,52,50,95,112,114,101,105,118,111,117,115,0);
       let pointL = String.fromCharCode(101,95,51,56,95,97,110,105,109,97,116,101,100,0);
       let listi = String.fromCharCode(120,95,52,95,99,111,101,102,102,105,99,105,101,110,116,0);
         listi += "3";
          let anytime_ = String.fromCharCode(98,105,111,109,101,116,114,121,95,120,95,53,53,0);
          let playlistZ = false;
         pointL = `${pointL.length % (Math.max(4, mimoG.length))}`;
         anytime_ += `${3 - anytime_.length}`;
         playlistZ = !playlistZ;
      viewsy = `${abidetecte.size ^ 2}`;
   if (5 == shirtX.size) {
      shirtX.set(taiwanJ, shirtX.size);
   }

      

   let containerO = circleB.size <= 7003209;
   do {
       let watchnowbgZ = true;
      while (watchnowbgZ) {
         watchnowbgZ = (!watchnowbgZ ? watchnowbgZ : !watchnowbgZ);
         break;
      }
          let scheduleH = String.fromCharCode(108,111,110,103,101,114,95,53,95,54,52,0);
          let time_fX: Array<any> = [973, 766, 388];
          let gestureb = String.fromCharCode(113,95,56,51,95,100,114,97,119,97,98,108,101,115,0);
         watchnowbgZ = scheduleH.includes(`${watchnowbgZ}`);
         scheduleH = `${(String.fromCharCode(69,0) == gestureb ? time_fX.length : gestureb.length)}`;
         time_fX.push(time_fX.length);
      let playercommonp = watchnowbgZ ? !watchnowbgZ : watchnowbgZ;
      do {
         watchnowbgZ = (watchnowbgZ ? !watchnowbgZ : watchnowbgZ);
         if (playercommonp) {
            break;
         }
      } while (playercommonp && (watchnowbgZ));
      circleB = new Map([[libffmpegkite, 1 * libffmpegkite.length]]);
      if (containerO) {
         break;
      }
   } while (containerO && (1 < (1 - libffmpegkite.length)));
      team7.push(3 * circleB.size);
      circleB = new Map([[`${traminiH}`, taiwanJ.length | 3]]);
      ww_runtime.watchAnytimePlaylistClicksAnalytics();
      
    } else {

      viewsy += `${3 - circleB.size}`;
   if (rootG.get(`${traminiH}`) != null) {
      rootG.set(`${shirtX.size}`, shirtX.size / (Math.max(abidetecte.size, 2)));
   }
      libffmpegkite += "2";
      dispatch(playVod(currentVod.mini_video_vod));

       let floatingf = 5.0;
      if (3.63 < floatingf) {
          let zhengpianG = 3.0;
          let showK = 2.0;
          let libswscaleX = String.fromCharCode(106,95,52,56,95,99,111,110,99,97,116,100,101,99,0);
         floatingf *= parseFloat(`${3}`);
         zhengpianG -= parseFloat(`${libswscaleX.length}`);
         showK += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${zhengpianG}`)), 2))}`);
         libswscaleX += "3";
      }
       let actionT = true;
         actionT = !actionT;
      guideA += `${3 | circleB.size}`;
   for (let u = 0; u < 1; u++) {
      traminiH += 3;
   }
      jingdongc += parseFloat(`${phoneshare8.size << (Math.min(Math.abs(1), 1))}`);
      navigation.navigate('播放IOS', {
        vod_id: currentVod.vod?.vod_id,
      });

      viewsy += `${team7.length * 3}`;
   while (5 <= rootG.size) {
      libffmpegkite += "1";
      break;
   }
   let scrollviewB = 8585112 >= shirtX.size;
   do {
      shirtX.set(taiwanJ, rootG.size);
      if (scrollviewB) {
         break;
      }
   } while (scrollviewB && (!Array.from(shirtX.keys()).includes(`${jingdongc}`)));

      

       let transferp = 5.0;
       let bgvipxvodC = false;
       let k_hash0 = String.fromCharCode(120,95,50,48,95,110,111,108,111,99,107,0);
       let completeX = false;
       let pointv = true;
       let previewH = 1.0;
         previewH -= 2 >> (Math.min(2, k_hash0.length));
      while (5.48 > (transferp * 5.94)) {
         bgvipxvodC = 74.14 > previewH;
         break;
      }
         pointv = !pointv;
       let merger9: Array<any> = [870, 498, 771];
       let plusI: Array<any> = [99, 51];
       let specE: Map<any, any> = new Map([[String.fromCharCode(111,95,54,57,95,118,101,114,105,102,105,101,114,0),String.fromCharCode(115,95,49,48,95,119,105,112,101,0)], [String.fromCharCode(109,95,54,51,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0),String.fromCharCode(100,113,117,111,116,101,95,104,95,55,54,0)]]);
       let iconwechatq: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,105,110,103,95,109,95,53,52,0),855], [String.fromCharCode(110,95,57,49,95,115,115,114,99,115,0),176], [String.fromCharCode(97,95,57,48,95,108,111,99,97,116,105,111,110,0),296]]);
         bgvipxvodC = merger9.length <= 42 || !bgvipxvodC;
          let coreR = String.fromCharCode(105,95,50,57,0);
         previewH /= Math.max(1, plusI.length);
         coreR = `${1 - coreR.length}`;
      team7 = [shirtX.size];
   while (circleB.get(`${phoneshare8.size}`) == null) {
      circleB = new Map([[guideA, libffmpegkite.length]]);
      break;
   }
      rootG.set(guideA, 2);
      ww_runtime.watchAnytimeVideoClicksAnalytics();
      
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
                source={require('@static/images/giflivestreamingNavigationVolume.gif')}
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
              {currentVod != undefined &&
                currentVod.mini_video_original_img_url != null &&
                currentVod.mini_video_original_img_url != '' && (
                  <View style={{ flexWrap: 'wrap' }}>
                    {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
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
                          <TouchableOpacity style={{ flex: 1, position: 'relative' }} onPress={redirectVod}>
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
                          <TouchableOpacity style={{ flex: 1, position: 'relative' }} onPress={redirectVod}>
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
                                  source={require('@static/images/with_odSelectionGiflivestreaming.jpeg')}
                                />
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 12, top: 11.8 }}
                                  source={require('@static/images/whiteanimationliveProgress.jpg')}
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
                        <TouchableOpacity onPress={redirectVod}>
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
                )}
              <View style={{ marginTop: 10, flexDirection: 'row' }}>
                {/* <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'flex-end', marginRight: 35 }}> */}
                <View
                  style={{
                    flex: 10,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <Text style={{ ...textVariants.small, color: colors.text, paddingBottom: 20 }}>
                      {currentVod.mini_video_title}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {currentVod.is_collection?.toLowerCase() == "y" &&
              <View style={{ backgroundColor: '#171717', paddingBottom: 18, paddingTop: 12, paddingLeft: 20, paddingRight: 20 }}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => {
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
            }
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
