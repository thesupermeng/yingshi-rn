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
import PlayIcon from '@static/images/libreanimatedEwardedDropdown.svg';
import PauseIcon from '@static/images/sportVideojsTramini.svg';
import PlayZhengPianIcon from '@static/images/kickBase.svg';
import PlayBoDanIcon from '@static/images/animationsFastforwardSubtext.svg';

import FastImage from '../common/mayi_slider';
import { Slider } from '@rneui/themed';
import { useAppDispatch } from '@hooks/mayi_redirect';
import { useNavigation, useTheme } from '@react-navigation/native';
import { playVod, viewPlaylistDetails } from '@redux/actions/mayi_goallogo';
import HejiIcon from '@static/images/libswresampleSuggestion.svg';
import ExpandUpIcon from '@static/images/saveIconfeedbackUnselected.svg';
import { QueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import mayi_push from '../../../../Umeng/mayi_push';

interface mayi_GoogleViews {
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
}: mayi_GoogleViews) {
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
       let bingu = String.fromCharCode(108,95,56,52,95,105,110,112,108,105,99,105,116,101,108,121,0);
    let moder = String.fromCharCode(115,119,105,116,99,104,101,114,95,122,95,55,56,0);
    let defaultfootballbg6: Array<any> = [122, 920, 874];
    let bodan1 = 2.0;
    let analyticW = 1.0;
    let informationr = String.fromCharCode(113,117,101,117,101,115,95,122,95,54,53,0);
    let libreactperfloggerjniX = 5.0;
    let main_js = String.fromCharCode(111,108,111,114,95,121,95,52,53,0);
   for (let n = 0; n < 1; n++) {
      analyticW *= defaultfootballbg6.length;
   }
      bodan1 /= Math.max(1, defaultfootballbg6.length);
   while (informationr.endsWith(`${defaultfootballbg6.length}`)) {
       let stringl = String.fromCharCode(102,101,116,99,104,95,102,95,49,53,0);
       let policyH = String.fromCharCode(100,105,102,102,97,98,108,101,95,51,95,50,51,0);
       let anythinkE = 5.0;
       let settingU: Map<any, any> = new Map([[String.fromCharCode(104,95,49,48,95,114,103,98,120,0),String.fromCharCode(104,105,103,104,98,105,116,115,95,98,95,49,49,0)], [String.fromCharCode(98,117,99,107,101,116,115,95,98,95,57,56,0),String.fromCharCode(110,117,109,101,114,111,95,116,95,53,51,0)]]);
       let layoutQ = 3;
          let overlayy = 1.0;
          let langM = String.fromCharCode(97,117,116,104,111,114,105,122,101,114,95,108,95,51,51,0);
         settingU.set(policyH, layoutQ);
         overlayy *= langM.length;
         langM += `${parseInt(`${overlayy}`) ^ langM.length}`;
         stringl += `${parseInt(`${anythinkE}`) | 3}`;
          let buffera = true;
         stringl = "2";
         stringl = `${layoutQ}`;
      for (let t = 0; t < 3; t++) {
         policyH += `${policyH.length}`;
      }
         anythinkE /= Math.max(policyH.length, 3);
      let bootu = 7885403.0 >= anythinkE;
      do {
         anythinkE /= Math.max(2 >> (Math.min(1, stringl.length)), 1);
         if (bootu) {
            break;
         }
      } while (bootu && (3.79 == (anythinkE + policyH.length) || 2 == (2 ^ policyH.length)));
       let binddatasD = false;
         policyH = `${(String.fromCharCode(119,0) == policyH ? layoutQ : policyH.length)}`;
         anythinkE /= Math.max(2, (stringl == String.fromCharCode(69,0) ? stringl.length : (binddatasD ? 3 : 2)));
      if (5.34 >= (policyH.length + anythinkE) && 4 >= (policyH.length + parseInt(`${anythinkE}`))) {
          let homeiconU = 4;
         policyH += `${(policyH == String.fromCharCode(66,0) ? (binddatasD ? 5 : 5) : policyH.length)}`;
         homeiconU -= homeiconU | homeiconU;
      }
          let iconarrowleftI = String.fromCharCode(103,95,50,50,95,107,101,121,115,101,116,117,112,0);
          let bgvipxvodz: Array<any> = [881, 272, 235];
          let customq = false;
         layoutQ /= Math.max(layoutQ, 1);
         iconarrowleftI = "2";
         bgvipxvodz = [bgvipxvodz.length];
         customq = iconarrowleftI.length > bgvipxvodz.length;
      for (let c = 0; c < 1; c++) {
         settingU = new Map([[stringl, (String.fromCharCode(112,0) == stringl ? stringl.length : parseInt(`${anythinkE}`))]]);
      }
      while (!binddatasD && (3 & settingU.size) >= 3) {
         settingU = new Map([[`${settingU.size}`, settingU.size >> (Math.min(3, Math.abs(parseInt(`${anythinkE}`))))]]);
         break;
      }
          let lightO = String.fromCharCode(100,101,110,111,114,109,97,108,95,119,95,57,49,0);
          let default_z8G: Array<any> = [546, 203, 460];
          let catalog9 = String.fromCharCode(103,95,54,48,95,98,108,117,114,114,97,98,108,101,0);
         policyH = `${policyH.length}`;
         lightO = `${lightO.length ^ default_z8G.length}`;
         default_z8G = [lightO.length];
         catalog9 = `${(String.fromCharCode(76,0) == lightO ? catalog9.length : lightO.length)}`;
      defaultfootballbg6.push(parseInt(`${analyticW}`));
      break;
   }
   let whitetickd = String.fromCharCode(50,101,106,51,56,0) == informationr;
   do {
      informationr = `${informationr.length * 3}`;
      if (whitetickd) {
         break;
      }
   } while (whitetickd && (informationr != String.fromCharCode(68,0) && 2 <= bingu.length));
   for (let l = 0; l < 1; l++) {
      libreactperfloggerjniX /= Math.max(2, parseFloat(`${informationr.length}`));
   }
   if (4.69 > analyticW) {
      analyticW -= 2;
   }
   let taiwanC = defaultfootballbg6.length <= 7344528;
   do {
      defaultfootballbg6.push(moder.length ^ parseInt(`${analyticW}`));
      if (taiwanC) {
         break;
      }
   } while ((defaultfootballbg6.includes(bodan1)) && taiwanC);
   while (3 >= (moder.length >> (Math.min(Math.abs(2), 2)))) {
      defaultfootballbg6 = [(String.fromCharCode(119,0) == informationr ? parseInt(`${analyticW}`) : informationr.length)];
      break;
   }
      bodan1 /= Math.max(2, 3);
   for (let c = 0; c < 2; c++) {
      informationr += "2";
   }
       let defaultteamu = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,95,102,95,56,52,0);
       let halfi = String.fromCharCode(104,95,50,54,95,98,111,116,115,0);
         halfi += `${(halfi == String.fromCharCode(75,0) ? defaultteamu.length : halfi.length)}`;
      for (let q = 0; q < 2; q++) {
         defaultteamu += "2";
      }
         halfi += `${(halfi == String.fromCharCode(75,0) ? halfi.length : defaultteamu.length)}`;
      while (defaultteamu.length > 2 || 2 > halfi.length) {
         halfi = `${defaultteamu.length}`;
         break;
      }
      while (1 < defaultteamu.length) {
         halfi += `${(String.fromCharCode(76,0) == halfi ? halfi.length : defaultteamu.length)}`;
         break;
      }
          let predictionarrowc = 4;
         defaultteamu += `${defaultteamu.length}`;
         predictionarrowc >>= Math.min(Math.abs(1 >> (Math.min(3, Math.abs(predictionarrowc)))), 1);
      bodan1 /= Math.max(5, 2 % (Math.max(9, halfi.length)));
   for (let a = 0; a < 1; a++) {
      bingu += `${parseInt(`${analyticW}`) / 3}`;
   }
   if (3 > informationr.length) {
      bingu += `${defaultfootballbg6.length % (Math.max(3, 1))}`;
   }
      main_js = "2";
   if (5 <= (defaultfootballbg6.length ^ moder.length) || 1 <= (5 ^ defaultfootballbg6.length)) {
      moder = `${informationr.length % 3}`;
   }
   while (libreactperfloggerjniX >= parseFloat(`${main_js.length}`)) {
       let typingj: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,104,118,115,95,101,95,53,53,0),String.fromCharCode(99,111,109,112,97,114,97,98,108,101,95,55,95,51,51,0)], [String.fromCharCode(109,95,49,49,95,116,105,109,101,98,97,115,101,0),String.fromCharCode(109,112,101,103,118,108,99,95,99,95,52,55,0)], [String.fromCharCode(117,110,115,104,105,102,116,95,111,95,57,51,0),String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,119,95,49,50,0)]]);
       let videof = false;
       let promotionL = String.fromCharCode(122,95,52,56,95,115,116,97,107,105,110,103,0);
       let mbbannerV = String.fromCharCode(115,117,98,95,48,95,54,57,0);
       let libbufferQ: Map<any, any> = new Map([[String.fromCharCode(106,95,55,53,95,99,111,109,109,117,116,101,0),442], [String.fromCharCode(116,114,99,95,108,95,49,54,0),820], [String.fromCharCode(120,95,57,54,95,115,112,101,101,100,117,112,0),748]]);
         libbufferQ.set(promotionL, (String.fromCharCode(57,0) == promotionL ? (videof ? 1 : 2) : promotionL.length));
       let containert = 4.0;
       let historyU = 4.0;
          let basketballmatchdetailbgn = String.fromCharCode(118,95,53,50,95,101,120,105,115,116,101,100,0);
          let firebase2 = String.fromCharCode(115,95,53,50,95,114,101,100,115,112,97,114,107,0);
         mbbannerV = `${promotionL.length}`;
         basketballmatchdetailbgn = `${(String.fromCharCode(103,0) == basketballmatchdetailbgn ? firebase2.length : basketballmatchdetailbgn.length)}`;
         firebase2 += `${basketballmatchdetailbgn.length - 1}`;
         containert += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${historyU}`)), 5))}`);
         promotionL += `${promotionL.length}`;
         promotionL = `${(parseInt(`${historyU}`) * (videof ? 1 : 4))}`;
      let suggestion8 = videof ? !videof : videof;
      do {
          let greyarrowupR = 4;
          let homeplayer9 = 1.0;
          let statsx: Map<any, any> = new Map([[String.fromCharCode(120,95,54,49,95,109,97,116,114,105,120,102,0),101], [String.fromCharCode(119,95,57,52,95,105,100,99,116,100,115,112,0),829], [String.fromCharCode(116,95,54,50,95,109,97,103,110,105,116,117,100,101,0),441]]);
          let exampleimageb = 5;
          let sliderF = 1;
         videof = 97 >= typingj.size || 97 >= libbufferQ.size;
         greyarrowupR <<= Math.min(Math.abs(3), 4);
         homeplayer9 /= Math.max(5, parseFloat(`${greyarrowupR % (Math.max(2, exampleimageb))}`));
         statsx = new Map([[`${exampleimageb}`, exampleimageb ^ 3]]);
         sliderF <<= Math.min(2, Math.abs(sliderF | exampleimageb));
         if (suggestion8) {
            break;
         }
      } while (suggestion8 && (promotionL.length == 3));
         libbufferQ.set(mbbannerV, (String.fromCharCode(52,0) == mbbannerV ? mbbannerV.length : parseInt(`${historyU}`)));
       let topono = 4;
      let filep = videof ? !videof : videof;
      do {
          let forwardf = 5.0;
          let malaysiaR = String.fromCharCode(107,95,51,52,95,122,101,114,111,105,110,103,0);
          let icondefaultthumbnail_: Array<any> = [656, 801];
         videof = !videof && typingj.size < 52;
         forwardf /= Math.max(1, parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${forwardf}`))))}`));
         malaysiaR += `${malaysiaR.length << (Math.min(3, Math.abs(parseInt(`${forwardf}`))))}`;
         icondefaultthumbnail_ = [1 + parseInt(`${forwardf}`)];
         if (filep) {
            break;
         }
      } while ((1 <= (5 % (Math.max(10, typingj.size)))) && filep);
          let leakcheckerL = true;
          let largesoundX = true;
         containert -= parseFloat(`${promotionL.length}`);
         leakcheckerL = !largesoundX;
         largesoundX = !largesoundX && !leakcheckerL;
         promotionL += `${(String.fromCharCode(55,0) == promotionL ? mbbannerV.length : promotionL.length)}`;
      if ((topono / (Math.max(promotionL.length, 5))) == 5 && (promotionL.length / (Math.max(5, 7))) == 1) {
          let typingu = String.fromCharCode(110,95,54,52,95,116,111,111,108,98,97,114,115,0);
          let const_y97 = String.fromCharCode(112,95,55,56,95,114,111,116,97,116,105,110,103,0);
          let historym = String.fromCharCode(112,95,49,49,95,99,97,110,99,101,108,108,101,114,0);
          let iconmoreY = false;
         promotionL += `${typingj.size & mbbannerV.length}`;
         typingu = `${(2 >> (Math.min(1, Math.abs((iconmoreY ? 2 : 3)))))}`;
         const_y97 = `${((iconmoreY ? 3 : 4) & typingu.length)}`;
         historym += `${const_y97.length}`;
      }
      while (2 <= (mbbannerV.length + 5) && 5 <= (mbbannerV.length % 5)) {
         mbbannerV += `${parseInt(`${historyU}`)}`;
         break;
      }
         containert /= Math.max(1, parseFloat(`${topono}`));
      main_js += `${(String.fromCharCode(89,0) == bingu ? libbufferQ.size : bingu.length)}`;
      break;
   }
   let emojiS = moder == String.fromCharCode(110,106,110,0);
   do {
       let matchesW: Array<any> = [String.fromCharCode(104,121,115,99,97,108,101,95,113,95,56,49,0), String.fromCharCode(113,95,55,95,99,111,108,117,109,110,108,105,115,116,0)];
       let transferl = 2.0;
       let layoutV = 5.0;
       let signinupm: Map<any, any> = new Map([[String.fromCharCode(101,95,51,55,95,116,111,112,105,99,0),String.fromCharCode(122,95,50,57,95,97,117,116,111,99,108,101,97,114,0)], [String.fromCharCode(99,95,53,50,95,98,105,103,117,105,110,116,0),String.fromCharCode(122,95,56,57,95,115,112,101,99,105,97,108,0)]]);
          let debugo = String.fromCharCode(113,95,56,56,95,97,110,116,105,97,108,105,97,115,0);
         layoutV += (String.fromCharCode(51,0) == debugo ? parseInt(`${transferl}`) : debugo.length);
      moder += `${informationr.length ^ 1}`;
      matchesW = [matchesW.length + 3];
      if (emojiS) {
         break;
      }
   } while (emojiS && (moder.length <= 5));

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
       let basketballv = String.fromCharCode(103,95,50,52,95,114,101,97,108,116,105,109,101,0);
    let signinupa = String.fromCharCode(101,118,115,105,103,110,97,108,95,51,95,55,52,0);
    let icondefaultthumbnaile: Array<any> = [String.fromCharCode(114,95,56,56,95,114,101,116,114,105,101,118,101,0), String.fromCharCode(115,116,111,114,97,103,101,115,95,103,95,55,53,0)];
    let catagoryt: Array<any> = [342, 52, 136];
    let usernamep = 3.0;
    let eventv: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,116,97,114,103,101,116,101,100,0),String.fromCharCode(98,117,108,108,101,116,115,95,98,95,54,51,0)], [String.fromCharCode(106,95,55,52,95,114,101,113,115,116,97,116,101,0),String.fromCharCode(110,95,51,56,95,114,101,99,97,108,99,0)], [String.fromCharCode(121,118,116,111,121,117,121,95,102,95,53,55,0),String.fromCharCode(100,105,115,112,111,115,101,95,48,95,49,54,0)]]);
    let dangerZ = true;
    let ball0 = 3;
    let pauseU: Array<any> = [144, 70, 942];
    let chatroombackgroundN = String.fromCharCode(119,97,108,107,101,114,95,97,95,52,53,0);
    let iconschedulev = true;
    let select8 = 0.0;
    let reddownarrowv = String.fromCharCode(122,95,55,51,95,104,108,115,101,110,99,0);
    let redscoreballe = 4.0;
    let weatherq = 0;
      ball0 |= (parseInt(`${usernamep}`) >> (Math.min(4, Math.abs((dangerZ ? 4 : 2)))));
       let leakcheckerM = false;
       let footballfield_: Map<any, any> = new Map([[String.fromCharCode(112,95,53,49,95,112,114,111,103,114,101,115,105,118,101,0),720], [String.fromCharCode(99,111,112,121,105,110,103,95,99,95,55,0),857]]);
       let privilegeH = String.fromCharCode(99,111,108,108,95,111,95,50,51,0);
       let configY = 3;
       let viewerY = 2;
      let iconwechatM = privilegeH.length <= 9165496;
      do {
         privilegeH += `${viewerY}`;
         if (iconwechatM) {
            break;
         }
      } while ((3 >= (footballfield_.size << (Math.min(Math.abs(1), 2)))) && iconwechatM);
      if (privilegeH.length > 3) {
          let friendsb = 1.0;
         leakcheckerM = privilegeH.includes(`${configY}`);
         friendsb += parseFloat(`${parseInt(`${friendsb}`)}`);
      }
         footballfield_ = new Map([[`${footballfield_.size}`, (footballfield_.size - (leakcheckerM ? 5 : 4))]]);
         viewerY *= configY;
          let templateprocessor7 = 0.0;
          let specW: Map<any, any> = new Map([[String.fromCharCode(122,95,52,52,95,101,110,100,115,0),String.fromCharCode(112,114,101,115,101,110,116,95,108,95,51,49,0)], [String.fromCharCode(111,95,49,55,95,108,111,110,103,101,114,0),String.fromCharCode(112,108,111,116,95,55,95,54,49,0)], [String.fromCharCode(121,95,50,52,95,115,112,97,114,115,101,110,101,115,115,0),String.fromCharCode(109,95,49,52,95,114,101,112,108,97,99,101,100,0)]]);
         footballfield_ = new Map([[`${specW.size}`, parseInt(`${templateprocessor7}`)]]);
      while ((2 >> (Math.min(4, privilegeH.length))) > 3 && (2 >> (Math.min(3, privilegeH.length))) > 5) {
         footballfield_ = new Map([[`${leakcheckerM}`, 1]]);
         break;
      }
      for (let h = 0; h < 2; h++) {
         configY >>= Math.min(Math.abs(footballfield_.size | 3), 2);
      }
      for (let k = 0; k < 3; k++) {
         privilegeH += `${configY}`;
      }
      chatroombackgroundN += `${((dangerZ ? 2 : 4) ^ icondefaultthumbnaile.length)}`;
       let dycreatorI = String.fromCharCode(103,95,55,49,95,114,101,99,111,118,101,114,0);
       let tickedo: Array<any> = [316, 340, 19];
       let live8 = 4;
      while (dycreatorI.length >= 1) {
          let iconarrowrighte = 4.0;
         tickedo.push(live8);
         iconarrowrighte += parseInt(`${iconarrowrighte}`);
         break;
      }
         live8 -= 3;
      while (2 < (5 * live8) || 4 < (dycreatorI.length * 5)) {
          let mimeR = false;
          let textlayoutmanagerB = String.fromCharCode(114,101,112,108,97,121,103,97,105,110,95,49,95,53,57,0);
          let searchC = true;
          let subina = false;
         live8 ^= tickedo.length * dycreatorI.length;
         mimeR = textlayoutmanagerB.length < 28;
         textlayoutmanagerB += `${textlayoutmanagerB.length}`;
         searchC = !searchC;
         subina = (((searchC ? textlayoutmanagerB.length : 86) ^ textlayoutmanagerB.length) <= 86);
         break;
      }
       let encryptorJ = 2.0;
       let descu = 3.0;
         tickedo.push(3 * parseInt(`${encryptorJ}`));
         encryptorJ -= dycreatorI.length | tickedo.length;
      for (let x = 0; x < 1; x++) {
         live8 /= Math.max(1, parseInt(`${encryptorJ}`));
      }
      if ((live8 / 1) > 1 && 2.4 > (4.27 + encryptorJ)) {
         live8 %= Math.max(parseInt(`${encryptorJ}`) / 1, 5);
      }
         dycreatorI = `${tickedo.length - live8}`;
      basketballv += `${catagoryt.length >> (Math.min(basketballv.length, 3))}`;
      basketballv += `${3 + eventv.size}`;
   if (dangerZ) {
      iconschedulev = 27 == icondefaultthumbnaile.length || 27 == basketballv.length;
   }
   for (let j = 0; j < 3; j++) {
      dangerZ = parseInt(`${usernamep}`) < eventv.size;
   }
   let soundQ = 7661169 <= icondefaultthumbnaile.length;
   do {
      icondefaultthumbnaile = [eventv.size];
      if (soundQ) {
         break;
      }
   } while ((eventv.size == 2) && soundQ);
   let lang0 = String.fromCharCode(111,116,122,53,107,48,50,0) == chatroombackgroundN;
   do {
      chatroombackgroundN = `${pauseU.length}`;
      if (lang0) {
         break;
      }
   } while ((chatroombackgroundN.includes(signinupa)) && lang0);
      signinupa += `${pauseU.length}`;
      basketballv += `${catagoryt.length + 1}`;

    clearTimeout(timer.current);

       let rncoreG = String.fromCharCode(117,110,98,105,110,100,95,108,95,53,53,0);
      for (let z = 0; z < 1; z++) {
          let searchbarv = false;
          let huaweiB = String.fromCharCode(112,95,54,50,95,99,111,110,115,111,110,97,110,116,0);
          let chatroombackgroundQ = String.fromCharCode(112,97,112,101,114,95,122,95,51,55,0);
          let checkbox0 = String.fromCharCode(100,95,51,56,95,110,111,102,105,116,105,99,97,116,105,111,110,0);
          let whitetick5 = false;
         rncoreG = `${rncoreG.length << (Math.min(Math.abs(2), 5))}`;
         searchbarv = checkbox0.length < chatroombackgroundQ.length;
         huaweiB += "1";
         chatroombackgroundQ += `${((whitetick5 ? 4 : 1))}`;
         checkbox0 = `${huaweiB.length - 1}`;
         whitetick5 = !whitetick5;
      }
      if (rncoreG == String.fromCharCode(70,0) && rncoreG == String.fromCharCode(89,0)) {
         rncoreG += `${2 % (Math.max(6, rncoreG.length))}`;
      }
      if (rncoreG.length >= rncoreG.length) {
         rncoreG = `${2 << (Math.min(5, rncoreG.length))}`;
      }
      usernamep += parseFloat(`${parseInt(`${usernamep}`)}`);
   if (2 <= (3 >> (Math.min(5, signinupa.length))) || 3 <= (signinupa.length >> (Math.min(3, Math.abs(ball0))))) {
      signinupa += `${chatroombackgroundN.length}`;
   }
   if (5 >= (5 >> (Math.min(1, Math.abs(ball0)))) || 4 >= (5 >> (Math.min(3, catagoryt.length)))) {
      ball0 <<= Math.min(Math.abs(ball0), 1);
   }
   if (5 < (pauseU.length * 1) && !iconschedulev) {
      iconschedulev = dangerZ && catagoryt.length == 60;
   }
   while (!dangerZ) {
       let string1 = 1.0;
      for (let q = 0; q < 2; q++) {
         string1 /= Math.max(parseFloat(`${3}`), 4);
      }
         string1 -= parseFloat(`${1 % (Math.max(parseInt(`${string1}`), 3))}`);
          let dropdownO: Map<any, any> = new Map([[String.fromCharCode(119,95,56,48,95,121,101,108,108,111,119,0),true ], [String.fromCharCode(111,95,53,54,95,105,110,118,105,116,101,0),false ]]);
         string1 /= Math.max(2, parseFloat(`${dropdownO.size}`));
      ball0 ^= ((iconschedulev ? 5 : 3) ^ (dangerZ ? 1 : 4));
      break;
   }
       let libjsijniprofileri = 3.0;
       let guideb = 4.0;
      let libjsib = libjsijniprofileri <= 6616638.0;
      do {
         libjsijniprofileri *= 3;
         if (libjsib) {
            break;
         }
      } while (((guideb * 1) <= 5.38) && libjsib);
         guideb -= parseInt(`${libjsijniprofileri}`) - parseInt(`${guideb}`);
      while ((libjsijniprofileri / 1) == 2.8) {
         guideb *= parseInt(`${libjsijniprofileri}`);
         break;
      }
      for (let p = 0; p < 2; p++) {
         libjsijniprofileri += parseInt(`${guideb}`) + 3;
      }
          let footballj = String.fromCharCode(102,95,50,48,95,98,102,108,121,0);
          let heartv = String.fromCharCode(115,117,105,116,101,95,98,95,57,55,0);
         libjsijniprofileri *= heartv.length << (Math.min(Math.abs(3), 5));
         footballj = `${footballj.length & 1}`;
         heartv += `${footballj.length >> (Math.min(Math.abs(1), 4))}`;
          let sides = String.fromCharCode(99,97,117,116,101,114,105,122,101,95,97,95,50,0);
          let mintegral9 = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,112,95,56,51,0);
         guideb /= Math.max(parseInt(`${libjsijniprofileri}`), 5);
         sides = `${(String.fromCharCode(66,0) == sides ? sides.length : mintegral9.length)}`;
         mintegral9 = `${2 ^ mintegral9.length}`;
      pauseU = [basketballv.length / (Math.max(10, catagoryt.length))];
   if (chatroombackgroundN.includes(`${eventv.size}`)) {
      chatroombackgroundN += `${(eventv.size | (dangerZ ? 4 : 5))}`;
   }
   while (1 < eventv.size) {
       let expando = 4.0;
       let codeg = 3.0;
      let libreanimated6 = 8565004.0 <= expando;
      do {
         expando *= parseFloat(`${parseInt(`${codeg}`)}`);
         if (libreanimated6) {
            break;
         }
      } while ((5.64 == (2.40 - expando) && 4.63 == (2.40 / (Math.max(7, expando)))) && libreanimated6);
      let volume6 = codeg >= 6634168.0;
      do {
         codeg /= Math.max(4, parseInt(`${codeg}`) & parseInt(`${expando}`));
         if (volume6) {
            break;
         }
      } while (volume6 && (expando > codeg));
      while (2.66 <= (2 / (Math.max(9, codeg)))) {
         expando *= parseFloat(`${2}`);
         break;
      }
         codeg += parseInt(`${expando}`);
         expando *= parseFloat(`${parseInt(`${codeg}`)}`);
         codeg -= 3 % (Math.max(parseInt(`${codeg}`), 4));
      ball0 += parseInt(`${codeg}`);
      break;
   }
   while ((eventv.size * ball0) <= 1) {
       let carouselh = true;
      let yellowcirclebgl = carouselh ? !carouselh : carouselh;
      do {
         carouselh = !carouselh;
         if (yellowcirclebgl) {
            break;
         }
      } while ((carouselh) && yellowcirclebgl);
         carouselh = (carouselh ? !carouselh : !carouselh);
      for (let v = 0; v < 2; v++) {
         carouselh = (carouselh ? !carouselh : !carouselh);
      }
      eventv = new Map([[`${icondefaultthumbnaile.length}`, chatroombackgroundN.length]]);
      break;
   }
   for (let g = 0; g < 2; g++) {
      chatroombackgroundN += `${basketballv.length ^ 3}`;
   }
    setShowOverlay(true);

   while (!signinupa.includes(`${icondefaultthumbnaile.length}`)) {
      icondefaultthumbnaile.push(1);
      break;
   }
      select8 /= Math.max(5, parseFloat(`${eventv.size << (Math.min(Math.abs(3), 1))}`));
   while (5.68 > usernamep) {
       let roomN = String.fromCharCode(103,111,108,100,95,98,95,56,50,0);
          let qaagg: Array<any> = [String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,103,95,57,0), String.fromCharCode(102,97,115,116,101,115,116,95,121,95,53,0)];
          let injuryq: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,111,114,115,95,112,95,51,48,0),String.fromCharCode(110,95,49,57,95,113,117,97,108,105,116,121,0)], [String.fromCharCode(105,112,111,108,95,53,95,49,56,0),String.fromCharCode(99,114,111,115,115,111,118,101,114,95,109,95,57,52,0)]]);
         roomN += `${3 << (Math.min(1, Math.abs(injuryq.size)))}`;
         qaagg = [2 * qaagg.length];
         injuryq.set(`${qaagg.length}`, 1);
      if (roomN.length >= 3) {
          let notificationX = String.fromCharCode(101,109,117,108,97,116,101,100,95,116,95,52,0);
         roomN += `${3 - notificationX.length}`;
      }
         roomN = `${2 ^ roomN.length}`;
      usernamep -= parseFloat(`${1}`);
      break;
   }
   while ((2 + chatroombackgroundN.length) == 2 || 4.43 == (usernamep / (Math.max(10, parseFloat(`${chatroombackgroundN.length}`))))) {
       let skipE = 3;
      if (skipE == skipE) {
          let qaage = String.fromCharCode(111,95,53,54,95,102,114,111,110,116,115,105,100,101,0);
          let libfileq = String.fromCharCode(99,108,111,115,101,95,117,95,55,56,0);
         skipE %= Math.max(2, 1 << (Math.min(4, libfileq.length)));
         qaage += `${qaage.length ^ qaage.length}`;
         libfileq = `${qaage.length}`;
      }
      while ((skipE % 5) > 1) {
         skipE %= Math.max(2, 3);
         break;
      }
      for (let c = 0; c < 1; c++) {
         skipE &= skipE;
      }
      usernamep *= (parseFloat(`${(dangerZ ? 3 : 5)}`));
      break;
   }
       let rankL = 1.0;
       let unimplementedviewp: Map<any, any> = new Map([[String.fromCharCode(111,117,116,113,95,117,95,53,56,0),761], [String.fromCharCode(100,101,99,111,100,101,100,95,115,95,54,48,0),999], [String.fromCharCode(119,95,54,55,95,115,117,98,115,99,114,105,98,97,98,108,101,0),551]]);
      let cornerkickw = unimplementedviewp.size <= 6519247;
      do {
         unimplementedviewp = new Map([[`${unimplementedviewp.size}`, 1]]);
         if (cornerkickw) {
            break;
         }
      } while ((unimplementedviewp.get(`${rankL}`) == null) && cornerkickw);
         rankL /= Math.max(parseFloat(`${unimplementedviewp.size << (Math.min(Math.abs(1), 3))}`), 1);
      select8 /= Math.max(1, parseFloat(`${parseInt(`${rankL}`) % 3}`));
   if (catagoryt.includes(select8)) {
       let kuaishouo = String.fromCharCode(104,95,53,56,95,115,117,98,112,101,108,0);
       let googleg: Array<any> = [491, 1, 639];
       let predictionwin4: Array<any> = [String.fromCharCode(105,110,115,101,114,116,101,100,95,105,95,53,0), String.fromCharCode(103,101,111,112,111,108,121,95,49,95,54,0)];
      let with_1cZ = predictionwin4.length >= 8374491;
      do {
         predictionwin4 = [googleg.length / (Math.max(kuaishouo.length, 4))];
         if (with_1cZ) {
            break;
         }
      } while ((3 >= (googleg.length << (Math.min(3, predictionwin4.length))) || 3 >= (googleg.length << (Math.min(2, predictionwin4.length)))) && with_1cZ);
      let navigationG = predictionwin4.length >= 6654084;
      do {
         predictionwin4 = [predictionwin4.length];
         if (navigationG) {
            break;
         }
      } while (navigationG && (5 >= (googleg.length >> (Math.min(Math.abs(2), 3))) || (predictionwin4.length >> (Math.min(Math.abs(2), 5))) >= 4));
      if (kuaishouo.length == googleg.length) {
         googleg.push(predictionwin4.length + 2);
      }
      while (!kuaishouo.includes(`${googleg.length}`)) {
          let unreadE = String.fromCharCode(97,95,48,95,99,97,108,101,110,100,97,114,0);
          let statisticsb = 2.0;
         googleg.push((kuaishouo == String.fromCharCode(122,0) ? parseInt(`${statisticsb}`) : kuaishouo.length));
         unreadE = `${unreadE.length}`;
         statisticsb += unreadE.length;
         break;
      }
      for (let f = 0; f < 1; f++) {
         googleg = [3 + predictionwin4.length];
      }
         predictionwin4.push(googleg.length & 2);
       let dependencies9 = false;
         googleg = [(predictionwin4.length + (dependencies9 ? 3 : 4))];
          let whitevideoliveg = String.fromCharCode(103,95,57,95,113,112,98,105,116,115,0);
          let animations3 = true;
          let injuryf = 2.0;
         googleg = [3 / (Math.max(1, parseInt(`${injuryf}`)))];
         whitevideoliveg += `${((animations3 ? 5 : 2) * 3)}`;
         animations3 = (((!animations3 ? whitevideoliveg.length : 45) * whitevideoliveg.length) == 45);
         injuryf -= (parseFloat(`${(animations3 ? 2 : 4) / (Math.max(whitevideoliveg.length, 3))}`));
      catagoryt = [googleg.length];
   }
       let predictionbannersharedg = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,119,95,52,53,0);
         predictionbannersharedg = `${predictionbannersharedg.length}`;
      if (predictionbannersharedg.endsWith(predictionbannersharedg)) {
         predictionbannersharedg += `${2 >> (Math.min(4, predictionbannersharedg.length))}`;
      }
       let headerQ = String.fromCharCode(115,116,97,114,116,115,95,114,95,54,55,0);
       let baidub = String.fromCharCode(108,104,97,115,104,95,51,95,50,53,0);
      basketballv += `${basketballv.length << (Math.min(Math.abs(1), 3))}`;
   for (let v = 0; v < 1; v++) {
      eventv.set(`${iconschedulev}`, eventv.size);
   }
   while (5 < (basketballv.length - 1)) {
       let tumbnailY = String.fromCharCode(103,95,51,56,95,97,98,115,101,105,108,0);
      for (let r = 0; r < 3; r++) {
         tumbnailY += "2";
      }
         tumbnailY = "3";
       let bodan8 = String.fromCharCode(97,112,112,108,121,105,110,103,95,106,95,56,48,0);
      basketballv = `${1 << (Math.min(4, catagoryt.length))}`;
      break;
   }
   while (signinupa.length <= 5) {
       let modalE = 1.0;
       let football_ = false;
       let libfbjni9 = false;
         modalE *= parseFloat(`${parseInt(`${modalE}`) >> (Math.min(2, Math.abs(3)))}`);
      while (!football_) {
         football_ = libfbjni9;
         break;
      }
          let currentD = String.fromCharCode(99,105,100,95,51,95,56,48,0);
          let bgvipxvodL = String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,117,95,52,49,0);
          let recommendationG = 1.0;
         football_ = 33.81 >= modalE;
         currentD = `${parseInt(`${recommendationG}`) >> (Math.min(bgvipxvodL.length, 4))}`;
         bgvipxvodL += `${3 << (Math.min(2, Math.abs(parseInt(`${recommendationG}`))))}`;
      let icontransferclubX = modalE >= 9029251.0;
      do {
          let rewardz = 3.0;
          let mbnativeS = String.fromCharCode(100,111,110,97,116,101,95,104,95,55,55,0);
          let stringsu: Map<any, any> = new Map([[String.fromCharCode(120,95,57,53,95,122,112,116,102,0),String.fromCharCode(115,95,52,52,95,104,97,110,110,101,108,0)], [String.fromCharCode(102,100,101,99,95,109,95,55,54,0),String.fromCharCode(100,101,116,97,99,104,101,100,95,53,95,50,48,0)]]);
          let hookG = String.fromCharCode(100,105,118,105,100,111,114,95,101,95,54,57,0);
          let matcha = String.fromCharCode(109,105,120,105,110,103,95,56,95,55,52,0);
         modalE *= (parseFloat(`${String.fromCharCode(70,0) == mbnativeS ? mbnativeS.length : parseInt(`${rewardz}`)}`));
         rewardz -= (parseFloat(`${hookG == String.fromCharCode(71,0) ? matcha.length : hookG.length}`));
         stringsu.set(`${hookG}`, hookG.length);
         matcha = `${hookG.length * matcha.length}`;
         if (icontransferclubX) {
            break;
         }
      } while (icontransferclubX && (!football_));
         football_ = libfbjni9;
       let build6: Map<any, any> = new Map([[String.fromCharCode(115,95,51,51,95,110,105,100,115,110,0),true ], [String.fromCharCode(100,118,98,115,117,98,95,55,95,56,51,0),false ], [String.fromCharCode(119,95,56,57,95,99,97,99,104,101,102,108,117,115,104,0),true ]]);
      if (football_) {
         football_ = (94 >= (build6.size + (!libfbjni9 ? build6.size : 90)));
      }
      if (3.10 == modalE) {
         libfbjni9 = !libfbjni9;
      }
         football_ = 35.69 == modalE || football_;
      select8 += parseFloat(`${signinupa.length / (Math.max(9, pauseU.length))}`);
      break;
   }
    overlayRef.current = true

      dangerZ = 25.3 <= select8 && iconschedulev;
      basketballv += `${parseInt(`${select8}`)}`;
   while (2 > (icondefaultthumbnaile.length / (Math.max(2, chatroombackgroundN.length)))) {
      chatroombackgroundN = `${1 >> (Math.min(1, pauseU.length))}`;
      break;
   }
      reddownarrowv += `${pauseU.length}`;
   if (2 <= (icondefaultthumbnaile.length & 4) && (1.85 - redscoreballe) <= 3.71) {
      icondefaultthumbnaile.push(pauseU.length / (Math.max(2, 2)));
   }
      redscoreballe += parseFloat(`${pauseU.length * catagoryt.length}`);
      usernamep -= (parseFloat(`${parseInt(`${usernamep}`) | (iconschedulev ? 2 : 2)}`));
   let hooksn = chatroombackgroundN.length >= 8081101;
   do {
      chatroombackgroundN += "1";
      if (hooksn) {
         break;
      }
   } while ((!basketballv.includes(chatroombackgroundN)) && hooksn);
      iconschedulev = reddownarrowv == basketballv;
      eventv.set(reddownarrowv, 2);
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
       let klevin0 = 3.0;
    let promotionV = String.fromCharCode(108,105,110,107,105,110,103,95,55,95,51,48,0);
    let yellowcirclebgf = 3.0;
    let release_9Y = String.fromCharCode(106,95,49,53,95,114,101,97,114,114,97,110,103,101,0);
    let renderd = String.fromCharCode(99,109,105,111,95,116,95,53,56,0);
    let untick0 = String.fromCharCode(110,99,114,121,112,116,105,111,110,95,110,95,56,53,0);
    let contextR: Map<any, any> = new Map([[String.fromCharCode(119,95,56,95,122,101,114,111,101,100,0),319], [String.fromCharCode(115,116,121,108,101,100,95,120,95,50,51,0),477]]);
    let iconschedulev: Array<any> = [394, 177, 376];
    let searchu = String.fromCharCode(117,95,57,55,95,117,108,116,114,97,0);
    let controlsU = 2;
    let yingg = String.fromCharCode(100,105,108,97,116,101,95,54,95,53,57,0);
    let footballfieldB = 2;
    let componentregistrym = String.fromCharCode(108,95,57,51,95,114,109,115,105,112,114,0);
   if (1 >= (promotionV.length + parseInt(`${yellowcirclebgf}`)) || (4.24 + yellowcirclebgf) >= 5.45) {
      yellowcirclebgf /= Math.max(5, 2);
   }
      promotionV += `${renderd.length << (Math.min(3, release_9Y.length))}`;
       let awayteamfieldO = 0.0;
         awayteamfieldO += parseInt(`${awayteamfieldO}`) << (Math.min(2, Math.abs(2)));
         awayteamfieldO *= parseInt(`${awayteamfieldO}`) / (Math.max(parseInt(`${awayteamfieldO}`), 5));
         awayteamfieldO += 3;
      untick0 += "2";
      release_9Y = `${searchu.length * iconschedulev.length}`;
   let phoneshare7 = promotionV.length <= 9292374;
   do {
      promotionV += `${iconschedulev.length}`;
      if (phoneshare7) {
         break;
      }
   } while (phoneshare7 && (1 <= (promotionV.length & controlsU)));
      controlsU >>= Math.min(2, Math.abs(parseInt(`${klevin0}`) | contextR.size));
   for (let h = 0; h < 2; h++) {
      contextR.set(yingg, yingg.length);
   }
       let codegenK = 3;
          let buildk = 4.0;
          let themeT = String.fromCharCode(116,109,112,111,95,102,95,54,48,0);
         codegenK += 2 / (Math.max(9, parseInt(`${buildk}`)));
         buildk += themeT.length;
         themeT = "2";
      let reactnativejsV = codegenK >= 7715346;
      do {
          let type_4o: Array<any> = [String.fromCharCode(99,111,110,103,95,101,95,50,49,0), String.fromCharCode(112,95,55,56,95,101,114,105,97,108,105,122,97,116,105,111,110,0)];
          let brightnessr = String.fromCharCode(102,97,107,101,95,120,95,55,57,0);
          let downloaderG: Map<any, any> = new Map([[String.fromCharCode(114,95,49,57,95,112,114,101,104,101,97,116,0),486], [String.fromCharCode(105,110,99,114,101,97,115,101,95,57,95,53,55,0),310]]);
          let refreshV = String.fromCharCode(116,114,97,110,115,102,101,114,95,102,95,50,49,0);
          let iconclosej = String.fromCharCode(108,97,118,102,105,95,98,95,56,49,0);
         codegenK /= Math.max(5, codegenK);
         type_4o.push(3 >> (Math.min(3, type_4o.length)));
         brightnessr += `${brightnessr.length - iconclosej.length}`;
         downloaderG = new Map([[`${type_4o.length}`, type_4o.length >> (Math.min(Math.abs(1), 4))]]);
         refreshV += `${2 >> (Math.min(1, brightnessr.length))}`;
         iconclosej += `${downloaderG.size}`;
         if (reactnativejsV) {
            break;
         }
      } while (reactnativejsV && (codegenK == 1));
          let iconarrowrightI: Map<any, any> = new Map([[String.fromCharCode(100,95,55,51,95,99,111,110,110,101,99,116,0),967], [String.fromCharCode(105,95,51,95,114,103,98,105,0),453]]);
          let canvasT = 4.0;
         codegenK -= 1;
         iconarrowrightI.set(`${canvasT}`, 3);
         canvasT *= iconarrowrightI.size;
      yellowcirclebgf += parseInt(`${klevin0}`) % 1;
   if ((contextR.size >> (Math.min(Math.abs(2), 5))) == 4) {
      iconschedulev.push(footballfieldB);
   }
      untick0 += `${renderd.length}`;


      if (videoRef.current) {

   if (untick0.length < searchu.length) {
       let lessN = 3.0;
       let libtob9: Map<any, any> = new Map([[String.fromCharCode(116,95,52,55,95,102,105,116,115,0),false ], [String.fromCharCode(116,95,49,57,95,116,119,105,108,105,103,104,116,0),false ], [String.fromCharCode(107,95,54,95,112,114,111,114,101,115,100,115,112,0),false ]]);
       let sinaP: Map<any, any> = new Map([[String.fromCharCode(98,95,52,56,95,116,111,121,115,0),true ], [String.fromCharCode(118,95,53,50,95,115,104,97,114,101,0),false ]]);
          let libtoba = String.fromCharCode(98,95,52,49,95,108,105,110,107,105,110,103,0);
          let iconrightorangep = String.fromCharCode(112,95,51,55,95,114,101,112,108,105,99,97,116,101,100,0);
          let black7 = String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,106,95,52,53,0);
         sinaP = new Map([[libtoba, 3]]);
         libtoba = `${black7.length | 3}`;
         iconrightorangep += `${black7.length % (Math.max(6, iconrightorangep.length))}`;
         libtob9.set(`${libtob9.size}`, libtob9.size + 3);
         libtob9.set(`${libtob9.size}`, sinaP.size);
         libtob9 = new Map([[`${sinaP.size}`, 2]]);
      for (let k = 0; k < 1; k++) {
         sinaP = new Map([[`${sinaP.size}`, parseInt(`${lessN}`) & 2]]);
      }
       let predictionactiveo = String.fromCharCode(110,95,49,51,95,115,101,108,101,99,116,105,111,110,115,0);
       let cricketk = String.fromCharCode(100,95,56,49,95,116,105,109,101,108,105,110,101,0);
         libtob9 = new Map([[`${sinaP.size}`, parseInt(`${lessN}`)]]);
      for (let a = 0; a < 3; a++) {
         predictionactiveo += `${parseInt(`${lessN}`) % 2}`;
      }
      while (3 == libtob9.size) {
          let left4: Map<any, any> = new Map([[String.fromCharCode(122,95,50,51,95,115,117,98,114,101,115,117,108,116,115,0),971], [String.fromCharCode(99,95,57,51,95,111,114,100,101,114,105,110,103,0),840], [String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,97,95,57,48,0),488]]);
          let configP: Array<any> = [String.fromCharCode(116,95,49,48,48,95,99,104,97,114,116,115,0), String.fromCharCode(104,95,55,49,95,112,114,101,115,101,110,116,105,110,103,0), String.fromCharCode(107,95,49,55,95,112,108,111,116,116,101,114,0)];
          let link1 = 1.0;
          let libreactE: Map<any, any> = new Map([[String.fromCharCode(100,115,112,117,116,105,108,95,51,95,52,51,0),752], [String.fromCharCode(97,112,112,101,110,100,101,100,95,56,95,49,54,0),797], [String.fromCharCode(101,95,57,53,95,115,97,100,98,0),671]]);
         sinaP.set(`${configP.length}`, 2 ^ libtob9.size);
         left4.set(`${link1}`, 1 >> (Math.min(5, Math.abs(parseInt(`${link1}`)))));
         configP = [parseInt(`${link1}`) >> (Math.min(Math.abs(2), 4))];
         libreactE.set(`${link1}`, 2);
         break;
      }
      untick0 = `${parseInt(`${yellowcirclebgf}`)}`;
   }
      release_9Y = `${(renderd == String.fromCharCode(114,0) ? renderd.length : iconschedulev.length)}`;
   while (promotionV.length == 4) {
       let libsentry3 = String.fromCharCode(100,95,52,51,95,97,98,108,0);
       let nendK = false;
          let tumbnaili = false;
         libsentry3 += `${(String.fromCharCode(77,0) == libsentry3 ? (nendK ? 4 : 5) : libsentry3.length)}`;
         tumbnaili = tumbnaili || tumbnaili;
         nendK = !libsentry3.endsWith(`${nendK}`);
         nendK = !nendK || libsentry3.length > 86;
       let friendsF = true;
      while (nendK) {
         nendK = (!friendsF ? !nendK : !friendsF);
         break;
      }
         friendsF = libsentry3.length < 51;
      renderd = `${promotionV.length}`;
      break;
   }
   while (!untick0.endsWith(`${klevin0}`)) {
       let whiteI = String.fromCharCode(97,115,100,107,95,109,95,57,48,0);
       let activeS = String.fromCharCode(99,111,109,112,111,115,101,114,95,120,95,57,54,0);
       let libfabricjniW = 3.0;
       let build9 = true;
       let canvasc: Map<any, any> = new Map([[String.fromCharCode(114,95,56,49,95,97,112,112,101,97,114,105,110,103,0),262], [String.fromCharCode(102,95,48,95,119,101,120,112,97,110,100,0),723], [String.fromCharCode(107,95,51,52,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0),59]]);
       let gestureM = 4;
       let expiredW = 4;
      while (!activeS.startsWith(`${expiredW}`)) {
          let airbnbstar7 = 0;
         activeS += `${expiredW / 3}`;
         airbnbstar7 >>= Math.min(Math.abs(airbnbstar7), 5);
         break;
      }
      let libflipperz = build9 ? !build9 : build9;
      do {
         build9 = build9 && libfabricjniW >= 15.50;
         if (libflipperz) {
            break;
         }
      } while (libflipperz && (build9));
      let gnewarchdefaults5 = build9 ? !build9 : build9;
      do {
         build9 = gestureM > 91;
         if (gnewarchdefaults5) {
            break;
         }
      } while (gnewarchdefaults5 && (3 <= canvasc.size));
      let awayteamfieldD = 5412036 >= gestureM;
      do {
         gestureM |= ((build9 ? 5 : 3));
         if (awayteamfieldD) {
            break;
         }
      } while (awayteamfieldD && ((expiredW + gestureM) < 2));
      if (build9 && 4 == (3 ^ canvasc.size)) {
         build9 = activeS.length == 67 && libfabricjniW == 87.100;
      }
      while (whiteI.length <= 1) {
         gestureM >>= Math.min(Math.abs(activeS.length ^ 3), 1);
         break;
      }
         activeS += `${3 * canvasc.size}`;
      let benefitx = activeS == String.fromCharCode(106,99,48,51,55,104,0);
      do {
         activeS = `${parseInt(`${libfabricjniW}`)}`;
         if (benefitx) {
            break;
         }
      } while ((4 == (2 + activeS.length)) && benefitx);
       let result1: Map<any, any> = new Map([[String.fromCharCode(120,95,51,50,95,99,111,109,109,105,116,116,101,114,0),175], [String.fromCharCode(114,95,54,51,95,109,111,116,99,111,109,112,0),790]]);
      if (4 <= canvasc.size || 4 <= (canvasc.size >> (Math.min(Math.abs(4), 4)))) {
         canvasc.set(`${libfabricjniW}`, parseInt(`${libfabricjniW}`) & 2);
      }
          let libmapbufferjniK = 3;
          let backgroundc = String.fromCharCode(106,95,53,53,95,114,101,102,117,110,100,0);
          let statsN: Array<any> = [414, 583];
         whiteI += "2";
         libmapbufferjniK &= (String.fromCharCode(119,0) == backgroundc ? backgroundc.length : libmapbufferjniK);
         statsN = [statsN.length];
      for (let o = 0; o < 1; o++) {
         whiteI += `${2 - gestureM}`;
      }
      let watchB = whiteI.length >= 6127234;
      do {
         whiteI = `${1 / (Math.max(1, gestureM))}`;
         if (watchB) {
            break;
         }
      } while (watchB && ((whiteI.length + 4) < 4 || (whiteI.length + 4) < 4));
      let crownr = canvasc.size <= 6874627;
      do {
         canvasc.set(whiteI, activeS.length);
         if (crownr) {
            break;
         }
      } while (crownr && (activeS.length > canvasc.size));
      untick0 += `${controlsU}`;
      break;
   }
   let readB = contextR.size <= 8920426;
   do {
      contextR = new Map([[untick0, 3]]);
      if (readB) {
         break;
      }
   } while (readB && (4 > (release_9Y.length * 3) && 3 > (contextR.size * release_9Y.length)));
      searchu += `${yingg.length}`;
      controlsU += iconschedulev.length;
   if (2.90 <= (yellowcirclebgf / (Math.max(yingg.length, 10)))) {
      yellowcirclebgf *= searchu.length;
   }
   while ((5 ^ release_9Y.length) < 1) {
       let videovarb = String.fromCharCode(97,100,114,109,95,107,95,49,50,0);
       let internetN = 2;
       let showT = String.fromCharCode(103,95,53,56,95,109,101,116,114,105,99,0);
       let encryptI = false;
       let roundP = 3;
          let index4 = String.fromCharCode(99,117,118,105,100,95,111,95,48,0);
          let model4 = String.fromCharCode(117,95,51,49,95,111,102,102,115,101,116,115,0);
         internetN /= Math.max(2 & model4.length, 3);
         index4 += `${index4.length}`;
         model4 = "2";
      while (showT.includes(`${roundP}`)) {
          let tickedx = 2.0;
          let savee = 0.0;
          let phoneshareX = 1;
         showT += "3";
         tickedx /= Math.max(parseFloat(`${parseInt(`${savee}`) >> (Math.min(3, Math.abs(2)))}`), 1);
         savee /= Math.max(1, 2 + parseInt(`${tickedx}`));
         phoneshareX += parseInt(`${tickedx}`);
         break;
      }
      for (let t = 0; t < 3; t++) {
          let guidek = String.fromCharCode(116,114,97,99,107,101,100,95,52,95,57,55,0);
          let feedbackb = 5.0;
          let q_hashm = String.fromCharCode(103,101,115,116,117,114,101,115,95,108,95,55,0);
         roundP ^= q_hashm.length * parseInt(`${feedbackb}`);
         guidek += "2";
         feedbackb += parseFloat(`${guidek.length | guidek.length}`);
      }
      for (let s = 0; s < 2; s++) {
         videovarb += `${1 & internetN}`;
      }
          let castu = 3.0;
          let defaultroombg4: Map<any, any> = new Map([[String.fromCharCode(121,95,53,57,95,104,105,103,104,0),961], [String.fromCharCode(111,95,50,56,95,115,116,111,114,109,98,105,114,100,0),758], [String.fromCharCode(112,95,51,52,95,97,100,100,0),305]]);
         encryptI = (videovarb.length << (Math.min(4, Math.abs(internetN)))) < 21;
         castu *= parseFloat(`${parseInt(`${castu}`)}`);
         defaultroombg4.set(`${castu}`, parseInt(`${castu}`));
         internetN /= Math.max(5, 3);
          let teamdetailsbgS = String.fromCharCode(115,116,114,110,100,117,112,95,120,95,53,52,0);
          let mappingU = String.fromCharCode(112,114,101,99,111,109,112,95,51,95,53,54,0);
         videovarb += "1";
         teamdetailsbgS = `${1 + mappingU.length}`;
         mappingU = `${(String.fromCharCode(106,0) == teamdetailsbgS ? teamdetailsbgS.length : mappingU.length)}`;
      for (let a = 0; a < 3; a++) {
          let utilsN = String.fromCharCode(116,97,107,101,111,118,101,114,95,117,95,52,56,0);
          let rewindC: Map<any, any> = new Map([[String.fromCharCode(100,97,116,101,115,95,113,95,49,51,0),723], [String.fromCharCode(117,110,114,111,108,108,101,100,95,117,95,53,51,0),631]]);
          let template__c2: Array<any> = [56, 414, 838];
          let footballfield1 = String.fromCharCode(102,114,97,109,101,100,95,109,95,49,50,0);
          let dplusn = String.fromCharCode(114,95,53,54,95,112,114,101,115,117,109,101,0);
         showT = `${dplusn.length / (Math.max(1, 5))}`;
         utilsN += `${utilsN.length}`;
         rewindC.set(footballfield1, 1);
         template__c2.push(utilsN.length % (Math.max(9, footballfield1.length)));
         dplusn += `${footballfield1.length}`;
      }
         roundP <<= Math.min(Math.abs(internetN >> (Math.min(3, Math.abs(roundP)))), 4);
      let condensedL = internetN >= 9560453;
      do {
         internetN ^= (String.fromCharCode(121,0) == showT ? internetN : showT.length);
         if (condensedL) {
            break;
         }
      } while (condensedL && (!encryptI));
         showT = `${roundP - internetN}`;
         encryptI = showT.length <= internetN;
      for (let a = 0; a < 1; a++) {
         videovarb = `${showT.length}`;
      }
       let iconsharefriendsL = String.fromCharCode(119,95,49,57,95,105,110,100,101,120,101,100,0);
      while (3 == (3 >> (Math.min(4, Math.abs(internetN)))) && 2 == (3 >> (Math.min(4, Math.abs(internetN))))) {
         internetN |= 3;
         break;
      }
      release_9Y += `${2 >> (Math.min(5, Math.abs(controlsU)))}`;
      break;
   }
      promotionV += "1";
        videoRef.current.seek(value);

   while (3 == (5 - untick0.length)) {
       let activeN = 2.0;
       let templateprocessorN = String.fromCharCode(108,97,121,101,114,95,56,95,54,53,0);
       let tick9 = String.fromCharCode(102,111,114,99,105,110,103,95,105,95,51,52,0);
       let controlsf: Map<any, any> = new Map([[String.fromCharCode(102,117,122,122,101,114,95,120,95,53,56,0),false ], [String.fromCharCode(116,114,97,110,115,109,105,116,116,101,100,95,51,95,53,0),false ]]);
       let streamingW = String.fromCharCode(105,100,101,97,108,95,97,95,49,53,0);
         streamingW += `${controlsf.size}`;
      for (let h = 0; h < 2; h++) {
         templateprocessorN = `${streamingW.length << (Math.min(2, Math.abs(controlsf.size)))}`;
      }
       let configure7 = 0.0;
       let greytickw = 0.0;
         activeN += parseInt(`${activeN}`) | 2;
      while (streamingW.startsWith(`${controlsf.size}`)) {
         streamingW = `${1 | tick9.length}`;
         break;
      }
         controlsf.set(templateprocessorN, streamingW.length >> (Math.min(Math.abs(3), 5)));
      while (2.36 < (configure7 / (Math.max(tick9.length, 1))) && (3 ^ tick9.length) < 4) {
         configure7 /= Math.max(2, parseInt(`${activeN}`) + 3);
         break;
      }
       let time_pq = String.fromCharCode(114,95,50,55,95,103,101,116,115,105,103,99,116,120,110,111,0);
       let armvaC = String.fromCharCode(101,95,56,56,95,115,105,103,110,105,102,105,99,97,110,116,0);
         armvaC = `${tick9.length / (Math.max(time_pq.length, 9))}`;
       let libjsijniprofiler1: Array<any> = [String.fromCharCode(103,95,55,52,95,103,101,110,99,98,0), String.fromCharCode(99,111,110,110,101,99,116,95,119,95,51,51,0)];
       let rocketp: Array<any> = [64, 880, 654];
      for (let u = 0; u < 3; u++) {
         time_pq += `${parseInt(`${activeN}`)}`;
      }
      let confirmationr = streamingW == String.fromCharCode(115,102,57,97,0);
      do {
         streamingW = "2";
         if (confirmationr) {
            break;
         }
      } while (confirmationr && (4 == rocketp.length));
      let yellowcirclebg7 = templateprocessorN.length <= 8493651;
      do {
         templateprocessorN = "3";
         if (yellowcirclebg7) {
            break;
         }
      } while (yellowcirclebg7 && (templateprocessorN.length >= 4));
          let shrink7 = 1.0;
          let aboutk = String.fromCharCode(99,97,112,95,108,95,56,54,0);
         tick9 = `${3 % (Math.max(9, parseInt(`${activeN}`)))}`;
         shrink7 += parseFloat(`${parseInt(`${shrink7}`)}`);
         aboutk = `${aboutk.length}`;
          let spect = 3.0;
          let utilsf = String.fromCharCode(109,95,53,54,95,109,101,109,111,114,121,0);
         greytickw /= Math.max(3, 3);
         spect -= parseFloat(`${parseInt(`${spect}`)}`);
         utilsf += "2";
      untick0 += "1";
      break;
   }
      iconschedulev = [renderd.length];
   while (renderd.length <= promotionV.length) {
      renderd += `${(String.fromCharCode(65,0) == untick0 ? renderd.length : untick0.length)}`;
      break;
   }
   let interstitialY = klevin0 >= 5750942.0;
   do {
      klevin0 *= promotionV.length;
      if (interstitialY) {
         break;
      }
   } while (interstitialY && ((untick0.length * klevin0) >= 1.35 || 1 >= (3 * parseInt(`${klevin0}`))));
   for (let d = 0; d < 2; d++) {
       let listw = 0.0;
       let currentj: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,55,95,52,57,0),true ], [String.fromCharCode(114,95,51,50,95,108,105,110,101,98,114,101,97,107,0),false ]]);
       let math3 = 3.0;
      while (5.47 <= math3) {
          let libapminsightbQ = 3.0;
          let leakcheckerA = 3.0;
          let sharedr = String.fromCharCode(114,95,50,56,95,115,117,98,100,97,116,97,0);
          let j_view0 = true;
          let thumbnailZ: Array<any> = [483, 464];
         math3 -= parseInt(`${listw}`) >> (Math.min(4, Math.abs(parseInt(`${leakcheckerA}`))));
         libapminsightbQ += parseFloat(`${2}`);
         leakcheckerA *= parseFloat(`${3 * parseInt(`${libapminsightbQ}`)}`);
         sharedr = "2";
         j_view0 = thumbnailZ.length >= 28 || !j_view0;
         thumbnailZ = [(sharedr == String.fromCharCode(81,0) ? sharedr.length : thumbnailZ.length)];
         break;
      }
         math3 /= Math.max(currentj.size | parseInt(`${listw}`), 5);
      let k_imagee = 9594062.0 <= math3;
      do {
         math3 += parseInt(`${listw}`) % (Math.max(currentj.size, 1));
         if (k_imagee) {
            break;
         }
      } while (k_imagee && (!Array.from(currentj.keys()).includes(`${math3}`)));
      for (let n = 0; n < 1; n++) {
         currentj = new Map([[`${listw}`, parseInt(`${math3}`) + parseInt(`${listw}`)]]);
      }
      let libfbjnit = 6087575 >= currentj.size;
      do {
         currentj = new Map([[`${currentj.size}`, currentj.size]]);
         if (libfbjnit) {
            break;
         }
      } while (libfbjnit && (1 <= (2 >> (Math.min(3, Math.abs(currentj.size)))) || 1.97 <= (currentj.size - math3)));
         listw += parseFloat(`${parseInt(`${math3}`) & parseInt(`${listw}`)}`);
          let membershipw: Map<any, any> = new Map([[String.fromCharCode(116,97,103,103,105,110,103,95,102,95,52,48,0),443], [String.fromCharCode(103,101,110,101,114,105,99,95,99,95,52,55,0),76]]);
         listw *= parseFloat(`${membershipw.size | parseInt(`${listw}`)}`);
      if (1.10 >= (math3 / (Math.max(1.72, 1)))) {
          let modely = String.fromCharCode(112,97,99,107,105,110,103,95,121,95,57,53,0);
          let awayz: Map<any, any> = new Map([[String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,98,95,52,53,0),String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,102,95,50,57,0)], [String.fromCharCode(122,95,50,52,95,102,97,99,101,98,111,111,107,0),String.fromCharCode(113,111,115,95,54,95,53,52,0)]]);
          let emojiy = String.fromCharCode(98,95,56,55,95,115,116,101,112,112,101,114,0);
          let prediction4 = 5.0;
         currentj.set(`${awayz.size}`, 2);
         modely = `${1 + emojiy.length}`;
         awayz.set(`${prediction4}`, emojiy.length ^ parseInt(`${prediction4}`));
      }
      let combiney = currentj.size <= 5998148;
      do {
          let currentH = String.fromCharCode(106,95,49,48,48,95,97,100,115,0);
          let streamingd = 2.0;
          let combineB: Array<any> = [297, 121, 774];
         currentj = new Map([[`${combineB.length}`, (currentH == String.fromCharCode(95,0) ? currentH.length : combineB.length)]]);
         streamingd += parseFloat(`${parseInt(`${streamingd}`) % 3}`);
         if (combiney) {
            break;
         }
      } while ((currentj.get(`${listw}`) == null) && combiney);
      searchu += `${currentj.size | parseInt(`${math3}`)}`;
   }
       let infoE = 3.0;
         infoE *= 2 ^ parseInt(`${infoE}`);
       let gifgoalbg2: Array<any> = [86, 171];
      let disconnectedl = 6577278.0 >= infoE;
      do {
         infoE += gifgoalbg2.length;
         if (disconnectedl) {
            break;
         }
      } while ((!gifgoalbg2.includes(infoE)) && disconnectedl);
      yellowcirclebgf -= 2 << (Math.min(3, searchu.length));
       let libmapbufferjnip: Map<any, any> = new Map([[String.fromCharCode(109,105,115,115,101,115,95,51,95,54,50,0),922], [String.fromCharCode(98,101,116,97,95,97,95,55,0),399]]);
       let klevinO = false;
       let dycreatorQ: Array<any> = [String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,56,95,53,56,0), String.fromCharCode(102,102,109,97,116,104,95,121,95,52,55,0)];
         klevinO = dycreatorQ.includes(klevinO);
      let submitV = klevinO ? !klevinO : klevinO;
      do {
         klevinO = !klevinO;
         if (submitV) {
            break;
         }
      } while (submitV && (!klevinO));
       let dialogD = String.fromCharCode(114,105,103,104,116,115,95,103,95,51,49,0);
      while (!dialogD.endsWith(`${dycreatorQ.length}`)) {
         dycreatorQ = [((klevinO ? 3 : 4) % 2)];
         break;
      }
      if (klevinO) {
         libmapbufferjnip.set(`${klevinO}`, libmapbufferjnip.size);
      }
         libmapbufferjnip.set(`${klevinO}`, dycreatorQ.length);
      while (!klevinO) {
          let bottomF = 2;
          let homeplayerX = 1;
          let footballfieldV = true;
          let handlerw = String.fromCharCode(120,95,56,95,100,120,118,97,0);
         klevinO = 69 <= homeplayerX && String.fromCharCode(50,0) == dialogD;
         bottomF |= bottomF - 1;
         homeplayerX += bottomF;
         footballfieldV = bottomF <= 46 || !footballfieldV;
         handlerw += `${(handlerw == String.fromCharCode(89,0) ? handlerw.length : (footballfieldV ? 1 : 4))}`;
         break;
      }
          let nativeexN = true;
          let awayo = String.fromCharCode(121,95,57,52,95,108,105,110,109,97,116,104,0);
         libmapbufferjnip.set(`${klevinO}`, 2);
         nativeexN = awayo.endsWith(`${nativeexN}`);
         awayo = `${awayo.length << (Math.min(Math.abs(3), 4))}`;
      let updatesM = klevinO ? !klevinO : klevinO;
      do {
          let friendsA = 1;
          let bgvipsportN = true;
          let hoverJ = String.fromCharCode(104,95,52,55,95,105,109,112,111,114,116,97,98,108,101,0);
         klevinO = friendsA > dycreatorQ.length;
         friendsA -= hoverJ.length;
         bgvipsportN = (75 <= ((!bgvipsportN ? 75 : hoverJ.length) & hoverJ.length));
         if (updatesM) {
            break;
         }
      } while ((klevinO) && updatesM);
      untick0 += `${searchu.length}`;
   if (renderd.includes(`${iconschedulev.length}`)) {
      iconschedulev = [1 >> (Math.min(4, Math.abs(footballfieldB)))];
   }
   if (!searchu.includes(`${contextR.size}`)) {
      searchu += `${controlsU * 2}`;
   }
   if (untick0.endsWith(`${yingg.length}`)) {
      untick0 = `${searchu.length + 1}`;
   }
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current]
  );

  const handlePlayPause = () => {
       let rewindP = 3;
    let diceW = 2.0;
    let awayteamfieldh = String.fromCharCode(118,95,57,50,95,98,105,110,97,114,121,0);
    let singaporeL: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,101,114,115,95,111,95,50,0),907], [String.fromCharCode(120,95,53,54,95,104,117,102,102,121,117,118,0),532], [String.fromCharCode(99,117,109,117,108,97,116,105,118,101,95,120,95,55,51,0),52]]);
    let arrowupc: Map<any, any> = new Map([[String.fromCharCode(99,108,108,99,95,104,95,51,56,0),548], [String.fromCharCode(106,95,55,52,95,105,110,102,108,97,116,101,0),323]]);
    let turn6 = String.fromCharCode(112,95,52,56,95,111,109,105,116,116,105,110,103,0);
    let contextb = String.fromCharCode(102,95,50,49,95,97,110,99,104,111,114,0);
    let exampleimagei = String.fromCharCode(100,101,115,105,114,101,100,95,118,95,55,49,0);
    let policyM = String.fromCharCode(99,111,108,111,114,95,121,95,50,56,0);
    let largesoundb: Array<any> = [383, 506, 238];
    let leakcheckerv = false;
    let unselectedJ = String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,95,97,95,49,50,0);
    let defaultplayerimgs = String.fromCharCode(108,95,51,49,95,97,118,105,115,121,110,116,104,0);
    let iconviewergif1 = true;
    let lessH = String.fromCharCode(111,95,57,48,95,115,105,109,117,108,99,97,115,116,0);
    let backD: Map<any, any> = new Map([[String.fromCharCode(102,95,54,49,95,110,117,109,101,114,111,0),false ], [String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,115,95,103,95,52,49,0),false ]]);
    let mintegral_: Array<any> = [269, 137, 159];
    let danger9 = String.fromCharCode(118,95,56,57,95,112,108,111,116,0);
    let viewerG = String.fromCharCode(116,95,49,95,99,111,118,114,0);
   let whistle8 = exampleimagei.length <= 9022317;
   do {
      exampleimagei += `${1 % (Math.max(rewindP, 3))}`;
      if (whistle8) {
         break;
      }
   } while (whistle8 && (awayteamfieldh != exampleimagei));
      unselectedJ += "1";
   let executorq = String.fromCharCode(49,95,51,53,105,97,122,119,98,97,0) == turn6;
   do {
      turn6 += `${awayteamfieldh.length % 3}`;
      if (executorq) {
         break;
      }
   } while (executorq && (contextb == turn6));
      contextb += "2";
   let mbbidC = 8702996 <= unselectedJ.length;
   do {
      unselectedJ = "3";
      if (mbbidC) {
         break;
      }
   } while (mbbidC && (1 >= singaporeL.size));
       let subin6: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,107,105,110,103,95,110,95,51,51,0),364], [String.fromCharCode(106,95,49,56,95,109,105,115,99,0),190]]);
       let flipper8 = 1.0;
      for (let f = 0; f < 1; f++) {
         flipper8 /= Math.max(5, parseFloat(`${subin6.size}`));
      }
         subin6 = new Map([[`${subin6.size}`, 2 >> (Math.min(1, Math.abs(subin6.size)))]]);
      let borderlessN = 9364097.0 <= flipper8;
      do {
          let mimoB = 3;
          let macauq: Map<any, any> = new Map([[String.fromCharCode(108,95,57,95,99,97,108,108,0),437], [String.fromCharCode(116,95,56,56,95,110,101,101,100,108,101,0),427], [String.fromCharCode(100,95,49,49,95,118,114,101,99,116,0),806]]);
         flipper8 += parseFloat(`${mimoB}`);
         mimoB ^= 3 >> (Math.min(3, Math.abs(macauq.size)));
         macauq.set(`${macauq.size}`, macauq.size);
         if (borderlessN) {
            break;
         }
      } while (borderlessN && (5.94 < flipper8));
          let libtob2 = 1.0;
          let iconarrowrightorangeE = 2.0;
         flipper8 *= parseFloat(`${1}`);
         libtob2 *= parseFloat(`${2}`);
         iconarrowrightorangeE *= parseFloat(`${parseInt(`${iconarrowrightorangeE}`) * 3}`);
         flipper8 *= parseFloat(`${parseInt(`${flipper8}`)}`);
         subin6.set(`${flipper8}`, 1);
      arrowupc.set(defaultplayerimgs, parseInt(`${diceW}`) - defaultplayerimgs.length);
   for (let e = 0; e < 3; e++) {
      singaporeL = new Map([[turn6, turn6.length | exampleimagei.length]]);
   }
   while ((rewindP + 5) > 1 || 5 > (rewindP + singaporeL.size)) {
      singaporeL.set(exampleimagei, rewindP % (Math.max(6, exampleimagei.length)));
      break;
   }

    clearTimeout(iconTimer.current);

   while (!turn6.endsWith(`${diceW}`)) {
      diceW *= ((leakcheckerv ? 5 : 1));
      break;
   }
   if (4 > singaporeL.size && 2 > (4 & singaporeL.size)) {
      singaporeL.set(defaultplayerimgs, defaultplayerimgs.length % 2);
   }
      exampleimagei += `${awayteamfieldh.length}`;
   let short__xj = 8525743 >= rewindP;
   do {
      rewindP *= 3;
      if (short__xj) {
         break;
      }
   } while (((rewindP << (Math.min(exampleimagei.length, 1))) == 2 && (rewindP << (Math.min(Math.abs(2), 4))) == 4) && short__xj);
   for (let j = 0; j < 3; j++) {
       let modeg = 2.0;
       let latnm = String.fromCharCode(116,95,52,55,95,105,110,116,116,121,112,101,115,0);
       let mailE = 5;
       let klevine = true;
       let editu: Array<any> = [684, 367, 466];
      let iconsharefriends2 = 8459422.0 <= modeg;
      do {
         modeg *= parseFloat(`${mailE}`);
         if (iconsharefriends2) {
            break;
         }
      } while (iconsharefriends2 && ((mailE / (Math.max(9, parseInt(`${modeg}`)))) < 1 || 1 < (1 - mailE)));
         latnm += `${latnm.length & editu.length}`;
       let unselectedm = 4.0;
         modeg /= Math.max(parseFloat(`${parseInt(`${unselectedm}`) >> (Math.min(4, Math.abs(1)))}`), 3);
      for (let z = 0; z < 3; z++) {
         modeg *= parseFloat(`${3 & editu.length}`);
      }
         editu.push(2);
      let iconsettingZ = modeg >= 5581040.0;
      do {
         modeg *= parseFloat(`${latnm.length / 1}`);
         if (iconsettingZ) {
            break;
         }
      } while (iconsettingZ && (latnm.endsWith(`${modeg}`)));
      let gifgoalbgo = 9511726.0 <= unselectedm;
      do {
         unselectedm /= Math.max(latnm.length & 1, 4);
         if (gifgoalbgo) {
            break;
         }
      } while ((1.14 > (unselectedm - 3.4) && 3.4 > unselectedm) && gifgoalbgo);
         klevine = 15 > mailE;
         latnm += "2";
         mailE /= Math.max(4, (3 << (Math.min(3, Math.abs((klevine ? 5 : 4))))));
      while (4 < latnm.length && klevine) {
          let reducerm = String.fromCharCode(100,95,52,49,95,118,105,100,101,111,115,116,114,101,97,109,0);
          let runtimeschedulerp = 5.0;
          let indicatorS = 3.0;
          let temperatureM: Map<any, any> = new Map([[String.fromCharCode(116,95,51,51,95,98,117,103,115,0),String.fromCharCode(108,95,57,48,95,105,110,103,101,116,97,100,100,114,0)], [String.fromCharCode(117,95,50,50,95,100,105,118,105,115,105,111,110,0),String.fromCharCode(115,101,97,114,99,104,105,110,103,95,51,95,56,52,0)], [String.fromCharCode(109,95,55,49,95,98,117,105,108,100,99,111,110,102,0),String.fromCharCode(100,105,118,105,100,111,114,95,50,95,53,57,0)]]);
         klevine = null == temperatureM.get(`${klevine}`);
         reducerm = `${parseInt(`${runtimeschedulerp}`)}`;
         indicatorS -= (String.fromCharCode(66,0) == reducerm ? parseInt(`${runtimeschedulerp}`) : reducerm.length);
         temperatureM.set(reducerm, reducerm.length + 2);
         break;
      }
      let middleware8 = unselectedm <= 7742232.0;
      do {
          let reactnativeultimatelistviewU = 4.0;
          let m_managerX = 1;
          let turndownw = String.fromCharCode(114,101,108,111,97,100,101,114,95,116,95,54,54,0);
         unselectedm /= Math.max(parseInt(`${reactnativeultimatelistviewU}`), 4);
         reactnativeultimatelistviewU -= (parseFloat(`${turndownw == String.fromCharCode(75,0) ? m_managerX : turndownw.length}`));
         m_managerX >>= Math.min(Math.abs(m_managerX ^ turndownw.length), 5);
         if (middleware8) {
            break;
         }
      } while (middleware8 && ((unselectedm / 2.98) == 1.51 && 1.84 == (unselectedm / 2.98)));
         modeg -= parseFloat(`${editu.length - 2}`);
      if (editu.length < 5) {
         editu.push(latnm.length);
      }
      defaultplayerimgs = `${(mailE | (leakcheckerv ? 2 : 1))}`;
   }
      awayteamfieldh = `${defaultplayerimgs.length << (Math.min(Math.abs(2), 2))}`;
      arrowupc = new Map([[`${arrowupc.size}`, (unselectedJ == String.fromCharCode(102,0) ? arrowupc.size : unselectedJ.length)]]);
   for (let k = 0; k < 3; k++) {
       let rootD = String.fromCharCode(115,110,110,105,100,95,97,95,49,49,0);
       let editw: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,105,110,103,95,119,95,49,48,48,0),568], [String.fromCharCode(98,95,57,54,95,114,101,102,101,114,101,110,99,101,100,0),973]]);
       let greym: Array<any> = [540, 2];
       let hometeamfieldl = 2.0;
      while ((3 | editw.size) <= 1 && 3 <= (3 | editw.size)) {
         editw = new Map([[`${editw.size}`, (rootD == String.fromCharCode(85,0) ? editw.size : rootD.length)]]);
         break;
      }
         rootD = `${(String.fromCharCode(122,0) == rootD ? rootD.length : editw.size)}`;
      for (let e = 0; e < 1; e++) {
         hometeamfieldl -= parseFloat(`${editw.size ^ 1}`);
      }
      while (rootD.length >= editw.size) {
          let agreement4 = String.fromCharCode(120,95,55,51,95,97,117,100,105,98,105,108,105,116,121,0);
         rootD = "3";
         agreement4 += `${1 | agreement4.length}`;
         break;
      }
      while (Array.from(editw.values()).includes(greym.length)) {
          let forwardG = String.fromCharCode(115,101,116,99,98,95,102,95,50,55,0);
          let tailp: Map<any, any> = new Map([[String.fromCharCode(97,95,57,55,95,119,114,105,116,101,0),true ], [String.fromCharCode(98,95,50,50,95,97,99,117,116,111,102,102,0),true ], [String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,57,95,52,54,0),true ]]);
          let targetb = false;
          let matchdetailbgL = true;
          let iconsaveimageJ = String.fromCharCode(108,97,110,103,95,52,95,50,56,0);
         editw = new Map([[`${greym.length}`, greym.length - iconsaveimageJ.length]]);
         forwardG = `${tailp.size}`;
         tailp = new Map([[`${matchdetailbgL}`, ((matchdetailbgL ? 3 : 3))]]);
         targetb = null == tailp.get(`${targetb}`);
         iconsaveimageJ += `${((targetb ? 4 : 4) ^ 2)}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
         editw = new Map([[`${editw.size}`, editw.size - 3]]);
      }
      while (rootD.length == editw.size) {
          let castingb = 0;
          let materialw = String.fromCharCode(118,95,51,52,95,114,101,102,108,101,99,116,0);
          let yingJ = true;
         editw = new Map([[`${greym.length}`, (String.fromCharCode(106,0) == rootD ? rootD.length : greym.length)]]);
         castingb /= Math.max(2, (castingb * (yingJ ? 1 : 2)));
         materialw = `${((yingJ ? 5 : 2))}`;
         break;
      }
         rootD = `${(rootD == String.fromCharCode(72,0) ? rootD.length : editw.size)}`;
         rootD = "3";
          let holderL: Array<any> = [658, 353, 835];
         greym.push(parseInt(`${hometeamfieldl}`) - greym.length);
         holderL = [2];
       let watcht: Array<any> = [872, 629, 922];
         greym = [greym.length + 1];
      contextb = `${policyM.length ^ parseInt(`${diceW}`)}`;
   }
    setShowIcon(true);

      awayteamfieldh += `${unselectedJ.length - 2}`;
   let libhermese = singaporeL.size >= 6044147;
   do {
       let userd = 5;
       let hoverz = String.fromCharCode(104,95,55,50,95,112,114,105,110,116,101,100,0);
       let x_countO = false;
       let modulesf = 0.0;
       let gestureY = 3;
      while (hoverz.length <= gestureY) {
          let relatedf = 4.0;
          let ranka = 4;
         hoverz = `${parseInt(`${modulesf}`) >> (Math.min(4, Math.abs(ranka)))}`;
         relatedf += parseFloat(`${3}`);
         ranka %= Math.max(parseInt(`${relatedf}`) - parseInt(`${relatedf}`), 5);
         break;
      }
       let megaphonef = 3.0;
       let nextL = 2.0;
         hoverz += `${parseInt(`${megaphonef}`) / 1}`;
      let reddownarrowK = userd <= 8974542;
      do {
         userd <<= Math.min(Math.abs(parseInt(`${megaphonef}`) | 1), 4);
         if (reddownarrowK) {
            break;
         }
      } while ((!hoverz.includes(`${userd}`)) && reddownarrowK);
          let delegate_m4 = 2.0;
          let mountingY = String.fromCharCode(100,95,54,49,95,97,115,111,99,0);
          let editc: Array<any> = [570, 236];
         x_countO = (megaphonef / (Math.max(hoverz.length, 3))) <= 55.6;
         delegate_m4 -= parseFloat(`${parseInt(`${delegate_m4}`) << (Math.min(editc.length, 1))}`);
         mountingY += "1";
         editc.push(parseInt(`${delegate_m4}`));
      while ((3.44 + modulesf) == 1.57) {
         modulesf *= parseInt(`${nextL}`) >> (Math.min(1, Math.abs(parseInt(`${modulesf}`))));
         break;
      }
      let icondefaultthumbnailm = 7302637 <= userd;
      do {
         userd <<= Math.min(2, Math.abs(parseInt(`${modulesf}`) >> (Math.min(3, Math.abs(2)))));
         if (icondefaultthumbnailm) {
            break;
         }
      } while (icondefaultthumbnailm && ((hoverz.length % (Math.max(3, 5))) == 3));
          let iconwatchj = String.fromCharCode(109,97,114,103,105,110,115,95,100,95,49,51,0);
         gestureY /= Math.max(1, 1);
         iconwatchj = `${3 - iconwatchj.length}`;
      for (let y = 0; y < 1; y++) {
         userd %= Math.max(2 % (Math.max(userd, 9)), 4);
      }
          let videojsZ = 1.0;
         megaphonef *= userd >> (Math.min(Math.abs(parseInt(`${nextL}`)), 1));
         videojsZ *= parseFloat(`${1 + parseInt(`${videojsZ}`)}`);
         gestureY *= hoverz.length;
      singaporeL = new Map([[contextb, contextb.length & 2]]);
      if (libhermese) {
         break;
      }
   } while (libhermese && (!Array.from(singaporeL.values()).includes(diceW)));
   if (!leakcheckerv) {
       let actionsC = String.fromCharCode(114,101,99,111,109,112,117,116,101,95,105,95,54,56,0);
          let gemfileq = 3.0;
          let crossD = true;
          let basketballawayteam2 = true;
         actionsC = `${((crossD ? 3 : 3) + parseInt(`${gemfileq}`))}`;
         gemfileq *= parseFloat(`${1}`);
         crossD = !basketballawayteam2;
      for (let p = 0; p < 3; p++) {
         actionsC += `${actionsC.length}`;
      }
          let dragx = String.fromCharCode(114,101,115,101,114,118,101,100,95,112,95,49,53,0);
          let teamdetailsbgf = String.fromCharCode(99,95,57,55,95,118,101,108,97,112,115,101,100,116,105,109,101,114,0);
         actionsC = `${dragx.length << (Math.min(actionsC.length, 2))}`;
         dragx = "3";
         teamdetailsbgf += "2";
      arrowupc = new Map([[`${iconviewergif1}`, 1]]);
   }
      iconviewergif1 = policyM.length >= parseInt(`${diceW}`);
   if ((largesoundb.length - diceW) >= 5.27) {
      diceW += arrowupc.size << (Math.min(exampleimagei.length, 1));
   }
      awayteamfieldh += `${(parseInt(`${diceW}`) % (Math.max(3, (leakcheckerv ? 5 : 2))))}`;
   for (let u = 0; u < 3; u++) {
      awayteamfieldh += "1";
   }
   if ((arrowupc.size / (Math.max(exampleimagei.length, 9))) == 3) {
       let hoverY = String.fromCharCode(100,101,110,111,105,115,101,114,95,55,95,56,53,0);
       let matchU = String.fromCharCode(109,111,100,101,95,56,95,50,54,0);
       let predictionactiveD = String.fromCharCode(115,99,116,112,117,116,105,108,95,116,95,50,55,0);
       let appsR = String.fromCharCode(112,114,101,115,101,108,101,99,116,95,99,95,53,55,0);
       let bridgek: Array<any> = [921, 462, 798];
         hoverY = `${(String.fromCharCode(108,0) == appsR ? appsR.length : bridgek.length)}`;
         bridgek = [2];
         matchU = `${matchU.length}`;
       let incidentm = String.fromCharCode(114,95,54,56,95,100,101,99,97,121,0);
       let gesturesI = String.fromCharCode(108,95,52,50,95,99,111,110,116,97,105,110,101,114,115,0);
          let subinu = 0.0;
         predictionactiveD = "2";
         subinu /= Math.max(parseFloat(`${3}`), 3);
      while (2 <= (bridgek.length << (Math.min(Math.abs(2), 3))) && 2 <= (bridgek.length << (Math.min(matchU.length, 1)))) {
         bridgek.push(hoverY.length);
         break;
      }
          let sharev = String.fromCharCode(120,95,50,48,95,115,101,114,105,102,0);
          let plus9 = 2;
         incidentm += `${sharev.length}`;
         sharev += `${plus9}`;
      while (appsR.endsWith(`${predictionactiveD.length}`)) {
         appsR = `${3 ^ hoverY.length}`;
         break;
      }
       let hoverB: Array<any> = [String.fromCharCode(109,111,114,101,95,106,95,51,51,0), String.fromCharCode(99,105,114,99,108,101,115,95,48,95,54,53,0)];
       let libglog2: Array<any> = [980, 746];
      if ((2 & hoverB.length) >= 5 && 5 >= (hoverB.length & 2)) {
         hoverB = [hoverB.length / 1];
      }
      let mbnative_ = String.fromCharCode(119,53,101,110,106,101,115,102,0) == gesturesI;
      do {
         gesturesI = `${3 & hoverB.length}`;
         if (mbnative_) {
            break;
         }
      } while (mbnative_ && (gesturesI.endsWith(`${hoverB.length}`)));
      let membershipt = 6075698 <= hoverB.length;
      do {
         hoverB = [matchU.length ^ appsR.length];
         if (membershipt) {
            break;
         }
      } while ((5 < (5 ^ hoverB.length)) && membershipt);
         hoverY += `${incidentm.length}`;
          let change5 = 3;
          let countdown3 = String.fromCharCode(97,95,51,56,95,108,111,110,103,98,105,103,0);
         bridgek.push(appsR.length);
         change5 &= 2;
         countdown3 += `${(String.fromCharCode(77,0) == countdown3 ? change5 : countdown3.length)}`;
         libglog2 = [(incidentm == String.fromCharCode(49,0) ? hoverB.length : incidentm.length)];
      arrowupc = new Map([[`${bridgek.length}`, (String.fromCharCode(83,0) == defaultplayerimgs ? defaultplayerimgs.length : bridgek.length)]]);
   }
    if (isPause) {

       let userf: Array<any> = [336, 860];
       let scheduleZ: Array<any> = [833, 950];
       let shrink2 = 5.0;
      while ((parseFloat(`${userf.length}`) / (Math.max(1, shrink2))) == 3.44) {
         shrink2 /= Math.max(2, parseFloat(`${scheduleZ.length | parseInt(`${shrink2}`)}`));
         break;
      }
      for (let r = 0; r < 2; r++) {
         scheduleZ = [scheduleZ.length];
      }
         scheduleZ = [scheduleZ.length << (Math.min(Math.abs(2), 3))];
      while (userf.includes(scheduleZ.length)) {
         scheduleZ = [3];
         break;
      }
      while (4 <= (userf.length - scheduleZ.length) && 4 <= (scheduleZ.length - 4)) {
          let infoW = String.fromCharCode(118,114,101,103,105,111,110,95,117,95,51,54,0);
          let headery = String.fromCharCode(102,95,49,54,95,98,115,111,110,0);
         scheduleZ.push(scheduleZ.length & parseInt(`${shrink2}`));
         infoW += `${infoW.length}`;
         headery += `${1 + headery.length}`;
         break;
      }
      let huaweii = userf.length >= 6240438;
      do {
         userf = [3];
         if (huaweii) {
            break;
         }
      } while ((4 > userf.length) && huaweii);
          let valuesl: Array<any> = [572, 495];
          let iconviewergifN = String.fromCharCode(113,95,49,50,0);
          let libapminsightaw = String.fromCharCode(105,95,53,95,114,105,110,103,116,111,110,101,115,0);
         scheduleZ.push(libapminsightaw.length);
         valuesl = [valuesl.length + iconviewergifN.length];
         iconviewergifN = `${valuesl.length}`;
         libapminsightaw += `${valuesl.length + 2}`;
         userf = [scheduleZ.length];
      for (let w = 0; w < 3; w++) {
         shrink2 += parseFloat(`${2 & parseInt(`${shrink2}`)}`);
      }
      singaporeL = new Map([[`${singaporeL.size}`, 1 * singaporeL.size]]);
       let libavutil5 = String.fromCharCode(101,110,100,105,97,110,110,101,115,115,95,111,95,50,0);
          let sidet: Map<any, any> = new Map([[String.fromCharCode(103,95,52,49,95,101,114,114,115,116,114,0),957], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,48,95,57,54,0),250]]);
          let splashH = true;
         libavutil5 = `${((splashH ? 2 : 5) | libavutil5.length)}`;
         sidet.set(`${sidet.size}`, sidet.size % (Math.max(6, sidet.size)));
         splashH = 36 == sidet.size;
      if (4 >= libavutil5.length || libavutil5.length >= 4) {
          let iconeditM = true;
          let flyer4 = String.fromCharCode(102,95,53,48,95,115,112,97,114,107,115,0);
          let homeplayerh = false;
         libavutil5 += `${libavutil5.length}`;
         iconeditM = !flyer4.startsWith(`${iconeditM}`);
         flyer4 = `${((iconeditM ? 2 : 3) * flyer4.length)}`;
         homeplayerh = (((!iconeditM ? 14 : flyer4.length) << (Math.min(flyer4.length, 3))) == 14);
      }
      let mimep = 7826932 <= libavutil5.length;
      do {
         libavutil5 = `${libavutil5.length >> (Math.min(libavutil5.length, 2))}`;
         if (mimep) {
            break;
         }
      } while ((!libavutil5.startsWith(libavutil5)) && mimep);
      awayteamfieldh += `${1 & singaporeL.size}`;
      leakcheckerv = defaultplayerimgs == unselectedJ;
   let halffieldimageu = unselectedJ == String.fromCharCode(112,112,97,52,120,112,97,115,0);
   do {
      unselectedJ += `${policyM.length / (Math.max(unselectedJ.length, 8))}`;
      if (halffieldimageu) {
         break;
      }
   } while (halffieldimageu && (!unselectedJ.includes(`${policyM.length}`)));
   while (policyM.length > 2) {
      defaultplayerimgs = `${unselectedJ.length}`;
      break;
   }
       let zhuboJ = 1;
      for (let d = 0; d < 1; d++) {
          let activec = 3.0;
          let frame_sxe = 3.0;
         zhuboJ |= zhuboJ << (Math.min(4, Math.abs(2)));
         activec += 2;
         frame_sxe += parseFloat(`${3}`);
      }
      if (4 < zhuboJ) {
          let foregroundE = String.fromCharCode(104,95,52,51,95,115,101,116,99,98,0);
          let volumec = 5.0;
          let mountingg: Map<any, any> = new Map([[String.fromCharCode(109,105,110,117,115,95,116,95,54,49,0),146], [String.fromCharCode(106,95,49,50,95,115,116,97,114,116,115,0),351], [String.fromCharCode(114,115,99,99,95,114,95,57,54,0),680]]);
         zhuboJ *= 1 ^ foregroundE.length;
         foregroundE += `${parseInt(`${volumec}`) >> (Math.min(Math.abs(3), 2))}`;
         volumec -= mountingg.size | parseInt(`${volumec}`);
         mountingg = new Map([[`${mountingg.size}`, mountingg.size]]);
      }
      for (let n = 0; n < 2; n++) {
          let searchbarb = 0;
          let basketballiconQ: Array<any> = [778, 296];
          let showlessW: Array<any> = [693, 373, 152];
          let typesX: Array<any> = [26, 133];
          let cedbadcebfbfbfbcfecbch = String.fromCharCode(122,95,51,56,95,105,100,101,110,116,105,116,121,0);
         zhuboJ *= typesX.length;
         searchbarb += 3;
         basketballiconQ = [basketballiconQ.length << (Math.min(5, Math.abs(searchbarb)))];
         showlessW.push(showlessW.length & 3);
         typesX = [basketballiconQ.length | showlessW.length];
         cedbadcebfbfbfbcfecbch = "2";
      }
      diceW += exampleimagei.length;
      lessH += `${lessH.length}`;
      policyM = `${unselectedJ.length << (Math.min(4, largesoundb.length))}`;
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = () => {
       let frame_3ui: Array<any> = [519, 734, 899];
    let sellmathbackgroundL = 0.0;
    let reddownarrowe = 1;
    let main_lK = String.fromCharCode(121,95,56,57,95,103,99,109,0);
    let minivodL = String.fromCharCode(110,95,49,51,95,109,111,118,101,115,0);
    let manifestc: Map<any, any> = new Map([[String.fromCharCode(99,95,57,57,95,116,115,114,0),806], [String.fromCharCode(97,108,103,111,114,105,116,104,109,95,99,95,57,53,0),345]]);
    let nbatrophyk = String.fromCharCode(109,111,110,116,103,111,109,101,114,121,95,109,95,53,48,0);
    let phoneshared = String.fromCharCode(103,95,54,55,95,115,112,108,97,116,0);
   let informationi = manifestc.size <= 5943330;
   do {
      manifestc.set(`${sellmathbackgroundL}`, parseInt(`${sellmathbackgroundL}`) % 3);
      if (informationi) {
         break;
      }
   } while (informationi && (1 <= manifestc.size));
       let iconclosewhiteY = 3.0;
       let ballL = String.fromCharCode(108,111,99,107,101,100,95,56,95,53,54,0);
       let h_hash8 = 5.0;
          let carousell: Array<any> = [205, 813, 789];
          let datap = String.fromCharCode(111,95,52,95,118,112,120,100,101,99,0);
         h_hash8 -= parseFloat(`${parseInt(`${iconclosewhiteY}`)}`);
         carousell = [datap.length & carousell.length];
         datap = "3";
      frame_3ui.push(1);
      minivodL = `${reddownarrowe}`;
       let windo = 4;
         windo *= windo;
      let analyticb = windo <= 9308277;
      do {
         windo += 1 << (Math.min(1, Math.abs(windo)));
         if (analyticb) {
            break;
         }
      } while ((windo < 5) && analyticb);
          let malaysia3 = 2;
          let chinasameN = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,120,95,53,57,0);
         windo += 3 * malaysia3;
         malaysia3 -= chinasameN.length & 2;
         chinasameN += `${2 | chinasameN.length}`;
      manifestc.set(main_lK, main_lK.length >> (Math.min(Math.abs(3), 5)));
   if (nbatrophyk.endsWith(`${sellmathbackgroundL}`)) {
      nbatrophyk = `${1 ^ frame_3ui.length}`;
   }
      sellmathbackgroundL *= parseInt(`${sellmathbackgroundL}`);
       let auto_tP = true;
       let rankx = String.fromCharCode(102,95,51,52,95,104,101,97,100,101,114,0);
       let predictionbuttonk = String.fromCharCode(99,111,108,108,97,116,105,110,103,95,105,95,49,57,0);
      while (auto_tP) {
          let gestures: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,121,95,53,95,57,52,0),186], [String.fromCharCode(97,108,116,101,114,97,98,108,101,95,117,95,57,55,0),650], [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,104,95,56,0),87]]);
         rankx += `${((auto_tP ? 5 : 2) & 2)}`;
         gestures.set(`${gestures.size}`, gestures.size + 2);
         break;
      }
       let defaultplayerimgH = 4;
       let strs = 4;
      if (!auto_tP && 1 == predictionbuttonk.length) {
         predictionbuttonk += `${strs + 2}`;
      }
      let referrerl = rankx.length <= 8544387;
      do {
          let libfbjnir = 2;
          let emojit = String.fromCharCode(107,95,55,49,95,98,117,102,102,101,114,115,0);
          let phoneshareH = 0.0;
          let redirectW = 2.0;
         rankx = "1";
         libfbjnir <<= Math.min(Math.abs(1), 5);
         emojit += `${parseInt(`${phoneshareH}`)}`;
         phoneshareH += 1;
         redirectW /= Math.max(2, (String.fromCharCode(105,0) == emojit ? parseInt(`${phoneshareH}`) : emojit.length));
         if (referrerl) {
            break;
         }
      } while (referrerl && (5 < (rankx.length - 1)));
         auto_tP = strs == 32;
      if (!rankx.endsWith(`${auto_tP}`)) {
         auto_tP = rankx.length > 91;
      }
         predictionbuttonk = `${strs}`;
      while (predictionbuttonk.length > 1) {
          let closeC = true;
          let bellm: Array<any> = [256, 864];
         predictionbuttonk = `${(predictionbuttonk == String.fromCharCode(80,0) ? predictionbuttonk.length : (auto_tP ? 3 : 2))}`;
         closeC = bellm.includes(closeC);
         bellm.push(3);
         break;
      }
         strs &= 1;
      nbatrophyk += "1";
   for (let g = 0; g < 3; g++) {
      reddownarrowe /= Math.max(reddownarrowe % 2, 5);
   }

    if (videoRef.current) {

   while (main_lK.includes(nbatrophyk)) {
       let feedback2 = 5;
       let orangeuparrowR = 0;
       let aboutp: Map<any, any> = new Map([[String.fromCharCode(106,95,55,54,95,105,110,116,101,108,0),String.fromCharCode(111,102,102,115,95,113,95,56,56,0)], [String.fromCharCode(115,112,97,119,110,97,98,108,101,95,57,95,57,55,0),String.fromCharCode(115,117,98,109,111,100,117,108,101,95,114,95,57,56,0)]]);
       let cricketG = 4.0;
       let analyticJ = false;
      for (let s = 0; s < 2; s++) {
         cricketG *= (parseFloat(`${(analyticJ ? 2 : 4) + aboutp.size}`));
      }
      if (3 < (1 & orangeuparrowR)) {
         feedback2 /= Math.max(2 * feedback2, 2);
      }
      let gradleD = 8686741 <= feedback2;
      do {
         feedback2 %= Math.max(aboutp.size ^ parseInt(`${cricketG}`), 3);
         if (gradleD) {
            break;
         }
      } while (gradleD && (orangeuparrowR < feedback2));
      for (let r = 0; r < 3; r++) {
          let airbnbstarZ: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,103,101,110,95,121,95,54,49,0),false ], [String.fromCharCode(115,116,114,105,110,103,98,117,102,102,101,114,95,98,95,55,52,0),false ]]);
          let iconscheduleU = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,99,95,51,48,0);
          let e_countq = String.fromCharCode(118,95,50,57,95,112,105,99,109,101,109,115,101,116,0);
          let iconeditd = 0.0;
         orangeuparrowR &= (String.fromCharCode(65,0) == e_countq ? parseInt(`${cricketG}`) : e_countq.length);
         airbnbstarZ = new Map([[`${airbnbstarZ.size}`, parseInt(`${iconeditd}`)]]);
         iconscheduleU += `${1 + parseInt(`${iconeditd}`)}`;
      }
      let iconarrowleftE = 8128602 <= feedback2;
      do {
         feedback2 ^= 1;
         if (iconarrowleftE) {
            break;
         }
      } while ((feedback2 > 3) && iconarrowleftE);
       let videobufferloading5 = 1;
       let volume8 = 1;
         feedback2 /= Math.max(5, parseInt(`${cricketG}`) - 1);
       let current5 = 0;
       let predictionbannersharedH = 3;
          let iconorientationT = String.fromCharCode(120,109,108,115,95,115,95,55,54,0);
         orangeuparrowR *= predictionbannersharedH * 2;
         iconorientationT = `${(iconorientationT == String.fromCharCode(80,0) ? iconorientationT.length : iconorientationT.length)}`;
      while ((volume8 * current5) > 4 && (current5 * volume8) > 4) {
          let iconlogout5 = String.fromCharCode(120,95,56,53,95,111,114,105,103,110,97,108,0);
          let runtimeschedulero = String.fromCharCode(97,118,103,120,95,117,95,52,55,0);
          let hookh = String.fromCharCode(122,95,54,95,111,118,101,114,97,108,108,0);
          let predictionbannerz = String.fromCharCode(121,95,54,53,95,108,114,111,110,100,0);
          let typesF = 5;
         current5 ^= 2;
         iconlogout5 += `${typesF}`;
         runtimeschedulero = "2";
         hookh += `${iconlogout5.length + 2}`;
         predictionbannerz += `${runtimeschedulero.length + typesF}`;
         break;
      }
          let statisticsj = 3.0;
          let libnmsF = 4.0;
         aboutp = new Map([[`${aboutp.size}`, volume8]]);
         statisticsj -= parseFloat(`${parseInt(`${libnmsF}`)}`);
         current5 >>= Math.min(3, Math.abs(1));
      for (let c = 0; c < 2; c++) {
         videobufferloading5 %= Math.max(2, predictionbannersharedH - 1);
      }
      while (1.33 == cricketG) {
          let iconclosewhitebgP = String.fromCharCode(119,95,50,51,0);
          let thailandL = false;
         volume8 &= videobufferloading5 * current5;
         iconclosewhitebgP = `${((thailandL ? 3 : 2))}`;
         thailandL = (((thailandL ? iconclosewhitebgP.length : 75) & iconclosewhitebgP.length) <= 75);
         break;
      }
       let orangeZ = String.fromCharCode(103,114,97,121,102,95,115,95,55,57,0);
      main_lK = `${feedback2 | nbatrophyk.length}`;
      break;
   }
       let confirmationr: Map<any, any> = new Map([[String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,111,95,49,57,0),825], [String.fromCharCode(105,110,117,115,101,95,53,95,55,50,0),21]]);
       let stringsD: Map<any, any> = new Map([[String.fromCharCode(102,95,54,52,95,114,115,97,122,0),String.fromCharCode(97,114,103,98,105,95,52,95,51,55,0)], [String.fromCharCode(105,97,116,95,117,95,54,53,0),String.fromCharCode(101,95,55,49,95,109,97,112,115,116,114,105,110,103,0)], [String.fromCharCode(104,95,53,52,95,98,114,105,100,103,101,100,0),String.fromCharCode(102,97,116,101,95,100,95,49,57,0)]]);
         confirmationr = new Map([[`${confirmationr.size}`, stringsD.size & confirmationr.size]]);
          let nodeB = true;
         stringsD.set(`${nodeB}`, stringsD.size);
          let libavutil9 = true;
         stringsD = new Map([[`${stringsD.size}`, stringsD.size | confirmationr.size]]);
         libavutil9 = !libavutil9;
          let alerto = 0.0;
          let filled_ = 4;
         stringsD = new Map([[`${alerto}`, 2 >> (Math.min(Math.abs(parseInt(`${alerto}`)), 2))]]);
         filled_ -= filled_ - filled_;
          let fullscreenmink = 2;
          let matchesu = String.fromCharCode(110,105,100,115,95,49,95,56,54,0);
          let connectionY = 2.0;
         confirmationr.set(matchesu, (String.fromCharCode(78,0) == matchesu ? matchesu.length : stringsD.size));
         fullscreenmink ^= parseInt(`${connectionY}`);
         connectionY *= parseFloat(`${parseInt(`${connectionY}`) ^ 2}`);
         stringsD.set(`${confirmationr.size}`, stringsD.size);
      reddownarrowe += confirmationr.size << (Math.min(Math.abs(3), 5));
   for (let n = 0; n < 2; n++) {
       let footballfiledlayout8 = 1;
       let predictionbannert = 5;
         footballfiledlayout8 += 1;
         predictionbannert -= 3;
      for (let z = 0; z < 3; z++) {
         predictionbannert %= Math.max(5, predictionbannert ^ footballfiledlayout8);
      }
      for (let x = 0; x < 1; x++) {
          let downloader0 = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,104,95,48,0);
          let expired1 = 4.0;
         predictionbannert <<= Math.min(downloader0.length, 3);
         downloader0 = `${parseInt(`${expired1}`)}`;
      }
      while ((predictionbannert << (Math.min(Math.abs(4), 2))) <= 3 || (footballfiledlayout8 << (Math.min(Math.abs(4), 1))) <= 2) {
          let reactnativeratingsm: Array<any> = [725, 455, 560];
          let downarrowe: Map<any, any> = new Map([[String.fromCharCode(108,97,117,110,99,104,101,115,95,119,95,57,48,0),59], [String.fromCharCode(101,120,116,114,97,95,55,95,54,54,0),38]]);
          let iconrightorange9 = String.fromCharCode(119,105,116,104,95,48,95,54,48,0);
          let scorepopsoundn = 5.0;
          let anythinkM = 4;
         predictionbannert |= downarrowe.size;
         reactnativeratingsm = [iconrightorange9.length >> (Math.min(2, reactnativeratingsm.length))];
         downarrowe.set(`${anythinkM}`, reactnativeratingsm.length * 2);
         iconrightorange9 += "2";
         scorepopsoundn /= Math.max(1, parseFloat(`${1}`));
         anythinkM += iconrightorange9.length;
         break;
      }
          let iconclosewhitewithbgk = 2.0;
          let volumef = 0.0;
         footballfiledlayout8 <<= Math.min(5, Math.abs(parseInt(`${iconclosewhitewithbgk}`)));
         volumef *= parseFloat(`${parseInt(`${volumef}`)}`);
      minivodL = "1";
   }
   if (minivodL.length > parseInt(`${sellmathbackgroundL}`)) {
       let react8: Map<any, any> = new Map([[String.fromCharCode(117,110,105,113,117,101,95,119,95,51,56,0),265], [String.fromCharCode(112,97,117,115,101,100,95,122,95,55,56,0),659], [String.fromCharCode(114,95,49,49,95,117,110,100,101,114,108,121,105,110,103,0),701]]);
       let mintegralN: Array<any> = [604, 711, 795];
       let imagenomoredataM = String.fromCharCode(119,95,53,51,95,110,97,109,101,100,0);
       let index_ = String.fromCharCode(99,116,105,109,101,95,53,95,54,0);
      for (let k = 0; k < 1; k++) {
         mintegralN = [3 / (Math.max(8, imagenomoredataM.length))];
      }
      let smallorangemann = 7096197 >= mintegralN.length;
      do {
          let greytickz = 5;
         mintegralN.push(index_.length & 1);
         greytickz ^= greytickz;
         if (smallorangemann) {
            break;
         }
      } while ((3 <= (2 & index_.length) || (2 & index_.length) <= 1) && smallorangemann);
          let holderS: Array<any> = [520, 860];
          let codegen0 = String.fromCharCode(105,110,100,105,99,101,115,95,120,95,57,54,0);
          let expandI = String.fromCharCode(104,95,55,55,95,100,105,114,97,99,0);
         imagenomoredataM += `${2 & codegen0.length}`;
         holderS = [expandI.length];
         codegen0 = "3";
         expandI = `${holderS.length * 1}`;
      while (5 > index_.length || 5 > imagenomoredataM.length) {
          let inouttargetredk = String.fromCharCode(98,108,111,99,107,104,97,115,104,95,108,95,57,49,0);
          let package_pr = String.fromCharCode(110,111,110,98,108,111,99,107,105,110,103,95,115,95,54,0);
          let usernames: Map<any, any> = new Map([[String.fromCharCode(116,95,54,0),false ], [String.fromCharCode(97,95,53,55,95,99,108,111,115,101,100,0),false ], [String.fromCharCode(109,97,115,107,105,110,103,95,117,95,57,56,0),true ]]);
         imagenomoredataM = `${package_pr.length}`;
         inouttargetredk = `${inouttargetredk.length}`;
         package_pr += `${inouttargetredk.length % 1}`;
         usernames = new Map([[`${usernames.size}`, usernames.size]]);
         break;
      }
      let libhermesx = mintegralN.length >= 6049843;
      do {
         mintegralN.push(3 - imagenomoredataM.length);
         if (libhermesx) {
            break;
         }
      } while (((mintegralN.length / (Math.max(react8.size, 8))) > 3 && 3 > (mintegralN.length / (Math.max(react8.size, 7)))) && libhermesx);
      while ((index_.length / 3) < 2 || 4 < (react8.size / 3)) {
         react8.set(index_, mintegralN.length);
         break;
      }
          let aboutS = String.fromCharCode(97,98,103,114,95,52,95,49,52,0);
          let unselected1 = true;
          let middleH: Map<any, any> = new Map([[String.fromCharCode(110,95,55,49,95,114,101,118,111,107,101,0),480], [String.fromCharCode(108,95,57,51,95,99,111,110,115,111,108,101,0),437], [String.fromCharCode(109,117,108,116,105,101,110,100,95,54,95,57,55,0),11]]);
         react8 = new Map([[`${middleH.size}`, (aboutS == String.fromCharCode(53,0) ? aboutS.length : middleH.size)]]);
         unselected1 = (!unselected1 ? !unselected1 : !unselected1);
      while ((mintegralN.length * 1) < 5 || 3 < (react8.size * 1)) {
         react8 = new Map([[`${mintegralN.length}`, mintegralN.length | index_.length]]);
         break;
      }
         mintegralN.push(imagenomoredataM.length << (Math.min(Math.abs(1), 2)));
      while (4 == (2 % (Math.max(9, react8.size))) && 2 == (imagenomoredataM.length % (Math.max(8, react8.size)))) {
         imagenomoredataM = `${react8.size}`;
         break;
      }
       let megaphone8 = 0.0;
          let placeholderY: Map<any, any> = new Map([[String.fromCharCode(111,118,112,97,103,101,95,121,95,57,52,0),479], [String.fromCharCode(99,104,101,99,107,95,51,95,56,53,0),688]]);
          let imagenomoredataR: Map<any, any> = new Map([[String.fromCharCode(98,97,103,95,116,95,57,48,0),114], [String.fromCharCode(103,95,54,53,95,100,105,103,101,115,116,98,121,111,98,106,0),716]]);
          let mailq = String.fromCharCode(99,97,110,111,110,95,48,95,49,51,0);
         react8 = new Map([[`${placeholderY.size}`, 3]]);
         placeholderY.set(mailq, (mailq == String.fromCharCode(99,0) ? imagenomoredataR.size : mailq.length));
         imagenomoredataR = new Map([[`${imagenomoredataR.size}`, 1 & imagenomoredataR.size]]);
      minivodL += `${frame_3ui.length * 1}`;
   }
      nbatrophyk += `${nbatrophyk.length}`;
      main_lK = `${reddownarrowe & 1}`;
       let selectionG = 5.0;
      while (selectionG < selectionG) {
         selectionG /= Math.max(parseFloat(`${parseInt(`${selectionG}`) % (Math.max(10, parseInt(`${selectionG}`)))}`), 3);
         break;
      }
         selectionG /= Math.max(2, parseFloat(`${2}`));
          let albumV: Array<any> = [523, 650];
          let groupm: Array<any> = [430, 756, 817];
          let audienceO: Array<any> = [658, 508, 810];
         selectionG -= parseFloat(`${2}`);
         albumV.push(audienceO.length);
         groupm.push(groupm.length / 1);
         audienceO.push(audienceO.length >> (Math.min(Math.abs(1), 2)));
      minivodL = `${3 & nbatrophyk.length}`;
   let injuryS = sellmathbackgroundL <= 9759367.0;
   do {
      sellmathbackgroundL -= 2;
      if (injuryS) {
         break;
      }
   } while (injuryS && (minivodL.length < parseInt(`${sellmathbackgroundL}`)));
      videoRef.current.seek(currentDuration);
    }
  };

  const handleLoad = (meta: any) => {
    setDuration(meta.duration);
  };

  const redirectVod = () => {
       let gradle6: Array<any> = [String.fromCharCode(109,106,112,101,103,106,112,101,103,95,56,95,50,57,0), String.fromCharCode(102,105,108,116,95,101,95,49,51,0), String.fromCharCode(105,110,116,101,110,116,105,111,110,95,53,95,52,0)];
    let telegramk: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,100,95,50,95,51,51,0),961], [String.fromCharCode(116,101,120,116,117,114,101,95,113,95,56,52,0),790]]);
    let philippineso = 0;
    let mergerG = String.fromCharCode(114,101,97,100,105,110,105,116,95,57,95,50,54,0);
    let libcxxcomponentsM = true;
    let libavformatJ = false;
    let giftr = String.fromCharCode(109,97,120,98,105,116,114,97,116,101,95,52,95,51,48,0);
    let usernamee = false;
    let libavdevicei = 2.0;
    let roomh: Array<any> = [String.fromCharCode(115,104,97,108,108,111,119,95,115,95,54,55,0), String.fromCharCode(118,95,56,57,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0), String.fromCharCode(102,114,97,109,101,114,95,101,95,52,51,0)];
      libavformatJ = libcxxcomponentsM;
   let nnewsT = String.fromCharCode(115,122,99,104,0) == giftr;
   do {
      giftr = `${telegramk.size / 2}`;
      if (nnewsT) {
         break;
      }
   } while (nnewsT && (1 > giftr.length || !usernamee));

    if (isBodan) {

       let entry0 = String.fromCharCode(115,95,57,57,95,105,110,100,101,111,100,97,116,97,0);
       let mimeG = String.fromCharCode(103,111,111,100,95,114,95,53,53,0);
       let libfabricjnij = 0.0;
         libfabricjnij += entry0.length;
         mimeG += `${mimeG.length}`;
       let reactnavigationu = 0.0;
       let binddatasf = 1.0;
         libfabricjnij -= parseInt(`${libfabricjnij}`);
      for (let p = 0; p < 3; p++) {
          let combinedX = String.fromCharCode(99,97,108,99,117,97,108,116,101,95,102,95,57,54,0);
          let rank6 = String.fromCharCode(97,115,115,101,109,98,108,121,95,104,95,51,50,0);
         mimeG += `${mimeG.length * 2}`;
         combinedX += `${rank6.length * 1}`;
         rank6 = `${2 & combinedX.length}`;
      }
       let strings0 = String.fromCharCode(110,110,109,111,100,95,101,95,53,50,0);
       let xvodo = String.fromCharCode(109,105,103,104,116,95,105,95,51,49,0);
      if (binddatasf >= 2.26) {
          let contextz = 5;
          let iconarrowrightwhiteB: Array<any> = [String.fromCharCode(108,95,55,57,95,118,101,114,116,0), String.fromCharCode(104,97,115,104,102,114,101,101,100,101,115,116,114,111,121,95,105,95,55,0), String.fromCharCode(117,95,50,53,0)];
         strings0 += `${parseInt(`${libfabricjnij}`)}`;
         contextz -= contextz % (Math.max(iconarrowrightwhiteB.length, 10));
         iconarrowrightwhiteB = [3 ^ contextz];
      }
       let iconarrowleftW = true;
          let shootyesgoali: Map<any, any> = new Map([[String.fromCharCode(113,95,52,50,95,97,99,107,101,100,0),String.fromCharCode(107,95,52,48,95,106,117,115,116,105,102,105,101,100,0)], [String.fromCharCode(112,95,52,49,95,99,104,101,98,121,115,104,101,118,0),String.fromCharCode(117,114,108,100,101,99,111,100,101,95,121,95,52,49,0)], [String.fromCharCode(103,95,52,50,95,100,115,116,0),String.fromCharCode(102,105,114,115,116,108,105,110,101,95,113,95,56,53,0)]]);
          let notificationo = true;
          let nalyticsb: Array<any> = [839, 475, 268];
         libfabricjnij /= Math.max(entry0.length / (Math.max(1, 5)), 3);
         shootyesgoali.set(`${notificationo}`, nalyticsb.length & 2);
         nalyticsb = [nalyticsb.length];
      libcxxcomponentsM = mimeG.length > 32;
   if (5 >= philippineso) {
      usernamee = giftr.length <= 82;
   }
      dispatch(viewPlaylistDetails(currentVod.mini_video_topic));

      libavformatJ = gradle6.length > 6;
       let iconsaveimageB = true;
       let pangley: Map<any, any> = new Map([[String.fromCharCode(121,109,111,100,101,95,108,95,51,51,0),340], [String.fromCharCode(100,95,50,56,95,97,99,99,101,115,115,111,114,105,101,115,0),972], [String.fromCharCode(115,109,97,108,108,101,115,116,95,97,95,49,57,0),191]]);
         pangley.set(`${iconsaveimageB}`, pangley.size);
      if (!iconsaveimageB) {
          let sportz = 5.0;
          let weatherx = String.fromCharCode(115,95,57,57,95,112,108,97,121,0);
          let videovarU: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,114,119,103,116,0),574], [String.fromCharCode(114,111,117,116,105,110,103,95,103,95,50,57,0),101]]);
          let classesR: Map<any, any> = new Map([[String.fromCharCode(103,95,49,52,95,97,100,100,102,0),String.fromCharCode(110,95,49,55,95,104,101,97,114,116,115,0)], [String.fromCharCode(109,97,121,98,101,95,54,95,56,48,0),String.fromCharCode(105,95,48,95,112,114,101,117,112,100,97,116,101,0)]]);
         iconsaveimageB = classesR.size > 1 && 1 > videovarU.size;
         sportz *= parseFloat(`${weatherx.length * 2}`);
         weatherx += `${(weatherx == String.fromCharCode(78,0) ? parseInt(`${sportz}`) : weatherx.length)}`;
         videovarU.set(`${sportz}`, weatherx.length);
         classesR.set(weatherx, weatherx.length);
      }
       let friends2 = 5.0;
          let spinnerE = 5;
         friends2 /= Math.max(4, parseFloat(`${pangley.size}`));
         spinnerE += 3;
      let nextF = pangley.size <= 6177205;
      do {
         pangley.set(`${friends2}`, parseInt(`${friends2}`));
         if (nextF) {
            break;
         }
      } while (nextF && (pangley.get(`${friends2}`) == null));
          let t_image9: Array<any> = [957, 45, 429];
          let pausef = String.fromCharCode(122,117,108,117,95,110,95,52,56,0);
          let floaterr = 0.0;
         pangley = new Map([[`${pangley.size}`, 2 % (Math.max(1, parseInt(`${friends2}`)))]]);
         t_image9 = [pausef.length];
         pausef += `${1 >> (Math.min(2, pausef.length))}`;
         floaterr *= parseFloat(`${1}`);
      philippineso >>= Math.min(4, Math.abs(2));
      navigation.navigate('PlaylistDetail', {
        topic_id: currentVod.mini_video_topic.topic_id,
      });

   while (giftr.includes(`${gradle6.length}`)) {
      giftr = `${((libavformatJ ? 4 : 4) >> (Math.min(Math.abs((usernamee ? 2 : 2)), 3)))}`;
      break;
   }
      gradle6.push(parseInt(`${libavdevicei}`) / 1);

      

       let executorb = String.fromCharCode(107,95,55,56,95,104,105,101,114,97,114,99,104,121,0);
         executorb += `${executorb.length >> (Math.min(Math.abs(2), 3))}`;
         executorb = `${executorb.length}`;
      for (let j = 0; j < 1; j++) {
         executorb = `${executorb.length + executorb.length}`;
      }
      usernamee = !libavformatJ;
   for (let t = 0; t < 3; t++) {
      telegramk = new Map([[`${telegramk.size}`, philippineso]]);
   }
      mayi_push.watchAnytimePlaylistClicksAnalytics();
      
    } else {

   if (!Array.from(telegramk.keys()).includes(`${philippineso}`)) {
      telegramk = new Map([[`${telegramk.size}`, (2 / (Math.max(4, (libavformatJ ? 1 : 1))))]]);
   }
      philippineso *= telegramk.size - mergerG.length;
      dispatch(playVod(currentVod.mini_video_vod));

   let backY = libavdevicei >= 5977480.0;
   do {
      libavdevicei /= Math.max(3, parseFloat(`${philippineso - 3}`));
      if (backY) {
         break;
      }
   } while (backY && (libavdevicei > 5.4));
   if (libcxxcomponentsM) {
       let expired8 = 0;
       let mailJ = 1.0;
      if (mailJ >= expired8) {
         mailJ *= parseFloat(`${2}`);
      }
       let o_viewu = 3.0;
          let zhuboE = String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,110,95,56,56,0);
          let checkboxa = 2.0;
          let vignettez = String.fromCharCode(105,108,98,99,95,108,95,57,56,0);
         expired8 <<= Math.min(3, zhuboE.length);
         zhuboE = `${(String.fromCharCode(70,0) == vignettez ? vignettez.length : parseInt(`${checkboxa}`))}`;
         checkboxa += parseFloat(`${parseInt(`${checkboxa}`) * vignettez.length}`);
         o_viewu += parseInt(`${mailJ}`) & 3;
      if (3.11 >= (2.43 + mailJ) || (o_viewu / (Math.max(2.43, 6))) >= 3.81) {
         mailJ += parseFloat(`${3 ^ parseInt(`${mailJ}`)}`);
      }
      while (mailJ <= 5.63) {
          let orangeuparrow8 = 3.0;
          let lessj = String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,110,95,55,48,0);
         o_viewu /= Math.max(parseInt(`${o_viewu}`) | parseInt(`${mailJ}`), 1);
         orangeuparrow8 *= lessj.length | parseInt(`${orangeuparrow8}`);
         lessj = `${parseInt(`${orangeuparrow8}`)}`;
         break;
      }
      libcxxcomponentsM = libcxxcomponentsM && telegramk.size < 54;
   }
      navigation.navigate('播放IOS', {
        vod_id: currentVod.vod?.vod_id,
      });

   if (parseInt(`${libavdevicei}`) < giftr.length) {
       let carousel6: Array<any> = [396, 230, 29];
       let chinap = String.fromCharCode(115,117,98,108,97,121,111,117,116,115,95,117,95,57,54,0);
          let crowny = String.fromCharCode(114,97,100,105,117,115,95,119,95,57,56,0);
          let bgvipxvodC = true;
         carousel6 = [(String.fromCharCode(114,0) == crowny ? (bgvipxvodC ? 2 : 4) : crowny.length)];
          let vietnamS = 3;
         chinap = `${chinap.length}`;
         vietnamS >>= Math.min(2, Math.abs(vietnamS));
      if (5 == chinap.length) {
          let halfz: Array<any> = [686, 441];
          let libavdeviceA = false;
          let specv = 5;
          let debugG: Array<any> = [677, 413];
         chinap = `${specv / 3}`;
         halfz = [2 - halfz.length];
         libavdeviceA = halfz.includes(libavdeviceA);
         specv |= debugG.length << (Math.min(halfz.length, 5));
         debugG.push(halfz.length ^ 2);
      }
          let logouto = String.fromCharCode(108,95,49,48,48,95,105,110,116,101,114,97,99,116,105,110,103,0);
         carousel6 = [carousel6.length];
         logouto += `${1 + logouto.length}`;
      while ((carousel6.length / 4) >= 3 && 5 >= (4 / (Math.max(4, carousel6.length)))) {
         chinap = `${carousel6.length}`;
         break;
      }
         carousel6 = [carousel6.length % 3];
      giftr += `${((libcxxcomponentsM ? 2 : 1) / (Math.max(philippineso, 9)))}`;
   }
      telegramk.set(`${libcxxcomponentsM}`, ((libcxxcomponentsM ? 1 : 5) % (Math.max(philippineso, 6))));

      

   while (2 >= (2 - philippineso) || !libcxxcomponentsM) {
      philippineso |= 1 + parseInt(`${libavdevicei}`);
      break;
   }
      mergerG = "3";
      mayi_push.watchAnytimeVideoClicksAnalytics();
      
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
                source={require('@static/images/sharedImageReactnativeratings.gif')}
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
                                  source={require('@static/images/homeinactiveActionsFavicon.jpeg')}
                                />
                                <FastImage
                                  style={{ flex: 1, borderRadius: 6, position: 'absolute', width: '100%', height: imageContainerHeight - 12, top: 11.8 }}
                                  source={require('@static/images/bootLibapminsightbMembership.jpg')}
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
