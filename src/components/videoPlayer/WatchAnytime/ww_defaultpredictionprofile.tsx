

class SendConfigure {
    static completeSettings = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, { useState, memo, useCallback, useEffect, useRef } from "react";
import {
  Dimensions,
  Linking,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PlayIcon from "@static/images/eighteenGpayFootballfiledlayout.svg";
import PauseIcon from "@static/images/dialogSecurityChat.svg";
import Video, { OnProgressData, wwBinddatasHandler } from "react-native-video";
import FastImage from "../../common/ww_result";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { DOWNLOAD_WATCH_ANYTIME } from "@utility/ww_icon";
import { playVod } from "@redux/actions/ww_floater";
import RNFetchBlob from "rn-fetch-blob";
import { addIdToCache } from "../../../utils/ww_taiwan";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import ww_runtime from "../../../../Umeng/ww_runtime";
import BecomeVipOverlay from "../../modal/ww_animation";
import VipGuideModal from "../../modal/ww_bdxadsdk_kick";
import { wwLaunchRound } from "@utility/ww_star";
import { setIsMiniVodGuideShown } from "@redux/actions/ww_hash";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
interface wwIndexDice {
  thumbnail?: string;
  displayHeight: number;
  vod: any;
  setCollectionEpisode?: any;
  openSheet?: any;
  isPause: boolean;
  onManualPause: (value: boolean) => void;
  isShowVideo: boolean;
  currentDuration: number;
  isActive: boolean;
  index: number;
  onPressAds: () => void;
}

const videoBufferGif = require("@static/images/giflivestreamingNavigationVolume.gif");

function ShortAds({
  vod: currentVod,
  thumbnail,
  displayHeight = 0,
  isPause = true,
  onManualPause,
  isShowVideo,
  currentDuration,
  isActive,
  index,
  onPressAds,
}: wwIndexDice) {
  const { colors } = useTheme();
  const [showVod, setShowVod] = useState(true);
  const screenHeight = Dimensions.get("window").height;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    
    setShowVod(true);

    return () => {
      setShowVod(false);
    };
  }, []);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const { watchAnytimeAdultMode: adultMode } = screenState;

  if (currentVod?.mini_video_original_video_name == undefined) {
    currentVod.mini_video_original_video_name = "";
  }

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<wwBinddatasHandler>(null);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useAppDispatch();
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [miniVodUrl, setMiniVodUrl] = useState(currentVod.ads_pic);

  useEffect(() => {
    if (!isShowVideo && Platform.OS === "ios") setVideoReadyIos(false);
    if (!isShowVideo && Platform.OS === "android") setVideoReadyAndroid(false);
  }, [isShowVideo]);

  useEffect(() => {
    if (!isActive && showIcon) {
      setShowIcon(false);
    }
  }, [isActive]);

  const onBuffer = useCallback(
    (bufferObj: any) => {
      setIsBuffering(bufferObj.isBuffering);
      if (adultMode) {
        setIsBuffering(false);
      }
    },
    [adultMode]
  );
  const userState = useSelector<wwVertical>('userReducer');
  const isVip = wwBodan.isVip(userState.user);

  const handleProgress = useCallback(
    (progress: OnProgressData) => {
      
      if (screenState.isMiniVodGuideShown == false && !isVip) {
        onManualPause(true);
        setVisible(true);
        dispatch(setIsMiniVodGuideShown(true));
      }
      if (
        progress.currentTime !== currentDuration &&
        !isVideoReadyAndroid &&
        Platform.OS === "android"
      )
        setVideoReadyAndroid(true);
    },
    [currentDuration, isVideoReadyAndroid]
  );

