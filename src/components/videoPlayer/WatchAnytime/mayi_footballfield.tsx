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
import Video, { OnProgressData, mayi_FootballtrophyGreytick } from 'react-native-video';
import PlayIcon from '@static/images/libreanimatedEwardedDropdown.svg';
import PauseIcon from '@static/images/sportVideojsTramini.svg';
import PlayBoDanIcon from '@static/images/animationsFastforwardSubtext.svg';
import PlayZhengPianIcon from '@static/images/kickBase.svg';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import HejiIcon from '@static/images/libswresampleSuggestion.svg';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/mayi_redirect';
import mayi_push from '../../../../Umeng/mayi_push';
import { showAdultModeVip } from '@redux/actions/mayi_iconorientation_chatroombackground';
import { playVod, viewPlaylistDetails } from '@redux/actions/mayi_goallogo';
import { screenModel } from '@type/mayi_libfolly_inouttargetred';
import { ADULT_MODE_PREVIEW_DURATION, DOWNLOAD_WATCH_ANYTIME } from '@utility/mayi_middleware_apps';
import FastImage from '../../common/mayi_slider';
import RedirectButton from './mayi_imagemanager_product_button';
import DescriptionBar from './mayi_weather_icondefaultthumbnail';
import HejiButton from './mayi_ewarded_button';
import { addIdToCache } from '../../../utils/mayi_context_statsnomoredata';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import { mayi_Gift } from '@models/mayi_libjsinspector';

