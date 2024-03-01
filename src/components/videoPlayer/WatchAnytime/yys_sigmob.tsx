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
import Video, { OnProgressData, yys_CountdownInactive } from 'react-native-video';
import PlayIcon from '@static/images/historyLatnPolicy.svg';
import PauseIcon from '@static/images/activeHeader.svg';
import PlayBoDanIcon from '@static/images/selectedFiledTemplateprocessor.svg';
import PlayZhengPianIcon from '@static/images/resultDefault_zh.svg';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import HejiIcon from '@static/images/armvaResultHooks.svg';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/yys_frame';
import yys_event_common from '../../../../Umeng/yys_event_common';
import { showAdultModeVip } from '@redux/actions/yys_runtimescheduler';
import { playVod, viewPlaylistDetails } from '@redux/actions/yys_player_style';
import { screenModel } from '@type/yys_service_setting';
import { ADULT_MODE_PREVIEW_DURATION, DOWNLOAD_WATCH_ANYTIME } from '@utility/yys_ajax_switch';
import FastImage from '../../common/yys_vertical_collection';
import RedirectButton from './yys_tumbnail_team_button';
import DescriptionBar from './yys_accepted_large';
import HejiButton from './yys_nalytics_button';
import { addIdToCache } from '../../../utils/yys_found_manifest';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';

