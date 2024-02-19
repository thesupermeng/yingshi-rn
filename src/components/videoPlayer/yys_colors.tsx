

class FilterSinglePromotion {
    static statisticsactiveLibloggerRewar = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  AppState,
  Text,
  BackHandler,
  Platform,
  LogBox,
  Linking,
} from "react-native";

import Video from "react-native-video";
import { useTheme, useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import { debounce } from "lodash";

import { Dimensions } from "react-native";
import VideoControlsOverlay from "./yys_kick";
import WebView from "react-native-webview";


import FastImage from "../../components/common/yys_alert_backwhite";

import { FastforwardProgressSvg, RewindProgressSvg, } from "@static";

import { incrementSportWatchTime, setFullscreenState, showAdultModeVip } from "@redux";

import {
  yysTempnodatagifLeagueItem,
  yysSpinner,
  yysPenaltyshoot,
} from "@type";
import VideoWithControls from "./yys_libswresample_dependency";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks";
import { screenModel } from "@type";
import { ADULT_MODE_PREVIEW_DURATION, AD_VIDEO_SECONDS, NON_VIP_STREAM_TIME_SECONDS } from "@utility";
import { AdVideoImage } from "./yys_floater";
import { yysIconpointscoreCountdown } from "@redux";
import { yysInactive } from "@api";
import { useQuery } from "@tanstack/react-query";
import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import InAppBrowser from "react-native-inappbrowser-reborn";
import ImmersiveMode from "react-native-immersive-mode"
import { yysIconclosewhiteBaiduads } from "@redux";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

LogBox.ignoreLogs([`Trying to load empty source.`]);


interface yysIconarrowrightorangeStation {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: yysSpinner;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: yysPenaltyshoot[];
  showGuide?: boolean;
  showMoreType?: "newinterstitialGraphicsTyping" | "streams" | "movies" | "none";
  streams?: yysTempnodatagifLeagueItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
  showAds?: boolean,
  onPressCountdown?: () => void,
  vodID?: number,
  sourceID?: number,
  onDownloadVod?: (nid: number) => void,
  setShowAdOverlay: (show: boolean) => void
}

type yysIconfeedback = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type yysLargeQuest = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<yysLargeQuest, yysIconarrowrightorangeStation>(
  (
    {
      vod_url,
      currentTimeRef = 0,
      initialStartTime = 0,
      vodTitle = "",
      videoType = "vod",
      vod_source,
      onBack,
      useWebview = false,
      activeEpisode,
      onEpisodeChange,
      rangeSize,
      episodes,
      autoPlayNext = true,
      onShare = () => {
       let defaultbasketballbgl = 5;
    let profileframeR = String.fromCharCode(121,95,51,50,95,97,102,102,101,99,116,0);
    let libfileh = false;
    let chatroombackgroundd = 3.0;
    let becomes = String.fromCharCode(110,105,98,98,108,101,95,106,95,49,49,0);
    let chinaA = String.fromCharCode(120,95,53,55,95,108,105,98,115,119,115,99,97,108,101,0);
    let spinner4 = String.fromCharCode(112,95,55,52,95,100,101,99,114,121,112,116,0);
    let selectedQ: Array<any> = [431, 12];
    let stringsr = 4;
    let huawei9 = true;
    let iconpipshrink4: Array<any> = [392, 338, 12];
    let buildc = 3.0;
    let popupX = String.fromCharCode(114,116,108,95,54,95,52,55,0);
    let xvodd = String.fromCharCode(109,95,53,95,97,112,112,114,116,99,0);
    let bottom5: Array<any> = [199, 551, 127];
   while (!huawei9) {
      huawei9 = becomes == chinaA;
      break;
   }
      buildc += parseFloat(`${profileframeR.length}`);
      libfileh = (huawei9 ? libfileh : !huawei9);
   if (4 >= (becomes.length - 5) && (chatroombackgroundd - 5.77) >= 3.20) {
       let thailandK = 3.0;
       let pointd: Array<any> = [138, 817, 742];
       let libbuffer5 = String.fromCharCode(105,95,51,51,95,112,108,97,105,110,116,101,120,116,0);
       let stylesg = true;
         stylesg = parseInt(`${thailandK}`) < pointd.length;
         stylesg = !stylesg;
          let dependencyk: Array<any> = [String.fromCharCode(115,112,97,99,101,114,0), String.fromCharCode(109,101,114,103,101,100,95,112,95,54,50,0)];
          let telegramb: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,109,112,101,103,97,117,100,105,111,100,115,112,0),false ], [String.fromCharCode(118,95,56,50,95,116,121,112,105,110,103,0),false ]]);
         pointd = [1 % (Math.max(10, dependencyk.length))];
         dependencyk.push(2 | telegramb.size);
         telegramb.set(`${telegramb.size}`, telegramb.size ^ 2);
         stylesg = thailandK < 31.24 || 17 < libbuffer5.length;
       let pathk = 0;
       let viewsP = 4;
          let volumeW = false;
          let iconcloseH: Map<any, any> = new Map([[String.fromCharCode(120,95,55,49,95,97,108,108,111,99,97,116,111,114,115,0),436], [String.fromCharCode(105,115,115,117,101,100,0),100]]);
          let release_0P = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,98,95,51,0);
         viewsP %= Math.max(2, 2);
         volumeW = 36 <= iconcloseH.size;
         iconcloseH = new Map([[`${iconcloseH.size}`, release_0P.length]]);
         release_0P = `${release_0P.length}`;
          let pointX = 5;
         viewsP += (pathk >> (Math.min(4, Math.abs((stylesg ? 2 : 3)))));
         pointX %= Math.max(4, pointX);
      let iconqq2 = 7424767 >= libbuffer5.length;
      do {
          let shootnogoald = 1.0;
          let bodanV = String.fromCharCode(117,95,51,49,95,109,97,107,101,116,97,114,98,97,108,108,0);
         libbuffer5 = `${bodanV.length}`;
         shootnogoald -= parseFloat(`${parseInt(`${shootnogoald}`)}`);
         bodanV = `${parseInt(`${shootnogoald}`) >> (Math.min(Math.abs(parseInt(`${shootnogoald}`)), 5))}`;
         if (iconqq2) {
            break;
         }
      } while (iconqq2 && (!libbuffer5.startsWith(`${thailandK}`)));
      let private_pa = 9061496 >= pointd.length;
      do {
          let networkY = 4.0;
          let iconmegaphoneI: Map<any, any> = new Map([[String.fromCharCode(119,115,118,113,97,95,122,95,56,0),String.fromCharCode(109,95,48,95,104,101,120,98,121,116,101,0)], [String.fromCharCode(108,95,57,53,95,115,116,101,97,108,0),String.fromCharCode(120,95,55,52,95,103,101,110,101,114,97,116,101,0)]]);
          let reactnativeratingsw = String.fromCharCode(100,105,102,102,120,95,110,95,51,53,0);
          let homeiconn = 1;
         pointd.push(iconmegaphoneI.size | 3);
         networkY /= Math.max(3, 3 / (Math.max(7, homeiconn)));
         iconmegaphoneI = new Map([[`${homeiconn}`, parseInt(`${networkY}`) & 3]]);
         reactnativeratingsw = `${reactnativeratingsw.length * 1}`;
         if (private_pa) {
            break;
         }
      } while ((2 == pointd.length) && private_pa);
         viewsP <<= Math.min(4, Math.abs(2));
         thailandK -= parseFloat(`${viewsP}`);
      let condensedl = stylesg ? !stylesg : stylesg;
      do {
          let selectj = String.fromCharCode(99,111,109,98,105,110,101,100,95,51,95,51,49,0);
          let teamdetailsbg3 = String.fromCharCode(108,95,50,54,0);
          let appleG = true;
          let libloggerw = String.fromCharCode(119,95,54,55,95,106,112,101,103,108,115,100,101,99,0);
         stylesg = viewsP < 95 || pathk < 95;
         selectj += `${2 + libloggerw.length}`;
         teamdetailsbg3 += "2";
         libloggerw += `${((appleG ? 4 : 4))}`;
         if (condensedl) {
            break;
         }
      } while (((viewsP & 5) == 1 || stylesg) && condensedl);
      becomes += `${stringsr + selectedQ.length}`;
   }
      chinaA = `${(String.fromCharCode(122,0) == spinner4 ? spinner4.length : defaultbasketballbgl)}`;
       let material7: Array<any> = [471, 909, 6];
         material7.push(material7.length % 3);
       let robotoU = 0.0;
      for (let y = 0; y < 3; y++) {
          let graphics6 = 3;
          let uimanagerN = true;
          let smallorangemanT = false;
          let window_ffX = 1.0;
         material7 = [3];
         graphics6 -= 3 ^ graphics6;
         uimanagerN = !uimanagerN;
         smallorangemanT = !smallorangemanT || window_ffX > 60.60;
         window_ffX /= Math.max(4, parseFloat(`${2}`));
      }
      becomes = `${becomes.length + parseInt(`${chatroombackgroundd}`)}`;
   let iconarrowrightblackY = 8595314 >= popupX.length;
   do {
      popupX += `${parseInt(`${chatroombackgroundd}`) / 1}`;
      if (iconarrowrightblackY) {
         break;
      }
   } while (iconarrowrightblackY && (parseInt(`${buildc}`) >= popupX.length));
      buildc /= Math.max(1, (parseFloat(`${(huawei9 ? 4 : 3)}`)));
   for (let b = 0; b < 1; b++) {
       let issubZ: Map<any, any> = new Map([[String.fromCharCode(101,97,105,100,99,116,95,118,95,50,53,0),String.fromCharCode(121,117,118,109,111,110,111,95,55,95,57,53,0)], [String.fromCharCode(100,95,49,48,48,95,114,101,110,100,101,114,105,110,103,0),String.fromCharCode(113,115,99,97,108,101,113,108,111,103,95,109,95,50,54,0)]]);
       let runtimeq = true;
       let areaf = String.fromCharCode(97,115,115,111,99,108,105,115,116,95,98,95,51,48,0);
       let mbbidn = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,54,95,53,57,0);
       let downloadJ = false;
         areaf = `${(String.fromCharCode(68,0) == areaf ? issubZ.size : areaf.length)}`;
          let suggestiont: Map<any, any> = new Map([[String.fromCharCode(119,95,49,52,95,114,101,115,105,103,110,101,100,0),458], [String.fromCharCode(108,95,56,52,95,110,101,105,103,104,98,111,117,114,0),587], [String.fromCharCode(121,95,55,54,95,97,114,102,113,0),474]]);
         mbbidn += `${(String.fromCharCode(53,0) == areaf ? mbbidn.length : areaf.length)}`;
         suggestiont.set(`${suggestiont.size}`, suggestiont.size % (Math.max(suggestiont.size, 1)));
      for (let e = 0; e < 2; e++) {
          let neonN = 5.0;
          let turndown8 = 3;
          let gift9 = String.fromCharCode(97,110,116,105,97,108,105,97,115,95,98,95,53,54,0);
         runtimeq = 39.12 <= neonN;
         neonN /= Math.max(gift9.length / (Math.max(3, 8)), 3);
         turndown8 %= Math.max((String.fromCharCode(118,0) == gift9 ? turndown8 : gift9.length), 1);
      }
      if (!downloadJ && (issubZ.size - 4) <= 1) {
          let nalyticsk = 0.0;
          let castingX = String.fromCharCode(116,101,114,109,115,101,116,95,113,95,57,53,0);
          let cornershootz = String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,111,95,54,48,0);
          let libapminsighta0 = 2.0;
          let tempnodatag = 4;
         issubZ.set(`${libapminsighta0}`, 2);
         nalyticsk *= parseInt(`${nalyticsk}`) + 2;
         castingX += `${cornershootz.length % (Math.max(3, castingX.length))}`;
         cornershootz = `${castingX.length}`;
         libapminsighta0 /= Math.max(3, parseFloat(`${tempnodatag}`));
         tempnodatag *= castingX.length % (Math.max(2, cornershootz.length));
      }
         runtimeq = !runtimeq || areaf.length >= 77;
      if (5 < mbbidn.length) {
         issubZ = new Map([[`${issubZ.size}`, mbbidn.length]]);
      }
          let whitesmalltickB = 3.0;
          let libfilez = 4;
          let pathH = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,0);
         mbbidn += `${1 << (Math.min(1, areaf.length))}`;
         whitesmalltickB /= Math.max(parseFloat(`${parseInt(`${whitesmalltickB}`) & 3}`), 5);
         libfilez ^= pathH.length;
         pathH = "3";
      while (!downloadJ) {
         issubZ.set(mbbidn, 1 & mbbidn.length);
         break;
      }
         runtimeq = 46 <= issubZ.size || mbbidn.length <= 46;
         areaf = "2";
       let clockG = String.fromCharCode(102,95,55,50,95,97,99,99,101,115,115,111,114,115,0);
       let iconsubssuccessz = String.fromCharCode(114,111,117,110,100,100,115,95,55,95,54,50,0);
       let libffmpegkitb = true;
       let imageactionlivew = true;
         issubZ = new Map([[`${issubZ.size}`, issubZ.size]]);
         mbbidn = `${((downloadJ ? 1 : 5) * (runtimeq ? 3 : 3))}`;
      if (!downloadJ) {
          let x_locka = false;
         downloadJ = mbbidn.length < 17;
         x_locka = !x_locka;
      }
      iconpipshrink4 = [defaultbasketballbgl];
   }
      buildc -= parseFloat(`${spinner4.length % 1}`);
      becomes = `${chinaA.length ^ defaultbasketballbgl}`;
   for (let d = 0; d < 3; d++) {
      iconpipshrink4.push(iconpipshrink4.length);
   }
   for (let r = 0; r < 1; r++) {
      becomes = `${(stringsr ^ (huawei9 ? 5 : 3))}`;
   }
   let whitebellF = profileframeR.length <= 7432667;
   do {
      profileframeR = `${((huawei9 ? 2 : 3) | (libfileh ? 2 : 5))}`;
      if (whitebellF) {
         break;
      }
   } while ((profileframeR.length < 4) && whitebellF);
       let loading5 = String.fromCharCode(97,100,106,117,115,116,101,114,95,114,95,50,53,0);
       let mappingf: Array<any> = [609, 454, 563];
         mappingf.push(2);
      if (mappingf.length < 5) {
          let questiconu = String.fromCharCode(109,117,120,0);
         loading5 += `${loading5.length << (Math.min(Math.abs(3), 4))}`;
         questiconu = `${questiconu.length / 2}`;
      }
      let colorsX = 8198849 <= mappingf.length;
      do {
          let redcirclebgg: Array<any> = [868, 374];
          let smallsoundD: Array<any> = [938, 992];
         mappingf.push((loading5 == String.fromCharCode(113,0) ? smallsoundD.length : loading5.length));
         redcirclebgg = [redcirclebgg.length];
         smallsoundD = [2 | redcirclebgg.length];
         if (colorsX) {
            break;
         }
      } while ((loading5.length > 2) && colorsX);
      for (let b = 0; b < 3; b++) {
         mappingf.push(mappingf.length);
      }
          let neon5 = 3.0;
          let smallsoundc = 5;
         mappingf = [smallsoundc];
         neon5 -= parseFloat(`${parseInt(`${neon5}`)}`);
         smallsoundc -= 2 << (Math.min(Math.abs(parseInt(`${neon5}`)), 2));
         mappingf = [loading5.length % (Math.max(3, 10))];
      defaultbasketballbgl ^= stringsr;
      popupX += `${chinaA.length}`;
   let merger0 = 7646385.0 >= chatroombackgroundd;
   do {
       let vignetteZ = 1;
       let networkX = 0.0;
       let favicon0: Array<any> = [String.fromCharCode(116,95,48,0), String.fromCharCode(114,101,102,101,114,114,101,114,95,51,95,51,48,0)];
       let temp0 = true;
      if (3 >= (favicon0.length >> (Math.min(Math.abs(3), 2))) || 3 >= favicon0.length) {
          let libcrashsdkQ = 3;
          let codeh = 3.0;
          let whistle7: Array<any> = [966, 937, 660];
          let awayiconB = true;
         temp0 = 67.16 < networkX || vignetteZ < 76;
         libcrashsdkQ >>= Math.min(2, Math.abs(((awayiconB ? 2 : 2) | parseInt(`${codeh}`))));
         codeh /= Math.max((parseFloat(`${whistle7.length % (Math.max(6, (awayiconB ? 2 : 2)))}`)), 2);
         whistle7.push(1);
      }
         temp0 = 58.13 >= networkX && favicon0.length >= 31;
         favicon0.push(favicon0.length);
      if (vignetteZ > 3) {
         vignetteZ += vignetteZ;
      }
         favicon0 = [3 & vignetteZ];
         networkX /= Math.max(3, ((temp0 ? 5 : 2) * 2));
         temp0 = networkX >= 10.15 || 87 >= favicon0.length;
       let ruless: Map<any, any> = new Map([[String.fromCharCode(105,95,56,52,95,101,97,105,100,99,116,0),152], [String.fromCharCode(119,115,97,117,100,95,100,95,52,56,0),784]]);
       let chatv: Map<any, any> = new Map([[String.fromCharCode(114,97,115,116,101,114,105,122,101,115,95,103,95,57,56,0),791], [String.fromCharCode(120,95,57,56,95,114,97,110,100,111,109,0),941], [String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,107,95,51,54,0),715]]);
      for (let j = 0; j < 1; j++) {
          let largebrightness8 = 4.0;
          let readp: Map<any, any> = new Map([[String.fromCharCode(106,95,51,51,95,115,109,118,106,112,101,103,0),592], [String.fromCharCode(104,95,52,51,95,117,112,100,97,116,101,114,0),743], [String.fromCharCode(112,95,49,53,95,119,114,97,112,112,101,114,0),552]]);
          let videobufferloadingP = 3.0;
          let predictionbutton9 = String.fromCharCode(114,101,102,114,101,115,104,95,116,95,55,56,0);
         ruless.set(`${vignetteZ}`, 2);
         largebrightness8 /= Math.max(parseFloat(`${2 * parseInt(`${videobufferloadingP}`)}`), 4);
         readp.set(`${videobufferloadingP}`, parseInt(`${videobufferloadingP}`) / 3);
         predictionbutton9 += "1";
      }
         temp0 = chatv.size == 43 || temp0;
       let storeF = 4.0;
       let controlsm = 0.0;
       let homeq = true;
      chatroombackgroundd /= Math.max(parseFloat(`${1}`), 3);
      if (merger0) {
         break;
      }
   } while (((5.59 * chatroombackgroundd) == 4.98) && merger0);
       let libruntimeexecutorH: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,99,108,101,97,114,105,110,103,0),822], [String.fromCharCode(115,119,105,116,99,104,105,110,103,95,113,95,57,55,0),244], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,112,95,52,52,0),30]]);
       let trash_ = 4.0;
         libruntimeexecutorH = new Map([[`${libruntimeexecutorH.size}`, parseInt(`${trash_}`)]]);
          let iconlogouty: Array<any> = [241, 369];
          let floaterF = 2;
          let playz: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,116,104,101,97,116,101,114,0),String.fromCharCode(122,95,53,52,95,102,105,120,115,116,114,105,100,101,0)], [String.fromCharCode(116,101,109,112,95,107,95,49,54,0),String.fromCharCode(103,95,53,54,95,117,114,108,99,111,110,116,101,120,116,0)], [String.fromCharCode(116,95,53,53,95,97,101,118,97,108,0),String.fromCharCode(115,95,53,56,95,115,116,97,98,105,108,105,122,101,0)]]);
         libruntimeexecutorH.set(`${trash_}`, 3 - iconlogouty.length);
         iconlogouty = [floaterF];
         floaterF *= 1 - floaterF;
         playz = new Map([[`${playz.size}`, floaterF >> (Math.min(Math.abs(playz.size), 2))]]);
          let shootnogoal5 = String.fromCharCode(103,95,53,51,95,104,111,114,105,103,0);
          let backiconmasku = String.fromCharCode(111,95,52,48,95,115,117,109,100,0);
         trash_ += parseFloat(`${1 & shootnogoal5.length}`);
         shootnogoal5 += `${backiconmasku.length}`;
         backiconmasku = `${backiconmasku.length}`;
      while (trash_ >= 2.33) {
         libruntimeexecutorH = new Map([[`${libruntimeexecutorH.size}`, 1]]);
         break;
      }
      for (let n = 0; n < 3; n++) {
          let referreru = 4;
          let assist4: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,48,95,115,119,97,112,112,101,114,0),186], [String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,102,95,53,50,0),284], [String.fromCharCode(101,95,53,49,95,119,101,98,112,97,103,101,0),534]]);
          let stylesK: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,111,115,97,98,108,101,95,120,95,55,53,0),577], [String.fromCharCode(102,99,116,108,95,105,95,54,51,0),724]]);
         libruntimeexecutorH.set(`${trash_}`, libruntimeexecutorH.size + parseInt(`${trash_}`));
         referreru /= Math.max(1, referreru);
         assist4.set(`${referreru}`, 2);
         stylesK.set(`${referreru}`, 3 | assist4.size);
      }
         libruntimeexecutorH.set(`${trash_}`, libruntimeexecutorH.size + 1);
      defaultbasketballbgl <<= Math.min(5, Math.abs(libruntimeexecutorH.size & parseInt(`${chatroombackgroundd}`)));
      stringsr %= Math.max(2, spinner4.length);
   for (let s = 0; s < 3; s++) {
       let stringh: Array<any> = [935, 513];
       let bottomU = false;
       let routerG = 4.0;
      let stats1 = stringh.length >= 7748810;
      do {
          let castT: Array<any> = [21, 928];
          let basketballiconB = false;
          let yellowanimationliveF = false;
          let send9 = 5.0;
         stringh = [3];
         castT.push(((yellowanimationliveF ? 1 : 4) / (Math.max(8, (basketballiconB ? 5 : 1)))));
         basketballiconB = castT.length <= 56;
         yellowanimationliveF = castT.includes(yellowanimationliveF);
         send9 /= Math.max((parseInt(`${send9}`) & (basketballiconB ? 5 : 1)), 5);
         if (stats1) {
            break;
         }
      } while (((routerG / 2.18) == 4.14) && stats1);
          let shoot1 = String.fromCharCode(102,95,56,95,116,114,110,115,0);
          let whitesmalltick6: Array<any> = [780, 908, 309];
          let private_2hD: Array<any> = [311, 625];
         routerG += parseFloat(`${1}`);
         shoot1 = `${1 * shoot1.length}`;
         whitesmalltick6.push(shoot1.length % (Math.max(1, 4)));
         private_2hD.push(private_2hD.length);
      while ((stringh.length / (Math.max(8, parseInt(`${routerG}`)))) >= 3) {
         routerG += parseFloat(`${stringh.length}`);
         break;
      }
       let sliders: Array<any> = [348, 610, 433];
       let styleX: Array<any> = [776, 243, 461];
       let short_t_7 = 1.0;
       let scorepopsoundl = 1.0;
          let imagenomoredatah = true;
          let skipM = String.fromCharCode(116,95,57,56,95,97,99,116,117,97,108,0);
          let moonp = true;
         sliders = [((imagenomoredatah ? 5 : 4) / (Math.max(parseInt(`${short_t_7}`), 4)))];
         imagenomoredatah = !skipM.includes(`${moonp}`);
         skipM = `${((moonp ? 2 : 1) / (Math.max(6, skipM.length)))}`;
      while (!bottomU || 5.8 < (scorepopsoundl / (Math.max(1.13, 5)))) {
          let fieldY: Map<any, any> = new Map([[String.fromCharCode(119,101,98,109,105,100,115,95,98,95,51,0),String.fromCharCode(113,95,55,54,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0)], [String.fromCharCode(114,111,117,110,100,105,110,103,95,100,95,52,50,0),String.fromCharCode(119,111,114,100,95,121,95,51,52,0)]]);
          let hongkongo: Map<any, any> = new Map([[String.fromCharCode(110,101,97,114,108,121,95,55,95,49,53,0),318], [String.fromCharCode(122,101,114,111,101,100,95,102,95,52,50,0),105]]);
          let orangedownarrowa = String.fromCharCode(115,104,117,116,116,105,110,103,95,122,95,53,57,0);
          let networkH = 5.0;
          let friendsP = 1.0;
         bottomU = 93 >= orangedownarrowa.length;
         fieldY = new Map([[`${hongkongo.size}`, hongkongo.size]]);
         orangedownarrowa += `${1 << (Math.min(4, Math.abs(parseInt(`${networkH}`))))}`;
         networkH += parseFloat(`${parseInt(`${friendsP}`) - 2}`);
         friendsP += parseFloat(`${hongkongo.size}`);
         break;
      }
         short_t_7 -= ((bottomU ? 4 : 2) / 2);
      for (let d = 0; d < 1; d++) {
         stringh.push(parseInt(`${short_t_7}`) + 1);
      }
      chinaA += `${2 - parseInt(`${buildc}`)}`;
   }
   for (let f = 0; f < 2; f++) {
       let modeC = String.fromCharCode(114,101,101,108,95,116,95,52,56,0);
         modeC += `${modeC.length ^ modeC.length}`;
         modeC += `${modeC.length}`;
      while (2 <= modeC.length) {
         modeC = "2";
         break;
      }
      buildc += parseFloat(`${popupX.length}`);
   }
   if (libfileh) {
       let hookG: Map<any, any> = new Map([[String.fromCharCode(115,111,109,101,116,104,105,110,103,95,107,95,50,0),532], [String.fromCharCode(116,104,97,110,95,50,95,51,0),367]]);
       let flipperJ: Array<any> = [321, 335];
       let profileactive1: Array<any> = [533, 272, 777];
       let classesM = String.fromCharCode(106,95,55,50,0);
      while ((classesM.length & profileactive1.length) > 5) {
          let whitetickV = String.fromCharCode(104,95,51,51,95,99,111,109,109,105,116,0);
         profileactive1.push(1);
         whitetickV = "1";
         break;
      }
      if ((5 ^ flipperJ.length) <= 2) {
         profileactive1 = [3];
      }
         flipperJ = [2];
         hookG.set(classesM, classesM.length + profileactive1.length);
         profileactive1.push(classesM.length | flipperJ.length);
      if (2 > flipperJ.length) {
          let singapore3 = 3;
         profileactive1.push(2);
         singapore3 /= Math.max(singapore3 % (Math.max(1, 1)), 2);
      }
      let securityt = 8762946 <= hookG.size;
      do {
          let tempnodatagifX = false;
          let profileinactiveG = String.fromCharCode(112,114,111,104,105,98,105,116,95,110,95,49,53,0);
          let rewindA: Array<any> = [393, 568];
         hookG = new Map([[`${hookG.size}`, 2 * hookG.size]]);
         tempnodatagifX = rewindA.length == profileinactiveG.length;
         profileinactiveG = `${rewindA.length * profileinactiveG.length}`;
         if (securityt) {
            break;
         }
      } while (securityt && (hookG.get(`${flipperJ.length}`) == null));
      while (classesM.endsWith(`${profileactive1.length}`)) {
         profileactive1.push(profileactive1.length % 2);
         break;
      }
      let vertical7 = profileactive1.length >= 7326260;
      do {
         profileactive1.push(profileactive1.length >> (Math.min(classesM.length, 2)));
         if (vertical7) {
            break;
         }
      } while (vertical7 && ((flipperJ.length >> (Math.min(3, profileactive1.length))) >= 1));
      while (2 == (flipperJ.length & hookG.size)) {
         flipperJ = [(classesM == String.fromCharCode(90,0) ? profileactive1.length : classesM.length)];
         break;
      }
      for (let j = 0; j < 1; j++) {
         profileactive1.push(hookG.size);
      }
         classesM = `${profileactive1.length}`;
      buildc -= parseFloat(`${flipperJ.length % (Math.max(1, 2))}`);
   }
   if (chinaA.startsWith(`${selectedQ.length}`)) {
      selectedQ = [xvodd.length];
   }
   let encryptorz = chinaA == String.fromCharCode(118,51,122,48,48,95,121,114,0);
   do {
      chinaA += `${parseInt(`${chatroombackgroundd}`)}`;
      if (encryptorz) {
         break;
      }
   } while (encryptorz && (chinaA.length == 4));
   let bang6 = 5411173 <= stringsr;
   do {
       let awayj = 1;
       let componentm = String.fromCharCode(115,112,114,105,116,101,115,95,97,95,55,53,0);
       let tickedK = String.fromCharCode(107,95,57,52,95,112,111,115,116,112,111,110,101,100,0);
       let hooks: Array<any> = [74, 284];
       let dropdownq = 4;
      if (tickedK.endsWith(componentm)) {
          let profileactiveQ: Map<any, any> = new Map([[String.fromCharCode(117,109,98,114,101,108,108,97,95,103,95,52,53,0),String.fromCharCode(115,101,113,117,101,110,99,101,114,95,50,95,53,48,0)], [String.fromCharCode(107,101,121,99,104,97,105,110,95,98,95,53,53,0),String.fromCharCode(115,118,97,114,105,110,116,95,114,95,57,56,0)], [String.fromCharCode(107,105,110,103,102,105,115,104,101,114,0),String.fromCharCode(122,95,55,57,0)]]);
          let penaltyshootO: Array<any> = [String.fromCharCode(99,121,99,108,101,95,116,95,50,54,0), String.fromCharCode(119,104,105,116,101,95,50,95,57,48,0), String.fromCharCode(99,95,53,57,95,98,105,110,98,110,0)];
          let icondefaultthumbnaila = String.fromCharCode(107,95,56,95,100,105,114,97,99,116,97,98,0);
         componentm += `${1 + icondefaultthumbnaila.length}`;
         profileactiveQ.set(`${penaltyshootO.length}`, 2 ^ penaltyshootO.length);
         icondefaultthumbnaila += `${penaltyshootO.length & profileactiveQ.size}`;
      }
         dropdownq &= hooks.length ^ componentm.length;
      for (let s = 0; s < 1; s++) {
         dropdownq %= Math.max(2 << (Math.min(1, Math.abs(awayj))), 5);
      }
      let nextW = 9861617 <= tickedK.length;
      do {
         tickedK = "2";
         if (nextW) {
            break;
         }
      } while (nextW && (tickedK.length > hooks.length));
      let goallogoP = 5128992 >= awayj;
      do {
          let bingZ = String.fromCharCode(101,97,115,121,95,117,95,57,52,0);
          let yellowvideoliven = String.fromCharCode(100,108,115,121,109,95,116,95,57,56,0);
         awayj += 2;
         bingZ = `${bingZ.length}`;
         yellowvideoliven += "3";
         if (goallogoP) {
            break;
         }
      } while (goallogoP && (1 < (dropdownq % 1) && 2 < (awayj % 1)));
      while (dropdownq > 3) {
          let sinaQ = false;
          let interneto = String.fromCharCode(98,95,49,55,95,98,108,117,114,114,101,100,0);
          let package_zvW = 3;
         dropdownq >>= Math.min(3, Math.abs(package_zvW ^ dropdownq));
         sinaQ = interneto.length > 9;
         interneto = `${((sinaQ ? 1 : 5))}`;
         package_zvW %= Math.max(3, interneto.length);
         break;
      }
      if (tickedK == componentm) {
         componentm += "1";
      }
         hooks = [componentm.length * awayj];
          let q_unlock3 = 4.0;
          let logoV: Map<any, any> = new Map([[String.fromCharCode(105,95,49,95,109,97,116,114,105,120,105,110,103,0),48], [String.fromCharCode(113,95,49,51,95,114,101,109,97,116,114,105,120,0),379], [String.fromCharCode(110,95,52,51,95,102,111,99,117,115,97,98,108,101,0),991]]);
         componentm += `${awayj / (Math.max(parseInt(`${q_unlock3}`), 6))}`;
         q_unlock3 *= logoV.size | logoV.size;
      let adultM = String.fromCharCode(118,105,57,49,0) == componentm;
      do {
         componentm = "1";
         if (adultM) {
            break;
         }
      } while (adultM && ((componentm.length / (Math.max(1, 5))) <= 5 || (awayj / (Math.max(8, componentm.length))) <= 1));
         tickedK += `${(tickedK == String.fromCharCode(100,0) ? hooks.length : tickedK.length)}`;
      for (let e = 0; e < 1; e++) {
         tickedK += `${1 / (Math.max(4, tickedK.length))}`;
      }
      let manifestB = componentm.length <= 8494324;
      do {
         componentm = `${hooks.length}`;
         if (manifestB) {
            break;
         }
      } while (manifestB && (componentm.includes(tickedK)));
         componentm += `${(componentm == String.fromCharCode(69,0) ? tickedK.length : componentm.length)}`;
      if ((1 << (Math.min(2, hooks.length))) > 5 || 1 > (1 << (Math.min(2, hooks.length)))) {
         tickedK += "2";
      }
      stringsr -= 3;
      if (bang6) {
         break;
      }
   } while (bang6 && ((selectedQ.length ^ stringsr) < 1));
   for (let c = 0; c < 3; c++) {
       let emojiheartz = 2.0;
       let shootnogoalE = String.fromCharCode(98,95,56,50,95,102,105,110,97,108,105,122,101,114,0);
          let buildw: Map<any, any> = new Map([[String.fromCharCode(101,110,99,108,111,115,105,110,103,95,107,95,57,55,0),268], [String.fromCharCode(101,110,97,98,108,101,115,95,113,95,51,56,0),640], [String.fromCharCode(100,95,56,51,95,98,107,116,114,0),780]]);
          let sorth = 5;
         shootnogoalE += `${shootnogoalE.length % (Math.max(7, sorth))}`;
         buildw = new Map([[`${buildw.size}`, 1 - buildw.size]]);
         sorth <<= Math.min(Math.abs(buildw.size ^ buildw.size), 2);
          let animations7 = String.fromCharCode(98,95,51,95,97,115,99,0);
          let sell5 = String.fromCharCode(120,95,51,50,95,112,111,108,121,109,111,100,0);
          let iconrightorangeP = String.fromCharCode(115,119,97,112,112,97,98,108,101,95,50,95,53,50,0);
         shootnogoalE += `${animations7.length % (Math.max(3, 5))}`;
         animations7 += "3";
         sell5 = "3";
         iconrightorangeP = `${iconrightorangeP.length >> (Math.min(Math.abs(3), 5))}`;
          let libglogp = 2;
         shootnogoalE = `${shootnogoalE.length % (Math.max(2, 9))}`;
         libglogp += libglogp;
      let baiduY = shootnogoalE.length >= 5654801;
      do {
         shootnogoalE = `${shootnogoalE.length}`;
         if (baiduY) {
            break;
         }
      } while ((shootnogoalE.length < 3) && baiduY);
      for (let y = 0; y < 3; y++) {
          let libreactnativejniI: Map<any, any> = new Map([[String.fromCharCode(115,115,101,100,105,102,102,95,52,95,56,0),60], [String.fromCharCode(120,95,50,51,95,100,105,121,102,112,0),715]]);
          let nodeF = 0.0;
         shootnogoalE += `${3 | libreactnativejniI.size}`;
         libreactnativejniI.set(`${nodeF}`, 2);
         nodeF /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${nodeF}`)), 5))}`), 4);
      }
         shootnogoalE += `${(shootnogoalE == String.fromCharCode(112,0) ? shootnogoalE.length : parseInt(`${emojiheartz}`))}`;
      defaultbasketballbgl -= xvodd.length >> (Math.min(Math.abs(3), 2));
   }
   let backwhite0 = popupX == String.fromCharCode(114,102,107,111,105,0);
   do {
      popupX += "3";
      if (backwhite0) {
         break;
      }
   } while ((becomes == popupX) && backwhite0);
   for (let j = 0; j < 1; j++) {
       let adultY = 2;
       let showmoreQ = false;
       let flipperA = true;
       let hooksN = String.fromCharCode(122,95,50,48,95,117,110,115,97,118,101,100,0);
         showmoreQ = !flipperA;
         showmoreQ = 2 <= adultY;
         flipperA = showmoreQ || adultY > 7;
      for (let i = 0; i < 3; i++) {
         flipperA = (!showmoreQ ? !flipperA : showmoreQ);
      }
         flipperA = (!showmoreQ ? !flipperA : !showmoreQ);
         showmoreQ = 22 <= adultY;
      let iconviewergift = adultY >= 9507090;
      do {
          let vietnamb = 4.0;
          let vignette8 = 1;
         adultY *= ((showmoreQ ? 1 : 5) >> (Math.min(Math.abs(vignette8), 5)));
         vietnamb += parseFloat(`${parseInt(`${vietnamb}`)}`);
         vignette8 >>= Math.min(Math.abs(1 << (Math.min(Math.abs(parseInt(`${vietnamb}`)), 2))), 3);
         if (iconviewergift) {
            break;
         }
      } while ((3 == (5 + adultY)) && iconviewergift);
      while (4 >= hooksN.length || !flipperA) {
          let orangetickw = false;
          let sliderO = String.fromCharCode(99,95,50,51,95,112,97,99,107,101,100,0);
         flipperA = !showmoreQ;
         orangetickw = sliderO.length <= 18;
         sliderO = "3";
         break;
      }
      let iconbackwhitei = flipperA ? !flipperA : flipperA;
      do {
          let trophys: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,95,117,95,49,57,0),277], [String.fromCharCode(107,95,55,53,95,109,97,120,105,109,117,109,0),975]]);
          let release_n4o = String.fromCharCode(120,95,54,56,95,103,101,116,105,110,116,0);
          let rendero = 3.0;
          let telegrame = 0.0;
          let armvad = 5.0;
         flipperA = rendero == 80.77;
         trophys.set(`${armvad}`, parseInt(`${telegrame}`));
         release_n4o = `${(String.fromCharCode(102,0) == release_n4o ? release_n4o.length : parseInt(`${telegrame}`))}`;
         rendero -= parseFloat(`${parseInt(`${telegrame}`)}`);
         armvad /= Math.max(3, (parseFloat(`${release_n4o == String.fromCharCode(57,0) ? release_n4o.length : parseInt(`${armvad}`)}`)));
         if (iconbackwhitei) {
            break;
         }
      } while ((hooksN.startsWith(`${flipperA}`)) && iconbackwhitei);
         adultY *= adultY;
      while (!showmoreQ) {
          let libruntimeexecutorh: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,104,95,50,56,0),210], [String.fromCharCode(118,111,114,98,105,115,99,111,109,109,101,110,116,95,106,95,51,49,0),316]]);
          let eyeopen1 = 2;
          let whiteanimationlivea: Array<any> = [884, 846, 655];
          let middlebrightnessA = true;
         showmoreQ = 88 > adultY || !flipperA;
         libruntimeexecutorh.set(`${eyeopen1}`, 1);
         eyeopen1 <<= Math.min(Math.abs(eyeopen1), 2);
         whiteanimationlivea.push(whiteanimationlivea.length);
         middlebrightnessA = !middlebrightnessA;
         break;
      }
      while (showmoreQ) {
         showmoreQ = hooksN.length == 5;
         break;
      }
      becomes = `${spinner4.length}`;
   }
   if (xvodd.endsWith(`${chatroombackgroundd}`)) {
       let upgrade4: Map<any, any> = new Map([[String.fromCharCode(116,95,53,48,95,102,97,99,105,108,105,116,97,116,101,0),String.fromCharCode(103,95,49,57,0)], [String.fromCharCode(101,97,114,108,105,101,114,95,100,95,51,56,0),String.fromCharCode(100,95,55,57,95,99,117,116,111,102,102,0)], [String.fromCharCode(121,99,111,99,103,114,103,98,97,95,99,95,51,49,0),String.fromCharCode(110,111,118,101,99,95,55,95,53,49,0)]]);
       let grayg: Map<any, any> = new Map([[String.fromCharCode(110,95,53,51,95,100,101,115,116,114,111,121,0),876], [String.fromCharCode(117,110,114,101,115,111,108,118,101,100,95,111,95,51,54,0),88]]);
       let subsY = 0.0;
          let libreactnativeblob4 = 4.0;
         upgrade4.set(`${subsY}`, parseInt(`${libreactnativeblob4}`) & parseInt(`${subsY}`));
       let encryptn = String.fromCharCode(111,95,49,52,95,113,114,99,111,100,101,0);
         grayg.set(`${upgrade4.size}`, grayg.size);
      let statisticsq = 7766490 <= upgrade4.size;
      do {
         upgrade4.set(`${upgrade4.size}`, grayg.size);
         if (statisticsq) {
            break;
         }
      } while ((grayg.size > 1) && statisticsq);
       let sell6 = String.fromCharCode(98,95,49,49,95,112,101,114,112,105,120,101,108,0);
       let teamdetailsbgz = String.fromCharCode(102,114,97,109,101,115,105,122,101,95,99,95,57,53,0);
          let downloaderY = String.fromCharCode(113,95,50,50,95,112,97,114,105,116,121,0);
          let shootyesgoalZ = String.fromCharCode(105,95,49,51,95,98,108,97,99,107,111,117,116,0);
         subsY += parseFloat(`${1}`);
         downloaderY = "2";
         shootyesgoalZ = `${downloaderY.length}`;
      if ((1 + upgrade4.size) > 2 || 1 > (1 + upgrade4.size)) {
          let emojiheartB = 3.0;
         upgrade4.set(`${sell6}`, sell6.length);
         emojiheartB -= parseInt(`${emojiheartB}`) ^ 3;
      }
      let usernamez = grayg.size <= 4944681;
      do {
         grayg = new Map([[`${upgrade4.size}`, upgrade4.size]]);
         if (usernamez) {
            break;
         }
      } while (usernamez && ((upgrade4.size ^ grayg.size) > 1));
          let libreactnativeblob5 = true;
         encryptn = `${(String.fromCharCode(52,0) == encryptn ? sell6.length : encryptn.length)}`;
         libreactnativeblob5 = libreactnativeblob5 || !libreactnativeblob5;
      xvodd = `${defaultbasketballbgl}`;
   }
      chinaA = `${parseInt(`${buildc}`)}`;
   if (5 <= (parseInt(`${buildc}`) * selectedQ.length) || (buildc * 4.6) <= 3.83) {
       let minit_90 = 5.0;
       let pauseg = 2.0;
       let modely = String.fromCharCode(112,95,52,95,99,105,114,99,117,108,97,114,0);
         pauseg += 1;
      if (modely.includes(`${pauseg}`)) {
          let java7 = String.fromCharCode(114,101,105,110,115,101,114,116,95,99,95,55,56,0);
          let giflivestreaming4 = 4.0;
          let iconarrowrightoranged = 0;
          let bridgeX = 0.0;
          let memberB = 1.0;
         pauseg *= parseInt(`${memberB}`) % (Math.max(java7.length, 2));
         java7 = `${2 / (Math.max(iconarrowrightoranged, 10))}`;
         giflivestreaming4 /= Math.max(3 % (Math.max(9, parseInt(`${giflivestreaming4}`))), 2);
         iconarrowrightoranged >>= Math.min(Math.abs(1), 3);
         bridgeX -= parseInt(`${bridgeX}`) % (Math.max(2, iconarrowrightoranged));
         memberB += parseFloat(`${parseInt(`${giflivestreaming4}`)}`);
      }
         minit_90 /= Math.max(parseFloat(`${modely.length * parseInt(`${minit_90}`)}`), 3);
      for (let i = 0; i < 1; i++) {
         minit_90 += parseFloat(`${1}`);
      }
      for (let a = 0; a < 3; a++) {
         pauseg /= Math.max(modely.length % (Math.max(2, 9)), 3);
      }
       let humidityV = String.fromCharCode(112,97,115,115,119,111,114,100,0);
      for (let i = 0; i < 1; i++) {
         minit_90 -= parseFloat(`${1 % (Math.max(10, parseInt(`${pauseg}`)))}`);
      }
          let showlessE = String.fromCharCode(105,110,105,116,105,97,108,105,115,101,95,108,95,57,52,0);
          let typingloadingi: Map<any, any> = new Map([[String.fromCharCode(112,95,49,50,95,100,105,97,108,105,110,103,0),950], [String.fromCharCode(104,100,108,114,95,48,95,54,49,0),485]]);
         minit_90 += (parseFloat(`${humidityV == String.fromCharCode(110,0) ? humidityV.length : showlessE.length}`));
         showlessE = "2";
         typingloadingi.set(`${typingloadingi.size}`, typingloadingi.size << (Math.min(Math.abs(1), 5)));
         humidityV += `${parseInt(`${pauseg}`)}`;
      buildc += parseFloat(`${becomes.length * 1}`);
   }
   while (!huawei9) {
      chinaA = `${stringsr}`;
      break;
   }
      stringsr <<= Math.min(Math.abs(parseInt(`${buildc}`) << (Math.min(1, Math.abs(3)))), 1);
       let detailm = String.fromCharCode(109,95,51,95,115,117,98,112,111,105,110,116,0);
       let infom = String.fromCharCode(109,95,53,49,95,115,104,111,114,116,102,108,111,97,116,0);
       let smallG: Map<any, any> = new Map([[String.fromCharCode(101,118,101,114,95,119,95,57,56,0),802], [String.fromCharCode(101,95,57,53,95,105,110,101,116,0),788], [String.fromCharCode(105,95,52,55,95,98,97,99,107,103,114,117,110,100,0),662]]);
         smallG.set(infom, (String.fromCharCode(77,0) == infom ? infom.length : detailm.length));
         smallG = new Map([[infom, infom.length - detailm.length]]);
       let graphicsC = 1.0;
       let libswresample4 = 0.0;
       let defaultprofilepic7 = String.fromCharCode(118,95,50,95,114,101,112,114,111,99,101,115,115,0);
       let sliderf = 2.0;
       let sound4 = 4.0;
      let schedulep = String.fromCharCode(50,113,108,97,97,0) == defaultprofilepic7;
      do {
         defaultprofilepic7 += `${parseInt(`${sound4}`) | 1}`;
         if (schedulep) {
            break;
         }
      } while (schedulep && ((defaultprofilepic7.length / 4) == 4 || (defaultprofilepic7.length / (Math.max(4, 4))) == 2));
      let informationT = 6543258 <= smallG.size;
      do {
         smallG.set(`${sound4}`, parseInt(`${sliderf}`) | parseInt(`${sound4}`));
         if (informationT) {
            break;
         }
      } while ((1 == (1 - infom.length) && (1 - smallG.size) == 1) && informationT);
       let unimplementedviewS = 1.0;
       let libavfilterV = 0.0;
          let telegramW: Array<any> = [877, 537];
         detailm += "2";
         telegramW = [telegramW.length];
      defaultbasketballbgl >>= Math.min(2, Math.abs(3 | spinner4.length));
   let detailn = profileframeR == String.fromCharCode(57,122,121,110,119,0);
   do {
      profileframeR = `${1 >> (Math.min(Math.abs(parseInt(`${buildc}`)), 5))}`;
      if (detailn) {
         break;
      }
   } while ((4 < stringsr) && detailn);
   if ((5 * parseInt(`${buildc}`)) <= 3 && (5 & popupX.length) <= 3) {
      buildc += parseFloat(`${chinaA.length}`);
   }
   for (let j = 0; j < 2; j++) {
      selectedQ.push(parseInt(`${chatroombackgroundd}`));
   }
      selectedQ.push(parseInt(`${chatroombackgroundd}`) * iconpipshrink4.length);
      spinner4 += `${chinaA.length}`;
      profileframeR += `${(String.fromCharCode(49,0) == popupX ? xvodd.length : popupX.length)}`;
   while ((defaultbasketballbgl * selectedQ.length) <= 5 || (5 * selectedQ.length) <= 5) {
      defaultbasketballbgl += 3 ^ parseInt(`${buildc}`);
      break;
   }
      popupX += "2";
      chinaA = `${selectedQ.length}`;
      profileframeR = "3";
       let defaultpredictionprofilee = 2.0;
       let awayplayerv = 3;
       let livenodatabgimg6 = false;
      let baselineJ = defaultpredictionprofilee >= 8281164.0;
      do {
         defaultpredictionprofilee -= parseFloat(`${parseInt(`${defaultpredictionprofilee}`)}`);
         if (baselineJ) {
            break;
         }
      } while (baselineJ && (5.79 < defaultpredictionprofilee));
         livenodatabgimg6 = 35 == awayplayerv && 8.66 == defaultpredictionprofilee;
         awayplayerv &= ((livenodatabgimg6 ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${defaultpredictionprofilee}`)), 2)));
       let gradleu = false;
       let typingR = true;
          let fileX: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,111,99,111,108,95,101,95,53,49,0),877], [String.fromCharCode(113,95,50,54,95,109,97,107,101,110,97,110,0),202]]);
          let predictionwin2 = 2;
         gradleu = 87 <= (predictionwin2 - awayplayerv);
         fileX = new Map([[`${fileX.size}`, 2]]);
         predictionwin2 += fileX.size | 1;
      for (let w = 0; w < 3; w++) {
         typingR = !livenodatabgimg6;
      }
       let moonf = String.fromCharCode(113,95,52,56,95,99,111,108,117,109,110,0);
       let infov = String.fromCharCode(109,117,108,116,120,109,117,108,116,95,114,95,53,0);
          let filld = String.fromCharCode(102,108,101,120,105,98,108,101,95,104,95,54,55,0);
          let active7: Array<any> = [885, 962, 794];
          let libapminsightbs: Array<any> = [String.fromCharCode(110,111,114,109,97,108,95,122,95,53,50,0), String.fromCharCode(122,101,116,97,95,114,95,52,51,0), String.fromCharCode(97,95,57,52,95,110,111,110,108,105,110,101,97,114,0)];
         moonf = `${filld.length}`;
         filld += `${active7.length % (Math.max(1, 9))}`;
         active7 = [1];
         libapminsightbs = [active7.length];
          let downloader2 = 3;
          let bodanW = 4.0;
          let bingZo: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,110,101,116,115,95,115,95,54,50,0),949], [String.fromCharCode(116,100,108,115,95,116,95,56,55,0),970]]);
         moonf = `${2 >> (Math.min(Math.abs(downloader2), 3))}`;
         downloader2 += bingZo.size | 2;
         bodanW /= Math.max(1, 3 ^ bingZo.size);
      stringsr /= Math.max(4, ((livenodatabgimg6 ? 3 : 5) / 3));
   for (let j = 0; j < 2; j++) {
       let notificationfilled9 = String.fromCharCode(112,100,115,95,51,95,51,48,0);
       let dependenciesW = String.fromCharCode(114,117,110,115,95,101,95,57,49,0);
       let encryptorl = String.fromCharCode(116,95,51,48,95,115,119,105,99,104,0);
      if (5 >= encryptorl.length) {
          let activef = String.fromCharCode(103,97,112,0);
         dependenciesW = `${dependenciesW.length | notificationfilled9.length}`;
         activef = "3";
      }
       let gmailG: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,114,101,115,99,104,101,100,117,108,101,0),986], [String.fromCharCode(101,95,55,52,95,100,101,116,97,99,104,101,100,0),152], [String.fromCharCode(99,95,53,56,95,103,117,116,115,0),970]]);
      while (dependenciesW.length == 4) {
          let privatechatbgB = false;
         notificationfilled9 += `${2 ^ dependenciesW.length}`;
         privatechatbgB = (privatechatbgB ? privatechatbgB : !privatechatbgB);
         break;
      }
      if (3 < (gmailG.size >> (Math.min(Math.abs(2), 3))) && 5 < (gmailG.size >> (Math.min(Math.abs(2), 4)))) {
         gmailG = new Map([[notificationfilled9, dependenciesW.length ^ notificationfilled9.length]]);
      }
       let libbufferT = 0;
         libbufferT >>= Math.min(1, Math.abs(dependenciesW.length - gmailG.size));
         notificationfilled9 = `${encryptorl.length}`;
       let eact0 = String.fromCharCode(112,105,116,99,104,102,105,108,116,101,114,95,105,95,55,54,0);
      while (1 == (libbufferT % (Math.max(2, dependenciesW.length)))) {
         libbufferT *= notificationfilled9.length * encryptorl.length;
         break;
      }
      huawei9 = libfileh;
   }
      xvodd = `${((huawei9 ? 2 : 1) >> (Math.min(Math.abs(2), 3)))}`;
       let disty = String.fromCharCode(107,95,55,48,95,116,97,112,0);
          let hooksx = false;
          let matchinactivem = true;
          let frame_e_u = 1.0;
         disty = `${1 / (Math.max(parseInt(`${frame_e_u}`), 10))}`;
         hooksx = !matchinactivem;
         matchinactivem = !hooksx || matchinactivem;
         frame_e_u *= (parseFloat(`${(hooksx ? 3 : 5) >> (Math.min(4, Math.abs(2)))}`));
         disty = `${disty.length}`;
      for (let i = 0; i < 1; i++) {
          let gestureC = String.fromCharCode(115,119,105,116,99,104,105,110,103,95,50,95,53,50,0);
         disty = `${gestureC.length}`;
      }
      iconpipshrink4.push(becomes.length);
   let register_vxw = popupX == String.fromCharCode(103,119,120,122,0);
   do {
       let baset = 4.0;
       let membershipb: Array<any> = [545, 814];
       let libglogt: Array<any> = [String.fromCharCode(107,95,51,57,95,97,101,115,0), String.fromCharCode(109,101,116,97,0), String.fromCharCode(119,114,111,110,103,95,55,95,49,49,0)];
       let blackD = 1;
       let humidityX: Array<any> = [531, 237, 234];
      let cornerkicke = 7035845 <= libglogt.length;
      do {
          let faviconN = 2.0;
          let sports9 = 1.0;
          let assetsW = 4.0;
          let calendar4 = 1.0;
         libglogt = [parseInt(`${sports9}`) >> (Math.min(1, Math.abs(parseInt(`${assetsW}`))))];
         faviconN *= 1;
         sports9 -= parseFloat(`${parseInt(`${faviconN}`) | parseInt(`${calendar4}`)}`);
         assetsW += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${calendar4}`)), 2))}`);
         if (cornerkicke) {
            break;
         }
      } while ((!libglogt.includes(blackD)) && cornerkicke);
       let iconwechatH = String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,98,95,56,0);
       let videoZ = String.fromCharCode(99,116,105,118,105,116,121,95,119,95,53,56,0);
         iconwechatH = `${iconwechatH.length % 1}`;
         blackD *= 2;
         humidityX.push(humidityX.length * 1);
      if (4 > (iconwechatH.length & 5)) {
         humidityX = [2];
      }
         membershipb.push((String.fromCharCode(88,0) == iconwechatH ? membershipb.length : iconwechatH.length));
      if (!humidityX.includes(baset)) {
          let questA = String.fromCharCode(101,95,49,53,0);
         humidityX.push(videoZ.length >> (Math.min(2, iconwechatH.length)));
         questA += `${questA.length ^ 1}`;
      }
         baset -= iconwechatH.length;
      let q_imageF = humidityX.length <= 6433202;
      do {
         humidityX.push(libglogt.length | 2);
         if (q_imageF) {
            break;
         }
      } while (q_imageF && (3 > (5 % (Math.max(3, humidityX.length))) || (humidityX.length % 5) > 2));
      let y_titlee = iconwechatH.length >= 9377566;
      do {
          let libloggerB = 1.0;
          let clearu = String.fromCharCode(116,95,53,52,95,111,119,110,101,114,0);
          let refreshborderlessq = String.fromCharCode(104,95,54,55,95,116,111,111,108,116,105,112,0);
          let faviconh = 3.0;
         iconwechatH += `${iconwechatH.length}`;
         libloggerB += parseFloat(`${2}`);
         clearu = `${parseInt(`${faviconh}`) - parseInt(`${libloggerB}`)}`;
         refreshborderlessq = `${clearu.length}`;
         faviconh /= Math.max(parseFloat(`${1 >> (Math.min(4, Math.abs(parseInt(`${libloggerB}`))))}`), 5);
         if (y_titlee) {
            break;
         }
      } while (((4 * iconwechatH.length) <= 4) && y_titlee);
          let hnewss: Map<any, any> = new Map([[String.fromCharCode(101,95,49,54,95,111,114,119,97,114,100,101,100,0),false ], [String.fromCharCode(112,115,97,95,50,95,49,50,0),false ]]);
         baset += (String.fromCharCode(75,0) == videoZ ? videoZ.length : libglogt.length);
         hnewss.set(`${hnewss.size}`, 2 * hnewss.size);
      for (let y = 0; y < 1; y++) {
         blackD &= membershipb.length << (Math.min(Math.abs(3), 5));
      }
       let agreementf = String.fromCharCode(104,119,116,105,109,101,95,113,95,57,48,0);
       let bootsplasha = 4;
       let eighteena = 3;
      popupX += `${3 / (Math.max(8, selectedQ.length))}`;
      if (register_vxw) {
         break;
      }
   } while ((5 == (popupX.length * 1) || (iconpipshrink4.length * popupX.length) == 1) && register_vxw);
   while (!huawei9) {
      huawei9 = (stringsr - selectedQ.length) < 70;
      break;
   }
      stringsr |= popupX.length & selectedQ.length;
      selectedQ = [3 + parseInt(`${buildc}`)];
   for (let c = 0; c < 1; c++) {
       let blackR = 3.0;
       let refresho = String.fromCharCode(114,101,110,100,101,114,105,110,103,95,118,95,49,57,0);
       let libavcodecu = 5.0;
       let reducer4 = 4.0;
       let goal7 = 4.0;
         blackR /= Math.max(parseInt(`${reducer4}`), 5);
         refresho += `${parseInt(`${reducer4}`) ^ parseInt(`${libavcodecu}`)}`;
       let downloadl: Map<any, any> = new Map([[String.fromCharCode(108,115,112,105,95,52,95,50,57,0),805], [String.fromCharCode(108,95,49,51,95,108,104,97,115,104,0),71]]);
         blackR /= Math.max(4, parseInt(`${goal7}`));
       let iconpipexpandf: Map<any, any> = new Map([[String.fromCharCode(106,95,57,53,95,112,114,101,115,101,100,0),String.fromCharCode(108,111,99,95,57,95,55,51,0)], [String.fromCharCode(112,95,56,50,95,111,118,102,108,0),String.fromCharCode(121,99,98,99,114,95,101,95,49,55,0)], [String.fromCharCode(120,105,110,99,95,55,95,56,49,0),String.fromCharCode(116,101,114,109,115,101,116,95,107,95,49,48,48,0)]]);
       let profilepicH: Map<any, any> = new Map([[String.fromCharCode(113,95,52,56,95,112,97,116,104,109,116,117,0),942], [String.fromCharCode(97,95,54,57,95,116,111,117,112,112,101,114,0),181], [String.fromCharCode(98,101,99,111,109,101,95,112,95,50,48,0),615]]);
          let index6 = String.fromCharCode(115,95,52,50,95,112,105,110,0);
         downloadl = new Map([[`${profilepicH.size}`, index6.length - profilepicH.size]]);
         refresho = `${parseInt(`${reducer4}`) << (Math.min(Math.abs(profilepicH.size), 2))}`;
         profilepicH.set(`${profilepicH.size}`, 1 | profilepicH.size);
      while ((refresho.length * blackR) <= 1.47) {
         refresho = `${parseInt(`${libavcodecu}`) / (Math.max(5, parseInt(`${reducer4}`)))}`;
         break;
      }
         refresho = `${parseInt(`${blackR}`)}`;
         reducer4 *= profilepicH.size % (Math.max(3, 6));
      stringsr ^= 3 >> (Math.min(3, chinaA.length));
   }
      spinner4 += `${parseInt(`${buildc}`)}`;
   for (let c = 0; c < 2; c++) {
       let yellowredcard4 = 2;
         yellowredcard4 &= 1;
       let megaphoneL = String.fromCharCode(102,108,101,120,105,98,108,101,95,99,95,50,48,0);
       let change3 = String.fromCharCode(102,95,57,52,95,98,103,112,104,99,104,101,99,107,0);
          let modep: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,95,54,95,51,54,0),String.fromCharCode(109,117,108,116,120,95,119,95,52,56,0)], [String.fromCharCode(98,114,101,97,107,111,117,116,95,100,95,54,57,0),String.fromCharCode(101,110,117,109,101,114,97,116,101,95,119,95,51,56,0)]]);
          let halfV: Map<any, any> = new Map([[String.fromCharCode(100,114,105,118,101,110,95,98,95,54,54,0),188], [String.fromCharCode(99,95,53,50,95,102,105,116,122,0),420], [String.fromCharCode(99,95,51,57,95,109,111,110,111,115,112,97,99,101,0),143]]);
          let crownd = 3.0;
         yellowredcard4 -= yellowredcard4 & 3;
         modep = new Map([[`${modep.size}`, modep.size]]);
         halfV = new Map([[`${modep.size}`, 2 << (Math.min(1, Math.abs(halfV.size)))]]);
         crownd /= Math.max(parseFloat(`${parseInt(`${crownd}`)}`), 1);
      profileframeR += `${chinaA.length}`;
   }
      defaultbasketballbgl *= bottom5.length;
 },
      movieList = [],
      showGuide = false,
      streams = [],
      showMoreType = "none",
      isFetchingRecommendedMovies = false,
      appOrientation,
      devicesOrientation,
      lockOrientation,
      handleSaveVod = () => {
       let profilepicu = 4;
    let rulesC = String.fromCharCode(114,101,97,99,116,105,111,110,95,117,95,55,54,0);
    let champion2 = String.fromCharCode(102,105,102,111,115,95,100,95,57,48,0);
    let componentregistryG = String.fromCharCode(110,102,116,95,48,95,57,53,0);
    let minimizeL = 0.0;
    let submitt = true;
    let stationsA = String.fromCharCode(106,95,49,53,95,117,110,114,101,102,0);
    let private_qn4 = String.fromCharCode(101,121,98,111,97,114,100,95,107,95,55,52,0);
    let libturbomodulejsijniZ = 0.0;
      champion2 = `${2 * parseInt(`${minimizeL}`)}`;
   while (!componentregistryG.endsWith(`${champion2.length}`)) {
      componentregistryG = `${stationsA.length << (Math.min(rulesC.length, 3))}`;
      break;
   }
      rulesC = `${profilepicu * stationsA.length}`;
      rulesC += `${(parseInt(`${minimizeL}`) << (Math.min(3, Math.abs((submitt ? 3 : 2)))))}`;
   while (5.99 == (1.87 - minimizeL) && (componentregistryG.length + 3) == 2) {
      minimizeL += 3;
      break;
   }
   for (let u = 0; u < 3; u++) {
      minimizeL += componentregistryG.length >> (Math.min(Math.abs(3), 2));
   }
      private_qn4 = `${profilepicu ^ 2}`;
      minimizeL *= componentregistryG.length;
   if ((profilepicu ^ componentregistryG.length) == 4) {
      componentregistryG = `${parseInt(`${minimizeL}`)}`;
   }
      rulesC = `${rulesC.length % (Math.max(3, 8))}`;
       let libswresampleI = 1.0;
       let informationj = String.fromCharCode(102,101,109,97,108,101,95,111,95,51,0);
         informationj += `${1 | informationj.length}`;
       let playercommon9 = String.fromCharCode(98,95,52,54,95,114,103,98,97,108,101,0);
          let combined0 = String.fromCharCode(116,121,112,101,95,54,95,56,54,0);
         informationj = `${informationj.length}`;
         combined0 = `${combined0.length % (Math.max(2, 10))}`;
      let subtextD = libswresampleI >= 6190523.0;
      do {
          let libcrashsdkz = String.fromCharCode(110,117,109,101,114,105,99,95,120,95,49,52,0);
         libswresampleI *= libcrashsdkz.length;
         if (subtextD) {
            break;
         }
      } while (subtextD && (!informationj.includes(`${libswresampleI}`)));
          let customI = String.fromCharCode(103,95,52,50,95,115,116,114,101,101,116,0);
          let reminder4: Map<any, any> = new Map([[String.fromCharCode(97,100,114,109,95,114,95,52,48,0),383], [String.fromCharCode(114,101,101,110,116,114,97,110,116,95,119,95,56,50,0),471]]);
         libswresampleI += informationj.length;
         customI = `${customI.length}`;
         reminder4.set(`${customI}`, customI.length);
      let handlerg = informationj.length >= 8486602;
      do {
          let typingJ = true;
          let defaultpredictionprofile1 = 4;
          let long_k7 = 3.0;
         informationj += `${playercommon9.length ^ defaultpredictionprofile1}`;
         typingJ = long_k7 >= 60.45;
         defaultpredictionprofile1 ^= ((typingJ ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${long_k7}`)), 3)));
         if (handlerg) {
            break;
         }
      } while (handlerg && (4.15 > (libswresampleI / 1.21) && 3 > (3 & informationj.length)));
      componentregistryG = "3";
      champion2 = "3";
       let renderF = 3.0;
       let material4 = 1.0;
       let o_imageg = String.fromCharCode(109,105,120,105,110,115,95,116,95,57,50,0);
          let usernamey = false;
         renderF *= (parseInt(`${renderF}`) >> (Math.min(3, Math.abs((usernamey ? 2 : 2)))));
      let skip8 = 7130486.0 >= renderF;
      do {
         renderF += 1;
         if (skip8) {
            break;
         }
      } while (skip8 && (3 <= (5 >> (Math.min(2, o_imageg.length)))));
         material4 -= parseFloat(`${1}`);
         renderF += (String.fromCharCode(100,0) == o_imageg ? o_imageg.length : parseInt(`${material4}`));
          let iconlogouts = String.fromCharCode(119,95,52,51,95,119,111,114,107,101,114,0);
          let animationp: Array<any> = [495, 29, 596];
         material4 *= parseFloat(`${o_imageg.length | 1}`);
         iconlogouts += `${2 & iconlogouts.length}`;
         animationp.push(animationp.length);
      let changeL = String.fromCharCode(108,122,105,108,102,51,114,98,104,112,0) == o_imageg;
      do {
         o_imageg += `${2 | parseInt(`${material4}`)}`;
         if (changeL) {
            break;
         }
      } while (changeL && ((o_imageg.length % (Math.max(5, 5))) <= 3 || 1 <= (5 | o_imageg.length)));
         material4 /= Math.max((parseFloat(`${String.fromCharCode(83,0) == o_imageg ? parseInt(`${material4}`) : o_imageg.length}`)), 5);
      while (material4 < 1.1) {
         renderF *= parseInt(`${material4}`);
         break;
      }
         o_imageg += "2";
      champion2 += `${rulesC.length}`;
      submitt = private_qn4 == stationsA;
       let historyg = String.fromCharCode(99,111,117,112,108,105,110,103,95,115,95,54,55,0);
       let iconarrowrightblackQ = 0.0;
       let evento = true;
      for (let y = 0; y < 3; y++) {
          let relatedC = String.fromCharCode(122,95,55,54,95,101,114,97,115,101,114,0);
          let mutedv = String.fromCharCode(110,101,97,114,108,121,95,101,95,55,48,0);
          let largebrightnessj: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,52,95,55,55,0),816], [String.fromCharCode(111,95,51,52,95,115,109,97,108,108,101,114,0),909]]);
         iconarrowrightblackQ *= largebrightnessj.size;
         relatedC += `${2 & relatedC.length}`;
         mutedv += `${3 ^ mutedv.length}`;
         largebrightnessj = new Map([[mutedv, mutedv.length | relatedC.length]]);
      }
         iconarrowrightblackQ /= Math.max(1 - historyg.length, 1);
          let pushM = 5.0;
          let iconcloses = true;
         iconarrowrightblackQ -= (parseInt(`${iconarrowrightblackQ}`) + (iconcloses ? 5 : 1));
         pushM *= 2;
         iconcloses = pushM == 3.23;
         historyg += `${historyg.length}`;
      let yellowvideolive3 = iconarrowrightblackQ >= 8235993.0;
      do {
         iconarrowrightblackQ *= ((evento ? 1 : 3));
         if (yellowvideolive3) {
            break;
         }
      } while (yellowvideolive3 && (!historyg.endsWith(`${iconarrowrightblackQ}`)));
      if (!historyg.endsWith(`${iconarrowrightblackQ}`)) {
          let downloadedJ = 5.0;
          let buildZ = String.fromCharCode(102,95,53,57,95,119,104,101,110,0);
          let defaultpredictionprofile0 = 4;
         iconarrowrightblackQ /= Math.max(1, 3);
         downloadedJ *= parseFloat(`${2 << (Math.min(1, Math.abs(parseInt(`${downloadedJ}`))))}`);
         buildZ += `${(buildZ == String.fromCharCode(112,0) ? buildZ.length : defaultpredictionprofile0)}`;
         defaultpredictionprofile0 %= Math.max(5, (buildZ == String.fromCharCode(117,0) ? defaultpredictionprofile0 : buildZ.length));
      }
       let zhengpianW = 2.0;
          let modeB = 3.0;
          let phoneu: Array<any> = [562, 955, 645];
         evento = phoneu.includes(modeB);
          let shared9 = 2.0;
          let iconfeedbacks = String.fromCharCode(115,112,101,99,115,95,49,95,57,50,0);
         zhengpianW *= parseFloat(`${parseInt(`${iconarrowrightblackQ}`) % 3}`);
         shared9 += (String.fromCharCode(69,0) == iconfeedbacks ? iconfeedbacks.length : parseInt(`${shared9}`));
      private_qn4 += `${parseInt(`${minimizeL}`)}`;
      stationsA += `${componentregistryG.length / (Math.max(champion2.length, 2))}`;
       let pageA = String.fromCharCode(101,100,105,97,95,117,95,57,51,0);
       let ajaxn = String.fromCharCode(107,95,57,51,95,115,116,115,122,0);
       let assetsG = true;
       let predictionwinA = 5.0;
       let componentP = 4.0;
         assetsG = String.fromCharCode(72,0) == ajaxn;
       let networkj = true;
       let libavformatS = true;
      while (!assetsG && 1.77 < (3.21 + predictionwinA)) {
         assetsG = libavformatS;
         break;
      }
      let rewarde = assetsG ? !assetsG : assetsG;
      do {
         assetsG = ((pageA.length % (Math.max(1, (networkj ? pageA.length : 77)))) > 77);
         if (rewarde) {
            break;
         }
      } while (rewarde && (!assetsG || 1 <= ajaxn.length));
       let anythinki: Map<any, any> = new Map([[String.fromCharCode(110,95,57,51,95,114,101,97,115,115,109,0),313], [String.fromCharCode(108,101,97,115,101,95,110,95,50,55,0),309]]);
         assetsG = 32 >= anythinki.size && 32 >= ajaxn.length;
         networkj = pageA == String.fromCharCode(101,0) || 79.27 <= predictionwinA;
          let product9 = 3.0;
         componentP -= parseInt(`${product9}`) / 3;
      stationsA += `${(pageA == String.fromCharCode(117,0) ? rulesC.length : pageA.length)}`;
       let form0 = String.fromCharCode(101,95,56,48,95,110,101,120,116,104,111,112,0);
       let customZ = 0.0;
       let refreshborderlessr = false;
      if (3.26 >= (form0.length * customZ)) {
          let vertical7: Map<any, any> = new Map([[String.fromCharCode(100,95,49,55,95,112,114,111,103,114,101,115,115,101,115,0),38], [String.fromCharCode(97,101,118,97,108,95,116,95,56,52,0),73], [String.fromCharCode(101,112,122,115,95,121,95,50,49,0),713]]);
          let themeX = 0.0;
          let runtimeschedulerM = String.fromCharCode(110,101,116,119,111,114,107,105,110,103,95,55,95,50,52,0);
          let libsentryk = String.fromCharCode(99,95,57,51,95,99,111,100,101,102,0);
         customZ -= 2;
         vertical7 = new Map([[runtimeschedulerM, libsentryk.length]]);
         themeX *= parseFloat(`${parseInt(`${themeX}`)}`);
         runtimeschedulerM += `${2 + runtimeschedulerM.length}`;
         libsentryk += `${libsentryk.length - runtimeschedulerM.length}`;
      }
      while (refreshborderlessr) {
         refreshborderlessr = customZ > 37.27 || String.fromCharCode(120,0) == form0;
         break;
      }
      let basketballawayteamF = refreshborderlessr ? !refreshborderlessr : refreshborderlessr;
      do {
         refreshborderlessr = !refreshborderlessr;
         if (basketballawayteamF) {
            break;
         }
      } while ((refreshborderlessr && 2.57 > (customZ * 3.86)) && basketballawayteamF);
      while (form0.length >= 5) {
         refreshborderlessr = form0 == String.fromCharCode(65,0);
         break;
      }
       let homeY = 3;
      for (let d = 0; d < 3; d++) {
         refreshborderlessr = homeY < 43 && form0.length < 43;
      }
      for (let r = 0; r < 2; r++) {
         homeY &= 3;
      }
         customZ -= parseInt(`${customZ}`);
          let othermatchdetailbgS = String.fromCharCode(118,95,56,49,95,108,111,99,107,109,103,114,0);
         form0 = `${3 - parseInt(`${customZ}`)}`;
         othermatchdetailbgS = `${othermatchdetailbgS.length}`;
      profilepicu /= Math.max(form0.length, 5);
      private_qn4 = `${rulesC.length << (Math.min(Math.abs(2), 3))}`;
   while (2 <= (private_qn4.length * profilepicu) || 2 <= (profilepicu * private_qn4.length)) {
       let inactiveC = false;
       let javaz = 4.0;
       let inouttargetredB = 1.0;
       let iconqqU: Map<any, any> = new Map([[String.fromCharCode(115,95,56,51,95,109,117,108,115,117,98,0),19], [String.fromCharCode(115,95,52,55,95,118,101,114,98,111,115,101,0),558]]);
       let iconclosewhitewithbgl: Array<any> = [590, 800];
      if (!Array.from(iconqqU.values()).includes(javaz)) {
         iconqqU = new Map([[`${iconqqU.size}`, iconqqU.size]]);
      }
      for (let b = 0; b < 2; b++) {
          let reddownarrowW = String.fromCharCode(107,95,56,52,95,115,117,103,103,101,115,116,105,111,110,0);
          let informations = String.fromCharCode(122,109,113,115,104,101,108,108,95,100,95,55,49,0);
          let subbasketballplayero = String.fromCharCode(98,97,110,110,101,114,95,119,95,54,48,0);
          let notificationI: Map<any, any> = new Map([[String.fromCharCode(118,112,120,100,101,99,95,48,95,53,55,0),true ], [String.fromCharCode(98,95,57,51,95,115,116,114,117,99,116,115,0),false ], [String.fromCharCode(99,104,107,108,105,115,116,95,111,95,57,51,0),false ]]);
          let notificationfillemptyR = String.fromCharCode(105,95,49,49,95,98,105,116,114,97,116,101,0);
         iconqqU = new Map([[`${iconqqU.size}`, parseInt(`${javaz}`)]]);
         reddownarrowW = `${informations.length | 2}`;
         informations += `${notificationI.size}`;
         subbasketballplayero = "2";
         notificationI.set(subbasketballplayero, subbasketballplayero.length & 3);
         notificationfillemptyR += `${notificationI.size << (Math.min(Math.abs(3), 4))}`;
      }
         inactiveC = 48 >= iconclosewhitewithbgl.length;
         iconqqU = new Map([[`${inactiveC}`, ((inactiveC ? 2 : 4) << (Math.min(Math.abs(parseInt(`${inouttargetredB}`)), 2)))]]);
      let bggradientt = 8026176 <= iconqqU.size;
      do {
         iconqqU = new Map([[`${iconqqU.size}`, parseInt(`${inouttargetredB}`)]]);
         if (bggradientt) {
            break;
         }
      } while ((4 > iconqqU.size) && bggradientt);
      for (let e = 0; e < 2; e++) {
         javaz -= parseInt(`${javaz}`) ^ 3;
      }
       let libreactperfloggerjni_ = 0.0;
       let networkG = 3.0;
         iconqqU = new Map([[`${libreactperfloggerjni_}`, 1]]);
          let emojiheartm = 5;
          let defaultteamZ = String.fromCharCode(97,95,57,52,95,117,110,115,112,101,99,105,102,105,101,100,0);
          let libyogav = 1;
         inouttargetredB += parseFloat(`${1}`);
         emojiheartm -= 3 & libyogav;
         defaultteamZ = `${defaultteamZ.length >> (Math.min(Math.abs(2), 2))}`;
         libyogav /= Math.max(4, 1 + libyogav);
       let combinedB: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,106,95,52,56,0),false ], [String.fromCharCode(100,120,116,97,95,114,95,49,50,0),true ]]);
      while (4 > (iconqqU.size * parseInt(`${libreactperfloggerjni_}`)) || (4 + iconqqU.size) > 3) {
         libreactperfloggerjni_ /= Math.max(1 % (Math.max(parseInt(`${libreactperfloggerjni_}`), 5)), 5);
         break;
      }
      if (3 < combinedB.size) {
          let libreactperfloggerjniO = String.fromCharCode(118,97,108,117,101,115,95,117,95,53,50,0);
          let update_9M = String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,114,95,55,48,0);
          let scheduleo = String.fromCharCode(112,95,56,48,95,100,114,105,118,105,110,103,0);
          let libjsii = 5;
          let t_managerx: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,95,97,95,56,50,0),911], [String.fromCharCode(114,101,113,117,105,114,101,95,109,95,55,57,0),879]]);
         networkG /= Math.max(3 << (Math.min(Math.abs(parseInt(`${javaz}`)), 2)), 1);
         libreactperfloggerjniO += `${update_9M.length}`;
         update_9M += `${(String.fromCharCode(108,0) == update_9M ? libreactperfloggerjniO.length : update_9M.length)}`;
         scheduleo = "1";
         libjsii /= Math.max(4, 1);
         t_managerx = new Map([[`${t_managerx.size}`, 1 ^ scheduleo.length]]);
      }
      while (4.59 < (4.47 / (Math.max(4, networkG)))) {
          let specX = String.fromCharCode(103,95,54,49,95,112,97,116,104,109,116,117,0);
          let libcrashsdkC = 5.0;
         inactiveC = libreactperfloggerjni_ >= networkG;
         specX = `${parseInt(`${libcrashsdkC}`) + specX.length}`;
         libcrashsdkC += specX.length + 3;
         break;
      }
          let iconarrowleftu = 1.0;
          let pressuret: Array<any> = [String.fromCharCode(106,95,56,50,95,110,98,105,111,0), String.fromCharCode(108,101,114,116,95,99,95,57,54,0), String.fromCharCode(99,95,56,50,95,103,105,103,97,103,114,111,117,112,0)];
         libreactperfloggerjni_ *= 3 << (Math.min(Math.abs(parseInt(`${libreactperfloggerjni_}`)), 4));
         iconarrowleftu *= parseFloat(`${2}`);
         pressuret = [pressuret.length];
       let bottom6 = String.fromCharCode(108,95,51,49,95,99,111,110,115,117,109,97,98,108,101,0);
       let iconlogoutu = String.fromCharCode(101,110,97,98,108,101,95,54,95,49,57,0);
      private_qn4 = `${stationsA.length << (Math.min(Math.abs(1), 3))}`;
      break;
   }
      componentregistryG = `${rulesC.length}`;
      profilepicu >>= Math.min(Math.abs(profilepicu / 1), 2);
   if (componentregistryG.endsWith(`${submitt}`)) {
      componentregistryG += "3";
   }
       let yingg = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,98,95,54,56,0);
      let dropdown7 = yingg == String.fromCharCode(55,95,53,122,114,102,110,101,105,0);
      do {
         yingg = `${(yingg == String.fromCharCode(50,0) ? yingg.length : yingg.length)}`;
         if (dropdown7) {
            break;
         }
      } while ((!yingg.endsWith(`${yingg.length}`)) && dropdown7);
      if (yingg.length < 3) {
         yingg = `${yingg.length / (Math.max(yingg.length, 6))}`;
      }
         yingg += `${yingg.length}`;
      champion2 = `${(champion2 == String.fromCharCode(79,0) ? private_qn4.length : champion2.length)}`;
   for (let h = 0; h < 1; h++) {
      stationsA = "2";
   }
   if (4 <= (private_qn4.length << (Math.min(Math.abs(2), 3)))) {
       let castQ: Array<any> = [987, 685];
       let libjsinspectorr: Map<any, any> = new Map([[String.fromCharCode(118,95,56,56,95,100,101,108,97,116,101,100,0),450], [String.fromCharCode(114,101,108,97,116,105,118,101,95,119,95,55,56,0),104], [String.fromCharCode(116,95,49,49,95,119,97,116,99,104,101,114,115,0),87]]);
          let libffmpegkitj = String.fromCharCode(116,95,51,50,95,99,111,110,116,114,105,98,117,116,105,110,103,0);
          let refreshL = 4.0;
          let photoN = String.fromCharCode(118,105,103,110,101,116,116,105,110,103,95,56,95,53,51,0);
         libjsinspectorr.set(`${castQ.length}`, libjsinspectorr.size);
         libffmpegkitj += `${3 - libffmpegkitj.length}`;
         refreshL *= libffmpegkitj.length;
         photoN = `${parseInt(`${refreshL}`)}`;
         castQ.push(castQ.length - libjsinspectorr.size);
         libjsinspectorr = new Map([[`${libjsinspectorr.size}`, 3 - libjsinspectorr.size]]);
      if (castQ.length < 5) {
         libjsinspectorr = new Map([[`${libjsinspectorr.size}`, 3]]);
      }
         castQ.push(castQ.length % 1);
      if ((5 + castQ.length) < 1) {
         libjsinspectorr = new Map([[`${libjsinspectorr.size}`, libjsinspectorr.size << (Math.min(Math.abs(1), 5))]]);
      }
      profilepicu &= 1 % (Math.max(3, libjsinspectorr.size));
   }
   while (4 >= componentregistryG.length) {
      rulesC = `${((submitt ? 5 : 5))}`;
      break;
   }
   for (let k = 0; k < 2; k++) {
       let overlayk = String.fromCharCode(98,95,57,51,95,114,103,98,97,108,101,0);
       let ewardedt = String.fromCharCode(117,110,112,105,110,110,101,100,95,103,95,55,52,0);
       let philippinesU = String.fromCharCode(113,95,51,49,95,112,97,99,101,114,0);
      if (overlayk.length <= 4 && ewardedt == String.fromCharCode(87,0)) {
         ewardedt = `${ewardedt.length * overlayk.length}`;
      }
          let teamdetailsbgB: Map<any, any> = new Map([[String.fromCharCode(122,95,48,95,113,117,111,116,97,0),316], [String.fromCharCode(109,95,49,55,95,101,110,117,109,101,114,97,116,101,0),925], [String.fromCharCode(114,101,100,101,101,109,95,115,95,49,48,0),189]]);
          let securityj = 2.0;
         overlayk = `${teamdetailsbgB.size}`;
         teamdetailsbgB = new Map([[`${securityj}`, parseInt(`${securityj}`)]]);
      if (ewardedt.length <= 1 && overlayk != String.fromCharCode(55,0)) {
         overlayk = `${ewardedt.length}`;
      }
         overlayk = `${overlayk.length}`;
      for (let j = 0; j < 2; j++) {
         philippinesU += `${1 << (Math.min(2, ewardedt.length))}`;
      }
          let libreactnativejni5: Array<any> = [790, 555, 790];
          let backwardk = 4.0;
          let iconarrowrightorangeT: Array<any> = [243, 528];
         overlayk = `${iconarrowrightorangeT.length + libreactnativejni5.length}`;
         libreactnativejni5.push(parseInt(`${backwardk}`));
       let arrowselectdownu = String.fromCharCode(109,98,101,100,95,49,95,49,48,48,0);
       let iconrefreshl = String.fromCharCode(98,95,57,50,95,103,114,101,97,116,101,114,0);
      if (arrowselectdownu != overlayk) {
          let danger2: Array<any> = [347, 57, 839];
          let nativei = 4.0;
         overlayk += "2";
         danger2 = [parseInt(`${nativei}`) / 1];
         nativei *= parseFloat(`${parseInt(`${nativei}`)}`);
      }
         arrowselectdownu = `${arrowselectdownu.length}`;
      stationsA += `${2 << (Math.min(4, philippinesU.length))}`;
   }
   while (2 >= (profilepicu | champion2.length) && (2 | champion2.length) >= 1) {
      champion2 += `${champion2.length % (Math.max(3, 7))}`;
      break;
   }
      submitt = libturbomodulejsijniZ < 52.1;
   for (let t = 0; t < 2; t++) {
      stationsA += `${3 / (Math.max(7, parseInt(`${minimizeL}`)))}`;
   }
   if (2 == (1 | champion2.length) && (1 | champion2.length) == 5) {
      profilepicu *= 3 - private_qn4.length;
   }
   if (stationsA == String.fromCharCode(107,0)) {
       let iconorientationX = String.fromCharCode(108,95,55,54,95,102,105,102,97,0);
       let minivodu = 4.0;
       let imagenomoredataY = String.fromCharCode(107,95,57,56,95,102,114,101,113,0);
       let logout9: Array<any> = [111, 338];
       let icon9 = String.fromCharCode(113,95,53,49,95,113,117,97,114,116,122,0);
      if (icon9.endsWith(iconorientationX)) {
         iconorientationX = "1";
      }
          let videobufferloading2 = 3;
          let javaV = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,95,98,95,54,0);
          let typesg: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,114,97,99,116,95,107,95,50,54,0),true ], [String.fromCharCode(103,95,53,49,95,115,116,114,102,116,105,109,101,0),true ]]);
         icon9 += `${(String.fromCharCode(78,0) == iconorientationX ? javaV.length : iconorientationX.length)}`;
         videobufferloading2 *= videobufferloading2;
         javaV = `${videobufferloading2}`;
         typesg.set(`${videobufferloading2}`, 3);
          let notificationfilledW = 1;
          let background4 = String.fromCharCode(98,95,52,54,95,114,101,99,118,0);
          let whitevideolivea = String.fromCharCode(104,95,51,53,95,116,121,112,101,115,0);
         minivodu *= parseFloat(`${whitevideolivea.length}`);
         notificationfilledW /= Math.max(1, 2 - notificationfilledW);
         background4 += "3";
         whitevideolivea += `${notificationfilledW - 2}`;
         imagenomoredataY = `${icon9.length - 2}`;
         minivodu *= parseFloat(`${imagenomoredataY.length}`);
       let tempnodataU = String.fromCharCode(111,95,54,53,95,114,101,102,101,114,101,110,101,0);
       let countdownm = String.fromCharCode(98,95,56,49,95,100,114,97,105,110,0);
      let statisticsn = minivodu <= 7639252.0;
      do {
          let greytickP = 0.0;
          let textlayoutmanagerc = String.fromCharCode(117,110,108,105,110,107,95,109,95,53,54,0);
          let backiconmaskA = false;
          let notificationfillemptyn = false;
          let footballI = String.fromCharCode(116,114,110,115,95,49,95,49,57,0);
         minivodu /= Math.max(3, parseFloat(`${parseInt(`${minivodu}`) / 1}`));
         greytickP *= (3 / (Math.max((backiconmaskA ? 1 : 3), 8)));
         textlayoutmanagerc += `${footballI.length}`;
         backiconmaskA = !notificationfillemptyn;
         footballI = `${parseInt(`${greytickP}`)}`;
         if (statisticsn) {
            break;
         }
      } while (statisticsn && (3 > (parseInt(`${minivodu}`) + countdownm.length) && 5.80 > (minivodu + parseFloat(`${countdownm.length}`))));
         logout9 = [2 * iconorientationX.length];
      while (iconorientationX.startsWith(`${tempnodataU.length}`)) {
         iconorientationX += `${icon9.length / (Math.max(7, imagenomoredataY.length))}`;
         break;
      }
         tempnodataU = `${countdownm.length % 2}`;
      let canvasm = minivodu >= 5753122.0;
      do {
         minivodu += parseFloat(`${2 | logout9.length}`);
         if (canvasm) {
            break;
         }
      } while (canvasm && (countdownm.length == 4));
         imagenomoredataY = `${(countdownm == String.fromCharCode(101,0) ? tempnodataU.length : countdownm.length)}`;
      while (countdownm.length == iconorientationX.length) {
         countdownm = `${iconorientationX.length}`;
         break;
      }
         minivodu -= parseFloat(`${icon9.length ^ 2}`);
      for (let c = 0; c < 3; c++) {
          let sliderF: Map<any, any> = new Map([[String.fromCharCode(109,95,49,56,95,112,100,102,0),938], [String.fromCharCode(114,105,99,104,95,108,95,50,0),912]]);
          let chinasame7 = String.fromCharCode(108,95,49,48,95,105,115,115,112,97,99,101,0);
          let scorepopsoundW = String.fromCharCode(113,99,97,110,95,118,95,50,57,0);
          let bellreminderd = 3.0;
         countdownm += `${iconorientationX.length / 1}`;
         sliderF.set(chinasame7, parseInt(`${bellreminderd}`) % (Math.max(chinasame7.length, 3)));
         scorepopsoundW = `${2 ^ sliderF.size}`;
         bellreminderd -= parseInt(`${bellreminderd}`) % (Math.max(chinasame7.length, 10));
      }
      private_qn4 += `${icon9.length << (Math.min(private_qn4.length, 3))}`;
   }
       let iconcurrentmatchO = 0;
       let profileinactiveq = 2;
         iconcurrentmatchO ^= 1 >> (Math.min(4, Math.abs(iconcurrentmatchO)));
      for (let q = 0; q < 3; q++) {
         iconcurrentmatchO /= Math.max(3 - profileinactiveq, 1);
      }
         profileinactiveq -= iconcurrentmatchO - profileinactiveq;
         iconcurrentmatchO /= Math.max(1 & iconcurrentmatchO, 3);
      while (4 <= (profileinactiveq + 3)) {
         profileinactiveq &= iconcurrentmatchO;
         break;
      }
      if ((profileinactiveq + iconcurrentmatchO) < 5 || 5 < (iconcurrentmatchO + profileinactiveq)) {
          let manifestr = String.fromCharCode(106,95,56,54,95,105,112,99,0);
          let predictionactivey = true;
          let zhubo3: Array<any> = [909, 55, 253];
          let ying_ = String.fromCharCode(115,99,101,110,101,99,117,116,95,109,95,52,49,0);
          let redgoalh: Map<any, any> = new Map([[String.fromCharCode(99,108,97,105,109,115,95,112,95,50,55,0),String.fromCharCode(100,95,56,57,95,100,101,99,114,121,112,116,0)], [String.fromCharCode(117,110,109,97,114,115,104,97,108,95,112,95,49,53,0),String.fromCharCode(111,115,115,108,95,53,95,50,50,0)], [String.fromCharCode(109,95,53,48,95,115,121,110,99,104,114,111,110,105,115,101,100,0),String.fromCharCode(114,95,49,49,95,105,110,102,111,115,0)]]);
         iconcurrentmatchO *= 1 - profileinactiveq;
         manifestr += "1";
         predictionactivey = redgoalh.get(`${predictionactivey}`) != null;
         zhubo3.push(zhubo3.length);
         ying_ += `${ying_.length}`;
         redgoalh.set(`${predictionactivey}`, (String.fromCharCode(120,0) == manifestr ? (predictionactivey ? 1 : 3) : manifestr.length));
      }
      submitt = profileinactiveq == 57;
      champion2 = `${componentregistryG.length}`;
   if ((2.47 - minimizeL) < 3.68) {
      minimizeL *= profilepicu;
   }
      minimizeL *= (3 + (submitt ? 4 : 3));
 },
      onReadyForDisplay,
      showAds = false,
      onPressCountdown,
      vodID,
      sourceID,
      onDownloadVod,
      setShowAdOverlay
    }: yysIconarrowrightorangeStation,
    ref
  ) => {
    const screenState = useSelector<screenModel>('screenReducer');

    const videoPlayerRef = React.useRef<Video | null>();
    const { colors, textVariants } = useTheme();
    const [isFullScreen, setIsFullScreen] = useState(screenState.isPlayerFullScreen);
    const [isPaused, setIsPaused] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(initialStartTime);
    const [isBuffering, setIsBuffering] = useState(false);
    const [seekDirection, setSeekDirection] = useState<
      "dycreatorSuboutBoot" | "none" | "configChat"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<yysIconfeedback>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const isFocus = useIsFocused();

    const userState = useSelector<yysIconplaySuggestion>('userReducer');
    const bufferRef = useRef(true);
    const onBuffer = (bufferObj: any) => {
      if (!bufferObj.isBuffering) {
        accumulatedSkip.current = 0;
      }
      setIsBuffering(bufferObj.isBuffering);
      bufferRef.current = bufferObj.isBuffering;
    };

    const disableSeek = useRef(false)

    const adVideoRef = useRef<Video | null>();
    const adCountdownIntervalRef = useRef<NodeJS.Timeout | null>();
    const [showAd, setShowAd] = useState(false);
    const [adCountdownTime, setAdCountdownTime] = useState(AD_VIDEO_SECONDS);

    const isOffline = useAppSelector(({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer.isOffline)

    const { data: playerVodAds, isFetching: isFetchAds } = useQuery({
      queryKey: ["playerAdsVideo"],
      queryFn: () => yysInactive.getPlayerAdVideo(),
      enabled: !isOffline
    });

    useEffect(() => {
      if (vod_url === '') return;

      if (showAds &&
        playerVodAds &&
        (!yysIconstar.isVip(userState.user))
      ) {
        setShowAd(true);
        setAdCountdownTime(playerVodAds.minDuration);
        adVideoRef.current?.seek(0);

        
        yys_giftbutton_footballtrophy.playsAdsViewAnalytics({
          ads_slot_id: playerVodAds.slotId ?? undefined,
          ads_id: playerVodAds.id ?? undefined,
          ads_title: playerVodAds.eventTitle ?? '',
          ads_name: playerVodAds.name ?? undefined,
        });
        
      }
    }, [playerVodAds, vod_url]);

    useEffect(() => {
      if (adCountdownTime <= 0) {
        setShowAd(false);
        return;
      }

      adCountdownIntervalRef.current = setInterval(() => {
       let orangeclock9 = String.fromCharCode(107,95,54,57,95,104,97,110,100,108,101,0);
    let libhermest = String.fromCharCode(100,117,112,99,108,95,97,95,55,53,0);
    let audienceO = String.fromCharCode(97,95,50,50,95,97,116,116,97,99,104,0);
    let iconsettingk = String.fromCharCode(119,97,105,116,105,110,103,95,100,95,56,49,0);
    let playlistL: Map<any, any> = new Map([[String.fromCharCode(108,101,118,101,108,95,106,95,56,55,0),434], [String.fromCharCode(117,98,115,99,114,105,98,101,114,95,99,95,57,52,0),705]]);
    let transferA = false;
    let orientation8 = String.fromCharCode(113,95,49,48,95,115,116,114,110,108,101,110,0);
    let constantsF: Array<any> = [719, 130, 594];
    let action2 = 4;
   for (let u = 0; u < 1; u++) {
       let orangee = String.fromCharCode(108,95,54,57,95,101,112,101,108,0);
         orangee += `${orangee.length}`;
      for (let t = 0; t < 1; t++) {
          let lefth: Map<any, any> = new Map([[String.fromCharCode(105,95,51,52,95,106,111,105,110,105,110,103,0),277], [String.fromCharCode(115,95,56,49,95,112,97,110,111,114,97,109,97,0),687], [String.fromCharCode(117,100,105,111,95,103,95,51,49,0),408]]);
          let foreground4 = String.fromCharCode(98,105,116,114,97,116,101,115,95,56,95,52,53,0);
         orangee = "2";
         lefth = new Map([[`${lefth.size}`, lefth.size]]);
         foreground4 += `${foreground4.length}`;
      }
      let libyogat = orangee.length >= 9285082;
      do {
         orangee += `${1 + orangee.length}`;
         if (libyogat) {
            break;
         }
      } while ((1 <= orangee.length) && libyogat);
      iconsettingk += `${action2 + 1}`;
   }
      playlistL.set(orangeclock9, 2 ^ playlistL.size);
       let gesturesG: Map<any, any> = new Map([[String.fromCharCode(116,95,49,57,95,115,101,97,114,99,104,0),String.fromCharCode(116,114,101,101,99,111,100,101,114,95,119,95,49,57,0)], [String.fromCharCode(103,105,103,97,98,121,116,101,95,106,95,49,57,0),String.fromCharCode(119,105,110,116,104,114,101,97,100,95,49,95,56,51,0)]]);
      while (Array.from(gesturesG.values()).includes(gesturesG.size)) {
          let iconsettingx = 5;
         gesturesG.set(`${iconsettingx}`, iconsettingx);
         break;
      }
      if ((gesturesG.size - gesturesG.size) <= 1 || (gesturesG.size - 1) <= 2) {
         gesturesG.set(`${gesturesG.size}`, gesturesG.size / 3);
      }
         gesturesG.set(`${gesturesG.size}`, gesturesG.size % 1);
      action2 <<= Math.min(1, Math.abs(constantsF.length % (Math.max(3, 2))));
      orientation8 = `${2 | playlistL.size}`;
   for (let h = 0; h < 2; h++) {
       let fullscreenminD = 5.0;
         fullscreenminD += parseFloat(`${1 ^ parseInt(`${fullscreenminD}`)}`);
      if (fullscreenminD >= 5.82) {
         fullscreenminD *= parseFloat(`${parseInt(`${fullscreenminD}`)}`);
      }
      let eighteenN = fullscreenminD >= 6560003.0;
      do {
         fullscreenminD *= parseFloat(`${parseInt(`${fullscreenminD}`)}`);
         if (eighteenN) {
            break;
         }
      } while (((5.81 - fullscreenminD) <= 5.27) && eighteenN);
      orientation8 += `${(String.fromCharCode(107,0) == audienceO ? orangeclock9.length : audienceO.length)}`;
   }
   if (!transferA) {
      transferA = audienceO.endsWith(`${action2}`);
   }
       let iconpipshrinkp = 3.0;
          let libcxxcomponentsJ = true;
          let libjsijniprofilerD = true;
          let t_viewv = String.fromCharCode(119,95,49,53,95,115,110,97,112,115,104,111,116,115,0);
         iconpipshrinkp += (2 >> (Math.min(Math.abs((libjsijniprofilerD ? 3 : 1)), 3)));
         libcxxcomponentsJ = 40 > t_viewv.length;
         libjsijniprofilerD = (t_viewv.length + t_viewv.length) == 20;
      for (let d = 0; d < 1; d++) {
         iconpipshrinkp *= parseInt(`${iconpipshrinkp}`) >> (Math.min(Math.abs(parseInt(`${iconpipshrinkp}`)), 5));
      }
          let questicon_ = String.fromCharCode(106,95,52,95,119,114,105,116,101,0);
         iconpipshrinkp += 1 >> (Math.min(4, questicon_.length));
      iconsettingk += "1";
   while (constantsF.length > 4) {
      orientation8 += `${((transferA ? 1 : 5) - playlistL.size)}`;
      break;
   }
      libhermest += "3";
      libhermest += `${constantsF.length}`;
       let leakcheckerT = String.fromCharCode(121,95,53,48,95,98,101,103,105,110,110,105,110,103,0);
       let elementsg: Array<any> = [662, 31];
       let videojsy = 0;
      for (let i = 0; i < 1; i++) {
          let applicationH = String.fromCharCode(99,104,97,114,103,101,95,56,95,54,50,0);
          let traminin: Array<any> = [String.fromCharCode(105,115,110,97,110,95,111,95,57,54,0), String.fromCharCode(116,101,109,112,102,105,108,101,95,103,95,52,55,0), String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,95,106,95,56,49,0)];
          let time_av: Map<any, any> = new Map([[String.fromCharCode(109,95,51,53,95,102,108,111,111,114,115,0),646], [String.fromCharCode(103,95,55,50,95,116,101,115,116,105,109,103,97,114,105,0),617], [String.fromCharCode(108,95,52,49,95,116,114,117,101,0),753]]);
          let unimplementedviewB = String.fromCharCode(109,101,109,95,114,95,53,51,0);
          let libbufferz = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,99,95,52,52,0);
         videojsy *= 3;
         applicationH += `${time_av.size | unimplementedviewB.length}`;
         traminin = [applicationH.length / (Math.max(2, libbufferz.length))];
         time_av.set(applicationH, 1 | traminin.length);
         unimplementedviewB = `${traminin.length >> (Math.min(applicationH.length, 3))}`;
         libbufferz += `${(libbufferz == String.fromCharCode(120,0) ? applicationH.length : libbufferz.length)}`;
      }
          let largesoundf = String.fromCharCode(99,95,51,54,95,98,108,111,99,107,100,99,0);
         elementsg = [largesoundf.length];
       let lightu = 5.0;
         videojsy <<= Math.min(Math.abs(parseInt(`${lightu}`)), 4);
      if (leakcheckerT.length == 1) {
         leakcheckerT += `${elementsg.length}`;
      }
          let libnmsy = 0.0;
         videojsy %= Math.max(4, elementsg.length);
         libnmsy -= parseFloat(`${3 + parseInt(`${libnmsy}`)}`);
          let iconqqS = String.fromCharCode(112,114,101,99,104,101,99,107,111,117,116,95,50,95,49,0);
          let serviceB = 1.0;
         videojsy >>= Math.min(3, Math.abs((iconqqS == String.fromCharCode(73,0) ? videojsy : iconqqS.length)));
         serviceB -= 2 >> (Math.min(Math.abs(parseInt(`${serviceB}`)), 1));
       let referrery = 3.0;
       let downH = 2.0;
      let tooltips9 = elementsg.length <= 9496340;
      do {
         elementsg = [(String.fromCharCode(54,0) == leakcheckerT ? leakcheckerT.length : videojsy)];
         if (tooltips9) {
            break;
         }
      } while (tooltips9 && ((elementsg.length * parseInt(`${referrery}`)) > 5 && (4.93 * referrery) > 1.27));
      orangeclock9 += "2";
      playlistL = new Map([[`${playlistL.size}`, (playlistL.size * (transferA ? 3 : 5))]]);
   for (let o = 0; o < 2; o++) {
       let signinup2: Array<any> = [390, 274];
       let infow: Map<any, any> = new Map([[String.fromCharCode(119,105,110,101,114,114,110,111,95,115,95,51,52,0),String.fromCharCode(119,95,55,95,119,100,101,99,0)], [String.fromCharCode(104,101,120,98,121,116,101,95,104,95,52,54,0),String.fromCharCode(100,98,115,116,97,116,95,104,95,52,0)], [String.fromCharCode(113,95,54,55,95,111,110,102,105,103,117,114,97,116,105,111,110,0),String.fromCharCode(112,95,53,52,95,103,101,116,110,109,115,101,100,101,99,0)]]);
       let transferF = 0.0;
       let sina2: Array<any> = [String.fromCharCode(118,95,57,54,95,114,101,97,100,0), String.fromCharCode(121,95,50,53,0), String.fromCharCode(117,110,109,97,112,102,105,108,101,95,120,95,56,52,0)];
          let iconscheduleK = 2.0;
          let turnN = String.fromCharCode(117,110,105,111,110,95,108,95,50,0);
          let questM = 3;
         signinup2.push(parseInt(`${transferF}`) * 2);
         iconscheduleK -= parseFloat(`${turnN.length}`);
         turnN = "2";
         questM &= (String.fromCharCode(78,0) == turnN ? turnN.length : questM);
          let base3 = String.fromCharCode(101,95,49,56,95,109,117,116,117,97,108,0);
         infow.set(`${transferF}`, parseInt(`${transferF}`));
         base3 = `${base3.length}`;
      let largebrightnessG = transferF <= 7346435.0;
      do {
         transferF += parseFloat(`${sina2.length}`);
         if (largebrightnessG) {
            break;
         }
      } while (largebrightnessG && (4 == (3 % (Math.max(5, sina2.length))) && (transferF / (Math.max(1, parseFloat(`${sina2.length}`)))) == 1.73));
      if (4 >= signinup2.length) {
         sina2.push(3 & parseInt(`${transferF}`));
      }
         transferF *= parseFloat(`${infow.size - 3}`);
         infow = new Map([[`${infow.size}`, 1]]);
          let backgroundK: Array<any> = [889, 494, 738];
          let inewarchdefaults5 = String.fromCharCode(104,95,49,55,95,110,111,116,105,102,105,101,115,0);
         transferF *= parseFloat(`${backgroundK.length}`);
         backgroundK.push(inewarchdefaults5.length << (Math.min(Math.abs(3), 5)));
         inewarchdefaults5 = `${inewarchdefaults5.length}`;
         signinup2 = [3 << (Math.min(4, signinup2.length))];
      while (2.19 <= (1.50 / (Math.max(8, transferF)))) {
         transferF *= parseFloat(`${parseInt(`${transferF}`) % (Math.max(1, 1))}`);
         break;
      }
          let mapbufferT: Map<any, any> = new Map([[String.fromCharCode(119,109,118,100,97,116,97,95,109,95,54,49,0),true ], [String.fromCharCode(99,101,108,102,95,55,95,49,57,0),false ]]);
          let notificationfillemptyS = String.fromCharCode(97,95,52,56,95,100,101,116,101,99,116,105,110,103,0);
         signinup2 = [notificationfillemptyS.length];
         mapbufferT = new Map([[`${mapbufferT.size}`, 2 / (Math.max(8, mapbufferT.size))]]);
         notificationfillemptyS += `${3 * mapbufferT.size}`;
      if (!sina2.includes(transferF)) {
          let dicelogoA: Array<any> = [String.fromCharCode(100,95,50,51,95,99,111,108,115,101,116,0), String.fromCharCode(118,112,108,97,121,101,114,95,107,95,51,52,0), String.fromCharCode(110,95,52,48,95,112,105,99,116,121,112,101,0)];
          let reactQ: Array<any> = [982, 911, 116];
          let mbridges = 4;
          let iconorientationc = String.fromCharCode(112,105,101,99,101,119,105,115,101,95,103,95,49,51,0);
         transferF *= parseFloat(`${parseInt(`${transferF}`) - sina2.length}`);
         dicelogoA = [(String.fromCharCode(51,0) == iconorientationc ? iconorientationc.length : mbridges)];
         reactQ = [iconorientationc.length];
         mbridges -= mbridges;
      }
      let modelsB = transferF <= 9162461.0;
      do {
         transferF -= parseFloat(`${infow.size}`);
         if (modelsB) {
            break;
         }
      } while (modelsB && (!Array.from(infow.values()).includes(transferF)));
      constantsF = [libhermest.length];
   }
      orangeclock9 += `${action2}`;
      orangeclock9 += "1";
      audienceO += `${3 >> (Math.min(1, iconsettingk.length))}`;
      iconsettingk += `${3 & orangeclock9.length}`;
   while (1 < (playlistL.size ^ 4) && (4 ^ orangeclock9.length) < 3) {
      orangeclock9 += `${action2 % 1}`;
      break;
   }
       let playC = String.fromCharCode(112,95,50,53,95,98,101,97,116,0);
      for (let l = 0; l < 1; l++) {
          let logouserg = String.fromCharCode(112,114,101,102,105,120,101,115,95,104,95,55,55,0);
         playC += `${playC.length >> (Math.min(Math.abs(2), 4))}`;
         logouserg = `${logouserg.length / (Math.max(1, 10))}`;
      }
       let modelM = 2;
       let danger4 = 4;
      let fastforwardr = danger4 <= 9203526;
      do {
          let chinaO: Array<any> = [475, 119];
          let basketballplayerplaceholderH: Map<any, any> = new Map([[String.fromCharCode(107,101,121,108,101,110,95,98,95,53,56,0),String.fromCharCode(112,114,97,103,109,97,95,105,95,52,53,0)], [String.fromCharCode(106,95,52,57,95,98,114,117,116,101,102,111,114,99,101,0),String.fromCharCode(108,95,50,51,95,99,117,115,116,111,109,105,122,101,0)], [String.fromCharCode(109,95,54,50,95,103,114,97,121,0),String.fromCharCode(97,100,108,101,114,95,97,95,52,49,0)]]);
          let shirt_: Array<any> = [String.fromCharCode(118,95,57,50,95,100,113,117,111,116,101,0), String.fromCharCode(115,108,97,118,101,95,113,95,51,49,0), String.fromCharCode(122,95,49,51,95,109,118,115,97,100,0)];
         danger4 |= playC.length;
         chinaO.push(basketballplayerplaceholderH.size);
         basketballplayerplaceholderH = new Map([[`${basketballplayerplaceholderH.size}`, basketballplayerplaceholderH.size & 2]]);
         shirt_ = [2];
         if (fastforwardr) {
            break;
         }
      } while ((3 < (modelM >> (Math.min(Math.abs(5), 1))) || 2 < (5 >> (Math.min(1, Math.abs(danger4))))) && fastforwardr);
      audienceO = `${playlistL.size}`;
   for (let i = 0; i < 1; i++) {
      audienceO += `${orientation8.length}`;
   }
   while (action2 <= 5) {
       let statsV = false;
       let largesoundd = false;
       let const_b7a: Map<any, any> = new Map([[String.fromCharCode(103,95,56,55,95,122,111,111,109,0),761], [String.fromCharCode(97,108,116,105,118,101,99,95,52,95,50,52,0),308], [String.fromCharCode(100,121,110,108,111,97,100,95,113,95,56,51,0),535]]);
       let linkD = String.fromCharCode(112,114,101,118,95,101,95,52,55,0);
       let promotionh = String.fromCharCode(105,95,55,53,95,98,105,103,105,110,116,101,103,101,114,0);
          let libcxxcomponents2 = String.fromCharCode(108,95,56,53,95,112,97,99,107,97,103,101,115,0);
          let iconqqV: Array<any> = [String.fromCharCode(121,95,55,95,101,120,116,114,97,112,111,108,97,116,101,0), String.fromCharCode(114,95,49,48,48,95,109,100,110,115,0), String.fromCharCode(109,105,120,101,100,95,118,95,53,0)];
         promotionh += `${libcxxcomponents2.length % 1}`;
         libcxxcomponents2 = `${3 % (Math.max(5, iconqqV.length))}`;
         iconqqV.push(iconqqV.length);
         largesoundd = String.fromCharCode(107,0) == linkD;
      for (let f = 0; f < 2; f++) {
         linkD += "1";
      }
      if (!largesoundd && (3 >> (Math.min(2, Math.abs(const_b7a.size)))) == 4) {
         const_b7a = new Map([[linkD, ((statsV ? 3 : 2) | 1)]]);
      }
         linkD += `${const_b7a.size ^ 3}`;
      while (const_b7a.size >= 1) {
         const_b7a.set(linkD, linkD.length % 3);
         break;
      }
         linkD = "1";
      while (5 == (linkD.length + const_b7a.size) && (5 + linkD.length) == 1) {
         linkD += `${const_b7a.size + 3}`;
         break;
      }
      iconsettingk += `${orangeclock9.length}`;
      break;
   }

        setAdCountdownTime(prev => prev - 1);
      }, 1000)

      return () => {
        if (adCountdownIntervalRef.current) {
          clearInterval(adCountdownIntervalRef.current);
        }
      }
    }, [adCountdownTime]);

    useImperativeHandle(ref, () => ({
      setPause: (pauseVideo: boolean) => {
        setIsPaused(pauseVideo);
        videoPlayerRef.current?.setNativeProps({ paused: pauseVideo });
        adVideoRef.current?.setNativeProps({ paused: pauseVideo });

        if (pauseVideo === true && adCountdownIntervalRef.current) {
          clearInterval(adCountdownIntervalRef.current);
        } else if (pauseVideo === false && showAd) {
          adCountdownIntervalRef.current = setInterval(() => {
       let sans9: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,105,95,54,55,0),String.fromCharCode(101,103,97,99,121,95,103,95,55,51,0)], [String.fromCharCode(111,95,56,50,95,109,97,115,116,101,114,105,110,103,0),String.fromCharCode(102,95,55,53,95,99,97,108,99,119,0)], [String.fromCharCode(112,114,105,109,97,114,105,101,115,95,122,95,52,57,0),String.fromCharCode(115,117,98,112,97,114,116,95,49,95,49,48,48,0)]]);
    let iconarrowrightR = 4.0;
    let rounde = 4;
    let neonJ = 5;
    let iconclose4: Array<any> = [627, 74];
    let saved = String.fromCharCode(104,111,116,105,122,111,110,116,108,95,57,95,50,51,0);
    let greyarrowupQ = String.fromCharCode(113,95,56,53,95,105,110,116,101,114,97,99,116,105,111,110,115,0);
    let leaguem = 5.0;
    let string8 = String.fromCharCode(97,116,116,114,105,98,115,95,98,95,53,56,0);
    let lineB = 3.0;
    let tail4 = 0.0;
    let iconbackwhiteG: Array<any> = [String.fromCharCode(114,95,50,55,95,107,97,110,110,97,0), String.fromCharCode(101,95,56,49,95,112,114,111,100,117,99,116,115,0), String.fromCharCode(105,100,119,116,95,120,95,50,51,0)];
      rounde |= neonJ;
   if ((rounde - 3) <= 3 && 1 <= (3 ^ rounde)) {
       let gmailC = 4.0;
         gmailC /= Math.max(2, 1);
      let libswresampleK = 5374444.0 >= gmailC;
      do {
          let adultF: Map<any, any> = new Map([[String.fromCharCode(108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,95,55,95,48,0),86], [String.fromCharCode(100,95,57,56,95,99,111,101,102,102,115,0),150]]);
          let imagewatchlivek: Map<any, any> = new Map([[String.fromCharCode(118,112,120,115,116,97,116,115,95,111,95,57,49,0),460], [String.fromCharCode(99,95,54,95,109,98,117,102,115,0),81]]);
          let malaysiaB = String.fromCharCode(111,95,51,51,95,120,99,98,103,114,97,98,0);
         gmailC /= Math.max(imagewatchlivek.size >> (Math.min(Math.abs(1), 4)), 2);
         adultF = new Map([[`${adultF.size}`, 1 << (Math.min(2, Math.abs(adultF.size)))]]);
         imagewatchlivek = new Map([[`${adultF.size}`, malaysiaB.length]]);
         malaysiaB = `${adultF.size}`;
         if (libswresampleK) {
            break;
         }
      } while ((4.49 > (gmailC + gmailC) && 5.46 > (4.49 * gmailC)) && libswresampleK);
      for (let q = 0; q < 1; q++) {
          let informationG = 0.0;
          let reactnativeratingso = String.fromCharCode(121,95,49,55,95,100,101,110,111,105,115,101,0);
         gmailC -= 2 ^ parseInt(`${informationG}`);
         informationG -= parseFloat(`${reactnativeratingso.length}`);
         reactnativeratingso += `${reactnativeratingso.length | reactnativeratingso.length}`;
      }
      iconarrowrightR -= saved.length | 1;
   }
      sans9 = new Map([[greyarrowupQ, (String.fromCharCode(98,0) == greyarrowupQ ? greyarrowupQ.length : rounde)]]);
   if ((2 * sans9.size) < 4) {
      sans9.set(greyarrowupQ, iconclose4.length + greyarrowupQ.length);
   }
   if (4 >= neonJ) {
       let imagewatchliveD = false;
       let gesturesC = 4.0;
       let signinup_ = String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,95,106,95,54,49,0);
       let typingloadingW = String.fromCharCode(102,105,110,105,115,104,101,100,95,122,95,57,0);
       let videojsC = String.fromCharCode(108,95,52,49,95,99,111,110,116,97,99,116,115,0);
      for (let t = 0; t < 3; t++) {
          let bodanK = 3;
          let carouselm = 5.0;
          let libfile1 = 1.0;
          let graphr = String.fromCharCode(98,111,111,107,109,97,114,107,115,95,103,95,52,55,0);
          let shielddoneY = String.fromCharCode(119,95,52,49,95,97,121,117,118,108,101,0);
         imagewatchliveD = graphr == String.fromCharCode(89,0) || 41 >= typingloadingW.length;
         bodanK &= 2 / (Math.max(4, parseInt(`${libfile1}`)));
         carouselm *= parseInt(`${libfile1}`) / (Math.max(shielddoneY.length, 1));
         graphr += `${bodanK}`;
         shielddoneY = `${bodanK - 2}`;
      }
         signinup_ += `${(signinup_ == String.fromCharCode(101,0) ? parseInt(`${gesturesC}`) : signinup_.length)}`;
      let subtext2 = gesturesC <= 5160811.0;
      do {
          let userb = 3.0;
          let positionfieldd = String.fromCharCode(102,95,57,50,95,112,97,100,0);
          let skipf = 0;
          let path9 = String.fromCharCode(100,101,99,111,100,101,109,118,95,100,95,52,54,0);
          let turnL: Array<any> = [String.fromCharCode(109,105,100,100,108,101,95,113,95,56,53,0), String.fromCharCode(110,95,57,95,99,111,108,111,114,115,0)];
         gesturesC -= (parseFloat(`${String.fromCharCode(69,0) == videojsC ? videojsC.length : (imagewatchliveD ? 1 : 2)}`));
         userb -= positionfieldd.length;
         positionfieldd += `${skipf}`;
         skipf -= positionfieldd.length;
         path9 += `${positionfieldd.length}`;
         turnL = [1 << (Math.min(2, positionfieldd.length))];
         if (subtext2) {
            break;
         }
      } while (subtext2 && ((4 * parseInt(`${gesturesC}`)) <= 5 && (gesturesC * 4.94) <= 2.7));
       let eyeopenD = 1.0;
      let k_positionk = imagewatchliveD ? !imagewatchliveD : imagewatchliveD;
      do {
         imagewatchliveD = imagewatchliveD && eyeopenD <= 30.20;
         if (k_positionk) {
            break;
         }
      } while ((!videojsC.includes(`${imagewatchliveD}`)) && k_positionk);
         gesturesC += parseFloat(`${typingloadingW.length >> (Math.min(4, Math.abs(parseInt(`${gesturesC}`))))}`);
          let indicatorE = 0;
          let selectionX: Array<any> = [String.fromCharCode(102,95,56,51,95,121,97,114,110,0), String.fromCharCode(110,95,57,53,95,110,97,118,0), String.fromCharCode(100,105,115,99,111,114,100,95,97,95,52,54,0)];
          let awayiconf = String.fromCharCode(111,95,56,53,95,112,104,111,116,111,0);
         imagewatchliveD = indicatorE <= parseInt(`${gesturesC}`);
         indicatorE *= 3;
         selectionX = [selectionX.length ^ awayiconf.length];
         awayiconf = `${2 + selectionX.length}`;
       let libjsijniprofilerw = String.fromCharCode(111,116,105,102,105,99,97,116,105,111,110,95,113,95,54,55,0);
       let matchactiveU = String.fromCharCode(110,95,55,48,95,114,116,112,102,98,0);
         matchactiveU += `${videojsC.length & libjsijniprofilerw.length}`;
       let mbnativeadvancedc = false;
          let iconstar0 = true;
          let largeV = 4.0;
         matchactiveU = `${(3 & (mbnativeadvancedc ? 4 : 2))}`;
         iconstar0 = largeV > largeV;
         videojsC += `${videojsC.length | parseInt(`${gesturesC}`)}`;
      let icondefaultthumbnailQ = String.fromCharCode(56,97,106,52,118,0) == matchactiveU;
      do {
         matchactiveU = `${(String.fromCharCode(78,0) == libjsijniprofilerw ? parseInt(`${eyeopenD}`) : libjsijniprofilerw.length)}`;
         if (icondefaultthumbnailQ) {
            break;
         }
      } while (icondefaultthumbnailQ && (3 <= matchactiveU.length));
         videojsC = `${1 % (Math.max(10, signinup_.length))}`;
          let friendsp = String.fromCharCode(103,95,49,57,95,109,111,100,105,102,105,101,114,0);
          let pause8 = 0;
          let libloggerX = 5.0;
         matchactiveU += `${parseInt(`${libloggerX}`) % (Math.max(parseInt(`${gesturesC}`), 9))}`;
         friendsp = `${(friendsp == String.fromCharCode(65,0) ? friendsp.length : pause8)}`;
         pause8 |= 1 ^ pause8;
         libloggerX /= Math.max(4, parseFloat(`${1 >> (Math.min(4, friendsp.length))}`));
      neonJ *= saved.length | sans9.size;
   }
   for (let s = 0; s < 3; s++) {
       let privacyr = String.fromCharCode(97,95,50,48,95,104,97,110,100,108,101,0);
         privacyr += `${privacyr.length}`;
      let mintegrals = privacyr == String.fromCharCode(103,102,48,122,104,0);
      do {
         privacyr = `${privacyr.length}`;
         if (mintegrals) {
            break;
         }
      } while (mintegrals && (privacyr == privacyr));
         privacyr = `${privacyr.length / (Math.max(10, privacyr.length))}`;
      iconclose4.push(iconclose4.length ^ 3);
   }
       let strings5 = 3.0;
       let switch_mC = 5;
      if (switch_mC < 1) {
          let closex: Array<any> = [899, 131, 983];
          let materialL = 5.0;
          let complete3 = 5;
         strings5 += 3;
         closex.push(closex.length);
         materialL *= parseFloat(`${1 + complete3}`);
         complete3 %= Math.max(parseInt(`${materialL}`) - complete3, 2);
      }
          let ying7 = 5.0;
         strings5 /= Math.max(1, parseInt(`${strings5}`));
         ying7 -= parseInt(`${ying7}`) & 1;
         switch_mC ^= 2 / (Math.max(parseInt(`${strings5}`), 6));
         switch_mC <<= Math.min(Math.abs(parseInt(`${strings5}`) ^ switch_mC), 5);
         strings5 -= switch_mC;
         switch_mC >>= Math.min(Math.abs(3), 2);
      saved = `${parseInt(`${leaguem}`) * 3}`;
   while ((4 ^ greyarrowupQ.length) == 2) {
       let viewerT: Array<any> = [130, 850, 805];
          let update_qv2 = 0.0;
         viewerT = [viewerT.length | 2];
         update_qv2 *= parseFloat(`${parseInt(`${update_qv2}`)}`);
          let catalogd: Array<any> = [108, 612, 355];
         viewerT.push(3 + viewerT.length);
         catalogd = [catalogd.length % (Math.max(3, 9))];
         viewerT.push(viewerT.length);
      rounde -= 3 << (Math.min(1, viewerT.length));
      break;
   }
       let penaltyY: Map<any, any> = new Map([[String.fromCharCode(100,95,57,53,95,99,97,115,116,115,0),false ], [String.fromCharCode(119,97,115,116,101,100,95,106,95,50,53,0),false ], [String.fromCharCode(117,95,55,52,95,115,112,108,105,99,101,0),true ]]);
          let iconlogoutK: Map<any, any> = new Map([[String.fromCharCode(112,105,101,95,49,95,54,50,0),true ], [String.fromCharCode(113,95,57,57,95,116,104,114,101,115,104,111,108,100,105,110,103,0),false ], [String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,108,95,52,57,0),false ]]);
          let nnewinterstitialb = 1;
         penaltyY = new Map([[`${iconlogoutK.size}`, iconlogoutK.size]]);
         nnewinterstitialb /= Math.max(2, nnewinterstitialb);
          let combinev = String.fromCharCode(104,95,52,52,95,99,111,110,102,105,103,117,114,101,0);
          let detailsR = 5;
          let launcherW = 5.0;
         penaltyY.set(`${combinev}`, 1 << (Math.min(2, combinev.length)));
         detailsR += 1 & detailsR;
         launcherW *= parseInt(`${launcherW}`);
      for (let p = 0; p < 2; p++) {
         penaltyY = new Map([[`${penaltyY.size}`, penaltyY.size]]);
      }
      string8 += `${greyarrowupQ.length}`;
      saved = `${saved.length & 1}`;
   if (3 >= (greyarrowupQ.length % 1) && 2 >= (iconclose4.length % 1)) {
       let mounting8: Map<any, any> = new Map([[String.fromCharCode(112,97,100,95,56,95,51,48,0),158], [String.fromCharCode(117,95,55,55,95,102,105,110,103,101,114,115,0),325]]);
       let dicelogoF = String.fromCharCode(115,107,105,112,95,56,95,49,55,0);
          let yellowvideoliveo = 4.0;
         mounting8.set(`${yellowvideoliveo}`, parseInt(`${yellowvideoliveo}`) ^ dicelogoF.length);
         dicelogoF = `${(dicelogoF == String.fromCharCode(74,0) ? dicelogoF.length : mounting8.size)}`;
       let binddatasn = 1;
      if (4 < dicelogoF.length) {
         dicelogoF += `${mounting8.size % 1}`;
      }
          let owngoalw = String.fromCharCode(116,95,57,52,95,98,97,116,99,104,105,110,103,0);
          let episode4 = String.fromCharCode(97,115,121,109,95,122,95,54,57,0);
          let foregroundM: Map<any, any> = new Map([[String.fromCharCode(97,99,101,115,115,111,114,121,95,105,95,57,57,0),283], [String.fromCharCode(107,95,56,50,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0),9], [String.fromCharCode(97,95,56,50,95,104,100,114,115,0),635]]);
         dicelogoF += `${(String.fromCharCode(76,0) == dicelogoF ? dicelogoF.length : mounting8.size)}`;
         owngoalw = `${owngoalw.length & 2}`;
         episode4 = `${(episode4 == String.fromCharCode(83,0) ? episode4.length : foregroundM.size)}`;
         foregroundM.set(owngoalw, 1);
      let tailm = dicelogoF.length <= 6531975;
      do {
          let coreq = true;
          let linkZ = 1.0;
          let applicationE = String.fromCharCode(109,95,52,55,95,101,120,112,114,101,115,115,105,111,110,0);
         dicelogoF += `${dicelogoF.length - 3}`;
         coreq = applicationE.startsWith(`${coreq}`);
         linkZ /= Math.max(5, 1);
         applicationE += `${3 - parseInt(`${linkZ}`)}`;
         if (tailm) {
            break;
         }
      } while (tailm && (!dicelogoF.startsWith(`${mounting8.size}`)));
      iconclose4 = [mounting8.size | 1];
   }
       let othermatchdetailbgv = String.fromCharCode(114,103,98,97,108,101,95,113,95,55,56,0);
       let defaultbasketballbgr = String.fromCharCode(122,95,50,54,95,100,97,112,112,0);
         defaultbasketballbgr = `${(othermatchdetailbgv == String.fromCharCode(101,0) ? othermatchdetailbgv.length : defaultbasketballbgr.length)}`;
       let schedule4 = String.fromCharCode(113,95,53,51,95,97,109,111,117,110,116,0);
       let basketballW = String.fromCharCode(115,101,101,107,97,98,108,101,95,50,95,56,48,0);
      for (let w = 0; w < 1; w++) {
         basketballW += `${schedule4.length}`;
      }
          let foregroundL: Array<any> = [708, 160];
          let flipperA = false;
         defaultbasketballbgr = `${basketballW.length ^ othermatchdetailbgv.length}`;
         foregroundL = [2];
         flipperA = foregroundL.length == 31;
      for (let q = 0; q < 1; q++) {
          let footballfiledlayoutN = true;
          let playn: Array<any> = [String.fromCharCode(98,95,51,52,95,97,107,105,100,0), String.fromCharCode(113,95,54,52,95,99,104,114,111,109,97,116,105,99,0)];
          let reducerF: Array<any> = [String.fromCharCode(116,95,55,56,95,119,109,118,100,115,112,0), String.fromCharCode(108,111,115,115,108,101,115,115,95,116,95,54,57,0), String.fromCharCode(116,99,112,95,109,95,53,50,0)];
         defaultbasketballbgr = `${othermatchdetailbgv.length}`;
         footballfiledlayoutN = playn.includes(footballfiledlayoutN);
         playn.push(3 | playn.length);
         reducerF.push(1);
      }
         basketballW = `${defaultbasketballbgr.length}`;
      sans9 = new Map([[`${leaguem}`, parseInt(`${leaguem}`)]]);
       let fullscreenminl = 5.0;
       let lnewarchdefaultsh = String.fromCharCode(103,95,49,49,95,118,97,108,105,100,97,116,105,111,110,115,0);
       let fast9 = String.fromCharCode(115,95,55,50,95,114,111,108,108,98,97,99,107,0);
      if ((1 ^ lnewarchdefaultsh.length) >= 2 || (2.87 + fullscreenminl) >= 3.66) {
         fullscreenminl /= Math.max(3, 2 << (Math.min(5, Math.abs(parseInt(`${fullscreenminl}`)))));
      }
         fullscreenminl *= (fast9 == String.fromCharCode(101,0) ? fast9.length : lnewarchdefaultsh.length);
         fast9 = `${fast9.length | lnewarchdefaultsh.length}`;
         fullscreenminl *= 3 + lnewarchdefaultsh.length;
         fullscreenminl += lnewarchdefaultsh.length;
      if (4 <= lnewarchdefaultsh.length) {
          let zhubou = 3;
          let h_hashH: Array<any> = [795, 301];
         fullscreenminl /= Math.max(lnewarchdefaultsh.length, 1);
         zhubou ^= h_hashH.length;
         h_hashH.push(h_hashH.length);
      }
       let sharemodale: Array<any> = [89, 783];
      let cornershoot0 = lnewarchdefaultsh == String.fromCharCode(100,122,99,106,57,119,51,116,0);
      do {
         lnewarchdefaultsh = `${fast9.length % (Math.max(9, lnewarchdefaultsh.length))}`;
         if (cornershoot0) {
            break;
         }
      } while (cornershoot0 && ((sharemodale.length * lnewarchdefaultsh.length) == 2 || (lnewarchdefaultsh.length * sharemodale.length) == 2));
         fast9 = `${2 + fast9.length}`;
      sans9 = new Map([[`${neonJ}`, greyarrowupQ.length / 3]]);
      sans9.set(saved, saved.length | rounde);
      string8 = "2";
       let whitel = 2;
       let dragclosec = true;
       let mbbannerh = 4;
          let libfollyQ = String.fromCharCode(114,101,116,105,110,97,95,101,95,56,0);
         dragclosec = (92 <= ((dragclosec ? 92 : libfollyQ.length) << (Math.min(libfollyQ.length, 4))));
         mbbannerh -= mbbannerh / 1;
          let dragt = false;
         dragclosec = dragclosec || mbbannerh < 49;
         dragt = !dragt;
         mbbannerh -= whitel + 2;
       let bingR: Map<any, any> = new Map([[String.fromCharCode(122,95,55,55,95,108,111,103,100,98,0),false ], [String.fromCharCode(112,105,99,116,95,121,95,50,49,0),true ], [String.fromCharCode(99,95,55,57,0),true ]]);
       let register_9jf: Map<any, any> = new Map([[String.fromCharCode(99,95,53,48,95,115,99,114,101,97,109,0),String.fromCharCode(97,100,100,95,107,95,55,52,0)], [String.fromCharCode(98,95,57,50,95,105,110,112,99,98,0),String.fromCharCode(97,100,100,105,116,105,118,101,95,100,95,49,53,0)], [String.fromCharCode(117,95,51,53,95,108,105,115,116,110,101,114,115,0),String.fromCharCode(115,112,108,105,116,95,110,95,49,48,0)]]);
      if ((2 | whitel) < 5) {
          let iconrightorangeF = false;
          let playq = 0;
          let profilepic1 = 5.0;
          let telemetryF: Array<any> = [32, 662, 897];
         whitel ^= playq;
         iconrightorangeF = telemetryF.includes(profilepic1);
         playq *= 3;
         profilepic1 -= parseFloat(`${2 >> (Math.min(3, telemetryF.length))}`);
      }
          let settings6 = String.fromCharCode(112,95,49,55,95,97,115,105,115,0);
          let emojiheartD = 2.0;
         mbbannerh /= Math.max(3, 3 * mbbannerh);
         settings6 += `${parseInt(`${emojiheartD}`)}`;
         emojiheartD *= 2 | settings6.length;
       let matchactive7 = String.fromCharCode(106,95,52,52,95,97,117,100,105,111,103,101,110,0);
       let episodess = String.fromCharCode(116,97,107,101,110,95,48,95,55,57,0);
      let basketballtrophya = matchactive7 == String.fromCharCode(122,122,111,103,119,117,115,105,0);
      do {
         matchactive7 = `${((dragclosec ? 3 : 4) - episodess.length)}`;
         if (basketballtrophya) {
            break;
         }
      } while (basketballtrophya && (matchactive7.endsWith(`${mbbannerh}`)));
      neonJ %= Math.max(iconclose4.length >> (Math.min(Math.abs(2), 4)), 5);
       let iconsubssuccess4 = String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,113,95,53,50,0);
      let humidityi = iconsubssuccess4.length >= 4915269;
      do {
          let libavcodecc: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,95,111,95,56,50,0),String.fromCharCode(100,95,57,54,95,118,110,101,103,113,0)], [String.fromCharCode(111,95,55,50,95,97,112,112,97,114,101,110,116,0),String.fromCharCode(107,95,51,95,115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,0)]]);
          let iconarrowrightwhitem = false;
          let privatechatbgk: Map<any, any> = new Map([[String.fromCharCode(110,95,55,50,95,121,118,116,111,117,121,118,121,0),String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,95,112,95,49,52,0)], [String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,107,95,50,50,0),String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,95,52,95,56,49,0)], [String.fromCharCode(102,95,50,53,95,112,101,114,99,101,112,116,0),String.fromCharCode(113,95,55,56,95,116,114,97,110,115,102,101,114,0)]]);
         iconsubssuccess4 = "3";
         libavcodecc = new Map([[`${privatechatbgk.size}`, privatechatbgk.size]]);
         iconarrowrightwhitem = 85 == libavcodecc.size && 85 == privatechatbgk.size;
         if (humidityi) {
            break;
         }
      } while (humidityi && (iconsubssuccess4 == String.fromCharCode(57,0) || iconsubssuccess4.length < 4));
      let over8 = iconsubssuccess4 == String.fromCharCode(122,112,111,107,0);
      do {
         iconsubssuccess4 = `${iconsubssuccess4.length}`;
         if (over8) {
            break;
         }
      } while (over8 && (iconsubssuccess4 == iconsubssuccess4));
       let iconvieweri = true;
      neonJ |= parseInt(`${lineB}`) >> (Math.min(1, Math.abs(3)));
   while ((tail4 - 5) <= 4.9) {
       let siden = 5;
       let wifirouter8 = 5.0;
       let iconarrowrightwhiteZ = 4;
       let iconarrowrightwhiteO = 4.0;
         iconarrowrightwhiteZ <<= Math.min(4, Math.abs(parseInt(`${iconarrowrightwhiteO}`)));
         wifirouter8 -= 3;
         iconarrowrightwhiteZ ^= 2 - parseInt(`${wifirouter8}`);
          let streamingC = false;
          let update_5A = String.fromCharCode(97,95,55,56,95,114,97,110,115,105,116,105,111,110,0);
          let currentQ = String.fromCharCode(114,95,53,95,100,101,99,111,100,101,102,114,97,109,101,0);
         iconarrowrightwhiteZ &= 3 | parseInt(`${wifirouter8}`);
         streamingC = !update_5A.endsWith(`${streamingC}`);
         update_5A = `${(1 * (streamingC ? 4 : 5))}`;
         currentQ = `${2 << (Math.min(4, update_5A.length))}`;
         siden %= Math.max(2, iconarrowrightwhiteZ);
         siden /= Math.max(iconarrowrightwhiteZ, 4);
      for (let f = 0; f < 3; f++) {
         wifirouter8 *= 3;
      }
         iconarrowrightwhiteZ ^= iconarrowrightwhiteZ << (Math.min(Math.abs(siden), 3));
      while (iconarrowrightwhiteZ < 5) {
          let googleM = 4;
         iconarrowrightwhiteZ &= iconarrowrightwhiteZ & parseInt(`${iconarrowrightwhiteO}`);
         googleM -= googleM;
         break;
      }
      for (let q = 0; q < 3; q++) {
         wifirouter8 /= Math.max(5, siden >> (Math.min(Math.abs(parseInt(`${iconarrowrightwhiteO}`)), 5)));
      }
      if (3.5 >= (2.75 * iconarrowrightwhiteO)) {
         siden /= Math.max(1 | parseInt(`${iconarrowrightwhiteO}`), 4);
      }
       let combineg = String.fromCharCode(109,101,114,103,101,95,122,95,52,48,0);
       let link9 = String.fromCharCode(105,110,118,97,108,105,100,95,105,95,55,57,0);
      leaguem /= Math.max(3, 2);
      break;
   }
      sans9.set(`${tail4}`, parseInt(`${leaguem}`));
      leaguem /= Math.max(5, parseInt(`${tail4}`) | 2);
   let championL = iconarrowrightR >= 6339034.0;
   do {
      iconarrowrightR += parseInt(`${iconarrowrightR}`) + 2;
      if (championL) {
         break;
      }
   } while ((1.96 >= (3.27 * iconarrowrightR) || 4.50 >= (3.27 * iconarrowrightR)) && championL);

            setAdCountdownTime(prev => prev - 1);
          }, 1000)
        }
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
       let ticko = false;
    let rightq = String.fromCharCode(114,95,50,53,95,99,111,109,98,105,110,97,116,111,114,0);
    let whitebellF = true;
    let minivodE = 2;
    let teamu = String.fromCharCode(105,110,102,105,110,105,116,101,95,49,95,56,48,0);
    let libimagepipelined = String.fromCharCode(120,95,54,55,95,115,116,114,115,101,112,0);
    let whistleorangeU = 0.0;
    let projectL: Map<any, any> = new Map([[String.fromCharCode(102,105,101,108,100,95,114,95,49,50,0),false ], [String.fromCharCode(114,101,109,105,120,105,110,103,95,112,95,53,48,0),false ]]);
    let largebrightnessa = String.fromCharCode(118,112,105,116,120,102,109,95,51,95,55,48,0);
    let iconwechatu: Array<any> = [440, 287];
    let audiencei = 1;
    let leaguedetailsbgG = 3.0;
    let libnmsF = String.fromCharCode(101,120,110,111,100,101,95,105,95,52,57,0);
      iconwechatu = [1];
   let typesm = 9276545 >= projectL.size;
   do {
       let ticks: Map<any, any> = new Map([[String.fromCharCode(111,110,110,101,99,116,105,111,110,95,104,95,52,56,0),932], [String.fromCharCode(102,111,110,116,99,111,110,102,105,103,0),279], [String.fromCharCode(100,110,120,104,100,100,97,116,97,95,99,95,51,54,0),879]]);
       let carousel0 = String.fromCharCode(99,121,112,114,101,115,115,95,107,95,49,49,0);
       let reactnativejs_ = String.fromCharCode(110,95,51,50,95,115,97,116,0);
       let gifth = 0.0;
       let teamdetailsbgx = 0.0;
      for (let l = 0; l < 3; l++) {
         teamdetailsbgx += ticks.size;
      }
      while (reactnativejs_.includes(`${teamdetailsbgx}`)) {
         reactnativejs_ += `${(reactnativejs_ == String.fromCharCode(120,0) ? carousel0.length : reactnativejs_.length)}`;
         break;
      }
          let footballfiledlayout7 = String.fromCharCode(116,119,105,99,101,95,98,95,49,54,0);
         carousel0 += `${1 & parseInt(`${gifth}`)}`;
         footballfiledlayout7 += `${footballfiledlayout7.length % 1}`;
      for (let m = 0; m < 3; m++) {
         teamdetailsbgx -= parseInt(`${teamdetailsbgx}`);
      }
       let penaltyX = true;
         carousel0 += `${reactnativejs_.length}`;
          let yellowvideoliveX = 3.0;
         teamdetailsbgx -= 1 << (Math.min(Math.abs(parseInt(`${yellowvideoliveX}`)), 3));
       let taiwan4: Array<any> = [String.fromCharCode(119,95,54,51,95,98,105,97,115,101,100,0), String.fromCharCode(97,112,101,116,97,103,95,99,95,52,54,0), String.fromCharCode(111,95,50,50,95,99,111,110,102,105,103,117,114,101,0)];
      if ((taiwan4.length | 2) >= 4) {
         penaltyX = 1 <= carousel0.length;
      }
         teamdetailsbgx /= Math.max(1, 2);
       let tickedP = 3.0;
       let libruntimeexecutor4 = 1.0;
       let playlistF = String.fromCharCode(101,95,54,48,95,98,105,103,110,117,109,0);
      for (let o = 0; o < 3; o++) {
         ticks = new Map([[`${tickedP}`, parseInt(`${tickedP}`) % (Math.max(carousel0.length, 6))]]);
      }
      let traminiB = 7612882 <= taiwan4.length;
      do {
         taiwan4 = [1 & parseInt(`${gifth}`)];
         if (traminiB) {
            break;
         }
      } while (traminiB && (carousel0.length < taiwan4.length));
         libruntimeexecutor4 /= Math.max((String.fromCharCode(73,0) == playlistF ? playlistF.length : carousel0.length), 1);
      projectL = new Map([[`${projectL.size}`, projectL.size]]);
      if (typesm) {
         break;
      }
   } while (typesm && (!ticko));
   let aboutY = audiencei >= 7476341;
   do {
       let flagL = 5;
       let mbbidE = 5;
      while (4 < (mbbidE << (Math.min(Math.abs(flagL), 5)))) {
          let championI = false;
          let anythinkD = 1.0;
          let airbnbstarselectedq = true;
          let trophya = 1;
          let launchU = String.fromCharCode(112,95,56,56,95,97,109,114,110,98,100,97,116,97,0);
         flagL *= 3;
         championI = !launchU.includes(`${championI}`);
         anythinkD *= parseInt(`${anythinkD}`) >> (Math.min(2, Math.abs(1)));
         airbnbstarselectedq = 34 >= trophya;
         trophya -= parseInt(`${anythinkD}`) - launchU.length;
         break;
      }
      let casts = mbbidE <= 5493495;
      do {
         mbbidE %= Math.max(2 | flagL, 2);
         if (casts) {
            break;
         }
      } while ((1 < (mbbidE << (Math.min(3, Math.abs(flagL)))) || 1 < (mbbidE << (Math.min(4, Math.abs(flagL))))) && casts);
      for (let m = 0; m < 2; m++) {
          let orangeW = String.fromCharCode(113,95,52,57,95,115,116,114,108,0);
          let handlerN: Map<any, any> = new Map([[String.fromCharCode(117,110,107,105,99,107,0),134], [String.fromCharCode(120,95,51,57,95,101,113,117,97,108,115,0),704]]);
          let changeO = 2.0;
          let largeg = 1.0;
         mbbidE /= Math.max(1, 4);
         orangeW = `${(String.fromCharCode(120,0) == orangeW ? parseInt(`${changeO}`) : orangeW.length)}`;
         handlerN = new Map([[`${handlerN.size}`, handlerN.size]]);
         changeO /= Math.max(parseInt(`${changeO}`) / (Math.max(orangeW.length, 7)), 1);
         largeg -= 3;
      }
      let membershipj = flagL >= 5141687;
      do {
         flagL /= Math.max(flagL / (Math.max(mbbidE, 4)), 1);
         if (membershipj) {
            break;
         }
      } while ((2 >= mbbidE) && membershipj);
      while (5 > flagL) {
         flagL %= Math.max(5, flagL - 3);
         break;
      }
      while (4 >= (1 / (Math.max(5, mbbidE))) || 5 >= (1 / (Math.max(10, flagL)))) {
         flagL *= mbbidE;
         break;
      }
      audiencei &= 2 - iconwechatu.length;
      if (aboutY) {
         break;
      }
   } while (aboutY && (4 == audiencei));
   let plashW = 9841097.0 <= whistleorangeU;
   do {
      whistleorangeU += largebrightnessa.length;
      if (plashW) {
         break;
      }
   } while (plashW && (Array.from(projectL.keys()).includes(`${whistleorangeU}`)));
   for (let x = 0; x < 2; x++) {
      rightq += "3";
   }
      whistleorangeU -= (2 << (Math.min(1, Math.abs((ticko ? 3 : 5)))));

      if (onBack !== undefined) {

      ticko = largebrightnessa == String.fromCharCode(65,0);
   if ((minivodE & 4) < 5 && 4 < minivodE) {
       let register_acx = String.fromCharCode(115,95,55,57,95,102,109,115,117,98,0);
       let arrowrightwithtail1 = 2;
       let appleT = 4.0;
       let statsX = 5.0;
      for (let l = 0; l < 3; l++) {
         arrowrightwithtail1 -= 2 | register_acx.length;
      }
      let runtimex = statsX >= 5075225.0;
      do {
         statsX *= arrowrightwithtail1 | 3;
         if (runtimex) {
            break;
         }
      } while (runtimex && ((register_acx.length ^ 3) > 1));
      if (4.38 < (appleT + 4.81)) {
          let unselectedH = String.fromCharCode(112,97,114,105,116,121,95,112,95,53,57,0);
          let libavformatp = 2.0;
          let singaporer: Map<any, any> = new Map([[String.fromCharCode(110,95,54,49,95,109,105,110,115,0),594], [String.fromCharCode(116,111,116,97,108,115,95,48,95,50,57,0),987], [String.fromCharCode(105,110,118,105,116,101,100,95,51,95,51,55,0),960]]);
          let chinasameZ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,95,105,95,49,51,0),137], [String.fromCharCode(100,95,49,51,95,105,115,101,109,112,116,121,0),732]]);
         appleT /= Math.max(3, 1);
         unselectedH = `${chinasameZ.size}`;
         libavformatp -= parseFloat(`${unselectedH.length >> (Math.min(3, Math.abs(singaporer.size)))}`);
         singaporer = new Map([[`${chinasameZ.size}`, parseInt(`${libavformatp}`) << (Math.min(Math.abs(1), 2))]]);
      }
       let whitesmalltickL = 1.0;
       let activeU = 4.0;
      let abidetectO = arrowrightwithtail1 >= 7960892;
      do {
         arrowrightwithtail1 /= Math.max(parseInt(`${appleT}`), 1);
         if (abidetectO) {
            break;
         }
      } while (abidetectO && (whitesmalltickL == 1.36));
      for (let u = 0; u < 1; u++) {
         statsX += 3;
      }
      for (let p = 0; p < 1; p++) {
         arrowrightwithtail1 |= 1;
      }
          let whitevideolive6 = String.fromCharCode(97,118,117,116,105,108,114,101,115,95,48,95,55,48,0);
         arrowrightwithtail1 %= Math.max(3, 3);
         whitevideolive6 = `${whitevideolive6.length << (Math.min(Math.abs(2), 5))}`;
      let refreshborderlesss = String.fromCharCode(113,105,98,0) == register_acx;
      do {
         register_acx += `${arrowrightwithtail1 % 1}`;
         if (refreshborderlesss) {
            break;
         }
      } while (refreshborderlesss && ((register_acx.length + parseInt(`${whitesmalltickL}`)) < 5));
      while (appleT < activeU) {
         activeU *= 1;
         break;
      }
      if (statsX < appleT) {
         statsX /= Math.max(parseInt(`${statsX}`) % 1, 1);
      }
      minivodE &= 1;
   }
   let private_qn5 = 9493063.0 <= leaguedetailsbgG;
   do {
      leaguedetailsbgG -= 1;
      if (private_qn5) {
         break;
      }
   } while (private_qn5 && ((4.8 - leaguedetailsbgG) >= 1.54));
       let rocket2 = String.fromCharCode(121,95,56,53,95,121,117,118,112,116,111,117,121,118,121,0);
       let downloaded8 = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,49,95,53,49,0);
       let whitesmallticku = String.fromCharCode(103,95,51,57,95,115,99,114,97,116,99,104,0);
      let tooltipsB = 7670073 <= downloaded8.length;
      do {
          let chatbotphotoO = 4;
         downloaded8 += `${(downloaded8 == String.fromCharCode(114,0) ? chatbotphotoO : downloaded8.length)}`;
         if (tooltipsB) {
            break;
         }
      } while ((5 < whitesmallticku.length) && tooltipsB);
         rocket2 += `${downloaded8.length % 1}`;
      while (3 == rocket2.length) {
          let viewerg = 0;
          let telegramZ = String.fromCharCode(116,101,115,116,101,114,95,97,95,55,57,0);
          let mailZ = String.fromCharCode(115,117,98,118,105,101,119,115,95,116,95,54,56,0);
         downloaded8 = `${mailZ.length}`;
         viewerg *= (String.fromCharCode(76,0) == telegramZ ? telegramZ.length : viewerg);
         mailZ += `${viewerg}`;
         break;
      }
      let flipper6 = whitesmallticku == String.fromCharCode(102,101,95,116,119,95,54,0);
      do {
          let reminderw = String.fromCharCode(116,95,51,57,95,121,97,100,105,102,0);
          let settings9 = 0.0;
          let p_titlen = String.fromCharCode(117,95,54,48,95,109,101,115,115,115,97,103,101,0);
          let basketballplayerplaceholderJ = 4.0;
         whitesmallticku += `${parseInt(`${basketballplayerplaceholderJ}`)}`;
         reminderw += `${(String.fromCharCode(53,0) == reminderw ? parseInt(`${settings9}`) : reminderw.length)}`;
         settings9 += parseFloat(`${reminderw.length & 3}`);
         p_titlen += `${(p_titlen == String.fromCharCode(101,0) ? parseInt(`${settings9}`) : p_titlen.length)}`;
         basketballplayerplaceholderJ += parseInt(`${settings9}`) | reminderw.length;
         if (flipper6) {
            break;
         }
      } while (flipper6 && (rocket2 != String.fromCharCode(81,0)));
      while (downloaded8.length <= 4) {
          let mountingl = 2.0;
          let umengv = String.fromCharCode(116,101,114,109,105,110,97,116,101,100,95,57,95,49,51,0);
         rocket2 = `${parseInt(`${mountingl}`) - 1}`;
         mountingl /= Math.max(1, parseFloat(`${umengv.length << (Math.min(Math.abs(2), 2))}`));
         umengv += `${3 & umengv.length}`;
         break;
      }
         downloaded8 += `${whitesmallticku.length * rocket2.length}`;
         whitesmallticku += `${(String.fromCharCode(52,0) == whitesmallticku ? rocket2.length : whitesmallticku.length)}`;
       let filledV = 4.0;
      if (!rocket2.endsWith(downloaded8)) {
         downloaded8 += `${(rocket2 == String.fromCharCode(107,0) ? rocket2.length : whitesmallticku.length)}`;
      }
      whistleorangeU += 2;
      projectL.set(rightq, iconwechatu.length - rightq.length);
   while (!libimagepipelined.startsWith(`${leaguedetailsbgG}`)) {
       let libfile1 = 5.0;
       let refreshc = String.fromCharCode(106,95,49,50,95,115,112,97,110,0);
       let redcirclebge: Map<any, any> = new Map([[String.fromCharCode(117,95,54,57,95,98,110,100,101,99,0),782], [String.fromCharCode(112,101,114,105,111,100,105,99,95,99,95,55,57,0),357], [String.fromCharCode(100,117,112,99,108,95,108,95,48,0),778]]);
       let javax = false;
       let nalyticsy = String.fromCharCode(97,97,115,99,95,99,95,52,52,0);
         redcirclebge = new Map([[`${libfile1}`, ((javax ? 2 : 1) - parseInt(`${libfile1}`))]]);
      if (!javax) {
         javax = refreshc == String.fromCharCode(115,0);
      }
         javax = refreshc.length >= 24;
      if (javax && 1 > refreshc.length) {
          let cancelI = String.fromCharCode(100,105,114,97,99,100,115,112,95,55,95,49,51,0);
          let penaltyshootnogoalr = String.fromCharCode(97,112,112,108,105,101,114,95,113,95,51,53,0);
          let ballo: Array<any> = [480, 685];
         javax = libfile1 >= 81.4;
         cancelI = `${(String.fromCharCode(110,0) == penaltyshootnogoalr ? cancelI.length : penaltyshootnogoalr.length)}`;
         ballo.push((String.fromCharCode(50,0) == penaltyshootnogoalr ? ballo.length : penaltyshootnogoalr.length));
      }
      for (let x = 0; x < 3; x++) {
         nalyticsy += `${redcirclebge.size}`;
      }
          let leakcheckerL = String.fromCharCode(114,115,112,95,56,95,49,49,0);
          let fullscreenminP: Array<any> = [679, 590];
         nalyticsy += `${refreshc.length ^ 2}`;
         leakcheckerL += `${leakcheckerL.length}`;
         fullscreenminP = [(leakcheckerL == String.fromCharCode(95,0) ? leakcheckerL.length : fullscreenminP.length)];
      let logoutj = refreshc == String.fromCharCode(52,120,118,51,49,112,0);
      do {
         refreshc = `${nalyticsy.length}`;
         if (logoutj) {
            break;
         }
      } while (logoutj && (redcirclebge.size >= 4));
      for (let t = 0; t < 1; t++) {
          let flagQ = String.fromCharCode(110,95,57,53,95,116,104,101,114,101,117,109,0);
          let configureb = String.fromCharCode(100,121,110,108,105,110,107,95,106,95,50,49,0);
         libfile1 *= (nalyticsy == String.fromCharCode(99,0) ? nalyticsy.length : parseInt(`${libfile1}`));
         flagQ += "2";
         configureb += `${2 - configureb.length}`;
      }
      for (let l = 0; l < 2; l++) {
         javax = !javax;
      }
       let vietnamr = String.fromCharCode(118,111,116,101,100,95,53,95,57,51,0);
       let textS = String.fromCharCode(115,111,108,118,101,114,95,102,95,54,50,0);
      while (vietnamr.includes(`${redcirclebge.size}`)) {
         redcirclebge = new Map([[`${redcirclebge.size}`, textS.length + 1]]);
         break;
      }
          let homeplayerR = 2.0;
          let actionG = 3.0;
         nalyticsy += `${parseInt(`${libfile1}`) % (Math.max(7, redcirclebge.size))}`;
         homeplayerR /= Math.max(4, parseInt(`${actionG}`));
         libfile1 -= nalyticsy.length % (Math.max(7, textS.length));
      if (!nalyticsy.endsWith(`${libfile1}`)) {
          let basketballdetailsbgH: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,100,97,114,107,0),592], [String.fromCharCode(99,95,49,48,95,114,97,115,116,101,114,105,122,101,0),963]]);
          let sigmobm = 0;
          let iconarrowrightblackw = String.fromCharCode(102,95,49,51,95,111,112,101,114,97,116,111,114,0);
          let gemfileG = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,95,116,95,52,54,0);
         nalyticsy += "2";
         basketballdetailsbgH = new Map([[`${sigmobm}`, 1 + gemfileG.length]]);
         sigmobm ^= (iconarrowrightblackw == String.fromCharCode(102,0) ? basketballdetailsbgH.size : iconarrowrightblackw.length);
         gemfileG = `${sigmobm}`;
      }
          let launchr: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,99,101,115,115,95,103,95,54,48,0),629], [String.fromCharCode(99,95,52,55,95,99,117,114,118,101,115,0),828], [String.fromCharCode(109,97,105,110,112,97,103,101,95,48,95,52,52,0),850]]);
         redcirclebge.set(`${libfile1}`, 2);
         launchr.set(`${launchr.size}`, launchr.size);
      leaguedetailsbgG -= 3;
      break;
   }
        onBack();

      projectL.set(rightq, rightq.length);
       let brightnessa: Map<any, any> = new Map([[String.fromCharCode(109,97,114,103,105,110,95,51,95,53,51,0),String.fromCharCode(103,95,50,57,95,112,105,110,99,104,105,110,103,0)], [String.fromCharCode(112,95,52,95,104,105,110,116,105,110,103,0),String.fromCharCode(97,98,103,114,95,110,95,51,56,0)], [String.fromCharCode(101,100,105,116,95,111,95,54,48,0),String.fromCharCode(98,95,50,49,95,98,115,111,110,0)]]);
       let kuaishouB = 3.0;
         kuaishouB -= brightnessa.size & 3;
      while (3 == (parseInt(`${kuaishouB}`) * brightnessa.size)) {
          let eyeclosek: Map<any, any> = new Map([[String.fromCharCode(110,111,110,109,117,108,116,95,103,95,54,53,0),953], [String.fromCharCode(99,102,116,109,100,108,95,116,95,57,48,0),631], [String.fromCharCode(112,114,111,120,105,109,105,116,121,95,55,95,52,48,0),487]]);
         kuaishouB *= parseInt(`${kuaishouB}`) & 2;
         eyeclosek.set(`${eyeclosek.size}`, 3);
         break;
      }
      if (2.58 == (brightnessa.size + kuaishouB) || (kuaishouB + 2.58) == 1.10) {
         kuaishouB /= Math.max(3 - brightnessa.size, 3);
      }
         kuaishouB *= brightnessa.size;
         brightnessa.set(`${kuaishouB}`, 3 ^ brightnessa.size);
      let nextt = brightnessa.size <= 6811590;
      do {
          let graphn = String.fromCharCode(97,97,99,99,111,100,101,114,95,113,95,52,54,0);
         brightnessa.set(`${kuaishouB}`, brightnessa.size);
         graphn += `${graphn.length}`;
         if (nextt) {
            break;
         }
      } while (nextt && ((brightnessa.size << (Math.min(Math.abs(2), 1))) == 2 && (5.19 - kuaishouB) == 4.43));
      audiencei /= Math.max(rightq.length, 4);
      iconwechatu = [parseInt(`${whistleorangeU}`) - projectL.size];
   while (5.14 >= (4.79 / (Math.max(10, leaguedetailsbgG)))) {
      leaguedetailsbgG /= Math.max(2, 3);
      break;
   }
   if ((minivodE >> (Math.min(Math.abs(2), 5))) < 5 && (rightq.length >> (Math.min(Math.abs(2), 4))) < 5) {
      rightq += `${1 << (Math.min(Math.abs(parseInt(`${whistleorangeU}`)), 3))}`;
   }
   while ((iconwechatu.length & 4) <= 3) {
      whitebellF = whistleorangeU >= leaguedetailsbgG;
      break;
   }
        lockOrientation("PORTRAIT");

       let iconmoreC = 5;
      for (let g = 0; g < 3; g++) {
          let dropdownY = 2.0;
          let chatbotphotod = String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,114,95,49,54,0);
          let lightp = String.fromCharCode(99,117,114,114,101,110,116,108,121,95,112,95,56,53,0);
         iconmoreC <<= Math.min(Math.abs(1), 5);
         dropdownY /= Math.max(2, parseFloat(`${chatbotphotod.length | 1}`));
         chatbotphotod = `${(String.fromCharCode(111,0) == lightp ? parseInt(`${dropdownY}`) : lightp.length)}`;
      }
          let iconpipexpanda: Array<any> = [745, 279];
         iconmoreC -= iconpipexpanda.length * 1;
      let successf = 9558617 <= iconmoreC;
      do {
         iconmoreC *= 1;
         if (successf) {
            break;
         }
      } while ((4 > (iconmoreC | iconmoreC) && (iconmoreC | iconmoreC) > 4) && successf);
      minivodE %= Math.max(1, audiencei * 3);
   if ((libimagepipelined.length | 4) <= 5) {
      libimagepipelined = `${iconwechatu.length}`;
   }
      teamu += `${minivodE / (Math.max(projectL.size, 2))}`;
      leaguedetailsbgG /= Math.max(projectL.size % (Math.max(largebrightnessa.length, 4)), 1);
      leaguedetailsbgG += teamu.length / 2;
      iconwechatu.push((largebrightnessa == String.fromCharCode(50,0) ? largebrightnessa.length : iconwechatu.length));
        setIsFullScreen(false);
      } else {

   let iconlogoutC = iconwechatu.length >= 5948661;
   do {
      iconwechatu.push(teamu.length & 2);
      if (iconlogoutC) {
         break;
      }
   } while (iconlogoutC && (iconwechatu.length >= audiencei));
   if (2 == (1 - iconwechatu.length)) {
      iconwechatu = [3 | parseInt(`${leaguedetailsbgG}`)];
   }
   while (5 < (teamu.length | 3)) {
      iconwechatu = [largebrightnessa.length / 3];
      break;
   }
       let defaultplayerimgF = String.fromCharCode(105,110,99,114,98,108,111,98,95,105,95,56,57,0);
       let theme9 = String.fromCharCode(107,95,55,53,0);
      for (let d = 0; d < 2; d++) {
          let chatroombackgroundP = String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,100,95,54,54,0);
          let projectZ = 4;
          let iconwatch4: Map<any, any> = new Map([[String.fromCharCode(121,95,51,56,95,104,105,110,116,101,100,0),String.fromCharCode(102,95,51,57,95,101,102,102,101,99,116,0)], [String.fromCharCode(104,97,109,98,117,114,103,101,114,95,100,95,57,0),String.fromCharCode(115,116,97,98,105,108,105,122,101,95,49,95,51,53,0)], [String.fromCharCode(111,102,102,101,114,115,95,105,95,57,0),String.fromCharCode(103,95,56,57,95,100,98,115,105,122,101,0)]]);
          let floatinge = String.fromCharCode(103,101,111,109,95,99,95,50,55,0);
          let libglogz = String.fromCharCode(97,99,116,105,118,97,116,111,114,95,51,95,49,49,0);
         defaultplayerimgF += "3";
         chatroombackgroundP = `${floatinge.length >> (Math.min(2, Math.abs(iconwatch4.size)))}`;
         projectZ -= (String.fromCharCode(53,0) == floatinge ? libglogz.length : floatinge.length);
         iconwatch4.set(libglogz, floatinge.length);
      }
       let release_5iD = 3;
       let chatroombackgroundj = 4;
         theme9 += `${3 >> (Math.min(4, Math.abs(release_5iD)))}`;
      for (let z = 0; z < 1; z++) {
          let shrinkI = String.fromCharCode(118,95,51,95,102,111,111,0);
         chatroombackgroundj >>= Math.min(Math.abs(shrinkI.length >> (Math.min(defaultplayerimgF.length, 4))), 3);
      }
      for (let v = 0; v < 1; v++) {
         release_5iD &= 2;
      }
         chatroombackgroundj |= 3 | defaultplayerimgF.length;
      rightq += `${iconwechatu.length - parseInt(`${whistleorangeU}`)}`;
      rightq += `${rightq.length}`;
   if ((1 - teamu.length) > 1 && 1 > (teamu.length - iconwechatu.length)) {
       let iconshareI = String.fromCharCode(108,105,98,115,115,104,95,112,95,49,48,48,0);
       let iconwatchnowH = 0;
      if ((iconwatchnowH - iconshareI.length) == 1 && (iconshareI.length - 1) == 2) {
         iconwatchnowH /= Math.max((iconshareI == String.fromCharCode(75,0) ? iconshareI.length : iconwatchnowH), 4);
      }
      if (iconshareI.startsWith(`${iconwatchnowH}`)) {
         iconshareI += `${(iconshareI == String.fromCharCode(86,0) ? iconwatchnowH : iconshareI.length)}`;
      }
      teamu = `${teamu.length | 2}`;
   }
        

      audiencei -= projectL.size;
      teamu = `${teamu.length}`;
      largebrightnessa = `${(3 << (Math.min(1, Math.abs((ticko ? 3 : 3)))))}`;
      projectL = new Map([[libnmsF, teamu.length >> (Math.min(Math.abs(1), 1))]]);
      whitebellF = (audiencei & rightq.length) < 85;
   for (let n = 0; n < 1; n++) {
      libnmsF = `${((whitebellF ? 1 : 3) + 1)}`;
   }
        navigation.goBack();
      }
    };

    useEffect(() => {
      
      if (Platform.OS === "android" && !isFullScreen) {
        navigation.setOptions({ orientation: "portrait" });
      }

      
      const subscription = AppState.addEventListener(
        "change",
        handleAppStateChange
      );

      return () => {
        subscription.remove();
      };
    }, []);

    useEffect(() => {
      
      const isNeedAutoRotate = false;
      const isLocked = controlsRef?.current?.isLocked ?? false;

      if (isNeedAutoRotate && !isLocked) {
        deviceOrientationHandle();
      }
    }, [devicesOrientation]);

    useEffect(() => {
      const removeBackPressListener = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          
          navigation.goBack();
          return true;
        }
      );

      
      const onBeforeRemoveListener = navigation.addListener(
        "beforeRemove",
        (e: any) => {
          if (
            !(
              Platform.OS === "ios" &&
              e.data.action.type.toLocaleLowerCase() === "pop"
            )
          ) {
            
            
            e.preventDefault();
          }

          if (isFullScreen) {
            lockOrientation("PORTRAIT");
            StatusBar.setHidden(false);
            setIsFullScreen(false);
          } else {
            adVideoRef.current?.setNativeProps({ paused: true })
            videoPlayerRef.current?.setNativeProps({ paused: true })

            setIsPaused(true);
            
            setTimeout(() => {
              navigation.dispatch(e.data.action);
            }, 100);
          }
        }
      );

      return () => {
        removeBackPressListener.remove();
        onBeforeRemoveListener();
      };
    }, [isFullScreen, isPaused, videoPlayerRef.current, adVideoRef.current]);

    useEffect(() => {
      dispatch(setFullscreenState(isFullScreen));
      
      if (isFullScreen) {
        navigation.setOptions({ gestureEnabled: false });
      } else {
        navigation.setOptions({ gestureEnabled: true });
      }
    }, [isFullScreen]);

    useEffect(() => {
      
      setCurrentTime(0);
    }, [vod_url]);

    
    const handleAppStateChange = (nextAppState: any) => {
      
      
      
      
      
      

      try {
        if (currentTimeRef.current != 0 && nextAppState !== "active") {
          console.log("save vod");
          if (handleSaveVod) handleSaveVod();
        }
      } catch (err) {
       let rncoreF = false;
    let suggestiond = String.fromCharCode(97,95,53,55,95,102,108,97,99,100,115,112,0);
    let homeE = String.fromCharCode(112,117,98,108,105,115,104,101,100,95,56,95,57,48,0);
    let roomQ = String.fromCharCode(104,95,52,56,95,109,101,109,109,103,114,0);
    let condensed0 = 4;
    let airbnbstar_ = 2.0;
    let graph0 = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,50,95,52,57,0);
    let sideZ: Array<any> = [String.fromCharCode(105,109,103,95,57,95,50,53,0), String.fromCharCode(114,95,57,50,95,100,105,118,0), String.fromCharCode(107,95,56,55,95,114,97,99,105,110,103,0)];
    let hejic = String.fromCharCode(116,104,101,109,101,100,95,105,95,56,52,0);
    let predictionq = String.fromCharCode(103,95,52,51,95,100,116,109,102,0);
    let stationQ = String.fromCharCode(114,97,110,103,101,115,95,48,95,52,49,0);
    let confirmationh = String.fromCharCode(116,95,50,49,95,99,102,116,109,100,108,0);
    let actionso = 5;
    let righte = String.fromCharCode(109,105,103,114,97,116,105,111,110,95,106,95,54,57,0);
    let valuesG = String.fromCharCode(100,95,49,48,95,109,97,116,116,101,100,0);
   for (let a = 0; a < 1; a++) {
      condensed0 *= hejic.length;
   }
       let eventf = String.fromCharCode(114,105,99,101,95,50,95,54,50,0);
       let gifgoalbgh = 5;
         eventf = `${eventf.length}`;
          let placeholderI = 1.0;
         eventf = `${(String.fromCharCode(84,0) == eventf ? eventf.length : gifgoalbgh)}`;
         placeholderI /= Math.max(3, parseFloat(`${parseInt(`${placeholderI}`) | 1}`));
      while (!eventf.includes(`${gifgoalbgh}`)) {
          let stationsH = String.fromCharCode(111,95,55,49,95,100,98,115,116,97,116,0);
          let viewer7 = String.fromCharCode(108,111,110,103,98,105,103,95,53,95,57,48,0);
          let libreactH = String.fromCharCode(111,95,57,51,95,98,121,114,121,105,0);
          let memberY: Array<any> = [679, 945, 446];
         gifgoalbgh *= gifgoalbgh;
         stationsH += `${stationsH.length}`;
         viewer7 += `${viewer7.length}`;
         libreactH += `${viewer7.length}`;
         memberY.push(3);
         break;
      }
      if ((eventf.length & gifgoalbgh) > 5) {
         gifgoalbgh <<= Math.min(4, Math.abs(3 % (Math.max(8, eventf.length))));
      }
         eventf += `${gifgoalbgh << (Math.min(eventf.length, 5))}`;
      if ((eventf.length >> (Math.min(3, Math.abs(gifgoalbgh)))) <= 4 && 4 <= (4 >> (Math.min(4, eventf.length)))) {
          let adult8 = String.fromCharCode(101,95,55,48,95,108,101,118,101,108,115,0);
          let register_bD: Map<any, any> = new Map([[String.fromCharCode(103,111,101,114,108,105,95,57,95,52,53,0),969], [String.fromCharCode(104,95,55,57,95,112,114,101,115,101,110,99,101,0),994], [String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,116,95,57,56,0),599]]);
          let tempH: Array<any> = [923, 345];
         gifgoalbgh >>= Math.min(2, Math.abs(gifgoalbgh << (Math.min(adult8.length, 3))));
         adult8 += `${register_bD.size}`;
         register_bD.set(`${tempH.length}`, 3 + tempH.length);
      }
      graph0 = `${(String.fromCharCode(122,0) == graph0 ? graph0.length : predictionq.length)}`;
      airbnbstar_ /= Math.max(5, parseFloat(`${condensed0}`));
      condensed0 /= Math.max(stationQ.length, 2);
      stationQ += "1";
      roomQ = `${roomQ.length}`;
   if (stationQ.length > predictionq.length) {
      predictionq = `${graph0.length / (Math.max(suggestiond.length, 3))}`;
   }
      stationQ += `${(graph0 == String.fromCharCode(81,0) ? sideZ.length : graph0.length)}`;
   while (!homeE.startsWith(`${stationQ.length}`)) {
       let entryo: Array<any> = [440, 682, 468];
          let animationz = 5.0;
         entryo = [entryo.length & 3];
         animationz /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${animationz}`), 6))}`), 2);
          let matchinactiveX: Array<any> = [732, 48, 339];
         entryo = [entryo.length];
         matchinactiveX.push(matchinactiveX.length - matchinactiveX.length);
      if (4 > (entryo.length << (Math.min(entryo.length, 2))) && 4 > (entryo.length << (Math.min(entryo.length, 2)))) {
         entryo = [entryo.length >> (Math.min(Math.abs(2), 5))];
      }
      stationQ += `${entryo.length >> (Math.min(Math.abs(2), 1))}`;
      break;
   }
   while (5 == (4 ^ suggestiond.length)) {
       let homed = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,106,95,54,0);
       let headerm = String.fromCharCode(112,114,122,112,95,57,95,51,0);
       let faviconf: Array<any> = [String.fromCharCode(99,104,101,99,107,97,115,109,95,119,95,50,54,0), String.fromCharCode(104,105,100,105,110,103,95,106,95,54,49,0)];
       let goallogo0 = String.fromCharCode(122,95,53,48,95,109,111,110,107,101,121,115,97,117,100,105,111,0);
       let dicelogoL: Array<any> = [String.fromCharCode(106,112,103,95,54,95,54,52,0), String.fromCharCode(117,95,53,50,0), String.fromCharCode(121,95,51,48,95,100,101,115,101,108,101,99,116,0)];
         headerm = `${goallogo0.length}`;
      while ((dicelogoL.length & faviconf.length) >= 1) {
         dicelogoL.push(3 >> (Math.min(5, faviconf.length)));
         break;
      }
      while (dicelogoL.length == 4) {
          let iconclosewhitebgr = 2.0;
          let change0 = String.fromCharCode(119,95,56,50,95,112,111,108,101,0);
          let flaga = String.fromCharCode(118,95,55,95,100,105,102,102,97,98,108,101,0);
          let matchactiveq = String.fromCharCode(115,113,108,105,116,101,114,101,98,97,115,101,114,95,113,95,54,56,0);
         goallogo0 = `${goallogo0.length}`;
         iconclosewhitebgr *= parseFloat(`${flaga.length}`);
         change0 += `${flaga.length}`;
         matchactiveq = `${2 << (Math.min(2, flaga.length))}`;
         break;
      }
      if ((2 - faviconf.length) >= 4 || 5 >= (dicelogoL.length - 2)) {
         faviconf.push(2);
      }
         faviconf = [headerm.length / (Math.max(2, 3))];
      while (1 < homed.length) {
         headerm += `${goallogo0.length}`;
         break;
      }
         goallogo0 += `${headerm.length}`;
       let defaultroombgz = String.fromCharCode(113,95,50,55,95,112,100,115,0);
       let mbridgeW = String.fromCharCode(112,95,53,53,95,111,102,102,101,114,101,100,0);
          let penaltygoalV = false;
         mbridgeW = `${((penaltygoalV ? 3 : 2) << (Math.min(defaultroombgz.length, 2)))}`;
      for (let a = 0; a < 1; a++) {
         faviconf = [(headerm == String.fromCharCode(104,0) ? faviconf.length : headerm.length)];
      }
         mbridgeW = `${1 * homed.length}`;
         goallogo0 = "3";
         goallogo0 += `${dicelogoL.length - defaultroombgz.length}`;
         headerm = "1";
          let baiduadss = 5;
          let blackO = 1;
          let render3: Map<any, any> = new Map([[String.fromCharCode(117,110,98,97,110,95,51,95,53,52,0),false ], [String.fromCharCode(102,95,55,95,106,99,111,108,115,97,109,112,0),false ]]);
         mbridgeW += "3";
         baiduadss |= blackO % (Math.max(1, render3.size));
         blackO |= 2 >> (Math.min(1, Math.abs(render3.size)));
      suggestiond = `${suggestiond.length}`;
      break;
   }
   while ((2 / (Math.max(5, graph0.length))) < 4 || 1 < (condensed0 / 2)) {
      condensed0 >>= Math.min(3, Math.abs(graph0.length + sideZ.length));
      break;
   }
      predictionq = `${graph0.length}`;
   while (airbnbstar_ < 3.64) {
       let watchM: Array<any> = [40, 752];
       let iconrefresh4: Array<any> = [519, 568];
       let libcxxcomponentse: Array<any> = [String.fromCharCode(100,97,116,97,116,121,112,101,115,95,110,95,50,0), String.fromCharCode(97,99,114,111,110,121,109,95,118,95,54,52,0)];
       let carouselT = String.fromCharCode(109,98,117,102,115,95,106,95,56,53,0);
      for (let j = 0; j < 2; j++) {
         carouselT = "3";
      }
      let hearta = carouselT.length <= 9411916;
      do {
          let basketballawayteamC = 3;
          let referrer4 = String.fromCharCode(102,98,100,101,118,95,97,95,49,49,0);
         carouselT = `${watchM.length % 2}`;
         basketballawayteamC >>= Math.min(2, Math.abs(referrer4.length >> (Math.min(3, Math.abs(basketballawayteamC)))));
         referrer4 += `${3 << (Math.min(1, referrer4.length))}`;
         if (hearta) {
            break;
         }
      } while (hearta && (iconrefresh4.length > 5));
          let mergerP = 5.0;
          let downloadedL = 3.0;
          let codegeni = 4.0;
         watchM = [3 / (Math.max(1, parseInt(`${downloadedL}`)))];
         mergerP -= parseFloat(`${2}`);
         downloadedL *= parseFloat(`${parseInt(`${codegeni}`) | 1}`);
         codegeni *= 2;
          let rewardvideo6: Array<any> = [684, 920];
          let statisticsinactiveR: Array<any> = [233, 903];
         libcxxcomponentse.push(3);
         rewardvideo6 = [statisticsinactiveR.length >> (Math.min(Math.abs(1), 2))];
         statisticsinactiveR.push(statisticsinactiveR.length);
         watchM.push(iconrefresh4.length | libcxxcomponentse.length);
         iconrefresh4 = [carouselT.length >> (Math.min(Math.abs(2), 1))];
      while (4 <= (watchM.length & 5)) {
         iconrefresh4.push(watchM.length);
         break;
      }
         carouselT += `${1 | watchM.length}`;
      let fullscreenmaxA = iconrefresh4.length >= 6982261;
      do {
         iconrefresh4.push((String.fromCharCode(120,0) == carouselT ? carouselT.length : libcxxcomponentse.length));
         if (fullscreenmaxA) {
            break;
         }
      } while ((!libcxxcomponentse.includes(iconrefresh4.length)) && fullscreenmaxA);
          let whatsapp_ = 5.0;
          let malaysiau = String.fromCharCode(104,119,116,105,109,101,95,121,95,57,0);
          let window_pY = String.fromCharCode(104,95,54,50,95,117,116,118,105,100,101,111,0);
         watchM.push(1);
         whatsapp_ += window_pY.length;
         malaysiau += "2";
         window_pY = `${malaysiau.length * 2}`;
      if ((libcxxcomponentse.length | 3) >= 2) {
         libcxxcomponentse.push(2 & iconrefresh4.length);
      }
         iconrefresh4.push(iconrefresh4.length / 3);
      airbnbstar_ -= (parseFloat(`${parseInt(`${airbnbstar_}`) % (Math.max(1, (rncoreF ? 5 : 5)))}`));
      break;
   }

        console.log("err save vod!");

   let mbnativeY = predictionq == String.fromCharCode(101,50,116,111,97,56,118,105,0);
   do {
      predictionq += `${hejic.length}`;
      if (mbnativeY) {
         break;
      }
   } while (mbnativeY && (5 > (predictionq.length * 4) || 2 > (sideZ.length * 4)));
      condensed0 /= Math.max(2, 2);
       let statsnomoredata3 = false;
       let shrinkN = 4.0;
       let whitebell4 = 2.0;
       let hooks7 = false;
      let predictionloss4 = statsnomoredata3 ? !statsnomoredata3 : statsnomoredata3;
      do {
         statsnomoredata3 = !hooks7;
         if (predictionloss4) {
            break;
         }
      } while (predictionloss4 && (3.2 < whitebell4 || 1.95 < (whitebell4 - 3.2)));
      if ((whitebell4 + 1.70) == 3.14) {
         whitebell4 += ((statsnomoredata3 ? 2 : 4) ^ parseInt(`${shrinkN}`));
      }
       let tumbnailE = String.fromCharCode(100,101,99,111,114,114,95,121,95,55,54,0);
       let internetv = String.fromCharCode(109,95,57,55,95,115,117,109,100,105,102,102,0);
      let football_ = whitebell4 <= 7262434.0;
      do {
         whitebell4 /= Math.max(5, internetv.length % 3);
         if (football_) {
            break;
         }
      } while (football_ && (1 >= tumbnailE.length));
      for (let h = 0; h < 2; h++) {
         internetv = `${parseInt(`${shrinkN}`) - 1}`;
      }
         hooks7 = 24.28 == whitebell4;
          let type_3lW = String.fromCharCode(118,95,49,53,95,108,105,98,115,119,105,102,116,111,115,0);
         tumbnailE = `${internetv.length * tumbnailE.length}`;
         type_3lW += `${type_3lW.length * type_3lW.length}`;
          let profileinactives: Map<any, any> = new Map([[String.fromCharCode(111,115,115,108,95,110,95,56,56,0),583], [String.fromCharCode(107,95,50,95,112,101,114,109,105,115,115,105,111,110,115,0),983], [String.fromCharCode(101,95,55,50,95,109,111,100,105,102,105,101,114,0),527]]);
         tumbnailE = `${(String.fromCharCode(51,0) == tumbnailE ? internetv.length : tumbnailE.length)}`;
         profileinactives.set(`${profileinactives.size}`, profileinactives.size >> (Math.min(3, Math.abs(profileinactives.size))));
      predictionq += `${(String.fromCharCode(121,0) == roomQ ? (statsnomoredata3 ? 2 : 3) : roomQ.length)}`;
      rncoreF = !rncoreF;
   while (rncoreF && homeE.length > 5) {
      rncoreF = 49 > confirmationh.length;
      break;
   }
   for (let v = 0; v < 2; v++) {
       let iconi = 3;
       let iconwatchnow0 = 1.0;
      let iconsubssuccessP = 6053219.0 >= iconwatchnow0;
      do {
          let positionfieldM = true;
          let libapminsighta0 = true;
          let checkboxp = 0.0;
         iconwatchnow0 += ((positionfieldM ? 4 : 2));
         positionfieldM = 17.83 > checkboxp;
         libapminsighta0 = checkboxp == checkboxp;
         if (iconsubssuccessP) {
            break;
         }
      } while ((1.34 > (iconwatchnow0 + 3.33)) && iconsubssuccessP);
         iconi -= parseInt(`${iconwatchnow0}`);
      for (let t = 0; t < 1; t++) {
         iconwatchnow0 += 2;
      }
      while (4.34 >= (iconi - iconwatchnow0)) {
         iconwatchnow0 *= iconi;
         break;
      }
         iconi <<= Math.min(4, Math.abs(iconi << (Math.min(Math.abs(parseInt(`${iconwatchnow0}`)), 4))));
       let subinr = true;
       let whitesmalltickC = false;
      hejic = `${hejic.length}`;
   }
      roomQ += "3";
      condensed0 -= roomQ.length + homeE.length;
      sideZ = [(String.fromCharCode(90,0) == stationQ ? stationQ.length : sideZ.length)];
      roomQ += `${3 << (Math.min(3, stationQ.length))}`;
   if (4 == (condensed0 | roomQ.length) && (roomQ.length | 4) == 4) {
      condensed0 <<= Math.min(Math.abs(roomQ.length * confirmationh.length), 5);
   }
   if (1 == (sideZ.length >> (Math.min(graph0.length, 1)))) {
       let iconcurrentmatchw = true;
       let roundf = 4;
      let largeo = iconcurrentmatchw ? !iconcurrentmatchw : iconcurrentmatchw;
      do {
         iconcurrentmatchw = !iconcurrentmatchw;
         if (largeo) {
            break;
         }
      } while (largeo && (5 < roundf));
         iconcurrentmatchw = !iconcurrentmatchw;
       let basketballplayerplaceholderP = String.fromCharCode(110,105,115,116,122,95,56,95,54,56,0);
      if (5 >= basketballplayerplaceholderP.length && !iconcurrentmatchw) {
         iconcurrentmatchw = !iconcurrentmatchw || roundf >= 64;
      }
      while (1 > (basketballplayerplaceholderP.length * roundf) && (basketballplayerplaceholderP.length * 1) > 3) {
         roundf += roundf >> (Math.min(4, Math.abs(3)));
         break;
      }
         basketballplayerplaceholderP += `${basketballplayerplaceholderP.length % 1}`;
      sideZ = [2 - suggestiond.length];
   }
   let placeholder8 = String.fromCharCode(110,118,118,101,116,0) == hejic;
   do {
      hejic = `${confirmationh.length ^ 1}`;
      if (placeholder8) {
         break;
      }
   } while ((stationQ.length > hejic.length) && placeholder8);
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let iconmore_ = String.fromCharCode(117,95,56,49,95,115,108,117,114,112,0);
    let libavutill = 3.0;
    let fileG = String.fromCharCode(116,95,52,50,95,108,111,110,103,98,105,103,0);
    let philippinest = String.fromCharCode(98,95,56,49,95,108,111,97,100,101,114,0);
    let downarrow5 = 1.0;
    let assetsv = false;
    let iconbackwhiteH = 1;
    let footballfiledlayout7 = String.fromCharCode(99,104,97,112,95,102,95,50,53,0);
    let profilepicX = false;
    let catalog5: Array<any> = [183, 711, 480];
    let sharedF = 1;
    let green4 = 3;
    let r_lockq = 4.0;
    let baiduf = String.fromCharCode(117,95,54,54,95,99,108,111,115,101,100,0);
   while (1 >= (iconbackwhiteH & iconmore_.length) || (1 & iconmore_.length) >= 4) {
      iconbackwhiteH += iconbackwhiteH;
      break;
   }
      fileG += `${iconbackwhiteH}`;
   let redgoalH = philippinest == String.fromCharCode(122,101,118,113,102,102,0);
   do {
      philippinest = `${1 ^ iconbackwhiteH}`;
      if (redgoalH) {
         break;
      }
   } while (redgoalH && ((downarrow5 + philippinest.length) == 4.74));

      

   while ((parseInt(`${libavutill}`) * footballfiledlayout7.length) > 3) {
      footballfiledlayout7 = `${footballfiledlayout7.length}`;
      break;
   }
   while ((iconmore_.length ^ 2) >= 5) {
      libavutill -= (parseInt(`${downarrow5}`) << (Math.min(5, Math.abs((assetsv ? 2 : 5)))));
      break;
   }
      libavutill -= 3;
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

   for (let b = 0; b < 1; b++) {
      philippinest += `${2 | fileG.length}`;
   }
      libavutill += 2 | parseInt(`${libavutill}`);
      iconbackwhiteH &= 2;
        setIsFullScreen(true);

   if (iconmore_.length < 3) {
      iconbackwhiteH >>= Math.min(Math.abs((2 | (assetsv ? 2 : 5))), 5);
   }
      profilepicX = iconmore_ == footballfiledlayout7;
   let defaultroombgJ = libavutill >= 9266937.0;
   do {
       let tailO = 1.0;
       let chatroombackgroundr = String.fromCharCode(120,95,53,53,95,100,101,106,117,100,100,101,114,0);
       let injuryr = 3.0;
       let lessH = String.fromCharCode(103,101,116,116,105,109,101,111,102,100,97,121,95,105,95,50,55,0);
       let exampleimageX = 0.0;
         chatroombackgroundr += `${lessH.length}`;
          let cornerS = String.fromCharCode(100,95,52,52,95,115,112,100,105,102,0);
          let goalA: Array<any> = [713, 1000];
          let disconnectedL = 1.0;
         injuryr -= parseFloat(`${2}`);
         cornerS = `${1 / (Math.max(7, cornerS.length))}`;
         goalA.push(goalA.length & cornerS.length);
         disconnectedL /= Math.max(1, cornerS.length >> (Math.min(1, goalA.length)));
         exampleimageX += parseInt(`${injuryr}`);
         lessH += "1";
      if ((injuryr * 1.80) == 1.88 || (1.80 / (Math.max(1, tailO))) == 4.82) {
          let logout0: Array<any> = [String.fromCharCode(106,95,49,95,99,118,99,0), String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,109,95,53,53,0)];
          let loadinge = 2.0;
          let megaphonee = String.fromCharCode(112,97,114,97,108,108,101,108,95,112,95,50,57,0);
          let foundl = 0;
         injuryr += parseFloat(`${logout0.length}`);
         logout0 = [(megaphonee == String.fromCharCode(117,0) ? foundl : megaphonee.length)];
         loadinge += (parseFloat(`${String.fromCharCode(80,0) == megaphonee ? megaphonee.length : parseInt(`${loadinge}`)}`));
         foundl <<= Math.min(megaphonee.length, 2);
      }
         chatroombackgroundr += `${parseInt(`${injuryr}`) - 3}`;
         tailO *= 3;
       let icondefaultthumbnailA: Array<any> = [716, 978];
       let emojij: Array<any> = [493, 899, 507];
         lessH += `${icondefaultthumbnailA.length / 2}`;
      if ((chatroombackgroundr.length & emojij.length) > 2 && (emojij.length & chatroombackgroundr.length) > 2) {
         chatroombackgroundr = `${2 % (Math.max(1, lessH.length))}`;
      }
      if (4 == (lessH.length << (Math.min(5, icondefaultthumbnailA.length))) && 4 == (icondefaultthumbnailA.length << (Math.min(lessH.length, 1)))) {
         icondefaultthumbnailA = [2];
      }
      let libfabricjni0 = 8983942.0 >= exampleimageX;
      do {
         exampleimageX += 2 / (Math.max(parseInt(`${tailO}`), 5));
         if (libfabricjni0) {
            break;
         }
      } while (libfabricjni0 && ((1.75 * exampleimageX) > 2.79 && (3 / (Math.max(4, emojij.length))) > 1));
          let chinasameP = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,106,95,55,49,0);
          let selection2: Array<any> = [459, 793];
          let footballi = 3.0;
         lessH += `${2 / (Math.max(parseInt(`${exampleimageX}`), 8))}`;
         chinasameP += `${chinasameP.length}`;
         selection2 = [selection2.length];
         footballi *= parseInt(`${footballi}`);
      while (tailO >= chatroombackgroundr.length) {
         tailO /= Math.max(1 & parseInt(`${tailO}`), 4);
         break;
      }
      if (5.72 == (injuryr * 4.97)) {
          let release_mpg = 0.0;
          let minivodq = 3.0;
         chatroombackgroundr = `${chatroombackgroundr.length}`;
         release_mpg -= parseFloat(`${2}`);
         minivodq *= parseFloat(`${1 - parseInt(`${release_mpg}`)}`);
      }
      libavutill += parseInt(`${exampleimageX}`);
      if (defaultroombgJ) {
         break;
      }
   } while (defaultroombgJ && (libavutill > iconmore_.length));
        

       let short_se = String.fromCharCode(108,95,50,56,95,101,98,117,114,0);
       let neonb = true;
       let neonz = 5.0;
      if (2.9 > (4.40 + neonz) && !neonb) {
         neonb = short_se.length < 24 && !neonb;
      }
      while (!neonb) {
          let smallT = 0;
          let nativeexQ = String.fromCharCode(102,95,56,55,95,97,99,97,108,99,0);
          let zoomA = 0.0;
         neonb = 19 <= short_se.length;
         smallT *= nativeexQ.length;
         nativeexQ = `${parseInt(`${zoomA}`)}`;
         zoomA *= parseFloat(`${smallT >> (Math.min(Math.abs(3), 4))}`);
         break;
      }
          let whitetickk = true;
          let libapminsightan = 4.0;
          let indicator4 = 4;
         neonb = (!neonb ? whitetickk : !neonb);
         whitetickk = 84.25 < libapminsightan;
         libapminsightan -= parseFloat(`${3 * parseInt(`${libapminsightan}`)}`);
         indicator4 |= parseInt(`${libapminsightan}`);
       let incidentQ = String.fromCharCode(113,95,56,55,95,112,114,117,110,101,0);
      if (!neonb || 3 <= short_se.length) {
         neonb = !neonb;
      }
      if (3 < incidentQ.length) {
         neonz *= short_se.length;
      }
          let predictionarrowh: Map<any, any> = new Map([[String.fromCharCode(114,95,49,49,95,112,114,111,114,101,115,100,101,99,0),String.fromCharCode(122,95,52,57,95,100,117,112,101,100,0)], [String.fromCharCode(102,117,116,101,120,95,56,95,52,0),String.fromCharCode(109,105,115,115,101,115,95,110,95,53,49,0)], [String.fromCharCode(108,101,97,118,101,95,55,95,49,49,0),String.fromCharCode(104,95,48,95,99,111,109,109,105,116,116,101,114,0)]]);
          let robotoW = 1.0;
          let qaagc = String.fromCharCode(115,95,57,95,109,97,100,100,0);
         neonb = !neonb;
         predictionarrowh = new Map([[`${predictionarrowh.size}`, parseInt(`${robotoW}`)]]);
         robotoW *= qaagc.length;
         qaagc += `${(qaagc == String.fromCharCode(72,0) ? qaagc.length : predictionarrowh.size)}`;
         neonz += incidentQ.length;
      while (neonb) {
         neonb = neonz > 14.82 && neonb;
         break;
      }
      profilepicX = !assetsv && iconbackwhiteH == 28;
   let plusp = fileG == String.fromCharCode(105,122,97,57,101,51,97,101,0);
   do {
      fileG += `${iconbackwhiteH}`;
      if (plusp) {
         break;
      }
   } while ((!fileG.includes(iconmore_)) && plusp);
      footballfiledlayout7 = `${iconmore_.length}`;
        StatusBar.setHidden(true);

   if (iconmore_.length < 2) {
      iconmore_ += `${footballfiledlayout7.length << (Math.min(5, Math.abs(parseInt(`${downarrow5}`))))}`;
   }
      philippinest = `${iconbackwhiteH >> (Math.min(Math.abs(2), 1))}`;
      philippinest += `${2 * iconmore_.length}`;

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

      profilepicX = (iconmore_.length << (Math.min(fileG.length, 3))) == 33;
   let iconclosewhitebgq = catalog5.length >= 9143381;
   do {
      catalog5.push((iconmore_ == String.fromCharCode(86,0) ? parseInt(`${downarrow5}`) : iconmore_.length));
      if (iconclosewhitebgq) {
         break;
      }
   } while (iconclosewhitebgq && (!profilepicX && (3 >> (Math.min(4, catalog5.length))) < 5));
       let home7: Map<any, any> = new Map([[String.fromCharCode(101,95,55,51,95,97,112,112,108,121,105,110,103,0),String.fromCharCode(102,109,117,108,95,50,95,56,51,0)], [String.fromCharCode(99,97,99,104,101,115,105,122,101,95,122,95,51,0),String.fromCharCode(116,114,105,97,110,103,108,101,115,95,111,95,57,0)]]);
         home7 = new Map([[`${home7.size}`, 1 - home7.size]]);
         home7 = new Map([[`${home7.size}`, 3 >> (Math.min(1, Math.abs(home7.size)))]]);
          let sentryJ: Array<any> = [419, 788];
         home7.set(`${sentryJ.length}`, 2 << (Math.min(1, sentryJ.length)));
      libavutill += parseInt(`${libavutill}`) * fileG.length;
        setIsFullScreen(false);

       let telegramC: Map<any, any> = new Map([[String.fromCharCode(101,95,49,55,95,117,110,119,114,105,116,97,98,108,101,0),953], [String.fromCharCode(112,114,105,110,116,97,98,108,101,95,99,95,57,57,0),374], [String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,52,95,55,48,0),68]]);
       let loadingspinnerl = 1.0;
         loadingspinnerl /= Math.max(parseFloat(`${telegramC.size}`), 1);
      let templateprocessorW = telegramC.size >= 7965065;
      do {
          let tailY = String.fromCharCode(117,95,50,53,95,97,108,98,117,109,115,0);
          let iconmegaphoneB = 0;
          let homeiconq = 5;
         telegramC.set(`${loadingspinnerl}`, parseInt(`${loadingspinnerl}`) | iconmegaphoneB);
         tailY += "1";
         iconmegaphoneB ^= 2 * tailY.length;
         homeiconq <<= Math.min(Math.abs((tailY == String.fromCharCode(57,0) ? tailY.length : homeiconq)), 1);
         if (templateprocessorW) {
            break;
         }
      } while (templateprocessorW && (1.1 == (loadingspinnerl / 4.57) && (telegramC.size + 3) == 4));
      if ((parseFloat(`${telegramC.size}`) - loadingspinnerl) <= 2.46 && (telegramC.size ^ 3) <= 1) {
         telegramC.set(`${loadingspinnerl}`, 3 + parseInt(`${loadingspinnerl}`));
      }
         loadingspinnerl += parseFloat(`${parseInt(`${loadingspinnerl}`)}`);
      while ((telegramC.size - 2) <= 2 && 2 <= (parseInt(`${loadingspinnerl}`) * telegramC.size)) {
          let mbnativeA = String.fromCharCode(120,95,53,57,95,108,105,103,104,116,0);
         telegramC.set(mbnativeA, 2 << (Math.min(3, Math.abs(telegramC.size))));
         break;
      }
         telegramC = new Map([[`${telegramC.size}`, 1]]);
      iconmore_ += "1";
   while (profilepicX) {
       let iconrightorange5 = String.fromCharCode(116,114,97,110,115,99,116,105,111,110,95,112,95,51,48,0);
       let langkey_ = 3;
       let inactiveF = false;
         langkey_ ^= iconrightorange5.length & langkey_;
          let codeb: Array<any> = [539, 909];
          let libmapbufferjniX = 4.0;
          let dropdownA: Map<any, any> = new Map([[String.fromCharCode(109,107,118,109,117,120,101,114,95,108,95,52,54,0),373], [String.fromCharCode(97,117,116,111,102,105,108,108,95,121,95,56,56,0),381]]);
         iconrightorange5 += `${langkey_ % 1}`;
         codeb = [3];
         libmapbufferjniX /= Math.max(parseFloat(`${1}`), 1);
         dropdownA.set(`${libmapbufferjniX}`, 2 * codeb.length);
         inactiveF = langkey_ > iconrightorange5.length;
      while (5 <= iconrightorange5.length) {
         iconrightorange5 += `${iconrightorange5.length * langkey_}`;
         break;
      }
      let control6 = 8887699 <= langkey_;
      do {
         langkey_ &= 2;
         if (control6) {
            break;
         }
      } while (control6 && (inactiveF));
      for (let r = 0; r < 3; r++) {
          let singlek = true;
          let iconnointernet4 = 5.0;
          let temp_ = String.fromCharCode(102,95,49,53,95,98,117,105,108,116,0);
          let teamV = false;
          let penaltymatchiconS = 1;
         inactiveF = 50 < penaltymatchiconS;
         singlek = singlek && temp_.length < 95;
         iconnointernet4 -= (parseFloat(`${parseInt(`${iconnointernet4}`) << (Math.min(5, Math.abs((singlek ? 1 : 2))))}`));
         temp_ += `${((teamV ? 3 : 3))}`;
         teamV = 16.48 == iconnointernet4 || temp_ == String.fromCharCode(97,0);
         penaltymatchiconS /= Math.max(((teamV ? 1 : 5) + parseInt(`${iconnointernet4}`)), 3);
      }
         langkey_ &= iconrightorange5.length;
          let castk = 5.0;
          let showlessQ = String.fromCharCode(114,101,97,115,111,110,115,95,102,95,56,56,0);
          let eyecloseh = String.fromCharCode(111,95,55,56,95,103,97,108,108,101,114,121,0);
         iconrightorange5 += `${((inactiveF ? 1 : 2) ^ parseInt(`${castk}`))}`;
         castk /= Math.max(3, parseFloat(`${showlessQ.length & 1}`));
         showlessQ += `${eyecloseh.length ^ showlessQ.length}`;
         eyecloseh = `${(eyecloseh == String.fromCharCode(118,0) ? eyecloseh.length : showlessQ.length)}`;
         langkey_ %= Math.max(langkey_, 3);
      profilepicX = langkey_ <= libavutill;
      break;
   }
   for (let k = 0; k < 3; k++) {
      libavutill += ((profilepicX ? 3 : 3));
   }
        

   if (philippinest.length >= 3) {
      sharedF %= Math.max(2, fileG.length << (Math.min(Math.abs(1), 2)));
   }
      downarrow5 += catalog5.length | iconbackwhiteH;
      catalog5.push((philippinest == String.fromCharCode(75,0) ? philippinest.length : (assetsv ? 3 : 4)));
        StatusBar.setHidden(false);

   for (let i = 0; i < 2; i++) {
      footballfiledlayout7 = `${sharedF & 1}`;
   }
   let refreshborderlessA = 6010520.0 >= downarrow5;
   do {
      downarrow5 -= ((profilepicX ? 5 : 5) | footballfiledlayout7.length);
      if (refreshborderlessA) {
         break;
      }
   } while (refreshborderlessA && (catalog5.includes(downarrow5)));
   if (3 >= footballfiledlayout7.length) {
       let overlayU = 1.0;
       let middleQ = String.fromCharCode(102,95,50,50,95,108,105,98,114,97,114,105,101,115,0);
       let whitetickb = false;
          let package_gpk = false;
          let hometeamfieldK = String.fromCharCode(119,97,115,116,101,100,95,104,95,49,53,0);
         middleQ += "2";
         package_gpk = !package_gpk;
         hometeamfieldK += `${((package_gpk ? 2 : 2))}`;
         whitetickb = String.fromCharCode(80,0) == middleQ && overlayU <= 24.72;
      if ((overlayU * 1.74) >= 3.46 && !whitetickb) {
         overlayU -= (parseFloat(`${middleQ.length & (whitetickb ? 1 : 3)}`));
      }
         middleQ = `${middleQ.length & 1}`;
      let icondefaultthumbnail3 = whitetickb ? !whitetickb : whitetickb;
      do {
         whitetickb = middleQ == String.fromCharCode(48,0);
         if (icondefaultthumbnail3) {
            break;
         }
      } while ((middleQ.length > 2) && icondefaultthumbnail3);
      iconmore_ = "2";
   }

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let reminder5: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,102,117,110,99,95,50,95,55,53,0),938], [String.fromCharCode(111,112,117,115,95,109,95,55,55,0),941]]);
    let heartC: Map<any, any> = new Map([[String.fromCharCode(97,114,116,105,102,97,99,116,95,114,95,55,0),true ], [String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,0),true ]]);
    let positionfieldt = String.fromCharCode(117,95,51,49,95,107,105,116,116,121,0);
    let f_playerB: Array<any> = [174, 198];
    let libmapbufferjniP = true;
    let downloadedw = 5.0;
    let ballW = 0.0;
    let placeholder5: Map<any, any> = new Map([[String.fromCharCode(115,95,50,54,95,112,115,104,0),148], [String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,57,95,56,49,0),810]]);
    let analytice: Map<any, any> = new Map([[String.fromCharCode(107,95,53,56,95,114,101,115,117,109,101,0),true ], [String.fromCharCode(118,111,119,101,108,0),true ], [String.fromCharCode(98,95,57,48,95,101,110,111,117,103,104,0),false ]]);
    let greyarrowupW: Array<any> = [70, 956, 867];
    let videobufferloadingD = 0;
    let bufferW = String.fromCharCode(100,95,50,54,95,97,112,112,101,97,114,101,100,0);
   let private_0yT = 6415302 >= analytice.size;
   do {
      analytice = new Map([[`${analytice.size}`, parseInt(`${downloadedw}`)]]);
      if (private_0yT) {
         break;
      }
   } while ((Array.from(analytice.values()).includes(f_playerB.length)) && private_0yT);
      placeholder5.set(`${downloadedw}`, positionfieldt.length & 3);
      ballW /= Math.max(5, parseFloat(`${analytice.size >> (Math.min(f_playerB.length, 1))}`));

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

      downloadedw -= f_playerB.length;
       let informationJ = 2.0;
       let defaultlogop = String.fromCharCode(116,111,120,121,122,95,56,95,51,55,0);
       let ball_ = String.fromCharCode(107,95,53,57,95,99,108,101,97,114,105,0);
       let rewardY = 1;
       let c_countJ = 3;
         defaultlogop += `${ball_.length * c_countJ}`;
         ball_ = `${ball_.length & 3}`;
      for (let m = 0; m < 3; m++) {
         informationJ -= parseFloat(`${parseInt(`${informationJ}`) >> (Math.min(2, Math.abs(3)))}`);
      }
      if ((3 ^ c_countJ) >= 1 && 4 >= (ball_.length ^ 3)) {
          let iconclosewhitebgc: Map<any, any> = new Map([[String.fromCharCode(118,95,56,48,95,112,105,110,110,101,114,0),String.fromCharCode(99,121,99,108,101,100,95,56,95,54,50,0)], [String.fromCharCode(103,101,111,99,111,100,101,115,95,111,95,50,49,0),String.fromCharCode(119,95,54,57,95,98,101,103,105,110,115,0)]]);
          let overlay2: Map<any, any> = new Map([[String.fromCharCode(97,98,117,115,101,95,110,95,55,48,0),String.fromCharCode(103,114,97,98,98,101,114,95,54,95,54,50,0)], [String.fromCharCode(104,95,48,95,104,97,110,100,115,104,97,107,101,0),String.fromCharCode(115,105,110,107,95,121,95,54,54,0)]]);
         ball_ += `${iconclosewhitebgc.size + overlay2.size}`;
      }
      while (ball_.startsWith(`${c_countJ}`)) {
         c_countJ >>= Math.min(3, Math.abs(2 ^ ball_.length));
         break;
      }
      for (let n = 0; n < 2; n++) {
          let attributedstringk = String.fromCharCode(116,101,115,116,110,101,116,95,103,95,57,54,0);
          let mutedS = String.fromCharCode(110,95,49,49,95,112,114,111,109,105,115,105,102,121,0);
          let homeactiveY = false;
         rewardY += 3;
         attributedstringk = `${((homeactiveY ? 5 : 1) % (Math.max(mutedS.length, 9)))}`;
         mutedS = `${((homeactiveY ? 3 : 5) << (Math.min(Math.abs(2), 5)))}`;
      }
         ball_ = `${c_countJ >> (Math.min(3, Math.abs(rewardY)))}`;
         defaultlogop += `${ball_.length}`;
      analytice = new Map([[`${f_playerB.length}`, f_playerB.length]]);
       let completeK = String.fromCharCode(118,95,56,57,95,98,102,114,97,99,116,105,111,110,0);
       let binddatash = String.fromCharCode(99,111,112,121,95,49,95,53,48,0);
       let temperatureh = 2.0;
       let shirtv = String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,50,95,55,50,0);
       let mimel = String.fromCharCode(115,101,99,116,111,114,95,105,95,53,51,0);
      while (mimel.includes(`${binddatash.length}`)) {
         mimel += `${completeK.length}`;
         break;
      }
          let complete7 = String.fromCharCode(101,95,57,50,95,118,97,100,107,104,122,0);
          let greytickt = String.fromCharCode(108,95,50,50,95,97,108,112,104,97,110,117,109,101,114,105,99,0);
         temperatureh /= Math.max(4, parseFloat(`${shirtv.length % (Math.max(1, 10))}`));
         complete7 = `${greytickt.length}`;
         greytickt = `${greytickt.length}`;
       let profilef = String.fromCharCode(117,114,108,115,95,52,95,52,50,0);
      let iconshareK = 5245003.0 <= temperatureh;
      do {
          let componentregistryZ: Map<any, any> = new Map([[String.fromCharCode(114,95,51,56,95,105,100,101,110,116,105,102,105,97,98,108,101,0),389], [String.fromCharCode(106,95,52,54,95,112,111,114,116,0),20]]);
          let stationss: Array<any> = [517, 705];
          let anythinkO = true;
          let mbnativeadvanced4 = String.fromCharCode(108,95,56,55,95,115,117,98,109,111,100,101,108,0);
         temperatureh -= parseFloat(`${1 ^ shirtv.length}`);
         componentregistryZ = new Map([[`${stationss.length}`, 3]]);
         stationss = [3];
         anythinkO = mbnativeadvanced4 == String.fromCharCode(115,0);
         mbnativeadvanced4 = `${(1 % (Math.max(6, (anythinkO ? 2 : 4))))}`;
         if (iconshareK) {
            break;
         }
      } while ((4.92 >= (temperatureh * parseFloat(`${shirtv.length}`)) && 3.36 >= (temperatureh * 4.92)) && iconshareK);
          let pushl = 5;
          let iconclosewhitewithbg0 = 0;
         mimel += `${mimel.length}`;
         pushl ^= iconclosewhitewithbg0;
         iconclosewhitewithbg0 ^= 1;
          let country5: Array<any> = [328, 22];
          let update_4u = String.fromCharCode(108,95,48,95,112,111,105,110,116,115,0);
          let redirect4 = String.fromCharCode(113,95,49,54,95,111,114,105,103,105,110,97,108,0);
         binddatash = `${binddatash.length ^ 3}`;
         country5 = [(update_4u == String.fromCharCode(116,0) ? update_4u.length : redirect4.length)];
         redirect4 = `${country5.length}`;
          let xnewsd = 3.0;
          let homeplayer4 = 2.0;
         temperatureh -= parseFloat(`${1 ^ completeK.length}`);
         xnewsd /= Math.max(parseFloat(`${1}`), 5);
         homeplayer4 -= parseInt(`${homeplayer4}`) ^ 3;
         profilef = "3";
      libmapbufferjniP = completeK == String.fromCharCode(69,0) && 19 > binddatash.length;
        lockOrientation("PORTRAIT");

       let defaultfootballbgQ: Array<any> = [690, 761, 517];
       let iconsubssuccesst = true;
       let icontransferclubn = String.fromCharCode(118,101,114,98,97,116,105,109,95,51,95,51,52,0);
          let libffmpegkitg: Map<any, any> = new Map([[String.fromCharCode(105,110,108,105,110,101,100,95,97,95,55,0),true ], [String.fromCharCode(98,95,56,55,95,111,118,101,114,97,108,108,0),true ], [String.fromCharCode(111,108,100,101,114,95,113,95,51,49,0),true ]]);
          let javaG = 4.0;
         defaultfootballbgQ.push(1);
         libffmpegkitg.set(`${javaG}`, parseInt(`${javaG}`) << (Math.min(Math.abs(1), 3)));
      let reactm = 6094260 >= icontransferclubn.length;
      do {
          let disconnectedU = 5.0;
          let weibop = 3.0;
          let gemfilef = String.fromCharCode(115,119,105,116,99,104,101,100,95,121,95,53,52,0);
          let more8 = 1.0;
         icontransferclubn = `${parseInt(`${more8}`) | gemfilef.length}`;
         disconnectedU -= parseInt(`${weibop}`);
         weibop += parseInt(`${disconnectedU}`) + 3;
         gemfilef = `${parseInt(`${disconnectedU}`) % (Math.max(parseInt(`${weibop}`), 7))}`;
         more8 -= parseFloat(`${parseInt(`${disconnectedU}`) / (Math.max(10, parseInt(`${weibop}`)))}`);
         if (reactm) {
            break;
         }
      } while ((2 <= icontransferclubn.length) && reactm);
          let nalyticsd = String.fromCharCode(105,95,56,57,95,102,105,120,116,117,114,101,115,0);
         iconsubssuccesst = (((iconsubssuccesst ? defaultfootballbgQ.length : 39) % (Math.max(defaultfootballbgQ.length, 10))) == 39);
         nalyticsd = `${nalyticsd.length | nalyticsd.length}`;
      let classesM = iconsubssuccesst ? !iconsubssuccesst : iconsubssuccesst;
      do {
         iconsubssuccesst = defaultfootballbgQ.length > 80;
         if (classesM) {
            break;
         }
      } while ((!iconsubssuccesst) && classesM);
      while (icontransferclubn.length <= 2) {
          let playu: Array<any> = [485, 939];
          let airbnbstarselectedg = 5.0;
          let icondefaultthumbnail7 = true;
         icontransferclubn = `${parseInt(`${airbnbstarselectedg}`) / (Math.max(playu.length, 1))}`;
         playu = [(1 + (icondefaultthumbnail7 ? 1 : 1))];
         airbnbstarselectedg /= Math.max(5, ((icondefaultthumbnail7 ? 5 : 1)));
         break;
      }
         iconsubssuccesst = !iconsubssuccesst && defaultfootballbgQ.length > 77;
      for (let r = 0; r < 3; r++) {
         iconsubssuccesst = iconsubssuccesst || defaultfootballbgQ.length < 25;
      }
      for (let v = 0; v < 2; v++) {
          let defaultroombgi = String.fromCharCode(107,95,50,53,95,114,101,115,117,108,117,116,105,111,110,0);
          let greyV = String.fromCharCode(103,95,54,54,95,117,110,115,97,116,105,115,102,105,101,100,0);
         iconsubssuccesst = icontransferclubn == String.fromCharCode(121,0);
         defaultroombgi += "2";
         greyV += "1";
      }
         iconsubssuccesst = defaultfootballbgQ.length > 10;
      placeholder5 = new Map([[`${reminder5.size}`, 3 * defaultfootballbgQ.length]]);
   if ((ballW * 5.43) < 1.70) {
      ballW *= parseFloat(`${2}`);
   }
   if (3 == (5 * f_playerB.length)) {
      libmapbufferjniP = positionfieldt.length == 79;
   }
        setIsFullScreen(false);

   for (let f = 0; f < 2; f++) {
      reminder5 = new Map([[`${f_playerB.length}`, parseInt(`${ballW}`) * f_playerB.length]]);
   }
      f_playerB.push(1);
       let sorts = String.fromCharCode(97,100,118,97,110,99,101,95,106,95,53,53,0);
       let blackC = String.fromCharCode(104,105,116,115,95,52,95,54,50,0);
          let dice5 = 2.0;
         sorts = `${sorts.length & blackC.length}`;
         dice5 += parseInt(`${dice5}`);
       let miniY = String.fromCharCode(97,100,106,117,115,116,101,100,95,51,95,51,53,0);
      let predictionarrowW = blackC.length >= 9652700;
      do {
         blackC = `${sorts.length / 3}`;
         if (predictionarrowW) {
            break;
         }
      } while (predictionarrowW && (sorts.length >= 2));
      let styleN = String.fromCharCode(56,110,115,98,54,110,111,108,57,102,0) == miniY;
      do {
          let pausea = 1.0;
          let circlel = 1;
         miniY += `${sorts.length}`;
         pausea *= parseFloat(`${parseInt(`${pausea}`)}`);
         circlel &= circlel;
         if (styleN) {
            break;
         }
      } while ((blackC != String.fromCharCode(81,0)) && styleN);
      if (blackC.length >= sorts.length) {
         sorts = `${sorts.length}`;
      }
         miniY = `${sorts.length}`;
      placeholder5 = new Map([[`${analytice.size}`, analytice.size % (Math.max(3, 8))]]);
        

      analytice = new Map([[`${reminder5.size}`, reminder5.size]]);
       let selle = String.fromCharCode(100,101,112,111,115,105,116,95,99,95,52,48,0);
      for (let m = 0; m < 1; m++) {
          let statisticsinactivek = 2.0;
          let belln = 1.0;
          let analyticj = 1;
          let backwhitew = String.fromCharCode(110,95,49,95,97,100,106,117,115,116,105,110,103,0);
         selle += `${backwhitew.length - analyticj}`;
         statisticsinactivek *= 2 ^ parseInt(`${belln}`);
         belln -= parseFloat(`${parseInt(`${statisticsinactivek}`) / 3}`);
         analyticj <<= Math.min(5, Math.abs(3));
         backwhitew += `${parseInt(`${statisticsinactivek}`) + 2}`;
      }
         selle += "3";
      let icondownimgT = selle.length >= 5757679;
      do {
         selle += `${selle.length}`;
         if (icondownimgT) {
            break;
         }
      } while (icondownimgT && (selle.startsWith(selle)));
      f_playerB = [(selle == String.fromCharCode(65,0) ? f_playerB.length : selle.length)];
   while (!libmapbufferjniP) {
      greyarrowupW.push(1);
      break;
   }
        StatusBar.setHidden(false);

   let predictionbannerW = reminder5.size >= 8441324;
   do {
       let iconchatsend1 = String.fromCharCode(114,101,115,112,111,110,100,101,114,95,110,95,50,51,0);
       let humidityv: Array<any> = [840, 740];
       let libavfilterf: Array<any> = [121, 720, 182];
         humidityv = [iconchatsend1.length];
      while ((humidityv.length * 2) <= 5 && 3 <= (iconchatsend1.length * 2)) {
          let loginsuccessa: Array<any> = [157, 471];
          let less8: Map<any, any> = new Map([[String.fromCharCode(103,108,97,115,115,95,114,95,56,56,0),786], [String.fromCharCode(102,105,116,122,95,119,95,54,57,0),511]]);
         humidityv.push(humidityv.length);
         loginsuccessa = [loginsuccessa.length];
         less8 = new Map([[`${less8.size}`, 1]]);
         break;
      }
      reminder5 = new Map([[`${ballW}`, 3]]);
      if (predictionbannerW) {
         break;
      }
   } while (predictionbannerW && (reminder5.size == 2));
   if (videobufferloadingD < greyarrowupW.length) {
      videobufferloadingD *= 1 << (Math.min(Math.abs(parseInt(`${ballW}`)), 3));
   }
   if ((reminder5.size | analytice.size) > 3 && (reminder5.size | 3) > 5) {
      analytice = new Map([[`${libmapbufferjniP}`, 3 / (Math.max(parseInt(`${downloadedw}`), 9))]]);
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   let usernameI = libmapbufferjniP ? !libmapbufferjniP : libmapbufferjniP;
   do {
      libmapbufferjniP = 55 < videobufferloadingD;
      if (usernameI) {
         break;
      }
   } while (usernameI && (4 < (2 << (Math.min(5, Math.abs(heartC.size))))));
   if (placeholder5.size == 2) {
      f_playerB.push((analytice.size >> (Math.min(1, Math.abs((libmapbufferjniP ? 5 : 3))))));
   }
      analytice = new Map([[`${heartC.size}`, parseInt(`${downloadedw}`)]]);
        lockOrientation("LANDSCAPE");

      analytice.set(`${downloadedw}`, analytice.size);
   while (Array.from(analytice.keys()).includes(`${videobufferloadingD}`)) {
      videobufferloadingD %= Math.max(4, 2);
      break;
   }
      videobufferloadingD &= parseInt(`${ballW}`) - 2;
        setIsFullScreen(true);

   if (1 > (f_playerB.length % 4) || (f_playerB.length % (Math.max(reminder5.size, 8))) > 4) {
      f_playerB.push(3 | placeholder5.size);
   }
   if (positionfieldt.length == 5) {
       let shirt0: Array<any> = [914, 47, 87];
       let questiconh = false;
       let left7 = 5.0;
       let footballfield3: Map<any, any> = new Map([[String.fromCharCode(115,95,52,54,95,110,110,109,111,100,0),true ], [String.fromCharCode(104,95,50,48,95,115,101,110,99,0),true ], [String.fromCharCode(109,95,48,95,115,116,114,105,100,0),true ]]);
       let stepq = 4.0;
       let auto_42 = false;
       let networkX = true;
         shirt0 = [footballfield3.size];
         footballfield3 = new Map([[`${footballfield3.size}`, footballfield3.size]]);
         stepq /= Math.max(parseFloat(`${1}`), 4);
         footballfield3 = new Map([[`${footballfield3.size}`, 3 % (Math.max(2, footballfield3.size))]]);
       let textlayoutmanagerx = 0;
      while ((3 + shirt0.length) > 2) {
         networkX = auto_42 || 67 < textlayoutmanagerx;
         break;
      }
      if (1 < (shirt0.length * parseInt(`${stepq}`))) {
         shirt0.push(parseInt(`${stepq}`));
      }
         networkX = 44 >= shirt0.length;
          let friendsH: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,95,118,95,57,56,0),388], [String.fromCharCode(109,101,109,99,109,112,95,53,95,57,52,0),941]]);
          let builda: Array<any> = [472, 354, 66];
         shirt0.push(footballfield3.size);
         friendsH = new Map([[`${friendsH.size}`, builda.length % 1]]);
         builda = [builda.length];
       let roomX = String.fromCharCode(114,116,114,101,101,99,104,101,99,107,95,98,95,50,51,0);
       let readj = String.fromCharCode(99,97,114,101,102,117,108,108,121,95,97,95,52,49,0);
      for (let x = 0; x < 1; x++) {
          let libswscaleF = String.fromCharCode(108,95,52,48,95,112,105,101,0);
          let yellowanimationliveZ: Array<any> = [540, 849, 351];
          let cricketZ = String.fromCharCode(121,95,49,54,95,99,104,101,99,107,112,111,105,110,116,115,0);
         readj = `${(2 | (networkX ? 3 : 5))}`;
         libswscaleF += `${(cricketZ == String.fromCharCode(56,0) ? cricketZ.length : libswscaleF.length)}`;
         yellowanimationliveZ = [cricketZ.length];
      }
         textlayoutmanagerx ^= parseInt(`${stepq}`);
      for (let e = 0; e < 2; e++) {
         stepq /= Math.max(parseFloat(`${readj.length * shirt0.length}`), 4);
      }
      for (let s = 0; s < 3; s++) {
         auto_42 = shirt0.includes(textlayoutmanagerx);
      }
      positionfieldt = `${f_playerB.length % (Math.max(3, analytice.size))}`;
   }
   if (5 >= (heartC.size | placeholder5.size) && (5 | heartC.size) >= 4) {
      placeholder5 = new Map([[`${reminder5.size}`, 3 - reminder5.size]]);
   }
        

   if (positionfieldt.endsWith(`${reminder5.size}`)) {
      reminder5.set(positionfieldt, 1);
   }
   let readv = 5799418.0 <= downloadedw;
   do {
      downloadedw /= Math.max(3, 1 - placeholder5.size);
      if (readv) {
         break;
      }
   } while ((5.74 < (downloadedw - 1.95) && (greyarrowupW.length + 3) < 3) && readv);
      videobufferloadingD >>= Math.min(Math.abs(analytice.size), 2);
        StatusBar.setHidden(true);

   while (5 < greyarrowupW.length) {
      greyarrowupW = [1 ^ heartC.size];
      break;
   }
      ballW += parseFloat(`${f_playerB.length}`);
      ballW -= parseFloat(`${2}`);

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "landscape" });
        }
      }
    }, [isFullScreen, appOrientation]);

    const onVideoLoaded = (data: any) => {
      setDuration(data.duration);
      if (currentTimeRef) {
        currentTimeRef.current = data.currentTime;
      }
      if (videoPlayerRef.current) {
        videoPlayerRef.current.seek(initialStartTime);
      }
    };

    const onSeek = (time: number) => {
      if (disableSeek.current === true) return
      hideSeekProgress();
      time = Math.min(Math.max(time, 0), duration);
      try {
        if (videoPlayerRef.current && !isNaN(time)) {
          videoPlayerRef.current.seek(time);
          setCurrentTime(time);
        }
      } catch (err) {
       let screen7 = 3.0;
    let fullW: Array<any> = [112, 789, 27];
    let leagueu = String.fromCharCode(104,105,116,95,105,95,54,53,0);
    let sportsH = String.fromCharCode(97,95,54,56,95,112,101,114,109,117,116,97,116,105,111,110,115,0);
    let overlayr = 3.0;
    let heji7 = 3.0;
    let appleP = String.fromCharCode(104,95,57,51,95,100,101,109,117,120,101,114,0);
    let change6 = true;
    let sportx = String.fromCharCode(102,95,56,57,95,115,117,98,116,121,112,101,0);
    let images_ = String.fromCharCode(100,97,109,112,95,51,95,51,51,0);
    let mbnativeM = 4;
    let default_62j = false;
   if (1 <= leagueu.length) {
       let sell8 = 5;
       let gpayl = 4;
       let fastD = String.fromCharCode(97,112,99,109,95,111,95,54,0);
       let currentT = String.fromCharCode(105,95,49,53,95,115,117,98,109,105,116,116,101,100,0);
       let goallogox = 5.0;
         sell8 <<= Math.min(Math.abs(parseInt(`${goallogox}`) * 3), 4);
      if (!currentT.startsWith(`${goallogox}`)) {
          let defaultbasketballbgb: Array<any> = [346, 78];
          let downloaded9 = 2.0;
          let type_6A = true;
          let optionsO: Map<any, any> = new Map([[String.fromCharCode(110,95,57,51,95,114,101,110,100,101,114,98,117,102,102,101,114,0),true ], [String.fromCharCode(110,111,105,115,101,95,50,95,50,52,0),true ]]);
          let incidentq = 1.0;
         currentT = `${gpayl}`;
         defaultbasketballbgb.push(optionsO.size & 2);
         downloaded9 += parseInt(`${incidentq}`);
         type_6A = type_6A && downloaded9 >= 97.6;
         optionsO = new Map([[`${defaultbasketballbgb.length}`, ((type_6A ? 2 : 2) << (Math.min(Math.abs(3), 5)))]]);
      }
       let animationw = true;
      let verticalp = animationw ? !animationw : animationw;
      do {
         animationw = !animationw && currentT.length >= 98;
         if (verticalp) {
            break;
         }
      } while ((animationw) && verticalp);
      let time_z_n = goallogox >= 7496515.0;
      do {
         goallogox /= Math.max((String.fromCharCode(75,0) == currentT ? (animationw ? 2 : 2) : currentT.length), 3);
         if (time_z_n) {
            break;
         }
      } while (time_z_n && (goallogox < 3.73));
      if (parseInt(`${goallogox}`) > currentT.length) {
         goallogox -= 3;
      }
         fastD += "3";
         fastD += `${parseInt(`${goallogox}`) ^ 1}`;
      while (fastD.startsWith(currentT)) {
          let fieldi = 1.0;
          let friends7 = 3;
         fastD = `${(currentT == String.fromCharCode(56,0) ? sell8 : currentT.length)}`;
         fieldi -= parseInt(`${fieldi}`);
         friends7 += parseInt(`${fieldi}`) ^ friends7;
         break;
      }
       let listS = 0.0;
          let scheduleM: Array<any> = [0, 313, 210];
          let foregroundk = 2.0;
          let penaltyshootE = String.fromCharCode(101,120,101,99,117,116,101,95,119,95,52,54,0);
         sell8 /= Math.max(3, 5);
         scheduleM = [2 | parseInt(`${foregroundk}`)];
         foregroundk -= parseFloat(`${2 / (Math.max(6, penaltyshootE.length))}`);
         penaltyshootE += `${penaltyshootE.length << (Math.min(Math.abs(1), 2))}`;
         fastD += "1";
          let relatedC = true;
          let matchactivep = String.fromCharCode(104,95,54,54,95,102,101,119,0);
          let specd = 5.0;
         animationw = !relatedC;
         matchactivep += `${3 & parseInt(`${specd}`)}`;
         specd -= matchactivep.length;
          let unselected0 = String.fromCharCode(97,98,101,108,95,51,95,54,51,0);
         currentT += `${((animationw ? 3 : 2) - parseInt(`${goallogox}`))}`;
         unselected0 += `${unselected0.length >> (Math.min(2, unselected0.length))}`;
         listS -= parseFloat(`${gpayl}`);
      heji7 += (leagueu == String.fromCharCode(52,0) ? sell8 : leagueu.length);
   }
       let submit3 = 0.0;
          let qaagG = true;
          let sharedZ = 5;
          let whitevideolive2: Map<any, any> = new Map([[String.fromCharCode(109,105,100,110,105,103,104,116,95,97,95,52,51,0),false ], [String.fromCharCode(115,95,53,54,95,97,114,98,105,116,114,97,114,121,0),false ]]);
         submit3 += whitevideolive2.size;
         qaagG = 42 == sharedZ;
         sharedZ ^= sharedZ;
          let libhermesg = 0.0;
          let profileactivez = 1;
         submit3 *= 2 * parseInt(`${libhermesg}`);
         libhermesg += profileactivez ^ 2;
         profileactivez /= Math.max(profileactivez + 2, 5);
      let materials = 7336082.0 <= submit3;
      do {
          let episoder = 0;
          let thumbnailB: Array<any> = [847, 326, 122];
         submit3 -= episoder | thumbnailB.length;
         if (materials) {
            break;
         }
      } while (materials && (3.24 < submit3));
      appleP = "3";
   if (appleP.length < 3) {
      change6 = fullW.includes(change6);
   }
   if ((appleP.length + screen7) == 1.47 && (screen7 + 1.47) == 3.69) {
       let hoverL = String.fromCharCode(107,95,49,55,95,112,111,115,108,105,115,116,0);
       let matchinactived = 2.0;
       let rewarda = 3.0;
         hoverL = `${parseInt(`${matchinactived}`) % 1}`;
      let bellQ = matchinactived >= 8707910.0;
      do {
          let specR = String.fromCharCode(101,95,53,51,95,109,117,114,109,117,114,0);
          let sharewhite8 = 3.0;
         matchinactived -= 2;
         specR = `${2 * specR.length}`;
         sharewhite8 += parseFloat(`${3}`);
         if (bellQ) {
            break;
         }
      } while ((4 == (parseInt(`${matchinactived}`) + hoverL.length)) && bellQ);
      screen7 += leagueu.length;
   }
   let recommendationm = appleP == String.fromCharCode(102,106,111,48,53,0);
   do {
      appleP += `${(leagueu == String.fromCharCode(107,0) ? leagueu.length : parseInt(`${screen7}`))}`;
      if (recommendationm) {
         break;
      }
   } while ((4 >= appleP.length) && recommendationm);
      appleP += `${parseInt(`${screen7}`)}`;
   let whitetickd = String.fromCharCode(56,119,51,95,111,113,54,54,118,122,0) == sportsH;
   do {
      sportsH = `${parseInt(`${screen7}`) + 3}`;
      if (whitetickd) {
         break;
      }
   } while ((1 <= sportsH.length) && whitetickd);
   while (1.88 == overlayr) {
       let privatechatbgc: Map<any, any> = new Map([[String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,56,95,56,51,0),121], [String.fromCharCode(99,108,101,97,110,101,100,95,107,95,49,0),17]]);
         privatechatbgc = new Map([[`${privatechatbgc.size}`, privatechatbgc.size / 2]]);
      if ((privatechatbgc.size / 4) <= 5) {
         privatechatbgc.set(`${privatechatbgc.size}`, 2);
      }
      if (4 > (privatechatbgc.size << (Math.min(Math.abs(privatechatbgc.size), 5))) || 4 > (privatechatbgc.size << (Math.min(Math.abs(4), 2)))) {
         privatechatbgc.set(`${privatechatbgc.size}`, privatechatbgc.size);
      }
      overlayr -= ((change6 ? 3 : 4) ^ 2);
      break;
   }
   for (let q = 0; q < 2; q++) {
      sportsH += `${((change6 ? 2 : 4))}`;
   }
   for (let y = 0; y < 2; y++) {
      leagueu += `${sportx.length & fullW.length}`;
   }
   if (leagueu.endsWith(`${screen7}`)) {
       let libreactperfloggerjniL = true;
       let baiduD = true;
         libreactperfloggerjniL = (libreactperfloggerjniL ? !baiduD : libreactperfloggerjniL);
         libreactperfloggerjniL = baiduD;
      leagueu = `${1 & sportx.length}`;
   }
   while (1 < (fullW.length >> (Math.min(leagueu.length, 1)))) {
      fullW = [sportsH.length >> (Math.min(3, sportx.length))];
      break;
   }
   let smallbrightnessX = 8875175.0 >= heji7;
   do {
       let helperI: Map<any, any> = new Map([[String.fromCharCode(100,95,56,52,95,119,97,118,101,102,111,114,109,97,116,101,120,0),360], [String.fromCharCode(113,95,54,51,95,112,114,101,104,97,115,104,0),350], [String.fromCharCode(122,95,56,57,95,113,100,114,97,119,0),597]]);
       let navigationp = 4;
       let indicatork = 2.0;
       let flagG = true;
       let text0 = 5.0;
         helperI = new Map([[`${text0}`, parseInt(`${indicatork}`) & 1]]);
       let footballr = String.fromCharCode(115,108,105,99,101,97,110,103,108,101,95,52,95,51,53,0);
      while (3.92 == text0) {
          let libruntimeexecutorZ: Array<any> = [826, 950, 907];
          let vietnam3 = 1.0;
          let fastW = 3.0;
         footballr = `${parseInt(`${vietnam3}`) >> (Math.min(Math.abs(parseInt(`${indicatork}`)), 3))}`;
         libruntimeexecutorZ.push(parseInt(`${fastW}`) % 3);
         vietnam3 *= parseInt(`${fastW}`);
         break;
      }
      while (Array.from(helperI.values()).includes(indicatork)) {
         helperI.set(`${indicatork}`, footballr.length / 2);
         break;
      }
       let mutedS: Map<any, any> = new Map([[String.fromCharCode(118,111,105,112,95,52,95,50,56,0),278], [String.fromCharCode(114,101,106,111,105,110,95,51,95,52,55,0),141]]);
       let side3 = 3.0;
      if (1 > (2 + navigationp)) {
          let borderlessi = String.fromCharCode(107,102,119,114,105,116,101,95,55,95,57,51,0);
          let adult2 = 2.0;
          let libruntimeexecutor7 = 2.0;
          let chath = String.fromCharCode(104,95,53,49,95,104,97,100,111,119,115,0);
         mutedS = new Map([[`${adult2}`, footballr.length / (Math.max(6, parseInt(`${adult2}`)))]]);
         borderlessi = "2";
         libruntimeexecutor7 *= borderlessi.length * chath.length;
         chath = `${chath.length}`;
      }
         indicatork -= ((flagG ? 3 : 1) | mutedS.size);
      while ((parseFloat(`${navigationp}`) / (Math.max(text0, 4))) <= 4.56 && 4 <= (navigationp / (Math.max(parseInt(`${text0}`), 3)))) {
         text0 += (parseFloat(`${parseInt(`${text0}`) + (flagG ? 5 : 3)}`));
         break;
      }
          let expiredF = 5.0;
          let sendM = String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,121,95,52,49,0);
          let iconwatchnowh = false;
         mutedS.set(`${iconwatchnowh}`, 1 | sendM.length);
         expiredF *= parseFloat(`${parseInt(`${expiredF}`)}`);
         sendM += `${parseInt(`${expiredF}`)}`;
         footballr = "2";
         navigationp <<= Math.min(5, Math.abs(parseInt(`${text0}`)));
       let iconqqT: Map<any, any> = new Map([[String.fromCharCode(103,101,116,116,101,114,95,121,95,49,52,0),576], [String.fromCharCode(99,95,54,52,95,100,101,116,101,114,109,105,110,101,0),998]]);
       let eyecloseA: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,101,115,95,55,95,55,57,0),494], [String.fromCharCode(112,95,55,57,95,108,111,99,97,108,101,0),892], [String.fromCharCode(97,115,115,101,109,98,108,121,95,113,95,55,49,0),772]]);
      while (eyecloseA.get(`${mutedS.size}`) == null) {
          let pushA: Array<any> = [814, 197, 791];
          let iconshareo = true;
          let sharemodalX = String.fromCharCode(116,95,53,57,95,101,120,116,101,110,115,105,98,108,101,0);
         eyecloseA = new Map([[`${eyecloseA.size}`, 2 << (Math.min(4, sharemodalX.length))]]);
         pushA.push(2);
         iconshareo = (((iconshareo ? 44 : pushA.length) ^ pushA.length) <= 44);
         sharemodalX = `${((iconshareo ? 4 : 1) >> (Math.min(pushA.length, 3)))}`;
         break;
      }
          let schedulerR = false;
         text0 /= Math.max(5, (parseFloat(`${(schedulerR ? 5 : 5) - parseInt(`${indicatork}`)}`)));
      heji7 += 1;
      if (smallbrightnessX) {
         break;
      }
   } while (smallbrightnessX && ((heji7 - sportsH.length) > 4.96 && (sportsH.length / 3) > 2));
   for (let x = 0; x < 2; x++) {
      leagueu += `${sportsH.length}`;
   }
   if (leagueu.length <= sportx.length) {
      sportx = `${1 * leagueu.length}`;
   }
   let videobufferloadingK = fullW.length >= 7862047;
   do {
       let minimizeb: Array<any> = [408, 544];
       let foundB = String.fromCharCode(99,104,97,110,110,101,108,115,95,52,95,51,55,0);
       let eyeclosen: Array<any> = [858, 728];
      while (minimizeb.length >= eyeclosen.length) {
          let iconviewergifG: Map<any, any> = new Map([[String.fromCharCode(117,95,55,95,115,98,112,114,111,0),320], [String.fromCharCode(121,95,51,48,95,115,119,114,0),353]]);
          let blackx = String.fromCharCode(105,109,112,111,114,116,101,100,95,122,95,51,48,0);
          let greenarrowupm: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,57,95,51,49,0),664], [String.fromCharCode(101,95,51,57,95,99,105,110,116,0),800], [String.fromCharCode(99,108,109,117,108,95,116,95,49,49,0),121]]);
          let playP = String.fromCharCode(118,95,48,95,112,117,108,115,101,0);
          let iconlogoutb = false;
         minimizeb = [blackx.length / (Math.max(1, 10))];
         iconviewergifG.set(`${greenarrowupm.size}`, greenarrowupm.size);
         blackx = `${playP.length + 2}`;
         playP = `${playP.length & 2}`;
         iconlogoutb = greenarrowupm.size >= 95 && playP == String.fromCharCode(115,0);
         break;
      }
         foundB += `${foundB.length}`;
         foundB = `${eyeclosen.length}`;
      let libapminsightba = 7292506 >= eyeclosen.length;
      do {
          let iconmegaphoneH = String.fromCharCode(110,105,98,95,116,95,49,57,0);
          let policyZ = String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,111,95,54,56,0);
          let libavutilY = false;
          let field3 = false;
          let runtimeschedulerg = String.fromCharCode(101,95,51,53,95,117,110,99,111,110,115,117,109,101,100,0);
         eyeclosen = [eyeclosen.length << (Math.min(runtimeschedulerg.length, 2))];
         iconmegaphoneH = `${((libavutilY ? 2 : 3) ^ policyZ.length)}`;
         policyZ = `${policyZ.length}`;
         field3 = policyZ.startsWith(`${libavutilY}`);
         runtimeschedulerg = `${1 + policyZ.length}`;
         if (libapminsightba) {
            break;
         }
      } while (libapminsightba && (1 < (eyeclosen.length | minimizeb.length) || 1 < (eyeclosen.length | minimizeb.length)));
      while ((foundB.length & 4) <= 3 || (foundB.length & minimizeb.length) <= 4) {
         minimizeb.push(minimizeb.length % 2);
         break;
      }
         minimizeb = [1];
       let profilepicy = String.fromCharCode(113,95,56,50,95,97,100,100,105,116,105,111,110,97,108,0);
      for (let f = 0; f < 2; f++) {
          let iconmegaphonep = 1.0;
          let relatedd = String.fromCharCode(105,95,57,53,95,99,111,109,112,111,115,101,114,0);
         minimizeb.push(relatedd.length);
         iconmegaphonep *= parseFloat(`${1}`);
         relatedd += `${parseInt(`${iconmegaphonep}`)}`;
      }
      let thumbnailK = minimizeb.length <= 8677401;
      do {
          let imagenomoredatap: Array<any> = [155, 82];
          let vignetteZ: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,97,112,112,115,0),440], [String.fromCharCode(112,114,111,118,105,100,105,110,103,95,52,95,54,53,0),427]]);
          let libfbM = true;
          let imagesz = String.fromCharCode(109,112,99,100,97,116,97,0);
          let iconrightorangeS = String.fromCharCode(116,104,114,111,119,105,110,103,95,122,95,56,49,0);
         minimizeb = [foundB.length];
         imagenomoredatap = [3];
         vignetteZ.set(imagesz, ((libfbM ? 4 : 2)));
         libfbM = (vignetteZ.size + imagenomoredatap.length) >= 100;
         imagesz += `${((libfbM ? 3 : 1) / 2)}`;
         iconrightorangeS += "3";
         if (thumbnailK) {
            break;
         }
      } while ((eyeclosen.includes(minimizeb.length)) && thumbnailK);
      fullW = [(String.fromCharCode(107,0) == leagueu ? (change6 ? 3 : 4) : leagueu.length)];
      if (videobufferloadingK) {
         break;
      }
   } while (videobufferloadingK && (1 == (5 << (Math.min(2, fullW.length))) || fullW.length == 5));
   if ((overlayr - leagueu.length) == 3.67 || 3 == (2 ^ leagueu.length)) {
      leagueu += `${2 | leagueu.length}`;
   }
   let logo7 = change6 ? !change6 : change6;
   do {
      change6 = 42 > sportsH.length || 8.12 > heji7;
      if (logo7) {
         break;
      }
   } while ((change6 && 4 < leagueu.length) && logo7);

        console.log("Error!", err, time);
      }
    };

    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    

    const onSeekGesture = (time: number) => {
      if (disableSeek.current === true) return
      if (currentTime < time) {
        setSeekDirection("configChat");
      } else {
        setSeekDirection("dycreatorSuboutBoot");
      }
      
      directSeekTo(time)
    };


    const directSeekTo = (targetTime: number) => {
      if (disableSeek.current === true) return
      hideSeekProgress()
      
      // const direction = targetTime > currentTime ? 'forward' : 'backward';

      
      

      
      
      

      
      

      
      

      
      
      
      
      
      const newTime = Math.min(Math.max(targetTime, 0), duration); 
      setCurrentTime(newTime);
      if (videoPlayerRef.current && !isNaN(newTime)) {
        videoPlayerRef.current.seek(newTime);
      }
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let mathC = 4;
    let zhengpian5 = String.fromCharCode(110,101,120,116,108,95,53,95,51,51,0);
    let subsN: Map<any, any> = new Map([[String.fromCharCode(120,95,50,95,115,116,101,112,115,105,122,101,0),758], [String.fromCharCode(109,105,110,105,109,117,109,95,103,95,52,55,0),291]]);
    let iconsubssuccessu: Map<any, any> = new Map([[String.fromCharCode(109,95,50,53,95,102,114,97,109,101,100,0),String.fromCharCode(115,108,111,119,95,49,95,49,54,0)], [String.fromCharCode(100,97,115,104,101,110,99,95,122,95,50,57,0),String.fromCharCode(105,95,50,53,95,117,110,105,116,115,0)], [String.fromCharCode(105,95,54,48,95,99,111,110,99,101,97,108,0),String.fromCharCode(104,101,97,100,105,110,103,95,50,95,49,55,0)]]);
    let malaysiaX = 3;
    let componentregistry9 = 1.0;
    let libreactperfloggerjniB: Map<any, any> = new Map([[String.fromCharCode(97,103,97,105,110,115,116,95,120,95,55,49,0),true ], [String.fromCharCode(101,99,114,101,99,111,118,101,114,95,57,95,50,55,0),false ]]);
    let feedbackD = false;
    let handler5 = String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,116,95,54,57,0);
    let cornerkickd = String.fromCharCode(97,118,117,105,95,111,95,55,56,0);
    let animationK = String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,111,95,55,48,0);
   for (let a = 0; a < 1; a++) {
       let dropdownp = 2.0;
       let penaltyshootnogoal4 = 5.0;
       let watchnowbgH = String.fromCharCode(119,95,49,51,95,118,101,99,116,111,114,115,99,111,112,101,0);
       let redscoreballa = 0;
       let iconclosewhitebgv: Array<any> = [388, 180, 396];
          let sans8: Array<any> = [String.fromCharCode(114,97,98,105,110,95,100,95,53,55,0), String.fromCharCode(112,95,50,49,95,105,110,99,108,117,115,105,111,110,0)];
          let chinasameJ = true;
         watchnowbgH = `${watchnowbgH.length - parseInt(`${dropdownp}`)}`;
         sans8 = [sans8.length << (Math.min(Math.abs(1), 1))];
         chinasameJ = sans8.length >= 70;
      for (let u = 0; u < 1; u++) {
         iconclosewhitebgv = [3];
      }
      let dialogx = 8034128 >= redscoreballa;
      do {
         redscoreballa ^= 2;
         if (dialogx) {
            break;
         }
      } while (dialogx && ((iconclosewhitebgv.length ^ redscoreballa) <= 3));
      let znewinterstitialz = watchnowbgH.length <= 7995657;
      do {
          let orientationF = 5.0;
          let libjsijniprofiler1 = 5.0;
          let redscoreballm: Array<any> = [880, 527];
          let static_oB: Array<any> = [980, 295];
         watchnowbgH += "1";
         orientationF /= Math.max(static_oB.length | parseInt(`${libjsijniprofiler1}`), 5);
         libjsijniprofiler1 += parseInt(`${orientationF}`);
         redscoreballm.push(static_oB.length % (Math.max(7, redscoreballm.length)));
         if (znewinterstitialz) {
            break;
         }
      } while (znewinterstitialz && ((2 << (Math.min(3, watchnowbgH.length))) == 3));
         penaltyshootnogoal4 *= 1 << (Math.min(Math.abs(parseInt(`${penaltyshootnogoal4}`)), 1));
          let philippinesh = String.fromCharCode(108,95,52,50,95,100,101,109,97,110,100,0);
          let audiencen = String.fromCharCode(108,95,54,95,117,110,115,97,116,105,115,102,105,101,100,0);
          let phonesharer = 5;
         watchnowbgH += `${philippinesh.length << (Math.min(Math.abs(1), 3))}`;
         philippinesh = `${audiencen.length / 3}`;
         audiencen += `${1 & audiencen.length}`;
         phonesharer >>= Math.min(Math.abs(3), 5);
         penaltyshootnogoal4 -= 2;
          let libfollyv: Map<any, any> = new Map([[String.fromCharCode(99,95,56,52,95,100,115,116,0),true ], [String.fromCharCode(101,95,49,50,95,103,114,101,97,116,101,114,0),false ]]);
          let u_titleD = 1.0;
          let questS = false;
         iconclosewhitebgv = [(watchnowbgH == String.fromCharCode(121,0) ? parseInt(`${penaltyshootnogoal4}`) : watchnowbgH.length)];
         libfollyv.set(`${questS}`, libfollyv.size);
         u_titleD /= Math.max(parseFloat(`${libfollyv.size}`), 1);
      for (let v = 0; v < 2; v++) {
         penaltyshootnogoal4 /= Math.max(redscoreballa % (Math.max(1, watchnowbgH.length)), 1);
      }
         dropdownp += parseFloat(`${parseInt(`${dropdownp}`) >> (Math.min(2, Math.abs(2)))}`);
      if (3.3 >= dropdownp) {
         dropdownp -= parseFloat(`${2}`);
      }
          let iconmoren: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,103,114,111,117,112,95,106,95,56,0),false ], [String.fromCharCode(104,95,52,53,95,115,113,108,105,116,101,0),false ]]);
         dropdownp *= parseFloat(`${iconmoren.size - 3}`);
         redscoreballa >>= Math.min(3, Math.abs(parseInt(`${penaltyshootnogoal4}`)));
      for (let c = 0; c < 3; c++) {
         redscoreballa <<= Math.min(Math.abs(2), 2);
      }
      for (let u = 0; u < 3; u++) {
          let basketballplayerplaceholderk = 3.0;
          let pathf = false;
          let sportC: Array<any> = [926, 388, 343];
          let basketballtrophyn = String.fromCharCode(105,110,99,108,117,100,101,100,95,114,95,57,49,0);
          let backwhiteo: Array<any> = [649, 931, 502];
         redscoreballa <<= Math.min(Math.abs(3 >> (Math.min(Math.abs(parseInt(`${dropdownp}`)), 4))), 2);
         basketballplayerplaceholderk += parseFloat(`${basketballtrophyn.length + 2}`);
         pathf = backwhiteo.length <= sportC.length;
         sportC = [basketballtrophyn.length | parseInt(`${basketballplayerplaceholderk}`)];
         backwhiteo = [sportC.length ^ backwhiteo.length];
      }
      handler5 = `${mathC * libreactperfloggerjniB.size}`;
   }
      componentregistry9 -= parseFloat(`${iconsubssuccessu.size}`);
      cornerkickd = `${malaysiaX ^ handler5.length}`;
   let trophyD = libreactperfloggerjniB.size <= 6866770;
   do {
      libreactperfloggerjniB.set(`${feedbackD}`, handler5.length >> (Math.min(Math.abs(1), 5)));
      if (trophyD) {
         break;
      }
   } while (trophyD && (!feedbackD));
      feedbackD = 67 == animationK.length;
       let twitterC = String.fromCharCode(98,95,55,55,95,100,111,118,101,0);
       let fileZ: Array<any> = [959, 954];
         twitterC = `${fileZ.length / (Math.max(9, twitterC.length))}`;
      let yellowredcardX = twitterC == String.fromCharCode(56,107,120,0);
      do {
          let d_managerU: Array<any> = [241, 0];
         twitterC += `${fileZ.length - d_managerU.length}`;
         if (yellowredcardX) {
            break;
         }
      } while (yellowredcardX && (!twitterC.includes(`${fileZ.length}`)));
      for (let g = 0; g < 3; g++) {
          let orangeclockW = String.fromCharCode(112,111,115,116,101,110,99,111,100,101,95,57,95,51,57,0);
          let notificationc = String.fromCharCode(98,95,54,52,95,109,117,108,116,105,99,97,115,116,0);
          let gradlewf = 3.0;
          let securityx = false;
         fileZ = [notificationc.length & orangeclockW.length];
         orangeclockW = `${(parseInt(`${gradlewf}`) >> (Math.min(5, Math.abs((securityx ? 2 : 1)))))}`;
         notificationc += `${(parseInt(`${gradlewf}`) << (Math.min(4, Math.abs((securityx ? 2 : 4)))))}`;
      }
       let imagenetworkerr9 = true;
         imagenetworkerr9 = twitterC == String.fromCharCode(116,0) || fileZ.length > 29;
         fileZ.push((3 & (imagenetworkerr9 ? 5 : 4)));
      mathC &= cornerkickd.length;
   for (let n = 0; n < 1; n++) {
       let productf = String.fromCharCode(98,95,53,53,95,115,116,114,105,100,0);
       let libjsiw: Map<any, any> = new Map([[String.fromCharCode(116,95,49,57,95,102,97,100,101,0),65], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,111,95,54,54,0),437]]);
         libjsiw = new Map([[`${libjsiw.size}`, (String.fromCharCode(105,0) == productf ? libjsiw.size : productf.length)]]);
      for (let h = 0; h < 3; h++) {
         libjsiw.set(`${productf}`, 3);
      }
       let gesturesp = 3.0;
      while (Array.from(libjsiw.keys()).includes(`${gesturesp}`)) {
          let greenX = 5;
          let matchinactiveD = String.fromCharCode(119,95,51,48,95,114,115,116,110,0);
         gesturesp *= parseFloat(`${productf.length}`);
         greenX &= 3 * matchinactiveD.length;
         matchinactiveD = "3";
         break;
      }
          let basketballdetailsbg2 = String.fromCharCode(115,95,57,54,95,112,111,112,117,108,97,116,101,0);
         productf = `${parseInt(`${gesturesp}`) * libjsiw.size}`;
         basketballdetailsbg2 += `${basketballdetailsbg2.length ^ basketballdetailsbg2.length}`;
         gesturesp -= parseFloat(`${1}`);
      feedbackD = subsN.get(`${componentregistry9}`) == null;
   }
   let inouttargetyellow4 = String.fromCharCode(104,51,116,106,54,0) == cornerkickd;
   do {
      cornerkickd = `${iconsubssuccessu.size * 2}`;
      if (inouttargetyellow4) {
         break;
      }
   } while ((5 >= (1 << (Math.min(1, cornerkickd.length))) || 1 >= (cornerkickd.length << (Math.min(2, Math.abs(mathC))))) && inouttargetyellow4);
   let neonf = zhengpian5.length <= 8200154;
   do {
      zhengpian5 += `${animationK.length / 2}`;
      if (neonf) {
         break;
      }
   } while (neonf && (zhengpian5.length < animationK.length));
   let awayiconS = animationK == String.fromCharCode(116,104,103,100,110,51,107,95,50,48,0);
   do {
       let chinasameW = String.fromCharCode(112,101,114,109,105,116,116,101,100,95,57,95,54,0);
       let injury9 = String.fromCharCode(109,97,120,120,95,113,95,49,57,0);
       let launcherw = false;
         injury9 = `${((launcherw ? 1 : 5))}`;
         chinasameW = "2";
         injury9 = `${injury9.length | 1}`;
      if (!launcherw && injury9.length == 4) {
         launcherw = !launcherw;
      }
          let telemetryj = String.fromCharCode(110,95,51,95,108,101,116,115,0);
          let middlesoundB = false;
          let minimize2 = 0.0;
         chinasameW = `${3 % (Math.max(9, parseInt(`${minimize2}`)))}`;
         telemetryj += `${((middlesoundB ? 5 : 2) ^ 2)}`;
         middlesoundB = (82 == ((middlesoundB ? 82 : telemetryj.length) + telemetryj.length));
         minimize2 /= Math.max(parseFloat(`${telemetryj.length << (Math.min(Math.abs(1), 3))}`), 4);
         injury9 = `${chinasameW.length}`;
      for (let s = 0; s < 1; s++) {
         launcherw = String.fromCharCode(117,0) == chinasameW;
      }
      let layoutT = launcherw ? !launcherw : launcherw;
      do {
          let navigatione = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,100,95,57,53,0);
          let orangetickr: Array<any> = [435, 697, 425];
          let imagenomoredatan = 2;
          let mapbufferP = 3;
          let orangetickP: Array<any> = [417, 739];
         launcherw = !launcherw;
         navigatione = `${navigatione.length}`;
         orangetickr.push(orangetickr.length);
         imagenomoredatan -= 3;
         mapbufferP &= orangetickP.length;
         orangetickP.push(3 >> (Math.min(3, Math.abs(mapbufferP))));
         if (layoutT) {
            break;
         }
      } while (layoutT && (launcherw && 5 <= chinasameW.length));
         launcherw = (89 > (chinasameW.length ^ (!launcherw ? 89 : chinasameW.length)));
      animationK = `${2 + animationK.length}`;
      if (awayiconS) {
         break;
      }
   } while (awayiconS && (animationK.length >= cornerkickd.length));
      componentregistry9 /= Math.max(4, parseFloat(`${iconsubssuccessu.size}`));
   let modelsW = 8540092 >= animationK.length;
   do {
      animationK = `${1 * zhengpian5.length}`;
      if (modelsW) {
         break;
      }
   } while ((3 == animationK.length) && modelsW);
      subsN = new Map([[cornerkickd, animationK.length]]);
   for (let t = 0; t < 1; t++) {
       let emojiJ = false;
       let imagenomoredatau = String.fromCharCode(104,95,50,52,95,115,104,111,114,116,101,114,0);
       let holder9 = String.fromCharCode(108,95,50,55,95,115,104,97,114,112,101,110,105,110,103,0);
       let iconeyeT = String.fromCharCode(114,95,51,95,114,102,102,116,98,0);
       let catalogy = true;
       let classesu = true;
      let overu = holder9.length >= 8595838;
      do {
          let mode4 = 0.0;
          let sellmathbackground1 = 0.0;
          let bgvipsport8: Map<any, any> = new Map([[String.fromCharCode(118,95,52,57,95,115,104,97,114,97,98,108,101,0),735], [String.fromCharCode(97,108,112,104,97,108,101,115,115,95,98,95,55,56,0),471]]);
          let arrowrightwithtailn = String.fromCharCode(117,110,108,111,97,100,95,102,95,50,49,0);
          let chinaw = 1;
         holder9 = `${iconeyeT.length % (Math.max(2, 8))}`;
         mode4 /= Math.max(1, chinaw);
         sellmathbackground1 += parseFloat(`${parseInt(`${mode4}`) | 3}`);
         bgvipsport8 = new Map([[`${sellmathbackground1}`, (arrowrightwithtailn == String.fromCharCode(81,0) ? parseInt(`${sellmathbackground1}`) : arrowrightwithtailn.length)]]);
         chinaw %= Math.max(arrowrightwithtailn.length * 1, 2);
         if (overu) {
            break;
         }
      } while (overu && (iconeyeT == holder9));
          let textlayoutmanagerH = String.fromCharCode(108,115,112,115,95,102,95,55,49,0);
         imagenomoredatau = `${((classesu ? 1 : 5))}`;
         textlayoutmanagerH = `${2 * textlayoutmanagerH.length}`;
         catalogy = (8 <= (iconeyeT.length << (Math.min(3, Math.abs((!catalogy ? iconeyeT.length : 8))))));
         catalogy = !classesu;
         catalogy = (imagenomoredatau.length ^ holder9.length) > 71;
         catalogy = iconeyeT.length > 99 && holder9 == String.fromCharCode(84,0);
          let dangerC = false;
         imagenomoredatau += `${((classesu ? 5 : 3) % 2)}`;
         catalogy = ((iconeyeT.length << (Math.min(5, Math.abs((!catalogy ? iconeyeT.length : 76))))) == 76);
      let indicatorq = 5297395 <= iconeyeT.length;
      do {
         iconeyeT = `${imagenomoredatau.length}`;
         if (indicatorq) {
            break;
         }
      } while ((!emojiJ) && indicatorq);
          let download2 = false;
         catalogy = classesu;
         download2 = !download2;
       let jnewsshareN = String.fromCharCode(114,119,110,100,95,115,95,50,49,0);
      malaysiaX *= (handler5 == String.fromCharCode(70,0) ? handler5.length : iconsubssuccessu.size);
   }
      malaysiaX >>= Math.min(5, Math.abs((String.fromCharCode(53,0) == cornerkickd ? libreactperfloggerjniB.size : cornerkickd.length)));
   if (1 <= animationK.length) {
       let libimagepipelineL: Map<any, any> = new Map([[String.fromCharCode(97,98,115,116,95,113,95,54,48,0),939], [String.fromCharCode(115,110,111,119,100,97,116,97,95,98,95,50,55,0),170], [String.fromCharCode(111,98,115,101,114,118,105,110,103,95,106,95,50,54,0),581]]);
       let sideW: Array<any> = [157, 52];
       let playlist6 = 5.0;
       let orangeuparrow_ = String.fromCharCode(97,95,50,54,95,102,108,111,97,116,105,110,103,0);
         playlist6 *= parseFloat(`${3 / (Math.max(10, libimagepipelineL.size))}`);
      if (Array.from(libimagepipelineL.values()).includes(sideW.length)) {
         libimagepipelineL = new Map([[`${sideW.length}`, (String.fromCharCode(76,0) == orangeuparrow_ ? sideW.length : orangeuparrow_.length)]]);
      }
      for (let o = 0; o < 1; o++) {
         playlist6 *= parseFloat(`${parseInt(`${playlist6}`) / (Math.max(9, libimagepipelineL.size))}`);
      }
      if ((1 / (Math.max(10, libimagepipelineL.size))) <= 1 && 1 <= (1 / (Math.max(10, libimagepipelineL.size)))) {
          let libavdevice8 = String.fromCharCode(119,95,53,56,95,109,97,99,104,0);
          let encryptorc = true;
          let application1 = 2;
          let reddownarrowC = 2;
         libimagepipelineL = new Map([[libavdevice8, application1 ^ libavdevice8.length]]);
         encryptorc = !encryptorc;
         application1 %= Math.max(3, 2 & reddownarrowC);
         reddownarrowC ^= ((encryptorc ? 5 : 3) << (Math.min(Math.abs(reddownarrowC), 2)));
      }
         playlist6 -= parseFloat(`${sideW.length & orangeuparrow_.length}`);
      let modala = 7212921 <= sideW.length;
      do {
         sideW = [1 ^ parseInt(`${playlist6}`)];
         if (modala) {
            break;
         }
      } while (modala && (Array.from(libimagepipelineL.values()).includes(sideW.length)));
      for (let n = 0; n < 3; n++) {
          let iconshareu = true;
          let turnQ = String.fromCharCode(99,95,52,54,95,112,117,108,115,101,115,0);
          let checkboxV = 3;
          let mbbidz = String.fromCharCode(111,95,51,54,95,97,110,105,109,97,116,101,0);
          let eact5 = String.fromCharCode(122,95,50,56,95,100,118,100,97,116,97,0);
         libimagepipelineL.set(turnQ, turnQ.length | 3);
         iconshareu = checkboxV >= 94;
         checkboxV -= checkboxV;
         mbbidz = "3";
         eact5 = "1";
      }
         sideW.push(1);
          let shrinkl = false;
          let orangeticka = String.fromCharCode(115,110,111,119,0);
         libimagepipelineL = new Map([[`${libimagepipelineL.size}`, 1]]);
         shrinkl = orangeticka.endsWith(`${shrinkl}`);
         orangeticka += `${orangeticka.length % 1}`;
       let buttonj = String.fromCharCode(102,95,53,57,95,103,111,108,111,109,98,0);
         sideW = [libimagepipelineL.size - 2];
      let libcrashsdkV = buttonj == String.fromCharCode(50,111,110,108,54,101,95,0);
      do {
         buttonj = "1";
         if (libcrashsdkV) {
            break;
         }
      } while (libcrashsdkV && (3.82 >= (playlist6 / 5.71)));
      malaysiaX /= Math.max(5, 2 & subsN.size);
   }
      cornerkickd += "1";
       let share6 = String.fromCharCode(106,95,53,56,95,99,111,110,118,101,114,115,97,116,105,111,110,0);
       let assetso: Array<any> = [String.fromCharCode(113,117,101,114,105,101,115,0), String.fromCharCode(115,111,98,105,110,100,95,104,95,57,49,0)];
       let update_u2z = true;
          let team_ = 5.0;
         assetso.push(((update_u2z ? 3 : 3)));
         team_ /= Math.max(3, parseFloat(`${parseInt(`${team_}`) / 3}`));
         update_u2z = share6.length <= 89;
         share6 += `${share6.length}`;
       let regengz = 4.0;
          let settingC: Map<any, any> = new Map([[String.fromCharCode(102,95,53,51,95,115,117,112,112,111,114,116,0),true ], [String.fromCharCode(115,104,111,114,116,101,114,95,99,95,57,57,0),true ], [String.fromCharCode(114,95,49,50,95,99,111,112,105,101,115,0),true ]]);
          let canvas5 = 0;
         share6 = "1";
         settingC.set(`${canvas5}`, 3);
         canvas5 |= settingC.size;
         regengz *= ((update_u2z ? 4 : 2) / (Math.max(2, parseInt(`${regengz}`))));
       let containerC = String.fromCharCode(99,95,50,54,95,118,111,105,112,0);
         update_u2z = containerC.length == 75;
       let stationss = String.fromCharCode(110,117,109,98,105,116,115,95,53,95,55,0);
       let pushf = String.fromCharCode(115,95,57,55,95,99,108,105,99,107,0);
      componentregistry9 -= parseFloat(`${3 >> (Math.min(3, Math.abs(malaysiaX)))}`);
       let u_lock_ = String.fromCharCode(117,100,105,111,95,104,95,49,55,0);
       let bingb = String.fromCharCode(116,95,49,52,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0);
       let descW = String.fromCharCode(105,110,118,111,108,118,101,100,95,115,95,50,54,0);
         bingb += `${3 - bingb.length}`;
         u_lock_ += `${u_lock_.length / (Math.max(bingb.length, 6))}`;
         bingb += `${descW.length | 1}`;
         bingb += `${bingb.length}`;
         bingb += "1";
      while (bingb.length <= 3 && descW.length <= 3) {
          let viewerl = false;
          let switch_qdd = 1.0;
          let fullscreenmaxG = String.fromCharCode(110,95,52,56,95,112,111,111,108,0);
          let controlP: Array<any> = [735, 118, 355];
         descW = `${bingb.length}`;
         viewerl = !viewerl;
         switch_qdd -= parseFloat(`${controlP.length >> (Math.min(Math.abs(3), 3))}`);
         fullscreenmaxG = `${(String.fromCharCode(89,0) == fullscreenmaxG ? controlP.length : fullscreenmaxG.length)}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
         bingb = `${(bingb == String.fromCharCode(118,0) ? u_lock_.length : bingb.length)}`;
      }
       let emptyd = 5.0;
       let moviest = 2.0;
      for (let x = 0; x < 1; x++) {
         descW = `${parseInt(`${emptyd}`)}`;
      }
      iconsubssuccessu = new Map([[`${iconsubssuccessu.size}`, handler5.length >> (Math.min(5, Math.abs(iconsubssuccessu.size)))]]);
   for (let o = 0; o < 1; o++) {
      zhengpian5 += `${zhengpian5.length}`;
   }
   for (let z = 0; z < 1; z++) {
      subsN = new Map([[zhengpian5, cornerkickd.length << (Math.min(Math.abs(3), 4))]]);
   }
   let nativemoduleq = 7295664 >= malaysiaX;
   do {
       let libavdeviceN = false;
       let iconstar9 = 2.0;
       let homeiconE: Map<any, any> = new Map([[String.fromCharCode(118,95,53,48,0),false ], [String.fromCharCode(108,95,54,51,95,114,116,109,100,0),true ]]);
       let buildY = String.fromCharCode(97,99,116,97,98,95,118,95,56,55,0);
       let robotot = 4;
         buildY = `${3 % (Math.max(parseInt(`${iconstar9}`), 4))}`;
         homeiconE.set(buildY, (String.fromCharCode(84,0) == buildY ? robotot : buildY.length));
          let whistleorangeg = 5.0;
          let shareblackn = 2;
         libavdeviceN = homeiconE.get(`${iconstar9}`) == null;
         whistleorangeg /= Math.max(2, 3);
         shareblackn ^= 3 + shareblackn;
         iconstar9 /= Math.max(parseFloat(`${homeiconE.size << (Math.min(Math.abs(1), 2))}`), 2);
      if ((iconstar9 / 5.65) < 5.60) {
          let rocketS = 5;
         iconstar9 /= Math.max(2, parseFloat(`${3 & buildY.length}`));
         rocketS <<= Math.min(Math.abs(1), 2);
      }
       let flagv = String.fromCharCode(105,110,115,101,114,116,115,95,116,95,54,55,0);
         robotot |= homeiconE.size >> (Math.min(Math.abs(3), 3));
      for (let b = 0; b < 2; b++) {
         buildY += "1";
      }
         iconstar9 -= parseFloat(`${homeiconE.size}`);
         iconstar9 *= parseFloat(`${flagv.length / (Math.max(2, 1))}`);
         libavdeviceN = (buildY.length << (Math.min(4, Math.abs(homeiconE.size)))) <= 94;
      malaysiaX ^= 2 ^ cornerkickd.length;
      if (nativemoduleq) {
         break;
      }
   } while ((componentregistry9 == malaysiaX) && nativemoduleq);
       let sheet7 = false;
       let componentD: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,105,110,103,95,108,95,57,50,0),454], [String.fromCharCode(102,95,51,52,95,112,114,101,100,101,99,111,100,101,0),546], [String.fromCharCode(104,95,54,54,95,100,111,119,110,108,111,97,100,105,110,103,0),969]]);
       let sentryx = 3.0;
          let latnj: Map<any, any> = new Map([[String.fromCharCode(111,95,55,54,95,112,117,98,108,105,99,107,101,121,115,0),String.fromCharCode(104,101,97,114,116,95,105,95,52,48,0)], [String.fromCharCode(99,111,110,116,101,110,116,115,95,110,95,57,55,0),String.fromCharCode(102,117,122,122,95,55,95,49,48,48,0)]]);
          let whiteanimationlivev = true;
         componentD = new Map([[`${whiteanimationlivev}`, ((whiteanimationlivev ? 5 : 2))]]);
         latnj.set(`${latnj.size}`, latnj.size);
          let borderlessx = String.fromCharCode(100,95,57,51,95,102,116,115,116,111,107,0);
         componentD.set(`${sentryx}`, ((sheet7 ? 3 : 3) * parseInt(`${sentryx}`)));
         borderlessx = `${(String.fromCharCode(106,0) == borderlessx ? borderlessx.length : borderlessx.length)}`;
         componentD.set(`${sentryx}`, parseInt(`${sentryx}`) ^ componentD.size);
          let suggestionL = 1.0;
          let libreactperfloggerjnih = String.fromCharCode(122,95,55,54,95,112,111,119,101,114,0);
         sentryx *= parseFloat(`${parseInt(`${suggestionL}`) / 2}`);
         suggestionL -= libreactperfloggerjnih.length;
         libreactperfloggerjnih = `${libreactperfloggerjnih.length}`;
       let indicatorx = String.fromCharCode(97,95,56,55,95,102,111,114,98,105,100,100,101,110,0);
       let subse = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,57,95,49,56,0);
          let sellm = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,50,95,56,49,0);
         sentryx += parseFloat(`${1}`);
         sellm += `${3 << (Math.min(1, sellm.length))}`;
      let graphicsk = sheet7 ? !sheet7 : sheet7;
      do {
          let default_5co = String.fromCharCode(117,95,50,55,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
          let vignetteu = String.fromCharCode(122,95,50,51,95,121,111,117,0);
          let submit5 = 4;
          let libapminsightaX: Map<any, any> = new Map([[String.fromCharCode(112,99,109,117,95,56,95,56,49,0),416], [String.fromCharCode(110,95,49,56,95,114,101,111,114,100,101,114,97,98,108,101,0),996], [String.fromCharCode(107,95,54,57,95,116,97,103,98,105,116,0),311]]);
         sheet7 = indicatorx.length >= vignetteu.length;
         default_5co = `${submit5 % 2}`;
         vignetteu = `${3 >> (Math.min(5, Math.abs(submit5)))}`;
         libapminsightaX = new Map([[`${libapminsightaX.size}`, 2]]);
         if (graphicsk) {
            break;
         }
      } while (graphicsk && ((5 << (Math.min(1, Math.abs(componentD.size)))) >= 3));
       let textlayoutmanagerI = 3.0;
       let controlX = 0.0;
      let informationN = 5040097.0 >= controlX;
      do {
         controlX *= parseInt(`${controlX}`) / (Math.max(componentD.size, 6));
         if (informationN) {
            break;
         }
      } while (informationN && (5.98 >= controlX));
      zhengpian5 += `${mathC}`;
   for (let d = 0; d < 3; d++) {
      zhengpian5 = "3";
   }
   if (handler5 != animationK) {
       let basketballmatchdetailbgh: Array<any> = [String.fromCharCode(115,97,109,105,95,117,95,56,53,0), String.fromCharCode(111,95,51,49,95,105,105,114,102,105,108,116,101,114,0)];
      for (let k = 0; k < 1; k++) {
         basketballmatchdetailbgh = [2 ^ basketballmatchdetailbgh.length];
      }
         basketballmatchdetailbgh.push(1 ^ basketballmatchdetailbgh.length);
      while (3 <= (3 / (Math.max(8, basketballmatchdetailbgh.length)))) {
         basketballmatchdetailbgh = [basketballmatchdetailbgh.length * basketballmatchdetailbgh.length];
         break;
      }
      animationK += `${mathC << (Math.min(Math.abs(1), 2))}`;
   }

        console.error("crash here");
      }

      bufferRef.current = false;
    };

    const onSkip = (time: any) => {
      if (disableSeek.current === true) return

      if (videoPlayerRef?.current) {
        if (time > 0 && isLastForward == false) {
          setIsLastForward(true);
          accumulatedSkip.current = 0;
        }

        if (time < 0 && isLastForward == true) {
          setIsLastForward(false);
          accumulatedSkip.current = 0;
        }

        accumulatedSkip.current += time;
        let currentTime = currentTimeRef.current + time;
        currentTime = Math.max(0, currentTime);
        currentTimeRef.current = currentTime;
        videoPlayerRef.current.seek(currentTime);
        setCurrentTime(currentTime);
      }
    };

    const onTogglePlayPause = () => {
       let actionf: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,99,95,57,57,0),224], [String.fromCharCode(120,95,57,54,95,111,110,115,101,116,0),640], [String.fromCharCode(97,117,116,104,111,114,105,122,101,95,122,95,49,0),918]]);
    let androidG = 4;
    let downloadU = 3.0;
    let redcirclebgF = true;
    let video8 = String.fromCharCode(121,95,57,51,95,109,117,108,116,105,115,101,108,101,99,116,105,111,110,0);
    let unewsC = String.fromCharCode(110,95,55,54,95,99,104,97,110,110,101,108,109,97,112,0);
    let shareblackF = 1.0;
    let audienceA: Array<any> = [194, 419];
    let castp = String.fromCharCode(105,95,54,50,95,99,111,109,98,105,0);
    let reacta = 0.0;
      redcirclebgF = (((!redcirclebgF ? actionf.size : 7) % (Math.max(5, actionf.size))) == 51);
   if (parseInt(`${downloadU}`) > actionf.size) {
      downloadU *= parseFloat(`${parseInt(`${shareblackF}`)}`);
   }
      shareblackF *= 2;
       let gmailx = false;
       let chinasameH: Map<any, any> = new Map([[String.fromCharCode(108,95,54,48,95,100,101,110,111,105,115,105,110,103,0),355], [String.fromCharCode(105,95,56,56,95,99,111,110,110,101,99,116,101,100,0),638], [String.fromCharCode(104,95,49,48,95,111,114,105,103,105,110,97,108,0),480]]);
       let macau8: Map<any, any> = new Map([[String.fromCharCode(109,95,54,95,108,97,115,116,110,111,100,101,0),String.fromCharCode(98,108,101,110,100,95,114,95,54,50,0)], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,108,95,56,57,0),String.fromCharCode(103,114,97,112,104,105,99,115,95,48,95,54,54,0)]]);
      if (gmailx) {
          let nbatrophy2 = String.fromCharCode(110,117,109,101,114,97,108,115,95,113,95,57,0);
          let weather_ = 5;
          let iconsubssuccessP = true;
         gmailx = chinasameH.size >= 79 && gmailx;
         nbatrophy2 = "3";
         weather_ += weather_ - 1;
         iconsubssuccessP = !iconsubssuccessP || nbatrophy2.length == 89;
      }
          let yellowcirclebgr = 4.0;
         chinasameH.set(`${gmailx}`, parseInt(`${yellowcirclebgr}`) - 1);
      unewsC += `${unewsC.length ^ video8.length}`;
   let icondownimgw = shareblackF >= 8324353.0;
   do {
       let memberships = 5.0;
      for (let l = 0; l < 3; l++) {
         memberships *= parseInt(`${memberships}`);
      }
      if ((1.94 + memberships) == 5.59 && 2.62 == (1.94 + memberships)) {
         memberships /= Math.max(4, parseInt(`${memberships}`));
      }
         memberships += parseInt(`${memberships}`) & 1;
      shareblackF /= Math.max(1 ^ parseInt(`${shareblackF}`), 3);
      if (icondownimgw) {
         break;
      }
   } while (icondownimgw && (shareblackF <= downloadU));
       let privilege_ = 4.0;
         privilege_ *= parseInt(`${privilege_}`) / (Math.max(1, parseInt(`${privilege_}`)));
         privilege_ += parseInt(`${privilege_}`);
       let calendarK = 3.0;
       let predictionactiver = 1.0;
      video8 += `${parseInt(`${privilege_}`)}`;
   for (let d = 0; d < 3; d++) {
      audienceA = [parseInt(`${shareblackF}`) & parseInt(`${downloadU}`)];
   }
       let suggestiona = 1.0;
         suggestiona -= parseInt(`${suggestiona}`) * parseInt(`${suggestiona}`);
      let middleA = suggestiona >= 7327382.0;
      do {
         suggestiona -= 1;
         if (middleA) {
            break;
         }
      } while (middleA && ((suggestiona * suggestiona) <= 2.29 && (2.29 * suggestiona) <= 1.45));
      while ((2.94 - suggestiona) >= 3.11) {
         suggestiona += parseInt(`${suggestiona}`) ^ parseInt(`${suggestiona}`);
         break;
      }
      downloadU /= Math.max(parseFloat(`${1}`), 3);
   let shrunkM = 5524168 <= actionf.size;
   do {
      actionf.set(video8, 3 + parseInt(`${shareblackF}`));
      if (shrunkM) {
         break;
      }
   } while (((actionf.size << (Math.min(Math.abs(4), 4))) > 5 || 4 > (parseInt(`${shareblackF}`) - actionf.size)) && shrunkM);
   while (1.90 <= shareblackF) {
      shareblackF /= Math.max(1, 3);
      break;
   }
   if (video8.length <= 3) {
      video8 += `${3 * audienceA.length}`;
   }
   if (parseInt(`${shareblackF}`) < audienceA.length) {
      audienceA.push(castp.length);
   }
   for (let p = 0; p < 1; p++) {
       let v_viewx = true;
       let inouttargetred6: Map<any, any> = new Map([[String.fromCharCode(103,95,54,51,95,105,110,102,111,114,109,0),576], [String.fromCharCode(97,95,54,52,95,114,101,118,97,108,105,100,97,116,105,111,110,0),499]]);
       let suboutn: Map<any, any> = new Map([[String.fromCharCode(120,118,105,100,95,112,95,51,54,0),31], [String.fromCharCode(110,95,57,48,95,102,116,118,109,110,111,100,101,0),109]]);
          let short_i8e = String.fromCharCode(101,98,109,108,110,117,109,95,53,95,54,50,0);
          let mappingr = 5.0;
          let collectionF = 2.0;
         v_viewx = inouttargetred6.size < 94;
         short_i8e += `${parseInt(`${collectionF}`) * 1}`;
         mappingr *= parseFloat(`${parseInt(`${collectionF}`)}`);
         suboutn = new Map([[`${inouttargetred6.size}`, inouttargetred6.size]]);
       let mbbidx = 0.0;
          let zhengpianH = true;
          let tail8 = String.fromCharCode(106,95,53,48,95,111,112,101,110,115,115,108,99,111,110,102,0);
          let emptyF: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,95,50,95,56,0),375], [String.fromCharCode(101,95,54,55,95,115,99,97,110,116,97,98,108,101,115,0),225], [String.fromCharCode(105,111,115,116,114,101,97,109,95,51,95,53,57,0),299]]);
         suboutn = new Map([[`${emptyF.size}`, (emptyF.size * (zhengpianH ? 4 : 1))]]);
         zhengpianH = 80 < tail8.length;
         tail8 += `${(String.fromCharCode(95,0) == tail8 ? tail8.length : tail8.length)}`;
       let light3: Array<any> = [String.fromCharCode(97,95,57,49,95,116,119,105,116,99,104,0), String.fromCharCode(104,97,110,110,101,108,95,100,95,53,52,0), String.fromCharCode(114,101,115,117,108,116,115,95,106,95,56,53,0)];
      redcirclebgF = (actionf.size / (Math.max(unewsC.length, 2))) == 39;
   }
       let brightnessx = String.fromCharCode(105,95,53,52,95,110,101,116,101,114,114,110,111,0);
       let showmoreW = String.fromCharCode(108,95,53,48,95,108,97,122,105,108,121,0);
      if (brightnessx.length > showmoreW.length) {
         brightnessx = `${brightnessx.length + 3}`;
      }
         showmoreW += `${showmoreW.length}`;
         brightnessx = `${brightnessx.length}`;
      let rocket0 = brightnessx == String.fromCharCode(55,48,99,97,115,117,100,112,95,108,0);
      do {
         brightnessx = `${brightnessx.length}`;
         if (rocket0) {
            break;
         }
      } while (rocket0 && (4 <= brightnessx.length));
       let iconnointernetm: Map<any, any> = new Map([[String.fromCharCode(112,95,48,95,107,112,115,0),362], [String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,114,95,52,56,0),126]]);
       let trophyX: Map<any, any> = new Map([[String.fromCharCode(116,95,52,51,95,109,115,109,112,101,103,0),true ], [String.fromCharCode(108,95,56,56,95,97,117,103,109,101,110,116,97,116,105,111,110,0),true ], [String.fromCharCode(107,95,53,48,95,118,97,100,107,104,122,0),true ]]);
      if (!Array.from(iconnointernetm.keys()).includes(`${trophyX.size}`)) {
          let kick3 = String.fromCharCode(112,114,111,109,111,116,101,100,95,54,95,49,54,0);
          let helperj = String.fromCharCode(108,95,53,54,95,112,97,114,97,109,115,0);
          let contextc = 3.0;
         iconnointernetm.set(`${contextc}`, parseInt(`${contextc}`));
         kick3 = `${helperj.length | 2}`;
         helperj += `${kick3.length}`;
      }
      video8 = `${parseInt(`${shareblackF}`)}`;
   let awayplayer9 = 9180413.0 <= downloadU;
   do {
      downloadU += parseFloat(`${parseInt(`${reacta}`)}`);
      if (awayplayer9) {
         break;
      }
   } while ((5.61 < (reacta + 4)) && awayplayer9);
   while ((reacta - 4.77) <= 1.38 || (reacta - 4.77) <= 2.94) {
       let securityb = String.fromCharCode(115,95,55,57,95,109,97,110,121,0);
       let eyeclose6 = 0;
       let homeplayerF = String.fromCharCode(108,95,49,54,95,102,111,114,109,97,116,116,101,114,115,0);
       let popupM = 0;
         eyeclose6 <<= Math.min(4, Math.abs(securityb.length / 1));
      if (!securityb.endsWith(`${popupM}`)) {
          let liveendmodallogo_: Array<any> = [341, 924];
          let switch_nH = String.fromCharCode(100,101,99,108,116,121,112,101,95,55,95,51,55,0);
          let sinaG = 5.0;
         securityb = `${1 ^ securityb.length}`;
         liveendmodallogo_ = [parseInt(`${sinaG}`)];
         switch_nH += `${liveendmodallogo_.length % (Math.max(switch_nH.length, 10))}`;
         sinaG *= parseFloat(`${parseInt(`${sinaG}`) >> (Math.min(switch_nH.length, 2))}`);
      }
      while ((eyeclose6 * popupM) <= 3 && (3 * popupM) <= 4) {
         popupM >>= Math.min(Math.abs(1), 1);
         break;
      }
         securityb = `${3 >> (Math.min(1, securityb.length))}`;
       let pointF: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,114,101,112,108,97,99,101,115,0),false ], [String.fromCharCode(105,95,51,50,95,97,112,112,101,110,100,99,104,97,114,0),true ], [String.fromCharCode(105,110,115,116,97,110,99,101,95,48,95,49,52,0),true ]]);
       let iconarrowrightwhitee = String.fromCharCode(110,95,50,50,95,112,97,117,115,101,0);
       let playercommonW = String.fromCharCode(112,111,111,108,114,101,102,95,55,95,55,55,0);
       let foregroundg = String.fromCharCode(108,111,115,101,95,52,95,53,50,0);
       let profileinactiver = String.fromCharCode(116,95,50,55,95,102,111,108,108,111,119,101,114,115,0);
      for (let a = 0; a < 2; a++) {
         securityb = `${playercommonW.length | 1}`;
      }
          let chatJ = 5.0;
         foregroundg = `${foregroundg.length - 2}`;
         chatJ -= parseFloat(`${parseInt(`${chatJ}`)}`);
      while (!playercommonW.endsWith(`${foregroundg.length}`)) {
          let chinasamez = String.fromCharCode(108,105,115,116,105,110,103,95,97,95,49,54,0);
         playercommonW += `${1 / (Math.max(1, iconarrowrightwhitee.length))}`;
         chinasamez = `${chinasamez.length >> (Math.min(Math.abs(2), 2))}`;
         break;
      }
       let whistleorangem = 4.0;
      if (iconarrowrightwhitee.length == homeplayerF.length) {
          let robotoa = 0.0;
         homeplayerF += `${parseInt(`${whistleorangem}`)}`;
         robotoa *= parseFloat(`${2}`);
      }
      reacta += popupM & eyeclose6;
      break;
   }
      downloadU *= parseFloat(`${unewsC.length}`);
      shareblackF -= parseInt(`${reacta}`);

      setIsPaused(!isPaused);
    };

    const hideSeekProgress = useCallback(
      debounce(() => setSeekDirection("none"), 300),
      []
    );

    const changeEpisodeAndPlay = (ep: any) => {
      setIsPaused(true);
      onEpisodeChange(ep);

      setTimeout(() => {
        setIsPaused(false);
      }, 1000);
    };

    const getNextEpisode = () => {
       let typeso = 0.0;
    let side5 = 0;
    let page3 = 1.0;
    let plash5 = String.fromCharCode(113,95,53,51,95,105,110,115,101,114,116,101,100,0);
    let tooltipsK = String.fromCharCode(97,115,98,100,95,98,95,54,0);
    let embed0 = 2.0;
    let whitetickZ = String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,122,95,51,48,0);
    let roboto5 = false;
    let episodesZ = String.fromCharCode(102,95,52,56,95,115,97,108,116,108,101,110,0);
    let headerr = String.fromCharCode(104,95,52,48,95,101,99,111,109,112,114,101,115,115,111,114,0);
    let iconviewert = String.fromCharCode(103,114,101,121,95,108,95,55,50,0);
    let friends1 = String.fromCharCode(112,95,56,52,95,116,105,109,101,122,111,110,101,0);
    let statsU: Array<any> = [601, 696];
      plash5 += "1 - side5";
   if (page3 <= 4.98 && 2.73 <= (4.98 * page3)) {
      roboto5 = whitetickZ == iconviewert;
   }
      plash5 = "3";
   if (roboto5) {
      roboto5 = 35.81 < typeso;
   }
       let runtimej: Array<any> = [String.fromCharCode(119,95,51,52,95,112,105,112,101,108,111,115,115,0), String.fromCharCode(112,105,110,110,101,114,95,99,95,53,52,0)];
         runtimej = [runtimej.length];
       let iconsharefriends7 = String.fromCharCode(97,95,55,50,95,100,111,109,97,105,110,115,0);
         runtimej.push((iconsharefriends7 == String.fromCharCode(80,0) ? runtimej.length : iconsharefriends7.length));
      side5 >>= Math.min(4, Math.abs(side5 + 3));
   let guideC = 5563636 >= plash5.length;
   do {
      plash5 += `${whitetickZ.length * 1}`;
      if (guideC) {
         break;
      }
   } while ((episodesZ != plash5) && guideC);
      typeso *= (parseFloat(`${String.fromCharCode(71,0) == tooltipsK ? tooltipsK.length : plash5.length}`));
   for (let o = 0; o < 1; o++) {
       let pathk = String.fromCharCode(116,105,109,101,122,111,110,101,95,51,95,51,0);
       let current8 = String.fromCharCode(105,95,53,51,95,97,100,108,101,114,0);
       let target7 = 0.0;
          let turn0: Array<any> = [String.fromCharCode(108,111,99,97,108,95,107,95,50,54,0), String.fromCharCode(104,95,49,48,95,102,114,105,101,110,100,108,121,0)];
         current8 = "1";
         turn0.push(3);
       let libtobj = String.fromCharCode(114,101,97,108,108,111,99,97,116,101,95,110,95,54,53,0);
         libtobj = `${pathk.length}`;
          let videocommonb = String.fromCharCode(116,114,97,110,95,115,95,51,50,0);
         target7 *= (String.fromCharCode(104,0) == libtobj ? libtobj.length : parseInt(`${target7}`));
         videocommonb = "1";
      for (let e = 0; e < 1; e++) {
         target7 *= pathk.length;
      }
      roboto5 = !roboto5;
   }
       let phonee: Map<any, any> = new Map([[String.fromCharCode(119,95,53,52,95,101,114,105,97,108,105,122,97,116,105,111,110,0),String.fromCharCode(99,114,97,115,104,101,100,95,51,95,52,0)], [String.fromCharCode(98,95,53,48,95,116,119,105,100,100,108,101,115,0),String.fromCharCode(108,97,116,101,115,116,95,106,95,56,50,0)]]);
       let defaultlogor = false;
       let statisticsactivec = 1.0;
      if (defaultlogor) {
         defaultlogor = statisticsactivec < 28.59;
      }
      while (4 <= (phonee.size << (Math.min(Math.abs(1), 3))) || phonee.size <= 1) {
         phonee = new Map([[`${defaultlogor}`, (parseInt(`${statisticsactivec}`) ^ (defaultlogor ? 5 : 2))]]);
         break;
      }
          let y_title8 = 3.0;
         defaultlogor = phonee.size > parseInt(`${statisticsactivec}`);
         y_title8 *= parseInt(`${y_title8}`);
      while (2.78 <= (statisticsactivec + 2.26)) {
         statisticsactivec += phonee.size;
         break;
      }
          let chartD: Map<any, any> = new Map([[String.fromCharCode(98,119,114,105,116,101,95,98,95,52,50,0),String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,122,95,56,57,0)], [String.fromCharCode(103,114,97,99,101,95,98,95,54,55,0),String.fromCharCode(115,99,111,114,101,95,104,95,50,55,0)]]);
          let libavformaty = 2;
          let fnewsT = false;
         defaultlogor = defaultlogor || chartD.size >= 62;
         chartD.set(`${fnewsT}`, (libavformaty << (Math.min(4, Math.abs((fnewsT ? 3 : 1))))));
         libavformaty &= 2;
         phonee = new Map([[`${phonee.size}`, 3 | phonee.size]]);
          let benefitk = true;
          let helper5 = 3.0;
         phonee.set(`${benefitk}`, ((defaultlogor ? 2 : 5)));
         helper5 -= parseInt(`${helper5}`);
         defaultlogor = phonee.size > parseInt(`${statisticsactivec}`);
         phonee = new Map([[`${defaultlogor}`, (parseInt(`${statisticsactivec}`) >> (Math.min(5, Math.abs((defaultlogor ? 4 : 4)))))]]);
      plash5 += "2";
   for (let u = 0; u < 2; u++) {
      page3 *= ((roboto5 ? 5 : 5) ^ parseInt(`${page3}`));
   }
      headerr = `${plash5.length - tooltipsK.length}`;

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

      iconviewert += `${(String.fromCharCode(70,0) == plash5 ? plash5.length : side5)}`;
       let watchF = false;
       let redscoreballn: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,101,100,95,118,95,54,54,0),341], [String.fromCharCode(116,97,112,101,95,54,95,50,0),966], [String.fromCharCode(114,101,97,100,121,95,119,95,50,50,0),222]]);
      while ((redscoreballn.size / 5) > 3) {
         redscoreballn.set(`${watchF}`, ((watchF ? 2 : 3) % 2));
         break;
      }
         watchF = !watchF;
          let refreshR = 4;
          let redirectn = String.fromCharCode(102,95,52,56,95,99,104,97,112,116,101,114,115,0);
          let iconadslinkU = String.fromCharCode(109,97,102,113,95,55,95,51,54,0);
         watchF = iconadslinkU.length <= 40;
         refreshR /= Math.max(refreshR, 5);
         redirectn = "3";
         iconadslinkU = `${(String.fromCharCode(80,0) == redirectn ? refreshR : redirectn.length)}`;
         watchF = !watchF;
      for (let t = 0; t < 1; t++) {
          let homeicon2 = String.fromCharCode(114,97,116,101,115,95,57,95,53,57,0);
          let awayplayerm = 3.0;
          let defaultroombg5 = String.fromCharCode(117,95,52,51,0);
         redscoreballn.set(`${watchF}`, (redscoreballn.size - (watchF ? 1 : 4)));
         homeicon2 = `${parseInt(`${awayplayerm}`) & defaultroombg5.length}`;
         awayplayerm += homeicon2.length | parseInt(`${awayplayerm}`);
         defaultroombg5 += `${(homeicon2 == String.fromCharCode(110,0) ? homeicon2.length : parseInt(`${awayplayerm}`))}`;
      }
      if ((4 ^ redscoreballn.size) <= 5) {
          let sliderl: Array<any> = [447, 233, 762];
         watchF = null == redscoreballn.get(`${watchF}`);
         sliderl = [sliderl.length >> (Math.min(Math.abs(3), 1))];
      }
      typeso *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${embed0}`)), 5))}`);
   if (page3 >= 1.1) {
      page3 /= Math.max(2, ((roboto5 ? 4 : 2) | parseInt(`${embed0}`)));
   }
       let xvod0 = String.fromCharCode(116,95,50,55,95,115,99,97,110,115,0);
       let vietnamE = String.fromCharCode(112,114,111,98,97,98,108,101,95,55,95,51,48,0);
       let bingI = 5.0;
         bingI += parseInt(`${bingI}`) & 3;
         bingI += (String.fromCharCode(72,0) == xvod0 ? vietnamE.length : xvod0.length);
          let liveshare9 = String.fromCharCode(103,95,49,54,95,98,97,103,0);
          let chinaj = false;
         xvod0 += `${(String.fromCharCode(109,0) == xvod0 ? (chinaj ? 2 : 3) : xvod0.length)}`;
         liveshare9 = "3";
         chinaj = liveshare9.length < liveshare9.length;
         xvod0 = `${vietnamE.length}`;
         vietnamE += `${parseInt(`${bingI}`) / 3}`;
          let libhermesO = 5.0;
          let dycreators = String.fromCharCode(101,95,54,49,95,97,120,105,115,0);
          let yellowcirclebgp = 4.0;
         vietnamE += `${parseInt(`${bingI}`) - 2}`;
         libhermesO -= parseInt(`${yellowcirclebgp}`) % (Math.max(3, 10));
         dycreators = `${(String.fromCharCode(103,0) == dycreators ? dycreators.length : parseInt(`${libhermesO}`))}`;
         yellowcirclebgp -= parseFloat(`${dycreators.length}`);
      if ((bingI / (Math.max(2.81, 5))) == 5.48) {
         bingI += (vietnamE == String.fromCharCode(65,0) ? vietnamE.length : parseInt(`${bingI}`));
      }
          let statisticsactiveU: Array<any> = [832, 130, 980];
         vietnamE = `${(String.fromCharCode(49,0) == xvod0 ? xvod0.length : statisticsactiveU.length)}`;
          let upgradeY = 3.0;
          let plusF = String.fromCharCode(99,111,115,113,105,95,104,95,55,53,0);
         xvod0 = `${xvod0.length / (Math.max(1, 4))}`;
         upgradeY += parseInt(`${upgradeY}`) ^ plusF.length;
         plusF += `${plusF.length >> (Math.min(3, Math.abs(parseInt(`${upgradeY}`))))}`;
      headerr = `${2 ^ vietnamE.length}`;
       let defaultbasketballbgB = 4;
       let orangedownarrowK = 5.0;
      while (5.73 >= (4.41 * orangedownarrowK)) {
         orangedownarrowK *= parseFloat(`${parseInt(`${orangedownarrowK}`) << (Math.min(3, Math.abs(defaultbasketballbgB)))}`);
         break;
      }
      for (let k = 0; k < 1; k++) {
         defaultbasketballbgB += defaultbasketballbgB;
      }
      if (3.84 < (orangedownarrowK / (Math.max(6, defaultbasketballbgB)))) {
         orangedownarrowK *= parseFloat(`${2 % (Math.max(parseInt(`${orangedownarrowK}`), 2))}`);
      }
         orangedownarrowK += parseFloat(`${1}`);
         orangedownarrowK += parseFloat(`${defaultbasketballbgB / (Math.max(parseInt(`${orangedownarrowK}`), 9))}`);
      while (3 >= (4 >> (Math.min(5, Math.abs(defaultbasketballbgB))))) {
          let g_player9 = 0;
          let tailh: Array<any> = [72, 640, 839];
         orangedownarrowK -= parseFloat(`${g_player9 + 1}`);
         g_player9 |= tailh.length;
         tailh = [tailh.length % (Math.max(1, tailh.length))];
         break;
      }
      roboto5 = !plash5.includes(`${roboto5}`);
      episodesZ += "1";
   let nbatrophyk = tooltipsK == String.fromCharCode(51,114,105,0);
   do {
       let libfileY = 3.0;
       let uimanagerj = 4.0;
       let episodes7 = 2;
       let f_imageT = String.fromCharCode(115,101,99,116,111,114,95,52,95,55,51,0);
       let reminderE = String.fromCharCode(104,101,97,100,115,101,116,95,50,95,50,53,0);
      let nendd = uimanagerj <= 6879973.0;
      do {
         uimanagerj /= Math.max(2, episodes7);
         if (nendd) {
            break;
         }
      } while (nendd && (4.70 > uimanagerj));
         reminderE = `${f_imageT.length}`;
      while ((2.85 / (Math.max(10, uimanagerj))) > 4.47) {
         reminderE = `${2 - reminderE.length}`;
         break;
      }
          let feedbacks: Array<any> = [695, 38, 742];
         reminderE = `${1 + parseInt(`${uimanagerj}`)}`;
         feedbacks.push(feedbacks.length / (Math.max(3, 3)));
       let libruntimeexecutor3 = String.fromCharCode(111,95,50,53,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0);
      let basketballhometeam0 = uimanagerj >= 5043737.0;
      do {
          let basketballawayteamq = true;
          let moreu = String.fromCharCode(115,99,97,108,101,115,95,99,95,52,53,0);
          let iconpointscorew = String.fromCharCode(115,116,114,105,99,116,95,53,95,55,50,0);
          let filteri = 2;
         uimanagerj *= libruntimeexecutor3.length;
         basketballawayteamq = (iconpointscorew.length + moreu.length) <= 73;
         moreu += `${(1 / (Math.max(4, (basketballawayteamq ? 2 : 1))))}`;
         iconpointscorew = `${3 ^ filteri}`;
         filteri |= filteri;
         if (basketballhometeam0) {
            break;
         }
      } while ((uimanagerj == episodes7) && basketballhometeam0);
       let castG: Map<any, any> = new Map([[String.fromCharCode(103,102,105,110,116,95,54,95,57,49,0),String.fromCharCode(106,95,51,52,95,99,108,101,97,114,0)], [String.fromCharCode(122,95,52,56,95,111,112,116,0),String.fromCharCode(100,95,53,57,95,109,97,114,107,105,110,103,0)], [String.fromCharCode(119,95,50,52,95,105,110,108,101,110,0),String.fromCharCode(108,95,56,56,95,114,101,108,97,121,101,100,0)]]);
       let libswscalel: Map<any, any> = new Map([[String.fromCharCode(98,95,52,57,95,114,101,99,111,110,105,110,116,114,97,0),313], [String.fromCharCode(111,95,55,95,112,111,115,116,115,99,97,108,101,0),61]]);
      let forwardv = 9084655 <= f_imageT.length;
      do {
          let emptyf = 4;
          let expiredb: Map<any, any> = new Map([[String.fromCharCode(97,95,57,48,95,105,110,116,101,114,114,117,112,116,101,100,0),String.fromCharCode(114,101,115,111,108,118,101,95,101,95,50,55,0)], [String.fromCharCode(110,95,56,57,95,112,114,107,0),String.fromCharCode(122,95,49,48,95,109,105,115,109,97,116,99,104,0)]]);
         f_imageT += "3";
         emptyf %= Math.max(4, 2 - expiredb.size);
         expiredb.set(`${emptyf}`, expiredb.size & 1);
         if (forwardv) {
            break;
         }
      } while ((f_imageT.includes(`${libfileY}`)) && forwardv);
         libruntimeexecutor3 = `${reminderE.length * libruntimeexecutor3.length}`;
       let predictiondefaultS: Map<any, any> = new Map([[String.fromCharCode(105,95,52,52,95,105,100,101,110,116,105,102,105,99,97,116,105,111,110,0),424], [String.fromCharCode(97,95,50,52,95,112,97,97,100,0),637], [String.fromCharCode(109,101,115,111,110,95,57,95,49,53,0),374]]);
      if ((libruntimeexecutor3.length % (Math.max(5, 1))) >= 1 && (5 % (Math.max(10, libruntimeexecutor3.length))) >= 3) {
         libruntimeexecutor3 = `${parseInt(`${libfileY}`) << (Math.min(Math.abs(parseInt(`${uimanagerj}`)), 3))}`;
      }
         libruntimeexecutor3 += `${castG.size | 1}`;
      for (let e = 0; e < 2; e++) {
         predictiondefaultS = new Map([[`${episodes7}`, f_imageT.length * episodes7]]);
      }
          let sportd: Array<any> = [456, 87, 256];
          let awayplayerW = String.fromCharCode(114,101,110,100,101,114,101,114,115,95,102,95,56,53,0);
         libswscalel.set(`${uimanagerj}`, awayplayerW.length);
         sportd.push(3 << (Math.min(4, sportd.length)));
         awayplayerW += `${sportd.length}`;
      for (let g = 0; g < 1; g++) {
         libswscalel.set(`${episodes7}`, f_imageT.length + episodes7);
      }
      tooltipsK += `${parseInt(`${uimanagerj}`)}`;
      if (nbatrophyk) {
         break;
      }
   } while (nbatrophyk && (tooltipsK.length > 1));
   for (let w = 0; w < 2; w++) {
      tooltipsK += `${3 | parseInt(`${typeso}`)}`;
   }
   if (episodesZ.length > tooltipsK.length) {
       let live9 = 0.0;
       let entryU = String.fromCharCode(100,95,55,52,95,105,112,99,0);
       let templateprocessorj: Array<any> = [171, 419];
       let iconcurrentmatchV = String.fromCharCode(102,95,54,52,95,115,101,116,115,97,114,0);
       let iconT = 0.0;
      let issubE = 7545021 <= entryU.length;
      do {
          let signinupk: Map<any, any> = new Map([[String.fromCharCode(104,97,98,108,101,95,48,95,53,53,0),true ], [String.fromCharCode(115,95,51,56,95,119,109,97,112,114,111,0),true ], [String.fromCharCode(111,109,109,111,110,95,108,95,49,0),true ]]);
          let libreactnativeblobc = 1.0;
          let liveshare4 = 4.0;
          let stationss: Array<any> = [5, 541];
          let chart1 = String.fromCharCode(122,95,51,48,95,98,117,109,112,0);
         entryU = `${parseInt(`${iconT}`)}`;
         signinupk = new Map([[`${stationss.length}`, 3]]);
         libreactnativeblobc *= 3;
         liveshare4 -= stationss.length;
         chart1 = `${stationss.length}`;
         if (issubE) {
            break;
         }
      } while (issubE && (templateprocessorj.length == 1));
      if (entryU.includes(`${templateprocessorj.length}`)) {
          let progressk = 3.0;
          let imageactionlive0: Array<any> = [125, 623, 967];
         entryU = `${templateprocessorj.length}`;
         progressk /= Math.max(3, parseFloat(`${parseInt(`${progressk}`)}`));
         imageactionlive0 = [parseInt(`${progressk}`) | 3];
      }
         entryU += `${(String.fromCharCode(116,0) == entryU ? templateprocessorj.length : entryU.length)}`;
          let tempnodataV: Map<any, any> = new Map([[String.fromCharCode(105,95,51,54,95,97,110,97,108,121,115,101,0),String.fromCharCode(100,101,102,105,110,105,116,105,111,110,95,101,95,54,51,0)], [String.fromCharCode(100,117,114,98,105,110,95,110,95,55,0),String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,115,95,56,57,0)], [String.fromCharCode(114,95,56,50,95,114,101,102,100,117,112,101,0),String.fromCharCode(107,95,57,55,95,99,111,109,98,105,110,97,116,105,111,110,115,0)]]);
          let penaltyshootnogoalS = 4;
         live9 += parseFloat(`${templateprocessorj.length & iconcurrentmatchV.length}`);
         tempnodataV.set(`${penaltyshootnogoalS}`, 3 >> (Math.min(5, Math.abs(tempnodataV.size))));
         penaltyshootnogoalS += tempnodataV.size;
      while (5 <= (5 / (Math.max(4, iconcurrentmatchV.length))) || (5 / (Math.max(7, iconcurrentmatchV.length))) <= 5) {
         templateprocessorj.push((iconcurrentmatchV == String.fromCharCode(48,0) ? parseInt(`${iconT}`) : iconcurrentmatchV.length));
         break;
      }
      while (entryU.endsWith(`${live9}`)) {
         entryU += `${(String.fromCharCode(118,0) == entryU ? entryU.length : templateprocessorj.length)}`;
         break;
      }
         templateprocessorj.push(1 >> (Math.min(3, templateprocessorj.length)));
         entryU = `${(String.fromCharCode(97,0) == entryU ? iconcurrentmatchV.length : entryU.length)}`;
      if (3.1 <= iconT) {
          let awayteamfieldt = String.fromCharCode(115,95,53,55,95,100,101,115,101,108,101,99,116,101,100,0);
          let awayiconR = String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,48,95,49,56,0);
          let football7 = 3.0;
         iconT /= Math.max(parseFloat(`${parseInt(`${live9}`)}`), 5);
         awayteamfieldt += `${(String.fromCharCode(56,0) == awayiconR ? parseInt(`${football7}`) : awayiconR.length)}`;
         football7 *= parseInt(`${football7}`) | awayiconR.length;
      }
      if (2.27 <= (iconT + 3.49)) {
          let awayteamfield9 = String.fromCharCode(97,108,105,118,101,95,111,95,57,57,0);
          let orangetick7 = 4.0;
          let libjsinspectorX = 3.0;
          let matchdetailbgo = String.fromCharCode(109,97,107,101,95,57,95,52,56,0);
         templateprocessorj = [parseInt(`${libjsinspectorX}`) ^ templateprocessorj.length];
         awayteamfield9 += `${awayteamfield9.length}`;
         orangetick7 -= parseFloat(`${parseInt(`${orangetick7}`) / 1}`);
         libjsinspectorX -= parseFloat(`${parseInt(`${orangetick7}`) * 2}`);
         matchdetailbgo = `${parseInt(`${orangetick7}`) << (Math.min(Math.abs(3), 5))}`;
      }
         iconcurrentmatchV += `${parseInt(`${live9}`) >> (Math.min(3, Math.abs(3)))}`;
      while (iconT >= 2.29) {
          let screen_ = true;
          let shielddoneP = true;
          let actionU = 1.0;
          let notificationfillemptyi = true;
         entryU += `${parseInt(`${iconT}`) / 1}`;
         screen_ = actionU >= 6.49;
         shielddoneP = notificationfillemptyi || !shielddoneP;
         actionU += (parseFloat(`${(shielddoneP ? 2 : 4) + parseInt(`${actionU}`)}`));
         notificationfillemptyi = screen_;
         break;
      }
       let confirmationB = 3;
      for (let s = 0; s < 2; s++) {
         confirmationB /= Math.max(confirmationB / 1, 5);
      }
       let layoutb = String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,113,95,54,49,0);
       let mbbidp = String.fromCharCode(113,95,54,53,95,117,110,114,101,103,105,115,116,101,114,101,100,0);
      tooltipsK = "1";
   }
   while (headerr != String.fromCharCode(53,0) && iconviewert != String.fromCharCode(105,0)) {
       let smallbrightness6 = 3;
       let actionsN = String.fromCharCode(102,95,53,51,95,103,101,116,105,110,116,0);
       let libfileP = String.fromCharCode(109,95,51,95,108,111,103,115,116,101,114,101,111,0);
       let whitetick6: Map<any, any> = new Map([[String.fromCharCode(115,95,56,50,95,102,105,108,101,115,0),246], [String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,112,95,51,51,0),606]]);
       let redscorebally = String.fromCharCode(102,111,110,116,115,95,115,95,51,55,0);
      for (let n = 0; n < 1; n++) {
         smallbrightness6 -= libfileP.length >> (Math.min(Math.abs(3), 2));
      }
         libfileP = `${smallbrightness6}`;
          let signinupK = 1;
          let bangS = String.fromCharCode(105,95,51,95,114,101,109,101,109,98,101,114,0);
         whitetick6.set(libfileP, 2);
         signinupK >>= Math.min(Math.abs(3), 5);
         bangS = "2";
      for (let p = 0; p < 1; p++) {
         whitetick6.set(redscorebally, libfileP.length / (Math.max(2, redscorebally.length)));
      }
      let floater8 = libfileP == String.fromCharCode(100,101,121,116,0);
      do {
          let iconmoreC = String.fromCharCode(97,95,55,57,95,99,104,101,99,107,101,100,0);
         libfileP = `${(iconmoreC == String.fromCharCode(75,0) ? iconmoreC.length : libfileP.length)}`;
         if (floater8) {
            break;
         }
      } while (floater8 && (libfileP.endsWith(`${whitetick6.size}`)));
      for (let d = 0; d < 3; d++) {
          let arrowselectdownf = 5.0;
         libfileP = `${(actionsN == String.fromCharCode(82,0) ? whitetick6.size : actionsN.length)}`;
         arrowselectdownf += 1 | parseInt(`${arrowselectdownf}`);
      }
         actionsN = `${(String.fromCharCode(105,0) == redscorebally ? redscorebally.length : whitetick6.size)}`;
         redscorebally += `${smallbrightness6}`;
         actionsN = `${2 >> (Math.min(1, redscorebally.length))}`;
      for (let s = 0; s < 2; s++) {
         redscorebally += `${whitetick6.size}`;
      }
       let faviconY: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,105,110,103,95,113,95,49,57,0),127], [String.fromCharCode(104,95,49,49,95,114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,0),344], [String.fromCharCode(108,95,50,48,95,113,116,97,98,108,101,115,0),646]]);
      for (let a = 0; a < 1; a++) {
          let yellowtoredi = 2.0;
          let dialogu = String.fromCharCode(103,97,109,101,115,95,104,95,52,50,0);
          let shrinkk = String.fromCharCode(104,95,52,52,95,99,108,97,115,115,105,102,105,101,114,0);
          let reactnavigation_ = String.fromCharCode(99,95,55,53,95,102,108,97,116,110,101,115,115,0);
          let renderA = String.fromCharCode(117,95,55,57,95,112,101,114,115,105,115,116,0);
         faviconY.set(reactnavigation_, reactnavigation_.length);
         yellowtoredi /= Math.max(2, 2 << (Math.min(4, dialogu.length)));
         dialogu = `${dialogu.length % (Math.max(renderA.length, 9))}`;
         shrinkk += `${(dialogu == String.fromCharCode(78,0) ? parseInt(`${yellowtoredi}`) : dialogu.length)}`;
         renderA += `${1 | parseInt(`${yellowtoredi}`)}`;
      }
         actionsN = `${faviconY.size & 3}`;
         actionsN = `${libfileP.length + smallbrightness6}`;
       let dataB = 0.0;
       let brightnesse = 0.0;
      headerr = `${(String.fromCharCode(65,0) == libfileP ? libfileP.length : parseInt(`${page3}`))}`;
      break;
   }
   for (let h = 0; h < 3; h++) {
       let middleE = String.fromCharCode(99,117,116,95,114,95,56,57,0);
       let libavcodecE = String.fromCharCode(119,105,110,115,111,99,107,95,116,95,55,50,0);
      let verticall = libavcodecE.length >= 6633030;
      do {
         libavcodecE = `${libavcodecE.length}`;
         if (verticall) {
            break;
         }
      } while (verticall && (3 <= middleE.length));
         middleE += `${libavcodecE.length % 3}`;
         libavcodecE = "1";
         middleE = `${libavcodecE.length}`;
          let loginsuccessd = 5.0;
          let edity = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,49,95,54,57,0);
         libavcodecE += `${edity.length - middleE.length}`;
         loginsuccessd *= parseFloat(`${parseInt(`${loginsuccessd}`)}`);
         edity += `${parseInt(`${loginsuccessd}`)}`;
       let grayb: Array<any> = [String.fromCharCode(104,111,117,114,108,121,95,120,95,51,57,0), String.fromCharCode(116,95,55,95,112,101,114,102,111,114,109,101,100,0), String.fromCharCode(121,95,54,55,95,102,105,108,101,115,121,115,116,101,109,0)];
      embed0 += episodesZ.length;
   }
        return () => changeEpisodeAndPlay(episodes.urls[activeEpisode + 1].nid);
      }
      return undefined;
    };

    
    //   // if is sports stream, if watch time > 300s, pause vid
    
    
    //     screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    useEffect(() => {
      if (!isFocus) return;

      if (screenState.interstitialShow == true && Platform.OS === "ios") {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, [screenState.interstitialShow]);

    useEffect(() => {
      if (screenState.interstitialShow === true) {
        adVideoRef.current?.setNativeProps({ paused: true })
      } else {
        adVideoRef.current?.setNativeProps({ paused: false })
      }
    }, [screenState.interstitialShow]);

    useEffect(() => {
      if (route.name == '体育详情') {
        const unsub = setInterval(() => {
       let vnewsX = 0.0;
    let progressS = 3;
    let z_positionm = String.fromCharCode(109,95,57,57,95,110,111,109,105,110,97,116,101,0);
    let nbatrophyN = 5.0;
    let rulesU = String.fromCharCode(103,101,110,101,114,97,103,101,95,116,95,57,52,0);
    let descz = String.fromCharCode(100,111,117,103,108,97,115,95,111,95,55,54,0);
    let areaB = String.fromCharCode(101,120,112,111,110,101,110,116,95,105,95,49,0);
    let circlee = String.fromCharCode(115,112,101,99,115,95,99,95,56,0);
    let gestureO = 0.0;
      areaB = `${parseInt(`${nbatrophyN}`)}`;
      vnewsX *= parseFloat(`${3 * z_positionm.length}`);
   while (rulesU.length <= descz.length) {
       let whitebellr: Map<any, any> = new Map([[String.fromCharCode(117,101,102,97,95,106,95,57,54,0),132], [String.fromCharCode(97,118,103,120,95,98,95,52,52,0),780]]);
       let hooks6 = 3.0;
       let baiduK = String.fromCharCode(100,95,53,49,95,114,101,113,117,101,115,116,105,110,103,0);
       let iconeditM: Array<any> = [496, 829];
          let libavcodecd = 3.0;
         baiduK = "1";
         libavcodecd -= parseFloat(`${1 / (Math.max(7, parseInt(`${libavcodecd}`)))}`);
         baiduK = `${3 - parseInt(`${hooks6}`)}`;
         hooks6 *= parseFloat(`${baiduK.length % (Math.max(9, parseInt(`${hooks6}`)))}`);
      for (let e = 0; e < 2; e++) {
          let questO = String.fromCharCode(104,105,103,104,108,105,103,104,116,105,110,103,95,104,95,51,55,0);
          let smallC = 4;
         whitebellr.set(`${smallC}`, 2);
         questO += `${questO.length}`;
         smallC -= questO.length % 1;
      }
         iconeditM = [iconeditM.length];
      let iconsharefriendsT = 8664229.0 >= hooks6;
      do {
         hooks6 *= parseFloat(`${baiduK.length}`);
         if (iconsharefriendsT) {
            break;
         }
      } while ((!baiduK.startsWith(`${hooks6}`)) && iconsharefriendsT);
       let defaultlogoM = String.fromCharCode(120,95,57,54,95,99,117,114,116,97,105,110,0);
       let iconmegaphoneN = String.fromCharCode(115,104,105,112,112,105,110,103,95,102,95,49,53,0);
      if (baiduK.length == 3) {
         defaultlogoM += `${iconmegaphoneN.length ^ 2}`;
      }
      rulesU += `${baiduK.length % (Math.max(7, whitebellr.size))}`;
      break;
   }
       let terms_ = false;
       let historyP = String.fromCharCode(101,95,50,57,95,118,101,108,111,99,105,116,121,0);
      let assets1 = 7959966 >= historyP.length;
      do {
         historyP += `${(historyP == String.fromCharCode(99,0) ? (terms_ ? 1 : 1) : historyP.length)}`;
         if (assets1) {
            break;
         }
      } while ((5 < historyP.length && !terms_) && assets1);
       let yellowredcardk = String.fromCharCode(108,95,52,57,95,115,111,99,107,101,116,115,0);
       let unselectede = String.fromCharCode(122,95,49,55,95,118,116,101,115,116,0);
      while (!terms_ || unselectede.length > 5) {
          let profile3 = 5;
         terms_ = (((!terms_ ? unselectede.length : 14) & unselectede.length) == 14);
         profile3 &= 2 & profile3;
         break;
      }
      while (5 < yellowredcardk.length) {
          let layoutB = 0;
          let libturbomodulejsijniS: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,101,115,116,105,109,97,116,101,100,95,102,95,54,56,0),990], [String.fromCharCode(117,110,99,111,114,114,95,122,95,52,55,0),431]]);
         yellowredcardk += `${layoutB >> (Math.min(yellowredcardk.length, 3))}`;
         layoutB -= libturbomodulejsijniS.size;
         libturbomodulejsijniS = new Map([[`${libturbomodulejsijniS.size}`, libturbomodulejsijniS.size & libturbomodulejsijniS.size]]);
         break;
      }
          let skip3 = String.fromCharCode(122,95,52,50,95,114,101,119,105,110,100,0);
         terms_ = (((terms_ ? yellowredcardk.length : 65) % (Math.max(yellowredcardk.length, 3))) > 65);
         skip3 = `${skip3.length * 1}`;
         unselectede += `${historyP.length + unselectede.length}`;
      areaB = `${historyP.length >> (Math.min(Math.abs(1), 3))}`;
      z_positionm += `${descz.length >> (Math.min(areaB.length, 4))}`;
   let trashI = progressS >= 6547904;
   do {
      progressS |= parseInt(`${gestureO}`);
      if (trashI) {
         break;
      }
   } while (trashI && ((2 | progressS) <= 5 && (z_positionm.length | progressS) <= 2));
      nbatrophyN += parseFloat(`${rulesU.length >> (Math.min(Math.abs(1), 2))}`);
   let green6 = progressS >= 8557562;
   do {
      progressS |= circlee.length;
      if (green6) {
         break;
      }
   } while (green6 && (2.7 < (gestureO - 2.35) || 2.35 < (parseFloat(`${progressS}`) - gestureO)));
   if (4.84 > (gestureO * parseFloat(`${rulesU.length}`)) && (4.84 * gestureO) > 3.96) {
       let clear_: Map<any, any> = new Map([[String.fromCharCode(105,102,114,97,109,101,95,49,95,50,50,0),69], [String.fromCharCode(97,95,52,51,95,112,105,120,101,108,102,111,114,109,97,116,0),965]]);
         clear_ = new Map([[`${clear_.size}`, clear_.size >> (Math.min(Math.abs(1), 3))]]);
      while (4 <= (clear_.size << (Math.min(Math.abs(clear_.size), 2)))) {
         clear_ = new Map([[`${clear_.size}`, clear_.size]]);
         break;
      }
      while (clear_.size < clear_.size) {
         clear_.set(`${clear_.size}`, clear_.size << (Math.min(Math.abs(3), 3)));
         break;
      }
      rulesU = `${(String.fromCharCode(75,0) == circlee ? areaB.length : circlee.length)}`;
   }
      descz = "2";
   for (let o = 0; o < 3; o++) {
      rulesU = `${parseInt(`${gestureO}`) << (Math.min(circlee.length, 5))}`;
   }
      nbatrophyN -= parseFloat(`${rulesU.length}`);
      circlee = "3";
      circlee += `${progressS << (Math.min(z_positionm.length, 5))}`;
   while (circlee.length == 4) {
      descz = `${z_positionm.length}`;
      break;
   }
      z_positionm += `${areaB.length}`;
      progressS <<= Math.min(1, Math.abs(circlee.length * 2));
      circlee += `${parseInt(`${vnewsX}`)}`;
       let whitebellG: Map<any, any> = new Map([[String.fromCharCode(97,95,51,52,95,120,105,110,103,0),158], [String.fromCharCode(97,95,49,48,48,95,105,110,116,101,114,97,99,116,105,110,103,0),874]]);
      if ((whitebellG.size >> (Math.min(Math.abs(1), 3))) > 1 || 5 > (whitebellG.size >> (Math.min(Math.abs(1), 4)))) {
         whitebellG.set(`${whitebellG.size}`, whitebellG.size);
      }
       let sendl: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,105,110,103,95,49,95,55,49,0),String.fromCharCode(114,95,54,51,95,102,105,120,115,116,114,105,100,101,0)], [String.fromCharCode(98,95,57,53,95,104,109,97,99,105,100,0),String.fromCharCode(100,101,112,108,111,121,95,102,95,54,48,0)], [String.fromCharCode(109,95,50,55,95,115,101,112,97,114,97,116,101,0),String.fromCharCode(111,95,52,50,95,114,105,103,104,116,115,0)]]);
       let basketballk: Map<any, any> = new Map([[String.fromCharCode(122,95,56,56,95,114,101,99,105,112,0),917], [String.fromCharCode(98,95,53,50,95,97,112,99,109,0),136]]);
      for (let a = 0; a < 2; a++) {
         whitebellG.set(`${basketballk.size}`, sendl.size * basketballk.size);
      }
      nbatrophyN -= parseFloat(`${z_positionm.length * rulesU.length}`);
      circlee = `${(String.fromCharCode(56,0) == circlee ? circlee.length : progressS)}`;
   let moviesE = circlee == String.fromCharCode(101,54,105,115,105,55,108,111,113,0);
   do {
      circlee = `${1 % (Math.max(10, z_positionm.length))}`;
      if (moviesE) {
         break;
      }
   } while ((!z_positionm.startsWith(`${circlee.length}`)) && moviesE);
      gestureO /= Math.max(1, parseFloat(`${1 >> (Math.min(3, descz.length))}`));

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    
    
    
    
    

    const isVip = !(Number(userState.userMemberExpired) <=
      Number(userState.userCurrentTimestamp) ||
      userState.userToken === "")

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      (Number(userState.userMemberExpired) <=
        Number(userState.userCurrentTimestamp) ||
        userState.userToken === "");



    useEffect(() => {
      if (screenState.adultVideoWatchTime > ADULT_MODE_PREVIEW_DURATION && screenState.adultMode && !isVip) {
        dispatch(showAdultModeVip())
        setIsPaused(true)
        disableSeek.current = true
      } else {
        disableSeek.current = false
      }
    }, [currentTime, isPaused])

    const onPressAd = async () => {
       let moviesm = true;
    let imageactionliven = 3.0;
    let neonD = 1.0;
    let iconrightorange8: Array<any> = [183, 293];
    let mapbuffer_: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,114,101,115,112,111,110,115,97,98,108,101,0),741], [String.fromCharCode(114,101,103,105,115,116,101,114,105,110,103,95,55,95,53,52,0),769]]);
    let sport8: Array<any> = [585, 523];
    let iconwechat1: Array<any> = [658, 196, 926];
    let membershipd = 4.0;
    let iconmoreK = 0.0;
    let neonF = 5;
   for (let e = 0; e < 1; e++) {
       let assistV = String.fromCharCode(100,95,49,48,95,97,117,120,100,97,116,97,0);
       let default_uW = String.fromCharCode(98,95,54,53,95,115,108,105,99,101,100,0);
       let homeloadingO = false;
       let iconclosewhite6 = String.fromCharCode(103,97,109,109,97,118,97,108,95,50,95,57,55,0);
      while (default_uW == String.fromCharCode(53,0)) {
         assistV = `${1 + assistV.length}`;
         break;
      }
      let middlebrightness4 = assistV.length >= 8870277;
      do {
         assistV += `${2 & iconclosewhite6.length}`;
         if (middlebrightness4) {
            break;
         }
      } while ((iconclosewhite6.length >= 3 && assistV == String.fromCharCode(114,0)) && middlebrightness4);
         homeloadingO = assistV.startsWith(`${homeloadingO}`);
       let telemetryb: Array<any> = [149, 97, 404];
         default_uW = `${((homeloadingO ? 1 : 1))}`;
      for (let p = 0; p < 1; p++) {
          let unimplementedviewp = 5;
         homeloadingO = 23 > telemetryb.length;
         unimplementedviewp >>= Math.min(Math.abs(unimplementedviewp), 1);
      }
          let appsg = String.fromCharCode(101,95,53,49,95,98,97,110,100,105,110,103,0);
         telemetryb.push(assistV.length * 3);
         appsg += `${appsg.length}`;
      if (assistV != String.fromCharCode(113,0)) {
         default_uW = `${telemetryb.length}`;
      }
         assistV = `${iconclosewhite6.length ^ 1}`;
          let shoote = false;
          let bgvipsporte = String.fromCharCode(106,95,50,49,95,112,97,114,97,109,103,101,110,0);
          let editA: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,108,105,115,101,100,95,98,95,52,55,0),210], [String.fromCharCode(112,95,57,55,95,97,114,98,105,116,114,117,109,0),826], [String.fromCharCode(115,97,110,105,116,105,122,101,95,120,95,55,54,0),642]]);
         assistV += `${(assistV.length - (homeloadingO ? 3 : 1))}`;
         shoote = !shoote;
         bgvipsporte += `${(bgvipsporte == String.fromCharCode(84,0) ? editA.size : bgvipsporte.length)}`;
         editA.set(`${shoote}`, (1 * (shoote ? 3 : 4)));
          let pangle3: Array<any> = [String.fromCharCode(120,95,56,95,114,101,104,97,115,104,0), String.fromCharCode(112,95,51,56,95,115,101,114,118,105,99,101,0), String.fromCharCode(116,105,112,95,48,95,49,49,0)];
          let sidel: Array<any> = [942, 432, 540];
          let soundo = String.fromCharCode(107,95,56,57,95,99,111,99,103,0);
         default_uW = "2";
         pangle3.push(soundo.length % (Math.max(10, pangle3.length)));
         sidel.push(soundo.length);
         homeloadingO = String.fromCharCode(78,0) == default_uW;
      iconwechat1.push(((moviesm ? 4 : 3)));
   }
       let imageactionliveH = false;
       let redirectN = 3.0;
       let d_hasho = String.fromCharCode(100,111,97,108,108,95,122,95,50,56,0);
       let placeholderN = 4;
         placeholderN += 2 >> (Math.min(Math.abs(parseInt(`${redirectN}`)), 5));
         placeholderN |= parseInt(`${redirectN}`) % (Math.max(d_hasho.length, 5));
       let sourcew = 5.0;
       let basketballawayteamr = 2.0;
          let langA = String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,110,95,49,0);
         d_hasho = `${(3 - (imageactionliveH ? 3 : 4))}`;
         langA += `${langA.length / (Math.max(2, 5))}`;
       let tickY: Map<any, any> = new Map([[String.fromCharCode(109,115,114,108,101,100,101,99,95,108,95,52,49,0),String.fromCharCode(116,95,53,95,105,100,99,116,120,100,99,0)], [String.fromCharCode(117,110,105,118,101,114,115,97,108,95,57,95,54,0),String.fromCharCode(110,101,119,108,105,110,101,95,122,95,54,51,0)]]);
       let mbridgeo = String.fromCharCode(98,95,52,49,95,102,97,99,105,108,105,116,97,116,101,0);
       let dists = String.fromCharCode(99,97,114,114,105,97,103,101,95,52,95,57,57,0);
       let storeQ: Array<any> = [191, 392];
       let playercommonO: Array<any> = [890, 480, 473];
      while (4.95 < sourcew) {
          let redgoalH: Map<any, any> = new Map([[String.fromCharCode(120,95,54,95,115,117,98,101,120,112,114,0),614], [String.fromCharCode(109,95,52,48,95,116,114,97,110,115,99,111,100,101,0),844]]);
          let loginb = String.fromCharCode(109,95,56,49,95,100,101,105,110,116,101,114,108,101,97,118,101,0);
          let libreact5 = 1.0;
          let binddatas0 = String.fromCharCode(98,95,51,56,95,97,110,97,108,121,115,105,115,0);
          let greenm = 1.0;
         sourcew /= Math.max(d_hasho.length * parseInt(`${redirectN}`), 2);
         redgoalH = new Map([[`${libreact5}`, 1 << (Math.min(5, Math.abs(parseInt(`${libreact5}`))))]]);
         loginb += `${parseInt(`${libreact5}`) | 3}`;
         binddatas0 = `${(loginb == String.fromCharCode(88,0) ? loginb.length : binddatas0.length)}`;
         greenm *= parseFloat(`${1}`);
         break;
      }
      moviesm = 5 >= mapbuffer_.size;

      if (!playerVodAds?.actionUrl) {

   for (let j = 0; j < 3; j++) {
       let disconnectedlogo1 = false;
       let send6 = String.fromCharCode(121,95,54,52,95,109,97,110,105,112,117,108,97,116,111,114,0);
       let with_dI = String.fromCharCode(98,97,116,99,104,95,53,95,57,52,0);
       let listJ = 4.0;
          let modulesg = 1;
          let injuryg = String.fromCharCode(97,117,103,109,101,110,116,101,100,95,107,95,55,54,0);
          let fastn = 2.0;
         listJ += 3 - modulesg;
         modulesg |= injuryg.length;
         injuryg += `${(injuryg == String.fromCharCode(84,0) ? injuryg.length : parseInt(`${fastn}`))}`;
         fastn += parseFloat(`${parseInt(`${fastn}`)}`);
      if (2 >= with_dI.length) {
         with_dI += `${parseInt(`${listJ}`) / (Math.max(2, with_dI.length))}`;
      }
          let selectedk = String.fromCharCode(105,110,102,105,110,105,116,101,95,52,95,51,55,0);
          let libloggerR = String.fromCharCode(112,114,101,104,101,97,116,95,122,95,52,53,0);
         disconnectedlogo1 = selectedk.length > 31;
         selectedk += `${libloggerR.length % (Math.max(libloggerR.length, 2))}`;
      while (4.16 == (listJ - 5.24)) {
         send6 += `${(2 << (Math.min(1, Math.abs((disconnectedlogo1 ? 3 : 3)))))}`;
         break;
      }
         with_dI = "2";
      for (let o = 0; o < 2; o++) {
          let moviesB: Map<any, any> = new Map([[String.fromCharCode(122,95,57,55,95,97,112,112,101,97,114,97,110,99,101,0),true ], [String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,107,95,56,48,0),false ]]);
          let reactnativejsW = String.fromCharCode(105,95,48,95,115,101,97,108,98,111,120,0);
          let whitebellk = String.fromCharCode(103,95,49,55,95,115,104,105,102,116,115,0);
         send6 += `${2 * send6.length}`;
         moviesB = new Map([[`${moviesB.size}`, reactnativejsW.length]]);
         reactnativejsW += `${moviesB.size}`;
         whitebellk = "2";
      }
      let libhermess = listJ >= 9509293.0;
      do {
         listJ -= (String.fromCharCode(57,0) == send6 ? send6.length : with_dI.length);
         if (libhermess) {
            break;
         }
      } while ((with_dI.includes(`${listJ}`)) && libhermess);
          let nativeP = 5;
          let resultF = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,109,95,55,48,0);
          let dependenciesS = 2.0;
         listJ /= Math.max(1 * parseInt(`${listJ}`), 5);
         nativeP ^= (String.fromCharCode(53,0) == resultF ? resultF.length : parseInt(`${dependenciesS}`));
         dependenciesS -= parseFloat(`${nativeP + parseInt(`${dependenciesS}`)}`);
      let loginT = disconnectedlogo1 ? !disconnectedlogo1 : disconnectedlogo1;
      do {
         disconnectedlogo1 = disconnectedlogo1 || 16.0 <= listJ;
         if (loginT) {
            break;
         }
      } while (loginT && (3 < send6.length));
      let iconsubssuccessy = with_dI.length <= 9120188;
      do {
         with_dI += `${3 >> (Math.min(4, Math.abs(parseInt(`${listJ}`))))}`;
         if (iconsubssuccessy) {
            break;
         }
      } while ((3 >= (with_dI.length + parseInt(`${listJ}`)) || (3 % (Math.max(5, with_dI.length))) >= 3) && iconsubssuccessy);
          let imageactionlive7 = 0;
          let club2 = false;
          let listf = 2.0;
         listJ += (parseInt(`${listf}`) - (disconnectedlogo1 ? 1 : 3));
         imageactionlive7 /= Math.max(5, (imageactionlive7 * (club2 ? 1 : 5)));
         club2 = 76 == imageactionlive7;
         listf -= (parseFloat(`${imageactionlive7 + (club2 ? 2 : 5)}`));
      if (2.37 < (listJ - send6.length)) {
          let assetsz = String.fromCharCode(98,95,56,55,95,110,111,110,99,111,110,116,97,99,116,0);
          let middlesounds: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,115,95,50,95,56,52,0),73], [String.fromCharCode(118,95,55,53,95,109,97,116,114,105,120,0),336]]);
          let iconsharefriendsg = 4.0;
          let temperatureM = String.fromCharCode(117,95,52,51,95,115,112,97,114,115,101,110,101,115,115,0);
         listJ /= Math.max(3, 1);
         assetsz = `${temperatureM.length}`;
         middlesounds.set(`${iconsharefriendsg}`, 3);
         iconsharefriendsg += parseFloat(`${2 | temperatureM.length}`);
      }
      iconwechat1 = [2 + sport8.length];
   }
   let baiduadsk = iconrightorange8.length <= 7774815;
   do {
       let leakcheckero = 0;
       let whitebellj = String.fromCharCode(100,99,97,109,97,116,104,95,104,95,53,51,0);
       let white2: Map<any, any> = new Map([[String.fromCharCode(110,95,49,52,95,105,110,104,101,114,105,116,0),true ], [String.fromCharCode(101,110,100,105,110,103,95,105,95,55,57,0),true ], [String.fromCharCode(107,95,52,57,95,99,111,110,102,105,103,117,114,101,0),false ]]);
       let bnewsc = String.fromCharCode(99,95,55,50,95,114,101,115,105,122,101,114,0);
       let cornerkickL = 0.0;
         white2.set(`${cornerkickL}`, parseInt(`${cornerkickL}`) & leakcheckero);
         bnewsc += `${whitebellj.length}`;
      while (bnewsc.length == 4) {
         bnewsc = `${whitebellj.length % 1}`;
         break;
      }
      if (3 < (bnewsc.length ^ white2.size) && 3 < (white2.size ^ 3)) {
          let bodanC = false;
          let mintegralB = 3.0;
          let overj = 0.0;
         white2.set(`${leakcheckero}`, white2.size);
         bodanC = overj < 6.5;
         mintegralB /= Math.max(parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${overj}`)), 1))}`), 4);
      }
      if (4 <= (4 - whitebellj.length) || 4 <= (whitebellj.length - white2.size)) {
         whitebellj += `${1 >> (Math.min(2, Math.abs(parseInt(`${cornerkickL}`))))}`;
      }
         leakcheckero /= Math.max(5, (String.fromCharCode(79,0) == bnewsc ? bnewsc.length : white2.size));
       let becomef = 4.0;
         whitebellj += `${bnewsc.length / (Math.max(6, parseInt(`${becomef}`)))}`;
         cornerkickL /= Math.max(parseFloat(`${leakcheckero / (Math.max(6, parseInt(`${cornerkickL}`)))}`), 4);
       let commonq = 4;
         whitebellj = "2";
      let friendsX = whitebellj == String.fromCharCode(101,54,122,0);
      do {
          let redgoale = true;
          let canvasF: Array<any> = [707, 793, 56];
          let tickW = false;
         whitebellj += "3";
         redgoale = canvasF.length < 21;
         canvasF = [canvasF.length];
         tickW = (49 >= ((!redgoale ? 49 : canvasF.length) | canvasF.length));
         if (friendsX) {
            break;
         }
      } while (friendsX && (!bnewsc.startsWith(whitebellj)));
          let favorite5 = String.fromCharCode(111,95,53,56,95,102,114,101,101,112,0);
         becomef += parseFloat(`${commonq << (Math.min(Math.abs(3), 5))}`);
         favorite5 += `${(String.fromCharCode(65,0) == favorite5 ? favorite5.length : favorite5.length)}`;
       let iconadslinkz: Array<any> = [337, 967];
       let libswscaleM: Array<any> = [564, 535, 19];
      let mappingY = 5529427.0 <= cornerkickL;
      do {
         cornerkickL *= parseFloat(`${iconadslinkz.length}`);
         if (mappingY) {
            break;
         }
      } while ((2.55 > becomef) && mappingY);
      iconrightorange8 = [3];
      if (baiduadsk) {
         break;
      }
   } while (baiduadsk && (parseInt(`${imageactionliven}`) >= iconrightorange8.length));
        

      neonD *= 3;
   if ((3 & iconrightorange8.length) == 2) {
      iconrightorange8 = [iconwechat1.length - 2];
   }
        yys_giftbutton_footballtrophy.playsAdsClickAnalytics();

      iconmoreK /= Math.max(parseInt(`${neonD}`) << (Math.min(3, Math.abs(parseInt(`${imageactionliven}`)))), 1);
      imageactionliven *= parseFloat(`${3 * sport8.length}`);
        

   if (mapbuffer_.get(`${membershipd}`) != null) {
      membershipd *= parseFloat(`${1 << (Math.min(4, Math.abs(mapbuffer_.size)))}`);
   }
   for (let y = 0; y < 1; y++) {
       let singleA = String.fromCharCode(111,95,54,48,95,111,117,116,112,117,116,115,0);
       let loginR = 5.0;
       let emojihearti = String.fromCharCode(97,100,115,95,102,95,57,49,0);
       let inouttargetyellowu = String.fromCharCode(99,121,112,114,101,115,115,95,118,95,51,0);
       let reducerj = String.fromCharCode(116,120,116,95,117,95,50,55,0);
      for (let s = 0; s < 3; s++) {
         inouttargetyellowu = "2";
      }
         emojihearti += `${parseInt(`${loginR}`)}`;
      while (inouttargetyellowu == String.fromCharCode(84,0)) {
         emojihearti = `${singleA.length ^ 3}`;
         break;
      }
      let countryJ = 6357161.0 <= loginR;
      do {
          let iconmegaphoneQ = String.fromCharCode(114,101,112,108,97,121,95,106,95,48,0);
          let moduleq = String.fromCharCode(118,112,108,97,121,101,114,95,102,95,55,55,0);
          let weathern = String.fromCharCode(116,95,50,50,95,115,116,114,101,97,109,0);
         loginR /= Math.max((String.fromCharCode(111,0) == singleA ? singleA.length : parseInt(`${loginR}`)), 3);
         iconmegaphoneQ += `${1 / (Math.max(8, moduleq.length))}`;
         moduleq += `${weathern.length | iconmegaphoneQ.length}`;
         weathern += `${moduleq.length << (Math.min(iconmegaphoneQ.length, 4))}`;
         if (countryJ) {
            break;
         }
      } while (countryJ && (!reducerj.includes(`${loginR}`)));
      for (let a = 0; a < 1; a++) {
         loginR *= (String.fromCharCode(113,0) == singleA ? inouttargetyellowu.length : singleA.length);
      }
      for (let x = 0; x < 1; x++) {
         loginR += reducerj.length + inouttargetyellowu.length;
      }
         singleA = `${singleA.length}`;
      while (singleA != inouttargetyellowu) {
          let libbufferK = String.fromCharCode(114,111,103,114,101,115,115,95,112,95,53,49,0);
         inouttargetyellowu = `${emojihearti.length | singleA.length}`;
         libbufferK = `${1 * libbufferK.length}`;
         break;
      }
      let profileframeG = singleA == String.fromCharCode(56,54,104,0);
      do {
          let weibon = 1.0;
          let downarrowX: Array<any> = [998, 612];
          let predictionlossb = String.fromCharCode(118,105,101,119,101,100,95,117,95,51,50,0);
          let bridge1 = true;
          let gradlewY = false;
         singleA += `${parseInt(`${weibon}`)}`;
         weibon -= (3 >> (Math.min(5, Math.abs((bridge1 ? 5 : 5)))));
         downarrowX.push(2);
         predictionlossb = `${(predictionlossb == String.fromCharCode(119,0) ? (bridge1 ? 1 : 2) : predictionlossb.length)}`;
         gradlewY = ((downarrowX.length % (Math.max(9, (!gradlewY ? 84 : downarrowX.length)))) >= 84);
         if (profileframeG) {
            break;
         }
      } while (profileframeG && (emojihearti == singleA));
      if (singleA == reducerj) {
         reducerj = `${emojihearti.length}`;
      }
       let anythinkK = String.fromCharCode(116,95,53,95,118,101,110,117,101,0);
       let profileinactiver = String.fromCharCode(98,95,49,48,95,105,110,99,114,101,109,101,110,116,0);
      for (let j = 0; j < 1; j++) {
          let iconadslink3 = true;
          let temp8: Array<any> = [193, 445, 431];
          let codei = 4;
          let nativemoduleN = String.fromCharCode(97,95,50,50,95,112,111,108,105,99,101,0);
          let megaphoneg: Array<any> = [440, 938, 230];
         profileinactiver += `${megaphoneg.length}`;
         iconadslink3 = nativemoduleN.length < 23 && codei < 23;
         temp8 = [(nativemoduleN == String.fromCharCode(100,0) ? codei : nativemoduleN.length)];
         megaphoneg.push(codei + 1);
      }
      while ((1 >> (Math.min(4, emojihearti.length))) > 1) {
          let teamz = String.fromCharCode(116,95,55,49,95,97,114,116,119,111,114,107,0);
          let codeX = String.fromCharCode(109,105,110,105,109,97,108,95,103,95,51,50,0);
          let goallogor = String.fromCharCode(101,105,110,116,114,95,104,95,57,51,0);
         emojihearti += `${codeX.length | 2}`;
         teamz += "1";
         codeX += `${3 << (Math.min(3, goallogor.length))}`;
         goallogor += `${3 & teamz.length}`;
         break;
      }
         profileinactiver += `${profileinactiver.length + anythinkK.length}`;
         emojihearti += "2";
      sport8.push(iconwechat1.length / 3);
   }

        if (onPressCountdown) onPressCountdown();

      imageactionliven /= Math.max(1, parseFloat(`${parseInt(`${membershipd}`)}`));
       let acceptedv = String.fromCharCode(110,95,52,56,95,112,114,111,109,112,116,0);
       let nalyticsa = String.fromCharCode(112,111,114,116,97,108,95,54,95,53,52,0);
       let controlsR: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,119,95,57,48,0),String.fromCharCode(115,104,105,101,108,100,95,107,95,49,0)], [String.fromCharCode(112,108,111,116,116,101,114,95,57,95,54,53,0),String.fromCharCode(112,95,54,56,95,98,117,98,98,108,101,0)], [String.fromCharCode(98,95,56,56,95,108,97,117,110,99,104,101,114,0),String.fromCharCode(117,95,49,56,95,118,105,115,117,97,108,108,121,0)]]);
          let iconsettingP = String.fromCharCode(115,101,114,105,102,95,116,95,54,52,0);
          let dropdown4 = 5;
          let zhengpiana = true;
         acceptedv += `${acceptedv.length}`;
         iconsettingP += `${dropdown4 - 3}`;
         dropdown4 += 1 / (Math.max(1, iconsettingP.length));
         zhengpiana = iconsettingP.length >= 97 || dropdown4 >= 97;
          let iconclosewhiteX: Map<any, any> = new Map([[String.fromCharCode(100,117,114,98,105,110,95,107,95,51,53,0),724], [String.fromCharCode(117,110,115,104,105,102,116,95,97,95,55,0),746]]);
         nalyticsa = `${iconclosewhiteX.size}`;
       let topon8 = 5.0;
       let inouttargetredO = 5.0;
         acceptedv += `${(String.fromCharCode(90,0) == acceptedv ? parseInt(`${inouttargetredO}`) : acceptedv.length)}`;
      for (let t = 0; t < 2; t++) {
         topon8 += parseInt(`${inouttargetredO}`);
      }
         inouttargetredO += controlsR.size % (Math.max(3, 5));
         nalyticsa = `${nalyticsa.length ^ parseInt(`${topon8}`)}`;
      while ((nalyticsa.length / 1) == 5) {
         controlsR = new Map([[acceptedv, (String.fromCharCode(52,0) == nalyticsa ? nalyticsa.length : acceptedv.length)]]);
         break;
      }
         acceptedv = `${controlsR.size}`;
      imageactionliven /= Math.max(4, parseFloat(`${sport8.length | 2}`));
        return;

   for (let i = 0; i < 2; i++) {
      neonD += ((moviesm ? 3 : 1) * parseInt(`${imageactionliven}`));
   }
   let tooltipsI = 8966427 >= iconwechat1.length;
   do {
       let textlayoutmanagerg = 3;
       let j_position2: Array<any> = [320, 323, 352];
       let backwardY: Map<any, any> = new Map([[String.fromCharCode(121,95,49,55,95,99,97,112,97,98,105,108,105,116,121,0),false ], [String.fromCharCode(107,95,50,56,95,114,101,110,100,101,114,0),false ]]);
       let shrinkA = false;
         backwardY = new Map([[`${backwardY.size}`, ((shrinkA ? 1 : 2) / (Math.max(backwardY.size, 1)))]]);
          let rncoreW = String.fromCharCode(107,95,52,56,95,112,114,101,115,101,110,116,101,114,0);
          let project0 = false;
          let down4: Array<any> = [722, 402];
         j_position2.push(down4.length % 2);
         rncoreW = "3";
         project0 = !project0;
         down4.push(rncoreW.length >> (Math.min(Math.abs(1), 5)));
       let iconsaveimagei = 4;
       let iconscheduleW = 0;
      while (5 == (iconscheduleW | 1) && 4 == (iconscheduleW | 1)) {
         j_position2.push(1 | iconsaveimagei);
         break;
      }
      let abidetectv = textlayoutmanagerg <= 7746595;
      do {
         textlayoutmanagerg *= 2;
         if (abidetectv) {
            break;
         }
      } while (abidetectv && (textlayoutmanagerg == iconsaveimagei));
      if (j_position2.length > backwardY.size) {
         j_position2 = [3 & backwardY.size];
      }
       let logouser5 = 4;
      while (!j_position2.includes(iconscheduleW)) {
         iconscheduleW <<= Math.min(Math.abs(logouser5), 4);
         break;
      }
      if ((backwardY.size / (Math.max(4, 8))) >= 2) {
         backwardY.set(`${shrinkA}`, iconsaveimagei);
      }
      let libjsiu = 6945498 <= backwardY.size;
      do {
          let iconcloseY = 3;
          let libreanimatedG = String.fromCharCode(116,95,50,52,95,101,97,115,121,0);
          let applicationg: Array<any> = [String.fromCharCode(109,95,56,52,95,112,114,111,99,0), String.fromCharCode(117,108,116,114,97,95,106,95,54,57,0)];
          let reactnativeratings0 = String.fromCharCode(115,104,97,114,101,95,118,95,49,50,0);
          let backicone: Map<any, any> = new Map([[String.fromCharCode(107,95,54,50,95,108,97,121,111,117,116,0),401], [String.fromCharCode(116,97,108,108,95,110,95,54,50,0),586]]);
         backwardY = new Map([[`${applicationg.length}`, applicationg.length ^ 3]]);
         iconcloseY -= 3 + iconcloseY;
         libreanimatedG += `${(String.fromCharCode(70,0) == libreanimatedG ? libreanimatedG.length : iconcloseY)}`;
         reactnativeratings0 += `${backicone.size}`;
         backicone = new Map([[`${backicone.size}`, backicone.size / (Math.max(reactnativeratings0.length, 1))]]);
         if (libjsiu) {
            break;
         }
      } while (libjsiu && (2 <= j_position2.length));
         textlayoutmanagerg &= iconsaveimagei + 3;
      for (let b = 0; b < 2; b++) {
         iconscheduleW ^= ((shrinkA ? 5 : 2) & backwardY.size);
      }
      iconwechat1 = [parseInt(`${imageactionliven}`)];
      if (tooltipsI) {
         break;
      }
   } while (tooltipsI && (2 >= (iconwechat1.length << (Math.min(sport8.length, 3))) || (iconwechat1.length << (Math.min(Math.abs(2), 3))) >= 4));
      }

      const url = playerVodAds?.actionUrl.includes(FilterSinglePromotion.statisticsactiveLibloggerRewar([-81,-77,-77,-73,-57],0xC7,false)) ? playerVodAds?.actionUrl : FilterSinglePromotion.statisticsactiveLibloggerRewar([4,24,24,28,31,86,67,67,108],0x6C,false) + playerVodAds?.actionUrl

      

      iconrightorange8 = [parseInt(`${iconmoreK}`) + iconrightorange8.length];
       let private_17o = String.fromCharCode(114,95,56,55,95,99,97,112,116,105,111,110,0);
      if (2 > private_17o.length) {
          let traminiS: Array<any> = [250, 1];
          let flagy = String.fromCharCode(110,112,111,105,110,116,115,95,122,95,54,0);
          let cricket4 = 2.0;
          let cornershoots = 3;
          let balld = 3.0;
         private_17o += "1";
         traminiS.push(1 << (Math.min(Math.abs(cornershoots), 4)));
         flagy = "3";
         cricket4 -= parseInt(`${cricket4}`) | cornershoots;
         balld -= parseFloat(`${cornershoots & 3}`);
      }
       let render_ = 4.0;
       let flipperc = 0.0;
         flipperc *= (String.fromCharCode(79,0) == private_17o ? private_17o.length : parseInt(`${render_}`));
      neonD *= parseInt(`${iconmoreK}`);
      

      moviesm = sport8.includes(moviesm);
   for (let o = 0; o < 1; o++) {
       let arrowx: Array<any> = [355, 327];
       let greena = 2.0;
       let mailF = String.fromCharCode(104,117,101,115,95,104,95,52,50,0);
       let unreade = String.fromCharCode(98,95,53,54,95,112,114,105,110,116,118,97,108,0);
       let updatesF: Array<any> = [378, 901, 553];
      let cinit_v6 = greena <= 8451435.0;
      do {
         greena *= 3;
         if (cinit_v6) {
            break;
         }
      } while ((updatesF.includes(greena)) && cinit_v6);
      while (4 < mailF.length) {
          let usernamef = 4.0;
          let moduled = true;
          let interstitialP = String.fromCharCode(122,95,51,56,95,103,100,115,112,0);
          let activityg: Array<any> = [252, 175, 813];
         arrowx.push(((moduled ? 5 : 3) & parseInt(`${greena}`)));
         usernamef *= parseFloat(`${interstitialP.length}`);
         moduled = (parseInt(`${usernamef}`) + activityg.length) > 19;
         interstitialP = `${1 << (Math.min(5, interstitialP.length))}`;
         activityg = [interstitialP.length];
         break;
      }
       let orangeclock5 = String.fromCharCode(116,95,56,53,95,116,114,117,110,0);
          let renewR: Array<any> = [848, 864, 653];
          let homeinactiveL = String.fromCharCode(112,95,57,51,95,102,114,97,109,101,115,105,122,101,0);
          let textlayoutmanagerT = 4.0;
         greena -= 1;
         renewR.push(homeinactiveL.length);
         homeinactiveL = "3";
         textlayoutmanagerT += parseFloat(`${3 * renewR.length}`);
         greena += unreade.length;
          let notificationgrayV = 3.0;
          let orangetickM: Array<any> = [674, 933, 292];
         greena *= updatesF.length;
         notificationgrayV -= orangetickM.length * 2;
         orangetickM = [orangetickM.length];
       let turndown4 = String.fromCharCode(102,111,108,100,95,101,95,57,51,0);
       let iconarrowleftO = String.fromCharCode(103,101,116,97,117,120,118,97,108,95,120,95,54,54,0);
      if (orangeclock5 == String.fromCharCode(97,0)) {
          let minivodl = String.fromCharCode(99,111,110,115,116,116,105,109,101,95,112,95,51,53,0);
         turndown4 += `${1 & mailF.length}`;
         minivodl += `${minivodl.length + 1}`;
      }
         iconarrowleftO = `${iconarrowleftO.length}`;
      for (let e = 0; e < 2; e++) {
         iconarrowleftO += `${turndown4.length % (Math.max(orangeclock5.length, 1))}`;
      }
         greena -= arrowx.length & parseInt(`${greena}`);
         iconarrowleftO = `${(String.fromCharCode(82,0) == turndown4 ? turndown4.length : orangeclock5.length)}`;
          let resendc = String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,98,95,49,55,0);
         arrowx.push(iconarrowleftO.length << (Math.min(Math.abs(3), 5)));
         resendc = `${resendc.length}`;
      let shareblackm = String.fromCharCode(121,112,106,120,101,101,0) == orangeclock5;
      do {
         orangeclock5 = `${(orangeclock5 == String.fromCharCode(116,0) ? orangeclock5.length : parseInt(`${greena}`))}`;
         if (shareblackm) {
            break;
         }
      } while (shareblackm && (4.24 <= (greena + 4.62) || 3 <= (orangeclock5.length * 4)));
       let libswresampleR = 2.0;
       let adultO = 3.0;
      iconwechat1 = [1 % (Math.max(1, parseInt(`${membershipd}`)))];
   }

      

      iconwechat1 = [sport8.length >> (Math.min(Math.abs(3), 3))];
   for (let l = 0; l < 3; l++) {
       let countryp = 3.0;
       let starH = 1;
      if (3.14 > (countryp * starH)) {
         countryp /= Math.max(parseInt(`${countryp}`), 5);
      }
      if (starH > countryp) {
         starH |= 3 % (Math.max(4, parseInt(`${countryp}`)));
      }
       let qaagE: Array<any> = [616, 503];
       let temperaturej: Array<any> = [640, 128];
      while (2 > (5 | qaagE.length) || 3 > (qaagE.length | 5)) {
          let humidityL: Array<any> = [549, 532, 516];
         countryp += starH;
         humidityL = [3];
         break;
      }
         temperaturej.push(1 - starH);
          let graph_ = 0;
          let minimizeM = String.fromCharCode(114,101,102,114,101,115,104,95,116,95,53,50,0);
          let libjsijniprofilerv = 1.0;
         qaagE = [starH % (Math.max(2, 7))];
         graph_ &= graph_ << (Math.min(4, Math.abs(3)));
         minimizeM = `${graph_}`;
         libjsijniprofilerv *= 2;
      iconwechat1.push(parseInt(`${imageactionliven}`));
   }
      

   if (!moviesm) {
       let plusN = String.fromCharCode(120,95,54,56,95,102,105,120,101,100,0);
       let logouseru = 0.0;
          let constantsO = String.fromCharCode(120,95,53,54,95,115,104,97,100,111,119,0);
         plusN = "1";
         constantsO = `${(constantsO == String.fromCharCode(49,0) ? constantsO.length : constantsO.length)}`;
         plusN = "3";
      if (3 > plusN.length) {
         plusN += `${(plusN == String.fromCharCode(98,0) ? parseInt(`${logouseru}`) : plusN.length)}`;
      }
       let libreanimatedw = 5;
      while (4.38 <= (libreanimatedw / (Math.max(logouseru, 4))) && 5 <= (libreanimatedw ^ 5)) {
         libreanimatedw /= Math.max(2, 5);
         break;
      }
         logouseru += parseInt(`${logouseru}`) + 2;
      iconmoreK *= iconrightorange8.length + parseInt(`${iconmoreK}`);
   }
       let ball0 = String.fromCharCode(115,108,117,114,112,95,113,95,51,54,0);
       let reducerM = 4;
      for (let m = 0; m < 1; m++) {
         reducerM <<= Math.min(Math.abs((ball0 == String.fromCharCode(65,0) ? reducerM : ball0.length)), 3);
      }
      for (let k = 0; k < 2; k++) {
         ball0 = "3";
      }
         reducerM |= 2;
      while (!ball0.startsWith(`${reducerM}`)) {
          let tickedr = false;
         reducerM += reducerM;
         tickedr = !tickedr;
         break;
      }
      if (2 > (5 >> (Math.min(4, ball0.length)))) {
         ball0 = `${1 >> (Math.min(4, Math.abs(reducerM)))}`;
      }
         reducerM ^= 3 >> (Math.min(4, Math.abs(reducerM)));
      neonD *= iconwechat1.length;
      

   let iconnewchatl = 5199511 <= mapbuffer_.size;
   do {
       let episodeA = 0.0;
       let arrowselectdownp = String.fromCharCode(98,97,115,105,115,95,105,95,55,56,0);
       let productp = String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,95,105,95,49,55,0);
       let pauseM = String.fromCharCode(119,105,108,100,99,97,114,100,95,100,95,56,57,0);
       let basketballmatchdetailbga = String.fromCharCode(118,95,57,54,95,101,102,102,101,99,116,105,118,101,0);
         productp = `${parseInt(`${episodeA}`) & 1}`;
      let next1 = pauseM == String.fromCharCode(121,105,102,56,113,108,122,114,51,0);
      do {
         pauseM = "2";
         if (next1) {
            break;
         }
      } while (next1 && (pauseM.length < 4));
      let xvody = productp.length >= 4980515;
      do {
         productp = `${productp.length * 3}`;
         if (xvody) {
            break;
         }
      } while (xvody && (arrowselectdownp != String.fromCharCode(79,0)));
         episodeA *= productp.length;
       let libavformate = 4;
         productp = `${3 ^ productp.length}`;
      if (pauseM.length == 3) {
         productp = `${(productp == String.fromCharCode(73,0) ? parseInt(`${episodeA}`) : productp.length)}`;
      }
      let canvas1 = String.fromCharCode(51,111,101,109,56,113,0) == basketballmatchdetailbga;
      do {
         basketballmatchdetailbga += `${arrowselectdownp.length}`;
         if (canvas1) {
            break;
         }
      } while (canvas1 && (4.11 < episodeA));
         productp = `${arrowselectdownp.length >> (Math.min(1, Math.abs(parseInt(`${episodeA}`))))}`;
      for (let y = 0; y < 3; y++) {
         basketballmatchdetailbga = `${arrowselectdownp.length}`;
      }
      while (pauseM.includes(productp)) {
          let subtexts = String.fromCharCode(114,101,99,105,112,95,49,95,53,54,0);
          let adults = String.fromCharCode(113,95,56,51,95,115,117,98,0);
          let largesound6 = String.fromCharCode(108,111,110,103,95,114,95,50,55,0);
          let emojiheartA: Map<any, any> = new Map([[String.fromCharCode(103,95,56,52,95,102,108,111,97,116,0),509], [String.fromCharCode(107,95,51,57,95,108,105,98,115,97,109,112,108,101,0),144], [String.fromCharCode(108,95,51,57,95,99,111,111,114,100,105,110,97,116,111,114,115,0),286]]);
          let indicatorD: Array<any> = [462, 566];
         pauseM += `${parseInt(`${episodeA}`)}`;
         subtexts = `${(adults == String.fromCharCode(49,0) ? adults.length : subtexts.length)}`;
         largesound6 += `${(String.fromCharCode(99,0) == largesound6 ? largesound6.length : adults.length)}`;
         emojiheartA.set(largesound6, 3);
         indicatorD.push(adults.length & 2);
         break;
      }
          let logov: Array<any> = [147, 267, 637];
          let regeng4 = 5.0;
          let cancelx: Array<any> = [String.fromCharCode(104,95,49,95,117,118,109,118,0), String.fromCharCode(108,111,103,105,99,97,108,95,107,95,49,54,0)];
         pauseM += `${parseInt(`${regeng4}`) >> (Math.min(4, Math.abs(1)))}`;
         logov = [3 ^ logov.length];
         regeng4 /= Math.max(logov.length, 2);
         cancelx.push(logov.length - 1);
       let launcherm = String.fromCharCode(102,97,99,116,111,114,95,100,95,50,55,0);
          let incidentX = String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,112,95,49,51,0);
          let halfF: Array<any> = [609, 285];
         libavformate &= 1;
         incidentX = `${halfF.length / (Math.max(incidentX.length, 9))}`;
         halfF.push(halfF.length << (Math.min(Math.abs(1), 3)));
         libavformate |= 2;
      mapbuffer_ = new Map([[`${sport8.length}`, sport8.length]]);
      if (iconnewchatl) {
         break;
      }
   } while (iconnewchatl && (2 < (iconrightorange8.length * mapbuffer_.size) && (iconrightorange8.length * 2) < 1));
       let fastforward3 = 1;
         fastforward3 ^= fastforward3 + fastforward3;
         fastforward3 += fastforward3;
      while (1 <= fastforward3) {
          let cornerN: Array<any> = [496, 416, 216];
          let chatJ = 2;
          let valuesJ = String.fromCharCode(100,95,51,48,95,109,112,101,103,97,117,100,105,111,100,97,116,97,0);
          let homeloading3 = false;
          let reactnavigationb: Map<any, any> = new Map([[String.fromCharCode(114,95,56,50,95,105,110,116,101,114,97,99,116,105,111,110,0),String.fromCharCode(98,95,56,49,95,115,117,98,112,97,114,116,105,116,105,111,110,0)], [String.fromCharCode(97,95,50,53,95,115,116,114,105,110,103,115,0),String.fromCharCode(117,95,55,54,95,114,101,99,111,110,105,110,116,101,114,0)]]);
         fastforward3 |= fastforward3 / 3;
         cornerN = [cornerN.length];
         chatJ &= cornerN.length;
         valuesJ += `${(cornerN.length + (homeloading3 ? 3 : 2))}`;
         homeloading3 = (cornerN.length * reactnavigationb.size) >= 69;
         reactnavigationb.set(`${cornerN.length}`, reactnavigationb.size);
         break;
      }
      membershipd -= parseFloat(`${parseInt(`${iconmoreK}`) ^ iconwechat1.length}`);
      

   let trashS = mapbuffer_.size >= 8777473;
   do {
       let refreshq = true;
       let libswresample3 = String.fromCharCode(108,95,57,48,95,103,105,102,115,0);
          let chinasameL: Array<any> = [400, 946, 947];
         libswresample3 += "1";
         chinasameL.push(chinasameL.length);
      while (refreshq) {
         refreshq = libswresample3.startsWith(`${refreshq}`);
         break;
      }
      for (let v = 0; v < 3; v++) {
          let playercommon9 = String.fromCharCode(120,95,52,54,95,100,117,97,108,105,110,112,117,116,0);
          let libreactperfloggerjniP = 5;
          let nalyticsH = 1.0;
          let profilepicP = String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,95,97,95,54,55,0);
         libswresample3 = `${playercommon9.length * 3}`;
         playercommon9 = `${parseInt(`${nalyticsH}`)}`;
         libreactperfloggerjniP %= Math.max(2, 1);
         nalyticsH += parseFloat(`${libreactperfloggerjniP / 1}`);
         profilepicP = `${profilepicP.length}`;
      }
      if (!refreshq) {
          let plashW = 0.0;
          let whiteanimationlive1 = true;
          let rncoree = 3.0;
         refreshq = !whiteanimationlive1;
         plashW -= parseFloat(`${parseInt(`${plashW}`) / 2}`);
         whiteanimationlive1 = rncoree > 97.100 || 97.100 > plashW;
         rncoree /= Math.max(2, parseFloat(`${parseInt(`${plashW}`) / 2}`));
      }
      let images0 = String.fromCharCode(53,120,48,0) == libswresample3;
      do {
         libswresample3 += `${(libswresample3.length >> (Math.min(4, Math.abs((refreshq ? 4 : 2)))))}`;
         if (images0) {
            break;
         }
      } while ((refreshq) && images0);
       let quest3 = String.fromCharCode(116,111,107,101,110,116,120,95,109,95,49,56,0);
       let encrypty = String.fromCharCode(110,95,51,48,95,97,99,99,111,114,100,105,110,103,0);
      mapbuffer_ = new Map([[`${mapbuffer_.size}`, mapbuffer_.size]]);
      if (trashS) {
         break;
      }
   } while (trashS && (mapbuffer_.size >= 4));
   while ((sport8.length - parseInt(`${imageactionliven}`)) >= 3) {
      imageactionliven *= parseFloat(`${sport8.length}`);
      break;
   }
      

   while (5.95 < (2.84 + iconmoreK) && 2.84 < (imageactionliven + iconmoreK)) {
      iconmoreK -= ((moviesm ? 2 : 3) ^ 1);
      break;
   }
   let backwardB = 8372264.0 >= membershipd;
   do {
      membershipd *= parseFloat(`${iconrightorange8.length}`);
      if (backwardB) {
         break;
      }
   } while (backwardB && (3.83 == (2.71 * membershipd) && 1.91 == (2.71 * membershipd)));
      

      mapbuffer_.set(`${iconmoreK}`, 1);
       let about0 = 4.0;
      for (let h = 0; h < 3; h++) {
          let gifgoalk = String.fromCharCode(103,114,97,98,95,114,95,56,56,0);
          let mutedW = true;
         about0 *= 3;
         gifgoalk += `${((mutedW ? 2 : 1) - 2)}`;
         mutedW = gifgoalk.endsWith(`${mutedW}`);
      }
         about0 /= Math.max(parseInt(`${about0}`), 5);
         about0 *= 1 + parseInt(`${about0}`);
      iconwechat1.push(iconwechat1.length);
      

   if (2 > (5 - iconrightorange8.length) || (iconwechat1.length - 5) > 5) {
      iconwechat1.push(mapbuffer_.size);
   }
   if (Array.from(mapbuffer_.values()).includes(sport8.length)) {
       let statsnomoredataa = String.fromCharCode(110,95,54,48,95,101,110,99,111,100,101,105,110,116,114,97,0);
       let predictionwin_ = true;
       let libruntimeexecutorY = String.fromCharCode(100,97,98,97,115,101,95,50,95,53,53,0);
       let mbnativeI: Map<any, any> = new Map([[String.fromCharCode(121,95,54,51,95,117,115,100,0),641], [String.fromCharCode(102,111,117,110,100,97,116,105,111,110,95,118,95,56,55,0),54]]);
          let schedulerU = String.fromCharCode(118,116,114,107,95,51,95,49,56,0);
         predictionwin_ = mbnativeI.size > 57;
         schedulerU = `${schedulerU.length | 3}`;
          let homeloading_ = 5.0;
         mbnativeI.set(`${homeloading_}`, 2 >> (Math.min(Math.abs(parseInt(`${homeloading_}`)), 4)));
         mbnativeI.set(`${predictionwin_}`, ((predictionwin_ ? 4 : 1)));
      for (let a = 0; a < 3; a++) {
         statsnomoredataa = "2";
      }
      if (predictionwin_) {
         predictionwin_ = statsnomoredataa.endsWith(`${predictionwin_}`);
      }
      while (predictionwin_) {
         predictionwin_ = !statsnomoredataa.includes(`${predictionwin_}`);
         break;
      }
          let policyL = String.fromCharCode(101,95,57,56,95,109,110,99,0);
         mbnativeI = new Map([[`${mbnativeI.size}`, 2 << (Math.min(5, Math.abs(mbnativeI.size)))]]);
         policyL += `${policyL.length << (Math.min(Math.abs(3), 4))}`;
      let singaporeE = statsnomoredataa == String.fromCharCode(120,57,54,97,119,112,117,0);
      do {
         statsnomoredataa = `${libruntimeexecutorY.length / (Math.max(3, 8))}`;
         if (singaporeE) {
            break;
         }
      } while (singaporeE && ((5 << (Math.min(4, statsnomoredataa.length))) == 3 || (5 << (Math.min(3, statsnomoredataa.length))) == 2));
       let bellM = String.fromCharCode(114,111,116,97,116,101,95,121,95,50,54,0);
      while (bellM.length < 5 || !predictionwin_) {
         bellM += `${2 & libruntimeexecutorY.length}`;
         break;
      }
         libruntimeexecutorY = `${bellM.length ^ statsnomoredataa.length}`;
      let largesoundK = mbnativeI.size <= 6032490;
      do {
         mbnativeI = new Map([[`${mbnativeI.size}`, (libruntimeexecutorY == String.fromCharCode(75,0) ? libruntimeexecutorY.length : mbnativeI.size)]]);
         if (largesoundK) {
            break;
         }
      } while ((5 > (statsnomoredataa.length | 1) || 3 > (1 | mbnativeI.size)) && largesoundK);
      mapbuffer_ = new Map([[`${mbnativeI.size}`, 1]]);
   }
      Linking.openURL(url);

   for (let k = 0; k < 1; k++) {
      mapbuffer_ = new Map([[`${neonD}`, parseInt(`${neonD}`) / (Math.max(parseInt(`${iconmoreK}`), 5))]]);
   }
   for (let w = 0; w < 3; w++) {
      moviesm = iconwechat1.length < parseInt(`${iconmoreK}`);
   }
      

      imageactionliven /= Math.max(3, parseFloat(`${parseInt(`${membershipd}`) | 3}`));
   if (5.90 < iconmoreK) {
      moviesm = !moviesm;
   }

      

   for (let l = 0; l < 2; l++) {
      mapbuffer_ = new Map([[`${iconrightorange8.length}`, iconrightorange8.length]]);
   }
   while ((iconwechat1.length % (Math.max(4, 6))) == 5) {
      iconwechat1.push(mapbuffer_.size - parseInt(`${iconmoreK}`));
      break;
   }
      yys_giftbutton_footballtrophy.playsAdsClickAnalytics({
        url,
        ads_slot_id: playerVodAds.slotId ?? undefined,
        ads_id: playerVodAds.id ?? undefined,
        ads_title: playerVodAds.eventTitle ?? '',
        ads_name: playerVodAds.name ?? undefined,
      });

      
    }

    useEffect(() => {
      if (isFullScreen) {
        lockOrientation('LANDSCAPE-LEFT')
        ImmersiveMode.setBarMode('Full')
        ImmersiveMode.fullLayout(true)
      }
      else {
        lockOrientation('PORTRAIT')
        ImmersiveMode.setBarMode('Normal')
        ImmersiveMode.fullLayout(false)
      }

    }, [isFullScreen])

    return (
      <View style={styles.container}>
        {isFetchAds &&
          <View style={styles.bofangBox} />
        }
        {showAd && playerVodAds &&
          <View style={{ ...styles.bofangBox }}>
            <AdVideoImage
              videoPlayerRef={adVideoRef}
              type={playerVodAds.isVideo ? 'video' : 'image'}
              url={playerVodAds.url!}
              countdownTime={adCountdownTime}
              isFullScreen={isFullScreen}
              isShowShare={false}
              onPressAd={onPressAd}
              onPressCountdown={onPressCountdown}
              onGoBack={onGoBack}
              onShare={onShare}
              onPressFullScreenBtn={onToggleFullScreen}
            />
          </View>
        }

        {!isFetchAds && !showAd &&
          <View style={{ ...styles.bofangBox }}>
            {!(vod_url !== undefined || vod_source !== undefined) ? (
              <View
                style={{
                  width: "100%",
                  aspectRatio: 16 / 9,
                  backgroundColor: "black",
                }}
              />
            ) : useWebview ? (
              <WebView
                resizeMode="contain"
                source={vod_url === undefined ? vod_source : { uri: vod_url }}
                style={styles.video}
                onLoad={onVideoLoaded}
              />
            ) : (
              <VideoWithControls
                playbackRate={playbackRate}
                videoPlayerRef={videoPlayerRef}
                isPaused={isPaused || pauseSportVideo} 
                vod_source={vod_source}
                vod_url={vod_url}
                currentTimeRef={currentTimeRef}
                controlsRef={controlsRef}
                currentTime={currentTime}
                duration={duration}
                isFullScreen={isFullScreen}
                vodTitle={vodTitle}
                videoType={videoType}
                activeEpisode={activeEpisode}
                episodes={episodes}
                rangeSize={rangeSize}
                accumulatedSkip={accumulatedSkip.current}
                movieList={movieList}
                showGuide={showGuide}
                showMoreType={showMoreType}
                streams={streams}
                isFetchingRecommendedMovies={isFetchingRecommendedMovies}
                onBuffer={onBuffer}
                getNextEpisode={getNextEpisode}
                onVideoLoaded={onVideoLoaded}
                onVideoProgessing={onVideoProgessing}
                onSeek={onSeek}
                onSeekGesture={onSeekGesture}
                onSkip={onSkip}
                onTogglePlayPause={onTogglePlayPause}
                onToggleFullScreen={onToggleFullScreen}
                onGoBack={onGoBack}
                setPlaybackRate={setPlaybackRate}
                changeEpisodeAndPlay={changeEpisodeAndPlay}
                onShare={onShare}
                onReadyForDisplay={onReadyForDisplay}
                isVip={isVip}
                vodID={vodID}
                sourceID={sourceID}
                onDownloadVod={onDownloadVod}
                setShowAdOverlay={setShowAdOverlay}
              />
            )}
          </View>
        }


        {(bufferRef.current || seekDirection !== "none" || isFetchAds) && !showAd && (
          <View style={styles.buffering}>
            {seekDirection !== "none" ? (
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                {seekDirection === "configChat" ? (
                  <FastforwardProgressSvg height={50} width={50} />
                ) : (
                  <RewindProgressSvg height={50} width={50} />
                )}
                {duration > 3600 ? (
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{ ...textVariants.header, color: colors.primary }}
                    >
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(11, 19)}
                    </Text>
                    <Text style={{ ...textVariants.header }}>
                      {` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(11, 19)}`}
                    </Text>
                  </Text>
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{ ...textVariants.header, color: colors.primary }}
                    >
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(14, 19)}
                    </Text>
                    <Text style={{ ...textVariants.header }}>
                      {` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(14, 19)}`}
                    </Text>
                  </Text>
                )}
              </View>
            ) : (
              <FastImage
                source={require("../../../static/images/constantsMimePhone.gif")}
                style={{ width: 100, height: 100 }}
                resizeMode={"contain"}
              />
            )}
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  bofangBox: {
    aspectRatio: 16 / 9,
    maxHeight: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  buffering: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "toponHelperProject",
    position: "absolute",
    height: "auto",
    width: "auto",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black",
  },
});