interface mayi_GoogleViews {
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

const videoBufferGif = require('@static/images/sharedImageReactnativeratings.gif')

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
}: mayi_GoogleViews) {
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
  const videoRef = useRef<mayi_FootballtrophyGreytick>(null);
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

  const userState = useSelector<mayi_Baseline>('userReducer');

  const isVip = mayi_Gift.isVip(userState.user);
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
       let becomeo: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,105,102,121,0),false ], [String.fromCharCode(112,114,101,118,105,111,117,115,0),true ], [String.fromCharCode(108,105,98,118,111,114,98,105,115,0),false ]]);
    let modulesk = 0.0;
    let saveQ: Array<any> = [275, 679];
    let iconwatchp = String.fromCharCode(99,97,118,115,100,115,112,0);
    let statsq = true;
    let related7 = true;
    let executor4 = false;
    let arrowupZ = 5.0;
    let indexS = String.fromCharCode(114,102,116,102,115,117,98,0);
   while ((modulesk / 5.22) >= 3.53 && 3.90 >= (modulesk / 5.22)) {
      modulesk -= parseFloat(`${1}`);
      break;
   }
      modulesk /= Math.max(parseFloat(`${becomeo.size / 2}`), 5);
       let modity6 = 1.0;
       let carouselc = false;
       let rewardj = String.fromCharCode(113,115,118,101,110,99,0);
      if ((modity6 / 5.64) < 5.20) {
         carouselc = !carouselc;
      }
          let transfern: Map<any, any> = new Map([[String.fromCharCode(117,115,101,115,0),124], [String.fromCharCode(114,111,117,116,105,110,115,0),369], [String.fromCharCode(103,97,109,117,116,115,0),55]]);
          let buttonJ = false;
          let iconbackwhited = 3.0;
         rewardj += "2";
         transfern = new Map([[`${transfern.size}`, transfern.size * 2]]);
         buttonJ = (60 < ((!buttonJ ? transfern.size : 92) / (Math.max(transfern.size, 10))));
         iconbackwhited *= (parseFloat(`${(buttonJ ? 3 : 4) << (Math.min(Math.abs(1), 3))}`));
      if ((3.7 - modity6) >= 4.66) {
          let typesK = String.fromCharCode(112,97,99,107,105,110,103,0);
         modity6 += parseFloat(`${3}`);
         typesK = `${(typesK == String.fromCharCode(90,0) ? typesK.length : typesK.length)}`;
      }
      let home9 = carouselc ? !carouselc : carouselc;
      do {
          let securityi = String.fromCharCode(100,101,99,108,97,114,101,100,0);
          let mbbid4: Map<any, any> = new Map([[String.fromCharCode(116,119,111,108,97,109,101,0),false ], [String.fromCharCode(98,114,97,99,107,101,116,0),true ]]);
         carouselc = (rewardj.length / (Math.max(securityi.length, 9))) <= 44;
         securityi = `${2 - mbbid4.size}`;
         mbbid4.set(`${mbbid4.size}`, mbbid4.size);
         if (home9) {
            break;
         }
      } while (home9 && (carouselc));
         carouselc = modity6 > 55.75;
      let kuaishouy = carouselc ? !carouselc : carouselc;
      do {
         carouselc = rewardj.length > 70;
         if (kuaishouy) {
            break;
         }
      } while ((carouselc) && kuaishouy);
      while (!carouselc) {
         rewardj = `${(rewardj == String.fromCharCode(89,0) ? parseInt(`${modity6}`) : rewardj.length)}`;
         break;
      }
         carouselc = 94.27 > modity6;
         rewardj += `${1 * rewardj.length}`;
      statsq = statsq && iconwatchp.length < 60;
   let showW = saveQ.length <= 8697071;
   do {
       let macau2 = String.fromCharCode(112,103,115,122,0);
       let reactX = String.fromCharCode(101,114,97,115,117,114,101,0);
      if (macau2.length >= reactX.length) {
         macau2 += "2";
      }
         macau2 = `${macau2.length}`;
      while (reactX.length >= macau2.length) {
          let groupC: Map<any, any> = new Map([[String.fromCharCode(112,114,111,120,121,0),737], [String.fromCharCode(114,117,110,110,105,110,103,0),691]]);
          let closeF = String.fromCharCode(100,101,99,114,101,102,0);
         reactX = `${(closeF == String.fromCharCode(50,0) ? groupC.size : closeF.length)}`;
         break;
      }
      if (reactX == String.fromCharCode(49,0) || 1 >= macau2.length) {
          let homeloadingi = String.fromCharCode(98,97,100,114,101,113,0);
         macau2 += "3";
         homeloadingi += "2";
      }
      let uimanagerS = 6468045 >= macau2.length;
      do {
         macau2 = `${reactX.length}`;
         if (uimanagerS) {
            break;
         }
      } while (uimanagerS && (macau2.includes(reactX)));
      while (reactX.length >= 1) {
          let libfolly0 = 2.0;
          let sourceV = String.fromCharCode(99,104,111,111,115,105,110,103,0);
          let basketballicon9 = String.fromCharCode(112,114,101,112,0);
          let logouseri = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,0);
         macau2 += `${sourceV.length - 3}`;
         libfolly0 /= Math.max(parseFloat(`${parseInt(`${libfolly0}`)}`), 5);
         sourceV = `${logouseri.length}`;
         basketballicon9 = "1";
         logouseri = `${(basketballicon9 == String.fromCharCode(66,0) ? logouseri.length : basketballicon9.length)}`;
         break;
      }
      saveQ = [parseInt(`${modulesk}`) / (Math.max(2, 4))];
      if (showW) {
         break;
      }
   } while ((2 <= (saveQ.length / 5) && (saveQ.length / (Math.max(5, 1))) <= 3) && showW);
      related7 = related7 && 19.33 <= modulesk;
   let plusk = statsq ? !statsq : statsq;
   do {
       let bridgee: Map<any, any> = new Map([[String.fromCharCode(112,117,98,107,101,121,104,97,115,104,0),true ], [String.fromCharCode(100,111,118,101,0),false ], [String.fromCharCode(105,110,100,105,99,97,116,101,100,0),false ]]);
       let right4 = String.fromCharCode(116,111,117,112,112,101,114,0);
         bridgee.set(`${right4}`, 1);
      while (right4.length >= bridgee.size) {
         right4 += `${(right4 == String.fromCharCode(111,0) ? bridgee.size : right4.length)}`;
         break;
      }
         bridgee.set(right4, right4.length);
         bridgee.set(`${right4}`, right4.length | bridgee.size);
      let register__p3 = String.fromCharCode(118,98,103,108,51,107,109,57,105,0) == right4;
      do {
          let sharewhiteD: Map<any, any> = new Map([[String.fromCharCode(97,108,105,103,110,101,100,0),27], [String.fromCharCode(102,111,117,114,115,113,117,97,114,101,0),337]]);
         right4 += `${3 * bridgee.size}`;
         sharewhiteD.set(`${sharewhiteD.size}`, sharewhiteD.size);
         if (register__p3) {
            break;
         }
      } while (register__p3 && (right4.length == 3));
         bridgee.set(`${right4}`, bridgee.size);
      statsq = !related7 && bridgee.size <= 49;
      if (plusk) {
         break;
      }
   } while (plusk && (!statsq));
       let libtobh = false;
         libtobh = !libtobh;
      if (!libtobh) {
         libtobh = (libtobh ? libtobh : libtobh);
      }
         libtobh = (libtobh ? libtobh : libtobh);
      related7 = iconwatchp.length < 92;
   let tempnodataP = related7 ? !related7 : related7;
   do {
      related7 = statsq;
      if (tempnodataP) {
         break;
      }
   } while ((modulesk > 4.85 || (modulesk - 4.85) > 4.29) && tempnodataP);
   if (arrowupZ > 2.23) {
      arrowupZ += 3;
   }
       let nendN: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,0),774], [String.fromCharCode(115,117,98,115,116,97,116,101,0),246]]);
       let rank9 = 0.0;
      if ((rank9 * parseFloat(`${nendN.size}`)) <= 3.61 || 4 <= (nendN.size & 5)) {
          let template_r8q = 0.0;
          let e_playerC = String.fromCharCode(100,105,97,103,114,97,109,0);
          let iconarrowrightorange8 = true;
          let sharedX = false;
         nendN.set(`${rank9}`, nendN.size);
         template_r8q += parseFloat(`${parseInt(`${template_r8q}`) % (Math.max(e_playerC.length, 7))}`);
         e_playerC = `${((iconarrowrightorange8 ? 2 : 2))}`;
         iconarrowrightorange8 = 91.72 >= template_r8q;
         sharedX = e_playerC.length > 43 && template_r8q > 27.41;
      }
      if (nendN.size >= 1) {
         rank9 /= Math.max(3, parseFloat(`${2 ^ nendN.size}`));
      }
          let stylesR = String.fromCharCode(108,115,112,108,112,99,0);
         rank9 *= parseFloat(`${parseInt(`${rank9}`) / (Math.max(1, 7))}`);
         stylesR = `${stylesR.length & stylesR.length}`;
          let dragI = 0;
          let componentregistry2: Map<any, any> = new Map([[String.fromCharCode(109,111,122,97,114,116,0),946], [String.fromCharCode(112,114,111,99,101,115,115,105,110,103,0),329], [String.fromCharCode(101,116,104,101,114,115,99,97,110,0),642]]);
         nendN.set(`${dragI}`, componentregistry2.size);
      while (2 > nendN.size) {
         rank9 += parseFloat(`${parseInt(`${rank9}`) * nendN.size}`);
         break;
      }
       let libcxxcomponentsG = String.fromCharCode(109,117,108,116,105,112,97,114,116,0);
      modulesk += parseFloat(`${parseInt(`${rank9}`)}`);
   while (3 < (4 & iconwatchp.length) && 1 < (4 ^ iconwatchp.length)) {
      modulesk *= parseFloat(`${2 ^ parseInt(`${arrowupZ}`)}`);
      break;
   }
   while (2.85 <= (arrowupZ / (Math.max(1.2, 10))) && 5 <= (indexS.length ^ 1)) {
      arrowupZ -= ((executor4 ? 5 : 3) >> (Math.min(1, Math.abs(2))));
      break;
   }
   if ((5.10 + arrowupZ) >= 4.45 || (saveQ.length + parseInt(`${arrowupZ}`)) >= 5) {
       let historyH = String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,0);
       let singleA = String.fromCharCode(112,105,99,107,108,112,102,0);
      for (let n = 0; n < 2; n++) {
         historyH = "2";
      }
         historyH = `${singleA.length}`;
          let unimplementedviewi = 5.0;
          let gradleG = 0.0;
          let unselectedn = String.fromCharCode(110,99,98,99,0);
         singleA = `${parseInt(`${unimplementedviewi}`)}`;
         unimplementedviewi -= parseFloat(`${1}`);
         gradleG -= parseFloat(`${unselectedn.length}`);
         unselectedn = `${unselectedn.length}`;
      while (singleA != historyH) {
          let lighto = 5;
         historyH += `${singleA.length}`;
         lighto *= lighto;
         break;
      }
         singleA = `${singleA.length << (Math.min(5, historyH.length))}`;
      for (let a = 0; a < 3; a++) {
         historyH = `${singleA.length ^ 1}`;
      }
      saveQ.push(parseInt(`${modulesk}`) | saveQ.length);
   }
   let bangY = arrowupZ <= 6067281.0;
   do {
      arrowupZ *= indexS.length;
      if (bangY) {
         break;
      }
   } while (bangY && ((modulesk - 1) <= 4.26));
   let halffieldimage3 = 9484091 <= saveQ.length;
   do {
      saveQ.push(indexS.length & 3);
      if (halffieldimage3) {
         break;
      }
   } while ((1.100 < (modulesk + 3.19)) && halffieldimage3);
      iconwatchp = `${(parseInt(`${arrowupZ}`) & (statsq ? 1 : 5))}`;
   if (!statsq) {
       let custom4: Array<any> = [90, 906];
       let executoru = String.fromCharCode(117,110,109,117,116,101,0);
       let selectt = 4;
       let readT = 0.0;
          let libfbA = 3;
          let hookU = 3.0;
          let iconrightorangeo = String.fromCharCode(115,109,105,108,0);
         readT += parseInt(`${hookU}`);
         libfbA /= Math.max(iconrightorangeo.length, 4);
         hookU -= iconrightorangeo.length + 2;
      for (let q = 0; q < 3; q++) {
         executoru = `${custom4.length}`;
      }
       let awayteamfieldI = 3.0;
         readT += custom4.length;
      if (5.70 <= (1.75 / (Math.max(6, readT))) && 1.75 <= (awayteamfieldI / (Math.max(3, readT)))) {
         awayteamfieldI += 3;
      }
       let sourcez = 1.0;
       let reportK = 1.0;
      if (4 >= (selectt * 2) && (selectt * 2) >= 4) {
         selectt /= Math.max(parseInt(`${sourcez}`) >> (Math.min(2, Math.abs(1))), 1);
      }
         reportK += parseFloat(`${executoru.length}`);
         executoru = "1";
         reportK *= parseFloat(`${3}`);
         custom4.push(2);
         executoru += `${3 >> (Math.min(Math.abs(parseInt(`${sourcez}`)), 5))}`;
      statsq = (((!related7 ? custom4.length : 50) & custom4.length) >= 50);
   }
   if (becomeo.get(`${saveQ.length}`) != null) {
      saveQ = [parseInt(`${modulesk}`) / (Math.max(becomeo.size, 3))];
   }
      modulesk *= (parseFloat(`${iconwatchp == String.fromCharCode(79,0) ? iconwatchp.length : (related7 ? 5 : 4)}`));

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
       let filteri = false;
    let configQ = true;
    let calendarr = 1.0;
    let save6 = String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,0);
    let redirectt = 5;
    let leaguedetailsbg0 = String.fromCharCode(101,120,97,109,105,110,101,0);
    let penaltyshootnogoalu = String.fromCharCode(97,118,102,111,114,109,97,116,114,101,115,0);
    let animationsK = 4.0;
    let time_eW: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,0),654], [String.fromCharCode(103,101,110,101,114,97,116,101,100,0),469], [String.fromCharCode(100,101,99,111,100,101,0),649]]);
    let topich = String.fromCharCode(101,110,117,109,118,97,108,117,101,0);
    let downarrowO: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,115,0),766], [String.fromCharCode(103,101,116,105,110,116,0),362], [String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,0),128]]);
    let libapminsightaz = String.fromCharCode(108,111,103,111,117,114,108,0);
    let profilepicq = 0.0;
    let awayiconn: Map<any, any> = new Map([[String.fromCharCode(101,109,97,105,108,0),true ], [String.fromCharCode(114,101,115,101,116,117,112,0),true ]]);
    let iconpointscoreQ = 4.0;
   for (let j = 0; j < 2; j++) {
       let trashm = String.fromCharCode(101,100,105,116,97,98,108,101,0);
       let showY = String.fromCharCode(100,101,99,105,109,97,116,111,114,0);
         trashm = `${showY.length | 1}`;
         showY = `${showY.length % (Math.max(trashm.length, 5))}`;
       let whitetickn: Array<any> = [String.fromCharCode(98,111,116,116,111,109,0), String.fromCharCode(109,117,108,116,120,0), String.fromCharCode(116,97,114,103,101,116,115,0)];
      if (4 > whitetickn.length) {
          let telemetryF = String.fromCharCode(100,101,99,111,100,101,102,114,97,109,101,0);
         whitetickn.push(2 + trashm.length);
         telemetryF = `${telemetryF.length + telemetryF.length}`;
      }
         showY += `${whitetickn.length}`;
      let bufferN = showY == String.fromCharCode(98,56,107,0);
      do {
          let whitetickB = String.fromCharCode(109,101,115,97,103,101,115,0);
          let libjsi9 = 2.0;
          let iconarrowrightwhite0 = 3.0;
          let notificationfillemptyp = true;
          let selectionn = String.fromCharCode(99,114,101,97,116,105,110,103,0);
         showY = "1";
         whitetickB = `${parseInt(`${libjsi9}`)}`;
         libjsi9 += parseInt(`${libjsi9}`);
         iconarrowrightwhite0 /= Math.max((String.fromCharCode(87,0) == whitetickB ? whitetickB.length : parseInt(`${libjsi9}`)), 1);
         notificationfillemptyp = (whitetickB.length + selectionn.length) < 92;
         selectionn += `${selectionn.length & 1}`;
         if (bufferN) {
            break;
         }
      } while ((5 > (showY.length / 4)) && bufferN);
      time_eW = new Map([[`${downarrowO.size}`, 2 << (Math.min(5, Math.abs(parseInt(`${calendarr}`))))]]);
   }
   if (3 > leaguedetailsbg0.length && topich != String.fromCharCode(100,0)) {
      topich += `${parseInt(`${calendarr}`) & penaltyshootnogoalu.length}`;
   }
      time_eW = new Map([[leaguedetailsbg0, leaguedetailsbg0.length | parseInt(`${calendarr}`)]]);
   let libavformatF = animationsK <= 4983775.0;
   do {
      animationsK -= penaltyshootnogoalu.length & topich.length;
      if (libavformatF) {
         break;
      }
   } while ((filteri || 3.28 >= (animationsK + 4.83)) && libavformatF);
      calendarr /= Math.max(2, parseFloat(`${downarrowO.size}`));
   for (let r = 0; r < 1; r++) {
      configQ = penaltyshootnogoalu.includes(`${animationsK}`);
   }
   let vignette8 = 9031411 <= downarrowO.size;
   do {
       let middlewareD = String.fromCharCode(116,100,115,99,0);
       let holder0 = 1;
      let defaultroombgY = 8401125 >= middlewareD.length;
      do {
         middlewareD = `${(middlewareD == String.fromCharCode(67,0) ? holder0 : middlewareD.length)}`;
         if (defaultroombgY) {
            break;
         }
      } while (((holder0 * 2) <= 2 || 4 <= (2 * holder0)) && defaultroombgY);
      if (middlewareD.includes(`${holder0}`)) {
         holder0 %= Math.max(holder0, 2);
      }
          let windk = 0;
         middlewareD = "1 + holder0";
         windk <<= Math.min(Math.abs(windk % (Math.max(1, 2))), 4);
      let iconsharefriendsO = middlewareD == String.fromCharCode(53,109,48,98,95,54,0);
      do {
         middlewareD += `${middlewareD.length}`;
         if (iconsharefriendsO) {
            break;
         }
      } while ((middlewareD.endsWith(`${holder0}`)) && iconsharefriendsO);
         holder0 ^= middlewareD.length;
      for (let z = 0; z < 1; z++) {
         middlewareD += "2";
      }
      downarrowO.set(`${animationsK}`, 1);
      if (vignette8) {
         break;
      }
   } while (vignette8 && (Array.from(downarrowO.keys()).includes(`${animationsK}`)));
       let accepted9 = 1.0;
       let icontransferclubQ = 2;
      if ((accepted9 + icontransferclubQ) >= 4.100) {
         accepted9 *= 1 & icontransferclubQ;
      }
         accepted9 *= 3 + icontransferclubQ;
      while (2.25 <= accepted9) {
         icontransferclubQ -= 3 + parseInt(`${accepted9}`);
         break;
      }
      if (1.41 <= (icontransferclubQ + accepted9)) {
          let stringc = 5.0;
          let modelsV = String.fromCharCode(99,97,110,111,110,0);
          let thumbnailO: Map<any, any> = new Map([[String.fromCharCode(103,101,116,108,97,121,111,117,116,0),520], [String.fromCharCode(97,112,112,114,111,120,0),142], [String.fromCharCode(102,97,105,108,97,98,108,101,0),186]]);
          let iconsharem = String.fromCharCode(100,105,99,116,105,111,110,97,114,105,101,115,0);
          let tailV = true;
         icontransferclubQ += iconsharem.length;
         stringc /= Math.max(2, (parseFloat(`${(tailV ? 4 : 2)}`)));
         modelsV = "3";
         thumbnailO = new Map([[modelsV, parseInt(`${stringc}`) / (Math.max(modelsV.length, 9))]]);
         iconsharem = "1";
      }
      for (let g = 0; g < 3; g++) {
          let panglei: Array<any> = [String.fromCharCode(97,110,99,105,108,108,97,114,121,0), String.fromCharCode(112,114,101,104,97,115,104,0), String.fromCharCode(109,101,103,101,100,0)];
          let downloaded2 = 4;
          let inactiveL = 4;
          let constantsR = 5.0;
          let nativeexy = 3.0;
         icontransferclubQ ^= parseInt(`${accepted9}`);
         panglei.push(parseInt(`${nativeexy}`));
         downloaded2 /= Math.max(3, parseInt(`${nativeexy}`) | 2);
         inactiveL += parseInt(`${nativeexy}`) % 3;
         constantsR *= parseFloat(`${downloaded2 + inactiveL}`);
      }
          let userU = 1.0;
         icontransferclubQ ^= 3;
         userU += parseInt(`${userU}`);
      libapminsightaz = `${topich.length ^ leaguedetailsbg0.length}`;
      topich += `${(String.fromCharCode(66,0) == leaguedetailsbg0 ? save6.length : leaguedetailsbg0.length)}`;
      filteri = (((!filteri ? leaguedetailsbg0.length : 25) ^ leaguedetailsbg0.length) == 25);
   let phoneshareQ = 5734238 <= redirectt;
   do {
      redirectt *= ((filteri ? 5 : 5) / (Math.max(7, parseInt(`${calendarr}`))));
      if (phoneshareQ) {
         break;
      }
   } while (((redirectt * profilepicq) == 4.39) && phoneshareQ);
   while (3 <= penaltyshootnogoalu.length) {
       let sellmathbackground9: Map<any, any> = new Map([[String.fromCharCode(109,102,104,100,0),true ], [String.fromCharCode(112,111,108,108,105,110,103,0),false ], [String.fromCharCode(99,111,109,112,105,108,101,0),true ]]);
       let gifgoalo = true;
       let sharewhiteh = String.fromCharCode(116,105,116,108,101,98,97,114,0);
      let renewE = gifgoalo ? !gifgoalo : gifgoalo;
      do {
         gifgoalo = sellmathbackground9.size > sharewhiteh.length;
         if (renewE) {
            break;
         }
      } while (renewE && (5 <= (2 - sellmathbackground9.size) && !gifgoalo));
      while (!gifgoalo) {
         gifgoalo = sharewhiteh.includes(`${gifgoalo}`);
         break;
      }
         gifgoalo = !gifgoalo;
      while ((sellmathbackground9.size - sharewhiteh.length) == 5 && 5 == (sellmathbackground9.size - sharewhiteh.length)) {
          let qaag6 = 4;
         sellmathbackground9.set(sharewhiteh, 3);
         qaag6 += qaag6;
         break;
      }
      let neonb = gifgoalo ? !gifgoalo : gifgoalo;
      do {
         gifgoalo = null != sellmathbackground9.get(`${gifgoalo}`);
         if (neonb) {
            break;
         }
      } while (neonb && (3 <= sharewhiteh.length || !gifgoalo));
         gifgoalo = sharewhiteh.length < 86;
      for (let z = 0; z < 1; z++) {
         sharewhiteh = "3";
      }
      if (!gifgoalo) {
         sellmathbackground9 = new Map([[`${sellmathbackground9.size}`, ((gifgoalo ? 3 : 2) / (Math.max(3, 10)))]]);
      }
       let iconsettingP = 2;
       let modeS = 0;
      profilepicq /= Math.max(2, (libapminsightaz == String.fromCharCode(100,0) ? libapminsightaz.length : parseInt(`${profilepicq}`)));
      break;
   }

    clearTimeout(timer.current);

   let iconrightorangek = filteri ? !filteri : filteri;
   do {
      filteri = save6.length < 82;
      if (iconrightorangek) {
         break;
      }
   } while (iconrightorangek && (1 >= penaltyshootnogoalu.length && filteri));
   let videobufferloadingu = leaguedetailsbg0 == String.fromCharCode(112,104,103,100,0);
   do {
      leaguedetailsbg0 += `${time_eW.size}`;
      if (videobufferloadingu) {
         break;
      }
   } while ((2 > leaguedetailsbg0.length && libapminsightaz == String.fromCharCode(89,0)) && videobufferloadingu);
   while (libapminsightaz.includes(`${downarrowO.size}`)) {
      downarrowO = new Map([[`${awayiconn.size}`, parseInt(`${calendarr}`)]]);
      break;
   }
   while (!penaltyshootnogoalu.includes(`${animationsK}`)) {
      penaltyshootnogoalu += "1";
      break;
   }
   for (let c = 0; c < 1; c++) {
      downarrowO.set(`${profilepicq}`, parseInt(`${profilepicq}`) - 3);
   }
      awayiconn.set(`${calendarr}`, (save6 == String.fromCharCode(89,0) ? parseInt(`${calendarr}`) : save6.length));
   while (5 > (downarrowO.size % (Math.max(8, redirectt))) && (downarrowO.size % (Math.max(5, 5))) > 5) {
      redirectt ^= parseInt(`${animationsK}`);
      break;
   }
       let containerk = 4.0;
       let downO: Array<any> = [691, 545];
      while (!downO.includes(containerk)) {
         containerk -= parseInt(`${containerk}`) ^ 3;
         break;
      }
      if ((downO.length / 5) < 5 && (5 & downO.length) < 5) {
         containerk /= Math.max(3, 3);
      }
       let sharewhiteU: Array<any> = [267, 570];
       let usernameP = 5.0;
      if ((usernameP / (Math.max(10, parseFloat(`${sharewhiteU.length}`)))) <= 4.59 && (usernameP / (Math.max(parseFloat(`${sharewhiteU.length}`), 1))) <= 4.59) {
         usernameP -= parseFloat(`${1}`);
      }
      let chinaB = sharewhiteU.length >= 9008506;
      do {
         sharewhiteU.push(parseInt(`${containerk}`));
         if (chinaB) {
            break;
         }
      } while ((2 <= (sharewhiteU.length * 2) || (2 & sharewhiteU.length) <= 1) && chinaB);
      profilepicq *= downO.length ^ 3;
      filteri = configQ && save6.length <= 18;
      downarrowO.set(topich, (String.fromCharCode(50,0) == topich ? redirectt : topich.length));
       let suggestionB = 4.0;
       let activity0 = 5.0;
       let mathi = 4;
         suggestionB += parseInt(`${activity0}`);
         suggestionB /= Math.max(2, mathi);
         suggestionB -= parseInt(`${activity0}`) << (Math.min(2, Math.abs(mathi)));
      for (let t = 0; t < 3; t++) {
          let logoutC = 1;
          let default_zeU = String.fromCharCode(114,111,108,101,0);
          let iconrightorangea = String.fromCharCode(105,110,115,116,97,108,108,101,100,0);
         suggestionB -= parseInt(`${activity0}`) >> (Math.min(iconrightorangea.length, 1));
         logoutC /= Math.max((String.fromCharCode(107,0) == default_zeU ? default_zeU.length : logoutC), 1);
         iconrightorangea = `${default_zeU.length}`;
      }
      for (let h = 0; h < 1; h++) {
         mathi &= parseInt(`${suggestionB}`) >> (Math.min(3, Math.abs(mathi)));
      }
       let traminiK = true;
       let iconpipexpandi = true;
      while ((mathi % 5) == 5 || 2 == (5 ^ mathi)) {
          let activeY = 4.0;
         activity0 *= parseFloat(`${mathi * parseInt(`${suggestionB}`)}`);
         activeY /= Math.max(parseInt(`${activeY}`), 5);
         break;
      }
          let recommendationN = String.fromCharCode(101,97,99,104,0);
          let fullscreenminY = 2.0;
         activity0 -= parseFloat(`${mathi >> (Math.min(Math.abs(parseInt(`${activity0}`)), 2))}`);
         recommendationN += "2";
         fullscreenminY += parseFloat(`${parseInt(`${fullscreenminY}`)}`);
      let footballtrophy6 = 6706890.0 >= activity0;
      do {
         activity0 *= parseFloat(`${mathi}`);
         if (footballtrophy6) {
            break;
         }
      } while (footballtrophy6 && (!iconpipexpandi));
      profilepicq -= leaguedetailsbg0.length;
   let valuesD = save6.length >= 6377054;
   do {
      save6 = `${libapminsightaz.length}`;
      if (valuesD) {
         break;
      }
   } while ((parseInt(`${profilepicq}`) == save6.length) && valuesD);
    setShowOverlay(true);

      leaguedetailsbg0 = `${downarrowO.size}`;
   if ((profilepicq + 1.33) > 4.67 || (1.33 + profilepicq) > 2.91) {
      awayiconn = new Map([[`${profilepicq}`, (parseInt(`${profilepicq}`) & (filteri ? 4 : 3))]]);
   }
      save6 = `${libapminsightaz.length}`;
   let winda = profilepicq >= 8629835.0;
   do {
       let fileD = 1;
       let basketballplayerplaceholderC = 3;
      let policyl = 7898068 >= fileD;
      do {
         fileD ^= basketballplayerplaceholderC;
         if (policyl) {
            break;
         }
      } while ((5 >= (2 ^ fileD) || (2 ^ fileD) >= 1) && policyl);
         fileD /= Math.max(5, basketballplayerplaceholderC ^ fileD);
       let whitevideoliveJ = 5;
       let arrowrightwithtailA = 3;
      let v_managerY = 8401653 <= whitevideoliveJ;
      do {
         whitevideoliveJ *= 1;
         if (v_managerY) {
            break;
         }
      } while ((3 < (arrowrightwithtailA % 3)) && v_managerY);
      for (let e = 0; e < 2; e++) {
         whitevideoliveJ -= arrowrightwithtailA;
      }
         fileD |= basketballplayerplaceholderC;
      profilepicq *= parseInt(`${profilepicq}`);
      if (winda) {
         break;
      }
   } while (winda && ((5.99 - profilepicq) <= 5.39));
   for (let s = 0; s < 2; s++) {
      time_eW.set(`${filteri}`, ((filteri ? 5 : 5) + save6.length));
   }
       let reminder8: Map<any, any> = new Map([[String.fromCharCode(111,117,116,99,111,109,101,0),false ], [String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0),false ]]);
       let homeactiveF: Map<any, any> = new Map([[String.fromCharCode(98,101,97,116,105,110,103,0),458], [String.fromCharCode(115,101,110,100,0),778], [String.fromCharCode(100,99,116,99,111,101,102,0),461]]);
      while (homeactiveF.get(`${reminder8.size}`) == null) {
         homeactiveF.set(`${homeactiveF.size}`, homeactiveF.size / (Math.max(3, 10)));
         break;
      }
       let usernamem = String.fromCharCode(117,109,111,116,105,111,110,0);
      for (let n = 0; n < 3; n++) {
          let videovar9 = 4.0;
         reminder8.set(usernamem, (usernamem == String.fromCharCode(72,0) ? reminder8.size : usernamem.length));
         videovar9 *= parseFloat(`${parseInt(`${videovar9}`) << (Math.min(1, Math.abs(1)))}`);
      }
         homeactiveF.set(`${usernamem}`, (String.fromCharCode(56,0) == usernamem ? reminder8.size : usernamem.length));
       let androidF: Map<any, any> = new Map([[String.fromCharCode(114,97,100,105,97,108,0),483], [String.fromCharCode(99,111,110,116,101,120,116,99,111,110,102,105,103,0),455]]);
       let vietnamX: Map<any, any> = new Map([[String.fromCharCode(99,111,118,101,114,115,0),766], [String.fromCharCode(97,118,97,116,97,114,115,0),901], [String.fromCharCode(98,110,99,98,98,0),271]]);
          let awayg = false;
          let checkboxo: Array<any> = [208, 426, 749];
         usernamem += "3";
         awayg = (86 <= ((!awayg ? checkboxo.length : 86) | checkboxo.length));
      time_eW = new Map([[`${time_eW.size}`, 3 + time_eW.size]]);
   let relatedw = filteri ? !filteri : filteri;
   do {
      filteri = (awayiconn.size + time_eW.size) > 11;
      if (relatedw) {
         break;
      }
   } while ((filteri) && relatedw);
   while (save6.length > 3) {
      save6 += `${2 << (Math.min(Math.abs(parseInt(`${profilepicq}`)), 5))}`;
      break;
   }
       let latnE = 4.0;
       let libsentryD = 2.0;
       let libruntimeexecutor0 = String.fromCharCode(100,101,115,105,103,110,0);
      for (let k = 0; k < 2; k++) {
         libsentryD *= (libruntimeexecutor0 == String.fromCharCode(53,0) ? parseInt(`${libsentryD}`) : libruntimeexecutor0.length);
      }
      while (3 <= (libruntimeexecutor0.length + 5) || (5 << (Math.min(4, libruntimeexecutor0.length))) <= 1) {
         libruntimeexecutor0 = `${parseInt(`${latnE}`) << (Math.min(1, Math.abs(parseInt(`${libsentryD}`))))}`;
         break;
      }
          let pageC = 1;
          let sharewhitev: Array<any> = [141, 19, 468];
         libsentryD -= pageC;
         pageC *= sharewhitev.length + sharewhitev.length;
      if (latnE < 4.91) {
         libsentryD *= parseInt(`${latnE}`);
      }
      let chat_ = 5493062.0 >= libsentryD;
      do {
         libsentryD *= parseInt(`${libsentryD}`) + 1;
         if (chat_) {
            break;
         }
      } while ((3 < (libruntimeexecutor0.length / (Math.max(3, 1)))) && chat_);
       let configN: Map<any, any> = new Map([[String.fromCharCode(97,99,114,111,115,115,102,97,100,101,0),false ], [String.fromCharCode(120,114,101,115,0),true ], [String.fromCharCode(98,114,101,97,100,0),false ]]);
       let cornerkickG: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,105,110,103,0),String.fromCharCode(115,98,108,111,103,0)], [String.fromCharCode(100,97,117,98,101,99,104,105,101,115,0),String.fromCharCode(110,117,109,98,101,114,0)], [String.fromCharCode(109,97,114,107,101,114,115,0),String.fromCharCode(97,118,105,100,0)]]);
      let libfbjnil = libsentryD <= 9245851.0;
      do {
         libsentryD *= 3;
         if (libfbjnil) {
            break;
         }
      } while (((libsentryD * 2.8) < 3.15 || 5.67 < (libsentryD * 2.8)) && libfbjnil);
         latnE *= 3;
      while (latnE == 4.65) {
         cornerkickG.set(`${latnE}`, parseInt(`${latnE}`));
         break;
      }
      save6 = `${parseInt(`${latnE}`) - parseInt(`${calendarr}`)}`;
      libapminsightaz = `${((filteri ? 2 : 2) & parseInt(`${profilepicq}`))}`;
   for (let h = 0; h < 2; h++) {
      penaltyshootnogoalu += `${redirectt}`;
   }
       let scheduleb: Array<any> = [767, 404];
       let icontransferclubJ = String.fromCharCode(112,97,114,115,101,0);
      while ((icontransferclubJ.length * scheduleb.length) < 5 && 5 < (scheduleb.length * icontransferclubJ.length)) {
          let bellg = String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,0);
          let bangH: Array<any> = [71, 900];
          let thailand0: Array<any> = [726, 867, 247];
         scheduleb = [bellg.length + 3];
         bellg = `${thailand0.length}`;
         bangH.push(bangH.length);
         thailand0.push(3);
         break;
      }
         icontransferclubJ += `${scheduleb.length}`;
         icontransferclubJ = `${icontransferclubJ.length * 1}`;
         icontransferclubJ = `${1 << (Math.min(1, icontransferclubJ.length))}`;
         scheduleb = [(icontransferclubJ == String.fromCharCode(82,0) ? scheduleb.length : icontransferclubJ.length)];
         scheduleb.push(icontransferclubJ.length);
      downarrowO = new Map([[`${downarrowO.size}`, save6.length | 3]]);
    overlayRef.current = true;

   if (leaguedetailsbg0.includes(`${downarrowO.size}`)) {
      leaguedetailsbg0 += `${penaltyshootnogoalu.length | parseInt(`${animationsK}`)}`;
   }
   if (4 == libapminsightaz.length) {
       let kuaishouF: Array<any> = [88, 935, 906];
       let encryptorN: Array<any> = [265, 763];
       let e_positionc = 0.0;
       let previewD = String.fromCharCode(100,116,115,0);
         e_positionc += parseInt(`${e_positionc}`) | encryptorN.length;
      if (3.87 == e_positionc) {
         e_positionc += previewD.length;
      }
          let headerI = String.fromCharCode(104,101,120,98,105,110,0);
          let predictionwinA = String.fromCharCode(112,97,114,97,109,115,116,114,105,110,103,0);
          let prediction2: Array<any> = [270, 448];
         kuaishouF.push(1 ^ kuaishouF.length);
         headerI = `${predictionwinA.length}`;
         predictionwinA = `${predictionwinA.length ^ 3}`;
         prediction2.push(prediction2.length + predictionwinA.length);
      if (2 == (3 << (Math.min(5, encryptorN.length))) || (3 << (Math.min(2, encryptorN.length))) == 2) {
         encryptorN = [parseInt(`${e_positionc}`)];
      }
          let othere = 2;
          let libswscales = String.fromCharCode(114,100,111,112,116,0);
         previewD += `${1 / (Math.max(4, libswscales.length))}`;
         othere &= othere - 1;
         libswscales += `${othere % (Math.max(othere, 2))}`;
      while (kuaishouF.length < 4) {
         kuaishouF = [kuaishouF.length >> (Math.min(Math.abs(3), 3))];
         break;
      }
          let mbnativeadvanceda = false;
          let groupL = String.fromCharCode(114,105,100,103,101,0);
         kuaishouF = [3];
         mbnativeadvanceda = !mbnativeadvanceda;
         groupL += "2";
       let privilegeK = String.fromCharCode(115,116,97,107,105,110,103,0);
       let stationsF = String.fromCharCode(103,101,116,112,97,100,100,114,115,0);
      let soundA = encryptorN.length <= 8022559;
      do {
         encryptorN.push(encryptorN.length);
         if (soundA) {
            break;
         }
      } while ((encryptorN.length <= stationsF.length) && soundA);
         kuaishouF = [(previewD == String.fromCharCode(101,0) ? previewD.length : privilegeK.length)];
      let targets = kuaishouF.length <= 7614010;
      do {
         kuaishouF = [2 | stationsF.length];
         if (targets) {
            break;
         }
      } while ((1 <= (encryptorN.length << (Math.min(Math.abs(2), 1))) || (kuaishouF.length << (Math.min(encryptorN.length, 5))) <= 2) && targets);
         privilegeK += `${encryptorN.length}`;
      libapminsightaz = `${1 + leaguedetailsbg0.length}`;
   }
      save6 = `${awayiconn.size}`;
      leaguedetailsbg0 += `${leaguedetailsbg0.length}`;
   while (topich.endsWith(`${time_eW.size}`)) {
      time_eW.set(`${filteri}`, (1 - (filteri ? 3 : 1)));
      break;
   }
   let chartt = calendarr <= 7512978.0;
   do {
      calendarr *= parseFloat(`${1 & parseInt(`${calendarr}`)}`);
      if (chartt) {
         break;
      }
   } while ((topich.includes(`${calendarr}`)) && chartt);
       let modelsj = 3.0;
       let sliderO: Array<any> = [467, 482, 108];
      let runtimeschedulerV = 9059402 >= sliderO.length;
      do {
         sliderO = [1];
         if (runtimeschedulerV) {
            break;
         }
      } while ((3 < (sliderO.length - parseInt(`${modelsj}`)) || 3 < (sliderO.length - parseInt(`${modelsj}`))) && runtimeschedulerV);
      while ((modelsj - 5.27) <= 2.29 && 5.27 <= (parseFloat(`${sliderO.length}`) - modelsj)) {
         sliderO.push(parseInt(`${modelsj}`));
         break;
      }
          let pressuree: Map<any, any> = new Map([[String.fromCharCode(109,109,97,112,0),525], [String.fromCharCode(101,100,103,101,115,0),411], [String.fromCharCode(109,111,100,109,0),202]]);
          let firebasen: Array<any> = [String.fromCharCode(100,101,99,114,101,109,101,110,116,0), String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,0)];
          let type_52 = false;
         sliderO = [(1 >> (Math.min(2, Math.abs((type_52 ? 2 : 2)))))];
         pressuree.set(`${firebasen.length}`, pressuree.size & firebasen.length);
         type_52 = (pressuree.size / (Math.max(4, firebasen.length))) <= 1;
         modelsj *= parseFloat(`${1}`);
         sliderO.push(2 << (Math.min(3, sliderO.length)));
         sliderO = [parseInt(`${modelsj}`) & sliderO.length];
      penaltyshootnogoalu = `${libapminsightaz.length - 1}`;
      penaltyshootnogoalu += `${leaguedetailsbg0.length}`;
       let leakcheckerK = String.fromCharCode(99,107,112,116,0);
         leakcheckerK = `${(leakcheckerK == String.fromCharCode(53,0) ? leakcheckerK.length : leakcheckerK.length)}`;
         leakcheckerK += `${3 >> (Math.min(4, leakcheckerK.length))}`;
         leakcheckerK = `${leakcheckerK.length % 2}`;
      configQ = (parseFloat(`${libapminsightaz.length}`) - calendarr) > 85.37;
      time_eW = new Map([[`${calendarr}`, parseInt(`${calendarr}`) + 3]]);
   let scrollviewS = 6195361 >= penaltyshootnogoalu.length;
   do {
       let moduleU: Array<any> = [570, 384, 72];
      while (2 >= (moduleU.length ^ 2) && 1 >= (moduleU.length ^ 2)) {
         moduleU = [moduleU.length];
         break;
      }
         moduleU = [moduleU.length << (Math.min(Math.abs(1), 4))];
         moduleU = [moduleU.length << (Math.min(Math.abs(2), 1))];
      penaltyshootnogoalu += `${(leaguedetailsbg0 == String.fromCharCode(111,0) ? leaguedetailsbg0.length : redirectt)}`;
      if (scrollviewS) {
         break;
      }
   } while (scrollviewS && ((time_eW.size / 3) < 1));
      downarrowO = new Map([[leaguedetailsbg0, penaltyshootnogoalu.length * 3]]);
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
       let line2 = true;
    let smallbrightness3 = 3.0;
    let descx = String.fromCharCode(98,97,100,103,101,115,0);
    let photod: Map<any, any> = new Map([[String.fromCharCode(115,117,98,105,109,97,103,101,0),true ], [String.fromCharCode(107,101,121,98,117,102,0),false ]]);
    let securityi: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,0),String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,0)], [String.fromCharCode(97,114,114,97,110,103,101,100,0),String.fromCharCode(98,97,115,101,105,115,107,101,121,0)]]);
    let promotiond = String.fromCharCode(114,101,118,111,107,101,0);
    let malaysiaN = true;
    let whistleorangel = String.fromCharCode(104,119,102,114,97,109,101,0);
    let yellowanimationliven = String.fromCharCode(118,97,99,97,110,116,0);
    let mathw = String.fromCharCode(98,105,116,115,113,112,0);
    let v_imageA = String.fromCharCode(100,101,97,108,108,111,99,0);
    let halfe: Map<any, any> = new Map([[String.fromCharCode(99,111,115,116,105,0),685], [String.fromCharCode(116,105,109,101,114,115,0),291]]);
    let leakcheckerS = String.fromCharCode(116,111,111,108,98,111,120,0);
    let currentq = 5.0;
    let launcherp = String.fromCharCode(116,105,99,107,101,116,0);
      promotiond = `${1 ^ whistleorangel.length}`;
   while (v_imageA.length > 2) {
      v_imageA += "3";
      break;
   }
   for (let d = 0; d < 1; d++) {
      promotiond += `${yellowanimationliven.length}`;
   }
      smallbrightness3 += (parseFloat(`${(malaysiaN ? 1 : 3)}`));
   while (1 < (1 - mathw.length) || 5 < (1 - photod.size)) {
       let iconrightorange_ = 3.0;
       let activea = 5.0;
       let navigationM = String.fromCharCode(108,105,118,101,109,111,100,101,0);
       let winde = String.fromCharCode(119,101,98,109,105,100,115,0);
      while (5 <= navigationM.length) {
          let bang2 = 3.0;
         activea /= Math.max(1, parseFloat(`${parseInt(`${iconrightorange_}`)}`));
         bang2 -= parseFloat(`${parseInt(`${bang2}`) - parseInt(`${bang2}`)}`);
         break;
      }
      if (2.18 >= activea) {
         activea += parseFloat(`${3}`);
      }
          let acceptedw = String.fromCharCode(108,97,117,110,99,104,101,115,0);
          let baselineW = 4.0;
          let matchdetailbgM = String.fromCharCode(112,109,107,0);
         iconrightorange_ += parseInt(`${baselineW}`) << (Math.min(Math.abs(1), 4));
         acceptedw = `${(String.fromCharCode(71,0) == acceptedw ? matchdetailbgM.length : acceptedw.length)}`;
         baselineW /= Math.max(5, parseFloat(`${acceptedw.length}`));
         matchdetailbgM = `${acceptedw.length % 2}`;
         navigationM += `${parseInt(`${iconrightorange_}`) / (Math.max(8, parseInt(`${activea}`)))}`;
          let whistlej = 0;
          let lightw: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,99,111,103,0),true ], [String.fromCharCode(112,114,101,115,101,110,116,0),false ], [String.fromCharCode(97,112,112,101,97,114,101,110,99,101,0),false ]]);
         activea -= parseFloat(`${3 | parseInt(`${iconrightorange_}`)}`);
         whistlej -= 1;
         lightw = new Map([[`${lightw.size}`, whistlej]]);
       let crownw: Map<any, any> = new Map([[String.fromCharCode(97,114,101,113,117,101,115,116,0),784], [String.fromCharCode(111,108,107,97,100,111,116,0),447]]);
      if (4 <= (crownw.size % (Math.max(winde.length, 7)))) {
         winde += `${winde.length - crownw.size}`;
      }
         crownw = new Map([[`${activea}`, 3 ^ parseInt(`${activea}`)]]);
      if (navigationM.length == crownw.size) {
         crownw = new Map([[`${activea}`, parseInt(`${activea}`)]]);
      }
          let liblogger5 = String.fromCharCode(97,110,99,104,111,114,115,0);
         crownw = new Map([[`${activea}`, parseInt(`${activea}`) % (Math.max(winde.length, 8))]]);
         liblogger5 += `${1 - liblogger5.length}`;
         navigationM = `${navigationM.length}`;
      if (!navigationM.includes(winde)) {
         navigationM += `${parseInt(`${activea}`) / (Math.max(1, 5))}`;
      }
      mathw += `${2 | navigationM.length}`;
      break;
   }
   while (Array.from(securityi.keys()).includes(`${smallbrightness3}`)) {
      securityi = new Map([[`${photod.size}`, parseInt(`${smallbrightness3}`) / 2]]);
      break;
   }
   if (photod.size < 3) {
       let smallw = String.fromCharCode(101,108,108,105,112,116,105,99,0);
       let activityO: Array<any> = [830, 795, 382];
       let basketballplayerplaceholderP = 5.0;
       let submito = String.fromCharCode(117,110,115,97,118,101,100,0);
      let bottomF = basketballplayerplaceholderP >= 6747138.0;
      do {
          let traminiH = 1;
          let sheetW = true;
          let redscoreballP = 4.0;
          let liveU = String.fromCharCode(115,101,112,105,97,0);
         basketballplayerplaceholderP /= Math.max(1, traminiH);
         traminiH /= Math.max(4, liveU.length);
         sheetW = redscoreballP >= 99.18 && 56 >= liveU.length;
         redscoreballP += parseFloat(`${parseInt(`${redscoreballP}`) ^ 3}`);
         if (bottomF) {
            break;
         }
      } while ((activityO.includes(basketballplayerplaceholderP)) && bottomF);
         submito = `${submito.length ^ 2}`;
          let playercommon5 = String.fromCharCode(112,114,111,102,105,108,101,0);
          let dependenciesh = false;
         smallw = `${(submito == String.fromCharCode(107,0) ? (dependenciesh ? 5 : 1) : submito.length)}`;
         playercommon5 = "2";
         dependenciesh = playercommon5 == playercommon5;
         submito += `${submito.length}`;
          let historyg = String.fromCharCode(103,101,110,101,114,105,99,0);
          let backward8: Array<any> = [71, 510];
          let layouty = String.fromCharCode(111,110,116,101,120,116,0);
         basketballplayerplaceholderP -= 1;
         historyg += `${layouty.length >> (Math.min(2, historyg.length))}`;
         backward8.push(1 >> (Math.min(5, backward8.length)));
         layouty = `${backward8.length}`;
         activityO.push(3);
         smallw = "2";
      for (let r = 0; r < 1; r++) {
         smallw += `${smallw.length}`;
      }
         basketballplayerplaceholderP += parseInt(`${basketballplayerplaceholderP}`);
      for (let a = 0; a < 1; a++) {
         submito += `${parseInt(`${basketballplayerplaceholderP}`) / (Math.max(8, submito.length))}`;
      }
      while ((activityO.length | 2) > 4) {
         smallw = `${parseInt(`${basketballplayerplaceholderP}`) | activityO.length}`;
         break;
      }
      if ((basketballplayerplaceholderP * smallw.length) >= 4.72) {
         smallw = "3";
      }
      malaysiaN = activityO.length < 41;
   }
   if (whistleorangel.length == 5) {
      v_imageA = `${((line2 ? 5 : 2) ^ photod.size)}`;
   }
   while (yellowanimationliven != String.fromCharCode(86,0)) {
      v_imageA += `${(mathw == String.fromCharCode(111,0) ? mathw.length : photod.size)}`;
      break;
   }
      whistleorangel += `${parseInt(`${smallbrightness3}`)}`;

      if (videoRef.current) {
        videoRef.current.seek(isNaN(value) ? 0 : value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
       let snewarchdefaultsB: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,110,111,114,109,0),false ], [String.fromCharCode(118,97,108,105,100,97,116,111,114,0),true ], [String.fromCharCode(116,101,115,116,111,114,105,103,0),false ]]);
    let armvaH = String.fromCharCode(101,108,97,115,116,105,99,0);
    let lightA = 5.0;
    let iconrightorangeK = String.fromCharCode(109,97,116,104,111,112,115,0);
    let linkf = String.fromCharCode(114,101,115,101,116,0);
    let faviconq: Map<any, any> = new Map([[String.fromCharCode(114,97,105,116,0),269], [String.fromCharCode(118,105,100,101,111,115,0),859]]);
    let smallorangeman7 = String.fromCharCode(103,100,112,114,0);
    let videobufferloading9: Map<any, any> = new Map([[String.fromCharCode(115,117,101,108,111,0),969], [String.fromCharCode(115,105,108,101,110,99,101,100,0),18]]);
    let render0 = true;
    let disconnectedq = false;
   for (let k = 0; k < 2; k++) {
       let morez: Map<any, any> = new Map([[String.fromCharCode(107,110,111,99,107,111,117,116,0),586], [String.fromCharCode(114,101,110,100,101,114,101,100,0),627], [String.fromCharCode(103,101,116,114,97,110,100,111,109,0),543]]);
       let googlel: Array<any> = [400, 471];
       let latnc = String.fromCharCode(110,116,105,108,101,0);
          let statsY: Array<any> = [747, 647];
          let kuaishou7: Map<any, any> = new Map([[String.fromCharCode(115,111,117,110,100,0),String.fromCharCode(112,97,99,107,101,116,105,122,101,114,0)], [String.fromCharCode(108,111,103,103,101,114,115,0),String.fromCharCode(99,117,114,116,97,105,110,115,0)], [String.fromCharCode(97,112,116,120,0),String.fromCharCode(99,97,116,99,104,105,110,103,0)]]);
         morez.set(latnc, latnc.length);
         statsY = [3 + statsY.length];
         kuaishou7.set(`${statsY.length}`, statsY.length);
      if ((googlel.length >> (Math.min(Math.abs(5), 1))) <= 3 || (googlel.length >> (Math.min(Math.abs(morez.size), 2))) <= 5) {
         googlel = [2 & googlel.length];
      }
      let sansd = 5457409 >= morez.size;
      do {
          let calendarP = String.fromCharCode(99,111,110,118,111,108,117,116,101,0);
          let mbsplashP = 3;
          let type_lf = String.fromCharCode(98,97,99,107,105,110,103,0);
          let eabafadfadddbafeddddeeefeaafl = 0.0;
          let lightb = 0.0;
         morez = new Map([[`${lightb}`, mbsplashP]]);
         calendarP = `${calendarP.length + parseInt(`${eabafadfadddbafeddddeeefeaafl}`)}`;
         mbsplashP &= 3;
         type_lf = `${1 / (Math.max(6, parseInt(`${eabafadfadddbafeddddeeefeaafl}`)))}`;
         lightb *= parseFloat(`${type_lf.length + calendarP.length}`);
         if (sansd) {
            break;
         }
      } while ((Array.from(morez.values()).includes(googlel.length)) && sansd);
      while (googlel.length > morez.size) {
          let elementsh = 0.0;
          let iconshareY: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,105,110,103,0),155], [String.fromCharCode(101,110,99,111,100,97,98,108,101,115,0),656], [String.fromCharCode(99,114,111,115,115,0),173]]);
         morez = new Map([[`${iconshareY.size}`, iconshareY.size]]);
         elementsh += parseInt(`${elementsh}`);
         break;
      }
      if ((3 << (Math.min(3, Math.abs(morez.size)))) < 2) {
         morez.set(latnc, 2);
      }
      while (5 < latnc.length) {
         latnc = `${(String.fromCharCode(106,0) == latnc ? morez.size : latnc.length)}`;
         break;
      }
      for (let m = 0; m < 1; m++) {
         googlel = [morez.size ^ latnc.length];
      }
         googlel = [3];
       let logoutt = 2.0;
       let penaltyshootL = 4.0;
      linkf = `${2 - iconrightorangeK.length}`;
   }
   if (4.81 == (lightA * 5.47) && lightA == 5.47) {
       let rightk: Map<any, any> = new Map([[String.fromCharCode(100,101,113,117,101,117,101,100,0),810], [String.fromCharCode(101,118,105,99,101,0),563]]);
       let lightB = 1.0;
      for (let f = 0; f < 1; f++) {
         lightB += rightk.size;
      }
      if (4 >= (2 * rightk.size) || (lightB - 2.70) >= 1.74) {
         lightB += 2;
      }
         lightB += parseInt(`${lightB}`) & rightk.size;
         lightB *= rightk.size << (Math.min(Math.abs(1), 5));
      for (let g = 0; g < 2; g++) {
         lightB += 1 * parseInt(`${lightB}`);
      }
         rightk = new Map([[`${rightk.size}`, 3 + parseInt(`${lightB}`)]]);
      lightA -= parseFloat(`${armvaH.length & rightk.size}`);
   }
   if (5.27 >= lightA) {
      iconrightorangeK = `${videobufferloading9.size | 3}`;
   }
   while (2 <= (videobufferloading9.size % (Math.max(iconrightorangeK.length, 2)))) {
       let pressure5 = false;
       let assistV = 4.0;
         pressure5 = !pressure5;
      for (let m = 0; m < 1; m++) {
         pressure5 = !pressure5;
      }
          let iconwatch5 = 1.0;
          let exampleimagem = 4.0;
          let utilsB = String.fromCharCode(109,111,118,101,112,97,103,101,0);
         pressure5 = 45.63 <= iconwatch5;
         iconwatch5 /= Math.max(parseFloat(`${parseInt(`${exampleimagem}`)}`), 2);
         exampleimagem *= parseFloat(`${utilsB.length}`);
         utilsB += `${parseInt(`${exampleimagem}`)}`;
         assistV /= Math.max(4, ((pressure5 ? 2 : 3) ^ parseInt(`${assistV}`)));
      let common8 = pressure5 ? !pressure5 : pressure5;
      do {
         pressure5 = !pressure5 || 21.10 <= assistV;
         if (common8) {
            break;
         }
      } while ((pressure5 || 1.0 > (3.86 / (Math.max(2, assistV)))) && common8);
         assistV -= ((pressure5 ? 4 : 4) << (Math.min(Math.abs(parseInt(`${assistV}`)), 5)));
      videobufferloading9.set(armvaH, armvaH.length << (Math.min(2, Math.abs(parseInt(`${lightA}`)))));
      break;
   }
   if (armvaH != smallorangeman7) {
      smallorangeman7 += `${armvaH.length / (Math.max(1, 4))}`;
   }

    clearTimeout(iconTimer.current);

   while ((smallorangeman7.length ^ 2) >= 5 || (smallorangeman7.length << (Math.min(Math.abs(2), 3))) >= 4) {
      lightA /= Math.max(2, parseFloat(`${1}`));
      break;
   }
   if (3 == armvaH.length) {
       let umengm = 4.0;
       let tempnodatag = false;
       let scoreF = 2;
      for (let g = 0; g < 1; g++) {
          let firebaseH = 5.0;
          let yingy: Array<any> = [891, 124, 513];
          let stats8 = 3.0;
         tempnodatag = scoreF <= 100 || umengm <= 43.51;
         firebaseH -= parseFloat(`${1 - yingy.length}`);
         yingy = [3];
         stats8 -= parseFloat(`${2 | parseInt(`${stats8}`)}`);
      }
      if (1.41 <= (1.84 + umengm)) {
          let t_titleE = 4.0;
         umengm -= parseFloat(`${2 - parseInt(`${umengm}`)}`);
         t_titleE += parseFloat(`${parseInt(`${t_titleE}`) % (Math.max(7, parseInt(`${t_titleE}`)))}`);
      }
         tempnodatag = 7 >= scoreF && umengm >= 62.12;
      for (let o = 0; o < 2; o++) {
         umengm += (parseFloat(`${(tempnodatag ? 2 : 5) ^ parseInt(`${umengm}`)}`));
      }
         tempnodatag = 46 >= scoreF;
      for (let x = 0; x < 2; x++) {
          let iconviewergifm = 0;
          let hometeamfielda = 4;
          let libreanimatedb = String.fromCharCode(111,112,116,105,109,105,115,109,0);
          let questO = String.fromCharCode(102,117,108,108,121,0);
          let libavformatC: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,105,110,116,101,114,0),String.fromCharCode(113,116,114,108,101,0)], [String.fromCharCode(99,111,110,115,116,114,97,105,110,0),String.fromCharCode(115,101,116,117,112,0)], [String.fromCharCode(103,101,111,98,116,97,103,0),String.fromCharCode(114,101,103,0)]]);
         scoreF <<= Math.min(5, Math.abs(1));
         iconviewergifm ^= iconviewergifm;
         hometeamfielda *= 1;
         libreanimatedb = "2";
         questO += `${iconviewergifm ^ 1}`;
         libavformatC.set(`${iconviewergifm}`, iconviewergifm);
      }
      for (let l = 0; l < 2; l++) {
         scoreF /= Math.max((scoreF * (tempnodatag ? 4 : 2)), 5);
      }
         scoreF += 1;
          let libyogaG = String.fromCharCode(114,101,98,117,99,107,101,116,0);
          let fieldZ = 5;
          let roomQ = 5.0;
         scoreF &= 2;
         libyogaG += `${parseInt(`${roomQ}`) << (Math.min(1, Math.abs(1)))}`;
         fieldZ += 3 ^ fieldZ;
         roomQ -= parseFloat(`${2}`);
      armvaH = "3";
   }
      snewarchdefaultsB = new Map([[`${faviconq.size}`, faviconq.size << (Math.min(Math.abs(3), 2))]]);
       let listf = 4.0;
       let rewindR = 2;
       let largesoundC = String.fromCharCode(101,120,116,101,110,100,0);
      while (3.5 < (4.3 + listf) || 4.3 < (listf + rewindR)) {
         listf += (String.fromCharCode(66,0) == largesoundC ? rewindR : largesoundC.length);
         break;
      }
         rewindR >>= Math.min(5, Math.abs(3));
         largesoundC += "3";
      if ((listf + 5.18) == 1.28 && (2 >> (Math.min(4, largesoundC.length))) == 4) {
          let libbufferg = String.fromCharCode(102,97,116,97,108,0);
         listf += rewindR;
         libbufferg = `${libbufferg.length}`;
      }
         listf /= Math.max(5, parseInt(`${listf}`) >> (Math.min(largesoundC.length, 4)));
      for (let m = 0; m < 1; m++) {
          let overlayE = 5.0;
          let imagemanagerg = String.fromCharCode(109,97,110,105,102,101,115,116,0);
          let statsT: Array<any> = [200, 366];
          let linku = String.fromCharCode(98,97,99,107,117,112,0);
         largesoundC += `${1 + largesoundC.length}`;
         overlayE *= parseFloat(`${statsT.length}`);
         imagemanagerg = `${linku.length | 3}`;
         statsT.push(1);
         linku = "1";
      }
         rewindR -= 2;
          let umengW = false;
         listf += ((umengW ? 4 : 5) >> (Math.min(largesoundC.length, 4)));
      if (4 < (2 * rewindR) || (rewindR * 2) < 1) {
         largesoundC += "3";
      }
      smallorangeman7 = `${armvaH.length}`;
   let gestureJ = linkf == String.fromCharCode(121,120,99,116,106,56,57,114,113,53,0);
   do {
      linkf += `${((render0 ? 3 : 5) << (Math.min(Math.abs(parseInt(`${lightA}`)), 1)))}`;
      if (gestureJ) {
         break;
      }
   } while ((iconrightorangeK == linkf) && gestureJ);
    setShowIcon(true);

   let chatroombackgroundM = 7706475 >= iconrightorangeK.length;
   do {
      iconrightorangeK += `${faviconq.size}`;
      if (chatroombackgroundM) {
         break;
      }
   } while ((!iconrightorangeK.startsWith(`${render0}`)) && chatroombackgroundM);
   if (armvaH.length == 4) {
      armvaH += `${1 - iconrightorangeK.length}`;
   }
       let footballtrophyV = String.fromCharCode(108,97,121,111,117,116,0);
       let runtimeschedulerr = false;
       let pointO = String.fromCharCode(103,101,116,120,115,115,101,0);
       let membershipj: Array<any> = [411, 61];
       let flyerF: Array<any> = [830, 635, 750];
       let membershipJ = 0;
          let logoutJ = String.fromCharCode(102,105,108,108,101,100,0);
          let libswresamplen = String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,0);
          let minim: Array<any> = [698, 856, 709];
         footballtrophyV = "3";
         logoutJ += "3";
         libswresamplen = "1";
         minim.push(libswresamplen.length);
          let macauO = false;
          let yellowM = String.fromCharCode(99,108,117,116,0);
          let collectionL: Array<any> = [357, 978, 446];
         membershipj = [membershipj.length << (Math.min(collectionL.length, 4))];
         macauO = (((macauO ? 56 : yellowM.length) & yellowM.length) > 56);
         collectionL.push(((macauO ? 5 : 5)));
       let point5 = String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,0);
       let next6 = String.fromCharCode(108,111,116,116,105,101,0);
          let iconwechatV = false;
          let main_iW = true;
          let episodeh = 1.0;
         next6 += `${footballtrophyV.length}`;
         iconwechatV = 56.93 >= episodeh;
         main_iW = (main_iW ? !iconwechatV : main_iW);
         episodeh /= Math.max(5, (parseFloat(`${parseInt(`${episodeh}`) ^ (main_iW ? 5 : 2)}`)));
         membershipj.push(2);
          let icon7 = true;
          let kleviny = String.fromCharCode(100,101,99,111,100,105,110,103,0);
         membershipj.push((point5 == String.fromCharCode(52,0) ? membershipJ : point5.length));
         icon7 = !kleviny.startsWith(`${icon7}`);
         kleviny = `${kleviny.length}`;
      for (let m = 0; m < 1; m++) {
          let phoneshared: Array<any> = [836, 878];
         runtimeschedulerr = next6 == pointO;
         phoneshared.push(2 % (Math.max(5, phoneshared.length)));
      }
      render0 = pointO == linkf;
      faviconq = new Map([[`${render0}`, (2 ^ (render0 ? 4 : 1))]]);
   while (4 > iconrightorangeK.length && render0) {
      render0 = (armvaH.length >> (Math.min(3, Math.abs(snewarchdefaultsB.size)))) > 68;
      break;
   }
    if (isPause) {

   for (let v = 0; v < 3; v++) {
      linkf += "3";
   }
      iconrightorangeK = "2";
       let giftx = false;
       let macaum = true;
       let suggestiont: Map<any, any> = new Map([[String.fromCharCode(117,110,99,108,97,109,112,101,100,0),365], [String.fromCharCode(114,116,112,101,110,99,0),962], [String.fromCharCode(115,99,114,111,108,108,105,110,103,0),102]]);
         macaum = suggestiont.size >= 3;
      let textlayoutmanagerh = giftx ? !giftx : giftx;
      do {
          let tempo = true;
          let crownu = 3.0;
          let libavutilc = 5;
          let telegramj = String.fromCharCode(114,101,97,100,0);
         giftx = telegramj.length < 36 || !tempo;
         tempo = 96 >= (crownu * libavutilc);
         crownu += parseFloat(`${parseInt(`${crownu}`)}`);
         libavutilc >>= Math.min(Math.abs(2 & libavutilc), 4);
         telegramj = `${parseInt(`${crownu}`)}`;
         if (textlayoutmanagerh) {
            break;
         }
      } while (textlayoutmanagerh && (2 >= (suggestiont.size >> (Math.min(Math.abs(1), 1)))));
          let gesturesx = true;
         giftx = !macaum;
         gesturesx = (gesturesx ? !gesturesx : !gesturesx);
         macaum = !giftx;
       let refreshx = String.fromCharCode(102,105,108,109,0);
       let projectj = String.fromCharCode(118,115,102,114,97,109,101,0);
       let penaltyshootk = String.fromCharCode(106,100,115,97,109,112,108,101,0);
       let mimeg = false;
       let complete8 = false;
      for (let k = 0; k < 3; k++) {
         giftx = (refreshx.length * suggestiont.size) == 77;
      }
          let shareS = 0;
          let nativemodules = 5;
          let sportr = String.fromCharCode(108,111,103,103,105,110,103,0);
         penaltyshootk += `${(sportr == String.fromCharCode(81,0) ? sportr.length : suggestiont.size)}`;
         shareS += 3 << (Math.min(1, Math.abs(shareS)));
         nativemodules /= Math.max(4, nativemodules & 2);
      iconrightorangeK = `${(String.fromCharCode(53,0) == armvaH ? videobufferloading9.size : armvaH.length)}`;
   let mappingp = render0 ? !render0 : render0;
   do {
       let awayicon9 = 5;
          let episodeR = false;
         awayicon9 ^= awayicon9 >> (Math.min(5, Math.abs(1)));
         episodeR = (!episodeR ? episodeR : !episodeR);
      for (let u = 0; u < 2; u++) {
          let sharewhiteL = String.fromCharCode(108,101,118,101,108,0);
          let klevinU = String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,0);
          let airbnbstar5: Map<any, any> = new Map([[String.fromCharCode(97,118,102,105,108,116,101,114,0),318], [String.fromCharCode(107,98,105,116,0),506], [String.fromCharCode(110,101,115,116,101,100,0),229]]);
          let halfb = 5.0;
         awayicon9 <<= Math.min(4, Math.abs(awayicon9));
         sharewhiteL = `${klevinU.length}`;
         klevinU += `${parseInt(`${halfb}`) * airbnbstar5.size}`;
         airbnbstar5.set(sharewhiteL, parseInt(`${halfb}`));
      }
         awayicon9 *= awayicon9;
      render0 = 2 <= armvaH.length;
      if (mappingp) {
         break;
      }
   } while ((!iconrightorangeK.endsWith(`${render0}`)) && mappingp);
      smallorangeman7 += "2";
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    else {

       let iconuserD = 0.0;
       let toponq = String.fromCharCode(107,105,116,116,121,0);
      if ((iconuserD / 3.53) == 1.54) {
         iconuserD -= parseFloat(`${parseInt(`${iconuserD}`) * toponq.length}`);
      }
       let usernameO = 1;
       let floatingA = 5;
      if ((toponq.length << (Math.min(5, Math.abs(floatingA)))) > 2 && (floatingA << (Math.min(Math.abs(2), 3))) > 1) {
         toponq += "2";
      }
      for (let h = 0; h < 2; h++) {
         toponq += "1";
      }
      if ((usernameO + 1) <= 4 || 2.0 <= (iconuserD / 4.64)) {
         iconuserD /= Math.max(parseFloat(`${3 + floatingA}`), 4);
      }
          let libavformatG = false;
         iconuserD -= parseFloat(`${toponq.length}`);
         libavformatG = (libavformatG ? !libavformatG : libavformatG);
      videobufferloading9 = new Map([[`${lightA}`, armvaH.length ^ 2]]);
   for (let p = 0; p < 2; p++) {
      lightA += parseFloat(`${iconrightorangeK.length}`);
   }
      armvaH += `${snewarchdefaultsB.size / 3}`;
   while (iconrightorangeK.length > 4) {
      lightA *= parseFloat(`${smallorangeman7.length}`);
      break;
   }
       let borderlessu: Map<any, any> = new Map([[String.fromCharCode(115,116,97,108,108,0),String.fromCharCode(109,98,104,115,0)], [String.fromCharCode(116,104,101,105,114,0),String.fromCharCode(116,107,104,100,0)], [String.fromCharCode(97,114,103,0),String.fromCharCode(105,110,116,101,114,108,97,99,101,0)]]);
       let iconclosewhitewithbgr: Map<any, any> = new Map([[String.fromCharCode(99,116,105,118,105,116,121,0),String.fromCharCode(116,97,112,101,0)], [String.fromCharCode(114,101,103,105,115,116,101,114,101,114,0),String.fromCharCode(99,111,118,114,0)], [String.fromCharCode(114,101,99,114,101,97,116,101,0),String.fromCharCode(111,110,101,99,104,0)]]);
       let constants5: Map<any, any> = new Map([[String.fromCharCode(109,101,115,97,103,101,0),383], [String.fromCharCode(100,101,115,99,101,110,116,0),7], [String.fromCharCode(103,101,116,97,115,115,111,99,105,100,0),213]]);
      while (2 >= (iconclosewhitewithbgr.size + constants5.size) || (iconclosewhitewithbgr.size + constants5.size) >= 2) {
         iconclosewhitewithbgr.set(`${borderlessu.size}`, borderlessu.size - iconclosewhitewithbgr.size);
         break;
      }
       let uimanager9 = String.fromCharCode(105,100,99,116,0);
       let reducerA = String.fromCharCode(111,114,100,101,114,105,110,103,0);
      snewarchdefaultsB.set(`${iconrightorangeK}`, 3);
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let bootsplashp = false;
    let unimplementedviewu = String.fromCharCode(110,118,101,110,99,0);
    let b_unlockR = 3;
    let scrollview8 = String.fromCharCode(112,114,111,109,111,116,101,0);
    let checkboxw = 4.0;
    let libnmsU = String.fromCharCode(98,111,117,110,99,105,110,103,0);
    let gpayG = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
    let nativea = 3.0;
    let mbsplashm = 1.0;
    let iconmore2 = 4.0;
    let topicz = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,0);
    let search1 = String.fromCharCode(98,105,116,115,116,114,105,110,103,0);
    let thailand4 = 2;
    let inewinterstitial0 = 3.0;
      b_unlockR *= libnmsU.length ^ 3;
      gpayG = "2";
   for (let c = 0; c < 3; c++) {
      mbsplashm *= parseFloat(`${unimplementedviewu.length}`);
   }
   if (!bootsplashp) {
      bootsplashp = iconmore2 == scrollview8.length;
   }
       let huaweiq = 4.0;
       let iconarrowrightorangeM = 3.0;
         iconarrowrightorangeM -= parseInt(`${huaweiq}`);
         iconarrowrightorangeM -= parseInt(`${huaweiq}`);
      checkboxw *= parseFloat(`${b_unlockR + 1}`);
   while (unimplementedviewu != String.fromCharCode(107,0)) {
      search1 += `${2 & parseInt(`${iconmore2}`)}`;
      break;
   }
   let recommendationJ = bootsplashp ? !bootsplashp : bootsplashp;
   do {
       let zhuboI = 0.0;
       let modelsO = false;
       let graphicsQ = 2.0;
         modelsO = graphicsQ <= 78.66;
      for (let x = 0; x < 2; x++) {
          let mapping8 = String.fromCharCode(110,101,103,97,116,101,100,0);
          let tempnodataq = 1.0;
          let buildP = String.fromCharCode(112,114,105,109,97,114,105,101,115,0);
          let trophyB: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,0),938], [String.fromCharCode(112,114,111,103,114,97,109,0),149]]);
         zhuboI -= (parseFloat(`${buildP == String.fromCharCode(116,0) ? buildP.length : parseInt(`${tempnodataq}`)}`));
         mapping8 += "2";
         tempnodataq -= parseFloat(`${1 * trophyB.size}`);
         trophyB.set(`${mapping8}`, trophyB.size);
      }
         modelsO = !modelsO && 73.80 > graphicsQ;
         zhuboI *= (parseFloat(`${(modelsO ? 2 : 2) << (Math.min(Math.abs(parseInt(`${graphicsQ}`)), 2))}`));
          let ying4 = String.fromCharCode(114,101,115,105,100,117,97,108,115,0);
          let logoM = true;
          let danger2: Array<any> = [675, 822];
         graphicsQ += ((logoM ? 2 : 3));
         ying4 = `${2 << (Math.min(5, ying4.length))}`;
         logoM = ying4.length > 37;
         danger2.push(1);
      bootsplashp = b_unlockR == 74;
      if (recommendationJ) {
         break;
      }
   } while (recommendationJ && (gpayG.includes(`${bootsplashp}`)));
      iconmore2 *= ((bootsplashp ? 4 : 1) % (Math.max(parseInt(`${nativea}`), 9)));
      topicz += `${3 >> (Math.min(1, gpayG.length))}`;
   if (!unimplementedviewu.endsWith(`${b_unlockR}`)) {
      b_unlockR -= ((bootsplashp ? 2 : 3) / (Math.max(2, search1.length)));
   }
   let libavfilterM = 8762115.0 >= mbsplashm;
   do {
       let iconsettingk = 3.0;
       let network8: Array<any> = [543, 138];
       let statsi: Map<any, any> = new Map([[String.fromCharCode(102,95,49,51,0),667], [String.fromCharCode(113,115,99,97,108,101,113,112,0),328], [String.fromCharCode(119,114,97,112,112,101,100,0),905]]);
          let gesturesG: Map<any, any> = new Map([[String.fromCharCode(111,114,97,110,103,101,0),561], [String.fromCharCode(98,105,116,120,0),630], [String.fromCharCode(99,111,114,100,122,0),266]]);
          let reactnavigatione = 3;
          let editv = true;
         network8 = [2];
         gesturesG = new Map([[`${gesturesG.size}`, 1 & gesturesG.size]]);
         reactnavigatione /= Math.max((reactnavigatione | (editv ? 3 : 1)), 3);
         editv = gesturesG.size >= 32;
          let orange9 = String.fromCharCode(114,111,113,118,105,100,101,111,0);
          let commentV = 1.0;
         statsi = new Map([[`${statsi.size}`, statsi.size / (Math.max(network8.length, 8))]]);
         orange9 = `${orange9.length}`;
         commentV += 1;
         network8 = [1];
       let champions = 1.0;
      while (champions < 2.64) {
         champions *= 3;
         break;
      }
         statsi = new Map([[`${champions}`, parseInt(`${champions}`) * parseInt(`${iconsettingk}`)]]);
         statsi = new Map([[`${network8.length}`, network8.length]]);
         statsi = new Map([[`${champions}`, parseInt(`${iconsettingk}`)]]);
      for (let i = 0; i < 2; i++) {
          let libtobf = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,115,0);
         statsi.set(`${iconsettingk}`, (String.fromCharCode(95,0) == libtobf ? libtobf.length : parseInt(`${iconsettingk}`)));
      }
      mbsplashm -= parseFloat(`${network8.length + 2}`);
      if (libavfilterM) {
         break;
      }
   } while ((bootsplashp) && libavfilterM);
   for (let s = 0; s < 1; s++) {
      b_unlockR |= parseInt(`${iconmore2}`) % (Math.max(3, scrollview8.length));
   }
       let modulet = String.fromCharCode(102,114,101,105,114,0);
       let flipperH = 5.0;
         flipperH -= parseInt(`${flipperH}`) / (Math.max(modulet.length, 5));
         modulet += `${modulet.length & parseInt(`${flipperH}`)}`;
         modulet = `${(modulet == String.fromCharCode(112,0) ? modulet.length : parseInt(`${flipperH}`))}`;
       let overlayE = 3.0;
       let register_ncU = 3.0;
         register_ncU -= parseInt(`${overlayE}`);
          let rewindk: Map<any, any> = new Map([[String.fromCharCode(107,97,108,109,97,110,0),589], [String.fromCharCode(100,101,97,100,108,105,110,101,0),91], [String.fromCharCode(101,120,116,101,110,100,101,100,0),547]]);
          let selects: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,109,101,0),true ], [String.fromCharCode(97,110,99,104,111,114,0),false ]]);
          let verticalT = String.fromCharCode(99,111,109,112,97,114,97,98,108,101,0);
         overlayE -= selects.size ^ modulet.length;
         rewindk.set(`${verticalT}`, 1);
         selects.set(verticalT, 1);
      b_unlockR /= Math.max(3, 3);
      topicz = `${parseInt(`${nativea}`) + gpayG.length}`;

    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
       let graphP = String.fromCharCode(116,111,108,101,114,97,110,99,101,0);
    let utilsi = 1.0;
    let basea = String.fromCharCode(115,117,109,109,97,114,121,0);
    let feedbackP = String.fromCharCode(116,105,99,107,0);
    let mbsplashH: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,109,101,110,116,0),String.fromCharCode(112,114,101,118,101,110,116,115,0)], [String.fromCharCode(108,111,119,101,114,99,97,115,101,100,0),String.fromCharCode(101,115,112,111,110,100,101,114,0)]]);
    let short_r74 = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,0);
    let dropdownt = 2;
    let exampleimagen: Array<any> = [172, 815];
    let background7 = 5.0;
    let zoom2: Array<any> = [860, 886];
    let with__p = String.fromCharCode(113,100,109,100,97,116,97,0);
    let injuryr = 1;
      basea += `${1 % (Math.max(8, feedbackP.length))}`;
   let androidT = 9524954.0 >= utilsi;
   do {
      utilsi -= parseInt(`${background7}`) ^ dropdownt;
      if (androidT) {
         break;
      }
   } while (androidT && (!feedbackP.includes(`${utilsi}`)));
       let sellmathbackgroundK = String.fromCharCode(105,110,116,101,114,110,0);
       let windk = false;
      if (!windk || sellmathbackgroundK.length <= 5) {
          let mappingI: Array<any> = [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,0), String.fromCharCode(119,97,110,116,115,0)];
         windk = (49 >= (sellmathbackgroundK.length << (Math.min(1, Math.abs((!windk ? 49 : sellmathbackgroundK.length))))));
         mappingI = [2 / (Math.max(5, mappingI.length))];
      }
          let single7 = 0;
         sellmathbackgroundK = "3";
         single7 >>= Math.min(1, Math.abs(1));
      let sentryN = sellmathbackgroundK == String.fromCharCode(113,108,113,102,103,103,118,103,106,113,0);
      do {
         sellmathbackgroundK += "2";
         if (sentryN) {
            break;
         }
      } while ((!windk || 2 < sellmathbackgroundK.length) && sentryN);
       let placeholdert = String.fromCharCode(112,117,98,108,105,115,104,101,100,0);
          let searchi = String.fromCharCode(110,97,110,111,115,0);
          let screenL = String.fromCharCode(103,101,110,115,0);
         sellmathbackgroundK += `${(String.fromCharCode(121,0) == sellmathbackgroundK ? (windk ? 2 : 3) : sellmathbackgroundK.length)}`;
         searchi = `${searchi.length}`;
         screenL = `${(String.fromCharCode(98,0) == searchi ? searchi.length : screenL.length)}`;
      if (!placeholdert.includes(sellmathbackgroundK)) {
         placeholdert += `${((windk ? 3 : 1))}`;
      }
      short_r74 += `${(String.fromCharCode(86,0) == short_r74 ? basea.length : short_r74.length)}`;

    if (isBodanRef.current) {

      dropdownt *= 1;
   while ((short_r74.length + 3) >= 3) {
      utilsi += exampleimagen.length;
      break;
   }
   while (3 < zoom2.length) {
      background7 *= parseFloat(`${zoom2.length * parseInt(`${background7}`)}`);
      break;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

      mbsplashH.set(short_r74, 2 / (Math.max(6, zoom2.length)));
      dropdownt *= (basea == String.fromCharCode(107,0) ? parseInt(`${utilsi}`) : basea.length);
   if (4.87 == background7) {
       let storeO = 3.0;
       let attributedstringv = false;
       let verticalZ: Map<any, any> = new Map([[String.fromCharCode(103,101,116,0),259], [String.fromCharCode(114,101,113,117,105,117,114,101,115,0),522]]);
       let libfollyX: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,115,116,101,112,0),73], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,0),872]]);
       let selectD = String.fromCharCode(114,97,110,107,0);
      let cedbadcebfbfbfbcfecbce = attributedstringv ? !attributedstringv : attributedstringv;
      do {
         attributedstringv = libfollyX.size >= 69 && attributedstringv;
         if (cedbadcebfbfbfbcfecbce) {
            break;
         }
      } while (cedbadcebfbfbfbcfecbce && (!attributedstringv));
       let unselectedI = String.fromCharCode(97,99,99,117,114,97,116,101,0);
         storeO += ((attributedstringv ? 5 : 2) ^ 1);
          let iconscheduleN = String.fromCharCode(100,101,97,99,116,0);
          let groupD = 2;
          let optionsJ = String.fromCharCode(115,108,102,0);
         libfollyX.set(`${attributedstringv}`, (2 ^ (attributedstringv ? 1 : 4)));
         iconscheduleN += `${optionsJ.length}`;
         groupD /= Math.max(2, 1);
         optionsJ += "1";
         unselectedI += `${(2 / (Math.max(6, (attributedstringv ? 4 : 3))))}`;
         verticalZ.set(selectD, (selectD == String.fromCharCode(100,0) ? selectD.length : verticalZ.size));
       let soundz = String.fromCharCode(105,99,109,112,0);
       let iconarrowrighte = true;
      let libapminsightbJ = unselectedI == String.fromCharCode(104,103,121,101,97,97,0);
      do {
          let rewardvideoT = true;
          let rocketp = String.fromCharCode(113,109,98,108,0);
          let libmapbufferjniL = String.fromCharCode(116,114,97,106,101,99,116,111,114,121,0);
         unselectedI += `${((rewardvideoT ? 1 : 1))}`;
         rewardvideoT = 41 <= rocketp.length || libmapbufferjniL.length <= 41;
         rocketp = "3";
         libmapbufferjniL += `${(String.fromCharCode(88,0) == libmapbufferjniL ? rocketp.length : libmapbufferjniL.length)}`;
         if (libapminsightbJ) {
            break;
         }
      } while (((unselectedI.length - 3) > 1 && (parseInt(`${storeO}`) / (Math.max(unselectedI.length, 8))) > 3) && libapminsightbJ);
          let circleH = String.fromCharCode(115,97,118,101,100,0);
          let cornershootf = 1;
         libfollyX = new Map([[`${verticalZ.size}`, (String.fromCharCode(75,0) == soundz ? verticalZ.size : soundz.length)]]);
         circleH = "3";
         cornershootf |= 2;
      if (selectD.endsWith(`${iconarrowrighte}`)) {
         selectD = "3";
      }
          let predictionbannern = 0.0;
          let fullscreenminv: Map<any, any> = new Map([[String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,0),824], [String.fromCharCode(116,109,105,120,0),464]]);
         selectD += `${parseInt(`${predictionbannern}`) ^ 1}`;
         predictionbannern += parseFloat(`${fullscreenminv.size}`);
         fullscreenminv.set(`${fullscreenminv.size}`, fullscreenminv.size & 2);
          let eabafadfadddbafeddddeeefeaafH = 5;
          let promotionp = String.fromCharCode(114,101,116,114,105,101,115,0);
         iconarrowrighte = promotionp.length > 4;
         eabafadfadddbafeddddeeefeaafH ^= eabafadfadddbafeddddeeefeaafH >> (Math.min(4, Math.abs(eabafadfadddbafeddddeeefeaafH)));
         promotionp = "3";
      if (!iconarrowrighte) {
         iconarrowrighte = attributedstringv;
      }
          let imagemanagerZ = 2.0;
          let navigationG = String.fromCharCode(97,99,104,105,101,118,101,100,0);
          let basketballawayteam2 = String.fromCharCode(97,112,111,115,0);
         iconarrowrighte = 42 < soundz.length;
         imagemanagerZ *= parseFloat(`${parseInt(`${imagemanagerZ}`) * 1}`);
         navigationG = `${basketballawayteam2.length % (Math.max(navigationG.length, 7))}`;
         basketballawayteam2 += `${basketballawayteam2.length << (Math.min(Math.abs(1), 1))}`;
      basea = `${(String.fromCharCode(48,0) == feedbackP ? feedbackP.length : basea.length)}`;
   }
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

      zoom2.push(short_r74.length ^ parseInt(`${background7}`));
      short_r74 += `${zoom2.length ^ basea.length}`;
      dropdownt *= graphP.length;

      

   while (4.48 > utilsi) {
      short_r74 = `${parseInt(`${utilsi}`)}`;
      break;
   }
   while (1 <= (2 ^ short_r74.length)) {
      utilsi *= 2 >> (Math.min(2, short_r74.length));
      break;
   }
      utilsi += 2;
      mayi_push.watchAnytimePlaylistClicksAnalytics();
      
    } else {

      mbsplashH = new Map([[`${exampleimagen.length}`, short_r74.length]]);
      mbsplashH = new Map([[`${zoom2.length}`, zoom2.length]]);
   let sortC = String.fromCharCode(109,114,54,113,122,116,0) == with__p;
   do {
       let greyP: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,100,0),false ], [String.fromCharCode(98,105,97,115,101,100,0),true ], [String.fromCharCode(112,114,101,102,101,114,114,101,100,0),true ]]);
       let bufferf = 2.0;
       let trashd = String.fromCharCode(102,111,110,116,115,105,122,101,0);
       let soundU = String.fromCharCode(100,111,116,108,111,99,107,0);
          let roomA = 4;
         trashd += `${roomA << (Math.min(trashd.length, 2))}`;
      let videocommonY = 6633122.0 <= bufferf;
      do {
          let hoverE = 0.0;
          let auto_oq: Array<any> = [127, 444, 198];
          let s_lockQ = 0;
          let libreactM = false;
          let homeloading2 = String.fromCharCode(97,110,97,108,121,122,105,110,103,0);
         bufferf += 3;
         hoverE -= parseFloat(`${1 & parseInt(`${hoverE}`)}`);
         auto_oq.push(s_lockQ);
         s_lockQ ^= ((libreactM ? 4 : 3) * 1);
         libreactM = 5 == auto_oq.length;
         homeloading2 = `${((libreactM ? 1 : 5) * auto_oq.length)}`;
         if (videocommonY) {
            break;
         }
      } while (videocommonY && ((greyP.size / 1) < 2));
         greyP = new Map([[`${greyP.size}`, 3]]);
      if (2 < (3 - soundU.length) || (soundU.length - greyP.size) < 3) {
         greyP = new Map([[trashd, (trashd == String.fromCharCode(54,0) ? trashd.length : parseInt(`${bufferf}`))]]);
      }
          let backwhitex = 1;
         trashd = `${soundU.length}`;
         backwhitex -= 1 << (Math.min(1, Math.abs(backwhitex)));
      while (2 > (greyP.size ^ 3)) {
          let iconstarM = String.fromCharCode(116,104,97,119,0);
          let colors0: Map<any, any> = new Map([[String.fromCharCode(104,111,114,105,122,0),912], [String.fromCharCode(102,97,116,101,0),921], [String.fromCharCode(107,101,121,0),873]]);
         greyP = new Map([[`${bufferf}`, parseInt(`${bufferf}`)]]);
         iconstarM += `${colors0.size ^ iconstarM.length}`;
         colors0.set(`${iconstarM}`, iconstarM.length + 2);
         break;
      }
      let release_3c = 5210613 >= greyP.size;
      do {
          let mountingz: Map<any, any> = new Map([[String.fromCharCode(105,110,102,101,114,0),114], [String.fromCharCode(101,109,117,108,97,116,101,0),470]]);
          let defaultfootballbgg: Array<any> = [144, 755, 93];
          let crossu: Map<any, any> = new Map([[String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0),960], [String.fromCharCode(99,111,109,112,97,99,116,101,100,0),477], [String.fromCharCode(118,99,111,100,101,99,0),21]]);
         greyP = new Map([[`${crossu.size}`, mountingz.size]]);
         mountingz = new Map([[`${defaultfootballbgg.length}`, 1 & defaultfootballbgg.length]]);
         if (release_3c) {
            break;
         }
      } while (((bufferf - 3.70) > 2.70 && 4 > (parseInt(`${bufferf}`) - greyP.size)) && release_3c);
         soundU = `${parseInt(`${bufferf}`)}`;
         soundU += `${soundU.length % 3}`;
          let executor6 = false;
          let sourceT: Array<any> = [515, 811];
         soundU = "2";
         executor6 = !executor6;
         sourceT.push((sourceT.length & (executor6 ? 2 : 1)));
      let typingZ = trashd == String.fromCharCode(50,57,53,118,98,0);
      do {
          let membershipp = 1.0;
          let latnN = String.fromCharCode(101,120,116,109,97,112,0);
          let mailJ = String.fromCharCode(116,119,111,112,97,115,115,0);
          let topicr = 2.0;
          let statisticsinactiveY = 5.0;
         trashd = `${parseInt(`${statisticsinactiveY}`) ^ parseInt(`${topicr}`)}`;
         membershipp /= Math.max(5, mailJ.length);
         latnN = `${latnN.length / (Math.max(2, 8))}`;
         mailJ += `${mailJ.length}`;
         topicr /= Math.max(2, (String.fromCharCode(79,0) == latnN ? latnN.length : mailJ.length));
         statisticsinactiveY -= latnN.length;
         if (typingZ) {
            break;
         }
      } while (typingZ && ((3 | trashd.length) > 4 || (3 * parseInt(`${bufferf}`)) > 3));
      let malaysiaK = 5314357.0 >= bufferf;
      do {
         bufferf -= 2;
         if (malaysiaK) {
            break;
         }
      } while ((5 == (greyP.size - 1) && 1 == (1 * greyP.size)) && malaysiaK);
      with__p += `${basea.length}`;
      if (sortC) {
         break;
      }
   } while ((short_r74.length == 2) && sortC);
      dispatch(playVod(currentVod.mini_video_vod));

   if (feedbackP != String.fromCharCode(108,0)) {
       let placeholders: Map<any, any> = new Map([[String.fromCharCode(115,104,97,107,101,0),536], [String.fromCharCode(114,103,101,110,0),469]]);
          let mimen = String.fromCharCode(116,114,105,97,110,103,108,101,0);
          let bootsplashG = String.fromCharCode(111,110,116,114,97,115,116,0);
          let cancelr = String.fromCharCode(97,110,97,108,121,115,101,0);
         placeholders = new Map([[`${placeholders.size}`, 3 >> (Math.min(2, Math.abs(placeholders.size)))]]);
         mimen = `${cancelr.length * bootsplashG.length}`;
         bootsplashG += `${1 & mimen.length}`;
         cancelr = `${2 | bootsplashG.length}`;
          let macauI = String.fromCharCode(112,114,101,118,101,110,116,0);
          let buttonf: Array<any> = [287, 775];
         placeholders.set(`${macauI}`, macauI.length);
         buttonf = [buttonf.length];
      for (let e = 0; e < 3; e++) {
         placeholders.set(`${placeholders.size}`, placeholders.size | 2);
      }
      graphP = `${short_r74.length}`;
   }
   for (let m = 0; m < 1; m++) {
      utilsi += mbsplashH.size;
   }
   for (let n = 0; n < 2; n++) {
      utilsi /= Math.max(5, dropdownt - mbsplashH.size);
   }
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

       let libfabricjnin = 4;
       let shrinkv = false;
       let popupj = String.fromCharCode(108,115,112,100,108,112,99,0);
       let complete_ = String.fromCharCode(115,116,114,101,97,109,105,110,103,0);
          let cedbadcebfbfbfbcfecbcz = String.fromCharCode(98,101,103,97,110,0);
          let eactE = String.fromCharCode(111,117,116,112,117,116,115,0);
          let vcopy_98T = true;
         popupj = "1";
         cedbadcebfbfbfbcfecbcz = `${eactE.length}`;
         eactE += `${eactE.length}`;
         vcopy_98T = eactE.length == 71 && vcopy_98T;
      let mbjscommonr = shrinkv ? !shrinkv : shrinkv;
      do {
          let plash1 = 0;
          let singaporeM = String.fromCharCode(97,114,99,104,0);
          let iconorientationb = 1;
          let trashE = String.fromCharCode(99,111,112,121,104,0);
          let flyerM = 5.0;
         shrinkv = iconorientationb > 20;
         plash1 -= parseInt(`${flyerM}`);
         singaporeM += `${trashE.length}`;
         iconorientationb <<= Math.min(2, Math.abs(1));
         trashE = "3";
         flyerM *= trashE.length * parseInt(`${flyerM}`);
         if (mbjscommonr) {
            break;
         }
      } while (mbjscommonr && (complete_.length == 4));
         popupj += `${(popupj == String.fromCharCode(49,0) ? popupj.length : (shrinkv ? 2 : 5))}`;
          let iconsubssuccessA = String.fromCharCode(114,97,116,101,0);
          let iconadslinks = 1.0;
         shrinkv = String.fromCharCode(48,0) == popupj;
         iconsubssuccessA = `${iconsubssuccessA.length}`;
         iconadslinks /= Math.max(parseFloat(`${parseInt(`${iconadslinks}`)}`), 3);
          let areaV: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,0),148], [String.fromCharCode(101,120,116,101,110,100,105,110,103,0),136]]);
         libfabricjnin /= Math.max(3 << (Math.min(3, Math.abs(areaV.size))), 5);
      graphP += `${dropdownt / (Math.max(3, short_r74.length))}`;
   for (let o = 0; o < 1; o++) {
      with__p += `${basea.length}`;
   }
       let soundo = false;
       let specD = String.fromCharCode(100,97,116,101,115,0);
         soundo = !soundo;
       let statsnomoredatan = 3.0;
         specD = `${(2 / (Math.max(3, (soundo ? 2 : 5))))}`;
      for (let n = 0; n < 2; n++) {
         statsnomoredatan -= 1 & parseInt(`${statsnomoredatan}`);
      }
      let homeplayerm = statsnomoredatan <= 7714893.0;
      do {
         statsnomoredatan *= ((soundo ? 5 : 5));
         if (homeplayerm) {
            break;
         }
      } while ((soundo) && homeplayerm);
      let leakcheckerR = 9873099 <= specD.length;
      do {
         specD += `${specD.length >> (Math.min(Math.abs(3), 3))}`;
         if (leakcheckerR) {
            break;
         }
      } while (leakcheckerR && (!soundo));
      mbsplashH.set(`${dropdownt}`, 3 - zoom2.length);

      

   let condensedB = injuryr <= 6288627;
   do {
      injuryr += 3;
      if (condensedB) {
         break;
      }
   } while ((mbsplashH.get(`${injuryr}`) != null) && condensedB);
      injuryr >>= Math.min(4, graphP.length);
   if (zoom2.length == with__p.length) {
       let playlistI = String.fromCharCode(111,112,101,114,97,116,105,111,110,115,0);
       let selectg = String.fromCharCode(97,110,105,109,97,116,105,111,110,0);
       let previewJ = String.fromCharCode(104,105,115,116,111,103,114,97,109,115,0);
       let iconclosewhitebgf: Array<any> = [String.fromCharCode(115,109,115,0), String.fromCharCode(117,110,114,101,102,0), String.fromCharCode(109,111,100,117,108,97,116,101,0)];
         playlistI = "3";
      while (playlistI.includes(`${iconclosewhitebgf.length}`)) {
         playlistI += "2";
         break;
      }
       let options9 = 0.0;
      let streamingp = String.fromCharCode(121,52,48,101,0) == selectg;
      do {
          let constantsS = true;
          let settingI: Map<any, any> = new Map([[String.fromCharCode(108,97,116,0),true ], [String.fromCharCode(112,114,101,99,111,109,112,117,116,101,0),true ]]);
         selectg = `${((constantsS ? 3 : 5) % (Math.max(1, 7)))}`;
         constantsS = 6 <= settingI.size || 6 <= settingI.size;
         if (streamingp) {
            break;
         }
      } while ((playlistI == String.fromCharCode(101,0)) && streamingp);
      if (4 == (5 | iconclosewhitebgf.length)) {
          let libfbK: Map<any, any> = new Map([[String.fromCharCode(97,108,97,99,0),String.fromCharCode(111,116,104,101,114,110,97,109,101,0)], [String.fromCharCode(100,111,119,110,115,104,105,102,116,0),String.fromCharCode(99,116,105,109,101,115,116,97,109,112,0)]]);
          let searchbari = String.fromCharCode(111,112,99,111,100,101,115,0);
          let profileu = 4;
         iconclosewhitebgf.push(libfbK.size + profileu);
         libfbK.set(searchbari, (String.fromCharCode(122,0) == searchbari ? searchbari.length : searchbari.length));
      }
      if (previewJ == String.fromCharCode(81,0) && selectg == String.fromCharCode(49,0)) {
         previewJ = `${2 & playlistI.length}`;
      }
      let playU = playlistI.length <= 9183286;
      do {
         playlistI = `${playlistI.length}`;
         if (playU) {
            break;
         }
      } while ((3 == (playlistI.length + 2) || 2 == (playlistI.length - parseInt(`${options9}`))) && playU);
         options9 += 2 + selectg.length;
      zoom2.push(mbsplashH.size);
   }
      mayi_push.watchAnytimeVideoClicksAnalytics();
      
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
       let actionsN: Map<any, any> = new Map([[String.fromCharCode(115,101,116,105,0),false ], [String.fromCharCode(115,117,98,118,105,101,119,115,0),true ], [String.fromCharCode(97,100,100,99,111,110,115,116,0),true ]]);
    let faviconC = 4.0;
    let hookz = 3.0;
    let fastforwardb = String.fromCharCode(116,105,109,101,115,116,97,109,112,0);
    let expired8 = false;
    let showlessk: Map<any, any> = new Map([[String.fromCharCode(99,111,110,100,105,116,105,111,110,0),991], [String.fromCharCode(115,101,112,97,114,97,116,101,0),584], [String.fromCharCode(97,114,112,101,100,0),912]]);
    let iconschedulef: Array<any> = [323, 989];
    let penaltyy: Array<any> = [604, 279, 125];
    let aboutY: Map<any, any> = new Map([[String.fromCharCode(110,111,99,111,108,115,101,116,0),410], [String.fromCharCode(112,114,111,109,105,115,105,102,121,0),868], [String.fromCharCode(102,111,114,109,97,116,0),734]]);
    let selectedv: Array<any> = [966, 576];
    let typing7 = 5.0;
    let defaultfootballbgg = 3.0;
    let hoverM = 0.0;
    let firebasep: Map<any, any> = new Map([[String.fromCharCode(108,108,118,105,100,100,115,112,0),true ], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,0),true ], [String.fromCharCode(112,111,115,105,116,105,111,110,115,0),false ]]);
    let common9 = 5.0;
   if (2 <= selectedv.length) {
      selectedv = [showlessk.size - 1];
   }
       let downloadingC = String.fromCharCode(103,111,111,100,0);
       let movies_ = String.fromCharCode(118,97,114,115,0);
      while (downloadingC == String.fromCharCode(87,0)) {
          let selectedb: Map<any, any> = new Map([[String.fromCharCode(114,101,102,99,111,117,110,116,101,100,0),199], [String.fromCharCode(100,105,110,102,0),584]]);
          let iconstarE: Array<any> = [71, 194, 663];
          let chatk: Map<any, any> = new Map([[String.fromCharCode(97,100,100,101,100,0),908], [String.fromCharCode(114,111,111,116,0),833]]);
         movies_ = `${chatk.size - iconstarE.length}`;
         selectedb.set(`${selectedb.size}`, selectedb.size * selectedb.size);
         iconstarE.push(2 | selectedb.size);
         break;
      }
      let const_7l6 = movies_.length >= 9824993;
      do {
         movies_ = "3";
         if (const_7l6) {
            break;
         }
      } while ((movies_.length <= 3) && const_7l6);
         movies_ += "2";
      while (downloadingC.length > 3) {
         downloadingC += `${1 / (Math.max(9, downloadingC.length))}`;
         break;
      }
      for (let t = 0; t < 2; t++) {
         movies_ = "1";
      }
          let downloaderv = 0;
         movies_ = `${(movies_ == String.fromCharCode(56,0) ? movies_.length : downloadingC.length)}`;
         downloaderv += downloaderv << (Math.min(Math.abs(3), 2));
      hookz *= fastforwardb.length;
   if ((typing7 + 1.41) < 2.11 || 5 < (parseInt(`${typing7}`) + actionsN.size)) {
      actionsN = new Map([[`${aboutY.size}`, selectedv.length]]);
   }
      defaultfootballbgg -= 3;
   if (!expired8) {
      showlessk.set(`${defaultfootballbgg}`, 1 + parseInt(`${defaultfootballbgg}`));
   }
   if (Array.from(aboutY.values()).includes(iconschedulef.length)) {
       let libflippern = String.fromCharCode(109,105,112,115,100,115,112,0);
       let cornerkickU: Array<any> = [841, 297, 959];
       let completeP: Array<any> = [892, 241, 937];
       let lessN = String.fromCharCode(115,117,98,115,116,114,101,97,109,0);
       let adultW = 0;
      while (cornerkickU.length == completeP.length) {
         cornerkickU = [1];
         break;
      }
      let upgradeq = lessN.length <= 8772634;
      do {
         lessN = "3";
         if (upgradeq) {
            break;
         }
      } while ((adultW < lessN.length) && upgradeq);
         libflippern += "3";
         cornerkickU = [lessN.length / 1];
      while (!libflippern.includes(lessN)) {
          let classesy: Map<any, any> = new Map([[String.fromCharCode(114,119,103,116,0),549], [String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,0),695]]);
          let rewardvideoy = String.fromCharCode(103,111,101,114,108,105,0);
         libflippern += `${adultW}`;
         classesy.set(`${rewardvideoy}`, (String.fromCharCode(100,0) == rewardvideoy ? rewardvideoy.length : classesy.size));
         break;
      }
      let downarrowv = libflippern == String.fromCharCode(99,48,99,119,107,51,0);
      do {
          let refreshborderlessc = 1.0;
          let iconarrowrightwhite_ = 0.0;
          let long_51B = 2.0;
         libflippern += `${cornerkickU.length}`;
         refreshborderlessc -= parseFloat(`${2}`);
         iconarrowrightwhite_ *= parseFloat(`${parseInt(`${long_51B}`)}`);
         long_51B += parseFloat(`${parseInt(`${refreshborderlessc}`)}`);
         if (downarrowv) {
            break;
         }
      } while ((5 >= (2 >> (Math.min(4, libflippern.length))) || 3 >= (2 >> (Math.min(3, completeP.length)))) && downarrowv);
      let encryptorE = 5809168 >= cornerkickU.length;
      do {
         cornerkickU.push(cornerkickU.length * 2);
         if (encryptorE) {
            break;
         }
      } while (encryptorE && (cornerkickU.length < 3));
      for (let x = 0; x < 1; x++) {
         cornerkickU = [(lessN == String.fromCharCode(121,0) ? adultW : lessN.length)];
      }
         cornerkickU.push((libflippern == String.fromCharCode(99,0) ? libflippern.length : adultW));
      if (lessN.length > 2) {
         cornerkickU.push(libflippern.length);
      }
          let submitN = 4.0;
          let rewindO: Array<any> = [225, 588];
         completeP.push(3);
         submitN -= parseFloat(`${rewindO.length + 2}`);
         rewindO.push(rewindO.length << (Math.min(1, Math.abs(parseInt(`${submitN}`)))));
      let progressb = completeP.length <= 8507560;
      do {
         completeP = [adultW];
         if (progressb) {
            break;
         }
      } while (progressb && (5 < completeP.length));
         adultW -= libflippern.length;
      for (let i = 0; i < 2; i++) {
         cornerkickU.push(lessN.length & 1);
      }
      while (libflippern.endsWith(`${cornerkickU.length}`)) {
         cornerkickU = [(lessN == String.fromCharCode(121,0) ? adultW : lessN.length)];
         break;
      }
      iconschedulef.push(aboutY.size);
   }
   if ((hoverM * 4.33) < 4.81) {
      aboutY.set(`${typing7}`, ((expired8 ? 3 : 2) - parseInt(`${typing7}`)));
   }
      selectedv = [2 + firebasep.size];
      fastforwardb = `${showlessk.size}`;
   if (Array.from(actionsN.values()).includes(faviconC)) {
      faviconC /= Math.max(3, 3);
   }
      hookz -= penaltyy.length + aboutY.size;
   for (let t = 0; t < 3; t++) {
      aboutY.set(`${faviconC}`, parseInt(`${faviconC}`) * 2);
   }
   while ((penaltyy.length - 2) > 4) {
       let fieldI = 4.0;
       let encryptor4: Array<any> = [370, 684, 256];
       let firebase5 = 0;
       let libglogW = 4;
       let hongkongk = 3.0;
       let splashh: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,118,97,108,0),String.fromCharCode(97,115,115,105,103,110,109,101,110,116,0)], [String.fromCharCode(115,97,108,116,108,101,110,0),String.fromCharCode(99,117,109,101,0)]]);
       let closeN: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,102,108,111,119,0),542], [String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,0),754]]);
          let flyerO: Array<any> = [391, 310, 341];
          let register_t_ = String.fromCharCode(105,110,118,101,114,118,97,108,0);
         hongkongk -= parseFloat(`${3}`);
         flyerO.push(register_t_.length ^ 1);
         register_t_ += `${flyerO.length / (Math.max(2, 6))}`;
          let giftR: Map<any, any> = new Map([[String.fromCharCode(99,114,111,110,111,115,0),false ], [String.fromCharCode(99,97,112,97,98,108,101,0),false ], [String.fromCharCode(115,111,117,114,99,101,0),true ]]);
          let tooltipsx = 5;
         hongkongk += parseFloat(`${firebase5 % (Math.max(closeN.size, 4))}`);
         giftR = new Map([[`${giftR.size}`, giftR.size]]);
         tooltipsx -= tooltipsx;
      for (let v = 0; v < 2; v++) {
          let iconfeedbackF = 0;
         fieldI /= Math.max(5, firebase5 / 3);
         iconfeedbackF ^= iconfeedbackF;
      }
       let react1: Map<any, any> = new Map([[String.fromCharCode(114,101,97,112,0),String.fromCharCode(105,97,100,115,116,0)], [String.fromCharCode(114,101,97,108,108,111,99,97,116,101,0),String.fromCharCode(102,111,114,103,111,116,0)], [String.fromCharCode(115,99,104,101,100,117,108,105,110,103,0),String.fromCharCode(99,111,108,114,0)]]);
       let static_ut: Map<any, any> = new Map([[String.fromCharCode(116,111,114,103,98,0),641], [String.fromCharCode(99,116,105,109,101,0),428]]);
      while (5 < (libglogW + 2)) {
         libglogW ^= 1 % (Math.max(2, firebase5));
         break;
      }
      if (!Array.from(static_ut.values()).includes(libglogW)) {
         static_ut = new Map([[`${closeN.size}`, closeN.size - 3]]);
      }
      while (1 > (firebase5 << (Math.min(Math.abs(1), 5)))) {
          let appleH = String.fromCharCode(102,111,117,114,105,101,114,0);
          let injuryy = 5;
          let tempnodatai: Array<any> = [14, 665, 889];
         firebase5 *= tempnodatai.length;
         appleH = `${injuryy % 2}`;
         injuryy ^= 3 >> (Math.min(1, appleH.length));
         tempnodatai.push(injuryy % (Math.max(appleH.length, 1)));
         break;
      }
         react1.set(`${react1.size}`, 1 & react1.size);
      if (2 > splashh.size) {
         firebase5 /= Math.max(2 >> (Math.min(5, Math.abs(react1.size))), 2);
      }
      let yellowscoreballP = encryptor4.length >= 7793959;
      do {
         encryptor4.push(1);
         if (yellowscoreballP) {
            break;
         }
      } while (yellowscoreballP && (5 <= (encryptor4.length % 4) || 4 <= (encryptor4.length * parseInt(`${fieldI}`))));
       let macauU = String.fromCharCode(112,114,110,103,0);
       let halffieldimageu = String.fromCharCode(115,101,110,100,97,108,108,0);
         halffieldimageu += `${macauU.length}`;
          let awayiconB = String.fromCharCode(114,97,119,0);
         static_ut = new Map([[`${splashh.size}`, closeN.size]]);
         awayiconB = `${3 ^ awayiconB.length}`;
      if ((encryptor4.length % (Math.max(2, 3))) <= 2 && 1 <= (encryptor4.length << (Math.min(Math.abs(2), 3)))) {
         hongkongk *= parseFloat(`${static_ut.size}`);
      }
      penaltyy = [3];
      break;
   }
   let activity0 = 8573272.0 >= typing7;
   do {
      typing7 += parseFloat(`${parseInt(`${faviconC}`) % (Math.max(parseInt(`${defaultfootballbgg}`), 2))}`);
      if (activity0) {
         break;
      }
   } while ((typing7 <= 2.38) && activity0);
       let typeso = 4.0;
         typeso += parseFloat(`${1 % (Math.max(parseInt(`${typeso}`), 7))}`);
          let runtimeX = String.fromCharCode(115,101,115,115,111,110,0);
         typeso *= (parseFloat(`${String.fromCharCode(81,0) == runtimeX ? runtimeX.length : parseInt(`${typeso}`)}`));
      let heartq = typeso >= 5280075.0;
      do {
         typeso /= Math.max(parseFloat(`${parseInt(`${typeso}`) / (Math.max(parseInt(`${typeso}`), 7))}`), 2);
         if (heartq) {
            break;
         }
      } while (heartq && (1.9 >= (typeso / (Math.max(1, 5)))));
      iconschedulef.push(parseInt(`${hoverM}`));
      typing7 += parseFloat(`${1}`);
       let libjsinspectorj = 3.0;
       let sharewhiteA: Map<any, any> = new Map([[String.fromCharCode(117,110,100,111,116,116,101,100,0),true ], [String.fromCharCode(99,104,97,114,97,99,116,101,100,0),true ]]);
         sharewhiteA.set(`${libjsinspectorj}`, parseInt(`${libjsinspectorj}`));
      while (5.39 > (5.67 + libjsinspectorj)) {
          let countdownZ = String.fromCharCode(100,111,117,98,108,101,115,0);
          let iconediti: Map<any, any> = new Map([[String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,0),59], [String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0),716]]);
          let recommendationU = 2.0;
          let tempnodatar = 0.0;
          let trophyR = String.fromCharCode(111,98,109,99,0);
         sharewhiteA.set(countdownZ, parseInt(`${tempnodatar}`));
         countdownZ += `${iconediti.size | parseInt(`${recommendationU}`)}`;
         iconediti = new Map([[trophyR, trophyR.length % 1]]);
         recommendationU += 1;
         tempnodatar *= parseFloat(`${2 >> (Math.min(4, trophyR.length))}`);
         break;
      }
         sharewhiteA.set(`${libjsinspectorj}`, sharewhiteA.size);
          let dragQ: Map<any, any> = new Map([[String.fromCharCode(97,108,110,117,109,0),String.fromCharCode(107,101,121,108,101,110,0)], [String.fromCharCode(112,111,108,105,99,121,0),String.fromCharCode(115,104,117,116,100,111,119,110,0)], [String.fromCharCode(102,105,120,0),String.fromCharCode(101,120,112,110,97,100,101,100,0)]]);
         libjsinspectorj *= sharewhiteA.size % (Math.max(5, dragQ.size));
          let videocommonN = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,0);
          let libavutil1 = String.fromCharCode(98,121,116,101,99,111,100,101,0);
         sharewhiteA.set(videocommonN, videocommonN.length);
         libavutil1 = `${(String.fromCharCode(88,0) == libavutil1 ? libavutil1.length : libavutil1.length)}`;
       let firebaseu: Map<any, any> = new Map([[String.fromCharCode(103,101,116,110,97,109,101,105,110,102,111,0),String.fromCharCode(116,97,112,116,0)], [String.fromCharCode(99,111,110,102,101,116,116,105,0),String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,0)], [String.fromCharCode(112,114,101,117,112,108,111,97,100,0),String.fromCharCode(114,116,112,112,108,97,121,0)]]);
       let klevin1: Map<any, any> = new Map([[String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,0),469], [String.fromCharCode(98,108,117,114,97,121,0),289], [String.fromCharCode(100,101,118,105,99,101,115,0),54]]);
      selectedv = [1 << (Math.min(4, selectedv.length))];
      defaultfootballbgg /= Math.max(4, 2);
   let iconwatchl = 6275913 <= fastforwardb.length;
   do {
       let statistics9 = 5.0;
       let iconviewergifU = String.fromCharCode(114,111,117,110,100,0);
       let subbasketballplayerQ: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,111,114,0),String.fromCharCode(116,104,114,101,115,104,111,108,100,0)], [String.fromCharCode(105,116,108,101,0),String.fromCharCode(102,97,99,101,98,111,111,107,0)], [String.fromCharCode(121,98,121,114,0),String.fromCharCode(106,100,109,97,105,110,99,116,0)]]);
       let paginationf = true;
       let iconorientationQ = 4.0;
          let playo = 5.0;
          let libavutilR = String.fromCharCode(117,110,114,101,118,101,114,115,101,100,0);
          let streamingv = 1;
         iconviewergifU = `${parseInt(`${statistics9}`)}`;
         playo *= libavutilR.length - parseInt(`${playo}`);
         libavutilR = `${libavutilR.length >> (Math.min(Math.abs(2), 1))}`;
         streamingv &= streamingv / (Math.max(parseInt(`${playo}`), 10));
      let combinedp = iconviewergifU.length >= 5849491;
      do {
         iconviewergifU = `${1 * parseInt(`${iconorientationQ}`)}`;
         if (combinedp) {
            break;
         }
      } while ((!iconviewergifU.endsWith(`${subbasketballplayerQ.size}`)) && combinedp);
      let iconpipexpand3 = 8695346.0 <= iconorientationQ;
      do {
         iconorientationQ *= subbasketballplayerQ.size;
         if (iconpipexpand3) {
            break;
         }
      } while ((!paginationf) && iconpipexpand3);
          let dialogV: Map<any, any> = new Map([[String.fromCharCode(111,115,115,108,0),true ], [String.fromCharCode(99,105,114,99,108,101,0),true ], [String.fromCharCode(115,99,97,110,105,110,100,101,120,0),false ]]);
         iconorientationQ += (iconviewergifU == String.fromCharCode(54,0) ? iconviewergifU.length : parseInt(`${iconorientationQ}`));
         dialogV = new Map([[`${dialogV.size}`, dialogV.size - dialogV.size]]);
         paginationf = (subbasketballplayerQ.size * iconviewergifU.length) <= 41;
         iconorientationQ -= iconviewergifU.length >> (Math.min(Math.abs(1), 1));
         statistics9 -= (iconviewergifU == String.fromCharCode(75,0) ? (paginationf ? 4 : 5) : iconviewergifU.length);
      while (2.51 <= iconorientationQ) {
          let halfF = 5;
          let style5: Array<any> = [615, 371, 921];
          let minivod9 = 5;
          let greenF = 2.0;
          let giftbutton4 = 3.0;
         paginationf = iconviewergifU == String.fromCharCode(71,0);
         halfF |= 2;
         style5 = [parseInt(`${giftbutton4}`) / (Math.max(1, parseInt(`${greenF}`)))];
         minivod9 += halfF;
         greenF /= Math.max(parseInt(`${giftbutton4}`) & 3, 2);
         break;
      }
       let schedulere = 2;
       let runtimeschedulerv = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,0);
       let splashe = String.fromCharCode(103,114,101,101,116,105,110,103,0);
      for (let u = 0; u < 3; u++) {
         paginationf = !paginationf;
      }
         schedulere <<= Math.min(Math.abs(2 + iconviewergifU.length), 5);
      if ((statistics9 / (Math.max(iconviewergifU.length, 2))) > 3.46) {
         statistics9 /= Math.max(1, 4);
      }
         runtimeschedulerv = `${iconviewergifU.length}`;
         schedulere >>= Math.min(Math.abs((splashe == String.fromCharCode(66,0) ? (paginationf ? 2 : 3) : splashe.length)), 1);
      fastforwardb += `${parseInt(`${defaultfootballbgg}`)}`;
      if (iconwatchl) {
         break;
      }
   } while (iconwatchl && (3 > (penaltyy.length / (Math.max(fastforwardb.length, 7)))));
   if (defaultfootballbgg <= 5.94) {
       let inviteF = true;
      while (!inviteF || inviteF) {
         inviteF = !inviteF && !inviteF;
         break;
      }
      while (inviteF) {
         inviteF = !inviteF;
         break;
      }
      for (let u = 0; u < 2; u++) {
         inviteF = !inviteF || !inviteF;
      }
      expired8 = (iconschedulef.length & fastforwardb.length) > 49;
   }
       let tempnodatagifZ = String.fromCharCode(109,117,108,116,105,112,108,101,120,101,100,0);
      while (tempnodatagifZ.length < 1) {
         tempnodatagifZ = `${tempnodatagifZ.length - 3}`;
         break;
      }
      let gifgoalg = String.fromCharCode(113,105,55,104,54,104,110,103,51,107,0) == tempnodatagifZ;
      do {
         tempnodatagifZ = `${tempnodatagifZ.length << (Math.min(Math.abs(3), 4))}`;
         if (gifgoalg) {
            break;
         }
      } while (gifgoalg && (tempnodatagifZ.length >= tempnodatagifZ.length));
         tempnodatagifZ += `${tempnodatagifZ.length}`;
      iconschedulef.push(firebasep.size - 1);
      hookz /= Math.max(3, parseInt(`${hoverM}`));
       let iconnewsshareZ = String.fromCharCode(118,105,101,119,101,114,115,0);
       let phoneshareB = 2;
      let countryx = 5153845 >= iconnewsshareZ.length;
      do {
          let sharedY = 3.0;
          let stationp: Map<any, any> = new Map([[String.fromCharCode(114,97,115,116,101,114,0),String.fromCharCode(97,108,116,114,101,102,0)], [String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,0),String.fromCharCode(103,101,111,116,97,103,115,0)]]);
         iconnewsshareZ += `${1 / (Math.max(7, iconnewsshareZ.length))}`;
         sharedY += parseFloat(`${parseInt(`${sharedY}`)}`);
         stationp.set(`${sharedY}`, parseInt(`${sharedY}`));
         if (countryx) {
            break;
         }
      } while (countryx && (iconnewsshareZ.length == 4));
       let basketballmatchdetailbgo = String.fromCharCode(118,101,99,115,0);
       let minivodj = String.fromCharCode(115,117,98,118,105,100,101,111,0);
         minivodj = `${minivodj.length ^ basketballmatchdetailbgo.length}`;
         phoneshareB += basketballmatchdetailbgo.length % (Math.max(1, 1));
          let modeG = 0.0;
          let acceptedW = String.fromCharCode(105,116,97,108,105,99,0);
         iconnewsshareZ += "2";
         modeG *= acceptedW.length >> (Math.min(Math.abs(3), 2));
         acceptedW += "3";
          let hooksa: Array<any> = [String.fromCharCode(98,97,115,105,99,97,108,108,121,0), String.fromCharCode(103,97,116,105,110,103,0)];
          let libavfilter7 = 3.0;
          let iconmorev = 5.0;
         basketballmatchdetailbgo += `${minivodj.length - 2}`;
         hooksa = [hooksa.length - parseInt(`${libavfilter7}`)];
         libavfilter7 *= parseFloat(`${parseInt(`${libavfilter7}`)}`);
         iconmorev *= parseFloat(`${parseInt(`${libavfilter7}`)}`);
      expired8 = 48.0 == typing7;
   let iconarrowrightP = hookz >= 7871757.0;
   do {
       let selectz = String.fromCharCode(101,118,97,108,102,117,110,99,0);
       let modityX = String.fromCharCode(98,97,116,99,104,0);
       let telegramH = String.fromCharCode(109,115,109,112,101,103,100,97,116,97,0);
       let lightV = String.fromCharCode(100,101,109,111,100,117,108,97,116,101,0);
      if (5 == telegramH.length) {
         modityX += "1";
      }
         selectz = `${2 % (Math.max(5, selectz.length))}`;
       let zhuboc: Map<any, any> = new Map([[String.fromCharCode(115,105,108,101,110,99,101,0),558], [String.fromCharCode(116,97,108,108,0),474]]);
         zhuboc.set(lightV, 1 ^ lightV.length);
          let ballY = false;
          let clubj = String.fromCharCode(98,111,97,116,0);
          let shootyesgoalH = String.fromCharCode(104,112,105,99,0);
         selectz += `${2 >> (Math.min(1, lightV.length))}`;
         ballY = (shootyesgoalH.length - clubj.length) == 61;
         clubj = `${clubj.length}`;
         shootyesgoalH = `${((ballY ? 5 : 2))}`;
      hookz += (3 % (Math.max(8, (expired8 ? 2 : 3))));
      if (iconarrowrightP) {
         break;
      }
   } while (((penaltyy.length * parseInt(`${hookz}`)) >= 4) && iconarrowrightP);
      showlessk = new Map([[`${actionsN.size}`, iconschedulef.length ^ 3]]);

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
       let baiduX = false;
    let redscoreballm = 5;
    let with_xl = String.fromCharCode(114,101,100,117,99,101,0);
    let executora = 0;
    let nbatrophyR = String.fromCharCode(105,110,116,101,102,97,99,101,0);
    let friendso = true;
    let handlerL: Array<any> = [465, 308];
    let expiredc = 0.0;
    let baselineT = 5.0;
    let line3 = String.fromCharCode(115,104,105,101,108,100,0);
    let overlayB: Map<any, any> = new Map([[String.fromCharCode(119,105,116,110,101,115,115,0),240], [String.fromCharCode(109,118,101,120,0),667], [String.fromCharCode(119,114,105,116,101,111,117,116,0),317]]);
    let sort1 = String.fromCharCode(116,114,97,110,115,109,105,116,116,101,100,0);
    let infoF: Map<any, any> = new Map([[String.fromCharCode(98,97,108,97,110,99,101,115,0),String.fromCharCode(102,111,115,115,105,108,0)], [String.fromCharCode(120,112,101,114,105,109,101,110,116,97,108,0),String.fromCharCode(108,116,97,98,108,101,0)]]);
    let codegenj = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,0);
      with_xl = `${nbatrophyR.length << (Math.min(5, Math.abs(executora)))}`;
      baselineT -= parseFloat(`${handlerL.length - 3}`);

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      baselineT *= (parseFloat(`${parseInt(`${baselineT}`) % (Math.max(7, (baiduX ? 4 : 4)))}`));
       let renewI = String.fromCharCode(98,117,116,116,111,110,0);
      for (let y = 0; y < 2; y++) {
         renewI += "3";
      }
      let giftF = renewI == String.fromCharCode(101,122,100,112,48,98,0);
      do {
         renewI = "3";
         if (giftF) {
            break;
         }
      } while (giftF && (renewI == renewI));
      while (renewI == String.fromCharCode(102,0)) {
         renewI = `${(String.fromCharCode(57,0) == renewI ? renewI.length : renewI.length)}`;
         break;
      }
      with_xl += `${with_xl.length}`;
        

   if (!nbatrophyR.startsWith(`${redscoreballm}`)) {
      nbatrophyR = `${(with_xl == String.fromCharCode(57,0) ? (baiduX ? 3 : 1) : with_xl.length)}`;
   }
   for (let s = 0; s < 2; s++) {
      nbatrophyR += `${parseInt(`${expiredc}`)}`;
   }
        

   for (let w = 0; w < 3; w++) {
      executora <<= Math.min(3, Math.abs(2 * redscoreballm));
   }
   let p_titleW = friendso ? !friendso : friendso;
   do {
       let mergerw = String.fromCharCode(115,115,115,101,0);
       let giftbuttonK = String.fromCharCode(116,119,105,108,105,103,104,116,0);
       let libreactnativebloba = 2.0;
       let penaltyv = 3.0;
         giftbuttonK += `${1 ^ giftbuttonK.length}`;
      while (libreactnativebloba > 5.22) {
         mergerw = `${giftbuttonK.length - parseInt(`${libreactnativebloba}`)}`;
         break;
      }
          let runtimeschedulerX = 3.0;
         giftbuttonK += `${parseInt(`${penaltyv}`)}`;
         runtimeschedulerX -= parseInt(`${runtimeschedulerX}`);
          let expandh = String.fromCharCode(102,102,112,108,97,121,0);
          let iconeditY: Map<any, any> = new Map([[String.fromCharCode(114,101,99,104,101,99,107,0),863], [String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,0),334], [String.fromCharCode(117,110,99,114,111,112,112,101,100,0),419]]);
          let taiwant = true;
         libreactnativebloba += iconeditY.size + 2;
         expandh += `${expandh.length % 3}`;
         iconeditY.set(`${taiwant}`, ((taiwant ? 4 : 2) << (Math.min(expandh.length, 3))));
         penaltyv += parseFloat(`${2}`);
         giftbuttonK += `${parseInt(`${libreactnativebloba}`)}`;
      for (let h = 0; h < 3; h++) {
         giftbuttonK = `${parseInt(`${libreactnativebloba}`) - mergerw.length}`;
      }
          let anytimeg = false;
         giftbuttonK += `${parseInt(`${libreactnativebloba}`) & 1}`;
         anytimeg = (!anytimeg ? anytimeg : !anytimeg);
      friendso = parseFloat(`${handlerL.length}`) <= baselineT;
      if (p_titleW) {
         break;
      }
   } while ((2 == handlerL.length && 3 == (handlerL.length & 2)) && p_titleW);
        

   if (1 >= (executora | 3) || executora >= 3) {
      friendso = friendso || expiredc == 97.3;
   }
       let sort9: Array<any> = [String.fromCharCode(112,97,112,101,114,115,0), String.fromCharCode(115,105,112,114,107,100,97,116,97,0)];
       let matchJ = String.fromCharCode(115,116,114,101,101,116,0);
         sort9.push(matchJ.length >> (Math.min(Math.abs(3), 2)));
          let i_imagey = 2;
          let penaltyk: Map<any, any> = new Map([[String.fromCharCode(102,112,115,0),233], [String.fromCharCode(99,111,110,110,101,99,116,115,0),652]]);
          let selection5 = 4.0;
         sort9.push(2);
         i_imagey += penaltyk.size;
         penaltyk = new Map([[`${penaltyk.size}`, i_imagey]]);
         selection5 /= Math.max(4, penaltyk.size);
      let episodeD = 8686889 <= sort9.length;
      do {
         sort9 = [sort9.length];
         if (episodeD) {
            break;
         }
      } while (episodeD && (5 >= matchJ.length));
          let awayteamfieldH = String.fromCharCode(99,111,109,98,105,110,97,116,111,114,0);
         matchJ = `${matchJ.length | 1}`;
         awayteamfieldH += `${awayteamfieldH.length / (Math.max(2, 9))}`;
         sort9.push(sort9.length % (Math.max(matchJ.length, 5)));
      let ball8 = sort9.length <= 5877897;
      do {
          let gifgoalu = 5.0;
          let bootsplashg = String.fromCharCode(104,105,103,104,108,105,103,116,101,100,0);
         sort9.push(1 | sort9.length);
         gifgoalu *= bootsplashg.length;
         bootsplashg += `${2 + bootsplashg.length}`;
         if (ball8) {
            break;
         }
      } while (ball8 && (matchJ.length > sort9.length));
      baselineT -= (parseFloat(`${redscoreballm + (baiduX ? 5 : 1)}`));

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

   if (handlerL.length < with_xl.length) {
      handlerL.push(((baiduX ? 4 : 3) >> (Math.min(Math.abs(parseInt(`${expiredc}`)), 4))));
   }
   if ((with_xl.length ^ 2) == 4) {
       let mountingR = 5.0;
       let u_viewn = 1;
       let iconpointscoreU = 4.0;
      while (3.11 < iconpointscoreU) {
         u_viewn |= 1;
         break;
      }
         u_viewn &= parseInt(`${iconpointscoreU}`) - 1;
         u_viewn ^= u_viewn - 2;
          let animationF = String.fromCharCode(101,107,121,0);
          let mbsplashN: Array<any> = [757, 142, 93];
         mountingR /= Math.max(2, 1);
         animationF += `${mbsplashN.length}`;
         mbsplashN = [mbsplashN.length >> (Math.min(animationF.length, 5))];
       let iconsettingd = String.fromCharCode(109,101,109,99,112,121,0);
         iconsettingd = `${1 + parseInt(`${mountingR}`)}`;
      while (!iconsettingd.endsWith(`${iconpointscoreU}`)) {
         iconpointscoreU += parseFloat(`${3 & parseInt(`${iconpointscoreU}`)}`);
         break;
      }
       let viewerA = 3.0;
      if ((4 << (Math.min(2, Math.abs(u_viewn)))) < 4 && 1 < (iconsettingd.length << (Math.min(Math.abs(4), 3)))) {
         iconsettingd = `${1 - parseInt(`${iconpointscoreU}`)}`;
      }
      handlerL = [line3.length];
   }

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   for (let h = 0; h < 2; h++) {
      line3 = `${(1 ^ (friendso ? 1 : 4))}`;
   }
   let frame_ed6 = friendso ? !friendso : friendso;
   do {
       let modelsP = 1.0;
      let styles2 = 7688487.0 <= modelsP;
      do {
         modelsP += parseInt(`${modelsP}`);
         if (styles2) {
            break;
         }
      } while (styles2 && (3.2 >= (3.92 + modelsP) && 3.95 >= (3.92 + modelsP)));
         modelsP -= parseInt(`${modelsP}`);
         modelsP *= parseInt(`${modelsP}`) / 1;
      friendso = (parseInt(`${modelsP}`) * overlayB.size) == 93;
      if (frame_ed6) {
         break;
      }
   } while (frame_ed6 && (!friendso));


        if (fileExist) {

   while (executora == 1) {
      executora >>= Math.min(Math.abs(overlayB.size >> (Math.min(1, Math.abs(parseInt(`${baselineT}`))))), 3);
      break;
   }
   if (with_xl != String.fromCharCode(112,0) || 1 < line3.length) {
      line3 = `${nbatrophyR.length | line3.length}`;
   }
          const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

       let iconcalendarw = String.fromCharCode(112,117,108,115,101,0);
      let libloggere = 5784525 <= iconcalendarw.length;
      do {
         iconcalendarw += `${(iconcalendarw == String.fromCharCode(68,0) ? iconcalendarw.length : iconcalendarw.length)}`;
         if (libloggere) {
            break;
         }
      } while (libloggere && (iconcalendarw.length == 1));
      let livec = 7575622 <= iconcalendarw.length;
      do {
         iconcalendarw = `${iconcalendarw.length}`;
         if (livec) {
            break;
         }
      } while ((!iconcalendarw.startsWith(`${iconcalendarw.length}`)) && livec);
         iconcalendarw += `${3 + iconcalendarw.length}`;
      with_xl += `${3 - overlayB.size}`;
   let libjsijniprofiler4 = friendso ? !friendso : friendso;
   do {
      friendso = nbatrophyR.startsWith(`${baselineT}`);
      if (libjsijniprofiler4) {
         break;
      }
   } while ((1 <= (5 - handlerL.length) || handlerL.length <= 5) && libjsijniprofiler4);
          

      expiredc *= (parseFloat(`${(baiduX ? 4 : 2) ^ 3}`));
       let iconadslinkh = 5;
      let libcxxcomponentsI = 5802228 >= iconadslinkh;
      do {
          let imagenetworkerr9 = 4.0;
          let o_titlex = String.fromCharCode(100,97,109,112,105,110,103,0);
         iconadslinkh -= parseInt(`${imagenetworkerr9}`) % (Math.max(o_titlex.length, 10));
         if (libcxxcomponentsI) {
            break;
         }
      } while ((2 <= (iconadslinkh + 3)) && libcxxcomponentsI);
      for (let y = 0; y < 2; y++) {
         iconadslinkh >>= Math.min(3, Math.abs(iconadslinkh ^ iconadslinkh));
      }
         iconadslinkh <<= Math.min(1, Math.abs(iconadslinkh % (Math.max(iconadslinkh, 7))));
      friendso = baiduX;
          if (!fileIsEmpty) {

   if (handlerL.includes(redscoreballm)) {
       let libavutilq: Map<any, any> = new Map([[String.fromCharCode(116,116,97,103,0),String.fromCharCode(112,97,103,101,108,105,115,116,0)], [String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,0),String.fromCharCode(112,97,108,98,97,114,115,0)], [String.fromCharCode(97,114,103,98,105,0),String.fromCharCode(102,105,114,101,119,97,108,108,0)]]);
       let emojiheartU: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,100,0),958], [String.fromCharCode(114,97,100,105,120,0),425], [String.fromCharCode(97,114,103,115,0),715]]);
       let holderH = 5.0;
       let moreZ = true;
       let libjsijniprofilerB = String.fromCharCode(108,111,110,103,101,114,0);
         holderH -= (parseFloat(`${(moreZ ? 1 : 4) | parseInt(`${holderH}`)}`));
          let adultj = true;
          let annerr = 3.0;
          let handler9 = 1;
         emojiheartU.set(`${holderH}`, 2);
         adultj = !adultj;
         annerr += parseInt(`${annerr}`);
         handler9 ^= handler9 >> (Math.min(1, Math.abs(3)));
      if (1 > emojiheartU.size) {
         emojiheartU.set(`${libjsijniprofilerB}`, 3);
      }
         holderH -= parseFloat(`${emojiheartU.size}`);
         libjsijniprofilerB = `${parseInt(`${holderH}`)}`;
         moreZ = libavutilq.size >= emojiheartU.size;
       let showlessa = false;
       let interstitial6 = false;
      while (libjsijniprofilerB.length < parseInt(`${holderH}`)) {
         holderH *= (parseFloat(`${libjsijniprofilerB == String.fromCharCode(100,0) ? libjsijniprofilerB.length : parseInt(`${holderH}`)}`));
         break;
      }
         emojiheartU.set(`${holderH}`, libjsijniprofilerB.length);
      if (2 >= (2 & emojiheartU.size)) {
         holderH += parseFloat(`${libavutilq.size / 3}`);
      }
         holderH -= parseFloat(`${2 | parseInt(`${holderH}`)}`);
          let strb: Array<any> = [String.fromCharCode(103,101,116,101,110,118,0), String.fromCharCode(99,111,99,111,97,0)];
          let stringsk = String.fromCharCode(114,101,113,115,116,97,116,101,0);
          let homeiconH = 3;
         moreZ = (showlessa ? interstitial6 : !showlessa);
         strb.push(3);
         stringsk = `${1 ^ stringsk.length}`;
         homeiconH >>= Math.min(4, Math.abs(stringsk.length << (Math.min(5, strb.length))));
          let templateprocessorf = 1.0;
         moreZ = !interstitial6;
         templateprocessorf += parseFloat(`${parseInt(`${templateprocessorf}`) % (Math.max(parseInt(`${templateprocessorf}`), 1))}`);
         moreZ = emojiheartU.get(`${holderH}`) == null;
      for (let g = 0; g < 1; g++) {
         holderH -= parseFloat(`${libavutilq.size << (Math.min(3, Math.abs(parseInt(`${holderH}`))))}`);
      }
      redscoreballm /= Math.max(libjsijniprofilerB.length, 2);
   }
   while (handlerL.includes(expiredc)) {
      handlerL = [(redscoreballm ^ (friendso ? 3 : 2))];
      break;
   }
            setMiniVodUrl(`${fileLocation}`);
          } else {

   let unselectedx = handlerL.length >= 7061296;
   do {
       let recommendationD: Map<any, any> = new Map([[String.fromCharCode(97,97,117,100,105,111,0),String.fromCharCode(121,111,110,108,121,0)], [String.fromCharCode(114,111,111,116,115,0),String.fromCharCode(98,114,97,110,100,0)], [String.fromCharCode(101,118,116,97,103,0),String.fromCharCode(115,101,101,107,105,110,103,0)]]);
       let telegramP = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,0);
       let libglog9 = String.fromCharCode(107,105,108,108,0);
      while (1 < (recommendationD.size - 5) || (telegramP.length - 5) < 2) {
         recommendationD = new Map([[`${recommendationD.size}`, libglog9.length]]);
         break;
      }
      if (4 > (1 + libglog9.length) || 3 > (recommendationD.size + 1)) {
         recommendationD.set(`${libglog9}`, 3);
      }
         libglog9 += `${(telegramP == String.fromCharCode(72,0) ? telegramP.length : recommendationD.size)}`;
      let iconclosewhitebgC = 8422190 >= recommendationD.size;
      do {
          let halffieldimageR = 1;
         recommendationD.set(`${telegramP}`, telegramP.length << (Math.min(3, Math.abs(recommendationD.size))));
         halffieldimageR -= halffieldimageR - 1;
         if (iconclosewhitebgC) {
            break;
         }
      } while (iconclosewhitebgC && (3 > (5 / (Math.max(10, recommendationD.size)))));
      let actiong = libglog9 == String.fromCharCode(112,49,102,114,116,102,0);
      do {
         libglog9 = `${libglog9.length / 3}`;
         if (actiong) {
            break;
         }
      } while ((telegramP == String.fromCharCode(109,0)) && actiong);
      while (2 <= (recommendationD.size - telegramP.length) && (2 - recommendationD.size) <= 3) {
         recommendationD.set(libglog9, libglog9.length);
         break;
      }
         libglog9 += `${telegramP.length}`;
          let catagory5 = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,0);
          let foregroundB: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,0),43], [String.fromCharCode(115,104,105,109,109,101,114,105,110,103,0),935]]);
         recommendationD.set(libglog9, (libglog9 == String.fromCharCode(85,0) ? foregroundB.size : libglog9.length));
         catagory5 = `${catagory5.length}`;
         foregroundB.set(catagory5, 3 % (Math.max(6, catagory5.length)));
      if (recommendationD.size <= 3) {
         telegramP += `${telegramP.length}`;
      }
      handlerL.push(((baiduX ? 2 : 5)));
      if (unselectedx) {
         break;
      }
   } while (unselectedx && (4 < handlerL.length));
      baselineT -= parseFloat(`${sort1.length & overlayB.size}`);
            

       let matchK: Array<any> = [103, 875];
      for (let w = 0; w < 3; w++) {
         matchK = [1];
      }
         matchK = [matchK.length];
      let type___4 = 7546413 <= matchK.length;
      do {
         matchK = [matchK.length];
         if (type___4) {
            break;
         }
      } while (type___4 && (1 == (matchK.length % (Math.max(9, matchK.length)))));
      sort1 += `${parseInt(`${expiredc}`) / (Math.max(5, sort1.length))}`;
      baiduX = sort1 == String.fromCharCode(67,0);
            setMiniVodUrl(currentVod.mini_video_origin_video_url)
          }
        } else {

   for (let k = 0; k < 2; k++) {
      redscoreballm += ((friendso ? 4 : 4) % (Math.max(3, 8)));
   }
      redscoreballm /= Math.max(3, ((baiduX ? 5 : 1) / 2));
          

      sort1 = "1";
   let signinupQ = 8099149 <= redscoreballm;
   do {
       let path4 = false;
       let mbnativeo = String.fromCharCode(116,114,97,107,0);
       let graphd = 1.0;
       let toponr = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,0);
         graphd *= (parseFloat(`${String.fromCharCode(104,0) == mbnativeo ? mbnativeo.length : (path4 ? 1 : 2)}`));
         path4 = String.fromCharCode(108,0) == toponr;
       let indexU = String.fromCharCode(115,117,114,102,97,99,101,115,0);
       let footballfieldu = String.fromCharCode(109,111,110,111,116,111,110,105,99,0);
         indexU += "1";
      let yingN = indexU == String.fromCharCode(117,98,52,99,95,108,121,0);
      do {
         indexU = `${footballfieldu.length}`;
         if (yingN) {
            break;
         }
      } while ((toponr.length > 1) && yingN);
         graphd -= parseFloat(`${toponr.length}`);
          let eabafadfadddbafeddddeeefeaafR = String.fromCharCode(115,116,114,109,97,116,99,104,0);
          let predictionwine = String.fromCharCode(115,108,111,119,0);
          let catalogV = 2.0;
         footballfieldu = "2";
         eabafadfadddbafeddddeeefeaafR += "2";
         predictionwine = `${predictionwine.length}`;
         catalogV += parseFloat(`${predictionwine.length}`);
         mbnativeo = `${((path4 ? 2 : 4) % 2)}`;
      let libreactnativeblobn = path4 ? !path4 : path4;
      do {
         path4 = indexU.length >= 69 && toponr == String.fromCharCode(65,0);
         if (libreactnativeblobn) {
            break;
         }
      } while (libreactnativeblobn && (4.58 >= (5.33 + graphd)));
       let logoI = 4.0;
          let attributedstringo = 4.0;
         indexU = `${parseInt(`${attributedstringo}`) ^ 1}`;
          let playlistw: Map<any, any> = new Map([[String.fromCharCode(99,105,110,116,0),141], [String.fromCharCode(112,107,99,115,0),755], [String.fromCharCode(105,95,57,54,0),278]]);
         toponr += `${(mbnativeo.length >> (Math.min(1, Math.abs((path4 ? 2 : 3)))))}`;
         playlistw = new Map([[`${playlistw.size}`, playlistw.size ^ playlistw.size]]);
      redscoreballm >>= Math.min(Math.abs(3), 2);
      if (signinupQ) {
         break;
      }
   } while ((redscoreballm <= baselineT) && signinupQ);
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
       let predictionbuttonl = String.fromCharCode(112,114,111,120,105,101,115,0);
    let armva8 = String.fromCharCode(100,99,112,114,101,100,0);
    let thumbnail_ = false;
    let cedbadcebfbfbfbcfecbcD = String.fromCharCode(98,105,110,100,101,114,0);
    let indicatora = String.fromCharCode(97,112,112,114,111,118,97,108,0);
    let iconrightorangeq: Map<any, any> = new Map([[String.fromCharCode(122,101,116,97,0),String.fromCharCode(105,100,99,116,100,115,112,0)], [String.fromCharCode(101,120,116,114,97,0),String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,0)]]);
    let gemfilei = 2;
    let footballtrophy_ = String.fromCharCode(116,97,103,115,116,114,0);
    let iconcloset = 1.0;
    let pagination6 = 2;
      indicatora += `${armva8.length << (Math.min(cedbadcebfbfbfbcfecbcD.length, 4))}`;
   let debugm = armva8 == String.fromCharCode(112,101,102,113,108,116,121,97,102,102,0);
   do {
      armva8 = `${parseInt(`${iconcloset}`) ^ 2}`;
      if (debugm) {
         break;
      }
   } while (debugm && (armva8.length > predictionbuttonl.length));
      footballtrophy_ = `${armva8.length}`;
      iconrightorangeq = new Map([[`${gemfilei}`, 1]]);
       let subsA = true;
       let minimizeV = false;
       let profileh = 3.0;
      if (!minimizeV) {
         profileh -= (parseFloat(`${parseInt(`${profileh}`) << (Math.min(3, Math.abs((subsA ? 3 : 3))))}`));
      }
      while (subsA) {
          let mimoa = 4;
          let codel = 4;
          let success3: Array<any> = [288, 826];
          let iconfeedbackf = 1.0;
         subsA = 81 >= mimoa && 81 >= success3.length;
         mimoa += 3;
         codel &= 1;
         success3.push(parseInt(`${iconfeedbackf}`));
         iconfeedbackf /= Math.max(parseFloat(`${parseInt(`${iconfeedbackf}`) - codel}`), 1);
         break;
      }
          let trophyN = String.fromCharCode(114,101,108,97,121,115,0);
          let smallorangemanw = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,0);
          let scoreZ: Array<any> = [555, 27];
         minimizeV = trophyN.length >= 26;
         trophyN = `${smallorangemanw.length % 2}`;
         smallorangemanw = `${scoreZ.length - 2}`;
         scoreZ.push(3 | smallorangemanw.length);
      let uploadD = 7546777.0 >= profileh;
      do {
         profileh /= Math.max(3, (parseFloat(`${(subsA ? 4 : 3)}`)));
         if (uploadD) {
            break;
         }
      } while (uploadD && ((profileh - 2.7) == 4.76 || subsA));
         subsA = 73.54 >= profileh;
          let hejio = 0.0;
          let predictionbuttonT: Array<any> = [849, 592];
          let grayO = 4.0;
         minimizeV = (!subsA ? !minimizeV : subsA);
         hejio -= parseFloat(`${parseInt(`${grayO}`)}`);
         predictionbuttonT = [parseInt(`${hejio}`)];
         grayO -= parseFloat(`${predictionbuttonT.length}`);
          let owngoalG = 0.0;
         minimizeV = owngoalG < 77.60 && minimizeV;
          let xvodZ: Map<any, any> = new Map([[String.fromCharCode(112,111,108,101,0),527], [String.fromCharCode(106,117,115,116,105,102,105,101,100,0),366], [String.fromCharCode(99,97,112,116,117,114,101,114,0),27]]);
          let libreactnativejnie = 5;
          let emojie = 5;
         subsA = 75.53 <= profileh;
         xvodZ = new Map([[`${emojie}`, libreactnativejnie | emojie]]);
         libreactnativejnie <<= Math.min(Math.abs(libreactnativejnie * 3), 3);
         subsA = 94.87 > profileh || minimizeV;
      cedbadcebfbfbfbcfecbcD += `${(indicatora.length * (subsA ? 3 : 4))}`;
      thumbnail_ = String.fromCharCode(112,0) == footballtrophy_ && iconrightorangeq.size <= 22;
   if (Array.from(iconrightorangeq.keys()).includes(`${iconcloset}`)) {
       let baiduN = 4;
       let libapminsightaI = 4.0;
       let libavfilter5 = 0.0;
       let typingA: Array<any> = [753, 849];
       let release_r2 = 1;
       let default_djg: Array<any> = [964, 535, 437];
      if (3 > default_djg.length) {
          let regengg = String.fromCharCode(99,111,100,105,110,103,116,121,112,101,0);
          let libswscales = String.fromCharCode(111,112,117,115,0);
          let activeX = 4.0;
          let iconclosewhitewithbgr = String.fromCharCode(115,110,97,112,115,104,111,116,115,0);
         default_djg.push(2 + regengg.length);
         regengg += `${iconclosewhitewithbgr.length}`;
         libswscales = "1";
         activeX *= 3;
         iconclosewhitewithbgr += `${libswscales.length}`;
      }
          let greyticks = 5;
          let telemetryJ: Array<any> = [341, 348];
          let giftC = String.fromCharCode(100,101,108,101,116,105,110,103,0);
         release_r2 >>= Math.min(typingA.length, 2);
         greyticks >>= Math.min(Math.abs(2 | greyticks), 3);
         telemetryJ.push(1);
         giftC = `${telemetryJ.length * greyticks}`;
       let footballfieldA: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,111,114,0),166], [String.fromCharCode(111,117,116,98,111,117,110,100,0),785], [String.fromCharCode(117,100,112,108,105,116,101,0),353]]);
       let streamingR: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,105,110,103,0),true ], [String.fromCharCode(97,117,116,111,103,101,110,0),true ], [String.fromCharCode(104,99,109,99,0),false ]]);
          let tumbnailt = true;
         baiduN &= parseInt(`${libavfilter5}`);
         tumbnailt = (!tumbnailt ? !tumbnailt : !tumbnailt);
      let sigmobu = libavfilter5 >= 7785116.0;
      do {
          let graphicsX: Array<any> = [923, 698];
          let stringsz: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,0),202], [String.fromCharCode(101,112,105,115,111,100,101,0),876]]);
          let homeinactiveZ: Array<any> = [String.fromCharCode(100,97,117,100,0), String.fromCharCode(114,101,99,111,114,100,101,114,0)];
          let rules5 = String.fromCharCode(116,114,117,110,99,97,116,101,0);
          let backgroundM = 4;
         libavfilter5 -= parseFloat(`${1}`);
         graphicsX.push(graphicsX.length);
         stringsz = new Map([[`${graphicsX.length}`, 2]]);
         homeinactiveZ = [stringsz.size];
         rules5 = `${graphicsX.length | rules5.length}`;
         backgroundM ^= 1 + stringsz.size;
         if (sigmobu) {
            break;
         }
      } while ((parseFloat(`${footballfieldA.size}`) > libavfilter5) && sigmobu);
      if (footballfieldA.size == 3) {
          let embedI = true;
         default_djg = [parseInt(`${libavfilter5}`) * 3];
         embedI = embedI && !embedI;
      }
      if (Array.from(footballfieldA.keys()).includes(`${release_r2}`)) {
         release_r2 -= parseInt(`${libavfilter5}`);
      }
       let iconarrowrightX = 1;
          let halfm: Map<any, any> = new Map([[String.fromCharCode(115,116,105,99,107,101,114,101,100,0),String.fromCharCode(103,114,97,112,104,105,99,0)], [String.fromCharCode(101,115,99,97,112,105,110,103,0),String.fromCharCode(101,103,119,105,116,0)]]);
         libavfilter5 *= parseFloat(`${typingA.length}`);
         halfm.set(`${halfm.size}`, 3 & halfm.size);
      let uploadx = libapminsightaI <= 5324099.0;
      do {
          let stringj = 1.0;
          let issubQ = String.fromCharCode(109,117,108,116,105,0);
          let shareN = 5.0;
         libapminsightaI *= parseFloat(`${streamingR.size << (Math.min(5, Math.abs(release_r2)))}`);
         stringj += parseFloat(`${parseInt(`${shareN}`)}`);
         issubQ = "1";
         if (uploadx) {
            break;
         }
      } while ((libapminsightaI > release_r2) && uploadx);
       let interstitial3 = String.fromCharCode(114,111,119,115,0);
       let iconclosea = String.fromCharCode(100,98,115,105,122,101,0);
         iconclosea = `${parseInt(`${libapminsightaI}`) ^ baiduN}`;
         default_djg = [iconclosea.length];
      while (interstitial3.endsWith(`${release_r2}`)) {
          let gifgoalb: Array<any> = [346, 197];
         interstitial3 += `${1 * parseInt(`${libapminsightaI}`)}`;
         gifgoalb = [gifgoalb.length / 3];
         break;
      }
      iconrightorangeq.set(`${iconcloset}`, footballtrophy_.length);
   }
      predictionbuttonl = `${armva8.length}`;
       let headerR = true;
          let dicea = 2.0;
          let cornershootp = 1.0;
          let whiteanimationliveG: Array<any> = [917, 426];
         headerR = !headerR;
         dicea -= parseFloat(`${parseInt(`${dicea}`)}`);
         cornershootp += 2;
         whiteanimationliveG.push(whiteanimationliveG.length % 2);
         headerR = !headerR;
          let runtimeR: Map<any, any> = new Map([[String.fromCharCode(118,112,120,101,110,99,0),83], [String.fromCharCode(108,101,97,115,116,0),427]]);
          let inouttargetred6 = String.fromCharCode(102,105,108,116,101,114,117,118,0);
          let ajaxD = String.fromCharCode(102,97,108,115,101,0);
         headerR = inouttargetred6.length < ajaxD.length;
         runtimeR.set(`${runtimeR.size}`, 1);
         inouttargetred6 = `${runtimeR.size}`;
      armva8 = `${parseInt(`${iconcloset}`) ^ 3}`;
      armva8 = `${cedbadcebfbfbfbcfecbcD.length + 1}`;
   let singaporeB = 7051828 <= iconrightorangeq.size;
   do {
       let iconrightorangen: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,0),44], [String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,0),330], [String.fromCharCode(112,114,101,97,109,98,117,108,97,0),602]]);
       let coreK = 1.0;
      for (let y = 0; y < 3; y++) {
          let castingd = String.fromCharCode(115,112,108,105,116,109,118,115,0);
          let gifgoalY = 4.0;
          let cedbadcebfbfbfbcfecbcp: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,101,0),43], [String.fromCharCode(97,97,100,0),79]]);
         coreK *= 3;
         castingd += `${(String.fromCharCode(68,0) == castingd ? castingd.length : parseInt(`${gifgoalY}`))}`;
         gifgoalY += castingd.length;
         cedbadcebfbfbfbcfecbcp = new Map([[`${cedbadcebfbfbfbcfecbcp.size}`, (String.fromCharCode(68,0) == castingd ? castingd.length : cedbadcebfbfbfbcfecbcp.size)]]);
      }
         iconrightorangen.set(`${coreK}`, iconrightorangen.size);
       let constantsV = String.fromCharCode(117,110,105,116,115,0);
       let minie = String.fromCharCode(109,115,109,112,101,103,0);
      while (constantsV == String.fromCharCode(80,0) || minie != String.fromCharCode(108,0)) {
         constantsV = `${3 / (Math.max(9, parseInt(`${coreK}`)))}`;
         break;
      }
      while (constantsV.length >= parseInt(`${coreK}`)) {
          let gpay8 = 2.0;
          let activityT = false;
          let trashW = String.fromCharCode(111,102,102,101,114,101,100,0);
         coreK /= Math.max(1, (trashW == String.fromCharCode(55,0) ? iconrightorangen.size : trashW.length));
         gpay8 /= Math.max(3, parseFloat(`${parseInt(`${gpay8}`) % 3}`));
         activityT = gpay8 < 10.85;
         break;
      }
         constantsV = `${(String.fromCharCode(72,0) == minie ? constantsV.length : minie.length)}`;
      iconrightorangeq = new Map([[armva8, armva8.length]]);
      if (singaporeB) {
         break;
      }
   } while ((1 == iconrightorangeq.size) && singaporeB);
       let phoneshareB = String.fromCharCode(97,97,114,99,104,0);
       let castingC = String.fromCharCode(112,105,99,107,101,114,115,0);
       let fastforward7 = String.fromCharCode(121,111,103,97,0);
      while (2 == castingC.length) {
         fastforward7 = `${fastforward7.length}`;
         break;
      }
       let footballfieldX = String.fromCharCode(113,117,111,116,101,115,0);
       let projectE = String.fromCharCode(98,101,108,108,0);
      predictionbuttonl = "1";
      phoneshareB += `${phoneshareB.length | 1}`;
   if (!Array.from(iconrightorangeq.keys()).includes(`${iconcloset}`)) {
      iconcloset *= parseFloat(`${parseInt(`${iconcloset}`) - gemfilei}`);
   }

    setVideoReadyIos(true)

   for (let d = 0; d < 2; d++) {
      predictionbuttonl += "2";
   }
   for (let c = 0; c < 3; c++) {
      cedbadcebfbfbfbcfecbcD = `${((thumbnail_ ? 1 : 4) & predictionbuttonl.length)}`;
   }
   for (let b = 0; b < 2; b++) {
       let greenk = false;
       let downarrowp = 1.0;
       let brightnessx: Array<any> = [String.fromCharCode(97,116,114,97,99,112,0), String.fromCharCode(98,101,115,116,0), String.fromCharCode(115,105,102,102,0)];
       let privacy5 = true;
      while (downarrowp > 3.87) {
         privacy5 = 92.8 < downarrowp;
         break;
      }
          let blacklist0 = 2.0;
         greenk = !privacy5;
         blacklist0 /= Math.max(1, parseFloat(`${parseInt(`${blacklist0}`) % (Math.max(3, parseInt(`${blacklist0}`)))}`));
         greenk = brightnessx.includes(privacy5);
         greenk = !greenk && 63.59 >= downarrowp;
       let orange_: Map<any, any> = new Map([[String.fromCharCode(102,99,116,108,0),132], [String.fromCharCode(121,118,99,111,110,102,105,103,0),586], [String.fromCharCode(98,117,102,115,112,97,99,101,0),187]]);
      while (brightnessx.length <= parseInt(`${downarrowp}`)) {
          let searchbary = 2;
          let weibol = String.fromCharCode(117,110,99,111,110,115,117,109,101,100,0);
          let homeloadingb = 0;
         downarrowp /= Math.max(parseFloat(`${homeloadingb << (Math.min(3, Math.abs(2)))}`), 1);
         searchbary %= Math.max((weibol == String.fromCharCode(75,0) ? searchbary : weibol.length), 5);
         homeloadingb -= weibol.length >> (Math.min(2, Math.abs(searchbary)));
         break;
      }
       let gemfilek = String.fromCharCode(111,99,97,108,0);
       let libyoga7 = String.fromCharCode(97,99,115,107,105,112,0);
      while (downarrowp < 4.67) {
         greenk = orange_.get(`${downarrowp}`) == null;
         break;
      }
      let signinupc = String.fromCharCode(98,98,110,0) == libyoga7;
      do {
         libyoga7 = `${orange_.size}`;
         if (signinupc) {
            break;
         }
      } while (signinupc && (1 > (4 % (Math.max(10, libyoga7.length)))));
       let lineN = 1.0;
       let starw = 3.0;
         downarrowp *= (parseFloat(`${(privacy5 ? 1 : 3) * orange_.size}`));
      if (1.46 == (lineN - 4.44) || !greenk) {
         lineN -= libyoga7.length;
      }
      iconcloset += parseFloat(`${footballtrophy_.length / 1}`);
   }
      predictionbuttonl = `${iconrightorangeq.size}`;
      footballtrophy_ += `${footballtrophy_.length ^ predictionbuttonl.length}`;
   let iconsettingN = armva8 == String.fromCharCode(55,49,122,50,0);
   do {
       let vipsporte = String.fromCharCode(99,104,115,99,97,108,101,0);
       let bgvipxvodv = String.fromCharCode(112,108,117,103,105,110,115,0);
       let switch_q5 = 3.0;
      if (bgvipxvodv != vipsporte) {
         vipsporte += `${bgvipxvodv.length & 3}`;
      }
         switch_q5 *= parseFloat(`${parseInt(`${switch_q5}`) & bgvipxvodv.length}`);
      for (let b = 0; b < 1; b++) {
         vipsporte = `${parseInt(`${switch_q5}`)}`;
      }
         switch_q5 /= Math.max(parseFloat(`${3}`), 2);
      for (let i = 0; i < 1; i++) {
          let path9 = 0;
          let anytimes = 3.0;
          let trophy3: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,0),false ], [String.fromCharCode(103,101,116,110,112,97,115,115,101,115,0),true ], [String.fromCharCode(118,97,108,105,100,97,116,101,100,0),false ]]);
          let libcxxcomponentsh: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,0),488], [String.fromCharCode(99,111,117,110,116,101,114,115,0),526]]);
         switch_q5 *= parseFloat(`${1}`);
         path9 += 3 % (Math.max(parseInt(`${anytimes}`), 2));
         anytimes -= parseFloat(`${path9 ^ 3}`);
         trophy3.set(`${path9}`, libcxxcomponentsh.size << (Math.min(Math.abs(2), 1)));
         libcxxcomponentsh = new Map([[`${trophy3.size}`, 1]]);
      }
      while (bgvipxvodv.includes(vipsporte)) {
         bgvipxvodv += `${parseInt(`${switch_q5}`) * 3}`;
         break;
      }
          let constantsy = 2.0;
          let chatroombackgroundd = 4.0;
          let collectionE = 2.0;
         switch_q5 /= Math.max(parseFloat(`${parseInt(`${chatroombackgroundd}`)}`), 5);
         constantsy += parseFloat(`${parseInt(`${collectionE}`)}`);
      if (5 > vipsporte.length) {
         bgvipxvodv += `${parseInt(`${switch_q5}`) >> (Math.min(Math.abs(1), 1))}`;
      }
          let details = 3.0;
         bgvipxvodv += `${parseInt(`${switch_q5}`)}`;
         details += parseFloat(`${1 / (Math.max(6, parseInt(`${details}`)))}`);
      armva8 = "3";
      if (iconsettingN) {
         break;
      }
   } while ((armva8.length < 3) && iconsettingN);
      cedbadcebfbfbfbcfecbcD = `${pagination6 % (Math.max(2, footballtrophy_.length))}`;
      indicatora += `${iconrightorangeq.size}`;
       let themec = false;
       let emojiJ: Array<any> = [139, 597];
          let mailC = 4;
          let showlessx = 0;
          let androidc = 2.0;
         themec = !themec;
         mailC += showlessx << (Math.min(Math.abs(parseInt(`${androidc}`)), 4));
         showlessx >>= Math.min(Math.abs(mailC), 5);
         androidc += parseFloat(`${parseInt(`${androidc}`) + 1}`);
      for (let g = 0; g < 1; g++) {
         themec = !themec;
      }
      if (2 > (emojiJ.length + 2) && !themec) {
         themec = emojiJ.includes(themec);
      }
      let dialogI = themec ? !themec : themec;
      do {
         themec = emojiJ.includes(themec);
         if (dialogI) {
            break;
         }
      } while (dialogI && (themec && 3 == (emojiJ.length / 3)));
          let verticalp = String.fromCharCode(115,99,101,110,101,0);
         themec = verticalp == String.fromCharCode(119,0);
         themec = emojiJ.length < 72 || !themec;
      cedbadcebfbfbfbcfecbcD = "2";
   let libtobi = String.fromCharCode(52,120,98,100,122,0) == footballtrophy_;
   do {
      footballtrophy_ = `${gemfilei}`;
      if (libtobi) {
         break;
      }
   } while (libtobi && (footballtrophy_.endsWith(predictionbuttonl)));
       let annerW = 1;
       let buttonP = String.fromCharCode(100,101,116,101,99,116,101,100,0);
       let downloadh = false;
      while (buttonP.length == 5 && downloadh) {
          let predictiondefaulta = true;
          let downloadedW = 2.0;
          let dependenciesY = String.fromCharCode(101,97,105,100,99,116,0);
         downloadh = downloadh && downloadedW == 68.47;
         predictiondefaulta = dependenciesY.length < 70;
         downloadedW *= parseFloat(`${3}`);
         dependenciesY += "2";
         break;
      }
         downloadh = buttonP.length > 10;
         downloadh = buttonP.endsWith(`${downloadh}`);
         downloadh = annerW < 74;
         downloadh = annerW > 12;
      let predictiondefault0 = buttonP == String.fromCharCode(95,99,53,116,110,0);
      do {
         buttonP = `${3 / (Math.max(annerW, 4))}`;
         if (predictiondefault0) {
            break;
         }
      } while (predictiondefault0 && (4 < (annerW * buttonP.length) || 2 < (annerW * 4)));
          let bodanu = String.fromCharCode(104,113,100,115,112,0);
         buttonP = `${((downloadh ? 2 : 4))}`;
         bodanu += `${2 % (Math.max(4, bodanu.length))}`;
      let iconsharefriendso = downloadh ? !downloadh : downloadh;
      do {
         downloadh = buttonP.length == 49;
         if (iconsharefriendso) {
            break;
         }
      } while ((!downloadh || buttonP.length < 1) && iconsharefriendso);
         annerW ^= 1;
      pagination6 /= Math.max(4, 3);
   for (let a = 0; a < 3; a++) {
      thumbnail_ = gemfilei >= pagination6;
   }
   if (1 == pagination6) {
      pagination6 += parseInt(`${iconcloset}`);
   }
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