interface yys_ConfigureUimanager {
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

const videoBufferGif = require('@static/images/sinaHover.gif')

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
}: yys_ConfigureUimanager) {
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
  const videoRef = useRef<yys_CountdownInactive>(null);
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

  const userState = useSelector<yys_HejiCricket>('userReducer');

  const isVip = yys_RelatedTooltips.isVip(userState.user);
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
       let actions0 = String.fromCharCode(107,105,116,116,121,95,113,95,50,0);
    let libsentryz = 3.0;
    let forwardD = 1.0;
    let appsj = 4.0;
    let agreementg = String.fromCharCode(114,101,99,101,105,118,101,95,55,95,54,0);
    let charth = String.fromCharCode(119,95,53,52,95,110,101,120,116,104,111,112,0);
    let short_d3w = 1.0;
    let videojsV = String.fromCharCode(115,117,98,109,105,116,116,101,100,95,101,95,52,49,0);
    let stringc = String.fromCharCode(103,101,110,101,114,105,99,115,95,54,95,54,48,0);
    let details3 = false;
    let reactnativejsu = 3.0;
    let storee: Array<any> = [567, 234];
    let bingR = 4.0;
       let progress5: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,115,95,113,95,57,57,0),826], [String.fromCharCode(122,95,49,48,48,95,119,101,108,115,101,110,99,100,101,109,111,0),745]]);
       let completeT = 5;
       let classesz = String.fromCharCode(120,95,57,48,95,100,101,115,116,105,110,97,116,105,111,110,0);
      if (Array.from(progress5.values()).includes(completeT)) {
          let langu = 2;
          let brightnessT = String.fromCharCode(122,95,53,54,95,100,117,112,108,101,120,0);
         completeT ^= completeT >> (Math.min(Math.abs(1), 1));
         langu -= langu ^ 1;
         brightnessT = `${brightnessT.length}`;
      }
          let watchx: Map<any, any> = new Map([[String.fromCharCode(122,95,53,53,95,109,111,118,101,116,111,0),true ], [String.fromCharCode(109,105,100,116,111,110,101,115,95,55,95,50,52,0),true ], [String.fromCharCode(98,95,55,57,95,100,113,117,97,110,116,0),true ]]);
         completeT >>= Math.min(4, Math.abs(2 ^ classesz.length));
         watchx = new Map([[`${watchx.size}`, watchx.size % (Math.max(3, 3))]]);
      while (classesz.startsWith(`${completeT}`)) {
         classesz += `${completeT % 2}`;
         break;
      }
         progress5.set(classesz, progress5.size % (Math.max(7, classesz.length)));
      for (let e = 0; e < 1; e++) {
          let pointc = true;
         completeT ^= ((pointc ? 2 : 2) * classesz.length);
      }
      let page4 = completeT <= 7551047;
      do {
          let libjsinspector1 = String.fromCharCode(121,95,53,56,95,110,105,100,115,0);
          let runtimeschedulerI: Map<any, any> = new Map([[String.fromCharCode(109,97,108,108,111,99,95,106,95,57,57,0),89], [String.fromCharCode(111,95,56,54,95,99,104,101,99,107,112,97,99,107,101,116,0),127], [String.fromCharCode(108,105,109,105,116,97,116,105,111,110,95,48,95,57,54,0),909]]);
          let sportsC = 4.0;
          let thumbnailR = 4;
          let loadingi = String.fromCharCode(114,95,50,57,95,114,101,112,108,105,101,114,115,0);
         completeT /= Math.max(3, libjsinspector1.length);
         libjsinspector1 += `${loadingi.length}`;
         runtimeschedulerI.set(`${thumbnailR}`, 2);
         sportsC += parseFloat(`${runtimeschedulerI.size}`);
         thumbnailR ^= runtimeschedulerI.size;
         loadingi = `${2 << (Math.min(2, Math.abs(thumbnailR)))}`;
         if (page4) {
            break;
         }
      } while (page4 && (!Array.from(progress5.values()).includes(completeT)));
      for (let w = 0; w < 1; w++) {
          let heartQ: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,104,97,115,104,95,51,95,55,0),String.fromCharCode(115,95,50,48,95,106,115,105,109,100,0)], [String.fromCharCode(104,95,54,49,95,117,112,103,114,97,100,101,100,0),String.fromCharCode(97,100,100,102,95,48,95,52,56,0)], [String.fromCharCode(112,114,101,112,97,114,101,100,95,103,95,56,55,0),String.fromCharCode(97,117,114,97,95,114,95,50,48,0)]]);
          let dialogv = false;
          let mergerH = 0.0;
         completeT /= Math.max(5, progress5.size);
         heartQ = new Map([[`${heartQ.size}`, 3]]);
         dialogv = !dialogv;
         mergerH += ((dialogv ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${mergerH}`)), 3)));
      }
      for (let w = 0; w < 1; w++) {
         progress5.set(`${completeT}`, progress5.size + completeT);
      }
      if (2 <= (2 & completeT) || (completeT & classesz.length) <= 2) {
          let libavfilter5 = String.fromCharCode(101,95,52,95,115,97,116,100,0);
          let successX: Array<any> = [934, 570];
         classesz = `${progress5.size & completeT}`;
         libavfilter5 += `${successX.length}`;
         successX.push(3 + libavfilter5.length);
      }
      short_d3w -= 3 & progress5.size;
   while (!actions0.endsWith(`${reactnativejsu}`)) {
      actions0 += `${parseInt(`${reactnativejsu}`) * parseInt(`${short_d3w}`)}`;
      break;
   }
      forwardD /= Math.max(2, 2);
       let update_92p: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,112,97,99,101,115,95,99,95,51,57,0),String.fromCharCode(112,107,116,104,100,114,95,111,95,52,57,0)], [String.fromCharCode(97,102,102,105,110,105,116,121,95,51,95,51,50,0),String.fromCharCode(97,99,100,99,95,52,95,55,57,0)]]);
       let networkK = String.fromCharCode(112,105,112,101,119,105,114,101,95,105,95,49,0);
      for (let t = 0; t < 2; t++) {
          let update_tJ = 1.0;
          let uimanager9 = 0;
          let libjsijniprofilerk = String.fromCharCode(99,95,52,55,95,108,111,99,107,110,101,115,115,0);
          let libavformatv = false;
          let classesq = 1.0;
         networkK += `${parseInt(`${update_tJ}`) & 2}`;
         update_tJ *= 3 + libjsijniprofilerk.length;
         uimanager9 ^= (parseInt(`${classesq}`) << (Math.min(2, Math.abs((libavformatv ? 5 : 1)))));
         libjsijniprofilerk = `${(String.fromCharCode(88,0) == libjsijniprofilerk ? parseInt(`${classesq}`) : libjsijniprofilerk.length)}`;
      }
      while (networkK.endsWith(`${update_92p.size}`)) {
         update_92p.set(`${networkK}`, 1 * update_92p.size);
         break;
      }
       let eighteenO = String.fromCharCode(106,95,57,52,95,114,105,112,101,109,100,0);
       let mbnativeM = String.fromCharCode(104,95,52,55,95,104,97,114,112,101,110,0);
       let clockc = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,108,95,56,0);
         update_92p = new Map([[`${update_92p.size}`, mbnativeM.length]]);
         networkK += `${networkK.length}`;
      reactnativejsu += (charth == String.fromCharCode(85,0) ? (details3 ? 5 : 5) : charth.length);
      actions0 += `${agreementg.length}`;
   while (!details3 || 3 <= agreementg.length) {
      details3 = agreementg.length <= actions0.length;
      break;
   }
       let libflipperY = 3.0;
       let megaphones = String.fromCharCode(100,105,114,115,95,101,95,56,57,0);
      let libavdeviceR = 7485378 <= megaphones.length;
      do {
          let playlistO: Array<any> = [281, 984, 113];
          let confirmation_: Array<any> = [623, 810, 338];
         megaphones += `${confirmation_.length >> (Math.min(Math.abs(1), 2))}`;
         playlistO.push(1 ^ playlistO.length);
         confirmation_ = [1 >> (Math.min(5, playlistO.length))];
         if (libavdeviceR) {
            break;
         }
      } while (libavdeviceR && (1 < (parseInt(`${libflipperY}`) + megaphones.length) || (3.12 + libflipperY) < 2.53));
      while ((megaphones.length * libflipperY) == 1.8) {
         libflipperY *= 2 / (Math.max(3, megaphones.length));
         break;
      }
      let mbnativep = megaphones.length <= 5606480;
      do {
          let send5 = 1.0;
         megaphones = `${parseInt(`${libflipperY}`)}`;
         send5 += parseFloat(`${parseInt(`${send5}`) / (Math.max(parseInt(`${send5}`), 4))}`);
         if (mbnativep) {
            break;
         }
      } while ((5.52 <= (libflipperY + megaphones.length)) && mbnativep);
      let chinasamey = 7940863 <= megaphones.length;
      do {
         megaphones = `${parseInt(`${libflipperY}`)}`;
         if (chinasamey) {
            break;
         }
      } while ((2 > megaphones.length) && chinasamey);
      while (megaphones.length <= 2) {
         megaphones += `${parseInt(`${libflipperY}`)}`;
         break;
      }
       let membership4: Array<any> = [962, 23, 969];
      forwardD -= 3 + parseInt(`${reactnativejsu}`);
      libsentryz *= parseFloat(`${1}`);
      charth = `${stringc.length >> (Math.min(5, Math.abs(parseInt(`${short_d3w}`))))}`;
       let regeng0 = String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,95,113,95,53,52,0);
       let downloadedN = String.fromCharCode(114,95,55,53,95,98,108,97,99,107,108,105,115,116,0);
          let chata = 5.0;
          let updatesy = 2;
          let activityc = 5;
         downloadedN = `${(regeng0 == String.fromCharCode(105,0) ? parseInt(`${chata}`) : regeng0.length)}`;
         chata += parseFloat(`${3}`);
         updatesy %= Math.max(1, activityc);
          let routerW: Map<any, any> = new Map([[String.fromCharCode(118,101,108,97,112,115,101,100,116,105,109,101,114,95,120,95,50,51,0),true ], [String.fromCharCode(100,111,117,98,108,101,95,103,95,50,56,0),true ]]);
         regeng0 = `${(downloadedN == String.fromCharCode(56,0) ? downloadedN.length : routerW.size)}`;
      let malaysiak = regeng0 == String.fromCharCode(97,53,122,98,49,120,119,109,55,0);
      do {
         regeng0 = `${regeng0.length}`;
         if (malaysiak) {
            break;
         }
      } while (malaysiak && (downloadedN.startsWith(`${regeng0.length}`)));
      let rewardvideo1 = String.fromCharCode(97,52,105,113,0) == regeng0;
      do {
          let fillp: Array<any> = [796, 296];
          let animationsB = false;
          let headerW: Array<any> = [605, 311];
         regeng0 = `${3 >> (Math.min(5, downloadedN.length))}`;
         fillp = [((animationsB ? 4 : 3) * fillp.length)];
         animationsB = fillp.length == 60 || headerW.length == 60;
         headerW = [fillp.length >> (Math.min(Math.abs(2), 5))];
         if (rewardvideo1) {
            break;
         }
      } while (rewardvideo1 && (5 >= downloadedN.length));
      let sharedH = String.fromCharCode(111,99,101,119,53,105,54,122,114,49,0) == downloadedN;
      do {
         downloadedN = `${regeng0.length % (Math.max(5, downloadedN.length))}`;
         if (sharedH) {
            break;
         }
      } while ((downloadedN.endsWith(regeng0)) && sharedH);
          let stationx = String.fromCharCode(115,95,53,53,95,101,114,118,101,114,0);
          let regengR: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,117,108,112,105,110,102,111,0),796], [String.fromCharCode(106,95,53,52,95,101,102,102,101,99,105,116,118,101,108,121,0),0]]);
         regeng0 = `${1 / (Math.max(5, stationx.length))}`;
         stationx = `${2 + regengR.size}`;
         regengR = new Map([[`${regengR.size}`, regengR.size]]);
      libsentryz /= Math.max(4, (parseFloat(`${agreementg == String.fromCharCode(118,0) ? parseInt(`${reactnativejsu}`) : agreementg.length}`)));
      short_d3w *= charth.length >> (Math.min(Math.abs(1), 3));
   let componentregistryA = libsentryz >= 9429896.0;
   do {
      libsentryz *= parseFloat(`${3}`);
      if (componentregistryA) {
         break;
      }
   } while (componentregistryA && (details3));
      libsentryz /= Math.max(parseFloat(`${charth.length + 2}`), 1);
   for (let r = 0; r < 2; r++) {
      forwardD /= Math.max(2, agreementg.length + parseInt(`${reactnativejsu}`));
   }
      agreementg = `${actions0.length}`;
   let pangle2 = actions0.length >= 4977529;
   do {
       let animationsg = 1.0;
       let strG: Map<any, any> = new Map([[String.fromCharCode(107,95,53,48,95,109,97,112,0),286], [String.fromCharCode(119,114,97,112,112,101,114,95,54,95,56,49,0),244]]);
       let membershipY: Map<any, any> = new Map([[String.fromCharCode(101,120,110,111,100,101,95,121,95,57,51,0),354], [String.fromCharCode(120,95,50,51,95,112,114,101,102,101,114,101,110,99,101,0),949]]);
       let libreanimatedF = String.fromCharCode(116,114,97,99,101,95,117,95,52,56,0);
      for (let u = 0; u < 2; u++) {
         strG.set(`${membershipY.size}`, strG.size);
      }
      for (let u = 0; u < 3; u++) {
         libreanimatedF += `${3 << (Math.min(1, Math.abs(strG.size)))}`;
      }
      if (2 > (membershipY.size / (Math.max(3, parseInt(`${animationsg}`)))) && (membershipY.size * 2) > 5) {
          let libswscaleM = 4.0;
         membershipY = new Map([[libreanimatedF, parseInt(`${libswscaleM}`)]]);
      }
      let roundU = libreanimatedF == String.fromCharCode(97,57,103,105,121,0);
      do {
         libreanimatedF = `${1 & parseInt(`${animationsg}`)}`;
         if (roundU) {
            break;
         }
      } while (roundU && ((2 >> (Math.min(2, libreanimatedF.length))) > 4));
         libreanimatedF += "3";
      let filterd = String.fromCharCode(122,122,115,118,0) == libreanimatedF;
      do {
          let libsgcore5 = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,113,95,53,53,0);
         libreanimatedF += `${membershipY.size}`;
         libsgcore5 = `${libsgcore5.length ^ libsgcore5.length}`;
         if (filterd) {
            break;
         }
      } while ((libreanimatedF.startsWith(`${animationsg}`)) && filterd);
          let with_4c = 4.0;
         membershipY = new Map([[`${membershipY.size}`, membershipY.size]]);
         with_4c += 2 - parseInt(`${with_4c}`);
      while (Array.from(strG.keys()).includes(`${animationsg}`)) {
         animationsg -= parseInt(`${animationsg}`) >> (Math.min(Math.abs(strG.size), 3));
         break;
      }
         libreanimatedF += `${strG.size}`;
          let context8: Array<any> = [267, 385, 144];
          let valuesj = String.fromCharCode(108,95,51,49,95,115,101,114,105,97,108,0);
          let configureD = String.fromCharCode(107,95,52,57,95,114,101,108,97,121,111,117,116,0);
         animationsg /= Math.max(4, 1);
         context8.push(1 & context8.length);
         valuesj = "1";
         configureD = `${1 - configureD.length}`;
         libreanimatedF = `${(libreanimatedF == String.fromCharCode(115,0) ? parseInt(`${animationsg}`) : libreanimatedF.length)}`;
       let switch_5H = 0;
      actions0 += "2";
      if (pangle2) {
         break;
      }
   } while (pangle2 && (actions0.length <= 5));
      details3 = 29 == videojsV.length;
      reactnativejsu /= Math.max(5, actions0.length % (Math.max(1, videojsV.length)));
       let networkf = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,98,108,101,95,108,95,52,56,0);
       let matchi = 0;
       let selll = String.fromCharCode(97,95,55,49,0);
      for (let t = 0; t < 3; t++) {
          let scrollviewd = true;
          let fadfdeebbbfdabbbabdadfaaddaam = String.fromCharCode(105,95,50,50,95,105,112,118,0);
          let usernameH = String.fromCharCode(108,95,52,48,95,108,105,109,105,116,97,116,105,111,110,0);
          let phonew: Array<any> = [704, 190];
         selll = `${fadfdeebbbfdabbbabdadfaaddaam.length % 1}`;
         scrollviewd = phonew.length > 62;
         fadfdeebbbfdabbbabdadfaaddaam = `${(2 & (scrollviewd ? 4 : 1))}`;
         usernameH += `${phonew.length % (Math.max(usernameH.length, 2))}`;
      }
       let containerR: Array<any> = [102, 584];
         networkf += "3";
      let attributedstringb = selll.length >= 7281673;
      do {
         selll += `${selll.length + 3}`;
         if (attributedstringb) {
            break;
         }
      } while ((networkf == String.fromCharCode(77,0)) && attributedstringb);
          let productQ = String.fromCharCode(114,103,98,105,95,113,95,51,57,0);
          let agreementt = 3.0;
         matchi |= containerR.length & 3;
         productQ += `${parseInt(`${agreementt}`)}`;
         agreementt -= parseFloat(`${parseInt(`${agreementt}`)}`);
       let pathU = true;
       let modalR = false;
      while (containerR.length < 5) {
          let policyd = false;
         containerR = [(selll == String.fromCharCode(56,0) ? containerR.length : selll.length)];
         policyd = policyd || !policyd;
         break;
      }
      for (let g = 0; g < 3; g++) {
         pathU = (selll.length * containerR.length) == 90;
      }
       let tumbnail4 = String.fromCharCode(115,95,53,54,95,116,105,109,101,105,110,102,111,114,99,101,0);
       let incidentn = String.fromCharCode(107,95,56,48,95,102,111,108,100,101,114,115,0);
      actions0 += `${networkf.length * videojsV.length}`;
   for (let k = 0; k < 2; k++) {
      charth = "2";
   }
       let inactive0: Array<any> = [525, 860, 989];
       let foregroundB = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,112,95,48,0);
      for (let n = 0; n < 1; n++) {
          let castingF = 5.0;
          let libfollyo = String.fromCharCode(101,95,54,57,95,112,111,112,117,108,97,116,101,100,0);
         inactive0 = [parseInt(`${castingF}`) | 1];
         castingF /= Math.max(4, libfollyo.length % 1);
         libfollyo += `${libfollyo.length & 3}`;
      }
          let popupg = false;
          let expiredY = 0.0;
          let renderl = String.fromCharCode(99,114,111,112,112,105,110,103,95,119,95,56,55,0);
         inactive0.push(((popupg ? 1 : 1) >> (Math.min(Math.abs(1), 2))));
         popupg = (parseInt(`${expiredY}`) - renderl.length) >= 21;
         expiredY += parseFloat(`${renderl.length | parseInt(`${expiredY}`)}`);
      for (let d = 0; d < 1; d++) {
          let mountingB = 3.0;
          let fieldg = 3.0;
          let nterstitiala = 5.0;
          let ewardedM: Array<any> = [260, 621];
         foregroundB = `${2 - foregroundB.length}`;
         mountingB -= parseFloat(`${parseInt(`${nterstitiala}`)}`);
         fieldg += parseFloat(`${2 << (Math.min(2, ewardedM.length))}`);
         nterstitiala /= Math.max(parseFloat(`${parseInt(`${fieldg}`) & parseInt(`${mountingB}`)}`), 2);
         ewardedM.push(1);
      }
      if ((foregroundB.length ^ 4) <= 5) {
         inactive0 = [1];
      }
          let pathF: Map<any, any> = new Map([[String.fromCharCode(99,99,111,117,110,116,95,97,95,51,54,0),false ], [String.fromCharCode(109,95,51,48,95,97,114,116,105,115,116,0),true ], [String.fromCharCode(101,95,53,53,95,103,101,115,116,117,114,101,115,0),false ]]);
          let benefitR = 0;
         foregroundB = `${benefitR}`;
         pathF = new Map([[`${pathF.size}`, 1]]);
         benefitR /= Math.max(3, pathF.size % (Math.max(1, 10)));
      if (1 < (inactive0.length / 5)) {
          let frame_39u = String.fromCharCode(118,111,114,98,105,115,95,111,95,51,54,0);
          let cross1 = false;
          let active5: Array<any> = [424, 50];
          let penaltyj = false;
          let selectm = 5.0;
         inactive0.push(1);
         frame_39u = `${frame_39u.length}`;
         cross1 = !penaltyj;
         active5 = [active5.length];
         selectm -= (parseFloat(`${(penaltyj ? 2 : 4) & parseInt(`${selectm}`)}`));
      }
      forwardD -= 3;
      short_d3w -= 2;
   if (videojsV.includes(`${short_d3w}`)) {
      short_d3w -= agreementg.length;
   }
      agreementg += `${videojsV.length}`;
      actions0 += `${3 * parseInt(`${forwardD}`)}`;
   if (!videojsV.startsWith(`${charth.length}`)) {
       let hejiI: Array<any> = [768, 679, 581];
       let mergerY = String.fromCharCode(105,95,51,55,95,104,112,97,114,97,109,115,0);
       let filledQ = String.fromCharCode(119,95,49,95,108,97,110,99,122,111,115,0);
      for (let o = 0; o < 2; o++) {
         mergerY = `${hejiI.length}`;
      }
         hejiI.push(hejiI.length);
      let activity5 = filledQ == String.fromCharCode(52,121,117,119,51,110,0);
      do {
         filledQ += `${3 >> (Math.min(1, filledQ.length))}`;
         if (activity5) {
            break;
         }
      } while ((!mergerY.includes(filledQ)) && activity5);
      let l_titleQ = String.fromCharCode(52,105,52,0) == mergerY;
      do {
         mergerY += `${3 - filledQ.length}`;
         if (l_titleQ) {
            break;
         }
      } while (l_titleQ && (filledQ.length == mergerY.length));
          let basketballS = 4.0;
          let settingsT = true;
          let mapbufferO = String.fromCharCode(115,95,57,51,95,112,114,101,100,101,99,101,115,115,111,114,0);
         filledQ += "1";
         basketballS += 3 | mapbufferO.length;
         settingsT = mapbufferO == String.fromCharCode(69,0);
      let paginationd = 9120119 <= hejiI.length;
      do {
         hejiI = [mergerY.length - filledQ.length];
         if (paginationd) {
            break;
         }
      } while (((filledQ.length * 5) < 2) && paginationd);
       let commonO = String.fromCharCode(118,111,116,101,100,95,118,95,49,0);
       let gradlewP = String.fromCharCode(114,101,103,101,120,112,95,49,95,52,52,0);
      while ((hejiI.length << (Math.min(Math.abs(2), 2))) == 3 && 1 == (gradlewP.length << (Math.min(Math.abs(2), 1)))) {
         hejiI.push(mergerY.length | 1);
         break;
      }
      while (commonO != gradlewP) {
          let fastD = 5.0;
         gradlewP += "2";
         fastD *= 2;
         break;
      }
      videojsV += "2";
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
       let screenS = String.fromCharCode(107,95,57,53,95,98,97,103,0);
    let libpangleflippedg = String.fromCharCode(119,95,55,53,95,105,100,101,97,108,0);
    let downloadedP = String.fromCharCode(99,95,57,48,95,99,116,105,111,110,0);
    let placementz = String.fromCharCode(108,105,102,101,116,105,109,101,95,113,95,50,52,0);
    let saveu = String.fromCharCode(110,95,55,95,115,104,111,119,115,0);
    let homeg = 0;
    let gemfilet = true;
    let apple_ = 4.0;
    let indexV = 0.0;
    let mini0 = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,95,111,95,51,48,0);
   let analyticd = 4943895 >= saveu.length;
   do {
       let regengT: Array<any> = [341, 220, 459];
         regengT = [3 * regengT.length];
          let modityf = String.fromCharCode(116,97,112,115,95,99,95,51,57,0);
          let reactG: Array<any> = [223, 528];
          let minie = String.fromCharCode(115,95,53,95,104,100,115,112,0);
         regengT = [1 << (Math.min(2, modityf.length))];
         modityf = `${reactG.length}`;
         reactG = [minie.length % (Math.max(3, reactG.length))];
         minie += `${reactG.length % (Math.max(5, minie.length))}`;
         regengT = [regengT.length];
      saveu = `${regengT.length}`;
      if (analyticd) {
         break;
      }
   } while (analyticd && (downloadedP.length < saveu.length));
       let manifestg = String.fromCharCode(99,97,114,114,105,101,114,95,121,95,51,52,0);
      let hookA = 5240587 >= manifestg.length;
      do {
         manifestg = `${2 / (Math.max(4, manifestg.length))}`;
         if (hookA) {
            break;
         }
      } while ((5 <= manifestg.length) && hookA);
      for (let b = 0; b < 3; b++) {
         manifestg = "1";
      }
          let inewarchdefaultsN: Array<any> = [642, 465, 810];
          let activityx: Map<any, any> = new Map([[String.fromCharCode(112,95,56,95,102,117,110,110,121,0),String.fromCharCode(102,95,53,48,95,109,111,116,99,111,109,112,0)], [String.fromCharCode(117,95,53,95,109,97,107,101,119,116,0),String.fromCharCode(97,95,56,51,95,114,103,116,99,0)]]);
         manifestg += "3";
         inewarchdefaultsN.push(3);
         activityx = new Map([[`${activityx.size}`, inewarchdefaultsN.length]]);
      apple_ /= Math.max(1, (String.fromCharCode(50,0) == screenS ? screenS.length : (gemfilet ? 3 : 2)));
       let libjsijniprofileru = String.fromCharCode(115,95,57,57,95,114,105,110,103,0);
       let orangeK = 1.0;
         orangeK /= Math.max((libjsijniprofileru == String.fromCharCode(95,0) ? libjsijniprofileru.length : parseInt(`${orangeK}`)), 2);
          let shareM: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,108,111,115,101,0),16], [String.fromCharCode(103,105,102,95,53,95,55,49,0),911]]);
          let selectt = 0.0;
         libjsijniprofileru = `${(String.fromCharCode(85,0) == libjsijniprofileru ? parseInt(`${orangeK}`) : libjsijniprofileru.length)}`;
         shareM = new Map([[`${shareM.size}`, parseInt(`${selectt}`)]]);
         selectt += parseFloat(`${2 | parseInt(`${selectt}`)}`);
      while ((libjsijniprofileru.length - 1) >= 2 || (libjsijniprofileru.length % 1) >= 5) {
         orangeK += (String.fromCharCode(99,0) == libjsijniprofileru ? parseInt(`${orangeK}`) : libjsijniprofileru.length);
         break;
      }
         libjsijniprofileru += `${1 >> (Math.min(1, libjsijniprofileru.length))}`;
      while (libjsijniprofileru.endsWith(`${orangeK}`)) {
         libjsijniprofileru = `${libjsijniprofileru.length % 2}`;
         break;
      }
         libjsijniprofileru = "2";
      downloadedP += `${parseInt(`${orangeK}`)}`;
       let eactJ: Array<any> = [918, 924, 810];
      while ((5 ^ eactJ.length) <= 1 && 3 <= (5 ^ eactJ.length)) {
          let redirectF: Array<any> = [String.fromCharCode(116,95,56,50,95,100,101,99,107,108,105,110,107,0), String.fromCharCode(109,97,114,107,101,100,95,55,95,52,50,0), String.fromCharCode(109,117,108,116,105,112,108,121,95,57,95,54,54,0)];
          let valuesA = 2.0;
          let libimagepipelineG = String.fromCharCode(114,95,52,54,95,103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,0);
          let black0 = String.fromCharCode(111,110,110,101,99,116,105,111,110,95,115,95,56,54,0);
          let statisticse: Map<any, any> = new Map([[String.fromCharCode(102,95,55,48,95,112,114,111,106,101,99,116,105,111,110,0),681], [String.fromCharCode(109,95,52,55,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0),615]]);
         eactJ.push(1 & libimagepipelineG.length);
         redirectF.push(1 * statisticse.size);
         valuesA += parseInt(`${valuesA}`) % 1;
         libimagepipelineG += `${redirectF.length}`;
         black0 += `${black0.length * 2}`;
         statisticse.set(black0, 3);
         break;
      }
      while (5 < (4 * eactJ.length)) {
          let watchM = 1.0;
          let videoV = 4;
          let thailandc = 1;
          let filedz: Array<any> = [553, 592, 898];
          let xadsdki = 5;
         eactJ.push(filedz.length >> (Math.min(5, Math.abs(thailandc))));
         watchM -= 2;
         videoV -= 1 % (Math.max(4, xadsdki));
         thailandc |= 1;
         filedz = [xadsdki];
         break;
      }
         eactJ.push(eactJ.length ^ eactJ.length);
      placementz += `${homeg}`;
       let stylec: Array<any> = [382, 866, 362];
       let linee = 3.0;
         linee /= Math.max(1 ^ stylec.length, 2);
         linee /= Math.max(4, stylec.length);
      for (let i = 0; i < 1; i++) {
         stylec.push(parseInt(`${linee}`) | 2);
      }
      for (let l = 0; l < 3; l++) {
         stylec.push(stylec.length & 1);
      }
         linee *= 2 * stylec.length;
      if (4 < (parseInt(`${linee}`) / (Math.max(5, stylec.length))) || (linee / (Math.max(stylec.length, 3))) < 5.2) {
         stylec.push(stylec.length);
      }
      homeg >>= Math.min(1, Math.abs(1));
      apple_ /= Math.max((saveu == String.fromCharCode(48,0) ? screenS.length : saveu.length), 3);

    clearTimeout(timer.current);

       let philippines2 = String.fromCharCode(118,95,52,48,95,99,111,109,112,114,101,115,115,111,114,0);
         philippines2 += `${philippines2.length}`;
      while (philippines2 != String.fromCharCode(109,0)) {
         philippines2 = `${philippines2.length & 2}`;
         break;
      }
          let langk = String.fromCharCode(105,102,114,97,109,101,95,56,95,54,0);
          let middleh = String.fromCharCode(109,111,109,101,110,116,95,103,95,54,54,0);
         philippines2 += `${langk.length * 3}`;
         langk += `${middleh.length / 2}`;
         middleh = `${3 | middleh.length}`;
      homeg += 1;
   for (let k = 0; k < 3; k++) {
      downloadedP += `${homeg}`;
   }
   for (let x = 0; x < 1; x++) {
       let thailand2 = String.fromCharCode(109,115,118,115,95,55,95,57,48,0);
       let libavfilterQ = 0.0;
       let editB = 0;
          let libcxxcomponentsU = 3.0;
          let changex = String.fromCharCode(107,109,115,95,114,95,57,48,0);
          let basketballb = 4.0;
         libavfilterQ += parseFloat(`${parseInt(`${libavfilterQ}`)}`);
         libcxxcomponentsU += changex.length & parseInt(`${basketballb}`);
         changex += `${parseInt(`${basketballb}`) / (Math.max(8, changex.length))}`;
      let baseI = libavfilterQ <= 9761895.0;
      do {
          let maild = false;
          let configurer: Map<any, any> = new Map([[String.fromCharCode(102,95,55,55,95,118,101,114,98,111,115,101,0),false ], [String.fromCharCode(100,95,54,54,95,100,101,99,105,109,97,108,115,0),false ], [String.fromCharCode(114,118,100,97,116,97,95,119,95,55,50,0),true ]]);
          let sportX = String.fromCharCode(114,105,98,98,111,110,95,111,95,49,49,0);
          let package_832 = true;
          let mbnativeadvancedM = String.fromCharCode(107,95,55,51,0);
         libavfilterQ *= parseFloat(`${configurer.size << (Math.min(2, Math.abs(parseInt(`${libavfilterQ}`))))}`);
         maild = !sportX.startsWith(`${maild}`);
         configurer.set(`${package_832}`, ((package_832 ? 1 : 1) + 3));
         sportX = `${((maild ? 1 : 3))}`;
         mbnativeadvancedM = `${((package_832 ? 3 : 3) % 2)}`;
         if (baseI) {
            break;
         }
      } while (baseI && (1 < (3 % (Math.max(3, thailand2.length))) || (thailand2.length / 3) < 1));
         libavfilterQ /= Math.max(3, parseFloat(`${thailand2.length + editB}`));
         editB -= thailand2.length;
          let middleq: Map<any, any> = new Map([[String.fromCharCode(102,95,52,48,95,119,109,118,100,97,116,97,0),587], [String.fromCharCode(112,108,97,110,97,114,116,111,121,117,121,95,116,95,53,51,0),693], [String.fromCharCode(118,109,100,118,105,100,101,111,95,53,95,51,50,0),928]]);
          let typingX = 2.0;
         thailand2 = `${thailand2.length >> (Math.min(Math.abs(3), 3))}`;
         middleq.set(`${typingX}`, parseInt(`${typingX}`) % 3);
      if ((editB >> (Math.min(Math.abs(2), 2))) == 4) {
          let libavdevicev = true;
          let actionso = false;
          let mergerk: Array<any> = [String.fromCharCode(97,99,116,105,118,101,109,97,112,95,116,95,53,54,0), String.fromCharCode(100,116,108,115,95,51,95,53,54,0), String.fromCharCode(115,95,50,49,95,102,116,118,110,111,100,101,0)];
         thailand2 += `${((actionso ? 2 : 5) - 1)}`;
         libavdevicev = mergerk.length > 79;
         actionso = mergerk.length >= mergerk.length;
      }
         libavfilterQ *= parseFloat(`${thailand2.length}`);
      let plashJ = editB >= 7892912;
      do {
         editB %= Math.max(5, 2);
         if (plashJ) {
            break;
         }
      } while ((1 > (editB * 5)) && plashJ);
         libavfilterQ /= Math.max(4, parseFloat(`${editB & 1}`));
      apple_ *= ((gemfilet ? 5 : 3) ^ placementz.length);
   }
      placementz = `${(1 << (Math.min(5, Math.abs((gemfilet ? 5 : 1)))))}`;
      gemfilet = parseInt(`${apple_}`) == placementz.length;
   let listk = 8954397 <= saveu.length;
   do {
      saveu += "3";
      if (listk) {
         break;
      }
   } while ((!placementz.includes(saveu)) && listk);
    setShowOverlay(true);

   if (saveu.length == 2) {
       let link1 = 3.0;
       let condensedV = String.fromCharCode(105,95,50,55,95,97,112,112,114,101,99,105,97,116,101,100,104,0);
       let gesturesI = 3.0;
       let libcrashsdk8: Array<any> = [String.fromCharCode(113,95,53,57,95,101,102,102,101,99,116,115,0), String.fromCharCode(109,101,115,104,95,111,95,51,50,0), String.fromCharCode(121,95,50,57,95,97,116,116,101,109,112,116,101,100,0)];
         libcrashsdk8 = [parseInt(`${gesturesI}`) >> (Math.min(Math.abs(1), 2))];
         gesturesI /= Math.max(1, parseFloat(`${libcrashsdk8.length >> (Math.min(condensedV.length, 1))}`));
      for (let k = 0; k < 1; k++) {
         link1 -= parseFloat(`${libcrashsdk8.length - parseInt(`${gesturesI}`)}`);
      }
          let stary = String.fromCharCode(110,117,109,101,114,97,108,95,110,95,54,0);
          let tailb = String.fromCharCode(114,95,57,50,95,101,118,101,114,121,119,104,101,114,101,0);
         libcrashsdk8 = [(condensedV == String.fromCharCode(66,0) ? parseInt(`${link1}`) : condensedV.length)];
         stary = `${2 + tailb.length}`;
         tailb += `${(stary == String.fromCharCode(56,0) ? tailb.length : stary.length)}`;
         condensedV += `${parseInt(`${gesturesI}`) | 2}`;
      for (let u = 0; u < 2; u++) {
         condensedV += `${libcrashsdk8.length << (Math.min(condensedV.length, 2))}`;
      }
      if ((3 - libcrashsdk8.length) < 2) {
          let playercommonV = String.fromCharCode(112,95,53,51,95,119,104,105,99,104,0);
          let serviceW = false;
          let store_ = String.fromCharCode(120,95,57,95,100,114,97,119,116,101,120,116,0);
         libcrashsdk8 = [parseInt(`${gesturesI}`)];
         playercommonV = "2";
         serviceW = 34 <= store_.length;
         store_ += "2";
      }
         link1 /= Math.max(parseFloat(`${3}`), 4);
      gemfilet = screenS.endsWith(`${gemfilet}`);
   }
   if (libpangleflippedg == placementz) {
      placementz = `${(placementz == String.fromCharCode(72,0) ? libpangleflippedg.length : placementz.length)}`;
   }
   while (1.59 == (apple_ / (Math.max(7, libpangleflippedg.length)))) {
      libpangleflippedg += `${(String.fromCharCode(49,0) == saveu ? saveu.length : libpangleflippedg.length)}`;
      break;
   }
   let megaphonea = libpangleflippedg.length >= 9007005;
   do {
      libpangleflippedg = "3";
      if (megaphonea) {
         break;
      }
   } while ((libpangleflippedg.length > 4) && megaphonea);
      libpangleflippedg = `${downloadedP.length}`;
   for (let w = 0; w < 1; w++) {
       let privacyx = 5.0;
       let handlerW: Array<any> = [738, 861];
          let eighteens: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,54,95,53,54,0),String.fromCharCode(106,95,52,95,115,101,114,105,97,108,0)], [String.fromCharCode(112,101,114,109,117,116,101,115,95,97,95,51,57,0),String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,119,95,55,48,0)], [String.fromCharCode(114,101,103,101,116,95,111,95,54,56,0),String.fromCharCode(106,95,56,50,0)]]);
          let roundt = String.fromCharCode(99,97,112,105,95,109,95,49,56,0);
          let libreactperfloggerjnie: Array<any> = [21, 552];
         handlerW.push(2 << (Math.min(3, libreactperfloggerjnie.length)));
         eighteens = new Map([[`${eighteens.size}`, (String.fromCharCode(105,0) == roundt ? eighteens.size : roundt.length)]]);
         libreactperfloggerjnie.push((roundt == String.fromCharCode(68,0) ? eighteens.size : roundt.length));
      for (let w = 0; w < 1; w++) {
          let plusE = 4.0;
          let minivod2 = 2;
          let rewardW: Array<any> = [320, 467, 609];
         privacyx /= Math.max(3, 5);
         plusE *= parseFloat(`${rewardW.length}`);
         minivod2 %= Math.max(1, 2 << (Math.min(Math.abs(parseInt(`${plusE}`)), 3)));
         rewardW.push(minivod2);
      }
          let smallX = String.fromCharCode(111,95,49,53,95,112,114,111,100,117,99,116,0);
         handlerW = [2];
         smallX += `${smallX.length}`;
       let lessa = String.fromCharCode(104,95,51,54,95,98,105,112,114,101,100,0);
       let sansI = String.fromCharCode(112,105,99,116,95,109,95,52,0);
       let shrinkU = String.fromCharCode(118,95,57,48,95,101,110,116,105,114,101,0);
         lessa = `${shrinkU.length}`;
      saveu += `${homeg}`;
   }
    overlayRef.current = true;

   while (gemfilet) {
       let detailT: Array<any> = [425, 807];
       let assistt = String.fromCharCode(119,95,52,49,95,112,108,97,121,97,98,108,101,0);
       let checkboxc = String.fromCharCode(104,117,110,103,95,48,95,52,57,0);
       let injuryo: Array<any> = [315, 493];
       let context1: Map<any, any> = new Map([[String.fromCharCode(98,101,103,97,110,95,114,95,54,50,0),String.fromCharCode(100,105,115,97,98,108,101,95,114,95,51,56,0)], [String.fromCharCode(100,95,57,52,95,115,101,103,105,116,101,114,0),String.fromCharCode(106,105,110,99,108,117,100,101,95,121,95,49,56,0)]]);
         checkboxc = `${detailT.length >> (Math.min(2, injuryo.length))}`;
          let playercommonO = false;
         injuryo.push(3);
         playercommonO = (!playercommonO ? playercommonO : playercommonO);
          let roomO = 3.0;
          let activeN: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,105,116,95,57,95,54,55,0),true ], [String.fromCharCode(105,95,52,54,95,111,110,101,105,110,99,104,0),true ], [String.fromCharCode(105,112,113,102,95,101,95,49,0),true ]]);
         assistt = "2";
         roomO += parseFloat(`${activeN.size}`);
         activeN = new Map([[`${activeN.size}`, activeN.size / 3]]);
         detailT = [detailT.length + context1.size];
         injuryo.push(1);
         detailT.push(3);
         injuryo = [injuryo.length | 2];
         detailT = [checkboxc.length << (Math.min(Math.abs(3), 3))];
       let directx = String.fromCharCode(107,95,56,54,95,105,100,99,116,108,108,109,0);
       let current9 = String.fromCharCode(115,95,53,51,95,109,105,115,115,0);
      let mapbuffer9 = String.fromCharCode(112,106,101,54,118,122,54,104,50,107,0) == checkboxc;
      do {
         checkboxc += `${(assistt == String.fromCharCode(85,0) ? assistt.length : detailT.length)}`;
         if (mapbuffer9) {
            break;
         }
      } while (mapbuffer9 && (injuryo.length > 4));
      if (4 > (current9.length % 3) && (context1.size % (Math.max(3, 8))) > 1) {
          let suggestionK = String.fromCharCode(114,101,119,97,114,100,115,95,107,95,53,0);
          let register_im = String.fromCharCode(105,95,50,48,95,109,111,100,117,108,101,109,97,112,0);
         context1 = new Map([[current9, (suggestionK == String.fromCharCode(98,0) ? current9.length : suggestionK.length)]]);
         register_im = `${register_im.length}`;
      }
         injuryo = [detailT.length * 1];
          let libfolly1 = String.fromCharCode(97,108,116,101,114,95,51,95,49,48,48,0);
          let benefitG = 1.0;
          let utilsU = false;
         directx = `${detailT.length}`;
         libfolly1 = `${libfolly1.length + parseInt(`${benefitG}`)}`;
         benefitG *= 1 * parseInt(`${benefitG}`);
         utilsU = (((!utilsU ? 87 : libfolly1.length) | libfolly1.length) < 87);
      while (directx != String.fromCharCode(68,0)) {
         checkboxc += `${detailT.length + 3}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
          let videojsr = String.fromCharCode(115,101,114,118,105,99,101,95,50,95,51,57,0);
          let libavutilC = 1.0;
          let arean = 1.0;
          let catagoryy = 0;
          let typingXH = String.fromCharCode(98,95,57,49,95,98,111,116,0);
         directx += `${(videojsr == String.fromCharCode(118,0) ? parseInt(`${libavutilC}`) : videojsr.length)}`;
         libavutilC += catagoryy;
         arean *= typingXH.length;
         catagoryy %= Math.max(3, catagoryy >> (Math.min(Math.abs(parseInt(`${arean}`)), 4)));
         typingXH = `${catagoryy >> (Math.min(Math.abs(parseInt(`${arean}`)), 1))}`;
      }
      homeg <<= Math.min(3, Math.abs((String.fromCharCode(78,0) == downloadedP ? downloadedP.length : detailT.length)));
      break;
   }
   if (!screenS.endsWith(`${apple_}`)) {
       let libreactnativeblob_ = String.fromCharCode(113,95,50,95,104,101,97,100,112,104,111,110,101,0);
       let headerH = String.fromCharCode(99,95,53,55,95,114,101,115,105,122,101,114,0);
       let nativeexs: Array<any> = [386, 785, 699];
       let danger6 = String.fromCharCode(116,95,51,50,95,114,101,115,101,97,114,99,104,0);
       let cricketn = String.fromCharCode(101,95,56,53,95,109,97,110,117,97,108,0);
      if (danger6.endsWith(`${cricketn.length}`)) {
         cricketn = "3";
      }
         nativeexs = [libreactnativeblob_.length / 1];
         libreactnativeblob_ = `${(String.fromCharCode(117,0) == danger6 ? danger6.length : libreactnativeblob_.length)}`;
      if (cricketn.length > 3 || 3 > danger6.length) {
         danger6 += `${3 * nativeexs.length}`;
      }
         danger6 += `${nativeexs.length}`;
      let h_lockV = danger6.length >= 8153262;
      do {
          let shareI: Map<any, any> = new Map([[String.fromCharCode(121,95,50,95,109,97,120,0),652], [String.fromCharCode(102,105,120,116,117,114,101,115,95,114,95,51,56,0),147], [String.fromCharCode(114,101,100,105,114,101,99,116,111,114,95,108,95,52,54,0),473]]);
          let a_centerh = true;
          let productB = String.fromCharCode(107,95,50,49,95,118,99,104,113,0);
          let sliderJ = String.fromCharCode(97,105,114,105,110,103,95,117,95,56,48,0);
         danger6 = `${(3 << (Math.min(3, Math.abs((a_centerh ? 5 : 3)))))}`;
         shareI.set(`${productB}`, 2 << (Math.min(3, productB.length)));
         a_centerh = sliderJ.length < shareI.size;
         sliderJ = `${(String.fromCharCode(103,0) == productB ? shareI.size : productB.length)}`;
         if (h_lockV) {
            break;
         }
      } while ((headerH == danger6) && h_lockV);
      if (cricketn.endsWith(`${nativeexs.length}`)) {
         cricketn = `${headerH.length + 3}`;
      }
         headerH = `${danger6.length}`;
      let search0 = headerH.length <= 9265450;
      do {
         headerH += `${libreactnativeblob_.length + nativeexs.length}`;
         if (search0) {
            break;
         }
      } while (search0 && (cricketn != headerH));
         danger6 += `${libreactnativeblob_.length + danger6.length}`;
         danger6 = `${2 | libreactnativeblob_.length}`;
          let pagination5 = 2;
          let areaf = String.fromCharCode(115,99,104,110,111,114,114,95,110,95,50,0);
          let volumeO = true;
         nativeexs = [2];
         pagination5 ^= areaf.length;
         areaf = `${((volumeO ? 1 : 4) + 1)}`;
         cricketn += "3";
         cricketn = `${danger6.length}`;
       let assistz: Map<any, any> = new Map([[String.fromCharCode(115,95,53,48,95,102,105,114,115,116,0),false ], [String.fromCharCode(120,95,49,52,95,122,111,110,101,105,110,102,111,0),true ], [String.fromCharCode(118,95,57,57,95,100,105,115,112,111,115,97,108,0),true ]]);
      screenS += `${(String.fromCharCode(68,0) == cricketn ? cricketn.length : (gemfilet ? 2 : 2))}`;
   }
       let layouta = 0.0;
          let styless = 5;
         layouta += parseFloat(`${parseInt(`${layouta}`) % 1}`);
         styless /= Math.max(styless, 3);
       let connectionB = String.fromCharCode(110,95,52,52,95,112,97,115,115,0);
      while (layouta >= 4.27) {
         connectionB = `${(String.fromCharCode(116,0) == connectionB ? connectionB.length : parseInt(`${layouta}`))}`;
         break;
      }
      saveu = `${downloadedP.length / (Math.max(9, saveu.length))}`;
   for (let j = 0; j < 3; j++) {
      screenS += `${(parseInt(`${apple_}`) | (gemfilet ? 2 : 3))}`;
   }
      homeg *= (String.fromCharCode(71,0) == screenS ? screenS.length : (gemfilet ? 4 : 2));
      apple_ += parseInt(`${indexV}`) ^ screenS.length;
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
       let alertU = 1.0;
    let short_iB = 0.0;
    let middleS = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,50,95,52,55,0);
    let styleG = String.fromCharCode(106,95,54,53,95,105,99,111,110,105,99,0);
    let lessO = 1.0;
    let frame_zy = false;
    let math4 = 0.0;
    let orangej: Map<any, any> = new Map([[String.fromCharCode(109,95,55,54,95,102,105,100,99,116,0),288], [String.fromCharCode(109,101,109,98,101,114,115,95,118,95,51,49,0),531], [String.fromCharCode(101,95,52,52,95,115,119,105,99,104,0),763]]);
    let teamA = 2.0;
    let screenV: Array<any> = [280, 500];
    let default_7yK = String.fromCharCode(113,117,97,100,114,95,120,95,53,52,0);
    let away2 = 4;
    let googleI = 2.0;
    let injuryP = false;
   if (!screenV.includes(alertU)) {
       let placeholderD = String.fromCharCode(99,97,110,100,108,101,95,55,95,55,0);
       let scheduleG = String.fromCharCode(100,95,53,56,95,112,114,101,105,118,111,117,115,0);
       let historyM = 3.0;
      while (scheduleG.length > placeholderD.length) {
         scheduleG = `${scheduleG.length | parseInt(`${historyM}`)}`;
         break;
      }
      while (3.14 >= (historyM * 4.56) && 2.34 >= (4.56 * historyM)) {
         placeholderD += `${placeholderD.length}`;
         break;
      }
      while (scheduleG.length < 2) {
         placeholderD = `${(String.fromCharCode(84,0) == placeholderD ? parseInt(`${historyM}`) : placeholderD.length)}`;
         break;
      }
       let renderO = String.fromCharCode(99,111,109,98,105,110,101,95,99,95,55,49,0);
      if (scheduleG.startsWith(`${placeholderD.length}`)) {
         scheduleG += `${(String.fromCharCode(114,0) == placeholderD ? placeholderD.length : renderO.length)}`;
      }
       let checkbox3 = String.fromCharCode(122,111,110,101,115,95,115,95,57,49,0);
       let spec1 = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,52,95,50,51,0);
      let targetD = 5892481 >= placeholderD.length;
      do {
          let libfbH = 4.0;
         placeholderD = `${(renderO == String.fromCharCode(70,0) ? renderO.length : spec1.length)}`;
         libfbH += parseFloat(`${2}`);
         if (targetD) {
            break;
         }
      } while (targetD && (scheduleG != placeholderD));
      if (2 > renderO.length) {
         spec1 += `${renderO.length & 1}`;
      }
      for (let g = 0; g < 1; g++) {
         scheduleG += "2";
      }
      screenV = [screenV.length - 2];
   }
   while (alertU == teamA) {
      teamA -= parseFloat(`${2 ^ orangej.size}`);
      break;
   }
      short_iB += middleS.length;
      screenV.push(parseInt(`${short_iB}`));
   while ((googleI * 1) < 2.65) {
       let nterstitialz = 4.0;
       let kuaishouj: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,101,100,95,54,95,53,0),String.fromCharCode(112,97,114,116,105,116,105,111,110,115,95,55,95,50,57,0)], [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,54,95,49,55,0),String.fromCharCode(119,95,49,55,95,103,115,116,114,105,110,103,0)]]);
       let strings1 = String.fromCharCode(110,95,53,53,95,99,111,110,100,0);
       let libfbO = String.fromCharCode(109,97,120,113,95,117,95,53,55,0);
       let long_d7K = String.fromCharCode(99,116,111,114,95,51,95,54,56,0);
         long_d7K += `${kuaishouj.size / 1}`;
          let constantsD = 0.0;
          let handlerV = String.fromCharCode(120,95,51,56,95,117,110,107,105,99,107,0);
          let circle2 = String.fromCharCode(103,95,57,57,95,121,117,118,0);
         strings1 = `${(libfbO == String.fromCharCode(78,0) ? circle2.length : libfbO.length)}`;
         constantsD /= Math.max(4, parseFloat(`${parseInt(`${constantsD}`) >> (Math.min(handlerV.length, 2))}`));
         handlerV = `${parseInt(`${constantsD}`) % 1}`;
         circle2 += `${handlerV.length}`;
          let combine8 = 4.0;
         libfbO = "3";
         combine8 *= 2;
       let complete_ = 4.0;
       let androidy = 2.0;
          let libfabricjni1 = 0.0;
         complete_ *= (parseFloat(`${String.fromCharCode(84,0) == libfbO ? kuaishouj.size : libfbO.length}`));
         libfabricjni1 *= parseFloat(`${parseInt(`${libfabricjni1}`) & 2}`);
          let k_imagex = 2.0;
         androidy *= parseFloat(`${kuaishouj.size | parseInt(`${nterstitialz}`)}`);
         k_imagex /= Math.max(1, parseFloat(`${parseInt(`${k_imagex}`) ^ 3}`));
         strings1 = `${2 >> (Math.min(3, strings1.length))}`;
      let libyogaL = long_d7K.length >= 5813401;
      do {
          let downloadedV = 0.0;
         long_d7K = `${parseInt(`${nterstitialz}`)}`;
         downloadedV -= parseFloat(`${parseInt(`${downloadedV}`) / (Math.max(1, parseInt(`${downloadedV}`)))}`);
         if (libyogaL) {
            break;
         }
      } while (libyogaL && (libfbO == long_d7K));
      if (3.5 == androidy) {
         nterstitialz -= parseFloat(`${strings1.length / (Math.max(3, 7))}`);
      }
      while ((4.50 - androidy) == 5.30 || (androidy - 4.50) == 1.29) {
         complete_ += parseFloat(`${parseInt(`${nterstitialz}`)}`);
         break;
      }
      while (4 >= (libfbO.length - 5)) {
         androidy -= (parseFloat(`${libfbO == String.fromCharCode(97,0) ? strings1.length : libfbO.length}`));
         break;
      }
         nterstitialz *= parseFloat(`${libfbO.length}`);
          let floatingO = 4;
          let buildM = 4.0;
          let untickj = String.fromCharCode(109,95,56,50,95,97,115,111,108,117,116,101,0);
         libfbO += `${(long_d7K == String.fromCharCode(109,0) ? floatingO : long_d7K.length)}`;
         floatingO /= Math.max((untickj == String.fromCharCode(76,0) ? parseInt(`${buildM}`) : untickj.length), 4);
         buildM += untickj.length;
      for (let r = 0; r < 2; r++) {
          let storee = String.fromCharCode(117,110,109,97,114,115,104,97,108,95,49,95,55,0);
          let muteds = String.fromCharCode(97,105,116,101,114,95,109,95,56,56,0);
         libfbO = "3";
         storee = `${muteds.length % (Math.max(storee.length, 4))}`;
         muteds += "2";
      }
         libfbO = `${3 + parseInt(`${complete_}`)}`;
      short_iB -= kuaishouj.size - 3;
      break;
   }
      screenV.push(parseInt(`${short_iB}`));
      styleG += `${styleG.length}`;
      googleI *= parseFloat(`${styleG.length}`);
   while (4.81 <= alertU && 3.100 <= (4.81 - alertU)) {
      frame_zy = alertU < googleI;
      break;
   }
      math4 += parseInt(`${short_iB}`);
   while (2 == middleS.length) {
       let umengi = 1.0;
       let alertG = 3.0;
         umengi += 1;
          let mbnativeA = 2.0;
         umengi += 1;
         mbnativeA -= parseInt(`${mbnativeA}`);
          let turnY = String.fromCharCode(117,110,114,105,115,101,95,97,95,55,52,0);
          let directn = String.fromCharCode(117,95,49,50,95,109,101,97,115,117,114,101,109,101,110,116,0);
         alertG /= Math.max(parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${alertG}`)), 5))}`), 2);
         turnY = "1";
         directn = `${2 & directn.length}`;
      for (let j = 0; j < 3; j++) {
         alertG -= parseFloat(`${parseInt(`${umengi}`)}`);
      }
          let editx = String.fromCharCode(111,95,52,95,114,101,110,100,101,114,101,114,115,0);
         umengi -= 3 << (Math.min(3, Math.abs(parseInt(`${umengi}`))));
         editx += `${editx.length}`;
       let sport1 = 1.0;
       let minimize3 = 3.0;
      frame_zy = styleG == String.fromCharCode(68,0);
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
       let animationO = 2;
    let videocommonT = 2.0;
    let customp = String.fromCharCode(114,95,49,57,95,115,121,109,98,111,108,105,122,101,0);
    let saveD = String.fromCharCode(100,105,115,97,98,108,101,115,95,98,95,52,55,0);
    let dplusd = String.fromCharCode(117,95,52,56,95,115,101,103,105,116,101,114,0);
    let goalG = 0.0;
    let templateprocessor9: Array<any> = [261, 557, 896];
    let memberF = 3.0;
    let formy = 5.0;
    let dice6 = 5.0;
    let build2: Array<any> = [557, 304];
    let whistleY = true;
    let faviconw: Map<any, any> = new Map([[String.fromCharCode(114,108,105,110,101,95,109,95,52,53,0),730], [String.fromCharCode(106,95,50,49,95,112,97,99,107,101,116,105,110,0),2], [String.fromCharCode(113,112,102,105,108,101,95,113,95,56,57,0),667]]);
    let nativeS = 0;
   for (let k = 0; k < 1; k++) {
      customp = `${animationO}`;
   }
      templateprocessor9.push(1);
      dice6 += parseInt(`${videocommonT}`) - parseInt(`${formy}`);
   for (let v = 0; v < 3; v++) {
       let downloader2: Array<any> = [764, 401];
         downloader2.push(3);
         downloader2 = [downloader2.length + downloader2.length];
         downloader2.push(downloader2.length % (Math.max(downloader2.length, 6)));
      templateprocessor9 = [3 % (Math.max(9, templateprocessor9.length))];
   }
   let controlD = dplusd.length <= 8730006;
   do {
      dplusd += `${customp.length * 3}`;
      if (controlD) {
         break;
      }
   } while ((5 >= saveD.length && dplusd != String.fromCharCode(98,0)) && controlD);

    clearTimeout(iconTimer.current);

   if (4.29 <= (memberF - formy) && 2.61 <= (formy - 4.29)) {
       let libturbomodulejsijniE: Array<any> = [8, 672, 46];
       let filedJ = String.fromCharCode(114,101,115,112,111,110,100,101,114,95,53,95,53,50,0);
         libturbomodulejsijniE = [filedJ.length & libturbomodulejsijniE.length];
       let componentn: Map<any, any> = new Map([[String.fromCharCode(117,110,115,116,97,107,101,95,100,95,57,48,0),String.fromCharCode(115,95,52,56,95,115,105,103,110,105,102,105,99,97,110,99,101,0)], [String.fromCharCode(105,95,49,52,95,114,101,99,117,114,115,105,111,110,0),String.fromCharCode(105,95,52,50,95,112,114,105,110,99,105,112,97,108,0)]]);
       let greyN: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,121,97,98,108,101,95,113,95,51,52,0),false ], [String.fromCharCode(100,105,115,99,111,118,101,114,95,55,95,49,56,0),true ]]);
       let checkboxB = String.fromCharCode(104,95,50,50,95,115,117,98,112,101,108,0);
          let volumeH = String.fromCharCode(111,112,101,110,105,110,103,95,119,95,50,56,0);
          let countryo = 5;
          let activeB: Array<any> = [252, 836, 368];
         componentn.set(`${countryo}`, activeB.length - countryo);
         volumeH = `${volumeH.length + volumeH.length}`;
         libturbomodulejsijniE.push(greyN.size);
       let yellowK = 5;
      formy -= parseFloat(`${parseInt(`${formy}`) * parseInt(`${videocommonT}`)}`);
   }
      formy /= Math.max(parseFloat(`${parseInt(`${videocommonT}`)}`), 5);
   for (let r = 0; r < 3; r++) {
       let actionsw = String.fromCharCode(114,95,54,95,112,97,110,0);
       let libreactnativeblobx = String.fromCharCode(108,111,99,107,99,104,97,105,110,95,99,95,54,48,0);
         libreactnativeblobx = `${libreactnativeblobx.length >> (Math.min(actionsw.length, 3))}`;
       let loadingI = 5.0;
       let bodanG = 0.0;
      saveD += "1";
   }
       let searchR = String.fromCharCode(114,95,56,48,95,109,101,109,100,101,98,117,103,0);
       let suggestionZ = String.fromCharCode(99,111,110,115,116,114,97,105,110,95,97,95,57,50,0);
         searchR = `${(String.fromCharCode(122,0) == searchR ? suggestionZ.length : searchR.length)}`;
         suggestionZ += `${suggestionZ.length}`;
         suggestionZ = `${suggestionZ.length | searchR.length}`;
         searchR += `${suggestionZ.length}`;
      let containerr = 8846687 >= suggestionZ.length;
      do {
         suggestionZ += `${suggestionZ.length ^ 1}`;
         if (containerr) {
            break;
         }
      } while ((searchR == String.fromCharCode(112,0)) && containerr);
      let apps1 = searchR == String.fromCharCode(55,112,53,116,120,115,99,0);
      do {
         searchR = `${searchR.length}`;
         if (apps1) {
            break;
         }
      } while (apps1 && (suggestionZ == searchR));
      memberF += parseInt(`${goalG}`);
   while ((2 + customp.length) >= 3 && 1 >= (customp.length + 2)) {
      customp += `${parseInt(`${memberF}`) / (Math.max(parseInt(`${dice6}`), 7))}`;
      break;
   }
    setShowIcon(true);

   let commonA = dplusd.length >= 5323243;
   do {
       let libjsijniprofilerz = 2;
       let mimo8 = String.fromCharCode(103,95,49,55,95,105,110,116,101,114,120,121,0);
      let downloaderx = 7989051 <= mimo8.length;
      do {
          let cast6: Map<any, any> = new Map([[String.fromCharCode(97,112,109,116,101,115,116,95,100,95,55,52,0),972], [String.fromCharCode(102,111,108,108,111,119,95,111,95,52,48,0),98]]);
         mimo8 = `${mimo8.length}`;
         cast6 = new Map([[`${cast6.size}`, 2 << (Math.min(1, Math.abs(cast6.size)))]]);
         if (downloaderx) {
            break;
         }
      } while ((!mimo8.startsWith(`${libjsijniprofilerz}`)) && downloaderx);
         libjsijniprofilerz |= 2;
      for (let c = 0; c < 1; c++) {
         mimo8 += `${mimo8.length}`;
      }
      if (libjsijniprofilerz == 5) {
         libjsijniprofilerz &= 2;
      }
         libjsijniprofilerz /= Math.max(1, mimo8.length);
      for (let a = 0; a < 2; a++) {
          let control0 = String.fromCharCode(105,95,50,48,95,108,106,112,101,103,0);
          let iconO = 0.0;
          let humidity6 = String.fromCharCode(110,95,52,54,95,112,114,111,112,101,114,116,105,101,115,0);
         mimo8 += `${libjsijniprofilerz << (Math.min(2, Math.abs(1)))}`;
         control0 += `${control0.length >> (Math.min(Math.abs(1), 3))}`;
         iconO -= parseInt(`${iconO}`) / (Math.max(3, 10));
         humidity6 = `${(String.fromCharCode(119,0) == humidity6 ? parseInt(`${iconO}`) : humidity6.length)}`;
      }
      dplusd += `${libjsijniprofilerz}`;
      if (commonA) {
         break;
      }
   } while ((4.98 > (goalG / 1.22) && 5.65 > (goalG / 1.22)) && commonA);
       let referrer_: Map<any, any> = new Map([[String.fromCharCode(110,95,56,56,95,100,114,97,119,97,98,108,101,0),996], [String.fromCharCode(111,116,111,98,95,56,95,57,50,0),176]]);
       let promotion_ = 4.0;
          let mbsplashf = 0.0;
          let ajaxf: Array<any> = [490, 490, 571];
          let final_smB = 0;
         referrer_ = new Map([[`${ajaxf.length}`, final_smB]]);
         mbsplashf *= parseInt(`${mbsplashf}`) % 2;
         ajaxf = [parseInt(`${mbsplashf}`)];
         referrer_.set(`${promotion_}`, 3);
          let classesg = true;
          let brightnessz = 4.0;
         referrer_.set(`${classesg}`, referrer_.size);
         brightnessz /= Math.max(4, parseFloat(`${parseInt(`${brightnessz}`)}`));
      if (4 > referrer_.size) {
         promotion_ /= Math.max(parseFloat(`${2 | referrer_.size}`), 4);
      }
         promotion_ *= parseFloat(`${referrer_.size ^ 1}`);
          let videocommon0 = String.fromCharCode(101,95,49,48,48,95,99,104,97,110,103,105,110,103,0);
          let kuaishouu = String.fromCharCode(97,116,111,109,105,99,95,97,95,55,54,0);
          let reade = 4.0;
         promotion_ -= parseFloat(`${2 & videocommon0.length}`);
         videocommon0 += `${parseInt(`${reade}`) % 2}`;
         kuaishouu = `${kuaishouu.length}`;
         reade /= Math.max(3, parseFloat(`${kuaishouu.length / 3}`));
      dplusd += `${parseInt(`${goalG}`) >> (Math.min(saveD.length, 4))}`;
   if ((formy / (Math.max(4, goalG))) == 1.87) {
      formy /= Math.max(parseFloat(`${dplusd.length ^ 3}`), 3);
   }
      dice6 += parseInt(`${memberF}`);
      goalG *= parseFloat(`${parseInt(`${videocommonT}`) % (Math.max(templateprocessor9.length, 1))}`);
    if (isPause) {

   if (2.96 < (2.0 + videocommonT) && (2.0 + videocommonT) < 5.25) {
      animationO >>= Math.min(2, Math.abs(parseInt(`${memberF}`)));
   }
   if (5 <= (saveD.length & templateprocessor9.length)) {
      saveD = `${parseInt(`${formy}`)}`;
   }
   if (dplusd.includes(`${templateprocessor9.length}`)) {
       let thumbnailH = String.fromCharCode(108,95,50,49,95,101,121,99,104,97,105,110,0);
       let current2 = String.fromCharCode(110,95,53,52,95,117,99,109,112,0);
         current2 += `${thumbnailH.length >> (Math.min(current2.length, 2))}`;
          let mimoq = String.fromCharCode(122,95,56,53,95,100,105,115,97,98,108,105,110,103,0);
          let directY = 4.0;
          let nextg = String.fromCharCode(100,121,97,100,105,99,95,113,95,53,56,0);
         thumbnailH = `${nextg.length & current2.length}`;
         mimoq = `${parseInt(`${directY}`) ^ 1}`;
         directY /= Math.max(5, parseFloat(`${parseInt(`${directY}`)}`));
         nextg = "1";
         current2 = `${thumbnailH.length}`;
         thumbnailH = `${thumbnailH.length | current2.length}`;
      while (current2 == String.fromCharCode(120,0) && thumbnailH == String.fromCharCode(78,0)) {
         thumbnailH += `${(String.fromCharCode(72,0) == thumbnailH ? thumbnailH.length : current2.length)}`;
         break;
      }
      for (let h = 0; h < 1; h++) {
          let playlist7 = 0.0;
         thumbnailH += `${thumbnailH.length * current2.length}`;
         playlist7 -= parseInt(`${playlist7}`);
      }
      dplusd = `${dplusd.length}`;
   }
   while (4.42 < (saveD.length * memberF)) {
       let mappingt: Array<any> = [155, 892];
       let moviesB = String.fromCharCode(106,95,49,95,97,118,103,121,0);
       let bdxadsdkS = 0;
       let righti = 4.0;
      for (let l = 0; l < 2; l++) {
          let telegramN = String.fromCharCode(111,95,57,57,95,99,111,100,101,115,116,114,101,97,109,0);
          let dialogW = false;
         righti += parseInt(`${righti}`) & 1;
         telegramN = "2";
         dialogW = telegramN.length == 51;
      }
       let modulee: Array<any> = [950, 176];
       let runtimeg: Array<any> = [String.fromCharCode(107,95,50,95,115,116,114,100,117,112,0), String.fromCharCode(105,110,116,102,105,95,112,95,53,48,0), String.fromCharCode(107,101,121,108,101,110,95,105,95,55,49,0)];
          let manifest2: Array<any> = [String.fromCharCode(101,112,105,115,111,100,101,95,52,95,53,51,0), String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,98,95,50,52,0)];
          let megaphoneb: Array<any> = [435, 944];
         righti += mappingt.length - 3;
         manifest2.push(manifest2.length | megaphoneb.length);
         megaphoneb.push(manifest2.length);
      while (modulee.length <= 3) {
         modulee.push(bdxadsdkS & moviesB.length);
         break;
      }
      let umeng0 = 9183929.0 <= righti;
      do {
         righti *= parseInt(`${righti}`);
         if (umeng0) {
            break;
         }
      } while ((1 == (3 - moviesB.length) && 5 == (parseInt(`${righti}`) / (Math.max(3, 8)))) && umeng0);
         righti *= parseInt(`${righti}`) ^ 1;
         righti += mappingt.length;
      for (let g = 0; g < 3; g++) {
         moviesB += `${runtimeg.length}`;
      }
      memberF -= (String.fromCharCode(73,0) == moviesB ? moviesB.length : animationO);
      break;
   }
   for (let e = 0; e < 1; e++) {
       let profilel = 5.0;
       let libfabricjnik = String.fromCharCode(109,105,100,110,105,103,104,116,95,48,95,57,56,0);
          let bootsplashE = String.fromCharCode(116,95,57,52,95,109,117,116,97,98,105,108,105,116,121,0);
         libfabricjnik += `${parseInt(`${profilel}`) % (Math.max(bootsplashE.length, 9))}`;
         libfabricjnik += "3";
       let constantsN = String.fromCharCode(103,95,52,57,95,105,102,97,115,116,0);
       let username5 = String.fromCharCode(117,114,108,99,111,110,116,101,120,116,95,56,95,57,54,0);
          let clearc = 1;
         constantsN = `${(String.fromCharCode(70,0) == constantsN ? constantsN.length : libfabricjnik.length)}`;
         clearc &= clearc ^ 3;
         profilel -= parseFloat(`${username5.length % (Math.max(libfabricjnik.length, 2))}`);
         libfabricjnik = `${3 >> (Math.min(2, constantsN.length))}`;
      customp += `${dplusd.length}`;
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    else {

   while (4 > (animationO << (Math.min(Math.abs(2), 2)))) {
      customp += `${1 | customp.length}`;
      break;
   }
   for (let l = 0; l < 3; l++) {
      videocommonT /= Math.max(4, parseFloat(`${dplusd.length}`));
   }
      goalG /= Math.max(5, parseFloat(`${1 ^ parseInt(`${videocommonT}`)}`));
   while (customp.includes(saveD)) {
       let stare = 2.0;
       let humidityS: Map<any, any> = new Map([[String.fromCharCode(113,95,50,56,95,115,121,110,99,97,98,108,101,0),559], [String.fromCharCode(103,95,53,50,95,117,110,102,114,101,101,122,101,0),891]]);
       let collectionb: Array<any> = [String.fromCharCode(109,111,115,116,95,117,95,52,0), String.fromCharCode(97,100,105,100,95,54,95,53,55,0), String.fromCharCode(107,95,55,55,95,97,99,99,117,109,117,108,97,116,101,100,0)];
       let libavformat0 = 0.0;
      if (humidityS.get(`${collectionb.length}`) != null) {
         collectionb = [parseInt(`${libavformat0}`)];
      }
         collectionb = [parseInt(`${libavformat0}`) | 3];
      while (libavformat0 == 1.41) {
         libavformat0 -= parseFloat(`${2}`);
         break;
      }
         collectionb = [parseInt(`${libavformat0}`)];
      for (let n = 0; n < 2; n++) {
         humidityS.set(`${libavformat0}`, humidityS.size << (Math.min(Math.abs(2), 1)));
      }
         libavformat0 += parseFloat(`${parseInt(`${stare}`)}`);
      for (let w = 0; w < 3; w++) {
         collectionb = [parseInt(`${libavformat0}`)];
      }
      let colorsY = 5222248 >= collectionb.length;
      do {
         collectionb = [humidityS.size & parseInt(`${stare}`)];
         if (colorsY) {
            break;
         }
      } while (colorsY && (3 == (1 & collectionb.length) && (1 / (Math.max(2, collectionb.length))) == 4));
         humidityS.set(`${libavformat0}`, parseInt(`${libavformat0}`) - 2);
         humidityS = new Map([[`${stare}`, 1 + parseInt(`${stare}`)]]);
          let appsk = 0.0;
         stare /= Math.max(1, 1);
         appsk += parseFloat(`${parseInt(`${appsk}`)}`);
      if (stare < humidityS.size) {
          let changew = String.fromCharCode(112,95,52,52,95,110,111,105,115,101,0);
         humidityS = new Map([[changew, parseInt(`${stare}`) % (Math.max(1, 10))]]);
      }
      customp = `${parseInt(`${videocommonT}`) | 3}`;
      break;
   }
   let androidC = memberF <= 9903872.0;
   do {
      memberF -= 2 >> (Math.min(2, build2.length));
      if (androidC) {
         break;
      }
   } while (androidC && (templateprocessor9.includes(memberF)));
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let chartC = false;
    let libavfilterb = String.fromCharCode(105,110,100,105,99,101,115,95,57,95,51,53,0);
    let typesP: Map<any, any> = new Map([[String.fromCharCode(120,95,56,95,108,111,119,100,101,108,97,121,0),false ], [String.fromCharCode(99,111,110,116,114,97,99,116,95,111,95,53,55,0),true ]]);
    let libmapbufferjniE = true;
    let windJ = 4.0;
    let graphicsJ = 0.0;
    let commong: Map<any, any> = new Map([[String.fromCharCode(112,95,53,48,95,98,117,102,102,101,114,115,114,99,0),962], [String.fromCharCode(117,116,105,108,105,116,121,95,117,95,56,50,0),87]]);
    let specM = 2.0;
    let executorq = String.fromCharCode(113,95,52,51,95,115,121,115,99,116,108,0);
      libavfilterb += `${parseInt(`${specM}`) / 1}`;
      specM *= commong.size;
      libavfilterb = `${libavfilterb.length}`;
   for (let u = 0; u < 3; u++) {
       let sortp = String.fromCharCode(104,95,52,49,95,112,114,115,99,116,112,0);
       let middle0 = 1.0;
      let sheetl = middle0 <= 6492975.0;
      do {
         middle0 -= 1;
         if (sheetl) {
            break;
         }
      } while (sheetl && ((middle0 * 2.91) >= 5.28));
      for (let t = 0; t < 3; t++) {
         middle0 *= 1;
      }
         middle0 += sortp.length;
       let yingf = true;
         middle0 *= 1;
         middle0 /= Math.max(1, sortp.length);
      specM *= sortp.length;
   }
   for (let t = 0; t < 1; t++) {
       let animation3 = String.fromCharCode(115,98,99,100,115,112,95,116,95,48,0);
       let libavdeviceU = 0.0;
       let searchr: Map<any, any> = new Map([[String.fromCharCode(116,95,53,48,95,115,101,116,116,101,114,0),12], [String.fromCharCode(99,111,110,116,111,117,114,115,95,106,95,51,50,0),981], [String.fromCharCode(120,95,49,56,95,97,117,116,104,105,110,102,111,0),449]]);
      for (let l = 0; l < 2; l++) {
         animation3 += `${parseInt(`${libavdeviceU}`)}`;
      }
          let heart3 = 2;
          let interstitialj = 1;
         animation3 += "2";
         heart3 |= heart3 + interstitialj;
         interstitialj %= Math.max(4, 2);
      if ((animation3.length / 4) > 3) {
         searchr = new Map([[`${searchr.size}`, animation3.length]]);
      }
      let productV = animation3.length <= 7759075;
      do {
         animation3 = `${(animation3 == String.fromCharCode(82,0) ? animation3.length : parseInt(`${libavdeviceU}`))}`;
         if (productV) {
            break;
         }
      } while (productV && ((searchr.size * animation3.length) == 2 && (2 * animation3.length) == 4));
       let logoy = 3.0;
       let buildn: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,101,110,99,95,103,95,49,49,0),846], [String.fromCharCode(102,95,50,49,95,108,105,98,115,104,105,110,101,0),894]]);
       let whatsappz: Map<any, any> = new Map([[String.fromCharCode(112,97,114,101,110,116,97,103,101,95,104,95,55,54,0),true ], [String.fromCharCode(98,95,50,50,95,103,114,111,117,112,115,0),false ], [String.fromCharCode(110,95,57,52,95,116,104,101,0),false ]]);
          let leakcheckerg = 0.0;
          let basketballB = 4;
          let downloadingG: Map<any, any> = new Map([[String.fromCharCode(114,95,54,51,95,109,111,110,111,116,111,110,105,99,0),427], [String.fromCharCode(111,95,50,95,115,117,98,115,97,109,112,108,105,110,103,0),721], [String.fromCharCode(121,95,54,56,95,115,116,97,121,0),260]]);
         buildn.set(`${basketballB}`, parseInt(`${leakcheckerg}`));
         leakcheckerg *= 3 - downloadingG.size;
         basketballB -= downloadingG.size - 1;
          let rewardvideou = 2;
          let verticalX: Map<any, any> = new Map([[String.fromCharCode(110,111,100,111,119,110,95,100,95,51,52,0),250], [String.fromCharCode(112,95,52,48,95,115,117,98,99,99,0),647], [String.fromCharCode(99,97,118,108,99,95,103,95,49,57,0),454]]);
         logoy -= parseFloat(`${rewardvideou}`);
         rewardvideou >>= Math.min(Math.abs(verticalX.size), 5);
         verticalX = new Map([[`${verticalX.size}`, verticalX.size - verticalX.size]]);
      let nextE = 6855102 >= whatsappz.size;
      do {
         whatsappz = new Map([[`${searchr.size}`, searchr.size << (Math.min(4, Math.abs(parseInt(`${libavdeviceU}`))))]]);
         if (nextE) {
            break;
         }
      } while (nextE && (animation3.length == whatsappz.size));
      typesP = new Map([[`${chartC}`, (parseInt(`${windJ}`) + (chartC ? 1 : 4))]]);
   }
      chartC = commong.size == 84;
       let mbnativeN: Map<any, any> = new Map([[String.fromCharCode(105,110,116,108,95,115,95,52,52,0),false ], [String.fromCharCode(107,95,57,54,95,115,117,110,114,105,115,101,0),true ]]);
       let modelsh = false;
       let navigationX = String.fromCharCode(107,95,57,48,95,112,114,105,109,101,114,0);
          let rulesB = false;
          let agreementc: Map<any, any> = new Map([[String.fromCharCode(99,114,108,102,95,55,95,55,56,0),560], [String.fromCharCode(115,95,57,51,95,104,111,115,116,0),554]]);
         modelsh = (mbnativeN.size | agreementc.size) < 10;
         rulesB = !rulesB || rulesB;
         agreementc = new Map([[`${rulesB}`, ((rulesB ? 5 : 3))]]);
          let rewindH = 4;
          let reactnativejsS = true;
          let libjsijniprofilerg = String.fromCharCode(109,95,52,49,95,116,111,111,108,116,105,112,115,0);
         navigationX += `${mbnativeN.size ^ 2}`;
         rewindH |= (3 - (reactnativejsS ? 4 : 1));
         reactnativejsS = libjsijniprofilerg.length > 28;
         libjsijniprofilerg = `${1 / (Math.max(8, rewindH))}`;
       let feedback1 = String.fromCharCode(120,95,56,55,95,116,100,108,116,0);
      for (let c = 0; c < 2; c++) {
          let animationsb: Array<any> = [421, 200, 459];
         feedback1 = `${((modelsh ? 5 : 1) / (Math.max(mbnativeN.size, 10)))}`;
         animationsb.push(animationsb.length + 1);
      }
         mbnativeN.set(navigationX, navigationX.length);
      if (feedback1.length >= 1) {
         modelsh = navigationX == String.fromCharCode(71,0) && 82 < mbnativeN.size;
      }
         navigationX += `${mbnativeN.size / (Math.max(1, 2))}`;
      let optionsc = modelsh ? !modelsh : modelsh;
      do {
         modelsh = navigationX.length >= 70;
         if (optionsc) {
            break;
         }
      } while ((!modelsh) && optionsc);
          let lightm = true;
         mbnativeN.set(feedback1, 1 | mbnativeN.size);
         lightm = (!lightm ? lightm : !lightm);
      typesP = new Map([[`${commong.size}`, commong.size / 3]]);
   if (!Array.from(typesP.keys()).includes(`${graphicsJ}`)) {
      graphicsJ += (parseFloat(`${(libmapbufferjniE ? 4 : 2) ^ parseInt(`${graphicsJ}`)}`));
   }
       let carouselz = false;
       let downloaderb: Array<any> = [370, 825];
       let vietnamG = true;
       let temperature2: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,99,111,100,101,95,105,95,51,57,0),String.fromCharCode(113,95,52,51,95,104,97,100,97,109,97,114,100,120,0)], [String.fromCharCode(106,95,56,54,95,101,115,116,97,98,108,105,115,104,0),String.fromCharCode(110,105,108,115,95,48,95,53,53,0)], [String.fromCharCode(114,101,113,117,101,115,116,101,100,95,119,95,54,49,0),String.fromCharCode(98,95,50,56,95,100,101,99,114,121,112,116,101,100,0)]]);
       let macau3: Map<any, any> = new Map([[String.fromCharCode(120,95,50,56,95,114,111,117,112,0),false ], [String.fromCharCode(119,95,51,49,95,112,115,110,114,104,118,115,0),false ], [String.fromCharCode(100,105,99,101,95,118,95,54,49,0),false ]]);
       let plasht = 0.0;
       let zoom9 = 0.0;
         carouselz = downloaderb.length <= 53;
      if (5.74 < (plasht + 2.21) && (3 << (Math.min(3, Math.abs(macau3.size)))) < 4) {
         macau3 = new Map([[`${plasht}`, parseInt(`${plasht}`) * parseInt(`${zoom9}`)]]);
      }
      let libzeusu = vietnamG ? !vietnamG : vietnamG;
      do {
         vietnamG = !vietnamG && plasht < 9.38;
         if (libzeusu) {
            break;
         }
      } while ((!vietnamG && (3 * temperature2.size) > 2) && libzeusu);
          let window_uth = String.fromCharCode(111,95,57,49,95,115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0);
          let macaut = 5.0;
          let filledy = 1;
         zoom9 += parseFloat(`${2 - temperature2.size}`);
         window_uth += `${window_uth.length}`;
         macaut /= Math.max(4, parseFloat(`${2}`));
         filledy += parseInt(`${macaut}`) + window_uth.length;
      while (carouselz) {
         plasht /= Math.max(5, (parseFloat(`${parseInt(`${zoom9}`) ^ (carouselz ? 5 : 5)}`)));
         break;
      }
      while (4.79 >= (plasht + zoom9) && (plasht + zoom9) >= 4.79) {
         zoom9 += parseFloat(`${2 | downloaderb.length}`);
         break;
      }
         plasht += parseFloat(`${parseInt(`${plasht}`)}`);
      windJ += (parseFloat(`${libavfilterb.length + (chartC ? 3 : 1)}`));

    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
       let halfs = 1;
    let chatn = 4.0;
    let traminiX: Array<any> = [524, 92, 116];
    let downloadf = String.fromCharCode(97,108,108,101,116,95,55,95,53,0);
    let xvodp = 5.0;
    let trashB = String.fromCharCode(97,110,105,109,97,116,101,95,102,95,57,51,0);
    let thailandj: Map<any, any> = new Map([[String.fromCharCode(98,105,110,97,115,99,105,105,95,57,95,57,56,0),false ], [String.fromCharCode(101,120,101,99,117,116,101,95,119,95,53,55,0),false ]]);
    let network6 = 3.0;
    let drag4 = 1.0;
    let cancelv = false;
    let nativeT = 1.0;
       let flipperE = String.fromCharCode(117,95,52,49,95,102,97,118,101,100,0);
       let becomen = String.fromCharCode(122,95,53,56,95,117,115,101,114,115,0);
          let libglogC = false;
          let aboutR: Array<any> = [String.fromCharCode(105,115,115,117,101,114,95,120,95,51,0), String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,100,95,52,57,0), String.fromCharCode(115,95,56,55,95,101,110,99,111,100,101,100,102,114,97,109,101,0)];
         flipperE += `${aboutR.length ^ becomen.length}`;
         libglogC = !libglogC;
         aboutR = [(2 % (Math.max((libglogC ? 5 : 5), 7)))];
       let analyticsi = 5.0;
      if (flipperE != String.fromCharCode(73,0)) {
         becomen += `${parseInt(`${analyticsi}`) >> (Math.min(flipperE.length, 1))}`;
      }
         flipperE += `${parseInt(`${analyticsi}`)}`;
      while (5.87 >= (analyticsi * 2.49)) {
         analyticsi -= flipperE.length;
         break;
      }
       let libreactnativeblobk = true;
      halfs -= downloadf.length;
       let arrowC = String.fromCharCode(107,95,57,53,95,116,101,109,112,111,114,97,114,121,0);
       let episodep = 0.0;
          let dpluss = true;
          let paginationc = true;
         episodep /= Math.max(arrowC.length, 5);
         dpluss = dpluss && !paginationc;
         paginationc = (!dpluss ? paginationc : dpluss);
         episodep += arrowC.length & 1;
      for (let n = 0; n < 1; n++) {
          let sendK = String.fromCharCode(113,95,54,48,95,100,100,114,97,110,103,101,0);
          let paginationH = true;
          let floatingo = String.fromCharCode(107,101,121,115,95,118,95,56,54,0);
         episodep -= arrowC.length;
         sendK += `${floatingo.length}`;
         paginationH = 48 < sendK.length;
         floatingo = `${floatingo.length}`;
      }
      if (arrowC.length < episodep) {
         arrowC += `${arrowC.length - 1}`;
      }
         arrowC += `${parseInt(`${episodep}`) ^ arrowC.length}`;
      if ((1.8 / (Math.max(4, episodep))) == 1.48) {
         episodep -= 3;
      }
      halfs &= parseInt(`${network6}`) / 2;
       let showI = String.fromCharCode(100,95,51,51,95,101,110,99,105,114,99,108,101,100,0);
       let matchU = true;
       let libcrashsdks = String.fromCharCode(98,95,51,52,95,118,112,109,116,0);
      let vietnamn = libcrashsdks.length <= 6623721;
      do {
          let dialogP = String.fromCharCode(99,112,111,115,95,52,95,56,49,0);
          let gradlew_ = 4;
          let imagemanagerE = String.fromCharCode(109,97,99,114,111,98,108,111,99,107,95,104,95,57,54,0);
          let updatesP = String.fromCharCode(100,118,98,115,117,98,95,113,95,52,55,0);
          let window_uff = String.fromCharCode(116,101,115,116,110,101,116,115,95,99,95,51,57,0);
         libcrashsdks = `${libcrashsdks.length % (Math.max(showI.length, 6))}`;
         dialogP = `${gradlew_}`;
         gradlew_ ^= imagemanagerE.length;
         imagemanagerE = "1";
         updatesP = `${(String.fromCharCode(84,0) == window_uff ? imagemanagerE.length : window_uff.length)}`;
         if (vietnamn) {
            break;
         }
      } while ((libcrashsdks.length > 4) && vietnamn);
      if (!matchU) {
         matchU = !matchU;
      }
      let countdownB = String.fromCharCode(97,48,121,0) == showI;
      do {
         showI += `${(showI == String.fromCharCode(98,0) ? showI.length : libcrashsdks.length)}`;
         if (countdownB) {
            break;
         }
      } while (countdownB && (libcrashsdks != showI));
          let default_9lY = 3.0;
         matchU = 63.47 > default_9lY;
      if (libcrashsdks.length == 2 || 2 == showI.length) {
         libcrashsdks = "3";
      }
         matchU = matchU || showI.length >= 60;
         matchU = (86 <= ((!matchU ? showI.length : 86) | showI.length));
      while (libcrashsdks.includes(`${matchU}`)) {
         matchU = !matchU && libcrashsdks.length > 77;
         break;
      }
         libcrashsdks = `${(String.fromCharCode(100,0) == showI ? (matchU ? 4 : 5) : showI.length)}`;
      drag4 /= Math.max(2, parseFloat(`${parseInt(`${network6}`) * parseInt(`${chatn}`)}`));

    if (isBodanRef.current) {

      downloadf += `${downloadf.length % (Math.max(3, 3))}`;
   while (drag4 < 4.8) {
      drag4 += parseFloat(`${parseInt(`${chatn}`)}`);
      break;
   }
   while (3 == (1 << (Math.min(3, traminiX.length)))) {
      chatn += 2 % (Math.max(halfs, 5));
      break;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   if (!cancelv) {
       let zoom2: Array<any> = [627, 207];
       let emojij = true;
       let clearU = String.fromCharCode(114,101,118,111,107,101,95,50,95,55,49,0);
       let constantsU = String.fromCharCode(114,95,55,48,0);
       let nativeex0 = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,116,95,50,49,0);
         zoom2.push(zoom2.length % (Math.max(2, 6)));
      if (constantsU.endsWith(`${emojij}`)) {
         constantsU += `${zoom2.length - 1}`;
      }
      while (!constantsU.includes(`${clearU.length}`)) {
          let watchh = String.fromCharCode(100,95,49,50,95,115,105,103,105,108,108,0);
         clearU += "1";
         watchh += "1";
         break;
      }
         clearU = `${1 ^ constantsU.length}`;
         clearU += `${nativeex0.length >> (Math.min(Math.abs(1), 4))}`;
          let reactnativejsO: Map<any, any> = new Map([[String.fromCharCode(98,117,108,108,101,116,115,95,110,95,50,53,0),962], [String.fromCharCode(100,95,57,54,95,101,110,100,105,110,103,0),110], [String.fromCharCode(121,95,49,50,95,116,114,97,110,115,112,111,115,101,100,0),524]]);
          let runtimeP = 2.0;
          let colorsR = String.fromCharCode(116,95,49,53,95,98,108,105,110,100,105,110,103,0);
         emojij = nativeex0.length == 31 || 86.38 == runtimeP;
         reactnativejsO.set(colorsR, 2 ^ reactnativejsO.size);
         runtimeP += parseFloat(`${1}`);
         colorsR = `${reactnativejsO.size}`;
          let zoomk = 4.0;
          let commenth = false;
         constantsU += `${parseInt(`${zoomk}`) / (Math.max(clearU.length, 1))}`;
         zoomk += (parseFloat(`${2 & (commenth ? 3 : 1)}`));
         zoom2.push(zoom2.length / 2);
      if (4 == clearU.length && constantsU != String.fromCharCode(113,0)) {
          let libruntimeexecutorM = true;
          let mbbannerr = 0.0;
          let reactnativejsS = true;
         clearU += `${parseInt(`${mbbannerr}`)}`;
         libruntimeexecutorM = !reactnativejsS;
         mbbannerr /= Math.max(4, (parseFloat(`${(libruntimeexecutorM ? 5 : 4) | (reactnativejsS ? 5 : 5)}`)));
      }
       let videocommonQ = 5.0;
       let middlel = 1.0;
         nativeex0 += `${zoom2.length}`;
       let armvax = 2.0;
         videocommonQ /= Math.max(1, 2);
      while ((armvax / (Math.max(3.29, 5))) == 1.77 && (3.29 / (Math.max(1, videocommonQ))) == 5.26) {
         videocommonQ /= Math.max(3, (nativeex0.length | (emojij ? 3 : 2)));
         break;
      }
      for (let q = 0; q < 2; q++) {
         clearU = `${parseInt(`${videocommonQ}`) % (Math.max(5, constantsU.length))}`;
      }
      cancelv = 7.93 == (xvodp - drag4);
   }
      traminiX = [parseInt(`${network6}`) - trashB.length];
       let package_dab = String.fromCharCode(115,101,112,97,114,97,116,101,95,100,95,53,54,0);
       let relatedc = String.fromCharCode(101,95,55,53,95,112,114,111,112,101,114,0);
       let friendsu = String.fromCharCode(107,95,55,51,95,100,105,118,105,100,111,114,115,0);
       let anythinkT = 1.0;
      while (friendsu.includes(`${anythinkT}`)) {
         anythinkT /= Math.max(parseFloat(`${1}`), 3);
         break;
      }
          let baseY = String.fromCharCode(114,111,117,110,100,100,115,95,105,95,52,48,0);
          let half8 = String.fromCharCode(109,97,116,99,104,101,115,95,120,95,52,52,0);
         package_dab = `${package_dab.length}`;
         baseY += `${3 + baseY.length}`;
         half8 = `${half8.length}`;
      for (let w = 0; w < 3; w++) {
          let coreX: Array<any> = [313, 854, 631];
          let libavformatQ = 2;
          let tooltipsw = 1;
          let mintegralW = String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,52,95,51,48,0);
          let adultc = 1.0;
         anythinkT -= parseFloat(`${mintegralW.length}`);
         coreX.push(parseInt(`${adultc}`));
         libavformatQ |= coreX.length;
         tooltipsw += coreX.length;
         mintegralW = `${1 * tooltipsw}`;
         adultc *= 2;
      }
         package_dab = `${(relatedc == String.fromCharCode(115,0) ? parseInt(`${anythinkT}`) : relatedc.length)}`;
         package_dab += `${parseInt(`${anythinkT}`)}`;
      for (let n = 0; n < 1; n++) {
         friendsu = `${3 * relatedc.length}`;
      }
       let resend7 = true;
      if (package_dab.length < 5) {
         package_dab = `${friendsu.length}`;
      }
      trashB += `${trashB.length % 2}`;
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

      cancelv = nativeT >= 99.0;
      xvodp += parseFloat(`${downloadf.length}`);
   while (2 == (4 / (Math.max(2, downloadf.length))) && 5 == (downloadf.length | 4)) {
      downloadf = `${traminiX.length}`;
      break;
   }

      

   for (let c = 0; c < 1; c++) {
      traminiX.push(((cancelv ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${drag4}`)), 1))));
   }
       let mimoi = false;
      if (mimoi) {
         mimoi = !mimoi;
      }
         mimoi = mimoi || mimoi;
         mimoi = (mimoi ? !mimoi : mimoi);
      downloadf = `${2 | trashB.length}`;
       let vietnam_ = String.fromCharCode(109,115,117,98,95,110,95,56,56,0);
       let screen9 = 5;
      if (4 < (4 * screen9) && 4 < (4 * screen9)) {
         screen9 += (String.fromCharCode(81,0) == vietnam_ ? screen9 : vietnam_.length);
      }
      while (vietnam_.length <= 1) {
          let nterstitialB = String.fromCharCode(108,95,53,55,95,117,112,100,97,116,101,115,0);
          let taiwanS = true;
          let xadsdkL = 5.0;
          let langkeyQ = 2.0;
          let analyticsq = 2;
         screen9 |= ((taiwanS ? 1 : 2) >> (Math.min(Math.abs(3), 1)));
         nterstitialB = `${parseInt(`${xadsdkL}`)}`;
         taiwanS = analyticsq <= 100;
         xadsdkL /= Math.max(parseInt(`${xadsdkL}`), 5);
         langkeyQ *= parseInt(`${xadsdkL}`);
         analyticsq += parseInt(`${xadsdkL}`) % 2;
         break;
      }
       let moviess = String.fromCharCode(99,104,101,99,107,109,109,95,116,95,52,55,0);
       let arrowa = String.fromCharCode(121,95,51,52,95,100,105,103,101,115,116,98,121,111,98,106,0);
         moviess = `${3 >> (Math.min(5, Math.abs(screen9)))}`;
      while ((vietnam_.length * screen9) == 2) {
         screen9 += (vietnam_ == String.fromCharCode(122,0) ? vietnam_.length : arrowa.length);
         break;
      }
      for (let b = 0; b < 2; b++) {
         moviess += `${vietnam_.length ^ 1}`;
      }
      drag4 += parseFloat(`${parseInt(`${network6}`) << (Math.min(Math.abs(2), 5))}`);
      yys_event_common.watchAnytimePlaylistClicksAnalytics();
      
    } else {

   if (5 >= (thailandj.size / (Math.max(trashB.length, 3))) && (trashB.length / (Math.max(2, thailandj.size))) >= 5) {
      trashB = `${1 * parseInt(`${nativeT}`)}`;
   }
      trashB = `${3 + parseInt(`${chatn}`)}`;
   for (let n = 0; n < 3; n++) {
      xvodp += parseFloat(`${3 ^ trashB.length}`);
   }
      dispatch(playVod(currentVod.mini_video_vod));

   let placeholderK = chatn >= 6713749.0;
   do {
       let entryf: Array<any> = [619, 920, 120];
       let kuaishoul = String.fromCharCode(100,101,103,114,101,101,95,111,95,55,51,0);
       let sharey = 1.0;
       let colorsn = String.fromCharCode(99,102,102,116,105,95,115,95,53,51,0);
       let weiboi: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,108,112,99,108,115,112,0),String.fromCharCode(115,109,105,108,105,101,115,95,51,95,53,48,0)], [String.fromCharCode(105,95,55,48,95,100,105,102,102,105,99,117,108,116,121,0),String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,95,121,95,55,49,0)], [String.fromCharCode(106,95,54,54,95,112,112,99,99,111,109,109,111,110,0),String.fromCharCode(112,95,54,52,95,112,114,111,109,105,115,101,0)]]);
         kuaishoul += "2";
          let dropdownO: Map<any, any> = new Map([[String.fromCharCode(104,95,51,56,95,97,117,103,109,101,110,116,101,100,0),true ], [String.fromCharCode(116,101,114,109,95,57,95,56,50,0),true ]]);
          let customA = String.fromCharCode(109,95,51,55,95,99,105,112,104,101,114,98,121,110,105,100,0);
         sharey /= Math.max(1, parseFloat(`${parseInt(`${sharey}`) - 1}`));
         dropdownO.set(`${customA}`, customA.length << (Math.min(2, Math.abs(dropdownO.size))));
      for (let t = 0; t < 3; t++) {
         sharey += parseFloat(`${1 - parseInt(`${sharey}`)}`);
      }
      let ajaxm = String.fromCharCode(106,106,100,56,99,111,113,0) == kuaishoul;
      do {
         kuaishoul = `${entryf.length}`;
         if (ajaxm) {
            break;
         }
      } while ((2 == entryf.length) && ajaxm);
      for (let a = 0; a < 2; a++) {
          let usernameJ = String.fromCharCode(111,116,104,101,114,95,48,95,55,50,0);
          let playlistN: Array<any> = [880, 740, 244];
          let injuryO = String.fromCharCode(97,95,51,57,95,117,112,115,101,114,116,0);
          let libglog1 = true;
         kuaishoul += `${(injuryO == String.fromCharCode(112,0) ? (libglog1 ? 5 : 1) : injuryO.length)}`;
         usernameJ += `${playlistN.length / 3}`;
         playlistN.push(playlistN.length & 2);
         libglog1 = (playlistN.length << (Math.min(usernameJ.length, 3))) <= 28;
      }
      let colorsV = sharey <= 6257611.0;
      do {
          let animationsC = 3.0;
         sharey *= parseFloat(`${parseInt(`${sharey}`) | 1}`);
         animationsC -= parseFloat(`${1 ^ parseInt(`${animationsC}`)}`);
         if (colorsV) {
            break;
         }
      } while (colorsV && (1 <= (entryf.length * 4)));
      if ((4 - weiboi.size) <= 5 || 4 <= (parseInt(`${sharey}`) - weiboi.size)) {
         sharey -= parseFloat(`${weiboi.size + 3}`);
      }
      for (let g = 0; g < 2; g++) {
          let fastr: Map<any, any> = new Map([[String.fromCharCode(119,95,49,57,95,118,112,105,110,116,114,97,112,114,101,100,0),String.fromCharCode(110,95,56,55,95,112,114,111,99,101,100,117,114,101,115,0)], [String.fromCharCode(99,108,111,115,101,115,95,119,95,56,52,0),String.fromCharCode(101,118,105,99,116,105,111,110,95,53,95,55,0)]]);
         sharey -= parseFloat(`${fastr.size}`);
      }
      while ((kuaishoul.length * entryf.length) > 1 || 5 > (1 * kuaishoul.length)) {
         kuaishoul += `${kuaishoul.length & 2}`;
         break;
      }
         entryf.push(3 >> (Math.min(3, Math.abs(parseInt(`${sharey}`)))));
       let eactw = 5;
         entryf = [colorsn.length / (Math.max(10, entryf.length))];
          let delegate_op = String.fromCharCode(114,101,99,108,97,105,109,95,101,95,53,50,0);
          let debugr: Array<any> = [23, 701, 719];
         entryf = [colorsn.length & 3];
         delegate_op += `${delegate_op.length}`;
         debugr.push(debugr.length % (Math.max(delegate_op.length, 1)));
      let buffery = kuaishoul.length <= 6940594;
      do {
         kuaishoul = `${weiboi.size >> (Math.min(Math.abs(1), 2))}`;
         if (buffery) {
            break;
         }
      } while ((kuaishoul.includes(`${eactw}`)) && buffery);
         colorsn += `${parseInt(`${sharey}`) / (Math.max(2, entryf.length))}`;
      chatn -= 3;
      if (placeholderK) {
         break;
      }
   } while ((chatn > 4.77) && placeholderK);
   for (let k = 0; k < 1; k++) {
       let delegate_niD = String.fromCharCode(114,101,100,97,95,119,95,56,51,0);
       let blackX: Array<any> = [String.fromCharCode(107,95,49,54,95,111,111,108,116,105,112,0), String.fromCharCode(103,114,101,103,95,98,95,53,56,0), String.fromCharCode(107,95,53,52,95,114,111,119,115,107,105,112,0)];
       let chinasamex = false;
       let sliderO: Array<any> = [520, 318];
      let reactC = sliderO.length <= 7125694;
      do {
         sliderO.push((3 & (chinasamex ? 3 : 5)));
         if (reactC) {
            break;
         }
      } while (reactC && (4 < (2 * sliderO.length)));
      while (3 < (2 & sliderO.length) && (sliderO.length & delegate_niD.length) < 2) {
         delegate_niD += `${2 - delegate_niD.length}`;
         break;
      }
          let showH = 1.0;
          let hoverL = 4.0;
          let plash9 = 3.0;
         chinasamex = 46.19 <= plash9;
         showH *= 2;
         hoverL += parseFloat(`${parseInt(`${showH}`) ^ 2}`);
         plash9 += parseFloat(`${parseInt(`${hoverL}`) - parseInt(`${showH}`)}`);
         chinasamex = delegate_niD.length >= sliderO.length;
      if (5 < (blackX.length | 5)) {
         chinasamex = 1 < sliderO.length;
      }
       let current1 = String.fromCharCode(97,116,97,99,101,110,116,101,114,95,120,95,57,56,0);
      for (let c = 0; c < 3; c++) {
          let temperaturen = String.fromCharCode(109,101,109,111,106,105,95,103,95,50,50,0);
         blackX = [2];
         temperaturen += `${temperaturen.length}`;
      }
      if (3 <= blackX.length && (3 - blackX.length) <= 4) {
         chinasamex = !chinasamex;
      }
         current1 += `${((chinasamex ? 2 : 2))}`;
          let zhubob = String.fromCharCode(100,121,110,108,111,97,100,95,121,95,52,48,0);
         chinasamex = blackX.length > 24;
         zhubob += `${zhubob.length + zhubob.length}`;
          let modelsD = 0.0;
          let bridgeU = 2;
         sliderO = [delegate_niD.length];
         modelsD -= parseFloat(`${2 & parseInt(`${modelsD}`)}`);
         bridgeU &= parseInt(`${modelsD}`) - bridgeU;
      while (chinasamex) {
         chinasamex = 99 == current1.length;
         break;
      }
      chatn += parseInt(`${drag4}`) % (Math.max(5, trashB.length));
   }
   let closeL = drag4 >= 7874330.0;
   do {
      drag4 /= Math.max(parseFloat(`${3}`), 4);
      if (closeL) {
         break;
      }
   } while (((drag4 * parseFloat(`${thailandj.size}`)) <= 2.92 || 2.92 <= (parseFloat(`${thailandj.size}`) * drag4)) && closeL);
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

       let teamO = 1.0;
       let selection4 = 4;
       let graphY = 4;
       let guideh: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,99,109,115,103,115,0),String.fromCharCode(107,95,53,49,95,112,104,114,97,115,101,0)], [String.fromCharCode(102,114,97,109,101,115,105,122,101,95,105,95,53,50,0),String.fromCharCode(114,101,113,117,101,115,116,101,114,95,107,95,57,0)]]);
       let memberships: Map<any, any> = new Map([[String.fromCharCode(99,114,111,112,112,105,110,103,95,98,95,56,52,0),String.fromCharCode(104,95,49,95,102,116,97,98,0)], [String.fromCharCode(115,116,101,112,95,118,95,49,48,0),String.fromCharCode(111,95,53,50,95,114,101,99,111,110,110,101,99,116,0)]]);
         guideh.set(`${guideh.size}`, memberships.size);
      downloadf += `${parseInt(`${nativeT}`)}`;
      teamO -= parseInt(`${teamO}`);
   for (let k = 0; k < 3; k++) {
      thailandj.set(downloadf, downloadf.length);
   }
   while (halfs < 5) {
      halfs += (downloadf == String.fromCharCode(119,0) ? downloadf.length : parseInt(`${drag4}`));
      break;
   }

      

      nativeT -= parseFloat(`${parseInt(`${xvodp}`)}`);
   if (3 == (downloadf.length % 4) || 2.73 == (nativeT - 4.26)) {
      downloadf = `${parseInt(`${nativeT}`) >> (Math.min(4, Math.abs(2)))}`;
   }
      chatn /= Math.max(5, thailandj.size >> (Math.min(2, Math.abs(parseInt(`${xvodp}`)))));
      yys_event_common.watchAnytimeVideoClicksAnalytics();
      
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
       let libreactnativejni0 = 0;
    let lessR: Array<any> = [String.fromCharCode(102,105,110,100,95,101,95,52,54,0), String.fromCharCode(114,95,57,53,95,100,101,114,105,118,101,0)];
    let stationst = String.fromCharCode(105,110,100,105,110,103,95,100,95,54,56,0);
    let shootT = String.fromCharCode(98,97,114,101,95,110,95,54,50,0);
    let servicec = String.fromCharCode(101,95,55,54,95,100,97,121,115,0);
    let filledJ = String.fromCharCode(110,111,110,101,95,53,95,49,51,0);
    let textlayoutmanagerL = String.fromCharCode(104,95,54,52,95,117,115,101,114,99,116,120,0);
    let profileJ: Map<any, any> = new Map([[String.fromCharCode(110,111,115,99,97,108,101,95,98,95,51,0),String.fromCharCode(108,95,57,51,95,99,111,118,97,114,105,97,110,99,101,0)], [String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,52,95,52,57,0),String.fromCharCode(117,116,105,108,95,48,95,53,51,0)], [String.fromCharCode(101,95,56,56,95,105,102,110,115,0),String.fromCharCode(97,95,56,55,95,108,115,104,105,102,116,0)]]);
    let proxyi: Array<any> = [String.fromCharCode(116,95,51,54,95,122,97,108,108,111,99,0), String.fromCharCode(115,95,56,53,95,98,101,104,105,110,100,0), String.fromCharCode(109,95,52,53,95,112,117,98,105,99,0)];
    let stars = String.fromCharCode(105,110,102,117,114,97,95,56,95,56,52,0);
    let x_imageg: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,117,110,100,101,114,108,105,110,101,0),440], [String.fromCharCode(115,95,54,49,95,105,109,112,111,114,116,101,100,0),440], [String.fromCharCode(99,111,110,102,105,114,109,101,100,95,49,95,52,56,0),577]]);
    let r_countO = String.fromCharCode(99,102,109,116,95,115,95,57,0);
    let anythinkh = true;
    let debugQ = String.fromCharCode(114,95,57,48,95,114,101,105,115,115,117,101,0);
    let networkx: Map<any, any> = new Map([[String.fromCharCode(100,120,110,100,99,95,115,95,53,53,0),true ], [String.fromCharCode(109,95,51,95,112,114,111,98,108,101,109,0),true ]]);
    let phonef: Array<any> = [684, 104];
   let placementK = filledJ == String.fromCharCode(50,116,106,121,100,95,113,0);
   do {
      filledJ = "2 - libreactnativejni0";
      if (placementK) {
         break;
      }
   } while (placementK && ((profileJ.size / 3) < 4 && 3 < (profileJ.size / (Math.max(10, filledJ.length)))));
      textlayoutmanagerL = `${servicec.length / 2}`;
   for (let x = 0; x < 1; x++) {
      r_countO = `${3 << (Math.min(3, servicec.length))}`;
   }
       let textp = 0;
       let becomee = 2;
      let philippinesz = 5290902 >= textp;
      do {
         textp %= Math.max(4, becomee << (Math.min(Math.abs(3), 2)));
         if (philippinesz) {
            break;
         }
      } while ((2 >= (textp | 4)) && philippinesz);
          let calendarU = 2.0;
          let t_playerS = false;
          let configS = 5;
         textp %= Math.max(2, becomee ^ textp);
         calendarU -= configS | parseInt(`${calendarU}`);
         t_playerS = 71 == configS || t_playerS;
      for (let m = 0; m < 1; m++) {
         textp %= Math.max(4, 1 * becomee);
      }
      let controlsi = 6836870 <= textp;
      do {
         textp |= 1 >> (Math.min(2, Math.abs(becomee)));
         if (controlsi) {
            break;
         }
      } while ((4 <= (textp % (Math.max(3, 8))) || (3 % (Math.max(7, becomee))) <= 2) && controlsi);
      let libglogC = becomee >= 6966550;
      do {
         becomee &= 3;
         if (libglogC) {
            break;
         }
      } while (libglogC && (becomee <= 1));
      let basketballD = becomee <= 8609280;
      do {
          let libfbjnic: Array<any> = [350, 261, 787];
         becomee &= libfbjnic.length / (Math.max(3, 4));
         if (basketballD) {
            break;
         }
      } while ((textp >= 2) && basketballD);
      filledJ = `${servicec.length}`;
   while (lessR.length <= x_imageg.size) {
      x_imageg = new Map([[shootT, (r_countO == String.fromCharCode(72,0) ? shootT.length : r_countO.length)]]);
      break;
   }
   let trashK = textlayoutmanagerL.length <= 8118711;
   do {
      textlayoutmanagerL += "1";
      if (trashK) {
         break;
      }
   } while ((textlayoutmanagerL.includes(r_countO)) && trashK);
      libreactnativejni0 ^= filledJ.length - servicec.length;
      shootT += `${textlayoutmanagerL.length}`;
   while (!filledJ.includes(servicec)) {
      servicec += `${x_imageg.size}`;
      break;
   }
   let temperatureo = proxyi.length <= 8012457;
   do {
       let toponZ = 3;
       let suggestion5 = String.fromCharCode(114,95,55,56,95,118,115,110,112,114,105,110,116,102,0);
       let kick2: Array<any> = [220, 357];
       let textinputy = String.fromCharCode(100,101,99,111,100,101,100,95,57,95,55,53,0);
       let ballk = 0.0;
      let viewer6 = String.fromCharCode(49,109,107,113,118,101,52,56,97,0) == textinputy;
      do {
         textinputy = `${1 * toponZ}`;
         if (viewer6) {
            break;
         }
      } while (viewer6 && ((textinputy.length % 3) >= 5 || 3 >= (3 >> (Math.min(4, textinputy.length)))));
       let register_eT = String.fromCharCode(105,95,57,52,95,112,117,98,101,120,112,0);
      if (register_eT == String.fromCharCode(69,0)) {
         suggestion5 = `${register_eT.length - 3}`;
      }
         kick2.push(1 << (Math.min(5, register_eT.length)));
          let libfbjniY = String.fromCharCode(113,95,49,48,95,108,105,102,101,99,121,99,108,101,0);
          let headerC = 0.0;
          let typingI = String.fromCharCode(100,111,99,108,105,115,116,115,95,122,95,52,55,0);
         textinputy += "1";
         libfbjniY = `${typingI.length | parseInt(`${headerC}`)}`;
         headerC -= parseFloat(`${parseInt(`${headerC}`) >> (Math.min(Math.abs(3), 5))}`);
         typingI += `${parseInt(`${headerC}`)}`;
      for (let p = 0; p < 2; p++) {
         register_eT = `${2 + textinputy.length}`;
      }
      for (let o = 0; o < 2; o++) {
          let updatesy: Array<any> = [643, 548];
          let connectionA = String.fromCharCode(100,95,56,51,95,112,97,115,115,116,104,114,111,117,103,104,0);
          let stylesG = String.fromCharCode(108,97,110,103,105,100,95,122,95,52,50,0);
          let gestureQ = String.fromCharCode(100,95,49,49,95,114,111,119,107,101,121,0);
          let delegate_ncI: Array<any> = [330, 758];
         textinputy = "1";
         updatesy = [updatesy.length];
         connectionA = `${stylesG.length + 1}`;
         stylesG += `${(String.fromCharCode(119,0) == stylesG ? updatesy.length : stylesG.length)}`;
         gestureQ = `${updatesy.length}`;
         delegate_ncI.push(3 - stylesG.length);
      }
          let moded = String.fromCharCode(116,95,50,95,116,114,105,101,115,0);
          let update_ixs = 4;
         ballk *= parseFloat(`${suggestion5.length / 2}`);
         moded += "2";
         update_ixs /= Math.max(2, (moded == String.fromCharCode(53,0) ? moded.length : update_ixs));
          let phonea = String.fromCharCode(97,117,103,109,101,110,116,95,106,95,57,54,0);
          let cricketi: Array<any> = [299, 928];
         toponZ *= (String.fromCharCode(50,0) == textinputy ? textinputy.length : cricketi.length);
         phonea = `${2 << (Math.min(3, phonea.length))}`;
         cricketi.push(phonea.length * 1);
         suggestion5 += `${register_eT.length << (Math.min(1, suggestion5.length))}`;
      let libffmpegkitc = 5152104.0 >= ballk;
      do {
         ballk -= parseFloat(`${suggestion5.length}`);
         if (libffmpegkitc) {
            break;
         }
      } while ((1 == (1 << (Math.min(4, textinputy.length)))) && libffmpegkitc);
      if (4 == (5 << (Math.min(3, kick2.length))) || (kick2.length & 5) == 4) {
         ballk -= parseFloat(`${textinputy.length}`);
      }
          let phonev = 2.0;
          let hiad2 = String.fromCharCode(114,95,51,57,95,117,100,112,108,105,116,101,0);
         register_eT += `${2 + register_eT.length}`;
         phonev -= parseFloat(`${3 - hiad2.length}`);
         hiad2 += "2";
          let statisticsf = String.fromCharCode(103,95,49,49,95,104,119,99,111,110,116,101,120,116,0);
          let white7: Map<any, any> = new Map([[String.fromCharCode(105,116,101,114,97,116,101,95,114,95,54,49,0),155], [String.fromCharCode(109,95,57,50,95,115,104,97,100,111,119,115,0),762], [String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,115,95,49,54,0),901]]);
         textinputy += `${kick2.length}`;
         statisticsf = `${(String.fromCharCode(95,0) == statisticsf ? white7.size : statisticsf.length)}`;
         white7.set(`${statisticsf}`, (String.fromCharCode(79,0) == statisticsf ? white7.size : statisticsf.length));
      if (4 > (toponZ - kick2.length)) {
         toponZ ^= textinputy.length;
      }
      proxyi.push(r_countO.length * lessR.length);
      if (temperatureo) {
         break;
      }
   } while (((proxyi.length * 1) >= 2) && temperatureo);
       let entryu = String.fromCharCode(100,101,115,116,114,111,121,105,110,103,95,121,95,57,48,0);
       let notificationn = String.fromCharCode(111,110,101,105,110,99,104,95,51,95,56,57,0);
       let descb: Map<any, any> = new Map([[String.fromCharCode(114,116,115,112,99,111,100,101,115,95,105,95,49,56,0),false ], [String.fromCharCode(105,95,55,56,95,105,110,105,116,105,97,108,105,122,101,114,0),false ], [String.fromCharCode(114,102,116,98,115,117,98,95,50,95,56,0),false ]]);
       let libfbjniYr = true;
       let downloader8 = true;
      for (let a = 0; a < 1; a++) {
         descb.set(`${notificationn}`, descb.size / 2);
      }
       let jnewarchdefaultsM = String.fromCharCode(97,116,111,109,105,99,115,95,99,95,49,50,0);
       let umengN = String.fromCharCode(103,114,97,110,117,108,97,114,95,119,95,52,52,0);
       let animations9 = false;
         notificationn = "1";
          let anytimeO: Map<any, any> = new Map([[String.fromCharCode(121,95,56,50,95,99,111,110,116,101,120,116,117,97,108,0),String.fromCharCode(101,95,53,48,95,118,99,97,99,100,97,116,97,0)], [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,48,95,56,51,0),String.fromCharCode(98,97,99,107,114,111,117,110,100,95,50,95,51,49,0)], [String.fromCharCode(114,95,49,51,95,108,111,99,107,109,103,114,0),String.fromCharCode(110,95,56,49,95,112,114,101,118,105,101,119,112,112,0)]]);
          let libreactperfloggerjniq = 1;
         downloader8 = !downloader8 && animations9;
         anytimeO = new Map([[`${anytimeO.size}`, libreactperfloggerjniq]]);
         libreactperfloggerjniq += anytimeO.size + 1;
      for (let d = 0; d < 3; d++) {
          let materialm = 2;
         libfbjniYr = !libfbjniYr;
         materialm *= materialm + materialm;
      }
         notificationn += `${((libfbjniYr ? 3 : 1))}`;
       let match1 = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,113,95,56,52,0);
       let analyticsM = String.fromCharCode(99,104,101,99,107,112,97,99,107,101,116,95,49,95,55,54,0);
      libreactnativejni0 |= libreactnativejni0 & 3;
      entryu += `${entryu.length}`;
   for (let u = 0; u < 2; u++) {
      x_imageg.set(stationst, (stationst == String.fromCharCode(71,0) ? lessR.length : stationst.length));
   }
   if ((proxyi.length % (Math.max(stars.length, 1))) >= 1 && (proxyi.length % (Math.max(stars.length, 7))) >= 1) {
      stars = `${stars.length & 2}`;
   }
   if (!Array.from(profileJ.values()).includes(lessR.length)) {
      profileJ.set(`${anythinkh}`, proxyi.length);
   }
      r_countO += "3";
      libreactnativejni0 += 1;
   for (let u = 0; u < 3; u++) {
      servicec += `${x_imageg.size - 2}`;
   }
       let settinge: Array<any> = [255, 944, 918];
         settinge = [3];
         settinge = [settinge.length % 2];
         settinge = [settinge.length];
      proxyi.push(stationst.length % (Math.max(1, 9)));
      servicec = `${debugQ.length}`;

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
       let libffmpegkitP = String.fromCharCode(103,95,51,53,95,119,100,108,102,99,110,0);
    let orientations = false;
    let runtimey = 2.0;
    let playercommonT: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,99,117,98,105,99,0),656], [String.fromCharCode(107,95,48,95,99,111,108,108,101,116,105,111,110,0),283]]);
    let coreI = 5;
    let usernameE = String.fromCharCode(115,95,57,57,95,99,108,111,115,101,115,111,99,107,101,116,0);
    let loadingh = 4;
    let friendsB: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,100,101,112,97,99,107,101,116,105,122,101,114,0),386], [String.fromCharCode(116,119,111,112,111,105,110,116,95,48,95,56,53,0),226]]);
    let popupH = 5.0;
    let uimanagern = String.fromCharCode(112,97,107,116,95,97,95,53,56,0);
    let libreactnativebloby: Map<any, any> = new Map([[String.fromCharCode(120,95,57,57,95,100,115,116,114,0),true ], [String.fromCharCode(100,95,57,95,112,114,101,99,101,100,101,110,99,101,0),false ]]);
    let episodeI: Array<any> = [String.fromCharCode(111,95,51,48,95,103,108,111,98,0), String.fromCharCode(111,110,116,114,111,108,95,54,95,57,48,0)];
    let moduleo = String.fromCharCode(120,95,50,50,95,117,116,109,111,115,116,0);
       let switch_vj = String.fromCharCode(102,116,118,98,108,97,110,107,95,97,95,53,50,0);
          let brightnessq = 1.0;
         switch_vj += `${parseInt(`${brightnessq}`)}`;
       let animationsI = String.fromCharCode(98,95,50,50,95,101,121,101,115,0);
         switch_vj = `${switch_vj.length ^ animationsI.length}`;
      loadingh &= loadingh * 1;
   let orientationr = playercommonT.size >= 5230061;
   do {
       let coreW = String.fromCharCode(122,95,50,50,95,115,116,114,105,107,101,0);
       let gmail1 = 5.0;
          let forward5 = String.fromCharCode(99,95,51,50,95,117,110,115,101,110,116,0);
          let libzeusM = 0;
          let libavdevicew = 1.0;
         coreW += `${coreW.length}`;
         forward5 += `${libzeusM}`;
         libzeusM *= parseInt(`${libavdevicew}`) % (Math.max(forward5.length, 5));
         libavdevicew /= Math.max(parseInt(`${libavdevicew}`) >> (Math.min(Math.abs(1), 5)), 5);
         gmail1 -= coreW.length;
          let nativeex6: Array<any> = [String.fromCharCode(108,115,98,102,117,108,108,95,117,95,51,55,0), String.fromCharCode(103,95,56,49,95,100,101,115,116,105,110,97,116,105,111,110,0)];
         gmail1 += coreW.length;
         nativeex6.push(nativeex6.length & 1);
      let sortE = String.fromCharCode(51,55,122,0) == coreW;
      do {
          let navigationW = String.fromCharCode(107,101,121,115,116,114,101,97,109,95,101,95,49,52,0);
          let cornerM = 5;
         coreW += `${3 ^ cornerM}`;
         navigationW += "3";
         cornerM |= navigationW.length + navigationW.length;
         if (sortE) {
            break;
         }
      } while (((coreW.length ^ 4) >= 3 || (coreW.length + 4) >= 3) && sortE);
         gmail1 += 3;
         coreW += `${parseInt(`${gmail1}`) / (Math.max(coreW.length, 5))}`;
      playercommonT = new Map([[uimanagern, 1 ^ uimanagern.length]]);
      if (orientationr) {
         break;
      }
   } while ((2.49 > (popupH + 1.90) && 3 > (playercommonT.size & 4)) && orientationr);

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   for (let b = 0; b < 3; b++) {
      libffmpegkitP += `${uimanagern.length | 1}`;
   }
   for (let i = 0; i < 1; i++) {
       let whiteZ = String.fromCharCode(99,104,101,99,107,105,110,95,114,95,53,49,0);
       let countdownS = String.fromCharCode(111,95,50,55,95,101,121,101,0);
         whiteZ = `${countdownS.length}`;
      while (4 >= whiteZ.length) {
          let searchbarx = 3.0;
          let singaporej: Map<any, any> = new Map([[String.fromCharCode(112,97,117,115,101,95,104,95,50,53,0),984], [String.fromCharCode(109,97,105,110,95,108,95,52,50,0),702]]);
          let gesturesn = String.fromCharCode(115,104,111,119,95,100,95,50,56,0);
         countdownS += `${(whiteZ == String.fromCharCode(57,0) ? whiteZ.length : parseInt(`${searchbarx}`))}`;
         searchbarx -= (parseFloat(`${gesturesn == String.fromCharCode(111,0) ? singaporej.size : gesturesn.length}`));
         singaporej = new Map([[`${singaporej.size}`, gesturesn.length & 2]]);
         break;
      }
      popupH *= parseFloat(`${1}`);
   }
        

       let umengj = 1.0;
         umengj += parseFloat(`${parseInt(`${umengj}`)}`);
         umengj += parseFloat(`${parseInt(`${umengj}`) / (Math.max(parseInt(`${umengj}`), 9))}`);
         umengj -= parseFloat(`${parseInt(`${umengj}`)}`);
      libffmpegkitP = "2";
   if (Array.from(playercommonT.keys()).includes(`${runtimey}`)) {
      runtimey *= loadingh;
   }
        

   for (let h = 0; h < 1; h++) {
      orientations = (uimanagern.length ^ playercommonT.size) > 82;
   }
   if (5.82 <= popupH) {
       let n_unlockx: Map<any, any> = new Map([[String.fromCharCode(118,95,55,49,95,114,108,109,0),true ], [String.fromCharCode(99,111,112,121,97,100,100,95,51,95,55,57,0),true ]]);
       let gesturen = String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,97,95,51,49,0);
       let nalyticsI = String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,57,95,54,49,0);
       let proxyZ = 4.0;
       let core3 = 3.0;
      for (let e = 0; e < 1; e++) {
         gesturen += "1";
      }
         n_unlockx = new Map([[`${n_unlockx.size}`, n_unlockx.size]]);
         gesturen += `${parseInt(`${proxyZ}`)}`;
          let over_ = String.fromCharCode(97,100,97,112,116,101,114,115,95,116,95,56,52,0);
         nalyticsI = `${gesturen.length}`;
         over_ = `${over_.length / 1}`;
         n_unlockx = new Map([[`${n_unlockx.size}`, 2]]);
         gesturen += "3";
         gesturen += `${1 | parseInt(`${core3}`)}`;
         core3 -= 2;
         gesturen = `${(String.fromCharCode(118,0) == gesturen ? nalyticsI.length : gesturen.length)}`;
          let libimagepipeliney = String.fromCharCode(116,95,57,53,95,97,108,116,101,114,110,97,116,105,118,101,115,0);
         core3 -= 2;
         libimagepipeliney = `${libimagepipeliney.length % 3}`;
      while (4 <= gesturen.length) {
         gesturen += `${parseInt(`${proxyZ}`)}`;
         break;
      }
         n_unlockx = new Map([[`${n_unlockx.size}`, n_unlockx.size + nalyticsI.length]]);
       let unreadr: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,115,95,106,95,52,0),String.fromCharCode(115,95,57,53,95,114,105,103,104,116,109,111,115,116,0)], [String.fromCharCode(121,95,53,51,95,107,101,121,112,97,116,104,115,0),String.fromCharCode(122,95,54,95,109,105,114,114,111,114,0)], [String.fromCharCode(119,95,57,50,95,98,97,99,107,105,110,103,0),String.fromCharCode(100,105,97,108,105,110,103,95,121,95,55,52,0)]]);
         proxyZ += parseFloat(`${parseInt(`${proxyZ}`)}`);
      if (4 <= (5 / (Math.max(6, unreadr.size))) || 4 <= (unreadr.size / 5)) {
         unreadr = new Map([[`${n_unlockx.size}`, 3]]);
      }
      popupH *= parseFloat(`${playercommonT.size}`);
   }
        

      usernameE = `${3 << (Math.min(4, usernameE.length))}`;
   if (friendsB.get(`${coreI}`) == null) {
       let modeA = 5.0;
       let indicatorK = String.fromCharCode(99,117,100,97,115,99,97,108,101,95,99,95,56,48,0);
       let renewf = String.fromCharCode(97,118,97,116,97,114,115,95,49,95,51,53,0);
       let incidentH = String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,102,95,56,48,0);
       let searchbarG = 4;
         incidentH += `${renewf.length}`;
          let upgradeL = 1;
         renewf += "1";
         upgradeL %= Math.max(upgradeL ^ 2, 3);
         incidentH = `${(indicatorK == String.fromCharCode(108,0) ? indicatorK.length : searchbarG)}`;
      let stringsA = 5491392.0 <= modeA;
      do {
         modeA -= parseInt(`${modeA}`);
         if (stringsA) {
            break;
         }
      } while (((4 << (Math.min(2, Math.abs(searchbarG)))) > 4 && (modeA - searchbarG) > 4.90) && stringsA);
      while (indicatorK == incidentH) {
         incidentH += `${searchbarG}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
         renewf = `${parseInt(`${modeA}`) / 2}`;
      }
      let mimoT = renewf == String.fromCharCode(51,114,118,104,49,116,114,0);
      do {
         renewf += `${incidentH.length << (Math.min(Math.abs(3), 5))}`;
         if (mimoT) {
            break;
         }
      } while (mimoT && (renewf.length >= incidentH.length));
      for (let z = 0; z < 3; z++) {
         incidentH += `${indicatorK.length % (Math.max(2, searchbarG))}`;
      }
       let stepS: Array<any> = [997, 518, 239];
       let benefitC: Array<any> = [673, 907];
      if ((3 >> (Math.min(1, stepS.length))) == 2 || 2 == (benefitC.length >> (Math.min(Math.abs(3), 1)))) {
         stepS.push(benefitC.length);
      }
         renewf += `${parseInt(`${modeA}`) & searchbarG}`;
      if (1.27 == (indicatorK.length / (Math.max(2, modeA))) || (indicatorK.length & 1) == 1) {
          let abidetectQ = String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,95,98,95,53,0);
         indicatorK += `${incidentH.length / (Math.max(4, abidetectQ.length))}`;
      }
          let lessS: Map<any, any> = new Map([[String.fromCharCode(102,95,50,50,95,112,114,101,118,105,101,119,101,100,0),391], [String.fromCharCode(101,120,112,97,110,100,95,100,95,51,52,0),647]]);
         stepS = [2];
         lessS.set(`${lessS.size}`, lessS.size);
         searchbarG %= Math.max(parseInt(`${modeA}`) + 2, 3);
      for (let l = 0; l < 2; l++) {
         benefitC.push((indicatorK == String.fromCharCode(48,0) ? indicatorK.length : renewf.length));
      }
      coreI /= Math.max(5, incidentH.length << (Math.min(2, Math.abs(friendsB.size))));
   }

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

   let switch_tye = playercommonT.size >= 7296501;
   do {
      playercommonT = new Map([[uimanagern, uimanagern.length]]);
      if (switch_tye) {
         break;
      }
   } while (switch_tye && (!libffmpegkitP.endsWith(`${playercommonT.size}`)));
      runtimey -= friendsB.size;

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   while (4.95 == (runtimey / (Math.max(playercommonT.size, 10))) || 5 == (4 | playercommonT.size)) {
      playercommonT = new Map([[`${runtimey}`, parseInt(`${runtimey}`)]]);
      break;
   }
       let fieldm = 3.0;
       let buildC: Array<any> = [1000, 506, 608];
       let bufferh = String.fromCharCode(98,97,99,107,101,110,100,95,109,95,49,57,0);
       let actiona = String.fromCharCode(108,95,54,95,122,111,111,109,101,100,0);
      if (4.64 > (parseFloat(`${buildC.length}`) + fieldm) || (fieldm + 4.64) > 4.50) {
         fieldm -= parseFloat(`${parseInt(`${fieldm}`)}`);
      }
      libreactnativebloby = new Map([[`${playercommonT.size}`, 3 * libffmpegkitP.length]]);


        if (fileExist) {

      usernameE = `${libffmpegkitP.length << (Math.min(2, Math.abs(libreactnativebloby.size)))}`;
   while (3 <= (parseInt(`${runtimey}`) - episodeI.length) || (episodeI.length - runtimey) <= 5.69) {
      runtimey -= playercommonT.size / (Math.max(episodeI.length, 9));
      break;
   }
          const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

   if (5 < (loadingh & libreactnativebloby.size)) {
       let inactivec: Map<any, any> = new Map([[String.fromCharCode(115,101,109,97,112,104,111,114,101,95,103,95,51,52,0),777], [String.fromCharCode(100,95,55,54,0),143]]);
       let mappingz: Array<any> = [866, 716];
       let crownT = 4.0;
      for (let k = 0; k < 3; k++) {
          let back9 = String.fromCharCode(102,95,53,53,95,102,114,111,110,116,115,105,100,101,0);
         crownT += back9.length << (Math.min(Math.abs(1), 4));
      }
      for (let f = 0; f < 1; f++) {
          let robotoi = String.fromCharCode(103,95,57,55,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0);
          let mbjscommonS: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,95,117,115,101,114,115,0),497], [String.fromCharCode(113,95,56,51,95,115,117,101,108,111,0),742]]);
          let banner2 = false;
         inactivec = new Map([[`${mbjscommonS.size}`, ((banner2 ? 4 : 3) % 3)]]);
         robotoi = `${robotoi.length - robotoi.length}`;
         mbjscommonS.set(robotoi, robotoi.length);
      }
      for (let y = 0; y < 1; y++) {
          let controlu: Array<any> = [String.fromCharCode(116,97,107,101,110,95,99,95,57,54,0), String.fromCharCode(98,108,111,99,107,120,95,100,95,57,52,0), String.fromCharCode(98,95,55,95,99,111,99,111,97,0)];
          let trashF = String.fromCharCode(118,95,54,95,99,97,112,105,116,97,108,105,122,105,110,103,0);
          let rewardvideom: Array<any> = [774, 715, 384];
          let huawei_ = String.fromCharCode(112,101,101,107,95,52,95,52,51,0);
          let notificationg = String.fromCharCode(99,95,49,56,95,100,105,115,99,111,118,101,114,121,0);
         mappingz.push(parseInt(`${crownT}`));
         controlu = [notificationg.length];
         trashF = `${notificationg.length}`;
         rewardvideom = [controlu.length % (Math.max(notificationg.length, 4))];
         huawei_ = `${(notificationg == String.fromCharCode(99,0) ? rewardvideom.length : notificationg.length)}`;
      }
      if (inactivec.get(`${crownT}`) == null) {
         inactivec.set(`${crownT}`, 3);
      }
         mappingz = [3 + inactivec.size];
       let popupo: Array<any> = [182, 129, 752];
       let nativen = 1.0;
      while (2 == mappingz.length) {
         inactivec.set(`${nativen}`, parseInt(`${nativen}`) & 2);
         break;
      }
         popupo = [1 >> (Math.min(Math.abs(parseInt(`${nativen}`)), 1))];
      loadingh /= Math.max(libreactnativebloby.size / 2, 4);
   }
      loadingh += 1 + playercommonT.size;
          

      friendsB.set(`${orientations}`, 2);
      uimanagern += `${uimanagern.length}`;
          if (!fileIsEmpty) {

       let volume7 = String.fromCharCode(114,95,57,48,95,115,97,102,101,116,121,0);
       let analytice = String.fromCharCode(104,95,51,56,95,99,111,100,101,98,108,111,99,107,115,0);
         analytice += `${analytice.length / (Math.max(8, volume7.length))}`;
         volume7 = `${(analytice == String.fromCharCode(71,0) ? volume7.length : analytice.length)}`;
          let placeholderz = 2.0;
          let libfollyH = String.fromCharCode(108,95,50,54,95,115,119,105,102,116,99,0);
          let resendT = String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,111,95,57,48,0);
         volume7 += "3";
         placeholderz /= Math.max(2 / (Math.max(8, libfollyH.length)), 5);
         libfollyH = `${libfollyH.length * 3}`;
         resendT += `${parseInt(`${placeholderz}`)}`;
      let libjsiL = String.fromCharCode(103,49,49,56,103,116,121,48,0) == volume7;
      do {
         volume7 = `${analytice.length - 3}`;
         if (libjsiL) {
            break;
         }
      } while ((analytice != String.fromCharCode(102,0)) && libjsiL);
      let textinputD = String.fromCharCode(56,121,116,101,111,119,113,54,0) == analytice;
      do {
         analytice += "2";
         if (textinputD) {
            break;
         }
      } while ((volume7 == analytice) && textinputD);
          let roomq: Array<any> = [819, 849];
          let gdtadvn: Map<any, any> = new Map([[String.fromCharCode(117,95,50,53,95,98,97,99,107,119,97,114,100,115,0),406], [String.fromCharCode(102,117,110,110,121,95,54,95,49,52,0),820], [String.fromCharCode(121,95,52,52,95,97,100,100,114,105,110,102,111,0),224]]);
         analytice += `${gdtadvn.size}`;
         roomq = [3 ^ roomq.length];
         gdtadvn.set(`${roomq.length}`, roomq.length);
      usernameE = `${((orientations ? 4 : 4))}`;
   let assistp = runtimey <= 9715430.0;
   do {
       let ksadJ = String.fromCharCode(97,95,57,50,95,99,101,110,116,101,114,105,110,103,0);
      while (ksadJ.length > ksadJ.length) {
         ksadJ = `${ksadJ.length % (Math.max(3, 4))}`;
         break;
      }
         ksadJ += "1";
      if (ksadJ.includes(`${ksadJ.length}`)) {
         ksadJ = `${(ksadJ == String.fromCharCode(79,0) ? ksadJ.length : ksadJ.length)}`;
      }
      runtimey += loadingh;
      if (assistp) {
         break;
      }
   } while ((Array.from(playercommonT.keys()).includes(`${runtimey}`)) && assistp);
            setMiniVodUrl(`${fileLocation}`);
          } else {

   for (let d = 0; d < 2; d++) {
       let loading7 = String.fromCharCode(99,104,97,110,103,101,95,52,95,49,51,0);
       let largeQ = String.fromCharCode(114,101,115,111,117,114,99,101,115,95,105,95,53,0);
      if (largeQ == String.fromCharCode(101,0) && loading7 == String.fromCharCode(116,0)) {
         largeQ = `${largeQ.length}`;
      }
      for (let z = 0; z < 3; z++) {
          let downk = 3.0;
         largeQ += "1";
         downk *= parseInt(`${downk}`);
      }
         loading7 = `${largeQ.length >> (Math.min(loading7.length, 1))}`;
       let matcha = String.fromCharCode(99,95,49,54,0);
      let launchn = String.fromCharCode(99,97,57,98,108,111,121,122,0) == loading7;
      do {
         loading7 += "2";
         if (launchn) {
            break;
         }
      } while ((!matcha.endsWith(`${loading7.length}`)) && launchn);
      if (1 > matcha.length) {
         loading7 = `${2 << (Math.min(1, loading7.length))}`;
      }
      popupH -= parseFloat(`${loadingh << (Math.min(uimanagern.length, 1))}`);
   }
       let mintegral9: Array<any> = [720, 441];
       let chinaa = false;
          let scoreD = String.fromCharCode(105,95,55,52,95,103,101,116,109,97,120,114,115,115,0);
          let singleO = false;
          let malaysia1 = 3.0;
         mintegral9.push((parseInt(`${malaysia1}`) | (chinaa ? 4 : 5)));
         scoreD = `${((singleO ? 3 : 3) - 1)}`;
         singleO = ((scoreD.length & (singleO ? 3 : scoreD.length)) <= 3);
         malaysia1 /= Math.max((parseFloat(`${(singleO ? 5 : 3) / (Math.max(scoreD.length, 3))}`)), 3);
          let a_centera = String.fromCharCode(115,104,105,102,116,115,95,115,95,56,50,0);
         chinaa = 19 == a_centera.length;
      let buffer5 = chinaa ? !chinaa : chinaa;
      do {
         chinaa = chinaa && mintegral9.length <= 40;
         if (buffer5) {
            break;
         }
      } while (((mintegral9.length & 1) == 2) && buffer5);
      while (5 < (mintegral9.length / 2)) {
          let otheri = 4.0;
          let handlerM: Map<any, any> = new Map([[String.fromCharCode(114,95,56,55,95,121,97,108,101,0),String.fromCharCode(116,102,117,101,108,95,122,95,51,56,0)], [String.fromCharCode(117,95,53,54,95,98,97,99,107,119,97,114,100,0),String.fromCharCode(97,95,54,54,95,101,118,98,117,102,102,101,114,0)], [String.fromCharCode(105,110,105,116,97,108,95,108,95,50,49,0),String.fromCharCode(115,117,98,116,97,115,107,95,56,95,57,49,0)]]);
         chinaa = !chinaa;
         otheri -= parseFloat(`${parseInt(`${otheri}`) >> (Math.min(Math.abs(handlerM.size), 3))}`);
         handlerM.set(`${otheri}`, 3 | handlerM.size);
         break;
      }
         chinaa = (45 < ((chinaa ? 45 : mintegral9.length) >> (Math.min(mintegral9.length, 4))));
         mintegral9.push(((chinaa ? 4 : 5) / 3));
      libffmpegkitP += "2";
            

      playercommonT.set(libffmpegkitP, ((orientations ? 2 : 5) + libffmpegkitP.length));
       let speco = false;
       let editP = true;
       let resultO = String.fromCharCode(121,95,57,49,95,100,101,108,105,118,101,114,121,0);
          let mbbannert = false;
          let hiadQ: Array<any> = [382, 409];
         editP = !editP;
         mbbannert = ((hiadQ.length - (!mbbannert ? hiadQ.length : 85)) > 85);
         resultO = `${((editP ? 4 : 5))}`;
          let libavcodecR = String.fromCharCode(117,105,110,116,108,101,95,120,95,54,57,0);
          let minimizeH = 3.0;
          let mapbuffera = 4.0;
         editP = mapbuffera > 40.43;
         libavcodecR = `${libavcodecR.length ^ parseInt(`${minimizeH}`)}`;
         minimizeH -= libavcodecR.length + 2;
         mapbuffera += parseInt(`${minimizeH}`);
      while (!speco || editP) {
         speco = resultO.length < 8;
         break;
      }
          let mbbannerL: Map<any, any> = new Map([[String.fromCharCode(111,110,101,115,99,97,108,101,95,51,95,53,53,0),215], [String.fromCharCode(113,95,48,95,114,97,116,101,115,0),478], [String.fromCharCode(103,95,54,50,95,110,101,119,114,111,119,0),795]]);
         editP = !speco;
         mbbannerL = new Map([[`${mbbannerL.size}`, mbbannerL.size << (Math.min(Math.abs(3), 5))]]);
         resultO = `${((editP ? 1 : 2) & (speco ? 3 : 2))}`;
      let z_playerp = 7083642 >= resultO.length;
      do {
         resultO += `${((speco ? 1 : 2) ^ (editP ? 2 : 3))}`;
         if (z_playerp) {
            break;
         }
      } while (z_playerp && (!resultO.includes(`${editP}`)));
       let values4 = 0.0;
         values4 *= (resultO == String.fromCharCode(85,0) ? parseInt(`${values4}`) : resultO.length);
      usernameE += "1";
            setMiniVodUrl(currentVod.mini_video_origin_video_url)
          }
        } else {

   if ((2 * episodeI.length) < 2 && (episodeI.length * libreactnativebloby.size) < 2) {
      libreactnativebloby = new Map([[`${playercommonT.size}`, parseInt(`${runtimey}`)]]);
   }
   while (4 <= (playercommonT.size & episodeI.length) || (4 & playercommonT.size) <= 3) {
      episodeI.push(parseInt(`${popupH}`));
      break;
   }
          

   let roundI = coreI <= 6363850;
   do {
      coreI ^= ((orientations ? 3 : 5));
      if (roundI) {
         break;
      }
   } while (roundI && (uimanagern.endsWith(`${coreI}`)));
   if (5 < (loadingh % (Math.max(2, 4))) && 5 < (friendsB.size % (Math.max(2, 9)))) {
      loadingh /= Math.max((usernameE == String.fromCharCode(99,0) ? coreI : usernameE.length), 4);
   }
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
       let scheduleK = 0;
    let launcherq: Array<any> = [290, 962];
    let detailf = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,101,95,55,0);
    let s_center2: Map<any, any> = new Map([[String.fromCharCode(121,95,55,57,95,100,118,97,117,100,105,111,0),String.fromCharCode(118,95,49,55,95,97,118,100,101,118,105,99,101,114,101,115,0)], [String.fromCharCode(114,95,50,53,95,114,101,115,111,108,118,105,110,103,0),String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,51,95,56,57,0)]]);
    let pausex = 1.0;
    let lessc = String.fromCharCode(112,111,115,101,115,95,48,95,53,52,0);
    let hongkong2 = String.fromCharCode(119,95,51,55,95,108,116,97,98,108,101,0);
    let file9 = 5.0;
    let commonZ: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,56,95,56,48,0),true ], [String.fromCharCode(115,95,50,95,98,112,117,116,115,0),true ], [String.fromCharCode(97,114,103,98,105,95,115,95,53,56,0),true ]]);
    let templateprocessorc = String.fromCharCode(119,95,49,54,0);
    let crossj = 3.0;
    let pangle6: Map<any, any> = new Map([[String.fromCharCode(114,95,49,53,95,112,114,105,110,116,118,97,108,0),String.fromCharCode(115,109,105,120,95,119,95,50,53,0)], [String.fromCharCode(120,95,51,54,95,100,121,108,105,98,115,0),String.fromCharCode(100,95,53,57,95,109,112,101,103,118,105,100,101,111,100,115,112,0)], [String.fromCharCode(119,95,52,49,95,101,118,101,114,121,119,104,101,114,101,0),String.fromCharCode(112,114,111,103,114,97,109,115,95,48,95,49,56,0)]]);
   let countryI = String.fromCharCode(52,120,122,101,51,0) == hongkong2;
   do {
      hongkong2 = "3";
      if (countryI) {
         break;
      }
   } while (countryI && (3 >= hongkong2.length));
   if ((scheduleK / (Math.max(5, launcherq.length))) == 3) {
       let accepted8 = 1.0;
       let gesturesM = 0;
       let libavcodec7: Map<any, any> = new Map([[String.fromCharCode(104,95,56,54,95,112,114,101,118,105,111,117,115,108,121,0),String.fromCharCode(105,100,97,115,115,101,116,115,95,106,95,49,0)], [String.fromCharCode(112,114,111,112,95,48,95,50,49,0),String.fromCharCode(109,95,56,49,95,99,97,114,116,0)], [String.fromCharCode(97,95,49,51,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0),String.fromCharCode(115,105,108,101,110,116,108,121,95,55,95,50,49,0)]]);
       let sharee = String.fromCharCode(106,95,56,51,95,101,110,116,114,111,112,121,109,111,100,101,0);
       let homeC: Array<any> = [942, 733];
      for (let r = 0; r < 2; r++) {
          let vignettez = 3.0;
          let theme_ = 3;
          let nextJ: Map<any, any> = new Map([[String.fromCharCode(119,95,56,53,95,101,108,108,105,112,116,105,99,0),String.fromCharCode(115,95,57,57,95,114,101,99,105,112,114,111,99,97,108,0)], [String.fromCharCode(112,108,117,103,103,101,100,95,104,95,57,49,0),String.fromCharCode(97,112,112,118,101,121,111,114,95,97,95,50,0)]]);
          let entryJ = String.fromCharCode(112,95,53,54,95,119,101,108,115,0);
          let cornerz = 2;
         homeC.push((String.fromCharCode(113,0) == sharee ? sharee.length : gesturesM));
         vignettez -= cornerz;
         theme_ >>= Math.min(Math.abs(entryJ.length << (Math.min(1, Math.abs(nextJ.size)))), 5);
         nextJ.set(`${vignettez}`, 3 << (Math.min(Math.abs(theme_), 2)));
         entryJ = `${entryJ.length}`;
         cornerz %= Math.max(parseInt(`${vignettez}`), 5);
      }
      for (let l = 0; l < 2; l++) {
         accepted8 /= Math.max(4, parseFloat(`${homeC.length / (Math.max(2, 3))}`));
      }
      let libreactperfloggerjniq = 8017769 >= libavcodec7.size;
      do {
         libavcodec7 = new Map([[`${gesturesM}`, 2 << (Math.min(Math.abs(gesturesM), 2))]]);
         if (libreactperfloggerjniq) {
            break;
         }
      } while (libreactperfloggerjniq && ((1 * sharee.length) >= 3));
      let settingsX = sharee.length <= 7709981;
      do {
          let actionsi = String.fromCharCode(105,110,115,101,114,116,105,111,110,95,104,95,56,51,0);
          let handlerc = 3.0;
          let h_imageI = String.fromCharCode(109,111,116,105,111,110,95,48,95,56,50,0);
          let temperaturer: Map<any, any> = new Map([[String.fromCharCode(115,101,99,115,95,105,95,53,54,0),942], [String.fromCharCode(121,95,53,55,95,114,105,110,103,98,97,99,107,0),893], [String.fromCharCode(112,111,114,116,97,105,116,95,50,95,54,55,0),536]]);
         sharee += `${3 | parseInt(`${accepted8}`)}`;
         actionsi = `${actionsi.length | parseInt(`${handlerc}`)}`;
         handlerc -= temperaturer.size | 3;
         h_imageI += `${parseInt(`${handlerc}`) | actionsi.length}`;
         temperaturer.set(actionsi, actionsi.length);
         if (settingsX) {
            break;
         }
      } while ((sharee.endsWith(`${accepted8}`)) && settingsX);
          let shootz: Map<any, any> = new Map([[String.fromCharCode(104,119,102,114,97,109,101,95,119,95,55,55,0),904], [String.fromCharCode(99,97,109,112,97,105,103,110,95,117,95,48,0),711]]);
          let privilegeB = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,95,103,95,57,51,0);
         sharee += `${gesturesM >> (Math.min(Math.abs(libavcodec7.size), 3))}`;
         shootz.set(`${privilegeB}`, privilegeB.length / 3);
          let libavdeviceU = false;
          let verticalM: Array<any> = [977, 650, 313];
          let editF = String.fromCharCode(108,95,55,52,95,99,111,118,101,114,97,103,101,0);
         homeC.push((sharee == String.fromCharCode(79,0) ? verticalM.length : sharee.length));
         libavdeviceU = (((!libavdeviceU ? 81 : editF.length) % (Math.max(editF.length, 9))) > 81);
         verticalM = [((libavdeviceU ? 1 : 3))];
         homeC = [gesturesM % (Math.max(6, parseInt(`${accepted8}`)))];
      let libfbjniP = sharee.length >= 8465423;
      do {
         sharee = `${libavcodec7.size >> (Math.min(sharee.length, 1))}`;
         if (libfbjniP) {
            break;
         }
      } while (((4 ^ sharee.length) == 3) && libfbjniP);
         gesturesM %= Math.max(1, 2 * parseInt(`${accepted8}`));
       let lineG: Map<any, any> = new Map([[String.fromCharCode(97,95,50,48,95,101,114,115,105,111,110,0),true ], [String.fromCharCode(103,95,49,48,95,102,102,116,103,0),false ], [String.fromCharCode(116,97,103,99,111,109,112,97,114,101,95,115,95,57,48,0),true ]]);
       let turni: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,95,109,101,109,99,112,121,0),true ], [String.fromCharCode(97,99,99,114,117,101,95,113,95,51,57,0),false ], [String.fromCharCode(119,95,54,54,95,99,111,110,116,114,111,108,101,114,115,0),true ]]);
      let listg = libavcodec7.size >= 7552878;
      do {
         libavcodec7.set(`${gesturesM}`, homeC.length + gesturesM);
         if (listg) {
            break;
         }
      } while (listg && (Array.from(libavcodec7.values()).includes(accepted8)));
      scheduleK >>= Math.min(5, Math.abs(hongkong2.length >> (Math.min(4, Math.abs(parseInt(`${accepted8}`))))));
   }
      detailf = `${s_center2.size}`;
      file9 /= Math.max(1, 3);
   while (lessc.length < 1) {
      lessc += `${parseInt(`${file9}`)}`;
      break;
   }
      lessc = `${(String.fromCharCode(87,0) == lessc ? scheduleK : lessc.length)}`;
      launcherq.push((String.fromCharCode(115,0) == lessc ? lessc.length : parseInt(`${file9}`)));
   let sportq = 7376606 >= lessc.length;
   do {
       let sendN = 0;
         sendN /= Math.max(sendN + sendN, 2);
      for (let u = 0; u < 2; u++) {
         sendN ^= sendN * sendN;
      }
         sendN += 3 << (Math.min(1, Math.abs(sendN)));
      lessc = `${2 * sendN}`;
      if (sportq) {
         break;
      }
   } while (sportq && (launcherq.length < 1));
      scheduleK *= 3 * s_center2.size;
   let fadfdeebbbfdabbbabdadfaaddaak = 7715581 >= detailf.length;
   do {
      detailf = `${2 + hongkong2.length}`;
      if (fadfdeebbbfdabbbabdadfaaddaak) {
         break;
      }
   } while (((2.95 + file9) == 5.7 || (parseInt(`${file9}`) + detailf.length) == 1) && fadfdeebbbfdabbbabdadfaaddaak);
      commonZ = new Map([[`${file9}`, parseInt(`${file9}`)]]);
      s_center2 = new Map([[`${launcherq.length}`, launcherq.length]]);
   let debuga = lessc == String.fromCharCode(97,117,121,57,57,95,120,119,0);
   do {
      lessc = `${scheduleK}`;
      if (debuga) {
         break;
      }
   } while ((!lessc.includes(`${s_center2.size}`)) && debuga);

    setVideoReadyIos(true)

      detailf += `${parseInt(`${file9}`) ^ 3}`;
   if (hongkong2 == String.fromCharCode(55,0) || 2 < templateprocessorc.length) {
      templateprocessorc = `${parseInt(`${pausex}`)}`;
   }
   while ((pausex - file9) == 3.9) {
      file9 *= s_center2.size;
      break;
   }
   while ((4 * s_center2.size) > 4) {
      s_center2 = new Map([[`${s_center2.size}`, commonZ.size]]);
      break;
   }
      launcherq.push(launcherq.length);
   let emptyO = scheduleK >= 8198655;
   do {
      scheduleK |= 2;
      if (emptyO) {
         break;
      }
   } while (emptyO && (4 >= (scheduleK - 4) || 4 >= (scheduleK - lessc.length)));
   let runtimeA = 5575070 >= templateprocessorc.length;
   do {
      templateprocessorc += `${launcherq.length}`;
      if (runtimeA) {
         break;
      }
   } while ((1 > (commonZ.size + 4) && 4 > (4 + commonZ.size)) && runtimeA);
      commonZ.set(`${pausex}`, 3);
   let viewer0 = commonZ.size <= 9389794;
   do {
      commonZ = new Map([[templateprocessorc, templateprocessorc.length - parseInt(`${file9}`)]]);
      if (viewer0) {
         break;
      }
   } while (viewer0 && (templateprocessorc.startsWith(`${commonZ.size}`)));
   if (4 >= (s_center2.size % 5)) {
      s_center2.set(detailf, templateprocessorc.length >> (Math.min(Math.abs(1), 5)));
   }
   for (let b = 0; b < 3; b++) {
      lessc += `${s_center2.size * parseInt(`${pausex}`)}`;
   }
      pausex -= parseFloat(`${s_center2.size}`);
      commonZ.set(`${scheduleK}`, launcherq.length);
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
