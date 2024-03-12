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
import PlayIcon from '@static/images/historyLatnPolicy.svg';
import PauseIcon from '@static/images/activeHeader.svg';
import PlayZhengPianIcon from '@static/images/resultDefault_zh.svg';
import PlayBoDanIcon from '@static/images/selectedFiledTemplateprocessor.svg';

import FastImage from '../common/yys_vertical_collection';
import { Slider } from '@rneui/themed';
import { useAppDispatch } from '@hooks/yys_frame';
import { useNavigation, useTheme } from '@react-navigation/native';
import { playVod, viewPlaylistDetails } from '@redux/actions/yys_player_style';
import HejiIcon from '@static/images/armvaResultHooks.svg';
import ExpandUpIcon from '@static/images/unselectedLibpangleflipped.svg';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import yys_event_common from '../../../../Umeng/yys_event_common';

interface yys_ConfigureUimanager {
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
}: yys_ConfigureUimanager) {
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
      let catagoryz: Map<any, any> = new Map([[String.fromCharCode(119, 95, 50, 49, 95, 99, 118, 116, 121, 117, 118, 116, 111, 0), 900], [String.fromCharCode(117, 110, 105, 111, 110, 95, 113, 95, 56, 56, 0), 247]]);
      let ajaxk = 1;
      let libturbomodulejsijniv = 4.0;
      let fastforwardw = String.fromCharCode(103, 95, 49, 48, 48, 95, 101, 118, 116, 97, 103, 0);
      let ajax4 = String.fromCharCode(116, 95, 53, 50, 95, 104, 105, 103, 104, 0);
      let moduleQ = 3;
      let package__qM = String.fromCharCode(115, 117, 99, 104, 95, 108, 95, 56, 50, 0);
      if (ajax4.includes(`${package__qM.length}`)) {
         package__qM = "2";
      }
      while (fastforwardw != ajax4) {
         ajax4 = `${ajaxk}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         ajaxk &= ajaxk;
      }
      let signinupS = 9564807 >= moduleQ;
      do {
         moduleQ >>= Math.min(Math.abs(package__qM.length << (Math.min(4, Math.abs(ajaxk)))), 3);
         if (signinupS) {
            break;
         }
      } while (signinupS && (1 <= package__qM.length));
      if (1 <= (moduleQ & 5)) {
         let mbnativeadvancedA = 4.0;
         let dplusm = 5;
         let pressure9 = String.fromCharCode(111, 95, 54, 51, 95, 109, 101, 116, 101, 114, 0);
         dplusm *= 2 | parseInt(`${mbnativeadvancedA}`);
         let expand8 = dplusm >= 6563921;
         do {
            let termsC = 1;
            let greyr = 4.0;
            dplusm >>= Math.min(pressure9.length, 3);
            termsC += termsC - parseInt(`${greyr}`);
            greyr *= parseFloat(`${termsC}`);
            if (expand8) {
               break;
            }
         } while (((4.82 + mbnativeadvancedA) == 4.86) && expand8);
         dplusm <<= Math.min(2, Math.abs(pressure9.length >> (Math.min(3, Math.abs(dplusm)))));
         for (let z = 0; z < 2; z++) {
            mbnativeadvancedA *= parseFloat(`${parseInt(`${mbnativeadvancedA}`) % (Math.max(pressure9.length, 6))}`);
         }
         for (let i = 0; i < 3; i++) {
            let predictionm = 2;
            let disconnectedT = false;
            let animationL = String.fromCharCode(110, 105, 107, 111, 110, 95, 52, 95, 52, 55, 0);
            let gesturesn = String.fromCharCode(109, 111, 100, 101, 108, 95, 51, 95, 53, 53, 0);
            let confirmationy = 2.0;
            mbnativeadvancedA -= parseFloat(`${2 - dplusm}`);
            predictionm -= animationL.length;
            disconnectedT = parseInt(`${confirmationy}`) == gesturesn.length;
            animationL += `${((disconnectedT ? 4 : 1) / (Math.max(9, predictionm)))}`;
            gesturesn = "3";
            confirmationy += (parseInt(`${confirmationy}`) | (disconnectedT ? 1 : 2));
         }
         let cricket6 = 4;
         let soundm = String.fromCharCode(104, 97, 114, 100, 119, 97, 114, 101, 95, 48, 95, 55, 52, 0);
         let mapping6 = 5.0;
         pressure9 = `${dplusm + 3}`;
         cricket6 >>= Math.min(Math.abs(3), 4);
         soundm = `${parseInt(`${mapping6}`) << (Math.min(Math.abs(1), 1))}`;
         mapping6 += 3;
         let reactq: Array<any> = [572, 200];
         let gpay4 = String.fromCharCode(114, 95, 51, 55, 95, 103, 97, 117, 115, 115, 0);
         let resultS = false;
         let pingH = 2;
         dplusm >>= Math.min(Math.abs(dplusm % (Math.max(pressure9.length, 8))), 3);
         gpay4 += `${1 >> (Math.min(1, Math.abs(pingH)))}`;
         resultS = !resultS;
         pingH <<= Math.min(Math.abs(pingH % 3), 5);
         reactq.push((pressure9 == String.fromCharCode(51, 0) ? reactq.length : pressure9.length));
         ajaxk += 2;
      }
      for (let c = 0; c < 1; c++) {
         moduleQ &= ajaxk;
      }
      ajaxk *= ajax4.length;
      fastforwardw += `${ajaxk & moduleQ}`;
      if (moduleQ >= fastforwardw.length) {
         let typesK = 1;
         let interstitialF = String.fromCharCode(104, 95, 53, 49, 95, 116, 101, 109, 112, 111, 114, 97, 108, 0);
         let umengg = 0.0;
         let langkeyA = String.fromCharCode(121, 95, 56, 55, 95, 104, 105, 115, 116, 111, 114, 121, 0);
         interstitialF = `${interstitialF.length}`;
         while (langkeyA.length <= interstitialF.length) {
            interstitialF += `${1 - parseInt(`${umengg}`)}`;
            break;
         }
         let u_position_ = String.fromCharCode(105, 95, 53, 54, 95, 100, 101, 112, 101, 110, 100, 101, 110, 116, 0);
         interstitialF += `${1 + typesK}`;
         u_position_ = `${u_position_.length - u_position_.length}`;
         if (3.19 > (4.0 * umengg)) {
            umengg /= Math.max(5, parseFloat(`${typesK / (Math.max(2, 2))}`));
         }
         if (interstitialF.length <= typesK) {
            interstitialF += `${langkeyA.length}`;
         }
         if (4 == (5 - langkeyA.length) || (langkeyA.length - parseInt(`${umengg}`)) == 5) {
            langkeyA = "3";
         }
         let expiredw = String.fromCharCode(109, 95, 56, 54, 95, 103, 114, 111, 117, 112, 105, 110, 103, 0);
         let attributedstringA = 5.0;
         let guideJ = true;
         umengg /= Math.max((parseFloat(`${expiredw.length % (Math.max(2, (guideJ ? 3 : 4)))}`)), 1);
         expiredw += "3";
         attributedstringA /= Math.max(4, parseInt(`${attributedstringA}`));
         umengg += parseFloat(`${interstitialF.length | 2}`);
         let hooksy: Map<any, any> = new Map([[String.fromCharCode(107, 95, 57, 95, 104, 105, 116, 115, 0), 131], [String.fromCharCode(111, 95, 54, 49, 95, 115, 101, 113, 117, 101, 110, 116, 105, 97, 108, 0), 928]]);
         let q_managerH = 3.0;
         let filtert: Array<any> = [26, 664, 754];
         umengg += parseFloat(`${interstitialF.length & parseInt(`${umengg}`)}`);
         hooksy = new Map([[`${hooksy.size}`, hooksy.size + parseInt(`${q_managerH}`)]]);
         q_managerH /= Math.max(parseFloat(`${hooksy.size ^ 2}`), 5);
         filtert.push(hooksy.size);
         let math2 = 8182953 <= langkeyA.length;
         do {
            langkeyA = `${(String.fromCharCode(86, 0) == interstitialF ? parseInt(`${umengg}`) : interstitialF.length)}`;
            if (math2) {
               break;
            }
         } while (math2 && (1 <= (parseInt(`${umengg}`) + langkeyA.length)));
         let subsx = String.fromCharCode(99, 108, 105, 112, 102, 95, 111, 95, 53, 50, 0);
         interstitialF += `${parseInt(`${umengg}`) * langkeyA.length}`;
         subsx += "3";
         let fadfdeebbbfdabbbabdadfaaddaaD = 4.0;
         let libfabricjniQ = 2.0;
         fastforwardw = `${fastforwardw.length & moduleQ}`;
      }
      moduleQ >>= Math.min(1, Math.abs(3 << (Math.min(3, fastforwardw.length))));
      for (let n = 0; n < 2; n++) {
         ajax4 = `${fastforwardw.length * 1}`;
      }
      while (!package__qM.startsWith(`${moduleQ}`)) {
         package__qM = `${package__qM.length}`;
         break;
      }
      let profileB = String.fromCharCode(108, 95, 52, 52, 95, 102, 109, 97, 99, 0);
      profileB = "2";
      while (!profileB.endsWith(`${profileB.length}`)) {
         let schedulerm = 5.0;
         profileB += `${parseInt(`${schedulerm}`) % 1}`;
         break;
      }
      let libavcodecD: Map<any, any> = new Map([[String.fromCharCode(109, 115, 118, 115, 100, 101, 112, 101, 110, 100, 95, 100, 95, 52, 49, 0), 168], [String.fromCharCode(114, 95, 57, 54, 95, 101, 100, 105, 97, 0), 634], [String.fromCharCode(114, 100, 112, 99, 109, 95, 97, 95, 56, 50, 0), 942]]);
      profileB += `${libavcodecD.size - profileB.length}`;
      ajaxk -= 1;
      libturbomodulejsijniv /= Math.max(moduleQ, 4);
      if ((parseInt(`${libturbomodulejsijniv}`) + ajaxk) < 4 || (ajaxk | 4) < 4) {
         ajaxk ^= 3;
      }
      while (Array.from(catagoryz.values()).includes(ajaxk)) {
         ajaxk *= 2;
         break;
      }
      let utilsS = fastforwardw == String.fromCharCode(100, 53, 54, 115, 106, 114, 116, 116, 101, 0);
      do {
         fastforwardw += `${(String.fromCharCode(111, 0) == package__qM ? package__qM.length : moduleQ)}`;
         if (utilsS) {
            break;
         }
      } while (utilsS && (ajax4 != String.fromCharCode(110, 0)));
      fastforwardw += `${package__qM.length}`;

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
      let umengS = true;
      let gdtadvt: Map<any, any> = new Map([[String.fromCharCode(117, 110, 104, 105, 103, 104, 108, 105, 103, 104, 116, 95, 111, 95, 57, 55, 0), String.fromCharCode(113, 95, 52, 95, 116, 114, 101, 122, 111, 114, 0)], [String.fromCharCode(118, 95, 52, 56, 95, 116, 112, 99, 0), String.fromCharCode(115, 95, 56, 54, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0)], [String.fromCharCode(105, 110, 111, 117, 116, 95, 101, 95, 51, 56, 0), String.fromCharCode(111, 95, 55, 95, 115, 117, 98, 112, 97, 99, 107, 101, 116, 0)]]);
      let thumbnail2 = true;
      let gradlew4 = 1;
      let page2 = 1.0;
      let streamingu = 3;
      let turnf = String.fromCharCode(113, 95, 54, 53, 95, 108, 105, 112, 98, 111, 97, 114, 100, 0);
      let manifestz = String.fromCharCode(97, 117, 116, 111, 114, 101, 109, 111, 118, 101, 95, 51, 95, 56, 51, 0);
      let e_image_: Array<any> = [19, 608];
      let trophy4 = String.fromCharCode(97, 98, 111, 114, 116, 95, 48, 95, 56, 53, 0);
      let libswscaleV = String.fromCharCode(104, 101, 114, 101, 95, 115, 95, 54, 50, 0);
      manifestz = "2";
      for (let s = 0; s < 2; s++) {
         trophy4 += `${e_image_.length}`;
      }
      streamingu %= Math.max((gdtadvt.size * (umengS ? 2 : 1)), 1);
      while (1 == trophy4.length) {
         let castingH = 5;
         let weiboE = 0.0;
         let libcrashsdkf: Array<any> = [196, 149, 494];
         let fullV = true;
         let crowng: Map<any, any> = new Map([[String.fromCharCode(105, 97, 100, 115, 116, 95, 57, 95, 53, 55, 0), 748], [String.fromCharCode(99, 97, 108, 108, 105, 110, 103, 95, 111, 95, 53, 0), 160]]);
         weiboE *= libcrashsdkf.length;
         weiboE /= Math.max(((fullV ? 4 : 4) / (Math.max(parseInt(`${weiboE}`), 1))), 1);
         if (libcrashsdkf.length >= weiboE) {
            weiboE += ((fullV ? 3 : 2) >> (Math.min(Math.abs(castingH), 4)));
         }
         fullV = (((fullV ? 59 : crowng.size) * crowng.size) > 59);
         crowng = new Map([[`${fullV}`, ((fullV ? 4 : 5) | parseInt(`${weiboE}`))]]);
         for (let f = 0; f < 2; f++) {
            let floatings = String.fromCharCode(99, 111, 112, 121, 100, 97, 116, 97, 95, 52, 95, 56, 50, 0);
            let modityb = String.fromCharCode(97, 95, 55, 55, 95, 105, 100, 101, 110, 116, 105, 102, 101, 114, 0);
            let whatsapp3: Map<any, any> = new Map([[String.fromCharCode(115, 116, 114, 105, 100, 101, 115, 95, 97, 95, 53, 0), String.fromCharCode(104, 95, 56, 55, 95, 99, 97, 112, 105, 116, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0)], [String.fromCharCode(113, 95, 50, 95, 99, 105, 118, 105, 108, 0), String.fromCharCode(110, 97, 109, 101, 100, 95, 115, 95, 55, 50, 0)], [String.fromCharCode(118, 101, 114, 105, 102, 105, 101, 100, 95, 52, 95, 51, 52, 0), String.fromCharCode(98, 95, 57, 49, 95, 98, 115, 111, 108, 117, 116, 101, 0)]]);
            let gradlewc = String.fromCharCode(99, 108, 97, 117, 115, 101, 115, 95, 51, 95, 50, 48, 0);
            libcrashsdkf = [castingH];
            floatings += `${gradlewc.length}`;
            modityb += `${modityb.length % (Math.max(floatings.length, 8))}`;
            whatsapp3.set(modityb, (modityb == String.fromCharCode(82, 0) ? modityb.length : gradlewc.length));
         }
         let actionsy = libcrashsdkf.length <= 5678415;
         do {
            libcrashsdkf.push(parseInt(`${weiboE}`) << (Math.min(3, Math.abs(3))));
            if (actionsy) {
               break;
            }
         } while ((libcrashsdkf.length > 4) && actionsy);
         let libavdeviceH = 8652565.0 >= weiboE;
         do {
            weiboE -= castingH;
            if (libavdeviceH) {
               break;
            }
         } while ((2.53 >= (weiboE + 5.76) || fullV) && libavdeviceH);
         for (let o = 0; o < 2; o++) {
            libcrashsdkf = [parseInt(`${weiboE}`)];
         }
         let subs2 = String.fromCharCode(115, 116, 117, 102, 102, 105, 110, 103, 95, 57, 95, 53, 52, 0);
         let rules1 = String.fromCharCode(100, 101, 116, 101, 99, 116, 111, 114, 95, 57, 95, 49, 55, 0);
         fullV = castingH <= 100;
         libcrashsdkf = [rules1.length];
         let gradle6 = String.fromCharCode(50, 52, 114, 112, 0) == rules1;
         do {
            rules1 += `${crowng.size * 3}`;
            if (gradle6) {
               break;
            }
         } while (gradle6 && (!rules1.includes(`${fullV}`)));
         for (let s = 0; s < 3; s++) {
            fullV = weiboE >= 42.91;
         }
         umengS = 61 >= streamingu && 69.77 >= page2;
         break;
      }
      e_image_.push(parseInt(`${page2}`));
      let templateprocessorP = 4.0;
      let mbbannerS = String.fromCharCode(119, 111, 114, 100, 95, 100, 95, 55, 49, 0);
      let description_1m = true;
      if (description_1m) {
         mbbannerS = `${parseInt(`${templateprocessorP}`) << (Math.min(mbbannerS.length, 5))}`;
      }
      let final_daE = String.fromCharCode(109, 101, 109, 115, 104, 105, 112, 95, 99, 95, 53, 56, 0);
      let diceE = String.fromCharCode(97, 95, 49, 55, 95, 104, 111, 115, 116, 115, 0);
      diceE += `${final_daE.length}`;
      let diceP = String.fromCharCode(104, 95, 55, 48, 95, 103, 101, 109, 102, 105, 108, 101, 0);
      while (diceP != String.fromCharCode(70, 0) || diceE != String.fromCharCode(118, 0)) {
         diceE = `${parseInt(`${templateprocessorP}`) >> (Math.min(Math.abs(2), 3))}`;
         break;
      }
      let castn = String.fromCharCode(100, 105, 97, 108, 111, 103, 95, 107, 95, 48, 0);
      let chinasamet = String.fromCharCode(100, 95, 53, 52, 95, 105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 108, 121, 0);
      let animationx = 5.0;
      description_1m = parseFloat(`${mbbannerS.length}`) == templateprocessorP;
      castn += `${chinasamet.length | 3}`;
      chinasamet = `${2 << (Math.min(4, chinasamet.length))}`;
      animationx *= parseFloat(`${2 % (Math.max(1, castn.length))}`);
      diceE += `${final_daE.length}`;
      final_daE += `${(2 << (Math.min(3, Math.abs((description_1m ? 5 : 3)))))}`;
      while (diceE != String.fromCharCode(85, 0)) {
         mbbannerS += `${((description_1m ? 1 : 3) << (Math.min(mbbannerS.length, 1)))}`;
         break;
      }
      page2 -= 1 - gradlew4;
      while (gradlew4 <= trophy4.length) {
         trophy4 = `${turnf.length >> (Math.min(Math.abs(3), 2))}`;
         break;
      }
      libswscaleV += `${gradlew4}`;
      if (3 <= manifestz.length) {
         let catalogc = String.fromCharCode(97, 95, 53, 52, 95, 112, 97, 114, 97, 103, 114, 97, 112, 104, 0);
         let telemetryd = String.fromCharCode(108, 105, 109, 105, 116, 101, 114, 95, 51, 95, 56, 0);
         let targets: Map<any, any> = new Map([[String.fromCharCode(98, 95, 51, 50, 95, 99, 111, 109, 112, 97, 99, 116, 0), true], [String.fromCharCode(103, 95, 49, 51, 95, 116, 114, 97, 110, 115, 112, 111, 114, 116, 0), false], [String.fromCharCode(122, 95, 57, 51, 95, 112, 114, 105, 118, 0), true]]);
         let types8 = String.fromCharCode(98, 97, 116, 99, 104, 95, 104, 95, 49, 56, 0);
         let smallI = String.fromCharCode(98, 105, 116, 115, 116, 114, 101, 97, 109, 95, 113, 95, 55, 48, 0);
         if (smallI.length <= 1) {
            catalogc += `${types8.length}`;
         }
         catalogc += `${3 - telemetryd.length}`;
         while (!telemetryd.endsWith(`${targets.size}`)) {
            let auto_ga = String.fromCharCode(115, 101, 116, 108, 105, 115, 116, 95, 108, 95, 49, 54, 0);
            let area_ = false;
            let circleC = 4;
            let backgroundJ = false;
            let matchesN = 0.0;
            targets.set(telemetryd, (telemetryd == String.fromCharCode(115, 0) ? targets.size : telemetryd.length));
            auto_ga = `${3 % (Math.max(4, parseInt(`${matchesN}`)))}`;
            area_ = (area_ ? backgroundJ : !area_);
            circleC -= 3;
            backgroundJ = !backgroundJ || matchesN < 26.29;
            break;
         }
         targets = new Map([[`${targets.size}`, telemetryd.length]]);
         let homeY = true;
         catalogc = `${(smallI.length | (homeY ? 5 : 1))}`;
         telemetryd += `${telemetryd.length ^ smallI.length}`;
         let taiwanw = false;
         types8 += `${1 << (Math.min(2, Math.abs(targets.size)))}`;
         catalogc += `${targets.size | 1}`;
         manifestz += `${catalogc.length}`;
      }
      let graphicsT = 5212536 >= streamingu;
      do {
         let promotion3 = String.fromCharCode(109, 95, 49, 52, 95, 102, 97, 117, 108, 116, 0);
         let privacyE = 3.0;
         let const_wx = String.fromCharCode(122, 95, 56, 49, 95, 99, 104, 101, 99, 107, 115, 0);
         let vignetteK = String.fromCharCode(105, 95, 54, 49, 95, 101, 120, 105, 115, 116, 101, 110, 99, 101, 0);
         let values7: Array<any> = [564, 618];
         vignetteK += `${(String.fromCharCode(83, 0) == promotion3 ? parseInt(`${privacyE}`) : promotion3.length)}`;
         promotion3 += `${const_wx.length}`;
         if (const_wx.length <= 2) {
            values7.push((String.fromCharCode(73, 0) == vignetteK ? vignetteK.length : parseInt(`${privacyE}`)));
         }
         vignetteK += `${3 - parseInt(`${privacyE}`)}`;
         if (promotion3.startsWith(`${values7.length}`)) {
            promotion3 += `${parseInt(`${privacyE}`) + 1}`;
         }
         let subs6 = const_wx == String.fromCharCode(53, 121, 52, 113, 0);
         do {
            let photoJ: Map<any, any> = new Map([[String.fromCharCode(99, 111, 108, 111, 117, 114, 95, 54, 95, 55, 0), 234], [String.fromCharCode(116, 105, 108, 105, 110, 103, 95, 104, 95, 49, 54, 0), 172], [String.fromCharCode(119, 95, 53, 55, 95, 114, 101, 97, 116, 116, 97, 99, 104, 0), 477]]);
            let humidityH: Map<any, any> = new Map([[String.fromCharCode(105, 95, 57, 56, 95, 101, 110, 100, 101, 100, 0), 636], [String.fromCharCode(108, 105, 98, 106, 112, 101, 103, 116, 117, 114, 98, 111, 95, 51, 95, 51, 54, 0), 825], [String.fromCharCode(101, 114, 112, 105, 99, 95, 57, 95, 50, 0), 434]]);
            let submitv = false;
            let libflippern = String.fromCharCode(117, 101, 102, 97, 95, 106, 95, 54, 50, 0);
            const_wx += `${2 + parseInt(`${privacyE}`)}`;
            photoJ.set(libflippern, 1);
            humidityH.set(`${submitv}`, (1 % (Math.max(9, (submitv ? 3 : 3)))));
            libflippern = `${((submitv ? 3 : 3))}`;
            if (subs6) {
               break;
            }
         } while ((!const_wx.endsWith(`${privacyE}`)) && subs6);
         const_wx = `${3 >> (Math.min(4, values7.length))}`;
         vignetteK = `${const_wx.length}`;
         promotion3 = `${(String.fromCharCode(82, 0) == promotion3 ? promotion3.length : values7.length)}`;
         vignetteK = `${const_wx.length >> (Math.min(vignetteK.length, 4))}`;
         while (vignetteK.length == parseInt(`${privacyE}`)) {
            vignetteK += `${vignetteK.length}`;
            break;
         }
         privacyE -= parseFloat(`${const_wx.length * 1}`);
         let activea: Map<any, any> = new Map([[String.fromCharCode(118, 95, 52, 49, 95, 118, 114, 101, 112, 0), 68], [String.fromCharCode(112, 108, 117, 114, 97, 108, 95, 57, 95, 57, 51, 0), 311]]);
         let manifest7 = 0.0;
         values7.push(1);
         activea.set(`${manifest7}`, activea.size >> (Math.min(5, Math.abs(parseInt(`${manifest7}`)))));
         for (let r = 0; r < 3; r++) {
            const_wx = `${values7.length / 2}`;
         }
         const_wx = "1";
         streamingu <<= Math.min(1, Math.abs(trophy4.length ^ turnf.length));
         if (graphicsT) {
            break;
         }
      } while ((turnf.length > streamingu) && graphicsT);

      clearTimeout(timer.current);

      let orangeK = String.fromCharCode(99, 95, 55, 95, 109, 117, 108, 116, 105, 101, 110, 100, 0);
      let questR = String.fromCharCode(98, 95, 53, 95, 100, 101, 98, 108, 111, 99, 107, 0);
      while (orangeK.length <= questR.length) {
         let teamx = String.fromCharCode(102, 95, 52, 53, 95, 112, 111, 108, 108, 105, 110, 103, 0);
         let libsgcorep = 5.0;
         questR = `${teamx.length & 2}`;
         teamx += "3";
         libsgcorep += 3 << (Math.min(Math.abs(parseInt(`${libsgcorep}`)), 3));
         break;
      }
      orangeK = `${orangeK.length}`;
      questR += `${questR.length >> (Math.min(Math.abs(3), 5))}`;
      while (!orangeK.startsWith(questR)) {
         let activez = String.fromCharCode(108, 105, 115, 116, 101, 110, 101, 114, 95, 121, 95, 54, 54, 0);
         let commentc = 5.0;
         let time_sbb = String.fromCharCode(100, 95, 55, 95, 115, 104, 97, 114, 101, 103, 114, 111, 117, 112, 0);
         let flyeru = 2;
         questR = `${parseInt(`${commentc}`)}`;
         activez = `${time_sbb.length}`;
         commentc *= flyeru - activez.length;
         time_sbb = `${activez.length}`;
         flyeru *= flyeru ^ 1;
         break;
      }
      let prediction2 = String.fromCharCode(111, 95, 50, 48, 95, 120, 118, 109, 99, 0);
      let mergerG = String.fromCharCode(103, 95, 50, 51, 95, 115, 109, 106, 112, 101, 103, 0);
      let tickF: Map<any, any> = new Map([[String.fromCharCode(116, 104, 114, 111, 119, 95, 120, 95, 52, 52, 0), 482], [String.fromCharCode(119, 95, 50, 55, 95, 112, 108, 97, 121, 105, 110, 103, 0), 46]]);
      questR = `${mergerG.length - 3}`;
      prediction2 = `${tickF.size + prediction2.length}`;
      mergerG += `${prediction2.length}`;
      tickF = new Map([[`${tickF.size}`, prediction2.length - 2]]);
      for (let u = 0; u < 1; u++) {
         let umengC = String.fromCharCode(97, 95, 53, 49, 95, 116, 111, 110, 103, 117, 101, 0);
         let traminiC: Array<any> = [String.fromCharCode(102, 95, 49, 49, 95, 100, 111, 118, 101, 0), String.fromCharCode(106, 95, 56, 95, 103, 116, 101, 115, 116, 0), String.fromCharCode(102, 95, 54, 55, 95, 99, 105, 114, 99, 108, 101, 0)];
         let heartZ = String.fromCharCode(111, 95, 51, 50, 95, 114, 112, 122, 97, 0);
         let short_71b = 4.0;
         let animation8: Map<any, any> = new Map([[String.fromCharCode(116, 95, 53, 95, 103, 101, 116, 0), 153], [String.fromCharCode(117, 95, 50, 54, 0), 590], [String.fromCharCode(99, 111, 111, 114, 100, 95, 56, 95, 49, 48, 0), 610]]);
         orangeK += `${umengC.length - 1}`;
         umengC = `${1 - traminiC.length}`;
         traminiC.push(parseInt(`${short_71b}`) << (Math.min(Math.abs(animation8.size), 2)));
         heartZ += "2";
         short_71b -= (parseFloat(`${String.fromCharCode(111, 0) == heartZ ? traminiC.length : heartZ.length}`));
         animation8.set(`${short_71b}`, parseInt(`${short_71b}`));
      }
      turnf = `${gdtadvt.size}`;
      let floaterf = umengS ? !umengS : umengS;
      do {
         umengS = turnf.length == 52 || thumbnail2;
         if (floaterf) {
            break;
         }
      } while ((streamingu == 1) && floaterf);
      for (let u = 0; u < 1; u++) {
         trophy4 = `${2 + gdtadvt.size}`;
      }
      manifestz += "1";
      if (4 == (manifestz.length % 2) || (e_image_.length % (Math.max(10, manifestz.length))) == 2) {
         e_image_.push((turnf == String.fromCharCode(122, 0) ? turnf.length : gdtadvt.size));
      }
      umengS = turnf.length <= 27;
      let entryo = 9828449 >= gradlew4;
      do {
         gradlew4 &= ((umengS ? 2 : 1) & 1);
         if (entryo) {
            break;
         }
      } while (entryo && ((5 >> (Math.min(3, Math.abs(gradlew4)))) >= 1 && 5 >= gradlew4));
      let lang5 = 5;
      lang5 ^= 1;
      lang5 *= 1;
      lang5 %= Math.max(1, lang5 / (Math.max(1, 2)));
      thumbnail2 = String.fromCharCode(97, 0) == libswscaleV;
      if (trophy4.length < 4) {
         let twitterX = String.fromCharCode(99, 111, 108, 108, 97, 112, 115, 101, 100, 95, 119, 95, 56, 52, 0);
         let whistlen = 3.0;
         let untickz = 4;
         let castingC = String.fromCharCode(100, 97, 116, 97, 98, 97, 115, 101, 95, 108, 95, 55, 52, 0);
         whistlen *= parseInt(`${whistlen}`) >> (Math.min(1, Math.abs(untickz)));
         let mintegralu = 5.0;
         if (!twitterX.startsWith(`${whistlen}`)) {
            whistlen *= castingC.length << (Math.min(Math.abs(1), 4));
         }
         mintegralu *= 2 ^ twitterX.length;
         twitterX = `${2 ^ parseInt(`${mintegralu}`)}`;
         untickz <<= Math.min(Math.abs((castingC == String.fromCharCode(84, 0) ? castingC.length : twitterX.length)), 5);
         if (2 > castingC.length) {
            castingC = `${parseInt(`${whistlen}`) | untickz}`;
         }
         if (twitterX.endsWith(`${mintegralu}`)) {
            twitterX = `${parseInt(`${whistlen}`) * 1}`;
         }
         twitterX = `${parseInt(`${mintegralu}`) << (Math.min(1, Math.abs(2)))}`;
         let k_titleZ = String.fromCharCode(115, 116, 114, 102, 117, 110, 99, 95, 53, 95, 52, 50, 0);
         let tail_ = String.fromCharCode(108, 111, 110, 103, 105, 116, 117, 100, 101, 95, 122, 95, 50, 49, 0);
         whistlen *= 3;
         let runtimescheduler8 = false;
         let vietnams = true;
         page2 *= (String.fromCharCode(110, 0) == castingC ? castingC.length : e_image_.length);
      }
      let const_57 = false;
      let streamingo = String.fromCharCode(113, 95, 51, 50, 95, 109, 98, 98, 108, 111, 99, 107, 0);
      let valuesm = String.fromCharCode(99, 117, 101, 115, 95, 119, 95, 54, 0);
      let libflipperW = 3.0;
      let cricketj = 4.0;
      let next2 = String.fromCharCode(120, 95, 53, 57, 95, 99, 104, 105, 114, 112, 0);
      libflipperW -= (parseFloat(`${(const_57 ? 5 : 2) << (Math.min(Math.abs(parseInt(`${libflipperW}`)), 4))}`));
      next2 = `${next2.length ^ 1}`;
      streamingo = `${1 ^ parseInt(`${cricketj}`)}`;
      let floaterA = cricketj >= 6617699.0;
      do {
         let countryx = String.fromCharCode(120, 95, 53, 49, 95, 101, 115, 99, 97, 112, 101, 100, 0);
         let abidetectp = String.fromCharCode(98, 103, 114, 97, 95, 55, 95, 49, 50, 0);
         let trophyw = String.fromCharCode(122, 111, 110, 101, 115, 95, 101, 95, 50, 55, 0);
         let scrollviewN = 5;
         let catalog4 = 5;
         cricketj += parseFloat(`${catalog4 % (Math.max(5, parseInt(`${cricketj}`)))}`);
         countryx += "3";
         abidetectp = `${scrollviewN}`;
         trophyw += `${abidetectp.length}`;
         scrollviewN -= scrollviewN & 1;
         catalog4 <<= Math.min(4, Math.abs(scrollviewN));
         if (floaterA) {
            break;
         }
      } while (((libflipperW * cricketj) > 4.89 || (libflipperW * cricketj) > 4.89) && floaterA);
      while (const_57 || 3.60 == (1.76 * libflipperW)) {
         let regengd = 2.0;
         let pressure3 = 4;
         const_57 = valuesm == String.fromCharCode(97, 0);
         regengd /= Math.max(parseFloat(`${pressure3 - 3}`), 2);
         pressure3 ^= pressure3 + parseInt(`${regengd}`);
         break;
      }
      for (let a = 0; a < 2; a++) {
         streamingo = `${parseInt(`${libflipperW}`) - 3}`;
      }
      while (5.41 > (cricketj + parseFloat(`${valuesm.length}`))) {
         let applicationN = 2;
         let libswscaleO = 5.0;
         let libsgcorem = String.fromCharCode(102, 95, 50, 56, 95, 114, 101, 99, 111, 100, 101, 0);
         let subs5 = false;
         cricketj *= parseFloat(`${parseInt(`${libswscaleO}`)}`);
         applicationN >>= Math.min(2, Math.abs(applicationN ^ libsgcorem.length));
         libswscaleO *= parseFloat(`${libsgcorem.length}`);
         subs5 = (applicationN << (Math.min(libsgcorem.length, 1))) < 19;
         break;
      }
      libflipperW -= parseFloat(`${2}`);
      for (let z = 0; z < 3; z++) {
         let eact8 = 5.0;
         let libturbomodulejsijniJ = String.fromCharCode(115, 101, 109, 97, 110, 116, 105, 99, 115, 95, 54, 95, 51, 52, 0);
         let valuesf: Map<any, any> = new Map([[String.fromCharCode(122, 95, 56, 50, 95, 105, 115, 115, 0), true], [String.fromCharCode(111, 95, 51, 55, 95, 101, 121, 101, 100, 114, 111, 112, 112, 101, 114, 0), true]]);
         let mimow = false;
         let nativeexg = 1;
         streamingo = `${streamingo.length}`;
         eact8 -= (libturbomodulejsijniJ == String.fromCharCode(82, 0) ? nativeexg : libturbomodulejsijniJ.length);
         valuesf.set(`${libturbomodulejsijniJ}`, valuesf.size);
         mimow = parseInt(`${eact8}`) >= libturbomodulejsijniJ.length;
         nativeexg <<= Math.min(Math.abs((libturbomodulejsijniJ == String.fromCharCode(55, 0) ? libturbomodulejsijniJ.length : nativeexg)), 1);
      }
      thumbnail2 = trophy4 == manifestz;
      setShowOverlay(true);

      if (manifestz.includes(`${gdtadvt.size}`)) {
         gdtadvt.set(`${thumbnail2}`, ((thumbnail2 ? 1 : 1) * 3));
      }
      let interstitial7 = 5.0;
      interstitial7 *= parseInt(`${interstitial7}`) >> (Math.min(5, Math.abs(1)));
      let relatedA = interstitial7 <= 4939723.0;
      do {
         interstitial7 += parseInt(`${interstitial7}`) & 3;
         if (relatedA) {
            break;
         }
      } while ((2.96 >= (interstitial7 * 4.36) && (4.36 * interstitial7) >= 3.72) && relatedA);
      interstitial7 *= parseInt(`${interstitial7}`);
      gradlew4 ^= parseInt(`${interstitial7}`) * 2;
      while ((5 << (Math.min(1, manifestz.length))) >= 1) {
         let libavfilterm = String.fromCharCode(103, 95, 52, 49, 95, 109, 99, 100, 101, 99, 0);
         libavfilterm += `${(String.fromCharCode(72, 0) == libavfilterm ? libavfilterm.length : libavfilterm.length)}`;
         libavfilterm += `${3 ^ libavfilterm.length}`;
         let greyM = 0.0;
         e_image_ = [libswscaleV.length + manifestz.length];
         break;
      }
      for (let b = 0; b < 2; b++) {
         libswscaleV = "3";
      }
      gradlew4 += manifestz.length;
      turnf += "2 + gradlew4";
      turnf = "1";
      turnf = `${manifestz.length}`;
      while (3.97 == (4.5 + page2) && page2 == 4.5) {
         umengS = String.fromCharCode(78, 0) == turnf;
         break;
      }
      umengS = !umengS;
      overlayRef.current = true

      trophy4 = "1";
      let helperB = 2.0;
      let valuesB = true;
      let diceK = String.fromCharCode(101, 95, 54, 95, 112, 105, 120, 109, 102, 116, 115, 0);
      if (!diceK.startsWith(`${helperB}`)) {
         diceK += `${((valuesB ? 4 : 4))}`;
      }
      let stri = String.fromCharCode(97, 115, 102, 99, 114, 121, 112, 116, 95, 48, 95, 50, 57, 0);
      let cricketa: Map<any, any> = new Map([[String.fromCharCode(99, 111, 111, 114, 100, 95, 48, 95, 48, 0), true], [String.fromCharCode(97, 103, 97, 105, 110, 95, 53, 95, 53, 54, 0), true]]);
      diceK += `${diceK.length / (Math.max(9, cricketa.size))}`;
      stri += "1";
      cricketa = new Map([[stri, stri.length]]);
      if ((diceK.length | 4) > 4 && (4.10 - helperB) > 5.10) {
         helperB *= 2 - diceK.length;
      }
      let mini7 = false;
      diceK = `${((valuesB ? 3 : 1) - 3)}`;
      mini7 = !mini7 && mini7;
      for (let n = 0; n < 3; n++) {
         helperB += 3 | diceK.length;
      }
      let flyera = diceK == String.fromCharCode(105, 98, 121, 109, 95, 113, 113, 55, 49, 97, 0);
      do {
         diceK += `${diceK.length}`;
         if (flyera) {
            break;
         }
      } while (flyera && (4 >= diceK.length));
      for (let b = 0; b < 2; b++) {
         diceK += `${parseInt(`${helperB}`) & 1}`;
      }
      let bellq = String.fromCharCode(114, 101, 102, 101, 116, 99, 104, 95, 102, 95, 55, 48, 0);
      let product3 = String.fromCharCode(120, 95, 50, 49, 95, 112, 114, 101, 118, 101, 110, 116, 101, 100, 0);
      let codegent = String.fromCharCode(103, 95, 54, 95, 100, 105, 108, 97, 116, 101, 0);
      manifestz = `${manifestz.length * 1}`;
      if (umengS) {
         let vignetteI = 3;
         vignetteI &= 2 << (Math.min(2, Math.abs(vignetteI)));
         let connectionD: Array<any> = [857, 337, 940];
         let sourcec: Map<any, any> = new Map([[String.fromCharCode(119, 116, 118, 102, 105, 108, 101, 95, 51, 95, 48, 0), String.fromCharCode(118, 95, 54, 56, 95, 106, 117, 115, 116, 0)], [String.fromCharCode(115, 95, 56, 53, 95, 115, 117, 110, 112, 111, 115, 0), String.fromCharCode(100, 95, 55, 49, 95, 120, 99, 104, 97, 99, 104, 97, 0)]]);
         let graphD: Array<any> = [String.fromCharCode(110, 95, 50, 48, 95, 98, 105, 116, 115, 116, 114, 101, 97, 109, 0), String.fromCharCode(110, 111, 100, 101, 108, 97, 121, 95, 51, 95, 55, 0), String.fromCharCode(119, 97, 108, 107, 101, 114, 95, 53, 95, 50, 55, 0)];
         vignetteI >>= Math.min(Math.abs(2), 1);
         connectionD = [sourcec.size];
         sourcec.set(`${graphD.length}`, 3);
         graphD.push(3 ^ sourcec.size);
         vignetteI &= 3;
         gdtadvt = new Map([[`${streamingu}`, 1]]);
      }
      manifestz = "3 & gradlew4";
      turnf = `${((thumbnail2 ? 2 : 4) / (Math.max(e_image_.length, 1)))}`;
      streamingu += (libswscaleV == String.fromCharCode(115, 0) ? streamingu : libswscaleV.length);
      let mbnativer = String.fromCharCode(112, 117, 98, 108, 105, 115, 104, 97, 98, 108, 101, 95, 48, 95, 55, 52, 0);
      let expand4 = String.fromCharCode(116, 105, 103, 103, 108, 101, 95, 112, 95, 56, 50, 0);
      let ajaxP = String.fromCharCode(118, 111, 114, 98, 105, 115, 100, 115, 112, 95, 117, 95, 49, 51, 0);
      if (mbnativer.length <= 5 && expand4 == String.fromCharCode(121, 0)) {
         mbnativer = `${mbnativer.length}`;
      }
      mbnativer = `${ajaxP.length}`;
      let r_titlex = true;
      let actionsyg = String.fromCharCode(108, 111, 97, 100, 101, 114, 95, 115, 95, 53, 48, 0);
      let targety = false;
      mbnativer += `${((r_titlex ? 2 : 2))}`;
      r_titlex = actionsyg.length >= 8;
      actionsyg = "2";
      for (let v = 0; v < 2; v++) {
         mbnativer += `${mbnativer.length << (Math.min(expand4.length, 3))}`;
      }
      if (expand4.length <= mbnativer.length) {
         let controlsk = 5;
         let streamingM = false;
         let mintegrals = String.fromCharCode(109, 117, 108, 116, 105, 112, 108, 105, 101, 114, 95, 104, 95, 55, 51, 0);
         expand4 += `${(mintegrals == String.fromCharCode(99, 0) ? controlsk : mintegrals.length)}`;
         controlsk %= Math.max(2, 3);
      }
      for (let k = 0; k < 2; k++) {
         mbnativer = `${expand4.length << (Math.min(ajaxP.length, 4))}`;
      }
      while (ajaxP == String.fromCharCode(101, 0)) {
         let page_ = true;
         mbnativer += "1";
         break;
      }
      let containero = expand4 == String.fromCharCode(49, 54, 53, 107, 48, 51, 51, 107, 111, 113, 0);
      do {
         expand4 += `${mbnativer.length << (Math.min(Math.abs(1), 4))}`;
         if (containero) {
            break;
         }
      } while (containero && (mbnativer != expand4));
      expand4 += `${expand4.length}`;
      gradlew4 |= streamingu % (Math.max(2, 5));
      while (manifestz.includes(`${libswscaleV.length}`)) {
         libswscaleV += `${parseInt(`${page2}`) | 2}`;
         break;
      }
      let gpayo = 7148842 <= gdtadvt.size;
      do {
         let libflipperq = false;
         let zoomZ = false;
         let j_playerD: Map<any, any> = new Map([[String.fromCharCode(97, 95, 51, 50, 95, 116, 110, 112, 117, 116, 0), 115], [String.fromCharCode(100, 116, 109, 102, 95, 102, 95, 49, 50, 0), 813]]);
         let fastforwardd = 4;
         let guideA = libflipperq ? !libflipperq : libflipperq;
         do {
            libflipperq = !zoomZ && 41 == fastforwardd;
            if (guideA) {
               break;
            }
         } while (guideA && (5 >= (j_playerD.size - 5)));
         zoomZ = !zoomZ;
         while (!zoomZ || !libflipperq) {
            zoomZ = !zoomZ;
            break;
         }
         if (zoomZ || !libflipperq) {
            let statsn = String.fromCharCode(115, 95, 55, 48, 95, 114, 101, 106, 101, 99, 116, 105, 111, 110, 115, 0);
            libflipperq = zoomZ && 59 > fastforwardd;
            statsn += "1";
         }
         zoomZ = (!libflipperq ? zoomZ : libflipperq);
         let currentm = 1.0;
         let chat8 = 1.0;
         if (3 > (3 & fastforwardd)) {
            let latn9 = String.fromCharCode(97, 115, 111, 108, 117, 116, 101, 95, 50, 95, 52, 50, 0);
            libflipperq = !libflipperq;
            latn9 += `${1 ^ latn9.length}`;
         }
         for (let q = 0; q < 1; q++) {
            currentm /= Math.max((parseFloat(`${(libflipperq ? 5 : 3) * parseInt(`${currentm}`)}`)), 3);
         }
         let networkO = 9261814.0 >= chat8;
         do {
            chat8 /= Math.max(4, (parseFloat(`${1 << (Math.min(1, Math.abs((zoomZ ? 1 : 4))))}`)));
            if (networkO) {
               break;
            }
         } while (networkO && (j_playerD.size >= 3));
         currentm -= parseFloat(`${3}`);
         let descX = String.fromCharCode(115, 95, 53, 54, 95, 112, 105, 120, 101, 108, 102, 108, 111, 97, 116, 0);
         let sourcef = String.fromCharCode(115, 116, 115, 100, 95, 121, 95, 52, 51, 0);
         let sharedB: Map<any, any> = new Map([[String.fromCharCode(117, 101, 102, 97, 95, 120, 95, 55, 50, 0), false], [String.fromCharCode(100, 105, 114, 101, 99, 116, 95, 55, 95, 55, 0), true], [String.fromCharCode(108, 115, 112, 115, 95, 117, 95, 52, 54, 0), true]]);
         zoomZ = fastforwardd > descX.length;
         descX += `${2 & sharedB.size}`;
         sourcef += `${sourcef.length * 3}`;
         sharedB.set(sourcef, sharedB.size);
         let styles0 = 1.0;
         let gpayv: Map<any, any> = new Map([[String.fromCharCode(115, 95, 50, 53, 95, 117, 112, 100, 97, 116, 101, 0), String.fromCharCode(97, 114, 116, 105, 115, 95, 113, 95, 49, 56, 0)], [String.fromCharCode(97, 95, 53, 52, 95, 112, 114, 101, 100, 120, 108, 0), String.fromCharCode(101, 103, 114, 101, 115, 115, 95, 104, 95, 52, 50, 0)], [String.fromCharCode(107, 95, 51, 50, 95, 114, 101, 97, 100, 102, 114, 97, 109, 101, 0), String.fromCharCode(99, 111, 110, 116, 114, 111, 108, 115, 95, 119, 95, 56, 0)]]);
         fastforwardd -= j_playerD.size;
         styles0 += parseFloat(`${parseInt(`${styles0}`)}`);
         gpayv.set(`${styles0}`, 2 - parseInt(`${styles0}`));
         gdtadvt.set(`${libflipperq}`, libswscaleV.length);
         if (gpayo) {
            break;
         }
      } while (gpayo && (4 > (5 - gdtadvt.size)));
      page2 += e_image_.length;
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
         let injuryr = 4;
         let brightnessI = String.fromCharCode(111, 95, 57, 52, 95, 109, 101, 114, 103, 101, 100, 0);
         let libcxxcomponentsV = 5.0;
         let android_ = String.fromCharCode(116, 95, 53, 48, 95, 109, 97, 100, 100, 0);
         let rewardQ = 5;
         let down7 = true;
         let cricketd: Array<any> = [String.fromCharCode(102, 95, 56, 54, 95, 105, 109, 112, 111, 114, 116, 101, 100, 0), String.fromCharCode(119, 95, 50, 95, 102, 105, 108, 108, 115, 0)];
         let tempe = String.fromCharCode(115, 116, 114, 117, 99, 116, 117, 114, 97, 108, 95, 121, 95, 51, 50, 0);
         let libfbT: Array<any> = [646, 84, 725];
         let reducerr = String.fromCharCode(109, 97, 116, 114, 105, 120, 101, 110, 99, 95, 97, 95, 53, 52, 0);
         let scheduler6: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 114, 111, 116, 97, 116, 101, 95, 57, 95, 50, 49, 0), 2], [String.fromCharCode(116, 97, 115, 107, 115, 95, 121, 95, 56, 55, 0), 841], [String.fromCharCode(109, 115, 114, 108, 101, 95, 116, 95, 50, 56, 0), 480]]);
         let libsentryc = 2.0;
         let overT = String.fromCharCode(97, 108, 103, 115, 95, 121, 95, 57, 57, 0);
         let helperT = String.fromCharCode(118, 114, 101, 99, 116, 95, 114, 95, 49, 52, 0);
         let eighteenw: Array<any> = [473, 546, 454];
         while (!android_.startsWith(`${scheduler6.size}`)) {
            scheduler6 = new Map([[`${libfbT.length}`, injuryr]]);
            break;
         }
         scheduler6.set(`${android_}`, (android_ == String.fromCharCode(114, 0) ? scheduler6.size : android_.length));
         libcxxcomponentsV -= parseInt(`${libcxxcomponentsV}`) & reducerr.length;
         down7 = tempe.endsWith(`${rewardQ}`);
         while (reducerr != brightnessI) {
            brightnessI = `${1 % (Math.max(rewardQ, 6))}`;
            break;
         }
         cricketd.push((tempe == String.fromCharCode(118, 0) ? tempe.length : libfbT.length));
         let moonb = 5348014 >= cricketd.length;
         do {
            let libreactnativejni1 = 2;
            let libturbomodulejsijniZ = String.fromCharCode(122, 95, 57, 51, 95, 115, 104, 97, 100, 111, 119, 0);
            let layoutl = true;
            libturbomodulejsijniZ = `${(libturbomodulejsijniZ == String.fromCharCode(54, 0) ? libturbomodulejsijniZ.length : (layoutl ? 2 : 3))}`;
            libturbomodulejsijniZ = `${libreactnativejni1}`;
            if ((5 | libreactnativejni1) > 5) {
               let delegate_fs: Map<any, any> = new Map([[String.fromCharCode(121, 95, 53, 52, 95, 115, 121, 110, 99, 104, 114, 111, 110, 105, 122, 101, 0), String.fromCharCode(108, 95, 55, 95, 115, 99, 97, 110, 110, 101, 100, 0)], [String.fromCharCode(103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 95, 100, 95, 49, 57, 0), String.fromCharCode(119, 97, 110, 116, 95, 98, 95, 52, 50, 0)], [String.fromCharCode(119, 95, 55, 56, 0), String.fromCharCode(99, 104, 97, 114, 97, 99, 116, 101, 114, 95, 102, 95, 50, 0)]]);
               let analyticq = String.fromCharCode(111, 95, 54, 48, 95, 110, 111, 110, 98, 0);
               let main_e3 = String.fromCharCode(99, 97, 112, 116, 117, 114, 101, 116, 101, 115, 116, 118, 105, 100, 101, 111, 95, 103, 95, 49, 56, 0);
               let sellU = 3.0;
               libturbomodulejsijniZ += `${libreactnativejni1 * 1}`;
               delegate_fs = new Map([[main_e3, parseInt(`${sellU}`)]]);
               analyticq = `${parseInt(`${sellU}`)}`;
               main_e3 += `${main_e3.length}`;
            }
            let membershipB = 8400942 >= libturbomodulejsijniZ.length;
            do {
               libturbomodulejsijniZ = `${libreactnativejni1}`;
               if (membershipB) {
                  break;
               }
            } while (membershipB && (!layoutl || libturbomodulejsijniZ.length <= 5));
            let desc9: Array<any> = [578, 474, 273];
            for (let z = 0; z < 1; z++) {
               layoutl = !layoutl;
            }
            for (let s = 0; s < 3; s++) {
               libreactnativejni1 *= desc9.length / (Math.max(3, libreactnativejni1));
            }
            let libcrashsdkS = true;
            let resultT = false;
            libturbomodulejsijniZ = `${libturbomodulejsijniZ.length}`;
            cricketd.push(reducerr.length);
            if (moonb) {
               break;
            }
         } while (moonb && ((5 * libfbT.length) > 5));
         cricketd = [rewardQ];
         brightnessI += "2";


         if (videoRef.current) {

            let nativeexi = 1.0;
            let liveX = 3.0;
            let white7 = 5193326.0 <= liveX;
            do {
               let gradlewK = 3.0;
               let libtanM = String.fromCharCode(110, 95, 50, 50, 95, 115, 116, 111, 114, 105, 110, 103, 0);
               liveX -= 1;
               gradlewK *= parseFloat(`${libtanM.length}`);
               libtanM += `${parseInt(`${gradlewK}`)}`;
               if (white7) {
                  break;
               }
            } while (white7 && (5.86 <= (liveX - nativeexi) && (nativeexi - 5.86) <= 2.90));
            liveX *= parseInt(`${liveX}`) * parseInt(`${nativeexi}`);
            cricketd = [rewardQ - scheduler6.size];
            let anythink0 = String.fromCharCode(56, 104, 109, 107, 113, 114, 122, 0) == brightnessI;
            do {
               let fastforward_ = 3.0;
               let borderlessD = String.fromCharCode(99, 111, 108, 111, 114, 115, 95, 50, 95, 57, 49, 0);
               let invitea = String.fromCharCode(111, 102, 102, 115, 101, 116, 115, 95, 55, 95, 52, 54, 0);
               let telegramE = 3.0;
               let j_titleT = 2;
               telegramE *= borderlessD.length;
               let nextc = 0.0;
               telegramE *= 2 | parseInt(`${telegramE}`);
               nextc *= parseFloat(`${parseInt(`${nextc}`) - parseInt(`${nextc}`)}`);
               telegramE -= borderlessD.length | j_titleT;
               telegramE -= 1 | borderlessD.length;
               while (2.52 == telegramE) {
                  fastforward_ /= Math.max(invitea.length / (Math.max(8, j_titleT)), 2);
                  break;
               }
               telegramE -= 2;
               while (!invitea.startsWith(`${telegramE}`)) {
                  invitea += `${3 + borderlessD.length}`;
                  break;
               }
               let buildN = borderlessD == String.fromCharCode(56, 117, 51, 107, 52, 119, 54, 48, 0);
               do {
                  let matchesQ = false;
                  let catalogK = true;
                  let submitH: Map<any, any> = new Map([[String.fromCharCode(122, 95, 53, 95, 102, 97, 108, 108, 98, 97, 99, 107, 0), 663], [String.fromCharCode(120, 95, 56, 51, 95, 100, 105, 100, 0), 984]]);
                  borderlessD = `${j_titleT * 3}`;
                  matchesQ = !matchesQ && !catalogK;
                  catalogK = submitH.get(`${catalogK}`) == null;
                  submitH = new Map([[`${submitH.size}`, submitH.size ^ 1]]);
                  if (buildN) {
                     break;
                  }
               } while (((j_titleT & 3) >= 1 && (j_titleT & borderlessD.length) >= 3) && buildN);
               while ((fastforward_ * 4.56) > 1.57) {
                  fastforward_ -= (String.fromCharCode(89, 0) == invitea ? invitea.length : parseInt(`${telegramE}`));
                  break;
               }
               while (5.73 <= (2.67 - telegramE)) {
                  let alert4 = String.fromCharCode(116, 101, 109, 112, 108, 97, 116, 101, 100, 95, 106, 95, 49, 48, 0);
                  let bellY = 3.0;
                  let analytick = String.fromCharCode(97, 99, 99, 117, 109, 117, 108, 97, 116, 101, 95, 54, 95, 50, 56, 0);
                  telegramE += 1 >> (Math.min(5, Math.abs(parseInt(`${bellY}`))));
                  alert4 += `${analytick.length}`;
                  bellY += parseFloat(`${analytick.length}`);
                  break;
               }
               j_titleT %= Math.max(parseInt(`${telegramE}`) & borderlessD.length, 4);
               let mbbanner8 = 5;
               let placeholderD = String.fromCharCode(97, 95, 55, 52, 95, 118, 112, 97, 105, 110, 116, 101, 114, 0);
               let stringss = 5.0;
               invitea = `${parseInt(`${stringss}`)}`;
               mbbanner8 ^= mbbanner8 - placeholderD.length;
               placeholderD += `${placeholderD.length}`;
               stringss *= (String.fromCharCode(113, 0) == placeholderD ? placeholderD.length : mbbanner8);
               let watchJ = String.fromCharCode(112, 111, 111, 108, 115, 95, 120, 95, 55, 0);
               let gpay6 = String.fromCharCode(109, 95, 49, 57, 95, 118, 112, 120, 101, 110, 99, 0);
               fastforward_ -= j_titleT;
               watchJ = `${2 << (Math.min(3, watchJ.length))}`;
               gpay6 = `${(watchJ == String.fromCharCode(102, 0) ? gpay6.length : watchJ.length)}`;
               for (let i = 0; i < 1; i++) {
                  j_titleT %= Math.max(3, parseInt(`${telegramE}`));
               }
               while (5 == invitea.length) {
                  borderlessD = `${2 | j_titleT}`;
                  break;
               }
               brightnessI += `${1 % (Math.max(6, parseInt(`${telegramE}`)))}`;
               if (anythink0) {
                  break;
               }
            } while (anythink0 && (rewardQ > 3));
            let p_unlock4 = 1.0;
            p_unlock4 -= parseInt(`${p_unlock4}`) << (Math.min(1, Math.abs(2)));
            if ((2.36 + p_unlock4) <= 4.31 || (p_unlock4 + 2.36) <= 3.36) {
               p_unlock4 /= Math.max(1, 2);
            }
            if ((5.22 / (Math.max(9, p_unlock4))) == 4.67 && (5.22 / (Math.max(9, p_unlock4))) == 1.17) {
               p_unlock4 -= parseInt(`${p_unlock4}`) & 3;
            }
            reducerr += `${cricketd.length % 1}`;
            if (2 > (scheduler6.size - parseInt(`${libsentryc}`)) && (1.50 - libsentryc) > 2.50) {
               libsentryc -= (parseFloat(`${String.fromCharCode(79, 0) == android_ ? android_.length : parseInt(`${libcxxcomponentsV}`)}`));
            }
            let circlet = 3.0;
            let injuryt = 3.0;
            let indexr = true;
            circlet -= parseFloat(`${parseInt(`${circlet}`) >> (Math.min(2, Math.abs(2)))}`);
            injuryt /= Math.max(parseFloat(`${3 & parseInt(`${injuryt}`)}`), 4);
            indexr = !indexr;
            if ((2.95 * circlet) == 4.60) {
               circlet -= parseFloat(`${parseInt(`${circlet}`)}`);
            }
            for (let f = 0; f < 1; f++) {
               circlet *= parseFloat(`${1}`);
            }
            reducerr = `${3 | reducerr.length}`;
            let headerX = 5.0;
            if (headerX > headerX) {
               let renewA = String.fromCharCode(105, 110, 115, 116, 97, 108, 108, 101, 100, 95, 102, 95, 52, 55, 0);
               let helperY = String.fromCharCode(103, 114, 111, 117, 112, 95, 99, 95, 53, 49, 0);
               let libavutild = false;
               headerX /= Math.max(4, renewA.length * 3);
               renewA = `${(helperY == String.fromCharCode(52, 0) ? (libavutild ? 4 : 2) : helperY.length)}`;
               libavutild = libavutild || helperY.length >= 30;
            }
            let networkb: Array<any> = [178, 146, 949];
            let default_6D: Array<any> = [587, 482, 875];
            let redirectV = networkb.length >= 5331621;
            do {
               let launcht: Array<any> = [93, 869];
               let short_ak = 1.0;
               networkb.push(1);
               launcht = [parseInt(`${short_ak}`) & 2];
               short_ak /= Math.max(parseFloat(`${1 << (Math.min(3, launcht.length))}`), 5);
               if (redirectV) {
                  break;
               }
            } while (redirectV && ((networkb.length - 2) > 2 && (networkb.length * parseInt(`${headerX}`)) > 2));
            libfbT.push(rewardQ);
            reducerr += `${parseInt(`${libsentryc}`) ^ 2}`;
            while ((5 + tempe.length) < 3 && 2 < (5 + libfbT.length)) {
               libfbT = [(android_ == String.fromCharCode(74, 0) ? android_.length : parseInt(`${libcxxcomponentsV}`))];
               break;
            }
            scheduler6 = new Map([[`${cricketd.length}`, reducerr.length & 2]]);
            videoRef.current.seek(value);

            for (let f = 0; f < 3; f++) {
               down7 = !down7;
            }
            rewardQ -= (String.fromCharCode(84, 0) == reducerr ? libfbT.length : reducerr.length);
            let valuesL = libcxxcomponentsV <= 7702100.0;
            do {
               libcxxcomponentsV /= Math.max(cricketd.length, 2);
               if (valuesL) {
                  break;
               }
            } while (valuesL && (2 == brightnessI.length));
            android_ += `${parseInt(`${libsentryc}`) >> (Math.min(Math.abs(3), 3))}`;
            let selectedL = libfbT.length <= 6133099;
            do {
               libfbT.push(libfbT.length | 2);
               if (selectedL) {
                  break;
               }
            } while ((5 >= libfbT.length) && selectedL);
            rewardQ -= android_.length;
            let sheet7 = 3.0;
            let models6: Array<any> = [277, 5, 198];
            let libjsijniprofiler3: Array<any> = [229, 278, 563];
            let main_bu = 2;
            let custom4 = 5.0;
            let playlisti = 3.0;
            models6 = [parseInt(`${playlisti}`)];
            main_bu %= Math.max(1, 2);
            custom4 -= parseFloat(`${3}`);
            if ((2.29 * sheet7) > 4.45 && (libjsijniprofiler3.length * 5) > 1) {
               let libtan9: Array<any> = [779, 726];
               let turn0 = 4.0;
               let sourceJ = 5.0;
               let main_q9 = 2.0;
               let producte = 5.0;
               libjsijniprofiler3.push(3);
               libtan9.push(parseInt(`${producte}`));
               turn0 -= parseFloat(`${3}`);
               sourceJ -= parseFloat(`${parseInt(`${main_q9}`)}`);
            }
            models6 = [parseInt(`${sheet7}`)];
            let bodanH = 4.0;
            let orientationl = 4.0;
            for (let w = 0; w < 2; w++) {
               models6 = [parseInt(`${sheet7}`) << (Math.min(libjsijniprofiler3.length, 3))];
            }
            let nterstitiall = String.fromCharCode(98, 117, 105, 108, 100, 115, 95, 117, 95, 51, 53, 0);
            sheet7 /= Math.max(1, models6.length);
            let const_9e5 = String.fromCharCode(98, 105, 110, 100, 101, 114, 95, 115, 95, 53, 56, 0);
            const_9e5 = `${parseInt(`${sheet7}`) >> (Math.min(nterstitiall.length, 4))}`;
            cricketd.push(reducerr.length);
            android_ = "3";
            libsentryc *= parseFloat(`${rewardQ / 1}`);
            setOnSliding(false);
         }
      }, 1000),
      [videoRef.current]
   );

   const handlePlayPause = () => {
      let half5: Map<any, any> = new Map([[String.fromCharCode(98, 111, 116, 104, 95, 49, 95, 49, 51, 0), String.fromCharCode(115, 99, 114, 117, 98, 98, 105, 110, 103, 95, 100, 95, 57, 54, 0)], [String.fromCharCode(115, 95, 52, 54, 95, 101, 118, 112, 111, 114, 116, 111, 112, 0), String.fromCharCode(108, 95, 56, 50, 95, 99, 114, 97, 115, 104, 101, 100, 0)], [String.fromCharCode(99, 95, 55, 48, 95, 120, 112, 111, 114, 116, 101, 100, 0), String.fromCharCode(100, 95, 49, 55, 95, 98, 101, 108, 111, 110, 103, 115, 0)]]);
      let greyd = 1.0;
      let resultH = String.fromCharCode(105, 110, 118, 111, 107, 101, 95, 108, 95, 56, 48, 0);
      let hooksV = false;
      let huaweiI = 3.0;
      let tempz = String.fromCharCode(97, 115, 121, 109, 95, 118, 95, 50, 55, 0);
      let constantsP: Array<any> = [899, 382, 997];
      let foregroundO: Map<any, any> = new Map([[String.fromCharCode(105, 95, 53, 95, 97, 116, 116, 114, 105, 98, 117, 116, 105, 111, 110, 0), String.fromCharCode(99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 95, 120, 95, 56, 57, 0)], [String.fromCharCode(106, 95, 57, 57, 95, 100, 105, 109, 115, 0), String.fromCharCode(109, 95, 52, 50, 95, 101, 110, 99, 114, 121, 112, 116, 105, 110, 103, 0)], [String.fromCharCode(112, 97, 99, 107, 97, 103, 101, 95, 53, 95, 50, 51, 0), String.fromCharCode(101, 108, 108, 105, 112, 116, 105, 99, 97, 108, 95, 49, 95, 54, 52, 0)]]);
      let actionj: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 52, 95, 109, 117, 110, 109, 97, 112, 0), 930], [String.fromCharCode(100, 105, 103, 101, 115, 116, 98, 121, 111, 98, 106, 95, 49, 95, 49, 0), 805]]);
      let eacte = constantsP.length <= 7972406;
      do {
         let armvaw = 3.0;
         let fullK = 2;
         let watchM = 6419388.0 <= armvaw;
         do {
            armvaw /= Math.max(1, fullK);
            if (watchM) {
               break;
            }
         } while (watchM && ((fullK % 5) == 2 || (parseInt(`${armvaw}`) - fullK) == 5));
         let materialM = 2.0;
         materialM += parseFloat(`${parseInt(`${armvaw}`)}`);
         fullK -= fullK << (Math.min(Math.abs(parseInt(`${materialM}`)), 1));
         materialM += parseFloat(`${parseInt(`${materialM}`) * 1}`);
         let interstitialq = String.fromCharCode(103, 95, 53, 50, 95, 103, 101, 111, 99, 111, 100, 105, 110, 103, 0);
         let backgroundu = String.fromCharCode(105, 95, 56, 55, 95, 121, 97, 100, 105, 102, 0);
         constantsP = [fullK];
         if (eacte) {
            break;
         }
      } while (((2 >> (Math.min(4, tempz.length))) == 3) && eacte);
      let libzeusS = 8374874 >= constantsP.length;
      do {
         constantsP.push(1 & half5.size);
         if (libzeusS) {
            break;
         }
      } while (libzeusS && (hooksV && 3 == (1 * constantsP.length)));
      resultH += `${1 * constantsP.length}`;
      resultH = `${tempz.length / (Math.max(2, resultH.length))}`;
      if (!hooksV) {
         hooksV = ((half5.size ^ (!hooksV ? half5.size : 48)) == 85);
      }

      clearTimeout(iconTimer.current);

      huaweiI += 3;
      tempz = "1";
      constantsP = [1];
      constantsP = [resultH.length | 1];
      let a_title0 = 5219223.0 >= greyd;
      do {
         greyd += half5.size + 1;
         if (a_title0) {
            break;
         }
      } while (a_title0 && (1.96 > huaweiI));
      setShowIcon(true);

      let appleg = 5.0;
      for (let m = 0; m < 3; m++) {
         appleg *= parseInt(`${appleg}`);
      }
      let profilen = false;
      let mapbufferA = false;
      let plashv = 1.0;
      mapbufferA = !profilen;
      plashv /= Math.max(3, parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${plashv}`)), 4))}`));
      resultH = `${tempz.length}`;
      greyd -= (parseInt(`${huaweiI}`) * (hooksV ? 1 : 5));
      huaweiI /= Math.max(((hooksV ? 1 : 5)), 2);
      for (let j = 0; j < 2; j++) {
         huaweiI += 3;
      }
      constantsP.push(parseInt(`${huaweiI}`));
      if (isPause) {

         while ((2.73 / (Math.max(7, huaweiI))) > 4.20) {
            tempz = `${(parseInt(`${huaweiI}`) + (hooksV ? 2 : 2))}`;
            break;
         }
         resultH = `${resultH.length / 1}`;
         half5.set(`${huaweiI}`, resultH.length);
         let time_mB: Array<any> = [990, 734, 556];
         let settings5: Map<any, any> = new Map([[String.fromCharCode(101, 118, 97, 108, 95, 51, 95, 52, 51, 0), 60], [String.fromCharCode(101, 113, 117, 101, 115, 116, 95, 51, 95, 52, 48, 0), 401]]);
         let zhengpianW = true;
         let untickM = zhengpianW ? !zhengpianW : zhengpianW;
         do {
            zhengpianW = !zhengpianW;
            if (untickM) {
               break;
            }
         } while ((time_mB.length <= 5) && untickM);
         let emojiA: Map<any, any> = new Map([[String.fromCharCode(101, 112, 108, 121, 95, 50, 95, 51, 55, 0), 148], [String.fromCharCode(117, 95, 52, 52, 95, 107, 105, 116, 116, 121, 0), 54]]);
         zhengpianW = !zhengpianW;
         time_mB.push(settings5.size);
         time_mB.push(3 & emojiA.size);
         if (!zhengpianW) {
            zhengpianW = emojiA.get(`${zhengpianW}`) != null;
         }
         let schedulerT = zhengpianW ? !zhengpianW : zhengpianW;
         do {
            zhengpianW = !zhengpianW && settings5.size > 75;
            if (schedulerT) {
               break;
            }
         } while ((3 < (3 & emojiA.size)) && schedulerT);
         emojiA = new Map([[`${settings5.size}`, 1 * time_mB.length]]);
         time_mB = [(emojiA.size << (Math.min(5, Math.abs((zhengpianW ? 3 : 3)))))];
         half5.set(`${huaweiI}`, constantsP.length);
         let downloadedC = hooksV ? !hooksV : hooksV;
         do {
            hooksV = !resultH.includes(`${hooksV}`);
            if (downloadedC) {
               break;
            }
         } while ((!hooksV) && downloadedC);
         iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
      }
      onManualPause(isPause);
   };

   const handleLoadStart = () => {
      let thailande = String.fromCharCode(113, 95, 53, 48, 95, 114, 101, 115, 97, 109, 112, 108, 101, 0);
      let submit5: Array<any> = [774, 561];
      let math5 = 2.0;
      let hiadA = String.fromCharCode(99, 111, 100, 101, 114, 115, 95, 105, 95, 52, 48, 0);
      let renewn: Map<any, any> = new Map([[String.fromCharCode(104, 95, 52, 56, 95, 112, 105, 110, 107, 0), String.fromCharCode(116, 95, 56, 48, 95, 105, 112, 109, 111, 118, 105, 101, 0)], [String.fromCharCode(99, 111, 108, 111, 114, 109, 97, 116, 114, 105, 120, 95, 122, 95, 56, 57, 0), String.fromCharCode(111, 95, 57, 54, 95, 109, 97, 114, 107, 101, 116, 0)], [String.fromCharCode(115, 99, 105, 101, 110, 116, 105, 102, 105, 99, 95, 56, 95, 54, 48, 0), String.fromCharCode(120, 95, 50, 48, 95, 97, 112, 112, 101, 110, 100, 105, 110, 103, 0)]]);
      let tnewinterstitiali = 0;
      let proxyr = false;
      let privacyr = 5.0;
      let backgroundC = false;
      let optionsT = 2.0;
      let videojsN = String.fromCharCode(107, 97, 108, 109, 97, 110, 95, 102, 95, 56, 57, 0);
      let list5: Map<any, any> = new Map([[String.fromCharCode(106, 99, 104, 117, 102, 102, 95, 101, 95, 49, 53, 0), String.fromCharCode(104, 95, 53, 55, 95, 101, 110, 100, 105, 110, 103, 0)], [String.fromCharCode(112, 97, 115, 119, 111, 114, 100, 95, 49, 95, 50, 0), String.fromCharCode(122, 95, 54, 48, 95, 112, 97, 99, 107, 0)]]);
      let commentD: Array<any> = [944, 405];
      let tempK = 0.0;
      optionsT /= Math.max(parseFloat(`${submit5.length}`), 5);
      let libreanimatedW = tnewinterstitiali >= 7894221;
      do {
         let filledu = 2;
         let episodesK = false;
         let moonl = true;
         moonl = (!moonl ? !episodesK : moonl);
         let greent = episodesK ? !episodesK : episodesK;
         do {
            episodesK = filledu > 26 && !episodesK;
            if (greent) {
               break;
            }
         } while (greent && (filledu > 1));
         let screeno = 1.0;
         let areag = String.fromCharCode(105, 95, 51, 48, 95, 110, 101, 120, 116, 0);
         filledu += ((moonl ? 3 : 1) << (Math.min(Math.abs(2), 5)));
         areag += `${areag.length}`;
         if (episodesK || 3.38 > (1.46 * screeno)) {
            let libavfilteru = String.fromCharCode(115, 95, 52, 50, 95, 97, 118, 115, 116, 114, 105, 110, 103, 0);
            let loadingC = 3.0;
            let cross5 = 1.0;
            episodesK = (24 == (libavfilteru.length + (episodesK ? libavfilteru.length : 24)));
            loadingC -= parseFloat(`${parseInt(`${loadingC}`) ^ 1}`);
            cross5 -= parseInt(`${loadingC}`) << (Math.min(4, Math.abs(2)));
         }
         episodesK = !moonl;
         let securityy = 5.0;
         moonl = 46 < filledu;
         securityy *= parseInt(`${securityy}`);
         moonl = 9 < filledu;
         if ((2.21 / (Math.max(10, screeno))) == 3.88 && !episodesK) {
            episodesK = 30 > filledu;
         }
         tnewinterstitiali >>= Math.min(Math.abs(hiadA.length & 2), 2);
         if (libreanimatedW) {
            break;
         }
      } while ((submit5.includes(tnewinterstitiali)) && libreanimatedW);
      if (backgroundC) {
         let modulen = String.fromCharCode(115, 95, 51, 50, 0);
         let templateprocessorQ = false;
         let topicK = 4.0;
         let loginn = String.fromCharCode(119, 95, 56, 48, 95, 105, 110, 115, 116, 114, 0);
         topicK *= loginn.length;
         templateprocessorQ = (modulen.length * parseInt(`${topicK}`)) < 2;
         for (let e = 0; e < 2; e++) {
            let librrc5 = String.fromCharCode(115, 113, 108, 105, 116, 101, 95, 50, 95, 57, 54, 0);
            let resultw = 1.0;
            let lightY = true;
            let anytimeP = String.fromCharCode(109, 95, 57, 48, 95, 97, 118, 102, 111, 114, 109, 97, 116, 109, 97, 112, 112, 101, 114, 116, 101, 115, 116, 115, 0);
            let abidetect0 = String.fromCharCode(106, 95, 52, 52, 95, 104, 101, 120, 105, 110, 116, 0);
            templateprocessorQ = modulen.includes(`${resultw}`);
            librrc5 = "1";
            resultw /= Math.max(3, librrc5.length);
            lightY = librrc5.length > 40 && 40 > abidetect0.length;
            anytimeP += `${anytimeP.length | abidetect0.length}`;
         }
         modulen = `${(parseInt(`${topicK}`) << (Math.min(4, Math.abs((templateprocessorQ ? 2 : 3)))))}`;
         let fulla: Array<any> = [308, 109];
         modulen += `${1 << (Math.min(1, loginn.length))}`;
         fulla.push(fulla.length / (Math.max(fulla.length, 8)));
         loginn = `${loginn.length}`;
         for (let d = 0; d < 3; d++) {
            templateprocessorQ = modulen == String.fromCharCode(55, 0);
         }
         templateprocessorQ = !templateprocessorQ && 56.39 >= topicK;
         for (let r = 0; r < 3; r++) {
            let latn2 = 0.0;
            let package_kD: Array<any> = [667, 14, 735];
            let chinasameb: Array<any> = [196, 735, 288];
            loginn = `${2 & package_kD.length}`;
            latn2 -= parseInt(`${latn2}`);
            package_kD.push(parseInt(`${latn2}`) - chinasameb.length);
            chinasameb = [1];
         }
         if (!modulen.includes(`${templateprocessorQ}`)) {
            modulen = "2";
         }
         let trophyB = 8887681.0 <= topicK;
         do {
            topicK *= 2;
            if (trophyB) {
               break;
            }
         } while (trophyB && (1 == (modulen.length + parseInt(`${topicK}`)) && 3.86 == (topicK + modulen.length)));
         for (let m = 0; m < 1; m++) {
            templateprocessorQ = topicK >= 23.45;
         }
         backgroundC = videojsN.endsWith(`${backgroundC}`);
      }
      renewn = new Map([[`${backgroundC}`, ((backgroundC ? 1 : 3) ^ videojsN.length)]]);
      while (submit5.length < 1) {
         let auto_sr = String.fromCharCode(97, 105, 102, 102, 95, 119, 95, 57, 54, 0);
         let diceA = false;
         let umeng_ = 5.0;
         let moviesD = 1.0;
         let animationo = 2;
         let libhermesc = true;
         let dataj = String.fromCharCode(110, 117, 109, 98, 101, 114, 95, 52, 95, 53, 49, 0);
         auto_sr = `${dataj.length | 1}`;
         animationo -= (animationo - (libhermesc ? 3 : 5));
         libhermesc = animationo <= 31;
         dataj += "3";
         let rootX = 5;
         let selection4 = String.fromCharCode(114, 95, 57, 55, 95, 99, 111, 109, 109, 105, 116, 116, 101, 100, 0);
         moviesD /= Math.max(2, 3);
         rootX -= rootX;
         selection4 += `${selection4.length % 2}`;
         diceA = moviesD <= 3.71;
         while (diceA) {
            diceA = umeng_ >= 35.19;
            break;
         }
         for (let b = 0; b < 3; b++) {
            diceA = (parseInt(`${moviesD}`) / (Math.max(auto_sr.length, 1))) >= 36;
         }
         privacyr += (parseFloat(`${String.fromCharCode(107, 0) == videojsN ? parseInt(`${privacyr}`) : videojsN.length}`));
         break;
      }
      let mbjscommonT = 8922155.0 >= privacyr;
      do {
         let country0 = String.fromCharCode(114, 97, 100, 105, 97, 108, 95, 51, 95, 51, 55, 0);
         if (country0.length >= country0.length) {
            let componentregistry_ = String.fromCharCode(114, 101, 109, 111, 118, 101, 103, 114, 97, 105, 110, 95, 113, 95, 53, 0);
            let annera = false;
            let navigationA = 5.0;
            country0 = `${parseInt(`${navigationA}`) % 3}`;
            componentregistry_ += `${(2 + (annera ? 4 : 4))}`;
            annera = componentregistry_.length >= 5;
            navigationA += componentregistry_.length & 3;
         }
         let hoverT = 1.0;
         let baiduj = 1.0;
         hoverT *= parseFloat(`${parseInt(`${baiduj}`) & parseInt(`${hoverT}`)}`);
         privacyr += parseFloat(`${3 + country0.length}`);
         if (mbjscommonT) {
            break;
         }
      } while ((5 < thailande.length) && mbjscommonT);
      math5 -= parseFloat(`${submit5.length}`);
      if ((optionsT / 2.11) > 5.90) {
         let borderlessv = String.fromCharCode(106, 95, 57, 52, 95, 120, 105, 110, 103, 0);
         let controlsa = 3;
         let bootsplashe = 0;
         let sellO = 0;
         let floater6: Map<any, any> = new Map([[String.fromCharCode(107, 95, 52, 48, 95, 102, 117, 100, 103, 101, 0), 926], [String.fromCharCode(119, 95, 57, 52, 95, 99, 111, 110, 102, 105, 100, 101, 110, 116, 105, 97, 108, 0), 560]]);
         while ((bootsplashe / 5) > 5 || (5 / (Math.max(4, bootsplashe))) > 5) {
            controlsa &= borderlessv.length;
            break;
         }
         if ((borderlessv.length ^ 1) == 4 && (borderlessv.length ^ controlsa) == 1) {
            borderlessv += "3";
         }
         let home5 = sellO <= 7622940;
         do {
            sellO &= sellO >> (Math.min(Math.abs(floater6.size), 2));
            if (home5) {
               break;
            }
         } while (home5 && ((sellO | floater6.size) <= 2));
         sellO >>= Math.min(3, borderlessv.length);
         let episodeW = String.fromCharCode(114, 95, 52, 52, 95, 114, 101, 102, 112, 97, 115, 115, 0);
         let grayW = String.fromCharCode(106, 95, 51, 52, 95, 112, 114, 111, 100, 117, 99, 116, 105, 111, 110, 0);
         let crownM: Array<any> = [String.fromCharCode(118, 95, 52, 49, 0), String.fromCharCode(98, 95, 52, 52, 95, 104, 119, 97, 101, 115, 0), String.fromCharCode(105, 95, 52, 53, 95, 110, 101, 101, 100, 108, 101, 0)];
         let hongkongZ = false;
         let serviceH = false;
         grayW += `${(controlsa | (hongkongZ ? 2 : 5))}`;
         crownM.push((3 % (Math.max(5, (serviceH ? 4 : 2)))));
         hongkongZ = crownM.length >= 92;
         serviceH = crownM.length >= 11;
         borderlessv = "2";
         if (2 < (borderlessv.length * controlsa)) {
            controlsa <<= Math.min(grayW.length, 4);
         }
         floater6 = new Map([[`${bootsplashe}`, 2]]);
         for (let m = 0; m < 3; m++) {
            grayW = `${sellO}`;
         }
         episodeW = `${2 ^ borderlessv.length}`;
         for (let g = 0; g < 3; g++) {
            controlsa %= Math.max(4, 1);
         }
         for (let l = 0; l < 3; l++) {
            episodeW += "1";
         }
         for (let a = 0; a < 3; a++) {
            controlsa ^= 3;
         }
         while (borderlessv.length <= 2) {
            let penaltyp = false;
            let libfbjnik: Map<any, any> = new Map([[String.fromCharCode(116, 120, 104, 97, 115, 104, 95, 54, 95, 50, 54, 0), String.fromCharCode(119, 95, 54, 48, 95, 99, 111, 109, 112, 105, 108, 101, 114, 0)], [String.fromCharCode(105, 95, 51, 55, 95, 99, 116, 114, 108, 0), String.fromCharCode(100, 95, 54, 54, 95, 105, 110, 118, 116, 114, 97, 110, 115, 0)]]);
            let chinasamen = 5.0;
            episodeW = `${controlsa}`;
            penaltyp = libfbjnik.size <= 4;
            libfbjnik.set(`${penaltyp}`, libfbjnik.size / (Math.max(1, 2)));
            chinasamen /= Math.max(4, parseFloat(`${3}`));
            break;
         }
         submit5.push(2);
      }
      for (let r = 0; r < 2; r++) {
         videojsN = `${((backgroundC ? 3 : 5) | parseInt(`${math5}`))}`;
      }
      for (let o = 0; o < 2; o++) {
         let downloadD = 1.0;
         let nextF = String.fromCharCode(117, 95, 49, 54, 95, 110, 97, 116, 105, 111, 110, 97, 108, 105, 116, 121, 0);
         let qaagr = true;
         qaagr = !qaagr;
         while (nextF.length < 5 && qaagr) {
            qaagr = nextF.length == 49;
            break;
         }
         let soundf: Map<any, any> = new Map([[String.fromCharCode(107, 95, 54, 48, 95, 110, 111, 97, 115, 109, 0), true], [String.fromCharCode(102, 95, 53, 55, 95, 109, 97, 112, 115, 105, 122, 101, 0), false]]);
         let libreactnativeblob8 = 5.0;
         let expandD = String.fromCharCode(116, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 95, 49, 95, 49, 54, 0);
         soundf.set(`${libreactnativeblob8}`, soundf.size ^ parseInt(`${libreactnativeblob8}`));
         expandD += `${expandD.length % (Math.max(1, 9))}`;
         let statistics8: Array<any> = [454, 771];
         let directH: Array<any> = [String.fromCharCode(106, 95, 50, 52, 95, 109, 101, 110, 117, 0), String.fromCharCode(109, 95, 50, 53, 95, 115, 116, 97, 103, 101, 0), String.fromCharCode(116, 97, 110, 115, 105, 103, 95, 111, 95, 57, 49, 0)];
         nextF = `${soundf.size}`;
         statistics8.push(directH.length);
         directH.push(statistics8.length);
         for (let l = 0; l < 2; l++) {
            soundf.set(nextF, (nextF.length + (qaagr ? 5 : 1)));
         }
         let c_lock4 = String.fromCharCode(110, 117, 109, 95, 52, 95, 55, 52, 0);
         let banner1 = String.fromCharCode(114, 116, 114, 101, 101, 99, 104, 101, 99, 107, 95, 111, 95, 57, 49, 0);
         let r_centerH = String.fromCharCode(98, 114, 97, 99, 101, 95, 112, 95, 49, 55, 0);
         let package_ryB = String.fromCharCode(103, 95, 53, 48, 95, 115, 111, 99, 111, 110, 110, 101, 99, 116, 0);
         let station7: Map<any, any> = new Map([[String.fromCharCode(117, 95, 50, 48, 95, 99, 111, 100, 101, 98, 111, 111, 107, 0), String.fromCharCode(109, 112, 108, 97, 110, 101, 95, 109, 95, 56, 50, 0)], [String.fromCharCode(108, 105, 109, 105, 116, 95, 118, 95, 54, 50, 0), String.fromCharCode(100, 111, 108, 98, 121, 95, 104, 95, 54, 55, 0)], [String.fromCharCode(119, 95, 56, 49, 95, 114, 101, 109, 98, 0), String.fromCharCode(115, 117, 112, 112, 111, 114, 116, 101, 100, 95, 49, 95, 53, 52, 0)]]);
         let libreactnativejnit: Map<any, any> = new Map([[String.fromCharCode(108, 95, 56, 55, 95, 100, 105, 99, 116, 0), 451], [String.fromCharCode(99, 100, 97, 116, 97, 95, 100, 95, 49, 56, 0), 699]]);
         submit5.push(parseInt(`${math5}`));
         downloadD /= Math.max(parseFloat(`${parseInt(`${downloadD}`)}`), 1);
      }
      math5 += parseFloat(`${renewn.size}`);
      while (4.63 < (2.21 - optionsT) || (optionsT - 2.21) < 3.53) {
         privacyr -= parseFloat(`${2 / (Math.max(7, hiadA.length))}`);
         break;
      }
      let sheetm = videojsN.length <= 8250592;
      do {
         let bottomA: Array<any> = [977, 306];
         let network8: Map<any, any> = new Map([[String.fromCharCode(115, 121, 115, 116, 101, 109, 100, 101, 112, 101, 110, 100, 101, 110, 116, 95, 57, 95, 49, 0), String.fromCharCode(107, 95, 55, 53, 95, 99, 114, 111, 115, 115, 102, 97, 100, 101, 0)], [String.fromCharCode(117, 110, 99, 111, 100, 101, 100, 95, 51, 95, 49, 48, 48, 0), String.fromCharCode(98, 95, 52, 52, 95, 97, 100, 100, 105, 116, 105, 111, 110, 97, 108, 0)]]);
         let styleC = String.fromCharCode(110, 97, 110, 111, 115, 95, 114, 95, 54, 57, 0);
         let taiwanx = 2.0;
         taiwanx /= Math.max(4, (styleC == String.fromCharCode(110, 0) ? bottomA.length : styleC.length));
         let specy = taiwanx <= 5531515.0;
         do {
            taiwanx += 1;
            if (specy) {
               break;
            }
         } while ((bottomA.length <= 1) && specy);
         let auto_w1 = 1;
         let mailk = 4;
         taiwanx -= 3;
         if (1 <= (3 ^ network8.size) && 3 <= (bottomA.length ^ network8.size)) {
            let forward3 = String.fromCharCode(116, 104, 101, 111, 114, 97, 95, 108, 95, 51, 48, 0);
            bottomA.push(auto_w1);
            forward3 = `${forward3.length}`;
         }
         auto_w1 >>= Math.min(2, Math.abs(mailk));
         let splashJ = String.fromCharCode(120, 95, 53, 50, 95, 104, 105, 116, 115, 0);
         let humidityo = 5.0;
         let playercommon5 = 3;
         auto_w1 /= Math.max(parseInt(`${humidityo}`), 4);
         splashJ += `${1 & splashJ.length}`;
         humidityo -= parseFloat(`${1}`);
         playercommon5 *= playercommon5;
         bottomA.push(auto_w1 % (Math.max(8, mailk)));
         if ((1 >> (Math.min(1, styleC.length))) > 3 && (2.85 - taiwanx) > 4.45) {
            taiwanx -= 3;
         }
         let const_yrz = String.fromCharCode(121, 95, 52, 55, 95, 99, 97, 116, 97, 112, 117, 108, 116, 0);
         let dropdowno = 4.0;
         auto_w1 += auto_w1;
         const_yrz += "2";
         dropdowno -= 3 << (Math.min(5, const_yrz.length));
         mailk -= styleC.length % (Math.max(2, 4));
         let phoneu: Map<any, any> = new Map([[String.fromCharCode(122, 95, 54, 56, 95, 115, 97, 116, 0), 483], [String.fromCharCode(103, 95, 55, 55, 95, 99, 114, 121, 115, 116, 97, 108, 104, 100, 0), 675], [String.fromCharCode(116, 101, 108, 95, 105, 95, 57, 57, 0), 133]]);
         taiwanx += mailk;
         phoneu = new Map([[`${phoneu.size}`, phoneu.size]]);
         videojsN = `${list5.size}`;
         if (sheetm) {
            break;
         }
      } while ((!proxyr && 4 < videojsN.length) && sheetm);
      if (2.8 >= (privacyr - 4.65) && 4 >= (tnewinterstitiali - parseInt(`${privacyr}`))) {
         tnewinterstitiali *= (String.fromCharCode(50, 0) == hiadA ? parseInt(`${privacyr}`) : hiadA.length);
      }
      for (let u = 0; u < 3; u++) {
         let memberu = 3.0;
         let logoutX = String.fromCharCode(101, 109, 105, 116, 95, 118, 95, 55, 51, 0);
         let indicatorM = 1.0;
         let traminid: Array<any> = [216, 17, 202];
         let storei = String.fromCharCode(104, 95, 51, 55, 95, 111, 112, 116, 105, 109, 105, 122, 101, 0);
         let yinit_17R: Map<any, any> = new Map([[String.fromCharCode(110, 95, 53, 51, 95, 116, 111, 107, 101, 110, 110, 102, 116, 116, 120, 0), 104], [String.fromCharCode(121, 95, 52, 55, 95, 97, 110, 110, 111, 116, 97, 116, 105, 111, 110, 0), 661], [String.fromCharCode(97, 117, 116, 111, 100, 101, 108, 101, 116, 101, 95, 51, 95, 57, 57, 0), 219]]);
         let crowno = 1;
         logoutX = `${parseInt(`${indicatorM}`)}`;
         yinit_17R.set(`${crowno}`, crowno | 3);
         let chinaR = String.fromCharCode(109, 95, 52, 57, 95, 100, 101, 99, 111, 109, 112, 97, 110, 100, 0);
         let currentr = 1;
         memberu += parseFloat(`${logoutX.length}`);
         chinaR += `${currentr / 3}`;
         currentr ^= 2;
         let applicationk = false;
         let sortg = String.fromCharCode(107, 95, 54, 48, 95, 100, 117, 114, 98, 0);
         logoutX = `${((applicationk ? 1 : 4))}`;
         applicationk = 88 > sortg.length && sortg.length > 88;
         let layoutn = String.fromCharCode(116, 105, 108, 101, 120, 95, 122, 95, 55, 48, 0);
         logoutX = `${(layoutn == String.fromCharCode(67, 0) ? layoutn.length : parseInt(`${memberu}`))}`;
         storei += `${logoutX.length}`;
         let animationE = false;
         let inactiveY = false;
         indicatorM *= parseFloat(`${storei.length}`);
         while (inactiveY && !animationE) {
            let libreactr = String.fromCharCode(112, 111, 105, 110, 116, 95, 55, 95, 53, 56, 0);
            let diceE = 5.0;
            let qaagO: Array<any> = [788, 949];
            let commonp = 2.0;
            inactiveY = qaagO.length == 16 && inactiveY;
            libreactr = `${libreactr.length % 3}`;
            diceE *= parseFloat(`${libreactr.length}`);
            qaagO.push(2);
            commonp -= parseFloat(`${2 ^ libreactr.length}`);
            break;
         }
         if (1.17 <= (memberu * 1)) {
            let logov = false;
            let reward_ = String.fromCharCode(119, 95, 51, 48, 95, 102, 105, 110, 100, 97, 115, 115, 111, 99, 0);
            let langkeyD = 3.0;
            let pressureG: Map<any, any> = new Map([[String.fromCharCode(118, 95, 53, 50, 95, 109, 111, 100, 117, 108, 101, 0), 140], [String.fromCharCode(117, 110, 114, 101, 97, 100, 95, 119, 95, 52, 57, 0), 612], [String.fromCharCode(110, 117, 109, 101, 114, 111, 95, 106, 95, 55, 49, 0), 12]]);
            indicatorM -= (parseFloat(`${String.fromCharCode(65, 0) == storei ? storei.length : (animationE ? 3 : 4)}`));
            logov = pressureG.size <= 56;
            reward_ += `${(reward_ == String.fromCharCode(82, 0) ? pressureG.size : reward_.length)}`;
            langkeyD -= parseFloat(`${3}`);
         }
         memberu -= parseFloat(`${storei.length}`);
         memberu *= parseFloat(`${parseInt(`${indicatorM}`) * 3}`);
         while (logoutX.length > 1) {
            logoutX += `${parseInt(`${indicatorM}`) & 2}`;
            break;
         }
         let n_lock1 = String.fromCharCode(118, 95, 56, 53, 95, 103, 101, 110, 101, 114, 97, 103, 101, 0);
         memberu *= parseFloat(`${parseInt(`${indicatorM}`) | 1}`);
         n_lock1 = `${n_lock1.length - n_lock1.length}`;
         if (3 <= logoutX.length) {
            let pathn = String.fromCharCode(100, 95, 51, 0);
            memberu -= (parseFloat(`${(animationE ? 5 : 4) % (Math.max(2, parseInt(`${indicatorM}`)))}`));
            pathn += `${pathn.length}`;
         }
         memberu += parseFloat(`${1}`);
         hiadA = `${submit5.length | logoutX.length}`;
      }

      if (videoRef.current) {

         while (3 < submit5.length) {
            backgroundC = renewn.get(`${math5}`) == null;
            break;
         }
         videojsN = "1";
         hiadA += `${((backgroundC ? 1 : 4) << (Math.min(commentD.length, 5)))}`;
         commentD = [(thailande == String.fromCharCode(108, 0) ? submit5.length : thailande.length)];
         let logout4 = backgroundC ? !backgroundC : backgroundC;
         do {
            backgroundC = submit5.includes(commentD[0]);
            if (logout4) {
               break;
            }
         } while ((!backgroundC) && logout4);
         thailande += "3";
         let stationu = proxyr ? !proxyr : proxyr;
         do {
            proxyr = optionsT > 10.33;
            if (stationu) {
               break;
            }
         } while (stationu && (!proxyr));
         privacyr -= parseFloat(`${3 % (Math.max(9, hiadA.length))}`);
         for (let e = 0; e < 3; e++) {
            hiadA = "3";
         }
         let f_titlex = tnewinterstitiali >= 6513004;
         do {
            tnewinterstitiali %= Math.max(4, renewn.size | 1);
            if (f_titlex) {
               break;
            }
         } while (f_titlex && (renewn.get(`${tnewinterstitiali}`) != null));
         math5 += (parseFloat(`${(backgroundC ? 4 : 2) * parseInt(`${optionsT}`)}`));
         while (5 > (5 * list5.size) || 1 > (list5.size * 5)) {
            let update_063: Array<any> = [132, 355, 272];
            let currentt = String.fromCharCode(122, 95, 57, 56, 95, 100, 105, 109, 101, 110, 115, 105, 111, 110, 0);
            let stationP = String.fromCharCode(112, 95, 49, 95, 115, 105, 109, 117, 108, 99, 97, 115, 116, 0);
            let helperM = 3;
            let suggestiono = 7248548 <= currentt.length;
            do {
               let dycreatorU = String.fromCharCode(110, 95, 56, 53, 95, 112, 97, 108, 98, 97, 114, 115, 0);
               currentt += "3";
               dycreatorU = "3";
               if (suggestiono) {
                  break;
               }
            } while ((2 == (2 % (Math.max(7, currentt.length)))) && suggestiono);
            currentt += `${currentt.length}`;
            let eactb = String.fromCharCode(99, 95, 56, 57, 95, 119, 104, 105, 116, 101, 98, 108, 97, 99, 107, 108, 105, 115, 116, 115, 0);
            let popupx: Map<any, any> = new Map([[String.fromCharCode(101, 95, 56, 54, 95, 101, 115, 116, 105, 109, 97, 116, 105, 110, 103, 0), String.fromCharCode(102, 114, 97, 99, 116, 105, 111, 110, 95, 110, 95, 52, 0)], [String.fromCharCode(101, 95, 57, 52, 0), String.fromCharCode(113, 95, 51, 52, 95, 111, 110, 108, 105, 110, 101, 115, 0)], [String.fromCharCode(115, 95, 56, 51, 95, 104, 113, 97, 100, 115, 112, 0), String.fromCharCode(113, 95, 56, 50, 95, 109, 97, 116, 114, 105, 120, 101, 110, 99, 0)]]);
            let libfbjni9 = 0;
            helperM ^= 1 * update_063.length;
            eactb += `${popupx.size >> (Math.min(Math.abs(1), 1))}`;
            popupx = new Map([[`${popupx.size}`, popupx.size]]);
            libfbjni9 &= 3;
            stationP = `${helperM / (Math.max(7, update_063.length))}`;
            let libyoga8 = stationP == String.fromCharCode(121, 99, 48, 117, 111, 109, 0);
            do {
               stationP = `${(currentt == String.fromCharCode(119, 0) ? helperM : currentt.length)}`;
               if (libyoga8) {
                  break;
               }
            } while (libyoga8 && (helperM == 2));
            let aboutM: Array<any> = [935, 262];
            while (5 >= (currentt.length + update_063.length)) {
               let m_playern = 4.0;
               currentt += `${helperM}`;
               m_playern -= parseInt(`${m_playern}`) >> (Math.min(1, Math.abs(2)));
               break;
            }
            aboutM.push(helperM);
            stationP += `${aboutM.length}`;
            for (let i = 0; i < 3; i++) {
               update_063.push((stationP == String.fromCharCode(76, 0) ? stationP.length : currentt.length));
            }
            let libreanimatedr = stationP == String.fromCharCode(99, 97, 50, 49, 101, 51, 48, 122, 0);
            do {
               let starH = 0.0;
               stationP = `${aboutM.length}`;
               starH -= parseInt(`${starH}`);
               if (libreanimatedr) {
                  break;
               }
            } while (((update_063.length % (Math.max(stationP.length, 5))) < 4) && libreanimatedr);
            if ((4 - stationP.length) > 3 && (stationP.length - aboutM.length) > 4) {
               stationP = `${update_063.length}`;
            }
            privacyr -= parseFloat(`${thailande.length}`);
            break;
         }
         let ajaxw = 9106917 <= list5.size;
         do {
            let streamingN = String.fromCharCode(100, 111, 116, 115, 95, 53, 95, 50, 55, 0);
            let overlayz = String.fromCharCode(120, 112, 111, 114, 116, 101, 100, 95, 101, 95, 52, 50, 0);
            let unreadX = 2.0;
            let downloadedH = 5.0;
            let path0 = 2.0;
            if (!streamingN.endsWith(`${downloadedH}`)) {
               streamingN = `${overlayz.length << (Math.min(4, streamingN.length))}`;
            }
            downloadedH += parseFloat(`${parseInt(`${unreadX}`)}`);
            path0 += streamingN.length;
            let rulesC = unreadX >= 7054436.0;
            do {
               unreadX -= parseFloat(`${overlayz.length - 2}`);
               if (rulesC) {
                  break;
               }
            } while (rulesC && (2 == (parseInt(`${unreadX}`) + streamingN.length) || (unreadX + 5.96) == 1.89));
            downloadedH -= parseFloat(`${parseInt(`${downloadedH}`) ^ 3}`);
            path0 *= parseInt(`${downloadedH}`) | 3;
            path0 += overlayz.length;
            let greenl = 5326104 <= streamingN.length;
            do {
               streamingN += `${parseInt(`${unreadX}`)}`;
               if (greenl) {
                  break;
               }
            } while (greenl && (1.75 == (parseFloat(`${streamingN.length}`) * downloadedH) || 1.75 == (downloadedH * parseFloat(`${streamingN.length}`))));
            while ((2 | streamingN.length) <= 5) {
               let bing3 = String.fromCharCode(120, 95, 54, 55, 95, 103, 101, 116, 108, 97, 100, 100, 114, 115, 0);
               downloadedH *= parseFloat(`${parseInt(`${unreadX}`)}`);
               bing3 += `${bing3.length}`;
               break;
            }
            let carouselh = true;
            let type_otU = true;
            let libhermesD = 4.0;
            let modal1 = false;
            downloadedH *= (parseFloat(`${parseInt(`${libhermesD}`) >> (Math.min(4, Math.abs((modal1 ? 4 : 2))))}`));
            type_otU = !type_otU || !type_otU;
            libhermesD -= parseFloat(`${1}`);
            while (streamingN.endsWith(`${overlayz.length}`)) {
               overlayz = `${parseInt(`${unreadX}`)}`;
               break;
            }
            if ((1.58 * unreadX) == 5.57 || 1 == (parseInt(`${unreadX}`) * 1)) {
               let sorte = 2.0;
               unreadX /= Math.max(3, (parseFloat(`${String.fromCharCode(52, 0) == streamingN ? (carouselh ? 3 : 2) : streamingN.length}`)));
               sorte += parseInt(`${sorte}`) % (Math.max(3, parseInt(`${sorte}`)));
            }
            let condensedC = String.fromCharCode(115, 117, 98, 99, 111, 110, 116, 101, 110, 116, 115, 95, 57, 95, 51, 55, 0);
            if (2 == streamingN.length || !carouselh) {
               streamingN = `${parseInt(`${downloadedH}`) / 3}`;
            }
            list5 = new Map([[`${submit5.length}`, submit5.length]]);
            if (ajaxw) {
               break;
            }
         } while (((videojsN.length | list5.size) <= 1) && ajaxw);
         while (!proxyr) {
            let huaweid = String.fromCharCode(99, 111, 100, 101, 115, 95, 117, 95, 56, 49, 0);
            let wnewinterstitialE = String.fromCharCode(121, 95, 51, 57, 95, 110, 117, 109, 115, 0);
            let flipperG = String.fromCharCode(109, 118, 99, 111, 110, 116, 101, 120, 116, 115, 95, 102, 95, 55, 56, 0);
            let klevinW = 5;
            klevinW &= wnewinterstitialE.length;
            flipperG = `${huaweid.length}`;
            for (let o = 0; o < 1; o++) {
               let mailt: Array<any> = [797, 166];
               let starU: Array<any> = [652, 322, 596];
               let heart3 = String.fromCharCode(104, 97, 114, 112, 101, 110, 95, 97, 95, 52, 53, 0);
               let minimizex: Array<any> = [398, 102, 836];
               klevinW <<= Math.min(4, Math.abs(3 & klevinW));
               mailt = [3];
               starU = [1 + heart3.length];
               heart3 += `${starU.length}`;
               minimizex = [heart3.length];
            }
            wnewinterstitialE = `${1 ^ flipperG.length}`;
            flipperG = `${wnewinterstitialE.length ^ flipperG.length}`;
            if (wnewinterstitialE.startsWith(`${huaweid.length}`)) {
               huaweid = `${wnewinterstitialE.length}`;
            }
            while (3 <= (klevinW % (Math.max(2, 3))) || (huaweid.length % (Math.max(10, klevinW))) <= 2) {
               huaweid = `${flipperG.length}`;
               break;
            }
            let circle8 = String.fromCharCode(121, 95, 55, 54, 95, 99, 111, 110, 118, 111, 108, 118, 101, 0);
            let sentryj = String.fromCharCode(116, 95, 55, 55, 95, 100, 105, 115, 109, 105, 115, 115, 0);
            klevinW <<= Math.min(4, Math.abs(3));
            sentryj += `${(wnewinterstitialE == String.fromCharCode(89, 0) ? wnewinterstitialE.length : circle8.length)}`;
            huaweid = `${klevinW}`;
            for (let y = 0; y < 1; y++) {
               circle8 = `${(String.fromCharCode(100, 0) == circle8 ? circle8.length : flipperG.length)}`;
            }
            proxyr = renewn.size < 39;
            break;
         }
         hiadA += `${((proxyr ? 5 : 2) | list5.size)}`;
         videoRef.current.seek(currentDuration);
      }
   };

   const handleLoad = (meta: any) => {
      setDuration(meta.duration);
   };

   const redirectVod = () => {
      let libavutilE: Array<any> = [181, 486];
      let currentz = 0;
      let launchery = 5.0;
      let dataO: Map<any, any> = new Map([[String.fromCharCode(120, 95, 53, 53, 95, 116, 117, 114, 110, 111, 102, 102, 0), String.fromCharCode(105, 100, 101, 110, 116, 105, 116, 121, 95, 52, 95, 55, 50, 0)], [String.fromCharCode(112, 111, 115, 115, 105, 98, 108, 101, 95, 99, 95, 56, 49, 0), String.fromCharCode(113, 95, 57, 49, 95, 103, 101, 116, 102, 114, 97, 109, 101, 0)], [String.fromCharCode(97, 97, 99, 100, 101, 99, 116, 97, 98, 95, 111, 95, 52, 53, 0), String.fromCharCode(101, 120, 114, 100, 115, 112, 95, 51, 95, 53, 0)]]);
      let shrinke = 3;
      let xvodU = 2;
      let anytimeX: Array<any> = [715, 260];
      let refresha = 4.0;
      let faviconi = String.fromCharCode(101, 100, 105, 116, 95, 104, 95, 52, 56, 0);
      let modeV = String.fromCharCode(106, 95, 57, 95, 115, 108, 105, 99, 101, 116, 121, 112, 101, 0);
      let utilss = false;
      dataO = new Map([[`${currentz}`, parseInt(`${launchery}`) & 1]]);
      let mutedT = refresha <= 8451972.0;
      do {
         refresha /= Math.max(1, shrinke);
         if (mutedT) {
            break;
         }
      } while ((3.74 < (refresha * shrinke)) && mutedT);

      if (isBodan) {

         if (libavutilE.includes(refresha)) {
            refresha *= parseInt(`${launchery}`) | xvodU;
         }
         xvodU %= Math.max(1, parseInt(`${launchery}`));
         dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

         xvodU += shrinke ^ xvodU;
         libavutilE.push(dataO.size);
         navigation.navigate('PlaylistDetail', {
            topic_id: currentVod.mini_video_topic.topic_id,
         });

         let libflipperX = 9463875 >= shrinke;
         do {
            let downloaded6 = false;
            let viewerq = true;
            let controlb = true;
            let mbsplashs = controlb ? !controlb : controlb;
            do {
               controlb = downloaded6;
               if (mbsplashs) {
                  break;
               }
            } while ((!controlb) && mbsplashs);
            viewerq = downloaded6;
            while (controlb) {
               viewerq = (viewerq ? !downloaded6 : viewerq);
               break;
            }
            if (!viewerq) {
               let injuryZ = 4;
               let calendark = false;
               viewerq = (!calendark ? controlb : !calendark);
               injuryZ &= injuryZ;
            }
            while (controlb) {
               controlb = (downloaded6 ? !viewerq : !downloaded6);
               break;
            }
            viewerq = !viewerq && controlb;
            if (!controlb) {
               let libreactnativeblobE = String.fromCharCode(100, 95, 50, 57, 95, 99, 111, 101, 102, 102, 105, 99, 105, 101, 110, 116, 0);
               let neonR = String.fromCharCode(101, 97, 103, 101, 114, 95, 118, 95, 55, 52, 0);
               let unreadU = String.fromCharCode(102, 95, 53, 50, 95, 112, 111, 108, 105, 99, 121, 0);
               controlb = !libreactnativeblobE.includes(`${downloaded6}`);
               libreactnativeblobE = `${(neonR == String.fromCharCode(110, 0) ? neonR.length : unreadU.length)}`;
               unreadU += "2";
            }
            controlb = viewerq || !controlb;
            downloaded6 = (!viewerq ? !downloaded6 : !viewerq);
            shrinke |= ((downloaded6 ? 4 : 3) | 2);
            if (libflipperX) {
               break;
            }
         } while (libflipperX && (launchery == shrinke));
         for (let o = 0; o < 2; o++) {
            launchery *= parseFloat(`${anytimeX.length}`);
         }



         xvodU ^= shrinke;
         let abidetectm = 9362843 >= libavutilE.length;
         do {
            let libjsijniprofilerN: Array<any> = [291, 980, 443];
            let darkW = String.fromCharCode(113, 95, 53, 48, 95, 114, 101, 97, 108, 109, 0);
            let moduleb = String.fromCharCode(101, 114, 97, 115, 101, 100, 95, 117, 95, 54, 50, 0);
            let dragq = 3.0;
            let castO = String.fromCharCode(114, 101, 97, 100, 95, 109, 95, 55, 57, 0);
            let profilec = String.fromCharCode(102, 95, 52, 49, 95, 114, 111, 117, 110, 100, 101, 100, 110, 101, 115, 115, 0);
            let greenP = String.fromCharCode(114, 101, 118, 105, 111, 117, 115, 95, 117, 95, 56, 52, 0);
            darkW += `${(String.fromCharCode(115, 0) == castO ? castO.length : libjsijniprofilerN.length)}`;
            greenP = `${greenP.length >> (Math.min(3, profilec.length))}`;
            darkW = "2";
            let y_playerw = 6457198 >= moduleb.length;
            do {
               moduleb = `${moduleb.length << (Math.min(Math.abs(3), 3))}`;
               if (y_playerw) {
                  break;
               }
            } while (y_playerw && ((2 | moduleb.length) >= 4 && 1 >= (2 - moduleb.length)));
            let progressw = 3.0;
            let settingss = String.fromCharCode(115, 121, 56, 106, 102, 121, 50, 106, 103, 99, 0) == greenP;
            do {
               greenP = `${profilec.length}`;
               if (settingss) {
                  break;
               }
            } while ((profilec.length == 2) && settingss);
            let stationH = 8586988 >= libjsijniprofilerN.length;
            do {
               libjsijniprofilerN = [3 % (Math.max(5, profilec.length))];
               if (stationH) {
                  break;
               }
            } while ((progressw <= 4.95) && stationH);
            libjsijniprofilerN.push(castO.length);
            for (let r = 0; r < 1; r++) {
               let orientationw = 1;
               let analyticsO: Array<any> = [947, 194];
               let specH = 5.0;
               let show7 = false;
               let libcrashsdkt = String.fromCharCode(105, 95, 49, 95, 100, 117, 109, 109, 121, 0);
               libjsijniprofilerN = [3 & analyticsO.length];
               orientationw /= Math.max(4, orientationw);
               analyticsO = [parseInt(`${specH}`)];
               specH -= (String.fromCharCode(117, 0) == libcrashsdkt ? libcrashsdkt.length : parseInt(`${specH}`));
               show7 = orientationw >= 46;
            }
            libjsijniprofilerN.push(1 - moduleb.length);
            moduleb += `${castO.length % (Math.max(darkW.length, 6))}`;
            let nterstitial8 = String.fromCharCode(119, 95, 49, 48, 48, 95, 121, 111, 117, 114, 0);
            darkW += `${(String.fromCharCode(71, 0) == castO ? parseInt(`${dragq}`) : castO.length)}`;
            nterstitial8 = `${(String.fromCharCode(116, 0) == nterstitial8 ? nterstitial8.length : nterstitial8.length)}`;
            let videoW = true;
            let condensedR: Map<any, any> = new Map([[String.fromCharCode(106, 95, 53, 57, 95, 116, 111, 111, 108, 98, 111, 120, 0), String.fromCharCode(99, 97, 108, 105, 98, 114, 97, 116, 101, 100, 95, 99, 95, 55, 57, 0)], [String.fromCharCode(112, 95, 51, 49, 95, 99, 111, 109, 112, 108, 101, 120, 105, 116, 121, 0), String.fromCharCode(100, 101, 99, 108, 105, 110, 101, 100, 95, 55, 95, 49, 0)], [String.fromCharCode(115, 95, 49, 51, 95, 109, 111, 118, 116, 101, 120, 116, 115, 117, 98, 0), String.fromCharCode(107, 95, 50, 95, 97, 116, 116, 114, 98, 117, 116, 101, 0)]]);
            progressw -= darkW.length / (Math.max(1, 7));
            videoW = condensedR.size < 97;
            condensedR.set(`${videoW}`, ((videoW ? 1 : 3) << (Math.min(Math.abs(condensedR.size), 1))));
            moduleb += "1";
            libavutilE.push(castO.length % (Math.max(4, moduleb.length)));
            if (abidetectm) {
               break;
            }
         } while (abidetectm && (!Array.from(dataO.keys()).includes(`${libavutilE.length}`)));
         yys_event_common.watchAnytimePlaylistClicksAnalytics();

      } else {

         let overlayd = String.fromCharCode(102, 114, 97, 103, 95, 116, 95, 52, 49, 0);
         let sina1: Array<any> = [363, 412];
         let giftx: Array<any> = [400, 458, 409];
         if (!sina1.includes(giftx.length)) {
            let bootsplashc: Array<any> = [String.fromCharCode(120, 95, 55, 54, 95, 114, 105, 100, 0), String.fromCharCode(105, 95, 53, 49, 95, 115, 116, 114, 105, 99, 109, 112, 0), String.fromCharCode(105, 95, 52, 52, 95, 100, 101, 99, 105, 112, 104, 101, 114, 0)];
            let alertn = 2.0;
            let gray6: Map<any, any> = new Map([[String.fromCharCode(113, 95, 56, 48, 95, 112, 97, 115, 115, 112, 111, 114, 116, 0), 769], [String.fromCharCode(112, 111, 112, 117, 112, 115, 95, 105, 95, 50, 56, 0), 403], [String.fromCharCode(102, 105, 108, 116, 101, 114, 105, 110, 103, 95, 117, 95, 51, 53, 0), 39]]);
            let libjsijniprofilern = true;
            giftx = [2 % (Math.max(1, overlayd.length))];
            bootsplashc = [parseInt(`${alertn}`)];
            alertn *= parseFloat(`${2}`);
            gray6.set(`${bootsplashc.length}`, 1 - gray6.size);
            libjsijniprofilern = !libjsijniprofilern || bootsplashc.length <= 24;
         }
         let libhermest = 1.0;
         xvodU /= Math.max(3, 4);
         for (let v = 0; v < 1; v++) {
            let componentw = 0.0;
            let langkeyd: Map<any, any> = new Map([[String.fromCharCode(114, 111, 108, 101, 95, 54, 95, 56, 52, 0), 796], [String.fromCharCode(121, 95, 51, 56, 95, 112, 114, 101, 105, 110, 105, 116, 0), 65], [String.fromCharCode(108, 95, 56, 51, 95, 114, 97, 119, 0), 152]]);
            let disconnectedb = 5.0;
            let showH = 4;
            let ping0: Map<any, any> = new Map([[String.fromCharCode(115, 109, 97, 114, 116, 95, 113, 95, 57, 56, 0), 65], [String.fromCharCode(98, 95, 56, 48, 95, 115, 104, 101, 101, 116, 0), 897], [String.fromCharCode(105, 109, 101, 110, 115, 105, 111, 110, 95, 115, 95, 56, 53, 0), 904]]);
            while (3.52 == (disconnectedb / 2.20)) {
               disconnectedb += ping0.size - showH;
               break;
            }
            if ((disconnectedb / 2.81) >= 2.51) {
               disconnectedb += langkeyd.size;
            }
            while (!Array.from(langkeyd.values()).includes(ping0.size)) {
               langkeyd = new Map([[`${langkeyd.size}`, langkeyd.size]]);
               break;
            }
            if (2.94 == (componentw - showH)) {
               showH <<= Math.min(3, Math.abs(parseInt(`${disconnectedb}`)));
            }
            langkeyd.set(`${componentw}`, parseInt(`${componentw}`));
            ping0.set(`${disconnectedb}`, parseInt(`${disconnectedb}`));
            langkeyd = new Map([[`${ping0.size}`, 3 & showH]]);
            ping0.set(`${langkeyd.size}`, langkeyd.size | ping0.size);
            let libavformatV = ping0.size <= 9110389;
            do {
               ping0 = new Map([[`${componentw}`, parseInt(`${componentw}`)]]);
               if (libavformatV) {
                  break;
               }
            } while (libavformatV && (!Array.from(ping0.values()).includes(disconnectedb)));
            ping0.set(`${componentw}`, 1 << (Math.min(4, Math.abs(langkeyd.size))));
            let yingA = 7011225 >= showH;
            do {
               let mbbidG = false;
               let savel = 4;
               showH ^= (parseInt(`${disconnectedb}`) ^ (mbbidG ? 3 : 5));
               mbbidG = savel <= 4 || savel <= 4;
               if (yingA) {
                  break;
               }
            } while (yingA && (showH < 2));
            let a_playerv = false;
            let zhuboA = false;
            if ((ping0.size & 4) < 4) {
               let downloaderT = String.fromCharCode(99, 111, 110, 118, 101, 114, 116, 101, 100, 95, 121, 95, 51, 51, 0);
               let pressure8 = 2.0;
               let abidetecte: Map<any, any> = new Map([[String.fromCharCode(101, 95, 55, 53, 95, 101, 115, 116, 105, 109, 97, 116, 105, 110, 103, 0), 566], [String.fromCharCode(100, 101, 102, 101, 114, 95, 98, 95, 53, 49, 0), 25], [String.fromCharCode(112, 114, 101, 115, 101, 110, 116, 101, 100, 95, 121, 95, 53, 50, 0), 461]]);
               zhuboA = showH >= 49;
               downloaderT += `${3 * abidetecte.size}`;
               pressure8 *= (parseFloat(`${String.fromCharCode(88, 0) == downloaderT ? downloaderT.length : abidetecte.size}`));
            }
            let bottomP = false;
            while (!Array.from(langkeyd.values()).includes(componentw)) {
               langkeyd.set(`${disconnectedb}`, 1 >> (Math.min(1, Math.abs(langkeyd.size))));
               break;
            }
            anytimeX.push(parseInt(`${refresha}`) << (Math.min(5, Math.abs(parseInt(`${componentw}`)))));
         }
         dispatch(playVod(currentVod.mini_video_vod));

         dataO = new Map([[`${shrinke}`, 2]]);
         let uimanagerE = 2.0;
         let shared0: Array<any> = [String.fromCharCode(104, 95, 53, 49, 0), String.fromCharCode(109, 95, 55, 53, 95, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114, 0), String.fromCharCode(101, 95, 50, 57, 0)];
         let bootsplashw: Map<any, any> = new Map([[String.fromCharCode(100, 97, 116, 97, 98, 97, 115, 101, 115, 95, 106, 95, 51, 49, 0), 596], [String.fromCharCode(100, 101, 102, 105, 110, 101, 100, 95, 57, 95, 54, 52, 0), 848], [String.fromCharCode(104, 111, 111, 107, 115, 95, 117, 95, 53, 50, 0), 48]]);
         if ((bootsplashw.size | 4) == 3) {
            let zhengpianc = String.fromCharCode(102, 105, 110, 97, 108, 100, 95, 108, 95, 51, 53, 0);
            let optionsN = 0.0;
            bootsplashw = new Map([[`${uimanagerE}`, parseInt(`${uimanagerE}`)]]);
            zhengpianc = `${1 & parseInt(`${optionsN}`)}`;
            optionsN *= 2 ^ zhengpianc.length;
         }
         let analyticG = 9819146 <= shared0.length;
         do {
            shared0 = [shared0.length];
            if (analyticG) {
               break;
            }
         } while (((shared0.length | bootsplashw.size) > 5 && (5 | bootsplashw.size) > 2) && analyticG);
         let heart3 = String.fromCharCode(106, 95, 50, 54, 95, 112, 105, 99, 116, 0);
         let nativemodulej = 1;
         let shirtx = String.fromCharCode(110, 95, 56, 48, 95, 102, 111, 117, 114, 115, 113, 117, 97, 114, 101, 0);
         uimanagerE *= bootsplashw.size << (Math.min(shared0.length, 2));
         heart3 = `${(shirtx == String.fromCharCode(107, 0) ? shirtx.length : nativemodulej)}`;
         nativemodulej += (String.fromCharCode(66, 0) == shirtx ? nativemodulej : shirtx.length);
         let libavcodecb = true;
         let lineT = String.fromCharCode(98, 117, 105, 108, 116, 105, 110, 95, 105, 95, 49, 52, 0);
         let recommendationx = 1.0;
         bootsplashw.set(`${uimanagerE}`, 3 & lineT.length);
         libavcodecb = !libavcodecb;
         lineT += `${parseInt(`${recommendationx}`) | 2}`;
         recommendationx *= 3 << (Math.min(Math.abs(parseInt(`${recommendationx}`)), 4));
         for (let z = 0; z < 3; z++) {
            let agreementB = String.fromCharCode(104, 105, 103, 104, 98, 105, 116, 115, 95, 111, 95, 57, 50, 0);
            let borderlessv: Map<any, any> = new Map([[String.fromCharCode(112, 111, 108, 121, 109, 101, 115, 104, 95, 111, 95, 55, 56, 0), false], [String.fromCharCode(104, 95, 53, 57, 95, 108, 111, 103, 105, 99, 0), false], [String.fromCharCode(115, 95, 51, 54, 95, 116, 119, 111, 102, 105, 115, 104, 0), false]]);
            let gradlewr = true;
            uimanagerE += borderlessv.size & 2;
            agreementB += `${agreementB.length | 3}`;
            borderlessv.set(agreementB, (2 >> (Math.min(1, Math.abs((gradlewr ? 5 : 3))))));
         }
         bootsplashw = new Map([[`${shared0.length}`, shared0.length / 3]]);
         if ((bootsplashw.size - shared0.length) == 3 || 3 == (shared0.length - bootsplashw.size)) {
            bootsplashw = new Map([[`${bootsplashw.size}`, 2]]);
         }
         let libreactnativeblobo = shared0.length <= 7993081;
         do {
            shared0 = [parseInt(`${uimanagerE}`) >> (Math.min(5, Math.abs(3)))];
            if (libreactnativeblobo) {
               break;
            }
         } while (libreactnativeblobo && (1.45 < uimanagerE));
         let clearY: Array<any> = [757, 747, 774];
         let plus2 = String.fromCharCode(117, 95, 56, 52, 95, 108, 111, 103, 103, 101, 114, 0);
         let delegate_vC: Array<any> = [410, 84];
         bootsplashw.set(plus2, shared0.length << (Math.min(Math.abs(1), 4)));
         clearY = [clearY.length >> (Math.min(4, delegate_vC.length))];
         plus2 += `${delegate_vC.length}`;
         launchery /= Math.max(parseFloat(`${1 + libavutilE.length}`), 1);
         navigation.navigate('播放IOS', {
            vod_id: currentVod.vod?.vod_id,
         });

         let minimizel = String.fromCharCode(115, 113, 117, 97, 114, 101, 100, 95, 105, 95, 56, 50, 0);
         let debugc = 1.0;
         let handlerC = true;
         let final_gzO: Array<any> = [697, 230, 12];
         let appsG: Array<any> = [396, 97, 955];
         let adultM: Map<any, any> = new Map([[String.fromCharCode(97, 95, 56, 51, 95, 102, 117, 108, 102, 105, 108, 108, 0), 34], [String.fromCharCode(119, 95, 51, 56, 95, 116, 114, 117, 110, 99, 97, 116, 101, 0), 868], [String.fromCharCode(112, 114, 111, 106, 101, 99, 116, 105, 111, 110, 115, 95, 99, 95, 57, 54, 0), 730]]);
         handlerC = final_gzO.includes(appsG[appsG.length - 1]);
         final_gzO.push(adultM.size);
         let leftT = handlerC ? !handlerC : handlerC;
         do {
            handlerC = !handlerC;
            if (leftT) {
               break;
            }
         } while (leftT && (!minimizel.startsWith(`${handlerC}`)));
         let sigmobi = handlerC ? !handlerC : handlerC;
         do {
            handlerC = minimizel.length >= 93 && 92.9 >= debugc;
            if (sigmobi) {
               break;
            }
         } while ((3 < minimizel.length && !handlerC) && sigmobi);
         let libfollyc = String.fromCharCode(119, 95, 49, 56, 95, 97, 114, 98, 105, 116, 114, 97, 114, 121, 0);
         let fadfdeebbbfdabbbabdadfaaddaae = String.fromCharCode(119, 95, 57, 54, 95, 109, 105, 120, 105, 110, 103, 0);
         debugc /= Math.max(5, 1);
         libfollyc += `${libfollyc.length - fadfdeebbbfdabbbabdadfaaddaae.length}`;
         fadfdeebbbfdabbbabdadfaaddaae += `${libfollyc.length % (Math.max(fadfdeebbbfdabbbabdadfaaddaae.length, 2))}`;
         debugc += (1 - (handlerC ? 5 : 3));
         handlerC = debugc < 71.67 || String.fromCharCode(80, 0) == minimizel;
         if (2 < (2 & minimizel.length)) {
            minimizel = `${(minimizel == String.fromCharCode(122, 0) ? (handlerC ? 5 : 2) : minimizel.length)}`;
         }
         for (let e = 0; e < 3; e++) {
            let schedulerC = String.fromCharCode(98, 95, 55, 50, 95, 115, 104, 97, 114, 101, 0);
            let termsY = 4.0;
            minimizel = `${((handlerC ? 1 : 1))}`;
            schedulerC += `${2 - parseInt(`${termsY}`)}`;
            termsY += parseFloat(`${parseInt(`${termsY}`)}`);
         }
         let successe = String.fromCharCode(119, 95, 53, 49, 95, 108, 115, 112, 102, 0);
         let renewt = String.fromCharCode(120, 95, 54, 57, 95, 99, 104, 101, 99, 107, 101, 114, 0);
         libavutilE.push(shrinke * 2);
         refresha *= shrinke / (Math.max(1, 4));



         let teamk = 3;
         let logoK = 1.0;
         let edit5 = String.fromCharCode(100, 95, 55, 49, 95, 120, 99, 101, 112, 116, 105, 111, 110, 0);
         teamk -= teamk;
         for (let u = 0; u < 1; u++) {
            edit5 = `${parseInt(`${logoK}`) - teamk}`;
         }
         let alertT: Array<any> = [90, 676, 164];
         let targetf = 5.0;
         teamk -= alertT.length;
         alertT.push(1 >> (Math.min(Math.abs(parseInt(`${targetf}`)), 4)));
         targetf += 1 + parseInt(`${targetf}`);
         let downloaderE = teamk >= 5049461;
         do {
            teamk -= edit5.length;
            if (downloaderE) {
               break;
            }
         } while (downloaderE && ((logoK / (Math.max(4.94, 10))) <= 2.92 && (4 ^ teamk) <= 3));
         for (let s = 0; s < 2; s++) {
            logoK += 3 << (Math.min(3, edit5.length));
         }
         teamk /= Math.max(edit5.length / (Math.max(5, parseInt(`${logoK}`))), 5);
         if (1.34 >= logoK) {
            let friendsE: Map<any, any> = new Map([[String.fromCharCode(103, 95, 54, 52, 95, 100, 105, 115, 99, 0), 672], [String.fromCharCode(108, 95, 54, 52, 95, 100, 101, 108, 116, 97, 113, 0), 992]]);
            let upgrade2 = false;
            logoK += teamk;
            friendsE = new Map([[`${friendsE.size}`, friendsE.size]]);
            upgrade2 = ((friendsE.size - (!upgrade2 ? 20 : friendsE.size)) <= 20);
         }
         let footballb = 9840255 >= teamk;
         do {
            let benefitG: Map<any, any> = new Map([[String.fromCharCode(105, 109, 112, 111, 114, 116, 101, 114, 115, 95, 57, 95, 51, 57, 0), 919], [String.fromCharCode(108, 95, 50, 53, 95, 111, 100, 100, 97, 118, 103, 0), 597], [String.fromCharCode(115, 116, 97, 116, 117, 115, 95, 52, 95, 49, 49, 0), 105]]);
            let darkV: Array<any> = [579, 7, 159];
            let librrcY = 5;
            teamk /= Math.max(1, 2 + darkV.length);
            benefitG = new Map([[`${benefitG.size}`, benefitG.size / (Math.max(3, librrcY))]]);
            darkV.push(3 - librrcY);
            if (footballb) {
               break;
            }
         } while (footballb && (teamk < 5));
         while (1.62 == (logoK - 2.85) || (2 >> (Math.min(3, Math.abs(teamk)))) == 4) {
            teamk /= Math.max(4, parseInt(`${logoK}`) | teamk);
            break;
         }
         libavutilE = [teamk];
         let penaltyD: Array<any> = [480, 263, 344];
         let downloadinge = 0.0;
         let unreadB: Array<any> = [449, 974, 570];
         let stations9 = 1;
         let belly: Map<any, any> = new Map([[String.fromCharCode(115, 98, 103, 112, 95, 110, 95, 53, 49, 0), 264], [String.fromCharCode(104, 95, 53, 56, 0), 202]]);
         let thumbnailS = true;
         unreadB = [unreadB.length];
         stations9 >>= Math.min(Math.abs(stations9 | 1), 4);
         belly = new Map([[`${belly.size}`, 1]]);
         thumbnailS = stations9 > 67;
         let moviesz = false;
         downloadinge /= Math.max(3, 3);
         moviesz = (moviesz ? moviesz : !moviesz);
         unreadB = [2 - unreadB.length];
         penaltyD = [3];
         if (2 > (unreadB.length * 4) || 4 > (unreadB.length / (Math.max(10, parseInt(`${downloadinge}`))))) {
            let pangle6 = 2.0;
            let helperP = 0.0;
            let nterstitialv = false;
            unreadB = [3 / (Math.max(5, penaltyD.length))];
            pangle6 /= Math.max(parseFloat(`${parseInt(`${helperP}`) ^ parseInt(`${pangle6}`)}`), 2);
            helperP *= (parseFloat(`${(nterstitialv ? 5 : 1) ^ parseInt(`${pangle6}`)}`));
            nterstitialv = !nterstitialv;
         }
         for (let c = 0; c < 2; c++) {
            downloadinge -= parseInt(`${downloadinge}`) % 1;
         }
         if ((penaltyD.length & 2) == 1 && 5 == (unreadB.length & 2)) {
            penaltyD.push(3);
         }
         for (let j = 0; j < 1; j++) {
            let forwardX = 0;
            let attributedstringr = String.fromCharCode(101, 95, 56, 49, 95, 99, 111, 110, 116, 105, 103, 117, 111, 117, 115, 0);
            let green0: Array<any> = [806, 493, 824];
            let topici = 0.0;
            let expiredH: Array<any> = [812, 573];
            unreadB.push(attributedstringr.length << (Math.min(2, penaltyD.length)));
            forwardX %= Math.max(1, parseInt(`${topici}`) - 1);
            attributedstringr += `${expiredH.length}`;
            green0.push(green0.length - expiredH.length);
            topici /= Math.max(green0.length, 2);
         }
         let inactiveX: Map<any, any> = new Map([[String.fromCharCode(114, 101, 109, 97, 112, 95, 108, 95, 55, 57, 0), String.fromCharCode(107, 95, 55, 51, 95, 111, 112, 112, 111, 114, 116, 117, 110, 105, 115, 116, 105, 99, 97, 108, 108, 121, 0)], [String.fromCharCode(103, 95, 52, 55, 95, 112, 111, 114, 116, 115, 0), String.fromCharCode(100, 95, 51, 51, 95, 106, 111, 105, 110, 101, 100, 0)]]);
         downloadinge /= Math.max(inactiveX.size * penaltyD.length, 5);
         shrinke &= parseInt(`${downloadinge}`) / 3;
         yys_event_common.watchAnytimeVideoClicksAnalytics();

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
                        source={require('@static/images/sinaHover.gif')}
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
                                                   source={require('@static/images/gdtadvAssist.jpeg')}
                                                />
                                                <FastImage
                                                   style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 12, top: 11.8 }}
                                                   source={require('@static/images/renewRender.jpg')}
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
                        )} */}
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

                  {/* {currentVod.is_collection?.toLowerCase() == "y" &&
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
