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
import Video, { OnProgressData, wawaImage } from 'react-native-video';
import PlayIcon from '@static/images/librrcWhiteanimationlive.svg';
import PauseIcon from '@static/images/refreshStringsLibjsi.svg';
import PlayBoDanIcon from '@static/images/inouttargetredRedirect.svg';
import PlayZhengPianIcon from '@static/images/scheduleJingdong.svg';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import HejiIcon from '@static/images/turnFlyerIconclosewhitebg.svg';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { showAdultModeVip } from '@redux/actions/wawa_related';
import { playVod, viewPlaylistDetails } from '@redux/actions/wawa_indicator';
import { screenModel } from '@type/wawa_rules';
import { ADULT_MODE_PREVIEW_DURATION, DOWNLOAD_WATCH_ANYTIME } from '@utility/wawa_iconpointscore';
import FastImage from '../../common/wawa_iconarrowrightblack';
import RedirectButton from './wawa_agreement_button';
import DescriptionBar from './wawa_iconfeedback_fullscreenmax';
import HejiButton from './wawa_statistics_button';
import { addIdToCache } from '../../../utils/wawa_notificationfillempty_models';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';

interface wawaAwayShow {
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

const videoBufferGif = require('@static/images/libjsijniprofilerRncore.gif')

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
}: wawaAwayShow) {
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
  const videoRef = useRef<wawaImage>(null);
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

  const userState = useSelector<wawaPhoneControls>('userReducer');

  const isVip = wawaLibglog.fakeIsVip(userState.user);
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
       let issub_: Map<any, any> = new Map([[String.fromCharCode(115,116,111,114,101,0),String.fromCharCode(117,110,115,99,97,108,101,100,0)], [String.fromCharCode(110,101,119,114,111,119,0),String.fromCharCode(109,101,109,98,101,114,115,0)], [String.fromCharCode(102,105,108,101,102,117,110,99,0),String.fromCharCode(115,117,98,115,101,115,115,105,111,110,0)]]);
    let historyx = String.fromCharCode(98,117,98,98,108,101,0);
    let profileframeD = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,99,101,0);
    let playercommonJ = 0;
    let iconplayz: Map<any, any> = new Map([[String.fromCharCode(100,108,116,97,0),450], [String.fromCharCode(102,114,111,110,116,0),920], [String.fromCharCode(97,115,110,0),121]]);
    let frame_ylM = String.fromCharCode(105,116,101,114,97,116,105,111,110,115,0);
    let whistleorangez = 1;
    let private__id = 0.0;
    let subin4 = String.fromCharCode(101,114,114,108,111,103,0);
    let mailO: Array<any> = [968, 294];
   let mountingh = String.fromCharCode(106,117,104,99,122,100,0) == subin4;
   do {
      subin4 = `${frame_ylM.length / 3}`;
      if (mountingh) {
         break;
      }
   } while (((private__id * parseFloat(`${subin4.length}`)) <= 4.54) && mountingh);
   while (5 <= (frame_ylM.length * parseInt(`${private__id}`))) {
      private__id += parseFloat(`${frame_ylM.length | iconplayz.size}`);
      break;
   }
      playercommonJ >>= Math.min(1, historyx.length);
   for (let q = 0; q < 1; q++) {
      playercommonJ >>= Math.min(Math.abs(1 << (Math.min(3, subin4.length))), 5);
   }
   for (let r = 0; r < 2; r++) {
      subin4 = `${historyx.length * 3}`;
   }
   for (let v = 0; v < 2; v++) {
      whistleorangez *= subin4.length;
   }
   if (!frame_ylM.startsWith(`${private__id}`)) {
      frame_ylM = `${parseInt(`${private__id}`)}`;
   }
   if ((5 * playercommonJ) < 2) {
      issub_ = new Map([[`${whistleorangez}`, 2]]);
   }
   for (let u = 0; u < 3; u++) {
       let shareH = 2;
       let contextk = 5.0;
      if ((shareH >> (Math.min(Math.abs(5), 5))) >= 5) {
         contextk /= Math.max(5, shareH);
      }
      while (3.18 < (contextk - shareH) || 4.93 < (contextk - 3.18)) {
         shareH *= shareH;
         break;
      }
          let mbbanner0 = String.fromCharCode(109,111,100,109,0);
         contextk *= 2 / (Math.max(5, shareH));
         mbbanner0 = `${mbbanner0.length}`;
      for (let q = 0; q < 1; q++) {
         shareH /= Math.max(1, shareH & parseInt(`${contextk}`));
      }
          let iconbellt = String.fromCharCode(98,101,105,110,103,0);
         shareH ^= iconbellt.length % (Math.max(10, parseInt(`${contextk}`)));
       let package_7p = String.fromCharCode(111,102,111,114,109,97,116,0);
      frame_ylM += `${2 >> (Math.min(1, Math.abs(issub_.size)))}`;
   }
      playercommonJ *= mailO.length;
   while (Array.from(iconplayz.keys()).includes(`${mailO.length}`)) {
      mailO.push(iconplayz.size * subin4.length);
      break;
   }
   for (let j = 0; j < 2; j++) {
      playercommonJ <<= Math.min(Math.abs(frame_ylM.length / (Math.max(subin4.length, 8))), 5);
   }
   while (4 > (playercommonJ * profileframeD.length) && (4 * profileframeD.length) > 4) {
      playercommonJ &= mailO.length;
      break;
   }
   while ((playercommonJ ^ 4) <= 5 || (playercommonJ - 4) <= 5) {
      playercommonJ ^= 1;
      break;
   }
   while (issub_.get(`${mailO.length}`) == null) {
       let libswscalex = String.fromCharCode(108,111,111,107,115,0);
       let gifgoalT = false;
      if (gifgoalT || 2 < libswscalex.length) {
         libswscalex = `${(String.fromCharCode(53,0) == libswscalex ? libswscalex.length : (gifgoalT ? 5 : 4))}`;
      }
      for (let j = 0; j < 2; j++) {
         libswscalex = "2";
      }
      if (4 == libswscalex.length) {
         libswscalex += `${((gifgoalT ? 1 : 1))}`;
      }
      for (let q = 0; q < 3; q++) {
         gifgoalT = !gifgoalT;
      }
      let backiconmask8 = gifgoalT ? !gifgoalT : gifgoalT;
      do {
         gifgoalT = (84 <= (libswscalex.length & (!gifgoalT ? 84 : libswscalex.length)));
         if (backiconmask8) {
            break;
         }
      } while ((1 >= libswscalex.length && !gifgoalT) && backiconmask8);
      let alertq = 9357172 <= libswscalex.length;
      do {
          let submitI = 1.0;
         libswscalex += `${((gifgoalT ? 3 : 1) + parseInt(`${submitI}`))}`;
         if (alertq) {
            break;
         }
      } while (alertq && (3 <= libswscalex.length));
      mailO = [historyx.length];
      break;
   }
       let bing3 = String.fromCharCode(115,101,110,100,109,115,103,0);
       let textlayoutmanagerL = 5.0;
       let iconbellactivev = 1.0;
      let feedbackA = 8196878.0 <= textlayoutmanagerL;
      do {
          let hooksd: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,120,0),784], [String.fromCharCode(100,97,116,97,100,105,114,0),795]]);
          let classes9 = String.fromCharCode(100,120,110,100,99,0);
          let colorsC = String.fromCharCode(97,108,108,112,97,115,115,0);
          let libavdeviceI = 4.0;
         textlayoutmanagerL += parseFloat(`${3}`);
         hooksd.set(colorsC, 1);
         classes9 += `${hooksd.size}`;
         colorsC = `${hooksd.size}`;
         libavdeviceI += (parseFloat(`${String.fromCharCode(72,0) == classes9 ? classes9.length : hooksd.size}`));
         if (feedbackA) {
            break;
         }
      } while (feedbackA && (4.85 <= (4.43 + textlayoutmanagerL)));
      while ((textlayoutmanagerL * 4.7) >= 2.95 && (bing3.length * parseInt(`${textlayoutmanagerL}`)) >= 1) {
         textlayoutmanagerL -= parseFloat(`${1 - parseInt(`${iconbellactivev}`)}`);
         break;
      }
      profileframeD += `${parseInt(`${private__id}`) / (Math.max(iconplayz.size, 4))}`;
   for (let g = 0; g < 1; g++) {
      profileframeD = `${mailO.length >> (Math.min(4, Math.abs(parseInt(`${private__id}`))))}`;
   }
   if (subin4 != profileframeD) {
      profileframeD += `${issub_.size}`;
   }
      iconplayz.set(profileframeD, profileframeD.length & 3);
      whistleorangez >>= Math.min(Math.abs(parseInt(`${private__id}`)), 2);
   if (3 >= (parseInt(`${private__id}`) * 2) || (2 ^ frame_ylM.length) >= 5) {
      frame_ylM = "2";
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
       let gdtadvW = 1.0;
    let notificationfilled1 = 0.0;
    let volumeX = String.fromCharCode(98,117,116,116,111,110,0);
    let dangerv = 5.0;
    let shielddone8 = 2;
    let buildn = String.fromCharCode(108,104,115,0);
    let successT: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,118,97,108,0),282], [String.fromCharCode(101,110,116,114,111,112,121,109,118,0),256]]);
    let macau5: Array<any> = [917, 609, 3];
    let smallbrightnessu = true;
    let jingdongt: Array<any> = [726, 777];
    let selected8 = String.fromCharCode(102,114,97,109,101,115,0);
    let goalZ = 1;
      macau5 = [buildn.length / (Math.max(9, successT.size))];
   if (dangerv >= 2.75 || 1.33 >= (dangerv / 2.75)) {
      smallbrightnessu = (notificationfilled1 - shielddone8) <= 64;
   }
   if (gdtadvW < parseFloat(`${macau5.length}`)) {
      gdtadvW += parseFloat(`${parseInt(`${notificationfilled1}`)}`);
   }
   let homeplayerl = 5815228 >= shielddone8;
   do {
      shielddone8 += 3;
      if (homeplayerl) {
         break;
      }
   } while (((notificationfilled1 - shielddone8) > 1.77) && homeplayerl);
       let gesturez = 4.0;
       let privatechatbgj = true;
       let vignettew = 0.0;
         gesturez /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${vignettew}`)), 5)), 1);
         gesturez -= parseInt(`${gesturez}`) + 1;
      while (!privatechatbgj) {
         privatechatbgj = !privatechatbgj || gesturez >= 69.7;
         break;
      }
       let sheetr = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,0);
         gesturez -= parseInt(`${vignettew}`) >> (Math.min(Math.abs(1), 4));
      let pointH = privatechatbgj ? !privatechatbgj : privatechatbgj;
      do {
         privatechatbgj = 52.5 == (gesturez - vignettew);
         if (pointH) {
            break;
         }
      } while (pointH && (2.98 == gesturez));
          let libavdeviceY = 2.0;
          let stylesx = String.fromCharCode(115,112,101,99,0);
          let corep = String.fromCharCode(98,121,116,101,0);
         privatechatbgj = vignettew <= parseFloat(`${sheetr.length}`);
         libavdeviceY *= 1;
         stylesx = "3";
         corep = `${(String.fromCharCode(90,0) == stylesx ? parseInt(`${libavdeviceY}`) : stylesx.length)}`;
      for (let c = 0; c < 2; c++) {
         vignettew *= parseFloat(`${2 % (Math.max(parseInt(`${gesturez}`), 4))}`);
      }
      while (1.46 > (vignettew + 3.71) || 3.71 > (gesturez + vignettew)) {
          let homeiconP = 1.0;
          let buttonp: Array<any> = [639, 989];
          let abidetectA = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,0);
          let profilepic3 = 5.0;
         gesturez /= Math.max(1, 4);
         homeiconP /= Math.max(1, abidetectA.length * parseInt(`${profilepic3}`));
         buttonp.push(parseInt(`${profilepic3}`));
         abidetectA += `${(abidetectA == String.fromCharCode(106,0) ? abidetectA.length : parseInt(`${homeiconP}`))}`;
         break;
      }
      smallbrightnessu = 8.54 <= dangerv;
      notificationfilled1 += parseInt(`${gdtadvW}`) & 1;
   while (dangerv < gdtadvW) {
       let androidu = String.fromCharCode(104,97,110,103,0);
      for (let f = 0; f < 1; f++) {
         androidu = `${androidu.length & 3}`;
      }
         androidu += `${androidu.length % (Math.max(8, androidu.length))}`;
      while (androidu.length <= androidu.length) {
          let s_unlockt = 0.0;
          let iconwatchJ = 1.0;
          let directU = String.fromCharCode(100,105,97,108,105,110,103,0);
          let indexz = String.fromCharCode(116,119,111,119,97,121,0);
          let uimanagerP = 2.0;
         androidu += `${androidu.length}`;
         s_unlockt /= Math.max(parseFloat(`${parseInt(`${uimanagerP}`)}`), 5);
         iconwatchJ -= 2 ^ parseInt(`${uimanagerP}`);
         directU = `${parseInt(`${iconwatchJ}`) + 2}`;
         indexz += "3";
         break;
      }
      gdtadvW += (parseFloat(`${(smallbrightnessu ? 2 : 5) + androidu.length}`));
      break;
   }
   let redirectO = smallbrightnessu ? !smallbrightnessu : smallbrightnessu;
   do {
      smallbrightnessu = 52 == successT.size;
      if (redirectO) {
         break;
      }
   } while (((macau5.length * 1) == 3 && macau5.length == 1) && redirectO);
   for (let k = 0; k < 1; k++) {
      successT = new Map([[`${shielddone8}`, shielddone8 & 1]]);
   }
      jingdongt.push((volumeX == String.fromCharCode(112,0) ? successT.size : volumeX.length));

    clearTimeout(timer.current);

      buildn = `${parseInt(`${dangerv}`)}`;
   while (1 == shielddone8) {
       let catagoryd = String.fromCharCode(99,117,101,115,0);
       let assistJ = String.fromCharCode(115,99,105,105,0);
       let notificationfilledZ = String.fromCharCode(115,117,112,101,114,110,111,100,101,115,0);
       let analyticB: Array<any> = [330, 305, 682];
      for (let c = 0; c < 1; c++) {
         assistJ = `${assistJ.length}`;
      }
       let blackV = true;
       let ajaxd = false;
      while (analyticB.length < 5) {
         notificationfilledZ = `${((blackV ? 5 : 2))}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
         assistJ = `${((ajaxd ? 3 : 2) % (Math.max(analyticB.length, 5)))}`;
      }
      while (3 >= catagoryd.length && ajaxd) {
          let twitterg = 3.0;
          let giftC = true;
          let proxyZ: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,119,111,114,100,0),908], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,0),930]]);
         ajaxd = !ajaxd || 62.27 >= twitterg;
         twitterg *= parseFloat(`${3}`);
         giftC = (((giftC ? proxyZ.size : 58) / (Math.max(proxyZ.size, 6))) == 43);
         break;
      }
         assistJ = `${(assistJ == String.fromCharCode(100,0) ? assistJ.length : catagoryd.length)}`;
       let expiredH = String.fromCharCode(112,97,115,119,111,114,100,0);
         ajaxd = !blackV && catagoryd.length > 77;
          let iconmoreg = false;
          let libswscaleK = String.fromCharCode(114,101,100,117,99,116,105,111,110,115,0);
          let libcxxcomponents8 = false;
         expiredH = `${((iconmoreg ? 3 : 5) | 3)}`;
         iconmoreg = !libcxxcomponents8 || libswscaleK.length > 29;
         libswscaleK = `${libswscaleK.length}`;
         analyticB.push(((blackV ? 2 : 1)));
      let singlev = 9379362 <= expiredH.length;
      do {
          let feedbackL = String.fromCharCode(105,115,112,111,115,97,98,108,101,0);
          let moonS: Map<any, any> = new Map([[String.fromCharCode(118,112,108,112,102,0),838], [String.fromCharCode(98,111,120,0),387]]);
          let usernameR: Array<any> = [String.fromCharCode(116,117,110,110,101,108,105,110,103,0), String.fromCharCode(112,101,114,115,111,110,115,0)];
          let score_ = 1;
         expiredH = `${feedbackL.length}`;
         feedbackL += `${usernameR.length * 1}`;
         moonS = new Map([[`${moonS.size}`, usernameR.length]]);
         score_ &= 2 - usernameR.length;
         if (singlev) {
            break;
         }
      } while (singlev && (2 < assistJ.length));
         catagoryd += `${catagoryd.length}`;
      dangerv -= parseFloat(`${parseInt(`${notificationfilled1}`) >> (Math.min(Math.abs(3), 2))}`);
      break;
   }
       let templateprocessor_ = 3;
       let libavcodecT = false;
      let bingH = 8042455 <= templateprocessor_;
      do {
         templateprocessor_ |= (templateprocessor_ ^ (libavcodecT ? 4 : 1));
         if (bingH) {
            break;
         }
      } while ((libavcodecT && 1 <= (2 & templateprocessor_)) && bingH);
      let skipZ = libavcodecT ? !libavcodecT : libavcodecT;
      do {
         libavcodecT = 13 > templateprocessor_ && libavcodecT;
         if (skipZ) {
            break;
         }
      } while (((2 / (Math.max(2, templateprocessor_))) < 5) && skipZ);
         libavcodecT = templateprocessor_ <= 35;
          let loadingspinnern: Array<any> = [948, 527, 399];
          let headerg = String.fromCharCode(100,111,119,110,108,111,97,100,115,0);
         templateprocessor_ &= headerg.length;
         loadingspinnern = [3];
         headerg = `${loadingspinnern.length}`;
          let libtanC: Array<any> = [976, 313, 439];
         templateprocessor_ >>= Math.min(4, Math.abs(3));
         libtanC.push(1);
       let light8 = 3.0;
      smallbrightnessu = dangerv < 54.3 && 97 < jingdongt.length;
   if (!smallbrightnessu) {
      shielddone8 += shielddone8 + jingdongt.length;
   }
   for (let l = 0; l < 3; l++) {
      smallbrightnessu = 47 == buildn.length;
   }
   let bodanx = gdtadvW >= 8985251.0;
   do {
      gdtadvW -= parseFloat(`${shielddone8}`);
      if (bodanx) {
         break;
      }
   } while (((macau5.length + 1) <= 1) && bodanx);
   if ((1 % (Math.max(1, successT.size))) < 2) {
       let checkboxL = String.fromCharCode(114,116,112,119,0);
      if (!checkboxL.endsWith(`${checkboxL.length}`)) {
         checkboxL = "2";
      }
      let videovar8 = checkboxL.length <= 9608518;
      do {
         checkboxL += `${checkboxL.length - checkboxL.length}`;
         if (videovar8) {
            break;
         }
      } while (videovar8 && (checkboxL.length < checkboxL.length));
          let photoY = String.fromCharCode(99,104,114,111,109,97,107,101,121,0);
          let abidetecti = 0.0;
         checkboxL = `${(photoY == String.fromCharCode(100,0) ? photoY.length : checkboxL.length)}`;
         abidetecti += parseFloat(`${parseInt(`${abidetecti}`) - parseInt(`${abidetecti}`)}`);
      successT = new Map([[`${notificationfilled1}`, parseInt(`${notificationfilled1}`) << (Math.min(1, Math.abs(2)))]]);
   }
      dangerv += parseFloat(`${1}`);
      smallbrightnessu = successT.size <= 27 || String.fromCharCode(107,0) == buildn;
   while ((1 * volumeX.length) <= 1 || (dangerv + parseFloat(`${volumeX.length}`)) <= 1.97) {
      volumeX = `${(parseInt(`${notificationfilled1}`) * (smallbrightnessu ? 2 : 1))}`;
      break;
   }
    setShowOverlay(true);

      shielddone8 ^= jingdongt.length * 3;
       let downloadingX = String.fromCharCode(108,111,119,98,105,116,115,0);
       let floaterH: Array<any> = [297, 351, 660];
       let rulesN = true;
      for (let q = 0; q < 3; q++) {
          let z_titlea = 0.0;
          let predictionlossV = false;
          let notificationfillemptyY = String.fromCharCode(122,111,111,109,97,98,108,101,0);
         rulesN = (81 == ((!predictionlossV ? 81 : downloadingX.length) >> (Math.min(downloadingX.length, 4))));
         z_titlea /= Math.max(2, parseInt(`${z_titlea}`) & 1);
         predictionlossV = notificationfillemptyY == String.fromCharCode(74,0) && 17.52 <= z_titlea;
         notificationfillemptyY = `${1 - notificationfillemptyY.length}`;
      }
          let arrowrightwithtailn: Map<any, any> = new Map([[String.fromCharCode(101,110,99,104,0),true ], [String.fromCharCode(97,115,115,111,99,0),false ]]);
          let backwhiteM = 3;
          let libtan3 = 1.0;
         downloadingX += "2";
         arrowrightwithtailn = new Map([[`${libtan3}`, backwhiteM >> (Math.min(Math.abs(parseInt(`${libtan3}`)), 4))]]);
         backwhiteM <<= Math.min(4, Math.abs(backwhiteM));
      if (!downloadingX.endsWith(`${rulesN}`)) {
         downloadingX = `${1 % (Math.max(3, downloadingX.length))}`;
      }
          let topice: Array<any> = [709, 435, 628];
          let logouser8 = 5.0;
          let episodet = String.fromCharCode(105,110,116,101,103,101,114,115,0);
         rulesN = downloadingX.length < 4 && !rulesN;
         topice = [episodet.length];
         logouser8 -= parseFloat(`${parseInt(`${logouser8}`)}`);
         episodet = `${parseInt(`${logouser8}`) / 2}`;
      for (let k = 0; k < 3; k++) {
          let defaultfootballbgQ: Map<any, any> = new Map([[String.fromCharCode(115,116,97,109,112,115,0),320], [String.fromCharCode(112,114,111,98,101,0),764], [String.fromCharCode(107,101,121,0),327]]);
          let singaporeg: Array<any> = [604, 492, 212];
         floaterH = [singaporeg.length];
         defaultfootballbgQ.set(`${defaultfootballbgQ.size}`, 3);
         singaporeg.push(defaultfootballbgQ.size - defaultfootballbgQ.size);
      }
       let bridgeh = 2.0;
       let firebase9 = 3.0;
       let headerm = String.fromCharCode(112,114,101,0);
      for (let z = 0; z < 2; z++) {
          let long_ux = String.fromCharCode(109,121,113,114,0);
          let whiteanimationlive9 = String.fromCharCode(97,118,100,101,118,105,99,101,0);
         floaterH.push(long_ux.length);
         long_ux = `${whiteanimationlive9.length | whiteanimationlive9.length}`;
      }
       let taiwanh: Map<any, any> = new Map([[String.fromCharCode(101,110,99,114,121,112,116,105,110,103,0),false ], [String.fromCharCode(100,116,115,0),false ], [String.fromCharCode(114,101,98,97,115,101,0),true ]]);
       let largebrightness7: Map<any, any> = new Map([[String.fromCharCode(109,97,99,101,0),true ], [String.fromCharCode(97,110,97,110,100,97,110,0),false ]]);
      shielddone8 /= Math.max(jingdongt.length, 2);
   if ((1 / (Math.max(10, selected8.length))) == 2 && (jingdongt.length / (Math.max(2, selected8.length))) == 1) {
      jingdongt.push(macau5.length ^ successT.size);
   }
       let shootnogoald = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,0);
       let invitej = String.fromCharCode(101,120,99,101,101,100,0);
       let volumeM = String.fromCharCode(108,111,99,107,99,104,97,105,110,0);
      let settingd = 6983308 >= invitej.length;
      do {
         invitej = `${(volumeM == String.fromCharCode(74,0) ? shootnogoald.length : volumeM.length)}`;
         if (settingd) {
            break;
         }
      } while (settingd && (2 == invitej.length));
         invitej = `${volumeM.length / (Math.max(10, invitej.length))}`;
       let chatbotphotoE: Map<any, any> = new Map([[String.fromCharCode(115,105,122,105,110,103,0),false ], [String.fromCharCode(108,111,99,97,108,0),false ]]);
      for (let d = 0; d < 1; d++) {
         invitej += `${volumeM.length}`;
      }
         chatbotphotoE.set(`${invitej}`, invitej.length);
          let iconarrowrightwhitel = 2;
          let rulesY: Array<any> = [String.fromCharCode(98,105,100,105,114,0), String.fromCharCode(112,97,114,101,110,116,97,103,101,0)];
         volumeM = "2";
         iconarrowrightwhitel -= iconarrowrightwhitel & rulesY.length;
         rulesY = [2];
      if (!volumeM.includes(shootnogoald)) {
         shootnogoald = `${chatbotphotoE.size >> (Math.min(volumeM.length, 3))}`;
      }
         invitej += `${(shootnogoald == String.fromCharCode(112,0) ? volumeM.length : shootnogoald.length)}`;
      let sendo = 9165672 >= shootnogoald.length;
      do {
         shootnogoald += `${volumeM.length + 2}`;
         if (sendo) {
            break;
         }
      } while (sendo && (!invitej.startsWith(`${shootnogoald.length}`)));
      smallbrightnessu = !volumeX.includes(`${dangerv}`);
      notificationfilled1 -= 1;
       let feedbacko: Array<any> = [803, 624];
       let leakcheckerm = false;
       let libruntimeexecutorW = 3.0;
      if (leakcheckerm) {
         leakcheckerm = !leakcheckerm;
      }
      while (leakcheckerm) {
          let greytickd = 0.0;
          let uploadz = String.fromCharCode(115,117,112,101,114,0);
          let homeplayerB = String.fromCharCode(104,105,101,114,97,114,99,104,121,0);
         feedbacko = [parseInt(`${greytickd}`)];
         greytickd /= Math.max(4, parseFloat(`${uploadz.length}`));
         uploadz = `${uploadz.length >> (Math.min(Math.abs(2), 3))}`;
         homeplayerB = `${(uploadz == String.fromCharCode(56,0) ? uploadz.length : homeplayerB.length)}`;
         break;
      }
      let libjsi2 = leakcheckerm ? !leakcheckerm : leakcheckerm;
      do {
          let sansI = 1.0;
          let mbridge6: Map<any, any> = new Map([[String.fromCharCode(112,97,112,101,114,0),907], [String.fromCharCode(112,97,110,101,0),135], [String.fromCharCode(118,97,97,112,105,0),464]]);
         leakcheckerm = (parseInt(`${libruntimeexecutorW}`) - feedbacko.length) >= 70;
         sansI += parseInt(`${sansI}`);
         mbridge6.set(`${sansI}`, parseInt(`${sansI}`));
         if (libjsi2) {
            break;
         }
      } while (libjsi2 && (leakcheckerm));
         libruntimeexecutorW -= feedbacko.length;
         feedbacko.push(3 ^ parseInt(`${libruntimeexecutorW}`));
          let pressurer = String.fromCharCode(115,99,104,101,109,101,115,0);
          let neon0 = 4;
          let qaag8 = 5.0;
         feedbacko.push(neon0 & 2);
         pressurer += "2";
         neon0 += pressurer.length * 2;
         qaag8 += parseInt(`${qaag8}`) % 2;
       let librrcS = String.fromCharCode(118,97,114,105,97,110,116,0);
       let iconadslinkY = String.fromCharCode(111,99,115,112,105,100,0);
      if (3 >= (iconadslinkY.length % (Math.max(2, 10))) && (iconadslinkY.length + 2) >= 1) {
         libruntimeexecutorW *= librrcS.length % (Math.max(2, 6));
      }
         libruntimeexecutorW *= 1 ^ feedbacko.length;
      selected8 = `${shielddone8 % (Math.max(3, 2))}`;
   while (2.95 < (shielddone8 * notificationfilled1)) {
       let binddatasf = 1.0;
       let searchj = String.fromCharCode(120,114,117,110,0);
       let apps7 = false;
       let kcopy_xtr: Array<any> = [362, 408];
      for (let o = 0; o < 3; o++) {
         searchj = `${kcopy_xtr.length}`;
      }
         apps7 = searchj.length == 93;
      let sharedk = apps7 ? !apps7 : apps7;
      do {
          let analyticS = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,0);
          let ajaxu = String.fromCharCode(105,110,115,105,100,101,0);
          let abidetectY: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,0),155], [String.fromCharCode(109,101,109,115,121,115,0),857]]);
          let libjsinspector6: Array<any> = [346, 10];
          let incidentw: Array<any> = [412, 637, 831];
         apps7 = analyticS == String.fromCharCode(48,0);
         analyticS += `${incidentw.length}`;
         ajaxu = `${3 >> (Math.min(4, Math.abs(abidetectY.size)))}`;
         abidetectY = new Map([[`${abidetectY.size}`, abidetectY.size + 2]]);
         libjsinspector6.push(3 ^ abidetectY.size);
         incidentw = [1];
         if (sharedk) {
            break;
         }
      } while (sharedk && (5 > (4 & kcopy_xtr.length)));
       let orangeq = 5.0;
       let policyT = 5.0;
      if (kcopy_xtr.includes(binddatasf)) {
          let canvash = false;
          let roundr = 5.0;
          let flyerg: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,101,100,0),String.fromCharCode(114,101,112,101,97,116,101,100,0)], [String.fromCharCode(99,111,109,98,105,110,101,0),String.fromCharCode(105,110,100,101,110,116,101,100,0)]]);
          let indicatorE = 4.0;
          let aboutC = 5;
         binddatasf += parseFloat(`${2 ^ aboutC}`);
         canvash = flyerg.get(`${canvash}`) == null;
         roundr /= Math.max(4, parseFloat(`${parseInt(`${indicatorE}`) & 1}`));
         flyerg = new Map([[`${roundr}`, ((canvash ? 2 : 3) & parseInt(`${roundr}`))]]);
         indicatorE *= parseInt(`${roundr}`);
         aboutC %= Math.max(flyerg.size | parseInt(`${roundr}`), 1);
      }
          let turndowne = true;
         kcopy_xtr.push(1);
         turndowne = !turndowne && !turndowne;
      while ((orangeq + 5.20) < 1.26) {
         orangeq += parseFloat(`${kcopy_xtr.length + parseInt(`${binddatasf}`)}`);
         break;
      }
      for (let g = 0; g < 3; g++) {
          let humidityk: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,0),596], [String.fromCharCode(112,101,101,108,111,102,102,0),223], [String.fromCharCode(115,99,116,112,117,116,105,108,0),481]]);
          let profileframej = String.fromCharCode(102,102,116,115,0);
          let redirectG = 0.0;
         searchj = `${3 + humidityk.size}`;
         humidityk = new Map([[profileframej, (profileframej == String.fromCharCode(50,0) ? parseInt(`${redirectG}`) : profileframej.length)]]);
         redirectG /= Math.max(3, (profileframej == String.fromCharCode(95,0) ? profileframej.length : parseInt(`${redirectG}`)));
      }
         policyT += parseFloat(`${kcopy_xtr.length}`);
      while ((kcopy_xtr.length - 1) <= 1) {
         kcopy_xtr = [parseInt(`${orangeq}`) % 3];
         break;
      }
         binddatasf *= parseFloat(`${searchj.length}`);
      if (3.38 >= (binddatasf + parseFloat(`${kcopy_xtr.length}`)) || 5.88 >= (binddatasf + 3.38)) {
         kcopy_xtr.push((String.fromCharCode(88,0) == searchj ? (apps7 ? 1 : 1) : searchj.length));
      }
      shielddone8 /= Math.max(2 + searchj.length, 1);
      break;
   }
      macau5 = [shielddone8];
   if ((jingdongt.length >> (Math.min(2, Math.abs(shielddone8)))) > 1 && 4 > (1 >> (Math.min(1, jingdongt.length)))) {
       let hongkongY = 3.0;
       let themeH = String.fromCharCode(98,105,116,114,101,100,117,99,116,105,111,110,0);
      let gradlewf = hongkongY <= 9405886.0;
      do {
         hongkongY += (parseFloat(`${themeH == String.fromCharCode(104,0) ? themeH.length : parseInt(`${hongkongY}`)}`));
         if (gradlewf) {
            break;
         }
      } while (gradlewf && ((1.52 - hongkongY) >= 4.0));
       let whatsappp = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,115,0);
       let foundR = String.fromCharCode(105,115,122,101,114,111,0);
      let middleq = whatsappp == String.fromCharCode(105,48,95,52,53,104,55,101,0);
      do {
          let wifirouterB = true;
         whatsappp = "2";
         if (middleq) {
            break;
         }
      } while ((whatsappp == String.fromCharCode(54,0) || 5 >= themeH.length) && middleq);
         hongkongY -= parseFloat(`${1}`);
         foundR += "2";
         whatsappp = `${whatsappp.length % (Math.max(themeH.length, 10))}`;
      jingdongt.push(themeH.length - 2);
   }
   for (let e = 0; e < 3; e++) {
      dangerv -= parseFloat(`${buildn.length >> (Math.min(4, macau5.length))}`);
   }
    overlayRef.current = true;

   let reducer2 = 5263186.0 <= dangerv;
   do {
      dangerv /= Math.max(5, parseFloat(`${jingdongt.length >> (Math.min(Math.abs(3), 4))}`));
      if (reducer2) {
         break;
      }
   } while (reducer2 && ((dangerv - 3.77) <= 2.50));
      notificationfilled1 *= shielddone8;
      selected8 = "2";
      selected8 += `${goalZ - macau5.length}`;
   let basketballplayerplaceholder5 = 6971872 >= successT.size;
   do {
      successT = new Map([[`${successT.size}`, 2 << (Math.min(2, Math.abs(goalZ)))]]);
      if (basketballplayerplaceholder5) {
         break;
      }
   } while (basketballplayerplaceholder5 && (5 >= (3 ^ successT.size) || (successT.size ^ buildn.length) >= 3));
      shielddone8 |= 1 << (Math.min(4, volumeX.length));
   let adultN = selected8 == String.fromCharCode(56,117,99,51,0);
   do {
       let smallbrightnessR = 5.0;
       let iconeditR = 5.0;
       let whistleorangeo = 5;
       let with_ooL: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,105,112,108,105,101,100,0),395], [String.fromCharCode(111,112,99,111,100,101,115,0),133]]);
       let iconlogoutV = String.fromCharCode(100,97,98,97,115,101,0);
      let utilsb = whistleorangeo >= 5069811;
      do {
          let playercommon4: Array<any> = [String.fromCharCode(112,114,111,102,105,108,101,115,0), String.fromCharCode(114,97,112,112,101,114,0)];
          let lang0 = 1.0;
          let checkboxT: Array<any> = [629, 359];
          let catagoryB: Array<any> = [245, 707, 686];
          let videobufferloadingz = 2.0;
         whistleorangeo >>= Math.min(Math.abs(2), 1);
         playercommon4.push(parseInt(`${lang0}`) | 1);
         lang0 *= parseInt(`${lang0}`) << (Math.min(5, Math.abs(2)));
         checkboxT.push(parseInt(`${videobufferloadingz}`) ^ 3);
         catagoryB.push(checkboxT.length >> (Math.min(5, Math.abs(parseInt(`${lang0}`)))));
         videobufferloadingz += parseInt(`${lang0}`);
         if (utilsb) {
            break;
         }
      } while ((iconlogoutV.endsWith(`${whistleorangeo}`)) && utilsb);
      while (with_ooL.size >= 5) {
          let singleZ = 4.0;
          let transferM = 4.0;
          let lessQ = 1.0;
         smallbrightnessR -= (iconlogoutV == String.fromCharCode(115,0) ? parseInt(`${lessQ}`) : iconlogoutV.length);
         singleZ *= 1;
         transferM += parseFloat(`${2 ^ parseInt(`${transferM}`)}`);
         lessQ *= parseInt(`${singleZ}`);
         break;
      }
         with_ooL = new Map([[`${smallbrightnessR}`, whistleorangeo & parseInt(`${smallbrightnessR}`)]]);
      for (let l = 0; l < 2; l++) {
         with_ooL = new Map([[`${with_ooL.size}`, 3 * whistleorangeo]]);
      }
          let inouttargetyellowU = String.fromCharCode(99,97,112,116,105,111,110,0);
          let greenarrowup9 = 2;
          let philippinesw = false;
         iconlogoutV = "2";
         inouttargetyellowU = `${inouttargetyellowU.length}`;
         greenarrowup9 |= 3 / (Math.max(greenarrowup9, 2));
         philippinesw = greenarrowup9 > 16 && inouttargetyellowU == String.fromCharCode(75,0);
         whistleorangeo |= (iconlogoutV == String.fromCharCode(72,0) ? iconlogoutV.length : parseInt(`${iconeditR}`));
      if ((parseInt(`${iconeditR}`) * iconlogoutV.length) >= 3 && 3 >= (iconlogoutV.length * parseInt(`${iconeditR}`))) {
         iconeditR *= parseFloat(`${with_ooL.size + whistleorangeo}`);
      }
      while (3.49 < (smallbrightnessR - 2.60)) {
          let inactiveO = 2;
          let iconclosewhitewithbgd = 2.0;
          let layoutW: Array<any> = [String.fromCharCode(99,97,112,116,117,114,101,114,0), String.fromCharCode(103,95,55,53,0), String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,0)];
          let sort1 = false;
         iconlogoutV += `${parseInt(`${iconclosewhitewithbgd}`) + 1}`;
         inactiveO ^= 1;
         iconclosewhitewithbgd /= Math.max(2, parseFloat(`${3}`));
         layoutW.push(2 ^ layoutW.length);
         sort1 = !sort1;
         break;
      }
       let hook0: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,111,114,0),685], [String.fromCharCode(112,111,111,112,0),190], [String.fromCharCode(100,97,116,97,98,108,111,99,107,0),386]]);
      let screenB = 5170168.0 <= iconeditR;
      do {
         iconeditR /= Math.max(parseFloat(`${2}`), 3);
         if (screenB) {
            break;
         }
      } while (screenB && (Array.from(with_ooL.values()).includes(iconeditR)));
         hook0.set(iconlogoutV, 2 * iconlogoutV.length);
         whistleorangeo %= Math.max(parseInt(`${iconeditR}`) / (Math.max(hook0.size, 6)), 3);
      if (2 == (hook0.size << (Math.min(Math.abs(5), 1))) && (hook0.size << (Math.min(Math.abs(5), 4))) == 2) {
         hook0 = new Map([[`${smallbrightnessR}`, 2]]);
      }
      for (let p = 0; p < 3; p++) {
         smallbrightnessR += parseInt(`${iconeditR}`);
      }
          let libfollyS = 0.0;
         iconlogoutV += `${3 ^ whistleorangeo}`;
         libfollyS /= Math.max(parseInt(`${libfollyS}`), 2);
      selected8 = `${2 ^ with_ooL.size}`;
      if (adultN) {
         break;
      }
   } while (adultN && (selected8.length == buildn.length));
       let catalogY = true;
       let productE = 5.0;
         catalogY = productE < 73.29 || catalogY;
      if (5.90 <= (productE - 5.75)) {
          let yingm: Array<any> = [414, 85];
          let stepX = String.fromCharCode(115,116,114,101,114,114,111,114,0);
          let libavutil9 = 3.0;
         productE -= parseFloat(`${yingm.length}`);
         yingm.push(stepX.length);
         stepX += `${(String.fromCharCode(78,0) == stepX ? stepX.length : parseInt(`${libavutil9}`))}`;
         libavutil9 -= parseFloat(`${stepX.length + 1}`);
      }
         productE *= (parseFloat(`${parseInt(`${productE}`) << (Math.min(1, Math.abs((catalogY ? 3 : 2))))}`));
          let elementso: Array<any> = [String.fromCharCode(113,117,111,116,105,101,110,116,0), String.fromCharCode(109,97,105,110,108,105,115,116,0), String.fromCharCode(115,112,111,116,0)];
          let reactnavigationp: Array<any> = [984, 395, 142];
         productE *= (parseFloat(`${reactnavigationp.length / (Math.max(6, (catalogY ? 2 : 2)))}`));
         elementso = [2 >> (Math.min(4, elementso.length))];
         reactnavigationp = [elementso.length | 2];
          let configurer = 2;
          let footballtrophy4 = false;
         productE += (parseFloat(`${(footballtrophy4 ? 5 : 3) / (Math.max(5, configurer))}`));
      for (let u = 0; u < 2; u++) {
         productE *= (parseFloat(`${parseInt(`${productE}`) * (catalogY ? 1 : 2)}`));
      }
      goalZ *= parseInt(`${notificationfilled1}`);
      goalZ %= Math.max(5, successT.size - 1);
      volumeX = `${3 - parseInt(`${gdtadvW}`)}`;
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
       let questiconE = false;
    let moduleq = String.fromCharCode(114,101,102,0);
    let topicM = String.fromCharCode(102,105,108,101,116,105,109,101,0);
    let wifirouterC = 5;
    let librrcw = true;
    let icondownimg2 = 2.0;
    let fillG = String.fromCharCode(100,105,118,105,115,105,111,110,0);
    let reactnativejsT = 2.0;
    let animationsQ = 2.0;
    let libreactnativejnia = 3.0;
       let gmailK = String.fromCharCode(100,101,115,99,101,110,116,0);
       let temperature3 = false;
          let orangetick4 = String.fromCharCode(100,101,116,97,105,108,115,0);
          let encryptz: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,115,0),true ], [String.fromCharCode(100,119,111,114,100,0),true ]]);
          let penaltygoalL: Array<any> = [String.fromCharCode(114,101,109,117,120,0), String.fromCharCode(120,99,104,97,99,104,97,0), String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,0)];
         temperature3 = orangetick4.includes(`${temperature3}`);
         orangetick4 += `${penaltygoalL.length / (Math.max(8, encryptz.size))}`;
         encryptz = new Map([[`${encryptz.size}`, penaltygoalL.length | encryptz.size]]);
          let iconpipexpandw = String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,0);
          let mbnativer: Map<any, any> = new Map([[String.fromCharCode(104,111,115,116,110,97,109,101,0),String.fromCharCode(115,112,97,99,101,114,0)], [String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,0),String.fromCharCode(101,118,101,114,0)]]);
         temperature3 = mbnativer.size < 9 || iconpipexpandw.length < 9;
       let videoG: Array<any> = [317, 41, 647];
         gmailK += `${videoG.length}`;
       let pathC = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,0);
      while (!temperature3) {
         temperature3 = gmailK.length <= 13;
         break;
      }
      topicM += `${((librrcw ? 1 : 3))}`;
   if (moduleq != String.fromCharCode(108,0)) {
       let gifte = false;
       let iconsharefriendsD = true;
       let incidentM: Array<any> = [163, 708];
      while (!gifte) {
         gifte = !iconsharefriendsD && incidentM.length > 11;
         break;
      }
      for (let p = 0; p < 2; p++) {
         gifte = incidentM.length == 90;
      }
      if (4 > incidentM.length && 5 > (4 % (Math.max(3, incidentM.length)))) {
         incidentM.push(((iconsharefriendsD ? 4 : 2) * 3));
      }
         iconsharefriendsD = !gifte && incidentM.length < 25;
       let arrowdownK = true;
      for (let e = 0; e < 3; e++) {
         arrowdownK = !arrowdownK;
      }
          let libfabricjni8 = String.fromCharCode(112,105,118,111,116,0);
          let arrowrightU = 5.0;
         gifte = arrowdownK;
         libfabricjni8 += `${libfabricjni8.length | 3}`;
         arrowrightU += parseFloat(`${libfabricjni8.length * 3}`);
      if (!gifte) {
         incidentM = [((iconsharefriendsD ? 3 : 5) << (Math.min(Math.abs((arrowdownK ? 4 : 2)), 3)))];
      }
      if (3 >= incidentM.length) {
         arrowdownK = (!arrowdownK ? !gifte : !arrowdownK);
      }
      topicM += `${(String.fromCharCode(121,0) == moduleq ? moduleq.length : topicM.length)}`;
   }
   for (let k = 0; k < 1; k++) {
      moduleq += `${3 % (Math.max(wifirouterC, 2))}`;
   }
      reactnativejsT /= Math.max(3, (String.fromCharCode(113,0) == fillG ? parseInt(`${reactnativejsT}`) : fillG.length));
      topicM = `${(String.fromCharCode(117,0) == moduleq ? moduleq.length : topicM.length)}`;
      topicM += `${(moduleq == String.fromCharCode(95,0) ? (questiconE ? 3 : 2) : moduleq.length)}`;

      if (videoRef.current) {
        videoRef.current.seek(isNaN(value) ? 0 : value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
       let rewindU: Map<any, any> = new Map([[String.fromCharCode(109,97,120,98,105,116,114,97,116,101,0),634], [String.fromCharCode(117,110,115,101,101,110,0),566]]);
    let plashb = String.fromCharCode(105,110,112,117,116,0);
    let ruless = String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,0);
    let defaultprofilepicf = 1.0;
    let nalyticsk = 4.0;
    let orangetickB = 4.0;
    let libjsijniprofilerU: Array<any> = [839, 429, 465];
    let usernameW: Map<any, any> = new Map([[String.fromCharCode(98,111,120,101,115,0),69], [String.fromCharCode(113,117,97,110,116,105,122,101,100,0),34], [String.fromCharCode(117,116,109,111,115,116,0),957]]);
    let iconfeedbackt = true;
    let x_position5 = 4.0;
    let mapbufferH = 0.0;
    let mapbufferd = String.fromCharCode(97,100,100,101,114,0);
    let hooksq = String.fromCharCode(97,109,116,0);
    let libavfilters: Map<any, any> = new Map([[String.fromCharCode(99,117,98,101,100,0),false ], [String.fromCharCode(105,116,111,97,0),false ]]);
      usernameW.set(`${defaultprofilepicf}`, 2);
       let darkH = String.fromCharCode(97,100,106,117,115,116,0);
       let whitevideolive8 = String.fromCharCode(105,110,116,114,105,110,115,105,99,0);
       let libavutil7 = true;
      while (libavutil7) {
          let bodano = 1.0;
          let time_fQ: Array<any> = [702, 262, 283];
         libavutil7 = darkH.endsWith(`${libavutil7}`);
         bodano /= Math.max(2, parseFloat(`${parseInt(`${bodano}`) % (Math.max(time_fQ.length, 3))}`));
         time_fQ = [3];
         break;
      }
          let hiadN = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,0);
         libavutil7 = whitevideolive8.length > darkH.length;
         hiadN = `${hiadN.length - hiadN.length}`;
      for (let q = 0; q < 2; q++) {
         libavutil7 = 82 >= darkH.length;
      }
         darkH = `${whitevideolive8.length % 3}`;
      let promotionj = darkH.length <= 9779259;
      do {
         darkH += `${(whitevideolive8.length << (Math.min(1, Math.abs((libavutil7 ? 4 : 3)))))}`;
         if (promotionj) {
            break;
         }
      } while ((libavutil7) && promotionj);
      let yellowredcarda = String.fromCharCode(121,116,97,99,0) == whitevideolive8;
      do {
         whitevideolive8 = `${whitevideolive8.length >> (Math.min(Math.abs(3), 3))}`;
         if (yellowredcarda) {
            break;
         }
      } while (yellowredcarda && (darkH.endsWith(`${whitevideolive8.length}`)));
         whitevideolive8 = `${whitevideolive8.length}`;
         darkH = "3";
       let scorepopsound7: Map<any, any> = new Map([[String.fromCharCode(115,97,110,105,116,105,122,101,0),729], [String.fromCharCode(101,120,116,101,114,110,97,108,108,121,0),198], [String.fromCharCode(105,109,105,116,97,116,101,0),243]]);
       let predictionarrow3: Map<any, any> = new Map([[String.fromCharCode(114,116,99,112,0),292], [String.fromCharCode(112,97,99,107,101,100,0),802]]);
      nalyticsk += parseFloat(`${parseInt(`${orangetickB}`)}`);
   if (3 >= (ruless.length * libjsijniprofilerU.length) && 3 >= (ruless.length * 3)) {
       let progressb = 0;
      while (progressb > progressb) {
          let yellow6 = String.fromCharCode(97,112,112,108,105,101,115,0);
          let libavdeviceN = String.fromCharCode(109,117,109,98,97,105,0);
          let iconnointernetc = 5.0;
          let homeinactiveb = String.fromCharCode(112,102,114,97,109,101,0);
          let bufferR = String.fromCharCode(110,97,116,105,111,110,97,108,0);
         progressb /= Math.max(2, 1 % (Math.max(2, parseInt(`${iconnointernetc}`))));
         yellow6 = `${homeinactiveb.length >> (Math.min(Math.abs(3), 5))}`;
         libavdeviceN += "3";
         iconnointernetc -= parseFloat(`${yellow6.length | libavdeviceN.length}`);
         homeinactiveb += `${bufferR.length & 1}`;
         bufferR += "2";
         break;
      }
      let encryptR = 5935579 >= progressb;
      do {
          let championb = false;
          let gifgoalbgg = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,0);
         progressb |= (gifgoalbgg == String.fromCharCode(97,0) ? progressb : gifgoalbgg.length);
         championb = championb || !championb;
         if (encryptR) {
            break;
         }
      } while (encryptR && (5 >= (progressb >> (Math.min(Math.abs(1), 5)))));
         progressb <<= Math.min(Math.abs(progressb / 1), 1);
      libjsijniprofilerU.push(usernameW.size);
   }
   for (let b = 0; b < 3; b++) {
       let iconchatsend2: Map<any, any> = new Map([[String.fromCharCode(115,104,117,116,100,111,119,110,97,99,107,0),false ], [String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,0),false ], [String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,0),true ]]);
       let delegate_fuk: Array<any> = [147, 96];
       let membershipF: Array<any> = [45, 775, 784];
      for (let t = 0; t < 2; t++) {
          let greenE = 4.0;
          let klevin3 = String.fromCharCode(100,98,115,105,122,101,0);
          let becomeP = false;
         delegate_fuk.push(parseInt(`${greenE}`) * 1);
         greenE += parseFloat(`${klevin3.length ^ 2}`);
         klevin3 = `${(1 + (becomeP ? 4 : 1))}`;
      }
          let progressz: Array<any> = [756, 185, 550];
          let proxyR = String.fromCharCode(99,105,110,101,112,97,107,0);
          let pangleB: Array<any> = [73, 946, 821];
         iconchatsend2.set(`${delegate_fuk.length}`, delegate_fuk.length * iconchatsend2.size);
         progressz.push(pangleB.length);
         proxyR += `${2 & proxyR.length}`;
         pangleB = [1];
      usernameW.set(`${libjsijniprofilerU.length}`, iconchatsend2.size << (Math.min(Math.abs(1), 2)));
   }
   while ((defaultprofilepicf + 5.83) > 3.96 || (4 / (Math.max(2, ruless.length))) > 4) {
      defaultprofilepicf -= usernameW.size & 1;
      break;
   }

    clearTimeout(iconTimer.current);

      usernameW = new Map([[`${orangetickB}`, plashb.length - parseInt(`${orangetickB}`)]]);
       let inactiveH = String.fromCharCode(115,103,105,114,108,101,0);
       let homeloadingA = 0.0;
       let basketballmatchdetailbgN = true;
       let schedulerY = String.fromCharCode(114,101,111,114,100,101,114,0);
      let animationsJ = homeloadingA >= 5362989.0;
      do {
         homeloadingA += parseFloat(`${inactiveH.length ^ parseInt(`${homeloadingA}`)}`);
         if (animationsJ) {
            break;
         }
      } while ((1.32 > (homeloadingA + 2.36) || (inactiveH.length / 3) > 1) && animationsJ);
      while ((5 * schedulerY.length) < 2) {
          let shirtZ = String.fromCharCode(118,116,101,115,116,0);
          let pressurep = 2.0;
          let member6 = 2.0;
         schedulerY = `${inactiveH.length * parseInt(`${pressurep}`)}`;
         shirtZ = `${shirtZ.length >> (Math.min(4, Math.abs(parseInt(`${member6}`))))}`;
         pressurep *= parseFloat(`${parseInt(`${member6}`) | 3}`);
         break;
      }
          let mbridgeJ = 0.0;
          let bannerY: Map<any, any> = new Map([[String.fromCharCode(108,101,97,115,101,0),908], [String.fromCharCode(115,116,114,107,0),225]]);
          let playlistb: Array<any> = [833, 692, 38];
         basketballmatchdetailbgN = !basketballmatchdetailbgN;
         mbridgeJ += playlistb.length;
         bannerY = new Map([[`${bannerY.size}`, bannerY.size - parseInt(`${mbridgeJ}`)]]);
         playlistb = [parseInt(`${mbridgeJ}`)];
         schedulerY = `${((basketballmatchdetailbgN ? 4 : 1) % (Math.max(inactiveH.length, 3)))}`;
         basketballmatchdetailbgN = !basketballmatchdetailbgN;
         basketballmatchdetailbgN = inactiveH.length >= 63;
       let jingdongZ = 4.0;
         schedulerY = `${parseInt(`${homeloadingA}`) & schedulerY.length}`;
      libjsijniprofilerU.push(2);
      rewindU = new Map([[`${usernameW.size}`, 1 << (Math.min(1, Math.abs(parseInt(`${x_position5}`))))]]);
   let network9 = rewindU.size <= 8967059;
   do {
      rewindU.set(`${iconfeedbackt}`, parseInt(`${x_position5}`) & 2);
      if (network9) {
         break;
      }
   } while (network9 && (4 == (usernameW.size >> (Math.min(Math.abs(1), 3)))));
   let country2 = 6676387 <= rewindU.size;
   do {
      rewindU = new Map([[`${rewindU.size}`, usernameW.size]]);
      if (country2) {
         break;
      }
   } while ((iconfeedbackt) && country2);
    setShowIcon(true);

      plashb += `${2 % (Math.max(3, rewindU.size))}`;
   if (ruless.length <= 4) {
      ruless += `${usernameW.size}`;
   }
      orangetickB /= Math.max(3, (parseInt(`${x_position5}`) - (iconfeedbackt ? 5 : 4)));
   if ((orangetickB / 5.5) > 4.27 || 5.5 > (usernameW.size / (Math.max(2, orangetickB)))) {
       let sinaN: Array<any> = [558, 795];
       let reactnativeultimatelistviewt: Array<any> = [352, 508, 372];
       let adultG: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,101,0),912], [String.fromCharCode(121,117,118,121,97,0),280], [String.fromCharCode(115,112,97,110,115,0),404]]);
       let gradlewU = String.fromCharCode(100,118,98,115,117,98,0);
       let shrinke = true;
       let yellowscoreballY = false;
      let arrowupC = shrinke ? !shrinke : shrinke;
      do {
         shrinke = 7 <= adultG.size && gradlewU.length <= 7;
         if (arrowupC) {
            break;
         }
      } while ((shrinke) && arrowupC);
       let libturbomodulejsijniD: Array<any> = [352, 177];
       let themeX: Array<any> = [64, 178, 441];
      while (1 > (5 / (Math.max(9, gradlewU.length)))) {
         gradlewU = `${reactnativeultimatelistviewt.length}`;
         break;
      }
      let controlsU = String.fromCharCode(50,112,50,113,99,0) == gradlewU;
      do {
          let libreactnativejni7 = true;
          let templateprocessorS = String.fromCharCode(112,105,99,107,109,111,100,101,0);
          let filterc = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,0);
         gradlewU += `${(3 * (libreactnativejni7 ? 5 : 3))}`;
         libreactnativejni7 = filterc.length > 62;
         templateprocessorS += `${1 - filterc.length}`;
         if (controlsU) {
            break;
         }
      } while (((adultG.size % (Math.max(gradlewU.length, 6))) <= 3 && (adultG.size % (Math.max(gradlewU.length, 3))) <= 3) && controlsU);
         themeX = [((shrinke ? 5 : 5))];
      while (!gradlewU.includes(`${reactnativeultimatelistviewt.length}`)) {
         gradlewU = `${2 % (Math.max(5, libturbomodulejsijniD.length))}`;
         break;
      }
      let umengr = shrinke ? !shrinke : shrinke;
      do {
         shrinke = libturbomodulejsijniD.includes(yellowscoreballY);
         if (umengr) {
            break;
         }
      } while ((shrinke) && umengr);
       let libjsijniprofilerP: Array<any> = [450, 532];
       let langs: Array<any> = [59, 816];
      while ((libturbomodulejsijniD.length ^ 5) < 4 || 5 < (sinaN.length ^ libturbomodulejsijniD.length)) {
         sinaN = [themeX.length];
         break;
      }
         yellowscoreballY = (((yellowscoreballY ? 3 : libjsijniprofilerP.length) * libjsijniprofilerP.length) >= 3);
      if (!shrinke) {
         shrinke = (reactnativeultimatelistviewt.length / (Math.max(adultG.size, 9))) == 41;
      }
      orangetickB *= 3;
   }
      orangetickB += 2;
    if (isPause) {

   while (plashb.length >= 2 && !iconfeedbackt) {
      plashb = "3";
      break;
   }
      usernameW.set(`${iconfeedbackt}`, 2);
       let pointr = String.fromCharCode(99,108,105,112,112,101,100,0);
          let routerH = String.fromCharCode(105,115,101,109,112,116,121,0);
          let floaterH = 1.0;
         pointr += `${(pointr == String.fromCharCode(87,0) ? routerH.length : pointr.length)}`;
         routerH += `${3 << (Math.min(Math.abs(parseInt(`${floaterH}`)), 5))}`;
         floaterH *= parseFloat(`${parseInt(`${floaterH}`)}`);
      while (pointr != String.fromCharCode(103,0) || pointr == String.fromCharCode(110,0)) {
         pointr = `${pointr.length ^ pointr.length}`;
         break;
      }
      while (pointr.startsWith(pointr)) {
         pointr += `${pointr.length - pointr.length}`;
         break;
      }
      iconfeedbackt = 16 >= libjsijniprofilerU.length;
      rewindU.set(`${iconfeedbackt}`, (parseInt(`${nalyticsk}`) << (Math.min(2, Math.abs((iconfeedbackt ? 4 : 3))))));
   while ((rewindU.size * 3) == 2) {
      rewindU.set(mapbufferd, parseInt(`${mapbufferH}`));
      break;
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    else {

      defaultprofilepicf -= plashb.length;
      usernameW.set(`${ruless}`, ruless.length);
   if (5 == usernameW.size) {
      usernameW = new Map([[`${rewindU.size}`, parseInt(`${x_position5}`) * rewindU.size]]);
   }
       let orangeE = 5;
         orangeE %= Math.max(orangeE, 2);
         orangeE &= orangeE & 2;
         orangeE += 2 | orangeE;
      rewindU = new Map([[`${nalyticsk}`, parseInt(`${defaultprofilepicf}`)]]);
      plashb = `${parseInt(`${orangetickB}`) % 2}`;
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let full6 = String.fromCharCode(97,99,102,105,108,116,101,114,0);
    let foundP: Array<any> = [String.fromCharCode(111,99,97,108,0), String.fromCharCode(118,97,99,97,110,116,0), String.fromCharCode(104,111,115,116,115,0)];
    let cornerm = 2.0;
    let static_mi = false;
    let brightnessH = false;
    let stylesp: Array<any> = [698, 580];
    let emojiheartF = 2;
    let temp7 = String.fromCharCode(101,114,97,115,101,100,0);
    let notificationr = 1.0;
    let eactq = true;
    let grays = false;
    let collectionk: Array<any> = [309, 945];
    let libreactperfloggerjnir = 3;
    let wifirouterC = String.fromCharCode(116,97,112,112,101,100,0);
    let turnb = true;
    let pushF = 0.0;
   let taiwan8 = static_mi ? !static_mi : static_mi;
   do {
      static_mi = full6.length < 42;
      if (taiwan8) {
         break;
      }
   } while (taiwan8 && (3 <= emojiheartF));
   if ((temp7.length / (Math.max(10, cornerm))) < 5.74) {
       let description_bn5 = 5.0;
       let attributedstringh = String.fromCharCode(108,105,98,118,112,120,0);
       let bellreminderf = false;
       let s_viewh: Array<any> = [String.fromCharCode(114,101,99,111,110,110,101,99,116,101,100,0), String.fromCharCode(112,114,111,112,97,103,97,116,101,0), String.fromCharCode(114,101,116,114,105,101,100,0)];
       let frame_32 = 4;
         s_viewh.push(2 >> (Math.min(Math.abs(frame_32), 1)));
         attributedstringh += `${attributedstringh.length}`;
      let typingloadingo = bellreminderf ? !bellreminderf : bellreminderf;
      do {
         bellreminderf = s_viewh.includes(frame_32);
         if (typingloadingo) {
            break;
         }
      } while (typingloadingo && (bellreminderf));
      while (!attributedstringh.startsWith(`${bellreminderf}`)) {
         bellreminderf = 47 < (description_bn5 + frame_32);
         break;
      }
         attributedstringh += `${frame_32 / 3}`;
         attributedstringh = `${1 | attributedstringh.length}`;
      while (attributedstringh.includes(`${s_viewh.length}`)) {
         attributedstringh = `${2 % (Math.max(3, s_viewh.length))}`;
         break;
      }
      if (!bellreminderf) {
          let yellowredcardJ = String.fromCharCode(100,116,111,114,0);
         attributedstringh = `${(frame_32 | (bellreminderf ? 4 : 2))}`;
         yellowredcardJ += `${yellowredcardJ.length}`;
      }
      while (4 == (s_viewh.length + 5)) {
          let ranko = String.fromCharCode(114,101,115,116,97,114,116,0);
          let chatbotphotop = String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,0);
         bellreminderf = 11 >= s_viewh.length;
         ranko += `${2 | chatbotphotop.length}`;
         chatbotphotop = `${ranko.length & chatbotphotop.length}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
          let nterstitials: Map<any, any> = new Map([[String.fromCharCode(109,111,114,112,104,101,100,0),556], [String.fromCharCode(112,108,97,110,101,0),707], [String.fromCharCode(102,102,118,108,0),251]]);
          let predictionwin4 = String.fromCharCode(101,120,101,99,117,116,101,100,0);
          let tickA = String.fromCharCode(115,110,111,119,100,97,116,97,0);
          let searchG: Map<any, any> = new Map([[String.fromCharCode(103,101,116,109,97,120,114,115,115,0),String.fromCharCode(101,98,109,108,110,117,109,0)], [String.fromCharCode(114,97,115,116,101,114,105,122,101,115,0),String.fromCharCode(97,99,99,101,108,101,114,97,116,101,0)], [String.fromCharCode(116,104,114,111,117,103,104,0),String.fromCharCode(114,111,112,115,116,101,110,0)]]);
         bellreminderf = 66.23 > description_bn5;
         nterstitials.set(`${tickA}`, searchG.size);
         predictionwin4 += `${tickA.length}`;
         searchG = new Map([[`${searchG.size}`, (tickA == String.fromCharCode(117,0) ? tickA.length : searchG.size)]]);
      }
         frame_32 <<= Math.min(4, Math.abs(3));
         s_viewh.push(2 / (Math.max(parseInt(`${description_bn5}`), 10)));
         description_bn5 *= (parseFloat(`${(bellreminderf ? 3 : 4) >> (Math.min(attributedstringh.length, 5))}`));
         description_bn5 += (parseFloat(`${attributedstringh == String.fromCharCode(122,0) ? s_viewh.length : attributedstringh.length}`));
          let loginsuccess2 = String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,0);
          let mountingy = String.fromCharCode(97,116,111,109,105,99,97,108,108,121,0);
          let iconchatsendj = 1.0;
         description_bn5 /= Math.max(4, parseFloat(`${parseInt(`${iconchatsendj}`)}`));
         loginsuccess2 = `${mountingy.length / 2}`;
         mountingy += `${2 >> (Math.min(1, mountingy.length))}`;
         iconchatsendj *= parseFloat(`${mountingy.length ^ 3}`);
      temp7 += `${s_viewh.length}`;
   }
   let shootyesgoalx = notificationr >= 6398711.0;
   do {
      notificationr /= Math.max(parseFloat(`${full6.length}`), 1);
      if (shootyesgoalx) {
         break;
      }
   } while ((1.1 >= (1.52 * notificationr)) && shootyesgoalx);
       let basketballicond = String.fromCharCode(117,110,100,101,102,105,110,101,100,0);
          let dist6 = String.fromCharCode(112,111,112,117,108,97,116,101,100,0);
          let textlayoutmanager1 = String.fromCharCode(99,97,110,100,105,100,97,116,101,0);
          let iconpipexpandp = 2.0;
         basketballicond += `${basketballicond.length ^ textlayoutmanager1.length}`;
         dist6 = `${(dist6 == String.fromCharCode(69,0) ? dist6.length : parseInt(`${iconpipexpandp}`))}`;
         textlayoutmanager1 += `${parseInt(`${iconpipexpandp}`) & 1}`;
          let eactr = 4.0;
          let chatroombackground0 = String.fromCharCode(104,105,103,104,108,105,103,104,116,101,100,0);
         basketballicond = `${1 + basketballicond.length}`;
         eactr += 3 + parseInt(`${eactr}`);
         chatroombackground0 = `${chatroombackground0.length}`;
      if (basketballicond == basketballicond) {
         basketballicond = `${1 ^ basketballicond.length}`;
      }
      temp7 = `${(parseInt(`${notificationr}`) * (static_mi ? 4 : 2))}`;
      emojiheartF <<= Math.min(Math.abs(parseInt(`${cornerm}`) ^ 1), 3);
   for (let h = 0; h < 3; h++) {
      stylesp.push(foundP.length);
   }
      full6 = `${1 & temp7.length}`;
       let libcrashsdkf = 1;
       let reactnativejs4 = String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,0);
       let basketballplayerplaceholderS = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,0);
         libcrashsdkf *= basketballplayerplaceholderS.length;
      let manifestV = String.fromCharCode(53,106,113,113,113,122,0) == reactnativejs4;
      do {
         reactnativejs4 = `${reactnativejs4.length}`;
         if (manifestV) {
            break;
         }
      } while (manifestV && (!reactnativejs4.startsWith(`${basketballplayerplaceholderS.length}`)));
      let bell2 = 8818362 >= libcrashsdkf;
      do {
         libcrashsdkf &= reactnativejs4.length;
         if (bell2) {
            break;
         }
      } while (bell2 && ((libcrashsdkf - basketballplayerplaceholderS.length) == 3 || (libcrashsdkf - 3) == 2));
       let updatesc = String.fromCharCode(116,105,99,107,115,0);
       let armvaD = String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,0);
      for (let t = 0; t < 2; t++) {
         armvaD += `${(armvaD == String.fromCharCode(65,0) ? armvaD.length : libcrashsdkf)}`;
      }
       let telegramq = 4.0;
       let layoutI = 0.0;
       let arrowrightN: Array<any> = [String.fromCharCode(115,117,112,101,114,102,114,97,109,101,0), String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,0)];
         updatesc += `${parseInt(`${layoutI}`)}`;
       let brightness_ = 1;
       let episodeK = 3;
      foundP.push(2 & reactnativejs4.length);
   for (let j = 0; j < 1; j++) {
      cornerm /= Math.max(2, 1);
   }
      brightnessH = foundP.length < 88 && String.fromCharCode(51,0) == temp7;
      static_mi = (brightnessH ? grays : !brightnessH);
       let promotionH: Array<any> = [126, 640];
       let libsentryc = String.fromCharCode(119,111,114,107,101,114,0);
          let placeholderA: Array<any> = [163, 414, 535];
         promotionH.push(1);
         placeholderA = [1];
      let cornershootv = 7795220 >= promotionH.length;
      do {
          let overq = String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,0);
         promotionH = [promotionH.length];
         overq = `${overq.length}`;
         if (cornershootv) {
            break;
         }
      } while (cornershootv && ((5 - promotionH.length) < 4 || 5 < (promotionH.length - libsentryc.length)));
      for (let o = 0; o < 3; o++) {
         promotionH = [(String.fromCharCode(50,0) == libsentryc ? libsentryc.length : promotionH.length)];
      }
      if (!libsentryc.endsWith(`${promotionH.length}`)) {
         libsentryc += "2";
      }
         promotionH.push(1 ^ libsentryc.length);
          let videovart: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,97,98,108,101,0),String.fromCharCode(120,120,99,104,0)], [String.fromCharCode(115,111,108,105,100,99,111,108,111,114,0),String.fromCharCode(102,111,99,117,115,101,100,0)], [String.fromCharCode(102,105,108,101,115,121,115,116,101,109,0),String.fromCharCode(99,102,115,116,114,101,97,109,0)]]);
          let iconclosewhitebg2 = String.fromCharCode(112,97,114,116,110,101,114,0);
          let basketballtrophyf = 0.0;
         libsentryc += `${parseInt(`${basketballtrophyf}`)}`;
         videovart = new Map([[`${videovart.size}`, iconclosewhitebg2.length]]);
         iconclosewhitebg2 = `${iconclosewhitebg2.length}`;
         basketballtrophyf /= Math.max(videovart.size, 2);
      full6 = `${libsentryc.length}`;

    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
       let applicationN = true;
    let imagewatchlive8 = false;
    let materialI = String.fromCharCode(116,101,108,101,116,101,120,116,0);
    let sendY = String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,0);
    let historyF = true;
    let suboutT = String.fromCharCode(117,105,110,116,0);
    let huaweiS = false;
    let iconnewchatb = String.fromCharCode(99,111,109,109,97,110,100,115,0);
    let disconnectedlogoM: Map<any, any> = new Map([[String.fromCharCode(105,100,97,115,115,101,116,115,0),true ], [String.fromCharCode(114,101,108,97,121,0),true ], [String.fromCharCode(100,117,114,98,105,110,0),true ]]);
   let iconbellP = 7146652 <= sendY.length;
   do {
       let libsgcoreG = 4.0;
       let filedI = false;
          let entryL = 4;
         filedI = 30.21 > libsgcoreG;
         entryL &= 1 | entryL;
         libsgcoreG -= (parseFloat(`${(filedI ? 2 : 4) * parseInt(`${libsgcoreG}`)}`));
         filedI = !filedI || 91.72 == libsgcoreG;
         filedI = 87.78 == libsgcoreG && filedI;
      while ((libsgcoreG / 2.21) >= 2.61 || filedI) {
          let libturbomodulejsijniG = 4;
          let saveb = false;
          let indexP = String.fromCharCode(112,97,105,110,116,115,0);
         libsgcoreG += (parseFloat(`${2 | (filedI ? 5 : 2)}`));
         libturbomodulejsijniG /= Math.max(1, 1 | indexP.length);
         saveb = libturbomodulejsijniG >= indexP.length;
         break;
      }
          let chinaJ = String.fromCharCode(105,110,116,101,108,0);
          let defaultfootballbg6: Array<any> = [195, 577, 268];
          let hookt = String.fromCharCode(98,105,114,116,104,0);
         filedI = chinaJ.startsWith(`${filedI}`);
         chinaJ += `${defaultfootballbg6.length ^ 3}`;
         defaultfootballbg6.push(defaultfootballbg6.length);
         hookt = `${defaultfootballbg6.length}`;
      sendY += `${(suboutT == String.fromCharCode(79,0) ? (huaweiS ? 1 : 4) : suboutT.length)}`;
      if (iconbellP) {
         break;
      }
   } while (iconbellP && (suboutT.length == sendY.length));
   while (!applicationN && materialI.length > 3) {
      applicationN = !materialI.endsWith(`${historyF}`);
      break;
   }

    if (isBodanRef.current) {

   let refresh5 = applicationN ? !applicationN : applicationN;
   do {
      applicationN = materialI == String.fromCharCode(71,0);
      if (refresh5) {
         break;
      }
   } while (refresh5 && (applicationN));
   if (!huaweiS) {
      huaweiS = String.fromCharCode(49,0) == sendY;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

      suboutT = `${materialI.length << (Math.min(Math.abs(1), 4))}`;
      historyF = imagewatchlive8 || historyF;
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   while (suboutT.length >= 3 && !huaweiS) {
      huaweiS = (((!imagewatchlive8 ? 20 : suboutT.length) / (Math.max(suboutT.length, 1))) == 20);
      break;
   }
       let gifgoal4 = String.fromCharCode(109,101,110,116,105,111,110,0);
         gifgoal4 = "3";
         gifgoal4 = `${gifgoal4.length}`;
         gifgoal4 += "1";
      materialI = "2";

      

   for (let l = 0; l < 3; l++) {
       let dialog_ = String.fromCharCode(114,101,97,99,116,0);
       let appsM = String.fromCharCode(104,97,115,104,101,114,0);
       let philippinesX = String.fromCharCode(99,104,97,110,103,101,0);
          let forwardG = String.fromCharCode(114,101,99,114,101,97,116,101,0);
          let combinedc = true;
          let l_position6: Array<any> = [829, 378];
         appsM += `${(String.fromCharCode(112,0) == dialog_ ? l_position6.length : dialog_.length)}`;
         forwardG += `${(String.fromCharCode(107,0) == forwardG ? (combinedc ? 1 : 2) : forwardG.length)}`;
         combinedc = combinedc && forwardG.length > 99;
         l_position6.push(forwardG.length + 1);
          let adultR = String.fromCharCode(116,101,120,116,98,101,0);
         appsM += `${appsM.length}`;
         adultR += `${adultR.length - 1}`;
         appsM = `${1 >> (Math.min(3, philippinesX.length))}`;
       let fieldV: Map<any, any> = new Map([[String.fromCharCode(99,101,108,108,0),645], [String.fromCharCode(117,105,100,115,0),742], [String.fromCharCode(117,110,107,110,111,119,110,115,0),169]]);
       let orange1: Map<any, any> = new Map([[String.fromCharCode(99,98,112,104,105,0),String.fromCharCode(110,105,100,115,110,0)], [String.fromCharCode(115,116,114,117,99,116,117,114,101,0),String.fromCharCode(114,102,116,98,115,117,98,0)]]);
      while ((1 + philippinesX.length) >= 4) {
         philippinesX = `${fieldV.size / (Math.max(9, orange1.size))}`;
         break;
      }
          let arrowrightF = String.fromCharCode(117,110,114,101,102,0);
          let subbasketballplayer5 = String.fromCharCode(113,112,101,103,0);
          let shootyesgoald = String.fromCharCode(99,102,102,116,102,0);
         orange1 = new Map([[`${fieldV.size}`, fieldV.size]]);
         arrowrightF = `${shootyesgoald.length * subbasketballplayer5.length}`;
         subbasketballplayer5 = "2";
         shootyesgoald += "3";
          let nativeexe = 2;
         appsM += `${fieldV.size}`;
         nativeexe &= nativeexe;
         appsM = `${2 * appsM.length}`;
         dialog_ = `${fieldV.size >> (Math.min(1, Math.abs(orange1.size)))}`;
      suboutT += `${philippinesX.length}`;
   }
       let iconsaveimagef: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,116,120,0),false ], [String.fromCharCode(97,99,99,117,114,97,116,101,0),true ], [String.fromCharCode(97,117,116,111,114,101,115,105,122,105,110,103,0),true ]]);
       let profileA: Map<any, any> = new Map([[String.fromCharCode(108,111,99,111,0),232], [String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,0),309]]);
       let logoutT = false;
         profileA.set(`${logoutT}`, ((logoutT ? 1 : 3) + 1));
      if (1 >= iconsaveimagef.size) {
         logoutT = 68 <= iconsaveimagef.size;
      }
         iconsaveimagef.set(`${logoutT}`, ((logoutT ? 2 : 1) + 2));
         iconsaveimagef = new Map([[`${profileA.size}`, ((logoutT ? 4 : 5) / (Math.max(profileA.size, 7)))]]);
      if ((profileA.size & 1) < 1 && 1 < (iconsaveimagef.size & profileA.size)) {
         iconsaveimagef = new Map([[`${profileA.size}`, profileA.size - iconsaveimagef.size]]);
      }
         profileA.set(`${logoutT}`, (iconsaveimagef.size * (logoutT ? 1 : 3)));
      for (let i = 0; i < 3; i++) {
         logoutT = !logoutT;
      }
      let pathN = logoutT ? !logoutT : logoutT;
      do {
         logoutT = profileA.size >= iconsaveimagef.size;
         if (pathN) {
            break;
         }
      } while ((logoutT) && pathN);
       let panglel = String.fromCharCode(115,117,98,114,101,115,117,108,116,115,0);
      applicationN = logoutT;
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimePlaylistClicksAnalytics();
      
    } else {

       let interstitialz = String.fromCharCode(115,117,98,102,105,108,101,0);
       let sansB: Array<any> = [70, 672];
       let libjsijniprofilerX = true;
          let yellowredcardC = String.fromCharCode(99,118,116,121,117,118,116,111,0);
         sansB.push(sansB.length);
         yellowredcardC += "3";
         libjsijniprofilerX = sansB.length >= 78;
          let footballfieldw: Array<any> = [465, 229, 854];
          let notificationgrayQ = 5.0;
          let refreshc: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,0),172], [String.fromCharCode(100,99,97,97,100,112,99,109,0),880], [String.fromCharCode(115,116,111,114,109,98,105,114,100,0),766]]);
         sansB = [2];
         footballfieldw = [parseInt(`${notificationgrayQ}`)];
         notificationgrayQ += parseInt(`${notificationgrayQ}`) & refreshc.size;
         refreshc = new Map([[`${refreshc.size}`, parseInt(`${notificationgrayQ}`)]]);
       let disconnectedW = String.fromCharCode(115,104,97,100,111,119,115,0);
       let stylesb = String.fromCharCode(100,105,97,109,111,110,100,0);
         interstitialz += `${((libjsijniprofilerX ? 2 : 3) ^ 3)}`;
         interstitialz += `${sansB.length & interstitialz.length}`;
         stylesb += "3";
         sansB = [stylesb.length >> (Math.min(Math.abs(1), 2))];
       let libtanW = String.fromCharCode(116,101,109,112,115,0);
       let libavutilj = String.fromCharCode(110,111,111,112,0);
      suboutT += `${((historyF ? 3 : 3) | sendY.length)}`;
       let basketballiconn = 3.0;
       let footballt = true;
      while (3.63 == (basketballiconn / 1.58) && 1.58 == basketballiconn) {
         basketballiconn -= ((footballt ? 5 : 1) / (Math.max(parseInt(`${basketballiconn}`), 9)));
         break;
      }
      let turndownb = footballt ? !footballt : footballt;
      do {
         footballt = !footballt;
         if (turndownb) {
            break;
         }
      } while (turndownb && (footballt));
      for (let y = 0; y < 3; y++) {
         basketballiconn += parseInt(`${basketballiconn}`) >> (Math.min(1, Math.abs(2)));
      }
         footballt = 97.0 <= basketballiconn || !footballt;
         basketballiconn -= (parseInt(`${basketballiconn}`) + (footballt ? 3 : 5));
       let livenodatabgimge = 1;
       let sellmathbackgroundF = 3;
      applicationN = !applicationN;
      dispatch(playVod(currentVod.mini_video_vod));

      sendY += `${suboutT.length}`;
      suboutT += `${(3 + (historyF ? 3 : 1))}`;
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

   if (iconnewchatb.startsWith(`${disconnectedlogoM.size}`)) {
       let giftbuttonk = 2.0;
       let profileactivet = 2;
       let libreactnativeblob0 = String.fromCharCode(99,108,117,115,116,101,114,115,0);
       let guideC = String.fromCharCode(99,97,114,101,116,0);
       let muted2 = String.fromCharCode(104,112,101,108,0);
       let settingsz = 3;
       let loadingspinnerp = false;
      while ((profileactivet + giftbuttonk) == 4.12) {
         giftbuttonk -= (String.fromCharCode(111,0) == guideC ? guideC.length : muted2.length);
         break;
      }
      while (!muted2.startsWith(`${guideC.length}`)) {
          let iconclosewhite_ = String.fromCharCode(110,101,108,108,121,0);
          let regenge = true;
          let libffmpegkitc: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,108,101,115,0),true ], [String.fromCharCode(107,102,114,109,0),false ]]);
          let defaultpredictionprofileH = 0.0;
          let frame_d3: Map<any, any> = new Map([[String.fromCharCode(117,114,108,99,111,110,116,101,120,116,0),580], [String.fromCharCode(105,115,115,117,101,100,0),169], [String.fromCharCode(115,112,101,101,99,104,0),923]]);
         muted2 += `${muted2.length | settingsz}`;
         iconclosewhite_ += `${iconclosewhite_.length}`;
         regenge = 30.59 <= defaultpredictionprofileH;
         libffmpegkitc.set(`${defaultpredictionprofileH}`, parseInt(`${defaultpredictionprofileH}`) * iconclosewhite_.length);
         frame_d3 = new Map([[`${libffmpegkitc.size}`, ((regenge ? 2 : 4) + libffmpegkitc.size)]]);
         break;
      }
      while ((3 % (Math.max(4, muted2.length))) > 2 || (giftbuttonk - muted2.length) > 3.18) {
         muted2 += `${1 & muted2.length}`;
         break;
      }
      if (!muted2.startsWith(`${guideC.length}`)) {
         muted2 = `${profileactivet % 2}`;
      }
      while (libreactnativeblob0 != muted2) {
         muted2 += `${profileactivet}`;
         break;
      }
      while (!muted2.includes(`${settingsz}`)) {
          let matchW = false;
          let fcdaebecbcbafcdfceaaeccfeacdbn = 4;
         muted2 = `${settingsz >> (Math.min(Math.abs(parseInt(`${giftbuttonk}`)), 4))}`;
         matchW = !matchW;
         fcdaebecbcbafcdfceaaeccfeacdbn <<= Math.min(Math.abs(fcdaebecbcbafcdfceaaeccfeacdbn + 3), 1);
         break;
      }
          let statsnomoredataN = 3;
          let layoutN: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,104,101,97,100,0),273], [String.fromCharCode(117,112,112,101,114,99,97,115,101,0),319]]);
          let iconlogoutM: Map<any, any> = new Map([[String.fromCharCode(116,104,101,97,116,101,114,0),String.fromCharCode(112,114,111,99,101,115,115,111,114,115,0)], [String.fromCharCode(108,105,118,101,100,0),String.fromCharCode(99,111,109,112,97,114,101,0)], [String.fromCharCode(102,105,101,108,100,109,97,116,99,104,0),String.fromCharCode(115,117,98,115,116,97,116,101,0)]]);
         muted2 = `${iconlogoutM.size & parseInt(`${giftbuttonk}`)}`;
         statsnomoredataN <<= Math.min(2, Math.abs(statsnomoredataN));
         layoutN.set(`${statsnomoredataN}`, 3 | statsnomoredataN);
         iconlogoutM = new Map([[`${layoutN.size}`, layoutN.size + 3]]);
         guideC = `${1 >> (Math.min(4, Math.abs(parseInt(`${giftbuttonk}`))))}`;
          let episodesD = String.fromCharCode(97,109,114,119,98,0);
          let smallorangemanD = false;
          let downarrowl = true;
         giftbuttonk -= profileactivet - 2;
         episodesD = `${episodesD.length}`;
         smallorangemanD = !downarrowl;
         profileactivet /= Math.max(2, 3);
       let libyogaN = String.fromCharCode(115,101,116,98,105,116,0);
       let fillt = String.fromCharCode(118,97,114,105,97,110,99,101,120,0);
      if (profileactivet < libyogaN.length) {
         profileactivet /= Math.max(4, guideC.length);
      }
       let moviesJ = 0;
       let switch_8R = 5;
      iconnewchatb += `${libreactnativeblob0.length & iconnewchatb.length}`;
   }
       let shrink9 = 5.0;
         shrink9 *= parseInt(`${shrink9}`) << (Math.min(Math.abs(parseInt(`${shrink9}`)), 2));
         shrink9 /= Math.max(2, parseInt(`${shrink9}`) + parseInt(`${shrink9}`));
         shrink9 *= parseInt(`${shrink9}`) | 3;
      suboutT += `${disconnectedlogoM.size}`;

      

   let sportw = String.fromCharCode(112,112,105,98,95,98,103,0) == iconnewchatb;
   do {
      iconnewchatb = `${suboutT.length ^ 2}`;
      if (sportw) {
         break;
      }
   } while ((iconnewchatb.length < 4) && sportw);
   if (sendY.startsWith(`${disconnectedlogoM.size}`)) {
      disconnectedlogoM = new Map([[sendY, sendY.length]]);
   }
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeVideoClicksAnalytics();
      
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
       let topon6 = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,0);
    let iconeyeI: Array<any> = [28, 89];
    let profilei = String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,0);
    let animationss = 5.0;
    let productI = String.fromCharCode(101,114,118,101,114,0);
    let nnewinterstitialQ = String.fromCharCode(111,112,101,114,97,116,105,111,110,115,0);
    let aboutS = false;
    let splashi = String.fromCharCode(99,115,104,97,114,112,0);
    let arrowdownj = 5.0;
    let resendd = String.fromCharCode(98,114,101,97,107,105,110,103,0);
    let changeQ = 5.0;
    let statsQ = String.fromCharCode(99,99,111,117,110,116,0);
    let editr = 0;
      arrowdownj -= parseFloat(`${topon6.length << (Math.min(profilei.length, 4))}`);
       let armvab = String.fromCharCode(97,118,101,114,0);
       let footballtrophyA = 4.0;
       let tickZ = String.fromCharCode(97,99,99,101,112,116,0);
         footballtrophyA += parseInt(`${footballtrophyA}`) & tickZ.length;
         armvab += `${parseInt(`${footballtrophyA}`) | tickZ.length}`;
          let huawei3 = false;
         tickZ += `${tickZ.length}`;
      let liveshareu = tickZ == String.fromCharCode(116,107,107,0);
      do {
          let tempW = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,0);
          let fastforwardx = 1.0;
          let successr: Array<any> = [617, 33];
          let inviteG = String.fromCharCode(99,102,102,116,98,0);
         tickZ += `${tempW.length}`;
         tempW = "1";
         fastforwardx -= parseFloat(`${successr.length}`);
         successr = [3 - parseInt(`${fastforwardx}`)];
         inviteG += `${(inviteG == String.fromCharCode(75,0) ? inviteG.length : successr.length)}`;
         if (liveshareu) {
            break;
         }
      } while (liveshareu && ((5 / (Math.max(6, tickZ.length))) < 4 && (2.71 * footballtrophyA) < 5.54));
      for (let o = 0; o < 3; o++) {
         footballtrophyA /= Math.max(3, (String.fromCharCode(100,0) == armvab ? armvab.length : tickZ.length));
      }
       let analyticJ = String.fromCharCode(111,103,103,112,97,99,107,0);
         analyticJ = `${analyticJ.length}`;
      if (armvab.length >= 2) {
         armvab += `${analyticJ.length}`;
      }
      if ((footballtrophyA / 2.37) < 3.24 && (tickZ.length | 5) < 4) {
         footballtrophyA *= analyticJ.length << (Math.min(Math.abs(3), 1));
      }
      animationss -= parseFloat(`${2}`);
      animationss *= parseFloat(`${profilei.length}`);
      splashi = `${((aboutS ? 2 : 5) % (Math.max(1, 1)))}`;
   if ((2 ^ iconeyeI.length) <= 1 || (iconeyeI.length / (Math.max(9, changeQ))) <= 3.57) {
      iconeyeI = [parseInt(`${arrowdownj}`)];
   }
      animationss += (parseFloat(`${(aboutS ? 2 : 1)}`));
   let librrcm = resendd == String.fromCharCode(106,101,50,51,56,0);
   do {
       let emojiM = 1;
       let yellowredcardE = String.fromCharCode(105,110,100,101,118,115,0);
      if ((yellowredcardE.length * emojiM) < 5) {
         emojiM *= 2 * emojiM;
      }
      for (let d = 0; d < 1; d++) {
         yellowredcardE = `${1 ^ emojiM}`;
      }
         emojiM >>= Math.min(Math.abs(emojiM & 3), 5);
       let zoomr: Array<any> = [767, 476];
         yellowredcardE += `${(String.fromCharCode(88,0) == yellowredcardE ? emojiM : yellowredcardE.length)}`;
      let product7 = emojiM <= 7765847;
      do {
          let emojiZ = 0;
          let network1 = 5.0;
          let recommendation5 = 5;
         emojiM <<= Math.min(Math.abs((String.fromCharCode(107,0) == yellowredcardE ? emojiZ : yellowredcardE.length)), 3);
         emojiZ &= 2;
         network1 += parseFloat(`${2 % (Math.max(parseInt(`${network1}`), 9))}`);
         recommendation5 *= recommendation5 ^ parseInt(`${network1}`);
         if (product7) {
            break;
         }
      } while (product7 && (2 > emojiM));
      resendd = `${2 & iconeyeI.length}`;
      if (librrcm) {
         break;
      }
   } while ((1 < (2 - iconeyeI.length) && 5 < (iconeyeI.length - 2)) && librrcm);
   let teamdetailsbg7 = String.fromCharCode(50,119,54,97,100,48,106,109,109,51,0) == nnewinterstitialQ;
   do {
       let untickp = 0.0;
       let quest7: Array<any> = [String.fromCharCode(99,111,110,102,105,110,101,100,0), String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,0), String.fromCharCode(100,105,115,112,115,97,98,108,101,0)];
       let rightN = String.fromCharCode(98,97,110,110,101,114,0);
       let register_rh7 = String.fromCharCode(112,105,120,102,109,116,0);
       let shrinkV = String.fromCharCode(120,105,110,99,0);
         register_rh7 += `${(shrinkV == String.fromCharCode(103,0) ? parseInt(`${untickp}`) : shrinkV.length)}`;
         register_rh7 += `${(String.fromCharCode(111,0) == rightN ? register_rh7.length : rightN.length)}`;
      if (register_rh7 != rightN) {
         rightN = "1";
      }
         untickp /= Math.max(2, (rightN == String.fromCharCode(115,0) ? rightN.length : parseInt(`${untickp}`)));
         quest7 = [shrinkV.length];
         quest7 = [(String.fromCharCode(102,0) == shrinkV ? quest7.length : shrinkV.length)];
         register_rh7 += "1";
         rightN = `${parseInt(`${untickp}`)}`;
      if (1 < shrinkV.length) {
          let exampleimage6 = String.fromCharCode(100,101,108,97,0);
          let sportm: Map<any, any> = new Map([[String.fromCharCode(114,101,119,114,105,116,116,101,110,0),712], [String.fromCharCode(98,117,102,102,101,114,0),806]]);
         register_rh7 = `${parseInt(`${untickp}`) % (Math.max(2, shrinkV.length))}`;
         exampleimage6 += `${1 + sportm.size}`;
         sportm.set(exampleimage6, (String.fromCharCode(120,0) == exampleimage6 ? exampleimage6.length : sportm.size));
      }
         shrinkV = `${register_rh7.length | 1}`;
      while ((untickp + 2.88) > 4.83) {
         shrinkV += `${quest7.length + rightN.length}`;
         break;
      }
      while (shrinkV.length > rightN.length) {
         rightN = `${parseInt(`${untickp}`)}`;
         break;
      }
       let basketballhometeam8: Map<any, any> = new Map([[String.fromCharCode(102,117,116,117,114,101,0),String.fromCharCode(99,111,110,116,114,105,98,0)], [String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,0),String.fromCharCode(105,99,109,112,0)], [String.fromCharCode(99,111,108,108,101,99,116,111,114,0),String.fromCharCode(115,101,109,105,0)]]);
          let final_u_c = 1.0;
          let gmail4 = 0.0;
          let defaultprofilepicA = 4.0;
         shrinkV += `${register_rh7.length}`;
         final_u_c -= parseInt(`${gmail4}`) ^ parseInt(`${defaultprofilepicA}`);
         gmail4 -= parseFloat(`${parseInt(`${final_u_c}`) * 3}`);
         defaultprofilepicA *= parseInt(`${gmail4}`);
         untickp *= 1;
      nnewinterstitialQ = `${3 ^ parseInt(`${untickp}`)}`;
      if (teamdetailsbg7) {
         break;
      }
   } while ((3 <= statsQ.length && nnewinterstitialQ.length <= 3) && teamdetailsbg7);
   if (!profilei.includes(`${aboutS}`)) {
      aboutS = String.fromCharCode(73,0) == statsQ && profilei.length == 95;
   }
   while ((changeQ * 2.50) >= 3.42 && (splashi.length >> (Math.min(Math.abs(3), 2))) >= 5) {
       let watchnowbg7 = 4.0;
       let selectedD: Array<any> = [287, 181];
       let privatechatbgw: Array<any> = [String.fromCharCode(115,99,97,109,0), String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,0)];
       let moonb = true;
       let dependencyY = String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,0);
      if ((dependencyY.length % 5) < 2) {
          let neonX = 4;
          let libhermesg = String.fromCharCode(117,110,115,99,97,108,101,0);
         selectedD = [neonX + 3];
         neonX %= Math.max(libhermesg.length, 2);
         libhermesg += `${libhermesg.length / 2}`;
      }
      for (let s = 0; s < 3; s++) {
          let matchinactivew: Map<any, any> = new Map([[String.fromCharCode(101,108,105,115,105,111,110,0),897], [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,0),874], [String.fromCharCode(108,97,116,105,110,0),812]]);
          let huaweiB = String.fromCharCode(99,121,99,108,101,115,0);
         moonb = matchinactivew.size == privatechatbgw.length;
         matchinactivew.set(huaweiB, huaweiB.length & 2);
      }
      let defaultteamP = moonb ? !moonb : moonb;
      do {
         moonb = 88 >= privatechatbgw.length && dependencyY == String.fromCharCode(104,0);
         if (defaultteamP) {
            break;
         }
      } while (defaultteamP && (5 > dependencyY.length && moonb));
      let mimok = 7851522.0 <= watchnowbg7;
      do {
         watchnowbg7 *= parseFloat(`${dependencyY.length}`);
         if (mimok) {
            break;
         }
      } while ((!moonb || (3.78 - watchnowbg7) > 3.85) && mimok);
         privatechatbgw.push((dependencyY == String.fromCharCode(80,0) ? (moonb ? 4 : 2) : dependencyY.length));
      while ((5 + privatechatbgw.length) >= 5 && (privatechatbgw.length + 5) >= 1) {
         dependencyY += `${(selectedD.length & (moonb ? 1 : 4))}`;
         break;
      }
          let iconshareI = 2;
          let combined8 = String.fromCharCode(112,101,114,102,111,114,109,101,100,0);
          let notificationw: Array<any> = [828, 0, 2];
         watchnowbg7 += parseFloat(`${3}`);
         iconshareI &= 2 << (Math.min(3, combined8.length));
         combined8 += `${3 - iconshareI}`;
         notificationw.push(iconshareI << (Math.min(5, Math.abs(1))));
       let liveendmodallogoi = 2.0;
       let giftbuttonQ: Array<any> = [826, 54, 370];
      while (dependencyY.length == 3) {
          let armvai = false;
          let themeV = String.fromCharCode(110,111,114,109,97,108,105,122,101,114,0);
          let kicki = String.fromCharCode(112,97,114,107,0);
          let predictionarrow6: Array<any> = [377, 203, 711];
          let iconsaveimageE = String.fromCharCode(114,101,108,111,99,107,0);
         dependencyY += `${((armvai ? 3 : 3) | parseInt(`${liveendmodallogoi}`))}`;
         armvai = kicki.length >= themeV.length;
         themeV = `${kicki.length ^ 1}`;
         predictionarrow6 = [themeV.length + 1];
         iconsaveimageE = `${3 % (Math.max(9, iconsaveimageE.length))}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         liveendmodallogoi /= Math.max(privatechatbgw.length, 1);
      }
      if (moonb && 2 <= (selectedD.length ^ 4)) {
         selectedD = [giftbuttonQ.length ^ 2];
      }
      if (!dependencyY.includes(`${selectedD.length}`)) {
          let promotionr = String.fromCharCode(114,101,113,117,105,114,105,110,103,0);
         dependencyY += `${1 % (Math.max(3, dependencyY.length))}`;
         promotionr = `${promotionr.length / (Math.max(2, promotionr.length))}`;
      }
      for (let r = 0; r < 3; r++) {
          let disconnected5: Array<any> = [697, 36, 718];
          let description_16y: Array<any> = [11, 97, 832];
         selectedD = [2 << (Math.min(4, disconnected5.length))];
         disconnected5 = [2];
         description_16y = [description_16y.length / 1];
      }
         privatechatbgw = [privatechatbgw.length + parseInt(`${liveendmodallogoi}`)];
      changeQ *= parseInt(`${arrowdownj}`) % 3;
      break;
   }
       let with_l3j = String.fromCharCode(118,114,101,99,116,0);
       let pressureM = String.fromCharCode(101,120,112,111,114,116,0);
       let short_iqQ: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,101,114,0),true ], [String.fromCharCode(115,117,98,114,101,115,117,108,116,0),false ]]);
         short_iqQ.set(pressureM, with_l3j.length);
         pressureM = `${short_iqQ.size & 1}`;
         short_iqQ.set(`${with_l3j}`, with_l3j.length | 1);
         with_l3j = `${with_l3j.length + pressureM.length}`;
          let positionfieldx = 4.0;
          let upgraden = 1.0;
         pressureM += `${pressureM.length ^ 1}`;
         positionfieldx *= parseFloat(`${2 - parseInt(`${positionfieldx}`)}`);
         upgraden /= Math.max(parseFloat(`${3}`), 3);
      for (let z = 0; z < 3; z++) {
          let nterstitial0 = 0.0;
          let yings: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,101,114,0),String.fromCharCode(110,101,103,111,116,105,97,116,101,0)], [String.fromCharCode(99,109,121,107,0),String.fromCharCode(110,101,105,103,104,98,111,117,114,0)], [String.fromCharCode(115,101,108,101,99,116,105,111,110,0),String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,0)]]);
          let armvaA = 3;
          let iconpointscoreE: Array<any> = [734, 203, 372];
         pressureM += `${yings.size | armvaA}`;
         nterstitial0 *= iconpointscoreE.length;
         yings = new Map([[`${iconpointscoreE.length}`, parseInt(`${nterstitial0}`)]]);
         armvaA += iconpointscoreE.length;
      }
         with_l3j += `${3 - with_l3j.length}`;
         pressureM += `${pressureM.length * 2}`;
         pressureM = "2";
      arrowdownj += parseFloat(`${3}`);
   let textinputA = animationss >= 6260383.0;
   do {
      animationss -= parseFloat(`${resendd.length}`);
      if (textinputA) {
         break;
      }
   } while (((animationss / (Math.max(parseFloat(`${iconeyeI.length}`), 10))) < 3.15) && textinputA);
      changeQ -= (topon6 == String.fromCharCode(105,0) ? topon6.length : parseInt(`${arrowdownj}`));
   if (iconeyeI.length >= nnewinterstitialQ.length) {
      nnewinterstitialQ += `${profilei.length}`;
   }
       let xadsdkO = 5.0;
       let fcdaebecbcbafcdfceaaeccfeacdbU = String.fromCharCode(116,105,108,101,120,0);
         fcdaebecbcbafcdfceaaeccfeacdbU += `${fcdaebecbcbafcdfceaaeccfeacdbU.length}`;
      if (5 > fcdaebecbcbafcdfceaaeccfeacdbU.length) {
          let auto_pkT = String.fromCharCode(109,105,110,115,0);
          let videos: Array<any> = [859, 61, 618];
          let googleH = String.fromCharCode(98,101,110,101,97,116,104,0);
          let alerts = 3;
          let inouttargetredt = String.fromCharCode(98,114,97,110,99,104,0);
         xadsdkO -= (parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdbU == String.fromCharCode(69,0) ? parseInt(`${xadsdkO}`) : fcdaebecbcbafcdfceaaeccfeacdbU.length}`));
         auto_pkT = `${2 & alerts}`;
         videos.push(alerts & auto_pkT.length);
         googleH += "2";
         inouttargetredt = `${inouttargetredt.length}`;
      }
         xadsdkO += parseFloat(`${2}`);
          let iconcurrentmatchR: Array<any> = [219, 628];
          let slider6 = 0.0;
         fcdaebecbcbafcdfceaaeccfeacdbU = "1";
         iconcurrentmatchR.push(parseInt(`${slider6}`) * 3);
         slider6 -= 1 + iconcurrentmatchR.length;
      if (1.96 <= (xadsdkO * parseFloat(`${fcdaebecbcbafcdfceaaeccfeacdbU.length}`)) || (5 ^ fcdaebecbcbafcdfceaaeccfeacdbU.length) <= 3) {
         xadsdkO -= parseFloat(`${parseInt(`${xadsdkO}`) | fcdaebecbcbafcdfceaaeccfeacdbU.length}`);
      }
      let smallbrightness_ = 9841744.0 >= xadsdkO;
      do {
         xadsdkO /= Math.max(parseFloat(`${parseInt(`${xadsdkO}`) * fcdaebecbcbafcdfceaaeccfeacdbU.length}`), 5);
         if (smallbrightness_) {
            break;
         }
      } while ((2 >= (fcdaebecbcbafcdfceaaeccfeacdbU.length * parseInt(`${xadsdkO}`))) && smallbrightness_);
      statsQ += `${parseInt(`${animationss}`)}`;
   while (resendd.length > productI.length) {
       let yellows = String.fromCharCode(97,98,99,115,0);
       let reactnativejsF = String.fromCharCode(118,105,115,117,97,108,0);
          let commonO = String.fromCharCode(115,104,97,114,97,98,108,101,0);
          let libswscaleh = String.fromCharCode(104,105,103,104,105,103,104,116,0);
          let manifestE = 0;
         yellows = `${libswscaleh.length}`;
         commonO += "3";
         libswscaleh = "2";
         manifestE += 1;
      if (yellows.length <= reactnativejsF.length) {
         reactnativejsF = `${reactnativejsF.length ^ 2}`;
      }
         reactnativejsF += `${3 / (Math.max(9, reactnativejsF.length))}`;
      if (yellows.length >= 1) {
         reactnativejsF = `${reactnativejsF.length - 2}`;
      }
         yellows += `${yellows.length ^ reactnativejsF.length}`;
      let imagenetworkerrI = String.fromCharCode(117,112,121,0) == yellows;
      do {
         yellows = "3";
         if (imagenetworkerrI) {
            break;
         }
      } while (imagenetworkerrI && (4 <= reactnativejsF.length));
      resendd = `${((aboutS ? 3 : 4) * 2)}`;
      break;
   }
      nnewinterstitialQ += `${parseInt(`${animationss}`) % 2}`;
      aboutS = nnewinterstitialQ.length > 22;
      nnewinterstitialQ += `${statsQ.length | 2}`;
      productI += `${statsQ.length % (Math.max(7, parseInt(`${arrowdownj}`)))}`;
       let infoW = String.fromCharCode(115,110,97,112,104,111,116,0);
       let entry0 = 1.0;
       let iconnotificationnewe = String.fromCharCode(102,97,99,116,111,114,121,0);
      if (infoW == iconnotificationnewe) {
         iconnotificationnewe += `${3 & parseInt(`${entry0}`)}`;
      }
         infoW = `${parseInt(`${entry0}`) - 3}`;
         infoW = `${infoW.length / (Math.max(5, parseInt(`${entry0}`)))}`;
         iconnotificationnewe = `${infoW.length - 3}`;
         iconnotificationnewe += `${parseInt(`${entry0}`) / (Math.max(3, 1))}`;
      for (let d = 0; d < 2; d++) {
         entry0 -= parseFloat(`${parseInt(`${entry0}`) | iconnotificationnewe.length}`);
      }
         entry0 /= Math.max(2, parseFloat(`${infoW.length}`));
      if ((3 * iconnotificationnewe.length) < 5 || (entry0 - parseFloat(`${iconnotificationnewe.length}`)) < 4.46) {
         iconnotificationnewe = `${infoW.length}`;
      }
         entry0 += parseFloat(`${2}`);
      changeQ += profilei.length >> (Math.min(Math.abs(3), 2));
       let middleZ = 4.0;
      for (let g = 0; g < 2; g++) {
         middleZ -= parseInt(`${middleZ}`);
      }
      if (1.1 <= middleZ) {
         middleZ /= Math.max(1, parseInt(`${middleZ}`) | 2);
      }
      if ((4.8 * middleZ) < 4.62 || 4.8 < (middleZ * middleZ)) {
         middleZ += 2 & parseInt(`${middleZ}`);
      }
      statsQ = `${parseInt(`${middleZ}`) / (Math.max(resendd.length, 6))}`;
      productI += `${1 << (Math.min(1, profilei.length))}`;
   let redcirclebgH = 6245714 >= iconeyeI.length;
   do {
       let floatingg = String.fromCharCode(97,108,116,114,101,102,0);
       let eyeclose2 = 0.0;
       let policyC: Array<any> = [182, 700];
       let tempnodatagifL = 4;
          let largesoundq: Map<any, any> = new Map([[String.fromCharCode(99,112,117,105,100,0),false ], [String.fromCharCode(99,111,110,99,101,97,108,101,100,0),true ]]);
         eyeclose2 /= Math.max(floatingg.length, 4);
         largesoundq.set(`${largesoundq.size}`, largesoundq.size >> (Math.min(Math.abs(2), 4)));
      if (policyC.includes(tempnodatagifL)) {
         policyC = [policyC.length];
      }
          let ajax0: Array<any> = [749, 599, 775];
          let libjsijniprofilerP = 2;
          let gmail9 = 5;
         tempnodatagifL ^= parseInt(`${eyeclose2}`);
         ajax0 = [ajax0.length];
         libjsijniprofilerP -= ajax0.length;
         gmail9 <<= Math.min(Math.abs(2 | gmail9), 4);
      if (4 >= tempnodatagifL) {
         floatingg += `${3 & policyC.length}`;
      }
          let matchesH = 2.0;
          let libjsiy = String.fromCharCode(98,101,97,114,105,110,103,0);
         policyC = [policyC.length + 1];
         matchesH += (parseFloat(`${libjsiy == String.fromCharCode(76,0) ? parseInt(`${matchesH}`) : libjsiy.length}`));
      let distZ = 6624785 <= policyC.length;
      do {
          let flipperd = 1.0;
          let webviewn = String.fromCharCode(115,104,97,100,111,119,0);
         policyC = [(String.fromCharCode(97,0) == floatingg ? floatingg.length : tempnodatagifL)];
         flipperd *= parseInt(`${flipperd}`);
         webviewn = `${webviewn.length}`;
         if (distZ) {
            break;
         }
      } while (((4 << (Math.min(5, policyC.length))) >= 4 || 5 >= (policyC.length * 4)) && distZ);
      if ((3 << (Math.min(3, policyC.length))) < 2) {
          let episodesg = String.fromCharCode(118,98,101,122,105,101,114,0);
          let predictionbuttons = 3.0;
          let notificationgray4 = String.fromCharCode(114,101,99,111,109,112,117,116,101,0);
          let gifgoalS = String.fromCharCode(114,101,106,101,99,116,105,111,110,115,0);
         policyC.push(floatingg.length / (Math.max(gifgoalS.length, 1)));
         episodesg = `${notificationgray4.length | episodesg.length}`;
         predictionbuttons /= Math.max(2, 3);
         notificationgray4 = `${episodesg.length - 3}`;
         gifgoalS = `${(notificationgray4 == String.fromCharCode(56,0) ? parseInt(`${predictionbuttons}`) : notificationgray4.length)}`;
      }
         floatingg = `${floatingg.length}`;
       let referrerC: Map<any, any> = new Map([[String.fromCharCode(102,108,97,116,110,101,115,115,0),false ], [String.fromCharCode(100,101,99,0),true ], [String.fromCharCode(100,120,103,105,0),false ]]);
       let eyeclosee: Map<any, any> = new Map([[String.fromCharCode(118,101,99,116,0),528], [String.fromCharCode(114,101,97,108,109,0),894], [String.fromCharCode(97,100,112,99,109,0),484]]);
         floatingg += "2";
      if (!policyC.includes(eyeclose2)) {
         eyeclose2 *= 2 ^ floatingg.length;
      }
      if (2 == referrerC.size) {
         referrerC.set(`${floatingg}`, 2);
      }
      iconeyeI.push(splashi.length + 3);
      if (redcirclebgH) {
         break;
      }
   } while (redcirclebgH && (!topon6.includes(`${iconeyeI.length}`)));
   while (nnewinterstitialQ != String.fromCharCode(117,0)) {
       let short_xQ = true;
       let inactiveD = 1.0;
       let private_ey = 5.0;
         private_ey += parseFloat(`${parseInt(`${private_ey}`) | parseInt(`${inactiveD}`)}`);
      if (5.26 > (private_ey + 2.34) || short_xQ) {
          let completeo = 3;
          let panglew = false;
          let templateprocessorF = String.fromCharCode(116,114,97,110,115,99,116,105,111,110,0);
         private_ey *= parseFloat(`${3}`);
         completeo %= Math.max(templateprocessorF.length, 4);
         panglew = completeo > 20 || panglew;
         templateprocessorF = `${completeo}`;
      }
         private_ey -= (parseFloat(`${parseInt(`${private_ey}`) + (short_xQ ? 2 : 2)}`));
      while (short_xQ && (inactiveD + 5.6) == 5.47) {
         short_xQ = inactiveD > 83.25;
         break;
      }
         private_ey /= Math.max(parseFloat(`${parseInt(`${inactiveD}`) / 2}`), 5);
          let livesharew = String.fromCharCode(97,117,116,111,99,108,111,115,101,0);
          let videovarg = 4.0;
          let formT = 0;
         inactiveD -= livesharew.length;
         livesharew = `${formT << (Math.min(4, Math.abs(1)))}`;
         videovarg += parseInt(`${videovarg}`);
         formT -= formT ^ parseInt(`${videovarg}`);
       let floatingn: Array<any> = [563, 53];
      for (let f = 0; f < 2; f++) {
         private_ey -= parseFloat(`${parseInt(`${private_ey}`)}`);
      }
         short_xQ = floatingn.includes(inactiveD);
      productI = `${iconeyeI.length >> (Math.min(Math.abs(3), 4))}`;
      break;
   }
       let loadingspinnerw = String.fromCharCode(110,101,120,116,0);
      while (loadingspinnerw == String.fromCharCode(108,0)) {
         loadingspinnerw += `${loadingspinnerw.length + 2}`;
         break;
      }
      let qaagu = 7246493 <= loadingspinnerw.length;
      do {
         loadingspinnerw = `${loadingspinnerw.length ^ loadingspinnerw.length}`;
         if (qaagu) {
            break;
         }
      } while (qaagu && (loadingspinnerw.length >= 3));
      for (let q = 0; q < 2; q++) {
         loadingspinnerw += `${loadingspinnerw.length}`;
      }
      iconeyeI = [editr];
   let themey = productI == String.fromCharCode(108,108,50,111,97,0);
   do {
      productI = `${2 << (Math.min(5, profilei.length))}`;
      if (themey) {
         break;
      }
   } while (themey && (productI.length == iconeyeI.length));
   let modet = productI.length >= 9630913;
   do {
      productI = `${(profilei == String.fromCharCode(108,0) ? parseInt(`${changeQ}`) : profilei.length)}`;
      if (modet) {
         break;
      }
   } while (modet && (aboutS && productI.length > 1));

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
       let penaltyshootnogoalu = false;
    let storez = String.fromCharCode(102,105,108,101,112,97,116,104,0);
    let matchinactivep = true;
    let securityP = false;
    let iconnotificationnewW = true;
    let weibom = 5.0;
    let roboto7 = 5.0;
    let downloadB = String.fromCharCode(97,100,109,105,110,0);
    let launcherM = 2.0;
    let mbbanneru = String.fromCharCode(114,101,108,111,97,100,0);
    let renderO: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,101,99,117,116,105,118,101,0),373], [String.fromCharCode(97,116,116,114,97,99,116,0),362]]);
    let airbnbstarK = String.fromCharCode(109,111,99,107,105,110,103,0);
    let confirmationM: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,0),4], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,0),607]]);
    let main_yt = 2.0;
    let volume8: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,114,0),98], [String.fromCharCode(102,111,114,119,97,114,100,115,0),176]]);
    let fastforwardl = String.fromCharCode(99,111,108,111,110,0);
    let libfabricjni6 = String.fromCharCode(99,111,109,112,111,110,101,110,116,115,0);
   while (storez.length > 4) {
      matchinactivep = 41 > downloadB.length;
      break;
   }
      iconnotificationnewW = downloadB.length < 93;

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   while (!securityP) {
      matchinactivep = (!matchinactivep ? securityP : !matchinactivep);
      break;
   }
      roboto7 /= Math.max(mbbanneru.length, 2);
        

      mbbanneru += `${renderO.size ^ parseInt(`${roboto7}`)}`;
   if (roboto7 > weibom) {
       let refreshZ = 0.0;
       let classesF = false;
       let activeT = true;
          let largebrightnessi = 1;
          let yellowanimationlivem = true;
          let traminiC: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,0),337], [String.fromCharCode(115,105,103,101,120,112,0),636], [String.fromCharCode(114,101,97,100,99,98,0),201]]);
         refreshZ -= parseInt(`${refreshZ}`) | 1;
         largebrightnessi <<= Math.min(2, Math.abs(1));
         yellowanimationlivem = null == traminiC.get(`${yellowanimationlivem}`);
         traminiC.set(`${yellowanimationlivem}`, 1);
      let predictionbannersharedv = activeT ? !activeT : activeT;
      do {
         activeT = (classesF ? activeT : classesF);
         if (predictionbannersharedv) {
            break;
         }
      } while ((classesF) && predictionbannersharedv);
      while (activeT) {
         refreshZ *= ((activeT ? 3 : 2) % (Math.max(3, (classesF ? 4 : 2))));
         break;
      }
         activeT = !activeT;
         refreshZ += 1 << (Math.min(Math.abs(parseInt(`${refreshZ}`)), 2));
      weibom += parseInt(`${weibom}`) << (Math.min(1, Math.abs(1)));
   }
        

   if ((roboto7 - 1.37) <= 2.54 && !securityP) {
       let final_tcn = true;
       let shootU = 0.0;
       let become4 = String.fromCharCode(112,97,103,101,110,111,0);
      if ((shootU + 4.28) > 5.89 && 4.28 > shootU) {
          let cornerj: Map<any, any> = new Map([[String.fromCharCode(114,101,102,101,114,0),299], [String.fromCharCode(102,116,101,108,108,0),598], [String.fromCharCode(111,110,97,118,99,0),584]]);
          let iconarrowrightblackS = String.fromCharCode(101,114,97,115,101,0);
          let matchdetailbgv = String.fromCharCode(100,114,97,119,97,98,108,101,115,0);
          let othermatchdetailbg6 = 4.0;
          let iconedit2 = 4.0;
         shootU += become4.length >> (Math.min(Math.abs(2), 4));
         cornerj.set(`${othermatchdetailbg6}`, 3 / (Math.max(10, matchdetailbgv.length)));
         iconarrowrightblackS = `${parseInt(`${othermatchdetailbg6}`)}`;
         matchdetailbgv += `${matchdetailbgv.length + 3}`;
         iconedit2 += parseInt(`${othermatchdetailbg6}`) + 2;
      }
      if (become4.includes(`${shootU}`)) {
         become4 += `${become4.length % (Math.max(2, parseInt(`${shootU}`)))}`;
      }
      if (!become4.includes(`${final_tcn}`)) {
          let gifgoalo: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,115,0),String.fromCharCode(102,114,97,103,109,101,110,116,0)], [String.fromCharCode(97,117,116,104,111,114,115,0),String.fromCharCode(107,101,121,119,111,114,100,0)], [String.fromCharCode(102,116,115,116,111,107,0),String.fromCharCode(116,114,117,115,116,101,100,0)]]);
          let nativeex2 = String.fromCharCode(117,115,101,114,115,0);
          let completed = String.fromCharCode(97,99,116,97,98,0);
          let livesharej = String.fromCharCode(115,111,100,101,97,108,108,111,99,0);
         final_tcn = (nativeex2.length - gifgoalo.size) == 19;
         gifgoalo = new Map([[livesharej, (completed == String.fromCharCode(53,0) ? completed.length : livesharej.length)]]);
         nativeex2 = `${completed.length}`;
      }
      let values6 = final_tcn ? !final_tcn : final_tcn;
      do {
         final_tcn = 62 == become4.length;
         if (values6) {
            break;
         }
      } while (((shootU - 3.63) <= 3.50 || final_tcn) && values6);
      let libyogam = final_tcn ? !final_tcn : final_tcn;
      do {
         final_tcn = 72.94 >= shootU && become4 == String.fromCharCode(120,0);
         if (libyogam) {
            break;
         }
      } while (libyogam && ((shootU - 1.84) <= 3.18));
         shootU *= parseInt(`${shootU}`) / 3;
         shootU += parseInt(`${shootU}`);
       let moreY = String.fromCharCode(101,120,116,114,99,0);
       let placements = String.fromCharCode(102,108,111,97,116,115,0);
      if (moreY.length < 1) {
         become4 = `${become4.length}`;
      }
      roboto7 += (String.fromCharCode(113,0) == become4 ? (iconnotificationnewW ? 3 : 1) : become4.length);
   }
   while ((2.90 + launcherM) <= 1.60) {
       let overt = true;
       let phoneshareJ = String.fromCharCode(102,105,103,117,114,101,0);
      while (overt && 4 > phoneshareJ.length) {
          let predictionbuttonC = String.fromCharCode(112,97,115,115,99,111,100,101,0);
          let largebrightnessJ = String.fromCharCode(106,105,110,99,108,117,100,101,0);
          let hovery: Array<any> = [633, 613, 301];
          let s_center1 = String.fromCharCode(112,114,101,102,97,99,101,0);
         overt = predictionbuttonC == String.fromCharCode(89,0);
         predictionbuttonC = `${(largebrightnessJ == String.fromCharCode(111,0) ? largebrightnessJ.length : hovery.length)}`;
         hovery.push(hovery.length);
         s_center1 = `${s_center1.length}`;
         break;
      }
         phoneshareJ = "3";
      for (let z = 0; z < 2; z++) {
         overt = phoneshareJ.startsWith(`${overt}`);
      }
         phoneshareJ += `${(phoneshareJ == String.fromCharCode(65,0) ? (overt ? 3 : 1) : phoneshareJ.length)}`;
          let circley = String.fromCharCode(116,114,97,105,110,0);
          let backiconmaskX = 4.0;
          let close2 = String.fromCharCode(102,111,110,116,0);
         overt = (parseFloat(`${circley.length}`) - backiconmaskX) <= 9.25;
         circley = `${close2.length / (Math.max(1, 4))}`;
         backiconmaskX += (parseFloat(`${close2 == String.fromCharCode(112,0) ? close2.length : close2.length}`));
          let rewardvideoN = 2.0;
          let appleV: Map<any, any> = new Map([[String.fromCharCode(106,114,101,118,100,99,116,0),String.fromCharCode(115,97,118,101,109,101,100,105,97,0)], [String.fromCharCode(98,117,102,102,101,114,101,100,0),String.fromCharCode(102,105,102,111,0)], [String.fromCharCode(102,105,108,101,110,97,109,101,115,0),String.fromCharCode(98,105,116,115,0)]]);
         overt = phoneshareJ.length == parseInt(`${rewardvideoN}`);
         rewardvideoN *= appleV.size;
         appleV.set(`${appleV.size}`, 3);
      matchinactivep = !matchinactivep;
      break;
   }
        

      penaltyshootnogoalu = !matchinactivep || mbbanneru.length <= 22;
   if (!mbbanneru.includes(`${launcherM}`)) {
      mbbanneru += `${parseInt(`${roboto7}`)}`;
   }

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

   for (let t = 0; t < 2; t++) {
      storez = `${1 * parseInt(`${weibom}`)}`;
   }
   let forwardH = 8973601.0 <= weibom;
   do {
      weibom -= ((penaltyshootnogoalu ? 5 : 3) * parseInt(`${roboto7}`));
      if (forwardH) {
         break;
      }
   } while ((!iconnotificationnewW) && forwardH);

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

       let toponu = 0;
         toponu &= toponu;
          let gemfiles: Map<any, any> = new Map([[String.fromCharCode(112,105,120,101,108,117,116,105,108,115,0),400], [String.fromCharCode(108,111,103,111,0),286], [String.fromCharCode(109,105,100,110,105,103,104,116,0),554]]);
          let upgradeY = String.fromCharCode(97,118,97,116,97,114,0);
          let sendU = 1.0;
         toponu |= upgradeY.length;
         gemfiles = new Map([[`${gemfiles.size}`, parseInt(`${sendU}`) * gemfiles.size]]);
         upgradeY = `${parseInt(`${sendU}`)}`;
      if (toponu <= toponu) {
         toponu |= 1 & toponu;
      }
      penaltyshootnogoalu = (renderO.size >> (Math.min(airbnbstarK.length, 3))) > 69;
   for (let y = 0; y < 1; y++) {
      iconnotificationnewW = airbnbstarK.length <= 80;
   }


        if (fileExist) {

   for (let z = 0; z < 2; z++) {
      launcherM *= parseFloat(`${parseInt(`${weibom}`) & 1}`);
   }
      launcherM /= Math.max(1, parseFloat(`${1}`));
          const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

   if (!iconnotificationnewW) {
      airbnbstarK += `${2 + parseInt(`${weibom}`)}`;
   }
   if (Array.from(renderO.keys()).includes(`${roboto7}`)) {
      renderO = new Map([[downloadB, ((matchinactivep ? 5 : 2) / 3)]]);
   }
          

      iconnotificationnewW = penaltyshootnogoalu || !matchinactivep;
      iconnotificationnewW = (iconnotificationnewW ? !matchinactivep : iconnotificationnewW);
          if (!fileIsEmpty) {

      roboto7 += 1;
   for (let f = 0; f < 2; f++) {
      matchinactivep = weibom == 83.93;
   }
            setMiniVodUrl(`${fileLocation}`);
          } else {

      confirmationM = new Map([[`${penaltyshootnogoalu}`, ((penaltyshootnogoalu ? 4 : 4) % (Math.max(parseInt(`${roboto7}`), 5)))]]);
       let nextL = String.fromCharCode(115,107,105,112,105,110,116,114,97,0);
       let imagenetworkerrC = 5;
      if (nextL.length == 1) {
          let rewardvideo9: Map<any, any> = new Map([[String.fromCharCode(99,97,110,116,0),String.fromCharCode(99,111,100,101,99,105,100,0)], [String.fromCharCode(114,116,114,101,101,99,104,101,99,107,0),String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,0)], [String.fromCharCode(109,97,99,114,111,0),String.fromCharCode(102,105,114,101,98,97,115,101,0)]]);
          let unfillD = 4;
          let airbnbstarselectedX = 5;
          let iconwechatC = true;
          let chinasame5 = true;
         nextL = `${((iconwechatC ? 5 : 4) << (Math.min(Math.abs(airbnbstarselectedX), 2)))}`;
         rewardvideo9 = new Map([[`${unfillD}`, 1]]);
         unfillD ^= 2;
         airbnbstarselectedX *= (unfillD / (Math.max(9, (chinasame5 ? 4 : 1))));
         iconwechatC = null == rewardvideo9.get(`${unfillD}`);
         chinasame5 = unfillD <= 83;
      }
      if (1 < (2 ^ imagenetworkerrC)) {
         nextL += `${nextL.length / 2}`;
      }
      while (4 == (imagenetworkerrC - nextL.length)) {
          let libfbS = String.fromCharCode(115,117,98,116,105,116,108,101,115,0);
          let componentA = String.fromCharCode(101,120,104,97,117,115,116,0);
          let humidityQ = 4;
         nextL = "1";
         libfbS = `${(libfbS == String.fromCharCode(115,0) ? libfbS.length : componentA.length)}`;
         componentA = `${componentA.length}`;
         humidityQ ^= componentA.length * humidityQ;
         break;
      }
         imagenetworkerrC |= nextL.length % 3;
      for (let w = 0; w < 2; w++) {
         nextL += `${nextL.length}`;
      }
       let loadingspinner9 = String.fromCharCode(99,116,120,112,0);
       let league5 = String.fromCharCode(112,108,117,114,97,108,115,0);
      iconnotificationnewW = (74 > ((!iconnotificationnewW ? 74 : confirmationM.size) | confirmationM.size));
            

       let iconnewchatt = String.fromCharCode(108,97,99,105,110,103,0);
         iconnewchatt += `${iconnewchatt.length % (Math.max(7, iconnewchatt.length))}`;
      let iconbellactiveq = iconnewchatt.length <= 8108272;
      do {
          let baselinev = 2.0;
          let targetq = 2.0;
          let halffieldimage3 = 0.0;
         iconnewchatt = `${parseInt(`${targetq}`)}`;
         baselinev *= parseFloat(`${3 / (Math.max(1, parseInt(`${halffieldimage3}`)))}`);
         halffieldimage3 /= Math.max(1, parseInt(`${baselinev}`));
         if (iconbellactiveq) {
            break;
         }
      } while (iconbellactiveq && (1 >= iconnewchatt.length || iconnewchatt == String.fromCharCode(52,0)));
      let activityX = String.fromCharCode(118,100,50,122,105,99,57,105,57,116,0) == iconnewchatt;
      do {
         iconnewchatt += `${iconnewchatt.length / (Math.max(1, 10))}`;
         if (activityX) {
            break;
         }
      } while ((iconnewchatt != String.fromCharCode(97,0)) && activityX);
      confirmationM.set(`${penaltyshootnogoalu}`, ((penaltyshootnogoalu ? 2 : 3)));
      storez += `${storez.length}`;
            setMiniVodUrl(currentVod.mini_video_origin_video_url)
          }
        } else {

      securityP = matchinactivep && mbbanneru.length < 65;
      main_yt += ((penaltyshootnogoalu ? 1 : 5) & storez.length);
          

       let orangedownarrowI = 4.0;
       let moreW = String.fromCharCode(102,114,97,112,115,0);
       let indicatork = 3;
         indicatork += 2;
       let stepg: Array<any> = [467, 931];
       let turndownV: Array<any> = [240, 317];
         indicatork += indicatork % 2;
      while (orangedownarrowI > 3.86) {
         orangedownarrowI -= parseFloat(`${stepg.length}`);
         break;
      }
      let stringJ = 7134562.0 <= orangedownarrowI;
      do {
         orangedownarrowI -= parseFloat(`${moreW.length ^ 1}`);
         if (stringJ) {
            break;
         }
      } while ((5.18 >= (indicatork - orangedownarrowI)) && stringJ);
      while ((moreW.length | 5) > 3) {
          let fullp = 3;
          let suggestionU = String.fromCharCode(114,101,99,118,102,114,111,109,0);
          let clubB: Array<any> = [96, 932];
          let megaphoneU: Array<any> = [String.fromCharCode(114,101,116,114,105,101,115,0), String.fromCharCode(102,111,114,101,105,103,110,0)];
         moreW = `${turndownV.length >> (Math.min(clubB.length, 1))}`;
         fullp /= Math.max(1 / (Math.max(5, suggestionU.length)), 5);
         suggestionU = `${megaphoneU.length}`;
         clubB = [megaphoneU.length >> (Math.min(Math.abs(3), 4))];
         break;
      }
          let iconplayF = false;
          let circlep = String.fromCharCode(115,97,109,112,108,101,115,0);
         orangedownarrowI /= Math.max((parseFloat(`${(iconplayF ? 1 : 2) & parseInt(`${orangedownarrowI}`)}`)), 3);
         iconplayF = 80 <= circlep.length || circlep == String.fromCharCode(112,0);
      for (let u = 0; u < 3; u++) {
          let scrollviewk = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0);
          let sellmathbackground4 = 5.0;
          let topons: Array<any> = [750, 985, 305];
          let imagenomoredataU = 4.0;
          let philippinesN = String.fromCharCode(99,111,110,116,101,110,116,115,0);
         orangedownarrowI *= parseFloat(`${moreW.length}`);
         scrollviewk += "1";
         sellmathbackground4 *= parseInt(`${imagenomoredataU}`);
         topons = [(String.fromCharCode(82,0) == philippinesN ? parseInt(`${sellmathbackground4}`) : philippinesN.length)];
         imagenomoredataU += parseFloat(`${3}`);
      }
       let store_ = 0;
       let questl = 3;
      downloadB = `${parseInt(`${orangedownarrowI}`)}`;
   for (let r = 0; r < 2; r++) {
       let modityj: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,100,114,111,112,0),296], [String.fromCharCode(107,97,110,110,97,0),819]]);
       let comment0: Map<any, any> = new Map([[String.fromCharCode(98,108,97,107,101,98,0),true ], [String.fromCharCode(108,111,99,97,108,101,0),true ]]);
      for (let v = 0; v < 1; v++) {
         comment0.set(`${modityj.size}`, modityj.size);
      }
      let feedbackL = comment0.size <= 8864294;
      do {
         comment0.set(`${comment0.size}`, modityj.size ^ comment0.size);
         if (feedbackL) {
            break;
         }
      } while (feedbackL && (modityj.size == 3));
      while (2 >= (modityj.size / (Math.max(5, 8))) || (5 / (Math.max(6, comment0.size))) >= 5) {
         comment0 = new Map([[`${modityj.size}`, modityj.size]]);
         break;
      }
         comment0.set(`${modityj.size}`, 1);
      let regengd = comment0.size >= 9719558;
      do {
         comment0.set(`${modityj.size}`, modityj.size << (Math.min(Math.abs(3), 1)));
         if (regengd) {
            break;
         }
      } while (((2 + comment0.size) == 4 || 2 == (modityj.size + comment0.size)) && regengd);
      let subtextX = 5533654 <= comment0.size;
      do {
         comment0.set(`${comment0.size}`, comment0.size << (Math.min(Math.abs(3), 2)));
         if (subtextX) {
            break;
         }
      } while (subtextX && (1 <= (comment0.size << (Math.min(5, Math.abs(modityj.size)))) || 2 <= (1 << (Math.min(4, Math.abs(comment0.size))))));
      roboto7 /= Math.max((modityj.size >> (Math.min(3, Math.abs((matchinactivep ? 4 : 2))))), 3);
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
       let sellu = String.fromCharCode(115,117,98,108,101,110,103,116,104,0);
    let pingt = String.fromCharCode(115,116,97,116,101,115,0);
    let applicationP = 5.0;
    let circleU = 2.0;
    let scoreR = String.fromCharCode(103,101,111,99,111,100,101,114,0);
    let ping5 = String.fromCharCode(110,111,100,101,115,101,116,0);
    let indicatort = 0.0;
    let floaterj = 1.0;
    let bggradientr: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,0),816], [String.fromCharCode(102,117,114,116,104,101,114,0),799]]);
    let selectedC = false;
    let iconclosewhitewithbgW = 5.0;
    let ticked_ = 5.0;
    let jingdongr: Array<any> = [811, 382, 440];
    let scheduleY = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,0);
    let activityp = 5.0;
    let macauJ = 3.0;
   let ying8 = scoreR.length <= 5604475;
   do {
      scoreR = `${2 - parseInt(`${indicatort}`)}`;
      if (ying8) {
         break;
      }
   } while ((1 >= scoreR.length) && ying8);
   while (2 >= pingt.length) {
       let defaultbasketballbgX: Map<any, any> = new Map([[String.fromCharCode(101,115,99,97,112,101,115,0),String.fromCharCode(109,111,100,101,99,111,110,116,0)], [String.fromCharCode(100,97,118,100,0),String.fromCharCode(109,112,101,103,97,117,100,105,111,0)], [String.fromCharCode(99,108,105,112,102,0),String.fromCharCode(101,121,99,104,97,105,110,0)]]);
       let reactnavigationP = String.fromCharCode(102,100,99,116,120,0);
       let routerM = 4;
         routerM ^= defaultbasketballbgX.size;
         routerM &= 1 * defaultbasketballbgX.size;
          let navigationw = true;
          let iconwatchf = 2;
         routerM ^= reactnavigationP.length;
         navigationw = 11 < iconwatchf;
         iconwatchf *= (iconwatchf | (navigationw ? 1 : 2));
      let disconnectedlogoz = reactnavigationP.length >= 8919088;
      do {
          let description_dz = String.fromCharCode(116,105,112,0);
          let hookJ = String.fromCharCode(116,101,108,101,103,114,97,0);
          let commentJ = String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,0);
          let mbsplashr: Array<any> = [String.fromCharCode(115,116,121,108,101,0), String.fromCharCode(98,117,103,115,0), String.fromCharCode(112,114,101,102,101,114,0)];
          let anneri: Array<any> = [731, 657];
         reactnavigationP += "3";
         description_dz += `${(description_dz == String.fromCharCode(55,0) ? description_dz.length : hookJ.length)}`;
         hookJ += `${anneri.length / (Math.max(2, hookJ.length))}`;
         commentJ = `${anneri.length / 2}`;
         mbsplashr.push(3);
         if (disconnectedlogoz) {
            break;
         }
      } while (disconnectedlogoz && (2 >= (defaultbasketballbgX.size >> (Math.min(Math.abs(1), 2)))));
         reactnavigationP += `${routerM}`;
      let liveendmodallogot = 5296246 <= reactnavigationP.length;
      do {
         reactnavigationP = `${1 & routerM}`;
         if (liveendmodallogot) {
            break;
         }
      } while (liveendmodallogot && (!reactnavigationP.includes(`${defaultbasketballbgX.size}`)));
      while (5 <= (routerM / (Math.max(reactnavigationP.length, 10))) || (routerM / 5) <= 5) {
         routerM &= routerM % (Math.max(2, 1));
         break;
      }
         routerM %= Math.max(4, reactnavigationP.length << (Math.min(2, Math.abs(defaultbasketballbgX.size))));
      if (!reactnavigationP.includes(`${routerM}`)) {
         reactnavigationP = `${defaultbasketballbgX.size >> (Math.min(reactnavigationP.length, 2))}`;
      }
      pingt += `${pingt.length}`;
      break;
   }
   if (4 == (ping5.length * parseInt(`${applicationP}`)) && (ping5.length % 4) == 3) {
       let iconchatsendN = String.fromCharCode(102,108,97,99,101,110,99,0);
       let historyj = String.fromCharCode(109,105,109,105,99,0);
       let iconpipshrinkL: Array<any> = [764, 94];
      if (2 == (iconpipshrinkL.length / (Math.max(historyj.length, 4))) || 2 == (iconpipshrinkL.length / (Math.max(historyj.length, 2)))) {
         historyj = `${(iconchatsendN == String.fromCharCode(53,0) ? historyj.length : iconchatsendN.length)}`;
      }
       let projectv = 3.0;
       let sharedX = 2.0;
          let libsgcoreT = String.fromCharCode(99,100,102,116,0);
          let defaultbasketballbg_: Map<any, any> = new Map([[String.fromCharCode(97,115,107,105,110,103,0),33], [String.fromCharCode(112,114,111,118,105,100,101,0),632]]);
         projectv += parseFloat(`${libsgcoreT.length - 1}`);
         libsgcoreT += `${defaultbasketballbg_.size}`;
         defaultbasketballbg_.set(`${defaultbasketballbg_.size}`, 2 + defaultbasketballbg_.size);
         projectv /= Math.max(parseFloat(`${historyj.length / (Math.max(2, iconpipshrinkL.length))}`), 3);
      for (let a = 0; a < 1; a++) {
         iconchatsendN = `${(iconchatsendN == String.fromCharCode(49,0) ? historyj.length : iconchatsendN.length)}`;
      }
      if ((2 - historyj.length) > 5) {
          let downloaderh: Map<any, any> = new Map([[String.fromCharCode(105,110,102,108,105,103,104,116,0),942], [String.fromCharCode(101,110,108,97,114,103,101,0),330]]);
          let profileinactivee = true;
          let private_0X = String.fromCharCode(97,99,113,117,97,110,116,0);
          let iconwatchnowP = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0);
          let toponn = 1.0;
         historyj += `${iconchatsendN.length}`;
         downloaderh.set(iconwatchnowP, 1 & downloaderh.size);
         profileinactivee = 42 >= downloaderh.size;
         private_0X += `${2 - downloaderh.size}`;
         iconwatchnowP += `${downloaderh.size / (Math.max(6, private_0X.length))}`;
         toponn *= (private_0X == String.fromCharCode(97,0) ? private_0X.length : iconwatchnowP.length);
      }
         historyj = `${parseInt(`${sharedX}`) / 2}`;
         iconpipshrinkL.push(3);
         historyj = `${historyj.length / 2}`;
      ping5 += `${parseInt(`${iconclosewhitewithbgW}`) / 2}`;
   }
   while (3 > (5 + bggradientr.size) || !selectedC) {
      selectedC = bggradientr.size == scoreR.length;
      break;
   }
   for (let u = 0; u < 2; u++) {
      sellu = `${ping5.length ^ 2}`;
   }
   while (2.64 >= indicatort) {
      selectedC = iconclosewhitewithbgW < circleU;
      break;
   }
   while (bggradientr.get(`${floaterj}`) != null) {
       let downloadingA: Array<any> = [93, 187, 602];
       let l_titleo: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,101,0),418], [String.fromCharCode(105,110,116,101,114,0),991]]);
       let penaltyshoota = String.fromCharCode(105,102,105,108,116,101,114,0);
       let runtimeschedulerU = String.fromCharCode(111,108,100,0);
      while (runtimeschedulerU != String.fromCharCode(69,0) && penaltyshoota.length >= 3) {
          let whitevideolive1 = String.fromCharCode(99,104,97,114,115,0);
          let vietnamT = String.fromCharCode(101,120,116,101,110,115,105,111,110,115,0);
          let videon = String.fromCharCode(114,101,112,108,97,121,103,97,105,110,0);
         runtimeschedulerU = `${runtimeschedulerU.length}`;
         whitevideolive1 = `${vietnamT.length - 3}`;
         vietnamT += `${videon.length % (Math.max(whitevideolive1.length, 10))}`;
         videon += `${vietnamT.length / (Math.max(whitevideolive1.length, 3))}`;
         break;
      }
      for (let r = 0; r < 3; r++) {
         penaltyshoota += `${runtimeschedulerU.length / (Math.max(penaltyshoota.length, 6))}`;
      }
          let tempZ = String.fromCharCode(114,105,99,104,0);
          let basketballdetailsbge = String.fromCharCode(100,105,115,109,105,115,115,105,110,103,0);
         runtimeschedulerU += "1";
         tempZ = `${basketballdetailsbge.length}`;
         basketballdetailsbge += `${basketballdetailsbge.length / 2}`;
         l_titleo.set(`${penaltyshoota}`, penaltyshoota.length % (Math.max(1, l_titleo.size)));
         penaltyshoota = "1";
      if ((penaltyshoota.length & 4) >= 2) {
         downloadingA.push(runtimeschedulerU.length);
      }
         runtimeschedulerU = `${3 - penaltyshoota.length}`;
         downloadingA.push(runtimeschedulerU.length ^ penaltyshoota.length);
         l_titleo = new Map([[`${downloadingA.length}`, runtimeschedulerU.length | downloadingA.length]]);
         l_titleo = new Map([[`${l_titleo.size}`, 3]]);
         l_titleo = new Map([[`${l_titleo.size}`, 3 & downloadingA.length]]);
         penaltyshoota = `${l_titleo.size + runtimeschedulerU.length}`;
      bggradientr.set(`${selectedC}`, 1);
      break;
   }
   if (sellu.length <= pingt.length) {
      pingt += "1";
   }
      iconclosewhitewithbgW /= Math.max(5, (pingt == String.fromCharCode(121,0) ? sellu.length : pingt.length));
       let home1: Array<any> = [108, 833, 368];
       let package_fv = String.fromCharCode(97,116,111,109,105,99,115,0);
       let libreacts = String.fromCharCode(98,108,117,114,108,101,115,115,0);
      while (package_fv.length <= home1.length) {
         home1.push((String.fromCharCode(95,0) == package_fv ? package_fv.length : home1.length));
         break;
      }
         package_fv += `${2 + home1.length}`;
         home1 = [2];
         home1.push(package_fv.length / (Math.max(1, home1.length)));
       let libreactperfloggerjniA = String.fromCharCode(115,108,105,112,112,97,103,101,0);
      while (5 <= (home1.length & 4) || 4 <= (libreactperfloggerjniA.length & home1.length)) {
         libreactperfloggerjniA = "2";
         break;
      }
       let tooltipsO = String.fromCharCode(121,111,117,114,0);
       let rewardvideoF = String.fromCharCode(112,107,112,107,101,121,0);
       let graphr = String.fromCharCode(108,101,102,116,0);
         libreactperfloggerjniA += `${(String.fromCharCode(107,0) == package_fv ? package_fv.length : libreacts.length)}`;
      circleU /= Math.max(3, 2);
      selectedC = !selectedC;
   let launchA = bggradientr.size >= 8917150;
   do {
      bggradientr = new Map([[scoreR, 2 << (Math.min(4, Math.abs(parseInt(`${circleU}`))))]]);
      if (launchA) {
         break;
      }
   } while (launchA && (bggradientr.size <= 1 && (1 + bggradientr.size) <= 1));
       let bgvipxvod2: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,114,100,0),15], [String.fromCharCode(100,105,108,97,116,101,0),466], [String.fromCharCode(105,104,116,120,0),74]]);
       let libreactperfloggerjnip = 0;
          let mutedG = String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,0);
         bgvipxvod2.set(`${libreactperfloggerjnip}`, libreactperfloggerjnip / 3);
         mutedG = `${(mutedG == String.fromCharCode(111,0) ? mutedG.length : mutedG.length)}`;
         libreactperfloggerjnip *= bgvipxvod2.size;
       let smallbrightnessQ = 3.0;
         libreactperfloggerjnip %= Math.max(4, parseInt(`${smallbrightnessQ}`));
         libreactperfloggerjnip <<= Math.min(Math.abs(bgvipxvod2.size), 4);
      let leaguedetailsbgN = libreactperfloggerjnip <= 5888033;
      do {
         libreactperfloggerjnip += 2 << (Math.min(5, Math.abs(parseInt(`${smallbrightnessQ}`))));
         if (leaguedetailsbgN) {
            break;
         }
      } while ((3 == (1 - libreactperfloggerjnip) || (1 | libreactperfloggerjnip) == 2) && leaguedetailsbgN);
      circleU /= Math.max(parseInt(`${iconclosewhitewithbgW}`), 4);
      indicatort -= parseInt(`${applicationP}`) << (Math.min(Math.abs(3), 3));
      ping5 += `${(String.fromCharCode(54,0) == scoreR ? (selectedC ? 4 : 1) : scoreR.length)}`;
       let awayiconX: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,116,97,103,0),true ], [String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,0),false ], [String.fromCharCode(106,97,99,111,98,105,97,110,0),false ]]);
       let themel = false;
         awayiconX = new Map([[`${awayiconX.size}`, awayiconX.size]]);
      if (awayiconX.size >= 5 && 4 >= (awayiconX.size - 5)) {
         themel = awayiconX.size >= 97 && themel;
      }
      for (let f = 0; f < 1; f++) {
         awayiconX.set(`${themel}`, (1 * (themel ? 3 : 4)));
      }
      for (let z = 0; z < 2; z++) {
         awayiconX.set(`${themel}`, awayiconX.size);
      }
         awayiconX.set(`${themel}`, ((themel ? 3 : 1) << (Math.min(Math.abs(awayiconX.size), 4))));
         awayiconX.set(`${themel}`, awayiconX.size / 1);
      floaterj -= 3 ^ bggradientr.size;

    setVideoReadyIos(true)

   for (let q = 0; q < 2; q++) {
      scoreR += `${sellu.length}`;
   }
   if (5.15 <= circleU) {
      circleU += 3 * parseInt(`${iconclosewhitewithbgW}`);
   }
       let libmapbufferjnig = 5.0;
       let vipsport3: Array<any> = [String.fromCharCode(102,116,118,118,101,114,116,108,105,110,101,0), String.fromCharCode(98,97,99,107,115,108,97,115,104,0)];
      if (libmapbufferjnig >= 5.56) {
         libmapbufferjnig -= parseFloat(`${parseInt(`${libmapbufferjnig}`) << (Math.min(vipsport3.length, 3))}`);
      }
          let kleving = false;
          let predictions = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,0);
         libmapbufferjnig -= parseFloat(`${predictions.length / (Math.max(3, parseInt(`${libmapbufferjnig}`)))}`);
         kleving = !kleving;
         predictions += `${((kleving ? 5 : 1))}`;
         libmapbufferjnig /= Math.max(4, parseFloat(`${parseInt(`${libmapbufferjnig}`)}`));
      for (let m = 0; m < 3; m++) {
         libmapbufferjnig += parseFloat(`${2}`);
      }
      let sharewhite7 = 6022616 <= vipsport3.length;
      do {
         vipsport3.push(vipsport3.length / 1);
         if (sharewhite7) {
            break;
         }
      } while ((libmapbufferjnig >= 1.0) && sharewhite7);
          let ajaxB = 0;
          let logop = String.fromCharCode(98,97,110,100,0);
          let nativemodule1 = 1.0;
         vipsport3.push(vipsport3.length);
         ajaxB ^= ajaxB % 1;
         logop = `${parseInt(`${nativemodule1}`) | 1}`;
         nativemodule1 *= ajaxB ^ 1;
      bggradientr = new Map([[`${ticked_}`, 1]]);
   while (!scoreR.endsWith(`${bggradientr.size}`)) {
      bggradientr = new Map([[pingt, 1 ^ parseInt(`${indicatort}`)]]);
      break;
   }
   let goal6 = selectedC ? !selectedC : selectedC;
   do {
      selectedC = indicatort == applicationP;
      if (goal6) {
         break;
      }
   } while ((1.11 <= (iconclosewhitewithbgW / (Math.max(1.28, 2)))) && goal6);
   if (2.82 < (2.89 - applicationP) && 2.89 < (circleU - applicationP)) {
      applicationP /= Math.max(parseFloat(`${3}`), 2);
   }
       let benefit1 = String.fromCharCode(117,110,107,105,99,107,0);
       let iconsharefriendsC = false;
       let iconarrowrightz = String.fromCharCode(115,105,110,107,115,0);
      while (iconarrowrightz.length >= 4) {
         iconarrowrightz += `${(benefit1.length * (iconsharefriendsC ? 2 : 1))}`;
         break;
      }
      if (iconsharefriendsC) {
         iconsharefriendsC = iconarrowrightz.length > 72 || !iconsharefriendsC;
      }
      let proxy0 = iconsharefriendsC ? !iconsharefriendsC : iconsharefriendsC;
      do {
         iconsharefriendsC = (23 > ((iconsharefriendsC ? 23 : benefit1.length) / (Math.max(benefit1.length, 8))));
         if (proxy0) {
            break;
         }
      } while ((!iconsharefriendsC) && proxy0);
         iconsharefriendsC = benefit1.includes(`${iconsharefriendsC}`);
         iconsharefriendsC = (((iconsharefriendsC ? iconarrowrightz.length : 75) % (Math.max(4, iconarrowrightz.length))) > 75);
         iconsharefriendsC = iconarrowrightz.length < 29 && iconsharefriendsC;
         iconsharefriendsC = !benefit1.endsWith(`${iconsharefriendsC}`);
      for (let v = 0; v < 1; v++) {
         iconsharefriendsC = 83 < benefit1.length || 83 < iconarrowrightz.length;
      }
         iconsharefriendsC = iconarrowrightz == benefit1;
      pingt = `${parseInt(`${indicatort}`) & 3}`;
   while (1.24 >= (1.58 / (Math.max(2, ticked_)))) {
      ticked_ /= Math.max(3, parseFloat(`${3}`));
      break;
   }
   for (let e = 0; e < 3; e++) {
      scheduleY = "2";
   }
   while ((scoreR.length % 3) >= 5 || (scoreR.length - floaterj) >= 4.23) {
      scoreR += `${sellu.length}`;
      break;
   }
       let distu = String.fromCharCode(109,98,99,110,116,0);
       let fullN = String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,0);
       let navigationA = 1.0;
         fullN = `${fullN.length}`;
      let ynewsO = navigationA >= 6716441.0;
      do {
          let alertA = String.fromCharCode(115,117,98,102,114,97,109,101,115,0);
          let release_zB = String.fromCharCode(102,97,114,109,101,0);
          let homeloading9 = String.fromCharCode(115,117,98,116,114,97,99,116,109,111,100,0);
          let icontransferclubF = true;
         navigationA *= parseFloat(`${alertA.length | 3}`);
         alertA = `${homeloading9.length + release_zB.length}`;
         release_zB = "1";
         homeloading9 += `${release_zB.length >> (Math.min(Math.abs(2), 4))}`;
         icontransferclubF = String.fromCharCode(69,0) == homeloading9 || 33 < release_zB.length;
         if (ynewsO) {
            break;
         }
      } while (((3.12 + navigationA) < 3.57) && ynewsO);
         navigationA *= parseFloat(`${fullN.length}`);
       let profilepicL = 1;
       let bggradientZ = 1;
          let memberL = false;
         bggradientZ -= bggradientZ / (Math.max(parseInt(`${navigationA}`), 4));
         memberL = !memberL || memberL;
      let playlist7 = 7301051 <= bggradientZ;
      do {
         bggradientZ %= Math.max(1, fullN.length);
         if (playlist7) {
            break;
         }
      } while (playlist7 && (bggradientZ == 1));
      while (5 == (bggradientZ | 4)) {
          let memberm = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,0);
          let sharedS = String.fromCharCode(112,116,114,109,97,112,115,0);
         bggradientZ %= Math.max(1, profilepicL);
         memberm += `${memberm.length}`;
         sharedS = `${sharedS.length}`;
         break;
      }
          let delegate_zQ: Array<any> = [890, 531, 726];
         distu = `${distu.length}`;
         delegate_zQ.push(delegate_zQ.length + delegate_zQ.length);
         profilepicL |= fullN.length;
      ticked_ -= parseFloat(`${ping5.length | 1}`);
      jingdongr = [scheduleY.length & jingdongr.length];
      bggradientr = new Map([[`${circleU}`, parseInt(`${circleU}`) ^ scoreR.length]]);
      ticked_ /= Math.max(parseFloat(`${1 - pingt.length}`), 3);
      scoreR += `${sellu.length}`;
       let hometeamfieldu = 3;
       let videojsK = String.fromCharCode(108,117,116,121,117,118,0);
      let tickedE = 8325659 >= videojsK.length;
      do {
         videojsK += `${videojsK.length}`;
         if (tickedE) {
            break;
         }
      } while (tickedE && (!videojsK.startsWith(`${hometeamfieldu}`)));
         hometeamfieldu ^= videojsK.length & hometeamfieldu;
          let successe = 0.0;
         hometeamfieldu ^= (videojsK == String.fromCharCode(102,0) ? videojsK.length : hometeamfieldu);
         successe /= Math.max(1, parseFloat(`${2}`));
      if (videojsK.length < hometeamfieldu) {
         videojsK += `${videojsK.length}`;
      }
         hometeamfieldu /= Math.max(3, 4);
         videojsK += `${videojsK.length}`;
      scoreR = `${pingt.length}`;
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
