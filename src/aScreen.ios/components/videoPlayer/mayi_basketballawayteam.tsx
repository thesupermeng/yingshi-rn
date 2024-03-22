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
} from "react-native";

import Video from "react-native-video";
import { useTheme, useNavigation, useRoute } from "@react-navigation/native";
import { debounce } from "lodash";

import { Dimensions } from "react-native";
import VideoControlsOverlay from "./mayi_baseline_rncore";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "@static/images/textPressure.svg";
import RewindProgressIcon from "@static/images/fullOver.svg";

import { incrementSportWatchTime, setFullscreenState } from "@redux/actions/mayi_iconorientation_chatroombackground";

import {
  mayi_ReddownarrowItem,
  mayi_Const,
  mayi_EmptyGradle,
} from "@type/mayi_green";
import VideoWithControls from "./mayi_static_control";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility/mayi_middleware_apps";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

interface mayi_GoogleViews {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: mayi_Const;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: mayi_EmptyGradle[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: mayi_ReddownarrowItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
}

type mayi_Goallogo = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type mayi_FootballtrophyGreytick = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<mayi_FootballtrophyGreytick, mayi_GoogleViews>(
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
       let emojiE = String.fromCharCode(119,101,108,108,95,49,95,51,52,0);
    let constantsV = 4.0;
    let blacklist4 = 2;
    let basketballg: Array<any> = [String.fromCharCode(98,95,57,54,95,99,111,110,116,111,117,114,115,0), String.fromCharCode(118,105,101,119,95,116,95,51,50,0), String.fromCharCode(105,109,112,111,114,116,115,95,101,95,53,54,0)];
    let register_jt = 3.0;
    let dependencyt: Array<any> = [868, 667];
    let condensedR = true;
    let libfileh = true;
    let template_45U: Array<any> = [994, 660, 825];
    let sentry3 = 0;
    let predictionbannerM = 1.0;
    let reddownarrowv: Array<any> = [801, 671];
   let gradlewC = 8138760.0 <= register_jt;
   do {
      register_jt += (emojiE == String.fromCharCode(51,0) ? emojiE.length : (libfileh ? 1 : 4));
      if (gradlewC) {
         break;
      }
   } while (gradlewC && (5 <= emojiE.length));
      libfileh = !libfileh || 97 < blacklist4;
   while (4 < (blacklist4 >> (Math.min(template_45U.length, 1))) || 1 < (blacklist4 >> (Math.min(Math.abs(4), 4)))) {
      blacklist4 += 1;
      break;
   }
   if (constantsV <= 1.51 && 3.10 <= (constantsV * 1.51)) {
       let termsO = 4.0;
       let quest5 = 1.0;
       let gestures3 = String.fromCharCode(99,114,111,115,115,98,97,114,95,121,95,56,48,0);
       let whiteJ = 5.0;
      for (let r = 0; r < 1; r++) {
         quest5 -= parseInt(`${whiteJ}`);
      }
      let libavdevicev = 9413543.0 >= termsO;
      do {
         termsO *= gestures3.length;
         if (libavdevicev) {
            break;
         }
      } while ((termsO == 4.56) && libavdevicev);
      for (let g = 0; g < 1; g++) {
         whiteJ *= 2 | gestures3.length;
      }
      while (2 == (parseInt(`${termsO}`) + gestures3.length)) {
         gestures3 += "3";
         break;
      }
      for (let g = 0; g < 1; g++) {
         gestures3 = `${parseInt(`${termsO}`) | gestures3.length}`;
      }
          let leakcheckerZ = 1.0;
         gestures3 = `${parseInt(`${leakcheckerZ}`) ^ parseInt(`${termsO}`)}`;
         gestures3 = `${1 & gestures3.length}`;
          let register__nA: Map<any, any> = new Map([[String.fromCharCode(112,112,107,104,95,53,95,54,57,0),794], [String.fromCharCode(114,111,117,116,101,114,95,104,95,51,48,0),248]]);
          let footballtrophyF = 0;
          let sinal = 3.0;
         whiteJ -= parseInt(`${termsO}`) ^ footballtrophyF;
         register__nA.set(`${sinal}`, 3);
         footballtrophyF >>= Math.min(5, Math.abs(register__nA.size << (Math.min(3, Math.abs(parseInt(`${sinal}`))))));
      for (let k = 0; k < 3; k++) {
         quest5 /= Math.max((String.fromCharCode(67,0) == gestures3 ? gestures3.length : parseInt(`${quest5}`)), 3);
      }
      if ((whiteJ / (Math.max(5, termsO))) >= 3.94) {
         whiteJ *= parseInt(`${whiteJ}`) & 3;
      }
      if (3.20 > whiteJ) {
         gestures3 += "2";
      }
      if ((termsO / 4) == 4.13) {
          let footballfiledlayouth = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,55,95,56,49,0);
          let cancelH = 2;
         quest5 -= 2;
         footballfiledlayouth = `${1 / (Math.max(10, footballfiledlayouth.length))}`;
         cancelH *= cancelH;
      }
      constantsV -= parseInt(`${quest5}`) << (Math.min(2, Math.abs(3)));
   }
   while (3.55 < register_jt) {
      register_jt *= (String.fromCharCode(103,0) == emojiE ? parseInt(`${predictionbannerM}`) : emojiE.length);
      break;
   }
   if (emojiE.length > 1) {
      emojiE = `${1 % (Math.max(6, template_45U.length))}`;
   }
   while ((1.78 + constantsV) <= 1.68 && 3 <= (dependencyt.length / (Math.max(3, 1)))) {
      constantsV /= Math.max(2, 1 << (Math.min(Math.abs(sentry3), 4)));
      break;
   }
   if ((sentry3 - 4) <= 5 || (parseInt(`${predictionbannerM}`) / (Math.max(7, sentry3))) <= 4) {
      predictionbannerM -= parseFloat(`${1}`);
   }
       let mbbannerV = 3;
       let bodan8 = true;
       let vnewsx = String.fromCharCode(97,99,99,101,110,116,95,115,95,56,50,0);
      for (let n = 0; n < 2; n++) {
          let splashm = true;
          let malaysia2 = String.fromCharCode(105,95,54,95,99,108,105,99,107,0);
          let roundu: Array<any> = [818, 964, 241];
          let adultP = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,56,95,49,50,0);
         bodan8 = !splashm;
         malaysia2 = `${adultP.length % 1}`;
         roundu = [adultP.length % 1];
      }
          let homeinactivea = 3;
          let libfileG: Array<any> = [450, 296, 524];
         vnewsx += `${(3 % (Math.max(2, (bodan8 ? 3 : 3))))}`;
         homeinactivea |= 2;
         libfileG = [homeinactivea];
       let libreactperfloggerjni8 = String.fromCharCode(121,95,55,55,95,115,108,111,119,101,115,116,0);
      while (mbbannerV < 4) {
          let country1: Array<any> = [350, 80];
          let mbridge1 = 1.0;
          let topic8 = String.fromCharCode(117,102,102,101,114,95,98,95,50,55,0);
          let const_g0: Map<any, any> = new Map([[String.fromCharCode(114,95,52,55,95,118,111,105,99,101,0),636], [String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,95,110,95,55,57,0),106], [String.fromCharCode(110,101,119,108,105,110,101,95,106,95,57,55,0),514]]);
         bodan8 = !bodan8;
         country1.push(const_g0.size << (Math.min(5, Math.abs(parseInt(`${mbridge1}`)))));
         mbridge1 += parseFloat(`${3}`);
         topic8 += `${parseInt(`${mbridge1}`)}`;
         const_g0 = new Map([[`${mbridge1}`, 3 ^ parseInt(`${mbridge1}`)]]);
         break;
      }
      let textinputz = 7400342 <= mbbannerV;
      do {
          let iconqq_ = 4.0;
         mbbannerV ^= parseInt(`${iconqq_}`);
         if (textinputz) {
            break;
         }
      } while (textinputz && (5 < (mbbannerV + libreactperfloggerjni8.length) && 5 < (5 + mbbannerV)));
         bodan8 = (((!bodan8 ? 34 : vnewsx.length) + vnewsx.length) > 34);
      for (let s = 0; s < 3; s++) {
          let album9 = 5;
          let predictionactivee = 3.0;
          let sell1 = 4.0;
          let thumbnail2 = String.fromCharCode(105,95,54,48,95,102,99,104,111,119,110,0);
         bodan8 = 46.96 < (predictionactivee + sell1);
         album9 &= thumbnail2.length << (Math.min(5, Math.abs(album9)));
         predictionactivee *= thumbnail2.length & album9;
         sell1 *= parseFloat(`${album9 ^ 2}`);
      }
         vnewsx += `${(String.fromCharCode(100,0) == vnewsx ? vnewsx.length : (bodan8 ? 4 : 4))}`;
         bodan8 = libreactperfloggerjni8.length >= 96;
      sentry3 -= 1 - mbbannerV;
      emojiE += `${template_45U.length}`;
   if (2 >= (blacklist4 << (Math.min(Math.abs(2), 5)))) {
      libfileh = !condensedR;
   }
   if (1.100 == (3.96 * register_jt)) {
      register_jt /= Math.max(4, dependencyt.length ^ 2);
   }
      libfileh = 90 > blacklist4 && !libfileh;
   if (libfileh) {
       let basketballiconn = String.fromCharCode(99,104,97,114,109,97,112,95,109,95,53,55,0);
       let matchdetailbgt = String.fromCharCode(119,109,97,118,111,105,99,101,95,118,95,49,48,0);
       let bufferT = true;
      if (bufferT || 2 <= basketballiconn.length) {
         basketballiconn += `${(String.fromCharCode(112,0) == matchdetailbgt ? matchdetailbgt.length : (bufferT ? 3 : 3))}`;
      }
          let sinaB = 5;
         matchdetailbgt = "1";
         sinaB |= sinaB;
         basketballiconn = "1";
         bufferT = !bufferT;
      while (basketballiconn.length <= 2) {
         basketballiconn += `${(matchdetailbgt.length ^ (bufferT ? 5 : 2))}`;
         break;
      }
         matchdetailbgt += `${matchdetailbgt.length}`;
      for (let d = 0; d < 2; d++) {
         matchdetailbgt = `${(matchdetailbgt.length / (Math.max(6, (bufferT ? 1 : 5))))}`;
      }
      if (matchdetailbgt.length > 5) {
          let yellowcirclebgi = 0.0;
          let become2 = String.fromCharCode(102,95,56,48,95,116,114,105,109,109,101,100,0);
          let preview0 = String.fromCharCode(118,105,98,114,97,116,105,111,110,95,117,95,55,53,0);
         basketballiconn += `${(basketballiconn == String.fromCharCode(68,0) ? matchdetailbgt.length : basketballiconn.length)}`;
         yellowcirclebgi *= parseFloat(`${become2.length}`);
         become2 = `${become2.length}`;
         preview0 = "2";
      }
      while (!bufferT && matchdetailbgt.length == 4) {
          let whiteticka = 1.0;
          let libreactV = String.fromCharCode(116,119,111,108,111,111,112,95,55,95,55,48,0);
          let mapbufferS = String.fromCharCode(116,112,99,95,54,95,55,48,0);
         matchdetailbgt = `${(3 >> (Math.min(5, Math.abs((bufferT ? 2 : 5)))))}`;
         whiteticka *= libreactV.length << (Math.min(mapbufferS.length, 3));
         libreactV += `${2 & libreactV.length}`;
         mapbufferS = `${mapbufferS.length % (Math.max(8, libreactV.length))}`;
         break;
      }
      condensedR = !libfileh;
   }
       let mbridgeV = 3.0;
      let mbnativeN = 7408769.0 <= mbridgeV;
      do {
         mbridgeV /= Math.max(1, parseFloat(`${parseInt(`${mbridgeV}`) << (Math.min(4, Math.abs(parseInt(`${mbridgeV}`))))}`));
         if (mbnativeN) {
            break;
         }
      } while (mbnativeN && (4.28 <= (mbridgeV - 5.24)));
      if ((mbridgeV / (Math.max(6, mbridgeV))) >= 1.75 || (1.75 + mbridgeV) >= 4.5) {
         mbridgeV -= parseFloat(`${parseInt(`${mbridgeV}`)}`);
      }
      let indexc = mbridgeV <= 8960651.0;
      do {
         mbridgeV /= Math.max(parseFloat(`${2 ^ parseInt(`${mbridgeV}`)}`), 1);
         if (indexc) {
            break;
         }
      } while (indexc && (2.50 > (mbridgeV + mbridgeV)));
      predictionbannerM /= Math.max(1, parseFloat(`${emojiE.length << (Math.min(3, template_45U.length))}`));
   if (parseInt(`${constantsV}`) <= template_45U.length) {
      constantsV /= Math.max(1, 1 - parseInt(`${predictionbannerM}`));
   }
   for (let h = 0; h < 3; h++) {
      template_45U = [3 / (Math.max(sentry3, 10))];
   }
       let homeactiveL = true;
       let shared9 = String.fromCharCode(117,110,112,105,110,95,118,95,51,49,0);
       let subtextV = 5.0;
      if (subtextV < 5.72) {
          let baseS = false;
          let langw: Map<any, any> = new Map([[String.fromCharCode(104,101,118,99,95,101,95,51,57,0),349], [String.fromCharCode(111,95,53,57,95,99,104,101,99,107,112,97,99,107,101,116,0),864], [String.fromCharCode(97,95,52,50,95,100,101,115,99,114,105,112,116,111,114,115,0),563]]);
         shared9 = `${(String.fromCharCode(79,0) == shared9 ? shared9.length : (homeactiveL ? 2 : 5))}`;
         baseS = langw.get(`${baseS}`) != null;
         langw.set(`${baseS}`, langw.size);
      }
      if (4.97 > (2.38 / (Math.max(10, subtextV)))) {
          let matchinactiveW: Array<any> = [197, 844, 206];
          let eact8: Array<any> = [719, 944, 294];
          let ewarded5 = 2;
         subtextV -= matchinactiveW.length;
         matchinactiveW = [1 << (Math.min(1, eact8.length))];
         eact8 = [ewarded5];
         ewarded5 -= eact8.length;
      }
         homeactiveL = !shared9.includes(`${homeactiveL}`);
      let turnt = 6318767.0 >= subtextV;
      do {
         subtextV += (shared9 == String.fromCharCode(68,0) ? shared9.length : parseInt(`${subtextV}`));
         if (turnt) {
            break;
         }
      } while (turnt && (2.9 > subtextV));
         homeactiveL = !homeactiveL;
      let greytick3 = shared9 == String.fromCharCode(56,52,103,106,102,118,116,103,103,105,0);
      do {
          let mapbuffern = String.fromCharCode(107,95,52,49,95,102,105,111,0);
          let footballfieldC = String.fromCharCode(100,111,99,107,101,114,95,114,95,57,50,0);
         shared9 = `${(shared9 == String.fromCharCode(76,0) ? parseInt(`${subtextV}`) : shared9.length)}`;
         mapbuffern += `${footballfieldC.length - mapbuffern.length}`;
         footballfieldC += `${(mapbuffern == String.fromCharCode(113,0) ? footballfieldC.length : mapbuffern.length)}`;
         if (greytick3) {
            break;
         }
      } while (greytick3 && (!shared9.includes(`${subtextV}`)));
      if (3 == (shared9.length ^ 3)) {
          let libimagepipelinef: Array<any> = [563, 690, 378];
          let static_6ir: Array<any> = [764, 582];
          let matchinactiveB = String.fromCharCode(119,95,52,95,114,101,99,117,114,115,105,118,101,108,121,0);
          let libturbomodulejsijniU = String.fromCharCode(108,105,98,111,112,117,115,95,114,95,53,0);
          let neonv = true;
         subtextV *= (libturbomodulejsijniU == String.fromCharCode(74,0) ? libturbomodulejsijniU.length : parseInt(`${subtextV}`));
         libimagepipelinef = [(libimagepipelinef.length + (neonv ? 3 : 2))];
         static_6ir.push(static_6ir.length);
         matchinactiveB += `${(2 & (neonv ? 3 : 1))}`;
      }
       let attributedstringe = 4;
      if (1 > (parseInt(`${subtextV}`) / (Math.max(shared9.length, 8))) || (subtextV / (Math.max(shared9.length, 8))) > 4.69) {
         shared9 = `${attributedstringe}`;
      }
      sentry3 %= Math.max(2, 1);
      dependencyt = [2];
   let modulesp = blacklist4 <= 6512366;
   do {
       let logoutz = false;
       let nodeH: Map<any, any> = new Map([[String.fromCharCode(121,95,52,57,95,108,111,111,107,0),472], [String.fromCharCode(116,105,101,114,95,100,95,53,55,0),365], [String.fromCharCode(110,95,48,95,115,99,114,111,108,108,97,98,108,101,0),222]]);
       let footballfiledlayoutz: Array<any> = [String.fromCharCode(113,95,50,49,95,102,105,108,116,101,114,0), String.fromCharCode(120,99,104,97,99,104,97,95,98,95,57,51,0)];
       let iconarrowrightJ: Map<any, any> = new Map([[String.fromCharCode(98,121,114,121,105,95,57,95,57,55,0),771], [String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,115,95,49,55,0),52]]);
          let airbnbstarF = true;
          let cross2 = 4;
          let statsO = String.fromCharCode(114,101,109,117,120,101,114,95,106,95,50,48,0);
         nodeH = new Map([[`${logoutz}`, 1]]);
         airbnbstarF = 32 > statsO.length && 32 > cross2;
         cross2 ^= 2;
         statsO = "2";
          let libswresampleH = true;
          let twitterQ = String.fromCharCode(107,95,51,51,95,112,114,101,115,101,114,118,101,115,0);
          let predictionactives: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,101,114,115,95,119,95,49,54,0),758], [String.fromCharCode(97,117,116,111,109,97,116,105,99,95,122,95,55,55,0),978], [String.fromCharCode(103,95,55,51,95,116,97,116,105,99,0),339]]);
         footballfiledlayoutz = [2 | twitterQ.length];
         libswresampleH = null != predictionactives.get(`${libswresampleH}`);
         twitterQ = `${((libswresampleH ? 5 : 3) + 1)}`;
         predictionactives.set(`${libswresampleH}`, predictionactives.size & 1);
         nodeH.set(`${logoutz}`, ((logoutz ? 4 : 4) & footballfiledlayoutz.length));
      if (2 >= (2 * nodeH.size)) {
         nodeH.set(`${logoutz}`, iconarrowrightJ.size);
      }
         footballfiledlayoutz.push(nodeH.size | footballfiledlayoutz.length);
         nodeH.set(`${footballfiledlayoutz.length}`, footballfiledlayoutz.length);
          let infow = 2;
          let homeY = true;
         logoutz = 79 == infow;
         infow &= ((homeY ? 3 : 1));
          let taiwanu = true;
          let defaultroombgy = 2.0;
         logoutz = (((!logoutz ? nodeH.size : 96) * nodeH.size) >= 69);
         taiwanu = defaultroombgy <= 27.42;
         defaultroombgy += (parseFloat(`${parseInt(`${defaultroombgy}`) << (Math.min(4, Math.abs((taiwanu ? 1 : 3))))}`));
          let sell6 = 3.0;
         iconarrowrightJ.set(`${sell6}`, nodeH.size << (Math.min(1, Math.abs(parseInt(`${sell6}`)))));
         footballfiledlayoutz = [iconarrowrightJ.size ^ 3];
      let o_unlockO = 9311499 <= footballfiledlayoutz.length;
      do {
         footballfiledlayoutz = [2 >> (Math.min(5, Math.abs(nodeH.size)))];
         if (o_unlockO) {
            break;
         }
      } while ((1 < (nodeH.size | footballfiledlayoutz.length)) && o_unlockO);
          let clear3 = String.fromCharCode(106,95,56,56,95,99,108,117,115,116,101,114,0);
         nodeH.set(clear3, footballfiledlayoutz.length);
      blacklist4 <<= Math.min(Math.abs(2 | parseInt(`${constantsV}`)), 3);
      if (modulesp) {
         break;
      }
   } while (modulesp && (sentry3 == 4));
      register_jt *= blacklist4;
      basketballg.push(template_45U.length | sentry3);
      condensedR = 42.18 == register_jt && dependencyt.length == 35;
      blacklist4 |= 3;
   while (sentry3 > 1) {
      constantsV /= Math.max(parseInt(`${predictionbannerM}`), 1);
      break;
   }
   if ((emojiE.length | 2) == 1) {
      emojiE += `${basketballg.length | dependencyt.length}`;
   }
   for (let k = 0; k < 2; k++) {
       let libswscaleN = String.fromCharCode(117,110,112,105,110,95,117,95,51,49,0);
       let componentV: Map<any, any> = new Map([[String.fromCharCode(110,95,52,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0),String.fromCharCode(106,95,49,48,48,95,114,101,97,100,105,110,105,116,0)], [String.fromCharCode(116,111,110,101,95,103,95,53,0),String.fromCharCode(104,101,97,100,101,114,115,95,117,95,56,56,0)], [String.fromCharCode(120,95,57,52,95,97,97,97,97,0),String.fromCharCode(97,117,103,109,101,110,116,101,100,95,106,95,57,48,0)]]);
          let thailandr: Map<any, any> = new Map([[String.fromCharCode(115,95,51,56,95,114,116,115,112,99,111,100,101,115,0),String.fromCharCode(115,117,110,118,101,114,95,104,95,54,55,0)], [String.fromCharCode(106,95,57,48,95,114,101,117,112,108,111,97,100,105,110,103,0),String.fromCharCode(104,101,97,100,101,114,115,95,109,95,52,49,0)], [String.fromCharCode(107,95,51,95,110,111,99,97,115,101,0),String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,108,95,54,49,0)]]);
         libswscaleN += `${componentV.size}`;
         thailandr.set(`${thailandr.size}`, thailandr.size);
      let langkeyf = 9428523 <= componentV.size;
      do {
         componentV.set(`${libswscaleN}`, componentV.size + 3);
         if (langkeyf) {
            break;
         }
      } while (langkeyf && (3 > (libswscaleN.length - componentV.size)));
      for (let s = 0; s < 3; s++) {
         libswscaleN = "3";
      }
          let styleY = String.fromCharCode(105,119,104,116,95,105,95,53,0);
         libswscaleN = `${3 ^ componentV.size}`;
         styleY = `${2 >> (Math.min(1, styleY.length))}`;
      for (let v = 0; v < 1; v++) {
          let baseliner = 3.0;
          let reactnativeratingsu = String.fromCharCode(101,95,54,53,95,115,113,108,105,116,101,115,101,115,115,105,111,110,0);
          let binddatass = String.fromCharCode(102,97,99,116,111,114,115,95,107,95,52,51,0);
         componentV = new Map([[`${componentV.size}`, reactnativeratingsu.length]]);
         baseliner -= parseFloat(`${parseInt(`${baseliner}`)}`);
         reactnativeratingsu += `${parseInt(`${baseliner}`) % (Math.max(1, 9))}`;
         binddatass = `${binddatass.length - 3}`;
      }
      if (componentV.size <= 4) {
         componentV.set(`${libswscaleN}`, 1);
      }
      sentry3 *= 1 >> (Math.min(1, Math.abs(blacklist4)));
   }
   for (let r = 0; r < 1; r++) {
       let mbsplashA = true;
       let network4 = String.fromCharCode(105,102,102,116,95,111,95,50,53,0);
      let description_sv = network4.length >= 6651192;
      do {
          let whiteanimationlive0 = String.fromCharCode(98,111,111,115,116,101,100,95,110,95,54,53,0);
          let eactp = 5;
          let analyticsu = 4.0;
          let orientation7 = String.fromCharCode(98,111,117,110,99,105,110,103,95,103,95,53,52,0);
          let crossa = 3;
         network4 += `${parseInt(`${analyticsu}`) ^ 3}`;
         whiteanimationlive0 = `${(whiteanimationlive0 == String.fromCharCode(65,0) ? whiteanimationlive0.length : orientation7.length)}`;
         eactp *= orientation7.length >> (Math.min(1, whiteanimationlive0.length));
         analyticsu -= 2 + orientation7.length;
         crossa %= Math.max(3, eactp);
         if (description_sv) {
            break;
         }
      } while ((network4.length > 4) && description_sv);
      if (network4.length < 2) {
          let collection8 = 3;
          let iconsharefriendsD = 1.0;
          let whited = String.fromCharCode(115,116,121,108,101,95,55,95,55,48,0);
          let footballfieldj = String.fromCharCode(106,95,50,49,95,99,111,109,109,105,116,0);
          let rewardvideoE = 0.0;
         mbsplashA = 12.16 <= iconsharefriendsD;
         collection8 &= 3 >> (Math.min(1, footballfieldj.length));
         iconsharefriendsD *= footballfieldj.length;
         whited += `${footballfieldj.length}`;
         rewardvideoE += 3;
      }
         mbsplashA = mbsplashA && network4.length > 87;
      while (mbsplashA && network4.length > 2) {
         network4 += `${network4.length - 3}`;
         break;
      }
      for (let c = 0; c < 2; c++) {
         mbsplashA = !mbsplashA;
      }
      while (4 < network4.length || mbsplashA) {
         network4 += `${((mbsplashA ? 2 : 2) / (Math.max(network4.length, 3)))}`;
         break;
      }
      blacklist4 %= Math.max(3, 2);
   }
       let sortM = String.fromCharCode(105,95,57,49,95,110,100,111,116,115,0);
       let androidl = 3.0;
      while (3.100 > (androidl + 4.22) || 5 > (sortM.length + parseInt(`${androidl}`))) {
         androidl *= sortM.length ^ parseInt(`${androidl}`);
         break;
      }
         androidl -= (sortM == String.fromCharCode(82,0) ? parseInt(`${androidl}`) : sortM.length);
      for (let o = 0; o < 2; o++) {
         sortM = `${parseInt(`${androidl}`) - 1}`;
      }
      if (androidl >= 2.26) {
         androidl += sortM.length;
      }
         sortM = `${sortM.length * parseInt(`${androidl}`)}`;
          let imagemanagerN = String.fromCharCode(114,95,55,56,95,97,117,116,104,111,114,105,122,97,116,105,111,110,115,0);
          let modeY = 1.0;
          let emojiheartI = String.fromCharCode(98,95,52,55,95,102,97,117,108,116,0);
         androidl /= Math.max((String.fromCharCode(116,0) == imagemanagerN ? imagemanagerN.length : parseInt(`${androidl}`)), 1);
         modeY += parseInt(`${modeY}`) ^ emojiheartI.length;
         emojiheartI = `${(emojiheartI == String.fromCharCode(77,0) ? parseInt(`${modeY}`) : emojiheartI.length)}`;
      condensedR = parseInt(`${androidl}`) >= template_45U.length;
   if (emojiE.length < 5) {
      sentry3 /= Math.max(((libfileh ? 3 : 5) >> (Math.min(Math.abs(2), 4))), 5);
   }
   let cornerP = libfileh ? !libfileh : libfileh;
   do {
      libfileh = 50 < emojiE.length;
      if (cornerP) {
         break;
      }
   } while (((sentry3 % 4) < 3 || sentry3 < 4) && cornerP);
      basketballg.push(parseInt(`${constantsV}`) << (Math.min(Math.abs(parseInt(`${register_jt}`)), 1)));
      blacklist4 ^= parseInt(`${constantsV}`);
      predictionbannerM *= parseFloat(`${sentry3}`);
      basketballg = [parseInt(`${register_jt}`)];
      condensedR = sentry3 == 6;
   for (let u = 0; u < 2; u++) {
       let watchH = 5;
       let colors2 = String.fromCharCode(98,95,49,50,95,97,116,97,98,97,115,101,0);
      while ((5 | colors2.length) > 1 || 5 > (colors2.length | 5)) {
         watchH %= Math.max(3, colors2.length);
         break;
      }
      if (4 > colors2.length) {
         watchH -= watchH;
      }
      sentry3 ^= (3 >> (Math.min(5, Math.abs((libfileh ? 1 : 4)))));
   }
   while (libfileh) {
      libfileh = blacklist4 > register_jt;
      break;
   }
      condensedR = 52.9 >= constantsV;
   while (2 >= template_45U.length) {
      template_45U = [3 & blacklist4];
      break;
   }
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
       let nbatrophy6 = String.fromCharCode(115,116,100,105,110,116,95,114,95,57,55,0);
    let debugT: Map<any, any> = new Map([[String.fromCharCode(101,95,52,48,95,114,103,116,99,115,0),933], [String.fromCharCode(116,97,103,115,95,98,95,50,55,0),360]]);
    let catagoryb = String.fromCharCode(111,95,51,52,95,104,119,109,97,112,0);
    let utilsf = 1.0;
    let subbasketballplayere = 1;
    let hookr = String.fromCharCode(115,95,49,48,95,116,101,115,116,111,114,105,103,0);
    let targetg = 3;
    let libglog3: Array<any> = [412, 585, 394];
    let iconstarb = 4.0;
    let rewardA = 0.0;
    let arrowupC = String.fromCharCode(100,105,102,102,101,114,95,116,95,53,52,0);
    let libfbM = 1.0;
    let libreact7 = true;
    let delegate_6f = String.fromCharCode(113,95,51,55,95,102,114,105,99,116,105,111,110,0);
   let commentz = 4915487 >= targetg;
   do {
      targetg |= parseInt(`${utilsf}`);
      if (commentz) {
         break;
      }
   } while (commentz && (3 == (targetg << (Math.min(Math.abs(4), 1)))));
   if (3.100 >= (5.74 - rewardA)) {
      targetg <<= Math.min(Math.abs(libglog3.length * parseInt(`${rewardA}`)), 2);
   }
   if (nbatrophy6 == catagoryb) {
      catagoryb += "1";
   }
      libglog3 = [2 / (Math.max(parseInt(`${utilsf}`), 2))];
   let loadingX = utilsf >= 8429448.0;
   do {
       let activec = 4;
       let clockU = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,113,95,50,54,0);
       let annerJ: Array<any> = [String.fromCharCode(115,101,110,116,101,110,99,101,95,48,95,50,51,0), String.fromCharCode(112,95,51,49,95,113,117,105,110,116,0), String.fromCharCode(100,95,49,48,48,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0)];
         annerJ.push(annerJ.length - 3);
      if (1 >= (annerJ.length - activec)) {
         annerJ = [3];
      }
         activec &= activec % (Math.max(clockU.length, 4));
         annerJ = [activec - annerJ.length];
      for (let k = 0; k < 3; k++) {
          let carousel1: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,54,95,49,50,0),961], [String.fromCharCode(99,112,117,117,115,101,100,95,97,95,56,57,0),458]]);
          let lessg = String.fromCharCode(115,95,48,95,99,111,109,112,108,105,97,110,116,0);
         activec %= Math.max(4, clockU.length % (Math.max(3, 1)));
         carousel1.set(lessg, lessg.length + carousel1.size);
      }
         annerJ.push(annerJ.length);
         annerJ = [1];
      for (let h = 0; h < 3; h++) {
          let linkR = 4.0;
         clockU += `${annerJ.length * 3}`;
         linkR *= 3 | parseInt(`${linkR}`);
      }
      while (activec >= clockU.length) {
         clockU = `${activec}`;
         break;
      }
      utilsf += activec % 3;
      if (loadingX) {
         break;
      }
   } while (loadingX && (utilsf < iconstarb));
   if (subbasketballplayere > 2) {
      subbasketballplayere %= Math.max(hookr.length, 3);
   }
   for (let p = 0; p < 1; p++) {
       let defaultprofilepic6: Array<any> = [812, 474, 367];
       let chinasameB = String.fromCharCode(98,95,56,56,95,109,105,103,114,97,116,101,0);
       let rewardvideob = 1.0;
       let send3 = String.fromCharCode(111,116,104,101,114,110,97,109,101,95,53,95,57,57,0);
          let smallV: Array<any> = [63, 617, 989];
          let iconsaveimageN = false;
          let airbnbstarb = 4;
         send3 = `${(String.fromCharCode(98,0) == send3 ? send3.length : smallV.length)}`;
         smallV.push(((iconsaveimageN ? 5 : 3) & airbnbstarb));
         iconsaveimageN = 25 >= airbnbstarb;
      for (let s = 0; s < 1; s++) {
         rewardvideob += send3.length << (Math.min(Math.abs(1), 3));
      }
      while (1 == send3.length) {
         chinasameB = `${3 & parseInt(`${rewardvideob}`)}`;
         break;
      }
      let libffmpegkit0 = chinasameB.length >= 8870367;
      do {
          let catagory8 = String.fromCharCode(119,95,54,95,105,115,111,0);
         chinasameB = `${send3.length}`;
         catagory8 = `${catagory8.length * 2}`;
         if (libffmpegkit0) {
            break;
         }
      } while (libffmpegkit0 && (5 == (chinasameB.length ^ 5) && 3 == (5 ^ chinasameB.length)));
         chinasameB += `${send3.length}`;
         rewardvideob -= 1;
      for (let y = 0; y < 2; y++) {
         send3 += `${1 ^ send3.length}`;
      }
      if (4 > chinasameB.length && send3.length > 4) {
         chinasameB = `${send3.length}`;
      }
       let fullt = true;
       let videovarI = false;
          let libfilep = 1.0;
          let switch_rT = String.fromCharCode(110,95,52,51,95,112,108,97,121,108,105,115,116,0);
         chinasameB = `${(String.fromCharCode(74,0) == chinasameB ? parseInt(`${libfilep}`) : chinasameB.length)}`;
         libfilep -= switch_rT.length / 1;
         switch_rT = `${switch_rT.length << (Math.min(Math.abs(3), 1))}`;
         videovarI = chinasameB.length > 53;
         send3 += `${((videovarI ? 4 : 2) / (Math.max(8, chinasameB.length)))}`;
      subbasketballplayere /= Math.max(3, libglog3.length);
      defaultprofilepic6 = [2 - defaultprofilepic6.length];
   }
       let teamo = String.fromCharCode(110,95,57,52,95,115,108,117,103,0);
       let h_titleH = 2;
       let b_hashY: Map<any, any> = new Map([[String.fromCharCode(108,95,51,53,95,99,111,110,115,117,109,97,98,108,101,0),String.fromCharCode(114,95,52,54,95,100,111,119,110,115,99,97,108,101,0)], [String.fromCharCode(114,101,100,105,114,101,99,116,111,114,95,101,95,53,51,0),String.fromCharCode(104,95,57,49,95,109,101,115,97,103,101,115,0)]]);
         h_titleH &= 3 % (Math.max(9, teamo.length));
          let memberV: Array<any> = [String.fromCharCode(101,105,110,116,114,95,48,95,57,50,0), String.fromCharCode(107,101,121,119,111,114,100,95,122,95,53,48,0)];
         h_titleH *= memberV.length;
         b_hashY.set(teamo, (teamo == String.fromCharCode(103,0) ? teamo.length : h_titleH));
      while (4 < (b_hashY.size / (Math.max(5, 2)))) {
          let rewardm = String.fromCharCode(97,95,53,48,95,112,97,114,105,116,121,0);
          let floatingC = 1;
          let dragY: Array<any> = [732, 107, 11];
          let viewer0 = String.fromCharCode(120,95,55,50,95,111,117,116,0);
         h_titleH *= 2;
         rewardm = `${floatingC}`;
         floatingC ^= dragY.length;
         dragY = [2 ^ floatingC];
         viewer0 += `${floatingC % (Math.max(2, viewer0.length))}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
         h_titleH %= Math.max(h_titleH, 3);
      }
         h_titleH ^= b_hashY.size;
         b_hashY = new Map([[`${h_titleH}`, teamo.length << (Math.min(Math.abs(1), 5))]]);
      while ((5 / (Math.max(2, teamo.length))) == 2) {
         b_hashY = new Map([[`${h_titleH}`, teamo.length]]);
         break;
      }
       let interstitialG = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,110,95,57,57,0);
      hookr += `${parseInt(`${rewardA}`)}`;
       let countdownf = String.fromCharCode(102,95,49,53,95,112,114,111,106,101,99,116,101,100,0);
       let brightnessb: Map<any, any> = new Map([[String.fromCharCode(114,95,52,51,95,117,110,101,115,99,97,112,101,0),592], [String.fromCharCode(98,95,50,50,95,114,102,112,115,0),649], [String.fromCharCode(99,111,108,108,97,112,115,105,110,103,95,117,95,51,57,0),921]]);
      while (2 >= (1 * brightnessb.size)) {
          let dataC = 3.0;
          let xvodb = String.fromCharCode(115,116,117,98,95,113,95,57,49,0);
          let field9 = 2.0;
          let defaultprofilepicw = false;
          let whitevideoliveH = true;
         brightnessb = new Map([[`${whitevideoliveH}`, ((whitevideoliveH ? 3 : 4) % (Math.max(parseInt(`${field9}`), 7)))]]);
         dataC *= 1 & parseInt(`${dataC}`);
         xvodb += `${(xvodb == String.fromCharCode(116,0) ? (defaultprofilepicw ? 5 : 2) : xvodb.length)}`;
         field9 /= Math.max(parseFloat(`${parseInt(`${dataC}`) >> (Math.min(xvodb.length, 1))}`), 5);
         defaultprofilepicw = ((xvodb.length * (defaultprofilepicw ? xvodb.length : 34)) <= 34);
         break;
      }
       let dragJ = String.fromCharCode(115,117,98,112,97,116,104,95,100,95,50,48,0);
       let nend8 = String.fromCharCode(99,111,100,101,98,108,111,99,107,115,95,56,95,49,50,0);
      for (let m = 0; m < 2; m++) {
         nend8 += `${brightnessb.size & 1}`;
      }
      let hookA = 7451726 >= countdownf.length;
      do {
         countdownf += `${(dragJ == String.fromCharCode(66,0) ? dragJ.length : brightnessb.size)}`;
         if (hookA) {
            break;
         }
      } while (hookA && ((brightnessb.size % (Math.max(countdownf.length, 6))) >= 5 && 5 >= (brightnessb.size % (Math.max(8, countdownf.length)))));
      let penaltymatchicong = 7749359 >= dragJ.length;
      do {
          let libreactperfloggerjni3: Array<any> = [60, 211];
         dragJ += `${(String.fromCharCode(81,0) == dragJ ? brightnessb.size : dragJ.length)}`;
         libreactperfloggerjni3 = [1 & libreactperfloggerjni3.length];
         if (penaltymatchicong) {
            break;
         }
      } while ((countdownf != String.fromCharCode(105,0) && dragJ == String.fromCharCode(104,0)) && penaltymatchicong);
          let middlewarel: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,100,105,99,95,111,95,57,50,0),true ], [String.fromCharCode(111,95,50,95,108,97,121,111,117,116,0),true ]]);
         brightnessb.set(countdownf, (String.fromCharCode(102,0) == countdownf ? brightnessb.size : countdownf.length));
         middlewarel = new Map([[`${middlewarel.size}`, 3 | middlewarel.size]]);
      targetg += debugT.size ^ 2;
   while (4.67 > (parseFloat(`${targetg}`) * rewardA) || (targetg ^ 1) > 1) {
      targetg <<= Math.min(5, Math.abs(2 << (Math.min(Math.abs(targetg), 4))));
      break;
   }
   let nativey = subbasketballplayere >= 9447573;
   do {
      subbasketballplayere |= hookr.length % 2;
      if (nativey) {
         break;
      }
   } while ((subbasketballplayere <= 4) && nativey);
      catagoryb += `${targetg % 3}`;
   let promotionE = 5232427 <= libglog3.length;
   do {
      libglog3.push((String.fromCharCode(85,0) == catagoryb ? parseInt(`${iconstarb}`) : catagoryb.length));
      if (promotionE) {
         break;
      }
   } while ((2 <= (hookr.length | libglog3.length)) && promotionE);
      iconstarb /= Math.max(catagoryb.length, 5);
       let iconmoreE: Map<any, any> = new Map([[String.fromCharCode(100,95,52,55,95,109,111,110,111,98,105,116,0),930], [String.fromCharCode(103,95,57,55,95,100,101,99,108,97,114,101,0),271], [String.fromCharCode(100,95,52,57,95,109,101,97,110,0),117]]);
       let selectiony = true;
          let feedback4 = 2;
          let sourceL: Map<any, any> = new Map([[String.fromCharCode(115,108,105,99,101,97,110,103,108,101,95,113,95,57,51,0),false ], [String.fromCharCode(98,95,49,51,95,98,117,114,115,116,121,0),true ], [String.fromCharCode(97,95,56,48,95,118,101,114,121,0),true ]]);
          let profileh = 5.0;
         iconmoreE = new Map([[`${sourceL.size}`, sourceL.size >> (Math.min(Math.abs(2), 2))]]);
         feedback4 <<= Math.min(2, Math.abs(parseInt(`${profileh}`) & 2));
         profileh += feedback4 % 2;
      for (let v = 0; v < 3; v++) {
          let subin1 = String.fromCharCode(114,95,54,50,95,99,111,108,115,0);
          let feedbackD = String.fromCharCode(101,110,100,115,95,110,95,55,55,0);
         iconmoreE = new Map([[`${iconmoreE.size}`, ((selectiony ? 2 : 4) + iconmoreE.size)]]);
         subin1 += `${3 & feedbackD.length}`;
         feedbackD = `${subin1.length}`;
      }
         selectiony = !selectiony;
         iconmoreE.set(`${selectiony}`, 1 ^ iconmoreE.size);
      for (let c = 0; c < 2; c++) {
          let homeplayerD: Array<any> = [179, 13];
          let mooni = String.fromCharCode(115,95,54,56,95,116,102,117,101,108,0);
         iconmoreE.set(`${homeplayerD.length}`, iconmoreE.size);
         homeplayerD.push((mooni == String.fromCharCode(74,0) ? mooni.length : mooni.length));
      }
         iconmoreE = new Map([[`${iconmoreE.size}`, ((selectiony ? 4 : 2) << (Math.min(Math.abs(iconmoreE.size), 3)))]]);
      debugT = new Map([[`${debugT.size}`, hookr.length]]);
   if (5 == catagoryb.length) {
      iconstarb *= targetg;
   }
      arrowupC = `${hookr.length - subbasketballplayere}`;
      catagoryb = `${1 ^ nbatrophy6.length}`;
      iconstarb += parseInt(`${utilsf}`) ^ libglog3.length;
       let homeloadingI = false;
       let tickg = String.fromCharCode(110,112,117,116,95,120,95,50,56,0);
      while (homeloadingI) {
          let eactw: Map<any, any> = new Map([[String.fromCharCode(98,95,49,50,95,112,117,98,108,105,115,104,101,114,115,0),855], [String.fromCharCode(98,114,105,100,103,101,97,98,108,101,95,97,95,55,50,0),783]]);
          let mapping5 = String.fromCharCode(115,105,112,114,100,97,116,97,95,102,95,55,49,0);
          let register_rw3: Array<any> = [String.fromCharCode(105,118,97,114,95,115,95,52,52,0), String.fromCharCode(98,95,52,53,95,111,112,101,110,99,108,0)];
          let foregroundz = 5.0;
         homeloadingI = (((homeloadingI ? 23 : tickg.length) / (Math.max(tickg.length, 6))) >= 23);
         eactw.set(`${foregroundz}`, parseInt(`${foregroundz}`) / (Math.max(9, mapping5.length)));
         mapping5 += `${register_rw3.length % (Math.max(1, 1))}`;
         register_rw3 = [eactw.size % (Math.max(7, mapping5.length))];
         break;
      }
          let baselinev: Array<any> = [382, 136];
          let libreactperfloggerjniR = 0;
         tickg += `${baselinev.length & 2}`;
         baselinev.push(libreactperfloggerjniR | 1);
         libreactperfloggerjniR <<= Math.min(3, Math.abs(1));
      if (tickg.length > 3) {
         tickg += `${3 ^ tickg.length}`;
      }
          let mbjscommonm: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,98,121,116,101,95,119,95,55,57,0),String.fromCharCode(115,116,115,100,95,108,95,55,0)], [String.fromCharCode(107,95,56,52,95,118,108,98,117,102,0),String.fromCharCode(120,95,57,52,95,118,111,119,101,108,0)]]);
         tickg += `${(String.fromCharCode(78,0) == tickg ? tickg.length : mbjscommonm.size)}`;
      for (let q = 0; q < 3; q++) {
         tickg = `${1 - tickg.length}`;
      }
      if (!homeloadingI) {
          let policyr = String.fromCharCode(112,95,51,95,109,97,114,103,105,110,115,0);
         tickg += `${(policyr.length * (homeloadingI ? 1 : 4))}`;
      }
      nbatrophy6 = `${arrowupC.length}`;
   if (libfbM < 5.54) {
      subbasketballplayere ^= (catagoryb == String.fromCharCode(56,0) ? catagoryb.length : parseInt(`${iconstarb}`));
   }
      libfbM += parseInt(`${libfbM}`);
      rewardA -= parseFloat(`${subbasketballplayere ^ parseInt(`${iconstarb}`)}`);
      hookr += `${3 ^ arrowupC.length}`;
   let close0 = subbasketballplayere >= 7607424;
   do {
      subbasketballplayere -= catagoryb.length - 3;
      if (close0) {
         break;
      }
   } while (close0 && ((subbasketballplayere + nbatrophy6.length) <= 1));
   let roboto7 = hookr.length >= 6557294;
   do {
      hookr += `${nbatrophy6.length / (Math.max(8, parseInt(`${rewardA}`)))}`;
      if (roboto7) {
         break;
      }
   } while ((catagoryb.length <= hookr.length) && roboto7);
       let maths = String.fromCharCode(97,112,112,101,97,114,95,53,95,52,54,0);
         maths = `${maths.length}`;
         maths = `${maths.length * maths.length}`;
          let fieldX = true;
         maths += "3";
      targetg += (String.fromCharCode(88,0) == catagoryb ? libglog3.length : catagoryb.length);
       let flyerk: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,95,115,95,54,54,0),false ], [String.fromCharCode(101,120,112,105,114,101,115,95,101,95,53,57,0),false ]]);
       let shirtT = String.fromCharCode(117,110,115,112,105,108,108,95,55,95,54,50,0);
       let infoC = String.fromCharCode(99,95,53,53,95,115,113,117,97,114,101,0);
      let bgvipsport8 = infoC == String.fromCharCode(118,54,52,0);
      do {
          let tick1 = false;
          let actionsC = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,56,95,55,49,0);
          let selectedy = true;
          let pageo = 5.0;
          let rightH: Map<any, any> = new Map([[String.fromCharCode(114,95,51,52,95,98,101,115,116,0),422], [String.fromCharCode(117,95,50,55,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0),297]]);
         infoC = `${(parseInt(`${pageo}`) << (Math.min(5, Math.abs((tick1 ? 4 : 1)))))}`;
         tick1 = actionsC.length <= 46;
         actionsC += `${1 + actionsC.length}`;
         selectedy = (1 <= ((!selectedy ? 1 : actionsC.length) << (Math.min(actionsC.length, 3))));
         pageo -= 2;
         rightH.set(actionsC, ((selectedy ? 1 : 5)));
         if (bgvipsport8) {
            break;
         }
      } while (bgvipsport8 && ((infoC.length >> (Math.min(Math.abs(5), 1))) >= 5 || (5 >> (Math.min(5, Math.abs(flyerk.size)))) >= 5));
       let whitevideoliveN = String.fromCharCode(111,95,49,53,95,112,114,101,115,99,97,108,101,0);
         flyerk.set(whitevideoliveN, whitevideoliveN.length + 3);
      while (3 > infoC.length || whitevideoliveN.length > 3) {
          let const_fP = String.fromCharCode(118,97,108,117,101,100,95,117,95,57,52,0);
          let minivodI = 2.0;
         whitevideoliveN += "2";
         const_fP = `${parseInt(`${minivodI}`) / (Math.max(2, const_fP.length))}`;
         minivodI += parseFloat(`${parseInt(`${minivodI}`)}`);
         break;
      }
         flyerk = new Map([[infoC, 3]]);
         whitevideoliveN += `${whitevideoliveN.length}`;
          let sideb = String.fromCharCode(99,95,57,51,95,102,112,99,0);
         flyerk = new Map([[infoC, (whitevideoliveN == String.fromCharCode(80,0) ? infoC.length : whitevideoliveN.length)]]);
         sideb += `${(sideb == String.fromCharCode(86,0) ? sideb.length : sideb.length)}`;
         whitevideoliveN = `${flyerk.size}`;
          let animationI = 3.0;
          let bangl = String.fromCharCode(115,116,105,114,110,103,95,49,95,57,55,0);
          let basketballicond: Array<any> = [231, 892, 203];
         shirtT += `${flyerk.size - bangl.length}`;
         animationI -= parseFloat(`${parseInt(`${animationI}`) ^ 2}`);
         bangl += `${parseInt(`${animationI}`)}`;
         basketballicond = [basketballicond.length];
      targetg >>= Math.min(1, Math.abs(flyerk.size));
   if ((catagoryb.length * parseInt(`${iconstarb}`)) > 5 && 4.15 > (catagoryb.length * iconstarb)) {
      catagoryb = `${parseInt(`${iconstarb}`)}`;
   }
       let uimanager5 = true;
       let videovarZ = false;
      while (!videovarZ && uimanager5) {
         videovarZ = !uimanager5;
         break;
      }
      if (!videovarZ || uimanager5) {
          let shootyesgoalw = 3.0;
          let armvaJ = true;
          let membership4: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,100,101,110,99,101,95,115,95,52,54,0),734], [String.fromCharCode(120,95,55,95,116,105,109,101,105,110,102,111,114,99,101,0),557]]);
          let sharewhiteL: Array<any> = [String.fromCharCode(119,95,55,55,95,99,114,99,99,0), String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,109,95,56,51,0), String.fromCharCode(109,95,53,50,95,103,114,97,109,115,0)];
         videovarZ = (armvaJ ? uimanager5 : !armvaJ);
         shootyesgoalw -= parseFloat(`${sharewhiteL.length}`);
         membership4 = new Map([[`${membership4.size}`, membership4.size]]);
         sharewhiteL = [membership4.size + parseInt(`${shootyesgoalw}`)];
      }
      nbatrophy6 = `${parseInt(`${iconstarb}`) * parseInt(`${utilsf}`)}`;
   let package_ngJ = String.fromCharCode(121,114,55,51,117,95,97,112,0) == nbatrophy6;
   do {
      nbatrophy6 += `${(hookr == String.fromCharCode(50,0) ? hookr.length : (libreact7 ? 5 : 4))}`;
      if (package_ngJ) {
         break;
      }
   } while (package_ngJ && (4.36 <= (iconstarb + nbatrophy6.length)));
   while ((5 + subbasketballplayere) <= 1 || 5 <= (parseInt(`${utilsf}`) + subbasketballplayere)) {
      utilsf /= Math.max(targetg, 4);
      break;
   }
   let umengW = libfbM >= 6979057.0;
   do {
      libfbM -= (String.fromCharCode(114,0) == catagoryb ? catagoryb.length : parseInt(`${rewardA}`));
      if (umengW) {
         break;
      }
   } while ((5.74 >= (libfbM / (Math.max(4, hookr.length))) && 2.81 >= (libfbM / 5.74)) && umengW);
   for (let f = 0; f < 1; f++) {
       let phonex = 4.0;
       let indexr = 2;
       let changeC = 4;
       let profileF = 2.0;
          let huaweiT = 3;
          let statisticsinactiveu = true;
          let privacyp = 1.0;
         profileF *= changeC;
         huaweiT *= 2;
         statisticsinactiveu = huaweiT <= 3;
         privacyp /= Math.max(1, parseFloat(`${1}`));
         changeC += changeC;
      for (let e = 0; e < 1; e++) {
         profileF += indexr;
      }
      if (3 == (changeC * indexr)) {
         changeC |= changeC / (Math.max(indexr, 8));
      }
      if (4 >= (indexr - 1) && 5 >= (indexr ^ 1)) {
          let scorej = 1;
          let abidetecty = String.fromCharCode(98,111,111,115,116,101,100,95,112,95,50,53,0);
          let fullscreenmaxr = 3.0;
          let catagoryB = 2.0;
          let tailQ = 0;
         indexr *= changeC;
         scorej >>= Math.min(Math.abs(1), 1);
         abidetecty += `${3 - abidetecty.length}`;
         fullscreenmaxr /= Math.max(parseInt(`${fullscreenmaxr}`) / (Math.max(parseInt(`${catagoryB}`), 2)), 4);
         catagoryB /= Math.max(parseInt(`${catagoryB}`) << (Math.min(4, Math.abs(tailQ))), 5);
         tailQ /= Math.max(3, 1);
      }
      while (profileF == 1.29) {
         phonex *= parseFloat(`${parseInt(`${profileF}`) - 2}`);
         break;
      }
      while (4.46 == profileF) {
          let iconcalendarl = String.fromCharCode(99,105,110,101,95,102,95,52,48,0);
         profileF /= Math.max(changeC, 4);
         iconcalendarl += `${iconcalendarl.length}`;
         break;
      }
         indexr >>= Math.min(2, Math.abs(indexr - changeC));
         changeC /= Math.max(3, indexr);
         indexr <<= Math.min(3, Math.abs(parseInt(`${profileF}`)));
      while ((changeC % 5) >= 4) {
          let mbbanneru = 2;
          let chatroombackgroundO = String.fromCharCode(107,95,50,95,115,101,110,100,101,114,0);
         profileF += chatroombackgroundO.length;
         mbbanneru <<= Math.min(Math.abs(3 | mbbanneru), 4);
         chatroombackgroundO += `${mbbanneru}`;
         break;
      }
      if (changeC == 3) {
         phonex += parseFloat(`${parseInt(`${profileF}`)}`);
      }
      libglog3.push(1);
   }
       let animation5 = String.fromCharCode(117,95,49,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
      let turndownW = animation5.length <= 6267062;
      do {
         animation5 += `${1 >> (Math.min(2, animation5.length))}`;
         if (turndownW) {
            break;
         }
      } while ((animation5 != String.fromCharCode(70,0)) && turndownW);
         animation5 = `${animation5.length % (Math.max(3, 6))}`;
         animation5 = `${(String.fromCharCode(89,0) == animation5 ? animation5.length : animation5.length)}`;
      subbasketballplayere <<= Math.min(Math.abs(targetg), 2);
   if ((utilsf + 1.46) <= 2.40) {
      subbasketballplayere %= Math.max(2, parseInt(`${libfbM}`) / 3);
   }
   let iconsettingU = rewardA >= 7829429.0;
   do {
      rewardA += (parseFloat(`${hookr == String.fromCharCode(81,0) ? parseInt(`${iconstarb}`) : hookr.length}`));
      if (iconsettingU) {
         break;
      }
   } while (iconsettingU && (2 == (arrowupC.length | 3) && (arrowupC.length ^ 3) == 4));
 },
      onReadyForDisplay,
    }: mayi_GoogleViews,
    ref
  ) => {
    const videoPlayerRef = React.useRef<Video | null>();
    const { colors, textVariants } = useTheme();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(initialStartTime);
    const [isBuffering, setIsBuffering] = useState(false);
    const [seekDirection, setSeekDirection] = useState<
      "scorepopsoundReport" | "none" | "frame_tTick"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<mayi_Goallogo>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<mayi_Baseline>('userReducer');
    const bufferRef = useRef(false);
    const onBuffer = (bufferObj: any) => {
      if (!bufferObj.isBuffering) {
        accumulatedSkip.current = 0;
      }
      setIsBuffering(bufferObj.isBuffering);
      bufferRef.current = bufferObj.isBuffering;
    };

    
    const [isInBackground, setIsInBackground] = useState(false);

    useImperativeHandle(ref, () => ({
      setPause: (pauseVideo: boolean) => {
        setIsPaused(pauseVideo);
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
       let scheduleL = 0.0;
    let profilepicu: Array<any> = [253, 900];
    let predictionbannerv = false;
    let combined2 = false;
    let hongkongs: Map<any, any> = new Map([[String.fromCharCode(121,95,54,49,0),445], [String.fromCharCode(110,95,54,51,95,103,101,110,101,114,97,116,101,100,0),73], [String.fromCharCode(106,95,53,48,95,99,104,115,101,116,0),295]]);
    let libjsijniprofilerQ = 2.0;
    let rewardvideoi = String.fromCharCode(114,101,100,117,110,100,97,110,116,95,53,95,51,48,0);
      scheduleL -= parseFloat(`${parseInt(`${libjsijniprofilerQ}`) & 2}`);
      hongkongs.set(rewardvideoi, 3 + rewardvideoi.length);
       let nend8 = String.fromCharCode(114,95,57,52,95,112,111,119,0);
       let rncoreV = 4;
       let lessw = String.fromCharCode(114,95,51,49,95,102,111,108,100,0);
       let libreactnativejniC = String.fromCharCode(118,95,49,57,95,100,101,97,99,116,105,118,97,116,101,0);
      let gmailG = lessw == String.fromCharCode(95,53,56,103,108,119,0);
      do {
          let videocommone = 2.0;
          let defaultlogop: Map<any, any> = new Map([[String.fromCharCode(103,97,109,101,115,95,117,95,54,54,0),861], [String.fromCharCode(102,108,97,116,95,100,95,56,54,0),647], [String.fromCharCode(114,95,49,48,48,95,118,114,101,112,0),938]]);
          let emojik = 4;
          let awayteamfieldT: Map<any, any> = new Map([[String.fromCharCode(122,95,52,54,95,109,101,109,97,108,105,103,110,0),78], [String.fromCharCode(119,95,56,53,95,112,108,105,115,116,0),359]]);
          let cornerp = String.fromCharCode(110,95,48,95,115,99,101,110,101,0);
         lessw += `${3 << (Math.min(3, Math.abs(defaultlogop.size)))}`;
         videocommone *= 2 << (Math.min(3, cornerp.length));
         defaultlogop = new Map([[`${awayteamfieldT.size}`, 1]]);
         emojik ^= 1 >> (Math.min(Math.abs(parseInt(`${videocommone}`)), 3));
         awayteamfieldT = new Map([[`${awayteamfieldT.size}`, 1 % (Math.max(7, cornerp.length))]]);
         if (gmailG) {
            break;
         }
      } while ((libreactnativejniC != lessw) && gmailG);
      if (libreactnativejniC.endsWith(lessw)) {
         lessw += `${(String.fromCharCode(49,0) == libreactnativejniC ? lessw.length : libreactnativejniC.length)}`;
      }
          let whiteU = String.fromCharCode(105,110,100,101,111,100,97,116,97,95,100,95,54,54,0);
          let strh = String.fromCharCode(109,95,49,48,95,108,105,98,115,115,104,0);
          let darkh = 1.0;
         libreactnativejniC = `${parseInt(`${darkh}`)}`;
         whiteU += "1";
         strh += `${(whiteU == String.fromCharCode(103,0) ? whiteU.length : strh.length)}`;
         darkh -= parseFloat(`${2}`);
          let modeJ: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,50,95,49,48,0),true ], [String.fromCharCode(98,95,57,56,95,114,100,102,116,0),false ]]);
          let latnD = String.fromCharCode(110,101,118,101,114,95,108,95,49,48,48,0);
         rncoreV *= 3;
         modeJ.set(latnD, 1 << (Math.min(4, Math.abs(modeJ.size))));
         latnD = "2";
         rncoreV -= nend8.length | rncoreV;
      predictionbannerv = rewardvideoi == String.fromCharCode(53,0) && 15 == hongkongs.size;
      hongkongs.set(rewardvideoi, rewardvideoi.length);

      if (onBack !== undefined) {

   for (let m = 0; m < 3; m++) {
      combined2 = !combined2;
   }
   let mbnativeadvancedH = 8403980 >= rewardvideoi.length;
   do {
       let launchZ: Array<any> = [226, 959, 989];
          let cancel6: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,97,108,109,111,115,116,0),958], [String.fromCharCode(114,102,102,116,98,95,104,95,49,48,48,0),482]]);
          let imagenetworkerr_ = String.fromCharCode(109,112,99,100,97,116,97,95,54,95,57,48,0);
         launchZ.push(imagenetworkerr_.length);
         cancel6 = new Map([[`${cancel6.size}`, cancel6.size / 1]]);
         imagenetworkerr_ += `${cancel6.size << (Math.min(Math.abs(2), 5))}`;
      while (5 >= (launchZ.length / 3) && (launchZ.length / (Math.max(launchZ.length, 7))) >= 3) {
         launchZ = [launchZ.length];
         break;
      }
      let toponf = launchZ.length >= 9440209;
      do {
         launchZ.push(launchZ.length | launchZ.length);
         if (toponf) {
            break;
         }
      } while ((1 <= (4 >> (Math.min(4, launchZ.length))) || 3 <= (4 >> (Math.min(4, launchZ.length)))) && toponf);
      rewardvideoi = `${3 | launchZ.length}`;
      if (mbnativeadvancedH) {
         break;
      }
   } while ((!rewardvideoi.startsWith(`${scheduleL}`)) && mbnativeadvancedH);
   let selli = profilepicu.length >= 7931807;
   do {
      profilepicu = [((predictionbannerv ? 4 : 2))];
      if (selli) {
         break;
      }
   } while (selli && (!predictionbannerv));
   let yellowscoreball3 = scheduleL >= 7926632.0;
   do {
      scheduleL /= Math.max(parseFloat(`${1}`), 4);
      if (yellowscoreball3) {
         break;
      }
   } while ((profilepicu.length == 4) && yellowscoreball3);
        onBack();

   for (let n = 0; n < 2; n++) {
      libjsijniprofilerQ += profilepicu.length << (Math.min(5, Math.abs(hongkongs.size)));
   }
   for (let k = 0; k < 3; k++) {
      combined2 = !combined2 && rewardvideoi.length >= 74;
   }
   let scrollviewq = profilepicu.length <= 5583073;
   do {
       let iconsubssuccessE = 1;
          let libjsinspectorc = true;
          let colorsI = String.fromCharCode(121,95,51,53,95,101,118,97,108,115,0);
          let matchdetailbgO: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,101,100,95,97,95,53,0),949], [String.fromCharCode(104,95,57,49,95,104,105,103,104,98,100,0),633]]);
         iconsubssuccessE /= Math.max((2 - (libjsinspectorc ? 3 : 1)), 3);
         libjsinspectorc = matchdetailbgO.size == colorsI.length;
         colorsI += `${2 / (Math.max(4, matchdetailbgO.size))}`;
      let collection2 = iconsubssuccessE >= 5689451;
      do {
         iconsubssuccessE &= 2;
         if (collection2) {
            break;
         }
      } while (collection2 && (1 >= (iconsubssuccessE + 2)));
      while (iconsubssuccessE <= 4) {
         iconsubssuccessE >>= Math.min(3, Math.abs(1 & iconsubssuccessE));
         break;
      }
      profilepicu = [((predictionbannerv ? 1 : 1) & parseInt(`${libjsijniprofilerQ}`))];
      if (scrollviewq) {
         break;
      }
   } while (((3 >> (Math.min(3, profilepicu.length))) > 4) && scrollviewq);
   for (let v = 0; v < 1; v++) {
      rewardvideoi = `${(parseInt(`${scheduleL}`) >> (Math.min(4, Math.abs((combined2 ? 4 : 3)))))}`;
   }
        lockOrientation("PORTRAIT");

   if (!predictionbannerv) {
       let screenR = String.fromCharCode(106,95,57,95,99,97,112,116,105,111,110,0);
       let gemfilet = String.fromCharCode(111,102,111,114,109,97,116,95,120,95,56,50,0);
       let starA = true;
      let tempnodatagifv = 5192644 <= gemfilet.length;
      do {
         gemfilet = `${3 - gemfilet.length}`;
         if (tempnodatagifv) {
            break;
         }
      } while ((gemfilet.startsWith(`${starA}`)) && tempnodatagifv);
      if (gemfilet.length <= 3 || starA) {
         starA = screenR == String.fromCharCode(52,0);
      }
      let fullscreenmax6 = screenR.length >= 5610704;
      do {
         screenR += `${1 + gemfilet.length}`;
         if (fullscreenmax6) {
            break;
         }
      } while (fullscreenmax6 && (!starA && screenR.length == 2));
      let dragO = 9587374 <= screenR.length;
      do {
         screenR += `${gemfilet.length << (Math.min(screenR.length, 4))}`;
         if (dragO) {
            break;
         }
      } while (dragO && (1 <= screenR.length));
      if (!starA && gemfilet.length == 5) {
         starA = gemfilet.length > 65;
      }
       let videojsp = 4;
      while (gemfilet.startsWith(screenR)) {
         screenR += `${videojsp}`;
         break;
      }
         videojsp -= videojsp | 3;
          let privatechatbgK = 1.0;
          let rewardk = String.fromCharCode(108,97,118,117,95,51,95,50,53,0);
         screenR = `${(videojsp + (starA ? 2 : 3))}`;
         privatechatbgK -= parseFloat(`${parseInt(`${privatechatbgK}`) - rewardk.length}`);
         rewardk = `${(String.fromCharCode(72,0) == rewardk ? parseInt(`${privatechatbgK}`) : rewardk.length)}`;
      predictionbannerv = (screenR.length >> (Math.min(4, profilepicu.length))) == 100;
   }
      hongkongs.set(`${combined2}`, 2);
   if (!predictionbannerv) {
       let basketballtrophyq = String.fromCharCode(108,95,52,95,101,97,99,115,0);
       let halffieldimageV = 1.0;
       let smallorangemanp = String.fromCharCode(103,95,55,95,119,114,105,116,116,101,110,0);
       let renderx = String.fromCharCode(104,95,49,51,95,115,117,98,109,111,100,101,108,115,0);
       let greytickd = 2.0;
         greytickd -= (parseFloat(`${String.fromCharCode(120,0) == basketballtrophyq ? parseInt(`${halffieldimageV}`) : basketballtrophyq.length}`));
      for (let m = 0; m < 2; m++) {
          let encryptA = 2;
          let tailC = String.fromCharCode(102,105,108,108,112,95,103,95,49,56,0);
          let cedbadcebfbfbfbcfecbcJ = false;
          let libavdevicej = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,57,95,49,53,0);
          let iconfeedbacke = 5.0;
         halffieldimageV += parseFloat(`${parseInt(`${greytickd}`)}`);
         encryptA &= parseInt(`${iconfeedbacke}`) - 3;
         tailC = "3";
         cedbadcebfbfbfbcfecbcJ = (parseInt(`${iconfeedbacke}`) * libavdevicej.length) >= 19;
         libavdevicej += `${((cedbadcebfbfbfbcfecbcJ ? 4 : 5))}`;
      }
         smallorangemanp += `${renderx.length >> (Math.min(Math.abs(1), 4))}`;
      let animationsR = smallorangemanp.length >= 5280952;
      do {
         smallorangemanp += `${smallorangemanp.length >> (Math.min(Math.abs(1), 1))}`;
         if (animationsR) {
            break;
         }
      } while (((smallorangemanp.length * parseInt(`${halffieldimageV}`)) >= 2) && animationsR);
      for (let t = 0; t < 2; t++) {
          let roomL = String.fromCharCode(101,120,101,99,117,116,105,110,103,95,54,95,53,56,0);
          let predictionactivey: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,95,99,111,110,115,116,114,117,99,116,0),329], [String.fromCharCode(116,116,108,95,121,95,51,54,0),146]]);
          let liblogger4 = 5;
         renderx += `${basketballtrophyq.length & 2}`;
         roomL += "3";
         predictionactivey.set(`${roomL}`, 3 - roomL.length);
         liblogger4 ^= 1 + predictionactivey.size;
      }
      while (1.31 > halffieldimageV) {
          let halft = 4.0;
          let predictiondefaultO: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,48,95,98,117,114,110,0),785], [String.fromCharCode(115,112,108,105,99,101,95,104,95,52,49,0),826], [String.fromCharCode(98,95,49,50,95,99,111,100,101,114,115,0),627]]);
          let screenf = String.fromCharCode(107,95,49,48,48,95,115,99,117,98,98,101,114,0);
          let aboutu = String.fromCharCode(117,110,99,111,114,114,95,49,95,55,0);
         halffieldimageV += parseFloat(`${screenf.length & predictiondefaultO.size}`);
         halft /= Math.max(parseFloat(`${parseInt(`${halft}`) | aboutu.length}`), 2);
         predictiondefaultO.set(aboutu, parseInt(`${halft}`) / 3);
         screenf = `${(aboutu == String.fromCharCode(115,0) ? aboutu.length : parseInt(`${halft}`))}`;
         break;
      }
      let submitm = greytickd <= 8674626.0;
      do {
          let defaultprofilepicd: Map<any, any> = new Map([[String.fromCharCode(109,95,51,52,95,101,116,105,109,101,0),392], [String.fromCharCode(110,95,52,56,95,119,111,114,107,105,110,103,0),717]]);
          let sendM = 0;
          let iconK: Map<any, any> = new Map([[String.fromCharCode(98,95,53,53,95,114,97,110,107,115,0),585], [String.fromCharCode(99,95,52,56,95,112,111,115,116,105,111,110,0),184]]);
          let cancels = 3.0;
          let circleX = 5.0;
         greytickd += parseFloat(`${1}`);
         defaultprofilepicd = new Map([[`${iconK.size}`, sendM]]);
         sendM >>= Math.min(Math.abs(defaultprofilepicd.size), 5);
         iconK.set(`${sendM}`, 2 % (Math.max(8, iconK.size)));
         cancels += parseFloat(`${parseInt(`${cancels}`) << (Math.min(Math.abs(3), 3))}`);
         circleX *= parseFloat(`${parseInt(`${cancels}`) >> (Math.min(2, Math.abs(sendM)))}`);
         if (submitm) {
            break;
         }
      } while (submitm && ((parseInt(`${greytickd}`) - renderx.length) <= 2 || 2 <= (renderx.length - parseInt(`${greytickd}`))));
          let libfileT = 3.0;
         basketballtrophyq += "3";
         libfileT /= Math.max(1, parseInt(`${libfileT}`) << (Math.min(4, Math.abs(parseInt(`${libfileT}`)))));
         basketballtrophyq += `${3 >> (Math.min(3, smallorangemanp.length))}`;
          let mapping9 = 1;
          let shielddone1 = false;
         renderx = "2";
         mapping9 ^= (mapping9 << (Math.min(5, Math.abs((shielddone1 ? 1 : 2)))));
         shielddone1 = mapping9 == 25 || shielddone1;
      let episodeQ = 6346722.0 >= halffieldimageV;
      do {
         halffieldimageV -= parseFloat(`${renderx.length}`);
         if (episodeQ) {
            break;
         }
      } while (((3 / (Math.max(8, parseInt(`${halffieldimageV}`)))) <= 4 || (halffieldimageV / 5.64) <= 3.14) && episodeQ);
          let cornershootM: Map<any, any> = new Map([[String.fromCharCode(98,95,52,54,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0),498], [String.fromCharCode(114,101,113,117,101,115,116,101,100,95,111,95,57,56,0),780]]);
          let minivodO = String.fromCharCode(110,105,100,115,95,107,95,52,55,0);
          let favoriteP = true;
         halffieldimageV -= parseFloat(`${1 + basketballtrophyq.length}`);
         cornershootM = new Map([[`${cornershootM.size}`, 1 + cornershootM.size]]);
         minivodO += `${minivodO.length * cornershootM.size}`;
         favoriteP = !favoriteP;
      if (renderx.length < 4) {
          let stepj: Map<any, any> = new Map([[String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,114,95,56,48,0),882], [String.fromCharCode(117,95,56,57,95,112,101,114,109,117,116,97,116,105,111,110,115,0),953]]);
          let stepo = String.fromCharCode(116,95,53,49,95,99,111,110,118,101,114,116,101,100,0);
          let sendY = String.fromCharCode(118,95,51,52,95,102,105,101,108,0);
          let yellowscoreballq: Map<any, any> = new Map([[String.fromCharCode(109,95,54,49,95,119,104,105,116,101,108,105,115,116,0),944], [String.fromCharCode(115,97,109,112,108,101,99,112,121,95,106,95,56,56,0),483]]);
         renderx = `${smallorangemanp.length}`;
         stepj.set(sendY, 3 ^ yellowscoreballq.size);
         stepo += "1";
         sendY = `${sendY.length}`;
         yellowscoreballq = new Map([[sendY, sendY.length]]);
      }
      for (let j = 0; j < 1; j++) {
         renderx = `${smallorangemanp.length}`;
      }
          let iconadslinkM = String.fromCharCode(98,95,53,54,95,108,101,100,103,101,114,0);
         halffieldimageV *= parseFloat(`${smallorangemanp.length * parseInt(`${greytickd}`)}`);
         iconadslinkM = `${3 | iconadslinkM.length}`;
      profilepicu = [1 % (Math.max(parseInt(`${greytickd}`), 1))];
   }
   if ((libjsijniprofilerQ * 3.99) < 2.66 && 4 < (4 + hongkongs.size)) {
       let networkn = String.fromCharCode(122,95,54,49,95,115,113,117,97,114,101,115,0);
       let sinaB = 2.0;
      for (let n = 0; n < 3; n++) {
          let mailr = 4.0;
          let middleY = 5.0;
          let floatingh: Map<any, any> = new Map([[String.fromCharCode(120,95,54,51,95,102,114,111,109,0),false ], [String.fromCharCode(118,95,55,50,95,115,107,101,121,108,105,115,116,0),true ]]);
          let showlessh = String.fromCharCode(97,95,50,52,95,97,108,103,111,114,0);
         sinaB -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${middleY}`)), 3))}`);
         mailr -= parseFloat(`${1 * showlessh.length}`);
         middleY -= (parseFloat(`${showlessh == String.fromCharCode(103,0) ? showlessh.length : floatingh.size}`));
         floatingh.set(`${mailr}`, floatingh.size);
      }
      if (1.66 < (sinaB - 5.13) && 4 < (1 / (Math.max(1, networkn.length)))) {
         sinaB += parseFloat(`${networkn.length}`);
      }
      if ((sinaB / (Math.max(5.18, 10))) <= 3.6 || 3 <= (4 << (Math.min(4, networkn.length)))) {
         sinaB *= parseFloat(`${networkn.length}`);
      }
      while ((sinaB / 2.65) >= 2.43 && (parseInt(`${sinaB}`) / (Math.max(2, networkn.length))) >= 5) {
          let launchf = 0.0;
          let codegenK = false;
          let rocketh: Map<any, any> = new Map([[String.fromCharCode(100,95,50,51,95,118,109,100,97,117,100,105,111,0),356], [String.fromCharCode(117,110,102,111,99,117,115,101,100,95,106,95,52,49,0),255], [String.fromCharCode(101,95,49,56,95,112,114,97,103,109,97,0),764]]);
         sinaB /= Math.max((parseFloat(`${(codegenK ? 5 : 5) - parseInt(`${launchf}`)}`)), 4);
         launchf *= parseFloat(`${rocketh.size}`);
         codegenK = 76 < rocketh.size;
         break;
      }
          let resende = true;
          let bangh: Array<any> = [String.fromCharCode(108,111,99,105,95,118,95,57,54,0), String.fromCharCode(97,110,110,117,108,97,114,95,111,95,52,56,0), String.fromCharCode(98,95,49,57,95,99,111,110,110,101,99,116,101,100,0)];
         sinaB /= Math.max(2, parseFloat(`${networkn.length << (Math.min(Math.abs(2), 4))}`));
         resende = !resende;
         bangh = [(bangh.length & (resende ? 2 : 4))];
       let textinputH = 4;
       let predictionarrowM = 1;
      libjsijniprofilerQ *= ((combined2 ? 1 : 2) & profilepicu.length);
   }
        setIsFullScreen(false);
      } else {

      rewardvideoi = `${rewardvideoi.length}`;
   if (predictionbannerv) {
      hongkongs = new Map([[`${hongkongs.size}`, parseInt(`${libjsijniprofilerQ}`) << (Math.min(Math.abs(hongkongs.size), 4))]]);
   }
   for (let q = 0; q < 1; q++) {
      rewardvideoi = `${parseInt(`${libjsijniprofilerQ}`) - profilepicu.length}`;
   }
      rewardvideoi = `${1 << (Math.min(4, Math.abs(parseInt(`${scheduleL}`))))}`;
        

   while ((hongkongs.size % 3) >= 3 && hongkongs.size >= 3) {
      predictionbannerv = null == hongkongs.get(`${scheduleL}`);
      break;
   }
      profilepicu = [(3 % (Math.max(1, (predictionbannerv ? 4 : 2))))];
      combined2 = combined2 && profilepicu.length >= 78;
   let n_centerm = 8289742 <= profilepicu.length;
   do {
      profilepicu.push(((combined2 ? 3 : 4)));
      if (n_centerm) {
         break;
      }
   } while (n_centerm && (profilepicu.length < hongkongs.size));
        navigation.goBack();
      }
    };

    useEffect(() => {
      
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
      } else {
        
        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
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
            videoPlayerRef.current.setNativeProps({ paused: false })
            
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
    }, [navigation, isFullScreen, isPaused]);

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
       let policyS = 0;
    let modeH = 1;
    let flyero = String.fromCharCode(121,95,57,95,111,102,102,115,101,116,115,0);
    let middleQ: Array<any> = [272, 897];
    let graphics6: Map<any, any> = new Map([[String.fromCharCode(101,95,51,57,0),false ], [String.fromCharCode(101,95,51,53,95,102,105,108,101,110,97,109,101,115,0),true ]]);
    let videoc = false;
    let downarroww = String.fromCharCode(119,101,98,99,97,109,95,115,95,53,54,0);
    let klevinL = 1.0;
    let iconcalendarR = String.fromCharCode(98,95,53,54,95,99,108,101,97,114,97,108,108,0);
    let redirectJ = 1;
    let firebase0 = 4.0;
   if (klevinL > 3.32) {
      flyero += `${middleQ.length}`;
   }
   if ((downarroww.length - modeH) == 1 || 5 == (1 - modeH)) {
       let whitetickI = String.fromCharCode(114,100,101,108,116,97,95,106,95,52,54,0);
       let iconpipexpandi = 2.0;
         iconpipexpandi /= Math.max((whitetickI == String.fromCharCode(88,0) ? parseInt(`${iconpipexpandi}`) : whitetickI.length), 5);
      while ((parseInt(`${iconpipexpandi}`) * whitetickI.length) == 1 && (whitetickI.length | 1) == 2) {
         iconpipexpandi *= whitetickI.length;
         break;
      }
       let banga: Array<any> = [812, 357];
      let neonV = iconpipexpandi <= 5281289.0;
      do {
          let aboutb = 3;
          let privatechatbgg = String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,114,95,52,48,0);
          let goalL = 2;
          let apps_ = String.fromCharCode(115,111,108,118,101,95,49,95,48,0);
         iconpipexpandi *= 1 + privatechatbgg.length;
         aboutb <<= Math.min(Math.abs((apps_ == String.fromCharCode(116,0) ? apps_.length : goalL)), 5);
         privatechatbgg = "1";
         goalL /= Math.max(2, (String.fromCharCode(49,0) == apps_ ? goalL : apps_.length));
         if (neonV) {
            break;
         }
      } while ((4 <= (parseInt(`${iconpipexpandi}`) / 2) || 3.82 <= (1.51 / (Math.max(6, iconpipexpandi)))) && neonV);
      for (let h = 0; h < 1; h++) {
          let calendarb = String.fromCharCode(113,117,97,100,116,114,101,101,95,120,95,50,57,0);
          let iconviewergifX = 4.0;
         banga = [2 | banga.length];
         calendarb = `${calendarb.length ^ 1}`;
         iconviewergifX -= parseInt(`${iconviewergifX}`) / (Math.max(calendarb.length, 6));
      }
      for (let r = 0; r < 3; r++) {
         banga.push(parseInt(`${iconpipexpandi}`) & whitetickI.length);
      }
      downarroww = "1";
   }
   while (Array.from(graphics6.keys()).includes(`${middleQ.length}`)) {
      graphics6 = new Map([[`${graphics6.size}`, 2 / (Math.max(3, graphics6.size))]]);
      break;
   }
      modeH &= downarroww.length & flyero.length;
   let libavformatZ = 6167640.0 >= klevinL;
   do {
      klevinL += parseFloat(`${2}`);
      if (libavformatZ) {
         break;
      }
   } while (((4 >> (Math.min(2, downarroww.length))) <= 4) && libavformatZ);
      downarroww = `${flyero.length}`;
   if (1 < (modeH ^ 3) && 1 < (3 ^ modeH)) {
      flyero = "1";
   }
   let sinae = downarroww == String.fromCharCode(110,99,101,48,120,120,110,57,50,97,0);
   do {
      downarroww += `${flyero.length}`;
      if (sinae) {
         break;
      }
   } while (sinae && (4.65 >= (parseFloat(`${downarroww.length}`) / (Math.max(8, klevinL))) || 2.46 >= (klevinL / (Math.max(4.65, 3)))));
      flyero += `${modeH * 2}`;
   if (policyS >= middleQ.length) {
       let subtextH = 4;
      let ewardedK = 9363356 <= subtextH;
      do {
         subtextH -= subtextH / 1;
         if (ewardedK) {
            break;
         }
      } while ((3 <= (2 | subtextH)) && ewardedK);
         subtextH <<= Math.min(Math.abs(subtextH), 2);
          let libreactnativeblobU = String.fromCharCode(109,95,52,57,0);
         subtextH /= Math.max(2, 1);
         libreactnativeblobU = `${libreactnativeblobU.length}`;
      middleQ.push(middleQ.length);
   }
   while ((2 - policyS) >= 1) {
       let right_ = String.fromCharCode(98,95,51,52,95,109,101,103,97,98,121,116,101,0);
       let google9 = String.fromCharCode(110,95,51,51,95,115,104,111,119,119,97,118,101,115,0);
       let predictionactiveB = 0.0;
       let subtextr = 4;
       let arrowrightwithtail_ = 1.0;
      while ((right_.length ^ 2) <= 1) {
         predictionactiveB *= 3;
         break;
      }
      for (let b = 0; b < 2; b++) {
          let baseline8: Array<any> = [479, 200, 524];
          let zoomH = String.fromCharCode(115,112,97,110,115,95,115,95,50,0);
         google9 = `${zoomH.length}`;
         baseline8.push(3 >> (Math.min(2, baseline8.length)));
         zoomH += `${baseline8.length}`;
      }
      while ((arrowrightwithtail_ / (Math.max(3.95, 9))) == 2.74 && 3.95 == (arrowrightwithtail_ / (Math.max(right_.length, 6)))) {
         right_ = `${(String.fromCharCode(87,0) == right_ ? parseInt(`${predictionactiveB}`) : right_.length)}`;
         break;
      }
         predictionactiveB += google9.length;
      if ((3.67 / (Math.max(4, arrowrightwithtail_))) <= 5.60 || (3.67 - arrowrightwithtail_) <= 1.9) {
         arrowrightwithtail_ /= Math.max(2, (right_ == String.fromCharCode(122,0) ? parseInt(`${predictionactiveB}`) : right_.length));
      }
      while (right_ == String.fromCharCode(87,0)) {
          let morec = String.fromCharCode(102,95,57,49,95,112,111,112,117,112,0);
          let styleg = 5.0;
          let banner9 = 5;
          let modeK = 5.0;
          let anythinkU: Array<any> = [413, 647];
         google9 += `${anythinkU.length}`;
         morec = "1";
         styleg -= parseFloat(`${morec.length}`);
         banner9 *= 2 + banner9;
         modeK *= morec.length >> (Math.min(Math.abs(3), 2));
         anythinkU = [banner9 * parseInt(`${modeK}`)];
         break;
      }
          let core4 = 3;
          let searchC = 0;
         google9 = `${searchC}`;
         core4 ^= 3;
      let listg = 5114274.0 >= predictionactiveB;
      do {
         predictionactiveB -= subtextr >> (Math.min(Math.abs(parseInt(`${predictionactiveB}`)), 1));
         if (listg) {
            break;
         }
      } while ((2 > (4 ^ google9.length)) && listg);
      for (let r = 0; r < 3; r++) {
         subtextr |= (right_ == String.fromCharCode(102,0) ? parseInt(`${arrowrightwithtail_}`) : right_.length);
      }
      let typingR = 9054690.0 <= predictionactiveB;
      do {
         predictionactiveB += subtextr & 1;
         if (typingR) {
            break;
         }
      } while ((2 >= (2 >> (Math.min(3, Math.abs(subtextr)))) && 1.99 >= (predictionactiveB - subtextr)) && typingR);
         arrowrightwithtail_ += 1;
      for (let j = 0; j < 1; j++) {
         arrowrightwithtail_ *= right_.length + 2;
      }
       let interstitial6: Array<any> = [830, 37, 273];
         arrowrightwithtail_ += subtextr;
      if (3.56 < (predictionactiveB / (Math.max(8, arrowrightwithtail_))) && (3.56 * arrowrightwithtail_) < 1.6) {
         arrowrightwithtail_ += parseInt(`${arrowrightwithtail_}`) << (Math.min(4, Math.abs(3)));
      }
      policyS += ((videoc ? 1 : 2));
      break;
   }
      iconcalendarR = `${iconcalendarR.length}`;

        console.log("err save vod!");

   let privacyw = videoc ? !videoc : videoc;
   do {
      videoc = downarroww.length < 13;
      if (privacyw) {
         break;
      }
   } while ((videoc) && privacyw);
   while (2.98 <= (modeH - klevinL)) {
      modeH >>= Math.min(Math.abs(flyero.length >> (Math.min(5, Math.abs(modeH)))), 1);
      break;
   }
       let humidityd = 4;
       let colorsf = 5.0;
       let iconclosewhites = 3.0;
      for (let x = 0; x < 1; x++) {
         humidityd *= parseInt(`${iconclosewhites}`);
      }
         iconclosewhites -= parseInt(`${colorsf}`) | humidityd;
         humidityd &= parseInt(`${colorsf}`) + humidityd;
      for (let z = 0; z < 2; z++) {
          let basketballiconN = true;
          let dycreatorm = String.fromCharCode(105,95,49,54,95,114,101,116,117,114,110,0);
          let selectedx = 3;
         colorsf /= Math.max(parseFloat(`${selectedx}`), 4);
         basketballiconN = (58 == (dycreatorm.length % (Math.max(4, (basketballiconN ? dycreatorm.length : 58)))));
         selectedx *= (3 % (Math.max(5, (basketballiconN ? 2 : 5))));
      }
         humidityd /= Math.max(parseInt(`${colorsf}`), 3);
      let downloadedu = 5938787.0 <= colorsf;
      do {
         colorsf += parseFloat(`${parseInt(`${iconclosewhites}`)}`);
         if (downloadedu) {
            break;
         }
      } while (downloadedu && (colorsf >= humidityd));
       let gray5 = false;
       let emojiheartx = true;
          let downf = true;
         gray5 = 45 == humidityd;
         downf = (downf ? !downf : downf);
      while (!emojiheartx) {
         iconclosewhites *= 2 >> (Math.min(Math.abs(parseInt(`${colorsf}`)), 5));
         break;
      }
      downarroww += `${graphics6.size}`;
   while ((policyS * iconcalendarR.length) < 1 && 1 < (policyS * iconcalendarR.length)) {
      iconcalendarR += "2";
      break;
   }
      iconcalendarR = `${(modeH * (videoc ? 5 : 5))}`;
       let baidup = String.fromCharCode(109,97,107,101,114,112,109,95,56,95,50,52,0);
       let iconmoreo = 2.0;
          let successc: Array<any> = [String.fromCharCode(117,95,49,51,95,116,119,105,116,116,101,114,0), String.fromCharCode(114,101,119,114,105,116,101,95,117,95,51,53,0)];
         iconmoreo /= Math.max(5, 2 + successc.length);
         baidup += `${parseInt(`${iconmoreo}`) << (Math.min(baidup.length, 5))}`;
      for (let c = 0; c < 1; c++) {
          let i_countg = 2;
          let megaphoneN = String.fromCharCode(99,95,53,48,95,99,111,115,113,102,0);
         iconmoreo += baidup.length;
         i_countg %= Math.max(2, 1 ^ i_countg);
         megaphoneN = `${megaphoneN.length}`;
      }
      for (let j = 0; j < 3; j++) {
         baidup = `${baidup.length}`;
      }
      if (baidup.length <= 2) {
         baidup += `${(baidup == String.fromCharCode(85,0) ? baidup.length : parseInt(`${iconmoreo}`))}`;
      }
         iconmoreo -= 1 * parseInt(`${iconmoreo}`);
      redirectJ += parseInt(`${klevinL}`);
   if (!videoc) {
       let nbatrophyK = 4;
          let catagorys = String.fromCharCode(112,95,50,48,95,100,97,114,107,0);
         nbatrophyK >>= Math.min(Math.abs(nbatrophyK), 5);
         catagorys = `${3 << (Math.min(5, catagorys.length))}`;
         nbatrophyK <<= Math.min(3, Math.abs(nbatrophyK % (Math.max(7, nbatrophyK))));
          let libturbomodulejsijniU = String.fromCharCode(98,115,102,115,95,97,95,57,0);
         nbatrophyK |= (libturbomodulejsijniU == String.fromCharCode(108,0) ? nbatrophyK : libturbomodulejsijniU.length);
      videoc = (redirectJ >> (Math.min(downarroww.length, 2))) >= 81;
   }
   let lineo = graphics6.size >= 7205315;
   do {
       let mutedF: Map<any, any> = new Map([[String.fromCharCode(120,112,97,108,100,118,95,53,95,55,51,0),517], [String.fromCharCode(114,101,97,115,109,95,101,95,55,53,0),517], [String.fromCharCode(114,95,55,54,95,111,98,115,101,114,118,101,114,0),101]]);
       let humidityW = String.fromCharCode(100,105,97,108,111,103,117,101,115,95,104,95,54,56,0);
       let shootP = String.fromCharCode(114,95,49,52,95,104,97,100,97,109,97,114,100,0);
       let arrowv = 5.0;
      while (!humidityW.endsWith(`${shootP.length}`)) {
         shootP += `${mutedF.size % (Math.max(shootP.length, 2))}`;
         break;
      }
       let greyk = 0.0;
       let mbbida = 5.0;
          let libavdeviceU = true;
         mutedF.set(`${libavdeviceU}`, shootP.length / 1);
      if (2.9 == greyk) {
          let rankx = false;
          let libreactperfloggerjnio: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,101,100,95,56,95,49,48,0),897], [String.fromCharCode(120,95,49,48,95,97,112,112,101,110,100,105,110,103,0),15], [String.fromCharCode(116,95,50,54,95,115,105,103,115,0),591]]);
          let friendst = String.fromCharCode(98,95,52,57,95,112,99,97,99,104,101,0);
          let container3 = String.fromCharCode(111,95,51,51,95,110,117,108,108,0);
         greyk *= 1 ^ container3.length;
         rankx = ((libreactperfloggerjnio.size - (rankx ? libreactperfloggerjnio.size : 83)) > 58);
         friendst = `${libreactperfloggerjnio.size}`;
         container3 = `${(friendst == String.fromCharCode(115,0) ? (rankx ? 1 : 3) : friendst.length)}`;
      }
       let backgroundJ = 2.0;
       let incident4: Array<any> = [String.fromCharCode(113,117,97,100,115,95,113,95,52,50,0), String.fromCharCode(100,95,55,95,110,97,117,116,105,99,97,108,0)];
       let libavutilD: Array<any> = [959, 229];
       let largesound1 = 5;
       let iconcloseU = 3;
          let reactw = String.fromCharCode(105,114,114,101,108,118,97,110,116,95,56,95,49,48,48,0);
          let chinasameR = false;
          let contextf = String.fromCharCode(119,109,97,118,111,105,99,101,95,117,95,50,54,0);
         backgroundJ += (parseFloat(`${3 >> (Math.min(5, Math.abs((chinasameR ? 3 : 3))))}`));
         reactw += `${reactw.length}`;
         chinasameR = String.fromCharCode(83,0) == contextf;
         contextf += "2";
         arrowv -= largesound1;
          let long__k: Map<any, any> = new Map([[String.fromCharCode(99,114,111,110,111,115,95,48,95,57,48,0),983], [String.fromCharCode(105,103,110,111,114,101,115,95,118,95,56,52,0),741], [String.fromCharCode(120,95,49,56,95,112,114,111,112,97,103,97,116,105,111,110,0),101]]);
          let libreactp: Array<any> = [571, 33, 121];
         arrowv += 1 & largesound1;
         long__k = new Map([[`${long__k.size}`, 1 >> (Math.min(1, libreactp.length))]]);
         libreactp.push(long__k.size);
         mutedF = new Map([[`${mutedF.size}`, parseInt(`${backgroundJ}`) % 1]]);
          let descT = 5;
          let firebase2 = String.fromCharCode(117,110,99,111,110,115,117,109,101,100,95,99,95,52,0);
         humidityW += `${(String.fromCharCode(77,0) == shootP ? shootP.length : parseInt(`${arrowv}`))}`;
         descT += 1;
         firebase2 = `${3 & firebase2.length}`;
      graphics6.set(`${iconcalendarR}`, graphics6.size << (Math.min(Math.abs(1), 1)));
      if (lineo) {
         break;
      }
   } while ((!Array.from(graphics6.values()).includes(middleQ.length)) && lineo);
       let reddownarrowS = String.fromCharCode(103,101,110,104,95,53,95,52,53,0);
       let traminij = 0;
      let eabafadfadddbafeddddeeefeaafy = reddownarrowS.length <= 5058708;
      do {
          let nextH = String.fromCharCode(116,97,98,115,95,98,95,49,50,0);
          let roundb = String.fromCharCode(105,95,51,52,95,115,101,115,115,105,111,110,105,100,0);
          let bgvipxvodH = 5.0;
          let expandz = false;
         reddownarrowS += `${roundb.length}`;
         nextH = `${3 % (Math.max(1, nextH.length))}`;
         roundb = `${((expandz ? 1 : 4) % (Math.max(parseInt(`${bgvipxvodH}`), 10)))}`;
         bgvipxvodH -= parseInt(`${bgvipxvodH}`) % (Math.max(nextH.length, 2));
         expandz = !expandz;
         if (eabafadfadddbafeddddeeefeaafy) {
            break;
         }
      } while (eabafadfadddbafeddddeeefeaafy && (4 == (traminij % 3) || 3 == (reddownarrowS.length % (Math.max(7, traminij)))));
      let condensedf = 5852406 <= traminij;
      do {
         traminij ^= traminij / (Math.max(reddownarrowS.length, 5));
         if (condensedf) {
            break;
         }
      } while (condensedf && (4 <= (traminij * reddownarrowS.length) || (reddownarrowS.length * 4) <= 3));
       let routert = true;
      let buildO = 8504328 <= traminij;
      do {
          let sellp = false;
          let bufferK = String.fromCharCode(105,95,51,53,95,104,111,117,114,108,121,0);
          let feedback5 = 0.0;
         traminij %= Math.max(4, ((routert ? 1 : 4) - traminij));
         sellp = !sellp;
         bufferK = `${parseInt(`${feedback5}`) >> (Math.min(bufferK.length, 4))}`;
         feedback5 /= Math.max(parseFloat(`${3}`), 5);
         if (buildO) {
            break;
         }
      } while ((3 < (2 * traminij) || routert) && buildO);
      let abidetectQ = traminij <= 8236438;
      do {
          let success8 = 4.0;
          let register_c6G = String.fromCharCode(113,95,52,50,95,99,101,114,116,112,111,108,0);
          let homeplayer7 = 4;
          let langi: Array<any> = [200, 15];
          let iconsharefriendsw: Map<any, any> = new Map([[String.fromCharCode(113,95,56,53,95,108,111,99,108,0),141], [String.fromCharCode(100,105,103,101,115,116,95,118,95,49,57,0),41]]);
         traminij <<= Math.min(Math.abs(1), 2);
         success8 /= Math.max(3, parseFloat(`${langi.length}`));
         register_c6G = `${iconsharefriendsw.size}`;
         homeplayer7 &= parseInt(`${success8}`);
         langi = [register_c6G.length + homeplayer7];
         iconsharefriendsw.set(`${success8}`, parseInt(`${success8}`) / 3);
         if (abidetectQ) {
            break;
         }
      } while (abidetectQ && (traminij < 2));
         traminij <<= Math.min(5, Math.abs(((routert ? 1 : 5))));
      flyero += `${iconcalendarR.length & reddownarrowS.length}`;
       let promotionI = String.fromCharCode(102,108,97,116,116,101,110,101,100,95,50,95,57,57,0);
       let emptyW = 5.0;
      if ((1 - parseInt(`${emptyW}`)) > 2 || (promotionI.length - parseInt(`${emptyW}`)) > 1) {
          let bellK = 1.0;
          let nbatrophyn = 2;
         emptyW += (promotionI == String.fromCharCode(75,0) ? promotionI.length : parseInt(`${bellK}`));
         bellK *= nbatrophyn - 3;
         nbatrophyn ^= nbatrophyn;
      }
         promotionI += `${parseInt(`${emptyW}`) << (Math.min(promotionI.length, 4))}`;
         emptyW /= Math.max(1, promotionI.length & 1);
         emptyW -= promotionI.length - 3;
         emptyW -= parseInt(`${emptyW}`) >> (Math.min(promotionI.length, 2));
      while (5 >= (promotionI.length + 4) || 3.25 >= (emptyW / (Math.max(promotionI.length, 7)))) {
         promotionI += `${promotionI.length << (Math.min(Math.abs(1), 4))}`;
         break;
      }
      downarroww = `${3 / (Math.max(modeH, 5))}`;
   for (let b = 0; b < 1; b++) {
      downarroww += `${policyS % (Math.max(3, 5))}`;
   }
   for (let k = 0; k < 3; k++) {
      klevinL *= parseFloat(`${parseInt(`${klevinL}`)}`);
   }
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let langO: Array<any> = [839, 803];
    let vietnamc = false;
    let tailG = String.fromCharCode(122,95,54,50,95,102,97,118,101,0);
    let singleN = String.fromCharCode(114,95,55,95,114,100,112,99,109,0);
    let analytics7 = 2.0;
    let libjsi0 = true;
    let libfollym = String.fromCharCode(114,101,112,108,105,101,115,95,102,95,50,56,0);
    let libhermes_ = 3;
    let collectiony = String.fromCharCode(101,95,56,53,95,110,111,116,0);
    let iconnewssharei = 1.0;
      singleN = `${libfollym.length}`;
   while (libjsi0 || vietnamc) {
       let screenD = 5;
         screenD >>= Math.min(5, Math.abs(screenD));
          let libbufferq: Array<any> = [453, 274, 171];
          let time_2jt = String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,112,95,57,53,0);
          let libjsijniprofilerr = 4.0;
         screenD %= Math.max(5, screenD | time_2jt.length);
         libbufferq = [libbufferq.length];
         time_2jt += `${libbufferq.length - parseInt(`${libjsijniprofilerr}`)}`;
         libjsijniprofilerr -= parseInt(`${libjsijniprofilerr}`) & 1;
      let reactnativeultimatelistview8 = screenD >= 6725428;
      do {
         screenD %= Math.max(3, 3 / (Math.max(5, screenD)));
         if (reactnativeultimatelistview8) {
            break;
         }
      } while ((2 < (4 - screenD) || 5 < (screenD - 4)) && reactnativeultimatelistview8);
      vietnamc = !vietnamc;
      break;
   }
   let footballtrophyv = libjsi0 ? !libjsi0 : libjsi0;
   do {
       let uimanagerY = String.fromCharCode(99,95,50,49,95,115,116,100,101,114,114,0);
       let topic8: Map<any, any> = new Map([[String.fromCharCode(106,95,53,52,95,116,119,105,110,118,113,0),true ], [String.fromCharCode(97,99,116,117,97,108,95,121,95,49,51,0),false ], [String.fromCharCode(107,95,49,49,95,104,100,115,112,0),true ]]);
       let file3 = String.fromCharCode(101,95,55,50,95,114,101,100,101,116,101,99,116,0);
       let commentP = 1.0;
       let traminiT = String.fromCharCode(101,95,52,50,95,115,99,104,101,109,97,115,0);
      let profilepicw = 9875105 >= file3.length;
      do {
          let yingX = false;
          let homeinactiveF = String.fromCharCode(105,95,51,55,95,97,118,117,116,105,108,114,101,115,0);
          let plashS = 3;
          let indicatork: Array<any> = [726, 881, 678];
          let connectionz: Array<any> = [363, 687];
         file3 = `${((yingX ? 4 : 2) & 3)}`;
         yingX = (connectionz.length >> (Math.min(homeinactiveF.length, 2))) == 28;
         homeinactiveF = `${2 >> (Math.min(2, connectionz.length))}`;
         plashS /= Math.max(connectionz.length ^ indicatork.length, 2);
         indicatork = [3];
         if (profilepicw) {
            break;
         }
      } while ((uimanagerY != file3) && profilepicw);
      if (!file3.endsWith(traminiT)) {
         traminiT += "2";
      }
      if ((commentP * 2.34) > 3.24) {
         topic8.set(`${uimanagerY}`, (String.fromCharCode(101,0) == uimanagerY ? uimanagerY.length : topic8.size));
      }
      for (let t = 0; t < 1; t++) {
         traminiT = `${parseInt(`${commentP}`)}`;
      }
         topic8.set(file3, (file3 == String.fromCharCode(53,0) ? uimanagerY.length : file3.length));
          let collectionb = String.fromCharCode(109,95,53,51,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0);
          let vietnamM = false;
         file3 = `${((vietnamM ? 4 : 4) & traminiT.length)}`;
         collectionb += `${(String.fromCharCode(72,0) == collectionb ? collectionb.length : collectionb.length)}`;
         vietnamM = String.fromCharCode(55,0) == collectionb;
         traminiT += `${file3.length << (Math.min(Math.abs(1), 5))}`;
      for (let q = 0; q < 1; q++) {
         commentP /= Math.max(1, traminiT.length % (Math.max(3, 1)));
      }
         traminiT = `${(String.fromCharCode(77,0) == file3 ? file3.length : parseInt(`${commentP}`))}`;
         traminiT = `${(file3 == String.fromCharCode(88,0) ? file3.length : topic8.size)}`;
          let logoutJ = 2.0;
         commentP -= file3.length - 1;
         logoutJ /= Math.max(5, parseFloat(`${parseInt(`${logoutJ}`) >> (Math.min(Math.abs(parseInt(`${logoutJ}`)), 2))}`));
       let mnewinterstitialY = 5.0;
      let predictionarrowj = 6764651.0 >= commentP;
      do {
         commentP *= topic8.size;
         if (predictionarrowj) {
            break;
         }
      } while (predictionarrowj && (5 < (parseInt(`${commentP}`) * file3.length)));
      while (3.43 == (commentP - 1.99) || (parseInt(`${commentP}`) - uimanagerY.length) == 2) {
          let cedbadcebfbfbfbcfecbcn = String.fromCharCode(102,108,116,112,95,55,95,52,51,0);
          let with_1W = false;
          let template_b3u = String.fromCharCode(115,117,110,118,101,114,95,50,95,50,50,0);
          let gestureU: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,121,101,100,95,120,95,55,56,0),String.fromCharCode(104,97,110,100,101,114,95,119,95,54,55,0)], [String.fromCharCode(109,117,116,117,97,108,95,97,95,52,53,0),String.fromCharCode(119,105,100,116,104,115,95,51,95,55,48,0)], [String.fromCharCode(102,105,110,97,108,95,49,95,49,52,0),String.fromCharCode(104,95,54,49,95,109,101,114,103,101,100,0)]]);
          let videovarJ = true;
         uimanagerY = "1";
         cedbadcebfbfbfbcfecbcn = "3";
         with_1W = (!videovarJ ? !with_1W : videovarJ);
         template_b3u = `${cedbadcebfbfbfbcfecbcn.length * 2}`;
         gestureU = new Map([[`${videovarJ}`, template_b3u.length >> (Math.min(Math.abs(1), 2))]]);
         break;
      }
          let friendsY = true;
          let h_imageI = 3.0;
         traminiT = `${parseInt(`${mnewinterstitialY}`) ^ 2}`;
         friendsY = h_imageI >= 47.15 || !friendsY;
         h_imageI += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${h_imageI}`)), 4))}`);
      libjsi0 = 71 <= tailG.length;
      if (footballtrophyv) {
         break;
      }
   } while (footballtrophyv && (libjsi0 && 2 > (2 | langO.length)));

      

   while (vietnamc) {
       let agreementO: Map<any, any> = new Map([[String.fromCharCode(113,95,55,49,95,98,103,114,97,0),636], [String.fromCharCode(103,114,97,112,104,95,107,95,56,55,0),385], [String.fromCharCode(104,95,49,51,95,112,97,115,116,101,0),298]]);
       let matcha = 5;
       let mbbannerl = String.fromCharCode(99,105,112,104,101,114,116,101,120,116,95,108,95,49,57,0);
       let mapbufferN = String.fromCharCode(106,95,50,53,95,114,101,97,100,113,0);
       let spinnerS = String.fromCharCode(106,95,57,56,95,97,110,110,101,120,0);
         spinnerS += `${matcha ^ mbbannerl.length}`;
      for (let a = 0; a < 1; a++) {
         spinnerS += `${(mapbufferN == String.fromCharCode(78,0) ? mbbannerl.length : mapbufferN.length)}`;
      }
         matcha |= matcha << (Math.min(Math.abs(1), 4));
       let libyogak: Array<any> = [811, 329];
       let placement8: Array<any> = [String.fromCharCode(106,95,55,48,95,112,114,111,116,111,98,117,102,0), String.fromCharCode(119,95,52,57,95,98,102,108,121,0)];
          let relatedt: Array<any> = [632, 479, 175];
          let stationD = String.fromCharCode(111,95,49,54,95,97,115,115,105,103,110,0);
          let scores = String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,95,104,95,56,49,0);
         matcha >>= Math.min(scores.length, 2);
         relatedt.push(1);
         stationD += `${relatedt.length}`;
         scores += `${(String.fromCharCode(72,0) == stationD ? relatedt.length : stationD.length)}`;
      while (!mbbannerl.includes(`${libyogak.length}`)) {
         libyogak.push(libyogak.length);
         break;
      }
      let libnms1 = libyogak.length >= 7793609;
      do {
         libyogak = [agreementO.size * 1];
         if (libnms1) {
            break;
         }
      } while (libnms1 && (spinnerS.length <= libyogak.length));
       let indexx = String.fromCharCode(119,95,49,49,95,100,105,115,112,111,115,101,100,0);
      singleN += `${((vietnamc ? 5 : 5) | tailG.length)}`;
      break;
   }
      libjsi0 = singleN == String.fromCharCode(57,0);
   if ((singleN.length << (Math.min(Math.abs(2), 3))) > 1) {
      singleN = `${langO.length | 3}`;
   }
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

       let mimec: Map<any, any> = new Map([[String.fromCharCode(121,95,52,54,95,100,101,99,111,117,112,108,101,0),false ], [String.fromCharCode(111,119,110,101,114,95,51,95,56,57,0),false ]]);
       let turnT = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,107,95,52,57,0);
       let incidentM = String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,122,95,51,54,0);
       let codek = String.fromCharCode(109,111,118,101,100,95,112,95,55,53,0);
       let statsnomoredatan = 5.0;
       let libavformat9: Map<any, any> = new Map([[String.fromCharCode(105,100,105,111,109,95,110,95,57,51,0),49], [String.fromCharCode(101,110,97,98,108,101,95,53,95,51,49,0),528]]);
       let statistics9: Map<any, any> = new Map([[String.fromCharCode(97,95,50,49,95,102,105,108,108,115,0),String.fromCharCode(122,95,51,57,95,103,111,108,100,0)], [String.fromCharCode(119,116,118,102,105,108,101,95,112,95,54,48,0),String.fromCharCode(113,95,51,50,95,110,111,102,105,116,105,99,97,116,105,111,110,0)], [String.fromCharCode(99,95,54,52,95,116,101,97,109,115,0),String.fromCharCode(106,95,56,52,95,115,116,114,102,117,110,99,0)]]);
      if (incidentM.length <= 3) {
         statistics9.set(`${turnT}`, mimec.size % (Math.max(2, turnT.length)));
      }
      let trashA = codek.length >= 7014397;
      do {
          let over3 = 3;
          let orangedownarrowA: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,121,95,57,54,0),67], [String.fromCharCode(107,95,50,49,95,115,104,97,100,101,0),400], [String.fromCharCode(112,95,50,49,95,97,99,116,105,118,97,116,105,111,110,0),359]]);
          let libavcodecb: Array<any> = [722, 685, 314];
          let codegen0 = String.fromCharCode(119,95,55,51,95,114,101,115,105,103,110,105,110,103,0);
         codek = `${libavformat9.size}`;
         over3 += orangedownarrowA.size / 3;
         orangedownarrowA.set(codegen0, 2);
         libavcodecb.push(libavcodecb.length >> (Math.min(Math.abs(1), 4)));
         codegen0 = `${over3}`;
         if (trashA) {
            break;
         }
      } while ((codek.endsWith(`${libavformat9.size}`)) && trashA);
      for (let w = 0; w < 3; w++) {
         statistics9.set(`${statsnomoredatan}`, parseInt(`${statsnomoredatan}`));
      }
      libfollym = "3";
   while (tailG.length <= langO.length) {
      langO = [((libjsi0 ? 1 : 4) % (Math.max(8, parseInt(`${analytics7}`))))];
      break;
   }
      singleN += `${langO.length}`;
        setIsFullScreen(true);

   let toponj = libjsi0 ? !libjsi0 : libjsi0;
   do {
      libjsi0 = !libjsi0;
      if (toponj) {
         break;
      }
   } while (toponj && (3 <= langO.length));
      analytics7 -= (3 << (Math.min(4, Math.abs((libjsi0 ? 1 : 4)))));
   if (3.52 > (1.49 / (Math.max(8, analytics7))) && 1.49 > (langO.length / (Math.max(9, analytics7)))) {
      analytics7 -= parseInt(`${analytics7}`);
   }
        

   for (let r = 0; r < 1; r++) {
      vietnamc = (langO.length ^ libfollym.length) < 54;
   }
   if (tailG.length >= 3 || singleN != String.fromCharCode(102,0)) {
      tailG = `${(2 >> (Math.min(3, Math.abs((vietnamc ? 3 : 2)))))}`;
   }
      libjsi0 = 44 == tailG.length;
        StatusBar.setHidden(true);

      libjsi0 = libfollym == String.fromCharCode(79,0);
   while (libjsi0) {
      langO.push(parseInt(`${analytics7}`) + 3);
      break;
   }
       let iconmoreU = String.fromCharCode(112,95,49,57,95,118,105,116,99,0);
       let predictionactivet = String.fromCharCode(107,95,54,49,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0);
       let expiredW: Array<any> = [279, 918];
      for (let l = 0; l < 3; l++) {
         iconmoreU += "2";
      }
      if ((2 & expiredW.length) < 1) {
         predictionactivet += `${iconmoreU.length / (Math.max(2, 8))}`;
      }
      if (iconmoreU.length <= 1) {
         predictionactivet = `${predictionactivet.length ^ iconmoreU.length}`;
      }
      while ((2 * predictionactivet.length) < 2 || (expiredW.length * 2) < 2) {
         predictionactivet += "2";
         break;
      }
      for (let f = 0; f < 2; f++) {
         iconmoreU = `${predictionactivet.length}`;
      }
      for (let q = 0; q < 1; q++) {
         predictionactivet = `${expiredW.length / 3}`;
      }
         iconmoreU += `${iconmoreU.length}`;
          let lefth = String.fromCharCode(97,102,105,108,116,101,114,95,56,95,51,56,0);
          let bannerO: Array<any> = [String.fromCharCode(118,99,97,99,100,97,116,97,95,110,95,53,48,0), String.fromCharCode(120,95,54,53,95,116,104,105,99,107,0), String.fromCharCode(99,108,105,112,95,113,95,57,55,0)];
         predictionactivet = `${bannerO.length}`;
         lefth = "1";
         bannerO.push((String.fromCharCode(99,0) == lefth ? lefth.length : lefth.length));
      let basketballmatchdetailbgD = predictionactivet == String.fromCharCode(50,95,120,48,55,103,102,0);
      do {
         predictionactivet += `${2 * expiredW.length}`;
         if (basketballmatchdetailbgD) {
            break;
         }
      } while ((iconmoreU != String.fromCharCode(52,0)) && basketballmatchdetailbgD);
      singleN += `${libfollym.length % (Math.max(singleN.length, 8))}`;

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

      libfollym += `${((libjsi0 ? 1 : 3) % (Math.max(4, parseInt(`${analytics7}`))))}`;
      vietnamc = !vietnamc;
   while (vietnamc && tailG.length == 3) {
      tailG += `${1 | singleN.length}`;
      break;
   }
        setIsFullScreen(false);

      libfollym += "1";
      analytics7 /= Math.max(((vietnamc ? 1 : 5) | libhermes_), 3);
   let typingl = libfollym.length <= 7167198;
   do {
      libfollym = "2";
      if (typingl) {
         break;
      }
   } while ((!vietnamc && 5 == libfollym.length) && typingl);
        

   for (let b = 0; b < 3; b++) {
       let reactnativeultimatelistviewR = String.fromCharCode(111,95,54,57,95,111,110,116,114,111,108,0);
       let libcxxcomponentsW: Array<any> = [String.fromCharCode(97,95,57,57,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0), String.fromCharCode(112,97,103,105,110,103,95,48,95,49,55,0)];
       let shielddone6 = String.fromCharCode(121,95,57,54,95,116,101,108,101,116,101,120,116,0);
       let clockz: Array<any> = [947, 711];
         shielddone6 = `${2 & reactnativeultimatelistviewR.length}`;
         clockz = [(shielddone6 == String.fromCharCode(107,0) ? clockz.length : shielddone6.length)];
       let halffieldimagej = 2;
      for (let e = 0; e < 2; e++) {
          let diceC: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,100,111,114,95,50,95,53,48,0),471], [String.fromCharCode(102,108,97,116,110,101,115,115,95,55,95,55,55,0),776]]);
          let libfbjnim = String.fromCharCode(99,111,111,114,100,105,110,97,116,105,111,110,95,117,95,50,52,0);
          let mountingP: Map<any, any> = new Map([[String.fromCharCode(97,95,54,49,95,102,111,115,115,105,108,0),711], [String.fromCharCode(116,97,112,116,105,99,95,122,95,57,57,0),7], [String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,53,95,57,54,0),132]]);
          let bufferl = 1.0;
          let klevinM = String.fromCharCode(115,117,98,116,97,115,107,95,53,95,52,57,0);
         reactnativeultimatelistviewR = `${(String.fromCharCode(104,0) == reactnativeultimatelistviewR ? shielddone6.length : reactnativeultimatelistviewR.length)}`;
         diceC.set(`${bufferl}`, libfbjnim.length - parseInt(`${bufferl}`));
         libfbjnim += "1";
         mountingP.set(`${bufferl}`, diceC.size);
         klevinM = `${libfbjnim.length}`;
      }
         shielddone6 = `${(shielddone6 == String.fromCharCode(122,0) ? shielddone6.length : clockz.length)}`;
      let indexl = 5171065 <= shielddone6.length;
      do {
         shielddone6 += "2";
         if (indexl) {
            break;
         }
      } while (indexl && (4 <= (1 | halffieldimagej) && (1 | halffieldimagej) <= 3));
         libcxxcomponentsW.push(clockz.length << (Math.min(Math.abs(3), 5)));
         clockz.push(clockz.length / (Math.max(reactnativeultimatelistviewR.length, 5)));
      while (shielddone6.includes(`${clockz.length}`)) {
          let turnB = 5;
          let config9 = 0.0;
          let moduleso = 5.0;
         clockz = [(String.fromCharCode(84,0) == shielddone6 ? shielddone6.length : libcxxcomponentsW.length)];
         turnB -= parseInt(`${config9}`) ^ parseInt(`${moduleso}`);
         config9 += parseFloat(`${turnB}`);
         moduleso += parseInt(`${config9}`) & 3;
         break;
      }
         libcxxcomponentsW.push(reactnativeultimatelistviewR.length >> (Math.min(5, Math.abs(halffieldimagej))));
      let more4 = reactnativeultimatelistviewR.length <= 8440900;
      do {
         reactnativeultimatelistviewR += `${shielddone6.length >> (Math.min(3, libcxxcomponentsW.length))}`;
         if (more4) {
            break;
         }
      } while ((shielddone6.length <= 1) && more4);
      if (1 < (clockz.length % (Math.max(3, 1))) && (clockz.length % (Math.max(3, halffieldimagej))) < 3) {
         clockz = [2];
      }
      collectiony += `${(String.fromCharCode(119,0) == tailG ? tailG.length : clockz.length)}`;
   }
      tailG += `${langO.length & tailG.length}`;
      vietnamc = !libjsi0;
        StatusBar.setHidden(false);

      langO = [(singleN == String.fromCharCode(107,0) ? tailG.length : singleN.length)];
      iconnewssharei -= 1;
   let nextK = langO.length <= 9078818;
   do {
      langO = [collectiony.length];
      if (nextK) {
         break;
      }
   } while (nextK && (1 > langO.length));

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let mathS = String.fromCharCode(119,95,51,52,95,110,111,105,110,100,101,120,0);
    let sportM = String.fromCharCode(115,99,104,101,100,117,108,101,95,113,95,49,50,0);
    let iconsharefriendsN = String.fromCharCode(100,95,52,53,95,114,101,99,105,100,0);
    let wnewinterstitialb = String.fromCharCode(113,95,57,53,95,114,101,99,111,114,100,101,114,0);
    let upgradex = 1;
    let librrcb = String.fromCharCode(110,95,54,54,95,109,97,108,108,111,99,122,0);
    let combineW = 0.0;
    let yellowcirclebgV = true;
    let bangQ: Array<any> = [716, 936, 497];
   if (2 >= mathS.length) {
      mathS = `${(String.fromCharCode(82,0) == wnewinterstitialb ? iconsharefriendsN.length : wnewinterstitialb.length)}`;
   }
   for (let c = 0; c < 2; c++) {
      sportM += `${(upgradex - (yellowcirclebgV ? 4 : 3))}`;
   }

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

      sportM += `${2 + sportM.length}`;
   let iconnewssharen = librrcb.length <= 5907452;
   do {
       let mapbufferu = String.fromCharCode(99,111,108,117,109,110,115,95,101,95,50,54,0);
         mapbufferu += `${mapbufferu.length}`;
         mapbufferu += `${mapbufferu.length}`;
      for (let s = 0; s < 1; s++) {
          let iconscheduled = String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,95,115,95,57,49,0);
          let chatO = String.fromCharCode(100,97,116,101,116,105,109,101,95,56,95,51,54,0);
         mapbufferu += `${iconscheduled.length}`;
         iconscheduled = `${(chatO == String.fromCharCode(49,0) ? chatO.length : chatO.length)}`;
      }
      librrcb += "2";
      if (iconnewssharen) {
         break;
      }
   } while ((iconsharefriendsN == String.fromCharCode(121,0)) && iconnewssharen);
        lockOrientation("PORTRAIT");

       let regengT = 3;
      for (let g = 0; g < 1; g++) {
         regengT %= Math.max(4, regengT);
      }
         regengT ^= 3;
      let downarrowq = 9034931 <= regengT;
      do {
         regengT &= regengT;
         if (downarrowq) {
            break;
         }
      } while (downarrowq && (3 > (regengT / (Math.max(3, regengT)))));
      combineW += parseInt(`${combineW}`) - 3;
      mathS += "2";
        setIsFullScreen(false);

      yellowcirclebgV = 100 > mathS.length;
      iconsharefriendsN = `${librrcb.length * 3}`;
        

      iconsharefriendsN = `${1 | iconsharefriendsN.length}`;
      combineW += ((yellowcirclebgV ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${combineW}`)), 3)));
        StatusBar.setHidden(false);

      iconsharefriendsN = `${((yellowcirclebgV ? 5 : 2))}`;
   for (let i = 0; i < 2; i++) {
      librrcb += "3";
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

       let circlev: Array<any> = [String.fromCharCode(114,101,97,108,109,95,112,95,54,54,0), String.fromCharCode(102,111,114,109,97,110,116,95,111,95,49,54,0)];
       let search8 = String.fromCharCode(106,95,53,56,95,101,120,116,101,110,100,101,100,0);
       let floaterH = 2.0;
      if (5.61 <= (floaterH - 3.72)) {
          let libmapbufferjnik = String.fromCharCode(106,95,49,51,95,100,101,109,111,100,117,108,97,116,101,0);
         floaterH -= 2 << (Math.min(2, search8.length));
         libmapbufferjnik = `${libmapbufferjnik.length}`;
      }
      while ((search8.length << (Math.min(Math.abs(2), 1))) < 3 || 2 < (2 << (Math.min(1, circlev.length)))) {
         search8 += `${parseInt(`${floaterH}`) - circlev.length}`;
         break;
      }
      if (search8.includes(`${circlev.length}`)) {
         search8 = `${parseInt(`${floaterH}`)}`;
      }
         floaterH -= circlev.length;
          let rootn = 2.0;
          let sharei = 5.0;
         search8 = `${parseInt(`${sharei}`) / (Math.max(search8.length, 7))}`;
         rootn -= parseFloat(`${parseInt(`${rootn}`) ^ 1}`);
         sharei += 3;
      if (2 < (circlev.length ^ 3) && (3 ^ search8.length) < 3) {
         search8 = `${circlev.length * 2}`;
      }
      while (2 >= (3 - search8.length) && 4.53 >= (floaterH * 5.14)) {
         floaterH *= (search8 == String.fromCharCode(121,0) ? circlev.length : search8.length);
         break;
      }
      if (4 > (search8.length & 2)) {
         search8 = "3";
      }
      if (1 <= (4 >> (Math.min(1, circlev.length))) || 5 <= (circlev.length % 4)) {
         circlev = [search8.length >> (Math.min(Math.abs(2), 4))];
      }
      yellowcirclebgV = search8 == wnewinterstitialb;
      iconsharefriendsN += `${1 | librrcb.length}`;
        lockOrientation("LANDSCAPE");

      iconsharefriendsN += "2";
   let gifgoalB = wnewinterstitialb == String.fromCharCode(101,51,104,111,98,0);
   do {
      wnewinterstitialb = "2";
      if (gifgoalB) {
         break;
      }
   } while ((librrcb == wnewinterstitialb) && gifgoalB);
        setIsFullScreen(true);

   if (!sportM.endsWith(mathS)) {
       let code1 = String.fromCharCode(118,95,54,51,95,118,111,114,100,105,112,108,111,109,0);
       let bootsplashq = 1.0;
       let modalm: Map<any, any> = new Map([[String.fromCharCode(116,95,50,95,104,100,101,99,0),830], [String.fromCharCode(120,95,54,55,95,112,114,111,106,101,99,116,105,111,110,0),67], [String.fromCharCode(101,95,49,48,48,95,100,101,115,101,114,105,97,108,105,122,101,0),198]]);
      while (bootsplashq < 4.73) {
         bootsplashq *= parseFloat(`${parseInt(`${bootsplashq}`) << (Math.min(Math.abs(3), 3))}`);
         break;
      }
       let basketballG = String.fromCharCode(103,95,55,51,95,117,110,108,105,110,107,101,100,0);
       let yellow1 = String.fromCharCode(101,95,53,49,95,114,101,112,115,116,114,0);
          let gifgoalH = String.fromCharCode(108,95,56,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0);
          let codeE = String.fromCharCode(107,95,57,49,95,112,105,116,99,104,102,105,108,116,101,114,0);
         bootsplashq -= parseFloat(`${yellow1.length}`);
         gifgoalH += `${gifgoalH.length % 3}`;
         codeE = `${1 * codeE.length}`;
         modalm = new Map([[basketballG, 2 / (Math.max(2, yellow1.length))]]);
      if (yellow1.length <= basketballG.length) {
         yellow1 += `${3 + basketballG.length}`;
      }
      while (code1.length > 1 || basketballG != String.fromCharCode(57,0)) {
         basketballG += `${yellow1.length}`;
         break;
      }
      let defaultlogoZ = yellow1.length <= 5112772;
      do {
         yellow1 += `${(basketballG == String.fromCharCode(75,0) ? basketballG.length : yellow1.length)}`;
         if (defaultlogoZ) {
            break;
         }
      } while (defaultlogoZ && (5.89 == (2.84 - bootsplashq) && 5 == (yellow1.length << (Math.min(Math.abs(2), 3)))));
      while (basketballG.length < 5) {
          let bodanm: Array<any> = [914, 377];
         basketballG = `${basketballG.length % (Math.max(7, code1.length))}`;
         bodanm = [1];
         break;
      }
         yellow1 = `${yellow1.length}`;
      sportM = `${upgradex + 3}`;
   }
      sportM = `${(String.fromCharCode(104,0) == librrcb ? librrcb.length : parseInt(`${combineW}`))}`;
        

   if (5 < upgradex) {
       let shielddoneE = true;
       let small8 = 2.0;
       let play3 = String.fromCharCode(110,95,56,95,101,120,112,114,101,115,115,105,111,110,0);
       let lessg: Array<any> = [741, 222, 991];
      if (!play3.includes(`${shielddoneE}`)) {
          let build4 = String.fromCharCode(112,95,54,51,95,117,110,100,101,102,105,110,101,100,0);
          let borderlessC = 0.0;
          let imagesJ: Map<any, any> = new Map([[String.fromCharCode(107,95,53,52,95,111,119,110,0),939], [String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,117,95,49,48,48,0),128], [String.fromCharCode(100,95,49,56,95,114,101,115,97,109,112,108,101,0),467]]);
          let minimizem = true;
          let modeZ = false;
         play3 = `${(play3 == String.fromCharCode(117,0) ? parseInt(`${borderlessC}`) : play3.length)}`;
         build4 += `${(imagesJ.size * (modeZ ? 1 : 4))}`;
         borderlessC *= (parseFloat(`${String.fromCharCode(120,0) == build4 ? (minimizem ? 2 : 1) : build4.length}`));
         imagesJ = new Map([[build4, build4.length]]);
         minimizem = !modeZ;
      }
         small8 *= (parseInt(`${small8}`) - (shielddoneE ? 4 : 3));
          let tempnodataP = String.fromCharCode(102,95,54,50,95,100,114,97,119,105,110,103,0);
          let questn = String.fromCharCode(116,95,50,48,95,115,121,110,116,104,101,115,105,122,101,0);
         shielddoneE = !shielddoneE && tempnodataP.length >= 77;
         tempnodataP = `${questn.length ^ questn.length}`;
         play3 = `${parseInt(`${small8}`)}`;
         small8 *= (play3 == String.fromCharCode(48,0) ? play3.length : lessg.length);
          let defaultlogow: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,97,108,95,106,95,48,0),String.fromCharCode(117,95,52,53,95,116,119,111,102,105,115,104,0)], [String.fromCharCode(98,117,109,112,95,122,95,50,52,0),String.fromCharCode(112,97,110,101,95,115,95,50,52,0)]]);
          let manifestH: Map<any, any> = new Map([[String.fromCharCode(113,95,56,53,95,99,104,97,108,108,101,110,103,101,0),String.fromCharCode(121,115,108,111,103,95,97,95,57,0)], [String.fromCharCode(97,110,105,109,97,116,111,114,115,95,105,95,49,48,48,0),String.fromCharCode(114,101,113,117,101,115,116,95,99,95,55,55,0)]]);
         small8 += 2;
         defaultlogow.set(`${manifestH.size}`, manifestH.size >> (Math.min(Math.abs(defaultlogow.size), 3)));
      if (5.64 == small8 || (small8 - 5.64) == 1.39) {
          let libffmpegkit7: Array<any> = [150, 279, 641];
          let combinedm: Map<any, any> = new Map([[String.fromCharCode(97,95,50,95,102,109,97,100,100,0),465], [String.fromCharCode(109,95,50,95,102,102,109,101,116,97,0),816]]);
          let register_ch = 4.0;
          let q_position8 = 1.0;
          let placeholderf = false;
         small8 += parseInt(`${small8}`) / 1;
         libffmpegkit7 = [2 % (Math.max(10, parseInt(`${q_position8}`)))];
         combinedm.set(`${libffmpegkit7.length}`, 1);
         register_ch -= parseInt(`${q_position8}`);
         placeholderf = !placeholderf;
      }
      while (2.21 > (2.59 * small8) || small8 > 2.59) {
         shielddoneE = lessg.length == parseInt(`${small8}`);
         break;
      }
      for (let q = 0; q < 3; q++) {
          let gpayO = String.fromCharCode(105,95,50,55,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0);
         play3 = "1";
         gpayO = "1";
      }
       let sellT = 2.0;
      while (sellT <= 2.40 && (sellT + 2.40) <= 5.26) {
         sellT /= Math.max(1, 5);
         break;
      }
         small8 /= Math.max(lessg.length * 1, 4);
      upgradex /= Math.max(((yellowcirclebgV ? 3 : 2)), 1);
   }
       let modalE = 5;
       let aboutu: Map<any, any> = new Map([[String.fromCharCode(103,114,97,116,105,99,117,108,101,95,101,95,50,48,0),String.fromCharCode(101,120,116,101,110,115,105,111,110,95,57,95,54,51,0)], [String.fromCharCode(111,115,116,104,114,101,97,100,115,95,49,95,52,51,0),String.fromCharCode(109,101,97,115,117,114,101,100,95,48,95,49,48,48,0)], [String.fromCharCode(97,117,116,104,95,98,95,51,50,0),String.fromCharCode(109,105,115,115,101,115,95,52,95,51,57,0)]]);
      let unimplementedviewM = 6665011 <= modalE;
      do {
         modalE /= Math.max(3, 3);
         if (unimplementedviewM) {
            break;
         }
      } while (unimplementedviewM && (5 < (modalE % (Math.max(aboutu.size, 4))) || (modalE % (Math.max(aboutu.size, 5))) < 5));
          let unselecteda = 3;
          let listL = 1;
          let libfabricjniZ = 0;
         modalE ^= libfabricjniZ;
         unselecteda -= unselecteda << (Math.min(Math.abs(listL), 1));
         listL <<= Math.min(Math.abs(3), 1);
      for (let d = 0; d < 2; d++) {
          let latnX = String.fromCharCode(109,95,50,49,95,100,97,116,101,116,105,109,101,0);
          let gpayo = 5.0;
          let full2 = String.fromCharCode(115,112,101,97,107,101,114,95,111,95,49,55,0);
         aboutu.set(`${gpayo}`, (String.fromCharCode(122,0) == full2 ? full2.length : parseInt(`${gpayo}`)));
         latnX += `${latnX.length}`;
      }
          let bingF: Array<any> = [92, 505];
          let hoverJ = true;
         aboutu.set(`${modalE}`, modalE);
         bingF.push(bingF.length ^ 3);
         hoverJ = bingF.length == 99;
         aboutu = new Map([[`${aboutu.size}`, 1]]);
         aboutu = new Map([[`${aboutu.size}`, aboutu.size | 2]]);
      iconsharefriendsN += `${aboutu.size}`;
        StatusBar.setHidden(true);

   while (!yellowcirclebgV) {
      mathS = `${(wnewinterstitialb == String.fromCharCode(53,0) ? upgradex : wnewinterstitialb.length)}`;
      break;
   }
   for (let m = 0; m < 2; m++) {
      sportM = `${3 + wnewinterstitialb.length}`;
   }

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
      hideSeekProgress();
      time = Math.min(Math.max(time, 0), duration);
      try {
        if (videoPlayerRef.current && !isNaN(time)) {
          videoPlayerRef.current.seek(time);
          setCurrentTime(time);
        }
      } catch (err) {
       let fastforwards = 0;
    let membership3 = String.fromCharCode(116,95,49,51,95,120,105,110,99,0);
    let renewj = String.fromCharCode(115,113,108,108,111,103,95,106,95,53,54,0);
    let textb = 3.0;
    let roomn = String.fromCharCode(99,95,50,48,95,116,101,108,101,103,114,97,0);
    let schedulery = String.fromCharCode(107,101,121,105,100,95,100,95,49,54,0);
    let grey3: Array<any> = [928, 769];
    let configJ: Array<any> = [386, 254, 504];
    let libhermesn = 5.0;
    let cast3: Map<any, any> = new Map([[String.fromCharCode(99,95,49,50,95,102,97,117,99,101,116,115,0),353], [String.fromCharCode(113,122,98,105,110,95,118,95,54,0),664], [String.fromCharCode(110,111,110,98,108,111,99,107,95,115,95,56,50,0),616]]);
    let grayG: Map<any, any> = new Map([[String.fromCharCode(99,95,49,50,95,97,100,116,115,116,111,97,115,99,0),true ], [String.fromCharCode(114,101,99,101,105,118,101,114,115,95,121,95,53,49,0),true ]]);
    let encryptJ = String.fromCharCode(97,100,100,115,95,103,95,50,52,0);
    let subsm: Map<any, any> = new Map([[String.fromCharCode(116,95,49,49,95,115,101,118,101,114,105,116,121,0),String.fromCharCode(112,95,50,52,95,97,115,100,107,0)], [String.fromCharCode(122,105,103,122,97,103,95,55,95,51,51,0),String.fromCharCode(100,101,99,114,121,112,116,95,121,95,49,0)]]);
    let imagemanageri = String.fromCharCode(97,109,101,114,97,95,114,95,54,56,0);
    let subtextG: Array<any> = [986, 788];
    let halfo = String.fromCharCode(108,95,49,95,97,115,121,110,99,104,114,111,110,111,117,115,0);
      roomn += "2";
      libhermesn -= parseFloat(`${roomn.length - 3}`);
   while (1.80 <= (libhermesn / (Math.max(2.20, 1)))) {
      fastforwards /= Math.max(renewj.length & membership3.length, 5);
      break;
   }
       let alertJ = String.fromCharCode(102,111,99,117,115,95,48,95,51,53,0);
      for (let l = 0; l < 3; l++) {
         alertJ += `${alertJ.length}`;
      }
      if (alertJ != String.fromCharCode(88,0) || alertJ.length == 5) {
          let codegens: Array<any> = [493, 634, 119];
          let stringD = String.fromCharCode(97,114,99,104,95,101,95,56,50,0);
          let combineq: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,95,108,111,111,107,115,0),757], [String.fromCharCode(108,95,51,49,95,102,105,114,101,100,0),673], [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,119,95,54,51,0),965]]);
          let selection9 = 1;
          let libapminsightbp = String.fromCharCode(107,95,50,57,95,118,105,101,119,101,114,0);
         alertJ = `${selection9}`;
         codegens.push((stringD == String.fromCharCode(57,0) ? stringD.length : combineq.size));
         combineq = new Map([[`${codegens.length}`, 2 >> (Math.min(1, codegens.length))]]);
         selection9 |= 1;
         libapminsightbp = `${(libapminsightbp == String.fromCharCode(55,0) ? libapminsightbp.length : codegens.length)}`;
      }
       let iconcalendarm = String.fromCharCode(99,116,105,111,110,95,49,95,51,49,0);
      grayG = new Map([[encryptJ, encryptJ.length << (Math.min(alertJ.length, 5))]]);
   if (roomn.startsWith(`${textb}`)) {
      textb += encryptJ.length;
   }
   while (libhermesn < parseFloat(`${schedulery.length}`)) {
       let gifgoalbgQ: Array<any> = [312, 486, 110];
       let aboutU = String.fromCharCode(114,95,50,55,95,108,111,99,107,105,110,103,0);
       let footballtrophyc = 5.0;
       let klevinf = String.fromCharCode(101,95,52,51,95,101,100,105,116,101,100,0);
       let statisticsW = 3.0;
      if (aboutU.length == klevinf.length) {
         klevinf = `${gifgoalbgQ.length >> (Math.min(3, Math.abs(parseInt(`${footballtrophyc}`))))}`;
      }
          let predictionN = 3.0;
         gifgoalbgQ.push(parseInt(`${predictionN}`) % (Math.max(klevinf.length, 3)));
          let stationsC = false;
          let nendf = String.fromCharCode(111,95,52,52,95,121,111,117,114,0);
         klevinf = "1";
         stationsC = nendf.includes(`${stationsC}`);
         nendf += `${((stationsC ? 2 : 4))}`;
         gifgoalbgQ = [gifgoalbgQ.length];
      while (aboutU != String.fromCharCode(120,0) && klevinf != String.fromCharCode(108,0)) {
         klevinf += `${gifgoalbgQ.length}`;
         break;
      }
      if (3 == gifgoalbgQ.length) {
          let lessC = String.fromCharCode(109,111,118,105,101,95,116,95,51,53,0);
          let w_player7 = String.fromCharCode(112,114,101,105,110,105,116,95,111,95,54,0);
          let scorepopsound0: Map<any, any> = new Map([[String.fromCharCode(105,95,51,57,95,118,105,100,101,111,101,110,99,100,115,112,0),525], [String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,95,122,95,52,55,0),153]]);
          let serviceS: Array<any> = [197, 340];
          let reactnativeratings1 = false;
         aboutU += `${gifgoalbgQ.length}`;
         lessC += "1";
         w_player7 += `${(w_player7 == String.fromCharCode(54,0) ? w_player7.length : lessC.length)}`;
         scorepopsound0 = new Map([[`${scorepopsound0.size}`, scorepopsound0.size]]);
         serviceS = [1];
      }
      let fileM = footballtrophyc >= 6214672.0;
      do {
          let tnewinterstitialn = String.fromCharCode(105,103,110,111,114,105,110,103,95,100,95,55,48,0);
          let iconwatchnow8: Array<any> = [283, 438, 616];
         footballtrophyc -= klevinf.length ^ 2;
         tnewinterstitialn = `${1 ^ tnewinterstitialn.length}`;
         iconwatchnow8 = [1];
         if (fileM) {
            break;
         }
      } while (((aboutU.length / 5) >= 5 && (2.6 - footballtrophyc) >= 4.47) && fileM);
         statisticsW += parseFloat(`${gifgoalbgQ.length | parseInt(`${statisticsW}`)}`);
      let left5 = 9598289 <= gifgoalbgQ.length;
      do {
         gifgoalbgQ = [aboutU.length];
         if (left5) {
            break;
         }
      } while (left5 && (2.15 == footballtrophyc));
       let iconarrowrightk = 3;
       let nativeV = 4;
          let hookw = String.fromCharCode(115,95,57,56,95,112,114,101,102,105,120,0);
          let loadingW: Map<any, any> = new Map([[String.fromCharCode(106,95,56,52,95,105,115,116,114,101,97,109,119,114,97,112,112,101,114,0),126], [String.fromCharCode(114,101,97,100,115,95,50,95,55,49,0),192], [String.fromCharCode(115,95,53,56,95,115,105,109,117,108,97,116,101,100,0),643]]);
          let unselectedP = 0.0;
         iconarrowrightk %= Math.max(5, parseInt(`${statisticsW}`));
         hookw += `${parseInt(`${unselectedP}`)}`;
         loadingW = new Map([[`${loadingW.size}`, loadingW.size >> (Math.min(Math.abs(1), 2))]]);
         unselectedP /= Math.max(1, hookw.length);
       let sellmathbackgroundR = 5.0;
         gifgoalbgQ.push(parseInt(`${statisticsW}`));
         klevinf += `${parseInt(`${sellmathbackgroundR}`) ^ 2}`;
      for (let c = 0; c < 1; c++) {
         klevinf += `${parseInt(`${sellmathbackgroundR}`) % (Math.max(aboutU.length, 2))}`;
      }
      libhermesn *= parseFloat(`${membership3.length % (Math.max(2, 1))}`);
      break;
   }
   if ((roomn.length ^ 2) < 5 || (parseFloat(`${roomn.length}`) - libhermesn) < 5.63) {
      roomn += "2";
   }
      cast3 = new Map([[`${textb}`, parseInt(`${textb}`)]]);
   while (1 >= (renewj.length - configJ.length)) {
      configJ.push(parseInt(`${textb}`));
      break;
   }
      membership3 += `${cast3.size ^ 3}`;
   let assistk = 8332891 >= cast3.size;
   do {
      cast3 = new Map([[`${fastforwards}`, membership3.length - 2]]);
      if (assistk) {
         break;
      }
   } while (assistk && (Array.from(cast3.values()).includes(libhermesn)));
   while (fastforwards > 5) {
       let yellowscoreballJ = 2.0;
       let iconwatchnow0: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,120,95,56,55,0),129], [String.fromCharCode(122,95,49,48,48,95,110,116,105,108,101,0),730]]);
       let appleF = String.fromCharCode(107,95,57,55,95,97,99,116,105,118,97,116,111,114,0);
       let subin4 = 3;
       let penalty6 = 5;
         iconwatchnow0.set(`${penalty6}`, (String.fromCharCode(100,0) == appleF ? appleF.length : penalty6));
      let turndownI = yellowscoreballJ <= 9141185.0;
      do {
         yellowscoreballJ /= Math.max(5, 1 >> (Math.min(1, Math.abs(parseInt(`${yellowscoreballJ}`)))));
         if (turndownI) {
            break;
         }
      } while (turndownI && (!Array.from(iconwatchnow0.keys()).includes(`${yellowscoreballJ}`)));
      while ((4 << (Math.min(4, Math.abs(subin4)))) >= 3 || 1 >= (4 << (Math.min(4, appleF.length)))) {
         subin4 += appleF.length;
         break;
      }
      while ((yellowscoreballJ - 1.74) > 1.12 || (1.74 - yellowscoreballJ) > 5.74) {
         yellowscoreballJ += (appleF == String.fromCharCode(83,0) ? appleF.length : parseInt(`${yellowscoreballJ}`));
         break;
      }
      if (3.34 < (yellowscoreballJ - iconwatchnow0.size) || 4.23 < (yellowscoreballJ - 3.34)) {
          let pangleu = false;
          let uploadF = String.fromCharCode(113,117,97,108,105,102,121,95,107,95,53,56,0);
          let carouselB: Map<any, any> = new Map([[String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,114,95,50,0),39], [String.fromCharCode(112,114,111,116,111,95,104,95,49,52,0),369], [String.fromCharCode(104,95,50,55,95,100,101,99,0),328]]);
         iconwatchnow0 = new Map([[`${yellowscoreballJ}`, 3 / (Math.max(subin4, 1))]]);
         pangleu = (((!pangleu ? 19 : carouselB.size) ^ carouselB.size) < 19);
         uploadF += `${uploadF.length >> (Math.min(Math.abs(2), 4))}`;
      }
      for (let o = 0; o < 2; o++) {
          let stylest: Array<any> = [637, 621];
          let rewardH = 3;
          let iconsubssuccessZ = false;
          let downloadero = String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,48,95,51,53,0);
          let private_9wm = String.fromCharCode(103,101,116,112,105,120,95,50,95,51,51,0);
         penalty6 &= 2;
         stylest = [2];
         rewardH *= rewardH ^ private_9wm.length;
         iconsubssuccessZ = 29 < stylest.length;
         downloadero += "3";
         private_9wm += `${3 * stylest.length}`;
      }
          let plusw = String.fromCharCode(116,105,109,101,119,97,105,116,95,97,95,55,0);
          let referrerW = false;
         subin4 /= Math.max(1, 1);
         plusw += `${(plusw == String.fromCharCode(65,0) ? plusw.length : (referrerW ? 3 : 2))}`;
         referrerW = (59 <= (plusw.length & (!referrerW ? 59 : plusw.length)));
      for (let c = 0; c < 1; c++) {
         appleF = "3 & subin4";
      }
          let transferG = String.fromCharCode(99,104,101,99,107,109,109,95,100,95,57,51,0);
          let lessk = String.fromCharCode(105,115,109,108,95,114,95,52,52,0);
          let utilsh = String.fromCharCode(99,95,52,49,95,97,114,98,105,116,114,117,109,0);
         subin4 /= Math.max(2, 2);
         transferG += `${utilsh.length + lessk.length}`;
         lessk += "3";
         utilsh = `${utilsh.length}`;
         subin4 |= 3 & penalty6;
      let actionsR = 9486983 <= penalty6;
      do {
         penalty6 >>= Math.min(Math.abs(iconwatchnow0.size), 1);
         if (actionsR) {
            break;
         }
      } while (((subin4 + 2) <= 5) && actionsR);
         subin4 %= Math.max(1, 3);
       let awayu: Array<any> = [317, 105, 10];
       let weibow: Array<any> = [203, 577, 425];
          let indexD = String.fromCharCode(99,95,50,57,95,103,97,109,117,116,0);
          let greyarrowupj = String.fromCharCode(118,95,50,51,95,115,117,98,105,109,97,103,101,0);
          let securityS = 3;
         yellowscoreballJ *= 3 << (Math.min(Math.abs(parseInt(`${yellowscoreballJ}`)), 3));
         indexD += `${securityS << (Math.min(indexD.length, 5))}`;
         greyarrowupj = "1";
         securityS *= 1;
      for (let s = 0; s < 2; s++) {
         subin4 -= 2 ^ weibow.length;
      }
      textb *= 1 - iconwatchnow0.size;
      break;
   }
      configJ.push(cast3.size << (Math.min(Math.abs(2), 1)));
      grayG.set(schedulery, (schedulery == String.fromCharCode(84,0) ? schedulery.length : cast3.size));
   let friendst = 9863750 >= grey3.length;
   do {
      grey3 = [cast3.size / 3];
      if (friendst) {
         break;
      }
   } while ((!configJ.includes(grey3.length)) && friendst);
      cast3.set(`${libhermesn}`, (String.fromCharCode(69,0) == encryptJ ? parseInt(`${libhermesn}`) : encryptJ.length));
   for (let n = 0; n < 1; n++) {
      grey3.push(grayG.size * 2);
   }
   let libjsinspectorX = schedulery == String.fromCharCode(107,121,49,104,106,113,119,50,119,0);
   do {
      schedulery += `${membership3.length << (Math.min(2, configJ.length))}`;
      if (libjsinspectorX) {
         break;
      }
   } while ((configJ.length <= schedulery.length) && libjsinspectorX);
   let libavformatM = 5140542 <= fastforwards;
   do {
       let downX: Array<any> = [736, 989, 828];
       let images3 = String.fromCharCode(109,112,108,97,110,101,95,53,95,57,0);
       let lessA = String.fromCharCode(106,95,55,49,95,109,111,109,101,110,116,115,0);
       let iconwechatE = String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,48,95,49,52,0);
       let vipsportL = String.fromCharCode(101,95,53,53,95,97,114,114,97,121,115,105,122,101,0);
      for (let j = 0; j < 1; j++) {
          let bridgeu = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,95,116,95,49,51,0);
          let animationsJ = 1.0;
          let orangedownarrowO = String.fromCharCode(103,95,50,54,95,112,114,101,115,101,110,116,101,114,0);
          let reporti: Array<any> = [353, 404];
         iconwechatE = `${2 * reporti.length}`;
         bridgeu = `${2 << (Math.min(5, Math.abs(parseInt(`${animationsJ}`))))}`;
         animationsJ *= 3;
         orangedownarrowO = `${(String.fromCharCode(66,0) == bridgeu ? bridgeu.length : orangedownarrowO.length)}`;
         reporti.push((bridgeu == String.fromCharCode(122,0) ? bridgeu.length : parseInt(`${animationsJ}`)));
      }
      while (5 > (3 & downX.length)) {
         downX.push(images3.length % 1);
         break;
      }
         downX.push((String.fromCharCode(66,0) == iconwechatE ? lessA.length : iconwechatE.length));
         lessA = `${(images3 == String.fromCharCode(75,0) ? images3.length : lessA.length)}`;
      for (let j = 0; j < 3; j++) {
         downX = [3];
      }
      while (iconwechatE.length >= 3 || lessA == String.fromCharCode(112,0)) {
         iconwechatE += `${iconwechatE.length}`;
         break;
      }
      while (iconwechatE.length < vipsportL.length) {
         iconwechatE += `${lessA.length + iconwechatE.length}`;
         break;
      }
          let vietnamN = String.fromCharCode(114,103,98,110,95,119,95,52,53,0);
          let statisticsa = String.fromCharCode(114,101,112,101,97,116,105,110,103,95,98,95,55,54,0);
         images3 += `${(String.fromCharCode(72,0) == vietnamN ? statisticsa.length : vietnamN.length)}`;
      if (4 < lessA.length) {
         lessA = `${iconwechatE.length & 3}`;
      }
      if (4 >= lessA.length) {
          let libcrashsdke = 2.0;
          let selectedY = String.fromCharCode(119,101,98,112,97,103,101,115,95,114,95,55,56,0);
         iconwechatE += `${iconwechatE.length / (Math.max(images3.length, 6))}`;
         libcrashsdke -= (parseFloat(`${selectedY == String.fromCharCode(87,0) ? selectedY.length : parseInt(`${libcrashsdke}`)}`));
      }
      for (let a = 0; a < 3; a++) {
         iconwechatE += `${3 << (Math.min(1, vipsportL.length))}`;
      }
         vipsportL = `${images3.length}`;
         downX.push(3 ^ vipsportL.length);
         downX = [iconwechatE.length];
      if (!images3.startsWith(iconwechatE)) {
          let sharewhiteO = 4;
         images3 += `${sharewhiteO >> (Math.min(vipsportL.length, 2))}`;
      }
      fastforwards += encryptJ.length;
      if (libavformatM) {
         break;
      }
   } while (((textb * fastforwards) < 3.24) && libavformatM);
   if (1 == (3 | grayG.size)) {
       let telegram2 = 3.0;
       let pushf = 4.0;
       let libavdeviceY: Map<any, any> = new Map([[String.fromCharCode(99,95,53,54,95,112,114,105,118,97,116,101,0),346], [String.fromCharCode(99,95,54,48,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0),853], [String.fromCharCode(97,117,120,95,103,95,56,51,0),308]]);
      if (2.43 >= (telegram2 / (Math.max(pushf, 6)))) {
         pushf /= Math.max(5, parseInt(`${pushf}`) + parseInt(`${telegram2}`));
      }
       let str3 = 2.0;
      if ((telegram2 + pushf) < 2.68 && 2.68 < (pushf + telegram2)) {
          let reactT = String.fromCharCode(108,111,99,97,108,116,105,109,101,95,99,95,49,55,0);
          let reactnavigationz = true;
         telegram2 *= (parseFloat(`${parseInt(`${str3}`) + (reactnavigationz ? 1 : 3)}`));
         reactT += `${reactT.length ^ 2}`;
         reactnavigationz = (reactT.length | reactT.length) >= 25;
      }
         telegram2 += parseFloat(`${parseInt(`${telegram2}`) & 1}`);
          let greenU = String.fromCharCode(120,95,56,57,95,115,101,110,100,118,0);
          let basketballawayteam2: Array<any> = [148, 260, 635];
          let nativemoduleE = String.fromCharCode(107,95,57,55,95,98,114,101,97,107,105,110,103,0);
         str3 *= parseFloat(`${1}`);
         greenU = `${basketballawayteam2.length & nativemoduleE.length}`;
         basketballawayteam2.push(nativemoduleE.length);
          let mappingY: Map<any, any> = new Map([[String.fromCharCode(116,105,109,105,110,103,115,95,52,95,57,56,0),484], [String.fromCharCode(121,95,56,53,95,99,111,110,99,101,97,108,0),573], [String.fromCharCode(116,95,57,50,95,109,117,108,116,105,112,108,101,114,115,0),891]]);
         pushf /= Math.max(libavdeviceY.size, 1);
         mappingY = new Map([[`${mappingY.size}`, mappingY.size]]);
      if (3 <= (libavdeviceY.size % (Math.max(4, 8))) || (libavdeviceY.size - parseInt(`${pushf}`)) <= 4) {
          let showlessn = String.fromCharCode(106,95,50,55,95,117,109,98,114,101,108,108,97,0);
         libavdeviceY = new Map([[`${libavdeviceY.size}`, libavdeviceY.size ^ 3]]);
         showlessn = `${showlessn.length}`;
      }
      for (let e = 0; e < 1; e++) {
         telegram2 -= parseFloat(`${parseInt(`${str3}`) ^ parseInt(`${pushf}`)}`);
      }
      for (let b = 0; b < 1; b++) {
         str3 -= parseFloat(`${2}`);
      }
      renewj = `${libavdeviceY.size}`;
   }
      libhermesn += parseFloat(`${3}`);
       let m_titleE = 3.0;
      for (let z = 0; z < 1; z++) {
         m_titleE += parseFloat(`${parseInt(`${m_titleE}`)}`);
      }
      while (m_titleE < m_titleE) {
          let rewindw = 2;
         m_titleE -= parseFloat(`${rewindw}`);
         break;
      }
          let runtime3 = String.fromCharCode(118,108,99,115,112,101,99,95,56,95,57,55,0);
          let predictionbannert = 5;
         m_titleE /= Math.max(parseFloat(`${3 << (Math.min(5, Math.abs(predictionbannert)))}`), 2);
         runtime3 = `${(String.fromCharCode(73,0) == runtime3 ? runtime3.length : runtime3.length)}`;
         predictionbannert += runtime3.length;
      grayG = new Map([[`${subsm.size}`, (String.fromCharCode(66,0) == encryptJ ? encryptJ.length : subsm.size)]]);
      renewj = `${(encryptJ == String.fromCharCode(78,0) ? encryptJ.length : configJ.length)}`;
   let progress_ = 8627762.0 >= textb;
   do {
       let iconcalendarh = 5.0;
       let libreactM = String.fromCharCode(114,105,110,102,95,100,95,52,49,0);
       let libjsinspectorD = String.fromCharCode(112,107,103,99,111,110,102,105,103,95,50,95,52,57,0);
      let orangeuparrowK = libreactM.length >= 9112624;
      do {
         libreactM += `${libjsinspectorD.length + 3}`;
         if (orangeuparrowK) {
            break;
         }
      } while ((1 >= libreactM.length) && orangeuparrowK);
       let halffieldimageZ: Array<any> = [476, 338];
          let coreI = 4.0;
          let heartI = 1.0;
         iconcalendarh /= Math.max(4, parseFloat(`${parseInt(`${iconcalendarh}`) | parseInt(`${heartI}`)}`));
         coreI *= parseInt(`${coreI}`);
         heartI *= parseFloat(`${parseInt(`${coreI}`)}`);
       let iconsubssuccessc: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,99,102,103,95,103,95,56,56,0),true ], [String.fromCharCode(105,95,57,55,95,111,109,109,111,110,0),true ], [String.fromCharCode(103,95,51,57,95,99,97,112,116,117,114,101,0),true ]]);
         iconcalendarh *= parseFloat(`${libreactM.length ^ parseInt(`${iconcalendarh}`)}`);
      textb += (String.fromCharCode(108,0) == membership3 ? parseInt(`${textb}`) : membership3.length);
      if (progress_) {
         break;
      }
   } while (((membership3.length ^ 4) == 3) && progress_);
   if (renewj.startsWith(`${subsm.size}`)) {
       let popupX = String.fromCharCode(114,95,50,56,95,104,105,115,116,0);
       let searchu = false;
       let libfabricjniO = false;
       let orientationi = String.fromCharCode(98,95,57,95,100,109,117,108,0);
       let shirte: Map<any, any> = new Map([[String.fromCharCode(100,112,116,114,115,95,51,95,50,53,0),630], [String.fromCharCode(98,97,99,107,119,97,114,100,95,116,95,51,54,0),862]]);
          let basketballplayerplaceholdery = 4.0;
          let navigationR: Array<any> = [String.fromCharCode(113,95,54,55,95,103,101,116,99,117,116,0), String.fromCharCode(105,95,51,49,95,105,109,112,108,101,109,101,110,116,115,0), String.fromCharCode(109,101,114,103,101,100,95,115,95,49,48,48,0)];
          let plus6 = String.fromCharCode(101,95,52,51,95,105,100,108,101,0);
         shirte.set(orientationi, (orientationi == String.fromCharCode(76,0) ? orientationi.length : navigationR.length));
         basketballplayerplaceholdery -= parseFloat(`${parseInt(`${basketballplayerplaceholdery}`)}`);
         navigationR.push(plus6.length / 1);
         plus6 += `${parseInt(`${basketballplayerplaceholdery}`) | plus6.length}`;
      if (!libfabricjniO) {
         popupX += `${shirte.size % (Math.max(2, popupX.length))}`;
      }
         libfabricjniO = (63 > ((libfabricjniO ? 63 : orientationi.length) & orientationi.length));
         searchu = !orientationi.startsWith(`${libfabricjniO}`);
         popupX += `${((libfabricjniO ? 5 : 4) + 2)}`;
         searchu = shirte.size > 57;
       let libswresampleb: Array<any> = [318, 251, 150];
          let libreactnativejni2 = 0.0;
          let eighteenF: Array<any> = [83, 113, 701];
         libswresampleb.push((String.fromCharCode(97,0) == orientationi ? orientationi.length : (libfabricjniO ? 5 : 4)));
         libreactnativejni2 -= eighteenF.length | parseInt(`${libreactnativejni2}`);
         eighteenF = [eighteenF.length | 3];
       let basketballO = String.fromCharCode(108,95,52,50,95,114,101,110,100,101,114,0);
         shirte = new Map([[`${shirte.size}`, 3]]);
         shirte = new Map([[popupX, orientationi.length & 3]]);
          let canvasp = true;
          let telemetryt = 3.0;
         searchu = !searchu;
         canvasp = !canvasp && telemetryt >= 66.18;
         telemetryt += parseFloat(`${1 * parseInt(`${telemetryt}`)}`);
      while (!basketballO.endsWith(`${libfabricjniO}`)) {
         basketballO = `${orientationi.length % 1}`;
         break;
      }
       let liveshare0: Map<any, any> = new Map([[String.fromCharCode(116,95,48,95,114,101,100,101,101,109,0),417], [String.fromCharCode(98,95,57,49,95,105,109,112,117,108,115,101,0),612], [String.fromCharCode(101,98,117,114,95,100,95,55,56,0),524]]);
      for (let t = 0; t < 1; t++) {
          let whistlex = 4;
          let popupL = 2.0;
          let danger5 = 4;
          let dangerw = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,100,95,57,53,0);
         searchu = 99 == danger5;
         whistlex += whistlex % 1;
         popupL *= (dangerw == String.fromCharCode(97,0) ? dangerw.length : parseInt(`${popupL}`));
         danger5 >>= Math.min(dangerw.length, 5);
      }
      renewj += `${configJ.length & 2}`;
   }
       let buttony = String.fromCharCode(99,95,50,95,98,111,114,100,101,114,115,0);
       let sportsr = String.fromCharCode(112,95,51,56,95,101,120,112,101,114,105,109,101,110,116,97,108,0);
      let areah = buttony.length >= 6955028;
      do {
         buttony = "1";
         if (areah) {
            break;
         }
      } while (areah && (sportsr == String.fromCharCode(109,0)));
          let progresse: Map<any, any> = new Map([[String.fromCharCode(114,101,100,117,99,101,100,95,120,95,54,52,0),String.fromCharCode(101,95,51,48,95,99,111,109,98,105,110,101,100,0)], [String.fromCharCode(99,95,51,49,95,115,108,97,115,104,101,115,0),String.fromCharCode(105,95,53,49,95,105,110,99,108,117,100,101,100,0)]]);
         sportsr += `${3 & buttony.length}`;
         progresse = new Map([[`${progresse.size}`, progresse.size]]);
         buttony += `${sportsr.length}`;
         sportsr += `${2 & sportsr.length}`;
      for (let t = 0; t < 2; t++) {
         sportsr = "3";
      }
         buttony += `${sportsr.length & 3}`;
      fastforwards &= 2;
      grey3 = [configJ.length];
   for (let g = 0; g < 1; g++) {
      libhermesn /= Math.max(parseFloat(`${grayG.size >> (Math.min(Math.abs(subsm.size), 2))}`), 2);
   }

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("frame_tTick");
      } else {
        setSeekDirection("scorepopsoundReport");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let libimagepipeline5 = 5.0;
    let layoutI: Array<any> = [320, 639];
    let dnewinterstitialb = true;
    let rewardS = 4;
    let winda = String.fromCharCode(115,117,112,101,114,120,115,97,105,95,122,95,56,51,0);
    let floaterS = String.fromCharCode(112,95,55,57,95,116,116,97,100,115,112,0);
    let greytickQ = 3.0;
    let scrollviewW = String.fromCharCode(114,101,97,99,104,97,98,108,101,95,118,95,52,0);
    let helperV = String.fromCharCode(114,101,115,116,114,105,99,116,95,105,95,57,50,0);
    let libavcodecu = false;
    let castI = 2.0;
       let gemfileg: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,95,50,95,50,54,0),178], [String.fromCharCode(97,116,114,105,109,95,115,95,53,48,0),175]]);
       let goalt: Array<any> = [356, 214, 931];
         gemfileg = new Map([[`${gemfileg.size}`, goalt.length & gemfileg.size]]);
      if (4 >= (3 | gemfileg.size) && 2 >= (gemfileg.size | 3)) {
         goalt.push(3 / (Math.max(8, goalt.length)));
      }
         goalt.push(2);
      if (2 == (gemfileg.size ^ 3)) {
         gemfileg = new Map([[`${gemfileg.size}`, gemfileg.size << (Math.min(Math.abs(1), 4))]]);
      }
         goalt.push(goalt.length);
      let filledR = goalt.length <= 7252527;
      do {
          let submitk = String.fromCharCode(106,95,54,95,109,105,120,105,110,115,0);
         goalt = [1];
         submitk += `${submitk.length}`;
         if (filledR) {
            break;
         }
      } while ((3 > (gemfileg.size % 4) && (goalt.length % (Math.max(gemfileg.size, 8))) > 4) && filledR);
      dnewinterstitialb = 12.59 == greytickQ;
   if (dnewinterstitialb || 5 < helperV.length) {
      dnewinterstitialb = (libimagepipeline5 - helperV.length) == 74.73;
   }
      rewardS |= scrollviewW.length;
      rewardS /= Math.max(2, 1);
   for (let l = 0; l < 3; l++) {
      rewardS *= winda.length % 3;
   }
   if (winda.endsWith(`${libimagepipeline5}`)) {
      libimagepipeline5 -= (String.fromCharCode(115,0) == floaterS ? floaterS.length : parseInt(`${greytickQ}`));
   }
      scrollviewW = `${3 - helperV.length}`;
   let whiteP = layoutI.length <= 7329654;
   do {
       let flyerk = false;
       let defaultprofilepicY: Array<any> = [746, 364];
          let clockI: Map<any, any> = new Map([[String.fromCharCode(110,117,109,98,105,116,115,95,106,95,57,52,0),428], [String.fromCharCode(97,117,100,105,111,103,101,110,95,106,95,50,0),333], [String.fromCharCode(111,95,55,95,115,105,110,102,0),924]]);
         flyerk = clockI.get(`${flyerk}`) != null;
          let libturbomodulejsijnie: Array<any> = [762, 217];
          let basketballiconR = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,49,95,50,48,0);
         flyerk = basketballiconR == String.fromCharCode(79,0);
         libturbomodulejsijnie = [1 & libturbomodulejsijnie.length];
         basketballiconR = `${libturbomodulejsijnie.length >> (Math.min(3, libturbomodulejsijnie.length))}`;
         flyerk = !flyerk;
         defaultprofilepicY.push(1 * defaultprofilepicY.length);
         flyerk = defaultprofilepicY.length > 48;
          let greyy = String.fromCharCode(119,95,50,49,95,98,101,110,99,0);
         defaultprofilepicY = [(defaultprofilepicY.length - (flyerk ? 1 : 3))];
         greyy += `${greyy.length}`;
      layoutI.push(((flyerk ? 2 : 3) % (Math.max((libavcodecu ? 1 : 4), 3))));
      if (whiteP) {
         break;
      }
   } while (whiteP && ((greytickQ + 2.93) >= 4.38 || 2.93 >= (parseFloat(`${layoutI.length}`) + greytickQ)));
   while (4.22 == (2.24 * libimagepipeline5) && 2.24 == (greytickQ * libimagepipeline5)) {
      greytickQ /= Math.max((parseFloat(`${scrollviewW == String.fromCharCode(65,0) ? scrollviewW.length : rewardS}`)), 5);
      break;
   }
      greytickQ /= Math.max(3, parseFloat(`${helperV.length}`));
      scrollviewW += `${(parseInt(`${greytickQ}`) | (libavcodecu ? 1 : 1))}`;
      libavcodecu = helperV.length > 57;
   for (let s = 0; s < 2; s++) {
      libimagepipeline5 -= helperV.length;
   }
   while (scrollviewW.length <= winda.length) {
      winda += `${layoutI.length}`;
      break;
   }
   if ((3.27 - greytickQ) < 2.56) {
      scrollviewW += `${winda.length}`;
   }
   if (4 > helperV.length) {
      helperV = `${layoutI.length + floaterS.length}`;
   }
   if ((1 % (Math.max(4, rewardS))) >= 2 || libavcodecu) {
       let robotoC = 0.0;
       let submitY = false;
      let iconsaveimageM = submitY ? !submitY : submitY;
      do {
         submitY = robotoC > 93.2;
         if (iconsaveimageM) {
            break;
         }
      } while (((robotoC / (Math.max(4.66, 10))) < 3.50) && iconsaveimageM);
         submitY = !submitY;
         robotoC /= Math.max(parseFloat(`${parseInt(`${robotoC}`) & 1}`), 2);
       let iconshareV = 3.0;
          let render7 = String.fromCharCode(101,108,105,115,116,95,112,95,52,52,0);
          let fastforwardj = true;
         iconshareV += parseInt(`${robotoC}`);
         render7 += `${(render7.length >> (Math.min(4, Math.abs((fastforwardj ? 4 : 3)))))}`;
         fastforwardj = render7.length <= 72 && fastforwardj;
         submitY = submitY || iconshareV > 21.6;
      rewardS >>= Math.min(Math.abs(parseInt(`${libimagepipeline5}`) << (Math.min(1, Math.abs(1)))), 2);
   }
   for (let a = 0; a < 3; a++) {
       let kuaishou2: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,95,121,117,118,121,97,0),false ], [String.fromCharCode(99,111,110,99,97,116,100,101,99,95,50,95,51,50,0),true ], [String.fromCharCode(97,99,97,108,99,95,108,95,55,57,0),false ]]);
       let screenb: Array<any> = [220, 72];
       let shielddonep = 2;
      while ((2 - screenb.length) > 4) {
          let videojs_: Map<any, any> = new Map([[String.fromCharCode(100,95,57,57,95,115,112,107,114,0),true ], [String.fromCharCode(122,95,56,57,95,105,110,116,101,114,120,121,0),false ], [String.fromCharCode(109,115,105,122,101,95,122,95,51,48,0),false ]]);
          let searchbarb = 2.0;
          let textlayoutmanager8 = 3.0;
         shielddonep <<= Math.min(5, Math.abs(shielddonep));
         videojs_ = new Map([[`${videojs_.size}`, 3 ^ videojs_.size]]);
         searchbarb -= parseFloat(`${videojs_.size ^ parseInt(`${searchbarb}`)}`);
         textlayoutmanager8 -= 1;
         break;
      }
       let rulesu = String.fromCharCode(100,95,51,55,95,98,101,105,110,103,0);
       let boots = String.fromCharCode(100,114,97,103,95,54,95,57,51,0);
      for (let d = 0; d < 1; d++) {
         kuaishou2.set(boots, 2);
      }
      let emojif = shielddonep <= 8400904;
      do {
         shielddonep |= boots.length;
         if (emojif) {
            break;
         }
      } while (emojif && (5 < (3 + shielddonep)));
       let componentregistry7 = 3;
       let iconuser6 = 3;
         rulesu = `${(rulesu == String.fromCharCode(48,0) ? iconuser6 : rulesu.length)}`;
      for (let r = 0; r < 3; r++) {
         rulesu = `${screenb.length ^ 1}`;
      }
          let iconarrowrightorangeL = 4.0;
          let transfery = 5.0;
         rulesu = `${screenb.length * 1}`;
         iconarrowrightorangeL *= parseInt(`${transfery}`);
      for (let w = 0; w < 2; w++) {
         componentregistry7 %= Math.max(4, kuaishou2.size * iconuser6);
      }
      rewardS ^= floaterS.length;
   }
       let gpaym = String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,105,95,51,57,0);
       let confirmation9 = String.fromCharCode(115,105,98,108,105,110,103,115,95,54,95,51,52,0);
       let predictionbannerg = String.fromCharCode(122,95,52,52,95,111,110,101,115,99,97,108,101,0);
       let philippines4 = String.fromCharCode(99,97,115,116,95,115,95,53,50,0);
         confirmation9 = `${predictionbannerg.length}`;
      for (let r = 0; r < 1; r++) {
         gpaym = `${predictionbannerg.length << (Math.min(philippines4.length, 5))}`;
      }
         predictionbannerg = `${confirmation9.length >> (Math.min(3, predictionbannerg.length))}`;
          let rooth = String.fromCharCode(104,95,50,52,95,109,97,120,98,117,114,115,116,0);
         predictionbannerg += `${1 & confirmation9.length}`;
         rooth = `${rooth.length}`;
      while (predictionbannerg.length == gpaym.length) {
         predictionbannerg += `${(String.fromCharCode(122,0) == philippines4 ? predictionbannerg.length : philippines4.length)}`;
         break;
      }
      dnewinterstitialb = floaterS == confirmation9;
   while (libavcodecu) {
      libavcodecu = libimagepipeline5 < 17.94;
      break;
   }
      rewardS /= Math.max(layoutI.length * 1, 5);
   for (let o = 0; o < 2; o++) {
      scrollviewW += `${((libavcodecu ? 3 : 1))}`;
   }

        console.error("crash here");
      }

      bufferRef.current = false;
    };

    const onSkip = (time: any) => {
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
       let skipe = String.fromCharCode(97,116,116,114,97,99,116,105,111,110,95,104,95,57,54,0);
    let serviceG = String.fromCharCode(110,108,109,101,97,110,115,95,55,95,52,53,0);
    let championz: Array<any> = [574, 139];
    let gesturesL = String.fromCharCode(118,97,116,97,114,95,104,95,54,48,0);
    let iconpointscoreN = 3.0;
    let mbridgeV = String.fromCharCode(102,95,54,57,95,102,114,111,109,98,105,110,100,0);
    let tooltips1 = 1.0;
    let shirtR = String.fromCharCode(116,97,114,103,101,116,95,112,95,53,50,0);
    let libavdevicee = true;
    let orangeuparrow_ = 0.0;
    let libfabricjniU = 1.0;
    let interstitiali = String.fromCharCode(99,101,108,108,97,117,116,111,95,53,95,54,50,0);
    let whatsapp0 = String.fromCharCode(107,95,49,49,95,105,110,102,101,114,101,100,0);
      libavdevicee = String.fromCharCode(82,0) == skipe;
      orangeuparrow_ -= ((libavdevicee ? 5 : 4) & gesturesL.length);
      serviceG += `${1 ^ parseInt(`${libfabricjniU}`)}`;
      serviceG = `${(serviceG == String.fromCharCode(114,0) ? serviceG.length : shirtR.length)}`;
   if (5 >= (shirtR.length / 2)) {
      shirtR += "3";
   }
       let yellows = 5;
       let middlewareT = 1.0;
       let dependencyP = String.fromCharCode(102,95,54,48,95,114,101,108,111,97,100,101,114,0);
      while (4.80 > (middlewareT * 3.87) && (4 | yellows) > 5) {
          let backgroundx: Map<any, any> = new Map([[String.fromCharCode(97,118,102,114,97,109,101,95,112,95,57,48,0),561], [String.fromCharCode(105,109,112,111,114,116,95,101,95,52,49,0),454]]);
         middlewareT /= Math.max(1, backgroundx.size >> (Math.min(dependencyP.length, 4)));
         break;
      }
          let malaysia0 = String.fromCharCode(113,95,51,54,95,114,101,100,105,114,101,99,116,105,111,110,97,108,0);
          let baidu0 = false;
         middlewareT -= (malaysia0 == String.fromCharCode(73,0) ? yellows : malaysia0.length);
         baidu0 = baidu0 && baidu0;
      if ((3 ^ yellows) > 3 || 3 > (3 & yellows)) {
          let catagoryf = String.fromCharCode(114,101,103,95,52,95,54,57,0);
          let modals = 4;
          let filledW = String.fromCharCode(122,95,48,95,114,97,110,100,111,109,105,122,101,0);
          let homeplayer6 = 2.0;
         yellows <<= Math.min(Math.abs(3), 1);
         catagoryf += `${(filledW == String.fromCharCode(81,0) ? modals : filledW.length)}`;
         modals /= Math.max(2, 2 % (Math.max(7, catagoryf.length)));
         homeplayer6 += parseFloat(`${filledW.length}`);
      }
      while ((middlewareT - 2.11) == 3.16 || 4 == (yellows ^ 3)) {
         middlewareT += parseInt(`${middlewareT}`);
         break;
      }
          let encryptor4 = 3.0;
          let exampleimageb = String.fromCharCode(109,95,53,52,95,105,100,119,116,0);
          let condensedd = String.fromCharCode(122,95,57,51,95,99,97,114,100,115,0);
         middlewareT -= (exampleimageb == String.fromCharCode(71,0) ? exampleimageb.length : parseInt(`${encryptor4}`));
         encryptor4 -= parseFloat(`${condensedd.length / 2}`);
      for (let z = 0; z < 2; z++) {
         middlewareT += 3;
      }
      let inactiveo = middlewareT <= 5178647.0;
      do {
         middlewareT *= 3;
         if (inactiveo) {
            break;
         }
      } while (((dependencyP.length * parseInt(`${middlewareT}`)) < 2 || 2 < (parseInt(`${middlewareT}`) * dependencyP.length)) && inactiveo);
      while (2.14 >= (middlewareT - 2.9)) {
         middlewareT += parseInt(`${middlewareT}`) - dependencyP.length;
         break;
      }
      while (4 < (yellows / (Math.max(5, 1))) || (yellows - parseInt(`${middlewareT}`)) < 5) {
         yellows %= Math.max(4, parseInt(`${middlewareT}`) << (Math.min(4, Math.abs(yellows))));
         break;
      }
      libfabricjniU /= Math.max(3, parseFloat(`${3 + dependencyP.length}`));
      championz.push(parseInt(`${orangeuparrow_}`));
       let minivodB = String.fromCharCode(101,121,99,104,97,105,110,95,120,95,49,49,0);
       let sinaP = false;
       let homeY = 1.0;
         minivodB += "2";
         minivodB = `${minivodB.length}`;
          let yellowtoredl = 1;
          let latno = false;
         minivodB += `${((sinaP ? 4 : 4) & parseInt(`${homeY}`))}`;
         yellowtoredl >>= Math.min(3, parseInt(`${Math.abs((yellowtoredl << (Math.min(1, Math.abs((latno ? 4 : 5))))))}`));
         latno = !latno;
      if (!sinaP && minivodB.length < 4) {
         minivodB += `${minivodB.length}`;
      }
         minivodB = `${((sinaP ? 4 : 1) << (Math.min(Math.abs(parseInt(`${homeY}`)), 5)))}`;
         sinaP = minivodB.endsWith(`${sinaP}`);
         sinaP = !sinaP;
         minivodB += `${(parseInt(`${homeY}`) + (sinaP ? 3 : 1))}`;
      while (minivodB.length < 2) {
         minivodB += `${(parseInt(`${homeY}`) ^ (sinaP ? 4 : 4))}`;
         break;
      }
      serviceG += `${minivodB.length}`;
   let goallogo_ = 7775116.0 >= tooltips1;
   do {
      tooltips1 += parseFloat(`${parseInt(`${iconpointscoreN}`)}`);
      if (goallogo_) {
         break;
      }
   } while (goallogo_ && (tooltips1 <= orangeuparrow_));
   if ((tooltips1 + 2.58) < 3.8 || 4.82 < (2.58 + iconpointscoreN)) {
      tooltips1 /= Math.max(5, parseFloat(`${mbridgeV.length / (Math.max(9, gesturesL.length))}`));
   }
       let largeA: Map<any, any> = new Map([[String.fromCharCode(114,101,102,108,101,99,116,111,114,95,101,95,55,56,0),String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,52,95,49,53,0)], [String.fromCharCode(100,95,52,52,95,118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,0),String.fromCharCode(115,95,52,51,95,105,105,114,102,105,108,116,101,114,0)]]);
       let humidityF = String.fromCharCode(116,104,117,109,98,115,117,112,95,101,95,48,0);
          let reddownarrowA = String.fromCharCode(109,95,57,49,95,105,110,100,105,99,101,115,0);
          let mountingm = String.fromCharCode(107,95,50,54,95,112,114,111,99,97,109,112,0);
         largeA.set(`${humidityF}`, (humidityF == String.fromCharCode(48,0) ? largeA.size : humidityF.length));
         reddownarrowA += `${(String.fromCharCode(54,0) == mountingm ? reddownarrowA.length : mountingm.length)}`;
      if (1 >= (3 - largeA.size)) {
          let middleo = 0;
          let zhuboL = String.fromCharCode(121,95,49,51,95,115,105,109,112,108,101,115,105,103,110,97,108,0);
         humidityF += `${zhuboL.length}`;
         middleo &= middleo;
         zhuboL = `${middleo}`;
      }
      if (5 >= (largeA.size ^ 5) && 1 >= (largeA.size ^ 5)) {
          let iconwechato = String.fromCharCode(114,103,98,112,108,117,115,95,55,95,55,50,0);
          let mbridge_ = 4;
         humidityF = `${iconwechato.length}`;
         iconwechato += `${mbridge_}`;
      }
         largeA.set(`${humidityF}`, humidityF.length);
      while (largeA.size >= humidityF.length) {
         humidityF += `${largeA.size / (Math.max(8, humidityF.length))}`;
         break;
      }
       let orientationK = 1.0;
       let traminir = 3.0;
      libavdevicee = (parseInt(`${orangeuparrow_}`) * gesturesL.length) > 43;
   while (3.70 <= orangeuparrow_) {
      orangeuparrow_ /= Math.max(2, 2);
      break;
   }
      serviceG += `${shirtR.length - 2}`;
   let iconclosewhitebg0 = libavdevicee ? !libavdevicee : libavdevicee;
   do {
       let hometeamfieldE = true;
       let libffmpegkitE = 1.0;
       let u_titleb = String.fromCharCode(99,108,97,109,112,101,100,95,120,95,51,51,0);
       let screens: Array<any> = [String.fromCharCode(114,101,112,111,114,116,115,95,57,95,49,51,0), String.fromCharCode(117,110,101,109,98,101,100,95,121,95,55,51,0), String.fromCharCode(115,95,48,95,117,110,112,111,105,115,111,110,0)];
       let agreementZ = 0.0;
         libffmpegkitE -= (String.fromCharCode(65,0) == u_titleb ? u_titleb.length : parseInt(`${agreementZ}`));
         agreementZ += (parseFloat(`${(hometeamfieldE ? 2 : 3) - 2}`));
      let iconarrowrightorangeo = u_titleb == String.fromCharCode(109,54,118,98,103,0);
      do {
         u_titleb += `${parseInt(`${agreementZ}`)}`;
         if (iconarrowrightorangeo) {
            break;
         }
      } while ((5 > u_titleb.length) && iconarrowrightorangeo);
       let moont = String.fromCharCode(110,117,109,98,101,114,95,51,95,54,55,0);
      for (let v = 0; v < 3; v++) {
          let helperx: Array<any> = [370, 380];
          let boot6 = String.fromCharCode(102,114,101,101,112,95,120,95,56,48,0);
          let trashd = String.fromCharCode(103,101,116,99,95,105,95,54,53,0);
          let homeactive_: Map<any, any> = new Map([[String.fromCharCode(108,108,110,119,95,116,95,56,50,0),118], [String.fromCharCode(103,95,50,55,95,99,111,117,108,100,0),313], [String.fromCharCode(111,112,101,110,95,55,95,49,57,0),464]]);
         hometeamfieldE = 7 > u_titleb.length;
         helperx = [helperx.length];
         boot6 = `${(boot6 == String.fromCharCode(57,0) ? boot6.length : helperx.length)}`;
         trashd += `${homeactive_.size % (Math.max(3, 2))}`;
         homeactive_.set(boot6, boot6.length % 3);
      }
      while (u_titleb.includes(`${hometeamfieldE}`)) {
         hometeamfieldE = screens.includes(agreementZ);
         break;
      }
         screens.push(2);
      for (let c = 0; c < 3; c++) {
          let videocommon2 = String.fromCharCode(115,95,55,56,95,99,111,110,102,111,114,109,97,110,99,101,0);
          let c_centern: Map<any, any> = new Map([[String.fromCharCode(104,95,52,52,95,97,121,111,117,116,0),String.fromCharCode(107,95,56,57,0)], [String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,95,101,95,56,0),String.fromCharCode(97,103,97,105,110,115,116,95,48,95,50,53,0)]]);
         hometeamfieldE = u_titleb == String.fromCharCode(57,0);
         videocommon2 = `${videocommon2.length << (Math.min(4, Math.abs(c_centern.size)))}`;
         c_centern.set(`${videocommon2}`, c_centern.size ^ 2);
      }
      let bridge2 = 5740243.0 >= agreementZ;
      do {
         agreementZ += parseFloat(`${3 << (Math.min(3, moont.length))}`);
         if (bridge2) {
            break;
         }
      } while (((moont.length * parseInt(`${agreementZ}`)) <= 2 && (agreementZ * 3.6) <= 4.85) && bridge2);
      for (let k = 0; k < 1; k++) {
          let inactivex = 3;
          let modityU = false;
         hometeamfieldE = inactivex <= 81;
         inactivex |= (2 | (modityU ? 3 : 4));
      }
      while (!u_titleb.startsWith(`${screens.length}`)) {
          let componentregistry8 = String.fromCharCode(104,95,56,56,95,101,97,115,101,0);
          let sportO = String.fromCharCode(119,95,55,54,95,112,111,115,105,116,105,118,101,0);
          let rewindH = false;
         u_titleb += `${(parseInt(`${libffmpegkitE}`) ^ (hometeamfieldE ? 1 : 4))}`;
         componentregistry8 += `${((rewindH ? 4 : 4) - sportO.length)}`;
         sportO = `${sportO.length + componentregistry8.length}`;
         rewindH = !sportO.includes(`${rewindH}`);
         break;
      }
      if (!hometeamfieldE) {
         hometeamfieldE = u_titleb.length <= parseInt(`${libffmpegkitE}`);
      }
         screens = [parseInt(`${agreementZ}`) + 3];
          let paginationk = String.fromCharCode(103,95,52,55,95,115,112,97,99,101,0);
         libffmpegkitE *= (String.fromCharCode(87,0) == paginationk ? screens.length : paginationk.length);
         screens = [parseInt(`${libffmpegkitE}`)];
      libavdevicee = String.fromCharCode(89,0) == serviceG;
      if (iconclosewhitebg0) {
         break;
      }
   } while (iconclosewhitebg0 && (4.3 < (1.70 + orangeuparrow_)));
   if ((3.0 / (Math.max(9, orangeuparrow_))) == 1.80 || (tooltips1 / 3.0) == 1.28) {
      orangeuparrow_ /= Math.max(4, skipe.length);
   }
      iconpointscoreN *= parseFloat(`${parseInt(`${orangeuparrow_}`)}`);
   for (let f = 0; f < 1; f++) {
      iconpointscoreN -= parseFloat(`${parseInt(`${tooltips1}`) | 1}`);
   }
   let stylesj = libavdevicee ? !libavdevicee : libavdevicee;
   do {
       let selectG = String.fromCharCode(114,101,100,118,95,102,95,50,48,0);
       let iconsharefriendsW = String.fromCharCode(97,95,53,57,95,116,111,112,115,0);
      let update_f9 = 9704893 <= iconsharefriendsW.length;
      do {
         iconsharefriendsW = `${iconsharefriendsW.length - 1}`;
         if (update_f9) {
            break;
         }
      } while (update_f9 && (selectG != String.fromCharCode(120,0)));
      for (let f = 0; f < 3; f++) {
          let activityD = String.fromCharCode(97,95,52,95,114,101,112,114,111,99,101,115,115,0);
          let h_hashG = String.fromCharCode(100,117,114,105,110,103,95,122,95,57,0);
          let modityL = true;
          let floaterJ = String.fromCharCode(104,97,110,103,95,112,95,56,55,0);
         iconsharefriendsW += `${3 ^ iconsharefriendsW.length}`;
         activityD = `${2 - activityD.length}`;
         h_hashG = `${h_hashG.length}`;
         modityL = h_hashG.length > 19;
         floaterJ = `${activityD.length - 3}`;
      }
      let commonQ = String.fromCharCode(121,118,106,48,119,105,111,119,0) == selectG;
      do {
         selectG = `${iconsharefriendsW.length ^ selectG.length}`;
         if (commonQ) {
            break;
         }
      } while (commonQ && (!selectG.startsWith(`${iconsharefriendsW.length}`)));
         iconsharefriendsW += `${iconsharefriendsW.length}`;
      while (selectG.length <= 4 && iconsharefriendsW.length <= 4) {
         iconsharefriendsW = `${selectG.length}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
          let iconorientationB: Array<any> = [41, 480, 956];
          let areaa = 5.0;
          let macau7 = 0.0;
          let megaphone7 = 1.0;
         selectG += `${iconorientationB.length ^ 2}`;
         iconorientationB = [parseInt(`${areaa}`) ^ 2];
         areaa -= parseFloat(`${2}`);
         macau7 /= Math.max(parseInt(`${megaphone7}`) * parseInt(`${areaa}`), 3);
         megaphone7 += parseInt(`${areaa}`) << (Math.min(1, Math.abs(2)));
      }
      libavdevicee = 11.21 < tooltips1;
      if (stylesj) {
         break;
      }
   } while (stylesj && (!libavdevicee));
   if (3.99 >= (3.8 + libfabricjniU) && libfabricjniU >= 3.8) {
      libfabricjniU += parseFloat(`${parseInt(`${orangeuparrow_}`) >> (Math.min(skipe.length, 2))}`);
   }
   while (!libavdevicee && (3.36 + orangeuparrow_) == 2.76) {
       let close1 = 0.0;
       let eventn = 0.0;
       let basketballiconY = String.fromCharCode(105,109,112,108,105,99,105,116,95,106,95,55,56,0);
       let libcrashsdkq = String.fromCharCode(117,95,56,52,95,108,111,99,105,0);
      if (libcrashsdkq.includes(basketballiconY)) {
         libcrashsdkq = `${libcrashsdkq.length % 3}`;
      }
       let libjsinspectorh = 4;
       let lightR = 5;
      if (libcrashsdkq.includes(`${libjsinspectorh}`)) {
          let nterstitialu = 3.0;
          let iconwechatg = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,101,95,53,51,0);
          let libflipperW = 4.0;
          let icondefaultthumbnailI: Array<any> = [String.fromCharCode(116,114,105,101,115,95,103,95,49,48,48,0), String.fromCharCode(122,95,49,48,95,112,97,114,97,108,108,101,108,0), String.fromCharCode(111,118,101,114,105,100,100,101,110,95,107,95,57,53,0)];
          let sinam = String.fromCharCode(99,95,54,49,95,116,114,97,110,115,112,97,114,101,110,116,0);
         libjsinspectorh -= libcrashsdkq.length;
         nterstitialu += parseFloat(`${sinam.length + iconwechatg.length}`);
         iconwechatg += `${icondefaultthumbnailI.length}`;
         libflipperW += parseFloat(`${iconwechatg.length << (Math.min(Math.abs(1), 2))}`);
         icondefaultthumbnailI.push(iconwechatg.length);
         sinam += `${sinam.length ^ 3}`;
      }
         eventn -= parseFloat(`${basketballiconY.length % (Math.max(1, 9))}`);
         eventn -= parseFloat(`${1 + libjsinspectorh}`);
         libjsinspectorh |= lightR;
         libjsinspectorh <<= Math.min(Math.abs(libjsinspectorh), 3);
       let floatingF = String.fromCharCode(114,101,115,105,100,101,110,99,101,95,51,95,54,53,0);
      if (2 >= (floatingF.length << (Math.min(5, Math.abs(libjsinspectorh)))) && (floatingF.length << (Math.min(4, Math.abs(libjsinspectorh)))) >= 2) {
         libjsinspectorh -= libcrashsdkq.length & 1;
      }
      while (libcrashsdkq.endsWith(`${lightR}`)) {
          let iconarrowleft5 = false;
          let ewardedR = 0.0;
         lightR &= libjsinspectorh;
         iconarrowleft5 = !iconarrowleft5;
         ewardedR -= parseInt(`${ewardedR}`) << (Math.min(1, Math.abs(2)));
         break;
      }
      let blacko = 9603610.0 <= eventn;
      do {
         eventn += parseFloat(`${parseInt(`${eventn}`) % (Math.max(3, 10))}`);
         if (blacko) {
            break;
         }
      } while ((close1 < 5.67) && blacko);
         libjsinspectorh /= Math.max(parseInt(`${close1}`), 1);
      orangeuparrow_ /= Math.max(parseInt(`${close1}`) % (Math.max(3, parseInt(`${eventn}`))), 5);
      break;
   }
   let taiwan2 = tooltips1 >= 8233169.0;
   do {
      tooltips1 *= parseFloat(`${serviceG.length}`);
      if (taiwan2) {
         break;
      }
   } while (taiwan2 && (skipe.length > 4));
   for (let o = 0; o < 2; o++) {
      tooltips1 -= parseFloat(`${championz.length & mbridgeV.length}`);
   }
      iconpointscoreN += parseFloat(`${gesturesL.length}`);
   if ((skipe.length >> (Math.min(Math.abs(5), 2))) == 1) {
      skipe += `${championz.length}`;
   }

      setIsPaused(!isPaused);
    };

    const hideSeekProgress = useCallback(
      debounce(() => setSeekDirection("none"), 300),
      []
    );

    const changeEpisodeAndPlay = (ep: any) => {
      setIsPaused(false);
      onEpisodeChange(ep);
    };

    const getNextEpisode = () => {
       let middleM: Array<any> = [String.fromCharCode(115,101,113,95,104,95,55,56,0), String.fromCharCode(122,95,53,57,95,117,100,116,97,0), String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,48,95,54,55,0)];
    let libreactperfloggerjniP = 2.0;
    let screeno = String.fromCharCode(112,95,53,52,95,114,101,97,99,116,105,111,110,0);
    let turndownE = String.fromCharCode(112,116,105,111,110,115,95,97,95,56,48,0);
    let inviteD: Map<any, any> = new Map([[String.fromCharCode(121,95,51,57,95,102,117,110,110,121,0),132], [String.fromCharCode(99,95,51,52,95,97,112,109,116,101,115,116,0),633], [String.fromCharCode(114,101,119,105,110,100,95,111,95,56,0),771]]);
    let uimanagerR = 4.0;
    let bnewinterstitialk: Array<any> = [636, 553];
    let encryptorY = 4;
    let fieldl = String.fromCharCode(114,95,56,51,95,101,120,99,101,112,116,0);
    let whitetickA = 2.0;
    let middlewareL: Map<any, any> = new Map([[String.fromCharCode(99,95,51,54,95,116,116,97,101,110,99,0),854], [String.fromCharCode(113,115,99,97,108,101,95,121,95,50,56,0),227], [String.fromCharCode(115,103,105,114,108,101,95,119,95,53,57,0),881]]);
    let footballr: Array<any> = [String.fromCharCode(114,101,115,104,97,112,101,95,120,95,49,56,0), String.fromCharCode(119,95,52,56,95,97,108,97,114,109,0)];
   if (3 > (inviteD.size & bnewinterstitialk.length) && 5 > (inviteD.size & 3)) {
       let dataQ = String.fromCharCode(105,115,109,108,95,57,95,51,55,0);
       let sentryK = 4;
       let telemetry8: Map<any, any> = new Map([[String.fromCharCode(97,108,97,114,109,95,112,95,54,55,0),String.fromCharCode(119,95,53,50,95,100,101,115,99,101,110,116,0)], [String.fromCharCode(109,97,120,101,100,95,50,95,51,48,0),String.fromCharCode(104,95,56,49,95,99,112,112,108,105,110,116,0)]]);
       let yellow5 = String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,95,105,95,57,54,0);
      let anythinkD = 7971992 <= telemetry8.size;
      do {
         telemetry8.set(yellow5, yellow5.length);
         if (anythinkD) {
            break;
         }
      } while (anythinkD && (dataQ.includes(`${telemetry8.size}`)));
         telemetry8.set(`${sentryK}`, 1);
         dataQ = `${yellow5.length >> (Math.min(Math.abs(3), 5))}`;
          let dark6 = 1.0;
          let iconmored = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,53,95,51,51,0);
          let moduler = false;
         telemetry8.set(`${sentryK}`, sentryK);
         dark6 -= ((moduler ? 3 : 4) / (Math.max(2, 4)));
         iconmored += `${iconmored.length}`;
         moduler = iconmored.length >= 53;
          let starG = 3.0;
         yellow5 = "2";
         starG *= parseInt(`${starG}`) % 1;
      if (telemetry8.size <= dataQ.length) {
          let code7: Array<any> = [89, 450, 13];
          let orangedownarrowz = String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,52,95,57,56,0);
          let coreF = 5.0;
         dataQ = `${telemetry8.size * sentryK}`;
         code7.push(3);
         orangedownarrowz = "2";
         coreF *= parseFloat(`${parseInt(`${coreF}`) % (Math.max(orangedownarrowz.length, 5))}`);
      }
         sentryK |= yellow5.length;
         yellow5 += `${dataQ.length}`;
      for (let w = 0; w < 2; w++) {
         telemetry8 = new Map([[`${telemetry8.size}`, dataQ.length]]);
      }
         telemetry8.set(dataQ, 2 * sentryK);
      for (let r = 0; r < 1; r++) {
         telemetry8 = new Map([[`${telemetry8.size}`, 1 + telemetry8.size]]);
      }
          let livesharex = 1;
          let loginU = 3.0;
         yellow5 = `${yellow5.length / 1}`;
         livesharex |= livesharex;
         loginU += livesharex << (Math.min(Math.abs(parseInt(`${loginU}`)), 2));
      inviteD.set(`${encryptorY}`, 3);
   }
   let termsS = 5902623 >= inviteD.size;
   do {
       let serviceQ = String.fromCharCode(105,95,53,50,95,102,114,97,109,101,119,111,114,107,0);
       let iconviewergifw = String.fromCharCode(120,95,55,48,95,112,104,111,116,111,0);
       let thailandV = String.fromCharCode(107,95,56,50,95,115,119,105,112,101,100,0);
      let libsentryP = iconviewergifw.length >= 5523661;
      do {
         iconviewergifw += `${(String.fromCharCode(107,0) == iconviewergifw ? iconviewergifw.length : serviceQ.length)}`;
         if (libsentryP) {
            break;
         }
      } while ((thailandV.startsWith(`${iconviewergifw.length}`)) && libsentryP);
         serviceQ = `${thailandV.length}`;
      inviteD = new Map([[`${bnewinterstitialk.length}`, bnewinterstitialk.length]]);
      if (termsS) {
         break;
      }
   } while (termsS && ((middleM.length & 1) <= 1 || (inviteD.size & middleM.length) <= 1));
   let flyerw = bnewinterstitialk.length <= 6590257;
   do {
      bnewinterstitialk = [3 & parseInt(`${uimanagerR}`)];
      if (flyerw) {
         break;
      }
   } while ((4 <= (2 >> (Math.min(3, bnewinterstitialk.length)))) && flyerw);
      middleM = [3];
      libreactperfloggerjniP *= 1 - parseInt(`${uimanagerR}`);
       let tickedA = 0.0;
       let progressl = 3.0;
         tickedA *= parseInt(`${progressl}`);
         tickedA /= Math.max(1, parseInt(`${tickedA}`) - 1);
      if (3.34 > (tickedA * progressl) && (progressl * tickedA) > 3.34) {
          let sheet5: Array<any> = [624, 456, 494];
          let faviconE: Map<any, any> = new Map([[String.fromCharCode(114,95,52,56,95,109,111,110,116,104,0),603], [String.fromCharCode(105,95,56,53,95,98,111,116,116,108,101,110,101,99,107,0),916], [String.fromCharCode(99,102,102,116,105,95,120,95,51,51,0),185]]);
          let googleM: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,114,97,110,115,95,105,95,53,54,0),false ], [String.fromCharCode(97,95,52,48,95,100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,0),false ]]);
          let halfK: Array<any> = [94, 282, 930];
         tickedA /= Math.max(3, parseInt(`${tickedA}`) << (Math.min(Math.abs(googleM.size), 3)));
         sheet5.push(faviconE.size);
         faviconE.set(`${sheet5.length}`, 1 - faviconE.size);
         googleM.set(`${sheet5.length}`, 2 << (Math.min(4, sheet5.length)));
         halfK = [1];
      }
      for (let w = 0; w < 3; w++) {
         progressl -= parseFloat(`${parseInt(`${tickedA}`)}`);
      }
      if ((tickedA + progressl) <= 4.97 && 3.67 <= (tickedA + 4.97)) {
          let reactnativeultimatelistview1: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,95,97,95,54,54,0),String.fromCharCode(105,95,53,52,95,108,111,97,100,0)], [String.fromCharCode(115,99,97,110,116,97,98,108,101,115,95,50,95,52,57,0),String.fromCharCode(101,95,56,54,95,97,100,97,112,116,115,0)], [String.fromCharCode(102,105,110,103,101,114,115,95,109,95,57,56,0),String.fromCharCode(97,108,103,111,114,105,116,104,109,95,51,95,54,49,0)]]);
         progressl -= parseFloat(`${reactnativeultimatelistview1.size}`);
      }
         tickedA /= Math.max(parseInt(`${progressl}`) / 3, 2);
      inviteD = new Map([[`${middleM.length}`, parseInt(`${libreactperfloggerjniP}`) % (Math.max(middleM.length, 4))]]);
   let commonv = 9731754 >= screeno.length;
   do {
      screeno = `${screeno.length}`;
      if (commonv) {
         break;
      }
   } while (commonv && (4.83 <= (libreactperfloggerjniP / (Math.max(screeno.length, 6))) && (libreactperfloggerjniP / (Math.max(4.83, 2))) <= 4.58));
   while (3 >= (inviteD.size / 1) || 5.65 >= (4.100 + libreactperfloggerjniP)) {
      libreactperfloggerjniP /= Math.max(4, middleM.length * encryptorY);
      break;
   }

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

      fieldl += `${turndownE.length | screeno.length}`;
      encryptorY /= Math.max(3, middleM.length);
       let sharedU = String.fromCharCode(110,95,50,57,95,109,97,120,107,101,121,115,105,122,101,0);
         sharedU = `${sharedU.length}`;
          let elementsV = 1;
         sharedU += `${elementsV - sharedU.length}`;
          let moviesY = true;
          let codegenj = 0.0;
          let time_ut = String.fromCharCode(104,97,115,120,95,120,95,52,48,0);
         sharedU = `${(String.fromCharCode(110,0) == time_ut ? time_ut.length : parseInt(`${codegenj}`))}`;
         moviesY = !moviesY;
         codegenj *= 2;
      libreactperfloggerjniP += turndownE.length;
   if (3 > fieldl.length) {
      uimanagerR /= Math.max(1, parseFloat(`${bnewinterstitialk.length}`));
   }
   for (let h = 0; h < 2; h++) {
      fieldl += `${fieldl.length - encryptorY}`;
   }
      encryptorY *= parseInt(`${uimanagerR}`) - 2;
      libreactperfloggerjniP -= 2;
   if (libreactperfloggerjniP > inviteD.size) {
      libreactperfloggerjniP /= Math.max(fieldl.length, 4);
   }
        return () => changeEpisodeAndPlay(episodes.urls[activeEpisode + 1].nid);
      }
      return undefined;
    };

    
    //   // if is sports stream, if watch time > 300s, pause vid
    
    
    //     screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    useEffect(() => {
      if (screenState.interstitialShow == true && Platform.OS === "ios") {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, [screenState.interstitialShow]);

    useEffect(() => {
      if (route.name == '体育详情') {
        const unsub = setInterval(() => {
       let abidetectm = 5.0;
    let defaultlogoY = String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,95,49,95,51,54,0);
    let playlistJ = String.fromCharCode(122,95,49,49,95,110,111,116,99,104,0);
    let sharewhiteI = 2.0;
    let incident_ = true;
    let e_titlei: Array<any> = [41, 266, 153];
    let guideZ = String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,48,95,53,49,0);
    let iconsubssuccessf = String.fromCharCode(100,101,99,105,109,97,116,111,114,95,122,95,49,54,0);
    let catagoryy = String.fromCharCode(121,117,118,97,95,104,95,54,55,0);
    let predictionarrowl = 4.0;
    let iconclosewhitewithbg6 = 1;
    let predictionbannersharedr = String.fromCharCode(112,95,52,48,95,105,109,112,114,101,115,115,105,111,110,115,0);
    let rank2 = String.fromCharCode(115,95,56,49,95,97,108,97,99,100,115,112,0);
      e_titlei.push(2 >> (Math.min(5, Math.abs(parseInt(`${abidetectm}`)))));
       let yellow2 = 0.0;
       let scrollview_: Map<any, any> = new Map([[String.fromCharCode(119,95,54,53,95,98,97,111,98,97,98,0),10], [String.fromCharCode(102,95,53,53,0),582]]);
      let sellmathbackgroundF = 6887433.0 <= yellow2;
      do {
         yellow2 -= 3 * scrollview_.size;
         if (sellmathbackgroundF) {
            break;
         }
      } while (((scrollview_.size % 2) == 2 && (yellow2 / 1.99) == 3.90) && sellmathbackgroundF);
      if ((scrollview_.size & 5) < 3 && 2 < (scrollview_.size & 5)) {
          let expiredj = String.fromCharCode(100,95,56,52,95,115,101,99,111,110,100,115,0);
          let injuryb = 0.0;
          let orangeuparrowu = String.fromCharCode(99,111,99,103,95,52,95,57,48,0);
          let completeN = 4.0;
         yellow2 -= 2 + orangeuparrowu.length;
         expiredj += `${expiredj.length}`;
         injuryb /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${completeN}`)), 2)), 3);
         orangeuparrowu = `${parseInt(`${completeN}`) ^ 1}`;
      }
         scrollview_.set(`${yellow2}`, scrollview_.size);
         scrollview_ = new Map([[`${scrollview_.size}`, 2 + parseInt(`${yellow2}`)]]);
      let combineJ = 9686134 <= scrollview_.size;
      do {
         scrollview_ = new Map([[`${scrollview_.size}`, 3]]);
         if (combineJ) {
            break;
         }
      } while (combineJ && (scrollview_.size > yellow2));
         yellow2 += scrollview_.size | parseInt(`${yellow2}`);
      catagoryy += `${iconsubssuccessf.length >> (Math.min(Math.abs(3), 1))}`;
   if (2 == (3 | e_titlei.length)) {
      iconsubssuccessf += "2";
   }
      incident_ = e_titlei.length < 23;
   while (1.80 > (5.0 - sharewhiteI)) {
      guideZ = "3";
      break;
   }
   while (1 < defaultlogoY.length) {
      incident_ = 82.65 >= abidetectm;
      break;
   }
   if ((1 | playlistJ.length) <= 4 || (e_titlei.length | 1) <= 5) {
       let bangs = 1.0;
       let strL = String.fromCharCode(111,95,52,51,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0);
       let helperl = 5.0;
       let libcrashsdkX = 5.0;
       let libswresampley = 1.0;
      for (let a = 0; a < 1; a++) {
         bangs /= Math.max(3, 2);
      }
         libswresampley += parseFloat(`${1 % (Math.max(parseInt(`${libswresampley}`), 1))}`);
         strL = `${strL.length}`;
         helperl -= (parseFloat(`${strL == String.fromCharCode(80,0) ? parseInt(`${libswresampley}`) : strL.length}`));
         strL = "3";
      while (libcrashsdkX == 5.73) {
         helperl -= parseFloat(`${parseInt(`${bangs}`)}`);
         break;
      }
         libswresampley /= Math.max(4, parseFloat(`${parseInt(`${bangs}`) * parseInt(`${libcrashsdkX}`)}`));
         libswresampley -= parseFloat(`${parseInt(`${bangs}`)}`);
      let suggestionE = 6095340.0 <= helperl;
      do {
         helperl -= parseFloat(`${2 ^ strL.length}`);
         if (suggestionE) {
            break;
         }
      } while (suggestionE && ((helperl / (Math.max(parseFloat(`${strL.length}`), 7))) == 5.87 && 3 == (parseInt(`${helperl}`) / (Math.max(strL.length, 8)))));
          let fastT = String.fromCharCode(114,95,55,52,95,115,121,115,99,116,108,0);
          let uimanagerW = String.fromCharCode(117,95,52,54,0);
          let scheduler3 = true;
         bangs += 1 | parseInt(`${libswresampley}`);
         fastT += `${((scheduler3 ? 1 : 5))}`;
         uimanagerW = `${fastT.length}`;
         scheduler3 = !scheduler3;
      if ((libswresampley / 4.52) > 5.71 || (bangs / (Math.max(2, libswresampley))) > 4.52) {
         libswresampley -= parseFloat(`${2 & parseInt(`${bangs}`)}`);
      }
         strL = `${strL.length}`;
         helperl /= Math.max(parseFloat(`${3}`), 4);
          let fastZ = 0.0;
          let u_hashf = 3;
         libswresampley -= (parseFloat(`${String.fromCharCode(78,0) == strL ? strL.length : parseInt(`${fastZ}`)}`));
         fastZ += u_hashf;
         libswresampley /= Math.max(5, parseFloat(`${parseInt(`${libcrashsdkX}`)}`));
      e_titlei = [1 - parseInt(`${helperl}`)];
   }
   let mimen = guideZ == String.fromCharCode(55,48,109,106,110,0);
   do {
      guideZ = `${(String.fromCharCode(112,0) == iconsubssuccessf ? (incident_ ? 2 : 4) : iconsubssuccessf.length)}`;
      if (mimen) {
         break;
      }
   } while (mimen && (abidetectm == 4.10));
   while ((5 + iconsubssuccessf.length) == 1) {
      abidetectm /= Math.max((parseFloat(`${String.fromCharCode(50,0) == playlistJ ? playlistJ.length : iconsubssuccessf.length}`)), 1);
      break;
   }
   while (1 == playlistJ.length || 1 == defaultlogoY.length) {
      playlistJ += "2";
      break;
   }
   if (sharewhiteI <= 5.62) {
      sharewhiteI += defaultlogoY.length;
   }
   while ((4 & catagoryy.length) <= 4 || (e_titlei.length & catagoryy.length) <= 4) {
      e_titlei = [defaultlogoY.length];
      break;
   }
   while (parseInt(`${predictionarrowl}`) >= catagoryy.length) {
       let sportsF: Map<any, any> = new Map([[String.fromCharCode(108,95,49,50,95,97,114,99,104,101,116,121,112,101,0),true ], [String.fromCharCode(100,95,51,51,95,105,110,105,116,105,97,108,105,122,101,114,0),false ], [String.fromCharCode(101,95,53,52,95,114,101,97,100,108,105,110,101,0),true ]]);
      if ((sportsF.size / (Math.max(sportsF.size, 6))) > 3 && (sportsF.size / 3) > 3) {
          let comment8 = true;
          let downloadedq = String.fromCharCode(118,95,56,53,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0);
          let uimanagerk = String.fromCharCode(114,101,119,114,105,116,101,114,95,51,95,57,50,0);
          let apps_ = String.fromCharCode(115,101,108,101,99,116,111,114,95,122,95,53,53,0);
          let loginp: Map<any, any> = new Map([[String.fromCharCode(111,95,49,57,95,115,101,112,97,114,97,116,111,114,0),806], [String.fromCharCode(117,95,53,56,95,118,97,108,105,100,97,116,101,0),983], [String.fromCharCode(102,97,99,105,108,105,116,97,116,101,95,112,95,51,0),557]]);
         sportsF = new Map([[downloadedq, (String.fromCharCode(81,0) == uimanagerk ? uimanagerk.length : downloadedq.length)]]);
         comment8 = loginp.size > apps_.length;
         apps_ = `${(3 >> (Math.min(3, Math.abs((comment8 ? 5 : 2)))))}`;
         loginp = new Map([[`${loginp.size}`, 1]]);
      }
      while ((sportsF.size ^ sportsF.size) > 2 && 2 > (sportsF.size ^ sportsF.size)) {
         sportsF = new Map([[`${sportsF.size}`, sportsF.size / (Math.max(2, 6))]]);
         break;
      }
          let currentt = String.fromCharCode(99,95,53,50,95,109,117,120,0);
          let smallv: Array<any> = [178, 103];
         sportsF.set(currentt, currentt.length % 3);
         smallv.push(smallv.length | 2);
      catagoryy = `${2 >> (Math.min(2, catagoryy.length))}`;
      break;
   }
   if ((3.79 + abidetectm) < 3.53) {
      defaultlogoY = `${(2 << (Math.min(4, Math.abs((incident_ ? 5 : 4)))))}`;
   }
   while (e_titlei.includes(abidetectm)) {
      abidetectm /= Math.max(5, parseFloat(`${e_titlei.length * 2}`));
      break;
   }
   if (4 > (iconclosewhitewithbg6 << (Math.min(iconsubssuccessf.length, 2))) && 2 > (iconsubssuccessf.length << (Math.min(Math.abs(4), 4)))) {
      iconsubssuccessf += `${iconsubssuccessf.length - 1}`;
   }
   for (let g = 0; g < 3; g++) {
      guideZ += `${playlistJ.length >> (Math.min(4, defaultlogoY.length))}`;
   }
      sharewhiteI *= parseInt(`${abidetectm}`) - 2;
   let blackG = iconsubssuccessf.length >= 5607647;
   do {
      iconsubssuccessf = `${iconclosewhitewithbg6}`;
      if (blackG) {
         break;
      }
   } while (blackG && (1 >= (e_titlei.length * 5) || 2 >= (e_titlei.length * 5)));
      abidetectm /= Math.max(2, parseFloat(`${iconsubssuccessf.length}`));
   let serviceG = 7408169.0 <= predictionarrowl;
   do {
      predictionarrowl -= playlistJ.length;
      if (serviceG) {
         break;
      }
   } while (((1.36 / (Math.max(3, predictionarrowl))) < 2.39) && serviceG);

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      !mayi_Gift.isVip(userState.user);

    return (
      <View style={styles.container}>
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
            />
          )}
        </View>

        {(bufferRef.current || seekDirection !== "none") && (
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
                {seekDirection === "frame_tTick" ? (
                  <FastForwardProgressIcon height={50} width={50} />
                ) : (
                  <RewindProgressIcon height={50} width={50} />
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
                source={require("@static/images/sharedImageReactnativeratings.gif")}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
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
    color: "carouselLibreactnativejniLibsentry",
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
