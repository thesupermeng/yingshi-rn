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
import PlayIcon from '@static/images/librrcWhiteanimationlive.svg';
import PauseIcon from '@static/images/refreshStringsLibjsi.svg';
import PlayZhengPianIcon from '@static/images/scheduleJingdong.svg';
import PlayBoDanIcon from '@static/images/inouttargetredRedirect.svg';

import FastImage from '../common/wawa_iconarrowrightblack';
import { Slider } from '@rneui/themed';
import { useAppDispatch } from '@hooks/wawa_root';
import { useNavigation, useTheme } from '@react-navigation/native';
import { playVod, viewPlaylistDetails } from '@redux/actions/wawa_indicator';
import HejiIcon from '@static/images/turnFlyerIconclosewhitebg.svg';
import ExpandUpIcon from '@static/images/disconnectedSettingGradlew.svg';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';

interface wawaAwayShow {
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
}: wawaAwayShow) {
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
       let recommendationX = String.fromCharCode(119,95,50,55,95,109,109,120,101,120,116,0);
    let redscoreballk: Map<any, any> = new Map([[String.fromCharCode(121,95,57,50,95,100,101,112,101,110,100,101,110,99,105,101,115,0),307], [String.fromCharCode(116,121,112,95,52,95,52,55,0),583], [String.fromCharCode(118,95,50,53,95,98,97,99,107,115,105,100,101,0),660]]);
    let issubq = String.fromCharCode(97,116,116,97,99,107,95,97,95,57,55,0);
    let favoritel = 5.0;
    let applicationO = String.fromCharCode(116,95,50,57,95,100,112,99,109,0);
    let loginsuccess2 = 4;
    let smallsoundp = 0;
    let profileframew = String.fromCharCode(114,95,54,55,95,112,115,101,117,100,111,0);
    let anewarchdefaults8 = 5;
    let libtanL = String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,101,95,54,50,0);
    let round1 = 0.0;
    let iconpipexpandp = 2;
    let libaner = 5.0;
    let handler2 = 4;
    let encryptf = 5.0;
    let libreactnativeblobk = 2.0;
   if ((loginsuccess2 ^ 5) == 4) {
      recommendationX = `${parseInt(`${favoritel}`)}`;
   }
       let goalt = false;
       let indexD = String.fromCharCode(97,117,103,109,101,110,116,95,52,95,49,53,0);
       let promotionj = String.fromCharCode(112,95,54,51,0);
         indexD = `${(promotionj == String.fromCharCode(68,0) ? (goalt ? 3 : 4) : promotionj.length)}`;
         indexD += `${indexD.length}`;
      round1 /= Math.max(parseFloat(`${redscoreballk.size * 2}`), 5);
       let logoa = 2;
       let bingm = 3;
       let videocommonH: Array<any> = [104, 864, 720];
          let tempnodata6 = String.fromCharCode(110,95,52,52,95,108,115,102,108,115,112,100,0);
          let macauO = 2.0;
          let assistD = 1;
         bingm >>= Math.min(Math.abs(bingm * 1), 2);
         tempnodata6 += `${1 << (Math.min(1, Math.abs(assistD)))}`;
         macauO -= parseFloat(`${tempnodata6.length}`);
         assistD &= (String.fromCharCode(116,0) == tempnodata6 ? tempnodata6.length : parseInt(`${macauO}`));
         bingm >>= Math.min(Math.abs(videocommonH.length & logoa), 5);
          let dragb = 4.0;
          let tempw = String.fromCharCode(107,95,57,53,0);
          let iconsubssuccessU = 4.0;
         bingm <<= Math.min(Math.abs(videocommonH.length ^ bingm), 1);
         dragb /= Math.max(1, parseFloat(`${tempw.length}`));
         tempw = "3";
         iconsubssuccessU -= parseFloat(`${2 + tempw.length}`);
          let shootyesgoalT: Array<any> = [521, 291];
          let reactnavigation2 = String.fromCharCode(119,105,116,110,101,115,115,95,116,95,53,49,0);
          let bridgeU = true;
         bingm |= shootyesgoalT.length / (Math.max(7, bingm));
         shootyesgoalT.push(reactnavigation2.length);
         reactnavigation2 = `${(reactnavigation2.length * (bridgeU ? 1 : 1))}`;
      while (2 == (bingm + logoa)) {
          let shielddonem: Map<any, any> = new Map([[String.fromCharCode(102,95,52,51,95,100,105,118,105,100,101,110,100,0),249], [String.fromCharCode(110,95,53,48,95,115,112,108,97,110,101,0),265]]);
          let kickS = String.fromCharCode(115,117,98,112,105,120,101,108,95,50,95,55,50,0);
          let androidp = 2.0;
         logoa |= parseInt(`${androidp}`) >> (Math.min(Math.abs(shielddonem.size), 2));
         shielddonem.set(kickS, kickS.length);
         break;
      }
         logoa -= 3 - bingm;
         bingm |= logoa * videocommonH.length;
      for (let b = 0; b < 3; b++) {
          let default_rkL = String.fromCharCode(106,95,49,52,95,112,97,100,100,101,100,0);
          let plashi: Map<any, any> = new Map([[String.fromCharCode(121,95,55,55,95,99,111,111,108,100,111,119,110,115,0),593], [String.fromCharCode(105,110,110,101,114,95,107,95,53,49,0),798]]);
         bingm *= 1;
         default_rkL = "2";
         plashi.set(`${default_rkL}`, 2 & default_rkL.length);
      }
      for (let w = 0; w < 1; w++) {
         bingm /= Math.max(logoa, 5);
      }
      loginsuccess2 %= Math.max(5, 3);
      round1 /= Math.max(3, parseFloat(`${3}`));
   for (let v = 0; v < 3; v++) {
       let interneth = String.fromCharCode(112,95,55,56,95,116,105,109,101,122,111,110,101,0);
       let kuaishouo: Array<any> = [133, 876, 358];
       let hook0 = 1;
      let phonew = kuaishouo.length >= 6217365;
      do {
          let showlessU: Map<any, any> = new Map([[String.fromCharCode(106,95,57,53,95,118,105,100,101,111,99,111,100,101,99,0),String.fromCharCode(120,112,111,114,116,101,100,95,106,95,49,57,0)], [String.fromCharCode(104,95,53,52,95,105,109,97,103,101,0),String.fromCharCode(106,95,49,56,95,110,117,109,101,114,105,99,97,108,0)]]);
          let libfollyl = 4.0;
          let chats = 2.0;
         kuaishouo = [(interneth == String.fromCharCode(65,0) ? kuaishouo.length : interneth.length)];
         showlessU.set(`${chats}`, parseInt(`${chats}`));
         libfollyl /= Math.max(parseFloat(`${parseInt(`${chats}`)}`), 5);
         if (phonew) {
            break;
         }
      } while (phonew && ((interneth.length - 4) > 2 && (4 - interneth.length) > 5));
      if ((kuaishouo.length + interneth.length) <= 3 || (interneth.length + kuaishouo.length) <= 3) {
          let default_58 = 4.0;
          let adultj = String.fromCharCode(107,101,121,119,111,114,100,115,95,122,95,48,0);
          let chat4 = 5.0;
          let penaltyshootnogoal0 = String.fromCharCode(118,95,54,52,95,97,117,120,100,97,116,97,0);
         kuaishouo = [parseInt(`${chat4}`) + 3];
         default_58 -= parseFloat(`${adultj.length}`);
         adultj += `${adultj.length / (Math.max(penaltyshootnogoal0.length, 6))}`;
         chat4 += parseFloat(`${adultj.length + 3}`);
         penaltyshootnogoal0 += `${penaltyshootnogoal0.length * parseInt(`${default_58}`)}`;
      }
      for (let o = 0; o < 3; o++) {
          let lesse = 4.0;
          let tailm = String.fromCharCode(115,95,53,56,95,99,104,97,114,108,101,110,0);
          let iconarrowleftG: Array<any> = [String.fromCharCode(118,97,99,117,117,109,95,52,95,52,50,0), String.fromCharCode(117,95,55,95,115,116,97,99,104,0)];
          let smallbrightnessB = 3.0;
          let const_8G = 5.0;
         hook0 |= tailm.length << (Math.min(Math.abs(3), 5));
         lesse += parseInt(`${lesse}`) - parseInt(`${const_8G}`);
         tailm += `${parseInt(`${const_8G}`) & iconarrowleftG.length}`;
         iconarrowleftG.push(parseInt(`${const_8G}`));
         smallbrightnessB /= Math.max(3, 3);
      }
         kuaishouo.push(kuaishouo.length - 1);
          let mbbannerY = String.fromCharCode(119,95,54,56,95,114,97,119,0);
         kuaishouo = [(String.fromCharCode(75,0) == mbbannerY ? mbbannerY.length : interneth.length)];
      while (2 <= (kuaishouo.length / (Math.max(1, 8))) && 3 <= (kuaishouo.length / 1)) {
          let goalG: Map<any, any> = new Map([[String.fromCharCode(122,95,56,52,95,117,110,115,117,112,112,111,114,116,101,100,0),136], [String.fromCharCode(103,95,57,56,95,100,101,99,111,100,101,112,108,97,110,101,0),835]]);
         hook0 |= interneth.length;
         goalG.set(`${goalG.size}`, goalG.size - goalG.size);
         break;
      }
      for (let a = 0; a < 1; a++) {
         kuaishouo.push(hook0 ^ 3);
      }
          let stepv = 3;
          let dacccfaabfbcbadeebddcabacdffdbd = String.fromCharCode(99,95,49,48,48,95,104,97,115,104,101,114,0);
          let linkL = String.fromCharCode(99,104,97,112,95,119,95,50,48,0);
         kuaishouo.push(3);
         stepv &= (dacccfaabfbcbadeebddcabacdffdbd == String.fromCharCode(82,0) ? stepv : dacccfaabfbcbadeebddcabacdffdbd.length);
         linkL += `${3 | linkL.length}`;
      for (let j = 0; j < 2; j++) {
          let baiduB = false;
         kuaishouo = [kuaishouo.length];
         baiduB = (baiduB ? baiduB : !baiduB);
      }
      redscoreballk.set(`${hook0}`, 2 - hook0);
   }
   let clockl = favoritel <= 9525762.0;
   do {
      favoritel += (String.fromCharCode(106,0) == libtanL ? parseInt(`${libaner}`) : libtanL.length);
      if (clockl) {
         break;
      }
   } while ((favoritel >= recommendationX.length) && clockl);
   for (let u = 0; u < 2; u++) {
      applicationO = `${redscoreballk.size & 2}`;
   }
      smallsoundp %= Math.max(redscoreballk.size * iconpipexpandp, 1);
       let connectionY = String.fromCharCode(121,95,50,50,95,100,101,110,115,101,0);
      if (2 == connectionY.length) {
         connectionY += `${connectionY.length}`;
      }
      if (connectionY.length <= connectionY.length) {
          let malaysiag = String.fromCharCode(97,95,57,50,95,122,105,112,112,101,100,0);
          let weather3 = 1;
          let readu = 2.0;
          let unreadD = String.fromCharCode(116,95,55,55,95,108,105,115,116,105,110,103,0);
          let liblogger1: Array<any> = [852, 996];
         connectionY += `${malaysiag.length / (Math.max(3, 9))}`;
         malaysiag = `${liblogger1.length & 1}`;
         weather3 <<= Math.min(unreadD.length, 5);
         readu += parseFloat(`${weather3}`);
         unreadD = `${unreadD.length - 1}`;
         liblogger1.push(weather3);
      }
       let guidew: Array<any> = [81, 271, 346];
      iconpipexpandp %= Math.max(loginsuccess2 - 2, 3);
      libtanL = `${(libtanL == String.fromCharCode(52,0) ? libtanL.length : parseInt(`${round1}`))}`;
      libtanL += `${applicationO.length + 1}`;
   while (profileframew.length <= 5) {
      issubq = `${parseInt(`${favoritel}`)}`;
      break;
   }
      applicationO = `${iconpipexpandp}`;
      iconpipexpandp ^= 3 << (Math.min(5, Math.abs(redscoreballk.size)));
   for (let u = 0; u < 1; u++) {
      smallsoundp -= 1;
   }
   let singaporeB = 6457762 <= smallsoundp;
   do {
      smallsoundp ^= 2 + smallsoundp;
      if (singaporeB) {
         break;
      }
   } while (((redscoreballk.size * 1) > 2 || (1 * redscoreballk.size) > 4) && singaporeB);
      loginsuccess2 /= Math.max(4, iconpipexpandp);
      redscoreballk = new Map([[recommendationX, (String.fromCharCode(69,0) == profileframew ? recommendationX.length : profileframew.length)]]);
       let libcxxcomponentsJ = false;
       let arrowdownN = String.fromCharCode(98,95,54,50,95,109,101,109,120,0);
      if (libcxxcomponentsJ) {
          let feedbackV = String.fromCharCode(112,95,53,56,95,99,111,115,116,115,0);
          let baidu9 = 4.0;
         libcxxcomponentsJ = !libcxxcomponentsJ;
         feedbackV = "3";
         baidu9 -= parseFloat(`${2}`);
      }
      for (let f = 0; f < 3; f++) {
         arrowdownN += "1";
      }
      loginsuccess2 -= 3 - issubq.length;
   let sliderY = favoritel <= 6360558.0;
   do {
      favoritel *= 3;
      if (sliderY) {
         break;
      }
   } while (sliderY && (2.95 == favoritel));
   if (libtanL.includes(`${round1}`)) {
       let iconarrowleftB = false;
       let baidup = String.fromCharCode(110,95,53,56,95,114,101,109,97,116,114,105,120,105,110,103,0);
       let playlisty = String.fromCharCode(114,101,103,117,108,97,114,95,104,95,55,0);
       let rewardr: Array<any> = [546, 747];
      if (5 == (2 & playlisty.length) && 5 == (2 & playlisty.length)) {
         playlisty = `${((iconarrowleftB ? 4 : 2) / (Math.max(1, 2)))}`;
      }
       let iconcalendarf = String.fromCharCode(98,95,48,95,105,110,118,105,115,105,98,108,101,0);
       let colorsz = String.fromCharCode(112,114,111,118,105,100,101,95,54,95,50,50,0);
       let mbbannerB = true;
       let catagoryw = false;
      while (5 > baidup.length) {
         baidup = `${3 / (Math.max(8, playlisty.length))}`;
         break;
      }
         catagoryw = iconarrowleftB;
         colorsz = `${(rewardr.length - (iconarrowleftB ? 4 : 1))}`;
         colorsz = `${(String.fromCharCode(101,0) == baidup ? colorsz.length : baidup.length)}`;
      if ((rewardr.length + iconcalendarf.length) <= 1 || 1 <= (iconcalendarf.length + rewardr.length)) {
          let bggradientu = String.fromCharCode(115,116,121,108,101,95,97,95,51,57,0);
         rewardr = [(bggradientu == String.fromCharCode(68,0) ? bggradientu.length : (catagoryw ? 4 : 3))];
      }
          let libpangleflippedw = 5.0;
         iconarrowleftB = (64 > ((iconarrowleftB ? 64 : baidup.length) + baidup.length));
         libpangleflippedw *= parseInt(`${libpangleflippedw}`) << (Math.min(Math.abs(parseInt(`${libpangleflippedw}`)), 2));
      while ((4 >> (Math.min(2, rewardr.length))) <= 2) {
          let hnewarchdefaultsN = String.fromCharCode(121,105,101,108,100,95,114,95,50,56,0);
         iconcalendarf = `${playlisty.length}`;
         hnewarchdefaultsN = `${hnewarchdefaultsN.length << (Math.min(4, hnewarchdefaultsN.length))}`;
         break;
      }
      if (iconcalendarf.length >= 2) {
          let smallsoundK: Map<any, any> = new Map([[String.fromCharCode(101,95,51,95,115,99,104,105,0),40], [String.fromCharCode(101,120,97,109,112,108,101,115,95,108,95,52,56,0),372]]);
          let helperq: Array<any> = [688, 135, 621];
         iconcalendarf = `${colorsz.length}`;
         smallsoundK.set(`${helperq.length}`, helperq.length);
      }
         mbbannerB = colorsz == String.fromCharCode(73,0) && 41 < baidup.length;
      round1 /= Math.max(1, parseFloat(`${playlisty.length}`));
   }
   for (let x = 0; x < 3; x++) {
      anewarchdefaults8 -= 2;
   }
   if ((anewarchdefaults8 + handler2) <= 3 && 5 <= (handler2 + 3)) {
      handler2 &= 3;
   }
   if (iconpipexpandp < 4) {
      recommendationX += `${applicationO.length}`;
   }
   while ((redscoreballk.size + smallsoundp) >= 3 || (smallsoundp + 3) >= 5) {
       let stepu = String.fromCharCode(105,95,57,49,95,98,117,102,115,0);
       let eighteenB: Array<any> = [String.fromCharCode(121,117,118,103,98,114,112,95,114,95,50,54,0), String.fromCharCode(119,95,51,49,95,116,114,105,112,108,101,116,0), String.fromCharCode(101,95,50,56,95,99,102,102,116,98,0)];
      while (stepu.includes(`${eighteenB.length}`)) {
         stepu = `${eighteenB.length}`;
         break;
      }
         eighteenB = [1 | stepu.length];
      if ((4 ^ eighteenB.length) >= 4) {
         eighteenB = [(String.fromCharCode(77,0) == stepu ? eighteenB.length : stepu.length)];
      }
      for (let q = 0; q < 3; q++) {
         stepu = `${(stepu == String.fromCharCode(113,0) ? stepu.length : eighteenB.length)}`;
      }
      for (let m = 0; m < 2; m++) {
         stepu += `${2 << (Math.min(3, eighteenB.length))}`;
      }
      while ((stepu.length % 1) <= 1 || 4 <= (eighteenB.length % (Math.max(1, 6)))) {
         stepu = `${stepu.length}`;
         break;
      }
      smallsoundp <<= Math.min(1, Math.abs(3));
      break;
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
       let icondownimgJ = String.fromCharCode(110,95,52,53,95,100,105,115,112,97,116,99,104,105,110,103,0);
    let homeloadingm = false;
    let field7 = false;
    let iconarrowleft9 = String.fromCharCode(103,95,49,95,115,116,105,112,112,101,100,0);
    let iconnointernetI = String.fromCharCode(97,95,49,55,95,109,97,121,98,101,0);
    let statsnomoredatai = 3.0;
    let long_f8a: Array<any> = [828, 829, 454];
    let arrowrightwithtailI: Array<any> = [732, 493, 125];
    let b_centerC: Array<any> = [726, 782, 824];
    let soundL = String.fromCharCode(99,95,57,55,95,108,111,103,111,115,0);
    let pressureE = true;
    let chatroombackgroundY = 2.0;
    let dataj = String.fromCharCode(110,95,50,95,116,115,101,113,0);
    let grayY = String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,99,95,54,48,0);
    let iconsubssuccessf = 0.0;
    let backwhiteK = 4.0;
   while (5 == (long_f8a.length + parseInt(`${statsnomoredatai}`)) || (statsnomoredatai + long_f8a.length) == 2.50) {
      long_f8a = [parseInt(`${chatroombackgroundY}`) + iconnointernetI.length];
      break;
   }
       let airbnbstars = 5.0;
       let turnx = String.fromCharCode(119,95,54,52,95,102,105,110,100,101,114,0);
          let goallogoo = String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,116,95,55,56,0);
         turnx = `${turnx.length}`;
         goallogoo = `${(goallogoo == String.fromCharCode(122,0) ? goallogoo.length : goallogoo.length)}`;
       let infop = true;
       let sharemodalp = true;
      let middleI = airbnbstars >= 9322930.0;
      do {
         airbnbstars -= (parseInt(`${airbnbstars}`) | (sharemodalp ? 2 : 1));
         if (middleI) {
            break;
         }
      } while (middleI && (!turnx.startsWith(`${airbnbstars}`)));
         infop = 94.20 > airbnbstars;
      while (5 >= turnx.length) {
         infop = (50 > (turnx.length * (!infop ? turnx.length : 50)));
         break;
      }
      let iconrefresht = 8583405 <= turnx.length;
      do {
         turnx += `${turnx.length}`;
         if (iconrefresht) {
            break;
         }
      } while ((4.4 >= (airbnbstars + turnx.length) || (4.4 + airbnbstars) >= 1.23) && iconrefresht);
      icondownimgJ += `${b_centerC.length ^ 1}`;
      iconarrowleft9 += `${((homeloadingm ? 1 : 2) * 1)}`;
      homeloadingm = !homeloadingm && soundL.length > 53;
   if ((b_centerC.length - arrowrightwithtailI.length) >= 3 || 1 >= (b_centerC.length - 3)) {
       let unselectedG: Array<any> = [781, 616];
       let executorX = String.fromCharCode(99,95,54,51,95,100,97,116,97,116,121,112,101,115,0);
       let common_ = 2.0;
      while (!executorX.startsWith(`${common_}`)) {
          let connectionD = 3;
          let twitterT = String.fromCharCode(115,113,117,97,114,101,95,112,95,52,52,0);
          let sansN: Array<any> = [743, 924, 32];
         executorX += "2";
         connectionD *= twitterT.length ^ connectionD;
         twitterT += "2";
         sansN.push((String.fromCharCode(71,0) == twitterT ? twitterT.length : sansN.length));
         break;
      }
         unselectedG = [parseInt(`${common_}`)];
         unselectedG.push(executorX.length ^ 3);
      for (let c = 0; c < 2; c++) {
         unselectedG.push(unselectedG.length / (Math.max(4, parseInt(`${common_}`))));
      }
      while (3 == unselectedG.length) {
          let bottomO = 3.0;
         unselectedG.push(parseInt(`${common_}`));
         bottomO -= parseFloat(`${parseInt(`${bottomO}`)}`);
         break;
      }
         executorX += "3";
      for (let m = 0; m < 3; m++) {
          let type_3P: Map<any, any> = new Map([[String.fromCharCode(106,95,57,54,95,114,101,118,111,107,101,0),String.fromCharCode(103,95,50,54,95,115,102,116,112,0)], [String.fromCharCode(105,95,48,0),String.fromCharCode(99,111,109,112,105,108,101,114,95,119,95,52,52,0)], [String.fromCharCode(110,95,52,95,105,110,112,117,116,0),String.fromCharCode(112,117,98,108,105,99,105,116,121,95,97,95,56,57,0)]]);
          let sharedb = 3;
         executorX += `${sharedb ^ 3}`;
         type_3P = new Map([[`${type_3P.size}`, type_3P.size | type_3P.size]]);
         sharedb *= 1 | type_3P.size;
      }
      if (unselectedG.length > 2) {
         unselectedG.push(parseInt(`${common_}`) & unselectedG.length);
      }
         common_ *= executorX.length << (Math.min(2, Math.abs(parseInt(`${common_}`))));
      arrowrightwithtailI = [icondownimgJ.length % (Math.max(executorX.length, 9))];
   }
   if ((arrowrightwithtailI.length & 1) > 1) {
      arrowrightwithtailI = [long_f8a.length / 1];
   }
       let submitb = true;
         submitb = !submitb;
          let reactnativeultimatelistviewG = 1.0;
          let pressure5 = 5.0;
         submitb = 85.8 <= pressure5;
         reactnativeultimatelistviewG += parseInt(`${reactnativeultimatelistviewG}`) & parseInt(`${reactnativeultimatelistviewG}`);
         pressure5 -= parseInt(`${reactnativeultimatelistviewG}`) / (Math.max(parseInt(`${reactnativeultimatelistviewG}`), 4));
         submitb = !submitb;
      iconnointernetI = `${long_f8a.length}`;
   while (iconarrowleft9 == String.fromCharCode(83,0) && iconnointernetI != String.fromCharCode(111,0)) {
      iconarrowleft9 += `${3 * b_centerC.length}`;
      break;
   }
   if ((b_centerC.length % (Math.max(iconarrowleft9.length, 4))) <= 4 || 2 <= (4 % (Math.max(1, iconarrowleft9.length)))) {
      b_centerC.push(b_centerC.length * 2);
   }
   if (soundL == String.fromCharCode(115,0)) {
      icondownimgJ += `${parseInt(`${chatroombackgroundY}`)}`;
   }
   for (let x = 0; x < 2; x++) {
      b_centerC.push(parseInt(`${chatroombackgroundY}`) + 2);
   }

    clearTimeout(timer.current);

      arrowrightwithtailI = [1];
      iconarrowleft9 = `${((field7 ? 3 : 1))}`;
      statsnomoredatai -= 2;
      b_centerC = [1];
       let shrinkd = String.fromCharCode(103,95,53,53,95,115,115,116,104,114,101,115,104,0);
       let libruntimeexecutorg = String.fromCharCode(103,114,97,110,117,108,101,112,111,115,95,116,95,56,56,0);
          let ajaxN = 0.0;
          let internetR = 4;
         shrinkd += `${libruntimeexecutorg.length ^ 1}`;
         ajaxN += 1 + internetR;
         internetR <<= Math.min(1, Math.abs(internetR));
         libruntimeexecutorg = `${libruntimeexecutorg.length}`;
         shrinkd = "3";
         shrinkd = `${(libruntimeexecutorg == String.fromCharCode(121,0) ? shrinkd.length : libruntimeexecutorg.length)}`;
       let libtanC = String.fromCharCode(99,108,97,115,115,105,102,105,101,114,95,104,95,57,51,0);
      for (let m = 0; m < 2; m++) {
         shrinkd = "2";
      }
      statsnomoredatai -= long_f8a.length / 1;
   let mergerf = String.fromCharCode(119,112,51,0) == grayY;
   do {
      grayY = `${1 - parseInt(`${chatroombackgroundY}`)}`;
      if (mergerf) {
         break;
      }
   } while ((!field7 && 1 > grayY.length) && mergerf);
      iconarrowleft9 += `${parseInt(`${statsnomoredatai}`) * 2}`;
      soundL = `${parseInt(`${statsnomoredatai}`) % 3}`;
      iconnointernetI = `${(iconarrowleft9.length - (pressureE ? 5 : 3))}`;
      icondownimgJ = `${iconarrowleft9.length % (Math.max(1, 2))}`;
      iconarrowleft9 += `${iconarrowleft9.length + soundL.length}`;
    setShowOverlay(true);

       let videobufferloadingB = String.fromCharCode(112,95,57,57,95,99,111,99,111,97,0);
       let goalW = 0.0;
      for (let e = 0; e < 3; e++) {
          let friends8 = String.fromCharCode(110,95,49,52,95,99,111,117,110,116,100,111,119,110,0);
          let crownu: Array<any> = [String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,98,95,54,55,0), String.fromCharCode(112,95,55,49,95,102,111,117,114,99,99,115,0), String.fromCharCode(99,95,56,95,115,112,101,99,105,97,108,0)];
          let suboutW: Map<any, any> = new Map([[String.fromCharCode(97,95,49,52,95,104,97,110,100,101,114,0),864], [String.fromCharCode(98,105,116,109,97,112,95,109,95,53,48,0),687]]);
          let chinab = String.fromCharCode(104,105,103,104,105,103,104,116,95,54,95,56,52,0);
         goalW /= Math.max(parseFloat(`${suboutW.size}`), 3);
         friends8 = `${chinab.length}`;
         crownu = [(friends8 == String.fromCharCode(97,0) ? crownu.length : friends8.length)];
         suboutW.set(chinab, crownu.length);
      }
      let arrowselectdownV = goalW >= 8085344.0;
      do {
          let iconsaveimagef = 0.0;
          let singlef = String.fromCharCode(117,95,53,54,95,117,110,119,105,110,100,0);
          let routerF = String.fromCharCode(115,105,103,110,97,108,95,57,95,54,52,0);
         goalW -= parseFloat(`${parseInt(`${iconsaveimagef}`) / (Math.max(6, parseInt(`${goalW}`)))}`);
         iconsaveimagef /= Math.max(3, parseFloat(`${singlef.length | routerF.length}`));
         singlef += `${routerF.length ^ 1}`;
         if (arrowselectdownV) {
            break;
         }
      } while (((videobufferloadingB.length * 1) == 1 || 4.43 == (goalW / 2.89)) && arrowselectdownV);
         goalW -= parseFloat(`${2 | parseInt(`${goalW}`)}`);
      if ((goalW * 2.58) < 5.29) {
          let notificationfillemptyy = String.fromCharCode(111,95,51,57,95,97,99,116,105,118,97,116,101,100,0);
          let sharewhiteK = 3.0;
          let libavcodec8 = String.fromCharCode(115,109,111,111,116,104,101,110,95,110,95,49,51,0);
          let penaltygoalm = String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,101,95,57,0);
         videobufferloadingB = `${libavcodec8.length}`;
         notificationfillemptyy = `${parseInt(`${sharewhiteK}`)}`;
         sharewhiteK *= (notificationfillemptyy == String.fromCharCode(49,0) ? penaltygoalm.length : notificationfillemptyy.length);
         libavcodec8 += `${1 * penaltygoalm.length}`;
      }
      if ((3 * videobufferloadingB.length) <= 5 || 3 <= (videobufferloadingB.length % (Math.max(3, 4)))) {
         videobufferloadingB = `${parseInt(`${goalW}`)}`;
      }
      if (3.83 > (1.30 * goalW)) {
          let yellowredcardX = 5.0;
          let eactW = String.fromCharCode(118,105,111,108,101,110,99,101,95,55,95,50,52,0);
         videobufferloadingB += "1";
         yellowredcardX /= Math.max((String.fromCharCode(108,0) == eactW ? parseInt(`${yellowredcardX}`) : eactW.length), 1);
      }
      soundL = "3";
   for (let e = 0; e < 1; e++) {
       let sourceD: Map<any, any> = new Map([[String.fromCharCode(100,101,115,107,116,111,112,95,110,95,53,55,0),String.fromCharCode(115,99,116,112,99,111,110,110,95,53,95,51,55,0)], [String.fromCharCode(112,117,115,104,95,121,95,49,54,0),String.fromCharCode(101,95,50,51,95,114,101,113,117,105,114,101,109,101,110,116,115,0)]]);
       let serviceJ = 0;
       let videoS: Array<any> = [332, 27];
       let mapbufferP: Array<any> = [String.fromCharCode(99,95,56,56,95,105,100,101,110,116,105,102,105,101,114,0), String.fromCharCode(99,108,97,105,109,95,100,95,48,0), String.fromCharCode(106,95,57,56,95,108,111,119,98,105,116,115,0)];
       let libturbomodulejsijni0 = String.fromCharCode(97,99,116,117,97,108,105,122,101,95,53,95,49,55,0);
      if (5 == (4 >> (Math.min(1, videoS.length)))) {
         videoS.push(videoS.length);
      }
      while (mapbufferP.includes(serviceJ)) {
         serviceJ <<= Math.min(Math.abs(serviceJ), 4);
         break;
      }
         sourceD = new Map([[`${videoS.length}`, 1]]);
      if (serviceJ == videoS.length) {
         videoS.push(3);
      }
          let imagesK: Array<any> = [String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,108,95,49,55,0), String.fromCharCode(116,95,56,49,95,112,114,111,99,101,115,115,0)];
         mapbufferP.push(serviceJ);
         imagesK.push(imagesK.length);
      while (!Array.from(sourceD.keys()).includes(`${videoS.length}`)) {
         sourceD.set(libturbomodulejsijni0, libturbomodulejsijni0.length);
         break;
      }
       let libpangleflippedX = 1.0;
       let d_imageC = 1.0;
      let caste = d_imageC <= 6137965.0;
      do {
         d_imageC += videoS.length;
         if (caste) {
            break;
         }
      } while (caste && (d_imageC <= 5.75));
          let node1 = String.fromCharCode(99,111,109,112,97,99,116,95,115,95,51,48,0);
         videoS.push(parseInt(`${d_imageC}`));
         node1 += `${node1.length - 1}`;
         libturbomodulejsijni0 = `${parseInt(`${libpangleflippedX}`)}`;
      let homeactivet = libpangleflippedX <= 8160437.0;
      do {
          let custom8 = true;
          let singles = String.fromCharCode(98,95,51,56,95,115,101,109,97,112,104,111,114,101,0);
          let minivod3: Array<any> = [249, 15, 537];
         libpangleflippedX += singles.length & 3;
         custom8 = !custom8;
         singles = `${minivod3.length >> (Math.min(Math.abs(3), 2))}`;
         minivod3.push(1 & minivod3.length);
         if (homeactivet) {
            break;
         }
      } while (homeactivet && (4.36 > (3.39 / (Math.max(5, libpangleflippedX))) || 2 > (mapbufferP.length / (Math.max(3, parseInt(`${libpangleflippedX}`))))));
          let vipsportG = 0.0;
         libpangleflippedX /= Math.max(3, 1 % (Math.max(2, libturbomodulejsijni0.length)));
         vipsportG += 3;
          let heartk = String.fromCharCode(117,95,53,49,95,110,105,98,0);
          let hoverq = String.fromCharCode(100,95,49,54,0);
         videoS = [(heartk == String.fromCharCode(90,0) ? parseInt(`${d_imageC}`) : heartk.length)];
         hoverq += `${hoverq.length}`;
      let info1 = 8002957 >= serviceJ;
      do {
          let downloadedP = false;
          let combineb = String.fromCharCode(99,95,55,51,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
          let episodes0 = String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,95,99,95,54,50,0);
         serviceJ /= Math.max(serviceJ, 2);
         downloadedP = (91 >= (episodes0.length - (!downloadedP ? episodes0.length : 91)));
         combineb += `${(2 & (downloadedP ? 2 : 2))}`;
         if (info1) {
            break;
         }
      } while ((3 == (4 >> (Math.min(5, libturbomodulejsijni0.length))) && (serviceJ >> (Math.min(Math.abs(4), 1))) == 4) && info1);
      let dplusQ = libpangleflippedX <= 6295298.0;
      do {
         libpangleflippedX /= Math.max(4, sourceD.size);
         if (dplusQ) {
            break;
         }
      } while ((4.17 == (2.61 / (Math.max(4, d_imageC))) || (2.61 / (Math.max(2, d_imageC))) == 4.77) && dplusQ);
      arrowrightwithtailI = [(mapbufferP.length * (homeloadingm ? 5 : 2))];
   }
   let notificationgray4 = homeloadingm ? !homeloadingm : homeloadingm;
   do {
      homeloadingm = !dataj.includes(`${field7}`);
      if (notificationgray4) {
         break;
      }
   } while (notificationgray4 && (4 > icondownimgJ.length));
       let iconbellactive2 = String.fromCharCode(116,95,54,55,95,99,111,111,114,100,105,110,97,116,105,111,110,0);
       let shootnogoalp = 5.0;
         iconbellactive2 += `${parseInt(`${shootnogoalp}`) ^ 1}`;
         iconbellactive2 += `${parseInt(`${shootnogoalp}`)}`;
      if (2 <= (iconbellactive2.length * 3)) {
          let nativemoduleA = 2.0;
          let filledc = 5.0;
         iconbellactive2 = `${parseInt(`${shootnogoalp}`) & iconbellactive2.length}`;
         nativemoduleA *= parseFloat(`${parseInt(`${filledc}`) << (Math.min(1, Math.abs(parseInt(`${nativemoduleA}`))))}`);
         filledc *= 2;
      }
      while (iconbellactive2.startsWith(`${shootnogoalp}`)) {
         shootnogoalp -= parseFloat(`${iconbellactive2.length % 2}`);
         break;
      }
      while ((parseInt(`${shootnogoalp}`) * 3) <= 2 && (parseFloat(`${iconbellactive2.length}`) * shootnogoalp) <= 1.2) {
         iconbellactive2 = `${parseInt(`${shootnogoalp}`)}`;
         break;
      }
      if (!iconbellactive2.startsWith(`${shootnogoalp}`)) {
         shootnogoalp += (parseFloat(`${String.fromCharCode(87,0) == iconbellactive2 ? iconbellactive2.length : parseInt(`${shootnogoalp}`)}`));
      }
      b_centerC.push((grayY == String.fromCharCode(113,0) ? iconarrowleft9.length : grayY.length));
   let rankB = b_centerC.length >= 7091248;
   do {
      b_centerC.push((icondownimgJ == String.fromCharCode(50,0) ? parseInt(`${chatroombackgroundY}`) : icondownimgJ.length));
      if (rankB) {
         break;
      }
   } while (rankB && (pressureE));
      chatroombackgroundY -= arrowrightwithtailI.length;
   let tempnodatad = iconarrowleft9.length <= 7819267;
   do {
      iconarrowleft9 = "1";
      if (tempnodatad) {
         break;
      }
   } while ((iconnointernetI.length <= iconarrowleft9.length) && tempnodatad);
      statsnomoredatai *= parseInt(`${chatroombackgroundY}`);
   for (let i = 0; i < 2; i++) {
      dataj += `${icondownimgJ.length - 1}`;
   }
   while (5 < (2 / (Math.max(6, dataj.length))) && 2 < (dataj.length + parseInt(`${chatroombackgroundY}`))) {
      chatroombackgroundY /= Math.max(b_centerC.length, 4);
      break;
   }
       let sell8: Array<any> = [628, 345];
      if ((sell8.length / (Math.max(sell8.length, 2))) <= 5) {
         sell8 = [2];
      }
         sell8.push(sell8.length | sell8.length);
      for (let j = 0; j < 1; j++) {
         sell8.push(2 << (Math.min(1, sell8.length)));
      }
      chatroombackgroundY += (icondownimgJ == String.fromCharCode(113,0) ? icondownimgJ.length : (homeloadingm ? 4 : 4));
    overlayRef.current = true

   for (let z = 0; z < 1; z++) {
       let weibo_ = 0.0;
       let nalyticsI = String.fromCharCode(102,95,52,52,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0);
       let placeholderS = String.fromCharCode(117,110,98,108,111,99,107,95,57,95,52,54,0);
       let clear5 = String.fromCharCode(105,95,50,95,105,110,116,101,114,120,121,0);
         weibo_ -= nalyticsI.length >> (Math.min(5, clear5.length));
         placeholderS += `${parseInt(`${weibo_}`) / 3}`;
      let libloggerv = clear5.length >= 9321075;
      do {
          let long_8F = String.fromCharCode(107,95,51,95,111,116,111,115,0);
          let iconqqY = 1.0;
          let baiduO = 0.0;
          let listN = 1.0;
         clear5 += "3";
         long_8F += `${parseInt(`${baiduO}`)}`;
         iconqqY += parseFloat(`${1}`);
         baiduO -= long_8F.length;
         listN *= parseFloat(`${long_8F.length}`);
         if (libloggerv) {
            break;
         }
      } while ((nalyticsI.endsWith(`${clear5.length}`)) && libloggerv);
      if (3 == placeholderS.length) {
         clear5 = `${parseInt(`${weibo_}`)}`;
      }
          let goalL = String.fromCharCode(105,110,116,101,114,105,111,114,95,99,95,56,52,0);
          let reactnavigationA = 3;
          let thumbnailg: Map<any, any> = new Map([[String.fromCharCode(97,95,57,51,95,119,104,105,116,101,115,112,97,99,101,0),245], [String.fromCharCode(108,95,49,51,95,97,115,111,99,105,100,0),56], [String.fromCharCode(103,117,101,115,115,95,101,95,51,52,0),54]]);
         weibo_ *= reactnavigationA;
         goalL += `${2 - goalL.length}`;
         reactnavigationA <<= Math.min(5, Math.abs((goalL == String.fromCharCode(90,0) ? thumbnailg.size : goalL.length)));
         thumbnailg.set(goalL, thumbnailg.size / 2);
       let iconarrowrightorangeu = String.fromCharCode(117,95,56,54,95,108,101,114,112,0);
      for (let h = 0; h < 1; h++) {
          let friendsv = String.fromCharCode(107,95,57,54,95,100,105,115,99,117,115,115,0);
          let zoomG: Array<any> = [73, 494];
         clear5 += `${clear5.length - 1}`;
         friendsv = `${3 >> (Math.min(4, zoomG.length))}`;
         zoomG = [friendsv.length >> (Math.min(2, zoomG.length))];
      }
         iconarrowrightorangeu += `${nalyticsI.length >> (Math.min(Math.abs(1), 5))}`;
      for (let j = 0; j < 3; j++) {
          let ajaxR: Array<any> = [939, 908];
         iconarrowrightorangeu = `${nalyticsI.length & 2}`;
         ajaxR.push(3);
      }
      while (parseInt(`${weibo_}`) == nalyticsI.length) {
         weibo_ /= Math.max(3, iconarrowrightorangeu.length / 1);
         break;
      }
       let teame = String.fromCharCode(117,112,108,111,97,100,115,95,119,95,54,56,0);
         weibo_ -= nalyticsI.length | teame.length;
      dataj = `${b_centerC.length}`;
   }
   if (iconnointernetI.length > b_centerC.length) {
      iconnointernetI += `${((pressureE ? 4 : 4))}`;
   }
       let base3 = String.fromCharCode(120,95,51,56,95,100,115,116,114,0);
       let modity2 = 1.0;
       let mbnativeC = 0;
      if ((mbnativeC * 1) >= 2) {
          let othermatchdetailbgU = 3.0;
          let icondefaultthumbnailr = 0.0;
          let iconrefreshh: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,115,115,101,100,95,115,95,57,0),90], [String.fromCharCode(121,95,56,57,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0),384], [String.fromCharCode(99,114,108,105,115,115,117,101,114,95,103,95,51,48,0),882]]);
         modity2 += parseFloat(`${2 + parseInt(`${othermatchdetailbgU}`)}`);
         othermatchdetailbgU -= iconrefreshh.size * parseInt(`${icondefaultthumbnailr}`);
         icondefaultthumbnailr -= parseFloat(`${iconrefreshh.size}`);
      }
       let mapbufferU = String.fromCharCode(114,95,49,55,95,114,112,122,97,0);
         mapbufferU += "3";
         modity2 /= Math.max(parseFloat(`${parseInt(`${modity2}`) / (Math.max(base3.length, 2))}`), 1);
      while (4 < (base3.length + parseInt(`${modity2}`)) && (4 + parseInt(`${modity2}`)) < 5) {
          let recommendationb = String.fromCharCode(115,104,97,114,100,95,115,95,50,51,0);
          let update_0vU: Array<any> = [707, 493];
          let tickedM = String.fromCharCode(108,95,53,51,95,112,115,100,115,112,0);
          let awayplayerA = false;
          let ksadw: Array<any> = [655, 881, 807];
         base3 += `${((awayplayerA ? 4 : 1) + mbnativeC)}`;
         recommendationb += `${1 & tickedM.length}`;
         update_0vU = [update_0vU.length];
         tickedM += `${3 & recommendationb.length}`;
         awayplayerA = 72 == update_0vU.length;
         ksadw.push(ksadw.length + tickedM.length);
         break;
      }
      if (3 >= mbnativeC) {
         mbnativeC >>= Math.min(Math.abs(mapbufferU.length + parseInt(`${modity2}`)), 1);
      }
          let shrinkJ = String.fromCharCode(99,95,56,54,95,105,110,111,117,116,0);
          let whatsappH = true;
         mapbufferU = "3";
         shrinkJ = `${((whatsappH ? 2 : 1) % 2)}`;
         whatsappH = !whatsappH;
          let elementsC = String.fromCharCode(119,104,101,110,95,113,95,56,53,0);
          let release_5z: Array<any> = [639, 507, 914];
          let profileframe9 = String.fromCharCode(98,95,55,95,99,111,109,112,114,101,115,115,101,100,0);
         mapbufferU = `${(base3 == String.fromCharCode(115,0) ? base3.length : parseInt(`${modity2}`))}`;
         elementsC = `${release_5z.length}`;
         release_5z = [2];
         profileframe9 += `${release_5z.length}`;
      let eyeopenk = mbnativeC >= 5440501;
      do {
         mbnativeC |= mbnativeC;
         if (eyeopenk) {
            break;
         }
      } while ((2.5 == (1.73 + modity2) && (parseFloat(`${mbnativeC}`) + modity2) == 1.73) && eyeopenk);
      long_f8a.push(long_f8a.length >> (Math.min(Math.abs(1), 3)));
   let rewindA = iconarrowleft9.length <= 6520865;
   do {
      iconarrowleft9 += `${arrowrightwithtailI.length * icondownimgJ.length}`;
      if (rewindA) {
         break;
      }
   } while ((!field7) && rewindA);
      grayY += `${b_centerC.length}`;
   let notificationgray9 = grayY.length >= 6287122;
   do {
      grayY = `${(1 >> (Math.min(2, Math.abs((pressureE ? 1 : 4)))))}`;
      if (notificationgray9) {
         break;
      }
   } while ((dataj == grayY) && notificationgray9);
      pressureE = (parseInt(`${iconsubssuccessf}`) + long_f8a.length) >= 82;
       let predictionactiveu: Map<any, any> = new Map([[String.fromCharCode(111,95,50,56,95,120,112,117,98,0),270], [String.fromCharCode(111,95,52,56,0),95], [String.fromCharCode(110,101,97,114,108,121,95,108,95,50,50,0),281]]);
       let goallogov = 4;
      let bootsplashB = predictionactiveu.size <= 5297116;
      do {
         predictionactiveu = new Map([[`${predictionactiveu.size}`, goallogov]]);
         if (bootsplashB) {
            break;
         }
      } while ((4 == (5 << (Math.min(3, Math.abs(goallogov)))) && 1 == (5 << (Math.min(3, Math.abs(predictionactiveu.size))))) && bootsplashB);
      for (let v = 0; v < 1; v++) {
         predictionactiveu = new Map([[`${predictionactiveu.size}`, 3 & predictionactiveu.size]]);
      }
      while (goallogov == predictionactiveu.size) {
          let whistleA = 1.0;
          let awayteamfieldM = String.fromCharCode(117,95,55,51,95,115,105,110,107,0);
         predictionactiveu.set(`${goallogov}`, goallogov >> (Math.min(Math.abs(1), 2)));
         whistleA /= Math.max(3 | awayteamfieldM.length, 1);
         awayteamfieldM += `${3 & parseInt(`${whistleA}`)}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
         goallogov ^= predictionactiveu.size;
      }
      let libane7 = goallogov <= 9207089;
      do {
         goallogov *= 1;
         if (libane7) {
            break;
         }
      } while (libane7 && (predictionactiveu.get(`${goallogov}`) == null));
      let rewardvideo5 = predictionactiveu.size <= 7946906;
      do {
          let iconwatchnowU: Map<any, any> = new Map([[String.fromCharCode(106,100,104,117,102,102,95,119,95,56,56,0),779], [String.fromCharCode(106,95,51,48,95,97,98,101,108,0),852], [String.fromCharCode(114,101,112,111,114,116,95,52,95,49,57,0),224]]);
          let greyO = 5.0;
          let floaterw = 0.0;
         predictionactiveu = new Map([[`${predictionactiveu.size}`, predictionactiveu.size]]);
         iconwatchnowU = new Map([[`${floaterw}`, parseInt(`${floaterw}`) % 3]]);
         greyO += parseFloat(`${parseInt(`${greyO}`) % 3}`);
         if (rewardvideo5) {
            break;
         }
      } while (((1 >> (Math.min(1, Math.abs(predictionactiveu.size)))) == 3) && rewardvideo5);
      dataj = `${(dataj == String.fromCharCode(101,0) ? dataj.length : predictionactiveu.size)}`;
      grayY += `${parseInt(`${chatroombackgroundY}`) & parseInt(`${iconsubssuccessf}`)}`;
       let combinedU = true;
       let combineda = 2;
      let charto = 6602975 <= combineda;
      do {
          let nalyticsz = String.fromCharCode(98,95,49,54,95,114,101,110,100,105,116,105,111,110,0);
          let moren: Map<any, any> = new Map([[String.fromCharCode(115,95,56,95,97,99,101,110,99,0),925], [String.fromCharCode(97,95,52,49,95,115,101,103,105,100,0),957], [String.fromCharCode(99,104,97,110,103,101,114,95,110,95,51,49,0),835]]);
          let chatU = false;
          let singleO = 2;
         combineda <<= Math.min(Math.abs(1 & singleO), 4);
         nalyticsz += `${(moren.size & (chatU ? 5 : 2))}`;
         moren.set(`${chatU}`, 1);
         singleO >>= Math.min(nalyticsz.length, 3);
         if (charto) {
            break;
         }
      } while (((combineda - 5) > 3 || combineda > 5) && charto);
         combinedU = combineda <= 59;
         combineda ^= combineda;
      for (let w = 0; w < 3; w++) {
         combinedU = !combinedU;
      }
          let qaagO: Map<any, any> = new Map([[String.fromCharCode(100,95,53,55,95,116,105,110,105,116,0),819], [String.fromCharCode(110,95,53,51,95,111,112,116,105,109,105,115,116,105,99,0),913]]);
          let dangera: Array<any> = [399, 806];
          let downloadingI: Array<any> = [963, 561];
         combineda -= downloadingI.length & 2;
         qaagO = new Map([[`${qaagO.size}`, dangera.length >> (Math.min(3, Math.abs(qaagO.size)))]]);
         dangera.push(dangera.length);
         downloadingI = [qaagO.size];
      for (let j = 0; j < 3; j++) {
         combinedU = 66 >= combineda;
      }
      iconnointernetI = `${(String.fromCharCode(103,0) == iconarrowleft9 ? iconarrowleft9.length : iconnointernetI.length)}`;
       let iconfeedbackB = String.fromCharCode(112,114,101,102,101,116,99,104,95,113,95,49,48,48,0);
       let smallbrightnessG: Array<any> = [930, 63, 225];
       let mathy = false;
      for (let m = 0; m < 3; m++) {
         smallbrightnessG.push(smallbrightnessG.length);
      }
      if ((smallbrightnessG.length & 2) >= 3 && 3 >= (2 & smallbrightnessG.length)) {
         smallbrightnessG.push((String.fromCharCode(53,0) == iconfeedbackB ? iconfeedbackB.length : smallbrightnessG.length));
      }
         mathy = String.fromCharCode(66,0) == iconfeedbackB;
         iconfeedbackB += `${(String.fromCharCode(106,0) == iconfeedbackB ? iconfeedbackB.length : (mathy ? 1 : 4))}`;
       let sellmathbackground1 = 5.0;
       let sound7 = 1.0;
      let e_county = mathy ? !mathy : mathy;
      do {
         mathy = 82.79 <= sellmathbackground1;
         if (e_county) {
            break;
         }
      } while ((!iconfeedbackB.includes(`${mathy}`)) && e_county);
          let inouttargetredI = 1;
         mathy = iconfeedbackB.length < 44;
         inouttargetredI -= 1 / (Math.max(8, inouttargetredI));
      let nodeH = mathy ? !mathy : mathy;
      do {
          let statisticsactiveG = String.fromCharCode(112,95,52,57,95,118,97,99,117,117,109,0);
          let basketballplayerplaceholderm = String.fromCharCode(115,99,114,111,108,108,97,98,108,101,95,116,95,57,49,0);
         mathy = 81.44 <= sellmathbackground1;
         statisticsactiveG = `${(String.fromCharCode(102,0) == basketballplayerplaceholderm ? basketballplayerplaceholderm.length : statisticsactiveG.length)}`;
         if (nodeH) {
            break;
         }
      } while (nodeH && (!mathy));
         iconfeedbackB += `${iconfeedbackB.length}`;
      arrowrightwithtailI.push((parseInt(`${backwhiteK}`) << (Math.min(2, Math.abs((field7 ? 2 : 3))))));
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
       let pause7: Array<any> = [String.fromCharCode(110,111,100,101,115,101,116,95,101,95,56,52,0), String.fromCharCode(113,95,55,48,95,116,101,109,112,111,114,97,114,121,0), String.fromCharCode(105,95,50,95,102,114,105,101,110,100,115,0)];
    let matchinactiveL = 0.0;
    let bootsplashA = true;
    let videoY = String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,57,95,53,56,0);
    let graphicsf: Array<any> = [130, 927];
    let attributedstringF: Array<any> = [431, 37];
    let sansJ = 2;
    let iconqqo: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,100,95,53,50,0),String.fromCharCode(112,97,114,101,110,116,115,95,53,95,54,50,0)], [String.fromCharCode(121,95,52,56,95,109,111,110,111,98,105,116,0),String.fromCharCode(115,95,52,49,95,105,110,116,101,114,114,117,112,116,0)], [String.fromCharCode(99,112,112,108,105,110,116,95,97,95,49,51,0),String.fromCharCode(114,95,55,48,95,101,114,114,111,114,99,98,0)]]);
    let type_mA = 3.0;
    let roundl = 0;
    let ballj = 4.0;
    let live9 = String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,114,95,52,48,0);
    let wnewsshare8: Array<any> = [String.fromCharCode(113,95,57,55,95,97,114,116,105,102,97,99,116,0), String.fromCharCode(105,114,114,101,108,118,97,110,116,95,102,95,54,54,0), String.fromCharCode(99,112,117,117,115,101,100,95,56,95,50,48,0)];
    let templateprocessorc = String.fromCharCode(103,95,54,51,95,102,108,97,116,116,101,110,0);
    let greyarrowupD = String.fromCharCode(101,110,117,109,101,114,97,116,101,95,108,95,50,50,0);
    let yellowanimationlivee = 4.0;
      videoY = `${roundl % (Math.max(videoY.length, 9))}`;
   while (videoY.length == 4) {
       let zhuboY = String.fromCharCode(115,101,116,116,105,110,103,115,95,118,95,54,56,0);
       let libfbjni2 = String.fromCharCode(109,95,52,51,95,116,104,101,109,101,0);
       let temperatures = String.fromCharCode(116,105,109,101,111,117,116,101,100,95,57,95,54,52,0);
       let modalf = 4.0;
       let leaguedetailsbgM = String.fromCharCode(104,95,50,54,95,103,114,97,98,98,101,114,0);
      for (let d = 0; d < 2; d++) {
         zhuboY = `${libfbjni2.length / 3}`;
      }
      let coreG = leaguedetailsbgM == String.fromCharCode(106,53,98,98,119,0);
      do {
         leaguedetailsbgM = `${temperatures.length}`;
         if (coreG) {
            break;
         }
      } while ((leaguedetailsbgM.length < 1 && temperatures != String.fromCharCode(117,0)) && coreG);
       let iconbellactiveZ = String.fromCharCode(110,116,101,114,102,97,99,101,95,56,95,55,52,0);
       let shrinkf = String.fromCharCode(121,95,56,50,95,100,101,118,101,108,111,112,101,114,0);
      while (!libfbjni2.includes(`${modalf}`)) {
         libfbjni2 += `${iconbellactiveZ.length % (Math.max(leaguedetailsbgM.length, 5))}`;
         break;
      }
      let episodesy = modalf >= 6529260.0;
      do {
         modalf /= Math.max(2, parseFloat(`${zhuboY.length * 3}`));
         if (episodesy) {
            break;
         }
      } while (episodesy && ((iconbellactiveZ.length >> (Math.min(Math.abs(1), 3))) > 4 || (1 ^ iconbellactiveZ.length) > 1));
      for (let t = 0; t < 3; t++) {
          let shootnogoalP = String.fromCharCode(97,112,112,114,111,120,95,55,95,50,55,0);
          let libreanimatedK = String.fromCharCode(105,110,102,108,105,103,104,116,95,122,95,52,57,0);
          let internetv = String.fromCharCode(115,117,98,109,111,100,101,108,95,107,95,56,51,0);
         temperatures = `${shootnogoalP.length}`;
         shootnogoalP += `${(String.fromCharCode(108,0) == internetv ? libreanimatedK.length : internetv.length)}`;
         libreanimatedK += `${internetv.length + libreanimatedK.length}`;
      }
      if (!iconbellactiveZ.endsWith(leaguedetailsbgM)) {
          let specn = String.fromCharCode(122,95,54,54,95,99,111,114,114,101,99,116,105,110,103,0);
          let topicp = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,100,95,52,51,0);
          let homeicong = 5.0;
         leaguedetailsbgM += "2";
         specn = `${1 | specn.length}`;
         topicp = `${topicp.length * specn.length}`;
         homeicong += parseFloat(`${topicp.length % (Math.max(6, parseInt(`${homeicong}`)))}`);
      }
         zhuboY = `${zhuboY.length}`;
         leaguedetailsbgM += `${parseInt(`${modalf}`) * 2}`;
      for (let t = 0; t < 1; t++) {
         zhuboY = `${(String.fromCharCode(78,0) == leaguedetailsbgM ? leaguedetailsbgM.length : parseInt(`${modalf}`))}`;
      }
      while (!iconbellactiveZ.endsWith(`${shrinkf.length}`)) {
          let privatechatbgr = String.fromCharCode(109,101,110,117,95,98,95,52,0);
          let projectB = 1.0;
          let modelC = String.fromCharCode(109,95,53,55,95,105,100,99,116,99,111,108,0);
          let vietnamO = 5.0;
          let greena = String.fromCharCode(121,95,54,52,95,115,117,98,100,97,116,97,0);
         iconbellactiveZ += `${(String.fromCharCode(88,0) == privatechatbgr ? shrinkf.length : privatechatbgr.length)}`;
         projectB -= (modelC == String.fromCharCode(88,0) ? modelC.length : parseInt(`${vietnamO}`));
         vietnamO += parseFloat(`${modelC.length}`);
         greena = `${parseInt(`${vietnamO}`)}`;
         break;
      }
       let basketballplayerplaceholderx = String.fromCharCode(98,121,116,101,115,104,117,109,97,110,95,121,95,48,0);
       let userC = String.fromCharCode(109,101,97,115,117,114,105,110,103,95,99,95,57,48,0);
      while (2 == libfbjni2.length) {
          let iconnewchat9 = 2.0;
          let checkboxw = true;
          let dycreatorv = 1;
          let sourceA = 4.0;
         shrinkf += `${((checkboxw ? 5 : 1) - libfbjni2.length)}`;
         iconnewchat9 *= parseInt(`${iconnewchat9}`) ^ parseInt(`${sourceA}`);
         checkboxw = 63.67 <= sourceA;
         dycreatorv /= Math.max(2, 3 - dycreatorv);
         break;
      }
          let icontransferclubi = String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,117,95,56,56,0);
         zhuboY = `${2 + basketballplayerplaceholderx.length}`;
         icontransferclubi += `${icontransferclubi.length * icontransferclubi.length}`;
      videoY += "2";
      break;
   }
   if (2.71 >= (2.64 + matchinactiveL) || 4.84 >= (ballj / 2.64)) {
      ballj /= Math.max(5, 2 * attributedstringF.length);
   }
      graphicsf.push((String.fromCharCode(55,0) == videoY ? videoY.length : iconqqo.size));
      ballj *= (String.fromCharCode(117,0) == videoY ? videoY.length : attributedstringF.length);
   let bottomP = bootsplashA ? !bootsplashA : bootsplashA;
   do {
      bootsplashA = roundl < 66 && type_mA < 82.21;
      if (bottomP) {
         break;
      }
   } while (bottomP && (wnewsshare8.length <= 5 || (wnewsshare8.length / (Math.max(5, 8))) <= 3));
   while (!bootsplashA) {
      bootsplashA = wnewsshare8.length == 52 && !bootsplashA;
      break;
   }
      attributedstringF.push(attributedstringF.length - 1);
      sansJ += parseInt(`${ballj}`);


      if (videoRef.current) {

      iconqqo = new Map([[`${graphicsf.length}`, wnewsshare8.length]]);
       let flagH = String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,116,95,56,54,0);
         flagH += `${flagH.length}`;
         flagH += `${flagH.length}`;
          let disconnectedlogoz: Map<any, any> = new Map([[String.fromCharCode(100,121,97,100,105,99,95,55,95,53,48,0),String.fromCharCode(115,95,57,50,95,109,111,110,111,116,111,110,105,99,0)], [String.fromCharCode(104,95,53,56,95,113,117,97,110,116,105,122,101,0),String.fromCharCode(107,95,55,57,95,107,109,115,0)], [String.fromCharCode(110,95,53,95,98,111,119,108,105,110,103,0),String.fromCharCode(107,95,51,56,95,116,97,116,105,99,0)]]);
         flagH = `${disconnectedlogoz.size}`;
      bootsplashA = live9.length < iconqqo.size;
   for (let w = 0; w < 3; w++) {
      ballj *= iconqqo.size * 2;
   }
      iconqqo.set(live9, templateprocessorc.length);
      iconqqo = new Map([[`${iconqqo.size}`, 3 >> (Math.min(5, Math.abs(parseInt(`${type_mA}`))))]]);
   while (3 <= (videoY.length % (Math.max(1, 10))) || 5 <= (1 / (Math.max(2, videoY.length)))) {
       let sideO: Array<any> = [String.fromCharCode(106,95,51,56,95,116,101,114,109,0), String.fromCharCode(116,95,57,55,95,102,116,118,112,110,111,100,101,0), String.fromCharCode(111,97,101,112,95,48,95,53,56,0)];
       let sportz = String.fromCharCode(98,95,48,95,100,101,108,97,116,101,100,0);
       let membery: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,108,121,95,121,95,54,51,0),false ], [String.fromCharCode(112,95,51,54,95,110,97,109,101,115,112,97,99,101,0),false ], [String.fromCharCode(104,95,56,54,95,112,114,101,100,105,99,116,0),true ]]);
       let librrch = 1.0;
       let nativemoduleB: Map<any, any> = new Map([[String.fromCharCode(106,95,54,57,95,115,116,97,114,116,109,97,114,107,101,114,0),String.fromCharCode(112,95,50,95,115,116,114,116,111,107,0)], [String.fromCharCode(97,112,112,114,111,118,101,95,101,95,57,49,0),String.fromCharCode(121,95,57,49,95,100,111,109,97,105,110,0)], [String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,52,95,49,48,0),String.fromCharCode(117,110,99,108,105,112,112,101,100,95,48,95,49,49,0)]]);
      let showless3 = librrch <= 4930302.0;
      do {
         librrch /= Math.max(3, parseInt(`${librrch}`) | sideO.length);
         if (showless3) {
            break;
         }
      } while ((sideO.length < 3) && showless3);
         nativemoduleB.set(`${sideO.length}`, membery.size / (Math.max(9, sideO.length)));
         sportz += "2";
      let main_sL = sportz.length <= 6525604;
      do {
         sportz = `${sideO.length}`;
         if (main_sL) {
            break;
         }
      } while (main_sL && (!sportz.endsWith(`${sideO.length}`)));
      for (let f = 0; f < 3; f++) {
          let o_countO = String.fromCharCode(120,95,51,95,98,97,99,107,100,114,111,112,0);
         nativemoduleB = new Map([[sportz, o_countO.length]]);
      }
       let mbbidZ = 4;
       let nativeexJ = 1;
          let videobufferloadingh: Map<any, any> = new Map([[String.fromCharCode(118,97,108,117,101,100,95,120,95,56,56,0),String.fromCharCode(121,95,50,54,95,109,111,110,105,116,111,114,105,110,103,0)], [String.fromCharCode(99,97,116,99,104,105,110,103,95,106,95,50,57,0),String.fromCharCode(106,95,54,56,95,115,117,103,103,101,115,116,105,111,110,0)], [String.fromCharCode(122,95,50,50,95,115,101,116,116,97,98,108,101,0),String.fromCharCode(102,95,50,54,95,100,111,119,110,108,111,97,100,101,100,0)]]);
          let empty9 = 4.0;
         membery.set(`${librrch}`, 2 << (Math.min(5, Math.abs(membery.size))));
         videobufferloadingh = new Map([[`${videobufferloadingh.size}`, parseInt(`${empty9}`) ^ 3]]);
         empty9 -= 1;
         nativeexJ |= (sportz == String.fromCharCode(108,0) ? nativemoduleB.size : sportz.length);
         nativemoduleB = new Map([[`${membery.size}`, membery.size & 1]]);
         librrch *= 3;
         nativeexJ -= sportz.length;
       let libavcodecC = 3.0;
       let time_g1n = 0.0;
         membery = new Map([[sportz, sportz.length]]);
      let bellreminder8 = 8522381.0 <= time_g1n;
      do {
          let libfolly8 = String.fromCharCode(109,106,112,101,103,95,104,95,52,49,0);
          let videovarJ = String.fromCharCode(117,95,55,52,95,115,99,104,109,0);
          let subsK = String.fromCharCode(110,95,57,54,95,108,111,99,97,108,105,122,101,100,0);
          let dragcloseP: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,98,95,57,55,0),652], [String.fromCharCode(119,95,57,95,115,116,117,100,105,111,0),504], [String.fromCharCode(115,99,116,112,95,112,95,50,49,0),173]]);
         time_g1n += 3 * dragcloseP.size;
         libfolly8 = `${videovarJ.length}`;
         videovarJ += `${(libfolly8 == String.fromCharCode(84,0) ? libfolly8.length : videovarJ.length)}`;
         subsK = `${videovarJ.length - 3}`;
         dragcloseP.set(libfolly8, (String.fromCharCode(99,0) == libfolly8 ? videovarJ.length : libfolly8.length));
         if (bellreminder8) {
            break;
         }
      } while ((5.97 == (time_g1n - 1.90) && 1.90 == (libavcodecC / (Math.max(9, time_g1n)))) && bellreminder8);
      if (2 >= (sportz.length & sideO.length) || (sportz.length & sideO.length) >= 2) {
         sportz += `${3 ^ nativemoduleB.size}`;
      }
      videoY = "3";
      break;
   }
   while (1.69 <= (5.39 - matchinactiveL) || 5.70 <= (matchinactiveL - 5.39)) {
      ballj /= Math.max((videoY == String.fromCharCode(100,0) ? wnewsshare8.length : videoY.length), 2);
      break;
   }
       let settingsH = String.fromCharCode(112,105,99,107,95,120,95,50,57,0);
      let borderlessg = settingsH.length <= 8026990;
      do {
         settingsH += `${3 & settingsH.length}`;
         if (borderlessg) {
            break;
         }
      } while (borderlessg && (settingsH != String.fromCharCode(88,0) || settingsH.length == 1));
         settingsH += `${settingsH.length}`;
       let linkM = true;
      bootsplashA = null != iconqqo.get(`${sansJ}`);
      matchinactiveL *= iconqqo.size;
        videoRef.current.seek(value);

      iconqqo.set(`${ballj}`, 2 >> (Math.min(2, live9.length)));
      ballj /= Math.max(3, live9.length);
       let progressX = 0.0;
          let predictionarrowW = String.fromCharCode(108,95,51,49,95,111,102,102,101,114,0);
          let ksad7 = true;
          let predictionbannerW = String.fromCharCode(121,95,57,53,95,115,119,105,114,108,0);
         progressX += (3 ^ (ksad7 ? 1 : 4));
         predictionarrowW = `${predictionarrowW.length}`;
         ksad7 = predictionbannerW.length >= predictionarrowW.length;
         predictionbannerW += `${predictionarrowW.length}`;
          let libturbomodulejsijnie = true;
          let bingx = 4.0;
         progressX -= parseInt(`${progressX}`) << (Math.min(Math.abs(parseInt(`${bingx}`)), 1));
         libturbomodulejsijnie = !libturbomodulejsijnie;
         bingx -= 1;
       let regeng6 = String.fromCharCode(120,95,49,56,0);
      wnewsshare8 = [parseInt(`${type_mA}`)];
      matchinactiveL -= pause7.length;
       let moduleG = 5;
      while (3 >= (moduleG * 2) && 2 >= (moduleG * moduleG)) {
         moduleG /= Math.max(3, moduleG);
         break;
      }
      let footballtrophy1 = moduleG >= 5066279;
      do {
          let textinput2 = 2.0;
          let schedulerP: Array<any> = [470, 583, 855];
          let networkA = true;
          let uimanagerJ = String.fromCharCode(97,118,112,114,105,118,95,48,95,49,0);
         moduleG &= parseInt(`${textinput2}`);
         textinput2 *= ((networkA ? 1 : 2) / 2);
         schedulerP = [uimanagerJ.length];
         networkA = uimanagerJ.length <= 61;
         if (footballtrophy1) {
            break;
         }
      } while ((2 <= (moduleG * 1)) && footballtrophy1);
      if (1 == (moduleG % (Math.max(1, 9))) && 1 == (moduleG % (Math.max(moduleG, 5)))) {
          let basketballplayerplaceholderJ = String.fromCharCode(105,95,56,51,95,101,120,116,110,0);
         moduleG /= Math.max(moduleG & 2, 4);
         basketballplayerplaceholderJ += `${1 | basketballplayerplaceholderJ.length}`;
      }
      templateprocessorc = `${2 * moduleG}`;
   while (bootsplashA) {
      iconqqo = new Map([[`${pause7.length}`, 2 | pause7.length]]);
      break;
   }
   let buildV = videoY == String.fromCharCode(57,121,100,101,53,97,0);
   do {
       let listO: Map<any, any> = new Map([[String.fromCharCode(112,95,54,56,95,111,114,100,101,114,0),true ], [String.fromCharCode(113,95,49,48,48,95,114,101,97,99,104,0),false ]]);
       let hiadm: Array<any> = [209, 949, 431];
       let downloadK = String.fromCharCode(113,95,49,48,48,95,114,101,97,108,109,0);
       let progress8 = String.fromCharCode(107,109,101,97,110,115,95,111,95,52,55,0);
       let defaultplayerimgl = 2;
      while (Array.from(listO.values()).includes(hiadm.length)) {
         hiadm.push(progress8.length);
         break;
      }
       let iconuserP = String.fromCharCode(99,111,110,116,114,111,108,95,51,95,50,51,0);
      for (let r = 0; r < 2; r++) {
          let libreactH = String.fromCharCode(115,101,108,101,99,116,95,120,95,52,54,0);
          let popupK: Map<any, any> = new Map([[String.fromCharCode(115,116,101,110,99,105,108,95,105,95,57,0),996], [String.fromCharCode(122,95,54,50,95,109,109,120,101,120,116,0),914], [String.fromCharCode(115,116,114,111,107,101,115,95,116,95,56,49,0),746]]);
          let iconplayF = 0.0;
         listO.set(`${iconplayF}`, libreactH.length & 1);
         libreactH = `${popupK.size}`;
         popupK.set(`${popupK.size}`, popupK.size | 1);
      }
      while (downloadK.length < progress8.length) {
         downloadK += `${(String.fromCharCode(99,0) == iconuserP ? iconuserP.length : hiadm.length)}`;
         break;
      }
       let modali: Map<any, any> = new Map([[String.fromCharCode(112,95,49,51,95,102,105,114,101,119,97,108,108,0),true ], [String.fromCharCode(116,95,56,49,95,112,114,117,110,101,0),true ]]);
          let showmoreH: Map<any, any> = new Map([[String.fromCharCode(97,114,99,104,101,116,121,112,101,95,121,95,54,51,0),false ], [String.fromCharCode(107,95,57,56,95,102,114,105,101,110,100,108,121,0),true ]]);
          let floatingS = 1;
         hiadm = [modali.size];
         showmoreH = new Map([[`${showmoreH.size}`, 2]]);
         floatingS ^= 2 - showmoreH.size;
         downloadK += "2";
      while ((hiadm.length >> (Math.min(Math.abs(2), 1))) < 4 && 2 < (defaultplayerimgl >> (Math.min(hiadm.length, 5)))) {
         hiadm = [downloadK.length];
         break;
      }
      if ((hiadm.length | 2) >= 3 && 2 >= (hiadm.length | listO.size)) {
          let floatingN = 0.0;
         hiadm = [modali.size];
         floatingN += 2 - parseInt(`${floatingN}`);
      }
       let pingr = String.fromCharCode(115,113,117,97,114,101,100,95,53,95,57,49,0);
       let uploadr = String.fromCharCode(108,95,50,53,95,115,119,105,102,116,121,0);
      let libsentryS = 6049591 >= downloadK.length;
      do {
         downloadK += `${pingr.length % (Math.max(1, 5))}`;
         if (libsentryS) {
            break;
         }
      } while (libsentryS && (2 >= iconuserP.length && downloadK == String.fromCharCode(89,0)));
         pingr += `${modali.size}`;
          let changeL = true;
          let toponG = false;
          let libruntimeexecutorq = 3;
         pingr = `${2 + pingr.length}`;
         changeL = toponG;
         libruntimeexecutorq ^= ((toponG ? 2 : 2) >> (Math.min(5, Math.abs(1))));
      while (uploadr.endsWith(`${modali.size}`)) {
         modali.set(`${iconuserP}`, listO.size);
         break;
      }
         listO = new Map([[uploadr, pingr.length & uploadr.length]]);
      videoY = "2";
      if (buildV) {
         break;
      }
   } while (buildV && ((ballj * videoY.length) <= 1.70 && 1 <= (2 * parseInt(`${ballj}`))));
      sansJ *= parseInt(`${type_mA}`);
       let matchdetailbgq: Map<any, any> = new Map([[String.fromCharCode(109,105,103,104,116,95,105,95,54,48,0),true ], [String.fromCharCode(115,95,53,53,95,114,101,113,115,116,97,116,101,0),true ]]);
      if (4 == (matchdetailbgq.size >> (Math.min(Math.abs(2), 1))) && (matchdetailbgq.size >> (Math.min(Math.abs(matchdetailbgq.size), 3))) == 2) {
          let iconmegaphonet: Array<any> = [String.fromCharCode(99,95,49,54,95,101,109,112,116,121,0), String.fromCharCode(107,95,56,48,95,98,111,117,110,100,105,110,103,0), String.fromCharCode(114,116,114,101,101,110,111,100,101,95,54,95,51,48,0)];
         matchdetailbgq.set(`${iconmegaphonet.length}`, iconmegaphonet.length ^ 3);
      }
         matchdetailbgq = new Map([[`${matchdetailbgq.size}`, matchdetailbgq.size / 2]]);
      for (let r = 0; r < 3; r++) {
          let long_j8n = String.fromCharCode(118,97,114,105,97,110,99,101,95,97,95,55,54,0);
          let pagen: Array<any> = [590, 342];
          let armvaQ = String.fromCharCode(97,95,57,55,95,97,117,116,104,111,114,115,0);
         matchdetailbgq.set(armvaQ, armvaQ.length);
         long_j8n += `${long_j8n.length}`;
         pagen.push(1 ^ pagen.length);
      }
      attributedstringF = [2];
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current]
  );

  const handlePlayPause = () => {
       let mutedd = String.fromCharCode(113,95,49,49,95,100,111,103,0);
    let detailU = false;
    let backgroundx = String.fromCharCode(104,117,110,103,95,112,95,57,55,0);
    let suggestion0 = String.fromCharCode(102,95,54,52,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0);
    let largebrightnessO = 0;
    let inouttargetredT = 3.0;
    let whitec: Map<any, any> = new Map([[String.fromCharCode(112,95,55,56,95,120,111,114,101,100,0),698], [String.fromCharCode(99,104,101,99,107,95,117,95,55,50,0),574], [String.fromCharCode(115,117,103,103,101,115,116,101,100,95,49,95,49,52,0),55]]);
    let basketballdetailsbgc: Array<any> = [319, 393, 714];
    let googleS = String.fromCharCode(122,101,114,111,122,101,114,111,95,107,95,50,53,0);
    let mbjscommonW: Array<any> = [937, 289];
    let thailandb: Map<any, any> = new Map([[String.fromCharCode(99,111,109,102,111,114,116,95,53,95,49,53,0),169], [String.fromCharCode(105,95,56,48,95,114,111,108,101,0),494], [String.fromCharCode(119,95,50,50,0),208]]);
   if (suggestion0.length >= 2) {
      suggestion0 += "1";
   }
       let friendsX = String.fromCharCode(108,105,110,109,97,116,104,95,113,95,52,49,0);
       let reviewx = String.fromCharCode(105,95,56,51,0);
       let bannerI = 1.0;
      let hover6 = 6809978.0 >= bannerI;
      do {
         bannerI -= parseFloat(`${friendsX.length + 2}`);
         if (hover6) {
            break;
         }
      } while ((!reviewx.endsWith(`${bannerI}`)) && hover6);
         reviewx = `${friendsX.length | 2}`;
          let eventm = 2;
          let b_animation_ = true;
          let animationsB = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,98,95,52,49,0);
         friendsX += `${(String.fromCharCode(76,0) == reviewx ? reviewx.length : parseInt(`${bannerI}`))}`;
         eventm >>= Math.min(3, Math.abs(eventm));
         b_animation_ = !b_animation_;
         animationsB = `${(String.fromCharCode(70,0) == animationsB ? (b_animation_ ? 3 : 2) : animationsB.length)}`;
       let bannerm = 3.0;
         friendsX = `${reviewx.length & friendsX.length}`;
       let private_0P = false;
       let pausep = true;
         reviewx = `${(3 & (private_0P ? 1 : 1))}`;
          let androidV = 4.0;
          let rncore4: Array<any> = [547, 960];
         bannerm *= parseInt(`${bannerm}`) / 1;
         androidV *= 3 | parseInt(`${androidV}`);
         rncore4.push(3 << (Math.min(2, rncore4.length)));
      while (friendsX.includes(`${pausep}`)) {
          let libpangleflippedG = false;
          let zoomk = String.fromCharCode(115,108,105,100,101,95,106,95,50,50,0);
          let strings2: Map<any, any> = new Map([[String.fromCharCode(115,95,55,50,95,100,101,102,101,97,116,0),676], [String.fromCharCode(121,95,53,95,97,110,97,108,121,122,101,0),806]]);
          let defaultbasketballbgw = false;
          let eactj = String.fromCharCode(99,95,56,55,95,97,110,109,114,0);
         friendsX += `${(3 >> (Math.min(4, Math.abs((pausep ? 1 : 1)))))}`;
         libpangleflippedG = eactj == String.fromCharCode(105,0);
         zoomk += `${strings2.size << (Math.min(Math.abs(3), 1))}`;
         strings2 = new Map([[`${strings2.size}`, 1]]);
         defaultbasketballbgw = zoomk == String.fromCharCode(48,0);
         eactj += `${((libpangleflippedG ? 5 : 2) | 3)}`;
         break;
      }
      mutedd = `${(parseInt(`${bannerI}`) >> (Math.min(1, Math.abs((detailU ? 3 : 3)))))}`;
       let signinupM: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,102,117,108,95,104,95,50,57,0),107], [String.fromCharCode(103,95,50,48,95,115,97,109,112,108,101,0),322]]);
       let iconwatchK = false;
      let edit3 = 7457707 >= signinupM.size;
      do {
         signinupM = new Map([[`${signinupM.size}`, (signinupM.size << (Math.min(2, Math.abs((iconwatchK ? 2 : 3)))))]]);
         if (edit3) {
            break;
         }
      } while ((iconwatchK) && edit3);
         iconwatchK = ((signinupM.size | (iconwatchK ? 5 : signinupM.size)) >= 5);
      let blackN = signinupM.size >= 9344439;
      do {
         signinupM.set(`${iconwatchK}`, (3 | (iconwatchK ? 4 : 3)));
         if (blackN) {
            break;
         }
      } while (blackN && (iconwatchK));
       let cornere = String.fromCharCode(108,97,115,116,95,49,95,53,51,0);
      if (cornere.length <= 5 || !iconwatchK) {
         iconwatchK = String.fromCharCode(79,0) == cornere;
      }
      let privatechatbg_ = 5887922 >= signinupM.size;
      do {
         signinupM = new Map([[cornere, ((iconwatchK ? 2 : 4))]]);
         if (privatechatbg_) {
            break;
         }
      } while (privatechatbg_ && (3 > signinupM.size && (3 * signinupM.size) > 1));
      inouttargetredT *= (parseFloat(`${(iconwatchK ? 2 : 4) + 3}`));
   while (!Array.from(whitec.values()).includes(largebrightnessO)) {
       let otherl = 1;
         otherl <<= Math.min(5, Math.abs(otherl | 2));
      while (3 == (3 / (Math.max(5, otherl)))) {
         otherl ^= otherl;
         break;
      }
       let indicatorT = 1.0;
       let play7 = 4.0;
      whitec.set(`${largebrightnessO}`, mutedd.length);
      break;
   }
       let defaultpredictionprofileF = 1.0;
       let singaporeN = String.fromCharCode(102,102,116,115,95,52,95,55,56,0);
       let iconarrowleft3 = false;
         singaporeN += "3";
         iconarrowleft3 = (((iconarrowleft3 ? singaporeN.length : 66) << (Math.min(singaporeN.length, 5))) > 66);
          let whistleC: Array<any> = [28, 656, 941];
          let control7 = String.fromCharCode(99,95,55,55,95,97,117,116,111,108,111,99,107,0);
         defaultpredictionprofileF -= whistleC.length / (Math.max(6, singaporeN.length));
         whistleC = [2];
         control7 = `${control7.length}`;
          let mailX = true;
          let navigationP = 4.0;
         defaultpredictionprofileF *= parseInt(`${navigationP}`) ^ 2;
         mailX = !mailX || mailX;
         navigationP /= Math.max(2, (1 - (mailX ? 3 : 3)));
         singaporeN += `${((iconarrowleft3 ? 4 : 4) + parseInt(`${defaultpredictionprofileF}`))}`;
      let shareE = iconarrowleft3 ? !iconarrowleft3 : iconarrowleft3;
      do {
          let nbatrophyc = String.fromCharCode(97,95,50,49,95,103,110,111,0);
          let style2 = String.fromCharCode(116,105,102,102,95,100,95,50,57,0);
          let icondefaultthumbnailU: Map<any, any> = new Map([[String.fromCharCode(119,95,56,57,95,99,104,107,108,105,115,116,0),String.fromCharCode(98,95,50,54,95,100,101,109,111,0)], [String.fromCharCode(121,95,55,51,95,116,114,97,110,115,108,97,116,111,110,0),String.fromCharCode(101,120,116,101,110,115,105,111,110,115,95,112,95,55,56,0)]]);
          let rncoreF = 2.0;
         iconarrowleft3 = singaporeN == String.fromCharCode(108,0);
         nbatrophyc = `${nbatrophyc.length}`;
         style2 += `${style2.length % (Math.max(1, 6))}`;
         icondefaultthumbnailU.set(`${rncoreF}`, icondefaultthumbnailU.size - parseInt(`${rncoreF}`));
         if (shareE) {
            break;
         }
      } while (((1.98 - defaultpredictionprofileF) > 4.14) && shareE);
         defaultpredictionprofileF *= (singaporeN.length & (iconarrowleft3 ? 3 : 2));
      while (iconarrowleft3) {
         defaultpredictionprofileF -= ((iconarrowleft3 ? 1 : 5));
         break;
      }
          let flag9 = 3.0;
          let notificationB = 5.0;
         defaultpredictionprofileF *= parseInt(`${defaultpredictionprofileF}`) + 2;
         flag9 -= parseInt(`${notificationB}`);
      largebrightnessO *= suggestion0.length / 2;

    clearTimeout(iconTimer.current);

   for (let b = 0; b < 1; b++) {
       let statisticsinactive2 = String.fromCharCode(114,97,110,95,99,95,53,55,0);
       let zhuboj: Array<any> = [998, 329, 798];
       let const_rt = 5.0;
         const_rt += parseInt(`${const_rt}`);
         statisticsinactive2 += "3";
         zhuboj = [parseInt(`${const_rt}`) << (Math.min(zhuboj.length, 3))];
       let sharemodalE = 5;
       let othera = 3;
      let foregroundV = 7143815 >= othera;
      do {
          let whitevideolivep: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,111,110,115,95,122,95,57,56,0),864], [String.fromCharCode(115,95,52,0),761]]);
         othera %= Math.max((String.fromCharCode(86,0) == statisticsinactive2 ? statisticsinactive2.length : sharemodalE), 3);
         whitevideolivep = new Map([[`${whitevideolivep.size}`, whitevideolivep.size % 2]]);
         if (foregroundV) {
            break;
         }
      } while ((5 > (othera << (Math.min(3, Math.abs(sharemodalE)))) && 5 > (sharemodalE << (Math.min(Math.abs(othera), 2)))) && foregroundV);
         statisticsinactive2 += `${zhuboj.length << (Math.min(5, Math.abs(sharemodalE)))}`;
      while (statisticsinactive2.startsWith(`${zhuboj.length}`)) {
         zhuboj.push((String.fromCharCode(119,0) == statisticsinactive2 ? statisticsinactive2.length : zhuboj.length));
         break;
      }
          let showlessU = 3;
          let projectB = String.fromCharCode(121,95,51,55,95,112,114,105,109,101,114,0);
         sharemodalE *= zhuboj.length;
         showlessU *= projectB.length;
         projectB += `${2 & projectB.length}`;
         zhuboj = [1];
      backgroundx += "1";
   }
      basketballdetailsbgc.push(((detailU ? 2 : 5) / 1));
   for (let s = 0; s < 2; s++) {
       let static_5K: Map<any, any> = new Map([[String.fromCharCode(99,108,108,99,95,48,95,56,57,0),547], [String.fromCharCode(105,95,50,53,95,103,97,109,101,115,0),961]]);
       let privacy2 = 1.0;
       let bodanA = String.fromCharCode(103,95,51,51,95,99,111,109,101,0);
       let stepD = String.fromCharCode(105,110,116,99,104,101,99,107,95,114,95,52,48,0);
      while (bodanA.length <= 1) {
         bodanA = `${bodanA.length << (Math.min(Math.abs(3), 5))}`;
         break;
      }
      if ((privacy2 / 2.63) == 2.97) {
         bodanA = `${parseInt(`${privacy2}`) << (Math.min(bodanA.length, 1))}`;
      }
         static_5K.set(bodanA, 2 & parseInt(`${privacy2}`));
      let shoot4 = 5921318.0 <= privacy2;
      do {
          let predictionarrowx = String.fromCharCode(109,95,52,50,95,99,102,102,116,98,0);
         privacy2 += parseFloat(`${predictionarrowx.length >> (Math.min(Math.abs(2), 4))}`);
         if (shoot4) {
            break;
         }
      } while (shoot4 && (Array.from(static_5K.values()).includes(privacy2)));
       let blackW = false;
      while ((static_5K.size | bodanA.length) < 1) {
         bodanA += `${3 / (Math.max(6, parseInt(`${privacy2}`)))}`;
         break;
      }
       let targetz = 3.0;
      let gradleT = 8197101 <= static_5K.size;
      do {
          let soundt = 1;
          let loading4 = 2.0;
          let rewardO = 0.0;
         static_5K.set(`${blackW}`, 3 * static_5K.size);
         soundt <<= Math.min(Math.abs(parseInt(`${rewardO}`) << (Math.min(4, Math.abs(soundt)))), 1);
         loading4 *= parseInt(`${rewardO}`) & 2;
         if (gradleT) {
            break;
         }
      } while (gradleT && (static_5K.size >= 4));
          let downloadingH = false;
         stepD += `${parseInt(`${privacy2}`) + 2}`;
         downloadingH = !downloadingH;
      while (5 <= stepD.length) {
         stepD = `${static_5K.size << (Math.min(3, Math.abs(parseInt(`${privacy2}`))))}`;
         break;
      }
       let indicatorl = 2.0;
       let iconplay2 = 1.0;
      for (let d = 0; d < 1; d++) {
         stepD += `${stepD.length >> (Math.min(Math.abs(1), 2))}`;
      }
      basketballdetailsbgc = [((detailU ? 4 : 1))];
   }
      backgroundx += "3";
      backgroundx += `${basketballdetailsbgc.length - 1}`;
    setShowIcon(true);

   for (let q = 0; q < 2; q++) {
       let wind5 = String.fromCharCode(103,95,57,54,95,109,111,114,101,0);
       let sportw = String.fromCharCode(99,95,50,51,95,101,110,104,97,110,99,101,114,0);
       let subino = String.fromCharCode(118,95,54,48,95,121,97,108,101,0);
       let charts: Map<any, any> = new Map([[String.fromCharCode(116,95,55,49,95,99,104,111,105,99,101,115,0),false ], [String.fromCharCode(115,95,49,49,95,100,110,111,119,0),true ], [String.fromCharCode(108,95,49,56,95,109,105,109,105,99,0),false ]]);
       let uploadS = String.fromCharCode(113,95,50,55,95,102,117,110,110,121,0);
          let n_lock9 = String.fromCharCode(109,97,114,107,100,111,119,110,95,122,95,51,50,0);
         charts = new Map([[wind5, wind5.length / 3]]);
         n_lock9 = `${(n_lock9 == String.fromCharCode(90,0) ? n_lock9.length : n_lock9.length)}`;
         charts.set(wind5, wind5.length);
         sportw = `${wind5.length - uploadS.length}`;
          let header9: Map<any, any> = new Map([[String.fromCharCode(106,95,50,52,95,102,105,118,101,0),true ], [String.fromCharCode(114,95,55,95,115,112,97,99,101,114,0),false ]]);
          let direct_ = String.fromCharCode(110,95,55,57,95,109,101,109,111,106,105,0);
         wind5 = "3";
         header9.set(`${direct_}`, direct_.length >> (Math.min(4, Math.abs(header9.size))));
      while ((3 & charts.size) == 3) {
         charts = new Map([[sportw, wind5.length]]);
         break;
      }
      let gifgoalu = String.fromCharCode(122,120,98,121,111,114,104,106,110,55,0) == subino;
      do {
          let liveR = String.fromCharCode(104,97,114,100,119,97,114,101,95,104,95,53,50,0);
          let icondownimgY = false;
          let mathk = false;
          let loadingL = String.fromCharCode(100,101,113,117,101,117,101,95,104,95,57,54,0);
         subino = `${(String.fromCharCode(53,0) == sportw ? sportw.length : charts.size)}`;
         liveR = `${loadingL.length & 2}`;
         icondownimgY = !mathk;
         loadingL += `${((mathk ? 2 : 5) + loadingL.length)}`;
         if (gifgoalu) {
            break;
         }
      } while (gifgoalu && (sportw.length > 4));
          let modulesF: Map<any, any> = new Map([[String.fromCharCode(98,95,55,50,95,100,117,97,108,105,110,112,117,116,0),299], [String.fromCharCode(115,95,55,57,95,105,110,105,116,105,97,108,105,122,105,110,103,0),708]]);
          let iconmored = 1.0;
          let imagewatchliveD = 5;
         sportw = "2";
         modulesF = new Map([[`${modulesF.size}`, modulesF.size]]);
         iconmored += 3 & modulesF.size;
         imagewatchliveD -= modulesF.size / (Math.max(9, parseInt(`${iconmored}`)));
       let volumeL = 3.0;
       let darkI = 2.0;
      for (let q = 0; q < 3; q++) {
         uploadS += `${uploadS.length}`;
      }
      while (uploadS.endsWith(`${subino.length}`)) {
          let statsnomoredataX = 1.0;
          let iconeditY = String.fromCharCode(98,105,110,115,95,101,95,57,54,0);
          let huaweiu = 5.0;
          let crossm: Map<any, any> = new Map([[String.fromCharCode(108,105,103,104,116,95,55,95,52,54,0),65], [String.fromCharCode(115,101,101,107,104,101,97,100,95,117,95,56,57,0),82]]);
          let sentryc: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,97,114,100,101,100,95,53,95,50,51,0),31], [String.fromCharCode(122,95,49,48,95,118,105,101,119,0),889]]);
         uploadS += `${parseInt(`${darkI}`)}`;
         statsnomoredataX -= parseFloat(`${parseInt(`${huaweiu}`)}`);
         iconeditY += `${sentryc.size}`;
         huaweiu -= parseInt(`${huaweiu}`) / 3;
         crossm = new Map([[`${huaweiu}`, iconeditY.length]]);
         sentryc.set(`${statsnomoredataX}`, parseInt(`${huaweiu}`));
         break;
      }
      while (subino == sportw) {
         sportw = "3";
         break;
      }
      let inouttargetred0 = sportw == String.fromCharCode(50,54,122,110,110,99,111,117,0);
      do {
         sportw = `${(String.fromCharCode(54,0) == subino ? subino.length : sportw.length)}`;
         if (inouttargetred0) {
            break;
         }
      } while ((wind5.length >= 3) && inouttargetred0);
         darkI += parseFloat(`${parseInt(`${volumeL}`) | sportw.length}`);
      while (wind5.length < uploadS.length) {
         wind5 += `${1 + parseInt(`${darkI}`)}`;
         break;
      }
      if (parseInt(`${darkI}`) >= wind5.length) {
         darkI *= parseFloat(`${1}`);
      }
      basketballdetailsbgc = [((detailU ? 3 : 5) / (Math.max(basketballdetailsbgc.length, 3)))];
   }
       let untickJ = true;
       let launcherd: Map<any, any> = new Map([[String.fromCharCode(109,115,109,112,101,103,95,107,95,55,56,0),844], [String.fromCharCode(100,95,54,51,95,102,105,108,108,115,0),824]]);
       let icondefaultthumbnailT = false;
      let invite6 = untickJ ? !untickJ : untickJ;
      do {
         untickJ = null == launcherd.get(`${untickJ}`);
         if (invite6) {
            break;
         }
      } while ((1 >= (4 | launcherd.size)) && invite6);
       let codeF = String.fromCharCode(112,101,114,102,111,114,109,101,114,95,48,95,51,50,0);
       let predictionbuttonL = String.fromCharCode(115,104,97,95,109,95,50,54,0);
      for (let f = 0; f < 1; f++) {
         codeF += `${(3 ^ (untickJ ? 5 : 2))}`;
      }
      if (icondefaultthumbnailT) {
         icondefaultthumbnailT = !icondefaultthumbnailT || launcherd.size > 10;
      }
         untickJ = predictionbuttonL.startsWith(`${icondefaultthumbnailT}`);
      for (let t = 0; t < 1; t++) {
          let crownK = 5.0;
          let short_cmh = 0.0;
          let mountingI = 3.0;
          let connectionu = String.fromCharCode(106,99,111,110,102,105,103,95,111,95,55,50,0);
         predictionbuttonL = "1";
         crownK += parseFloat(`${connectionu.length >> (Math.min(3, Math.abs(parseInt(`${crownK}`))))}`);
         short_cmh /= Math.max(parseFloat(`${parseInt(`${short_cmh}`) * 1}`), 1);
         mountingI /= Math.max(1, (String.fromCharCode(99,0) == connectionu ? parseInt(`${short_cmh}`) : connectionu.length));
      }
          let themec: Array<any> = [928, 853];
          let indicatorM = String.fromCharCode(102,105,110,97,108,95,105,95,51,49,0);
         predictionbuttonL = `${indicatorM.length ^ themec.length}`;
         launcherd.set(`${icondefaultthumbnailT}`, (2 + (icondefaultthumbnailT ? 5 : 3)));
         launcherd = new Map([[`${launcherd.size}`, launcherd.size]]);
      whitec.set(`${inouttargetredT}`, (suggestion0 == String.fromCharCode(110,0) ? parseInt(`${inouttargetredT}`) : suggestion0.length));
   if (1.81 <= inouttargetredT) {
      detailU = !suggestion0.includes(`${detailU}`);
   }
      inouttargetredT /= Math.max(5, parseFloat(`${1}`));
      whitec.set(mutedd, (String.fromCharCode(52,0) == mutedd ? mutedd.length : mbjscommonW.length));
    if (isPause) {

      largebrightnessO <<= Math.min(3, Math.abs(googleS.length >> (Math.min(Math.abs(3), 2))));
   if ((googleS.length - largebrightnessO) == 4 && (4 - googleS.length) == 4) {
      largebrightnessO &= 1;
   }
   if (1 == (parseInt(`${inouttargetredT}`) / (Math.max(suggestion0.length, 9)))) {
      inouttargetredT -= parseFloat(`${basketballdetailsbgc.length + 2}`);
   }
      suggestion0 += `${suggestion0.length}`;
      detailU = mbjscommonW.length <= basketballdetailsbgc.length;
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = () => {
       let control3 = 4.0;
    let package_cp: Map<any, any> = new Map([[String.fromCharCode(114,95,50,48,95,104,113,100,110,100,0),811], [String.fromCharCode(99,95,57,55,95,102,114,101,111,112,101,110,0),639], [String.fromCharCode(108,115,112,112,111,108,121,95,122,95,52,51,0),47]]);
    let liveshareV: Map<any, any> = new Map([[String.fromCharCode(117,95,56,49,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0),176], [String.fromCharCode(120,95,52,55,95,115,121,110,116,104,101,115,105,115,0),661], [String.fromCharCode(101,109,97,105,108,95,113,95,51,49,0),664]]);
    let disconnected0 = String.fromCharCode(101,120,115,115,95,103,95,53,56,0);
    let rewardvideo5: Map<any, any> = new Map([[String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,104,95,55,57,0),96], [String.fromCharCode(98,95,57,56,95,116,117,114,110,111,102,102,0),151]]);
    let pingO = false;
    let graphicsL = String.fromCharCode(106,95,57,49,95,103,114,97,100,102,117,110,0);
    let inouttargetredU = String.fromCharCode(105,110,116,101,114,112,114,101,116,95,52,95,53,0);
    let slideri = 4;
    let bgvipsportb = String.fromCharCode(99,95,57,95,100,102,115,116,0);
    let shareblackg = 4.0;
   let zhubo9 = pingO ? !pingO : pingO;
   do {
       let alertV = String.fromCharCode(97,99,99,114,117,101,95,54,95,49,52,0);
       let iconwatchW: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,97,98,108,101,95,57,95,57,54,0),String.fromCharCode(101,115,99,97,112,101,100,95,111,95,50,54,0)], [String.fromCharCode(117,95,57,53,95,100,111,119,110,115,97,109,112,108,105,110,103,0),String.fromCharCode(98,95,55,49,95,99,114,101,97,116,101,0)], [String.fromCharCode(100,95,52,54,95,116,101,115,116,114,97,110,115,0),String.fromCharCode(108,95,53,48,95,114,105,110,102,0)]]);
         iconwatchW.set(alertV, (alertV == String.fromCharCode(70,0) ? iconwatchW.size : alertV.length));
         iconwatchW = new Map([[`${iconwatchW.size}`, 3]]);
      let benefitH = 7997311 <= iconwatchW.size;
      do {
         iconwatchW = new Map([[`${iconwatchW.size}`, alertV.length]]);
         if (benefitH) {
            break;
         }
      } while ((3 <= (alertV.length + 5) && 5 <= (alertV.length + iconwatchW.size)) && benefitH);
          let fullj = 4.0;
          let iconsettingA: Array<any> = [273, 968];
         iconwatchW = new Map([[`${iconwatchW.size}`, parseInt(`${fullj}`) & 3]]);
         fullj += parseFloat(`${2 - iconsettingA.length}`);
         iconsettingA = [iconsettingA.length << (Math.min(Math.abs(1), 3))];
      while (5 == alertV.length) {
          let sportsN = String.fromCharCode(108,111,111,112,101,120,105,116,95,110,95,54,50,0);
         alertV = `${1 & iconwatchW.size}`;
         sportsN += "1";
         break;
      }
      for (let e = 0; e < 3; e++) {
         alertV += `${(String.fromCharCode(74,0) == alertV ? iconwatchW.size : alertV.length)}`;
      }
      pingO = String.fromCharCode(69,0) == alertV;
      if (zhubo9) {
         break;
      }
   } while (zhubo9 && (graphicsL.length <= 4 || !pingO));
   if ((package_cp.size % (Math.max(2, 8))) > 2) {
      pingO = 63 > slideri;
   }
   let bannerk = 5283158 >= slideri;
   do {
       let applicationI = false;
      for (let z = 0; z < 1; z++) {
          let soundM = String.fromCharCode(110,95,56,53,95,103,101,111,98,116,97,103,0);
          let blackP = 2.0;
          let moonM = String.fromCharCode(99,95,56,50,95,104,100,99,100,0);
         applicationI = !applicationI && soundM.length <= 11;
         soundM += `${parseInt(`${blackP}`) & moonM.length}`;
         blackP -= moonM.length ^ 2;
      }
      for (let k = 0; k < 3; k++) {
         applicationI = !applicationI;
      }
      for (let w = 0; w < 2; w++) {
          let arrowrightwithtailI = String.fromCharCode(106,95,57,54,95,113,117,97,110,116,120,0);
          let giftbutton_ = 4.0;
          let iconorientationD = String.fromCharCode(117,110,101,115,99,97,112,101,95,50,95,54,50,0);
          let static_de: Array<any> = [896, 376, 696];
         applicationI = iconorientationD.length >= parseInt(`${giftbutton_}`);
         arrowrightwithtailI = `${static_de.length % 1}`;
         giftbutton_ += parseFloat(`${2}`);
         iconorientationD = `${arrowrightwithtailI.length}`;
         static_de = [2];
      }
      slideri |= ((applicationI ? 1 : 1) << (Math.min(Math.abs(liveshareV.size), 2)));
      if (bannerk) {
         break;
      }
   } while ((5 < (inouttargetredU.length ^ 5) && 5 < (slideri ^ inouttargetredU.length)) && bannerk);
   let bangJ = slideri >= 6274080;
   do {
       let greytickr: Map<any, any> = new Map([[String.fromCharCode(102,101,101,100,98,97,99,107,95,106,95,56,52,0),String.fromCharCode(118,97,114,105,110,116,115,95,55,95,53,53,0)], [String.fromCharCode(116,105,109,101,99,111,100,101,115,95,119,95,53,57,0),String.fromCharCode(115,99,114,97,116,99,104,95,112,95,49,54,0)]]);
       let sentryJ = String.fromCharCode(112,95,55,55,95,98,114,97,110,100,115,0);
       let tickedP: Array<any> = [649, 47];
          let libloggerx = true;
          let iconclosewhitev = 2.0;
         tickedP.push(((libloggerx ? 4 : 4) * greytickr.size));
         libloggerx = iconclosewhitev >= iconclosewhitev;
      if ((greytickr.size % (Math.max(7, tickedP.length))) <= 2 && 2 <= (tickedP.length % (Math.max(9, greytickr.size)))) {
          let greyarrowupo: Array<any> = [String.fromCharCode(115,95,51,54,95,99,97,114,116,101,115,105,97,110,0), String.fromCharCode(107,95,50,56,95,116,114,97,99,101,114,0)];
         tickedP.push(sentryJ.length);
         greyarrowupo.push(greyarrowupo.length);
      }
      while (sentryJ.includes(`${greytickr.size}`)) {
          let activityc = String.fromCharCode(115,95,53,54,95,102,97,107,101,0);
          let greytickM = String.fromCharCode(105,95,54,55,95,109,117,116,97,116,105,110,103,0);
          let filledo = String.fromCharCode(99,111,109,112,108,105,97,110,116,95,118,95,49,57,0);
          let cornerkickT = 5;
         greytickr = new Map([[`${greytickr.size}`, 2]]);
         activityc += `${1 + filledo.length}`;
         greytickM += `${cornerkickT >> (Math.min(filledo.length, 4))}`;
         cornerkickT &= 3 ^ cornerkickT;
         break;
      }
      for (let j = 0; j < 1; j++) {
         greytickr.set(`${sentryJ}`, 3 << (Math.min(3, sentryJ.length)));
      }
         greytickr.set(`${tickedP.length}`, 3 << (Math.min(1, tickedP.length)));
      if (3 >= (tickedP.length % (Math.max(greytickr.size, 5))) || 3 >= (tickedP.length % (Math.max(greytickr.size, 10)))) {
         greytickr.set(sentryJ, greytickr.size);
      }
      if (Array.from(greytickr.keys()).includes(`${tickedP.length}`)) {
         tickedP = [tickedP.length];
      }
      for (let q = 0; q < 1; q++) {
          let heart_: Map<any, any> = new Map([[String.fromCharCode(115,100,97,108,108,111,99,120,95,102,95,49,48,48,0),233], [String.fromCharCode(119,95,55,48,95,105,110,116,101,114,97,99,116,105,110,103,0),317], [String.fromCharCode(100,95,57,57,95,111,98,115,101,114,118,105,110,103,0),157]]);
         sentryJ += `${heart_.size}`;
      }
          let leaguedetailsbg9 = 5.0;
          let proxyS = String.fromCharCode(108,97,99,101,115,95,112,95,52,54,0);
         greytickr = new Map([[`${leaguedetailsbg9}`, parseInt(`${leaguedetailsbg9}`) % (Math.max(proxyS.length, 6))]]);
      slideri /= Math.max(rewardvideo5.size + 1, 2);
      if (bangJ) {
         break;
      }
   } while (bangJ && (2 >= graphicsL.length));
      slideri += disconnected0.length << (Math.min(Math.abs(3), 2));
   if (parseInt(`${control3}`) == inouttargetredU.length) {
      control3 += rewardvideo5.size;
   }
      disconnected0 = `${inouttargetredU.length & graphicsL.length}`;
   for (let q = 0; q < 3; q++) {
      slideri <<= Math.min(Math.abs(((pingO ? 5 : 1))), 4);
   }
   while (1 == (package_cp.size / 4) && (slideri / 4) == 5) {
      package_cp.set(`${graphicsL}`, graphicsL.length & liveshareV.size);
      break;
   }
       let baseL = 1.0;
       let videobufferloadingN: Map<any, any> = new Map([[String.fromCharCode(115,95,50,53,95,117,110,115,97,116,105,115,102,105,101,100,0),84], [String.fromCharCode(97,95,50,95,114,102,102,116,105,0),941], [String.fromCharCode(114,111,117,110,100,115,95,55,95,54,51,0),312]]);
       let searchbarq = 2.0;
          let static_fv = String.fromCharCode(100,114,97,119,117,116,105,108,115,95,103,95,54,0);
          let schedulerT = 0.0;
         videobufferloadingN.set(`${baseL}`, videobufferloadingN.size / 1);
         static_fv = `${static_fv.length}`;
         schedulerT -= parseFloat(`${parseInt(`${schedulerT}`)}`);
         videobufferloadingN = new Map([[`${videobufferloadingN.size}`, videobufferloadingN.size * 2]]);
      for (let n = 0; n < 3; n++) {
         videobufferloadingN = new Map([[`${videobufferloadingN.size}`, parseInt(`${searchbarq}`) | 3]]);
      }
       let disconnectedx = String.fromCharCode(114,95,52,54,95,105,110,100,101,120,101,115,0);
      if ((parseFloat(`${disconnectedx.length}`) / (Math.max(9, searchbarq))) <= 3.64 || (searchbarq / (Math.max(3.64, 2))) <= 4.88) {
          let minimizeL = true;
          let libfolly6 = String.fromCharCode(105,95,57,57,95,97,115,102,114,116,112,0);
          let redirect6: Map<any, any> = new Map([[String.fromCharCode(108,111,119,101,115,116,95,120,95,56,49,0),72], [String.fromCharCode(97,95,54,52,95,99,104,111,112,0),857], [String.fromCharCode(107,95,56,56,95,110,111,116,105,102,105,101,114,0),225]]);
          let shootyesgoal9 = 1;
         disconnectedx = `${libfolly6.length & 2}`;
         minimizeL = shootyesgoal9 == 83;
         libfolly6 = "2 + shootyesgoal9";
         redirect6.set(`${shootyesgoal9}`, 2 / (Math.max(3, redirect6.size)));
      }
       let catagoryr = 5;
      while ((baseL + parseFloat(`${catagoryr}`)) == 1.57 || 4 == (catagoryr + parseInt(`${baseL}`))) {
         catagoryr -= disconnectedx.length;
         break;
      }
      let recommendationz = disconnectedx == String.fromCharCode(103,57,120,99,101,102,56,116,98,0);
      do {
         disconnectedx += `${catagoryr + 2}`;
         if (recommendationz) {
            break;
         }
      } while (recommendationz && (1.79 <= (4.96 - baseL) || 5 <= (4 ^ disconnectedx.length)));
         baseL *= parseFloat(`${3 << (Math.min(Math.abs(catagoryr), 4))}`);
      liveshareV.set(`${videobufferloadingN.size}`, liveshareV.size >> (Math.min(Math.abs(1), 4)));
      liveshareV = new Map([[`${pingO}`, ((pingO ? 2 : 5))]]);
   let circleX = graphicsL.length >= 6270127;
   do {
      graphicsL += `${disconnected0.length - 2}`;
      if (circleX) {
         break;
      }
   } while (circleX && ((graphicsL.length + 2) > 3 || 4 > (slideri + 2)));

    if (videoRef.current) {

   for (let o = 0; o < 2; o++) {
      disconnected0 = `${(String.fromCharCode(85,0) == graphicsL ? graphicsL.length : package_cp.size)}`;
   }
   for (let x = 0; x < 3; x++) {
      rewardvideo5 = new Map([[bgvipsportb, slideri ^ bgvipsportb.length]]);
   }
      disconnected0 = `${parseInt(`${shareblackg}`)}`;
      graphicsL += `${parseInt(`${shareblackg}`) - 1}`;
       let whiteO = false;
       let t_count2 = 2;
       let phonek: Array<any> = [283, 277, 517];
       let scoret: Array<any> = [String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,110,95,57,50,0), String.fromCharCode(118,95,49,55,95,109,115,103,115,0)];
          let downloaderh = 5;
          let giftbuttonS = 3.0;
         t_count2 &= scoret.length >> (Math.min(3, phonek.length));
         downloaderh |= 3 / (Math.max(7, parseInt(`${giftbuttonS}`)));
         giftbuttonS /= Math.max(1, parseFloat(`${2}`));
         scoret = [1];
      let w_lockX = 7726367 >= t_count2;
      do {
          let service4 = 4;
          let libreactnativejniA = true;
          let const_0f = false;
         t_count2 >>= Math.min(Math.abs(((const_0f ? 3 : 4))), 4);
         service4 *= 1;
         libreactnativejniA = 27 < (service4 & service4);
         if (w_lockX) {
            break;
         }
      } while ((t_count2 <= 5) && w_lockX);
      if ((scoret.length + 4) >= 3) {
         scoret = [scoret.length];
      }
       let playlistP: Array<any> = [257, 419];
       let bang3: Array<any> = [41, 282, 988];
      shareblackg += parseFloat(`${1}`);
      whiteO = (!whiteO ? !whiteO : !whiteO);
      slideri -= bgvipsportb.length ^ 3;
       let productQ: Array<any> = [59, 250, 372];
       let ksadT = 4;
       let hoverR = 4.0;
      while (3 < (productQ.length + parseInt(`${hoverR}`)) && 3.25 < (5.100 + hoverR)) {
         hoverR /= Math.max(ksadT, 2);
         break;
      }
         ksadT *= parseInt(`${hoverR}`) / 2;
      if (4.21 == (hoverR - 4.9) || (1 + productQ.length) == 2) {
          let progressy = 1.0;
          let trophyr = 0;
          let graphicsq = true;
          let mbnatives = String.fromCharCode(115,110,112,114,105,110,116,102,95,109,95,57,56,0);
          let webviewn = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,95,55,95,55,0);
         hoverR += parseInt(`${progressy}`);
         progressy /= Math.max(parseFloat(`${webviewn.length % (Math.max(mbnatives.length, 7))}`), 1);
         trophyr <<= Math.min(5, Math.abs((mbnatives == String.fromCharCode(114,0) ? (graphicsq ? 3 : 3) : mbnatives.length)));
         graphicsq = trophyr == 45;
         webviewn = `${(String.fromCharCode(70,0) == mbnatives ? (graphicsq ? 2 : 2) : mbnatives.length)}`;
      }
         ksadT ^= 2;
          let videocommonu = false;
          let time_odT: Array<any> = [String.fromCharCode(116,105,101,114,115,95,110,95,57,51,0), String.fromCharCode(114,117,98,98,101,114,95,116,95,52,54,0), String.fromCharCode(107,95,49,52,95,112,97,99,107,101,116,112,101,101,107,0)];
         ksadT <<= Math.min(Math.abs(parseInt(`${hoverR}`) - time_odT.length), 3);
         videocommonu = !videocommonu;
         time_odT = [((videocommonu ? 5 : 4))];
       let smallh = String.fromCharCode(98,101,108,108,95,109,95,53,53,0);
      for (let s = 0; s < 2; s++) {
          let orientationj = 0.0;
         productQ.push(parseInt(`${hoverR}`) * 1);
         orientationj += parseFloat(`${2 - parseInt(`${orientationj}`)}`);
      }
      if ((parseInt(`${hoverR}`) - smallh.length) <= 5) {
          let plash5 = 5.0;
         hoverR *= smallh.length;
         plash5 -= parseInt(`${plash5}`);
      }
      while (productQ.includes(ksadT)) {
         ksadT ^= ksadT;
         break;
      }
      bgvipsportb += `${inouttargetredU.length >> (Math.min(Math.abs(2), 5))}`;
   let libsgcoreI = package_cp.size >= 8954632;
   do {
       let inouttargetyellowo = String.fromCharCode(101,122,111,115,95,57,95,50,0);
       let libfabricjnij = String.fromCharCode(104,95,50,95,112,114,101,108,111,97,100,0);
       let bggradients = 5.0;
       let xcopy_jE = String.fromCharCode(122,95,50,53,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0);
      if (libfabricjnij.length <= 1) {
         libfabricjnij = `${inouttargetyellowo.length}`;
      }
       let backiconZ = String.fromCharCode(117,95,54,49,95,118,105,98,114,97,116,105,111,110,0);
       let shareblackP = String.fromCharCode(117,110,109,105,120,95,112,95,52,0);
      for (let x = 0; x < 3; x++) {
          let iconnointernetd: Array<any> = [824, 664];
         inouttargetyellowo = `${1 - iconnointernetd.length}`;
      }
      while (bggradients > libfabricjnij.length) {
          let latnm = 0.0;
          let reactnativeultimatelistviewP = true;
          let plusH = true;
         libfabricjnij = "3";
         latnm += parseInt(`${latnm}`) - 2;
         reactnativeultimatelistviewP = 30.45 < latnm || !plusH;
         plusH = !plusH;
         break;
      }
       let turnV = String.fromCharCode(106,95,50,50,95,101,110,116,114,111,112,121,109,111,100,101,0);
       let launcher_ = String.fromCharCode(116,95,55,95,97,115,99,101,110,100,101,114,0);
      if (4 > xcopy_jE.length) {
         xcopy_jE += `${shareblackP.length}`;
      }
      let smallorangemanv = bggradients <= 5933595.0;
      do {
         bggradients += 3 ^ backiconZ.length;
         if (smallorangemanv) {
            break;
         }
      } while ((turnV.endsWith(`${bggradients}`)) && smallorangemanv);
      if (libfabricjnij.length == inouttargetyellowo.length) {
         inouttargetyellowo = `${parseInt(`${bggradients}`)}`;
      }
      while (!turnV.endsWith(`${launcher_.length}`)) {
         launcher_ += `${inouttargetyellowo.length}`;
         break;
      }
       let predictionbanner6 = String.fromCharCode(117,116,120,111,95,52,95,57,51,0);
       let libpangleflippedc = false;
       let libtanF = false;
      while (libfabricjnij.length == 2) {
         bggradients += ((libpangleflippedc ? 3 : 1) >> (Math.min(5, Math.abs(2))));
         break;
      }
      package_cp = new Map([[`${bggradients}`, parseInt(`${bggradients}`)]]);
      if (libsgcoreI) {
         break;
      }
   } while (libsgcoreI && (5 <= (package_cp.size + 1)));
   if (parseInt(`${control3}`) <= bgvipsportb.length) {
      control3 *= 1;
   }
   let referrerd = control3 <= 9099787.0;
   do {
      control3 /= Math.max(1 + bgvipsportb.length, 2);
      if (referrerd) {
         break;
      }
   } while (referrerd && ((control3 * 5.10) > 4.97 || (control3 * rewardvideo5.size) > 5.10));
   for (let x = 0; x < 2; x++) {
      slideri &= graphicsL.length;
   }
   for (let q = 0; q < 2; q++) {
      shareblackg *= parseFloat(`${2 & graphicsL.length}`);
   }
      videoRef.current.seek(currentDuration);
    }
  };

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = () => {
       let awayY: Map<any, any> = new Map([[String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,108,95,49,54,0),143], [String.fromCharCode(112,95,49,95,114,116,112,112,108,97,121,0),314], [String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,103,95,49,0),49]]);
    let middlebrightnessg = String.fromCharCode(112,114,111,102,114,101,115,115,95,102,95,56,57,0);
    let appleZ = String.fromCharCode(122,95,49,49,95,106,112,101,103,99,111,109,112,0);
    let chinasameJ: Array<any> = [626, 322, 685];
    let terms9 = String.fromCharCode(120,95,55,50,95,111,98,109,99,0);
    let roundk = 1;
    let gifth = 5;
    let whiteu = 4.0;
    let awayteamfield1 = 0.0;
    let penalty8 = String.fromCharCode(108,101,103,97,99,121,95,56,95,50,56,0);
    let greyS = String.fromCharCode(99,111,108,115,112,97,110,95,111,95,56,57,0);
    let shootyesgoalz: Array<any> = [String.fromCharCode(114,95,53,54,95,99,111,114,111,117,116,105,110,101,0), String.fromCharCode(105,95,48,95,103,101,110,101,114,97,103,101,0), String.fromCharCode(119,97,108,107,95,98,95,55,52,0)];
    let register_joO = String.fromCharCode(101,95,49,57,95,119,101,98,118,116,116,0);
    let redirectZ = String.fromCharCode(115,104,97,95,111,95,49,54,0);
    let eyeopenJ: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,115,101,115,95,121,95,57,0),true ], [String.fromCharCode(114,116,109,112,112,107,116,95,55,95,51,54,0),true ]]);
      roundk <<= Math.min(Math.abs(awayY.size), 1);
   if (awayY.get(`${whiteu}`) != null) {
      awayY = new Map([[middlebrightnessg, middlebrightnessg.length]]);
   }
      whiteu += parseFloat(`${appleZ.length + 1}`);

    if (isBodan) {

       let iconarrowrightwhitek = String.fromCharCode(115,108,105,100,101,115,104,111,119,95,57,95,49,51,0);
       let xadsdkc = String.fromCharCode(99,95,52,55,95,112,97,114,97,98,111,108,108,105,99,0);
      while (iconarrowrightwhitek.length < xadsdkc.length) {
          let gmailC: Map<any, any> = new Map([[String.fromCharCode(116,95,52,56,95,102,109,105,120,0),78], [String.fromCharCode(102,111,99,117,115,101,100,95,51,95,57,52,0),493], [String.fromCharCode(106,95,56,53,95,98,105,97,115,101,100,0),274]]);
          let abidetectc = 0;
          let gdtadvZ = false;
          let mutedx = 4.0;
          let indicatory = true;
         xadsdkc += `${((gdtadvZ ? 4 : 1) + parseInt(`${mutedx}`))}`;
         gmailC.set(`${abidetectc}`, abidetectc - gmailC.size);
         gdtadvZ = indicatory && 31 > abidetectc;
         mutedx /= Math.max(5, gmailC.size);
         break;
      }
      while (3 == iconarrowrightwhitek.length) {
         xadsdkc += `${iconarrowrightwhitek.length * 1}`;
         break;
      }
      let policyQ = iconarrowrightwhitek == String.fromCharCode(122,110,55,55,102,117,119,55,116,110,0);
      do {
          let flipperd = 1.0;
          let libloggerB = true;
          let applicationi = String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,107,95,57,0);
         iconarrowrightwhitek = `${applicationi.length ^ iconarrowrightwhitek.length}`;
         flipperd -= (parseFloat(`${parseInt(`${flipperd}`) % (Math.max(4, (libloggerB ? 2 : 1)))}`));
         libloggerB = !libloggerB;
         applicationi = `${((libloggerB ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${flipperd}`)), 3)))}`;
         if (policyQ) {
            break;
         }
      } while (policyQ && (!iconarrowrightwhitek.startsWith(xadsdkc)));
      let showlessU = iconarrowrightwhitek == String.fromCharCode(116,117,106,51,53,115,0);
      do {
          let inouttargetred4 = String.fromCharCode(109,101,116,97,100,97,116,97,115,95,51,95,56,50,0);
         iconarrowrightwhitek = `${xadsdkc.length % (Math.max(iconarrowrightwhitek.length, 10))}`;
         inouttargetred4 = `${inouttargetred4.length}`;
         if (showlessU) {
            break;
         }
      } while ((xadsdkc == iconarrowrightwhitek) && showlessU);
      while (iconarrowrightwhitek.endsWith(`${xadsdkc.length}`)) {
         xadsdkc = `${(iconarrowrightwhitek == String.fromCharCode(117,0) ? iconarrowrightwhitek.length : xadsdkc.length)}`;
         break;
      }
          let formt = 3.0;
          let streamingV = String.fromCharCode(119,114,97,112,95,110,95,53,49,0);
         iconarrowrightwhitek += `${parseInt(`${formt}`) - 1}`;
         formt -= (parseFloat(`${streamingV == String.fromCharCode(101,0) ? streamingV.length : streamingV.length}`));
      penalty8 += `${shootyesgoalz.length - parseInt(`${awayteamfield1}`)}`;
   while (awayY.size > 3) {
      greyS += `${middlebrightnessg.length}`;
      break;
   }
   for (let o = 0; o < 2; o++) {
      awayY = new Map([[middlebrightnessg, middlebrightnessg.length]]);
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   if (5 > appleZ.length) {
      awayY.set(middlebrightnessg, (String.fromCharCode(100,0) == middlebrightnessg ? awayY.size : middlebrightnessg.length));
   }
      shootyesgoalz.push(greyS.length);
   while (awayteamfield1 > 2.68) {
      gifth %= Math.max(2, penalty8.length);
      break;
   }
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   let goalk = 7497600 >= roundk;
   do {
       let sentry_ = String.fromCharCode(109,97,106,95,104,95,56,54,0);
       let libavformatK = String.fromCharCode(110,116,112,95,117,95,55,53,0);
       let material6 = String.fromCharCode(100,117,112,108,101,120,95,121,95,51,48,0);
      for (let n = 0; n < 2; n++) {
         sentry_ = "2";
      }
      for (let w = 0; w < 1; w++) {
          let contextw = true;
          let mbjscommonp: Map<any, any> = new Map([[String.fromCharCode(115,117,109,109,97,114,105,101,115,95,52,95,49,48,48,0),false ], [String.fromCharCode(99,95,51,51,0),false ], [String.fromCharCode(104,95,55,49,95,110,117,109,101,114,97,108,115,0),true ]]);
          let iconclosewhitewithbgc: Map<any, any> = new Map([[String.fromCharCode(120,121,119,104,95,111,95,56,51,0),String.fromCharCode(112,95,51,48,95,105,110,102,108,97,116,101,0)], [String.fromCharCode(108,111,110,103,98,105,103,95,107,95,57,56,0),String.fromCharCode(100,111,116,116,101,100,95,48,95,55,57,0)], [String.fromCharCode(98,105,108,105,110,95,49,95,50,0),String.fromCharCode(102,95,55,95,115,101,110,100,118,0)]]);
          let owngoalk = 1.0;
          let regeng8 = 2.0;
         libavformatK = "1";
         contextw = !contextw;
         mbjscommonp.set(`${owngoalk}`, iconclosewhitewithbgc.size);
         iconclosewhitewithbgc = new Map([[`${iconclosewhitewithbgc.size}`, 1 + mbjscommonp.size]]);
         owngoalk /= Math.max(5, parseFloat(`${parseInt(`${regeng8}`)}`));
      }
      for (let f = 0; f < 3; f++) {
         sentry_ = `${material6.length}`;
      }
          let downarrowt = 3.0;
          let gestureG = 3.0;
          let dnewssharer = String.fromCharCode(109,101,97,115,117,114,101,114,95,97,95,51,54,0);
         sentry_ = `${material6.length + 3}`;
         downarrowt -= dnewssharer.length;
         gestureG /= Math.max(2, 2);
         dnewssharer += `${1 & parseInt(`${gestureG}`)}`;
         material6 = `${(libavformatK == String.fromCharCode(97,0) ? sentry_.length : libavformatK.length)}`;
      if (4 > sentry_.length) {
         libavformatK = `${libavformatK.length ^ 3}`;
      }
      if (libavformatK == String.fromCharCode(104,0)) {
         material6 = `${libavformatK.length}`;
      }
         libavformatK = `${material6.length & sentry_.length}`;
      while (sentry_.length < 2) {
         material6 = `${material6.length}`;
         break;
      }
      roundk += sentry_.length | roundk;
      if (goalk) {
         break;
      }
   } while (goalk && (4 > shootyesgoalz.length));
      appleZ += `${shootyesgoalz.length / (Math.max(1, 8))}`;
      shootyesgoalz = [appleZ.length];

      

   if (!greyS.startsWith(`${chinasameJ.length}`)) {
       let weatherS: Map<any, any> = new Map([[String.fromCharCode(97,116,111,105,95,102,95,53,50,0),59], [String.fromCharCode(103,95,56,53,95,114,101,102,108,0),192], [String.fromCharCode(116,105,109,101,111,117,116,95,50,95,56,52,0),227]]);
       let white5 = 1.0;
       let footballfiledlayout9 = 1;
       let mimo4 = String.fromCharCode(119,97,108,95,54,95,53,53,0);
       let scorew: Array<any> = [793, 519, 627];
      if ((white5 / 3.55) <= 1.88 && (mimo4.length / (Math.max(5, 10))) <= 4) {
         mimo4 = `${1 / (Math.max(footballfiledlayout9, 4))}`;
      }
          let ballM = String.fromCharCode(100,95,49,48,95,110,101,119,108,105,110,101,115,0);
         footballfiledlayout9 ^= 1;
         ballM = "3";
         mimo4 = `${mimo4.length - 3}`;
         weatherS.set(`${footballfiledlayout9}`, 1 - footballfiledlayout9);
         white5 *= parseFloat(`${3}`);
         footballfiledlayout9 <<= Math.min(3, Math.abs(weatherS.size / (Math.max(2, parseInt(`${white5}`)))));
         footballfiledlayout9 &= 2 * weatherS.size;
      let mbnativeZ = 5498926.0 >= white5;
      do {
         white5 += parseFloat(`${footballfiledlayout9}`);
         if (mbnativeZ) {
            break;
         }
      } while (((footballfiledlayout9 << (Math.min(Math.abs(1), 4))) == 4) && mbnativeZ);
      if (mimo4.includes(`${scorew.length}`)) {
         mimo4 += `${weatherS.size | 2}`;
      }
       let footballfiledlayoutb = 3;
         scorew.push(footballfiledlayout9);
      for (let u = 0; u < 1; u++) {
         white5 /= Math.max(parseFloat(`${footballfiledlayoutb}`), 1);
      }
         footballfiledlayoutb += 1 & mimo4.length;
         footballfiledlayoutb &= 2 << (Math.min(Math.abs(parseInt(`${white5}`)), 5));
         footballfiledlayoutb %= Math.max(2, scorew.length % 3);
      greyS += `${(middlebrightnessg == String.fromCharCode(68,0) ? middlebrightnessg.length : awayY.size)}`;
   }
      roundk <<= Math.min(Math.abs(penalty8.length + appleZ.length), 4);
       let connectionM = true;
      let iconsharefriends2 = connectionM ? !connectionM : connectionM;
      do {
         connectionM = (!connectionM ? connectionM : connectionM);
         if (iconsharefriends2) {
            break;
         }
      } while (iconsharefriends2 && (connectionM && connectionM));
       let defaultbasketballbgK = 5;
       let notificationl = 3;
          let window_lS = 3.0;
          let bdxadsdka = String.fromCharCode(99,102,102,116,98,95,115,95,57,0);
          let mbjscommonpr = String.fromCharCode(97,108,119,97,121,115,95,111,95,52,50,0);
         defaultbasketballbgK |= 1 + notificationl;
         window_lS /= Math.max(3, parseFloat(`${mbjscommonpr.length - bdxadsdka.length}`));
         bdxadsdka += `${(String.fromCharCode(51,0) == bdxadsdka ? bdxadsdka.length : parseInt(`${window_lS}`))}`;
         mbjscommonpr += `${mbjscommonpr.length ^ parseInt(`${window_lS}`)}`;
      penalty8 += `${roundk - gifth}`;
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimePlaylistClicksAnalytics();
      
    } else {

       let rankG = String.fromCharCode(102,95,53,49,95,112,108,97,116,102,111,114,109,115,0);
       let spinnerq = 5;
      let cnewsshare_ = spinnerq <= 9020968;
      do {
          let downR: Array<any> = [String.fromCharCode(107,95,54,95,102,117,108,108,121,0), String.fromCharCode(119,95,51,56,95,100,105,115,112,111,115,97,108,0)];
          let libfbjnih: Array<any> = [340, 57, 956];
          let sharewhitep = 2.0;
          let hongkongj = String.fromCharCode(108,95,50,55,95,104,101,114,101,0);
          let bingY = String.fromCharCode(112,114,101,100,95,118,95,57,48,0);
         spinnerq >>= Math.min(2, Math.abs(2 << (Math.min(1, rankG.length))));
         downR = [parseInt(`${sharewhitep}`)];
         libfbjnih = [bingY.length];
         sharewhitep -= bingY.length;
         hongkongj = "2";
         if (cnewsshare_) {
            break;
         }
      } while (cnewsshare_ && ((2 >> (Math.min(1, rankG.length))) <= 5 && 1 <= (2 >> (Math.min(5, rankG.length)))));
         spinnerq -= rankG.length;
      awayteamfield1 *= parseFloat(`${2}`);
   for (let v = 0; v < 1; v++) {
      greyS = `${parseInt(`${whiteu}`) << (Math.min(2, Math.abs(gifth)))}`;
   }
   for (let f = 0; f < 1; f++) {
      appleZ = `${chinasameJ.length % 2}`;
   }
      dispatch(playVod(currentVod.mini_video_vod));

   if (2 < (4 ^ terms9.length) && 3.75 < (whiteu / (Math.max(5.29, 9)))) {
      whiteu *= parseFloat(`${gifth & shootyesgoalz.length}`);
   }
   while (chinasameJ.length == gifth) {
      gifth >>= Math.min(Math.abs(1), 2);
      break;
   }
   for (let w = 0; w < 1; w++) {
       let active1 = 2;
       let mbbid8 = 4.0;
       let fastp = String.fromCharCode(114,95,50,57,95,108,100,105,115,116,0);
         mbbid8 -= 3 >> (Math.min(5, fastp.length));
          let playf = String.fromCharCode(100,95,56,56,95,112,97,105,114,105,110,103,0);
          let imagenetworkerrT = String.fromCharCode(101,95,55,57,95,102,109,97,100,100,0);
          let homeplayer8 = 4.0;
         mbbid8 -= parseInt(`${homeplayer8}`);
         playf += `${imagenetworkerrT.length & 3}`;
         imagenetworkerrT = `${imagenetworkerrT.length}`;
         homeplayer8 /= Math.max(parseFloat(`${playf.length << (Math.min(imagenetworkerrT.length, 4))}`), 2);
         fastp += `${fastp.length}`;
      let teamdetailsbgk = fastp == String.fromCharCode(53,111,50,122,111,102,117,50,114,54,0);
      do {
          let malaysiar = String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,95,53,95,51,53,0);
          let sellmathbackgroundE = false;
          let reducero = 4;
          let owngoalM = 5;
         fastp += `${malaysiar.length + 3}`;
         malaysiar += `${((sellmathbackgroundE ? 1 : 2) / (Math.max(reducero, 2)))}`;
         sellmathbackgroundE = 91 > owngoalM;
         reducero <<= Math.min(5, parseInt(`${Math.abs(((sellmathbackgroundE ? 3 : 2) % (Math.max(2, reducero))))}`));
         owngoalM -= 2;
         if (teamdetailsbgk) {
            break;
         }
      } while (teamdetailsbgk && (3.41 <= mbbid8));
         fastp = `${1 << (Math.min(4, fastp.length))}`;
      if (1 < (parseInt(`${mbbid8}`) + fastp.length) || 3 < (fastp.length / (Math.max(1, 2)))) {
         fastp += `${active1 ^ parseInt(`${mbbid8}`)}`;
      }
      if (!fastp.endsWith(`${mbbid8}`)) {
          let defaultplayerimg5 = true;
         mbbid8 /= Math.max(5, 2 >> (Math.min(4, Math.abs(parseInt(`${mbbid8}`)))));
         defaultplayerimg5 = defaultplayerimg5 && !defaultplayerimg5;
      }
      let descd = mbbid8 <= 6224077.0;
      do {
         mbbid8 *= (fastp == String.fromCharCode(115,0) ? active1 : fastp.length);
         if (descd) {
            break;
         }
      } while ((2.22 <= (1.6 - mbbid8)) && descd);
      if (5.0 > (mbbid8 + active1) || 5.0 > (mbbid8 + active1)) {
         mbbid8 *= active1 * 3;
      }
      appleZ += `${fastp.length}`;
   }
      navigation.navigate('播放IOS', {
        vod_id: currentVod.vod?.vod_id,
      });

       let yellowredcard9: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,97,112,112,108,105,99,97,116,105,111,110,0),true ], [String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,119,95,55,55,0),true ]]);
      let settingh = 5048631 >= yellowredcard9.size;
      do {
         yellowredcard9.set(`${yellowredcard9.size}`, 1 / (Math.max(6, yellowredcard9.size)));
         if (settingh) {
            break;
         }
      } while ((Array.from(yellowredcard9.values()).includes(yellowredcard9.size)) && settingh);
      for (let g = 0; g < 2; g++) {
         yellowredcard9.set(`${yellowredcard9.size}`, yellowredcard9.size ^ 1);
      }
         yellowredcard9 = new Map([[`${yellowredcard9.size}`, yellowredcard9.size]]);
      terms9 += `${2 & greyS.length}`;
      appleZ = "3";
      shootyesgoalz = [penalty8.length];

      

   let championr = awayteamfield1 <= 5953078.0;
   do {
       let greytickr: Array<any> = [368, 285, 17];
       let switch_x3 = 3.0;
       let libreactnativeblobj = String.fromCharCode(98,95,54,95,115,111,97,99,99,101,112,116,0);
       let defaultprofilepicx = String.fromCharCode(113,95,52,56,95,112,114,101,117,112,108,111,97,100,0);
         greytickr = [1 << (Math.min(3, libreactnativeblobj.length))];
      let footballtrophyR = defaultprofilepicx == String.fromCharCode(121,51,107,103,116,118,107,57,0);
      do {
         defaultprofilepicx = `${libreactnativeblobj.length << (Math.min(5, Math.abs(parseInt(`${switch_x3}`))))}`;
         if (footballtrophyR) {
            break;
         }
      } while (footballtrophyR && ((greytickr.length >> (Math.min(Math.abs(3), 5))) < 2 && (defaultprofilepicx.length >> (Math.min(3, greytickr.length))) < 3));
         switch_x3 *= 1;
          let weatherK = String.fromCharCode(118,101,99,116,111,114,115,95,52,95,51,0);
         defaultprofilepicx = "3";
         weatherK += `${(String.fromCharCode(95,0) == weatherK ? weatherK.length : weatherK.length)}`;
      let customT = switch_x3 >= 6468847.0;
      do {
         switch_x3 /= Math.max(2, greytickr.length);
         if (customT) {
            break;
         }
      } while (customT && (4.88 < (switch_x3 / 2.60) && 4 < (libreactnativeblobj.length / (Math.max(5, 2)))));
          let d_imagea = 3;
         defaultprofilepicx = `${parseInt(`${switch_x3}`)}`;
         d_imagea >>= Math.min(Math.abs(2 + d_imagea), 2);
      let danger6 = defaultprofilepicx == String.fromCharCode(106,118,107,52,122,52,0);
      do {
          let screenr = String.fromCharCode(104,101,120,98,121,116,101,95,100,95,55,49,0);
          let tempnodatagife = 2.0;
          let libavfilterp = String.fromCharCode(111,114,119,97,114,100,101,100,95,48,95,49,52,0);
         defaultprofilepicx = `${screenr.length}`;
         screenr += `${1 - parseInt(`${tempnodatagife}`)}`;
         tempnodatagife -= libavfilterp.length;
         libavfilterp += `${libavfilterp.length & 1}`;
         if (danger6) {
            break;
         }
      } while (((5 << (Math.min(4, greytickr.length))) >= 1) && danger6);
      while (5 < (4 - defaultprofilepicx.length) || 3 < (greytickr.length - 4)) {
          let watch0 = 3.0;
         greytickr.push(parseInt(`${switch_x3}`));
         watch0 -= parseFloat(`${1 - parseInt(`${watch0}`)}`);
         break;
      }
      for (let n = 0; n < 3; n++) {
         defaultprofilepicx = "3";
      }
      if (4 > (defaultprofilepicx.length % (Math.max(5, 3))) && (greytickr.length % (Math.max(8, defaultprofilepicx.length))) > 5) {
          let sinaX = false;
          let telemetry8: Map<any, any> = new Map([[String.fromCharCode(98,95,54,57,95,100,101,115,101,108,101,99,116,101,100,0),778], [String.fromCharCode(121,95,52,48,95,109,101,110,117,115,0),49]]);
          let predictionactiveT = true;
          let tempn = false;
         defaultprofilepicx = `${3 % (Math.max(2, libreactnativeblobj.length))}`;
         sinaX = !predictionactiveT;
         telemetry8.set(`${predictionactiveT}`, (2 & (predictionactiveT ? 2 : 1)));
         tempn = telemetry8.size < 38;
      }
      if (defaultprofilepicx.includes(`${greytickr.length}`)) {
          let bodan7 = true;
          let phoneshareP: Map<any, any> = new Map([[String.fromCharCode(115,107,101,121,108,105,115,116,95,121,95,50,49,0),399], [String.fromCharCode(97,117,116,111,105,110,99,114,101,109,101,110,116,95,100,95,52,50,0),184]]);
          let libavformatB: Array<any> = [122, 420];
         defaultprofilepicx = `${libreactnativeblobj.length * parseInt(`${switch_x3}`)}`;
         bodan7 = bodan7 && phoneshareP.size < 47;
         phoneshareP.set(`${bodan7}`, 2);
         libavformatB.push(((bodan7 ? 5 : 4) ^ 2));
      }
         greytickr.push(defaultprofilepicx.length | libreactnativeblobj.length);
      awayteamfield1 -= (parseFloat(`${libreactnativeblobj == String.fromCharCode(109,0) ? chinasameJ.length : libreactnativeblobj.length}`));
      if (championr) {
         break;
      }
   } while (championr && (3.44 == (awayteamfield1 - 4.12)));
   for (let w = 0; w < 2; w++) {
       let photoS: Map<any, any> = new Map([[String.fromCharCode(113,95,54,54,95,111,98,109,99,0),String.fromCharCode(98,107,116,114,95,51,95,55,52,0)], [String.fromCharCode(109,95,49,56,95,118,99,97,99,100,97,116,97,0),String.fromCharCode(103,110,111,115,105,115,95,49,95,50,50,0)]]);
       let referrerj: Map<any, any> = new Map([[String.fromCharCode(120,95,52,49,95,119,97,110,116,115,0),385], [String.fromCharCode(100,101,110,111,109,95,118,95,56,57,0),139]]);
       let roomU = String.fromCharCode(99,117,98,101,100,95,55,95,56,52,0);
      for (let n = 0; n < 3; n++) {
          let orangeuparroww = 5.0;
         roomU = `${(String.fromCharCode(74,0) == roomU ? roomU.length : photoS.size)}`;
         orangeuparroww /= Math.max(parseInt(`${orangeuparroww}`), 3);
      }
      let tumbnail3 = roomU == String.fromCharCode(106,57,54,116,103,118,120,0);
      do {
         roomU = "1";
         if (tumbnail3) {
            break;
         }
      } while ((5 > (3 << (Math.min(3, Math.abs(referrerj.size)))) && 3 > (referrerj.size << (Math.min(roomU.length, 5)))) && tumbnail3);
          let rewardvideoJ = String.fromCharCode(119,95,49,57,95,108,101,116,116,101,114,115,0);
          let middlebrightnesst = String.fromCharCode(101,115,115,101,110,99,101,95,110,95,50,49,0);
          let backiconmaskz = String.fromCharCode(99,95,49,54,95,111,119,110,0);
         photoS.set(`${rewardvideoJ}`, photoS.size % (Math.max(1, 1)));
         rewardvideoJ += `${(middlebrightnesst == String.fromCharCode(72,0) ? backiconmaskz.length : middlebrightnesst.length)}`;
         backiconmaskz = "2";
      if (Array.from(referrerj.keys()).includes(`${photoS.size}`)) {
         referrerj.set(`${referrerj.size}`, referrerj.size + photoS.size);
      }
         photoS = new Map([[`${referrerj.size}`, roomU.length]]);
      if (3 < (referrerj.size - roomU.length) || (3 - roomU.length) < 5) {
         referrerj = new Map([[`${photoS.size}`, photoS.size]]);
      }
         roomU += "1";
      if (1 >= (5 & referrerj.size)) {
          let anewsshareK = true;
          let z_positionZ = String.fromCharCode(109,95,56,56,95,97,118,112,105,99,116,117,114,101,0);
          let modalf = String.fromCharCode(111,95,49,50,95,97,115,99,101,110,116,0);
          let sheet4 = String.fromCharCode(115,95,56,53,95,115,101,110,115,105,116,105,118,101,0);
          let basketballhometeamM: Array<any> = [String.fromCharCode(107,95,50,48,95,112,114,105,109,105,116,105,118,101,0), String.fromCharCode(112,95,51,48,95,97,101,99,0)];
         photoS = new Map([[`${basketballhometeamM.length}`, basketballhometeamM.length % (Math.max(z_positionZ.length, 4))]]);
         anewsshareK = sheet4 == String.fromCharCode(81,0) || 87 == modalf.length;
         z_positionZ += `${(modalf == String.fromCharCode(76,0) ? (anewsshareK ? 2 : 3) : modalf.length)}`;
         sheet4 += `${(sheet4 == String.fromCharCode(89,0) ? modalf.length : sheet4.length)}`;
      }
      for (let z = 0; z < 2; z++) {
          let questiconc = String.fromCharCode(118,97,108,105,100,105,116,121,95,107,95,55,53,0);
          let forwardj = false;
         referrerj = new Map([[`${photoS.size}`, photoS.size << (Math.min(Math.abs(3), 4))]]);
         questiconc += `${(String.fromCharCode(104,0) == questiconc ? questiconc.length : questiconc.length)}`;
         forwardj = String.fromCharCode(107,0) == questiconc;
      }
      register_joO += `${chinasameJ.length}`;
   }
       let thailandm = String.fromCharCode(99,111,110,115,116,115,95,55,95,49,0);
       let mbsplashQ: Array<any> = [380, 143, 743];
      let libfabricjniX = String.fromCharCode(54,121,53,107,54,57,57,98,0) == thailandm;
      do {
         thailandm = `${(thailandm == String.fromCharCode(51,0) ? thailandm.length : mbsplashQ.length)}`;
         if (libfabricjniX) {
            break;
         }
      } while (libfabricjniX && (thailandm.length > 4));
      while (thailandm.length > mbsplashQ.length) {
         mbsplashQ.push(mbsplashQ.length);
         break;
      }
      for (let f = 0; f < 3; f++) {
         thailandm = `${thailandm.length << (Math.min(3, mbsplashQ.length))}`;
      }
      let bdxadsdkW = thailandm.length <= 7332755;
      do {
         thailandm += "2";
         if (bdxadsdkW) {
            break;
         }
      } while (((thailandm.length | mbsplashQ.length) > 3) && bdxadsdkW);
      let emojiheartT = 6030805 >= mbsplashQ.length;
      do {
          let icontransferclub9 = 3.0;
          let backgroundV: Array<any> = [String.fromCharCode(114,103,116,99,117,95,50,95,49,53,0), String.fromCharCode(104,95,53,50,95,114,101,115,117,108,117,116,105,111,110,0), String.fromCharCode(113,95,57,49,95,99,117,115,116,111,109,0)];
          let championN: Array<any> = [372, 276, 26];
         mbsplashQ = [1 + championN.length];
         icontransferclub9 -= parseInt(`${icontransferclub9}`);
         backgroundV.push(parseInt(`${icontransferclub9}`) >> (Math.min(backgroundV.length, 4)));
         championN = [backgroundV.length * 2];
         if (emojiheartT) {
            break;
         }
      } while (emojiheartT && (1 < (thailandm.length / (Math.max(9, mbsplashQ.length))) && (1 / (Math.max(1, thailandm.length))) < 3));
         mbsplashQ.push(2);
      greyS += `${mbsplashQ.length}`;
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeVideoClicksAnalytics();
      
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
                source={require('@static/images/libjsijniprofilerRncore.gif')}
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
                                  source={require('@static/images/predictionHumidity.jpeg')}
                                />
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 12, top: 11.8 }}
                                  source={require('@static/images/popupWhitevideolive.jpg')}
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
