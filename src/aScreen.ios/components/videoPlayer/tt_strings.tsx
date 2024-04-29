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
import VideoControlsOverlay from "./tt_description";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "@static/images/nativeChange.svg";
import RewindProgressIcon from "@static/images/bufferCanvasHandler.svg";

import { incrementSportWatchTime, setFullscreenState } from "@redux/actions/tt_copy_heji";

import {
  ttAcceptedCountItem,
  ttWeibo,
  ttAppsOther,
} from "@type/tt_line_borderless";
import VideoWithControls from "./tt_mini_foreground";
import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { screenModel } from "@type/tt_twitter_data";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility/tt_trophy_cross";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

interface ttSmall {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: ttWeibo;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: ttAppsOther[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: ttAcceptedCountItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
}

type ttStatistics = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type ttGreyBorderless = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<ttGreyBorderless, ttSmall>(
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
       let mathM = String.fromCharCode(105,95,54,54,95,110,105,115,116,122,0);
    let buffer9 = true;
    let mbnativeadvancedv: Array<any> = [319, 615];
    let reactm = 2.0;
    let controle = 4;
    let foundB = String.fromCharCode(101,120,114,100,115,112,95,53,95,57,52,0);
    let fasta: Map<any, any> = new Map([[String.fromCharCode(111,99,117,109,101,110,116,95,115,95,52,0),String.fromCharCode(101,95,53,56,95,98,114,101,110,100,101,114,0)], [String.fromCharCode(115,117,112,101,114,110,111,100,101,95,104,95,49,54,0),String.fromCharCode(98,95,51,49,95,115,111,114,116,0)], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,95,114,95,57,49,0),String.fromCharCode(102,116,118,100,111,99,95,115,95,49,52,0)]]);
    let commentg = String.fromCharCode(118,100,98,101,95,115,95,57,53,0);
    let progressU = 3.0;
    let clearY = 1.0;
    let xcopy_uxm = 0;
    let changeF = String.fromCharCode(104,95,50,55,95,101,110,118,101,108,111,112,101,100,0);
    let readF = 3;
    let favoriteg = 0.0;
    let componentU: Map<any, any> = new Map([[String.fromCharCode(118,102,105,108,116,101,114,95,100,95,54,48,0),492], [String.fromCharCode(114,101,99,101,110,116,108,121,95,117,95,53,57,0),729]]);
   for (let f = 0; f < 2; f++) {
      commentg += `${xcopy_uxm & controle}`;
   }
   let blacklistO = buffer9 ? !buffer9 : buffer9;
   do {
      buffer9 = 11 <= controle;
      if (blacklistO) {
         break;
      }
   } while ((!mathM.startsWith(`${buffer9}`)) && blacklistO);
   while ((xcopy_uxm * commentg.length) > 3) {
      commentg += `${2 | mbnativeadvancedv.length}`;
      break;
   }
      mbnativeadvancedv.push(1 >> (Math.min(5, mbnativeadvancedv.length)));
   while (5.66 < (2.5 * reactm) || (reactm * 2.5) < 1.12) {
      reactm += 2;
      break;
   }
       let settingst = 3.0;
       let turnx = 3.0;
       let mailf: Array<any> = [620, 487];
          let hnewinterstitialp = true;
          let serviceR = 1;
         settingst += mailf.length;
         hnewinterstitialp = 94 < serviceR || !hnewinterstitialp;
         serviceR <<= Math.min(Math.abs(serviceR), 4);
         mailf.push(parseInt(`${turnx}`) - 1);
         settingst += parseInt(`${turnx}`);
      for (let t = 0; t < 1; t++) {
         settingst -= parseInt(`${turnx}`);
      }
      let matchesN = 7330979 <= mailf.length;
      do {
          let sharedW = 0.0;
          let phoneu: Map<any, any> = new Map([[String.fromCharCode(116,119,111,102,105,115,104,95,115,95,49,55,0),String.fromCharCode(97,95,53,55,95,109,105,110,0)], [String.fromCharCode(102,95,50,51,95,101,110,117,109,101,114,97,116,111,114,0),String.fromCharCode(121,95,56,53,95,99,97,118,115,105,100,99,116,0)], [String.fromCharCode(97,95,52,55,95,104,111,108,100,101,114,115,0),String.fromCharCode(98,95,50,53,95,99,112,111,115,0)]]);
          let rewardb = true;
         mailf = [1];
         sharedW -= 1;
         phoneu.set(`${sharedW}`, phoneu.size - parseInt(`${sharedW}`));
         rewardb = phoneu.size == 46;
         if (matchesN) {
            break;
         }
      } while (matchesN && ((3 ^ mailf.length) == 2 || 3.78 == (turnx / (Math.max(1.35, 4)))));
      let whatsappI = turnx >= 9271504.0;
      do {
         turnx /= Math.max(1, parseFloat(`${1 / (Math.max(parseInt(`${turnx}`), 5))}`));
         if (whatsappI) {
            break;
         }
      } while (((turnx - 3.13) == 2.16) && whatsappI);
      if ((settingst * 4.68) == 1.94 || (turnx * settingst) == 4.68) {
          let volumeO = String.fromCharCode(104,97,112,116,105,99,95,113,95,49,57,0);
          let privacyV = String.fromCharCode(113,95,52,56,95,117,110,114,101,115,111,108,118,101,100,0);
         settingst /= Math.max(3, parseInt(`${turnx}`));
         volumeO += "3";
         privacyV = `${(volumeO == String.fromCharCode(110,0) ? privacyV.length : volumeO.length)}`;
      }
       let awayC = 3;
       let circlek = 4;
         settingst /= Math.max(3, 1);
      clearY *= (String.fromCharCode(100,0) == mathM ? parseInt(`${clearY}`) : mathM.length);
   for (let e = 0; e < 1; e++) {
       let historyx = 0.0;
      for (let r = 0; r < 3; r++) {
         historyx += parseInt(`${historyx}`) * 3;
      }
      let injurya = historyx <= 9752931.0;
      do {
         historyx *= 3 / (Math.max(3, parseInt(`${historyx}`)));
         if (injurya) {
            break;
         }
      } while (injurya && (5.88 >= historyx));
      let playercommonv = historyx >= 9288825.0;
      do {
         historyx -= parseInt(`${historyx}`) & parseInt(`${historyx}`);
         if (playercommonv) {
            break;
         }
      } while ((4.67 == historyx) && playercommonv);
      fasta = new Map([[`${fasta.size}`, fasta.size]]);
   }
      mbnativeadvancedv.push(parseInt(`${clearY}`) - mbnativeadvancedv.length);
      xcopy_uxm %= Math.max(5, 1 ^ controle);
       let applicationh = 3.0;
       let time_3H: Array<any> = [462, 963, 690];
       let stringsN = String.fromCharCode(98,111,100,121,115,105,100,95,55,95,52,56,0);
      for (let n = 0; n < 3; n++) {
         time_3H = [parseInt(`${applicationh}`) + time_3H.length];
      }
      if ((applicationh / (Math.max(2.80, 5))) > 2.18) {
         applicationh -= parseFloat(`${parseInt(`${applicationh}`) + 2}`);
      }
      if (time_3H.length > 3) {
          let settingD = 5;
          let downloadP = String.fromCharCode(103,95,57,95,117,110,115,111,114,116,101,100,0);
         time_3H = [downloadP.length & settingD];
      }
       let borderlessH = 0.0;
          let bottom1 = String.fromCharCode(99,111,101,102,115,95,121,95,49,53,0);
          let footballN = String.fromCharCode(98,95,54,49,95,120,99,117,114,115,111,114,0);
          let interstitialx = String.fromCharCode(109,95,54,56,95,102,105,108,108,101,114,0);
         borderlessH -= parseFloat(`${2}`);
         bottom1 = `${(interstitialx == String.fromCharCode(51,0) ? bottom1.length : interstitialx.length)}`;
         footballN = `${bottom1.length / (Math.max(2, 7))}`;
       let inactiveI: Array<any> = [500, 421];
       let readV: Array<any> = [285, 948, 125];
      if ((borderlessH / 1.15) >= 3.38 && (applicationh - 1.15) >= 2.55) {
         borderlessH += parseFloat(`${stringsN.length & 3}`);
      }
          let submitw = false;
          let langkeyJ = String.fromCharCode(104,119,116,105,109,101,95,98,95,52,49,0);
         borderlessH -= parseFloat(`${parseInt(`${applicationh}`)}`);
         submitw = (21 == ((submitw ? langkeyJ.length : 21) * langkeyJ.length));
          let calendar8: Map<any, any> = new Map([[String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,56,95,50,49,0),String.fromCharCode(99,95,54,52,95,118,100,97,115,104,101,114,0)], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,95,106,95,52,50,0),String.fromCharCode(105,110,116,101,114,97,99,116,95,48,95,56,50,0)], [String.fromCharCode(102,95,55,95,104,97,118,105,110,103,0),String.fromCharCode(117,95,52,50,95,97,108,116,114,101,102,0)]]);
          let kuaishouN: Map<any, any> = new Map([[String.fromCharCode(102,95,53,55,95,109,105,110,117,115,0),238], [String.fromCharCode(98,105,110,100,95,98,95,49,56,0),611]]);
          let gesturesy = String.fromCharCode(97,108,116,101,114,97,98,108,101,95,57,95,49,56,0);
         stringsN = `${readV.length ^ kuaishouN.size}`;
         calendar8.set(`${gesturesy}`, 2);
         kuaishouN = new Map([[`${calendar8.size}`, 3 | calendar8.size]]);
         gesturesy = `${gesturesy.length}`;
      mbnativeadvancedv = [parseInt(`${clearY}`) & controle];
   while (4.46 < reactm) {
       let dplusp = 3;
       let shrinkU = String.fromCharCode(112,114,101,100,111,119,110,108,111,97,100,95,119,95,49,53,0);
       let analytic9 = String.fromCharCode(111,117,116,112,117,116,113,95,107,95,56,51,0);
       let launche: Map<any, any> = new Map([[String.fromCharCode(108,105,98,119,101,98,112,95,49,95,50,53,0),String.fromCharCode(115,95,57,57,95,111,119,110,0)], [String.fromCharCode(103,95,49,49,95,115,121,110,99,104,114,111,110,105,122,101,100,0),String.fromCharCode(118,95,54,49,95,106,101,114,114,111,114,0)], [String.fromCharCode(115,110,111,119,95,113,95,57,50,0),String.fromCharCode(101,95,51,57,95,103,114,97,100,108,101,0)]]);
       let greyl = 5;
      while (shrinkU.length > 2) {
         greyl ^= 1;
         break;
      }
      if (shrinkU.endsWith(analytic9)) {
          let turnu = true;
          let lived = 5.0;
          let expandz = String.fromCharCode(116,95,51,54,95,103,117,105,100,101,115,0);
          let reminderi = 5.0;
         analytic9 += "1";
         turnu = 37.72 > reminderi;
         lived *= parseFloat(`${2}`);
         expandz = `${expandz.length}`;
         reminderi /= Math.max(5, expandz.length);
      }
         analytic9 += `${greyl}`;
      for (let k = 0; k < 2; k++) {
          let eact5 = String.fromCharCode(102,95,56,52,95,109,106,112,101,103,100,101,99,0);
         analytic9 += `${(analytic9 == String.fromCharCode(98,0) ? analytic9.length : eact5.length)}`;
      }
          let unselectedb = 4;
          let register_nF = 3.0;
         dplusp ^= launche.size * 2;
         unselectedb &= 2;
         register_nF += parseFloat(`${unselectedb}`);
       let typingq: Array<any> = [76, 661, 795];
          let watchg = 4.0;
          let chatB = String.fromCharCode(110,95,55,50,95,108,117,109,105,110,97,110,99,101,0);
          let acceptedG = true;
         dplusp &= parseInt(`${watchg}`) / (Math.max(typingq.length, 2));
         watchg *= ((acceptedG ? 2 : 2));
         chatB = `${((acceptedG ? 3 : 4))}`;
          let anythinkb: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,119,101,101,107,0),String.fromCharCode(99,95,52,51,95,98,117,102,101,114,0)], [String.fromCharCode(101,115,99,97,112,101,100,95,117,95,55,50,0),String.fromCharCode(111,95,54,54,95,99,111,108,108,101,99,116,105,111,110,115,0)]]);
          let t_unlockj = 0.0;
          let entryI = String.fromCharCode(101,120,116,115,107,95,50,95,56,56,0);
         analytic9 += `${parseInt(`${t_unlockj}`)}`;
         anythinkb = new Map([[`${anythinkb.size}`, entryI.length]]);
         t_unlockj += 3 ^ entryI.length;
          let core7 = true;
          let shrinkN = false;
         typingq = [2 | greyl];
         core7 = (shrinkN ? !core7 : !shrinkN);
      for (let b = 0; b < 1; b++) {
          let transferd: Array<any> = [914, 395];
          let middlewareN = String.fromCharCode(97,118,101,115,95,116,95,54,53,0);
         analytic9 = `${analytic9.length >> (Math.min(Math.abs(2), 2))}`;
         transferd = [1 * transferd.length];
         middlewareN += `${transferd.length & 1}`;
      }
          let whitep = false;
         shrinkU += `${2 >> (Math.min(Math.abs(dplusp), 1))}`;
         whitep = (whitep ? whitep : whitep);
         analytic9 = `${typingq.length & greyl}`;
         launche = new Map([[analytic9, dplusp]]);
       let fileQ = 4.0;
       let eactw = 4.0;
         shrinkU += `${parseInt(`${eactw}`)}`;
      clearY *= parseInt(`${progressU}`);
      break;
   }
   for (let j = 0; j < 3; j++) {
      changeF = `${mathM.length}`;
   }
   let connectionn = reactm <= 5952030.0;
   do {
       let buildl = 1.0;
       let bufferv = 1;
       let whatsappO = 5;
       let cornerv = String.fromCharCode(103,95,51,50,95,121,101,116,0);
       let episodes6 = 4.0;
      if (3.52 > (episodes6 / (Math.max(parseFloat(`${cornerv.length}`), 3)))) {
          let canvas0 = String.fromCharCode(107,95,52,51,95,101,108,115,101,0);
          let termsc = true;
         episodes6 /= Math.max(parseFloat(`${whatsappO}`), 3);
         canvas0 += `${canvas0.length}`;
         termsc = !canvas0.startsWith(`${termsc}`);
      }
         episodes6 -= parseFloat(`${1 - bufferv}`);
          let mbbidk: Map<any, any> = new Map([[String.fromCharCode(107,95,51,54,95,97,114,109,111,110,121,0),String.fromCharCode(121,101,115,116,101,114,100,97,121,95,51,95,50,53,0)], [String.fromCharCode(100,117,112,108,105,99,97,116,111,114,95,112,95,52,50,0),String.fromCharCode(97,108,108,111,99,99,111,109,109,111,110,95,57,95,53,55,0)]]);
          let types1 = String.fromCharCode(115,117,98,109,111,100,117,108,101,95,120,95,55,56,0);
         bufferv &= 3;
         mbbidk = new Map([[`${mbbidk.size}`, (String.fromCharCode(74,0) == types1 ? types1.length : mbbidk.size)]]);
         cornerv += `${bufferv}`;
          let cornerd = 2.0;
         episodes6 /= Math.max(parseFloat(`${parseInt(`${buildl}`)}`), 3);
         cornerd += parseFloat(`${parseInt(`${cornerd}`)}`);
         buildl *= cornerv.length / 2;
         whatsappO /= Math.max(2, 1 << (Math.min(Math.abs(parseInt(`${buildl}`)), 1)));
         cornerv += `${whatsappO >> (Math.min(Math.abs(1), 3))}`;
       let sideV = 2.0;
          let filterY = 5;
         buildl /= Math.max(bufferv / (Math.max(parseInt(`${sideV}`), 5)), 3);
         filterY += filterY;
      let topic9 = buildl <= 8993491.0;
      do {
         buildl /= Math.max(1, 4);
         if (topic9) {
            break;
         }
      } while ((1.3 < (cornerv.length / (Math.max(5, buildl))) || (parseInt(`${buildl}`) / (Math.max(1, 10))) < 5) && topic9);
         sideV /= Math.max(3, 2);
      for (let a = 0; a < 2; a++) {
          let crossk = String.fromCharCode(110,101,97,114,101,115,116,95,113,95,54,56,0);
          let loadingS = 3.0;
          let gestureI = 1.0;
          let zoomM = 1.0;
         whatsappO %= Math.max(1, parseInt(`${sideV}`) + 2);
         crossk = `${parseInt(`${zoomM}`) & crossk.length}`;
         loadingS /= Math.max(4, parseFloat(`${parseInt(`${zoomM}`)}`));
         gestureI -= parseInt(`${loadingS}`) >> (Math.min(crossk.length, 3));
      }
      let userx = cornerv.length >= 6268348;
      do {
         cornerv += `${cornerv.length}`;
         if (userx) {
            break;
         }
      } while ((5.6 < episodes6) && userx);
          let dangerc: Array<any> = [399, 182, 561];
          let playercommonb = String.fromCharCode(112,114,111,98,95,110,95,51,56,0);
          let collectionz: Map<any, any> = new Map([[String.fromCharCode(110,95,50,53,95,109,97,105,110,98,117,110,100,108,101,0),606], [String.fromCharCode(117,95,57,56,95,105,115,114,101,97,100,111,110,108,121,0),72]]);
         buildl *= parseInt(`${episodes6}`);
         dangerc = [(String.fromCharCode(56,0) == playercommonb ? collectionz.size : playercommonb.length)];
         collectionz = new Map([[`${dangerc.length}`, (String.fromCharCode(67,0) == playercommonb ? playercommonb.length : dangerc.length)]]);
      reactm -= cornerv.length;
      if (connectionn) {
         break;
      }
   } while (((fasta.size % 1) >= 1 && (1.87 * reactm) >= 1.38) && connectionn);
      buffer9 = 7 == fasta.size;
       let sourceG = String.fromCharCode(101,95,52,50,95,114,101,112,97,114,101,100,0);
       let hovert = 4;
       let customZ = String.fromCharCode(105,95,55,95,112,112,107,104,0);
          let backgroundT = String.fromCharCode(101,118,101,114,121,95,50,95,55,50,0);
          let vignetteH = true;
          let containerb = 1.0;
         hovert %= Math.max((sourceG.length | (vignetteH ? 5 : 3)), 1);
         backgroundT = `${(backgroundT == String.fromCharCode(88,0) ? parseInt(`${containerb}`) : backgroundT.length)}`;
         vignetteH = 11.78 == containerb && backgroundT.length == 29;
      while ((hovert + 5) >= 3 && (hovert + sourceG.length) >= 5) {
          let privilegex: Map<any, any> = new Map([[String.fromCharCode(118,95,55,48,95,109,101,116,97,100,97,116,97,0),260], [String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,95,109,95,53,52,0),685], [String.fromCharCode(115,95,49,54,95,97,118,102,111,114,109,97,116,0),919]]);
          let launcherW = 3.0;
          let activityB: Map<any, any> = new Map([[String.fromCharCode(115,95,52,95,114,101,99,114,101,97,116,101,0),900], [String.fromCharCode(99,95,53,52,95,114,101,112,108,97,99,105,110,103,0),47], [String.fromCharCode(103,95,49,50,95,99,105,114,99,117,108,97,114,0),873]]);
          let pause8 = 2;
          let logo9 = 1.0;
         hovert /= Math.max(1 | pause8, 2);
         privilegex = new Map([[`${privilegex.size}`, privilegex.size]]);
         launcherW /= Math.max(parseFloat(`${activityB.size}`), 2);
         activityB.set(`${launcherW}`, privilegex.size);
         pause8 ^= parseInt(`${launcherW}`) * parseInt(`${logo9}`);
         logo9 /= Math.max(parseFloat(`${2 - privilegex.size}`), 3);
         break;
      }
      let regengJ = String.fromCharCode(99,118,117,116,121,115,0) == sourceG;
      do {
          let station8 = String.fromCharCode(115,117,98,102,105,101,108,100,115,95,98,95,51,56,0);
         sourceG = `${customZ.length}`;
         station8 += "3";
         if (regengJ) {
            break;
         }
      } while (regengJ && (customZ == String.fromCharCode(73,0)));
      for (let j = 0; j < 3; j++) {
         customZ = `${hovert}`;
      }
         customZ += `${1 << (Math.min(3, customZ.length))}`;
      for (let q = 0; q < 1; q++) {
         customZ = `${customZ.length / 1}`;
      }
         customZ += `${sourceG.length}`;
      if (2 >= (customZ.length - 5)) {
         customZ = `${hovert + 3}`;
      }
          let historys: Array<any> = [696, 176];
         hovert |= historys.length;
      commentg += `${customZ.length - mathM.length}`;
   if (1 < mathM.length) {
      foundB = "1";
   }
   while ((clearY - xcopy_uxm) > 4.28) {
      clearY -= foundB.length / (Math.max(2, 10));
      break;
   }
   for (let k = 0; k < 2; k++) {
       let unselected2 = 4.0;
         unselected2 *= parseFloat(`${2}`);
      while (5.45 < unselected2) {
         unselected2 *= parseFloat(`${1 | parseInt(`${unselected2}`)}`);
         break;
      }
          let darkM = String.fromCharCode(97,116,111,98,111,111,108,95,115,95,52,51,0);
          let playlisty = false;
         unselected2 *= parseFloat(`${darkM.length}`);
      buffer9 = mbnativeadvancedv.length < 15;
   }
   while (controle <= 1) {
       let holder0 = true;
       let recommendationy = 5.0;
         recommendationy -= (parseFloat(`${(holder0 ? 4 : 2) - parseInt(`${recommendationy}`)}`));
      for (let q = 0; q < 1; q++) {
          let shootY: Array<any> = [831, 81];
          let reactnativejsP = String.fromCharCode(109,95,49,52,95,101,102,102,101,99,116,0);
         recommendationy += parseFloat(`${shootY.length}`);
         shootY = [(String.fromCharCode(76,0) == reactnativejsP ? reactnativejsP.length : reactnativejsP.length)];
      }
       let tailv = 1.0;
       let bootsplashV = 3.0;
         tailv -= parseInt(`${bootsplashV}`) + 3;
      for (let k = 0; k < 2; k++) {
          let langkeyM = true;
          let resendA = String.fromCharCode(115,117,112,112,111,114,116,101,100,95,122,95,54,53,0);
         bootsplashV *= (2 / (Math.max(4, (langkeyM ? 5 : 4))));
         langkeyM = resendA.length < 63 || resendA == String.fromCharCode(88,0);
      }
         recommendationy /= Math.max(1, (parseFloat(`${parseInt(`${recommendationy}`) % (Math.max(7, (holder0 ? 2 : 4)))}`)));
      controle |= parseInt(`${progressU}`) * xcopy_uxm;
      break;
   }
      mathM = `${fasta.size >> (Math.min(2, Math.abs(xcopy_uxm)))}`;
   if ((parseInt(`${clearY}`) + foundB.length) > 4 || (clearY + 5.5) > 5.63) {
      clearY -= 1 / (Math.max(7, parseInt(`${progressU}`)));
   }
   for (let s = 0; s < 2; s++) {
       let u_titleD = String.fromCharCode(103,95,56,0);
       let thumbnailk = String.fromCharCode(104,95,53,55,95,115,97,109,101,0);
       let benefitP = false;
       let storeq = 4.0;
         benefitP = u_titleD.length >= 64 || 64 >= thumbnailk.length;
      let floaterb = thumbnailk == String.fromCharCode(51,103,116,119,113,107,57,0);
      do {
          let dycreator_ = false;
          let renewG = false;
         thumbnailk += `${((dycreator_ ? 3 : 5) ^ parseInt(`${storeq}`))}`;
         dycreator_ = renewG;
         if (floaterb) {
            break;
         }
      } while (floaterb && (thumbnailk.length < 5));
      let kickn = benefitP ? !benefitP : benefitP;
      do {
         benefitP = !benefitP;
         if (kickn) {
            break;
         }
      } while ((3.31 == (5.54 * storeq)) && kickn);
         thumbnailk = `${u_titleD.length}`;
      if (thumbnailk.includes(`${benefitP}`)) {
         thumbnailk = `${u_titleD.length}`;
      }
      while (!benefitP) {
         u_titleD += `${u_titleD.length}`;
         break;
      }
      if (!u_titleD.startsWith(thumbnailk)) {
         thumbnailk += `${(u_titleD == String.fromCharCode(71,0) ? u_titleD.length : parseInt(`${storeq}`))}`;
      }
         thumbnailk += `${((benefitP ? 2 : 1) % (Math.max(parseInt(`${storeq}`), 6)))}`;
         u_titleD = `${(parseInt(`${storeq}`) | (benefitP ? 2 : 3))}`;
          let sortX = String.fromCharCode(115,109,105,108,105,101,115,95,108,95,53,56,0);
         u_titleD += `${u_titleD.length}`;
         sortX += `${sortX.length << (Math.min(Math.abs(3), 5))}`;
       let shirtm: Map<any, any> = new Map([[String.fromCharCode(108,111,103,105,99,97,108,95,122,95,57,54,0),192], [String.fromCharCode(101,95,57,95,109,101,100,105,117,109,0),984]]);
       let streamingo: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,105,110,102,111,95,56,95,51,51,0),914], [String.fromCharCode(100,95,55,95,97,102,116,101,114,0),391], [String.fromCharCode(111,95,55,49,95,99,111,109,109,97,110,100,0),82]]);
         u_titleD += `${streamingo.size / 3}`;
      mathM += `${parseInt(`${storeq}`)}`;
   }
       let injuryk: Map<any, any> = new Map([[String.fromCharCode(108,95,54,50,95,112,114,101,99,105,115,101,0),false ], [String.fromCharCode(104,111,114,105,122,95,105,95,51,55,0),true ], [String.fromCharCode(103,95,50,53,95,99,111,110,118,101,114,115,105,111,110,0),true ]]);
       let libcrashsdkU = String.fromCharCode(110,111,99,104,101,99,107,95,117,95,51,50,0);
       let caste = false;
         injuryk = new Map([[libcrashsdkU, ((caste ? 4 : 5) | libcrashsdkU.length)]]);
          let upgradeD = String.fromCharCode(100,101,115,116,114,111,121,95,113,95,50,52,0);
          let umeng2: Array<any> = [861, 244];
         injuryk.set(upgradeD, ((caste ? 1 : 2)));
         upgradeD += "1";
         umeng2.push(umeng2.length);
          let redirectZ = String.fromCharCode(111,95,51,57,95,108,97,118,102,117,116,105,108,115,0);
          let yellowD = 3.0;
         injuryk = new Map([[`${injuryk.size}`, redirectZ.length]]);
         redirectZ = `${1 ^ parseInt(`${yellowD}`)}`;
         yellowD /= Math.max(3, parseInt(`${yellowD}`) ^ parseInt(`${yellowD}`));
         injuryk = new Map([[libcrashsdkU, (String.fromCharCode(98,0) == libcrashsdkU ? libcrashsdkU.length : (caste ? 3 : 5))]]);
          let submiti = 4;
          let settingsr = 5.0;
          let logoutU = String.fromCharCode(105,95,53,95,110,112,112,115,99,97,108,101,0);
         injuryk.set(`${submiti}`, injuryk.size);
         submiti &= parseInt(`${settingsr}`);
         settingsr *= parseFloat(`${parseInt(`${settingsr}`)}`);
         logoutU = `${parseInt(`${settingsr}`) * 2}`;
      for (let q = 0; q < 1; q++) {
          let sentryC = false;
         injuryk = new Map([[libcrashsdkU, ((sentryC ? 2 : 2) * 3)]]);
      }
         injuryk = new Map([[`${injuryk.size}`, injuryk.size]]);
          let blacklistI = true;
          let ewardedD = String.fromCharCode(98,97,100,103,101,95,50,95,54,52,0);
          let episodev: Array<any> = [95, 918];
         libcrashsdkU = `${((blacklistI ? 3 : 5))}`;
         blacklistI = ewardedD == String.fromCharCode(120,0);
         ewardedD += `${ewardedD.length & 3}`;
         episodev = [(ewardedD == String.fromCharCode(117,0) ? ewardedD.length : episodev.length)];
       let selectiona: Array<any> = [String.fromCharCode(104,101,118,99,112,114,101,100,95,114,95,53,0), String.fromCharCode(114,95,57,49,95,119,97,116,99,104,101,114,115,0)];
       let pressure3: Array<any> = [30, 564];
      progressU *= parseFloat(`${foundB.length}`);
       let championR = String.fromCharCode(111,95,49,51,95,112,97,115,115,102,98,0);
       let applef = true;
       let vietnamv: Map<any, any> = new Map([[String.fromCharCode(105,95,52,95,98,105,116,100,101,112,116,104,0),827], [String.fromCharCode(107,95,52,57,95,112,111,112,117,108,97,116,101,0),683]]);
      for (let n = 0; n < 2; n++) {
          let homec: Map<any, any> = new Map([[String.fromCharCode(102,95,49,0),534], [String.fromCharCode(121,95,49,49,95,117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0),933], [String.fromCharCode(102,95,56,57,95,99,111,108,99,111,108,0),828]]);
          let countdowno: Array<any> = [376, 22, 439];
          let switch_hD = String.fromCharCode(111,95,57,50,95,104,105,103,104,108,105,103,104,116,101,100,0);
          let fastZ = 4.0;
          let thailandY = String.fromCharCode(116,95,52,54,95,117,101,117,101,0);
         vietnamv = new Map([[`${vietnamv.size}`, countdowno.length]]);
         homec.set(switch_hD, 3 | switch_hD.length);
         countdowno.push(homec.size);
         fastZ -= homec.size;
         thailandY += `${parseInt(`${fastZ}`) | 1}`;
      }
         applef = (vietnamv.size ^ championR.length) >= 76;
       let castingN = String.fromCharCode(107,95,57,55,95,97,115,105,110,107,0);
       let room8 = String.fromCharCode(118,95,55,52,95,115,105,103,118,101,114,0);
      while (4 == vietnamv.size && (4 & vietnamv.size) == 4) {
         applef = room8.length == 22;
         break;
      }
         castingN = `${room8.length - castingN.length}`;
          let thumbnailC: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,105,111,114,95,106,95,52,49,0),78], [String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,54,95,55,55,0),904]]);
          let championW = 2;
          let settingsu = 5.0;
         room8 += `${((applef ? 2 : 1) << (Math.min(castingN.length, 2)))}`;
         thumbnailC.set(`${championW}`, championW - thumbnailC.size);
         settingsu += parseInt(`${settingsu}`);
         applef = castingN.startsWith(`${applef}`);
      for (let k = 0; k < 3; k++) {
         castingN = "1";
      }
      if (castingN.length > championR.length) {
         championR += `${room8.length}`;
      }
      progressU /= Math.max(parseFloat(`${3}`), 2);
   for (let j = 0; j < 2; j++) {
      xcopy_uxm /= Math.max(1, mathM.length);
   }
   let subs7 = 5375263 >= foundB.length;
   do {
       let videocommonp = false;
       let mbnativeadvanceds = false;
       let fillE = String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,95,56,95,49,49,0);
       let castingS: Array<any> = [58, 748];
          let selection5: Array<any> = [59, 247, 279];
          let turnf: Map<any, any> = new Map([[String.fromCharCode(105,95,50,56,95,115,116,97,98,105,108,105,116,121,0),632], [String.fromCharCode(118,95,55,57,95,102,108,111,97,116,115,104,111,114,116,0),266], [String.fromCharCode(108,122,109,97,95,115,95,53,50,0),381]]);
         fillE = `${selection5.length}`;
         selection5.push(turnf.size);
         turnf.set(`${turnf.size}`, turnf.size - 2);
      for (let t = 0; t < 3; t++) {
         videocommonp = castingS.length >= 77;
      }
         fillE += `${fillE.length / 3}`;
      while ((fillE.length << (Math.min(3, castingS.length))) > 5) {
         castingS.push(((videocommonp ? 5 : 4)));
         break;
      }
      if (2 == fillE.length) {
         mbnativeadvanceds = 35 == castingS.length || String.fromCharCode(69,0) == fillE;
      }
      for (let b = 0; b < 2; b++) {
          let statsL = String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,55,95,52,0);
          let emojie = String.fromCharCode(122,95,51,56,95,99,97,108,99,117,108,97,116,101,0);
          let mbnative9: Map<any, any> = new Map([[String.fromCharCode(98,111,97,116,95,99,95,49,0),422], [String.fromCharCode(112,108,111,116,95,99,95,53,56,0),576]]);
         fillE += `${statsL.length + 2}`;
         statsL = `${2 ^ emojie.length}`;
         emojie += `${mbnative9.size}`;
         mbnative9 = new Map([[`${mbnative9.size}`, emojie.length * 3]]);
      }
      while (fillE.length < castingS.length) {
         fillE += `${(1 ^ (videocommonp ? 3 : 4))}`;
         break;
      }
       let appsE = 3.0;
       let bodanK = 0.0;
         appsE *= parseFloat(`${parseInt(`${bodanK}`) << (Math.min(2, Math.abs(1)))}`);
         castingS = [2 ^ parseInt(`${bodanK}`)];
       let huaweia = 1.0;
      if (!videocommonp) {
         huaweia -= parseFloat(`${1}`);
      }
      foundB = `${parseInt(`${progressU}`) * 2}`;
      if (subs7) {
         break;
      }
   } while ((foundB.startsWith(`${favoriteg}`)) && subs7);
       let targete = 0.0;
       let entryU = String.fromCharCode(119,97,108,107,105,110,103,95,122,95,56,55,0);
       let dplusy = 1;
       let mappingK: Array<any> = [757, 769];
       let volumet: Array<any> = [681, 142, 82];
      let topicm = 6189317 >= mappingK.length;
      do {
         mappingK = [3];
         if (topicm) {
            break;
         }
      } while ((2 < (dplusy >> (Math.min(Math.abs(3), 3)))) && topicm);
          let styless: Array<any> = [339, 523];
          let disconnected2 = String.fromCharCode(112,114,101,102,102,101,114,101,100,95,118,95,49,49,0);
          let handlerC: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,112,114,111,103,114,97,109,115,0),85], [String.fromCharCode(119,95,49,48,48,95,100,99,116,120,0),278], [String.fromCharCode(118,101,114,116,101,120,95,112,95,53,51,0),220]]);
         dplusy -= styless.length;
         styless = [3 | handlerC.size];
         disconnected2 += `${disconnected2.length - handlerC.size}`;
          let libcrashsdkE = 2;
         volumet = [mappingK.length - entryU.length];
         libcrashsdkE %= Math.max(libcrashsdkE >> (Math.min(Math.abs(1), 4)), 4);
       let foundk: Map<any, any> = new Map([[String.fromCharCode(105,100,102,97,95,55,95,49,54,0),341], [String.fromCharCode(107,95,50,49,95,110,115,115,101,0),120]]);
       let hejiO: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,95,53,95,57,55,0),String.fromCharCode(113,95,51,54,95,100,101,99,111,100,101,114,105,110,105,116,0)], [String.fromCharCode(106,95,52,55,95,97,118,115,117,98,116,105,116,108,101,0),String.fromCharCode(103,111,101,114,108,105,95,101,95,53,51,0)]]);
         mappingK = [mappingK.length];
      while (2 >= (dplusy % (Math.max(5, 7)))) {
         dplusy <<= Math.min(2, mappingK.length);
         break;
      }
       let reactnativejs3: Array<any> = [486, 906];
          let borderlessm = 2.0;
          let bufferH = 4.0;
         hejiO.set(`${reactnativejs3.length}`, 2 + reactnativejs3.length);
         borderlessm += parseFloat(`${parseInt(`${bufferH}`) << (Math.min(5, Math.abs(parseInt(`${borderlessm}`))))}`);
         bufferH *= parseInt(`${bufferH}`) * parseInt(`${borderlessm}`);
      xcopy_uxm &= (entryU == String.fromCharCode(83,0) ? readF : entryU.length);
      targete += parseFloat(`${parseInt(`${targete}`)}`);
      reactm -= readF;
   if ((parseInt(`${favoriteg}`) / (Math.max(foundB.length, 4))) >= 4 || 5 >= (foundB.length & 4)) {
      foundB += `${parseInt(`${progressU}`) / 1}`;
   }
       let activitys = String.fromCharCode(115,117,112,112,111,114,116,101,100,95,117,95,51,0);
       let logoutf = true;
       let n_managero = 5.0;
         logoutf = logoutf && 81.73 <= n_managero;
         logoutf = (13 == ((!logoutf ? 13 : activitys.length) / (Math.max(2, activitys.length))));
      let gradleww = n_managero <= 8078052.0;
      do {
         n_managero /= Math.max(5, (parseFloat(`${activitys == String.fromCharCode(111,0) ? activitys.length : parseInt(`${n_managero}`)}`)));
         if (gradleww) {
            break;
         }
      } while ((n_managero >= 4.49) && gradleww);
         activitys = `${((logoutf ? 5 : 5) % 3)}`;
         n_managero /= Math.max(1, parseFloat(`${parseInt(`${n_managero}`) & 3}`));
         activitys += `${(activitys == String.fromCharCode(102,0) ? activitys.length : parseInt(`${n_managero}`))}`;
         logoutf = logoutf || n_managero == 4.61;
         activitys = `${parseInt(`${n_managero}`) ^ 1}`;
          let middlek = 3.0;
          let gpay4 = String.fromCharCode(113,95,49,54,95,118,97,108,0);
         logoutf = 60.9 < n_managero;
         middlek *= parseInt(`${middlek}`);
         gpay4 += `${1 + gpay4.length}`;
      reactm *= 2 - componentU.size;
   for (let j = 0; j < 3; j++) {
      progressU -= parseFloat(`${parseInt(`${reactm}`) << (Math.min(Math.abs(fasta.size), 2))}`);
   }
      changeF = `${2 & changeF.length}`;
      componentU = new Map([[commentg, 3]]);
      favoriteg /= Math.max(fasta.size, 1);
      changeF += `${(String.fromCharCode(119,0) == mathM ? parseInt(`${favoriteg}`) : mathM.length)}`;
   while (componentU.size < 1) {
      clearY *= 2 ^ xcopy_uxm;
      break;
   }
      commentg += `${2 + commentg.length}`;
   let l_titlef = String.fromCharCode(121,102,100,120,55,97,107,105,0) == commentg;
   do {
      commentg = `${xcopy_uxm}`;
      if (l_titlef) {
         break;
      }
   } while (((commentg.length % 4) >= 4 || 2 >= (4 % (Math.max(4, componentU.size)))) && l_titlef);
   if (mathM.length > xcopy_uxm) {
       let crossj = String.fromCharCode(98,114,105,100,103,101,97,98,108,101,95,98,95,51,56,0);
       let modityr = String.fromCharCode(107,95,56,55,95,97,100,118,97,110,99,105,110,103,0);
       let episodeq = String.fromCharCode(118,105,115,105,98,105,116,121,95,98,95,56,54,0);
       let filly = String.fromCharCode(118,95,50,51,95,115,105,102,116,0);
         filly = `${3 + crossj.length}`;
         crossj += `${modityr.length ^ episodeq.length}`;
      if (filly.endsWith(episodeq)) {
         episodeq += `${episodeq.length}`;
      }
      if (filly == episodeq) {
         episodeq += `${crossj.length ^ modityr.length}`;
      }
         filly += `${filly.length << (Math.min(1, modityr.length))}`;
         filly = `${3 >> (Math.min(4, modityr.length))}`;
      while (episodeq != String.fromCharCode(72,0) && 2 <= crossj.length) {
          let utilsg = String.fromCharCode(98,121,114,121,105,95,117,95,49,49,0);
          let middle3 = 3;
          let macau9: Map<any, any> = new Map([[String.fromCharCode(113,95,49,48,48,95,115,112,101,101,99,104,0),229], [String.fromCharCode(114,95,55,54,95,103,114,97,112,104,113,108,0),631]]);
          let time_4y = String.fromCharCode(114,95,53,54,95,109,101,115,111,110,0);
          let combinedV = false;
         crossj = `${episodeq.length / (Math.max(4, macau9.size))}`;
         utilsg = `${utilsg.length + time_4y.length}`;
         middle3 >>= Math.min(1, utilsg.length);
         macau9.set(utilsg, utilsg.length % (Math.max(4, middle3)));
         time_4y += `${middle3}`;
         combinedV = !combinedV;
         break;
      }
         modityr = `${crossj.length}`;
      while (filly != String.fromCharCode(78,0)) {
         crossj += `${crossj.length}`;
         break;
      }
         crossj = `${crossj.length | modityr.length}`;
       let brightness7 = 5.0;
         brightness7 += (crossj == String.fromCharCode(66,0) ? modityr.length : crossj.length);
      mathM += `${controle}`;
   }
      reactm *= (parseInt(`${progressU}`) >> (Math.min(3, Math.abs((buffer9 ? 4 : 1)))));
   while ((controle % 4) == 5) {
       let castingw: Map<any, any> = new Map([[String.fromCharCode(102,95,53,48,95,122,101,114,111,105,110,103,0),false ], [String.fromCharCode(114,101,116,114,105,101,100,95,122,95,53,48,0),false ]]);
       let debugJ = 4;
       let r_countV = String.fromCharCode(114,101,109,111,118,101,100,95,109,95,51,48,0);
       let placeholderI = 3;
          let crownS: Map<any, any> = new Map([[String.fromCharCode(98,95,52,55,95,112,101,114,109,105,115,115,105,111,110,115,0),866], [String.fromCharCode(119,95,57,54,95,119,114,111,110,103,0),530]]);
          let constantsc = String.fromCharCode(118,95,56,53,95,105,110,116,114,97,120,109,98,121,0);
          let ajaxC: Array<any> = [568, 311];
         debugJ ^= 3;
         crownS.set(`${constantsc}`, crownS.size);
         constantsc = `${(constantsc == String.fromCharCode(54,0) ? crownS.size : constantsc.length)}`;
         ajaxC.push(constantsc.length);
      for (let f = 0; f < 1; f++) {
         castingw = new Map([[`${castingw.size}`, 3]]);
      }
       let window__g3 = false;
         placeholderI %= Math.max(3, 2);
      for (let x = 0; x < 3; x++) {
         debugJ += placeholderI << (Math.min(1, Math.abs(1)));
      }
      if (2 == (2 + castingw.size)) {
          let fill1 = 4.0;
          let chatL = 1;
          let floater0 = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,122,95,53,52,0);
          let x_counta = 5;
         window__g3 = r_countV.length == 97;
         fill1 *= floater0.length;
         chatL &= parseInt(`${fill1}`);
         floater0 += `${x_counta >> (Math.min(floater0.length, 5))}`;
         x_counta &= parseInt(`${fill1}`);
      }
      while (!Array.from(castingw.values()).includes(placeholderI)) {
          let iconJ = false;
          let progress4: Array<any> = [473, 933];
         placeholderI %= Math.max(1, 1);
         iconJ = progress4.includes(iconJ);
         progress4.push((progress4.length | (iconJ ? 3 : 4)));
         break;
      }
      let backQ = 7223263 >= castingw.size;
      do {
         castingw = new Map([[`${window__g3}`, r_countV.length]]);
         if (backQ) {
            break;
         }
      } while (backQ && (3 > (debugJ * castingw.size)));
      if (3 == (castingw.size | 3)) {
         castingw.set(`${debugJ}`, debugJ);
      }
      let albumZ = 8185111 >= placeholderI;
      do {
          let danger7: Array<any> = [986, 29, 663];
          let goalE = 4.0;
         placeholderI |= (danger7.length & (window__g3 ? 2 : 2));
         danger7 = [1 << (Math.min(Math.abs(parseInt(`${goalE}`)), 3))];
         goalE += 1;
         if (albumZ) {
            break;
         }
      } while (albumZ && (window__g3));
      while ((2 >> (Math.min(1, Math.abs(placeholderI)))) >= 4 || window__g3) {
          let bottomv = String.fromCharCode(112,117,116,95,99,95,49,0);
          let eacts: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,112,95,54,48,0),true ], [String.fromCharCode(121,95,49,50,95,114,100,101,108,116,97,0),true ], [String.fromCharCode(103,95,52,53,95,115,101,115,115,111,110,0),false ]]);
          let configureA = true;
         placeholderI <<= Math.min(5, parseInt(`${Math.abs((1 % (Math.max(9, (configureA ? 3 : 5)))))}`));
         bottomv += `${(String.fromCharCode(84,0) == bottomv ? eacts.size : bottomv.length)}`;
         eacts.set(bottomv, (String.fromCharCode(68,0) == bottomv ? bottomv.length : eacts.size));
         configureA = 66 < eacts.size;
         break;
      }
         debugJ &= debugJ;
      controle += fasta.size;
      break;
   }
       let mbridger: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,100,95,56,56,0),267], [String.fromCharCode(97,115,107,105,110,103,95,103,95,51,48,0),903]]);
       let nterstitialr = String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,51,95,53,48,0);
      let mappinga = nterstitialr.length <= 6071060;
      do {
          let moonS = 3;
          let pause1 = 4;
         nterstitialr = `${pause1}`;
         moonS -= moonS + moonS;
         if (mappinga) {
            break;
         }
      } while ((4 >= (3 ^ mbridger.size)) && mappinga);
      while (!nterstitialr.startsWith(`${mbridger.size}`)) {
         mbridger = new Map([[`${mbridger.size}`, 2 + mbridger.size]]);
         break;
      }
       let main_hw = String.fromCharCode(113,116,112,97,108,101,116,116,101,95,114,95,53,51,0);
       let typingJ = String.fromCharCode(99,101,110,116,101,114,101,100,95,49,95,49,54,0);
         main_hw = `${(typingJ == String.fromCharCode(108,0) ? typingJ.length : main_hw.length)}`;
         nterstitialr = `${typingJ.length}`;
          let buildJ = 3.0;
          let otherE = String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,95,99,95,57,51,0);
          let renewGF = 3.0;
         nterstitialr = `${1 * main_hw.length}`;
         buildJ /= Math.max(3 - parseInt(`${renewGF}`), 4);
         otherE += `${parseInt(`${renewGF}`)}`;
      fasta.set(`${controle}`, foundB.length + 1);
   for (let q = 0; q < 3; q++) {
      xcopy_uxm *= (mathM == String.fromCharCode(120,0) ? mathM.length : parseInt(`${clearY}`));
   }
   if (!commentg.endsWith(`${xcopy_uxm}`)) {
       let screenU: Array<any> = [796, 437];
       let trophy0 = String.fromCharCode(121,99,98,99,114,95,49,95,52,0);
       let manifestw = 1.0;
      for (let b = 0; b < 1; b++) {
         trophy0 += "3";
      }
          let circle3: Array<any> = [String.fromCharCode(100,95,51,48,95,114,101,118,101,114,115,101,0), String.fromCharCode(100,117,97,108,105,110,112,117,116,95,54,95,53,51,0)];
          let dark5 = 4;
          let dycreatorA = String.fromCharCode(111,116,111,98,95,101,95,51,49,0);
         trophy0 = `${2 / (Math.max(3, dark5))}`;
         circle3 = [dycreatorA.length & 2];
         dark5 /= Math.max(circle3.length, 1);
         dycreatorA = `${dycreatorA.length}`;
      if (5 > (5 + screenU.length)) {
          let submitc = true;
          let gestureF = 4.0;
          let gradlewK = true;
          let calendar_ = String.fromCharCode(117,95,56,53,95,108,101,97,102,0);
         screenU = [calendar_.length | parseInt(`${gestureF}`)];
         submitc = (!submitc ? gradlewK : submitc);
         gestureF += (parseFloat(`${(gradlewK ? 2 : 3)}`));
         calendar_ = `${((gradlewK ? 5 : 2) + (submitc ? 4 : 4))}`;
      }
      while ((trophy0.length | 4) == 4) {
         trophy0 += `${screenU.length % 1}`;
         break;
      }
      while ((manifestw - parseFloat(`${trophy0.length}`)) < 2.83 && 4.94 < (2.83 - manifestw)) {
          let g_positionD = String.fromCharCode(105,95,49,54,95,115,105,109,112,108,101,0);
         trophy0 += `${trophy0.length ^ 1}`;
         g_positionD = `${g_positionD.length}`;
         break;
      }
      commentg += "1";
   }
   while ((3 << (Math.min(5, mathM.length))) <= 4 && (mathM.length / (Math.max(2, parseInt(`${clearY}`)))) <= 3) {
       let sendI = String.fromCharCode(105,95,49,56,95,115,116,97,116,105,115,116,105,99,0);
         sendI += `${sendI.length}`;
      for (let n = 0; n < 1; n++) {
         sendI += `${sendI.length}`;
      }
          let sansY: Array<any> = [718, 276, 960];
          let update_sU = 2;
         sendI = `${sendI.length | 3}`;
         sansY.push(update_sU);
         update_sU ^= update_sU;
      clearY *= foundB.length;
      break;
   }
       let mbnativer = false;
      for (let x = 0; x < 1; x++) {
         mbnativer = (mbnativer ? !mbnativer : mbnativer);
      }
          let hongkongt = String.fromCharCode(102,95,51,48,95,116,97,108,108,0);
          let invitek = false;
          let manifestH = 2.0;
         mbnativer = (10 == (hongkongt.length ^ (!mbnativer ? hongkongt.length : 10)));
         invitek = manifestH <= 83.49;
         manifestH -= ((invitek ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${manifestH}`)), 5)));
          let network5: Map<any, any> = new Map([[String.fromCharCode(99,102,115,116,114,101,97,109,95,57,95,51,49,0),477], [String.fromCharCode(99,97,115,101,115,95,105,95,53,57,0),664]]);
         mbnativer = network5.size <= 89;
      fasta = new Map([[`${readF}`, commentg.length]]);
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
       let complete9: Array<any> = [String.fromCharCode(115,95,55,53,95,115,99,114,101,97,109,0), String.fromCharCode(98,117,102,102,101,114,115,95,116,95,50,55,0), String.fromCharCode(121,95,54,55,95,116,97,103,115,0)];
    let minivodQ = String.fromCharCode(114,103,116,99,95,112,95,49,0);
    let loading4 = String.fromCharCode(102,95,50,53,95,108,111,110,103,101,114,0);
    let moviesq: Array<any> = [String.fromCharCode(102,117,114,116,104,101,114,95,98,95,55,53,0), String.fromCharCode(98,105,110,107,95,115,95,50,53,0)];
    let modelsO = false;
    let cnewinterstitialr = String.fromCharCode(121,95,53,54,95,105,110,116,101,114,114,117,112,116,105,111,110,0);
    let storeg = true;
    let bridges: Array<any> = [898, 176, 798];
    let memberC = String.fromCharCode(115,112,97,110,115,95,97,95,49,50,0);
    let tooltipsf = String.fromCharCode(97,95,56,52,95,108,105,98,119,101,98,112,101,110,99,0);
    let sidex = String.fromCharCode(101,110,116,114,121,112,111,105,110,116,95,106,95,54,53,0);
    let schedulev = String.fromCharCode(115,116,97,114,116,99,111,100,101,95,108,95,57,52,0);
    let phoneV = String.fromCharCode(119,95,55,49,95,115,117,98,116,114,97,99,116,0);
    let orientationV: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,109,98,117,108,97,95,57,95,52,50,0),157], [String.fromCharCode(100,95,49,52,95,114,101,99,111,114,100,97,98,108,101,0),111]]);
    let collectionX = 5;
   while ((bridges.length >> (Math.min(3, complete9.length))) < 3) {
      complete9 = [(1 | (modelsO ? 3 : 4))];
      break;
   }
   let singleG = complete9.length >= 6655871;
   do {
       let v_playera = String.fromCharCode(98,108,117,114,95,49,95,51,48,0);
       let schedulei = String.fromCharCode(107,95,56,51,95,102,119,100,0);
       let infoD = String.fromCharCode(113,95,56,51,95,99,111,111,114,100,105,110,97,116,111,114,115,0);
       let history5 = 3;
      while (1 == schedulei.length) {
          let predictiond: Map<any, any> = new Map([[String.fromCharCode(115,95,53,49,95,101,113,117,105,118,97,108,101,110,99,101,0),false ], [String.fromCharCode(109,95,53,48,95,99,108,97,115,104,0),false ]]);
          let bootsplashg = 2;
          let arrowu = 2;
          let controlG: Array<any> = [251, 944, 49];
          let modelsX = String.fromCharCode(100,95,50,55,95,116,105,109,101,103,109,0);
         v_playera += `${(schedulei == String.fromCharCode(51,0) ? history5 : schedulei.length)}`;
         predictiond = new Map([[`${controlG.length}`, controlG.length | 1]]);
         bootsplashg -= arrowu;
         modelsX += `${modelsX.length}`;
         break;
      }
      if (infoD.startsWith(v_playera)) {
         infoD += `${(String.fromCharCode(54,0) == infoD ? history5 : infoD.length)}`;
      }
      for (let w = 0; w < 3; w++) {
          let libcrashsdk3: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,117,110,99,104,95,54,95,49,53,0),false ], [String.fromCharCode(118,95,52,55,95,116,101,120,116,102,105,108,101,0),false ], [String.fromCharCode(98,95,54,50,95,118,99,101,110,99,0),true ]]);
          let righti = String.fromCharCode(101,114,118,101,114,95,104,95,49,52,0);
          let yellowJ = 1;
          let search5: Array<any> = [191, 463];
          let trashP: Array<any> = [786, 778];
         history5 *= 2;
         libcrashsdk3.set(`${yellowJ}`, yellowJ);
         righti += "3";
         search5 = [righti.length & yellowJ];
         trashP.push(righti.length * 2);
      }
      for (let p = 0; p < 2; p++) {
         v_playera = `${(infoD == String.fromCharCode(82,0) ? infoD.length : history5)}`;
      }
      while (!infoD.includes(v_playera)) {
         infoD = "2";
         break;
      }
         history5 ^= schedulei.length << (Math.min(1, Math.abs(history5)));
      for (let u = 0; u < 3; u++) {
         schedulei = `${infoD.length ^ v_playera.length}`;
      }
      while (v_playera.includes(`${schedulei.length}`)) {
         v_playera += `${1 >> (Math.min(4, schedulei.length))}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
          let sendK = String.fromCharCode(121,95,53,56,95,108,101,114,112,105,110,103,0);
          let carouseld: Array<any> = [String.fromCharCode(114,101,99,116,97,110,103,108,101,115,95,114,95,57,57,0), String.fromCharCode(102,95,49,54,95,112,105,120,108,101,116,0), String.fromCharCode(99,104,101,99,107,98,111,120,95,102,95,49,52,0)];
          let tickm = 0;
          let lineE = String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,95,53,95,56,54,0);
         history5 >>= Math.min(Math.abs(1), 3);
         sendK += `${(String.fromCharCode(84,0) == sendK ? carouseld.length : sendK.length)}`;
         carouseld.push(tickm & lineE.length);
         tickm /= Math.max(1, (String.fromCharCode(118,0) == sendK ? sendK.length : carouseld.length));
         lineE += `${carouseld.length / (Math.max(lineE.length, 9))}`;
      }
      let specw = String.fromCharCode(118,56,106,120,52,114,99,0) == infoD;
      do {
         infoD = `${2 | infoD.length}`;
         if (specw) {
            break;
         }
      } while (specw && (3 <= v_playera.length));
      let thailandh = infoD == String.fromCharCode(53,108,109,120,107,112,103,100,0);
      do {
         infoD += "2";
         if (thailandh) {
            break;
         }
      } while (thailandh && (3 <= (history5 + infoD.length)));
      let grayQ = 5971472 <= history5;
      do {
         history5 >>= Math.min(Math.abs(v_playera.length & schedulei.length), 1);
         if (grayQ) {
            break;
         }
      } while (((4 << (Math.min(1, infoD.length))) <= 5) && grayQ);
      complete9 = [v_playera.length << (Math.min(cnewinterstitialr.length, 4))];
      if (singleG) {
         break;
      }
   } while ((bridges.includes(complete9.length)) && singleG);
      cnewinterstitialr = `${memberC.length << (Math.min(Math.abs(2), 2))}`;
   for (let q = 0; q < 2; q++) {
      cnewinterstitialr = `${(minivodQ == String.fromCharCode(115,0) ? minivodQ.length : (storeg ? 2 : 4))}`;
   }
      memberC += `${memberC.length >> (Math.min(Math.abs(2), 2))}`;
   while (!cnewinterstitialr.includes(`${storeg}`)) {
       let mbjscommont = false;
       let activei = String.fromCharCode(109,95,50,53,95,99,111,110,116,105,110,101,110,116,0);
       let windH: Map<any, any> = new Map([[String.fromCharCode(101,95,50,56,95,105,115,119,114,105,116,101,97,98,108,101,0),731], [String.fromCharCode(114,95,49,51,95,105,114,97,110,100,0),766]]);
          let balll = 2.0;
          let single_ = true;
         windH = new Map([[`${windH.size}`, activei.length | 3]]);
         balll += (parseFloat(`${(single_ ? 1 : 5) - parseInt(`${balll}`)}`));
         single_ = !single_;
      while (activei.includes(`${mbjscommont}`)) {
         mbjscommont = String.fromCharCode(122,0) == activei;
         break;
      }
       let quest7 = 3.0;
      let with_xC = 6837036.0 >= quest7;
      do {
         quest7 += (parseFloat(`${String.fromCharCode(79,0) == activei ? activei.length : windH.size}`));
         if (with_xC) {
            break;
         }
      } while (with_xC && (5.77 < (quest7 - 2.26) || (parseInt(`${quest7}`) - windH.size) < 2));
         mbjscommont = !activei.startsWith(`${quest7}`);
         quest7 -= parseFloat(`${1}`);
         activei = `${parseInt(`${quest7}`) | 2}`;
       let buttonP = 5;
         buttonP *= 1 >> (Math.min(Math.abs(parseInt(`${quest7}`)), 2));
      cnewinterstitialr += `${2 | activei.length}`;
      break;
   }
   let common5 = bridges.length >= 8063284;
   do {
      bridges = [complete9.length & 2];
      if (common5) {
         break;
      }
   } while (common5 && ((complete9.length / (Math.max(4, bridges.length))) >= 2 || (complete9.length / 2) >= 5));
   while ((minivodQ.length << (Math.min(Math.abs(5), 4))) > 5 && 5 > (minivodQ.length << (Math.min(3, moviesq.length)))) {
      minivodQ = `${((storeg ? 4 : 5) / 2)}`;
      break;
   }
   if (1 <= tooltipsf.length) {
       let fastV: Array<any> = [619, 223];
       let blackv: Map<any, any> = new Map([[String.fromCharCode(99,95,56,56,95,109,101,109,111,114,121,98,117,102,102,101,114,0),670], [String.fromCharCode(106,95,50,95,97,117,116,104,0),75]]);
       let stringx = String.fromCharCode(101,112,105,99,95,122,95,57,57,0);
       let plusp = 0.0;
         blackv = new Map([[`${fastV.length}`, 2]]);
      while ((fastV.length * 1) <= 1) {
         blackv.set(`${fastV.length}`, blackv.size);
         break;
      }
         fastV = [1];
       let nextk: Array<any> = [858, 859, 514];
       let specg: Array<any> = [751, 105, 562];
         specg = [fastV.length];
      let dycreatorq = 4923972 >= nextk.length;
      do {
         nextk.push(stringx.length);
         if (dycreatorq) {
            break;
         }
      } while ((1 > nextk.length) && dycreatorq);
       let zhubox = 1.0;
         fastV.push(parseInt(`${zhubox}`));
      let placeholderU = 5901623 <= specg.length;
      do {
         specg = [blackv.size * fastV.length];
         if (placeholderU) {
            break;
         }
      } while (((plusp + 3.46) > 5.20 && 4 > (specg.length - 1)) && placeholderU);
      let annerz = 6022714 >= blackv.size;
      do {
          let resendC = 0;
          let videojsO = 0;
          let pageU: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,48,95,55,56,0),String.fromCharCode(109,95,50,55,95,100,101,99,111,109,112,111,115,101,105,0)], [String.fromCharCode(112,97,114,116,105,97,108,95,103,95,54,50,0),String.fromCharCode(98,115,111,108,117,116,101,95,117,95,51,48,0)]]);
          let readh: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,48,95,115,117,98,118,105,100,101,111,0),418], [String.fromCharCode(100,101,99,107,108,105,110,107,95,100,95,50,54,0),966]]);
          let rewardvideo5 = true;
         blackv = new Map([[`${blackv.size}`, (stringx == String.fromCharCode(49,0) ? blackv.size : stringx.length)]]);
         resendC <<= Math.min(Math.abs(pageU.size / 1), 2);
         videojsO /= Math.max(1, 3 >> (Math.min(1, Math.abs(resendC))));
         pageU = new Map([[`${pageU.size}`, pageU.size & videojsO]]);
         readh = new Map([[`${readh.size}`, 3]]);
         rewardvideo5 = !rewardvideo5;
         if (annerz) {
            break;
         }
      } while (annerz && ((blackv.size % (Math.max(stringx.length, 2))) >= 5 && (5 % (Math.max(6, blackv.size))) >= 1));
      if (!fastV.includes(zhubox)) {
         zhubox -= parseInt(`${zhubox}`);
      }
          let redirectJ = String.fromCharCode(103,114,111,119,95,120,95,57,55,0);
          let animationY = false;
          let philippinesj: Array<any> = [823, 155, 677];
         stringx += `${philippinesj.length ^ 1}`;
         redirectJ += `${redirectJ.length * 1}`;
         animationY = !redirectJ.startsWith(`${animationY}`);
         philippinesj.push(((animationY ? 5 : 4) << (Math.min(redirectJ.length, 1))));
      sidex = `${(String.fromCharCode(121,0) == tooltipsf ? (storeg ? 1 : 4) : tooltipsf.length)}`;
   }
      loading4 += `${1 << (Math.min(2, tooltipsf.length))}`;
   let vietnamj = 9286938 <= minivodQ.length;
   do {
      minivodQ += `${(String.fromCharCode(102,0) == loading4 ? loading4.length : complete9.length)}`;
      if (vietnamj) {
         break;
      }
   } while ((!minivodQ.endsWith(`${modelsO}`)) && vietnamj);
      cnewinterstitialr += "1";
      cnewinterstitialr += `${bridges.length | minivodQ.length}`;
   let tail2 = modelsO ? !modelsO : modelsO;
   do {
       let rewardq = 0.0;
       let modelsj = String.fromCharCode(103,95,50,48,95,105,110,115,116,101,97,100,0);
       let homeJ = String.fromCharCode(122,95,57,52,95,115,105,100,120,0);
       let confirmationL = 0.0;
       let bingB = String.fromCharCode(110,95,50,54,95,112,117,116,115,116,114,0);
      while (3.20 > (rewardq + confirmationL)) {
         confirmationL -= parseFloat(`${3}`);
         break;
      }
         confirmationL -= parseFloat(`${3 | bingB.length}`);
          let componentX: Map<any, any> = new Map([[String.fromCharCode(114,95,51,55,95,120,109,117,108,116,105,112,108,101,0),false ], [String.fromCharCode(104,95,55,51,95,112,114,97,112,97,114,101,0),true ]]);
          let weiboV = String.fromCharCode(109,97,121,95,120,95,54,56,0);
         bingB += `${modelsj.length}`;
         componentX.set(`${weiboV}`, componentX.size % 3);
         weiboV = "2";
      while (confirmationL <= 1.65) {
          let sportsY = true;
          let private_n1: Map<any, any> = new Map([[String.fromCharCode(116,95,57,54,95,116,114,105,103,103,101,114,101,100,0),589], [String.fromCharCode(102,95,51,95,97,97,99,100,101,99,0),498]]);
          let orangeX = String.fromCharCode(105,115,115,95,112,95,53,57,0);
          let router4 = 3.0;
          let volumec: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,114,107,95,56,95,57,54,0),false ], [String.fromCharCode(106,95,51,50,95,99,97,112,116,117,114,101,100,0),true ]]);
         confirmationL *= (parseFloat(`${homeJ == String.fromCharCode(100,0) ? homeJ.length : parseInt(`${router4}`)}`));
         sportsY = orangeX.endsWith(`${sportsY}`);
         private_n1.set(`${sportsY}`, ((sportsY ? 3 : 2) | volumec.size));
         orangeX = `${orangeX.length}`;
         router4 /= Math.max(3, parseFloat(`${private_n1.size & orangeX.length}`));
         volumec.set(`${sportsY}`, 3);
         break;
      }
      let iconc = modelsj.length >= 7700564;
      do {
          let bodand = 3.0;
          let expandZ: Map<any, any> = new Map([[String.fromCharCode(117,95,50,49,95,116,114,97,118,101,108,0),String.fromCharCode(120,95,51,54,95,112,105,120,99,116,120,0)], [String.fromCharCode(103,99,109,95,122,95,54,0),String.fromCharCode(113,117,97,110,116,105,122,101,100,95,122,95,57,55,0)], [String.fromCharCode(108,117,116,114,103,98,95,104,95,51,52,0),String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,98,95,57,55,0)]]);
          let updatesA = true;
          let humidityy = String.fromCharCode(111,95,51,57,95,104,105,103,104,112,111,114,116,0);
         modelsj = `${((updatesA ? 3 : 5) - parseInt(`${rewardq}`))}`;
         bodand *= parseFloat(`${3}`);
         expandZ.set(`${bodand}`, 3);
         updatesA = expandZ.size <= 82;
         humidityy = `${expandZ.size}`;
         if (iconc) {
            break;
         }
      } while ((homeJ.length == modelsj.length) && iconc);
      let profileE = 8096894 <= homeJ.length;
      do {
         homeJ += `${bingB.length}`;
         if (profileE) {
            break;
         }
      } while (profileE && (4 >= modelsj.length));
         modelsj += `${2 & modelsj.length}`;
         homeJ += `${parseInt(`${rewardq}`) * parseInt(`${confirmationL}`)}`;
         modelsj += `${modelsj.length}`;
         homeJ = "1";
         confirmationL *= parseFloat(`${2 * modelsj.length}`);
       let alert5 = 5.0;
          let description_on = String.fromCharCode(122,95,49,95,118,98,114,117,115,104,0);
         confirmationL /= Math.max(1, parseFloat(`${bingB.length & modelsj.length}`));
         description_on = "1";
         rewardq -= homeJ.length;
      while (5.74 == (2.28 - confirmationL) || 2.28 == (confirmationL - rewardq)) {
          let manifest4 = String.fromCharCode(118,95,53,48,95,116,114,105,97,110,103,117,108,97,114,0);
          let modelj = 5.0;
          let routere = String.fromCharCode(113,95,51,51,95,101,114,105,97,108,105,122,97,116,105,111,110,0);
          let holderT = String.fromCharCode(115,114,116,112,95,55,95,57,48,0);
         rewardq -= modelsj.length;
         manifest4 += `${parseInt(`${modelj}`)}`;
         modelj += parseInt(`${modelj}`) - 1;
         routere = `${(routere == String.fromCharCode(52,0) ? routere.length : parseInt(`${modelj}`))}`;
         holderT += `${manifest4.length | holderT.length}`;
         break;
      }
      modelsO = sidex.length >= 80;
      if (tail2) {
         break;
      }
   } while ((modelsO) && tail2);
   let crossf = moviesq.length >= 7229768;
   do {
      moviesq.push((2 ^ (storeg ? 4 : 3)));
      if (crossf) {
         break;
      }
   } while (crossf && (moviesq.length > 1));
      tooltipsf = `${(memberC == String.fromCharCode(117,0) ? tooltipsf.length : memberC.length)}`;
   while (1 == moviesq.length && 3 == (moviesq.length % 1)) {
      modelsO = complete9.includes(bridges[0]);
      break;
   }
   let preview1 = storeg ? !storeg : storeg;
   do {
      storeg = complete9.length == 88;
      if (preview1) {
         break;
      }
   } while (preview1 && (5 <= cnewinterstitialr.length));
   let m_title6 = storeg ? !storeg : storeg;
   do {
       let chartS = String.fromCharCode(105,100,99,105,110,95,121,95,54,52,0);
       let sharedD = 0.0;
       let resultG = 0.0;
       let mbsplashx: Array<any> = [516, 940];
         mbsplashx.push(3);
       let white4 = 3.0;
         sharedD *= parseFloat(`${mbsplashx.length}`);
      if (2 < (mbsplashx.length % (Math.max(5, 9))) && 4 < (5 % (Math.max(7, chartS.length)))) {
         chartS = `${chartS.length * 1}`;
      }
      for (let p = 0; p < 3; p++) {
         white4 /= Math.max(parseFloat(`${mbsplashx.length << (Math.min(2, Math.abs(parseInt(`${sharedD}`))))}`), 2);
      }
      while (parseFloat(`${chartS.length}`) <= sharedD) {
         chartS = `${parseInt(`${sharedD}`)}`;
         break;
      }
         chartS = "1";
         chartS += `${chartS.length}`;
         chartS += `${parseInt(`${white4}`) & parseInt(`${sharedD}`)}`;
         sharedD -= parseFloat(`${3}`);
      for (let s = 0; s < 3; s++) {
          let rewindl = 5.0;
         chartS = `${parseInt(`${white4}`)}`;
         rewindl += parseFloat(`${parseInt(`${rewindl}`)}`);
      }
      while (3 == mbsplashx.length) {
         white4 *= parseFloat(`${1}`);
         break;
      }
      storeg = modelsO;
      if (m_title6) {
         break;
      }
   } while (m_title6 && (!storeg));
   while (memberC != String.fromCharCode(97,0)) {
      sidex += `${(memberC == String.fromCharCode(110,0) ? complete9.length : memberC.length)}`;
      break;
   }
      bridges = [minivodQ.length + 1];
      memberC += "2";
   while ((1 << (Math.min(5, sidex.length))) < 4) {
      sidex += `${((modelsO ? 2 : 3) ^ 3)}`;
      break;
   }
      tooltipsf += `${((modelsO ? 4 : 1) >> (Math.min(Math.abs(3), 1)))}`;
   let yellowr = 9446416 >= tooltipsf.length;
   do {
      tooltipsf = "1";
      if (yellowr) {
         break;
      }
   } while (yellowr && (tooltipsf.length > 5 || storeg));
      cnewinterstitialr += "2";
   while (!storeg || 3 > minivodQ.length) {
      minivodQ += `${bridges.length << (Math.min(3, moviesq.length))}`;
      break;
   }
   if ((complete9.length / 2) == 4 && (complete9.length / 2) == 2) {
      loading4 = `${tooltipsf.length}`;
   }
      memberC = `${(sidex == String.fromCharCode(52,0) ? sidex.length : (storeg ? 1 : 1))}`;
   let reactnativejsp = String.fromCharCode(122,103,54,106,114,101,51,51,55,0) == memberC;
   do {
      memberC += `${complete9.length}`;
      if (reactnativejsp) {
         break;
      }
   } while ((cnewinterstitialr != memberC) && reactnativejsp);
       let turn6 = 2.0;
         turn6 /= Math.max(parseInt(`${turn6}`) + 1, 2);
          let membershipm = String.fromCharCode(119,95,54,53,95,113,117,111,116,101,100,0);
         turn6 *= parseInt(`${turn6}`) - membershipm.length;
      for (let o = 0; o < 2; o++) {
          let tickj = String.fromCharCode(100,105,115,112,115,97,98,108,101,95,112,95,49,0);
         turn6 *= 3;
         tickj += "2";
      }
      memberC = `${1 | tooltipsf.length}`;
      cnewinterstitialr += `${bridges.length}`;
   while (!cnewinterstitialr.startsWith(`${sidex.length}`)) {
      cnewinterstitialr = `${moviesq.length}`;
      break;
   }
       let backC = String.fromCharCode(120,95,50,54,95,114,116,112,114,101,99,101,105,118,101,114,0);
       let mbridge1 = 1.0;
       let cornerx = true;
      let circleK = cornerx ? !cornerx : cornerx;
      do {
          let c_unlock_: Array<any> = [12, 67, 306];
          let anytimex: Array<any> = [975, 480];
          let componentD = String.fromCharCode(113,95,55,50,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0);
         cornerx = anytimex.includes(mbridge1);
         c_unlock_ = [c_unlock_.length];
         anytimex.push(3 * componentD.length);
         componentD += `${componentD.length & 3}`;
         if (circleK) {
            break;
         }
      } while (circleK && (5.12 == (2.35 + mbridge1)));
         backC = `${(1 * (cornerx ? 3 : 2))}`;
      for (let q = 0; q < 2; q++) {
         backC = `${parseInt(`${mbridge1}`) + 1}`;
      }
      if (backC.length == 2) {
          let formr: Map<any, any> = new Map([[String.fromCharCode(117,95,53,52,0),false ], [String.fromCharCode(100,95,54,48,95,114,101,103,101,116,0),true ]]);
          let analyticsV = 5.0;
          let slidere = String.fromCharCode(111,114,100,101,114,95,110,95,52,52,0);
          let grayq = 4.0;
         backC += `${1 & slidere.length}`;
         formr = new Map([[`${analyticsV}`, 2]]);
         analyticsV -= parseFloat(`${parseInt(`${grayq}`) << (Math.min(Math.abs(formr.size), 2))}`);
         slidere = `${parseInt(`${analyticsV}`) & parseInt(`${grayq}`)}`;
      }
       let entry5 = String.fromCharCode(112,95,56,50,95,102,97,107,101,0);
       let colorsz = String.fromCharCode(106,95,51,95,118,97,108,105,100,97,116,111,114,0);
      let borderlessh = String.fromCharCode(48,102,112,122,115,54,115,0) == colorsz;
      do {
         colorsz = "3";
         if (borderlessh) {
            break;
         }
      } while ((entry5 != String.fromCharCode(84,0) || colorsz == String.fromCharCode(90,0)) && borderlessh);
          let default_6G = 3.0;
          let footballu = String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,95,51,95,51,0);
         cornerx = (parseInt(`${default_6G}`) * colorsz.length) <= 85;
         default_6G += (parseFloat(`${footballu == String.fromCharCode(122,0) ? footballu.length : footballu.length}`));
      let giftF = cornerx ? !cornerx : cornerx;
      do {
          let liveS: Map<any, any> = new Map([[String.fromCharCode(101,100,105,97,95,114,95,49,51,0),610], [String.fromCharCode(115,116,105,114,110,103,95,56,95,51,53,0),641], [String.fromCharCode(115,111,114,116,95,50,95,56,0),384]]);
          let datar = String.fromCharCode(99,104,112,108,95,122,95,57,56,0);
          let mailR = String.fromCharCode(117,95,51,53,95,101,110,116,114,111,112,121,0);
         cornerx = String.fromCharCode(83,0) == mailR;
         liveS.set(datar, datar.length);
         mailR += `${liveS.size}`;
         if (giftF) {
            break;
         }
      } while (giftF && (2.79 > (2.13 - mbridge1)));
          let sheetJ: Array<any> = [String.fromCharCode(110,101,116,119,111,114,107,115,95,121,95,57,55,0), String.fromCharCode(97,108,112,110,95,56,95,51,49,0)];
         colorsz += "3";
         sheetJ.push(sheetJ.length ^ 1);
      modelsO = 81 > bridges.length;
      schedulev = `${((storeg ? 4 : 1))}`;
      loading4 += `${((modelsO ? 1 : 3) & moviesq.length)}`;
   if (minivodQ.length >= tooltipsf.length) {
      minivodQ += `${1 * tooltipsf.length}`;
   }
   if (4 > moviesq.length) {
       let data1: Array<any> = [320, 497, 890];
       let moreL = String.fromCharCode(119,97,110,116,115,95,116,95,55,53,0);
         data1 = [1];
         data1.push(data1.length);
          let controlsL = 4;
          let gpayc = true;
          let userw = false;
         data1 = [((gpayc ? 4 : 2) / 1)];
         controlsL |= controlsL;
         gpayc = 40 > controlsL;
         moreL = `${data1.length}`;
         data1 = [moreL.length];
         moreL += "2";
      sidex += "1";
   }
   while (memberC.length == 4) {
       let foundl = 3.0;
       let internetd = String.fromCharCode(102,95,51,49,95,99,109,100,117,116,105,108,115,0);
       let package_848 = 3.0;
       let clockI = false;
          let mbbidv = String.fromCharCode(121,117,118,112,108,95,120,95,57,49,0);
         clockI = 92.58 < package_848;
         mbbidv = "1";
         package_848 -= parseFloat(`${internetd.length ^ 3}`);
         package_848 -= (parseFloat(`${parseInt(`${package_848}`) * (clockI ? 4 : 2)}`));
       let googleq: Map<any, any> = new Map([[String.fromCharCode(104,97,100,111,119,115,95,54,95,52,50,0),756], [String.fromCharCode(114,95,50,51,95,117,110,122,105,112,0),184]]);
          let referrerl = false;
          let screeno = false;
         package_848 -= parseFloat(`${parseInt(`${foundl}`)}`);
         referrerl = screeno;
      if (2 == (4 << (Math.min(3, internetd.length)))) {
         internetd += `${(internetd == String.fromCharCode(83,0) ? googleq.size : internetd.length)}`;
      }
          let icone = String.fromCharCode(97,108,108,114,103,98,95,121,95,56,52,0);
          let default_mw1 = 3;
          let greys: Map<any, any> = new Map([[String.fromCharCode(102,95,53,54,95,98,101,116,119,101,101,110,0),259], [String.fromCharCode(101,110,117,109,101,114,97,116,101,100,95,105,95,52,53,0),192]]);
         foundl += parseFloat(`${1 | default_mw1}`);
         icone += `${icone.length / (Math.max(4, greys.size))}`;
         default_mw1 /= Math.max(2, greys.size);
       let spinnerD = 0.0;
      if (package_848 >= 2.40 && (2.40 + package_848) >= 4.56) {
          let acceptedL: Array<any> = [768, 929];
          let dycreatoru = String.fromCharCode(112,101,101,114,95,54,95,49,54,0);
          let redirect9 = String.fromCharCode(105,95,57,55,95,99,97,118,115,0);
         clockI = internetd.length >= acceptedL.length;
         acceptedL.push((String.fromCharCode(48,0) == redirect9 ? dycreatoru.length : redirect9.length));
         dycreatoru += `${redirect9.length}`;
      }
      while ((2 | googleq.size) > 3 && (spinnerD - 3.10) > 2.94) {
          let philippinesA = String.fromCharCode(115,95,52,54,95,98,97,99,107,103,114,111,117,110,100,115,0);
          let groupy = 2.0;
          let memberi = String.fromCharCode(97,108,112,104,97,98,101,116,115,95,57,95,50,52,0);
         spinnerD /= Math.max(2, 3);
         philippinesA = `${(String.fromCharCode(113,0) == philippinesA ? parseInt(`${groupy}`) : philippinesA.length)}`;
         groupy *= (parseFloat(`${String.fromCharCode(68,0) == philippinesA ? parseInt(`${groupy}`) : philippinesA.length}`));
         memberi += "1";
         break;
      }
      if (2 == googleq.size) {
          let roomf = String.fromCharCode(119,97,114,110,105,110,103,115,95,107,95,51,56,0);
         internetd = `${((clockI ? 2 : 2) << (Math.min(Math.abs(parseInt(`${package_848}`)), 4)))}`;
         roomf += `${roomf.length}`;
      }
         internetd += `${googleq.size + parseInt(`${foundl}`)}`;
      storeg = 63 == moviesq.length;
      break;
   }
       let linkC = String.fromCharCode(115,101,97,108,95,53,95,50,50,0);
      for (let y = 0; y < 3; y++) {
          let specB = 4.0;
          let shareb = true;
          let nativeexj = 1.0;
          let editq = 4;
          let carouseln = String.fromCharCode(109,109,115,104,95,109,95,55,56,0);
         linkC += `${parseInt(`${nativeexj}`) >> (Math.min(1, Math.abs(parseInt(`${specB}`))))}`;
         specB += (parseFloat(`${(shareb ? 2 : 4)}`));
         shareb = !shareb && editq < 86;
         nativeexj += editq << (Math.min(carouseln.length, 2));
         carouseln = "2";
      }
          let successj = String.fromCharCode(109,97,116,99,104,101,100,95,51,95,54,55,0);
         linkC += `${(successj == String.fromCharCode(69,0) ? successj.length : linkC.length)}`;
      if (linkC != linkC) {
         linkC = `${linkC.length}`;
      }
      storeg = complete9.length == 94 || !modelsO;
      phoneV = `${(cnewinterstitialr == String.fromCharCode(98,0) ? tooltipsf.length : cnewinterstitialr.length)}`;
   while (storeg && loading4.length == 3) {
      storeg = 39 < complete9.length || String.fromCharCode(78,0) == phoneV;
      break;
   }
       let vignettec = 3.0;
         vignettec /= Math.max(4, parseFloat(`${parseInt(`${vignettec}`)}`));
          let default_tr = String.fromCharCode(114,101,115,117,108,116,95,109,95,55,57,0);
          let ticks: Map<any, any> = new Map([[String.fromCharCode(114,95,51,49,95,115,112,108,105,116,115,0),309], [String.fromCharCode(99,111,110,100,105,116,105,111,110,97,108,95,121,95,56,49,0),772]]);
          let reactnativejsM = 1.0;
         vignettec *= parseFloat(`${parseInt(`${vignettec}`)}`);
         default_tr += `${(default_tr == String.fromCharCode(74,0) ? default_tr.length : ticks.size)}`;
         ticks.set(`${reactnativejsM}`, ticks.size);
         reactnativejsM -= ticks.size;
         vignettec += parseFloat(`${2}`);
      loading4 = `${(parseInt(`${vignettec}`) * (storeg ? 1 : 2))}`;
 },
      onReadyForDisplay,
    }: ttSmall,
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
      "componentModity" | "none" | "fillDownloader"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<ttStatistics>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<ttGoal>('userReducer');
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
       let zoomB = String.fromCharCode(114,101,109,111,118,101,95,97,95,55,49,0);
    let favoriteb: Map<any, any> = new Map([[String.fromCharCode(106,95,56,49,95,99,111,114,101,105,109,97,103,101,0),269], [String.fromCharCode(112,95,55,53,95,111,118,101,114,108,97,121,0),21], [String.fromCharCode(100,95,55,50,95,105,110,116,101,103,114,97,108,0),248]]);
    let sourcez = String.fromCharCode(120,95,53,95,99,111,109,112,114,101,115,115,111,114,0);
    let sentryg = 1.0;
    let side6 = String.fromCharCode(105,95,53,54,95,97,115,99,101,110,116,0);
    let privacyj = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,114,95,50,54,0);
    let middlem = String.fromCharCode(122,95,50,51,95,105,116,97,108,105,99,0);
    let otherk = true;
       let searchR = String.fromCharCode(105,116,101,114,97,116,105,111,110,95,116,95,55,50,0);
      while (searchR != String.fromCharCode(113,0)) {
         searchR = `${searchR.length}`;
         break;
      }
         searchR += `${searchR.length}`;
      let halfd = 5643742 <= searchR.length;
      do {
         searchR += `${searchR.length}`;
         if (halfd) {
            break;
         }
      } while ((1 == searchR.length) && halfd);
      sourcez += `${parseInt(`${sentryg}`)}`;
       let referrer2 = String.fromCharCode(102,97,100,101,100,95,112,95,52,50,0);
       let appsx = String.fromCharCode(105,95,54,56,95,105,108,108,117,109,105,110,97,116,105,111,110,0);
      if (referrer2.length > appsx.length) {
         referrer2 = `${(referrer2 == String.fromCharCode(72,0) ? referrer2.length : appsx.length)}`;
      }
          let regeng7 = false;
         referrer2 = `${referrer2.length % (Math.max(appsx.length, 10))}`;
         regeng7 = !regeng7;
      for (let h = 0; h < 3; h++) {
         referrer2 = `${referrer2.length / 2}`;
      }
         appsx += `${appsx.length}`;
       let t_positiono = 5;
          let list1 = String.fromCharCode(99,102,116,98,115,117,98,95,56,95,50,48,0);
         appsx = `${referrer2.length - 3}`;
         list1 += `${list1.length ^ 3}`;
      side6 = `${3 | middlem.length}`;
      sentryg += 3;
      sourcez = `${parseInt(`${sentryg}`)}`;

      if (onBack !== undefined) {

   if (sourcez != String.fromCharCode(104,0) || side6 == String.fromCharCode(89,0)) {
       let combinedD = 3.0;
       let flipper_: Array<any> = [476, 40, 899];
       let yingK = 1.0;
         flipper_.push(parseInt(`${yingK}`) / (Math.max(8, parseInt(`${combinedD}`))));
         combinedD /= Math.max(1, parseFloat(`${parseInt(`${yingK}`) * flipper_.length}`));
       let reactnativejsX = 5.0;
       let zhengpianr = 4.0;
         zhengpianr /= Math.max(1, parseFloat(`${parseInt(`${yingK}`)}`));
       let volumeN: Map<any, any> = new Map([[String.fromCharCode(106,95,53,48,95,119,112,101,110,100,105,110,103,0),982], [String.fromCharCode(115,101,112,97,114,97,116,101,95,114,95,56,56,0),622]]);
      if (5.47 <= (reactnativejsX + 1)) {
         combinedD *= parseFloat(`${volumeN.size | 1}`);
      }
          let e_countD = 4.0;
         zhengpianr /= Math.max(1, parseFloat(`${volumeN.size | parseInt(`${zhengpianr}`)}`));
         e_countD += parseInt(`${e_countD}`);
      let brightnessl = reactnativejsX >= 9323198.0;
      do {
         reactnativejsX *= parseFloat(`${1}`);
         if (brightnessl) {
            break;
         }
      } while ((1.38 == (reactnativejsX - zhengpianr) || (reactnativejsX - zhengpianr) == 1.38) && brightnessl);
         flipper_.push(2);
      sourcez += `${3 + parseInt(`${sentryg}`)}`;
   }
      side6 += `${sourcez.length - parseInt(`${sentryg}`)}`;
   for (let p = 0; p < 3; p++) {
       let langa = String.fromCharCode(107,95,50,53,95,98,111,111,107,0);
       let cornert = 1.0;
       let moviesa = 2;
       let manifestI = false;
       let libcrashsdk0: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,101,116,115,95,49,95,52,56,0),815], [String.fromCharCode(104,95,57,57,95,116,108,115,0),974], [String.fromCharCode(119,120,109,109,116,101,115,116,95,55,95,49,56,0),604]]);
      if (manifestI && 4 < (3 + moviesa)) {
          let nalyticsd = String.fromCharCode(102,105,108,108,105,110,103,95,54,95,49,55,0);
          let playlistQ = false;
          let logov = 5.0;
         manifestI = String.fromCharCode(86,0) == nalyticsd;
         nalyticsd = `${(parseInt(`${logov}`) % (Math.max(7, (playlistQ ? 4 : 4))))}`;
         playlistQ = 12.5 > logov;
      }
      if (moviesa <= libcrashsdk0.size) {
         libcrashsdk0.set(`${moviesa}`, 1);
      }
      if (manifestI) {
          let incidentO: Array<any> = [579, 564, 522];
          let constantsm: Array<any> = [String.fromCharCode(101,95,56,49,95,101,120,112,114,0), String.fromCharCode(114,111,119,115,112,97,110,95,51,95,56,53,0), String.fromCharCode(116,105,116,108,101,115,95,56,95,53,51,0)];
          let signinupQ = 4.0;
         manifestI = libcrashsdk0.size <= 36;
         incidentO.push(incidentO.length);
         constantsm.push(parseInt(`${signinupQ}`) * incidentO.length);
         signinupQ += incidentO.length - constantsm.length;
      }
         manifestI = 42 >= moviesa || 42 >= libcrashsdk0.size;
       let dragk = 1.0;
      let contextT = libcrashsdk0.size <= 8571945;
      do {
         libcrashsdk0 = new Map([[`${moviesa}`, moviesa]]);
         if (contextT) {
            break;
         }
      } while (contextT && ((dragk / (Math.max(libcrashsdk0.size, 10))) < 5.95 || (dragk / 5.95) < 5.67));
      if (1 >= (moviesa << (Math.min(Math.abs(2), 5)))) {
          let floaterV = String.fromCharCode(116,104,111,117,115,97,110,100,115,95,117,95,56,53,0);
          let statistics3 = 1;
         manifestI = String.fromCharCode(54,0) == floaterV;
         floaterV += `${statistics3 % 3}`;
         statistics3 |= 3 - statistics3;
      }
         cornert /= Math.max(4, (parseFloat(`${(manifestI ? 1 : 2) % (Math.max(10, parseInt(`${cornert}`)))}`)));
          let feedbackt = true;
         dragk /= Math.max(2, parseInt(`${dragk}`) & libcrashsdk0.size);
         feedbackt = (!feedbackt ? !feedbackt : !feedbackt);
      if (2.45 <= (2.21 - dragk) && (parseInt(`${dragk}`) - moviesa) <= 5) {
         dragk /= Math.max(4, moviesa);
      }
      if (libcrashsdk0.size <= 2) {
         libcrashsdk0.set(`${manifestI}`, 1 / (Math.max(6, parseInt(`${cornert}`))));
      }
      while (moviesa < cornert) {
         moviesa &= 1;
         break;
      }
         dragk += libcrashsdk0.size * parseInt(`${dragk}`);
          let applicationT = false;
         cornert /= Math.max(4, parseFloat(`${langa.length}`));
         applicationT = !applicationT;
      while (langa.length >= dragk) {
         dragk += (langa == String.fromCharCode(119,0) ? langa.length : libcrashsdk0.size);
         break;
      }
      privacyj += `${zoomB.length << (Math.min(Math.abs(2), 4))}`;
   }
      sentryg /= Math.max(4, 3 * privacyj.length);
        onBack();

   for (let m = 0; m < 2; m++) {
       let contextU = 4;
       let tramini7: Array<any> = [742, 768];
       let configurek = 1;
       let philippinesB = 4;
       let modelc = String.fromCharCode(108,95,50,50,95,115,101,101,107,105,110,103,0);
         modelc = `${contextU}`;
          let tickL: Array<any> = [274, 131, 658];
          let hooks0: Array<any> = [973, 982, 671];
         philippinesB += 2;
         tickL.push(hooks0.length);
         hooks0.push(hooks0.length ^ 2);
      if (2 < (contextU << (Math.min(Math.abs(3), 1))) || 1 < (modelc.length << (Math.min(Math.abs(3), 3)))) {
         contextU %= Math.max(4, configurek);
      }
      if ((philippinesB & 2) <= 5 || (philippinesB & configurek) <= 2) {
          let goalV = String.fromCharCode(116,95,52,49,95,115,118,113,101,110,99,0);
         philippinesB /= Math.max(modelc.length / (Math.max(7, configurek)), 3);
         goalV += `${goalV.length - goalV.length}`;
      }
       let taiwanV: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,116,95,50,51,0),104], [String.fromCharCode(112,95,49,52,95,113,119,111,114,100,0),754]]);
       let sellJ: Map<any, any> = new Map([[String.fromCharCode(105,95,52,57,95,115,117,98,115,116,114,105,110,103,115,0),String.fromCharCode(112,114,101,99,105,115,101,95,107,95,51,0)], [String.fromCharCode(115,95,55,51,95,115,104,111,119,0),String.fromCharCode(118,95,57,57,95,108,117,109,105,110,97,110,99,101,0)], [String.fromCharCode(113,95,55,57,95,112,114,101,118,118,101,99,0),String.fromCharCode(100,105,102,102,105,110,103,95,116,95,56,50,0)]]);
      while ((philippinesB >> (Math.min(3, Math.abs(contextU)))) < 1 || (philippinesB >> (Math.min(4, Math.abs(contextU)))) < 1) {
         philippinesB /= Math.max(3, contextU);
         break;
      }
      let checkboxC = configurek >= 8993946;
      do {
         configurek <<= Math.min(Math.abs(philippinesB >> (Math.min(Math.abs(sellJ.size), 2))), 2);
         if (checkboxC) {
            break;
         }
      } while ((tramini7.length >= configurek) && checkboxC);
      for (let j = 0; j < 2; j++) {
          let material6: Map<any, any> = new Map([[String.fromCharCode(99,97,110,95,57,95,56,54,0),String.fromCharCode(97,115,105,110,107,95,50,95,55,56,0)], [String.fromCharCode(120,95,52,55,95,115,119,97,112,121,118,98,117,102,102,101,114,0),String.fromCharCode(98,97,99,107,112,116,114,95,117,95,53,50,0)], [String.fromCharCode(98,97,115,105,99,97,108,108,121,95,53,95,51,56,0),String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,95,98,95,52,57,0)]]);
          let storeE = 4;
         taiwanV.set(`${contextU}`, contextU % (Math.max(4, modelc.length)));
         material6.set(`${storeE}`, storeE << (Math.min(Math.abs(1), 4)));
      }
         configurek *= 3 * taiwanV.size;
          let membershipT = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,105,95,55,50,0);
          let dialogk = 5.0;
         taiwanV.set(modelc, (String.fromCharCode(73,0) == modelc ? tramini7.length : modelc.length));
         membershipT += `${parseInt(`${dialogk}`) - membershipT.length}`;
         dialogk /= Math.max(2, parseFloat(`${parseInt(`${dialogk}`)}`));
          let policyZ = 2;
          let loginh = String.fromCharCode(120,95,52,55,95,102,105,110,100,97,115,115,111,99,0);
          let dangern = 4.0;
         configurek /= Math.max(modelc.length & 2, 2);
         policyZ ^= (loginh == String.fromCharCode(108,0) ? parseInt(`${dangern}`) : loginh.length);
         dangern += 3;
      let catagoryy = philippinesB <= 9897238;
      do {
         philippinesB -= sellJ.size;
         if (catagoryy) {
            break;
         }
      } while (((philippinesB + 3) >= 3) && catagoryy);
       let reminderr: Map<any, any> = new Map([[String.fromCharCode(115,95,57,95,117,121,118,121,0),283], [String.fromCharCode(100,121,110,108,111,97,100,95,109,95,49,56,0),972]]);
      while (!Array.from(sellJ.values()).includes(contextU)) {
         contextU %= Math.max(tramini7.length & 2, 4);
         break;
      }
         sellJ = new Map([[`${reminderr.size}`, configurek % (Math.max(reminderr.size, 3))]]);
      zoomB += `${contextU | 1}`;
   }
   let middlef = String.fromCharCode(112,110,104,51,0) == sourcez;
   do {
       let editl = false;
       let edit3: Array<any> = [969, 768];
       let collectionH: Array<any> = [489, 693];
       let strings = false;
       let gray7 = 5;
       let blackJ = 2;
      for (let y = 0; y < 1; y++) {
         gray7 -= blackJ % (Math.max(9, gray7));
      }
         editl = 27 < gray7;
         editl = edit3.includes(gray7);
      while (!edit3.includes(blackJ)) {
         blackJ ^= ((strings ? 1 : 4) | blackJ);
         break;
      }
          let mappingm = 1.0;
          let areap = String.fromCharCode(114,101,116,117,114,110,115,95,115,95,54,48,0);
          let with_xR: Array<any> = [773, 769, 824];
         editl = with_xR.length >= 51 && areap.length >= 51;
         mappingm += parseFloat(`${3}`);
         areap = `${parseInt(`${mappingm}`) * 2}`;
      while ((2 | collectionH.length) > 5 || collectionH.length > 2) {
         collectionH.push(gray7);
         break;
      }
      let statisticsJ = collectionH.length >= 4933922;
      do {
         collectionH.push(3 * gray7);
         if (statisticsJ) {
            break;
         }
      } while (statisticsJ && (3 <= (1 * collectionH.length) || 4 <= (1 * collectionH.length)));
      let submitU = editl ? !editl : editl;
      do {
          let empty9 = 5.0;
          let footballF = String.fromCharCode(105,95,51,51,95,101,114,114,0);
          let eacth = true;
          let header7 = String.fromCharCode(100,114,97,119,108,105,110,101,95,112,95,53,0);
         editl = 31 <= header7.length;
         empty9 -= 1 ^ footballF.length;
         footballF = `${parseInt(`${empty9}`) / 1}`;
         eacth = empty9 < 13.46;
         header7 = `${((eacth ? 1 : 1) - footballF.length)}`;
         if (submitU) {
            break;
         }
      } while ((3 <= gray7) && submitU);
      if (!editl) {
         gray7 *= gray7;
      }
       let halfA: Map<any, any> = new Map([[String.fromCharCode(115,95,56,48,95,114,101,99,116,105,102,121,0),362], [String.fromCharCode(109,97,116,99,104,101,95,56,95,57,55,0),403], [String.fromCharCode(104,95,57,54,95,101,120,101,99,117,116,101,0),435]]);
      for (let k = 0; k < 3; k++) {
          let updates6: Map<any, any> = new Map([[String.fromCharCode(112,95,54,57,95,113,117,101,117,101,0),false ], [String.fromCharCode(119,95,54,95,102,97,114,109,101,0),true ]]);
          let viewsH = 5.0;
          let catagoryj = 5.0;
         collectionH = [2];
         updates6 = new Map([[`${updates6.size}`, parseInt(`${viewsH}`) % (Math.max(updates6.size, 5))]]);
         viewsH *= updates6.size & 2;
         catagoryj /= Math.max(3, parseFloat(`${1}`));
      }
      sourcez += `${sourcez.length % 1}`;
      if (middlef) {
         break;
      }
   } while ((!sourcez.startsWith(`${privacyj.length}`)) && middlef);
   let fastforwards = 8313857 >= side6.length;
   do {
      side6 = `${sourcez.length}`;
      if (fastforwards) {
         break;
      }
   } while ((3 > (side6.length * 5) || 5 > (side6.length + parseInt(`${sentryg}`))) && fastforwards);
      sourcez = "2";
        lockOrientation("PORTRAIT");

   while (4 > (zoomB.length / (Math.max(1, 7))) || 1 > (favoriteb.size / (Math.max(zoomB.length, 3)))) {
      favoriteb = new Map([[sourcez, sourcez.length]]);
      break;
   }
   let configC = zoomB.length <= 5781127;
   do {
       let relatedI = String.fromCharCode(105,95,51,55,95,114,105,110,100,101,120,0);
       let league5 = String.fromCharCode(111,95,49,48,48,95,102,117,110,99,0);
       let fieldW: Array<any> = [String.fromCharCode(105,95,54,53,95,105,110,112,117,116,116,101,109,0), String.fromCharCode(113,95,56,55,95,99,100,106,112,101,103,0), String.fromCharCode(112,101,114,105,111,100,105,99,97,108,108,121,95,106,95,49,50,0)];
       let macau4 = 2.0;
         relatedI = `${3 - league5.length}`;
         fieldW = [parseInt(`${macau4}`) / (Math.max(2, 8))];
      for (let e = 0; e < 2; e++) {
          let colors1 = String.fromCharCode(111,119,110,101,100,95,50,95,51,50,0);
          let m_lockE = String.fromCharCode(113,95,54,48,95,117,114,118,101,0);
          let t_count_ = 5;
          let playercommonV = String.fromCharCode(108,95,50,53,0);
         fieldW.push(league5.length + 3);
         colors1 += "1";
         m_lockE += `${t_count_ * 1}`;
         t_count_ ^= m_lockE.length;
         playercommonV += `${colors1.length + playercommonV.length}`;
      }
          let update_txS = String.fromCharCode(116,95,53,53,95,100,100,114,97,110,103,101,0);
         macau4 -= fieldW.length ^ update_txS.length;
      while (1.14 <= (macau4 - league5.length) || (parseInt(`${macau4}`) - league5.length) <= 1) {
          let albumt = 5.0;
          let cast4 = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,120,95,55,52,0);
          let streamingH = 4.0;
          let linkD = true;
          let fastE = 4.0;
         league5 += "3";
         albumt += cast4.length / 3;
         cast4 = `${parseInt(`${albumt}`) - cast4.length}`;
         streamingH /= Math.max(((linkD ? 2 : 4) / (Math.max(7, parseInt(`${fastE}`)))), 1);
         fastE += parseFloat(`${3 / (Math.max(1, parseInt(`${fastE}`)))}`);
         break;
      }
       let previewF = 3.0;
       let signinupP = 2.0;
         relatedI = `${3 & parseInt(`${previewF}`)}`;
       let project5: Map<any, any> = new Map([[String.fromCharCode(106,97,99,111,98,105,95,112,95,49,57,0),697], [String.fromCharCode(98,97,114,101,95,120,95,53,53,0),793]]);
      let form9 = 5875378.0 <= previewF;
      do {
         previewF *= parseFloat(`${league5.length}`);
         if (form9) {
            break;
         }
      } while (form9 && ((5 >> (Math.min(3, Math.abs(project5.size)))) == 3 && 2.93 == (5.36 + previewF)));
      let darkR = signinupP <= 9715101.0;
      do {
          let dialogo = 5.0;
         signinupP *= parseFloat(`${2 / (Math.max(4, parseInt(`${previewF}`)))}`);
         dialogo /= Math.max(parseInt(`${dialogo}`), 1);
         if (darkR) {
            break;
         }
      } while (darkR && (signinupP <= 2.46));
         fieldW = [parseInt(`${macau4}`)];
         project5 = new Map([[`${project5.size}`, 1]]);
      zoomB = `${parseInt(`${sentryg}`) ^ 3}`;
      if (configC) {
         break;
      }
   } while (configC && (sourcez != String.fromCharCode(86,0)));
       let shirtL = String.fromCharCode(109,95,55,57,95,97,117,116,111,114,101,118,101,114,115,101,115,0);
      let thailand6 = shirtL.length >= 7203008;
      do {
         shirtL += `${1 - shirtL.length}`;
         if (thailand6) {
            break;
         }
      } while ((shirtL.startsWith(shirtL)) && thailand6);
          let sportT = String.fromCharCode(99,97,110,110,111,116,95,111,95,49,48,0);
          let routerb = 2.0;
          let injurya = 3;
         shirtL = `${injurya}`;
         sportT += `${parseInt(`${routerb}`) / (Math.max(sportT.length, 1))}`;
         routerb -= parseFloat(`${parseInt(`${routerb}`) ^ 3}`);
         injurya -= sportT.length;
      if (shirtL != shirtL) {
          let debugV = String.fromCharCode(118,95,49,54,95,111,112,101,114,97,116,111,114,0);
          let reactU: Array<any> = [574, 46];
         shirtL += `${shirtL.length}`;
         debugV = `${reactU.length / 3}`;
         reactU = [reactU.length / (Math.max(1, debugV.length))];
      }
      privacyj += `${shirtL.length % 2}`;
   let lessQ = sourcez == String.fromCharCode(113,52,111,48,0);
   do {
      sourcez = `${parseInt(`${sentryg}`)}`;
      if (lessQ) {
         break;
      }
   } while (lessQ && (side6 == sourcez));
        setIsFullScreen(false);
      } else {

   while (3 == (sourcez.length - parseInt(`${sentryg}`))) {
      sentryg /= Math.max(4, (sourcez == String.fromCharCode(56,0) ? sourcez.length : zoomB.length));
      break;
   }
   let dragkl = 6043833 >= middlem.length;
   do {
      middlem = `${sourcez.length}`;
      if (dragkl) {
         break;
      }
   } while ((zoomB == String.fromCharCode(73,0)) && dragkl);
   if (middlem.length < 1 || !otherk) {
      otherk = (sentryg / (Math.max(5, sourcez.length))) >= 66.95;
   }
   let sansZ = String.fromCharCode(121,116,107,116,0) == side6;
   do {
      side6 += `${middlem.length % 2}`;
      if (sansZ) {
         break;
      }
   } while ((sourcez.length < side6.length) && sansZ);
        

      otherk = favoriteb.size >= 94;
      favoriteb = new Map([[privacyj, 2]]);
      favoriteb = new Map([[sourcez, sourcez.length / (Math.max(3, 7))]]);
   for (let x = 0; x < 2; x++) {
      favoriteb = new Map([[middlem, parseInt(`${sentryg}`)]]);
   }
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
       let filed9: Array<any> = [950, 619, 534];
    let clears = String.fromCharCode(105,95,53,48,95,105,110,116,101,114,97,99,116,0);
    let umengY: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,114,97,119,110,95,51,95,49,49,0),false ], [String.fromCharCode(102,95,52,57,95,105,109,112,114,105,110,116,0),false ]]);
    let playercommonn = true;
    let vertical0 = true;
    let slideri: Array<any> = [759, 122];
    let projectN: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,101,114,95,48,95,56,52,0),String.fromCharCode(99,111,110,116,97,105,110,115,95,103,95,53,49,0)], [String.fromCharCode(101,121,99,104,97,105,110,95,52,95,55,57,0),String.fromCharCode(106,95,52,50,95,101,120,99,108,117,115,105,111,110,115,0)], [String.fromCharCode(112,97,108,109,95,104,95,54,55,0),String.fromCharCode(112,101,114,105,111,100,95,110,95,50,57,0)]]);
    let bridgeK = String.fromCharCode(105,109,112,111,114,116,101,114,115,95,107,95,51,55,0);
    let private_okp = String.fromCharCode(100,101,99,111,114,114,95,103,95,55,0);
    let nterstitialU = String.fromCharCode(113,95,49,57,95,115,117,109,100,105,102,102,0);
    let delegate_10 = 4.0;
      projectN = new Map([[`${playercommonn}`, bridgeK.length]]);
       let infoW: Array<any> = [563, 9, 19];
       let matchQ = String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,54,95,55,51,0);
      if (2 <= infoW.length) {
         infoW.push(2 << (Math.min(3, matchQ.length)));
      }
         infoW.push((String.fromCharCode(106,0) == matchQ ? infoW.length : matchQ.length));
          let contextN: Map<any, any> = new Map([[String.fromCharCode(122,105,112,102,95,99,95,54,52,0),String.fromCharCode(108,95,52,55,95,115,111,117,110,100,101,120,0)], [String.fromCharCode(115,95,50,51,95,97,98,111,117,116,115,0),String.fromCharCode(98,108,111,99,107,103,114,111,117,112,95,53,95,52,53,0)]]);
         matchQ += `${matchQ.length | 1}`;
         contextN = new Map([[`${contextN.size}`, contextN.size - 3]]);
         infoW.push(infoW.length);
         matchQ = `${infoW.length ^ matchQ.length}`;
      let agreementG = matchQ.length <= 7907825;
      do {
          let commonK = String.fromCharCode(117,110,109,97,114,115,104,97,108,95,117,95,51,57,0);
         matchQ += `${infoW.length / 3}`;
         commonK = `${commonK.length}`;
         if (agreementG) {
            break;
         }
      } while (agreementG && (!matchQ.endsWith(`${infoW.length}`)));
      clears = "1";
      clears = `${((playercommonn ? 5 : 3) % 3)}`;
   for (let l = 0; l < 1; l++) {
      umengY.set(`${vertical0}`, (3 | (vertical0 ? 5 : 2)));
   }
   let langkeyc = 7870069 <= filed9.length;
   do {
       let yingi = String.fromCharCode(100,95,53,57,95,104,113,112,101,108,0);
       let halfF = 3;
      while (3 >= (halfF >> (Math.min(Math.abs(2), 1))) || (2 >> (Math.min(2, yingi.length))) >= 1) {
         halfF += 2;
         break;
      }
       let tnewinterstitialA = String.fromCharCode(97,95,56,53,95,115,105,122,101,108,101,115,115,0);
      for (let u = 0; u < 3; u++) {
          let minir = String.fromCharCode(99,117,109,101,95,97,95,55,55,0);
          let area2 = String.fromCharCode(110,95,49,57,95,108,101,97,118,101,0);
          let historyR: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,115,116,97,114,116,0),39], [String.fromCharCode(107,95,56,50,95,118,97,114,0),554], [String.fromCharCode(122,95,54,54,95,115,121,110,99,104,114,111,110,105,122,101,0),77]]);
          let memberZ: Array<any> = [String.fromCharCode(116,95,52,56,95,114,111,103,114,97,109,0), String.fromCharCode(112,95,56,50,95,117,110,105,110,115,116,97,108,108,0), String.fromCharCode(111,114,100,101,114,116,121,112,101,95,102,95,52,51,0)];
          let blacklist4 = 5;
         yingi = `${area2.length}`;
         minir = `${(minir == String.fromCharCode(53,0) ? minir.length : blacklist4)}`;
         area2 += "3 * blacklist4";
         historyR.set(`${blacklist4}`, blacklist4 % (Math.max(memberZ.length, 6)));
         memberZ = [2 - memberZ.length];
      }
         halfF <<= Math.min(2, Math.abs(tnewinterstitialA.length & halfF));
          let diceR: Array<any> = [195, 206, 678];
          let changen = false;
         halfF ^= tnewinterstitialA.length ^ halfF;
         diceR.push(diceR.length);
         changen = !changen;
       let security0 = 3;
       let volume7 = 4;
      filed9.push(umengY.size / 3);
      if (langkeyc) {
         break;
      }
   } while (langkeyc && (filed9.length >= 1));
   let untickY = vertical0 ? !vertical0 : vertical0;
   do {
       let ajaxg = String.fromCharCode(122,95,51,54,95,99,111,109,109,101,110,116,115,0);
      let short_zkT = 9130783 <= ajaxg.length;
      do {
         ajaxg = `${ajaxg.length / 1}`;
         if (short_zkT) {
            break;
         }
      } while ((ajaxg.length <= ajaxg.length) && short_zkT);
      let leagueo = 8797742 <= ajaxg.length;
      do {
          let fasti = String.fromCharCode(112,105,99,116,111,114,95,54,95,55,48,0);
          let collectionc = 0.0;
          let routery = String.fromCharCode(99,95,51,50,95,109,115,118,115,100,101,112,101,110,100,0);
         ajaxg += `${ajaxg.length}`;
         fasti = `${fasti.length}`;
         collectionc *= routery.length - 2;
         routery += `${(fasti == String.fromCharCode(80,0) ? parseInt(`${collectionc}`) : fasti.length)}`;
         if (leagueo) {
            break;
         }
      } while ((ajaxg != ajaxg) && leagueo);
         ajaxg = `${ajaxg.length}`;
      vertical0 = slideri.includes(vertical0);
      if (untickY) {
         break;
      }
   } while (untickY && (clears.startsWith(`${vertical0}`)));
       let close_: Array<any> = [603, 775, 359];
         close_.push(3 / (Math.max(4, close_.length)));
      if (1 <= (close_.length >> (Math.min(Math.abs(3), 2)))) {
         close_ = [2 >> (Math.min(2, close_.length))];
      }
         close_ = [close_.length % 1];
      vertical0 = ((slideri.length * (vertical0 ? 76 : slideri.length)) < 76);
   while (clears.includes(bridgeK)) {
      bridgeK += `${((vertical0 ? 3 : 1) - slideri.length)}`;
      break;
   }
      umengY.set(bridgeK, 3);
      umengY = new Map([[`${umengY.size}`, ((playercommonn ? 4 : 5) & umengY.size)]]);
      vertical0 = playercommonn;
   if (nterstitialU.includes(`${private_okp.length}`)) {
      private_okp = `${(String.fromCharCode(95,0) == private_okp ? (playercommonn ? 3 : 5) : private_okp.length)}`;
   }
      bridgeK += `${private_okp.length}`;

        console.log("err save vod!");

      filed9 = [slideri.length];
       let flipperQ = String.fromCharCode(105,109,109,117,116,97,98,108,101,95,50,95,49,0);
       let emojiy = String.fromCharCode(112,97,114,97,109,99,104,97,110,103,101,95,54,95,50,52,0);
       let cast8: Array<any> = [String.fromCharCode(99,95,55,54,95,97,119,97,105,116,0), String.fromCharCode(112,114,111,98,101,114,95,118,95,53,54,0)];
      for (let z = 0; z < 2; z++) {
          let membershipx = String.fromCharCode(99,95,48,95,106,111,117,114,110,97,108,0);
          let with_4rU = 3.0;
          let verticalI = String.fromCharCode(117,95,57,55,95,99,97,116,101,103,111,114,105,101,115,0);
          let downloads: Array<any> = [416, 294];
          let condensed4 = 5.0;
         cast8 = [emojiy.length];
         membershipx += `${downloads.length}`;
         with_4rU /= Math.max(2, (membershipx == String.fromCharCode(77,0) ? membershipx.length : verticalI.length));
         verticalI += `${parseInt(`${with_4rU}`) * 2}`;
         downloads.push(parseInt(`${condensed4}`));
         condensed4 -= 2 * downloads.length;
      }
         emojiy = `${emojiy.length + flipperQ.length}`;
       let thumbnail1 = true;
         cast8 = [3 - cast8.length];
         thumbnail1 = flipperQ.length > 27;
      for (let j = 0; j < 1; j++) {
          let configuren = 4;
          let internetF = String.fromCharCode(121,95,50,57,95,115,99,97,110,0);
          let fastp = String.fromCharCode(117,110,98,105,97,115,95,111,95,49,49,0);
         thumbnail1 = configuren > emojiy.length;
         configuren <<= Math.min(1, Math.abs((String.fromCharCode(81,0) == fastp ? fastp.length : internetF.length)));
         internetF += "3";
      }
         cast8.push(cast8.length);
       let albumH: Array<any> = [961, 68, 325];
       let infoS: Array<any> = [641, 307, 403];
      while (3 <= cast8.length || (cast8.length >> (Math.min(Math.abs(3), 1))) <= 3) {
          let album_ = 2;
          let save5: Array<any> = [670, 299, 84];
         thumbnail1 = cast8.includes(thumbnail1);
         album_ |= 1;
         save5 = [album_ & 1];
         break;
      }
      clears = "2";
   if ((5 + projectN.size) == 3) {
      bridgeK = `${clears.length >> (Math.min(Math.abs(2), 1))}`;
   }
      bridgeK = `${filed9.length % (Math.max(3, clears.length))}`;
   if (5 <= (filed9.length >> (Math.min(nterstitialU.length, 1)))) {
      nterstitialU += `${bridgeK.length}`;
   }
       let feedbackt = true;
       let descD = false;
      let paginationF = feedbackt ? !feedbackt : feedbackt;
      do {
          let t_managerK = String.fromCharCode(97,98,111,114,116,95,121,95,55,51,0);
          let uploadV = 5;
          let pressured = 5;
         feedbackt = t_managerK.length < 74 && feedbackt;
         t_managerK += `${pressured + 3}`;
         uploadV ^= 1 * uploadV;
         pressured ^= pressured / 1;
         if (paginationF) {
            break;
         }
      } while (paginationF && (!feedbackt));
      let interstitial9 = feedbackt ? !feedbackt : feedbackt;
      do {
         feedbackt = (descD ? !feedbackt : !descD);
         if (interstitial9) {
            break;
         }
      } while (interstitial9 && (!descD));
         feedbackt = !feedbackt && !descD;
         descD = feedbackt;
      let ajaxZ = descD ? !descD : descD;
      do {
          let modalb = 0.0;
          let submite = 4.0;
          let corer = 3.0;
          let indicatorb = String.fromCharCode(109,117,116,101,100,95,100,95,57,55,0);
          let calendarX = String.fromCharCode(109,111,110,105,116,111,114,95,54,95,57,55,0);
         descD = !descD;
         modalb += parseFloat(`${indicatorb.length * parseInt(`${submite}`)}`);
         submite -= parseFloat(`${parseInt(`${modalb}`)}`);
         corer *= calendarX.length % (Math.max(5, parseInt(`${submite}`)));
         indicatorb += `${calendarX.length / (Math.max(10, parseInt(`${corer}`)))}`;
         if (ajaxZ) {
            break;
         }
      } while ((!feedbackt) && ajaxZ);
          let incident8 = 3.0;
          let paused = false;
         descD = !paused;
         incident8 /= Math.max(1, 1);
      umengY = new Map([[`${slideri.length}`, ((playercommonn ? 1 : 2) ^ 1)]]);
       let network3: Array<any> = [806, 103, 548];
      if ((network3.length + 5) <= 2 || 2 <= (network3.length + 5)) {
         network3.push(network3.length << (Math.min(Math.abs(1), 1)));
      }
      let long_guy = network3.length >= 5651635;
      do {
         network3 = [network3.length];
         if (long_guy) {
            break;
         }
      } while (long_guy && (network3.includes(network3.length)));
      if ((2 % (Math.max(6, network3.length))) == 5 || (network3.length % (Math.max(2, network3.length))) == 2) {
         network3 = [network3.length ^ network3.length];
      }
      nterstitialU += `${((playercommonn ? 5 : 2) % (Math.max(2, projectN.size)))}`;
   while (4 <= bridgeK.length) {
      bridgeK = `${filed9.length}`;
      break;
   }
      projectN.set(bridgeK, (bridgeK == String.fromCharCode(119,0) ? bridgeK.length : slideri.length));
   if (private_okp.endsWith(`${delegate_10}`)) {
       let stylec: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,112,104,111,116,111,0),String.fromCharCode(120,95,51,95,114,101,115,97,109,112,108,101,114,0)], [String.fromCharCode(112,95,51,57,95,118,97,114,105,97,110,116,0),String.fromCharCode(107,95,49,57,95,120,109,108,115,0)]]);
       let sortP = 4.0;
       let m_title6 = String.fromCharCode(104,95,49,51,95,109,111,100,101,109,0);
          let indicatorO: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,102,95,56,53,0),223], [String.fromCharCode(107,95,57,52,95,100,111,117,98,108,101,115,115,116,114,0),604], [String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,97,95,56,48,0),28]]);
          let combined8 = String.fromCharCode(105,100,120,95,54,95,56,49,0);
         stylec.set(m_title6, 3 - combined8.length);
         indicatorO = new Map([[`${indicatorO.size}`, indicatorO.size ^ 3]]);
         combined8 = `${indicatorO.size}`;
      for (let g = 0; g < 1; g++) {
         stylec = new Map([[`${stylec.size}`, parseInt(`${sortP}`)]]);
      }
      if (!m_title6.endsWith(`${stylec.size}`)) {
         stylec.set(m_title6, (String.fromCharCode(109,0) == m_title6 ? m_title6.length : parseInt(`${sortP}`)));
      }
      for (let e = 0; e < 2; e++) {
          let appleb = String.fromCharCode(117,116,102,116,111,95,108,95,53,53,0);
         sortP += parseFloat(`${3}`);
         appleb += `${appleb.length & appleb.length}`;
      }
         sortP += parseFloat(`${parseInt(`${sortP}`) ^ stylec.size}`);
       let catalogx = 4;
          let routerK = String.fromCharCode(109,97,112,112,101,100,95,54,95,56,51,0);
          let n_unlockl = 5.0;
         sortP /= Math.max(parseFloat(`${stylec.size}`), 5);
         routerK = "2";
         n_unlockl *= (String.fromCharCode(90,0) == routerK ? routerK.length : parseInt(`${n_unlockl}`));
      while (5 <= (m_title6.length + 2)) {
         stylec = new Map([[m_title6, 2 + m_title6.length]]);
         break;
      }
      for (let q = 0; q < 2; q++) {
         m_title6 += `${stylec.size}`;
      }
      delegate_10 /= Math.max(slideri.length, 5);
   }
   let moviesN = bridgeK.length <= 9513247;
   do {
       let sliderB: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,121,95,110,95,57,0),435], [String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,95,55,95,50,0),159]]);
       let layoutu = 4.0;
      let giftE = 7272401 >= sliderB.size;
      do {
         sliderB.set(`${layoutu}`, parseInt(`${layoutu}`));
         if (giftE) {
            break;
         }
      } while ((5 <= (parseInt(`${layoutu}`) + sliderB.size) || (3.40 + layoutu) <= 5.63) && giftE);
          let becomep = String.fromCharCode(101,112,104,101,109,101,114,97,108,95,106,95,56,56,0);
          let aboutU = String.fromCharCode(106,95,57,50,95,106,115,105,109,100,100,99,116,0);
          let nextG: Array<any> = [95, 90, 650];
         layoutu += parseFloat(`${nextG.length | 3}`);
         becomep += "2";
         aboutU = `${becomep.length << (Math.min(Math.abs(2), 1))}`;
         nextG.push(aboutU.length);
          let spinnerE: Array<any> = [String.fromCharCode(117,112,108,111,97,100,95,55,95,55,54,0), String.fromCharCode(107,101,112,116,95,118,95,56,51,0)];
         layoutu /= Math.max(parseFloat(`${3 - parseInt(`${layoutu}`)}`), 3);
         spinnerE.push(spinnerE.length ^ spinnerE.length);
      if ((5 * sliderB.size) <= 4 || (5 & sliderB.size) <= 3) {
         sliderB.set(`${layoutu}`, parseInt(`${layoutu}`));
      }
       let link4 = String.fromCharCode(115,105,108,107,95,52,95,52,57,0);
       let tickD = String.fromCharCode(112,114,101,102,101,114,115,95,54,95,51,50,0);
          let bottomE = 5.0;
          let interstitialH = true;
          let previewM = 2.0;
         sliderB.set(`${layoutu}`, parseInt(`${bottomE}`));
         interstitialH = interstitialH || 44.10 < previewM;
         previewM += parseFloat(`${3 / (Math.max(parseInt(`${previewM}`), 5))}`);
      bridgeK += `${(1 >> (Math.min(1, Math.abs((playercommonn ? 3 : 1)))))}`;
      if (moviesN) {
         break;
      }
   } while (moviesN && (bridgeK.startsWith(`${slideri.length}`)));
      slideri = [clears.length];
   let langkey6 = projectN.size >= 7544829;
   do {
      projectN.set(`${slideri.length}`, projectN.size / 2);
      if (langkey6) {
         break;
      }
   } while (langkey6 && (projectN.get(`${delegate_10}`) == null));
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let with_oJ = String.fromCharCode(119,95,50,51,95,97,100,106,117,115,116,115,0);
    let serviceu = String.fromCharCode(116,95,52,55,95,112,114,105,118,97,99,121,0);
    let disconnectedd = 1;
    let fastforwardm: Map<any, any> = new Map([[String.fromCharCode(110,95,57,57,95,115,116,105,102,102,110,101,115,115,0),true ], [String.fromCharCode(112,97,99,107,101,116,115,95,118,95,51,53,0),false ], [String.fromCharCode(99,95,51,51,95,104,112,101,108,100,115,112,0),false ]]);
    let sinaw = String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,57,95,50,50,0);
    let customm: Map<any, any> = new Map([[String.fromCharCode(114,95,50,48,95,104,97,114,101,0),716], [String.fromCharCode(97,95,56,52,95,98,106,101,99,116,0),752]]);
    let plashU = true;
    let searchbar0 = true;
    let username3: Array<any> = [String.fromCharCode(104,111,114,110,95,109,95,57,50,0), String.fromCharCode(100,105,97,108,111,103,115,95,111,95,54,50,0)];
    let kick2: Array<any> = [912, 546, 206];
    let grayW = 2.0;
    let shoota = 2.0;
      with_oJ += `${kick2.length & sinaw.length}`;
      plashU = (customm.size / (Math.max(7, fastforwardm.size))) > 78;
   if (customm.get(`${disconnectedd}`) == null) {
      disconnectedd |= (customm.size % (Math.max(5, (plashU ? 5 : 4))));
   }

      

   if (5 < fastforwardm.size) {
      fastforwardm = new Map([[`${customm.size}`, customm.size ^ serviceu.length]]);
   }
   for (let k = 0; k < 1; k++) {
      kick2.push(disconnectedd & serviceu.length);
   }
   for (let x = 0; x < 1; x++) {
      plashU = String.fromCharCode(77,0) == sinaw && customm.size == 85;
   }
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

   while (disconnectedd > 4) {
      disconnectedd += with_oJ.length;
      break;
   }
      fastforwardm.set(`${username3.length}`, customm.size * username3.length);
   while (3 >= (3 - sinaw.length) && (sinaw.length - 3) >= 5) {
      fastforwardm = new Map([[`${fastforwardm.size}`, 1]]);
      break;
   }
        setIsFullScreen(true);

   for (let n = 0; n < 1; n++) {
      sinaw += "2";
   }
   if ((fastforwardm.size / 2) > 4) {
      fastforwardm.set(`${searchbar0}`, kick2.length);
   }
   let anytimey = 7605935 >= kick2.length;
   do {
       let dplusE = String.fromCharCode(109,95,53,51,95,112,97,115,115,119,111,114,100,0);
       let privilegeY: Array<any> = [998, 135];
       let mbsplashR = 4.0;
       let pointF = String.fromCharCode(104,95,50,50,95,114,111,120,121,0);
       let pathQ: Array<any> = [String.fromCharCode(99,95,56,95,101,110,99,111,100,101,115,0), String.fromCharCode(111,95,52,53,95,103,101,116,109,0)];
       let thumbnailY = 3.0;
       let gradlek = 0.0;
      for (let u = 0; u < 3; u++) {
          let storeR: Array<any> = [937, 447, 963];
          let dycreatorC = String.fromCharCode(99,95,55,95,117,115,114,99,0);
          let ball9 = 1.0;
          let o_unlocky: Map<any, any> = new Map([[String.fromCharCode(99,97,112,95,50,95,54,51,0),222], [String.fromCharCode(102,117,110,110,121,95,112,95,54,55,0),26], [String.fromCharCode(102,108,105,112,112,101,100,95,100,95,54,53,0),272]]);
          let mbnativeadvancedZ = String.fromCharCode(97,108,108,111,99,97,116,101,95,109,95,52,54,0);
         thumbnailY *= 3;
         storeR = [storeR.length + 3];
         dycreatorC += `${(mbnativeadvancedZ == String.fromCharCode(90,0) ? dycreatorC.length : mbnativeadvancedZ.length)}`;
         ball9 -= o_unlocky.size;
         o_unlocky = new Map([[`${o_unlocky.size}`, o_unlocky.size >> (Math.min(mbnativeadvancedZ.length, 5))]]);
      }
         gradlek *= (String.fromCharCode(122,0) == dplusE ? parseInt(`${mbsplashR}`) : dplusE.length);
       let handlers = String.fromCharCode(120,95,54,52,95,98,101,101,110,0);
      let rightD = 9047009 <= handlers.length;
      do {
         handlers += `${dplusE.length / (Math.max(6, privilegeY.length))}`;
         if (rightD) {
            break;
         }
      } while ((4 == pathQ.length) && rightD);
      for (let g = 0; g < 2; g++) {
         thumbnailY /= Math.max(5, (String.fromCharCode(72,0) == dplusE ? privilegeY.length : dplusE.length));
      }
         handlers = `${pathQ.length >> (Math.min(1, Math.abs(parseInt(`${gradlek}`))))}`;
      let specV = 5634432.0 <= mbsplashR;
      do {
         mbsplashR += parseFloat(`${2}`);
         if (specV) {
            break;
         }
      } while ((1.51 <= (mbsplashR / (Math.max(parseFloat(`${privilegeY.length}`), 6))) && 2 <= (parseInt(`${mbsplashR}`) / (Math.max(privilegeY.length, 5)))) && specV);
          let regengm = 3;
         gradlek += (String.fromCharCode(70,0) == handlers ? regengm : handlers.length);
          let applicatione = String.fromCharCode(116,114,117,101,109,111,116,105,111,110,100,97,116,97,95,116,95,51,48,0);
         handlers = `${3 / (Math.max(3, dplusE.length))}`;
         applicatione = `${applicatione.length}`;
         thumbnailY *= 1;
       let paginationD = String.fromCharCode(104,95,53,57,95,98,111,110,106,111,117,114,0);
      for (let v = 0; v < 3; v++) {
         gradlek *= 3;
      }
      for (let s = 0; s < 3; s++) {
         mbsplashR /= Math.max(4, parseFloat(`${pathQ.length}`));
      }
         handlers += `${privilegeY.length}`;
      kick2 = [disconnectedd];
      if (anytimey) {
         break;
      }
   } while (anytimey && (3 <= (customm.size - 4)));
        

      plashU = fastforwardm.size <= 75;
       let otheri = 2.0;
       let termsZ = String.fromCharCode(102,100,111,112,101,110,95,97,95,53,49,0);
       let usernameb = String.fromCharCode(119,95,49,48,48,95,121,117,108,101,0);
         termsZ += `${2 % (Math.max(1, termsZ.length))}`;
       let networkB: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,103,101,111,0),656], [String.fromCharCode(114,101,109,105,120,95,50,95,53,54,0),824], [String.fromCharCode(110,95,51,53,95,116,104,111,117,115,97,110,100,115,0),590]]);
       let downloaderO: Map<any, any> = new Map([[String.fromCharCode(107,95,57,57,0),876], [String.fromCharCode(97,110,103,101,95,100,95,49,51,0),12], [String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,102,95,49,49,0),106]]);
      while (usernameb.length > 3) {
         usernameb = `${termsZ.length}`;
         break;
      }
         downloaderO.set(usernameb, 2);
      for (let j = 0; j < 2; j++) {
         termsZ += `${termsZ.length + 1}`;
      }
      plashU = kick2.length == 34 && 66.60 == otheri;
       let calendarY = String.fromCharCode(110,101,108,108,121,109,111,115,101,114,95,98,95,52,55,0);
      for (let o = 0; o < 1; o++) {
          let anythinkU = String.fromCharCode(99,97,118,112,95,117,95,52,54,0);
          let skipC = String.fromCharCode(99,95,54,48,95,110,105,100,115,0);
          let annerd = 0.0;
          let mbbannerq = String.fromCharCode(114,95,56,50,95,119,101,98,115,111,99,107,101,116,0);
          let internets = String.fromCharCode(114,101,113,117,105,114,101,100,95,122,95,55,52,0);
         calendarY += `${skipC.length & anythinkU.length}`;
         anythinkU += "3";
         skipC += `${mbbannerq.length}`;
         annerd -= parseFloat(`${1 ^ mbbannerq.length}`);
         internets = `${(internets == String.fromCharCode(77,0) ? internets.length : parseInt(`${annerd}`))}`;
      }
      while (calendarY.length > calendarY.length) {
         calendarY += `${(calendarY == String.fromCharCode(102,0) ? calendarY.length : calendarY.length)}`;
         break;
      }
         calendarY += `${calendarY.length}`;
      customm = new Map([[`${username3.length}`, 1 | username3.length]]);
        StatusBar.setHidden(true);

   if (1 <= (fastforwardm.size & sinaw.length)) {
       let miniV: Array<any> = [88, 875];
      for (let u = 0; u < 2; u++) {
         miniV = [2 >> (Math.min(2, miniV.length))];
      }
      let calendarv = 5655727 <= miniV.length;
      do {
         miniV.push(miniV.length);
         if (calendarv) {
            break;
         }
      } while (calendarv && ((1 & miniV.length) >= 3 && 5 >= (miniV.length & 1)));
      while ((miniV.length | 1) >= 1) {
          let cornerA = String.fromCharCode(111,95,49,52,95,98,97,115,101,103,112,104,0);
          let controlsC = String.fromCharCode(112,101,114,115,105,115,116,97,98,108,101,95,106,95,50,56,0);
          let greyP: Map<any, any> = new Map([[String.fromCharCode(109,115,114,108,101,95,122,95,56,50,0),String.fromCharCode(112,95,57,49,95,99,104,97,112,116,101,114,115,0)], [String.fromCharCode(107,95,54,50,95,112,97,121,109,97,115,116,101,114,0),String.fromCharCode(109,105,115,115,101,115,95,114,95,54,48,0)], [String.fromCharCode(120,95,52,51,95,115,112,100,105,102,0),String.fromCharCode(110,95,53,57,95,115,116,101,108,108,97,114,0)]]);
          let mbsplashq = String.fromCharCode(105,95,56,49,95,103,117,116,116,101,114,0);
          let volumeR: Map<any, any> = new Map([[String.fromCharCode(115,95,49,50,95,112,97,114,97,115,101,116,0),425], [String.fromCharCode(116,100,108,116,95,52,95,54,56,0),572]]);
         miniV.push(volumeR.size ^ mbsplashq.length);
         cornerA += `${cornerA.length}`;
         controlsC += `${controlsC.length << (Math.min(cornerA.length, 5))}`;
         greyP = new Map([[controlsC, cornerA.length >> (Math.min(Math.abs(2), 2))]]);
         mbsplashq = `${2 ^ greyP.size}`;
         volumeR = new Map([[`${greyP.size}`, greyP.size % 2]]);
         break;
      }
      fastforwardm = new Map([[`${miniV.length}`, ((plashU ? 2 : 3) & 3)]]);
   }
   if (serviceu.length < 4) {
      username3 = [username3.length + 3];
   }
   for (let q = 0; q < 2; q++) {
       let completez = false;
         completez = !completez;
         completez = (completez ? !completez : completez);
          let mbjscommond = String.fromCharCode(102,105,108,101,116,105,109,101,95,48,95,53,49,0);
          let upgradeY = 3.0;
         completez = parseFloat(`${mbjscommond.length}`) > upgradeY;
      disconnectedd *= disconnectedd;
   }

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

   while ((username3.length / (Math.max(kick2.length, 10))) <= 5) {
      username3.push(disconnectedd);
      break;
   }
      plashU = 75 < kick2.length || String.fromCharCode(48,0) == sinaw;
       let holderc = true;
      if (holderc) {
         holderc = (!holderc ? holderc : !holderc);
      }
      if (!holderc && holderc) {
          let save1 = String.fromCharCode(107,95,55,54,95,112,111,108,105,99,121,0);
          let q_countR = String.fromCharCode(97,98,111,114,116,95,109,95,50,54,0);
         holderc = save1.length >= q_countR.length;
      }
      let selectedx = holderc ? !holderc : holderc;
      do {
          let delegate_3ri: Array<any> = [918, 515];
          let nativeF: Array<any> = [857, 915, 96];
         holderc = !holderc;
         delegate_3ri = [2 * nativeF.length];
         nativeF = [2 | nativeF.length];
         if (selectedx) {
            break;
         }
      } while (selectedx && (holderc));
      plashU = searchbar0 || serviceu.length <= 53;
        setIsFullScreen(false);

       let bannerS = String.fromCharCode(101,120,99,108,95,98,95,55,55,0);
       let transfers: Map<any, any> = new Map([[String.fromCharCode(109,101,109,122,101,114,111,95,52,95,54,51,0),true ], [String.fromCharCode(116,95,52,95,99,105,116,121,0),true ], [String.fromCharCode(101,95,54,57,95,116,104,101,111,114,97,0),true ]]);
         bannerS += `${(bannerS == String.fromCharCode(65,0) ? bannerS.length : transfers.size)}`;
       let descj: Map<any, any> = new Map([[String.fromCharCode(119,95,51,51,95,112,101,114,115,105,115,116,101,110,116,0),48], [String.fromCharCode(121,95,56,48,95,102,108,116,112,0),548]]);
         descj = new Map([[`${descj.size}`, transfers.size]]);
      while (bannerS.length == transfers.size) {
         bannerS += `${3 / (Math.max(3, transfers.size))}`;
         break;
      }
      let nextu = transfers.size <= 9622873;
      do {
          let long_z6t: Array<any> = [267, 504, 961];
         transfers.set(bannerS, 3 + transfers.size);
         long_z6t.push(long_z6t.length);
         if (nextu) {
            break;
         }
      } while (nextu && ((transfers.size >> (Math.min(Math.abs(1), 4))) < 4 && (bannerS.length >> (Math.min(4, Math.abs(transfers.size)))) < 1));
      let utilsZ = 8264669 <= descj.size;
      do {
          let moviest = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,108,95,50,55,0);
          let vietnami = true;
         descj = new Map([[`${descj.size}`, descj.size % (Math.max(moviest.length, 2))]]);
         moviest += `${((vietnami ? 5 : 2))}`;
         if (utilsZ) {
            break;
         }
      } while (utilsZ && (transfers.size > 2));
      plashU = String.fromCharCode(73,0) == serviceu;
   while (with_oJ == sinaw) {
      sinaw = `${kick2.length * disconnectedd}`;
      break;
   }
       let condensed2: Array<any> = [818, 813];
       let tailW: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,95,54,95,50,0),462], [String.fromCharCode(119,95,50,51,95,109,111,118,116,101,120,116,115,117,98,0),931]]);
      if (condensed2.length < 1) {
         condensed2.push(condensed2.length * tailW.size);
      }
      for (let p = 0; p < 3; p++) {
         condensed2 = [2 >> (Math.min(4, condensed2.length))];
      }
      for (let y = 0; y < 3; y++) {
         tailW = new Map([[`${tailW.size}`, condensed2.length + 1]]);
      }
         condensed2.push(2 + condensed2.length);
          let completeC: Array<any> = [String.fromCharCode(114,101,109,111,118,101,95,113,95,55,50,0), String.fromCharCode(120,95,50,52,95,103,114,111,119,105,110,103,0), String.fromCharCode(99,95,54,52,95,119,97,116,99,104,105,110,103,0)];
         tailW = new Map([[`${tailW.size}`, tailW.size]]);
         completeC.push(completeC.length / 3);
         tailW.set(`${condensed2.length}`, tailW.size);
      searchbar0 = with_oJ.length <= 99;
        

      customm = new Map([[`${fastforwardm.size}`, fastforwardm.size]]);
      searchbar0 = with_oJ == String.fromCharCode(95,0);
      sinaw += `${3 ^ username3.length}`;
        StatusBar.setHidden(false);

   let main_fq = 5020974 <= username3.length;
   do {
       let usernameW = 3.0;
       let sansD: Array<any> = [String.fromCharCode(105,95,56,53,95,114,98,115,112,0), String.fromCharCode(114,117,98,98,101,114,95,99,95,57,56,0), String.fromCharCode(101,110,99,104,95,108,95,57,57,0)];
      let album1 = sansD.length <= 8166572;
      do {
         sansD.push(1);
         if (album1) {
            break;
         }
      } while (((2 | sansD.length) <= 4 && 4.49 <= (usernameW / (Math.max(sansD.length, 4)))) && album1);
         sansD.push(parseInt(`${usernameW}`));
      while (sansD.length <= parseInt(`${usernameW}`)) {
          let frame_rs: Array<any> = [548, 31, 252];
          let contextc: Array<any> = [348, 362];
          let temp3 = true;
          let textD = 0;
         sansD.push(parseInt(`${usernameW}`));
         frame_rs = [(textD * (temp3 ? 5 : 4))];
         contextc.push(((temp3 ? 2 : 1) + 1));
         textD >>= Math.min(Math.abs(2), 4);
         break;
      }
      if (sansD.length > 4) {
         sansD = [sansD.length];
      }
         sansD = [3 - parseInt(`${usernameW}`)];
         sansD = [parseInt(`${usernameW}`) << (Math.min(5, Math.abs(3)))];
      username3.push(((plashU ? 3 : 4) * kick2.length));
      if (main_fq) {
         break;
      }
   } while ((!username3.includes(shoota)) && main_fq);
   for (let r = 0; r < 2; r++) {
      grayW -= parseFloat(`${2}`);
   }
   for (let e = 0; e < 3; e++) {
       let photos = 5.0;
       let fastN = String.fromCharCode(113,95,52,52,95,117,117,105,100,117,115,109,116,0);
       let contextY = 4.0;
         fastN += `${parseInt(`${photos}`)}`;
      let signinupi = photos >= 7005820.0;
      do {
          let backwardk = String.fromCharCode(118,95,56,50,95,115,113,108,0);
          let launchH = String.fromCharCode(119,95,49,51,95,98,111,120,101,115,0);
          let helper_ = 0.0;
         photos += 3;
         backwardk += `${backwardk.length % (Math.max(10, launchH.length))}`;
         launchH = "1";
         helper_ += 2;
         if (signinupi) {
            break;
         }
      } while (((photos / (Math.max(1.57, 9))) >= 3.68) && signinupi);
         photos += parseInt(`${contextY}`);
      let share6 = 7316439.0 >= contextY;
      do {
          let sansJ = 5.0;
          let unewsF = 5.0;
          let minit = 0;
          let videocommonp: Map<any, any> = new Map([[String.fromCharCode(111,95,51,52,95,115,116,111,119,0),false ], [String.fromCharCode(118,98,108,101,95,110,95,57,53,0),false ], [String.fromCharCode(109,97,121,95,106,95,51,48,0),false ]]);
          let ajax1 = 2.0;
         contextY += parseInt(`${unewsF}`) * 3;
         sansJ *= parseFloat(`${videocommonp.size / 3}`);
         unewsF += minit >> (Math.min(Math.abs(2), 3));
         minit >>= Math.min(Math.abs(parseInt(`${sansJ}`)), 5);
         videocommonp.set(`${sansJ}`, parseInt(`${ajax1}`));
         if (share6) {
            break;
         }
      } while (share6 && (!fastN.endsWith(`${contextY}`)));
      if (2 >= (2 & fastN.length) || 2 >= (fastN.length + parseInt(`${contextY}`))) {
          let next7 = String.fromCharCode(118,95,55,54,95,104,105,110,116,0);
          let successA = String.fromCharCode(107,95,51,50,95,102,105,114,101,100,0);
          let flyerr: Array<any> = [916, 270, 875];
          let sideM = String.fromCharCode(110,95,57,54,95,115,99,114,97,116,99,104,0);
          let forwardi = String.fromCharCode(119,105,110,100,111,119,101,100,95,118,95,51,0);
         fastN = `${next7.length & parseInt(`${contextY}`)}`;
         next7 += `${(String.fromCharCode(118,0) == forwardi ? forwardi.length : sideM.length)}`;
         successA = `${forwardi.length >> (Math.min(Math.abs(3), 2))}`;
         flyerr = [forwardi.length % (Math.max(9, flyerr.length))];
         sideM += "3";
      }
      for (let d = 0; d < 2; d++) {
          let sinaV = String.fromCharCode(102,95,53,51,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0);
          let macaur = String.fromCharCode(104,95,57,52,95,105,110,112,111,115,0);
         fastN += `${(String.fromCharCode(85,0) == fastN ? parseInt(`${photos}`) : fastN.length)}`;
         sinaV += `${macaur.length}`;
         macaur += `${(macaur == String.fromCharCode(121,0) ? macaur.length : sinaV.length)}`;
      }
         contextY += (fastN == String.fromCharCode(78,0) ? fastN.length : parseInt(`${photos}`));
       let report9 = true;
       let robotoJ = false;
      serviceu = `${((searchbar0 ? 1 : 5))}`;
   }

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let alert0 = String.fromCharCode(107,95,51,49,95,105,110,118,101,114,115,101,100,0);
    let condensedo = 3;
    let greenL = String.fromCharCode(106,95,51,49,95,97,100,109,105,110,101,100,0);
    let eighteenA = String.fromCharCode(97,100,100,105,116,105,111,110,115,95,97,95,56,49,0);
    let predictiong = String.fromCharCode(116,95,57,56,95,115,104,111,119,119,97,118,101,115,112,105,99,0);
    let expandV: Map<any, any> = new Map([[String.fromCharCode(115,105,112,114,95,120,95,54,54,0),784], [String.fromCharCode(98,114,105,101,102,108,121,95,108,95,56,55,0),938], [String.fromCharCode(104,95,55,50,95,109,105,100,0),848]]);
    let left7 = String.fromCharCode(116,95,50,49,95,110,111,116,99,104,0);
      left7 += `${(left7 == String.fromCharCode(108,0) ? condensedo : left7.length)}`;
      predictiong = `${greenL.length}`;

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

   if (!Array.from(expandV.values()).includes(condensedo)) {
       let results = 2.0;
       let sigmobx: Map<any, any> = new Map([[String.fromCharCode(103,95,56,95,104,111,114,110,0),150], [String.fromCharCode(105,100,101,110,116,105,102,121,95,56,95,57,57,0),777], [String.fromCharCode(106,95,51,49,95,99,108,101,97,114,0),438]]);
      let suggestion3 = 5871501.0 >= results;
      do {
          let datax: Map<any, any> = new Map([[String.fromCharCode(103,95,56,54,95,109,97,105,110,100,98,0),String.fromCharCode(98,121,116,101,95,102,95,51,54,0)], [String.fromCharCode(112,95,49,95,100,99,97,101,110,99,0),String.fromCharCode(120,95,55,51,95,115,108,102,0)]]);
          let sports_ = String.fromCharCode(105,95,52,55,95,105,110,116,114,97,0);
          let megaphoneW = String.fromCharCode(116,95,49,48,48,95,115,101,108,101,99,116,111,112,0);
          let greeni = String.fromCharCode(118,95,50,48,95,112,111,115,116,115,99,97,108,101,0);
         results -= parseFloat(`${2 * parseInt(`${results}`)}`);
         datax = new Map([[megaphoneW, greeni.length - megaphoneW.length]]);
         sports_ = `${(String.fromCharCode(53,0) == greeni ? greeni.length : sports_.length)}`;
         if (suggestion3) {
            break;
         }
      } while ((2 >= (sigmobx.size << (Math.min(Math.abs(4), 2))) && (2.18 + results) >= 4.91) && suggestion3);
      if (2 <= (sigmobx.size + 2) || 5.87 <= (results / (Math.max(parseFloat(`${sigmobx.size}`), 5)))) {
          let private_tu = 0;
         sigmobx.set(`${results}`, parseInt(`${results}`) + 2);
         private_tu += private_tu / 3;
      }
         results -= parseFloat(`${sigmobx.size}`);
         sigmobx.set(`${results}`, parseInt(`${results}`) % 3);
         sigmobx.set(`${results}`, parseInt(`${results}`));
          let launchh = 0.0;
          let activityF = String.fromCharCode(99,95,54,53,95,97,121,98,114,105,0);
         sigmobx.set(`${results}`, parseInt(`${results}`));
         launchh *= parseInt(`${launchh}`) << (Math.min(Math.abs(1), 1));
         activityF += `${parseInt(`${launchh}`)}`;
      expandV.set(`${greenL}`, sigmobx.size);
   }
       let viewsJ = String.fromCharCode(102,114,101,101,100,111,109,95,54,95,49,57,0);
       let refresh6 = 3.0;
       let hook9 = String.fromCharCode(118,97,114,105,97,110,99,101,115,95,99,95,54,55,0);
         viewsJ += `${parseInt(`${refresh6}`) + 2}`;
       let profileM: Map<any, any> = new Map([[String.fromCharCode(99,95,53,56,95,100,101,115,99,114,105,112,116,105,111,110,115,0),734], [String.fromCharCode(102,95,54,52,95,116,119,105,110,118,113,0),387]]);
       let corey: Map<any, any> = new Map([[String.fromCharCode(118,108,99,115,95,100,95,49,55,0),542], [String.fromCharCode(107,95,51,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0),289], [String.fromCharCode(103,95,55,57,95,102,97,100,101,100,0),18]]);
         hook9 += `${profileM.size << (Math.min(5, Math.abs(parseInt(`${refresh6}`))))}`;
      for (let x = 0; x < 1; x++) {
          let reacty = String.fromCharCode(116,104,101,111,114,97,95,57,95,51,0);
          let emoji0 = String.fromCharCode(104,95,55,54,95,118,101,99,116,111,114,115,0);
          let vignettey = true;
         refresh6 += emoji0.length;
         reacty += "2";
         emoji0 = `${reacty.length}`;
      }
         corey.set(`${refresh6}`, parseInt(`${refresh6}`) * 3);
       let refresh_: Array<any> = [String.fromCharCode(114,101,113,117,101,115,116,95,97,95,53,49,0), String.fromCharCode(112,97,114,116,105,99,108,101,95,112,95,55,57,0)];
       let guideg: Array<any> = [708, 738, 160];
       let shootK: Array<any> = [331, 489];
      for (let c = 0; c < 3; c++) {
         hook9 = `${guideg.length / (Math.max(shootK.length, 8))}`;
      }
          let condensedJ = String.fromCharCode(111,95,50,53,95,102,105,108,116,101,114,103,114,97,112,104,0);
         hook9 += `${(hook9 == String.fromCharCode(83,0) ? condensedJ.length : hook9.length)}`;
      condensedo >>= Math.min(Math.abs(expandV.size), 1);
        lockOrientation("PORTRAIT");

   let appsi = String.fromCharCode(122,99,104,106,0) == eighteenA;
   do {
      eighteenA = `${2 | eighteenA.length}`;
      if (appsi) {
         break;
      }
   } while (appsi && (eighteenA.length < 3));
       let shared8: Map<any, any> = new Map([[String.fromCharCode(119,95,52,51,95,114,101,105,110,100,101,120,0),String.fromCharCode(119,102,101,120,95,120,95,49,49,0)], [String.fromCharCode(99,108,105,112,102,95,97,95,55,53,0),String.fromCharCode(108,95,56,55,95,116,111,111,108,99,104,97,105,110,0)], [String.fromCharCode(112,114,105,109,101,114,95,101,95,49,53,0),String.fromCharCode(117,95,52,56,95,111,100,100,97,118,103,0)]]);
       let launchT = true;
         shared8.set(`${launchT}`, ((launchT ? 2 : 3) / 1));
       let feedbackd = String.fromCharCode(115,104,105,102,116,95,55,95,54,54,0);
      while (!launchT) {
         launchT = feedbackd.length >= 66;
         break;
      }
      let anytimeT = shared8.size <= 9130215;
      do {
         shared8 = new Map([[`${shared8.size}`, 3 | shared8.size]]);
         if (anytimeT) {
            break;
         }
      } while (((3 | feedbackd.length) < 5) && anytimeT);
         feedbackd = `${feedbackd.length}`;
      for (let e = 0; e < 3; e++) {
         launchT = shared8.size > 39;
      }
      predictiong += `${eighteenA.length / (Math.max(alert0.length, 8))}`;
        setIsFullScreen(false);

   let module5 = left7 == String.fromCharCode(101,119,122,0);
   do {
      left7 = `${1 | expandV.size}`;
      if (module5) {
         break;
      }
   } while ((eighteenA.length == 4) && module5);
      expandV = new Map([[alert0, eighteenA.length | alert0.length]]);
        

      alert0 += `${greenL.length / (Math.max(6, left7.length))}`;
      condensedo |= 2;
        StatusBar.setHidden(false);

      greenL = `${expandV.size}`;
   for (let j = 0; j < 1; j++) {
      eighteenA += `${eighteenA.length}`;
   }

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

       let navigationu = String.fromCharCode(97,95,55,54,95,100,101,108,101,116,101,100,0);
         navigationu += "3";
      for (let w = 0; w < 1; w++) {
         navigationu += `${(String.fromCharCode(52,0) == navigationu ? navigationu.length : navigationu.length)}`;
      }
         navigationu += "3";
      alert0 += `${left7.length * 2}`;
       let details = false;
       let moduleN = String.fromCharCode(115,116,101,112,119,105,115,101,95,55,95,54,53,0);
       let minivodn = 4.0;
          let eventQ = 2;
          let entry4 = 0.0;
         details = ((moduleN.length & (details ? 25 : moduleN.length)) > 25);
         eventQ += 1;
         entry4 /= Math.max(2, parseFloat(`${parseInt(`${entry4}`)}`));
      if (details) {
          let watchM = 3.0;
          let previewr = String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,117,95,54,53,0);
         moduleN += `${parseInt(`${watchM}`)}`;
         watchM -= parseFloat(`${previewr.length + previewr.length}`);
      }
      while (moduleN.startsWith(`${minivodn}`)) {
         minivodn /= Math.max(parseFloat(`${1}`), 2);
         break;
      }
         moduleN = `${3 | parseInt(`${minivodn}`)}`;
      while (2 == (1 >> (Math.min(5, moduleN.length)))) {
         minivodn -= parseFloat(`${1 & parseInt(`${minivodn}`)}`);
         break;
      }
          let taiwanM = false;
         moduleN += "3";
         taiwanM = (!taiwanM ? !taiwanM : !taiwanM);
         moduleN = `${parseInt(`${minivodn}`) * 3}`;
         minivodn -= (parseFloat(`${(details ? 5 : 4) % (Math.max(moduleN.length, 3))}`));
      for (let l = 0; l < 1; l++) {
          let halfE = String.fromCharCode(120,95,49,50,95,98,117,116,116,101,114,102,108,121,0);
          let bingQ = String.fromCharCode(102,105,102,97,95,116,95,51,52,0);
          let fast4 = true;
          let mbridgeP = String.fromCharCode(112,95,53,51,95,100,105,115,99,111,110,110,101,99,116,101,100,0);
          let dragj: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,116,95,48,95,50,51,0),String.fromCharCode(115,101,97,114,99,104,101,100,95,114,95,50,51,0)], [String.fromCharCode(105,110,118,105,116,101,100,95,50,95,56,48,0),String.fromCharCode(117,110,114,105,115,101,95,118,95,50,0)]]);
         details = halfE.includes(`${fast4}`);
         halfE += `${dragj.size}`;
         bingQ += `${mbridgeP.length}`;
         fast4 = String.fromCharCode(71,0) == mbridgeP;
         dragj.set(bingQ, bingQ.length);
      }
      condensedo -= 3;
        lockOrientation("LANDSCAPE");

   while (!left7.startsWith(`${expandV.size}`)) {
      left7 += `${(greenL == String.fromCharCode(80,0) ? predictiong.length : greenL.length)}`;
      break;
   }
   let heart7 = predictiong.length <= 9361902;
   do {
       let sheetj = String.fromCharCode(115,112,114,111,112,95,101,95,56,56,0);
       let videojsC: Map<any, any> = new Map([[String.fromCharCode(103,95,51,51,95,112,114,105,118,97,99,121,0),78], [String.fromCharCode(115,95,51,49,95,115,116,114,116,111,107,0),690], [String.fromCharCode(106,95,57,49,95,116,99,102,105,108,101,0),810]]);
       let target_: Map<any, any> = new Map([[String.fromCharCode(100,95,53,50,95,115,105,122,101,109,109,0),719], [String.fromCharCode(101,118,114,99,95,101,95,56,48,0),825]]);
       let indicatorL: Map<any, any> = new Map([[String.fromCharCode(103,95,56,54,95,114,101,97,100,99,98,0),true ], [String.fromCharCode(115,104,111,114,116,99,117,116,115,95,53,95,53,56,0),true ]]);
       let fieldc = 2.0;
      while ((indicatorL.size / (Math.max(3, 8))) >= 5) {
         target_ = new Map([[`${indicatorL.size}`, 3 - indicatorL.size]]);
         break;
      }
         indicatorL.set(sheetj, 1 << (Math.min(5, sheetj.length)));
      if (4 <= (videojsC.size >> (Math.min(Math.abs(2), 3))) || (videojsC.size >> (Math.min(1, Math.abs(indicatorL.size)))) <= 2) {
         videojsC.set(`${fieldc}`, videojsC.size);
      }
         fieldc *= parseFloat(`${indicatorL.size}`);
      for (let x = 0; x < 3; x++) {
         indicatorL = new Map([[`${videojsC.size}`, 2]]);
      }
      let videoc = 5383688 <= indicatorL.size;
      do {
          let home0 = 3;
          let matchesu: Map<any, any> = new Map([[String.fromCharCode(115,101,116,114,97,110,103,101,95,52,95,51,51,0),String.fromCharCode(112,114,101,118,105,101,119,101,100,95,98,95,56,52,0)], [String.fromCharCode(107,101,121,112,97,116,104,95,102,95,57,57,0),String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,120,95,57,53,0)]]);
          let activeu: Map<any, any> = new Map([[String.fromCharCode(115,112,97,99,101,114,95,106,95,55,49,0),false ], [String.fromCharCode(119,95,50,51,95,108,111,99,97,116,101,100,0),false ], [String.fromCharCode(120,95,53,51,95,115,116,111,114,101,0),false ]]);
         indicatorL = new Map([[`${activeu.size}`, activeu.size]]);
         home0 <<= Math.min(Math.abs(matchesu.size), 2);
         matchesu = new Map([[`${matchesu.size}`, matchesu.size << (Math.min(Math.abs(1), 5))]]);
         if (videoc) {
            break;
         }
      } while (videoc && (5.78 > (5.72 * fieldc)));
       let brightnessk = String.fromCharCode(100,95,57,50,95,114,101,110,97,109,101,0);
         fieldc /= Math.max(5, parseFloat(`${2 ^ target_.size}`));
      if (3 <= (target_.size ^ brightnessk.length)) {
         brightnessk = `${brightnessk.length + target_.size}`;
      }
         videojsC.set(`${videojsC.size}`, indicatorL.size % (Math.max(1, 2)));
          let styleT = 2.0;
          let vignetteK = 0.0;
          let stylex = 3;
         indicatorL = new Map([[`${indicatorL.size}`, indicatorL.size]]);
         styleT /= Math.max(2, 2 * parseInt(`${styleT}`));
         vignetteK += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${vignetteK}`)), 5))}`);
         stylex |= 2;
      predictiong += `${videojsC.size}`;
      if (heart7) {
         break;
      }
   } while ((eighteenA == predictiong) && heart7);
        setIsFullScreen(true);

   for (let f = 0; f < 2; f++) {
      alert0 += `${3 - expandV.size}`;
   }
      condensedo *= 1;
        

   for (let z = 0; z < 2; z++) {
      left7 = `${left7.length * 1}`;
   }
      alert0 = `${eighteenA.length}`;
        StatusBar.setHidden(true);

      eighteenA = `${predictiong.length ^ expandV.size}`;
      greenL = `${eighteenA.length << (Math.min(Math.abs(3), 1))}`;

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
       let refresh0: Array<any> = [756, 941];
    let toponc: Array<any> = [String.fromCharCode(101,109,112,116,121,95,107,95,55,52,0), String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,112,95,54,50,0)];
    let notification_ = String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,122,95,53,55,0);
    let footballl = String.fromCharCode(113,95,50,53,95,105,110,108,105,103,104,116,0);
    let faviconN = String.fromCharCode(101,120,99,108,117,100,101,95,102,95,51,56,0);
    let catagoryb = 2.0;
    let change4 = String.fromCharCode(108,111,103,105,99,95,120,95,55,53,0);
    let basketballH = String.fromCharCode(102,117,108,102,105,108,108,101,100,95,101,95,53,0);
    let mathH = String.fromCharCode(110,105,99,101,95,121,95,54,0);
    let videojsy = String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,51,95,49,0);
    let nalyticsz: Array<any> = [369, 173, 399];
    let helperm = String.fromCharCode(122,95,49,53,95,108,101,118,105,110,115,111,110,0);
      change4 += `${notification_.length - 3}`;
   if ((5 / (Math.max(4, parseInt(`${catagoryb}`)))) > 5 || (catagoryb / 1.61) > 3.92) {
      change4 += "1";
   }
   while (2 > refresh0.length) {
       let giftF = String.fromCharCode(105,110,100,101,111,95,114,95,50,54,0);
       let source_ = 5.0;
         giftF += `${parseInt(`${source_}`) * giftF.length}`;
      while (4.21 < (3.14 * source_)) {
         giftF += `${(String.fromCharCode(97,0) == giftF ? giftF.length : parseInt(`${source_}`))}`;
         break;
      }
      refresh0.push(parseInt(`${catagoryb}`) * footballl.length);
      break;
   }
       let reportV: Array<any> = [608, 117, 578];
       let carouselc = String.fromCharCode(99,101,110,116,101,114,105,110,103,95,103,95,51,53,0);
       let philippinesb = true;
       let paginationG = true;
         reportV.push(carouselc.length - 1);
      if ((4 - reportV.length) <= 1) {
         reportV.push(((paginationG ? 5 : 5)));
      }
      while (philippinesb && carouselc.length <= 5) {
          let pointS = 1.0;
          let next6: Array<any> = [String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,54,95,52,51,0), String.fromCharCode(100,95,57,49,95,115,109,107,97,0), String.fromCharCode(97,112,112,101,110,100,101,100,95,53,95,53,48,0)];
         carouselc += `${((paginationG ? 5 : 4))}`;
         pointS /= Math.max(1, parseInt(`${pointS}`) >> (Math.min(next6.length, 2)));
         next6 = [parseInt(`${pointS}`) << (Math.min(2, Math.abs(1)))];
         break;
      }
         reportV.push(3 + carouselc.length);
          let placeholderl: Map<any, any> = new Map([[String.fromCharCode(99,95,52,55,95,114,101,115,116,114,97,105,110,0),665], [String.fromCharCode(105,95,50,53,95,114,116,109,112,0),883]]);
          let inactivec = 4;
         carouselc = "1";
         placeholderl = new Map([[`${placeholderl.size}`, placeholderl.size]]);
         inactivec += placeholderl.size;
       let cornerk = 1;
         cornerk &= 1;
      for (let w = 0; w < 1; w++) {
          let alertP: Array<any> = [String.fromCharCode(106,95,51,49,95,112,111,108,101,0), String.fromCharCode(115,117,98,106,101,99,116,105,118,101,115,95,116,95,50,53,0)];
         reportV.push(cornerk / (Math.max(8, carouselc.length)));
         alertP = [alertP.length];
      }
      catagoryb /= Math.max(3, 1);
       let gemfileC = 3.0;
       let dropdownL = String.fromCharCode(112,114,105,118,97,116,101,95,116,95,50,56,0);
       let sharedV = String.fromCharCode(111,95,57,55,95,119,114,105,116,97,98,108,101,0);
          let typingS = String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,105,95,51,55,0);
          let expandx = 3.0;
         gemfileC *= parseFloat(`${typingS.length}`);
         typingS += "3";
         expandx -= parseInt(`${expandx}`) + 2;
      let champion5 = 8665680 >= dropdownL.length;
      do {
          let sigmobq = 5.0;
          let with_rjv = String.fromCharCode(105,95,52,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0);
          let expandD = String.fromCharCode(111,95,51,55,95,109,101,115,97,103,101,115,0);
          let fastl: Array<any> = [324, 851];
         dropdownL += "2";
         sigmobq /= Math.max((expandD == String.fromCharCode(117,0) ? expandD.length : parseInt(`${sigmobq}`)), 5);
         with_rjv = `${1 ^ parseInt(`${sigmobq}`)}`;
         fastl = [parseInt(`${sigmobq}`) - 3];
         if (champion5) {
            break;
         }
      } while (champion5 && (5 == sharedV.length));
      for (let l = 0; l < 2; l++) {
         sharedV += `${3 % (Math.max(2, sharedV.length))}`;
      }
          let configureF = String.fromCharCode(106,95,57,49,95,99,111,101,102,102,115,0);
         sharedV += "1";
         configureF = `${configureF.length}`;
       let time_8B = 4.0;
       let catalog6: Array<any> = [186, 980];
       let forwardS: Array<any> = [580, 185];
      if ((catalog6.length ^ 2) <= 2) {
         catalog6.push(forwardS.length);
      }
         gemfileC /= Math.max(5, parseFloat(`${3 >> (Math.min(1, catalog6.length))}`));
       let detailsM = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,95,110,95,51,48,0);
      toponc = [1];
       let recommendationY = String.fromCharCode(112,111,114,116,95,104,95,49,53,0);
      let zhubo2 = 6164219 <= recommendationY.length;
      do {
         recommendationY = `${(recommendationY == String.fromCharCode(66,0) ? recommendationY.length : recommendationY.length)}`;
         if (zhubo2) {
            break;
         }
      } while (zhubo2 && (recommendationY.length < 4));
          let bellK = 2.0;
         recommendationY += `${parseInt(`${bellK}`) ^ recommendationY.length}`;
          let mimo0 = 2.0;
          let mbjscommonn: Array<any> = [626, 731, 820];
         recommendationY += `${parseInt(`${mimo0}`)}`;
         mimo0 += parseFloat(`${mbjscommonn.length | mbjscommonn.length}`);
      change4 += `${faviconN.length & change4.length}`;
      toponc = [footballl.length];
      mathH += `${(String.fromCharCode(86,0) == notification_ ? footballl.length : notification_.length)}`;
      faviconN = `${notification_.length}`;
       let rewardg = String.fromCharCode(115,101,115,115,105,111,110,115,95,98,95,51,50,0);
       let typesB: Map<any, any> = new Map([[String.fromCharCode(103,95,49,52,95,115,121,109,98,111,108,0),994], [String.fromCharCode(102,114,101,101,112,95,118,95,53,50,0),311], [String.fromCharCode(110,95,56,48,95,98,97,99,107,101,110,100,0),956]]);
      while (4 > (typesB.size ^ 3) && (rewardg.length ^ 3) > 1) {
         rewardg = `${rewardg.length}`;
         break;
      }
      if ((rewardg.length ^ 2) == 2) {
          let bootsplashl = 5;
         rewardg += `${typesB.size | rewardg.length}`;
         bootsplashl /= Math.max(bootsplashl - 3, 3);
      }
          let vietnamP = String.fromCharCode(114,95,55,53,95,119,105,116,104,105,110,0);
          let castF = 4;
         typesB = new Map([[`${typesB.size}`, 3]]);
         vietnamP = `${castF / 1}`;
         castF %= Math.max(castF, 5);
      if ((typesB.size << (Math.min(rewardg.length, 5))) >= 5) {
         rewardg = `${rewardg.length}`;
      }
         rewardg = `${rewardg.length % (Math.max(1, typesB.size))}`;
      if (rewardg.length == 3) {
         rewardg += `${typesB.size}`;
      }
      faviconN = `${typesB.size & parseInt(`${catagoryb}`)}`;
   if ((mathH.length + 4) > 5) {
      catagoryb += faviconN.length;
   }
       let navigation3 = String.fromCharCode(107,95,50,56,95,110,99,104,117,110,107,0);
       let filedn = String.fromCharCode(122,95,51,57,95,119,105,114,101,102,114,97,109,101,0);
          let pages: Array<any> = [886, 670, 849];
          let whistleL = String.fromCharCode(121,95,50,49,95,100,101,97,108,108,111,99,0);
         navigation3 += `${filedn.length ^ pages.length}`;
         pages.push(2 & whistleL.length);
         whistleL = `${whistleL.length}`;
       let mbbidf: Map<any, any> = new Map([[String.fromCharCode(121,95,55,55,0),false ], [String.fromCharCode(99,95,55,49,95,99,117,115,116,111,109,105,122,101,0),true ]]);
       let ajaxI: Map<any, any> = new Map([[String.fromCharCode(97,108,116,95,50,95,55,55,0),569], [String.fromCharCode(114,101,115,105,100,101,110,99,101,95,52,95,54,57,0),959], [String.fromCharCode(105,110,99,114,95,103,95,50,0),50]]);
      let modea = filedn.length >= 6956636;
      do {
          let nterstitialm = 1;
          let package_2L = 0.0;
          let animationb: Map<any, any> = new Map([[String.fromCharCode(104,99,108,114,95,112,95,51,54,0),172], [String.fromCharCode(111,99,97,108,95,122,95,56,50,0),211]]);
         filedn = `${filedn.length}`;
         nterstitialm /= Math.max(5, animationb.size << (Math.min(Math.abs(2), 3)));
         package_2L *= parseFloat(`${1 * nterstitialm}`);
         animationb.set(`${package_2L}`, animationb.size % 3);
         if (modea) {
            break;
         }
      } while (modea && ((filedn.length >> (Math.min(5, Math.abs(ajaxI.size)))) < 1));
         navigation3 = `${mbbidf.size}`;
      while (!Array.from(mbbidf.keys()).includes(`${ajaxI.size}`)) {
          let alerti = String.fromCharCode(116,95,54,52,95,100,105,115,97,112,112,101,97,114,97,110,99,101,0);
          let custom6 = 4.0;
          let thumbnaila = String.fromCharCode(101,95,57,51,95,115,101,114,105,97,108,105,122,97,98,108,101,0);
          let gemfileB = String.fromCharCode(108,105,98,118,111,114,98,105,115,95,104,95,50,56,0);
          let bannerx: Array<any> = [749, 202];
         mbbidf.set(`${alerti}`, alerti.length & 1);
         custom6 += parseInt(`${custom6}`) & bannerx.length;
         thumbnaila += `${(gemfileB == String.fromCharCode(100,0) ? gemfileB.length : thumbnaila.length)}`;
         bannerx.push((thumbnaila == String.fromCharCode(113,0) ? thumbnaila.length : parseInt(`${custom6}`)));
         break;
      }
      let containerS = String.fromCharCode(103,95,49,113,110,0) == filedn;
      do {
          let malaysiae = String.fromCharCode(109,95,49,57,95,100,101,108,116,97,115,0);
         filedn += `${malaysiae.length}`;
         if (containerS) {
            break;
         }
      } while ((4 > (ajaxI.size | filedn.length)) && containerS);
      refresh0 = [2 & basketballH.length];
   let detailt = toponc.length <= 9363911;
   do {
       let filledQ = String.fromCharCode(98,108,97,109,101,100,95,98,95,51,54,0);
       let promotion3: Map<any, any> = new Map([[String.fromCharCode(118,95,55,53,95,101,97,114,108,105,101,115,116,0),535], [String.fromCharCode(114,95,53,51,95,114,102,102,116,105,0),256]]);
       let brightness7 = String.fromCharCode(98,95,57,50,95,115,111,117,114,99,101,105,100,0);
       let nterstitialA = 0;
       let streamingh = 4.0;
          let orientation2 = 0.0;
          let largeO = 3;
         nterstitialA &= nterstitialA;
         orientation2 -= parseInt(`${orientation2}`);
         largeO /= Math.max(parseInt(`${orientation2}`) & 2, 2);
      if ((5.6 / (Math.max(10, streamingh))) >= 4.97 && (parseInt(`${streamingh}`) / (Math.max(1, nterstitialA))) >= 4) {
          let nextV = String.fromCharCode(101,109,111,116,105,99,111,110,95,117,95,51,48,0);
          let package_uA: Array<any> = [639, 190];
         streamingh *= package_uA.length | promotion3.size;
         nextV = "3";
         package_uA.push(nextV.length);
      }
       let indicatorV = 2.0;
         brightness7 = `${promotion3.size}`;
         brightness7 = `${nterstitialA / (Math.max(parseInt(`${indicatorV}`), 5))}`;
      for (let v = 0; v < 1; v++) {
          let gemfilek: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,112,95,57,48,0),248], [String.fromCharCode(99,111,110,99,117,114,114,101,110,116,95,56,95,49,48,48,0),670], [String.fromCharCode(103,95,56,49,95,102,114,101,101,97,100,100,114,105,110,102,111,0),790]]);
          let whatsappL = 0.0;
          let miniF = 3.0;
         filledQ += `${2 * parseInt(`${miniF}`)}`;
         gemfilek.set(`${whatsappL}`, parseInt(`${whatsappL}`) >> (Math.min(Math.abs(3), 2)));
         miniF /= Math.max(1, 1);
      }
      if (1.34 <= (indicatorV / 3.68) && 3 <= (parseInt(`${indicatorV}`) / (Math.max(1, nterstitialA)))) {
         nterstitialA *= 2;
      }
      if (5 < (1 * filledQ.length) || (filledQ.length * 1) < 2) {
         filledQ = "2";
      }
         brightness7 += `${promotion3.size + 2}`;
          let save4 = false;
          let calendarH: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,109,95,56,55,0),true ], [String.fromCharCode(97,103,114,101,101,109,101,110,116,95,52,95,55,49,0),true ], [String.fromCharCode(112,95,53,57,95,109,105,109,105,99,0),true ]]);
          let topong = String.fromCharCode(116,111,109,111,114,114,111,119,95,54,95,49,55,0);
         streamingh /= Math.max(5, (String.fromCharCode(90,0) == topong ? promotion3.size : topong.length));
         save4 = null != calendarH.get(`${save4}`);
         calendarH = new Map([[`${calendarH.size}`, calendarH.size ^ 2]]);
      if (4 >= brightness7.length) {
          let indicatorw: Array<any> = [271, 241, 274];
         filledQ = `${filledQ.length}`;
         indicatorw.push(indicatorw.length);
      }
       let rulesc: Array<any> = [String.fromCharCode(119,95,57,56,95,98,108,111,119,102,105,115,104,0), String.fromCharCode(108,95,53,55,95,97,99,99,117,109,117,108,97,116,111,114,0)];
       let playercommoni: Array<any> = [887, 11, 228];
      for (let o = 0; o < 2; o++) {
         playercommoni.push(playercommoni.length);
      }
       let alert5 = String.fromCharCode(115,95,53,57,95,114,101,110,111,114,109,101,0);
       let homed = String.fromCharCode(122,95,57,57,95,115,116,117,102,102,115,116,0);
       let orangen: Array<any> = [247, 625, 701];
       let targetm: Array<any> = [195, 752, 941];
      toponc = [2 / (Math.max(9, footballl.length))];
      if (detailt) {
         break;
      }
   } while ((4 >= (2 ^ basketballH.length)) && detailt);
   for (let r = 0; r < 2; r++) {
       let traminid: Array<any> = [736, 423, 699];
       let large9: Array<any> = [998, 599];
       let stationsh = String.fromCharCode(103,95,49,57,95,119,105,116,110,101,115,115,0);
       let backward6: Map<any, any> = new Map([[String.fromCharCode(113,115,118,100,101,105,110,116,95,101,95,51,57,0),true ], [String.fromCharCode(113,95,50,52,95,105,109,112,108,105,99,105,116,108,121,0),false ], [String.fromCharCode(120,95,52,53,95,112,105,99,116,121,112,101,0),true ]]);
      let gpayD = 6910217 <= traminid.length;
      do {
         traminid = [backward6.size];
         if (gpayD) {
            break;
         }
      } while ((2 < (traminid.length ^ stationsh.length)) && gpayD);
          let upgrade2: Map<any, any> = new Map([[String.fromCharCode(109,98,102,105,108,116,101,114,95,112,95,49,52,0),125], [String.fromCharCode(114,111,119,115,107,105,112,95,106,95,51,52,0),163], [String.fromCharCode(121,95,55,49,95,104,119,102,114,97,109,101,0),15]]);
          let quest5: Array<any> = [267, 191, 263];
          let temperatureV = 5.0;
         traminid = [quest5.length];
         upgrade2 = new Map([[`${upgrade2.size}`, parseInt(`${temperatureV}`)]]);
         quest5.push(parseInt(`${temperatureV}`));
       let mutedV = true;
      while (mutedV) {
         backward6.set(`${mutedV}`, ((mutedV ? 1 : 3) | 3));
         break;
      }
      if (!mutedV) {
         mutedV = mutedV || backward6.size > 55;
      }
         backward6 = new Map([[`${backward6.size}`, large9.length]]);
          let rewindk = String.fromCharCode(99,95,51,53,95,101,97,99,104,0);
          let themec = true;
          let stylex = String.fromCharCode(113,95,54,48,95,97,100,100,114,101,115,115,0);
         large9.push(stationsh.length << (Math.min(Math.abs(3), 4)));
         rewindk = `${(rewindk == String.fromCharCode(50,0) ? (themec ? 2 : 4) : rewindk.length)}`;
         themec = rewindk.startsWith(`${themec}`);
         stylex += `${((themec ? 5 : 4) / (Math.max(1, 6)))}`;
          let animationx = true;
          let danger9 = 3.0;
          let update_gjT: Map<any, any> = new Map([[String.fromCharCode(101,95,57,53,95,109,106,112,101,103,0),true ], [String.fromCharCode(107,95,52,51,95,103,101,110,101,114,97,116,111,114,0),false ], [String.fromCharCode(97,95,56,50,95,98,114,111,119,115,101,0),true ]]);
         traminid.push(3 / (Math.max(10, backward6.size)));
         animationx = !animationx;
         danger9 += parseInt(`${danger9}`) & update_gjT.size;
         update_gjT = new Map([[`${update_gjT.size}`, 3 | update_gjT.size]]);
      if (3 >= (backward6.size % (Math.max(3, large9.length))) || (backward6.size % (Math.max(3, 9))) >= 3) {
         large9.push(stationsh.length);
      }
          let tailW = 0;
          let temperatureA = 3.0;
          let sansW = 1;
         stationsh = `${large9.length / 1}`;
         tailW -= sansW - 2;
         temperatureA -= parseFloat(`${sansW * parseInt(`${temperatureA}`)}`);
      while (stationsh.includes(`${mutedV}`)) {
         stationsh += `${2 | traminid.length}`;
         break;
      }
      let activeV = traminid.length >= 7103263;
      do {
         traminid.push(backward6.size & 1);
         if (activeV) {
            break;
         }
      } while (activeV && (!large9.includes(traminid.length)));
      footballl += `${(basketballH == String.fromCharCode(122,0) ? basketballH.length : refresh0.length)}`;
   }
       let libcrashsdko = String.fromCharCode(115,95,53,55,95,115,121,109,98,111,108,0);
       let yellowG = String.fromCharCode(111,112,116,105,111,110,95,51,95,53,49,0);
       let untickY = String.fromCharCode(112,108,97,99,101,95,120,95,56,49,0);
          let roundx = String.fromCharCode(101,95,55,55,95,100,105,97,108,108,101,100,0);
          let fastL = false;
          let relatedE: Map<any, any> = new Map([[String.fromCharCode(103,95,51,57,95,115,101,101,107,105,110,103,0),731], [String.fromCharCode(109,95,56,53,95,99,114,111,112,112,105,110,103,0),69], [String.fromCharCode(101,95,57,54,95,115,105,103,105,100,0),20]]);
         untickY = `${relatedE.size}`;
         roundx += `${(String.fromCharCode(107,0) == roundx ? roundx.length : roundx.length)}`;
         fastL = roundx == roundx;
         yellowG = `${untickY.length - yellowG.length}`;
      change4 += `${3 - parseInt(`${catagoryb}`)}`;
      libcrashsdko += `${libcrashsdko.length - libcrashsdko.length}`;
       let style6 = 0;
         style6 ^= style6;
          let whatsappLp = String.fromCharCode(103,101,116,100,105,103,105,116,95,55,95,52,56,0);
          let plus2 = String.fromCharCode(116,111,107,101,110,115,95,117,95,51,51,0);
         style6 -= 3 / (Math.max(10, whatsappLp.length));
         whatsappLp += `${(plus2 == String.fromCharCode(65,0) ? plus2.length : plus2.length)}`;
      while ((style6 << (Math.min(Math.abs(2), 4))) == 5) {
          let profileM: Array<any> = [353, 149, 227];
          let adultl = false;
          let guide3 = 0;
         style6 *= 3;
         profileM.push(profileM.length | 2);
         adultl = !adultl;
         guide3 *= profileM.length;
         break;
      }
      notification_ += `${footballl.length >> (Math.min(4, Math.abs(style6)))}`;
      toponc.push(2 & notification_.length);
      footballl = `${toponc.length}`;
      faviconN = `${1 & refresh0.length}`;
   let floaterz = basketballH == String.fromCharCode(100,101,113,99,112,0);
   do {
      basketballH = `${3 << (Math.min(1, faviconN.length))}`;
      if (floaterz) {
         break;
      }
   } while (floaterz && (faviconN != basketballH));
   if (!faviconN.includes(`${refresh0.length}`)) {
       let countryx: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,101,114,95,111,95,54,51,0),String.fromCharCode(112,108,97,99,101,95,51,95,53,48,0)], [String.fromCharCode(119,104,97,116,115,95,48,95,54,54,0),String.fromCharCode(110,95,56,56,95,103,101,109,102,105,108,101,0)], [String.fromCharCode(113,95,56,52,95,97,118,102,114,97,109,101,0),String.fromCharCode(119,95,52,51,95,98,105,108,105,110,0)]]);
       let fieldm = 4;
       let bridgeU = String.fromCharCode(113,117,97,114,116,101,114,95,110,95,49,54,0);
         fieldm -= 2;
         fieldm <<= Math.min(Math.abs(fieldm / (Math.max(3, 4))), 5);
         fieldm >>= Math.min(3, Math.abs(fieldm ^ 2));
         fieldm >>= Math.min(4, Math.abs(fieldm));
      while (1 < (2 ^ countryx.size) || 3 < (2 ^ countryx.size)) {
          let dataJ = 4.0;
          let hook3 = 1.0;
          let reactW: Array<any> = [749, 507];
          let areas = 1;
         fieldm /= Math.max(reactW.length, 4);
         dataJ += areas >> (Math.min(Math.abs(parseInt(`${dataJ}`)), 5));
         hook3 /= Math.max(parseFloat(`${areas}`), 3);
         reactW = [3 & parseInt(`${hook3}`)];
         break;
      }
       let shirtV = 0;
          let klevinX = String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,95,107,95,49,48,0);
          let eighteen7 = String.fromCharCode(111,95,56,49,95,107,98,105,116,0);
          let anytimes: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,50,95,51,52,0),294], [String.fromCharCode(106,95,53,53,95,116,117,112,108,101,0),710]]);
         bridgeU = `${bridgeU.length ^ anytimes.size}`;
         klevinX += `${klevinX.length | eighteen7.length}`;
         eighteen7 += `${eighteen7.length ^ klevinX.length}`;
         anytimes = new Map([[eighteen7, (String.fromCharCode(85,0) == klevinX ? eighteen7.length : klevinX.length)]]);
          let huaweiE = 0;
         fieldm &= countryx.size >> (Math.min(Math.abs(3), 5));
         huaweiE += 1 ^ huaweiE;
      for (let n = 0; n < 1; n++) {
         fieldm %= Math.max(1, 1);
      }
      refresh0.push(bridgeU.length / (Math.max(3, 10)));
   }

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("fillDownloader");
      } else {
        setSeekDirection("componentModity");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let questf: Array<any> = [String.fromCharCode(100,95,52,54,95,102,108,117,115,104,0), String.fromCharCode(114,95,56,53,95,100,101,108,115,117,112,101,114,0)];
    let const_pdO = 3.0;
    let tickh: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,95,56,95,55,57,0),779], [String.fromCharCode(109,95,54,54,95,112,105,116,99,104,102,105,108,116,101,114,0),590]]);
    let interneto: Array<any> = [String.fromCharCode(120,95,56,56,95,115,111,109,101,116,104,105,110,103,0), String.fromCharCode(110,95,56,56,95,100,117,112,108,105,99,97,116,111,114,0)];
    let sendQ: Array<any> = [945, 494];
    let playlistx = String.fromCharCode(115,116,114,101,97,109,97,98,108,101,95,101,95,57,50,0);
    let coreM = 0;
    let agreementl = String.fromCharCode(108,101,103,97,99,121,95,121,95,49,51,0);
    let friendsw = String.fromCharCode(106,95,54,55,95,114,105,103,104,116,0);
    let debugY = String.fromCharCode(101,95,51,48,95,116,105,110,121,0);
      tickh = new Map([[`${const_pdO}`, 3 + parseInt(`${const_pdO}`)]]);
   if (tickh.get(`${coreM}`) != null) {
      tickh = new Map([[`${tickh.size}`, 1 << (Math.min(4, Math.abs(coreM)))]]);
   }
   if (agreementl.length == 4) {
       let minivode = 2.0;
       let resultc = 1.0;
       let giftT = String.fromCharCode(115,110,97,112,112,101,100,95,112,95,57,53,0);
       let watche = 0;
       let bufferD = true;
      for (let c = 0; c < 2; c++) {
         minivode *= parseInt(`${resultc}`);
      }
      if ((watche / (Math.max(giftT.length, 10))) > 4 && (giftT.length / (Math.max(4, 1))) > 4) {
         watche &= (String.fromCharCode(116,0) == giftT ? parseInt(`${minivode}`) : giftT.length);
      }
         watche /= Math.max(watche, 1);
       let smallA = 0.0;
       let filteri = 4.0;
         resultc += 2;
      while (minivode < resultc) {
          let chinasamek = String.fromCharCode(98,97,99,107,119,97,114,100,95,115,95,50,56,0);
         minivode /= Math.max(parseInt(`${resultc}`), 3);
         chinasamek = `${1 >> (Math.min(4, chinasamek.length))}`;
         break;
      }
       let dycreatorD: Map<any, any> = new Map([[String.fromCharCode(111,95,53,51,95,114,97,119,0),584], [String.fromCharCode(109,95,57,49,95,99,111,109,112,114,101,115,115,111,114,0),686], [String.fromCharCode(97,100,100,102,95,121,95,51,50,0),349]]);
       let assist9: Map<any, any> = new Map([[String.fromCharCode(112,95,50,50,95,105,114,114,101,108,101,118,97,110,116,0),629], [String.fromCharCode(115,101,101,95,111,95,53,51,0),629], [String.fromCharCode(117,95,49,49,95,97,114,99,104,105,118,101,0),25]]);
      for (let z = 0; z < 2; z++) {
         giftT += `${watche / (Math.max(assist9.size, 7))}`;
      }
      if ((giftT.length + 5) <= 1) {
         watche += giftT.length ^ 3;
      }
         minivode += parseInt(`${minivode}`) % 1;
      for (let v = 0; v < 3; v++) {
         filteri /= Math.max(1 / (Math.max(10, parseInt(`${minivode}`))), 4);
      }
         assist9.set(giftT, giftT.length ^ 3);
          let mintegrala = String.fromCharCode(109,95,52,51,95,108,111,99,97,108,105,122,97,98,108,101,0);
          let sinab = String.fromCharCode(98,95,53,53,95,116,105,109,101,115,116,97,109,112,115,0);
          let feedbackF = String.fromCharCode(114,101,109,111,116,101,95,50,95,51,49,0);
         dycreatorD = new Map([[`${dycreatorD.size}`, dycreatorD.size - 3]]);
         mintegrala += "2";
         sinab += "1";
         feedbackF = `${mintegrala.length + feedbackF.length}`;
       let screenw = 1;
       let sendW = 2;
      for (let t = 0; t < 1; t++) {
         giftT += `${parseInt(`${minivode}`) | sendW}`;
      }
      agreementl += `${playlistx.length}`;
   }
   if (!interneto.includes(coreM)) {
      interneto = [2 & sendQ.length];
   }
   let championG = tickh.size <= 8863701;
   do {
       let schedulea = 4;
       let condensedh = 5;
       let taiwane = 3;
       let singlez = String.fromCharCode(109,95,56,50,95,111,117,116,108,105,101,114,0);
      if (singlez.includes(`${taiwane}`)) {
         taiwane %= Math.max(singlez.length, 2);
      }
          let videoM = String.fromCharCode(102,105,110,103,101,114,95,108,95,56,56,0);
          let twitterN: Array<any> = [658, 575];
         taiwane <<= Math.min(2, Math.abs(taiwane & condensedh));
         videoM = `${(videoM == String.fromCharCode(66,0) ? twitterN.length : videoM.length)}`;
         twitterN = [2 + twitterN.length];
      for (let e = 0; e < 2; e++) {
          let default_6x: Array<any> = [785, 405];
          let membershipi = 2.0;
          let pausev = 2;
          let historyi = String.fromCharCode(99,121,99,108,101,95,97,95,51,57,0);
          let chartB: Array<any> = [String.fromCharCode(112,95,57,50,95,114,101,97,100,105,110,0), String.fromCharCode(97,117,116,111,108,111,99,107,95,53,95,52,48,0)];
         condensedh >>= Math.min(1, Math.abs((singlez == String.fromCharCode(54,0) ? condensedh : singlez.length)));
         default_6x = [chartB.length];
         membershipi *= chartB.length;
         pausev -= 1;
         historyi += "3";
      }
         singlez = `${condensedh}`;
      for (let i = 0; i < 1; i++) {
         taiwane ^= condensedh;
      }
         taiwane *= schedulea & taiwane;
      for (let v = 0; v < 1; v++) {
          let countdownl = String.fromCharCode(115,95,54,95,98,111,117,110,100,115,0);
          let crossf = 3.0;
          let popup4: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,97,116,101,95,101,95,57,51,0),String.fromCharCode(116,119,105,116,116,101,114,95,117,95,52,50,0)], [String.fromCharCode(97,115,102,114,116,112,95,50,95,55,57,0),String.fromCharCode(100,95,50,48,95,112,114,101,102,105,120,101,115,0)]]);
          let sharedf: Array<any> = [578, 225];
          let alertH = String.fromCharCode(109,95,56,52,95,102,105,100,99,116,0);
         singlez += `${alertH.length * 2}`;
         countdownl += `${(String.fromCharCode(95,0) == countdownl ? countdownl.length : parseInt(`${crossf}`))}`;
         crossf /= Math.max(4, parseFloat(`${popup4.size + countdownl.length}`));
         popup4 = new Map([[`${popup4.size}`, countdownl.length]]);
         sharedf.push(1);
         alertH = `${(String.fromCharCode(95,0) == countdownl ? countdownl.length : parseInt(`${crossf}`))}`;
      }
      if (5 <= (3 << (Math.min(5, singlez.length)))) {
          let plash5 = 4.0;
          let stepi = 4.0;
          let yellowC = 5;
          let selecteds = 4.0;
          let macauv = String.fromCharCode(100,117,114,105,110,103,95,110,95,51,52,0);
         singlez += "1";
         plash5 *= parseInt(`${selecteds}`);
         stepi /= Math.max(2, (macauv == String.fromCharCode(116,0) ? macauv.length : parseInt(`${plash5}`)));
         yellowC |= parseInt(`${stepi}`) % (Math.max(8, parseInt(`${plash5}`)));
         selecteds -= parseInt(`${stepi}`);
      }
      let robotoA = 5509538 >= taiwane;
      do {
          let dialogr = 1.0;
          let transferV = 2.0;
          let twitter8 = String.fromCharCode(108,95,51,56,95,100,99,111,110,108,121,0);
         taiwane += twitter8.length;
         dialogr -= parseInt(`${transferV}`);
         twitter8 += `${parseInt(`${transferV}`) | 2}`;
         if (robotoA) {
            break;
         }
      } while ((3 == (taiwane / (Math.max(3, singlez.length))) || 1 == (singlez.length / (Math.max(3, 5)))) && robotoA);
      if ((condensedh & taiwane) >= 5) {
         condensedh *= 2;
      }
          let paginationR = String.fromCharCode(119,95,55,54,95,97,108,108,111,119,0);
          let sheetX = false;
         taiwane *= schedulea;
         paginationR += `${(1 | (sheetX ? 4 : 4))}`;
         sheetX = !sheetX || paginationR.length > 89;
      for (let o = 0; o < 1; o++) {
          let tumbnailw = 3;
          let typesq = String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,118,95,53,56,0);
          let traminik: Map<any, any> = new Map([[String.fromCharCode(104,95,53,50,95,101,120,112,108,105,99,105,116,108,121,0),770], [String.fromCharCode(116,95,53,55,95,99,117,114,115,111,114,115,0),136], [String.fromCharCode(117,95,50,54,95,115,98,99,100,101,99,0),460]]);
          let popupk = false;
         taiwane *= tumbnailw / (Math.max(taiwane, 3));
         tumbnailw += (traminik.size - (popupk ? 2 : 1));
         typesq += `${((popupk ? 3 : 1) % 3)}`;
         traminik.set(`${popupk}`, (traminik.size & (popupk ? 4 : 2)));
      }
      tickh.set(playlistx, 2 << (Math.min(4, sendQ.length)));
      if (championG) {
         break;
      }
   } while ((1.20 >= (2.3 / (Math.max(2, const_pdO))) && (parseInt(`${const_pdO}`) / (Math.max(tickh.size, 4))) >= 1) && championG);
   let loginZ = 9280990 >= sendQ.length;
   do {
       let resendv = 0.0;
       let injuryq = 0;
         resendv *= parseFloat(`${parseInt(`${resendv}`)}`);
         injuryq &= injuryq;
          let auto_ubs = 2.0;
          let fullc: Map<any, any> = new Map([[String.fromCharCode(113,95,56,95,115,104,111,114,116,99,117,116,115,0),String.fromCharCode(122,95,52,95,104,112,101,108,100,115,112,0)], [String.fromCharCode(122,95,52,52,95,111,117,116,108,105,110,107,0),String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,97,95,49,49,0)], [String.fromCharCode(118,95,53,52,95,105,110,112,117,116,116,101,109,0),String.fromCharCode(99,95,55,57,95,109,105,109,105,99,0)]]);
         resendv *= parseFloat(`${fullc.size & parseInt(`${resendv}`)}`);
         auto_ubs -= parseInt(`${auto_ubs}`);
         fullc.set(`${auto_ubs}`, parseInt(`${auto_ubs}`) << (Math.min(Math.abs(parseInt(`${auto_ubs}`)), 4)));
      if (resendv < injuryq) {
         resendv -= parseFloat(`${parseInt(`${resendv}`) ^ 2}`);
      }
         injuryq %= Math.max(parseInt(`${resendv}`), 5);
       let m_managerQ = false;
       let flyerS = true;
      sendQ = [parseInt(`${const_pdO}`) & 1];
      if (loginZ) {
         break;
      }
   } while (((sendQ.length | 1) == 2 && 3 == (playlistx.length | 1)) && loginZ);
      agreementl += `${interneto.length >> (Math.min(Math.abs(2), 5))}`;
   let termsT = sendQ.length <= 8313172;
   do {
      sendQ.push(3 >> (Math.min(5, playlistx.length)));
      if (termsT) {
         break;
      }
   } while ((agreementl.length < sendQ.length) && termsT);
   for (let b = 0; b < 2; b++) {
      const_pdO += agreementl.length;
   }
   for (let f = 0; f < 1; f++) {
      const_pdO *= 1 / (Math.max(5, interneto.length));
   }
   while (!playlistx.startsWith(`${sendQ.length}`)) {
       let untickx = String.fromCharCode(115,104,105,112,112,105,110,103,95,109,95,49,53,0);
       let mailv = 1.0;
       let types4 = String.fromCharCode(97,118,101,114,97,103,101,105,105,114,100,95,48,95,57,57,0);
       let shrink9 = 4.0;
       let windZ = String.fromCharCode(99,95,57,48,95,99,111,112,105,101,100,0);
      let fieldX = String.fromCharCode(50,115,97,107,113,0) == untickx;
      do {
         untickx = `${untickx.length & parseInt(`${mailv}`)}`;
         if (fieldX) {
            break;
         }
      } while (fieldX && (4 < untickx.length));
          let nativey = String.fromCharCode(109,97,114,107,101,114,115,95,99,95,50,57,0);
         types4 += `${parseInt(`${shrink9}`)}`;
         nativey += "1";
          let leagueI = 0.0;
          let watch8 = false;
          let philippinesP: Map<any, any> = new Map([[String.fromCharCode(99,95,56,56,95,113,105,97,110,0),false ], [String.fromCharCode(122,95,56,95,119,105,116,104,100,114,97,119,0),false ], [String.fromCharCode(117,95,49,52,95,116,97,98,108,101,108,105,109,0),true ]]);
         shrink9 *= parseFloat(`${parseInt(`${mailv}`) | 2}`);
         leagueI -= philippinesP.size;
         watch8 = philippinesP.size > 100;
          let stringsX = String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,104,95,52,55,0);
          let lessN = 1;
          let alert4: Array<any> = [354, 644, 978];
         mailv *= 3 % (Math.max(3, stringsX.length));
         stringsX = `${3 | alert4.length}`;
         lessN |= 2;
         alert4 = [lessN ^ alert4.length];
         untickx = `${(untickx == String.fromCharCode(83,0) ? untickx.length : parseInt(`${shrink9}`))}`;
       let overlayV = String.fromCharCode(120,95,49,48,48,95,102,111,114,109,97,116,116,101,114,0);
       let commentt = String.fromCharCode(105,95,52,57,95,112,108,97,99,101,104,111,108,100,101,114,115,0);
      for (let l = 0; l < 1; l++) {
          let details5 = String.fromCharCode(120,95,49,48,48,95,106,100,115,97,109,112,108,101,0);
          let transferb = false;
          let stringW = String.fromCharCode(103,101,116,110,112,97,115,115,101,115,95,109,95,53,0);
          let countdowni = 3.0;
         untickx += `${stringW.length}`;
         details5 = `${details5.length}`;
         transferb = 46.78 < countdowni;
         stringW += `${(parseInt(`${countdowni}`) | (transferb ? 2 : 2))}`;
      }
          let default_e7: Array<any> = [783, 903, 764];
          let castM: Map<any, any> = new Map([[String.fromCharCode(116,105,109,105,110,103,115,95,103,95,53,51,0),String.fromCharCode(98,97,115,101,103,112,104,95,97,95,55,52,0)], [String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,53,95,48,0),String.fromCharCode(99,114,101,97,116,101,100,95,106,95,49,53,0)]]);
         commentt = `${types4.length}`;
         default_e7.push(castM.size << (Math.min(default_e7.length, 1)));
         castM = new Map([[`${castM.size}`, castM.size | default_e7.length]]);
      if (types4.length < untickx.length) {
         types4 = `${parseInt(`${mailv}`)}`;
      }
      let arrowa = commentt.length >= 5819558;
      do {
          let ewardedJ = true;
         commentt = "2";
         ewardedJ = !ewardedJ;
         if (arrowa) {
            break;
         }
      } while ((3 < (5 + parseInt(`${mailv}`)) && 4 < (commentt.length | 5)) && arrowa);
       let championY = String.fromCharCode(118,95,50,54,95,100,97,121,115,0);
         championY += `${overlayV.length >> (Math.min(Math.abs(3), 3))}`;
          let submity = String.fromCharCode(103,95,56,51,95,112,117,98,101,120,112,0);
          let typesl = 5.0;
          let fast7 = 4.0;
         overlayV = `${untickx.length}`;
         submity = `${submity.length}`;
         typesl += parseInt(`${fast7}`) << (Math.min(Math.abs(parseInt(`${typesl}`)), 4));
         fast7 += 3 - submity.length;
      if (!overlayV.endsWith(`${windZ.length}`)) {
         overlayV = `${(String.fromCharCode(49,0) == windZ ? windZ.length : commentt.length)}`;
      }
      while (windZ.length < untickx.length) {
          let gradleN = String.fromCharCode(108,97,109,112,95,98,95,57,57,0);
          let membershipU = String.fromCharCode(120,95,50,52,95,105,116,101,114,97,116,105,111,110,115,0);
          let chinaB = 1.0;
          let filedw = String.fromCharCode(106,115,105,109,100,101,120,116,95,56,95,51,56,0);
          let friendsu = 4.0;
         windZ = `${gradleN.length}`;
         gradleN = `${(filedw == String.fromCharCode(116,0) ? parseInt(`${chinaB}`) : filedw.length)}`;
         membershipU += `${filedw.length}`;
         chinaB *= parseFloat(`${1}`);
         friendsu += filedw.length;
         break;
      }
      sendQ = [parseInt(`${shrink9}`) << (Math.min(1, Math.abs(2)))];
      break;
   }
   while ((questf.length * 3) >= 3) {
      questf.push(1);
      break;
   }
       let sans_ = 5.0;
         sans_ -= parseFloat(`${parseInt(`${sans_}`) | 1}`);
          let style6: Array<any> = [378, 521, 645];
          let mbnativeB = 2;
          let temperatureV = 2.0;
         sans_ -= parseFloat(`${style6.length}`);
         style6.push(3);
         mbnativeB /= Math.max(3, mbnativeB);
         temperatureV += mbnativeB;
      while (3.56 <= (1.98 + sans_) && (sans_ + 1.98) <= 1.4) {
         sans_ /= Math.max(5, parseFloat(`${parseInt(`${sans_}`)}`));
         break;
      }
      const_pdO -= playlistx.length;
      const_pdO *= agreementl.length - interneto.length;
   while (4 <= (sendQ.length / (Math.max(questf.length, 1)))) {
      sendQ.push(1 << (Math.min(1, questf.length)));
      break;
   }
      playlistx = `${tickh.size}`;
       let canvasD = String.fromCharCode(100,101,118,101,108,111,112,101,114,95,115,95,55,52,0);
       let plashm = String.fromCharCode(116,111,108,108,95,101,95,54,49,0);
       let countdown2 = String.fromCharCode(102,99,110,116,108,95,111,95,53,51,0);
         plashm += "1";
         plashm += `${plashm.length | countdown2.length}`;
          let expandt = 2.0;
         plashm = "3";
         expandt -= parseInt(`${expandt}`) * parseInt(`${expandt}`);
      for (let m = 0; m < 3; m++) {
         plashm = `${(plashm == String.fromCharCode(76,0) ? canvasD.length : plashm.length)}`;
      }
      if (countdown2.includes(plashm)) {
         plashm = `${(String.fromCharCode(107,0) == countdown2 ? plashm.length : countdown2.length)}`;
      }
      while (countdown2 == String.fromCharCode(100,0)) {
          let videoP = 2.0;
          let bellK = String.fromCharCode(112,100,115,95,111,95,49,57,0);
          let mapping0: Array<any> = [499, 501, 549];
          let friendsy = 2.0;
          let unselecteds = String.fromCharCode(106,95,53,51,95,104,97,118,101,101,118,101,110,116,115,0);
         plashm += `${bellK.length}`;
         videoP += parseFloat(`${unselecteds.length % 3}`);
         bellK = `${unselecteds.length >> (Math.min(5, mapping0.length))}`;
         mapping0.push(parseInt(`${videoP}`) & 1);
         friendsy *= parseFloat(`${parseInt(`${friendsy}`) - parseInt(`${videoP}`)}`);
         break;
      }
      if (plashm.length > 2) {
         plashm += `${canvasD.length}`;
      }
         countdown2 += `${(plashm == String.fromCharCode(102,0) ? countdown2.length : plashm.length)}`;
         countdown2 = `${plashm.length}`;
      sendQ = [3];
      questf = [tickh.size];
      coreM <<= Math.min(2, Math.abs(friendsw.length << (Math.min(1, Math.abs(tickh.size)))));

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
       let b_locko = 2;
    let floatern = 4.0;
    let righta: Map<any, any> = new Map([[String.fromCharCode(103,101,111,112,111,108,121,95,107,95,51,55,0),true ], [String.fromCharCode(115,95,54,53,95,99,108,97,105,109,0),true ], [String.fromCharCode(105,115,97,108,110,117,109,95,103,95,55,52,0),false ]]);
    let injury8 = 4;
    let mbnativeadvancedm = String.fromCharCode(115,112,97,110,95,109,95,52,57,0);
    let indicatorE = 0;
    let unselectedK = false;
    let sellq = true;
    let recommendationD = String.fromCharCode(107,95,55,55,95,99,111,110,118,101,114,116,101,100,0);
    let background9 = 1.0;
    let internet0 = 3.0;
    let usernameP = String.fromCharCode(108,95,56,51,95,116,111,112,0);
    let changeo = String.fromCharCode(105,95,52,55,95,105,99,111,110,105,99,0);
       let forwardE = String.fromCharCode(109,95,55,54,95,112,101,114,109,117,116,101,0);
         forwardE = `${forwardE.length}`;
      if (5 > forwardE.length) {
         forwardE += `${2 * forwardE.length}`;
      }
          let checkboxK = 5.0;
         forwardE += `${forwardE.length}`;
         checkboxK += parseInt(`${checkboxK}`);
      recommendationD = `${(mbnativeadvancedm == String.fromCharCode(107,0) ? mbnativeadvancedm.length : indicatorE)}`;
      injury8 *= 3;
   let starl = 6799040 >= injury8;
   do {
      injury8 *= righta.size % 1;
      if (starl) {
         break;
      }
   } while (starl && (5.95 == (injury8 + floatern)));
   while ((1 | indicatorE) >= 3) {
       let assists = 2.0;
       let shareD = false;
       let transferu = 1;
       let indicatorV = true;
         indicatorV = shareD || transferu < 11;
          let network6 = 1.0;
          let klevinA = 2.0;
          let orientationi = 1.0;
         transferu *= (transferu >> (Math.min(1, Math.abs((indicatorV ? 4 : 1)))));
         network6 *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${orientationi}`)), 2))}`);
         klevinA /= Math.max(parseFloat(`${parseInt(`${network6}`)}`), 5);
         orientationi -= 1;
          let models = 2.0;
          let sortw = 4.0;
          let miniI = 4.0;
         transferu <<= Math.min(Math.abs(3), 1);
         models -= parseInt(`${sortw}`);
         miniI /= Math.max(parseFloat(`${parseInt(`${sortw}`) & parseInt(`${miniI}`)}`), 4);
       let commonU: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,104,97,115,104,95,105,95,55,56,0),true ], [String.fromCharCode(99,95,55,95,105,110,112,117,116,0),false ]]);
       let selection3: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,108,105,98,95,49,95,57,48,0),false ], [String.fromCharCode(116,95,49,56,95,102,105,118,101,0),true ], [String.fromCharCode(99,95,52,52,95,99,111,109,109,97,110,100,115,0),true ]]);
          let kuaishouL = 4.0;
          let orange7 = 2.0;
          let submity = 3;
         commonU.set(`${selection3.size}`, 2 >> (Math.min(4, Math.abs(commonU.size))));
         kuaishouL *= parseFloat(`${submity | 1}`);
         orange7 += parseInt(`${orange7}`);
         submity >>= Math.min(1, Math.abs(submity));
      if (!indicatorV || 5 > (commonU.size ^ 5)) {
         commonU = new Map([[`${transferu}`, 3]]);
      }
          let away7 = String.fromCharCode(99,95,57,56,95,101,98,117,108,97,115,0);
         indicatorV = !indicatorV;
         away7 += `${away7.length}`;
      for (let m = 0; m < 3; m++) {
         shareD = (selection3.size ^ commonU.size) >= 8;
      }
      while (5 > selection3.size) {
         transferu %= Math.max(1, 3);
         break;
      }
       let renewj = String.fromCharCode(97,95,52,50,95,99,111,109,112,97,110,121,0);
       let share2 = String.fromCharCode(100,101,100,117,112,101,95,110,95,52,51,0);
          let resulty = String.fromCharCode(99,108,111,115,101,95,98,95,49,48,48,0);
          let analytics1: Array<any> = [736, 496, 720];
          let disconnectedz = true;
         selection3.set(`${disconnectedz}`, 2 + selection3.size);
         resulty = `${resulty.length}`;
         analytics1 = [resulty.length];
      while ((transferu % (Math.max(share2.length, 4))) == 3) {
         transferu %= Math.max(parseInt(`${assists}`), 5);
         break;
      }
      b_locko ^= transferu - 1;
      break;
   }
   if (1 <= (3 >> (Math.min(5, Math.abs(b_locko)))) || 3 <= (b_locko >> (Math.min(Math.abs(3), 3)))) {
      b_locko >>= Math.min(Math.abs(1 - parseInt(`${background9}`)), 3);
   }
   if (b_locko <= internet0) {
      b_locko >>= Math.min(Math.abs(((sellq ? 3 : 2) + b_locko)), 1);
   }
   if (!sellq || unselectedK) {
      sellq = internet0 < 22.22;
   }
      floatern /= Math.max(mbnativeadvancedm.length, 2);
      righta = new Map([[`${background9}`, b_locko]]);
   if (sellq) {
      sellq = !sellq;
   }
   for (let l = 0; l < 1; l++) {
      internet0 += parseFloat(`${indicatorE}`);
   }
      floatern += recommendationD.length;
      righta = new Map([[recommendationD, ((sellq ? 3 : 5))]]);
   for (let v = 0; v < 1; v++) {
       let logoD = true;
       let rank3 = 5.0;
         logoD = !logoD || rank3 > 26.88;
         logoD = rank3 > 16.25 && logoD;
      let filedF = 4990780.0 >= rank3;
      do {
         rank3 /= Math.max(5, parseInt(`${rank3}`) << (Math.min(5, Math.abs(2))));
         if (filedF) {
            break;
         }
      } while ((5.34 >= rank3 && 3.14 >= (5.34 * rank3)) && filedF);
      for (let c = 0; c < 2; c++) {
         rank3 /= Math.max(parseInt(`${rank3}`) & 1, 1);
      }
      let selectedl = 6965814.0 >= rank3;
      do {
          let verticalz: Array<any> = [935, 55];
          let light1 = 3.0;
          let popupS = 2.0;
          let disconnected5 = String.fromCharCode(99,116,116,115,95,56,95,53,57,0);
          let analyticsL = String.fromCharCode(115,119,105,116,99,104,101,114,95,100,95,51,52,0);
         rank3 *= analyticsL.length - 2;
         verticalz.push(disconnected5.length);
         light1 -= verticalz.length + 1;
         popupS -= 2 >> (Math.min(Math.abs(parseInt(`${popupS}`)), 3));
         disconnected5 += `${parseInt(`${popupS}`)}`;
         analyticsL = `${disconnected5.length}`;
         if (selectedl) {
            break;
         }
      } while (selectedl && (1.94 >= rank3));
      if (5.46 >= (rank3 + 4.16) && logoD) {
         rank3 -= ((logoD ? 3 : 4) & parseInt(`${rank3}`));
      }
      background9 *= injury8 & parseInt(`${floatern}`);
   }
   while (!sellq) {
      sellq = !usernameP.includes(`${floatern}`);
      break;
   }
   for (let q = 0; q < 3; q++) {
      floatern *= ((unselectedK ? 4 : 4) - 2);
   }
   while (Array.from(righta.keys()).includes(`${b_locko}`)) {
       let floaterX = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,95,116,95,50,50,0);
       let typingz = String.fromCharCode(108,95,51,49,95,98,108,111,99,107,113,117,111,116,101,0);
       let leftj = 2;
       let dicen = String.fromCharCode(102,116,118,99,108,95,104,95,54,51,0);
         leftj &= 3 - typingz.length;
          let resultP: Array<any> = [String.fromCharCode(120,95,52,56,95,103,114,101,101,100,121,0), String.fromCharCode(118,95,56,57,95,105,115,99,111,118,101,114,0), String.fromCharCode(108,97,98,101,108,101,100,95,52,95,50,54,0)];
          let plashG = String.fromCharCode(109,105,115,109,97,116,99,104,95,120,95,51,55,0);
          let memberw = String.fromCharCode(111,117,116,103,111,105,110,103,95,110,95,54,54,0);
         leftj *= typingz.length;
         resultP.push(1);
         plashG += `${plashG.length}`;
         memberw += `${2 >> (Math.min(5, plashG.length))}`;
      let resulti = 7276680 <= leftj;
      do {
         leftj >>= Math.min(3, typingz.length);
         if (resulti) {
            break;
         }
      } while (resulti && (dicen.length <= 5));
      for (let n = 0; n < 3; n++) {
         floaterX = `${dicen.length * floaterX.length}`;
      }
      while (5 < typingz.length) {
         typingz = "3";
         break;
      }
      let twitterY = dicen == String.fromCharCode(56,56,105,98,100,95,114,0);
      do {
         dicen = `${typingz.length}`;
         if (twitterY) {
            break;
         }
      } while (twitterY && (4 >= leftj));
         floaterX = `${dicen.length}`;
         leftj -= (dicen == String.fromCharCode(100,0) ? dicen.length : leftj);
         typingz = `${typingz.length + 2}`;
      while (3 < floaterX.length && typingz.length < 3) {
         typingz = `${dicen.length}`;
         break;
      }
      if (!floaterX.startsWith(`${typingz.length}`)) {
         typingz += `${3 % (Math.max(10, floaterX.length))}`;
      }
         typingz = `${typingz.length % 1}`;
      righta = new Map([[`${indicatorE}`, indicatorE]]);
      break;
   }
       let promotion7 = String.fromCharCode(115,117,109,120,95,98,95,51,53,0);
       let shrinkK = false;
       let reducerc = 1.0;
          let disconnectedw: Map<any, any> = new Map([[String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,48,95,57,0),true ], [String.fromCharCode(112,97,110,95,111,95,50,49,0),false ]]);
         shrinkK = disconnectedw.size >= parseInt(`${reducerc}`);
         promotion7 += `${((shrinkK ? 5 : 1) - parseInt(`${reducerc}`))}`;
       let ballS = String.fromCharCode(99,111,114,114,101,99,116,105,110,103,95,105,95,54,52,0);
       let chinab = String.fromCharCode(119,95,49,54,95,101,112,108,121,0);
         chinab += "3";
      for (let d = 0; d < 1; d++) {
         chinab = `${parseInt(`${reducerc}`) + 3}`;
      }
          let profile_ = 5;
         chinab = `${(parseInt(`${reducerc}`) / (Math.max(6, (shrinkK ? 2 : 4))))}`;
         profile_ ^= profile_ % (Math.max(profile_, 2));
      if (ballS.length > 2) {
         ballS += `${ballS.length}`;
      }
         shrinkK = 4.95 > reducerc;
         chinab = `${chinab.length}`;
      injury8 ^= b_locko;
       let calendarr = false;
      while (calendarr && calendarr) {
         calendarr = !calendarr;
         break;
      }
      for (let t = 0; t < 2; t++) {
         calendarr = !calendarr;
      }
      if (calendarr) {
          let specD = String.fromCharCode(116,95,50,53,95,113,110,111,115,0);
          let chartF = true;
          let analyticj = false;
          let recommendationc = String.fromCharCode(99,95,56,48,95,117,110,115,97,116,105,115,102,105,101,100,0);
          let floater0 = 3.0;
         calendarr = recommendationc.endsWith(`${analyticj}`);
         specD = `${specD.length}`;
         chartF = !chartF;
         analyticj = (((chartF ? 77 : specD.length) | specD.length) >= 77);
         recommendationc = `${(String.fromCharCode(121,0) == specD ? specD.length : (chartF ? 1 : 2))}`;
         floater0 *= parseInt(`${floater0}`) << (Math.min(1, Math.abs(2)));
      }
      floatern *= parseInt(`${floatern}`) << (Math.min(Math.abs(righta.size), 4));
   while ((background9 / 4.50) <= 4.61) {
      b_locko |= (usernameP == String.fromCharCode(49,0) ? parseInt(`${internet0}`) : usernameP.length);
      break;
   }
      sellq = (righta.size + parseInt(`${background9}`)) > 90;
      b_locko %= Math.max(2, 2);
   while (3.34 == internet0) {
       let langkeyM = String.fromCharCode(114,95,49,56,95,115,110,112,114,105,110,116,102,0);
       let event6 = 1.0;
      if (4.54 > (event6 + langkeyM.length) && 2.13 > (event6 + 4.54)) {
          let downm: Map<any, any> = new Map([[String.fromCharCode(102,95,52,95,104,105,103,104,98,105,116,100,101,112,116,104,0),570], [String.fromCharCode(101,95,49,52,95,102,97,99,101,115,0),948], [String.fromCharCode(97,95,49,54,95,111,98,106,101,99,116,115,0),208]]);
          let register_rh = String.fromCharCode(97,95,54,95,98,111,100,121,0);
          let clearB = 4.0;
         event6 /= Math.max(parseInt(`${clearB}`) ^ register_rh.length, 2);
         downm.set(`${downm.size}`, downm.size >> (Math.min(Math.abs(1), 4)));
         register_rh += `${downm.size}`;
      }
         event6 += langkeyM.length << (Math.min(2, Math.abs(parseInt(`${event6}`))));
       let reactnativejsv = String.fromCharCode(115,101,99,116,111,114,95,97,95,52,0);
      if (reactnativejsv != String.fromCharCode(49,0) || langkeyM != String.fromCharCode(72,0)) {
         langkeyM += `${1 >> (Math.min(1, langkeyM.length))}`;
      }
      while (1.71 <= (event6 * 2.7) || (3 / (Math.max(2, reactnativejsv.length))) <= 3) {
         reactnativejsv = `${(String.fromCharCode(84,0) == reactnativejsv ? reactnativejsv.length : parseInt(`${event6}`))}`;
         break;
      }
      let countdownE = event6 <= 8304125.0;
      do {
         event6 += reactnativejsv.length - parseInt(`${event6}`);
         if (countdownE) {
            break;
         }
      } while ((langkeyM.endsWith(`${event6}`)) && countdownE);
      injury8 *= parseInt(`${background9}`) * 2;
      break;
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
       let dycreatorm = String.fromCharCode(122,95,53,57,95,115,99,97,108,101,109,111,100,101,0);
    let chinasameK: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,114,101,103,105,115,116,101,114,101,114,0),true ], [String.fromCharCode(114,101,115,105,122,101,100,95,53,95,56,56,0),true ]]);
    let videocommonU = String.fromCharCode(115,95,55,52,95,112,114,111,118,105,115,105,111,110,0);
    let sentryj = String.fromCharCode(116,104,101,109,101,100,95,118,95,57,57,0);
    let model2: Map<any, any> = new Map([[String.fromCharCode(105,100,108,101,95,113,95,49,48,0),250], [String.fromCharCode(97,116,111,98,111,111,108,95,121,95,51,56,0),702]]);
    let action4 = String.fromCharCode(108,111,115,116,95,112,95,50,49,0);
    let heji0 = true;
      chinasameK.set(sentryj, 3);
   while (action4.length >= 2 && heji0) {
      action4 = `${dycreatorm.length}`;
      break;
   }
   let selectionI = model2.size >= 8053316;
   do {
      model2.set(videocommonU, videocommonU.length);
      if (selectionI) {
         break;
      }
   } while (selectionI && (model2.size == action4.length));
   if (dycreatorm.includes(action4)) {
      dycreatorm += `${chinasameK.size << (Math.min(Math.abs(1), 3))}`;
   }
   if (!videocommonU.startsWith(`${chinasameK.size}`)) {
       let weiboW = 3;
       let thailandw = String.fromCharCode(108,95,53,95,100,102,115,116,0);
       let pauseE = 3.0;
       let screen2 = 4;
          let verticalf = 4.0;
          let anythinkq = String.fromCharCode(108,111,103,111,117,116,95,103,95,50,55,0);
         pauseE /= Math.max(parseFloat(`${parseInt(`${verticalf}`) >> (Math.min(anythinkq.length, 4))}`), 4);
      while ((weiboW * 5) >= 2 || (weiboW * thailandw.length) >= 5) {
          let sentryb = 2.0;
          let thailand4 = 5.0;
          let q_managerS = true;
          let indicatorW = true;
         thailandw += `${parseInt(`${thailand4}`) + screen2}`;
         sentryb *= parseInt(`${sentryb}`) & 2;
         thailand4 -= parseFloat(`${parseInt(`${sentryb}`) ^ 2}`);
         q_managerS = (indicatorW ? q_managerS : indicatorW);
         break;
      }
          let privacy3 = false;
          let leftH = 3.0;
         thailandw = `${2 & thailandw.length}`;
         privacy3 = !privacy3;
         leftH *= 1 ^ parseInt(`${leftH}`);
         weiboW %= Math.max(4, thailandw.length % 1);
         screen2 -= weiboW;
          let mutedh = 0.0;
         screen2 *= parseInt(`${pauseE}`) / 2;
         mutedh += parseInt(`${mutedh}`);
         thailandw = `${parseInt(`${pauseE}`) * screen2}`;
      while (3.98 <= (pauseE * 3.43) && 3.14 <= (pauseE * 3.43)) {
         screen2 ^= parseInt(`${pauseE}`);
         break;
      }
         screen2 *= screen2 + 3;
      for (let f = 0; f < 2; f++) {
         pauseE /= Math.max(parseFloat(`${3}`), 2);
      }
      for (let b = 0; b < 1; b++) {
          let baiduQ = String.fromCharCode(109,95,57,54,95,119,97,115,116,101,100,0);
         screen2 <<= Math.min(3, Math.abs(2 % (Math.max(4, screen2))));
         baiduQ += `${baiduQ.length / (Math.max(5, baiduQ.length))}`;
      }
      if ((pauseE + 4.43) >= 4.67 && (pauseE + 4.43) >= 4.93) {
         weiboW <<= Math.min(Math.abs((String.fromCharCode(54,0) == thailandw ? parseInt(`${pauseE}`) : thailandw.length)), 4);
      }
      chinasameK.set(sentryj, ((heji0 ? 3 : 3) ^ 1));
   }
   if ((5 | model2.size) >= 4 && 5 >= (videocommonU.length | model2.size)) {
      model2.set(dycreatorm, 1 - action4.length);
   }
      sentryj = `${(action4.length % (Math.max(4, (heji0 ? 4 : 1))))}`;

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

       let sourceH: Array<any> = [871, 380];
       let cornerQ = String.fromCharCode(103,95,52,56,95,99,112,111,115,0);
       let charte: Array<any> = [616, 585, 707];
      let ajaxC = String.fromCharCode(118,110,57,104,0) == cornerQ;
      do {
          let fieldq = true;
          let vertical3 = String.fromCharCode(99,97,118,112,95,48,95,53,56,0);
          let themen = String.fromCharCode(114,95,56,53,95,99,103,105,109,97,103,101,0);
         cornerQ = `${3 << (Math.min(5, cornerQ.length))}`;
         fieldq = 98 == themen.length || vertical3.length == 98;
         vertical3 += `${3 | vertical3.length}`;
         themen += `${vertical3.length}`;
         if (ajaxC) {
            break;
         }
      } while (ajaxC && (5 == (sourceH.length - cornerQ.length)));
      while (4 > (charte.length >> (Math.min(Math.abs(2), 3))) && 4 > (2 >> (Math.min(5, cornerQ.length)))) {
         charte = [2];
         break;
      }
         cornerQ = `${sourceH.length}`;
         charte.push(cornerQ.length);
      if (4 <= (1 + sourceH.length)) {
          let gpaye = 5.0;
          let storeW = String.fromCharCode(121,95,50,51,95,112,99,97,99,104,101,0);
          let goalL = 0.0;
          let v_managerD: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,98,97,99,107,112,116,114,0),true ], [String.fromCharCode(108,95,55,95,102,112,115,0),true ], [String.fromCharCode(100,95,56,56,95,114,110,103,0),true ]]);
          let sheetr = String.fromCharCode(112,114,101,99,97,108,99,95,107,95,56,53,0);
         charte.push(2 + charte.length);
         gpaye -= (storeW == String.fromCharCode(48,0) ? storeW.length : parseInt(`${goalL}`));
         goalL *= parseInt(`${goalL}`) / (Math.max(5, v_managerD.size));
         v_managerD = new Map([[`${v_managerD.size}`, v_managerD.size]]);
         sheetr += `${parseInt(`${goalL}`)}`;
      }
          let analyticc = 5.0;
          let sansx: Array<any> = [213, 300, 304];
         charte = [(cornerQ == String.fromCharCode(78,0) ? sansx.length : cornerQ.length)];
         analyticc += parseInt(`${analyticc}`) * 1;
         sansx.push(1);
      let placeholder1 = cornerQ == String.fromCharCode(106,97,48,110,108,113,52,102,119,0);
      do {
         cornerQ += `${(String.fromCharCode(85,0) == cornerQ ? charte.length : cornerQ.length)}`;
         if (placeholder1) {
            break;
         }
      } while ((cornerQ.startsWith(`${charte.length}`)) && placeholder1);
       let langkeyp = 2;
      let reducerV = 6230904 <= sourceH.length;
      do {
         sourceH = [charte.length];
         if (reducerV) {
            break;
         }
      } while (reducerV && ((langkeyp - 4) < 2));
      chinasameK.set(`${videocommonU}`, model2.size % 1);
       let combinedU: Map<any, any> = new Map([[String.fromCharCode(115,99,116,112,95,101,95,50,51,0),true ], [String.fromCharCode(116,95,56,56,95,109,97,106,0),false ], [String.fromCharCode(100,95,57,49,95,115,116,114,97,116,101,103,121,0),true ]]);
      while ((combinedU.size * combinedU.size) == 4) {
          let vignettej = 5.0;
          let episodesU = String.fromCharCode(117,95,49,49,95,110,101,101,100,0);
          let traminiW = String.fromCharCode(118,101,114,116,105,99,101,115,95,50,95,52,55,0);
         combinedU = new Map([[episodesU, 2 - episodesU.length]]);
         vignettej -= 2;
         traminiW += `${traminiW.length >> (Math.min(5, Math.abs(parseInt(`${vignettej}`))))}`;
         break;
      }
         combinedU.set(`${combinedU.size}`, combinedU.size - 2);
         combinedU = new Map([[`${combinedU.size}`, combinedU.size - 1]]);
      model2 = new Map([[`${heji0}`, (String.fromCharCode(83,0) == videocommonU ? videocommonU.length : (heji0 ? 4 : 2))]]);
      videocommonU = `${3 - videocommonU.length}`;
      chinasameK.set(`${heji0}`, sentryj.length);
   if ((4 * model2.size) == 3) {
      sentryj += `${sentryj.length}`;
   }
   if ((4 >> (Math.min(4, Math.abs(chinasameK.size)))) < 5 || 2 < (4 >> (Math.min(2, Math.abs(chinasameK.size))))) {
      dycreatorm = `${(2 << (Math.min(4, Math.abs((heji0 ? 1 : 1)))))}`;
   }
   for (let i = 0; i < 1; i++) {
       let flyerI: Array<any> = [996, 617, 401];
         flyerI = [flyerI.length % 2];
       let formt = 4.0;
       let formO = 3.0;
         formt -= 3 / (Math.max(3, parseInt(`${formt}`)));
      videocommonU = `${sentryj.length | videocommonU.length}`;
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
       let default_tmh: Array<any> = [151, 734, 32];
    let plash_ = 5;
    let zooma = 1.0;
    let trashC: Array<any> = [String.fromCharCode(116,98,109,108,95,121,95,49,0), String.fromCharCode(99,111,110,116,97,99,116,95,53,95,56,50,0)];
    let descy = 2;
    let package_2wA = String.fromCharCode(110,95,49,56,95,106,101,114,114,111,114,0);
    let livei = 5.0;
    let episodesh = 0.0;
    let historyI: Map<any, any> = new Map([[String.fromCharCode(105,110,118,101,114,115,105,111,110,95,119,95,57,49,0),84], [String.fromCharCode(115,112,101,114,97,116,111,114,95,119,95,55,52,0),441]]);
    let applicationp = String.fromCharCode(113,95,49,48,95,115,101,97,0);
    let large6 = String.fromCharCode(101,95,56,95,112,114,105,111,0);
    let updatesn = true;
    let eactf: Map<any, any> = new Map([[String.fromCharCode(97,95,57,49,95,100,111,118,101,0),String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,107,95,53,48,0)], [String.fromCharCode(116,111,112,105,99,95,111,95,54,57,0),String.fromCharCode(102,95,49,95,115,117,98,112,97,99,107,101,116,115,0)]]);
    let middleR: Array<any> = [124, 145, 847];
   if (2 >= (trashC.length % (Math.max(5, descy)))) {
      descy &= parseInt(`${livei}`) << (Math.min(4, Math.abs(plash_)));
   }
      historyI = new Map([[`${descy}`, descy]]);
   for (let s = 0; s < 2; s++) {
       let placeholder9 = String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,95,104,95,49,0);
       let rulesQ = String.fromCharCode(114,101,103,117,108,97,114,95,114,95,52,56,0);
       let emoji2 = String.fromCharCode(119,95,55,50,95,100,111,119,110,115,97,109,112,108,101,0);
         placeholder9 += `${placeholder9.length}`;
      if (emoji2 != String.fromCharCode(66,0)) {
          let actived = 5.0;
          let large8 = true;
         rulesQ += `${emoji2.length}`;
         actived /= Math.max(parseFloat(`${parseInt(`${actived}`) + 1}`), 3);
         large8 = !large8 && actived == 53.47;
      }
          let background0 = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,95,50,95,54,55,0);
         placeholder9 += `${(String.fromCharCode(70,0) == background0 ? emoji2.length : background0.length)}`;
         rulesQ += `${emoji2.length - 3}`;
         rulesQ += `${rulesQ.length - emoji2.length}`;
          let x_images = true;
         placeholder9 += `${emoji2.length}`;
      for (let z = 0; z < 3; z++) {
          let controlsz = String.fromCharCode(114,101,102,95,113,95,54,51,0);
          let pressureB = 1.0;
          let sendT: Array<any> = [String.fromCharCode(98,95,49,53,95,114,118,100,115,112,0), String.fromCharCode(104,95,55,51,95,106,114,101,118,100,99,116,0), String.fromCharCode(97,114,114,97,121,95,107,95,51,50,0)];
         emoji2 = `${3 ^ parseInt(`${pressureB}`)}`;
         controlsz += `${(String.fromCharCode(84,0) == controlsz ? sendT.length : controlsz.length)}`;
         pressureB /= Math.max(5, parseFloat(`${1}`));
         sendT.push(controlsz.length);
      }
      let appleo = rulesQ.length <= 6432899;
      do {
         rulesQ = `${placeholder9.length}`;
         if (appleo) {
            break;
         }
      } while (appleo && (emoji2 != rulesQ));
      if (emoji2.startsWith(`${rulesQ.length}`)) {
         rulesQ = `${emoji2.length}`;
      }
      plash_ /= Math.max(trashC.length, 4);
   }
       let switch_u2k: Array<any> = [759, 916];
         switch_u2k = [3 >> (Math.min(4, switch_u2k.length))];
         switch_u2k.push(switch_u2k.length);
         switch_u2k = [3];
      descy %= Math.max(3 << (Math.min(3, default_tmh.length)), 5);
      plash_ += historyI.size << (Math.min(2, Math.abs(plash_)));
      zooma -= (parseFloat(`${String.fromCharCode(75,0) == package_2wA ? plash_ : package_2wA.length}`));
       let scheduled = false;
       let utilsj = 0.0;
       let crownX = true;
         scheduled = 73.20 < utilsj && crownX;
          let teamu = String.fromCharCode(112,95,57,48,95,122,109,113,115,104,101,108,108,0);
          let fullL = 4.0;
         scheduled = utilsj <= 20.80;
         teamu += `${(String.fromCharCode(90,0) == teamu ? teamu.length : parseInt(`${fullL}`))}`;
         fullL /= Math.max(3 << (Math.min(2, teamu.length)), 5);
       let stationX = 4.0;
       let googlez = 3.0;
      for (let s = 0; s < 2; s++) {
         crownX = utilsj == 45.94;
      }
         crownX = googlez == 35.48;
         stationX += parseFloat(`${parseInt(`${googlez}`) + parseInt(`${stationX}`)}`);
      while (5.65 <= (utilsj - 2.46) && (2.46 - utilsj) <= 4.100) {
         googlez -= parseFloat(`${parseInt(`${utilsj}`) - 2}`);
         break;
      }
      if (scheduled) {
         scheduled = utilsj <= 55.42;
      }
         crownX = 30.95 > googlez;
      livei *= parseInt(`${livei}`);
      default_tmh = [1 & trashC.length];
   for (let j = 0; j < 1; j++) {
       let catagoryS: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,99,104,97,105,110,95,114,95,52,48,0),484], [String.fromCharCode(122,95,53,57,95,111,112,116,105,109,105,122,97,116,105,111,110,0),218], [String.fromCharCode(120,95,55,57,95,98,105,110,111,109,105,97,108,0),731]]);
       let crossq = String.fromCharCode(101,104,105,103,104,95,103,95,51,48,0);
      let gifti = 9729023 >= catagoryS.size;
      do {
          let dangerP = String.fromCharCode(105,110,116,101,114,109,105,100,105,97,116,101,95,115,95,57,53,0);
          let sinat = true;
          let bodanL: Array<any> = [398, 940];
          let internete = String.fromCharCode(118,101,110,99,95,102,95,53,51,0);
          let faste = 2.0;
         catagoryS = new Map([[`${catagoryS.size}`, 1]]);
         dangerP += `${(String.fromCharCode(56,0) == dangerP ? (sinat ? 1 : 4) : dangerP.length)}`;
         sinat = 40 <= internete.length;
         bodanL.push(((sinat ? 3 : 5)));
         internete += `${((sinat ? 3 : 5) | 1)}`;
         faste += 2 + internete.length;
         if (gifti) {
            break;
         }
      } while (gifti && (1 >= catagoryS.size));
      let y_imageM = 6111855 <= catagoryS.size;
      do {
          let action_ = 3.0;
          let emoji4 = true;
         catagoryS.set(`${emoji4}`, 3 % (Math.max(5, parseInt(`${action_}`))));
         if (y_imageM) {
            break;
         }
      } while (((crossq.length << (Math.min(Math.abs(5), 2))) > 5 && (catagoryS.size << (Math.min(crossq.length, 2))) > 5) && y_imageM);
      for (let d = 0; d < 2; d++) {
          let hooksT: Array<any> = [572, 982, 33];
         catagoryS = new Map([[`${hooksT.length}`, hooksT.length >> (Math.min(Math.abs(1), 2))]]);
      }
         catagoryS = new Map([[`${catagoryS.size}`, catagoryS.size]]);
         catagoryS = new Map([[`${catagoryS.size}`, (crossq == String.fromCharCode(109,0) ? crossq.length : catagoryS.size)]]);
         catagoryS = new Map([[`${catagoryS.size}`, crossq.length]]);
      descy %= Math.max(parseInt(`${zooma}`) << (Math.min(crossq.length, 1)), 2);
   }
   for (let w = 0; w < 1; w++) {
       let rankW: Map<any, any> = new Map([[String.fromCharCode(99,95,55,54,95,116,121,112,101,115,101,116,116,101,114,0),false ], [String.fromCharCode(102,95,49,52,95,98,108,97,99,107,0),false ]]);
       let indicatoro = 3.0;
      let rewindp = rankW.size <= 6423661;
      do {
         rankW.set(`${indicatoro}`, parseInt(`${indicatoro}`) & rankW.size);
         if (rewindp) {
            break;
         }
      } while ((!Array.from(rankW.values()).includes(indicatoro)) && rewindp);
       let popupf = String.fromCharCode(108,95,57,50,95,115,105,110,100,101,120,0);
      for (let b = 0; b < 1; b++) {
          let loginQ = String.fromCharCode(97,99,107,115,95,54,95,55,49,0);
          let mimo0 = String.fromCharCode(115,117,98,118,97,108,117,101,95,49,95,52,50,0);
          let updatesR = 4.0;
         indicatoro += loginQ.length;
         loginQ = `${parseInt(`${updatesR}`)}`;
         mimo0 += `${mimo0.length}`;
         updatesR *= parseInt(`${updatesR}`) & 3;
      }
       let coreP = String.fromCharCode(102,111,99,117,115,95,56,95,55,54,0);
       let yellowu = String.fromCharCode(111,95,50,95,106,102,105,101,108,100,115,0);
      for (let q = 0; q < 2; q++) {
         indicatoro *= rankW.size / 2;
      }
      if (!yellowu.endsWith(`${rankW.size}`)) {
         yellowu += `${(String.fromCharCode(113,0) == popupf ? yellowu.length : popupf.length)}`;
      }
      trashC.push(rankW.size);
   }
      livei -= parseInt(`${livei}`) + 2;
       let backgroundZ: Map<any, any> = new Map([[String.fromCharCode(119,95,51,50,95,116,117,110,110,101,108,101,100,0),false ], [String.fromCharCode(99,97,108,108,111,99,95,109,95,55,50,0),false ]]);
       let flyerA: Map<any, any> = new Map([[String.fromCharCode(112,115,102,105,108,101,95,116,95,51,51,0),String.fromCharCode(115,97,116,95,51,95,56,53,0)], [String.fromCharCode(107,95,49,52,95,97,110,111,110,121,109,111,117,115,0),String.fromCharCode(105,110,116,101,114,97,116,105,111,110,95,48,95,53,49,0)]]);
       let videocommonC = 5.0;
         flyerA.set(`${flyerA.size}`, flyerA.size);
         videocommonC -= backgroundZ.size;
         backgroundZ = new Map([[`${flyerA.size}`, flyerA.size]]);
      let entrya = flyerA.size >= 9031680;
      do {
         flyerA.set(`${backgroundZ.size}`, 3 * flyerA.size);
         if (entrya) {
            break;
         }
      } while (entrya && (flyerA.get(`${backgroundZ.size}`) == null));
      let whistleh = 7653596.0 >= videocommonC;
      do {
         videocommonC *= parseInt(`${videocommonC}`);
         if (whistleh) {
            break;
         }
      } while ((5 >= (2 % (Math.max(1, flyerA.size))) && (2 << (Math.min(4, Math.abs(flyerA.size)))) >= 2) && whistleh);
       let rank8 = true;
          let currente = true;
         rank8 = flyerA.size == 15;
         currente = !currente && !currente;
      if (backgroundZ.size > 1) {
         videocommonC += flyerA.size | 2;
      }
      for (let b = 0; b < 2; b++) {
          let condensed7 = String.fromCharCode(97,95,50,56,95,105,110,105,116,105,97,108,108,121,0);
          let miniH = 2;
          let flyera = 1.0;
          let sliderG: Array<any> = [String.fromCharCode(122,95,54,48,95,115,104,111,114,116,101,110,0), String.fromCharCode(118,97,108,105,100,97,116,97,98,108,101,95,48,95,51,55,0)];
          let loadingd: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,114,105,100,101,115,95,101,95,50,0),893], [String.fromCharCode(117,95,56,52,95,101,112,104,101,109,101,114,97,108,0),72]]);
         flyerA = new Map([[`${flyerA.size}`, 3]]);
         condensed7 = `${condensed7.length}`;
         miniH /= Math.max(parseInt(`${flyera}`) << (Math.min(5, Math.abs(miniH))), 5);
         flyera *= parseFloat(`${sliderG.length - 2}`);
         sliderG = [loadingd.size];
         loadingd.set(`${miniH}`, loadingd.size);
      }
      descy -= parseInt(`${zooma}`) / (Math.max(5, descy));
   for (let d = 0; d < 2; d++) {
      applicationp = `${default_tmh.length >> (Math.min(Math.abs(3), 4))}`;
   }
       let bootsplashE: Map<any, any> = new Map([[String.fromCharCode(114,95,54,55,95,98,97,114,114,101,116,116,0),803], [String.fromCharCode(104,111,110,101,95,100,95,54,53,0),782]]);
       let moviesq: Array<any> = [971, 513, 459];
          let scores = 3.0;
          let typingh = 3.0;
         bootsplashE = new Map([[`${bootsplashE.size}`, moviesq.length << (Math.min(Math.abs(2), 1))]]);
         scores /= Math.max(parseFloat(`${parseInt(`${typingh}`)}`), 3);
          let light3 = String.fromCharCode(109,95,50,55,95,108,111,99,97,116,101,100,0);
         bootsplashE = new Map([[`${bootsplashE.size}`, bootsplashE.size / 1]]);
         light3 += `${(String.fromCharCode(88,0) == light3 ? light3.length : light3.length)}`;
      if (3 < (moviesq.length >> (Math.min(Math.abs(4), 3)))) {
         bootsplashE.set(`${moviesq.length}`, bootsplashE.size | 1);
      }
      if ((bootsplashE.size + moviesq.length) <= 2 && (bootsplashE.size + moviesq.length) <= 2) {
         moviesq = [moviesq.length ^ 2];
      }
      let progresss = moviesq.length >= 7415604;
      do {
         moviesq = [moviesq.length];
         if (progresss) {
            break;
         }
      } while (progresss && ((5 | bootsplashE.size) < 5 || 4 < (bootsplashE.size | 5)));
         moviesq.push(bootsplashE.size);
      episodesh -= parseFloat(`${bootsplashE.size >> (Math.min(Math.abs(3), 1))}`);
   if (4 <= (applicationp.length % (Math.max(1, historyI.size)))) {
      historyI = new Map([[`${trashC.length}`, trashC.length ^ 3]]);
   }
      applicationp += `${applicationp.length | 3}`;

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      !ttFast.isVip(userState.user);

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
                {seekDirection === "fillDownloader" ? (
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
                source={require("@static/images/blacklistTumbnail.gif")}
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
    color: "plashPlusZhengpian",
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
