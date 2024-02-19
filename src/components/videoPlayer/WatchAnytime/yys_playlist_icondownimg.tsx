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
import Video, { OnProgressData, yysLargeQuest } from 'react-native-video';
import { BlackPlaySvg, PauseSvg } from '@static';

import { useNavigation, useTheme } from '@react-navigation/native';
import { Slider } from '@rneui/themed';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import RNFetchBlob from 'rn-fetch-blob';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import { showAdultModeVip } from '@redux';
import { playVod, viewPlaylistDetails } from '@redux';
import { screenModel } from '@type';
import { ADULT_MODE_PREVIEW_DURATION, DOWNLOAD_WATCH_ANYTIME } from '@utility';
import FastImage from '../../common/yys_alert_backwhite';
import RedirectButton from './yys_profileinactive_button';
import DescriptionBar from './yys_release';
import HejiButton from './yys_material_button';
import { addIdToCache } from '../../../utils/yys_nativemodule_mbnativeadvanced';
import { yysIconplaySuggestion } from '@redux';
import { yysIconstar } from '@models';

interface yysIconarrowrightorangeStation {
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

const videoBufferGif = require('../../../../static/images/constantsMimePhone.gif')

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
}: yysIconarrowrightorangeStation) {
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
  const videoRef = useRef<yysLargeQuest>(null);
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

  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const isVip = yysIconstar.isVip(userState.user);
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
       let editE = String.fromCharCode(109,95,52,51,95,101,108,108,105,112,116,105,99,0);
    let footballtrophyB = true;
    let zhubo9 = 0.0;
    let libjsinspectorF = String.fromCharCode(99,95,53,49,95,106,112,101,103,116,114,97,110,0);
    let nextw = 4.0;
    let videocommonO: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,110,97,109,101,95,112,95,52,53,0),false ], [String.fromCharCode(97,114,101,97,95,54,95,55,53,0),false ], [String.fromCharCode(111,117,116,102,105,108,101,115,95,117,95,55,57,0),false ]]);
    let inouttargetyellowZ = 2;
    let componentsV = String.fromCharCode(111,112,99,111,100,101,115,95,116,95,49,53,0);
    let controls_ = String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,54,95,53,56,0);
    let stylese = 0.0;
    let activityf = String.fromCharCode(107,95,49,55,95,115,118,97,114,105,110,116,0);
    let questiconb: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,105,116,116,101,100,95,50,95,56,49,0),String.fromCharCode(97,95,54,48,95,101,110,101,114,103,121,0)], [String.fromCharCode(99,95,50,54,95,102,108,97,99,0),String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,48,95,52,53,0)]]);
    let trashe = 1.0;
    let bufferL = String.fromCharCode(97,95,55,48,95,114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,0);
       let langkeyj = String.fromCharCode(108,95,55,50,95,108,97,121,101,114,105,110,103,0);
      if (!langkeyj.startsWith(langkeyj)) {
         langkeyj += `${langkeyj.length - 2}`;
      }
      if (langkeyj.length == 4) {
         langkeyj = "2";
      }
         langkeyj += `${2 - langkeyj.length}`;
      inouttargetyellowZ >>= Math.min(Math.abs((controls_ == String.fromCharCode(114,0) ? parseInt(`${nextw}`) : controls_.length)), 5);
       let telemetryA = String.fromCharCode(117,114,118,101,95,106,95,50,53,0);
       let statisticsactivee = String.fromCharCode(121,95,54,50,95,115,104,97,108,108,111,119,0);
      for (let g = 0; g < 3; g++) {
          let cornerQ = String.fromCharCode(110,117,109,101,114,97,108,115,95,116,95,56,54,0);
          let ball4 = String.fromCharCode(110,95,57,50,95,98,101,110,99,104,109,97,114,107,0);
          let filedv = 5;
          let rightf = 3;
         telemetryA = "2";
         cornerQ = "1";
         ball4 = `${ball4.length - 1}`;
         filedv /= Math.max(rightf << (Math.min(Math.abs(2), 5)), 5);
         rightf += filedv - 2;
      }
         telemetryA += "2";
       let encryptorO = String.fromCharCode(109,111,100,101,108,115,95,118,95,54,0);
       let iconeyeE = String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,106,95,54,55,0);
      let spinneri = 5647605 >= telemetryA.length;
      do {
         telemetryA += `${statisticsactivee.length % (Math.max(telemetryA.length, 4))}`;
         if (spinneri) {
            break;
         }
      } while ((telemetryA.includes(`${iconeyeE.length}`)) && spinneri);
          let privilegem = String.fromCharCode(104,101,97,100,114,111,111,109,95,117,95,51,55,0);
         iconeyeE = `${(privilegem == String.fromCharCode(81,0) ? telemetryA.length : privilegem.length)}`;
      if (!statisticsactivee.startsWith(`${iconeyeE.length}`)) {
          let imagesX = 2;
          let photoU = true;
          let topicc: Map<any, any> = new Map([[String.fromCharCode(116,95,57,55,95,114,101,119,97,114,100,0),235], [String.fromCharCode(112,97,116,116,101,114,110,95,103,95,52,57,0),729]]);
          let emptyu: Map<any, any> = new Map([[String.fromCharCode(98,95,54,54,95,117,108,116,114,97,0),true ], [String.fromCharCode(116,95,57,49,95,100,117,109,112,105,110,103,0),false ], [String.fromCharCode(99,95,57,51,95,110,101,120,116,104,111,112,0),true ]]);
         iconeyeE = `${((photoU ? 3 : 4) / (Math.max(imagesX, 5)))}`;
         imagesX >>= Math.min(Math.abs(topicc.size), 3);
         photoU = emptyu.size > 26;
         topicc = new Map([[`${topicc.size}`, emptyu.size]]);
      }
      componentsV = `${(String.fromCharCode(83,0) == statisticsactivee ? videocommonO.size : statisticsactivee.length)}`;
       let yellowr = String.fromCharCode(122,95,57,51,95,115,116,101,114,101,111,100,0);
       let productB = String.fromCharCode(108,95,56,53,95,116,104,117,109,98,115,0);
      let arrowupD = yellowr.length <= 7872098;
      do {
         yellowr = `${(productB == String.fromCharCode(82,0) ? productB.length : yellowr.length)}`;
         if (arrowupD) {
            break;
         }
      } while ((productB.length <= yellowr.length) && arrowupD);
          let sortg: Map<any, any> = new Map([[String.fromCharCode(97,98,115,111,108,117,116,101,95,49,95,56,53,0),473], [String.fromCharCode(118,95,55,53,95,112,108,117,103,105,110,0),880], [String.fromCharCode(98,95,54,48,95,115,116,97,116,105,115,116,105,99,115,0),121]]);
          let penaltygoalN = 0.0;
          let bnewarchdefaultsS = 1.0;
         yellowr += `${productB.length ^ 3}`;
         sortg.set(`${bnewarchdefaultsS}`, 2 * sortg.size);
         penaltygoalN /= Math.max(parseFloat(`${parseInt(`${bnewarchdefaultsS}`)}`), 3);
         yellowr += `${productB.length ^ yellowr.length}`;
      while (2 <= yellowr.length) {
         yellowr += "1";
         break;
      }
      for (let p = 0; p < 2; p++) {
          let gradle2 = String.fromCharCode(97,98,101,108,95,53,95,55,48,0);
          let tooltipsi = String.fromCharCode(105,110,108,105,110,101,100,95,115,95,53,53,0);
          let libffmpegkitt = String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,95,55,95,55,0);
          let downloadM = 4.0;
          let resendH = String.fromCharCode(114,117,115,115,105,97,110,95,50,95,54,52,0);
         yellowr += `${(String.fromCharCode(73,0) == productB ? libffmpegkitt.length : productB.length)}`;
         gradle2 += `${parseInt(`${downloadM}`) + 1}`;
         tooltipsi = `${1 & tooltipsi.length}`;
         libffmpegkitt += `${parseInt(`${downloadM}`) & resendH.length}`;
         resendH = `${resendH.length}`;
      }
      for (let n = 0; n < 3; n++) {
         productB = `${(productB == String.fromCharCode(114,0) ? yellowr.length : productB.length)}`;
      }
      zhubo9 += parseInt(`${zhubo9}`);
      footballtrophyB = 87 >= libjsinspectorF.length;
      footballtrophyB = 11 > libjsinspectorF.length || videocommonO.size > 11;
   if (!libjsinspectorF.endsWith(`${footballtrophyB}`)) {
       let arrowrightu = false;
       let hometeamfieldg = String.fromCharCode(112,111,114,116,97,105,116,95,48,95,50,48,0);
      let notificationfilled3 = arrowrightu ? !arrowrightu : arrowrightu;
      do {
         arrowrightu = (77 > ((!arrowrightu ? 77 : hometeamfieldg.length) >> (Math.min(hometeamfieldg.length, 4))));
         if (notificationfilled3) {
            break;
         }
      } while ((!arrowrightu) && notificationfilled3);
         arrowrightu = !arrowrightu;
         arrowrightu = !arrowrightu || hometeamfieldg.length == 51;
       let mbsplash9 = String.fromCharCode(110,95,57,49,95,97,97,99,116,97,98,0);
      for (let r = 0; r < 2; r++) {
         arrowrightu = (59 < ((!arrowrightu ? 59 : mbsplash9.length) / (Math.max(10, mbsplash9.length))));
      }
         arrowrightu = !arrowrightu || mbsplash9.length <= 65;
      libjsinspectorF = `${inouttargetyellowZ & editE.length}`;
   }
       let iconviewer6 = 1.0;
       let optionsM = String.fromCharCode(100,95,52,57,95,120,117,118,109,118,115,0);
      let anytime8 = optionsM == String.fromCharCode(113,56,51,106,48,104,49,0);
      do {
          let shielddoneS: Array<any> = [955, 233];
         optionsM = `${(String.fromCharCode(51,0) == optionsM ? parseInt(`${iconviewer6}`) : optionsM.length)}`;
         shielddoneS.push(shielddoneS.length + shielddoneS.length);
         if (anytime8) {
            break;
         }
      } while (anytime8 && (2.9 <= (iconviewer6 - optionsM.length) || 3.18 <= (2.9 - iconviewer6)));
          let runtimeschedulerQ: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,110,104,97,110,99,101,0),483], [String.fromCharCode(99,95,56,55,95,115,112,101,99,105,97,108,0),296], [String.fromCharCode(118,95,53,50,95,117,110,101,115,99,97,112,105,110,103,0),196]]);
         iconviewer6 *= optionsM.length + 2;
         runtimeschedulerQ = new Map([[`${runtimeschedulerQ.size}`, runtimeschedulerQ.size - runtimeschedulerQ.size]]);
      while (optionsM.includes(`${iconviewer6}`)) {
         optionsM += `${optionsM.length & 2}`;
         break;
      }
         optionsM = `${2 * optionsM.length}`;
         iconviewer6 += parseInt(`${iconviewer6}`) + optionsM.length;
          let with__jK = 2.0;
          let long_xn7: Array<any> = [748, 93, 864];
          let statisticsj = true;
         iconviewer6 -= parseInt(`${iconviewer6}`) | 1;
         with__jK *= parseFloat(`${parseInt(`${with__jK}`) / (Math.max(long_xn7.length, 9))}`);
         long_xn7 = [long_xn7.length];
         statisticsj = (long_xn7.length - parseInt(`${with__jK}`)) > 19;
      controls_ += `${videocommonO.size}`;
       let bottomH = String.fromCharCode(101,95,55,54,95,119,114,105,116,101,105,110,105,116,0);
       let libavformatn: Map<any, any> = new Map([[String.fromCharCode(115,95,49,51,95,114,101,116,114,97,110,115,109,105,115,115,105,111,110,0),308], [String.fromCharCode(109,118,112,114,111,98,115,95,115,95,55,48,0),107], [String.fromCharCode(114,95,53,49,95,100,111,119,110,115,104,105,102,116,0),206]]);
      while ((libavformatn.size ^ 3) < 5 && (bottomH.length ^ libavformatn.size) < 3) {
          let iconfeedbackt = 5.0;
         bottomH += `${libavformatn.size >> (Math.min(Math.abs(3), 4))}`;
         iconfeedbackt += parseInt(`${iconfeedbackt}`) / 3;
         break;
      }
      while (libavformatn.size < 1) {
          let temperatureT = String.fromCharCode(109,95,57,57,95,115,116,97,114,116,117,112,0);
          let libsentry_: Array<any> = [747, 480];
          let release_5G: Array<any> = [607, 624, 59];
          let elementsx = String.fromCharCode(114,95,57,54,95,114,111,116,114,0);
          let dycreatorz = 0.0;
         bottomH = "3";
         temperatureT = `${parseInt(`${dycreatorz}`) - 3}`;
         libsentry_.push(temperatureT.length % 1);
         release_5G.push(temperatureT.length | 1);
         elementsx = "3";
         dycreatorz /= Math.max(2, parseFloat(`${2 * release_5G.length}`));
         break;
      }
         libavformatn.set(`${bottomH}`, libavformatn.size | bottomH.length);
          let mintegralb = false;
          let mimeM = 0.0;
         libavformatn = new Map([[`${libavformatn.size}`, ((mintegralb ? 1 : 5) & libavformatn.size)]]);
         mintegralb = 10.64 == mimeM && mimeM == 10.64;
      for (let h = 0; h < 3; h++) {
         libavformatn.set(`${bottomH}`, (String.fromCharCode(108,0) == bottomH ? libavformatn.size : bottomH.length));
      }
      while ((libavformatn.size ^ bottomH.length) > 5 && 4 > (5 ^ bottomH.length)) {
         libavformatn = new Map([[`${libavformatn.size}`, (String.fromCharCode(48,0) == bottomH ? libavformatn.size : bottomH.length)]]);
         break;
      }
      editE = "3";
       let tumbnailR = 3.0;
      if (2.0 >= (tumbnailR * 4)) {
         tumbnailR *= 2;
      }
         tumbnailR -= 1 / (Math.max(parseInt(`${tumbnailR}`), 4));
         tumbnailR /= Math.max(3, parseInt(`${tumbnailR}`));
      stylese -= parseFloat(`${parseInt(`${tumbnailR}`)}`);
   for (let n = 0; n < 1; n++) {
      zhubo9 *= 2;
   }
   if (footballtrophyB) {
      footballtrophyB = 15 >= editE.length || videocommonO.size >= 15;
   }
   while (1.50 >= (zhubo9 - 3.30)) {
       let iconrightorangeX = 4.0;
       let dialogd = String.fromCharCode(120,95,56,54,95,120,112,101,114,105,109,101,110,116,97,108,0);
       let pause5 = String.fromCharCode(99,95,52,95,102,105,102,97,0);
       let philippinesS: Map<any, any> = new Map([[String.fromCharCode(103,111,112,104,101,114,95,50,95,52,57,0),String.fromCharCode(99,109,112,97,100,100,114,95,106,95,51,54,0)], [String.fromCharCode(120,95,53,56,95,97,100,105,100,0),String.fromCharCode(109,99,100,99,95,105,95,53,56,0)]]);
       let libgloga = String.fromCharCode(122,95,57,49,95,108,111,99,97,116,105,111,110,115,0);
      let libyogaS = 7371023.0 >= iconrightorangeX;
      do {
         iconrightorangeX *= philippinesS.size ^ 1;
         if (libyogaS) {
            break;
         }
      } while (libyogaS && (4 == (dialogd.length - 5) || 2.79 == (iconrightorangeX + 4.41)));
         philippinesS = new Map([[`${philippinesS.size}`, 1 | libgloga.length]]);
         dialogd = `${pause5.length >> (Math.min(libgloga.length, 1))}`;
      for (let d = 0; d < 1; d++) {
          let libjsijniprofilerE = true;
         pause5 += `${(libgloga.length & (libjsijniprofilerE ? 3 : 5))}`;
      }
      for (let h = 0; h < 2; h++) {
         libgloga += `${philippinesS.size}`;
      }
       let clear5 = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,103,95,49,52,0);
       let embedM = String.fromCharCode(111,95,57,51,95,114,101,113,117,101,115,116,0);
       let subbasketballplayerv = String.fromCharCode(107,105,110,100,115,95,48,95,53,54,0);
      if (!subbasketballplayerv.includes(`${iconrightorangeX}`)) {
         subbasketballplayerv = `${libgloga.length % 2}`;
      }
      for (let z = 0; z < 3; z++) {
         libgloga += `${libgloga.length}`;
      }
         embedM += `${(String.fromCharCode(103,0) == dialogd ? dialogd.length : libgloga.length)}`;
          let lang3 = 0;
          let gemfile_: Array<any> = [256, 707, 879];
          let catagoryv = 5.0;
         libgloga += `${1 * parseInt(`${catagoryv}`)}`;
         lang3 *= lang3;
         gemfile_ = [lang3];
         catagoryv -= parseFloat(`${gemfile_.length}`);
      while (3 >= (4 / (Math.max(8, subbasketballplayerv.length)))) {
          let commoni = 2.0;
          let sportsv = 3.0;
          let borderlessj = String.fromCharCode(113,95,57,49,95,112,114,101,97,109,98,108,101,0);
         philippinesS.set(`${sportsv}`, clear5.length & parseInt(`${sportsv}`));
         commoni -= parseFloat(`${1}`);
         borderlessj = `${3 % (Math.max(9, parseInt(`${commoni}`)))}`;
         break;
      }
         subbasketballplayerv = `${embedM.length & dialogd.length}`;
         subbasketballplayerv += `${parseInt(`${iconrightorangeX}`)}`;
      while (clear5.length >= 5) {
         clear5 += `${(libgloga == String.fromCharCode(114,0) ? clear5.length : libgloga.length)}`;
         break;
      }
      zhubo9 += dialogd.length;
      break;
   }
   if (Array.from(videocommonO.keys()).includes(`${inouttargetyellowZ}`)) {
       let tooltips0 = String.fromCharCode(106,95,52,56,95,99,116,114,108,0);
       let libapminsightas: Map<any, any> = new Map([[String.fromCharCode(99,105,100,95,111,95,50,56,0),String.fromCharCode(108,95,54,57,95,105,110,99,108,117,115,105,111,110,0)], [String.fromCharCode(103,95,57,56,95,115,121,110,99,104,114,111,110,105,122,101,0),String.fromCharCode(109,115,105,122,101,95,107,95,51,48,0)], [String.fromCharCode(100,95,51,55,95,109,97,108,101,0),String.fromCharCode(99,117,115,116,111,109,105,122,101,95,57,95,50,55,0)]]);
       let select_ = 0;
       let sharedC = false;
       let description_gpZ = String.fromCharCode(117,100,112,108,105,116,101,95,118,95,51,57,0);
      if (4 <= (select_ - 2)) {
         sharedC = 2 > tooltips0.length;
      }
      if (1 <= tooltips0.length) {
          let libjsiW = 0;
          let champion8: Array<any> = [788, 338];
          let long_bf = 4;
         sharedC = 96 >= long_bf;
         libjsiW %= Math.max(3, 4);
         champion8 = [3];
         long_bf ^= libjsiW;
      }
       let backwhiteu = 4;
       let configurep = 2;
          let linef = 3.0;
          let dependencyX = 4;
          let icontransferclubm = String.fromCharCode(102,95,55,56,95,116,114,97,110,115,102,111,114,109,0);
         backwhiteu >>= Math.min(Math.abs(backwhiteu), 2);
         linef += parseInt(`${linef}`) << (Math.min(Math.abs(3), 5));
         dependencyX &= dependencyX;
         icontransferclubm += `${parseInt(`${linef}`)}`;
         libapminsightas.set(description_gpZ, 3 & configurep);
          let pathe = 1;
         libapminsightas.set(`${select_}`, select_);
         pathe -= 2;
         libapminsightas.set(description_gpZ, 2 << (Math.min(5, Math.abs(backwhiteu))));
      while (description_gpZ.includes(`${select_}`)) {
         description_gpZ = `${(2 << (Math.min(5, Math.abs((sharedC ? 3 : 1)))))}`;
         break;
      }
         sharedC = libapminsightas.size > 85;
      if (!sharedC) {
         libapminsightas = new Map([[`${libapminsightas.size}`, configurep ^ 3]]);
      }
          let line8 = 2;
          let expandU = String.fromCharCode(97,108,98,117,109,95,104,95,55,50,0);
         sharedC = sharedC || libapminsightas.size < 70;
         line8 -= (String.fromCharCode(82,0) == expandU ? line8 : expandU.length);
         sharedC = tooltips0.startsWith(`${select_}`);
          let shrinkG = String.fromCharCode(98,114,117,115,104,101,115,95,104,95,49,48,48,0);
          let libturbomodulejsijnid: Map<any, any> = new Map([[String.fromCharCode(115,101,99,116,105,111,110,95,100,95,56,55,0),true ], [String.fromCharCode(101,95,54,49,95,97,110,116,105,97,108,105,97,115,105,110,103,0),true ], [String.fromCharCode(97,108,108,111,99,122,95,115,95,53,0),false ]]);
          let dragclosen = 1.0;
         libapminsightas.set(tooltips0, ((sharedC ? 2 : 2) % (Math.max(tooltips0.length, 6))));
         shrinkG += `${1 + parseInt(`${dragclosen}`)}`;
         libturbomodulejsijnid.set(`${dragclosen}`, 3 ^ libturbomodulejsijnid.size);
          let statisticsactiveG = false;
          let rightd: Map<any, any> = new Map([[String.fromCharCode(111,117,116,99,111,109,101,95,118,95,49,50,0),164], [String.fromCharCode(113,95,50,56,95,108,97,115,116,110,111,100,101,0),186]]);
          let specy = 3.0;
         backwhiteu -= ((statisticsactiveG ? 5 : 1));
         statisticsactiveG = (parseInt(`${specy}`) / (Math.max(5, rightd.size))) >= 96;
         rightd.set(`${specy}`, parseInt(`${specy}`) + rightd.size);
       let shielddoneL: Map<any, any> = new Map([[String.fromCharCode(97,115,99,101,110,100,105,110,103,95,116,95,57,0),true ], [String.fromCharCode(115,111,99,114,101,97,116,101,95,53,95,50,0),true ], [String.fromCharCode(118,108,99,111,100,101,99,95,120,95,49,50,0),true ]]);
      inouttargetyellowZ <<= Math.min(3, Math.abs(parseInt(`${zhubo9}`) % 3));
   }
   while (footballtrophyB) {
       let cornerO = true;
       let dangerd: Array<any> = [644, 325, 459];
         cornerO = !cornerO && dangerd.length > 50;
       let gesturese: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,109,98,121,95,49,95,56,57,0),String.fromCharCode(121,95,52,57,95,114,103,116,99,115,0)], [String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,95,97,95,56,49,0),String.fromCharCode(122,95,52,53,95,109,97,110,97,103,101,0)], [String.fromCharCode(119,119,119,95,115,95,53,48,0),String.fromCharCode(105,103,104,108,105,103,104,116,115,95,112,95,51,57,0)]]);
       let appleR: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,95,57,95,52,54,0),24], [String.fromCharCode(103,108,121,112,104,95,51,95,51,52,0),954]]);
         dangerd = [1];
      let sellmathbackgroundO = cornerO ? !cornerO : cornerO;
      do {
         cornerO = ((gesturese.size - (!cornerO ? gesturese.size : 87)) > 79);
         if (sellmathbackgroundO) {
            break;
         }
      } while ((2 <= (dangerd.length + 5)) && sellmathbackgroundO);
      for (let w = 0; w < 1; w++) {
         appleR.set(`${cornerO}`, dangerd.length);
      }
      for (let x = 0; x < 2; x++) {
         gesturese.set(`${cornerO}`, 2);
      }
      libjsinspectorF = `${parseInt(`${nextw}`) * videocommonO.size}`;
      break;
   }
      footballtrophyB = 89 > controls_.length;
      stylese += parseFloat(`${editE.length}`);
   for (let n = 0; n < 2; n++) {
      editE = "1";
   }
       let basketballiconB = String.fromCharCode(112,95,57,48,95,101,120,116,114,97,115,0);
       let renewY = String.fromCharCode(98,95,49,56,95,99,111,109,98,105,110,101,114,0);
      let mbbidi = 8999804 >= basketballiconB.length;
      do {
          let unselectedi = 5.0;
          let usernameb = String.fromCharCode(115,99,104,101,100,95,52,95,55,49,0);
         basketballiconB = `${2 + usernameb.length}`;
         unselectedi += 1 * parseInt(`${unselectedi}`);
         usernameb = `${parseInt(`${unselectedi}`) % (Math.max(10, parseInt(`${unselectedi}`)))}`;
         if (mbbidi) {
            break;
         }
      } while ((basketballiconB.length < renewY.length) && mbbidi);
         renewY += "3";
      let tail0 = renewY == String.fromCharCode(121,95,50,100,108,50,52,114,0);
      do {
         renewY = `${renewY.length}`;
         if (tail0) {
            break;
         }
      } while ((basketballiconB != renewY) && tail0);
         renewY += `${renewY.length}`;
       let runtimeschedulerW = String.fromCharCode(122,95,52,49,95,108,101,118,101,108,115,0);
      while (runtimeschedulerW.startsWith(basketballiconB)) {
          let whitebellE = String.fromCharCode(109,112,115,117,98,95,55,95,51,48,0);
         basketballiconB += `${runtimeschedulerW.length}`;
         whitebellE += "1";
         break;
      }
      componentsV += `${3 + controls_.length}`;
   if ((libjsinspectorF.length - parseInt(`${zhubo9}`)) > 3 || 4 > (3 - libjsinspectorF.length)) {
      zhubo9 -= inouttargetyellowZ >> (Math.min(1, Math.abs(3)));
   }
   while (1 <= (editE.length / (Math.max(1, 1))) || (1 | editE.length) <= 1) {
      editE = `${controls_.length + 1}`;
      break;
   }
   while ((5.10 * nextw) >= 4.17) {
      nextw /= Math.max(activityf.length | parseInt(`${stylese}`), 4);
      break;
   }
       let pointr = 0.0;
       let reminderQ: Array<any> = [String.fromCharCode(100,97,112,112,115,95,106,95,54,50,0), String.fromCharCode(107,95,56,55,95,115,108,105,99,101,100,0)];
         pointr /= Math.max(2, parseFloat(`${1}`));
         reminderQ.push(parseInt(`${pointr}`) - reminderQ.length);
      zhubo9 *= editE.length | libjsinspectorF.length;
      footballtrophyB = 60 > controls_.length;
      libjsinspectorF = `${componentsV.length}`;
       let league8 = 1.0;
       let iconchatsendp = String.fromCharCode(113,95,49,56,95,99,97,114,114,121,0);
      if (5 >= (2 / (Math.max(7, iconchatsendp.length))) || 5 >= (2 / (Math.max(2, iconchatsendp.length)))) {
         league8 -= iconchatsendp.length & parseInt(`${league8}`);
      }
         iconchatsendp = `${iconchatsendp.length}`;
         iconchatsendp = `${iconchatsendp.length * parseInt(`${league8}`)}`;
      if (!iconchatsendp.startsWith(`${league8}`)) {
         iconchatsendp += `${iconchatsendp.length}`;
      }
      for (let g = 0; g < 1; g++) {
          let turnm: Array<any> = [String.fromCharCode(109,97,99,114,111,115,95,118,95,57,52,0), String.fromCharCode(97,99,99,101,115,115,105,98,108,105,116,121,95,117,95,49,53,0), String.fromCharCode(117,95,50,52,95,115,116,99,98,0)];
          let entry3 = true;
         iconchatsendp = `${((entry3 ? 4 : 2) >> (Math.min(turnm.length, 5)))}`;
      }
         league8 *= (iconchatsendp == String.fromCharCode(57,0) ? iconchatsendp.length : parseInt(`${league8}`));
      footballtrophyB = inouttargetyellowZ <= 34;

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
       let selectionI = 1.0;
    let stylej = 2;
    let iconnotificationnewU: Map<any, any> = new Map([[String.fromCharCode(102,117,110,103,105,98,108,101,95,99,95,52,54,0),713], [String.fromCharCode(97,114,105,116,104,95,103,95,57,50,0),950]]);
    let subtextw: Array<any> = [34, 894, 541];
    let basketballn = String.fromCharCode(114,97,110,107,95,49,95,53,50,0);
    let handler_: Array<any> = [String.fromCharCode(98,97,99,107,115,105,100,101,95,104,95,52,48,0), String.fromCharCode(112,95,55,52,95,119,101,98,115,111,99,107,101,116,0)];
    let promotionP = 2;
    let graye: Array<any> = [200, 779];
    let themeE = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,51,95,51,50,0);
    let baseO = String.fromCharCode(97,116,116,114,105,98,117,116,101,100,95,55,95,51,52,0);
    let inactiveQ = String.fromCharCode(114,95,49,49,95,114,101,115,105,122,101,114,0);
    let disconnectedlogoj: Array<any> = [844, 13];
    let whitevideoliveO = 3.0;
      handler_.push(1 * promotionP);
   if (Array.from(iconnotificationnewU.values()).includes(selectionI)) {
       let roomP: Map<any, any> = new Map([[String.fromCharCode(97,95,55,57,95,97,110,105,109,97,116,105,111,110,0),true ], [String.fromCharCode(117,95,57,57,95,109,101,109,120,0),false ], [String.fromCharCode(100,105,115,116,97,110,99,101,115,95,115,95,51,0),false ]]);
         roomP = new Map([[`${roomP.size}`, roomP.size >> (Math.min(Math.abs(2), 2))]]);
      let defaultprofilepic1 = 7642070 >= roomP.size;
      do {
          let specW = String.fromCharCode(112,114,105,110,116,111,117,116,95,116,95,56,57,0);
         roomP.set(`${specW}`, specW.length);
         if (defaultprofilepic1) {
            break;
         }
      } while ((roomP.get(`${roomP.size}`) != null) && defaultprofilepic1);
      let componentregistryx = 8713380 <= roomP.size;
      do {
         roomP = new Map([[`${roomP.size}`, roomP.size / 2]]);
         if (componentregistryx) {
            break;
         }
      } while ((3 == (1 ^ roomP.size)) && componentregistryx);
      iconnotificationnewU = new Map([[`${roomP.size}`, subtextw.length]]);
   }
      promotionP += subtextw.length;
   while ((basketballn.length / 5) < 2 && (5 * basketballn.length) < 3) {
       let filedo = false;
       let schedulery = String.fromCharCode(117,105,111,116,111,109,98,117,102,95,111,95,54,56,0);
       let membershipT = String.fromCharCode(97,95,53,54,95,99,111,109,112,117,116,101,100,0);
         filedo = schedulery.length <= 81;
         schedulery += `${membershipT.length ^ schedulery.length}`;
      basketballn = "3";
      break;
   }
       let mbridge5 = 5.0;
       let specl = String.fromCharCode(118,95,55,55,95,116,105,109,101,115,0);
      if (!specl.endsWith(`${mbridge5}`)) {
          let photor = String.fromCharCode(117,95,53,95,114,116,99,0);
          let libcxxcomponents_ = String.fromCharCode(99,111,110,102,108,105,99,116,115,95,97,95,49,50,0);
         mbridge5 *= photor.length;
         photor += `${(String.fromCharCode(86,0) == libcxxcomponents_ ? libcxxcomponents_.length : libcxxcomponents_.length)}`;
      }
       let arrowdown2 = false;
       let textinputO = String.fromCharCode(114,95,55,48,95,100,114,105,118,101,114,115,0);
      for (let r = 0; r < 2; r++) {
         mbridge5 -= parseInt(`${mbridge5}`);
      }
          let leaguen = false;
         mbridge5 += ((arrowdown2 ? 5 : 3) & (leaguen ? 5 : 1));
         mbridge5 -= specl.length;
      themeE = `${parseInt(`${selectionI}`) >> (Math.min(5, Math.abs(stylej)))}`;
      basketballn += "1";
   for (let l = 0; l < 2; l++) {
      disconnectedlogoj = [1];
   }
   for (let a = 0; a < 1; a++) {
      stylej |= parseInt(`${selectionI}`) | 3;
   }
   let signinupB = String.fromCharCode(115,98,55,97,52,121,109,99,53,0) == baseO;
   do {
      baseO += `${themeE.length}`;
      if (signinupB) {
         break;
      }
   } while ((!baseO.includes(`${iconnotificationnewU.size}`)) && signinupB);
   while (2 < inactiveQ.length) {
       let penaltymatchiconB = true;
      let controlsE = penaltymatchiconB ? !penaltymatchiconB : penaltymatchiconB;
      do {
          let inactiveL = 2.0;
          let reddownarrowa = true;
          let privileger: Array<any> = [String.fromCharCode(100,95,50,95,116,100,101,99,111,100,101,0), String.fromCharCode(105,95,51,56,95,98,105,116,115,113,112,0)];
          let applicationb = 2;
         penaltymatchiconB = applicationb >= 10 || !reddownarrowa;
         inactiveL /= Math.max(5, 2);
         reddownarrowa = inactiveL > 19.84;
         privileger.push(privileger.length);
         applicationb *= 1;
         if (controlsE) {
            break;
         }
      } while ((!penaltymatchiconB) && controlsE);
      while (!penaltymatchiconB || !penaltymatchiconB) {
          let transferR = 1.0;
          let gestureb = String.fromCharCode(102,105,110,100,101,114,95,117,95,53,55,0);
          let wifirouterO = 3;
         penaltymatchiconB = (transferR + wifirouterO) >= 73;
         transferR *= gestureb.length + 1;
         gestureb = `${2 & gestureb.length}`;
         break;
      }
       let vietnaml = String.fromCharCode(102,100,111,112,101,110,95,105,95,56,48,0);
      baseO = `${(String.fromCharCode(112,0) == baseO ? baseO.length : subtextw.length)}`;
      break;
   }
       let teamdetailsbgx = String.fromCharCode(106,95,56,48,95,113,112,113,115,99,97,108,101,0);
       let tempnodata2: Map<any, any> = new Map([[String.fromCharCode(112,95,49,48,95,102,105,110,0),true ], [String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,102,95,52,55,0),false ]]);
         tempnodata2.set(teamdetailsbgx, tempnodata2.size);
      for (let n = 0; n < 3; n++) {
         teamdetailsbgx += `${2 << (Math.min(1, Math.abs(tempnodata2.size)))}`;
      }
      graye = [iconnotificationnewU.size];

    clearTimeout(timer.current);

   let mbbidD = disconnectedlogoj.length >= 5849715;
   do {
       let iconqqp = 1.0;
      while (2.48 <= (iconqqp * 4.67) || 4.67 <= (iconqqp * iconqqp)) {
         iconqqp += parseFloat(`${parseInt(`${iconqqp}`)}`);
         break;
      }
      if ((1.50 - iconqqp) >= 2.61 || 4.33 >= (iconqqp / (Math.max(1.50, 6)))) {
          let blackW = 3.0;
          let incidentw = true;
         iconqqp += (parseFloat(`${(incidentw ? 1 : 3) / (Math.max(parseInt(`${blackW}`), 2))}`));
      }
       let tooltipsr = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,51,95,53,52,0);
      disconnectedlogoj.push(promotionP);
      if (mbbidD) {
         break;
      }
   } while (mbbidD && ((2 + themeE.length) < 3 && 2 < (disconnectedlogoj.length + 2)));
      handler_ = [3];
   let userL = stylej <= 6302447;
   do {
      stylej %= Math.max(2, parseInt(`${selectionI}`));
      if (userL) {
         break;
      }
   } while (((stylej | 3) > 3 && 3 > (stylej * parseInt(`${selectionI}`))) && userL);
      subtextw = [themeE.length | baseO.length];
   if (handler_.includes(promotionP)) {
      promotionP >>= Math.min(5, themeE.length);
   }
       let b_imageE: Array<any> = [403, 920];
       let attributedstringm = 0.0;
       let gradlew_ = 4;
         b_imageE = [1 ^ parseInt(`${attributedstringm}`)];
         attributedstringm -= 3 & gradlew_;
      let referrer6 = b_imageE.length >= 5656774;
      do {
          let shareV = String.fromCharCode(115,117,112,112,111,114,116,115,95,57,95,57,52,0);
          let clubW: Array<any> = [501, 947, 665];
          let miniS = false;
          let suboutP = String.fromCharCode(109,105,120,112,97,110,101,108,95,102,95,50,52,0);
          let nextI = String.fromCharCode(106,117,115,116,95,116,95,49,49,0);
         b_imageE.push(((miniS ? 3 : 1)));
         shareV = `${clubW.length | nextI.length}`;
         clubW.push(shareV.length);
         miniS = suboutP.length == 47;
         suboutP = `${2 % (Math.max(5, shareV.length))}`;
         nextI += "2";
         if (referrer6) {
            break;
         }
      } while ((b_imageE.includes(attributedstringm)) && referrer6);
      let taiwanh = attributedstringm >= 5068590.0;
      do {
         attributedstringm /= Math.max(b_imageE.length << (Math.min(Math.abs(2), 5)), 5);
         if (taiwanh) {
            break;
         }
      } while (taiwanh && (4.24 <= (attributedstringm + 2.51)));
      while (5 <= (b_imageE.length << (Math.min(Math.abs(1), 5)))) {
         attributedstringm -= b_imageE.length ^ gradlew_;
         break;
      }
         b_imageE = [parseInt(`${attributedstringm}`) % 2];
      let wifirouter8 = b_imageE.length >= 5979998;
      do {
         b_imageE = [2 << (Math.min(Math.abs(gradlew_), 2))];
         if (wifirouter8) {
            break;
         }
      } while (wifirouter8 && (!b_imageE.includes(attributedstringm)));
         attributedstringm += 2;
       let largesoundY = String.fromCharCode(118,97,114,108,101,110,95,120,95,52,56,0);
      disconnectedlogoj = [3];
   while (1 == (graye.length ^ stylej)) {
      stylej *= 1 >> (Math.min(4, inactiveQ.length));
      break;
   }
   let iconrefreshW = 8068489 >= graye.length;
   do {
      graye.push((inactiveQ == String.fromCharCode(49,0) ? disconnectedlogoj.length : inactiveQ.length));
      if (iconrefreshW) {
         break;
      }
   } while (iconrefreshW && (graye.length >= basketballn.length));
      graye.push(parseInt(`${selectionI}`));
   if (2 == (baseO.length & 5) || (baseO.length & 5) == 3) {
      iconnotificationnewU = new Map([[baseO, stylej]]);
   }
       let iconarrowrightw = 0.0;
       let streamingz = 4;
       let saveE = false;
         saveE = saveE || 39.4 < iconarrowrightw;
         saveE = 27 > streamingz;
       let encryptK: Array<any> = [348, 843];
         encryptK.push(encryptK.length * 2);
          let actionso = true;
          let shootyesgoalg = false;
          let issubD = false;
         streamingz |= ((saveE ? 4 : 3));
         actionso = shootyesgoalg;
         issubD = actionso && !shootyesgoalg;
      for (let b = 0; b < 1; b++) {
          let privatechatbgi: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,101,109,98,101,100,100,105,110,103,0),String.fromCharCode(115,105,122,101,95,98,95,50,50,0)], [String.fromCharCode(122,95,54,57,95,101,120,112,114,101,115,115,0),String.fromCharCode(98,95,51,50,95,101,103,119,105,116,0)], [String.fromCharCode(121,95,55,56,95,119,105,110,100,105,110,103,0),String.fromCharCode(122,95,57,50,95,112,101,114,115,105,115,116,0)]]);
          let cancelp = String.fromCharCode(121,95,52,56,95,98,108,117,114,114,101,100,0);
          let defaultfootballbgH: Array<any> = [481, 603];
          let favoriteO = true;
         streamingz *= (encryptK.length / (Math.max(1, (saveE ? 5 : 2))));
         privatechatbgi = new Map([[`${privatechatbgi.size}`, privatechatbgi.size]]);
         cancelp = `${((favoriteO ? 1 : 2) | 3)}`;
         defaultfootballbgH = [1];
         favoriteO = cancelp == String.fromCharCode(121,0);
      }
          let zhengpiana = String.fromCharCode(109,97,107,101,110,97,110,95,115,95,49,52,0);
          let sourceN = String.fromCharCode(111,95,57,49,95,109,118,101,99,0);
          let smallz = 4.0;
         encryptK = [streamingz | 1];
         zhengpiana = `${3 | zhengpiana.length}`;
         sourceN += `${parseInt(`${smallz}`) / (Math.max(8, sourceN.length))}`;
         smallz += zhengpiana.length - 2;
      for (let m = 0; m < 2; m++) {
         encryptK.push((parseInt(`${iconarrowrightw}`) / (Math.max(7, (saveE ? 4 : 1)))));
      }
       let megaphonev = String.fromCharCode(105,95,57,50,95,110,111,110,110,117,108,108,111,117,116,0);
      handler_.push(parseInt(`${selectionI}`));
    setShowOverlay(true);

   for (let k = 0; k < 1; k++) {
      iconnotificationnewU = new Map([[`${graye.length}`, graye.length / (Math.max(inactiveQ.length, 10))]]);
   }
      promotionP %= Math.max(baseO.length, 4);
   if (inactiveQ.length < disconnectedlogoj.length) {
       let leaguedetailsbgw = 4.0;
         leaguedetailsbgw *= parseInt(`${leaguedetailsbgw}`);
         leaguedetailsbgw *= 1;
      if (3.98 < (leaguedetailsbgw * leaguedetailsbgw)) {
         leaguedetailsbgw += 2;
      }
      disconnectedlogoj = [1 >> (Math.min(Math.abs(parseInt(`${leaguedetailsbgw}`)), 3))];
   }
   while ((graye.length / (Math.max(3, basketballn.length))) == 4 && (graye.length / (Math.max(4, 4))) == 3) {
      graye = [parseInt(`${selectionI}`) / 1];
      break;
   }
      subtextw.push((String.fromCharCode(116,0) == themeE ? themeE.length : graye.length));
   for (let b = 0; b < 3; b++) {
       let shootC = String.fromCharCode(103,114,97,112,104,105,99,95,104,95,57,57,0);
       let networkt = 4;
       let iconbackwhiteM = true;
       let project4 = true;
       let cornerkickY: Array<any> = [753, 933, 624];
       let mbsplashe = 5.0;
       let libreactnativeblob7 = 2.0;
      if ((4 >> (Math.min(4, cornerkickY.length))) <= 5) {
         cornerkickY.push(1 & cornerkickY.length);
      }
          let codegenG = true;
          let latn0 = String.fromCharCode(110,95,49,53,95,99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,0);
         libreactnativeblob7 *= parseFloat(`${3}`);
         codegenG = latn0.length <= 92;
         latn0 = `${((codegenG ? 1 : 3))}`;
          let audiencew = 5.0;
         cornerkickY.push(parseInt(`${audiencew}`) - 3);
         project4 = !project4 && !iconbackwhiteM;
         cornerkickY.push(1 / (Math.max(10, parseInt(`${libreactnativeblob7}`))));
         cornerkickY.push(networkt);
         iconbackwhiteM = String.fromCharCode(73,0) == shootC && networkt <= 57;
          let textM = String.fromCharCode(119,101,108,115,101,110,99,95,56,95,55,55,0);
         networkt |= 2 << (Math.min(Math.abs(parseInt(`${mbsplashe}`)), 4));
         textM += `${1 | textM.length}`;
      let videobufferloading3 = project4 ? !project4 : project4;
      do {
         project4 = !iconbackwhiteM || cornerkickY.length > 6;
         if (videobufferloading3) {
            break;
         }
      } while (videobufferloading3 && (!project4));
         networkt |= (2 + (iconbackwhiteM ? 3 : 2));
         cornerkickY.push(parseInt(`${mbsplashe}`));
      let static_xn = iconbackwhiteM ? !iconbackwhiteM : iconbackwhiteM;
      do {
         iconbackwhiteM = networkt < 72;
         if (static_xn) {
            break;
         }
      } while (static_xn && ((mbsplashe + 3.19) <= 5.83));
      if ((mbsplashe + 2.27) >= 4.77 || 2.27 >= (mbsplashe + libreactnativeblob7)) {
         mbsplashe *= parseFloat(`${3 | parseInt(`${mbsplashe}`)}`);
      }
          let graphicsZ = String.fromCharCode(109,105,110,117,116,101,115,95,101,95,53,0);
          let g_positionL = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,112,95,52,50,0);
         iconbackwhiteM = 39.82 > mbsplashe;
         graphicsZ += `${2 + graphicsZ.length}`;
         g_positionL += `${(g_positionL == String.fromCharCode(72,0) ? graphicsZ.length : g_positionL.length)}`;
      selectionI += promotionP;
   }
      themeE += `${handler_.length * 1}`;
       let topicm = String.fromCharCode(109,101,116,104,111,100,115,95,122,95,55,0);
      for (let j = 0; j < 1; j++) {
          let disconnectedlogoU = 1.0;
          let cancelJ = 4;
          let iconshareH = false;
          let s_countK: Array<any> = [74, 764];
          let subtextd = String.fromCharCode(112,97,115,115,112,111,114,116,95,99,95,51,50,0);
         topicm = `${s_countK.length}`;
         disconnectedlogoU *= parseFloat(`${cancelJ ^ parseInt(`${disconnectedlogoU}`)}`);
         cancelJ -= 1 << (Math.min(Math.abs(parseInt(`${disconnectedlogoU}`)), 4));
         iconshareH = cancelJ > 93 && disconnectedlogoU > 20.54;
         s_countK.push((subtextd.length + (iconshareH ? 3 : 3)));
         subtextd += `${parseInt(`${disconnectedlogoU}`)}`;
      }
          let friendsy: Array<any> = [841, 283];
          let chatroombackgroundp = String.fromCharCode(112,114,101,112,97,114,101,95,54,95,56,56,0);
          let shirt1: Map<any, any> = new Map([[String.fromCharCode(116,95,51,54,95,105,109,105,113,0),803], [String.fromCharCode(115,116,117,102,102,115,116,95,121,95,51,54,0),775], [String.fromCharCode(114,101,97,100,95,49,95,53,52,0),785]]);
         topicm += `${shirt1.size}`;
         friendsy.push(chatroombackgroundp.length - friendsy.length);
         chatroombackgroundp += `${(String.fromCharCode(86,0) == chatroombackgroundp ? friendsy.length : chatroombackgroundp.length)}`;
         shirt1.set(chatroombackgroundp, friendsy.length);
         topicm = `${topicm.length ^ 3}`;
      subtextw.push(2);
       let shoot4 = 2.0;
       let goallogo9: Array<any> = [699, 812, 774];
          let q_managerS = 4.0;
         shoot4 *= 1 ^ parseInt(`${shoot4}`);
         q_managerS += 1 % (Math.max(10, parseInt(`${q_managerS}`)));
         goallogo9.push(goallogo9.length * 3);
         goallogo9 = [goallogo9.length % (Math.max(2, 1))];
          let middlebrightnessT: Map<any, any> = new Map([[String.fromCharCode(99,95,53,53,95,102,114,97,109,101,110,117,109,0),918], [String.fromCharCode(105,95,51,53,95,111,109,112,108,105,99,97,116,105,111,110,0),338]]);
          let notificationE = String.fromCharCode(97,99,111,108,111,114,95,101,95,53,56,0);
         goallogo9.push(notificationE.length >> (Math.min(3, Math.abs(parseInt(`${shoot4}`)))));
         middlebrightnessT.set(`${middlebrightnessT.size}`, middlebrightnessT.size);
         notificationE += `${middlebrightnessT.size | middlebrightnessT.size}`;
      let sentryc = shoot4 <= 6615487.0;
      do {
         shoot4 /= Math.max(parseInt(`${shoot4}`), 2);
         if (sentryc) {
            break;
         }
      } while (((shoot4 / (Math.max(4.28, 1))) < 3.36 && (shoot4 / 4.28) < 1.24) && sentryc);
         shoot4 += goallogo9.length & parseInt(`${shoot4}`);
      disconnectedlogoj = [subtextw.length ^ 1];
      selectionI -= 1;
   for (let c = 0; c < 1; c++) {
       let iconnewssharei = String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,107,95,51,0);
       let zhengpian7 = 5.0;
       let imagenetworkerre = 2.0;
       let libbufferp: Map<any, any> = new Map([[String.fromCharCode(118,95,51,55,95,102,105,108,108,105,110,103,0),true ], [String.fromCharCode(118,95,57,56,95,108,104,115,0),false ]]);
       let pusha = 2.0;
      let libnmst = 5921646.0 <= zhengpian7;
      do {
         zhengpian7 /= Math.max(parseFloat(`${1}`), 4);
         if (libnmst) {
            break;
         }
      } while (libnmst && (5.84 <= (5.29 + zhengpian7)));
      if (4.77 == (imagenetworkerre / 1.62) && 1.62 == (imagenetworkerre / (Math.max(pusha, 2)))) {
         pusha -= 2 ^ parseInt(`${zhengpian7}`);
      }
      for (let j = 0; j < 1; j++) {
         pusha += parseInt(`${imagenetworkerre}`) >> (Math.min(Math.abs(libbufferp.size), 3));
      }
         zhengpian7 *= parseFloat(`${parseInt(`${imagenetworkerre}`)}`);
      if (pusha > 5.87) {
         pusha -= iconnewssharei.length;
      }
          let shielddoneH: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,101,114,95,113,95,56,55,0),String.fromCharCode(118,95,57,51,95,115,101,116,102,100,0)], [String.fromCharCode(115,95,56,56,95,117,110,99,111,114,114,0),String.fromCharCode(119,95,52,57,95,97,112,112,114,111,120,0)]]);
          let topic6 = String.fromCharCode(122,95,54,56,95,117,110,115,97,118,101,100,0);
          let alertn = String.fromCharCode(102,114,101,111,112,101,110,95,52,95,54,52,0);
         imagenetworkerre -= parseFloat(`${topic6.length}`);
         shielddoneH.set(`${alertn}`, shielddoneH.size * alertn.length);
         topic6 = `${shielddoneH.size % 1}`;
      let exampleimageR = 5735104 >= libbufferp.size;
      do {
          let turndownT: Array<any> = [331, 268];
          let stringsq = String.fromCharCode(99,95,55,95,115,97,109,101,0);
         libbufferp = new Map([[iconnewssharei, iconnewssharei.length]]);
         turndownT.push((stringsq == String.fromCharCode(95,0) ? stringsq.length : turndownT.length));
         if (exampleimageR) {
            break;
         }
      } while (exampleimageR && (2.11 > pusha));
         pusha += 1;
      for (let c = 0; c < 1; c++) {
         libbufferp.set(`${imagenetworkerre}`, libbufferp.size);
      }
       let notificationfillemptyb = String.fromCharCode(102,95,55,51,95,101,115,99,97,112,101,115,0);
      for (let o = 0; o < 3; o++) {
         iconnewssharei = `${iconnewssharei.length ^ 3}`;
      }
         pusha /= Math.max(2, notificationfillemptyb.length);
         libbufferp = new Map([[`${zhengpian7}`, parseInt(`${zhengpian7}`) >> (Math.min(5, Math.abs(3)))]]);
       let orangedownarrowP = 2;
      if ((zhengpian7 - orangedownarrowP) < 5.14) {
         orangedownarrowP <<= Math.min(iconnewssharei.length, 1);
      }
      baseO += `${iconnewssharei.length}`;
   }
    overlayRef.current = true;

       let largebrightnessg = 1.0;
       let combined = 2.0;
       let utils7: Array<any> = [169, 903, 217];
         largebrightnessg -= parseInt(`${largebrightnessg}`);
      while (3 >= utils7.length) {
         utils7.push(utils7.length ^ 1);
         break;
      }
         combined /= Math.max(1, 2);
       let iconpipexpandL: Array<any> = [87, 277, 44];
       let setting3: Array<any> = [964, 896];
          let whiteanimationlivee = String.fromCharCode(108,111,103,115,95,115,95,55,0);
          let libfabricjnib = String.fromCharCode(99,104,97,114,95,56,95,49,57,0);
          let n_unlocku: Array<any> = [String.fromCharCode(97,95,54,48,95,109,117,108,116,105,112,97,114,116,0), String.fromCharCode(98,117,102,102,101,114,115,105,110,107,95,109,95,49,49,0), String.fromCharCode(121,95,53,49,95,115,109,100,109,0)];
         largebrightnessg += n_unlocku.length;
         whiteanimationlivee = `${2 << (Math.min(3, whiteanimationlivee.length))}`;
         libfabricjnib += `${whiteanimationlivee.length | 3}`;
         n_unlocku.push(3 >> (Math.min(1, whiteanimationlivee.length)));
         utils7.push(setting3.length);
       let iconarrowright7 = true;
       let libyoga0 = true;
         iconpipexpandL = [2];
      if ((2.16 * largebrightnessg) >= 3.81) {
         largebrightnessg *= 1 + parseInt(`${largebrightnessg}`);
      }
      themeE = `${graye.length}`;
       let predictiondefaultz: Array<any> = [891, 818, 662];
       let libavutily = String.fromCharCode(102,111,114,103,111,116,116,101,110,95,114,95,57,50,0);
       let hnewarchdefaultsz: Array<any> = [String.fromCharCode(99,111,109,112,114,101,115,115,105,111,110,95,119,95,52,51,0), String.fromCharCode(101,95,48,95,105,110,99,114,101,109,101,110,116,97,108,0)];
          let iconmegaphonee = 5;
          let filterL: Array<any> = [576, 66, 364];
         libavutily = `${predictiondefaultz.length}`;
         iconmegaphonee <<= Math.min(5, Math.abs(iconmegaphonee / (Math.max(filterL.length, 8))));
         filterL = [iconmegaphonee];
      for (let d = 0; d < 1; d++) {
         predictiondefaultz.push(3);
      }
      for (let d = 0; d < 1; d++) {
          let mapping9 = 3.0;
          let iconorientation9 = true;
         predictiondefaultz.push((String.fromCharCode(54,0) == libavutily ? libavutily.length : (iconorientation9 ? 1 : 3)));
         mapping9 /= Math.max(parseInt(`${mapping9}`), 5);
         iconorientation9 = 97.19 == mapping9;
      }
      let editM = String.fromCharCode(100,100,104,109,49,51,98,113,115,101,0) == libavutily;
      do {
         libavutily += `${2 ^ hnewarchdefaultsz.length}`;
         if (editM) {
            break;
         }
      } while (editM && (3 > (libavutily.length - predictiondefaultz.length)));
          let delegate_itK = 4.0;
          let acopy_sJ: Array<any> = [650, 9];
         predictiondefaultz = [hnewarchdefaultsz.length];
         delegate_itK /= Math.max(2, 1);
         acopy_sJ = [parseInt(`${delegate_itK}`)];
      if (libavutily.length < 1) {
         predictiondefaultz.push(hnewarchdefaultsz.length);
      }
      if (4 < (5 * predictiondefaultz.length)) {
         predictiondefaultz.push(hnewarchdefaultsz.length);
      }
      if (libavutily.endsWith(`${hnewarchdefaultsz.length}`)) {
         libavutily = `${(libavutily == String.fromCharCode(105,0) ? libavutily.length : hnewarchdefaultsz.length)}`;
      }
      while ((4 * predictiondefaultz.length) == 4) {
          let scoreZ = String.fromCharCode(108,111,99,107,115,95,53,95,54,50,0);
          let graphicsD: Array<any> = [253, 237];
          let runtime7 = 2.0;
          let twitterR = 0.0;
          let r_positionH = 2.0;
         predictiondefaultz = [graphicsD.length << (Math.min(Math.abs(2), 5))];
         scoreZ += `${scoreZ.length}`;
         graphicsD = [2];
         runtime7 *= parseFloat(`${parseInt(`${twitterR}`) * parseInt(`${r_positionH}`)}`);
         twitterR -= parseInt(`${runtime7}`) + scoreZ.length;
         r_positionH -= parseInt(`${runtime7}`);
         break;
      }
      themeE += `${basketballn.length % 2}`;
       let sharewhitex: Map<any, any> = new Map([[String.fromCharCode(97,95,56,49,95,115,117,98,99,101,108,0),true ], [String.fromCharCode(100,95,55,53,95,115,97,98,101,114,0),true ]]);
       let security1 = 2;
      let iconsubssuccessZ = 6535857 <= sharewhitex.size;
      do {
         sharewhitex = new Map([[`${sharewhitex.size}`, sharewhitex.size]]);
         if (iconsubssuccessZ) {
            break;
         }
      } while (iconsubssuccessZ && (4 <= (sharewhitex.size / (Math.max(2, 7))) || 2 <= (security1 / (Math.max(2, 3)))));
       let mimeD = 1.0;
         mimeD -= parseFloat(`${security1 * 3}`);
      let shootyesgoal_ = 6321056 <= security1;
      do {
          let libavutilc: Array<any> = [666, 273];
         security1 >>= Math.min(Math.abs(security1), 5);
         libavutilc.push(libavutilc.length << (Math.min(Math.abs(2), 3)));
         if (shootyesgoal_) {
            break;
         }
      } while ((4 <= (4 | sharewhitex.size)) && shootyesgoal_);
      let iconplayR = 6432750 >= security1;
      do {
         security1 %= Math.max(3, sharewhitex.size & 2);
         if (iconplayR) {
            break;
         }
      } while (iconplayR && (mimeD == security1));
         mimeD /= Math.max(3, parseFloat(`${3}`));
      inactiveQ += `${inactiveQ.length + iconnotificationnewU.size}`;
      subtextw = [graye.length];
      stylej += 2 << (Math.min(2, inactiveQ.length));
      graye.push(graye.length);
   for (let i = 0; i < 2; i++) {
       let actionsC = String.fromCharCode(110,101,111,110,95,50,95,57,48,0);
       let otherE = String.fromCharCode(99,98,108,107,95,48,95,54,57,0);
       let homeplayerO = 1;
       let iconpipexpandi = 5.0;
      let videoP = String.fromCharCode(99,52,102,102,110,51,114,101,117,0) == otherE;
      do {
          let imagewatchliveH: Array<any> = [854, 966, 145];
         otherE += "3";
         imagewatchliveH = [imagewatchliveH.length];
         if (videoP) {
            break;
         }
      } while ((otherE.startsWith(`${homeplayerO}`)) && videoP);
      for (let x = 0; x < 2; x++) {
         otherE = "1";
      }
      let componentt = otherE == String.fromCharCode(56,48,110,97,108,100,114,0);
      do {
         otherE += `${parseInt(`${iconpipexpandi}`)}`;
         if (componentt) {
            break;
         }
      } while ((!otherE.startsWith(`${iconpipexpandi}`)) && componentt);
         actionsC += `${2 << (Math.min(3, otherE.length))}`;
      while (actionsC.length >= 1) {
         actionsC = `${actionsC.length}`;
         break;
      }
         homeplayerO %= Math.max(2, otherE.length - 1);
      for (let n = 0; n < 1; n++) {
         homeplayerO ^= homeplayerO / 2;
      }
         iconpipexpandi -= 1 | homeplayerO;
         otherE += "1";
          let scorepopsoundZ: Array<any> = [356, 337];
         homeplayerO ^= homeplayerO;
         scorepopsoundZ = [scorepopsoundZ.length];
      for (let g = 0; g < 3; g++) {
         iconpipexpandi += parseInt(`${iconpipexpandi}`) % (Math.max(actionsC.length, 7));
      }
      while ((1 | actionsC.length) < 2) {
         iconpipexpandi -= otherE.length;
         break;
      }
      subtextw = [3];
   }
      stylej <<= Math.min(3, Math.abs(1));
   if (inactiveQ.startsWith(`${handler_.length}`)) {
      handler_ = [basketballn.length - handler_.length];
   }
      stylej %= Math.max(disconnectedlogoj.length >> (Math.min(Math.abs(2), 5)), 1);
      promotionP ^= disconnectedlogoj.length;
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
       let targeti = 5.0;
    let gradlewx = String.fromCharCode(99,95,50,56,95,111,109,112,108,105,99,97,116,105,111,110,0);
    let dplusf = 3.0;
    let chatroombackgroundD: Array<any> = [String.fromCharCode(98,95,53,51,95,101,110,99,114,121,112,116,0), String.fromCharCode(102,114,101,113,115,95,117,95,52,56,0)];
    let greyticks = String.fromCharCode(116,101,120,116,102,105,108,101,95,100,95,51,56,0);
    let stationsl = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,50,95,49,48,0);
    let libloggerM = 3.0;
    let sharemodalQ = false;
    let awayicon2 = false;
    let buttonm: Map<any, any> = new Map([[String.fromCharCode(110,95,51,48,95,99,108,97,115,104,101,100,0),String.fromCharCode(104,111,110,101,121,95,103,95,53,57,0)], [String.fromCharCode(114,101,116,105,110,97,95,116,95,54,50,0),String.fromCharCode(115,117,98,108,97,121,111,117,116,95,115,95,51,50,0)]]);
    let modityC: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,105,115,101,115,95,119,95,49,50,0),264], [String.fromCharCode(105,95,54,95,100,105,97,103,114,97,109,0),943], [String.fromCharCode(118,95,55,55,95,97,108,103,111,114,105,116,104,109,115,0),552]]);
    let whitesmalltickR = String.fromCharCode(97,98,115,108,95,105,95,52,51,0);
    let pushI: Map<any, any> = new Map([[String.fromCharCode(116,114,101,101,116,111,107,95,55,95,50,56,0),true ], [String.fromCharCode(105,116,111,97,95,107,95,52,53,0),false ]]);
    let editM = 5;
      gradlewx += `${parseInt(`${libloggerM}`) / 1}`;
   if (greyticks != String.fromCharCode(78,0)) {
      whitesmalltickR = "3";
   }
      targeti += parseFloat(`${stationsl.length >> (Math.min(Math.abs(3), 3))}`);
   for (let q = 0; q < 1; q++) {
      libloggerM += (greyticks == String.fromCharCode(89,0) ? greyticks.length : whitesmalltickR.length);
   }
       let chatbotphotoy = String.fromCharCode(114,116,114,101,101,100,101,112,116,104,95,99,95,57,54,0);
         chatbotphotoy = `${chatbotphotoy.length * 1}`;
      let ccdfbdabcabbbedbr = 8680124 >= chatbotphotoy.length;
      do {
         chatbotphotoy += `${chatbotphotoy.length}`;
         if (ccdfbdabcabbbedbr) {
            break;
         }
      } while (ccdfbdabcabbbedbr && (chatbotphotoy.length == 5));
      for (let w = 0; w < 2; w++) {
         chatbotphotoy += `${chatbotphotoy.length}`;
      }
      buttonm = new Map([[`${modityC.size}`, modityC.size]]);
      awayicon2 = 15.15 == targeti;
       let yellowvideoliveP: Array<any> = [329, 843, 972];
       let dataT = true;
       let rightP = 2.0;
         dataT = !dataT;
       let regeng_ = String.fromCharCode(110,95,54,56,95,109,97,112,112,105,110,103,0);
       let info_ = String.fromCharCode(120,95,49,51,95,115,104,97,114,101,100,0);
       let footballfieldc = String.fromCharCode(114,101,98,117,99,107,101,116,95,57,95,52,50,0);
       let playercommono: Map<any, any> = new Map([[String.fromCharCode(114,95,52,51,95,109,117,109,98,97,105,0),897], [String.fromCharCode(102,114,97,112,115,95,104,95,49,56,0),896], [String.fromCharCode(106,95,53,50,95,112,111,112,117,108,97,116,101,100,0),124]]);
         yellowvideoliveP = [parseInt(`${rightP}`) % 1];
      libloggerM /= Math.max(buttonm.size, 2);
   if (gradlewx.length <= 3 && 3 <= stationsl.length) {
       let iconnewchat7 = 0.0;
       let macauC = String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,95,111,95,53,52,0);
       let scrollviewM = String.fromCharCode(112,114,105,111,114,105,116,121,95,113,95,55,51,0);
       let interstitialY = false;
       let topic8: Map<any, any> = new Map([[String.fromCharCode(114,101,119,105,110,100,95,114,95,55,54,0),357], [String.fromCharCode(103,95,53,51,95,120,118,105,100,0),850], [String.fromCharCode(116,119,111,119,97,121,95,120,95,52,53,0),892]]);
      for (let l = 0; l < 1; l++) {
         macauC += `${macauC.length + 2}`;
      }
         scrollviewM = `${(macauC.length + (interstitialY ? 4 : 4))}`;
       let backU = String.fromCharCode(113,95,57,57,95,114,101,106,111,105,110,0);
       let filem = String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,101,95,50,53,0);
      let distJ = scrollviewM.length <= 4968424;
      do {
         scrollviewM = `${topic8.size | 1}`;
         if (distJ) {
            break;
         }
      } while ((filem == scrollviewM) && distJ);
         topic8.set(filem, 2);
          let alert0: Map<any, any> = new Map([[String.fromCharCode(98,95,56,57,95,109,101,114,103,105,110,103,0),424], [String.fromCharCode(104,95,52,57,95,117,110,109,97,112,0),946]]);
         filem += `${parseInt(`${iconnewchat7}`)}`;
         alert0 = new Map([[`${alert0.size}`, alert0.size]]);
         filem += `${1 ^ scrollviewM.length}`;
         scrollviewM = `${parseInt(`${iconnewchat7}`) / (Math.max(7, backU.length))}`;
         iconnewchat7 += filem.length;
      while (macauC == String.fromCharCode(70,0) && backU != String.fromCharCode(75,0)) {
         backU = `${(3 - (interstitialY ? 4 : 5))}`;
         break;
      }
      for (let q = 0; q < 1; q++) {
         backU += `${3 ^ topic8.size}`;
      }
          let tempnodatagifS = String.fromCharCode(108,95,55,50,95,102,105,110,103,101,114,115,0);
         macauC = `${topic8.size + backU.length}`;
         tempnodatagifS = `${tempnodatagifS.length / (Math.max(2, 7))}`;
          let dangery: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,105,110,103,115,95,101,95,49,53,0),true ], [String.fromCharCode(104,95,57,56,95,109,97,99,114,111,115,0),true ], [String.fromCharCode(110,95,50,95,115,117,109,100,105,102,102,0),true ]]);
          let yellowcirclebgc: Array<any> = [String.fromCharCode(99,108,117,116,95,119,95,55,50,0), String.fromCharCode(98,95,54,56,95,108,122,115,115,0)];
         iconnewchat7 -= 3;
         dangery = new Map([[`${dangery.size}`, yellowcirclebgc.length / (Math.max(3, dangery.size))]]);
         yellowcirclebgc.push(yellowcirclebgc.length);
         filem = `${1 | topic8.size}`;
         iconnewchat7 += filem.length >> (Math.min(5, scrollviewM.length));
      stationsl += `${modityC.size * 1}`;
   }
   while ((stationsl.length | 2) >= 4) {
      buttonm = new Map([[`${modityC.size}`, 3]]);
      break;
   }
      whitesmalltickR += `${(1 * (sharemodalQ ? 3 : 4))}`;
      whitesmalltickR = `${3 & chatroombackgroundD.length}`;

      if (videoRef.current) {
        videoRef.current.seek(isNaN(value) ? 0 : value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
       let libhermesF = String.fromCharCode(99,97,110,116,95,110,95,54,48,0);
    let closeX: Array<any> = [683, 473];
    let fullscreenminC = 5.0;
    let middlebrightness7 = 4.0;
    let cornershoot2: Array<any> = [112, 418, 289];
    let selly = String.fromCharCode(98,95,51,52,95,110,111,110,114,100,0);
    let othermatchdetailbgL = String.fromCharCode(108,111,103,111,117,114,108,95,52,95,53,55,0);
    let executoru = String.fromCharCode(114,116,112,101,110,99,95,97,95,57,49,0);
    let reminder3: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,113,112,95,56,95,55,0),String.fromCharCode(117,110,100,111,116,116,101,100,95,98,95,56,56,0)], [String.fromCharCode(113,117,97,110,116,105,108,101,95,110,95,51,56,0),String.fromCharCode(105,110,116,101,110,116,95,48,95,51,55,0)], [String.fromCharCode(105,110,102,95,109,95,56,54,0),String.fromCharCode(102,95,57,49,95,105,100,99,105,110,0)]]);
    let baseA: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,100,101,116,101,99,116,95,51,95,54,53,0),false ], [String.fromCharCode(101,110,100,95,99,95,55,55,0),false ], [String.fromCharCode(112,111,108,101,95,57,95,49,0),false ]]);
    let arrowdownh = 0;
    let j_playeru = 0.0;
    let imagesq = String.fromCharCode(109,107,118,119,114,105,116,101,114,95,108,95,54,54,0);
    let iconviewerx = 1.0;
    let vignetteH = String.fromCharCode(115,95,53,57,95,115,101,110,100,101,114,115,0);
    let privacyk = String.fromCharCode(98,95,53,49,95,99,111,109,112,105,116,97,98,108,101,0);
    let crownu = false;
       let statisticsw = String.fromCharCode(120,95,57,52,95,99,111,110,118,115,97,109,112,0);
       let fullm = 4;
       let libjsinspectorz = 5.0;
      for (let x = 0; x < 2; x++) {
          let launchx: Array<any> = [190, 755, 456];
          let memberz: Map<any, any> = new Map([[String.fromCharCode(115,95,54,52,95,97,108,108,101,116,0),275], [String.fromCharCode(115,112,105,110,108,111,99,107,95,122,95,48,0),976]]);
          let shootnogoaly = 1.0;
          let untick9 = false;
         fullm >>= Math.min(Math.abs(((untick9 ? 2 : 4) + launchx.length)), 1);
         launchx.push(3);
         memberz = new Map([[`${memberz.size}`, parseInt(`${shootnogoaly}`)]]);
         shootnogoaly -= parseFloat(`${3}`);
         untick9 = shootnogoaly == 97.19 && memberz.size == 22;
      }
       let predictionn = 1.0;
       let linem = 4.0;
          let topon8 = String.fromCharCode(102,117,122,122,101,114,95,101,95,55,52,0);
          let iconpointscoreZ = String.fromCharCode(106,95,50,48,95,110,99,111,110,102,0);
         predictionn += parseFloat(`${parseInt(`${linem}`) / (Math.max(7, statisticsw.length))}`);
         topon8 += `${iconpointscoreZ.length}`;
         iconpointscoreZ += "2";
       let sheetI = String.fromCharCode(106,102,105,101,108,100,115,95,113,95,50,50,0);
          let arrowrightR = String.fromCharCode(100,97,114,116,115,95,105,95,54,48,0);
          let videoq = String.fromCharCode(105,95,49,53,95,114,97,116,105,111,110,97,108,0);
          let hooksx = String.fromCharCode(112,95,49,52,95,115,101,116,0);
         predictionn *= parseFloat(`${fullm * 3}`);
         arrowrightR = `${arrowrightR.length + 2}`;
         videoq = "3";
         hooksx += `${(String.fromCharCode(54,0) == hooksx ? videoq.length : hooksx.length)}`;
      while ((sheetI.length ^ 4) == 1) {
          let watch3: Map<any, any> = new Map([[String.fromCharCode(109,101,109,109,101,116,104,111,100,115,95,122,95,50,57,0),837], [String.fromCharCode(104,95,56,54,95,115,99,116,112,117,116,105,108,0),510]]);
          let notification5 = String.fromCharCode(115,95,54,48,95,102,105,108,108,0);
          let mintegralO: Array<any> = [String.fromCharCode(110,95,49,95,115,112,97,114,107,115,0), String.fromCharCode(112,95,54,52,95,98,105,116,114,97,116,101,0)];
          let privatechatbgw = String.fromCharCode(108,95,49,56,95,105,110,105,116,105,97,108,115,0);
          let subs3: Map<any, any> = new Map([[String.fromCharCode(100,95,50,48,95,114,101,112,108,105,99,97,116,101,100,0),String.fromCharCode(114,101,108,117,95,98,95,55,49,0)], [String.fromCharCode(109,111,110,111,99,104,114,111,109,101,95,98,95,53,0),String.fromCharCode(112,97,105,100,95,116,95,57,50,0)], [String.fromCharCode(108,95,50,57,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0),String.fromCharCode(108,95,55,54,95,109,117,108,114,101,115,0)]]);
         libjsinspectorz += 1 >> (Math.min(1, notification5.length));
         watch3 = new Map([[`${mintegralO.length}`, mintegralO.length]]);
         notification5 = `${watch3.size}`;
         privatechatbgw = `${subs3.size}`;
         subs3.set(privatechatbgw, privatechatbgw.length >> (Math.min(Math.abs(2), 2)));
         break;
      }
      let dangerp = 7288651 >= statisticsw.length;
      do {
         statisticsw += `${fullm}`;
         if (dangerp) {
            break;
         }
      } while (dangerp && (3 == (statisticsw.length + 5) && 5.77 == (1.71 - linem)));
       let nativeG = 1.0;
       let thumbnaile = 0.0;
         nativeG += parseFloat(`${parseInt(`${predictionn}`)}`);
      fullscreenminC -= (String.fromCharCode(53,0) == selly ? selly.length : reminder3.size);
      selly += "1";
   if ((3 & executoru.length) == 4 || 1.23 == (middlebrightness7 - parseFloat(`${executoru.length}`))) {
       let descw = true;
       let calendaro: Array<any> = [876, 732];
       let moonm: Map<any, any> = new Map([[String.fromCharCode(99,117,108,115,104,105,102,116,95,50,95,53,55,0),647], [String.fromCharCode(101,115,116,105,109,97,116,111,114,95,120,95,51,54,0),582]]);
       let handler8 = 2.0;
       let basketballtrophyY = false;
      for (let g = 0; g < 2; g++) {
         descw = calendaro.length >= 54;
      }
         calendaro.push(parseInt(`${handler8}`) >> (Math.min(5, Math.abs(2))));
       let libcrashsdk6 = true;
         basketballtrophyY = libcrashsdk6;
         basketballtrophyY = moonm.get(`${descw}`) == null;
      for (let h = 0; h < 1; h++) {
         calendaro = [calendaro.length];
      }
         calendaro.push(3);
      while (!basketballtrophyY) {
          let update_prs = String.fromCharCode(111,112,97,116,111,109,95,121,95,49,0);
          let libimagepipelineN = String.fromCharCode(116,105,109,105,110,103,115,95,101,95,53,57,0);
          let constantsh = 0.0;
          let descS = String.fromCharCode(113,95,56,54,95,98,114,97,110,100,115,0);
          let nalyticsg = 5.0;
         descw = nalyticsg == 70.79 || !libcrashsdk6;
         update_prs = `${descS.length - 3}`;
         libimagepipelineN = `${parseInt(`${constantsh}`) + 2}`;
         constantsh += parseFloat(`${update_prs.length - 2}`);
         descS += `${libimagepipelineN.length}`;
         nalyticsg *= parseFloat(`${libimagepipelineN.length}`);
         break;
      }
      if (libcrashsdk6) {
         libcrashsdk6 = handler8 <= 28.32 || !basketballtrophyY;
      }
      while (libcrashsdk6 || !basketballtrophyY) {
         basketballtrophyY = libcrashsdk6;
         break;
      }
          let sort7 = 5.0;
          let libjsinspectorD = 2;
          let topice: Array<any> = [882, 420];
         moonm.set(`${libcrashsdk6}`, 2 << (Math.min(Math.abs(parseInt(`${sort7}`)), 5)));
         sort7 /= Math.max(2, parseFloat(`${libjsinspectorD & topice.length}`));
         libjsinspectorD %= Math.max(1, libjsinspectorD + 3);
         topice.push(topice.length >> (Math.min(Math.abs(1), 4)));
       let basketballs: Array<any> = [597, 49, 487];
      while (2.41 < (2.75 * handler8)) {
         handler8 /= Math.max(parseFloat(`${basketballs.length - 2}`), 4);
         break;
      }
      let iconscheduleB = 6876862 <= moonm.size;
      do {
         moonm.set(`${basketballtrophyY}`, 1 << (Math.min(Math.abs(parseInt(`${handler8}`)), 5)));
         if (iconscheduleB) {
            break;
         }
      } while ((parseInt(`${handler8}`) > moonm.size) && iconscheduleB);
         basketballtrophyY = handler8 > 79.69;
      middlebrightness7 /= Math.max(parseFloat(`${2}`), 3);
   }
      selly = `${baseA.size + parseInt(`${fullscreenminC}`)}`;
       let notificationQ: Array<any> = [908, 525];
      for (let f = 0; f < 3; f++) {
          let modalP: Map<any, any> = new Map([[String.fromCharCode(110,95,57,56,95,100,101,112,111,115,105,116,0),383], [String.fromCharCode(122,95,49,52,95,116,104,114,101,115,104,0),924]]);
          let imagenetworkerrf = String.fromCharCode(106,95,52,52,95,99,97,108,99,117,108,97,116,101,0);
         notificationQ = [notificationQ.length];
         modalP.set(imagenetworkerrf, 2);
         imagenetworkerrf += `${imagenetworkerrf.length}`;
      }
         notificationQ.push(notificationQ.length * 1);
         notificationQ = [3];
      fullscreenminC *= othermatchdetailbgL.length | arrowdownh;
       let y_positiont = String.fromCharCode(111,95,52,49,95,116,115,101,113,0);
       let layoutf: Map<any, any> = new Map([[String.fromCharCode(111,114,112,104,97,110,95,107,95,52,51,0),275], [String.fromCharCode(97,95,53,55,95,100,105,115,109,105,115,115,101,100,0),125], [String.fromCharCode(99,95,50,95,114,100,98,120,0),458]]);
      if ((y_positiont.length & layoutf.size) <= 4) {
         y_positiont += `${(String.fromCharCode(56,0) == y_positiont ? y_positiont.length : layoutf.size)}`;
      }
         layoutf = new Map([[`${layoutf.size}`, layoutf.size % 3]]);
          let description_wv6 = String.fromCharCode(121,95,54,51,95,97,98,98,114,0);
         layoutf.set(y_positiont, y_positiont.length >> (Math.min(4, description_wv6.length)));
      while (1 == y_positiont.length) {
         y_positiont = `${3 >> (Math.min(1, Math.abs(layoutf.size)))}`;
         break;
      }
      if (2 == (y_positiont.length >> (Math.min(Math.abs(4), 5)))) {
         y_positiont = `${layoutf.size + y_positiont.length}`;
      }
      for (let q = 0; q < 2; q++) {
         layoutf.set(`${y_positiont}`, layoutf.size << (Math.min(Math.abs(2), 1)));
      }
      libhermesF = `${selly.length}`;

    clearTimeout(iconTimer.current);

       let sharemodalm = 4.0;
       let typingq = 3;
       let matchinactiveJ = 0.0;
          let circle9 = 0;
          let values5 = 1.0;
          let logouserO: Map<any, any> = new Map([[String.fromCharCode(98,95,51,51,95,109,111,118,105,101,0),String.fromCharCode(110,118,100,101,99,95,55,95,54,51,0)], [String.fromCharCode(111,116,104,101,114,115,95,109,95,54,55,0),String.fromCharCode(116,114,97,100,101,95,111,95,50,0)]]);
         sharemodalm += parseFloat(`${typingq}`);
         circle9 &= circle9;
         values5 /= Math.max(circle9 & 2, 1);
         logouserO = new Map([[`${values5}`, parseInt(`${values5}`) | circle9]]);
      for (let i = 0; i < 3; i++) {
         typingq |= parseInt(`${matchinactiveJ}`);
      }
         typingq -= parseInt(`${sharemodalm}`);
      let usernameC = 8696133.0 <= sharemodalm;
      do {
         sharemodalm *= parseFloat(`${typingq ^ 3}`);
         if (usernameC) {
            break;
         }
      } while (((typingq >> (Math.min(Math.abs(2), 4))) < 2 && 3.62 < (sharemodalm - 5.7)) && usernameC);
          let recommendation3 = String.fromCharCode(118,105,115,105,116,111,114,95,122,95,54,54,0);
         typingq |= typingq / (Math.max(parseInt(`${matchinactiveJ}`), 4));
         recommendation3 += "3";
      middlebrightness7 += (parseFloat(`${selly == String.fromCharCode(52,0) ? selly.length : executoru.length}`));
   while ((3 & executoru.length) <= 2 || (baseA.size & 3) <= 4) {
       let libtobS = false;
       let dicelogoA = 0;
         libtobS = !libtobS;
         libtobS = !libtobS;
          let whitevideoliveW: Array<any> = [917, 697];
          let livesharey: Array<any> = [String.fromCharCode(98,95,57,49,95,103,104,97,115,104,0), String.fromCharCode(97,97,99,101,110,99,116,97,98,95,117,95,54,53,0)];
          let typesq = String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,102,95,56,52,0);
         dicelogoA >>= Math.min(3, Math.abs(3));
         whitevideoliveW.push(1);
         livesharey.push(livesharey.length);
         typesq += `${livesharey.length}`;
      while (4 >= dicelogoA && 2 >= (dicelogoA + 4)) {
          let hookH = 5;
         libtobS = 12 < dicelogoA;
         hookH ^= hookH - 1;
         break;
      }
      if (!libtobS) {
         dicelogoA *= dicelogoA ^ 1;
      }
          let predictionbuttone = String.fromCharCode(112,95,50,50,95,97,112,102,115,0);
         libtobS = dicelogoA == 11;
         predictionbuttone = `${2 & predictionbuttone.length}`;
      baseA.set(`${othermatchdetailbgL}`, othermatchdetailbgL.length);
      break;
   }
   let predictionactiveq = 6231153 >= cornershoot2.length;
   do {
      cornershoot2 = [2];
      if (predictionactiveq) {
         break;
      }
   } while (predictionactiveq && (cornershoot2.length > executoru.length));
   for (let w = 0; w < 2; w++) {
      closeX.push(selly.length / 2);
   }
      fullscreenminC /= Math.max(baseA.size, 1);
       let reactnativeratings0: Array<any> = [String.fromCharCode(101,95,53,55,95,98,117,98,98,108,101,0), String.fromCharCode(101,118,112,111,114,116,111,112,95,56,95,53,55,0), String.fromCharCode(97,95,49,56,95,113,100,109,99,0)];
       let mbsplashs = String.fromCharCode(111,95,57,57,95,100,101,105,110,116,101,114,108,97,99,101,0);
         mbsplashs += `${reactnativeratings0.length ^ mbsplashs.length}`;
         mbsplashs = "2";
      if (3 < (3 >> (Math.min(3, mbsplashs.length)))) {
         reactnativeratings0.push(reactnativeratings0.length & 1);
      }
      for (let d = 0; d < 3; d++) {
         reactnativeratings0 = [reactnativeratings0.length];
      }
         mbsplashs = `${reactnativeratings0.length}`;
       let entryr = true;
       let memberp = true;
      closeX = [parseInt(`${j_playeru}`)];
    setShowIcon(true);

   if (reminder3.get(`${baseA.size}`) == null) {
      reminder3.set(othermatchdetailbgL, (String.fromCharCode(101,0) == othermatchdetailbgL ? parseInt(`${middlebrightness7}`) : othermatchdetailbgL.length));
   }
       let themeV: Map<any, any> = new Map([[String.fromCharCode(108,95,53,95,108,111,99,107,115,99,114,101,101,110,0),String.fromCharCode(103,101,110,101,115,105,115,95,54,95,50,50,0)], [String.fromCharCode(102,95,50,95,110,105,100,115,0),String.fromCharCode(103,95,53,53,95,111,102,111,114,109,97,116,0)]]);
       let macaus = String.fromCharCode(114,103,98,97,95,122,95,55,52,0);
         macaus = `${themeV.size % 2}`;
         macaus = `${macaus.length / 3}`;
         macaus += `${macaus.length % 2}`;
         macaus += `${(String.fromCharCode(88,0) == macaus ? macaus.length : themeV.size)}`;
          let circler = String.fromCharCode(99,111,109,112,108,101,116,101,95,100,95,57,54,0);
          let libruntimeexecutor_ = String.fromCharCode(115,101,97,114,99,104,105,110,103,95,117,95,57,0);
          let zhubow = 0;
         themeV.set(libruntimeexecutor_, (String.fromCharCode(122,0) == libruntimeexecutor_ ? zhubow : libruntimeexecutor_.length));
         circler += `${circler.length}`;
          let carouselt = String.fromCharCode(119,97,116,99,104,101,115,95,117,95,55,50,0);
          let libreactperfloggerjniw = 0.0;
          let resulth = 0.0;
         macaus = `${themeV.size}`;
         carouselt = `${2 | parseInt(`${libreactperfloggerjniw}`)}`;
         libreactperfloggerjniw -= parseInt(`${libreactperfloggerjniw}`) - 3;
         resulth *= parseFloat(`${parseInt(`${resulth}`)}`);
      arrowdownh >>= Math.min(Math.abs(parseInt(`${j_playeru}`)), 5);
   let backiconmaskU = cornershoot2.length >= 6753599;
   do {
       let iconscheduleC: Map<any, any> = new Map([[String.fromCharCode(118,115,101,114,118,105,99,101,95,104,95,51,51,0),526], [String.fromCharCode(119,114,105,116,101,99,104,101,99,107,95,122,95,56,53,0),219], [String.fromCharCode(108,111,97,100,95,48,95,50,49,0),894]]);
       let materialV = true;
       let scrollviewz = String.fromCharCode(107,95,51,48,95,116,106,98,101,110,99,104,116,101,115,116,0);
       let mintegralc = String.fromCharCode(105,95,52,56,95,117,110,105,109,112,108,101,109,101,110,116,101,100,0);
      for (let i = 0; i < 3; i++) {
         iconscheduleC.set(`${mintegralc}`, (String.fromCharCode(113,0) == mintegralc ? iconscheduleC.size : mintegralc.length));
      }
      for (let v = 0; v < 2; v++) {
         iconscheduleC = new Map([[scrollviewz, (String.fromCharCode(103,0) == mintegralc ? scrollviewz.length : mintegralc.length)]]);
      }
      let basketballx = String.fromCharCode(112,121,50,105,112,53,0) == scrollviewz;
      do {
         scrollviewz += `${((materialV ? 3 : 4))}`;
         if (basketballx) {
            break;
         }
      } while ((!scrollviewz.endsWith(mintegralc)) && basketballx);
      for (let k = 0; k < 3; k++) {
         scrollviewz = `${scrollviewz.length >> (Math.min(Math.abs(1), 5))}`;
      }
      for (let z = 0; z < 3; z++) {
          let libapminsightb5 = String.fromCharCode(118,95,53,55,95,115,117,98,115,116,114,105,110,103,0);
          let huaweiK: Array<any> = [785, 441];
          let foundt = 1;
          let vignettef = false;
          let runtimeschedulerD = 1.0;
         iconscheduleC = new Map([[mintegralc, 2]]);
         libapminsightb5 += `${(libapminsightb5 == String.fromCharCode(97,0) ? foundt : libapminsightb5.length)}`;
         huaweiK.push(parseInt(`${runtimeschedulerD}`));
         foundt &= (libapminsightb5 == String.fromCharCode(107,0) ? huaweiK.length : libapminsightb5.length);
         vignettef = 4.85 < runtimeschedulerD;
      }
      cornershoot2.push(1);
      if (backiconmaskU) {
         break;
      }
   } while ((!Array.from(reminder3.keys()).includes(`${cornershoot2.length}`)) && backiconmaskU);
      middlebrightness7 /= Math.max(1, parseFloat(`${selly.length - 3}`));
      libhermesF += "2";
      fullscreenminC *= 3;
    if (isPause) {

      j_playeru *= baseA.size % (Math.max(10, libhermesF.length));
   for (let o = 0; o < 3; o++) {
      othermatchdetailbgL += `${libhermesF.length << (Math.min(Math.abs(2), 3))}`;
   }
      othermatchdetailbgL += `${libhermesF.length}`;
   while (5 == (executoru.length * 5) && (baseA.size * 5) == 5) {
      executoru = `${othermatchdetailbgL.length % 2}`;
      break;
   }
      closeX = [reminder3.size ^ 2];
   if ((baseA.size << (Math.min(2, Math.abs(reminder3.size)))) <= 2 || (baseA.size << (Math.min(Math.abs(2), 2))) <= 1) {
       let condensedw = String.fromCharCode(110,117,109,112,97,100,95,56,95,56,0);
       let shootyesgoalp = String.fromCharCode(117,95,56,95,97,100,115,0);
      let matchactiveS = shootyesgoalp == String.fromCharCode(56,50,50,99,113,98,0);
      do {
         shootyesgoalp = `${2 >> (Math.min(4, condensedw.length))}`;
         if (matchactiveS) {
            break;
         }
      } while ((2 < shootyesgoalp.length) && matchactiveS);
         shootyesgoalp = `${condensedw.length}`;
      let subtextV = shootyesgoalp == String.fromCharCode(55,106,52,99,109,106,0);
      do {
          let friendsN = 2.0;
          let libturbomodulejsijniH = 3.0;
         shootyesgoalp += `${shootyesgoalp.length % (Math.max(3, condensedw.length))}`;
         friendsN /= Math.max(parseFloat(`${3 ^ parseInt(`${friendsN}`)}`), 2);
         libturbomodulejsijniH += parseFloat(`${parseInt(`${friendsN}`) * 1}`);
         if (subtextV) {
            break;
         }
      } while ((!shootyesgoalp.startsWith(condensedw)) && subtextV);
      if (condensedw != shootyesgoalp) {
         shootyesgoalp += `${shootyesgoalp.length}`;
      }
      while (5 < shootyesgoalp.length) {
         shootyesgoalp = `${condensedw.length}`;
         break;
      }
         shootyesgoalp = `${(shootyesgoalp == String.fromCharCode(71,0) ? shootyesgoalp.length : condensedw.length)}`;
      baseA = new Map([[`${reminder3.size}`, 1 >> (Math.min(4, closeX.length))]]);
   }
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    else {

   while ((cornershoot2.length * selly.length) >= 1) {
      selly += `${parseInt(`${middlebrightness7}`) >> (Math.min(Math.abs(2), 1))}`;
      break;
   }
      fullscreenminC /= Math.max(3, 1);
   let modelsO = cornershoot2.length >= 4965231;
   do {
      cornershoot2 = [cornershoot2.length];
      if (modelsO) {
         break;
      }
   } while (modelsO && ((baseA.size & cornershoot2.length) > 1 || (1 & cornershoot2.length) > 1));
   let libimagepipelineb = fullscreenminC <= 9572620.0;
   do {
      fullscreenminC -= 1 ^ libhermesF.length;
      if (libimagepipelineb) {
         break;
      }
   } while ((2.2 > middlebrightness7) && libimagepipelineb);
       let vignettem = String.fromCharCode(122,95,50,54,95,114,97,103,103,97,98,108,101,0);
       let full7 = true;
      let basketballdetailsbgq = vignettem == String.fromCharCode(120,99,118,48,53,51,0);
      do {
          let changeE = 5.0;
          let indicatoru = String.fromCharCode(110,101,97,114,95,119,95,52,51,0);
          let bodant: Map<any, any> = new Map([[String.fromCharCode(101,95,57,95,114,101,99,111,110,105,110,116,101,114,0),309], [String.fromCharCode(115,95,52,57,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0),445]]);
          let iconmorex = 0.0;
         vignettem = `${vignettem.length}`;
         changeE += 1 - bodant.size;
         indicatoru += `${parseInt(`${changeE}`)}`;
         bodant.set(`${changeE}`, bodant.size + 1);
         iconmorex *= indicatoru.length ^ 3;
         if (basketballdetailsbgq) {
            break;
         }
      } while (basketballdetailsbgq && (full7 || 2 < vignettem.length));
      for (let p = 0; p < 1; p++) {
         full7 = (((full7 ? 17 : vignettem.length) ^ vignettem.length) < 17);
      }
      let arrowselectdownX = vignettem.length >= 9899093;
      do {
          let unreadH = true;
          let m_centerU = 0.0;
          let notification5e = false;
         vignettem = `${((notification5e ? 1 : 4) << (Math.min(5, Math.abs(3))))}`;
         unreadH = 56.18 > m_centerU || 56.18 > m_centerU;
         if (arrowselectdownX) {
            break;
         }
      } while ((vignettem.length >= 4) && arrowselectdownX);
      let referrerm = String.fromCharCode(120,110,101,0) == vignettem;
      do {
          let redirecto: Map<any, any> = new Map([[String.fromCharCode(116,95,55,50,95,99,97,108,99,117,108,97,116,105,111,110,0),898], [String.fromCharCode(98,95,50,57,95,97,115,115,101,115,115,109,101,110,116,0),717], [String.fromCharCode(100,101,113,117,101,117,101,100,95,113,95,55,52,0),37]]);
          let libapminsightai = 5.0;
          let actionr: Map<any, any> = new Map([[String.fromCharCode(106,118,101,114,115,105,111,110,95,50,95,50,0),157], [String.fromCharCode(104,95,51,51,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0),942], [String.fromCharCode(100,99,97,100,99,116,95,120,95,50,49,0),51]]);
          let gestureso = true;
         vignettem = `${redirecto.size % (Math.max(5, actionr.size))}`;
         redirecto = new Map([[`${gestureso}`, parseInt(`${libapminsightai}`) + 2]]);
         libapminsightai -= parseFloat(`${3 & parseInt(`${libapminsightai}`)}`);
         actionr.set(`${gestureso}`, 1 << (Math.min(Math.abs(parseInt(`${libapminsightai}`)), 4)));
         if (referrerm) {
            break;
         }
      } while (referrerm && (!full7));
      for (let k = 0; k < 3; k++) {
         vignettem = `${vignettem.length}`;
      }
      for (let y = 0; y < 2; y++) {
          let logos = 0.0;
         vignettem += `${((full7 ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${logos}`)), 4)))}`;
      }
      imagesq = `${parseInt(`${j_playeru}`) >> (Math.min(1, Math.abs(arrowdownh)))}`;
       let benefitu = String.fromCharCode(99,111,109,112,97,114,101,102,95,52,95,52,0);
      if (benefitu != benefitu) {
          let latn4 = 5;
         benefitu = `${(benefitu == String.fromCharCode(110,0) ? benefitu.length : latn4)}`;
      }
      if (4 <= benefitu.length) {
         benefitu += "1";
      }
      for (let e = 0; e < 3; e++) {
          let philippines5 = 0;
         benefitu += `${benefitu.length}`;
         philippines5 /= Math.max(philippines5, 1);
      }
      imagesq += `${benefitu.length % (Math.max(selly.length, 2))}`;
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let mailm = String.fromCharCode(100,117,112,115,95,116,95,54,51,0);
    let wifiroutero: Map<any, any> = new Map([[String.fromCharCode(115,95,53,48,95,110,100,101,102,0),String.fromCharCode(111,112,101,110,95,100,95,51,53,0)], [String.fromCharCode(100,95,53,48,95,99,111,101,102,102,115,112,0),String.fromCharCode(105,95,57,57,95,112,114,101,115,101,110,116,101,100,0)]]);
    let indicatorB = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,103,95,57,0);
    let codeA: Array<any> = [916, 521, 305];
    let sortH = String.fromCharCode(99,111,110,118,101,114,115,105,111,110,115,95,53,95,55,0);
    let dialogU = 3;
    let statisticsinactive2 = true;
    let activityG = 0;
    let telegraml = String.fromCharCode(112,95,49,51,95,109,112,116,111,97,110,110,101,120,98,0);
    let liveg = 2;
    let dragclosep = String.fromCharCode(118,95,54,50,95,118,97,108,0);
    let homeloadingA = String.fromCharCode(109,95,55,53,95,101,99,111,109,112,114,101,115,115,111,114,0);
    let emojiw = 0.0;
    let malaysiac: Map<any, any> = new Map([[String.fromCharCode(118,99,101,110,99,95,117,95,52,57,0),String.fromCharCode(116,106,117,116,105,108,95,110,95,51,55,0)], [String.fromCharCode(103,95,52,95,105,100,101,110,116,105,102,105,97,98,108,101,0),String.fromCharCode(116,95,54,95,101,116,101,114,110,105,116,121,0)]]);
    let arrowdown1 = String.fromCharCode(104,95,53,52,95,99,111,109,98,105,110,101,100,0);
    let baselineB = 0.0;
    let headerw = String.fromCharCode(120,95,49,50,95,109,101,116,97,98,111,100,121,0);
      codeA = [((statisticsinactive2 ? 5 : 1) - activityG)];
   let penaltymatchiconJ = sortH.length <= 9216284;
   do {
      sortH = `${indicatorB.length}`;
      if (penaltymatchiconJ) {
         break;
      }
   } while (((1 << (Math.min(3, sortH.length))) == 1 && 1 == (1 << (Math.min(5, sortH.length)))) && penaltymatchiconJ);
      homeloadingA += `${codeA.length + 3}`;
   for (let v = 0; v < 3; v++) {
      telegraml += `${2 | sortH.length}`;
   }
      dialogU -= 2;
      malaysiac = new Map([[`${wifiroutero.size}`, 3 >> (Math.min(1, mailm.length))]]);
   if (statisticsinactive2) {
      activityG /= Math.max(2, mailm.length);
   }
      malaysiac = new Map([[`${activityG}`, activityG % (Math.max(7, parseInt(`${emojiw}`)))]]);
   while (Array.from(malaysiac.values()).includes(dialogU)) {
      dialogU -= 1 % (Math.max(8, wifiroutero.size));
      break;
   }
   while ((dragclosep.length ^ 3) <= 3) {
      codeA = [((statisticsinactive2 ? 1 : 2) % 3)];
      break;
   }
   if (2 >= wifiroutero.size || 1 >= (wifiroutero.size >> (Math.min(Math.abs(2), 2)))) {
       let textinputN = 0.0;
      if ((textinputN / 4.8) > 2.75) {
         textinputN -= parseFloat(`${parseInt(`${textinputN}`) ^ 2}`);
      }
      if (4.19 > textinputN) {
          let stringO = String.fromCharCode(119,122,97,101,115,95,122,95,54,51,0);
          let stylex: Array<any> = [String.fromCharCode(112,114,102,95,52,95,56,56,0), String.fromCharCode(113,95,51,53,95,106,97,99,111,98,105,0), String.fromCharCode(106,95,49,53,95,118,97,108,117,101,100,0)];
          let filleda = String.fromCharCode(102,97,115,116,95,56,95,54,57,0);
          let feedbackr = true;
          let nodel = 2.0;
         textinputN += (parseFloat(`${String.fromCharCode(95,0) == filleda ? parseInt(`${nodel}`) : filleda.length}`));
         stringO += `${(String.fromCharCode(80,0) == stringO ? (feedbackr ? 5 : 3) : stringO.length)}`;
         stylex = [stylex.length];
         feedbackr = stringO.length <= stylex.length;
         nodel *= (String.fromCharCode(65,0) == stringO ? stringO.length : (feedbackr ? 3 : 5));
      }
          let libcxxcomponentsX = String.fromCharCode(97,108,105,103,110,101,114,95,111,95,56,57,0);
         textinputN /= Math.max(parseFloat(`${libcxxcomponentsX.length}`), 3);
      wifiroutero = new Map([[mailm, telegraml.length]]);
   }
   if (4 > (activityG ^ liveg)) {
      activityG /= Math.max(codeA.length, 1);
   }
      indicatorB = `${(String.fromCharCode(122,0) == homeloadingA ? homeloadingA.length : parseInt(`${emojiw}`))}`;
   for (let k = 0; k < 1; k++) {
      emojiw /= Math.max(parseFloat(`${1}`), 5);
   }

    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration])

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = useCallback(() => {
       let dpluso = String.fromCharCode(98,108,111,111,109,95,116,95,52,48,0);
    let uimanagerE: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,115,95,52,95,53,48,0),853], [String.fromCharCode(119,114,105,116,101,108,111,99,107,95,106,95,52,51,0),9], [String.fromCharCode(105,104,100,114,95,57,95,51,0),191]]);
    let eventR: Array<any> = [792, 136, 449];
    let ccdfbdabcabbbedbS = String.fromCharCode(100,99,97,100,115,112,95,106,95,55,48,0);
    let profileinactivee = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,120,95,55,0);
    let defaultbasketballbg_ = String.fromCharCode(98,111,100,101,114,95,102,95,54,49,0);
    let watchC = String.fromCharCode(115,95,51,49,95,100,101,114,105,118,101,0);
    let appsv = String.fromCharCode(100,101,108,101,116,101,95,99,95,50,48,0);
    let imagewatchlivef = String.fromCharCode(110,95,49,95,115,99,114,111,108,108,105,110,103,0);
    let libhermesy = true;
    let hometeamfieldK: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,101,100,95,49,95,54,0),String.fromCharCode(99,95,52,95,112,108,117,114,97,108,0)], [String.fromCharCode(104,95,52,49,95,105,97,100,115,116,120,0),String.fromCharCode(99,111,115,105,95,98,95,51,48,0)], [String.fromCharCode(108,105,115,116,110,101,114,115,95,102,95,57,52,0),String.fromCharCode(100,95,50,55,95,101,114,114,0)]]);
    let memberg = 2;
    let clockb = String.fromCharCode(109,111,99,107,101,100,95,52,95,52,51,0);
    let iconclosewhitebgj = 2;
   for (let k = 0; k < 3; k++) {
       let yellowcirclebg7 = String.fromCharCode(115,99,104,101,109,101,115,95,119,95,52,52,0);
         yellowcirclebg7 += "2";
      let robotof = yellowcirclebg7.length <= 4943798;
      do {
         yellowcirclebg7 = `${3 ^ yellowcirclebg7.length}`;
         if (robotof) {
            break;
         }
      } while (robotof && (yellowcirclebg7.length == 1));
         yellowcirclebg7 = `${(String.fromCharCode(100,0) == yellowcirclebg7 ? yellowcirclebg7.length : yellowcirclebg7.length)}`;
      defaultbasketballbg_ = `${uimanagerE.size}`;
   }
      profileinactivee = `${uimanagerE.size}`;

    if (isBodanRef.current) {

      defaultbasketballbg_ += "2";
   while (watchC != defaultbasketballbg_) {
       let libnmsU = 4;
          let loadingd = true;
          let defaultplayerimgT: Array<any> = [String.fromCharCode(105,115,112,108,97,121,95,113,95,55,51,0), String.fromCharCode(119,95,53,54,95,100,105,100,0), String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,56,95,56,56,0)];
          let predictionbannersharedv = 3;
         libnmsU &= defaultplayerimgT.length | libnmsU;
         loadingd = !loadingd;
         defaultplayerimgT = [2 >> (Math.min(Math.abs(predictionbannersharedv), 4))];
         predictionbannersharedv <<= Math.min(3, Math.abs(predictionbannersharedv));
         libnmsU >>= Math.min(4, Math.abs(2));
         libnmsU += 2 | libnmsU;
      defaultbasketballbg_ = `${imagewatchlivef.length * 1}`;
      break;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

   while (defaultbasketballbg_ == String.fromCharCode(122,0)) {
      profileinactivee = `${ccdfbdabcabbbedbS.length ^ 1}`;
      break;
   }
      dpluso += `${profileinactivee.length}`;
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   if (!profileinactivee.includes(`${libhermesy}`)) {
      libhermesy = (eventR.length >> (Math.min(appsv.length, 3))) > 63;
   }
   let resendR = String.fromCharCode(102,98,49,106,48,0) == imagewatchlivef;
   do {
      imagewatchlivef = `${uimanagerE.size >> (Math.min(Math.abs(3), 2))}`;
      if (resendR) {
         break;
      }
   } while (resendR && (dpluso != imagewatchlivef));

      

   while (!defaultbasketballbg_.startsWith(`${profileinactivee.length}`)) {
      defaultbasketballbg_ = "1";
      break;
   }
   for (let w = 0; w < 2; w++) {
      libhermesy = (imagewatchlivef.length << (Math.min(watchC.length, 2))) == 69;
   }
      yys_giftbutton_footballtrophy.watchAnytimePlaylistClicksAnalytics();
      
    } else {

       let eactS = String.fromCharCode(115,95,54,49,95,121,105,101,108,100,0);
       let weatherC: Array<any> = [77, 731];
       let statisticss = false;
      for (let b = 0; b < 3; b++) {
          let shrunkY: Array<any> = [83, 514];
          let fullscreenmax4: Array<any> = [String.fromCharCode(115,117,112,112,111,114,116,95,107,95,51,54,0), String.fromCharCode(100,111,110,97,116,105,111,110,95,117,95,51,56,0), String.fromCharCode(112,95,54,50,95,97,114,103,0)];
          let orangeclockU: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,98,108,101,115,95,111,95,52,52,0),902], [String.fromCharCode(115,117,112,112,114,101,115,115,95,56,95,56,49,0),862]]);
         weatherC = [eactS.length / 3];
         shrunkY = [shrunkY.length & fullscreenmax4.length];
         fullscreenmax4.push(orangeclockU.size % 2);
         orangeclockU = new Map([[`${orangeclockU.size}`, 3]]);
      }
         statisticss = eactS.length <= 84;
      let condensedJ = String.fromCharCode(95,108,98,49,50,109,117,110,99,52,0) == eactS;
      do {
          let selectedB = 4.0;
         eactS += `${parseInt(`${selectedB}`) + 2}`;
         if (condensedJ) {
            break;
         }
      } while (condensedJ && (1 >= weatherC.length));
      for (let p = 0; p < 2; p++) {
          let downloadedM = String.fromCharCode(102,95,57,95,114,105,110,103,116,111,110,101,115,0);
          let kuaishou2 = true;
          let frame_xM = String.fromCharCode(105,95,52,52,95,97,112,112,101,110,100,97,108,108,0);
          let defaultplayerimgt: Array<any> = [String.fromCharCode(115,95,50,53,95,110,98,112,112,0), String.fromCharCode(114,101,116,117,114,110,105,110,103,95,115,95,55,52,0)];
         weatherC = [(weatherC.length | (kuaishou2 ? 2 : 5))];
         downloadedM += `${defaultplayerimgt.length * 3}`;
         kuaishou2 = downloadedM == String.fromCharCode(76,0);
         frame_xM = `${defaultplayerimgt.length / (Math.max(frame_xM.length, 3))}`;
      }
      let nterstitial4 = statisticss ? !statisticss : statisticss;
      do {
         statisticss = eactS.length >= 29;
         if (nterstitial4) {
            break;
         }
      } while (nterstitial4 && (4 <= (1 + weatherC.length) || statisticss));
         statisticss = ((eactS.length ^ (statisticss ? 59 : eactS.length)) < 59);
      for (let h = 0; h < 3; h++) {
          let homeicond = true;
          let infoQ = 2.0;
          let typingl = 0;
          let malaysiam = 2;
         eactS = `${weatherC.length >> (Math.min(eactS.length, 1))}`;
         homeicond = infoQ == 18.41 && 18 == typingl;
         infoQ *= malaysiam;
         typingl >>= Math.min(5, Math.abs(3));
      }
      let libfileP = 8435655 <= weatherC.length;
      do {
         weatherC.push(((statisticss ? 2 : 2) & weatherC.length));
         if (libfileP) {
            break;
         }
      } while ((4 <= (2 ^ weatherC.length) || 5 <= (eactS.length ^ 2)) && libfileP);
          let moreO = 0;
          let exampleimageH = 1.0;
         weatherC = [(eactS == String.fromCharCode(115,0) ? eactS.length : weatherC.length)];
         moreO *= parseInt(`${exampleimageH}`) ^ moreO;
         exampleimageH += moreO ^ parseInt(`${exampleimageH}`);
      libhermesy = (dpluso.length * weatherC.length) >= 13;
   if ((1 & uimanagerE.size) > 2 && (appsv.length & uimanagerE.size) > 1) {
      appsv += `${defaultbasketballbg_.length >> (Math.min(Math.abs(2), 3))}`;
   }
      dispatch(playVod(currentVod.mini_video_vod));

   for (let r = 0; r < 2; r++) {
      profileinactivee += `${imagewatchlivef.length + 1}`;
   }
       let containerj = false;
         containerj = (!containerj ? !containerj : containerj);
         containerj = !containerj || !containerj;
         containerj = !containerj;
      defaultbasketballbg_ += `${dpluso.length}`;
      navigation.navigate('播放', {
        vod_id: currentVod.vod?.vod_id,
        player_mode: adultMode ? 'adult' : 'normal',
      });

      imagewatchlivef = `${eventR.length & defaultbasketballbg_.length}`;
   while (1 < (memberg + imagewatchlivef.length)) {
       let predictionactiveb = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,122,95,52,50,0);
       let libcrashsdkQ = String.fromCharCode(112,111,115,116,105,110,105,116,95,97,95,52,52,0);
       let libruntimeexecutore = 5.0;
          let chartk = 5.0;
          let iconsubssuccessA = 2.0;
          let corem = false;
         libruntimeexecutore += parseFloat(`${parseInt(`${libruntimeexecutore}`) ^ 2}`);
         chartk -= (parseFloat(`${parseInt(`${iconsubssuccessA}`) * (corem ? 5 : 3)}`));
         iconsubssuccessA += parseFloat(`${parseInt(`${chartk}`)}`);
         corem = iconsubssuccessA >= chartk;
         libcrashsdkQ += "1";
      let detailS = String.fromCharCode(114,106,110,48,49,105,53,110,55,0) == predictionactiveb;
      do {
          let reminder0 = 4.0;
          let private_017 = 0;
          let league2 = 5;
          let notificationfilledm: Array<any> = [String.fromCharCode(99,95,51,50,95,108,97,117,110,99,104,101,114,0), String.fromCharCode(97,100,100,101,100,95,122,95,49,55,0), String.fromCharCode(114,95,50,50,95,97,105,110,116,105,110,103,0)];
         predictionactiveb = `${3 % (Math.max(8, private_017))}`;
         reminder0 -= parseFloat(`${2 / (Math.max(10, parseInt(`${reminder0}`)))}`);
         private_017 %= Math.max(notificationfilledm.length + league2, 5);
         league2 /= Math.max(2, 2);
         notificationfilledm.push(2);
         if (detailS) {
            break;
         }
      } while (detailS && (!predictionactiveb.includes(libcrashsdkQ)));
       let libcrashsdkF: Array<any> = [125, 765];
      while ((4 & libcrashsdkQ.length) == 1) {
          let roundB = 3.0;
          let placeholderW: Map<any, any> = new Map([[String.fromCharCode(110,95,53,95,101,120,116,114,101,109,117,109,0),124], [String.fromCharCode(100,101,99,111,100,101,100,95,56,95,55,54,0),940]]);
          let baiduE = String.fromCharCode(97,114,114,97,121,95,105,95,50,51,0);
          let full4 = String.fromCharCode(100,99,116,101,108,101,109,95,57,95,52,54,0);
         libcrashsdkF.push(2 | libcrashsdkF.length);
         roundB -= (parseFloat(`${full4 == String.fromCharCode(69,0) ? parseInt(`${roundB}`) : full4.length}`));
         placeholderW.set(full4, placeholderW.size % (Math.max(3, full4.length)));
         baiduE += `${baiduE.length >> (Math.min(2, Math.abs(placeholderW.size)))}`;
         break;
      }
      while ((libcrashsdkQ.length << (Math.min(3, libcrashsdkF.length))) < 5) {
          let iconarrowrightblackV = String.fromCharCode(120,95,52,50,95,99,104,97,110,110,101,108,0);
          let iconpipexpandy = 5.0;
         libcrashsdkQ = `${parseInt(`${libruntimeexecutore}`) % 1}`;
         iconarrowrightblackV += `${parseInt(`${iconpipexpandy}`) >> (Math.min(Math.abs(3), 1))}`;
         iconpipexpandy += parseFloat(`${parseInt(`${iconpipexpandy}`)}`);
         break;
      }
      for (let p = 0; p < 1; p++) {
         libcrashsdkQ += `${(libcrashsdkQ == String.fromCharCode(111,0) ? libcrashsdkF.length : libcrashsdkQ.length)}`;
      }
       let zhuboV = 0;
       let libavfilterN = 1;
         libcrashsdkF = [1];
      memberg *= ccdfbdabcabbbedbS.length - 2;
      break;
   }

      

      watchC += `${ccdfbdabcabbbedbS.length / 1}`;
   let clockY = defaultbasketballbg_.length >= 9684304;
   do {
      defaultbasketballbg_ += `${(defaultbasketballbg_ == String.fromCharCode(48,0) ? defaultbasketballbg_.length : eventR.length)}`;
      if (clockY) {
         break;
      }
   } while ((defaultbasketballbg_.length <= profileinactivee.length) && clockY);
      yys_giftbutton_footballtrophy.watchAnytimeVideoClicksAnalytics();
      
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
       let positionfieldy = false;
    let awayM: Array<any> = [534, 714, 646];
    let control8 = String.fromCharCode(105,110,105,118,105,116,101,100,95,51,95,51,56,0);
    let plusr = String.fromCharCode(109,99,111,114,101,95,112,95,50,52,0);
    let runtimeschedulerh: Array<any> = [656, 459];
    let auto_l8Z: Array<any> = [885, 291];
    let modalf = 0.0;
    let static_xq: Map<any, any> = new Map([[String.fromCharCode(100,117,109,112,95,48,95,49,54,0),888], [String.fromCharCode(106,95,56,53,95,100,105,114,97,99,0),508]]);
    let suggestionn = 5.0;
    let tumbnail5: Array<any> = [881, 362, 711];
    let filedn: Array<any> = [319, 144, 108];
   if (plusr.endsWith(`${positionfieldy}`)) {
      positionfieldy = modalf > 83.98;
   }
   for (let p = 0; p < 3; p++) {
       let imagenomoredataE = false;
       let zhengpianv = String.fromCharCode(109,95,56,50,95,115,112,105,108,108,115,105,122,101,0);
         imagenomoredataE = zhengpianv.length <= 48;
         imagenomoredataE = !imagenomoredataE;
         zhengpianv += "3";
       let othermatchdetailbgW = String.fromCharCode(102,95,51,52,95,98,97,99,107,103,114,111,117,110,100,105,110,103,0);
       let register_gq = String.fromCharCode(113,95,49,49,95,116,101,97,114,100,111,119,110,0);
      if (register_gq == String.fromCharCode(73,0)) {
          let iconarrowrightI = false;
         zhengpianv += `${2 | zhengpianv.length}`;
      }
          let downf = String.fromCharCode(101,110,116,114,111,112,121,109,118,95,104,95,53,49,0);
         imagenomoredataE = 66 > register_gq.length || String.fromCharCode(110,0) == downf;
      runtimeschedulerh.push(static_xq.size - parseInt(`${suggestionn}`));
   }
   while (Array.from(static_xq.keys()).includes(`${awayM.length}`)) {
      awayM = [awayM.length];
      break;
   }
      awayM.push(tumbnail5.length + plusr.length);
      runtimeschedulerh = [((positionfieldy ? 5 : 4))];
   let xinit_d05 = 5073660 >= plusr.length;
   do {
      plusr = `${auto_l8Z.length ^ 3}`;
      if (xinit_d05) {
         break;
      }
   } while (xinit_d05 && (!plusr.endsWith(`${tumbnail5.length}`)));
   let iconadslinkY = 8444501 <= static_xq.size;
   do {
       let faviconL = 1.0;
       let greyD = true;
       let sigmobq: Map<any, any> = new Map([[String.fromCharCode(116,95,53,57,95,111,108,100,101,114,0),String.fromCharCode(118,97,114,120,104,95,57,95,54,49,0)], [String.fromCharCode(111,95,49,50,95,108,111,97,100,0),String.fromCharCode(109,112,106,112,101,103,95,52,95,51,48,0)]]);
       let inviten = String.fromCharCode(104,95,57,51,95,101,109,111,106,105,0);
       let editu = true;
         faviconL *= ((greyD ? 4 : 3) + 2);
      let canvasL = inviten.length >= 5769922;
      do {
         inviten += `${((greyD ? 2 : 1) << (Math.min(Math.abs(parseInt(`${faviconL}`)), 5)))}`;
         if (canvasL) {
            break;
         }
      } while (canvasL && (!editu));
          let libmapbufferjniE = 4.0;
         editu = inviten.endsWith(`${greyD}`);
         libmapbufferjniE -= parseFloat(`${3}`);
      while ((5 | inviten.length) <= 2 || (5 | inviten.length) <= 3) {
         inviten += `${((greyD ? 1 : 5) % 1)}`;
         break;
      }
      for (let i = 0; i < 1; i++) {
          let specf = String.fromCharCode(97,118,117,105,95,100,95,49,0);
         greyD = inviten == String.fromCharCode(111,0);
         specf = `${specf.length}`;
      }
         inviten = `${((greyD ? 2 : 1) | parseInt(`${faviconL}`))}`;
      for (let l = 0; l < 2; l++) {
          let castingT = 5.0;
          let nextC = String.fromCharCode(114,95,56,55,95,116,111,107,101,110,105,122,101,100,0);
          let nterstitial3 = String.fromCharCode(97,97,114,99,104,95,50,95,51,48,0);
          let historya = 4.0;
         sigmobq.set(`${historya}`, 3 ^ parseInt(`${faviconL}`));
         castingT *= nextC.length;
         nextC = "1";
         nterstitial3 = "3";
         historya *= nextC.length << (Math.min(Math.abs(2), 3));
      }
      for (let e = 0; e < 2; e++) {
         editu = greyD || !editu;
      }
      if (1 < (sigmobq.size >> (Math.min(Math.abs(4), 1)))) {
         greyD = inviten.includes(`${greyD}`);
      }
         faviconL *= ((editu ? 3 : 4) / 1);
         inviten = `${(inviten.length + (editu ? 3 : 2))}`;
      for (let q = 0; q < 1; q++) {
         greyD = (greyD ? !editu : greyD);
      }
      while (!editu) {
         inviten = `${(1 / (Math.max(6, (greyD ? 4 : 5))))}`;
         break;
      }
      while (!inviten.startsWith(`${editu}`)) {
          let componentregistryv = String.fromCharCode(115,116,114,112,116,105,109,101,95,104,95,52,56,0);
         editu = inviten.length < 92;
         componentregistryv += `${1 ^ componentregistryv.length}`;
         break;
      }
       let imagenetworkerrL: Array<any> = [886, 554];
      static_xq = new Map([[control8, plusr.length]]);
      if (iconadslinkY) {
         break;
      }
   } while ((3.93 == (suggestionn + 2.12) && 1 == (3 & static_xq.size)) && iconadslinkY);
       let whistleorange3 = 3.0;
      while ((2 - whistleorange3) < 1.62) {
         whistleorange3 += 3;
         break;
      }
          let activeG: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,97,105,110,101,100,95,53,95,56,54,0),828], [String.fromCharCode(115,99,104,101,100,95,103,95,52,51,0),310]]);
          let bcopy_vau = 0.0;
         whistleorange3 /= Math.max(4, parseInt(`${whistleorange3}`) << (Math.min(5, Math.abs(2))));
         activeG.set(`${bcopy_vau}`, activeG.size);
         bcopy_vau += parseInt(`${bcopy_vau}`);
          let footballl = String.fromCharCode(119,104,97,116,95,115,95,55,56,0);
          let arrowrightQ = 3;
          let teamm = 1;
         whistleorange3 *= (footballl == String.fromCharCode(122,0) ? footballl.length : arrowrightQ);
         arrowrightQ ^= 2;
      auto_l8Z.push((String.fromCharCode(52,0) == plusr ? static_xq.size : plusr.length));
   for (let c = 0; c < 3; c++) {
      control8 = `${parseInt(`${modalf}`) - static_xq.size}`;
   }
   while (!plusr.includes(control8)) {
       let sansy = String.fromCharCode(97,95,54,50,95,117,110,97,118,97,105,108,97,98,108,101,0);
       let plusL = 3.0;
       let hejir = 3;
       let contextx = 1.0;
      if ((sansy.length >> (Math.min(5, Math.abs(hejir)))) < 4) {
         sansy = "3";
      }
      while (2 < (hejir & 5)) {
         hejir *= 3;
         break;
      }
      for (let y = 0; y < 2; y++) {
         plusL += (sansy == String.fromCharCode(50,0) ? sansy.length : parseInt(`${plusL}`));
      }
      if (sansy.length < hejir) {
         hejir -= (sansy == String.fromCharCode(112,0) ? sansy.length : hejir);
      }
         plusL *= 3 * parseInt(`${plusL}`);
      while (plusL <= hejir) {
          let statisticsactiveP = false;
          let javaG = String.fromCharCode(115,109,111,111,116,104,108,121,95,107,95,53,51,0);
         hejir -= hejir;
         statisticsactiveP = javaG.endsWith(`${statisticsactiveP}`);
         javaG = `${(javaG == String.fromCharCode(84,0) ? (statisticsactiveP ? 2 : 2) : javaG.length)}`;
         break;
      }
         plusL -= 1;
      while ((parseInt(`${contextx}`) / (Math.max(sansy.length, 3))) == 4 || 3.81 == (3.72 / (Math.max(2, contextx)))) {
          let whistleorangeO = 4.0;
         sansy = `${sansy.length}`;
         whistleorangeO += parseInt(`${whistleorangeO}`);
         break;
      }
         hejir ^= hejir / 3;
         plusL *= 1 ^ parseInt(`${contextx}`);
      for (let z = 0; z < 3; z++) {
          let predictiondefaultI = String.fromCharCode(104,119,116,105,109,101,95,115,95,54,52,0);
          let philippines_: Map<any, any> = new Map([[String.fromCharCode(115,116,101,97,108,95,56,95,53,52,0),205], [String.fromCharCode(105,95,54,51,95,112,114,101,115,101,108,101,99,116,0),320], [String.fromCharCode(112,105,100,95,52,95,54,48,0),729]]);
         contextx /= Math.max(parseInt(`${contextx}`), 5);
         predictiondefaultI += `${predictiondefaultI.length * philippines_.size}`;
         philippines_ = new Map([[`${philippines_.size}`, 2 - philippines_.size]]);
      }
      while (4.17 > (plusL + 2.29) && (2.29 + plusL) > 1.16) {
         hejir &= 3 * hejir;
         break;
      }
      control8 = `${parseInt(`${modalf}`) * parseInt(`${plusL}`)}`;
      break;
   }
      static_xq = new Map([[`${tumbnail5.length}`, 3]]);
   let unreadp = runtimeschedulerh.length <= 8469053;
   do {
       let whitevideoliveE = 5.0;
       let handlers = String.fromCharCode(116,95,57,57,95,109,115,103,115,109,100,101,99,0);
       let encryptd: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,114,95,54,57,0),true ], [String.fromCharCode(118,95,56,55,95,115,112,104,101,114,105,99,97,108,0),false ], [String.fromCharCode(103,95,50,49,95,115,116,121,108,0),false ]]);
         whitevideoliveE -= 2;
       let pausej = 3;
      let football1 = 8511010 >= encryptd.size;
      do {
         encryptd.set(`${whitevideoliveE}`, (handlers == String.fromCharCode(110,0) ? parseInt(`${whitevideoliveE}`) : handlers.length));
         if (football1) {
            break;
         }
      } while (football1 && ((pausej % 2) < 1 && (pausej % 2) < 3));
      while (1 > (handlers.length >> (Math.min(1, Math.abs(pausej)))) && 1 > (pausej >> (Math.min(handlers.length, 4)))) {
          let whistleorangeB = 0.0;
          let main_k1 = 2;
          let progressh: Array<any> = [532, 607, 736];
         handlers += `${main_k1}`;
         whistleorangeB += progressh.length >> (Math.min(Math.abs(2), 3));
         main_k1 ^= progressh.length;
         break;
      }
         pausej <<= Math.min(4, Math.abs(parseInt(`${whitevideoliveE}`)));
      while (5 == (parseInt(`${whitevideoliveE}`) - pausej) || (parseInt(`${whitevideoliveE}`) - pausej) == 5) {
          let grayI = 3;
          let vipsporto = true;
          let libjsinspectorQ: Map<any, any> = new Map([[String.fromCharCode(110,95,56,57,95,115,101,108,101,99,116,105,118,101,108,121,0),false ], [String.fromCharCode(116,95,57,95,103,97,117,103,101,0),false ], [String.fromCharCode(104,111,116,105,122,111,110,116,108,95,108,95,52,56,0),true ]]);
          let qaagj = String.fromCharCode(116,97,112,102,105,108,116,101,114,95,121,95,57,52,0);
         pausej &= grayI;
         grayI /= Math.max(4, 3);
         vipsporto = !vipsporto && qaagj.length > 94;
         libjsinspectorQ.set(qaagj, libjsinspectorQ.size);
         break;
      }
       let gifgoal0 = 4;
          let iconedite: Array<any> = [51, 922];
         handlers += "1";
         iconedite.push(iconedite.length << (Math.min(iconedite.length, 3)));
         encryptd.set(`${gifgoal0}`, 3 - parseInt(`${whitevideoliveE}`));
      runtimeschedulerh = [awayM.length];
      if (unreadp) {
         break;
      }
   } while (unreadp && ((2 + static_xq.size) >= 2 || (2 + runtimeschedulerh.length) >= 2));
   if (!Array.from(static_xq.keys()).includes(`${runtimeschedulerh.length}`)) {
      runtimeschedulerh.push(1 ^ auto_l8Z.length);
   }
      control8 += `${2 | plusr.length}`;
      modalf /= Math.max(parseInt(`${suggestionn}`), 4);
       let zhuboU = String.fromCharCode(116,101,115,115,95,98,95,50,52,0);
      let predictionactive2 = zhuboU == String.fromCharCode(109,109,99,0);
      do {
         zhuboU += `${zhuboU.length << (Math.min(Math.abs(3), 2))}`;
         if (predictionactive2) {
            break;
         }
      } while ((zhuboU == String.fromCharCode(119,0)) && predictionactive2);
      for (let r = 0; r < 1; r++) {
         zhuboU = "1";
      }
         zhuboU = `${zhuboU.length}`;
      suggestionn -= parseFloat(`${1}`);
       let heart3 = String.fromCharCode(118,95,56,53,95,105,100,101,109,112,111,116,101,110,99,121,0);
       let mimes = String.fromCharCode(112,97,115,116,101,95,97,95,51,56,0);
       let darkM = 1.0;
         heart3 = `${mimes.length % (Math.max(9, parseInt(`${darkM}`)))}`;
      for (let v = 0; v < 2; v++) {
          let policyE: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,114,116,95,105,95,50,0),155], [String.fromCharCode(98,114,101,103,95,110,95,55,51,0),332]]);
         heart3 += "3";
         policyE = new Map([[`${policyE.size}`, 2]]);
      }
         mimes += `${2 % (Math.max(7, heart3.length))}`;
          let watchg = false;
          let notificationfillede: Array<any> = [String.fromCharCode(100,114,98,103,95,105,95,52,48,0), String.fromCharCode(97,100,100,109,111,100,95,48,95,53,50,0), String.fromCharCode(117,115,101,100,95,100,95,50,57,0)];
          let baselineZ: Map<any, any> = new Map([[String.fromCharCode(117,95,52,57,95,99,111,109,112,114,101,115,115,111,114,0),true ], [String.fromCharCode(102,95,50,55,95,114,104,115,0),false ]]);
         darkM -= ((watchg ? 3 : 5) / (Math.max(3, baselineZ.size)));
         watchg = notificationfillede.includes(notificationfillede[notificationfillede.length - 1]);
          let footballfield0 = String.fromCharCode(115,95,56,50,95,105,110,116,101,114,115,101,99,116,105,111,110,0);
         heart3 = `${footballfield0.length >> (Math.min(Math.abs(3), 4))}`;
         mimes = `${heart3.length}`;
      if (heart3 == String.fromCharCode(77,0)) {
          let libswresampleJ = 3.0;
          let encrypt2 = 5;
          let heartT = 5.0;
          let volumeR = 0;
          let desci = String.fromCharCode(109,95,57,53,95,115,116,115,115,0);
         mimes += "2";
         libswresampleJ /= Math.max(2, parseFloat(`${3}`));
         encrypt2 += parseInt(`${libswresampleJ}`);
         heartT += encrypt2 & 1;
         volumeR |= encrypt2 ^ 1;
         desci += `${2 % (Math.max(9, desci.length))}`;
      }
      let brightnessa = mimes.length >= 6444437;
      do {
         mimes += `${heart3.length}`;
         if (brightnessa) {
            break;
         }
      } while (brightnessa && ((5 << (Math.min(1, mimes.length))) > 1));
         heart3 = "1";
      static_xq = new Map([[heart3, mimes.length & heart3.length]]);
      awayM.push(((positionfieldy ? 5 : 1) << (Math.min(Math.abs(3), 2))));
      static_xq.set(control8, (String.fromCharCode(112,0) == control8 ? runtimeschedulerh.length : control8.length));
   let controlQ = 8748810 <= control8.length;
   do {
      control8 += `${static_xq.size}`;
      if (controlQ) {
         break;
      }
   } while ((5.41 > (1.82 * suggestionn)) && controlQ);
      static_xq = new Map([[`${auto_l8Z.length}`, auto_l8Z.length]]);
   let iconpipshrinkL = 6858586 <= control8.length;
   do {
      control8 += `${awayM.length}`;
      if (iconpipshrinkL) {
         break;
      }
   } while ((2 < (awayM.length - 2) && 3 < (2 - awayM.length)) && iconpipshrinkL);
      awayM.push(1 - parseInt(`${suggestionn}`));
   for (let z = 0; z < 2; z++) {
      control8 = `${1 - parseInt(`${modalf}`)}`;
   }
   let injuryp = 8245188 <= auto_l8Z.length;
   do {
      auto_l8Z = [(plusr == String.fromCharCode(119,0) ? (positionfieldy ? 5 : 4) : plusr.length)];
      if (injuryp) {
         break;
      }
   } while ((2 == (auto_l8Z.length % (Math.max(5, static_xq.size)))) && injuryp);

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
       let yellowv = false;
    let statisticsw: Map<any, any> = new Map([[String.fromCharCode(117,95,56,49,95,113,112,113,115,99,97,108,101,0),String.fromCharCode(108,105,98,120,118,105,100,95,108,95,55,56,0)], [String.fromCharCode(99,95,52,52,95,99,114,111,115,115,104,97,105,114,115,0),String.fromCharCode(118,95,51,48,95,97,115,98,100,0)], [String.fromCharCode(115,95,55,54,95,108,105,102,101,0),String.fromCharCode(102,111,108,100,95,53,95,52,51,0)]]);
    let iconnointernetu = 1;
    let photoq = 4.0;
    let awayiconQ: Map<any, any> = new Map([[String.fromCharCode(109,105,115,99,95,51,95,52,48,0),847], [String.fromCharCode(99,97,99,104,105,110,103,95,114,95,56,0),971], [String.fromCharCode(122,112,116,102,95,120,95,50,52,0),30]]);
    let faviconN = 0.0;
    let foundn = true;
    let iconarrowleftK = true;
    let smallbrightnessr = 3.0;
   if ((2 % (Math.max(1, statisticsw.size))) > 3) {
      statisticsw.set(`${yellowv}`, ((yellowv ? 3 : 5) / (Math.max(iconnointernetu, 5))));
   }
       let windY = 0.0;
       let orangeF = String.fromCharCode(99,95,52,95,115,101,103,109,101,110,116,97,116,105,111,110,0);
       let componentregistryf = String.fromCharCode(115,95,50,49,95,97,118,105,97,108,97,98,108,101,0);
      if (orangeF.includes(`${componentregistryf.length}`)) {
          let projectx: Array<any> = [272, 163];
         orangeF = `${1 * orangeF.length}`;
         projectx.push(3);
      }
       let leaguedetailsbg2 = String.fromCharCode(102,117,100,103,101,95,102,95,55,52,0);
      for (let m = 0; m < 2; m++) {
         leaguedetailsbg2 += `${(leaguedetailsbg2 == String.fromCharCode(65,0) ? leaguedetailsbg2.length : componentregistryf.length)}`;
      }
      for (let i = 0; i < 1; i++) {
         componentregistryf += `${orangeF.length}`;
      }
         componentregistryf = `${componentregistryf.length}`;
      while ((componentregistryf.length * windY) < 5.34) {
         componentregistryf = "1";
         break;
      }
      let iconsubssuccessi = 9505735 >= orangeF.length;
      do {
         orangeF = `${componentregistryf.length}`;
         if (iconsubssuccessi) {
            break;
         }
      } while (((orangeF.length & 4) > 3) && iconsubssuccessi);
          let classesV: Map<any, any> = new Map([[String.fromCharCode(103,117,105,100,95,100,95,52,55,0),978], [String.fromCharCode(116,105,99,107,101,116,95,98,95,50,48,0),207]]);
          let orientationD = String.fromCharCode(121,95,51,56,95,97,110,115,105,0);
         orangeF += `${(orangeF == String.fromCharCode(72,0) ? parseInt(`${windY}`) : orangeF.length)}`;
         classesV = new Map([[`${classesV.size}`, 1 >> (Math.min(5, orientationD.length))]]);
         orientationD += `${2 * classesV.size}`;
         windY *= leaguedetailsbg2.length % 3;
      statisticsw.set(`${faviconN}`, (orangeF == String.fromCharCode(102,0) ? parseInt(`${faviconN}`) : orangeF.length));

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      faviconN += parseInt(`${photoq}`);
   for (let z = 0; z < 2; z++) {
      faviconN += 3 % (Math.max(parseInt(`${faviconN}`), 9));
   }
        

      yellowv = iconnointernetu >= parseInt(`${photoq}`);
   let statsnomoredatai = statisticsw.size >= 7051222;
   do {
       let shrunkA = 3;
       let leaguef: Map<any, any> = new Map([[String.fromCharCode(102,95,49,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0),true ], [String.fromCharCode(106,95,54,52,95,115,117,115,112,101,110,100,101,100,0),false ]]);
       let n_title3 = String.fromCharCode(116,95,52,48,95,108,97,110,101,0);
       let plusp = 5.0;
      if (2 >= (parseInt(`${plusp}`) - leaguef.size) && (leaguef.size % 2) >= 4) {
         leaguef.set(`${n_title3}`, leaguef.size % 2);
      }
         n_title3 += `${2 << (Math.min(5, n_title3.length))}`;
         shrunkA |= parseInt(`${plusp}`);
      let cancel0 = String.fromCharCode(54,49,102,119,57,50,114,0) == n_title3;
      do {
          let iconnotificationnewl = 3.0;
          let loading4 = String.fromCharCode(101,120,112,101,114,116,95,116,95,52,56,0);
          let reminders: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,115,111,98,101,108,0),944], [String.fromCharCode(97,100,100,105,95,99,95,52,57,0),283]]);
          let tramini4 = 2.0;
         n_title3 = `${1 & leaguef.size}`;
         iconnotificationnewl -= reminders.size / 2;
         loading4 = "2";
         reminders.set(loading4, parseInt(`${iconnotificationnewl}`));
         tramini4 -= loading4.length - 3;
         if (cancel0) {
            break;
         }
      } while ((5 >= (shrunkA & n_title3.length) && (5 & shrunkA) >= 5) && cancel0);
         shrunkA -= n_title3.length;
          let balli = String.fromCharCode(100,113,117,97,110,116,95,102,95,57,49,0);
         leaguef.set(`${shrunkA}`, balli.length);
      let nextm = n_title3.length >= 5978934;
      do {
          let libjsinspectorv = String.fromCharCode(116,95,55,48,95,97,118,102,109,116,0);
          let feedbackf = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,118,95,49,51,0);
         n_title3 = `${leaguef.size}`;
         libjsinspectorv = `${3 ^ feedbackf.length}`;
         feedbackf = `${feedbackf.length}`;
         if (nextm) {
            break;
         }
      } while (nextm && ((plusp * 4.56) <= 3.72 || 5 <= (4 & n_title3.length)));
      if (1 <= (4 - leaguef.size)) {
         n_title3 += `${(String.fromCharCode(115,0) == n_title3 ? parseInt(`${plusp}`) : n_title3.length)}`;
      }
      statisticsw = new Map([[`${awayiconQ.size}`, parseInt(`${photoq}`)]]);
      if (statsnomoredatai) {
         break;
      }
   } while (statsnomoredatai && (!Array.from(statisticsw.values()).includes(awayiconQ.size)));
        

   for (let j = 0; j < 3; j++) {
      yellowv = !foundn;
   }
       let homeactivej: Array<any> = [String.fromCharCode(114,95,57,48,95,100,101,99,111,100,101,120,0), String.fromCharCode(115,119,105,116,99,104,101,100,95,120,95,52,0)];
       let yellowvideoliveN = String.fromCharCode(116,97,112,95,106,95,49,50,0);
         homeactivej.push(yellowvideoliveN.length);
       let saveS = String.fromCharCode(118,105,100,101,111,95,56,95,56,53,0);
       let feedbackr = String.fromCharCode(97,95,57,53,0);
      while (feedbackr == String.fromCharCode(52,0)) {
         saveS = "2";
         break;
      }
      if (saveS == String.fromCharCode(86,0)) {
          let tickB: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,116,95,52,49,0),914], [String.fromCharCode(118,95,57,51,95,105,109,109,101,100,105,97,116,101,0),648], [String.fromCharCode(114,95,50,95,104,114,115,115,0),547]]);
          let indexa: Array<any> = [720, 38];
         yellowvideoliveN = `${tickB.size}`;
         tickB.set(`${indexa.length}`, indexa.length);
      }
      while (saveS != yellowvideoliveN) {
         yellowvideoliveN = `${saveS.length}`;
         break;
      }
      for (let a = 0; a < 3; a++) {
         homeactivej = [(String.fromCharCode(106,0) == saveS ? yellowvideoliveN.length : saveS.length)];
      }
      statisticsw = new Map([[yellowvideoliveN, 3]]);
        

      iconarrowleftK = 45 >= (iconnointernetu / (Math.max(1, faviconN)));
      iconnointernetu += ((foundn ? 3 : 2) << (Math.min(2, Math.abs(2))));

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

   while (yellowv) {
      smallbrightnessr += parseInt(`${photoq}`);
      break;
   }
       let plusH: Map<any, any> = new Map([[String.fromCharCode(99,105,110,101,109,97,95,53,95,54,52,0),String.fromCharCode(115,117,115,112,101,110,100,95,55,95,52,49,0)], [String.fromCharCode(115,108,105,100,105,110,103,95,98,95,50,56,0),String.fromCharCode(104,95,57,52,95,99,100,110,0)], [String.fromCharCode(105,95,56,49,95,102,98,100,101,118,0),String.fromCharCode(121,95,50,53,95,109,112,101,103,118,108,99,0)]]);
       let tumbnailF = String.fromCharCode(117,95,53,52,95,101,112,111,99,104,0);
       let iconsubssuccesss = 0;
      if (!Array.from(plusH.keys()).includes(`${iconsubssuccesss}`)) {
          let eventf = false;
          let castL = 5;
          let default_hvk = 1;
         plusH.set(`${iconsubssuccesss}`, tumbnailF.length);
         eventf = castL < 71;
         castL /= Math.max(castL & 3, 4);
         default_hvk <<= Math.min(Math.abs(castL), 1);
      }
       let androidI = String.fromCharCode(109,95,49,49,95,99,114,97,115,104,101,100,0);
       let skipu = String.fromCharCode(114,101,113,117,115,116,101,114,95,108,95,56,55,0);
       let rewardZ: Array<any> = [137, 308];
      if (!androidI.includes(`${rewardZ.length}`)) {
          let singaporeC = String.fromCharCode(97,95,52,53,95,108,111,110,103,101,114,0);
         rewardZ.push(2);
         singaporeC += `${singaporeC.length}`;
      }
         skipu = `${iconsubssuccesss % (Math.max(7, rewardZ.length))}`;
          let libturbomodulejsijniO = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,57,95,51,51,0);
          let libruntimeexecutor5 = String.fromCharCode(106,95,53,57,95,105,110,116,101,103,101,114,0);
         iconsubssuccesss *= libturbomodulejsijniO.length;
         libturbomodulejsijniO += `${3 - libruntimeexecutor5.length}`;
         libruntimeexecutor5 = `${libruntimeexecutor5.length}`;
         rewardZ = [skipu.length];
      for (let f = 0; f < 3; f++) {
          let moviesU = String.fromCharCode(104,95,53,49,95,98,111,114,100,101,114,101,100,0);
          let dropdownl = String.fromCharCode(108,111,97,100,120,95,100,95,55,51,0);
          let condensedt = String.fromCharCode(114,95,52,48,95,119,97,116,99,104,101,114,115,0);
         androidI += `${plusH.size ^ dropdownl.length}`;
         moviesU += "1";
         dropdownl += `${moviesU.length / (Math.max(condensedt.length, 3))}`;
         condensedt += "3";
      }
          let footballfieldX = 3.0;
          let vietnamg: Map<any, any> = new Map([[String.fromCharCode(109,95,57,51,95,101,110,117,109,101,114,97,116,101,100,0),String.fromCharCode(103,95,49,48,95,115,99,97,108,97,114,115,0)], [String.fromCharCode(121,95,54,49,95,100,105,114,97,99,0),String.fromCharCode(102,114,97,109,101,100,97,116,97,95,56,95,53,49,0)], [String.fromCharCode(109,95,56,53,95,115,105,110,113,105,0),String.fromCharCode(102,105,110,116,95,104,95,53,53,0)]]);
         iconsubssuccesss |= tumbnailF.length;
         footballfieldX /= Math.max(4, parseFloat(`${2}`));
         vietnamg.set(`${footballfieldX}`, vietnamg.size * 2);
      yellowv = yellowv || 49.87 == faviconN;

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   let inviteE = iconnointernetu >= 6994018;
   do {
       let kuaishouM: Array<any> = [630, 941];
       let fullscreenmax1 = String.fromCharCode(113,117,101,117,101,115,95,104,95,51,54,0);
       let sinav = 1.0;
       let fieldf = 4.0;
       let target6 = String.fromCharCode(97,99,99,101,112,116,115,95,115,95,53,57,0);
      while ((parseInt(`${sinav}`) - target6.length) >= 4) {
          let rewindK = 4.0;
         sinav -= 1 << (Math.min(4, kuaishouM.length));
         rewindK /= Math.max(parseFloat(`${parseInt(`${rewindK}`)}`), 4);
         break;
      }
         fullscreenmax1 = `${target6.length + 3}`;
      while (3.53 < sinav) {
         sinav *= (String.fromCharCode(73,0) == fullscreenmax1 ? parseInt(`${sinav}`) : fullscreenmax1.length);
         break;
      }
          let dependencyp = String.fromCharCode(102,105,108,116,101,114,102,110,95,107,95,54,49,0);
         target6 += `${target6.length}`;
         dependencyp = `${dependencyp.length | dependencyp.length}`;
          let viewsn = 1.0;
          let pingF = String.fromCharCode(97,116,116,114,105,98,115,95,54,95,49,52,0);
         fullscreenmax1 = `${target6.length * 2}`;
         viewsn += (parseFloat(`${pingF == String.fromCharCode(110,0) ? parseInt(`${viewsn}`) : pingF.length}`));
         sinav -= target6.length;
      if ((5 + fullscreenmax1.length) >= 3 || (fullscreenmax1.length & 5) >= 4) {
         sinav /= Math.max(parseInt(`${sinav}`) - 2, 2);
      }
      for (let a = 0; a < 1; a++) {
         target6 = `${(String.fromCharCode(114,0) == target6 ? fullscreenmax1.length : target6.length)}`;
      }
         fullscreenmax1 = `${parseInt(`${sinav}`) >> (Math.min(4, Math.abs(3)))}`;
      while (!fullscreenmax1.includes(`${fieldf}`)) {
         fullscreenmax1 = `${2 >> (Math.min(1, fullscreenmax1.length))}`;
         break;
      }
      if (2.20 >= (sinav - 3.75)) {
         target6 += "2";
      }
      for (let p = 0; p < 1; p++) {
          let topicZ = 1.0;
          let iconstarN: Map<any, any> = new Map([[String.fromCharCode(115,116,105,99,107,101,114,95,122,95,49,50,0),true ], [String.fromCharCode(120,95,57,57,95,105,110,117,115,101,0),true ], [String.fromCharCode(109,95,51,51,95,98,108,111,111,109,0),true ]]);
          let mail8 = 4.0;
         fullscreenmax1 += `${iconstarN.size / 2}`;
         topicZ *= parseFloat(`${parseInt(`${mail8}`)}`);
         iconstarN = new Map([[`${mail8}`, 2]]);
      }
       let benefits = String.fromCharCode(99,95,53,50,95,108,111,103,103,101,100,0);
      if ((fullscreenmax1.length / (Math.max(9, parseInt(`${sinav}`)))) < 3) {
         fullscreenmax1 = `${1 / (Math.max(6, benefits.length))}`;
      }
       let latnu = 3;
       let sigmobn = 4;
      iconnointernetu &= ((iconarrowleftK ? 5 : 4) / (Math.max(4, iconnointernetu)));
      if (inviteE) {
         break;
      }
   } while ((photoq == 1.46) && inviteE);
      iconarrowleftK = foundn;


        if (fileExist) {

      faviconN -= ((foundn ? 3 : 3) % (Math.max(7, iconnointernetu)));
   for (let q = 0; q < 3; q++) {
      foundn = awayiconQ.get(`${smallbrightnessr}`) == null;
   }
          const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

   while (2 >= statisticsw.size) {
      statisticsw.set(`${foundn}`, 2);
      break;
   }
       let libavdevicex = 0;
         libavdevicex *= libavdevicex << (Math.min(Math.abs(3), 1));
       let downloadedK = 0;
       let arrowselectdownw = 4;
      if (5 < (1 | downloadedK)) {
         downloadedK &= libavdevicex;
      }
      iconnointernetu &= 3 + parseInt(`${faviconN}`);
          

   for (let n = 0; n < 1; n++) {
       let userh = 3;
      for (let c = 0; c < 1; c++) {
         userh -= userh / (Math.max(userh, 3));
      }
      let giflivestreamingk = userh >= 8019243;
      do {
         userh &= userh / (Math.max(3, userh));
         if (giflivestreamingk) {
            break;
         }
      } while (((4 / (Math.max(3, userh))) <= 5) && giflivestreamingk);
         userh <<= Math.min(3, Math.abs(userh | 2));
      yellowv = 80.83 >= faviconN && !foundn;
   }
   if (5.93 > (photoq - 5.81)) {
      photoq *= (parseFloat(`${(foundn ? 5 : 5)}`));
   }
          if (!fileIsEmpty) {

      yellowv = yellowv && !iconarrowleftK;
      awayiconQ = new Map([[`${statisticsw.size}`, 1 % (Math.max(2, parseInt(`${smallbrightnessr}`)))]]);
            setMiniVodUrl(`${fileLocation}`);
          } else {

   let teamdetailsbgI = iconarrowleftK ? !iconarrowleftK : iconarrowleftK;
   do {
      iconarrowleftK = smallbrightnessr > 65.24;
      if (teamdetailsbgI) {
         break;
      }
   } while ((!foundn) && teamdetailsbgI);
   if (!yellowv) {
      photoq -= parseFloat(`${statisticsw.size}`);
   }
            

   if (4 >= (statisticsw.size % 2) || 2.42 >= (photoq / (Math.max(parseFloat(`${statisticsw.size}`), 10)))) {
      photoq -= (parseFloat(`${(yellowv ? 5 : 3)}`));
   }
       let profileinactive6 = String.fromCharCode(115,95,53,51,95,99,111,101,102,115,0);
       let iconfeedbackH: Map<any, any> = new Map([[String.fromCharCode(113,95,55,55,95,108,117,104,110,0),120], [String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,101,95,52,54,0),829], [String.fromCharCode(122,95,49,52,95,106,105,110,99,108,117,100,101,0),892]]);
       let iinit_mn: Map<any, any> = new Map([[String.fromCharCode(101,95,50,52,95,100,105,97,108,111,103,115,0),true ], [String.fromCharCode(102,111,117,114,116,104,95,101,95,56,54,0),false ]]);
       let traminiK = String.fromCharCode(115,117,98,109,105,116,95,106,95,55,56,0);
       let iconqql = String.fromCharCode(113,95,55,48,95,120,99,108,105,0);
         iinit_mn.set(iconqql, iconqql.length | profileinactive6.length);
       let libbuffer6 = String.fromCharCode(100,111,119,110,95,55,95,52,50,0);
       let icontransferclubY = String.fromCharCode(115,101,108,101,99,116,101,100,95,57,95,54,55,0);
      while (!profileinactive6.includes(`${iinit_mn.size}`)) {
         iinit_mn.set(`${iconqql}`, iconfeedbackH.size | 2);
         break;
      }
      while ((iinit_mn.size << (Math.min(traminiK.length, 2))) < 1 && 1 < (1 << (Math.min(5, Math.abs(iinit_mn.size))))) {
         iinit_mn.set(icontransferclubY, (icontransferclubY == String.fromCharCode(53,0) ? libbuffer6.length : icontransferclubY.length));
         break;
      }
      while (iconfeedbackH.size <= 1) {
         iconfeedbackH = new Map([[`${iinit_mn.size}`, iinit_mn.size >> (Math.min(Math.abs(2), 3))]]);
         break;
      }
      if (!traminiK.endsWith(`${iinit_mn.size}`)) {
          let buildB = 1;
          let arrowselectdowna = false;
         traminiK = "2";
         buildB <<= Math.min(4, Math.abs((buildB * (arrowselectdowna ? 4 : 2))));
         arrowselectdowna = !arrowselectdowna;
      }
         profileinactive6 = `${iinit_mn.size << (Math.min(profileinactive6.length, 1))}`;
       let actionsg: Map<any, any> = new Map([[String.fromCharCode(106,95,55,48,95,98,101,104,105,110,100,0),739], [String.fromCharCode(118,95,52,95,116,101,108,101,112,104,111,116,111,0),270], [String.fromCharCode(102,117,110,99,116,105,111,110,115,95,57,95,53,52,0),947]]);
       let button1: Map<any, any> = new Map([[String.fromCharCode(110,111,100,101,108,97,121,95,114,95,56,53,0),917], [String.fromCharCode(97,112,112,114,111,120,95,99,95,54,53,0),905], [String.fromCharCode(119,95,53,55,95,101,109,101,114,103,101,110,99,121,0),728]]);
      yellowv = 57 > iinit_mn.size;
            setMiniVodUrl(currentVod.mini_video_origin_video_url)
          }
        } else {

      iconarrowleftK = !foundn;
   for (let t = 0; t < 3; t++) {
      faviconN /= Math.max(4, parseInt(`${faviconN}`) | 3);
   }
          

      photoq /= Math.max(3, parseFloat(`${awayiconQ.size ^ statisticsw.size}`));
   if (Array.from(awayiconQ.values()).includes(faviconN)) {
       let kuaishouR = String.fromCharCode(117,95,50,95,115,101,97,108,0);
       let modulesl = String.fromCharCode(113,95,55,53,95,100,101,108,116,97,113,0);
       let backo = 5.0;
       let downloadedL = String.fromCharCode(108,95,52,55,95,103,101,116,115,111,99,107,111,112,116,0);
      while (modulesl.length < 1) {
         backo *= modulesl.length;
         break;
      }
         kuaishouR += "2";
      if (backo > 3.7) {
          let bggradientN = 4.0;
          let humiditym: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,110,101,100,95,121,95,50,51,0),320], [String.fromCharCode(99,104,101,99,107,105,110,103,95,109,95,53,55,0),115]]);
          let owngoalO = String.fromCharCode(120,105,112,104,95,53,95,51,50,0);
         backo += (owngoalO == String.fromCharCode(95,0) ? parseInt(`${bggradientN}`) : owngoalO.length);
         bggradientN /= Math.max(4, parseFloat(`${humiditym.size}`));
         humiditym.set(`${humiditym.size}`, humiditym.size);
      }
      for (let l = 0; l < 1; l++) {
         backo += parseInt(`${backo}`) / 2;
      }
       let p_lockO: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,110,95,48,0),false ], [String.fromCharCode(107,98,100,119,105,110,95,110,95,54,51,0),true ]]);
       let basketballplayerplaceholdern: Map<any, any> = new Map([[String.fromCharCode(113,95,50,49,95,100,101,103,114,97,100,101,100,0),255], [String.fromCharCode(120,97,115,109,95,52,95,52,54,0),966]]);
         kuaishouR += `${downloadedL.length}`;
          let emojiR: Array<any> = [416, 312, 444];
          let libhermes7: Array<any> = [764, 343, 637];
         downloadedL += `${(String.fromCharCode(100,0) == downloadedL ? emojiR.length : downloadedL.length)}`;
         emojiR = [libhermes7.length];
         libhermes7 = [1];
          let mathX = 2.0;
          let playercommone = String.fromCharCode(107,101,114,110,101,114,95,115,95,56,49,0);
          let b_countd = String.fromCharCode(107,95,54,55,95,115,117,105,116,97,98,108,101,0);
         downloadedL = `${(String.fromCharCode(86,0) == modulesl ? modulesl.length : playercommone.length)}`;
         mathX -= (parseFloat(`${b_countd == String.fromCharCode(90,0) ? b_countd.length : parseInt(`${mathX}`)}`));
         playercommone = `${parseInt(`${mathX}`) & 3}`;
         basketballplayerplaceholdern.set(downloadedL, parseInt(`${backo}`));
      let arrowupm = 7465220.0 >= backo;
      do {
         backo /= Math.max(3, 3);
         if (arrowupm) {
            break;
         }
      } while ((3.29 < backo) && arrowupm);
      for (let l = 0; l < 1; l++) {
         modulesl += `${parseInt(`${backo}`) * p_lockO.size}`;
      }
      if ((modulesl.length << (Math.min(Math.abs(4), 1))) >= 2 || 4 >= (modulesl.length << (Math.min(Math.abs(4), 4)))) {
          let actionj = String.fromCharCode(115,101,103,105,100,95,115,95,53,48,0);
          let ccdfbdabcabbbedb4 = 4.0;
          let loadingspinnerA = String.fromCharCode(105,100,101,110,116,105,99,97,108,95,98,95,57,57,0);
          let shielddoneb = String.fromCharCode(101,110,116,105,116,105,116,121,95,105,95,57,53,0);
          let event2: Map<any, any> = new Map([[String.fromCharCode(117,95,54,57,0),false ], [String.fromCharCode(97,114,112,101,100,95,117,95,51,56,0),false ], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,49,95,57,53,0),true ]]);
         modulesl += "1";
         actionj += `${shielddoneb.length | actionj.length}`;
         ccdfbdabcabbbedb4 /= Math.max(1, parseFloat(`${1 / (Math.max(10, event2.size))}`));
         loadingspinnerA += `${actionj.length >> (Math.min(Math.abs(2), 2))}`;
         shielddoneb = `${loadingspinnerA.length ^ parseInt(`${ccdfbdabcabbbedb4}`)}`;
         event2 = new Map([[actionj, actionj.length]]);
      }
      awayiconQ = new Map([[`${yellowv}`, modulesl.length]]);
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
       let iconschedulec: Array<any> = [289, 603, 154];
    let homeactiveL = 3;
    let videojs0 = String.fromCharCode(116,111,111,108,116,105,112,95,99,95,50,56,0);
    let icondefaultthumbnailS = false;
    let footballfiledlayoutF = 0.0;
    let orangeclock8: Map<any, any> = new Map([[String.fromCharCode(104,95,57,54,95,120,111,102,102,115,101,116,0),474], [String.fromCharCode(112,95,50,52,95,101,110,99,111,100,101,114,0),997]]);
    let pointL = 1.0;
    let customQ = String.fromCharCode(112,95,53,57,95,101,118,115,105,103,110,97,108,0);
    let viewsw = 5;
    let modev: Array<any> = [196, 484, 428];
    let calendarC = String.fromCharCode(120,120,99,104,95,53,95,56,0);
    let sortc = 3.0;
    let libruntimeexecutorV: Array<any> = [817, 715, 743];
   if (iconschedulec.includes(modev.length)) {
      modev = [videojs0.length >> (Math.min(1, Math.abs(parseInt(`${footballfiledlayoutF}`))))];
   }
      pointL /= Math.max(customQ.length, 4);
   while (parseInt(`${pointL}`) < customQ.length) {
      pointL -= 1;
      break;
   }
   for (let p = 0; p < 1; p++) {
      calendarC = `${2 & homeactiveL}`;
   }
   if (pointL == 2.12) {
      pointL -= (parseInt(`${pointL}`) << (Math.min(1, Math.abs((icondefaultthumbnailS ? 2 : 3)))));
   }
   let bingP = 6021474.0 >= footballfiledlayoutF;
   do {
      footballfiledlayoutF -= parseFloat(`${modev.length}`);
      if (bingP) {
         break;
      }
   } while (bingP && ((iconschedulec.length >> (Math.min(Math.abs(1), 1))) > 5));
      orangeclock8 = new Map([[customQ, 1]]);
      viewsw -= calendarC.length;
      calendarC += `${parseInt(`${footballfiledlayoutF}`) % 1}`;
   if (1 <= (iconschedulec.length % 3) && 3 <= (3 % (Math.max(2, iconschedulec.length)))) {
      iconschedulec.push(calendarC.length);
   }
   for (let i = 0; i < 3; i++) {
       let utilsR = String.fromCharCode(112,95,53,54,95,115,105,109,117,108,97,116,101,0);
      if (utilsR != String.fromCharCode(100,0)) {
          let positionfieldk = String.fromCharCode(114,101,97,108,95,118,95,49,52,0);
          let flipper0: Array<any> = [191, 312, 694];
          let p_centerq = 2.0;
          let combine4 = String.fromCharCode(98,105,103,100,105,97,95,57,95,51,49,0);
          let predictionbuttonB = String.fromCharCode(119,95,57,52,95,115,116,105,102,102,110,101,115,115,0);
         utilsR = `${predictionbuttonB.length}`;
         positionfieldk = "2";
         flipper0.push(positionfieldk.length / (Math.max(4, flipper0.length)));
         p_centerq /= Math.max(parseFloat(`${positionfieldk.length ^ 2}`), 4);
         combine4 = `${(combine4 == String.fromCharCode(110,0) ? parseInt(`${p_centerq}`) : combine4.length)}`;
         predictionbuttonB += `${combine4.length}`;
      }
         utilsR += `${utilsR.length}`;
       let sportf: Array<any> = [861, 502];
      viewsw |= (modev.length + (icondefaultthumbnailS ? 2 : 3));
   }
      homeactiveL <<= Math.min(4, parseInt(`${Math.abs(((icondefaultthumbnailS ? 2 : 5) << (Math.min(Math.abs(2), 4))))}`));
   if (4.46 == (2.3 * footballfiledlayoutF) && 2.3 == (footballfiledlayoutF * pointL)) {
       let nativemoduled = String.fromCharCode(115,97,105,122,95,53,95,49,57,0);
       let manifest6 = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,57,95,54,52,0);
       let yellowredcardt = String.fromCharCode(112,97,103,101,105,110,95,114,95,50,53,0);
       let eactY = 2.0;
       let iconclosewhitewithbgz = String.fromCharCode(103,95,49,51,95,112,97,117,115,101,0);
         yellowredcardt += `${parseInt(`${eactY}`)}`;
      for (let x = 0; x < 1; x++) {
         eactY /= Math.max(2, 2 >> (Math.min(5, Math.abs(parseInt(`${eactY}`)))));
      }
      let playercommont = eactY <= 9325899.0;
      do {
          let iconclosewhitel = 0.0;
         eactY *= iconclosewhitewithbgz.length << (Math.min(yellowredcardt.length, 2));
         iconclosewhitel -= parseInt(`${iconclosewhitel}`) * parseInt(`${iconclosewhitel}`);
         if (playercommont) {
            break;
         }
      } while (playercommont && ((eactY / (Math.max(2, iconclosewhitewithbgz.length))) < 5.47));
          let paginationj = 5;
          let libfilek = 5.0;
         manifest6 = "2";
         paginationj |= parseInt(`${libfilek}`);
         libfilek *= parseFloat(`${paginationj}`);
      while (4.69 > eactY) {
         nativemoduled += `${parseInt(`${eactY}`)}`;
         break;
      }
         manifest6 = `${yellowredcardt.length * parseInt(`${eactY}`)}`;
      while (iconclosewhitewithbgz.startsWith(`${eactY}`)) {
         eactY += nativemoduled.length;
         break;
      }
      if (iconclosewhitewithbgz.includes(`${eactY}`)) {
         eactY /= Math.max((String.fromCharCode(70,0) == yellowredcardt ? yellowredcardt.length : manifest6.length), 3);
      }
      let bgvipsport5 = yellowredcardt == String.fromCharCode(50,56,55,95,115,117,117,0);
      do {
         yellowredcardt = `${(yellowredcardt == String.fromCharCode(121,0) ? yellowredcardt.length : iconclosewhitewithbgz.length)}`;
         if (bgvipsport5) {
            break;
         }
      } while ((yellowredcardt.length >= iconclosewhitewithbgz.length) && bgvipsport5);
       let libhermesQ: Array<any> = [769, 778];
       let cancelb: Array<any> = [291, 294, 154];
      while (1.15 >= eactY) {
         eactY /= Math.max(2, cancelb.length << (Math.min(Math.abs(1), 2)));
         break;
      }
      footballfiledlayoutF -= parseFloat(`${iconschedulec.length}`);
   }
   let iconcalendary = pointL <= 8637552.0;
   do {
      pointL *= 3;
      if (iconcalendary) {
         break;
      }
   } while (iconcalendary && (2.65 == pointL));
      modev.push(parseInt(`${pointL}`) % 3);

    setVideoReadyIos(true)

      footballfiledlayoutF += (parseFloat(`${(icondefaultthumbnailS ? 1 : 3) | parseInt(`${pointL}`)}`));
   while (calendarC != String.fromCharCode(48,0)) {
       let controlsi: Array<any> = [String.fromCharCode(118,97,114,105,110,102,111,95,114,95,52,53,0), String.fromCharCode(105,95,49,50,95,97,117,116,111,114,101,115,105,122,101,115,0)];
       let matchesN = 4.0;
      for (let s = 0; s < 2; s++) {
         controlsi = [1];
      }
         controlsi.push(2);
          let anytimeq: Map<any, any> = new Map([[String.fromCharCode(108,104,97,115,104,95,114,95,55,48,0),104], [String.fromCharCode(115,105,109,117,108,97,116,111,114,95,108,95,51,49,0),471], [String.fromCharCode(103,95,51,95,104,112,101,108,100,115,112,0),542]]);
          let pauseV = 3.0;
          let crownG = 4.0;
         matchesN -= parseInt(`${pauseV}`);
         anytimeq.set(`${crownG}`, 2);
         pauseV *= parseFloat(`${parseInt(`${crownG}`)}`);
       let whitesmallticky = String.fromCharCode(109,95,49,53,95,112,114,111,118,105,115,105,111,110,0);
      while (whitesmallticky.startsWith(`${matchesN}`)) {
          let eventl = 5.0;
         matchesN += parseInt(`${eventl}`);
         break;
      }
         controlsi.push(2 ^ whitesmallticky.length);
      videojs0 += `${videojs0.length ^ 2}`;
      break;
   }
   if (footballfiledlayoutF > homeactiveL) {
      homeactiveL ^= (3 + (icondefaultthumbnailS ? 4 : 4));
   }
   while (1 <= (iconschedulec.length | 5) || 1 <= (5 | iconschedulec.length)) {
       let matchinactiveV: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,98,114,101,103,0),542], [String.fromCharCode(103,117,97,114,97,110,116,101,101,95,111,95,54,0),407]]);
       let nalyticsM = 0.0;
       let iconarrowleftv = String.fromCharCode(122,95,57,53,95,99,111,115,0);
       let updatesv = String.fromCharCode(116,114,97,110,115,99,111,100,101,95,50,95,52,53,0);
         iconarrowleftv += `${2 - matchinactiveV.size}`;
      if (3 > (matchinactiveV.size | 5)) {
          let profileinactiver: Map<any, any> = new Map([[String.fromCharCode(111,95,56,57,95,98,117,105,108,116,0),true ], [String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,107,95,56,52,0),true ]]);
          let mbnativeadvancedu = 0.0;
          let cornershootp = String.fromCharCode(120,95,49,49,95,114,116,99,119,101,98,0);
         matchinactiveV.set(updatesv, (updatesv == String.fromCharCode(101,0) ? matchinactiveV.size : updatesv.length));
         profileinactiver.set(cornershootp, profileinactiver.size - cornershootp.length);
         mbnativeadvancedu *= parseFloat(`${3}`);
      }
      if ((matchinactiveV.size - parseInt(`${nalyticsM}`)) >= 5 && (matchinactiveV.size << (Math.min(Math.abs(5), 3))) >= 4) {
          let mbbannerY = String.fromCharCode(119,95,57,50,95,114,101,99,116,0);
          let skipw = false;
         nalyticsM /= Math.max(3, parseFloat(`${parseInt(`${nalyticsM}`)}`));
         mbbannerY += `${((skipw ? 1 : 2))}`;
         skipw = mbbannerY.length <= 13;
      }
         iconarrowleftv += `${iconarrowleftv.length % (Math.max(8, updatesv.length))}`;
          let mountingw = 0;
          let iconfeedbackz = 2.0;
         iconarrowleftv += `${updatesv.length / (Math.max(2, 7))}`;
         mountingw &= parseInt(`${iconfeedbackz}`) | 1;
         iconfeedbackz -= mountingw;
         nalyticsM *= parseFloat(`${parseInt(`${nalyticsM}`) << (Math.min(iconarrowleftv.length, 3))}`);
          let pauseO = true;
         iconarrowleftv += `${parseInt(`${nalyticsM}`) * matchinactiveV.size}`;
         pauseO = !pauseO;
         nalyticsM /= Math.max(5, parseFloat(`${parseInt(`${nalyticsM}`) / (Math.max(1, 9))}`));
      if (iconarrowleftv.length > updatesv.length) {
          let filedg: Array<any> = [256, 998, 145];
         iconarrowleftv += `${updatesv.length >> (Math.min(3, Math.abs(parseInt(`${nalyticsM}`))))}`;
         filedg.push(filedg.length - filedg.length);
      }
       let sharemodalD = false;
         nalyticsM += (parseFloat(`${iconarrowleftv == String.fromCharCode(97,0) ? parseInt(`${nalyticsM}`) : iconarrowleftv.length}`));
         iconarrowleftv += `${(parseInt(`${nalyticsM}`) + (sharemodalD ? 5 : 1))}`;
      calendarC += `${parseInt(`${pointL}`) & orangeclock8.size}`;
      break;
   }
   while ((iconschedulec.length * 2) >= 4 && !icondefaultthumbnailS) {
      iconschedulec = [1 - iconschedulec.length];
      break;
   }
   for (let k = 0; k < 3; k++) {
      viewsw <<= Math.min(1, Math.abs(2));
   }
      calendarC += `${((icondefaultthumbnailS ? 1 : 3) & 1)}`;
   let service9 = String.fromCharCode(119,57,114,51,57,0) == customQ;
   do {
      customQ += `${(customQ == String.fromCharCode(98,0) ? viewsw : customQ.length)}`;
      if (service9) {
         break;
      }
   } while (service9 && ((parseFloat(`${customQ.length}`) + footballfiledlayoutF) == 3.75));
      viewsw <<= Math.min(1, Math.abs(modev.length * calendarC.length));
      modev = [homeactiveL];
      orangeclock8.set(`${pointL}`, viewsw % 3);
   while ((viewsw ^ 2) > 4 && 2 > (parseInt(`${pointL}`) * viewsw)) {
       let defaultroombgk = false;
       let footballfiledlayouth: Array<any> = [String.fromCharCode(115,95,51,57,95,101,120,116,115,107,0), String.fromCharCode(119,104,97,116,115,95,113,95,50,55,0), String.fromCharCode(100,101,102,105,110,101,95,107,95,55,52,0)];
       let delegate_kM: Map<any, any> = new Map([[String.fromCharCode(103,95,55,51,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0),String.fromCharCode(119,95,51,48,95,112,101,114,109,117,116,97,116,105,111,110,115,0)], [String.fromCharCode(102,95,53,49,95,112,114,111,98,97,98,105,108,105,116,121,0),String.fromCharCode(101,95,54,53,95,100,117,109,112,105,110,102,111,0)]]);
       let iconrefreshK = String.fromCharCode(114,115,104,105,102,116,95,100,95,55,53,0);
          let rewindE = String.fromCharCode(106,100,109,97,115,116,101,114,95,111,95,53,48,0);
         delegate_kM.set(`${defaultroombgk}`, (iconrefreshK.length ^ (defaultroombgk ? 3 : 4)));
         rewindE = "3";
         footballfiledlayouth.push(iconrefreshK.length);
         footballfiledlayouth.push(delegate_kM.size + 3);
         footballfiledlayouth = [2];
      while (delegate_kM.size < 2 || 3 < (2 + delegate_kM.size)) {
         delegate_kM = new Map([[`${footballfiledlayouth.length}`, (footballfiledlayouth.length >> (Math.min(2, Math.abs((defaultroombgk ? 4 : 3)))))]]);
         break;
      }
      if (footballfiledlayouth.length <= 1) {
         footballfiledlayouth = [1];
      }
         defaultroombgk = delegate_kM.size < 73;
       let searchbarq: Map<any, any> = new Map([[String.fromCharCode(99,111,112,105,101,115,95,106,95,53,48,0),52], [String.fromCharCode(98,95,56,56,95,97,115,110,0),0], [String.fromCharCode(109,95,49,48,48,95,104,111,110,101,121,0),417]]);
       let signinup8: Map<any, any> = new Map([[String.fromCharCode(114,95,56,54,95,108,105,98,114,115,118,103,0),803], [String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,105,95,54,48,0),214]]);
      while ((delegate_kM.size + iconrefreshK.length) <= 2 || (2 + delegate_kM.size) <= 5) {
         iconrefreshK += `${(String.fromCharCode(86,0) == iconrefreshK ? delegate_kM.size : iconrefreshK.length)}`;
         break;
      }
         defaultroombgk = searchbarq.get(`${defaultroombgk}`) != null;
      if (iconrefreshK.includes(`${searchbarq.size}`)) {
         searchbarq = new Map([[iconrefreshK, 1]]);
      }
       let downloadedc = 1.0;
       let libnmsf = 1.0;
      viewsw <<= Math.min(customQ.length, 2);
      break;
   }
   if (2 == (viewsw | calendarC.length) && (viewsw | calendarC.length) == 2) {
      calendarC += `${modev.length}`;
   }
      modev.push(videojs0.length);
      pointL *= parseInt(`${pointL}`) + customQ.length;
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
                {showIcon && (isPause ? <BlackPlaySvg /> : <PauseSvg />)}
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
