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
import Video, { OnProgressData, ttGreyBorderless } from 'react-native-video';
import PlayIcon from '@static/images/leftBodanHumidity.svg';
import PauseIcon from '@static/images/nterstitialAssistCarousel.svg';
import PlayBoDanIcon from '@static/images/vietnamLoginAdult.svg';
import PlayZhengPianIcon from '@static/images/flyerConfigure.svg';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import HejiIcon from '@static/images/singaporeDelegate_kc.svg';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/tt_spec_download';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import { showAdultModeVip } from '@redux/actions/tt_copy_heji';
import { playVod, viewPlaylistDetails } from '@redux/actions/tt_activity';
import { screenModel } from '@type/tt_twitter_data';
import { ADULT_MODE_PREVIEW_DURATION, DOWNLOAD_WATCH_ANYTIME } from '@utility/tt_trophy_cross';
import FastImage from '../../common/tt_connection';
import RedirectButton from './tt_sina_league_button';
import DescriptionBar from './tt_back';
import HejiButton from './tt_package_champion_button';
import { addIdToCache } from '../../../utils/tt_firebase_less';
import { ttGoal } from '@redux/reducers/tt_selected';
import { ttFast } from '@models/tt_stations_right';

interface ttSmall {
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

const videoBufferGif = require('@static/images/blacklistTumbnail.gif')

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
}: ttSmall) {
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
  const videoRef = useRef<ttGreyBorderless>(null);
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

  const userState = useSelector<ttGoal>('userReducer');

  const isVip = ttFast.isVip(userState.user);
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
       let fastforwardC = 5.0;
    let scheduleN = 2.0;
    let terms_ = false;
    let nativeV = 2.0;
    let gradlewV = 3;
    let const_jS = String.fromCharCode(101,113,117,97,108,105,122,101,114,95,48,95,55,49,0);
    let episodeu: Map<any, any> = new Map([[String.fromCharCode(117,95,49,95,100,105,97,108,111,103,117,101,115,0),153], [String.fromCharCode(116,95,56,50,95,112,102,105,108,116,101,114,0),37], [String.fromCharCode(114,95,51,55,95,114,116,99,115,116,97,116,115,0),764]]);
    let balle = String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,113,95,56,48,0);
    let policyE = 5;
    let greyJ = String.fromCharCode(122,95,51,56,95,112,115,97,0);
    let countdownt = String.fromCharCode(118,105,116,97,108,105,107,108,105,122,101,95,54,95,49,52,0);
      nativeV += const_jS.length << (Math.min(Math.abs(2), 4));
   for (let i = 0; i < 2; i++) {
       let long_dhJ = 3.0;
       let flipperi = true;
       let layoutP: Map<any, any> = new Map([[String.fromCharCode(111,95,57,52,95,116,111,112,105,99,115,0),String.fromCharCode(112,95,56,51,95,114,111,111,116,0)], [String.fromCharCode(102,114,97,103,109,101,110,116,95,57,95,55,0),String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,55,95,56,48,0)]]);
       let away0 = 2.0;
       let send3 = 1.0;
      for (let m = 0; m < 2; m++) {
          let stationsF: Map<any, any> = new Map([[String.fromCharCode(108,95,49,50,95,114,101,99,111,118,101,114,0),172], [String.fromCharCode(98,111,111,115,116,101,100,95,99,95,52,55,0),92]]);
          let gesturesP = String.fromCharCode(102,95,56,51,95,115,112,97,114,115,101,0);
         away0 /= Math.max(1, parseFloat(`${gesturesP.length}`));
         stationsF.set(`${stationsF.size}`, 1);
         gesturesP += `${stationsF.size}`;
      }
      for (let f = 0; f < 1; f++) {
         flipperi = layoutP.size == 20 && flipperi;
      }
         flipperi = away0 == 15.18;
         away0 *= parseFloat(`${2 << (Math.min(4, Math.abs(layoutP.size)))}`);
         layoutP = new Map([[`${long_dhJ}`, parseInt(`${long_dhJ}`) >> (Math.min(5, Math.abs(3)))]]);
          let filterS = true;
          let remindery = String.fromCharCode(105,119,104,116,120,95,50,95,51,57,0);
         away0 -= parseFloat(`${1 - parseInt(`${away0}`)}`);
         filterS = ((remindery.length | (filterS ? 5 : remindery.length)) > 5);
      while ((away0 + 3.9) == 5.69 || 3.9 == (away0 + parseFloat(`${layoutP.size}`))) {
         away0 /= Math.max((parseFloat(`${parseInt(`${long_dhJ}`) ^ (flipperi ? 3 : 1)}`)), 4);
         break;
      }
          let splashE: Array<any> = [981, 906, 498];
          let mimoV = String.fromCharCode(99,95,53,56,95,103,114,97,112,104,113,108,0);
         flipperi = 86.80 >= send3;
         splashE.push(splashE.length << (Math.min(Math.abs(2), 1)));
         mimoV = `${(String.fromCharCode(54,0) == mimoV ? mimoV.length : splashE.length)}`;
      if (layoutP.size >= 4) {
          let policyq = 0;
          let nativeexB = true;
          let homeg = 1.0;
          let matchm = 4;
         away0 *= parseFloat(`${policyq / (Math.max(parseInt(`${away0}`), 1))}`);
         policyq >>= Math.min(5, Math.abs(matchm));
         nativeexB = matchm <= parseInt(`${homeg}`);
         homeg *= (parseFloat(`${(nativeexB ? 5 : 1) ^ parseInt(`${homeg}`)}`));
      }
       let watchY: Array<any> = [889, 973];
       let sendJ = String.fromCharCode(114,95,53,57,95,97,114,116,0);
         layoutP.set(`${send3}`, (parseInt(`${send3}`) & (flipperi ? 5 : 1)));
         away0 += parseFloat(`${layoutP.size << (Math.min(Math.abs(3), 5))}`);
      while (sendJ.startsWith(`${watchY.length}`)) {
         sendJ += `${1 | watchY.length}`;
         break;
      }
         flipperi = 22 >= watchY.length || layoutP.size >= 22;
      nativeV /= Math.max(3, parseInt(`${scheduleN}`));
   }
   while (policyE >= 5) {
       let paginationN = false;
       let plusc = 1;
       let countdown2 = String.fromCharCode(109,95,51,50,95,112,111,108,108,115,0);
         paginationN = paginationN && plusc == 22;
         plusc += (countdown2.length + (paginationN ? 3 : 1));
      while (5 >= plusc) {
         plusc |= 3;
         break;
      }
      let bing7 = countdown2.length <= 6358542;
      do {
         countdown2 += `${(String.fromCharCode(78,0) == countdown2 ? countdown2.length : plusc)}`;
         if (bing7) {
            break;
         }
      } while (bing7 && (!countdown2.includes(`${paginationN}`)));
      if (!paginationN) {
         paginationN = countdown2.length > 20;
      }
         plusc *= 1 & countdown2.length;
         paginationN = countdown2.startsWith(`${plusc}`);
         plusc &= 3;
       let catagoryb = 5.0;
      policyE &= 2;
      break;
   }
   for (let t = 0; t < 1; t++) {
      fastforwardC /= Math.max(4, parseFloat(`${greyJ.length}`));
   }
   if (1.7 >= scheduleN || (scheduleN / 1.7) >= 5.74) {
      scheduleN -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${fastforwardC}`)), 4))}`);
   }
   for (let n = 0; n < 2; n++) {
      terms_ = 69.49 < nativeV && scheduleN < 69.49;
   }
      balle = `${parseInt(`${scheduleN}`) / 1}`;
   while (scheduleN >= parseFloat(`${const_jS.length}`)) {
      scheduleN /= Math.max(5, parseFloat(`${1 ^ balle.length}`));
      break;
   }
   if ((5 | gradlewV) == 2 || (const_jS.length | gradlewV) == 5) {
       let containerd = 1.0;
       let ball5 = false;
       let canvass: Array<any> = [536, 593];
      let controli = 6854449.0 <= containerd;
      do {
          let short_lo = String.fromCharCode(107,95,50,50,95,114,101,100,117,99,116,105,111,110,0);
          let blacklisto = 1.0;
         containerd += 2 >> (Math.min(Math.abs(parseInt(`${containerd}`)), 1));
         short_lo = `${short_lo.length - 3}`;
         blacklisto += parseFloat(`${parseInt(`${blacklisto}`) >> (Math.min(Math.abs(2), 5))}`);
         if (controli) {
            break;
         }
      } while (controli && ((canvass.length >> (Math.min(Math.abs(4), 1))) == 3 || 2 == (canvass.length % 4)));
          let spinner5: Array<any> = [String.fromCharCode(101,95,52,52,0), String.fromCharCode(99,111,109,109,97,95,117,95,55,54,0), String.fromCharCode(97,117,110,105,110,105,116,95,104,95,57,54,0)];
          let appsR = String.fromCharCode(97,108,105,97,115,101,115,95,105,95,51,51,0);
          let sportsF = String.fromCharCode(102,101,116,99,104,95,119,95,57,51,0);
         ball5 = String.fromCharCode(106,0) == appsR;
         spinner5.push(sportsF.length);
         appsR += "3";
         sportsF = `${sportsF.length & 2}`;
       let update_bU = String.fromCharCode(105,95,52,53,95,112,114,101,118,0);
       let reminderb = String.fromCharCode(120,95,52,50,95,116,114,117,116,104,0);
      let volume6 = 6591482 <= update_bU.length;
      do {
         update_bU = `${(reminderb == String.fromCharCode(102,0) ? reminderb.length : canvass.length)}`;
         if (volume6) {
            break;
         }
      } while ((update_bU.startsWith(reminderb)) && volume6);
         update_bU += `${update_bU.length >> (Math.min(5, Math.abs(parseInt(`${containerd}`))))}`;
      for (let a = 0; a < 1; a++) {
          let dragF = 3.0;
          let annerT = 5.0;
         update_bU += `${reminderb.length}`;
         dragF /= Math.max(parseFloat(`${parseInt(`${annerT}`)}`), 5);
         annerT /= Math.max(5, 2 ^ parseInt(`${annerT}`));
      }
         ball5 = reminderb.length <= parseInt(`${containerd}`);
         ball5 = reminderb.length <= 87;
      for (let u = 0; u < 1; u++) {
         update_bU += `${canvass.length}`;
      }
      const_jS = `${(gradlewV % (Math.max(6, (terms_ ? 1 : 2))))}`;
   }
   let sina7 = 7464640.0 <= fastforwardC;
   do {
      fastforwardC *= parseFloat(`${parseInt(`${scheduleN}`) * 1}`);
      if (sina7) {
         break;
      }
   } while (sina7 && (5.13 == (gradlewV / (Math.max(fastforwardC, 8)))));
   for (let i = 0; i < 2; i++) {
      policyE &= episodeu.size;
   }
   if ((fastforwardC - scheduleN) <= 4.56) {
      scheduleN /= Math.max(4, parseFloat(`${parseInt(`${scheduleN}`) >> (Math.min(2, Math.abs(1)))}`));
   }
   if (5 == (episodeu.size + parseInt(`${nativeV}`)) && 5.12 == (3.18 + nativeV)) {
      episodeu = new Map([[`${episodeu.size}`, const_jS.length * 3]]);
   }
   for (let u = 0; u < 3; u++) {
       let buildy = 3.0;
       let details7: Map<any, any> = new Map([[String.fromCharCode(122,95,56,55,95,110,97,109,101,100,0),616], [String.fromCharCode(103,95,52,51,95,115,101,110,100,101,114,115,0),374]]);
         buildy *= parseFloat(`${3}`);
         buildy += parseFloat(`${parseInt(`${buildy}`)}`);
         buildy /= Math.max(5, parseFloat(`${parseInt(`${buildy}`) % 1}`));
      let controlsp = 8602926 <= details7.size;
      do {
          let mbsplashj: Map<any, any> = new Map([[String.fromCharCode(102,97,108,108,111,102,102,95,122,95,55,57,0),String.fromCharCode(121,95,49,57,0)], [String.fromCharCode(116,116,97,101,110,99,100,115,112,95,115,95,57,52,0),String.fromCharCode(121,95,57,53,95,109,97,114,107,101,114,0)]]);
          let moonh = String.fromCharCode(99,111,108,99,111,108,95,104,95,55,52,0);
         details7 = new Map([[`${mbsplashj.size}`, parseInt(`${buildy}`) & 2]]);
         mbsplashj = new Map([[moonh, 2]]);
         moonh = `${(moonh == String.fromCharCode(85,0) ? moonh.length : moonh.length)}`;
         if (controlsp) {
            break;
         }
      } while ((Array.from(details7.values()).includes(buildy)) && controlsp);
      while (4.41 == (4.15 * buildy)) {
          let favicon0 = String.fromCharCode(122,95,51,95,116,97,112,102,105,108,116,101,114,0);
         buildy /= Math.max(parseFloat(`${details7.size & 1}`), 1);
         favicon0 += `${favicon0.length}`;
         break;
      }
          let sidet = String.fromCharCode(113,95,57,54,95,118,112,109,116,0);
         buildy *= (parseFloat(`${sidet == String.fromCharCode(106,0) ? details7.size : sidet.length}`));
      scheduleN *= parseFloat(`${parseInt(`${buildy}`)}`);
   }
   while ((parseInt(`${scheduleN}`) + 1) >= 2 || (greyJ.length + parseInt(`${scheduleN}`)) >= 1) {
       let hook8 = 2.0;
       let roomy = true;
       let mbjscommonF = String.fromCharCode(110,118,101,110,99,95,107,95,54,49,0);
      if (mbjscommonF.length <= 4) {
         roomy = !roomy;
      }
      let mbridge4 = hook8 >= 7996075.0;
      do {
          let gesturesq = 1.0;
         hook8 -= mbjscommonF.length ^ 2;
         gesturesq /= Math.max(1, parseInt(`${gesturesq}`));
         if (mbridge4) {
            break;
         }
      } while ((roomy) && mbridge4);
       let mimok = 3.0;
      for (let k = 0; k < 2; k++) {
         mimok /= Math.max((String.fromCharCode(66,0) == mbjscommonF ? (roomy ? 2 : 3) : mbjscommonF.length), 2);
      }
      if (roomy) {
         roomy = hook8 <= 75.32 || !roomy;
      }
         mbjscommonF = `${parseInt(`${mimok}`) / (Math.max(mbjscommonF.length, 2))}`;
      for (let f = 0; f < 1; f++) {
          let stepM = 4.0;
          let traminiP = String.fromCharCode(118,112,100,120,95,54,95,49,0);
          let mappingA = String.fromCharCode(107,95,49,50,95,110,111,114,109,97,108,0);
          let rankm = String.fromCharCode(119,95,56,50,95,100,114,97,102,116,0);
         roomy = traminiP.length > 35;
         stepM += parseFloat(`${3 << (Math.min(5, Math.abs(parseInt(`${stepM}`))))}`);
         traminiP = `${rankm.length}`;
         mappingA = `${rankm.length}`;
      }
      while (4.86 >= (hook8 + 3.12) && !roomy) {
         roomy = 30.13 == hook8;
         break;
      }
      if ((mimok * 3.66) <= 2.100) {
         roomy = 20.98 < hook8;
      }
      scheduleN *= (parseFloat(`${policyE % (Math.max(8, (roomy ? 2 : 1)))}`));
      break;
   }
      const_jS = `${3 >> (Math.min(4, Math.abs(parseInt(`${nativeV}`))))}`;
   if (balle.length <= 1) {
      balle += "3";
   }
      const_jS = `${parseInt(`${scheduleN}`) ^ 3}`;
   while (3.54 <= scheduleN) {
      scheduleN *= parseFloat(`${1}`);
      break;
   }
       let rankP = 1;
       let apple6 = String.fromCharCode(106,95,51,53,95,112,101,114,109,105,115,115,105,111,110,0);
      while (3 >= (5 << (Math.min(1, Math.abs(rankP)))) || 5 >= (rankP << (Math.min(apple6.length, 5)))) {
         apple6 = "2";
         break;
      }
      let eighteenB = 5837515 <= rankP;
      do {
         rankP >>= Math.min(Math.abs(rankP << (Math.min(apple6.length, 1))), 2);
         if (eighteenB) {
            break;
         }
      } while ((4 <= (rankP % (Math.max(1, apple6.length)))) && eighteenB);
      while ((rankP & apple6.length) > 4) {
         rankP += 3 & rankP;
         break;
      }
         apple6 += `${apple6.length}`;
         apple6 += "2";
       let pathH = String.fromCharCode(114,101,116,114,105,101,118,105,110,103,95,102,95,57,49,0);
       let readR = String.fromCharCode(115,99,97,108,101,95,52,95,53,57,0);
      fastforwardC /= Math.max(4, (parseFloat(`${balle == String.fromCharCode(114,0) ? balle.length : parseInt(`${nativeV}`)}`)));
   while (4.98 == (3.51 - fastforwardC)) {
      fastforwardC /= Math.max(parseFloat(`${policyE}`), 1);
      break;
   }
       let ajax4 = String.fromCharCode(108,95,50,55,95,114,97,110,115,102,111,114,109,0);
       let applicationK: Map<any, any> = new Map([[String.fromCharCode(109,95,49,49,95,99,111,110,110,101,99,116,120,0),526], [String.fromCharCode(107,95,51,52,95,117,110,101,115,99,97,112,101,0),445], [String.fromCharCode(114,101,102,112,116,114,95,51,95,55,53,0),491]]);
       let mappingD = false;
      let dycreatorl = mappingD ? !mappingD : mappingD;
      do {
         mappingD = (applicationK.size - ajax4.length) <= 11;
         if (dycreatorl) {
            break;
         }
      } while ((applicationK.size == 5) && dycreatorl);
         applicationK.set(`${ajax4}`, 2 + ajax4.length);
         mappingD = (applicationK.size % (Math.max(ajax4.length, 10))) < 38;
      for (let b = 0; b < 1; b++) {
          let mbbidb: Map<any, any> = new Map([[String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,108,95,50,56,0),false ], [String.fromCharCode(99,95,55,95,101,109,117,108,97,116,101,0),true ], [String.fromCharCode(116,117,114,110,95,102,95,51,51,0),true ]]);
          let canvask = 1;
          let modityJ = String.fromCharCode(116,95,52,51,95,97,117,116,111,99,108,111,115,101,0);
          let switch_eG = 4;
          let specL = 2.0;
         mappingD = ajax4.length == 94;
         mbbidb = new Map([[`${mbbidb.size}`, 1]]);
         canvask *= switch_eG << (Math.min(Math.abs(3), 4));
         modityJ += `${switch_eG * modityJ.length}`;
         specL *= parseFloat(`${3 / (Math.max(2, canvask))}`);
      }
      if (ajax4.endsWith(`${applicationK.size}`)) {
         ajax4 = `${(String.fromCharCode(66,0) == ajax4 ? ajax4.length : (mappingD ? 2 : 5))}`;
      }
       let inactiveT = true;
          let unselectedW = true;
          let recommendationQ = false;
          let frame_1J: Map<any, any> = new Map([[String.fromCharCode(114,95,53,54,95,112,114,105,109,101,115,0),true ], [String.fromCharCode(99,95,53,55,95,101,120,112,108,97,105,110,0),false ]]);
         inactiveT = frame_1J.size == 77 || mappingD;
         unselectedW = (recommendationQ ? unselectedW : !recommendationQ);
         frame_1J = new Map([[`${unselectedW}`, 1]]);
      let pressureL = 8900509 >= ajax4.length;
      do {
         ajax4 = `${applicationK.size}`;
         if (pressureL) {
            break;
         }
      } while (pressureL && (mappingD));
       let configt: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,111,112,95,97,95,54,51,0),667], [String.fromCharCode(120,95,53,57,95,112,97,114,101,110,116,0),262]]);
       let promotionE: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,115,117,98,114,101,115,117,108,116,0),true ], [String.fromCharCode(109,101,114,103,101,95,110,95,53,0),true ]]);
      policyE %= Math.max(3, 4);
   for (let f = 0; f < 1; f++) {
      fastforwardC -= parseFloat(`${3 & const_jS.length}`);
   }
   while (gradlewV <= 1) {
      const_jS = `${(balle == String.fromCharCode(90,0) ? balle.length : parseInt(`${nativeV}`))}`;
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
       let typingh = String.fromCharCode(98,105,103,116,114,101,101,95,120,95,49,0);
    let profileK = 1;
    let mbridgeI: Array<any> = [String.fromCharCode(111,112,101,110,109,112,116,95,97,95,53,51,0), String.fromCharCode(100,95,56,51,95,109,97,107,101,116,97,114,98,97,108,108,0)];
    let brightnessp: Array<any> = [551, 292, 295];
    let stationq = 0.0;
    let auto_7E: Map<any, any> = new Map([[String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,118,95,51,49,0),661], [String.fromCharCode(115,105,103,97,108,103,95,122,95,53,48,0),627]]);
    let coreP = String.fromCharCode(112,105,120,100,101,115,99,95,49,95,49,48,0);
    let scheduleu = 4.0;
    let helperl: Map<any, any> = new Map([[String.fromCharCode(102,95,54,95,99,108,111,115,101,100,0),String.fromCharCode(116,114,97,110,115,102,111,114,109,95,122,95,51,0)], [String.fromCharCode(101,95,55,57,95,112,114,101,115,101,110,99,101,0),String.fromCharCode(122,95,53,56,95,115,99,104,101,109,97,115,0)], [String.fromCharCode(114,101,112,111,114,116,105,110,103,95,53,95,57,51,0),String.fromCharCode(114,95,49,56,95,112,114,101,115,101,114,118,101,0)]]);
   let mail7 = brightnessp.length >= 6971419;
   do {
       let tumbnailv = 2;
       let j_managerH = true;
       let emojiw = 1.0;
       let becomee = 4.0;
       let liveM = 1.0;
         tumbnailv /= Math.max(3 - parseInt(`${emojiw}`), 1);
         emojiw *= parseFloat(`${parseInt(`${becomee}`)}`);
         tumbnailv >>= Math.min(1, Math.abs((tumbnailv * (j_managerH ? 1 : 2))));
       let moonk: Array<any> = [448, 16, 640];
       let routerC: Array<any> = [647, 242, 106];
          let policyk = true;
          let stepv: Map<any, any> = new Map([[String.fromCharCode(104,95,51,52,95,122,101,114,111,0),283], [String.fromCharCode(108,105,110,107,95,107,95,56,49,0),646], [String.fromCharCode(117,95,51,50,95,114,101,118,105,101,119,0),162]]);
          let favoritey = 0.0;
         becomee += parseFloat(`${parseInt(`${emojiw}`)}`);
         policyk = !policyk;
         stepv = new Map([[`${stepv.size}`, stepv.size - 2]]);
         favoritey += parseFloat(`${2}`);
      let orientationL = 6324984 >= tumbnailv;
      do {
          let filedw = 4.0;
         tumbnailv <<= Math.min(5, Math.abs(moonk.length / (Math.max(3, 3))));
         filedw -= 1 / (Math.max(parseInt(`${filedw}`), 5));
         if (orientationL) {
            break;
         }
      } while (orientationL && (3 < moonk.length));
       let backe: Array<any> = [953, 558, 110];
       let optionsc: Array<any> = [893, 21];
       let nterstitialS: Array<any> = [335, 810, 754];
      let playlistO = becomee >= 8262446.0;
      do {
          let vignettej = 0.0;
          let shrinkV = 3;
          let reminderG = true;
         becomee /= Math.max(parseFloat(`${nterstitialS.length + backe.length}`), 5);
         vignettej -= (parseInt(`${vignettej}`) + (reminderG ? 2 : 5));
         shrinkV ^= shrinkV;
         reminderG = 18.46 <= vignettej;
         if (playlistO) {
            break;
         }
      } while (playlistO && (1 < moonk.length));
         becomee -= parseFloat(`${moonk.length}`);
      let networkW = becomee >= 7611654.0;
      do {
          let buildx = 1;
          let securityb = 0.0;
          let backwardY = String.fromCharCode(102,95,49,48,95,112,117,98,107,101,121,0);
          let shrinks = 3.0;
         becomee -= parseFloat(`${1 - parseInt(`${liveM}`)}`);
         buildx -= buildx * parseInt(`${securityb}`);
         securityb -= (String.fromCharCode(74,0) == backwardY ? parseInt(`${shrinks}`) : backwardY.length);
         shrinks += 1;
         if (networkW) {
            break;
         }
      } while ((1.60 == becomee) && networkW);
         liveM += parseInt(`${emojiw}`);
      for (let c = 0; c < 2; c++) {
          let fastc = String.fromCharCode(118,105,111,108,97,116,105,111,110,95,116,95,49,56,0);
          let header2: Array<any> = [858, 551, 600];
          let favorited: Array<any> = [152, 284, 651];
          let toponQ = true;
          let benefitn = String.fromCharCode(99,95,57,50,95,115,112,97,110,115,0);
         j_managerH = 21.17 >= emojiw;
         fastc += "3";
         header2.push((String.fromCharCode(110,0) == benefitn ? benefitn.length : (toponQ ? 5 : 4)));
         favorited = [3 ^ benefitn.length];
      }
      let notification4 = nterstitialS.length >= 9010218;
      do {
         nterstitialS = [2];
         if (notification4) {
            break;
         }
      } while (notification4 && (2.14 == liveM));
      while (3.76 == (nterstitialS.length / (Math.max(5, liveM))) || (liveM / 3.76) == 4.83) {
         nterstitialS = [nterstitialS.length >> (Math.min(Math.abs(1), 1))];
         break;
      }
      brightnessp.push(brightnessp.length * 2);
      if (mail7) {
         break;
      }
   } while (mail7 && (parseFloat(`${brightnessp.length}`) >= stationq));
      typingh = `${(coreP == String.fromCharCode(108,0) ? coreP.length : mbridgeI.length)}`;
   if ((parseFloat(`${auto_7E.size}`) * stationq) > 3.62 && 1.64 > (3.62 * stationq)) {
      stationq /= Math.max(parseFloat(`${3}`), 1);
   }
   while (3 == brightnessp.length) {
      profileK ^= 2 + brightnessp.length;
      break;
   }
   if ((coreP.length ^ profileK) <= 1) {
      coreP += `${auto_7E.size & brightnessp.length}`;
   }
      brightnessp.push(2 | auto_7E.size);
      stationq -= parseFloat(`${3 + brightnessp.length}`);
   let acceptedF = String.fromCharCode(105,49,120,106,113,52,53,52,109,119,0) == typingh;
   do {
      typingh += `${brightnessp.length | 1}`;
      if (acceptedF) {
         break;
      }
   } while (acceptedF && (!typingh.includes(`${profileK}`)));

    clearTimeout(timer.current);

   for (let n = 0; n < 1; n++) {
       let downloadedV = String.fromCharCode(110,95,49,52,95,109,97,116,104,0);
       let scoreT = String.fromCharCode(100,118,97,117,100,105,111,95,56,95,56,49,0);
      if (scoreT.endsWith(`${downloadedV.length}`)) {
         downloadedV = `${scoreT.length * downloadedV.length}`;
      }
      let connectiont = 6696815 >= scoreT.length;
      do {
         scoreT += `${scoreT.length}`;
         if (connectiont) {
            break;
         }
      } while ((scoreT.length == 4) && connectiont);
          let eighteenE = 5.0;
         scoreT += `${scoreT.length}`;
         eighteenE += parseFloat(`${1}`);
         downloadedV += `${scoreT.length}`;
      if (downloadedV.length > 3) {
          let langkeyw: Array<any> = [642, 100];
         downloadedV += `${2 ^ downloadedV.length}`;
         langkeyw.push(langkeyw.length - 2);
      }
         scoreT = `${downloadedV.length}`;
      stationq -= (parseFloat(`${scoreT == String.fromCharCode(56,0) ? auto_7E.size : scoreT.length}`));
   }
   for (let h = 0; h < 3; h++) {
      typingh = `${parseInt(`${scheduleu}`)}`;
   }
   if (2.2 < (scheduleu / (Math.max(coreP.length, 7))) || (2.2 / (Math.max(2, scheduleu))) < 3.20) {
      scheduleu += coreP.length;
   }
      stationq *= parseFloat(`${mbridgeI.length << (Math.min(brightnessp.length, 1))}`);
   for (let i = 0; i < 3; i++) {
      scheduleu -= 3;
   }
      brightnessp.push(2 + profileK);
      coreP = `${auto_7E.size}`;
   let bottomc = mbridgeI.length <= 9381542;
   do {
       let footballA: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,95,121,95,49,48,0),779], [String.fromCharCode(103,95,55,54,95,97,110,110,111,116,97,116,101,0),713], [String.fromCharCode(112,115,104,95,106,95,54,49,0),522]]);
       let crossP: Array<any> = [640, 556, 510];
       let basketball1 = 0.0;
         basketball1 -= 1;
      for (let r = 0; r < 3; r++) {
          let singlec = true;
          let chart6: Map<any, any> = new Map([[String.fromCharCode(113,95,55,55,95,97,99,99,114,117,101,100,0),String.fromCharCode(114,95,50,51,95,115,117,99,99,101,115,115,111,114,0)], [String.fromCharCode(115,95,50,55,95,116,114,101,101,114,101,97,100,101,114,0),String.fromCharCode(115,117,98,115,116,105,116,117,116,101,95,106,95,55,49,0)]]);
         footballA.set(`${basketball1}`, 1);
         singlec = null == chart6.get(`${singlec}`);
         chart6 = new Map([[`${chart6.size}`, ((singlec ? 5 : 4) / (Math.max(1, 10)))]]);
      }
          let placeholderI = String.fromCharCode(116,97,116,105,99,95,117,95,54,55,0);
         basketball1 /= Math.max(4, 1 | parseInt(`${basketball1}`));
         placeholderI += `${(placeholderI == String.fromCharCode(112,0) ? placeholderI.length : placeholderI.length)}`;
         crossP = [crossP.length >> (Math.min(Math.abs(3), 4))];
         footballA.set(`${crossP.length}`, footballA.size >> (Math.min(crossP.length, 2)));
         basketball1 -= parseInt(`${basketball1}`) / 1;
      let typesa = 9761216 <= crossP.length;
      do {
          let description_jj = 0.0;
          let smallz = 3.0;
          let u_lockd: Array<any> = [471, 186, 576];
          let mbbannerE = String.fromCharCode(115,111,114,101,99,118,109,115,103,95,97,95,52,49,0);
         crossP = [parseInt(`${smallz}`) * parseInt(`${description_jj}`)];
         description_jj /= Math.max(parseFloat(`${mbbannerE.length * 3}`), 1);
         smallz -= mbbannerE.length | 1;
         u_lockd = [mbbannerE.length >> (Math.min(4, u_lockd.length))];
         if (typesa) {
            break;
         }
      } while (typesa && (Array.from(footballA.values()).includes(crossP.length)));
         crossP = [1 | footballA.size];
          let rewindX = String.fromCharCode(118,95,50,54,95,118,116,97,103,0);
         crossP.push((rewindX == String.fromCharCode(100,0) ? footballA.size : rewindX.length));
      mbridgeI = [profileK ^ 3];
      if (bottomc) {
         break;
      }
   } while (bottomc && (5 == (mbridgeI.length + 2) && 3 == (mbridgeI.length + 2)));
    setShowOverlay(true);

      scheduleu -= mbridgeI.length;
      mbridgeI.push(1);
   while (1 < (profileK * 1) || 2.13 < (scheduleu - profileK)) {
       let line5 = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,56,95,57,57,0);
       let sortg: Map<any, any> = new Map([[String.fromCharCode(101,95,53,50,95,118,97,108,117,108,101,0),833], [String.fromCharCode(113,95,50,50,95,112,114,111,100,117,99,116,0),365], [String.fromCharCode(109,95,49,57,95,101,100,105,97,0),200]]);
       let langs: Array<any> = [711, 12, 195];
       let rewardg = String.fromCharCode(108,105,115,116,101,110,101,114,95,53,95,55,52,0);
       let w_locka = 1.0;
       let guideM = 2.0;
      let agreementR = line5 == String.fromCharCode(51,57,121,119,54,0);
      do {
         line5 = `${parseInt(`${w_locka}`) / (Math.max(line5.length, 4))}`;
         if (agreementR) {
            break;
         }
      } while (agreementR && ((1 * line5.length) > 5 || 4 > (langs.length * 1)));
      let sliderP = rewardg == String.fromCharCode(122,118,48,100,115,115,117,57,117,116,0);
      do {
          let smallw = 1.0;
          let diceT = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,112,95,54,50,0);
          let agreementv = String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,111,95,52,50,0);
          let videocommonm: Array<any> = [706, 444];
          let private_z8i = String.fromCharCode(105,115,116,97,112,95,51,95,52,0);
         rewardg = `${2 - parseInt(`${w_locka}`)}`;
         smallw -= parseFloat(`${parseInt(`${smallw}`) * diceT.length}`);
         diceT = "3";
         agreementv = `${(diceT == String.fromCharCode(76,0) ? parseInt(`${smallw}`) : diceT.length)}`;
         videocommonm = [2 - diceT.length];
         private_z8i += `${diceT.length % 3}`;
         if (sliderP) {
            break;
         }
      } while ((2 == line5.length) && sliderP);
         rewardg += `${line5.length >> (Math.min(Math.abs(3), 1))}`;
          let main_jS = false;
         langs = [2 - parseInt(`${w_locka}`)];
         main_jS = (!main_jS ? !main_jS : main_jS);
      let malaysiaT = String.fromCharCode(117,113,108,51,120,55,0) == line5;
      do {
         line5 = `${langs.length}`;
         if (malaysiaT) {
            break;
         }
      } while (malaysiaT && (3.63 == w_locka));
         sortg = new Map([[line5, 2 >> (Math.min(3, line5.length))]]);
         guideM *= 3 % (Math.max(9, parseInt(`${guideM}`)));
      for (let y = 0; y < 3; y++) {
         sortg.set(`${w_locka}`, parseInt(`${guideM}`));
      }
         langs = [3];
          let selectionX: Map<any, any> = new Map([[String.fromCharCode(119,95,56,57,95,105,109,99,100,97,116,97,0),759], [String.fromCharCode(103,104,97,115,104,95,103,95,52,54,0),971], [String.fromCharCode(115,98,108,111,103,95,115,95,49,50,0),42]]);
          let detailsp = String.fromCharCode(117,95,51,50,95,112,114,101,115,101,110,116,105,110,103,0);
         sortg.set(detailsp, parseInt(`${guideM}`));
         selectionX.set(`${selectionX.size}`, selectionX.size | 3);
         detailsp += `${selectionX.size ^ selectionX.size}`;
      let privacyb = 9807227.0 >= w_locka;
      do {
          let buildG = String.fromCharCode(109,101,103,97,98,121,116,101,95,110,95,51,52,0);
          let expandE = String.fromCharCode(108,95,57,50,95,100,105,97,108,111,103,0);
         w_locka *= sortg.size >> (Math.min(buildG.length, 1));
         buildG += `${(expandE == String.fromCharCode(79,0) ? expandE.length : expandE.length)}`;
         if (privacyb) {
            break;
         }
      } while (((parseInt(`${w_locka}`) / (Math.max(langs.length, 4))) < 1) && privacyb);
      profileK <<= Math.min(3, Math.abs(2));
      break;
   }
   while (4 <= coreP.length) {
      auto_7E.set(`${scheduleu}`, mbridgeI.length * 2);
      break;
   }
      coreP = `${profileK + brightnessp.length}`;
   if ((stationq / (Math.max(1.55, 2))) >= 1.35 || 1.55 >= (stationq / (Math.max(parseFloat(`${typingh.length}`), 1)))) {
      stationq -= parseFloat(`${auto_7E.size * parseInt(`${scheduleu}`)}`);
   }
      auto_7E = new Map([[`${brightnessp.length}`, profileK]]);
      coreP = `${parseInt(`${stationq}`) | brightnessp.length}`;
    overlayRef.current = true;

   if (coreP.includes(`${stationq}`)) {
      coreP += `${auto_7E.size / (Math.max(3, 6))}`;
   }
       let register_ful = 3.0;
       let acceptedT = String.fromCharCode(115,117,98,116,101,114,109,95,56,95,56,54,0);
         acceptedT = `${3 / (Math.max(10, acceptedT.length))}`;
         acceptedT = `${1 >> (Math.min(3, acceptedT.length))}`;
      for (let a = 0; a < 2; a++) {
         register_ful += parseFloat(`${parseInt(`${register_ful}`) / (Math.max(acceptedT.length, 9))}`);
      }
         register_ful += parseFloat(`${2 >> (Math.min(4, acceptedT.length))}`);
       let foundw: Map<any, any> = new Map([[String.fromCharCode(118,102,114,101,101,95,110,95,51,48,0),false ], [String.fromCharCode(115,116,114,105,100,105,110,103,95,57,95,56,55,0),true ]]);
       let contextd: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,118,111,105,99,101,115,0),String.fromCharCode(98,95,49,52,95,105,110,116,101,114,105,116,101,109,0)], [String.fromCharCode(109,97,105,110,110,101,116,115,95,98,95,55,52,0),String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,95,53,95,50,49,0)], [String.fromCharCode(106,95,53,49,95,102,117,108,108,121,0),String.fromCharCode(112,95,50,95,101,116,105,109,101,0)]]);
         register_ful *= parseFloat(`${parseInt(`${register_ful}`) ^ foundw.size}`);
      scheduleu /= Math.max(parseInt(`${register_ful}`) | helperl.size, 4);
   for (let w = 0; w < 3; w++) {
      helperl.set(`${scheduleu}`, auto_7E.size << (Math.min(Math.abs(2), 3)));
   }
       let formM = false;
       let detailq: Array<any> = [259, 830, 791];
       let contextZ: Map<any, any> = new Map([[String.fromCharCode(117,95,51,51,95,117,110,105,113,117,101,0),307], [String.fromCharCode(115,111,102,116,119,97,114,101,95,103,95,51,55,0),46], [String.fromCharCode(114,101,108,111,99,107,95,102,95,56,55,0),509]]);
         formM = (detailq.length >> (Math.min(Math.abs(contextZ.size), 1))) < 56;
         detailq.push(contextZ.size);
         formM = (detailq.length - contextZ.size) > 70;
      while (formM) {
         detailq = [((formM ? 1 : 2) % 3)];
         break;
      }
      for (let l = 0; l < 2; l++) {
         formM = detailq.length == 43;
      }
      for (let k = 0; k < 2; k++) {
         formM = 77 == contextZ.size || 77 == detailq.length;
      }
      if ((detailq.length & contextZ.size) < 5) {
         contextZ.set(`${formM}`, detailq.length);
      }
          let grayo = String.fromCharCode(101,110,97,98,108,101,95,113,95,49,0);
          let statso = String.fromCharCode(105,95,52,54,95,105,110,105,116,105,97,108,105,122,101,0);
          let sportsA = String.fromCharCode(112,95,50,48,95,117,115,114,115,99,116,112,0);
         formM = !formM;
         grayo = "3";
         statso += `${statso.length}`;
         sportsA += `${sportsA.length}`;
      let logow = formM ? !formM : formM;
      do {
         formM = (contextZ.size & detailq.length) < 99;
         if (logow) {
            break;
         }
      } while (logow && (2 == detailq.length));
      profileK <<= Math.min(Math.abs(parseInt(`${stationq}`) | brightnessp.length), 2);
      auto_7E.set(`${scheduleu}`, profileK % (Math.max(parseInt(`${scheduleu}`), 9)));
      typingh = `${auto_7E.size}`;
      typingh += `${parseInt(`${stationq}`) << (Math.min(mbridgeI.length, 4))}`;
   while (auto_7E.get(`${scheduleu}`) != null) {
      auto_7E.set(`${stationq}`, parseInt(`${stationq}`) + 2);
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
       let minivodn = String.fromCharCode(119,100,108,116,95,116,95,53,56,0);
    let interstitial4: Map<any, any> = new Map([[String.fromCharCode(98,109,111,100,101,95,101,95,54,51,0),884], [String.fromCharCode(109,95,52,51,95,109,97,103,110,105,116,117,100,101,115,0),31], [String.fromCharCode(106,95,56,50,95,115,108,111,119,109,111,100,101,0),354]]);
    let index1 = 4.0;
    let sansb = 0;
    let penaltyH: Map<any, any> = new Map([[String.fromCharCode(121,95,53,54,95,100,105,115,116,114,105,98,117,116,101,100,0),425], [String.fromCharCode(122,95,54,49,95,99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0),293], [String.fromCharCode(112,114,111,112,101,114,95,57,95,53,51,0),222]]);
    let readd = String.fromCharCode(100,105,97,108,108,101,100,95,98,95,49,52,0);
    let bannerz = 1;
    let calendarg = 4.0;
   let huaweig = 6545438.0 >= index1;
   do {
      index1 += (parseFloat(`${minivodn == String.fromCharCode(103,0) ? minivodn.length : penaltyH.size}`));
      if (huaweig) {
         break;
      }
   } while (huaweig && ((sansb ^ 5) > 5 && 3.74 > (3.32 + index1)));
      sansb *= 3 + sansb;
   if (4 <= bannerz) {
      bannerz -= sansb >> (Math.min(Math.abs(parseInt(`${index1}`)), 1));
   }
       let xvodf = String.fromCharCode(116,97,114,103,97,95,109,95,57,57,0);
         xvodf = "2";
         xvodf = `${xvodf.length << (Math.min(xvodf.length, 2))}`;
          let modelsF = 4.0;
          let circley = String.fromCharCode(120,111,114,101,100,95,106,95,57,0);
         xvodf += `${parseInt(`${modelsF}`) % 3}`;
         modelsF -= parseFloat(`${circley.length - circley.length}`);
      bannerz *= 3 | bannerz;
   while (3 >= (minivodn.length * 1) && 1 >= (minivodn.length * bannerz)) {
      bannerz <<= Math.min(Math.abs(2), 2);
      break;
   }
   let rightO = 9633625.0 >= index1;
   do {
      index1 += parseFloat(`${2 << (Math.min(1, Math.abs(bannerz)))}`);
      if (rightO) {
         break;
      }
   } while (rightO && (5 < readd.length));
   if ((index1 * 2.96) <= 1.31 && (index1 * 2.96) <= 3.69) {
      index1 /= Math.max((parseFloat(`${minivodn == String.fromCharCode(121,0) ? minivodn.length : sansb}`)), 2);
   }

      if (videoRef.current) {
        videoRef.current.seek(isNaN(value) ? 0 : value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
       let leftf = String.fromCharCode(100,109,105,120,95,51,95,52,56,0);
    let evente = 5;
    let modityA = 3;
    let short_2I: Map<any, any> = new Map([[String.fromCharCode(101,95,55,95,100,101,108,101,116,101,100,0),705], [String.fromCharCode(111,112,116,105,109,97,108,95,114,95,55,51,0),573], [String.fromCharCode(110,115,115,101,95,116,95,57,57,0),957]]);
    let description_wis = String.fromCharCode(99,111,114,101,95,51,95,57,55,0);
    let package_au: Array<any> = [618, 264];
    let feedback4 = String.fromCharCode(99,95,53,95,115,111,99,107,101,116,118,97,114,0);
    let tickQ = 1.0;
    let catalogJ = 0.0;
    let countdownv: Array<any> = [217, 178, 848];
    let foundf = String.fromCharCode(97,99,117,116,111,102,102,95,108,95,51,50,0);
    let blackK = String.fromCharCode(109,118,112,114,111,98,115,95,111,95,52,48,0);
    let gradle9 = String.fromCharCode(105,95,53,55,95,113,115,99,97,108,101,113,112,0);
    let fillT = String.fromCharCode(100,114,97,119,108,105,110,101,95,52,95,57,50,0);
    let robotoz = String.fromCharCode(114,95,50,56,95,115,110,111,119,100,97,116,97,0);
    let downloadQ = 2.0;
       let countryC = false;
       let auto_3s = String.fromCharCode(101,95,51,50,95,109,98,98,121,0);
       let otherR = 3.0;
      for (let e = 0; e < 1; e++) {
          let videojsd = 0;
          let u_countz = String.fromCharCode(112,105,120,101,108,102,111,114,109,97,116,95,111,95,53,56,0);
          let d_centerH = String.fromCharCode(117,95,50,50,95,114,103,101,110,0);
         auto_3s = `${parseInt(`${otherR}`) - auto_3s.length}`;
         videojsd %= Math.max(3, 4);
         u_countz += `${d_centerH.length & 2}`;
         d_centerH += `${u_countz.length * 3}`;
      }
       let basketballu = String.fromCharCode(100,95,55,49,95,97,97,99,112,115,121,0);
       let whistled = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,54,95,57,51,0);
      if (whistled.length > 3 && !countryC) {
         whistled = `${((countryC ? 2 : 2) / 3)}`;
      }
          let commonw = String.fromCharCode(116,95,54,50,95,115,116,105,99,107,101,114,0);
          let reactc: Array<any> = [131, 27];
         whistled = `${1 - whistled.length}`;
         commonw = `${reactc.length}`;
         reactc = [(String.fromCharCode(95,0) == commonw ? reactc.length : commonw.length)];
      if (1 == basketballu.length) {
          let orangeM = String.fromCharCode(97,108,108,95,111,95,53,50,0);
          let d_player1 = false;
         basketballu += `${((d_player1 ? 5 : 3) | whistled.length)}`;
         orangeM += `${1 | orangeM.length}`;
         d_player1 = orangeM == String.fromCharCode(84,0);
      }
      if (otherR < 3.64) {
         whistled = `${auto_3s.length}`;
      }
          let bingo = 4;
          let mbnativeadvancedc: Array<any> = [858, 863];
          let mathH = String.fromCharCode(109,95,57,52,95,99,97,108,99,117,108,97,116,101,0);
         auto_3s += "3";
         bingo <<= Math.min(Math.abs(bingo & 2), 3);
         mbnativeadvancedc.push((mathH == String.fromCharCode(88,0) ? bingo : mathH.length));
      if (countryC) {
         basketballu = "2";
      }
         countryC = countryC && whistled.length < 35;
      short_2I.set(foundf, (foundf == String.fromCharCode(113,0) ? foundf.length : short_2I.size));
   while (package_au.length >= feedback4.length) {
      feedback4 += `${countdownv.length + 2}`;
      break;
   }
   while (catalogJ <= evente) {
      catalogJ /= Math.max(short_2I.size, 1);
      break;
   }
   for (let v = 0; v < 2; v++) {
      blackK += `${package_au.length}`;
   }
   let backgroundm = 8699521 >= package_au.length;
   do {
       let loginF = 5;
       let math6 = String.fromCharCode(113,95,56,56,95,109,105,103,114,97,116,101,0);
       let holderQ = 5.0;
       let hooksq = String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,50,95,57,57,0);
         loginF |= loginF;
          let greenu = 2;
         holderQ -= (parseFloat(`${String.fromCharCode(53,0) == hooksq ? greenu : hooksq.length}`));
         holderQ /= Math.max(4, (parseFloat(`${math6 == String.fromCharCode(88,0) ? math6.length : parseInt(`${holderQ}`)}`)));
      while (3 < (loginF % (Math.max(math6.length, 9))) || 3 < (math6.length % (Math.max(7, loginF)))) {
         math6 += `${hooksq.length << (Math.min(Math.abs(1), 2))}`;
         break;
      }
      let search9 = String.fromCharCode(118,120,100,0) == math6;
      do {
         math6 = `${(String.fromCharCode(120,0) == math6 ? loginF : math6.length)}`;
         if (search9) {
            break;
         }
      } while ((math6.endsWith(`${loginF}`)) && search9);
          let style7 = String.fromCharCode(110,95,56,55,95,116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0);
          let gradleg = String.fromCharCode(113,95,54,51,95,105,109,109,101,100,105,97,116,101,108,121,0);
          let small2: Array<any> = [537, 549];
         math6 = `${style7.length * 3}`;
         style7 += `${small2.length + gradleg.length}`;
         gradleg += `${gradleg.length + small2.length}`;
         hooksq = `${math6.length}`;
      if ((5 << (Math.min(1, Math.abs(loginF)))) <= 1 || 1.65 <= (holderQ * 2.8)) {
          let umengK = String.fromCharCode(100,99,97,100,101,99,95,99,95,52,52,0);
          let robotoi = String.fromCharCode(108,105,98,116,103,118,111,105,112,95,55,95,57,50,0);
          let unreadU = String.fromCharCode(109,95,56,54,95,99,111,109,112,111,115,105,116,101,0);
          let moduleT = String.fromCharCode(102,95,52,54,95,121,117,118,110,118,99,0);
         holderQ /= Math.max(2, (parseFloat(`${String.fromCharCode(106,0) == math6 ? parseInt(`${holderQ}`) : math6.length}`)));
         umengK += `${unreadU.length}`;
         robotoi += "2";
         unreadU = `${unreadU.length}`;
         moduleT += `${unreadU.length | moduleT.length}`;
      }
          let s_unlock2 = 2.0;
          let splashC: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,118,95,55,49,0),103], [String.fromCharCode(112,95,55,53,95,97,114,112,101,100,0),916]]);
          let result1 = 4;
         math6 += `${result1}`;
         s_unlock2 /= Math.max(parseFloat(`${parseInt(`${s_unlock2}`) - splashC.size}`), 3);
         splashC = new Map([[`${splashC.size}`, 1]]);
         result1 += 2 | splashC.size;
      if (math6.length > 3) {
         hooksq += `${parseInt(`${holderQ}`) - 2}`;
      }
      if ((4 + loginF) <= 2 && (parseFloat(`${loginF}`) * holderQ) <= 2.23) {
         loginF %= Math.max(4, 2 - loginF);
      }
      if (3.43 < (holderQ + 3.14)) {
         math6 = `${hooksq.length * parseInt(`${holderQ}`)}`;
      }
      package_au.push(loginF / 2);
      if (backgroundm) {
         break;
      }
   } while (backgroundm && (foundf.endsWith(`${package_au.length}`)));

    clearTimeout(iconTimer.current);

   let feedbackV = 5649376 >= short_2I.size;
   do {
       let reactcT = String.fromCharCode(112,101,114,115,105,115,116,95,122,95,54,48,0);
       let photoW = String.fromCharCode(111,95,50,56,95,113,99,101,108,112,100,97,116,97,0);
       let e_player0 = false;
       let remindera = String.fromCharCode(119,97,116,101,114,95,116,95,53,52,0);
      let prediction_ = e_player0 ? !e_player0 : e_player0;
      do {
         e_player0 = reactcT == photoW;
         if (prediction_) {
            break;
         }
      } while (prediction_ && (remindera.endsWith(`${e_player0}`)));
      let fileb = String.fromCharCode(109,107,95,120,57,0) == remindera;
      do {
          let mimo2 = String.fromCharCode(97,112,111,108,108,111,95,100,95,52,50,0);
          let layoutY = 3;
          let next5 = 1;
          let orangeu = 4;
         remindera += `${photoW.length}`;
         mimo2 += `${orangeu + layoutY}`;
         layoutY >>= Math.min(Math.abs(mimo2.length << (Math.min(Math.abs(3), 5))), 3);
         next5 ^= 1 | mimo2.length;
         orangeu -= next5 >> (Math.min(3, Math.abs(orangeu)));
         if (fileb) {
            break;
         }
      } while (fileb && (remindera.length == 4));
      if (reactcT == String.fromCharCode(51,0) || remindera.length >= 2) {
         reactcT += `${((e_player0 ? 4 : 5))}`;
      }
         e_player0 = photoW.length <= 10;
      if (remindera != reactcT) {
         reactcT = `${(reactcT == String.fromCharCode(97,0) ? reactcT.length : (e_player0 ? 2 : 3))}`;
      }
      if (!photoW.includes(reactcT)) {
          let hongkongZ = true;
         photoW += `${reactcT.length ^ 2}`;
         hongkongZ = (hongkongZ ? !hongkongZ : !hongkongZ);
      }
      if (reactcT.endsWith(photoW)) {
          let dycreatorH = 0.0;
         reactcT = `${photoW.length / (Math.max(reactcT.length, 9))}`;
         dycreatorH /= Math.max(1, parseFloat(`${parseInt(`${dycreatorH}`)}`));
      }
          let vignettei = true;
         photoW = `${(1 * (e_player0 ? 4 : 5))}`;
         vignettei = (vignettei ? !vignettei : !vignettei);
          let stations = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,107,95,52,54,0);
          let unselectedn = 1.0;
         remindera += `${(photoW == String.fromCharCode(99,0) ? parseInt(`${unselectedn}`) : photoW.length)}`;
         stations += `${(stations == String.fromCharCode(56,0) ? stations.length : stations.length)}`;
         unselectedn *= stations.length * stations.length;
       let default_fN: Array<any> = [717, 857, 405];
       let reacts: Array<any> = [948, 502, 484];
       let temperatureM = String.fromCharCode(112,108,97,110,97,114,120,95,105,95,49,56,0);
       let relatedT = String.fromCharCode(105,110,116,101,103,114,105,116,121,95,55,95,55,51,0);
      for (let n = 0; n < 2; n++) {
          let abouty = 1.0;
          let v_managerW = false;
         default_fN.push(((e_player0 ? 1 : 2)));
         abouty *= (parseFloat(`${(v_managerW ? 4 : 5) + parseInt(`${abouty}`)}`));
         v_managerW = !v_managerW;
      }
      short_2I = new Map([[`${tickQ}`, parseInt(`${tickQ}`)]]);
      if (feedbackV) {
         break;
      }
   } while (((4 << (Math.min(1, leftf.length))) < 2 && (short_2I.size << (Math.min(leftf.length, 4))) < 4) && feedbackV);
   if (foundf.length > 3) {
      feedback4 += `${countdownv.length}`;
   }
      modityA |= 1 % (Math.max(1, evente));
   if (1 >= (feedback4.length * parseInt(`${tickQ}`)) && (1 - feedback4.length) >= 2) {
       let phones = String.fromCharCode(105,116,101,109,115,95,102,95,49,48,0);
      for (let o = 0; o < 3; o++) {
          let singaporee: Array<any> = [200, 120];
          let context7 = 4;
          let carousele = 3;
         phones += `${(phones == String.fromCharCode(52,0) ? singaporee.length : phones.length)}`;
         singaporee.push(2);
         context7 >>= Math.min(Math.abs(3 & carousele), 5);
         carousele >>= Math.min(1, Math.abs(context7 * carousele));
      }
      while (!phones.includes(`${phones.length}`)) {
          let chinasame_ = String.fromCharCode(111,118,101,114,117,115,101,95,103,95,49,53,0);
          let core8 = false;
          let recommendation6: Array<any> = [835, 314, 502];
          let dplusw: Map<any, any> = new Map([[String.fromCharCode(110,97,110,112,97,95,103,95,49,51,0),String.fromCharCode(113,117,97,114,116,122,95,122,95,54,51,0)], [String.fromCharCode(115,95,54,54,95,102,114,97,109,101,112,111,111,108,0),String.fromCharCode(109,95,51,49,95,102,105,120,116,117,114,101,0)]]);
          let bell4 = 4;
         phones = `${bell4}`;
         chinasame_ = `${3 << (Math.min(2, Math.abs(dplusw.size)))}`;
         core8 = recommendation6.length > 93 || !core8;
         recommendation6.push(recommendation6.length & dplusw.size);
         bell4 *= 2 + recommendation6.length;
         break;
      }
         phones += `${phones.length}`;
      tickQ -= modityA + 2;
   }
   for (let z = 0; z < 3; z++) {
       let pressureC: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,95,99,95,55,56,0),36], [String.fromCharCode(122,95,56,51,95,105,110,118,101,114,115,101,0),107], [String.fromCharCode(120,102,105,120,101,115,95,48,95,50,55,0),613]]);
       let securityU = String.fromCharCode(121,95,55,95,98,97,110,100,115,0);
       let klevin4 = String.fromCharCode(102,95,57,53,0);
       let scoree: Map<any, any> = new Map([[String.fromCharCode(102,95,52,52,95,97,114,109,108,105,110,107,0),714], [String.fromCharCode(97,115,115,101,109,98,108,101,100,95,53,95,49,49,0),660]]);
       let n_countw = true;
          let profileh = false;
          let found2: Map<any, any> = new Map([[String.fromCharCode(109,97,110,117,97,108,95,120,95,53,0),310], [String.fromCharCode(116,95,50,56,95,99,104,114,111,109,97,0),721], [String.fromCharCode(113,95,55,53,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0),289]]);
         securityU += `${((n_countw ? 1 : 1) + (profileh ? 5 : 3))}`;
         profileh = found2.size > found2.size;
         n_countw = scoree.size == klevin4.length;
       let leftO = String.fromCharCode(105,110,115,101,114,116,101,114,95,52,95,57,50,0);
         securityU += `${securityU.length & klevin4.length}`;
      if (!klevin4.startsWith(`${n_countw}`)) {
          let navigationU = String.fromCharCode(112,105,110,99,104,95,48,95,56,56,0);
         n_countw = pressureC.size >= 46;
         navigationU += `${navigationU.length}`;
      }
      while ((klevin4.length ^ pressureC.size) > 2) {
         pressureC.set(leftO, leftO.length * 1);
         break;
      }
         securityU = `${(3 & (n_countw ? 2 : 1))}`;
       let backward7 = 1.0;
       let thailandW = 0.0;
      for (let m = 0; m < 1; m++) {
         leftO = `${leftO.length}`;
      }
          let corel = String.fromCharCode(106,95,55,52,95,122,101,114,111,99,111,100,101,99,0);
          let nterstitialY = true;
         klevin4 = `${pressureC.size / 3}`;
         corel += `${(corel == String.fromCharCode(105,0) ? corel.length : corel.length)}`;
         nterstitialY = corel == corel;
       let o_managerF = 1.0;
      let adultu = n_countw ? !n_countw : n_countw;
      do {
         n_countw = (securityU.length + parseInt(`${backward7}`)) > 96;
         if (adultu) {
            break;
         }
      } while (adultu && (3.59 >= (backward7 - 5.30)));
      while (Array.from(scoree.keys()).includes(`${backward7}`)) {
         scoree.set(`${backward7}`, 1 - parseInt(`${backward7}`));
         break;
      }
         klevin4 = `${3 - securityU.length}`;
      while (!leftO.includes(`${backward7}`)) {
         leftO += `${parseInt(`${thailandW}`) / 2}`;
         break;
      }
      feedback4 += "2";
   }
    setShowIcon(true);

      tickQ += (String.fromCharCode(82,0) == description_wis ? description_wis.length : feedback4.length);
   while ((foundf.length * 4) == 5 || (4 * evente) == 4) {
       let blacklist1 = 1;
       let albumQ: Array<any> = [String.fromCharCode(107,105,116,116,121,95,109,95,53,56,0), String.fromCharCode(102,97,110,99,121,95,101,95,56,57,0), String.fromCharCode(102,95,54,48,95,114,101,118,97,108,105,100,97,116,101,0)];
         albumQ.push(1 + blacklist1);
          let downloadingc: Map<any, any> = new Map([[String.fromCharCode(111,103,103,101,114,95,99,95,53,53,0),false ], [String.fromCharCode(116,95,56,48,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0),true ], [String.fromCharCode(99,95,54,57,95,111,116,111,115,0),false ]]);
          let dice5: Map<any, any> = new Map([[String.fromCharCode(101,95,55,54,95,109,117,108,116,105,99,97,115,116,0),984], [String.fromCharCode(117,95,55,53,95,99,111,110,115,117,109,112,116,105,111,110,0),664]]);
          let showw = String.fromCharCode(115,101,110,100,109,98,117,102,95,116,95,52,49,0);
         blacklist1 -= dice5.size / 3;
         downloadingc.set(`${showw}`, downloadingc.size);
         dice5.set(showw, downloadingc.size);
         albumQ = [albumQ.length];
      for (let y = 0; y < 2; y++) {
         albumQ.push(3);
      }
         albumQ.push(blacklist1 / 1);
      while (3 == (blacklist1 * 3)) {
         albumQ = [blacklist1];
         break;
      }
      foundf += `${package_au.length - 1}`;
      break;
   }
   while ((feedback4.length >> (Math.min(Math.abs(2), 2))) >= 2 && 2 >= (feedback4.length >> (Math.min(3, package_au.length)))) {
      package_au.push(package_au.length >> (Math.min(Math.abs(3), 4)));
      break;
   }
   for (let g = 0; g < 3; g++) {
       let rewindW = String.fromCharCode(100,95,56,54,95,114,101,102,105,110,101,0);
       let slidery = 2.0;
      for (let d = 0; d < 1; d++) {
         rewindW = `${parseInt(`${slidery}`)}`;
      }
      for (let a = 0; a < 3; a++) {
         slidery -= parseFloat(`${parseInt(`${slidery}`)}`);
      }
      for (let y = 0; y < 1; y++) {
         slidery += parseFloat(`${parseInt(`${slidery}`) & rewindW.length}`);
      }
      if ((rewindW.length % (Math.max(2, 3))) < 1 || (2.5 - slidery) < 3.92) {
          let mbsplashD = String.fromCharCode(105,103,110,111,114,105,110,103,95,116,95,53,0);
          let delegate_1cB = String.fromCharCode(112,104,97,115,101,95,120,95,56,48,0);
          let thumbnailo = String.fromCharCode(104,102,108,105,112,95,113,95,56,48,0);
         rewindW += "1";
         mbsplashD += `${mbsplashD.length}`;
         delegate_1cB += `${thumbnailo.length}`;
         thumbnailo = "1";
      }
         rewindW = `${rewindW.length / (Math.max(2, 4))}`;
         rewindW += `${parseInt(`${slidery}`)}`;
      blackK += `${leftf.length << (Math.min(Math.abs(1), 4))}`;
   }
       let diceH = String.fromCharCode(99,114,121,112,116,95,105,95,51,0);
         diceH = `${diceH.length}`;
      if (diceH.length == 4) {
          let langz = String.fromCharCode(117,112,109,105,120,95,105,95,52,53,0);
          let mappingF = 4.0;
         diceH = `${parseInt(`${mappingF}`)}`;
         langz = `${langz.length}`;
         mappingF += (String.fromCharCode(99,0) == langz ? langz.length : langz.length);
      }
       let singlev = String.fromCharCode(118,95,57,52,95,98,105,97,115,101,100,0);
      countdownv.push(gradle9.length);
    if (isPause) {

   while (catalogJ == tickQ) {
      tickQ -= modityA << (Math.min(gradle9.length, 5));
      break;
   }
       let mutedE: Map<any, any> = new Map([[String.fromCharCode(115,117,98,102,105,108,101,95,55,95,50,48,0),463], [String.fromCharCode(118,95,57,95,99,97,112,97,98,105,108,105,116,121,0),717]]);
         mutedE = new Map([[`${mutedE.size}`, mutedE.size]]);
      while (mutedE.get(`${mutedE.size}`) == null) {
          let memberZ = 1.0;
          let stylez: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,121,112,116,95,109,95,54,53,0),709], [String.fromCharCode(114,101,108,97,121,111,117,116,95,106,95,52,50,0),488], [String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,110,95,55,52,0),580]]);
          let gradleO = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,110,95,56,49,0);
          let zcopy_yc: Map<any, any> = new Map([[String.fromCharCode(114,97,100,105,97,108,95,119,95,52,50,0),662], [String.fromCharCode(111,117,116,112,117,116,95,99,95,57,49,0),89]]);
         mutedE.set(`${memberZ}`, 3 * parseInt(`${memberZ}`));
         stylez.set(gradleO, (gradleO == String.fromCharCode(88,0) ? zcopy_yc.size : gradleO.length));
         zcopy_yc.set(`${gradleO}`, gradleO.length);
         break;
      }
         mutedE.set(`${mutedE.size}`, mutedE.size);
      modityA |= (blackK == String.fromCharCode(109,0) ? gradle9.length : blackK.length);
       let sentryq = 1;
      while ((sentryq | sentryq) > 5) {
         sentryq -= sentryq >> (Math.min(Math.abs(1), 1));
         break;
      }
          let statsi = String.fromCharCode(99,111,108,115,107,105,112,95,55,95,50,55,0);
          let completeQ = String.fromCharCode(110,101,105,103,104,98,111,114,115,95,51,95,55,48,0);
          let vnewinterstitial2 = String.fromCharCode(97,118,102,102,116,95,56,95,50,49,0);
         sentryq <<= Math.min(3, completeQ.length);
         statsi += `${1 >> (Math.min(4, statsi.length))}`;
         completeQ = `${vnewinterstitial2.length}`;
         vnewinterstitial2 += `${vnewinterstitial2.length % (Math.max(3, 2))}`;
      for (let z = 0; z < 1; z++) {
          let eighteenC = false;
          let championZ = 2.0;
          let kickK: Map<any, any> = new Map([[String.fromCharCode(101,95,51,52,95,119,121,99,104,101,112,114,111,111,102,0),635], [String.fromCharCode(105,110,116,102,114,95,103,95,54,54,0),803]]);
         sentryq -= 1;
         eighteenC = parseFloat(`${kickK.size}`) >= championZ;
         championZ -= (parseFloat(`${parseInt(`${championZ}`) / (Math.max(5, (eighteenC ? 3 : 4)))}`));
         kickK.set(`${eighteenC}`, ((eighteenC ? 1 : 1) - parseInt(`${championZ}`)));
      }
      feedback4 += `${fillT.length - parseInt(`${tickQ}`)}`;
      modityA -= foundf.length;
   if (4 >= description_wis.length) {
       let loading9 = false;
          let scored: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,97,95,53,48,0),433], [String.fromCharCode(120,95,52,50,95,109,105,110,117,116,101,115,0),797], [String.fromCharCode(109,95,50,51,95,105,110,102,117,114,97,0),205]]);
          let apps_ = 4;
         loading9 = apps_ > 39;
         scored = new Map([[`${scored.size}`, 3 | scored.size]]);
         apps_ |= scored.size >> (Math.min(Math.abs(scored.size), 2));
      while (loading9) {
          let reminderP = 1.0;
          let humidityr = String.fromCharCode(115,104,97,107,101,95,48,95,49,51,0);
          let chatz = String.fromCharCode(114,95,56,50,95,115,98,114,101,115,101,114,118,101,0);
          let chatV: Array<any> = [733, 375];
         loading9 = 55 <= humidityr.length;
         reminderP += chatV.length;
         humidityr = `${parseInt(`${reminderP}`)}`;
         chatz = `${(String.fromCharCode(80,0) == chatz ? chatV.length : chatz.length)}`;
         break;
      }
       let indicatorA: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,101,112,115,105,108,111,110,0),50], [String.fromCharCode(111,95,53,57,95,113,109,105,110,109,97,120,0),700]]);
       let buildO: Map<any, any> = new Map([[String.fromCharCode(116,95,53,48,95,120,102,111,114,109,0),532], [String.fromCharCode(113,95,50,55,95,112,97,103,101,104,97,115,104,0),185], [String.fromCharCode(112,95,53,49,95,105,110,116,114,111,0),609]]);
      description_wis = `${package_au.length | 3}`;
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    else {

      package_au.push(3);
       let unselectedw = String.fromCharCode(114,116,102,95,99,95,55,49,0);
       let upgradew = String.fromCharCode(113,95,50,51,95,97,115,110,116,0);
       let reminder5 = String.fromCharCode(116,95,54,55,95,118,112,109,99,0);
          let philippinesB = String.fromCharCode(121,95,57,56,95,99,111,108,108,105,100,105,110,103,0);
         upgradew += `${1 >> (Math.min(5, unselectedw.length))}`;
         philippinesB += `${philippinesB.length / 1}`;
      for (let a = 0; a < 3; a++) {
          let megaphonej = String.fromCharCode(104,95,54,53,95,114,101,113,117,101,115,116,115,0);
          let catalogx = 0.0;
          let nterstitialC = String.fromCharCode(98,100,115,95,102,95,51,48,0);
          let constantsi: Array<any> = [559, 667];
         upgradew += `${(String.fromCharCode(104,0) == unselectedw ? unselectedw.length : upgradew.length)}`;
         megaphonej += `${constantsi.length}`;
         catalogx += (parseFloat(`${nterstitialC == String.fromCharCode(113,0) ? megaphonej.length : nterstitialC.length}`));
         constantsi = [nterstitialC.length << (Math.min(Math.abs(2), 1))];
      }
      tickQ /= Math.max(5, countdownv.length / (Math.max(8, robotoz.length)));
   if (Array.from(short_2I.values()).includes(package_au.length)) {
       let flipper1 = String.fromCharCode(116,104,97,110,95,103,95,53,0);
       let backwardB = String.fromCharCode(118,95,52,53,95,101,110,99,114,121,112,116,0);
       let whatsappm = false;
       let malaysiac = String.fromCharCode(115,99,117,98,98,101,114,95,116,95,50,57,0);
       let langkeyK: Array<any> = [String.fromCharCode(98,108,111,99,107,115,105,122,101,95,107,95,50,56,0), String.fromCharCode(118,95,56,56,95,99,117,114,114,101,110,100,0)];
         langkeyK = [backwardB.length];
      for (let z = 0; z < 3; z++) {
         flipper1 = `${(2 * (whatsappm ? 2 : 1))}`;
      }
          let referrerv = 5;
          let more8: Array<any> = [924, 958];
          let contexth = 1.0;
         whatsappm = String.fromCharCode(112,0) == flipper1;
         referrerv %= Math.max(more8.length, 5);
         more8 = [3];
         contexth /= Math.max(2, 3);
       let basketballp = 1.0;
      for (let h = 0; h < 1; h++) {
         basketballp /= Math.max(1, backwardB.length / (Math.max(3, 9)));
      }
      while (flipper1.length < 3 && whatsappm) {
         whatsappm = (langkeyK.length & backwardB.length) > 81;
         break;
      }
      if (whatsappm) {
          let r_imageA: Map<any, any> = new Map([[String.fromCharCode(99,95,49,53,95,112,111,105,115,115,111,110,0),String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,50,95,51,54,0)], [String.fromCharCode(107,95,56,57,95,102,97,99,101,0),String.fromCharCode(119,104,101,101,108,95,103,95,57,52,0)], [String.fromCharCode(112,95,56,56,95,102,116,115,105,115,115,112,97,99,101,0),String.fromCharCode(109,98,115,101,103,109,101,110,116,95,115,95,54,50,0)]]);
         flipper1 += `${flipper1.length}`;
         r_imageA.set(`${r_imageA.size}`, 2 + r_imageA.size);
      }
      let circleP = 7816838 >= malaysiac.length;
      do {
          let subsX = String.fromCharCode(115,117,98,116,114,101,101,95,51,95,50,48,0);
          let tempb = String.fromCharCode(97,95,53,50,95,114,102,112,115,0);
          let searchU = String.fromCharCode(109,95,56,48,95,100,121,110,108,111,99,107,0);
          let videocommon3: Map<any, any> = new Map([[String.fromCharCode(106,95,50,95,118,101,114,98,97,116,105,109,0),String.fromCharCode(118,95,54,54,95,110,100,101,102,0)], [String.fromCharCode(103,95,55,50,95,115,116,97,116,117,115,0),String.fromCharCode(122,95,52,48,95,99,111,108,108,97,103,101,0)]]);
         malaysiac = `${flipper1.length >> (Math.min(Math.abs(3), 2))}`;
         subsX += `${tempb.length - videocommon3.size}`;
         tempb += `${1 - searchU.length}`;
         searchU = `${tempb.length / (Math.max(2, 2))}`;
         videocommon3.set(tempb, tempb.length);
         if (circleP) {
            break;
         }
      } while (circleP && (!malaysiac.endsWith(`${langkeyK.length}`)));
         backwardB = `${malaysiac.length}`;
      for (let l = 0; l < 1; l++) {
          let scheduleB = String.fromCharCode(114,101,108,117,95,101,95,51,56,0);
         malaysiac += `${backwardB.length}`;
         scheduleB = `${(String.fromCharCode(107,0) == scheduleB ? scheduleB.length : scheduleB.length)}`;
      }
         whatsappm = malaysiac == String.fromCharCode(104,0) || 53 > langkeyK.length;
      for (let x = 0; x < 2; x++) {
         backwardB += `${(String.fromCharCode(71,0) == malaysiac ? langkeyK.length : malaysiac.length)}`;
      }
         backwardB += `${3 * parseInt(`${basketballp}`)}`;
      while (4 >= (4 ^ backwardB.length) || 4 >= (backwardB.length ^ langkeyK.length)) {
         backwardB += `${((whatsappm ? 4 : 2))}`;
         break;
      }
      while (4.15 <= (basketballp / (Math.max(3.47, 8))) || (parseInt(`${basketballp}`) / 3) <= 1) {
         basketballp *= 3;
         break;
      }
      short_2I.set(backwardB, 3 >> (Math.min(2, Math.abs(parseInt(`${catalogJ}`)))));
   }
   if ((3 ^ foundf.length) > 3) {
      evente |= package_au.length ^ 1;
   }
      short_2I.set(robotoz, package_au.length + 3);
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let logoutJ: Map<any, any> = new Map([[String.fromCharCode(99,95,51,53,95,108,111,99,97,116,101,100,0),525], [String.fromCharCode(115,95,49,49,95,98,109,111,100,101,0),641], [String.fromCharCode(101,108,98,103,95,48,95,52,52,0),372]]);
    let paginationU = false;
    let containerp = String.fromCharCode(109,111,117,116,104,95,121,95,52,56,0);
    let catalogl = 4;
    let lightH = String.fromCharCode(110,95,55,57,95,104,115,99,114,111,108,108,0);
    let traminiy: Array<any> = [62, 244, 496];
    let dataz = 5;
    let detailsk = true;
    let backwardh = 3;
    let emojiF = false;
    let trashq: Array<any> = [206, 122];
    let splashf = false;
      lightH += `${((paginationU ? 2 : 3) >> (Math.min(Math.abs(catalogl), 2)))}`;
       let area0: Map<any, any> = new Map([[String.fromCharCode(97,95,48,95,115,115,115,101,0),666], [String.fromCharCode(103,95,50,52,95,99,105,110,101,0),60]]);
         area0 = new Map([[`${area0.size}`, area0.size * area0.size]]);
         area0.set(`${area0.size}`, area0.size);
      let favoriteW = 7339383 <= area0.size;
      do {
         area0.set(`${area0.size}`, 2);
         if (favoriteW) {
            break;
         }
      } while (favoriteW && (area0.size <= 2));
      paginationU = traminiy.length > area0.size;
   let icopy_ap = detailsk ? !detailsk : detailsk;
   do {
       let mbsplashP: Array<any> = [470, 402];
       let trophyv = 1.0;
       let playb = 0.0;
      while ((playb / (Math.max(parseFloat(`${mbsplashP.length}`), 5))) < 4.86 && (playb / (Math.max(parseFloat(`${mbsplashP.length}`), 9))) < 4.86) {
         playb *= parseFloat(`${mbsplashP.length}`);
         break;
      }
      for (let i = 0; i < 1; i++) {
          let changeW = String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,51,95,50,55,0);
         trophyv -= parseFloat(`${3}`);
         changeW += `${2 | changeW.length}`;
      }
      detailsk = !containerp.endsWith(`${paginationU}`);
      if (icopy_ap) {
         break;
      }
   } while ((catalogl < 5) && icopy_ap);
       let androidQ = 0.0;
      for (let m = 0; m < 1; m++) {
         androidQ -= 3 - parseInt(`${androidQ}`);
      }
         androidQ *= parseInt(`${androidQ}`) << (Math.min(1, Math.abs(2)));
         androidQ += parseInt(`${androidQ}`);
      traminiy.push(3);
   for (let m = 0; m < 3; m++) {
      paginationU = containerp == String.fromCharCode(114,0);
   }
       let volumeK = 1.0;
       let strK: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,99,99,115,95,48,95,51,57,0),826], [String.fromCharCode(98,111,120,98,108,117,114,95,48,95,49,55,0),565], [String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,109,95,53,48,0),819]]);
       let detail7: Map<any, any> = new Map([[String.fromCharCode(109,95,50,50,95,105,110,112,117,116,120,0),803], [String.fromCharCode(121,95,53,53,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0),589], [String.fromCharCode(116,101,114,109,105,110,97,116,101,100,95,99,95,53,56,0),315]]);
       let trashm: Map<any, any> = new Map([[String.fromCharCode(100,111,115,100,97,116,101,95,116,95,51,55,0),419], [String.fromCharCode(98,95,50,54,95,109,111,100,97,108,0),368]]);
         strK.set(`${trashm.size}`, trashm.size);
      let overlay1 = volumeK >= 6225893.0;
      do {
         volumeK *= parseFloat(`${trashm.size % (Math.max(strK.size, 8))}`);
         if (overlay1) {
            break;
         }
      } while (overlay1 && (strK.size > 2));
         volumeK *= parseFloat(`${trashm.size}`);
      for (let u = 0; u < 3; u++) {
         strK.set(`${strK.size}`, strK.size);
      }
      if (Array.from(strK.values()).includes(detail7.size)) {
          let huaweih: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,119,114,105,116,101,116,114,117,110,99,0),String.fromCharCode(105,95,49,57,95,98,108,97,99,107,108,105,115,116,0)], [String.fromCharCode(117,95,54,49,95,110,111,114,111,117,110,100,0),String.fromCharCode(110,95,49,50,95,111,98,109,99,0)]]);
         strK.set(`${detail7.size}`, 1 >> (Math.min(4, Math.abs(detail7.size))));
         huaweih.set(`${huaweih.size}`, huaweih.size - huaweih.size);
      }
      traminiy.push(strK.size);
      traminiy = [backwardh];
       let collectionN: Array<any> = [287, 832];
       let auto_4n = String.fromCharCode(111,102,102,101,115,116,95,110,95,49,48,48,0);
          let i_positionm = String.fromCharCode(122,95,50,51,95,115,119,97,112,112,101,114,0);
          let historyb: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,120,95,49,95,55,52,0),String.fromCharCode(112,111,116,105,115,105,111,110,95,121,95,49,53,0)], [String.fromCharCode(99,111,109,112,97,114,101,95,110,95,54,50,0),String.fromCharCode(110,111,114,109,97,108,105,115,101,95,98,95,54,49,0)]]);
         collectionN.push(collectionN.length);
         i_positionm = `${historyb.size / 3}`;
         historyb = new Map([[`${historyb.size}`, 2]]);
      while ((auto_4n.length ^ collectionN.length) < 4 && (auto_4n.length ^ 4) < 3) {
         auto_4n += `${collectionN.length}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
          let weibo2: Map<any, any> = new Map([[String.fromCharCode(105,95,50,50,95,101,115,116,105,109,97,116,101,115,0),false ], [String.fromCharCode(114,95,57,53,95,115,101,116,114,97,110,103,101,0),true ], [String.fromCharCode(102,105,108,109,95,98,95,56,50,0),false ]]);
          let middleware0: Array<any> = [95, 570, 504];
         collectionN = [(auto_4n == String.fromCharCode(49,0) ? auto_4n.length : collectionN.length)];
         weibo2.set(`${middleware0.length}`, 2);
         middleware0.push(weibo2.size);
      }
         collectionN = [auto_4n.length];
         auto_4n = `${(String.fromCharCode(119,0) == auto_4n ? collectionN.length : auto_4n.length)}`;
          let indexX = String.fromCharCode(120,95,48,95,115,117,114,102,97,99,101,115,0);
          let stationC = String.fromCharCode(118,95,57,48,95,100,117,109,112,105,110,102,111,0);
          let untickO = 5;
         auto_4n += "1";
         indexX += `${(stationC == String.fromCharCode(52,0) ? untickO : stationC.length)}`;
         untickO &= 3 ^ untickO;
      logoutJ.set(`${detailsk}`, dataz);
       let sellt = 5.0;
       let rankM = String.fromCharCode(104,95,54,95,116,109,112,108,0);
       let gesture8: Array<any> = [122, 290, 343];
      for (let x = 0; x < 1; x++) {
         sellt *= parseFloat(`${parseInt(`${sellt}`)}`);
      }
          let feedbacki = String.fromCharCode(115,108,105,100,97,98,108,101,95,97,95,53,52,0);
          let native0 = String.fromCharCode(101,99,116,97,110,103,108,101,95,54,95,51,50,0);
         gesture8.push(rankM.length);
         feedbacki = `${native0.length << (Math.min(1, feedbacki.length))}`;
         native0 += `${(feedbacki == String.fromCharCode(99,0) ? native0.length : feedbacki.length)}`;
      while (!rankM.includes(`${gesture8.length}`)) {
          let applem: Array<any> = [377, 616];
          let launcherI = 3.0;
          let projectw = String.fromCharCode(116,116,97,99,104,109,101,110,116,95,49,95,57,52,0);
          let detailsA = 3.0;
          let lightX = true;
         rankM += `${parseInt(`${launcherI}`) % (Math.max(1, 2))}`;
         applem = [2 - projectw.length];
         launcherI -= (parseFloat(`${(lightX ? 4 : 5) + parseInt(`${detailsA}`)}`));
         projectw += `${((lightX ? 4 : 1) * parseInt(`${detailsA}`))}`;
         break;
      }
         rankM += `${2 * rankM.length}`;
      if (rankM.endsWith(`${gesture8.length}`)) {
         rankM = `${2 * gesture8.length}`;
      }
         sellt += parseFloat(`${parseInt(`${sellt}`) - rankM.length}`);
       let dataQ = String.fromCharCode(99,111,110,115,116,115,95,106,95,53,52,0);
       let sharez = String.fromCharCode(99,95,53,50,95,112,111,108,121,108,105,110,101,0);
          let editG = 5;
          let stepG = false;
         rankM = `${sharez.length - gesture8.length}`;
         editG ^= (editG & (stepG ? 3 : 2));
         stepG = 84 < editG;
         gesture8 = [(String.fromCharCode(104,0) == dataQ ? sharez.length : dataQ.length)];
      paginationU = (rankM.length | catalogl) > 14;
      catalogl *= ((paginationU ? 3 : 2) ^ (detailsk ? 1 : 5));

    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
       let infor: Array<any> = [17, 32, 92];
    let countdownr: Array<any> = [45, 221, 31];
    let floatingd = 0.0;
    let stringy = true;
    let heartU = String.fromCharCode(105,110,115,116,97,110,99,101,115,95,107,95,55,51,0);
    let success6: Map<any, any> = new Map([[String.fromCharCode(116,95,54,56,95,110,111,110,99,101,0),String.fromCharCode(115,101,108,101,99,116,111,114,95,103,95,49,57,0)], [String.fromCharCode(120,95,53,51,95,97,115,115,105,103,110,109,101,110,116,0),String.fromCharCode(103,95,54,52,95,115,116,97,114,116,0)]]);
    let headerB = String.fromCharCode(121,95,55,50,95,98,97,110,0);
    let blackE = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,100,95,53,52,0);
    let calendarb = String.fromCharCode(110,95,55,53,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0);
    let hover9: Map<any, any> = new Map([[String.fromCharCode(105,110,111,100,101,115,95,104,95,50,56,0),String.fromCharCode(112,114,111,118,105,100,101,95,106,95,55,55,0)], [String.fromCharCode(98,95,51,50,95,115,101,109,105,0),String.fromCharCode(105,95,53,54,95,99,114,111,108,108,0)], [String.fromCharCode(111,95,57,95,115,99,97,108,101,109,111,100,101,0),String.fromCharCode(115,117,98,116,114,97,99,116,111,114,95,121,95,50,50,0)]]);
    let expiredB = String.fromCharCode(102,95,53,54,95,110,111,116,0);
   let sheetX = blackE.length >= 5190389;
   do {
      blackE = `${success6.size}`;
      if (sheetX) {
         break;
      }
   } while (sheetX && (!headerB.startsWith(blackE)));
       let langkeyT = 2.0;
       let loadingK = 5.0;
       let kickw = String.fromCharCode(99,98,115,110,105,100,95,104,95,53,52,0);
       let firebaseE: Array<any> = [668, 222];
      if (firebaseE.length > 3) {
         langkeyT /= Math.max(3, parseFloat(`${firebaseE.length - 3}`));
      }
          let f_unlocka = String.fromCharCode(107,95,52,55,95,115,117,110,115,101,116,0);
          let plusE: Map<any, any> = new Map([[String.fromCharCode(115,111,97,98,111,114,116,95,101,95,56,57,0),657], [String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,54,95,51,49,0),259], [String.fromCharCode(116,121,112,101,115,95,53,95,54,52,0),823]]);
          let ewardeds = String.fromCharCode(110,95,53,54,95,115,101,115,115,105,111,110,105,100,0);
         loadingK += 2;
         f_unlocka += "1";
         plusE = new Map([[`${plusE.size}`, ewardeds.length / (Math.max(2, plusE.size))]]);
         ewardeds = "2";
         kickw += `${2 & kickw.length}`;
      for (let z = 0; z < 2; z++) {
         langkeyT /= Math.max(1, parseFloat(`${firebaseE.length}`));
      }
      for (let q = 0; q < 1; q++) {
         firebaseE = [firebaseE.length * 3];
      }
       let xvodD: Array<any> = [394, 543, 473];
       let stylez: Array<any> = [730, 173, 163];
       let albumm = String.fromCharCode(104,95,57,53,95,116,114,97,110,115,105,116,105,111,110,115,0);
          let phone7 = String.fromCharCode(114,95,53,51,95,111,97,117,116,104,0);
         xvodD.push(stylez.length * 3);
         phone7 = `${phone7.length}`;
      stringy = 72.34 == floatingd;

    if (isBodanRef.current) {

   if ((heartU.length | 2) <= 4 && 2 <= (heartU.length | infor.length)) {
       let stringse = String.fromCharCode(105,116,108,101,95,49,95,52,52,0);
       let actionv = false;
       let condensedQ = String.fromCharCode(104,97,115,104,116,97,98,108,101,95,110,95,57,56,0);
       let vnewinterstitialm = 1;
       let empty8 = 1.0;
       let downloadedv: Array<any> = [140, 140];
         actionv = !actionv;
          let foregrounda = 0;
         downloadedv = [2];
         foregrounda ^= foregrounda;
      let confirmatione = stringse == String.fromCharCode(121,95,110,117,117,100,119,106,103,117,0);
      do {
          let materialQ = 5.0;
         stringse = `${1 * vnewinterstitialm}`;
         materialQ -= parseFloat(`${parseInt(`${materialQ}`) * 3}`);
         if (confirmatione) {
            break;
         }
      } while ((!actionv) && confirmatione);
      let popupf = stringse.length <= 6397289;
      do {
         stringse += `${parseInt(`${empty8}`) & 3}`;
         if (popupf) {
            break;
         }
      } while (popupf && (actionv));
      if (!downloadedv.includes(empty8)) {
          let incidento = String.fromCharCode(100,101,102,101,114,114,101,100,95,117,95,49,56,0);
          let update_aq = String.fromCharCode(114,95,52,55,95,100,101,110,111,114,109,97,108,105,122,101,0);
         empty8 /= Math.max(1, (parseFloat(`${(actionv ? 1 : 2) >> (Math.min(stringse.length, 1))}`)));
         incidento = `${update_aq.length | incidento.length}`;
         update_aq = `${incidento.length}`;
      }
      while ((4 % (Math.max(8, condensedQ.length))) < 2 || (downloadedv.length % (Math.max(3, condensedQ.length))) < 4) {
          let q_titlez = false;
          let pingo = 3.0;
          let agreementG = 5.0;
          let usernameK = String.fromCharCode(114,95,57,50,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
          let giftD = 5.0;
         downloadedv = [stringse.length];
         q_titlez = 74.19 < pingo;
         pingo *= parseInt(`${giftD}`) % (Math.max(usernameK.length, 9));
         agreementG += usernameK.length ^ 2;
         giftD += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${pingo}`)), 1))}`);
         break;
      }
          let brightnessf = 4.0;
         actionv = 51.55 > empty8;
         brightnessf += parseFloat(`${3}`);
      let showQ = vnewinterstitialm <= 5241240;
      do {
          let userp = String.fromCharCode(114,101,97,100,105,110,105,116,95,53,95,50,50,0);
          let blackg = 2.0;
         vnewinterstitialm >>= Math.min(downloadedv.length, 5);
         userp = `${parseInt(`${blackg}`)}`;
         blackg += (userp == String.fromCharCode(106,0) ? parseInt(`${blackg}`) : userp.length);
         if (showQ) {
            break;
         }
      } while (showQ && (condensedQ.length < vnewinterstitialm));
      for (let e = 0; e < 1; e++) {
         condensedQ += `${vnewinterstitialm / 1}`;
      }
         stringse = `${downloadedv.length}`;
       let analyticsG = String.fromCharCode(104,97,110,100,115,104,97,107,101,95,109,95,50,52,0);
       let vietnamR = String.fromCharCode(109,95,50,52,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0);
         vnewinterstitialm += analyticsG.length & condensedQ.length;
          let fillF = String.fromCharCode(97,101,99,109,95,49,95,54,51,0);
          let singleG = String.fromCharCode(99,111,112,121,95,98,95,49,56,0);
         downloadedv.push(2);
         fillF += `${singleG.length - 3}`;
         singleG += `${singleG.length | fillF.length}`;
      while (3 <= stringse.length) {
         downloadedv.push(vietnamR.length);
         break;
      }
      infor.push(calendarb.length);
   }
   for (let z = 0; z < 1; z++) {
      stringy = !stringy;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   if (blackE.endsWith(`${infor.length}`)) {
      blackE = `${1 & success6.size}`;
   }
   if ((countdownr.length + heartU.length) < 2) {
       let configG: Map<any, any> = new Map([[String.fromCharCode(115,105,98,108,105,110,103,95,97,95,53,51,0),829], [String.fromCharCode(120,95,52,48,95,108,105,98,107,118,97,122,97,97,114,0),795], [String.fromCharCode(103,114,97,118,105,116,121,95,101,95,52,51,0),709]]);
       let launchY = String.fromCharCode(114,101,112,108,97,99,101,100,95,107,95,56,48,0);
       let membershipI = 1;
       let countryZ = 0.0;
         launchY = `${launchY.length}`;
      while ((configG.size + launchY.length) <= 3) {
          let anytimey = String.fromCharCode(97,101,118,97,108,95,54,95,51,49,0);
          let pageC: Map<any, any> = new Map([[String.fromCharCode(97,112,112,115,102,108,121,101,114,95,115,95,51,50,0),String.fromCharCode(118,95,54,55,95,99,108,101,97,114,98,105,116,0)], [String.fromCharCode(99,111,109,112,117,116,101,95,50,95,51,48,0),String.fromCharCode(121,95,57,52,95,115,97,108,116,101,100,0)]]);
          let analyticsc: Array<any> = [String.fromCharCode(114,95,53,48,95,115,99,105,101,110,116,105,102,105,99,0), String.fromCharCode(115,95,53,53,95,99,111,100,101,98,108,111,99,107,115,0)];
          let entryd: Map<any, any> = new Map([[String.fromCharCode(112,97,101,116,104,95,52,95,56,49,0),String.fromCharCode(99,95,56,48,95,110,111,114,109,97,108,105,122,101,114,0)], [String.fromCharCode(110,95,53,49,95,100,105,115,116,111,114,116,105,111,110,0),String.fromCharCode(100,114,111,112,95,104,95,57,52,0)], [String.fromCharCode(102,95,53,56,95,100,105,99,101,0),String.fromCharCode(107,95,54,57,95,115,116,97,116,117,115,111,114,0)]]);
          let progressU = String.fromCharCode(98,95,56,57,95,101,118,114,99,100,97,116,97,0);
         configG.set(`${configG.size}`, 1);
         anytimey += `${progressU.length * entryd.size}`;
         pageC.set(progressU, entryd.size);
         analyticsc.push(analyticsc.length | 1);
         break;
      }
          let modityR = false;
          let bannerE = String.fromCharCode(102,95,50,53,95,103,97,115,0);
          let hoverC = false;
         membershipI -= 3;
         modityR = (bannerE.length & bannerE.length) > 44;
         launchY += `${membershipI}`;
      if (membershipI <= 4) {
          let accepted7 = String.fromCharCode(101,95,52,48,95,99,101,114,116,105,102,105,99,97,116,101,115,0);
         membershipI *= parseInt(`${countryZ}`) % (Math.max(1, configG.size));
         accepted7 = `${(accepted7 == String.fromCharCode(68,0) ? accepted7.length : accepted7.length)}`;
      }
         launchY = `${membershipI}`;
      let filterH = configG.size <= 8087502;
      do {
          let firebaseS = 2;
          let windQ: Map<any, any> = new Map([[String.fromCharCode(109,95,57,57,95,116,119,105,99,101,0),606], [String.fromCharCode(121,95,56,53,95,105,110,118,105,116,101,115,0),108]]);
         configG = new Map([[`${windQ.size}`, 2]]);
         firebaseS %= Math.max(firebaseS ^ 2, 4);
         windQ.set(`${firebaseS}`, 1 | firebaseS);
         if (filterH) {
            break;
         }
      } while ((Array.from(configG.keys()).includes(`${countryZ}`)) && filterH);
      while (3 <= (configG.size + 3) || 5 <= (configG.size & 3)) {
         configG.set(launchY, configG.size);
         break;
      }
         launchY = `${membershipI >> (Math.min(5, Math.abs(2)))}`;
       let minik = String.fromCharCode(118,95,52,52,95,114,101,115,97,109,112,108,101,114,0);
       let frame_qi = String.fromCharCode(98,95,52,55,95,105,110,99,114,101,97,115,101,0);
      let signinupH = frame_qi == String.fromCharCode(105,50,55,110,97,114,119,56,108,106,0);
      do {
         frame_qi += `${frame_qi.length >> (Math.min(4, Math.abs(parseInt(`${countryZ}`))))}`;
         if (signinupH) {
            break;
         }
      } while ((frame_qi.startsWith(launchY)) && signinupH);
         frame_qi += `${frame_qi.length << (Math.min(Math.abs(1), 5))}`;
      heartU += `${countdownr.length}`;
   }
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

      success6.set(`${stringy}`, 3);
   let stylel = infor.length >= 9144152;
   do {
      infor = [(blackE == String.fromCharCode(98,0) ? parseInt(`${floatingd}`) : blackE.length)];
      if (stylel) {
         break;
      }
   } while (stylel && (3 >= (infor.length * 3) && 5 >= (3 * infor.length)));

      

   while (!Array.from(success6.keys()).includes(`${infor.length}`)) {
      success6.set(headerB, 3);
      break;
   }
      infor.push(headerB.length);
      tt_humidity_guide.watchAnytimePlaylistClicksAnalytics();
      
    } else {

       let emptyn: Array<any> = [503, 467];
       let spinnerM: Map<any, any> = new Map([[String.fromCharCode(101,112,111,108,108,95,104,95,56,48,0),508], [String.fromCharCode(101,95,54,55,95,100,100,115,116,0),837]]);
       let otherf = String.fromCharCode(102,95,54,57,95,117,110,100,101,114,101,115,116,105,109,97,116,101,100,0);
      if (!otherf.startsWith(`${spinnerM.size}`)) {
         spinnerM.set(`${emptyn.length}`, spinnerM.size & emptyn.length);
      }
      if ((emptyn.length % (Math.max(otherf.length, 7))) < 4 || 4 < (4 % (Math.max(2, emptyn.length)))) {
          let leagueg = String.fromCharCode(99,95,52,55,95,112,114,111,112,111,115,101,0);
          let calendari = String.fromCharCode(112,95,53,54,95,114,117,108,101,0);
          let animationP: Array<any> = [691, 160];
          let sheetv = false;
          let episodes1: Array<any> = [356, 422];
         emptyn.push((leagueg == String.fromCharCode(110,0) ? calendari.length : leagueg.length));
         calendari += "2";
         animationP.push(animationP.length << (Math.min(Math.abs(2), 5)));
         episodes1 = [episodes1.length];
      }
          let kickp = 5.0;
          let connection3 = 2;
          let blacklistP: Array<any> = [697, 123];
         emptyn = [2];
         kickp -= parseFloat(`${parseInt(`${kickp}`) + connection3}`);
         connection3 &= parseInt(`${kickp}`) << (Math.min(4, Math.abs(connection3)));
         blacklistP.push(connection3);
      for (let v = 0; v < 2; v++) {
         emptyn.push(2);
      }
         spinnerM.set(`${emptyn.length}`, 2 * emptyn.length);
         otherf = `${1 ^ emptyn.length}`;
         spinnerM.set(`${emptyn.length}`, emptyn.length);
      for (let d = 0; d < 1; d++) {
          let chatn: Array<any> = [108, 470];
          let injurya = String.fromCharCode(99,114,111,115,115,98,97,114,95,106,95,54,52,0);
         emptyn = [(otherf == String.fromCharCode(90,0) ? chatn.length : otherf.length)];
         chatn.push(injurya.length);
         injurya = `${3 - injurya.length}`;
      }
      for (let f = 0; f < 2; f++) {
         spinnerM = new Map([[`${spinnerM.size}`, spinnerM.size]]);
      }
      blackE = "1";
   if (headerB == String.fromCharCode(67,0) || calendarb != String.fromCharCode(110,0)) {
       let modalU = String.fromCharCode(111,95,53,48,95,100,99,115,99,116,112,0);
       let ruless = false;
       let fullL = String.fromCharCode(97,95,53,53,95,102,115,101,101,107,0);
         modalU = "2";
         fullL += `${(modalU == String.fromCharCode(118,0) ? modalU.length : (ruless ? 3 : 4))}`;
      if (modalU.length == 5) {
          let searchbarA = 5;
          let logouto = String.fromCharCode(118,95,50,52,95,105,110,105,116,105,97,108,105,122,101,100,0);
          let lightv = 2;
         modalU = `${((ruless ? 5 : 4))}`;
         searchbarA /= Math.max(1, 5);
         logouto = `${2 << (Math.min(2, Math.abs(searchbarA)))}`;
         lightv ^= logouto.length;
      }
      while (ruless && 2 >= modalU.length) {
          let chinal: Array<any> = [String.fromCharCode(106,95,51,51,95,98,97,103,101,0), String.fromCharCode(104,97,100,100,95,116,95,54,54,0)];
          let spinner8 = 1.0;
         ruless = chinal.includes(spinner8);
         break;
      }
          let time_8P = 5.0;
          let baiduI = String.fromCharCode(103,95,57,56,95,116,105,116,108,101,115,0);
          let backg: Array<any> = [859, 276];
         fullL += `${((ruless ? 2 : 1) | parseInt(`${time_8P}`))}`;
         time_8P += parseFloat(`${backg.length ^ 2}`);
         baiduI += `${(String.fromCharCode(117,0) == baiduI ? baiduI.length : backg.length)}`;
      let windh = modalU.length >= 5343318;
      do {
          let dplusM: Array<any> = [647, 311, 755];
          let telegramg: Map<any, any> = new Map([[String.fromCharCode(104,95,53,48,95,100,105,115,112,111,115,101,0),748], [String.fromCharCode(99,111,108,108,101,99,116,95,118,95,55,0),922]]);
          let pathA: Array<any> = [392, 294];
         modalU += `${modalU.length / (Math.max(3, 8))}`;
         dplusM = [2];
         telegramg = new Map([[`${telegramg.size}`, 1 + telegramg.size]]);
         pathA.push(3 >> (Math.min(5, dplusM.length)));
         if (windh) {
            break;
         }
      } while (windh && (fullL == String.fromCharCode(121,0)));
       let popupM = 0.0;
      for (let f = 0; f < 1; f++) {
         fullL += `${(2 - (ruless ? 2 : 2))}`;
      }
         modalU = `${parseInt(`${popupM}`) * 2}`;
      headerB = `${calendarb.length >> (Math.min(Math.abs(2), 1))}`;
   }
      dispatch(playVod(currentVod.mini_video_vod));

       let injuryk = String.fromCharCode(108,117,116,115,95,120,95,55,50,0);
       let robotoC = String.fromCharCode(111,109,112,114,101,115,115,111,114,95,52,95,55,51,0);
          let countdownV = 4.0;
          let selln: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,104,111,110,101,121,115,119,97,112,0),431], [String.fromCharCode(116,104,101,95,51,95,57,48,0),819]]);
          let footballW = String.fromCharCode(121,95,56,57,95,97,105,114,105,110,103,0);
         robotoC = `${(String.fromCharCode(57,0) == injuryk ? injuryk.length : selln.size)}`;
         countdownV -= footballW.length - 3;
         selln = new Map([[`${countdownV}`, 3]]);
         footballW += "2";
         robotoC = `${2 ^ injuryk.length}`;
      heartU = "3";
   let liveT = 7860126 >= infor.length;
   do {
       let uploadp = String.fromCharCode(100,118,98,116,120,116,95,102,95,53,55,0);
       let component3 = String.fromCharCode(114,95,57,50,95,114,97,115,116,101,114,105,122,101,0);
         component3 += `${3 << (Math.min(2, uploadp.length))}`;
          let nterstitialK = true;
          let basketballc = 1.0;
          let moviesT = 1.0;
         component3 = `${uploadp.length << (Math.min(Math.abs(1), 5))}`;
         nterstitialK = basketballc < 69.37;
         basketballc /= Math.max(3, parseFloat(`${parseInt(`${moviesT}`) | 3}`));
         moviesT *= parseFloat(`${parseInt(`${moviesT}`) >> (Math.min(5, Math.abs(parseInt(`${basketballc}`))))}`);
      for (let h = 0; h < 1; h++) {
         uploadp = `${component3.length & 1}`;
      }
         uploadp = `${uploadp.length >> (Math.min(Math.abs(1), 1))}`;
      if (!uploadp.includes(component3)) {
          let sportsV = 2;
          let analyticsW = 1.0;
          let pointg = String.fromCharCode(111,95,55,95,100,121,110,108,105,110,107,0);
          let commonq = String.fromCharCode(106,95,54,57,95,115,97,109,101,0);
          let commenty = 1.0;
         component3 += `${commonq.length}`;
         sportsV *= 3 % (Math.max(8, parseInt(`${analyticsW}`)));
         analyticsW += (String.fromCharCode(68,0) == pointg ? pointg.length : parseInt(`${commenty}`));
         commonq = `${2 >> (Math.min(2, pointg.length))}`;
         commenty -= parseInt(`${commenty}`);
      }
         component3 += "3";
      infor.push(infor.length + 2);
      if (liveT) {
         break;
      }
   } while (liveT && ((infor.length & 1) <= 5 || (hover9.size & 1) <= 4));
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

   while ((hover9.size % 2) < 3) {
      hover9.set(heartU, heartU.length * infor.length);
      break;
   }
       let routern = String.fromCharCode(105,95,52,51,95,99,97,110,99,101,108,0);
       let bridgei = String.fromCharCode(116,114,97,110,115,102,111,114,109,95,55,95,56,52,0);
       let logout6 = String.fromCharCode(97,117,116,104,111,114,105,116,121,95,108,95,56,54,0);
      if (bridgei.startsWith(routern)) {
         bridgei += "1";
      }
       let selectionw: Array<any> = [34, 696];
       let analytic4: Array<any> = [950, 100, 77];
         logout6 += "3";
          let resultq = String.fromCharCode(121,95,49,49,95,108,111,97,100,0);
          let promotionD = true;
         analytic4 = [1];
         resultq = `${resultq.length}`;
         promotionD = resultq.length > resultq.length;
      if (routern.endsWith(`${logout6.length}`)) {
         logout6 += `${(String.fromCharCode(71,0) == logout6 ? analytic4.length : logout6.length)}`;
      }
          let notificationS: Map<any, any> = new Map([[String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,106,95,50,55,0),false ], [String.fromCharCode(110,98,105,116,115,95,57,95,54,52,0),true ]]);
         analytic4 = [bridgei.length];
         notificationS.set(`${notificationS.size}`, notificationS.size);
      while (logout6.length == 3) {
         bridgei = `${2 | selectionw.length}`;
         break;
      }
       let completey = 2.0;
       let awayP = 5.0;
      let filledJ = 7516637.0 <= completey;
      do {
          let description_9g8 = 1.0;
         completey -= parseFloat(`${analytic4.length}`);
         description_9g8 *= parseFloat(`${parseInt(`${description_9g8}`)}`);
         if (filledJ) {
            break;
         }
      } while (((2.70 - completey) <= 4.39 || 5.8 <= (2.70 - completey)) && filledJ);
      calendarb += `${(3 >> (Math.min(3, Math.abs((stringy ? 2 : 5)))))}`;

      

      success6.set(headerB, infor.length * headerB.length);
      expiredB = `${2 * heartU.length}`;
      tt_humidity_guide.watchAnytimeVideoClicksAnalytics();
      
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
       let downloadere = String.fromCharCode(117,95,49,48,48,95,114,101,110,100,101,114,105,110,103,0);
    let modelX: Map<any, any> = new Map([[String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,53,95,57,50,0),195], [String.fromCharCode(99,104,101,99,107,105,110,103,95,100,95,50,56,0),894]]);
    let viewsB = false;
    let downloaderL = 1.0;
    let sentry1 = String.fromCharCode(111,95,56,50,95,105,110,116,114,97,120,109,98,121,0);
    let football0 = 3;
    let sellc = String.fromCharCode(109,95,53,53,95,105,109,109,101,100,105,97,116,101,108,121,0);
    let themez = 5;
    let select6 = String.fromCharCode(99,95,50,51,95,109,101,109,109,101,116,104,111,100,115,0);
    let statisticsa: Array<any> = [709, 258];
    let logoa = true;
    let philippineso = 3;
    let reducerB: Map<any, any> = new Map([[String.fromCharCode(114,111,98,117,115,116,95,119,95,55,57,0),107], [String.fromCharCode(107,95,55,55,95,114,101,109,117,120,0),889]]);
    let matchest = 4.0;
    let vertical0 = String.fromCharCode(116,105,109,101,99,111,100,101,115,95,107,95,55,57,0);
    let sliderZ = 3;
   for (let u = 0; u < 1; u++) {
      themez %= Math.max(2, football0 + statisticsa.length);
   }
   let floatingH = sellc.length <= 7635492;
   do {
      sellc = `${downloadere.length | 3}`;
      if (floatingH) {
         break;
      }
   } while ((select6.length > 4) && floatingH);
      viewsB = (sentry1.length >> (Math.min(4, Math.abs(themez)))) > 5;
      modelX.set(sellc, sellc.length);
   while ((themez % (Math.max(3, 4))) <= 5 && 5.5 <= (downloaderL - 2.100)) {
      downloaderL *= sentry1.length;
      break;
   }
   for (let x = 0; x < 1; x++) {
      viewsB = (themez + sentry1.length) <= 69;
   }
   let submitS = sentry1.length >= 6090610;
   do {
       let paginationj = String.fromCharCode(121,95,55,50,95,114,116,112,100,101,99,0);
       let ajaxu = String.fromCharCode(100,101,118,105,99,101,95,120,95,56,55,0);
       let pathz: Map<any, any> = new Map([[String.fromCharCode(115,112,97,99,101,114,115,95,101,95,53,56,0),String.fromCharCode(97,100,118,97,110,99,101,109,101,110,116,95,51,95,57,48,0)], [String.fromCharCode(112,101,115,113,95,110,95,56,55,0),String.fromCharCode(117,112,100,97,116,97,98,108,101,95,98,95,56,55,0)]]);
       let v_lock4 = 4;
      if ((pathz.size ^ 3) == 4 || 2 == (pathz.size ^ 3)) {
          let philippinesK: Map<any, any> = new Map([[String.fromCharCode(116,95,50,95,116,101,115,115,101,108,108,97,116,101,0),192], [String.fromCharCode(105,95,55,57,95,110,100,101,102,0),336], [String.fromCharCode(101,95,48,95,109,97,116,104,111,112,115,0),529]]);
          let builda: Array<any> = [669, 613, 460];
          let topicl: Map<any, any> = new Map([[String.fromCharCode(110,95,51,53,95,120,104,116,109,108,0),false ], [String.fromCharCode(104,102,108,105,112,95,48,95,55,57,0),false ], [String.fromCharCode(109,95,49,50,95,103,97,105,110,0),true ]]);
         pathz.set(ajaxu, philippinesK.size & ajaxu.length);
         philippinesK.set(`${builda.length}`, builda.length);
         topicl.set(`${builda.length}`, topicl.size << (Math.min(Math.abs(3), 2)));
      }
       let arrowV = 2;
       let resendR = 5;
       let historyo = 1;
       let nterstitialV = 5;
      if (historyo >= 5) {
         pathz = new Map([[`${pathz.size}`, pathz.size]]);
      }
      for (let x = 0; x < 1; x++) {
         pathz.set(paginationj, paginationj.length & 1);
      }
         nterstitialV <<= Math.min(1, paginationj.length);
      while (2 >= (resendR * 2) || (2 * v_lock4) >= 3) {
         v_lock4 &= historyo;
         break;
      }
         arrowV %= Math.max(historyo, 5);
      for (let g = 0; g < 1; g++) {
          let klevinZ: Array<any> = [422, 670];
          let pointA: Array<any> = [467, 916, 568];
          let expandV = false;
          let stationsQ = String.fromCharCode(112,95,52,95,97,110,110,101,120,98,0);
          let unselectedW = 4.0;
         paginationj = `${paginationj.length}`;
         klevinZ.push(stationsQ.length);
         pointA = [klevinZ.length << (Math.min(stationsQ.length, 3))];
         expandV = stationsQ.length > 18;
         unselectedW += parseFloat(`${stationsQ.length % 3}`);
      }
         paginationj = `${pathz.size}`;
          let dplusH = String.fromCharCode(102,95,51,57,95,118,101,114,105,102,105,101,114,0);
          let moduleP = 1;
         v_lock4 <<= Math.min(Math.abs(1 & moduleP), 1);
         dplusH = `${1 - dplusH.length}`;
         moduleP >>= Math.min(Math.abs(3), 2);
      let episodeF = nterstitialV <= 9840047;
      do {
          let changes = String.fromCharCode(111,95,54,51,95,102,101,109,97,108,101,0);
         nterstitialV ^= 1 << (Math.min(4, Math.abs(nterstitialV)));
         changes += `${changes.length}`;
         if (episodeF) {
            break;
         }
      } while (episodeF && (ajaxu.length < nterstitialV));
      sentry1 = `${1 | modelX.size}`;
      if (submitS) {
         break;
      }
   } while (submitS && (sentry1.length == modelX.size));
   let canvas6 = 6548388 >= downloadere.length;
   do {
      downloadere = `${3 % (Math.max(8, philippineso))}`;
      if (canvas6) {
         break;
      }
   } while (canvas6 && (sellc == String.fromCharCode(77,0)));
   for (let v = 0; v < 1; v++) {
       let forma = String.fromCharCode(111,110,101,111,102,115,95,115,95,49,51,0);
       let watchf = String.fromCharCode(104,105,110,116,95,111,95,53,57,0);
       let main_gJ = String.fromCharCode(97,95,57,55,95,109,105,110,113,0);
      let dropdownL = watchf == String.fromCharCode(56,110,121,99,0);
      do {
          let sigmobx = String.fromCharCode(116,105,103,103,108,101,95,54,95,51,53,0);
          let cornerV = String.fromCharCode(112,103,115,122,95,116,95,49,56,0);
         watchf += `${(String.fromCharCode(120,0) == watchf ? cornerV.length : watchf.length)}`;
         sigmobx = `${sigmobx.length}`;
         cornerV = `${sigmobx.length}`;
         if (dropdownL) {
            break;
         }
      } while ((watchf.length <= 3) && dropdownL);
          let unread_ = String.fromCharCode(118,101,110,99,95,108,95,54,57,0);
         forma = `${unread_.length >> (Math.min(2, main_gJ.length))}`;
      let package_5Y = String.fromCharCode(111,95,55,100,99,95,0) == main_gJ;
      do {
         main_gJ = `${forma.length >> (Math.min(Math.abs(3), 5))}`;
         if (package_5Y) {
            break;
         }
      } while ((main_gJ.length >= 3 || 3 >= forma.length) && package_5Y);
         watchf += `${forma.length * main_gJ.length}`;
          let mbbidn = true;
          let umeng6 = String.fromCharCode(100,95,52,55,95,99,111,109,112,97,114,101,0);
         watchf += `${(watchf == String.fromCharCode(106,0) ? (mbbidn ? 2 : 4) : watchf.length)}`;
         mbbidn = String.fromCharCode(55,0) == umeng6;
         umeng6 += `${2 - umeng6.length}`;
          let collectionB = 5.0;
          let videocommonn: Array<any> = [842, 324, 959];
         watchf += `${1 | watchf.length}`;
         collectionB *= videocommonn.length;
         videocommonn.push(parseInt(`${collectionB}`) / (Math.max(3, videocommonn.length)));
          let componentL = false;
          let telegramN = 0.0;
         watchf = `${main_gJ.length}`;
         componentL = telegramN == telegramN;
      for (let g = 0; g < 1; g++) {
         forma += `${forma.length}`;
      }
         main_gJ += `${main_gJ.length / (Math.max(2, watchf.length))}`;
      philippineso >>= Math.min(Math.abs(downloadere.length | 2), 4);
   }
   while (downloadere.length <= football0) {
       let commonh = true;
      while (commonh) {
         commonh = !commonh;
         break;
      }
         commonh = !commonh;
      if (commonh || !commonh) {
         commonh = (commonh ? commonh : !commonh);
      }
      football0 += select6.length << (Math.min(Math.abs(3), 4));
      break;
   }
   let debugJ = 6353783 >= themez;
   do {
       let updatesf = String.fromCharCode(105,110,116,114,112,95,53,95,52,48,0);
       let chinasameq = String.fromCharCode(105,95,49,51,95,115,116,114,111,107,101,114,0);
       let stepU = String.fromCharCode(121,95,56,95,114,117,110,116,105,109,101,0);
         chinasameq += `${updatesf.length}`;
         updatesf = `${chinasameq.length}`;
       let checkboxc: Map<any, any> = new Map([[String.fromCharCode(115,104,111,116,95,109,95,51,50,0),447], [String.fromCharCode(104,95,49,56,95,110,101,101,100,108,101,0),796]]);
          let navigationA: Array<any> = [587, 172];
         stepU += "3";
         navigationA.push(navigationA.length ^ navigationA.length);
          let trashx = 2;
         stepU = `${trashx * 3}`;
         checkboxc.set(chinasameq, stepU.length + chinasameq.length);
          let taiwand: Map<any, any> = new Map([[String.fromCharCode(100,95,52,57,95,115,104,117,102,102,108,101,112,108,97,110,101,115,0),false ], [String.fromCharCode(112,105,99,107,105,110,116,101,114,95,109,95,56,49,0),false ], [String.fromCharCode(121,95,53,49,95,116,114,97,99,107,101,114,0),true ]]);
          let trophyF = String.fromCharCode(120,95,50,49,95,111,109,112,114,101,115,115,111,114,0);
          let catalogX = String.fromCharCode(112,108,97,121,101,114,95,56,95,54,48,0);
         chinasameq = `${trophyF.length * 1}`;
         taiwand.set(catalogX, catalogX.length);
         trophyF = `${(catalogX == String.fromCharCode(109,0) ? catalogX.length : taiwand.size)}`;
      if (stepU.endsWith(`${checkboxc.size}`)) {
          let casth = String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,53,95,54,49,0);
          let rewardl: Array<any> = [344, 829];
          let completey = 0;
          let clearR: Map<any, any> = new Map([[String.fromCharCode(106,95,57,50,95,115,116,112,115,0),true ], [String.fromCharCode(121,95,55,52,95,117,110,105,0),false ]]);
         stepU += `${completey ^ 2}`;
         casth += `${casth.length}`;
         rewardl = [(casth == String.fromCharCode(55,0) ? clearR.size : casth.length)];
         completey %= Math.max(3, 3);
         clearR.set(`${rewardl.length}`, 3 - clearR.size);
      }
       let sendv = String.fromCharCode(114,101,115,112,111,110,100,101,114,95,109,95,49,51,0);
       let catalogJ = String.fromCharCode(118,97,108,105,100,97,116,101,100,95,114,95,50,48,0);
      themez |= 2;
      if (debugJ) {
         break;
      }
   } while ((2 == (1 & themez)) && debugJ);
   if (viewsB || select6.length >= 2) {
       let backP = String.fromCharCode(114,111,98,105,110,95,121,95,52,51,0);
       let hookb = String.fromCharCode(101,95,54,50,95,114,105,110,103,98,117,102,102,101,114,0);
      let launcherR = String.fromCharCode(108,51,51,50,101,116,117,0) == backP;
      do {
         backP = `${backP.length & hookb.length}`;
         if (launcherR) {
            break;
         }
      } while ((hookb.length == backP.length) && launcherR);
         backP = `${backP.length}`;
         hookb = `${backP.length}`;
       let leftM: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,105,110,103,95,112,95,49,55,0),436], [String.fromCharCode(98,95,55,56,95,108,111,99,107,99,104,97,105,110,0),826]]);
         backP = "2";
      let y_countl = backP == String.fromCharCode(103,56,105,48,107,0);
      do {
          let bingl: Array<any> = [214, 550];
          let h_imageG: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,105,110,103,95,110,95,55,0),680], [String.fromCharCode(109,95,52,49,95,100,101,99,111,100,101,114,105,110,105,116,0),109]]);
          let debug4 = 4.0;
          let placementM = 3.0;
          let apple5 = true;
         backP += `${backP.length}`;
         bingl.push(1);
         h_imageG.set(`${placementM}`, 2 - bingl.length);
         debug4 *= parseFloat(`${parseInt(`${debug4}`) + h_imageG.size}`);
         placementM -= parseInt(`${debug4}`) >> (Math.min(Math.abs(2), 5));
         apple5 = h_imageG.size <= 9;
         if (y_countl) {
            break;
         }
      } while ((!backP.includes(`${leftM.size}`)) && y_countl);
      select6 = `${(String.fromCharCode(70,0) == sentry1 ? sentry1.length : statisticsa.length)}`;
   }
      statisticsa = [parseInt(`${downloaderL}`) & reducerB.size];
      logoa = modelX.size > 67;
      themez <<= Math.min(Math.abs(themez), 4);
       let episodesp = String.fromCharCode(112,95,50,55,95,115,101,110,99,0);
       let rewind8 = String.fromCharCode(121,95,53,51,95,112,105,120,115,99,111,112,101,0);
      let private_z0w = episodesp.length >= 6684120;
      do {
         episodesp += `${(String.fromCharCode(72,0) == episodesp ? episodesp.length : rewind8.length)}`;
         if (private_z0w) {
            break;
         }
      } while ((episodesp.length >= 2) && private_z0w);
      for (let d = 0; d < 3; d++) {
          let clock5 = String.fromCharCode(110,101,116,101,114,114,110,111,95,111,95,56,57,0);
          let time_16Y = String.fromCharCode(119,95,57,53,95,100,101,113,117,101,117,101,0);
          let d_countx = false;
         episodesp += `${(clock5.length * (d_countx ? 4 : 4))}`;
         clock5 += `${time_16Y.length % (Math.max(2, time_16Y.length))}`;
      }
      let favorite3 = episodesp.length <= 8659397;
      do {
         episodesp += `${episodesp.length + 3}`;
         if (favorite3) {
            break;
         }
      } while ((4 <= rewind8.length) && favorite3);
         rewind8 = `${episodesp.length}`;
         episodesp += "3";
       let user_ = String.fromCharCode(97,95,54,57,95,99,116,105,118,105,116,121,0);
       let holderm = String.fromCharCode(114,95,57,56,95,99,111,110,103,0);
      philippineso <<= Math.min(Math.abs(3), 3);
      matchest -= ((viewsB ? 5 : 4) & (logoa ? 5 : 1));
   for (let i = 0; i < 1; i++) {
       let photon = 4.0;
      for (let o = 0; o < 2; o++) {
          let firebasew = false;
         photon /= Math.max((parseFloat(`${(firebasew ? 5 : 5) << (Math.min(Math.abs(parseInt(`${photon}`)), 3))}`)), 3);
      }
          let q_manager_: Map<any, any> = new Map([[String.fromCharCode(103,95,52,48,95,108,108,110,119,0),780], [String.fromCharCode(120,95,52,50,95,100,101,105,110,118,101,114,116,0),597], [String.fromCharCode(107,95,53,95,112,105,120,101,108,115,120,0),291]]);
         photon /= Math.max(parseFloat(`${parseInt(`${photon}`) | 2}`), 4);
         q_manager_ = new Map([[`${q_manager_.size}`, q_manager_.size - 1]]);
      while (2.18 <= (2.76 / (Math.max(4, photon)))) {
         photon /= Math.max(5, parseFloat(`${2 * parseInt(`${photon}`)}`));
         break;
      }
      downloaderL /= Math.max(5, football0);
   }
   let arrowz = sellc == String.fromCharCode(115,56,111,0);
   do {
       let bingO: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,98,111,108,108,105,99,95,111,95,50,49,0),293], [String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,103,95,51,52,0),105], [String.fromCharCode(98,95,56,50,95,105,110,118,105,115,105,98,108,101,0),229]]);
       let configureS = 2.0;
       let streaminge: Map<any, any> = new Map([[String.fromCharCode(100,95,55,51,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0),false ], [String.fromCharCode(115,95,51,54,95,100,114,97,103,0),false ], [String.fromCharCode(100,101,113,117,97,110,116,105,122,101,114,95,54,95,52,48,0),false ]]);
       let cornerS = String.fromCharCode(109,95,49,52,95,112,111,105,110,116,101,114,0);
       let moviesc = String.fromCharCode(121,95,54,48,95,105,115,105,0);
         configureS += parseFloat(`${3}`);
         moviesc = `${3 % (Math.max(5, cornerS.length))}`;
      let file3 = moviesc.length <= 5359697;
      do {
          let backwardE: Array<any> = [720, 687];
          let philippines8: Array<any> = [454, 347];
          let storeG = 4.0;
         moviesc += `${parseInt(`${configureS}`) / 2}`;
         backwardE = [3 | parseInt(`${storeG}`)];
         philippines8 = [3];
         storeG *= parseFloat(`${philippines8.length & backwardE.length}`);
         if (file3) {
            break;
         }
      } while (file3 && (moviesc.length > 4));
      for (let o = 0; o < 2; o++) {
         moviesc += `${parseInt(`${configureS}`) * cornerS.length}`;
      }
         moviesc = `${streaminge.size}`;
      if (1 > cornerS.length) {
         cornerS = `${bingO.size}`;
      }
          let stringX = 1.0;
          let whistler: Array<any> = [String.fromCharCode(109,115,115,100,115,112,95,105,95,54,51,0), String.fromCharCode(98,95,56,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0), String.fromCharCode(119,95,52,51,95,97,100,100,101,114,0)];
          let privilegeL = false;
         moviesc += "3";
         stringX += whistler.length << (Math.min(1, Math.abs(parseInt(`${stringX}`))));
         whistler = [parseInt(`${stringX}`)];
         privilegeL = whistler.length < 53 || 27.26 < stringX;
      for (let w = 0; w < 3; w++) {
         configureS -= parseFloat(`${streaminge.size}`);
      }
      for (let c = 0; c < 3; c++) {
          let spect: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,115,112,97,99,101,95,57,95,51,51,0),892], [String.fromCharCode(99,95,57,54,95,101,120,112,111,0),938], [String.fromCharCode(111,95,53,95,98,105,110,0),931]]);
          let philippinesp = 2;
         streaminge.set(`${streaminge.size}`, 1 % (Math.max(2, spect.size)));
         spect.set(`${philippinesp}`, 3 / (Math.max(8, philippinesp)));
      }
      let prediction6 = configureS <= 7360473.0;
      do {
          let configure8 = true;
         configureS *= parseFloat(`${bingO.size}`);
         configure8 = !configure8;
         if (prediction6) {
            break;
         }
      } while ((5 == (bingO.size % 1) && (configureS / (Math.max(parseFloat(`${bingO.size}`), 4))) == 2.45) && prediction6);
         moviesc += `${2 | parseInt(`${configureS}`)}`;
         cornerS = `${2 >> (Math.min(3, Math.abs(parseInt(`${configureS}`))))}`;
      if ((moviesc.length + 4) > 3 || (5.48 * configureS) > 2.27) {
          let weibom = false;
         configureS += parseFloat(`${1}`);
      }
       let filter2 = String.fromCharCode(116,105,116,108,101,115,95,55,95,51,49,0);
         bingO.set(`${configureS}`, moviesc.length >> (Math.min(5, Math.abs(parseInt(`${configureS}`)))));
      sellc = `${vertical0.length + 1}`;
      if (arrowz) {
         break;
      }
   } while (((matchest - 2.29) <= 3.89 && (5 - parseInt(`${matchest}`)) <= 2) && arrowz);
   let invite4 = sentry1.length >= 5329223;
   do {
       let switch_oU: Array<any> = [383, 973];
       let stringq = String.fromCharCode(112,101,97,107,95,105,95,57,0);
       let textL = 2.0;
       let yellow_ = String.fromCharCode(110,105,115,116,95,116,95,56,57,0);
       let rewardvideoa: Array<any> = [36, 855, 814];
      for (let x = 0; x < 3; x++) {
          let humidityA = 5.0;
          let launcha: Map<any, any> = new Map([[String.fromCharCode(112,95,49,55,95,108,111,103,105,99,0),342], [String.fromCharCode(108,105,112,98,111,97,114,100,95,49,95,50,54,0),276], [String.fromCharCode(97,95,53,48,95,112,97,116,104,110,97,109,101,0),747]]);
          let collectionz = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,101,95,115,95,49,0);
          let showg: Array<any> = [String.fromCharCode(109,95,54,52,95,111,110,115,101,116,0), String.fromCharCode(119,95,49,51,95,105,115,111,0)];
         yellow_ = "1";
         humidityA -= showg.length;
         launcha.set(`${humidityA}`, launcha.size);
         collectionz = `${collectionz.length - showg.length}`;
      }
          let whatsappG = String.fromCharCode(107,95,53,53,95,97,118,103,0);
         textL /= Math.max(3, (whatsappG == String.fromCharCode(103,0) ? rewardvideoa.length : whatsappG.length));
       let update_wU = 0.0;
       let mbnativeadvanced7 = 3.0;
      for (let y = 0; y < 2; y++) {
         rewardvideoa = [switch_oU.length];
      }
      for (let y = 0; y < 2; y++) {
         update_wU -= 3 * rewardvideoa.length;
      }
      let productm = 5536975.0 <= update_wU;
      do {
         update_wU *= parseInt(`${textL}`) / 2;
         if (productm) {
            break;
         }
      } while ((rewardvideoa.length > 5) && productm);
      for (let e = 0; e < 2; e++) {
         textL += parseInt(`${mbnativeadvanced7}`);
      }
      let pointX = 5791188 >= switch_oU.length;
      do {
         switch_oU.push(parseInt(`${update_wU}`) - 1);
         if (pointX) {
            break;
         }
      } while ((3 == yellow_.length) && pointX);
      if ((yellow_.length + 4) >= 4 && (yellow_.length + rewardvideoa.length) >= 4) {
          let statsg: Map<any, any> = new Map([[String.fromCharCode(97,115,109,100,101,102,115,95,49,95,53,50,0),378], [String.fromCharCode(112,105,99,107,101,114,115,95,112,95,56,57,0),161], [String.fromCharCode(116,95,52,53,95,102,108,97,116,0),422]]);
         yellow_ += `${stringq.length / 2}`;
         statsg = new Map([[`${statsg.size}`, statsg.size]]);
      }
      for (let s = 0; s < 3; s++) {
          let borderlessB: Map<any, any> = new Map([[String.fromCharCode(117,95,53,57,95,109,118,100,97,116,97,0),49], [String.fromCharCode(112,97,115,115,105,118,101,95,116,95,53,55,0),172]]);
          let adultI = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,118,95,54,52,0);
          let emojih = 4.0;
          let skipS = true;
          let w_lock3 = 1.0;
         mbnativeadvanced7 /= Math.max(1, switch_oU.length + stringq.length);
         borderlessB = new Map([[adultI, adultI.length]]);
         emojih *= parseFloat(`${parseInt(`${emojih}`)}`);
         skipS = 89 >= adultI.length;
         w_lock3 *= 3;
      }
      while (update_wU >= 3.21) {
         update_wU -= switch_oU.length;
         break;
      }
      if (4.5 <= (textL * 4.41) || (yellow_.length * parseInt(`${textL}`)) <= 1) {
         yellow_ = `${rewardvideoa.length | 1}`;
      }
      for (let g = 0; g < 2; g++) {
         switch_oU.push(parseInt(`${update_wU}`) << (Math.min(Math.abs(3), 1)));
      }
         switch_oU = [parseInt(`${update_wU}`)];
          let historyO = 2;
          let playlistw = 3.0;
         rewardvideoa = [stringq.length % 2];
         historyO %= Math.max(5, 1);
         playlistw -= parseFloat(`${historyO}`);
      sentry1 = `${2 & parseInt(`${textL}`)}`;
      if (invite4) {
         break;
      }
   } while ((sentry1.length <= modelX.size) && invite4);
      matchest += select6.length % (Math.max(6, vertical0.length));
      statisticsa.push(reducerB.size);

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
       let pagew = String.fromCharCode(113,95,51,95,110,105,107,111,110,0);
    let lightB = 1;
    let bridgeP = 4;
    let dplusO = String.fromCharCode(121,95,52,57,95,115,116,117,102,102,110,100,0);
    let refreshb = 1;
    let bootsplashB = String.fromCharCode(100,95,49,56,95,116,105,116,108,116,101,0);
    let mbjscommonP = String.fromCharCode(108,95,51,49,95,115,107,101,119,101,100,0);
    let fieldm: Array<any> = [String.fromCharCode(98,95,54,49,95,114,101,97,100,97,98,108,101,0), String.fromCharCode(98,95,55,56,95,98,117,116,116,101,114,102,108,121,0), String.fromCharCode(104,95,57,95,108,115,119,115,117,116,105,108,115,0)];
    let backE = 0.0;
   while (!pagew.includes(`${lightB}`)) {
       let filter8 = String.fromCharCode(108,111,110,103,98,105,103,95,49,95,51,0);
       let mintegralO = String.fromCharCode(108,95,56,51,95,116,105,114,101,100,0);
      for (let r = 0; r < 2; r++) {
          let mailO = String.fromCharCode(115,95,55,53,95,114,118,100,97,116,97,0);
          let dplusa = 4;
          let reminderJ = 2;
          let stationsB = 5.0;
          let emptyn = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,100,95,55,95,52,49,0);
         filter8 = `${(mailO == String.fromCharCode(81,0) ? mailO.length : mintegralO.length)}`;
         dplusa &= 2;
         reminderJ /= Math.max(emptyn.length | 1, 2);
         stationsB += (emptyn == String.fromCharCode(72,0) ? parseInt(`${stationsB}`) : emptyn.length);
      }
          let stringsq = 4;
          let subsn = String.fromCharCode(110,114,101,102,95,49,95,49,54,0);
          let calendarX = String.fromCharCode(121,95,51,52,95,108,111,103,0);
         filter8 = `${mintegralO.length >> (Math.min(Math.abs(1), 5))}`;
         stringsq -= calendarX.length + stringsq;
         subsn = `${subsn.length | stringsq}`;
         calendarX = `${calendarX.length}`;
      let t_managerB = mintegralO == String.fromCharCode(97,112,120,101,99,104,105,0);
      do {
          let formi = 3.0;
          let play2: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,99,97,116,101,95,53,95,57,50,0),522], [String.fromCharCode(118,114,101,99,116,95,107,95,55,54,0),395], [String.fromCharCode(109,95,51,49,95,102,117,122,122,121,0),831]]);
          let y_unlock8 = 3.0;
          let emojie = String.fromCharCode(109,95,56,54,95,99,111,109,109,97,110,100,0);
         mintegralO += `${filter8.length - 3}`;
         formi *= parseFloat(`${play2.size >> (Math.min(4, Math.abs(parseInt(`${formi}`))))}`);
         play2 = new Map([[emojie, parseInt(`${y_unlock8}`)]]);
         y_unlock8 -= parseInt(`${formi}`) << (Math.min(Math.abs(play2.size), 1));
         emojie += "2";
         if (t_managerB) {
            break;
         }
      } while (t_managerB && (filter8 != String.fromCharCode(75,0)));
      let single9 = filter8 == String.fromCharCode(51,103,54,104,0);
      do {
         filter8 = `${2 * filter8.length}`;
         if (single9) {
            break;
         }
      } while ((mintegralO == String.fromCharCode(108,0) && filter8 != String.fromCharCode(120,0)) && single9);
         filter8 += `${filter8.length >> (Math.min(Math.abs(2), 2))}`;
         mintegralO += "2";
      pagew += `${1 * mintegralO.length}`;
      break;
   }
   while (pagew.length >= refreshb) {
       let reducero = false;
       let friends1 = String.fromCharCode(118,95,56,54,95,99,114,101,100,101,110,116,105,97,108,115,0);
       let internetS = String.fromCharCode(120,116,101,97,95,104,95,50,50,0);
       let klevinN = String.fromCharCode(115,116,114,117,99,116,95,99,95,54,0);
       let coreZ = String.fromCharCode(97,99,99,101,115,115,95,55,95,55,52,0);
         coreZ += `${klevinN.length}`;
      if (internetS != coreZ) {
          let sentry4 = String.fromCharCode(114,95,52,54,95,114,105,100,103,101,0);
          let huaweih = false;
          let default_52c = 2;
          let sportq = 1.0;
         coreZ += `${1 << (Math.min(Math.abs(default_52c), 1))}`;
         sentry4 = `${1 ^ parseInt(`${sportq}`)}`;
         huaweih = (parseInt(`${sportq}`) + sentry4.length) == 42;
         default_52c <<= Math.min(Math.abs(parseInt(`${sportq}`)), 1);
      }
      for (let p = 0; p < 1; p++) {
         klevinN = `${(internetS == String.fromCharCode(65,0) ? internetS.length : (reducero ? 4 : 4))}`;
      }
      while (!reducero) {
          let tempk: Array<any> = [210, 280, 640];
          let pathi = String.fromCharCode(118,99,116,101,115,116,95,112,95,49,52,0);
         internetS += "3";
         tempk = [tempk.length];
         pathi += `${pathi.length ^ tempk.length}`;
         break;
      }
          let group9: Map<any, any> = new Map([[String.fromCharCode(105,95,54,95,115,108,105,112,112,97,103,101,0),String.fromCharCode(119,109,118,100,115,112,95,122,95,50,51,0)], [String.fromCharCode(102,95,50,50,95,97,114,114,111,119,0),String.fromCharCode(102,95,50,57,95,109,117,108,116,105,112,108,101,114,115,0)]]);
          let progressk = 4;
         reducero = String.fromCharCode(102,0) == klevinN;
         group9 = new Map([[`${group9.size}`, progressk << (Math.min(Math.abs(group9.size), 4))]]);
         progressk *= group9.size;
         klevinN = `${internetS.length}`;
         reducero = (internetS.length ^ klevinN.length) < 32;
         coreZ = "1";
      if (klevinN != String.fromCharCode(52,0)) {
          let internetX = true;
          let ajaxV = 4.0;
          let playlist2 = String.fromCharCode(112,111,105,110,116,115,95,120,95,56,48,0);
          let calendark = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,95,106,95,52,51,0);
         friends1 += `${(1 >> (Math.min(5, Math.abs((internetX ? 5 : 1)))))}`;
         internetX = (playlist2.length - calendark.length) >= 32;
         ajaxV /= Math.max(1, parseFloat(`${playlist2.length}`));
         calendark = `${playlist2.length / (Math.max(1, 6))}`;
      }
       let pause8 = 2.0;
      if (reducero) {
         reducero = !friends1.startsWith(`${reducero}`);
      }
       let collectionC = 4.0;
         friends1 += `${parseInt(`${pause8}`) / 1}`;
      for (let u = 0; u < 2; u++) {
          let sendr: Map<any, any> = new Map([[String.fromCharCode(101,116,104,101,114,110,101,116,95,104,95,49,49,0),String.fromCharCode(98,111,111,116,95,109,95,50,53,0)], [String.fromCharCode(105,110,112,117,116,95,98,95,50,55,0),String.fromCharCode(110,95,57,50,95,114,116,112,109,97,112,0)], [String.fromCharCode(111,95,53,53,95,97,108,97,110,103,117,97,103,101,0),String.fromCharCode(113,95,57,95,99,117,114,118,101,0)]]);
         internetS += `${sendr.size / (Math.max(3, 5))}`;
      }
          let related7: Array<any> = [String.fromCharCode(104,95,57,54,95,104,111,108,100,115,0), String.fromCharCode(106,95,54,51,95,115,107,105,112,115,0)];
          let pageQ = 3;
         collectionC /= Math.max((String.fromCharCode(119,0) == internetS ? friends1.length : internetS.length), 1);
         related7.push(1);
         pageQ *= 1;
      refreshb += friends1.length;
      break;
   }

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      refreshb <<= Math.min(Math.abs(bridgeP), 4);
      refreshb <<= Math.min(3, Math.abs(pagew.length * 1));
        

      mbjscommonP = `${(mbjscommonP == String.fromCharCode(106,0) ? mbjscommonP.length : dplusO.length)}`;
      pagew += `${refreshb}`;
        

      refreshb <<= Math.min(3, dplusO.length);
      mbjscommonP += "1";
        

      bridgeP >>= Math.min(3, mbjscommonP.length);
      bootsplashB = `${mbjscommonP.length}`;

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

      dplusO = `${(String.fromCharCode(100,0) == dplusO ? refreshb : dplusO.length)}`;
      lightB %= Math.max(2 * pagew.length, 5);

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

      bridgeP &= 3 & lightB;
       let cast_: Map<any, any> = new Map([[String.fromCharCode(119,105,112,101,95,112,95,57,49,0),String.fromCharCode(111,95,56,48,95,100,101,108,105,118,101,114,121,0)], [String.fromCharCode(108,95,49,56,95,110,105,115,116,110,105,100,0),String.fromCharCode(112,111,115,116,102,105,120,95,100,95,56,52,0)]]);
       let kuaishouq: Map<any, any> = new Map([[String.fromCharCode(97,118,101,114,95,111,95,51,49,0),153], [String.fromCharCode(118,95,52,56,95,118,99,97,114,100,0),617], [String.fromCharCode(97,115,110,116,95,54,95,51,53,0),92]]);
       let foregroundA = String.fromCharCode(115,101,110,100,105,110,103,95,115,95,50,49,0);
      while ((cast_.size * foregroundA.length) == 5) {
          let bellm = String.fromCharCode(103,95,49,53,95,112,97,114,116,110,101,114,0);
         cast_ = new Map([[`${cast_.size}`, 2]]);
         bellm = `${bellm.length}`;
         break;
      }
       let logor = 4.0;
       let nativeexd = 5.0;
          let goal8 = 5.0;
          let soundi = 1.0;
         kuaishouq.set(`${soundi}`, parseInt(`${soundi}`));
         goal8 /= Math.max(4, parseFloat(`${parseInt(`${goal8}`) << (Math.min(5, Math.abs(parseInt(`${goal8}`))))}`));
       let signinupE = 4.0;
       let searchbarY = 3.0;
      let transfer7 = logor >= 9492516.0;
      do {
         logor *= parseFloat(`${1}`);
         if (transfer7) {
            break;
         }
      } while ((2 < (foregroundA.length ^ 3) && (logor + 5.57) < 4.67) && transfer7);
         kuaishouq = new Map([[`${nativeexd}`, parseInt(`${nativeexd}`)]]);
      let macauB = kuaishouq.size <= 9479079;
      do {
         kuaishouq.set(`${nativeexd}`, 2);
         if (macauB) {
            break;
         }
      } while (((kuaishouq.size - parseInt(`${logor}`)) > 5) && macauB);
      for (let y = 0; y < 2; y++) {
         logor /= Math.max(parseFloat(`${1}`), 3);
      }
          let langkeym = String.fromCharCode(122,101,114,111,122,101,114,111,95,98,95,56,54,0);
          let rank9 = String.fromCharCode(112,97,114,115,101,95,112,95,49,53,0);
          let floatingP = String.fromCharCode(112,97,103,101,110,111,95,106,95,51,0);
         signinupE /= Math.max(2, parseFloat(`${parseInt(`${logor}`) >> (Math.min(Math.abs(parseInt(`${signinupE}`)), 5))}`));
         langkeym = `${rank9.length / (Math.max(floatingP.length, 2))}`;
         rank9 = `${floatingP.length}`;
      mbjscommonP += `${mbjscommonP.length}`;


        if (fileExist) {

      lightB |= refreshb / (Math.max(2, 4));
      pagew = "2";
          const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

   let volume9 = refreshb <= 8520744;
   do {
       let dark7 = 4;
       let dplusA = String.fromCharCode(99,108,97,112,95,111,95,52,52,0);
       let rightr = 3.0;
       let projectg = String.fromCharCode(114,101,108,97,117,110,99,104,95,106,95,52,54,0);
      refreshb *= dplusO.length * 3;
      dark7 <<= Math.min(5, Math.abs(dark7 / (Math.max(2, 6))));
      if (volume9) {
         break;
      }
   } while (((5 | refreshb) <= 1 || 3 <= (refreshb | 5)) && volume9);
   while (refreshb > lightB) {
      refreshb <<= Math.min(Math.abs((String.fromCharCode(76,0) == bootsplashB ? lightB : bootsplashB.length)), 2);
      break;
   }
          

      mbjscommonP += `${bridgeP}`;
       let graye: Map<any, any> = new Map([[String.fromCharCode(100,118,98,115,117,98,95,48,95,52,55,0),true ], [String.fromCharCode(112,108,97,116,102,111,114,109,95,49,95,49,53,0),false ]]);
       let views7 = 3;
         graye.set(`${views7}`, graye.size);
      for (let d = 0; d < 3; d++) {
         views7 <<= Math.min(1, Math.abs(views7 ^ graye.size));
      }
      if (!Array.from(graye.keys()).includes(`${views7}`)) {
          let launcherT: Array<any> = [212, 779];
          let settingsk = true;
          let combineH = String.fromCharCode(118,95,54,57,95,115,101,99,116,111,114,0);
          let inviteE: Array<any> = [556, 143, 395];
          let headeru: Array<any> = [722, 155];
         graye = new Map([[`${graye.size}`, 2]]);
         launcherT = [1 % (Math.max(3, combineH.length))];
         settingsk = headeru.length >= 58;
         combineH = "1";
         inviteE = [((settingsk ? 1 : 3) ^ combineH.length)];
         headeru.push(3 / (Math.max(9, inviteE.length)));
      }
       let searchI = 4.0;
      for (let x = 0; x < 2; x++) {
         graye = new Map([[`${searchI}`, parseInt(`${searchI}`)]]);
      }
         graye.set(`${searchI}`, parseInt(`${searchI}`) % 3);
      pagew += `${2 >> (Math.min(5, Math.abs(lightB)))}`;
          if (!fileIsEmpty) {

   if ((refreshb << (Math.min(Math.abs(5), 3))) > 4 || (mbjscommonP.length << (Math.min(4, Math.abs(refreshb)))) > 5) {
       let crossX = String.fromCharCode(98,112,115,95,121,95,51,56,0);
       let footballs = 3.0;
       let singleK = String.fromCharCode(102,97,99,101,95,118,95,56,54,0);
      if (crossX.endsWith(singleK)) {
          let sliderj = 1;
          let trophyM = 3;
          let reportq = 3;
          let smallm = 1.0;
         singleK += `${sliderj}`;
         sliderj /= Math.max(5, parseInt(`${smallm}`));
         trophyM %= Math.max(3, reportq);
         reportq *= 3;
         smallm *= parseFloat(`${1}`);
      }
         footballs -= parseInt(`${footballs}`) | 3;
      for (let m = 0; m < 1; m++) {
          let point6 = 1.0;
         crossX = `${singleK.length + 1}`;
         point6 -= parseFloat(`${2 | parseInt(`${point6}`)}`);
      }
       let arrowh = String.fromCharCode(113,95,57,50,95,112,97,114,97,109,115,0);
      if (crossX.length == 4) {
         arrowh = `${parseInt(`${footballs}`) / (Math.max(crossX.length, 10))}`;
      }
         crossX = `${crossX.length >> (Math.min(Math.abs(1), 5))}`;
      for (let j = 0; j < 1; j++) {
         singleK += "1";
      }
      if (crossX == String.fromCharCode(116,0)) {
         arrowh = `${arrowh.length}`;
      }
          let iconS = 0;
          let helpern = false;
          let guide5 = String.fromCharCode(114,117,110,110,105,110,103,95,48,95,57,53,0);
         footballs += crossX.length % 2;
         iconS <<= Math.min(Math.abs(iconS), 5);
         helpern = iconS >= 25;
         guide5 = `${iconS | 2}`;
      refreshb &= dplusO.length ^ 3;
   }
      dplusO = `${mbjscommonP.length | refreshb}`;
            setMiniVodUrl(`${fileLocation}`);
          } else {

      bridgeP /= Math.max(2, refreshb | 3);
      mbjscommonP += `${refreshb / (Math.max(bridgeP, 2))}`;
            

       let star1 = 1.0;
         star1 += parseInt(`${star1}`);
       let yellowH = String.fromCharCode(100,101,116,101,114,109,105,110,105,115,116,105,99,95,119,95,55,54,0);
      for (let h = 0; h < 3; h++) {
          let selected7 = false;
          let lessE: Map<any, any> = new Map([[String.fromCharCode(116,104,101,110,97,98,108,101,95,120,95,50,52,0),0], [String.fromCharCode(115,95,53,56,95,120,105,112,104,108,97,99,105,110,103,0),922], [String.fromCharCode(103,95,57,53,95,115,99,97,108,101,100,0),305]]);
          let targetx = 1;
          let x_unlockQ = 5.0;
          let placeholderY: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,114,101,115,111,117,114,99,101,0),823], [String.fromCharCode(118,95,56,51,95,115,117,98,114,97,110,103,101,0),689]]);
         yellowH = `${placeholderY.size}`;
         selected7 = !selected7;
         lessE.set(`${selected7}`, ((selected7 ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${x_unlockQ}`)), 4))));
         targetx %= Math.max(1, ((selected7 ? 5 : 4) << (Math.min(Math.abs(1), 5))));
         x_unlockQ *= parseFloat(`${parseInt(`${x_unlockQ}`)}`);
         placeholderY = new Map([[`${lessE.size}`, targetx << (Math.min(Math.abs(1), 5))]]);
      }
      mbjscommonP = "2";
       let navigation7 = String.fromCharCode(118,95,55,52,95,116,119,111,108,111,111,112,0);
      while (navigation7 != navigation7) {
         navigation7 += `${navigation7.length % 1}`;
         break;
      }
       let playlisty = String.fromCharCode(102,95,51,52,95,105,110,116,101,103,101,114,0);
       let internetV = String.fromCharCode(104,119,97,101,115,95,51,95,54,50,0);
       let logoZ = String.fromCharCode(116,95,48,95,98,101,114,110,111,117,108,108,105,0);
       let storeb = String.fromCharCode(103,95,55,52,95,114,101,118,101,114,116,0);
      bootsplashB = "3";
            setMiniVodUrl(currentVod.mini_video_origin_video_url)
          }
        } else {

   let sport4 = dplusO == String.fromCharCode(113,118,52,57,111,51,101,97,98,0);
   do {
      dplusO = `${3 >> (Math.min(4, dplusO.length))}`;
      if (sport4) {
         break;
      }
   } while (((lightB * 4) <= 1) && sport4);
   for (let h = 0; h < 3; h++) {
      dplusO = `${pagew.length}`;
   }
          

   if (bootsplashB != pagew) {
       let halfv = 2;
       let configM = 0.0;
       let predictionV = String.fromCharCode(103,95,54,57,95,116,105,108,101,120,0);
       let custom_: Array<any> = [898, 538];
       let taile = String.fromCharCode(97,110,105,109,97,116,105,111,110,115,95,121,95,57,54,0);
      while (2 <= (halfv | 5) && 2 <= (5 | taile.length)) {
          let activityv = String.fromCharCode(115,97,118,101,109,101,100,105,97,95,117,95,54,57,0);
          let moviesb = String.fromCharCode(98,95,56,49,95,119,101,97,118,101,0);
          let bannerW = 2;
          let skiph = true;
          let debugu = String.fromCharCode(114,101,113,117,101,115,116,101,114,95,52,95,54,56,0);
         taile += `${debugu.length + 3}`;
         activityv += "2";
         moviesb += `${bannerW / 3}`;
         bannerW -= (bannerW - (skiph ? 4 : 2));
         skiph = moviesb.startsWith(`${skiph}`);
         debugu = `${moviesb.length % (Math.max(9, bannerW))}`;
         break;
      }
         predictionV += `${halfv}`;
      for (let e = 0; e < 2; e++) {
          let debugE = String.fromCharCode(115,116,114,105,107,101,95,99,95,49,49,0);
          let storef = String.fromCharCode(105,95,52,52,95,115,112,111,116,0);
         predictionV = `${halfv % 3}`;
         debugE = `${debugE.length / (Math.max(1, 8))}`;
         storef += `${storef.length / (Math.max(3, 1))}`;
      }
      let albumP = predictionV.length >= 5883931;
      do {
         predictionV = `${custom_.length}`;
         if (albumP) {
            break;
         }
      } while (albumP && (!predictionV.startsWith(`${custom_.length}`)));
      while (predictionV.includes(`${taile.length}`)) {
         taile += `${parseInt(`${configM}`) ^ predictionV.length}`;
         break;
      }
         halfv ^= (taile == String.fromCharCode(118,0) ? custom_.length : taile.length);
          let starO: Array<any> = [368, 731, 628];
          let sansJ = String.fromCharCode(122,95,55,56,95,99,111,110,100,101,110,115,101,100,0);
          let pause3 = 2.0;
         taile += "1";
         starO.push(3);
         sansJ += `${sansJ.length}`;
         pause3 *= parseFloat(`${sansJ.length ^ parseInt(`${pause3}`)}`);
          let shrink0: Array<any> = [761, 270];
          let mapping4 = 4.0;
         halfv &= predictionV.length << (Math.min(3, Math.abs(halfv)));
         shrink0 = [parseInt(`${mapping4}`) << (Math.min(4, Math.abs(2)))];
         mapping4 *= 3;
      while (predictionV.includes(`${taile.length}`)) {
         predictionV = `${parseInt(`${configM}`)}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
          let nextI: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,95,102,95,54,0),268], [String.fromCharCode(112,99,97,112,95,104,95,55,0),509]]);
         custom_ = [3 * nextI.size];
      }
      let main_ti = 8433687.0 >= configM;
      do {
         configM -= parseFloat(`${2}`);
         if (main_ti) {
            break;
         }
      } while ((3.15 >= (4.27 * configM)) && main_ti);
         predictionV += "2";
          let signinupR = 0.0;
          let tickedU = String.fromCharCode(103,95,50,50,95,114,105,103,104,116,109,111,115,116,0);
          let matchN = String.fromCharCode(98,121,116,101,108,101,110,95,109,95,56,53,0);
         halfv *= (String.fromCharCode(70,0) == tickedU ? tickedU.length : predictionV.length);
         signinupR *= parseFloat(`${2 ^ matchN.length}`);
         matchN += `${(String.fromCharCode(120,0) == matchN ? parseInt(`${signinupR}`) : matchN.length)}`;
      while (2 > (3 / (Math.max(1, predictionV.length)))) {
         predictionV += `${custom_.length / (Math.max(2, 3))}`;
         break;
      }
      let appleW = configM >= 5257300.0;
      do {
          let feedbackN = String.fromCharCode(111,95,49,51,95,99,117,98,105,99,0);
          let interstitialv = 2.0;
         configM -= parseFloat(`${taile.length ^ parseInt(`${interstitialv}`)}`);
         feedbackN = `${feedbackN.length}`;
         interstitialv -= feedbackN.length / 2;
         if (appleW) {
            break;
         }
      } while ((configM == parseFloat(`${predictionV.length}`)) && appleW);
      pagew = `${refreshb * 3}`;
   }
       let stringsH = String.fromCharCode(97,112,112,115,102,108,121,101,114,95,102,95,56,51,0);
         stringsH = `${(String.fromCharCode(72,0) == stringsH ? stringsH.length : stringsH.length)}`;
         stringsH = `${stringsH.length - 1}`;
      for (let u = 0; u < 2; u++) {
         stringsH = `${stringsH.length - 1}`;
      }
      backE += dplusO.length % (Math.max(bootsplashB.length, 4));
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
       let downloadr = 3.0;
    let navigationz = true;
    let panglei = String.fromCharCode(113,95,52,48,95,99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0);
    let submiti = String.fromCharCode(117,110,115,99,97,108,101,95,52,95,52,0);
    let submitD = 3.0;
    let fastforwardA = 5.0;
    let pingo = String.fromCharCode(121,95,52,57,95,104,101,120,98,121,116,101,0);
    let tailf = false;
    let navigatione = false;
    let invitew: Map<any, any> = new Map([[String.fromCharCode(106,95,53,48,95,119,105,115,101,0),String.fromCharCode(112,95,49,56,95,104,105,103,104,101,115,116,0)], [String.fromCharCode(109,97,116,114,105,120,105,110,103,95,51,95,50,54,0),String.fromCharCode(120,95,53,51,95,118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,0)]]);
   if (1 == (parseInt(`${submitD}`) / 2) && 1 == (panglei.length ^ 2)) {
      panglei += `${panglei.length}`;
   }
   for (let k = 0; k < 2; k++) {
       let castF: Array<any> = [921, 666];
       let stringP: Array<any> = [365, 100, 396];
       let combineY: Map<any, any> = new Map([[String.fromCharCode(102,95,51,51,95,122,111,110,101,115,0),String.fromCharCode(98,101,99,104,95,121,95,50,50,0)], [String.fromCharCode(101,95,55,55,95,101,110,97,98,108,101,0),String.fromCharCode(117,95,50,52,95,98,121,112,97,115,115,0)], [String.fromCharCode(118,111,116,101,115,95,48,95,52,52,0),String.fromCharCode(99,111,109,112,97,110,100,95,122,95,52,54,0)]]);
       let suggestion0 = 3.0;
       let moonj = String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,117,95,49,48,48,0);
          let sportsy: Map<any, any> = new Map([[String.fromCharCode(115,112,100,105,102,95,98,95,50,56,0),953], [String.fromCharCode(97,95,49,48,48,95,114,101,99,105,112,105,101,110,116,0),735], [String.fromCharCode(97,95,50,50,95,99,117,114,114,101,110,116,108,121,0),798]]);
          let anytimeq = 0;
         stringP.push(anytimeq / (Math.max(combineY.size, 4)));
         sportsy.set(`${sportsy.size}`, sportsy.size);
         anytimeq <<= Math.min(Math.abs(sportsy.size), 3);
      if ((moonj.length | 5) <= 3 || 5 <= (moonj.length | 5)) {
          let plusX = 1.0;
          let favicono = String.fromCharCode(109,95,51,95,115,99,114,111,108,108,105,110,103,0);
          let fileW = 5.0;
          let gemfileW = false;
          let cast8 = 1.0;
         moonj = `${stringP.length + 1}`;
         plusX += 1 + parseInt(`${cast8}`);
         favicono += `${parseInt(`${fileW}`) << (Math.min(4, Math.abs(2)))}`;
         fileW *= parseInt(`${plusX}`) ^ parseInt(`${cast8}`);
         gemfileW = favicono == String.fromCharCode(110,0);
      }
      for (let u = 0; u < 3; u++) {
         castF = [parseInt(`${suggestion0}`) / (Math.max(combineY.size, 5))];
      }
       let o_locko: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,108,101,97,114,95,107,95,56,54,0),false ], [String.fromCharCode(105,95,55,50,95,105,110,99,114,98,108,111,98,0),true ], [String.fromCharCode(104,101,118,109,97,115,107,95,97,95,53,56,0),false ]]);
       let zhengpianO: Map<any, any> = new Map([[String.fromCharCode(105,110,99,111,114,114,101,99,116,95,107,95,49,55,0),793], [String.fromCharCode(102,95,56,54,95,115,101,108,101,99,116,111,114,0),831], [String.fromCharCode(100,97,118,115,95,50,95,54,52,0),832]]);
         zhengpianO = new Map([[`${zhengpianO.size}`, 1 * zhengpianO.size]]);
      if ((stringP.length & 3) >= 1 || 5 >= (3 & stringP.length)) {
         stringP.push(3 ^ parseInt(`${suggestion0}`));
      }
         suggestion0 *= parseFloat(`${o_locko.size + 3}`);
         combineY.set(`${castF.length}`, combineY.size << (Math.min(Math.abs(3), 1)));
         moonj = "3";
      if (!Array.from(combineY.keys()).includes(`${o_locko.size}`)) {
         combineY.set(`${stringP.length}`, 3 >> (Math.min(4, Math.abs(zhengpianO.size))));
      }
      if (Array.from(combineY.values()).includes(zhengpianO.size)) {
         combineY.set(moonj, stringP.length << (Math.min(Math.abs(2), 5)));
      }
          let reducerr = 1.0;
         stringP = [combineY.size];
         reducerr *= parseFloat(`${parseInt(`${reducerr}`)}`);
      for (let e = 0; e < 1; e++) {
         castF.push(castF.length);
      }
      let combineb = moonj == String.fromCharCode(95,121,109,52,53,109,115,104,105,48,0);
      do {
          let trophym: Array<any> = [509, 963];
          let moduleQ = 3.0;
         moonj += `${1 * trophym.length}`;
         trophym.push(3 % (Math.max(parseInt(`${moduleQ}`), 6)));
         moduleQ += parseInt(`${moduleQ}`);
         if (combineb) {
            break;
         }
      } while (combineb && ((moonj.length / (Math.max(3, 1))) == 1 || (moonj.length / (Math.max(3, 5))) == 3));
      for (let f = 0; f < 3; f++) {
          let router_: Array<any> = [220, 38, 66];
          let orientationC = true;
          let emptyJ = 3.0;
         o_locko = new Map([[`${zhengpianO.size}`, 2 + zhengpianO.size]]);
         router_ = [parseInt(`${emptyJ}`) | router_.length];
         orientationC = router_.includes(emptyJ);
      }
      navigatione = 37.84 <= suggestion0;
   }
   let mbjscommon5 = panglei == String.fromCharCode(120,105,108,120,0);
   do {
      panglei += `${invitew.size | parseInt(`${downloadr}`)}`;
      if (mbjscommon5) {
         break;
      }
   } while (mbjscommon5 && (!submiti.endsWith(panglei)));
      downloadr /= Math.max(5, parseInt(`${submitD}`) ^ 3);
      submitD -= (parseFloat(`${String.fromCharCode(70,0) == submiti ? parseInt(`${fastforwardA}`) : submiti.length}`));
       let native6 = 4;
       let kickC = String.fromCharCode(112,105,116,99,104,95,51,95,55,54,0);
         native6 <<= Math.min(kickC.length, 4);
       let questL = false;
       let benefitV = false;
      while ((native6 + 4) < 3) {
          let userp = String.fromCharCode(100,97,114,107,95,116,95,55,50,0);
          let gradlewf = String.fromCharCode(102,95,49,52,95,99,97,110,99,101,108,0);
          let regengK = String.fromCharCode(113,117,101,117,101,95,113,95,50,56,0);
         native6 |= gradlewf.length / (Math.max(1, 6));
         userp = `${(String.fromCharCode(115,0) == userp ? userp.length : regengK.length)}`;
         gradlewf = `${regengK.length}`;
         break;
      }
      let privacyR = benefitV ? !benefitV : benefitV;
      do {
         benefitV = (native6 | kickC.length) >= 66;
         if (privacyR) {
            break;
         }
      } while ((kickC.startsWith(`${benefitV}`)) && privacyR);
      if ((native6 / (Math.max(5, 7))) == 3) {
          let splashA: Array<any> = [587, 365];
         native6 %= Math.max(4, 1);
         splashA = [splashA.length * 1];
      }
         benefitV = (78 > (kickC.length >> (Math.min(4, Math.abs((questL ? 78 : kickC.length))))));
      navigationz = !navigationz;
   while (pingo.length > 2 || navigatione) {
      navigatione = tailf;
      break;
   }
      navigationz = !tailf && invitew.size > 64;
   while (pingo.length == 1) {
      pingo = `${pingo.length | 1}`;
      break;
   }
   let time__1 = downloadr <= 7153497.0;
   do {
       let hejiH: Map<any, any> = new Map([[String.fromCharCode(102,95,49,52,95,97,112,112,101,114,97,110,99,101,0),String.fromCharCode(120,109,108,115,95,120,95,52,50,0)], [String.fromCharCode(118,95,49,53,95,117,110,119,114,105,116,97,98,108,101,0),String.fromCharCode(118,114,101,112,95,116,95,49,48,48,0)]]);
       let smallj: Map<any, any> = new Map([[String.fromCharCode(105,112,99,95,48,95,53,53,0),663], [String.fromCharCode(115,111,99,107,97,100,100,114,95,57,95,52,51,0),894], [String.fromCharCode(109,115,103,95,104,95,55,57,0),646]]);
      let editx = smallj.size >= 5920587;
      do {
         smallj = new Map([[`${hejiH.size}`, hejiH.size]]);
         if (editx) {
            break;
         }
      } while (editx && ((1 << (Math.min(2, Math.abs(smallj.size)))) <= 3));
      if ((smallj.size / (Math.max(6, hejiH.size))) <= 3 && (hejiH.size / (Math.max(smallj.size, 9))) <= 3) {
          let singaporeG = false;
          let awayh = String.fromCharCode(99,112,112,108,105,110,116,95,105,95,49,50,0);
         smallj.set(`${singaporeG}`, ((singaporeG ? 5 : 2) / (Math.max(hejiH.size, 3))));
         awayh += `${awayh.length}`;
      }
      let mbnatived = smallj.size <= 6219646;
      do {
         smallj = new Map([[`${smallj.size}`, hejiH.size / (Math.max(2, smallj.size))]]);
         if (mbnatived) {
            break;
         }
      } while (mbnatived && (Array.from(smallj.keys()).includes(`${hejiH.size}`)));
         hejiH.set(`${hejiH.size}`, 1 & hejiH.size);
      for (let v = 0; v < 3; v++) {
          let mbbidi = String.fromCharCode(109,95,53,57,95,116,116,116,0);
          let blackd = String.fromCharCode(111,115,116,114,101,97,109,95,106,95,52,51,0);
         smallj.set(`${hejiH.size}`, smallj.size);
         mbbidi = `${blackd.length}`;
         blackd += `${blackd.length % 2}`;
      }
      while (!Array.from(smallj.keys()).includes(`${hejiH.size}`)) {
          let configureb = 0;
          let promotionW = 0.0;
          let constantsi = false;
          let showI = 5.0;
          let chartc = 4;
         smallj = new Map([[`${chartc}`, parseInt(`${promotionW}`)]]);
         configureb <<= Math.min(2, Math.abs(configureb));
         promotionW -= ((constantsi ? 3 : 2) / (Math.max(configureb, 1)));
         constantsi = showI == 32.2 && !constantsi;
         showI -= (parseFloat(`${parseInt(`${showI}`) << (Math.min(5, Math.abs((constantsi ? 4 : 4))))}`));
         chartc += (configureb << (Math.min(5, Math.abs((constantsi ? 4 : 5)))));
         break;
      }
      downloadr /= Math.max(invitew.size >> (Math.min(Math.abs(smallj.size), 4)), 3);
      if (time__1) {
         break;
      }
   } while (time__1 && (2 > pingo.length));
   if (navigationz) {
       let goal6 = 2.0;
       let hooksq = String.fromCharCode(115,95,53,51,95,100,101,112,114,101,99,97,116,105,111,110,0);
       let suggestion3: Map<any, any> = new Map([[String.fromCharCode(119,95,56,48,95,114,101,106,101,99,116,101,100,0),926], [String.fromCharCode(120,95,51,51,95,115,119,105,114,108,0),718], [String.fromCharCode(122,95,54,49,95,101,114,114,111,114,118,0),152]]);
       let langd: Map<any, any> = new Map([[String.fromCharCode(103,95,55,49,95,117,108,111,110,103,0),String.fromCharCode(102,112,115,95,115,95,57,56,0)], [String.fromCharCode(104,95,54,50,95,118,112,111,105,110,116,0),String.fromCharCode(108,115,112,114,95,114,95,55,57,0)]]);
       let mbnativeadvancedo: Map<any, any> = new Map([[String.fromCharCode(98,95,57,57,95,99,104,97,110,103,101,0),false ], [String.fromCharCode(111,100,105,110,103,95,56,95,49,0),true ]]);
          let episodes4 = 1;
         hooksq = `${hooksq.length}`;
         episodes4 *= episodes4;
      if (langd.get(`${suggestion3.size}`) != null) {
         langd.set(`${goal6}`, 3 * parseInt(`${goal6}`));
      }
      while ((mbnativeadvancedo.size << (Math.min(Math.abs(1), 3))) > 5) {
         goal6 -= parseFloat(`${langd.size * 3}`);
         break;
      }
      for (let c = 0; c < 1; c++) {
         langd = new Map([[`${mbnativeadvancedo.size}`, mbnativeadvancedo.size & parseInt(`${goal6}`)]]);
      }
      while (mbnativeadvancedo.size > parseInt(`${goal6}`)) {
          let overlay9 = 5.0;
          let pointi = String.fromCharCode(103,101,110,97,110,110,95,113,95,57,57,0);
          let mailp = String.fromCharCode(118,95,49,95,100,105,97,109,101,116,101,114,0);
         goal6 /= Math.max((parseFloat(`${String.fromCharCode(106,0) == hooksq ? hooksq.length : mbnativeadvancedo.size}`)), 1);
         overlay9 /= Math.max(1, parseFloat(`${mailp.length}`));
         pointi = `${(mailp == String.fromCharCode(77,0) ? pointi.length : mailp.length)}`;
         break;
      }
          let twitter7 = 4.0;
         langd.set(`${goal6}`, mbnativeadvancedo.size);
         twitter7 -= parseInt(`${twitter7}`) << (Math.min(2, Math.abs(parseInt(`${twitter7}`))));
       let package_w2 = String.fromCharCode(114,97,116,101,115,95,100,95,52,57,0);
         hooksq = `${(hooksq == String.fromCharCode(78,0) ? suggestion3.size : hooksq.length)}`;
      navigatione = String.fromCharCode(73,0) == hooksq && submitD > 61.49;
   }
      downloadr *= (parseInt(`${fastforwardA}`) + (navigationz ? 1 : 2));
   if (pingo.startsWith(`${tailf}`)) {
       let analyticc = String.fromCharCode(102,95,55,48,95,115,108,105,99,101,97,110,103,108,101,0);
      let formj = analyticc.length >= 6666896;
      do {
          let episodeZ = false;
          let subsn = String.fromCharCode(107,95,57,51,95,117,115,114,115,99,116,112,0);
          let tumbnailQ = String.fromCharCode(110,95,57,52,95,115,101,101,107,104,101,97,100,0);
          let refreshW: Array<any> = [950, 886];
         analyticc += `${((episodeZ ? 3 : 3) & 2)}`;
         episodeZ = 92 <= tumbnailQ.length;
         subsn = `${tumbnailQ.length % 3}`;
         refreshW = [1 - refreshW.length];
         if (formj) {
            break;
         }
      } while (formj && (analyticc.startsWith(`${analyticc.length}`)));
      let megaphonev = 9383024 >= analyticc.length;
      do {
         analyticc += `${analyticc.length >> (Math.min(Math.abs(3), 5))}`;
         if (megaphonev) {
            break;
         }
      } while (megaphonev && (3 < analyticc.length));
         analyticc += `${analyticc.length & 2}`;
      tailf = panglei.length == 64;
   }
      navigationz = downloadr >= 18.32 || navigationz;
      panglei += `${(submiti.length - (tailf ? 1 : 1))}`;
   while (3 < pingo.length || !tailf) {
      pingo += `${(pingo == String.fromCharCode(114,0) ? pingo.length : panglei.length)}`;
      break;
   }

    setVideoReadyIos(true)

   let philippinesP = navigationz ? !navigationz : navigationz;
   do {
       let gradlewL = 1.0;
       let orangee = String.fromCharCode(98,114,101,97,107,115,95,57,95,51,50,0);
          let catagoryo = String.fromCharCode(112,95,56,95,115,101,110,100,109,115,103,0);
          let morei = 2;
         gradlewL *= 2 / (Math.max(6, parseInt(`${gradlewL}`)));
         catagoryo += `${2 << (Math.min(2, Math.abs(morei)))}`;
         morei &= 2;
      let l_title7 = gradlewL >= 8122447.0;
      do {
         gradlewL /= Math.max(2, parseInt(`${gradlewL}`) >> (Math.min(Math.abs(2), 2)));
         if (l_title7) {
            break;
         }
      } while (((4 << (Math.min(1, orangee.length))) < 3 || (orangee.length * parseInt(`${gradlewL}`)) < 4) && l_title7);
         gradlewL += parseInt(`${gradlewL}`) << (Math.min(Math.abs(1), 3));
         gradlewL *= parseInt(`${gradlewL}`);
      if ((gradlewL + orangee.length) <= 2.24 && 2.10 <= (gradlewL + 2.24)) {
         gradlewL -= 3;
      }
          let injuryL = 2.0;
         gradlewL += parseInt(`${injuryL}`);
      navigationz = navigatione;
      if (philippinesP) {
         break;
      }
   } while (philippinesP && (navigationz));
   while (!panglei.includes(`${invitew.size}`)) {
      invitew.set(`${panglei}`, panglei.length - 2);
      break;
   }
   while (fastforwardA <= parseFloat(`${submiti.length}`)) {
      submiti = `${submiti.length}`;
      break;
   }
       let singaporeM = false;
       let agreement7: Array<any> = [String.fromCharCode(99,117,109,117,108,97,116,105,118,101,95,122,95,57,56,0), String.fromCharCode(99,95,57,53,95,99,97,118,101,97,116,0)];
         singaporeM = singaporeM && agreement7.length < 26;
         agreement7 = [1];
         agreement7.push((1 & (singaporeM ? 5 : 2)));
      while (2 > agreement7.length) {
         singaporeM = agreement7.includes(singaporeM);
         break;
      }
         agreement7.push((1 - (singaporeM ? 1 : 4)));
         agreement7.push(((singaporeM ? 2 : 5) >> (Math.min(Math.abs(3), 2))));
      pingo = "2";
   let panglex = tailf ? !tailf : tailf;
   do {
      tailf = 5.93 >= downloadr;
      if (panglex) {
         break;
      }
   } while ((tailf) && panglex);
   for (let f = 0; f < 3; f++) {
       let contextk = true;
       let klevinR = 3.0;
       let login0: Array<any> = [String.fromCharCode(120,118,109,99,95,118,95,53,48,0), String.fromCharCode(101,110,100,120,95,116,95,54,48,0), String.fromCharCode(103,97,116,101,95,114,95,53,52,0)];
         klevinR += parseFloat(`${login0.length * parseInt(`${klevinR}`)}`);
      for (let z = 0; z < 1; z++) {
         login0.push(1 << (Math.min(4, login0.length)));
      }
       let macauA = 5.0;
       let sortU = 1.0;
          let binga = 2.0;
          let episodeS: Map<any, any> = new Map([[String.fromCharCode(100,95,53,57,95,117,99,109,112,0),464], [String.fromCharCode(111,95,57,95,110,100,111,116,115,0),133]]);
         macauA /= Math.max(2, parseFloat(`${2 | parseInt(`${sortU}`)}`));
         binga += parseFloat(`${parseInt(`${binga}`) % 1}`);
         episodeS.set(`${binga}`, parseInt(`${binga}`));
      let controli = sortU >= 5736650.0;
      do {
         sortU *= parseFloat(`${parseInt(`${sortU}`) / 2}`);
         if (controli) {
            break;
         }
      } while (controli && (4.88 < macauA));
      if (klevinR > 2.32) {
          let send8 = String.fromCharCode(112,108,97,110,101,100,95,118,95,52,52,0);
          let roundn = 3.0;
          let showZ = 4;
          let ewardedV = String.fromCharCode(117,110,105,116,121,95,117,95,56,52,0);
         klevinR *= parseFloat(`${login0.length << (Math.min(Math.abs(1), 3))}`);
         send8 = `${ewardedV.length}`;
         roundn /= Math.max(3, parseFloat(`${ewardedV.length - 2}`));
         showZ -= send8.length;
      }
         contextk = macauA < 64.25 && 45 < login0.length;
      if (login0.length > 3) {
         login0 = [parseInt(`${klevinR}`)];
      }
          let privacyE = 1.0;
         login0.push(parseInt(`${sortU}`));
         privacyE -= parseInt(`${privacyE}`) / (Math.max(2, parseInt(`${privacyE}`)));
      downloadr += 3;
   }
   if (tailf || navigatione) {
      navigatione = invitew.size > 25 || navigatione;
   }
       let desc8 = String.fromCharCode(104,95,50,55,95,103,97,108,108,101,114,121,0);
       let pointI = 2.0;
      while ((2.70 + pointI) == 3.26 || (desc8.length + parseInt(`${pointI}`)) == 1) {
          let entry6 = 4.0;
          let langD = 1.0;
          let modity9: Array<any> = [920, 630, 787];
          let filex = String.fromCharCode(98,108,111,99,107,100,95,102,95,55,51,0);
         pointI *= parseInt(`${entry6}`);
         langD /= Math.max(1, (parseFloat(`${String.fromCharCode(89,0) == filex ? filex.length : modity9.length}`)));
         modity9.push(parseInt(`${langD}`) ^ modity9.length);
         break;
      }
      if ((pointI - desc8.length) <= 5.13 || 4 <= (2 - parseInt(`${pointI}`))) {
         desc8 = `${desc8.length | parseInt(`${pointI}`)}`;
      }
          let fullz: Array<any> = [600, 48];
          let detailsN = String.fromCharCode(115,95,52,49,95,111,117,116,113,0);
         desc8 += `${detailsN.length ^ desc8.length}`;
         fullz = [fullz.length | fullz.length];
         detailsN = `${fullz.length}`;
      if (pointI == 5.92) {
         desc8 += `${desc8.length | parseInt(`${pointI}`)}`;
      }
      for (let m = 0; m < 2; m++) {
          let ying5 = String.fromCharCode(102,95,55,56,95,112,103,109,120,0);
          let moviesH = String.fromCharCode(104,95,50,50,95,108,101,102,116,109,111,115,116,0);
          let sigmobY = 2.0;
          let untick1: Map<any, any> = new Map([[String.fromCharCode(113,95,55,95,115,111,99,107,101,116,0),869], [String.fromCharCode(97,95,57,52,95,112,114,101,102,101,114,0),60], [String.fromCharCode(98,105,116,109,97,112,95,121,95,55,50,0),903]]);
          let weibo6 = 3.0;
         desc8 += `${2 + parseInt(`${pointI}`)}`;
         ying5 += `${untick1.size ^ 3}`;
         moviesH += `${parseInt(`${sigmobY}`)}`;
         sigmobY *= parseInt(`${weibo6}`) % (Math.max(untick1.size, 1));
         weibo6 += parseFloat(`${2}`);
      }
          let animationE = String.fromCharCode(104,95,57,51,95,108,105,98,115,97,109,112,108,101,0);
          let taiwanW = 0.0;
          let dragw = false;
         pointI += animationE.length;
         animationE = `${parseInt(`${taiwanW}`) & 1}`;
         taiwanW *= (parseFloat(`${parseInt(`${taiwanW}`) ^ (dragw ? 5 : 2)}`));
         dragw = !dragw;
      submiti = `${2 ^ parseInt(`${pointI}`)}`;
   if ((fastforwardA + 4.97) >= 2.99) {
      fastforwardA *= parseFloat(`${submiti.length % (Math.max(2, 10))}`);
   }
   while (tailf || navigatione) {
      navigatione = !tailf;
      break;
   }
   for (let z = 0; z < 2; z++) {
      tailf = navigatione;
   }
   if (5 < pingo.length) {
      pingo += `${((navigationz ? 1 : 1) / (Math.max(parseInt(`${downloadr}`), 5)))}`;
   }
   if (3.73 >= (fastforwardA + 3.29) && (3.29 + fastforwardA) >= 4.42) {
       let searchg = 3.0;
       let areaA = String.fromCharCode(116,95,49,56,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0);
       let foundF: Map<any, any> = new Map([[String.fromCharCode(99,108,105,99,107,115,95,53,95,52,55,0),String.fromCharCode(106,95,57,54,95,102,105,108,108,101,114,0)], [String.fromCharCode(121,95,54,57,95,99,111,110,116,114,105,98,0),String.fromCharCode(101,108,101,109,115,95,116,95,55,56,0)], [String.fromCharCode(116,111,112,105,99,97,108,95,110,95,55,0),String.fromCharCode(98,95,55,56,95,115,101,97,108,97,110,116,0)]]);
       let screen_: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,112,111,114,116,95,121,95,53,0),576], [String.fromCharCode(106,95,55,95,114,95,51,51,0),767]]);
       let long__p: Map<any, any> = new Map([[String.fromCharCode(118,95,52,55,95,119,114,111,116,101,0),false ], [String.fromCharCode(98,95,57,49,95,100,101,115,112,105,108,108,0),true ], [String.fromCharCode(116,114,105,110,103,95,122,95,51,52,0),false ]]);
       let tooltips2: Map<any, any> = new Map([[String.fromCharCode(102,95,56,52,95,116,111,109,99,114,121,112,116,0),820], [String.fromCharCode(119,99,104,97,114,95,56,95,54,48,0),66], [String.fromCharCode(109,111,115,97,105,99,95,121,95,56,54,0),70]]);
      for (let j = 0; j < 3; j++) {
         long__p = new Map([[areaA, 1]]);
      }
         searchg /= Math.max(1, 2 + long__p.size);
          let traminid: Array<any> = [462, 967];
          let redirectb = 2;
         foundF = new Map([[`${long__p.size}`, long__p.size]]);
         traminid.push(traminid.length);
         redirectb *= traminid.length;
          let internetv = 5.0;
         areaA += `${long__p.size << (Math.min(Math.abs(foundF.size), 4))}`;
         internetv += parseInt(`${internetv}`);
      while ((5 * long__p.size) == 4 || 1 == (long__p.size * 5)) {
         long__p = new Map([[`${long__p.size}`, 1 / (Math.max(10, foundF.size))]]);
         break;
      }
      if ((areaA.length << (Math.min(Math.abs(3), 3))) > 1) {
         areaA = `${1 + long__p.size}`;
      }
         screen_ = new Map([[`${searchg}`, parseInt(`${searchg}`) % 3]]);
       let videojs7 = 2;
      while ((videojs7 * parseInt(`${searchg}`)) < 4 || 1 < (4 / (Math.max(1, videojs7)))) {
         videojs7 &= 3;
         break;
      }
         long__p = new Map([[`${foundF.size}`, screen_.size * 2]]);
         searchg /= Math.max(2, parseInt(`${searchg}`) | screen_.size);
         foundF.set(`${foundF.size}`, foundF.size - screen_.size);
         areaA = "2";
          let verticall = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,100,95,54,0);
          let langkey1 = 1;
          let tail_: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,120,105,110,103,95,119,95,52,0),false ], [String.fromCharCode(105,115,115,117,101,115,95,104,95,51,51,0),true ]]);
         screen_.set(`${tail_.size}`, foundF.size);
         verticall += `${verticall.length >> (Math.min(3, Math.abs(langkey1)))}`;
         langkey1 &= langkey1 / 2;
         tail_.set(`${langkey1}`, 2);
      fastforwardA += (parseFloat(`${String.fromCharCode(78,0) == submiti ? panglei.length : submiti.length}`));
   }
      submiti += `${(parseInt(`${submitD}`) * (tailf ? 4 : 2))}`;
      navigationz = !navigationz;
      pingo += `${submiti.length}`;
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