  const showControls = () => {
       let directL: Array<any> = [664, 61, 248];
    let completey: Map<any, any> = new Map([[String.fromCharCode(105,100,101,110,116,105,102,101,114,95,120,95,55,48,0),396], [String.fromCharCode(112,95,52,56,95,104,114,97,109,0),793]]);
    let checkboxe = String.fromCharCode(105,95,52,49,95,115,117,109,0);
    let logoutr = String.fromCharCode(105,95,56,48,95,112,101,101,114,110,97,109,101,0);
    let windZ: Array<any> = [String.fromCharCode(102,95,50,55,95,97,112,112,118,101,121,111,114,0), String.fromCharCode(110,111,110,102,97,116,97,108,95,111,95,49,51,0), String.fromCharCode(100,95,57,50,95,112,114,111,98,101,114,0)];
    let soundj = false;
    let rootX = true;
    let datab = false;
    let switch_mzI = 1.0;
   let megaphoneh = directL.length >= 8897672;
   do {
      directL.push(((rootX ? 5 : 3) & windZ.length));
      if (megaphoneh) {
         break;
      }
   } while (megaphoneh && ((logoutr.length * directL.length) == 3 && (logoutr.length * directL.length) == 3));
   let reactnativeultimatelistvieww = datab ? !datab : datab;
   do {
      datab = directL.length < 65;
      if (reactnativeultimatelistvieww) {
         break;
      }
   } while ((!datab) && reactnativeultimatelistvieww);
   for (let f = 0; f < 1; f++) {
      directL = [logoutr.length];
   }
      logoutr += `${logoutr.length}`;
      checkboxe = `${windZ.length}`;
   if ((completey.size % (Math.max(4, 6))) > 3) {
      completey = new Map([[`${completey.size}`, directL.length | 3]]);
   }
       let macauN = 4.0;
      for (let p = 0; p < 2; p++) {
         macauN -= 3 + parseInt(`${macauN}`);
      }
       let tick2 = String.fromCharCode(97,98,115,95,115,95,57,53,0);
      while (1 == (tick2.length * 5)) {
          let sentryM = String.fromCharCode(108,111,97,100,95,101,95,52,50,0);
         tick2 = `${sentryM.length}`;
         break;
      }
      rootX = checkboxe.length <= 94;
      logoutr += `${windZ.length}`;
   for (let t = 0; t < 3; t++) {
       let reactnavigationo = 5;
         reactnavigationo += reactnavigationo;
         reactnavigationo <<= Math.min(3, Math.abs(3 & reactnavigationo));
         reactnavigationo /= Math.max(5, reactnavigationo);
      datab = (((datab ? 50 : directL.length) % (Math.max(8, directL.length))) > 50);
   }
      logoutr = "3";
   let libzeus8 = 6769210 <= windZ.length;
   do {
      windZ.push((String.fromCharCode(55,0) == logoutr ? logoutr.length : windZ.length));
      if (libzeus8) {
         break;
      }
   } while ((5 > (windZ.length % 1) || (windZ.length % (Math.max(logoutr.length, 3))) > 1) && libzeus8);
   if (rootX && 4 <= logoutr.length) {
       let statisticsinactivep = true;
      if (statisticsinactivep) {
          let greym: Array<any> = [String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,119,95,56,51,0), String.fromCharCode(98,121,116,101,114,117,110,95,112,95,51,56,0)];
          let album_ = String.fromCharCode(105,95,57,57,95,97,97,99,101,110,99,116,97,98,0);
         statisticsinactivep = greym.includes(statisticsinactivep);
         greym = [3];
         album_ += `${album_.length % (Math.max(10, album_.length))}`;
      }
      for (let f = 0; f < 2; f++) {
          let iconbackwhite2: Array<any> = [String.fromCharCode(116,101,115,115,95,120,95,52,50,0), String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,106,95,53,56,0)];
          let eighteenz: Array<any> = [387, 367];
          let values6 = String.fromCharCode(103,95,50,55,95,117,110,112,111,105,115,111,110,0);
         statisticsinactivep = (values6.length >> (Math.min(3, eighteenz.length))) >= 94;
         iconbackwhite2 = [iconbackwhite2.length];
         eighteenz.push(2 ^ iconbackwhite2.length);
      }
          let thumbnailv = String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,120,95,51,52,0);
          let textlayoutmanagerl = String.fromCharCode(108,95,55,51,95,98,105,119,103,116,0);
         statisticsinactivep = !statisticsinactivep;
         thumbnailv = `${thumbnailv.length}`;
         textlayoutmanagerl += `${3 * thumbnailv.length}`;
      rootX = String.fromCharCode(67,0) == logoutr;
   }
   while (1 > directL.length && (directL.length ^ 1) > 5) {
       let sourcex = 1;
          let type_lmo = String.fromCharCode(100,105,97,109,101,116,101,114,95,111,95,53,53,0);
          let loginsuccess2 = String.fromCharCode(109,95,53,55,95,111,99,117,109,101,110,116,0);
         sourcex >>= Math.min(Math.abs(3), 1);
         type_lmo = `${loginsuccess2.length}`;
         loginsuccess2 = `${loginsuccess2.length ^ type_lmo.length}`;
         sourcex %= Math.max(3, 3);
       let defaultlogoP: Array<any> = [487, 138, 517];
       let serviceU: Array<any> = [736, 443];
      soundj = directL.length <= 86 || rootX;
      break;
   }
   let reducer5 = rootX ? !rootX : rootX;
   do {
      rootX = windZ.includes(soundj);
      if (reducer5) {
         break;
      }
   } while (reducer5 && (logoutr.length == 1 || rootX));
       let imagemanagers = String.fromCharCode(105,110,118,95,105,95,50,49,0);
       let kickB: Array<any> = [562, 600];
      let videovarD = 5103368 <= kickB.length;
      do {
         kickB.push(kickB.length ^ 3);
         if (videovarD) {
            break;
         }
      } while (videovarD && (4 < (imagemanagers.length * 2)));
         imagemanagers = `${imagemanagers.length}`;
       let shrink3: Map<any, any> = new Map([[String.fromCharCode(114,101,108,111,103,105,110,95,119,95,51,57,0),634], [String.fromCharCode(110,116,115,99,95,99,95,49,52,0),121]]);
         shrink3.set(`${kickB.length}`, kickB.length);
         kickB = [(String.fromCharCode(55,0) == imagemanagers ? imagemanagers.length : shrink3.size)];
      for (let l = 0; l < 2; l++) {
         kickB.push(shrink3.size * 3);
      }
      directL.push(windZ.length);
       let animation9 = 4.0;
       let const_ahT = 5.0;
         const_ahT /= Math.max(3, parseFloat(`${parseInt(`${animation9}`)}`));
      while (2.88 <= (const_ahT * animation9)) {
          let settings4 = 4;
          let gradleY = String.fromCharCode(112,97,105,114,119,105,115,101,95,113,95,53,57,0);
         animation9 += parseInt(`${animation9}`) >> (Math.min(gradleY.length, 3));
         settings4 |= settings4;
         gradleY = `${settings4}`;
         break;
      }
         const_ahT += parseFloat(`${parseInt(`${const_ahT}`) - parseInt(`${animation9}`)}`);
         const_ahT *= parseFloat(`${parseInt(`${animation9}`)}`);
       let unfillK = String.fromCharCode(99,95,55,52,95,101,120,112,108,105,99,105,116,108,121,0);
       let servicej = String.fromCharCode(97,95,56,51,95,115,119,114,101,115,97,109,112,108,101,114,101,115,0);
       let activityE: Array<any> = [257, 785, 490];
      rootX = windZ.includes(rootX);

    overlayRef.current = true;
  };

  const handlePlayPause = () => {
       let bdxadsdk8 = true;
    let orientation9 = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,50,95,52,53,0);
    let questiconQ = 3;
    let minimizeH = true;
    let disconnectedY = 1.0;
    let modelsi = String.fromCharCode(108,115,119,115,117,116,105,108,115,95,117,95,50,55,0);
    let loadingq: Map<any, any> = new Map([[String.fromCharCode(110,97,108,115,95,113,95,49,50,0),false ], [String.fromCharCode(98,95,53,49,95,115,101,108,101,99,116,101,100,0),false ], [String.fromCharCode(115,116,114,108,101,110,95,113,95,52,54,0),false ]]);
    let defaultfootballbg0 = 2.0;
    let suggestionr = false;
    let greyarrowup1 = false;
    let fullQ = 3;
    let searchbarr: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,109,117,110,109,97,112,0),793], [String.fromCharCode(97,95,51,53,95,99,111,109,112,101,110,115,97,116,101,100,0),141]]);
    let downarrowj = String.fromCharCode(97,100,106,117,115,116,101,100,95,101,95,51,49,0);
    let renewd = String.fromCharCode(102,105,116,115,95,121,95,51,54,0);
    let iconshare1 = 2.0;
    let graph6 = String.fromCharCode(98,105,110,115,95,57,95,49,53,0);
    let statisticsX: Array<any> = [878, 776, 675];
    let regengo = String.fromCharCode(110,95,55,54,95,98,101,104,97,118,105,111,117,114,0);
   if ((questiconQ << (Math.min(Math.abs(3), 3))) <= 2) {
      questiconQ |= orientation9.length;
   }
      fullQ /= Math.max(orientation9.length, 2);
       let circleM = 4.0;
          let casth = 2;
          let shielddoneQ = String.fromCharCode(121,95,54,51,95,98,97,99,107,101,100,0);
         circleM /= Math.max(4, shielddoneQ.length & casth);
       let videovar5 = false;
       let albumc = false;
      if ((circleM + 3.49) >= 5.87 || circleM >= 3.49) {
         videovar5 = 2.93 <= circleM || !albumc;
      }
      orientation9 = `${2 | searchbarr.size}`;
       let giftbuttonc: Array<any> = [155, 841, 879];
      for (let j = 0; j < 1; j++) {
         giftbuttonc.push(giftbuttonc.length);
      }
         giftbuttonc = [giftbuttonc.length * 3];
         giftbuttonc = [giftbuttonc.length];
      defaultfootballbg0 -= parseFloat(`${2}`);
      loadingq.set(`${minimizeH}`, 1 | questiconQ);
   if (renewd.length > 1) {
      minimizeH = searchbarr.size == loadingq.size;
   }
       let referrer3 = String.fromCharCode(118,95,57,55,95,115,116,117,98,0);
       let downarrowW = String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,112,95,57,48,0);
         referrer3 += `${referrer3.length}`;
      let firebaseP = downarrowW.length >= 5218229;
      do {
         downarrowW += `${referrer3.length}`;
         if (firebaseP) {
            break;
         }
      } while ((downarrowW.includes(referrer3)) && firebaseP);
      if (downarrowW == String.fromCharCode(67,0)) {
         referrer3 += "3";
      }
         downarrowW += `${downarrowW.length}`;
      for (let q = 0; q < 1; q++) {
          let dragT = String.fromCharCode(108,95,51,49,95,108,97,117,110,99,104,0);
          let privacyS: Array<any> = [147, 187, 584];
          let countryT = 4.0;
          let encryptN = 4.0;
          let singaporep = 3.0;
         referrer3 += `${2 & parseInt(`${singaporep}`)}`;
         dragT = `${1 << (Math.min(Math.abs(parseInt(`${countryT}`)), 1))}`;
         privacyS = [2 ^ parseInt(`${countryT}`)];
         encryptN -= parseFloat(`${privacyS.length}`);
         singaporep /= Math.max(parseFloat(`${1 & parseInt(`${encryptN}`)}`), 3);
      }
      let entryk = 8415604 <= downarrowW.length;
      do {
          let expired8 = String.fromCharCode(117,95,57,52,95,110,101,101,100,101,100,0);
          let filedE = String.fromCharCode(114,117,110,110,105,110,103,95,107,95,50,55,0);
          let typingL = String.fromCharCode(116,114,97,99,101,95,109,95,53,49,0);
          let scoreS = String.fromCharCode(112,95,57,55,95,112,101,114,99,101,110,116,97,103,101,0);
          let bottomP = 5;
         downarrowW += "2";
         expired8 += `${scoreS.length >> (Math.min(1, typingL.length))}`;
         filedE = `${2 << (Math.min(2, Math.abs(bottomP)))}`;
         typingL = "2";
         scoreS = "2";
         bottomP -= bottomP;
         if (entryk) {
            break;
         }
      } while (entryk && (4 > downarrowW.length && referrer3 != String.fromCharCode(69,0)));
      fullQ |= 3;
      suggestionr = orientation9.length <= 61;

    clearTimeout(iconTimer.current);

   if ((fullQ ^ 5) <= 2) {
      fullQ += parseInt(`${disconnectedY}`);
   }
   while (5 == loadingq.size || (loadingq.size % 5) == 3) {
      bdxadsdk8 = (orientation9.length & downarrowj.length) >= 99;
      break;
   }
   while (greyarrowup1) {
      greyarrowup1 = 91 == modelsi.length && disconnectedY == 47.31;
      break;
   }
   while (suggestionr && !greyarrowup1) {
       let sideJ = String.fromCharCode(110,95,57,49,95,100,105,115,112,108,97,121,115,0);
       let m_imageV: Array<any> = [String.fromCharCode(109,95,54,53,95,109,97,115,107,115,0), String.fromCharCode(115,101,97,114,99,104,98,97,114,95,101,95,57,0), String.fromCharCode(112,114,101,100,114,97,119,110,95,113,95,50,57,0)];
         sideJ += `${sideJ.length}`;
      while (5 == (m_imageV.length << (Math.min(Math.abs(3), 1)))) {
          let actionl = true;
          let manifestP = String.fromCharCode(99,95,50,57,95,114,116,97,100,100,114,115,0);
         sideJ = `${1 | sideJ.length}`;
         actionl = !actionl;
         manifestP += `${(manifestP == String.fromCharCode(50,0) ? manifestP.length : (actionl ? 3 : 2))}`;
         break;
      }
      greyarrowup1 = greyarrowup1 || defaultfootballbg0 == 56.13;
      break;
   }
   while (4 <= (loadingq.size | 1) || loadingq.size <= 1) {
       let libcrashsdks = String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,108,95,54,51,0);
       let rnewinterstitialQ = String.fromCharCode(108,95,52,48,95,111,109,105,116,116,105,110,103,0);
       let rightT = true;
      while (!rightT) {
         rightT = rnewinterstitialQ == libcrashsdks;
         break;
      }
         rightT = libcrashsdks == rnewinterstitialQ;
         libcrashsdks += `${((rightT ? 4 : 1))}`;
          let kuaishoul: Map<any, any> = new Map([[String.fromCharCode(121,95,53,57,95,112,114,105,109,105,116,105,118,101,0),String.fromCharCode(98,117,105,108,100,101,114,95,105,95,56,50,0)], [String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,49,95,52,49,0),String.fromCharCode(97,108,112,104,97,95,53,95,57,50,0)], [String.fromCharCode(105,95,51,55,95,112,97,115,116,0),String.fromCharCode(101,115,116,105,109,97,116,105,111,110,95,97,95,49,52,0)]]);
          let shareZ = true;
         rightT = 82 > kuaishoul.size;
         kuaishoul = new Map([[`${shareZ}`, ((shareZ ? 1 : 5))]]);
      let libyogaG = rightT ? !rightT : rightT;
      do {
         rightT = libcrashsdks == String.fromCharCode(118,0) && rnewinterstitialQ.length >= 99;
         if (libyogaG) {
            break;
         }
      } while ((libcrashsdks.length >= 1 || !rightT) && libyogaG);
         rnewinterstitialQ += `${3 & libcrashsdks.length}`;
       let tempK = 0;
      for (let j = 0; j < 2; j++) {
         rnewinterstitialQ = `${libcrashsdks.length}`;
      }
      let libavcodecU = tempK <= 8605546;
      do {
         tempK += tempK;
         if (libavcodecU) {
            break;
         }
      } while (((tempK ^ 5) >= 4) && libavcodecU);
      suggestionr = null != searchbarr.get(`${iconshare1}`);
      break;
   }
   let bnewinterstitialT = 7880511 <= renewd.length;
   do {
      renewd = `${loadingq.size}`;
      if (bnewinterstitialT) {
         break;
      }
   } while (bnewinterstitialT && (5 == (3 - renewd.length)));
      disconnectedY *= parseFloat(`${1}`);
      iconshare1 *= parseFloat(`${3 + modelsi.length}`);
    setShowIcon(true);

   if (greyarrowup1) {
      bdxadsdk8 = downarrowj.length < renewd.length;
   }
   while (renewd.startsWith(`${bdxadsdk8}`)) {
      bdxadsdk8 = !downarrowj.startsWith(`${suggestionr}`);
      break;
   }
      greyarrowup1 = fullQ < parseInt(`${iconshare1}`);
      orientation9 = "1";
      renewd += `${parseInt(`${defaultfootballbg0}`) / (Math.max(renewd.length, 7))}`;
      disconnectedY -= parseFloat(`${modelsi.length}`);
   if (!minimizeH) {
      minimizeH = suggestionr && 45.18 == defaultfootballbg0;
   }
      suggestionr = minimizeH;
    if (isPause) {

   while (downarrowj.length >= 1 && !minimizeH) {
      minimizeH = (defaultfootballbg0 / (Math.max(parseFloat(`${downarrowj.length}`), 2))) > 25.10;
      break;
   }
      downarrowj += `${((suggestionr ? 5 : 2) * questiconQ)}`;
      orientation9 = `${modelsi.length}`;
   for (let e = 0; e < 1; e++) {
       let expand4 = String.fromCharCode(99,109,115,103,95,122,95,57,48,0);
       let constantsg: Map<any, any> = new Map([[String.fromCharCode(114,95,53,95,115,117,109,120,0),890], [String.fromCharCode(102,95,54,50,0),864], [String.fromCharCode(105,115,116,111,103,114,97,109,95,97,95,52,56,0),434]]);
       let iconbellactiveM = String.fromCharCode(110,95,50,48,95,105,110,116,101,114,109,105,100,105,97,116,101,0);
       let tempnodatagifj = 2.0;
       let settingsd = String.fromCharCode(109,95,54,50,95,99,111,108,114,97,109,0);
      if (!settingsd.includes(expand4)) {
         settingsd = `${settingsd.length ^ parseInt(`${tempnodatagifj}`)}`;
      }
      if ((settingsd.length - 5) >= 4) {
         tempnodatagifj *= expand4.length;
      }
         constantsg.set(expand4, settingsd.length >> (Math.min(Math.abs(1), 1)));
      let expandQ = 8596204 >= constantsg.size;
      do {
          let logouserw = String.fromCharCode(108,95,52,54,95,115,121,115,114,97,110,100,0);
          let orangeclockD = false;
          let libhermesn: Array<any> = [342, 205];
          let sellG = String.fromCharCode(101,95,51,55,95,101,110,100,105,110,103,0);
         constantsg.set(logouserw, libhermesn.length);
         logouserw = `${sellG.length * 3}`;
         orangeclockD = sellG.length < 76 || !orangeclockD;
         libhermesn = [((orangeclockD ? 3 : 2))];
         if (expandQ) {
            break;
         }
      } while (expandQ && (4 >= (iconbellactiveM.length ^ constantsg.size)));
      for (let c = 0; c < 2; c++) {
         constantsg.set(`${tempnodatagifj}`, constantsg.size | 3);
      }
      for (let l = 0; l < 2; l++) {
         tempnodatagifj += iconbellactiveM.length / (Math.max(3, 1));
      }
      for (let x = 0; x < 2; x++) {
         expand4 = `${constantsg.size}`;
      }
          let nextA = String.fromCharCode(100,95,54,48,95,115,116,114,114,101,115,101,116,0);
         constantsg = new Map([[`${constantsg.size}`, 2 ^ settingsd.length]]);
         nextA = "2";
          let backB: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,105,116,95,97,95,57,0),false ], [String.fromCharCode(109,105,120,105,110,103,95,118,95,57,55,0),true ], [String.fromCharCode(98,95,55,57,95,101,120,116,114,97,99,116,101,100,0),true ]]);
         settingsd += `${parseInt(`${tempnodatagifj}`)}`;
         backB.set(`${backB.size}`, backB.size);
      while (2 > (constantsg.size - 4) && 2 > (constantsg.size - 4)) {
         iconbellactiveM += `${(settingsd == String.fromCharCode(66,0) ? constantsg.size : settingsd.length)}`;
         break;
      }
      let package_sx2 = String.fromCharCode(111,121,108,0) == settingsd;
      do {
         settingsd += `${iconbellactiveM.length * 3}`;
         if (package_sx2) {
            break;
         }
      } while (package_sx2 && (1 >= (settingsd.length + parseInt(`${tempnodatagifj}`)) || (parseInt(`${tempnodatagifj}`) + settingsd.length) >= 1));
      while ((constantsg.size << (Math.min(Math.abs(2), 2))) <= 4 || (2 << (Math.min(5, settingsd.length))) <= 4) {
         constantsg = new Map([[expand4, 2]]);
         break;
      }
          let libfabricjniS = String.fromCharCode(122,95,55,51,95,114,101,100,117,99,101,0);
          let detailsf = true;
         settingsd += `${expand4.length ^ 3}`;
         libfabricjniS = `${libfabricjniS.length}`;
         detailsf = ((libfabricjniS.length * (detailsf ? 72 : libfabricjniS.length)) <= 72);
      let connectionL = String.fromCharCode(108,116,48,101,48,0) == settingsd;
      do {
         settingsd = `${settingsd.length}`;
         if (connectionL) {
            break;
         }
      } while (connectionL && (3.30 < tempnodatagifj));
      for (let m = 0; m < 3; m++) {
         expand4 = `${iconbellactiveM.length + expand4.length}`;
      }
      suggestionr = 93 < questiconQ;
   }
   let frame_3_ = 7372890.0 >= defaultfootballbg0;
   do {
      defaultfootballbg0 *= parseFloat(`${questiconQ}`);
      if (frame_3_) {
         break;
      }
   } while (frame_3_ && (suggestionr));
   for (let n = 0; n < 3; n++) {
       let vietnamh = String.fromCharCode(113,117,97,114,116,101,114,95,120,95,49,57,0);
       let defaultlogoZ = String.fromCharCode(117,110,105,109,112,111,114,116,97,110,116,95,51,95,55,48,0);
       let single7 = 1;
       let castingP = String.fromCharCode(111,95,51,48,95,114,97,109,112,117,112,0);
      let whitetick3 = String.fromCharCode(50,56,99,97,95,102,116,55,102,111,0) == castingP;
      do {
         castingP += `${castingP.length}`;
         if (whitetick3) {
            break;
         }
      } while ((castingP.length < 1) && whitetick3);
         defaultlogoZ = "1";
      let librrc4 = single7 >= 6601107;
      do {
          let orange8 = String.fromCharCode(101,95,55,57,95,104,97,110,100,108,101,114,0);
          let mbjscommonH = 3.0;
          let playercommonT: Map<any, any> = new Map([[String.fromCharCode(110,111,111,112,95,119,95,56,49,0),249], [String.fromCharCode(107,95,55,57,95,112,114,105,110,116,97,98,108,101,0),851]]);
          let save9: Array<any> = [String.fromCharCode(120,95,56,57,95,99,104,97,116,115,0), String.fromCharCode(110,95,56,50,95,108,105,98,112,111,115,116,112,114,111,99,0)];
          let referrerK: Map<any, any> = new Map([[String.fromCharCode(97,112,112,97,114,101,110,116,95,102,95,53,52,0),false ], [String.fromCharCode(97,95,54,52,95,114,102,102,116,102,0),true ]]);
         single7 <<= Math.min(Math.abs(1 | defaultlogoZ.length), 2);
         orange8 = `${save9.length / (Math.max(3, 2))}`;
         mbjscommonH += parseFloat(`${save9.length << (Math.min(Math.abs(3), 4))}`);
         playercommonT.set(`${save9.length}`, save9.length);
         referrerK.set(orange8, 1 % (Math.max(8, orange8.length)));
         if (librrc4) {
            break;
         }
      } while (librrc4 && ((defaultlogoZ.length * single7) < 1));
      let libcrashsdkT = single7 <= 8788306;
      do {
         single7 &= single7;
         if (libcrashsdkT) {
            break;
         }
      } while ((5 >= (defaultlogoZ.length << (Math.min(1, Math.abs(single7)))) || (defaultlogoZ.length << (Math.min(2, Math.abs(single7)))) >= 5) && libcrashsdkT);
         castingP += `${3 & defaultlogoZ.length}`;
      if (5 == (castingP.length >> (Math.min(Math.abs(2), 5)))) {
         single7 %= Math.max(1 ^ single7, 4);
      }
      for (let n = 0; n < 3; n++) {
         castingP += `${defaultlogoZ.length}`;
      }
       let halffieldimageM = String.fromCharCode(100,95,52,56,95,115,101,99,117,114,105,116,121,0);
       let episodeq = String.fromCharCode(109,97,112,102,105,108,101,95,113,95,50,56,0);
      while (5 > defaultlogoZ.length) {
          let teams = true;
          let views2 = 5.0;
          let bingV = false;
          let detailse: Map<any, any> = new Map([[String.fromCharCode(107,95,53,53,95,102,105,110,105,115,101,100,0),String.fromCharCode(101,95,57,53,95,108,111,119,98,105,116,115,0)], [String.fromCharCode(111,102,102,115,99,114,101,101,110,95,97,95,53,0),String.fromCharCode(122,95,54,55,95,101,110,117,109,101,114,97,116,105,111,110,0)], [String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,56,95,52,53,0),String.fromCharCode(103,95,49,53,95,109,115,112,101,108,0)]]);
          let s_titlel = true;
         vietnamh += `${(castingP == String.fromCharCode(52,0) ? halffieldimageM.length : castingP.length)}`;
         teams = !s_titlel && !bingV;
         views2 /= Math.max(5, (2 & (s_titlel ? 2 : 4)));
         bingV = 71.2 >= views2 && !s_titlel;
         detailse.set(`${bingV}`, 1);
         break;
      }
       let greytick0 = String.fromCharCode(116,119,101,97,107,115,95,56,95,55,50,0);
         single7 /= Math.max(4, castingP.length);
      if (halffieldimageM.length <= 3) {
          let firebaseF = 0;
          let countdown7 = 2;
          let popupp = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,101,95,53,55,0);
          let logouserK: Map<any, any> = new Map([[String.fromCharCode(121,95,55,55,95,101,118,101,114,121,111,110,101,0),String.fromCharCode(112,111,105,115,115,111,110,95,49,95,53,55,0)], [String.fromCharCode(115,95,54,53,95,107,101,121,115,112,101,99,0),String.fromCharCode(114,97,116,101,95,114,95,48,0)]]);
          let progressc = 0;
         halffieldimageM = `${firebaseF}`;
         firebaseF <<= Math.min(Math.abs(3), 4);
         countdown7 -= popupp.length ^ countdown7;
         popupp += `${logouserK.size ^ progressc}`;
         logouserK = new Map([[`${logouserK.size}`, (popupp == String.fromCharCode(72,0) ? popupp.length : logouserK.size)]]);
         progressc ^= countdown7 / (Math.max(logouserK.size, 2));
      }
      minimizeH = bdxadsdk8;
   }
       let moviesT = 5.0;
       let usere: Array<any> = [722, 672];
         usere = [2];
      while (!usere.includes(moviesT)) {
         usere = [usere.length & parseInt(`${moviesT}`)];
         break;
      }
         usere.push(3 & parseInt(`${moviesT}`));
      for (let n = 0; n < 2; n++) {
          let gdtadv4: Array<any> = [String.fromCharCode(109,95,50,52,95,115,117,98,114,97,110,103,101,115,0), String.fromCharCode(114,95,51,56,95,112,97,112,101,114,0), String.fromCharCode(98,95,56,48,95,115,99,97,110,110,101,114,0)];
          let notificationL = 3;
          let internet8: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,95,100,118,118,105,100,101,111,0),965], [String.fromCharCode(108,95,49,49,95,97,112,112,114,101,99,97,116,105,111,110,0),984], [String.fromCharCode(108,97,116,116,105,99,101,95,118,95,54,49,0),934]]);
         usere.push(gdtadv4.length & notificationL);
         gdtadv4 = [internet8.size];
         notificationL &= internet8.size;
      }
      while (2 > (usere.length + 1) && 3 > (usere.length & 1)) {
         moviesT /= Math.max(1, parseFloat(`${1}`));
         break;
      }
       let expand9 = true;
      disconnectedY /= Math.max(1, parseFloat(`${parseInt(`${defaultfootballbg0}`) >> (Math.min(Math.abs(1), 2))}`));
      bdxadsdk8 = !minimizeH;
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    onManualPause(isPause);
  };

  const handleLoadStart = useCallback(() => {
       let borderlessz = 3;
    let editl = String.fromCharCode(101,120,112,110,97,100,101,100,95,103,95,52,52,0);
    let eighteenK = 4.0;
    let mode5 = String.fromCharCode(110,111,111,112,95,55,95,57,48,0);
    let backiconh = 5.0;
    let dependenciesx = String.fromCharCode(109,95,52,50,0);
    let libavformatQ = String.fromCharCode(107,95,57,95,112,117,98,107,101,121,0);
    let iconsettingk = 2;
    let dacccfaabfbcbadeebddcabacdffdb9 = 5.0;
    let latnN = String.fromCharCode(105,110,117,115,101,95,97,95,54,51,0);
    let appsf = 3;
      dependenciesx += `${libavformatQ.length}`;
   while (2.9 > (eighteenK - 2.26)) {
      borderlessz <<= Math.min(Math.abs(parseInt(`${eighteenK}`)), 5);
      break;
   }
   for (let s = 0; s < 3; s++) {
       let blackb = String.fromCharCode(122,95,54,48,95,98,108,117,114,0);
       let friendsU: Array<any> = [385, 338];
       let reward_ = String.fromCharCode(115,95,55,57,95,100,101,112,108,111,121,109,101,110,116,0);
       let cornerkickB: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,105,110,103,95,119,95,56,0),73], [String.fromCharCode(99,95,54,48,95,98,111,110,106,111,117,114,0),118]]);
      for (let y = 0; y < 2; y++) {
         reward_ = `${1 >> (Math.min(3, reward_.length))}`;
      }
         friendsU = [2];
       let showf = String.fromCharCode(115,116,114,105,100,101,98,95,105,95,55,53,0);
         reward_ += `${cornerkickB.size << (Math.min(Math.abs(1), 1))}`;
          let update_oe_ = String.fromCharCode(115,97,118,101,114,95,49,95,57,56,0);
          let textP = String.fromCharCode(100,111,119,110,108,101,102,116,95,97,95,52,49,0);
          let sourceE = false;
         reward_ = `${update_oe_.length + 1}`;
         update_oe_ += `${((sourceE ? 5 : 2) / (Math.max(textP.length, 9)))}`;
         textP += "2";
         reward_ += `${(blackb == String.fromCharCode(120,0) ? blackb.length : friendsU.length)}`;
      for (let a = 0; a < 1; a++) {
          let dangerG = 0;
          let ncopy_syE = 4.0;
          let uimanagerO = 2;
          let settingsJ = String.fromCharCode(105,105,114,102,105,108,116,101,114,95,120,95,51,54,0);
          let private_jjs = false;
         cornerkickB.set(reward_, ((private_jjs ? 3 : 4)));
         dangerG %= Math.max(uimanagerO, 4);
         ncopy_syE /= Math.max(1, parseFloat(`${dangerG | 1}`));
         settingsJ += "3";
         private_jjs = 15.26 > ncopy_syE;
      }
         cornerkickB = new Map([[`${cornerkickB.size}`, reward_.length]]);
      for (let p = 0; p < 2; p++) {
         friendsU.push(cornerkickB.size - 2);
      }
          let tailk = 1;
         blackb = "1";
         tailk += tailk | 3;
      while (!reward_.startsWith(`${showf.length}`)) {
          let megaphone4 = 3;
          let detail2 = 0;
          let mnewsD = 1.0;
          let selectionz = String.fromCharCode(115,104,97,112,101,95,115,95,56,55,0);
         reward_ = `${megaphone4 / (Math.max(1, 4))}`;
         megaphone4 /= Math.max(2, 2 << (Math.min(1, Math.abs(detail2))));
         detail2 %= Math.max(detail2 - parseInt(`${mnewsD}`), 2);
         mnewsD -= 1;
         selectionz = `${parseInt(`${mnewsD}`) + detail2}`;
         break;
      }
         cornerkickB.set(blackb, 3);
      mode5 += `${cornerkickB.size}`;
   }
   for (let y = 0; y < 1; y++) {
      editl = "2";
   }
      mode5 += "1";

    

       let backgroundX: Array<any> = [697, 882, 393];
       let feedbackG = 5.0;
       let termsd = 0;
      while (parseInt(`${feedbackG}`) > backgroundX.length) {
         feedbackG -= backgroundX.length % (Math.max(4, parseInt(`${feedbackG}`)));
         break;
      }
      if (5 > (termsd - backgroundX.length)) {
         backgroundX.push(parseInt(`${feedbackG}`));
      }
         termsd <<= Math.min(Math.abs(termsd), 5);
      let feedbackV = feedbackG >= 6439607.0;
      do {
         feedbackG -= backgroundX.length;
         if (feedbackV) {
            break;
         }
      } while ((2.24 >= (termsd / (Math.max(6, feedbackG))) && (termsd * 4) >= 2) && feedbackV);
         feedbackG /= Math.max(4, backgroundX.length >> (Math.min(1, Math.abs(termsd))));
         feedbackG += termsd - 1;
      for (let l = 0; l < 2; l++) {
         feedbackG *= termsd % (Math.max(backgroundX.length, 9));
      }
          let recommendation1: Map<any, any> = new Map([[String.fromCharCode(103,95,53,48,95,99,97,112,105,116,97,108,115,0),28], [String.fromCharCode(97,117,116,104,111,114,105,122,101,114,95,119,95,54,56,0),532], [String.fromCharCode(115,105,103,110,108,101,95,106,95,50,50,0),35]]);
          let formF = true;
         backgroundX = [((formF ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${feedbackG}`)), 5)))];
         recommendation1.set(`${recommendation1.size}`, 2 << (Math.min(1, Math.abs(recommendation1.size))));
         formF = 84 > recommendation1.size;
      let colorso = feedbackG <= 6448318.0;
      do {
          let gemfile2 = 2.0;
          let iconuserg = String.fromCharCode(114,101,99,111,114,100,101,114,95,99,95,53,51,0);
          let clocka = String.fromCharCode(105,95,57,55,95,114,101,115,111,117,114,99,101,115,0);
          let yellowanimationliveJ: Array<any> = [770, 311];
         feedbackG /= Math.max(yellowanimationliveJ.length, 3);
         gemfile2 -= parseFloat(`${iconuserg.length * 1}`);
         iconuserg = `${3 + iconuserg.length}`;
         clocka = `${clocka.length + 2}`;
         yellowanimationliveJ = [parseInt(`${gemfile2}`) >> (Math.min(iconuserg.length, 4))];
         if (colorso) {
            break;
         }
      } while (((feedbackG - 3.38) <= 2.38 && 5.62 <= (feedbackG - 3.38)) && colorso);
      eighteenK += 2 >> (Math.min(1, libavformatQ.length));
   for (let a = 0; a < 2; a++) {
      dependenciesx += `${mode5.length - 1}`;
   }
       let linkj = 1;
      while (3 == (linkj & 5)) {
          let iconstarU = 2.0;
          let delegate_816 = String.fromCharCode(108,95,57,55,95,102,105,101,108,100,115,0);
          let plusZ: Array<any> = [580, 570, 67];
         linkj >>= Math.min(4, Math.abs(2 % (Math.max(parseInt(`${iconstarU}`), 8))));
         iconstarU -= (delegate_816 == String.fromCharCode(120,0) ? delegate_816.length : plusZ.length);
         plusZ.push(plusZ.length - 3);
         break;
      }
         linkj >>= Math.min(5, Math.abs(linkj));
      let detailsM = 8902822 <= linkj;
      do {
          let profileactiveX = 5;
          let sendJ = false;
          let libsentryA = false;
          let chinasameL = true;
          let videom: Map<any, any> = new Map([[String.fromCharCode(99,95,57,56,95,109,101,109,109,103,114,0),true ], [String.fromCharCode(120,95,57,49,95,100,102,99,116,0),false ], [String.fromCharCode(110,99,111,110,102,95,57,95,49,55,0),false ]]);
         linkj ^= linkj * 3;
         profileactiveX *= ((libsentryA ? 2 : 3));
         sendJ = videom.get(`${libsentryA}`) == null;
         chinasameL = !chinasameL;
         videom = new Map([[`${videom.size}`, videom.size]]);
         if (detailsM) {
            break;
         }
      } while (detailsM && (linkj > 3));
      backiconh -= parseFloat(`${2}`);
      backiconh -= parseFloat(`${mode5.length}`);
      borderlessz %= Math.max(1, libavformatQ.length);
    

       let dependencyI = 0.0;
      if (3.45 <= (dependencyI + dependencyI)) {
          let scheduleL = true;
          let anytime0: Map<any, any> = new Map([[String.fromCharCode(119,95,53,54,95,121,113,117,97,110,116,0),7], [String.fromCharCode(111,102,102,115,99,114,101,101,110,95,103,95,56,52,0),489]]);
          let detailH = String.fromCharCode(119,95,56,55,95,115,101,109,97,110,116,105,99,97,108,108,121,0);
          let turndowne = String.fromCharCode(98,111,114,100,101,114,115,95,102,95,56,55,0);
          let floatingW = true;
         dependencyI -= parseFloat(`${3 - detailH.length}`);
         scheduleL = scheduleL && anytime0.size >= 91;
         anytime0 = new Map([[`${anytime0.size}`, anytime0.size]]);
         detailH = `${anytime0.size ^ 1}`;
         turndowne = "1";
         floatingW = (((!scheduleL ? 39 : turndowne.length) - turndowne.length) > 39);
      }
         dependencyI *= parseFloat(`${parseInt(`${dependencyI}`) | 2}`);
      while (5.18 <= (3.53 - dependencyI) || (dependencyI - 3.53) <= 4.88) {
         dependencyI *= parseFloat(`${parseInt(`${dependencyI}`)}`);
         break;
      }
      dacccfaabfbcbadeebddcabacdffdb9 *= libavformatQ.length % (Math.max(2, 3));
       let unfillv = 1.0;
       let sounds = 0.0;
       let defaultprofilepic7: Map<any, any> = new Map([[String.fromCharCode(97,95,51,51,95,100,101,108,101,103,97,116,101,0),536], [String.fromCharCode(105,95,55,56,95,100,100,114,97,110,103,101,0),20]]);
       let vignetteZ: Map<any, any> = new Map([[String.fromCharCode(106,95,52,50,95,115,112,97,109,0),668], [String.fromCharCode(118,95,57,54,95,99,111,108,114,0),910]]);
       let x_unlockG = false;
      for (let q = 0; q < 3; q++) {
         x_unlockG = sounds < 28.88;
      }
          let predictionp: Map<any, any> = new Map([[String.fromCharCode(117,95,54,50,0),385], [String.fromCharCode(104,97,110,110,105,110,103,95,114,95,50,51,0),897], [String.fromCharCode(105,109,112,114,105,110,116,95,114,95,51,57,0),75]]);
          let specn = 5.0;
         unfillv /= Math.max(1, parseFloat(`${parseInt(`${specn}`)}`));
         predictionp.set(`${predictionp.size}`, predictionp.size * 2);
      while ((parseInt(`${unfillv}`) / (Math.max(vignetteZ.size, 10))) < 1) {
         vignetteZ.set(`${x_unlockG}`, (2 & (x_unlockG ? 2 : 3)));
         break;
      }
          let ajaxM: Array<any> = [296, 827];
          let trophyl = String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,54,95,51,57,0);
         unfillv /= Math.max(5, parseFloat(`${1}`));
         ajaxM.push((String.fromCharCode(67,0) == trophyl ? trophyl.length : ajaxM.length));
      editl = `${dependenciesx.length}`;
   while ((eighteenK / (Math.max(10, iconsettingk))) < 1.67) {
      eighteenK += (dependenciesx == String.fromCharCode(98,0) ? parseInt(`${backiconh}`) : dependenciesx.length);
      break;
   }
       let iconmoreT = 2.0;
       let iconshareW = 1;
      for (let z = 0; z < 1; z++) {
         iconshareW ^= 1;
      }
      let componentregistryh = 7165728 <= iconshareW;
      do {
         iconshareW *= parseInt(`${iconmoreT}`);
         if (componentregistryh) {
            break;
         }
      } while (((2 >> (Math.min(3, Math.abs(iconshareW)))) == 2 && 2 == (parseInt(`${iconmoreT}`) * iconshareW)) && componentregistryh);
         iconmoreT *= parseFloat(`${iconshareW}`);
       let materiald = String.fromCharCode(114,95,53,51,95,114,101,99,121,99,108,101,0);
         iconmoreT -= parseFloat(`${iconshareW}`);
         iconmoreT -= (parseFloat(`${materiald == String.fromCharCode(101,0) ? materiald.length : iconshareW}`));
      iconsettingk *= parseInt(`${eighteenK}`) & iconshareW;
      backiconh *= parseFloat(`${parseInt(`${backiconh}`) << (Math.min(Math.abs(parseInt(`${dacccfaabfbcbadeebddcabacdffdb9}`)), 1))}`);
    if (videoRef.current) {
      videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
    }
  }, [currentDuration]);

  useEffect(() => {
    if (isPause === false) {
      setIsBuffering(false);
    }
  }, [isPause]);

  useEffect(() => {
    ww_runtime.watchAnytimeAdsViewAnalytics({
      ads_slot_id: currentVod.ads_slot_id,
      ads_id: currentVod.ads_id,
      ads_title: currentVod.ads_event_title,
      ads_name: currentVod.ads_name,
    });

    return () => {
      
      const id = currentVod?.mini_video_id;
      if (id) addIdToCache(id);
    };
  }, []);

  useEffect(() => {
    const fn = async () => {
       let iconplay7: Array<any> = [674, 210];
    let middlewareP = String.fromCharCode(122,95,55,49,95,101,108,98,103,0);
    let handlerv = 1.0;
    let libhermesa = String.fromCharCode(116,97,115,107,95,49,95,51,48,0);
    let downloadingX = false;
    let helper6 = false;
    let favoriteY = 1.0;
    let firebasef = 2;
    let filedK = 0.0;
    let ying9 = 3;
    let headerR: Array<any> = [71, 708];
    let final_jvF = true;
    let libloggerm = String.fromCharCode(100,101,100,117,112,101,95,104,95,56,53,0);
    let activec = String.fromCharCode(120,95,54,55,95,115,117,98,102,105,101,108,100,115,0);
    let libreactperfloggerjnin = 4;
   for (let w = 0; w < 2; w++) {
      handlerv *= parseInt(`${handlerv}`) >> (Math.min(Math.abs(parseInt(`${favoriteY}`)), 4));
   }
      middlewareP = "3";

      if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   for (let o = 0; o < 3; o++) {
       let iconnewsshareC: Map<any, any> = new Map([[String.fromCharCode(113,95,50,57,95,110,116,111,108,111,103,121,0),997], [String.fromCharCode(102,95,57,95,116,114,97,110,115,97,99,116,105,111,110,115,0),285], [String.fromCharCode(120,95,54,54,95,99,104,117,110,107,101,100,0),600]]);
         iconnewsshareC.set(`${iconnewsshareC.size}`, iconnewsshareC.size & 1);
         iconnewsshareC = new Map([[`${iconnewsshareC.size}`, iconnewsshareC.size / (Math.max(2, 6))]]);
      if (!Array.from(iconnewsshareC.keys()).includes(`${iconnewsshareC.size}`)) {
         iconnewsshareC.set(`${iconnewsshareC.size}`, iconnewsshareC.size);
      }
      helper6 = favoriteY < 38.4 && 38.4 < filedK;
   }
       let manifestB = 0.0;
       let backgroundS = String.fromCharCode(100,95,52,55,95,99,111,109,112,111,110,101,110,116,115,0);
      for (let g = 0; g < 1; g++) {
          let libmapbufferjniT: Map<any, any> = new Map([[String.fromCharCode(121,95,57,56,95,98,115,119,97,112,100,115,112,0),String.fromCharCode(99,97,110,99,101,108,95,102,95,53,55,0)], [String.fromCharCode(103,105,118,101,110,95,116,95,49,53,0),String.fromCharCode(112,95,55,56,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,0)], [String.fromCharCode(100,101,109,111,116,101,95,105,95,56,52,0),String.fromCharCode(99,117,114,95,98,95,49,52,0)]]);
          let logor = 5.0;
          let downarrowt = String.fromCharCode(99,100,97,116,101,95,105,95,50,54,0);
          let screenW = String.fromCharCode(114,95,51,57,95,116,97,112,112,101,100,0);
         manifestB += parseFloat(`${parseInt(`${logor}`)}`);
         libmapbufferjniT = new Map([[`${libmapbufferjniT.size}`, 2 ^ libmapbufferjniT.size]]);
         downarrowt += `${downarrowt.length + 3}`;
         screenW += `${downarrowt.length}`;
      }
       let iconwechatL = String.fromCharCode(122,95,49,95,113,119,111,114,100,0);
      headerR.push((String.fromCharCode(82,0) == libhermesa ? parseInt(`${filedK}`) : libhermesa.length));
        

   while (middlewareP.startsWith(`${headerR.length}`)) {
      middlewareP = `${parseInt(`${filedK}`) - 1}`;
      break;
   }
      handlerv += parseInt(`${filedK}`);
        

   while (middlewareP.endsWith(`${downloadingX}`)) {
      downloadingX = (((!helper6 ? 43 : iconplay7.length) / (Math.max(iconplay7.length, 6))) <= 43);
      break;
   }
       let snewssharer = false;
       let gesturesr = 1.0;
       let fastB = 5.0;
      for (let d = 0; d < 2; d++) {
          let alertq: Array<any> = [958, 995];
          let lang2 = 5.0;
          let core2 = 2;
         gesturesr *= core2;
         alertq = [alertq.length | 2];
         lang2 -= 1 + parseInt(`${lang2}`);
         core2 &= parseInt(`${lang2}`) & alertq.length;
      }
         gesturesr *= ((snewssharer ? 1 : 3) - parseInt(`${gesturesr}`));
         gesturesr *= ((snewssharer ? 4 : 5) | parseInt(`${fastB}`));
          let megaphoneR = 2.0;
         snewssharer = fastB < 36.17;
         megaphoneR /= Math.max(5, parseFloat(`${parseInt(`${megaphoneR}`) / (Math.max(parseInt(`${megaphoneR}`), 10))}`));
          let dycreatorC: Array<any> = [342, 873];
          let singleX = 3.0;
         fastB *= (parseFloat(`${(snewssharer ? 1 : 1) / (Math.max(parseInt(`${gesturesr}`), 2))}`));
         dycreatorC.push(parseInt(`${singleX}`));
         singleX *= parseInt(`${singleX}`);
       let navigationc: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,95,52,95,55,0),754], [String.fromCharCode(97,95,54,56,95,112,101,110,100,105,110,103,115,0),842]]);
       let libavutilR = String.fromCharCode(98,95,54,51,95,99,111,110,99,117,114,101,110,116,0);
      while (5.57 <= fastB) {
         snewssharer = libavutilR.length > 83;
         break;
      }
       let networka = String.fromCharCode(99,111,111,114,100,95,99,95,57,48,0);
      ying9 += 3 - parseInt(`${favoriteY}`);
        

   for (let n = 0; n < 2; n++) {
       let bootsplashC = String.fromCharCode(103,95,49,52,95,97,101,115,110,105,0);
       let strB: Array<any> = [316, 80];
       let flipper8: Array<any> = [498, 479, 422];
      for (let v = 0; v < 2; v++) {
         bootsplashC = `${bootsplashC.length % 3}`;
      }
      for (let h = 0; h < 2; h++) {
          let flippern = String.fromCharCode(107,95,57,48,95,100,111,99,115,0);
          let blackI: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,95,110,95,53,56,0),String.fromCharCode(111,102,102,115,95,103,95,54,53,0)], [String.fromCharCode(122,95,54,52,95,103,97,105,110,0),String.fromCharCode(122,95,57,48,95,98,117,116,116,101,114,119,111,114,116,104,0)]]);
          let zhengpianz = String.fromCharCode(115,98,117,118,95,102,95,49,49,0);
          let inactivew = String.fromCharCode(112,105,112,95,103,95,54,52,0);
          let uinit_v2f = String.fromCharCode(98,97,116,99,104,95,99,95,52,48,0);
         bootsplashC = `${(flippern == String.fromCharCode(52,0) ? flippern.length : bootsplashC.length)}`;
         blackI.set(uinit_v2f, uinit_v2f.length);
         zhengpianz = `${1 * inactivew.length}`;
         inactivew = "2";
      }
      helper6 = final_jvF;
   }
   for (let l = 0; l < 3; l++) {
       let moviesd = 5.0;
       let libreactperfloggerjniY = 2.0;
       let humidityA = true;
      while (humidityA || (3.9 + libreactperfloggerjniY) < 5.23) {
          let formx = 3.0;
          let phoneshare5 = 3.0;
          let previewa = 1.0;
          let promotionf = true;
          let streamingK = 4.0;
         libreactperfloggerjniY += parseInt(`${moviesd}`);
         formx /= Math.max(parseFloat(`${1 & parseInt(`${streamingK}`)}`), 5);
         phoneshare5 -= parseFloat(`${parseInt(`${formx}`)}`);
         previewa /= Math.max(3, (parseFloat(`${parseInt(`${streamingK}`) / (Math.max(2, (promotionf ? 4 : 2)))}`)));
         promotionf = (streamingK * phoneshare5) < 100.11;
         break;
      }
          let remindera = 5.0;
          let langS = true;
         humidityA = langS || libreactperfloggerjniY < 39.66;
         remindera *= parseInt(`${remindera}`) * parseInt(`${remindera}`);
         langS = remindera == remindera;
         humidityA = !humidityA;
         moviesd *= parseFloat(`${parseInt(`${libreactperfloggerjniY}`) | 3}`);
      if (5.65 > (libreactperfloggerjniY + moviesd)) {
         libreactperfloggerjniY /= Math.max(((humidityA ? 1 : 4) & parseInt(`${libreactperfloggerjniY}`)), 4);
      }
          let formK = false;
          let mutedu = String.fromCharCode(110,95,56,95,100,101,98,97,110,100,0);
         libreactperfloggerjniY *= parseInt(`${moviesd}`);
         formK = mutedu.length > 96 && formK;
         mutedu += `${mutedu.length ^ 1}`;
          let securityV = 3.0;
          let regenge: Array<any> = [704, 704];
          let awayteamfieldC = String.fromCharCode(110,95,51,56,95,115,117,103,103,101,115,116,101,100,0);
         humidityA = 81.95 >= libreactperfloggerjniY;
         securityV *= regenge.length ^ awayteamfieldC.length;
         regenge.push(2 * awayteamfieldC.length);
         libreactperfloggerjniY -= 3 + parseInt(`${libreactperfloggerjniY}`);
       let profilea: Map<any, any> = new Map([[String.fromCharCode(103,95,49,51,95,121,117,118,103,98,114,112,0),70], [String.fromCharCode(99,104,97,115,101,95,100,95,54,53,0),210], [String.fromCharCode(99,95,49,57,95,102,116,118,108,97,115,116,110,111,100,101,0),133]]);
      favoriteY *= parseFloat(`${ying9 * 2}`);
   }

        const fileLocation =
          RNFetchBlob.fs.dirs.DocumentDir +
          `/videocache/${currentVod.mini_video_id}.mp4`;

   while ((middlewareP.length % (Math.max(7, headerR.length))) >= 1 && 3 >= (middlewareP.length % 1)) {
      headerR = [parseInt(`${filedK}`) * 1];
      break;
   }
   while (4 > (parseInt(`${favoriteY}`) - iconplay7.length) || (iconplay7.length - parseInt(`${favoriteY}`)) > 4) {
      iconplay7.push(parseInt(`${handlerv}`));
      break;
   }

        const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   if (!helper6) {
      downloadingX = 64.71 >= filedK || headerR.length >= 45;
   }
   if (!final_jvF) {
      firebasef ^= firebasef;
   }

        if (fileExist) {

      ying9 <<= Math.min(Math.abs(firebasef), 4);
      firebasef += (middlewareP == String.fromCharCode(95,0) ? parseInt(`${favoriteY}`) : middlewareP.length);
          const fileIsEmpty =
            (await RNFetchBlob.fs.stat(fileLocation)).size == 0;

      firebasef |= 2;
      filedK /= Math.max(2, iconplay7.length);
          

      downloadingX = 55 >= firebasef || 65.32 >= handlerv;
   while (1.47 > filedK || 3.44 > (1.47 * filedK)) {
      downloadingX = headerR.length >= 42;
      break;
   }
          if (!fileIsEmpty) {

   if (headerR.includes(favoriteY)) {
      headerR = [ying9 ^ 1];
   }
      handlerv += ((helper6 ? 1 : 3) & parseInt(`${favoriteY}`));
            setMiniVodUrl(`${fileLocation}`);
          } else {

       let rcopy_qa = String.fromCharCode(119,95,51,52,95,111,116,111,115,0);
         rcopy_qa = `${rcopy_qa.length}`;
      let modeW = rcopy_qa == String.fromCharCode(53,110,104,120,52,0);
      do {
         rcopy_qa += `${1 + rcopy_qa.length}`;
         if (modeW) {
            break;
         }
      } while (modeW && (rcopy_qa.length == 3));
      let mappingC = rcopy_qa == String.fromCharCode(54,105,120,55,52,108,57,107,95,0);
      do {
          let room2 = String.fromCharCode(102,95,51,55,95,97,99,115,107,105,112,0);
          let package_y6P = String.fromCharCode(97,108,103,95,99,95,55,54,0);
          let sportsL: Array<any> = [642, 915];
          let inactiveU: Array<any> = [647, 268, 473];
         rcopy_qa = `${sportsL.length * rcopy_qa.length}`;
         room2 += "3";
         package_y6P = `${2 & package_y6P.length}`;
         sportsL.push(inactiveU.length / (Math.max(package_y6P.length, 6)));
         inactiveU = [inactiveU.length];
         if (mappingC) {
            break;
         }
      } while ((rcopy_qa.length > 5) && mappingC);
      helper6 = !downloadingX;
   while ((iconplay7.length / 4) >= 4 || 5 >= (middlewareP.length / 4)) {
      iconplay7.push(parseInt(`${filedK}`) * 1);
      break;
   }
            

      middlewareP += "1";
   let userY = headerR.length >= 9568390;
   do {
       let kcopy_n_ = String.fromCharCode(104,105,110,116,115,95,57,95,56,48,0);
       let forwardm: Map<any, any> = new Map([[String.fromCharCode(117,95,56,55,95,108,101,97,102,0),596], [String.fromCharCode(109,101,114,103,101,114,95,106,95,51,55,0),844]]);
       let uimanagerp: Array<any> = [820, 903, 406];
       let libaneF = false;
       let save4 = true;
      if (save4) {
          let placeholderW = 1;
          let chinaN = String.fromCharCode(102,105,108,101,116,105,109,101,95,102,95,52,51,0);
          let grayq = 0;
          let topicl = 0;
          let iconwatchnowL = String.fromCharCode(99,116,105,111,110,95,51,95,49,49,0);
         libaneF = libaneF && grayq < 74;
         placeholderW &= 2;
         chinaN = `${chinaN.length + topicl}`;
         grayq <<= Math.min(4, Math.abs(topicl));
         iconwatchnowL = `${topicl}`;
      }
      if ((5 * forwardm.size) >= 4) {
          let playlistE = 2.0;
         libaneF = kcopy_n_.length <= 51 || !save4;
         playlistE /= Math.max(2, parseInt(`${playlistE}`));
      }
         kcopy_n_ = `${forwardm.size}`;
         kcopy_n_ += `${uimanagerp.length | 1}`;
         forwardm.set(`${kcopy_n_}`, (String.fromCharCode(120,0) == kcopy_n_ ? kcopy_n_.length : forwardm.size));
          let friendsp = String.fromCharCode(100,95,53,53,95,101,100,103,101,115,0);
         libaneF = (17 > (friendsp.length << (Math.min(1, Math.abs((libaneF ? friendsp.length : 17))))));
         kcopy_n_ = `${((libaneF ? 3 : 2) | uimanagerp.length)}`;
      let scorec = kcopy_n_.length >= 5691994;
      do {
         kcopy_n_ += `${(uimanagerp.length | (save4 ? 1 : 5))}`;
         if (scorec) {
            break;
         }
      } while (scorec && (!kcopy_n_.startsWith(`${uimanagerp.length}`)));
      while (1 >= forwardm.size) {
         save4 = (((libaneF ? kcopy_n_.length : 100) / (Math.max(5, kcopy_n_.length))) <= 100);
         break;
      }
         forwardm.set(`${save4}`, forwardm.size);
          let iconsettingU = 5;
         kcopy_n_ = `${(1 & (save4 ? 4 : 5))}`;
         iconsettingU += 1 / (Math.max(10, iconsettingU));
      for (let d = 0; d < 3; d++) {
         forwardm = new Map([[`${forwardm.size}`, 3 ^ forwardm.size]]);
      }
      if (!save4) {
         forwardm.set(`${libaneF}`, 2);
      }
      let style8 = save4 ? !save4 : save4;
      do {
         save4 = forwardm.get(`${save4}`) != null;
         if (style8) {
            break;
         }
      } while ((3 >= kcopy_n_.length || save4) && style8);
         uimanagerp = [kcopy_n_.length & 1];
      headerR.push(forwardm.size);
      if (userY) {
         break;
      }
   } while (userY && (favoriteY < parseFloat(`${headerR.length}`)));
            setMiniVodUrl(currentVod.ads_pic);
          }
        } else {

      downloadingX = headerR.includes(favoriteY);
      iconplay7.push(1 ^ middlewareP.length);
          

   let thumbnailv = helper6 ? !helper6 : helper6;
   do {
      helper6 = headerR.length > 53;
      if (thumbnailv) {
         break;
      }
   } while (thumbnailv && (!helper6));
   if (5 >= iconplay7.length) {
       let dycreatorR = String.fromCharCode(109,111,100,105,102,121,95,48,95,54,49,0);
       let auto_iG = 2.0;
       let interstitiale = String.fromCharCode(102,105,108,116,101,114,95,97,95,49,0);
       let c_hashj = String.fromCharCode(117,110,98,111,120,95,115,95,55,48,0);
      while (dycreatorR.length >= 1) {
         dycreatorR += `${(String.fromCharCode(108,0) == dycreatorR ? dycreatorR.length : parseInt(`${auto_iG}`))}`;
         break;
      }
         dycreatorR = `${dycreatorR.length >> (Math.min(4, Math.abs(parseInt(`${auto_iG}`))))}`;
      if ((auto_iG / (Math.max(4.47, 4))) <= 5.34) {
         interstitiale += `${c_hashj.length}`;
      }
      let room1 = 9445301.0 >= auto_iG;
      do {
          let kuaishouA = String.fromCharCode(115,112,97,99,101,114,95,51,95,57,57,0);
          let scoref = String.fromCharCode(112,95,55,95,98,97,100,0);
          let adultQ = String.fromCharCode(98,105,110,107,97,117,100,105,111,95,114,95,56,48,0);
         auto_iG *= 2;
         kuaishouA = `${(adultQ == String.fromCharCode(88,0) ? adultQ.length : scoref.length)}`;
         scoref = `${kuaishouA.length}`;
         if (room1) {
            break;
         }
      } while ((interstitiale.endsWith(`${auto_iG}`)) && room1);
          let singleN = String.fromCharCode(106,95,57,49,0);
          let roundM = true;
          let splashv = String.fromCharCode(109,95,55,50,95,111,117,116,113,0);
         dycreatorR = `${parseInt(`${auto_iG}`) ^ 1}`;
         singleN += `${(singleN == String.fromCharCode(80,0) ? singleN.length : (roundM ? 4 : 2))}`;
         roundM = singleN.length >= 43;
         splashv = `${splashv.length / 3}`;
       let themeF = String.fromCharCode(99,95,49,55,95,97,112,112,118,101,121,111,114,0);
       let theme4 = String.fromCharCode(115,95,55,52,95,99,111,108,108,97,103,101,0);
       let projecti = String.fromCharCode(115,101,103,117,101,95,50,95,51,54,0);
      let actionsx = 7091467 <= interstitiale.length;
      do {
         interstitiale = `${(String.fromCharCode(75,0) == projecti ? parseInt(`${auto_iG}`) : projecti.length)}`;
         if (actionsx) {
            break;
         }
      } while (actionsx && (theme4 == String.fromCharCode(73,0)));
          let eactd = 4.0;
          let trophyR = String.fromCharCode(98,101,104,97,118,105,111,114,115,95,99,95,53,0);
         auto_iG -= parseInt(`${eactd}`) * parseInt(`${auto_iG}`);
         eactd /= Math.max(5, trophyR.length % 3);
         trophyR = `${trophyR.length & trophyR.length}`;
         auto_iG += theme4.length * parseInt(`${auto_iG}`);
      let privacy6 = String.fromCharCode(103,113,111,106,114,105,53,0) == interstitiale;
      do {
          let libswresampleQ = true;
          let sina2: Array<any> = [906, 369, 105];
          let footballfiledlayouth: Map<any, any> = new Map([[String.fromCharCode(97,95,50,53,95,97,116,101,120,105,116,0),String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,95,122,95,51,57,0)], [String.fromCharCode(104,101,120,95,50,95,53,50,0),String.fromCharCode(114,95,52,53,95,100,114,105,118,101,114,115,0)], [String.fromCharCode(112,114,111,98,101,95,109,95,49,52,0),String.fromCharCode(98,95,57,48,95,116,104,105,99,107,0)]]);
          let activity9: Map<any, any> = new Map([[String.fromCharCode(98,95,57,48,95,117,105,111,116,111,109,98,117,102,0),461], [String.fromCharCode(102,95,53,56,95,97,105,109,105,110,103,0),398], [String.fromCharCode(115,117,98,104,101,97,100,101,114,95,51,95,52,57,0),316]]);
         interstitiale = `${c_hashj.length << (Math.min(Math.abs(3), 4))}`;
         libswresampleQ = (52 > (sina2.length - (libswresampleQ ? 52 : sina2.length)));
         footballfiledlayouth.set(`${sina2.length}`, 1);
         activity9.set(`${sina2.length}`, sina2.length << (Math.min(1, Math.abs(activity9.size))));
         if (privacy6) {
            break;
         }
      } while ((interstitiale.length <= c_hashj.length) && privacy6);
         dycreatorR += `${themeF.length}`;
      helper6 = !downloadingX;
   }
          setMiniVodUrl(currentVod.ads_pic);
        }
      }
    };
    if (DOWNLOAD_WATCH_ANYTIME === true) {
      
      fn();
    }
  }, [isBuffering, isPause]);

  useEffect(() => {
    setMiniVodUrl(currentVod.ads_pic);
  }, [currentVod]);

  const handleOnReadyForDisplay = useCallback(() => {
       let traminih = String.fromCharCode(108,95,51,55,95,100,99,116,99,111,101,102,0);
    let subtextl: Map<any, any> = new Map([[String.fromCharCode(100,99,116,95,106,95,49,51,0),38], [String.fromCharCode(108,111,103,105,115,116,105,99,95,48,95,55,51,0),138], [String.fromCharCode(100,95,49,95,105,99,99,112,0),932]]);
    let found2: Array<any> = [847, 118];
    let images2 = String.fromCharCode(98,95,52,55,95,112,114,111,114,101,115,100,115,112,0);
    let sinav = String.fromCharCode(114,95,50,54,95,99,105,118,105,108,0);
    let privatechatbgP: Array<any> = [203, 614];
    let bridge2 = 2.0;
    let sportsB: Array<any> = [367, 95, 906];
    let bridgeB = String.fromCharCode(105,100,101,110,116,105,102,101,114,95,103,95,54,49,0);
    let baidug = true;
    let reactnativejs2 = String.fromCharCode(121,95,49,49,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
    let runtimel = true;
    let downj = String.fromCharCode(114,101,116,114,105,101,114,95,118,95,50,52,0);
      sinav = `${found2.length}`;
      bridge2 += 2;
   while (4 < images2.length) {
      images2 += `${3 - images2.length}`;
      break;
   }
   let libavfilter6 = found2.length <= 7908191;
   do {
      found2.push(traminih.length % (Math.max(5, parseInt(`${bridge2}`))));
      if (libavfilter6) {
         break;
      }
   } while ((3 > (found2.length - 5)) && libavfilter6);
   if ((sportsB.length / (Math.max(traminih.length, 2))) < 2) {
      traminih += "2";
   }
      images2 += `${privatechatbgP.length}`;
       let backiconS = false;
       let editE = String.fromCharCode(112,101,114,102,111,114,109,105,110,103,95,114,95,52,51,0);
         editE += `${((backiconS ? 5 : 1) | 2)}`;
       let traminiQ: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,120,95,112,95,53,57,0),102], [String.fromCharCode(99,101,108,101,98,114,97,116,101,95,117,95,49,51,0),782], [String.fromCharCode(116,111,103,103,108,105,110,103,95,119,95,51,0),179]]);
      let neonC = editE == String.fromCharCode(120,52,120,111,103,112,116,112,119,0);
      do {
         editE = `${2 ^ traminiQ.size}`;
         if (neonC) {
            break;
         }
      } while (((2 * editE.length) >= 1 || (editE.length * 2) >= 5) && neonC);
      let flagZ = backiconS ? !backiconS : backiconS;
      do {
         backiconS = !backiconS;
         if (flagZ) {
            break;
         }
      } while ((2 < editE.length) && flagZ);
          let slider1: Array<any> = [115, 134];
          let libpangleflippedZ = true;
         traminiQ.set(`${libpangleflippedZ}`, 2 & slider1.length);
      while (traminiQ.size <= 5) {
         traminiQ.set(`${backiconS}`, ((backiconS ? 2 : 3) + editE.length));
         break;
      }
      bridgeB = `${1 % (Math.max(5, images2.length))}`;
   for (let f = 0; f < 2; f++) {
      sinav += `${bridgeB.length >> (Math.min(Math.abs(2), 5))}`;
   }
       let libturbomodulejsijni2 = String.fromCharCode(104,113,120,100,115,112,95,100,95,57,51,0);
       let layoutP = String.fromCharCode(112,101,114,115,105,115,116,97,110,116,95,50,95,57,53,0);
       let forwardb = false;
          let mbnativeadvancedm = false;
         forwardb = (mbnativeadvancedm ? !forwardb : !mbnativeadvancedm);
         libturbomodulejsijni2 += `${((forwardb ? 1 : 3))}`;
          let anewarchdefaultsO: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,95,116,95,56,52,0),true ], [String.fromCharCode(114,95,52,51,95,109,111,110,116,0),false ], [String.fromCharCode(105,95,54,48,95,108,105,103,104,116,101,110,105,110,103,0),true ]]);
         libturbomodulejsijni2 = `${1 / (Math.max(8, anewarchdefaultsO.size))}`;
         forwardb = layoutP.length == 88;
      if (!layoutP.endsWith(`${forwardb}`)) {
         layoutP = "3";
      }
      if (3 < layoutP.length) {
          let b_titleE = String.fromCharCode(98,95,54,51,95,99,111,100,101,99,100,97,116,97,0);
          let unimplementedviewc: Map<any, any> = new Map([[String.fromCharCode(115,116,114,115,101,112,95,99,95,50,51,0),597], [String.fromCharCode(115,95,53,52,95,112,114,105,110,116,102,0),733]]);
          let libsentryt = String.fromCharCode(100,105,103,101,115,116,115,95,118,95,56,56,0);
          let playF: Array<any> = [934, 211, 739];
          let statisticsinactiveL = 4.0;
         layoutP = `${((forwardb ? 3 : 1) & layoutP.length)}`;
         b_titleE = "2";
         unimplementedviewc.set(`${statisticsinactiveL}`, 1);
         libsentryt += `${playF.length}`;
         playF = [playF.length << (Math.min(b_titleE.length, 3))];
         statisticsinactiveL /= Math.max(playF.length / 2, 2);
      }
         layoutP = `${layoutP.length | libturbomodulejsijni2.length}`;
         libturbomodulejsijni2 = `${((forwardb ? 1 : 2) - 2)}`;
      if (layoutP.length > 4) {
          let footballM = String.fromCharCode(115,116,111,114,121,98,111,97,114,100,95,102,95,56,56,0);
          let dycreatork = 1;
          let macauK = 3.0;
          let fcdaebecbcbafcdfceaaeccfeacdb0 = 3.0;
          let overs = 3.0;
         layoutP = `${parseInt(`${fcdaebecbcbafcdfceaaeccfeacdb0}`)}`;
         footballM = `${footballM.length << (Math.min(1, Math.abs(parseInt(`${overs}`))))}`;
         dycreatork %= Math.max(footballM.length | 2, 4);
         macauK *= parseFloat(`${2}`);
         fcdaebecbcbafcdfceaaeccfeacdb0 /= Math.max(dycreatork / 2, 1);
         overs /= Math.max(3, parseFloat(`${footballM.length}`));
      }
      bridgeB += `${(sinav == String.fromCharCode(66,0) ? sinav.length : layoutP.length)}`;
   for (let o = 0; o < 1; o++) {
       let executor_: Array<any> = [267, 109];
       let pushG: Array<any> = [786, 706, 576];
       let modee = String.fromCharCode(108,95,52,52,95,99,108,111,115,101,115,0);
      if (1 == (executor_.length - pushG.length) && 2 == (pushG.length - 1)) {
         pushG.push(pushG.length);
      }
          let suggestionk = String.fromCharCode(102,95,52,55,95,98,111,111,115,116,0);
          let plus2: Array<any> = [String.fromCharCode(122,95,52,50,95,109,111,100,105,102,121,0), String.fromCharCode(112,95,49,56,95,116,114,97,110,115,108,97,116,101,100,0), String.fromCharCode(110,111,109,105,110,97,108,95,51,95,53,52,0)];
          let dplusN = false;
         pushG.push(modee.length << (Math.min(1, plus2.length)));
         suggestionk = `${((dplusN ? 4 : 2))}`;
         plus2.push((suggestionk == String.fromCharCode(50,0) ? (dplusN ? 2 : 4) : suggestionk.length));
      for (let t = 0; t < 1; t++) {
          let dragclose5 = false;
          let shrink5 = true;
          let notificationfillemptyS: Array<any> = [941, 447];
          let telemetrys = String.fromCharCode(101,120,116,101,114,110,95,48,95,50,48,0);
         executor_.push(telemetrys.length % 1);
         dragclose5 = (dragclose5 ? !shrink5 : !dragclose5);
         shrink5 = dragclose5;
         notificationfillemptyS.push(((shrink5 ? 3 : 1) - 1));
         telemetrys = "3";
      }
          let short_9h = 2.0;
          let layoute = 2.0;
         pushG.push(parseInt(`${short_9h}`) * modee.length);
         short_9h -= parseFloat(`${parseInt(`${layoute}`)}`);
         pushG = [modee.length];
         executor_.push(pushG.length * executor_.length);
      let imagemanager3 = pushG.length >= 5158755;
      do {
         pushG.push(1 << (Math.min(1, modee.length)));
         if (imagemanager3) {
            break;
         }
      } while ((modee.length > 4) && imagemanager3);
         modee += `${executor_.length / 1}`;
          let sinaa = true;
          let latnf = 1.0;
         pushG = [((sinaa ? 3 : 4))];
         sinaa = latnf <= 69.74;
         latnf += parseFloat(`${parseInt(`${latnf}`)}`);
      sinav = `${(traminih == String.fromCharCode(83,0) ? sinav.length : traminih.length)}`;
   }
   let overlay1 = String.fromCharCode(107,118,119,109,111,116,101,110,97,110,0) == bridgeB;
   do {
      bridgeB = `${images2.length}`;
      if (overlay1) {
         break;
      }
   } while ((privatechatbgP.length == bridgeB.length) && overlay1);
      bridgeB = `${found2.length | 2}`;
   for (let j = 0; j < 2; j++) {
       let searchM = 0.0;
         searchM /= Math.max(parseInt(`${searchM}`) & 1, 1);
      for (let e = 0; e < 2; e++) {
          let reactnativeultimatelistviewz = String.fromCharCode(97,108,97,99,95,111,95,49,53,0);
          let spinnerA = String.fromCharCode(117,95,51,55,95,117,110,102,114,101,101,122,101,0);
          let statisticsz = 5;
          let heartA = 5.0;
          let read5 = false;
         searchM /= Math.max(statisticsz, 2);
         reactnativeultimatelistviewz += `${spinnerA.length}`;
         spinnerA = `${((read5 ? 3 : 3) >> (Math.min(Math.abs(1), 4)))}`;
         statisticsz -= ((read5 ? 5 : 2));
         heartA /= Math.max(3, parseFloat(`${reactnativeultimatelistviewz.length << (Math.min(Math.abs(1), 5))}`));
      }
         searchM += 3 + parseInt(`${searchM}`);
      privatechatbgP = [found2.length & 2];
   }
   let valuesm = privatechatbgP.length <= 6237723;
   do {
      privatechatbgP = [1 % (Math.max(9, parseInt(`${bridge2}`)))];
      if (valuesm) {
         break;
      }
   } while (valuesm && (5 < (traminih.length & privatechatbgP.length)));
       let bodano = 0.0;
       let nextU = String.fromCharCode(108,95,54,53,95,102,99,109,117,108,0);
          let downloadingV = String.fromCharCode(116,95,54,54,0);
          let connectionl = String.fromCharCode(104,105,103,104,119,97,116,101,114,95,54,95,49,0);
          let libjsinspectorg = String.fromCharCode(99,111,114,110,101,114,115,95,121,95,53,56,0);
         nextU += `${1 & downloadingV.length}`;
         downloadingV += `${(String.fromCharCode(56,0) == connectionl ? libjsinspectorg.length : connectionl.length)}`;
         libjsinspectorg = `${connectionl.length & libjsinspectorg.length}`;
       let arrowf = 1.0;
      while (nextU.includes(`${arrowf}`)) {
         nextU += `${nextU.length}`;
         break;
      }
         nextU += `${parseInt(`${arrowf}`) >> (Math.min(4, Math.abs(2)))}`;
      let libcrashsdkQ = 6730621 >= nextU.length;
      do {
         nextU += `${parseInt(`${bodano}`)}`;
         if (libcrashsdkQ) {
            break;
         }
      } while (libcrashsdkQ && ((nextU.length + 1) < 3 || 1 < (parseInt(`${bodano}`) / (Math.max(nextU.length, 8)))));
         nextU = `${1 & parseInt(`${bodano}`)}`;
      images2 = `${sportsB.length % (Math.max(1, sinav.length))}`;

    setVideoReadyIos(true);

   if (!traminih.endsWith(`${privatechatbgP.length}`)) {
      privatechatbgP = [2];
   }
       let macauH = String.fromCharCode(115,110,97,112,115,104,111,116,95,55,95,54,55,0);
      while (macauH.includes(`${macauH.length}`)) {
          let zhengpianj = String.fromCharCode(116,114,97,110,115,102,101,114,95,100,95,49,48,48,0);
          let giftbuttonO = false;
         macauH = `${(zhengpianj.length + (giftbuttonO ? 4 : 1))}`;
         break;
      }
         macauH = "2";
         macauH += `${macauH.length ^ 2}`;
      bridgeB = `${macauH.length << (Math.min(4, bridgeB.length))}`;
      bridgeB = `${subtextl.size}`;
   if (3 < (traminih.length | 5)) {
      traminih += `${(sinav == String.fromCharCode(90,0) ? sinav.length : found2.length)}`;
   }
      baidug = traminih.length < reactnativejs2.length;
      traminih = `${parseInt(`${bridge2}`)}`;
      baidug = reactnativejs2 == sinav;
      bridge2 += 2;
   let codez = 9556284 <= subtextl.size;
   do {
       let refreshY = String.fromCharCode(97,117,116,104,114,111,114,105,122,97,116,105,111,110,95,98,95,52,49,0);
       let profileframef: Array<any> = [234, 256];
       let nativeexJ = 5.0;
       let stringsV = String.fromCharCode(110,95,52,54,95,100,101,116,97,105,108,101,100,0);
       let shootyesgoalJ = 4;
         nativeexJ -= shootyesgoalJ;
         nativeexJ *= 1;
      let gesturesU = 6678680 >= stringsV.length;
      do {
          let baidui: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,95,108,95,49,50,0),true ], [String.fromCharCode(112,95,55,56,95,97,98,98,114,0),true ]]);
          let popup6: Map<any, any> = new Map([[String.fromCharCode(102,95,51,50,95,108,111,103,115,97,109,112,108,101,0),254], [String.fromCharCode(97,112,112,101,110,100,99,104,97,114,95,121,95,55,52,0),989], [String.fromCharCode(104,97,108,108,95,56,95,52,57,0),140]]);
          let mails = false;
         stringsV = `${profileframef.length / 1}`;
         baidui.set(`${baidui.size}`, popup6.size % (Math.max(1, baidui.size)));
         popup6 = new Map([[`${popup6.size}`, 2 * baidui.size]]);
         mails = baidui.size >= 14;
         if (gesturesU) {
            break;
         }
      } while ((5 == (stringsV.length << (Math.min(4, profileframef.length)))) && gesturesU);
         profileframef = [profileframef.length % 2];
      let componentregistryy = 9856029 >= profileframef.length;
      do {
         profileframef = [refreshY.length];
         if (componentregistryy) {
            break;
         }
      } while ((profileframef.length == 1) && componentregistryy);
         stringsV += `${stringsV.length * 2}`;
         nativeexJ *= (stringsV == String.fromCharCode(116,0) ? stringsV.length : refreshY.length);
      if ((shootyesgoalJ | 1) <= 2) {
         shootyesgoalJ *= 2 & parseInt(`${nativeexJ}`);
      }
       let project2 = String.fromCharCode(97,95,49,55,95,103,101,116,111,112,116,0);
      for (let d = 0; d < 1; d++) {
          let fcdaebecbcbafcdfceaaeccfeacdbP = String.fromCharCode(121,95,50,95,98,97,115,101,0);
          let whitetickb = String.fromCharCode(101,95,55,56,95,115,113,108,105,116,101,114,101,98,97,115,101,114,0);
          let libreanimatedv = String.fromCharCode(105,110,102,111,108,100,101,114,95,51,95,54,50,0);
          let register_wtr = String.fromCharCode(120,95,57,50,95,108,105,115,116,110,101,114,115,0);
         stringsV = `${parseInt(`${nativeexJ}`) | 3}`;
         fcdaebecbcbafcdfceaaeccfeacdbP = `${(libreanimatedv == String.fromCharCode(105,0) ? libreanimatedv.length : register_wtr.length)}`;
         whitetickb += `${fcdaebecbcbafcdfceaaeccfeacdbP.length * 3}`;
         register_wtr = `${whitetickb.length % 1}`;
      }
         profileframef = [3 << (Math.min(2, Math.abs(shootyesgoalJ)))];
      subtextl = new Map([[bridgeB, (stringsV == String.fromCharCode(109,0) ? stringsV.length : bridgeB.length)]]);
      if (codez) {
         break;
      }
   } while (codez && (!Array.from(subtextl.keys()).includes(`${bridge2}`)));
   while (images2.length == found2.length) {
      images2 = `${3 & parseInt(`${bridge2}`)}`;
      break;
   }
      subtextl = new Map([[sinav, parseInt(`${bridge2}`) ^ 3]]);
   let libfbjnii = String.fromCharCode(111,53,119,0) == reactnativejs2;
   do {
      reactnativejs2 += `${2 - bridgeB.length}`;
      if (libfbjnii) {
         break;
      }
   } while ((reactnativejs2.endsWith(`${subtextl.size}`)) && libfbjnii);
       let traminiz: Map<any, any> = new Map([[String.fromCharCode(122,95,51,51,95,101,110,99,111,100,105,110,103,0),713], [String.fromCharCode(110,97,110,111,115,118,103,95,119,95,56,53,0),220], [String.fromCharCode(120,95,52,48,95,98,97,100,114,101,113,0),763]]);
       let fileZ = 1.0;
       let becomeH = 3.0;
      if ((becomeH * fileZ) > 1.63 && 4.59 > (1.63 - fileZ)) {
         fileZ /= Math.max(2, 3);
      }
      for (let k = 0; k < 1; k++) {
          let circleT: Array<any> = [146, 704, 4];
          let actiond = 3;
         becomeH *= parseFloat(`${2}`);
         circleT = [2 * circleT.length];
         actiond /= Math.max(2, 1);
      }
      for (let b = 0; b < 1; b++) {
         traminiz = new Map([[`${fileZ}`, 1 - parseInt(`${becomeH}`)]]);
      }
      let mbridge6 = fileZ <= 7565273.0;
      do {
         fileZ *= 1 + parseInt(`${becomeH}`);
         if (mbridge6) {
            break;
         }
      } while ((traminiz.size <= fileZ) && mbridge6);
         becomeH *= parseFloat(`${parseInt(`${fileZ}`)}`);
         traminiz = new Map([[`${traminiz.size}`, parseInt(`${fileZ}`)]]);
         becomeH -= parseFloat(`${traminiz.size}`);
         traminiz.set(`${fileZ}`, 1);
         becomeH -= parseFloat(`${parseInt(`${fileZ}`)}`);
      found2 = [parseInt(`${bridge2}`)];
   let jingdongY = baidug ? !baidug : baidug;
   do {
      baidug = !images2.includes(`${bridge2}`);
      if (jingdongY) {
         break;
      }
   } while ((!baidug) && jingdongY);
   if (downj.length >= 2 || !runtimel) {
      runtimel = found2.includes(runtimel);
   }
    setVideoReadyAndroid(true);
  }, []);

  const onAdsBtnPress = () => {
       let alertj = String.fromCharCode(109,95,51,48,95,113,114,99,111,100,101,0);
    let splash4 = 2;
    let feedbackx = String.fromCharCode(104,101,97,100,112,104,111,110,101,95,122,95,55,0);
    let sharedc: Map<any, any> = new Map([[String.fromCharCode(116,95,57,50,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0),String.fromCharCode(116,114,101,120,95,121,95,56,56,0)], [String.fromCharCode(107,95,55,57,95,119,101,105,103,104,116,0),String.fromCharCode(109,111,110,111,98,105,116,95,116,95,54,48,0)]]);
    let icon6 = 1;
    let bootU = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,113,95,53,52,0);
    let chinasameb = String.fromCharCode(97,110,105,109,97,116,111,114,115,95,100,95,57,55,0);
    let umengP = String.fromCharCode(115,105,103,110,105,110,103,95,109,95,56,51,0);
    let middle5 = 0.0;
    let frame_w7b = String.fromCharCode(98,95,49,49,0);
    let giftH = String.fromCharCode(121,95,49,48,95,122,101,114,111,101,115,0);
    let blackG = false;
    let injuryM = 0.0;
    let spinnerF = 1.0;
    let fastforwardG = String.fromCharCode(99,111,100,101,99,115,95,117,95,57,56,0);
    let analyticsL: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,108,97,116,101,115,95,50,95,57,0),String.fromCharCode(104,95,55,57,95,115,117,103,103,101,115,116,0)], [String.fromCharCode(115,95,55,53,95,99,111,100,101,99,99,116,108,0),String.fromCharCode(97,108,116,105,118,101,99,95,98,95,55,54,0)]]);
       let orangeclockA = String.fromCharCode(115,104,105,109,115,95,108,95,55,54,0);
       let connectionH = 3.0;
       let d_hashd: Array<any> = [String.fromCharCode(113,95,57,50,95,98,121,116,101,108,101,110,0), String.fromCharCode(114,95,57,55,95,112,114,111,118,105,100,101,115,0)];
      let bggradientA = 8446368.0 <= connectionH;
      do {
          let runtimeschedulere = String.fromCharCode(116,111,110,101,95,56,95,52,53,0);
          let selectionb = String.fromCharCode(103,95,56,49,95,106,118,101,114,115,105,111,110,0);
          let reducerx: Map<any, any> = new Map([[String.fromCharCode(114,116,99,119,101,98,95,53,95,55,56,0),882], [String.fromCharCode(102,97,114,95,54,95,50,0),748], [String.fromCharCode(100,95,51,50,95,114,101,112,97,105,110,116,0),176]]);
          let champion5 = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,95,122,95,49,54,0);
         connectionH += parseFloat(`${1}`);
         runtimeschedulere = `${reducerx.size / (Math.max(8, runtimeschedulere.length))}`;
         selectionb = `${champion5.length}`;
         reducerx.set(`${champion5}`, reducerx.size % (Math.max(1, 2)));
         if (bggradientA) {
            break;
         }
      } while (bggradientA && ((parseFloat(`${d_hashd.length}`) * connectionH) == 4.100 && 2.27 == (4.100 * connectionH)));
      while (d_hashd.length > 5) {
         d_hashd.push(parseInt(`${connectionH}`) + d_hashd.length);
         break;
      }
      for (let c = 0; c < 1; c++) {
         d_hashd = [parseInt(`${connectionH}`) * d_hashd.length];
      }
          let textg = String.fromCharCode(118,95,50,48,95,98,114,97,110,100,115,0);
         connectionH -= parseFloat(`${textg.length}`);
         orangeclockA = "3";
         d_hashd.push(orangeclockA.length - d_hashd.length);
      if (1.49 > connectionH) {
         connectionH *= parseFloat(`${1}`);
      }
      for (let c = 0; c < 3; c++) {
         orangeclockA += `${parseInt(`${connectionH}`) | 3}`;
      }
       let privatechatbg9 = String.fromCharCode(99,117,114,118,101,115,95,49,95,50,49,0);
       let redirectw = String.fromCharCode(98,95,49,52,95,109,105,110,114,0);
      bootU = "1";
      sharedc = new Map([[`${sharedc.size}`, sharedc.size % 3]]);
   while (alertj != String.fromCharCode(121,0)) {
      frame_w7b += `${icon6 ^ 2}`;
      break;
   }

    if (!currentVod?.ads_url || currentVod?.ads_url == "") {

   if (1 > (parseInt(`${middle5}`) / (Math.max(1, frame_w7b.length)))) {
      middle5 -= parseFloat(`${alertj.length >> (Math.min(Math.abs(3), 1))}`);
   }
      injuryM += parseInt(`${middle5}`);
   if (frame_w7b.length == 2) {
      frame_w7b += `${alertj.length | splash4}`;
   }
      

      alertj = `${2 & alertj.length}`;
   while (giftH == String.fromCharCode(56,0) || 4 <= umengP.length) {
      giftH += `${((blackG ? 5 : 3))}`;
      break;
   }
      bootU += `${parseInt(`${middle5}`)}`;
      onManualPause(true);

       let whatsappM = String.fromCharCode(110,95,52,54,95,99,105,110,118,105,100,101,111,0);
       let libswresampleT = String.fromCharCode(112,111,105,115,111,110,95,119,95,50,54,0);
      while (!whatsappM.includes(libswresampleT)) {
         libswresampleT += `${(whatsappM == String.fromCharCode(89,0) ? whatsappM.length : libswresampleT.length)}`;
         break;
      }
      for (let q = 0; q < 3; q++) {
         whatsappM = `${2 - whatsappM.length}`;
      }
      for (let z = 0; z < 1; z++) {
         whatsappM += "2";
      }
      if (5 >= libswresampleT.length || whatsappM == String.fromCharCode(76,0)) {
         whatsappM = `${(String.fromCharCode(72,0) == whatsappM ? whatsappM.length : libswresampleT.length)}`;
      }
      for (let n = 0; n < 3; n++) {
          let main_uo = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,118,95,51,49,0);
          let incident7 = 3;
          let logo3 = 4;
         libswresampleT += `${whatsappM.length}`;
         main_uo += `${incident7 / (Math.max(main_uo.length, 9))}`;
         incident7 <<= Math.min(Math.abs(incident7 - 2), 1);
         logo3 &= main_uo.length + incident7;
      }
      let scheduleD = String.fromCharCode(95,101,110,108,95,0) == libswresampleT;
      do {
         libswresampleT = "2";
         if (scheduleD) {
            break;
         }
      } while (scheduleD && (whatsappM == libswresampleT));
      middle5 += (parseFloat(`${String.fromCharCode(75,0) == whatsappM ? parseInt(`${injuryM}`) : whatsappM.length}`));
      bootU += `${alertj.length + bootU.length}`;
       let reactnativejsm = true;
         reactnativejsm = !reactnativejsm;
       let iconwatchnowr = true;
       let componentI = 4;
       let k_countT = 2;
      middle5 += parseFloat(`${splash4 % (Math.max(1, 6))}`);
      onPressAds();

      sharedc = new Map([[frame_w7b, frame_w7b.length | 1]]);
   if (giftH != feedbackx) {
       let libcrashsdk5: Array<any> = [433, 966, 364];
       let mbnativeadvancede: Map<any, any> = new Map([[String.fromCharCode(97,114,109,118,116,101,95,51,95,57,52,0),String.fromCharCode(98,117,105,108,100,115,95,97,95,57,55,0)], [String.fromCharCode(99,95,55,57,95,99,111,109,112,97,114,0),String.fromCharCode(114,95,56,56,95,116,104,117,109,98,110,97,105,108,115,0)]]);
       let unfillm: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,107,101,121,115,0),String.fromCharCode(98,108,111,98,95,110,95,56,50,0)], [String.fromCharCode(109,95,53,54,95,100,99,111,110,108,121,0),String.fromCharCode(111,95,51,49,95,115,116,114,101,97,109,0)]]);
       let styleF = 4;
          let arrowupN = false;
          let utilsA = 0;
         styleF >>= Math.min(Math.abs(utilsA), 1);
         arrowupN = !arrowupN;
       let reactL = String.fromCharCode(117,95,55,95,114,101,118,97,108,105,100,97,116,105,110,103,0);
       let controlR = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,110,95,49,49,0);
         mbnativeadvancede.set(`${styleF}`, libcrashsdk5.length);
      for (let a = 0; a < 3; a++) {
          let related3 = 1.0;
          let bdxadsdkz = String.fromCharCode(98,95,55,95,102,116,118,100,111,99,0);
         libcrashsdk5 = [mbnativeadvancede.size + unfillm.size];
         related3 *= bdxadsdkz.length ^ parseInt(`${related3}`);
         bdxadsdkz = `${parseInt(`${related3}`)}`;
      }
         unfillm.set(`${reactL}`, (reactL == String.fromCharCode(104,0) ? reactL.length : unfillm.size));
         libcrashsdk5 = [mbnativeadvancede.size * 2];
          let statisticsinactiveb = 4.0;
          let hiadG = String.fromCharCode(108,95,50,95,115,105,110,113,102,0);
         styleF -= mbnativeadvancede.size * 3;
         statisticsinactiveb -= (parseFloat(`${String.fromCharCode(66,0) == hiadG ? hiadG.length : parseInt(`${statisticsinactiveb}`)}`));
      let sendp = reactL.length >= 9428287;
      do {
         reactL += `${unfillm.size}`;
         if (sendp) {
            break;
         }
      } while ((2 < (unfillm.size | 3) || (unfillm.size | reactL.length) < 3) && sendp);
      for (let d = 0; d < 2; d++) {
         reactL = `${unfillm.size}`;
      }
         unfillm = new Map([[`${mbnativeadvancede.size}`, controlR.length & 2]]);
       let modalb = String.fromCharCode(110,105,101,108,115,97,100,100,95,119,95,50,56,0);
         unfillm.set(reactL, libcrashsdk5.length);
      feedbackx += `${styleF << (Math.min(umengP.length, 3))}`;
   }
      frame_w7b = `${giftH.length + 1}`;
      return;

      chinasameb = `${chinasameb.length ^ 2}`;
   if (5 >= (sharedc.size >> (Math.min(bootU.length, 5))) || 5 >= (bootU.length >> (Math.min(2, Math.abs(sharedc.size))))) {
       let malaysiav: Array<any> = [817, 682];
       let trashe: Array<any> = [506, 511];
       let chatl: Map<any, any> = new Map([[String.fromCharCode(118,95,55,55,95,112,111,108,121,109,111,100,0),86], [String.fromCharCode(108,95,51,50,95,111,112,101,110,115,101,97,0),522]]);
       let libcrashsdkf = String.fromCharCode(116,95,54,49,95,109,98,99,115,0);
         trashe = [libcrashsdkf.length << (Math.min(1, Math.abs(chatl.size)))];
       let libflipper8 = String.fromCharCode(111,95,49,56,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
       let launcherr = String.fromCharCode(112,97,115,115,95,119,95,55,0);
       let bdxadsdkl: Map<any, any> = new Map([[String.fromCharCode(98,95,51,48,95,98,105,116,115,116,114,0),true ], [String.fromCharCode(100,95,57,50,0),false ]]);
          let proxy2 = 5.0;
          let componentregistryz: Array<any> = [958, 366];
          let catagory1 = String.fromCharCode(120,95,52,48,95,114,101,115,105,103,110,101,100,0);
         trashe = [(catagory1 == String.fromCharCode(97,0) ? catagory1.length : launcherr.length)];
         proxy2 *= 2 * componentregistryz.length;
         componentregistryz.push(componentregistryz.length);
      while ((bdxadsdkl.size >> (Math.min(Math.abs(2), 2))) <= 2) {
         launcherr = `${libflipper8.length}`;
         break;
      }
      if (!libflipper8.endsWith(libcrashsdkf)) {
          let fieldm = 1.0;
          let notificationfillemptye: Array<any> = [704, 707];
         libcrashsdkf = `${libcrashsdkf.length}`;
         fieldm += parseFloat(`${3 * notificationfillemptye.length}`);
         notificationfillemptye = [notificationfillemptye.length / 3];
      }
      let savek = libflipper8 == String.fromCharCode(121,51,117,111,113,103,48,113,0);
      do {
         libflipper8 += `${chatl.size}`;
         if (savek) {
            break;
         }
      } while (savek && (3 >= (chatl.size << (Math.min(libflipper8.length, 5))) || 5 >= (3 << (Math.min(5, Math.abs(chatl.size))))));
          let bottome: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,95,122,95,55,50,0),false ], [String.fromCharCode(102,114,97,109,101,115,105,122,101,95,104,95,48,0),true ], [String.fromCharCode(98,117,108,108,101,116,115,95,57,95,53,0),false ]]);
         libcrashsdkf += `${malaysiav.length & 1}`;
         bottome = new Map([[`${bottome.size}`, 3 | bottome.size]]);
          let baseline2 = true;
          let executorM = false;
         chatl = new Map([[`${bdxadsdkl.size}`, bdxadsdkl.size]]);
         baseline2 = executorM;
      while (malaysiav.length == 3) {
          let grayY = 1.0;
          let subtextt = String.fromCharCode(103,95,56,53,95,114,105,110,103,105,110,103,0);
          let mbnativeadvancedc = 4.0;
          let frame_e5k = String.fromCharCode(102,95,52,50,95,116,97,107,101,110,0);
          let bangI: Array<any> = [623, 385];
         chatl = new Map([[`${malaysiav.length}`, 1]]);
         grayY -= subtextt.length;
         subtextt += `${parseInt(`${grayY}`)}`;
         mbnativeadvancedc -= parseFloat(`${3}`);
         frame_e5k = `${(subtextt == String.fromCharCode(81,0) ? parseInt(`${grayY}`) : subtextt.length)}`;
         bangI.push(parseInt(`${grayY}`) + 3);
         break;
      }
         libcrashsdkf = `${launcherr.length}`;
         bdxadsdkl = new Map([[`${malaysiav.length}`, (libflipper8 == String.fromCharCode(97,0) ? libflipper8.length : malaysiav.length)]]);
      sharedc.set(libcrashsdkf, 1 >> (Math.min(1, Math.abs(splash4))));
   }
   while (!blackG && 3.71 >= (injuryM + 4.8)) {
       let hookq = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,57,95,56,57,0);
       let fastT = 4.0;
          let armva4 = 5.0;
         hookq += `${(String.fromCharCode(48,0) == hookq ? hookq.length : parseInt(`${fastT}`))}`;
         armva4 /= Math.max(parseFloat(`${parseInt(`${armva4}`)}`), 2);
      for (let x = 0; x < 3; x++) {
          let baseT = String.fromCharCode(97,95,55,49,95,114,99,111,110,0);
          let episodeN = String.fromCharCode(111,95,51,95,102,105,108,116,101,114,103,114,97,112,104,0);
          let alertO = String.fromCharCode(116,95,56,57,95,118,105,115,117,97,108,108,121,0);
          let injuryV = String.fromCharCode(114,95,49,55,95,103,101,116,111,112,116,0);
          let controlJ = String.fromCharCode(112,114,101,118,105,101,119,101,100,95,112,95,54,50,0);
         hookq = `${(String.fromCharCode(120,0) == injuryV ? injuryV.length : baseT.length)}`;
         baseT += `${episodeN.length >> (Math.min(1, alertO.length))}`;
         episodeN += `${controlJ.length}`;
         alertO = `${alertO.length | episodeN.length}`;
         controlJ += "3";
      }
          let analyticF = String.fromCharCode(114,97,112,112,101,114,95,51,95,57,55,0);
         hookq = "3";
         analyticF = `${(analyticF == String.fromCharCode(90,0) ? analyticF.length : analyticF.length)}`;
      if (fastT <= 3.35) {
          let short_zeU = 0.0;
          let fullN = false;
          let schedule4 = 4.0;
         fastT += parseInt(`${short_zeU}`) >> (Math.min(2, Math.abs(1)));
         short_zeU *= 1 >> (Math.min(Math.abs(parseInt(`${schedule4}`)), 2));
         fullN = 46.0 > schedule4;
      }
         hookq += `${parseInt(`${fastT}`) / (Math.max(9, hookq.length))}`;
      let iconsaveimageK = 8704560.0 <= fastT;
      do {
         fastT /= Math.max(5, parseInt(`${fastT}`));
         if (iconsaveimageK) {
            break;
         }
      } while (((2.36 * fastT) == 5.42) && iconsaveimageK);
      blackG = alertj.length <= chinasameb.length;
      break;
   }
    }

    const url = currentVod?.ads_url.includes(SendConfigure.completeSettings([-70,-90,-90,-94,-46],0xD2,false))
      ? currentVod?.ads_url
      : SendConfigure.completeSettings([82,78,78,74,73,0,21,21,58],0x3A,false) + currentVod?.actionUrl;

    Linking.openURL(url);

   if ((1.56 + spinnerF) > 2.58 && 2 > (splash4 + 4)) {
      splash4 %= Math.max(parseInt(`${injuryM}`) - 3, 3);
   }
   if (!blackG) {
      blackG = sharedc.size <= 53;
   }
      middle5 *= parseFloat(`${alertj.length}`);

    ww_runtime.watchAnytimeAdsClicksAnalytics({
      ads_slot_id: currentVod.ads_slot_id,
      ads_id: currentVod.ads_id,
      ads_title: currentVod.ads_event_title,
      ads_name: currentVod.ads_name,
    });
  };

  return (
    <>
      {showVod && (
        <>
          <TouchableWithoutFeedback
            onPress={() => {
              showControls();
              if (overlayRef.current) {
                handlePlayPause();
              }
            }}
          >
            <View>
              <View style={[styles.container, { height: displayHeight }]}>
                {(isBuffering ||
                  (Platform.OS === "ios"
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
                {(Platform.OS === "ios"
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
                {(currentVod?.is_video ?? true) !== false ? (

                  <Video
                    onLayout={() => { }}
                    ref={videoRef}
                    resizeMode="contain"
                    source={{
                      uri: miniVodUrl,
                      headers: {
                        "User-Agent":
                          "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
                      },
                    }}
                    onReadyForDisplay={handleOnReadyForDisplay}
                    onBuffer={onBuffer}
                    repeat={true}
                    style={{
                      ...styles.video,
                      opacity: (
                        Platform.OS === "ios"
                          ? isVideoReadyIos
                          : isVideoReadyAndroid
                      )
                        ? 1
                        : 0,
                    }}
                    paused={
                      isPause || (Platform.OS === "ios" && !isVideoReadyIos)
                    }
                    onLoadStart={handleLoadStart}
                    onProgress={handleProgress}
                    progressUpdateInterval={1500}
                  />

                ) : (
                  <FastImage
                    resizeMode="contain"
                    source={{
                      uri:
                        SendConfigure.completeSettings([1,29,29,25,26,83,70,70,28,25,5,6,8,13,71,30,0,2,0,4,12,13,0,8,71,6,27,14,70,30,0,2,0,25,12,13,0,8,70,12,7,70,8,70,8,95,70,57,6,2,-86,-64,4,6,7,54,57,0,2,8,10,1,28,54,8,27,29,71,25,7,14,105],0x69,false), 
                    }}
                    style={styles.video}
                  />
                )}
                <View
                  style={{
                    position: "absolute",
                    left: (Dimensions.get("window").width - 80) / 2,
                    top: (Dimensions.get("window").height - 130) / 2,
                    zIndex: 999,
                  }}
                >
                  {showIcon && (isPause ? <PlayIcon /> : <PauseIcon />)}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <Modal visible={visible} transparent={true}>
            <View
              style={{
                flex: 1,
                paddingTop: screenHeight / 1.7,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <VipGuideModal
                width={250}
                onClose={(value: boolean) => {
                  onManualPause(true);
                  setVisible(value);
                }}
              />
            </View>
          </Modal>

          <View style={styles.bottomContainer}>
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{currentVod.ads_tag}</Text>
            </View>

            <Text style={styles.titleText}>{currentVod.ads_title}</Text>

            <Text style={styles.descText}>{currentVod.ads_desc1}</Text>

            <TouchableOpacity
              onPress={onAdsBtnPress}
              style={{
                ...styles.adsBtn,
                backgroundColor: colors.primary,
              }}
            >
              <Text style={styles.adsBtnText}>
                {currentVod.ads_button_text}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
}

export default memo(ShortAds);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  buffering: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    color: "orientationKsadHuawei",
    position: "absolute",
    top: "40%",
    left: "36%",
    zIndex: 999,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "flex-end",
  },
  titleText: {
    color: "white",
    marginBottom: 12,
    fontSize: 18,
  },
  descText: {
    color: "white",
    marginBottom: 16,
  },
  tagContainer: {
    backgroundColor: "#ffffff44",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: "baseline",
  },
  tagText: {
    color: "white",
    fontSize: 12,
  },
  adsBtn: {
    width: "100%",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  adsBtnText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000000",
  },
});
